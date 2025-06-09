/**
 * OBC-StateManager.js
 * 
 * Simplified state management module for OBC Matrix
 * Handles three states: Default, User-Modified, and Imported
 * Provides global number formatting and reset functionality
 */

// Define the global namespace if it doesn't exist
window.TEUI = window.TEUI || {};

// OBC State Manager Module
window.TEUI.OBCStateManager = (function () {
  
  // Value state constants
  const VALUE_STATES = {
    DEFAULT: "default",           // Original default value
    USER_MODIFIED: "user-modified", // Value changed by user  
    IMPORTED: "imported"          // Value imported from file
  };

  // Private properties
  let fields = new Map();           // Map of all field values and states
  let listeners = new Map();        // Field change listeners
  let importedState = {};           // Store imported values for reset functionality

  /**
   * Global utility to format numbers for OBC Matrix
   * @param {string|number|null|undefined} value - The value to format
   * @param {string} [formatType='number'] - The format type
   * @returns {string} The formatted string
   */
  window.TEUI.formatNumber = function (value, formatType = "number") {
    // Handle N/A or null/undefined input
    if (value === null || value === undefined || String(value).trim().toUpperCase() === "N/A") {
      return "N/A";
    }

    // Handle raw format
    if (formatType === "raw") {
      return String(value);
    }

    // Parse numeric value
    const numValue = window.TEUI.parseNumeric(value, NaN);

    // Handle non-numeric values
    if (isNaN(numValue)) {
      if (typeof value === "string" && value.trim() !== "") return value;
      return "0.00";
    }

    try {
      // Handle different format types
      switch (formatType) {
        case "number":
        case "number-2dp":
          return numValue.toLocaleString(undefined, {
            minimumFractionDigits: 2,
            maximumFractionDigits: 2,
            useGrouping: false
          });
        
        case "number-0dp":
        case "integer":
          return numValue.toLocaleString(undefined, {
            minimumFractionDigits: 0,
            maximumFractionDigits: 0,
            useGrouping: false
          });
        
        case "number-3dp":
          return numValue.toLocaleString(undefined, {
            minimumFractionDigits: 3,
            maximumFractionDigits: 3,
            useGrouping: false
          });
        
        case "number-2dp-comma":
          return numValue.toLocaleString(undefined, {
            minimumFractionDigits: 2,
            maximumFractionDigits: 2,
            useGrouping: true  // Enable thousands separators (commas)
          });
        
        case "percent":
          return numValue.toLocaleString(undefined, {
            style: "percent",
            minimumFractionDigits: 0,
            maximumFractionDigits: 0
          });
        
        default:
          return numValue.toLocaleString(undefined, {
            minimumFractionDigits: 2,
            maximumFractionDigits: 2,
            useGrouping: false
          });
      }
    } catch (e) {
      console.error(`Error formatting value ${value} with format ${formatType}:`, e);
      return String(value);
    }
  };

  /**
   * Global utility to safely parse numeric values
   * @param {string|number|null|undefined} value - The value to parse
   * @param {number} [defaultValue=0] - The value to return if parsing fails
   * @returns {number} The parsed number or the default value
   */
  window.TEUI.parseNumeric = function (value, defaultValue = 0) {
    if (value === null || value === undefined) {
      return defaultValue;
    }
    
    let numericValue;
    if (typeof value === "string") {
      const cleanedValue = value.replace(/,/g, "").trim();
      if (cleanedValue === "" || cleanedValue.toUpperCase() === "N/A") {
        return defaultValue;
      }
      numericValue = parseFloat(cleanedValue);
    } else if (typeof value === "number") {
      numericValue = value;
    } else {
      numericValue = NaN;
    }
    
    return isNaN(numericValue) ? defaultValue : numericValue;
  };

  /**
   * Initialize the state manager
   */
  function initialize() {
    console.log("OBC StateManager: Initializing...");
    fields.clear();
    listeners.clear();
    importedState = {};
  }

  /**
   * Get the value of a field
   * @param {string} fieldId - The field ID
   * @returns {string|null} The field value or null if not found
   */
  function getValue(fieldId) {
    const fieldData = fields.get(fieldId);
    return fieldData ? fieldData.value : null;
  }

  /**
   * Get the state of a field
   * @param {string} fieldId - The field ID
   * @returns {string|null} The field state or null if not found
   */
  function getState(fieldId) {
    const fieldData = fields.get(fieldId);
    return fieldData ? fieldData.state : null;
  }

  /**
   * Set the value of a field
   * @param {string} fieldId - The field ID
   * @param {string|number} value - The value to set
   * @param {string} [state=VALUE_STATES.USER_MODIFIED] - The state to set
   */
  function setValue(fieldId, value, state = VALUE_STATES.USER_MODIFIED) {
    const oldValue = getValue(fieldId);
    const oldState = getState(fieldId);

    // Don't overwrite higher priority states with lower priority ones
    if (oldState === VALUE_STATES.USER_MODIFIED && state === VALUE_STATES.DEFAULT) {
      return;
    }
    if (oldState === VALUE_STATES.IMPORTED && state === VALUE_STATES.DEFAULT) {
      return;
    }

    // Store the new value and state
    fields.set(fieldId, {
      value: String(value),
      state: state
    });

    // Store imported values separately for reset functionality
    if (state === VALUE_STATES.IMPORTED) {
      importedState[fieldId] = String(value);
    }

    // Update the DOM element
    updateUI(fieldId, value);

    // Notify listeners
    notifyListeners(fieldId, value, oldValue, state);
  }

  /**
   * Add a listener for field changes
   * @param {string} fieldId - The field ID to listen to
   * @param {Function} callback - The callback function
   */
  function addListener(fieldId, callback) {
    if (!listeners.has(fieldId)) {
      listeners.set(fieldId, []);
    }
    listeners.get(fieldId).push(callback);
  }

  /**
   * Remove a listener for field changes
   * @param {string} fieldId - The field ID
   * @param {Function} callback - The callback function to remove
   */
  function removeListener(fieldId, callback) {
    const fieldListeners = listeners.get(fieldId);
    if (fieldListeners) {
      const index = fieldListeners.indexOf(callback);
      if (index > -1) {
        fieldListeners.splice(index, 1);
      }
    }
  }

  /**
   * Notify all listeners of a field change
   * @param {string} fieldId - The field ID that changed
   * @param {string} newValue - The new value
   * @param {string} oldValue - The old value
   * @param {string} state - The new state
   */
  function notifyListeners(fieldId, newValue, oldValue, state) {
    const fieldListeners = listeners.get(fieldId);
    if (fieldListeners) {
      fieldListeners.forEach(callback => {
        try {
          callback(newValue, oldValue, state);
        } catch (e) {
          console.error(`Error in listener for field ${fieldId}:`, e);
        }
      });
    }
  }

  /**
   * Update the UI element for a field
   * @param {string} fieldId - The field ID
   * @param {string|number} value - The value to display
   */
  function updateUI(fieldId, value) {
    const element = document.querySelector(`[data-field-id="${fieldId}"]`);
    if (element) {
      if (element.tagName === 'INPUT') {
        element.value = value;
      } else if (element.tagName === 'SELECT') {
        element.value = value;
      } else {
        // Check if this is a numeric field that might already have formatting
        const isNumericField = element.hasAttribute('data-type') && 
                              element.getAttribute('data-type') === 'numeric';
        
        if (isNumericField) {
          // For numeric fields, only update if the current content is unformatted
          const currentText = element.textContent.trim();
          const hasFormatting = currentText.includes(',') && currentText.includes('.');
          
          if (!hasFormatting) {
            // No formatting present, safe to update with raw value
            element.textContent = value;
          }
          // If formatting is present, preserve it (don't override)
        } else {
          // Non-numeric fields, update normally
          element.textContent = value;
        }
      }
      
      // Update CSS classes based on field state
      const fieldState = getState(fieldId);
      if (fieldState === VALUE_STATES.USER_MODIFIED) {
        element.classList.add('user-modified');
        element.classList.remove('default', 'imported');
      } else if (fieldState === VALUE_STATES.IMPORTED) {
        element.classList.add('imported');
        element.classList.remove('user-modified', 'default');
      } else {
        element.classList.add('default');
        element.classList.remove('user-modified', 'imported');
      }
    }
  }

  /**
   * Reset fields based on their current state
   * - User-modified fields: reset to default or imported value
   * - Imported fields: keep imported values
   * - Default fields: keep default values
   */
  function resetFields() {
    console.log("OBC StateManager: Resetting fields...");
    
    fields.forEach((fieldData, fieldId) => {
      if (fieldData.state === VALUE_STATES.USER_MODIFIED) {
        // If we have an imported value, reset to that; otherwise reset to default
        if (importedState[fieldId]) {
          setValue(fieldId, importedState[fieldId], VALUE_STATES.IMPORTED);
        } else {
          // Reset to default (empty or section-specific default)
          setValue(fieldId, "", VALUE_STATES.DEFAULT);
        }
      }
      // Imported and default fields remain unchanged
    });
  }

  /**
   * Import state from data (e.g., from CSV/Excel file)
   * @param {Object} data - Object with fieldId: value pairs
   */
  function importState(data) {
    console.log("OBC StateManager: Importing state...", data);
    
    Object.entries(data).forEach(([fieldId, value]) => {
      setValue(fieldId, value, VALUE_STATES.IMPORTED);
    });
  }

  /**
   * Export current state
   * @returns {Object} Object with fieldId: value pairs
   */
  function exportState() {
    const state = {};
    fields.forEach((fieldData, fieldId) => {
      state[fieldId] = fieldData.value;
    });
    return state;
  }

  /**
   * Get debug information about current state
   * @returns {Object} Debug information
   */
  function getDebugInfo() {
    return {
      fieldsCount: fields.size,
      listenersCount: listeners.size,
      importedFieldsCount: Object.keys(importedState).length,
      fields: Array.from(fields.entries()),
      importedState: importedState
    };
  }

  /**
   * Clear all state
   */
  function clear() {
    fields.clear();
    listeners.clear();
    importedState = {};
  }

  /**
   * Global input handler for field blur events
   * @param {Event} event - The blur event
   */
  function handleFieldBlur(event) {
    const fieldElement = event.target;
    const currentFieldId = fieldElement.getAttribute("data-field-id");
    
    if (!currentFieldId) return;
    
    let valueStr = fieldElement.textContent.trim();
    const originalValue = fieldElement.dataset.originalValue || "";
    
    // Check if the user actually made any changes
    const hasActualChanges = valueStr !== originalValue;
    
    if (!hasActualChanges) {
      // User clicked in but didn't change anything - no state change needed
      return;
    }
    
    // Handle numeric formatting if needed
    let numValue = window.TEUI.parseNumeric(valueStr, NaN);
    let displayValue = valueStr;
    
    // Apply formatting for numeric fields
    if (!isNaN(numValue)) {
      // Check if field is explicitly marked as numeric
      const isNumericField = fieldElement.hasAttribute('data-type') && 
                            fieldElement.getAttribute('data-type') === 'numeric';
      
      // Apply formatting based on field type
      if (isNumericField) {
        displayValue = window.TEUI.formatNumber(numValue, "number-2dp-comma");
      } else if (currentFieldId.includes('percent')) {
        displayValue = window.TEUI.formatNumber(numValue, "percent");
      } else {
        // Default formatting for numbers
        displayValue = window.TEUI.formatNumber(numValue, "number");
      }
    }
    
    // Update display with formatting first
    fieldElement.textContent = displayValue;
    
    // Store the RAW value in OBC StateManager (for calculations)
    // updateUI now preserves existing formatting, so this won't override
    setValue(currentFieldId, valueStr, VALUE_STATES.USER_MODIFIED);
  }

  /**
   * Initialize global input handlers for all editable fields
   * Call this after sections are rendered
   */
  function initializeGlobalInputHandlers() {
    console.log("OBC StateManager: Initializing global input handlers...");
    
    // Find all editable fields across all sections
    const editableFields = document.querySelectorAll('.editable[data-field-id]');
    
    editableFields.forEach((field) => {
      if (!field.hasOBCGlobalListeners) {
        // Prevent enter key from creating newlines
        field.addEventListener("keydown", (e) => {
          if (e.key === "Enter") {
            e.preventDefault();
            field.blur();
          }
        });
        
        // Handle field blur (when user finishes editing)
        field.addEventListener("blur", handleFieldBlur);
        
        // Visual feedback for editing state
        field.addEventListener("focus", () => {
          field.classList.add("editing");
          
          // Store original value for change detection on blur
          field.dataset.originalValue = field.textContent.trim();
          
          // Add temporary editing class for immediate blue styling (doesn't change state)
          const currentState = getState(field.getAttribute("data-field-id"));
          if (!currentState || currentState === VALUE_STATES.DEFAULT) {
            field.classList.add("editing-intent");
          }
        });
        
        field.addEventListener("focusout", () => {
          field.classList.remove("editing");
          field.classList.remove("editing-intent"); // Always remove temporary class
        });
        
        field.hasOBCGlobalListeners = true; // Mark as listener attached
      }
    });
    
    console.log(`OBC StateManager: Initialized handlers for ${editableFields.length} editable fields`);
  }

  // Public API
  return {
    VALUE_STATES: VALUE_STATES,
    initialize: initialize,
    getValue: getValue,
    getState: getState,
    setValue: setValue,
    addListener: addListener,
    removeListener: removeListener,
    resetFields: resetFields,
    importState: importState,
    exportState: exportState,
    getDebugInfo: getDebugInfo,
    clear: clear,
    initializeGlobalInputHandlers: initializeGlobalInputHandlers
  };
})();

// Auto-initialize when script loads
document.addEventListener('DOMContentLoaded', function() {
  if (window.TEUI && window.TEUI.OBCStateManager) {
    window.TEUI.OBCStateManager.initialize();
  }
}); 