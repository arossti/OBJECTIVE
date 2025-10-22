# Reference Mode Calculation Flow Regression

## 🚨 Critical Issue - Post-Import Reference Mode Blocked

**Date Discovered**: October 22, 2025
**Severity**: HIGH - Reference mode calculations broken after file import
**Status**: INVESTIGATING

---

## Symptom Summary

**Target Mode**: ✅ Works correctly in all scenarios
**Reference Mode After Initialization**: ✅ Works correctly
**Reference Mode After File Import**: ❌ BROKEN - calculations don't flow through system

### Working Sections (Reference Mode After Import)
- ✅ **S03** - Climate data
- ✅ **S07** - Water Use
- ✅ **S13** - Mechanical Loads

### Broken Sections (Reference Mode After Import)
- ❌ **S10** - Radiant Gains (user changes don't propagate)
- ❌ **S11** - Transmission Losses (TB% slider changes don't propagate)
- ❌ **S12** - Volume Metrics (user changes don't propagate)

**Pattern**: S10, S11, S12 are sequential dependencies. Changes made in these sections update their own internal calculations but **do not flow downstream** to other sections.

---

## Reproduction Steps

### Scenario 1: Initialization (WORKS ✅)
1. Hard refresh page (Cmd+Shift+R)
2. Click "Initialize" button
3. Navigate to S11
4. Switch to Reference mode
5. Change TB% slider from 0% to 20%
6. **Result**: ✅ Changes flow through → S12 updates → downstream sections update → e_10 updates

### Scenario 2: After Import (BROKEN ❌)
1. Hard refresh page
2. Import Excel file
3. Navigate to S11
4. Switch to Reference mode
5. Change TB% slider from 0% to 20%
6. **Result**: ❌ S11 updates internally, but NO downstream propagation → e_10 does NOT update

### Scenario 3: S12 After Import (BROKEN ❌)
1. Import Excel file
2. Navigate to S12
3. Switch to Reference mode
4. Change d_103 (Stories) or g_109 (ACH50)
5. **Result**: ❌ S12 updates internally, but NO downstream propagation

---

## Technical Context

### What Changed Recently

**Commit `38da9c6`**: Removed self-listeners in S12
- **Intent**: Fix double calculation issue
- **Change**: Removed StateManager listeners for S12's own input fields
- **Reason**: Following S07 pattern where user edits trigger calculations directly

**Question**: Did removing self-listeners break something in the import flow?

### Key Differences: Init vs Import

#### Initialization Flow
1. `Calculator.calculateAll()` runs
2. Each section's `calculateAll()` runs both engines
3. Results published to StateManager
4. Listeners trigger dependent sections
5. ✅ Full calculation chain completes

#### Import Flow
1. Quarantine listeners (muted)
2. Import Target values → StateManager
3. Import Reference values → StateManager
4. `syncPatternASections()` - sections sync from StateManager
5. Unquarantine listeners (unmuted)
6. `Calculator.calculateAll()` runs
7. ❓ **Something different happens here**

---

## Hypotheses

### Hypothesis 1: Listener Muting Issue
**Theory**: Import process mutes listeners, and they don't properly re-engage for Reference mode after unmuting.

**Evidence Needed**:
- Check if `ref_*` value changes during import trigger listeners
- Verify listener registration state after import completes

### Hypothesis 2: State Contamination During Import
**Theory**: Import process populates states in a way that breaks the calculation chain for Reference mode.

**Evidence Needed**:
- Compare state of `ReferenceState` after init vs after import
- Check if `ref_*` values are properly published to StateManager during import

### Hypothesis 3: Double Calculation Prevention Gone Wrong
**Theory**: Removing self-listeners in S12 (commit `38da9c6`) broke something specific to the import flow.

**Evidence Needed**:
- Test if reverting `38da9c6` fixes the issue
- Compare S07 (working) vs S12 (broken) listener patterns

### Hypothesis 4: ModeManager.setValue() Publishing Issue
**Theory**: After import, `ModeManager.setValue()` might not be publishing `ref_*` values correctly.

**Evidence Needed**:
- Add console logging to `ModeManager.setValue()` in S11, S12
- Check if `ref_*` values are being published when user edits in Reference mode
- Verify StateManager receives the updates

---

## Investigation Plan

### Phase 1: Establish Baseline (Console Logging)
1. Add logging to S11's `ModeManager.setValue()` to see if it publishes `ref_d_97` when TB% changes
2. Add logging to S12's `ModeManager.setValue()` to see if it publishes `ref_g_109` when ACH50 changes
3. Add logging to `StateManager.setValue()` to see what's being published
4. Test both init and import scenarios, compare logs

### Phase 2: Listener Verification
1. Check if `ref_*` listeners exist and are registered after import
2. Verify listeners fire when `ref_*` values change
3. Compare listener behavior init vs import

### Phase 3: Calculation Chain Trace
1. Add detailed logging to `calculateAll()` in S11, S12
2. Log when both engines run
3. Log what results are published to StateManager
4. Trace why downstream sections don't see the changes

### Phase 4: Root Cause Identification
Based on logging evidence, identify:
- Where the calculation chain breaks
- Why it works after init but not after import
- What specific change caused the regression

---

## Expected Behavior

When user changes a value in Reference mode (after init OR after import):

1. `handleFieldBlur` fires
2. `ModeManager.setValue(fieldId, value)` publishes `ref_fieldId` to StateManager
3. `handleFieldBlur` calls `calculateAll()`
4. Both engines run (Target + Reference)
5. Results published to StateManager (both unprefixed + `ref_` prefixed)
6. Downstream sections' listeners see changes
7. Downstream sections recalculate
8. Full chain completes → e_10 updates

**Current Reality After Import**: Steps 1-5 work, but steps 6-8 fail.

---

## Next Steps

1. Create diagnostic logging in key sections
2. Test init scenario - capture logs
3. Test import scenario - capture logs
4. Compare and identify divergence point
5. Fix root cause
6. Verify fix works for both init and import

---

## Test Results

### Test 1: INITIALIZATION BASELINE (Working ✅)

**Date**: October 22, 2025
**Test**: Change d_103 (Stories) from 1 to 1.5 in Reference mode after initialization

**Initial State**: e_10 = 287.0
**After Change**: e_10 = 289.9 ✅ (Updated correctly!)
**Target h_10**: No change (correct - only Reference engine should update)

**S12 Diagnostic Logs (Key Events)**:
```
[S12 DIAG] setValue in REFERENCE mode: ref_d_103 = 1.5 (source=user-modified)
[S12 DIAG] ✅ Published ref_d_103 to StateManager
[S12 DIAG] setValue in REFERENCE mode: ref_d_103 = 1.5 (source=user-modified)
[S12 DIAG] ✅ Published ref_d_103 to StateManager
[S12 DIAG] ========== calculateAll START (mode=reference) ==========
[S12 DIAG] Running Reference engine...
[S12 DIAG] Running Target engine...
[S12 DIAG] Re-publishing 34 Reference results...
[S12 DIAG] ✅ Reference results re-published to StateManager
[S12 DIAG] ========== calculateAll END ==========
```

**Analysis**:
1. ✅ `ref_d_103` published to StateManager (appears twice - likely dropdown change event)
2. ✅ `calculateAll()` runs in reference mode
3. ✅ Both engines execute (dual-engine architecture working)
4. ✅ 34 Reference results re-published to StateManager
5. ✅ **Downstream propagation works** - e_10 updates from 287.0 → 289.9
6. ✅ Target values unaffected (h_10 no change)

**Conclusion**: After initialization, Reference mode calculation flow works perfectly. All values publish correctly and downstream sections respond to changes.

---

### Test 2: POST-IMPORT (BROKEN ❌)

**Date**: October 22, 2025
**Test**: Same as Test 1, but after Excel file import instead of initialization

**Initial State**: e_10 = 910.8
**After Change**: Changed d_103 from 2 to 1.5 in Reference mode
**Result**: e_10 remains 910.8 ❌ (NO propagation!)

**S12 Diagnostic Logs**: IDENTICAL to Test 1! ✅

**Critical Finding**:
S12's behavior is **identical** in both scenarios:
- ✅ Publishes `ref_d_103` to StateManager
- ✅ Runs both engines (Reference + Target)
- ✅ Re-publishes 34 Reference results to StateManager

**The Problem is DOWNSTREAM**: Other sections (S13, S14, S04, S01) are not responding to S12's published values after import.

---

## Phase 2: Expanded Diagnostic Logging (Commit `ccc5fe0`)

**Objective**: Track the full calculation chain to identify where propagation breaks after import.

**New Logging Added**:

### Calculator.js (4011-Calculator.js)
```
[CALC-FLOW] 🎯 Calculator.calculateAll() START
[CALC-FLOW] 🔄 Running sect12.calculateAll()...
[CALC-FLOW] ✅ sect12.calculateAll() completed
[CALC-FLOW] 🔄 Running sect13.calculateAll()...
[CALC-FLOW] ✅ sect13.calculateAll() completed
[CALC-FLOW] 🔄 Running sect14.calculateAll()...
[CALC-FLOW] ✅ sect14.calculateAll() completed
[CALC-FLOW] 🔄 Running sect04.calculateAll()...
[CALC-FLOW] ✅ sect04.calculateAll() completed
[CALC-FLOW] 🔄 Running sect01.calculateAll()...
[CALC-FLOW] ✅ sect01.calculateAll() completed
[CALC-FLOW] 🏁 Calculator.calculateAll() END
```

### Section 13 (4012-Section13.js)
```
[CALC-FLOW] 📊 S13.calculateAll() START (mode=reference)
[CALC-FLOW] 📤 S13 re-publishing N Reference results...
[CALC-FLOW] ✅ S13 Reference results published to StateManager
[CALC-FLOW] 🏁 S13.calculateAll() END
```

### Section 04 (4012-Section04.js)
```
[CALC-FLOW] 📊 S04.calculateAll() START (mode=reference)
[CALC-FLOW] 🏁 S04.calculateAll() END (ref_j_32=VALUE)
```

### Section 01 (4012-Section01.js)
```
[CALC-FLOW] 📊 S01.updateTEUIDisplay() reading ref_j_32=VALUE, ref_h_15=VALUE
```

**What to Look For in Test 3**:
1. Does `Calculator.calculateAll()` run after S12 user edit?
2. Do all sections (S13, S14, S04, S01) execute?
3. Does S13 re-publish Reference results in Reference mode?
4. What is the `ref_j_32` value at S04 output?
5. What `ref_j_32` value does S01 read?
6. Are the values flowing through the chain, or stuck somewhere?

---

### Test 3: POST-IMPORT WITH EXPANDED LOGGING (COMPLETED ❌)

**Date**: October 22, 2025
**Test Protocol**: Same as Test 2

**Result**: e_10 remains 910.8 ❌ (NO propagation!)

**CRITICAL FINDING**: `Calculator.calculateAll()` does NOT run!

**Evidence from Logs**:
- ✅ S12 logs show: `[S12 DIAG] calculateAll START/END`
- ✅ S12 publishes 34 Reference results to StateManager
- ✅ S10 listener fires: "S10: Reference listener triggered by ref_i_103"
- ❌ **NO `[CALC-FLOW]` logs from Calculator.calculateAll()**
- ❌ **NO `[CALC-FLOW]` logs from S13, S14, S04, S01**

**Analysis**:
S12's `handleFieldBlur` calls `calculateAll()` which is S12's **local** function, NOT `Calculator.calculateAll()`. According to CHEATSHEET.md, this is correct architecture - sections call their own `calculateAll()`, and downstream propagation happens through StateManager listeners.

**The Problem**:
- S12 publishes `ref_i_103` → S10 listener fires ✅
- But S10's recalculation doesn't cascade further
- S13, S14, S04, S01 never run
- No full system recalculation happens

**Key Question**: Why did Test 1 work if Calculator.calculateAll() wasn't called then either?

**Hypothesis**: After init, cascading StateManager listeners worked correctly. After import, something breaks the listener cascade.

---

### Test 4: PRE-IMPORT WITH LOGGING (COMPLETED ✅)

**Date**: October 22, 2025
**Objective**: Verify if `Calculator.calculateAll()` runs during Test 1 scenario

**Test Protocol**: Same as Test 1, with diagnostic logging enabled

**Result**: e_10 updates correctly: 287.0 → 289.9 ✅

**CRITICAL FINDING**: Cascading StateManager listeners work after init!

**Evidence from Logs**:
```
[S12 DIAG] ========== calculateAll START ==========
S10: Reference listener triggered by ref_i_103, recalculating all.
[S10 DEBUG] calculateAll() triggered...
[CALC-FLOW] 📊 S04.calculateAll() START (mode=target)
[CALC-FLOW] 🏁 S04.calculateAll() END (ref_j_32=413763.1686081366)
[CALC-FLOW] 📊 S01.updateTEUIDisplay() reading ref_j_32=413763.1686081366
```

**Analysis**:
1. ✅ S12 publishes ref_i_103
2. ✅ S10 listener fires synchronously
3. ✅ **Cascade continues to S04** (something S10 publishes triggers S04)
4. ✅ **Cascade reaches S01** (which reads ref_j_32 from S04)
5. ✅ e_10 updates correctly

**The Architecture (CONFIRMED)**:
- Sections call their **own** `calculateAll()` (not Calculator.calculateAll)
- Cascading **StateManager listeners** propagate changes synchronously
- Chain: S12 → S10 → ... → S04 → S01 (via listeners)

**Comparison: Test 3 vs Test 4**

| Step | Test 4 (After Init) ✅ | Test 3 (After Import) ❌ |
|------|----------------------|-------------------------|
| S12 publishes ref_i_103 | ✅ Yes | ✅ Yes |
| S10 listener fires | ✅ Yes | ✅ Yes |
| S10.calculateAll() runs | ✅ Yes | ✅ Yes |
| **Cascade to S04** | ✅ **YES** | ❌ **NO** |
| **Cascade to S01** | ✅ **YES** | ❌ **NO** |
| e_10 updates | ✅ Yes | ❌ No |

**THE BUG**: After import, the listener cascade **stops at S10**. Something S10 publishes should trigger downstream sections (S04, S01), but those listeners don't fire after import.

---

## Phase 3: Listener Firing Diagnostics (Commit `e340691`)

**Objective**: Determine if listeners are registered and firing after import.

**New Logging Added**: StateManager.notifyListeners() now logs when listeners fire for `ref_d_103`, `ref_i_103`, `ref_g_103`.

### Test 5: POST-IMPORT WITH LISTENER DIAGNOSTICS (COMPLETED ❌)

**Date**: October 22, 2025
**Test Protocol**: Same as Test 3 (import, then edit d_103 in Reference mode)

**Result**: e_10 remains 910.8 ❌

**CRITICAL FINDING**: **Listeners ARE registered and firing!**

**Evidence from Logs**:
```
[CALC-FLOW] 🔔 Firing 4 listeners for ref_i_103
S10: Reference listener triggered by ref_i_103, recalculating all.
[S10 DEBUG] calculateAll() triggered in target mode - running both engines
[S10 DEBUG] Dual-engine calculations complete in target mode
[S12 DIAG] ========== calculateAll END ==========
```

**Analysis**:
1. ✅ **4 listeners registered** for ref_i_103
2. ✅ **Listeners fire** after import (not muted)
3. ✅ **S10 runs** both engines
4. ❌ **Cascade stops** - No S13, S14, S04, S01

**The Problem**: S10's listener fires and S10 calculates, but **nothing downstream runs**.

Investigation shows:
- S04 listens to: S13 (d_113, h_115, f_115), S15 (d_136), S06, S07, S08, S09, S02
- S04 does **NOT** listen to S10 outputs directly
- The cascade must go: S10 → ??? → S13 → S04 → S01

**Working Theory**: The architecture expects `Calculator.calculateAll()` to run the full cascade, not individual section listeners. After init, something triggers `Calculator.calculateAll()`, but after import it doesn't.

---

## Root Cause & Solution

### The Problem (Confirmed)

**Incomplete Listener Cascade**:
- S12 → S10 works (S10 listener fires)
- S10 → S11 → S13 → S04 → S01 **BREAKS** (no listeners connect these)

**Why It Works After Init**:
- During init, `Calculator.calculateAll()` runs the full ordered sequence
- This populates all values correctly
- Subsequent user edits work because all values are already "primed"

**Why It Breaks After Import**:
- Import runs `Calculator.calculateAll()` once
- But when user edits S12, only S12's local `calculateAll()` runs
- S10 listener fires, but S10's outputs don't trigger downstream cascade
- S11, S13, S14, S04, S01 never recalculate with new S10 area values

### The S13 Pattern (Working Example)

S13 correctly handles this with `g_118` (Ventilation Method):

```javascript
// 4012-Section13.js:2237-2244
if (fieldId === "g_118") {
  setTimeout(() => {
    if (window.TEUI?.Calculator?.calculateAll) {
      window.TEUI.Calculator.calculateAll();
    }
  }, 50); // Small delay ensures S13 values published first
}
```

**Why this works**: S13 knows that ventilation changes affect many downstream sections, so it triggers the full `Calculator.calculateAll()` cascade.

### Proposed Solution

**Apply the S13 pattern to S10 and S12**:

#### Fix 1: S10's calculateAll() should trigger full cascade

```javascript
// 4012-Section10.js:1900
function calculateAll() {
  console.log(`[S10 DEBUG] calculateAll() triggered in ${ModeManager.currentMode} mode - running both engines`);

  calculateTargetModel(); // Calculate Target model values
  calculateReferenceModel(); // Calculate Reference model values

  console.log(`[S10 DEBUG] Dual-engine calculations complete in ${ModeManager.currentMode} mode`);

  // ✅ FIX: S10 exports door/window/skylight areas to S11
  // When areas change, must trigger full cascade (S11 → S12 → S13 → ... → S01)
  // Pattern from S13's g_118 handling
  setTimeout(() => {
    if (window.TEUI?.Calculator?.calculateAll) {
      window.TEUI.Calculator.calculateAll();
    }
  }, 50);
}
```

#### Fix 2: S12's handleFieldBlur() should trigger full cascade

```javascript
// 4012-Section12.js:2544
function handleFieldBlur(event) {
  const field = event.target;
  const fieldId = field.getAttribute("data-field-id");
  if (!fieldId) return;

  const numValue = window.TEUI.parseNumeric(field.textContent);
  if (!isNaN(numValue) && isFinite(numValue)) {
    const formattedValue = window.TEUI.formatNumber(numValue, "number-2dp");
    field.textContent = formattedValue;

    console.log(`[S12 DIAG] handleFieldBlur: ${fieldId} = ${numValue} (mode=${ModeManager.currentMode})`);

    // ✅ DUAL-STATE: Store value using ModeManager
    ModeManager.setValue(fieldId, String(numValue), "user-modified");

    console.log(`[S12 DIAG] Calling calculateAll() after user edit...`);

    // ✅ FIX: Call Calculator.calculateAll() instead of local calculateAll()
    // S12 volume/surface changes affect S13 (mechanical loads), S14 (TEDI), S04 (totals), S01 (display)
    // Must trigger full cascade, not just S12's engines
    if (window.TEUI?.Calculator?.calculateAll) {
      window.TEUI.Calculator.calculateAll();
    } else {
      // Fallback to local if Calculator not available
      calculateAll();
    }

    console.log(`[S12 DIAG] calculateAll() completed`);
  }
}
```

### Why This Fixes The Issue

1. **After Init**: Works as before (Calculator.calculateAll runs during init)
2. **After Import**: User edits now trigger full cascade
   - S12 user edit → `Calculator.calculateAll()` → Full ordered sequence
   - S10 listener fires → `Calculator.calculateAll()` → Full ordered sequence
3. **Consistent with CHEATSHEET**: Sections run both engines, then trigger cascade when needed

### Trade-offs

**Pros**:
- Fixes Reference mode regression
- Follows S13's proven pattern
- Ensures consistency between init and post-import behavior

**Cons**:
- May cause duplicate calculations (Calculator runs all sections, including ones that just ran)
- Performance impact (acceptable for correctness)

### Alternative Considered

Complete the listener chain (S10 → S11 → S13 → S04). **Rejected** because:
- Complex to implement correctly
- Risk of breaking existing working patterns
- S13 pattern is already proven and simpler

---

## Phase 4: Import Process Investigation (Commit `409078b`)

### Clarified Understanding

**User Clarification**: The issue is specifically **user edits AFTER import**:
- ✅ After Init → User Edits: Work perfectly
- ✅ After Import → Initial Calculation: Works perfectly
- ❌ After Import → User Edits: Broken

**Key Insight**: Import itself runs `Calculator.calculateAll()` successfully. But something during the import process breaks the listener cascade for *subsequent* user interactions.

### New Hypothesis: Import Corrupts Listener State

The import process:
1. Mutes listeners (`muteListeners()`)
2. Imports values
3. Syncs Pattern A sections (`syncPatternASections()`)
4. Unmutes listeners (`unmuteListeners()`)
5. Runs `Calculator.calculateAll()`

**Something in steps 1-4 corrupts the listener registry or state.**

### Test 6: Listener Count Before/After Import (NEEDED)

**New Diagnostic**: Added listener counting to mute/unmute cycle

**Test Protocol**:
1. Hard refresh (init loads)
2. Import Excel file
3. Look for logs during import quarantine:
   - `[StateManager] 📊 BEFORE MUTE: N listeners across M fields`
   - `[StateManager] 📊 AFTER UNMUTE: N listeners across M fields`
   - `[StateManager] 🔍 ref_i_103 has X listeners registered`

**What This Reveals**:
- If listener count changes: Import is clearing/corrupting listeners
- If listener count stays same: Issue is elsewhere (listener state, callback corruption, etc.)
- If ref_i_103 has 0 listeners: Import specifically breaks S10 listeners

*Results pending...*

---

**Last Updated**: October 22, 2025
**Assigned To**: AI Agent
**Priority**: CRITICAL - Blocking production deployment
**Current Commit**: `409078b` - Listener count diagnostics
**Status**: Testing import's effect on listener registry
