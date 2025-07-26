/**
 * 4011-Section12.js
 * Volume and Surface Metrics (Section 12) module for TEUI Calculator 4.011
 * REFACTORED TO PATTERN A DUAL-STATE ARCHITECTURE (Bridge to Global Toggle)
 */

window.TEUI = window.TEUI || {};
window.TEUI.SectionModules = window.TEUI.SectionModules || {};

window.TEUI.SectionModules.sect12 = (function () {
  let isInitialized = false;
  let s12ListenersAdded = false;

  //==========================================================================
  // DUAL-STATE ARCHITECTURE (Self-Contained State Module - Pattern A)
  //==========================================================================
  
  // PATTERN 1: Internal State Objects (Self-Contained + Persistent)
  const TargetState = {
    state: {},
    listeners: {},
    initialize: function () {
      const savedState = localStorage.getItem("S12_TARGET_STATE");
      if (savedState) {
        this.state = JSON.parse(savedState);
      } else {
        this.setDefaults();
      }
    },
    setDefaults: function () {
      // Only store the 5 user editable fields - all other values are calculated
      this.state = {
        d_103: "1.5",        // # Stories dropdown
        g_103: "Normal",     // Exposure dropdown  
        d_105: "8000.00",    // Conditioned volume
        d_108: "AL-1B",      // Blower door method dropdown
        g_109: "1.50",       // Measured value (editable when d_108='MEASURED')
      };
      console.log("S12: Target defaults set");
    },
    saveState: function () {
      localStorage.setItem("S12_TARGET_STATE", JSON.stringify(this.state));
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
      const savedState = localStorage.getItem("S12_REFERENCE_STATE");
      if (savedState) {
        this.state = JSON.parse(savedState);
      } else {
        this.setDefaults();
      }
    },
    setDefaults: function () {
      // ✅ DYNAMIC LOADING: Get current reference standard from dropdown d_13
      const currentStandard = window.TEUI?.StateManager?.getValue?.("d_13") || "OBC SB10 5.5-6 Z6";
      const referenceValues = window.TEUI?.ReferenceValues?.[currentStandard] || {};
      
      // Apply reference values to this section's fields, with fallbacks for missing values
      this.state = {
        d_103: referenceValues.d_103 || "1.5",        // # Stories
        g_103: referenceValues.g_103 || "Normal",     // Exposure
        d_105: "8000.00",                              // Volume (design choice, not in codes)
        d_108: referenceValues.d_108 || "AL-1B",      // Blower door method
        g_109: referenceValues.g_109 || "1.50",       // Measured value
      };
      
      console.log(`S12: Reference defaults loaded from standard: ${currentStandard}`);
    },

    // Listen for changes to the reference standard and reload defaults  
    onReferenceStandardChange: function() {
      console.log('S12: Reference standard changed, reloading defaults');
      
      // Preserve user-modified volume (design choice, not code requirement)
      const preservedVolume = this.state.d_105;
      
      // Load new reference values
      this.setDefaults();
      
      // Restore preserved volume
      this.state.d_105 = preservedVolume;
      this.saveState();
      
      console.log('S12: Reference standard updated, volume preserved');
      
      // Only refresh UI if currently in reference mode
      if (ModeManager.currentMode === 'reference') {
        ModeManager.refreshUI();
        calculateAll();
      }
    },

    saveState: function () {
      localStorage.setItem("S12_REFERENCE_STATE", JSON.stringify(this.state));
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
        window.TEUI.StateManager.addListener('d_13', () => {
          ReferenceState.onReferenceStandardChange();
        });
      }
    },
    switchMode: function (mode) {
      if (this.currentMode === mode || (mode !== "target" && mode !== "reference"))
        return;
      this.currentMode = mode;
      console.log(`S12: Switched to ${mode.toUpperCase()} mode`);

      this.refreshUI();
      calculateAll(); // Recalculate for the new mode
    },
    resetState: function() {
        console.log("S12: Resetting state and clearing localStorage for Section 12.");
        TargetState.setDefaults();
        TargetState.saveState();
        ReferenceState.setDefaults();  // This will reload from current d_13 selection
        ReferenceState.saveState();
        console.log("S12: States have been reset to defaults.");

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

      // BRIDGE: For backward compatibility, sync Target changes to global StateManager.
      if (this.currentMode === "target") {
        window.TEUI.StateManager.setValue(fieldId, value, "user-modified");
      }
    },
    refreshUI: function () {
      const sectionElement = document.getElementById("volumeSurfaceMetrics");
      if (!sectionElement) return;

      const currentState = this.getCurrentState();
      
      const fieldsToSync = [
        'd_103', 'g_103', 'd_105', 'd_108', 'g_109'  // The 5 user editable fields
      ];

      fieldsToSync.forEach(fieldId => {
          const stateValue = currentState.getValue(fieldId);
          if (stateValue === undefined || stateValue === null) return;

          // Handle dropdown fields
          if (fieldId === 'd_103' || fieldId === 'g_103' || fieldId === 'd_108') {
            const dropdown = sectionElement.querySelector(`select[data-field-id="${fieldId}"]`);
            if (dropdown) {
              dropdown.value = stateValue;
            }
          } else {
            // Handle editable fields
            const element = sectionElement.querySelector(`[data-field-id="${fieldId}"]`);
            if (element && element.hasAttribute('contenteditable')) {
              element.textContent = stateValue;
            }
          }
      });
    },
  };
  
  // Expose globally for cross-section communication
  window.TEUI.sect12 = window.TEUI.sect12 || {};
  window.TEUI.sect12.ModeManager = ModeManager;

  //==========================================================================
  // HEADER CONTROLS INJECTION
  //==========================================================================
  
  function injectHeaderControls() {
    const sectionHeader = document.querySelector("#volumeSurfaceMetrics .section-header");
    if (!sectionHeader || sectionHeader.querySelector(".local-controls-container")) {
      return; // Already setup or header not found
    }

    const controlsContainer = document.createElement("div");
    controlsContainer.className = "local-controls-container";
    controlsContainer.style.cssText = "display: flex; align-items: center; margin-left: auto; gap: 10px;";

    // --- Create Reset Button ---
    const resetButton = document.createElement("button");
    resetButton.innerHTML = "🔄 Reset";
    resetButton.title = "Reset Section 12 to Defaults";
    resetButton.style.cssText = "padding: 4px 8px; font-size: 0.8em; background-color: #dc3545; color: white; border: none; border-radius: 4px; cursor: pointer;";
    
    resetButton.addEventListener("click", (event) => {
      event.stopPropagation();
      if (confirm("Are you sure you want to reset all values in this section to their defaults? This will clear any saved data for Section 12.")) {
        ModeManager.resetState();
      }
    });

    // --- Create Toggle Switch ---
    const stateIndicator = document.createElement("span");
    stateIndicator.textContent = "TARGET";
    stateIndicator.style.cssText = "color: #fff; font-weight: bold; font-size: 0.8em; background-color: rgba(0, 123, 255, 0.5); padding: 2px 6px; border-radius: 4px;";

    const toggleSwitch = document.createElement("div");
    toggleSwitch.style.cssText = "position: relative; width: 40px; height: 20px; background-color: #ccc; border-radius: 10px; cursor: pointer;";
    
    const slider = document.createElement("div");
    slider.style.cssText = "position: absolute; top: 2px; left: 2px; width: 16px; height: 16px; background-color: white; border-radius: 50%; transition: transform 0.2s;";

    toggleSwitch.appendChild(slider);
    
    toggleSwitch.addEventListener("click", (event) => {
      event.stopPropagation();
      const isReference = toggleSwitch.classList.toggle('active');
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

    console.log("S12: Header controls injected successfully");
  }

  //==========================================================================
  // HELPER FUNCTIONS (Refactored for Self-Contained State Module)
  //==========================================================================
  
  function getNumericValue(fieldId) {
    // For values INTERNAL to this section (the 5 user editable fields)
    const rawValue = ModeManager.getValue(fieldId);
    return window.TEUI.parseNumeric(rawValue) || 0;
  }

  function getGlobalNumericValue(fieldId, mode) {
    // For values EXTERNAL to this section (from global StateManager or other sections)
    // Uses GEMINI's mode-aware approach for correct Target/Reference reading
    const stateManager = window.TEUI?.StateManager;
    if (!stateManager) return 0;

    let value;
    const currentMode = mode || ModeManager.currentMode;
    
    if (currentMode === "reference") {
      // For reference calculations, check for 'ref_', then non-prefixed.
      value = stateManager.getValue(`ref_${fieldId}`);
      if (value === null || value === undefined) {
        value = stateManager.getValue(fieldId);
      }
    } else {
      // For target calculations, there is NO prefix.
      value = stateManager.getValue(fieldId);
    }
    return window.TEUI.parseNumeric(value) || 0;
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
   * @param {string} [formatType='number']
   */
  function setCalculatedValue(fieldId, rawValue, formatType = "number") {
    // Handle N/A for non-finite numbers
    if (!isFinite(rawValue) || rawValue === null || rawValue === undefined) {
      if (window.TEUI?.StateManager?.setValue) {
        window.TEUI.StateManager.setValue(fieldId, "N/A", "calculated");
      }
      const elementNA = document.querySelector(`[data-field-id="${fieldId}"]`);
      if (elementNA) elementNA.textContent = "N/A";
      return;
    }

    // Store raw value in StateManager and format for display
    if (window.TEUI?.StateManager?.setValue) {
      window.TEUI.StateManager.setValue(fieldId, rawValue.toString(), "calculated");
    }

    // Format value for display using global formatter
    const formattedValue = window.TEUI?.formatNumber?.(rawValue, formatType) || rawValue.toString();

    // Update DOM with formatted value
    const element = document.querySelector(`[data-field-id="${fieldId}"]`);
    if (element) {
      element.textContent = formattedValue;
      element.classList.toggle("negative-value", rawValue < 0);
    }
  }

  function formatNumber(value, formatType = "number") {
    // Use global formatter if available, otherwise basic formatting
    if (window.TEUI?.formatNumber) {
      return window.TEUI.formatNumber(value, formatType);
    }
    
    const num = Number(value);
    if (isNaN(num)) return "0.00";
    
    if (formatType === "W/m2") {
      return num.toFixed(3); // U-values get 3 decimals
    } else if (formatType === "percent") {
      return (num * 100).toFixed(2) + "%";
    }
    return num.toFixed(2); // Default 2 decimals
  }

  //==========================================================================
  // FIELD DEFINITIONS AND LAYOUT
  //==========================================================================

  const sectionRows = {
    header: {
      id: "12-ID",
      rowId: "12-ID",
      label: "Volume and Surface Metrics Units",
      cells: {
        c: {
          content: "SECTION 12. Volume and Surface Metrics",
          classes: ["section-header"],
          colspan: 4,
        },
        d: { content: "", classes: ["section-subheader"] },
        e: { content: "", classes: ["section-subheader"] },
        f: { content: "", classes: ["section-subheader"] },
        g: {
          content: "U-Value\nW/m²·K",
          classes: ["section-subheader", "align-center"],
        },
        h: {
          content: "Loss Rate\nkWh/m²",
          classes: ["section-subheader", "align-center"],
        },
        i: {
          content: "Heatloss\nHtg Season\nkWh/yr",
          classes: ["section-subheader", "align-center"],
        },
        j: {
          content: "Gain Rate\nkWh/m²",
          classes: ["section-subheader", "align-center"],
        },
        k: {
          content: "Heatgain\nCool Season\nkWh/yr",
          classes: ["section-subheader", "align-center"],
        },
        l: {
          content: "Heatloss %",
          classes: ["section-subheader", "align-center"],
        },
        m: {
          content: "Reference",
          classes: ["section-subheader", "align-center"],
        },
        n: { content: "N", classes: ["section-subheader", "align-center"] },
      },
    },
    101: {
      id: "B.16",
      rowId: "B.16",
      label: "Total Area Exposed to Air (Ae)",
      cells: {
        c: { label: "Total Area Exposed to Air (Ae)" },
        d: {
          fieldId: "d_101",
          type: "calculated",
          value: "2476.62",
          section: "volumeSurfaceMetrics",
          dependencies: [
            "d_85",
            "d_86",
            "d_87",
            "d_88",
            "d_89",
            "d_90",
            "d_91",
            "d_92",
            "d_93",
          ],
          classes: ["text-air-facing"],
        },
        e: { content: "m²", classes: ["unit-label"] },
        f: { content: "U-Val. for Ae", classes: ["label-main"] },
        g: {
          fieldId: "g_101",
          type: "calculated",
          value: "0.278",
          section: "volumeSurfaceMetrics",
          dependencies: [
            "d_85",
            "h_85",
            "d_86",
            "h_86",
            "d_87",
            "h_87",
            "d_88",
            "h_88",
            "d_89",
            "h_89",
            "d_90",
            "h_90",
            "d_91",
            "h_91",
            "d_92",
            "h_92",
            "d_93",
            "h_93",
            "d_101",
            "d_97",
          ],
          classes: ["text-air-facing"],
        },
        h: {
          fieldId: "h_101",
          type: "calculated",
          value: "30.73",
          section: "volumeSurfaceMetrics",
          dependencies: ["g_101", "d_20"],
        },
        i: {
          fieldId: "i_101",
          type: "calculated",
          value: "76,103.69",
          section: "volumeSurfaceMetrics",
          dependencies: ["h_101", "d_101"],
        },
        j: {
          fieldId: "j_101",
          type: "calculated",
          value: "1.31",
          section: "volumeSurfaceMetrics",
          dependencies: ["g_101", "d_21"],
        },
        k: {
          fieldId: "k_101",
          type: "calculated",
          value: "3,242.68",
          section: "volumeSurfaceMetrics",
          dependencies: ["j_101", "d_101"],
        },
        l: {
          fieldId: "l_101",
          type: "calculated",
          value: "65.57%",
          section: "volumeSurfaceMetrics",
          dependencies: ["i_101", "i_104"],
          classes: ["percentage-value"],
        },
        m: { content: "", classes: ["reference-value"] },
        n: { content: "" },
      },
    },
    102: {
      id: "B.17",
      rowId: "B.17",
      label: "Total Area Exposed to Ground (Ag)",
      cells: {
        c: { label: "Total Area Exposed to Ground (Ag)" },
        d: {
          fieldId: "d_102",
          type: "calculated",
          value: "1100.42",
          section: "volumeSurfaceMetrics",
          dependencies: ["d_94", "d_95"],
          classes: ["text-ground-facing"],
        },
        e: { content: "m²", classes: ["unit-label"] },
        f: { content: "U-Val. for Ag", classes: ["label-main"] },
        g: {
          fieldId: "g_102",
          type: "calculated",
          value: "0.324",
          section: "volumeSurfaceMetrics",
          dependencies: ["d_94", "h_94", "d_95", "h_95", "d_102", "d_97"],
          classes: ["text-ground-facing"],
        },
        h: {
          fieldId: "h_102",
          type: "calculated",
          value: "15.26",
          section: "volumeSurfaceMetrics",
          dependencies: ["g_102", "d_22"],
        },
        i: {
          fieldId: "i_102",
          type: "calculated",
          value: "16,788.25",
          section: "volumeSurfaceMetrics",
          dependencies: ["h_102", "d_102"],
        },
        j: {
          fieldId: "j_102",
          type: "calculated",
          value: "-13.08",
          section: "volumeSurfaceMetrics",
          dependencies: ["g_102", "h_22"],
        },
        k: {
          fieldId: "k_102",
          type: "calculated",
          value: "-14,389.92",
          section: "volumeSurfaceMetrics",
          dependencies: ["j_102", "d_102"],
        },
        l: {
          fieldId: "l_102",
          type: "calculated",
          value: "14.46%",
          section: "volumeSurfaceMetrics",
          dependencies: ["i_102", "i_104"],
          classes: ["percentage-value"],
        },
        m: { content: "", classes: ["reference-value"] },
        n: { content: "" },
      },
    },
    103: {
      id: "B.18.3",
      rowId: "B.18.3",
      label: "Heating Natural Air Leakage Heatloss",
      cells: {
        c: { label: "Heating Natural Air Leakage Heatloss" },
        d: {
          fieldId: "d_103",
          type: "dropdown",
          dropdownId: "dd_d_103",
          value: "1.5",
          section: "volumeSurfaceMetrics",
          options: [
            { value: "1", name: "1" },
            { value: "1.5", name: "1.5" },
            { value: "2", name: "2" },
            { value: "3", name: "3" },
            { value: "4", name: "4" },
            { value: "5", name: "5" },
            { value: "6", name: "6" },
          ],
        },
        e: { content: "Stories", classes: ["unit-label"] },
        f: { content: "B.18.3 Shielding", classes: ["label-main"] },
        g: {
          fieldId: "g_103",
          type: "dropdown",
          dropdownId: "dd_g_103",
          value: "Normal",
          section: "volumeSurfaceMetrics",
          options: [
            { value: "Shielded", name: "Shielded" },
            { value: "Normal", name: "Normal" },
            { value: "Exposed", name: "Exposed" },
          ],
        },
        h: {},
        i: {
          fieldId: "i_103",
          type: "calculated",
          value: "23,178.39",
          section: "volumeSurfaceMetrics",
          dependencies: ["g_109", "g_110", "d_105", "d_20"],
        },
        j: {},
        k: {
          fieldId: "k_103",
          type: "calculated",
          value: "987.60",
          section: "volumeSurfaceMetrics",
          dependencies: ["g_109", "g_110", "d_105", "d_21"],
        },
        l: {
          fieldId: "l_103",
          type: "calculated",
          value: "19.97%",
          section: "volumeSurfaceMetrics",
          dependencies: ["i_103", "i_104"],
          classes: ["percentage-value"],
        },
        m: { content: "", classes: ["reference-value"] },
        n: { content: "" },
      },
    },
    104: {
      id: "T.4",
      rowId: "T.4",
      label: "Building U-Value Combined Total & Transmission Losses & Gains",
      cells: {
        c: {
          label:
            "Building U-Value Combined Total & Transmission Losses & Gains",
          classes: ["total-row-text"],
        },
        d: {},
        e: { content: "", classes: ["unit-label"] },
        f: {},
        g: {
          fieldId: "d_104",
          type: "calculated",
          value: "0.292",
          section: "volumeSurfaceMetrics",
          dependencies: ["g_101", "d_101", "g_102", "d_102"],
          classes: ["total-row-text"],
        },
        h: {},
        i: {
          fieldId: "i_104",
          type: "calculated",
          value: "116,070.33",
          section: "volumeSurfaceMetrics",
          dependencies: ["i_101", "i_102", "i_103"],
          classes: ["total-row-text"],
        },
        j: {},
        k: {
          fieldId: "k_104",
          type: "calculated",
          value: "-10,160.19",
          section: "volumeSurfaceMetrics",
          dependencies: ["k_101", "k_102", "k_103"],
          classes: ["total-row-text"],
        },
        l: {
          fieldId: "l_104",
          type: "calculated",
          value: "100%",
          section: "volumeSurfaceMetrics",
          classes: ["percentage-value", "total-row-text"],
          dependencies: ["l_101", "l_102", "l_103"],
        },
        m: { content: "N/A", classes: ["reference-value", "total-row-text"] },
        n: { content: "" },
      },
    },
    105: {
      id: "B.13",
      rowId: "B.13",
      label: "Total Conditioned Volume",
      cells: {
        c: { label: "Total Conditioned Volume" },
        d: {
          fieldId: "d_105",
          type: "editable",
          value: "8000.00",
          section: "volumeSurfaceMetrics",
          classes: ["user-input"],
        },
        e: { content: "m³", classes: ["unit-label"] },
        f: { content: "Volume/Area", classes: ["label-main"] },
        g: {
          fieldId: "g_105",
          type: "calculated",
          value: "3.23",
          section: "volumeSurfaceMetrics",
          dependencies: ["d_105", "d_101"],
        },
        h: { content: "Area/Volume", classes: ["text-center"] },
        i: {
          fieldId: "i_105",
          type: "calculated",
          value: "0.31",
          section: "volumeSurfaceMetrics",
          dependencies: ["d_101", "d_105"],
        },
        j: {},
        k: {},
        l: {},
        m: {},
        n: {},
      },
    },
    106: {
      id: "B.14",
      rowId: "B.14",
      label: "Total Floor Area (Cond. + Uncond.)",
      cells: {
        c: { label: "Total Floor Area (Cond. + Uncond.)" },
        d: {
          fieldId: "d_106",
          type: "calculated",
          value: "1130.12",
          section: "volumeSurfaceMetrics",
          dependencies: ["d_87", "d_95", "d_96"],
        },
        e: { content: "m²", classes: ["unit-label"] },
        f: { content: "- Only used in E.3.2", classes: ["note-text"] },
        g: {},
        h: {},
        i: {},
        j: {},
        k: {},
        l: {},
        m: {},
        n: {},
      },
    },
    107: {
      id: "B.15",
      rowId: "B.15",
      label: "Window:Wall Ratio (WWR)",
      cells: {
        c: { label: "Window:Wall Ratio (WWR)" },
        d: {
          fieldId: "d_107",
          type: "calculated",
          value: "0.33",
          section: "volumeSurfaceMetrics",
          dependencies: [
            "d_88",
            "d_89",
            "d_90",
            "d_91",
            "d_92",
            "d_93",
            "d_86",
          ],
        },
        e: { content: "%", classes: ["unit-label"] },
        f: {},
        g: {},
        h: {},
        i: {},
        j: {},
        k: {},
        l: {
          fieldId: "l_107",
          type: "calculated",
          value: "61%",
          section: "volumeSurfaceMetrics",
          classes: ["percentage-value"],
          dependencies: ["d_107"],
        },
        m: {},
        n: {},
      },
    },
    108: {
      id: "B.18.1",
      rowId: "B.18.1",
      label: "NRL₅₀ Target Method",
      cells: {
        c: { label: "NRL₅₀ Target Method" },
        d: {
          fieldId: "d_108",
          type: "dropdown",
          dropdownId: "dd_d_108",
          value: "AL-1B",
          section: "volumeSurfaceMetrics",
          options: [
            { value: "MEASURED", name: "Measured" },
            { value: "PH_CLASSIC", name: "PH Classic" },
            { value: "PH_LOW", name: "PH Low" },
            { value: "PH_PLUS", name: "PH+" },
            { value: "AL-1A", name: "AL-1A" },
            { value: "AL-2A", name: "AL-2A" },
            { value: "AL-3A", name: "AL-3A" },
            { value: "AL-4A", name: "AL-4A" },
            { value: "AL-5A", name: "AL-5A" },
            { value: "AL-1B", name: "AL-1B" },
            { value: "AL-2B", name: "AL-2B" },
            { value: "AL-3B", name: "AL-3B" },
            { value: "AL-4B", name: "AL-4B" },
            { value: "AL-5B", name: "AL-5B" },
            { value: "AL-6B", name: "AL-6B" },
          ],
        },
        e: { content: "", classes: ["unit-label"] },
        f: { content: "B.18.1 Target", classes: ["label-main"] },
        g: {
          fieldId: "g_108",
          type: "calculated",
          value: "1.17",
          section: "volumeSurfaceMetrics",
          dependencies: ["d_108", "g_109", "d_105", "d_101"],
        },
        h: { content: "L/s•m²", classes: ["unit-label"] },
        i: {},
        j: {},
        k: {},
        l: {},
        m: {},
        n: {},
      },
    },
    109: {
      id: "B.18.2",
      rowId: "B.18.2",
      label: "ACH₅₀ Target (Converts B.18.1)",
      cells: {
        c: { label: "ACH₅₀ Target (Converts B.18.1)" },
        d: {
          fieldId: "d_109",
          type: "calculated",
          value: "1.30",
          section: "volumeSurfaceMetrics",
          dependencies: ["g_108", "d_101", "d_105"],
        },
        e: { content: "ACH", classes: ["unit-label"] },
        f: { content: "B.18.2 Measured", classes: ["label-main"] },
        g: {
          fieldId: "g_109",
          type: "editable",
          value: "1.50",
          section: "volumeSurfaceMetrics",
          classes: ["user-input"],
        },
        h: {},
        i: {},
        j: {},
        k: {},
        l: {
          fieldId: "l_109",
          type: "calculated",
          value: "115%",
          section: "volumeSurfaceMetrics",
          classes: ["percentage-value"],
          dependencies: ["g_109", "d_109"],
        },
        m: {},
        n: {},
      },
    },
    110: {
      id: "B.18.4",
      rowId: "B.18.4",
      label: "Ae₁₀ or ELA₁₀ (m²)",
      cells: {
        c: { label: "Ae₁₀ or ELA₁₀ (m²)" },
        d: {
          fieldId: "d_110",
          type: "calculated",
          value: "2.898",
          section: "volumeSurfaceMetrics",
          dependencies: ["d_109", "d_105"],
        },
        e: { content: "m²", classes: ["unit-label"] },
        f: { content: "B.18.5.1 n-Factor", classes: ["label-main"] },
        g: {
          fieldId: "g_110",
          type: "calculated",
          value: "16.7",
          section: "volumeSurfaceMetrics",
          dependencies: ["j_19", "d_103", "g_103"],
        },
        h: { content: "B.18.3 Ae₁₀ Zone", classes: ["text-center"] },
        i: {
          fieldId: "i_110",
          type: "calculated",
          value: "2",
          section: "volumeSurfaceMetrics",
          dependencies: ["j_19"],
        },
        j: {},
        k: {},
        l: {
          fieldId: "l_110",
          type: "calculated",
          value: "173%",
          section: "volumeSurfaceMetrics",
          classes: ["percentage-value"],
          dependencies: ["d_110"],
        },
        m: {},
        n: {},
      },
    },
  };

  //==========================================================================
  // ACCESSOR METHODS
  //==========================================================================

  function getFields() {
    const fields = {};
    Object.entries(sectionRows).forEach(([rowKey, row]) => {
      if (rowKey === "header" || rowKey === "subheader") return;
      if (!row.cells) return;
      Object.entries(row.cells).forEach(([colKey, cell]) => {
        if (cell.fieldId && cell.type) {
          fields[cell.fieldId] = {
            type: cell.type,
            label: cell.label || row.label,
            defaultValue: cell.value || "",
            section: cell.section || "volumeSurfaceMetrics",
            dependencies: cell.dependencies || [],
          };
          if (cell.dropdownId)
            fields[cell.fieldId].dropdownId = cell.dropdownId;
          if (cell.options) fields[cell.fieldId].options = cell.options;
          if (cell.getOptions)
            fields[cell.fieldId].getOptions = cell.getOptions;
          if (cell.min !== undefined) fields[cell.fieldId].min = cell.min;
          if (cell.max !== undefined) fields[cell.fieldId].max = cell.max;
          if (cell.step !== undefined) fields[cell.fieldId].step = cell.step;
        }
      });
    });
    return fields;
  }

  function getDropdownOptions() {
    const options = {};
    Object.values(sectionRows).forEach((row) => {
      if (!row.cells) return;
      Object.values(row.cells).forEach((cell) => {
        if (cell.dropdownId && cell.options) {
          options[cell.dropdownId] = cell.options;
        }
      });
    });
    return options;
  }

  function getLayout() {
    const layoutRows = [];
    if (sectionRows["header"]) {
      layoutRows.push(createLayoutRow(sectionRows["header"]));
    }
    if (sectionRows["subheader"]) {
      layoutRows.push(createLayoutRow(sectionRows["subheader"]));
    }
    Object.entries(sectionRows).forEach(([key, row]) => {
      if (key !== "header" && key !== "subheader") {
        layoutRows.push(createLayoutRow(row));
      }
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
      if (row.cells && row.cells[col]) {
        const cell = { ...row.cells[col] };
        if (col === "c") {
          if (cell.type === "label" && cell.content && !cell.label) {
            cell.label = cell.content;
            delete cell.type;
            delete cell.content;
          } else if (!cell.label && !cell.content && row.label) {
            cell.label = row.label;
          }
        }
        delete cell.getOptions;
        delete cell.section;
        delete cell.dependencies;
        rowDef.cells.push(cell);
      } else {
        if (col === "c" && !row.cells?.c && row.label) {
          rowDef.cells.push({ label: row.label });
        } else {
          rowDef.cells.push({});
        }
      }
    });
    return rowDef;
  }

  //==========================================================================
  // HELPER FUNCTIONS
  //==========================================================================

  function getNumericValue(fieldId) {
    // Use global parseNumeric, retrieving value via getFieldValue
    return window.TEUI.parseNumeric(getFieldValue(fieldId)) || 0;
  }

  function getFieldValue(fieldId) {
    if (window.TEUI?.StateManager?.getValue) {
      const stateValue = window.TEUI.StateManager.getValue(fieldId);
      if (stateValue !== null && stateValue !== undefined) {
        return stateValue;
      }
    }
    const element = document.querySelector(`[data-field-id="${fieldId}"]`);
    if (element) {
      if (element.tagName === "SELECT") {
        return element.value;
      }
      return element.textContent.trim();
    }
    return null;
  }

  /**
   * Formats a number according to the project's display rules.
   * Handles specific formats like percentages, W/m2, etc.
   * @param {number} value - The number to format.
   * @param {string} [format='number'] - The type of format ('number', 'percent', 'W/m2').
   * @returns {string} The formatted number as a string.
   */
  function formatNumber(value, format = "number") {
    // Handle null or undefined values
    if (value === null || value === undefined || isNaN(value)) {
      // Return appropriate default based on format
      return format === "percent" ? "0%" : format === "W/m2" ? "0.000" : "0.00";
    }

    const num = Number(value);

    // Handle percentage format
    if (format === "percent") {
      // Convert decimal to percentage with 2 decimal places
      return (
        (num * 100).toLocaleString(undefined, {
          minimumFractionDigits: 2,
          maximumFractionDigits: 2,
        }) + "%"
      );
    }
    // Handle U-Value format - 3 decimal places
    else if (format === "W/m2") {
      return num.toLocaleString("en-US", {
        minimumFractionDigits: 3,
        maximumFractionDigits: 3,
      });
    }
    // Default format - 2 decimal places
    else {
      return num.toLocaleString("en-US", {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2,
      });
    }
  }

  /**
   * Helper function to set a calculated field value in StateManager and update the DOM.
   * Uses the global window.TEUI.formatNumber for formatting.
   * @param {string} fieldId - The ID of the field to update.
   * @param {*} rawValue - The raw, unformatted value to store in StateManager.
   * @param {string} formatType - The format type for display (e.g., 'number', 'percent-auto', 'integer', 'raw', 'number-3dp').
   */
  function setCalculatedValue(fieldId, rawValue, formatType = "number") {
    // Ensure rawValue is numeric for calculations where appropriate
    const numericValue =
      typeof rawValue === "string"
        ? window.TEUI.parseNumeric(rawValue)
        : rawValue;

    // Set raw value in state manager with 'calculated' state
    if (window.TEUI?.StateManager?.setValue) {
      // Ensure rawValue is stored as a string for consistency with FULL precision
      window.TEUI.StateManager.setValue(
        fieldId,
        String(numericValue),
        "calculated",
      ); // Store the cleaned numeric value as string with full precision
    } else {
      console.error("StateManager not available to set value for", fieldId);
      return;
    }

    // Determine the correct format type based on field ID conventions
    let determinedFormatType;

    // Determine format based on fieldId for precision matching Excel
    if (fieldId === "g_101" || fieldId === "g_102" || fieldId === "d_104") {
      determinedFormatType = "W/m2"; // Use W/m2 format for U-values (3dp) - matches Section 11
    } else if (fieldId === "d_110") {
      determinedFormatType = "number-3dp"; // ELA
    } else if (fieldId === "g_110") {
      determinedFormatType = "number-1dp"; // N-Factor
    } else if (fieldId === "i_110") {
      determinedFormatType = "integer"; // Zone number
    } else if (fieldId === "d_107") {
      determinedFormatType = "percent-2dp"; // WWR % with 2dp
    } else if (
      fieldId === "l_101" ||
      fieldId === "l_102" ||
      fieldId === "l_103"
    ) {
      determinedFormatType = "percent-2dp"; // Heatloss component %
    } else if (
      fieldId === "l_104" ||
      fieldId === "l_107" ||
      fieldId === "l_109" ||
      fieldId === "l_110"
    ) {
      determinedFormatType = "percent-0dp"; // Total or reference % (no decimals)
    } else if (
      [
        "d_101",
        "d_102",
        "d_106",
        "i_101",
        "i_102",
        "i_103",
        "i_104",
        "k_101",
        "k_102",
        "k_103",
        "k_104",
      ].includes(fieldId)
    ) {
      determinedFormatType = "number-2dp-comma"; // Areas and kWh values with commas
    } else {
      // Default for other calculated numbers (rates, ratios, ACH50 etc.)
      determinedFormatType = "number-2dp";
    }

    // Override if a specific format was passed and it's not the default 'number'
    if (formatType !== "number") {
      determinedFormatType = formatType;
    }

    // For 'W/m2' format, use local formatNumber function
    let formattedValue;
    if (determinedFormatType === "W/m2") {
      formattedValue = formatNumber(numericValue, "W/m2");
    } else {
      // For other formats, use the global formatter
      formattedValue = window.TEUI.formatNumber(
        numericValue,
        determinedFormatType,
      );
    }

    // Update the corresponding DOM element
    const element = document.querySelector(`[data-field-id="${fieldId}"]`);
    if (element) {
      if (element.tagName === "SELECT" || element.tagName === "INPUT") {
        element.value = formattedValue; // Update input/select value
      } else {
        element.textContent = formattedValue; // Update other element text content
      }
      element.classList.add("calculated-value");
      element.classList.remove("user-input", "editable", "PendingValue");
      element.removeAttribute("contenteditable");
    } else {
      console.warn("DOM element not found for calculated field:", fieldId);
    }
  }

  function setElementClass(fieldId, className, removeClasses = []) {
    const element = document.querySelector(`[data-field-id="${fieldId}"]`);
    if (element) {
      removeClasses.forEach((cls) => element.classList.remove(cls));
      if (className) element.classList.add(className);
    }
  }

  //==========================================================================
  // REFERENCE INDICATOR CONFIGURATION
  //==========================================================================

  // T-cell comparison configuration for Section 12
  const referenceComparisons = {
    d_107: {
      type: "lower-is-better",
      tCell: "t_107",
      description: "Window:Wall Ratio",
    },
    g_109: {
      type: "lower-is-better",
      tCell: "t_109",
      description: "ACH50 Measured",
    },
  };

  /**
   * Update reference indicators for all configured fields
   */
  function updateAllReferenceIndicators() {
    try {
      Object.keys(referenceComparisons).forEach((fieldId) => {
        updateReferenceIndicator(fieldId);
      });
    } catch (error) {
      console.error("[Section12] Error updating reference indicators:", error);
    }
  }

  /**
   * Update reference indicator (M and N columns) for a specific field
   * @param {string} fieldId - The application field ID to update
   */
  function updateReferenceIndicator(fieldId) {
    const config = referenceComparisons[fieldId];
    if (!config) return;

    // Get current value
    const currentValue =
      window.TEUI?.parseNumeric?.(getFieldValue(fieldId)) || 0;

    // Get reference value
    const referenceValue =
      window.TEUI?.StateManager?.getTCellValue?.(fieldId) ||
      window.TEUI?.StateManager?.getReferenceValue?.(config.tCell);

    const rowId = fieldId.match(/\d+$/)?.[0]; // Extract row number from field ID
    if (!rowId) return;

    const mFieldId = `m_${rowId}`;
    const nFieldId = `n_${rowId}`;

    // Check if M and N column elements exist before trying to update them
    const mElement = document.querySelector(`[data-field-id="${mFieldId}"]`);
    const nElement = document.querySelector(`[data-field-id="${nFieldId}"]`);

    if (!mElement || !nElement) {
      // Skip reference indicators for rows that don't have M/N columns
      return;
    }

    // If no reference value found, show N/A
    if (!referenceValue || referenceValue === 0) {
      setCalculatedValue(mFieldId, "N/A", "raw");
      if (nElement) {
        nElement.textContent = "";
        nElement.classList.remove("checkmark", "warning");
      }
      return;
    }

    // Calculate percentage based on comparison type
    let percentage = 100;
    let isGood = true;

    if (config.type === "lower-is-better") {
      // For lower-is-better, reference/current gives percentage
      percentage = (referenceValue / currentValue) * 100;
      isGood = currentValue <= referenceValue;
    } else if (config.type === "higher-is-better") {
      // For higher-is-better, current/reference gives percentage
      percentage = (currentValue / referenceValue) * 100;
      isGood = currentValue >= referenceValue;
    }

    // Cap percentage at reasonable bounds
    if (percentage > 999) percentage = 999;
    if (percentage < 0) percentage = 0;

    // Update M column with percentage
    setCalculatedValue(mFieldId, percentage / 100, "percent");

    // Update N column with checkmark/warning (nElement already declared above)
    if (nElement) {
      nElement.textContent = isGood ? "✓" : "✗";
      setElementClass(nFieldId, isGood ? "checkmark" : "warning", [
        "checkmark",
        "warning",
      ]);
    }
  }

  //==========================================================================
  // CALCULATION FUNCTIONS
  //==========================================================================

  function calculateVolumeMetrics() {
    // Get all values with full precision using parseFloat
    const d85 = parseFloat(getNumericValue("d_85"));
    const d86 = parseFloat(getNumericValue("d_86"));
    const d87 = parseFloat(getNumericValue("d_87"));
    const d88 = parseFloat(getNumericValue("d_88"));
    const d89 = parseFloat(getNumericValue("d_89"));
    const d90 = parseFloat(getNumericValue("d_90"));
    const d91 = parseFloat(getNumericValue("d_91"));
    const d92 = parseFloat(getNumericValue("d_92"));
    const d93 = parseFloat(getNumericValue("d_93"));
    const d94 = parseFloat(getNumericValue("d_94"));
    const d95 = parseFloat(getNumericValue("d_95"));
    const d96 = parseFloat(getNumericValue("d_96"));
    const d105_vol = parseFloat(getNumericValue("d_105"));

    // Calculate with full precision
    const d101_areaAir = d85 + d86 + d87 + d88 + d89 + d90 + d91 + d92 + d93;
    const d102_areaGround = d94 + d95 === 0 ? 0.0000001 : d94 + d95;
    const d106_floorArea = d87 + d95 + d96;

    // Update values with standard formatters
    setCalculatedValue("d_101", d101_areaAir, "number-2dp-comma");
    setCalculatedValue("d_102", d102_areaGround, "number-2dp-comma");
    setCalculatedValue("d_106", d106_floorArea, "number-2dp-comma");

    // Calculate ratios with full precision
    const g105_volAreaRatio = d101_areaAir > 0 ? d105_vol / d101_areaAir : 0;
    const i105_areaVolRatio = d105_vol > 0 ? d101_areaAir / d105_vol : 0;

    // Update ratio values with standard formatters
    setCalculatedValue("g_105", g105_volAreaRatio, "number-2dp");
    setCalculatedValue("i_105", i105_areaVolRatio, "number-2dp");
  }

  function calculateCombinedUValue() {
    // S12's own calculated area values (from this section)
    const d101_areaAir = parseFloat(getGlobalNumericValue("d_101"));
    const d102_areaGround = parseFloat(getGlobalNumericValue("d_102"));
    
    // Get u-values from S11 (external section) - use getGlobalNumericValue
    // Use parseFloat to maintain full floating point precision
    const g85 =
      parseFloat(getGlobalNumericValue("g_85")) ||
      1 / parseFloat(getGlobalNumericValue("f_85") || 1);
    const g86 =
      parseFloat(getGlobalNumericValue("g_86")) ||
      1 / parseFloat(getGlobalNumericValue("f_86") || 1);
    const g87 =
      parseFloat(getGlobalNumericValue("g_87")) ||
      1 / parseFloat(getGlobalNumericValue("f_87") || 1);
    const g88 =
      parseFloat(getGlobalNumericValue("g_88")) ||
      1 / parseFloat(getGlobalNumericValue("f_88") || 1);
    const g89 =
      parseFloat(getGlobalNumericValue("g_89")) ||
      1 / parseFloat(getGlobalNumericValue("f_89") || 1);
    const g90 =
      parseFloat(getGlobalNumericValue("g_90")) ||
      1 / parseFloat(getGlobalNumericValue("f_90") || 1);
    const g91 =
      parseFloat(getGlobalNumericValue("g_91")) ||
      1 / parseFloat(getGlobalNumericValue("f_91") || 1);
    const g92 =
      parseFloat(getGlobalNumericValue("g_92")) ||
      1 / parseFloat(getGlobalNumericValue("f_92") || 1);
    const g93 =
      parseFloat(getGlobalNumericValue("g_93")) ||
      1 / parseFloat(getGlobalNumericValue("f_93") || 1);
    const g94 =
      parseFloat(getGlobalNumericValue("g_94")) ||
      1 / parseFloat(getGlobalNumericValue("f_94") || 1);
    const g95 =
      parseFloat(getGlobalNumericValue("g_95")) ||
      1 / parseFloat(getGlobalNumericValue("f_95") || 1);

    // Get area values from S11 (external section) - use getGlobalNumericValue  
    const d85 = parseFloat(getGlobalNumericValue("d_85"));
    const d86 = parseFloat(getGlobalNumericValue("d_86"));
    const d87 = parseFloat(getGlobalNumericValue("d_87"));
    const d88 = parseFloat(getGlobalNumericValue("d_88"));
    const d89 = parseFloat(getGlobalNumericValue("d_89"));
    const d90 = parseFloat(getGlobalNumericValue("d_90"));
    const d91 = parseFloat(getGlobalNumericValue("d_91"));
    const d92 = parseFloat(getGlobalNumericValue("d_92"));
    const d93 = parseFloat(getGlobalNumericValue("d_93"));
    const d94 = parseFloat(getGlobalNumericValue("d_94"));
    const d95 = parseFloat(getGlobalNumericValue("d_95"));

    // ✅ CRITICAL TB PENALTY FIX: Read from S11's Pattern A dual-state system
    // S12 follows S11's current mode for TB penalty calculations
    let d97_tbPenaltyPercent;
    if (window.TEUI?.sect11?.ModeManager) {
      // Get current mode from S11 (no independent S12 mode - follows S11)
      const s11Mode = window.TEUI.sect11.ModeManager.currentMode;
      
      if (s11Mode === 'reference') {
        // Use S11's ReferenceState TB penalty
        d97_tbPenaltyPercent = window.TEUI.parseNumeric(
          window.TEUI.sect11.ReferenceState.getValue("d_97")
        ) || 50;
      } else {
        // Use S11's TargetState TB penalty  
        d97_tbPenaltyPercent = window.TEUI.parseNumeric(
          window.TEUI.sect11.TargetState.getValue("d_97")
        ) || 50;
      }
    } else {
      // Fallback to StateManager for compatibility
      d97_tbPenaltyPercent = parseFloat(getGlobalNumericValue("d_97")) || 50;
    }
    
    // Convert percentage to multiplier factor
    const tbFactor = 1 + d97_tbPenaltyPercent / 100;

    // Calculate with maximum precision
    const sumProductAir =
      d85 * g85 +
      d86 * g86 +
      d87 * g87 +
      d88 * g88 +
      d89 * g89 +
      d90 * g90 +
      d91 * g91 +
      d92 * g92 +
      d93 * g93;

    // Maintain at least 6 decimal places throughout calculation
    const g101_uAir =
      d101_areaAir > 0 ? (sumProductAir / d101_areaAir) * tbFactor : 0;

    // Use 'W/m2' format for U-values (matches Section 11)
    setCalculatedValue("g_101", g101_uAir, "W/m2");

    const sumProductGround = d94 * g94 + d95 * g95;
    const g102_uGround =
      d102_areaGround > 0 ? (sumProductGround / d102_areaGround) * tbFactor : 0;

    // Use 'W/m2' format for U-values (matches Section 11)
    setCalculatedValue("g_102", g102_uGround, "W/m2");

    const totalArea = parseFloat(d101_areaAir) + parseFloat(d102_areaGround);
    const d104_uCombined =
      totalArea > 0
        ? (g101_uAir * d101_areaAir + g102_uGround * d102_areaGround) /
          totalArea
        : 0;

    // Use 'W/m2' format for U-values (matches Section 11)
    setCalculatedValue("d_104", d104_uCombined, "W/m2");
  }

  function calculateWWR() {
    // Get values with full precision
    const d86 = parseFloat(getNumericValue("d_86"));
    const d88 = parseFloat(getNumericValue("d_88"));
    const d89 = parseFloat(getNumericValue("d_89"));
    const d90 = parseFloat(getNumericValue("d_90"));
    const d91 = parseFloat(getNumericValue("d_91"));
    const d92 = parseFloat(getNumericValue("d_92"));
    const d93 = parseFloat(getNumericValue("d_93"));

    // Calculate with full precision
    const windowDoorArea = d88 + d89 + d90 + d91 + d92 + d93;
    const totalWallArea = d86 + windowDoorArea;
    const wwr = totalWallArea > 0 ? windowDoorArea / totalWallArea : 0;

    // Update WWR value with standard formatter
    setCalculatedValue("d_107", wwr, "percent-2dp");

    // Calculate ratio to reference WWR with full precision
    const refWWR = 0.4; // Placeholder for reference value T107/T108
    const l107 = refWWR > 0 ? wwr / refWWR : 0;

    // Update ratio value with standard formatter
    setCalculatedValue("l_107", l107, "percent-0dp");
  }

  function calculateACH50Target() {
    // Get method value
    const d108_method = getFieldValue("d_108");

    // Get numeric values with full precision
    const g109_measured = parseFloat(getNumericValue("g_109"));
    const d101_areaAir = parseFloat(getNumericValue("d_101"));
    const d105_vol = parseFloat(getNumericValue("d_105"));

    // Target values for different methods
    let g108_nrl50Target = 0;
    const nrlTargets = {
      "AL-1A": 0.89,
      "AL-2A": 0.71,
      "AL-3A": 0.53,
      "AL-4A": 0.35,
      "AL-5A": 0.21,
      "AL-1B": 1.17,
      "AL-2B": 0.98,
      "AL-3B": 0.78,
      "AL-4B": 0.59,
      "AL-5B": 0.39,
      "AL-6B": 0.23,
    };

    // Convert ACH to NRL with full precision
    const achToNrl = (ach) =>
      d101_areaAir > 0 && d105_vol > 0
        ? (ach * d105_vol) / (d101_areaAir * 3.6)
        : 0;

    if (d108_method === "MEASURED") {
      g108_nrl50Target = achToNrl(g109_measured);
    } else if (d108_method === "PH_CLASSIC") {
      g108_nrl50Target = achToNrl(0.6);
    } else if (d108_method === "PH_LOW") {
      g108_nrl50Target = achToNrl(1.0);
    } else if (d108_method === "PH_PLUS") {
      g108_nrl50Target = 0.1;
    } else {
      g108_nrl50Target = nrlTargets[d108_method] || 0;
    }

    // Update NRL50 target with standard formatter
    setCalculatedValue("g_108", g108_nrl50Target, "number-2dp");

    // Calculate ACH50 target with full precision
    const ach50Target =
      d105_vol > 0 && d101_areaAir > 0
        ? g108_nrl50Target * (d101_areaAir / d105_vol) * 3.6
        : 0;

    // Update ACH50 target with standard formatter
    setCalculatedValue("d_109", ach50Target, "number-2dp");

    // Calculate ratio with full precision
    const targetACH = parseFloat(getNumericValue("d_109"));
    const measuredACH =
      d108_method === "MEASURED" ? g109_measured : ach50Target;
    const l109 = targetACH > 0 ? measuredACH / targetACH : 0;

    // Update ratio with standard formatter
    setCalculatedValue("l_109", l109, "percent-0dp");
  }

  function calculateAe10() {
    // Get values with full precision
    const ach50Target = parseFloat(getNumericValue("d_109"));
    const volume = parseFloat(getNumericValue("d_105"));

    // Calculate with full precision
    const ae10 = volume > 0 ? (ach50Target * volume) / 3600 : 0;

    // Update with standard formatter
    setCalculatedValue("d_110", ae10, "number-3dp");

    // Calculate ratio with full precision
    const refAe10 = 1.68; // Placeholder reference T110
    const l110 = refAe10 > 0 ? ae10 / refAe10 : 0;

    // Update ratio with standard formatter
    setCalculatedValue("l_110", l110, "percent-0dp");
  }

  function calculateNFactor() {
    // Get values with full precision
    const climateZone = parseFloat(getNumericValue("j_19")) || 6;
    const stories = parseFloat(getNumericValue("d_103")) || 1.5;
    const shielding = getFieldValue("g_103") || "Normal";

    // Determine zone number
    let zoneNum = 2;
    if (climateZone <= 4) zoneNum = 1;
    else if (climateZone >= 7) zoneNum = 3;

    // Update zone number with integer formatter
    setCalculatedValue("i_110", zoneNum.toString(), "integer");

    // Determine shielding key
    const shieldingKey =
      shielding === "Shielded"
        ? "Shielded"
        : shielding === "Exposed"
          ? "Exposed"
          : "Normal";

    // N-factor lookup table with precise values
    const nFactorTable = {
      1: {
        Shielded: { 1: 18.6, 1.5: 16.7, 2: 14.8, 3: 13.0 },
        Normal: { 1: 15.5, 1.5: 14.0, 2: 12.4, 3: 10.9 },
        Exposed: { 1: 14.0, 1.5: 12.6, 2: 11.2, 3: 9.8 },
      },
      2: {
        Shielded: { 1: 22.2, 1.5: 20.0, 2: 17.8, 3: 15.5 },
        Normal: { 1: 18.5, 1.5: 16.7, 2: 14.8, 3: 13.0 },
        Exposed: { 1: 16.7, 1.5: 15.0, 2: 13.3, 3: 11.7 },
      },
      3: {
        Shielded: { 1: 25.8, 1.5: 23.1, 2: 20.6, 3: 18.1 },
        Normal: { 1: 21.5, 1.5: 19.4, 2: 17.2, 3: 15.1 },
        Exposed: { 1: 19.4, 1.5: 17.4, 2: 15.5, 3: 13.5 },
      },
    };

    // Determine story key with full precision
    let storyKey = 1.5;
    if (stories <= 1) storyKey = 1;
    else if (stories > 1 && stories <= 1.75) storyKey = 1.5;
    else if (stories > 1.75 && stories <= 2.5) storyKey = 2;
    else storyKey = 3;

    // Get n-factor with full precision
    let nFactor = nFactorTable[2]["Normal"][1.5];
    if (nFactorTable[zoneNum]?.[shieldingKey]?.[storyKey]) {
      nFactor = nFactorTable[zoneNum][shieldingKey][storyKey];
    }

    // Update n-factor with standard formatter
    setCalculatedValue("g_110", nFactor, "number-1dp");
  }

  function calculateAirLeakageHeatLoss(isReferenceCalculation = false) {
    // Get necessary values with full precision using parseFloat
    const g108_nrl50Target = parseFloat(getNumericValue("g_108")); // NRL50 Target (L/s*m2)
    const g110_nFactor = parseFloat(getNumericValue("g_110"));
    
    // ✅ FIX: Read climate data based on calculation type (S03 canonical pattern)
    let d20_hdd, d21_cdd;
    if (isReferenceCalculation) {
      // Reference calculations: read ref_ prefixed climate data
      d20_hdd = parseFloat(getNumericValue("ref_d_20") || getNumericValue("d_20"));
      d21_cdd = parseFloat(getNumericValue("ref_d_21") || getNumericValue("d_21"));
    } else {
      // Target calculations: read target_ prefixed climate data
      d20_hdd = parseFloat(getNumericValue("target_d_20") || getNumericValue("d_20"));
      d21_cdd = parseFloat(getNumericValue("target_d_21") || getNumericValue("d_21"));
    }
    
    const d101_areaAir = parseFloat(getNumericValue("d_101"));
    const h15_conditionedArea = parseFloat(getNumericValue("h_15")); // Get Conditioned Floor Area from S2

    // Constants from Excel formula structure
    const leakageFactor = 1.21; // Factor representing conversion and heat capacity (Ws/m³K?)
    const hoursPerDay = 24;
    const wattsToKw = 1000;

    // Base calculation factor with full precision
    const baseLeakageCoefficient =
      g110_nFactor > 0
        ? (leakageFactor * g108_nrl50Target * d101_areaAir) / g110_nFactor
        : 0;

    // Calculate with full precision
    const i103_heatloss =
      (baseLeakageCoefficient * d20_hdd * hoursPerDay) / wattsToKw;
    const k103_heatgain =
      (baseLeakageCoefficient * d21_cdd * hoursPerDay) / wattsToKw;

    // Update values using standard formatters
    setCalculatedValue("i_103", i103_heatloss, "number-2dp-comma");
    setCalculatedValue("k_103", k103_heatgain, "number-2dp-comma");
  }

  function calculateEnvelopeHeatLossGain(isReferenceCalculation = false) {
    // Get values with full precision using parseFloat
    const d101_areaAir = parseFloat(getNumericValue("d_101"));
    const d102_areaGround = parseFloat(getNumericValue("d_102"));
    const g101_uAir = parseFloat(getNumericValue("g_101"));
    const g102_uGround = parseFloat(getNumericValue("g_102"));
    
    // ✅ FIX: Read climate data based on calculation type (S03 canonical pattern)
    let d20_hdd, d21_cdd, d22_gfHDD, h22_gfCDD;
    if (isReferenceCalculation) {
      // Reference calculations: read ref_ prefixed climate data
      d20_hdd = parseFloat(getNumericValue("ref_d_20") || getNumericValue("d_20"));
      d21_cdd = parseFloat(getNumericValue("ref_d_21") || getNumericValue("d_21"));
      d22_gfHDD = parseFloat(getNumericValue("ref_d_22") || getNumericValue("d_22"));
      h22_gfCDD = parseFloat(getNumericValue("ref_h_22") || getNumericValue("h_22"));
    } else {
      // Target calculations: read target_ prefixed climate data
      d20_hdd = parseFloat(getNumericValue("target_d_20") || getNumericValue("d_20"));
      d21_cdd = parseFloat(getNumericValue("target_d_21") || getNumericValue("d_21"));
      d22_gfHDD = parseFloat(getNumericValue("target_d_22") || getNumericValue("d_22"));
      h22_gfCDD = parseFloat(getNumericValue("target_h_22") || getNumericValue("h_22"));
    }

    // Constants
    const hoursPerDay = 24;
    const wattsToKw = 1000;

    // Air-facing envelope calculations (maintain full precision)
    const h101_lossRateAir = (g101_uAir * d20_hdd * hoursPerDay) / wattsToKw;
    const i101_heatlossAir = h101_lossRateAir * d101_areaAir;
    const j101_gainRateAir = (g101_uAir * d21_cdd * hoursPerDay) / wattsToKw;
    const k101_heatgainAir = j101_gainRateAir * d101_areaAir;

    // Update values using standard formatters
    setCalculatedValue("h_101", h101_lossRateAir, "number-2dp");
    setCalculatedValue("i_101", i101_heatlossAir, "number-2dp-comma");
    setCalculatedValue("j_101", j101_gainRateAir, "number-2dp");
    setCalculatedValue("k_101", k101_heatgainAir, "number-2dp-comma");

    // Ground-facing envelope calculations (maintain full precision)
    const h102_lossRateGround =
      (g102_uGround * d22_gfHDD * hoursPerDay) / wattsToKw;
    const i102_heatlossGround = h102_lossRateGround * d102_areaGround;
    const j102_gainRateGround =
      (g102_uGround * h22_gfCDD * hoursPerDay) / wattsToKw;
    const k102_heatgainGround = j102_gainRateGround * d102_areaGround;

    // Update values using standard formatters
    setCalculatedValue("h_102", h102_lossRateGround, "number-2dp");
    setCalculatedValue("i_102", i102_heatlossGround, "number-2dp-comma");
    setCalculatedValue("j_102", j102_gainRateGround, "number-2dp");
    setCalculatedValue("k_102", k102_heatgainGround, "number-2dp-comma");
  }

  function calculateEnvelopeTotals() {
    // Get values with full precision using parseFloat
    const i101 = parseFloat(getNumericValue("i_101"));
    const i102 = parseFloat(getNumericValue("i_102"));
    const i103 = parseFloat(getNumericValue("i_103"));
    const k101 = parseFloat(getNumericValue("k_101"));
    const k102 = parseFloat(getNumericValue("k_102"));
    const k103 = parseFloat(getNumericValue("k_103")); // Air leakage gain
    const h21_capacitanceSetting = getFieldValue("h_21"); // Get Capacitance/Static setting
    const k98_totalEnvelopeGainS11 = parseFloat(getNumericValue("k_98")); // Get S11 total gain

    // Calculate total loss with full precision
    const i104_totalLoss = i101 + i102 + i103;

    // Conditional calculation for k_104 based on Capacitance setting (h_21)
    let k104_totalGain;
    if (h21_capacitanceSetting === "Capacitance") {
      // Use Section 11's total envelope gain (includes solar etc.)
      k104_totalGain = k98_totalEnvelopeGainS11;
    } else {
      // Use SUM(K101:K102) - Air + Ground transmission gain only (exclude leakage k_103)
      k104_totalGain = k101 + k102;
    }

    // Update values using standard formatters
    setCalculatedValue("i_104", i104_totalLoss, "number-2dp-comma");
    setCalculatedValue("k_104", k104_totalGain, "number-2dp-comma");

    // Calculate percentages with full precision
    const l101 = i104_totalLoss > 0 ? i101 / i104_totalLoss : 0;
    const l102 = i104_totalLoss > 0 ? i102 / i104_totalLoss : 0;
    const l103 = i104_totalLoss > 0 ? i103 / i104_totalLoss : 0;
    const l104 = l101 + l102 + l103;

    // Update percentage values using standard formatters
    setCalculatedValue("l_101", l101, "percent-2dp");
    setCalculatedValue("l_102", l102, "percent-2dp");
    setCalculatedValue("l_103", l103, "percent-2dp");
    setCalculatedValue("l_104", l104, "percent-0dp");
  }

  function calculateAll() {
    // console.log("[Section12] Running dual-engine calculations..."); // Comment out

    calculateReferenceModel();
    calculateTargetModel();

    // console.log("[Section12] Dual-engine calculations complete"); // Comment out
  }

  /**
   * REFERENCE MODEL ENGINE: Calculate all values using Reference state
   * Stores results with ref_ prefix to keep separate from Target values
   */
  function calculateReferenceModel() {
    // console.log("[Section12] Running Reference Model calculations..."); // Comment out

    try {
      // ✅ FIX: Calculate Reference values using ref_ prefixed climate data
      calculateAirLeakageHeatLoss(true); // true = isReferenceCalculation
      calculateEnvelopeHeatLossGain(true); // true = isReferenceCalculation
      
      // Store reference results with ref_ prefix
      const i103_ref = getNumericValue("i_103");
      const k103_ref = getNumericValue("k_103");
      const i104_ref = getNumericValue("i_104");
      const k104_ref = getNumericValue("k_104");
      
      if (window.TEUI?.StateManager) {
        window.TEUI.StateManager.setValue("ref_i_103", i103_ref.toString(), "calculated");
        window.TEUI.StateManager.setValue("ref_k_103", k103_ref.toString(), "calculated");
        window.TEUI.StateManager.setValue("ref_i_104", i104_ref.toString(), "calculated");
        window.TEUI.StateManager.setValue("ref_k_104", k104_ref.toString(), "calculated");
      }
    } catch (error) {
      console.error("Error during Section 12 calculateReferenceModel:", error);
    }

    // console.log("[Section12] Reference Model calculations stored"); // Comment out
  }

  /**
   * TARGET MODEL ENGINE: Calculate all values using Application state
   * This is the existing calculation logic
   */
  function calculateTargetModel() {
    // console.log("[Section12] Running Target Model calculations..."); // Comment out

    try {
      calculateVolumeMetrics();
      calculateCombinedUValue();
      calculateWWR();
      calculateNFactor();
      calculateACH50Target();
      calculateAe10();
      calculateAirLeakageHeatLoss(false); // false = Target calculation
      calculateEnvelopeHeatLossGain(false); // false = Target calculation
      calculateEnvelopeTotals();

      // Update reference indicators after all calculations
      updateAllReferenceIndicators();
    } catch (error) {
      console.error("Error during Section 12 calculateTargetModel:", error);
    }

    // console.log("[Section12] Target Model calculations complete"); // Comment out
  }

  //==========================================================================
  // EVENT HANDLING AND INITIALIZATION
  //==========================================================================

  function registerDependencies() {
    if (!window.TEUI?.StateManager) {
      return;
    }
    const fields = getFields();
    let count = 0;
    Object.entries(fields).forEach(([fieldId, fieldDef]) => {
      if (fieldDef.dependencies && Array.isArray(fieldDef.dependencies)) {
        fieldDef.dependencies.forEach((depId) => {
          if (
            window.TEUI.StateManager.getValue(depId) !== null ||
            document.querySelector(`[data-field-id="${depId}"]`)
          ) {
            window.TEUI.StateManager.registerDependency(depId, fieldId);
            count++;
          }
        });
      }
    });
  }

  function initializeEventHandlers() {
    const sectionElement = document.getElementById("volumeSurfaceMetrics");
    if (!sectionElement) return;
    sectionElement.removeEventListener("blur", handleFieldBlur, true);
    sectionElement.removeEventListener("keydown", handleFieldKeydown, true);
    sectionElement.querySelectorAll("select").forEach((dropdown) => {
      dropdown.removeEventListener("change", handleDropdownChange);
    });
    sectionElement
      .querySelectorAll('[contenteditable="true"].user-input')
      .forEach((field) => {
        field.removeEventListener("focus", handleFieldFocus);
        field.removeEventListener("focusout", handleFieldFocusOut);
      });
    sectionElement.addEventListener("blur", handleFieldBlur, true);
    sectionElement.addEventListener("keydown", handleFieldKeydown, true);
    const dropdowns = sectionElement.querySelectorAll("select");
    console.log(`S12: Found ${dropdowns.length} dropdown(s) to initialize`);
    dropdowns.forEach((dropdown) => {
      const fieldId = dropdown.getAttribute("data-field-id");
      console.log(`S12: Adding dropdown listener for ${fieldId}`);
      dropdown.addEventListener("change", handleDropdownChange);
    });
    const editableFields = sectionElement.querySelectorAll(
      '[contenteditable="true"].user-input',
    );
    editableFields.forEach((field) => {
      field.addEventListener("focus", handleFieldFocus);
      field.addEventListener("focusout", handleFieldFocusOut);
    });
    handleConditionalEditability();
    const d108Dropdown = sectionElement.querySelector(
      'select[data-field-id="d_108"]',
    );
    if (d108Dropdown) {
      d108Dropdown.removeEventListener("change", handleConditionalEditability);
      d108Dropdown.addEventListener("change", handleConditionalEditability);
    }
  }

  function handleDropdownChange(event) {
    const dropdown = event.target;
    const fieldId = dropdown.getAttribute("data-field-id");
    if (fieldId) {
      console.log(`S12: Dropdown ${fieldId} changed to: ${dropdown.value}`);
      
      // ✅ DUAL-STATE: Store value using the ModeManager facade.
      ModeManager.setValue(fieldId, dropdown.value, "user-modified");
      
      // Handle conditional ghosting for g_109 based on d_108 selection
      if (fieldId === "d_108") {
        const g109Element = document.querySelector('[data-field-id="g_109"]');
        if (g109Element) {
          if (dropdown.value === "MEASURED") {
            // Enable g_109 for user input
            g109Element.classList.remove("disabled-input", "ghosted");
            g109Element.classList.add("editable", "user-input");
            g109Element.setAttribute("contenteditable", "true");
            g109Element.style.backgroundColor = "#f0f8ff"; // Indicate editable
            g109Element.style.color = "#000"; // Normal text color
          } else {
            // Disable g_109 for user input
            g109Element.classList.remove("editable", "user-input");
            g109Element.classList.add("disabled-input", "ghosted");
            g109Element.setAttribute("contenteditable", "false");
            g109Element.style.backgroundColor = "#f8f9fa"; // Grayed out
            g109Element.style.color = "#6c757d"; // Gray text
            // Set default value when disabled
            g109Element.textContent = "0.00";
            ModeManager.setValue("g_109", "0", "calculated");
          }
        }
      }
      
      // Always trigger calculations after dropdown changes
      calculateAll();
    }
  }

  function handleFieldFocus(event) {
    event.target.classList.add("editing");
  }

  function handleFieldFocusOut(event) {
    event.target.classList.remove("editing");
  }

  function handleFieldBlur(event) {
    const field = event.target;
    if (
      field.hasAttribute("contenteditable") &&
      field.getAttribute("contenteditable") === "true" &&
      field.classList.contains("user-input")
    ) {
      const fieldId = field.getAttribute("data-field-id");
      if (!fieldId) return;
      // Use parseNumeric to handle input
      const numValue = window.TEUI.parseNumeric(field.textContent);
      const originalText = field.textContent;

      if (!isNaN(numValue) && isFinite(numValue)) {
        // Determine format (e.g., integer or number-2dp)
        const formatType = Number.isInteger(numValue)
          ? "integer"
          : "number-2dp";
        const formattedValue = window.TEUI.formatNumber(numValue, formatType);
        if (field.textContent !== formattedValue) {
          field.textContent = formattedValue;
        }
        // ✅ DUAL-STATE: Store value using the ModeManager facade.
        ModeManager.setValue(fieldId, String(numValue), "user-modified");
        
        console.log(`S12: Field ${fieldId} updated to: ${numValue}`);
        calculateAll();
      } else {
        // Handle invalid input - revert to previous state value or 0
        const previousValue = window.TEUI?.StateManager?.getValue(fieldId);
        if (previousValue !== null && previousValue !== undefined) {
          // Determine format for previous value
          const prevNumValue = window.TEUI.parseNumeric(previousValue);
          const formatType = Number.isInteger(prevNumValue)
            ? "integer"
            : "number-2dp";
          field.textContent = window.TEUI.formatNumber(
            prevNumValue,
            formatType,
          );
        } else {
          field.textContent = window.TEUI.formatNumber(0, "number-2dp");
        }
      }
    }
  }

  function handleFieldKeydown(event) {
    const field = event.target;
    if (
      field.hasAttribute("contenteditable") &&
      field.getAttribute("contenteditable") === "true"
    ) {
      if (event.key === "Enter") {
        event.preventDefault();
        field.blur();
      }
    }
  }

  function handleConditionalEditability() {
    const d108Dropdown = document.querySelector('select[data-field-id="d_108"]');
    const g109Cell = document.querySelector('[data-field-id="g_109"]');
    
    if (!d108Dropdown || !g109Cell) {
      console.warn("S12: Could not find d_108 dropdown or g_109 cell for conditional editability");
      return;
    }
    
    // ✅ DUAL-STATE: Use ModeManager to get current value
    const currentD108Value = ModeManager.getValue("d_108") || d108Dropdown.value;
    const isMeasured = currentD108Value === "MEASURED";
    
    console.log(`S12: Setting conditional editability - d_108: ${currentD108Value}, isMeasured: ${isMeasured}`);
    
    if (isMeasured) {
      // Enable g_109 for user input
      g109Cell.setAttribute("contenteditable", "true");
      g109Cell.classList.add("user-input", "editable");
      g109Cell.classList.remove("calculated-value", "PendingValue", "disabled-input", "ghosted");
      g109Cell.style.backgroundColor = "#f0f8ff"; // Indicate editable
      g109Cell.style.color = "#000"; // Normal text color
      
      // ✅ DUAL-STATE: Get current value from our state
      const currentValue = ModeManager.getValue("g_109");
      const valueToDisplay = currentValue !== null && !isNaN(parseFloat(currentValue)) ? currentValue : "0";
      g109Cell.textContent = window.TEUI.formatNumber(valueToDisplay, "number-2dp");
      
      // Add event listeners for the now-editable field
      g109Cell.removeEventListener("focus", handleFieldFocus);
      g109Cell.removeEventListener("focusout", handleFieldFocusOut);
      g109Cell.addEventListener("focus", handleFieldFocus);
      g109Cell.addEventListener("focusout", handleFieldFocusOut);
    } else {
      // Disable g_109 for user input  
      g109Cell.setAttribute("contenteditable", "false");
      g109Cell.classList.remove("user-input", "editable", "editing");
      g109Cell.classList.add("disabled-input", "ghosted");
      g109Cell.style.backgroundColor = "#f8f9fa"; // Grayed out
      g109Cell.style.color = "#6c757d"; // Gray text
      g109Cell.textContent = "N/A";
      
      // Remove event listeners
      g109Cell.removeEventListener("focus", handleFieldFocus);
      g109Cell.removeEventListener("focusout", handleFieldFocusOut);
      
      // ✅ DUAL-STATE: Reset value in state
      ModeManager.setValue("g_109", "0", "calculated");
    }
  }

  function onSectionRendered() {
    if (isInitialized) return; // Run initialization only once

    console.log("S12: Section rendered - initializing Pattern A Dual-State Module.");

    // 1. Initialize the ModeManager and its internal states
    ModeManager.initialize();

    // 2. Setup the section-specific toggle switch in the header
    injectHeaderControls();

    // 3. Initialize existing infrastructure  
    registerWithStateManager();
    registerDependencies();
    initializeEventHandlers(); // Event handlers now only added once
    addStateManagerListeners(); // Critical for "robot fingers" TB penalty connection

    // 4. Sync UI to the default (Target) state
    ModeManager.refreshUI();

    // 4. Perform initial calculations for this section
    calculateAll(); // Ensure calculations are run immediately
    addCheckmarkStyles(); // Add section-specific styles if needed
    
    isInitialized = true;
    console.log("S12: Pattern A dual-state initialization complete.");
  }

  function registerWithStateManager() {
    if (!window.TEUI?.StateManager) return;
    const fields = getFields();
    Object.entries(fields).forEach(([fieldId, fieldDef]) => {
      const currentValue = window.TEUI.StateManager.getValue(fieldId);
      if (
        currentValue === null ||
        currentValue === undefined ||
        window.TEUI.StateManager.getDebugInfo(fieldId)?.state === "default"
      ) {
        if (
          fieldDef.defaultValue !== undefined &&
          fieldDef.defaultValue !== null &&
          fieldDef.defaultValue !== ""
        ) {
          window.TEUI.StateManager.setValue(
            fieldId,
            fieldDef.defaultValue,
            "default",
          );
        }
      }
    });
  }

  function addStateManagerListeners() {
    if (!window.TEUI?.StateManager?.addListener) {
      console.warn("S12: StateManager not available for adding listeners");
      return;
    }

    // ✅ CRITICAL: Listen for TB penalty changes from S11 (enables "robot fingers")
    window.TEUI.StateManager.addListener("d_97", (newValue) => {
      console.log(`[S12] TB penalty changed to: ${newValue}% - updating U-values`);
      // Note: calculateCombinedUValue will be called directly by S11's "robot fingers"
      // but this ensures our states stay synchronized
      calculateCombinedUValue();
    });

    // Listen for climate data changes that affect our calculations
    window.TEUI.StateManager.addListener("d_20", calculateAll); // HDD
    window.TEUI.StateManager.addListener("d_21", calculateAll); // CDD
    window.TEUI.StateManager.addListener("d_22", calculateAll); // Ground HDD
    window.TEUI.StateManager.addListener("h_22", calculateAll); // Ground CDD
    
    // Listen for envelope area changes from S11
    window.TEUI.StateManager.addListener("d_101", calculateAll); // Air-facing area
    window.TEUI.StateManager.addListener("d_102", calculateAll); // Ground-facing area

    console.log("S12: StateManager listeners added successfully");
  }

  function addCheckmarkStyles() {
    let styleElement = document.getElementById("sect12-styles");
    if (!styleElement) {
      styleElement = document.createElement("style");
      styleElement.id = "sect12-styles";
      styleElement.textContent = `
                .checkmark { color: green; font-weight: bold; }
                .warning { color: red; font-weight: bold; }
                .editable { background-color: #f0f8ff; cursor: text; }
                .editing { outline: 1px solid blue; background-color: #e6f2ff; }
                /* .calculated-value { background-color: #f8f9fa; } REMOVED - Style handled globally */
                .highlighted-result { font-weight: bold; background-color: #fff3cd; }
            `;
      document.head.appendChild(styleElement);
    }
  }

  //==========================================================================
  // PUBLIC API
  //==========================================================================

  return {
    getFields: getFields,
    getDropdownOptions: getDropdownOptions,
    getLayout: getLayout,
    initializeEventHandlers: initializeEventHandlers,
    onSectionRendered: onSectionRendered,
    calculateAll: calculateAll,
    calculateCombinedUValue: calculateCombinedUValue,
  };
})();
