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
-   **Invalid Dropdown Values (Import):** Strategy is to **skip** invalid fields and log a console warning. This is sound for most fields, but problematic for dependent dropdowns like climate city/province if not handled in sequence (see Section 7.1).
-   **CSV Parsing:** Using a simple built-in parser. Robustness for complex CSVs might need future enhancement.
-   **CSV Export Scope:** Currently exports user-interactable fields (editable, dropdown, sliders, etc.) along with layout metadata. Section 03 fields were briefly included and then removed from export to simplify import logic.
-   **UI Update Post-Import:** **THIS IS THE PRIMARY AREA FOR DEVELOPMENT.** The system must ensure that after `StateManager` is updated with imported values, the corresponding HTML UI elements visually reflect these new values and that any dependent logic (like `onchange` events) is triggered.

## 6. Learnings from `SANKEY3035.html` for UI Updates (No Change from previous version of this section)

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

## 7. The "55555" CSV Import Study & Findings (NEW SECTION)

A test CSV file (`documentation/TEUIv4011-55555.csv`) was created where most user-editable values were set to variations of "5" (e.g., 555, 55.5, 55%). This file was imported into the system to observe the behavior of the import process and UI updates.

**Key Findings:**

1.  **`StateManager` Updated, Calculations Reflect Changes:**
    *   Logs and TEUI/TEDI calculations confirmed that `StateManager` was indeed updated with the imported "555" values. Calculations dependent on these values (e.g., Section 11 losses based on imported areas/U-values) used the new data. This indicates the data parsing and `StateManager.setValue()` parts of the import are fundamentally working.

2.  **Inconsistent UI Visual Updates (The "Secret" Application):**
    *   Many UI elements did **not** visually update to reflect the imported "555" values, even though `StateManager` held these values. This is the "secret" application of data—correct in the backend, incorrect in the frontend.
    *   **Example (Failure):** Window Areas (e.g., `d_74` in Section 10). The UI in Section 10 continued to show the default area (e.g., 81.14 m²). However, calculations in Section 11 *used* the imported 555 m² for `d_74`, demonstrating the UI-State desynchronization.
    *   **Example (Success - KWW):** Window U-Values (e.g., `g_89`, `g_90` etc. in Section 11). If a U-value was manually changed to 0.5, exported, and then re-imported, the UI input field in Section 11 correctly displayed "0.5". This is a key "Know What Works" (KWW) case. We need to understand the `fieldDef.type` and rendering for `g_89` to replicate this success.
    *   **Dropdowns Not Updating:** Dropdown fields (e.g., `d_113` Primary Heating System, `d_51` DHW Energy Source, which were set to "Oil" in the CSV) did not visually change from their default "Heatpump" selection in the UI. This confirms the "robofinger" (programmatic event dispatch) is not yet effective for dropdowns.

3.  **Climate Data (Section 03) Import Issues & Decision:**
    *   The attempt to import Section 03 values (like Province `d_19` = "ON", City `h_19` = "Attawapiskat") via the "55555.csv" resulted in console warnings: `"Skipping import for field d_19: Invalid value "ON" for type dropdown."`
    *   This was due to the CSV import validation logic in `FileHandler.js` (`updateStateFromImportData`) not correctly handling dependent dropdowns (City depends on Province).
    *   **Decision:** Given the plan to refactor Section 03 to use JSON for weather data, and to simplify the immediate task of fixing general import UI updates, **Section 03 fields will be explicitly skipped during CSV import for now.** `ExcelLocationHandler.js` remains the dedicated mechanism for loading full climate datasets.

4.  **Conclusion from Study:**
    *   The primary challenge is the reliable propagation of `StateManager` changes to the visual UI elements.
    *   A universal approach to updating different types of UI elements (`input`, `contenteditable`, `select`, sliders) is needed within `FieldManager.updateFieldDisplay()`.
    *   The successful update of U-value field `g_89` provides a positive pattern to analyze and replicate.

## 8. Revised Implementation Plan: Universal UI Updates (Formerly Section 7)

This plan prioritizes creating a robust and universal UI update mechanism. Sections 10 and 11 will be initial focus areas due to their mix of input types.

### Phase A: Mastering UI Updates (`FieldManager.updateFieldDisplay`)

**Goal:** Ensure `TEUI.FieldManager.updateFieldDisplay(fieldId, newValue, fieldDef)` reliably updates the UI for all relevant field types.

*   **A1: Revert Section 03 CSV Import (Code Change)**
    *   **Action:** Modify `processImportedCSV` in `4011-FileHandler.js` to reinstate skipping of Section 03 fields (e.g., those matching `_19` to `_24` pattern or by `fieldDef.sectionId === 'sect03'`). This will prevent validation errors for climate dropdowns and allow focus on general UI update mechanisms.
    *   **Testing:** Confirm CSV imports no longer attempt to process S03 fields and no related warnings appear.

*   **A2: Analyze KWW - U-Value Field `g_89` (Investigation)**
    *   **Action:**
        1.  Examine `getFields()` in `sections/4011-Section11.js` to find the `fieldDef` for `g_89` (and similar U-value fields like `g_88`, `g_90`-`g_93`). Note its `type` (e.g., 'editable', 'number').
        2.  Examine `getLayout()` in `sections/4011-Section11.js` to see how `g_89` is rendered (e.g., as an `<input type="number">` or a `contenteditable` `<td>`).
        3.  Trace how the current `FieldManager.updateFieldDisplay` successfully updates its visual display. This working path needs to be understood and generalized.

*   **A3: Fix Input Fields (Text, Number, `contenteditable`)**
    *   **Target:** Fields like `d_74` (Window Area in S10 UI), `f_85` (Roof RSI in S11 UI).
    *   **Action:** Based on findings from A2:
        *   Ensure `updateFieldDisplay` correctly targets the input element (which might be the `<td>` itself if `contenteditable`, or an `<input>` child).
        *   If `element.value` is appropriate (for `<input>`), set it.
        *   If `element.textContent` is appropriate (for `contenteditable`), set it. **Crucially, after setting `textContent` for a `contenteditable` field that users can type into, dispatch a `blur` event:** `element.dispatchEvent(new Event('blur', { bubbles: true }));` This helps ensure that any logic tied to the user finishing an edit is triggered.
    *   **Goal:** All simple input fields should reliably update their visual display. Test with "55555.csv" – `d_74` in S10 UI should show "555", `f_85` in S11 UI should show "55".

*   **A4: Fix Dropdown Fields (The "Robofinger")**
    *   **Target:** `d_113` (Primary Heating), `d_51` (DHW Source), `d_12` (Major Occupancy), etc.
    *   **Action:**
        1.  In `updateFieldDisplay`, for `case 'dropdown'`, ensure the `element` variable correctly references the `<select>` HTML element itself. This likely means changing from `document.getElementById(fieldId)` to `document.querySelector(\`select[data-field-id='${fieldId}']\`)` or `document.querySelector(\`td[id='${fieldId}'] select\`)`. (The former is better if `<select>` has `data-field-id`).
        2.  Confirm `element.value = newValue;` sets the selection.
        3.  Ensure `element.dispatchEvent(new Event('change', { bubbles: true }));` effectively triggers the dropdown's `onchange` listeners and any dependent UI updates (e.g., showing/hiding HSPF vs. AFUE inputs when heating system changes).
    *   **Goal:** Dropdowns visually change to imported values, and their dependent logic fires. Test with "55555.csv" – `d_113` and `d_51` should show "Oil".

*   **A5: Fix Slider Fields**
    *   **Target:** Fields like `d_118` (HRV/ERV SRE).
    *   **Action:**
        1.  Examine `initializeSliders` in `FieldManager.js` to understand the exact HTML structure created (e.g., an `<input type="range">` and often a separate `<span>` for numeric display).
        2.  In `updateFieldDisplay`, for slider types, add logic to:
            *   Find the actual `<input type="range">` element associated with `fieldId`.
            *   Find its associated numeric display `<span>` (e.g., by a class like `slider-value` relative to the range input).
            *   Set `rangeInput.value = newValue;`.
            *   Update `displaySpan.textContent` (formatted appropriately, e.g., with '%').
            *   Dispatch an `input` event on the `rangeInput`: `rangeInput.dispatchEvent(new Event('input', { bubbles: true }));` to mimic user interaction and trigger any input event listeners.
    *   **Goal:** Sliders visually reflect imported values. Test with `d_118` from "55555.csv" (value 55).

### Phase B: Comprehensive Testing & Refinement (No change from previous plan)

*   Test CSV import thoroughly using "55555.csv" and other diverse test files, focusing on Sections 10 and 11 initially, then expanding to all sections.
*   Test Excel import to ensure the UI update mechanism works there as well.

### Phase C: Integration with Reference Model UI (No change from previous plan)
(Details as previously outlined)

### Phase D: Final Review and Documentation Update (No change from previous plan)
(Details as previously outlined)

## 9. Original Implementation Progress & Next Steps (Formerly Section 8 - Minor Update)

Many original \"NEXT\" items are addressed by the new phased plan. This section is revised for clarity.

*   **DONE:** Strategy defined.
*   **DONE:** Syntax errors in `ExcelMapper.js` fixed.
*   **DONE:** Core import/export functions (`handleFileSelect`, `processImportedExcel`, `processImportedCSV`, `updateStateFromImportData`, `exportToCSV`) implemented in `FileHandler.js` (though `updateStateFromImportData` and `FieldManager` need UI update enhancements as per Phased Plan).
*   **DONE:** Specific Excel mapping function (`mapExcelToReportModel`) created in `ExcelMapper.js` (mapping itself needs final review).
*   **DONE:** Weather file import routing fixed to use `ExcelLocationHandler`.
*   **IN PROGRESS (Covered by Phased Plan Above):**
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

# File Import, UI Reactivity, and Universal Field Handling Plan

This document details the findings from CSV import tests (specifically the "55555 Study"), discusses related UI update bugs (e.g., ACH and AFUE field display/behavior), and outlines a refined, universal strategy for ensuring UI elements robustly reflect `StateManager` data in the TEUI Calculator. This plan aims to address issues for both data import and the Reference Model.

## 1. The "55555" CSV Import Study & Related UI Bug Findings

A test CSV file (`documentation/TEUIv4011-55555.csv`) was created where most user-editable values were set to variations of "5" (e.g., 555, 55.5, 55%). This file was imported to observe the import process and UI updates.

**Key Findings from "55555 Study":**

1.  **`StateManager` Correctly Updated, Calculations Reflect Changes:**
    *   Logs and overall application calculations (TEUI, TEDI, Section 11 component losses) confirmed that `StateManager` was indeed being updated with the imported "555" values. This indicates that the data parsing (`processImportedCSV`) and the core `StateManager.setValue()` parts of the import process are fundamentally working for the data layer.

2.  **Inconsistent UI Visual Updates (The "Secret" Application):**
    *   A significant number of UI elements did **not** visually update to reflect the imported "555" values, even though `StateManager` held the correct data. This was termed the "secret" application of data—correct in the backend data model, but incorrect or stale in the frontend visual representation.
    *   **Example (Failure - `contenteditable` `<td>`):** Window Areas (e.g., `d_74` in Section 10). The UI cell in Section 10 continued to show its default area (e.g., 81.14 m²). However, calculation logs for Section 11 confirmed that it *used* the imported 555 m² value for `d_74` (as `d_74` is the source for the S11 window area `d_89`), clearly demonstrating the UI-State desynchronization.
    *   **Example (Success - KWW - `contenteditable` `<td>`):** Window U-Values (e.g., `g_89`, `g_90` etc. in Section 11). If a U-value was manually changed to 0.5, exported, and then re-imported, the `contenteditable` `<td>` UI element in Section 11 correctly displayed "0.500". This became a key "Know What Works" (KWW) case. Analysis showed these fields have `type: "editable"` in `sectionRows` and `FieldManager.updateFieldDisplay` was successfully setting their `textContent`.
    *   **Dropdowns Not Updating Visually or Functionally:** Dropdown fields (e.g., `d_113` Primary Heating System, `d_51` DHW Energy Source, which were set to "Oil" in the "55555.csv") did not visually change from their default "Heatpump" selection in the UI, nor did their dependent UI (like showing AFUE input for "Oil") update. This confirmed the "robofinger" (programmatic event dispatch for `change` events) was not yet effective or correctly targeted.

3.  **Climate Data (Section 03) Import Issues & Decision:**
    *   The attempt to import Section 03 values (like Province `d_19` = "ON", City `h_19` = "Attawapiskat") via the "55555.csv" initially resulted in console warnings: `\"Skipping import for field d_19: Invalid value \"ON\" for type dropdown.\"`
    *   This was due to the CSV import validation logic in `FileHandler.js` (`updateStateFromImportData`) not correctly handling dependent dropdowns (City options depend on the selected Province, and the validation was likely checking the child before the parent's `change` event could repopulate options).
    *   **Decision:** Given the plan to refactor Section 03 to use JSON for weather data, and to simplify the immediate task of fixing general import UI updates, **Section 03 fields will be explicitly skipped during CSV import.** `ExcelLocationHandler.js` remains the dedicated mechanism for loading full climate datasets. This was implemented by reinstating the skip logic in `processImportedCSV`.

**Related UI Bug Insights (e.g., `l_118` ACH & `j_115` AFUE in Section 13):**

*   **`l_118` (ACH):** Was observed to display "0" in the UI instead of its defined default of "3". User changes to this "0" in the UI did not affect ventilation calculations. This pointed to issues with:
    1.  Initial default value display.
    2.  The link between UI edit -> `StateManager` update -> calculation engine.
    *   *Fix Attempted:* `onSectionRendered` in `4011-Section13.js` was updated to ensure `l_118`'s default is set in `StateManager` and its UI `textContent` is explicitly updated after initial calculations.
*   **`j_115` (AFUE):** Previously exhibited similar issues (showing "0", incorrect formatting). Its fix involved ensuring the `defaultValue` ("0.98") was correctly specified in `sectionRows` and that the `onSectionRendered` logic in Section 13 explicitly updated its `textContent` from `StateManager` after initial calculations. This serves as a pattern.

**Overall Conclusion from Study & Bug Analysis:**

*   The primary challenge is ensuring a **reliable, universal, and consistent mechanism for synchronizing `StateManager` data with the visual UI elements** across all field types (`contenteditable` cells, `<input type="number">`, `<select>` dropdowns, and sliders).
*   This synchronization needs to happen:
    *   During initial application load (displaying defaults or loaded state).
    *   After user edits in the UI.
    *   After programmatic changes to `StateManager` (e.g., via data import or Reference Model standard changes).
*   The successful UI update of `g_89` (U-Value) and the fix for `j_115` (AFUE) provide positive patterns: direct `textContent` update for `contenteditable` cells, and careful handling of default value propagation.
*   A more systematic approach is needed than ad-hoc fixes within each section module. `FieldManager.updateFieldDisplay` should be the central function for programmatic UI updates.

## 2. Revised Implementation Plan: Towards Universal UI & Data Handling

This plan prioritizes creating a robust and universal UI update mechanism. It aims to bring order to how fields are defined, initialized, displayed, and updated.

### Phase A.0: Systemic Review & Standardization of Editable Fields (NEW PRELIMINARY STEP)

**Goal:** Understand and standardize the definition, rendering, and event handling of all user-interactive fields.

*   **Action:**
    1.  **Survey Field Definitions:** Systematically review `sectionRows` in key sections (e.g., S10, S11, S13, and others with user inputs). For each field that users can edit:
        *   Document its `fieldId`, intended `type` (e.g., text input, numeric input, dropdown, slider), `defaultValue`.
        *   Note how it's currently rendered by `FieldManager.generateSectionContent` (e.g., `contenteditable <td>`, `<input type="number">`, `<select>`).
    2.  **Standardize `type` Usage:** Ensure the `type` property in `sectionRows` cell definitions is used consistently (e.g., `type: "editable"` for general text/numeric `contenteditable` cells, `type: "number"` specifically for `<input type="number">` if distinct behavior is needed, `type: "dropdown"`, `type: "percentage"` for sliders, etc.).
    3.  **Event Handling for User Edits:** Review how `blur`, `keydown`, `change`, `input` events are attached for these user-editable fields in each section's `initializeEventHandlers`. Aim for a consistent pattern that reliably updates `StateManager` with `priority: 'user-modified'`. The `handleEditableBlur` in S13 is a good starting point for `contenteditable` fields.

### Phase A: Mastering UI Updates (`FieldManager.updateFieldDisplay`)

**Goal:** Ensure `TEUI.FieldManager.updateFieldDisplay(fieldId, newValue, fieldDefFromManager)` reliably updates the UI for all relevant field types, making it the primary mechanism for programmatic UI changes.

*   **A1: Default Value Propagation & Initial UI "Paint" (Critical Prerequisite)**
    *   **Action (Global):** Implement a robust, global mechanism (potentially in `TEUI.init.js` after all sections are rendered, or as a final step in `FieldManager.renderAllSections`) that iterates through *all* fields defined in `FieldManager.getAllFields()`:
        1.  For each field, if `StateManager.getValue(fieldId)` is `null` (meaning no user or imported state exists), set its `defaultValue` (from `fieldDef.defaultValue`) into `StateManager` with `priority: 'default'`.
        2.  After `StateManager` is fully initialized with defaults (or loaded data), iterate through all fields again and call `TEUI.FieldManager.updateFieldDisplay(fieldId, TEUI.StateManager.getValue(fieldId), fieldDef)` for *every field that has a UI element*. This ensures the initial UI accurately reflects the initial state.
    *   **Testing:** On app load, all fields should display their correct defaults or previously saved user/imported values. Test `l_118` (ACH) specifically to ensure it shows "3" by default due to this mechanism.

*   **A2: Analyze KWW - U-Value Field `g_89` (Re-verify)**
    *   **Action:** Confirm `fieldDef.type` for `g_89` (likely "editable"). Confirm `updateFieldDisplay`'s `textContent` update is what makes its UI refresh correctly after import.

*   **A3: Robustly Update Input Fields (Text, Number, `contenteditable`)**
    *   **Target:** `d_74` (S10 Area), `f_85` (S11 RSI), `l_118` (S13 ACH), `j_115` (S13 AFUE).
    *   **Action (in `updateFieldDisplay`):**
        *   For `type: "editable"` (rendered as `contenteditable <td>`):
            *   Ensure `element = document.getElementById(fieldId)` correctly gets the `<td>`.
            *   Set `element.textContent = formattedNewValue;` (use `TEUI.formatNumber` appropriately).
            *   **Dispatch `blur` event:** `element.dispatchEvent(new Event('blur', { bubbles: true }));` This is critical to mimic user completion and trigger any validation/formatting logic in the section's `handleEditableBlur`.
        *   For `type: "number"` (rendered as `<input type="number">`):
            *   Ensure `element = document.querySelector(\`input[data-field-id='${fieldId}']\`)` (or similar robust selector) gets the `<input>`.
            *   Set `element.value = formattedNewValue;`.
            *   Dispatch `change` event: `element.dispatchEvent(new Event('change', { bubbles: true }));` (or `input` if more appropriate for the field's listeners).
    *   **Goal:** These fields visually update correctly after CSV import. `d_74` shows "555.00", `l_118` shows "3.00" (from its default after the "55555.csv" import if "3" was its value in the CSV).

*   **A4: Fix Dropdown Fields (The "Robofinger")**
    *   **Target:** `d_113` (Heating System), `d_51` (DHW Source), `d_12` (Major Occupancy).
    *   **Action (in `updateFieldDisplay` for `case 'dropdown'`):**
        1.  Ensure `element` correctly references the `<select>` HTML element (e.g., `document.querySelector(\`select[data-field-id='${fieldId}']\`)`).
        2.  Set `selectElement.value = newValue;`.
        3.  Dispatch `change` event: `selectElement.dispatchEvent(new Event('change', { bubbles: true }));`.
    *   **Goal:** Dropdowns visually change to imported values (e.g., "Oil"), and their dependent UI/logic (like AFUE input appearing) triggers.

*   **A5: Fix Slider Fields**
    *   **Target:** `d_118` (HRV/ERV SRE), `f_113` (HSPF).
    *   **Action (in `updateFieldDisplay` for `type: 'percentage'`, `type: 'coefficient'`, etc.):**
        1.  Logic to find the `<input type="range">` and its associated display `<span>` (e.g., `rangeInput = element.querySelector('input[type="range"]'); displaySpan = element.querySelector('.slider-value');`).
        2.  Set `rangeInput.value = numericNewValue;`.
        3.  Update `displaySpan.textContent` (formatted with '%', etc.).
        4.  Dispatch `input` event: `rangeInput.dispatchEvent(new Event('input', { bubbles: true }));`.
    *   **Goal:** Sliders visually reflect imported values.

### Phase B: Comprehensive Testing & Refinement
*   Thoroughly test CSV and Excel import with diverse data, covering all editable/interactive field types across all relevant sections.
*   Ensure calculations update correctly post-import.

### Phase C: Integration with Reference Model UI
*   Adapt the perfected `FieldManager.updateFieldDisplay` mechanism for Reference Mode. When the reference standard changes and `StateManager` is updated:
    *   Call `updateFieldDisplay` for each `targetCell` in Section 11 (and elsewhere) to show the new reference value.
    *   Incorporate logic (perhaps in `updateFieldDisplay` or a wrapper) to apply/remove `.reference-value-locked` CSS and `contenteditable='false'` based on mode.

### Phase D: Final Review and Documentation Update
*   Review all code changes for clarity and efficiency.
*   Update this document and any inline comments to reflect the final implementation.
*   Full regression testing.

This refined plan aims for a more foundational and universal solution to UI synchronization. 