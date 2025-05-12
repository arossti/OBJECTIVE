/**
 * 4011-SectionXX.js
 * [SECTION NAME] (Section XX) module for TEUI Calculator 4.011
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
window.TEUI.sectXX = window.TEUI.sectXX || {};
window.TEUI.sectXX.initialized = false;
window.TEUI.sectXX.userInteracted = false;

// Section XX: [SECTION NAME] Module
window.TEUI.SectionModules.sectXX = (function() {
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
        // ALWAYS PUT UNIT SUBHEADER FIRST - this ensures it appears at the top of the section
        "header": {
            id: "SECTXX-ID",
            rowId: "SECTXX-ID",
            label: "Units Header",
            cells: {
                c: { content: "C", classes: ["section-subheader"] },
                d: { content: "D", classes: ["section-subheader"] },
                e: { content: "E", classes: ["section-subheader"] },
                f: { content: "F", classes: ["section-subheader"] },
                g: { content: "G", classes: ["section-subheader"] },
                h: { content: "H", classes: ["section-subheader"] },
                i: { content: "I", classes: ["section-subheader"] },
                j: { content: "J", classes: ["section-subheader"] },
                k: { content: "K", classes: ["section-subheader"] },
                l: { content: "L", classes: ["section-subheader"] },
                m: { content: "M", classes: ["section-subheader"] },
                n: { content: "N", classes: ["section-subheader"] }
            }
        },
        
        // ROW XX: First content row
        "xx": {
            id: "X.1", // Row ID from Excel (e.g., "T.1", "B.1", etc.)
            rowId: "X.1", // Should match the id for consistency
            label: "Row Label", // Label that appears in column C
            cells: {
                // Define each cell by its column letter (lowercase)
                // USE ALL LOWERCASE COLUMN LETTERS
                c: { label: "Row Label Text" }, // PREFERRED: Direct label approach for column C
                d: { 
                    // Example of a dropdown field
                    fieldId: "d_xx", // Replace XX with row number from Excel
                    type: "dropdown", 
                    dropdownId: "dd_d_xx", 
                    value: "Default Value",
                    section: "sectionName", // Replace with correct section name
                    options: [
                        { value: "option1", name: "Option 1" },
                        { value: "option2", name: "Option 2" }
                    ]
                    // For dynamic options based on another field:
                    /*
                    dependencies: ["other_field_id"],
                    getOptions: function(parentValue) {
                        // Logic to return options based on parentValue
                        return [...];
                    }
                    */
                },
                e: { 
                    // Example of a calculated field
                    fieldId: "e_xx", 
                    type: "calculated", 
                    value: "0",
                    section: "sectionName",
                    dependencies: ["d_xx"] // List fields this calculation depends on
                },
                f: { content: "F.1", classes: ["label-prefix"] }, // Label prefix in column F
                g: { content: "Label Text", classes: ["label-main"] }, // Main label in column G
                h: { 
                    // Example of a slider field
                    fieldId: "h_xx", 
                    type: "percentage", // or "year_slider" or "coefficient"
                    value: "50", 
                    min: 0, 
                    max: 100, 
                    step: 5,
                    section: "sectionName"
                },
                // Continue for all columns...
                i: {}, // Empty cell example
                j: {}, // Leave empty objects for alignment even if cells are empty
                k: {},
                l: {},
                m: {},
                n: {}
            }
        },
        
        // ROW XX+1: Second content row
        "xx1": {
            id: "X.2",
            rowId: "X.2",
            label: "Another Row", 
            cells: {
                c: { label: "Another Row Label" }, // PREFERRED APPROACH for column C
                d: { 
                    // Example of an editable text field
                    fieldId: "d_xx1", 
                    type: "editable", 
                    value: "User input",
                    section: "sectionName"
                },
                // Define remaining cells...
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
        }
        
        // Add more rows as needed following the same pattern
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
                        section: cell.section || "sectionName" // Replace with actual section name
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
                    rowDef.cells.push({ label: row.label });
                } else {
                    // Otherwise add empty cell
                    rowDef.cells.push({});
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
        // Add event handlers for user input fields
        
        // Example: Dropdown change handlers
        /*
        document.querySelectorAll('[data-dropdown-id^="dd_"]').forEach(dropdown => {
            dropdown.addEventListener('change', function(e) {
                const fieldId = this.getAttribute('data-field-id');
                if (fieldId === "field_id_1") {
                    handleSpecificDropdownChange(e.target.value);
                }
            });
        });
        */
        
        // Example: Slider change handlers
        /*
        document.querySelectorAll('input[type="range"]').forEach(slider => {
            slider.addEventListener('input', function(e) {
                const fieldId = this.getAttribute('data-field-id');
                if (fieldId === "field_id_2") {
                    updateRelatedFields(e.target.value);
                }
            });
        });
        */
    }
    
    /**
     * Called when the section is rendered
     * This is a good place to initialize values and run initial calculations
     */
    function onSectionRendered() {
        // Initialize event handlers
        initializeEventHandlers();
        
        // Run initial calculations
        calculateAll();
    }
    
    /**
     * Calculate all values for this section
     */
    function calculateAll() {
        // Add calculation logic here
        // Example:
        /*
        calculateTemperatures();
        calculateEnergyCosts();
        updateSummaryValues();
        */
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
        
        // Section-specific utility functions - OPTIONAL
        calculateAll: calculateAll
        
        // Add other public methods as needed
    };
})();