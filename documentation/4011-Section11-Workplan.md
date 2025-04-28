# TEUI 4.011 - Section 11 Refactor Workplan

**Goal:** Ensure `sections/4011-Section11.js` (Transmission Losses) fully aligns with architectural standards (`README.md`) and calculation methodology (`FORMULAE-3037.csv`), and optimize for clarity and size.

**Current Status (Post-Refactor):**
*   ✅ Architecturally compliant (uses `sectionRows`, specific event handlers, StateManager interaction).
*   ✅ Window/Door areas (`d_88`-`d_93`) correctly synced with Section 10 via StateManager.
*   ✅ Column N logic updated to show Pass/Fail (`✓`/`✗`) based on Column M. Column N now holds cost calculations based on formulas from FORMULAE-3037.csv.
*   ✅ Calculation logic now exactly matches Excel formulas from FORMULAE-3037.csv.
*   ✅ Local `getNumericValue` function updated to use global `window.TEUI.parseNumeric` with fallback.
*   ✅ Formatting helpers improved for proper precision (3 decimal places for U-values, 2 decimal places for RSI).
*   ✅ All commented logs and debug functions removed.
*   ✅ Fixed implementations for all rows (85-95) with proper heat gain/loss calculations.
*   ✅ Below-grade calculations now properly handle ground temperature effects (capacitance cooling).
*   ❌ Still uses hardcoded reference baseline values for Column M calculations (to be addressed in future).

**Remaining / Next Step Tasks:**

1. **Add Capacitance Switch Function in Section 3:**
   * **Task:** Implement the capacitance switch function for ground-facing cooling degree days (GFCDD) calculation.
   * **Details:**
     * Create a mini JSON object in Calculator.js to handle this functionality
     * Formula from FORMULAE-3037.csv: `=IF(H21="Static", SCHEDULES!N4, SCHEDULES!N5)`
     * Where:
       * SCHEDULES!N4 = MAX(0, (10-REPORT!H24)*SCHEDULES!H4)
       * SCHEDULES!N5 = (10-REPORT!H24)*SCHEDULES!H4
       * SCHEDULES!H4 is equivalent to M19 (total cooling season days, default 120)
     * This should update GFCDD based on whether "Capacitance" or "Static" is selected at dd_h_21
     * When "Capacitance" is selected, the percentage indicated at i_21 is used (50% by default)
     * Implementation must ensure proper negative values for cooling effect in below-grade components

2. **Refine Reference Calculations (Column M):**
   * **Task:** Leave as is for now. Update later when the reference model source is implemented.
   * **Future Work:** Replace hardcoded baseline values with dynamically loaded values from a centralized reference table.

3. **Final Compliance Check:**
   * Re-verify calculations against `FORMULAE-3037.csv`.
   * Confirm adherence to `README.md` patterns.
   * Verify all values match Excel outputs with appropriate precision.
   * Test thoroughly with various input scenarios.

## Completed Tasks

1. **✅ Fix Field Formatting:**
   * Fixed formatting for RSI values (2 decimal places) and U-values (3 decimal places)
   * Ensured proper numeric precision throughout calculations
   * Updated field initialization to handle user input formatting correctly

2. **✅ Implement Complete Calculation Functions:**
   * Created full implementations for all rows (85-95)
   * Added proper handling of ground temperature effects for below-grade components
   * Ensured formulas exactly match FORMULAE-3037.csv

3. **✅ Cleanup and Optimization:**
   * Removed verbose logging and debug functions
   * Improved error handling
   * Made calculation functions consistent in style and documentation
   * Added clear comments referencing Excel formulas 