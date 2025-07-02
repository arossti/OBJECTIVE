/**
 * 4011-Section03-CLEAN.js
 * Climate Calculations (Section 3) module for TEUI Calculator 4.011
 * 
 * REFACTORED FOR 100% DUAL-STATE ISOLATION - ZERO TOLERANCE FOR CONTAMINATION
 * Preserves perfect dual-location capability (Alexandria vs Attawapiskat)
 * Template implementation following COMPREHENSIVE-WORKPLAN.md requirements
 */

window.TEUI = window.TEUI || {};
window.TEUI.SectionModules = window.TEUI.SectionModules || {};

// Section-specific namespace
window.TEUI.sect03 = window.TEUI.sect03 || {};

window.TEUI.SectionModules.sect03 = (function () {
  //==========================================================================
  // DUAL-STATE MODE MANAGEMENT (REQUIRED PATTERN)
  //==========================================================================
  const ModeManager = {
    currentMode: "target",
    switchMode: function(newMode) {
      if (newMode !== "target" && newMode !== "reference") return;
      this.currentMode = newMode;
      console.log(`S03: Switched to ${newMode.toUpperCase()} mode`);
      
      // Apply Reference defaults when switching to Reference mode
      if (newMode === "reference") {
        this.setReferenceDefaults();
        this.loadReferenceDataAndCalculate();
      }
      
      this.refreshUI();
    },

    setReferenceDefaults: function() {
      // Different location/settings for Reference mode (demonstrating dual capability)
      const referenceDefaults = {
        ref_d_19: "ON",           // Province: Ontario
        ref_h_19: "Attawapiskat", // City: Attawapiskat (different climate zone)
        ref_h_20: "Future",       // Timeframe: Future (2021-2050)
        ref_h_21: "Static",       // Capacitance: Static setting
        ref_i_21: "0",            // Capacitance percentage: 0% (Static mode)
        ref_m_19: "120",          // Days Cooling: 120
        ref_l_24: "24",           // Cooling Override: 24°C
      };

      Object.entries(referenceDefaults).forEach(([fieldId, defaultValue]) => {
        window.TEUI?.StateManager?.setValue(fieldId, defaultValue, "default");
      });
    },

    refreshUI: function() {
      const prefix = this.currentMode === "target" ? "target_" : "ref_";
      
      // Update all dropdowns from correct state hemisphere
      const dropdowns = [
        { selector: '[data-dropdown-id="dd_d_19"]', fieldId: 'd_19' },
        { selector: '[data-dropdown-id="dd_h_19"]', fieldId: 'h_19' },
        { selector: '[data-dropdown-id="dd_h_20"]', fieldId: 'h_20' },
        { selector: '[data-dropdown-id="dd_h_21"]', fieldId: 'h_21' }
      ];

      dropdowns.forEach(({selector, fieldId}) => {
        const element = document.querySelector(selector);
        if (element) {
          const value = window.TEUI?.StateManager?.getValue(`${prefix}${fieldId}`);
          if (value) element.value = value;
        }
      });

      // Update sliders and other fields
      const slider = document.querySelector('input.form-range[data-field-id="i_21"]');
      if (slider) {
        const value = window.TEUI?.StateManager?.getValue(`${prefix}i_21`) || "50";
        slider.value = value;
        const display = slider.parentElement?.querySelector('.slider-value');
        if (display) display.textContent = value + "%";
      }

      // Refresh calculations and weather data
      updateWeatherData();
    },

    loadReferenceDataAndCalculate: function() {
      const d13Element = document.querySelector('[data-dropdown-id="dd_d_13"]');
      const currentStandardKey = d13Element ? d13Element.value : "NBC 9.36";
      
      if (window.TEUI?.StateManager?.loadReferenceData) {
        window.TEUI.StateManager.loadReferenceData(currentStandardKey);
        if (window.TEUI?.Calculator?.calculateAll) {
          window.TEUI.Calculator.calculateAll();
        }
      }
    }
  };

  // Expose ModeManager for global toggle functionality
  window.TEUI.sect03.ModeManager = ModeManager;

  //==========================================================================
  // HELPER FUNCTIONS (100% STATE ISOLATION - NO FALLBACKS)
  //==========================================================================
  
  function getNumericValue(fieldId, defaultValue = 0) {
    const prefix = ModeManager.currentMode === "target" ? "target_" : "ref_";
    const value = window.TEUI?.StateManager?.getValue(`${prefix}${fieldId}`);
    // NO FALLBACK to global state - strict prefix-only access
    return window.TEUI?.parseNumeric?.(value, defaultValue) ?? defaultValue;
  }

  function getFieldValue(fieldId, defaultValue = "") {
    const prefix = ModeManager.currentMode === "target" ? "target_" : "ref_";
    const value = window.TEUI?.StateManager?.getValue(`${prefix}${fieldId}`);
    // NO FALLBACK to DOM or global state - strict prefix-only access
    return value === null || value === undefined ? defaultValue : value;
  }

  function setFieldValue(fieldId, value, fieldType = "calculated") {
    const prefix = ModeManager.currentMode === "target" ? "target_" : "ref_";
    const prefixedFieldId = `${prefix}${fieldId}`;

    // Store with prefix for dual-state isolation
    if (window.TEUI?.StateManager) {
      window.TEUI.StateManager.setValue(prefixedFieldId, value.toString(), fieldType);
    }

    // DOM updates ONLY in target mode for key climate fields
    if (ModeManager.currentMode === "target" && 
        (fieldId === "d_20" || fieldId === "d_21" || fieldId === "d_22" || 
         fieldId === "h_22" || fieldId === "j_19" || fieldId === "h_23" || fieldId === "h_24")) {
      
      // Update global state for DOM display
      if (window.TEUI?.StateManager) {
        window.TEUI.StateManager.setValue(fieldId, value.toString(), fieldType);
      }

      // Update DOM element
      const element = document.querySelector(`[data-field-id="${fieldId}"]`);
      if (element) {
        const formatType = getFieldFormat(fieldId);
        const formattedValue = window.TEUI?.formatNumber?.(value, formatType) ?? value.toString();
        element.textContent = formattedValue;
      }
    }
  }

  function getFieldFormat(fieldId) {
    const formatMap = {
      d_20: "number-0dp",      // HDD
      d_21: "number-0dp",      // CDD  
      d_22: "number-0dp",      // GFHDD
      h_22: "number-0dp",      // GFCDD
      j_19: "number-1dp",      // Climate Zone
      h_23: "number-1dp",      // Heating Setpoint
      h_24: "number-1dp",      // Cooling Setpoint
      m_19: "number-0dp",      // Cooling Days
      l_24: "number-1dp",      // Cooling Override
    };
    return formatMap[fieldId] || "number-2dp";
  }

  //==========================================================================
  // CLIMATE DATA SERVICE
  //==========================================================================
  const ClimateDataService = {
    getProvinces: function() {
      if (!window.TEUI?.ClimateData) return [];
      return Object.keys(window.TEUI.ClimateData).sort();
    },

    getCitiesForProvince: function(province) {
      if (!window.TEUI?.ClimateData || !window.TEUI.ClimateData[province]) return [];
      return Object.keys(window.TEUI.ClimateData[province]).sort();
    },

    getCityData: function(province, city) {
      if (!window.TEUI?.ClimateData || 
          !window.TEUI.ClimateData[province] || 
          !window.TEUI.ClimateData[province][city]) {
        return null;
      }
      return window.TEUI.ClimateData[province][city];
    },

    getProvinceFullName: function(abbr) {
      const provinceNames = {
        AB: "Alberta", BC: "British Columbia", MB: "Manitoba", NB: "New Brunswick",
        NL: "Newfoundland and Labrador", NS: "Nova Scotia", NT: "Northwest Territories",
        NU: "Nunavut", ON: "Ontario", PE: "Prince Edward Island", QC: "Québec",
        SK: "Saskatchewan", YT: "Yukon"
      };
      return provinceNames[abbr] || abbr;
    }
  };

  //==========================================================================
  // CALCULATION FUNCTIONS (MODE-AWARE)
  //==========================================================================

  function updateWeatherData() {
    const province = getFieldValue("d_19");
    const city = getFieldValue("h_19");
    const timeframe = getFieldValue("h_20") || "Present";

    if (!province || !city) return;

    const cityData = ClimateDataService.getCityData(province, city);
    if (!cityData) return;

    // Get timeframe-specific data
    const timeframeSuffix = timeframe === "Future" ? "_Future" : "";
    const hdd = cityData[`HDD18${timeframeSuffix}`] || cityData.HDD18 || 0;
    const cdd = cityData[`CDD10${timeframeSuffix}`] || cityData.CDD10 || 0;

    // Calculate climate zone
    const climateZone = determineClimateZone(hdd);

    // Set calculated values
    setFieldValue("d_20", hdd);
    setFieldValue("d_21", cdd);  
    setFieldValue("j_19", climateZone);

    // Calculate ground-facing values
    calculateGroundFacing();
    
    // Calculate temperature setpoints
    calculateTemperatures();
  }

  function determineClimateZone(hdd) {
    if (hdd >= 5000) return 8;
    if (hdd >= 4000) return 7;
    if (hdd >= 3000) return 6;
    if (hdd >= 2500) return 5;
    if (hdd >= 2000) return 4;
    if (hdd >= 1500) return 3;
    if (hdd >= 1000) return 2;
    return 1;
  }

  function calculateGroundFacing() {
    const hdd = getNumericValue("d_20");
    const cdd = getNumericValue("d_21");
    const coolingDays = getNumericValue("m_19", 120);
    const heatingDays = 365 - coolingDays;
    
    // Ground-facing HDD calculation
    const gfhdd = (hdd * heatingDays) / 365;
    setFieldValue("d_22", gfhdd);

    // Ground-facing CDD calculation with capacitance
    const capacitanceSetting = getFieldValue("h_21", "Capacitance");
    const capacitancePercent = getNumericValue("i_21", 50);
    
    let capacitanceFactor = 1.0;
    if (capacitanceSetting === "Static") {
      capacitanceFactor = 1.0;
    } else {
      capacitanceFactor = 1.0 - (capacitancePercent / 100) * 0.5;
    }
    
    const gfcdd = (cdd * coolingDays * capacitanceFactor) / 365;
    setFieldValue("h_22", gfcdd);
  }

  function calculateTemperatures() {
    // Read occupancy from global state (cross-section dependency)
    const occupancyType = window.TEUI?.StateManager?.getValue("d_12") || "";
    const isCritical = occupancyType.includes("Care");

    // Calculate heating setpoint
    const heatingSetpoint = isCritical ? 22 : 20;
    setFieldValue("h_23", heatingSetpoint);

    // Calculate cooling setpoint  
    let coolingSetpoint = 24;
    const coolingOverride = getNumericValue("l_24");
    if (coolingOverride > 0) {
      coolingSetpoint = coolingOverride;
    }
    setFieldValue("h_24", coolingSetpoint);
  }

  function calculateAllForMode() {
    updateWeatherData();
    calculateGroundFacing();
    calculateTemperatures();
  }

  //==========================================================================
  // DUAL CALCULATION ENGINES (REQUIRED PATTERN)
  //==========================================================================
  
  function calculateReferenceModel() {
    const originalMode = ModeManager.currentMode;
    ModeManager.switchMode("reference");
    try {
      calculateAllForMode();
    } catch (error) {
      console.error("[S03] Error in Reference Model calculations:", error);
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
      console.error("[S03] Error in Target Model calculations:", error);
    } finally {
      ModeManager.switchMode(originalMode);
    }
  }

  function calculateAll() {
    calculateReferenceModel();
    calculateTargetModel();
  }

  //==========================================================================
  // EVENT HANDLERS (100% STATE ISOLATION)
  //==========================================================================
  
  function initializeEventHandlers() {
    const sectionElement = document.getElementById("climateCalculations");
    if (!sectionElement) return;

    // Province dropdown change
    const provinceDropdown = document.querySelector('[data-dropdown-id="dd_d_19"]');
    if (provinceDropdown && !provinceDropdown.hasCleanListeners) {
      provinceDropdown.addEventListener("change", function() {
        const prefix = ModeManager.currentMode === "target" ? "target_" : "ref_";
        window.TEUI?.StateManager?.setValue(`${prefix}d_19`, this.value, "user-modified");
        updateCityDropdown(this.value);
      });
      provinceDropdown.hasCleanListeners = true;
    }

    // City dropdown change
    const cityDropdown = document.querySelector('[data-dropdown-id="dd_h_19"]');
    if (cityDropdown && !cityDropdown.hasCleanListeners) {
      cityDropdown.addEventListener("change", function() {
        const prefix = ModeManager.currentMode === "target" ? "target_" : "ref_";
        window.TEUI?.StateManager?.setValue(`${prefix}h_19`, this.value, "user-modified");
        updateWeatherData();
      });
      cityDropdown.hasCleanListeners = true;
    }

    // Timeframe dropdown change
    const timeframeDropdown = document.querySelector('[data-dropdown-id="dd_h_20"]');
    if (timeframeDropdown && !timeframeDropdown.hasCleanListeners) {
      timeframeDropdown.addEventListener("change", function() {
        const prefix = ModeManager.currentMode === "target" ? "target_" : "ref_";
        window.TEUI?.StateManager?.setValue(`${prefix}h_20`, this.value, "user-modified");
        updateWeatherData();
      });
      timeframeDropdown.hasCleanListeners = true;
    }

    // Capacitance dropdown change
    const capacitanceDropdown = document.querySelector('[data-dropdown-id="dd_h_21"]');
    if (capacitanceDropdown && !capacitanceDropdown.hasCleanListeners) {
      capacitanceDropdown.addEventListener("change", function() {
        const prefix = ModeManager.currentMode === "target" ? "target_" : "ref_";
        window.TEUI?.StateManager?.setValue(`${prefix}h_21`, this.value, "user-modified");
        calculateAll();
      });
      capacitanceDropdown.hasCleanListeners = true;
    }

    // Editable fields (cooling days, cooling override)
    sectionElement.addEventListener('blur', function(e) {
      if (e.target.matches('[contenteditable="true"]')) {
        const fieldId = e.target.getAttribute('data-field-id');
        if (fieldId) {
          const prefix = ModeManager.currentMode === "target" ? "target_" : "ref_";
          const value = e.target.textContent.trim();
          window.TEUI?.StateManager?.setValue(`${prefix}${fieldId}`, value, "user-modified");
          calculateAll();
        }
      }
    }, true);

    // Prevent Enter key newlines
    sectionElement.addEventListener('keydown', function(e) {
      if (e.target.matches('[contenteditable="true"]') && e.key === 'Enter') {
        e.preventDefault();
        e.target.blur();
      }
    });

    // Cross-section dependency listeners (prefixed)
    if (window.TEUI?.StateManager) {
      const sm = window.TEUI.StateManager;
      
      // Listen for occupancy changes (affects temperature setpoints)
      sm.addListener("d_12", function() {
        calculateReferenceModel();
        calculateTargetModel();
      });

      // Listen for both target and reference slider changes
      sm.addListener("target_i_21", function() {
        if (ModeManager.currentMode === "target") calculateAll();
      });
      
      sm.addListener("ref_i_21", function() {
        if (ModeManager.currentMode === "reference") calculateAll();
      });
    }
  }

  function updateCityDropdown(provinceValue) {
    const citySelect = document.querySelector('[data-dropdown-id="dd_h_19"]');
    if (!citySelect) return;

    // Clear existing options except first
    while (citySelect.options.length > 1) {
      citySelect.remove(1);
    }

    const cities = ClimateDataService.getCitiesForProvince(provinceValue);
    cities.forEach(city => {
      const option = document.createElement("option");
      option.value = city;
      option.textContent = city;
      citySelect.appendChild(option);
    });

    // Set default city based on current mode
    const prefix = ModeManager.currentMode === "target" ? "target_" : "ref_";
    const defaultCity = window.TEUI?.StateManager?.getValue(`${prefix}h_19`);
    if (defaultCity && cities.includes(defaultCity)) {
      citySelect.value = defaultCity;
      updateWeatherData();
    }
  }

  function populateProvinceDropdown() {
    const provinceSelect = document.querySelector('[data-dropdown-id="dd_d_19"]');
    if (!provinceSelect) return;

    // Clear existing options except first
    while (provinceSelect.options.length > 1) {
      provinceSelect.remove(1);
    }

    const provinces = ClimateDataService.getProvinces();
    provinces.forEach(province => {
      const option = document.createElement("option");
      option.value = province;
      option.textContent = ClimateDataService.getProvinceFullName(province);
      provinceSelect.appendChild(option);
    });

    // Set default province
    const prefix = ModeManager.currentMode === "target" ? "target_" : "ref_";
    const defaultProvince = window.TEUI?.StateManager?.getValue(`${prefix}d_19`) || "ON";
    provinceSelect.value = defaultProvince;

    if (provinceSelect.value) {
      window.TEUI?.StateManager?.setValue(`${prefix}d_19`, provinceSelect.value, "default");
      updateCityDropdown(provinceSelect.value);
    }
  }

  //==========================================================================
  // FIELD DEFINITIONS AND LAYOUT (Simplified for template)
  //==========================================================================
  
  function getFields() {
    return {
      d_19: { type: "dropdown", label: "Province", section: "climate" },
      h_19: { type: "dropdown", label: "City", section: "climate" },
      h_20: { type: "dropdown", label: "Timeframe", section: "climate" },
      h_21: { type: "dropdown", label: "Capacitance", section: "climate" },
      i_21: { type: "slider", label: "Capacitance %", section: "climate" },
      m_19: { type: "editable", label: "Cooling Days", section: "climate" },
      l_24: { type: "editable", label: "Cooling Override", section: "climate" },
    };
  }

  function getDropdownOptions() {
    return {
      dd_d_19: [], // Populated dynamically
      dd_h_19: [], // Populated dynamically  
      dd_h_20: [
        { value: "Present", text: "Present (1991-2020)" },
        { value: "Future", text: "Future (2021-2050)" }
      ],
      dd_h_21: [
        { value: "Capacitance", text: "Capacitance" },
        { value: "Static", text: "Static" }
      ]
    };
  }

  function getLayout() {
    return { rows: [] }; // Simplified for template
  }

  function onSectionRendered() {
    // Set default values for both Target and Reference modes
    const targetDefaults = {
      target_d_19: "ON",
      target_h_19: "Alexandria", 
      target_h_20: "Present",
      target_h_21: "Capacitance",
      target_i_21: "50",
      target_m_19: "120",
      target_l_24: "24"
    };

    const referenceDefaults = {
      ref_d_19: "ON",
      ref_h_19: "Attawapiskat",  // Different location for Reference
      ref_h_20: "Future",        // Different timeframe for Reference
      ref_h_21: "Static",        // Different capacitance for Reference
      ref_i_21: "0",             // Different percentage for Reference
      ref_m_19: "120",
      ref_l_24: "24"
    };

    // Set defaults in StateManager
    [...Object.entries(targetDefaults), ...Object.entries(referenceDefaults)].forEach(([fieldId, value]) => {
      if (!window.TEUI?.StateManager?.getValue(fieldId)) {
        window.TEUI.StateManager.setValue(fieldId, value, "default");
      }
    });

    // Expose ModeManager globally for toggle functionality
    if (window.TEUI) {
      window.TEUI.ModeManager = ModeManager;
      window.TEUI.DualState = ModeManager; // Compatibility alias
    }

    // Initialize climate data when available
    if (window.TEUI?.ClimateData && Object.keys(window.TEUI.ClimateData).length > 0) {
      populateProvinceDropdown();
      initializeEventHandlers();
      ModeManager.refreshUI();
      calculateAll();
    } else {
      // Wait for climate data to load
      const checkData = () => {
        if (window.TEUI?.ClimateData && Object.keys(window.TEUI.ClimateData).length > 0) {
          populateProvinceDropdown();
          initializeEventHandlers();
          ModeManager.refreshUI();
          calculateAll();
        } else {
          setTimeout(checkData, 100);
        }
      };
      checkData();
    }
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
    updateWeatherData,
    ModeManager,
  };
})(); 