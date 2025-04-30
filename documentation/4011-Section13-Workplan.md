# TEUI 4.011 - Section 13 Refactor/Cleanup Workplan

**Goal:** Refactor and clean up `sections/4011-Section13.js` (Mechanical Loads) to align with the latest architectural patterns (`README.md`), improve maintainability, ensure calculation accuracy against `FORMULAE-3037.csv` and `COOLING-TARGET.csv`, enhance UI formatting (including dynamic visibility), and potentially implement new analysis features (Overheat Warning, Unmet Hours).

**Current Status:**
*   Section 13 calculates heating and cooling loads, system efficiencies, and resulting energy consumption based on various system types and fuel sources.
*   It has complex dependencies on Climate (S3), Internal/Envelope Gains/Losses (S9, S10, S11, S14), and Geometry (S12).
*   Features intricate logic for fuel switching, efficiency lookups (COP, AFUE, HSPF, SEER), and potentially cooling calculations referencing `COOLING-TARGET.csv`.
*   Likely uses older helper function patterns and requires thorough review for architectural compliance and calculation accuracy.

**Proposed Refactoring Strategy:**

1.  **Architectural Alignment & Standardization (High Priority):**
    *   **Helper Functions:**
        *   Replace any local `getNumericValue` or equivalent parsing logic with calls to the global `window.TEUI.parseNumeric` (defined in `4011-StateManager.js`).
        *   Replace any local `formatNumber` with calls to the new global `window.TEUI.formatNumber` (defined in `4011-StateManager.js`), using appropriate `formatType` strings (e.g., `'number-2dp'`, `'percent-0dp'`, `'integer'`).
        *   Replace any local `setCalculatedValue` with the standardized pattern (used in S9/S12): a local helper that correctly updates StateManager (`StateManager.setValue(..., 'calculated')`) with the raw value (as string) and updates the DOM using the global `window.TEUI.formatNumber`.
    *   **StateManager Integration:**
        *   Verify all input dependencies (e.g., TEDI `h_126`, Cooling Loads `h_129`, Fuel Type dropdowns, Climate data) are correctly read using `getNumericValue`/`getFieldValue`.
        *   Ensure `StateManager.addListener` is used appropriately for calculated inputs coming from other sections if simple dependency registration isn't sufficient.
        *   Confirm all calculated outputs (e.g., `f_113`-`f_123`, `j_113`-`j_123`) are correctly written to StateManager via `setCalculatedValue`.
    *   **README Compliance:** Review against naming conventions, precision guidelines, DOM structure, and event handling patterns.

2.  **Calculation Verification:**
    *   Review core heating/cooling energy calculations against `FORMULAE-3037.csv` (Rows ~112-123).
    *   Verify fuel switching logic: How do `dd_d_113`, `dd_d_114`, `dd_d_115`, `dd_d_119` affect efficiency values (`j_113`, `j_114`, `j_115`, `j_119`) and subsequent calculations?
    *   Verify efficiency lookups/calculations (COP, AFUE, etc.).
    *   Cross-reference cooling calculations with logic in `COOLING-TARGET.csv` if applicable. Ensure correct inputs are used (e.g., design temps, gains).

3.  **UI Formatting & Dynamic Visibility:**
    *   Apply appropriate number formatting using the new global `window.TEUI.formatNumber` via `setCalculatedValue`.
    *   Implement dynamic visibility/styling ("ghost text"/disabled appearance) for fields that become irrelevant based on user selections (e.g., if 'Heating Fuel' is 'Electric', gas efficiency fields might be grayed out). This uses exisiting 'ghost' or 'pending' styles in 4011-styles.css:
        *   Applying/removing CSS classes (like `disabled-input`) in JavaScript event handlers (dropdown changes) or calculation functions.
        *   Potentially clearing/setting StateManager values to 'N/A' for disabled fields - (although generally our intent is to show user options that can be enabled, but are inactive with the current options).

4.  **General Cleanup:**
    *   Remove all commented-out code blocks.
    *   Remove any remaining `console.log`, `console.warn`, etc., statements.
    *   Improve code comments and readability where necessary.

5.  **NEW Feature - Overheat Warning (Implement if feasible):**
    *   **Goal:** Provide a simple visual indicator if passive gains significantly exceed typical cooling capacity or sensible thresholds, suggesting potential overheating risk.
    *   **Method:**
        *   Analyze existing calculated values: Compare peak gains (potentially estimated from S10/S9) against cooling design capacity (if calculated) or use simplified thresholds based on area/climate.
        *   Reference `COOLING` worksheet logic if helpful for defining thresholds.
        *   Implement a simple calculation to determine risk level (e.g., Low/Medium/High).
        *   Add a new (non-editable) cell in the layout to display an indicator (icon/text) based on the calculated risk level. Update via `setCalculatedValue`.
        *   Ask the Human about their linear-regression force-fit model for approximating monthly weather from annual weather data to determine peaks

6.  **NEW Feature - Unmet Hours Analysis (Exploratory - Lower Priority):**
    *   **Goal:** Provide a *rough estimate* of potential unmet heating/cooling hours based on the building's passive performance (envelope + leakage + solar/internal gains) *without* active mechanical systems.
    *   **Method (Initial Exploration):**
        *   Leverage the model's accurate annual energy balance calculations.
        *   Calculate simple Balance Point Temperatures for heating and cooling based on envelope losses (S12 `i_104`), internal/solar gains (S9 `i_71`/`k_71`, S10?).
        *   Compare balance points to average/design temperatures (S3) to *estimate* periods where passive measures are insufficient.
        *   Focus on providing a basic indicator derived from the model's core calculations.
        *   Add new (non-editable) cells in the layout for estimated unmet heating/cooling indicators (could be qualitative or simplified hours/percentage). Update via `setCalculatedValue`.

**Next Steps:**

1.  Create a new branch: `SECTION13COMPLETE`.
2.  Implement Task 1 (Architectural Alignment & Standardization). Test thoroughly.
3.  Implement Task 2 (Calculation Verification). Test thoroughly.
4.  Implement Task 3 (UI Formatting & Dynamic Visibility). Test thoroughly.
5.  Implement Task 4 (General Cleanup).
6.  Implement Task 5 (Overheat Warning - if deemed feasible during implementation). Test.
7.  Implement Task 6 (Unmet Hours - if deemed feasible/useful within static model limits). Test.
8.  Final review against `README.md` and requirements.
9.  Commit changes and merge. 