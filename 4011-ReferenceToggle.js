/**
 * 4011-ReferenceToggle.js
 * Module to handle switching between Design and Reference Model views.
 */

// Create TEUI namespace if it doesn't exist
window.TEUI = window.TEUI || {};

TEUI.ReferenceToggle = (function() {
  let referenceMode = false;
  const BODY_CLASS = 'reference-mode';
  const BUTTON_ID = 'toggleReferenceBtn';
  const STANDARD_SELECTOR_ID = 'd_13'; // ID of the reference standard dropdown

  function initialize() {
    const toggleBtn = document.getElementById(BUTTON_ID);
    if (toggleBtn) {
      toggleBtn.addEventListener('click', toggleReferenceView);
      updateButtonAppearance();
    } else {
      console.warn('[ReferenceToggle] Toggle Button not found.');
    }

    // Add listener for changes to the reference standard selector (d_13)
    const standardSelector = document.getElementById(STANDARD_SELECTOR_ID) || document.querySelector(`[data-field-id='${STANDARD_SELECTOR_ID}']`);
    if (standardSelector) {
        // Ensure the listener is attached to the actual select element if d_13 is a more complex component
        const actualSelect = standardSelector.tagName === 'SELECT' ? standardSelector : standardSelector.querySelector('select');
        if (actualSelect) {
            actualSelect.addEventListener('change', handleStandardChange);
        } else {
            console.warn(`[ReferenceToggle] SELECT element for ${STANDARD_SELECTOR_ID} not found.`);
        }
    } else {
        console.warn(`[ReferenceToggle] Standard selector dropdown ${STANDARD_SELECTOR_ID} not found.`);
    }
  }

  function handleStandardChange(event) {
    const newStandardKey = event.target.value;
    console.log(`[ReferenceToggle] Standard changed to: ${newStandardKey} (Reference Mode: ${referenceMode})`);
    
    if (window.TEUI && TEUI.StateManager) {
        // Update Application state (this will trigger ReferenceManager to reload reference data)
        TEUI.StateManager.setValue(STANDARD_SELECTOR_ID, newStandardKey, TEUI.StateManager.VALUE_STATES.USER_MODIFIED);
        
        if (referenceMode) {
            // If already in reference mode, ensure reference data is loaded and refresh UI
            console.log(`[ReferenceToggle] In Reference Mode - reloading data for ${newStandardKey}`);
            
            // Give the ReferenceManager a moment to process the d_13 change
            setTimeout(() => {
                triggerFullUIRefreshForModeChange();
            }, 100); 
        }
    } else {
        console.error("[ReferenceToggle] StateManager not available to handle standard change.");
    }
  }

  function toggleReferenceView() {
    referenceMode = !referenceMode;
    console.log(`[ReferenceToggle] Toggling reference mode: ${referenceMode ? 'ON' : 'OFF'}`);

    document.body.classList.toggle(BODY_CLASS, referenceMode);
    updateButtonAppearance();
    triggerFullUIRefreshForModeChange();
  }

  function triggerFullUIRefreshForModeChange() {
    console.log("[ReferenceToggle] Triggering Full UI Refresh for Mode Change. Reference Mode: ", referenceMode);

    if (!window.TEUI || !TEUI.StateManager) {
        console.error("[ReferenceToggle] Missing StateManager for UI refresh.");
        return;
    }

    // Check for FieldManager - if missing, use fallback
    let allUserEditableFields = {};
    if (TEUI.FieldManager && typeof TEUI.FieldManager.getAllUserEditableFields === 'function') {
        allUserEditableFields = TEUI.FieldManager.getAllUserEditableFields();
    } else {
        console.warn("[ReferenceToggle] FieldManager not available, using basic fallback for common fields");
        // Basic fallback - target the key fields we know should work
        allUserEditableFields = {
            'd_53': { type: 'percentage' },
            'd_52': { type: 'percentage' }, 
            'f_85': { type: 'editable' },
            'f_86': { type: 'editable' },
            'g_88': { type: 'editable' },
            'g_89': { type: 'editable' },
            'd_13': { type: 'dropdown' }
        };
    }

    // CRITICAL: Ensure d_13 is always included as it's required for Reference Mode to work
    if (!allUserEditableFields[STANDARD_SELECTOR_ID]) {
        allUserEditableFields[STANDARD_SELECTOR_ID] = { type: 'dropdown' };
        console.log(`[ReferenceToggle] Added ${STANDARD_SELECTOR_ID} to user-editable fields list`);
    }

    // Unconditionally mute application state updates for the duration of this UI refresh operation
    TEUI.StateManager.setMuteApplicationStateUpdates(true);

    try {
        const currentStandardKey = TEUI.StateManager.getValue(STANDARD_SELECTOR_ID);

        if (referenceMode) {
            if (!currentStandardKey) {
                console.warn("[ReferenceToggle] No reference standard selected (d_13 is empty). Cannot load reference data for display.");
            } else {
                console.log(`[ReferenceToggle] Loading reference data for standard: ${currentStandardKey}`);
                TEUI.StateManager.loadReferenceData(currentStandardKey);
            }
        }

        if (!allUserEditableFields || Object.keys(allUserEditableFields).length === 0) {
            console.warn("[ReferenceToggle] No user-editable fields found.");
            return;
        }

        const fieldIds = Object.keys(allUserEditableFields);
        console.log(`[ReferenceToggle] Updating ${fieldIds.length} fields for mode: ${referenceMode ? 'Reference' : 'Design'}`);

        for (const fieldId of fieldIds) {
            const fieldDef = allUserEditableFields[fieldId];
            if (!fieldDef) continue;

            // CRITICAL: Skip Section 01 calculated fields that should always display dual-engine values
            const section01CalculatedFields = ['d_6', 'd_8', 'e_10', 'h_6', 'h_8', 'h_10', 'k_6', 'k_8', 'k_10', 'j_8', 'j_10', 'i_10'];
            if (section01CalculatedFields.includes(fieldId)) {
                console.log(`[ReferenceToggle] Skipping ${fieldId} - Section 01 dual-engine field`);
                continue;
            }

            let displayValue;

            if (referenceMode) {
                displayValue = TEUI.StateManager.getValue(fieldId); // Mode-aware, gets from activeReferenceDataSet
                console.log(`[ReferenceToggle] ${fieldId} Reference Mode value: "${displayValue}"`);
            } else {
                // FIXED: Use getApplicationValue() instead of getValue with non-existent second parameter
                displayValue = TEUI.StateManager.getApplicationValue ? 
                              TEUI.StateManager.getApplicationValue(fieldId) : 
                              TEUI.StateManager.getValue(fieldId);
                console.log(`[ReferenceToggle] ${fieldId} Design Mode value: "${displayValue}"`);
            }

            // Update the field display
            if (TEUI.FieldManager && typeof TEUI.FieldManager.updateFieldDisplay === 'function') {
                TEUI.FieldManager.updateFieldDisplay(fieldId, displayValue, fieldDef);
            } else {
                // Basic fallback - directly update the DOM element
                const element = document.getElementById(fieldId) || document.querySelector(`[data-field-id='${fieldId}']`);
                if (element) {
                    if (element.tagName === 'SELECT') {
                        element.value = displayValue;
                    } else if (element.tagName === 'INPUT') {
                        element.value = displayValue;
                    } else if (element.hasAttribute('contenteditable')) {
                        element.textContent = displayValue;
                    } else {
                        element.textContent = displayValue;
                    }
                    console.log(`[ReferenceToggle] Updated ${fieldId} DOM directly to: "${displayValue}"`);
                }
            }
            
            const element = document.getElementById(fieldId) || document.querySelector(`[data-field-id='${fieldId}']`);

            if (element) {
                if (referenceMode) {
                    // In Reference Mode - check if field should be editable
                    let lockField = true; // Default: lock fields in Reference Mode
                    
                    // SPECIAL CASE: d_13 (reference standard selector) must ALWAYS be editable in Reference Mode
                    if (fieldId === 'd_13') {
                        lockField = false;
                        console.log(`[ReferenceToggle] ${fieldId} (standard selector) - keeping editable in Reference Mode`);
                    } else {
                        // Check AppendixE if available, otherwise lock other fields
                        if (TEUI.AppendixE && typeof TEUI.AppendixE.getFieldBehavior === 'function') {
                            const behavior = TEUI.AppendixE.getFieldBehavior(fieldId, currentStandardKey);
                            lockField = behavior !== "Independently User-Editable in Reference Mode";
                        } else {
                            lockField = true; // Lock all other fields by default
                        }
                        
                        if (fieldDef.type === 'calculated' || fieldDef.type === 'derived') {
                            lockField = true;
                        }
                    }

                    // Apply locking
                    if (lockField) {
                        element.classList.add('reference-locked');
                        const inputElement = element.querySelector('input, select, textarea') || 
                                           (element.matches('input, select, textarea') ? element : null);
                        if (inputElement) {
                            inputElement.disabled = true;
                            console.log(`[ReferenceToggle] ${fieldId} - disabled input element`);
                        }
                        if (element.hasAttribute('contenteditable')) {
                            element.setAttribute('contenteditable', 'false');
                            console.log(`[ReferenceToggle] ${fieldId} - set contenteditable=false`);
                        }
                    } else {
                        element.classList.remove('reference-locked');
                        const inputElement = element.querySelector('input, select, textarea') || 
                                           (element.matches('input, select, textarea') ? element : null);
                        if (inputElement) {
                            inputElement.disabled = false;
                            console.log(`[ReferenceToggle] ${fieldId} - enabled input element`);
                        }
                        if (element.hasAttribute('contenteditable')) {
                            element.setAttribute('contenteditable', 'true');
                            console.log(`[ReferenceToggle] ${fieldId} - set contenteditable=true`);
                        }
                    }
                } else {
                    // In Design Mode - restore normal editability
                    element.classList.remove('reference-locked');
                    const isNormallyEditable = ['editable', 'number', 'dropdown', 'year_slider', 'percentage', 'coefficient', 'coefficient_slider'].includes(fieldDef.type);
                    
                    const inputElement = element.querySelector('input, select, textarea') || 
                                       (element.matches('input, select, textarea') ? element : null);
                    
                    if (isNormallyEditable) {
                        if (inputElement) inputElement.disabled = false;
                        if (element.hasAttribute('contenteditable')) element.setAttribute('contenteditable', 'true');
                    } else { 
                        if (inputElement) inputElement.disabled = true; 
                        if (element.hasAttribute('contenteditable')) element.setAttribute('contenteditable', 'false');
                    }
                }
            }
        }
        console.log("[ReferenceToggle] Full UI Refresh finished.");
    } finally {
        // ALWAYS Unmute application state updates after the refresh attempt
        TEUI.StateManager.setMuteApplicationStateUpdates(false);
        console.log("[ReferenceToggle] StateManager application state updates unmuted.");
    }
  }

  function updateButtonAppearance() {
      const toggleBtn = document.getElementById(BUTTON_ID);
      if (!toggleBtn) return;
      
      if (referenceMode) {
          toggleBtn.textContent = 'Show Design';
          toggleBtn.classList.remove('btn-danger'); 
          toggleBtn.classList.add('btn-primary'); 
      } else {
          toggleBtn.textContent = 'Show Reference';
          toggleBtn.classList.remove('btn-primary');
          toggleBtn.classList.add('btn-danger'); 
      }
  }

  function isReferenceMode() {
    return referenceMode;
  }

  function refreshAllSectionsDisplay() {
    if (referenceMode) {
      console.log('[ReferenceToggle] Refreshing all sections display for Reference Mode');
      triggerFullUIRefreshForModeChange();
    }
  }

  // Public API
  return {
    initialize,
    isReferenceMode,
    refreshAllSectionsDisplay
  };
})(); 