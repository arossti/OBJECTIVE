# Excel Mapper Refactor - Weather Data Simplification

## Overview

Simplify the import/export system by retiring the separate ExcelLocationHandler and integrating weather location selection into the standard field mapping system. S03 Climate module now handles its own weather data queries via ClimateValues.js.

## Current State (Before Refactor)

- ExcelLocationHandler.js manages separate weather Excel file imports
- "Load Locations" button in index.html triggers weather file selection
- Weather data (HDD, CDD, temperatures, etc.) imported from CANADA sheet
- Complex province/city dropdown population logic
- FileHandler.js coordinates between ExcelMapper and ExcelLocationHandler

## Target State (After Refactor)

- Single unified import from user's Excel REPORT and REFERENCE sheets
- Weather location fields (d_19 province, h_19 city) mapped like any other field
- ClimateValues.js handles all weather data derivation internally
- ExcelLocationHandler.js retired (kept in archive if needed)
- "Load Locations" button removed from index.html
- Export includes both Target (REPORT) and Reference values in multi-row format

## Excel Field Mappings to Add/Update

### Section 03 Weather Fields (REPORT sheet)

- `D19` → `d_19` - Province dropdown (e.g., "BC", "ON", "AB")
- `H19` → `h_19` - City dropdown (e.g., "Vancouver", "Toronto")
- `H20` → `h_20` - Current/Future Weather toggle dropdown (already mapped)
- `H21` → `h_21` - Capacitance/Static toggle dropdown (already mapped)
- `I21` → `i_21` - Slider position for capacitance value (NEW)

### Remove from Mapping

- All NBC-2025-C2 sheet references (a-5 through a-683 climate data cells)
- ExcelLocationHandler specific cell mappings

## Import Architecture

### Phase 1: Update ExcelMapper.js

1. Add missing S03 location fields to `excelReportInputMapping`
2. Create new `excelReferenceInputMapping` (mirrors REPORT but for REFERENCE sheet)
3. Add `mapExcelToReferenceModel(workbook)` method
4. Ensure proper normalization for province/city string values

### Phase 2: Update FileHandler.js

1. Add method `processImportedExcelReference(workbook)`
2. Import REFERENCE data with ref\_ prefix for StateManager
3. Call both REPORT and REFERENCE import in sequence
4. Remove ExcelLocationHandler initialization and event listeners
5. Remove location-excel-input file handler (lines 55-160)

### Phase 3: Remove ExcelLocationHandler

1. Move to documentation/history (completed)/ folder
2. Remove script tag from index.html
3. Remove "Load Locations" button and location-excel-input from index.html

### Phase 4: Update Export Structure

Current: Single row of field names, single row of values
Target: Multi-row format

```
Row 1: Field IDs (d_12, d_13, h_15, ...)
Row 2: Target/Application values
Row 3: Reference values (ref_d_12, ref_d_13, ref_h_15, ...)
Row 4+: [Future] OBC Matrix placeholder
```

## Implementation Steps

### Step 1: Create MAPPER.md Workplan ✓

Document the refactor strategy

### Step 2: Note Last Good Commit ✓

**Baseline Commit:** 5a86eb1 "Document Bug #11 investigation and defer - 5 bugs squashed today!"

### Step 3: Update ExcelMapper.js ✓

- ✓ Add d_19, h_19, i_21 to excelReportInputMapping
- ✓ Create excelReferenceInputMapping object (all fields with ref\_ prefix)
- ✓ Add mapExcelToReferenceModel() method
- ✓ Add normalization logic for province/city values (mirrors REPORT normalization)

### Step 4: Update FileHandler.js ✓

- ✓ Add processImportedExcelReference() method
- ✓ Update processImportedExcel to import both REPORT and REFERENCE
- ✓ Remove ExcelLocationHandler event listeners and initialization (lines 55-160)
- ✓ Remove applyImportedData() method (redundant)
- ✓ Update updateStateFromImportData to support skipRecalculation parameter
- ✓ Update exportToCSV() to include reference values (3-row format)

### Step 5: Update index.html ✓

- ✓ Remove "Load Locations" button (selectExcelBtn)
- ✓ Remove location-excel-input hidden file input
- ✓ Comment out ExcelLocationHandler script tag with explanation

### Step 6: Archive ExcelLocationHandler.js ✓

- ✓ Moved to documentation/history (completed)/ folder

### Step 7: Update exportToCSV()

- Add reference value row (row 3)
- Add OBC placeholder comment/structure (row 4+)
- Update filename to reflect multi-state export

## Testing Checklist

- [ ] Import Excel file with REPORT sheet populates all Target fields
- [ ] Import Excel file with REFERENCE sheet populates all ref\_ fields
- [ ] Province/city values correctly populate S03 dropdowns
- [ ] ClimateValues.js successfully derives weather data from d_19/h_19
- [ ] Export CSV contains 3 rows (headers, target values, reference values)
- [ ] Re-import exported CSV restores both Target and Reference states
- [ ] No console errors related to ExcelLocationHandler
- [ ] All S03 calculations work without external weather file

## Files Modified

- `4011-ExcelMapper.js` - Add reference mapping, update REPORT mapping
- `4011-FileHandler.js` - Add reference import, remove location handler code
- `index.html` - Remove location button and file input
- `documentation/history (completed)/4011-ExcelLocationHandler.js` - Archive

## Files Removed

- None (ExcelLocationHandler archived, not deleted)

## Backwards Compatibility

- Old Excel files with REPORT sheet: ✓ Compatible
- Old Excel files with REFERENCE sheet: ✓ Compatible
- Old weather data Excel files: ⚠️ No longer needed/supported
- Users can still use province/city dropdowns manually if Excel import fails

## Risk Assessment

- **Low Risk**: Weather location fields are simple dropdown values
- **Low Risk**: Reference import mirrors existing REPORT import logic
- **Medium Risk**: Export format change may affect downstream tools
- **Mitigation**: Keep old exportToExcel() method as fallback

## Success Criteria

1. User imports Excel file with single click (Import Data button)
2. Both Target and Reference states populated from single file
3. S03 weather data auto-populates from d_19/h_19 values
4. Export CSV can be re-imported to restore full application state
5. No dependency on external weather Excel files
6. Cleaner, simpler codebase with fewer modules

## Timeline

- Documentation: 10 min
- ExcelMapper updates: 20 min
- FileHandler updates: 20 min
- index.html updates: 5 min
- Testing: 30 min
- **Total: ~1.5 hours**

## Notes

- ClimateValues.js must have complete city/province coverage for this to work
- If ClimateValues.js missing a location, user sees error and can enter manually
- ExcelLocationHandler kept in archive for reference if needed later
- Future: Consider JSON import/export as more flexible alternative to CSV

---

## IMPLEMENTATION COMPLETE

### Changes Summary

All planned changes have been successfully implemented:

1. **ExcelMapper.js**: Added location fields (d*19, h_19, i_21) to REPORT mapping, created complete REFERENCE sheet mapping with ref* prefix, added mapExcelToReferenceModel() method with full normalization logic.

2. **FileHandler.js**: Added processImportedExcelReference() method, updated import workflow to handle both REPORT and REFERENCE sheets sequentially, removed all ExcelLocationHandler dependencies (~105 lines), updated export to 3-row format (headers, target values, reference values).

3. **index.html**: Removed "Load Locations" button, removed location-excel-input file input, commented out ExcelLocationHandler.js script tag.

4. **ExcelLocationHandler.js**: Archived to `documentation/history (completed)/` folder.

### New Import Workflow

1. User clicks "Import Data" → selects Excel file
2. FileHandler reads REPORT sheet → maps to target fields (d_12, d_13, etc.)
3. FileHandler reads REFERENCE sheet → maps to ref\_ fields (ref_d_12, ref_d_13, etc.)
4. Province (d_19) and City (h_19) trigger ClimateValues.js to populate weather data
5. Calculator.calculateAll() runs once after both imports complete

### New Export Format

```csv
d_12,d_13,h_15,h_19,d_19,...        ← Field IDs (headers)
A-Assembly,NECB-2017,1427.2,...     ← Target/Application values
C-Business,NECB-2020,2000.0,...     ← Reference values
[Future: OBC Matrix data rows]      ← Placeholder for future export
```

### Testing Ready

User can now:

- [ ] Import Excel file with REPORT sheet to populate Target fields
- [ ] Import Excel file with REFERENCE sheet to populate Reference fields
- [ ] Verify province/city values populate S03 dropdowns correctly
- [ ] Export CSV and verify 3-row format (headers + target + reference)
- [ ] Re-import exported CSV to restore full state

### Files Modified

- `4011-ExcelMapper.js` (+168 lines)
- `4011-FileHandler.js` (+45 lines, -125 lines removed)
- `index.html` (-7 lines)
- `documentation/history (completed)/4011-ExcelLocationHandler.js` (archived)

**Baseline Commit:** 5a86eb1  
**Ready for Testing:** YES  
**Breaking Changes:** ExcelLocationHandler API removed (weather now via ClimateValues.js)
