/**
 * 4011-Section09.js
 * Occupant + Internal Gains (Section 9) module for TEUI Calculator 4.011
 *
 * Refactored to use the standardized dual-engine architecture following S07 pattern.
 * Preserves all complex scheduling functions and UI management.
 */

window.TEUI = window.TEUI || {};
window.TEUI.SectionModules = window.TEUI.SectionModules || {};
window.TEUI.sect09 = window.TEUI.sect09 || {};

// Global variable to track initialization state
window.TEUI.sect09.initialized = false;
window.TEUI.sect09.userInteracted = false;

window.TEUI.SectionModules.sect09 = (function () {
  //==========================================================================
  // DUAL-STATE MODE MANAGEMENT (Following S07 Pattern)
  //==========================================================================
  const ModeManager = {
    currentMode: "target",
    switchMode: function (mode) {
      if (mode !== "target" && mode !== "reference") return;
      this.currentMode = mode;
    },
  };
  window.TEUI.sect09.ModeManager = ModeManager;

  //==========================================================================
  // HELPER FUNCTIONS (S07 Pattern - Mode-Aware with Fallbacks)
  //==========================================================================
  function getNumericValue(fieldId, defaultValue = 0) {
    const prefix = ModeManager.currentMode === "target" ? "target_" : "ref_";
    let rawValue = window.TEUI?.StateManager?.getValue(`${prefix}${fieldId}`);
    if (rawValue === null || rawValue === undefined) {
      rawValue = window.TEUI?.StateManager?.getValue(fieldId);
    }
    return window.TEUI?.parseNumeric?.(rawValue, defaultValue) ?? defaultValue;
  }
  
  function getFieldValue(fieldId, defaultValue = "") {
    const prefix = ModeManager.currentMode === "target" ? "target_" : "ref_";
    let rawValue = window.TEUI?.StateManager?.getValue(`${prefix}${fieldId}`);
    if (rawValue === null || rawValue === undefined) {
      rawValue = window.TEUI?.StateManager?.getValue(fieldId);
    }
    return rawValue === null || rawValue === undefined ? defaultValue : rawValue;
  }

  function setFieldValue(fieldId, value, fieldType = "calculated") {
    const modePrefix = ModeManager.currentMode === "target" ? "target_" : "ref_";
    const prefixedFieldId = `${modePrefix}${fieldId}`;

    // Always store with prefix for dual-state isolation
    if (window.TEUI?.StateManager) {
      window.TEUI.StateManager.setValue(prefixedFieldId, value.toString(), fieldType);
    }

    // CRITICAL: Only update global state in target mode
    if (ModeManager.currentMode === "target") {
      if (window.TEUI?.StateManager) {
        window.TEUI.StateManager.setValue(fieldId, value.toString(), fieldType);
      }
      // Update DOM element for target mode only
      const formatType = getFieldFormat(fieldId);
      const formattedValue = window.TEUI?.formatNumber?.(value, formatType) ?? value.toString();
      const element = document.querySelector(`[data-field-id="${fieldId}"]`);
      if (element) {
        element.textContent = formattedValue;
      }
    }
  }

  function setCalculatedValue(fieldId, rawValue, formatType = "number") {
    // Use the improved setFieldValue that handles mode awareness
    setFieldValue(fieldId, rawValue, "calculated");
  }

  function getFieldFormat(fieldId) {
    // Improved formatting for S09 fields
    if (fieldId === "i_63") return "raw"; // Annual hours, no formatting
    if (fieldId.startsWith("f_")) return "number-2dp-comma"; // Watts per person
    if (fieldId.startsWith("h_") || fieldId.startsWith("i_") || fieldId.startsWith("k_")) {
      return "number-2dp-comma"; // Energy values
    }
    if (fieldId.startsWith("j_") || fieldId.startsWith("l_")) return "percent-auto"; // Percentages
    if (fieldId.startsWith("m_")) return "percent-auto"; // Reference percentages
    if (fieldId.startsWith("n_")) return "raw"; // Checkmarks
    if (fieldId.startsWith("d_") && (fieldId === "d_65" || fieldId === "d_67")) return "number-2dp"; // Densities
    return "number";
  }

  //==========================================================================
  // EQUIPMENT LOADS LOOKUP TABLE (Unchanged)
  //==========================================================================
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

  //==========================================================================
  // CONSOLIDATED FIELD DEFINITIONS AND LAYOUT (Unchanged)
  //==========================================================================
  const sectionRows = {
    header: { id: "09-ID", rowId: "09-ID", label: "Internal Gains Units", cells: { c: { content: "C", classes: ["section-subheader"] }, d: { content: "Unit Qty", classes: ["section-subheader"] }, e: { content: "E", classes: ["section-subheader"] }, f: { content: "F", classes: ["section-subheader"] }, g: { content: "G", classes: ["section-subheader"] }, h: { content: "Annual\nkWh/yr", classes: ["section-subheader"] }, i: { content: "Htg Gain\nkWh/yr", classes: ["section-subheader", "text-right"] }, j: { content: "Htg Gain\n%", classes: ["section-subheader"] }, k: { content: "Cooling Gain\nkWh/yr", classes: ["section-subheader"] }, l: { content: "Htg Gain\n%", classes: ["section-subheader"] }, m: { content: "Reference", classes: ["section-subheader"] }, n: { content: "N", classes: ["section-subheader"] } } },
    63: { id: "G.1.1", rowId: "G.1.1", label: "Occupants per Building (declared)", cells: { c: { label: "Occupants per Building (declared)" }, d: { fieldId: "d_63", type: "editable", value: "126", section: "occupantInternalGains", classes: ["user-input"] }, e: { content: "G.1.3", classes: ["label-prefix"] }, f: { content: "Occupied Hrs/Day", classes: ["label-main"] }, g: { fieldId: "g_63", type: "dropdown", dropdownId: "dd_g_63", value: "12", section: "occupantInternalGains", options: [{ value: "0", name: "0" }, { value: "8", name: "8" }, { value: "10", name: "10" }, { value: "12", name: "12" }, { value: "16", name: "16" }, { value: "24", name: "24" }] }, i: { fieldId: "i_63", type: "calculated", value: "4380", section: "occupantInternalGains", dependencies: ["g_63"], classes: ["text-right"] }, j: { content: "/ 8760", classes: ["text-left"] } } },
    64: { id: "G.1.2", rowId: "G.1.2", label: "Occupant Activity", cells: { c: { label: "Occupant Activity" }, d: { fieldId: "d_64", type: "dropdown", dropdownId: "dd_d_64", value: "Normal", section: "occupantInternalGains", options: [{ value: "Relaxed", name: "Relaxed" }, { value: "Normal", name: "Normal" }, { value: "Active", name: "Active" }, { value: "Hyperactive", name: "Hyperactive" }] }, e: { content: "G.1.4", classes: ["label-prefix"] }, f: { content: "Watts/pp (S+L)", classes: ["label-main"] }, g: { fieldId: "f_64", type: "calculated", value: "117", section: "occupantInternalGains", dependencies: ["d_64"] }, h: { fieldId: "h_64", type: "calculated", value: "64,696.02", section: "occupantInternalGains", dependencies: ["f_64", "d_63", "g_63"] }, i: { fieldId: "i_64", type: "calculated", value: "43,426.10", section: "occupantInternalGains", dependencies: ["h_64"] }, j: { fieldId: "j_64", type: "calculated", value: "43.39%", section: "occupantInternalGains", dependencies: ["i_64", "i_71"] }, k: { fieldId: "k_64", type: "calculated", value: "21,269.93", section: "occupantInternalGains", dependencies: ["h_64"] }, l: { fieldId: "l_64", type: "calculated", value: "43.39%", section: "occupantInternalGains", dependencies: ["k_64", "k_71"] } } },
    65: { id: "P.1", rowId: "P.1", label: "Plug Loads", cells: { c: { label: "Plug Loads" }, d: { fieldId: "d_65", type: "calculated", value: "7", section: "occupantInternalGains" }, h: { fieldId: "h_65", type: "calculated", value: "43,757.95", section: "occupantInternalGains", dependencies: ["d_65", "h_15"] }, i: { fieldId: "i_65", type: "calculated", value: "29,371.78", section: "occupantInternalGains", dependencies: ["h_65"] }, j: { fieldId: "j_65", type: "calculated", value: "29.35%", section: "occupantInternalGains", dependencies: ["i_65", "i_71"] }, k: { fieldId: "k_65", type: "calculated", value: "14,386.18", section: "occupantInternalGains", dependencies: ["h_65"] }, l: { fieldId: "l_65", type: "calculated", value: "29.35%", section: "occupantInternalGains", dependencies: ["k_65", "k_71"] }, m: { fieldId: "m_65", type: "calculated", value: "100%", section: "occupantInternalGains" }, n: { fieldId: "n_65", type: "calculated", value: "✓", section: "occupantInternalGains", classes: ["checkmark"] } } },
    66: { id: "P.2", rowId: "P.2", label: "Lighting Loads", cells: { c: { label: "Lighting Loads" }, d: { fieldId: "d_66", type: "editable", value: "1.5", section: "occupantInternalGains", classes: ["user-input"] }, h: { fieldId: "h_66", type: "calculated", value: "9,376.70", section: "occupantInternalGains", dependencies: ["d_66", "h_15"] }, i: { fieldId: "i_66", type: "calculated", value: "6,293.95", section: "occupantInternalGains", dependencies: ["h_66"] }, j: { fieldId: "j_66", type: "calculated", value: "6.29%", section: "occupantInternalGains", dependencies: ["i_66", "i_71"] }, k: { fieldId: "k_66", type: "calculated", value: "3,082.75", section: "occupantInternalGains", dependencies: ["h_66"] }, l: { fieldId: "l_66", type: "calculated", value: "6.29%", section: "occupantInternalGains", dependencies: ["k_66", "k_71"] }, m: { fieldId: "m_66", type: "calculated", value: "133%", section: "occupantInternalGains" }, n: { fieldId: "n_66", type: "calculated", value: "✓", section: "occupantInternalGains", classes: ["checkmark"] } } },
    67: { id: "P.3.1", rowId: "P.3.1", label: "Equipment Loads", cells: { c: { label: "Equipment Loads" }, d: { fieldId: "d_67", type: "calculated", value: "5.00", section: "occupantInternalGains" }, e: { content: "P.3.3", classes: ["label-prefix"] }, f: { content: "Equipment Spec", classes: ["label-main"] }, g: { fieldId: "g_67", type: "dropdown", dropdownId: "dd_g_67", value: "Efficient", section: "occupantInternalGains", options: [{ value: "Regular", name: "Regular" }, { value: "Efficient", name: "Efficient" }] }, h: { fieldId: "h_67", type: "calculated", value: "31,255.68", section: "occupantInternalGains", dependencies: ["d_67", "g_67", "h_15"] }, i: { fieldId: "i_67", type: "calculated", value: "20,979.84", section: "occupantInternalGains", dependencies: ["h_67"] }, j: { fieldId: "j_67", type: "calculated", value: "20.96%", section: "occupantInternalGains", dependencies: ["i_67", "i_71"] }, k: { fieldId: "k_67", type: "calculated", value: "10,275.84", section: "occupantInternalGains", dependencies: ["h_67"] }, l: { fieldId: "l_67", type: "calculated", value: "20.96%", section: "occupantInternalGains", dependencies: ["k_67", "k_71"] }, m: { fieldId: "m_67", type: "calculated", value: "100%", section: "occupantInternalGains" }, n: { fieldId: "n_67", type: "calculated", value: "✓", section: "occupantInternalGains", classes: ["checkmark"] } } },
    68: { id: "P.3.2", rowId: "P.3.2", label: "Elevator Loads (W/m² → Eqpt Gains)", cells: { c: { label: "Elevator Loads (W/m² → Eqpt Gains)" }, d: { fieldId: "d_68", type: "dropdown", dropdownId: "dd_d_68", value: "No Elevators", section: "occupantInternalGains", options: [{ value: "Elevators", name: "Elevators" }, { value: "No Elevators", name: "No Elevators" }] } } },
    69: { id: "W.1.3", rowId: "W.1.3", label: "DHW System Losses", cells: { c: { label: "DHW System Losses" }, h: { fieldId: "h_69", type: "calculated", value: "0.00", section: "occupantInternalGains", dependencies: ["d_54"] }, i: { fieldId: "i_69", type: "calculated", value: "0.00", section: "occupantInternalGains", dependencies: ["h_69"] }, j: { fieldId: "j_69", type: "calculated", value: "0.00%", section: "occupantInternalGains", dependencies: ["i_69", "i_71"] }, k: { fieldId: "k_69", type: "calculated", value: "0.00", section: "occupantInternalGains", dependencies: ["h_69"] }, l: { fieldId: "l_69", type: "calculated", value: "0.00%", section: "occupantInternalGains", dependencies: ["k_69", "k_71"] } } },
    70: { id: "G.2", rowId: "G.2", label: "Plug/Light/Eqpt. Subtotals", cells: { c: { label: "Plug/Light/Eqpt. Subtotals" }, h: { fieldId: "h_70", type: "calculated", value: "84,390.34", section: "occupantInternalGains", dependencies: ["h_65", "h_66", "h_67", "h_69"] }, i: { fieldId: "i_70", type: "calculated", value: "56,645.57", section: "occupantInternalGains", dependencies: ["i_65", "i_66", "i_67", "i_69"] }, k: { fieldId: "k_70", type: "calculated", value: "27,744.77", section: "occupantInternalGains", dependencies: ["k_65", "k_66", "k_67", "k_69"] } } },
    71: { id: "Totals", rowId: "Totals", label: "Internal Gains Totals", cells: { c: { label: "Internal Gains Totals" }, h: { fieldId: "h_71", type: "calculated", value: "149,086.36", section: "occupantInternalGains", dependencies: ["h_64", "h_70"] }, i: { fieldId: "i_71", type: "calculated", value: "100,071.67", section: "occupantInternalGains", dependencies: ["i_64", "i_70"] }, j: { fieldId: "j_71", type: "calculated", value: "100%", section: "occupantInternalGains" }, k: { fieldId: "k_71", type: "calculated", value: "49,014.69", section: "occupantInternalGains", dependencies: ["k_64", "k_70"] }, l: { fieldId: "l_71", type: "calculated", value: "100%", section: "occupantInternalGains" } } },
  };

  //==========================================================================
  // ACCESSOR METHODS (Unchanged)
  //==========================================================================
  function getFields(){const fields={};Object.entries(sectionRows).forEach(([rowKey,row])=>{if(rowKey==="header")return;if(!row.cells)return;Object.entries(row.cells).forEach(([colKey,cell])=>{if(cell.fieldId&&cell.type){fields[cell.fieldId]={type:cell.type,label:cell.label||row.label,defaultValue:cell.value||"",section:cell.section||"occupantInternalGains"};if(cell.dropdownId)fields[cell.fieldId].dropdownId=cell.dropdownId;if(cell.options)fields[cell.fieldId].options=cell.options;if(cell.getOptions)fields[cell.fieldId].getOptions=cell.getOptions;if(cell.dependencies)fields[cell.fieldId].dependencies=cell.dependencies;if(cell.min!==undefined)fields[cell.fieldId].min=cell.min;if(cell.max!==undefined)fields[cell.fieldId].max=cell.max;if(cell.step!==undefined)fields[cell.fieldId].step=cell.step}})});return fields}
  function getDropdownOptions(){const options={};Object.values(sectionRows).forEach(row=>{if(!row.cells)return;Object.values(row.cells).forEach(cell=>{if(cell.dropdownId&&cell.options){options[cell.dropdownId]=cell.options}})});return options}
  function getLayout(){const layoutRows=[];if(sectionRows["header"]){layoutRows.push(createLayoutRow(sectionRows["header"]))}Object.entries(sectionRows).forEach(([key,row])=>{if(key!=="header"){layoutRows.push(createLayoutRow(row))}});return{rows:layoutRows}}
  function createLayoutRow(row){const rowDef={id:row.id,cells:[{},{}]};const columns=["c","d","e","f","g","h","i","j","k","l","m","n"];columns.forEach(col=>{if(row.cells&&row.cells[col]){const cell={...row.cells[col]};if(col==="c"){if(cell.type==="label"&&cell.content&&!cell.label){cell.label=cell.content;delete cell.type;delete cell.content}else if(!cell.label&&!cell.content&&row.label){cell.label=row.label}}delete cell.getOptions;delete cell.section;delete cell.dependencies;rowDef.cells.push(cell)}else{if(col==="c"&&!row.cells?.c&&row.label){rowDef.cells.push({label:row.label})}else{rowDef.cells.push({})}}});return rowDef}

  //==========================================================================
  // INDIVIDUAL CALCULATION FUNCTIONS (Preserved from Working S09)
  //==========================================================================

  /**
   * Calculate Occupant Activity watts based on activity level
   */
  function calculateActivityWatts(activityLevel) {
    // Use precise values derived from SCHEDULES-3037.csv
    const activityWatts = {
      Relaxed: 96.71,
      Normal: 117.23,
      Active: 219.8,
      Hyperactive: 424.95,
    };
    return activityWatts[activityLevel] || 117.23;
  }

  /**
   * Calculate Occupied Hours based on daily hours
   */
  function calculateOccupiedHoursRatio(dailyHours) {
    const hours = parseInt(dailyHours, 10) || 0;
    if (hours === 0) return "0";
    return (hours * 365).toString();
  }

  /**
   * Calculate the heating/cooling split based on cooling days from Section 03
   */
  function calculateHeatingCoolingSplit() {
    const coolingDays = getNumericValue("m_19") || 120;
    const heatingDays = 365 - coolingDays;
    return {
      heatingRatio: heatingDays / 365,
      coolingRatio: coolingDays / 365,
    };
  }

  /**
   * Calculate Annual kWh/yr for occupants
   */
  function calculateOccupantEnergy() {
    const occupants = getNumericValue("d_63");
    const dailyHours = getNumericValue("g_63");
    const activityLevel = getFieldValue("d_64") || "Normal";
    
    const activityWatts = calculateActivityWatts(activityLevel);
    setFieldValue("f_64", activityWatts);
    
    const annualHours = calculateOccupiedHoursRatio(dailyHours);
    setFieldValue("i_63", annualHours);
    
    const energy = (occupants * activityWatts * parseFloat(annualHours)) / 1000;
    const { heatingRatio, coolingRatio } = calculateHeatingCoolingSplit();

    setFieldValue("h_64", energy);
    setFieldValue("i_64", energy * heatingRatio);
    setFieldValue("k_64", energy * coolingRatio);

    return energy;
  }

  /**
   * Calculate Annual kWh/yr for plug loads
   */
  function calculatePlugLoads() {
    const referenceStandard = getFieldValue("d_13") || "";
    const buildingType = getFieldValue("d_12") || "";

    let plugLoadDensity;
    const isPassivhaus = referenceStandard.includes("PH");
    const isResidentialOrCare =
      buildingType === "C - Residential" ||
      buildingType === "B1 - Detention" ||
      buildingType === "B2 - Care and Treatment" ||
      buildingType === "B3 - Detention Care & Treatment";

    if (isPassivhaus) {
      plugLoadDensity = 2.1;
    } else if (isResidentialOrCare) {
      plugLoadDensity = 5;
    } else {
      plugLoadDensity = 7;
    }

    setFieldValue("d_65", plugLoadDensity);

    const conditionedArea = getNumericValue("h_15");
    const occupiedHours = getNumericValue("i_63");
    const energy = (plugLoadDensity * conditionedArea * occupiedHours) / 1000;

    const { heatingRatio, coolingRatio } = calculateHeatingCoolingSplit();

    setFieldValue("h_65", energy);
    setFieldValue("i_65", energy * heatingRatio);
    setFieldValue("k_65", energy * coolingRatio);

    // Calculate percentage against reference value
    const referencePlugLoad = isResidentialOrCare ? 5 : 7;
    const percentOfReference = (plugLoadDensity / referencePlugLoad) * 100;
    setFieldValue("m_65", percentOfReference);

    // Set checkmark or X based on whether it's below reference
    if (plugLoadDensity <= referencePlugLoad) {
      setFieldValue("n_65", "✓");
      setElementClass("n_65", "checkmark");
    } else {
      setFieldValue("n_65", "✗");
      setElementClass("n_65", "warning");
    }

    return energy;
  }

  /**
   * Calculate Annual kWh/yr for lighting loads
   */
  function calculateLightingLoads() {
    const lightingDensity = getNumericValue("d_66");
    const conditionedArea = getNumericValue("h_15");
    const occupiedHours = getNumericValue("i_63");
    const energy = (lightingDensity * conditionedArea * occupiedHours) / 1000;

    const { heatingRatio, coolingRatio } = calculateHeatingCoolingSplit();

    setFieldValue("h_66", energy);
    setFieldValue("i_66", energy * heatingRatio);
    setFieldValue("k_66", energy * coolingRatio);

    // Calculate percentage against reference value
    const referenceLightingLoad = 1.13;
    const percentOfReference = (lightingDensity / referenceLightingLoad) * 100;
    setFieldValue("m_66", percentOfReference);

    // Set checkmark or X based on standard comparison
    if (percentOfReference <= 133) {
      setFieldValue("n_66", "✓");
      setElementClass("n_66", "checkmark");
    } else {
      setFieldValue("n_66", "✗");
      setElementClass("n_66", "warning");
    }

    return energy;
  }

  /**
   * Calculate equipment loads with lookup table
   */
  function calculateEquipmentLoads() {
    const buildingType = getFieldValue("d_12") || "A-Assembly";
    const efficiencyType = getFieldValue("g_67") || "Efficient";
    const elevatorStatus = getFieldValue("d_68") || "No Elevators";

    // Format building type for lookup
    const formattedBuildingType = formatBuildingTypeForLookup(buildingType);
    
    let densityValue = defaultEquipmentLoad;
    if (equipmentLoadsTable[formattedBuildingType] && 
        equipmentLoadsTable[formattedBuildingType][efficiencyType]) {
      densityValue = equipmentLoadsTable[formattedBuildingType][efficiencyType][elevatorStatus] ?? defaultEquipmentLoad;
    }

    setFieldValue("d_67", densityValue);

    const conditionedArea = getNumericValue("h_15");
    const occupiedHours = getNumericValue("i_63");
    const energy = (densityValue * conditionedArea * occupiedHours) / 1000;

    const { heatingRatio, coolingRatio } = calculateHeatingCoolingSplit();

    setFieldValue("h_67", energy);
    setFieldValue("i_67", energy * heatingRatio);
    setFieldValue("k_67", energy * coolingRatio);

    // Equipment loads are already based on lookup tables with occupancy-specific values
    setFieldValue("m_67", 100);
    setFieldValue("n_67", "✓");
    setElementClass("n_67", "checkmark");

    return energy;

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

  /**
   * Calculate subtotals and totals
   */
  function calculateTotals() {
    // Get DHW losses and split using dynamic ratio
    const dhwLosses = getNumericValue("d_54");
    setFieldValue("h_69", dhwLosses);
    
    const { heatingRatio, coolingRatio } = calculateHeatingCoolingSplit();
    setFieldValue("i_69", dhwLosses * heatingRatio);
    setFieldValue("k_69", dhwLosses * coolingRatio);

    // Energy values
    const plugEnergy = getNumericValue("h_65");
    const lightingEnergy = getNumericValue("h_66");
    const equipmentEnergy = getNumericValue("h_67");
    const occupantEnergy = getNumericValue("h_64");

    // Heating values
    const plugHeating = getNumericValue("i_65");
    const lightingHeating = getNumericValue("i_66");
    const equipmentHeating = getNumericValue("i_67");
    const occupantHeating = getNumericValue("i_64");
    const dhwHeating = getNumericValue("i_69");

    // Cooling values
    const plugCooling = getNumericValue("k_65");
    const lightingCooling = getNumericValue("k_66");
    const equipmentCooling = getNumericValue("k_67");
    const occupantCooling = getNumericValue("k_64");
    const dhwCooling = getNumericValue("k_69");

    // Calculate subtotals (excluding DHW losses and occupant energy)
    const subtotalEnergy = plugEnergy + lightingEnergy + equipmentEnergy;
    const subtotalHeating = plugHeating + lightingHeating + equipmentHeating;
    const subtotalCooling = plugCooling + lightingCooling + equipmentCooling;

    setFieldValue("h_70", subtotalEnergy);
    setFieldValue("i_70", subtotalHeating);
    setFieldValue("k_70", subtotalCooling);

    // Calculate grand totals (including DHW losses and occupant energy)
    const totalEnergy = subtotalEnergy + occupantEnergy + dhwLosses;
    const totalHeating = subtotalHeating + occupantHeating + dhwHeating;
    const totalCooling = subtotalCooling + occupantCooling + dhwCooling;

    // CRITICAL: These are KEY OUTPUTS that other sections depend on
    // They must be properly stored and exposed globally when in target mode
    setFieldValue("h_71", totalEnergy);
    setFieldValue("i_71", totalHeating);
    setFieldValue("k_71", totalCooling);

    // CRITICAL OUTPUT FIELD MANAGEMENT: Ensure global availability for cross-section dependencies
    // S09 outputs are critical for S15 TEUI calculations and other dependencies
    if (ModeManager.currentMode === "target") {
      // These global updates are essential for cross-section integration
      if (window.TEUI?.StateManager) {
        window.TEUI.StateManager.setValue("h_71", totalEnergy.toString(), "calculated");
        window.TEUI.StateManager.setValue("i_71", totalHeating.toString(), "calculated");
        window.TEUI.StateManager.setValue("k_71", totalCooling.toString(), "calculated");
      }
    }

    // Update percentages
    updatePercentages(totalHeating, totalCooling);
  }

  /**
   * Updates the percentage columns (J and L) based on calculated totals.
   */
  function updatePercentages(totalHeating, totalCooling) {
    const setPercentage = (valueFieldId, percentageFieldId, total) => {
      const value = getNumericValue(valueFieldId);
      const percentageDecimal = total > 0 ? value / total : 0;
      setFieldValue(percentageFieldId, percentageDecimal);
    };

    setPercentage("i_64", "j_64", totalHeating);
    setPercentage("k_64", "l_64", totalCooling);
    setPercentage("i_65", "j_65", totalHeating);
    setPercentage("k_65", "l_65", totalCooling);
    setPercentage("i_66", "j_66", totalHeating);
    setPercentage("k_66", "l_66", totalCooling);
    setPercentage("i_67", "j_67", totalHeating);
    setPercentage("k_67", "l_67", totalCooling);
    setPercentage("i_69", "j_69", totalHeating);
    setPercentage("k_69", "l_69", totalCooling);

    setFieldValue("j_71", 1.0);
    setFieldValue("l_71", 1.0);
  }

  /**
   * Helper function to set class on an element
   */
  function setElementClass(fieldId, className) {
    if (ModeManager.currentMode !== "target") return; // Only update DOM in target mode
    
    const element = document.querySelector(`[data-field-id="${fieldId}"]`);
    if (element) {
      element.classList.remove("checkmark", "warning");
      element.classList.add(className);
    }
  }

  //==========================================================================
  // DUAL-STATE CALCULATION ENGINES (S07 Pattern)
  //==========================================================================
  
  function calculateAllForMode() {
    calculateOccupantEnergy();
    calculatePlugLoads();
    calculateLightingLoads();
    calculateEquipmentLoads();
    calculateTotals();
  }

  function calculateReferenceModel() {
    const originalMode = ModeManager.currentMode;
    ModeManager.switchMode("reference");
    try {
      calculateAllForMode();
    } catch (error) {
      console.error("[S09] Error in Reference Model calculations:", error);
    } finally {
      ModeManager.switchMode(originalMode);
    }
  }

  function calculateTargetModel() {
    const originalMode = ModeManager.currentMode;
    ModeManager.switchMode("target");
    try {
      calculateAllForMode();
    } catch (error) {
      console.error("[S09] Error in Target Model calculations:", error);
    } finally {
      ModeManager.switchMode(originalMode);
    }
  }

  function calculateAll() {
    calculateReferenceModel();
    calculateTargetModel();
  }

  //==========================================================================
  // EVENT HANDLING (CORRECTED FOR 100% STATE ISOLATION)
  //==========================================================================
  
  function initializeEventHandlers() {
    const sectionElement = document.getElementById("occupantInternalGains");
    if (!sectionElement) return;

    // Make editable fields actually editable
    const editableFields = sectionElement.querySelectorAll('.user-input');
    editableFields.forEach((field) => {
      field.setAttribute("contenteditable", "true");
      
      field.addEventListener("blur", function () {
        const fieldId = this.getAttribute("data-field-id");
        if (!fieldId) return;

        let newValue = this.textContent.trim();
        const numericValue = window.TEUI?.parseNumeric?.(newValue) || 0;
        
        if (!isNaN(numericValue)) {
          const formatType = Number.isInteger(numericValue) ? "integer" : "number";
          this.textContent = window.TEUI?.formatNumber?.(numericValue, formatType) ?? newValue;
        }

        // ✅ CORRECT: 100% State Isolation - Only update current mode's state
        if (window.TEUI?.StateManager) {
          const modePrefix = ModeManager.currentMode === "target" ? "target_" : "ref_";
          window.TEUI.StateManager.setValue(`${modePrefix}${fieldId}`, newValue, "user-modified");
          
          // Only update global state in target mode (for DOM display)
          if (ModeManager.currentMode === "target") {
            window.TEUI.StateManager.setValue(fieldId, newValue, "user-modified");
          }
        }

        calculateAll();
      });

      field.addEventListener("keydown", function (e) {
        if (e.key === "Enter") {
          e.preventDefault();
          this.blur();
        }
      });
    });

    // Dropdown handlers - 100% State Isolation
    const dropdowns = sectionElement.querySelectorAll("select");
    dropdowns.forEach((dropdown) => {
      dropdown.addEventListener("change", function () {
        const fieldId = this.getAttribute("data-field-id");
        if (!fieldId) return;

        // ✅ CORRECT: 100% State Isolation - Only update current mode's state
        if (window.TEUI?.StateManager) {
          const modePrefix = ModeManager.currentMode === "target" ? "target_" : "ref_";
          window.TEUI.StateManager.setValue(`${modePrefix}${fieldId}`, this.value, "user-modified");
          
          // Only update global state in target mode (for DOM display)
          if (ModeManager.currentMode === "target") {
            window.TEUI.StateManager.setValue(fieldId, this.value, "user-modified");
          }
        }

        calculateAll();
      });
    });
  }

  function addStateManagerListeners() {
    if (!window.TEUI?.StateManager) return;

    const dependencies = [
      { source: "h_15", handler: calculateAll, description: "Update when conditioned area changes" },
      { source: "d_54", handler: function() { 
        // DHW losses affect both models (shared from S07)
        calculateAll();
      }, description: "Update when DHW system losses change" },
      { source: "d_12", handler: function() {
        // Building type affects both models (shared geometry)
        calculateAll();
      }, description: "Update when building type changes" },
      { source: "d_13", handler: function() {
        // Reference standard affects both models (shared assumption)
        calculateAll();
      }, description: "Update when reference standard changes" },
      { source: "m_19", handler: calculateAll, description: "Update when cooling days change" },
    ];

    dependencies.forEach((dep) => {
      window.TEUI.StateManager.addListener(dep.source, dep.handler);
    });
  }

  //==========================================================================
  // SECTION INTEGRATION (Following S07 Pattern)
  //==========================================================================
  
  function registerWithStateManager() {
    if (!window.TEUI?.StateManager) return;

    // Register default values
    if (window.TEUI.StateManager.setValue) {
      window.TEUI.StateManager.setValue("g_67", "Efficient", "default");
      window.TEUI.StateManager.setValue("d_68", "No Elevators", "default");
      setFieldValue("d_67", 5.0);
    }

    // Register key fields that other sections depend on
    const keysToRegister = [
      { id: "h_71", value: "0", state: "calculated" },
      { id: "i_71", value: "0", state: "calculated" },
      { id: "k_71", value: "0", state: "calculated" },
      { id: "h_64", value: "0", state: "calculated" },
      { id: "h_65", value: "0", state: "calculated" },
      { id: "h_66", value: "0", state: "calculated" },
      { id: "h_67", value: "0", state: "calculated" },
      { id: "h_69", value: "0", state: "calculated" },
    ];

    keysToRegister.forEach((key) => {
      window.TEUI.StateManager.setValue(key.id, key.value, key.state);
    });
  }

  function onSectionRendered() {
    registerWithStateManager();
    initializeEventHandlers();
    addStateManagerListeners();
    
    // Initialize defaults if not already done
    if (!window.TEUI.sect09.initialized) {
      const efficiencyDropdown = document.querySelector('select[data-field-id="g_67"]');
      const elevatorDropdown = document.querySelector('select[data-field-id="d_68"]');
      
      if (efficiencyDropdown) {
        efficiencyDropdown.value = "Efficient";
        if (window.TEUI?.StateManager?.setValue) {
          window.TEUI.StateManager.setValue("g_67", "Efficient", "default");
        }
      }
      if (elevatorDropdown) {
        elevatorDropdown.value = "No Elevators";
        if (window.TEUI?.StateManager?.setValue) {
          window.TEUI.StateManager.setValue("d_68", "No Elevators", "default");
        }
      }
      
      window.TEUI.sect09.initialized = true;
    }

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
    
    // Legacy compatibility functions for other sections
    getInternalGainsTotal: function () {
      return getFieldValue("h_71");
    },
    getInternalGainsHeating: function () {
      return getFieldValue("i_71");
    },
    getInternalGainsCooling: function () {
      return getFieldValue("k_71");
    },
    
    // Individual calculation functions for dependency handlers
    calculateOccupantEnergy,
    calculatePlugLoads,
    calculateLightingLoads,
    calculateEquipmentLoads,
    calculateTotals,
  };
})();

// Initialize when the section is rendered
document.addEventListener("teui-section-rendered", function (event) {
  if (event.detail?.sectionId === "occupantInternalGains") {
    if (window.TEUI?.SectionModules?.sect09?.onSectionRendered) {
      window.TEUI.SectionModules.sect09.onSectionRendered();
    }
  }
});

// Ensure calculateTEUI function exists for legacy compatibility
if (
  typeof window.calculateTEUI !== "function" &&
  window.TEUI?.StateManager?.updateTEUICalculations
) {
  window.calculateTEUI = function () {
    window.TEUI.StateManager.updateTEUICalculations("global-fallback");
  };
}
