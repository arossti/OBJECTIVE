/**
 * 4011-StateManager.js
 * 
 * State management module for TEUI Calculator 4.011
 * Handles the state of all calculator values with support for dependencies and efficient recalculation
 * 
 * Refactored to use DOM-based field IDs (e.g. 'd-12' for cell D12).
 */

// Define the global namespace if it doesn't exist
window.TEUI = window.TEUI || {};

// State Manager Module
TEUI.StateManager = (function() {
    
    /**
     * Global utility to format numbers based on specified types.
     * Handles various decimal places, percentages, commas, specific types like U-Value/RSI, and raw output.
     * @param {string|number|null|undefined} value - The value to format.
     * @param {string} [formatType='number-2dp'] - The format rule (e.g., 'number-2dp', 'number-3dp', 'number-2dp-comma', 'percent-0dp', 'percent-1dp', 'percent-2dp', 'integer', 'integer-nocomma', 'currency-2dp', 'currency-3dp', 'u-value', 'rsi', 'raw').
     * @returns {string} The formatted string.
     */
    window.TEUI.formatNumber = function(value, formatType = 'number-2dp') {
        // Handle N/A or null/undefined input first
        if (value === null || value === undefined || String(value).trim().toUpperCase() === 'N/A') {
            return "N/A";
        }
        // Handle raw format type
        if (formatType === 'raw') {
            return String(value);
        }

        // Use global parseNumeric to get a clean number or NaN
        const numValue = window.TEUI.parseNumeric(value, NaN); 

        // Handle non-numeric values after parsing
        if (isNaN(numValue)) {
             // Return original string if it wasn't parseable but wasn't explicitly N/A
             if (typeof value === 'string' && value.trim() !== '') return value;
             // Otherwise return a default based on expected format
             if (formatType.startsWith('percent')) return '0%';
             if (formatType.startsWith('currency')) return '$0.00'; // Basic currency default
             return '0.00'; // Default numeric format
        }

        try {
            // Handle Aliases
            if (formatType === 'u-value') formatType = 'number-3dp';
            if (formatType === 'rsi') formatType = 'number-2dp';

            // Handle Integer types first
            if (formatType === 'integer') {
                return numValue.toLocaleString(undefined, { minimumFractionDigits: 0, maximumFractionDigits: 0, useGrouping: true }); // With commas
            }
            if (formatType === 'integer-nocomma') {
                return numValue.toLocaleString(undefined, { minimumFractionDigits: 0, maximumFractionDigits: 0, useGrouping: false }); // No commas
            }

            // Parsing complex format types
            const formatParts = formatType.split('-');
            let type = formatParts[0]; // 'number', 'percent', 'cad'
            const dpPart = formatParts[1] || ''; // e.g., '0dp', '2dp', '3dp', '4dp'
            const useCommas = formatParts.includes('comma');

            let decimals = 2; // Default decimal places
            if (dpPart) {
                const match = dpPart.match(/(\d+)d/);
                if (match) decimals = parseInt(match[1], 10);
            }

            // Percentage Formatting
            if (type === 'percent') {
                 return numValue.toLocaleString(undefined, { 
                     style: 'percent', 
                     minimumFractionDigits: decimals, 
                     maximumFractionDigits: decimals 
                 });
            }
            // CAD Currency Formatting (using toFixed)
            else if (type === 'cad') {
                 if (isNaN(decimals) || decimals < 0) decimals = 2; // Safety check
                 const fixedString = numValue.toFixed(decimals);
                 // Basic comma insertion - might need refinement for edge cases
                 let finalString = fixedString;
                 if (useCommas) {
                     const parts = fixedString.split('.');
                     parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",");
                     finalString = parts.join('.');
                 }
                 return '$' + finalString;
            }
            // Number Formatting (Default)
            else { 
                return numValue.toLocaleString(undefined, { 
                    minimumFractionDigits: decimals, 
                    maximumFractionDigits: decimals, 
                    useGrouping: useCommas 
                });
            }
        } catch (e) {
            console.error(`Error formatting value ${value} with format ${formatType}:`, e);
            return String(value); // Fallback to string representation on error
        }
    };
    
    /**
     * Global utility to safely parse numeric values from strings.
     * Handles commas and returns a default value if parsing fails.
     * Moved here from init.js to ensure availability before section modules load.
     * @param {string|number|null|undefined} value - The value to parse.
     * @param {number} [defaultValue=0] - The value to return if parsing fails.
     * @returns {number} The parsed number or the default value.
     */
    window.TEUI.parseNumeric = function(value, defaultValue = 0) {
        if (value === null || value === undefined) {
            return defaultValue;
        }
        let numericValue;
        if (typeof value === 'string') {
            // Remove commas, trim whitespace
            const cleanedValue = value.replace(/,/g, '').trim();
            if (cleanedValue === '' || cleanedValue.toUpperCase() === 'N/A') {
                return defaultValue;
            }
            numericValue = parseFloat(cleanedValue);
        } else if (typeof value === 'number') {
            numericValue = value;
        } else {
            numericValue = NaN; // Handle other types if needed
        }
        // Return defaultValue if parsing resulted in NaN
        return isNaN(numericValue) ? defaultValue : numericValue;
    };
    
    // Value state constants
    const VALUE_STATES = {
        DEFAULT: 'default',        // Original default value
        IMPORTED: 'imported',      // Value imported from saved data
        USER_MODIFIED: 'user-modified', // Value changed by user
        CALCULATED: 'calculated',  // Value calculated by the system
        DERIVED: 'derived'         // Value derived from another field
    };
    
    // Private properties
    let fields = new Map();           // Map of all field values
    let dependencies = new Map();     // Map of field dependencies
    let calculatedFields = new Set(); // Set of fields that are calculated
    let dirtyFields = new Set();      // Fields needing recalculation
    let listeners = new Map();        // Field change listeners
    
    /**
     * Initialize the state manager
     */
    function initialize() {
        // console.log('Initializing StateManager');
        clear();
        
        // Initialize with default values from FieldManager
        if (window.TEUI.fields) {
            initializeFromFieldManager();
        }
        
        registerTEUIFields();
        registerTEDITELIFields();
        registerVolumeMetricsFields();
        
        // Add listeners for TEUI source fields
        addListener('f_32', () => updateTEUICalculations('f_32'));
        addListener('j_32', () => updateTEUICalculations('j_32'));
        addListener('h_15', () => updateTEUICalculations('h_15'));
        
        // Initial calculation
        updateTEUICalculations('init');
    }
    
    /**
     * Initialize state with values from FieldManager
     */
    function initializeFromFieldManager() {
        const allFields = window.TEUI.fields;
        if (!allFields) return;
        
        Object.entries(allFields).forEach(([fieldId, field]) => {
            // Skip fields without default values
            if (field.defaultValue === undefined) return;
            
            // Set default value
            setValue(fieldId, field.defaultValue, VALUE_STATES.DEFAULT);
            
            // Register dependencies if any
            if (field.dependencies && Array.isArray(field.dependencies)) {
                field.dependencies.forEach(dependencyId => {
                    registerDependency(dependencyId, fieldId);
                });
            }
        });
        
        // console.log(`Initialized state with ${fields.size} fields and ${dependencies.size} dependencies`);
    }
    
    /**
     * Clear all state data
     */
    function clear() {
        fields.clear();
        dependencies.clear();
        calculatedFields.clear();
        dirtyFields.clear();
        listeners.clear();
    }
    
    /**
     * Get a field value
     * @param {string} fieldId - Field ID (DOM-based, e.g. 'd-12')
     * @returns {any} The field value or null if not found
     */
    function getValue(fieldId) {
        return fields.has(fieldId) ? fields.get(fieldId).value : null;
    }
    
    /**
     * Set a field value
     * @param {string} fieldId - Field ID (DOM-based, e.g. 'd-12')
     * @param {any} value - New value
     * @param {string} state - Value state (default, user-modified, calculated, etc.)
     * @returns {boolean} True if the value changed
     */
    function setValue(fieldId, value, state = VALUE_STATES.USER_MODIFIED) {
        // Get the current value
        const oldValue = getValue(fieldId);
        
        // If field doesn't exist, create it
        if (!fields.has(fieldId)) {
            fields.set(fieldId, {
                id: fieldId,
                value: value,
                state: state
            });
            
            // Notify listeners of the new field
            notifyListeners(fieldId, value, null, state);
            return true;
        }
        
        // Update the existing field
        const field = fields.get(fieldId);
        
        // Skip update if value hasn't changed
        if (field.value === value && field.state === state) {
            return false;
        }
        
        // Update the field
        field.value = value;
        field.state = state;
        
        // Mark dependent fields as dirty (if not already calculated state)
        if (state !== VALUE_STATES.CALCULATED && state !== VALUE_STATES.DERIVED) {
            markDependentsDirty(fieldId);
        }
        
        // Notify listeners of the change
        notifyListeners(fieldId, value, oldValue, state);
        
        return true;
    }
    
    /**
     * Register a dependency between fields
     * @param {string} sourceId - Source field ID (DOM-based, e.g. 'd-12')
     * @param {string} targetId - Target (dependent) field ID (DOM-based, e.g. 'cf-d-22')
     */
    function registerDependency(sourceId, targetId) {
        // Ensure source is in the dependency map
        if (!dependencies.has(sourceId)) {
            dependencies.set(sourceId, new Set());
        }
        
        // Add target to source's dependencies
        dependencies.get(sourceId).add(targetId);
        
        // Add target to calculated fields set
        calculatedFields.add(targetId);
        
        // console.log(`Registered dependency: ${sourceId} → ${targetId}`);
    }
    
    /**
     * Mark a field and its dependents as dirty
     * @param {string} fieldId - Field ID (DOM-based, e.g. 'd-12')
     * @param {Set} visited - Set of already visited fields (to prevent circular dependencies)
     */
    function markDependentsDirty(fieldId, visited = new Set()) {
        // Skip if already visited (prevent circular dependency infinite recursion)
        if (visited.has(fieldId)) {
            // console.warn(`Circular dependency detected with field ${fieldId}`);
            return;
        }
        
        // Add to visited set
        visited.add(fieldId);
        
        // Skip if no dependencies
        if (!dependencies.has(fieldId)) {
            return;
        }
        
        // Get dependent fields
        const dependents = dependencies.get(fieldId);
        
        // Mark each dependent as dirty and recurse
        dependents.forEach(dependentId => {
            dirtyFields.add(dependentId);
            markDependentsDirty(dependentId, visited);
        });
    }
    
    /**
     * Get all dirty fields
     * @returns {Array} Array of dirty field IDs
     */
    function getDirtyFields() {
        return [...dirtyFields];
    }
    
    /**
     * Clear dirty status for specified fields
     * @param {Array} fieldIds - Array of field IDs to clear, or empty for all
     */
    function clearDirtyStatus(fieldIds = []) {
        if (fieldIds.length === 0) {
            dirtyFields.clear();
        } else {
            fieldIds.forEach(id => dirtyFields.delete(id));
        }
    }
    
    /**
     * Add a listener for a field
     * @param {string} fieldId - Field ID (DOM-based, e.g. 'd-12')
     * @param {Function} callback - Callback function(newValue, oldValue, fieldId, state)
     */
    function addListener(fieldId, callback) {
        if (!listeners.has(fieldId)) {
            listeners.set(fieldId, new Set());
        }
        
        listeners.get(fieldId).add(callback);
    }
    
    /**
     * Remove a listener from a field
     * @param {string} fieldId - Field ID (DOM-based, e.g. 'd-12')
     * @param {Function} callback - Callback function to remove
     */
    function removeListener(fieldId, callback) {
        if (!listeners.has(fieldId)) {
            return;
        }
        
        listeners.get(fieldId).delete(callback);
    }
    
    /**
     * Notify all listeners for a field
     * @param {string} fieldId - Field ID (DOM-based, e.g. 'd-12')
     * @param {any} newValue - New value
     * @param {any} oldValue - Old value
     * @param {string} state - Value state
     */
    function notifyListeners(fieldId, newValue, oldValue, state) {
        if (!listeners.has(fieldId)) {
            return;
        }
        
        // Call each listener
        listeners.get(fieldId).forEach(callback => {
            try {
                callback(newValue, oldValue, fieldId, state);
            } catch (error) {
                console.error(`Error in listener for ${fieldId}:`, error);
            }
        });
    }
    
    /**
     * Save the current state to localStorage
     */
    function saveState() {
        // Create a serializable state object
        const state = {};
        
        // Only save user-modified fields to keep the state small
        fields.forEach((field, fieldId) => {
            if (field.state === VALUE_STATES.USER_MODIFIED || field.state === VALUE_STATES.IMPORTED) {
                state[fieldId] = {
                    value: field.value,
                    state: field.state
                };
            }
        });
        
        // Save to localStorage
        try {
            localStorage.setItem('TEUI_4011_STATE', JSON.stringify(state));
            // console.log('State saved to localStorage');
        } catch (error) {
            console.error('Error saving state to localStorage:', error);
        }
    }
    
    /**
     * Load state from localStorage
     */
    function loadState() {
        try {
            // Get state from localStorage
            const stateJson = localStorage.getItem('TEUI_4011_STATE');
            
            if (!stateJson) {
                // console.log('No saved state found in localStorage');
                return;
            }
            
            // Parse state
            const state = JSON.parse(stateJson);
            
            // Load each field
            Object.entries(state).forEach(([fieldId, field]) => {
                setValue(fieldId, field.value, field.state);
            });
            
            // console.log('State loaded from localStorage');
        } catch (error) {
            console.error('Error loading state from localStorage:', error);
        }
    }
    
    /**
     * Import state from a data object
     * @param {Object} data - Data object with field values
     */
    function importState(data) {
        // Import each field
        Object.entries(data).forEach(([fieldId, value]) => {
            setValue(fieldId, value, VALUE_STATES.IMPORTED);
        });
        
        // console.log('State imported from data object');
    }
    
    /**
     * Export the current state
     * @returns {Object} State object with field values
     */
    function exportState() {
        const state = {};
        
        // Export all fields
        fields.forEach((field, fieldId) => {
            state[fieldId] = field.value;
        });
        
        return state;
    }
    
    /**
     * Get calculation order for dirty fields
     * @returns {Array} Field IDs in calculation order
     */
    function getCalculationOrder() {
        const visited = new Set();
        const temp = new Set();
        const order = [];
        
        // Helper function for depth-first topological sort
        const visit = (fieldId) => {
            if (temp.has(fieldId)) {
                // console.warn(`Circular dependency detected with field ${fieldId}`);
                return;
            }
            
            if (!visited.has(fieldId)) {
                temp.add(fieldId);
                
                // Visit all dependents
                if (dependencies.has(fieldId)) {
                    dependencies.get(fieldId).forEach(depId => visit(depId));
                }
                
                temp.delete(fieldId);
                visited.add(fieldId);
                order.push(fieldId);
            }
        };
        
        // Start with dirty fields
        getDirtyFields().forEach(fieldId => visit(fieldId));
        
        // Reverse to get correct calculation order
        return order.reverse();
    }
    
    /**
     * Update the UI with a field value
     * @param {string} fieldId - Field ID (DOM-based, e.g. 'd-12')
     * @param {any} value - Value to display
     */
    function updateUI(fieldId, value) {
        // Find the element by data-field-id attribute
        const element = document.querySelector(`[data-field-id="${fieldId}"]`);
        if (!element) return;
        
        // Different update based on field type
        if (element.tagName === 'SELECT') {
            element.value = value;
        } else if (element.tagName === 'INPUT') {
            element.value = value;
        } else {
            // For non-input elements, just set the text content
            element.textContent = value;
        }
    }
    
    /**
     * Get all keys currently in the state
     * @returns {Array} Array of all field IDs in the state
     */
    function getAllKeys() {
        return Array.from(fields.keys());
    }
    
    /**
     * Get state information for debugging
     * @param {string} fieldId - Optional field ID to get info for
     * @returns {Object} Debug information
     */
    function getDebugInfo(fieldId = null) {
        if (fieldId) {
            return fields.has(fieldId) ? fields.get(fieldId) : null;
        }
        
        return {
            fieldCount: fields.size,
            dependencyCount: dependencies.size,
            calculatedCount: calculatedFields.size,
            dirtyCount: dirtyFields.size,
            listenerCount: listeners.size
        };
    }
    
    /**
     * Register critical energy fields used by TEUI calculations
     * This ensures that Section01 TEUI values can be calculated from Section04 data
     * 
     * NOTE ON ORDERING: Fields are organized by dependency relationships, not row numbers.
     * Input fields must be registered before dependent calculated fields to ensure proper
     * initialization and dependency chain establishment.
     */
    function registerTEUIFields() {
        // console.log('Registering TEUI-related fields');
        
        // =========================================================================
        // 1. REGISTER INPUT FIELDS FIRST (always register dependencies before dependents)
        // =========================================================================
        
        // Section02 Row 15 - Conditioned Area (input from Building Info section)
        if (!fields.has('h_15')) {
            setValue('h_15', '1427.20', VALUE_STATES.DEFAULT);
        }
        
        // Section04 Row 32 - Energy values (calculated in Energy section)
        if (!fields.has('f_32')) {
            setValue('f_32', '132938.00', VALUE_STATES.DEFAULT);
        }
        
        if (!fields.has('j_32')) {
            setValue('j_32', '132765.65', VALUE_STATES.DEFAULT);
        }
        
        // =========================================================================
        // 2. REGISTER OUTPUT/CALCULATED FIELDS SECOND
        // =========================================================================
        
        // Section01 Row 10 - TEUI values (calculated from the above inputs)
        if (!fields.has('h_10')) {
            setValue('h_10', '93.0', VALUE_STATES.CALCULATED);
        }
        
        if (!fields.has('k_10')) {
            setValue('k_10', '93.1', VALUE_STATES.CALCULATED);
        }
        
        // =========================================================================
        // 3. ESTABLISH FORMAL DEPENDENCY RELATIONSHIPS (for calculation chain)
        // =========================================================================
        
        // The order here explicitly defines the calculation flow for visualization
        registerDependency('h_15', 'h_10'); // Area affects target TEUI
        registerDependency('j_32', 'h_10'); // Target energy affects target TEUI
        
        registerDependency('h_15', 'k_10'); // Area affects actual TEUI
        registerDependency('f_32', 'k_10'); // Actual energy affects actual TEUI
        
        // console.log('TEUI fields registered with dependency relationships established');
    }
    
    /**
     * Register TEDI/TELI and TEUI Summary fields for integration
     * This ensures that Section14 and Section15 values are properly initialized
     */
    function registerTEDITELIFields() {
        // console.log('Registering TEDI/TELI and TEUI Summary related fields');
        
        // =========================================================================
        // 1. REGISTER KEY TEDI & TELI FIELDS (SECTION 14)
        // =========================================================================
        
        // Critical TEDI value that's used by Section 15
        if (!fields.has('h_126')) {
            setValue('h_126', '83.50', VALUE_STATES.CALCULATED);
        }
        
        // Critical TELI value also used by Section 15
        if (!fields.has('h_130')) {
            setValue('h_130', '81.33', VALUE_STATES.CALCULATED);
        }
        
        // =========================================================================
        // 2. REGISTER TEUI SUMMARY FIELDS (SECTION 15)
        // =========================================================================
        
        // Primary TEUI value in Section 15
        if (!fields.has('h_136')) {
            setValue('h_136', '93.0', VALUE_STATES.CALCULATED);
        }
        
        // Reduction percentage in Section 15
        if (!fields.has('d_144')) {
            setValue('d_144', '15.2', VALUE_STATES.CALCULATED);
        }
        
        // Cost metrics in Section 15
        if (!fields.has('d_141')) {
            setValue('d_141', '12.35', VALUE_STATES.CALCULATED);
        }
        
        if (!fields.has('h_141')) {
            setValue('h_141', '10.47', VALUE_STATES.CALCULATED);
        }
        
        // =========================================================================
        // 3. ESTABLISH CROSS-SECTION DEPENDENCY RELATIONSHIPS
        // =========================================================================
        
        // Section 15 key dependencies (additional ones registered in SectionIntegrator)
        registerDependency('h_126', 'h_136');  // TEDI affects primary TEUI value
        registerDependency('h_10', 'h_136');   // TEUI (Section 1) affects TEUI Summary
        registerDependency('k_10', 'd_144');   // TEUI actual affects reduction percentage
        
        // TEUI Summary influences Section 1 (bidirectional relationship)
        registerDependency('h_136', 'k_10');   // Summary TEUI affects main TEUI values
        
        // Building area influences all intensity values
        registerDependency('h_15', 'd_144');   // Area affects reduction calculations
        registerDependency('h_15', 'd_141');   // Area affects cost metrics
        registerDependency('h_15', 'h_141');   // Area affects cost metrics
        
        // console.log('TEDI/TELI and TEUI Summary fields registered with dependencies established');
    }
    
    /**
     * Register Volume and Surface Metrics fields (Section 12)
     * This ensures proper integration with other sections
     */
    function registerVolumeMetricsFields() {
        // console.log('Registering Volume and Surface Metrics fields');
        
        // =========================================================================
        // 1. REGISTER KEY SURFACE AREA FIELDS
        // =========================================================================
        
        // Total area exposed to air
        if (!fields.has('d_101')) {
            setValue('d_101', '2476.62', VALUE_STATES.DEFAULT);
        }
        
        // Total area exposed to ground
        if (!fields.has('d_102')) {
            setValue('d_102', '1100.42', VALUE_STATES.DEFAULT);
        }
        
        // =========================================================================
        // 2. REGISTER VOLUME AND U-VALUE FIELDS
        // =========================================================================
        
        // Total conditioned volume
        if (!fields.has('d_105')) {
            setValue('d_105', '8000.00', VALUE_STATES.DEFAULT);
        }
        
        // Combined U-value
        if (!fields.has('d_104')) {
            setValue('d_104', '0.292', VALUE_STATES.CALCULATED);
        }
        
        // Window to Wall Ratio
        if (!fields.has('d_107')) {
            setValue('d_107', '32.59%', VALUE_STATES.CALCULATED);
        }
        
        // =========================================================================
        // 3. REGISTER HEAT LOSS/GAIN FIELDS
        // =========================================================================
        
        // Total heat loss through envelope
        if (!fields.has('i_104')) {
            setValue('i_104', '116070.33', VALUE_STATES.CALCULATED);
        }
        
        // Air leakage heat loss
        if (!fields.has('i_103')) {
            setValue('i_103', '23178.39', VALUE_STATES.CALCULATED);
        }
        
        // =========================================================================
        // 4. ESTABLISH DEPENDENCY RELATIONSHIPS
        // =========================================================================
        
        // Areas affect heat loss calculations
        registerDependency('d_101', 'i_101'); // Area affects heat loss through air
        registerDependency('d_102', 'i_102'); // Area affects heat loss through ground
        
        // U-values affect heat loss calculations
        registerDependency('g_101', 'i_101'); // U-value affects heat loss through air
        registerDependency('g_102', 'i_102'); // U-value affects heat loss through ground
        
        // Air leakage affects heat loss
        registerDependency('g_109', 'i_103'); // ACH50 affects air leakage heat loss
        
        // Building volume affects metrics
        registerDependency('d_105', 'g_105'); // Volume affects volume/area ratio
        registerDependency('d_105', 'i_105'); // Volume affects area/volume ratio
        
        // console.log('Volume and Surface Metrics fields registered with dependencies established');
    }
    
    /**
     * Update TEUI calculations when source values change
     * @param {string} sourceField - The source field that changed
     */
    function updateTEUICalculations(sourceField) {
        // console.log(`Updating TEUI calculations due to change in ${sourceField}`);
        
        try {
            // Get raw values from state manager
            const rawActualEnergy = getValue('f_32');
            const rawTargetEnergy = getValue('j_32');
            const rawArea = getValue('h_15');
            
            /*
            console.log("Raw values from StateManager:");
            console.log(`- Actual Energy (f_32): "${rawActualEnergy}"`);
            console.log(`- Target Energy (j_32): "${rawTargetEnergy}"`);
            console.log(`- Conditioned Area (h_15): "${rawArea}"`);
            */
            
            // Parse values with appropriate fallbacks
            let actualEnergy, targetEnergy, area;
            
            // Parse Actual Energy (f_32)
            if (typeof rawActualEnergy === 'string') {
                actualEnergy = parseFloat(rawActualEnergy.replace(/,/g, ''));
            } else {
                actualEnergy = parseFloat(rawActualEnergy);
            }
            
            // Parse Target Energy (j_32)
            if (typeof rawTargetEnergy === 'string') {
                targetEnergy = parseFloat(rawTargetEnergy.replace(/,/g, ''));
            } else {
                targetEnergy = parseFloat(rawTargetEnergy);
            }
            
            // Parse Conditioned Area (h_15)
            if (typeof rawArea === 'string') {
                area = parseFloat(rawArea.replace(/,/g, ''));
            } else {
                area = parseFloat(rawArea);
            }
            
            // If parsing fails, get values from DOM as backup
            if (isNaN(actualEnergy)) {
                const f32Element = document.querySelector('[data-field-id="f_32"]');
                if (f32Element) {
                    const domValue = f32Element.textContent.trim();
                    actualEnergy = parseFloat(domValue.replace(/,/g, ''));
                }
            }
            
            if (isNaN(targetEnergy)) {
                const j32Element = document.querySelector('[data-field-id="j_32"]');
                if (j32Element) {
                    const domValue = j32Element.textContent.trim();
                    targetEnergy = parseFloat(domValue.replace(/,/g, ''));
                }
            }
            
            if (isNaN(area) || area <= 0) {
                const h15Element = document.querySelector('[data-field-id="h_15"]');
                if (h15Element) {
                    const domValue = h15Element.textContent.trim();
                    area = parseFloat(domValue.replace(/,/g, ''));
                }
            }
            
            // Final fallbacks
            if (isNaN(actualEnergy)) {
                actualEnergy = 132938.0; // Default value
            }
            
            if (isNaN(targetEnergy)) {
                targetEnergy = 132765.65; // Default value
            }
            
            if (isNaN(area) || area <= 0) {
                area = 1427.20; // Default value
            }
            
            /*
            console.log("Final values for calculation:");
            console.log("- Actual Energy:", actualEnergy);
            console.log("- Target Energy:", targetEnergy);
            console.log("- Area:", area);
            */
            
            // Calculate TEUI values (rounded to 1 decimal place)
            let actualTEUI, targetTEUI;
            
            // Calculate Actual TEUI - handle zero energy case
            if (actualEnergy === 0) {
                actualTEUI = 0.0;
            } else {
                actualTEUI = Math.round((actualEnergy / area) * 10) / 10;
            }
            
            // Calculate Target TEUI - always use target energy
            targetTEUI = Math.round((targetEnergy / area) * 10) / 10;
            
            // console.log(`Calculated TEUI values - Actual: ${actualTEUI}, Target: ${targetTEUI}`);
            
            // Update the TEUI values
            setValue('k_10', actualTEUI.toString(), VALUE_STATES.CALCULATED);
            setValue('h_10', targetTEUI.toString(), VALUE_STATES.CALCULATED);
            
        } catch (error) {
            console.error('Error updating TEUI calculations:', error);
        }
    }
    
    /**
     * Exports the dependency data in a format suitable for visualization.
     * @returns {object} Object containing nodes and links, e.g., { nodes: [], links: [] }
     */
    function exportDependencyGraph() {
        console.log("[StateManager] Exporting dependency graph data...");
        const nodes = new Map(); // Use a Map to easily track unique nodes
        const links = [];

        // Iterate through the dependencies map (source -> Set<target>)
        dependencies.forEach((targets, sourceId) => {
            // Add source node if not already added
            if (!nodes.has(sourceId)) {
                nodes.set(sourceId, { id: sourceId });
            }

            targets.forEach(targetId => {
                // Add target node if not already added
                if (!nodes.has(targetId)) {
                    nodes.set(targetId, { id: targetId });
                }
                // Add the link
                links.push({ source: sourceId, target: targetId });
            });
        });

        // Enhance node data using FieldManager
        if (window.TEUI?.FieldManager) {
            const fieldManager = window.TEUI.FieldManager;
            nodes.forEach(node => {
                const fieldDef = fieldManager.getField(node.id);
                node.type = fieldDef?.type || 'unknown';
                node.label = fieldDef?.label || node.id; // Use fieldDef label or fallback to ID
                node.rowId = fieldDef?.rowId || node.id.split('_')[1] || '?'; // Try to get rowId
                // Add grouping logic based on fieldDef or node.id
                node.group = getNodeGroup(node.id, fieldDef); // Use helper function
            });
        }
        else {
            console.warn("[StateManager] FieldManager not available to enhance node data.");
        }
        
        const nodesArray = Array.from(nodes.values());
        console.log(`[StateManager] Exported ${nodesArray.length} nodes and ${links.length} links.`);
        return { nodes: nodesArray, links: links };
    }
    
    /**
     * Helper function (moved inside StateManager IIFE)
     * Determines the group for a node based on its ID or field definition.
     * @param {string} nodeId 
     * @param {object | null} fieldDef 
     * @returns {string} The determined group name.
     */
    function getNodeGroup(nodeId, fieldDef) {
        // RESTORED: Fallback to prefix/pattern matching (less reliable, but maybe better coverage?)
        if (nodeId.includes('_1') && nodeId.split('_').length > 1) return '1. Key Values'; // Approximate
        if (nodeId.includes('_2') && nodeId.split('_').length > 1) return '2. Building Information';
        if (nodeId.includes('_3') && nodeId.split('_').length > 1) return '3. Climate Calculations';
        if (nodeId.includes('_4') && nodeId.split('_').length > 1) return '4. Actual vs. Target Energy';
        if (nodeId.includes('_5') && nodeId.split('_').length > 1) return '5. CO2e Emissions';
        if (nodeId.includes('_6') && nodeId.split('_').length > 1) return '6. Renewable Energy';
        if (nodeId.includes('_7') && nodeId.split('_').length > 1) return '7. Water Use';
        if (nodeId.includes('_8') && nodeId.split('_').length > 1) return '8. Indoor Air Quality';
        if (nodeId.includes('_9') && nodeId.split('_').length > 1) return '9. Occupant + Internal Gains';
        if (nodeId.includes('_10') && nodeId.split('_').length > 1) return '10. Radiant Gains';
        if (nodeId.includes('_11') && nodeId.split('_').length > 1) return '11. Transmission Losses';
        if (nodeId.includes('_12') && nodeId.split('_').length > 1) return '12. Volume and Surface Metrics';
        if (nodeId.includes('_13') && nodeId.split('_').length > 1) return '13. Mechanical Loads';
        if (nodeId.includes('_14') && nodeId.split('_').length > 1) return '14. TEDI & TELI';
        if (nodeId.includes('_15') && nodeId.split('_').length > 1) return '15. TEUI Summary';

        return 'Other'; // Default fallback
    }
    
    // Public API
    return {
        // Constants
        VALUE_STATES: VALUE_STATES,
        
        // Basic functions
        initialize: initialize,
        clear: clear,
        getValue: getValue,
        setValue: setValue,
        
        // Dependency management
        registerDependency: registerDependency,
        markDependentsDirty: markDependentsDirty,
        getDirtyFields: getDirtyFields,
        clearDirtyStatus: clearDirtyStatus,
        getCalculationOrder: getCalculationOrder,
        
        // Listener management
        addListener: addListener,
        removeListener: removeListener,
        
        // UI updates
        updateUI: updateUI,
        
        // State persistence
        saveState: saveState,
        loadState: loadState,
        importState: importState,
        exportState: exportState,
        
        // Debugging
        getAllKeys: getAllKeys,
        getDebugInfo: getDebugInfo,
        exportDependencyGraph: exportDependencyGraph
    };
})();

// Initialize when the document is ready
document.addEventListener('DOMContentLoaded', function() {
    TEUI.StateManager.initialize();
});