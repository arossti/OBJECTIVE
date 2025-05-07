# Reference Model Integration Plan

## 1. Overview

The goal is to integrate Reference Model capabilities into the TEUI Calculator, allowing users to compare their Design Model against selected building code minimums or standards (e.g., OBC SB10, NECB T1). Reference values are defined in `4011-ReferenceValues.js`.

**Core Challenge Addressed:** Previous attempts (documented in earlier versions of this file and explored in the `DEEPSTATE`/`DEEPSTATE2` branches) faced significant difficulties in reliably updating the UI to display reference values and ensuring calculations used these values correctly. Direct DOM manipulation proved brittle and counter-architectural.

**Solution - Leveraging FileHandler Fixes:** The successful resolution of UI update bugs during the FileHandler implementation (CSV/Excel import) revealed the correct architectural pattern. The key is using `TEUI.FieldManager.updateFieldDisplay()` which handles both the visual update *and* dispatches the necessary events (`blur`, `change`, `input`) to trigger standard section logic.

## 2. Confirmed Architectural Approach

The **only viable path** aligns with the core application architecture:

1.  **`StateManager` as Source of Truth:** `StateManager` will hold the active reference standard's values, likely in a separate internal state or by using a specific `state` flag for reference values.
2.  **Mode-Aware `StateManager.getValue`:** This function will be modified to check if Reference Mode is active (`TEUI.ReferenceToggle.isReferenceMode()`). If so, it returns the corresponding reference value from its internal state. Otherwise, it follows the standard priority (user-modified, imported, default).
3.  **Reference Data Loading:** A function (e.g., `StateManager.loadReferenceData(standardName)`) will load values from `4011-ReferenceValues.js` into the StateManager's reference state. This is triggered on app load and when the reference standard (`d_13`) changes.
4.  **UI Updates via `FieldManager`:** When Reference Mode is activated or the standard changes, the controlling logic (likely in `ReferenceToggle.js` or triggered by the `d_13` listener) will iterate through the relevant `targetCell` IDs for the selected standard. For each, it will:
    *   Update the `StateManager` with the reference value.
    *   Call `TEUI.FieldManager.updateFieldDisplay(fieldId, referenceValue, fieldDef)`.
5.  **Automatic Calculation & Display:** Because `FieldManager.updateFieldDisplay` dispatches the correct events, and section calculation logic uses `getNumericValue` (which wraps the mode-aware `StateManager.getValue`), the existing calculation engine and display logic will automatically use and reflect the reference values without needing separate code paths within section modules.
6.  **UI Locking/Styling:** `ReferenceToggle.js` will toggle a body class (`reference-mode`). CSS rules targeting this class (see `future code/reference-model-styles.css`) will handle the visual distinction and locking of input fields.

**Important Note on Legacy Code:** Previous attempts may have left DOM-manipulation code related to reference values in some section files (e.g., potentially Section 11). This code **must be identified and removed** as part of the implementation to avoid conflicts with the StateManager-driven approach.

## 3. Phased Implementation Plan

This plan prioritizes integrating the Reference Model cleanly, leveraging the now-stable UI update mechanisms.

**Phase 0: Prerequisite - Standardize Helpers (In Progress)**
*   **Goal:** Ensure all section modules consistently use global `window.TEUI.parseNumeric` and `window.TEUI.formatNumber`.
*   **Status:** S05, S08 completed. Remaining sections (01-04, 06, 07, 09, 10, 12, 14, 15) need review and refactoring.
*   **Action:** Systematically refactor remaining sections before proceeding with core Reference Model logic.

**Phase 1: StateManager Structure & Data Loading**
*   **Goal:** Implement the storage and loading of reference values within `StateManager` without affecting Design Mode.
*   **Actions:**
    *   Modify `StateManager` to include internal storage for reference values (e.g., `referenceValuesState`).
    *   Implement `loadReferenceData(standard)` function in `StateManager` to populate this state from `TEUI.ReferenceValues`.
    *   Trigger `loadReferenceData` on init and on `d_13` change.
    *   Add logging to verify correct loading.
*   **Testing:** Verify Design Mode remains unaffected. Confirm `referenceValuesState` populates correctly via console logs.

**Phase 2: Mode-Aware `StateManager.getValue`**
*   **Goal:** Enable `StateManager.getValue` to return reference values when Reference Mode is active.
*   **Actions:**
    *   Modify `StateManager.getValue` to check `TEUI.ReferenceToggle.isReferenceMode()` and return value from `referenceValuesState` if applicable.
    *   Handle cases where a reference value might not exist for a given `fieldId` (return `null` or a specific constant).
*   **Testing:** Design Mode must work. In Reference Mode, calculations should start using reference values pulled via `getValue`. UI *may* start reflecting changes partially.

**Phase 3: UI Update Triggering & Styling/Locking**
*   **Goal:** Correctly trigger UI updates via `FieldManager` and apply visual locking/styling.
*   **Actions:**
    *   Modify `ReferenceToggle.js`: When entering Reference Mode or when `d_13` changes *while in Reference Mode*, iterate through the `targetCell` fields for the selected standard.
    *   For each `targetCell`: Call `TEUI.FieldManager.updateFieldDisplay(fieldId, referenceValue, fieldDef)`. *(Note: `StateManager` should already contain the value from Phase 1)*.
    *   Ensure `ReferenceToggle.js` correctly adds/removes the `reference-mode` body class.
    *   Verify CSS in `reference-model-styles.css` correctly targets `.reference-mode` and applies locking/styling (e.g., making `.user-input` elements non-editable and styled differently).
    *   **Remove Legacy Code:** Identify and remove any direct DOM manipulation related to reference values found in section modules (e.g., Section 11).
*   **Testing:** Entering/exiting Reference Mode should correctly toggle UI styling and field editability. Changing the standard (`d_13`) while in Reference Mode should now correctly update the UI display for all `targetCell`s via `FieldManager.updateFieldDisplay`.

**Phase 4: End-to-End Calculation & Key Values**
*   **Goal:** Ensure reference calculations propagate correctly through the entire application and update Section 01 Key Values (Column E).
*   **Actions:**
    *   Verify that calculations in all sections produce expected results based on the selected reference standard.
    *   Ensure Section 01 display logic for Column E correctly reflects the final calculated reference totals.
*   **Testing:** Run through various reference standards. Check key calculated outputs in different sections and verify Section 01 Column E totals match expectations.

**Phase 5: Final Cleanup & Review**
*   **Goal:** Remove temporary logging, finalize documentation, perform regression testing.
*   **Actions:**
    *   Remove `console.log` statements added during debugging.
    *   Review and update related documentation (`README.md`, etc.).
    *   Perform thorough testing in both Design and Reference modes.

## 4. Required Components & Data

*   **`4011-ReferenceValues.js`:** Static data source.
*   **`4011-StateManager.js`:** Core state management, reference value storage, mode-aware `getValue`.
*   **`4011-ReferenceToggle.js`:** UI switch, triggers updates via `FieldManager`.
*   **`4011-FieldManager.js`:** Handles UI updates and event dispatching via `updateFieldDisplay`.
*   **`4011-styles.css` / `future code/reference-model-styles.css`:** Styling for Reference Mode.
*   **Section Modules (`sections/4011-SectionXX.js`):** Need standardized helpers (Phase 0) and removal of legacy DOM code (Phase 3). Calculation logic remains largely unchanged.

## 5. Reference Value Targets by Section

*(This list remains the same as the previous version, detailing the mapping between `ReferenceValues.js` field IDs and the target UI cell IDs)*

*   **Section 01 (Key Values):**
    *   `h_6` (Heating Degree Days - HDD) -> `T.1`
    *   `h_8` (Cooling Degree Days - CDD) -> `T.2`
*   **Section 02 (Building Information):**
    *   `h_13` (Code Standard for Report) -> `S.1` (This is informational, but good to have in reference state)
*   **Section 03 (Climate Calculations):**
    *   `h_23` (Heating Setpoint T°C) -> `L.3.1`
    *   `h_24` (Cooling Setpoint T°C) -> `L.3.2`
*   **Section 04 (Energy & Carbon - Placeholder Targets, actual values are calculated results):**
    *   *(No direct input reference values. Column E in S01 will show calculated reference totals.)*
*   **Section 05 (Energy Use):**
    *   *(No direct input reference values. Primarily calculated based on S14/S15. Internal references like m_38-40 are for comparison logic within the section, not primary code standard inputs.)*
*   **Section 06 (Renewables):**
    *   No direct input reference values.
*   **Section 07 (Water):**
    *   `h_49` (Total Water Use L/person/day - Target) -> `W.1`
    *   `h_50` (DHW Use L/person/day - Target) -> `W.2`
    *   `h_52` (DHW Efficiency % or UEF) -> `W.3` (Ensure units match across standards)
    *   `h_53` (DWHR Efficiency %) -> `W.4`
    *   **TODO:** Verify DOM mapping for S07 reference targets (`h_49`, `h_50`, `h_52`, `h_53`) and related display cells against `3037DOM.csv` due to potential historical mapping issues.
*   **Section 08 (IAQ - Primarily informational or pass/fail, not direct energy inputs):**
    *   `h_56` (Radon Mitigation - Target) -> `Q.1` (Often Yes/No or specific system type)
    *   `h_57` (CO2 Control - Target) -> `Q.2`
    *   `h_58` (TVOC Control - Target) -> `Q.3`
    *   `h_59` (Indoor RH % - Target) -> `Q.4` (May have a target range)
*   **Section 09 (Internal Gains):**
    *   `h_65` (Plug Load W/m2 - Target) -> `G.1`
    *   `h_66` (Lighting Load W/m2 - Target) -> `G.2`
*   **Section 10 (Envelope Areas):**
    *   No direct input reference values (areas are design inputs).
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
    *   `f_94` (Slab RSI) -> `B.9` // Corrected from Walls BG
    *   `f_95` (Fdn Wall RSI) -> `B.10` // Corrected from Floor Slab
    *   `d_97` (Thermal Bridge Penalty %) -> `B.12`
*   **Section 12 (Air Leakage & HRV):**
    *   `g_104` (ACH50 Target) -> `V.1`
    *   `d_107` (HRV SRE @ 0°C) -> `V.2` // Check targetCell ID validity - might be `g_107` depending on S12 implementation
*   **Section 13 (Mechanical Loads & Vent):**
    *   `f_113` (Heating Eff. % or COP) -> `M.1`
    *   `j_116` (Cooling Eff. SEER or COP) -> `M.2` // Corrected targetCell ID
    *   `l_118` (Ventilation Rate ACH) -> `M.3` // Corrected targetCell ID for ACH if applicable
    *   `d_119` (Ventilation Rate L/s per person if applicable) -> `M.4`
*   **Section 14 (TEDI):**
    *   `h_127` (TEDI Target kWh/m2) -> `E.1` (This is often a *resultant* target, but some codes provide it upfront)
*   **Section 15 (TEUI & GHG):**
    *   `d_140` (GHGI Target kgCO2e/m2) -> `C.1` (Similar to TEDI target)

*(Mapping updated based on review, but requires final verification against `4011-ReferenceValues.js` keys and UI element IDs)*