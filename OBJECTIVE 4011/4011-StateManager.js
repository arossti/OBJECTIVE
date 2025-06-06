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
    let fieldDependencies = new Map();     // Map of field dependencies
    let calculatedFields = new Set(); // Set of fields that are calculated
    let dirtyFields = new Set();      // Fields needing recalculation
    let listeners = new Map();        // Field change listeners
    let activeReferenceDataSet = {}; 
    let independentReferenceState = {}; // << NEW: For independently editable Reference fields (like h_12)
    let isApplicationStateMuted = false; // << NEW: Flag for muting application state updates
    let lastImportedState = {}; // << NEW: To store the last imported state
    
    // NEW: Calculation orchestration properties
    let fieldCalculations = new Map();  // Map of field-specific calculation functions
    let calculationOrder = [];          // Cached topological sort order
    let calculationInProgress = false;  // Flag to prevent recursive calculations
    let calculationDepth = 0;
    const MAX_CALCULATION_DEPTH = 5;
    
    // Track warnings to avoid spam during IT-DEPENDS migration
    const warnedMissingCalculations = new Set();
    
    // ============================================================================
    // TODO: REMOVE AFTER IT-DEPENDS MIGRATION COMPLETE
    // GLOBAL RECURSION PROTECTION FOR IT-DEPENDS MIGRATION
    // ============================================================================
    // 
    // This cross-section recursion protection is TEMPORARY and needed only during
    // the migration phase when some sections use IT-DEPENDS (S13) and others use
    // traditional calculateAll() systems (S1, etc.).
    // 
    // Once ALL sections are migrated to IT-DEPENDS, this protection can be 
    // simplified significantly or removed entirely.
    // ============================================================================
    
    // Track active calculation chains to prevent cross-section recursion
    const activeSections = new Set();
    const globalCalculationDepth = { current: 0 };
    const MAX_GLOBAL_DEPTH = 3;
    
    /**
     * TODO: REMOVE AFTER MIGRATION - Check if we should allow cross-section calculations during IT-DEPENDS migration
     * @param {string} triggeringSection - The section that started the calculation 
     * @param {string} targetSection - The section being triggered
     * @returns {boolean} Whether to allow the calculation
     */
    function shouldAllowCrossSectionCalculation(triggeringSection, targetSection) {
        // During IT-DEPENDS migration, limit cross-section cascading
        if (globalCalculationDepth.current >= MAX_GLOBAL_DEPTH) {
            console.warn(`[StateManager] 🚨 Cross-section recursion protection: depth ${globalCalculationDepth.current}, blocking ${triggeringSection} → ${targetSection}`);
            return false;
        }
        
        // Prevent immediate back-and-forth between same sections
        if (activeSections.has(targetSection)) {
            console.warn(`[StateManager] 🚨 Cross-section recursion protection: ${targetSection} already active, blocking feedback loop`);
            return false;
        }
        
        return true;
    }
    
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
        
        // console.log(`Initialized state with ${fields.size} fields and ${fieldDependencies.size} dependencies`);
    }
    
    /**
     * Clear all state data
     */
    function clear() {
        fields.clear();
        fieldDependencies.clear();
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
        if (window.TEUI && TEUI.ReferenceToggle && TEUI.ReferenceToggle.isReferenceMode()) {
            // In Reference Mode, check independently editable fields first
            if (independentReferenceState.hasOwnProperty(fieldId)) {
                return independentReferenceState[fieldId];
            }
            
            // Then check activeReferenceDataSet
            // Fallback to application default if somehow not in activeReferenceDataSet (should be rare)
            return activeReferenceDataSet.hasOwnProperty(fieldId) 
                   ? activeReferenceDataSet[fieldId] 
                   : (fields.has(fieldId) ? fields.get(fieldId).value : null); // Last resort fallback
        } else {
            // Existing logic for Application Mode
        return fields.has(fieldId) ? fields.get(fieldId).value : null;
        }
    }
    
    /**
     * Set a field value
     * @param {string} fieldId - Field ID (DOM-based, e.g. 'd-12')
     * @param {any} value - New value
     * @param {string} state - Value state (default, user-modified, calculated, etc.)
     * @returns {boolean} True if the value changed
     */
    function setValue(fieldId, value, state = VALUE_STATES.USER_MODIFIED) {
        // Check if we're in Reference Mode and this is an independently editable field
        if (window.TEUI && TEUI.ReferenceToggle && TEUI.ReferenceToggle.isReferenceMode() && 
            state === VALUE_STATES.USER_MODIFIED) {
            
            // Check if this field is independently editable in Reference Mode
            if (window.TEUI?.AppendixE?.getFieldBehavior) {
                const currentStandard = getValue('d_13') || 'OBC SB10 5.5-6 Z6';
                const behavior = window.TEUI.AppendixE.getFieldBehavior(fieldId, currentStandard);
                if (behavior === "Independently User-Editable in Reference Mode") {
                    // Store in separate reference state and update activeReferenceDataSet
                    const oldValue = independentReferenceState[fieldId] || null;
                    independentReferenceState[fieldId] = value;
                    activeReferenceDataSet[fieldId] = value; // Keep in sync
                    
                    console.log(`[StateManager] Set independent Reference value for ${fieldId}: ${value}`);
                    notifyListeners(fieldId, value, oldValue, 'reference-user-modified');
                    return true;
                }
            }
        }
        
        // << NEW: Check if application state updates are muted >>
        if (isApplicationStateMuted && state !== VALUE_STATES.CALCULATED && state !== VALUE_STATES.DERIVED) {
            // if (fieldId === 'k_120') { // Intentionally commented out
            //     console.warn(`[StateManager k_120] MUTED setValue for ${fieldId} to \"${value}\", stateType: ${state}`);
            // }
            // if (fieldId === 'g_67') { // Intentionally commented out
            //     console.warn(`[StateManager g_67] MUTED setValue for ${fieldId} to \"${value}\", stateType: ${state}`);
            // }
            return false; // Prevent update to this.fields (application state)
        }

        // << NEW: Store value if it's from an import >>
        if (state === VALUE_STATES.IMPORTED) {
            lastImportedState[fieldId] = value;
        }

        // if (fieldId === 'k_120') { // Intentionally commented out
        //     console.log(`[StateManager k_120] ALLOWED setValue for ${fieldId} to \"${value}\", stateType: ${state}. Muted: ${isApplicationStateMuted}`);
        // }
        // if (fieldId === 'g_67') { // Intentionally commented out
        //     console.log(`[StateManager g_67] ALLOWED setValue for ${fieldId} to \"${value}\", stateType: ${state}. Muted: ${isApplicationStateMuted}`);
        // }

        const fieldDefinition = fields[fieldId]; // This line was in the original, but seems unused. Let's keep it for now to minimize changes from the original revert point.

        const oldValue = getValue(fieldId); // Use mode-aware getValue for oldValue as original did.
        
        // If field doesn't exist, create it
        if (!fields.has(fieldId)) {
            fields.set(fieldId, {
                id: fieldId,
                value: value,
                state: state
            });
            
            notifyListeners(fieldId, value, null, state);
            return true;
        }
        
        // Update the existing field
        const field = fields.get(fieldId);
        
        if (field.value === value && field.state === state) {
            return false;
        }
        
        field.value = value;
        field.state = state;
        
        if (state !== VALUE_STATES.CALCULATED && state !== VALUE_STATES.DERIVED) {
            markDependentsDirty(fieldId);
        }
        
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
        if (!fieldDependencies.has(sourceId)) {
            fieldDependencies.set(sourceId, new Set());
        }
        
        // Add target to source's dependencies
        fieldDependencies.get(sourceId).add(targetId);
        
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
        if (!fieldDependencies.has(fieldId)) {
            return;
        }
        
        // Get dependent fields
        const dependents = fieldDependencies.get(fieldId);
        
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
        // Original loop for other fieldIds
        if (!listeners.has(fieldId)) {
            return;
        }
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
     * Get calculation order for dirty fields (ORIGINAL SIMPLE VERSION)
     * @returns {Array} Field IDs in calculation order
     */
    function getSimpleCalculationOrder() {
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
                if (fieldDependencies.has(fieldId)) {
                    fieldDependencies.get(fieldId).forEach(depId => visit(depId));
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
     * CALCULATION ORCHESTRATION: Get debug information about the system
     */
    function getDebugInfo() {
        return {
            totalFields: fields.size,
            totalDependencies: Object.keys(fieldDependencies).length,
            calculatedFields: Array.from(calculatedFields),
            dirtyFields: Array.from(dirtyFields),
            registeredCalculations: fieldCalculations, // Expose the Map directly
            calculationOrder: calculationOrder.slice(), // Return copy
            listeners: Object.keys(listeners).length
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
        fieldDependencies.forEach((targets, sourceId) => {
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
    
    /**
     * NEW METHOD: Builds the activeReferenceDataSet for Reference Mode.
     * @param {string} standardKey - The key of the selected reference standard.
     */
    function loadReferenceData(standardKey) {
        console.log(`[StateManager] Loading reference data for standard: ${standardKey}`);
        activeReferenceDataSet = {}; // Initialize/Clear

        // Helper to get current application state value, bypassing mode-aware getValue for this step
        const getApplicationStateValueInternal = (id) => {
            if (fields.has(id)) {
                return fields.get(id).value;
            }
            const fieldDef = window.TEUI && TEUI.FieldManager?.getField(id);
            return fieldDef?.defaultValue;
        };

        const allUserEditableFields = window.TEUI && TEUI.FieldManager?.getAllUserEditableFields(); 

        if (allUserEditableFields) {
            Object.keys(allUserEditableFields).forEach(fieldId => {
                // Check if this field has an independent Reference value
                if (independentReferenceState.hasOwnProperty(fieldId)) {
                    // Use the independent Reference value
                    activeReferenceDataSet[fieldId] = independentReferenceState[fieldId];
                } else {
                    // Use application state value
                activeReferenceDataSet[fieldId] = getApplicationStateValueInternal(fieldId);
                }
            });
            console.log('[StateManager] Step 1: Copied application state to activeReferenceDataSet (preserving independent Reference values). d_53 value:', activeReferenceDataSet['d_53']);
        } else {
            console.warn('[StateManager] Could not get allUserEditableFields from FieldManager for Step 1.');
            // Fallback: try to copy from current 'fields' if FieldManager helper isn't ready/available
            fields.forEach((fieldData, fieldId) => {
                // A basic check if it might be user-editable (e.g., not purely calculated from the start)
                 if(fieldData.state !== VALUE_STATES.CALCULATED && fieldData.state !== VALUE_STATES.DERIVED){
                    activeReferenceDataSet[fieldId] = fieldData.value;
                 }
            });
            if(Object.keys(activeReferenceDataSet).length > 0){
                console.log('[StateManager] Step 1 (Fallback): Copied from current fields map to activeReferenceDataSet. d_53 value:', activeReferenceDataSet['d_53']);
            }
        }
        
        // Step 2: Apply Specific "Reference Mode Defaults" (from Appendix E - placeholder)
        const referenceModeDefaults = (window.TEUI && TEUI.AppendixE?.getReferenceModeDefaults()) || {}; 
        Object.keys(referenceModeDefaults).forEach(fieldId => {
            // Ensure it's a known field we care about changing
            if (activeReferenceDataSet.hasOwnProperty(fieldId) || (allUserEditableFields && allUserEditableFields[fieldId])) { 
                activeReferenceDataSet[fieldId] = referenceModeDefaults[fieldId];
            }
        });
        console.log('[StateManager] Step 2: Applied Reference Mode Defaults. d_53 value:', activeReferenceDataSet['d_53']);

        // Step 3: Overlay Explicit Standard Overrides
        console.log(`[StateManager] Attempting to access TEUI.ReferenceValues for standardKey: "${standardKey}"`);
        
        // DEBUG: Check if TEUI.ReferenceValues exists
        console.log('[StateManager] TEUI.ReferenceValues exists?', !!(window.TEUI && window.TEUI.ReferenceValues));
        if (window.TEUI && window.TEUI.ReferenceValues) {
            console.log('[StateManager] Available standards:', Object.keys(window.TEUI.ReferenceValues));
            console.log('[StateManager] Exact standardKey being requested:', JSON.stringify(standardKey));
            
            // Check if the exact standard exists
            const exactMatch = window.TEUI.ReferenceValues[standardKey];
            console.log('[StateManager] Exact match found?', !!exactMatch);
            if (exactMatch) {
                console.log('[StateManager] Standard data:', exactMatch);
                console.log('[StateManager] d_53 in standard?', exactMatch.hasOwnProperty('d_53'));
                if (exactMatch.hasOwnProperty('d_53')) {
                    console.log('[StateManager] d_53 value in standard:', exactMatch['d_53']);
                }
            }
        }

        // FIXED: Access the reference data directly from TEUI.ReferenceValues[standardKey]
        const standardOverrideData = window.TEUI && TEUI.ReferenceValues && TEUI.ReferenceValues[standardKey] ? TEUI.ReferenceValues[standardKey] : undefined;

        if (standardOverrideData) {
            console.log('[StateManager] Found standard override data, applying...');
            Object.keys(standardOverrideData).forEach(fieldId => {
                console.log(`[StateManager] Checking field: ${fieldId}, value: ${standardOverrideData[fieldId]}`);
                // Apply if the field is already in our dataset (meaning it's a recognized user-editable field)
                if (activeReferenceDataSet.hasOwnProperty(fieldId) || (allUserEditableFields && allUserEditableFields[fieldId])) { 
                     console.log(`[StateManager] Applying ${fieldId} = ${standardOverrideData[fieldId]}`);
                     activeReferenceDataSet[fieldId] = standardOverrideData[fieldId];
                } else {
                    console.warn(`[StateManager] Standard ${standardKey} defines field ${fieldId} not in known user-editable fields`);
                }
            });
            console.log('[StateManager] Step 3: Applied standard overrides. d_53 value:', activeReferenceDataSet['d_53']);
        } else {
            console.warn(`[StateManager] No override data found for standard: ${standardKey}. Available standards:`, Object.keys(window.TEUI?.ReferenceValues || {}));
        }

        // Step 4 (Ensure Completeness - Fallback if needed)
        if (allUserEditableFields) {
            Object.keys(allUserEditableFields).forEach(fieldId => {
                if (!activeReferenceDataSet.hasOwnProperty(fieldId)) {
                    const fieldDef = TEUI.FieldManager?.getField(fieldId);
                    activeReferenceDataSet[fieldId] = fieldDef?.defaultValue; 
                    // console.log(`[StateManager] Step 4: Field ${fieldId} fell back to system default.`);
                }
            });
        }
        console.log('[StateManager] FINAL d_53 value in activeReferenceDataSet:', activeReferenceDataSet['d_53']);
        console.log('[StateManager] Final activeReferenceDataSet keys:', Object.keys(activeReferenceDataSet).length);
    }

    /**
     * NEW METHOD: Sets a value directly into the activeReferenceDataSet for edits made in Reference Mode.
     * @param {string} fieldId - The ID of the field to set.
     * @param {any} value - The new value for the field.
     * @returns {boolean} True if the value was set (always true for now, could add checks).
     */
    function setValueInReferenceMode(fieldId, value) {
        if (!(window.TEUI && TEUI.ReferenceToggle && TEUI.ReferenceToggle.isReferenceMode())) {
            console.warn("[StateManager] Attempted to setValueInReferenceMode when not in Reference Mode.");
            return false;
        }

        const oldValueInRef = activeReferenceDataSet[fieldId]; // Get old value specifically from ref dataset
        activeReferenceDataSet[fieldId] = value;

        // For independently editable fields, also store in a separate reference state
        if (window.TEUI?.AppendixE?.getFieldBehavior) {
            const currentStandard = getValue('d_13') || 'OBC SB10 5.5-6 Z6';
            const behavior = window.TEUI.AppendixE.getFieldBehavior(fieldId, currentStandard);
            if (behavior === "Independently User-Editable in Reference Mode") {
                // Store in separate reference state storage
                if (!independentReferenceState) {
                    independentReferenceState = {};
                }
                independentReferenceState[fieldId] = value;
                console.log(`[StateManager] Stored independent Reference value for ${fieldId}: ${value}`);
            }
        }

        // Notify listeners. Consider a specific state like 'reference-user-modified'
        // For now, using existing notifyListeners to ensure dependents are aware. 
        // The main calculation loop should use mode-aware getValue().
        // Using a distinct state prevents this from being caught by the mute if it also checks state.
        notifyListeners(fieldId, value, oldValueInRef, 'reference-user-modified'); 

        // TODO: Consider if markDependentsDirty specifically for reference mode is needed,
        // or if the existing mechanism + mode-aware getValue is sufficient.
        console.log(`[StateManager] Value set in Reference Mode for ${fieldId}: ${value}`);
        return true;
    }

    /**
     * NEW METHOD: Sets the mute state for application state updates.
     * @param {boolean} isMuted - True to mute updates to application state, false to allow.
     */
    function setMuteApplicationStateUpdates(isMuted) {
        isApplicationStateMuted = isMuted;
        // console.log(`[StateManager] Application state updates ${isMuted ? 'MUTED' : 'UNMUTED'}.`);
    }

    /**
     * NEW METHOD: Gets a field value directly from the application state (this.fields).
     * @param {string} fieldId - Field ID
     * @returns {any} The field value from application state or null if not found.
     */
    function getApplicationStateValue(fieldId) {
        return fields.has(fieldId) ? fields.get(fieldId).value : null;
    }

    /**
     * NEW METHOD: Gets a field value directly from the activeReferenceDataSet.
     * @param {string} fieldId - Field ID
     * @returns {any} The field value from reference state or null if not found.
     */
    function getActiveReferenceModeValue(fieldId) {
        return activeReferenceDataSet.hasOwnProperty(fieldId) ? activeReferenceDataSet[fieldId] : null;
    }

    /**
     * NEW METHOD: Reverts the application state to the last successfully imported state,
     * or performs a system refresh if no imported data exists.
     */
    function revertToLastImportedState() {
        if (Object.keys(lastImportedState).length === 0) {
            // No imported data - perform a system refresh instead
            console.log('[StateManager] No imported data found. Performing system refresh...');
            
            // Trigger a full recalculation to refresh the system
            if (window.TEUI && window.TEUI.Calculator && typeof window.TEUI.Calculator.calculateAll === 'function') {
                window.TEUI.Calculator.calculateAll();
            } else {
                console.warn('[StateManager] Calculator.calculateAll not available for system refresh.');
            }
            
            // Also trigger reference model recalculation if in reference mode
            if (window.TEUI && window.TEUI.ReferenceToggle && window.TEUI.ReferenceToggle.isReferenceMode()) {
                // Reload reference data to ensure consistency
                const currentStandard = getValue('d_13') || 'OBC SB10 5.5-6 Z6';
                loadReferenceData(currentStandard);
                
                // Trigger another calculation pass for reference values
                setTimeout(() => {
                    if (window.TEUI.Calculator && typeof window.TEUI.Calculator.calculateAll === 'function') {
                        window.TEUI.Calculator.calculateAll();
                    }
                }, 100);
            }
            
            if (window.TEUI && window.TEUI.FileHandler && typeof window.TEUI.FileHandler.showStatus === 'function') {
                window.TEUI.FileHandler.showStatus('System defaults restored (no imported states yet)', 'info');
            }
            console.log('[StateManager] System refresh completed.');
            return;
        }

        console.log('[StateManager] Reverting to last imported state...');
        let revertedCount = 0;

        Object.entries(lastImportedState).forEach(([fieldId, importedValue]) => {
            // Set the value in the main application state
            const valueChanged = setValue(fieldId, importedValue, 'system_reverted_to_import'); // Use a new distinct source
            
            // Update the UI display for the field
            if (window.TEUI && window.TEUI.FieldManager && typeof window.TEUI.FieldManager.updateFieldDisplay === 'function') {
                const fieldDef = window.TEUI.FieldManager.getField(fieldId);
                if (fieldDef) {
                    try {
                        window.TEUI.FieldManager.updateFieldDisplay(fieldId, importedValue, fieldDef);
                        if (valueChanged) revertedCount++;
                    } catch (e) {
                        console.error(`[StateManager] Error calling FieldManager.updateFieldDisplay for ${fieldId} during revert:`, e);
                    }
                }
            } else {
                console.warn(`[StateManager] FieldManager.updateFieldDisplay not available during revert for ${fieldId}.`);
            }
        });

        // Trigger a full recalculation of all dependent fields
        if (window.TEUI && window.TEUI.Calculator && typeof window.TEUI.Calculator.calculateAll === 'function') {
            window.TEUI.Calculator.calculateAll();
        } else {
            console.warn('[StateManager] Calculator.calculateAll not available to trigger after reverting state.');
        }

        if (window.TEUI && window.TEUI.FileHandler && typeof window.TEUI.FileHandler.showStatus === 'function') {
            window.TEUI.FileHandler.showStatus(`Application state reset to last imported values. ${revertedCount} fields updated.`, 'success');
        }
        console.log(`[StateManager] Reverted to last imported state. ${revertedCount} fields updated.`);
    }
    
    /**
     * DUAL-ENGINE EXPLICIT STATE GETTERS
     * These methods provide direct access to specific state repositories
     * for use in calculation engines, independent of current UI mode.
     */
    
    /**
     * Get a field value from Application/Target state (for Column H calculations)
     * @param {string} fieldId - Field ID
     * @returns {any} The field value from application state or null if not found
     */
    function getApplicationValue(fieldId) {
        return fields.has(fieldId) ? fields.get(fieldId).value : null;
    }
    
    /**
     * Get a field value from Reference state (for Column E calculations)
     * @param {string} fieldId - Field ID
     * @returns {any} The field value from reference state or null if not found
     */
    function getReferenceValue(fieldId) {
        // First check if this is an independently editable field with a separate Reference value
        if (independentReferenceState.hasOwnProperty(fieldId)) {
            return independentReferenceState[fieldId];
        }
        
        // Otherwise use the standard activeReferenceDataSet
        return activeReferenceDataSet.hasOwnProperty(fieldId) ? activeReferenceDataSet[fieldId] : null;
    }
    
    /**
     * Get a field value for UI display purposes (mode-aware)
     * This is the existing getValue() logic, renamed for clarity
     * @param {string} fieldId - Field ID
     * @returns {any} The field value based on current UI mode
     */
    function getCurrentDisplayValue(fieldId) {
        if (window.TEUI && TEUI.ReferenceToggle && TEUI.ReferenceToggle.isReferenceMode()) {
            // In Reference Mode, check independently editable fields first
            if (independentReferenceState.hasOwnProperty(fieldId)) {
                return independentReferenceState[fieldId];
            }
            
            // Then check activeReferenceDataSet
            // Fallback to application default if somehow not in activeReferenceDataSet (should be rare)
            return activeReferenceDataSet.hasOwnProperty(fieldId) 
                   ? activeReferenceDataSet[fieldId] 
                   : (fields.has(fieldId) ? fields.get(fieldId).value : null); // Last resort fallback
        } else {
            // Existing logic for Application Mode
            return fields.has(fieldId) ? fields.get(fieldId).value : null;
        }
    }
    
    /**
     * T-CELLS REFERENCE COMPARISON SYSTEM
     * Support for pass/fail comparison logic using T-cell reference values
     */
    
    /**
     * Get the corresponding T-cell field ID for an application field
     * @param {string} fieldId - Application field ID (e.g., 'f_85')
     * @returns {string|null} The corresponding T-cell ID (e.g., 't_85') or null if no mapping
     */
    function getCorrespondingTCell(fieldId) {
        // Extract row number from fieldId pattern (e.g., 'f_85' -> '85')
        const rowMatch = fieldId.match(/[a-z]_(\d+)/);
        if (rowMatch) {
            return `t_${rowMatch[1]}`;
        }
        
        // Special cases for non-standard patterns
        const specialMappings = {
            'h_127': 't_127', // TEDI
            'h_140': 't_140', // GHGI
            'd_104': 't_104', // Combined U-Value
            // Add other special cases as needed
        };
        
        return specialMappings[fieldId] || null;
    }
    
    /**
     * Get the T-cell reference value for comparison with an application field
     * @param {string} applicationFieldId - Application field ID
     * @returns {any} The T-cell reference value or null if not found
     */
    function getTCellValue(applicationFieldId) {
        const tCellId = getCorrespondingTCell(applicationFieldId);
        if (!tCellId) return null;
        
        return getReferenceValue(tCellId);
    }
    
    /**
     * V2 DUAL-STATE ARCHITECTURE ADDITIONS
     * Additional methods to complete the V2 streamlined implementation
     */

    /**
     * Set a field value in Application/Target state (for Column H calculations)
     * @param {string} fieldId - Field ID
     * @param {any} value - New value
     * @param {string} source - Value source (e.g., 'user-input', 'calculated', 'imported')
     * @returns {boolean} True if the value changed
     */
    function setApplicationValue(fieldId, value, source) {
        // Directly update the main fields map (application state)
        const result = setValue(fieldId, value, source);
        if (result) {
            emitFieldChanged('application', fieldId, value);
        }
        return result;
    }

    /**
     * Set a field value in Reference state (for Column E calculations)
     * @param {string} fieldId - Field ID
     * @param {any} value - New value
     * @param {string} source - Value source (e.g., 'standard-override', 'carry-over', 'user-modified-reference', 'calculated-reference')
     * @returns {boolean} True if the value changed
     */
    function setReferenceValue(fieldId, value, source) {
        const oldValue = activeReferenceDataSet[fieldId] || null;
        activeReferenceDataSet[fieldId] = value;
        
        // For independently editable fields, also store in separate reference state
        if (source === 'user-modified-reference' || independentReferenceState.hasOwnProperty(fieldId)) {
            independentReferenceState[fieldId] = value;
        }
        
        const valueChanged = oldValue !== value;
        if (valueChanged) {
            emitFieldChanged('reference', fieldId, value);
        }
        return valueChanged;
    }

    /**
     * Build/rebuild the reference state from standard + carry-overs (V2 alias for loadReferenceData)
     * @param {string} standardKey - The key of the selected reference standard
     */
    function buildReferenceState(standardKey) {
        loadReferenceData(standardKey);
    }

    /**
     * Emit field change events for the V2 event system
     * @param {string} modelType - Either 'application' or 'reference'
     * @param {string} fieldId - Field ID that changed
     * @param {any} newValue - New value
     */
    function emitFieldChanged(modelType, fieldId, newValue) {
        document.dispatchEvent(new CustomEvent('FieldValueChanged', {
            detail: { modelType, fieldId, newValue }
        }));
    }
    
    /**
     * CALCULATION ORCHESTRATION: Register a calculation function for a specific field
     * This replaces the need for manual calculateAll() calls by registering
     * field-specific calculation functions that can be triggered on-demand
     * @param {string} fieldId - Field ID that this calculation produces
     * @param {Function} calculationFn - Function that calculates the field value
     * @param {string} description - Optional description of what this calculation does
     */
    function registerCalculation(fieldId, calculationFn, description = '') {
        fieldCalculations.set(fieldId, {
            fn: calculationFn,
            description: description,
            fieldId: fieldId
        });
        
        // Mark this field as calculated
        calculatedFields.add(fieldId);
        
        // Invalidate cached calculation order since we added a new calculation
        calculationOrder = [];
        
        console.log(`[StateManager] Registered calculation for ${fieldId}: ${description}`);
    }
    
    /**
     * CALCULATION ORCHESTRATION: Trigger calculation for a specific field and its dependents
     * @param {string} changedFieldId - The field that changed, triggering calculations
     */
    function triggerFieldCalculation(changedFieldId) {
        // ⚠️ INPUT VALIDATION: Essential validation checks
        if (typeof changedFieldId === 'number') {
            console.warn(`[StateManager] triggerFieldCalculation received numeric fieldId: ${changedFieldId}. Skipping calculation.`);
            return;
        }
        
        if (!changedFieldId || typeof changedFieldId !== 'string') {
            console.warn(`[StateManager] triggerFieldCalculation requires valid string fieldId, got: ${changedFieldId}`);
            return;
        }
        
        // ⚠️ RECURSION PROTECTION: Prevent infinite loops
        if (calculationInProgress) {
            console.warn(`[StateManager] Recursion detected: already calculating for ${changedFieldId}`);
            return;
        }
        
        if (calculationDepth >= MAX_CALCULATION_DEPTH) {
            console.warn(`[StateManager] Maximum calculation depth (${MAX_CALCULATION_DEPTH}) reached for ${changedFieldId}`);
            return;
        }

        // 🛡️ GLOBAL CROSS-SECTION PROTECTION (TODO: REMOVE AFTER MIGRATION)
        globalCalculationDepth.current++;
        
        // Determine which section this field belongs to
        const currentSection = changedFieldId.includes('_') ? 
            `S${changedFieldId.split('_')[1].substring(0, 2)}` : 'Unknown';
        
        if (globalCalculationDepth.current > 1) {
            console.log(`[StateManager] 🌐 Cross-section calculation: ${currentSection} (global depth: ${globalCalculationDepth.current})`);
        }
        
        // Add current section to active set (TODO: REMOVE AFTER MIGRATION)
        activeSections.add(currentSection);
        
        try {
            calculationInProgress = true;
            calculationDepth++;
            
            console.log(`[StateManager] Triggering calculations for changed field: ${changedFieldId} (depth: ${calculationDepth})`);
            
            // Find all fields that depend on the changed field
            const dependentFields = [];
            if (fieldDependencies.has(changedFieldId)) {
                const targetSet = fieldDependencies.get(changedFieldId);
                dependentFields.push(...targetSet);
            }
            
            if (dependentFields.length === 0) {
                console.log(`[StateManager] No dependent calculations found for: ${changedFieldId}`);
                return;
            }
            
            console.log(`[StateManager] Found ${dependentFields.length} dependent fields: [${dependentFields.join(', ')}]`);
            
            // Execute calculations for dependent fields
            for (const fieldId of dependentFields) {
                const targetSection = fieldId.includes('_') ? 
                    `S${fieldId.split('_')[1].substring(0, 2)}` : 'Unknown';
                    
                // Check cross-section permission before calculating (TODO: REMOVE AFTER MIGRATION)
                if (currentSection !== targetSection) {
                    if (!shouldAllowCrossSectionCalculation(currentSection, targetSection)) {
                        console.log(`[StateManager] ⏸️ Skipping cross-section calculation: ${currentSection} → ${targetSection} (${fieldId})`);
                        continue;
                    }
                }
                
                if (fieldCalculations.has(fieldId)) {
                    try {
                        console.log(`[StateManager] Executing calculation for: ${fieldId}`);
                        const calculationData = fieldCalculations.get(fieldId);
                        const result = calculationData.fn();
                        
                        // Set the calculated value using appropriate state
                        setValue(fieldId, result, 'calculated');
                        console.log(`[StateManager] Calculation complete for ${fieldId}: ${result}`);
                        
                    } catch (calcError) {
                        console.error(`[StateManager] Error calculating ${fieldId}:`, calcError);
                    }
                } else {
                    // Field has dependencies but no calculation function
                    // Only warn once per field to reduce spam during migration
                    const warningKey = `${fieldId}_missing`;
                    if (!warnedMissingCalculations.has(warningKey)) {
                        console.warn(`[StateManager] No calculation function registered for dependent field: ${fieldId} (migration warning - shown once)`);
                        warnedMissingCalculations.add(warningKey);
                    }
                }
            }
            
        } catch (error) {
            console.error(`[StateManager] Error in triggerFieldCalculation for ${changedFieldId}:`, error);
        } finally {
            calculationInProgress = false;
            calculationDepth--;
            
            // Clean up global tracking (TODO: REMOVE AFTER MIGRATION)
            activeSections.delete(currentSection);
            globalCalculationDepth.current--;
            
            if (globalCalculationDepth.current === 0) {
                console.log(`[StateManager] ✅ Global calculation chain complete`);
            }
        }
    }
    
    /**
     * CALCULATION ORCHESTRATION: Calculate all fields in a dependency chain
     * This is the core method that replaces manual calculateAll() calls.
     * It only calculates fields that are actually affected by the change.
     * @param {string} changedFieldId - The field that changed and triggered this calculation
     * @returns {Array} Array of field IDs that were recalculated
     */
    function calculateDependencyChain(changedFieldId) {
        // Check for existing calculation systems in progress
        if (calculationInProgress || window.sectionCalculationInProgress) {
            console.warn(`[StateManager] Calculation already in progress (orchestration: ${calculationInProgress}, section: ${window.sectionCalculationInProgress}), skipping dependency chain for ${changedFieldId}`);
            return [];
        }
        
        calculationInProgress = true;
        const calculatedFields = [];
        
        try {
            console.log(`[StateManager] Starting dependency chain calculation for ${changedFieldId}`);
            
            // 1. Get all downstream dependents that are dirty
            const affectedFields = getDirtyFields();
            
            if (affectedFields.length === 0) {
                console.log(`[StateManager] No dirty fields to calculate`);
                return calculatedFields;
            }
            
            // 2. Get calculation order (topological sort)
            const orderedFields = getCalculationOrder(affectedFields);
            
            console.log(`[StateManager] Calculating ${orderedFields.length} fields in dependency order:`, orderedFields);
            
            // 3. Calculate each field in the correct order
            orderedFields.forEach(fieldId => {
                const result = triggerFieldCalculation(fieldId);
                if (result !== null) {
                    calculatedFields.push(fieldId);
                    console.log(`[StateManager] ✓ Calculated ${fieldId} = ${result}`);
                } else {
                    console.log(`[StateManager] ⚠ Skipped ${fieldId} (no calculation registered or calculation failed)`);
                }
            });
            
            // 4. Clear dirty status for calculated fields
            clearDirtyStatus(calculatedFields);
            
            console.log(`[StateManager] Dependency chain calculation complete. Calculated ${calculatedFields.length} fields.`);
            
        } catch (error) {
            console.error(`[StateManager] Error in dependency chain calculation:`, error);
        } finally {
            calculationInProgress = false;
        }
        
        return calculatedFields;
    }
    
    /**
     * CALCULATION ORCHESTRATION: Smart listener wrapper that triggers dependency chain
     * This replaces manual calculateAll() calls with targeted dependency calculations
     * @param {string} fieldId - Field ID to listen to
     * @param {Function} additionalCallback - Optional additional callback to run
     */
    function addSmartListener(fieldId, additionalCallback = null) {
        addListener(fieldId, (newValue, oldValue, changedFieldId, state) => {
            // Run additional callback first if provided
            if (additionalCallback) {
                try {
                    additionalCallback(newValue, oldValue, changedFieldId, state);
                } catch (error) {
                    console.error(`[StateManager] Error in additional callback for ${fieldId}:`, error);
                }
            }
            
            // Then trigger smart dependency calculation instead of manual calculateAll()
            if (state !== VALUE_STATES.CALCULATED && state !== VALUE_STATES.DERIVED) {
                calculateDependencyChain(changedFieldId);
            }
        });
    }
    
    /**
     * CALCULATION ORCHESTRATION: Batch calculation for multiple field changes
     * Useful when importing data or making multiple related changes
     * @param {Array} changedFieldIds - Array of field IDs that changed
     * @returns {Array} Array of field IDs that were recalculated
     */
    function calculateBatchDependencies(changedFieldIds) {
        if (calculationInProgress) {
            console.warn(`[StateManager] Calculation already in progress, skipping batch calculation`);
            return [];
        }
        
        calculationInProgress = true;
        const allCalculatedFields = [];
        
        try {
            console.log(`[StateManager] Starting batch dependency calculation for:`, changedFieldIds);
            
            // Mark all dependents dirty for all changed fields
            changedFieldIds.forEach(fieldId => markDependentsDirty(fieldId));
            
            // Get all affected fields and calculate in optimal order
            const affectedFields = getDirtyFields();
            const orderedFields = getCalculationOrder(affectedFields);
            
            // Calculate each field once in the correct order
            orderedFields.forEach(fieldId => {
                const result = triggerFieldCalculation(fieldId);
                if (result !== null) {
                    allCalculatedFields.push(fieldId);
                }
            });
            
            // Clear dirty status
            clearDirtyStatus(allCalculatedFields);
            
            console.log(`[StateManager] Batch calculation complete. Calculated ${allCalculatedFields.length} fields.`);
            
        } catch (error) {
            console.error(`[StateManager] Error in batch dependency calculation:`, error);
        } finally {
            calculationInProgress = false;
        }
        
        return allCalculatedFields;
    }
    
    /**
     * CALCULATION ORCHESTRATION: Get calculation order using topological sort
     * This ensures fields are calculated in the right order based on dependencies
     * @param {Array} targetFields - Specific fields to order (optional, uses all dirty fields if not provided)
     * @returns {Array} Field IDs in calculation order
     */
    function getCalculationOrder(targetFields = null) {
        // Use cached order if available and no specific fields requested
        if (!targetFields && calculationOrder.length > 0) {
            return calculationOrder.slice(); // Return copy of cached order
        }
        
        const fieldsToOrder = targetFields || [...calculatedFields];
        const visited = new Set();
        const temp = new Set();
        const order = [];
        
        // Helper function for depth-first topological sort
        const visit = (fieldId) => {
            if (temp.has(fieldId)) {
                console.warn(`[StateManager] Circular dependency detected with field ${fieldId}`);
                return; // Skip circular dependencies
            }
            
            if (!visited.has(fieldId)) {
                temp.add(fieldId);
                
                // Visit all dependents first (fields that depend on this field)
                if (fieldDependencies.has(fieldId)) {
                    fieldDependencies.get(fieldId).forEach(dependentId => {
                        // Only visit if it's in our target set
                        if (fieldsToOrder.includes(dependentId)) {
                            visit(dependentId);
                        }
                    });
                }
                
                temp.delete(fieldId);
                visited.add(fieldId);
                order.push(fieldId);
            }
        };
        
        // Start with fields that have calculations registered
        fieldsToOrder.forEach(fieldId => {
            if (fieldCalculations.has(fieldId)) {
                visit(fieldId);
            }
        });
        
        // Cache the order if we calculated for all fields
        if (!targetFields) {
            calculationOrder = order.slice();
        }
        
        console.log(`[StateManager] Calculated topological order for ${order.length} fields:`, order);
        return order;
    }
    
    /**
     * CALCULATION ORCHESTRATION: Check if a calculation is registered for a field
     * @param {string} fieldId - Field ID to check
     * @returns {boolean} True if a calculation is registered for this field
     */
    function hasCalculation(fieldId) {
        return fieldCalculations.has(fieldId);
    }
    
    /**
     * CALCULATION ORCHESTRATION: Get list of all registered calculation field IDs
     * @returns {Array} Array of field IDs that have calculations registered
     */
    function getRegisteredCalculations() {
        return Array.from(fieldCalculations.keys());
    }
    
    /**
     * Check if we're already in a calculation to prevent recursion
     */
    function isCalculationInProgress() {
        return calculationInProgress || calculationDepth > 0;
    }
    
    /**
     * Get a session reference value, which persists between Reference Mode toggles
     * @param {string} key - The key to retrieve from session reference state
     * @returns {string|null} The value or null if not found
     */
    function getSessionReferenceValue(key) {
        // Check if session reference state exists
        if (!window.TEUI.sessionReferenceState) {
            return null;
        }
        return window.TEUI.sessionReferenceState[key] || null;
    }

    /**
     * Set a session reference value, which persists between Reference Mode toggles
     * @param {string} key - The key to store in session reference state
     * @param {string} value - The value to store
     */
    function setSessionReferenceValue(key, value) {
        // Initialize if not exists
        if (!window.TEUI.sessionReferenceState) {
            window.TEUI.sessionReferenceState = {};
        }
        window.TEUI.sessionReferenceState[key] = value;
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
        exportDependencyGraph: exportDependencyGraph,
        loadReferenceData: loadReferenceData,           
        setValueInReferenceMode: setValueInReferenceMode, 
        setMuteApplicationStateUpdates: setMuteApplicationStateUpdates, // << NEW
        revertToLastImportedState: revertToLastImportedState, // << NEW
        getApplicationStateValue: getApplicationStateValue, // << NEW
        getActiveReferenceModeValue: getActiveReferenceModeValue, // << NEW
        getApplicationValue: getApplicationValue,
        getReferenceValue: getReferenceValue,
        getCurrentDisplayValue: getCurrentDisplayValue,
        getCorrespondingTCell: getCorrespondingTCell,
        getTCellValue: getTCellValue,
        setApplicationValue: setApplicationValue,
        setReferenceValue: setReferenceValue,
        buildReferenceState: buildReferenceState,
        emitFieldChanged: emitFieldChanged,
        registerCalculation: registerCalculation,
        triggerFieldCalculation: triggerFieldCalculation,
        calculateDependencyChain: calculateDependencyChain,
        addSmartListener: addSmartListener,
        calculateBatchDependencies: calculateBatchDependencies,
        hasCalculation: hasCalculation,
        getRegisteredCalculations: getRegisteredCalculations,
        getSessionReferenceValue: getSessionReferenceValue,
        setSessionReferenceValue: setSessionReferenceValue
    };
})();

// Initialize when the document is ready
document.addEventListener('DOMContentLoaded', function() {
    TEUI.StateManager.initialize();
});