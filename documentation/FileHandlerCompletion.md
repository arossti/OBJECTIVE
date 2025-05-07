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

## 7. The "55555" CSV Import Study & Related UI Bug Findings

A test CSV file (`documentation/TEUIv4011-55555.csv`) was created where most user-editable values were set to variations of "5" (e.g., 555, 55.5, 55%). This file was imported into the system to observe the behavior of the import process and UI updates.

**Key Findings from "55555 Study" & Subsequent Tests:**

1.  **`StateManager` Correctly Updated, Calculations Reflect Changes:**
    *   Logs and overall application calculations (TEUI, TEDI, Section 11 component losses, Section 13 fuel calculations) confirmed that `StateManager` was indeed being updated with the imported values. This indicates the data parsing (`processImportedCSV`) and the core `StateManager.setValue()` parts of the import process are fundamentally working for the data layer.

2.  **Inconsistent UI Visual Updates (The "Secret" Application):**
    *   Many UI elements initially did **not** visually update to reflect the imported values, even though `StateManager` held these values.
    *   **Example (Failure - `contenteditable` `<td>` - `d_74` S10 Area):** The UI cell in Section 10 (`d_74`) initially continued to show its default area (e.g., "81.14"). However, calculation logs for Section 11 (which derives its window area `d_89` from S10's `d_74`) confirmed that Section 11 *used* the imported "555" value for its calculations. This highlighted a UI-State desynchronization for the `d_74` display cell itself. The root cause is suspected to be that `FieldManager.updateFieldDisplay` sets `textContent`, but subsequent logic in `Section10.js` (likely its `handleEditableBlur` or `calculateAll`) overwrites this visual update before it's persistently rendered, or the programmatic `blur` event isn't correctly processed by S10's handlers to re-render with the new value.
    *   **Example (Success - KWW - `contenteditable` `<td>` - `g_89` S11 U-Value):** The UI for `g_89` (and similar U-value fields in S11, also `type: "editable"`) *does* correctly update to display the imported value (e.g., "0.500"). `FieldManager.updateFieldDisplay` successfully sets its `textContent`, and the dispatched `blur` event, when handled by `Section11.js`'s `handleFieldBlur`, correctly finalizes the display and state. This is the KWW pattern.
    *   **Dropdowns Partially Fixed (`d_113` S13 Heating):** After changes to `FieldManager.updateFieldDisplay` (to explicitly set `option.selected = true` and re-set `.value`), the *dependent UI and calculations* for `d_113` (Primary Heating System) reacted correctly as if "Oil" was selected (e.g., AFUE fields unghosted, oil consumption calculated). However, the main dropdown UI element itself *still visually showed "Heatpump"*. This indicates that while the `change` event is firing and being handled correctly by S13's logic, the browser is not visually updating the collapsed select element's displayed text. This specific visual issue for dropdowns remains.
    *   **Sliders Broken by Import:** Sliders (e.g., `f_74` SHGC in S10, `k_120` Setback in S13, `d_118` SRE in S13) visually disappear after import, showing only their raw numeric value (e.g., "50" for a 50% percentage slider). This is because `FieldManager.updateFieldDisplay` (in its current iteration for `type: "percentage"` or `type: "coefficient"`) sets `element.textContent` on the parent `<td>` (e.g., `k_120`), which overwrites the `<input type="range">` and associated `<span>` elements dynamically created by `FieldManager.initializeSliders()`.

3.  **Climate Data (Section 03) Import Skipped:**
    *   The decision to explicitly skip Section 03 fields in `processImportedCSV` (by checking `fieldDef.sectionId === 'sect03'`) is working. Warnings for `d_19` and `h_19` still appear in `FileHandler.updateStateFromImportData`'s validation if these fields are not perfectly excluded by the `processImportedCSV`'s skip or if their `sectionId` isn't `'sect03'`. This is minor as the core intent (no S03 data import via general CSV) is achieved. The future plan is JSON-based weather data for S03.

**Related UI Bug Insights (e.g., `l_118` ACH & `j_115` AFUE in Section 13):**

*   **`l_118` (ACH):** Initially displayed "0" instead of default "3". Adding `l_118` to `onSectionRendered` in S13 (to set default in `StateManager` and explicitly update UI `textContent` post-calculation) fixed its default display. Adding an explicit `calculateAll()` call within `Section13.js`'s `handleEditableBlur` for `l_118` fixed the issue where user edits didn't trigger recalculations. This highlights the need for both correct initial "painting" from state and ensuring user input events trigger necessary updates.
*   **`j_115` (AFUE):** Its previous fix also involved correct `defaultValue` in `sectionRows` and the `onSectionRendered` explicit UI update in S13.

**Overall Conclusion from Study & Bug Analysis:**

*   The primary challenge remains: **reliable, universal, and consistent synchronization between `StateManager` data and the visual UI** across all field types.
*   Key components of the solution involve:
    1.  **Standardized Field Definitions:** Consistent use of `type` and `defaultValue` in `sectionRows`.
    2.  **Robust Default Value Propagation:** `StateManager` must be initialized with defaults, and then the UI must be "painted" from this initial state.
    3.  **Consistent User Edit Handling:** UI events (`blur`, `change`, `input`) must reliably update `StateManager` and trigger section-specific calculations.
    4.  **A Centralized `FieldManager.updateFieldDisplay`:** This function must correctly target DOM elements for all field types and dispatch appropriate events to mimic user interaction, ensuring that section-specific handlers are invoked.
*   The successful UI updates for `g_89` (U-Value) and the functional (though not visual for the select itself) updates for `d_113` (Heating System dropdown) provide crucial patterns. The slider breakage points to a clear flaw in how `updateFieldDisplay` handles slider-type cells.

## 8. Revised Implementation Plan: Universal UI Updates

This plan prioritizes creating a robust and universal UI update mechanism.

### Phase A.0: Systemic Review & Standardization of Editable Fields (Ongoing)

**Goal:** Understand and standardize the definition, rendering, and event handling of all user-interactive fields.

*   **Action (Ongoing):**
    1.  **Survey Field Definitions:** Continue reviewing `sectionRows` across all sections. Document `fieldId`, `type`, `defaultValue`, rendering method, and user edit event handlers.
    2.  **Standardize `type` Usage:** Enforce consistent use.
    3.  **Standardize User Event Handling:** Ensure section-specific handlers consistently update `StateManager` and trigger calculations. The pattern in S13's `handleEditableBlur` (parse, validate, format display, update StateManager, call section's `calculateAll`) is a good model for `contenteditable` fields.

### Phase A: Mastering UI Updates (`FieldManager.updateFieldDisplay`)

**Goal:** Ensure `TEUI.FieldManager.updateFieldDisplay(fieldId, newValue, fieldDef)` reliably updates the UI for ALL relevant field types and triggers dependent logic.

*   **A1: Default Value Propagation & Initial UI "Paint" (Critical Prerequisite - Partially Addressed by S13 Fixes)**
    *   **Action (Global):** Implement a robust global mechanism (e.g., called from `TEUI.init.js` after `FieldManager.renderAllSections()`) that:
        1.  Iterates all fields from `FieldManager.getAllFields()`. If `StateManager.getValue(fieldId)` is `null`, sets `fieldDef.defaultValue` into `StateManager` (priority 'default').
        2.  Then, iterates again and calls `FieldManager.updateFieldDisplay(fieldId, StateManager.getValue(fieldId), fieldDef)` for all fields with UI elements. This ensures initial UI matches the true initial state.
    *   **Testing:** `l_118` now shows its default "3". This needs to be true for all fields.

*   **A2: Fix `contenteditable` Input Fields (e.g., `d_74` Area in S10)**
    *   **Target:** `d_74` (S10 Area), `f_85` (S11 RSI).
    *   **Current Status for `g_89` (KWW):** Works because `updateFieldDisplay` sets `textContent`, and its `blur` event (handled by S11) correctly finalizes.
    *   **Hypothesis for `d_74`:** `updateFieldDisplay` likely sets `textContent` correctly, but `Section10.js`'s `handleEditableBlur` (when triggered by the programmatic `blur`) or its `calculateAll` might be reverting the `textContent`.
    *   **Action:**
        1.  Thoroughly review `Section10.js`'s `handleEditableBlur` and `calculateAll`. Ensure that when `handleEditableBlur` is called for `d_74` with the imported value (e.g., "555"), it correctly updates `StateManager` and that its subsequent call to `Section10.js`'s `calculateAll` does not then wrongly overwrite `d_74.textContent` with a default or unrelated value. The `formatNumber` call within `handleEditableBlur` should use the (newly parsed) `numericValue`.
        2.  Ensure the `blur` event dispatched by `updateFieldDisplay` for `d_74` is effectively triggering the `handleEditableBlur` in `Section10.js`.
    *   **Goal:** `d_74` UI in S10 should visually show the imported "555.00".

*   **A3: Fix Dropdown Visual Update (The Final "Robofinger" Detail)**
    *   **Target:** `d_113` (Primary Heating), `e_74` (S10 Orientation).
    *   **Current Status:** Dependent logic/calculations fire correctly (due to `selectElement.value` being set and `change` event dispatched). Only the *visual display* of the collapsed select element is stale.
    *   **Action (in `updateFieldDisplay` for `case 'dropdown'`):**
        1.  The current loop setting `option.selected = true/false` and then re-setting `selectElement.value = newValue` is the correct approach.
        2.  **If still not visually updating:** This might be a browser-specific rendering quirk with dynamically updated `<select>` elements that are not in focus. A potential, slightly more involved step if the above isn't enough might be to briefly remove and re-add the `selectElement` to/from the DOM to force a full repaint, or to trigger a reflow in a less disruptive way. However, this should be a last resort. For now, let's assume the current iteration in `FieldManager` should be sufficient once any console errors related to it are resolved.
    *   **Goal:** Dropdowns (`d_113`, `e_74`, etc.) visually show the imported selected option.

*   **A4: Fix Slider Fields (UI Vanishing Act)**
    *   **Target:** `f_74` (S10 SHGC), `d_118` (S13 SRE), `f_113` (S13 HSPF).
    *   **Problem:** `updateFieldDisplay` currently sets `textContent` on the parent `<td>` for these types, wiping out the slider's HTML structure.
    *   **Action (in `updateFieldDisplay` for `type: 'percentage'`, `type: 'coefficient'`, `type: 'year_slider'`):**
        1.  The `element` passed is the `<td>` (e.g., `td#f_74`).
        2.  Find the actual `<input type="range">` inside this `element` (e.g., `const rangeInput = element.querySelector('input[type="range"]');`).
        3.  Find the associated display `<span>` (e.g., `const displaySpan = element.querySelector('.slider-value');` — ensure `initializeSliders` consistently adds this class or another reliable selector).
        4.  If `rangeInput` and `displaySpan` are found:
            *   Convert `newValue` to a number suitable for `rangeInput.value`.
            *   Set `rangeInput.value = numericNewValue;`.
            *   Format `numericNewValue` appropriately (e.g., add '%') and set `displaySpan.textContent`.
            *   Dispatch an `input` event on the `rangeInput`: `rangeInput.dispatchEvent(new Event('input', { bubbles: true }));` to trigger its own listeners (which update `StateManager` and the display span again, ensuring consistency).
    *   **Goal:** Sliders reflect imported values visually and functionally without disappearing.

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
*   **Action:** Review all section modules. Abstract common logic (number parsing using `TEUI.parseNumeric`, display formatting using a global `TEUI.formatNumber`, standardized blur/change handlers where possible) into global utilities or `FieldManager` base methods to reduce duplication and improve maintainability.

## 9. Implementation Progress & Next Steps

*   **DONE:** Strategy defined, `ExcelMapper` syntax fixed, core import/export in `FileHandler` (data layer mostly sound), `mapExcelToReportModel` created, weather import routing fixed, `l_118`/`j_115` default display/calculation fixed (locally in S13), S16/S18 placeholders fixed. CSV export includes S03 data; CSV import skips S03 data.
*   **IN PROGRESS:** Phase A: Mastering UI Updates (`FieldManager.updateFieldDisplay`).
    *   A1 (Default/Initial Paint): Partially addressed via S13 fixes; needs global implementation.
    *   A2 (`contenteditable` `g_89`): Works. `d_74` UI does not update.
    *   A3 (Dropdowns `d_113`): Functional logic (ghosting, calcs) updates; visual selection in dropdown does not.
    *   A4 (Sliders): Broken by current `updateFieldDisplay` logic for these types.
*   **NEXT (When you return):**
    1.  **Test CSV Import of "55555.csv" with current code.**
        *   Provide detailed console logs from `FileHandler.updateStateFromImportData` AND `FieldManager.updateFieldDisplay` (especially the `ENTRY` and internal decision/action logs) for `d_74`, `e_74`, `f_74` (S10) and `d_113` (S13).
        *   Describe the UI state for these fields after import.
    2.  Based on these logs, we will iteratively refine `FieldManager.updateFieldDisplay` and, if necessary, the event handlers in Section 10 (for `d_74`) and Section 13 (for `d_113` dropdown visual) to achieve correct UI updates.
    3.  Once `editable` fields and dropdowns are working, implement Phase A.4 for sliders.
    4.  Address the two specific bugs you mentioned previously after the import mechanism is stable.
*   **OUTSTANDING (Post-Core UI Update Functionality):**
    *   Update `index.html` menu items.
    *   Final `excelReportInputMapping` verification.
    *   Systematic review of `sectionRows` for export metadata.
    *   Refactor legacy climate import code.
    *   Full Excel v3.038 parity checks.
    *   Enhance CSV parser for complex cases.
*   **DONE:** Placeholder sections S16 & S18 getLayout() fixed to prevent rendering errors.
*   **NEXT:** Verify that the `TypeError` for S16/S18 rendering is resolved after placeholder file fixes.
*   **NOTE:** Important to use a local web server for development to avoid `file:///` resource loading issues and 404 errors for missing files like `favicon.ico` or actual section files if they were missing. 

UPDATE 2025.05.07: ADDED OUT OF ORDER DUE TO MODEL GLITCHING. CONSOLIDATE COMMENTS BELOW INTO TEXT ABOVE WHEN MODEL IS STABLE AGAIN. 

## 7. The "55555" CSV Import Study & UI Update Iterations (Updated)

A test CSV file (`documentation/TEUIv4011-55555.csv`) was used to systematically test and debug the UI update mechanism after data import. This led to several iterations and fixes.

**Key Successes & Resolved Issues:**

1.  **`StateManager` Correctly Updated:** Confirmed that `StateManager` is correctly updated with imported values, and these values are used in backend calculations.
2.  **`contenteditable` Fields (e.g., `d_74` S10 Area, `g_89` S11 U-Value):** **FIXED.** `FieldManager.updateFieldDisplay` now correctly sets `element.textContent` and programmatically dispatches a `blur` event. Section-specific `handleEditableBlur` functions (e.g., in S10, S11, S13) have been reviewed or adjusted to correctly process these events, ensuring UI updates and `StateManager` are synchronized.
3.  **Dropdown Fields (e.g., `d_113` S13 Heating System, `e_74` S10 Orientation):** **FIXED.** `FieldManager.updateFieldDisplay` now correctly targets the `<select>` element, sets its `.value`, explicitly sets the `option.selected` property on the matching option, and dispatches a `change` event. This ensures the UI visually reflects the selection and that dependent logic (like UI ghosting in S13) is triggered.
4.  **Slider Fields (e.g., `f_74` S10 SHGC, `d_118` S13 SRE):** **FIXED.** The `ReferenceError: Can't find variable: formatNumber` was resolved by ensuring `FieldManager.updateFieldDisplay` calls the global `window.TEUI.formatNumber` (defined in `StateManager.js`) for formatting slider display values. The logic now correctly targets the internal `<input type="range">` and display `<span>` of sliders, setting their values and dispatching an `input` event. Sliders now update visually and remain interactive after import.
5.  **ACH Field `l_118` (S13):** Initial display of default value ("3.00") and calculations based on user edits are now working correctly due to fixes in S13's `onSectionRendered` and `handleEditableBlur`.
6.  **Climate Data (Section 03) Import:** Remains skipped during CSV import by `processImportedCSV` (checking `fieldDef.sectionId`), which is the desired behavior. Any lingering validation warnings for S03 fields in `updateStateFromImportData` are minor as the fields aren't actually processed into the state.

**Newly Identified Issue During Testing:**

*   **`TypeError` in `Section08.js`'s local `formatNumber`:**
    *   Log: `[Error] TypeError: value.toFixed is not a function. (In 'value.toFixed(2)', 'value.toFixed' is undefined) formatNumber (4011-Section08.js:568)`
    *   This occurs when `FieldManager.updateFieldDisplay` processes an editable field from Section 08, dispatches `blur`, and Section 08's `handleEditableBlur` calls its *local* `formatNumber` with a non-numeric value (likely an empty string or a string that `parseFloat` couldn't handle).
    *   This highlights the need to standardize on the more robust global `window.TEUI.formatNumber` and `window.TEUI.parseNumeric` across all sections.

**Remaining Primary Bug for Import Functionality:**

*   **`i_41` (Embodied Carbon / Modelled Value A1-3) Loses Editability:** Despite being `type: "number"` (which should render as an editable `<input type="number">`), this field becomes non-editable ("non-blue") after CSV import. This is the next critical item to investigate.

## 8. Revised Implementation Plan: Universal UI & Data Handling - Finalizing Import

The core UI update mechanisms in `FieldManager.updateFieldDisplay` are now largely robust for `contenteditable`, `dropdown`, and `slider` types, thanks to iterative debugging and fixes.

### Phase A: Mastering UI Updates (`FieldManager.updateFieldDisplay`) - Mostly Complete

*   **A.0: Systemic Review & Standardization:** This is an ongoing effort, but critical patterns for `editable` and `number` types, and their event handling, have been established and proven effective in S10, S11, S13.
*   **A1: Default Value Propagation & Initial UI "Paint":** Partially addressed by section-specific `onSectionRendered` fixes (e.g., `l_118`, `j_115`). A global pass is still desirable (Phase E).
*   **A2: `contenteditable` Input Fields:** **RESOLVED.**
*   **A3: Dropdown Fields:** **RESOLVED.** (Visual and functional updates working).
*   **A4: Slider Fields:** **RESOLVED.** (Visuals, functionality, and `formatNumber` errors fixed).
*   **A5: Revert Section 03 CSV Import:** **DONE.**

### Next Immediate Coding Steps:

1.  **BUG FIX: `i_41` Loses Editability (Section 05)**
    *   **Goal:** Ensure `i_41` remains editable and visually "blue" after CSV import.
    *   **Action:**
        1.  Verify `i_41` is rendered as `<input type="number" class="user-input ...">` by `FieldManager.generateSectionContent` (its `fieldDef.type` in `Section05.js` is "number").
        2.  During CSV import, trace `FieldManager.updateFieldDisplay` for `i_41`:
            *   Confirm it correctly identifies `element` as the `<input type="number">`.
            *   Confirm `element.value` is set.
            *   Confirm no `disabled` attribute is being added or `user-input` class removed by this function.
        3.  If `updateFieldDisplay` appears correct, investigate `Section05.js`:
            *   Examine its `calculateAll()` and any functions it calls that might affect `i_41`.
            *   Does any logic in Section 05 (perhaps related to the `d_39` Typology dropdown being "Modelled Value") programmatically set `i_41.disabled = true` or remove its `user-input` styling class after the import-triggered calculations?
            *   The local `setCalculatedValue` in S05 sets `input.value` directly; this should not break editability unless the *element reference itself* is being replaced or its attributes modified elsewhere.

2.  **BUG FIX & Refactor: `TypeError` in `Section08.js`'s local `formatNumber`**
    *   **Goal:** Prevent the `TypeError` and standardize Section 08 to use global utilities.
    *   **Action:**
        1.  In `sections/4011-Section08.js`, remove its local `formatNumber`, `getFieldValue`, `getNumericValue`, and `setCalculatedValue` helper functions.
        2.  Update all call sites within `Section08.js` to use `window.TEUI.StateManager.getValue()`, `window.TEUI.parseNumeric()`, `window.TEUI.StateManager.setValue()`, and `window.TEUI.formatNumber()` appropriately, ensuring correct `formatType` strings are passed to the global formatter.
    *   **Testing:** Ensure Section 08 calculations and display still work correctly. Import a CSV with Section 08 values to confirm the `TypeError` is gone.

### Phase B: Comprehensive Testing & Refinement
*   After `i_41` and the S08 `formatNumber` bug are fixed.
*   (As previously outlined)

### Phase C: Integration with Reference Model UI
*   (As previously outlined)

### Phase D: Final Review and Documentation Update
*   (As previously outlined)
*   **Action:** Remove all remaining temporary debug `console.log` statements from `FileHandler.js`, `FieldManager.js`, and section files.

### Phase E: Universal Helper Functions (Future Enhancement)
*   **Action:** After core stability, systematically refactor remaining sections to use global `TEUI.parseNumeric` and `TEUI.formatNumber`. Review and standardize `handleEditableBlur` patterns or abstract further if feasible.

## 9. Implementation Progress & Next Steps

*   **DONE:**
    *   Strategy defined, `ExcelMapper` syntax fixed, core import/export in `FileHandler.js`.
    *   `mapExcelToReportModel` created.
    *   Weather file import routing fixed.
    *   `l_118`/`j_115` default display/calculation fixed.
    *   S16/S18 placeholders fixed.
    *   CSV import skips Section 03.
    *   **UI updates via `FieldManager.updateFieldDisplay` for `contenteditable`, dropdowns (visual & functional), and sliders (visual, functional, and `formatNumber` error) are NOW WORKING for CSV imports.**
*   **NEXT:**
    1.  **BUG FIX:** Address `i_41` losing editability after import (Phase A - `i_41` from current section).
    2.  **BUG FIX & REFACTOR:** Modify `Section08.js` to use global `formatNumber` and `parseNumeric` to fix `TypeError` (Phase A - S08 from current section).
    3.  Comprehensive Testing (Phase B).
    4.  Clean up remaining debug logs (Phase D partial).
    5.  Proceed to Reference Model Integration (Phase C).
*   **OUTSTANDING (Post-Core Functionality):**
    *   (As previously listed)
*   **NOTE:** Using a local web server for development is still recommended to avoid `file:///` resource loading issues and 404 errors for missing files like `favicon.ico` or any other actual section files if they were missing/misnamed.