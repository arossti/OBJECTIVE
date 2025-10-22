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

**Last Updated**: October 22, 2025
**Assigned To**: AI Agent
**Priority**: CRITICAL - Blocking production deployment
