/**
 * 4011-Section07.js
 * Water Use (Section 7) module for TEUI Calculator 4.011
 *
 * REFACTORED FOR DUAL-STATE ISOLATION.
 */

window.TEUI = window.TEUI || {};
window.TEUI.SectionModules = window.TEUI.SectionModules || {};

window.TEUI.SectionModules.sect07 = (function () {
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
  window.TEUI.sect07.ModeManager = ModeManager;

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
  
  function setFieldValue(fieldId, value, fieldType = "calculated") {
    const modePrefix = ModeManager.currentMode === "target" ? "target_" : "ref_";
    const prefixedFieldId = `${modePrefix}${fieldId}`;
    
    if (window.TEUI?.StateManager) {
        const valueToStore = value.toString();
        window.TEUI.StateManager.setValue(prefixedFieldId, valueToStore, fieldType);
    }

    if (ModeManager.currentMode === "target") {
        const formatType = getFieldFormat(fieldId);
        const formattedValue = window.TEUI?.formatNumber?.(value, formatType) ?? value.toString();
        const element = document.querySelector(`[data-field-id="${fieldId}"]`);
        if (element) {
            element.textContent = formattedValue;
            element.classList.toggle("negative-value", Number(value) < 0);
        }
    }
  }
  
  function getFieldFormat(fieldId) {
    const formatMap = {
      h_49: "number-2dp", i_49: "integer-comma", h_50: "number-2dp",
      i_50: "integer-comma", j_50: "number-2dp-comma", n_49: "percent-0dp",
      n_50: "percent-0dp", e_52: "number-2dp", j_51: "number-2dp-comma",
      e_53: "number-2dp-comma", j_52: "number-2dp-comma", j_53: "number-2dp-comma",
      e_51: "number-2dp-comma", k_51: "number-2dp-comma", d_54: "number-2dp-comma",
      j_54: "number-2dp-comma", k_54: "number-2dp-comma", k_49: "number-2dp-comma",
    };
    return formatMap[fieldId] || "number-2dp-comma";
  }

  //==========================================================================
  // CONSOLIDATED FIELD DEFINITIONS AND LAYOUT (No Changes)
  //==========================================================================
  const sectionRows = {
    // ... same as original ...
  };

  //==========================================================================
  // ACCESSOR METHODS (No Changes)
  //==========================================================================
  // ... getFields, getDropdownOptions, getLayout, createLayoutRow ...

  //==========================================================================
  // DUAL-ENGINE CALCULATION ORCHESTRATION
  //==========================================================================

  function calculateAll() {
    calculateReferenceModel();
    calculateTargetModel();
  }

  function calculateAllForMode() {
    // Water Use Calculations
    const method = getFieldValue("d_49", "User Defined");
    const occupants = getNumericValue("d_63");
    const userDefinedValue = getNumericValue("e_49", 40);
    const engineerValue = getNumericValue("e_50", 10000);

    let litersPerPersonDay = 0;
    let hotWaterEnergyDemand = 0;

    switch (method) {
      case "User Defined": litersPerPersonDay = userDefinedValue; break;
      case "By Engineer": hotWaterEnergyDemand = engineerValue; break;
      case "PHPP Method": litersPerPersonDay = 62.5; break;
      case "NBC Method": litersPerPersonDay = 220; break;
      case "OBC Method": litersPerPersonDay = 275; break;
      case "Luxury": litersPerPersonDay = 400; break;
      default: litersPerPersonDay = 40;
    }

    if (method !== "By Engineer") {
        hotWaterEnergyDemand = litersPerPersonDay * 0.4 * occupants * 0.0523 * 365;
    } else {
        const waterHeatFactor = 0.0524;
        litersPerPersonDay = occupants > 0 ? engineerValue / (365 * waterHeatFactor * occupants * 0.4) : 0;
    }
    
    setFieldValue("h_49", litersPerPersonDay);
    setFieldValue("i_49", litersPerPersonDay * occupants * 365);
    setFieldValue("h_50", litersPerPersonDay * 0.4);
    setFieldValue("i_50", litersPerPersonDay * 0.4 * occupants * 365);
    setFieldValue("j_50", hotWaterEnergyDemand);

    // Heating System Calculations
    const systemType = getFieldValue("d_51", "Heatpump");
    const efficiencyInput = getNumericValue("d_52", 300);
    const afue = getNumericValue("k_52", 0.9);
    const recoveryPercent = getNumericValue("d_53", 0) / 100;
    
    const efficiency = efficiencyInput / 100;
    setFieldValue("e_52", efficiency);

    const netThermalDemand = (systemType === "Heatpump" || systemType === "Electric") ? hotWaterEnergyDemand / efficiency : hotWaterEnergyDemand / afue;
    setFieldValue("j_51", netThermalDemand);

    const energyRecovered = netThermalDemand * recoveryPercent;
    setFieldValue("e_53", energyRecovered);

    const netDemandAfterRecovery = netThermalDemand - energyRecovered;
    setFieldValue("j_52", netDemandAfterRecovery);
    setFieldValue("j_53", netDemandAfterRecovery);

    const netElectricalDemand = (systemType === "Heatpump" || systemType === "Electric") ? netDemandAfterRecovery : 0;
    setFieldValue("k_51", netElectricalDemand);

    // Emissions and Losses Calculations
    let gasVolume = 0;
    let oilVolume = 0;
    if (systemType === "Gas") {
        const conversionFactor = 10.3321;
        gasVolume = afue > 0 ? netDemandAfterRecovery / (conversionFactor * afue) : 0;
    } else if (systemType === "Oil") {
        const conversionFactor = 10.18;
        oilVolume = afue > 0 ? netDemandAfterRecovery / (conversionFactor * afue) : 0;
    }
    setFieldValue("e_51", gasVolume);
    setFieldValue("k_54", oilVolume);

    const oilEmissionsFactor = getNumericValue("l_30", 2753);
    const gasEmissionsFactor = getNumericValue("l_28", 1921);
    const dhwEmissions = (systemType === "Oil" ? oilVolume * oilEmissionsFactor : (systemType === "Gas" ? gasVolume * gasEmissionsFactor : 0)) / 1000;
    setFieldValue("k_49", dhwEmissions);

    const exhaustLosses = (systemType === "Gas" || systemType === "Oil") ? netDemandAfterRecovery * (1 - afue) : 0;
    setFieldValue("j_54", exhaustLosses);
    
    const systemLosses = (efficiency <= 1) ? hotWaterEnergyDemand * (method === "PHPP Method" ? 0.25 : 0.1) : 0;
    setFieldValue("d_54", systemLosses);
  }
  
  function calculateReferenceModel() {
    const originalMode = ModeManager.currentMode;
    ModeManager.switchMode("reference");
    try {
        calculateAllForMode();
    } finally {
      ModeManager.switchMode(originalMode);
    }
  }

  function calculateTargetModel() {
    const originalMode = ModeManager.currentMode;
    ModeManager.switchMode("target");
    try {
        calculateAllForMode();
    } finally {
      ModeManager.switchMode(originalMode);
    }
  }

  //==========================================================================
  // EVENT HANDLING AND INITIALIZATION
  //==========================================================================
  function initializeEventHandlers() {
    const sectionElement = document.getElementById("waterUse");
    if (!sectionElement) return;

    // Delegate events for better performance
    sectionElement.addEventListener('change', (e) => {
        if(e.target.matches('select[data-field-id]')) {
            const fieldId = e.target.getAttribute("data-field-id");
            setFieldValue(fieldId, e.target.value, 'user-modified');
            calculateAll();
        } else if (e.target.matches('input[type="range"]')) {
            const fieldId = e.target.getAttribute("data-field-id");
            setFieldValue(fieldId, e.target.value, 'user-modified');
            calculateAll();
        }
    });

    sectionElement.addEventListener('blur', (e) => {
        if(e.target.matches('[contenteditable="true"]')) {
            const fieldId = e.target.getAttribute("data-field-id");
            setFieldValue(fieldId, e.target.textContent.trim(), 'user-modified');
            calculateAll();
        }
    }, true); // Use capture to handle blur events reliably

    if (window.TEUI?.StateManager) {
        const sm = window.TEUI.StateManager;
        const deps = ["d_63", "l_30", "l_28"];
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