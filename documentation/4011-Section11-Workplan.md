# TEUI 4.011 - Section 11 Workplan - Final Refactor Summary

**Status:** The Section 11 module (`sections/4011-Section11.js`) has been successfully refactored using a simplified, ground-up approach, significantly improving maintainability and reducing file size.

*   ✅ Module adheres to the standard architectural pattern (`README.md`).
*   ✅ Calculations align with `FORMULAE-3037.csv`, prioritizing RSI for stability.
*   ✅ File size reduced from ~3300 lines to ~630 lines via parameterized functions.
*   ✅ Includes Rows 85-98, handling air-facing, ground-facing, and penalty calculations.
*   ✅ Window/Door areas (Rows 88-93) correctly linked to Section 10 values.
*   ✅ Reference % (Column M) and Status (Column N) indicators implemented (using hardcoded baselines).
*   ✅ Visual indicators (dots) and text styling applied to relevant columns (H, J, L).

**Remaining / Next Step Tasks:**

1.  **Implement Capacitance Switch Functionality (Dependency on Section 03 & Calculator):**
    *   **Task:** Section 11's ground-facing heat gain calculations (Rows 94, 95, Column K) currently use a hardcoded capacitance factor (`0.5`). This needs to be dynamically linked to the Ground-Facing Cooling Degree Days (GFCDD) calculation, which varies based on the "Capacitance" vs. "Static" setting (`dd_h_21`) in Section 03.
    *   **Details:** Requires modifications in Section 03 and potentially `Calculator.js` or `init.js` to calculate and store the correct GFCDD value in the StateManager, which Section 11 can then retrieve.
    *   **Status:** Blocked/Pending Section 03 updates. Section 11 calculation logic is ready to consume the dynamic value once available.

2.  **Implement Dynamic Reference Baselines (Future):**
    *   **Task:** Replace the hardcoded `baselineValues` object with logic to fetch reference RSI/U-Values based on the selected Code Standard (`d_13`) or other relevant inputs.
    *   **Status:** Deferred until reference model lookup system is implemented.

3.  **Add Remaining Cost Calculations (Column N - Future):**
    *   **Task:** Implement the cost calculations for column N based on formulas in `FORMULAE-3037.csv` (e.g., `n_85 = i_85 * l_12`, etc.). Column N currently shows Pass/Fail status.
    *   **Status:** Deferred.

**Completed / Obsolete Tasks:**

*   ✅ File Size Optimization & Code Consolidation
*   ✅ Initial Architectural Compliance
*   ✅ Implement base calculations for Rows 85-98
*   ✅ Link Window/Door Areas
*   ✅ Fix Field Formatting & Calculation Logic
*   ✅ Implement M/N Reference & Status Indicators
*   ✅ Implement J/L Dot Indicators & Text Styling

Section 11 is now considered stable and performant pending the integration of the dynamic capacitance factor from Section 03. 