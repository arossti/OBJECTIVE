# Excel Mapper - Import/Export System Documentation

## Overview

This document tracks the Excel import/export system architecture, focusing on:
1. Dual-state import (Target REPORT sheet + Reference REFERENCE sheet)
2. State management and value state priorities
3. Import quarantine pattern to prevent calculated defaults from overwriting imports
4. Pattern A section integration (S02, S03, S04, S05, S06, S08, S15)

**Full debugging history archived in:** `MAPPER-FULL-DEBUG-OCT4.md`

---

## 🔥 Critical Bug Fix - Import Overwrite Issue (Oct 4, 2025)

### Problem Statement

**Symptom:** Reference values imported correctly but displayed incorrectly
- Excel REFERENCE sheet H15: 11167 (imported ✅)
- StateManager after import: ref_h_15 = "11167" (stored ✅)
- UI display: 1427.20 (WRONG ❌ - stale default showing instead)

### Root Cause

**Stack Trace Evidence (The Smoking Gun):**
```
[StateManager DEBUG] ref_h_15 setValue: "1427.20" (state: calculated, prev: 11167)

Stack trace:
setValue @ 4011-StateManager.js:354
(anonymous) @ 4012-Section02.js:839          ← storeReferenceResults()
storeReferenceResults @ 4012-Section02.js:837
calculateReferenceModel @ 4012-Section02.js:803
calculateAll @ 4012-Section02.js:928
calculateAndRefresh @ 4012-Section02.js:1145  ← LISTENER TRIGGERED!
(anonymous) @ 4011-StateManager.js:551        ← notifyListeners()
setValue @ 4011-StateManager.js:409
(anonymous) @ 4011-FileHandler.js:324         ← DURING IMPORT!
```

**What Happened:**
1. Import stored: `ref_h_15 = "11167"` (state: "imported") ✅
2. Import triggered S02 listener during import sequence ❌
3. S02 calculated with stale isolated state (not yet synced)
4. S02 published: `ref_h_15 = "1427.20"` (state: "calculated") ❌
5. **CALCULATED overwrote IMPORTED** (no state priority enforcement)

### The Bug in S02

```javascript
// 4012-Section02.js:817-850 (BEFORE FIX)
function storeReferenceResults() {
  const referenceResults = {
    h_12: ReferenceState.getValue("h_12"), // ❌ INPUT FIELD
    h_13: ReferenceState.getValue("h_13"), // ❌ INPUT FIELD
    d_12: ReferenceState.getValue("d_12"), // ❌ INPUT FIELD
    d_13: ReferenceState.getValue("d_13"), // ❌ INPUT FIELD
    h_15: ReferenceState.getValue("h_15"), // ❌ INPUT FIELD (THE BUG!)
    l_12: ReferenceState.getValue("l_12"), // ❌ INPUT FIELD
    // ... more INPUT fields ...
    d_16: ReferenceState.getValue("d_16"), // ✅ CALCULATED FIELD
  };

  Object.entries(referenceResults).forEach(([fieldId, value]) => {
    window.TEUI.StateManager.setValue(
      `ref_${fieldId}`,
      String(value),
      "calculated"  // ❌ WRONG! INPUT fields should never have "calculated" state
    );
  });
}
```

**Problem:** S02 was publishing INPUT fields (h_15, d_13, etc.) with "calculated" state, overwriting imported values.

---

## ✅ Solution Implemented (Oct 4, 2025)

### Three-Part Fix (~50 lines of code)

#### 1. StateManager.js - Import Quarantine Infrastructure

**Added OVER_RIDDEN state (line 161):**
```javascript
const VALUE_STATES = {
  DEFAULT: "default",
  IMPORTED: "imported",
  USER_MODIFIED: "user-modified",
  OVER_RIDDEN: "over-ridden",  // NEW: ReferenceValues overlays
  CALCULATED: "calculated",
  DERIVED: "derived"
};
```

**Added listener muting (lines 172, 547-551, 1817-1829):**
```javascript
let listenersActive = true; // Flag to mute listeners during import quarantine

function notifyListeners(fieldId, newValue, oldValue, state) {
  // Check if listeners are muted (import quarantine)
  if (!listenersActive) {
    console.log(`[StateManager] Skipped listener for ${fieldId} (quarantine active)`);
    return;
  }
  // ... existing notification logic ...
}

function muteListeners() {
  listenersActive = false;
  console.log('[StateManager] 🔒 Listeners MUTED (import quarantine active)');
}

function unmuteListeners() {
  listenersActive = true;
  console.log('[StateManager] 🔓 Listeners UNMUTED (import quarantine ended)');
}
```

**Impact:** Enables import quarantine pattern to prevent premature calculations

---

#### 2. FileHandler.js - Import Quarantine Pattern

**Wrapped import sequence (lines 141-168):**
```javascript
// 🔒 START IMPORT QUARANTINE - Mute listeners to prevent premature calculations
console.log('[FileHandler] 🔒 IMPORT QUARANTINE START - Muting listeners');
window.TEUI.StateManager.muteListeners();

try {
  // Import Target values (REPORT sheet)
  this.updateStateFromImportData(importedData, 0, false);
  console.log(`[FileHandler] Imported ${Object.keys(importedData).length} Target values`);

  // Import Reference values (REFERENCE sheet)
  this.processImportedExcelReference(workbook);

  // ✅ CRITICAL: Sync Pattern A sections AFTER both imports
  this.syncPatternASections();
  console.log("[FileHandler] ✅ Pattern A sections synced with imported values");

} finally {
  // 🔓 END IMPORT QUARANTINE - Always unmute, even if import fails
  window.TEUI.StateManager.unmuteListeners();
  console.log('[FileHandler] 🔓 IMPORT QUARANTINE END - Unmuting listeners');
}

// Trigger clean recalculation with all imported values loaded
console.log('[FileHandler] Triggering post-import calculation with fresh values...');
this.calculator.calculateAll();
```

**Impact:** Prevents S02 (and other sections) from calculating during import with stale values

---

#### 3. Section02.js - Removed INPUT Fields from Publishing

**Fixed storeReferenceResults() (lines 825-850):**
```javascript
/**
 * ✅ FIX (Oct 4, 2025): Only publish CALCULATED outputs, NOT input fields
 * INPUT fields (h_15, d_13, l_12, etc.) are managed by:
 * - User input → StateManager.setValue("ref_h_15", value, "user-modified")
 * - Import → StateManager.setValue("ref_h_15", value, "imported")
 * - ReferenceValues → StateManager.setValue("ref_f_85", value, "over-ridden")
 *
 * Section calculations should ONLY publish calculated outputs!
 */
function storeReferenceResults() {
  if (!window.TEUI?.StateManager) return;

  // ✅ ONLY publish CALCULATED outputs from Reference model calculations
  const referenceResults = {
    d_16: ReferenceState.getValue("d_16"), // Carbon target (CALCULATED) ✅
    // ❌ REMOVED INPUT FIELDS - they are NOT calculated by S02:
    // h_12, h_13, d_12, d_13, d_14, d_15, h_15, l_12, l_13, l_14, l_15, l_16
  };

  Object.entries(referenceResults).forEach(([fieldId, value]) => {
    if (value !== null && value !== undefined) {
      window.TEUI.StateManager.setValue(`ref_${fieldId}`, String(value), "calculated");
    }
  });

  console.log("[S02] Reference CALCULATED results stored (d_16 only - INPUT fields excluded)");
}
```

**Impact:** S02 no longer overwrites imported INPUT fields with calculated state

---

### Test Results

**Test Case:** Import Excel with ref_h_15 = 11167

**Before Fix:**
- Import reads: 11167 ✅
- StateManager stores: ref_h_15 = "11167" (state: "imported") ✅
- S02 listener fires during import ❌
- S02 overwrites: ref_h_15 = "1427.20" (state: "calculated") ❌
- **Result:** UI shows 1427.20 (WRONG - stale default)

**After Fix:**
- Import reads: 11167 ✅
- Listeners muted (quarantine active) ✅
- StateManager stores: ref_h_15 = "11167" (state: "imported") ✅
- Sync Pattern A sections: S02.ReferenceState syncs 11167 ✅
- Listeners unmuted ✅
- Clean calculateAll() with fresh values ✅
- S02 storeReferenceResults() publishes ONLY d_16 (not h_15) ✅
- **Result:** UI shows 11167 (CORRECT - imported value preserved)

**User Confirmation:**
> "For the first time now we see 11167 for h_15 in both Target and Reference model h_15 values, and we did not appear to break functionality."

---

## 🏛️ State Architecture Clarification (Oct 4, 2025)

### Two Meanings of "State"

The term "state" has **two distinct meanings** in this application:

#### 1. Value States (metadata about how a value was set)

**For INPUT/EDITABLE fields (h_15, d_13, ref_f_85, etc.):**
- `DEFAULT` - Initial value at app startup (weakest)
- `USER-MODIFIED` - User typed/selected value in UI
- `OVER-RIDDEN` - ReferenceValues overlay applied (when d_13 changes)
- `IMPORTED` - Value loaded from Excel file

**For CALCULATED fields (j_32, k_32, ref_j_32, etc.) - ONLY:**
- `CALCULATED` - Computed result from input values
- `DERIVED` - Secondary calculation

#### 2. Model States (which building model)

- `Target` - The proposed/design building model
- `Reference` - The code-compliant baseline building model

### Critical Rules

**INPUT Fields:**
- Can have: DEFAULT, USER-MODIFIED, OVER-RIDDEN, IMPORTED
- **Last write wins** among USER-MODIFIED, OVER-RIDDEN, IMPORTED (non-hierarchical)
- **NEVER** have CALCULATED or DERIVED states
- Examples: h_15 (area), d_13 (building code), l_12 (electricity price)

**CALCULATED Fields:**
- **ONLY** have CALCULATED or DERIVED states
- Never user-modified, over-ridden, or imported
- Examples: j_32 (TEUI), k_32 (TEDI), d_16 (carbon target)

**State Isolation:**
- Target and Reference models are completely independent
- ref_h_15 changes don't affect h_15 and vice versa
- Both can have same or different value states

### State Priority Matrix

| Current State | Can Be Replaced By | Cannot Be Replaced By |
|---------------|-------------------|----------------------|
| DEFAULT | IMPORTED, USER_MODIFIED, OVER_RIDDEN, CALCULATED | (none - weakest) |
| USER_MODIFIED | IMPORTED, OVER_RIDDEN | DEFAULT, CALCULATED |
| OVER_RIDDEN | IMPORTED, USER_MODIFIED | DEFAULT, CALCULATED |
| IMPORTED | USER_MODIFIED, OVER_RIDDEN | DEFAULT, CALCULATED |
| CALCULATED | (should only be on calculated fields) | (INPUT fields should never have this) |

**⚠️ CURRENT LIMITATION:** State priority not enforced in setValue() - last write always wins. This is why import quarantine is necessary.

---

## 📐 Architecture Consistency Analysis

### Reference System Components

**FileHandler.js (Import):**
- **Responsibility:** Load values from external Excel file → StateManager
- **Scope:** One-time operation (user-triggered file upload)
- **Target:** Both Target and Reference states (REPORT + REFERENCE sheets)
- **State Applied:** IMPORTED

**ReferenceValues.js (Code Standards):**
- **Responsibility:** Store building code minimum values (static data)
- **Scope:** Reference to data only (no state modification logic)
- **Target:** Reference state only
- **State Applied:** N/A (data source only)

**ReferenceToggle.js (Display + Setup):**
- **Responsibility 1:** Switch display between Target/Reference (display-only)
- **Responsibility 2:** Copy Target → Reference (Mirror Target setup)
- **Responsibility 3:** Apply ReferenceValues overlays (Mirror + Reference setup)
- **Scope:** User-triggered setup operations + display toggling
- **Target:** Reference state (reads from Target, writes to Reference)
- **State Applied:** "mirrored", "reference-standard" (should standardize to IMPORTED, OVER_RIDDEN)

**ReferenceManager.js (Coordination):**
- **Responsibility:** Coordinate access to ReferenceValues based on d_13 selection
- **Scope:** Query/helper module (no direct state modification)
- **Target:** Both states (identifies code-defined fields, manages standard selection)
- **State Applied:** N/A (coordination only)

### Integration Validation

**✅ No Functional Duplication:** Each module has distinct, non-overlapping responsibilities

**✅ Pattern Consistency:**
- All use ModeManager facade pattern
- All use StateManager `ref_` prefix
- All respect Target/Reference isolation

**✅ Terminology Alignment:**
- VALUE_STATES consistent across modules
- Model States (Target/Reference) orthogonal to Value States
- OVER_RIDDEN state integrates with existing patterns

**✅ Import Quarantine Compatibility:**
- Doesn't interfere with Mirror Target (operates on isolated section state)
- Doesn't interfere with ReferenceValues overlay (controlled application, no cascading)
- Only affects global StateManager listener chain during import

---

## 📋 Pattern A Sections - Remaining Work

### Sections Requiring storeReferenceResults() Fix

All Pattern A dual-state sections need audit to remove INPUT fields from publishing:

- ✅ **S02** - Building Info (FIXED Oct 4, 2025)
- ⏳ **S03** - Climate Calculations (e.g., location: Milton → Alexandria bug)
- ⏳ **S04** - Actual Target Energy
- ⏳ **S05** - Emissions
- ⏳ **S06** - On-Site Energy
- ⏳ **S08** - Indoor Air Quality
- ⏳ **S15** - TEUI Summary

### Fix Pattern (Apply to Each Section)

**1. Identify INPUT vs CALCULATED fields:**
```javascript
// INPUT fields (user-editable, importable):
// - Location, climate zone, occupancy, equipment selections, etc.
// - These should NOT be published by storeReferenceResults()

// CALCULATED fields (computed outputs):
// - TEUI, TEDI, loads, totals, etc.
// - These SHOULD be published for downstream sections
```

**2. Update storeReferenceResults():**
```javascript
function storeReferenceResults() {
  // ✅ ONLY publish CALCULATED outputs
  const referenceResults = {
    // Keep only truly calculated fields
    // Remove all INPUT fields
  };

  Object.entries(referenceResults).forEach(([fieldId, value]) => {
    if (value !== null && value !== undefined) {
      window.TEUI.StateManager.setValue(`ref_${fieldId}`, String(value), "calculated");
    }
  });

  console.log("[SXX] Reference CALCULATED results stored (INPUT fields excluded)");
}
```

**3. Test import for that section's fields**

---

## 🎯 Implementation Checklist

### Completed (Oct 4, 2025)

- ✅ Add OVER_RIDDEN to VALUE_STATES constant
- ✅ Implement listener muting (muteListeners/unmuteListeners)
- ✅ Add import quarantine to FileHandler
- ✅ Fix S02 storeReferenceResults
- ✅ Test ref_h_15 import (11167 preserved correctly)
- ✅ Document architecture consistency analysis
- ✅ Verify no breaking changes

### Pending (Oct 5, 2025)

- ⏳ Audit S03 storeReferenceResults (fix Milton/Alexandria location bug)
- ⏳ Audit S04 storeReferenceResults
- ⏳ Audit S05 storeReferenceResults
- ⏳ Audit S06 storeReferenceResults
- ⏳ Audit S08 storeReferenceResults
- ⏳ Audit S15 storeReferenceResults

### Future Enhancements (Optional)

- ⏳ Update ReferenceToggle state names ("mirrored" → IMPORTED, "reference-standard" → OVER_RIDDEN)
- ⏳ Add state validation to setValue() (prevent CALCULATED on INPUT fields)
- ⏳ Remove debug logging after Pattern A deployment complete

---

## 📊 Commits

**Oct 4, 2025 Session:**
- `f8bf50c` - Add architecture consistency analysis for import fix
- `319f78c` - Implement import quarantine fix - prevent calculated defaults from overwriting imports
- `201f111` - Document successful import fix implementation and test results

**Total Implementation:**
- ~50 lines of production code
- ~2 hours (analysis + implementation + testing)
- Zero breaking changes
- Full architecture alignment confirmed

---

## 📚 Related Documentation

- **Master-Reference-Roadmap.md** - Reference system architecture and anti-patterns
- **README.md** - State terminology clarification (Oct 4, 2025 section)
- **DUAL-STATE-CHEATSHEET.md** - Pattern A implementation patterns
- **MAPPER-FULL-DEBUG-OCT4.md** - Complete debugging session archive (3,273 lines)

---

*Last Updated: October 4, 2025 - Import quarantine fix implemented and tested successfully*
