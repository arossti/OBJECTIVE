/**
 * 4011-ReferenceManager.js
 * Service to manage access to reference standard values based on the current selection.
 * It interacts with TEUI.ReferenceValues for data and TEUI.StateManager for the current standard.
 */

// Create TEUI namespace if it doesn't exist
window.TEUI = window.TEUI || {};

TEUI.ReferenceManager = (function() {
  let currentStandard = null;

  function fetchInitialStandard() {
    // console.log("[ReferenceManager] fetchInitialStandard called by teui-rendering-complete event.");
    currentStandard = TEUI.StateManager?.getValue('d_13');
    if (!currentStandard) {
        // console.warn("ReferenceManager: Could not get initial standard from d_13 after rendering. Defaulting might occur.");
        const d13Field = TEUI.FieldManager?.getField('d_13');
        currentStandard = d13Field?.defaultValue || null;
    }
    // console.log(`ReferenceManager: Initialized with standard after rendering: ${currentStandard}`);
  }

  function initialize() {
    // Ensure core dependencies are loaded
    if (!window.TEUI || !window.TEUI.StateManager || !window.TEUI.ReferenceValues) {
        console.error("ReferenceManager: Missing core dependencies (StateManager or ReferenceValues).");
        return;
    }

    // Listen for standard selection changes from Section 2 dropdown (d_13)
    TEUI.StateManager.addListener('d_13', function(newValue) {
      currentStandard = newValue;
      console.log(`[ReferenceManager] d_13 changed to: ${newValue}, immediately loading reference data`);
      
      // ALWAYS load reference data when standard changes, regardless of current mode
      if (newValue && newValue.trim() !== '') {
        TEUI.StateManager.loadReferenceData(newValue);
      }
      
      // If currently in Reference Mode, also refresh the UI display
      if (window.TEUI.ReferenceToggle && TEUI.ReferenceToggle.isReferenceMode()) {
        setTimeout(() => {
            if (TEUI.ReferenceToggle.isReferenceMode()) {
                 TEUI.ReferenceToggle.refreshAllSectionsDisplay();
            }
        }, 50); 
      }
    });

    // Listen for teui-rendering-complete to fetch the initial standard value
    document.addEventListener('teui-rendering-complete', fetchInitialStandard);
  }

  /**
   * Get a reference value for the current standard and field ID.
   * @param {string} fieldId - The field ID (e.g., "B.4") corresponding to the row identifier in DEEPSTATE.
   * @returns {string|null} The reference value string or null if not found.
   */
  function getValue(fieldId) {
    if (!currentStandard) {
      // console.warn(`ReferenceManager.getValue: Current standard not set. Cannot get value for ${fieldId}`);
      return null;
    }
    return TEUI.ReferenceValues.getValue(currentStandard, fieldId);
  }

  /**
   * Get the targetCell ID for a given reference field ID under the current standard.
   * @param {string} fieldId - The field ID (e.g., "B.4") corresponding to the row identifier in DEEPSTATE.
   * @returns {string|null} The target DOM cell ID (e.g., "f_85") or null.
   */
   function getTargetCell(fieldId) {
     if (!currentStandard) return null;
     return TEUI.ReferenceValues.getTargetCell(currentStandard, fieldId);
   }

   /**
    * Get all defined fields (with value, section, targetCell) for the current standard.
    * @returns {Object|null} An object mapping field IDs to their data, or null if standard not set/found.
    */
   function getCurrentStandardFields() {
     if (!currentStandard) return null;
     return TEUI.ReferenceValues.getStandardFields(currentStandard);
   }

  /**
   * Checks if a field is primarily defined by the reference code standard.
   * Used to determine if a field should be locked/overwritten in Reference Mode.
   * Excludes fields shared directly from the Design model (like area, volume) 
   * and fields designated as editable even in reference mode.
   * @param {string} fieldId - The DOM data-field-id (e.g., "h_15", "f_85").
   * @returns {boolean} True if the field value comes from the code standard.
   */
  function isCodeDefinedField(fieldId) {
    // Fields directly shared/synced from the Design model (should NOT be locked)
    const sharedFields = [
      'h_15',   // Conditioned Area (S2)
      'd_105',  // Volume (S12)
      'd_63'    // Occupant Count (S9)
      // Add other essential shared fields as identified
    ];

    // Fields that should remain editable even when in Reference Mode
    const editableReferenceFields = [
      'h_12'    // Reporting Period (S2)
      // Add any others as needed
    ];

    // If it's shared or explicitly editable-in-reference, it's NOT code-defined
    if (sharedFields.includes(fieldId) || editableReferenceFields.includes(fieldId)) {
      return false;
    }

    // Otherwise, assume it *could* be code-defined. The display logic will
    // check if a value actually *exists* for the current standard.
    // This function mainly filters out the explicitly shared/editable ones.
    return true; 
  }

  /**
   * Checks if a specific field should remain user-editable when Reference Mode is active.
   * @param {string} fieldId - The DOM data-field-id.
   * @returns {boolean} True if the field should be editable in reference mode.
   */
  function isEditableInReferenceMode(fieldId) {
    const editableReferenceFields = [
      'h_12'    // Reporting Period (S2)
      // Add any other reference fields that should remain editable
    ];
    return editableReferenceFields.includes(fieldId);
  }

  // --- Generic Reference Handler Factory (Moved INSIDE IIFE) --- 

  /**
   * Creates a standardized reference handler object for a given section.
   * @param {string} sectionId - The HTML ID of the section container (e.g., 'envelopeTransmissionLosses').
   * @param {string} sectionName - The name used for filtering in ReferenceValues (e.g., 'Transmission Losses').
   * @param {Function} sectionCalculateAll - Reference to the section's own calculateAll function.
   * @param {Function} [sectionRecalculateRow] - Optional: Reference to a function that recalculates a specific row/component (like S11's calculateComponentRow).
   * @param {Object} [componentConfig] - Optional: Configuration mapping rows/inputs for sectionRecalculateRow (like S11's componentConfig).
   * @returns {object} A reference handler object with initialize, updateReferenceDisplay, and restoreDisplay methods.
   */
  function createReferenceHandler(config) {
    const { 
        sectionId, 
        sectionName, 
        sectionCalculateAll, 
        sectionRecalculateRow, 
        componentConfig,
        sectionUpdateIndicators // Added callback for indicators
    } = config;

    if (!sectionId || !sectionName || !sectionCalculateAll) {
        console.error(`createReferenceHandler: Missing required config properties for section: ${sectionName || sectionId}`);
        // Return a dummy handler to avoid errors
        return { initialize: ()=>{}, updateReferenceDisplay: ()=>{}, restoreDisplay: ()=>{} };
    }

    // --- Private Helper --- 
    function formatReferenceValue(targetCellId, rawValue) {
        // Basic formatting based on target cell ID conventions
        const numValue = parseFloat(rawValue);
        if (isNaN(numValue)) return rawValue; // Return original if not parseable

        if (targetCellId.startsWith('f_')) { // RSI
             return window.TEUI.formatNumber?.(numValue, 'number') || rawValue;
        } else if (targetCellId.startsWith('g_')) { // U-Value
             return window.TEUI.formatNumber?.(numValue, 'W/m2') || rawValue;
        } else if (targetCellId === 'd_97') { // Special TBP % display
            return window.TEUI.formatNumber?.(numValue * 100, 'number') || rawValue;
        } else if (targetCellId.startsWith('h_')) { // Often percentage or specific unit
             // Heuristic: If value is between 0 and 1, format as percent, otherwise number
             // This might need refinement based on specific section needs
             if (numValue > 0 && numValue <= 1 && !targetCellId.includes('113') && !targetCellId.includes('116')) { 
                 return window.TEUI.formatNumber?.(numValue, 'percent') || rawValue;
             } else {
                return window.TEUI.formatNumber?.(numValue, 'number') || rawValue;
             }
        } else {
             return window.TEUI.formatNumber?.(numValue, 'number') || rawValue; // Default formatting
        }
    }

    // --- Returned Handler Object --- 
    return {
        initialize: function() { /* Placeholder for future use */ },

        updateReferenceDisplay: function() {
            const sectionContainer = document.getElementById(sectionId);
            if (!sectionContainer) return;
            const currentStandard = TEUI.ReferenceManager?.getCurrentStandard();
            if (!currentStandard) return;

            const standardFields = TEUI.ReferenceValues?.getStandardFields(currentStandard);
            if (!standardFields) return;

            // console.warn(`Ref Handler (${sectionName}): Updating display for standard: ${currentStandard}`);

            Object.entries(standardFields).forEach(([fieldId, fieldData]) => {
                if (fieldData.section !== sectionName || !fieldData.targetCell) return;

                const element = sectionContainer.querySelector(`[data-field-id="${fieldData.targetCell}"]`);
                if (element) {
                    // Save original value
                    if (!element.hasAttribute('data-original-value')) {
                        let originalValue = element.value !== undefined ? element.value : element.textContent;
                        element.setAttribute('data-original-value', originalValue);
                    }

                    // Display formatted reference value
                    const formattedRefValue = formatReferenceValue(fieldData.targetCell, fieldData.value);
                     if (element.value !== undefined) {
                         element.value = formattedRefValue;
                     } else {
                         element.textContent = formattedRefValue;
                     }

                    // Lock/Unlock based on definition
                    const isLocked = TEUI.ReferenceManager.isCodeDefinedField(fieldData.targetCell) && 
                                     !TEUI.ReferenceManager.isEditableInReferenceMode(fieldData.targetCell);
                    
                    element.classList.toggle('reference-locked', isLocked);
                    element.toggleAttribute('data-locked', isLocked); // Keep attribute for CSS selector

                    if (isLocked) {
                        element.setAttribute('disabled', '');
                        element.removeAttribute('contenteditable');
                    } else {
                        element.removeAttribute('disabled');
                        // Only restore contenteditable if the element was originally editable
                        if (element.classList.contains('editable')) {
                            element.setAttribute('contenteditable', 'true');
                        }
                    }

                    // Trigger row recalculation if applicable function provided
                    if (sectionRecalculateRow && componentConfig) {
                        const currentRowNumber = parseInt(fieldData.targetCell.split('_')[1]);
                        const componentConf = componentConfig.find(conf => conf.row === currentRowNumber);
                        if (componentConf) {
                            // console.warn(`  -> Calling sectionRecalculateRow for row ${currentRowNumber} (using reference value via fieldId: ${fieldId}).`);
                            sectionRecalculateRow(currentRowNumber, componentConf, fieldId); // Pass original fieldId
                        }
                    }
                    
                    // Update indicators if function provided
                    if (sectionUpdateIndicators) {
                        const currentRowNumber = parseInt(fieldData.targetCell.split('_')[1]);
                        sectionUpdateIndicators(currentRowNumber);
                    }
                }
            });
            // console.warn(`Ref Handler (${sectionName}): Finished updateReferenceDisplay.`);
        },

        restoreDisplay: function() {
            const sectionContainer = document.getElementById(sectionId);
            if (!sectionContainer) return;

            // console.warn(`Ref Handler (${sectionName}): Restoring design display`);

            const elements = sectionContainer.querySelectorAll('[data-original-value]');
            elements.forEach(element => {
                const originalValue = element.getAttribute('data-original-value');
                if (element.value !== undefined) {
                    element.value = originalValue;
                } else {
                    element.textContent = originalValue;
                }
                element.removeAttribute('data-original-value');
                element.removeAttribute('data-locked');
                element.removeAttribute('disabled');
                element.classList.remove('reference-locked');
                // Only restore contenteditable if the element was originally editable
                if (element.classList.contains('editable')) {
                     element.setAttribute('contenteditable', 'true');
                }
            });

            // Recalculate the entire section using its design values
            if (typeof sectionCalculateAll === 'function') {
                // console.warn(`Ref Handler (${sectionName}): Calling sectionCalculateAll to restore design state.`);
                sectionCalculateAll();
            } else {
                 console.error(`Ref Handler (${sectionName}): sectionCalculateAll function is not valid!`);
            }
        }
    };
  }

  // Public API
  return {
    initialize,
    getValue,
    getTargetCell,
    getCurrentStandardFields,
    isCodeDefinedField,
    isEditableInReferenceMode,
    getCurrentStandard: function() { return currentStandard; },
    createReferenceHandler
  };
})();

// Call initialize on DOMContentLoaded
document.addEventListener('DOMContentLoaded', function() {
    if (window.TEUI && TEUI.ReferenceManager) {
        TEUI.ReferenceManager.initialize();
    }
}); 