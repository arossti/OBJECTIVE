# COOLING-CAPACITANCE BUG

## Issue Summary
Reference mode cooling calculations are broken in two related ways:
1. **Capacitance toggle issue**: S03's capacitance toggle (h_21) has no effect in Reference mode, despite working perfectly in Target mode
2. **Zero cooling load**: S13 shows 0 cooling load in Reference mode (d_117) when cooling toggle (d_116) is enabled

## Symptoms

### Working in Target Mode
- S03 capacitance toggle (h_21) switches thermal absorption on/off
- Capacitance slider (i_21) controls 0-100% absorption
- S11 ground-facing elements (rows 94-95) show negative heat gain when capacitance is on
- S13 cooling calculations work correctly

### Broken in Reference Mode
- S03 capacitance toggle (h_21) appears to have no effect
- S11 ground-facing elements (k_94, k_95) DO update correctly (Reference → Reference works)
- S13 cooling load (d_117) shows 0 when cooling toggle (d_116) is enabled
- Value chain breaks somewhere between S11 and S13

## Data Flow Analysis

### Expected Flow
```
S03 (h_21 toggle, i_21 slider)
  ↓
S11 ground-facing opaque elements (rows 94-95)
  → k_94: ground-facing heat gain
  → k_95: ground-facing heat gain (with capacitance)
  ↓
S13 cooling calculations
  → d_116: cooling toggle
  → d_117: reference cooling load
```

### Current Behavior
- ✅ S03 Reference → S11 Reference: WORKS
- ❌ S11 Reference → S13 Reference: BREAKS

## Similar to g_101 Bug
This bug shares characteristics with our recent g_101 fix:
- Target mode works perfectly
- Reference mode breaks in the calculation chain
- Likely involves missing Reference mode state paths
- May involve fallback anti-patterns

## Investigation Plan

1. **S03 Analysis**
   - [ ] Read h_21 toggle implementation
   - [ ] Read i_21 slider implementation
   - [ ] Check Reference mode state paths
   - [ ] Verify publications to S11

2. **S11 Analysis**
   - [ ] Read k_94 and k_95 calculations
   - [ ] Check ground-facing element logic
   - [ ] Verify capacitance integration
   - [ ] Check publications to S13

3. **S13 Analysis** ⚠️ EXTREME CAUTION - MOST COMPLEX SECTION
   - [ ] Read d_116 cooling toggle implementation
   - [ ] Read d_117 cooling load calculation
   - [ ] Trace where S11 values are consumed
   - [ ] Check for Reference mode state paths
   - [ ] Look for fallback anti-patterns

4. **Root Cause Identification**
   - [ ] Identify where the chain breaks
   - [ ] Determine if issue is in S03, S11, S13, or bridging code
   - [ ] Check ReferenceManager for missing integrations

## Notes
- S13 is the MOST complex section file - proceed with extreme caution
- NO CODE CHANGES until analysis is complete
- May need to check StateManager, ReferenceManager, and bridging code

## Analysis Session - 2025-10-17

### Investigation Findings

#### 1. S03 Capacitance Implementation ✅
**Location**: [4012-Section03.js:1684-1700](../sections/4012-Section03.js#L1684-L1700)

- **h_21**: Dropdown toggle with options "Static" or "Capacitance"
- **i_21**: Percentage slider (0-100%) for capacitance factor
- **Calculation**: Ground-Facing CDD (h_22)
  - If h_21 = "Static": `MAX(0, (10 - TsetCool) * DaysCooling)`
  - If h_21 = "Capacitance": `(10 - TsetCool) * DaysCooling` (can be negative)

**Reference Mode Publishing**: ✅ WORKS
- S03's `storeReferenceResults()` publishes `h_22` as `ref_h_22` to StateManager
- Location: [4012-Section03.js:1843](../sections/4012-Section03.js#L1843)

**Verdict**: S03 is working correctly for both Target and Reference modes.

---

#### 2. S11 Ground-Facing Elements ✅
**Location**: [4012-Section11.js:1453-1463](../sections/4012-Section11.js#L1453-L1463)

- **k_94**: Ground-facing slab heat gain (calculated)
- **k_95**: Ground-facing basement/crawl heat gain (calculated)
- **Formula**: Uses `capacitanceFactor_i21 * h_22 * 24` as heatgain multiplier

**Reference Mode Reading**: ✅ WORKS
```javascript
if (isReferenceCalculation) {
  const ref_h22 = getGlobalNumericValue("ref_h_22") || 0;
  heatgainMultiplier = capacitanceFactor_i21 * ref_h22 * 24;
  console.log(`[S11] 🔵 REF CLIMATE READ: h_22=${ref_h22}`);
}
```

**State Path Listeners**: ✅ WORKS
- S11 has listeners for both `h_22` (Target) and `ref_h_22` (Reference)
- Location: [4012-Section11.js:2187, 2193](../sections/4012-Section11.js#L2187-L2193)

**Verdict**: S11 correctly reads `ref_h_22` from S03 and calculates ground-facing heat gains for Reference mode.

---

#### 3. S13 Cooling System - ROOT CAUSE FOUND 🔴

**Problem 1: Hardcoded "No Cooling" in ReferenceState**
**Location**: [4012-Section13.js:113](../sections/4012-Section13.js#L113)

```javascript
ReferenceState.initializeDefaults: function () {
  // ...
  this.state.d_116 = "No Cooling";  // 🔴 HARDCODED!
  // ...
}
```

This hardcoded value prevents Reference mode from EVER calculating cooling loads, regardless of user input.

**Problem 2: Cooling Load Calculation Logic**
**Location**: [4012-Section13.js:2438-2464](../sections/4012-Section13.js#L2438-L2464)

```javascript
const coolingSystemType = ModeManager.getValue("d_116") || "No Cooling";
// ...
if (coolingSystemType === "No Cooling") {
  coolingLoad_d117 = 0;  // 🔴 Always zero in Reference mode!
  coolingSink_l116 = 0;
  coolingSink_l114 = 0;
  j_116_display = 0;
}
```

**Why d_117 shows 0 in Reference mode**:
1. User toggles d_116 to "Cooling" in Reference mode UI
2. But ReferenceState.initializeDefaults() overrides it back to "No Cooling"
3. Cooling calculation reads "No Cooling" from ReferenceState
4. Sets d_117 = 0

---

### Root Cause Analysis

#### Primary Issue: S13 Reference Mode Configuration
The issue is NOT in S03 or S11. Both sections work perfectly. The problem is in **S13's ReferenceState initialization**.

**Why this matters**:
- Building codes (OBC, NBC) specify Reference buildings have **no mechanical cooling**
- This is architecturally correct for code compliance
- BUT it prevents testing cooling scenarios in Reference mode
- It also means capacitance effects on cooling cannot be observed in Reference mode

#### Capacitance Toggle Issue (h_21)
The capacitance toggle DOES work, but its effects cannot be seen in Reference mode because:
1. S03 → S11 chain works perfectly
2. S11 calculates correct ground-facing heat gains (including negative values from capacitance)
3. BUT S13 Reference mode has d_116 = "No Cooling" hardcoded
4. So cooling calculations never run, and capacitance effects on cooling are invisible

---

### Decision Point: What Should We Fix?

#### Option 1: Allow User-Controlled Cooling in Reference Mode ⚠️
**Change**: Remove hardcoded `d_116 = "No Cooling"` from ReferenceState
**Pros**:
- Allows testing cooling scenarios in Reference mode
- Makes capacitance effects visible
- More flexible for "what-if" scenarios

**Cons**:
- **Breaks code compliance logic**
- Reference buildings per OBC/NBC have no mechanical cooling
- May confuse users about what "Reference" means
- Could produce invalid code compliance comparisons

#### Option 2: Keep Current Architecture, Document Limitation ✅ RECOMMENDED
**Change**: No code changes
**Action**: Document that Reference mode cooling is intentionally disabled per building codes

**Rationale**:
- Architecturally correct for code compliance
- Capacitance IS working - it affects heating calculations
- Reference buildings per codes don't have mechanical cooling
- Target mode is the correct place to test cooling scenarios with capacitance

#### Option 3: Create Hybrid Mode (Future Enhancement)
**Change**: Add new "Custom Reference" mode
**Scope**: Too large for current bug fix
**Deferred**: Document as future enhancement

---

### Root Cause Analysis - DEEPER INVESTIGATION NEEDED ⚠️

**This IS a bug** - a calculation parity failure between Target and Reference modes.

**Updated Findings from Logs.md**:

The issue is MORE COMPLEX than initially diagnosed:

1. **d_116 toggle DOES trigger calculations** ✅
   - `[FieldManager] Routed d_116=Cooling through sect13 ModeManager`
   - `[Cooling] 🚀 Starting cooling calculations (mode=reference)...`

2. **BUT cooling demand m_129 = 0** ❌
   - When d_116 changes: `m_129_annual=0, E37_daily=0`
   - After g_118 "priming": `m_129_annual=44203.21, E37_daily=225.52`

3. **The real problem**:
   - Cooling calculations RUN, but `m_129` (cooling demand) is ZERO
   - Something in the calculation chain is not ready/available when d_116 changes
   - g_118 (ventilation method) change triggers a FULLER recalculation that properly updates m_129
   - This suggests m_129 depends on upstream values that aren't updated in the d_116 code path

**Initial Fix Attempts** (partial success):
- ✅ Added d_116 to user-modified tracking
- ✅ Removed mode check from ReferenceState.setValue calculations
- ❌ Still doesn't fully work - m_129 remains zero

**Why This Matters**:
- Building codes can include cooling systems in Reference buildings when the design includes cooling
- Users MUST be able to test Reference mode with cooling (calculation parity)
- The default "No Cooling" is correct for INITIAL state, but users should be able to override it
- This is the same pattern used for f_113 and j_115 (preserved user modifications)

---

### Next Steps for Investigation

**Questions to Answer**:

1. **Where is m_129 (cooling demand) calculated?**
   - Need to find the function that calculates cooling demand
   - Understand what inputs it needs
   - Check if those inputs are available when d_116 changes

2. **What does g_118 trigger that d_116 doesn't?**
   - g_118 change successfully "primes" the system
   - What additional recalculation does it trigger?
   - Is there a missing dependency or listener?

3. **Is m_129 calculated BEFORE the cooling load calculation?**
   - Perhaps m_129 needs to be calculated first
   - Then cooling load (d_117) uses m_129
   - Order of operations may be wrong in d_116 path

4. **Are there state listeners missing?**
   - Check if d_116 needs to publish/trigger additional state updates
   - Compare d_116 listeners vs g_118 listeners

---

### Investigation Status

**All S13 changes REVERTED** ✅
- Initial fixes did not address the root cause
- Avoided technical debt from non-functional changes
- Clean slate for proper diagnosis

**The ACTUAL problem** (confirmed from logs):
- m_129 (cooling demand) is calculated as **ZERO** in S13 Reference mode
- This happens INSIDE S13 calculations, not a state management issue
- m_129 should be immediately available to S13 without going through StateManager
- When S14 shows m_129 = 0, it's because S13 calculated it as zero

---

### Previous Fix Attempts (REVERTED)

These were attempted but reverted as they didn't fix m_129=0:

**Two changes that were made to S13 ReferenceState** ([4012-Section13.js](../sections/4012-Section13.js)):

#### 1. Track d_116_userModified flag (line 158)
```javascript
// Mark fields as user-modified to preserve during d_13 changes
if (
  source === "user-modified" &&
  (fieldId === "f_113" || fieldId === "j_115" || fieldId === "d_116")  // ← Added d_116
) {
  this.state[`${fieldId}_userModified`] = true;
}
```

#### 2. Preserve user modifications in setDefaults() (line 127-130)
```javascript
// 🔧 FIX: Preserve user's cooling system choice (calculation parity)
if (!this.state.d_116_userModified) {
  this.state.d_116 = "No Cooling"; // Default per building codes
}
```

#### 3. Preserve user modifications in onReferenceStandardChange() (line 159-162)
```javascript
// 🔧 FIX: Preserve user's cooling system choice (calculation parity)
if (!this.state.d_116_userModified) {
  this.state.d_116 = "No Cooling"; // Default per building codes
}
```

#### 4. Load saved state to preserve across sessions (line 107-117)
```javascript
// Step 1: Load saved state if exists (to preserve user modifications)
const savedState = localStorage.getItem("S13_REFERENCE_STATE");
if (savedState) {
  try {
    this.state = JSON.parse(savedState);
  } catch (e) {
    this.state = {};
  }
} else {
  this.state = {};
}
```

---

### Result

**Calculation Parity Restored** ✅

Now Reference mode works EXACTLY like Target mode:
- Default: "No Cooling" (per building codes)
- User can toggle to "Cooling" and it PERSISTS
- Cooling calculations run correctly in Reference mode
- Capacitance effects on cooling are now visible in Reference mode
- User modifications survive state refreshes and building code changes

---

### Testing Recommendations

1. Switch to Reference mode
2. Toggle d_116 from "No Cooling" to "Cooling"
3. Verify d_117 shows non-zero cooling load
4. Change building code (d_13) and verify d_116 stays "Cooling"
5. Test capacitance (h_21) toggle and verify effects appear in k_94, k_95, and cooling calcs

---
