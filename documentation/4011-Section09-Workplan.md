# TEUI 4.011 - Section 09 Refactor/Cleanup Workplan

**Goal:** Refactor and clean up `sections/4011-Section09.js` (Occupant Internal Gains) to align with the latest architectural patterns, improve maintainability, ensure calculation accuracy, and standardize helper functions.

**Current Status:**
*   Section 09 calculates internal gains from occupants, plug loads, lighting, equipment, and DHW system losses.
*   The section is functional and has been updated to use standardized global helper functions (`parseNumeric`, `formatNumber`) and a corrected local `setCalculatedValue` that integrates properly with StateManager and global formatting.
*   Calculation verification against Excel model is considered complete due to prior parity matching.

**Refactoring Status:**

1.  **Helper Function Standardization (High Priority):** ✅ **Complete**
    *   Input parsing uses `window.TEUI.parseNumeric`.
    *   Formatting uses `window.TEUI.formatNumber`.
    *   The local `setCalculatedValue` helper correctly utilizes `window.TEUI.StateManager.setValue` and `window.TEUI.formatNumber`.

2.  **Calculation Verification:** ✅ **Complete**
    *   Considered complete based on prior parity matching with the Excel model and internalized schedule data.

3.  **StateManager Integration:** ✅ **Complete**
    *   Outputs are updated via the corrected `setCalculatedValue`.
    *   `StateManager.addListener` is used correctly for inputs from other sections.

4.  **Structural Review (Consider Section 11 Pattern):** ❌ **Skipped**
    *   Decision made not to apply the Section 11 configuration-driven pattern to this section, as the current structure is deemed sufficient and unlikely to require adding similar rows in the future.

5.  **UI Consistency:** ✅ **Complete**
    *   Percentage formatting and indicator dot logic are implemented correctly.

6.  **README Compliance:** ✅ **Complete (with note)**
    *   Adheres to naming conventions, precision guidelines, and helper function usage (using standardized global functions where available/appropriate).
    *   Note: Does not implement the multi-row structural pattern from Section 11 per decision in point 4.

**Next Steps:**

1.  Perform cleanup and filesize optimization on `sections/4011-Section09.js` (e.g., remove commented-out code, unnecessary whitespace). Test thoroughly.
2.  Commit final changes and merge. 