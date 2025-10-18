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
- Users need to test Cooling/No Cooling scenarios in the Reference model
- This bug prevents testing cooling scenarios in Reference mode
- It also means capacitance effects or indoor RH% (i_59)set in S08 on cooling cannot be observed in Reference mode

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

## Debugging Strategy: console.trace() Approach

**Date:** October 18, 2025

### Relevance of d_12 State Mixing Bug Debugging Approach

The d_12 bug debugging approach (documented in [d_12-STATE-MIXING-DIAGNOSTIC-REPORT.md](history (completed)/d_12-STATE-MIXING-DIAGNOSTIC-REPORT.md)) used `console.trace()` to capture call stacks when mysterious state writes occurred.

**d_12 Bug Pattern:**
- Symptom: Unprefixed `d_12` being written when only `ref_d_12` should be written
- Mystery: Couldn't find WHERE the write was coming from
- Solution: Added `console.trace()` to StateManager.setValue() to capture full call stack
- Result: Revealed the "ghost writer" by showing exact function call chain

**Our m_129=0 Bug Pattern:**
- Symptom: m_129 calculates as 0 when triggered by d_116, but correctly when triggered by g_118
- Mystery: Can't find WHY m_129 calculation returns 0 in d_116 path
- Both paths trigger cooling calculations, but produce different results

### Applicability Assessment: ✅ HIGHLY RELEVANT

**Similarities:**
1. **Mystery behavior**: Both bugs involve "something" happening (or not happening) with unclear origin
2. **Different code paths**: d_12 had multiple handlers; m_129 has d_116 vs g_118 trigger paths
3. **Logs show symptom but not cause**: Both show the RESULT (unprefixed write / m_129=0) but not the WHY

**Key Difference:**
- d_12 bug: Needed to find WHO was calling a function
- m_129 bug: Need to understand WHY a calculation returns 0

### Proposed Debugging Approach

Add strategic `console.trace()` calls to trace the m_129 calculation path:

#### 1. Trace m_129 Calculation Origin
```javascript
// In S13 where m_129 is calculated
if (m_129 === 0 || m_129_annual === 0) {
  console.log(`[DEBUG m_129] Calculated as ZERO: m_129=${m_129}, m_129_annual=${m_129_annual}`);
  console.trace("Call stack when m_129=0:");
}
```

#### 2. Trace Critical Input Values
```javascript
// Where cooling demand inputs are gathered
console.log(`[DEBUG m_129 INPUTS] mode=${mode}, coolingSystemType=${coolingSystemType}`);
console.log(`[DEBUG m_129 INPUTS] S11 values: k_94=${k_94}, k_95=${k_95}`);
console.log(`[DEBUG m_129 INPUTS] Climate: CDD=${CDD}, capacitance=${capacitanceFactor}`);
if (someValueIsZeroOrMissing) {
  console.trace("Call stack when critical input is missing:");
}
```

#### 3. Compare d_116 vs g_118 Paths
```javascript
// In d_116 handler
console.log(`[DEBUG TRIGGER] d_116 changed to: ${value}`);
console.trace("d_116 trigger path:");

// In g_118 handler
console.log(`[DEBUG TRIGGER] g_118 changed to: ${value}`);
console.trace("g_118 trigger path:");
```

### Expected Insights

This approach should reveal:

1. **Call Stack Differences**: Why g_118 path has m_129>0 but d_116 path has m_129=0
2. **Calculation Order**: Whether m_129 is calculated before needed inputs are ready
3. **Missing Dependencies**: Which upstream values are 0/undefined in d_116 path but available in g_118 path
4. **Listener Chain**: Which recalculations fire in g_118 path but not d_116 path

### Implementation Strategy

1. **Add traces to S13 m_129 calculation** - Capture when it returns 0
2. **Add traces to d_116 and g_118 handlers** - Compare trigger paths
3. **Test both scenarios**:
   - Toggle d_116: "No Cooling" → "Cooling" (captures m_129=0 path)
   - Change g_118: Any value change (captures m_129>0 path)
4. **Compare stack traces** - Identify where paths diverge

### Success Criteria

When we see the stack traces, we should be able to answer:
- What functions are called in g_118 path that aren't called in d_116 path?
- Are there intermediate calculation steps that d_116 path skips?
- Does m_129 calculation depend on values that g_118 updates but d_116 doesn't?

---

## ROOT CAUSE IDENTIFIED - October 18, 2025

### THE ACTUAL ROOT CAUSE: Cooling.js Initialization Flaw ⚠️

**Target vs Reference Calculation Parity Violation**

After tracing why Target mode works perfectly but Reference mode fails, the root cause is found in **Cooling.js initialization**:

**Location**: [4012-Cooling.js:693-747](../4012-Cooling.js#L693-L747)

```javascript
function initialize(params = {}) {
  // Try to get values from StateManager if available
  if (typeof window.TEUI.StateManager !== "undefined") {
    // ❌ BUG: Reads ONLY unprefixed values (Target mode)
    const coolingSetpoint = window.TEUI.StateManager.getValue("h_24"); // NO ref_ prefix
    state.coolingSetTemp = coolingSetpoint ? parseFloat(coolingSetpoint) : 24;

    const cdd = window.TEUI.StateManager.getValue("d_21"); // NO ref_ prefix
    state.coolingDegreeDays = cdd ? parseFloat(cdd) : 196;

    const volume = window.TEUI.StateManager.getValue("d_105"); // NO ref_ prefix
    state.buildingVolume = volume ? parseFloat(volume.toString().replace(/,/g, "")) : 8000;

    const area = window.TEUI.StateManager.getValue("h_15"); // NO ref_ prefix
    state.buildingArea = area ? parseFloat(area.toString().replace(/,/g, "")) : 1427.2;

    const indoorRH = window.TEUI.StateManager.getValue("i_59"); // NO ref_ prefix
    state.indoorRH = indoorRH ? parseFloat(indoorRH) / 100 : 0.45;
  }

  // ❌ BUG: Only calculates Target mode on initialization
  calculateAll("target");

  state.initialized = true;
}
```

### Why Target Mode Works Perfectly

**Target mode initialization flow:**
1. App loads → StateManager populated with S02/S03/S08/S12 values
2. Cooling.js `initialize()` runs → reads unprefixed values ✅
3. Calls `calculateAll("target")` → populates Target cooling values ✅
4. User toggles d_116 → S13 calls `CoolingCalculations.calculateAll("target")` ✅
5. Cooling.js reads fresh values via `getModeAwareValue()` (no prefix) ✅
6. **Everything works because Target values were initialized and exist**

### Why Reference Mode Fails

**Reference mode "cold start" flow:**
1. App loads → StateManager populated with **unprefixed** values only
2. Cooling.js `initialize()` runs → reads unprefixed values (Target)
3. Calls `calculateAll("target")` → **NEVER calls with "reference"** ❌
4. User switches to Reference mode → Changes d_116 to "Cooling"
5. S13 calls `CoolingCalculations.calculateAll("reference")`
6. Cooling.js tries to read `ref_h_24`, `ref_d_21`, `ref_d_105`, `ref_h_15`, `ref_i_59`
7. **ALL RETURN NULL - Reference values were NEVER initialized** ❌
8. Falls back to defaults or 0 → m_129 = 0 ❌

**After g_118 "priming":**
1. g_118 change triggers `Calculator.calculateAll()`
2. **Full cascade runs S02 → S03 → S08 → S12**
3. These sections publish `ref_` prefixed values to StateManager ✅
4. NOW when Cooling.js calls `getModeAwareValue()`, `ref_*` values exist ✅
5. m_129 calculates correctly ✅

### The Smoking Gun (Secondary Issue)

**Location**: [4012-Section13.js:2234-2244](../sections/4012-Section13.js#L2234-L2244)

```javascript
// 🔧 FIX (Oct 7, 2025): Force complete calculator cascade when g_118 changes
// This ensures cooling calculations get proper climate/volume/area values
// which are initialized during full Calculator.calculateAll() but not S13-only calcs
if (fieldId === "g_118") {
  setTimeout(() => {
    if (window.TEUI?.Calculator?.calculateAll) {
      window.TEUI.Calculator.calculateAll();  // ← THIS IS THE "PRIMING"!
    }
  }, 50); // Small delay ensures S13 values published first
}
```

### What This Reveals

**g_118 "priming" works because**:
- g_118 change calls `calculateAll()` (local S13 calculations)
- THEN calls `window.TEUI.Calculator.calculateAll()` (FULL cascade across ALL sections)
- The full cascade populates upstream values (from S03/S08/S11) that m_129 needs
- Those values persist in StateManager, making subsequent changes work

**d_116 fails because**:
- d_116 change calls `calculateAll()` (local S13 calculations only)
- Does NOT call `Calculator.calculateAll()` (no full cascade)
- Upstream dependencies (climate data, building volume, area, humidity) aren't ready
- m_129 calculation reads zeros/nulls from StateManager → returns 0

### The Dependency Chain

m_129 (cooling demand) depends on values calculated in **other sections**:

1. **4012-Cooling.js** needs:
   - `d_105` (building volume) from S12
   - `h_15` (building area) from S02
   - `d_21` (CDD) from S03
   - `h_24` (cooling setpoint) from S03
   - `i_59` (indoor RH%) from S08

2. **Without full cascade**:
   - These values are null/0 in Cooling.js state
   - Latent load factor = 0
   - Free cooling limit = 0
   - m_129 = 0

3. **With full cascade** (g_118 path):
   - Calculator.calculateAll() runs S02 → S03 → S08 → S12 → S13
   - All upstream values populate correctly
   - Cooling.js gets valid inputs
   - m_129 calculates correctly

### Why "Laggy" After Priming

After g_118 priming, the values exist in StateManager state. But:
- Changes to capacitance (h_21) or humidity (i_59) only trigger their local section
- Those sections publish to StateManager
- But Cooling.js doesn't recalculate unless triggered
- Values appear "laggy" because the dependency chain is incomplete

### The Fix (Surgical Approach)

**Option 1: Add Calculator.calculateAll() to d_116 handler** ⚠️ RISKY
- Copy the g_118 pattern to d_116
- Could cause performance issues (full cascade on every cooling toggle)
- May have side effects we haven't discovered

**Option 2: Add proper dependency listeners to Cooling.js** ✅ RECOMMENDED
- Cooling.js should listen for changes to its dependencies
- When h_15, d_21, h_24, i_59, etc. change → recalculate
- More targeted, less risky
- Follows proper dependency management pattern

**Option 3: Ensure Calculator.calculateAll() runs on app load** ✅ REQUIRED
- Verify full cascade runs during initialization
- Ensures all values populated before user interactions
- Prevents the "need to prime" issue on first use

### CALCULATION PARITY FIX: Ensure Reference Values Are Initialized

The proper fix that achieves **calculation parity with Target mode** requires ensuring Reference values exist in StateManager before Cooling.js needs them.

#### Option 1: Ensure Calculator.calculateAll() Runs on App Initialization ✅ RECOMMENDED

**Why g_118 "priming" works**: It triggers `Calculator.calculateAll()` which runs the full cascade S02→S03→S08→S12, populating ALL `ref_*` values.

**The Fix**: Ensure this cascade happens **BEFORE** user interactions, not as a workaround.

**Code Change**: [4011-Calculator.js](../4011-Calculator.js) or initialization sequence

Verify that on app load:
1. Calculator.calculateAll() runs (it does - see line 519)
2. It calculates **BOTH** Target AND Reference models
3. All sections publish ref_* values to StateManager
4. **THEN** Cooling.js initializes

**Current Issue**: Cooling.js might initialize before Calculator runs the full cascade.

**Test**: Check initialization sequence in console logs:
```
[Calculator] Running calculateAll...
[Section02] Publishing ref_h_15...
[Section03] Publishing ref_d_21, ref_h_24...
[Section08] Publishing ref_i_59...
[Section12] Publishing ref_d_105...
[Cooling] Initializing...  ← Should come AFTER ref_ values exist
```

#### Option 2: Add Calculator.calculateAll() to d_116 Handler (Workaround)

**This is a WORKAROUND, not the root fix**. It papers over the initialization problem.

**Code Change**: [4012-Section13.js:2234-2244](../sections/4012-Section13.js#L2234-L2244)

```javascript
// 🔧 FIX (Oct 7, 2025): Force complete calculator cascade when g_118 changes
if (fieldId === "g_118") {
  setTimeout(() => {
    if (window.TEUI?.Calculator?.calculateAll) {
      window.TEUI.Calculator.calculateAll();
    }
  }, 50);
}

// 🔧 WORKAROUND (Oct 18, 2025): Apply same cascade to d_116
// NOTE: This is a workaround for Cooling.js initialization issue
// Proper fix is to ensure ref_ values exist before Cooling.js initializes
if (fieldId === "d_116") {
  setTimeout(() => {
    if (window.TEUI?.Calculator?.calculateAll) {
      window.TEUI.Calculator.calculateAll();
    }
  }, 50);
}
```

**Why this is a workaround:**
- ❌ Triggers full cascade on every d_116 change (performance hit)
- ❌ Doesn't fix the root cause (initialization order)
- ❌ Doesn't achieve calculation parity (different code paths)
- ❌ Still has "laggy" behavior for h_21, i_59 changes

#### Option 3: Fix Cooling.js to Not Require Pre-initialization ✅ ARCHITECTURAL FIX

**The Target Way**: Target mode doesn't need values pre-initialized because unprefixed values always exist in StateManager.

**Make Reference mode work the same way**:

**Code Change**: [4012-Cooling.js:693-747](../4012-Cooling.js#L693-L747)

Remove initialization dependency on StateManager values - let `calculateAll(mode)` read fresh values each time:

```javascript
function initialize(params = {}) {
  // ❌ REMOVE: Don't pre-load values during init
  // Let calculateAll() read fresh values mode-aware each time

  // Register with StateManager
  registerWithStateManager();

  // ✅ NEW: Run initial calculations for BOTH modes
  calculateAll("target");   // Initialize Target cooling values
  calculateAll("reference"); // Initialize Reference cooling values

  state.initialized = true;
}
```

**Why This Achieves Parity:**
1. ✅ Both modes initialized equally
2. ✅ No dependency on pre-existing ref_ values
3. ✅ calculateAll() always reads fresh via getModeAwareValue()
4. ✅ Same code path for both modes
5. ✅ No workarounds needed in S13
6. ✅ Matches Target mode architecture exactly

---

## CORRECTED UNDERSTANDING - October 18, 2025

### The "m_129 = 0" Was NOT a Bug! ⚠️

**Critical Realization**: We were chasing a phantom bug.

**Why m_129 = 0 is CORRECT behavior**:
- When Ventilation = "Constant Volume" (default setting)
- Free cooling from ventilation provides 100% cooling capacity
- Mechanical cooling load legitimately = 0
- **This is working as designed!** ✅

**From Logs.md**:
```
[Cooling m_124 COOLING-TARGET] m_129_annual=0, E37_daily=0  ← CORRECT when free cooling = 100%
```

### What ARE the Real Bugs?

The actual user-reported issues are **NOT about m_129 = 0**. They are:

1. ❌ **Capacitance toggle (h_21) doesn't affect cooling calculations in Reference mode (S03)**
2. ❌ **Indoor RH% slider (i_59) doesn't affect cooling calculations in Reference mode (S08)**

These are likely **input routing issues** - user changes in Reference mode aren't:
- Being routed to Reference state correctly, OR
- Triggering Reference recalculations, OR
- Being read by cooling calculations

### Proper Test Scenario

To test cooling bugs, use a scenario where mechanical cooling IS needed:

**Setup**:
- Heating system: Electricity (triggers cooling in Reference)
- Cooling system: Cooling (enabled)
- Ventilation: Volume by Schedule (NOT constant - reduces free cooling)

**Then test**:
- Change capacitance (h_21) → should affect cooling load
- Change indoor RH% (i_59) → should affect latent cooling load

### Investigation Path Forward

1. **Test proper scenario** (Elec + Cooling + Scheduled vent)
2. **Verify m_129 > 0** (mechanical cooling needed)
3. **Test h_21 capacitance** in Reference mode - does it recalculate?
4. **Test i_59 RH%** in Reference mode - does it recalculate?
5. **Use console.trace()** if inputs aren't routing correctly

### Lessons Learned

- ❌ Don't assume m_129=0 is a bug without understanding physics
- ❌ Don't implement "fixes" before confirming the symptom is actually wrong behavior
- ✅ Test with proper scenarios where the effect SHOULD be visible
- ✅ Understand the domain (free cooling can eliminate mechanical cooling need)

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

**Calculation Dis-Parity Restored** ✅

Target mode works, Reference does not:
- Default: "No Cooling" 
- User can toggle to "Cooling" and it PERSISTS
- Cooling calculations run correctly in Reference mode only when 'primed' by selecting g_118 method change to something else then back again
- Capacitance effects on cooling are not visible in Reference mode
- User modifications survive state refreshes

---

### Testing Recommendations

1. Switch to Reference mode
2. Toggle d_116 from "No Cooling" to "Cooling"
3. Verify d_117 shows non-zero cooling load
4. Change building code (d_13) and verify d_116 stays "Cooling"
5. Test capacitance (h_21) toggle and verify effects appear in k_94, k_95, and cooling calcs

---
