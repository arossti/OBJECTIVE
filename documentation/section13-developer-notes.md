# Section 13 Developer Notes & Troubleshooting History

This document consolidates historical notes, troubleshooting steps, and findings related to the development and debugging of Section 13 (Mechanical Loads), particularly focusing on achieving calculation parity with the Excel model for cooling calculations.

**Last Major Update:** 2024-08-02 (Commit `9fde294` - Achieved parity for `h_124` and `m_129`)

---

## 1. Original Developer Notes (Moved from JS Source)

_These notes were originally located at the beginning of `sections/4011-Section13.js` and provide context on the section's internal logic, dependencies, and original design patterns as of commit `43f5588`. Some details might be slightly outdated due to subsequent refactoring._

/**
 * 4011-Section13.js
 * Mechanical Loads (Section 13) module for TEUI Calculator 4.011
 * 
 * This section integrates with 4011-Cooling.js for complex cooling calculations
 * and requires SectionIntegrator and StateManager connections to function properly.
 * 
 * ====================================================================
 * INTERNAL COOLING CALCULATIONS
 * ====================================================================
 * 
 * This section contains integrated logic for calculating key cooling-related factors,
 * replacing the previous dependency on an external Cooling.js module.
 * 
 * 1. Internal State: Uses an internal `coolingState` object to manage inputs,
 *    constants (like Air Mass, Specific Heat Capacity, Latent Heat of Vaporization),
 *    and intermediate/final calculated values.
 * 2. Core Functions: Relies on internal helper functions:
 *    - `updateCoolingInputs`: Fetches required values from StateManager.
 *    - `calculateA50Temp`: Calculates intermediate outdoor temperature for psychrometrics.
 *    - `calculateAtmosphericValues`: Calculates saturation/partial pressures.
 *    - `calculateHumidityRatios`: Calculates indoor/outdoor humidity ratios.
 *    - `calculateLatentLoadFactor`: Calculates the factor used in `i_122`.
 *    - `calculateFreeCoolingLimit`: Calculates potential free cooling (kWh/yr).
 *    - `calculateDaysActiveCooling`: Estimates active cooling days needed.
 *    - `runIntegratedCoolingCalculations`: Orchestrates these internal calculations.
 * 3. Key Outputs Used Internally:
 *    - `coolingState.latentLoadFactor` -> Used for `i_122` calculation.
 *    - `coolingState.freeCoolingLimit` -> Used for `h_124` calculation (conditionally zeroed based on `g_118`).
 *    - `coolingState.daysActiveCooling` -> Used for `m_124` calculation.
 * 4. Execution: `runIntegratedCoolingCalculations` is called within 
 *    `calculateCoolingVentilation` and `calculateFreeCooling` to ensure the 
 *    `coolingState` is up-to-date before relevant fields (`i_122`, `h_124`, `m_124`) are set.
 * 
 * ====================================================================
 * STATEMANAGER DEPENDENCIES
 * ====================================================================
 * 
 * This section has cross-section dependencies managed by StateManager, including:
 * - FROM Section 02: `h_15` (Building area) - Affects cooling calcs & intensity.
 * - FROM Section 03: 
 *    - `d_20` (HDD) - Affects heating ventilation energy.
 *    - `d_21` (CDD) - Affects cooling ventilation energy & internal cooling calcs.
 *    - `h_24` / `l_24` (Cooling Setpoint) - Affects internal cooling calcs.
 *    - `l_22` (Elevation) - Affects atmospheric pressure in internal cooling calcs.
 * - FROM Section 08/09(?): `d_59` (Indoor RH) - Affects internal cooling calcs.
 * - FROM Section 09: `d_63`, `i_63`, `j_63` (Occupants / Schedule) - Affects ventilation rates.
 * - FROM Section 12: `d_105` (Building volume) - Affects ventilation rates & internal cooling calcs.
 * - FROM Section 14: 
 *    - `d_127` (TED) - Affects heating demand.
 *    - `m_129` (CED Mitigated) - Affects cooling system electrical load.
 * 
 * The `registerWithStateManager()` function declares dependencies relevant for 
 * StateManager's change propagation, though not all internal dependencies might be 
 * explicitly listed there if calculations are handled internally via `calculateAll` triggers.
 * 
 * ====================================================================
 * SECTIONINTEGRATOR CONNECTIONS
 * ====================================================================
 * 
 * SectionIntegrator connects this section to others through these mechanisms:
 * 1. Global access point window.TEUI.sect13.calculateAll() is registered
 * 2. Section exposes key calculation functions as public API methods
 * 3. Listens for teui-section-rendered events for initialization timing
 * 
 * IMPORTANT: This section's calculated values affect TEDI values in Section14,
 * creating a bi-directional dependency that requires careful initialization
 * order management through SectionIntegrator.
 * 
 * TEMPLATE FOR SECTION MODULES USING THE CONSOLIDATED DECLARATIVE APPROACH
 * This template demonstrates the preferred pattern for defining sections where
 * field definitions are integrated directly into the layout structure.
 * 
 * IMPORTANT STANDARDS:
 * 1. Column C (row labels) should use this pattern: c: { label: "Row Label Text" }
 *    This is the preferred approach for maximum compatibility with the rendering system.
 *    (Alternative pattern c: { content: "Row Label Text", type: "label" } is supported
 *    but requires special handling in createLayoutRow)
 * 
 * 2. All unit subheaders must be defined as the first row with "header" key.
 * 
 * 3. Rows should be named with their Excel row numbers when possible, or descriptive
 *    IDs that match the CSV pattern.
 *
 * NEWLINES IN SUBHEADER CELLS:
 * To properly display newlines in subheader cells, follow these guidelines:
 * 1. Use the "\n" character in the content string where you want line breaks
 * 2. Add BOTH of these attributes to the cell's classes array
 *    - Add the "section-subheader" class to the cell's classes array
 *    - Add the inline style "white-space: pre-line;" to ensure proper rendering
 * 
 * Example:
 * ```javascript
 * h: { 
 *     content: "Summer Shading\n%", 
 *     classes: ["section-subheader", "align-center"], 
 *     style: "white-space: pre-line;"
 * },
 * ```
 * 
 * The CSS rule `.section-subheader { white-space: pre-line; }` handles the display,
 * but adding the inline style ensures consistency across browsers and prevents styling issues.
 * This approach follows section 04 and 10's implementation, which works correctly.
 *
 * Section Module Template
 * 
 * This template provides a standardized format for creating section modules using the
 * consolidated declarative approach. Follow these guidelines to ensure your section is
 * compatible with the FieldManager and provides a consistent user experience.
 *
 * IMPORTANT STANDARDS:
 * - Unit subheaders should always be the first row
 * - Row labels should follow this pattern: <unit> | <category> | <parameter>
 * - Prefer defining fields as declarative objects where possible
 * - Always match column IDs with Excel column positions (a = column A, b = column B, etc.)
 * - Percentage fields should be formatted with the '%' symbol
 * - Currency fields should be formatted with the appropriate symbol
 *
 * COLUMN PERCENTAGES AND CHECKMARKS:
 * Section08 includes a percentage and checkmark function that allows displaying a percentage
 * in column M based on values from columns D and F, then displaying a checkmark (✓) or X (✗) 
 * in column N based on whether values meet criteria. This functionality should be implemented
 * in other sections as they are refactored. 
 * 
 * Here's a sample implementation for reference:
 * 
 * function calculatePercentagesAndStatus() {
 *     // Calculate percentage (value/limit * 100)
 *     const value = parseFloat(getFieldValue("d_rowId")) || 0;
 *     const limit = parseFloat(getFieldValue("f_rowId")) || 100;
 *     
 *     if (limit > 0) {
 *         const percent = Math.round((value / limit) * 100);
 *         setCalculatedValue("m_rowId", `${percent}%`);
 *         
 *         // Set status - checkmark if under limit, X if over
 *         if (value <= limit) {
 *             setCalculatedValue("n_rowId", "✓");
 *             setElementClass("n_rowId", "checkmark");
 *         } else {
 *             setCalculatedValue("n_rowId", "✗");
 *             setElementClass("n_rowId", "warning");
 *         }
 *     }
 * }
 * 
 * Helper functions needed:
 * - getFieldValue(fieldId): Gets a field's value from StateManager or DOM
 * - setCalculatedValue(fieldId, value): Sets a calculated field value
 * - setElementClass(fieldId, className): Sets appropriate visual classes
 * - CSS styles for .checkmark and .warning classes
 *
 * See Section08 for a complete implementation example.
 *
 * NUMERIC INPUT HANDLING:
 * All numeric inputs should have standardized behavior:
 * 1. Enter key should save the input and exit edit mode (prevent newlines)
 * 2. Numbers should be formatted with thousands separators (commas) after input
 * 3. Decimal values should maintain proper precision (typically 2 decimal places)
 * 
 * Here's the standard implementation to add to each section:
 * 
 * // Prevent newlines and handle Enter key in editable fields
 * field.addEventListener('keydown', function(e) {
 *     if (e.key === 'Enter') {
 *         e.preventDefault(); // Prevent adding a newline
 *         this.blur(); // Remove focus to trigger the blur event
 *     }
 * });
 * 
 * // Format numbers with commas and proper decimals 
 * function formatNumber(value) {
 *     if (Math.abs(value) < 0.01 && value !== 0) {
 *         return value.toFixed(2); // Handle very small numbers
 *     }
 *     
 *     if (Number.isInteger(parseFloat(value))) {
 *         return parseFloat(value).toLocaleString(undefined, {
 *             minimumFractionDigits: 0,
 *             maximumFractionDigits: 0
 *         }); // Integers with commas, no decimals
 *     }
 *     
 *     return parseFloat(value).toLocaleString(undefined, {
 *         minimumFractionDigits: 2,
 *         maximumFractionDigits: 2
 *     }); // Format with commas and 2 decimal places
 * }
 * 
 * // Apply formatting during blur event
 * field.addEventListener('blur', function() {
 *     const fieldId = this.getAttribute('data-field-id');
 *     if (!fieldId) return;
 *     
 *     // Get and clean the value (remove existing commas)
 *     let numValue = this.textContent.trim().replace(/,/g, '');
 *     
 *     // Check if this is a numeric field that should be formatted
 *     if (!isNaN(parseFloat(numValue)) && isFinite(numValue)) {
 *         // Format and display the number
 *         const formattedValue = formatNumber(numValue);
 *         this.textContent = formattedValue;
 *         
 *         // Store the raw value in the state manager
 *         if (window.TEUI?.StateManager?.setValue) {
 *             window.TEUI.StateManager.setValue(fieldId, numValue, 'user-modified');
 *         }
 *     }
 * });
 *
 * DEFAULT VALUE INITIALIZATION AND ENFORCEMENT:
 * ============================================
 * When your section needs to ensure specific default values (especially for dropdowns
 * or calculated fields), follow this balanced pattern that enforces defaults on initialization
 * but respects user changes afterward:
 *
 * 1. REGISTER DEFAULT VALUES WITH APPROPRIATE PRIORITY
 *    Use 'default' state for initial values to avoid overriding user choices:
 *    ```javascript
 *    // In registerWithStateManager()
 *    window.TEUI.StateManager.setValue("fieldId", "defaultValue", 'default');
 *    ```
 *    Only use 'user-modified' for values that must persist regardless of user interaction.
 *
 * 2. IMPLEMENT ONE-TIME INITIALIZATION
 *    Create a function that sets initial values exactly once using flags to track initialization:
 *    ```javascript
 *    function setupValueEnforcement() {
 *        // Create tracker flags
 *        window.TEUI = window.TEUI || {};
 *        window.TEUI.sectXX = window.TEUI.sectXX || {};
 *        window.TEUI.sectXX.initialized = false;
 *        
 *        function initializeDropdownValues() {
 *            // Skip if already initialized
 *            if (window.TEUI.sectXX.initialized) return;
 *            
 *            // Set initial values
 *            const dropdown = document.querySelector('select[data-field-id="fieldId"]');
 *            if (dropdown) {
 *                dropdown.value = "defaultValue";
 *                dropdown.dispatchEvent(new Event('change', { bubbles: true }));
 *            }
 *            
 *            // Mark as initialized
 *            window.TEUI.sectXX.initialized = true;
 *        }
 *        
 *        // Run initialization once
 *        initializeDropdownValues();
 *    }
 *    ```
 *
 * 3. TRACK USER INTERACTIONS
 *    Use event properties to distinguish user changes from programmatic ones:
 *    ```javascript
 *    dropdown.addEventListener('change', function(e) {
 *        // e.isTrusted is true for real user interactions, false for programmatic ones
 *        if (e.isTrusted) {
 *            window.TEUI.sectXX.userInteracted = true;
 *            
 *            // Use 'user-modified' state for user changes to ensure they persist
 *            window.TEUI.StateManager.setValue(fieldId, this.value, 'user-modified');
 *        }
 *        
 *        // Always update calculations
 *        performCalculation();
 *    });
 *    ```
 *
 * 4. CALL INITIALIZATION AT STRATEGIC POINTS
 *    Initialize in:
 *    - onSectionRendered()
 *    - DOMContentLoaded event handler
 *    - teui-section-rendered event handler
 *
 * The key benefit of this approach is balancing automatic initialization with user control.
 * Initial values are enforced during page load, but user changes are respected afterward.
 * This avoids the frustration of dropdowns that revert to default values when users try
 * to change them.
 * 
 * See Section09 (Occupant Internal Gains) for a complete implementation example.
 *
 * TYPE-SAFE VALUE HANDLING:
 * ========================
 * Always use type-safe functions to handle values that might be returned as either 
 * strings or numbers from different sources. This pattern is essential for robust calculations:
 * 
 * ```javascript
 * function getNumericValue(fieldId) {
 *     const value = getFieldValue(fieldId);
 *     // Handle string values (with comma removal)
 *     if (typeof value === 'string') {
 *         return parseFloat(value.replace(/,/g, '')) || 0;
 *     }
 *     // Handle number values directly
 *     else if (typeof value === 'number') {
 *         return value;
 *     }
 *     // Default fallback
 *     return 0;
 * }
 * ```
 * 
 * Always use this helper instead of directly parsing strings with potential formatting.
 * This prevents errors when StateManager returns a number but your code expects a string.
 *
 * CROSS-MODULE FUNCTION ACCESSIBILITY:
 * ==================================
 * Make key functions globally accessible for cross-module use to prevent "function not found" errors:
 * 
 * ```javascript
 * // At the top of your module
 * window.TEUI = window.TEUI || {};
 * window.TEUI.sectXX = window.TEUI.sectXX || {}; // Create section namespace
 * window.TEUI.sectXX.initialized = false; // Track initialization state
 * 
 * // In your DOMContentLoaded handler
 * document.addEventListener('DOMContentLoaded', function() {
 *     // Expose critical functions after module is defined
 *     const module = window.TEUI.SectionModules.sectXX;
 *     window.TEUI.sectXX.calculateSomething = module.calculateSomething;
 *     window.TEUI.sectXX.setupListeners = module.setupListeners;
 * });
 * ```
 * 
 * For functions that might be called from global context, implement safe wrappers with recursion protection:
 * 
 * ```javascript
 * window.globalFunction = function() {
 *     // Prevent infinite recursion
 *     if (window.globalFunctionRunning) {
 *         console.warn("Preventing recursive call");
 *         return;
 *     }
 *     
 *     window.globalFunctionRunning = true;
 *     
 *     try {
 *         // Try multiple paths to find the actual implementation
 *         if (window.TEUI?.SectionModules?.sectXX?.originalFunction) {
 *             window.TEUI.SectionModules.sectXX.originalFunction();
 *         } 
 *         else if (window.TEUI?.sectXX?.originalFunction) {
 *             window.TEUI.sectXX.originalFunction();
 *         }
 *         else {
 *             console.warn("Function not found in any namespace");
 *         }
 *     } catch (e) {
 *         console.error("Error in wrapper:", e);
 *     } finally {
 *         // ALWAYS clear recursion flag regardless of success/failure
 *         window.globalFunctionRunning = false;
 *     }
 * };
 * ```
 *
 * APPROPRIATE COMPLEXITY & DEFENSIVE PROGRAMMING:
 * =============================================
 * While we strive for simplicity, production-grade code often needs defensive measures:
 * 
 * 1. Include multiple safety checks for unpredictable browser environments
 * 2. Implement fallback mechanisms when primary access paths fail
 * 3. Use try/catch blocks to prevent cascading failures
 * 4. Handle race conditions between component loading/initialization
 * 
 * The goal is not to over-engineer but to create robust, resilient code. When issues occur 
 * in browser environments (especially with page refreshes and state persistence), these 
 * defensive patterns make the difference between a frustrating bug and seamless recovery.
 */ 

---

## 2. Troubleshooting History (Summary)

_This section summarizes the key issues encountered and resolved during the Section 13 debugging process._

### Initial Problem (Early May 2024)

-   **Symptom:** Mitigated Cooling Energy Demand (`m_129`) was vastly incorrect (~44k kWh/yr vs. target ~10.5k kWh/yr).
-   **Initial Suspicion:** StateManager propagation issues between Section 13 and Section 14, potentially causing Section 14 to use stale values for `h_124` (Free Cooling Limit) or `d_123` (Ventilation Recovery).

### Investigation & Root Cause Analysis (Ref: `section13-last-mile.md` v1.3)

1.  **Recursive Calls:** Identified recursive calls involving `calculateFreeCoolingLimit` and `calculateFreeCooling`, causing console flooding. **(Fixed in commit `92bbc76`)**
2.  **Incorrect Outdoor Humidity Ratio:** Found that `calculateHumidityRatios` used the average seasonal RH (55.85%) instead of the required 70% RH for calculating the outdoor component (`coolingState.humidityRatioAvg`), mismatching Excel's `A62` calculation. **(Fixed in commit `92bbc76`)**
3.  **Incorrect Free Cooling Basis (Volume vs. Flow Rate):** Discovered that `calculateFreeCoolingLimit` based its calculation on the total building air mass (from volume `d_105`) instead of the ventilation flow rate (`h_120`) used in the Excel model. **(Fixed in commit `9fde294`)**
4.  **Incorrect Setback Factor Calculation:** Found a bug where the setback factor for scheduled ventilation (`k_120`) was being divided by 100 unnecessarily. **(Fixed in commit `9fde294`)**
5.  **Incorrect Power-to-Energy Conversion:** Identified the final error where the conversion factor from Watts to kWh/day in `calculateFreeCoolingLimit` was incorrect (`0.0864` instead of `0.024`). **(Fixed in commit `9fde294`)**

### Historical Note (Ref: `Section13-troubleshooting.md`, line 195)

-   During earlier troubleshooting phases (before the fixes above were implemented systematically), the *correct target value* for `h_124` (37,322.83 kWh/yr) was observed *intermittently* in logs or the UI, but was quickly overwritten or became stuck. This suggested that while parts of the calculation might have been momentarily correct, issues like recursion, incorrect humidity inputs, or the volume-based calculation prevented the correct value from persisting reliably.

### Current Status (Post-Fixes)

-   The major calculation discrepancies for `h_124` and `m_129` have been resolved.
-   The application now calculates values very close to the Excel targets using default inputs.
-   The code has been cleaned of most diagnostic logs and obsolete commented-out blocks.

---

## 3. Notes from `Section13-troubleshooting.md`

_The following includes relevant points and proposed strategies from the original troubleshooting document, some of which may be superseded by the implemented fixes but provide historical context._

**Key Findings Summary (from Troubleshooting Doc):**

-   Confirmed formula for `m_129` (`=D129-H124-D123`) was correct in JS, but inputs were wrong.
-   Noted `d_129` calculation differed from Excel, potentially due to inputs `k71`, `k79`, `k98` (Sections 9/10).
-   Included analysis of `d_122` calculation (Ventilation Energy) and its dependencies.
-   Included analysis of `h_124` calculation (Free Cooling) based on the **(now known to be incorrect)** volume-based approach.
-   Identified potential inconsistencies in `coolingState` constant initialization.
-   Questioned alignment of `calculateLatentLoadFactor` with Excel.
-   Questioned alignment of `calculateHumidityRatios` with Excel.
-   Presented a table comparing Excel vs. JS values (**Note:** This table reflects the state *before* the final fixes).
-   Outlined correct architectural patterns for StateManager, listeners, and calculation flow.
-   Included a step-wise implementation strategy (Phases 1-6) focusing on diagnostics, fixing constants, then calculations, then integration. (This strategy was broadly followed but adapted based on findings).
-   Discussed potential timing/race conditions and dependency ordering.
-   Included a dependency flow diagram.

**Specific Code Snippets/Recommendations (from Troubleshooting Doc - May be Outdated):**

-   Provided examples of diagnostic logging for StateManager and function tracing.
-   Recommended standardizing `setCalculatedValue` (partially implemented).
-   Recommended ensuring proper dependency registration in Section 14 (verified).
-   Recommended standardizing `getFieldValue` / `getNumericValue` (partially implemented).
-   Showed patterns for listener registration.
-   Showed patterns for ensuring StateManager/local state consistency.

---

## 4. Next Steps / Future Considerations

-   **Edge Case Testing:** Verify calculations across a wider range of inputs and ventilation methods.
-   **Input Source Verification:** Double-check inputs coming from other sections (e.g., `k71`, `k79`, `k98` affecting `d_129`).
-   **Dynamic Inputs:** Implement dynamic fetching for values currently hardcoded or using defaults (e.g., `nightTimeTemp`, `coolingSeasonMeanRH` from weather data; `projectElevation` `l_22`).
-   **Code Performance:** While major issues are fixed, monitor for any performance bottlenecks, especially during complex calculations or frequent updates.
-   **Refactoring Opportunities:** Consider if `coolingState` management or calculation function structure could be further simplified or aligned with global utilities (e.g., using `TEUI.formatNumber`).

## TODOs

### m_124 (Cooling Days) Calculation Discrepancy

**Issue:** The value calculated for `m_124` (representing active cooling days needed) does not match the expected values based on the original Excel model's logic, especially when different ventilation methods (`g_118`) are selected. Expected values (e.g., -31, -78, -9, 3) indicate a surplus or deficit of free cooling days, but the current JS calculation produces different results (e.g., -212.09 unclamped, based on logs).

**Diagnosis:** Logging indicates the core formula `coolingDays - (freeCoolingLimit / (coolingLoad / coolingDays))` is being used correctly, but the inputs it receives (`Load(m129)` and `FreeCooling(h124)`) appear inconsistent with the Excel model's intermediate values for the same scenarios.

**Likely Cause:** Discrepancies in the upstream calculations for the Mitigated Cooling Load (`m_129`, calculated in `calculateMitigatedCED`) and/or the Free Cooling Limit (`h_124`, calculated in `calculateFreeCooling` and `calculateFreeCoolingLimit`), potentially due to subtle differences in formula implementation compared to Excel.

**Action:** Temporarily set `m_124` display to "TBD". Requires further investigation in a future release to compare the JS implementation of `h_124` and `m_129` calculations step-by-step against the Excel (`COOLING-TARGET.csv`) logic and source values (`d_129`, `d_123`) to identify the root cause. Once fixed, remove the `Math.max(0, ...)` clamp in `calculateDaysActiveCooling` and restore the numeric calculation for `m_124`.


</rewritten_file> 