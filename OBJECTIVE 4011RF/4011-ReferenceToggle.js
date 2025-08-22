/**
 * 4011-ReferenceToggle.js
 * MODERNIZED FOR PATTERN A DUAL-STATE ARCHITECTURE
 * Module to handle switching between Target and Reference Model views across ALL sections.
 */

// Create TEUI namespace if it doesn't exist
window.TEUI = window.TEUI || {};

TEUI.ReferenceToggle = (function () {
  let isShowingReference = false; // Track if we're currently showing Reference values
  const STANDARD_SELECTOR_ID = "d_13"; // ID of the reference standard dropdown

  // Button IDs and text constants
  const RUN_REFERENCE_BUTTON_ID = "runReferenceBtn";
  const VIEW_REFERENCE_INPUTS_BUTTON_ID = "viewReferenceInputsBtn";

  // Updated button text for Pattern A architecture
  const BUTTON_TEXT_SHOW_REFERENCE = "Show Reference";
  const BUTTON_TEXT_SHOW_TARGET = "Show Target";
  const BUTTON_TEXT_HIGHLIGHT_REFERENCE_VALUES = "Highlight Reference Values";
  const BUTTON_TEXT_SHOW_TARGET_INPUTS = "Show Target Inputs";

  let isViewingReferenceInputs = false;

  /**
   * Pattern A Compatible: Get all sections with dual-state ModeManager
   * FIXED: Updated for current dual-state architecture
   */
  function getAllDualStateSections() {
    const sectionIds = ["sect02", "sect03", "sect04", "sect08", "sect10", 
                       "sect11", "sect12", "sect13", "sect14", "sect15"];
    
    const dualStateSections = sectionIds
      .map(id => ({ 
        id, 
        module: window.TEUI?.[id], 
        modeManager: window.TEUI?.[id]?.ModeManager 
      }))
      .filter(s => s.modeManager);

    console.log(
      `[ReferenceToggle] Found ${dualStateSections.length} dual-state sections:`,
      dualStateSections.map((s) => s.id),
    );
    return dualStateSections;
  }

  /**
   * PHASE 3: Master Display Toggle - Switch ALL sections with coordinated styling
   * UPDATED: Now applies existing CSS classes for global Reference styling
   */
  function switchAllSectionsMode(mode) {
    const sections = getAllDualStateSections();
    let switchedCount = 0;

    // Switch all section ModeManagers
    sections.forEach((section) => {
      try {
        if (section.modeManager && typeof section.modeManager.switchMode === "function") {
          section.modeManager.switchMode(mode);
          section.modeManager.updateCalculatedDisplayValues();
          switchedCount++;
        }
      } catch (error) {
        console.error(`[ReferenceToggle] Error switching ${section.id}:`, error);
      }
    });

    // Apply existing CSS classes for global Reference styling
    const isReference = mode === 'reference';
    document.body.classList.toggle('viewing-reference-inputs', isReference);
    document.body.classList.toggle('viewing-reference-values', isReference);
    document.body.classList.toggle('reference-mode', isReference);
    document.documentElement.classList.toggle('reference-mode', isReference);

    console.log(
      `🎨 Master Toggle: Switched ${switchedCount}/${sections.length} sections to ${mode.toUpperCase()} mode with global styling`
    );
    return switchedCount;
  }

  /**
   * Pattern A Compatible: Update all calculated display values based on current mode
   */
  function updateAllCalculatedDisplays() {
    const dualStateSections = getAllDualStateSections();

    dualStateSections.forEach((section) => {
      try {
        if (
          section.modeManager &&
          typeof section.modeManager.updateCalculatedDisplayValues ===
            "function"
        ) {
          section.modeManager.updateCalculatedDisplayValues();
        } else if (
          section.modeManager &&
          typeof section.modeManager.refreshUI === "function"
        ) {
          section.modeManager.refreshUI();
        }
      } catch (error) {
        console.error(
          `[ReferenceToggle] Error updating display for ${section.id}:`,
          error,
        );
      }
    });
  }

  function initialize() {
    // PHASE 4: Wire new dropdown buttons to setup functions
    
    // Setup Reference Setup buttons
    const mirrorTargetBtn = document.getElementById("mirrorTargetBtn");
    if (mirrorTargetBtn) {
      mirrorTargetBtn.addEventListener("click", (e) => {
        e.preventDefault();
        mirrorTarget();
      });
    }

    const mirrorTargetReferenceBtn = document.getElementById("mirrorTargetReferenceBtn");
    if (mirrorTargetReferenceBtn) {
      mirrorTargetReferenceBtn.addEventListener("click", (e) => {
        e.preventDefault();
        mirrorTargetWithReference();
      });
    }

    const referenceIndependenceBtn = document.getElementById("referenceIndependenceBtn");
    if (referenceIndependenceBtn) {
      referenceIndependenceBtn.addEventListener("click", (e) => {
        e.preventDefault();
        enableReferenceIndependence();
      });
    }

    // Setup Display Toggle buttons
    const showReferenceBtn = document.getElementById("showReferenceBtn");
    if (showReferenceBtn) {
      showReferenceBtn.addEventListener("click", (e) => {
        e.preventDefault();
        switchAllSectionsMode("reference");
      });
    }

    const showTargetBtn = document.getElementById("showTargetBtn");
    if (showTargetBtn) {
      showTargetBtn.addEventListener("click", (e) => {
        e.preventDefault();
        switchAllSectionsMode("target");
      });
    }

    // Keep existing Reference Inputs view button
    const viewRefInputsBtn = document.getElementById(VIEW_REFERENCE_INPUTS_BUTTON_ID);
    if (viewRefInputsBtn) {
      viewRefInputsBtn.addEventListener("click", toggleReferenceInputsView);
      viewRefInputsBtn.textContent = BUTTON_TEXT_HIGHLIGHT_REFERENCE_VALUES;
    }

    // Keep existing reference standard change handler
    const standardSelector =
      document.getElementById(STANDARD_SELECTOR_ID) ||
      document.querySelector(`[data-field-id='${STANDARD_SELECTOR_ID}']`);
    if (standardSelector) {
      const actualSelect =
        standardSelector.tagName === "SELECT"
          ? standardSelector
          : standardSelector.querySelector("select");
      if (actualSelect) {
        actualSelect.addEventListener("change", handleStandardChange);
      }
    }

    console.log("[ReferenceToggle] Master Reference Toggle initialization complete");
  }

  /**
   * MAIN FUNCTION: Toggle between showing Target and Reference calculated values
   * This is the new "Show Reference" functionality with proper red UI styling
   */
  function toggleReferenceDisplay() {
    isShowingReference = !isShowingReference;
    const targetMode = isShowingReference ? "reference" : "target";

    console.log(
      `[ReferenceToggle] Switching ALL sections to ${targetMode.toUpperCase()} display mode`,
    );

    // Switch all dual-state sections to the target mode
    const switchedCount = switchAllSectionsMode(targetMode);

    if (switchedCount > 0) {
      // Update all calculated display values
      updateAllCalculatedDisplays();

      // Update button text
      const runRefBtn = document.getElementById(RUN_REFERENCE_BUTTON_ID);
      if (runRefBtn) {
        runRefBtn.textContent = isShowingReference
          ? BUTTON_TEXT_SHOW_TARGET
          : BUTTON_TEXT_SHOW_REFERENCE;
      }

      // 🎨 CRITICAL: Apply RED Reference mode styling to entire UI
      // Use the SAME CSS class that "Highlight Reference Values" uses
      document.body.classList.toggle(
        "viewing-reference-inputs",
        isShowingReference,
      );
      document.body.classList.toggle(
        "viewing-reference-values",
        isShowingReference,
      );

      // Also apply additional classes for comprehensive styling
      document.body.classList.toggle("reference-mode", isShowingReference);
      const htmlElement = document.documentElement;
      htmlElement.classList.toggle("reference-mode", isShowingReference);

      console.log(
        `[ReferenceToggle] Successfully toggled to ${targetMode.toUpperCase()} display mode with UI styling`,
      );
    } else {
      console.warn(
        "[ReferenceToggle] No sections were switched - reverting toggle",
      );
      isShowingReference = !isShowingReference; // Revert if nothing was switched
    }
  }

  /**
   * Handle reference standard (d_13) changes
   */
  function handleStandardChange(event) {
    const newStandardKey = event.target.value;
    console.log(
      `[ReferenceToggle] Reference standard changed to: ${newStandardKey}`,
    );

    if (window.TEUI?.StateManager) {
      // Update the global standard
      window.TEUI.StateManager.setValue(
        STANDARD_SELECTOR_ID,
        newStandardKey,
        "user-modified",
      );

      // Notify all sections with ReferenceValues.js dependencies
      const dualStateSections = getAllDualStateSections();
      dualStateSections.forEach((section) => {
        try {
          // Look for sections that have onReferenceStandardChange method in their ReferenceState
          if (section.module.ReferenceState?.onReferenceStandardChange) {
            section.module.ReferenceState.onReferenceStandardChange(
              newStandardKey,
            );
            console.log(
              `[ReferenceToggle] Updated ${section.id} for new reference standard`,
            );
          }
        } catch (error) {
          console.error(
            `[ReferenceToggle] Error updating ${section.id} for standard change:`,
            error,
          );
        }
      });

      // Trigger recalculations
      if (window.TEUI?.Calculator?.calculateAll) {
        window.TEUI.Calculator.calculateAll();
      }

      console.log(`[ReferenceToggle] Reference standard update complete`);
    }
  }

  /**
   * Legacy function for "Show Reference Inputs" - shows which inputs were applied from ReferenceValues
   * This highlights actual Reference inputs vs calculated values
   */
  function toggleReferenceInputsView() {
    isViewingReferenceInputs = !isViewingReferenceInputs;

    // Add/Remove body class for styling
    document.body.classList.toggle(
      "viewing-reference-inputs",
      isViewingReferenceInputs,
    );

    // Update button text
    const viewRefInputsBtn = document.getElementById(
      VIEW_REFERENCE_INPUTS_BUTTON_ID,
    );
    if (viewRefInputsBtn) {
      viewRefInputsBtn.textContent = isViewingReferenceInputs
        ? BUTTON_TEXT_SHOW_TARGET_INPUTS
        : BUTTON_TEXT_HIGHLIGHT_REFERENCE_VALUES;
    }

    // This feature needs to be implemented to highlight Reference input fields
    // from ReferenceValues.js vs calculated values
    console.log(
      `[ReferenceToggle] Reference inputs view: ${isViewingReferenceInputs ? "ON" : "OFF"}`,
    );

    // TODO: Implement visual highlighting of Reference input fields
    // This should show which fields come from ReferenceValues.js based on d_13 selection
  }

  /**
   * Legacy compatibility function
   */
  function isReferenceMode() {
    return isShowingReference;
  }

  /**
   * Get comparison value - now reads from StateManager with ref_ prefix
   */
  function getCompareValue(fieldId) {
    if (window.TEUI?.StateManager) {
      return window.TEUI.StateManager.getValue(`ref_${fieldId}`);
    }
    return null;
  }

  /**
   * PHASE 2: Three Reference Setup Functions
   * These implement the core functionality from Master-Reference-Roadmap.md
   */

  /**
   * 1. Mirror Target: Copy all Target values to Reference state
   * DEBUGGING VERSION: Comprehensive structure inspection
   */
  function mirrorTarget() {
    try {
      console.log('[DEBUG] Starting mirrorTarget debugging...');
      const sections = getAllDualStateSections();
      console.log(`[ReferenceToggle] Mirror Target: Processing ${sections.length} sections`);
      
      sections.forEach((section, index) => {
        console.log(`[DEBUG] ==================`);
        console.log(`[DEBUG] Section ${index}: ${section.id}`);
        console.log('[DEBUG] section.modeManager:', section.modeManager);
        console.log('[DEBUG] section.modeManager.TargetState:', section.modeManager.TargetState);
        
        // Test different access patterns
        if (section.modeManager.TargetState) {
          console.log('[DEBUG] TargetState exists, checking properties:');
          console.log('[DEBUG] - .data:', section.modeManager.TargetState.data);
          console.log('[DEBUG] - .state:', section.modeManager.TargetState.state);
          console.log('[DEBUG] - .values:', section.modeManager.TargetState.values);
          console.log('[DEBUG] - keys:', Object.keys(section.modeManager.TargetState));
          console.log('[DEBUG] - typeof:', typeof section.modeManager.TargetState);
        }
        
        // Check if it's a function that needs calling
        if (typeof section.modeManager.TargetState === 'function') {
          console.log('[DEBUG] TargetState is a function, trying to call...');
          try {
            const result = section.modeManager.TargetState();
            console.log('[DEBUG] TargetState() result:', result);
          } catch (e) {
            console.log('[DEBUG] TargetState() call failed:', e);
          }
        }
        
        // Test if TargetState IS the data object directly
        if (typeof section.modeManager.TargetState === 'object' && section.modeManager.TargetState !== null) {
          console.log('[DEBUG] Testing direct object access...');
          const keys = Object.keys(section.modeManager.TargetState);
          console.log('[DEBUG] Direct object keys (first 5):', keys.slice(0, 5));
          
          // Test accessing a field directly
          if (keys.length > 0) {
            const testKey = keys[0];
            console.log(`[DEBUG] Testing direct access to ${testKey}:`, section.modeManager.TargetState[testKey]);
          }
        }
        
        // Check ReferenceState structure for comparison
        console.log('[DEBUG] section.modeManager.ReferenceState:', section.modeManager.ReferenceState);
        if (section.modeManager.ReferenceState) {
          console.log('[DEBUG] ReferenceState keys:', Object.keys(section.modeManager.ReferenceState));
          console.log('[DEBUG] ReferenceState.setValue function:', typeof section.modeManager.ReferenceState.setValue);
        }
        
        console.log(`[DEBUG] ================== END ${section.id}`);
      });
      
      // TEMPORARILY DISABLE the actual copying to avoid errors during debugging
      console.log('[DEBUG] Debugging complete - actual copying disabled until structure is understood');
      
      // TODO: Uncomment once we know the correct access pattern
      /*
      sections.forEach(section => {
        const targetData = section.modeManager.TargetState.data; // <-- This line fails
        Object.keys(targetData).forEach(fieldId => {
          section.modeManager.ReferenceState.setValue(fieldId, targetData[fieldId], "mirrored");
        });
        section.modeManager.refreshUI();
      });
      */
      
      console.log("🔍 Mirror Target: Debugging complete - check console for TargetState structure");
    } catch (error) {
      console.error("[ReferenceToggle] Mirror Target failed:", error);
      console.error("[DEBUG] Full error stack:", error.stack);
    }
  }

  /**
   * 2. Mirror Target + Reference: Copy Target + overlay ReferenceValues subset
   */
  function mirrorTargetWithReference() {
    try {
      const standard = window.TEUI?.StateManager?.getValue('d_13') || 'OBC SB12 3.1.1.2.C1';
      const refValues = window.TEUI?.ReferenceValues?.[standard] || {};
      const sections = getAllDualStateSections();
      
      console.log(`[ReferenceToggle] Mirror Target + Reference: Using standard "${standard}"`);
      
      sections.forEach(section => {
        const targetData = section.modeManager.TargetState.data;
        
        // Copy all Target values
        Object.keys(targetData).forEach(fieldId => {
          section.modeManager.ReferenceState.setValue(fieldId, targetData[fieldId], "mirrored");
        });
        
        // Overlay ReferenceValues subset
        Object.keys(refValues).forEach(fieldId => {
          section.modeManager.ReferenceState.setValue(fieldId, refValues[fieldId], "reference-standard");
        });
        
        section.modeManager.refreshUI();
      });
      
      console.log(`🔗 Mirror Target + Reference: Applied ${Object.keys(refValues).length} reference values`);
    } catch (error) {
      console.error("[ReferenceToggle] Mirror Target + Reference failed:", error);
    }
  }

  /**
   * 3. Reference Independence: No setup needed - sections already independent
   */
  function enableReferenceIndependence() {
    console.log("🔓 Reference Independence: Sections are already independent by default");
    // No action needed - dual-state architecture already provides independence
  }

  return {
    initialize,
    isReferenceMode,
    getCompareValue,
    toggleReferenceDisplay,
    switchAllSectionsMode, // Expose for external use
    getAllDualStateSections, // Expose for debugging
    // New setup functions
    mirrorTarget,
    mirrorTargetWithReference,
    enableReferenceIndependence,
  };
})();
