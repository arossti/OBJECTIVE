# CSV Import Parity Investigation

**Goal:** Achieve functional parity between Excel import and CSV import workflows
**Status:** 🔴 CSV import incomplete - calculations not triggered
**Date:** October 9, 2025

---

## Problem Statement

CSV import successfully reads 3-row format (headers + target + reference) and imports 246 fields (123 target + 123 reference), but the imported values appear stale because **calculations are not triggered** after import completes.

Excel import works perfectly and matches Excel calculations exactly.

---

## Current State Analysis

### Excel Import Flow (✅ WORKING)
**File:** `4011-FileHandler.js::processImportedExcel()` (lines 104-207)

```javascript
// 1. 🔒 START QUARANTINE - Mute listeners to prevent premature calculations
window.TEUI.StateManager.muteListeners();

try {
  // 2. Import Target values from REPORT sheet
  this.updateStateFromImportData(importedData, 0, false);

  // 3. Import Reference values from REFERENCE sheet
  this.processImportedExcelReference(workbook);

  // 4. Sync Pattern A sections (S02, S03, S04, S05, S06, S08, S15)
  //    These sections use isolated DualState and need explicit sync
  this.syncPatternASections();

} finally {
  // 5. 🔓 END QUARANTINE - Unmute listeners
  window.TEUI.StateManager.unmuteListeners();
}

// 6. ✅ TRIGGER CALCULATIONS with all imported values loaded
this.calculator.calculateAll();

// 7. Refresh S03 UI (climate section)
window.TEUI.SectionModules.sect03.ModeManager.refreshUI();
```

**Key Success Factors:**
- Quarantine prevents cascading calculations during import
- All values imported before any calculations run
- Pattern A sections explicitly synced
- Single `calculateAll()` runs after quarantine ends
- UI refresh for sections with special state

---

### CSV Import Flow (🔴 BROKEN)
**File:** `4011-FileHandler.js::processImportedCSV()` (lines 257-364)

```javascript
// 1. Parse 3-row CSV format
const fieldIds = parseCSVRow(headerRow);
const targetValues = parseCSVRow(targetValueRow);
const referenceValues = parseCSVRow(referenceValueRow);

// 2. Import target values (unprefixed)
for (let i = 0; i < fieldIds.length; i++) {
  importedData[fieldIds[i]] = targetValues[i];
}

// 3. Import reference values (ref_ prefixed)
for (let i = 0; i < fieldIds.length; i++) {
  importedData[`ref_${fieldIds[i]}`] = referenceValues[i];
}

// 4. Call updateStateFromImportData
this.updateStateFromImportData(importedData);

// ❌ MISSING: No quarantine
// ❌ MISSING: No syncPatternASections()
// ❌ MISSING: No calculateAll()
// ❌ MISSING: No UI refresh
```

**Problems Identified:**
1. ❌ No `muteListeners()` / `unmuteListeners()` quarantine
2. ❌ No `syncPatternASections()` call
3. ❌ No `calculator.calculateAll()` call
4. ❌ No UI refresh for special sections
5. ✅ Target + Reference import structure is correct (246 fields)

---

## Root Cause

CSV import successfully populates StateManager with imported values but **never triggers the calculation cascade** that propagates those values through all dependent fields and sections.

Without calculations:
- Calculated fields remain at default/stale values
- Reference model not recalculated
- Pattern A sections not synced with imported data
- UI shows incorrect/inconsistent state

---

## Solution Plan

### Phase 1: Add Quarantine Mechanism (CRITICAL)
**File:** `4011-FileHandler.js::processImportedCSV()`

Wrap import operations in quarantine:

```javascript
processImportedCSV(csvString) {
  // ... parsing code ...

  // 🔒 START IMPORT QUARANTINE
  console.log("[FileHandler] 🔒 CSV IMPORT QUARANTINE START - Muting listeners");
  window.TEUI.StateManager.muteListeners();

  try {
    // Import all data (target + reference)
    this.updateStateFromImportData(importedData, 0, false);

    // Sync Pattern A sections
    this.syncPatternASections();

  } finally {
    // 🔓 END IMPORT QUARANTINE
    window.TEUI.StateManager.unmuteListeners();
    console.log("[FileHandler] 🔓 CSV IMPORT QUARANTINE END - Unmuting listeners");
  }
}
```

### Phase 2: Trigger Post-Import Calculations (CRITICAL)
**File:** `4011-FileHandler.js::processImportedCSV()`

After quarantine ends, trigger calculations:

```javascript
// Trigger clean recalculation with all imported values loaded
console.log("[FileHandler] Triggering post-import calculation...");
if (this.calculator && typeof this.calculator.calculateAll === "function") {
  this.calculator.calculateAll();

  // Refresh S03 UI after calculateAll
  if (window.TEUI?.SectionModules?.sect03?.ModeManager?.refreshUI) {
    window.TEUI.SectionModules.sect03.ModeManager.refreshUI();
    console.log("[FileHandler] ✅ S03 UI refreshed after calculateAll()");
  }
}
```

### Phase 3: Status Messages (NICE TO HAVE)
Improve user feedback:

```javascript
this.showStatus(
  `CSV import complete. ${targetCount} target and ${refCount} reference fields imported. Recalculating...`,
  "info"
);

// ... after calculations ...

this.showStatus(
  `Import successful. All calculations updated.`,
  "success"
);
```

---

## Testing Protocol

### Test Case 1: Basic Import Verification
1. Export current state to CSV
2. Modify a calculated field manually to wrong value
3. Import the CSV
4. **Expected:** Calculated field corrects to proper value
5. **Verify:** All dependent calculations cascade properly

### Test Case 2: Reference Model Import
1. Export dual-state CSV with distinct Target vs Reference values
2. Import CSV
3. Toggle between Target/Reference modes
4. **Expected:** Both models show correct calculated values
5. **Verify:** Reference model calculations match Excel import

### Test Case 3: Pattern A Section Sync
1. Export CSV with S02, S03 values
2. Import CSV
3. **Expected:** Pattern A sections (S02, S03, etc.) show imported values
4. **Verify:** Isolated state sections properly synced

### Test Case 4: Complex Dependencies
1. Export CSV with climate data (S03: province, city)
2. Import CSV
3. **Expected:** Climate-dependent calculations (HDD, CDD) update correctly
4. **Verify:** S12 air leakage calculations use correct climate values

---

## Implementation Checklist

- [ ] Add quarantine (`muteListeners` / `unmuteListeners`) to CSV import
- [ ] Call `syncPatternASections()` after CSV import
- [ ] Call `calculator.calculateAll()` after CSV import
- [ ] Refresh S03 UI after calculations
- [ ] Add comprehensive console logging for debugging
- [ ] Update status messages for user feedback
- [ ] Test Case 1: Basic calculations
- [ ] Test Case 2: Reference model
- [ ] Test Case 3: Pattern A sync
- [ ] Test Case 4: Complex dependencies
- [ ] Document in Master-Reference-Roadmap.md

---

## Related Files

- **Primary:** `OBJECTIVE 4011RF/4011-FileHandler.js`
- **Reference:** `OBJECTIVE 4011RF/4011-Calculator.js`
- **Reference:** `OBJECTIVE 4011RF/4011-StateManager.js`
- **Documentation:** `OBJECTIVE 4011RF/documentation/Master-Reference-Roadmap.md`

---

## Success Criteria

✅ CSV import produces **identical results** to Excel import
✅ All calculated fields update correctly
✅ Reference model calculations match
✅ Pattern A sections sync properly
✅ No console errors during import
✅ User receives clear feedback about import success

---

## Next Steps

1. Implement Phase 1 & 2 (quarantine + calculateAll)
2. Test with Sherwood CC CSV file
3. Compare results with Excel import of same project
4. Document findings in Master-Reference-Roadmap.md
5. Consider unifying Excel/CSV import into shared helper function
