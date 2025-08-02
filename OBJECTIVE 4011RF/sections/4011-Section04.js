/**
 * 4011-Section04.js
 * Actual vs. Target Energy & Carbon (Section 4) - SIMPLIFIED EXCEL-COMPLIANT VERSION
 * 
 * EXCEL METHODOLOGY (FORMULAE-3039.csv rows 26-36):
 * - Consumer section that reads calculated values from upstream sections (S15, etc.)
 * - User inputs for actual utility bill data (D27:D31) - mostly state agnostic
 * - Simple conversions and calculations based on Excel formulas
 * - Minimal dual-state only for modelled values (H27:H31, J27:J31, K27:K31)
 * 
 * REDUCED FROM 2,715 LINES TO ~464 LINES (83% REDUCTION)
 */

// Ensure namespace exists
window.TEUI = window.TEUI || {};
window.TEUI.SectionModules = window.TEUI.SectionModules || {};

// Section 4: Actual vs. Target Energy & Carbon Module (Excel-Compliant)
window.TEUI.SectionModules.sect04 = (function () {
  
  //==========================================================================
  // EXCEL-COMPLIANT HELPER FUNCTIONS
  //==========================================================================

  /**
   * Get external dependency from StateManager (Pattern A)
   */
  function getGlobalNumericValue(fieldId) {
    const rawValue = window.TEUI?.StateManager?.getValue(fieldId);
    return window.TEUI?.parseNumeric?.(rawValue, 0) ?? 0;
  }

  /**
   * Set calculated value with proper formatting and state management
   * Used for Target model calculations
   */
  function setCalculatedValue(fieldId, rawValue, formatType = 'number-2dp-comma') {
    // Store in TargetState and StateManager (no prefix)
    TargetState.setValue(fieldId, rawValue, 'calculated');
    if (window.TEUI?.StateManager) {
      window.TEUI.StateManager.setValue(fieldId, rawValue, 'calculated');
    }
    
    // Update DOM only if in Target mode
    if (ModeManager.currentMode === 'target') {
      const element = document.querySelector(`[data-field-id="${fieldId}"]`);
      if (element) {
        const formattedValue = window.TEUI?.formatNumber?.(rawValue, formatType) ?? rawValue.toString();
        element.textContent = formattedValue;
      }
    }
  }

  /**
   * Set Reference calculated value with proper formatting and state management
   * Used for Reference model calculations
   */
  function setReferenceCalculatedValue(fieldId, rawValue, formatType = 'number-2dp-comma') {
    // Store in ReferenceState and StateManager with ref_ prefix
    ReferenceState.setValue(fieldId, rawValue, 'calculated');
    if (window.TEUI?.StateManager) {
      window.TEUI.StateManager.setValue(`ref_${fieldId}`, rawValue, 'calculated');
    }
    
    // Update DOM only if in Reference mode
    if (ModeManager.currentMode === 'reference') {
      const element = document.querySelector(`[data-field-id="${fieldId}"]`);
      if (element) {
        const formattedValue = window.TEUI?.formatNumber?.(rawValue, formatType) ?? rawValue.toString();
        element.textContent = formattedValue;
      }
    }
  }

  //==========================================================================
  // PATTERN A DUAL-STATE ARCHITECTURE (S04 Excel-Compliant)
  //==========================================================================

  /**
   * TargetState: Self-contained state object for Target model
   */
  const TargetState = {
    data: {},
    localStorage_key: "S04_TARGET_STATE",
    
    initialize: function() {
      this.setDefaults();
      this.loadState();
    },
    
    setDefaults: function() {
      this.data = {
        // User inputs (actual energy from utility bills - mostly state agnostic)
        d_27: 132938, // Electricity kWh/yr (default for calculations)
        d_28: 0,      // Gas m3/yr
        d_29: 0,      // Propane L/yr
        d_30: 0,      // Oil L/yr
        d_31: 0,      // Wood m3/yr
        
        // Calculated values (computed by Excel formulas)
        f_27: 0, f_28: 0, f_29: 0, f_30: 0, f_31: 0, // Actual energy ekWh
        g_27: 0, g_28: 0, g_29: 0, g_30: 0, g_31: 0, // Actual emissions kgCO2e
        h_27: 0, h_28: 0, h_29: 0, h_30: 0, h_31: 0, // Target energy (from S15)
        j_27: 0, j_28: 0, j_29: 0, j_30: 0, j_31: 0, // Target energy ekWh
        k_27: 0, k_28: 0, k_29: 0, k_30: 0, k_31: 0, // Target emissions kgCO2e
        l_27: 51, l_28: 1921, l_29: 2970, l_30: 2753, l_31: 150, // Emission factors
        f_32: 0, g_32: 0, j_32: 0, k_32: 0, // Energy/emissions subtotals
        d_33: 0, h_33: 0, // Total Net Energy (GJ/yr)
        d_34: 0, f_34: 0, h_34: 0, j_34: 0, // Per capita energy
        d_35: 0, f_35: 0 // Primary energy
      };
      console.log("S04: TargetState defaults set");
    },
    
    saveState: function() {
      try {
        localStorage.setItem(this.localStorage_key, JSON.stringify(this.data));
      } catch (error) {
        console.warn("S04: Failed to save TargetState to localStorage:", error);
      }
    },
    
    loadState: function() {
      try {
        const savedData = localStorage.getItem(this.localStorage_key);
        if (savedData) {
          const parsedData = JSON.parse(savedData);
          // Merge saved data with defaults (preserves new fields added in updates)
          this.data = { ...this.data, ...parsedData };
          console.log("S04: TargetState loaded from localStorage");
        }
      } catch (error) {
        console.warn("S04: Failed to load TargetState from localStorage:", error);
        this.setDefaults();
      }
    },
    
    setValue: function(fieldId, value, source = "calculated") {
      this.data[fieldId] = value;
      this.saveState();
    },
    
    getValue: function(fieldId) {
      return this.data[fieldId];
    }
  };

  /**
   * ReferenceState: Self-contained state object for Reference model
   */
  const ReferenceState = {
    data: {},
    localStorage_key: "S04_REFERENCE_STATE",
    
    initialize: function() {
      this.setDefaults();
      this.loadState();
    },
    
    setDefaults: function() {
      // Reference state mirrors Target for user inputs (utility bills are "ground truth")
      // But may have different calculated values from upstream sections
      this.data = {
        // User inputs (same as Target - utility bills are state agnostic)
        d_27: 132938, // Electricity kWh/yr
        d_28: 0,      // Gas m3/yr  
        d_29: 0,      // Propane L/yr
        d_30: 0,      // Oil L/yr
        d_31: 0,      // Wood m3/yr
        
        // Calculated values (may differ from Target based on Reference building code)
        f_27: 0, f_28: 0, f_29: 0, f_30: 0, f_31: 0, // Actual energy ekWh
        g_27: 0, g_28: 0, g_29: 0, g_30: 0, g_31: 0, // Actual emissions kgCO2e
        h_27: 0, h_28: 0, h_29: 0, h_30: 0, h_31: 0, // Reference energy (from S15 ref calculations)
        j_27: 0, j_28: 0, j_29: 0, j_30: 0, j_31: 0, // Reference energy ekWh
        k_27: 0, k_28: 0, k_29: 0, k_30: 0, k_31: 0, // Reference emissions kgCO2e
        l_27: 51, l_28: 1921, l_29: 2970, l_30: 2753, l_31: 150, // Emission factors
        f_32: 0, g_32: 0, j_32: 0, k_32: 0, // Energy/emissions subtotals
        d_33: 0, h_33: 0, // Total Net Energy (GJ/yr)
        d_34: 0, f_34: 0, h_34: 0, j_34: 0, // Per capita energy
        d_35: 0, f_35: 0 // Primary energy
      };
      console.log("S04: ReferenceState defaults set");
    },
    
    saveState: function() {
      try {
        localStorage.setItem(this.localStorage_key, JSON.stringify(this.data));
      } catch (error) {
        console.warn("S04: Failed to save ReferenceState to localStorage:", error);
      }
    },
    
    loadState: function() {
      try {
        const savedData = localStorage.getItem(this.localStorage_key);
        if (savedData) {
          const parsedData = JSON.parse(savedData);
          // Merge saved data with defaults
          this.data = { ...this.data, ...parsedData };
          console.log("S04: ReferenceState loaded from localStorage");
        }
      } catch (error) {
        console.warn("S04: Failed to load ReferenceState from localStorage:", error);
        this.setDefaults();
      }
    },
    
    setValue: function(fieldId, value, source = "calculated") {
      this.data[fieldId] = value;
      this.saveState();
    },
    
    getValue: function(fieldId) {
      return this.data[fieldId];
    }
  };

  /**
   * ModeManager: Pattern A facade for dual-state coordination
   */
  const ModeManager = {
    currentMode: "target", // "target" or "reference"
    
    initialize: function() {
      console.log("S04: Initializing Pattern A ModeManager");
      TargetState.initialize();
      ReferenceState.initialize();
      console.log("S04: Pattern A initialization complete");
    },
    
    switchMode: function(mode) {
      if (mode !== "target" && mode !== "reference") {
        console.warn(`S04: Invalid mode: ${mode}`);
        return;
      }
      this.currentMode = mode;
      console.log(`S04: Switched to ${mode.toUpperCase()} mode`);
      
      // ✅ PATTERN A: UI toggle only switches display, values should already be calculated
      this.refreshUI();
      this.updateCalculatedDisplayValues();
    },
    
    getCurrentState: function() {
      return this.currentMode === "target" ? TargetState : ReferenceState;
    },
    
    getValue: function(fieldId) {
      return this.getCurrentState().getValue(fieldId);
    },
    
    setValue: function(fieldId, value, source = "calculated") {
      this.getCurrentState().setValue(fieldId, value, source);
      
      // ✅ CRITICAL BRIDGE: Sync Target changes to StateManager (NO PREFIX)
      if (this.currentMode === "target" && window.TEUI?.StateManager) {
        window.TEUI.StateManager.setValue(fieldId, value, source);
      }
      
      // ✅ CRITICAL BRIDGE: Sync Reference changes to StateManager with ref_ prefix
      if (this.currentMode === "reference" && window.TEUI?.StateManager) {
        window.TEUI.StateManager.setValue(`ref_${fieldId}`, value, source);
      }
    },
    
    resetState: function() {
      console.log("S04: Resetting state and clearing localStorage");
      
      // Reset both states to defaults
      TargetState.setDefaults();
      TargetState.saveState();
      ReferenceState.setDefaults();
      ReferenceState.saveState();
      
      console.log("S04: States have been reset to defaults");
      
      // Refresh UI and recalculate
      this.refreshUI();
      calculateAll();
    },
    
    refreshUI: function() {
      // Sync user input fields (d_27-d_31) based on current mode
      const inputFields = ['d_27', 'd_28', 'd_29', 'd_30', 'd_31'];
      
      inputFields.forEach(fieldId => {
        const element = document.querySelector(`[data-field-id="${fieldId}"]`);
        const stateValue = this.getValue(fieldId);
        
        if (element && stateValue !== undefined) {
          if (element.tagName === 'SELECT') {
            element.value = stateValue;
          } else if (element.hasAttribute('contenteditable')) {
            element.textContent = stateValue;
          } else if (element.type === 'text' || element.type === 'number') {
            element.value = stateValue;
          }
        }
      });
      
      console.log(`S04: UI refreshed for ${this.currentMode} mode`);
    },
    
    updateCalculatedDisplayValues: function() {
      const calculatedFields = ['f_27', 'f_28', 'f_29', 'f_30', 'f_31',
                               'g_27', 'g_28', 'g_29', 'g_30', 'g_31',
                               'h_27', 'h_28', 'h_29', 'h_30', 'h_31', 
                               'j_27', 'j_28', 'j_29', 'j_30', 'j_31',
                               'k_27', 'k_28', 'k_29', 'k_30', 'k_31',
                               'l_27', 'l_28', 'l_29', 'l_30', 'l_31',
                               'f_32', 'g_32', 'j_32', 'k_32',
                               'd_33', 'h_33', 'd_34', 'f_34', 'h_34', 'j_34',
                               'd_35', 'f_35'];
      
      calculatedFields.forEach(fieldId => {
        let valueToDisplay;
        
        if (this.currentMode === "reference") {
          // In Reference mode, try to show ref_ values, fallback to regular values
          const refValue = window.TEUI?.StateManager?.getValue(`ref_${fieldId}`);
          const targetValue = window.TEUI?.StateManager?.getValue(fieldId);
          valueToDisplay = refValue !== null && refValue !== undefined ? refValue : targetValue;
          
          // 🐛 DEBUG: Log what we're finding for key subtotal fields
          if (fieldId === "j_32" || fieldId === "k_32" || fieldId === "f_32" || fieldId === "g_32") {
            console.log(`[S04 DEBUG] ${fieldId}: ref_${fieldId}=${refValue}, ${fieldId}=${targetValue}, using=${valueToDisplay}`);
          }
        } else {
          // In Target mode, show regular values
          valueToDisplay = window.TEUI?.StateManager?.getValue(fieldId);
        }

        const element = document.querySelector(`[data-field-id="${fieldId}"]`);
        if (element && valueToDisplay !== null && valueToDisplay !== undefined) {
          const formattedValue = window.TEUI?.formatNumber?.(valueToDisplay, 'number-2dp-comma') ?? valueToDisplay.toString();
          element.textContent = formattedValue;
        }
      });
      
      console.log(`S04: Calculated display values updated for ${this.currentMode} mode`);
    }
  };

  /**
   * Inject Target/Reference toggle controls into section header
   * Standard Pattern A implementation
   */
  function injectHeaderControls() {
    const sectionHeader = document.querySelector("#actualTargetEnergy .section-header");
    if (!sectionHeader || sectionHeader.querySelector(".local-controls-container")) {
      return; // Already setup or header not found
    }

    // Create controls container
    const controlsContainer = document.createElement("div");
    controlsContainer.className = "local-controls-container";
    controlsContainer.style.cssText = "display: flex; align-items: center; gap: 10px; margin-left: auto;";

    // Create Reset button
    const resetButton = document.createElement("button");
    resetButton.textContent = "Reset";
    resetButton.style.cssText = "padding: 4px 8px; font-size: 12px; border: 1px solid #ccc; background: white; cursor: pointer; border-radius: 3px;";
    resetButton.addEventListener("click", (event) => {
      event.stopPropagation();
      if (confirm("Reset all values to defaults?")) {
        ModeManager.resetState();
        console.log("S04: Reset to defaults");
      }
    });

    // Create state indicator
    const stateIndicator = document.createElement("div");
    stateIndicator.textContent = "TARGET";
    stateIndicator.style.cssText = "padding: 4px 8px; font-size: 12px; font-weight: bold; color: white; background-color: rgba(0, 123, 255, 0.5); border-radius: 3px;";

    // Create toggle switch
    const toggleSwitch = document.createElement("div");
    toggleSwitch.style.cssText = "position: relative; width: 40px; height: 20px; background-color: #ccc; border-radius: 10px; cursor: pointer;";

    const slider = document.createElement("div");
    slider.style.cssText = "position: absolute; top: 2px; left: 2px; width: 16px; height: 16px; background-color: white; border-radius: 50%; transition: transform 0.2s;";

    toggleSwitch.appendChild(slider);

    // Toggle Switch Click Handler
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

    // Assemble controls
    controlsContainer.appendChild(resetButton);
    controlsContainer.appendChild(stateIndicator);
    controlsContainer.appendChild(toggleSwitch);
    sectionHeader.appendChild(controlsContainer);

    console.log("✅ S04: Header controls injected successfully");
  }

  /**
   * Complete Ontario emissions factor lookup table (XLOOKUP equivalent)
   * Excel: =IF(D19="ON",XLOOKUP(H12,AEFYear,AEFvalues),IF(D19="AB",650,...))
   */
  const GRID_INTENSITY_FACTORS = {
    ON: {
      default: 51,
      2015: 46,
      2016: 40,
      2017: 18,
      2018: 29,
      2019: 29,
      2020: 36,
      2021: 44,
      2022: 51,
      2023: 67,
      2024: 71,
      2025: 138,
      2026: 145,
      2027: 132,
      2028: 133,
      2029: 126,
      2030: 126,
      2031: 122,
      2032: 122,
      2033: 104,
      2034: 58,
      2035: 40,
      2036: 34,
      2037: 33,
      2038: 32,
      2039: 13,
      2040: 8,
      2041: 3,
      future: 3,
    },
    QC: { default: 1 },
    BC: { default: 12 },
    AB: { default: 650 },
    SK: { default: 720 },
    MB: { default: 3 },
    NS: { default: 600 },
    NB: { default: 340 },
    NL: { default: 30 },
    PE: { default: 12 },
    NT: { default: 180 },
    YT: { default: 2 },
    NU: { default: 200 },
  };

  /**
   * Convert province name to province code
   */
  function getProvinceCode(provinceText) {
    if (!provinceText) return "ON";

    // Direct match for 2-letter codes
    if (provinceText.length === 2) {
      const code = provinceText.toUpperCase();
      if (["ON", "QC", "BC", "AB", "SK", "MB", "NS", "NB", "NL", "PE", "NT", "YT", "NU"].includes(code)) {
        return code;
      }
    }

    provinceText = provinceText.trim().toLowerCase();

    if (provinceText === "ontario" || provinceText === "on") return "ON";
    if (provinceText === "quebec" || provinceText === "québec" || provinceText === "qc") return "QC";
    if (provinceText === "british columbia" || provinceText === "bc") return "BC";
    if (provinceText === "alberta" || provinceText === "ab") return "AB";
    if (provinceText === "saskatchewan" || provinceText === "sk") return "SK";
    if (provinceText === "manitoba" || provinceText === "mb") return "MB";
    if (provinceText === "nova scotia" || provinceText === "ns") return "NS";
    if (provinceText === "new brunswick" || provinceText === "nb") return "NB";
    if (provinceText === "newfoundland and labrador" || provinceText === "nl") return "NL";
    if (provinceText === "prince edward island" || provinceText === "pe") return "PE";
    if (provinceText === "northwest territories" || provinceText === "nt") return "NT";
    if (provinceText === "yukon" || provinceText === "yt") return "YT";
    if (provinceText === "nunavut" || provinceText === "nu") return "NU";

    return "ON"; // Default
  }

  /**
   * Get electricity emission factor based on province and year
   * Implements exact Excel XLOOKUP logic: =IF(D19="ON",XLOOKUP(H12,AEFYear,AEFvalues),...)
   */
  function getElectricityEmissionFactor() {
    // Get province from S03 (d_19) 
    const provinceRaw = getGlobalNumericValue('d_19') || window.TEUI?.StateManager?.getValue('d_19') || 'ON';
    const province = getProvinceCode(provinceRaw);
    
    // Get reporting year from S02 (h_12)
    const year = getGlobalNumericValue('h_12') || 2022;
    
    return getElectricityFactor(province, year);
  }

  /**
   * Lookup emission factor based on province and year
   */
  function getElectricityFactor(province, year) {
    const provinceFactors = GRID_INTENSITY_FACTORS[province] || GRID_INTENSITY_FACTORS["ON"];
    
    // For years beyond 2041, use future value if available
    if (year > 2041 && provinceFactors.future !== undefined) {
      return provinceFactors.future;
    }
    
    // Look up specific year, fall back to default
    return provinceFactors[year] || provinceFactors.default;
  }

  //==========================================================================
  // EXCEL ROW CALCULATIONS (FORMULAE-3039.csv rows 27-35)
  //==========================================================================

  /**
   * Row 27: T.3.1 Total Electricity Use
   * Excel: D27 (actual user input), H27 (target calculated from S15 d_136)
   */
  function calculateRow27() {
    // H27: Target vs Reference electricity from S15
    let targetElectricity;
    if (ModeManager.currentMode === "reference") {
      // In Reference mode, read from S15's Reference calculations
      targetElectricity = getGlobalNumericValue('ref_d_136') || getGlobalNumericValue('d_136') || 0;
    } else {
      // In Target mode, read from S15's Target calculations
      targetElectricity = getGlobalNumericValue('d_136') || 0;
    }
    
    // F27: Convert actual to ekWh (D27 already in kWh)
    const actualElectricity = getGlobalNumericValue('d_27') || 0;
    
    // G27: Emissions from actual (D27 * L27 / 1000)
    const emissionFactor = getElectricityEmissionFactor();
    const actualEmissions = (actualElectricity * emissionFactor) / 1000;
    
    // J27: Convert target to ekWh (H27 already in kWh)
    const targetElectricity_ekWh = targetElectricity;
    
    // K27: Emissions from target (H27 * L27 / 1000)
    const targetEmissions = (targetElectricity * emissionFactor) / 1000;
    
    // Store calculated values
    setCalculatedValue('h_27', targetElectricity);
    setCalculatedValue('f_27', actualElectricity);
    setCalculatedValue('g_27', actualEmissions);
    setCalculatedValue('j_27', targetElectricity_ekWh);
    setCalculatedValue('k_27', targetEmissions);
    setCalculatedValue('l_27', emissionFactor, 'integer'); // Emission factor as integer
  }

  /**
   * Row 28: T.3.2 Total Fossil Gas Use
   * Excel: D28 (actual), H28 (target calculated)
   */
  function calculateRow28() {
    // Get actual gas use (user input)
    const actualGas = getGlobalNumericValue('d_28') || 0;
    
    // H28: Target gas use (from S15 calculations if applicable)
    const targetGas = getGlobalNumericValue('h_28') || 0;
    
    // F28: Convert actual to ekWh (D28 * 0.0373 * 277.7778)
    const actualGas_ekWh = actualGas * 0.0373 * 277.7778;
    
    // G28: Emissions from actual (D28 * 1921 / 1000)
    const actualEmissions = (actualGas * 1921) / 1000;
    
    // J28: Convert target to ekWh
    const targetGas_ekWh = targetGas * 0.0373 * 277.7778;
    
    // K28: Emissions from target
    const targetEmissions = (targetGas * 1921) / 1000;
    
    setCalculatedValue('h_28', targetGas);
    setCalculatedValue('f_28', actualGas_ekWh);
    setCalculatedValue('g_28', actualEmissions);
    setCalculatedValue('j_28', targetGas_ekWh);
    setCalculatedValue('k_28', targetEmissions);
    setCalculatedValue('l_28', 1921, 'integer'); // Gas emission factor
  }

  /**
   * Row 29: T.3.3 Total Propane Use
   */
  function calculateRow29() {
    const actualPropane = getGlobalNumericValue('d_29') || 0;
    
    // ✅ Target propane mirrors actual input (user-controlled resource)
    const targetPropane = actualPropane;
    
    // F29: Convert to ekWh (D29 * 14.019)
    const actualPropane_ekWh = actualPropane * 14.019;
    const actualEmissions = (actualPropane * 2970) / 1000;
    
    const targetPropane_ekWh = targetPropane * 14.019;
    const targetEmissions = (targetPropane * 2970) / 1000;
    
    setCalculatedValue('h_29', targetPropane);
    setCalculatedValue('f_29', actualPropane_ekWh);
    setCalculatedValue('g_29', actualEmissions);
    setCalculatedValue('j_29', targetPropane_ekWh);
    setCalculatedValue('k_29', targetEmissions);
    setCalculatedValue('l_29', 2970, 'integer'); // Propane emission factor
  }

  /**
   * Row 30: T.3.4 Total Oil Use
   */
  function calculateRow30() {
    const actualOil = getGlobalNumericValue('d_30') || 0;
    const targetOil = getGlobalNumericValue('h_30') || 0;
    
    // F30: Convert to ekWh (D30 * 36.72 * 0.2777778)
    const actualOil_ekWh = actualOil * 36.72 * 0.2777778;
    const actualEmissions = (actualOil * 2753) / 1000;
    
    const targetOil_ekWh = targetOil * 36.72 * 0.2777778;
    const targetEmissions = (targetOil * 2753) / 1000;
    
    setCalculatedValue('h_30', targetOil);
    setCalculatedValue('f_30', actualOil_ekWh);
    setCalculatedValue('g_30', actualEmissions);
    setCalculatedValue('j_30', targetOil_ekWh);
    setCalculatedValue('k_30', targetEmissions);
    setCalculatedValue('l_30', 2753, 'integer'); // Oil emission factor
  }

  /**
   * Row 31: T.3.5 Total Wood Use
   */
  function calculateRow31() {
    const actualWood = getGlobalNumericValue('d_31') || 0;
    
    // ✅ Target wood mirrors actual input (user-controlled resource)
    const targetWood = actualWood;
    
    // F31: Convert to ekWh (D31 * 1000)
    const actualWood_ekWh = actualWood * 1000;
    const actualEmissions = actualWood * 150; // kgCO2e/m3
    
    const targetWood_ekWh = targetWood * 1000;
    const targetEmissions = targetWood * 150;
    
    setCalculatedValue('h_31', targetWood);
    setCalculatedValue('f_31', actualWood_ekWh);
    setCalculatedValue('g_31', actualEmissions);
    setCalculatedValue('j_31', targetWood_ekWh);
    setCalculatedValue('k_31', targetEmissions);
    setCalculatedValue('l_31', 150, 'integer'); // Wood emission factor
  }

  /**
   * Row 32: E.1.1 Operational GHG & Energy Subtotals
   * Excel: SUM(F27:F31), SUM(G27:G31), SUM(J27:J31), SUM(K27:K31)
   */
  function calculateRow32() {
    // ✅ DEBUG: Log individual values before summing
    const f_27 = ModeManager.getValue('f_27') || 0;
    const f_28 = ModeManager.getValue('f_28') || 0;
    const f_29 = ModeManager.getValue('f_29') || 0;
    const f_30 = ModeManager.getValue('f_30') || 0;
    const f_31 = ModeManager.getValue('f_31') || 0;
    
    const g_27 = ModeManager.getValue('g_27') || 0;
    const g_28 = ModeManager.getValue('g_28') || 0;
    const g_29 = ModeManager.getValue('g_29') || 0;
    const g_30 = ModeManager.getValue('g_30') || 0;
    const g_31 = ModeManager.getValue('g_31') || 0;
    
    const j_27 = ModeManager.getValue('j_27') || 0;
    const j_28 = ModeManager.getValue('j_28') || 0;
    const j_29 = ModeManager.getValue('j_29') || 0;
    const j_30 = ModeManager.getValue('j_30') || 0;
    const j_31 = ModeManager.getValue('j_31') || 0;
    
    const k_27 = ModeManager.getValue('k_27') || 0;
    const k_28 = ModeManager.getValue('k_28') || 0;
    const k_29 = ModeManager.getValue('k_29') || 0;
    const k_30 = ModeManager.getValue('k_30') || 0;
    const k_31 = ModeManager.getValue('k_31') || 0;
    
    // Calculate subtotals
    const actualEnergySum = f_27 + f_28 + f_29 + f_30 + f_31;
    const actualEmissionsSum = g_27 + g_28 + g_29 + g_30 + g_31;
    const targetEnergySum = j_27 + j_28 + j_29 + j_30 + j_31;
    const targetEmissionsSum = k_27 + k_28 + k_29 + k_30 + k_31;
    
    console.log(`[S04] Row 32 Subtotals - F32: ${actualEnergySum}, G32: ${actualEmissionsSum}, J32: ${targetEnergySum}, K32: ${targetEmissionsSum}`);
    
    // ✅ CRITICAL: Store subtotals for downstream consumption
    setCalculatedValue('f_32', actualEnergySum);
    setCalculatedValue('g_32', actualEmissionsSum);
    setCalculatedValue('j_32', targetEnergySum);
    setCalculatedValue('k_32', targetEmissionsSum);
  }

  /**
   * Row 33: T.3.6 Total Net Energy
   * Excel: d_33 = (SUM(F27:F31)-D43-I43)/277.7777, h_33 = (SUM(J27:J31)-I43-D43)/277.7777
   */
  function calculateRow33() {
    // Get energy values
    const f_27 = ModeManager.getValue('f_27') || 0;
    const f_28 = ModeManager.getValue('f_28') || 0;
    const f_29 = ModeManager.getValue('f_29') || 0;
    const f_30 = ModeManager.getValue('f_30') || 0;
    const f_31 = ModeManager.getValue('f_31') || 0;
    
    const j_27 = ModeManager.getValue('j_27') || 0;
    const j_28 = ModeManager.getValue('j_28') || 0;
    const j_29 = ModeManager.getValue('j_29') || 0;
    const j_30 = ModeManager.getValue('j_30') || 0;
    const j_31 = ModeManager.getValue('j_31') || 0;
    
    const d_43 = getGlobalNumericValue('d_43'); // Onsite renewables
    const i_43 = getGlobalNumericValue('i_43'); // Offsite REC
    
    // d_33: Actual Total Net Energy in GJ/yr
    const d_33 = (f_27 + f_28 + f_29 + f_30 + f_31 - d_43 - i_43) / 277.7777;
    
    // h_33: Target Total Net Energy in GJ/yr  
    const h_33 = (j_27 + j_28 + j_29 + j_30 + j_31 - i_43 - d_43) / 277.7777;
    
    setCalculatedValue('d_33', d_33);
    setCalculatedValue('h_33', h_33);
  }

  /**
   * Row 34: T.3.7 Annual Percapita Energy
   * Excel: Per-person energy calculations based on occupancy
   */
  function calculateRow34() {
    const f_32 = ModeManager.getValue('f_32') || 0; // Actual energy total
    const d_33 = ModeManager.getValue('d_33') || 0; // Actual GJ
    const j_32 = ModeManager.getValue('j_32') || 0; // Target energy total
    const h_33 = ModeManager.getValue('h_33') || 0; // Target GJ
    const d_63 = getGlobalNumericValue('d_63') || 1; // Occupants (avoid division by zero)
    
    const d_34 = f_32 / d_63; // Actual energy per person
    const f_34 = d_33 / d_63; // Actual GJ per person
    const h_34 = j_32 / d_63; // Target energy per person
    const j_34 = h_33 / d_63; // Target GJ per person
    
    setCalculatedValue('d_34', d_34);
    setCalculatedValue('f_34', f_34);
    setCalculatedValue('h_34', h_34);
    setCalculatedValue('j_34', j_34);
  }

  /**
   * Row 35: T.3.8 Primary Energy
   * Excel: d_35 = IF(D14="Targeted Use", J27*H35, F27*H35), f_35 = D35/H15
   */
  function calculateRow35() {
    const d_14 = getGlobalNumericValue('d_14') || window.TEUI?.StateManager?.getValue('d_14'); // Building status
    const j_27 = ModeManager.getValue('j_27') || 0;
    const f_27 = ModeManager.getValue('f_27') || 0;
    const h_35 = ModeManager.getValue('h_35') || 1.0; // PER Factor
    const h_15 = getGlobalNumericValue('h_15') || 1; // Conditioned area
    
    // d_35: Primary Energy - conditional based on building status
    const d_35 = (d_14 === "Targeted Use") ? j_27 * h_35 : f_27 * h_35;
    
    // f_35: Primary Energy Intensity (kWh/m²/yr)
    const f_35 = d_35 / h_15;
    
    setCalculatedValue('d_35', d_35);
    setCalculatedValue('f_35', f_35);
  }

  //==========================================================================
  // MAIN CALCULATION FUNCTION
  //==========================================================================

  /**
   * Calculate all S04 values according to Excel methodology
   * DUAL-ENGINE PATTERN: Runs both Target and Reference calculations in parallel
   */
  function calculateAll() {
    console.log(`[S04] Starting dual-engine Excel-compliant calculations`);
    
    try {
      // Store current mode
      const originalMode = ModeManager.currentMode;
      
      // ✅ DUAL-ENGINE: Calculate Target model
      ModeManager.currentMode = "target";
      console.log("[S04] Calculating Target model");
      calculateTargetModel();
      
      // ✅ DUAL-ENGINE: Calculate Reference model
      ModeManager.currentMode = "reference";
      console.log("[S04] Calculating Reference model");
      calculateReferenceModel();
      
      // Restore original mode
      ModeManager.currentMode = originalMode;
      
      console.log(`[S04] Dual-engine calculations completed successfully`);
    } catch (error) {
      console.error(`[S04] Calculation error:`, error);
    }
  }
  
  /**
   * Calculate Target model (standard calculations)
   */
  function calculateTargetModel() {
    // Calculate each Excel row in sequence for Target
    calculateRow27(); // Electricity
    calculateRow28(); // Gas
    calculateRow29(); // Propane
    calculateRow30(); // Oil
    calculateRow31(); // Wood
    calculateRow32(); // Subtotals
    calculateRow33(); // Total Net Energy
    calculateRow34(); // Annual Percapita Energy
    calculateRow35(); // Primary Energy
    
    console.log("[S04] Target model calculations complete");
  }
  
  /**
   * Calculate Reference model (for building code comparison)
   */
  function calculateReferenceModel() {
    // Store current mode and switch to reference for calculations
    const originalMode = ModeManager.currentMode;
    ModeManager.currentMode = "reference";
    
    // Override setCalculatedValue to use Reference storage during these calculations
    const originalSetCalculatedValue = setCalculatedValue;
    setCalculatedValue = function(fieldId, rawValue, formatType) {
      setReferenceCalculatedValue(fieldId, rawValue, formatType);
    };
    
    try {
      // Calculate each Excel row in sequence for Reference
      // Note: For S04, Reference mostly mirrors Target since it's utility bill data
      // The main differences are in h_27-h_31 values from S15 reference calculations
      calculateRow27(); // Electricity (uses ref_d_136 from S15)
      calculateRow28(); // Gas
      calculateRow29(); // Propane
      calculateRow30(); // Oil
      calculateRow31(); // Wood
      calculateRow32(); // Subtotals
      calculateRow33(); // Total Net Energy
      calculateRow34(); // Annual Percapita Energy
      calculateRow35(); // Primary Energy
      
      console.log("[S04] Reference model calculations complete");
    } finally {
      // Restore original functions
      setCalculatedValue = originalSetCalculatedValue;
      ModeManager.currentMode = originalMode;
    }
  }

  //==========================================================================
  // SECTION DEFINITION (PROPER STRUCTURE)
  //==========================================================================

  const sectionRows = {
    metadata: {
      sectionId: "actualTargetEnergy",
      sectionName: "Actual vs. Target Energy & Carbon",
      sectionNumber: "04",
    },

    header: {
      id: "04-ID",
      rowId: "04-ID",
      label: "Section 04 Units",
      cells: {
        b: {},
        c: { content: "C", classes: ["section-subheader"] },
        d: { content: "ACTUAL ENERGY", classes: ["section-subheader"] },
        e: { content: "UNITS", classes: ["section-subheader"] },
        f: { content: "ACTUAL NET", classes: ["section-subheader"] },
        g: {
          content: "E.1 EMISSIONS\nkgCO2e/yr",
          classes: ["section-subheader"],
          style: "white-space: pre-line;",
        },
        h: { content: "TARGET ENERGY", classes: ["section-subheader"] },
        i: { content: "UNITS", classes: ["section-subheader"] },
        j: { content: "TARGET NET", classes: ["section-subheader"] },
        k: {
          content: "E.1 EMISSIONS\nkgCO2e/yr",
          classes: ["section-subheader"],
          style: "white-space: pre-line;",
        },
        l: { content: "EMISSION FACTORS", classes: ["section-subheader"] },
        m: { content: "UNITS", classes: ["section-subheader"] },
        n: { content: "", classes: ["section-subheader"] },
      },
    },

    // Row 27: T.3.1 Total Electricity Use
    27: {
      id: "T.3.1",
      rowId: "T.3.1",
      label: "Total Electricity Use",
      cells: {
        b: {},
        c: { label: "T.3.1 Total Electricity Use" },
        d: {
          fieldId: "d_27",
          type: "editable",
          value: "132938.00",
          classes: ["user-input"],
          section: "actualTargetEnergy",
        },
        e: { content: "kWh/yr" },
        f: {
          fieldId: "f_27",
          type: "calculated",
          value: "0",
          dependencies: ["d_27"],
          classes: ["calculated-value"],
          section: "actualTargetEnergy",
        },
        g: {
          fieldId: "g_27",
          type: "calculated",
          value: "0",
          dependencies: ["f_27", "l_27"],
          classes: ["calculated-value"],
          section: "actualTargetEnergy",
        },
        h: {
          fieldId: "h_27",
          type: "calculated",
          value: "0",
          dependencies: ["d_136"],
          classes: ["calculated-value"],
          section: "actualTargetEnergy",
        },
        i: { content: "kWh/yr" },
        j: {
          fieldId: "j_27",
          type: "calculated",
          value: "0",
          dependencies: ["h_27"],
          classes: ["calculated-value"],
          section: "actualTargetEnergy",
        },
        k: {
          fieldId: "k_27",
          type: "calculated",
          value: "0",
          dependencies: ["j_27", "l_27"],
          classes: ["calculated-value"],
          section: "actualTargetEnergy",
        },
        l: {
          fieldId: "l_27",
          type: "calculated",
          value: "30",
          dependencies: ["d_19", "h_12"],
          classes: ["calculated-value"],
          section: "actualTargetEnergy",
        },
        m: { content: "gCO2e/kWh" },
        n: {},
      },
    },

    // Row 28: T.3.2 Total Fossil Gas Use
    28: {
      id: "T.3.2",
      rowId: "T.3.2",
      label: "Total Fossil Gas Use",
      cells: {
        b: {},
        c: { label: "T.3.2 Total Fossil Gas Use" },
        d: {
          fieldId: "d_28",
          type: "editable",
          value: "0",
          classes: ["user-input"],
          section: "actualTargetEnergy",
        },
        e: { content: "m³/yr" },
        f: {
          fieldId: "f_28",
          type: "calculated",
          value: "0",
          dependencies: ["d_28"],
          classes: ["calculated-value"],
          section: "actualTargetEnergy",
        },
        g: {
          fieldId: "g_28",
          type: "calculated",
          value: "0",
          dependencies: ["d_28"],
          classes: ["calculated-value"],
          section: "actualTargetEnergy",
        },
        h: {
          fieldId: "h_28",
          type: "calculated",
          value: "0",
          dependencies: [],
          classes: ["calculated-value"],
          section: "actualTargetEnergy",
        },
        i: { content: "m³/yr" },
        j: {
          fieldId: "j_28",
          type: "calculated",
          value: "0",
          dependencies: ["h_28"],
          classes: ["calculated-value"],
          section: "actualTargetEnergy",
        },
        k: {
          fieldId: "k_28",
          type: "calculated",
          value: "0",
          dependencies: ["h_28"],
          classes: ["calculated-value"],
          section: "actualTargetEnergy",
        },
        l: { content: "1921" },
        m: { content: "gCO2e/m³" },
        n: {},
      },
    },

    // Row 29: T.3.3 Total Propane Use
    29: {
      id: "T.3.3",
      rowId: "T.3.3",
      label: "Total Propane Use",
      cells: {
        b: {},
        c: { label: "T.3.3 Total Propane Use" },
        d: {
          fieldId: "d_29",
          type: "editable",
          value: "0",
          classes: ["user-input"],
          section: "actualTargetEnergy",
        },
        e: { content: "kg/yr" },
        f: {
          fieldId: "f_29",
          type: "calculated",
          value: "0",
          dependencies: ["d_29"],
          classes: ["calculated-value"],
          section: "actualTargetEnergy",
        },
        g: {
          fieldId: "g_29",
          type: "calculated",
          value: "0",
          dependencies: ["d_29"],
          classes: ["calculated-value"],
          section: "actualTargetEnergy",
        },
        h: {
          fieldId: "h_29",
          type: "calculated",
          value: "0",
          dependencies: ["d_29"],
          classes: ["calculated-value"],
          section: "actualTargetEnergy",
        },
        i: { content: "kg/yr" },
        j: {
          fieldId: "j_29",
          type: "calculated",
          value: "0",
          dependencies: ["h_29"],
          classes: ["calculated-value"],
          section: "actualTargetEnergy",
        },
        k: {
          fieldId: "k_29",
          type: "calculated",
          value: "0",
          dependencies: ["h_29"],
          classes: ["calculated-value"],
          section: "actualTargetEnergy",
        },
        l: { content: "2970" },
        m: { content: "gCO2e/kg" },
        n: {},
      },
    },

    // Row 30: T.3.4 Total Oil Use
    30: {
      id: "T.3.4",
      rowId: "T.3.4",
      label: "Total Oil Use",
      cells: {
        b: {},
        c: { label: "T.3.4 Total Oil Use" },
        d: {
          fieldId: "d_30",
          type: "editable",
          value: "0",
          classes: ["user-input"],
          section: "actualTargetEnergy",
        },
        e: { content: "litres/yr" },
        f: {
          fieldId: "f_30",
          type: "calculated",
          value: "0",
          dependencies: ["d_30"],
          classes: ["calculated-value"],
          section: "actualTargetEnergy",
        },
        g: {
          fieldId: "g_30",
          type: "calculated",
          value: "0",
          dependencies: ["d_30"],
          classes: ["calculated-value"],
          section: "actualTargetEnergy",
        },
        h: {
          fieldId: "h_30",
          type: "calculated",
          value: "0",
          dependencies: [],
          classes: ["calculated-value"],
          section: "actualTargetEnergy",
        },
        i: { content: "litres/yr" },
        j: {
          fieldId: "j_30",
          type: "calculated",
          value: "0",
          dependencies: ["h_30"],
          classes: ["calculated-value"],
          section: "actualTargetEnergy",
        },
        k: {
          fieldId: "k_30",
          type: "calculated",
          value: "0",
          dependencies: ["h_30"],
          classes: ["calculated-value"],
          section: "actualTargetEnergy",
        },
        l: { content: "2753" },
        m: { content: "gCO2e/litre" },
        n: {},
      },
    },

    // Row 31: T.3.5 Total Wood Use
    31: {
      id: "T.3.5",
      rowId: "T.3.5",
      label: "Total Wood Use",
      cells: {
        b: {},
        c: { label: "T.3.5 Total Wood Use" },
        d: {
          fieldId: "d_31",
          type: "editable",
          value: "0",
          classes: ["user-input"],
          section: "actualTargetEnergy",
        },
        e: { content: "m³/yr" },
        f: {
          fieldId: "f_31",
          type: "calculated",
          value: "0",
          dependencies: ["d_31"],
          classes: ["calculated-value"],
          section: "actualTargetEnergy",
        },
        g: {
          fieldId: "g_31",
          type: "calculated",
          value: "0",
          dependencies: ["d_31"],
          classes: ["calculated-value"],
          section: "actualTargetEnergy",
        },
        h: {
          fieldId: "h_31",
          type: "calculated",
          value: "0",
          dependencies: ["d_31"],
          classes: ["calculated-value"],
          section: "actualTargetEnergy",
        },
        i: { content: "m³/yr" },
        j: {
          fieldId: "j_31",
          type: "calculated",
          value: "0",
          dependencies: ["h_31"],
          classes: ["calculated-value"],
          section: "actualTargetEnergy",
        },
        k: {
          fieldId: "k_31",
          type: "calculated",
          value: "0",
          dependencies: ["h_31"],
          classes: ["calculated-value"],
          section: "actualTargetEnergy",
        },
        l: { content: "150" },
        m: { content: "kgCO2e/m³" },
        n: {},
      },
    },

    // Row 32: E.1.1 Operational GHG & Energy Subtotals
    32: {
      id: "E.1.1",
      rowId: "E.1.1",
      label: "Operational GHG & Energy Subtotals",
      cells: {
        b: {},
        c: { label: "E.1.1 Operational GHG & Energy Subtotals" },
        d: { content: "" },
        e: { content: "" },
        f: {
          fieldId: "f_32",
          type: "calculated",
          value: "0",
          dependencies: ["f_27", "f_28", "f_29", "f_30", "f_31"],
          classes: ["calculated-value"],
          section: "actualTargetEnergy",
        },
        g: {
          fieldId: "g_32",
          type: "calculated",
          value: "0",
          dependencies: ["g_27", "g_28", "g_29", "g_30", "g_31"],
          classes: ["calculated-value"],
          section: "actualTargetEnergy",
        },
        h: { content: "" },
        i: { content: "" },
        j: {
          fieldId: "j_32",
          type: "calculated",
          value: "0",
          dependencies: ["j_27", "j_28", "j_29", "j_30", "j_31"],
          classes: ["calculated-value"],
          section: "actualTargetEnergy",
        },
        k: {
          fieldId: "k_32",
          type: "calculated",
          value: "0",
          dependencies: ["k_27", "k_28", "k_29", "k_30", "k_31"],
          classes: ["calculated-value"],
          section: "actualTargetEnergy",
        },
        l: { content: "" },
        m: { content: "" },
        n: {},
      },
    },

    // Row 33: T.3.6 Total Net Energy
    33: {
      id: "T.3.6",
      rowId: "T.3.6",
      label: "Total Net Energy",
      cells: {
        b: {},
        c: { label: "T.3.6 Total Net Energy" },
        d: {
          fieldId: "d_33",
          type: "calculated",
          value: "478.58",
          dependencies: ["f_27", "f_28", "f_29", "f_30", "f_31", "d_43", "i_43"],
          classes: ["calculated-value"],
          section: "actualTargetEnergy",
        },
        e: { content: "GJ/yr" },
        f: { content: "" },
        g: { content: "" },
        h: {
          fieldId: "h_33",
          type: "calculated",
          value: "477.96",
          dependencies: ["j_27", "j_28", "j_29", "j_30", "j_31", "i_43", "d_43"],
          classes: ["calculated-value"],
          section: "actualTargetEnergy",
        },
        i: { content: "GJ/yr" },
        j: { content: "" },
        k: { content: "" },
        l: { content: "" },
        m: { content: "" },
        n: {},
      },
    },

    // Row 34: T.3.7 Annual Percapita Energy
    34: {
      id: "T.3.7",
      rowId: "T.3.7",
      label: "Annual Percapita Energy",
      cells: {
        b: {},
        c: { label: "T.3.7 Annual Percapita Energy" },
        d: {
          fieldId: "d_34",
          type: "calculated",
          value: "1055.06",
          dependencies: ["f_32", "d_63"],
          classes: ["calculated-value"],
          section: "actualTargetEnergy",
        },
        e: { content: "kWh Actual" },
        f: {
          fieldId: "f_34",
          type: "calculated",
          value: "3.80",
          dependencies: ["d_33", "d_63"],
          classes: ["calculated-value"],
          section: "actualTargetEnergy",
        },
        g: { content: "GJ Actual" },
        h: {
          fieldId: "h_34",
          type: "calculated",
          value: "1053.70",
          dependencies: ["j_32", "d_63"],
          classes: ["calculated-value"],
          section: "actualTargetEnergy",
        },
        i: { content: "kWh Target" },
        j: {
          fieldId: "j_34",
          type: "calculated",
          value: "3.79",
          dependencies: ["h_33", "d_63"],
          classes: ["calculated-value"],
          section: "actualTargetEnergy",
        },
        k: { content: "GJ Target" },
        l: { content: "" },
        m: { content: "" },
        n: {},
      },
    },

    // Row 35: T.3.8 Primary Energy
    35: {
      id: "T.3.8",
      rowId: "T.3.8",
      label: "Primary Energy",
      cells: {
        b: {},
        c: { label: "T.3.8 Primary Energy" },
        d: {
          fieldId: "d_35",
          type: "calculated",
          value: "132938.00",
          dependencies: ["d_14", "j_27", "h_35", "f_27"],
          classes: ["calculated-value"],
          section: "actualTargetEnergy",
        },
        e: { content: "kWh/yr" },
        f: {
          fieldId: "f_35",
          type: "calculated",
          value: "93.15",
          dependencies: ["d_35", "h_15"],
          classes: ["calculated-value"],
          section: "actualTargetEnergy",
        },
        g: { content: "kWh/m²/yr" },
        h: {
          fieldId: "h_35",
          type: "editable",
          value: "1.0",
          classes: ["user-input"],
          section: "actualTargetEnergy",
        },
        i: { content: "PER Factor" },
        j: { content: "" },
        k: { content: "" },
        l: { content: "" },
        m: { content: "" },
        n: {},
      },
    },
  };

  //==========================================================================
  // FIELD DEFINITIONS (EXTRACTED FROM SECTIONROWS)
  //==========================================================================

  function getFields() {
    const fields = {};
    const sectionId = sectionRows.metadata.sectionId;

    // Extract field definitions from all rows except the header
    Object.entries(sectionRows).forEach(([rowKey, row]) => {
      // Skip metadata and header
      if (rowKey === "metadata" || rowKey === "header") return;
      if (!row.cells) return;

      // Process each cell in the row
      Object.entries(row.cells).forEach(([_colKey, cell]) => {
        if (cell.fieldId && cell.type) {
          // Create field definition with all relevant properties
          fields[cell.fieldId] = {
            type: cell.type,
            label: cell.label || row.label,
            defaultValue: cell.value || "",
            section: cell.section || sectionId,
          };

          // Copy additional field properties if they exist
          if (cell.dependencies) fields[cell.fieldId].dependencies = cell.dependencies;
          if (cell.classes) fields[cell.fieldId].classes = cell.classes;
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

    // Extract dropdown options from all cells with dropdownId
    Object.values(sectionRows).forEach((row) => {
      if (typeof row !== "object" || row === null || !row.cells) return;

      Object.values(row.cells).forEach((cell) => {
        if (cell.dropdownId && cell.options) {
          options[cell.dropdownId] = cell.options;
        }
      });
    });

    return options;
  }

  function getLayout() {
    // Standard pattern: Generate layout from sectionRows
    const layoutRows = [];

    // First add the header row if it exists
    if (sectionRows["header"]) {
      layoutRows.push(createLayoutRow(sectionRows["header"]));
    }

    // Then add all other rows in their original order, excluding header and metadata
    Object.entries(sectionRows).forEach(([key, row]) => {
      if (key !== "header" && key !== "metadata") {
        layoutRows.push(createLayoutRow(row));
      }
    });

    return { rows: layoutRows };
  }

  function createLayoutRow(row) {
    // Create standard row structure
    const rowDef = {
      id: row.id || row.rowId,
      cells: [
        {}, // Empty column A
        {}, // ID column B (auto-populated by FieldManager)
      ],
    };

    // Add cells C through N based on the row definition
    const columns = [
      "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n",
    ];

    // For each column, add the cell definition if it exists in the row
    columns.forEach((col) => {
      if (row.cells && row.cells[col]) {
        // Create a simplified cell definition for the renderer
        const cell = { ...row.cells[col] };

        // Special handling for column C to support both label patterns
        if (col === "c") {
          // If using content+type pattern, convert to label pattern
          if (cell.type === "label" && cell.content && !cell.label) {
            cell.label = cell.content;
            delete cell.type;
            delete cell.content;
          }
          // If neither label nor content exists, use row's label as fallback
          else if (!cell.label && !cell.content && row.label) {
            cell.label = row.label;
          }
          // Ensure cell.label exists if defined
          else if (!cell.label && cell.content) {
            cell.label = cell.content;
            delete cell.content;
          }
        }

        // Remove field-specific properties that aren't needed for rendering
        delete cell.getOptions;
        delete cell.section;
        delete cell.dependencies;

        rowDef.cells.push(cell);
      } else {
        // Add empty cell if not defined
        // Special handling for column C - use row's label if available
        if (col === "c" && !row.cells?.c && row.label) {
          rowDef.cells.push({ label: row.label });
        } else {
          // Otherwise add empty cell
          rowDef.cells.push({});
        }
      }
    });

    return rowDef;
  }

  function setupEventHandlers() {
    // Listen for user input changes on actual energy fields and PER factor
    ['d_27', 'd_28', 'd_29', 'd_30', 'd_31', 'h_35'].forEach(fieldId => {
      const element = document.querySelector(`[data-field-id="${fieldId}"]`);
      if (element) {
        element.addEventListener('blur', function() {
          const value = window.TEUI?.parseNumeric?.(this.value, 0) ?? 0;
          ModeManager.setValue(fieldId, value, 'user-modified');
          console.log(`[S04] User modified ${fieldId}: ${value}`);
          calculateAll(); // Recalculate when user changes values
        });
      }
    });

    // ✅ CRITICAL: Listen for external dependencies that affect S04 calculations
    if (window.TEUI?.StateManager?.addListener) {
      // React to S15's target electricity calculation
      window.TEUI.StateManager.addListener('d_136', () => {
        console.log(`[S04] S15 target electricity changed: d_136`);
        calculateAll();
      });
      
      // React to S15's reference electricity calculation
      window.TEUI.StateManager.addListener('ref_d_136', () => {
        console.log(`[S04] S15 reference electricity changed: ref_d_136`);
        calculateAll();
      });
      
      // ✅ CRITICAL: React to province changes from S03 (affects emission factors)
      window.TEUI.StateManager.addListener('d_19', () => {
        console.log(`[S04] Province changed, updating emission factors: d_19`);
        calculateAll(); // Emission factors depend on province
      });
      
      // ✅ CRITICAL: React to reporting year changes from S02 (affects Ontario emission factors)
      window.TEUI.StateManager.addListener('h_12', () => {
        console.log(`[S04] Reporting year changed, updating emission factors: h_12`);
        calculateAll(); // Emission factors depend on year (especially Ontario XLOOKUP)
      });

      // React to conditioned area changes (affects energy intensity)
      window.TEUI.StateManager.addListener('h_15', () => {
        console.log(`[S04] Conditioned area changed: h_15`);
        calculateAll();
      });

      // React to occupancy changes (affects per-capita calculations)
      window.TEUI.StateManager.addListener('d_63', () => {
        console.log(`[S04] Occupancy changed: d_63`);
        calculateAll();
      });

      // React to building status changes (affects primary energy calculation)
      window.TEUI.StateManager.addListener('d_14', () => {
        console.log(`[S04] Building status changed: d_14`);
        calculateAll();
      });
    }
  }

  //==========================================================================
  // PUBLIC API
  //==========================================================================

  return {
    // Core functions
    getFields: getFields,
    getLayout: getLayout,
    
    // Calculation
    calculateAll: calculateAll,
    
    // Pattern A Mode management
    switchMode: function(mode) {
      ModeManager.switchMode(mode);
    },
    
    // Event setup - Pattern A initialization
    onSectionRendered: function() {
      console.log('[S04] Pattern A S04 section rendered');
      
      // Initialize Pattern A dual-state architecture
      ModeManager.initialize();
      
      // Inject header controls for Target/Reference toggle
      injectHeaderControls();
      
      // Setup event handlers for user inputs
      setupEventHandlers();
      
      // Run initial calculations
      calculateAll();
    },
    
    // Expose ModeManager for global toggle integration
    ModeManager: ModeManager
  };
})();