/**
 * 4011-ReferenceToggle.js
 * Module to handle switching between Design and Reference Model views.
 */

// Create TEUI namespace if it doesn't exist
window.TEUI = window.TEUI || {};

TEUI.ReferenceToggle = (function () {
  let referenceMode = false; // This will be true only temporarily during executeReferenceRunAndCache
  const STANDARD_SELECTOR_ID = "d_13"; // ID of the reference standard dropdown

  let cachedReferenceResults = null;
  const RUN_REFERENCE_BUTTON_ID = "runReferenceBtn";
  // NEW: Button ID and state for viewing reference inputs
  const VIEW_REFERENCE_INPUTS_BUTTON_ID = "viewReferenceInputsBtn";
  let isViewingReferenceInputs = false;

  // Constants for button text
  const BUTTON_TEXT_DEFAULT = "Calculate Reference";
  const BUTTON_TEXT_BUSY = "Calculating Reference...";
  const BUTTON_TEXT_SHOW_CACHED_INPUTS = "Show Cached Reference Inputs";
  const BUTTON_TEXT_SHOW_TARGET_INPUTS = "Show Target Inputs";

  const inputFieldTypes = [
    "editable",
    "dropdown",
    "year_slider",
    "percentage",
    "coefficient",
    "coefficient_slider",
    "number",
    "generic_slider",
  ];

  function updateRunReferenceButtonText(text) {
    const runRefBtn = document.getElementById(RUN_REFERENCE_BUTTON_ID);
    if (runRefBtn) {
      runRefBtn.textContent = text;
    }
  }

  function updateViewInputsButtonText(text) {
    const viewRefInputsBtn = document.getElementById(
      VIEW_REFERENCE_INPUTS_BUTTON_ID,
    );
    if (viewRefInputsBtn) {
      viewRefInputsBtn.textContent = text;
    }
  }

  function initialize() {
    // MODIFICATION: Only setup the runRefBtn
    const runRefBtn = document.getElementById(RUN_REFERENCE_BUTTON_ID);
    if (runRefBtn) {
      runRefBtn.addEventListener("click", executeReferenceRunAndCache);
      updateRunReferenceButtonText(BUTTON_TEXT_DEFAULT);
    }

    // NEW: Setup for the viewReferenceInputsBtn
    const viewRefInputsBtn = document.getElementById(
      VIEW_REFERENCE_INPUTS_BUTTON_ID,
    );
    if (viewRefInputsBtn) {
      viewRefInputsBtn.addEventListener("click", toggleReferenceInputsView);
      updateViewInputsButtonText(BUTTON_TEXT_SHOW_CACHED_INPUTS);
    }

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
  }

  function handleStandardChange(event) {
    const newStandardKey = event.target.value;
    if (window.TEUI && TEUI.StateManager) {
      TEUI.StateManager.setValue(
        STANDARD_SELECTOR_ID,
        newStandardKey,
        TEUI.StateManager.VALUE_STATES.USER_MODIFIED,
      );
      // Only load the data; don't trigger calculations or UI refreshes.
      // User must click the button to see the effect of the new standard.
      TEUI.StateManager.loadReferenceData(newStandardKey);
      // If currently viewing reference inputs, and standard changes, revert to target view
      // to avoid confusion, as the displayed inputs are no longer from the selected standard until re-run.
      if (isViewingReferenceInputs) {
        toggleReferenceInputsView(); // This will flip to false and show target inputs
        alert(
          "Reference standard changed. Click 'Run Reference' to update and then '" +
            BUTTON_TEXT_SHOW_CACHED_INPUTS +
            "' to view the new inputs.",
        );
      }
    } else {
      console.error(
        "[ReferenceToggle] StateManager not available to handle standard change.",
      );
    }
  }

  function isReferenceMode() {
    // This now reflects if a reference calculation is actively in progress within this module
    return referenceMode;
  }

  // NEW FUNCTION: toggleReferenceInputsView
  function toggleReferenceInputsView() {
    isViewingReferenceInputs = !isViewingReferenceInputs;
    const viewRefInputsBtn = document.getElementById(
      VIEW_REFERENCE_INPUTS_BUTTON_ID,
    );

    // NEW: Add/Remove body class for global styling
    document.body.classList.toggle(
      "viewing-reference-inputs",
      isViewingReferenceInputs,
    );

    if (!TEUI.FieldManager || !TEUI.StateManager) {
      console.error(
        "[ReferenceToggle] FieldManager or StateManager not available for toggleReferenceInputsView.",
      );
      if (viewRefInputsBtn) viewRefInputsBtn.textContent = "Error";
      return;
    }

    const allFieldDefs = TEUI.FieldManager.getAllFields();
    if (!allFieldDefs) {
      console.error(
        "[ReferenceToggle] Could not get allFieldDefinitions from FieldManager.",
      );
      return;
    }

    for (const fieldId in allFieldDefs) {
      if (allFieldDefs.hasOwnProperty(fieldId)) {
        const fieldDef = allFieldDefs[fieldId];
        if (fieldDef && inputFieldTypes.includes(fieldDef.type)) {
          let displayValue;
          let makeReadOnly;

          if (isViewingReferenceInputs) {
            displayValue = cachedReferenceResults
              ? cachedReferenceResults[fieldId]
              : TEUI.StateManager.getApplicationStateValue(fieldId); // Fallback to app state if no cache
            makeReadOnly = true;
          } else {
            displayValue = TEUI.StateManager.getApplicationStateValue(fieldId);
            makeReadOnly = false;
          }

          // Ensure displayValue is not null/undefined before formatting, default to empty string if so.
          const valueToDisplay =
            displayValue === null || displayValue === undefined
              ? ""
              : displayValue;

          TEUI.FieldManager.updateFieldDisplay(
            fieldId,
            valueToDisplay,
            fieldDef,
          );

          const element =
            document.getElementById(fieldId) ||
            document.querySelector(`[data-field-id='${fieldId}']`);
          if (element) {
            const inputElement =
              element.querySelector("input, select, textarea") ||
              (element.matches("input, select, textarea") ? element : null);
            if (inputElement) {
              inputElement.disabled = makeReadOnly;
            }
            if (element.hasAttribute("contenteditable")) {
              element.setAttribute("contenteditable", String(!makeReadOnly));
            }
            if (makeReadOnly) {
              element.classList.add("reference-input-display-locked");
            } else {
              element.classList.remove("reference-input-display-locked");
            }
          }
        }
      }
    }

    if (viewRefInputsBtn) {
      viewRefInputsBtn.textContent = isViewingReferenceInputs
        ? BUTTON_TEXT_SHOW_TARGET_INPUTS
        : BUTTON_TEXT_SHOW_CACHED_INPUTS;
    }

    // After toggling, ensure the main "Run Reference" button is in its normal state
    const runRefBtn = document.getElementById(RUN_REFERENCE_BUTTON_ID);
    if (runRefBtn && runRefBtn.disabled) {
      // If by any chance it was left disabled, re-enable it, as this view toggle is separate.
      runRefBtn.disabled = false;
      updateRunReferenceButtonText(BUTTON_TEXT_DEFAULT);
    }
  }

  function executeReferenceRunAndCache() {
    if (
      !window.TEUI ||
      !TEUI.StateManager ||
      !TEUI.Calculator ||
      !TEUI.FieldManager
    ) {
      console.error(
        "[ReferenceToggle] Missing critical modules (StateManager, Calculator, FieldManager).",
      );
      alert(
        "Error: Essential application components are missing. Cannot run reference calculation.",
      );
      return;
    }

    const currentStandardKey = TEUI.StateManager.getValue(STANDARD_SELECTOR_ID);
    if (!currentStandardKey) {
      alert(
        "Please select a Reference Standard (usually field 'd_13') before running the reference calculation.",
      );
      console.warn("[ReferenceToggle] No reference standard selected.");
      return;
    }

    const runButton = document.getElementById(RUN_REFERENCE_BUTTON_ID);
    if (runButton) {
      runButton.disabled = true;
      updateRunReferenceButtonText(BUTTON_TEXT_BUSY);
    }

    TEUI.StateManager.setMuteApplicationStateUpdates(true);
    const originalReferenceModeFlag = referenceMode; // Should be false here unless something is wrong
    referenceMode = true; // Temporarily set for StateManager.getValue() to use activeReferenceDataSet

    try {
      TEUI.StateManager.loadReferenceData(currentStandardKey);
      TEUI.Calculator.calculateAll(); // This will use reference values due to 'referenceMode' being true

      // After calculation, capture the results.
      // Inputs from activeReferenceDataSet, outputs from application state (which was just calculated with ref inputs)
      cachedReferenceResults = {};
      const allFieldDefinitions = TEUI.FieldManager.getAllFields();

      if (allFieldDefinitions) {
        Object.keys(allFieldDefinitions).forEach((fieldId) => {
          const fieldDef = allFieldDefinitions[fieldId];
          if (fieldDef && fieldDef.type) {
            if (inputFieldTypes.includes(fieldDef.type)) {
              // For input fields, their value *is* the reference value used
              const refValue =
                TEUI.StateManager.getActiveReferenceModeValue(fieldId); // Get from the loaded ref data
              if (refValue !== undefined && refValue !== null) {
                cachedReferenceResults[fieldId] = refValue;
              }
            } else {
              // For calculated/derived fields, their value is the result of the reference calculation
              const appValue =
                TEUI.StateManager.getApplicationStateValue(fieldId); // Get from current state post-calc
              if (appValue !== undefined && appValue !== null) {
                cachedReferenceResults[fieldId] = appValue;
              }
            }
          }
        });
      } else {
        console.warn(
          "[ReferenceToggle] TEUI.FieldManager.getAllFields() not available. Caching will be less precise.",
        );
        // Fallback can be improved by adding getActiveReferenceDataSetContents and getAllApplicationStateValues to StateManager
        const tempRefInputs = TEUI.StateManager
          .getActiveReferenceDataSetContents
          ? TEUI.StateManager.getActiveReferenceDataSetContents()
          : {};
        Object.assign(cachedReferenceResults, tempRefInputs);
        const tempAppValues = TEUI.StateManager.getAllApplicationStateValues
          ? TEUI.StateManager.getAllApplicationStateValues()
          : {};
        Object.assign(cachedReferenceResults, tempAppValues);
      }

      console.log(
        "[ReferenceToggle] Reference run complete. Results cached:",
        cachedReferenceResults,
      );
      document.dispatchEvent(
        new CustomEvent("teui-reference-cache-updated", {
          detail: cachedReferenceResults,
        }),
      );
    } catch (error) {
      console.error(
        "[ReferenceToggle] Error during executeReferenceRunAndCache:",
        error,
      );
      alert(
        "An error occurred while running the reference calculation. Please check the console for details.",
      );
    } finally {
      referenceMode = originalReferenceModeFlag; // Restore (should be back to false)
      TEUI.StateManager.setMuteApplicationStateUpdates(false);

      if (runButton) {
        runButton.disabled = false;
        updateRunReferenceButtonText(BUTTON_TEXT_DEFAULT);
      }

      // Recalculate Target model now that application state is unmuted and referenceMode is false
      if (
        window.TEUI.Calculator &&
        typeof window.TEUI.Calculator.calculateAll === "function"
      ) {
        TEUI.Calculator.calculateAll();
      }

      updateComparisonDisplay();

      // NEW: If currently viewing reference inputs, refresh the view with new cached data
      if (isViewingReferenceInputs) {
        // Call directly, don't flip the flag, just refresh the display state
        const viewRefInputsBtn = document.getElementById(
          VIEW_REFERENCE_INPUTS_BUTTON_ID,
        );
        const allFieldDefs = TEUI.FieldManager.getAllFields();
        if (allFieldDefs && TEUI.FieldManager && TEUI.StateManager) {
          for (const fieldId in allFieldDefs) {
            if (allFieldDefs.hasOwnProperty(fieldId)) {
              const fieldDef = allFieldDefs[fieldId];
              if (fieldDef && inputFieldTypes.includes(fieldDef.type)) {
                const displayValue = cachedReferenceResults
                  ? cachedReferenceResults[fieldId]
                  : "";
                TEUI.FieldManager.updateFieldDisplay(
                  fieldId,
                  displayValue,
                  fieldDef,
                );
                // Ensure read-only state is reapplied
                const element =
                  document.getElementById(fieldId) ||
                  document.querySelector(`[data-field-id='${fieldId}']`);
                if (element) {
                  const inputElement =
                    element.querySelector("input, select, textarea") ||
                    (element.matches("input, select, textarea")
                      ? element
                      : null);
                  if (inputElement) inputElement.disabled = true;
                  if (element.hasAttribute("contenteditable"))
                    element.setAttribute("contenteditable", "false");
                  element.classList.add("reference-input-display-locked");
                }
              }
            }
          }
        }
        if (viewRefInputsBtn)
          viewRefInputsBtn.textContent = BUTTON_TEXT_SHOW_TARGET_INPUTS; // Ensure button text is correct
      }
    }
  }

  function getCompareValue(fieldId) {
    return cachedReferenceResults &&
      cachedReferenceResults.hasOwnProperty(fieldId)
      ? cachedReferenceResults[fieldId]
      : null;
  }

  function updateComparisonDisplay() {
    console.log(
      "[ReferenceToggle] Updating comparison display elements with new cached data.",
    );

    if (!window.TEUI || !TEUI.FieldManager || !TEUI.formatNumber) {
      console.error(
        "[ReferenceToggle] Missing TEUI.FieldManager or TEUI.formatNumber for updateComparisonDisplay.",
      );
      return;
    }

    // Select all elements designated for displaying comparison values.
    // These elements should have a 'data-compare-field-id' attribute
    // specifying which field's cached reference value they should display.
    const compareElements = document.querySelectorAll(
      "[data-compare-field-id]",
    );

    compareElements.forEach((el) => {
      const fieldId = el.dataset.compareFieldId;
      if (!fieldId) return;

      const value = getCompareValue(fieldId); // From cachedReferenceResults
      const fieldDef = TEUI.FieldManager.getField(fieldId);

      let formatType = "raw"; // Default to 'raw' if no specific format found
      if (fieldDef) {
        // Prioritize formatType if explicitly defined in fieldDef
        if (fieldDef.formatType) {
          formatType = fieldDef.formatType;
        } else {
          // Fallback based on field type if formatType is not present
          switch (fieldDef.type) {
            case "percentage":
              formatType = "percent-0dp";
              break;
            case "year_slider":
              formatType = "integer-nocomma";
              break;
            case "coefficient":
            case "coefficient_slider":
            case "number":
            case "editable":
              formatType = "number-2dp";
              break;
            case "calculated":
            case "derived":
              formatType = fieldDef.format || "number-2dp";
              break;
            default:
              formatType = "raw";
          }
        }
      }

      const formattedValue =
        value !== null && value !== undefined
          ? TEUI.formatNumber(value, formatType)
          : "N/A";

      el.textContent = formattedValue;
    });
  }

  return {
    initialize,
    isReferenceMode, // Kept for StateManager.getValue()
    getCompareValue,
  };
})();
