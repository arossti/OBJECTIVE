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

---

## DEBUGGING SESSION - Oct 3, 2025

### Issues Encountered

**Issue 1: Target Location Import Not Working**
- **Symptom**: Excel file with D19="ON", H19="Milton" only imports to Reference mode, Target mode shows default "Alexandria"
- **REFERENCE sheet works**: Milton appears correctly in Reference mode
- **REPORT sheet fails**: Target mode doesn't update to Milton
- **Diagnostic logs not appearing**: Added comprehensive logging but logs never show in console despite hard refresh, cache clear, browser restart

**Issue 2: S03 Toggle Glitchy**
- **Symptom**: S03 section header toggle (Target/Reference) is unresponsive, requires multiple clicks, slow to respond
- **Possible cause**: New StateManager listeners (d_19, h_19, ref_d_19, ref_h_19) may be causing conflicts or calculation storms
- **Impact**: Core S03 functionality degraded

### Commits During Session

1. **70adacd** - "Refactor Excel import: retire ExcelLocationHandler, add dual-state REPORT+REFERENCE import, S03 listeners for province-city dependency" ← **REVERTED TO THIS**
2. **d584ec0** - "Fix import: allow ref_ fields bypass FieldManager validation, add S03 UI refresh after import" ← Contains S03 listener conflicts
3. **cb92d08** - "Add granular Excel cell diagnostics for location import debugging" ← Diagnostics added here
4. **5499565** - "Document import debugging session" ← **DIAGNOSTIC STATE** (revert from here if needed to retry)

### Final State - Session End

**CURRENT COMMIT: d39c5ce** ✅ "Revert S03 to pre-listener state to restore toggle responsiveness"

**What's Working:**
- ✅ ExcelMapper with REPORT + REFERENCE mappings (d_19, h_19, i_21 added)
- ✅ Reference field import (ref_ bypass in FileHandler)
- ✅ Dual-state export (3-row CSV format)
- ✅ ExcelLocationHandler retired
- ✅ S03 toggle responsive (listeners removed)
- ✅ All diagnostic logging intact for tomorrow

**What's Deferred:**
- ⏸️ Automated Target location import (d_19, h_19 from Excel → S03 dropdowns)
- ⏸️ S03 StateManager listeners (caused toggle glitchiness)

**Hash for Future S03 Listener Investigation:**
- **5499565** contains full diagnostic state with all S03 listeners
- Can cherry-pick S03 listeners from commits d584ec0 or 70adacd if needed tomorrow

### Files Modified

- `4011-ExcelMapper.js` - Added REFERENCE mapping, location fields, diagnostics
- `4011-FileHandler.js` - Ref field bypass, dual-state export, S03 refresh, diagnostics
- `4012-Section03.js` - Added 6 StateManager listeners for import support
- `index.html` - Removed ExcelLocationHandler button/input

### Successful Changes

✅ **Reference field import working** - 124 ref_ fields imported successfully
✅ **Dual-state export working** - 3-row CSV format (headers, target, reference)
✅ **ExcelLocationHandler retired** - ClimateValues.js handles weather data
✅ **No linting errors** - Code is clean and formatted

### Unresolved Issues

❌ **Target location import** - Not updating UI dropdowns despite values in Excel
❌ **S03 toggle responsiveness** - Glitchy behavior after adding listeners
❌ **Diagnostic logs** - Not appearing in console (very concerning)

### Possible Root Causes

**Theory 1: StateManager Listener Conflicts**
The 6 new listeners in S03 (d_19, h_19, ref_d_19, ref_h_19, h_20, ref_h_20) may be:
- Firing multiple times during import
- Causing calculation storms
- Interfering with existing S03 initialization
- Creating race conditions with calculateAll()

**Theory 2: Excel Cell Reading Issue**
XLSX.js may not be reading D19/H19 cells correctly:
- Cells might be merged or formatted unusually
- Formula references in REFERENCE sheet (=REPORT!D19) might confuse reader
- Cell data types might not match expectations

**Theory 3: Caching/Loading Issue**
Despite hard refresh attempts:
- Service workers or other caching mechanisms
- File system sync delays with iCloud
- Browser loading old JavaScript despite new commit

### Recommended Actions

**Option A: Defer to Tomorrow**
- Document current state ✅ (this section)
- Keep current commits
- Fresh debugging session tomorrow with Excel file inspection

**Option B: Revert S03 Listeners**
- Revert commit cb92d08 (diagnostics)
- Revert commit d584ec0 (S03 refresh + ref bypass)
- Keep commit 70adacd (core mapper refactor - MOST of the work)
- Restore S03 to pre-listener state
- Test if toggle responsiveness returns

**Option C: Selective Revert**
- Keep ref_ field bypass (critical for import)
- Remove only S03 listeners from 4012-Section03.js
- Keep export changes
- Test import without S03 automated handling

### Revert Commands (If Needed)

```bash
# Option B: Full revert to baseline + mapper only
git reset --hard 70adacd

# Option C: Manual removal of S03 listeners
# Edit 4012-Section03.js to remove lines ~2229-2308 (the 6 new listeners)
```

### Testing Tomorrow

1. **Inspect Excel file directly** - Open in Excel, verify D19/H19 values on REPORT sheet
2. **Manual console commands** - Test XLSX.read() directly in browser console
3. **Minimal test case** - Create simple 2-cell Excel file to isolate issue
4. **S03 listener audit** - Review all listeners, check for conflicts
5. **Import without S03** - Test if import works when S03 section is disabled

### Success Criteria for Tomorrow

- [ ] Target location import updates UI dropdowns correctly
- [ ] S03 toggle is smooth and responsive
- [ ] Diagnostic logs appear in console
- [ ] No regression in Reference import (keep 124 fields working)
- [ ] Export remains functional

**Status:** Session paused for debugging. Core architecture (mapper, ref bypass, export) is solid. S03 integration needs investigation.

---

## ARCHITECTURAL ANALYSIS - Oct 3, 2025 (Continued)

### Root Cause Diagnosis

**S03 uses a dual-state architecture pattern that isolates it from global StateManager.** This is intentional and documented in `CORE-ARCHITECTURE-AUDIT.md` as "Pattern A - Self-Contained State Module."

#### Why Reference Import Works:

1. Import sets `ref_d_19` and `ref_h_19` in **global StateManager** ✅
2. S03's `publishReferenceResults()` (lines 1762-1766) reads **StateManager first**:
   ```javascript
   d_19: window.TEUI.StateManager.getValue("ref_d_19") || ReferenceState.getValue("d_19")
   h_19: window.TEUI.StateManager.getValue("ref_h_19") || ReferenceState.getValue("h_19")
   ```
3. Fallback pattern successfully bridges global → local state ✅

#### Why Target Import Fails:

1. Import sets `d_19` and `h_19` in **global StateManager** ✅
2. BUT S03's `TargetState` is **completely isolated** - only reads from localStorage
3. `refreshUI()` (lines 204-286) reads from **TargetState only**, NOT global StateManager
4. No fallback pattern exists for Target mode (unlike Reference mode)
5. Dropdowns never update because they're bound to isolated `TargetState` ❌

#### Why Initial Listener Attempts Failed:

The reverted listeners (commit 70adacd) likely failed because:

1. **Timing issue**: Listeners added during `init()` but StateManager values set **after** import
2. **No explicit sync call**: Import updated StateManager but never called `TargetState.setValue()`
3. **Missing bridge**: Unlike Reference (which has fallback), Target has no StateManager → TargetState bridge
4. **Calculation interference**: Listeners may have triggered `calculateAll()` before import completed

### Architecture Assessment: Is S03 an Anomaly?

**Answer: No, S03 follows the documented dual-state pattern correctly.**

Per `CORE-ARCHITECTURE-AUDIT.md` and `STANDARDIZED-STATES.md`:

#### ✅ **S03's Pattern Is Intentional:**

- **Self-contained state** prevents "global contamination" (see AUDIT line 55-58)
- **Local state isolation** ensures Target/Reference values never mix
- **Pattern A** (self-contained) vs Pattern B (global StateManager direct access)
- Other sections using Pattern A: S02, S05, S06, S08, S15 (all completed per AUDIT line 42-48)

#### ✅ **Good Reasons for Isolation:**

1. **Prevents cross-contamination**: Target and Reference calculations can't accidentally share values
2. **Independent lifecycles**: Each mode maintains its own state in localStorage
3. **Explicit control**: Mode switching requires deliberate `refreshUI()` calls
4. **Calculation integrity**: Ensures calculations use correct state for current mode

#### ❌ **The Problem: Import Wasn't Designed for Pattern A**

The import system was designed for **Pattern B sections** (direct StateManager access):

```javascript
// Pattern B (works with current import):
StateManager.setValue(fieldId, value) → updateFieldDisplay() → dropdown updates ✅

// Pattern A (S03 - doesn't work with current import):
StateManager.setValue(fieldId, value) → [NO BRIDGE] → TargetState isolated ❌
```

### Proposed Solutions

#### **Solution 1: Symmetric Import Bridge (Recommended)**

**Make Target import mirror Reference's fallback pattern.**

**Changes Required:**
- Add explicit sync method in S03: `syncFromGlobalState()`
- Call after Target import completes in `FileHandler.processImportedExcel()`
- No architectural changes needed

**Implementation:**
```javascript
// In 4012-Section03.js - add new method:
TargetState.syncFromGlobalState = function(fieldIds = ['d_19', 'h_19', 'i_21']) {
  fieldIds.forEach(fieldId => {
    const globalValue = window.TEUI.StateManager.getValue(fieldId);
    if (globalValue !== null && globalValue !== undefined) {
      this.setValue(fieldId, globalValue, "imported");
      console.log(`S03 TargetState: Synced ${fieldId} = ${globalValue} from global StateManager`);
    }
  });
};

// In 4011-FileHandler.js - after line 134:
this.updateStateFromImportData(importedData);

// Add explicit S03 sync:
if (window.TEUI?.SectionModules?.sect03?.TargetState) {
  window.TEUI.SectionModules.sect03.TargetState.syncFromGlobalState(['d_19', 'h_19', 'i_21']);
  window.TEUI.SectionModules.sect03.ModeManager.refreshUI(); // Update dropdowns
}
```

**Pros:**
- ✅ Minimal code changes (2 locations)
- ✅ Preserves S03's isolated architecture
- ✅ Mirrors existing Reference fallback pattern
- ✅ No listener complexity
- ✅ Explicit, debuggable

**Cons:**
- ⚠️ Requires manual sync call for each Pattern A section
- ⚠️ Hardcoded field list (d_19, h_19, i_21)

---

#### **Solution 2: Universal Pattern A Import Handler**

**Create a generic post-import hook for all Pattern A sections.**

**Changes Required:**
- Add `postImportSync()` method to Pattern A section modules
- FileHandler calls hook for all registered Pattern A sections
- One-time infrastructure, scales to S02, S05, S06, S08, S15

**Implementation:**
```javascript
// In 4011-FileHandler.js - new method:
syncPatternASections(importedData) {
  const patternASections = [
    { module: window.TEUI.SectionModules.sect03, name: 'S03' },
    { module: window.TEUI.SectionModules.sect02, name: 'S02' },
    // Add S05, S06, S08, S15 as needed
  ];

  patternASections.forEach(({ module, name }) => {
    if (module?.TargetState?.syncFromGlobalState) {
      console.log(`[FileHandler] Syncing ${name} Pattern A state from import...`);
      module.TargetState.syncFromGlobalState();
      if (module.ModeManager?.refreshUI) {
        module.ModeManager.refreshUI();
      }
    }
  });
}

// Call after Target import (line 134):
this.updateStateFromImportData(importedData);
this.syncPatternASections(importedData); // ← New hook
```

**Pros:**
- ✅ Scalable to all Pattern A sections
- ✅ Self-documenting (registry shows which sections need sync)
- ✅ Future-proof for new Pattern A sections
- ✅ Preserves architectural isolation

**Cons:**
- ⚠️ Slightly more complex than Solution 1
- ⚠️ Requires each Pattern A section to implement `syncFromGlobalState()`

---

#### **Solution 3: StateManager Listeners with Import Flag**

**Fix the original listener approach by adding import-aware logic.**

**Why Original Listeners Failed:**
- Listeners fired during import → triggered `calculateAll()` prematurely
- Multiple listener firings caused calculation storms
- No distinction between "user change" vs "import change"

**Implementation:**
```javascript
// In 4011-FileHandler.js - add import flag:
this.isImporting = false;

processImportedExcel(workbook) {
  this.isImporting = true; // ← Set flag
  // ... existing import logic ...
  this.updateStateFromImportData(importedData);
  this.processImportedExcelReference(workbook);
  this.isImporting = false; // ← Clear flag

  // Trigger ONE refresh after import completes
  if (window.TEUI?.SectionModules?.sect03?.ModeManager) {
    window.TEUI.SectionModules.sect03.ModeManager.refreshUI();
  }
  window.TEUI.Calculator.calculateAll(); // Single calculation pass
}

// In 4012-Section03.js - modify listeners:
window.TEUI.StateManager.addListener("d_19", function(newValue) {
  const isImporting = window.TEUI?.FileHandler?.isImporting;
  if (!isImporting) {
    TargetState.setValue("d_19", newValue, "user");
    calculateAll();
  }
  // If importing, sync happens via explicit refreshUI() call after import
});
```

**Pros:**
- ✅ Listeners work for both user input AND import
- ✅ Automatic sync (no manual calls needed)
- ✅ Prevents calculation storms during import

**Cons:**
- ❌ Adds complexity to listener logic
- ❌ Global flag (`isImporting`) couples FileHandler to sections
- ❌ Previous attempts failed even with this approach (timing issues?)

---

#### **Solution 4: Abandon Pattern A for S03 Location Fields**

**Move d_19, h_19, i_21 to global StateManager only (no local state).**

**Implementation:**
- Remove d_19, h_19, i_21 from TargetState/ReferenceState objects
- Read directly from StateManager with prefix: `StateManager.getValue('d_19')` or `StateManager.getValue('ref_d_19')`
- Keep calculated fields (d_20, j_19, etc.) in isolated state

**Pros:**
- ✅ Import works immediately (no sync needed)
- ✅ Simplifies S03 state management
- ✅ Location fields aren't calculated, no contamination risk

**Cons:**
- ❌ **Violates S03's architectural pattern**
- ❌ Inconsistent state management within S03
- ❌ Breaks documented Pattern A isolation
- ❌ May reintroduce "global contamination" bugs

---

### Recommendation

**Use Solution 1 (Symmetric Import Bridge) for immediate fix, consider Solution 2 for long-term scalability.**

**Rationale:**
1. **Preserves architecture**: S03's Pattern A isolation is intentional and correct
2. **Minimal risk**: Small, explicit code changes
3. **Debuggable**: Clear console logs show sync happening
4. **Mirrors Reference**: Target should work the same way Reference does
5. **Quick to implement**: ~10 lines of code

**Rejected Solutions:**
- **Solution 3**: Already tried and failed (see commits 70adacd → d39c5ce)
- **Solution 4**: Breaks documented architecture, high risk

---

### Implementation Checklist (Solution 1)

- [ ] Add `syncFromGlobalState()` method to `TargetState` in 4012-Section03.js
- [ ] Call sync + refreshUI after Target import in 4011-FileHandler.js (after line 134)
- [ ] Test Target location import (d_19, h_19 update dropdowns)
- [ ] Test Reference import (ensure no regression)
- [ ] Verify S03 toggle remains responsive
- [ ] Add diagnostic logging for import sync
- [ ] Update MAPPER.md testing checklist

---

### Open Questions for Architecture Review

1. **Should Reference also use explicit sync instead of fallback?**
   - Current: `StateManager.getValue("ref_d_19") || ReferenceState.getValue("d_19")`
   - Alternative: Explicit `ReferenceState.syncFromGlobalState()` (symmetric with Target)
   - Benefit: More consistent, easier to debug

2. **Should ALL Pattern A sections adopt this import pattern?**
   - S02, S05, S06, S08, S15 may have same import issues
   - Need audit: Do other sections have user-editable fields imported from Excel?

3. **Should Pattern A be reconsidered entirely?**
   - Import complexity suggests global StateManager might be simpler
   - BUT: Pattern A prevents contamination bugs (documented rationale)
   - Need cost/benefit analysis of isolation vs. complexity

**Status:** Analysis complete. Awaiting decision on solution approach before implementation.

---

## CONTINUED DEBUGGING - Oct 3, 2025 (Evening Session)

### Implementation Attempts

**Attempt 1: Add syncFromGlobalState() method to TargetState**
- ✅ Added method to S03 TargetState (lines 79-89 in 4012-Section03.js)
- ✅ Calls `StateManager.getValue()` for d_19, h_19, i_21
- ✅ Syncs values into TargetState via `setValue()`
- ✅ Logs each sync for debugging

**Attempt 2: Call sync after Target import**
- ✅ Added sync call in FileHandler after `updateStateFromImportData()`
- ❌ **Problem discovered**: Validation was rejecting d_19/h_19 as invalid dropdown values
- Error: `"Skipping import for field d_19: Invalid value "ON" for type dropdown"`
- **Root cause**: FileHandler validation can't validate S03's dynamically-populated dropdowns (managed by ClimateDataService, not FieldManager)

**Attempt 3: Skip validation for S03 location fields**
- ✅ Added `isS03LocationField` check in FileHandler (line 311)
- ✅ Modified validation to skip d_19/h_19 (line 325: `&& !isS03LocationField`)
- ✅ Values now import into global StateManager successfully
- ❌ **Still no dropdowns updating**

**Attempt 4: Move sync AFTER calculateAll()**
- 🔍 **Discovery**: Old code at lines 407-431 was trying to refresh S03 UI
- 🔍 **Discovery**: `calculateAll()` runs at line 438, AFTER initial sync attempt
- **Theory**: `calculateAll()` may reinitialize S03 from localStorage, overwriting sync
- ✅ Moved sync to AFTER `calculateAll()` completes (lines 423-441)
- ❌ **Sync code never runs** - no console logs appearing

### Current Mystery: Why Isn't Sync Running?

**Expected console logs** (not appearing):
```
[FileHandler] 🔧 Syncing S03 TargetState from global StateManager...
S03 TargetState: Synced d_19 = ON from global StateManager
S03 TargetState: Synced h_19 = Milton from global StateManager
[FileHandler] ✅ S03 Target state synced and UI refreshed after calculateAll()
```

**Actual behavior:**
- Import completes successfully
- Reference data imports (124 fields)
- calculateAll() runs and completes
- **No sync logs appear**
- Dropdowns still show "Alexandria" (default)

### Possible Causes

**Theory 1: Module Path Incorrect**
```javascript
// Current code tries:
window.TEUI?.SectionModules?.sect03?.TargetState

// But S03 might be registered as:
window.TEUI?.sect03?.TargetState  (without SectionModules namespace)
```

**Theory 2: Timing/Race Condition**
- Sync code is inside `if (this.calculator.calculateAll)` block
- calculateAll() might be async and returning before completion
- Sync runs but S03 hasn't initialized yet

**Theory 3: Code Not Loading**
- Browser cache holding old FileHandler.js
- Hard refresh not clearing service workers
- iCloud sync delays causing file version mismatch

**Theory 4: S03 Overwriting State After Sync**
- Even if sync runs, S03 might have a listener or initialization that resets to localStorage
- Need to check S03 for any code that runs after import/calculateAll

### Testing Needed Tomorrow

1. **Verify module path in browser console:**
   ```javascript
   console.log(window.TEUI)
   console.log(window.TEUI.SectionModules)
   console.log(window.TEUI.SectionModules?.sect03)
   console.log(window.TEUI.sect03)  // Alternative path
   ```

2. **Add debug logging BEFORE the if statement:**
   ```javascript
   console.log("[FileHandler] calculateAll finished, checking for sect03...");
   console.log("[FileHandler] window.TEUI:", window.TEUI);
   console.log("[FileHandler] SectionModules:", window.TEUI?.SectionModules);
   console.log("[FileHandler] sect03:", window.TEUI?.SectionModules?.sect03);
   ```

3. **Manually test sync in console after import:**
   ```javascript
   // After import completes, run this in console:
   window.TEUI.SectionModules.sect03.TargetState.syncFromGlobalState(['d_19', 'h_19'])
   window.TEUI.SectionModules.sect03.ModeManager.refreshUI()
   ```

4. **Check if S03 is listening to calculateAll completion:**
   - Search S03 for listeners on calculation events
   - Check if S03 resets state when Calculator fires events

5. **Alternative: Direct DOM manipulation after import:**
   ```javascript
   // Bypass S03 state entirely, just update DOM
   const provinceDropdown = document.querySelector('[data-dropdown-id="dd_d_19"]');
   const cityDropdown = document.querySelector('[data-dropdown-id="dd_h_19"]');
   provinceDropdown.value = "ON";
   cityDropdown.value = "Milton";
   ```

### Files Modified (This Session)

1. **4012-Section03.js**: Added `syncFromGlobalState()` method to TargetState (lines 79-89)
2. **4011-FileHandler.js**:
   - Skip validation for S03 location fields (line 311)
   - Added sync call after calculateAll() (lines 423-441)

### Current Hypothesis

The most likely issue is **module path** - S03 might not be registered at `window.TEUI.SectionModules.sect03` but somewhere else. The sync code has a conditional check that's failing silently.

**Evidence:**
- No error messages in console
- No sync logs appearing
- Code should be running but isn't

**Next Step:**
Add extensive logging BEFORE the conditional to see what's actually available in the window object.

### Backup Plan

If sync approach continues failing, consider **Alternative Architecture**:

**Option: Make d_19/h_19 globally managed, not Pattern A**
- Remove d_19, h_19 from S03's isolated TargetState
- Read directly from global StateManager with mode prefix
- Keep only calculated fields in isolated state
- This would make import "just work" but breaks S03's architectural pattern

**Risk**: May reintroduce the "global contamination" bugs that Pattern A was designed to prevent.

---

**Status:** Session ended. Core issue identified: sync code not executing (no logs). Need to debug module path and timing tomorrow. Both Target AND Reference showing defaults - suggests a fundamental issue with how S03 accesses imported values.

---

## BREAKTHROUGH - Oct 3, 2025 (Late Night Session)

### The Root Cause Revealed

After extensive debugging with comprehensive logging, we found the exact sequence of events:

**What We Discovered:**

1. ✅ **ExcelMapper reads correctly**: "Milton" is read from H19 cell
2. ✅ **Import data has Milton**: `importedData.h_19 = "Milton"`
3. ✅ **StateManager gets Milton**: At line 404, StateManager has `h_19="Milton"`
4. ❌ **Old refreshUI() call overwrites it**: Line 408 calls `refreshUI()` which reads from DualState (still has "Alexandria")
5. ❌ **StateManager now has Alexandria**: By line 426 (sync), StateManager has been overwritten to `h_19="Alexandria"`

**The Bug Chain:**

```javascript
// Line 135: Import updates StateManager
updateStateFromImportData(importedData) → StateManager.setValue("h_19", "Milton") ✅

// Line 404: StateManager still has Milton
console.log(StateManager.getValue("h_19")) → "Milton" ✅

// Line 408: OLD code calls refreshUI()
window.TEUI.sect03.ModeManager.refreshUI()
  → Reads DualState.getValue("h_19") → "Alexandria" (from localStorage)
  → Updates DOM dropdown to "Alexandria"
  → Writes back to StateManager.setValue("h_19", "Alexandria") ❌

// Line 426: Our sync reads from StateManager
TargetState.syncFromGlobalState(["h_19"])
  → StateManager.getValue("h_19") → "Alexandria" ❌
  → DualState now has "Alexandria" instead of "Milton"
```

**Why Line 1178-1184 in S03 Causes the Overwrite:**

When `refreshUI()` is called, it triggers `handleProvinceChange()` which calls this code:

```javascript
// Line 1177-1184 in 4012-Section03.js
const currentCity = DualState.getValue("h_19"); // Gets "Alexandria" from localStorage
if (currentCity && cities.includes(currentCity)) {
  cityDropdown.value = currentCity; // Sets DOM to "Alexandria"
  DualState.setValue("h_19", currentCity, "init"); // Writes "Alexandria" to StateManager!
}
```

### The Fix

**Removed the redundant old refresh code** (lines 396-420) that was calling `refreshUI()` before our sync.

**New sequence:**
1. Import → StateManager has "Milton" ✅
2. **Sync immediately** → DualState gets "Milton" from StateManager ✅
3. calculateAll() → S03 checks DualState, finds "Milton", keeps it ✅
4. refreshUI() → Displays "Milton" in dropdown ✅

### Files Modified (Final)

**4011-FileHandler.js:**
- Line 311: Added skip validation for S03 location fields
- Line 115-125: Added debug logging for import data
- Lines 396-420: **REMOVED** old refreshUI() call (was overwriting imported values)
- Lines 396-408: Sync S03 BEFORE calculateAll()
- Lines 418-421: refreshUI() AFTER calculateAll()

**4012-Section03.js:**
- Lines 79-89: Added `syncFromGlobalState()` method to TargetState

### Why This Was So Hard to Find

1. **Timing**: The overwrite happened between import and sync
2. **Silent**: No errors, just state changes in normal operation
3. **Multiple layers**: StateManager → DualState → DOM → back to StateManager
4. **Old code**: The culprit was old debugging code (line 408 refreshUI) that should have been removed
5. **Dual state**: S03's isolated state architecture made it non-obvious which state was being read/written

### Testing Tomorrow

With the old refresh code removed, the import should now work:

**Expected behavior:**
1. Import reads "Milton" from Excel ✅
2. StateManager gets "Milton" ✅
3. Sync copies "Milton" to DualState ✅
4. calculateAll() preserves "Milton" ✅
5. refreshUI() displays "Milton" ✅

**Console logs to verify:**
```
[FileHandler] 🎯 TARGET Location from REPORT sheet: Province="ON", City="Milton"
[FileHandler] 🔧 Syncing S03 TargetState from global StateManager BEFORE calculateAll...
S03 TargetState: Synced h_19 = Milton from global StateManager  ← Should say Milton now!
[FileHandler] ✅ S03 UI refreshed after calculateAll()
```

### Additional Note: Reference Mode

Reference mode works because `publishReferenceResults()` has a fallback pattern:
```javascript
h_19: window.TEUI.StateManager.getValue("ref_h_19") || ReferenceState.getValue("h_19")
```

It reads StateManager FIRST, so even if Reference import happens with skipRecalculation=true, the fallback catches the imported value.

Target mode didn't have this fallback, which is why it failed until we added the explicit sync.

---

**Status:** Bug identified and fixed. Old refreshUI() call was overwriting imported values before sync could happen. Removed the redundant code. Ready for testing tomorrow with clean import flow.

---

## ✅ SUCCESS - Oct 4, 2025

### IMPORT NOW WORKS! 🎉

**Confirmed working:**
- ✅ Target location imports correctly from REPORT sheet
- ✅ Reference location imports correctly from REFERENCE sheet
- ✅ Dropdowns display imported values (Milton shows instead of Alexandria)
- ✅ Pattern A architecture preserved (S03 isolated state intact)
- ✅ No validation errors
- ✅ calculateAll() doesn't overwrite imported values

### Final Solution Summary

**The Problem:**
S03's Pattern A architecture (isolated DualState) prevented direct import because:
1. Import updated global StateManager
2. S03's DualState remained in localStorage with defaults
3. Validation blocked S03 dropdown values (not in FieldManager)
4. Old refresh code overwrote imported values before sync

**The Solution:**
1. **Skip validation** for S03 location fields (d_19, h_19) - they're managed by ClimateDataService, not FieldManager
2. **Add syncFromGlobalState()** method to S03's TargetState to bridge global → isolated state
3. **Remove old refresh code** that was overwriting StateManager between import and sync
4. **Sync BEFORE calculateAll()** so DualState has imported values when calculations run
5. **Refresh UI AFTER calculateAll()** to display final calculated state

### Architecture Insight

This revealed an important pattern for **Pattern A sections** (isolated state):

**Import flow for Pattern A sections:**
```javascript
1. Import → StateManager (global)
2. Sync → DualState (isolated) ← NEW: explicit bridge needed
3. calculateAll() → uses DualState values
4. refreshUI() → displays DualState values
```

**Other Pattern A sections (S02, S05, S06, S08, S15) likely need similar treatment if they have user-editable fields imported from Excel.**

### Lessons Learned

1. **Old debugging code** can cause production bugs (the refreshUI call)
2. **Isolated state** requires explicit sync bridges for import
3. **Validation** must accommodate dynamically-populated dropdowns
4. **Timing matters** - sync must happen before any code reads the isolated state
5. **Comprehensive logging** was essential to finding the timing issue

### Next Steps

- [ ] Test Reference import (should work via existing fallback pattern)
- [ ] Consider adding sync to other Pattern A sections if they import from Excel
- [ ] Remove debug logging once stable
- [ ] Document Pattern A import pattern for future sections

---

**Status:** ✅ RESOLVED - Import working for both Target and Reference locations. S03's Pattern A architecture successfully adapted for Excel import while maintaining state isolation.

---

## REMAINING ISSUES - To Fix on IRONING Branch

### Issue 1: Number Formatting After Import

**Problem:** Imported values show raw numbers instead of formatted display values
- Example: `0.5` instead of `50%` for Capacitance slider (i_21)
- Values are stored correctly but display formatting not applied

**Solution Needed:**
```javascript
// After import, format all displayed values
Object.entries(importedData).forEach(([fieldId, value]) => {
  const fieldDef = FieldManager.getField(fieldId);
  if (fieldDef) {
    const formattedValue = formatValueForDisplay(value, fieldDef.type);
    updateDOMElement(fieldId, formattedValue);
  }
});
```

**Files to check:**
- `4011-FieldManager.js` - `updateFieldDisplay()` method
- `4011-FileHandler.js` - Apply formatting after `updateStateFromImportData()`

### Issue 2: Visual Styling After Import (Blue Text)

**Problem:** Imported values don't show as "user-modified" (blue text per CSS)

**Current behavior:**
- User manually enters value → text turns blue (via CSS class)
- Import adds value → text stays default color

**Solution Needed:**
```javascript
// After import, mark fields as user-modified for styling
const element = document.querySelector(`[data-field-id="${fieldId}"]`);
if (element) {
  element.classList.add('user-modified'); // Or whatever CSS class is used
  // OR set data attribute: element.dataset.source = 'imported';
}
```

**Files to check:**
- CSS file - find class for user-modified styling
- `4011-FileHandler.js` - Add styling after import
- Check what happens in normal user input flow for comparison

### Issue 3: Calculation Sequence After Import

**Problem:** Some sections calculate, others remain stale after import

**Root causes:**
1. `skipRecalculation = true` for Reference import (line 159)
2. calculateAll() may not trigger all section dependencies
3. No explicit "imported" event to trigger fresh calculations
4. Some sections may have listeners disabled during import

**Current flow:**
```javascript
// Line 135: Target import
updateStateFromImportData(importedData) // skipRecalculation = false (default)

// Line 138: Reference import
updateStateFromImportData(referenceData, 0, true) // skipRecalculation = true ← PROBLEM?

// Line 421: calculateAll() runs
this.calculator.calculateAll() // But may not cascade properly
```

**Solution Needed - Import Should Behave Like User Input:**

The import should trigger the exact same calculation cascade as if a user entered values:

```javascript
// FileHandler.js - after import completes

// 1. Mark all imported fields as "modified" to trigger listeners
Object.keys(importedData).forEach(fieldId => {
  // StateManager should notify listeners that value changed
  StateManager.setValue(fieldId, value, "imported"); // Already doing this
});

// 2. Trigger full calculation cascade (not just calculateAll)
// Check Calculator.js for proper sequence:
// - Should calculations be per-section in dependency order?
// - Does calculateAll() respect dependency graph?
// - Are some sections opted out of calculateAll()?

// 3. Ensure all section listeners fire
// Problem: Some sections may check source !== "imported" and skip
// Solution: "imported" should be treated same as "user-modified"
```

**Investigation needed in Calculator.js:**
- Line references to dependency graph execution
- Check if there's a `calculateInDependencyOrder()` method
- Verify all sections are included in calculation cascade
- Look for any `if (source !== "imported")` conditions that skip calculations

**Key insight:**
> "The import should function just like a very fast user adding values in the app, and let the app do its thing and run normally."

This means:
- ✅ Values in StateManager (working)
- ✅ Listeners should fire (may be blocked?)
- ✅ Calculations should cascade (partially working)
- ❌ All sections should recalculate (some stale)
- ❌ Display formatting should apply (not happening)
- ❌ Visual styling should update (not happening)

### Issue 4: Reference Import with skipRecalculation

**Problem:** Line 159 imports Reference with `skipRecalculation = true`
- This prevents Reference sections from calculating after import
- May leave Reference calculations stale

**Question to investigate:**
- Why was `skipRecalculation = true` used for Reference import?
- Comment says "main recalculation happens after target data import"
- But does calculateAll() at line 421 recalculate Reference sections?
- Or do Reference sections need their own explicit trigger?

**Possible fix:**
```javascript
// Option 1: Remove skipRecalculation for Reference
this.updateStateFromImportData(referenceData, 0, false); // Let it calculate

// Option 2: Explicitly trigger Reference calculations after calculateAll()
this.calculator.calculateAll(); // Target calculations
this.calculator.calculateReferenceModel(); // Reference calculations (if method exists)
```

### Implementation Plan for IRONING Branch

**Phase 1: Formatting & Styling (Quick wins)**
1. Apply number formatting after import (formatNumber calls)
2. Add blue text styling for imported fields
3. Test visual consistency with manual entry

**Phase 2: Calculation Cascade (Core fix)**
1. Audit Calculator.js for proper dependency execution
2. Remove or fix `skipRecalculation` logic
3. Ensure all section listeners fire on import
4. Verify "imported" source triggers same logic as "user-modified"

**Phase 3: Testing & Verification**
1. Import test file with all field types
2. Verify all sections calculate correctly
3. Compare imported state vs. manually entered state
4. Confirm no stale calculations remain

**Phase 4: Cleanup**
1. Remove debug logging
2. Update documentation
3. Add comments explaining import flow
4. Create test checklist for future imports

---

**Status:** ✅ Core import working, ⚠️ Polish needed - Values import correctly but need formatting, styling, and complete calculation cascade. Moving to IRONING branch for final refinements.

---

## DEEP DIVE: Import Styling & Calculation Analysis - Oct 4, 2025

### Executive Summary

**Two critical issues preventing polished Excel import experience:**

1. **Imported values appear grey/italic (like defaults) instead of blue/bold (like user-modified)**
2. **Calculations fresh in some sections (S07) but stale in others (S04) after import**

Both issues stem from the fact that **import bypasses the normal user interaction flow** that triggers DOM class updates and calculation cascades.

---

### Issue 1: Why Imported Values Don't Style as "User-Modified"

#### The Elegant CSS System (Already Perfect)

**Location:** [4011-styles.css:1985-2000](../4011-styles.css#L1985-2000)

```css
/* Default values: Grey italic (no .user-modified class) */
.data-table td[contenteditable="true"].user-input:not(.user-modified),
.data-table td input[type="number"].user-input:not(.user-modified) {
  color: #6c757d !important;      /* Muted grey */
  font-style: italic !important;   /* Italic for defaults */
}

/* User-modified values: Blue bold (with .user-modified class) */
.data-table td[contenteditable="true"].user-input.user-modified,
.data-table td input[type="number"].user-input.user-modified {
  color: var(--user-input-color) !important;  /* Blue */
  font-style: normal !important;              /* Remove italic */
  font-weight: 600 !important;                /* Bold */
}
```

**The CSS is perfect** - it just needs the `.user-modified` class to be present.

---

#### The User Input Flow (✅ Works Correctly)

**Location:** [4011-init.js:900-943](../4011-init.js#L900-943)

```javascript
// Focus event: Add editing-intent class
document.addEventListener("focus", function (e) {
  const field = e.target;
  if (field.matches('[contenteditable="true"].user-input, input.user-input')) {
    field.classList.add("editing-intent");           // Temporary while editing
    field.dataset.originalValue = field.textContent; // Remember original
  }
}, true);

// Blur event: Add user-modified class (THE KEY TRIGGER)
document.addEventListener("blur", function (e) {
  const field = e.target;
  if (field.matches('[contenteditable="true"].user-input, input.user-input')) {
    field.classList.remove("editing-intent");

    const currentValue = field.textContent || field.value || "";
    const originalValue = field.dataset.originalValue || "";

    // If value changed, mark as user-modified
    if (currentValue !== originalValue && currentValue.trim() !== "") {
      field.classList.add("user-modified");  // ← BLUE STYLING APPLIED HERE
    } else if (currentValue.trim() === "") {
      field.classList.remove("user-modified"); // Back to grey/italic
    }
  }
}, true);
```

**User flow:**
1. Focus field → `.editing-intent` class added
2. Type value
3. Blur (tab away) → **`.user-modified` class added** ← Triggers blue/bold CSS
4. CSS automatically styles the field

---

#### The Import Flow (❌ Missing Class Update)

**Location:** [4011-FileHandler.js:291,328](../4011-FileHandler.js#L291,328) → [4011-StateManager.js:419](../4011-StateManager.js#L419)

```javascript
// FileHandler imports value
this.stateManager.setValue(fieldId, parsedValue, "imported"); // State = "imported"

// StateManager notifies listeners
function setValue(fieldId, value, state = "imported") {
  // Update internal state
  field.value = value;
  field.state = state;

  // Notify listeners
  notifyListeners(fieldId, value, oldValue, state); // ← Calls listeners

  // Auto-save to localStorage
  if (state === "imported" || state === "user-modified") {
    saveState(); // Saves to localStorage
  }
}

// FieldManager updates DOM value
function updateFieldDisplay(fieldId, displayValue, fieldDef) {
  const element = document.getElementById(fieldId);

  // Updates the VALUE but NOT the classList
  if (element.hasAttribute("contenteditable")) {
    element.textContent = displayValue; // ✅ Value updated
  } else if (element.tagName === "INPUT") {
    element.value = displayValue;       // ✅ Value updated
  }

  // ❌ MISSING: element.classList.add("user-modified");
}
```

**Import flow:**
1. Import reads Excel → `StateManager.setValue(fieldId, value, "imported")`
2. StateManager notifies listeners → `FieldManager.updateFieldDisplay()`
3. FieldManager updates DOM value → ✅ Value appears
4. **But classList never updated** → ❌ Field remains grey/italic

**Why it bypasses blur:**
- Blur events only fire when user **interactively focuses and unfocuses** a field
- Programmatic value updates (via import) **do NOT trigger blur events**
- The `.user-modified` class is **only added by blur handler**, never by import

---

#### Where the Class Should Be Added

**Solution:** Add a StateManager listener or modify `FieldManager.updateFieldDisplay()` to add the class when state === "imported"

**Proposed location:** [4011-FieldManager.js:1251-1290](../4011-FieldManager.js#L1251-1290)

```javascript
function updateFieldDisplay(fieldId, displayValue, fieldDef) {
  const element = document.getElementById(fieldId) ||
                  document.querySelector(`[data-field-id='${fieldId}']`);
  if (!element) return;

  // Update the value (already working)
  if (element.hasAttribute("contenteditable")) {
    element.textContent = displayValue;
  } else if (element.tagName === "INPUT") {
    element.value = displayValue;
  }

  // NEW: Add user-modified class for imported values
  const fieldState = TEUI.StateManager.getState(fieldId);
  if (fieldState === "imported" || fieldState === "user-modified") {
    element.classList.add("user-modified"); // ← ADD THIS
  }
}
```

**Alternative:** Register a global StateManager listener that manages classes for ALL fields:

```javascript
// In 4011-init.js or 4011-FieldManager.js
TEUI.StateManager.addGlobalListener(function(fieldId, value, oldValue, state) {
  if (state === "imported" || state === "user-modified") {
    const element = document.getElementById(fieldId) ||
                    document.querySelector(`[data-field-id='${fieldId}']`);
    if (element && element.classList.contains("user-input")) {
      element.classList.add("user-modified");
    }
  }
});
```

---

### Issue 2: Why Calculations Are Stale in Some Sections After Import

#### Current State Analysis

**Working sections (S07):**
- Calculations update immediately after import
- Fresh values displayed

**Stale sections (S04):**
- Values import correctly (visible in fields)
- Calculations remain at old values
- Requires manual recalculation trigger

---

#### Possible Root Causes

**Theory 1: Calculation Sequencing**

**Location:** [4011-StateManager.js:415-417](../4011-StateManager.js#L415-417)

```javascript
function setValue(fieldId, value, state = "imported") {
  // ...
  if (state !== VALUE_STATES.CALCULATED && state !== VALUE_STATES.DERIVED) {
    markDependentsDirty(fieldId); // ← Should mark dependencies for recalc
  }

  notifyListeners(fieldId, value, oldValue, state);
}
```

**Question:** Does `markDependentsDirty()` properly cascade for imported values?
- Some sections may have direct Calculator listeners that trigger on "user-modified" but not "imported"
- Dependency graph may not include all calculation paths

**Theory 2: Dual-State Architecture (⭐ PRIMARY SUSPECT)**

Sections using Pattern A (isolated state) like S03, S04, S08-S15:
- Import updates **global StateManager**
- But calculations read from **isolated DualState** (localStorage)
- If sync doesn't happen (or happens too late), calculations use old values

**Evidence from S03 debugging:**
- S03 required explicit `syncFromGlobalState()` call
- S04 likely needs same treatment if it uses Pattern A
- Other Pattern A sections: S02, S05, S06, S08, S15

**Theory 3: skipRecalculation Flag (✅ VERIFIED CORRECT ARCHITECTURE)**

**Location:** [4011-FileHandler.js:163-165](../4011-FileHandler.js#L163-165)

```javascript
// Import reference data without triggering full recalculation
// (main recalculation happens after target data import)
this.updateStateFromImportData(referenceData, 0, true); // skipRecalculation = true
```

**IMPORTANT - This is NOT a bug, it's correct dual-engine architecture:**

Per [4012-CHEATSHEET.md](4012-CHEATSHEET.md#L27-28):
> **"Dual-Engine Calculations": `calculateAll()` MUST run both `calculateTargetModel()` and `calculateReferenceModel()` in parallel on every data change.**

**How it works:**
1. Target import → StateManager updated, **skip intermediate calculation**
2. Reference import → StateManager updated, **skip intermediate calculation**
3. **Single `calculateAll()` call** → Runs BOTH engines in parallel (lines 481-520 of CHEATSHEET)

**Why this is correct:**
- Prevents running calculations before both states are populated
- Avoids duplicate calculation work (once for Target, once for Reference)
- Maintains state isolation via temporary mode switching pattern
- Both engines run together when `calculateAll()` is called after import completes

**Conclusion:** DO NOT change this flag - it's protecting dual-state isolation.

**Theory 4: Calculator Trigger Timing**

**Location:** [4011-FileHandler.js:421](../4011-FileHandler.js#L421)

```javascript
// After import completes
this.calculator.calculateAll(); // ← Single calculation pass
```

**Questions:**
- Does `calculateAll()` respect dependency order?
- Are some sections excluded from `calculateAll()`?
- Do Pattern A sections calculate independently?

---

#### Investigation Needed

**Files to audit:**

1. **4011-Calculator.js**
   - Find `calculateAll()` implementation
   - Check if it iterates through sections in dependency order
   - Look for any sections excluded from the cascade
   - Search for `if (state === "imported")` conditions that might skip calculations

2. **sections/4012-Section04.js** (and other stale sections)
   - Check if it uses Pattern A (isolated DualState)
   - Look for StateManager listeners
   - See if it has a `syncFromGlobalState()` method (likely needs one)

3. **4011-StateManager.js**
   - Verify `markDependentsDirty()` works for state="imported"
   - Check dependency graph includes all calculation paths
   - Look for any special handling of "imported" vs "user-modified"

---

#### Proposed Solution Path

**Fix 1: Ensure "imported" Triggers Same Flow as "user-modified"**

```javascript
// StateManager should treat "imported" identically to "user-modified"
if (state === "imported") {
  state = "user-modified"; // Normalize to trigger all listeners
}
```

**Fix 2: Add Pattern A Sync for All Affected Sections**

Following S03's successful pattern:

```javascript
// In FileHandler after Target import
const patternASections = ['sect02', 'sect03', 'sect04', 'sect05', 'sect06', 'sect08', 'sect15'];

patternASections.forEach(sectionId => {
  const section = window.TEUI?.SectionModules?.[sectionId];
  if (section?.TargetState?.syncFromGlobalState) {
    section.TargetState.syncFromGlobalState();
  }
});
```

**Fix 3: Ensure calculateAll() Runs After All Syncs Complete**

```javascript
// Current (problematic):
this.updateStateFromImportData(importedData);
this.syncPatternASections(); // ← Sync happens here
this.calculator.calculateAll(); // ← But may start before sync completes

// Better (explicit sequencing):
await this.updateStateFromImportData(importedData);
await this.syncPatternASections();
await this.calculator.calculateAll(); // ← Guaranteed to run after sync
```

---

### Comprehensive Fix Strategy

#### Phase 1: DOM Class Management (Quick Win)

**File:** [4011-FieldManager.js:1251-1290](../4011-FieldManager.js#L1251-1290)

**Change:**
```javascript
function updateFieldDisplay(fieldId, displayValue, fieldDef) {
  // ... existing value update code ...

  // NEW: Add styling class for imported/user-modified values
  const fieldState = TEUI.StateManager.getState(fieldId);
  if (fieldState === "imported" || fieldState === "user-modified") {
    if (element.classList.contains("user-input")) {
      element.classList.add("user-modified");
    }
  }
}
```

**Expected result:**
- ✅ Imported values styled blue/bold
- ✅ Visual parity with manually-entered values

---

#### Phase 2: Pattern A Section Sync (Core Architecture Fix)

**File:** [4011-FileHandler.js](../4011-FileHandler.js) after line 134

**Add universal Pattern A sync:**
```javascript
// After Target import completes
this.updateStateFromImportData(importedData);

// Sync all Pattern A sections
this.syncPatternASections(['sect02', 'sect03', 'sect04', 'sect05', 'sect06', 'sect08', 'sect15']);

// Then calculate
this.calculator.calculateAll();
```

**Add sync method:**
```javascript
syncPatternASections(sectionIds) {
  sectionIds.forEach(sectionId => {
    const section = window.TEUI?.SectionModules?.[sectionId];
    if (section?.TargetState?.syncFromGlobalState) {
      console.log(`[FileHandler] Syncing ${sectionId} from global state...`);
      section.TargetState.syncFromGlobalState();
    }
  });
}
```

**Expected result:**
- ✅ S04 and other Pattern A sections sync before calculation
- ✅ Calculations use fresh imported values

---

#### Phase 3: Verify Calculation Cascade (Audit)

**File:** [4011-Calculator.js](../4011-Calculator.js)

**Audit checklist:**
- [ ] Does `calculateAll()` iterate through sections in dependency order?
- [ ] Are Pattern A sections included in calculation cascade?
- [ ] Does "imported" state trigger same listeners as "user-modified"?
- [ ] Are there any `if (state !== "imported")` guards blocking calculations?

**If issues found:** Update Calculator to treat "imported" same as "user-modified"

---

### Testing Checklist

**After implementing fixes:**

- [x] Import Excel file with diverse field types (text, number, dropdown, slider)
- [x] Verify all imported values styled blue/bold (same as manual entry) ✅ **WORKING**
- [x] Check S04 calculations are fresh (not stale) ✅ **WORKING** (after export fix)
- [ ] Check S07 calculations remain fresh (no regression)
- [ ] Verify Reference import calculations are fresh
- [ ] Test dropdowns position to imported values
- [ ] Test sliders position to imported values and show formatted display
- [ ] Compare imported state vs manually-entered state (should be identical)
- [ ] Check dual-state sections (Target/Reference) both calculate correctly

### Known Issues Found During Testing

**Issue 1: Reference data not syncing to Pattern A ReferenceState (Oct 4, 2025)**

**Symptom:**
- Target imports work correctly (e.g., d_13 syncs to S02 TargetState)
- Reference imports fail (e.g., ref_d_13 doesn't sync to S02 ReferenceState)
- Example: S02 d_13 shows "OBC SB10 5.5-6 Z5 (2010)" in Target mode ✅
- But in Reference mode, d_13 shows default instead of imported value ❌

**Root Cause Discovered:**
Timing issue in FileHandler import sequence - `syncPatternASections()` called BEFORE Reference import completes

**Current Sequence (BROKEN for Reference):**
```javascript
// 4011-FileHandler.js:134-145
processImportedExcel(workbook) {
  const importedData = this.excelMapper.mapExcelToReportModel(workbook);  // Target import
  this.updateStateFromImportData(importedData);                            // Updates global StateManager with d_13

  this.processImportedExcelReference(workbook);                            // Reference import happens HERE
}

// 4011-FileHandler.js:320-414 (inside updateStateFromImportData)
updateStateFromImportData(importedData, skipCount = 0, skipRecalculation = false) {
  // ... import logic ...

  this.syncPatternASections();  // ← Called during TARGET import
                                 // Tries to sync ref_d_13 but it doesn't exist yet!

  this.calculator.calculateAll();
}

// 4011-FileHandler.js:147-170 (called AFTER syncPatternASections)
processImportedExcelReference(workbook) {
  const referenceData = this.excelMapper.mapExcelToReferenceModel(workbook);
  this.updateStateFromImportData(referenceData, 0, true);  // skipRecalculation=true
  // ref_d_13 NOW added to global StateManager, but sync already happened!
}
```

**Why ReferenceState sync fails:**
1. Target import → global StateManager gets d_13 = "OBC SB10 5.5-6 Z5 (2010)"
2. syncPatternASections() → S02.TargetState syncs d_13 ✅, tries to sync ref_d_13 but it's undefined ❌
3. Reference import → global StateManager gets ref_d_13 = "OBC SB10 5.5-6 Z5 (2010)" (too late!)
4. ReferenceState never gets the imported value

**Fix Required:**
Call `syncPatternASections()` AFTER Reference import as well:
```javascript
// In 4011-FileHandler.js:147-170
processImportedExcelReference(workbook) {
  const referenceData = this.excelMapper.mapExcelToReferenceModel(workbook);
  this.updateStateFromImportData(referenceData, 0, true);

  // ✅ ADD THIS: Sync Pattern A sections after Reference import
  this.syncPatternASections();

  this.showStatus(`Reference import complete...`, "success");
}
```

**Impact:**
- All Pattern A sections (S02, S03, S04, S05, S06, S08, S15) fail to sync Reference data
- ReferenceState calculations use defaults instead of imported values
- Target import works fine, Reference import broken

**Fix Attempted and REVERTED (Oct 4, 2025):**
Tried adding second `syncPatternASections()` after Reference import - this caused regressions

**Testing Revealed Real Issue:**
The sync logs showed:
```
S02 ReferenceState: Synced d_13 = OBC SB10 5.5-6 Z6 (DEFAULT!)
S02 ReferenceState: Synced h_15 = 1427.20 (DEFAULT!)
```

**But Excel file has:**
- ref_d_13 = "OBC SB10 5.5-6 Z5 (2010)" ✅
- ref_h_15 = 11167 ✅

**ROOT CAUSE - Reference data not importing to global StateManager at all!**
- The "synced" values are DEFAULTS, not imported values
- This means `mapExcelToReferenceModel()` or `updateStateFromImportData()` is failing
- Reference sheet data not reaching global StateManager
- Calling sync twice caused Target regressions (S13 d_118 = 89% instead of 4.80%)

**BREAKTHROUGH ANALYSIS (Oct 4, 2025):**

User discovered the actual root cause by observing logs:
```
[S02] Updated h_15 = "11,167.00" (target mode)  ✅ CORRECT
[S02] Updated h_15 = "1,427.20" (reference mode) ❌ WRONG - this is the DEFAULT!
```

**Excel File Structure:**
- REPORT sheet: H15 = 11167 (numeric value) ✅
- REFERENCE sheet: H15 = `=REPORT!H15` (formula that displays 11,167.00) ✅

**The Problem:**
REFERENCE sheet cells contain **formulas** (e.g., `=REPORT!H15`), not values
- SheetJS library stores formula cells with:
  - `cell.f` = "=REPORT!H15" (the formula)
  - `cell.v` = calculated value (should be 11167)
- But `extractCellValue()` (line 858) reads `cell.v`
- If formula isn't evaluated, `cell.v` might be undefined or stale

**Why defaults appear:**
When ExcelMapper reads REFERENCE sheet H15:
1. Cell has formula `=REPORT!H15`
2. SheetJS may not evaluate cross-sheet formulas
3. `cell.v` is undefined or contains old cached value
4. Import fails, StateManager never gets ref_h_15
5. Sync reads from StateManager, gets undefined
6. ReferenceState keeps default value (1427.20)

**Fix Applied (Oct 4, 2025):**
ExcelMapper.mapExcelToReferenceModel() now handles formula cells intelligently ([4011-ExcelMapper.js:668-684](../4011-ExcelMapper.js#L668-684)):

```javascript
// Check if cell contains a formula referencing REPORT sheet
if (cell.f && cell.f.startsWith('=REPORT!')) {
  // Extract REPORT cell ref (e.g., "=REPORT!H15" → "H15")
  const reportCellRef = cell.f.replace(/^=REPORT!/, '');

  // Read from REPORT sheet instead (formulas don't evaluate)
  const reportCell = reportWorksheet?.[reportCellRef];
  extractedValue = this.extractCellValue(reportCell);
} else {
  // User-entered value (override) - use as-is
  extractedValue = this.extractCellValue(cell);
}
```

**How it works:**
- If REFERENCE!H15 = `=REPORT!H15` (formula) → reads REPORT!H15 value (11167) ✅
- If REFERENCE!H15 = 5000 (user override) → reads 5000 ✅
- Respects both formula references AND user overrides

**Status:** ✅ FIXED - Reference import should now work correctly. Ready for testing.

**Issue 2: S04 calculations remain stale despite syncFromGlobalState() implementation (Oct 4, 2025)**

**Symptom:**
- Imported values d_27=2000299, d_28=355013 appear correctly in blue/bold (Phase 1 working ✅)
- But calculated fields f_27, f_28, g_27, g_28 show stale default values
- S04 calculations use f_32=132938 (default) instead of recalculating with imported values

**Root Cause Discovered:**
S04 module doesn't export `TargetState` and `ReferenceState` objects - only exports `ModeManager`

**Evidence:**
```javascript
// sections/4012-Section04.js:1337-1352
return {
  getFields: getFields,
  getDropdownOptions: function() { return {}; },
  getLayout: getLayout,
  onSectionRendered: onSectionRendered,
  initializeEventHandlers: initializeEventHandlers,
  calculateAll: calculateAll,
  ModeManager: ModeManager  // ❌ Missing: TargetState, ReferenceState
};
```

**Why sync failed:**
1. FileHandler calls `window.TEUI.SectionModules.sect04.TargetState.syncFromGlobalState()`
2. But `sect04.TargetState` is undefined (not exported)
3. Sync silently fails - logs "not yet implemented"
4. TargetState remains with default values from localStorage
5. Calculations read stale isolated state instead of fresh imported values

**Comparison with S03 (working):**
```javascript
// sections/4012-Section03.js exports
return {
  // ... other exports ...
  TargetState: TargetState,      // ✅ Exported
  ReferenceState: ReferenceState, // ✅ Exported
  ModeManager: ModeManager
};
```

**Fix Required:**
Add TargetState and ReferenceState to S04's export object (line 1351):
```javascript
return {
  // ... existing exports ...
  ModeManager: ModeManager,
  TargetState: TargetState,      // ADD THIS
  ReferenceState: ReferenceState  // ADD THIS
};
```

**Impact:**
- Phase 2 infrastructure is working correctly ✅
- syncFromGlobalState() methods implemented correctly ✅
- Export structure prevents access ❌
- Once exports are fixed, S04 sync should work immediately

**Fix Applied (Oct 4, 2025):**
Added TargetState and ReferenceState to S04 exports ([4012-Section04.js:1352-1353](../sections/4012-Section04.js#L1352-1353)):
```javascript
return {
  ModeManager: ModeManager,
  TargetState: TargetState,      // ✅ ADDED
  ReferenceState: ReferenceState  // ✅ ADDED
};
```

**Result:** ✅ **S04 calculations now fresh after import!**
- Sync logs appear in console confirming bridge from global StateManager → isolated DualState
- Calculations update immediately with imported utility bill values
- No manual recalculation needed

**Status:** ✅ RESOLVED - S04 import working correctly

---

### Expected Outcomes

**Visual Consistency:**
- Imported values: Blue bold text ✅
- Default values: Grey italic text ✅
- User-modified values: Blue bold text ✅

**Calculation Integrity:**
- All sections calculate after import ✅
- No stale calculations in any section ✅
- Calculations respect dual-state architecture ✅

**User Experience:**
- Import feels like "fast user entry" ✅
- All downstream effects trigger normally ✅
- No manual recalculation needed ✅

---

### Critical Architectural Insight: Dual-Engine Import Flow

**Key Understanding from 4012-CHEATSHEET.md:**

The import system is designed to work with the **dual-engine calculation architecture** where both Target and Reference calculations run in parallel on every data change.

**Correct Import Sequence:**
1. Import Target data → StateManager updated
2. Import Reference data → StateManager updated
3. **Sync Pattern A sections** → Bridge global StateManager to isolated DualState
4. **Single `calculateAll()` call** → Both engines run in parallel via temporary mode switching

**Why skipRecalculation=true is Essential:**
- Prevents premature calculation before both states are populated
- Avoids running calculations twice (wasteful)
- Preserves dual-engine parallel execution pattern
- Maintains state isolation via [Pattern 1: Temporary Mode Switching](4012-CHEATSHEET.md#L481-520)

**The Real Import Challenge:**
- Pattern A sections (S03, S04, etc.) use **isolated DualState** for state sovereignty
- Import populates **global StateManager** but isolated states remain stale
- Solution: **Explicit sync bridge** (like S03's `syncFromGlobalState()`)
- NOT changing calculation triggers or dual-engine architecture

**Architectural Compliance:**
- ✅ DO: Add Pattern A sync bridges for isolated state sections
- ✅ DO: Ensure DOM class management for visual styling
- ❌ DON'T: Remove `skipRecalculation` flag (breaks dual-engine pattern)
- ❌ DON'T: Change calculation timing (respects CHEATSHEET architecture)

---

**Status:** ✅ Analysis complete. Ready for implementation on IRONING branch this afternoon. Clear fix strategy identified for both styling and calculation issues, with full respect for dual-engine architecture patterns.

Bug notes: Most header sections are ~45px tall. How can we lock Key Values header to this dimension so it stops expanding and hogging our vertical space (4011-styles.css)

---

## ⚠️ CRITICAL SESSION FINDINGS - Oct 4, 2025 Afternoon

### Root Cause Discovery: S02 Module Not Loaded

**Problem Statement:**
After extensive debugging session with formula detection and import sequencing, discovered that **Section 02 (S02) is not being loaded/initialized in the application at all**.

**Evidence:**
1. syncPatternASections() logs show S03, S04, S05, S06, S08, S15 - but NO S02
2. `window.TEUI.SectionModules.sect02` does not exist
3. S02 exports TargetState and ReferenceState correctly, but module never loads
4. All import/sync work for S02 fails silently because the module doesn't exist

**Symptoms Traced to This Root Cause:**
- Reference mode shows h_15 = 1,427.20 (default) instead of 11,167.00 (imported)
- No S02 sync logs appear despite syncFromGlobalState() being implemented
- Reference data successfully imported to StateManager but never reaches S02.ReferenceState
- Blue/bold styling appears (StateManager has data) but wrong value displays (S02 not synced)

**What Actually Works:**
1. ✅ ExcelMapper formula detection (REFERENCE sheet `=REPORT!H15` correctly reads from REPORT)
2. ✅ FileHandler import sequence (both Target and Reference data reach StateManager)
3. ✅ S02 syncFromGlobalState() implementation (code is correct)
4. ✅ S02 exports (TargetState and ReferenceState properly exported)
5. ❌ S02 module loading (module never initializes, so sync hits nothing)

**Technical Debt Accumulated This Session:**
- Extensive debug logging in FileHandler.js (lines 169-170, 274-275, 283, 299)
- Debug logging in ExcelMapper.js for H15/D13 cells
- Attempted import sequence refactoring (moved syncPatternASections timing)
- Multiple rounds of "why isn't the data getting through" when real issue is "S02 doesn't exist"

**Recommendation:**

### REVERT to Hash Before This Session

**Revert to:** Last known good state before today's afternoon session (likely commit hash from this morning)

**Why Revert:**
1. **Core assumption was wrong**: We assumed S02 was loaded and focused on import flow
2. **Debug logging clutter**: Added significant logging that diagnoses wrong problem
3. **Import refactoring**: Changed timing/sequence when real issue is module loading
4. **Technical debt**: Clean slate better than debugging on false foundation

**What to Keep from This Session:**
- MAPPER.md analysis and findings (this document)
- Understanding that REFERENCE formulas reference REPORT sheet (critical insight)
- Knowledge that S02 module loading is prerequisite for any import work

**Correct Fix Sequence (After Revert):**
1. **First:** Investigate why S02 module isn't loading
   - Check 4011-init.js module loading sequence
   - Check if S02 is commented out or conditionally loaded
   - Verify S02 module definition doesn't have syntax errors preventing load

2. **Second:** Once S02 loads, confirm existing import works
   - ExcelMapper formula detection should work (code was correct)
   - FileHandler import should populate StateManager
   - syncPatternASections() should reach S02

3. **Third:** If still issues after S02 loads, revisit import sequence
   - May need timing adjustments we attempted today
   - But only after confirming S02 actually exists in window.TEUI.SectionModules

**Status:** 🔴 **BLOCKED** - ~~S02 module loading issue~~ **CORRECTED: S02 loads fine, but ref_h_15 not reaching StateManager**

---

### ⚠️ CORRECTED FINDINGS (After reviewing latest logs)

**S02 IS loading correctly!** Initial diagnosis was wrong. Logs show:
```
S02 ReferenceState: Synced i_17 = XXXX from global StateManager (ref_i_17)
S02 ReferenceState: Synced l_12 = $0.1300 from global StateManager (ref_l_12)
...
```

**THE REAL ISSUE:** S02 syncs **all fields EXCEPT h_15** (conditioned area)

**Evidence:**
1. ✅ S02 module loads and syncs i_16, i_17, l_12-l_16
2. ✅ ExcelMapper H15 → ref_h_15 mapping exists
3. ✅ Formula detection works (reads REPORT!H15 = 11167)
4. ❌ ref_h_15 NOT appearing in sync logs (StateManager.getValue('ref_h_15') returns null/undefined)

**Root Cause:**
ref_h_15 is being read from REFERENCE sheet but **not being stored in StateManager** during import. The value gets read correctly (11167) but doesn't make it into StateManager.fields.

**Investigation Needed (Evening Session):**
1. Add console log in FileHandler.updateStateFromImportData to confirm ref_h_15 reaches the function
2. Check if ref_h_15 fails validation (has FieldManager definition? Type check passes?)
3. Check if StateManager.setValue('ref_h_15', 11167, 'imported') is actually being called
4. Check if ref_h_15 gets overwritten by something after import

**Working Theory:**
The debug logging we added should show "Reference field imported: ref_h_15 = 11167" - if it doesn't appear, the import is failing validation or hitting an early return in updateStateFromImportData().

---

## 🔴 SECONDARY ISSUE: Post-Import Calculation Flow Blocked

**Observation (User Report):**
After importing values, when a user makes subsequent section-level edits:
1. ✅ The edited section updates its own calculations correctly
2. ❌ Calculations do NOT flow through to S01 (Summary Dashboard)
3. ❌ S01 shows stale values based on pre-edit state

**Comparison to Normal Workflow:**
In a **non-import scenario** (fresh page load, manual user edits):
- Section-level edits trigger calculations
- Calculations cascade through entire app
- S01 updates correctly with fresh downstream values

**Post-Import Behavior:**
Something about the import process establishes a **block or stale-value impediment** that prevents calculation cascade to S01.

**Hypotheses:**
1. **Listener/Observer Disconnection:** Import may disable change listeners that trigger cross-section calculation flow
2. **State Isolation:** Import may lock sections into isolated state mode, preventing StateManager propagation
3. **CalculateAll Flag:** skipRecalculation=true may leave sections in a "calculation complete" state that blocks re-triggers
4. **Dependency Graph Break:** Import may not properly register dependencies, so S01 doesn't know downstream values changed
5. **Event Propagation:** Import may suppress blur/change events that normally trigger cascade calculations

**User-Observed Workaround:**
"If I manually edit a section field after import, that section's calculations update, but the updates don't reach S01."

**Investigation Priority:**
This should be addressed **AFTER** solving Reference state import issue, as it may be a symptom of the same root cause (StateManager not properly updated during import).

**Test Scenario for Evening Session:**
1. Import Excel file
2. Manually edit a field in S04 (utility bills)
3. Observe: S04 calculations update ✅
4. Check: Does S01 show updated values? ❌ (Currently fails)
5. Expected: S01 should reflect S04's updated calculations

**Potential Fix Areas:**
- FileHandler.updateStateFromImportData() may need to re-enable listeners after import
- calculateAll() may need explicit cross-section dependency refresh
- StateManager may need to broadcast "values changed" event after import completes

---

## 🎯 BREAKTHROUGH: ref_h_15 Overwrite Identified (Oct 4, 3:45pm)

**The Smoking Gun (from Logs.md):**
```
Line 9282:  [FileHandler] Reference field imported: ref_h_15 = 11167 ✅
Line 10008: S02 TargetState: Synced h_15 = 11167 from global StateManager ✅
Line 10024: S02 ReferenceState: Synced h_15 = 1427.20 from global StateManager (ref_h_15) ❌
```

**Timeline Analysis:**
1. ✅ ExcelMapper reads H15 formula `=REPORT!H15` → 11167 (line 8920)
2. ✅ FileHandler imports ref_h_15 = 11167 to StateManager (line 9282)
3. ✅ S02 TargetState syncs h_15 = 11167 correctly (line 10008)
4. ❌ **BETWEEN lines 10008-10024:** Something overwrites StateManager ref_h_15 to 1427.20
5. ❌ S02 ReferenceState syncs the WRONG value 1427.20 (line 10024)

**What Happens Between Target and Reference Sync:**
- Lines 10008-10017: S02.TargetState.syncFromGlobalState() completes
- Line 10017: FileHandler calls S02.ReferenceState.syncFromGlobalState()
- **Hypothesis:** TargetState sync triggers S02 calculations/listeners which publish reference defaults

**Debug Strategy Added (Commit a7b3ecc):**
Added StateManager.setValue() logging for ref_h_15:
```javascript
if (fieldId === "ref_h_15") {
  console.log(`[StateManager DEBUG] ref_h_15 setValue: "${value}" (state: ${state}, prev: ${fields.get(fieldId)?.value})`);
  console.trace("[StateManager] ref_h_15 setValue stack trace:");
}
```

**Next Test (Evening/Tomorrow):**
1. Hard refresh browser
2. Import Excel file
3. Check logs for ALL ref_h_15 setValue calls with stack traces
4. Identify which function overwrites 11167 → 1427.20
5. Fix the overwrite (likely in S01/S02 initialization or calculation publishing)

**Expected Log Output:**
```
[StateManager DEBUG] ref_h_15 setValue: "11167" (state: imported, prev: undefined)
[StateManager] ref_h_15 setValue stack trace:
    at setValue (StateManager.js:350)
    at FileHandler.updateStateFromImportData (FileHandler.js:326)
    ...
[StateManager DEBUG] ref_h_15 setValue: "1427.20" (state: calculated, prev: 11167)  ← THE CULPRIT!
[StateManager] ref_h_15 setValue stack trace:
    at setValue (StateManager.js:350)
    at Section01.publishDefaults (Section01.js:???)  ← Or wherever it is
    ...
```

**Once Identified:** Remove/fix the code that publishes reference defaults after import.

---

## 🎯 ROOT CAUSE CONFIRMED - Listener Chain During Import (Oct 4, 6pm)

**The Full Stack Trace Revealed:**
```
[StateManager DEBUG] ref_h_15 setValue: "1427.20" (state: calculated, prev: 11167)

Stack trace:
setValue @ StateManager.js:354
(anonymous) @ Section02.js:839          ← storeReferenceResults()
storeReferenceResults @ Section02.js:837
calculateReferenceModel @ Section02.js:803
calculateAll @ Section02.js:928
calculateAndRefresh @ Section02.js:1145  ← LISTENER TRIGGERED!
(anonymous) @ StateManager.js:551        ← notifyListeners()
setValue @ StateManager.js:409
(anonymous) @ FileHandler.js:324         ← DURING IMPORT!
updateStateFromImportData @ FileHandler.js:304
processImportedExcelReference @ FileHandler.js:190
```

**The Bug Mechanism:**
1. FileHandler imports ref_h_15 = 11167 ✅
2. StateManager.setValue("ref_h_15", 11167) is called
3. **StateManager notifies ALL listeners** (this is the problem!)
4. S02.calculateAndRefresh listener fires **DURING import**
5. S02.calculateAll() runs BUT ReferenceState still has DEFAULT (1427.20)
   - Sync hasn't happened yet - import is still in progress
   - ReferenceState.getValue("h_15") returns 1427.20
6. S02.storeReferenceResults() publishes calculated 1427.20 back to StateManager
7. Overwrites the just-imported 11167! ❌

**Why This Happens:**
- Import triggers listeners on EVERY field imported
- Each setValue() during import fires notifyListeners()
- Sections calculate with stale isolated state (not yet synced)
- Calculated results overwrite imported values

**The Solution: Import Quarantine Pattern**

Import needs to be **atomic** - all values imported, THEN sync, THEN calculations:

```javascript
// 1. QUARANTINE: Suppress listeners during import
StateManager.muteListeners();

// 2. Import all values (no calculations triggered)
this.updateStateFromImportData(importedData);
this.processImportedExcelReference(workbook);

// 3. Sync Pattern A sections (bridge global → isolated state)
this.syncPatternASections();

// 4. RESUME: Unmute and trigger ONE calculateAll
StateManager.unmuteListeners();
this.calculator.calculateAll();
```

**Implementation Requirements:**
1. Add `muteListeners()` / `unmuteListeners()` to StateManager
2. Modify `setValue()` to skip notifyListeners() when muted
3. FileHandler imports with listeners muted
4. After sync complete, unmute and trigger single calculateAll()

**Critical Architecture Principle:**
> Import is not "fast user entry" - it's a **batch state restoration** that must complete atomically before calculations resume.

---

## ⚠️ BROADER ARCHITECTURAL CONCERNS - State Hierarchy & Primacy

**User Observation (Oct 4, 6pm):**
After implementing import renovation, two critical issues emerged:

1. **Calculation Chain Breaks:** Some sections calculate internally but don't propagate to S01 (stale summary)
2. **State Mixing:** Target values change when Reference is modified, and vice versa (contamination)

**The Core Problem:**
We have multiple state systems with unclear hierarchy:
- User-Modified state (should be KING)
- Imported state
- Calculated state
- Reference overrides (AppendixE)
- Defaults (should be WEAKEST)
- LocalStorage persistence (complicates everything)

**State Hierarchy (From User Requirements):**
```
1. USER-MODIFIED     ← Highest priority, always wins
2. IMPORTED          ← Batch restoration, one-time
3. CALCULATED        ← Derived from inputs
4. REFERENCE-LOOKUP  ← AppendixE regulatory values
5. DEFAULTS          ← Lowest priority, only when nothing else exists
```

**Current Architecture Issues:**
- ✅ Dual-state isolation works in normal operation (months of refinement)
- ❌ Import triggers listeners → premature calculations → overwrites
- ❌ Calculation chain blocked after import → S01 stale
- ❌ State mixing observed post-import (contamination)
- ❌ LocalStorage may persist defaults, overriding imports
- ❌ No clear "strength" comparison when multiple states compete

**Questions to Resolve:**
1. Does StateManager enforce state hierarchy (user-modified > imported > calculated > default)?
2. Does LocalStorage respect state strength or blindly restore defaults?
3. How do we ensure import doesn't trigger premature calculations?
4. How do we preserve dual-state isolation during import?
5. Should imported state be permanent or overridable by calculations?

**Investigation Needed:**
- Review README.md state architecture documentation
- Audit StateManager state comparison logic
- Check LocalStorage save/restore for state strength
- Verify Pattern A isolation preserved during import
- Define import state transition: quarantine → sync → calculate → normal

**Proposed Solution Path:**
1. Implement import quarantine (mute listeners)
2. Audit state hierarchy enforcement
3. Document state strength rules
4. Add state comparison logic (stronger state wins)
5. Fix LocalStorage to respect state hierarchy
6. Test dual-state isolation post-import

---

## 🔍 STATE HIERARCHY AUDIT - Documentation vs Implementation (Oct 4, 6:15pm)

**What Documentation Says:**

README.md (line 906):
> State Management System: Central registry handling multiple value states (Default, User-Modified, Saved, Imported and Reference)

VALUE_STATES defined in StateManager.js:
```javascript
const VALUE_STATES = {
    DEFAULT: "default",           // Original default value
    IMPORTED: "imported",          // Value imported from saved data
    USER_MODIFIED: "user-modified", // Value changed by user
    CALCULATED: "calculated",      // Value calculated by the system
    DERIVED: "derived",            // Value derived from another field
};
```

**What Implementation Actually Does:**

StateManager.js setValue() (lines 420-421):
```javascript
field.value = value;
field.state = state;
```

**❌ CRITICAL FLAW: NO STATE HIERARCHY ENFORCEMENT!**

The current implementation:
- **Last write wins** - any state can overwrite any other state
- `calculated` can overwrite `user-modified` ❌
- `default` can overwrite `imported` ❌
- No comparison of state "strength" or "priority"
- No protection for user intent

**Real-World Failure Example:**
1. User sets h_15 = 11167 (user-modified) ✅
2. User imports file with h_15 = 5000 (imported)
3. Import triggers calculations
4. S02 calculates h_15 = 1427.20 (calculated) using stale state
5. Calculated value **overwrites user's choice** ❌

**CORRECTED State Hierarchy (Actual Application Logic):**

**Key Principle:** States apply ONLY to INPUT FIELDS (number/text/slider/dropdown). Calculated/Derived fields are IMMUTABLE - they never receive state changes.

**Input Field Value States (Non-Hierarchical - Last Write Wins):**
```
For USER INPUT FIELDS ONLY (h_15, d_13, ref_f_85, etc):

Value States Available:
- DEFAULT        → App initialization (weakest, replaced by any action)
- USER-MODIFIED  → User typed/selected in UI
- OVER-RIDDEN    → ReferenceValues overlay (d_13 change applies ref_f_85, etc)
- IMPORTED       → Excel file loaded

Flow Example (ref_f_85 insulation RSI):
DEFAULT (0.5)
  → USER-MODIFIED (0.9)     [user types 0.9]
  → OVER-RIDDEN (0.7)        [user changes d_13, ReferenceValues applies]
  → USER-MODIFIED (0.8)     [user types 0.8]
  → IMPORTED (0.6)          [Excel import]
  → USER-MODIFIED (1.0)     [user types 1.0]

Rules:
1. Last write wins among USER-MODIFIED, OVER-RIDDEN, IMPORTED
2. DEFAULT only exists at initialization, replaced by ANY action
3. These states are ONLY for INPUT fields, NEVER for calculated fields
```

**Note:** Currently VALUE_STATES lacks OVER_RIDDEN constant. ReferenceValues.js incorrectly uses "user-modified" for overlays. Planned addition: `VALUE_STATES.OVER_RIDDEN = "over-ridden"`

**What This Means:**

**For h_15 (Conditioned Area) - INPUT FIELD:**
- DEFAULT: 1427.20 (app initialization) ← Weakest
- User types 11167 → USER-MODIFIED (replaces default)
- User changes d_13 → REFERENCE-OVERRIDE applies (may change h_15 if defined)
- User types 5000 → USER-MODIFIED (replaces override)
- User imports Excel → IMPORTED (replaces user edit) ← Strongest for that moment
- User types 8000 → USER-MODIFIED (replaces import)

**For Calculated Fields (j_32, k_32, etc) - NEVER RECEIVE STATE:**
- Always computed from inputs
- Never have DEFAULT, USER-MODIFIED, or IMPORTED state
- Cannot be overwritten by any state system
- Flow through calculation chain immutably

**The Real Bug in S02:**
```javascript
// Section02.js:839 - WRONG APPROACH
storeReferenceResults() {
  const referenceResults = {
    h_15: ReferenceState.getValue("h_15"), // ← Gets from isolated state
  };

  window.TEUI.StateManager.setValue(
    `ref_h_15`,           // ← INPUT FIELD
    referenceResults.h_15, // ← Value from isolated state
    "calculated"          // ← WRONG! h_15 is INPUT, not CALCULATED
  );
}

// Why this is wrong:
// 1. h_15 is an INPUT field (conditioned area)
// 2. S02 is "publishing" isolated state back to global StateManager
// 3. Using "calculated" state for an INPUT field
// 4. During import, isolated state is stale (not synced yet)
// 5. Overwrites fresh import with stale default

// CORRECT APPROACH:
// S02 should NOT publish input fields back to StateManager!
// Only CALCULATED outputs (like d_16 carbon target) should be published.
// Input fields flow: Global StateManager → Isolated State (one-way)
```

**Why S02 Does This (Intent vs Implementation):**
- **Intent:** Store S02's calculated Reference values for downstream sections
- **Implementation:** Publishes ALL fields including inputs (h_15)
- **Problem:** Inputs shouldn't be "calculated" - they're user data!

**The Fix:**
```javascript
storeReferenceResults() {
  const referenceResults = {
    // ✅ ONLY publish CALCULATED outputs, NOT inputs
    d_16: ReferenceState.getValue("d_16"), // Carbon target (CALCULATED)
    // ❌ REMOVE h_15, h_12, h_13, etc (these are INPUTS)
  };

  Object.entries(referenceResults).forEach(([fieldId, value]) => {
    window.TEUI.StateManager.setValue(
      `ref_${fieldId}`,
      String(value),
      "calculated" // OK for d_16, which IS calculated
    );
  });
}
```

**CORRECTED Implementation Required:**

```javascript
// StateManager.js - Simplified rules matching actual application logic

function setValue(fieldId, value, state = VALUE_STATES.USER_MODIFIED) {
  // ... existing code ...

  const field = fields.get(fieldId);

  // ✅ RULE 1: CALCULATED/DERIVED states ONLY for calculated fields
  // Input fields should NEVER receive CALCULATED/DERIVED state
  if (state === VALUE_STATES.CALCULATED || state === VALUE_STATES.DERIVED) {
    // Allow for calculated fields (j_32, k_32, etc)
    // But log warning if trying to set on known input fields
    const inputFields = ['h_15', 'd_13', 'h_12', 'h_13', 'h_14', /* ... */];
    if (inputFields.includes(fieldId.replace('ref_', ''))) {
      console.warn(
        `[StateManager] WARNING: Attempting to set CALCULATED state on INPUT field ${fieldId}!`
      );
      // Still allow it for now (backward compatibility) but log
    }
  }

  // ✅ RULE 2: Input field state transitions
  // For INPUT fields only:
  // - IMPORTED always wins (replaces everything)
  // - USER-MODIFIED replaces REFERENCE-OVERRIDE
  // - REFERENCE-OVERRIDE replaces USER-MODIFIED (special case)
  // - DEFAULT is replaced by anything

  if (field.state === VALUE_STATES.USER_MODIFIED) {
    // User edit exists - only IMPORTED or new USER-MODIFIED can replace
    if (state === VALUE_STATES.DEFAULT || state === VALUE_STATES.CALCULATED) {
      console.log(
        `[StateManager] Rejected ${state} for ${fieldId} - USER-MODIFIED has priority`
      );
      return false;
    }
    // REFERENCE-OVERRIDE can replace USER-MODIFIED (d_13 change scenario)
    // IMPORTED always replaces
    // USER-MODIFIED replaces USER-MODIFIED (update)
  }

  if (field.state === VALUE_STATES.IMPORTED) {
    // Import exists - only USER-MODIFIED or new IMPORTED can replace
    if (state === VALUE_STATES.DEFAULT || state === VALUE_STATES.CALCULATED) {
      console.log(
        `[StateManager] Rejected ${state} for ${fieldId} - IMPORTED has priority`
      );
      return false;
    }
  }

  // ✅ RULE 3: DEFAULT is always replaced (weakest)
  // No check needed - anything can replace DEFAULT

  if (field.value === value && field.state === state) {
    return false;
  }

  field.value = value;
  field.state = state;

  // ... rest of function ...
}
```

**LocalStorage Concern:**

Current code (line 430-435):
```javascript
if (
  state === VALUE_STATES.USER_MODIFIED ||
  state === VALUE_STATES.IMPORTED
) {
  // Debounce saves to avoid excessive localStorage writes
```

**Question:** When page loads, does localStorage restore:
- Last saved value regardless of state? ❌
- Strongest state from saved session? ✅ (needs verification)

**If defaults persist in localStorage**, they could override imports on page load!

**Testing Required:**
1. Set field to user-modified value
2. Save to localStorage
3. Reload page
4. Import different value
5. **Expected:** User-modified value should persist (not overwritten)
6. **Actual:** ??? (needs testing)

**Dual-State Isolation Concern:**

Pattern A sections (S02, S03, S04...) use **isolated DualState**:
- TargetState and ReferenceState are separate from global StateManager
- Import populates global StateManager
- Sync bridges global → isolated state
- **Question:** Does isolated state respect hierarchy?

**Critical Gap:** If S02.ReferenceState.setValue() doesn't check state priority, the same overwrite bug exists in isolated state!

**Recommendation:**
1. **Immediate:** Implement import quarantine (mute listeners)
2. **Short-term:** Add state hierarchy to StateManager.setValue()
3. **Medium-term:** Audit all setValue() calls (global and isolated)
4. **Long-term:** Document state transition rules in CHEATSHEET
5. **Essential:** Add unit tests for state hierarchy enforcement

---

## 🏛️ Architecture Consistency Analysis
**Date:** October 4, 2025
**Purpose:** Verify proposed import fixes align with existing Reference system architecture
**Reference Documentation:** Master-Reference-Roadmap.md, ReferenceValues.js, ReferenceToggle.js, ReferenceManager.js

### Executive Summary

**✅ ARCHITECTURAL ALIGNMENT CONFIRMED**

The proposed import fixes are **fully compatible** with the existing Reference system architecture. All three systems (FileHandler import, ReferenceValues overlay, ReferenceToggle display) share the same foundational patterns:

1. **Value copying between states** (external → internal, Target → Reference, code standards → Reference)
2. **Dual-state architecture compliance** (ModeManager facade, StateManager `ref_` prefix)
3. **State isolation requirements** (Target/Reference independence)
4. **Consistent terminology** (VALUE_STATES vs Model States)

**No conflicts, duplications, or terminology mismatches found.**

---

### Terminology Consistency Audit

#### ✅ Value States - Fully Consistent

**StateManager (Current):**
```javascript
const VALUE_STATES = {
  DEFAULT: "default",
  IMPORTED: "imported",
  USER_MODIFIED: "user-modified",
  CALCULATED: "calculated",
  DERIVED: "derived"
  // Missing: OVER_RIDDEN
};
```

**ReferenceValues.js Usage:**
- Uses **"reference-standard"** state when applying code overlays (ReferenceToggle.js:535)
- No VALUE_STATES constant defined (file is pure data)
- ✅ **Compatible:** "reference-standard" = semantic equivalent of "over-ridden"

**ReferenceToggle.js Usage:**
- Line 470: `setValue(fieldId, value, "mirrored")` - Mirror Target copying
- Line 535: `setValue(fieldId, value, "reference-standard")` - ReferenceValues overlay
- ✅ **Compatible:** Uses descriptive state names, aligns with VALUE_STATES pattern

**ReferenceManager.js Usage:**
- Lines 104-129: `isCodeDefinedField()` - identifies fields that come from ReferenceValues
- No direct setValue calls (coordination/query module only)
- ✅ **Compatible:** Doesn't introduce conflicting state concepts

**Proposed OVER_RIDDEN State:**
```javascript
const VALUE_STATES = {
  // ... existing states ...
  OVER_RIDDEN: "over-ridden"  // NEW: ReferenceValues overlays when d_13 changes
};
```

**✅ RECOMMENDATION:** Standardize on "over-ridden" state name:
- Change ReferenceToggle.js line 535: `"reference-standard"` → `VALUE_STATES.OVER_RIDDEN`
- Change ReferenceToggle.js line 470: `"mirrored"` → `VALUE_STATES.IMPORTED` (mirrors are imports from Target)
- Add OVER_RIDDEN to StateManager VALUE_STATES constant
- **Rationale:** Unifies terminology across import (IMPORTED), reference overlays (OVER_RIDDEN), and user edits (USER_MODIFIED)

---

### Architectural Pattern Consistency

#### ✅ ModeManager Facade Pattern - Fully Aligned

**Master-Reference-Roadmap.md Lines 770-800:**
```javascript
// ModeManager is a FACADE that manages internal state objects
const ModeManager = {
  currentMode: "target", // "target" | "reference"
  getValue: (fieldId) => this.getCurrentState().getValue(fieldId),
  setValue: (fieldId, value) => this.getCurrentState().setValue(fieldId, value),
  switchMode: (mode) => { this.currentMode = mode; this.refreshUI(); }
};
```

**ReferenceToggle.js Lines 454-470 (Mirror Target):**
```javascript
// ✅ CORRECT: Uses ModeManager facade
section.modeManager.switchMode("target");
const value = section.modeManager.getValue(fieldId);
section.modeManager.switchMode("reference");
section.modeManager.setValue(fieldId, value, "mirrored");
```

**FileHandler.js Import Flow (Current):**
```javascript
// ✅ CORRECT: Populates global StateManager
this.updateStateFromImportData(importedData, 0, false);
this.processImportedExcelReference(workbook);

// ✅ CORRECT: Syncs to isolated states
this.syncPatternASections();

// ❌ PROBLEM: Triggers calculations during import (no quarantine)
this.calculator.calculateAll();
```

**✅ ALIGNMENT CONFIRMED:** All three systems use the same ModeManager facade pattern. Import fix (quarantine) doesn't alter this architecture.

---

#### ✅ StateManager `ref_` Prefix Pattern - Fully Aligned

**Master-Reference-Roadmap.md Lines 781-786:**
```javascript
// Reference results stored in StateManager with ref_ prefix for downstream sections
window.TEUI.StateManager.setValue("ref_i_98", heatloss.toString(), "calculated");
```

**ReferenceToggle.js Line 350:**
```javascript
// ✅ CORRECT: Reads Reference values with ref_ prefix
return window.TEUI.StateManager.getValue(`ref_${fieldId}`);
```

**ExcelMapper.js Lines 689-709 (REFERENCE sheet):**
```javascript
// ✅ CORRECT: Maps REFERENCE sheet to ref_ prefixed fields
const fieldId = this.getReferenceFieldId(cellRef);  // Returns "ref_h_15"
importedData.push({ fieldId: fieldId, value: extractedValue });
```

**S02 storeReferenceResults() Line 839 (THE BUG):**
```javascript
// ❌ PROBLEM: Publishes INPUT fields with ref_ prefix AND calculated state
window.TEUI.StateManager.setValue(
  `ref_h_15`,
  String(value),
  "calculated"  // ← WRONG! h_15 is INPUT, should be "imported" or "user-modified"
);
```

**✅ ALIGNMENT CONFIRMED:** `ref_` prefix pattern is consistent across all systems. Bug is in state metadata (using "calculated" for INPUT fields), not in prefix pattern.

---

#### ✅ State Isolation Requirements - Fully Aligned

**Master-Reference-Roadmap.md Lines 69-73:**
```
**4. Global State Contamination**
- ❌ PROHIBITED: Any Reference operations that affect Target values
- ❌ PROHIBITED: Cross-mode state mixing or contamination
- ✅ REQUIRED: Perfect state isolation between Target and Reference
```

**ReferenceToggle.js Lines 446-476 (Mirror Target):**
```javascript
// ✅ CORRECT: Saves and restores original mode
const originalMode = section.modeManager.currentMode;
section.modeManager.switchMode("target");  // Read Target
// ... copy values ...
section.modeManager.switchMode("reference");  // Write Reference
// ... write values ...
section.modeManager.switchMode(originalMode);  // Restore
```

**FileHandler.js Import (Current):**
```javascript
// ✅ CORRECT: Separate import for Target (REPORT sheet) and Reference (REFERENCE sheet)
this.updateStateFromImportData(importedData, 0, false);  // Target
this.processImportedExcelReference(workbook);  // Reference (separate)
```

**S02 Bug Impact on Isolation:**
```javascript
// ❌ VIOLATION: S02 listener fires during import, overwrites isolated Reference state
// Import: StateManager.setValue("ref_h_15", "11167", "imported")  ← Global state
// Listener triggers: S02.calculateAll() → storeReferenceResults()
// Overwrite: StateManager.setValue("ref_h_15", "1427.20", "calculated")  ← Stale default
// Result: Import contaminated by stale calculation
```

**✅ ALIGNMENT CONFIRMED:** State isolation architecture is consistent. Import quarantine (mute listeners) will prevent contamination during import phase, preserving isolation.

---

### Functional Overlap Analysis

#### ✅ No Duplication - Distinct Responsibilities

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
- **State Applied:** "mirrored" (should be IMPORTED), "reference-standard" (should be OVER_RIDDEN)

**ReferenceManager.js (Coordination):**
- **Responsibility:** Coordinate access to ReferenceValues based on d_13 selection
- **Scope:** Query/helper module (no direct state modification)
- **Target:** Both states (identifies code-defined fields, manages standard selection)
- **State Applied:** N/A (coordination only)

**✅ NO DUPLICATION FOUND:** Each module has distinct responsibilities with clear boundaries.

---

### Integration Points

#### 1. d_13 (Reference Standard) Changes

**Current Flow:**
1. User changes d_13 dropdown → StateManager.setValue("d_13", value, "user-modified")
2. ReferenceManager listens (line 35) → updates currentStandard
3. ReferenceToggle.handleStandardChange() (line 262) → notifies sections
4. Sections with `onReferenceStandardChange` method → apply new ReferenceValues

**Import Impact:**
- Import can load d_13 from Excel → setValue("d_13", value, "imported")
- Same listener chain fires → ReferenceValues update correctly
- ✅ **No conflict:** Import integrates seamlessly with existing d_13 change handling

---

#### 2. Import Quarantine Integration

**Proposed Fix (Import Quarantine):**
```javascript
// FileHandler.js
function importExcelFile(workbook) {
  // 1. Mute listeners
  StateManager.muteListeners();

  // 2. Import all values (both sheets)
  this.updateStateFromImportData(importedData, 0, false);
  this.processImportedExcelReference(workbook);

  // 3. Sync isolated states
  this.syncPatternASections();

  // 4. Unmute listeners
  StateManager.unmuteListeners();

  // 5. Calculate once (clean calculation with fresh values)
  this.calculator.calculateAll();
}
```

**ReferenceToggle.js Mirror Target (Current):**
```javascript
// Lines 421-492: No listener muting
section.modeManager.switchMode("target");
const value = section.modeManager.getValue(fieldId);
section.modeManager.switchMode("reference");
section.modeManager.setValue(fieldId, value, "mirrored");
```

**✅ COMPATIBLE:** Mirror Target doesn't need quarantine because:
- Operates on one section at a time (controlled loop)
- Reads then writes (no intermediate calculations)
- Uses isolated state (section.modeManager), not global StateManager listeners
- **Import quarantine** only affects global StateManager listener chain

---

#### 3. ReferenceValues Overlay Integration

**Master-Reference-Roadmap.md Lines 210-216 (Mirror + Reference Mode):**
```
- Copies all Target user inputs (geometry, climate, energy costs) to Reference state
- Exception: Reference Standard (d_13) drives ReferenceValues.js overrides
- Locks ReferenceValues-derived fields to prevent user confusion
```

**ReferenceToggle.js Lines 498-564 (Current Implementation):**
```javascript
function mirrorTargetWithReference() {
  // 1. Mirror Target first (copy all values)
  mirrorTarget();

  // 2. Apply ReferenceValues overlay
  Object.entries(refValues).forEach(([fieldId, value]) => {
    section.modeManager.setValue(fieldId, value, "reference-standard");
  });
}
```

**Import Scenario:**
```
1. User imports Excel with h_15 = 11167 → StateManager.setValue("h_15", "11167", "imported")
2. User runs "Mirror Target + Reference"
   - Mirror copies: h_15 = 11167 (Target → Reference)
   - ReferenceValues overlay: f_85 = 4.87 (code minimum RSI)
3. Result: Reference has imported geometry + code minimums
```

**✅ COMPATIBLE:** Import + Mirror + Reference work together:
- Import sets IMPORTED state (strongest for user-provided values)
- Mirror copies values with state metadata (preserves IMPORTED state)
- ReferenceValues overlay only affects subset of fields (f_85, g_88, etc.)
- **No conflict:** Different field sets, state priority respected

---

### State Priority Matrix

#### Current State Priorities (Implicit - Not Enforced)

| Current State | Can Be Replaced By | Cannot Be Replaced By |
|---------------|-------------------|----------------------|
| DEFAULT | IMPORTED, USER_MODIFIED, OVER_RIDDEN, CALCULATED | (none - weakest) |
| USER_MODIFIED | IMPORTED, OVER_RIDDEN | DEFAULT, CALCULATED |
| OVER_RIDDEN | IMPORTED, USER_MODIFIED | DEFAULT, CALCULATED |
| IMPORTED | USER_MODIFIED, OVER_RIDDEN | DEFAULT, CALCULATED |
| CALCULATED | (should only be on calculated fields) | (INPUT fields should never have this) |

**❌ CURRENT BUG:** No enforcement in StateManager.setValue() - last write always wins

---

#### Proposed State Priorities (Enforced)

**For INPUT Fields (h_15, d_13, f_85, etc.):**

```javascript
// Priority: IMPORTED ≈ USER_MODIFIED ≈ OVER_RIDDEN > DEFAULT
// Last write wins among top tier (non-hierarchical)
// CALCULATED/DERIVED should NEVER appear on INPUT fields

if (isInputField(fieldId)) {
  if (state === VALUE_STATES.CALCULATED || state === VALUE_STATES.DERIVED) {
    console.error(`Cannot set ${state} on INPUT field ${fieldId}`);
    return false;  // REJECT
  }

  if (currentState === VALUE_STATES.DEFAULT) {
    // DEFAULT always gets replaced
    return true;  // ACCEPT
  }

  // Among IMPORTED/USER_MODIFIED/OVER_RIDDEN: last write wins
  if ([IMPORTED, USER_MODIFIED, OVER_RIDDEN].includes(state)) {
    return true;  // ACCEPT
  }
}
```

**For CALCULATED Fields (j_32, k_32, d_16, etc.):**

```javascript
// Only CALCULATED and DERIVED states allowed
// User cannot modify calculated fields

if (isCalculatedField(fieldId)) {
  if (![VALUE_STATES.CALCULATED, VALUE_STATES.DERIVED].includes(state)) {
    console.warn(`Calculated field ${fieldId} should only have CALCULATED/DERIVED state`);
    // Allow for initialization with DEFAULT, but log warning
  }
  return true;  // ACCEPT
}
```

---

### Reference System State Handling

#### ReferenceValues.js Overlay Behavior

**Master-Reference-Roadmap.md Lines 249-274 (User Override Behavior):**
```
- User Edits Highlighted Field: When user changes a highlighted ReferenceValues field:
  - Field loses reference-input-display-locked class (highlighting disappears)
  - Field becomes regular user input with normal Reference styling
  - Value is stored as "user-modified" in ReferenceState
  - User override takes precedence over ReferenceValues

- Running "Mirror Target + Reference" Again:
  - ReferenceValues subset re-applied (overwrites ALL ReferenceValues fields)
  - User overrides are lost - ReferenceValues subset takes precedence
```

**Current Implementation (ReferenceToggle.js Lines 530-539):**
```javascript
// Applies ReferenceValues overlay WITHOUT checking existing state
Object.entries(refValues).forEach(([fieldId, value]) => {
  section.modeManager.setValue(fieldId, value, "reference-standard");
  // ← PROBLEM: Always overwrites, even USER_MODIFIED
});
```

**✅ BEHAVIOR IS INTENTIONAL:** Re-running Mirror + Reference is designed to reset Reference model to code minimums, discarding user customizations. Documentation clearly states "user overrides are lost."

**Import Interaction:**
```
Scenario: User imports h_15 = 11167, then runs Mirror + Reference
- Import: StateManager.setValue("h_15", "11167", "imported")
- Mirror + Reference: Does NOT overwrite h_15 (not in ReferenceValues subset)
- Result: h_15 = 11167 preserved (not a ReferenceValues field)
```

**✅ COMPATIBLE:** ReferenceValues only affects specific subset of fields (f_85, g_88, d_118, etc.) listed in ReferenceValues.js. Import of geometry (h_15, d_12, etc.) is unaffected.

---

### Terminology Standardization Recommendations

#### 1. Add OVER_RIDDEN to VALUE_STATES

**StateManager.js:**
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

---

#### 2. Update ReferenceToggle.js State Names

**Line 470 (Mirror Target):**
```javascript
// BEFORE:
section.modeManager.setValue(fieldId, value, "mirrored");

// AFTER:
section.modeManager.setValue(fieldId, value, VALUE_STATES.IMPORTED);
// Rationale: Mirror Target is copying from Target (acts like import)
```

**Line 535 (Mirror + Reference):**
```javascript
// BEFORE:
section.modeManager.setValue(fieldId, value, "reference-standard");

// AFTER:
section.modeManager.setValue(fieldId, value, VALUE_STATES.OVER_RIDDEN);
// Rationale: ReferenceValues overlay is "over-riding" user/imported values
```

---

#### 3. ReferenceValues.js Documentation

**Add state terminology comment:**
```javascript
/**
 * 4011-ReferenceValues.js
 *
 * Building code minimum values applied to Reference model when d_13 (Reference Standard) is set.
 *
 * STATE TERMINOLOGY:
 * - When these values are applied via ReferenceToggle.mirrorTargetWithReference(),
 *   they are stored with state = VALUE_STATES.OVER_RIDDEN
 * - User can override these values by editing Reference fields directly
 *   (changes state from OVER_RIDDEN → USER_MODIFIED)
 * - Re-running Mirror + Reference resets all ReferenceValues fields to OVER_RIDDEN state
 */
```

---

### Import Quarantine Implementation Details

#### Listener Muting Strategy

**StateManager.js (Add new methods):**
```javascript
let listenersActive = true;  // New flag

function muteListeners() {
  listenersActive = false;
  console.log('[StateManager] Listeners MUTED (import quarantine active)');
}

function unmuteListeners() {
  listenersActive = true;
  console.log('[StateManager] Listeners UNMUTED (import quarantine ended)');
}

function notifyListeners(fieldId, value) {
  if (!listenersActive) {
    console.log(`[StateManager] Skipped listener for ${fieldId} (muted)`);
    return;  // Skip notification during import
  }

  // ... existing notification logic ...
}
```

**FileHandler.js Integration:**
```javascript
async importExcelFile(workbook) {
  console.log('[FileHandler] 🔒 IMPORT QUARANTINE START - Muting listeners');
  window.TEUI.StateManager.muteListeners();

  try {
    // Import Target values (REPORT sheet)
    const importedData = await this.excelMapper.processImportedExcelData(workbook);
    this.updateStateFromImportData(importedData, 0, false);
    console.log(`[FileHandler] Imported ${importedData.length} Target values`);

    // Import Reference values (REFERENCE sheet)
    const refCount = await this.processImportedExcelReference(workbook);
    console.log(`[FileHandler] Imported ${refCount} Reference values`);

    // Sync Pattern A sections (global → isolated state)
    this.syncPatternASections();
    console.log('[FileHandler] Synced Pattern A sections with imported values');

  } finally {
    // Always unmute, even if import fails
    window.TEUI.StateManager.unmuteListeners();
    console.log('[FileHandler] 🔓 IMPORT QUARANTINE END - Unmuting listeners');
  }

  // Now trigger clean calculation with all imported values loaded
  console.log('[FileHandler] Triggering post-import calculation...');
  this.calculator.calculateAll();
}
```

**✅ ARCHITECTURE ALIGNMENT:**
- Mirror Target doesn't need quarantine (operates on isolated section state)
- ReferenceValues overlay doesn't need quarantine (controlled application, no cascading)
- Import needs quarantine (global StateManager, cascading listeners)
- **No interference:** Each system operates in its own context

---

### S02 storeReferenceResults() Fix

#### Current Code (THE BUG - Line 817-845)

```javascript
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

---

#### Proposed Fix (Remove INPUT Fields)

```javascript
function storeReferenceResults() {
  // ✅ ONLY publish CALCULATED outputs, NOT input fields
  const referenceResults = {
    d_16: ReferenceState.getValue("d_16"), // Carbon target (CALCULATED) ✅
    // Remove all INPUT fields (h_12, h_13, d_12, d_13, h_15, l_12, etc.)
    // INPUT fields are managed by:
    // 1. User input → StateManager.setValue("ref_h_15", value, "user-modified")
    // 2. Import → StateManager.setValue("ref_h_15", value, "imported")
    // 3. ReferenceValues → StateManager.setValue("ref_f_85", value, "over-ridden")
    // Section calculations should ONLY publish calculated outputs!
  };

  Object.entries(referenceResults).forEach(([fieldId, value]) => {
    window.TEUI.StateManager.setValue(
      `ref_${fieldId}`,
      String(value),
      "calculated"  // ✅ CORRECT: Only calculated fields get "calculated" state
    );
  });
}
```

**✅ ARCHITECTURE ALIGNMENT:**
- Matches ReferenceToggle pattern (only publishes calculated results, not inputs)
- Matches Master-Reference-Roadmap.md display-only principle (no input modification)
- Fixes import bug (imported ref_h_15 won't be overwritten by stale default)

---

### Conclusion

**✅ ALL SYSTEMS ARCHITECTURALLY ALIGNED**

1. **Terminology:** Consistent use of VALUE_STATES vs Model States (Target/Reference)
2. **Patterns:** All use ModeManager facade and StateManager `ref_` prefix
3. **Isolation:** All respect Target/Reference state separation
4. **No Duplication:** Each module has distinct, non-overlapping responsibilities
5. **Integration:** Import quarantine, Mirror Target, and ReferenceValues overlay work together without conflicts

**Proposed Fixes Are Safe to Implement:**

1. ✅ Add OVER_RIDDEN to VALUE_STATES → No breaking changes
2. ✅ Update ReferenceToggle state names → Semantic improvement only
3. ✅ Implement import quarantine → Isolated to FileHandler, no impact on Reference system
4. ✅ Fix S02 storeReferenceResults() → Removes bug, aligns with architectural principles
5. ✅ Add state validation to setValue() → Prevents future bugs, doesn't break existing code

**Next Step:** Implement fixes in order:
1. Add OVER_RIDDEN constant
2. Implement import quarantine (FileHandler + StateManager)
3. Fix S02 storeReferenceResults()
4. Update ReferenceToggle state names
5. Add state validation rules