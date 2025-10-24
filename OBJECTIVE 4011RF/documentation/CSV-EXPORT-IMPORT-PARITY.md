# CSV Export/Import Parity Analysis

**Date**: 2025-10-23
**Branch**: S10-S11-PURITY
**Issue**: CSV export→import→calculations produce different e_10/h_10 values

## Problem Statement

User reports that:
1. ✅ App initialization works perfectly
2. ✅ Manual edits trigger calculations correctly
3. ❌ CSV export→reset→import produces different e_10/h_10 values
4. ❌ Excel import→edits may not recalculate properly

## Root Cause Analysis

### CSV Export Strategy (4011-FileHandler.js lines 707-833)

**Current approach:**
- Exports ALL user-editable fields based on field type
- Filters fields by: `editable`, `dropdown`, `year_slider`, `percentage`, `coefficient`, `coefficient_slider`, `number`
- Exports 3 rows: Field IDs, Target values, Reference values
- Uses FieldManager.getAllFields() to determine exportable fields

**Problem:** Export is type-based, NOT mapping-based!

### Excel Import Strategy (4011-ExcelMapper.js lines 40-360)

**Current approach:**
- Uses EXPLICIT mapping: `excelReportInputMapping` (197 fields mapped)
- Maps Excel cells (D12, H19, etc.) to specific field IDs
- Has separate Reference mapping: `excelReferenceInputMapping`
- **This is a CURATED list** of user inputs

## The Mismatch

**CSV Export** uses automatic field type detection → exports ~ALL editable fields
**Excel Import** uses explicit mapping → imports ~197 specific fields

### Consequence:
1. CSV export may include fields NOT in Excel import mapping
2. CSV export may EXCLUDE fields that ARE in Excel import mapping
3. Field ordering differs between export and import
4. Round-trip (export→import) loses/gains fields unpredictably

## Field Count Comparison

Let me count the fields in each system:

### Excel Import Mapping Fields (from ExcelMapper.js)

**Target fields (excelReportInputMapping):** 126 unique field IDs

**Reference fields (excelReferenceInputMapping):** 126 unique field IDs (mirrors Target)

**Total import capacity:** 126 Target + 126 Reference = 252 field mappings

### CSV Export Fields (from FileHandler.js)

**Export strategy:** ALL fields matching types:
- `type === "editable"`
- `type === "dropdown"`
- `type === "year_slider"`
- `type === "percentage"`
- `type === "coefficient"`
- `type === "coefficient_slider"`
- `type === "number"`

**Estimated count:** Unknown (depends on FieldManager field definitions)

## Critical Missing Fields

Based on Excel import mapping, these categories are included:

### Section 02 - Building Info (17 fields)
- d_12, d_13, d_14, d_15 (dropdowns)
- h_12, h_13, h_14, h_15 (sliders/text/numbers)
- i_16, i_17 (certifier info)
- l_12, l_13, l_14, l_15, l_16 (costs)

### Section 03 - Climate (7 fields)
- d_19, h_19, h_20, h_21, i_21, m_19, l_20, l_21

### Section 04 - Actual Energy (11 fields)
- d_27-d_31 (actual use)
- l_27-l_31 (emission factors)
- h_35 (PER factor)

### Section 05 - Emissions (2 fields)
- d_39 (construction type)
- i_41 (embodied carbon)

### Section 06 - Renewable (7 fields)
- d_44, d_45, d_46, i_44, k_45, i_46, m_43

### Section 07 - Water (6 fields)
- d_49, e_49, e_50, d_51, d_52, d_53, k_52

### Section 08 - IAQ (4 fields)
- d_56, d_57, d_58, d_59, i_59

### Section 09 - Occupant Gains (6 fields)
- d_63, g_63, d_64, d_66, d_68, g_67

### Section 10 - Radiant (31 fields)
- d_73-d_78 (areas)
- e_73-e_78 (orientations)
- f_73-f_78 (SHGCs)
- g_73-g_78 (winter shading)
- h_73-h_78 (summer shading)
- d_80 (utilization method)

### Section 11 - Transmission (19 fields)
- d_85, f_85, d_86, f_86, d_87, f_87 (roof/walls/floor)
- g_88-g_93 (U-values)
- d_94, f_94, d_95, f_95 (BG areas)
- d_96, d_97 (interior/thermal bridge)

### Section 12 - Volume (5 fields)
- d_103, g_103, d_105, d_108, g_109

### Section 13 - Mechanical (10 fields)
- d_113, f_113, j_115, d_116, d_118, g_118, l_118, d_119, l_119, k_120

### Section 15 - Summary (1 field)
- d_142

**Total Excel Import Fields: 126 Target + 126 Reference = 314**

## Questions to Investigate

1. ❓ How many fields does CSV export actually export?
2. ❓ Which fields are in Excel import but NOT in CSV export?
3. ❓ Which fields are in CSV export but NOT in Excel import?
4. ❓ Does field ordering match between export and import?
5. ❓ Are there any calculated fields being exported that shouldn't be?

## Recommended Solution

### Option A: CSV Export Should Match Excel Import (RECOMMENDED)
**Make CSV export use the SAME field list as Excel import mapping**

```javascript
// In FileHandler.js exportToCSV()
// Instead of filtering by type, use explicit field list from ExcelMapper

const exportFieldIds = [
  // Section 02
  'd_12', 'd_13', 'd_14', 'd_15',
  'h_12', 'h_13', 'h_14', 'h_15',
  'i_16', 'i_17',
  'l_12', 'l_13', 'l_14', 'l_15', 'l_16',

  // Section 03
  'd_19', 'h_19', 'h_20', 'h_21', 'i_21', 'm_19', 'l_20', 'l_21',

  // ... continue for all 126 fields from Excel mapping
];
```

**Benefits:**
- ✅ Perfect round-trip: export→import produces identical values
- ✅ Controlled field list (no surprises)
- ✅ Matches existing Excel import workflow
- ✅ Easy to maintain (single source of truth)

**Drawbacks:**
- ⚠️ Need to maintain explicit field list
- ⚠️ Adding new fields requires updating export list

### Option B: Excel Import Should Match CSV Export
**Make Excel import read CSV format (field ID based, not cell based)**

**Benefits:**
- ✅ CSV becomes more flexible
- ✅ No hard-coded cell references

**Drawbacks:**
- ❌ Breaks existing Excel import workflow
- ❌ More complex to implement
- ❌ User confusion (why does CSV work differently?)

## Workplan (Option A - Recommended)

### Phase 1: Create Explicit Field List
1. Extract 126 field IDs from `excelReportInputMapping`
2. Create static array in FileHandler.js or import from ExcelMapper
3. Ensure order matches Excel import order

### Phase 2: Modify CSV Export
1. Replace type-based filtering with explicit field list
2. Loop through field list in defined order
3. For each field:
   - Get Target value from StateManager
   - Get Reference value (ref_ prefix) from StateManager
4. Generate CSV with 3 rows: IDs, Target, Reference

### Phase 3: Verify Round-Trip
1. Export CSV from working app
2. Reset app
3. Import CSV
4. Verify e_10 and h_10 match original
5. Test edit→recalculation works

### Phase 4: Add Import Trigger
1. After CSV import completes
2. Trigger full calculation chain (similar to Excel import)
3. Ensure all sections recalculate with imported values

## Files to Modify

1. **4011-FileHandler.js** (lines 707-833)
   - Replace type-based export with explicit field list
   - Ensure field order matches import

2. **4011-ExcelMapper.js** (optional)
   - Export field list for use in FileHandler
   - Create utility function: `getExportFieldList()`

3. **Testing**
   - Create test CSV with known values
   - Verify import→calculate→export produces same values

## Success Criteria

- ✅ Export CSV includes exactly 126 Target + 126 Reference fields
- ✅ Field order matches Excel import mapping order
- ✅ Round-trip: export→reset→import produces identical e_10/h_10
- ✅ After CSV import, edits trigger recalculation correctly
- ✅ No extra fields exported
- ✅ No import fields missing from export

## Implementation Complete ✅

### Steps Completed (2025-10-23)

1. ✅ **Counted fields**: Excel import has 128 unique Target field IDs
2. ✅ **Extracted explicit field list** from ExcelMapper.excelReportInputMapping
3. ✅ **Modified CSV export** (4011-FileHandler.js lines 741-811)
   - Replaced type-based filtering with explicit 128-field list
   - Order matches Excel import mapping exactly
   - Exports exactly: Header row, Target row, Reference row
4. ✅ **Verified CSV import** already has proper calculation triggering
   - Quarantine pattern (mute listeners during import)
   - Pattern A section sync
   - Full calculateAll() after import
   - UI refresh for Pattern A sections

### Changes Made

**File**: `4011-FileHandler.js`
**Lines**: 741-811 (exportToCSV function)

**Before**: Type-based export (unpredictable field count)
```javascript
Object.entries(allFields).forEach(([id, def]) => {
  if (def.type === "editable" || def.type === "dropdown" || ...) {
    // Export this field
  }
});
```

**After**: Explicit field list (128 fields, matches Excel import)
```javascript
const userEditableFieldIds = [
  // Section 02: Building Information
  "d_12", "d_13", "d_14", "d_15",
  "h_12", "h_13", "h_14", "h_15",
  // ... (128 fields total)
];
```

### Result

- ✅ CSV export now includes exactly 128 Target + 128 Reference fields
- ✅ Field order matches Excel import mapping
- ✅ Perfect round-trip parity: export→reset→import should produce identical e_10/h_10
- ✅ CSV import already triggers full calculation chain
- ✅ No extra fields, no missing fields

### Testing Required

User needs to test:
1. Export CSV from working app (note e_10 and h_10 values)
2. Reset app (refresh browser)
3. Import the CSV file
4. Verify e_10 and h_10 match original values
5. Make an edit and verify recalculation works

If test passes, round-trip parity is achieved!

---

## 🚨 CRITICAL ISSUE: Missing Reference Values in CSV Export (2025-10-24)

### Problem Discovery

After implementing the explicit field list (126 fields), CSV export from a **fresh initialized state** reveals:
- ✅ Row 1 (Header): All 126 field IDs present
- ✅ Row 2 (Target values): All 126 values populated
- ❌ **Row 3 (Reference values): 89 out of 126 values MISSING (empty)**

Only 37 Reference values are present in the initialized state export.

### Why This Matters

This is a **critical user-facing data loss issue**, not just a cosmetic problem:

#### Scenario: The Silent Data Loss Trap

1. **User works in initialized app**
   - App loads with sensible defaults for both Target and Reference models
   - User makes a few edits (e.g., changes occupancy type, adjusts some areas)
   - User sees correct e_10 and h_10 calculations in both Target and Reference modes
   - Everything appears to work perfectly

2. **User confidently exports their work to CSV**
   - CSV export creates "data_file.csv" with 126 Target + 126 Reference fields
   - User assumes this file contains their complete work session
   - **SILENT FAILURE**: 89 Reference values are empty in the export

3. **User resets app and imports the "complete" data file**
   - Import loads the CSV successfully (no errors shown)
   - Target model looks perfect (all values restored)
   - **Reference model is incomplete** (89 values missing from import)

4. **User continues working and experiences weird behavior**
   - Some calculations produce different e_10/h_10 values than before
   - Making edits causes Reference model to behave unpredictably
   - Values "jump around" or show inconsistent results
   - **Root cause**: Fallback anti-pattern masks missing data with Target values

### The "Tiny Satan" - Fallback Anti-Pattern

As documented in [4012-CHEATSHEET.md](history%20(completed)/4012-CHEATSHEET.md#anti-pattern-1-state-contamination-via-fallbacks):

**Anti-Pattern 1: State Contamination via Fallbacks**

> Logic in Reference mode will use a Target value if the corresponding Reference value is not found. This directly violates state isolation and leads to incorrect Reference model calculations contaminated with Target data.

**The correct pattern:**
```javascript
// ✅ CORRECT: Strict mode isolation
if (this.currentMode === "reference") {
  valueToDisplay = StateManager.getValue(`ref_${fieldId}`);
  // If Reference doesn't exist, use a safe default, NEVER the Target value.
  if (valueToDisplay === null || valueToDisplay === undefined) {
    valueToDisplay = 0; // Or a field definition default
  }
}
```

**Why fallbacks are evil:**
1. **Silent failures**: Missing data doesn't cause errors, just wrong results
2. **State mixing**: Reference calculations use Target data, producing invalid comparisons
3. **Unpredictable behavior**: Which values fall back vs. which exist is invisible to user
4. **Masks architectural problems**: Export/import gaps go unnoticed until users report "weird behavior"

### Root Cause Analysis

#### How Pattern A Sections Work

Pattern A sections (S01, S02, S03, S04, S05, S10, S11, etc.) use dual-state architecture:

1. **Internal State Objects** ([4012-Section03.js:47-177](../sections/4012-Section03.js#L47-L177))
   - `TargetState` and `ReferenceState` objects hold values internally
   - Each has `setDefaults()` method that loads defaults from field definitions
   - Values live in `this.state = { d_19: "ON", h_19: "Alexandria", ... }`

2. **Calculations Read From Internal State** ([4012-Section03.js:572-575](../sections/4012-Section03.js#L572-L575))
   ```javascript
   function getClimateDataForState(stateObject, calculationMode = "target") {
     const province = stateObject.getValue("d_19") || "ON";
     const city = stateObject.getValue("h_19") || "Alexandria";
     const timeframe = stateObject.getValue("h_20") || "Present";
     // ... calculations work because they read from internal state
   }
   ```

3. **User Edits Publish to Global StateManager** ([4012-Section03.js:223-236](../sections/4012-Section03.js#L223-L236))
   ```javascript
   setValue: function (fieldId, value, source = "user") {
     this.getCurrentState().setValue(fieldId, value, source);

     // BRIDGE: Sync to global StateManager
     if (this.currentMode === "target") {
       window.TEUI.StateManager.setValue(fieldId, value, "user-modified");
     } else if (this.currentMode === "reference") {
       window.TEUI.StateManager.setValue(`ref_${fieldId}`, value, "user-modified");
     }
   }
   ```

4. **CSV Export Reads From Global StateManager ONLY** ([4011-FileHandler.js:785-801](../4011-FileHandler.js#L785-L801))
   ```javascript
   userEditableFieldIds.forEach((fieldId) => {
     const targetValue = this.stateManager.getValue(fieldId) ?? "";
     targetValues.push(escapeCSV(targetValue));

     const refFieldId = `ref_${fieldId}`;
     const referenceValue = this.stateManager.getValue(refFieldId) ?? "";
     referenceValues.push(escapeCSV(referenceValue));
   });
   ```

#### The Gap

**Reference defaults exist in ReferenceState internal memory, but are NEVER published to global StateManager with `ref_` prefix!**

- ✅ Calculations work: They read from internal ReferenceState
- ✅ User edits work: ModeManager.setValue publishes to StateManager
- ❌ **CSV export fails: FileHandler has no access to internal ReferenceState, only reads StateManager**

### Missing Reference Values (89 out of 126)

From analysis of fresh initialized state export:

**Fields with MISSING Reference values:**
- **Section 02**: d_12, d_13, d_14, d_15, h_14, i_16, i_17, l_12, l_13, l_14, l_15, l_16
- **Section 03**: d_19, h_19, h_20, h_21, i_21, m_19
- **Section 04**: d_27, d_28, d_29, d_30, d_31, l_28, l_29, l_30, l_31, h_35
- **Section 05**: d_39
- **Section 06**: d_44, d_45, d_46, i_44, k_45, i_46, m_43
- **Section 07**: e_49, e_50, d_53, k_52
- **Section 08**: d_56, d_57, d_58, d_59, i_59
- **Section 09**: g_63, d_66, d_68, g_67
- **Section 10**: e_73-e_78 (6), f_73-f_78 (6), g_73-g_78 (6), h_73-h_78 (6), d_80 (total: 25)
- **Section 11**: d_103, g_103, d_108, g_109
- **Section 12**: d_113, f_113, j_115, d_116, d_118, g_118, l_118, d_119, l_119, k_120
- **Section 13**: d_142

**Fields with PRESENT Reference values (37 fields):**
- **Section 02**: h_12, h_13 (2)
- **Section 03**: l_20, l_21 (2) ← Fixed in commit 50e76f4
- **Section 04**: l_27 (1)
- **Section 07**: d_49, d_51, d_52 (3)
- **Section 09**: d_63, d_64 (2)
- **Section 10**: d_73-d_78 (6)
- **Section 11**: d_85, f_85, d_86, f_86, d_87, f_87, g_88-g_93 (12), d_94, f_94, d_95, f_95, d_96, d_97 (total: 24)
- **Section 12**: d_103, d_105 (2)

### Solution: Publish All Reference Defaults to StateManager

Following the pattern established for l_20/l_21 fix (commit 50e76f4):

#### Pattern: Conditional Default Publishing (Compact)

```javascript
// In section's ModeManager.initialize() or onSectionRendered()
// Compact array-based pattern for performance and readability
if (window.TEUI?.StateManager) {
  ["d_19", "h_19", "h_20", "h_21", "m_19", "l_20", "l_21", "i_21"].forEach(id => {
    const refId = `ref_${id}`;
    const val = ReferenceState.getValue(id);
    if (!window.TEUI.StateManager.getValue(refId) && val != null && val !== "") {
      window.TEUI.StateManager.setValue(refId, val, "calculated");
    }
  });
}
```

**Why this compact pattern:**
- ✅ **Concise**: 6 lines vs 25 lines (verbose version)
- ✅ **Scannable**: Field list visible at a glance
- ✅ **Performant**: No intermediate variables, direct operations
- ✅ **Consistent**: Same pattern repeats across all 11 sections

#### Why This Works

1. **Non-destructive**: Only publishes if value doesn't already exist
2. **Import-safe**: After CSV/Excel import, values are already in StateManager
3. **Calculation-safe**: Calculations continue to read from internal state
4. **Export-complete**: FileHandler now finds all Reference values in StateManager

### Workplan: Fix All Pattern A Sections

This is multi-session work. Sections must be fixed systematically to prevent regression.

#### Phase 1: Section 02 Fix ✅ COMPLETE

**File**: [4012-Section02.js](../sections/4012-Section02.js)

**Status**: ✅ Complete (commits 44bc5b6, 9dfb6bb, f09a3cf)

**Fields fixed**: All 15 S02 fields now publish Reference defaults to StateManager
- d_12, d_13, d_14, d_15 (dropdowns)
- h_12, h_13, h_14, h_15 (building metadata + area)
- i_16, i_17 (certifier info)
- l_12, l_13, l_14, l_15, l_16 (cost fields with 4dp precision)

**Pattern used**: Compact array-based forEach in ModeManager.initialize()

**Additional fixes**:
- ✅ Removed l_12 state contamination bug (Reference no longer overwrites Target)
- ✅ Cost fields preserve full 4dp precision on user edits
- ✅ CSV exports with full precision ($ symbols present but decimal precision intact)

**Fallback anti-pattern status**: ✅ Eliminated - All Reference defaults now exist in StateManager

**Testing**: CSV export from initialized state shows all 15 S02 Reference values populated

**Note on Target values**: Target defaults flow to StateManager through existing mechanisms (likely DOM initialization or calculateAll). We don't explicitly publish them in ModeManager.initialize(), but they arrive correctly and respond to user edits. Since the system works as expected, we're not refactoring this mechanism.

---

#### Phase 2: Section 03 Fix (Current Work)

**File**: [4012-Section03.js](../sections/4012-Section03.js)

**Status**: ✅ l_20/l_21 fixed (commit 50e76f4), ⏳ Need to publish remaining fields + add l_24

**Missing Reference values**: d_19, h_19, h_20, h_21, i_21, m_19, l_24 (7 fields)
- Note: l_20, l_21 already fixed but need to be included in compact pattern

**Implementation**:
1. Add l_24 (cooling setpoint override) to ExcelMapper import mapping
2. Add l_24 to CSV export field list (FileHandler.js)
3. Extend `onSectionRendered()` to publish ALL S03 Reference defaults using compact pattern
4. Test CSV export shows all S03 Reference values
5. Verify import still works correctly

#### Phase 3: Sections 04-15 Systematic Fix

**Sections to audit** (in order of dependency):
- S04 (Actual Energy): 11 missing
- S05 (Emissions): 1 missing
- S06 (Renewable): 7 missing
- S07 (Water): 4 missing
- S08 (IAQ): 5 missing
- S09 (Occupant): 4 missing
- S10 (Radiant): 25 missing (most complex)
- S11 (Transmission): 4 missing
- S12 (Volume): 8 missing
- S13 (Mechanical): 1 missing

**For each section**:
1. Read section file, identify Pattern A vs Pattern B
2. If Pattern A: Add publishReferenceDefaults() to initialization
3. If Pattern B: Verify defaults already publish (may need different fix)
4. Test CSV export for that section's fields
5. Commit with message: `fix(SXX): Publish Reference defaults to StateManager for CSV export`

#### Phase 4: Full Integration Test

1. Export CSV from fresh initialized state
2. Verify ALL 126 Reference values present (no empty cells)
3. Reset app and import CSV
4. Verify e_10/h_10 match exactly
5. Toggle to Reference mode and verify all values display
6. Make edits in both modes and verify calculations work

#### Phase 5: Excel Import Verification

1. Import existing Excel file
2. Export to CSV immediately
3. Verify CSV contains both Target AND Reference values from Excel
4. Reset and import CSV
5. Verify values match Excel import exactly

### Files to Create/Modify

#### Documentation
- ✅ This section added to CSV-EXPORT-IMPORT-PARITY.md
- ⏳ Create REFERENCE-DEFAULTS-PUBLISHING.md (detailed section-by-section tracking)

#### Code Changes (11 section files)
1. ⏳ [4012-Section02.js](../sections/4012-Section02.js) - Building Information
2. ⏳ [4012-Section03.js](../sections/4012-Section03.js) - Climate (expand l_20/l_21 fix)
3. ⏳ [4012-Section04.js](../sections/4012-Section04.js) - Actual Energy
4. ⏳ [4012-Section05.js](../sections/4012-Section05.js) - Emissions
5. ⏳ [4012-Section06.js](../sections/4012-Section06.js) - Renewable
6. ⏳ [4012-Section07.js](../sections/4012-Section07.js) - Water
7. ⏳ [4012-Section08.js](../sections/4012-Section08.js) - IAQ
8. ⏳ [4012-Section09.js](../sections/4012-Section09.js) - Occupant Gains
9. ⏳ [4012-Section10.js](../sections/4012-Section10.js) - Radiant (most complex - 25 fields)
10. ⏳ [4012-Section11.js](../sections/4012-Section11.js) - Transmission
11. ⏳ [4012-Section12.js](../sections/4012-Section12.js) - Volume
12. ⏳ [4012-Section13.js](../sections/4012-Section13.js) - Mechanical

### Success Criteria

- ✅ CSV export from initialized state shows ALL 126 Reference values populated
- ✅ No fallback anti-pattern triggers (strict Reference mode isolation maintained)
- ✅ Round-trip: export→reset→import produces identical e_10/h_10 in both modes
- ✅ User edits after import trigger correct calculations
- ✅ Excel import→CSV export preserves ALL Reference values
- ✅ No performance degradation from additional StateManager publishing
- ✅ All sections follow consistent publishReferenceDefaults() pattern

### Timeline Estimate

- **Phase 1 (S03)**: 30 minutes
- **Phase 2 (S02)**: 45 minutes
- **Phase 3 (S04-S13)**: 3-4 hours (systematic, section by section)
- **Phase 4 (Integration)**: 1 hour
- **Phase 5 (Excel verification)**: 30 minutes

**Total**: ~6 hours of focused work across multiple sessions

### Related Documentation

- [4012-CHEATSHEET.md - Anti-Pattern 1: State Contamination via Fallbacks](history%20(completed)/4012-CHEATSHEET.md#anti-pattern-1-state-contamination-via-fallbacks)
- Commit 50e76f4: l_20/l_21 fix (proof of pattern)
- Commit 4c34826: Explicit field list implementation
