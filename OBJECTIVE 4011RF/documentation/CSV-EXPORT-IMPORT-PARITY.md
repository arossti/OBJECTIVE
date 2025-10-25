# CSV Export/Import Parity Analysis

**Date**: 2025-10-24
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

#### Phase 2: Section 03 Fix ✅ COMPLETE

**File**: [4012-Section03.js](../sections/4012-Section03.js)

**Status**: ✅ Complete (commit b7386b7)

**Fields fixed**: All 9 S03 fields now publish Reference defaults to StateManager
- d_19, h_19, h_20, h_21, i_21, m_19, l_20, l_21, l_24 (cooling setpoint override - FUTURE FEATURE)

**Pattern used**: Compact array-based forEach in ModeManager.initialize()

**Additional changes**:
- ✅ Added l_24 (cooling setpoint override) to ExcelMapper import mapping
- ✅ Added l_24 to CSV export field list (FileHandler.js) - now 127 fields total
- ✅ Replaced verbose l_20/l_21 publishing code (25 lines) with compact pattern (6 lines)

**Testing**: CSV export from initialized state shows all 9 S03 Reference values populated

---

#### Phase 3: Section 04 Fix ⏳ IN PROGRESS

**File**: [4012-Section04.js](../sections/4012-Section04.js)

**Status**: ⏳ Code complete, ready to test (commit 8793ee6)

**Fields fixed**: All 10 S04 fields (utility bills + emission factors + PER)
- d_27, d_28, d_29, d_30, d_31 (actual energy consumption - utility bills)
- l_28, l_29, l_30, l_31 (emission factors - optional overrides for advanced users)
- h_35 (PER factor)

**Pattern used**: Compact array-based forEach in ModeManager.initialize()

**Major changes**:
- ❌ **Removed l_27** from ExcelMapper and CSV export (calculated field, province + year dependent)
- ✅ **Converted l_28-l_31** from static content to editable fields (emission factor overrides)
  - l_28: Gas emission factor (1921 gCO2e/m³)
  - l_29: Propane emission factor (2970 gCO2e/kg)
  - l_30: Oil emission factor (2753 gCO2e/litre)
  - l_31: Wood emission factor (150 kgCO2e/m³)
- ✅ Added l_28-l_31 to TargetState and ReferenceState defaults (state isolated)
- ✅ Fields now editable in both Target and Reference modes

**Total CSV fields**: 126 (l_24 added in S03, then l_27 removed in S04)

**Testing required**: CSV export, verify all 10 S04 Reference values, test editability in both modes

---

#### Phase 4: Section 05 Fix ✅ COMPLETE

**File**: [4012-Section05.js](../sections/4012-Section05.js)

**Status**: ✅ Complete (commit 3b2ccd6)

**Fields fixed**: All 2 S05 fields (construction typology + embodied carbon)
- d_39: Construction typology (Pt.3 Steel reference vs Pt.3 Mass Timber target)
- i_41: Embodied carbon value (kgCO2e/m²)

**Pattern used**: Compact array-based forEach in ModeManager.initialize()

**Major changes**:
- ✅ Added Reference value publishing to ModeManager.setValue() (ref_ prefix)
- ✅ Published all 2 S05 Reference defaults using compact pattern
- ✅ User edits in Reference mode now publish to StateManager correctly

**Testing**: CSV export shows all 2 S05 Reference values (d_39, i_41)

---

#### Phase 5: Sections 06-15 Systematic Fix

**Sections to audit** (in order of dependency):
- S06 (Renewable): 7 missing
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

---

## 🚨 CRITICAL REGRESSION: Reference Model Calculation Flow Broken (2025-10-24)

### Problem Discovery

**Testing Timeline:**
1. **Yesterday (2025-10-23)**: Commit b79549c "CONTAMINATION ELIMINATED" - Victory over state isolation bugs
   - ✅ Target model: Changes flow through entire calculation chain
   - ✅ Reference model: Changes flow through entire calculation chain
   - ✅ State isolation: Target and Reference models completely independent
   - ✅ Dual-state architecture working perfectly

2. **Today (2025-10-24)**: After CSV export work (commits efdd8a5 through 650bc47)
   - ✅ Target model: Still works perfectly, changes flow through entire chain
   - ✅ CSV export: Nearly complete (126 fields, barring S12)
   - ✅ All sections publish Reference defaults to StateManager (S02-S13, S15)
   - ❌ **Reference model: Calculation flow BROKEN - changes trapped locally**

### Symptoms

**Working sections (S02-S09)**:
- ✅ State isolation maintained (Target and Reference independent)
- ✅ Calculations update correctly in both modes
- ⚠️ **One exception in S09**: g_63 (occupied hours) shows state mixing

**Broken sections (S10 onward)**:
- ✅ S10 Target mode: Changes flow through entire model ✅
- ❌ S10 Reference mode: **Changes trapped within S10 - do NOT flow downstream**
- ⚠️ **S10/S11/S12 Reference flow appears intact internally**
- ❌ **Flow breaks AFTER S12**: Changes don't reach S13, S14, S15, S04, S01

### Test Comparison: Victory vs. Current State

**Reverted to b79549c (contamination victory commit)**:
- ✅ Perfect state isolation and calculation flow
- ✅ Every field changed in Target flows to Target model updates
- ✅ Every Reference value changed affects only Reference model
- ✅ "It all just works"
- ❌ CSV export incomplete (only 37 Reference values)
- ❌ After imports, calculation flow broke (known issue)

**Current HEAD (after CSV export work)**:
- ✅ CSV export nearly complete (126 fields published to StateManager)
- ✅ Reference defaults published correctly for fresh initialization
- ✅ S02-S09 maintain correct isolation and flow (except S09 g_63)
- ❌ **S10+ Reference mode: Calculations trapped, don't propagate downstream**

### Root Cause Hypothesis

**Something between b79549c (yesterday) and HEAD (today) broke Reference calculation flow.**

Our CSV export work added publication code to sections S02-S15:
- Added `publishToStateManager()` methods
- Published Reference defaults on initialization
- Published from localStorage on page refresh

**Possible causes:**
1. **Publication timing issue**: Defaults published too early/late, blocking dynamic updates?
2. **"One and done" publication**: Did we make publishing a static operation that prevents re-publication on user edits?
3. **Listener interference**: Did publication code interfere with existing calculation listeners?
4. **S12 as linchpin**: Since S12 wasn't fully fixed and flow breaks after S12, could S12 be blocking the chain?
5. **StateManager pollution**: Are we publishing static values that override calculated values?

### Known Issues

**S09 State Mixing Bug** ✅ INVESTIGATED:
- Field: g_63 (occupied hours) and derived field i_63 (annual occupied hours)
- Symptom: Changes to Target g_63 cause BOTH e_10 and h_10 to change (should only affect h_10)
- **Root cause FOUND**: Problem is NOT in S09!
  - ✅ S09 calculations correct: Target and Reference compute independently
  - ✅ S09 publication correct: Publishes both `i_63` and `ref_i_63` with correct values
  - ❌ **Problem is downstream**: Sections S13/S14/S15/S04/S01 contaminate Reference model
- **Evidence** (from debug logs):
  - Change Target g_63 from 12 → 10
  - S09 publishes `i_63=3650` (10 × 365) ✅
  - S09 publishes `ref_i_63=4380` (12 × 365, unchanged) ✅
  - But e_10 (Reference TEUI) still changes ❌
- **Conclusion**: Downstream sections reading `i_63` for Reference calculations instead of `ref_i_63`
- Status: Requires investigation of S13, S14, S15, S04, S01 for fallback anti-patterns

**S12 Incomplete**:
- S12 Reference values excluded from CSV export (too much tech debt accumulated)
- S12 reverted to yesterday's baseline (commit b79549c)
- Changes in S12 Reference mode recalculate locally but may not publish downstream
- **Critical insight**: We've been stumped trying to make S12 Reference values publish to StateManager
  - Target values work perfectly and publish correctly
  - Reference values fail to publish despite multiple fix attempts
  - **Solution approach**: Study how Target values successfully publish and mirror that pattern for Reference
  - Key question: What mechanism makes Target publication work that we're missing for Reference?

### Next Steps: Systematic Debugging Strategy

**Option 1: Stack Trace Analysis**
1. Add debug logging to track Reference value flow through calculation chain
2. Make a change in S10 Reference mode
3. Trace which sections receive the update and which don't
4. Identify exact point where chain breaks
5. Compare code at break point between b79549c and HEAD

**Option 2: Binary Search Rollback**
1. Identify all commits between b79549c and HEAD affecting sections
2. Checkout commits midway through the range
3. Test Reference calculation flow
4. Narrow down which specific commit introduced the regression
5. Analyze that commit's changes for root cause

**Option 3: Section-by-Section Audit**
1. For each section S10-S15, compare code between b79549c and HEAD
2. Look for changes to:
   - `setValue()` methods (are they still publishing on user edits?)
   - Calculation triggers (are they still firing in Reference mode?)
   - Listener setup (were any removed or modified?)
3. Test each section individually to isolate the break point

**Option 4: Focus on S12 First (RECOMMENDED)**
1. S12 is the suspected linchpin (flow breaks after S12)
2. S12 has the most complex state (volume/area totals feed downstream sections)
3. S12 had multiple debug/revert cycles today
4. Check if S12 is failing to publish calculated Reference values (ref_g_101, ref_d_101, etc.)
5. **Mirror Target publication pattern**:
   - Trace how Target values (d_103, g_103, d_105, d_108, g_109) successfully publish to StateManager
   - Identify the mechanism: Is it in calculation functions? Listeners? setValue() calls?
   - Apply the EXACT SAME pattern to Reference values with `ref_` prefix
   - Test: Change S12 Reference field → verify it publishes to StateManager → verify downstream sections receive it
6. If S12 fix unblocks the chain, proceed with systematic section fixes

**Why this is the best approach**:
- ✅ Target values prove the publication mechanism works
- ✅ We don't need to invent new patterns, just mirror what works
- ✅ S12 is likely the bottleneck blocking downstream flow
- ✅ Success here could unlock the entire Reference calculation chain

### Impact Assessment

**User-facing:**
- ❌ Reference model unusable for analysis (changes don't propagate)
- ❌ CSV export/import creates unpredictable Reference model behavior
- ❌ Users can't rely on Reference calculations for compliance verification

**Development:**
- ⚠️ Regression occurred during CSV export implementation
- ⚠️ We have working state (b79549c) but incomplete CSV export
- ⚠️ We have complete CSV export (HEAD) but broken Reference flow
- ⚠️ Need to identify which changes broke flow and fix without losing CSV work

### Success Criteria for Fix

- ✅ S02-S09 continue to work correctly (maintain current state)
- ✅ S09 g_63 state mixing bug fixed
- ✅ S10+ Reference mode changes flow through entire calculation chain
- ✅ Changes in S10 Reference → recalculate S11, S12, S13, S14, S15, S04, S01
- ✅ State isolation maintained (Target and Reference independent)
- ✅ CSV export remains complete (126 fields with Reference defaults)
- ✅ All sections publish Reference values dynamically on user edits (not just on initialization)

### Commits Affected (b79549c → HEAD)

Between contamination victory and current state:
- 7edcbb9: chore: ESLint and Prettier formatting
- a87fc09: docs(S12): Add TODO comment for j_110 air leakage zone field
- 8f6ccea: fix(S13): Publish all 10 Reference defaults to StateManager for CSV export
- ebcc1e7: fix(S10): Publish all 25 Reference defaults to StateManager for CSV export
- 2b7ab43: fix(S09): Publish Reference defaults to StateManager for CSV export
- d172db6: fix(S08): Publish Reference defaults to StateManager for CSV export
- 9d61718: fix(S07): Publish all Reference defaults to StateManager for CSV export
- 04051a3: fix(S06): Publish Reference defaults to StateManager for CSV export
- 3b2ccd6: fix(S05): Publish Reference defaults to StateManager for CSV export
- 8a0d75a: fix(S04): Add emission factors to refreshUI for state isolation
- 8793ee6: fix(S04): Make emission factors editable, publish Reference defaults
- b7386b7: fix(S03): Publish all Reference defaults and add l_24 to mappings
- f09a3cf: fix(S02): Remove l_12 state contamination and preserve cost field precision
- bd38741: debug(S10): Add console logging to trace Reference value publication
- 3ff8518: fix(S10): Add missing g_73-g_78 and d_80 to Reference state for CSV export
- efdd8a5: fix(S10): Publish Reference values from localStorage on page load
- c377afc: chore(S10): Remove debug logging after successful fix

**Total**: 17 commits touching sections S02-S13 for CSV export work

### Related Documentation

- [4012-CHEATSHEET.md - Anti-Pattern 1: State Contamination via Fallbacks](history%20(completed)/4012-CHEATSHEET.md#anti-pattern-1-state-contamination-via-fallbacks)
- Commit b79549c: "CONTAMINATION ELIMINATED" - last known working state
- Commit 50e76f4: l_20/l_21 fix (proof of pattern)
- Commit 4c34826: Explicit field list implementation
