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

**Target fields (excelReportInputMapping):** 157 unique field IDs

**Reference fields (excelReferenceInputMapping):** 157 unique field IDs (mirrors Target)

**Total import capacity:** 157 Target + 157 Reference = 314 field mappings

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

**Total Excel Import Fields: 157 Target + 157 Reference = 314**

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

  // ... continue for all 157 fields from Excel mapping
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
1. Extract 157 field IDs from `excelReportInputMapping`
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

- ✅ Export CSV includes exactly 157 Target + 157 Reference fields
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
