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
    // console.log("[Debug S13] Checking for global formatter: ", typeof window.TEUI.formatNumber); // REMOVE THIS LOG
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
                    type: "coefficient", // Changed from editable to coefficient slider type
                    value: "12.5",      // Default value
                    min: 3.5,           // Min value
                    max: 20,            // Max value
                    step: 0.1,          // Step increment
                    section: "mechanicalLoads"
                    // Removed classes: ["user-input", "editable"]
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
                    content: "Ventil. Method",
                    classes: ["label-prefix"]
                },
                g: {
                    fieldId: "g_118", 
                    type: "dropdown", 
                    dropdownId: "dd_g_118", 
                    value: "Volume by Schedule",
                    section: "mechanicalLoads",
                    options: [
                        { value: "Volume Constant", name: "Volume Constant" }, // ADDED MISSING
                        { value: "Volume by Schedule", name: "Volume by Schedule" },
                        { value: "Occupant Constant", name: "Occupant Constant" },
                        { value: "Occupant by Schedule", name: "Occupant by Schedule" }
                    ]
                },
                h: {},
                i: { 
                    content: "V.1.3",
                    classes: ["label-prefix"]
                },
                j: { 
                    content: "ACH",  //(Only if Volume-Based)
                    classes: ["label"]
                },
                k: {},
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
                    options: [ // CORRECTED OPTIONS
                        { value: "None", name: "None" },
                        { value: "1.10", name: "1.10x" },
                        { value: "1.20", name: "1.20x" },
                        { value: "1.30", name: "1.30x" },
                        { value: "1.40", name: "1.40x" },
                        { value: "1.50", name: "1.50x" },
                        { value: "1.60", name: "1.60x" },
                        { value: "1.70", name: "1.70x" },
                        { value: "1.80", name: "1.80x" },
                        { value: "1.90", name: "1.90x" },
                        { value: "2.00", name: "2.00x" }
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
        document.querySelectorAll('[data-field-id="g_118"]').forEach(dropdown => {
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

        // --- StateManager Listeners --- 
        if (window.TEUI && window.TEUI.StateManager) {
            const sm = window.TEUI.StateManager; // Alias for brevity

            // Listener for d_113 (Heating System) changes
            sm.addListener('d_113', calculateHeatingSystem);
            
            // Listener for f_113 (HSPF) changes
            sm.addListener('f_113', calculateCOPValues);

            // Listener for d_116 (Cooling System) changes
            sm.addListener('d_116', calculateCoolingSystem);

            // Listener for d_118 (Ventilation Efficiency) changes
            sm.addListener('d_118', calculateVentilationValues);

            // Listener for g_118 (Ventilation Method) changes
            sm.addListener('g_118', calculateVentilationRates);

            // Listener for d_119 (Per Person Rate) changes
            sm.addListener('d_119', calculateVentilationRates);

            // Listener for l_119 (Summer Boost) changes
            sm.addListener('l_119', calculateCoolingVentilation);

        // Add listeners for climate data changes from Section 3
            sm.addListener('d_20', calculateAll); // HDD
            sm.addListener('d_21', calculateAll); // CDD
            sm.addListener('d_23', calculateAll); // Coldest Day Temp
            sm.addListener('d_24', calculateAll); // Hottest Day Temp
            sm.addListener('h_23', calculateAll); // Heating Setpoint
            sm.addListener('h_24', calculateAll); // Cooling Setpoint
            // Listen to relevant outputs from Section 12 (e.g., total losses)
            sm.addListener('i_104', calculateAll);
            sm.addListener('k_104', calculateAll);
            // Listen to relevant outputs from Section 9/10 (gains)
            sm.addListener('i_71', calculateAll);
            sm.addListener('i_79', calculateAll);
        } else {
            console.warn("Section 13: StateManager not available to add climate/loss/gain listeners.");
        }

        // --- Standard Editable Field Handlers (Moved Inside initializeEventHandlers) --- 
        const sectionElement = document.getElementById('mechanicalLoads'); // Use the correct section ID
        if (sectionElement) {
            const editableFields = sectionElement.querySelectorAll('.editable.user-input');
            // console.log(`[Debug S13] Found ${editableFields.length} editable fields in Section 13.`); // Keep logs for now
            editableFields.forEach(field => {
                const fieldId = field.getAttribute('data-field-id'); // Get field ID for logging
                // Prevent adding listeners multiple times
                if (!field.hasEditableListeners) {
                    // console.log(`[Debug S13] Attaching listeners to editable field: ${fieldId}`); // Keep logs for now
                    field.setAttribute('contenteditable', 'true');
                    
                    // Use a single blur handler for consistency
                    field.addEventListener('blur', handleEditableBlur); 
                    
                    // Add keydown listener to handle Enter key
                    field.addEventListener('keydown', function(e) { 
                        // console.log(`[Debug S13] Keydown on ${fieldId}: Key = ${e.key}`); // Keep logs for now
                        if (e.key === 'Enter') {
                            // console.log(`[Debug S13] Enter detected on ${fieldId}. Preventing default and blurring.`); // Keep logs for now
                            e.preventDefault(); // Prevent adding newline
                            e.stopPropagation(); // Prevent event bubbling
                            this.blur(); // Trigger blur to save value
                        }
                    });
                    
                    field.hasEditableListeners = true; // Mark as having listeners attached
                }
            });
        } else {
             console.warn("Section 13 element not found for attaching editable field handlers.");
        }
    }
    
    /**
     * Handle blur events on editable fields (Standard Handler - Defined inside IIFE)
     */
    function handleEditableBlur(event) {
        const fieldId = this.getAttribute('data-field-id');
        if (!fieldId) return;

        const newValue = this.textContent.trim();
        const numericValue = window.TEUI.parseNumeric(newValue, NaN); // Use global parser

        if (!isNaN(numericValue)) {
            // Format display using the global formatter - infer format or use default
            const formatType = (fieldId === 'j_115' || fieldId === 'l_118') ? 'number-2dp' : 'number-2dp'; // Adjust format as needed
            this.textContent = window.TEUI.formatNumber(numericValue, formatType);
            
            // Update StateManager with the raw numeric value (as string for precision)
            if (window.TEUI.StateManager) {
                window.TEUI.StateManager.setValue(fieldId, numericValue.toString(), 'user-modified');
            }
            // Trigger calculateAll explicitly AFTER state is set if blur handler doesn't rely on listeners
            // Check if a listener for this fieldId already triggers calculateAll via StateManager
            // If not, uncomment the line below. For f_113, a listener exists.
            // if (fieldId !== 'f_113') { calculateAll(); } 
        } else {
            // Revert to previous valid value if input is invalid
            const previousValue = window.TEUI.StateManager?.getValue(fieldId) || '0'; // Fallback to 0 or previous state
            const prevNumericValue = window.TEUI.parseNumeric(previousValue, 0);
            // Determine format for previous value
            const formatType = (fieldId === 'j_115' || fieldId === 'l_118') ? 'number-2dp' : 'number-2dp';
            this.textContent = window.TEUI.formatNumber(prevNumericValue, formatType);
            console.warn(`Invalid input for ${fieldId}: "${newValue}". Reverted to ${this.textContent}.`);
        }
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
        const hspf = window.TEUI.parseNumeric(getFieldValue('f_113')) || 0;
        const systemType = getFieldValue('d_113');
        let copheat = 1;
        if (systemType === 'Heatpump' && hspf > 0) { copheat = hspf / 3.412; }
        let copcool = Math.max(1, copheat - 1);
        setCalculatedValue('h_113', copheat, 'number-2dp'); 
        setCalculatedValue('j_113', copcool, 'number-1dp'); 
        const ceer = 3.412 * copcool;
        setCalculatedValue('j_114', ceer, 'number-1dp'); 
        calculateHeatingSystem();
    }
    
    /**
     * Calculate heating system values based on system type and COP
     */
    function calculateHeatingSystem() {
        const systemType = getFieldValue('d_113');
        const tedTarget = window.TEUI.parseNumeric(getFieldValue('d_127')) || 0; 
        const copheat_h113 = window.TEUI.parseNumeric(getFieldValue('h_113')) || 1;
        let heatingDemand_d114 = 0;
        let heatingSink_l113 = 0;
        let isHeatpump = (systemType === 'Heatpump');
        
        // --- Apply dynamic styling/values --- 
        setFieldDisabled('f_113', !isHeatpump); // Disable HSPF slider if not Heatpump
        setFieldDisabled('h_113', !isHeatpump); // Disable COPheat display if not Heatpump
        setFieldDisabled('j_113', !isHeatpump); // Disable COPcool display if not Heatpump
        setFieldDisabled('l_113', !isHeatpump); // Disable HP Sink display if not Heatpump
        // Style labels too? (e.g., f_113 label is in cell e, h_113 label in g, j_113 label in i, l_113 label in k)
        // Example: document.querySelector('[data-id="M.1.0"] .col-e').classList.toggle('ghost-text', !isHeatpump);
        
        if (isHeatpump) {
            const hspf = window.TEUI.parseNumeric(getFieldValue('f_113')) || 3.5; // Use current/default HSPF
            const calculated_copheat = (hspf > 0) ? hspf / 3.412 : 1;
            if (calculated_copheat > 0) {
                 heatingDemand_d114 = tedTarget / calculated_copheat;
                 heatingSink_l113 = heatingDemand_d114 * (calculated_copheat - 1);
            }
            // Ensure COP values recalculate if HSPF was used - REMOVED CALL, handled by listener
            // calculateCOPValues(); // Recalculate COPs based on potentially enabled slider
        } else {
            // Not a Heatpump - Use TEDI directly, sink is 0, force COPs to 1/0
            heatingDemand_d114 = tedTarget;
            heatingSink_l113 = 0;
            // Force COP values for non-heatpump systems
            setCalculatedValue('h_113', 1.0, 'number-2dp'); 
            setCalculatedValue('j_113', 0.0, 'number-1dp'); 
            setCalculatedValue('j_114', 0.0, 'number-1dp'); // CEER is also 0
            // Optionally reset HSPF slider/value to min when disabled?
            // const slider = document.querySelector('[data-field-id="f_113"] input[type="range"]');
            // if (slider) slider.value = 3.5;
            // setCalculatedValue('f_113', 3.5, 'number-1dp'); // Update display too
        }
        
        setCalculatedValue('d_114', heatingDemand_d114, 'number-2dp-comma'); 
        setCalculatedValue('l_113', heatingSink_l113, 'number-2dp-comma');

        calculateHeatingFuelImpact();
        calculateCoolingSystem();
    }
    
    /**
     * Calculate heating fuel impact for gas and oil systems
     */
    function calculateHeatingFuelImpact() {
        const systemType = getFieldValue('d_113');
        const tedTarget = window.TEUI.parseNumeric(getFieldValue('d_127')) || 0; 
        const afue = window.TEUI.parseNumeric(getFieldValue('j_115')) || 1; 
        let fuelImpact = 0, oilLitres = 0, gasM3 = 0, exhaust = 0;
        if (systemType === 'Gas' && afue > 0) {
            fuelImpact = tedTarget / afue;
            gasM3 = fuelImpact / 10.36; // kWh to m3 approx
            exhaust = fuelImpact - tedTarget; 
        } else if (systemType === 'Oil' && afue > 0) {
            fuelImpact = tedTarget / afue;
            oilLitres = fuelImpact / 10.2; // kWh to Litres approx
            exhaust = fuelImpact - tedTarget; 
        }
        setCalculatedValue('d_115', fuelImpact, 'number-2dp-comma');
        setCalculatedValue('f_115', oilLitres, 'number-2dp-comma');
        setCalculatedValue('h_115', gasM3, 'number-2dp-comma');
        setCalculatedValue('l_115', exhaust, 'number-2dp-comma');
        const m115_percent = afue > 0 ? 1 / afue : 0;
        setCalculatedValue('m_115', m115_percent, 'percent-0dp');
    }
    
    /**
     * Calculate cooling system values
     */
    function calculateCoolingSystem() {
        const systemType = getFieldValue('d_113');
        const coolingEnabled = getFieldValue('d_116');
        const coolingLoad = window.TEUI.parseNumeric(getFieldValue('l_128')) || 0;
        const copcool_hp = window.TEUI.parseNumeric(getFieldValue('j_113')) || 1;
        const dedicatedCopcool = window.TEUI.parseNumeric(getFieldValue('j_116')) || 1;
        let coolingElectLoad_d117=0, coolingSink_l114=0, coolingSink_l116=0;
        if (coolingEnabled === 'Cooling') {
            let activeCOP = (systemType === 'Heatpump' && copcool_hp > 0) ? copcool_hp : (dedicatedCopcool > 0 ? dedicatedCopcool : 1);
            if (activeCOP > 0) { coolingElectLoad_d117 = coolingLoad / activeCOP; }
            if (systemType === 'Heatpump' && copcool_hp > 0) {
                coolingSink_l114 = (coolingElectLoad_d117 * copcool_hp) - coolingElectLoad_d117;
            } else if (dedicatedCopcool > 0) { 
                coolingSink_l116 = (coolingElectLoad_d117 * dedicatedCopcool) - coolingElectLoad_d117;
        }
        }
        setCalculatedValue('d_117', coolingElectLoad_d117, 'number-2dp-comma');
        setCalculatedValue('l_114', coolingSink_l114, 'number-2dp-comma');
        setCalculatedValue('l_116', coolingSink_l116, 'number-2dp-comma');
        const m116_percent = dedicatedCopcool > 0 ? 1 / dedicatedCopcool : 0;
        setCalculatedValue('m_116', m116_percent, 'percent-0dp');
        const area = window.TEUI.parseNumeric(getFieldValue('h_15')) || 1; 
        const intensity = area > 0 ? coolingElectLoad_d117 / area : 0;
        setCalculatedValue('f_117', intensity, 'number-2dp'); 
        const activeCOPForM117 = (coolingEnabled==='No Cooling')?0:(systemType==='Heatpump'?copcool_hp:dedicatedCopcool);
        const m117_percent = activeCOPForM117 > 0 ? intensity / activeCOPForM117 : 0;
        setCalculatedValue('m_117', m117_percent, 'percent-0dp');
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
        const ventMethod = getFieldValue('g_118');
        const occupants = window.TEUI.parseNumeric(getFieldValue('d_63')) || 0;
        const perPersonRate = window.TEUI.parseNumeric(getFieldValue('d_119')) || 0;
        const volume = window.TEUI.parseNumeric(getFieldValue('d_105')) || 0;
        const ach = window.TEUI.parseNumeric(getFieldValue('l_118')) || 0;
        const occupiedHours = window.TEUI.parseNumeric(getFieldValue('i_63')) || 0;
        const totalHours = window.TEUI.parseNumeric(getFieldValue('j_63')) || 8760;
        let ventRate = 0;
        if (ventMethod === 'Occupant Constant') { ventRate = occupants * perPersonRate; }
        else if (ventMethod === 'Occupant by Schedule') { ventRate = totalHours > 0 ? (occupants * perPersonRate * (occupiedHours / totalHours)) : 0; }
        else if (ventMethod === 'Volume by Schedule') { ventRate = totalHours > 0 && volume > 0 ? ((ach * volume / 3.6) * (occupiedHours / totalHours)) : 0; }
        else if (ventMethod === 'Volume Constant') { ventRate = volume > 0 ? (ach * volume / 3.6) : 0; }
        else { ventRate = volume > 0 ? (ach * volume / 3.6) : 0; } // Default
        setCalculatedValue('d_120', ventRate, 'number-2dp-comma');
        setCalculatedValue('f_120', ventRate * 2.11888, 'number-2dp-comma');
        setCalculatedValue('h_120', ventRate * 3.6, 'number-2dp-comma');
        const sre_d118 = window.TEUI.parseNumeric(getFieldValue('d_118')) || 0;
        setCalculatedValue('m_118', sre_d118 / 100, 'percent-0dp'); 
    }
    
    /**
     * Calculate ventilation energy exchange during heating season
     */
    function calculateVentilationEnergy() {
        const ventRate = window.TEUI.parseNumeric(getFieldValue('d_120')) || 0;
        const hdd = window.TEUI.parseNumeric(getFieldValue('d_20')) || 0;
        const efficiency = (window.TEUI.parseNumeric(getFieldValue('d_118')) || 0) / 100;
        const heatingVentEnergy = 1.21 * ventRate * hdd * 24 / 1000;
        setCalculatedValue('d_121', heatingVentEnergy, 'number-2dp-comma');
        const recoveredEnergy = heatingVentEnergy * efficiency;
        setCalculatedValue('i_121', recoveredEnergy, 'number-2dp-comma');
        const netHeatLoss = heatingVentEnergy - recoveredEnergy;
        setCalculatedValue('m_121', netHeatLoss, 'number-2dp-comma');
    }
    
    /**
     * Calculate ventilation energy exchange during cooling season
     */
    function calculateCoolingVentilation() {
        const ventRate = window.TEUI.parseNumeric(getFieldValue('d_120')) || 0;
        const cdd = window.TEUI.parseNumeric(getFieldValue('d_21')) || 0;
        const summerBoostStr = getFieldValue('l_119') || "None";
        const efficiency = (window.TEUI.parseNumeric(getFieldValue('d_118')) || 0) / 100;
        let latentLoadFactor = 1.2;
        if (window.TEUI?.CoolingCalculations?.getLatentLoadFactor) { latentLoadFactor = window.TEUI.CoolingCalculations.getLatentLoadFactor() || 1.2; }
        else if (window.TEUI?.StateManager?.getValue) { latentLoadFactor = window.TEUI.parseNumeric(window.TEUI.StateManager.getValue('cooling_latentLoadFactor')) || 1.2; }
        setCalculatedValue('i_122', latentLoadFactor, 'percent-0dp'); 
        let boostFactor = 1;
        if (summerBoostStr !== 'None') { boostFactor = parseFloat(summerBoostStr) || 1; }
        const boostedVentRate = ventRate * boostFactor;
        const incomingCoolingEnergy = 1.21 * boostedVentRate * cdd * 24 / 1000 * latentLoadFactor;
        setCalculatedValue('d_122', incomingCoolingEnergy, 'number-2dp-comma');
        const outgoingCoolingEnergy = incomingCoolingEnergy * efficiency;
        setCalculatedValue('d_123', outgoingCoolingEnergy, 'number-2dp-comma');
        // Placeholder for m_119 - need actual formula
        const perPersonRate_d119 = window.TEUI.parseNumeric(getFieldValue('d_119')) || 0;
        setCalculatedValue('m_119', perPersonRate_d119, 'number-2dp'); // Assuming raw value display for now
    }
    
    /**
     * Calculate free cooling capacity and related metrics
     */
    function calculateFreeCooling() {
        const coolingLoadTotal = window.TEUI.parseNumeric(getFieldValue('d_128')) || 0;
        let freeCoolingLimit = 0;
        let daysActiveCooling = 120;
        if (window.TEUI?.CoolingCalculations?.getFreeCoolingLimit) {
            freeCoolingLimit = window.TEUI.CoolingCalculations.getFreeCoolingLimit() || 0;
            window.TEUI.CoolingCalculations.updateCoolingLoad(coolingLoadTotal);
            daysActiveCooling = window.TEUI.CoolingCalculations.getDaysActiveCooling() || 120;
        } else if (window.TEUI.StateManager?.getValue) {
            freeCoolingLimit = window.TEUI.parseNumeric(window.TEUI.StateManager.getValue('cooling_freeCoolingLimit')) || 0;
            daysActiveCooling = window.TEUI.parseNumeric(window.TEUI.StateManager.getValue('cooling_daysActiveCooling')) || 120;
            } else {
            const ventRate = window.TEUI.parseNumeric(getFieldValue('d_120')) || 0;
            const cdd = window.TEUI.parseNumeric(getFieldValue('d_21')) || 0;
            freeCoolingLimit = 1.21 * ventRate * 4 * (120*24) / 1000; 
        }
        setCalculatedValue('h_124', freeCoolingLimit, 'number-2dp-comma'); 
        const percentFreeCooling = coolingLoadTotal > 0 ? (freeCoolingLimit / coolingLoadTotal) : 0;
        setCalculatedValue('d_124', percentFreeCooling, 'percent-0dp');
        setCalculatedValue('m_124', daysActiveCooling, 'integer');
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
     * Safely retrieves the field value from StateManager or the DOM element.
     * Prefers StateManager for reliability.
     * @param {string} fieldId - The ID of the field to retrieve.
     * @returns {string|number|null} The value of the field, or null if not found.
     */
    function getFieldValue(fieldId) {
        if (window.TEUI?.StateManager) {
            const value = window.TEUI.StateManager.getValue(fieldId);
            if (value !== null && value !== undefined) {
                return value;
            }
        }
        // Fallback to checking the DOM if StateManager doesn't have the value
        const element = document.querySelector(`[data-field-id="${fieldId}"]`);
        if (element) {
            return element.value || element.textContent;
            }
        return null;
    }
    
    /**
     * Sets a calculated value in the StateManager and updates the corresponding DOM element.
     * Ensures the raw numeric value is stored in StateManager and the formatted
     * value is displayed in the DOM, according to the global formatting function.
     * @param {string} fieldId - The ID of the field to update.
     * @param {number} rawValue - The raw calculated numeric value.
     * @param {string} [formatType='number-2dp'] - The format type string (e.g., 'number-2dp', 'currency', 'percent-0dp', 'integer') passed to window.TEUI.formatNumber.
     */
    function setCalculatedValue(fieldId, rawValue, formatType = 'number-2dp') {
        // Handle non-numeric or invalid rawValues gracefully
        if (rawValue === null || rawValue === undefined || isNaN(Number(rawValue))) {
            const displayValue = "N/A"; // Or '0.00' or '--' depending on desired display
            window.TEUI.StateManager?.setValue(fieldId, displayValue, 'calculated');
            const elementNA = document.querySelector(`[data-field-id="${fieldId}"]`);
            if (elementNA) {
                elementNA.textContent = displayValue;
                elementNA.classList.remove('negative-value'); // Ensure no negative styling
            }
            return; 
        }

        const numericValue = Number(rawValue);
        const formattedValue = window.TEUI.formatNumber(numericValue, formatType);

        // Store raw value as string in StateManager for precision and consistency
        window.TEUI.StateManager?.setValue(fieldId, numericValue.toString(), 'calculated');
        
        // Update DOM with formatted value
        const element = document.querySelector(`[data-field-id="${fieldId}"]`);
        if (element) {
            element.textContent = formattedValue;
            element.classList.toggle('negative-value', numericValue < 0);
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

// Helper function to apply/remove disabled styling
function setFieldDisabled(fieldId, isDisabled) {
    const element = document.querySelector(`[data-field-id="${fieldId}"]`);
    // Also target associated labels if needed by adjusting selector or passing label ID
    if (element) {
        // Find the parent TD cell to apply styling more broadly if needed
        const cell = element.closest('td');
        if (cell) {
            cell.classList.toggle('ghost-text', isDisabled);
            // Maybe disable slider interaction directly?
            const slider = cell.querySelector('input[type="range"]');
            if (slider) slider.disabled = isDisabled;
        } else {
            element.classList.toggle('ghost-text', isDisabled);
        }
    } 
    // Could add logic here to find and style the label cell (e.g., the cell with M.1.1 HSPF)
}