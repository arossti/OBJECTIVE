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
   */
  function getAllDualStateSections() {
    const dualStateSections = [];

    // List of sections that have Pattern A dual-state architecture
    const sectionIds = [
      "sect02",
      "sect03",
      "sect04",
      "sect08",
      "sect10",
      "sect11",
      "sect12",
      "sect13",
      "sect14",
      "sect15",
    ];

    sectionIds.forEach((sectionId) => {
      if (window.TEUI?.SectionModules?.[sectionId]) {
        // Check if section has a ModeManager (Pattern A indicator)
        const sectionModule = window.TEUI.SectionModules[sectionId];
        if (
          sectionModule.ModeManager ||
          window.TEUI?.[sectionId]?.ModeManager
        ) {
          dualStateSections.push({
            id: sectionId,
            module: sectionModule,
            modeManager:
              sectionModule.ModeManager ||
              window.TEUI?.[sectionId]?.ModeManager,
          });
        }
      }
    });

    console.log(
      `[ReferenceToggle] Found ${dualStateSections.length} dual-state sections:`,
      dualStateSections.map((s) => s.id),
    );
    return dualStateSections;
  }

  /**
   * Pattern A Compatible: Switch ALL sections to Target or Reference mode
   */
  function switchAllSectionsMode(mode) {
    const dualStateSections = getAllDualStateSections();
    let switchedCount = 0;

    dualStateSections.forEach((section) => {
      try {
        if (
          section.modeManager &&
          typeof section.modeManager.switchMode === "function"
        ) {
          section.modeManager.switchMode(mode);
          switchedCount++;
          console.log(
            `[ReferenceToggle] Switched ${section.id} to ${mode.toUpperCase()} mode`,
          );
        } else {
          console.warn(
            `[ReferenceToggle] ${section.id} has no switchMode method`,
          );
        }
      } catch (error) {
        console.error(
          `[ReferenceToggle] Error switching ${section.id} to ${mode}:`,
          error,
        );
      }
    });

    console.log(
      `[ReferenceToggle] Successfully switched ${switchedCount}/${dualStateSections.length} sections to ${mode.toUpperCase()} mode`,
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
    // Setup main Reference/Target toggle button
    const runRefBtn = document.getElementById(RUN_REFERENCE_BUTTON_ID);
    if (runRefBtn) {
      runRefBtn.addEventListener("click", toggleReferenceDisplay);
      runRefBtn.textContent = BUTTON_TEXT_SHOW_REFERENCE;
    }

    // Setup Reference Inputs view button
    const viewRefInputsBtn = document.getElementById(
      VIEW_REFERENCE_INPUTS_BUTTON_ID,
    );
    if (viewRefInputsBtn) {
      viewRefInputsBtn.addEventListener("click", toggleReferenceInputsView);
      viewRefInputsBtn.textContent = BUTTON_TEXT_HIGHLIGHT_REFERENCE_VALUES;
    }

    // Setup reference standard change handler
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

    console.log("[ReferenceToggle] Pattern A initialization complete");
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

  return {
    initialize,
    isReferenceMode,
    getCompareValue,
    toggleReferenceDisplay,
    switchAllSectionsMode, // Expose for external use
    getAllDualStateSections, // Expose for debugging
  };
})();
