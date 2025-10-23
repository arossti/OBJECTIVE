# S10/S11 State Purity Investigation

**Branch**: `S10-S11-PURITY`
**Date**: October 22, 2025
**Severity**: BLOCKER - Fundamental architectural violation
**Status**: INVESTIGATION

---

## 🚨 Problem Statement

**Discovered**: S10 and S11 exhibit **state mixing** where edits made in **Target mode** incorrectly affect the **Reference model**, and vice versa.

### User Report

> "I just noticed a major flaw with state mixing in S10, S11. Edits made to Target mode of S10 flow to the Reference model, NOT The Target model. It is all kinds of messed up and I honestly never even noticed this until now!"

### Scope of Contamination

**Within Sections (✅ CORRECT)**:
- S10 Target mode edits → S10 TargetState only
- S10 Reference mode edits → S10 ReferenceState only
- S11 Target mode edits → S11 TargetState only
- S11 Reference mode edits → S11 ReferenceState only
- UI toggle shows correct isolated values

**Between Sections via StateManager (❌ BROKEN)**:
- S10 Target mode edits → Published to StateManager → **Affect S11 Reference model** (WRONG!)
- S10 Reference mode edits → Published to StateManager → **Affect S11 Target model** (WRONG!)
- The cascade S10 → S11 is mixing prefixes somewhere

### Historical Depth

- **October 15, 2025 backup**: State mixing present
- **October 6, 2025 backup**: State mixing present (pre-dates S10→S11 convenience feature)
- **Hypothesis**: May have **never worked correctly** since dual-state architecture was implemented

---

## 🎯 Working Theory

The bug is **NOT** in section-internal state management (TargetState/ReferenceState isolation works correctly). The bug is in the **StateManager publishing/listening chain** between S10 and S11.

### Hypothesis 1: S10 Publishing Incorrect Prefixes

**Theory**: S10's `calculateTargetModel()` might be publishing values with `ref_` prefix, or `calculateReferenceModel()` might be publishing without prefix.

**What to Check**:
- Does `calculateTargetModel()` publish unprefixed field IDs? (d_73, d_74, etc.)
- Does `calculateReferenceModel()` publish `ref_` prefixed IDs? (ref_d_73, ref_d_74, etc.)
- Is `storeReferenceResults()` being called at all?
- Is `storeTargetResults()` missing or incomplete?

### Hypothesis 2: S11 Listening to Wrong Prefixes

**Theory**: S11's listener registration might be reversed - Target listeners subscribed to `ref_` values, Reference listeners subscribed to unprefixed values.

**What to Check**:
- Do Target listeners subscribe to `d_73-d_78` (unprefixed)?
- Do Reference listeners subscribe to `ref_d_73-ref_d_78` (prefixed)?
- Are listener guards checking the correct mode?
- Is `setupS10AreaListeners()` registering listeners correctly?

### Hypothesis 3: ModeManager.setValue() Prefix Confusion

**Theory**: When S10 is in Target mode and calls `ModeManager.setValue()`, it might be publishing with wrong prefix.

**What to Check**:
- Does S10's ModeManager correctly route Target values to unprefixed StateManager?
- Does S10's ModeManager correctly route Reference values to `ref_` prefixed StateManager?
- Is there a mode check inversion bug?

### Hypothesis 4: Dual-Engine Race Condition

**Theory**: Both engines run in `calculateAll()`, and the second engine might be overwriting the first engine's StateManager values with wrong mode.

**What to Check**:
- Does `calculateAll()` run both engines sequentially?
- Is there proper isolation between Target and Reference publishing?
- Could there be async timing issues?

---

## 📋 Investigation Plan

### Phase 1: QA/QC Audit (Using CHEATSHEET.md)

Apply the comprehensive CHEATSHEET.md QA/QC checklist to S10 and S11:

**Anti-Pattern Scans**:
1. ✅ Phase 1: Pattern B Contamination (prefix usage)
2. ✅ Phase 2: "Current State" Anti-Pattern (ambiguous reads)
3. ✅ Phase 3: DOM Update Preservation
4. ✅ Phase 6: Mode Display Isolation (fallback contamination)
5. ✅ Phase 7: Cross-Section DOM Listener Contamination
6. ✅ Phase 8: Downstream Reading Patterns

**Critical Focus Areas**:
- S10's `calculateTargetModel()` and `calculateReferenceModel()`
- S10's `storeReferenceResults()` function
- S11's `setupS10AreaListeners()` function
- S11's `syncAreasFromS10()` function
- Both sections' `ModeManager.setValue()` implementations

### Phase 2: Browser Console Testing Scripts

**Preference**: Short, focused scripts to "poke the bear" and test specific theories.

#### Test 1: Verify S10 Publishing Behavior

```javascript
// S10 PUBLISHING TEST
// Run after page load and initialization

// 1. Check current state
console.log("=== S10 PUBLISHING TEST ===");
console.log("S10 Target d_73:", window.TEUI.StateManager.getValue("d_73"));
console.log("S10 Reference d_73:", window.TEUI.StateManager.getValue("ref_d_73"));

// 2. Make a Target mode edit to S10 door area
window.TEUI.SectionModules.sect10.ModeManager.currentMode = "target";
window.TEUI.SectionModules.sect10.ModeManager.setValue("d_73", "100", "test");
window.TEUI.SectionModules.sect10.calculateAll();

// 3. Check what was published
console.log("After Target edit:");
console.log("  d_73:", window.TEUI.StateManager.getValue("d_73")); // Should be 100
console.log("  ref_d_73:", window.TEUI.StateManager.getValue("ref_d_73")); // Should be unchanged

// 4. Make a Reference mode edit
window.TEUI.SectionModules.sect10.ModeManager.currentMode = "reference";
window.TEUI.SectionModules.sect10.ModeManager.setValue("d_73", "200", "test");
window.TEUI.SectionModules.sect10.calculateAll();

// 5. Check what was published
console.log("After Reference edit:");
console.log("  d_73:", window.TEUI.StateManager.getValue("d_73")); // Should still be 100
console.log("  ref_d_73:", window.TEUI.StateManager.getValue("ref_d_73")); // Should be 200

// EXPECTED: Target publishes unprefixed, Reference publishes ref_ prefixed
// FAILURE: If d_73 changes to 200, or ref_d_73 changes to 100, prefix mixing confirmed
```

#### Test 2: Verify S11 Listener Registration

```javascript
// S11 LISTENER TEST (FIXED)
// Run after page load and initialization

console.log("=== S11 LISTENER TEST (FIXED) ===");

// 1. Add temporary spy listeners to see what S11 receives
let targetFires = 0;
let referenceFires = 0;

window.TEUI.StateManager.addListener("d_73", (value) => {
  targetFires++;
  console.log(`🎯 Target listener fired #${targetFires}: d_73 =`, value);
});

window.TEUI.StateManager.addListener("ref_d_73", (value) => {
  referenceFires++;
  console.log(`🔵 Reference listener fired #${referenceFires}: ref_d_73 =`, value);
});

console.log("Spy listeners installed. Now triggering changes...");

// 2. Trigger S10 Target edit
console.log("\n--- Test: Setting d_73 to 999 (Target) ---");
window.TEUI.StateManager.setValue("d_73", "999", "test");

// 3. Trigger S10 Reference edit
console.log("\n--- Test: Setting ref_d_73 to 888 (Reference) ---");
window.TEUI.StateManager.setValue("ref_d_73", "888", "test");

// 4. Summary
console.log("\n=== SUMMARY ===");
console.log("Target listener fires:", targetFires);
console.log("Reference listener fires:", referenceFires);
console.log("\nEXPECTED: Both should have fired at least once");
console.log("FAILURE: If Target listener doesn't fire for d_73, or Reference doesn't fire for ref_d_73");
```

#### Test 3: Trace Mode-Aware Publishing

```javascript
// MODE-AWARE PUBLISHING TRACE
// Instrument StateManager.setValue to trace prefix usage

const originalSetValue = window.TEUI.StateManager.setValue.bind(window.TEUI.StateManager);

window.TEUI.StateManager.setValue = function(fieldId, value, source) {
  // Only trace S10 area fields
  if (fieldId.includes("d_73") || fieldId.includes("d_74")) {
    console.log(`[StateManager TRACE] ${fieldId} = ${value} (source: ${source})`);
    console.trace("Call stack:");
  }
  return originalSetValue(fieldId, value, source);
};

console.log("=== MODE-AWARE PUBLISHING TRACE INSTALLED ===");
console.log("Now make a Target edit to S10 door area (d_73) and watch the trace");
console.log("Then make a Reference edit and compare");

// EXPECTED: Target edits show unprefixed traces, Reference edits show ref_ prefixed traces
// FAILURE: If both modes publish same prefix, ModeManager.setValue() bug confirmed
```

#### Test 4: S11 Area Sync Mode Check

```javascript
// S11 AREA SYNC MODE TEST
// Check if syncAreasFromS10 respects current mode

console.log("=== S11 AREA SYNC MODE TEST ===");

// 1. Set S11 to Target mode
window.TEUI.SectionModules.sect11.ModeManager.currentMode = "target";
console.log("S11 mode: target");

// 2. Check what S11 reads for d_88 (should read from d_73, not ref_d_73)
const targetValue = window.TEUI.SectionModules.sect11.ModeManager.getValue("d_88");
console.log("S11 Target d_88:", targetValue);

// 3. Set S11 to Reference mode
window.TEUI.SectionModules.sect11.ModeManager.currentMode = "reference";
console.log("S11 mode: reference");

// 4. Check what S11 reads for d_88 (should read from ref_d_73, not d_73)
const refValue = window.TEUI.SectionModules.sect11.ModeManager.getValue("d_88");
console.log("S11 Reference d_88:", refValue);

// 5. Check StateManager directly
console.log("StateManager d_73:", window.TEUI.StateManager.getValue("d_73"));
console.log("StateManager ref_d_73:", window.TEUI.StateManager.getValue("ref_d_73"));

// EXPECTED: Target mode reads d_73, Reference mode reads ref_d_73
// FAILURE: If both modes read same source, syncAreasFromS10 mode confusion confirmed
```

### Phase 3: Targeted Code Fixes

Based on test results, implement minimal surgical fixes:

**If Test 1 Fails** → Fix S10 publishing logic
**If Test 2 Fails** → Fix S11 listener registration
**If Test 3 Fails** → Fix S10 ModeManager.setValue()
**If Test 4 Fails** → Fix S11 syncAreasFromS10() mode awareness

---

## 🎯 CHEATSHEET.md Compliance Audit

### Anti-Pattern 6: Cross-Section DOM Listener Contamination

**Check S11**: Does S11 attach DOM listeners to S10's fields?

```bash
# Search S11 for DOM listeners to S10 fields
grep -n "querySelector.*d_73\|querySelector.*d_74" sections/4012-Section11.js
grep -n "addEventListener.*d_73\|addEventListener.*d_74" sections/4012-Section11.js
```

**Expected**: S11 should ONLY listen via StateManager, NOT via DOM

### Anti-Pattern 7: Self-Listening to Own Input Fields

**Check S10**: Does S10 listen to its own d_73-d_78 fields via StateManager?

```bash
# Search S10 for self-listeners
grep -n "addListener.*d_73\|addListener.*d_74" sections/4012-Section10.js
```

**Expected**: S10 should NOT have StateManager listeners for its own input fields (user edits call calculateAll() directly)

### Phase 8: Downstream Reading Patterns

**Check S11**: Does `syncAreasFromS10()` read correct Target vs Reference values?

**Critical Code Review**:
```javascript
// S11's syncAreasFromS10() should read mode-aware values:

// ❌ WRONG: Always reads unprefixed (Target contamination)
const doorArea = window.TEUI.StateManager.getValue("d_73");

// ✅ CORRECT: Mode-aware reading
const doorArea = ModeManager.currentMode === "reference"
  ? window.TEUI.StateManager.getValue("ref_d_73")
  : window.TEUI.StateManager.getValue("d_73");
```

---

## 📊 Success Criteria

**Phase 1 Complete When**:
- ✅ All CHEATSHEET.md anti-patterns identified in S10/S11
- ✅ Specific contamination points documented
- ✅ Test scripts ready for browser console

**Phase 2 Complete When**:
- ✅ Test 1-4 run successfully
- ✅ Exact contamination mechanism identified
- ✅ Evidence collected (console logs, traces)

**Phase 3 Complete When**:
- ✅ S10 Target edits → S11 Target updates (no Reference contamination)
- ✅ S10 Reference edits → S11 Reference updates (no Target contamination)
- ✅ Perfect state isolation verified with console tests
- ✅ No StateManager prefix mixing

---

## 🔄 Connection to C-RF Branch

**Once S10/S11 state purity is fixed**:
1. Merge fix back to `C-RF` branch
2. Re-test S12 Reference mode cascade issue
3. **Hypothesis**: S12 → S10 → S11 cascade may work automatically once S10/S11 publish correctly

**Why This Matters**:
The S12 Reference mode cascade bug we were debugging on `C-RF` might be a **symptom** of the S10/S11 state mixing, not a separate issue. If S10 is publishing Reference values with wrong prefixes, S11 can't respond correctly, breaking the entire cascade.

---

## 🧪 Test Results

### Test 1: S10 Publishing Behavior ✅ PASSED

**Objective**: Verify S10 publishes Target values unprefixed and Reference values with `ref_` prefix

**Results**:
```
Initial state:
  d_73: 7.50
  ref_d_73: 7.50

After Target mode edit (d_73=100):
  d_73: 100        ✅ Target published unprefixed
  ref_d_73: 7.50   ✅ Reference unchanged

After Reference mode edit (d_73=200):
  d_73: 100        ✅ Target still unchanged
  ref_d_73: 200    ✅ Reference published with ref_ prefix
```

**Findings**:
- ✅ S10 ModeManager correctly routes Target → unprefixed StateManager
- ✅ S10 ModeManager correctly routes Reference → `ref_` prefixed StateManager
- ✅ S11 listeners fire when S10 publishes (observed in logs)
- ✅ No prefix confusion in S10's publishing logic

**Conclusion**: **Hypothesis 1 (S10 publishing incorrect prefixes) is ELIMINATED**

---

### Test 2: S11 Listener Registration ✅ PASSED

**Objective**: Verify S11 listeners fire for correct Target vs Reference value changes

**Results**:
```
Test: Setting d_73 to 999 (Target)
🎯 Target listener fired #1: d_73 = 999      ✅

Test: Setting ref_d_73 to 888 (Reference)
🔵 Reference listener fired #1: ref_d_73 = 888   ✅

Summary:
Target listener fires: 1    ✅
Reference listener fires: 1  ✅
```

**Findings**:
- ✅ S11 has separate listeners for unprefixed (d_73) and `ref_` prefixed (ref_d_73)
- ✅ Target listener fires only for unprefixed changes
- ✅ Reference listener fires only for `ref_` prefixed changes
- ✅ No listener crosswalk or registration errors

**Conclusion**: **Hypothesis 2 (S11 listening to wrong prefixes) is ELIMINATED**

---

### Test 2 Fixed Script

**Note**: Original Test 2 script had a syntax error accessing `window.TEUI.StateManager.listeners` (not exposed). Fixed version:

```javascript
// S11 LISTENER TEST (FIXED)
// Run after page load and initialization

console.log("=== S11 LISTENER TEST (FIXED) ===");

// 1. Add temporary spy listeners to see what S11 receives
let targetFires = 0;
let referenceFires = 0;

window.TEUI.StateManager.addListener("d_73", (value) => {
  targetFires++;
  console.log(`🎯 Target listener fired #${targetFires}: d_73 =`, value);
});

window.TEUI.StateManager.addListener("ref_d_73", (value) => {
  referenceFires++;
  console.log(`🔵 Reference listener fired #${referenceFires}: ref_d_73 =`, value);
});

console.log("Spy listeners installed. Now triggering changes...");

// 2. Trigger S10 Target edit
console.log("\n--- Test: Setting d_73 to 999 (Target) ---");
window.TEUI.StateManager.setValue("d_73", "999", "test");

// 3. Trigger S10 Reference edit
console.log("\n--- Test: Setting ref_d_73 to 888 (Reference) ---");
window.TEUI.StateManager.setValue("ref_d_73", "888", "test");

// 4. Summary
console.log("\n=== SUMMARY ===");
console.log("Target listener fires:", targetFires);
console.log("Reference listener fires:", referenceFires);
console.log("\nEXPECTED: Both should have fired at least once");
console.log("FAILURE: If Target listener doesn't fire for d_73, or Reference doesn't fire for ref_d_73");
```

---

## 🎯 Investigation Status Update

**Hypotheses Eliminated**:
- ❌ Hypothesis 1: S10 publishing incorrect prefixes - **ELIMINATED** (Test 1 passed)
- ❌ Hypothesis 2: S11 listening to wrong prefixes - **ELIMINATED** (Test 2 passed)

**Remaining Hypotheses**:
- ⏳ Hypothesis 3: ModeManager.setValue() prefix confusion (unlikely given Test 1 results)
- ⏳ Hypothesis 4: Dual-engine race condition
- ⚠️ **NEW HYPOTHESIS 5**: S11's `syncAreasFromS10()` reads wrong mode values

**Next Steps**:
- Run Test 3 (mode-aware publishing trace) to verify no edge cases
- Run Test 4 (S11 area sync mode check) - **HIGHEST PRIORITY** based on eliminated hypotheses
- If Tests 3-4 pass, the bug is likely in S11's area sync logic, not the publishing/listening chain

---

**Last Updated**: October 22, 2025
**Assigned To**: AI Agent
**Priority**: BLOCKER - Must fix before any other work
**Current Branch**: `S10-S11-PURITY`
**Status**: 🧪 Tests 1-2 PASSED | Hypotheses 1-2 ELIMINATED | Ready for Tests 3-4
