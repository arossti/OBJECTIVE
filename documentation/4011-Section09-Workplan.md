# TEUI 4.011 - Section 09 Refactor/Cleanup Workplan

**Goal:** Refactor and clean up `sections/4011-Section09.js` (Occupant Internal Gains) to align with the latest architectural patterns, improve maintainability, ensure calculation accuracy, and standardize helper functions.

**Current Status:**
*   Section 09 calculates internal gains from occupants, plug loads, lighting, equipment, and DHW system losses.
*   The section appears functional but likely uses older helper function patterns and might benefit from structural review based on the Section 11 refactor (it has several similar rows for different gain types).
*   Needs verification against `README.md` guidelines and `FORMULAE-3037.csv`.

**Proposed Refactoring Strategy:**

1.  **Helper Function Standardization (High Priority):**
    *   Replace any local `getNumericValue` implementation with one that primarily uses the global `window.TEUI.parseNumeric`.
    *   Replace any local `formatNumber` with the standardized version accepting a `format` string (e.g., `'number'`, `'percent'`). Update internal calls accordingly.
    *   Replace any local `setCalculatedValue` with the standard version that stores raw string values in `StateManager` (with `'calculated'` state) and updates the DOM using `formatNumber`. Ensure all calculated outputs use this helper.

2.  **Calculation Verification:**
    *   Review all calculation logic within the section against the corresponding formulas in `FORMULAE-3037.csv` (Rows 62-71).
    *   Ensure correct field IDs are being read and written.
    *   Pay attention to handling of units (e.g., W/m² vs. total W, kWh/yr vs W).

3.  **StateManager Integration:**
    *   Verify that all outputs intended for use by other sections are correctly updated in `StateManager` using `setCalculatedValue`.
    *   Identify any *calculated* inputs *from other sections* (if any) and ensure `StateManager.addListener` is used correctly in `initializeEventHandlers` to trigger recalculations. (Section 9 mostly takes inputs or uses constants/schedules).

4.  **Structural Review (Consider Section 11 Pattern):**
    *   Analyze rows 64-69. While inputs differ slightly (W/pp vs W/m²), the calculation structure for annual kWh (`H_XX`), heating gain (`I_XX`), cooling gain (`K_XX`), and percentages (`J_XX`, `L_XX`) appears highly repetitive.
    *   **Consider:** Creating a configuration array defining the input parameters for each row (input field, gain type, schedule lookup key, etc.).
    *   **Consider:** Creating a single parameterized function `calculateGainRow(config)` that takes the row config and performs the common calculations.
    *   **Consider:** Refactoring `calculateAll` (or equivalent) to loop through the config array, call `calculateGainRow`, and aggregate totals (`H_70`, `I_71`, `K_71`). This would significantly reduce code duplication.

5.  **UI Consistency:**
    *   Ensure percentage columns (J, L) use the standard formatting ("0.00%") and have the `text-left-indicator` class applied.
    *   Implement the Red/Yellow/Green indicator dot logic for columns J and L based on appropriate thresholds for heating/cooling gain contribution.

6.  **README Compliance:**
    *   Check for adherence to naming conventions, precision guidelines, and other architectural principles outlined in `README.md`.

**Next Steps:**

1.  Create a new branch (e.g., `refactor/section09`).
2.  Implement Helper Function Standardization (Task 1). Test thoroughly.
3.  Verify Calculations (Task 2). Test thoroughly.
4.  Verify StateManager Integration (Task 3).
5.  **Decision Point:** Assess feasibility and benefit of the structural refactor (Task 4). If pursued, implement it.
6.  Implement UI Consistency (Task 5).
7.  Final review against README guidelines (Task 6).
8.  Commit changes and merge. 