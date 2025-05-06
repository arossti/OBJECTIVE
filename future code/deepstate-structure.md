# DEEPSTATE Reference Model Integration

## Overview

The goal is to integrate Reference Model capabilities into the TEUI Calculator, allowing users to compare their Design Model against selected building code minimums or standards (e.g., OBC SB10, NECB T1). Values for these standards are derived from `3037DEEPSTATE.csv` and made available via the `4011-ReferenceValues.js` module.

**Current Status & Challenges (as of 2024-05-06, after DEEPSTATE2 branch efforts):**
*   **Current Base Commit:** `87e8c36` ("Data: Restore fully populated ReferenceValues.js from backup").
*   **Functionality Achieved:** The application is stable in Design Mode. Reference Mode can be toggled. Section 11 correctly displays reference values, styles, and 100% M/N indicators for the *initial* standard active when Reference Mode is entered (typically "OBC SB10 5.5-6 Z6"). `4011-ReferenceValues.js` is fully populated.
*   **Persistent Issue:** When in Reference Mode, changing the selected standard via the `d_13` dropdown does *not* cause Section 11's UI (specifically the `targetCell` values like `f_85`, `g_88`, etc.) to update to reflect the newly selected standard's values. The UI remains stuck displaying the values of the standard that was active upon entering Reference Mode. This issue has been under investigation for an extended period (like 4 days! Hole, Shovel, Dig, Deeper!).
*   **Architectural Direction:** The sole recommended path forward is StateManager integration for managing Reference Mode data and calculations, moving away from direct DOM manipulation for state, but StateManager is fussy, and BREAKS EASILY!

## Recommended Architecture: StateManager Integration

Based on lessons learned, the **sole recommended and architecturally sound approach** is to integrate the Reference Model state directly into the core `TEUI.StateManager`.

This involves:
1.  **Extending `StateManager.state`**: Add a new object (e.g., `state.referenceValuesState`) to hold the active reference standard's values, keyed by `targetCell` ID (e.g., `f_85`).
2.  **Modifying `StateManager.getValue(fieldId)`**: This function will become mode-aware. If Reference Mode is active (checked via `TEUI.ReferenceToggle.isReferenceMode()`), it will attempt to return the value from `state.referenceValuesState[fieldId]`. If not found, or if in Design Mode, it falls back to the existing priority (userModified, imported, default).
3.  **Data Loading**: `StateManager.initialize` will call a new internal function (e.g., `loadReferenceData(standardName)`) on application start and whenever the selected standard (`d_13`) changes. This function populates `state.referenceValuesState` from `TEUI.ReferenceValues.js`.
4.  **Calculation Engine**: The existing calculation engine (`calculateAll` in `Calculator.js` and section-specific calculation functions) should **automatically use the reference values** when `getValue` returns them in Reference Mode. No separate calculation path is needed. **INVESTIGATE** Does section-based calculation have anything to do with stuck values ie. `g_88`, etc.
5.  **UI Updates**: Section UI will update based on `StateManager` events as it already does. Input fields representing reference values will be made read-only via CSS when in Reference Mode. Comparison indicators (M/N columns) will read their "current value" using `getValue` (which provides the reference value in Ref Mode) and compare against the same `state.referenceValuesState`.

This approach centralizes STATE, leverages the existing calculation and update mechanisms, and aligns with the single-source-of-truth principle.


## Implementation Phases (StateManager Approach - Recommended)

1.  **Phase 1: State Structure & Basic Loading** (Lowest risk, minimal functional change)
    *   **Goal:** Ensure reference data loads correctly into a separate state object within `StateManager` without affecting Design Mode calculations or UI.
    *   **Actions:**
        *   Add `referenceValuesState: {}` to `StateManager.state`.
        *   Implement `loadReferenceData(standard)` in `StateManager` to fetch data from `TEUI.ReferenceValues` and populate `state.referenceValuesState` (mapping `targetCell` ID to `value`). Ensure this function correctly handles cases where a standard might not have a value for every conceivable `targetCell`.
        *   Ensure `StateManager.initialize` calls `loadReferenceData` on application load (using the initial value of `d_13`) and that the existing `d_13` listener in `StateManager` also calls `loadReferenceData`.
        *   Add clear logging within `loadReferenceData` to confirm which standard is being loaded and how many values are populated.
    *   **Testing:** Verify app functions normally in Design Mode. Check console logs to ensure `state.referenceValuesState` is populated correctly when the app loads and when `d_13` is changed. No UI changes expected in Reference Mode yet.

2.  **Phase 2: Mode-Aware `getValue`**
    *   **Goal:** Enable `StateManager.getValue` to return reference values when in Reference Mode.
    *   **Actions:**
        *   Modify `StateManager.getValue(fieldId)`:
            *   Check `TEUI.ReferenceToggle.isReferenceMode()`.
            *   If true, attempt to return `state.referenceValuesState[fieldId]` if it exists.
            *   If in Reference Mode and `fieldId` is not in `state.referenceValuesState`, it should return a specific indicator (e.g., `null` or a predefined constant like `TEUI.NO_REF_VALUE`) to signify no reference value exists for that field, rather than falling back to design values. This prevents accidental display of design data in reference input cells.
            *   If not in Reference Mode, or if the reference value isn't found (and we decide against a specific indicator), it uses the original logic (userModified, imported, default).
        *   Add logging inside `getValue` to show which path is taken (Design or Reference) and what value is returned, especially for key `targetCell` IDs like `f_85` or `g_88`.
    *   **Testing:**
        *   Design Mode must remain fully functional.
        *   In Reference Mode (Section 11 initially): When toggling to Reference Mode, the `targetCell`s (e.g., `f_85`, `g_88`) should *now attempt* to display values fetched by `getValue` from the `referenceValuesState`. Since the UI rendering logic (`FieldManager`, section display functions) already uses `getValue` (or `getNumericValue` which wraps `getValue`), these cells *might* start showing reference values. Other cells (like calculated heat loss) will also start using these reference inputs.
        *   The M/N column comparisons should start reflecting comparisons against the reference values because they too use `getValue` indirectly.

3.  **Phase 3: UI Styling & Locking in Reference Mode**
    *   **Goal:** Visually differentiate and lock down reference values in the UI.
    *   **Actions:**
        *   Modify `4011-ReferenceToggle.js`: When `toggleReferenceView` activates Reference Mode, it should iterate through all relevant input fields (those designated as `targetCell`s in `ReferenceValues.js`). For each, it should:
            *   Add a CSS class (e.g., `reference-value-locked`).
            *   Set the `contenteditable` attribute to `false` or `readonly` for input elements.
        *   When toggling back to Design Mode, remove the class and restore editability.
        *   Define CSS for `.reference-value-locked` in `4011-styles.css` (e.g., red text, bold, italic, specific cursor).
    *   **Testing:** In Reference Mode, `targetCell`s in Section 11 should appear styled as reference values and be non-editable. Calculated values should still update. Design Mode should revert to normal appearance and editability.

4.  **Phase 4: Full Application Rollout & Key Values Update**
    *   **Goal:** Propagate Reference Mode calculations through all sections and update Section 01 Key Values.
    *   **Actions:**
        *   Since the calculation engine and `getValue` are now Reference Mode aware, no changes should be needed in other section modules' calculation logic itself.
        *   The primary task is to ensure that Section 01's Key Values (column E for Reference) are populated based on the results of the Reference Mode calculations. This might involve:
            *   Ensuring Section 01's display logic for column E correctly sources its values (e.g., if they are direct sums or specific fields calculated in Reference Mode).
            *   Potentially adding specific listeners or update triggers if Section 01 doesn't automatically reflect changes from other sections' reference calculations (unlikely if the dependency graph is sound).
    *   **Testing:** All sections should display appropriate values in Reference Mode. Section 01 Column E should reflect the total energy/cost/carbon based on the active Reference Standard. Switching between standards in Reference Mode should update all relevant values throughout the application, culminating in updated Section 01 Reference totals.


## Implementation Components (Legacy - DOM-Based Approach Context)

**Important Note:** The component descriptions below (`ReferenceManager`, `ReferenceToggle`, section `referenceHandler`) were part of an earlier **DOM-manipulation-based approach**. While some modules (`ReferenceToggle`, `ReferenceValues`) are still used, their interaction and the core logic for displaying/calculating reference values will shift significantly with the **StateManager Integration approach described above.** This section is kept for historical context of the `DEEPSTATE2` branch development but should NOT guide new implementation.SERIOUSLY, DON'T FOLLOW what is Directly below!!!

**START WARNING**

*   **`4011-ReferenceValues.js`**: (Core Data)
    *   **Purpose**: A static data module containing the actual reference values for different standards (OBC, NECB, etc.), keyed by standard name and then by a unique `fieldId` (e.g., "B.4" for Roof RSI).
    *   **Structure**: Each entry includes the `value`, the `section` it belongs to (for filtering), and the `targetCell` (e.g., `f_85`) in the UI where this reference value should be primarily displayed or compared against.
    *   **Status**: Populated from `CODE-VALUES.csv`.

*   **`4011-ReferenceManager.js`**: (Service/Getter for Reference Values - Role to be Simplified)
    *   **Purpose (Original DOM-based concept)**: Acted as a service to fetch specific reference values from `ReferenceValues.js` based on the currently selected standard. It also held the logic for the `createReferenceHandler` factory.
    *   **Purpose (StateManager Integration context)**: Its role will be simplified. It will primarily be responsible for providing helper functions to access data from `ReferenceValues.js` if needed by `StateManager`'s `loadReferenceData` function. It will no longer be central to the *display* or *calculation state* of reference values.
    *   **Key Functions (Simplified)**: `getValue(standard, fieldId)`, `getTargetCell(standard, fieldId)`, `getCurrentStandard()`, `getCurrentStandardFields()`.

*   **`4011-ReferenceToggle.js`**: (UI Mode Switch)
    *   **Purpose**: Handles the UI button to switch between Design Mode and Reference Mode. Toggles a body class (`reference-mode`) for CSS styling and is intended to trigger the display refresh.
    *   **Key Functions**: `initialize()`, `toggleReferenceView()`, `isReferenceMode()`, `refreshReferenceDisplay(standardOverride)`.
    *   **Interaction (StateManager Integration context)**: `toggleReferenceView` will still toggle the `referenceMode` state and the body class. `refreshReferenceDisplay` will be called by `StateManager` (when `d_13` changes while in Reference Mode) and by `toggleReferenceView` (when entering Reference Mode) to ensure the UI (via section handlers that now read from StateManager) updates.

*   **Section Module `referenceHandler` Object (DEPRECATED / To Be Replaced)**:
    *   **Purpose (Original DOM-based concept)**: Each section module (e.g., `sections/4011-Section11.js`) was to have a `referenceHandler` object (created by the factory in `ReferenceManager`). This handler was responsible for directly manipulating its section's DOM to display reference values, lock/unlock fields, and restore design values.
    *   **Replacement (StateManager Integration context)**: This explicit `referenceHandler` object in each section module **will be removed**. The standard UI update mechanisms, driven by `FieldManager` and section rendering functions reacting to `StateManager.getValue()`, will handle the display. Styling/locking will be managed globally by `ReferenceToggle` or CSS driven by the `reference-mode` body class and attributes set on fields by `StateManager` (if needed for differentiation).

**END OF WARNING**

## Reference Value Targets by Section (for StateManager `targetCell` mapping)

This list details which UI cell ID (`targetCell`) within each section corresponds to a primary reference value that should be loaded into `StateManager.state.referenceValuesState`. The `fieldId` (e.g., "B.4", "L.3.1") is the key used in `4011-ReferenceValues.js`.

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
    *   `f_94` (Slab RSI) -> `B.9`
    *   `f_95` (Fdn Wall RSI) -> `B.10`
    *   `d_97` (Thermal Bridge Penalty %) -> `B.12`
*   **Section 12 (Air Leakage & HRV):**
    *   `g_104` (ACH50 Target) -> `V.1`
    *   `d_107` (HRV SRE @ 0°C) -> `V.2`
*   **Section 13 (Mechanical Loads & Vent):**
    *   `f_113` (Heating Eff. % or COP) -> `M.1`
    *   `f_117` (Cooling Eff. SEER or COP) -> `M.2`
    *   `d_118` (Ventilation Rate L/s or ACH - Type) -> `M.3` (This might be a system type or a rate, depending on standard)
    *   `d_119` (Ventilation Rate L/s per person if applicable) -> `M.4`
*   **Section 14 (TEDI):**
    *   `h_127` (TEDI Target kWh/m2) -> `E.1` (This is often a *resultant* target, but some codes provide it upfront)
*   **Section 15 (TEUI & GHG):**
    *   `d_140` (GHGI Target kgCO2e/m2) -> `C.1` (Similar to TEDI target)

*(This list is a guideline and needs to be cross-referenced with `3037DEEPSTATE.csv` however `4011-ReferenceValues.js` has been created and matches exact `fieldId`s used in the data file.)*
