# Workplan: Standardizing State Value Management (TEUI 4.011)

**Date:** 2025-05-16
**Version:** 1.0
**Inspired by:** `README.md`, `future code/deepstate-structure.md`

## 1. Objective

To standardize the structure, handling, import, and export of all stateful values within the TEUI 4.011 application. This includes **values for user-editable fields** (inputs, dropdowns, sliders), imported data for these fields, and values derived from reference standards (via `d_13`) that override these user-editable fields. Potentially, this could also extend to default values for user-editable fields. The goal is to create a consistent and robust data management layer that simplifies development, enhances maintainability, and ensures data integrity across different application states and features. **Purely calculated fields (e.g., results of formulas) are explicitly excluded from these standardized state datasets; they are always derived from the current set of active input values.**

## 2. Core Principle: Unified Data Structure for User-Editable Fields

The cornerstone of this workplan is to establish a **unified key-value pair structure** for representing sets of field values. This structure should be simple, easily serializable (JSON), and directly usable by `StateManager`.

*   **Proposed Unified Structure:** A simple JSON object where keys are `fieldId` strings **of user-editable fields** and values are the corresponding raw string representations of the data.
    ```json
    {
        "d_27": "1500.75", // Example: User text input for Gross Floor Area (S02)
        "h_15": "1000",    // Example: User text input for Conditioned Floor Area (S02)
        "g_118": "Constant", // Example: User dropdown for Ventilation Strategy (S13)
        "sl_d_97": "0.05", // Example: User slider for Thermal Bridge Penalty % (S11)
        // ... other fieldId: value pairs for user-editable fields
    }
    ```
    This aligns well with how `StateManager` likely handles values internally and is directly compatible with CSV-like data (one row of headers of `fieldId`s for user-editable fields, and one row of their values).

## 3. Key Areas of Work & Phased Implementation

This workplan integrates with and expands upon the phases outlined in `future code/deepstate-structure.md`, particularly concerning `StateManager` and `ReferenceValues.js`.

### Phase A: Foundational Data Structure and `ReferenceValues.js` Refactor

*   **A1. Finalize Unified Data Structure (for User-Editable Fields):** Confirm the JSON key-value structure described above, emphasizing its restriction to user-editable fields.
*   **A2. Restructure `4011-ReferenceValues.js`:**
    *   **Goal:** Modify `TEUI.ReferenceValues` so that each defined reference standard (e.g., `OBC_SB10_2017_ClimateZone5`) directly returns data **only for user-editable fields** in the Unified Data Structure. These reference values effectively act as a set of predefined inputs.
    *   **Clarification:** Calculated fields (like HDD `h_6`, or TEDI `h_127`) are NOT directly set by `ReferenceValues.js`. Instead, `ReferenceValues.js` would set the user-editable precursor fields (e.g., a specific City/Climate Location dropdown in Section 03, or specific RSI/U-values for envelope components in Section 11) that then *lead to* the calculation of `h_6` or `h_127`.
    *   **Example of `ReferenceValues.js` content reflecting this:**
        ```javascript
        // TEUI.ReferenceValues to be restructured to:
        TEUI.ReferenceValues = {
            "OBC_SB10_2017_ClimateZone5": { // Key is the standard name (from d_13)
                "d_18": "Toronto",      // Example: User-editable City/Location for Climate Data (S03)
                "f_85": "10.5",         // Example: User-editable Roof RSI (S11)
                "g_118": "HRV",         // Example: User-editable Ventilation Type (S13)
                "h_13": "OBC SB10 2017 CZ5" // Informational field, user-editable (S02)
                // ... other relevant *user-editable* fieldIds for this standard
            }
            // ... other standards
        };
        ```
    *   **Rationale:** This makes a reference standard functionally identical to an "imported dataset" or a "user-modified dataset" containing only input values. `StateManager` and `ReferenceToggle.js` load and apply these values to user-editable fields, and then the application's existing calculation logic derives all dependent calculated fields. This aligns with `deepstate-structure.md`: "Reference Standards can be considered the same as a 'user-modified' scenario."
    *   **Action:** Update `4011-ReferenceValues.js`. Ensure all `targetCell` mappings from `deepstate-structure.md` (Section 5) are critically reviewed. If a `targetCell` corresponds to a calculated field, identify the *actual user-editable input field(s)* that the reference standard should specify to achieve the desired calculated outcome. Only these user-editable `fieldId`s should be in `ReferenceValues.js`.

### Phase B: `StateManager` Enhancements for Unified Data & Reference Model

*   **B1. Internal State for Reference Values (as per `deepstate-structure.md` Phase 1):**
    *   `StateManager` to have an internal store (e.g., `this.referenceSetValues`) to hold the currently active reference standard's data (for user-editable fields), loaded in the Unified Data Structure.
    *   Implement `StateManager.loadReferenceData(standardName)` to fetch the data (for user-editable fields) from the restructured `TEUI.ReferenceValues` and populate `this.referenceSetValues`. This is triggered by `d_13` changes.
*   **B2. Mode-Aware `StateManager.getValue()` (as per `deepstate-structure.md` Phase 2):**
    *   Modify `StateManager.getValue(fieldId)`:
        *   If `TEUI.ReferenceToggle.isReferenceMode()` is true, and `fieldId` (which must be a user-editable field type to have a reference override) exists in `this.referenceSetValues`, return the reference value.
        *   Otherwise, follow the existing priority (user-modified, imported, default for that user-editable field).
        *   **Note:** `getValue()` for a purely calculated `fieldId` would still work by fetching its precedent input values (which might be from the reference set or user-modified set) and then the calculation function is applied.
*   **B3. Standardized `StateManager.setValues(dataSet, stateType)`:**
    *   **Goal:** Create a robust `StateManager` method to import a batch of values **for user-editable fields**.
    *   **Action:** Implement `StateManager.setValues(newValuesObject, stateType)` where `newValuesObject` is in the Unified Data Structure (containing only user-editable `fieldId`s), and `stateType` is e.g., `'user-modified'`, `'imported'`.
    *   This function will iterate `newValuesObject` and call the existing `StateManager.setValue(fieldId, value, stateType)` for each entry.
    *   This will be used by CSV import, "Notes" section paste, and potentially by reference model loading if not handled by direct UI updates.

### Phase C: CSV Export/Import Standardization

*   **C1. Refine CSV Export Logic (`4011-FileHandler.js`):**
    *   **Initial 2-Row Format (Completed 2025-05-16):** The system now successfully exports and imports a 2-row CSV representing the current application state for all user-editable fields.
    *   **Enhanced 3-Row Format (Planned):**
        *   **Goal:** To export a 3-row CSV. The first row contains all user-editable `fieldId`s. The second row contains their current application state values. The third row contains the name of the active reference standard (from `d_13`) in its first cell, followed by the values that this standard defines for the corresponding `fieldId`s in the header row.
        *   **Format (3 rows total):**
            *   **Row 1 (Header Row - User-Editable Field IDs):** Comma-separated `fieldId`s of ALL user-editable fields defined in the application (e.g., from `FieldManager.getAllFields()` filtered by user-editable types, including `d_13`). This order must be consistent.
                *   Example: `d_27,h_15,g_118,d_18,f_85,d_13,...`
            *   **Row 2 (Current Application State Values):** Corresponding raw string values for the `fieldId`s in Row 1, reflecting the current application's state. The value for `d_13` will be the key of the active reference standard.
                *   Example: `1500.75,1000,Constant,Toronto,7.5,OBC_SB10_2017_ClimateZone5,...`
            *   **Row 3 (Active Reference Standard Values):**
                *   Cell 1: The key/name of the active reference standard (from `d_13`).
                *   Subsequent Cells: For each `fieldId` in Row 1 (starting from the first `fieldId`), list the corresponding value as defined by the active reference standard (sourced from the restructured `TEUI.ReferenceValues`). If a `fieldId` is not defined by the active standard, its cell in this row will be empty.
                *   Example (if Row 1 starts `d_27,h_15,g_118,d_18,f_85,d_13` and `d_13` is `OBC_SB10_2017_ClimateZone5`):
                    `OBC_SB10_2017_ClimateZone5,,,,Toronto,10.5,OBC_SB10_2017_CZ5_Ref_Value_for_h_13,...`
                    *(Note: The value for `h_13` in Row 3 would be the reference value for `h_13` if the standard defines it, which might be different from the standard's key itself if `h_13` serves a different purpose within the standard's definition).*
    *   **Action (for 3-Row Format):**
        *   Ensure `collectDataForExport()` in `FileHandler.js` gathers all user-editable `fieldId`s for Row 1.
        *   Row 2: Collect current values from `StateManager` for `fieldId`s in Row 1.
        *   Row 3:
            1.  Get the active reference standard key from `StateManager.getValue('d_13')`.
            2.  Fetch the corresponding reference data object from the restructured `TEUI.ReferenceValues[active_standard_key]`.
            3.  The first cell of Row 3 is the `active_standard_key`.
            4.  For each `fieldId` in Row 1, if it exists as a key in the fetched reference data object, add its value to Row 3; otherwise, add an empty string.
        *   Ensure output values are raw, unformatted strings (properly CSV-escaped).
*   **C2. Refine CSV Import Logic (`4011-FileHandler.js`):**
    *   **Initial 2-Row Format (Completed 2025-05-16):** The system now successfully imports a 2-row CSV, updating the current application state for user-editable fields.
    *   **Enhanced 3-Row Format (Planned):**
        *   **Goal:** Import CSVs (formatted as per C1, 3 rows).
            *   Row 1 (Headers) defines the `fieldId`s.
            *   Row 2 (Application State Values) updates `StateManager`. This includes setting `d_13`, which determines the active reference standard.
            *   Row 3 (Reference Standard Values) is primarily for record-keeping and verification. The primary mechanism for applying reference values will be the change in `d_13` (from Row 2) triggering a load from the canonical `TEUI.ReferenceValues`.
    *   **Action (for 3-Row Format):**
        *   Modify `handleExcelFile()` (or CSV specific part) in `FileHandler.js`.
        *   The import parser should expect `fieldId`s on Row 1, current application values on Row 2, and active reference standard values on Row 3.
        *   **Processing Row 2:** Parse into a Unified Data Structure (`{fieldId: value, ...}`) and use `StateManager.setValues(parsedApplicationStateObject, 'imported')`. This updates all user-editable fields, including `d_13`. The change to `d_13` is critical, as it should trigger the application (via `ReferenceToggle.js` and `StateManager.loadReferenceData`) to load and apply the specified standard's values from the *internal, refactored* `TEUI.ReferenceValues`.
        *   **Processing Row 3:**
            *   The data in Row 3 can be used for validation or logging (e.g., confirming the `active_standard_key` from Row 3 Cell 1 matches the `d_13` value set by Row 2).
            *   The system should *not* directly apply field values from Row 3 to override the canonical values from `TEUI.ReferenceValues` upon import (unless a future, explicit "override reference from CSV" feature is introduced). The source of truth for reference values is `TEUI.ReferenceValues`.

### Phase D: "Notes" Section Integration for Data Pasting

*   **D1. UI Element in Section 18 (Notes):**
    *   Add a `<textarea>` element within `4011-Section18.js` (or its rendering in `index.html`).
    *   Add a "Load Data from Notes" button.
*   **D2. Parsing and Loading Logic:**
    *   When the button is clicked:
        1.  Get the content of the `<textarea>`.
        2.  Assume the content is CSV-formatted (or allow a toggle for JSON), containing data **for user-editable fields only**.
        3.  Parse this text into the Unified Data Structure.
        4.  Call `StateManager.setValues(parsedDataObject, 'user-modified')` (or `'imported'` - to be decided).
        5.  Trigger UI updates for all pasted **user-editable fields** using `TEUI.FieldManager.updateFieldDisplay()` for each field.
*   **D3. "Copy Current Data to Notes" Feature (Optional):**
    *   A button to serialize the current `StateManager` values **for user-editable fields** (using a method like `StateManager.getAllUserEditableValuesInUnifiedFormat()`) into CSV format and populate the `<textarea>`.

### Phase E: UI Updates, Styling, and Legacy Code Removal

*   **E1. UI Update Triggering for Reference Mode (as per `deepstate-structure.md` Phase 3):**
    *   When Reference Mode is activated/changed via `d_13`, `ReferenceToggle.js` will:
        1.  Ensure `StateManager.loadReferenceData()` has populated the reference values (for user-editable fields).
        2.  Iterate through the `fieldId`s of the selected reference standard (obtained from the restructured `TEUI.ReferenceValues`, which now only contains user-editable `fieldId`s).
        3.  For each such `fieldId`, get the `referenceValue` (e.g., from `StateManager.referenceSetValues`).
        4.  Call `TEUI.FieldManager.updateFieldDisplay(fieldId, referenceValue, fieldDef)`. This updates the input field, and its `blur`/`change`/`input` events will trigger recalculations of any dependent calculated fields.
*   **E2. UI Locking/Styling (as per `deepstate-structure.md` Phase 3):**
    *   Verify CSS in `reference-model-styles.css` correctly locks and styles input fields when the `reference-mode` body class is active.
*   **E3. Remove Legacy DOM Manipulation (as per `deepstate-structure.md`):**
    *   **Action:** Systematically search all section modules (`sections/4011-SectionXX.js`) for any direct DOM manipulation related to setting/getting values, especially for reference model display.
    *   **Example from user query:** "Check DOM for antipattern references (ie. Section07)". This section, and others like Section 11 (mentioned in `deepstate-structure.md`), should be prioritized for review.
    *   Replace any such anti-patterns with `StateManager` interactions and `FieldManager.updateFieldDisplay()` calls.

### Phase F: Layout Considerations (Tables vs. Flexbox/Grid)

*   **F1. Assessment:** The user query "If tables are harmful, how to switch now to flexbox or grid for table structure" points to a desire for more modern layout techniques.
*   **F2. Statement:** Transitioning from `<table>` based layouts to CSS Flexbox or Grid is a significant UI refactoring effort, largely separate from data structure standardization but benefiting from it. The `README.md` (Section 8: Known Limitations, UI/UX Improvements Needed) already indicates this is planned for a "4012 Visual Refactor".
*   **F3. Workplan Note:** This `STANDARDIZED-STATES.md` workplan focuses on the data layer. A well-defined and consistent data layer will make future layout refactoring easier, as the logic for populating and interacting with fields will be independent of the specific layout technology used. No immediate action on layout changes within *this* workplan, but acknowledge its relevance.

### Phase G: Testing, Validation, and Documentation

*   **G1. Comprehensive Test Cases:**
    *   Develop test scenarios covering:
        *   CSV Export: Verify only user-editable fields are present with correct raw values.
        *   CSV Import: Test import of CSVs containing only user-editable fields. Verify `StateManager` update and UI reflection.
        *   Reference Mode:
            *   Select various standards via `d_13`.
            *   Verify correct values are displayed in **user-editable input fields**.
            *   Verify **calculated fields** (like `h_6`, TEUI, TEDI, Section 01 Column E values) update correctly *based on* these reference inputs.
        *   Notes Section Paste: Test pasting valid/invalid CSV/JSON data containing only user-editable fields.
        *   Interactions: e.g., Load CSV, then switch to Reference Mode, then switch back.
    *   Use existing case studies (mentioned in `README.md`) to validate mappings and results.
*   **G2. Mapping Validation:** "Drill down on mis-mappings." Pay close attention to `fieldId` consistency for **user-editable fields** between `ReferenceValues.js`, CSVs, and the actual DOM elements.
*   **G3. Documentation:**
    *   Update `README.md` to reflect the new standardized data structures (focused on user-editable fields) and `StateManager` functionalities.
    *   Document the "Notes" section data pasting feature.
    *   Ensure this `STANDARDIZED-STATES.md` is reviewed and finalized.

## 4. Consistency with Architecture (`README.md` & `deepstate-structure.md`)

*   **`StateManager` as Single Source of Truth:** This plan reinforces this principle.
*   **UI Updates via `FieldManager.updateFieldDisplay()`:** Crucial for ensuring events are dispatched correctly, triggering recalculations and downstream effects. This is a key learning from `FileHandler` fixes and central to `deepstate-structure.md`.
*   **Avoid Direct DOM Manipulation:** Explicitly planned for removal.
*   **Event-Driven Calculations:** Standardized updates via `StateManager` and `FieldManager` will naturally integrate with the existing event-driven calculation engine.

## 5. Timeline & Priority

*   **Phase A & B (Data Structure, `ReferenceValues.js`, `StateManager` Core):** Highest priority. Forms the foundation.
*   **Phase C (CSV Import/Export):** High priority. Core user functionality.
*   **Phase E (UI Updates & Legacy Removal for Reference Mode):** High priority, essential for `d_13` functionality.
*   **Phase D ("Notes" Section Paste):** Medium priority. Useful feature but can follow core data handling.
*   **Phase F (Layout):** Out of scope for this specific workplan; part of a larger UI refactor.
*   **Phase G (Testing):** Ongoing throughout, with a dedicated final testing period.

This workplan aims to create a more robust, maintainable, and consistent approach to state management in the TEUI 4.011 calculator, aligning with best practices identified in the existing codebase and future plans. 

## Appendix A: CSV Export Field Verification (vs. `4011-ExcelMapper.js`)

**Date of Analysis:** 2025-05-16

**Objective:** To verify if user-editable fields listed in `4011-ExcelMapper.js` (specifically in `this.excelReportInputMapping`), particularly those with slider-like behavior or percentage types, are correctly included in the CSV export functionality of `4011-FileHandler.js`.

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

The `STANDARDIZED-STATES.md` workplan (Phase A2) restructures `TEUI.ReferenceValues` so that each defined reference standard directly returns data **only for user-editable fields** in the Unified Data Structure:
```json
// Example: TEUI.ReferenceValues["OBC_SB10_2017_ClimateZone5"] might look like:
{
    "d_18": "Toronto",      // User-editable City/Location for Climate Data (S03)
    "f_85": "10.5",         // User-editable Roof RSI (S11)
    "h_13": "OBC SB10 2017 CZ5" // User-editable description field (S02)
    // ... other relevant *user-editable* fieldIds for this standard
}
```
The CSV export needs to represent both the current application's state (which includes the key of the active reference standard, e.g., in field `d_13`) and the set of values defined by that active standard.

**2. Proposed 3-Row Aligned CSV Export/Import Format (from Phase C):**

To achieve this, the CSV format will consist of three rows:

*   **Row 1 (Header Row - User-Editable Field IDs):**
    *   A single, comma-separated string of `fieldId`s for ALL user-editable fields in the application. This list is comprehensive and ordered consistently. The `fieldId` for the reference standard selection (e.g., `d_13`) must be included.
    *   Example: `d_27,h_15,g_118,d_18,f_85,d_13,...`

*   **Row 2 (Current Application State Values):**
    *   A single, comma-separated string of the corresponding raw string values for the `fieldId`s in Row 1. This reflects the live state of the application at the time of export. The value for `d_13` here indicates the active reference standard.
    *   Example: `1500.75,1000,Constant,Toronto,7.5,OBC_SB10_2017_ClimateZone5,...`

*   **Row 3 (Active Reference Standard Values):**
    *   **Cell 1:** The key/name of the active reference standard (this value will match the value of `d_13` in Row 2).
    *   **Subsequent Cells:** For each `fieldId` in Row 1 (from the *first* `fieldId`), this cell contains the value that the active reference standard (identified in Cell 1 of this row) defines for that `fieldId`. Values are sourced from the restructured `TEUI.ReferenceValues`. If the standard does not define a value for a particular `fieldId` from Row 1, the corresponding cell in Row 3 is left empty.
    *   Example (assuming Row 1 is `d_27,h_15,g_118,d_18,f_85,d_13` and active standard `OBC_SB10_2017_ClimateZone5` from Row 2's `d_13` defines `d_18`, `f_85`, and `h_13`):
        `OBC_SB10_2017_ClimateZone5,,,,Toronto,10.5,OBC SB10 2017 CZ5,...`
        (Cells for `d_27`, `h_15`, `g_118` are empty if `OBC_SB10_2017_ClimateZone5` doesn't define them. The value for `d_13` in this row comes from the standard's data for `h_13` field from the reference standard, if it has such a field for descriptive purposes).

**Benefits of this Alignment:**

*   **Comprehensive State Snapshot:** Captures both user-modified application state and the underlying reference standard state.
*   **Single Header Row:** Simplifies parsing and reduces redundancy.
*   **Direct `ReferenceValues.js` Link:** Row 3 directly reflects data from the (refactored) `TEUI.ReferenceValues` structure.
*   **Simplified Import Logic:**
    *   Row 2 directly updates the application state. Setting `d_13` from Row 2 correctly triggers the application's internal mechanisms to load reference data.
    *   Row 3 serves as a record/checksum of the reference values at the time of export. The import process relies on the `d_13` value from Row 2 to fetch canonical reference values from `TEUI.ReferenceValues`.

This 3-row format balances comprehensiveness with efficiency for data interchange.

## Appendix C: Updating `4011-FileHandler.js` for Standardized CSV Export (3-Row Format)

**Objective:** To outline the required modifications within `4011-FileHandler.js` (primarily the `exportToCSV` function and its helpers) to produce and parse CSV files in the standardized 3-row format. This ensures alignment with the `ReferenceValues.js` refactor (Phase A2) and CSV import expectations (Phase C2).

**Recap of Standardized 3-Row CSV Format:**

*   **Row 1 (Header Row):** Comma-separated `fieldId`s of all user-editable fields (including `d_13`).
    *   Example: `d_27,h_15,g_118,d_18,f_85,d_13,...`
*   **Row 2 (Current Application State Values):** Comma-separated raw string values corresponding to Row 1 `fieldId`s.
    *   Example: `1500.75,1000,Constant,Toronto,7.5,OBC_SB10_2017_ClimateZone5,...`
*   **Row 3 (Active Reference Standard Values):**
    *   Cell 1: Key of the active reference standard (from `d_13` in Row 2).
    *   Subsequent Cells: Values from the active standard for each `fieldId` in Row 1, or empty if not defined by the standard.
    *   Example: `OBC_SB10_2017_ClimateZone5,,,,Toronto,10.5,OBC SB10 2017 CZ5,...`

**Key Modifications in `4011-FileHandler.js` - `exportToCSV()`:**

1.  **Identifying User-Editable Fields for Row 1 (Header):**
    *   Action: Use `TEUI.FieldManager.getAllFields()` and filter by user-editable types (e.g., `\'editable\'`, `\'dropdown\'`, `\'year_slider\'`, `\'percentage\'`, `\'coefficient\'`, `\'number\'`). This list of `fieldId`s becomes Row 1. Ensure a consistent order. This list must include `d_13`.

2.  **Collecting Data for Row 2 (Application State):**
    *   Action: For each `fieldId` in the ordered list from step 1, retrieve its current value using `window.TEUI.StateManager.getValue(fieldId)`. This forms Row 2.

3.  **Collecting Data for Row 3 (Reference Standard State):**
    *   **Prerequisite:** This step heavily relies on `TEUI.ReferenceValues` being refactored as per Phase A2, where `TEUI.ReferenceValues[standardKey]` returns an object like `{ fieldId1: value1, fieldId2: value2, ... }` containing only user-editable fields for that standard.
    *   Action:
        1.  Get the `activeStandardKey` from `window.TEUI.StateManager.getValue('d_13')`. This will be the first cell of Row 3.
        2.  If `activeStandardKey` is valid, attempt to fetch `referenceDataForStandard = TEUI.ReferenceValues[activeStandardKey]`. This will require `TEUI.ReferenceValues` to be populated and accessible.
        3.  Initialize an array for Row 3 values, starting with `activeStandardKey`.
        4.  Iterate through the ordered list of `fieldId`s from Row 1. For each `fieldId`:
            *   If `referenceDataForStandard` exists and `referenceDataForStandard.hasOwnProperty(fieldId)`, append `referenceDataForStandard[fieldId]` to the Row 3 values array.
            *   Otherwise, append an empty string.
        5.  This array, when joined by commas, becomes the content for Row 3.

4.  **Constructing the CSV String:**
    *   Properly escape all values for CSV (handle commas, quotes, newlines).
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
    *   Validate that `importedAppStateValues` and (`importedRefStateValues` length -1) have the same number of columns as `importedFieldIds`.

2.  **Processing Row 2 (Application State):**
    *   Create a `dataToImport = {}` object.
    *   Iterate from `i = 0` to `importedFieldIds.length - 1`.
    *   `dataToImport[importedFieldIds[i]] = importedAppStateValues[i];`
    *   Call `window.TEUI.StateManager.setValues(dataToImport, 'imported')`. This is the primary mechanism for updating the application. The crucial part is that `d_13` (reference standard selector) gets set here. This change to `d_13` should trigger `ReferenceToggle.js` to then call `StateManager.loadReferenceData(new_d13_value)`, which in turn uses the refactored `TEUI.ReferenceValues` to load the correct set of reference values for user-editable fields and update the UI via `FieldManager.updateFieldDisplay()`.

3.  **Processing Row 3 (Reference Standard State):**
    *   The first cell of `importedRefStateValues` contains the `standardKeyFromCsvRow3`.
    *   This row is primarily for data integrity checks or logging during import. For example, one could verify that `standardKeyFromCsvRow3` matches the `d_13` value that was just set from Row 2.
    *   **Important:** The system should *not* iterate through Row 3 and directly call `StateManager.setValue()` for each field. The application of reference values must occur through the established mechanism: changing `d_13` (via Row 2 import) which then uses the canonical `TEUI.ReferenceValues` definitions. This maintains `TEUI.ReferenceValues` as the single source of truth for reference standard data.

By implementing these changes, `4011-FileHandler.js` will support the more comprehensive 3-row CSV format, tightly integrating with the planned refactoring of `TEUI.ReferenceValues`.

## Appendix D: Architectural Alignment and Expected Benefits

**Objective:** To assess the proposed standardization plan's consistency with the existing architecture defined in `README.md` and to evaluate its potential impact on code performance, robustness, simplicity, and verbosity.

**1. Consistency with `README.md` Architecture:**

The proposed plan in `STANDARDIZED-STATES.md` is designed to be highly consistent with and supportive of the core architectural principles outlined in `README.md`:

*   **`StateManager` as Single Source of Truth:** The plan *reinforces* this principle. All state modifications (user inputs, CSV imports, reference standard applications, pasted data) are channeled through `StateManager`. The unified data structure for user-editable fields simplifies the data `StateManager` needs to manage and retrieve.
*   **Modular Design (`SectionXX.js` files):** The plan respects the modularity. Section modules will continue to manage their UI rendering and specific calculation logic. However, the *way* they interact with and receive updates for user-editable state becomes standardized via `StateManager.getValue()` and `FieldManager.updateFieldDisplay()`, rather than potentially ad-hoc methods.
*   **Event-Driven Calculations:** The plan leverages the existing event-driven architecture. By using `StateManager` to set values and `FieldManager.updateFieldDisplay()` to reflect these changes in the UI, the necessary events (`input`, `change`, `blur`) will be dispatched, triggering the existing calculation cascade correctly and consistently.
*   **Decoupling Data from Display:** This is a key improvement. By defining a clear, unified structure for user-editable state data (independent of its presentation) and standardizing how this data is applied to the UI (via `FieldManager`), the plan strengthens the decoupling. The refactoring of `TEUI.ReferenceValues` is a prime example, where reference data becomes a pure data object of user-editable inputs.
*   **Avoiding Direct DOM Manipulation for State:** The plan explicitly aims to reduce and eliminate direct DOM manipulation for setting or getting state values within section modules (Phase E3), aligning with `README.md` and `deepstate-structure.md` recommendations. Interactions will be mediated by `StateManager`.
*   **`FieldManager` Role:** `FieldManager`'s role is critical. Its knowledge of field metadata (like `type`, crucial for identifying user-editable fields) and its `updateFieldDisplay()` method are central to ensuring UI consistency and proper event dispatch when state changes.
*   **Data-Centric Approach:** The entire workplan shifts towards a more data-centric approach for user inputs, where the structure and handling of this data are prioritized and standardized across features (CSV, Reference Values, Notes paste).

**2. Expected Benefits:**

*   **Performance:**
    *   **Overall Neutral to Potentially Positive:** The primary focus is not on raw calculation speed, which may remain largely unchanged. However, benefits can arise from:
        *   More streamlined data handling within `StateManager` due to a simpler, consistent structure for user-editable inputs.
        *   Reduction in direct DOM manipulations, which can be performance-intensive if not managed carefully.
        *   Faster and more efficient parsing/processing of CSV files due to the simplified format.
    *   The most significant performance impact is expected to be neutral for core calculations but potentially improved for state management operations and data interchange tasks.

*   **Robustness:**
    *   **Significant Improvement:** This is a major anticipated benefit.
        *   **Reduced Ambiguity:** A single, well-defined structure for user-editable state data minimizes errors arising from handling disparate data formats across different modules or features.
        *   **Data Integrity:** Clear separation of user-editable inputs from calculated values prevents accidental overwrites and ensures that the state of user inputs is always the ground truth from which calculations are derived.
        *   **Reliable Data Interchange:** Standardized CSV import/export (matching the internal unified structure) makes these operations more dependable.
        *   **Fewer Bugs:** Centralizing state updates via `StateManager.setValues()` and UI updates via `FieldManager.updateFieldDisplay()` reduces the likelihood of bugs caused by inconsistent state management practices or direct, uncoordinated DOM updates.
        *   **Predictable Reference Model:** The refactoring of `TEUI.ReferenceValues` will make the application of reference standards much more robust and predictable, as they will only set user-editable fields.

*   **Simplicity (Code and Developer Understanding):**
    *   **Significant Improvement:**
        *   **Unified Data Model:** The core `{fieldId: value}` structure for all user-editable state is inherently simple to understand and work with.
        *   **Simplified `ReferenceValues.js`:** The structure of `TEUI.ReferenceValues` becomes much cleaner and easier to maintain, directly reflecting the data it provides.
        *   **Streamlined CSV Handling:** The CSV import/export format (two rows) is trivial to generate and parse. Logic in `4011-FileHandler.js` will simplify.
        *   **Clearer `StateManager` API:** `StateManager`'s role and its API (e.g., for batch updates) become more focused and easier to use correctly.
        *   **Reduced Cognitive Load:** Developers will have a consistent pattern for how user-editable state is stored, managed, imported, exported, and applied, reducing the mental overhead of navigating different mechanisms.

*   **Verbosity (Code):**
    *   **Reduced:**
        *   **Less Transformation Code:** Less boilerplate code will be needed for transforming data between CSV formats, internal structures, and `ReferenceValues` formats.
        *   **More Concise `ReferenceValues.js`:** Each standard will be a direct map of `fieldId: value`, removing the nested object structure with `section` and `targetCell` for each defined value.
        *   **Reduced DOM Manipulation:** Replacing direct DOM manipulation in section modules with calls to `StateManager` or `FieldManager.updateFieldDisplay()` will lead to more concise and standardized code in those modules.
        *   **Simplified `FileHandler.js`:** The logic for CSV processing (both import and export) will be significantly less verbose due to the simpler data format.

In summary, the proposed standardization plan aligns well with the existing architectural goals and is expected to lead to a more robust, simpler, and less verbose codebase for managing user-editable state, with neutral to potentially positive impacts on performance. 

### Potential UI/UX Enhancements

*   **Dependency Graph Labeling:** Investigate updating the node labels in the Dependency Graph (Section 17). Currently, labels like "Field Name (declared): DefaultValue" show the original default. Consider modifying `StateManager.exportDependencyGraph()` to make these labels reflect the *current* value post-calculation/import, e.g., "Field Name (declared): CurrentValue", for better visual consistency, without altering Section 17's rendering logic. 