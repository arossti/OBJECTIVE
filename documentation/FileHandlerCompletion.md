# File Handler Strategy & Implementation Status (Excel/CSV Import & CSV Export)

This document outlines the strategy and current implementation status for data import/export functionalities within the TEUI Calculator v4.011, and details a plan to address UI update issues observed during data import, with a view to leveraging these solutions for the Reference Model integration.

**Goal:**
1.  Allow users to import data from legacy Excel files (`.xlsx`/`.xls`) focusing on user inputs from the `REPORT!` sheet.
2.  Enable users to save/load scenarios locally via CSV export/import of user-editable fields.
3.  Ensure that UI elements (inputs, dropdowns, sliders) reliably reflect imported data.
4.  Apply these robust UI update mechanisms to the Reference Model system for dynamic display of standard values.

## 0. Core Challenge: UI Reactivity to State Changes (NEW SECTION)

A recurring challenge, observed both in testing CSV/Excel imports and in the development of the Reference Model, is ensuring that the web application's UI elements (input fields, dropdowns, sliders, etc.) consistently and accurately reflect changes in the underlying data managed by `TEUI.StateManager`.

*   **Symptom (Import):** When a CSV or Excel file is imported, `TEUI.StateManager` is updated with the new values (e.g., for `d_13` - Reference Standard). However, the corresponding dropdown on the screen does not visually change to the new imported value, nor do other UI elements like sliders or specific input fields always update their visual state.
*   **Symptom (Reference Model):** A similar issue exists where, upon entering Reference Mode or changing the selected reference standard (`d_13`), the `targetCell` UI elements in Section 11 (e.g., `f_85`, `g_88`) do not update to display the values of the newly selected standard, remaining "stuck" on the initial standard's values.
*   **Root Cause Hypothesis:** While `StateManager` holds the correct, updated data, the mechanism to propagate these changes to the visual layer (the HTML elements) is either incomplete or not firing correctly for all types of UI elements. `TEUI.FieldManager` is intended to handle this, but its current implementation may need enhancement.

This document now includes a plan to address this core UI reactivity issue, drawing lessons from successful implementations in other contexts (e.g., `SANKEY3035.html`).

## 1. UI Integration (`index.html`) - *To Be Implemented*

-   [ ] Modify the existing "Download Report" button into a Bootstrap dropdown button group.
-   [ ] Add menu item: "Import Data (Excel/CSV)" linked to trigger the hidden file input (`id="excel-file-input"`). Assign `id="import-data-btn"` to this menu item.
-   [ ] Add menu item: "Export Data (CSV)" linked to trigger the `TEUI.FileHandler.exportToCSV()` function. Assign `id="export-data-btn"` to this menu item.
-   [ ] Keep/Update "Download Report (PDF)" menu item.
-   [ ] Hide or remove the old standalone `import-excel` and `export-excel` buttons if they exist.

## 2. File Handling Logic (`4011-FileHandler.js`) - *Partially Implemented*

### 2.1. Import Process

-   **`handleFileSelect(event)`:** *Implemented*
    -   Accepts `.xlsx`, `.xls`, `.csv`.
    -   Reads file using `FileReader` (`readAsArrayBuffer`).
    -   Detects file type based on extension.
    -   Dispatches to `processImportedExcel` or `processImportedCSV`.
    -   Resets file input value after processing.

-   **`processImportedExcel(workbook)`:** *Implemented*
    -   Requires `TEUI.ExcelMapper`.
    -   Calls `TEUI.ExcelMapper.mapExcelToReportModel(workbook)` to get user-editable data from `REPORT!` sheet.
    -   Handles null return (sheet not found error).
    -   Handles empty data scenario.
    -   Calls `updateStateFromImportData(importedData)`.

-   **`processImportedCSV(csvString)`:** *Implemented (Basic Parser)*
    -   Parses CSV string (simple split, assumes no complex quoting/escaping - **TODO:** Enhance parser if needed).
    -   Expects `fieldId` and `value` columns (validates header).
    -   **Includes logic to skip Section 03 climate fields (e.g., `m_19`, `l_22`) during import.**
    -   Builds `importedData` object.
    -   Calls `updateStateFromImportData(importedData)`.

-   **`updateStateFromImportData(importedData, csvSkippedCount)`:** *Implemented (Core logic for StateManager update is sound, but **NEEDS ENHANCEMENT TO TRIGGER VISUAL UI UPDATES**)*
    -   Requires `TEUI.StateManager` and `TEUI.FieldManager`.
    -   Iterates through imported `{ fieldId: value }` pairs.
    -   Uses `FieldManager.getField(fieldId)` to check existence and type.
    -   Parses/validates `value` based on `fieldDef.type` (using `window.TEUI.parseNumeric` for numbers/sliders, checking dropdown options).
    -   Handles invalid/unknown fields by logging warnings and skipping.
    -   Updates `StateManager` using `setValue(fieldId, parsedValueString, 'imported')` for valid data.
    -   **CRITICAL GAP:** After `StateManager.setValue()`, there's no explicit, robust mechanism ensuring the corresponding HTML element (input, select, slider) visually updates. This is where the "stuck values" on import originate.
    -   Triggers `TEUI.Calculator.calculateAll()` after processing.
    -   Provides summary feedback via `showStatus()`.

### 2.2. Export Process

-   **`exportToCSV()`:** *Implemented (Basic)*
    -   **Focus:** Exports the *current values* of all *user-editable* fields into a CSV format that mirrors the structure of reference files like `FORMULAE-3037.csv` and `3037DOM.csv`.
    -   Initializes CSV content string with header: `"ExcelRow","RowID","Description","FieldID","Value","Units"\n`.
    -   Gets all field definitions: `const allFields = TEUI.FieldManager.getAllFields();`.
    -   Filters for user-editable fields: `const editableFields = Object.entries(allFields).filter(([id, def]) => def.type === 'editable');`.
    -   Iterates through `editableFields`:
        -   For each `[fieldId, fieldDef]`:
            -   **Determine Layout Info:** Requires logic to map `fieldId` (e.g., `d_15`) back to its section, Excel row number (`15`), column letter (`d`), Row ID (`S.3`), Description (`Carbon Benchmarking Standard`), and Units (`/kWh`). This likely involves searching through the `sectionRows` definitions loaded by `FieldManager`.
            -   Get current value: `const currentValue = window.TEUI.StateManager.getValue(fieldId);`.
            -   Format CSV row: `excelRow,rowId,description,fieldId,value,units`. Ensure proper CSV escaping.
            -   Append the formatted row string.
        -   Create Blob and trigger download as `TEUI_Data_Export.csv`.
    -   Updates UI feedback via `showStatus()`.
    -   **Note:** Implementing the lookup for `ExcelRow`, `RowID`, `Description`, and `Units` based on `fieldId` adds complexity compared to only exporting `fieldId` and `value`. This requires careful implementation in `exportToCSV`. The current implementation attempts this and seems to produce the desired CSV structure.

### 2.3. Event Listeners & Helpers

-   **`setupEventListeners()`:** *Implemented*
    -   Connects UI buttons (`import-data-btn`, `export-data-btn`) to corresponding handler functions.
    -   Hides old buttons.
    -   Keeps climate-related button listeners (potentially for `ExcelLocationHandler`).
-   **`showStatus()`:** *Implemented* (Provides UI feedback).
-   **`applyImportedData()`:** *Retained* (May be redundant now, was tied to old climate import flow).
-   **Legacy Methods:** `exportToExcel`, `fallbackCreateWorkbook`, `binaryStringToBlob` retained for potential future use but are not part of the primary CSV workflow.

## 3. Mapping Logic (`4011-ExcelMapper.js`) - *Partially Implemented*

-   **Syntax Errors:** *Fixed*.
-   **`excelReportInputMapping`:** *Defined (Substantially Populated, but needs final review against Excel v3.037/3.038 `REPORT!` sheet for completeness of user-editable fields).*
    -   Object structure is in place.
    -   **Requires:** Populating with all correct `REPORT!CellRef` -> `fieldId` mappings for user-editable fields based on v3.037.
-   **`mapExcelToReportModel(workbook)`:** *Implemented*
    -   Correctly targets the `REPORT!` sheet.
    -   Uses `excelReportInputMapping`.
    -   Returns `{ fieldId: value }` object or `null` on error.
-   **Helper Functions:** `extractCellValue`, `cellRefToColRow` retained and functional.
-   **Units/Description Source (Export):** Relying on data structured within `sectionRows` requires diligent setup across all section files but keeps data definitions co-located.
-   **Invalid Dropdown Values (Import):** Strategy is to **skip** invalid fields and log a console warning.
-   **CSV Parsing (Import):** Implement a simple parser focusing on extracting the `FieldID` and `Value` columns. Robustness for complex CSVs might need future enhancement.
-   **CSV Export Format:** The target format (`ExcelRow`,`RowID`,`Description`,`FieldID`,`Value`,`Units`) provides user context and aligns with reference CSVs (`FORMULAE-3037.csv`, `3037DOM.csv`), but requires mapping logic during export generation.
-   **Excel v3.038 Parity:** For complete structural alignment with the latest Excel version (v3.038), ensure the following fields/labels are correctly represented in the relevant section's `sectionRows` definition and reflected in `3037DOM.csv`:
       -   Row 22: `L.1.3` (J22), `Elevation (ASL)` (K22), Value `l_22` (L22) - *Note: Value likely comes from weather data, not user import.*
       -   Row 24: `B.1.4` (J24), `Cooling Override` (K24), Value `l_24` (L24) - *Note: Value may come from weather data/defaults, check if user-editable import is needed.*
       -   Row 120: `V.1.7` (J120), Value `k_120` (K120), `Unoccupied Setback` (L120).
       -   Row 129: Ensure label `T.5.2 less Free Cool. & Vent. Exhaust` is in J129, Value `m_129` is in M129.
       -   *(This ensures the exported CSV structure fully matches the reference Excel layout, even for calculated fields or fields populated by other means).*
-   **Error Handling:** Provide clear user feedback via `showStatus()` for file read errors, sheet not found errors, CSV parsing errors, and potentially a summary of skipped fields due to validation issues.

## 4. Field & Layout Definitions (`sections/4011-SectionXX.js`) - *Requires Review*

-   [ ] Review all core sections (01-15).
-   [ ] Ensure all user-editable fields have `type: 'editable'`. (Most seem correct, but requires systematic check).
-   [ ] Ensure `sectionRows` contain accurate description labels (Column C) and unit strings (Column E/I/M) for all editable fields to support CSV export fully.

## 5. Key Decisions & Considerations (Updated)

-   **Import State:** Using `'imported'` state in `StateManager` is confirmed.
-   **Invalid Dropdown Values (Import):** Strategy is to **skip** invalid fields and log a console warning. This is sound.
-   **CSV Parsing:** Using a simple built-in parser. Robustness for complex CSVs might need future enhancement. Current parser correctly skips climate section fields.
-   **CSV Export Scope:** Currently exports user-interactable fields (editable, dropdown, sliders, etc.) along with layout metadata. This is the desired behavior.
-   **UI Update Post-Import:** **THIS IS THE PRIMARY AREA FOR DEVELOPMENT.** The system must ensure that after `StateManager` is updated with imported values, the corresponding HTML UI elements visually reflect these new values.

## 6. Learnings from `SANKEY3035.html` for UI Updates (NEW SECTION)

The standalone `future code/SANKEY3035.html` page demonstrates effective UI updates after data import. Key techniques include:

*   **Direct Value Setting for Inputs:** For standard HTML input elements (`<input type="text/number">`), their `.value` property is directly set to the new imported value.
    *   Example: `document.getElementById(inputId).value = newValue;`
*   **Direct Value Setting & Event Dispatch for Dropdowns:** For HTML select elements (`<select>`), their `.value` property is set, and then a `change` event is programmatically dispatched to ensure any associated event listeners are triggered (which might update other parts of the UI or perform calculations).
    *   Example:
        ```javascript
        const selectElement = document.getElementById(selectId);
        selectElement.value = newValue;
        selectElement.dispatchEvent(new Event('change', { bubbles: true }));
        ```
*   **Re-rendering or Explicit Refresh of Complex Controls:** For more complex UI elements (like the tables of sliders in Sankey), the controls are often re-initialized or their display is explicitly refreshed *after* the underlying data has been updated. This ensures they are built using the latest state.
*   **Centralized State Management:** While Sankey has its own `StateManager`, the principle is that UI elements derive their state from this central source, and updates flow from the state to the UI.

## 7. Revised Implementation Plan: Robust UI Updates & Reference Model Integration (NEW SECTION)

This plan focuses on fixing the UI update issue first, then applying it broadly.

### Phase A: Robust UI Updates for CSV Import

**Goal:** Ensure that when a CSV file is imported, all corresponding UI elements (text inputs, dropdowns, sliders) in the TEUI Calculator visually reflect the imported values.

*   **A1: Enhance `FieldManager` for Explicit UI Updates**
    *   **Action:** Create or enhance a function within `TEUI.FieldManager`, let's call it `updateFieldDisplay(fieldId, newValue)`.
    *   This function will:
        *   Get the HTML element for `fieldId`.
        *   Get the `fieldDef` for `fieldId`.
        *   Based on `fieldDef.type`:
            *   **'editable', 'number', 'year_slider', 'percentage', 'coefficient':** Set `element.value = newValue;`.
            *   **'dropdown':** Set `element.value = newValue;`. Then, `element.dispatchEvent(new Event('change', { bubbles: true }));`.
            *   **Slider types (if distinct from above):** Determine how TEUI sliders are structured (e.g., an `<input type="range">` plus a display `<span>` or `<input type="number">`). Set the `.value` for all relevant parts. Consider dispatching an `input` or `change` event on the primary range input.
    *   **Integration:** In `4011-FileHandler.js`, within `updateStateFromImportData`, after `this.stateManager.setValue(fieldId, parsedValue, 'imported');` and after confirming the value was set successfully, call `TEUI.FieldManager.updateFieldDisplay(fieldId, parsedValue);`.
*   **Testing A1:**
    *   Import the provided `TEUIv4011-Three_Feathers_Terrace (7).csv`.
    *   Verify that simple text inputs (e.g., `h_14` Project Name, `h_15` Conditioned Area) update correctly.
    *   Verify that dropdowns (e.g., `d_12` Major Occupancy, `d_13` Reference Standard) visually change to the imported values AND that any UI changes or calculations normally triggered by changing these dropdowns manually also occur.
    *   Identify any slider fields in the CSV and verify they update visually and functionally. If direct import to sliders isn't fully mapped, note for A2.

*   **A2: Refine and Test Sliders and Complex Fields**
    *   **Action:** Based on A1 testing, specifically address any slider UIs or other complex field types that did not update correctly. This may involve more specific DOM manipulation within `updateFieldDisplay` for those types.
*   **Testing A2:** Rigorously test import for all user-editable field types that have a UI representation.

### Phase B: Apply to Excel Import

**Goal:** Ensure robust UI updates also occur when importing data from Excel files.

*   **Action:** The enhancements from Phase A (primarily the call to `TEUI.FieldManager.updateFieldDisplay` from within `updateStateFromImportData`) should automatically benefit Excel imports as `processImportedExcel` also calls `updateStateFromImportData`.
*   **Testing B:**
    *   Prepare a test Excel file (based on `REPORT!` sheet structure from `excelReportInputMapping`).
    *   Import the Excel file.
    *   Verify that all corresponding UI elements (inputs, dropdowns, sliders) update visually and functionally.
    *   **Action (If Needed):** Complete populating `excelReportInputMapping` in `4011-ExcelMapper.js` if further testing reveals missing mappings for user-editable fields.

### Phase C: Integration with Reference Model UI

**Goal:** Leverage the robust UI update mechanism to fix the "stuck values" problem in Reference Mode.

*   **Action:**
    *   Identify the point in `4011-ReferenceToggle.js` or `StateManager` where the active reference standard changes and new reference values are loaded into `StateManager.state.referenceValuesState`.
    *   After these reference values are determined and notionally "set" for the `targetCell` field IDs (e.g., `f_85`, `g_88`):
        *   For each `targetCell` that should display a reference value:
            *   Retrieve the reference value (which `StateManager.getValue(fieldId)` should now return when in Reference Mode, as per `deepstate-structure.md` Phase 2).
            *   Call the enhanced `TEUI.FieldManager.updateFieldDisplay(targetCellFieldId, referenceValue);`.
        *   Additionally, `FieldManager` (or `ReferenceToggle`) will need to apply/remove the `.reference-value-locked` CSS class and `contenteditable='false'` attribute as planned in `deepstate-structure.md` Phase 3. The `updateFieldDisplay` could potentially handle this styling aspect too, if passed a "mode" flag (Design vs. Reference).
*   **Testing C:**
    *   Enter Reference Mode. Verify Section 11 `targetCell`s display initial standard's values and are styled/locked.
    *   Change the selected reference standard via `d_13`.
    *   Verify Section 11 `targetCell`s update to the new standard's values, M/N columns update, and styling/locking remains correct.
    *   Verify all other application sections continue to work as expected.

### Phase D: Final Review and Documentation Update (NEW)

*   **Action:** Review all changes, ensure code clarity, remove any temporary logging.
*   **Action:** Update any relevant inline code comments and ensure this `FileHandlerCompletion.md` document accurately reflects the final implementation.
*   **Testing D:** Full regression test of import (CSV & Excel) and Reference Mode functionality.

## 8. Original Implementation Progress & Next Steps (Formerly Section 6 - Merged & Updated)

Many original "NEXT" items are addressed by the new phased plan. This section is revised for clarity.

*   **DONE:** Strategy defined.
*   **DONE:** Syntax errors in `ExcelMapper.js` fixed.
*   **DONE:** Core import/export functions (`handleFileSelect`, `processImportedExcel`, `processImportedCSV`, `updateStateFromImportData`, `exportToCSV`) implemented in `FileHandler.js` (though `updateStateFromImportData` needs UI trigger enhancement).
*   **DONE:** Specific Excel mapping function (`mapExcelToReportModel`) created in `ExcelMapper.js` (mapping itself needs final review).
*   **NEXT (Covered by Phased Plan Above):**
    *   Robust UI updates for CSV/Excel import (Phase A, B).
    *   Application of UI update mechanisms to Reference Mode (Phase C).
*   **OUTSTANDING (from original list, to be reviewed post-Phases A-C):**
    *   Update `index.html` to add the Import/Export menu items (Section 1). (Can be done early, or after Phase B).
    *   Full population and verification of `excelReportInputMapping` in `ExcelMapper.js` (Can be done during Phase B testing).
    *   Systematic review of `sectionRows` in all section files for CSV export description/units completeness (Low priority, as export is largely functional).
    *   Review/Refactor `applyImportedData()` (old climate import) and climate-related button handlers if they are still present and potentially redundant.
    *   Full structural parity checks for `sectionRows` against Excel v3.038 (Low priority).
    *   Enhance CSV parser for complex cases (Future, if required).

This updated plan provides a more granular approach, prioritizing the core UI update functionality that will benefit both file imports and the Reference Model. 