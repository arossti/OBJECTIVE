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
*   ❌ File size has ballooned to 134kb (target is ~30kb), requiring optimization.

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

3. **File Size Optimization:**
   * **Task:** Refactor to reduce file size from 134kb to closer to the 30kb target.
   * **Details:**
     * Move all CSS to 4011-styles.css (remove `addCheckmarkStyles()` function and inline styles)
     * Create a parameterized calculation function to handle all component calculations (reduce 11 separate component functions to 1-2 generic functions)
     * Centralize error handling instead of having separate try/catch blocks for each component
     * Move utility functions like `formatPercentage` to global namespace for reuse across sections
     * Remove redundant comments while maintaining clarity
     * Simplify DOM update logic to reduce repeated code
     * Merge similar functions like all window calculation functions into a single parameterized function
     * Consolidate tooltips and status indicator logic

4. **Final Compliance Check:**
   * Re-verify calculations against `FORMULAE-3037.csv`.
   * Confirm adherence to `README.md` patterns.
   * Verify all values match Excel outputs with appropriate precision.
   * Test thoroughly with various input scenarios.
   * Verify file size is reduced to target range of ~30kb.

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

## Architectural Patterns to Propagate

1. **✅ Reference/Status System (Columns M & N):**
   * Consider Section 11's implementation of the percentage/checkmark system as a model for other sections
   * Key features to reuse:
     * `formatPercentage` helper function for consistent percentage formatting
     * Visual indication of pass/fail status using checkmark/X symbols (`✓`/`✗`)
     * CSS styling with color-coded indicators (green for pass, red for fail)
     * Tooltip integration providing context for reference values
   * This pattern enhances user understanding by providing clear visual feedback on component performance

## File Size Optimization

Current file size of 134kb is significantly over our target of ~30kb. This not only impacts load times but violates our architectural principles for modular, maintainable code. Issues to address:

1. **CSS Rule Violations:**
   * Inline styles have been embedded rather than using the global stylesheet
   * The `addCheckmarkStyles()` function adds ~50 lines of CSS that should be in 4011-styles.css
   * All styling should follow the pattern in README.md with classes defined in the global CSS file

2. **Function Redundancy:**
   * Each of the 11 component calculations (roof, walls, windows, etc.) follow nearly identical patterns
   * These can be refactored into a single parameterized function that accepts:
     * Row ID/number
     * Component type (for specific calculation variations)
     * Reference value 
     * Special handling flags

3. **Error Handling Bloat:**
   * Each calculation has its own try/catch block with similar error logging
   * A centralized error handling approach would be more efficient

4. **Utility Function Duplication:**
   * Functions like `formatPercentage`, `formatNumber`, etc. should be moved to global utilities
   * Reference Section 1 for pattern of using shared utilities

5. **Code Modularity:**
   * Break large functions into smaller, focused functions
   * Group related functions into logical units
   * Consider using a more functional programming approach for calculations

6. **Comment Optimization:**
   * Reduce redundant comments while maintaining clarity
   * Use JSDoc format for function documentation
   * Remove duplicate formula explanations

The refactoring should prioritize maintainability and readability while significantly reducing file size. The targeted implementation should follow patterns in README.md, particularly regarding CSS management and utility function organization.

## Template Compliance Check

The current Section 11 implementation should be verified against the standard sectionXX template pattern to ensure proper architectural consistency:

1. **Module Pattern Verification:**
   * Confirm proper IIFE pattern with encapsulated private functions
   * Verify the exported public API matches the expected template structure
   * Check that the module registers correctly with the StateManager and global namespace
   * Ensure event handlers follow the standard pattern

2. **Function Structure Check:**
   * Validate that required template functions exist:
     * `getFields()`
     * `getDropdownOptions()`
     * `getLayout()`
     * `initializeEventHandlers()`
     * `onSectionRendered()`
     * `calculateAll()`
   * Confirm functions follow standard signature and return pattern

3. **Event Registration Verification:**
   * Check for proper event listeners for 'teui-section-rendered'
   * Ensure proper DOM event handling with correct debouncing pattern

4. **Public API Consistency:**
   * Verify the module exports the expected public functions
   * Confirm naming conventions match the template pattern

Several areas may have diverged from the template, including the addition of numerous calculation functions that aren't in the standard template, and the embedded CSS which violates the architectural pattern. These should be aligned with the template during refactoring.

## Existing CSS Reuse

Examination of 4011-styles.css reveals several existing styles that should be leveraged instead of duplicating with inline styles:

1. **Checkmark/Warning Indicators:**
   * The global stylesheet already defines `.checkmark` and `.warning` classes:
   ```css
   .checkmark {
       color: green;
       font-weight: bold;
       text-align: center;
   }
   .warning {
       color: red;
       font-weight: bold;
       text-align: center;
   }
   ```
   * These styles should be used directly instead of duplicating in `addCheckmarkStyles()`

2. **Tooltip Implementation:**
   * The global stylesheet defines `.tooltip-cell` with hover effect:
   ```css
   .tooltip-cell {
       position: relative;
       cursor: help;
   }
   .tooltip-cell:hover::after {
       content: attr(data-tooltip);
       position: absolute;
       left: 0;
       top: 100%;
       z-index: 100;
       /* Additional styling... */
   }
   ```
   * This pattern should be reused for consistent tooltip behavior

3. **Reference Value Styling:**
   * CSS already defines styling for reference values:
   ```css
   [data-field-id^="m_7"] {
       color: var(--reference-value-color);
       font-weight: bold;
   }
   ```
   * This suggests a pattern for M-column styling that should be extended/reused

4. **Editable Field Focus States:**
   * Global focus styles exist for editable table cells:
   ```css
   .data-table td.editable.editing,
   .data-table td.user-input.editing /* ... */ {
     box-shadow: 0 0 0 0.15rem rgba(0, 123, 255, 0.25);
     border-radius: 0.25rem;
     outline: none;
   }
   ```

While tooltip functionality appears to be partially implemented in the global CSS, it may not be consistently used across sections. The refactored Section 11 should leverage these existing classes and help standardize the tooltip implementation as a pattern for other sections to follow. 