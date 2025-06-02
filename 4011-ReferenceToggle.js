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
    
    if (window.TEUI && TEUI.StateManager) {
        // Always update StateManager first
        TEUI.StateManager.setValue(STANDARD_SELECTOR_ID, newStandardKey, TEUI.StateManager.VALUE_STATES.USER_MODIFIED);
        
        if (referenceMode) {
            // Step 1: Reload reference data immediately (synchronous)
            TEUI.StateManager.loadReferenceData(newStandardKey);
            
            // Step 2: Trigger UI refresh (synchronous)
            triggerFullUIRefreshForModeChange();
            
            // Step 3: Trigger calculations (single timeout for DOM stability)
            setTimeout(() => {
                if (window.TEUI.Calculator && typeof window.TEUI.Calculator.calculateAll === 'function') {
                    window.TEUI.Calculator.calculateAll();
                }
            }, 50); // Single 50ms delay for DOM stability
        } else {
            // In Design Mode, just reload reference data for when user enters Reference Mode later
            TEUI.StateManager.loadReferenceData(newStandardKey);
        }
    } else {
        console.error("[ReferenceToggle] StateManager not available to handle standard change.");
    }
  }

  function toggleReferenceView() {
    const oldMode = referenceMode;
    referenceMode = !referenceMode;
    
    console.log(`[ReferenceToggle DEBUG] 🔄 MODE SWITCH: ${oldMode ? 'Reference' : 'Design'} -> ${referenceMode ? 'Reference' : 'Design'}`);
    
    // Debug e_10 state before mode switch
    if (window.TEUI?.StateManager) {
      const currentE10 = window.TEUI.StateManager.getValue('e_10');
      const appE10 = window.TEUI.StateManager.getApplicationValue?.('e_10') || 'N/A';
      const refE10 = window.TEUI.StateManager.getReferenceValue?.('e_10') || 'N/A';
      const sessionRefE10 = window.TEUI.StateManager.getSessionReferenceValue?.('e_10') || 'N/A';
      
      console.log(`[ReferenceToggle DEBUG] 📊 BEFORE SWITCH - e_10 values:`);
      console.log(`  - Current (from getValue): ${currentE10}`);
      console.log(`  - Application state: ${appE10}`);
      console.log(`  - Reference state: ${refE10}`);
      console.log(`  - Session Reference state: ${sessionRefE10}`);
    }

    document.body.classList.toggle(BODY_CLASS, referenceMode);
    updateButtonAppearance();
    
    // V2 DUAL-STATE ARCHITECTURE: Enhanced mode switching
    if (referenceMode) {
        // Entering Reference Mode - build reference state and run calculations
        const currentStandard = window.TEUI.StateManager.getValue('d_13');
        console.log(`[ReferenceToggle DEBUG] 🏗️ Entering Reference Mode with standard: ${currentStandard}`);
        
        if (currentStandard) {
            console.log(`[ReferenceToggle DEBUG] 🔄 Building Reference State...`);
            window.TEUI.StateManager.buildReferenceState(currentStandard);
            
            // Use V2 Calculator orchestration if available
            if (window.TEUI.Calculator && typeof window.TEUI.Calculator.runAllCalculations === 'function') {
                console.log(`[ReferenceToggle DEBUG] 🧮 Running all calculations in Reference Mode...`);
                window.TEUI.Calculator.runAllCalculations('reference');
            } else if (window.TEUI.Calculator && typeof window.TEUI.Calculator.calculateAll === 'function') {
                console.log(`[ReferenceToggle DEBUG] 🧮 Running calculateAll in Reference Mode...`);
                window.TEUI.Calculator.calculateAll();
            }
        }
    } else {
        console.log(`[ReferenceToggle DEBUG] 🔄 Exiting Reference Mode, returning to Design Mode...`);
    }
    
    triggerFullUIRefreshForModeChange();
    
    // Debug e_10 state after mode switch
    if (window.TEUI?.StateManager) {
      setTimeout(() => {
        const newE10 = window.TEUI.StateManager.getValue('e_10');
        const appE10 = window.TEUI.StateManager.getApplicationValue?.('e_10') || 'N/A';
        const refE10 = window.TEUI.StateManager.getReferenceValue?.('e_10') || 'N/A';
        const sessionRefE10 = window.TEUI.StateManager.getSessionReferenceValue?.('e_10') || 'N/A';
        
        console.log(`[ReferenceToggle DEBUG] 📊 AFTER SWITCH - e_10 values:`);
        console.log(`  - Current (from getValue): ${newE10}`);
        console.log(`  - Application state: ${appE10}`);
        console.log(`  - Reference state: ${refE10}`);
        console.log(`  - Session Reference state: ${sessionRefE10}`);
      }, 100); // Small delay to let calculations complete
    }
  }

  function triggerFullUIRefreshForModeChange() {
    if (!window.TEUI || !TEUI.StateManager) {
        console.error("[ReferenceToggle] Missing StateManager for UI refresh.");
        return;
    }

    // Check for FieldManager - if missing, use fallback
    let allUserEditableFields = {};
    if (TEUI.FieldManager && typeof TEUI.FieldManager.getAllUserEditableFields === 'function') {
        allUserEditableFields = TEUI.FieldManager.getAllUserEditableFields();
    } else {
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

        for (const fieldId of fieldIds) {
            const fieldDef = allUserEditableFields[fieldId];
            if (!fieldDef) continue;

            // CRITICAL: Skip Section 01 calculated fields that should always display dual-engine values
            const section01CalculatedFields = ['d_6', 'd_8', 'e_10', 'h_6', 'h_8', 'h_10', 'k_6', 'k_8', 'k_10', 'j_8', 'j_10', 'i_10'];
            if (section01CalculatedFields.includes(fieldId)) {
                // console.log(`[ReferenceToggle] Skipping ${fieldId} - Section 01 dual-engine field`); // Keep this useful skip log if desired, but commented for now
                continue;
            }

            let displayValue;

            if (referenceMode) {
                displayValue = TEUI.StateManager.getValue(fieldId); // Mode-aware, gets from activeReferenceDataSet
            } else {
                displayValue = TEUI.StateManager.getApplicationValue ? 
                              TEUI.StateManager.getApplicationValue(fieldId) : 
                              TEUI.StateManager.getValue(fieldId);
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
                            // Also add reference-locked class to the actual input/select element for styling
                            inputElement.classList.add('reference-locked');
                        }
                        if (element.hasAttribute('contenteditable')) {
                            element.setAttribute('contenteditable', 'false');
                        }
                    } else {
                        element.classList.remove('reference-locked');
                        const inputElement = element.querySelector('input, select, textarea') || 
                                           (element.matches('input, select, textarea') ? element : null);
                        if (inputElement) {
                            inputElement.disabled = false;
                            // Remove reference-locked class from the actual input/select element
                            inputElement.classList.remove('reference-locked');
                        }
                        if (element.hasAttribute('contenteditable')) {
                            element.setAttribute('contenteditable', 'true');
                        }
                    }
                } else {
                    // In Design Mode - restore normal editability
                    element.classList.remove('reference-locked');
                    const isNormallyEditable = ['editable', 'number', 'dropdown', 'year_slider', 'percentage', 'coefficient', 'coefficient_slider', 'generic_slider'].includes(fieldDef.type);
                    
                    const inputElement = element.querySelector('input, select, textarea') || 
                                       (element.matches('input, select, textarea') ? element : null);
                    
                    if (isNormallyEditable) {
                        if (inputElement) {
                            inputElement.disabled = false;
                            // Remove reference-locked class from the actual input/select element
                            inputElement.classList.remove('reference-locked');
                        }
                        if (element.hasAttribute('contenteditable')) element.setAttribute('contenteditable', 'true');
                    } else { 
                        if (inputElement) {
                            inputElement.disabled = true; 
                            // Remove reference-locked class even for non-editable elements
                            inputElement.classList.remove('reference-locked');
                        }
                        if (element.hasAttribute('contenteditable')) element.setAttribute('contenteditable', 'false');
                    }
                }
            }
        }
        // Call section-specific display updates
        if (TEUI.SectionModules && TEUI.SectionModules.sect05 && typeof TEUI.SectionModules.sect05.updateI39Display === 'function') {
            TEUI.SectionModules.sect05.updateI39Display();
        }
    } finally {
        // ALWAYS Unmute application state updates after the refresh attempt
        TEUI.StateManager.setMuteApplicationStateUpdates(false);
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