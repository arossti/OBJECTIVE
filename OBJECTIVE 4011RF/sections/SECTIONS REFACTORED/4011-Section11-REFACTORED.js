/**
 * 4011-Section11.js
 * Refactored Transmission Losses (Section 11) module for TEUI Calculator 4.011
 *
 * REFACTORED FOR DUAL-STATE ISOLATION.
 */

// Ensure namespace exists
window.TEUI = window.TEUI || {};
window.TEUI.SectionModules = window.TEUI.SectionModules || {};

// Section 11: Transmission Losses Module
window.TEUI.SectionModules.sect11 = (function () {
  //==========================================================================
  // DUAL-STATE MODE MANAGEMENT
  //==========================================================================
  const ModeManager = {
    currentMode: "target",
    switchMode: function (mode) {
      if (mode !== "target" && mode !== "reference") return;
      this.currentMode = mode;
    },
  };
  window.TEUI.sect11.ModeManager = ModeManager;

  //==========================================================================
  // HELPER FUNCTIONS (REFACTORED FOR 100% STATE ISOLATION)
  //==========================================================================

  function getNumericValue(fieldId, defaultValue = 0) {
    const prefix = ModeManager.currentMode === "target" ? "target_" : "ref_";
    const rawValue = window.TEUI?.StateManager?.getValue(`${prefix}${fieldId}`);
    return window.TEUI?.parseNumeric?.(rawValue, defaultValue) ?? defaultValue;
  }

  function setCalculatedValue(fieldId, rawValue, format = "number") {
    const modePrefix = ModeManager.currentMode === "target" ? "target_" : "ref_";
    const prefixedFieldId = `${modePrefix}${fieldId}`;
    
    if (window.TEUI?.StateManager) {
        const valueToStore = isFinite(rawValue) ? rawValue.toString() : "N/A";
        window.TEUI.StateManager.setValue(prefixedFieldId, valueToStore, "calculated");
    }

    if (ModeManager.currentMode === "target") {
        const formattedValue = window.TEUI?.formatNumber?.(rawValue, format) ?? rawValue?.toString() ?? "N/A";
        const element = document.querySelector(`[data-field-id="${fieldId}"]`);
        if (element) {
            element.textContent = formattedValue;
            element.classList.toggle("negative-value", isFinite(rawValue) && rawValue < 0);
        }
    }
  }
  
  //==========================================================================
  // CONFIGURATION (No Changes)
  //==========================================================================
  const areaSourceMap = { 88: "d_73", 89: "d_74", 90: "d_75", 91: "d_76", 92: "d_77", 93: "d_78" };
  const componentConfig = [
    { row: 85, type: "air", input: "rsi" }, { row: 86, type: "air", input: "rsi" },
    { row: 87, type: "air", input: "rsi" }, { row: 88, type: "air", input: "uvalue" },
    { row: 89, type: "air", input: "uvalue" }, { row: 90, type: "air", input: "uvalue" },
    { row: 91, type: "air", input: "uvalue" }, { row: 92, type: "air", input: "uvalue" },
    { row: 93, type: "air", input: "uvalue" }, { row: 94, type: "ground", input: "rsi" },
    { row: 95, type: "ground", input: "rsi" },
  ];

  //==========================================================================
  // LAYOUT & ACCESSOR METHODS (No Changes)
  //==========================================================================
  const sectionRows = { /* ... Original sectionRows ... */ };
  function getFields() { /* ... Original getFields ... */ }
  function getDropdownOptions() { /* ... Original getDropdownOptions ... */ }
  function getLayout() { /* ... Original getLayout ... */ }
  function createLayoutRow(row) { /* ... Original createLayoutRow ... */ }

  //==========================================================================
  // DUAL-ENGINE CALCULATION ORCHESTRATION
  //==========================================================================
  
  function calculateAll() {
      calculateTargetModel();
      calculateReferenceModel();
  }

  function calculateAllForMode() {
      let totals = { loss: 0, gain: 0, areaD: 0, airAreaD: 0, groundAreaD: 0 };
      componentConfig.forEach(config => {
          const result = calculateComponentRow(config.row, config);
          const area = getNumericValue(`d_${config.row}`);
          totals.loss += result.heatloss;
          totals.gain += result.heatgain;
          if (config.row >= 85 && config.row <= 95) totals.areaD += area;
          if (config.type === "air") totals.airAreaD += area;
          else if (config.type === "ground") totals.groundAreaD += area;
      });
      calculateThermalBridgePenalty(totals.loss, totals.gain);
  }

  function calculateTargetModel() {
      const originalMode = ModeManager.currentMode;
      ModeManager.switchMode('target');
      try {
          calculateAllForMode();
      } finally {
          ModeManager.switchMode(originalMode);
      }
  }

  function calculateReferenceModel() {
      const originalMode = ModeManager.currentMode;
      ModeManager.switchMode('reference');
      try {
          calculateAllForMode();
      } finally {
          ModeManager.switchMode(originalMode);
      }
  }

  function calculateComponentRow(rowNumber, config) {
    const { type, input } = config;
    const rowStr = rowNumber.toString();
    const areaFieldId = `d_${rowStr}`, rsiFieldId = `f_${rowStr}`, uValueFieldId = `g_${rowStr}`;
    const sourceAreaFieldId = areaSourceMap[rowNumber];
    
    // Getters are now mode-aware
    const area = sourceAreaFieldId ? getNumericValue(sourceAreaFieldId) : getNumericValue(areaFieldId);
    const inputValue = (input === 'rsi') ? getNumericValue(rsiFieldId) : getNumericValue(uValueFieldId);
    
    let rsiValue = (input === 'rsi') ? inputValue : (inputValue > 0 ? 1 / inputValue : Infinity);
    let uValue = (input === 'uvalue') ? inputValue : (rsiValue > 0 ? 1 / rsiValue : Infinity);
    
    setCalculatedValue((input === 'rsi' ? uValueFieldId : rsiFieldId), (input === 'rsi' ? uValue : rsiValue));
    
    const hdd = getNumericValue((type === 'air' ? 'd_20' : 'd_22'));
    const heatgainMultiplier = (type === 'air' ? getNumericValue('d_21') : getNumericValue('h_22')) * 24;
    
    const denominator = rsiValue * 1000;
    const heatloss = (area * hdd * 24) / denominator;
    const heatgain = (area * heatgainMultiplier) / denominator;
    
    setCalculatedValue(`i_${rowStr}`, heatloss);
    setCalculatedValue(`k_${rowStr}`, heatgain);

    return { heatloss, heatgain };
  }

  function calculateThermalBridgePenalty(componentHeatloss, componentHeatgain) {
      const penaltyDecimal = getNumericValue("d_97") / 100;
      setCalculatedValue("i_97", componentHeatloss * penaltyDecimal);
      setCalculatedValue("k_97", componentHeatgain * penaltyDecimal);
  }

  //==========================================================================
  // EVENT HANDLING AND INITIALIZATION
  //==========================================================================
  function initializeEventHandlers() {
    // Event delegation for editable fields and sliders
    const sectionElement = document.getElementById("transmissionLosses");
    if (!sectionElement) return;

    sectionElement.addEventListener('blur', (e) => {
        if(e.target.matches('[contenteditable="true"]')) {
            const fieldId = e.target.getAttribute("data-field-id");
            if (fieldId) {
                setFieldValue(fieldId, e.target.textContent.trim(), 'user-modified');
                calculateAll();
            }
        }
    }, true);

    sectionElement.addEventListener('change', (e) => {
        if(e.target.matches('input[type="range"]')) {
            const fieldId = e.target.getAttribute("data-field-id");
            if (fieldId) {
                setFieldValue(fieldId, e.target.value, 'user-modified');
                calculateAll();
            }
        }
    });

    if (window.TEUI?.StateManager) {
        const sm = window.TEUI.StateManager;
        const deps = ["d_20", "d_21", "d_22", "h_22", "i_21", "d_97"];
        deps.forEach(dep => {
            sm.addListener(`target_${dep}`, calculateTargetModel);
            sm.addListener(`ref_${dep}`, calculateReferenceModel);
        });
        Object.values(areaSourceMap).forEach(source => {
            sm.addListener(`target_${source}`, calculateTargetModel);
            sm.addListener(`ref_${source}`, calculateReferenceModel);
        });
    }
  }

  function onSectionRendered() {
    initializeEventHandlers();
    calculateAll();
  }

  return {
    getFields,
    getDropdownOptions,
    getLayout,
    onSectionRendered,
    calculateAll,
  };
})(); 