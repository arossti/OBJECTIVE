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

  function initialize() {
    const toggleBtn = document.getElementById(BUTTON_ID);
    if (toggleBtn) {
      toggleBtn.addEventListener('click', toggleReferenceView);
      // Set initial button state (assuming default is Design Mode)
      updateButtonAppearance();
    } else {
      console.warn('Reference Toggle Button not found.');
    }
  }

  function toggleReferenceView() {
    referenceMode = !referenceMode;
    console.log(`Toggling reference mode: ${referenceMode ? 'ON' : 'OFF'}`); // Debug log

    // Toggle body class for styling
    document.body.classList.toggle(BODY_CLASS, referenceMode);

    // Update button text and appearance
    updateButtonAppearance();

    // Refresh the display based on the new mode
    refreshReferenceDisplay(); 
    /* // Keep placeholder logs for now until refresh is fully tested
    if (referenceMode) {
        console.log("Reference Mode Activated - placeholder for refreshReferenceDisplay()");
    } else {
        console.log("Design Mode Activated - placeholder for restoring display");
    }
    */
  }

  // Calls the appropriate handler in each section module
  function refreshReferenceDisplay() {
    console.log("ReferenceToggle: Refreshing display for all sections..."); // Debug
    // Check if TEUI and SectionModules exist
    if (!window.TEUI || !window.TEUI.SectionModules) {
        console.error("Cannot refresh reference display: TEUI.SectionModules not found.");
        return;
    }
    Object.values(TEUI.SectionModules).forEach(module => {
      // Check if module and its referenceHandler exist and are functions
      if (module && typeof module.referenceHandler === 'object' && module.referenceHandler !== null) {
        if (referenceMode && typeof module.referenceHandler.updateReferenceDisplay === 'function') {
          try {
            module.referenceHandler.updateReferenceDisplay();
          } catch (e) {
            console.error(`Error calling updateReferenceDisplay for module:`, module, e);
          }
        } else if (!referenceMode && typeof module.referenceHandler.restoreDisplay === 'function') {
          try {
            module.referenceHandler.restoreDisplay();
          } catch (e) {
            console.error(`Error calling restoreDisplay for module:`, module, e);
          }
        }
      } else {
        // Optional: Warn if a module is missing the handler structure
        // console.warn("Module found without a valid referenceHandler:", module);
      }
    });
    // TODO: Update comparison values if in reference mode (Phase 4)
    // if (referenceMode && TEUI.ReferenceComparison) {
    //   TEUI.ReferenceComparison.updateAllComparisons();
    // }
  }

  function updateButtonAppearance() {
      const toggleBtn = document.getElementById(BUTTON_ID);
      if (!toggleBtn) return;
      
      if (referenceMode) {
          toggleBtn.textContent = 'Show Design';
          // Switch Bootstrap classes for appearance
          toggleBtn.classList.remove('btn-danger'); 
          toggleBtn.classList.add('btn-primary'); // Use standard blue for active state
      } else {
          toggleBtn.textContent = 'Show Reference';
          // Switch back to default Bootstrap classes
          toggleBtn.classList.remove('btn-primary');
          toggleBtn.classList.add('btn-danger'); // Use standard red for inactive state
      }
  }

  function isReferenceMode() {
    return referenceMode;
  }

  // Public API
  return {
    initialize,
    isReferenceMode
    // toggleReferenceView, // Expose if needed for external control
    // refreshReferenceDisplay // Expose when implemented
  };
})(); 