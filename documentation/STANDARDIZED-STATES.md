# Workplan: Standardizing State Value Management & Reference Model Integration (TEUI 4.011)

**Date:** 2025-05-16
**Version:** 2.2 (Clarified Reference Mode state construction and CSV Row 3 behavior)
**Inspired by:** `README.md`, Original `STANDARDIZED-STATES.md` v2.1

## 1. Objective

To standardize the structure, handling, import, and export of all stateful values within the TEUI 4.011 application, and to robustly integrate Reference Model capabilities. This includes:
*   Establishing a **unified data structure** for **values of user-editable fields** (inputs, dropdowns, sliders).
*   Managing imported data, user-modified data, and values derived from reference standards (via `d_13`) that override these user-editable fields.
*   Creating a consistent and robust data management layer that simplifies development, enhances maintainability, and ensures data integrity.
*   Allowing users to compare their Design Model against selected building code minimums or standards by activating a Reference Mode.
*   Ensuring that Reference Mode correctly uses a combination of standard-defined values, application state carry-overs, Reference Mode specific defaults/edits for its calculations, and applies appropriate UI styling/locking.
*   **Purely calculated fields (e.g., results of formulas) are explicitly excluded from standardized state datasets; they are always derived from the current set of active input values, whether in Design or Reference mode.**

## 2. Core Principles

### A. Unified Data Structure for User-Editable Fields
The cornerstone of this workplan is to establish a **unified key-value pair structure** for representing sets of field values. This structure should be simple, easily serializable (JSON), and directly usable by `StateManager`.

*   **Proposed Unified Structure:** A simple JSON object where keys are `fieldId` strings **of user-editable fields** and values are the corresponding raw string representations of the data.
    ```json
    {
        "h_14": "Three Feathers Terrace", // Example: User text input for Project Name (S02)
        "h_15": "1427.20",                // Example: User text input for Conditioned Floor Area (S02)
        "d_12": "A-Assembly",              // Example: User dropdown for Major Occupancy (S02)
        "h_13": "50"                       // Example: User slider for Service Life (S02)
        // ... other fieldId: value pairs for user-editable fields
    }
    ```
    This aligns well with how `StateManager` likely handles values internally and is directly compatible with CSV-like data.

### B. Architectural Principles for Reference Model Integration
Integrating the Reference Model requires adherence to the application's core architecture to ensure stability and maintainability:

1.  **`StateManager` as Single Source of Truth:** `StateManager` will hold the state for both the primary "Design/Application" mode and the "Reference Mode." This includes:
    *   The current application state (user-modified, imported, defaults).
    *   The `activeReferenceDataSet`, which represents the complete set of input values when Reference Mode is active. This dataset is a composite, built by `StateManager` (see Phase B1).
2.  **Mode-Aware `StateManager.getValue()`:** This function will be the central point for retrieving field values. It will check if Reference Mode is active (`TEUI.ReferenceToggle.isReferenceMode()`):
    *   If in Reference Mode, it returns the value from `StateManager.activeReferenceDataSet`.
    *   Otherwise, it follows the standard priority for the application state (user-modified, imported, default).
3.  **Reference Data Loading from Refactored `ReferenceValues.js`:**
    *   `4011-ReferenceValues.js` has been refactored (Phase A2 completed) to provide a simple, sparse `{ "user_editable_fieldId": "value", ... }` object for each standard, containing *only* the values for user-editable fields that the standard explicitly dictates (i.e., overrides).
    *   `StateManager.loadReferenceData(standardKey)` will use this refactored data. It constructs the `activeReferenceDataSet` primarily by carrying over application state, then applying specific Reference Mode defaults (if any from Appendix E), and finally overlaying the explicit overrides from `TEUI.ReferenceValues[standardKey]`.
4.  **UI Updates via `FieldManager.updateFieldDisplay()` & Section Handlers:** This is the **only** mechanism for updating the visual display of input fields and for triggering necessary events (`blur`, `change`, `input`).
    *   When Reference Mode is activated or the standard changes, `ReferenceToggle.js` (or `d_13` listener) will ensure `StateManager.loadReferenceData()` is called.
    *   Then, logic (likely within `ReferenceToggle.js` iterating through section handlers or a centralized `FieldManager` function) will:
        1.  For each relevant `fieldId`, get the Reference Mode value using the mode-aware `StateManager.getValue(fieldId)`.
        2.  Call `TEUI.FieldManager.updateFieldDisplay()` to update the field's visual value.
        3.  Apply appropriate styling (e.g., `.reference-locked`) and editability status (`contenteditable`, `disabled`) based on the field's defined behavior in Appendix E and the current mode.

## 3. Key Components & Data Requirements

*   **`4011-ReferenceValues.js`:** Static data source for standard-defined values.
    *   **Crucial Note:** This file will be refactored as per Phase A2. Each standard will become a direct JSON object of `{ "user_editable_fieldId": "value", ... }` for explicitly defined user-editable fields. The current nested structure with `section` and `targetCell` properties *within* `ReferenceValues.js` will be eliminated.
*   **`4011-StateManager.js`:** Core state management. Will handle:
    *   Storage of application state (user-modified, imported, defaults).
    *   Storage and construction of `this.activeReferenceDataSet` (the complete state for Reference Mode). This dataset is a hybrid:
        1.  Starts with values carried over from the current application state.
        2.  Applies any "Reference Mode Defaults" (from Appendix E).
        3.  Explicitly defined values from `TEUI.ReferenceValues[standardKey]` (the sparse set of overrides) are then overlaid.
    *   `loadReferenceData(standardKey)`: Builds `this.activeReferenceDataSet` using the hybrid logic above.
    *   Mode-aware `getValue(fieldId)`: Returns value from `this.activeReferenceDataSet` if in Reference Mode, else from application state.
    *   (Potentially) `setValueInReferenceMode(fieldId, value)`: For fields editable while in Reference Mode.
*   **`4011-ReferenceToggle.js`:** UI switch for Reference Mode.
    *   Toggles `body.reference-mode` class.
    *   Orchestrates:
        1.  Calling `StateManager.loadReferenceData(currentStandardKey)` on mode change or `d_13` change.
        2.  Triggering the UI refresh process which involves iterating through sections/fields to update display values (via `StateManager.getValue()`, then `FieldManager.updateFieldDisplay()`) and applying styling/locking.
*   **`4011-FieldManager.js`:** Manages field definitions and handles UI updates via `updateFieldDisplay()`, ensuring proper event dispatch.
*   **`4011-styles.css` / `future code/reference-model-styles.css`:** Styling for Reference Mode, including locking/unlocking input fields.
*   **Section Modules (`sections/4011-SectionXX.js`):**
    *   Require standardized helpers (Prerequisite Phase).
    *   Must have legacy DOM manipulation for reference values removed.
    *   Existing calculation logic remains largely unchanged, relying on `StateManager.getValue()`.
    *   Their `referenceHandler.updateReferenceDisplay()` methods (called by `ReferenceToggle` or a centralized refresh mechanism) will be responsible for:
        1.  Getting the Reference Mode value for each relevant field via `StateManager.getValue(fieldId)`.
        2.  Updating the field's visual display using `FieldManager.updateFieldDisplay()`.
        3.  Querying the field's behavior category from Appendix E logic.
        4.  Applying/removing the `.reference-locked` class and setting `contenteditable`/`disabled` status accordingly.

## 4. Phased Implementation Workplan

This workplan integrates tasks from previous planning documents into a unified sequence.

### Prerequisite: Standardize Helper Functions
*   **Goal:** Ensure all section modules consistently use global `window.TEUI.parseNumeric` and `window.TEUI.formatNumber` for data parsing and display. This is essential for reliable data handling by `StateManager` and `FieldManager`.
*   **Status (as of last `deepstate-structure.md` update):** S02, S05, S08 completed. Remaining sections (01, 03, 04, 06, 07, 09, 10, 12, 14, 15) need review and refactoring. S01 was reverted and needs to be revisited.
*   **Action:** Systematically refactor all remaining section modules to use these global helpers before proceeding with core Reference Model logic.

### Phase A: Foundational Data Structure and `4011-ReferenceValues.js` Refactor
*   **A1. Finalize Unified Data Structure (for User-Editable Fields):** Confirm the JSON key-value structure (`{fieldId: value, ...}`) for all state representations of user-editable fields.
*   **A2. Restructure `4011-ReferenceValues.js`:**
    *   **Goal:** Modify `TEUI.ReferenceValues` so that each defined reference standard (e.g., `OBC_SB10_2017_ClimateZone5`) directly returns data **only for user-editable fields** in the Unified Data Structure *that the standard explicitly defines*. These reference values effectively act as a set of targeted input overrides.
    *   **Clarification:** `TEUI.ReferenceValues` will serve as the source for values explicitly mandated by a standard. It will *not* contain values that are "carried over" from the application state or have specific "Reference Mode defaults" independent of the standard's definition; that logic will reside in `StateManager`.
    *   **Example of `ReferenceValues.js` content reflecting this:**
        ```javascript
        // TEUI.ReferenceValues to be restructured to:
        TEUI.ReferenceValues = {
            "NBC T1": { // Key is the standard name (from d_13)
                "h_13": "NBC 9.36 Prescriptive Path", // Standard's descriptive name (S02)
                "f_85": "6.41",                      // Roof RSI (S11)
                "f_113": "7.1",                       // Heating System Efficiency (S13)
                "d_118": "0.6"                        // HRV SRE @ -25C (S13) - Corresponds to V.1.1 in RefValues
                // ... other *user-editable* fieldIds explicitly defined by NBC T1
            }
            // ... other standards
        };
        ```
    *   **Rationale:** This makes a standard's explicit definitions structurally consistent with other data sets. `StateManager` will combine this with carry-over logic to form the complete Reference Mode state.
    *   **Action:** Update `4011-ReferenceValues.js`.

### Phase B: `StateManager` Enhancements for Unified Data & Reference Model
*   **B1. Internal State for Reference Values & Data Loading Logic:**
    *   `StateManager` to have an internal property: `this.activeReferenceDataSet = {};` This object will hold the complete, resolved set of input values for all user-editable fields when Reference Mode is active.
    *   Implement `StateManager.loadReferenceData(standardKey)`:
        1.  **Initialize/Clear:** `this.activeReferenceDataSet = {};`
        2.  **Step 1 (Carry-Over Application State - Baseline):** Create a deep copy of all current user-editable application state values. Iterate through all known user-editable `fieldId`s. For each `fieldId`, get its current application state value and store it in `this.activeReferenceDataSet[fieldId]`. This forms the baseline where Reference Mode mirrors the Application State.
        3.  **Step 2 (Apply Specific "Reference Mode Defaults"):** For each field identified in Appendix E as having a "Reference Mode Default," set/override `this.activeReferenceDataSet[fieldId] = defaultValueFromAppendixE;`. This applies specific defaults unique to Reference Mode operation, potentially overriding values from Step 1.
        4.  **Step 3 (Overlay Explicit Standard Overrides):**
            *   Access `standardOverrideData = TEUI.ReferenceValues[standardKey];` (from the refactored, sparse file).
            *   If `standardOverrideData` exists, for each `fieldId` in `standardOverrideData`, set/override `this.activeReferenceDataSet[fieldId] = standardOverrideData[fieldId];`. This applies the few values explicitly dictated by the chosen standard, overriding Step 1 or Step 2 values for those specific fields.
        5.  **Step 4 (Ensure Completeness - Fallback if needed):** For any user-editable `fieldId` not yet in `this.activeReferenceDataSet` after steps 1-3 (e.g., a newly introduced field not yet in application state or defaults), consider a final fallback to its system default (e.g. `this.defaultValues[fieldId].value`). This ensures `activeReferenceDataSet` is comprehensive. (This step should ideally be rare if application state and defaults are well-managed).
    *   This function (`loadReferenceData`) is triggered by `ReferenceToggle.js` when `d_13` changes (via a listener on `d_13` that calls a method in `ReferenceToggle` or `StateManager`) and when Reference Mode is initially activated.
    *   **Handling Edits in Reference Mode:** For fields designated as "Independently User-Editable in Reference Mode" (Appendix E), user interactions (e.g., `blur` event on the field) while in Reference Mode should call a new method like `StateManager.setValueInReferenceMode(fieldId, value)`. This method would directly update `this.activeReferenceDataSet[fieldId] = value;` and then trigger a UI refresh for that field and its dependents.
    *   Add detailed `console.log` statements within `loadReferenceData` to trace the construction of `this.activeReferenceDataSet`, showing values after each step (app state copy, RefMode defaults, standard overlay).
*   **B2. Mode-Aware `StateManager.getValue(fieldId)`:**
    *   Modify `StateManager.getValue(fieldId)`:
        *   `if (TEUI.ReferenceToggle.isReferenceMode()) { return this.activeReferenceDataSet[fieldId] ?? (this.defaultValues[fieldId] ? this.defaultValues[fieldId].value : undefined); }`
            *   The fallback `?? (this.defaultValues[fieldId] ...)` is a safety net; `activeReferenceDataSet` should ideally be comprehensive after `loadReferenceData`.
        *   `else { // existing logic for application state }`
*   **B3. Standardized `StateManager.setValues(dataSet, stateType)`:**
    *   **Goal:** Create a robust `StateManager` method to import a batch of values **for user-editable fields** into the *application state*.
    *   **Action:** Implement `StateManager.setValues(newValuesObject, stateType)` where `newValuesObject` is in the Unified Data Structure (containing only user-editable `fieldId`s), and `stateType` is e.g., `'user-modified'`, `'imported'`.
    *   This function will iterate `newValuesObject` and call the existing `StateManager.setValue(fieldId, value, stateType)` for each entry, applying to the application state.
    *   This will be used by CSV import (Row 2) and "Notes" section paste.

### Phase C: CSV Export/Import Standardization
*   **C1. Refine CSV Export Logic (`4011-FileHandler.js`):**
    *   **Initial 2-Row Format (Completed 2025-05-16):** The system now successfully exports and imports a 2-row CSV representing the current application state for all user-editable fields.
    *   **Enhanced 3-Row Format (Planned):**
        *   **Goal:** To export a 3-row CSV.
            *   Row 1: All user-editable `fieldId`s (Header).
            *   Row 2: Current application state values for `fieldId`s in Row 1.
            *   Row 3: Active reference standard key (from `d_13`) in Cell 1, followed by values from `StateManager.getActiveReferenceModeValue(fieldId)` for each `fieldId` in Row 1, representing the fully resolved Reference Mode state.
        *   **Format (3 rows total):**
            *   **Row 1 (Header Row - User-Editable Field IDs):** Comma-separated `fieldId`s of ALL user-editable fields defined in the application (e.g., from `FieldManager.getAllFields()` filtered by user-editable types, including `d_13`). This order must be consistent.
                *   Example: `d_27,d_19,f_85,h_13,d_13,...`
            *   **Row 2 (Current Application State Values):** Corresponding raw string values for the `fieldId`s in Row 1, reflecting the current application's state. The value for `d_13` will be the key of the active reference standard.
                *   Example: `1500.75,app_state_d19_value,7.5,NBC 9.36 Prescriptive Path,NBC T1,...`
            *   **Row 3 (Active Reference Standard Values):**
                *   Cell 1: The key/name of the active reference standard (from `d_13`).
                *   Subsequent Cells: For each `fieldId` in Row 1 (starting from the first `fieldId`), list the corresponding value from `StateManager.getActiveReferenceModeValue(fieldId)`. This reflects the fully resolved `activeReferenceDataSet`: values are application state values *unless* explicitly overridden by a Reference Mode Default (Appendix E) or by the selected standard's definition in `TEUI.ReferenceValues`.
                *   Example Row 1 Headers for this illustration: `h_15,d_19,f_85,h_13,f_113,d_13,...`
                *   Example Row 2 (Application State) for this illustration: `1427.20,Ontario,8.0,60,8.5,NBC T1,...`
                *   Example Row 3 if `d_13` in Row 2 was `NBC T1` (based on values from `4011-ReferenceValues.js` for `NBC T1` and application state carry-over):
                    `NBC T1,1427.20,Ontario,6.41,NBC 9.36 Prescriptive Path,7.1,,...`
                    *(This means for `NBC T1` operating in Reference Mode: `h_15` (Conditioned Area) and `d_19` (Province) reflect their application state values (carried over by default as `NBC T1` in `TEUI.ReferenceValues` does not define them). `f_85` (Roof RSI) is "6.41", `h_13` (Standard Name) is "NBC 9.36 Prescriptive Path", and `f_113` (Heating Eff.) is "7.1" (these are explicitly defined by `NBC T1` in `TEUI.ReferenceValues` and override any application state value for these `fieldId`s). The standard `NBC T1` itself doesn't define a value for the field `d_13` (its cell in Row 3 is empty, as `d_13`'s role is to select the standard). The `...` indicates other fields following their respective Reference Mode logic [standard-defined override, carry-over from application state, RefMode default, or independently RefMode-edited]. See Appendix E for detailed field behavior.)*
    *   **Action (for 3-Row Format):**
        *   Ensure `collectDataForExport()` in `FileHandler.js` gathers all user-editable `fieldId`s for Row 1.
        *   Row 2: Collect current values from `StateManager.getValue(fieldId)` (ensuring it reflects application state when not in reference mode, or by having a specific method like `StateManager.getApplicationStateValue(fieldId)` if `getValue` becomes strictly mode-aware). This forms Row 2.
        *   Row 3:
            1.  The first cell is `StateManager.getValue('d_13')` (the active standard key from application state).
            2.  For subsequent cells (corresponding to each `fieldId` in Row 1), populate with `StateManager.getActiveReferenceModeValue(fieldId)` (conceptual function).
        *   Ensure output values are raw, unformatted strings (properly CSV-escaped).
*   **C2. Refine CSV Import Logic (`4011-FileHandler.js`):**
    *   **Initial 2-Row Format (Completed 2025-05-16):** The system now successfully imports a 2-row CSV, updating the current application state for user-editable fields.
    *   **Enhanced 3-Row Format (Planned):**
        *   **Goal:** Import CSVs (formatted as per C1, 3 rows).
            *   Row 1 (Headers) defines the `fieldId`s.
            *   Row 2 (Application State Values) updates `StateManager` application state using `StateManager.setValues(parsedRow2Data, 'imported')`. This includes setting `d_13`.
            *   Row 3 (Reference Standard Values) is primarily for record-keeping and future validation. The change to `d_13` from Row 2 is the trigger for `StateManager` to correctly build the `activeReferenceDataSet`.
    *   **Action (for 3-Row Format):**
        *   Modify `handleExcelFile()` (or CSV specific part) in `FileHandler.js`.
        *   The import parser should expect `fieldId`s on Row 1, current application values on Row 2, and active reference standard values on Row 3.
        *   **Processing Row 2:** Parse into a Unified Data Structure (`{fieldId: value, ...}`) and use `StateManager.setValues(parsedApplicationStateObject, 'imported')`. This updates all user-editable fields in the application state, including `d_13`.
        *   **Processing Row 3:**
            *   The data in Row 3 can be used for validation or logging (e.g., confirming the `active_standard_key` from Row 3 Cell 1 matches the `d_13` value set by Row 2).
            *   The system should *not* directly apply field values from Row 3 to `StateManager.activeReferenceDataSet`. The `activeReferenceDataSet` is rebuilt by `StateManager.loadReferenceData()` based on the `d_13` value (set by Row 2) and the defined internal logic (carry-overs from application state, RefMode defaults, and explicit standard overrides from `TEUI.ReferenceValues`).

### Phase D: "Notes" Section Integration for Data Pasting
*   **D1. UI Element in Section 18 (Notes):**
    *   Add a `<textarea>` element within `4011-Section18.js` (or its rendering in `index.html`).
    *   Add a "Load Data from Notes" button.
*   **D2. Parsing and Loading Logic:**
    *   When the button is clicked:
        1.  Get the content of the `<textarea>`.
        2.  Assume the content is CSV-formatted (or allow a toggle for JSON), containing data **for user-editable fields only** (expected to be 2 rows: headers and values, for application state).
        3.  Parse this text into the Unified Data Structure.
        4.  Call `StateManager.setValues(parsedDataObject, 'user-modified')` (or `'imported'` - to be decided), applying to application state.
        5.  Trigger UI updates for all pasted **user-editable fields** using `TEUI.FieldManager.updateFieldDisplay()` for each field.
*   **D3. "Copy Current Data to Notes" Feature (Optional):**
    *   A button to serialize the current `StateManager` values **for user-editable fields in the application state** (using a method like `StateManager.getAllUserEditableValuesInUnifiedFormat()`) into CSV format (2 rows: headers and values) and populate the `<textarea>`.

### Phase E: Reference Model UI Integration & Activation
*   **E1. UI Update Triggering and Field State Management for Reference Mode:**
    *   When Reference Mode is activated/deactivated or the selected standard (`d_13`) changes:
        1.  `ReferenceToggle.js` (or a listener on `d_13` that `ReferenceToggle` manages) must ensure `TEUI.StateManager.loadReferenceData(currentStandardKey)` is called. This populates/updates `StateManager.activeReferenceDataSet`.
        2.  After `activeReferenceDataSet` is ready, `ReferenceToggle.js` orchestrates a UI refresh. This involves iterating through all relevant `fieldId`s (user-editable fields across all sections). For each `fieldId`:
            a.  **Get Value:** Retrieve the correct Reference Mode value using `currentValue = TEUI.StateManager.getValue(fieldId);` (which is now mode-aware).
            b.  **Update Visual Value:** Call `TEUI.FieldManager.updateFieldDisplay(fieldId, currentValue, fieldDefinition);`. This ensures the input element displays the correct value and that `change`/`input` events are fired, triggering recalculations of dependent (calculated) fields.
            c.  **Determine Lock/Style State (Consult Appendix E):**
                *   Access the field's behavior category for Reference Mode from a representation of Appendix E (e.g., a helper function `TEUI.AppendixE.getFieldBehavior(fieldId)` or a direct lookup if Appendix E is translated into a data structure).
            d.  **Apply Styling and Editability:**
                *   Let `domElement = document.getElementById(fieldId);` (or a more robust way to get the input element).
                *   If the behavior is *not* "Independently User-Editable in Reference Mode":
                    *   `domElement.classList.add('reference-locked');`
                    *   `if (domElement.tagName === 'INPUT' || domElement.tagName === 'SELECT' || domElement.tagName === 'TEXTAREA') { domElement.disabled = true; } else { domElement.setAttribute('contenteditable', 'false'); }`
                *   Else (if it *is* "Independently User-Editable in Reference Mode"):
                    *   `domElement.classList.remove('reference-locked');`
                    *   `if (domElement.tagName === 'INPUT' || domElement.tagName === 'SELECT' || domElement.tagName === 'TEXTAREA') { domElement.disabled = false; } else { domElement.setAttribute('contenteditable', 'true'); }`
    *   When switching *out* of Reference Mode, `ReferenceToggle.js` orchestrates a similar refresh:
        1.  Values are fetched via `StateManager.getValue(fieldId)` (which now returns application state).
        2.  `FieldManager.updateFieldDisplay()` is called.
        3.  All `.reference-locked` classes are removed, and fields are made editable (restoring their default application state editability).
*   **E2. UI Locking/Styling for Reference Mode (CSS):**
    *   `ReferenceToggle.js` correctly adds/removes the `reference-mode` body class.
    *   CSS rules in `4011-styles.css` (e.g., for `.reference-locked` and `body.reference-mode .user-input:not(.reference-locked)`) will provide the visual distinction (deep red, bold, italic for locked; standard blue for user-editable in RefMode).

### Phase F: Layout Considerations (Tables vs. Flexbox/Grid)
*   **F1. Assessment:** The user query "If tables are harmful, how to switch now to flexbox or grid for table structure" points to a desire for more modern layout techniques.
*   **F2. Statement:** Transitioning from `<table>` based layouts to CSS Flexbox or Grid is a significant UI refactoring effort, largely separate from data structure standardization but benefiting from it. The `README.md` (Section 8: Known Limitations, UI/UX Improvements Needed) already indicates this is planned for a "4012 Visual Refactor".
*   **F3. Workplan Note:** This workplan focuses on the data layer. A well-defined and consistent data layer will make future layout refactoring easier. No immediate action on layout changes within *this* workplan, but acknowledge its relevance.

### Phase G: End-to-End Testing, Validation, and Documentation
*   **G1. Comprehensive Test Cases:**
    *   Develop test scenarios covering:
        *   CSV Export (3-Row): Verify `fieldId`s, application state values, and resolved Reference Mode state values are correct.
        *   CSV Import (3-Row): Test import. Verify `StateManager` application state update (including `d_13`) and that Reference Mode correctly reflects the imported standard via `StateManager.loadReferenceData()`.
        *   **Reference Mode Functionality:**
            *   Select various standards via `d_13`.
            *   Verify correct values are displayed in **user-editable input fields** (reflecting `activeReferenceDataSet`).
            *   Verify behavior of fields as per Appendix E (carry-over, standard-defined, RefMode-default, independently RefMode-editable).
            *   Verify **calculated fields** (like `h_6`, TEUI, TEDI, Section 01 Column E values) update correctly *based on* the `activeReferenceDataSet`.
            *   **Section 01 Display:**
                *   In Reference Mode, ensure Section 01 Column D ("Design/Proposed") continues to display values based on the application state (and appears locked/visually distinct).
                *   Ensure Section 01 Column E ("Reference/Target") displays calculated totals derived from the `activeReferenceDataSet`.
        *   Notes Section Paste: Test pasting valid/invalid CSV/JSON data for application state update.
        *   Interactions: e.g., Load CSV, then switch to Reference Mode, then switch back.
    *   Use existing case studies (mentioned in `README.md`) to validate mappings and results.
*   **G2. Mapping Validation:**
    *   "Drill down on mis-mappings." Pay close attention to `fieldId` consistency for **user-editable fields** between the refactored `ReferenceValues.js`, CSVs, `StateManager` logic, and the actual DOM elements.
    *   Validate the logic in Appendix E.
*   **G3. Documentation:**
    *   Update `README.md` to reflect the new standardized data structures and `StateManager` functionalities, including Reference Model.
    *   Document the "Notes" section data pasting feature.
    *   Finalize this integrated `STANDARDIZED-STATES.md` workplan document.
    *   **Ensure Appendix E: Field Behavior in Reference Mode is comprehensively populated and accurate.**
*   **G4. Final Cleanup & Review:**
    *   Remove temporary `console.log` statements added during development.
    *   Perform thorough regression testing in both Design and Reference modes.

## 5. Timeline & Priority

*   **Prerequisite (Standardize Helpers):** Highest immediate priority. Blocks subsequent work.
*   **Phase A (Data Structure, `ReferenceValues.js` Refactor):** Highest priority after Prerequisite. Forms the foundation.
*   **Phase B (`StateManager` Core for Application & Reference States):** Highest priority, concurrent with or immediately following Phase A.
*   **Phase E (Reference Model UI Integration & Activation):** High priority, depends on A & B. Essential for `d_13` functionality and Reference Mode.
*   **Phase C (CSV Import/Export - 3-Row):** High priority. Depends on A & B for full Reference Mode state export.
*   **Phase D ("Notes" Section Paste):** Medium priority. Useful feature but can follow core data handling.
*   **Phase F (Layout):** Out of scope for this specific workplan; part of a larger UI refactor.
*   **Phase G (Testing & Documentation):** Ongoing throughout, with dedicated final testing and documentation update periods. Appendix E population is a key part of this.

This workplan aims to create a more robust, maintainable, and consistent approach to state management and Reference Model integration in the TEUI 4.011 calculator.

## Appendix A: CSV Export Field Verification (vs. `4011-ExcelMapper.js`)

**Date of Analysis:** 2025-05-16

**Objective:** To verify if user-editable fields listed in `4011-ExcelMapper.js` (specifically in `this.excelReportInputMapping`), particularly those with slider-like behavior or percentage types, are correctly included in the CSV export functionality of `4011-FileHandler.js`.
This initial analysis was performed against the 2-row CSV export format. The findings remain relevant for the header row (Row 1) of the 3-row format.

**Methodology:**
Fields from `excelReportInputMapping` that appeared to be complex (e.g., described as sliders or percentages) were identified. Their definitions (specifically `type` and `sectionId`) were located within their respective `sections/4011-SectionXX.js` modules. This information was then checked against the export conditions in `4011-FileHandler.js`:

*   A field is exported if its `type` is one of: `'editable'`, `'dropdown'`, `'year_slider'`, `'percentage'`, `'coefficient'`, `'number'`.
*   OR if its `sectionId` is `'sect03'`.

**Key Fields Investigated & Findings:**

1.  **`h_12`** (Section 02: Reporting Period - "Slider -> Number")
    *   Definition: `type: "year_slider"`, `sectionId: "sect02"`
    *   Status: **EXPORTED** (due to `type: "year_slider"`)

2.  **`h_13`** (Section 02: Service Life - "Slider -> Number")
    *   Definition: `type: "year_slider"`, `sectionId: "sect02"`
    *   Status: **EXPORTED** (due to `type: "year_slider"`)

3.  **`d_97`** (Section 11: Thermal Bridge Penalty % - "Percentage")
    *   Definition: `type: "percentage"`, `sectionId: "sect11"`
    *   Status: **EXPORTED** (due to `type: "percentage"`)

4.  **`f_113`** (Section 13: HSPF - "Slider/Coefficient -> Number")
    *   Definition: `type: "coefficient"`, `sectionId: "sect13"`
    *   Status: **EXPORTED** (due to `type: "coefficient"`)

5.  **`d_118`** (Section 13: HRV/ERV SRE % - "Percentage Slider -> Number")
    *   Definition: `type: "percentage"`, `sectionId: "sect13"`
    *   Status: **EXPORTED** (due to `type: "percentage"`)

6.  **`k_120`** (Section 13: Unoccupied Setback % - "Percentage Dropdown/Slider")
    *   Definition: `type: "percentage"`, `sectionId: "sect13"`
    *   Status: **EXPORTED** (due to `type: "percentage"`)

**Conclusion:**
The targeted analysis of these potentially problematic fields indicates that their current definitions use `type` values (e.g., `year_slider`, `percentage`, `coefficient`) that are explicitly included in the export logic of `4011-FileHandler.js`. Therefore, for these specific fields, there appear to be no omissions from the CSV export based on their `type`.

This supports the general approach in Phase C1 of the workplan, which aims to ensure *all* user-editable fields are correctly identified and exported. While this check was not exhaustive for all 100+ fields in `excelReportInputMapping`, the higher-risk cases examined are correctly handled by the current export filters. A comprehensive review during Phase G (Testing) should confirm all user-editable fields are captured.

## Appendix B: Aligning CSV Export with `ReferenceValues.js` Structure (3-Row Format)

**Objective:** To define a CSV export format that is structurally consistent with the proposed unified data structure for `TEUI.ReferenceValues` and general application state, focusing on user-editable fields. This appendix details the enhanced 3-row CSV format.

**1. Background:**

The workplan (Phase A2) restructures `TEUI.ReferenceValues` so that each defined reference standard directly returns data **only for user-editable fields** in the Unified Data Structure *that the standard explicitly defines*:
```json
// Example: TEUI.ReferenceValues["OBC_SB10_2017_ClimateZone5"] might look like:
{
    "d_18": "Toronto",      // User-editable City/Location for Climate Data (S03)
    "f_85": "10.5",         // User-editable Roof RSI (S11)
    "h_13": "OBC SB10 2017 CZ5" // User-editable description field (S02)
    // ... other relevant *user-editable* fieldIds explicitly defined by this standard
}
```
The CSV export needs to represent:
1.  The list of all user-editable `fieldId`s (Header).
2.  The current application's state values for these `fieldId`s.
3.  The fully resolved Reference Mode state values for these `fieldId`s, which is a composite of application state carry-overs, Reference Mode defaults, explicit standard values (from the refactored `TEUI.ReferenceValues`), and any user edits made while in Reference Mode.

**2. Proposed 3-Row Aligned CSV Export/Import Format (from Phase C):**

*   **Row 1 (Header Row - User-Editable Field IDs):**
    *   A single, comma-separated string of `fieldId`s for ALL user-editable fields in the application. This list is comprehensive and ordered consistently. The `fieldId` for the reference standard selection (e.g., `d_13`) must be included.
    *   Example: `d_27,d_19,f_85,h_13,d_13,...`

*   **Row 2 (Current Application State Values):**
    *   A single, comma-separated string of the corresponding raw string values for the `fieldId`s in Row 1. This reflects the live state of the application at the time of export. The value for `d_13` here indicates the active reference standard for the application state.
    *   Example: `1500.75,app_state_d19_value,7.5,NBC 9.36 Prescriptive Path,NBC T1,...`

*   **Row 3 (Active Reference Standard Values):**
    *   **Cell 1:** The key/name of the active reference standard (this value will match the value of `d_13` in Row 2).
    *   **Subsequent Cells:** For each `fieldId` in Row 1 (from the *first* `fieldId`), this cell contains the value for that `fieldId` as it exists in the fully resolved Reference Mode state, managed by `StateManager` (e.g., via a conceptual `StateManager.getActiveReferenceModeValue(fieldId)`). This state is a result of:
        1.  Values carried over from the application state.
        2.  Specific Reference Mode defaults.
        3.  Explicit values from the selected reference standard (sourced from the refactored `TEUI.ReferenceValues`).
        4.  Any user modifications made to fields that are independently editable while in Reference Mode.
        (See Appendix E for detailed field-level behavior).
    *   Example (assuming Row 1 is `d_27,d_19,f_85,h_13,d_13` and active standard `NBC T1` from Row 2's `d_13` defines `f_85` and `h_13`, while `d_27` and `d_19` carry over from application state values `app_d27` and `app_d19` respectively):
        `NBC T1,app_d27,app_d19,6.41,NBC 9.36 Prescriptive Path,,...`
        (The cell for `d_13` in Row 3 is empty as the standard doesn't define a value for `d_13` itself).

**Benefits of this Alignment:**

*   **Comprehensive State Snapshot:** Captures all user-editable `fieldId`s, their application state values, and their fully resolved Reference Mode state values.
*   **Single Header Row:** Simplifies parsing and reduces redundancy.
*   **Clear State Separation:** Row 2 is pure application state; Row 3 is pure (resolved) Reference Mode state.
*   **Simplified Import Logic:**
    *   Row 2 directly updates the application state. Setting `d_13` from Row 2 correctly triggers `StateManager` to build the Reference Mode state internally.
    *   Row 3 serves as a record/checksum of the Reference Mode state at export. The import process relies on the `d_13` value from Row 2 to trigger the reconstruction of the Reference Mode state using `StateManager` logic and `TEUI.ReferenceValues`.

This 3-row format balances comprehensiveness with efficiency for data interchange.

## Appendix C: Updating `4011-FileHandler.js` for Standardized CSV Export (3-Row Format)

**Objective:** To outline the required modifications within `4011-FileHandler.js` (primarily the `exportToCSV` function and its helpers) to produce and parse CSV files in the standardized 3-row format. This ensures alignment with the `ReferenceValues.js` refactor (Phase A2), `StateManager` enhancements (Phase B), and CSV import expectations (Phase C2).

**Recap of Standardized 3-Row CSV Format:**

*   **Row 1 (Header Row):** Comma-separated `fieldId`s of all user-editable fields (including `d_13`).
    *   Example: `d_27,d_19,f_85,h_13,d_13,...`
*   **Row 2 (Current Application State Values):** Comma-separated raw string values corresponding to Row 1 `fieldId`s (application state).
    *   Example: `1500.75,app_state_d19_value,7.5,NBC 9.36 Prescriptive Path,NBC T1,...`
*   **Row 3 (Active Reference Standard Values):**
    *   Cell 1: Key of the active reference standard (from `d_13` in Row 2).
    *   Subsequent Cells: Values from `StateManager.getActiveReferenceModeValue(fieldId)` for each `fieldId` in Row 1, representing the fully resolved Reference Mode state.
    *   Example: `NBC T1,app_d27,app_d19,6.41,NBC 9.36 Prescriptive Path,,...`

**Key Modifications in `4011-FileHandler.js` - `exportToCSV()`:**

1.  **Identifying User-Editable Fields for Row 1 (Header):**
    *   Action: Use `TEUI.FieldManager.getAllFields()` and filter by user-editable types. This list of `fieldId`s becomes Row 1. Ensure a consistent order and inclusion of `d_13`.

2.  **Collecting Data for Row 2 (Application State):**
    *   Action: For each `fieldId` in Row 1, retrieve its current value using `window.TEUI.StateManager.getValue(fieldId)` (ensuring this call correctly reflects application state when not in reference mode, or by having a specific method like `StateManager.getApplicationStateValue(fieldId)` if `getValue` becomes strictly mode-aware). This forms Row 2.

3.  **Collecting Data for Row 3 (Reference Mode State):**
    *   **Prerequisite:** `StateManager` must have a method (e.g., `getActiveReferenceModeValue(fieldId)` or rely on `getValue(fieldId)` being correctly mode-aware when Reference Mode is active) that can return the value for any user-editable field as it currently exists in the active Reference Mode state (`activeReferenceDataSet`).
    *   Action:
        1.  Get the `activeStandardKey` from `window.TEUI.StateManager.getValue('d_13')` (from application state). This will be the first cell of Row 3.
        2.  Initialize an array for Row 3 values, starting with `activeStandardKey`.
        3.  Iterate through the ordered list of `fieldId`s from Row 1. For each `fieldId`:
            *   Append `window.TEUI.StateManager.getActiveReferenceModeValue(fieldId)` (or equivalent) to the Row 3 values array.
        4.  This array, when joined by commas, becomes the content for Row 3.

4.  **Constructing the CSV String:**
    *   Properly escape all values for CSV.
    *   `const headerRowString = fieldIdsRow1.join(',');`
    *   `const appStateRowString = valuesRow2.join(',');`
    *   `const refStateRowString = valuesRow3.join(',');`
    *   `const csvContent = headerRowString + "\n" + appStateRowString + "\n" + refStateRowString;`

5.  **Updating `exportToCSV()` Orchestration:**
    *   The function will perform steps 1-4 and then trigger the download.

**Key Modifications in `4011-FileHandler.js` - `processImportedCSV()` (or equivalent):**

1.  **Parsing the 3 Rows:**
    *   Split the CSV string into three rows. Validate that three rows exist.
    *   Parse Row 1 to get the `importedFieldIds` array.
    *   Parse Row 2 to get the `importedAppStateValues` array.
    *   Parse Row 3 to get the `importedRefStateValues` array.
    *   Validate column counts.

2.  **Processing Row 2 (Application State):**
    *   Create a `dataToImport = {}` object.
    *   Iterate `importedFieldIds` and `importedAppStateValues` to populate `dataToImport`.
    *   Call `window.TEUI.StateManager.setValues(dataToImport, 'imported')`. This updates the application state, including `d_13`. This change to `d_13` is the primary trigger for `StateManager.loadReferenceData()` to build the `activeReferenceDataSet`.

3.  **Processing Row 3 (Reference Standard State):**
    *   The first cell of `importedRefStateValues` contains the `standardKeyFromCsvRow3`.
    *   This row is primarily for data integrity checks or logging. For example, verify `standardKeyFromCsvRow3` matches the `d_13` value set from Row 2.
    *   **Important:** The system should *not* iterate through Row 3 and directly apply values to `StateManager.activeReferenceDataSet`. The `activeReferenceDataSet` is rebuilt by `StateManager.loadReferenceData()` based on the `d_13` value from Row 2 and the defined internal logic (carry-overs, defaults, standard values from `TEUI.ReferenceValues`).

By implementing these changes, `4011-FileHandler.js` will support the comprehensive 3-row CSV format, integrating with `StateManager`'s handling of both application and Reference Mode states.

## Appendix D: Architectural Alignment and Expected Benefits

**Objective:** To assess the proposed standardization plan's consistency with the existing architecture defined in `README.md` and to evaluate its potential impact on code performance, robustness, simplicity, and verbosity, especially concerning the integrated Reference Model.

**1. Consistency with `README.md` Architecture:**

The integrated plan in this document is designed to be highly consistent with and supportive of the core architectural principles:

*   **`StateManager` as Single Source of Truth:** Reinforced. `StateManager` manages both application state and the construction/storage of the `activeReferenceDataSet`.
*   **Modular Design (`SectionXX.js` files):** Respected. Section modules use `StateManager.getValue()` (which is mode-aware) and `FieldManager.updateFieldDisplay()`.
*   **Event-Driven Calculations:** Leveraged. `FieldManager.updateFieldDisplay()` dispatches events, triggering calculations that use mode-appropriate values from `StateManager`.
*   **Decoupling Data from Display:** Strengthened. The Unified Data Structure and `FieldManager` standardizes UI updates for both modes. Refactoring `TEUI.ReferenceValues` further decouples raw standard data.
*   **Avoiding Direct DOM Manipulation for State:** Explicitly planned for removal, crucial for Reference Mode stability.
*   **`FieldManager` Role:** Critical for UI consistency and event dispatch in both modes.
*   **Data-Centric Approach:** Prioritized for user inputs and reference data.

**2. Expected Benefits:**

*   **Performance:**
    *   **Overall Neutral to Potentially Positive:** Streamlined data handling in `StateManager` for both modes. Reduction in direct DOM manipulations. Efficient CSV processing. Core calculation speed largely unchanged but state management operations improved.

*   **Robustness:**
    *   **Significant Improvement:**
        *   Unified structure for user-editable state minimizes errors.
        *   Clear separation of application state, `TEUI.ReferenceValues` (explicit standard definitions), and the composite `activeReferenceDataSet` enhances data integrity.
        *   Reliable data interchange (3-row CSV).
        *   Fewer bugs due to centralized state updates via `StateManager` and UI updates via `FieldManager`.
        *   Predictable and robust Reference Model behavior due to clear logic for constructing `activeReferenceDataSet`.

*   **Simplicity (Code and Developer Understanding):**
    *   **Significant Improvement:**
        *   Unified `{fieldId: value}` model is simple.
        *   Refactored `TEUI.ReferenceValues` becomes cleaner.
        *   Streamlined 3-row CSV handling.
        *   Clearer `StateManager` API and role in managing both application and Reference Mode states.
        *   Consistent patterns for state management reduce cognitive load.

*   **Verbosity (Code):**
    *   **Reduced:**
        *   Less transformation code for different data formats.
        *   More concise refactored `TEUI.ReferenceValues`.
        *   Reduced DOM manipulation in section modules.
        *   Simplified `FileHandler.js` logic for CSV.

In summary, the integrated plan is expected to lead to a more robust, simpler, and less verbose codebase for managing both application state and the Reference Model, with neutral to potentially positive impacts on performance.

### Potential UI/UX Enhancements

*   **Dependency Graph Labeling:** Investigate updating the node labels in the Dependency Graph (Section 17). Currently, labels like "Field Name (declared): DefaultValue" show the original default. Consider modifying `StateManager.exportDependencyGraph()` to make these labels reflect the *current* value post-calculation/import, e.g., "Field Name (declared): CurrentValue", for better visual consistency, without altering Section 17's rendering logic.

## Appendix E: Field Behavior in Reference Mode

**Objective:** This appendix will provide a detailed specification for each relevant user-editable `fieldId` (or groups of fields by section), outlining its behavior when the application is in Reference Mode. This specification is crucial for the correct implementation of `StateManager` logic for constructing the `activeReferenceDataSet` (Phase B1) and for accurate CSV export of the Reference Mode state (Row 3).

For each field/group, the behavior will be categorized as follows:

1.  **Directly Set by Standard (Explicit Override):** The value is primarily determined by its definition in the refactored, sparse `TEUI.ReferenceValues` for the active standard. If the standard defines it, that value is used in `activeReferenceDataSet`, overriding any carried-over application state value or RefMode default for that specific field.
    *   *Examples from user input: RSI values (f_85, f_86), U-values (g_88-g_93), specific equipment efficiencies (f_113, j_116), S07 d_52/d_53 if standard specifies.*

2.  **Carry-Over from Application State (Default Behavior):** If not explicitly defined by the active reference standard in `TEUI.ReferenceValues` (and not subject to a specific Reference Mode Default or independent editability), the value is taken directly from the current application (design) state and used in `activeReferenceDataSet`. This is the default behavior for most fields.
    *   *Examples from user input: S02 fields (conditioned area, fuel costs), S03 climate data, S10 areas (Column D), S10 orientation (Column E), S10 shading % (Column G, H), S12 values.*

3.  **Reference Mode Default:** The field has a specific default value when entering Reference Mode, which is applied to `activeReferenceDataSet` *before* standard values are overlaid. This default is used if not overridden by the active standard or subsequent user interaction in Reference Mode.
    *   *Examples from user input: S10 D80 toggle (Net Useable Gains Method) defaults to 'NRC 50%'; S11 d_97 (Thermal Bridge Penalty %) defaults to 0.05 (5%) in Reference Mode, unless standard specifies otherwise or user edits it if allowed.*

4.  **Independently User-Editable in Reference Mode:** The user can modify this field's value *while in Reference Mode*. This modification directly updates `activeReferenceDataSet`. The initial value in `activeReferenceDataSet` (before user edit) would have come from carry-over, RefMode default, or standard definition.
    *   *Examples from user input: S05 d_39 (Building Typology), S07 (independent selection of d_49, d_51, while d_52/d_53 come from standard), S09 d_68/g_67, S11 d_97 (slider), S13 d_119/g_118/l_118/k_120.*

5.  **Matches Application State (Always):** Certain fields in `activeReferenceDataSet` will always mirror the Application State, regardless of the standard or other Reference Mode logic. These are effectively a direct carry-over.
    *   *Examples from user input: S04 utility bill inputs, S06 renewables, S08 IAQ targets.*

*(This appendix will be populated based on the detailed section-by-section analysis provided by the user and further refinement. The categories above provide a framework for classifying each field's behavior. **This appendix is now CRITICAL for implementing Phases B1 and E1 correctly.**)*

---

**Initial Content for Appendix E (from `future code/deepstate-structure.md` Section 5 - Requires Refactoring)**

**Crucial Disclaimer:** *The following list is taken from an older planning document (`future code/deepstate-structure.md`) and reflects a previous understanding of how `4011-ReferenceValues.js` was structured, using internal reference IDs (e.g., "T.1", "B.4") and direct `targetCell` mappings. This old structure and mapping system **will be obsolete** after `4011-ReferenceValues.js` is refactored (Phase A2) to a simple `{ "application_fieldId": "value", ... }` format for each standard.*

*This list is included **temporarily** as a starting point for identifying relevant application `fieldId`s that are affected by reference standards. It needs to be **completely refactored** to align with the new `ReferenceValues.js` structure and the behavioral categories (Directly Set by Standard, Carry-Over, Reference Mode Default, Independently User-Editable, Matches Application State Always) described above. The `targetCell` concept previously within `ReferenceValues.js` will no longer exist; the application `fieldId` will be the direct key.*

*   **Section 01 (Key Values):**
    *   `h_6` (Heating Degree Days - HDD) -> `T.1`
    *   `h_8` (Cooling Degree Days - CDD) -> `T.2`
*   **Section 02 (Building Information):**
    *   `h_13` (Code Standard for Report) -> `S.1`
*   **Section 03 (Climate Calculations):**
    *   `h_23` (Heating Setpoint T°C) -> `L.3.1`
    *   `h_24` (Cooling Setpoint T°C) -> `L.3.2`
*   **Section 07 (Water):**
    *   `h_49` (Total Water Use L/person/day - Target) -> `W.1`
    *   `h_50` (DHW Use L/person/day - Target) -> `W.2`
    *   `h_52` (DHW Efficiency % or UEF) -> `W.3`
    *   `h_53` (DWHR Efficiency %) -> `W.4`
*   **Section 08 (IAQ - Primarily informational or pass/fail, not direct energy inputs):**
    *   `h_56` (Radon Mitigation - Target) -> `Q.1`
    *   `h_57` (CO2 Control - Target) -> `Q.2`
    *   `h_58` (TVOC Control - Target) -> `Q.3`
    *   `h_59` (Indoor RH % - Target) -> `Q.4`
*   **Section 09 (Internal Gains):**
    *   `h_65` (Plug Load W/m2 - Target) -> `G.1`
    *   `h_66` (Lighting Load W/m2 - Target) -> `G.2`
*   **Section 11 (Transmission Losses):**
    *   `f_85` (Roof RSI) -> `B.4`
    *   `f_86` (Wall RSI) -> `B.5`
    *   `f_87` (Floor RSI) -> `B.6`
    *   `g_88` (Door U-value) -> `B.7.0`
    *   `g_89` (Window N U-value) -> `B.8.1`
    *   `g_90` (Window E U-value) -> `B.8.2`
    *   `g_91` (Window S U-value) -> `B.8.3`
    *   `g_92` (Window W U-value) -> `B.8.4`
    *   `g_93` (Skylight U-value) -> `B.8.5`
    *   `f_94` (Slab RSI) -> `B.9`
    *   `f_95` (Fdn Wall RSI) -> `B.10`
    *   `d_97` (Thermal Bridge Penalty %) -> `B.12`
*   **Section 12 (Air Leakage & HRV):**
    *   `g_104` (ACH50 Target) -> `V.1`
    *   `d_107` (HRV SRE @ 0°C) -> `V.2`
*   **Section 13 (Mechanical Loads & Vent):**
    *   `f_113` (Heating Eff. % or COP) -> `M.1`
    *   `j_116` (Cooling Eff. SEER or COP) -> `M.2`
    *   `l_118` (Ventilation Rate ACH) -> `M.3`
    *   `d_119` (Ventilation Rate L/s per person if applicable) -> `M.4`
*   **Section 14 (TEDI):**
    *   `h_127` (TEDI Target kWh/m2) -> `E.1`
*   **Section 15 (TEUI & GHG):**
    *   `d_140` (GHGI Target kgCO2e/m2) -> `C.1`

---
*(End of integrated content from `future code/deepstate-structure.md`)* 