/**
 * 4011-Section07.js
 * Water Use (Section 7) module for TEUI Calculator 4.011
 *
 * Refactored to use the standardized dual-engine architecture.
 */

window.TEUI = window.TEUI || {};
window.TEUI.SectionModules = window.TEUI.SectionModules || {};

window.TEUI.SectionModules.sect07 = (function () {
  //==========================================================================
  // PATTERN A: DUAL-STATE ARCHITECTURE
  //==========================================================================
  
  // State objects for Target and Reference models
  const TargetState = {
    values: {},
    getValue: function(fieldId) {
      return this.values[fieldId] || null;
    },
    setValue: function(fieldId, value) {
      this.values[fieldId] = value;
    },
    getNumericValue: function(fieldId, defaultValue = 0) {
      const value = this.getValue(fieldId);
      if (value === null || value === undefined || value === "") return defaultValue;
      const parsed = window.TEUI?.parseNumeric?.(value, defaultValue) ?? parseFloat(value);
      return isNaN(parsed) ? defaultValue : parsed;
    }
  };

  const ReferenceState = {
    values: {},
    getValue: function(fieldId) {
      return this.values[fieldId] || null;
    },
    setValue: function(fieldId, value) {
      this.values[fieldId] = value;
    },
    getNumericValue: function(fieldId, defaultValue = 0) {
      const value = this.getValue(fieldId);
      if (value === null || value === undefined || value === "") return defaultValue;
      const parsed = window.TEUI?.parseNumeric?.(value, defaultValue) ?? parseFloat(value);
      return isNaN(parsed) ? defaultValue : parsed;
    }
  };

  // Mode manager for UI state switching (display-only)
  const ModeManager = {
    currentMode: "target", // "target" or "reference"
    
    switchMode: function(mode) {
      this.currentMode = mode;
      this.refreshUI();
      this.updateCalculatedDisplayValues(); // ✅ DOM update without calculations
    },
    
    refreshUI: function() {
      // Update input fields to show current mode's values
      const fields = getFields();
      Object.keys(fields).forEach(fieldId => {
        const currentState = this.currentMode === "target" ? TargetState : ReferenceState;
        const value = currentState.getValue(fieldId);
        if (value !== null) {
          const element = document.querySelector(`[data-field-id="${fieldId}"]`);
          if (element && element.hasAttribute('contenteditable')) {
            element.textContent = value;
          } else if (element && element.tagName === 'SELECT') {
            element.value = value;
          } else if (element && element.type === 'range') {
            element.value = value;
            // Also update the display span if it exists
            const displaySpan = document.querySelector(`span[data-display-for="${fieldId}"]`);
            if (displaySpan) displaySpan.textContent = value + "%";
          }
        }
      });
    },
    
    updateCalculatedDisplayValues: function() {
      // Update calculated display fields in DOM based on current mode
      const mode = this.currentMode;

      
      // Get calculated values from appropriate state
      const calculatedFields = [
        'h_49', 'h_50', 'i_49', 'i_50', 'j_50', 'j_51', 'j_52', 'j_53', 'j_54',
        'k_49', 'k_51', 'k_52', 'k_54', 'e_51', 'e_52', 'e_53', 'd_54', 'n_49', 'n_50', 'n_52'
      ];
      
      calculatedFields.forEach(fieldId => {
        const targetValue = TargetState.getValue(fieldId);
        const referenceValue = ReferenceState.getValue(fieldId);
        
        let displayValue;
        if (mode === "reference") {
          // In Reference mode, show Reference values or fallback to 0 if null
          displayValue = referenceValue !== null ? referenceValue : "0";
        } else {
          // In Target mode, show Target values
          displayValue = targetValue !== null ? targetValue : "0";
        }
        
        const element = document.querySelector(`[data-field-id="${fieldId}"]`);
        if (element) {
          const formatType = getFieldFormat(fieldId);
          const formattedValue = window.TEUI?.formatNumber?.(displayValue, formatType) ?? displayValue;
          element.textContent = formattedValue;
          element.classList.toggle("negative-value", Number(displayValue) < 0);
        }
      });
    },
    
    getValue: function(fieldId) {
      const currentState = this.currentMode === "target" ? TargetState : ReferenceState;
      return currentState.getValue(fieldId);
    },
    
    setValue: function(fieldId, value, source = "user-modified") {
      const currentState = this.currentMode === "target" ? TargetState : ReferenceState;
      currentState.setValue(fieldId, value);
      
      // ✅ PATTERN A: Store to StateManager for cross-section communication
      if (this.currentMode === "target") {
        window.TEUI?.StateManager?.setValue(fieldId, value, source);
      }
      // Reference values don't get stored globally until calculateReferenceModel runs
    }
  };

  //==========================================================================
  // CONSOLIDATED FIELD DEFINITIONS AND LAYOUT  
  //==========================================================================

  const sectionRows = {
    header: {
      id: "S07-ID",
      rowId: "S07-ID",
      cells: {
        c: { content: "C", classes: ["section-subheader"] },
        d: { content: "Targeted", classes: ["section-subheader"] },
        e: { content: "E", classes: ["section-subheader"] },
        f: { content: "F", classes: ["section-subheader"] },
        g: { content: "G", classes: ["section-subheader"] },
        h: { content: "litres/pp/day", classes: ["section-subheader"] },
        i: { content: "litres/yr", classes: ["section-subheader"] },
        j: { content: "Annual kWh/yr", classes: ["section-subheader"] },
        k: { content: "Annual ekWh/yr", classes: ["section-subheader"] },
        l: { content: "L", classes: ["section-subheader"] },
        m: { content: "Ref", classes: ["section-subheader"] },
        n: { content: "N", classes: ["section-subheader"] },
      },
    },
    49: {
      id: "W.1.0",
      label: "Total Hot+Cold Water Use (Method)",
      cells: {
        c: { label: "Total Hot+Cold Water Use (Method)" },
        d: {
          fieldId: "d_49",
          type: "dropdown",
          dropdownId: "d_49",
          value: "User Defined",
          options: [
            "User Defined",
            "By Engineer",
            "PHPP Method",
            "NBC Method",
            "OBC Method",
            "Luxury",
          ],
        },
        e: {
          fieldId: "e_49",
          type: "editable",
          value: "40.00",
          classes: ["user-input"],
        },
        f: { content: "lpppd (User Defined)", classes: ["text-left"] },
        h: { fieldId: "h_49", type: "calculated", value: "40.00" },
        i: { fieldId: "i_49", type: "calculated", value: "1,839,600" },
        j: { content: "Net Emissions", classes: ["text-left"] },
        k: { fieldId: "k_49", type: "calculated", value: "0.00" },
        l: { content: "kgCO2e/yr", classes: ["text-left"] },
        m: { content: "✓", classes: ["checkmark"] },
        n: { fieldId: "n_49", type: "calculated", value: "15%" },
      },
    },
    50: {
      id: "W.1.2",
      label: "DHW Use (40% of W.1.0)",
      cells: {
        c: { label: "DHW Use (40% of W.1.0)" },
        d: { content: "" },
        e: {
          fieldId: "e_50",
          type: "editable",
          value: "10,000.00",
          classes: ["user-input"],
        },
        f: { content: "kWh/yr (IF By Engineer)", classes: ["text-left"] },
        h: { fieldId: "h_50", type: "calculated", value: "16.00" },
        i: { fieldId: "i_50", type: "calculated", value: "735,840" },
        j: { fieldId: "j_50", type: "calculated", value: "38,484.43" },
        m: { content: "✓", classes: ["checkmark"] },
        n: { fieldId: "n_50", type: "calculated", value: "15%" },
      },
    },
    51: {
      id: "W.3.1",
      label: "DHW or SHW Energy Source",
      cells: {
        c: { label: "DHW or SHW Energy Source" },
        d: {
          fieldId: "d_51",
          type: "dropdown",
          dropdownId: "d_51",
          value: "Heatpump",
          options: ["Heatpump", "Gas", "Oil", "Electric"],
        },
        e: { fieldId: "e_51", type: "calculated", value: "0.00" },
        f: { content: "Gas m³/yr", classes: ["text-left"] },
        g: { content: "W.3.2", classes: ["text-left"] },
        h: { content: "Net Thermal Demand", classes: ["text-left"] },
        j: { fieldId: "j_51", type: "calculated", value: "12,828.14" },
        k: { fieldId: "k_51", type: "calculated", value: "12,828.14" },
        l: { content: "W.3.3 Net Elect. Demand", classes: ["text-left"] },
      },
    },
    52: {
      id: "W.4.1",
      label: "DHW or SHW Efficiency Factor (EF)",
      cells: {
        c: { label: "DHW or SHW Efficiency Factor (EF)" },
        d: {
          fieldId: "d_52",
          type: "percentage",
          value: "300",
          min: 50,
          max: 400,
          step: 2,
          classes: ["user-input"],
        },
        e: { fieldId: "e_52", type: "calculated", value: "3.00" },
        f: { content: "COPdhw", classes: ["text-left"] },
        g: { content: "W.5.2", classes: ["text-left"] },
        h: { content: "Net Demand-Recovered", classes: ["text-left"] },
        j: { fieldId: "j_52", type: "calculated", value: "12,828.14" },
        k: {
          fieldId: "k_52",
          type: "editable",
          value: "0.90",
          classes: ["user-input"],
        },
        l: { content: "W.4.2 AFUE", classes: ["text-left"] },
        m: { content: "✓", classes: ["checkmark"] },
        n: { fieldId: "n_52", type: "calculated", value: "100%" },
      },
    },
    53: {
      id: "W.5.1",
      label: "Drain Water Heat Recovery Efficiency",
      cells: {
        c: { label: "Drain Water Heat Recovery Efficiency" },
        d: {
          fieldId: "d_53",
          type: "percentage",
          value: "0",
          min: 0,
          max: 70,
          step: 1,
          classes: ["user-input"],
        },
        e: { fieldId: "e_53", type: "calculated", value: "0.00" },
        f: { content: "kWh/yr", classes: ["text-left"] },
        g: { content: "W.5.3", classes: ["text-left"] },
        h: { content: "(W.2.W) SHW Wasted", classes: ["text-left"] },
        j: { fieldId: "j_53", type: "calculated", value: "12,828.14" },
        m: { content: "!", classes: ["warning"] },
        n: { fieldId: "n_53", type: "calculated", value: "0%" },
      },
    },
    54: {
      id: "W.6.1",
      label: "System Losses (% → W.1.3 Eqpt Gains)",
      cells: {
        c: { label: "System Losses (% → W.1.3 Eqpt Gains)" },
        d: { fieldId: "d_54", type: "calculated", value: "0.00" },
        f: { content: "kWh/yr", classes: ["text-left"] },
        g: { content: "W.X", classes: ["text-right"] },
        h: { content: "Exhaust (if Gas or Oil)", classes: ["text-left"] },
        j: { fieldId: "j_54", type: "calculated", value: "0.00" },
        k: { fieldId: "k_54", type: "calculated", value: "0.00" },
        l: { content: "W.3.4 Net Oil Demand Ltrs", classes: ["text-left"] },
        m: { content: "", classes: ["text-left"] },
      },
    },
  };

  //==========================================================================
  // ACCESSOR METHODS (Standardized)
  //==========================================================================
  function getFields() {
    const fields = {};
    Object.values(sectionRows).forEach((row) => {
      if (!row.cells) return;
      Object.values(row.cells).forEach((cell) => {
        if (cell.fieldId) {
          fields[cell.fieldId] = {
            type: cell.type,
            label: cell.label || row.label,
            defaultValue: cell.value || "",
            section: "waterUse",
          };
          // Add additional properties for dropdown fields
          if (cell.dropdownId)
            fields[cell.fieldId].dropdownId = cell.dropdownId;
          if (cell.options) fields[cell.fieldId].options = cell.options;
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
        if (cell.type === "dropdown" && cell.dropdownId && cell.options) {
          options[cell.dropdownId] = cell.options.map((opt) => ({
            value: opt,
            name: opt,
          }));
        }
      });
    });
    return options;
  }

  function getLayout() {
    const layoutRows = [];
    if (sectionRows["header"])
      layoutRows.push(createLayoutRow(sectionRows["header"]));
    Object.keys(sectionRows).forEach((key) => {
      if (key !== "header") layoutRows.push(createLayoutRow(sectionRows[key]));
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
      const cell = row.cells?.[col] || {};
      if (col === "c" && !cell.label && row.label) cell.label = row.label;
      rowDef.cells.push(cell);
    });
    return rowDef;
  }

  // ✅ PATTERN A: Expose ModeManager to global namespace for ComponentBridge compatibility
  window.TEUI.sect07 = { ModeManager: ModeManager };

  //==========================================================================
  // HELPER FUNCTIONS (Standardized)
  //==========================================================================
  // ✅ PATTERN A: Helper functions using explicit state access
  function getSectionValue(fieldId, isReferenceCalculation = false) {
    if (isReferenceCalculation) {
      return ReferenceState.getValue(fieldId);
    } else {
      return TargetState.getValue(fieldId);
    }
  }
  
  function getSectionNumericValue(fieldId, defaultValue = 0, isReferenceCalculation = false) {
    if (isReferenceCalculation) {
      return ReferenceState.getNumericValue(fieldId, defaultValue);
    } else {
      return TargetState.getNumericValue(fieldId, defaultValue);
    }
  }
  
  function setSectionValue(fieldId, value, isReferenceCalculation = false) {
    if (isReferenceCalculation) {
      ReferenceState.setValue(fieldId, value);
    } else {
      TargetState.setValue(fieldId, value);
      // ✅ Store Target values to StateManager for cross-section communication
      window.TEUI?.StateManager?.setValue(fieldId, value.toString(), "calculated");
    }
  }

  function getFieldFormat(fieldId) {
    const formatMap = {
      h_49: "number-2dp",
      i_49: "integer-comma",
      h_50: "number-2dp",
      i_50: "integer-comma",
      j_50: "number-2dp-comma",
      n_49: "percent-0dp",
      n_50: "percent-0dp",
      e_52: "number-2dp",
      j_51: "number-2dp-comma",
      e_53: "number-2dp-comma",
      j_52: "number-2dp-comma",
      j_53: "number-2dp-comma",
      e_51: "number-2dp-comma",
      k_51: "number-2dp-comma",
      d_54: "number-2dp-comma",
      j_54: "number-2dp-comma",
      k_54: "number-2dp-comma",
      k_49: "number-2dp-comma",
    };
    return formatMap[fieldId] || "number-2dp-comma";
  }

  //==========================================================================
  // CALCULATION FUNCTIONS
  //==========================================================================
  function calculateWaterUse(isReferenceCalculation = false) {
    // ✅ PATTERN A: Explicit state access while preserving Excel formulas
    const method = getSectionValue("d_49", isReferenceCalculation) || "User Defined";
    
    // ✅ PATTERN A: External dependency - read from StateManager with mode awareness
    const occupants = isReferenceCalculation
      ? (window.TEUI?.StateManager?.getValue("ref_d_63") || window.TEUI?.StateManager?.getValue("d_63") || 0)
      : (window.TEUI?.StateManager?.getValue("d_63") || 0);
    
    const userDefinedValue = getSectionNumericValue("e_49", 40, isReferenceCalculation);
    const engineerValue = getSectionNumericValue("e_50", 10000, isReferenceCalculation);

    let litersPerPersonDay = 0;
    let hotWaterEnergyDemand = 0;

    // ✅ PRESERVE: Exact Excel formula logic unchanged
    switch (method) {
      case "User Defined":
        litersPerPersonDay = userDefinedValue;
        break;
      case "By Engineer":
        hotWaterEnergyDemand = engineerValue;
        break;
      case "PHPP Method":
        litersPerPersonDay = 62.5;
        break;
      case "NBC Method":
        litersPerPersonDay = 220;
        break;
      case "OBC Method":
        litersPerPersonDay = 275;
        break;
      case "Luxury":
        litersPerPersonDay = 400;
        break;
      default:
        litersPerPersonDay = 40;
    }

    // ✅ PRESERVE: Exact Excel calculation formulas unchanged
    if (method !== "By Engineer") {
      hotWaterEnergyDemand =
        litersPerPersonDay * 0.4 * occupants * 0.0523 * 365;
    } else {
      const waterHeatFactor = 0.0524;
      litersPerPersonDay =
        occupants > 0
          ? engineerValue / (365 * waterHeatFactor * occupants * 0.4)
          : 0;
    }

    // ✅ PATTERN A: Store to appropriate state
    setSectionValue("h_49", litersPerPersonDay, isReferenceCalculation);
    setSectionValue("i_49", litersPerPersonDay * occupants * 365, isReferenceCalculation);
    setSectionValue("h_50", litersPerPersonDay * 0.4, isReferenceCalculation);
    setSectionValue("i_50", litersPerPersonDay * 0.4 * occupants * 365, isReferenceCalculation);
    setSectionValue("j_50", hotWaterEnergyDemand, isReferenceCalculation);
  }

  function calculateHeatingSystem(isReferenceCalculation = false) {
    // ✅ PATTERN A: Explicit state access while preserving Excel formulas
    const hotWaterEnergyDemand = getSectionNumericValue("j_50", 0, isReferenceCalculation);
    const systemType = getSectionValue("d_51", isReferenceCalculation) || "Heatpump";
    const efficiencyInput = getSectionNumericValue("d_52", 300, isReferenceCalculation);
    const afue = getSectionNumericValue("k_52", 0.9, isReferenceCalculation);
    const recoveryPercent = getSectionNumericValue("d_53", 0, isReferenceCalculation) / 100;

    // ✅ PRESERVE: Exact Excel calculation formulas unchanged
    const efficiency = efficiencyInput / 100;
    setSectionValue("e_52", efficiency, isReferenceCalculation);

    const netThermalDemand =
      systemType === "Heatpump" || systemType === "Electric"
        ? hotWaterEnergyDemand / efficiency
        : hotWaterEnergyDemand / afue;
    setSectionValue("j_51", netThermalDemand, isReferenceCalculation);

    const energyRecovered = netThermalDemand * recoveryPercent;
    setSectionValue("e_53", energyRecovered, isReferenceCalculation);

    const netDemandAfterRecovery = netThermalDemand - energyRecovered;
    setSectionValue("j_52", netDemandAfterRecovery, isReferenceCalculation);
    setSectionValue("j_53", netDemandAfterRecovery, isReferenceCalculation);

    const netElectricalDemand =
      systemType === "Heatpump" || systemType === "Electric"
        ? netDemandAfterRecovery
        : 0;
    setSectionValue("k_51", netElectricalDemand, isReferenceCalculation);
  }

  function calculateEmissionsAndLosses(isReferenceCalculation = false) {
    // ✅ PATTERN A: Explicit state access while preserving Excel formulas
    const systemType = getSectionValue("d_51", isReferenceCalculation) || "Heatpump";
    const netDemandAfterRecovery = getSectionNumericValue("j_52", 0, isReferenceCalculation);
    const afue = getSectionNumericValue("k_52", 0.9, isReferenceCalculation);
    const hotWaterEnergyDemand = getSectionNumericValue("j_50", 0, isReferenceCalculation);
    const waterUseMethod = getSectionValue("d_49", isReferenceCalculation) || "User Defined";

    // ✅ PRESERVE: Exact Excel calculation formulas unchanged
    let gasVolume = 0;
    let oilVolume = 0;
    if (systemType === "Gas") {
      const conversionFactor = 10.3321;
      gasVolume =
        afue > 0 ? netDemandAfterRecovery / (conversionFactor * afue) : 0;
    } else if (systemType === "Oil") {
      const conversionFactor = 10.18; // 36.72 * 0.2777778
      oilVolume =
        afue > 0 ? netDemandAfterRecovery / (conversionFactor * afue) : 0;
    }
    setSectionValue("e_51", gasVolume, isReferenceCalculation);
    setSectionValue("k_54", oilVolume, isReferenceCalculation);

    // ✅ PATTERN A: External dependencies - read from upstream sections with mode awareness
    const oilEmissionsFactor = isReferenceCalculation 
      ? (window.TEUI?.StateManager?.getValue("ref_l_30") || window.TEUI?.StateManager?.getValue("l_30") || 2753)
      : (window.TEUI?.StateManager?.getValue("l_30") || 2753);
    const gasEmissionsFactor = isReferenceCalculation
      ? (window.TEUI?.StateManager?.getValue("ref_l_28") || window.TEUI?.StateManager?.getValue("l_28") || 1921)
      : (window.TEUI?.StateManager?.getValue("l_28") || 1921);
      
    const dhwEmissions =
      (systemType === "Oil"
        ? oilVolume * oilEmissionsFactor
        : systemType === "Gas"
          ? gasVolume * gasEmissionsFactor
          : 0) / 1000;
    setSectionValue("k_49", dhwEmissions, isReferenceCalculation);

    const exhaustLosses =
      systemType === "Gas" || systemType === "Oil"
        ? netDemandAfterRecovery * (1 - afue)
        : 0;
    setSectionValue("j_54", exhaustLosses, isReferenceCalculation);

    const efficiency = getSectionNumericValue("e_52", 1, isReferenceCalculation);
    const systemLosses =
      efficiency <= 1
        ? hotWaterEnergyDemand * (waterUseMethod === "PHPP Method" ? 0.25 : 0.1)
        : 0;
    setSectionValue("d_54", systemLosses, isReferenceCalculation);

    // ✅ PATTERN A: Store to StateManager for cross-section communication (S10 dependency)
    if (!isReferenceCalculation) {
      window.TEUI?.StateManager?.setValue("h_69", systemLosses.toString(), "calculated");
    }
  }

  function calculateCompliance(isReferenceCalculation = false) {
    // ✅ PATTERN A: Explicit state access while preserving Excel formulas
    const litersPerPersonDay = getSectionNumericValue("h_49", 0, isReferenceCalculation);
    const hotWaterLitersPerDay = getSectionNumericValue("h_50", 0, isReferenceCalculation);
    const efficiency = getSectionNumericValue("e_52", 1, isReferenceCalculation);
    const recoveryPercent = getSectionNumericValue("d_53", 0, isReferenceCalculation) / 100;

    // ✅ PRESERVE: Exact Excel calculation formulas unchanged
    const waterUsePercentRaw = 275 !== 0 ? litersPerPersonDay / 275 : 0;
    const dhwUsePercentRaw = 110 !== 0 ? hotWaterLitersPerDay / 110 : 0;
    const efficiencyPercentRaw = 0.9 !== 0 ? efficiency / 0.9 : 0;

    setSectionValue(
      "n_49",
      window.TEUI?.formatNumber?.(waterUsePercentRaw, "percent-0dp") ?? "0%",
      isReferenceCalculation
    );
    setSectionValue(
      "n_50",
      window.TEUI?.formatNumber?.(dhwUsePercentRaw, "percent-0dp") ?? "0%",
      isReferenceCalculation
    );
    setSectionValue(
      "n_52",
      window.TEUI?.formatNumber?.(efficiencyPercentRaw, "percent-0dp") ?? "100%",
      isReferenceCalculation
    );
    setSectionValue(
      "n_53",
      window.TEUI?.formatNumber?.(recoveryPercent, "percent-0dp") ?? "0%",
      isReferenceCalculation
    );
  }

  // ✅ PATTERN A: Dual-engine calculations with explicit state access
  function calculateTargetModel() {

    try {
      calculateWaterUse(false); // false = Target calculation
      calculateHeatingSystem(false);
      calculateEmissionsAndLosses(false);
      calculateCompliance(false);
      
      // ✅ PATTERN A: Store Target results to StateManager for downstream sections
      const targetFields = [
        'h_49', 'h_50', 'i_49', 'i_50', 'j_50', 'j_51', 'j_52', 'j_53', 'j_54',
        'k_49', 'k_51', 'k_52', 'k_54', 'e_51', 'e_52', 'e_53', 'd_54'
      ];
      
      targetFields.forEach(fieldId => {
        const value = TargetState.getValue(fieldId);
        if (value !== null) {
          window.TEUI?.StateManager?.setValue(fieldId, value.toString(), "calculated");
        }
      });

    } catch (error) {
      console.error("[S07] Error in Target Model calculations:", error);
    }
  }

  function calculateReferenceModel() {

    try {
      calculateWaterUse(true); // true = Reference calculation
      calculateHeatingSystem(true);
      calculateEmissionsAndLosses(true);
      calculateCompliance(true);
      
      // ✅ PATTERN A: Store Reference results to StateManager for downstream sections
      const referenceFields = [
        'h_49', 'h_50', 'i_49', 'i_50', 'j_50', 'j_51', 'j_52', 'j_53', 'j_54',
        'k_49', 'k_51', 'k_52', 'k_54', 'e_51', 'e_52', 'e_53', 'd_54'
      ];
      
      referenceFields.forEach(fieldId => {
        const value = ReferenceState.getValue(fieldId);
        if (value !== null) {
          window.TEUI?.StateManager?.setValue(`ref_${fieldId}`, value.toString(), "calculated");
        }
      });
      

    } catch (error) {
      console.error("[S07] Error in Reference Model calculations:", error);
    }
  }

  function calculateAll() {

    calculateTargetModel();
    calculateReferenceModel();

  }

  //==========================================================================
  // UI MANAGEMENT FUNCTIONS (From Original Code)
  //==========================================================================
  function updateSection7Visibility(waterMethod, systemType) {
    const isUserDefined = waterMethod === "User Defined";
    setFieldGhosted("e_49", !isUserDefined);
    const f49Cell = document.querySelector(
      '.data-table tr[data-id="W.1.0"] td:nth-child(6)',
    );
    if (f49Cell) f49Cell.classList.toggle("disabled-input", !isUserDefined);

    const isByEngineer = waterMethod === "By Engineer";
    setFieldGhosted("e_50", !isByEngineer);
    const e50Cell = document.querySelector(
      '.data-table tr[data-id="W.1.2"] td:nth-child(5)',
    );
    const f50Cell = document.querySelector(
      '.data-table tr[data-id="W.1.2"] td:nth-child(6)',
    );
    if (e50Cell) e50Cell.classList.toggle("disabled-input", !isByEngineer);
    if (f50Cell) f50Cell.classList.toggle("disabled-input", !isByEngineer);

    const isGas = systemType === "Gas";
    const isOil = systemType === "Oil";
    const isFossilFuel = isGas || isOil;

    setFieldGhosted("e_51", !isGas);
    const f51Cell = document.querySelector(
      '.data-table tr[data-id="W.3.1"] td:nth-child(6)',
    );
    if (f51Cell) f51Cell.classList.toggle("disabled-input", !isGas);

    setFieldGhosted("k_54", !isOil);
    setFieldGhosted("d_52", isFossilFuel);
    setFieldGhosted("e_52", isFossilFuel);
    setFieldGhosted("k_52", !isFossilFuel);
  }

  function setFieldGhosted(fieldId, shouldBeGhosted) {
    const valueCell = document.querySelector(`td[data-field-id="${fieldId}"]`);
    if (valueCell) {
      valueCell.classList.toggle("disabled-input", shouldBeGhosted);
      const input = valueCell.querySelector(
        'input, select, [contenteditable="true"]',
      );
      if (input) {
        if (input.hasAttribute("contenteditable"))
          input.contentEditable = !shouldBeGhosted;
        else input.disabled = shouldBeGhosted;
      }
      if (valueCell.hasAttribute("contenteditable"))
        valueCell.contentEditable = !shouldBeGhosted;
    }
  }

  //==========================================================================
  // EVENT HANDLING (Enhanced with Original Functions)
  //==========================================================================
  function handleEditableBlur(event) {
    const fieldElement = this;
    const fieldId = fieldElement.getAttribute("data-field-id");
    if (!fieldId) return;

    let rawTextValue = fieldElement.textContent.trim();
    let numericValue =
      window.TEUI?.parseNumeric?.(rawTextValue, NaN) ??
      parseFloat(rawTextValue.replace(/[$,%]/g, ""));

    if (isNaN(numericValue)) {
      const previousValue = ModeManager.getValue(fieldId) || "0";
      numericValue = window.TEUI?.parseNumeric?.(previousValue, 0) ?? 0;
    }

    const formatType = fieldId === "k_52" ? "number-2dp" : "number-2dp-comma";
    const valueToStore = numericValue.toString();
    const formattedDisplay =
      window.TEUI?.formatNumber?.(numericValue, formatType) ?? valueToStore;
    fieldElement.textContent = formattedDisplay;

    // ✅ PATTERN A: Use ModeManager.setValue for proper state separation
    const currentValue = ModeManager.getValue(fieldId);
    if (currentValue !== valueToStore) {
      ModeManager.setValue(fieldId, valueToStore, "user-modified");
      calculateAll();
      ModeManager.updateCalculatedDisplayValues(); // ✅ DOM update after calculations
    }
  }

  function handleGenericDropdownChange(e) {
    const fieldId =
      e.target.getAttribute("data-field-id") ||
      e.target.getAttribute("data-dropdown-id");
    const value = e.target.value;
    
    if (fieldId) {
      // ✅ PATTERN A: Use ModeManager.setValue for proper state separation
      ModeManager.setValue(fieldId, value, "user-modified");

      if (fieldId === "d_51") handleDHWSourceChange(e);

      const currentWaterMethod = ModeManager.getValue("d_49") || "User Defined";
      const currentSystemType = ModeManager.getValue("d_51") || "Heatpump";
      updateSection7Visibility(currentWaterMethod, currentSystemType);
      calculateAll();
      ModeManager.updateCalculatedDisplayValues(); // ✅ DOM update after calculations
    }
  }

  function handleSliderChange(e) {
    const fieldId = e.target.getAttribute("data-field-id");
    const value = e.target.value;
    const displaySpan = document.querySelector(
      `span[data-display-for="${fieldId}"]`,
    );

    if (displaySpan) displaySpan.textContent = value + "%";

    if (fieldId && (e.type === "change" || e.type === "input")) {
      // ✅ PATTERN A: Use ModeManager.setValue for proper state separation
      ModeManager.setValue(fieldId, value, "user-modified");
      
      if (e.type === "change") {
        calculateAll();
        ModeManager.updateCalculatedDisplayValues(); // ✅ DOM update after calculations
      }
    }
  }

  function handleDHWSourceChange(event) {
    const selectedSource = event.target.value;
    const d52Slider = document.querySelector(
      'input[type="range"][data-field-id="d_52"]',
    );
    const d52Display = document.querySelector(`span[data-display-for="d_52"]`);

    let newMinValue = 50,
      newMaxValue = 400,
      newStep = 2,
      newValue = 300;

    if (selectedSource === "Gas" || selectedSource === "Oil") {
      newMinValue = 50;
      newMaxValue = 98;
      newStep = 1;
      newValue = 90;
    } else if (selectedSource === "Electric") {
      newMinValue = 90;
      newMaxValue = 100;
      newStep = 1;
      newValue = 100;
    } else {
      newMinValue = 100;
      newMaxValue = 450;
      newStep = 10;
      newValue = 300;
    }

    if (window.TEUI?.StateManager) {
      window.TEUI.StateManager.setValue(
        "d_52",
        newValue.toString(),
        "system-update",
      );
      window.TEUI.StateManager.setValue(
        `ref_d_52`,
        newValue.toString(),
        "system-update",
      );
    }
    if (d52Slider) {
      d52Slider.min = newMinValue;
      d52Slider.max = newMaxValue;
      d52Slider.step = newStep;
      d52Slider.value = newValue;
      if (d52Display) d52Display.textContent = `${newValue}%`;
    }
  }

  function initializeEventHandlers() {
    const sectionElement = document.getElementById("waterUse");
    if (!sectionElement) return;

    // Setup editable field handlers
    const editableFields = ["e_49", "e_50", "k_52"];
    editableFields.forEach((fieldId) => {
      const field = sectionElement.querySelector(
        `[data-field-id="${fieldId}"]`,
      );
      if (
        field &&
        field.classList.contains("editable") &&
        !field.hasEditableListeners
      ) {
        field.setAttribute("contenteditable", "true");
        field.classList.add("user-input");
        field.addEventListener("blur", handleEditableBlur);
        field.addEventListener("keydown", function (e) {
          if (e.key === "Enter") {
            e.preventDefault();
            this.blur();
          }
        });
        field.hasEditableListeners = true;
      }
    });

    // Setup dropdown handlers
    const dropdowns = sectionElement.querySelectorAll(
      "select[data-dropdown-id]",
    );
    dropdowns.forEach((dropdown) => {
      if (!dropdown.hasDropdownListener) {
        dropdown.addEventListener("change", handleGenericDropdownChange);
        dropdown.hasDropdownListener = true;
      }
    });

    // Setup slider handlers
    const sliders = sectionElement.querySelectorAll('input[type="range"]');
    sliders.forEach((slider) => {
      if (!slider.hasSliderListener) {
        slider.addEventListener("input", handleSliderChange);
        slider.addEventListener("change", handleSliderChange);
        slider.hasSliderListener = true;
      }
    });

    // StateManager listeners for external dependencies
    if (window.TEUI?.StateManager) {
      // ✅ PATTERN A: Dual-mode listeners for ALL external dependencies
      window.TEUI.StateManager.addListener("d_63", calculateAll); // Occupancy (Target)
      window.TEUI.StateManager.addListener("ref_d_63", calculateAll); // Occupancy (Reference)
      window.TEUI.StateManager.addListener("l_30", calculateAll); // Oil emissions factor (Target)
      window.TEUI.StateManager.addListener("ref_l_30", calculateAll); // Oil emissions factor (Reference)
      window.TEUI.StateManager.addListener("l_28", calculateAll); // Gas emissions factor (Target)
      window.TEUI.StateManager.addListener("ref_l_28", calculateAll); // Gas emissions factor (Reference)
    }
  }

  //==========================================================================
  // HEADER CONTROLS (Pattern A Mode Switching)
  //==========================================================================
  function injectHeaderControls() {
    const sectionHeader = document.querySelector("#waterUse .section-header");
    if (!sectionHeader || sectionHeader.querySelector(".local-controls-container")) {
      return; // Already setup or header not found
    }

    const controlsContainer = document.createElement("div");
    controlsContainer.className = "local-controls-container";
    controlsContainer.style.cssText =
      "display: flex; align-items: center; margin-left: auto; gap: 10px;";

    // --- Create Reset Button ---
    const resetButton = document.createElement("button");
    resetButton.innerHTML = "🔄 Reset";
    resetButton.title = "Reset Section 07 to Defaults";
    resetButton.style.cssText =
      "padding: 4px 8px; font-size: 0.8em; background-color: #dc3545; color: white; border: none; border-radius: 4px; cursor: pointer;";

    resetButton.addEventListener("click", (event) => {
      event.stopPropagation();
      if (confirm("Are you sure you want to reset all inputs in this section to their defaults? This will clear any saved data for Section 07.")) {
        // Reset both states
        TargetState.values = {};
        ReferenceState.values = {};
        ModeManager.currentMode = "target";
        calculateAll();
        ModeManager.updateCalculatedDisplayValues();
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


    // 1. Initialize event handlers
    initializeEventHandlers();

    // 2. Inject header controls for mode switching
    injectHeaderControls();

    // 3. Initialize visibility based on current values (using defaults since states start empty)
    const initialWaterMethod = "User Defined";
    const initialSystemType = "Heatpump";
    updateSection7Visibility(initialWaterMethod, initialSystemType);

    // 4. Run initial calculations
    calculateAll();
    
    // 5. Update DOM display
    ModeManager.updateCalculatedDisplayValues();


  }

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
    calculateWaterUse,
    calculateHeatingSystem,
    updateSection7Visibility,
    setFieldGhosted,
    handleGenericDropdownChange,
    handleSliderChange,
    handleDHWSourceChange,
    injectHeaderControls,
    // ✅ PATTERN A: Expose state objects for external access
    ModeManager: ModeManager
  };
})();

// Expose critical functions to global namespace for cross-module access
document.addEventListener("DOMContentLoaded", function () {
  const module = window.TEUI.SectionModules.sect07;
  if (module) {
    window.TEUI.sect07.calculateWaterUse = module.calculateWaterUse;
    window.TEUI.sect07.calculateHeatingSystem = module.calculateHeatingSystem;
    window.TEUI.sect07.calculateAll = module.calculateAll;
    window.TEUI.sect07.updateSection7Visibility =
      module.updateSection7Visibility;
  }
});

// Create a globally accessible safe version of calculateAll
window.calculateWaterUse = function () {
  if (window.waterUseCalculationRunning) return;
  window.waterUseCalculationRunning = true;
  try {
    if (window.TEUI?.SectionModules?.sect07?.calculateAll) {
      window.TEUI.SectionModules.sect07.calculateAll();
    } else if (window.TEUI?.sect07?.calculateAll) {
      window.TEUI.sect07.calculateAll();
    }
  } catch (e) {
    console.error("Error in water use calculation wrapper:", e);
  } finally {
    window.waterUseCalculationRunning = false;
  }
};
