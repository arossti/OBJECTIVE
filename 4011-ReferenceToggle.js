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
    console.log(`[ReferenceToggle] Standard changed to: ${newStandardKey}`);
    if (window.TEUI && TEUI.StateManager) {
        TEUI.StateManager.setValue(STANDARD_SELECTOR_ID, newStandardKey, TEUI.StateManager.VALUE_STATES.USER_MODIFIED);
        if (referenceMode) {
            // If already in reference mode, reload data and refresh UI for the new standard
            triggerFullUIRefreshForModeChange();
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

    if (!window.TEUI || !TEUI.StateManager || !TEUI.FieldManager || !TEUI.AppendixE) {
        console.error("[ReferenceToggle] Missing critical modules (StateManager, FieldManager, or AppendixE) for UI refresh.");
        return;
    }

    // Unconditionally mute application state updates for the duration of this UI refresh operation
    TEUI.StateManager.setMuteApplicationStateUpdates(true);

    try {
        const currentStandardKey = TEUI.StateManager.getValue(STANDARD_SELECTOR_ID);

        if (referenceMode) {
            if (!currentStandardKey) {
                console.warn("[ReferenceToggle] No reference standard selected (d_13 is empty). Cannot load reference data for display.");
            } else {
                TEUI.StateManager.loadReferenceData(currentStandardKey);
            }
        }

        const allUserEditableFields = TEUI.FieldManager.getAllUserEditableFields();
        if (!allUserEditableFields || Object.keys(allUserEditableFields).length === 0) {
            console.warn("[ReferenceToggle] No user-editable fields found via FieldManager.");
            return;
        }

        const fieldIds = Object.keys(allUserEditableFields);

        for (const fieldId of fieldIds) {
            const fieldDef = allUserEditableFields[fieldId];
            if (!fieldDef) continue;

            const currentValue = TEUI.StateManager.getValue(fieldId);
            
            if (fieldId === 'f_85' || fieldId === 'd_66' || fieldId === 'd_13') {
                const isRefModeActive = (window.TEUI && TEUI.ReferenceToggle && TEUI.ReferenceToggle.isReferenceMode());
                const activeDataSet = (window.TEUI && TEUI.StateManager && TEUI.StateManager.activeReferenceDataSet) 
                                    ? TEUI.StateManager.activeReferenceDataSet 
                                    : null;
                const expectedValueFromDataset = activeDataSet ? activeDataSet[fieldId] : 'activeReferenceDataSet N/A';
                
                console.log(`[ReferenceToggle UI REFRESH] For ${fieldId} (RefMode active: ${isRefModeActive}): ` +
                            `StateManager.getValue() returned: "${currentValue}". ` +
                            `Expected from activeReferenceDataSet: "${expectedValueFromDataset}"`);
            }

            TEUI.FieldManager.updateFieldDisplay(fieldId, currentValue, fieldDef);
            
            const element = document.getElementById(fieldId) || document.querySelector(`[data-field-id='${fieldId}']`);
            const inputElement = (element && element.matches('input, select, textarea')) ? element : (element ? element.querySelector('input, select, textarea') : null);
            const displayElement = (element && !inputElement && element.matches('[contenteditable="true"], [data-field-id]')) ? element : null;

            if (element) {
                if (referenceMode) {
                    const behavior = TEUI.AppendixE.getFieldBehavior(fieldId, currentStandardKey);
                    let lockField = false;

                    if (behavior === "Independently User-Editable in Reference Mode") {
                        lockField = false;
                    } else {
                        lockField = true;
                    }
                    
                    if (fieldDef.type === 'calculated' || fieldDef.type === 'derived') {
                        lockField = true;
                    }

                    // Get the actual slider input if this is a generic_slider cell
                    const actualSliderElement = fieldDef.type === 'generic_slider' 
                                                ? element.querySelector('input[type="range"].area-adjust-slider') 
                                                : null;

                    if (lockField) {
                        element.classList.add('reference-locked');
                        if (inputElement) inputElement.disabled = true;
                        if (actualSliderElement) actualSliderElement.disabled = true; // Lock the slider itself
                        if (displayElement) displayElement.setAttribute('contenteditable', 'false');
                    } else {
                        element.classList.remove('reference-locked');
                        if (inputElement) inputElement.disabled = false;
                        if (actualSliderElement) actualSliderElement.disabled = false; // Unlock the slider itself
                        if (displayElement) displayElement.setAttribute('contenteditable', 'true');
                    }
                } else {
                    element.classList.remove('reference-locked');
                    const isNormallyEditable = ['editable', 'number', 'dropdown', 'year_slider', 'percentage', 'coefficient', 'coefficient_slider', 'generic_slider'].includes(fieldDef.type);
                    const actualSliderElementForDesign = fieldDef.type === 'generic_slider' 
                                                         ? element.querySelector('input[type="range"].area-adjust-slider') 
                                                         : null;
                    
                    if (isNormallyEditable) {
                        if (inputElement) inputElement.disabled = false;
                        if (actualSliderElementForDesign) actualSliderElementForDesign.disabled = false; // Ensure slider is enabled
                        if (displayElement) displayElement.setAttribute('contenteditable', 'true');
                    } else { 
                        if (inputElement) inputElement.disabled = true; 
                        if (actualSliderElementForDesign) actualSliderElementForDesign.disabled = true; // Ensure non-editable slider is disabled
                        if (displayElement) displayElement.setAttribute('contenteditable', 'false');
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

  // Public API
  return {
    initialize,
    isReferenceMode
  };
})(); 