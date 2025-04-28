# TEUI 4.011 - Section 11 Workplan - Updated

**Status:** The Section 11 module (`sections/4011-Section11.js`) has been successfully refactored following a simplified, ground-up approach.

*   ✅ Module adheres to the standard architectural pattern (`README.md`).
*   ✅ Calculations align with `FORMULAE-3037.csv`, prioritizing RSI for stability.
*   ✅ File size significantly reduced and code complexity managed via parameterized functions.
*   ✅ Includes Rows 85-95 and 97-98.
*   ✅ Window/Door areas (Rows 88-93) are correctly linked to Section 10 values.
*   ✅ Basic Reference % (Column M) and Pass/Fail (Column N) indicators implemented using hardcoded baselines (pending dynamic reference model).

**Remaining / Next Step Tasks:**

1.  **Implement Capacitance Switch Functionality (Dependency on Section 03 & Calculator):**
    *   **Task:** Section 11's ground-facing heat gain calculations (Rows 94, 95, Column K) depend on the Ground-Facing Cooling Degree Days (GFCDD), which should vary based on a "Capacitance" vs. "Static" setting (linked to `dd_h_21` in Section 03).
    *   **Details:**
        *   The core logic for calculating GFCDD based on the switch needs implementation, likely involving `4011-Section03.js` and potentially a helper/lookup in `4011-Calculator.js` or `4011-init.js`.
        *   The formula involves `H21` (Static/Capacitance), `H24` (Tset Cooling), and `M19` (Cooling Season Days) from the Excel reference.
        *   Section 11's `calculateComponentRow` (for `type: 'ground'`) needs to reliably fetch the correctly calculated `heatgainMultiplier` based on the active GFCDD value from the StateManager.
        *   Ensure the potentially negative heat gain (cooling effect) from ground-facing elements is calculated correctly.
    *   **Reference Formulas (from FORMULAE-3037.csv & Workplan):**
        *   GFCDD (`D22` in Excel? No, `H22` seems related to ground *temp factor*, `D22` is GFHDD. Let's re-verify exact field for GFCDD target.) -> Check `L.2.5 GF CDD` in Excel: `=IF(H21="Static", SCHEDULES!N4, SCHEDULES!N5)`
        *   Where `SCHEDULES!N4` = `MAX(0, (10-REPORT!H24)*SCHEDULES!H4)`
        *   And `SCHEDULES!N5` = `(10-REPORT!H24)*SCHEDULES!H4`
        *   And `SCHEDULES!H4` = Cooling Season Days (`M19` in Excel, likely `d_19`? Re-verify)
        *   Section 11 `k_94`/`k_95` formula uses: `capacitanceValue(d_21) * area * groundTempFactor(h_22) * 24 / (rsiValue * 1000)`

2.  **Implement Dynamic Reference Baselines (Future):**
    *   **Task:** Replace the hardcoded `baselineValues` object with logic to fetch reference RSI/U-Values based on the selected Code Standard (`d_13`) or other relevant inputs.
    *   **Status:** Deferred until reference model lookup system is implemented.

3.  **Add Remaining Cost Calculations (Column N):**
    *   **Task:** Implement the cost calculations for column N based on formulas in `FORMULAE-3037.csv` (e.g., `n_85 = i_85 * l_12`, `n_88 = (i_88 - i_73) * l_12`, etc.).
    *   **Status:** Pending.

**Completed / Obsolete Tasks:**

*   ~~File Size Optimization~~ (Resolved via refactor)
*   ~~Initial Architectural Compliance~~ (Achieved)
*   ~~Implement base calculations for Rows 85-95, 97-98~~ (Completed)
*   ~~Link Window/Door Areas~~ (Completed)
*   ~~Fix Field Formatting~~ (Completed)
*   ~~Cleanup and Basic Optimization~~ (Completed)

This updated plan focuses on the key remaining dependency needed for full calculation accuracy in Section 11. 