/**
 * 4011-Section11.js
 * Refactored Transmission Losses (Section 11) module for TEUI Calculator 4.011
 */

// Ensure namespace exists
window.TEUI = window.TEUI || {};
window.TEUI.SectionModules = window.TEUI.SectionModules || {};

// Section 11: Transmission Losses Module
window.TEUI.SectionModules.sect11 = (function () {
  //==========================================================================
  // CONFIGURATION
  //==========================================================================

  // Baseline values for Reference % calculation (derived from screenshot)
  const baselineValues = {
    85: { type: "rsi", value: 5.3 }, // Roof
    86: { type: "rsi", value: 4.1 }, // Walls AG
    87: { type: "rsi", value: 6.6 }, // Floor Exp
    88: { type: "uvalue", value: 1.99 }, // Doors
    89: { type: "uvalue", value: 1.42 }, // Window N
    90: { type: "uvalue", value: 1.42 }, // Window E
    91: { type: "uvalue", value: 1.42 }, // Window S
    92: { type: "uvalue", value: 1.42 }, // Window W
    93: { type: "uvalue", value: 1.42 }, // Skylights
    94: { type: "rsi", value: 1.8 }, // Walls BG
    95: { type: "rsi", value: 3.5 }, // Floor Slab
    97: { type: "penalty", value: 0.2 }, // TBP (Pass <= 20%)
  };

  // Map Section 11 area fields (d_88-d_93) to their Section 10 sources
  const areaSourceMap = {
    88: "d_73",
    89: "d_74",
    90: "d_75",
    91: "d_76",
    92: "d_77",
    93: "d_78",
  };

  // Configuration for each component row to be calculated
  const componentConfig = [
    { row: 85, type: "air", input: "rsi" },
    { row: 86, type: "air", input: "rsi" },
    { row: 87, type: "air", input: "rsi" },
    { row: 88, type: "air", input: "uvalue" },
    { row: 89, type: "air", input: "uvalue" },
    { row: 90, type: "air", input: "uvalue" },
    { row: 91, type: "air", input: "uvalue" },
    { row: 92, type: "air", input: "uvalue" },
    { row: 93, type: "air", input: "uvalue" },
    { row: 94, type: "ground", input: "rsi" },
    { row: 95, type: "ground", input: "rsi" },
  ];

  // List of all editable fields in this section
  const editableFields = [
    "d_85",
    "f_85",
    "d_86",
    "f_86",
    "d_87",
    "f_87", // Air-facing RSI inputs
    "g_88",
    "g_89",
    "g_90",
    "g_91",
    "g_92",
    "g_93", // Window/Door U-value inputs
    "d_94",
    "f_94",
    "d_95",
    "f_95", // Ground-facing RSI inputs
    "d_96", // Interior Floor Area
    "d_97", // Thermal Bridge Penalty slider
  ];

  //==========================================================================
  // DUAL-STATE ARCHITECTURE (Self-Contained State Module)
  //==========================================================================

  // PATTERN 1: Internal State Objects (Self-Contained + Persistent)
  const TargetState = {
    state: {},
    listeners: {},
    initialize: function () {
      const savedState = localStorage.getItem("S11_TARGET_STATE");
      if (savedState) {
        this.state = JSON.parse(savedState);
      } else {
        this.setDefaults();
      }
    },
    setDefaults: function () {
      // These defaults MUST match the 'value' properties in the sectionRows definition
      this.state = {
        d_85: "1411.52",
        f_85: "9.35", // Roof
        d_86: "712.97",
        f_86: "6.69", // Walls Above Grade
        d_87: "0.00",
        f_87: "9.52", // Floor Exposed
        g_88: "0.900", // Doors U-value
        g_89: "0.900", // Window Area North U-value
        g_90: "0.900", // Window Area East U-value
        g_91: "0.900", // Window Area South U-value
        g_92: "0.900", // Window Area West U-value
        g_93: "0.900", // Skylights U-value
        d_94: "0.00",
        f_94: "4.00", // Walls Below Grade
        d_95: "1100.42",
        f_95: "3.70", // Floor Slab
        d_96: "29.70", // Interior Floors
        d_97: "20", // Thermal Bridge Penalty %
      };
    },
    saveState: function () {
      localStorage.setItem("S11_TARGET_STATE", JSON.stringify(this.state));
    },
    setValue: function (fieldId, value) {
      this.state[fieldId] = value;
      this.saveState();
    },
    getValue: function (fieldId) {
      return this.state[fieldId];
    },
  };

  const ReferenceState = {
    state: {},
    listeners: {},
    initialize: function () {
      const savedState = localStorage.getItem("S11_REFERENCE_STATE");
      if (savedState) {
        this.state = JSON.parse(savedState);
      } else {
        this.setDefaults();
      }
    },
    setDefaults: function () {
      // ✅ DYNAMIC LOADING: Get current reference standard from dropdown d_13
      const currentStandard =
        window.TEUI?.StateManager?.getValue?.("d_13") || "OBC SB10 5.5-6 Z6";
      const referenceValues =
        window.TEUI?.ReferenceValues?.[currentStandard] || {};

      // Apply reference values to this section's fields, with fallbacks for missing values
      this.state = {
        // Area values (d_) inherit from Target - not typically in building codes
        d_85: "1411.52",
        f_85: referenceValues.f_85 || "5.30", // Roof
        d_86: "712.97",
        f_86: referenceValues.f_86 || "4.10", // Walls Above Grade
        d_87: "0.00",
        f_87: referenceValues.f_87 || "6.60", // Floor Exposed
        g_88: referenceValues.g_88 || "1.990", // Doors U-value
        g_89: referenceValues.g_89 || "1.420", // Window Area North U-value
        g_90: referenceValues.g_90 || "1.420", // Window Area East U-value
        g_91: referenceValues.g_91 || "1.420", // Window Area South U-value
        g_92: referenceValues.g_92 || "1.420", // Window Area West U-value
        g_93: referenceValues.g_93 || "1.420", // Skylights U-value
        d_94: "0.00",
        f_94: referenceValues.f_94 || "1.80", // Walls Below Grade
        d_95: "1100.42",
        f_95: referenceValues.f_95 || "3.50", // Floor Slab
        d_96: "29.70", // Interior Floors (not in codes)
        d_97: referenceValues.d_97 || "50", // Thermal Bridge Penalty %
      };

      console.log(
        `S11: Reference defaults loaded from standard: ${currentStandard}`,
      );
    },

    // Listen for changes to the reference standard and reload defaults
    onReferenceStandardChange: function () {
      console.log("S11: Reference standard changed, reloading defaults");

      // Preserve user-modified area values (design choices, not code requirements)
      const preservedAreas = {};
      const areaFields = ["d_85", "d_86", "d_87", "d_94", "d_95", "d_96"];

      areaFields.forEach((fieldId) => {
        // For Reference mode, always preserve current values
        if (ModeManager.currentMode === "reference") {
          preservedAreas[fieldId] = this.state[fieldId];
        }
        // For Target mode, preserve areas from TargetState
        else {
          preservedAreas[fieldId] = TargetState.getValue(fieldId);
        }
      });

      // Load new reference values (this updates RSI/U-values from ReferenceValues.js)
      this.setDefaults();

      // Restore preserved area values
      Object.assign(this.state, preservedAreas);
      this.saveState();

      console.log(
        "S11: Reference standard updated, areas preserved, performance values updated",
      );

      // Only refresh UI if currently in reference mode
      if (ModeManager.currentMode === "reference") {
        ModeManager.refreshUI();
        calculateAll();
      }
    },

    saveState: function () {
      localStorage.setItem("S11_REFERENCE_STATE", JSON.stringify(this.state));
    },
    setValue: function (fieldId, value) {
      this.state[fieldId] = value;
      this.saveState();
    },
    getValue: function (fieldId) {
      return this.state[fieldId];
    },
  };

  // PATTERN 2: The ModeManager Facade
  const ModeManager = {
    currentMode: "target",
    initialize: function () {
      TargetState.initialize();
      ReferenceState.initialize();

      // Listen for reference standard changes
      if (window.TEUI?.StateManager?.addListener) {
        window.TEUI.StateManager.addListener("d_13", () => {
          ReferenceState.onReferenceStandardChange();
        });
      }
    },
    switchMode: function (mode) {
      if (
        this.currentMode === mode ||
        (mode !== "target" && mode !== "reference")
      )
        return;
      this.currentMode = mode;
      console.log(`S11: Switched to ${mode.toUpperCase()} mode`);

      this.refreshUI();
      calculateAll(); // Recalculate for the new mode
      // Ensure displayed values reflect the selected mode
      if (typeof this.updateCalculatedDisplayValues === "function") {
        this.updateCalculatedDisplayValues();
      }
    },
    resetState: function () {
      console.log(
        "S11: Resetting state and clearing localStorage for Section 11.",
      );
      TargetState.setDefaults();
      TargetState.saveState();
      ReferenceState.setDefaults(); // This will reload from current d_13 selection
      ReferenceState.saveState();
      console.log("S11: States have been reset to defaults.");

      // After resetting, refresh the UI and recalculate.
      this.refreshUI();
      calculateAll();
    },
    getCurrentState: function () {
      return this.currentMode === "target" ? TargetState : ReferenceState;
    },
    getValue: function (fieldId) {
      return this.getCurrentState().getValue(fieldId);
    },
    setValue: function (fieldId, value, source = "user") {
      this.getCurrentState().setValue(fieldId, value, source);

      // Bridge to StateManager for cross-section propagation
      if (this.currentMode === "target") {
        const writeSource =
          source === "user-modified" || source === "user"
            ? "user-modified"
            : source || "calculated";
        window.TEUI.StateManager.setValue(fieldId, value, writeSource);
      } else if (this.currentMode === "reference") {
        // Write Reference-side updates with ref_ prefix
        const writeSource =
          source === "user-modified" || source === "user"
            ? "user-modified"
            : source || "calculated";
        if (fieldId === "d_97") {
          console.log(
            `[S11] ModeManager REF write: ref_d_97=${value} (src=${writeSource})`,
          );
        }
        window.TEUI.StateManager.setValue(`ref_${fieldId}`, value, writeSource);
      }
    },
    refreshUI: function () {
      const sectionElement = document.getElementById(
        "envelopeTransmissionLosses",
      );
      if (!sectionElement) return;

      const currentState = this.getCurrentState();

      const fieldsToSync = [
        "d_85",
        "f_85",
        "d_86",
        "f_86",
        "d_87",
        "f_87", // RSI inputs
        "g_88",
        "g_89",
        "g_90",
        "g_91",
        "g_92",
        "g_93", // U-value inputs
        "d_94",
        "f_94",
        "d_95",
        "f_95",
        "d_96",
        "d_97", // Ground RSI + Interior + TBP
      ];

      fieldsToSync.forEach((fieldId) => {
        const stateValue = currentState.getValue(fieldId);
        if (stateValue === undefined || stateValue === null) return;

        const element = sectionElement.querySelector(
          `[data-field-id="${fieldId}"]`,
        );
        if (!element) return;

        const slider = element.matches('input[type="range"]')
          ? element
          : element.querySelector('input[type="range"]');

        if (slider) {
          // Handle thermal bridge penalty slider (d_97)
          const numericValue = window.TEUI.parseNumeric(stateValue, 0);
          slider.value = numericValue;

          // CORRECTED PATTERN: Use the direct nextElementSibling property
          const display = slider.nextElementSibling;
          if (display) {
            display.textContent = `${numericValue}%`;
          }
        } else if (element.hasAttribute("contenteditable")) {
          element.textContent = stateValue;
        }
      });
    },
    // Update displayed calculated values based on current mode (Target vs Reference)
    updateCalculatedDisplayValues: function () {
      if (!window.TEUI?.StateManager) return;
      // ✅ EXPANDED: Include ALL calculated fields for complete mode-aware display
      const calculatedFields = [
        // Component rows 85-96 (all calculated values)
        "i_85",
        "k_85",
        "g_85",
        "f_85",
        "i_86",
        "k_86",
        "g_86",
        "f_86",
        "i_87",
        "k_87",
        "g_87",
        "f_87",
        "i_88",
        "k_88",
        "g_88",
        "f_88",
        "i_89",
        "k_89",
        "g_89",
        "f_89",
        "i_90",
        "k_90",
        "g_90",
        "f_90",
        "i_91",
        "k_91",
        "g_91",
        "f_91",
        "i_92",
        "k_92",
        "g_92",
        "f_92",
        "i_93",
        "k_93",
        "g_93",
        "f_93",
        "i_94",
        "k_94",
        "g_94",
        "f_94",
        "i_95",
        "k_95",
        "g_95",
        "f_95",
        "i_96",
        "k_96",
        "g_96",
        "f_96",
        // Totals and penalties
        "i_97",
        "k_97",
        "d_98",
        "i_98",
        "k_98",
      ];

      calculatedFields.forEach((fieldId) => {
        const valueToDisplay =
          this.currentMode === "reference"
            ? window.TEUI.StateManager.getValue(`ref_${fieldId}`)
            : window.TEUI.StateManager.getValue(fieldId);

        if (valueToDisplay !== null && valueToDisplay !== undefined) {
          const element = document.querySelector(
            `[data-field-id="${fieldId}"]`,
          );
          if (element) {
            const num = window.TEUI.parseNumeric(valueToDisplay, 0);
            element.textContent = formatNumber(num, "number");
          }
        }
      });
    },
  };

  // Expose globally for cross-section communication
  window.TEUI.sect11 = window.TEUI.sect11 || {};
  window.TEUI.sect11.ModeManager = ModeManager;

  //==========================================================================
  // LAYOUT DEFINITION (sectionRows)
  //==========================================================================
  const sectionRows = {
    header: {
      id: "11-ID",
      rowId: "11-ID",
      label: "Transmission Losses Units",
      cells: {
        c: { content: "", classes: ["section-subheader"] },
        d: {
          content: "Areas m²",
          classes: ["section-subheader", "align-center"],
        },
        e: {
          content: "Rimp ft²F•hr/Btu",
          classes: ["section-subheader", "align-center"],
        },
        f: {
          content: "RSI K•m²/W",
          classes: ["section-subheader", "align-center"],
        },
        g: {
          content: "U-Value W/m²•K",
          classes: ["section-subheader", "align-center"],
        },
        h: {
          content: "% of Ae & Ag",
          classes: ["section-subheader", "align-center"],
        },
        i: {
          content: "Heatloss kWh/yr",
          classes: ["section-subheader", "align-center"],
        },
        j: {
          content: "Heatloss %",
          classes: ["section-subheader", "align-center"],
        },
        k: {
          content: "Heatgain kWh/Cool Season",
          classes: ["section-subheader", "align-center"],
        },
        l: {
          content: "Heatgain %",
          classes: ["section-subheader", "align-center"],
        },
        m: {
          content: "Reference",
          classes: ["section-subheader", "align-center"],
        }, // Updated label
        n: {
          content: "Status",
          classes: ["section-subheader", "align-center"],
        }, // Updated label
      },
    },
    85: {
      id: "B.4",
      rowId: "B.4",
      label: "Roof",
      cells: {
        c: { label: "Roof" },
        d: { fieldId: "d_85", type: "editable", value: "1411.52" },
        e: { fieldId: "e_85", type: "calculated", value: "0.00" },
        f: { fieldId: "f_85", type: "editable", value: "9.35" },
        g: { fieldId: "g_85", type: "calculated", value: "0.00" },
        h: { fieldId: "h_85", type: "calculated", value: "0%" },
        i: { fieldId: "i_85", type: "calculated", value: "0.00" },
        j: { fieldId: "j_85", type: "calculated", value: "0%" },
        k: { fieldId: "k_85", type: "calculated", value: "0.00" },
        l: { fieldId: "l_85", type: "calculated", value: "0%" },
        m: { fieldId: "m_85", type: "calculated", value: "0%" },
        n: { fieldId: "n_85", type: "calculated", value: "✓" },
      },
    },
    86: {
      id: "B.5",
      rowId: "B.5",
      label: "Walls Above Grade (Exclude Openings!)",
      cells: {
        c: { label: "Walls Above Grade (Exclude Openings!)" },
        d: { fieldId: "d_86", type: "editable", value: "712.97" },
        e: { fieldId: "e_86", type: "calculated", value: "0.00" },
        f: { fieldId: "f_86", type: "editable", value: "6.69" },
        g: { fieldId: "g_86", type: "calculated", value: "0.00" },
        h: { fieldId: "h_86", type: "calculated", value: "0%" },
        i: { fieldId: "i_86", type: "calculated", value: "0.00" },
        j: { fieldId: "j_86", type: "calculated", value: "0%" },
        k: { fieldId: "k_86", type: "calculated", value: "0.00" },
        l: { fieldId: "l_86", type: "calculated", value: "0%" },
        m: { fieldId: "m_86", type: "calculated", value: "0%" },
        n: { fieldId: "n_86", type: "calculated", value: "✓" },
      },
    },
    87: {
      id: "B.6",
      rowId: "B.6",
      label: "Floor Exposed",
      cells: {
        c: { label: "Floor Exposed" },
        d: { fieldId: "d_87", type: "editable", value: "0.00" },
        e: { fieldId: "e_87", type: "calculated", value: "0.00" },
        f: { fieldId: "f_87", type: "editable", value: "9.52" },
        g: { fieldId: "g_87", type: "calculated", value: "0.00" },
        h: { fieldId: "h_87", type: "calculated", value: "0%" },
        i: { fieldId: "i_87", type: "calculated", value: "0.00" },
        j: { fieldId: "j_87", type: "calculated", value: "0%" },
        k: { fieldId: "k_87", type: "calculated", value: "0.00" },
        l: { fieldId: "l_87", type: "calculated", value: "0%" },
        m: { fieldId: "m_87", type: "calculated", value: "0%" },
        n: { fieldId: "n_87", type: "calculated", value: "✓" },
      },
    },
    88: {
      id: "B.7.0",
      rowId: "B.7.0",
      label: "Doors",
      cells: {
        c: { label: "Doors" },
        d: { fieldId: "d_88", type: "calculated", value: "0.00" },
        e: { fieldId: "e_88", type: "calculated", value: "0.00" },
        f: { fieldId: "f_88", type: "calculated", value: "0.00" },
        g: { fieldId: "g_88", type: "editable", value: "0.900" },
        h: { fieldId: "h_88", type: "calculated", value: "0%" },
        i: { fieldId: "i_88", type: "calculated", value: "0.00" },
        j: { fieldId: "j_88", type: "calculated", value: "0%" },
        k: { fieldId: "k_88", type: "calculated", value: "0.00" },
        l: { fieldId: "l_88", type: "calculated", value: "0%" },
        m: { fieldId: "m_88", type: "calculated", value: "0%" },
        n: { fieldId: "n_88", type: "calculated", value: "✓" },
      },
    },
    89: {
      id: "B.8.1",
      rowId: "B.8.1",
      label: "Window Area North",
      cells: {
        c: { label: "Window Area North" },
        d: { fieldId: "d_89", type: "calculated", value: "0.00" },
        e: { fieldId: "e_89", type: "calculated", value: "0.00" },
        f: { fieldId: "f_89", type: "calculated", value: "0.00" },
        g: { fieldId: "g_89", type: "editable", value: "0.900" },
        h: { fieldId: "h_89", type: "calculated", value: "0%" },
        i: { fieldId: "i_89", type: "calculated", value: "0.00" },
        j: { fieldId: "j_89", type: "calculated", value: "0%" },
        k: { fieldId: "k_89", type: "calculated", value: "0.00" },
        l: { fieldId: "l_89", type: "calculated", value: "0%" },
        m: { fieldId: "m_89", type: "calculated", value: "0%" },
        n: { fieldId: "n_89", type: "calculated", value: "✓" },
      },
    },
    90: {
      id: "B.8.2",
      rowId: "B.8.2",
      label: "Window Area East",
      cells: {
        c: { label: "Window Area East" },
        d: { fieldId: "d_90", type: "calculated", value: "0.00" },
        e: { fieldId: "e_90", type: "calculated", value: "0.00" },
        f: { fieldId: "f_90", type: "calculated", value: "0.00" },
        g: { fieldId: "g_90", type: "editable", value: "0.900" },
        h: { fieldId: "h_90", type: "calculated", value: "0%" },
        i: { fieldId: "i_90", type: "calculated", value: "0.00" },
        j: { fieldId: "j_90", type: "calculated", value: "0%" },
        k: { fieldId: "k_90", type: "calculated", value: "0.00" },
        l: { fieldId: "l_90", type: "calculated", value: "0%" },
        m: { fieldId: "m_90", type: "calculated", value: "0%" },
        n: { fieldId: "n_90", type: "calculated", value: "✓" },
      },
    },
    91: {
      id: "B.8.3",
      rowId: "B.8.3",
      label: "Window Area South",
      cells: {
        c: { label: "Window Area South" },
        d: { fieldId: "d_91", type: "calculated", value: "0.00" },
        e: { fieldId: "e_91", type: "calculated", value: "0.00" },
        f: { fieldId: "f_91", type: "calculated", value: "0.00" },
        g: { fieldId: "g_91", type: "editable", value: "0.900" },
        h: { fieldId: "h_91", type: "calculated", value: "0%" },
        i: { fieldId: "i_91", type: "calculated", value: "0.00" },
        j: { fieldId: "j_91", type: "calculated", value: "0%" },
        k: { fieldId: "k_91", type: "calculated", value: "0.00" },
        l: { fieldId: "l_91", type: "calculated", value: "0%" },
        m: { fieldId: "m_91", type: "calculated", value: "0%" },
        n: { fieldId: "n_91", type: "calculated", value: "✓" },
      },
    },
    92: {
      id: "B.8.4",
      rowId: "B.8.4",
      label: "Window Area West",
      cells: {
        c: { label: "Window Area West" },
        d: { fieldId: "d_92", type: "calculated", value: "0.00" },
        e: { fieldId: "e_92", type: "calculated", value: "0.00" },
        f: { fieldId: "f_92", type: "calculated", value: "0.00" },
        g: { fieldId: "g_92", type: "editable", value: "0.900" },
        h: { fieldId: "h_92", type: "calculated", value: "0%" },
        i: { fieldId: "i_92", type: "calculated", value: "0.00" },
        j: { fieldId: "j_92", type: "calculated", value: "0%" },
        k: { fieldId: "k_92", type: "calculated", value: "0.00" },
        l: { fieldId: "l_92", type: "calculated", value: "0%" },
        m: { fieldId: "m_92", type: "calculated", value: "0%" },
        n: { fieldId: "n_92", type: "calculated", value: "✓" },
      },
    },
    93: {
      id: "B.8.5",
      rowId: "B.8.5",
      label: "Skylights",
      cells: {
        c: { label: "Skylights" },
        d: { fieldId: "d_93", type: "calculated", value: "0.00" },
        e: { fieldId: "e_93", type: "calculated", value: "0.00" },
        f: { fieldId: "f_93", type: "calculated", value: "0.00" },
        g: { fieldId: "g_93", type: "editable", value: "0.900" },
        h: { fieldId: "h_93", type: "calculated", value: "0%" },
        i: { fieldId: "i_93", type: "calculated", value: "0.00" },
        j: { fieldId: "j_93", type: "calculated", value: "0%" },
        k: { fieldId: "k_93", type: "calculated", value: "0.00" },
        l: { fieldId: "l_93", type: "calculated", value: "0%" },
        m: { fieldId: "m_93", type: "calculated", value: "0%" },
        n: { fieldId: "n_93", type: "calculated", value: "✓" },
      },
    },
    94: {
      id: "B.9",
      rowId: "B.9",
      label: "Walls Below Grade (Conditioned Space)",
      cells: {
        c: { label: "Walls Below Grade (Conditioned Space)" },
        d: { fieldId: "d_94", type: "editable", value: "0.00" },
        e: { fieldId: "e_94", type: "calculated", value: "0.00" },
        f: { fieldId: "f_94", type: "editable", value: "4.00" },
        g: { fieldId: "g_94", type: "calculated", value: "0.00" },
        h: { fieldId: "h_94", type: "calculated", value: "0%" },
        i: { fieldId: "i_94", type: "calculated", value: "0.00" },
        j: { fieldId: "j_94", type: "calculated", value: "0%" },
        k: { fieldId: "k_94", type: "calculated", value: "0.00" },
        l: { fieldId: "l_94", type: "calculated", value: "0%" },
        m: { fieldId: "m_94", type: "calculated", value: "0%" },
        n: { fieldId: "n_94", type: "calculated", value: "✓" },
      },
    },
    95: {
      id: "B.10",
      rowId: "B.10",
      label: "Floor Slab (Conditioned Space)",
      cells: {
        c: { label: "Floor Slab (Conditioned Space)" },
        d: { fieldId: "d_95", type: "editable", value: "1100.42" },
        e: { fieldId: "e_95", type: "calculated", value: "0.00" },
        f: { fieldId: "f_95", type: "editable", value: "3.70" },
        g: { fieldId: "g_95", type: "calculated", value: "0.00" },
        h: { fieldId: "h_95", type: "calculated", value: "100%" },
        i: { fieldId: "i_95", type: "calculated", value: "0.00" },
        j: { fieldId: "j_95", type: "calculated", value: "0%" },
        k: { fieldId: "k_95", type: "calculated", value: "0.00" },
        l: { fieldId: "l_95", type: "calculated", value: "0%" },
        m: { fieldId: "m_95", type: "calculated", value: "0%" },
        n: { fieldId: "n_95", type: "calculated", value: "✓" },
      },
    },
    96: {
      id: "B.11",
      rowId: "B.11",
      label: "B.11 Interior Floors (incl. garages)",
      cells: {
        c: { label: "B.11 Interior Floors (incl. garages)" },
        d: { fieldId: "d_96", type: "editable", value: "29.70" },
        e: { content: "-" },
        f: { content: "-" },
        g: { content: "-" },
        h: { content: "-" },
        i: { content: "-" },
        j: { content: "-" },
        k: { content: "-" },
        l: { content: "-" },
        m: {},
        n: {},
      },
    },
    97: {
      id: "B.12",
      rowId: "B.12",
      label: "Thermal Bridge Penalty %",
      cells: {
        c: { label: "Thermal Bridge Penalty (%)" },
        d: {
          fieldId: "d_97",
          type: "percentage", // Changed from editable to percentage
          value: "20", // Default value 20%
          min: 5, // **** CHANGED: Set min to 5 ****
          max: 100, // Max 100%
          step: 5, // Step 5%
          section: "envelope",
        },
        e: { fieldId: "e_97", type: "calculated", value: "0.200" }, // Placeholder for decimal equivalent
        f: { content: "0.00", classes: ["label-prefix"] },
        i: { fieldId: "i_97", type: "calculated", value: "0.00" },
        j: { fieldId: "j_97", type: "calculated", value: "0%" },
        k: { fieldId: "k_97", type: "calculated", value: "0.00" },
        l: { fieldId: "l_97", type: "calculated", value: "0%" },
        m: { fieldId: "m_97", type: "calculated", value: "0%" },
        n: { fieldId: "n_97", type: "calculated", value: "✓" },
      },
    },
    98: {
      id: "ET",
      rowId: "ET",
      label: "ET",
      cells: {
        c: { label: "Envelope Totals" },
        d: { fieldId: "d_98", type: "calculated", value: "0.00" },
        e: { fieldId: "e_98", type: "calculated", value: "0.00" },
        f: {},
        g: {},
        h: { fieldId: "h_98", type: "calculated", value: "100%" },
        i: { fieldId: "i_98", type: "calculated", value: "0.00" },
        j: { fieldId: "j_98", type: "calculated", value: "100%" },
        k: { fieldId: "k_98", type: "calculated", value: "0.00" },
        l: { fieldId: "l_98", type: "calculated", value: "100%" },
        m: {},
        n: { fieldId: "n_98", type: "calculated", value: "✓" },
      },
    },
  };

  //==========================================================================
  // ACCESSOR METHODS
  //==========================================================================

  function getFields() {
    const fields = {};
    Object.values(sectionRows).forEach((row) => {
      if (!row.cells) return;
      Object.values(row.cells).forEach((cell) => {
        if (cell.fieldId && cell.type) {
          // Copy all relevant properties from the cell definition
          fields[cell.fieldId] = {
            ...cell, // Spread operator to copy all properties
            defaultValue: cell.value, // Keep defaultValue mapping for consistency
          };
          // Remove original value key if necessary, as it's mapped to defaultValue
          // delete fields[cell.fieldId].value;
        }
      });
    });
    return fields;
  }

  function getDropdownOptions() {
    return {};
  }

  function getLayout() {
    const layoutRows = [];
    if (sectionRows["header"])
      layoutRows.push(createLayoutRow(sectionRows["header"]));
    Object.entries(sectionRows).forEach(([key, row]) => {
      if (key !== "header") layoutRows.push(createLayoutRow(row));
    });
    return { rows: layoutRows };
  }

  function createLayoutRow(row) {
    const rowDef = { id: row.id, cells: [{}, {}] };
    const columns = [
      "c",
      "d",
      "e",
      "f",
      "g",
      "h",
      "i",
      "j",
      "k",
      "l",
      "m",
      "n",
    ];
    columns.forEach((col) => {
      const cell = row.cells?.[col] ? { ...row.cells[col] } : {};
      if (col === "c" && !cell.label && row.label) cell.label = row.label;
      // Only remove properties confirmed unnecessary for rendering
      delete cell.section;
      delete cell.dependencies;
      delete cell.getOptions;
      rowDef.cells.push(cell);
    });
    return rowDef;
  }

  //==========================================================================
  // HELPER FUNCTIONS (Refactored for Self-Contained State Module)
  //==========================================================================

  function getNumericValue(fieldId) {
    // For values INTERNAL to this section
    const rawValue = ModeManager.getValue(fieldId);
    return window.TEUI.parseNumeric(rawValue) || 0;
  }

  function getGlobalNumericValue(fieldId) {
    // For values EXTERNAL to this section (from global StateManager)
    const rawValue = window.TEUI?.StateManager?.getValue(fieldId);
    return window.TEUI.parseNumeric(rawValue) || 0;
  }

  function getFieldValue(fieldId) {
    const stateValue = ModeManager.getValue(fieldId);
    if (stateValue != null) return stateValue;

    // Fallback for non-state values (e.g., legacy DOM elements)
    const element = document.querySelector(`[data-field-id="${fieldId}"]`);
    return element ? (element.value ?? element.textContent?.trim()) : null;
  }

  /**
   * Sets calculated value using simplified dual-state (ComponentBridge handles global sync)
   * @param {string} fieldId
   * @param {number} rawValue
   * @param {string} [format='number']
   */
  function setCalculatedValue(fieldId, rawValue, format = "number") {
    // Handle N/A for non-finite numbers
    if (!isFinite(rawValue) || rawValue === null || rawValue === undefined) {
      ModeManager.setValue(fieldId, "N/A", "calculated");
      const elementNA = document.querySelector(`[data-field-id="${fieldId}"]`);
      if (elementNA) elementNA.textContent = "N/A";
      return;
    }

    // Determine format if not specified
    if (format === "number") {
      if (fieldId.startsWith("g_")) {
        format = "W/m2";
      } // U-Values are 3 decimals
      else if (
        /[hjl]_[\\d]{2,}/.test(fieldId) ||
        fieldId === "h_98" ||
        fieldId === "j_98" ||
        fieldId === "l_98"
      ) {
        format = "percent";
      }
      // Default remains 'number' for others (i_, k_, e_)
    }

    const formattedValue = formatNumber(rawValue, format);

    // ✅ DUAL-STATE: Set state via ModeManager first
    ModeManager.setValue(fieldId, rawValue.toString(), "calculated");

    // Update DOM with formatted value
    const element = document.querySelector(`[data-field-id="${fieldId}"]`);
    if (element) {
      element.textContent = formattedValue;
      element.classList.toggle("negative-value", rawValue < 0);
    }
  }

  /**
   * Formats a number according to the project's display rules.
   * Handles specific formats like percentages, currency, W/m2.
   * @param {number} value - The number to format.
   * @param {string} [format='number'] - The type of format.
   * @returns {string} The formatted number as a string.
   */
  function formatNumber(value, format = "number") {
    if (value === null || value === undefined || isNaN(value)) {
      // Return 0 or 0% based on expected format
      return format === "percent" ? "0%" : format === "W/m2" ? "0.000" : "0.00";
    }

    const num = Number(value);

    if (format === "percent") {
      // Multiply decimal by 100, then format to 2 decimal places and add %
      return (
        (num * 100).toLocaleString(undefined, {
          minimumFractionDigits: 2,
          maximumFractionDigits: 2,
        }) + "%"
      );
    } else if (format === "W/m2") {
      // U-Values (3 decimals)
      return num.toLocaleString("en-US", {
        minimumFractionDigits: 3,
        maximumFractionDigits: 3,
      });
    } else {
      // Default: kWh, RSI, Rimp, Area etc. (2 decimals)
      return num.toLocaleString("en-US", {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2,
      });
    }
  }

  function setElementClass(fieldId, isGood) {
    const element = document.querySelector(`[data-field-id="${fieldId}"]`);
    if (element) {
      element.classList.remove("checkmark", "warning");
      element.classList.add(isGood ? "checkmark" : "warning");
    }
  }

  /**
   * Sets indicator classes (e.g., loss-high, loss-medium, loss-low) for a cell.
   * Removes existing indicator classes before adding the new one.
   * @param {string} fieldId - The data-field-id of the cell element.
   * @param {string} newClass - The new indicator class to add (or empty string to remove all).
   * @param {string[]} potentialClasses - An array of all possible indicator classes for this type.
   */
  function setIndicatorClass(fieldId, newClass, potentialClasses) {
    const element = document.querySelector(`[data-field-id="${fieldId}"]`);
    if (element) {
      // Determine base class type from potentialClasses
      const baseClass = potentialClasses[0]?.startsWith("loss")
        ? "loss-indicator"
        : "gain-indicator";
      const otherBaseClass =
        baseClass === "loss-indicator" ? "gain-indicator" : "loss-indicator";

      // Remove all potential indicator classes and the other base class
      element.classList.remove(...potentialClasses, otherBaseClass);

      if (newClass) {
        element.classList.add(newClass);
        // Ensure correct base class is present
        if (!element.classList.contains(baseClass)) {
          element.classList.add(baseClass);
        }
      } else {
        // Remove base class if removing indicator
        element.classList.remove(baseClass);
      }
    }
  }

  //==========================================================================
  // CALCULATION FUNCTIONS
  //==========================================================================

  function calculateComponentRow(
    rowNumber,
    config,
    isReferenceCalculation = false,
  ) {
    const { type, input } = config;
    const rowStr = rowNumber.toString();
    const areaFieldId = `d_${rowStr}`,
      rsiFieldId = `f_${rowStr}`,
      uValueFieldId = `g_${rowStr}`,
      rimpFieldId = `e_${rowStr}`,
      heatlossFieldId = `i_${rowStr}`,
      heatgainFieldId = `k_${rowStr}`;

    try {
      // Area always comes from external state (Section 10) or internal state
      let area = 0;
      const sourceAreaFieldId = areaSourceMap[rowNumber];
      area = sourceAreaFieldId
        ? getGlobalNumericValue(sourceAreaFieldId) || 0 // External dependency from S10
        : getNumericValue(areaFieldId) || 0; // Internal to S11
      if (sourceAreaFieldId && !isReferenceCalculation) {
        setCalculatedValue(areaFieldId, area);
      }

      let rsiValue, uValue, inputValue;

      // Get input values based on which engine is calling
      if (isReferenceCalculation) {
        // For Reference calculations, use reference values
        if (input === "rsi") {
          // Try to get reference RSI value
          const refFieldId = `f_${rowStr}`;
          inputValue =
            window.TEUI?.StateManager?.getReferenceValue(refFieldId) ||
            baselineValues[rowNumber]?.value ||
            getNumericValue(rsiFieldId);
          rsiValue = inputValue;
          if (rsiValue <= 0) {
            uValue = Infinity;
          } else uValue = 1 / rsiValue;
        } else {
          // input === 'uvalue'
          // Try to get reference U-value
          const refFieldId = `g_${rowStr}`;
          inputValue =
            window.TEUI?.StateManager?.getReferenceValue(refFieldId) ||
            baselineValues[rowNumber]?.value ||
            getNumericValue(uValueFieldId);
          uValue = inputValue;
          if (uValue <= 0) {
            rsiValue = Infinity;
          } else rsiValue = 1 / uValue;
        }
      } else {
        // For Target calculations, use application values
        if (input === "rsi") {
          inputValue = getNumericValue(rsiFieldId);
          rsiValue = inputValue;
          if (rsiValue <= 0) {
            uValue = Infinity;
          } else uValue = 1 / rsiValue;
        } else {
          // input === 'uvalue'
          inputValue = getNumericValue(uValueFieldId);
          uValue = inputValue;
          if (uValue <= 0) {
            rsiValue = Infinity;
          } else rsiValue = 1 / uValue;
        }
      }

      // Update complementary value display only for Target calculations
      if (!isReferenceCalculation) {
        setCalculatedValue(
          uValueFieldId,
          uValue === Infinity ? "N/A" : uValue,
          "W/m2",
        );
        setCalculatedValue(
          rsiFieldId,
          rsiValue === Infinity ? "N/A" : rsiValue,
          "number",
        );
      }

      // ✅ FIX: Read climate data based on calculation type (S03 canonical pattern)
      let hdd, heatgainMultiplier;
      if (type === "air") {
        if (isReferenceCalculation) {
          // Reference calculations: read ref_ prefixed climate data
          const ref_hdd = getGlobalNumericValue("ref_d_20");
          const global_hdd = getGlobalNumericValue("d_20");
          hdd = ref_hdd || global_hdd || 0;

          const ref_cdd = getGlobalNumericValue("ref_d_21");
          const global_cdd = getGlobalNumericValue("d_21");
          heatgainMultiplier = (ref_cdd || global_cdd || 0) * 24;

          // 🔍 S11 REFERENCE CONTAMINATION TRACKER
          // console.log(`🔍 S11 REFERENCE: HDD=${hdd} (ref_d_20=${ref_hdd}, global_d_20=${global_hdd})`);
          // console.log(`🔍 S11 REFERENCE: CDD=${heatgainMultiplier/24} (ref_d_21=${ref_cdd}, global_d_21=${global_cdd})`);
        } else {
          // ✅ FIXED: Target calculations read unprefixed climate data (Pattern A)
          const hdd_value = getGlobalNumericValue("d_20") || 0;
          hdd = hdd_value;

          const cdd_value = getGlobalNumericValue("d_21") || 0;
          heatgainMultiplier = cdd_value * 24;

          // 🚨 S11 TARGET CONTAMINATION TRACKER
          // console.log(`🚨 S11 TARGET: HDD=${hdd} (target_d_20=${target_hdd}, global_d_20=${global_hdd})`);
          // console.log(`🚨 S11 TARGET: CDD=${heatgainMultiplier/24} (target_d_21=${target_cdd}, global_d_21=${global_cdd})`);
          // if (!target_hdd && global_hdd) {
          //   console.log(`🚨 S11 TARGET CONTAMINATION: Using contaminated global_d_20=${global_hdd} because target_d_20 is missing!`);
          // }
          // if (!target_cdd && global_cdd) {
          //   console.log(`🚨 S11 TARGET CONTAMINATION: Using contaminated global_d_21=${global_cdd} because target_d_21 is missing!`);
          // }
        }
      } else {
        // ground
        if (isReferenceCalculation) {
          // Reference calculations: read ref_ prefixed climate data
          hdd =
            getGlobalNumericValue("ref_d_22") ||
            getGlobalNumericValue("d_22") ||
            0;
        } else {
          // ✅ FIXED: Target calculations read unprefixed climate data (Pattern A)
          hdd = getGlobalNumericValue("d_22") || 0;
        }

        // Get value from i_21 (assume it's stored as percentage, e.g., 50 for 50%)
        let capacitanceFactor_i21 = getGlobalNumericValue("i_21");
        // Convert percentage to decimal, fallback to 0.5 (50%) if input is invalid or missing
        capacitanceFactor_i21 = capacitanceFactor_i21 / 100;
        if (isNaN(capacitanceFactor_i21) || capacitanceFactor_i21 === 0) {
          capacitanceFactor_i21 = 0.5; // Apply fallback if result is invalid or zero
        }

        if (isReferenceCalculation) {
          // Reference calculations: read ref_ prefixed climate data
          heatgainMultiplier =
            capacitanceFactor_i21 *
            (getGlobalNumericValue("ref_h_22") ||
              getGlobalNumericValue("h_22") ||
              0) *
            24;
        } else {
          // Target calculations: read target_ prefixed climate data
          heatgainMultiplier =
            capacitanceFactor_i21 *
            (getGlobalNumericValue("target_h_22") ||
              getGlobalNumericValue("h_22") ||
              0) *
            24;
        }
      }

      const denominator = rsiValue * 1000;
      let calcHeatloss = 0,
        calcHeatgain = 0,
        calcRimp = 0;
      if (area > 0 && rsiValue !== Infinity && uValue !== Infinity) {
        calcRimp = rsiValue * 5.678;
        calcHeatloss = (area * hdd * 24) / denominator;
        calcHeatgain = (area * heatgainMultiplier) / denominator;
      }

      // For Reference calculations, return the calculated values
      if (isReferenceCalculation) {
        return { heatloss: calcHeatloss, heatgain: calcHeatgain };
      }

      // For Target calculations, update the DOM
      setCalculatedValue(rimpFieldId, calcRimp);
      setCalculatedValue(heatlossFieldId, calcHeatloss);
      setCalculatedValue(heatgainFieldId, calcHeatgain);
    } catch (error) {
      console.error(`Error calculating row ${rowNumber}:`, error);
      if (isReferenceCalculation) {
        return { heatloss: 0, heatgain: 0 };
      } else {
        [
          rimpFieldId,
          rsiFieldId,
          uValueFieldId,
          heatlossFieldId,
          heatgainFieldId,
        ].forEach((id) => setCalculatedValue(id, 0));
      }
    }
  }

  function calculateThermalBridgePenalty(
    componentHeatlossSubtotal,
    componentHeatgainSubtotal,
    isReferenceCalculation = false,
  ) {
    try {
      // Get the thermal bridge penalty value based on calculation mode
      let penaltyPercent;
      if (isReferenceCalculation) {
        // For Reference calculations, use ReferenceState value
        penaltyPercent =
          window.TEUI.parseNumeric(ReferenceState.getValue("d_97")) || 0;
      } else {
        // For Target calculations, use TargetState value
        penaltyPercent =
          window.TEUI.parseNumeric(TargetState.getValue("d_97")) || 0;
      }

      // Convert percentage to decimal factor for calculation
      const penaltyDecimal = penaltyPercent / 100;
      const validatedPenalty = Math.max(0, Math.min(1, penaltyDecimal)); // Keep validation just in case

      // Calculate penalty amounts
      const penaltyHeatloss = componentHeatlossSubtotal * validatedPenalty;
      const penaltyHeatgain = componentHeatgainSubtotal * validatedPenalty;

      // For Reference calculations, return the calculated values (stored elsewhere)
      if (isReferenceCalculation) {
        console.log(
          `[S11] REF TB%=${penaltyPercent}% → ref_i_97=${penaltyHeatloss.toFixed(
            2,
          )}, ref_k_97=${penaltyHeatgain.toFixed(2)}`,
        );
      }
      if (isReferenceCalculation) {
        return { heatloss: penaltyHeatloss, heatgain: penaltyHeatgain };
      }

      // For Target calculations, update the DOM and state
      setCalculatedValue("e_97", validatedPenalty, "number-3dp"); // Show decimal with 3dp
      setCalculatedValue("i_97", penaltyHeatloss);
      setCalculatedValue("k_97", penaltyHeatgain);
    } catch (error) {
      console.error("Error calculating TBP:", error);
      if (isReferenceCalculation) {
        return { heatloss: 0, heatgain: 0 };
      } else {
        setCalculatedValue("i_97", 0);
        setCalculatedValue("k_97", 0);
      }
    }
  }

  function updateReferenceIndicators(rowId) {
    const baseline = baselineValues[rowId];
    if (!baseline) return;
    const mFieldId = `m_${rowId}`,
      nFieldId = `n_${rowId}`;
    let referencePercent = 100,
      isGood = true;

    try {
      // ✅ REFERENCE MODE: Perfect Compliance (Always 100% and ✓)
      if (ModeManager.currentMode === "reference") {
        referencePercent = 100; // Always 100% in reference mode
        isGood = true; // Always pass in reference mode

        setCalculatedValue(mFieldId, 1.0, "percent"); // 1.0 = 100%
        const nElement = document.querySelector(
          `[data-field-id="${nFieldId}"]`,
        );
        if (nElement) nElement.textContent = "✓";
        setElementClass(nFieldId, true);
        return;
      }

      // ✅ TARGET MODE: Performance Comparison (Dynamic reference values)
      let valueSourceFieldId = null;
      let referenceFieldId = null;

      if (baseline.type === "rsi") {
        valueSourceFieldId = `f_${rowId}`;
        referenceFieldId = `f_${rowId}`;
      } else if (baseline.type === "uvalue") {
        valueSourceFieldId = `g_${rowId}`;
        referenceFieldId = `g_${rowId}`;
      } else if (baseline.type === "penalty") {
        valueSourceFieldId = `d_${rowId}`;
        referenceFieldId = `d_${rowId}`;
      }

      if (!valueSourceFieldId) return;

      // Get current (Target) value
      const currentValue = getNumericValue(valueSourceFieldId);

      // Get dynamic reference value from ReferenceState
      const referenceValue = ReferenceState.getValue(referenceFieldId);
      const referenceNumeric =
        window.TEUI.parseNumeric(referenceValue) || baseline.value;

      // Calculate percentage and pass/fail based on comparison type
      if (baseline.type === "rsi") {
        // RSI: Higher is better (current ÷ reference × 100%)
        if (referenceNumeric > 0 && !isNaN(currentValue)) {
          referencePercent = (currentValue / referenceNumeric) * 100;
        }
        isGood = currentValue >= referenceNumeric;
      } else if (baseline.type === "uvalue") {
        // U-value: Lower is better (reference ÷ current × 100%)
        if (currentValue > 0 && !isNaN(currentValue)) {
          referencePercent = (referenceNumeric / currentValue) * 100;
        }
        isGood = currentValue <= referenceNumeric;
      } else if (baseline.type === "penalty") {
        // Thermal Bridge Penalty: Lower is better (reference ÷ current × 100%)
        const refPenalty = referenceNumeric / 100;
        const currentPenalty = currentValue / 100;
        isGood = currentPenalty <= refPenalty;
        if (currentPenalty > 0) {
          referencePercent = (refPenalty / currentPenalty) * 100;
        }
      }

      // Update DOM with calculated values
      setCalculatedValue(mFieldId, referencePercent / 100, "percent");
      const nElement = document.querySelector(`[data-field-id="${nFieldId}"]`);
      if (nElement) nElement.textContent = isGood ? "✓" : "✗";
      setElementClass(nFieldId, isGood);
    } catch (error) {
      console.error(
        `Error updating reference indicators for row ${rowId}:`,
        error,
      );
      const mElementErr = document.querySelector(
        `[data-field-id="${mFieldId}"]`,
      );
      if (mElementErr) mElementErr.textContent = "Error";
      const nElementErr = document.querySelector(
        `[data-field-id="${nFieldId}"]`,
      );
      if (nElementErr) nElementErr.textContent = "?";
    }
  }

  //==========================================================================
  // DUAL-ENGINE ARCHITECTURE
  //==========================================================================

  /**
   * REFERENCE MODEL ENGINE: Calculate all Column E values using Reference state
   * Stores results with ref_ prefix to keep separate from Target values
   */
  function calculateReferenceModel() {
    // console.log('[Section11] Running Reference Model calculations...'); // Comment out

    let totals = { loss: 0, gain: 0, areaD: 0, airAreaD: 0, groundAreaD: 0 };
    const componentResults = {};

    componentConfig.forEach((config) => {
      // Calculate using reference values
      const result = calculateComponentRow(config.row, config, true); // true = isReferenceCalculation

      const area = getNumericValue(`d_${config.row}`) || 0;
      const heatloss = result ? result.heatloss : 0;
      const heatgain = result ? result.heatgain : 0;

      // Store for later use
      componentResults[config.row] = { heatloss, heatgain };

      totals.loss += heatloss;
      totals.gain += heatgain;
      if (config.row >= 85 && config.row <= 95) totals.areaD += area;
      if (config.type === "air") totals.airAreaD += area;
      else if (config.type === "ground") totals.groundAreaD += area;
    });

    // Calculate thermal bridge penalty using reference values
    const penaltyResults = calculateThermalBridgePenalty(
      totals.loss,
      totals.gain,
      true,
    ); // true = isReferenceCalculation
    const penaltyHeatlossI = penaltyResults ? penaltyResults.heatloss : 0;
    const penaltyHeatgainK = penaltyResults ? penaltyResults.heatgain : 0;

    // Store Reference Model results with ref_ prefix
    if (window.TEUI?.StateManager) {
      // Component totals
      window.TEUI.StateManager.setValue(
        "ref_d_98",
        totals.areaD.toString(),
        "calculated",
      );
      window.TEUI.StateManager.setValue(
        "ref_i_98",
        totals.loss.toString(),
        "calculated",
      );
      window.TEUI.StateManager.setValue(
        "ref_k_98",
        totals.gain.toString(),
        "calculated",
      );

      // Penalty values
      console.log(
        `[S11] Writing ref penalty: ref_i_97=${penaltyHeatlossI.toFixed(2)}, ref_k_97=${penaltyHeatgainK.toFixed(
          2,
        )}`,
      );
      window.TEUI.StateManager.setValue(
        "ref_i_97",
        penaltyHeatlossI.toString(),
        "calculated",
      );
      window.TEUI.StateManager.setValue(
        "ref_k_97",
        penaltyHeatgainK.toString(),
        "calculated",
      );

      // Store individual component reference values (calculated results)
      Object.entries(componentResults).forEach(([row, results]) => {
        const rowStr = row.toString();

        window.TEUI.StateManager.setValue(
          `ref_i_${rowStr}`,
          results.heatloss.toString(),
          "calculated",
        );
        window.TEUI.StateManager.setValue(
          `ref_k_${rowStr}`,
          results.heatgain.toString(),
          "calculated",
        );
      });

      // ✅ CRITICAL FIX: Store Reference input values for S12 consumption
      // Store all Reference areas (d_85, d_86, etc.)
      const areaFields = [
        "d_85",
        "d_86",
        "d_87",
        "d_88",
        "d_89",
        "d_90",
        "d_91",
        "d_92",
        "d_93",
        "d_94",
        "d_95",
        "d_96",
      ];
      areaFields.forEach((fieldId) => {
        const value = ReferenceState.getValue(fieldId);
        if (value !== null && value !== undefined) {
          window.TEUI.StateManager.setValue(
            `ref_${fieldId}`,
            value.toString(),
            "calculated",
          );
        }
      });

      // Store all Reference RSI values (f_85, f_86, etc.)
      const rsiFields = ["f_85", "f_86", "f_87", "f_94", "f_95"];
      rsiFields.forEach((fieldId) => {
        const value = ReferenceState.getValue(fieldId);
        if (value !== null && value !== undefined) {
          window.TEUI.StateManager.setValue(
            `ref_${fieldId}`,
            value.toString(),
            "calculated",
          );
        }
      });

      // Store all Reference U-values (g_85, g_86, etc.)
      const uValueFields = [
        "g_85",
        "g_86",
        "g_87",
        "g_88",
        "g_89",
        "g_90",
        "g_91",
        "g_92",
        "g_93",
        "g_94",
        "g_95",
      ];
      uValueFields.forEach((fieldId) => {
        const value = ReferenceState.getValue(fieldId);
        if (value !== null && value !== undefined) {
          window.TEUI.StateManager.setValue(
            `ref_${fieldId}`,
            value.toString(),
            "calculated",
          );
        }
      });

      // Store Reference thermal bridging penalty
      const d97Value = ReferenceState.getValue("d_97");
      if (d97Value !== null && d97Value !== undefined) {
        window.TEUI.StateManager.setValue(
          `ref_d_97`,
          d97Value.toString(),
          "calculated",
        );
      }
    }

    // Store results at module level for later re-writing in calculateAll
    lastReferenceResults = {
      ...componentResults,
      // Also store penalty values to prevent overwrites
      penalty: { heatloss: penaltyHeatlossI, heatgain: penaltyHeatgainK },
    };

    // console.log('[Section11] Reference Model values stored'); // Comment out
  }

  /**
   * TARGET MODEL ENGINE: Calculate all Column H values using Application state
   * This is the existing calculateAll logic, refactored
   */
  function calculateTargetModel() {
    // console.log('[Section11] Running Target Model calculations...'); // Comment out

    let totals = { loss: 0, gain: 0, areaD: 0, airAreaD: 0, groundAreaD: 0 };

    componentConfig.forEach((config) => {
      calculateComponentRow(config.row, config, false); // false = Target calculation
      const area = getNumericValue(`d_${config.row}`) || 0;
      totals.loss += getNumericValue(`i_${config.row}`) || 0;
      totals.gain += getNumericValue(`k_${config.row}`) || 0;
      if (config.row >= 85 && config.row <= 95) totals.areaD += area;
      if (config.type === "air") totals.airAreaD += area;
      else if (config.type === "ground") totals.groundAreaD += area;
    });

    calculateThermalBridgePenalty(totals.loss, totals.gain, false); // false = Target calculation
    const penaltyHeatlossI = getNumericValue("i_97") || 0;
    const penaltyHeatgainK = getNumericValue("k_97") || 0;

    // Grand totals include component subtotals + penalty
    // Corrected: i_98 should only be the sum of components 85-95
    const grandTotalHeatlossI = totals.loss; // Removed + penaltyHeatlossI
    // Corrected: k_98 should be SUM(K85:K95) and EXCLUDE k_97 (penaltyHeatgainK)
    const grandTotalHeatgainK = totals.gain;

    // Set totals for Row 98
    setCalculatedValue("d_98", totals.areaD);
    setCalculatedValue("i_98", grandTotalHeatlossI);
    setCalculatedValue("k_98", grandTotalHeatgainK);

    // Calculate Percentages and Update Reference Indicators
    const totalAreaAe = totals.airAreaD > 0 ? totals.airAreaD : 1;
    const totalAreaAg = totals.groundAreaD > 0 ? totals.groundAreaD : 1;
    const rowsToProcess = [...componentConfig, { row: 97 }];
    const lossIndicatorClasses = ["loss-high", "loss-medium", "loss-low"];
    const gainIndicatorClasses = ["gain-high", "gain-medium", "gain-low"]; // Define gain classes

    rowsToProcess.forEach((config) => {
      const rowStr = config.row.toString();
      const hCellFieldId = `h_${rowStr}`; // Field ID for Column H
      const jCellFieldId = `j_${rowStr}`; // Field ID for Column J

      if (config.row !== 97) {
        // Area % only for components
        const area = getNumericValue(`d_${rowStr}`) || 0;
        const hValue =
          config.type === "air"
            ? (area / totalAreaAe) * 100
            : config.type === "ground"
              ? (area / totalAreaAg) * 100
              : 0;
        setCalculatedValue(hCellFieldId, hValue / 100, "percent");

        // Apply text color class to Column H based on type
        const hElement = document.querySelector(
          `[data-field-id="${hCellFieldId}"]`,
        );
        if (hElement) {
          hElement.classList.remove("text-air-facing", "text-ground-facing");
          if (config.type === "air") {
            hElement.classList.add("text-air-facing");
          } else if (config.type === "ground") {
            hElement.classList.add("text-ground-facing");
          }
        }
      }
      const heatloss = getNumericValue(`i_${rowStr}`) || 0;
      const heatingPercentDecimal =
        grandTotalHeatlossI > 0 ? heatloss / grandTotalHeatlossI : 0; // Pass raw fraction
      setCalculatedValue(jCellFieldId, heatingPercentDecimal, "percent");

      // Apply Loss Indicator Class to Column J
      let htgGainClass = "";
      const absHtgPercent = Math.abs(heatingPercentDecimal * 100);
      // Thresholds for loss contribution: Red >= 15%, Yellow >= 5%, Green < 5%
      if (absHtgPercent >= 15) {
        htgGainClass = "loss-high";
      } // Red for high heat loss contribution
      else if (absHtgPercent >= 5) {
        htgGainClass = "loss-medium";
      } // Yellow
      else if (absHtgPercent >= 0) {
        htgGainClass = "loss-low";
      } // Green
      setIndicatorClass(jCellFieldId, htgGainClass, gainIndicatorClasses);

      const heatgain = getNumericValue(`k_${rowStr}`) || 0;
      const coolingPercentDecimal =
        Math.abs(totals.gain) > 1e-6 ? -heatgain / totals.gain : 0; // Pass raw fraction
      const lCellFieldId = `l_${rowStr}`; // Field ID for Column L
      setCalculatedValue(lCellFieldId, coolingPercentDecimal, "percent");

      // Apply Gain Indicator Class to Column L
      let coolGainClass = "";
      // Thresholds for gain contribution: Red >= 15% (bad), Yellow >= 5%, Green < 5% (good)
      const absCoolPercent = Math.abs(coolingPercentDecimal * 100);
      if (absCoolPercent >= 15) {
        coolGainClass = "gain-high";
      } // Red for high heat gain contribution
      else if (absCoolPercent >= 5) {
        coolGainClass = "gain-medium";
      } // Yellow
      else if (absCoolPercent >= 0) {
        coolGainClass = "gain-low";
      } // Green
      setIndicatorClass(lCellFieldId, coolGainClass, gainIndicatorClasses);

      // --- Apply Left Alignment to J & L Columns ---
      const jElement = document.querySelector(
        `[data-field-id="${jCellFieldId}"]`,
      );
      if (jElement) jElement.classList.add("text-left-indicator");
      const lElement = document.querySelector(
        `[data-field-id="${lCellFieldId}"]`,
      );
      if (lElement) lElement.classList.add("text-left-indicator");
      // --- End Left Alignment ---

      // Update reference indicators for all rows
      updateReferenceIndicators(config.row);
    });
  }

  /**
   * DUAL-ENGINE ORCHESTRATION
   * Replaces the original calculateAll function
   */
  // Store reference results at module level for access in calculateAll
  let lastReferenceResults = {};

  function calculateAll() {
    console.log(
      `%c[S11] calculateAll TRIGGERED. isReferenceMode: ${window.TEUI?.ReferenceToggle?.isReferenceMode?.()}`,
      "color: #f0f; font-weight: bold;",
    );

    calculateReferenceModel();
    calculateTargetModel();

    // ✅ FIX: Re-write Reference values after all calculations to prevent overwrites
    // Re-store the component Reference values after potential downstream overwrites
    if (window.TEUI?.StateManager && lastReferenceResults) {
      Object.entries(lastReferenceResults).forEach(([key, results]) => {
        if (key === "penalty") {
          // Re-write thermal bridge penalty values
          window.TEUI.StateManager.setValue(
            "ref_i_97",
            results.heatloss.toString(),
            "calculated",
          );
          window.TEUI.StateManager.setValue(
            "ref_k_97",
            results.heatgain.toString(),
            "calculated",
          );
        } else {
          // Re-write component values
          const rowStr = key.toString();
          window.TEUI.StateManager.setValue(
            `ref_i_${rowStr}`,
            results.heatloss.toString(),
            "calculated",
          );
          window.TEUI.StateManager.setValue(
            `ref_k_${rowStr}`,
            results.heatgain.toString(),
            "calculated",
          );
        }
      });
    }

    // Refresh displayed values according to current mode
    if (typeof ModeManager.updateCalculatedDisplayValues === "function") {
      ModeManager.updateCalculatedDisplayValues();
    }
    // console.warn("S11: Dual-engine calculations complete"); // This was already commented
  }

  //==========================================================================
  // EVENT HANDLING & INITIALIZATION
  //==========================================================================

  /**
   * TODO: Optimize initial calculation flow.
   * The current sequence involves rendering with defaults (often "0.00"),
   * then running calculateAll which updates the values, causing a visual "flash".
   * This flash was previously resolved in the ORDERING refactor branch but was
   * re-introduced with the dual-engine reference system. It is a minor glitch but a known one.
   * Future improvements could involve:
   * - Calculating values *before* initial render.
   * - Using placeholders ("---") instead of "0.00" as defaults.
   * - Optimizing the calculateAll sequence itself.
   * For now, the flash is accepted as known behavior.
   */
  function handleFieldBlur(_event) {
    const fieldElement = this;
    const currentFieldId = fieldElement.getAttribute("data-field-id");
    if (!currentFieldId) return;
    let valueStr = fieldElement.textContent.trim().replace(/,/g, "");
    let displayValue = "0.00";
    let rawValueToStore = "0";

    let numValue = window.TEUI.parseNumeric(valueStr, NaN);

    if (!isNaN(numValue)) {
      // Successfully parsed a number
      rawValueToStore = numValue.toString(); // Store the raw number string *first* for all valid number cases

      // Apply specific formatting based on field type
      if (currentFieldId === "d_97") {
        // Thermal Bridge Penalty (%)
        // Convert input number to decimal (assume input "20" means 20% -> 0.2)
        let decimalValue = numValue / 100;
        // Clamp the DECIMAL value between 0 and 1
        decimalValue = Math.max(0, Math.min(1, decimalValue));
        rawValueToStore = decimalValue.toString(); // Overwrite with clamped decimal value for storage
        displayValue = formatNumber(decimalValue * 100, "number"); // Display as number 0-100, not percentage string
      } else if (currentFieldId.startsWith("g_")) {
        // U-Value (3 decimals)
        displayValue = formatNumber(numValue, "W/m2"); // Use specific format
      } else {
        // Default: Area (d_), RSI (f_) - 2 decimals
        displayValue = formatNumber(numValue, "number");
      }
    } else {
      // Handle invalid input (set to 0 or 0%)
      if (currentFieldId === "d_97") {
        displayValue = "0%";
        rawValueToStore = "0"; // Store 0 for invalid TBP
      } else if (currentFieldId.startsWith("g_")) {
        displayValue = formatNumber(0, "W/m2");
        rawValueToStore = "0";
      } else {
        displayValue = formatNumber(0, "number");
        rawValueToStore = "0";
      }
    }
    fieldElement.textContent = displayValue;

    // ✅ DUAL-STATE: Store value using the ModeManager facade.
    ModeManager.setValue(currentFieldId, rawValueToStore, "user-modified");

    calculateAll();
  }

  function initializeEventHandlers() {
    editableFields.forEach((fieldId) => {
      const field = document.querySelector(`[data-field-id="${fieldId}"]`);
      // Attach listeners only to fields actually found and marked as editable
      if (field?.classList.contains("editable")) {
        if (!field.hasEditableListeners) {
          // Prevent adding multiple listeners
          field.addEventListener("keydown", (e) => {
            if (e.key === "Enter") {
              e.preventDefault();
              field.blur();
            }
          });
          field.addEventListener("blur", handleFieldBlur.bind(field)); // Ensure 'this' context
          field.addEventListener("focus", () => field.classList.add("editing"));
          field.addEventListener("focusout", () =>
            field.classList.remove("editing"),
          );
          field.hasEditableListeners = true; // Mark as listener attached
        }
      }
      // Removed console.warn for missing/non-editable fields
    });

    // *** ADDED: Specific listener for d_97 slider ***
    const d97Slider = document.querySelector(
      'input[type="range"][data-field-id="d_97"]',
    );
    if (d97Slider) {
      if (!d97Slider.hasSliderListener) {
        // Prevent adding multiple listeners
        // LIVE FEEDBACK: Update StateManager + immediate calculations for responsive UI
        d97Slider.addEventListener("input", function () {
          const percentageValue = parseFloat(this.value);
          if (isNaN(percentageValue)) return;

          // Update the display span
          const displaySpan = this.parentElement.querySelector(".slider-value");
          if (displaySpan) {
            displaySpan.textContent = percentageValue.toFixed(0) + "%";
          }

          // ✅ DUAL-STATE: Update via ModeManager (handles both state and StateManager sync)
          const src = "user-modified";
          ModeManager.setValue("d_97", percentageValue.toString(), src);
          console.log(
            `[S11] Slider input d_97=${percentageValue} (localMode=${ModeManager.currentMode})`,
          );

          // Trigger local recalculation; cross-section updates flow via StateManager listeners
          calculateAll();
        });

        // ARCHITECTURAL COMPLIANCE: Final change event relies on StateManager dependency chain
        d97Slider.addEventListener("change", function () {
          const percentageValue = parseFloat(this.value);
          if (isNaN(percentageValue)) return;

          // ✅ DUAL-STATE: Final value goes through ModeManager - handles state and dependency chain
          const src = "user-modified";
          ModeManager.setValue("d_97", percentageValue.toString(), src);
          console.log(
            `[S11] Slider change d_97=${percentageValue} (localMode=${ModeManager.currentMode})`,
          );
          // Note: StateManager listeners will handle full recalculation cascade
          // Stopgap robot fingers to ensure S12 updates immediately in both modes
          if (window.TEUI?.SectionModules?.sect12?.calculateAll) {
            window.TEUI.SectionModules.sect12.calculateAll();
          }
        });

        d97Slider.hasSliderListener = true; // Mark as listener attached
      }
    } else {
      console.warn("Slider for d_97 not found during initialization.");
    }
    // *** END ADDED ***

    // Add listeners for climate data changes from Section 3
    if (window.TEUI?.StateManager?.addListener) {
      window.TEUI.StateManager.addListener("d_20", calculateAll); // HDD
      window.TEUI.StateManager.addListener("d_21", calculateAll); // CDD
      window.TEUI.StateManager.addListener("h_22", calculateAll); // GF CDD (affects ground gain)
      window.TEUI.StateManager.addListener("d_22", calculateAll); // GF HDD (affects ground loss)

      // ✅ ADDED: Listeners for REFERENCE climate data to trigger Reference Model recalculation
      window.TEUI.StateManager.addListener("ref_d_20", () => calculateAll());
      window.TEUI.StateManager.addListener("ref_d_21", () => calculateAll());
      window.TEUI.StateManager.addListener("ref_h_22", () => calculateAll());
      window.TEUI.StateManager.addListener("ref_d_22", () => calculateAll());

      window.TEUI.StateManager.addListener("i_21", calculateAll); // Capacitance Factor (affects ground gain)
      window.TEUI.StateManager.addListener("d_97", (val, _old, _id, src) => {
        console.log(
          `[S11] Listener: d_97 changed → recalculating (src=${src})`,
        );
        calculateAll();
      });
      // Reference-side TB% (if written as ref_d_97) should also trigger recalculation
      window.TEUI.StateManager.addListener(
        "ref_d_97",
        (val, _old, _id, src) => {
          console.log(
            `[S11] Listener: ref_d_97 changed → recalculating (src=${src})`,
          );
          calculateAll();
        },
      );
      // console.log("Section 11 listeners for climate data added.");
    } else {
      // console.warn("Section 11: StateManager not available to add climate listeners.");
    }
  }

  /**
   * Creates and injects the Target/Reference toggle and Reset button into the section header.
   */
  function injectHeaderControls() {
    const sectionHeader = document.querySelector(
      "#envelopeTransmissionLosses .section-header",
    );
    if (
      !sectionHeader ||
      sectionHeader.querySelector(".local-controls-container")
    ) {
      return; // Already setup or header not found
    }

    const controlsContainer = document.createElement("div");
    controlsContainer.className = "local-controls-container";
    controlsContainer.style.cssText =
      "display: flex; align-items: center; margin-left: auto; gap: 10px;";

    // --- Create Reset Button ---
    const resetButton = document.createElement("button");
    resetButton.innerHTML = "🔄 Reset"; // Using an icon for clarity
    resetButton.title = "Reset Section 11 to Defaults";
    resetButton.style.cssText =
      "padding: 4px 8px; font-size: 0.8em; background-color: #dc3545; color: white; border: none; border-radius: 4px; cursor: pointer;";

    resetButton.addEventListener("click", (event) => {
      event.stopPropagation();
      // Use a confirmation dialog to prevent accidental resets
      if (
        confirm(
          "Are you sure you want to reset all inputs in this section to their defaults? This will clear any saved data for Section 11.",
        )
      ) {
        ModeManager.resetState();
      }
    });

    // --- Create Toggle Switch ---
    const stateIndicator = document.createElement("span");
    stateIndicator.textContent = "TARGET";
    stateIndicator.style.cssText =
      "color: #fff; font-weight: bold; font-size: 0.8em; background-color: rgba(0, 123, 255, 0.5); padding: 2px 6px; border-radius: 4px;";

    const toggleSwitch = document.createElement("div");
    toggleSwitch.style.cssText =
      "position: relative; width: 40px; height: 20px; background-color: #ccc; border-radius: 10px; cursor: pointer;";

    const slider = document.createElement("div");
    slider.style.cssText =
      "position: absolute; top: 2px; left: 2px; width: 16px; height: 16px; background-color: white; border-radius: 50%; transition: transform 0.2s;";

    toggleSwitch.appendChild(slider);

    toggleSwitch.addEventListener("click", (event) => {
      event.stopPropagation();
      const isReference = toggleSwitch.classList.toggle("active");
      if (isReference) {
        slider.style.transform = "translateX(20px)";
        toggleSwitch.style.backgroundColor = "#28a745";
        stateIndicator.textContent = "REFERENCE";
        stateIndicator.style.backgroundColor = "rgba(40, 167, 69, 0.7)";
        ModeManager.switchMode("reference");
      } else {
        slider.style.transform = "translateX(0px)";
        toggleSwitch.style.backgroundColor = "#ccc";
        stateIndicator.textContent = "TARGET";
        stateIndicator.style.backgroundColor = "rgba(0, 123, 255, 0.5)";
        ModeManager.switchMode("target");
      }
    });

    // Append all controls to the container, then the container to the header
    controlsContainer.appendChild(resetButton);
    controlsContainer.appendChild(stateIndicator);
    controlsContainer.appendChild(toggleSwitch);
    sectionHeader.appendChild(controlsContainer);
  }

  function onSectionRendered() {
    console.log(
      "S11: Section rendered - initializing Self-Contained State Module.",
    );

    // 1. Initialize the ModeManager and its internal states
    ModeManager.initialize();

    // 2. Setup the section-specific toggle switch in the header
    injectHeaderControls();

    // 3. Initialize event handlers for this section
    initializeEventHandlers();

    // 4. Sync UI to the default (Target) state
    ModeManager.refreshUI();

    // ✅ CRITICAL FIX: Mode-aware area display listeners (prevent state contamination)
    Object.entries(areaSourceMap).forEach(([targetRow, sourceFieldId]) => {
      const targetFieldId = `d_${targetRow}`;
      
      if (window.TEUI?.StateManager?.addListener) {
        // Listen for Target area changes from S10 (unprefixed)
        window.TEUI.StateManager.addListener(sourceFieldId, (newValue) => {
          console.log(`[S11 AREA] Target listener: ${sourceFieldId}=${newValue} → ${targetFieldId}`);
          if (ModeManager.currentMode === "target") {
            const element = document.querySelector(`[data-field-id="${targetFieldId}"]`);
            if (element) {
              const num = window.TEUI.parseNumeric(newValue, 0);
              element.textContent = formatNumber(num, "number");
            }
          }
        });
        
        // Listen for Reference area changes from S10 (ref_ prefixed)
        window.TEUI.StateManager.addListener(`ref_${sourceFieldId}`, (newValue) => {
          console.log(`[S11 AREA] Reference listener: ref_${sourceFieldId}=${newValue} → ${targetFieldId}`);
          if (ModeManager.currentMode === "reference") {
            const element = document.querySelector(`[data-field-id="${targetFieldId}"]`);
            if (element) {
              const num = window.TEUI.parseNumeric(newValue, 0);
              element.textContent = formatNumber(num, "number");
            }
          }
        });
      }
    });

    // Expose ModeManager globally for cross-section communication (e.g., global toggle)
    if (window.TEUI) {
      window.TEUI.sect11 = window.TEUI.sect11 || {};
      window.TEUI.sect11.ModeManager = ModeManager;
      console.log(
        "S11: ModeManager exposed globally for cross-section integration.",
      );
    }

    // 5. Perform initial calculations for this section
    calculateAll();
  }

  //==========================================================================
  // REFERENCE MODEL HANDLING (Refactored to use Factory)
  //==========================================================================

  // Create the reference handler using the factory function from ReferenceManager
  const referenceHandler = TEUI.ReferenceManager.createReferenceHandler({
    sectionId: "envelopeTransmissionLosses",
    sectionName: "Transmission Losses",
    sectionCalculateAll: calculateAll,
    sectionRecalculateRow: calculateComponentRow, // Pass the specific row recalculation function
    componentConfig: componentConfig, // Pass the config needed by sectionRecalculateRow
    sectionUpdateIndicators: updateReferenceIndicators, // Pass the indicator update function
  });

  //==========================================================================
  // PUBLIC API
  //==========================================================================
  return {
    getFields,
    getDropdownOptions,
    getLayout,
    initializeEventHandlers,
    onSectionRendered,
    calculateAll,
    referenceHandler, // Expose the generated handler

    // ✅ CRITICAL FIX: Export ModeManager for dual-state field routing
    ModeManager: ModeManager,
  };
})();

// REMOVED Event Listeners
// // Initialize when the section is rendered
// document.addEventListener('teui-section-rendered', (event) => {
//     if (event.detail?.sectionId === 'transmissionLosses') {
//         // Small delay to ensure other sections are ready and StateManager has values
//         setTimeout(() => { window.TEUI.SectionModules.sect11?.onSectionRendered(); }, 50);
//     }
// });
//
// // Fallback to rendering complete event (ensure it runs even if teui-section-rendered is missed)
// document.addEventListener('teui-rendering-complete', () => {
//     setTimeout(() => { if (document.getElementById('transmissionLosses')) window.TEUI.SectionModules.sect11?.onSectionRendered(); }, 250);
// });
