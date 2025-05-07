# File Handler Strategy & Implementation Status (Excel/CSV Import & CSV Export)

This document outlines the strategy and current implementation status for data import/export functionalities within the TEUI Calculator v4.011, and details a plan to address UI update issues observed during data import, with a view to leveraging these solutions for the Reference Model integration.

**Goal:**
1.  Allow users to import data from legacy Excel files (`.xlsx`/`.xls`) focusing on user inputs from the `REPORT!` sheet.
2.  Enable users to save/load scenarios locally via CSV export/import of user-editable fields.
3.  Ensure that UI elements (inputs, dropdowns, sliders) reliably reflect imported data and trigger dependent logic correctly.
4.  Apply these robust UI update mechanisms to the Reference Model system for dynamic display of standard values.

## 0. Core Challenge: UI Reactivity to State Changes

A recurring challenge, observed both in testing CSV/Excel imports and in the development of the Reference Model, is ensuring that the web application's UI elements (input fields, dropdowns, sliders, etc.) consistently and accurately reflect changes in the underlying data managed by `TEUI.StateManager`.

*   **Symptom (Import):** When a CSV or Excel file is imported, `TEUI.StateManager` is updated with the new values (e.g., for `d_13` - Reference Standard). However, the corresponding dropdown on the screen does not visually change to the new imported value, nor do other UI elements like sliders or specific input fields always update their visual state. Calculations often *use* the imported value correctly, but the UI shows stale data.
*   **Symptom (Reference Model):** A similar issue exists where, upon entering Reference Mode or changing the selected reference standard (`d_13`), the `targetCell` UI elements in Section 11 (e.g., `f_85`, `g_88`) do not update to display the values of the newly selected standard, remaining "stuck" on the initial standard's values.
*   **Symptom (User Edits):** Some user-editable fields (e.g., `l_118` ACH in Section 13) were observed to display incorrect default values or user edits failed to trigger necessary recalculations, pointing to inconsistencies in event handling or state propagation.
*   **Root Cause Hypothesis:** While `StateManager` holds the correct, updated data, the mechanism to propagate these changes to the visual layer (the HTML elements) is either incomplete, inconsistent across field types, or not firing correctly. Furthermore, the initial setting of default values and the handling of user input events need standardization across sections. `TEUI.FieldManager` and section-specific logic need enhancement and better coordination.

This document outlines a plan to address this core UI reactivity and data handling challenge universally, drawing lessons from successful implementations (e.g., `SANKEY3035.html`) and specific bug fixes (e.g., `j_115` AFUE default display).

## 1. UI Integration (`index.html`) - *To Be Implemented*

-   [ ] Modify the existing "Download Report" button into a Bootstrap dropdown button group.
-   [ ] Add menu item: "Import Data (Excel/CSV)" linked to trigger the hidden file input (`id="excel-file-input"`). Assign `id="import-data-btn"` to this menu item.
-   [ ] Add menu item: "Export Data (CSV)" linked to trigger the `TEUI.FileHandler.exportToCSV()` function. Assign `id="export-data-btn"` to this menu item.
-   [ ] Keep/Update "Download Report (PDF)" menu item.
-   [ ] Hide or remove the old standalone `import-excel` and `export-excel` buttons if they exist.

## 2. File Handling Logic (`4011-FileHandler.js`) - *Functionally Complete (Pending UI Update Fixes)*

### 2.1. Import Process

-   **`handleFileSelect(event)`:** *Implemented & Working.* Handles file input, type detection, dispatching.
-   **`processImportedExcel(workbook)`:** *Implemented & Working.* Uses `ExcelMapper`, calls `updateStateFromImportData`.
-   **`processImportedCSV(csvString)`:** *Implemented & Working.* Parses expected format, **correctly skips Section 03 fields**, calls `updateStateFromImportData`.
-   **`updateStateFromImportData(importedData, csvSkippedCount)`:** *Implemented (Needs UI Update Integration)*
    -   Iterates data, validates based on `fieldDef.type`, updates `StateManager` using `setValue(..., 'imported')`.
    -   **CRITICAL INTEGRATION POINT:** Calls `TEUI.FieldManager.updateFieldDisplay(fieldId, parsedValue)` after successfully setting state. The effectiveness of this call depends on the robustness of `updateFieldDisplay`.
    -   Triggers `TEUI.Calculator.calculateAll()`.

### 2.2. Export Process

-   **`exportToCSV()`:** *Implemented & Working.* Exports user-interactable fields with layout metadata (`ExcelRow`, `RowID`, `Description`, `Units`) by querying `FieldManager`. Section 03 fields are correctly excluded.

### 2.3. Event Listeners & Helpers

-   **`setupEventListeners()`:** *Implemented & Working.* Connects UI buttons, handles location file input separately.
-   **`showStatus()`:** *Implemented.* Provides feedback.

## 3. Mapping Logic (`4011-ExcelMapper.js`) - *Partially Implemented*

-   **`excelReportInputMapping`:** *Defined (Needs Final Review)* Needs verification against Excel v3.038 `REPORT!` sheet for completeness.
-   **`mapExcelToReportModel(workbook)`:** *Implemented & Working.*

## 4. Field & Layout Definitions (`sections/4011-SectionXX.js`) - *Requires Review/Standardization*

-   **Need for Consistency:** Review required to ensure consistent use of `type` (e.g., "editable" vs "number"), presence of `defaultValue`, and structure of `sectionRows` across all sections.

## 5. Key Decisions & Considerations

-   **Import Priority:** `StateManager` priorities (`user-modified` > `imported` > `default`) are maintained. Importing does *not* clear user modifications for imported fields.
-   **Section 03 Import:** Explicitly **skipped** in CSV import. Climate data changes rely on `ExcelLocationHandler` (future: JSON).
-   **Universal UI Updates:** The core development effort is creating a universal, reliable mechanism (`FieldManager.updateFieldDisplay` and standardized event handling) to synchronize UI with `StateManager`.

## 6. Learnings from `SANKEY3035.html` for UI Updates

(This section remains unchanged from the previous version, detailing direct value setting, event dispatching, etc.)

*   **Direct Value Setting for Inputs:** ...
*   **Direct Value Setting & Event Dispatch for Dropdowns:** ...
*   **Re-rendering or Explicit Refresh of Complex Controls:** ...
*   **Centralized State Management:** ...

## 7. The "55555" CSV Import Study & Related UI Bug Findings (NEW)

A test CSV file (`documentation/TEUIv4011-55555.csv`) was created where most user-editable values were set to variations of "5" (e.g., 555, 55.5, 55%). This file was imported to observe the behavior of the import process and UI updates.

**Key Findings from "55555 Study":**

1.  **`StateManager` Correctly Updated, Calculations Reflect Changes:**
    *   Logs and overall application calculations (TEUI, TEDI, Section 11 component losses) confirmed that `StateManager` was indeed being updated with the imported "555" values. This indicates the data parsing (`processImportedCSV`) and the core `StateManager.setValue()` parts of the import process are fundamentally working for the data layer.

2.  **Inconsistent UI Visual Updates (The "Secret" Application):**
    *   A significant number of UI elements did **not** visually update to reflect the imported "555" values, even though `StateManager` held these values. This was termed the "secret" application of data—correct in the backend data model, but incorrect or stale in the frontend visual representation.
    *   **Example (Failure - `contenteditable` `<td>`):** Window Areas (e.g., `d_74` in Section 10). The UI cell in Section 10 continued to show its default area (e.g., 81.14 m²). However, calculation logs for Section 11 confirmed that it *used* the imported 555 m² value for `d_74` (as `d_74` is the source for the S11 window area `d_89`), clearly demonstrating the UI-State desynchronization.
    *   **Example (Success - KWW - `contenteditable` `<td>`):** Window U-Values (e.g., `g_89`, `g_90` etc. in Section 11). If a U-value was manually changed to 0.5, exported, and then re-imported, the `contenteditable` `<td>` UI element in Section 11 correctly displayed "0.500". Analysis showed these fields have `type: "editable"` in `sectionRows` and `FieldManager.updateFieldDisplay` was successfully setting their `textContent` and dispatching `blur`.
    *   **Dropdowns Not Updating Visually or Functionally:** Dropdown fields (e.g., `d_113` Primary Heating System, `d_51` DHW Energy Source, which were set to "Oil" in the "55555.csv") did not visually change from their default "Heatpump" selection in the UI, nor did their dependent UI (like showing AFUE input for "Oil") update, despite console logs indicating the `change` event was dispatched. This requires further investigation into the event listeners or rendering logic in the affected sections.

3.  **Climate Data (Section 03) Import Issues & Decision:**
    *   Initial attempts to import Section 03 fields led to validation errors for dependent dropdowns (`h_19` City).
    *   **Decision:** **Section 03 fields are explicitly skipped during CSV import.** This was implemented in `processImportedCSV`. `ExcelLocationHandler.js` remains the dedicated mechanism for loading full climate datasets.
    *   **New Finding:** 'Skipping import for field h_19...` warning is still expected if `h_19` is not correctly defined with `sectionId: 'sect03'` or if the skip logic in `processImportedCSV` needs refinement, but the primary decision to skip S03 via CSV is firm.

**Related UI Bug Insights (e.g., `l_118` ACH & `j_115` AFUE in Section 13):**

*   **`l_118` (ACH):** Initially displayed "0" instead of default "3". Fix involved ensuring `onSectionRendered` in S13 set the default in `StateManager` *and* explicitly updated the UI `textContent` post-calculation. User edits now correctly trigger calculations after an explicit `calculateAll()` call was added to its `handleEditableBlur`.
*   **`j_115` (AFUE):** Had similar past issues. Its fix involved ensuring `defaultValue` was correct in `sectionRows` and the `onSectionRendered` explicit UI update.

**Overall Conclusion from Study & Bug Analysis:**

*   The core challenge is achieving **reliable, universal, and consistent synchronization between `StateManager` and the visual UI** across all field types.
*   This requires:
    1.  Standardized field definitions (`type`, `defaultValue`).
    2.  Robust default value initialization (`StateManager` + initial UI paint).
    3.  Consistent event handling for user edits (UI -> `StateManager` -> Calculations).
    4.  A universal `FieldManager.updateFieldDisplay` function for programmatic changes (`StateManager` -> UI -> Events).
*   The successful update of `g_89` (U-Value) and the fixes for `j_115`/`l_118` provide patterns (direct `textContent`/`.value` update + appropriate event dispatch).

## 8. Revised Implementation Plan: Towards Universal UI & Data Handling

This plan prioritizes creating a robust and universal UI update mechanism.

### Phase A.0: Systemic Review & Standardization of Editable Fields (NEW)

**Goal:** Understand and standardize the definition, rendering, and event handling of all user-interactive fields.

*   **Action:**
    1.  **Survey Field Definitions:** Systematically review `sectionRows` across sections (S10, S11, S13 first). Document `fieldId`, intended `type` (editable text/number, input number, dropdown, slider), `defaultValue`, rendering method (`contenteditable`, `<input>`, `<select>`), and user edit event handlers.
    2.  **Standardize `type`:** Ensure consistent use (e.g., `editable` for `contenteditable`, `number` for `<input type="number">`, etc.).
    3.  **Standardize User Event Handling:** Aim for a consistent pattern in section `initializeEventHandlers` (using section-specific `handleEditableBlur` or equivalent) that reliably updates `StateManager` and triggers necessary section calculations.

### Phase A: Mastering UI Updates (`FieldManager.updateFieldDisplay`)

**Goal:** Ensure `TEUI.FieldManager.updateFieldDisplay(fieldId, newValue, fieldDef)` reliably updates the UI for all field types and triggers dependent logic via event dispatch.

*   **A1: Robust Default Value Handling & Initial UI Paint (Prerequisite)**
    *   **Action (Global):** Implement a mechanism (e.g., in `TEUI.init.js` or `FieldManager.renderAllSections`) to:
        1.  Iterate all fields after section module loading; set `defaultValue` in `StateManager` (priority 'default') if no other state exists.
        2.  After state initialization, iterate again and call `FieldManager.updateFieldDisplay` for all fields to ensure the initial UI matches the state.
    *   **Testing:** Verify all fields show correct defaults on load. Test `l_118`.

*   **A2: Fix/Verify `contenteditable` Fields (`editable`)**
    *   **Target:** `d_74` (S10 Area), `f_85` (S11 RSI), `g_89` (S11 U-Value - KWW).
    *   **Action (in `updateFieldDisplay`):**
        *   Confirm `element = document.getElementById(fieldId)` gets the `<td>`.
        *   Set `element.textContent = formattedNewValue;` (using universal `TEUI.formatNumber`).
        *   Dispatch `blur` event: `element.dispatchEvent(new Event('blur', { bubbles: true }));`.
    *   **Testing:** Import "55555.csv". `d_74` UI in S10 must show "555.00". `g_89` UI in S11 must show "0.500". Check console logs for `textContent` set and `blur` dispatched.

*   **A3: Fix/Verify Dropdown Fields (`dropdown`)**
    *   **Target:** `d_113` (Heating), `d_51` (DHW), `e_74` (Orientation).
    *   **Action (in `updateFieldDisplay`):**
        1.  Use `selectElement = element.querySelector(\`select[data-field-id='${fieldId}']\`) || document.getElementById(fieldId);` to reliably find the `<select>` element.
        2.  Set `selectElement.value = newValue;`.
        3.  Dispatch `change` event: `selectElement.dispatchEvent(new Event('change', { bubbles: true }));`.
    *   **Testing:** Import "55555.csv". `d_113`/`d_51` UI show "Oil"? Does dependent UI change? Does `e_74` UI show "North"? Check console logs for value set and event dispatch.

*   **A4: Fix/Verify Slider Fields (`percentage`, `coefficient`, etc.)**
    *   **Target:** `d_118` (SRE), `f_113` (HSPF), `f_74` (SHGC).
    *   **Action (in `updateFieldDisplay`):**
        1.  Find the `<input type="range">` (e.g., `element.querySelector('input[type="range"]')`).
        2.  Find the display `<span>` (e.g., `element.querySelector('.slider-value')`).
        3.  Set `rangeInput.value = numericNewValue;`.
        4.  Update `displaySpan.textContent` (formatted).
        5.  Dispatch `input` event: `rangeInput.dispatchEvent(new Event('input', { bubbles: true }));`.
    *   **Testing:** Import "55555.csv". Sliders should visually update to imported values (e.g., `d_118` to 55%).

### Phase B: Comprehensive Testing & Refinement
*   Test CSV and Excel import thoroughly across all sections and field types.
*   Verify calculations update correctly post-import for all scenarios.

### Phase C: Integration with Reference Model UI
*   Apply the now robust `FieldManager.updateFieldDisplay` when Reference Mode standards change, ensuring `targetCell` UIs update visually and functionally.
*   Integrate styling/locking logic.

### Phase D: Final Review and Documentation Update
*   Code cleanup, final documentation polish.
*   Full regression testing.

### Phase E: Universal Helper Functions (Future Enhancement)
*   **Action:** Review all section modules (`calculateAll`, `handleFieldBlur`, helper functions). Identify common logic (like number parsing/formatting, standard calculations).
*   **Goal:** Abstract common logic into global utilities (e.g., enhance `TEUI.parseNumeric`, `TEUI.formatNumber`, potentially add helpers in `TEUI.Calculator` or a new `TEUI.Utils` module) to reduce code duplication and improve maintainability. Ensure all sections adopt these universal helpers.

## 9. Implementation Progress & Next Steps

*   **DONE:** Strategy defined, `ExcelMapper` syntax fixed, core import/export implemented (needs UI update fix), `mapExcelToReportModel` created, weather import routing fixed, `l_118`/`j_115` default display/calculation fixed.
*   **IN PROGRESS:** Phase A: Mastering UI Updates (`FieldManager.updateFieldDisplay`).
    *   A1: Skip S03 in CSV import (DONE).
    *   A2-A5: Debugging & implementing robust UI updates for editable fields, dropdowns, and sliders.
*   **NEXT:**
    1.  Perform testing based on the latest `FieldManager.updateFieldDisplay` changes (from the previous commit) focusing on logs and UI behavior for `d_74`, `g_89`, `d_113`.
    2.  Iteratively refine `FieldManager.updateFieldDisplay` based on test results (Phase A2-A5).
    3.  Address the two specific bugs you mentioned after the import mechanism is stable.
    4.  Continue through Phases B, C, D, E.
*   **OUTSTANDING (Low Priority / Post-Core Functionality):**
    *   Update `index.html` menu items.
    *   Final `excelReportInputMapping` verification.
    *   Systematic review of `sectionRows` for export metadata.
    *   Refactor legacy climate import code.
    *   Full Excel v3.038 parity checks.
    *   Enhance CSV parser for complex cases.
*   **DONE:** Placeholder sections S16 & S18 getLayout() fixed to prevent rendering errors.
*   **NEXT:** Verify that the `TypeError` for S16/S18 rendering is resolved after placeholder file fixes.
*   **NOTE:** Important to use a local web server for development to avoid `file:///` resource loading issues and 404 errors for missing files like `favicon.ico` or actual section files if they were missing. 