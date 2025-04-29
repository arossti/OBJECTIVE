# TEUI 4.011 - Section 12 Refactor/Cleanup Workplan

**Goal:** Refactor and clean up `sections/4011-Section12.js` (Volume and Surface Metrics) to align with the latest architectural patterns, improve maintainability, ensure calculation accuracy, and standardize helper functions.

**Current Status:**
*   Section 12 calculates various geometric and thermal metrics based on inputs from other sections (primarily Section 11 areas and Section 3 climate data).
*   It likely uses older helper function patterns.
*   It has fewer rows than S9/S10/S11, so a config-array pattern might be less impactful, but helper standardization is still important.
*   Needs verification against `README.md` guidelines and `FORMULAE-3037.csv`.

**Proposed Refactoring Strategy:**

1.  **Helper Function Standardization (High Priority):**
    *   Replace any local `getNumericValue` implementation with one that primarily uses the global `window.TEUI.parseNumeric`.
    *   Replace any local `formatNumber` with the standardized version accepting a `format` string (e.g., `'number'`, `'percent'`, `'W/m2K'` for U-Values). Update internal calls accordingly.
    *   Replace any local `setCalculatedValue` with the standard version that stores raw string values in `StateManager` (with `'calculated'` state) and updates the DOM using `formatNumber`. Ensure all calculated outputs use this helper.

2.  **Calculation Verification:**
    *   Review all calculation logic within the section against the corresponding formulas in `FORMULAE-3037.csv` (Rows 100-111).
    *   Ensure correct field IDs are being read (e.g., `d_85` to `d_95` for areas, `g_101`/`g_102` U-values from Section 11, `d_20`/`d_22` HDD from Section 3) and written.
    *   Verify the complex U-Value calculations (G101, G102) and Air Leakage calculations (I103, K103).

3.  **StateManager Integration:**
    *   Verify that all outputs (`d_104`, `g_104`, `i_104`, `k_104`, `l_104`, `g_105`, `i_105`, `d_107`, `g_108`, `g_109`, `d_110`, `g_110`, `i_110`) are correctly updated in `StateManager` using `setCalculatedValue`.
    *   Identify calculated inputs from other sections (e.g., `g_101`, `g_102`, `d_20`, `d_22`, `h_22`, `g_108`?) and ensure `StateManager.addListener` is used correctly in `initializeEventHandlers` to trigger recalculations.

4.  **README Compliance:**
    *   Check for adherence to naming conventions, precision guidelines (especially for U-Values), and other architectural principles outlined in `README.md`.

**Next Steps:**

1.  Create a new branch (e.g., `refactor/section12`).
2.  Implement Helper Function Standardization (Task 1). Test thoroughly.
3.  Verify Calculations (Task 2). Test thoroughly.
4.  Verify StateManager Integration (Task 3). Test thoroughly.
5.  Final review against README guidelines (Task 4).
6.  Commit changes and merge. 