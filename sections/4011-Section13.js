/**
 * 4011-Section13.js
 * Mechanical Loads (Section 13) module for TEUI Calculator 4.011
 * 
 * This section integrates with 4011-Cooling.js for complex cooling calculations
 * and requires SectionIntegrator and StateManager connections to function properly.
 * 
 * ====================================================================
 * COOLING MODULE INTEGRATION REQUIREMENTS
 * ====================================================================
 * 
 * This section depends on 4011-Cooling.js for several key calculations:
 * 1. LATENT LOAD FACTOR (cell i_122) - Used for ventilation cooling energy
 * 2. FREE COOLING LIMIT (cell h_124) - Used for free cooling capacity
 * 3. DAYS ACTIVE COOLING (cell m_124) - Shows efficiency of passive cooling
 * 
 * When 4011-Cooling.js is loaded, it:
 * - Registers StateManager values with "cooling_" prefix (cooling_latentLoadFactor, etc.)
 * - Dispatches 'cooling-calculations-loaded' event which Section13 listens for
 * - Provides getter methods for direct access: getLatentLoadFactor(), getFreeCoolingLimit(), etc.
 * 
 * Section13 implements multiple fallback methods when cooling calculations are unavailable:
 * - First tries StateManager.getValue('cooling_latentLoadFactor')
 * - Then falls back to default values (defined in calculateCoolingVentilation, etc.)
 * 
 * ====================================================================
 * STATEMANAGER DEPENDENCIES
 * ====================================================================
 * 
 * This section has many cross-section dependencies managed by StateManager:
 * - FROM Section02: Building area (h_15) affects cooling intensity
 * - FROM Section03: HDD and CDD (d_20, d_21) affect ventilation energy 
 * - FROM Section09: Occupants (d_63) affect ventilation rates
 * - FROM Section12: Building volume (d_105) affects ventilation rates
 * - FROM Section14: Heating/cooling loads (d_127, d_129) affect system sizing
 * 
 * In registerWithStateManager(), this section formally declares these dependencies
 * using sm.registerDependency() to ensure proper calculation ordering.
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
 * 2. Add BOTH of these attributes to the cell:
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

// Ensure namespace exists
window.TEUI = window.TEUI || {};
window.TEUI.SectionModules = window.TEUI.SectionModules || {};

// Create section-specific namespace for global references
window.TEUI.sect13 = window.TEUI.sect13 || {};
window.TEUI.sect13.initialized = false;
window.TEUI.sect13.userInteracted = false;

// Section 13: Mechanical Loads Module
window.TEUI.SectionModules.sect13 = (function() {
    //==========================================================================
    // CONSOLIDATED FIELD DEFINITIONS AND LAYOUT
    //==========================================================================
    
    /**
     * IMPORTANT: The section layout must follow these rules:
     * 1. Unit subheader MUST be the first row in the array with id "SECTXX-ID" or "header"
     * 2. Field definitions should be embedded directly in the cell objects
     * 3. Each row must have a unique ID that matches its Excel row number or label
     * 4. Cells must align perfectly with Excel column positions A-N
     * 5. Empty cells still need empty objects {} as placeholders to maintain alignment
     */
    
    // Define rows with integrated field definitions
    const sectionRows = {
        // UNIT SUBHEADER
        "header": {
            id: "S13-ID",
            rowId: "S13-ID",
            label: "Mechanical Loads",
            cells: {
                c: { content: "SECTION 13. Mechanical Loads", classes: ["section-subheader", "section-title", "flex-cell"] },
                d: { content: "kWh/yr", classes: ["section-subheader", "flex-cell", "align-center"] },
                e: { content: "", classes: ["section-subheader", "flex-cell"] },
                f: { content: "", classes: ["section-subheader", "flex-cell"] },
                g: { content: "", classes: ["section-subheader", "flex-cell"] },
                h: { content: "", classes: ["section-subheader", "flex-cell"] },
                i: { content: "", classes: ["section-subheader", "flex-cell"] },
                j: { content: "kWh/yr", classes: ["section-subheader", "flex-cell", "align-center"] },
                k: { content: "Reference", classes: ["section-subheader", "flex-cell", "align-center"] },
                l: { content: "", classes: ["section-subheader", "flex-cell"] },
                m: { content: "", classes: ["section-subheader", "flex-cell"] },
                n: { content: "", classes: ["section-subheader", "flex-cell"] }
            }
        },
        
        // ROW 113: Primary Heating System
        "113": {
            id: "M.1.0",
            rowId: "M.1.0",
            label: "Primary Heating System",
            cells: {
                c: { label: "Primary Heating System", classes: ["flex-cell"] },
                d: { 
                    fieldId: "d_113", 
                    type: "dropdown", 
                    dropdownId: "dd_d_113", 
                    value: "Heatpump",
                    section: "mechanicalLoads",
                    options: [
                        { value: "Heatpump", name: "Heatpump" },
                        { value: "Electricity", name: "Electricity" },
                        { value: "Gas", name: "Gas" },
                        { value: "Oil", name: "Oil" }
                    ]
                },
                e: { 
                    content: "M.1.1 HSPF",
                    classes: ["label-prefix"]
                },
                f: { 
                    fieldId: "f_113", 
                    type: "editable", 
                    value: "12.5",
                    section: "mechanicalLoads"
                },
                g: { 
                    content: "M.1.2 COPheat",
                    classes: ["label-prefix"]
                },
                h: { 
                    fieldId: "h_113", 
                    type: "calculated", 
                    value: "3.66",
                    section: "mechanicalLoads",
                    dependencies: ["d_113", "f_113"]
                },
                i: { 
                    content: "M.1.3 COPcool",
                    classes: ["label-prefix"]
                },
                j: { 
                    fieldId: "j_113", 
                    type: "calculated", 
                    value: "2.7",
                    section: "mechanicalLoads",
                    dependencies: ["h_113"]
                },
                k: { 
                    content: "M.1.4 Sink",
                    classes: ["label-prefix"]
                },
                l: { 
                    fieldId: "l_113", 
                    type: "calculated", 
                    value: "86,642.65",
                    section: "mechanicalLoads",
                    dependencies: ["d_113", "d_114", "h_113"]
                },
                m: { 
                    fieldId: "m_113", 
                    type: "calculated", 
                    value: "176%",
                    section: "mechanicalLoads",
                    dependencies: ["f_113"]
                },
                n: {}
            }
        },
        
        // ROW 114: Heating System Demand
        "114": {
            id: "M.2.1",
            rowId: "M.2.1",
            label: "Heating System Demand",
            cells: {
                c: { label: "Heating System Demand", classes: ["flex-cell"] },
                d: { 
                    fieldId: "d_114", 
                    type: "calculated", 
                    value: "32,529.13",
                    section: "mechanicalLoads",
                    dependencies: ["d_113", "d_127", "h_113"]
                },
                e: {},
                f: {},
                g: {},
                h: {},
                i: { 
                    content: "M.1.5. CEER",
                    classes: ["label-prefix"]
                },
                j: { 
                    fieldId: "j_114", 
                    type: "calculated", 
                    value: "9.1",
                    section: "mechanicalLoads",
                    dependencies: ["j_113"]
                },
                k: { 
                    content: "M.1.6 Sink",
                    classes: ["label-prefix"]
                },
                l: { 
                    fieldId: "l_114", 
                    type: "calculated", 
                    value: "5,020.63",
                    section: "mechanicalLoads",
                    dependencies: ["d_113", "d_116", "d_117", "j_113"]
                },
                m: {},
                n: {}
            }
        },
        
        // ROW 115: Heating Fuel Impact
        "115": {
            id: "M.2.2",
            rowId: "M.2.2",
            label: "Heating Fuel Impact (ekWh/yr)",
            cells: {
                c: { label: "Heating Fuel Impact (ekWh/yr)", classes: ["flex-cell"] },
                d: { 
                    fieldId: "d_115", 
                    type: "calculated", 
                    value: "0.00",
                    section: "mechanicalLoads",
                    dependencies: ["d_113", "d_127", "j_115"]
                },
                e: { 
                    content: "M.2.3 Oil l/yr",
                    classes: ["label-prefix"]
                },
                f: { 
                    fieldId: "f_115", 
                    type: "calculated", 
                    value: "0.00",
                    section: "mechanicalLoads",
                    dependencies: ["d_115"]
                },
                g: { 
                    content: "M.2.4 Gas m3/yr",
                    classes: ["label-prefix"]
                },
                h: { 
                    fieldId: "h_115", 
                    type: "calculated", 
                    value: "0.00",
                    section: "mechanicalLoads",
                    dependencies: ["d_115"]
                },
                i: { 
                    content: "M.2.5 AFUE",
                    classes: ["label-prefix"]
                },
                j: { 
                    fieldId: "j_115", 
                    type: "editable", 
                    value: "0.98",
                    section: "mechanicalLoads"
                },
                k: { 
                    content: "M.2.5 Exhaust",
                    classes: ["label-prefix"]
                },
                l: { 
                    fieldId: "l_115", 
                    type: "calculated", 
                    value: "0.00",
                    section: "mechanicalLoads",
                    dependencies: ["d_113", "d_115", "d_114"]
                },
                m: { 
                    fieldId: "m_115", 
                    type: "calculated", 
                    value: "109%",
                    section: "mechanicalLoads",
                    dependencies: ["j_115"]
                },
                n: {}
            }
        },
        
        // ROW 116: Heatpump or Dedicated Cooling System
        "116": {
            id: "M.3.0",
            rowId: "M.3.0",
            label: "Heatpump or Dedicated Cooling System",
            cells: {
                c: { label: "Heatpump or Dedicated Cooling System", classes: ["flex-cell"] },
                d: { 
                    fieldId: "d_116", 
                    type: "dropdown", 
                    dropdownId: "dd_d_116", 
                    value: "Cooling",
                    section: "mechanicalLoads",
                    options: [
                        { value: "Cooling", name: "Cooling" },
                        { value: "No Cooling", name: "No Cooling" }
                    ]
                },
                e: {},
                f: {},
                g: { 
                    content: "M.3.3 COPcool", //ONLY when Dedicated Cooling
                    classes: ["label-prefix"]
                },
                h: {},
                i: {},
                j: { 
                    fieldId: "j_116", 
                    type: "calculated", 
                    value: "2.7",
                    section: "mechanicalLoads",
                    dependencies: []
                },
                k: { 
                    content: "M.3.4 Sink",
                    classes: ["label-prefix"]
                },
                l: { 
                    fieldId: "l_116", 
                    type: "calculated", 
                    value: "5,009.95",
                    section: "mechanicalLoads",
                    dependencies: ["d_116", "d_117", "j_116"]
                },
                m: { 
                    fieldId: "m_116", 
                    type: "calculated", 
                    value: "124%",
                    section: "mechanicalLoads",
                    dependencies: ["j_116"]
                },
                n: {}
            }
        },
        
        // ROW 117: Heatpump Cool Elect. Load
        "117": {
            id: "M.3.5",
            rowId: "M.3.5",
            label: "Heatpump Cool Elect. Load",
            cells: {
                c: { label: "Heatpump Cool Elect. Load", classes: ["flex-cell"] },
                d: { 
                    fieldId: "d_117", 
                    type: "calculated", 
                    value: "3,018.04",
                    section: "mechanicalLoads",
                    dependencies: ["d_116", "d_113", "m_129", "j_113", "j_116"]
                },
                e: {},
                f: { 
                    fieldId: "f_117", 
                    type: "calculated", 
                    value: "2.11",
                    section: "mechanicalLoads",
                    dependencies: ["d_117", "h_15"]
                },
                g: { 
                    content: "kWh/m2/yr",
                    classes: ["label"]
                },
                h: {},
                i: { 
                    content: "M.3.6 CEER",
                    classes: ["label-prefix"]
                },
                j: { 
                    fieldId: "j_117", 
                    type: "calculated", 
                    value: "9.1",
                    section: "mechanicalLoads",
                    dependencies: ["j_116"]
                },
                k: {},
                l: {},
                m: { 
                    fieldId: "m_117", 
                    type: "calculated", 
                    value: "4%",
                    section: "mechanicalLoads",
                    dependencies: ["f_117"]
                },
                n: {}
            }
        },
        
        // ROW 118: HRV/ERV/MVHR Efficiency (SRE)
        "118": {
            id: "V.1.1",
            rowId: "V.1.1",
            label: "HRV/ERV/MVHR Efficiency (SRE)",
            cells: {
                c: { label: "HRV/ERV/MVHR Efficiency (SRE)", classes: ["flex-cell"] },
                d: { 
                    fieldId: "d_118", 
                    type: "percentage", 
                    value: "89", 
                    min: 0, 
                    max: 100, 
                    step: 1,
                    section: "mechanicalLoads"
                },
                e: {},
                f: { 
                    content: "V.1.2 Ventilation Method",
                    classes: ["label-prefix"]
                },
                g: {},
                h: { 
                    fieldId: "h_118", 
                    type: "dropdown", 
                    dropdownId: "dd_h_118", 
                    value: "Volume by Schedule",
                    section: "mechanicalLoads",
                    options: [
                        { value: "Volume by Schedule", name: "Volume by Schedule" },
                        { value: "Occupant Constant", name: "Occupant Constant" },
                        { value: "Occupant by Schedule", name: "Occupant by Schedule" }
                    ]
                },
                i: {},
                j: { 
                    content: "V.1.3",
                    classes: ["label-prefix"]
                },
                k: { 
                    content: "ACH",  //(Only if Volume-Based)
                    classes: ["label"]
                },
                l: { 
                    fieldId: "l_118", 
                    type: "editable", 
                    value: "3",
                    section: "mechanicalLoads"
                },
                m: { 
                    fieldId: "m_118", 
                    type: "calculated", 
                    value: "162%",
                    section: "mechanicalLoads",
                    dependencies: ["d_118"]
                },
                n: {}
            }
        },
        
        // ROW 119: Per Person Ventilation Rate
        "119": {
            id: "V.1.4",
            rowId: "V.1.4",
            label: "Per Person Ventilation Rate",
            cells: {
                c: { label: "Per Person Ventilation Rate", classes: ["flex-cell"] },
                d: { 
                    fieldId: "d_119", 
                    type: "editable", 
                    value: "14.00",
                    section: "mechanicalLoads"
                },
                e: { 
                    content: "l/s per person",
                    classes: ["label"]
                },
                f: { 
                    fieldId: "f_119", 
                    type: "calculated", 
                    value: "29.66",
                    section: "mechanicalLoads",
                    dependencies: ["d_119"]
                },
                g: { 
                    content: "cfm",
                    classes: ["label"]
                },
                h: { 
                    fieldId: "h_119", 
                    type: "calculated", 
                    value: "50.40",
                    section: "mechanicalLoads",
                    dependencies: ["d_119"]
                },
                i: { 
                    content: "m3/hr",
                    classes: ["label"]
                },
                j: { 
                    content: "V.1.5",
                    classes: ["label-prefix"]
                },
                k: { 
                    content: "Summer Boost",
                    classes: ["label"]
                },
                l: { 
                    fieldId: "l_119", 
                    type: "dropdown",
                    dropdownId: "dd_l_119", 
                    value: "None",
                    section: "mechanicalLoads",
                    options: [
                        { value: "None", name: "None" },
                        { value: "1.5", name: "1.5x" },
                        { value: "2", name: "2x" },
                        { value: "3", name: "3x" }
                    ]
                },
                m: { 
                    fieldId: "m_119", 
                    type: "calculated", 
                    value: "112%",
                    section: "mechanicalLoads",
                    dependencies: ["d_119"]
                },
                n: {}
            }
        },
        
        // ROW 120: Volumetric Ventilation Rate
        "120": {
            id: "V.1.6",
            rowId: "V.1.6",
            label: "Volumetric Ventilation Rate",
            cells: {
                c: { label: "Volumetric Ventilation Rate", classes: ["flex-cell"] },
                d: { 
                    fieldId: "d_120", 
                    type: "calculated", 
                    value: "3,333.33",
                    section: "mechanicalLoads",
                    dependencies: ["h_118", "d_63", "d_119", "i_63", "j_63", "l_118", "d_105"]
                },
                e: { 
                    content: "l/s",
                    classes: ["label"]
                },
                f: { 
                    fieldId: "f_120", 
                    type: "calculated", 
                    value: "7,062.93",
                    section: "mechanicalLoads",
                    dependencies: ["d_120"]
                },
                g: { 
                    content: "cfm",
                    classes: ["label"]
                },
                h: { 
                    fieldId: "h_120", 
                    type: "calculated", 
                    value: "12,000.00",
                    section: "mechanicalLoads",
                    dependencies: ["d_120"]
                },
                i: { 
                    content: "m3/hr",
                    classes: ["label"]
                },
                j: {},
                k: {},
                l: {},
                m: {},
                n: {}
            }
        },
        
        // ROW 121: Heating Season Ventil. Energy
        "121": {
            id: "V.2.1",
            rowId: "V.2.1",
            label: "Heating Season Ventil. Energy",
            cells: {
                c: { label: "Heating Season Ventil. Energy", classes: ["flex-cell"] },
                d: { 
                    fieldId: "d_121", 
                    type: "calculated", 
                    value: "445,280.00",
                    section: "mechanicalLoads",
                    dependencies: ["d_120", "d_20"]
                },
                e: { 
                    content: "V.2.2",
                    classes: ["label-prefix", "flex-cell"]
                },
                f: { 
                    content: "Htg. Vent. Energy Recovered",
                    classes: ["label", "flex-cell"]
                },
                g: {},
                h: {},
                i: { 
                    fieldId: "i_121", 
                    type: "calculated", 
                    value: "396,299.20",
                    section: "mechanicalLoads",
                    dependencies: ["d_121", "d_118"]
                },
                j: { 
                    content: "V.2.3",
                    classes: ["label-prefix", "flex-cell"]
                },
                k: { 
                    content: "Net Htg. Vent. Losses",  //Net Heating Season Ventilation Losses
                    classes: ["label", "flex-cell"]
                },
                l: {},
                m: { 
                    fieldId: "m_121", 
                    type: "calculated", 
                    value: "48,980.80",
                    section: "mechanicalLoads",
                    dependencies: ["d_121", "i_121"]
                },
                n: {}
            }
        },
        
        // ROW 122: Incoming Cooling Season Ventil. Energy - References Cooling calculations
        "122": {
            id: "V.3.1",
            rowId: "V.3.1",
            label: "Incoming Cooling Season Ventil. Energy",
            cells: {
                c: { label: "Incoming Cooling Season Ventil. Energy", classes: ["flex-cell"] },
                d: { 
                    fieldId: "d_122", 
                    type: "calculated", 
                    value: "30,257.37",
                    section: "mechanicalLoads",
                    dependencies: ["h_118", "l_119", "d_120", "d_21", "i_63", "j_63", "i_122"]
                },
                e: { 
                    content: "V.3.2",
                    classes: ["label-prefix", "flex-cell"]
                },
                f: { 
                    content: "Latent Load Factor (Calc'd)",
                    classes: ["label", "flex-cell"]
                },
                g: {},
                h: {},
                i: { 
                    fieldId: "i_122", 
                    type: "calculated", 
                    value: "159%",
                    section: "mechanicalLoads",
                    dependencies: ["cooling_latentLoadFactor"]
                },
                j: {},
                k: {},
                l: {},
                m: {},
                n: {}
            }
        },
        
        // ROW 123: Outgoing Cooling Season Ventil. Energy
        "123": {
            id: "V.3.3",
            rowId: "V.3.3",
            label: "Outgoing Cooling Season Ventil. Energy",
            cells: {
                c: { label: "Outgoing Cooling Season Ventil. Energy", classes: ["flex-cell"] },
                d: { 
                    fieldId: "d_123", 
                    type: "calculated", 
                    value: "26,929.06",
                    section: "mechanicalLoads",
                    dependencies: ["d_118", "d_122"]
                },
                e: {},
                f: {},
                g: {},
                h: {},
                i: {},
                j: {},
                k: {},
                l: {},
                m: {},
                n: {}
            }
        },
        
        // ROW 124: Ventilation Free Cooling/Vent Capacity - References Cooling calculations
        "124": {
            id: "V.4.1",
            rowId: "V.4.1",
            label: "Ventilation Free Cooling/Vent Capacity",
            cells: {
                c: { label: "Ventilation Free Cooling/Vent Capacity", classes: ["flex-cell"] },
                d: { 
                    fieldId: "d_124", 
                    type: "calculated", 
                    value: "54%",
                    section: "mechanicalLoads",
                    dependencies: ["h_124", "d_129"]
                },
                e: { 
                    content: "V.4.2",
                    classes: ["label-prefix", "flex-cell"]
                },
                f: { 
                    content: "Free Cooling Limit",
                    classes: ["label", "flex-cell"]
                },
                g: {},
                h: { 
                    fieldId: "h_124", 
                    type: "calculated", 
                    value: "41,469.81",
                    section: "mechanicalLoads",
                    dependencies: ["cooling_freeCoolingLimit", "m_19"]
                },
                i: { 
                    content: "kWh/yr",
                    classes: ["label", "flex-cell"]
                },
                j: { 
                    content: "Cooling Days", //Days Active Cooling Required (Experimental)
                    classes: ["label", "flex-cell"]
                },
                k: {},
                l: {},
                m: { 
                    fieldId: "m_124", 
                    type: "calculated", 
                    value: "-31",
                    section: "mechanicalLoads",
                    dependencies: ["cooling_daysActiveCooling"]
                },
                n: {}
            }
        }
    };
    
    //==========================================================================
    // ACCESSOR METHODS TO EXTRACT FIELDS AND LAYOUT
    //==========================================================================
    
    /**
     * Extract field definitions from the integrated layout
     * This method is required for compatibility with the FieldManager
     */
    function getFields() {
        const fields = {};
        
        // Extract field definitions from all rows except the header
        Object.entries(sectionRows).forEach(([rowKey, row]) => {
            if (rowKey === "header") return; // Skip the header row
            if (!row.cells) return;
            
            // Process each cell in the row
            Object.entries(row.cells).forEach(([colKey, cell]) => {
                if (cell.fieldId && cell.type) {
                    // Create field definition with all relevant properties
                    fields[cell.fieldId] = {
                        type: cell.type,
                        label: cell.label || row.label,
                        defaultValue: cell.value || "",
                        section: cell.section || "mechanicalLoads"
                    };
                    
                    // Copy additional field properties if they exist
                    if (cell.dropdownId) fields[cell.fieldId].dropdownId = cell.dropdownId;
                    if (cell.options) fields[cell.fieldId].options = cell.options;
                    if (cell.getOptions) fields[cell.fieldId].getOptions = cell.getOptions;
                    if (cell.dependencies) fields[cell.fieldId].dependencies = cell.dependencies;
                    if (cell.min !== undefined) fields[cell.fieldId].min = cell.min;
                    if (cell.max !== undefined) fields[cell.fieldId].max = cell.max;
                    if (cell.step !== undefined) fields[cell.fieldId].step = cell.step;
                }
            });
        });
        
        return fields;
    }
    
    /**
     * Extract dropdown options from the integrated layout
     * Required for backward compatibility
     */
    function getDropdownOptions() {
        const options = {};
        
        // Extract dropdown options from all cells with dropdownId
        Object.values(sectionRows).forEach(row => {
            if (!row.cells) return;
            
            Object.values(row.cells).forEach(cell => {
                if (cell.dropdownId && cell.options) {
                    options[cell.dropdownId] = cell.options;
                }
            });
        });
        
        return options;
    }
    
    /**
     * Generate layout from integrated row definitions
     * This converts our compact definition to the format expected by the renderer
     */
    function getLayout() {
        // IMPORTANT: To ensure the header appears first, we process the rows in 
        // a specific order: header first, then all other rows
        
        // Start with an empty array for rows
        const layoutRows = [];
        
        // First add the header row if it exists
        if (sectionRows["header"]) {
            layoutRows.push(createLayoutRow(sectionRows["header"]));
        }
        
        // Then add all other rows in their original order, excluding the header
        Object.entries(sectionRows).forEach(([key, row]) => {
            if (key !== "header") {
                layoutRows.push(createLayoutRow(row));
            }
        });
        
        return { rows: layoutRows };
    }
    
    /**
     * Helper function to convert a row definition to the layout format
     * This function handles the conversion of column C cells for proper row labels
     */
    function createLayoutRow(row) {
        // Create standard row structure
        const rowDef = {
            id: row.id,
            cells: [
                {}, // Empty column A
                {}  // ID column B (auto-populated)
            ]
        };
        
        // Add cells C through N based on the row definition
        const columns = ['c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n'];
        
        // For each column, add the cell definition if it exists in the row
        columns.forEach(col => {
            if (row.cells && row.cells[col]) {
                // Create a simplified cell definition for the renderer
                // without the extra field properties
                const cell = { ...row.cells[col] };
                
                // Ensure each cell has flex-cell class for responsive behavior
                if (!cell.classes) {
                    cell.classes = ["flex-cell"];
                } else if (!cell.classes.includes("flex-cell")) {
                    cell.classes.push("flex-cell");
                }
                
                // Special handling for column C to support both label patterns
                if (col === 'c') {
                    // If using content+type pattern, convert to label pattern
                    if (cell.type === 'label' && cell.content && !cell.label) {
                        cell.label = cell.content;
                        delete cell.type;    // Not needed for rendering
                        delete cell.content; // Not needed once we have label
                    }
                    // If neither label nor content exists, use row's label as fallback
                    else if (!cell.label && !cell.content && row.label) {
                        cell.label = row.label;
                    }
                }
                
                // Remove field-specific properties that aren't needed for rendering
                delete cell.getOptions;
                delete cell.section;
                delete cell.dependencies;
                
                rowDef.cells.push(cell);
            } else {
                // Add empty cell if not defined
                // Special handling for column C - use row's label if available
                if (col === 'c' && !row.cells?.c && row.label) {
                    rowDef.cells.push({ label: row.label, classes: ["flex-cell"] });
                } else {
                    // Otherwise add empty cell with flex class
                    rowDef.cells.push({ classes: ["flex-cell"] });
                }
            }
        });
        
        return rowDef;
    }
    
    //==========================================================================
    // EVENT HANDLING AND CALCULATIONS
    //==========================================================================
    
    /**
     * Initialize all event handlers for this section
     */
    function initializeEventHandlers() {
        // Heating system dropdown change handler
        document.querySelectorAll('[data-field-id="d_113"]').forEach(dropdown => {
            dropdown.addEventListener('change', function(e) {
                calculateHeatingSystem();
            });
        });
        
        // HSPF input change handler
        document.querySelectorAll('[data-field-id="f_113"]').forEach(input => {
            input.addEventListener('change', function(e) {
                calculateCOPValues();
            });
        });
        
        // Cooling system dropdown change handler
        document.querySelectorAll('[data-field-id="d_116"]').forEach(dropdown => {
            dropdown.addEventListener('change', function(e) {
                calculateCoolingSystem();
            });
        });
        
        // Ventilation efficiency slider change handler
        document.querySelectorAll('[data-field-id="d_118"]').forEach(slider => {
            slider.addEventListener('input', function(e) {
                calculateVentilationValues();
            });
        });
        
        // Ventilation method dropdown change handler
        document.querySelectorAll('[data-field-id="h_118"]').forEach(dropdown => {
            dropdown.addEventListener('change', function(e) {
                calculateVentilationRates();
            });
        });
        
        // Per person ventilation rate input handler
        document.querySelectorAll('[data-field-id="d_119"]').forEach(input => {
            input.addEventListener('change', function(e) {
                calculateVentilationRates();
            });
        });
        
        // Summer boost dropdown change handler
        document.querySelectorAll('[data-field-id="l_119"]').forEach(dropdown => {
            dropdown.addEventListener('change', function(e) {
                calculateCoolingVentilation();
            });
        });
    }
    
    /**
     * Called when the section is rendered
     * This is a good place to initialize values and run initial calculations
     */
    function onSectionRendered() {
        // Initialize event handlers
        initializeEventHandlers();
        
        // Initialize cooling calculations module if available
        initializeCoolingModule();
        
        // Register with the StateManager
        registerWithStateManager();
        
        // Run initial calculations
        calculateAll();
    }
    
    /**
     * Register this section's dependencies with StateManager
     */
    function registerWithStateManager() {
        if (!window.TEUI.StateManager) return;
        
        const sm = window.TEUI.StateManager;
        
        // Register dependencies from other sections
        sm.registerDependency('d_20', 'd_121'); // HDD affects ventilation energy
        sm.registerDependency('d_21', 'd_122'); // CDD affects cooling ventilation
        sm.registerDependency('d_105', 'd_120'); // Building volume affects ventilation rate
        sm.registerDependency('d_63', 'd_120'); // Occupants affects ventilation rate
        sm.registerDependency('h_15', 'f_117'); // Floor area affects intensity
        sm.registerDependency('d_127', 'd_114'); // TED affects heating demand
        
        // Register callbacks for cooling calculation changes
        if (window.TEUI.CoolingCalculations) {
            sm.addListener('cooling_latentLoadFactor', calculateCoolingVentilation);
            sm.addListener('cooling_freeCoolingLimit', calculateFreeCooling);
        }
    }
    
    /**
     * Initialize the cooling calculations module if available
     */
    function initializeCoolingModule() {
        // Check if the cooling module exists
        if (typeof window.TEUI.CoolingCalculations !== 'undefined') {
            console.log('Initializing Cooling Calculations module');
            
            // Initialize with section-specific parameters
            window.TEUI.CoolingCalculations.initialize({
                // Get any needed values from StateManager
                nightTimeTemp: getNumericValue('d_24') - 4, // Approximate night temp as 4°C below day temp
                coolingSeasonMeanRH: 0.5585, // Default value, could be from weather data
            });
        } else {
            // console.warn('Cooling Calculations module not available - some features will be limited');
        }
    }
    
    /**
     * Calculate COPh and COPc values based on heating system and HSPF
     */
    function calculateCOPValues() {
        const hspf = getNumericValue('f_113');
        const systemType = getFieldValue('d_113');
        
        // Calculate COPheat from HSPF
        let copheat = 1; // Default for electric resistance
        
        if (systemType === 'Heatpump' && hspf > 0) {
            // Convert HSPF to COP (HSPF/3.412 = COPhtg)
            copheat = hspf / 3.412;
        }
        
        // Calculate COPcool (typically COPheat - 1)
        let copcool = Math.max(1, copheat - 1);
        
        // Update the calculated fields
        setCalculatedValue('h_113', copheat.toFixed(2));
        setCalculatedValue('j_113', copcool.toFixed(1));
        
        // Update CEER value (3.412 * COPcool)
        const ceer = 3.412 * copcool;
        setCalculatedValue('j_114', ceer.toFixed(1));
        
        calculateHeatingSystem();
    }
    
    /**
     * Calculate heating system values based on system type and COP
     */
    function calculateHeatingSystem() {
        const systemType = getFieldValue('d_113');
        const tedTarget = getNumericValue('d_127'); // From Section 14
        const copheat = getNumericValue('h_113');
        
        // Calculate heating system demand
        let heatingDemand = 0;
        
        if (systemType === 'Heatpump') {
            heatingDemand = tedTarget / copheat;
        } else {
            heatingDemand = tedTarget;
        }
        
        // Update heating demand field
        setCalculatedValue('d_114', formatNumber(heatingDemand));
        
        // Calculate heating sink value (the unpurchased energy from environment)
        let heatingSink = 0;
        
        if (systemType === 'Heatpump') {
            heatingSink = (heatingDemand * copheat) - heatingDemand;
        }
        
        // Update sink field
        setCalculatedValue('l_113', formatNumber(heatingSink));
        
        // Calculate fuel impact for gas/oil systems
        calculateHeatingFuelImpact();
        
        // Also update cooling values since they depend on heating system type
        calculateCoolingSystem();
    }
    
    /**
     * Calculate heating fuel impact for gas and oil systems
     */
    function calculateHeatingFuelImpact() {
        const systemType = getFieldValue('d_113');
        const tedTarget = getNumericValue('d_127'); // From Section 14
        const afue = getNumericValue('j_115');
        
        let fuelImpact = 0;
        let oilLitres = 0;
        let gasM3 = 0;
        let exhaust = 0;
        
        if (systemType === 'Gas') {
            fuelImpact = tedTarget / afue;
            gasM3 = fuelImpact / (0.0373 * 277.7778);
            exhaust = fuelImpact - tedTarget;
        } else if (systemType === 'Oil') {
            fuelImpact = tedTarget / afue;
            oilLitres = fuelImpact / (36.72 * 0.2777778);
            exhaust = fuelImpact - tedTarget;
        }
        
        // Update fields
        setCalculatedValue('d_115', formatNumber(fuelImpact));
        setCalculatedValue('f_115', formatNumber(oilLitres));
        setCalculatedValue('h_115', formatNumber(gasM3));
        setCalculatedValue('l_115', formatNumber(exhaust));
    }
    
    /**
     * Calculate cooling system values
     */
    function calculateCoolingSystem() {
        const systemType = getFieldValue('d_113');
        const coolingEnabled = getFieldValue('d_116');
        const coolingLoad = getNumericValue('m_129'); // From Section 14 (unmitigated cooling load)
        const copcool = getNumericValue('j_113');
        const dedicatedCopcool = getNumericValue('j_116');
        
        let coolingElectLoad = 0;
        let coolingSink = 0;
        
        // Calculate based on system type and cooling setting
        if (coolingEnabled === 'No Cooling') {
            coolingElectLoad = 0;
            coolingSink = 0;
        } else if (systemType === 'Heatpump') {
            coolingElectLoad = coolingLoad / copcool;
            coolingSink = ((coolingElectLoad * copcool) - coolingElectLoad);
        } else if (coolingEnabled === 'Cooling') {
            coolingElectLoad = coolingLoad / dedicatedCopcool;
            coolingSink = ((coolingElectLoad * dedicatedCopcool) - coolingElectLoad);
        }
        
        // Update fields
        setCalculatedValue('d_117', formatNumber(coolingElectLoad));
        setCalculatedValue('l_116', formatNumber(coolingSink));
        
        // Calculate cooling intensity (kWh/m2/yr)
        const area = getNumericValue('h_15'); // From Section 2
        const intensity = area > 0 ? coolingElectLoad / area : 0;
        
        setCalculatedValue('f_117', intensity.toFixed(2));
    }
    
    /**
     * Calculate ventilation values based on efficiency and method
     */
    function calculateVentilationValues() {
        calculateVentilationRates();
        calculateVentilationEnergy();
        calculateCoolingVentilation();
    }
    
    /**
     * Calculate ventilation rates based on method, occupancy, and building data
     */
    function calculateVentilationRates() {
        const ventMethod = getFieldValue('h_118');
        const occupants = getNumericValue('d_63'); // From Section 9
        const perPersonRate = getNumericValue('d_119');
        const volume = getNumericValue('d_105'); // From Section 12
        const ach = getNumericValue('l_118');
        const occupiedHours = getNumericValue('i_63'); // From Section 9
        const totalHours = getNumericValue('j_63'); // Usually 8760
        
        let ventRate = 0;
        
        // Calculate based on method
        if (ventMethod === 'Occupant Constant') {
            ventRate = occupants * perPersonRate;
        } else if (ventMethod === 'Occupant by Schedule') {
            ventRate = occupants * perPersonRate * (occupiedHours / totalHours);
        } else if (ventMethod === 'Volume by Schedule') {
            ventRate = (ach * volume / 3.6) * (occupiedHours / totalHours);
        } else {
            // Default to volume based
            ventRate = ach * volume / 3.6;
        }
        
        // Update ventilation rate fields
        setCalculatedValue('d_120', formatNumber(ventRate));
        setCalculatedValue('f_120', formatNumber(ventRate * 2.11888)); // Convert to cfm
        setCalculatedValue('h_120', formatNumber(ventRate * 3.6)); // Convert to m3/hr
    }
    
    /**
     * Calculate ventilation energy for heating season
     */
    function calculateVentilationEnergy() {
        const ventRate = getNumericValue('d_120');
        const hdd = getNumericValue('d_20'); // From Section 3
        const efficiency = getNumericValue('d_118') / 100; // Convert from percentage
        
        // Calculate heating season ventilation energy (1.21 * ventRate * HDD * 24 / 1000)
        const ventEnergy = 1.21 * ventRate * hdd * 24 / 1000;
        
        // Calculate recovered energy
        const recoveredEnergy = ventEnergy * efficiency;
        
        // Calculate net heat loss
        const netHeatLoss = ventEnergy - recoveredEnergy;
        
        // Update fields
        setCalculatedValue('d_121', formatNumber(ventEnergy));
        setCalculatedValue('i_121', formatNumber(recoveredEnergy));
        setCalculatedValue('m_121', formatNumber(netHeatLoss));
    }
    
    /**
     * Calculate cooling season ventilation values
     */
    function calculateCoolingVentilation() {
        const ventRate = getNumericValue('d_120');
        const cdd = getNumericValue('d_21'); // From Section 3
        const ventMethod = getFieldValue('h_118');
        const summerBoost = getFieldValue('l_119');
        const occupiedHours = getNumericValue('i_63'); // From Section 9
        const totalHours = getNumericValue('j_63'); // Usually 8760
        const efficiency = getNumericValue('d_118') / 100; // Convert from percentage
        
        // Get latent load factor from cooling module or use fallback calculation
        let latentLoadFactor = 1.0;
        
        if (window.TEUI.CoolingCalculations && typeof window.TEUI.CoolingCalculations.getLatentLoadFactor === 'function') {
            latentLoadFactor = window.TEUI.CoolingCalculations.getLatentLoadFactor();
        } else if (window.TEUI.StateManager) {
            // Try to get from StateManager
            const storedFactor = window.TEUI.StateManager.getValue('cooling_latentLoadFactor');
            if (storedFactor) {
                latentLoadFactor = parseFloat(storedFactor);
            } else {
                // Fallback calculation (simplified)
                latentLoadFactor = 1.59; // Default from example
            }
        } else {
            // Hard fallback
            latentLoadFactor = 1.59;
        }
        
        // Update latent load factor display
        setCalculatedValue('i_122', `${Math.round(latentLoadFactor * 100)}%`);
        
        // Calculate cooling season ventilation energy
        let coolingVentEnergy = 0;
        
        // Apply summer boost factor if selected
        let boostFactor = 1;
        if (summerBoost !== 'None') {
            boostFactor = parseFloat(summerBoost);
        }
        
        if (ventMethod === 'Yes') {
            // This path in the Excel formula seems odd - ventMethod doesn't have 'Yes' as an option
            // Using the formula from Excel anyway
            if (summerBoost === 'None') {
                coolingVentEnergy = (1.21 * ventRate * cdd * 24 / 1000) * (occupiedHours / totalHours) * latentLoadFactor;
            } else {
                coolingVentEnergy = (1.21 * ventRate * cdd * 24 / 1000) * (occupiedHours / totalHours) * boostFactor * latentLoadFactor;
            }
        } else {
            if (summerBoost === 'None') {
                coolingVentEnergy = (1.21 * ventRate * cdd * 24 / 1000) * latentLoadFactor;
            } else {
                coolingVentEnergy = (1.21 * ventRate * cdd * 24 / 1000) * latentLoadFactor * boostFactor;
            }
        }
        
        // Calculate outgoing energy
        const outgoingEnergy = efficiency * coolingVentEnergy;
        
        // Update fields
        setCalculatedValue('d_122', formatNumber(coolingVentEnergy));
        setCalculatedValue('d_123', formatNumber(outgoingEnergy));
        
        // Also calculate free cooling since ventilation parameters changed
        calculateFreeCooling();
    }
    
    /**
     * Calculate free cooling capacity based on ventilation and cooling module data
     */
    function calculateFreeCooling() {
        // Get cooling load
        const coolingLoad = getNumericValue('d_129');
        
        // Get free cooling limit from cooling module or use fallback
        let freeCoolingLimit = 0;
        
        if (window.TEUI.CoolingCalculations && typeof window.TEUI.CoolingCalculations.getFreeCoolingLimit === 'function') {
            freeCoolingLimit = window.TEUI.CoolingCalculations.getFreeCoolingLimit();
            
            // Adjust by the climate zone multiplier - m_19 from Section 3
            const climateMultiplier = getNumericValue('m_19');
            freeCoolingLimit *= climateMultiplier;
        } else if (window.TEUI.StateManager) {
            // Try to get from StateManager
            const storedLimit = window.TEUI.StateManager.getValue('cooling_freeCoolingLimit');
            if (storedLimit) {
                freeCoolingLimit = parseFloat(storedLimit);
                
                // Adjust by the climate zone multiplier
                const climateMultiplier = getNumericValue('m_19');
                freeCoolingLimit *= climateMultiplier;
            } else {
                // Fallback calculation
                freeCoolingLimit = 41469.81; // Default from example
            }
        } else {
            // Hard fallback
            freeCoolingLimit = 41469.81;
        }
        
        // Calculate percentage
        const percentCapacity = coolingLoad > 0 ? (freeCoolingLimit / coolingLoad) * 100 : 0;
        
        // Update fields
        setCalculatedValue('h_124', formatNumber(freeCoolingLimit));
        setCalculatedValue('d_124', `${Math.round(percentCapacity)}%`);
        
        // Get days active cooling from cooling module or use fallback
        let daysActiveCooling = -31; // Default from example
        
        if (window.TEUI.CoolingCalculations && typeof window.TEUI.CoolingCalculations.getDaysActiveCooling === 'function') {
            daysActiveCooling = window.TEUI.CoolingCalculations.getDaysActiveCooling();
        } else if (window.TEUI.StateManager) {
            // Try to get from StateManager
            const storedDays = window.TEUI.StateManager.getValue('cooling_daysActiveCooling');
            if (storedDays) {
                daysActiveCooling = parseInt(storedDays);
            }
        }
        
        setCalculatedValue('m_124', daysActiveCooling.toString());
    }
    
    /**
     * Calculate all values for this section
     */
    function calculateAll() {
        calculateCOPValues();
        calculateHeatingSystem();
        calculateVentilationValues();
    }
    
    /**
     * Helper function to get numeric values from any field
     * Handles commas and parsing
     */
    function getNumericValue(fieldId) {
        const value = getFieldValue(fieldId);
        
        // Handle string values (with comma removal)
        if (typeof value === 'string') {
            return parseFloat(value.replace(/,/g, '')) || 0;
        }
        // Handle number values directly
        else if (typeof value === 'number') {
            return value;
        }
        // Default fallback
        return 0;
    }
    
    /**
     * Helper function to get field values from StateManager or DOM
     */
    function getFieldValue(fieldId) {
        // Try StateManager first
        if (window.TEUI.StateManager) {
            const value = window.TEUI.StateManager.getValue(fieldId);
            if (value !== null) {
                return value;
            }
        }
        
        // Fallback to DOM
        const field = document.querySelector(`[data-field-id="${fieldId}"]`);
        if (field) {
            if (field.tagName === 'SELECT') {
                return field.value;
            } else if (field.tagName === 'INPUT' && field.type === 'range') {
                return field.value;
            } else {
                return field.textContent.trim();
            }
        }
        
        return null;
    }
    
    /**
     * Helper function to set calculated values in StateManager and DOM
     */
    function setCalculatedValue(fieldId, value) {
        // Update StateManager
        if (window.TEUI.StateManager) {
            window.TEUI.StateManager.setValue(fieldId, value.toString(), 'calculated');
        }
        
        // Update DOM
        const field = document.querySelector(`[data-field-id="${fieldId}"]`);
        if (field) {
            field.textContent = value;
        }
    }
    
    /**
     * Format numbers with commas and proper decimals
     */
    function formatNumber(value) {
        if (Math.abs(value) < 0.01 && value !== 0) {
            return value.toFixed(2); // Handle very small numbers
        }
        
        if (Number.isInteger(parseFloat(value))) {
            return parseFloat(value).toLocaleString(undefined, {
                minimumFractionDigits: 0,
                maximumFractionDigits: 0
            }); // Integers with commas, no decimals
        }
        
        return parseFloat(value).toLocaleString(undefined, {
            minimumFractionDigits: 2,
            maximumFractionDigits: 2
        }); // Format with commas and 2 decimal places
    }
    
    //==========================================================================
    // PUBLIC API
    //==========================================================================
    
    return {
        // Field definitions and layout - REQUIRED
        getFields: getFields,
        getDropdownOptions: getDropdownOptions,
        getLayout: getLayout,
        
        // Event handling and initialization - REQUIRED
        initializeEventHandlers: initializeEventHandlers,
        onSectionRendered: onSectionRendered,
        
        // Section-specific utility functions
        calculateAll: calculateAll,
        calculateHeatingSystem: calculateHeatingSystem,
        calculateCoolingSystem: calculateCoolingSystem,
        calculateVentilationValues: calculateVentilationValues,
        calculateFreeCooling: calculateFreeCooling,
        
        // Exposed for testing and debugging
        getNumericValue: getNumericValue
    };
})();

// Initialize when the section is rendered
document.addEventListener('teui-section-rendered', function(event) {
    if (event.detail?.sectionId === 'mechanicalLoads') { // Correct section ID
        setTimeout(() => window.TEUI.SectionModules.sect13.onSectionRendered(), 100);
    }
});

// Fallback to rendering complete event
document.addEventListener('teui-rendering-complete', function() {
    setTimeout(() => {
        if (document.getElementById('mechanicalLoads')) { // Correct section ID
            window.TEUI.SectionModules.sect13.onSectionRendered();
        }
    }, 300);
});

// Global access point for Section13 functions
window.TEUI.sect13.calculateAll = function() {
    if (window.TEUI.SectionModules.sect13) {
        window.TEUI.SectionModules.sect13.calculateAll();
    }
};

// Integration with Cooling module
document.addEventListener('cooling-calculations-loaded', function() {
    console.log('Cooling Calculations module loaded - initializing integration');
    if (window.TEUI.SectionModules.sect13) {
        // Re-run calculations with cooling data
        window.TEUI.SectionModules.sect13.calculateFreeCooling();
        window.TEUI.SectionModules.sect13.calculateCoolingVentilation();
    }
});