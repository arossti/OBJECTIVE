/**
 * 4011-Section09.js
 * Occupant + Internal Gains (Section 9) module for TEUI Calculator 4.011
 *
 * Refactored for dual-state architecture (Target/Reference).
 */

window.TEUI = window.TEUI || {};
window.TEUI.SectionModules = window.TEUI.SectionModules || {};
window.TEUI.sect09 = window.TEUI.sect09 || {};

window.TEUI.SectionModules.sect09 = (function () {
  const ModeManager = {
    currentMode: "target",
    switchMode(newMode) {
      if (this.currentMode === newMode) return;
      this.currentMode = newMode;
      calculateAll();
    },
  };
  window.TEUI.sect09.ModeManager = ModeManager;

  function getNumericValue(fieldId) {
    const prefix = ModeManager.currentMode === "target" ? "" : "ref_";
    const value = window.TEUI.StateManager.getValue(`${prefix}${fieldId}`);
    return window.TEUI.parseNumeric(value) || 0;
  }

  function getFieldValue(fieldId) {
    const prefix = ModeManager.currentMode === "target" ? "" : "ref_";
    return window.TEUI.StateManager.getValue(`${prefix}${fieldId}`);
  }

  function setFieldValue(fieldId, value, fieldType = "calculated") {
    const prefix = ModeManager.currentMode === "target" ? "target_" : "ref_";
    window.TEUI.StateManager.setValue(`${prefix}${fieldId}`, value, fieldType);
    if (ModeManager.currentMode === "target") {
      window.TEUI.StateManager.setValue(fieldId, value, fieldType);
    }
  }

  function setCalculatedValue(fieldId, rawValue, formatType = "number") {
    setFieldValue(fieldId, String(rawValue), "calculated");
    if (ModeManager.currentMode === 'target') {
      const formattedValue = window.TEUI.formatNumber(rawValue, formatType);
      const element = document.querySelector(`[data-field-id="${fieldId}"]`);
      if (element) {
          element.textContent = formattedValue;
      }
    }
  }

  const equipmentLoadsTable = {
    "A-Assembly": { Regular: { Elevators: 9.0, "No Elevators": 7.0 }, Efficient: { Elevators: 7.0, "No Elevators": 5.0 } },
    "B1-Detention": { Regular: { Elevators: 10.0, "No Elevators": 8.0 }, Efficient: { Elevators: 8.0, "No Elevators": 6.0 } },
    "B2-Care": { Regular: { Elevators: 25.0, "No Elevators": 20.0 }, Efficient: { Elevators: 18.0, "No Elevators": 15.0 } },
    "B3-DetentionCare": { Regular: { Elevators: 20.0, "No Elevators": 18.0 }, Efficient: { Elevators: 14.0, "No Elevators": 12.0 } },
    "C-Residential": { Regular: { Elevators: 6.0, "No Elevators": 5.0 }, Efficient: { Elevators: 4.0, "No Elevators": 3.0 } },
    "D-Business": { Regular: { Elevators: 10.0, "No Elevators": 7.0 }, Efficient: { Elevators: 7.0, "No Elevators": 5.0 } },
    "E-Mercantile": { Regular: { Elevators: 15.0, "No Elevators": 12.0 }, Efficient: { Elevators: 12.0, "No Elevators": 10.0 } },
    "F-Industrial": { Regular: { Elevators: 17.0, "No Elevators": 15.0 }, Efficient: { Elevators: 10.0, "No Elevators": 8.0 } },
    Hotels: { Regular: { "No Elevators": 10, Elevators: 12 }, Efficient: { "No Elevators": 7, Elevators: 9 } },
    Warehouses: { Regular: { "No Elevators": 4, Elevators: 6 }, Efficient: { "No Elevators": 3, Elevators: 4 } },
    Restaurants: { Regular: { "No Elevators": 18, Elevators: 20 }, Efficient: { "No Elevators": 15, Elevators: 18 } },
  };
  const defaultEquipmentLoad = 5;

  const sectionRows = {
    // Layout definition remains the same
  };

  function getFields() { /* ... */ }
  function getDropdownOptions() { /* ... */ }
  function getLayout() { /* ... */ }
  function createLayoutRow(row) { /* ... */ }

  function calculateActivityWatts(activityLevel) {
    const activityWatts = { Relaxed: 96.71, Normal: 117.23, Active: 219.8, Hyperactive: 424.95 };
    return activityWatts[activityLevel] || 117.23;
  }

  function calculateOccupiedHoursRatio(dailyHours) {
    const hours = parseInt(dailyHours, 10) || 0;
    if (hours === 0) return "0";
    return (hours * 365).toString();
  }

  function calculateHeatingCoolingSplit(isReference = false) {
    const coolingDaysField = isReference ? 'ref_m_19' : 'm_19';
    const coolingDays = window.TEUI.parseNumeric(window.TEUI.StateManager.getValue(coolingDaysField)) || 120;
    const heatingDays = 365 - coolingDays;
    return { heatingRatio: heatingDays / 365, coolingRatio: coolingDays / 365 };
  }
  
  function calculateEquipmentLoads(buildingType, efficiencyType, elevatorStatus) {
    const formattedBuildingType = formatBuildingTypeForLookup(buildingType);
    let densityValue = defaultEquipmentLoad;
    if (equipmentLoadsTable[formattedBuildingType] && equipmentLoadsTable[formattedBuildingType][efficiencyType]) {
        densityValue = equipmentLoadsTable[formattedBuildingType][efficiencyType][elevatorStatus] ?? defaultEquipmentLoad;
    }
    return densityValue;

    function formatBuildingTypeForLookup(rawType) {
      if (!rawType) return "A-Assembly";
      if (equipmentLoadsTable[rawType]) return rawType;
      const categoryMatch = rawType.match(/^([A-F][0-9]?)\s*[-–]\s*/);
      if (categoryMatch) {
        const category = categoryMatch[1].trim();
        if (category === "A") return "A-Assembly";
        if (category === "B1") return "B1-Detention";
        if (category === "B2") return "B2-Care";
        if (category === "B3") return "B3-DetentionCare";
        if (category === "C") return "C-Residential";
        if (category === "D") return "D-Business";
        if (category === "E") return "E-Mercantile";
        if (category === "F") return "F-Industrial";
      }
      return "A-Assembly";
    }
  }

  function calculateModel(isReference) {
    const get = (id) => isReference ? window.TEUI.parseNumeric(window.TEUI.StateManager.getValue(`ref_${id}`)) || 0 : getNumericValue(id);
    const getStr = (id) => isReference ? window.TEUI.StateManager.getValue(`ref_${id}`) : getFieldValue(id);
    const set = (id, val) => setFieldValue(id, val);

    const conditionedArea = get("h_15");
    const dailyHours = getStr("g_63");
    const annualHours = parseFloat(calculateOccupiedHoursRatio(dailyHours));
    const occupants = get("d_63");
    const activityLevel = getStr("d_64");
    const lightingDensity = get("d_66");
    const dhwLosses = get("d_54");
    const buildingType = getStr("d_12");
    const efficiencyType = getStr("g_67");
    const elevatorStatus = getStr("d_68");
    const referenceStandard = getStr("d_13");

    const { heatingRatio, coolingRatio } = calculateHeatingCoolingSplit(isReference);

    if (!isReference) {
        setCalculatedValue("i_63", annualHours, "raw");
      } else {
        window.TEUI.StateManager.setValue('ref_i_63', String(annualHours), 'calculated');
    }
    
    const activityWatts = calculateActivityWatts(activityLevel);
    if (!isReference) setCalculatedValue("f_64", activityWatts, "number-2dp-comma"); else window.TEUI.StateManager.setValue('ref_f_64', String(activityWatts), 'calculated');

    const occupantEnergy = (occupants * activityWatts * annualHours) / 1000;
    set("h_64", occupantEnergy);
    set("i_64", occupantEnergy * heatingRatio);
    set("k_64", occupantEnergy * coolingRatio);

    const isPassivhaus = referenceStandard && referenceStandard.includes("PH");
    const isResidentialOrCare = buildingType === "C-Residential" || (buildingType && (buildingType.includes("Care") || buildingType.includes("Detention")));
    const plugLoadDensity = isPassivhaus ? 2.1 : (isResidentialOrCare ? 5 : 7);
    if (!isReference) setCalculatedValue("d_65", plugLoadDensity); else window.TEUI.StateManager.setValue('ref_d_65', String(plugLoadDensity), 'calculated');

    const plugEnergy = (plugLoadDensity * conditionedArea * annualHours) / 1000;
    set("h_65", plugEnergy);
    set("i_65", plugEnergy * heatingRatio);
    set("k_65", plugEnergy * coolingRatio);

    const lightingEnergy = (lightingDensity * conditionedArea * annualHours) / 1000;
    set("h_66", lightingEnergy);
    set("i_66", lightingEnergy * heatingRatio);
    set("k_66", lightingEnergy * coolingRatio);

    const equipmentDensity = calculateEquipmentLoads(buildingType, efficiencyType, elevatorStatus);
    if (!isReference) setCalculatedValue("d_67", equipmentDensity); else window.TEUI.StateManager.setValue('ref_d_67', String(equipmentDensity), 'calculated');

    const equipmentEnergy = (equipmentDensity * conditionedArea * annualHours) / 1000;
    set("h_67", equipmentEnergy);
    set("i_67", equipmentEnergy * heatingRatio);
    set("k_67", equipmentEnergy * coolingRatio);

    set("h_69", dhwLosses);
    set("i_69", dhwLosses * heatingRatio);
    set("k_69", dhwLosses * coolingRatio);
    
    const subtotalEnergy = plugEnergy + lightingEnergy + equipmentEnergy;
    set("h_70", subtotalEnergy);
    const subtotalHeating = (plugEnergy * heatingRatio) + (lightingEnergy * heatingRatio) + (equipmentEnergy * heatingRatio);
    set("i_70", subtotalHeating);
    const subtotalCooling = (plugEnergy * coolingRatio) + (lightingEnergy * coolingRatio) + (equipmentEnergy * coolingRatio);
    set("k_70", subtotalCooling);
    
    const totalEnergy = subtotalEnergy + occupantEnergy + dhwLosses;
    set("h_71", totalEnergy);
    const totalHeating = subtotalHeating + (occupantEnergy * heatingRatio) + (dhwLosses * heatingRatio);
    set("i_71", totalHeating);
    const totalCooling = subtotalCooling + (occupantEnergy * coolingRatio) + (dhwLosses * coolingRatio);
    set("k_71", totalCooling);

    if (!isReference) {
        updatePercentages(totalHeating, totalCooling);
        updateAllReferenceIndicators();
    }
  }

  function calculateAll() {
    calculateModel(false); // Target
    calculateModel(true); // Reference
  }

  function initializeEventHandlers() { /* ... */ }
  function addStateManagerListeners() { /* ... */ }
  function registerWithStateManager() { /* ... */ }
  function onSectionRendered() { /* ... */ }
  function registerWithSectionIntegrator() { /* ... */ }
  // ... other functions
  
  return { /* ... */ };
})();
// ... event listener
