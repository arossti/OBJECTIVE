# TEUI 4.011 - Section 13 Refactor/Cleanup Workplan

**Goal:** Refactor and clean up `sections/4011-Section13.js` (Mechanical Loads) to align with the latest architectural patterns (`README.md`), improve maintainability, ensure calculation accuracy against `FORMULAE-3037.csv` and `COOLING-TARGET.csv`, enhance UI formatting (including dynamic visibility), and potentially implement new analysis features (Overheat Warning, Unmet Hours).

**Current Status:**
*   Section 13 calculates heating and cooling loads, system efficiencies, and resulting energy consumption based on various system types and fuel sources.
*   It has complex dependencies on Climate (S3), Internal/Envelope Gains/Losses (S9, S10, S11, S14), and Geometry (S12).
*   Features intricate logic for fuel switching, efficiency lookups (COP, AFUE, HSPF, SEER), and potentially cooling calculations referencing `COOLING-TARGET.csv`.
*   Likely uses older helper function patterns and requires thorough review for architectural compliance and calculation accuracy.

**Proposed Refactoring Strategy:**

1.  **Architectural Alignment & Standardization (High Priority):**
    *   **Status:** ✅ Completed (Initial Pass)
    *   **Actions:**
        *   Replaced local helpers (`getNumericValue`, `formatNumber`) with global versions (`window.TEUI.parseNumeric`, `window.TEUI.formatNumber`).
        *   Standardized `setCalculatedValue` to use global formatter and store raw string values in state.
        *   Corrected `getFieldValue` to remove DOM fallback, relying solely on StateManager.
        *   Refined event listeners: Corrected `g_118` listener, removed redundant local state listeners, ensured main `calculateAll` is triggered appropriately.
        *   Fixed `contenteditable` event handler scope and implementation per README.

2.  **Calculation Logic Debugging & Refinement (Partial):**
    *   **Status:** ✅ Addressed specific issues found during alignment.
    *   **Actions:**
        *   Corrected calculation for `d_114` (Heating System Demand) to use correct COP value based on `d_113`.
        *   Added missing calculation logic for `l_114` (Heatpump Cooling Sink).
        *   Identified and corrected calculation/mapping issues in Section 14 (`d_127`, `h_127`, etc.) that were providing incorrect inputs to Section 13.
    *   **TODO:** Perform full verification against `FORMULAE-3037.csv` and `COOLING-TARGET.csv` (Task 2).

3.  **Cooling Module Integration (High Priority):**
    *   **Status:** ✅ Completed
    *   **Actions:**
        *   Moved core logic (state variables, calculation functions) from `4011-Cooling.js` directly into `sections/4011-Section13.js`.
        *   Updated Section 13 functions (`calculateCoolingVentilation`, `calculateFreeCooling`) to use the integrated logic and state.
        *   Removed the separate `initializeCoolingModule` function and dependencies on `window.TEUI.CoolingCalculations` or `cooling_*` state keys from Section 13.
        *   Removed `<script src="4011-Cooling.js">` from `index.html`.
    *   **Rationale:** Eliminates potential race conditions during initialization, simplifies dependencies, and makes Section 13 more self-contained.
    *   **TODO:** Delete `4011-Cooling.js` file after successful testing.

4.  **UI Formatting & Dynamic Visibility:**
    *   **Status:** ⏳ Pending
    *   Apply appropriate number formatting using `window.TEUI.formatNumber` via `setCalculatedValue`.
    *   Implement dynamic visibility/styling ("ghost text") for irrelevant fields based on selections (e.g., gray out gas fields if heating is electric). Use existing CSS classes.

5.  **General Cleanup:**
    *   **Status:** ⏳ Partially Complete (Logs/Comments removed during refactor)
    *   Remove any remaining commented-out code.
    *   Review and improve code comments for clarity.

6.  **NEW Feature - Overheat Warning (Optional):**
    *   **Status:** ⏳ Pending
    *   Implement if feasible after core refactor is stable.

7.  **NEW Feature - Unmet Hours Analysis (Exploratory - Lower Priority):**
    *   **Status:** ⏳ Pending
    *   Implement if feasible after core refactor is stable.

**Next Steps:**

1.  **Test** the integrated cooling logic and overall Section 13 calculations thoroughly.
2.  (If testing successful) **Delete** the `4011-Cooling.js` file.
3.  Implement Task 2 (**Calculation Verification** against formula sheets).
4.  Implement Task 3 (**UI Formatting & Dynamic Visibility**).
5.  Implement Task 4 (**Final Cleanup**).
6.  Implement Optional Tasks 5 & 6 (Overheat/Unmet Hours) if desired.
7.  Final review against `README.md` and requirements.
8.  Commit final changes and merge `SECTION13COMPLETE` branch. 