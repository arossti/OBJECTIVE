/**
 * 4011-Section08-CLEAN.js
 * Indoor Air Quality (Section 8) module for TEUI Calculator 4.011
 * 
 * REFACTORED FOR 100% DUAL-STATE ISOLATION following the DUAL-STATE-IMPLEMENTATION-GUIDE.
 * This version includes a self-contained, section-local toggle for isolated testing.
 */

window.TEUI = window.TEUI || {};
window.TEUI.SectionModules = window.TEUI.SectionModules || {};

// Section-specific namespace
window.TEUI.sect08 = window.TEUI.sect08 || {};

window.TEUI.SectionModules.sect08 = (function () {
  //==========================================================================
  // DUAL-STATE MODE MANAGEMENT (Standardized Pattern)
  //==========================================================================
  const ModeManager = {
    currentMode: "target",
    switchMode: function (newMode) {
      if (this.currentMode === newMode) return;
      if (newMode !== "target" && newMode !== "reference") return;
      
      this.currentMode = newMode;
      console.log(`S08: Switched to ${this.currentMode.toUpperCase()} mode.`);
      
      this.updateUIForMode();
      calculateAll();
    },
    updateUIForMode: function() {
        const sectionElement = document.getElementById("indoorAirQuality");
        if (!sectionElement) return;

        const prefix = this.currentMode === 'target' ? 'target_' : 'ref_';
        
        // Explicitly define all user input fields to sync, mirroring the robust S10 pattern
        const fieldsToSync = ['d_56', 'd_57', 'd_58', 'd_59', 'i_59'];

        fieldsToSync.forEach(fieldId => {
            const element = sectionElement.querySelector(`[data-field-id="${fieldId}"]`);
            if (!element) return;

            const stateValue = window.TEUI.StateManager.getValue(`${prefix}${fieldId}`);
            
            if (stateValue !== undefined && stateValue !== null) {
                // Check if the element is a slider (range input)
                if (element.matches('input[type="range"]')) {
                    element.value = stateValue;
                    // Also update the text display for the slider
                    const display = document.querySelector(`[data-display-for="${fieldId}"]`);
                    if (display) display.textContent = `${stateValue}%`;
                } else if (element.isContentEditable) {
                    element.textContent = stateValue;
                }
            }
        });
    }
  };
  // Expose the ModeManager for the local toggle to use
  window.TEUI.sect08 = { ModeManager: ModeManager };


  //==========================================================================
  // HELPER FUNCTIONS (Standardized Pattern from Guide)
  //==========================================================================
  function getNumericValue(fieldId, defaultValue = 0) {
    const prefix = ModeManager.currentMode === "target" ? "target_" : "ref_";
    const rawValue = window.TEUI?.StateManager?.getValue(`${prefix}${fieldId}`);
    // NO FALLBACK: Strict isolation. If the prefixed value doesn't exist, use the default.
    return window.TEUI?.parseNumeric?.(rawValue, defaultValue) ?? defaultValue;
  }

  function setCalculatedValue(fieldId, rawValue) {
    const prefix = ModeManager.currentMode === "target" ? "target_" : "ref_";
    const valueToStore = isFinite(rawValue) ? rawValue.toString() : "N/A";
    
    // Always write to the prefixed state for the current mode
    window.TEUI.StateManager.setValue(`${prefix}${fieldId}`, valueToStore, "calculated");

    // ONLY write to the global (unprefixed) state if in Target mode
    if (ModeManager.currentMode === "target") {
      window.TEUI.StateManager.setValue(fieldId, valueToStore, "calculated");
      
      // Update the DOM
      const element = document.querySelector(`[data-field-id="${fieldId}"]`);
      if (element) {
        const formatType = getFieldFormat(fieldId);
        const formattedValue = window.TEUI?.formatNumber?.(rawValue, formatType) ?? valueToStore;
        element.textContent = formattedValue;
      }
    }
  }

  function getFieldFormat(fieldId) {
    const formatMap = {
      d_56: "number-0dp", d_57: "number-0dp", d_58: "number-0dp",
      d_59: "number-0dp", i_59: "number-0dp", d_60: "number-2dp-comma",
      k_56: "number-0dp", k_57: "number-0dp", k_58: "number-0dp",
      m_56: "percent-0dp", m_57: "percent-0dp", m_58: "percent-0dp", m_59: "percent-0dp",
      n_56: "raw", n_57: "raw", n_58: "raw", n_59: "raw"
    };
    return formatMap[fieldId] || "number-0dp";
  }

  function setElementClass(fieldId, className) {
    if (ModeManager.currentMode !== "target") return; // Only update DOM in target mode
    const element = document.querySelector(`[data-field-id="${fieldId}"]`);
    if (element) {
      element.classList.remove("checkmark", "warning");
      if (className) element.classList.add(className);
    }
  }

  //==========================================================================
  // CALCULATION LOGIC (Reads from current mode state)
  //==========================================================================
  function calculateAll() {
    // These functions now implicitly use the current mode via the helper functions
    calculateWoodOffset();
    calculateAirQualityStatus();
  }

  function calculateWoodOffset() {
    const d31_actualWoodUse = getNumericValue("d_31");
    const k31_targetWoodEmissions = getNumericValue("k_31");
    const woodOffset = (d31_actualWoodUse > 0) ? (k31_targetWoodEmissions / 1000) : 0;
    setCalculatedValue("d_60", woodOffset);
  }

  function calculateAirQualityStatus() {
    setCalculatedValue("k_56", 150);
    setCalculatedValue("k_57", 1000);
    setCalculatedValue("k_58", 400);
    setCalculatedValue("k_59", "30-60");

    const radonValue = getNumericValue("d_56");
    const co2Value = getNumericValue("d_57");
    const tvocValue = getNumericValue("d_58");
    const heatingHumidity = getNumericValue("d_59");
    const coolingHumidity = getNumericValue("i_59");
    
    // Radon Status
    const radonPercent = radonValue / 150;
    setCalculatedValue("m_56", radonPercent);
    setCalculatedValue("n_56", radonValue <= 150 ? "✓" : "✗");
    setElementClass("n_56", radonValue <= 150 ? "checkmark" : "warning");

    // CO2 Status
    const co2Percent = co2Value / 1000;
    setCalculatedValue("m_57", co2Percent);
    setCalculatedValue("n_57", co2Value <= 1000 ? "✓" : "✗");
    setElementClass("n_57", co2Value <= 1000 ? "checkmark" : "warning");

    // TVOC Status
    const tvocPercent = tvocValue / 400;
    setCalculatedValue("m_58", tvocPercent);
    setCalculatedValue("n_58", tvocValue <= 400 ? "✓" : "✗");
    setElementClass("n_58", tvocValue <= 400 ? "checkmark" : "warning");

    // Humidity Status
    const averageHumidity = (heatingHumidity + coolingHumidity) / 2;
    const humidityPercent = averageHumidity / 45; // Middle of 30-60 range
    setCalculatedValue("m_59", humidityPercent);
    const isInRange = (heatingHumidity >= 30 && heatingHumidity <= 60) && (coolingHumidity >= 30 && coolingHumidity <= 60);
    setCalculatedValue("n_59", isInRange ? "✓" : "✗");
    setElementClass("n_59", isInRange ? "checkmark" : "warning");
  }


  //==========================================================================
  // EVENT HANDLING (Standardized Pattern)
  //==========================================================================
  function handleUserInput(event) {
    const fieldId = event.target.getAttribute('data-field-id');
    if (!fieldId) return;

    const value = event.target.type === 'range' ? event.target.value : event.target.textContent.trim();
    const prefix = ModeManager.currentMode === 'target' ? 'target_' : 'ref_';

    window.TEUI.StateManager.setValue(`${prefix}${fieldId}`, value, "user-modified");
    
    // Live update for sliders
    if (event.target.type === 'range') {
      const display = document.querySelector(`[data-display-for="${fieldId}"]`);
      if (display) display.textContent = `${value}%`;
    }
    
    calculateAll();
  }

  function initializeEventHandlers() {
    const sectionElement = document.getElementById("indoorAirQuality");
    if (!sectionElement) return;

    sectionElement.addEventListener('input', e => {
        if (e.target.matches('input[type="range"]')) handleUserInput(e);
    });
    
    sectionElement.addEventListener('change', e => {
      if (e.target.matches('input[type="range"]')) handleUserInput(e);
    });

    sectionElement.addEventListener('blur', e => {
        if (e.target.matches('[contenteditable="true"]')) handleUserInput(e);
    }, true);

    sectionElement.addEventListener('keydown', e => {
      if (e.target.matches('[contenteditable="true"]') && e.key === 'Enter') {
        e.preventDefault();
        e.target.blur();
      }
    });

    if (window.TEUI?.StateManager) {
      const sm = window.TEUI.StateManager;
      const dependencies = ["d_31", "k_31"];
      dependencies.forEach(dep => {
        sm.addListener(`target_${dep}`, () => ModeManager.currentMode === 'target' && calculateAll());
        sm.addListener(`ref_${dep}`, () => ModeManager.currentMode === 'reference' && calculateAll());
      });
    }
  }

  //==========================================================================
  // SECTION-LOCAL TOGGLE INJECTION
  //==========================================================================
  /**
   * REMOVE BEFORE FLIGHT: This function is for temporary, section-isolated testing only.
   * It injects a local toggle into the section header.
   * This should be removed once all sections are refactored and the global toggle is reinstated.
   */
  function injectLocalToggle() {
    const sectionHeader = document.querySelector("#indoorAirQuality .section-header");
    if (!sectionHeader || sectionHeader.querySelector(".local-toggle-container")) return;

    const toggleContainer = document.createElement("div");
    toggleContainer.className = "local-toggle-container";
    toggleContainer.style.cssText = "display: flex; align-items: center; margin-left: auto; gap: 10px;";

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

    toggleContainer.appendChild(stateIndicator);
    toggleContainer.appendChild(toggleSwitch);
    sectionHeader.appendChild(toggleContainer);
  }

  //==========================================================================
  // LAYOUT & INITIALIZATION (Largely unchanged)
  //==========================================================================
  const sectionRows = {
    header: {
      id: "08-ID", rowId: "08-ID",
      cells: {
        c: { content: "C", classes: ["section-subheader"] }, d: { content: "Targeted", classes: ["section-subheader"] },
        e: { content: "E", classes: ["section-subheader"] }, f: { content: "F", classes: ["section-subheader"] },
        g: { content: "G", classes: ["section-subheader"] }, h: { content: "H", classes: ["section-subheader"] },
        i: { content: "I", classes: ["section-subheader"] }, j: { content: "J", classes: ["section-subheader"] },
        k: { content: "Guidance Limits", classes: ["section-subheader"] }, l: { content: "L", classes: ["section-subheader"] },
        m: { content: "% per Health Canada/NBC", classes: ["section-subheader"] }, n: { content: "Status", classes: ["section-subheader"] },
      },
    },
    56: { id: "A.2", label: "Radon (annual avg.)", cells: { c: { label: "Radon (annual avg.)" }, d: { fieldId: "d_56", type: "editable", value: "50", classes: ["user-input"] }, e: { content: "Bq/m³" }, k: { fieldId: "k_56", type: "calculated", value: "150" }, l: { content: "Bq/m³" }, m: { fieldId: "m_56", type: "calculated", value: "0%" }, n: { fieldId: "n_56", type: "calculated", value: "✓", classes: ["checkmark"] }}},
    57: { id: "A.3", label: "CO2 (annual avg.)", cells: { c: { label: "CO2 (annual avg.)" }, d: { fieldId: "d_57", type: "editable", value: "550", classes: ["user-input"] }, e: { content: "ppm" }, k: { fieldId: "k_57", type: "calculated", value: "1000" }, l: { content: "ppm" }, m: { fieldId: "m_57", type: "calculated", value: "0%" }, n: { fieldId: "n_57", type: "calculated", value: "✓", classes: ["checkmark"] }}},
    58: { id: "A.4", label: "TVOC (annual avg.)", cells: { c: { label: "TVOC (annual avg.)" }, d: { fieldId: "d_58", type: "editable", value: "100", classes: ["user-input"] }, e: { content: "ppm" }, k: { fieldId: "k_58", type: "calculated", value: "400" }, l: { content: "ppm" }, m: { fieldId: "m_58", type: "calculated", value: "0%" }, n: { fieldId: "n_58", type: "calculated", value: "✓", classes: ["checkmark"] }}},
    59: { id: "A.5.1", label: "Indoor Heating Season Avg.", cells: { c: { label: "Indoor Heating Season Avg." }, d: { fieldId: "d_59", type: "percentage", value: "45", min: 0, max: 100, step: 1, classes: ["user-input"] }, e: { content: "% RH" }, f: { content: "A.5.2" }, g: { label: "" }, h: { content: "Indoor Cooling Season Avg." }, i: { fieldId: "i_59", type: "percentage", value: "45", min: 0, max: 100, step: 1, classes: ["user-input"] }, j: { content: "% RH" }, k: { fieldId: "k_59", type: "calculated", value: "30-60" }, l: { content: "%" }, m: { fieldId: "m_59", type: "calculated", value: "0%" }, n: { fieldId: "n_59", type: "calculated", value: "✓", classes: ["checkmark"] }}},
    60: { id: "A.6", label: "Wood Emissions Offset (Calculated)", cells: { c: { label: "Wood Emissions Offset (Calculated from Target Wood Use)" }, d: { fieldId: "d_60", type: "calculated", value: "0.00" }, e: { content: "MT/yr CO2e" }}},
  };

  function getFields() {
    const fields = {};
    Object.values(sectionRows).forEach(row => {
      if (!row.cells) return;
      Object.values(row.cells).forEach(cell => {
        if (cell.fieldId) {
          fields[cell.fieldId] = {
            type: cell.type, label: cell.label || row.label, defaultValue: cell.value || "",
            section: "indoorAirQuality",
          };
          if (cell.min !== undefined) fields[cell.fieldId].min = cell.min;
          if (cell.max !== undefined) fields[cell.fieldId].max = cell.max;
          if (cell.step !== undefined) fields[cell.fieldId].step = cell.step;
        }
      });
    });
    return fields;
  }

  function getDropdownOptions() { return {}; }

  function getLayout() {
    const layoutRows = [];
    if (sectionRows["header"]) layoutRows.push(createLayoutRow(sectionRows["header"]));
    Object.keys(sectionRows).forEach(key => {
      if (key !== "header") layoutRows.push(createLayoutRow(sectionRows[key]));
    });
    return { rows: layoutRows };
  }

  function createLayoutRow(row) {
    const rowDef = { id: row.id, cells: [{}, {}] };
    const columns = ["c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n"];
    columns.forEach(col => {
      const cell = row.cells?.[col] || {};
      if (col === "c" && !cell.label && row.label) cell.label = row.label;
      rowDef.cells.push(cell);
    });
    return rowDef;
  }

  function onSectionRendered() {
    addStatusStyles();
    injectLocalToggle();
    initializeEventHandlers();
    
    // Set initial default values in StateManager for all fields that have a default
    const allFields = getFields();
    Object.keys(allFields).forEach(fieldId => {
        const field = allFields[fieldId];
        if (field.defaultValue) {
            // Set the default for both target and ref to ensure a starting value
            window.TEUI.StateManager.setValue(`target_${fieldId}`, field.defaultValue, 'default');
            window.TEUI.StateManager.setValue(`ref_${fieldId}`, field.defaultValue, 'default');
        }
    });

    // NOW, override specific slider defaults for Target vs. Reference modes as requested
    window.TEUI.StateManager.setValue('target_d_59', '45', 'default'); // Target Winter RH
    window.TEUI.StateManager.setValue('target_i_59', '45', 'default'); // Target Summer RH
    window.TEUI.StateManager.setValue('ref_d_59', '30', 'default');   // Reference Winter RH
    window.TEUI.StateManager.setValue('ref_i_59', '50', 'default');   // Reference Summer RH

    // Initial UI sync to show correct default values for the starting mode
    ModeManager.updateUIForMode();

    calculateAll();
  }

  function addStatusStyles() {
    if (!document.getElementById("air-quality-status-styles")) {
      const styleElement = document.createElement("style");
      styleElement.id = "air-quality-status-styles";
      styleElement.textContent = `
        .checkmark { color: #28a745 !important; font-weight: bold; font-size: 1.2em; }
        .warning { color: #dc3545 !important; font-weight: bold; font-size: 1.2em; }
      `;
      document.head.appendChild(styleElement);
    }
  }

  return {
    getFields, getDropdownOptions, getLayout, onSectionRendered, calculateAll,
  };
})(); 