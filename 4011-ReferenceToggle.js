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

    // TODO: Replace this placeholder with actual refresh logic later
    // refreshReferenceDisplay(); 
    if (referenceMode) {
        console.log("Reference Mode Activated - placeholder for refreshReferenceDisplay()");
    } else {
        console.log("Design Mode Activated - placeholder for restoring display");
    }
  }

  // Placeholder for future integration
  // function refreshReferenceDisplay() {
  //   Object.values(TEUI.SectionModules).forEach(module => {
  //     if (module.referenceHandler) {
  //       if (referenceMode) {
  //         module.referenceHandler.updateReferenceDisplay();
  //       } else {
  //         module.referenceHandler.restoreDisplay();
  //       }
  //     }
  //   });
  // }

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