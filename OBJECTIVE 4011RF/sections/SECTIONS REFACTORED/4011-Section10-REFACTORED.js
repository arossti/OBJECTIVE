/**
 * 4011-Section10.js
 * Radiant Gains (Section 10) module for TEUI Calculator 4.011
 *
 * REFACTORED FOR DUAL-STATE ISOLATION.
 */

// Ensure namespace exists
window.TEUI = window.TEUI || {};
window.TEUI.SectionModules = window.TEUI.SectionModules || {};

// Section 10: Radiant Gains Module
window.TEUI.SectionModules.sect10 = (function () {
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
  window.TEUI.sect10.ModeManager = ModeManager;

  //==========================================================================
  // HELPER FUNCTIONS (REFACTORED FOR 100% STATE ISOLATION)
  //==========================================================================

  function getNumericValue(fieldId, defaultValue = 0) {
    const prefix = ModeManager.currentMode === "target" ? "target_" : "ref_";
    const rawValue = window.TEUI?.StateManager?.getValue(`${prefix}${fieldId}`);
    return window.TEUI?.parseNumeric?.(rawValue, defaultValue) ?? defaultValue;
  }
  
  function getFieldValue(fieldId, defaultValue = "") {
    const prefix = ModeManager.currentMode === "target" ? "target_" : "ref_";
    const rawValue = window.TEUI?.StateManager?.getValue(`${prefix}${fieldId}`);
    return rawValue === null || rawValue === undefined ? defaultValue : rawValue;
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
  // CONSOLIDATED FIELD DEFINITIONS AND LAYOUT (No Changes)
  //==========================================================================
  const sectionRows = {
    // ... same as original ...
  };
  const orientationConfig = [73, 74, 75, 76, 77, 78];

  //==========================================================================
  // ACCESSOR METHODS (No Changes)
  //==========================================================================
  // ... getFields, getDropdownOptions, getLayout, createLayoutRow ...

  //==========================================================================
  // DUAL-ENGINE CALCULATION ORCHESTRATION
  //==========================================================================

  function calculateAll() {
    calculateTargetModel();
    calculateReferenceModel();
  }
  
  function calculateAllForMode() {
      // Calculate individual orientation rows
      orientationConfig.forEach((rowId) => {
        calculateOrientationGains(rowId.toString());
      });
      // Calculate subtotals
      calculateSubtotals();
      // Calculate utilization factors
      calculateUtilizationFactors();
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

  function calculateOrientationGains(rowId) {
    const area = getNumericValue(`d_${rowId}`);
    const orientation = getFieldValue(`e_${rowId}`);
    const shgc = getNumericValue(`f_${rowId}`);
    const winterShadingDecimal = getNumericValue(`g_${rowId}`, 0) / 100;
    const summerShadingDecimal = getNumericValue(`h_${rowId}`, 100) / 100;
    const climateZone = getNumericValue("j_19", 6.0);
    const gainFactor = calculateGainFactor(orientation, climateZone);
    const shgcNormalizationFactor = shgc / 0.5;
    const heatingGains = area * gainFactor * shgcNormalizationFactor * (1 - winterShadingDecimal);
    const coolingModifierFactor = orientation === "Skylight" ? 1.25 : 0.5;
    const coolingGains = area * gainFactor * shgcNormalizationFactor * (1 - summerShadingDecimal) * coolingModifierFactor;

    setCalculatedValue(`m_${rowId}`, gainFactor);
    setCalculatedValue(`i_${rowId}`, heatingGains);
    setCalculatedValue(`k_${rowId}`, coolingGains);
  }

  function calculateSubtotals() {
    let totalHeatingGains = 0;
    let totalCoolingGains = 0;

    orientationConfig.forEach((rowId) => {
      totalHeatingGains += getNumericValue(`i_${rowId}`);
      totalCoolingGains += getNumericValue(`k_${rowId}`);
    });

    setCalculatedValue("i_79", totalHeatingGains);
    setCalculatedValue("k_79", totalCoolingGains);

    // Update percentages
    orientationConfig.forEach((rowId) => {
        const heatingGains = getNumericValue(`i_${rowId}`);
        const coolingGains = getNumericValue(`k_${rowId}`);
        setCalculatedValue(`j_${rowId}`, totalHeatingGains > 0 ? heatingGains / totalHeatingGains : 0, "percent");
        setCalculatedValue(`l_${rowId}`, totalCoolingGains > 0 ? coolingGains / totalCoolingGains : 0, "percent");
    });
    setCalculatedValue("j_79", 1, "percent");
    setCalculatedValue("l_79", 1, "percent");
  }

  function calculateUtilizationFactors() {
    const totalSolarGains = getNumericValue("i_79");
    const internalGains = getNumericValue("i_71");
    const totalGains = totalSolarGains + internalGains;
    setCalculatedValue("e_80", totalGains);

    const utilizationMethod = getFieldValue("d_80", "NRC 40%");
    let utilizationFactor;
    switch (utilizationMethod) {
        case "NRC 0%": utilizationFactor = 0; break;
        case "NRC 40%": utilizationFactor = 0.4; break;
        case "NRC 50%": utilizationFactor = 0.5; break;
        case "NRC 60%": utilizationFactor = 0.6; break;
        default: utilizationFactor = 0.4;
    }
    setCalculatedValue("g_80", utilizationFactor, "percent");

    const usableGains = totalGains * utilizationFactor;
    setCalculatedValue("i_80", usableGains);
  }

  function calculateGainFactor(orientation, climateZone = 6) {
    // ... implementation from original file, no changes needed
  }

  //==========================================================================
  // EVENT HANDLING AND INITIALIZATION
  //==========================================================================
  function initializeEventHandlers() {
    const sectionElement = document.getElementById("envelopeRadiantGains");
    if (!sectionElement) return;

    sectionElement.addEventListener('change', (e) => {
        if (e.target.matches('select, input[type="range"]')) {
            const fieldId = e.target.getAttribute("data-field-id");
            if (fieldId) {
                setFieldValue(fieldId, e.target.value, 'user-modified');
                calculateAll();
            }
        }
    });

    sectionElement.addEventListener('blur', (e) => {
        if (e.target.matches('[contenteditable="true"]')) {
            const fieldId = e.target.getAttribute("data-field-id");
            if (fieldId) {
                setFieldValue(fieldId, e.target.textContent.trim(), 'user-modified');
                calculateAll();
            }
        }
    }, true);

    if (window.TEUI?.StateManager) {
        const sm = window.TEUI.StateManager;
        const deps = ["j_19", "i_71"];
        deps.forEach(dep => {
            sm.addListener(`target_${dep}`, calculateTargetModel);
            sm.addListener(`ref_${dep}`, calculateReferenceModel);
        });
    }
  }

  function onSectionRendered() {
    initializeEventHandlers();
    calculateAll();
  }

  //==========================================================================
  // PUBLIC API
  //==========================================================================
  return {
    getFields,
    getDropdownOptions,
    getLayout,
    onSectionRendered,
    calculateAll,
  };
})(); 