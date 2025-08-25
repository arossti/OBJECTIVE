/**
 * 4011-Section13.js
 * Mechanical Loads (Section 13) module for TEUI Calculator 4.011
 *
 * This section integrates with 4011-Cooling.js for complex cooling calculations
 * and requires SectionIntegrator and StateManager connections to function properly.
 */

// Ensure namespace exists
window.TEUI = window.TEUI || {};
window.TEUI.SectionModules = window.TEUI.SectionModules || {};

// Create section-specific namespace for global references
window.TEUI.sect13 = window.TEUI.sect13 || {};
window.TEUI.sect13.initialized = false;
window.TEUI.sect13.userInteracted = false;
// Add initialization for recursion flags
window.TEUI.sect13.calculatingFreeCooling = false;
window.TEUI.sect13.freeCalculationInProgress = false;

// Section 13: Mechanical Loads Module
window.TEUI.SectionModules.sect13 = (function () {
  //==========================================================================
  // DUAL-STATE ARCHITECTURE (Self-Contained State Module)
  //==========================================================================

  // PATTERN A: Internal State Objects (Self-Contained + Persistent)
  const TargetState = {
    state: {},
    listeners: {},
    initialize: function () {
      const savedState = localStorage.getItem("S13_TARGET_STATE");
      if (savedState) {
        this.state = JSON.parse(savedState);
      } else {
        this.setDefaults();
      }
    },
    setDefaults: function () {
      // S13-specific Target defaults - MUST match sectionRows values
      this.state = {
        d_113: "Heatpump", // Primary heating system (dropdown)
        f_113: "12.5", // HSPF coefficient (slider)
        d_116: "Cooling", // Cooling system (dropdown) - FIXED: was "AC"
        f_117: "18.0", // SEER coefficient (slider)
        d_118: "HRV", // Ventilation system (dropdown)
        f_118: "0.85", // Heat recovery efficiency (slider)
        d_119: "No", // Free cooling (dropdown)
        f_119: "0.75", // Free cooling efficiency (slider)
        // Add other section-specific user-editable fields as needed
      };
    },
    saveState: function () {
      localStorage.setItem("S13_TARGET_STATE", JSON.stringify(this.state));
    },
    setValue: function (fieldId, value, source = "user") {
      this.state[fieldId] = value;
      // ✅ FIXED: Save state for any user action (user or user-modified)
      if (source === "user" || source === "user-modified") {
        this.saveState();
        console.log(
          `S13 TargetState: Saved state after ${source} changed ${fieldId} to ${value}`,
        );
      }
    },
    getValue: function (fieldId) {
      return this.state[fieldId];
    },
  };

  const ReferenceState = {
    state: {},
    listeners: {},
    initialize: function () {
      const savedState = localStorage.getItem("S13_REFERENCE_STATE");
      if (savedState) {
        this.state = JSON.parse(savedState);
      } else {
        this.setDefaults();
      }
    },
    setDefaults: function () {
      // ✅ DYNAMIC LOADING: Get current reference standard from dropdown d_13
      const currentStandard =
        window.TEUI?.StateManager?.getValue?.("d_13") || "OBC SB10 5.5-6 Z6";
      const referenceValues =
        window.TEUI?.ReferenceValues?.[currentStandard] || {};

      // TEMPORARY DEBUG: Verify ReferenceValues.js lookup
      console.log(
        `[S13 DEBUG] Loading reference standard: "${currentStandard}"`,
      );
      console.log(`[S13 DEBUG] Found reference values:`, {
        f_113: referenceValues.f_113,
        j_115: referenceValues.j_115,
        d_118: referenceValues.d_118,
        d_119: referenceValues.d_119,
      });

      // ✅ FIXED: Apply correct reference values from ReferenceValues.js based on d_13 selection
      this.state = {
        // Heating System
        d_113: referenceValues.d_113 || "Gas", // Gas heating system (building code baseline)
        f_113: referenceValues.f_113 || "7.1", // ✅ Min. HSPF if Heatpump (from ReferenceValues.js)
        j_115: referenceValues.j_115 || "0.90", // ✅ Min. AFUE if Gas or Oil (from ReferenceValues.js)

        // Cooling System
        d_116: referenceValues.d_116 || "Cooling", // Cooling system
        f_117: referenceValues.f_117 || "15.0", // SEER for cooling (fallback - not in ReferenceValues.js)
        j_116: referenceValues.j_116 || "3.3", // ✅ Min. COPc if Dedicated Cooling (from ReferenceValues.js)

        // Ventilation System
        d_118: referenceValues.d_118 || "81", // ✅ Min. ERV/HRV Efficiency% (from ReferenceValues.js)
        f_118: referenceValues.f_118 || "0.60", // HRV efficiency (fallback)
        d_119: referenceValues.d_119 || "8.33", // ✅ Min. Vent. Rate Per Person l/sec (from ReferenceValues.js)
        l_118: referenceValues.l_118 || "3.50", // ✅ Min. Volumetric Vent. Rate (from ReferenceValues.js)

        // Free Cooling
        f_119: referenceValues.f_119 || "0.50", // Free cooling efficiency (fallback)
      };

      console.log(
        `S13: Reference defaults loaded from standard: ${currentStandard}`,
        {
          f_113: this.state.f_113,
          j_115: this.state.j_115,
          d_118: this.state.d_118,
          d_119: this.state.d_119,
          j_116: this.state.j_116,
          l_118: this.state.l_118,
        },
      );
    },
    // MANDATORY: Include onReferenceStandardChange for d_13 changes
    onReferenceStandardChange: function () {
      console.log("S13: Reference standard changed, reloading defaults");
      this.setDefaults();
      this.saveState();
      // Only refresh UI if currently in reference mode
      if (ModeManager.currentMode === "reference") {
        ModeManager.refreshUI();
        calculateAll();
      }
    },
    saveState: function () {
      localStorage.setItem("S13_REFERENCE_STATE", JSON.stringify(this.state));
    },
    setValue: function (fieldId, value, source = "user") {
      this.state[fieldId] = value;
      // ✅ FIXED: Save state for any user action (user or user-modified)
      if (source === "user" || source === "user-modified") {
        this.saveState();
        console.log(
          `S13 ReferenceState: Saved state after ${source} changed ${fieldId} to ${value}`,
        );

        // ✅ CRITICAL FIX: Trigger recalculations when key Reference fields change
        // BUT ONLY when currently in Reference mode (respects mode isolation)
        // calculateAll() runs BOTH Target and Reference calculations (efficient)
        const criticalFields = [
          "d_113",
          "d_116",
          "f_113",
          "d_118",
          "d_119",
          "j_115",
          "l_118",
        ];
        if (
          criticalFields.includes(fieldId) &&
          ModeManager.currentMode === "reference"
        ) {
          console.log(`[S13] Reference ${fieldId} → ${value}`);
          calculateAll(); // Runs both models - efficient and keeps both current
          ModeManager.updateCalculatedDisplayValues();
        }
      }
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

      // MANDATORY: Listen for reference standard changes
      if (window.TEUI?.StateManager?.addListener) {
        window.TEUI.StateManager.addListener("d_13", () => {
          ReferenceState.onReferenceStandardChange();
        });
      }
    },
    switchMode: function (mode) {
      if (
        this.currentMode === mode ||
        (mode !== "target" && mode !== "reference")
      )
        return;
      this.currentMode = mode;
      console.log(`S13: Switched to ${mode.toUpperCase()} mode`);

      this.refreshUI();
      // CRITICAL: Update ghosting for new mode's system
      this.updateConditionalUI();
      // ✅ FIX: UI toggle is for DISPLAY ONLY - values are already calculated
      // Removed calculateAll() - mode switch should only update display, not trigger calculations
      this.updateCalculatedDisplayValues();
    },

    // Update displayed calculated values based on current mode
    updateCalculatedDisplayValues: function () {
      if (!window.TEUI?.StateManager) return;

      console.log(
        `[Section13] 🔄 Updating calculated display values for ${this.currentMode} mode`,
      );

      const calculatedFields = [
        "j_113",
        "k_113",
        "l_113", // Heating system results
        "j_114",
        "k_114",
        "l_114", // Cooling system results
        "j_116",
        "k_116",
        "l_116", // Ventilation results
        "j_124",
        "k_124",
        "l_124", // Free cooling results
        "j_129",
        "k_129",
        "l_129", // Mitigated CED results
        "h_113",
        "h_114",
        "h_116",
        "h_124",
        "h_129", // Load calculations
        "d_114",
        "d_115",
        "f_115",
        "h_115",
        "l_115",
        "m_115",
        "f_114", // Heating system & fuel impact
        "d_117",
        "f_117",
        "j_117",
        "m_116",
        "m_117", // Cooling system results
        "f_119",
        "h_119",
        "d_120",
        "f_120",
        "h_120", // Ventilation rates
        "d_121",
        "i_121",
        "m_121", // Ventilation energy
        "i_122",
        "d_122",
        "d_123", // Cooling ventilation
        "d_124",
        "m_124", // Free cooling metrics
      ];

      calculatedFields.forEach((fieldId) => {
        let valueToDisplay;

        if (this.currentMode === "reference") {
          // In Reference mode, try to show ref_ values, fallback to regular values
          valueToDisplay =
            window.TEUI.StateManager.getValue(`ref_${fieldId}`) ||
            window.TEUI.StateManager.getValue(fieldId);
        } else {
          // In Target mode, show regular values
          valueToDisplay = window.TEUI.StateManager.getValue(fieldId);
        }

        if (valueToDisplay !== null && valueToDisplay !== undefined) {
          const element = document.querySelector(
            `[data-field-id="${fieldId}"]`,
          );
          if (element && !element.hasAttribute("contenteditable")) {
            // Only update calculated fields, not user-editable ones
            const numericValue = window.TEUI.parseNumeric(valueToDisplay);
            if (!isNaN(numericValue)) {
              // Use appropriate formatting for different field types
              let formattedValue;
              if (fieldId === "m_115") {
                // Only m_115 (AFUE efficiency) should be percent
                formattedValue = window.TEUI.formatNumber(
                  numericValue,
                  "percent-0dp",
                );
              } else {
                // All other fields should use number-2dp formatting
                formattedValue = window.TEUI.formatNumber(
                  numericValue,
                  "number-2dp",
                );
              }
              element.textContent = formattedValue;
            }
          }
        }
      });

      console.log(
        `[Section13] Calculated display values updated for ${this.currentMode} mode`,
      );
    },
    resetState: function () {
      console.log("S13: Resetting state and clearing localStorage.");
      TargetState.setDefaults();
      TargetState.saveState();
      ReferenceState.setDefaults();
      ReferenceState.saveState();
      console.log("S13: States have been reset to defaults.");

      this.refreshUI();
      this.updateConditionalUI();
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

      // BRIDGE: For backward compatibility, sync Target changes to global StateManager
      if (this.currentMode === "target") {
        window.TEUI.StateManager.setValue(fieldId, value, "user-modified");
      }
    },
    refreshUI: function () {
      const sectionElement = document.getElementById("mechanicalLoads");
      if (!sectionElement) return;

      const currentState = this.getCurrentState();

      // S13-specific fields to sync (including all user-editable fields)
      const fieldsToSync = [
        "d_113",
        "f_113",
        "j_115",
        "d_116",
        "f_117",
        "j_116",
        "d_118",
        "f_118",
        "d_119",
        "l_118",
        "f_119",
      ];

      fieldsToSync.forEach((fieldId) => {
        const stateValue = currentState.getValue(fieldId);
        if (stateValue === undefined || stateValue === null) return;

        const element = sectionElement.querySelector(
          `[data-field-id="${fieldId}"]`,
        );
        if (!element) return;

        // ✅ PATTERN A: Simple element updates
        const dropdown = element.matches("select")
          ? element
          : element.querySelector("select");

        if (dropdown) {
          dropdown.value = stateValue;
        } else if (element.hasAttribute("contenteditable")) {
          element.textContent = stateValue;
        } else if (element.type === "range") {
          // Handle sliders/coefficient fields
          element.value = stateValue;
          // Update associated text displays
          const textDisplay = element.nextElementSibling;
          if (textDisplay && textDisplay.matches("[data-field-id]")) {
            textDisplay.textContent = stateValue;
          }
        }
      });

      // ✅ FIXED: Update calculated display values after UI refresh
      this.updateCalculatedDisplayValues();
    },

    // CRITICAL: Mode-aware conditional UI updates
    updateConditionalUI: function () {
      const currentHeatingSystem = this.getValue("d_113");
      if (currentHeatingSystem) {
        handleHeatingSystemChangeForGhosting(currentHeatingSystem);
      }
    },
  };

  // MANDATORY: Global exposure
  window.TEUI.sect13 = window.TEUI.sect13 || {};
  window.TEUI.sect13.ModeManager = ModeManager;
  window.TEUI.sect13.TargetState = TargetState;
  window.TEUI.sect13.ReferenceState = ReferenceState;

  //==========================================================================
  // HEADER CONTROLS INJECTION
  //==========================================================================

  /**
   * Creates and injects the Target/Reference toggle and Reset button into the section header.
   */
  function injectHeaderControls() {
    const sectionHeader = document.querySelector(
      "#mechanicalLoads .section-header, #mechanicalLoads .section-title",
    );
    if (
      !sectionHeader ||
      sectionHeader.querySelector(".local-controls-container")
    ) {
      return; // Already setup or header not found
    }

    const controlsContainer = document.createElement("div");
    controlsContainer.className = "local-controls-container";
    controlsContainer.style.cssText =
      "display: flex; align-items: center; margin-left: auto; gap: 10px;";

    // Reset Button
    const resetButton = document.createElement("button");
    resetButton.innerHTML = "🔄 Reset";
    resetButton.title = "Reset Section 13 to Defaults";
    resetButton.style.cssText =
      "padding: 4px 8px; font-size: 0.8em; background-color: #dc3545; color: white; border: none; border-radius: 4px; cursor: pointer;";

    resetButton.addEventListener("click", (event) => {
      event.stopPropagation();
      if (
        confirm(
          "Are you sure you want to reset all inputs in this section to their defaults? This will clear any saved data for Section 13.",
        )
      ) {
        ModeManager.resetState();
      }
    });

    // Toggle Switch (exact copy from S12)
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

    controlsContainer.appendChild(resetButton);
    controlsContainer.appendChild(stateIndicator);
    controlsContainer.appendChild(toggleSwitch);
    sectionHeader.appendChild(controlsContainer);
  }

  //==========================================================================
  // ADDED: HELPER FUNCTIONS (Standard Implementation)
  //==========================================================================

  function getGlobalNumericValue(fieldId) {
    // ✅ PATTERN A: For values EXTERNAL to this section (from global StateManager)
    const rawValue = window.TEUI?.StateManager?.getValue(fieldId);
    return window.TEUI.parseNumeric(rawValue) || 0;
  }

  /**
   * Get section-local value based on calculation context (not UI mode)
   * @param {string} fieldId - The field identifier
   * @param {boolean} isReferenceCalculation - Whether this is for Reference calculation
   * @returns {string|number} - The value from appropriate state
   */
  function getSectionValue(fieldId, isReferenceCalculation = false) {
    if (isReferenceCalculation) {
      return ReferenceState.getValue(fieldId);
    } else {
      return TargetState.getValue(fieldId);
    }
  }

  /**
   * Safely parses a numeric value from StateManager, using the global parseNumeric.
   * @param {string} fieldId - The ID of the field to retrieve the value for.
   * @returns {number} The parsed numeric value, or 0 if parsing fails.
   */
  function getNumericValue(fieldId) {
    const rawValue = window.TEUI?.StateManager?.getValue(fieldId);
    // Use the global parseNumeric if available
    return window.TEUI?.parseNumeric?.(rawValue) || 0;
  }

  /**
   * Helper to get field value, preferring StateManager but falling back to DOM.
   * @param {string} fieldId
   * @returns {string | null} Value as string or null if not found.
   */
  function getFieldValue(fieldId) {
    if (window.TEUI?.StateManager?.getValue) {
      const value = window.TEUI.StateManager.getValue(fieldId);
      if (value !== null && value !== undefined) {
        return value.toString();
      }
    }
    const element = document.querySelector(
      `[data-field-id="${fieldId}"],[data-dropdown-id="${fieldId}"]`,
    );
    if (element) {
      return element.value !== undefined ? element.value : element.textContent;
    }
    return null;
  }

  /**
   * Sets a calculated value in the StateManager and updates the corresponding DOM element.
   * @param {string} fieldId - The ID of the field to update.
   * @param {number} rawValue - The raw calculated numeric value.
   * @param {string} [formatType='number-2dp-comma'] - The format type string (e.g., 'number-2dp-comma', 'percent-1dp', 'integer').
   */
  function setCalculatedValue(
    fieldId,
    rawValue,
    formatType = "number-2dp-comma",
  ) {
    // Use global formatter - ensuring window.TEUI and formatNumber exist
    const formattedValue =
      window.TEUI?.formatNumber?.(rawValue, formatType) ??
      rawValue?.toString() ??
      "N/A";

    // Store raw value as string in StateManager for precision
    if (window.TEUI?.StateManager?.setValue) {
      let stateValue = isFinite(rawValue) ? rawValue.toString() : null;
      window.TEUI.StateManager.setValue(fieldId, stateValue, "calculated");
    }

    // Update DOM
    const element = document.querySelector(`[data-field-id="${fieldId}"]`);
    if (element) {
      element.textContent = formattedValue;
      element.classList.toggle(
        "negative-value",
        isFinite(rawValue) && rawValue < 0,
      );
    } else {
      // console.warn(`setCalculatedValue (S13): Element not found for fieldId ${fieldId}`);
    }
  }

  // --- Integrated Cooling Calculation State & Logic ---
  const coolingState = {
    nightTimeTemp: 20.43, // Default, updated from d_24
    coolingSeasonMeanRH: 0.5585, // Default, A4
    latentLoadFactor: 1.0, // Calculated A6
    groundTemp: 10, // A7
    airMass: 1.204, // E3
    specificHeatCapacity: 1005, // E4
    latentHeatVaporization: 2501000, // E6
    coolingSetTemp: 24, // A8 / h_24
    freeCoolingLimit: 0, // Calculated based on A33, M19, K120
    daysActiveCooling: 120, // Calculated E55, default 120
    buildingVolume: 8000, // Default, updated from d_105
    buildingArea: 1427.2, // Default, updated from h_15
    coolingDegreeDays: 196, // Default, updated from d_21
    coolingLoad: 0, // Updated from l_128
    pSatAvg: 0, // Intermediate atmospheric calc
    partialPressure: 0,
    pSatIndoor: 0,
    partialPressureIndoor: 0,
    humidityRatioIndoor: 0,
    humidityRatioAvg: 0,
    humidityRatioDifference: 0,
    wetBulbTemperature: 0,
    A50_temp: 0, // Added for A50 temperature calculation
    ventilationMethod: "", // Added for g_118
  };

  /** [Cooling Calc] Calculate latent load factor */
  function calculateLatentLoadFactor() {
    const hDiff = coolingState.humidityRatioDifference;
    const LHV = coolingState.latentHeatVaporization;
    const Cp = coolingState.specificHeatCapacity;
    const Tdiff = coolingState.nightTimeTemp - coolingState.coolingSetTemp;

    // Check for division by zero or invalid inputs
    if (
      Cp === 0 ||
      Tdiff === 0 ||
      isNaN(hDiff) ||
      isNaN(LHV) ||
      isNaN(Cp) ||
      isNaN(Tdiff)
    ) {
      console.warn("Latent Load Factor: Invalid inputs or division by zero.");
      return 1.0;
    }

    const ratio = (hDiff * LHV) / (Cp * Tdiff);
    const factor = 1 + ratio;
    const finalFactor = Math.max(1.0, factor);
    return finalFactor;
  }

  /** [Cooling Calc] Calculate atmospheric values */
  function calculateAtmosphericValues() {
    const t_outdoor = coolingState.A50_temp;
    const outdoorRH = coolingState.coolingSeasonMeanRH;
    const t_indoor = coolingState.coolingSetTemp;
    const indoorRH_percent =
      window.TEUI.parseNumeric(getFieldValue("d_59")) || 45;
    const indoorRH = indoorRH_percent / 100;

    coolingState.pSatAvg =
      610.94 * Math.exp((17.625 * t_outdoor) / (t_outdoor + 243.04));
    coolingState.partialPressure = coolingState.pSatAvg * outdoorRH;

    coolingState.pSatIndoor =
      610.94 * Math.exp((17.625 * t_indoor) / (t_indoor + 243.04));
    coolingState.partialPressureIndoor = coolingState.pSatIndoor * indoorRH;
  }

  /** [Cooling Calc] Calculate humidity ratios */
  function calculateHumidityRatios() {
    const atmPressure = coolingState.atmPressure || 101325;
    const pPartialIndoor = coolingState.partialPressureIndoor;
    const pSatAvgOutdoor = coolingState.pSatAvg; // Get Saturation Pressure Outdoor (A56)

    // Calculate Indoor Humidity Ratio (A61)
    if (atmPressure - pPartialIndoor === 0) {
      console.warn(
        "Cooling Calc: Division by zero prevented in indoor humidity ratio.",
      );
      coolingState.humidityRatioIndoor = 0;
    } else {
      coolingState.humidityRatioIndoor =
        (0.62198 * pPartialIndoor) / (atmPressure - pPartialIndoor);
    }

    // Calculate Outdoor Humidity Ratio (A62) - CORRECTED FORMULA
    // First, calculate the outdoor partial pressure *using the required 70% RH* (Excel A57)
    const outdoorRH_forA62 = 0.7;
    const pPartialOutdoor_forA62 = pSatAvgOutdoor * outdoorRH_forA62;

    if (atmPressure - pSatAvgOutdoor === 0) {
      // Check denominator using pSatAvgOutdoor (A56)
      console.warn(
        "Cooling Calc: Division by zero prevented in outdoor humidity ratio.",
      );
      coolingState.humidityRatioAvg = 0;
    } else {
      // Use the partial pressure based on 70% RH (pPartialOutdoor_forA62)
      coolingState.humidityRatioAvg =
        (0.62198 * pPartialOutdoor_forA62) / (atmPressure - pSatAvgOutdoor); // USE pSatAvgOutdoor (A56) in denominator
    }

    // Calculate Difference (A63)
    coolingState.humidityRatioDifference =
      coolingState.humidityRatioAvg - coolingState.humidityRatioIndoor;
  }

  /** [Cooling Calc] Calculate free cooling capacity limit (Potential Annual Sensible kWh) */
  function calculateFreeCoolingLimit() {
    // Add recursion protection
    if (window.TEUI.sect13.calculatingFreeCooling) {
      return coolingState.freeCoolingLimit || 0; // Return cached value if already calculating
    }
    window.TEUI.sect13.calculatingFreeCooling = true;

    let potentialLimit = 0; // Initialize potentialLimit
    try {
      // --- Calculation based on SENSIBLE Component Only (Excel A33 * M19) ---

      // 1. Get necessary values
      const ventFlowRateM3hr =
        window.TEUI.parseNumeric(getFieldValue("h_120")) || 0;
      const ventFlowRateM3s = ventFlowRateM3hr / 3600;
      const massFlowRateKgS = ventFlowRateM3s * coolingState.airMass; // kg/s

      const Cp = coolingState.specificHeatCapacity; // J/kg·K
      const T_indoor = coolingState.coolingSetTemp; // °C
      const T_outdoor_night = coolingState.nightTimeTemp; // °C
      const coolingDays =
        window.TEUI.parseNumeric(getFieldValue("m_19")) || 120;

      // 2. Calculate Temperature Difference
      const tempDiff = T_outdoor_night - T_indoor; // °C or K difference

      // 3. Calculate Sensible Power (Watts) - Based on Excel A55 / A31
      const sensiblePowerWatts = massFlowRateKgS * Cp * tempDiff;

      // 4. Determine potential SENSIBLE free cooling power
      let sensibleCoolingPowerWatts = 0;
      if (tempDiff < 0) {
        // Only possible if outdoor air is cooler
        // Use the positive magnitude of heat removal power
        sensibleCoolingPowerWatts = Math.abs(sensiblePowerWatts);
      }

      // 5. Convert Sensible Power to Daily Sensible Energy (kWh/day) - Based on Excel A33
      // Correct Factor: (J/s) * (86400 s/day) / (3.6e6 J/kWh) = 0.024
      const dailySensibleCoolingKWh = sensibleCoolingPowerWatts * 0.024;

      // 6. Calculate Annual Potential Limit (kWh/yr) - Based on Excel A33 * M19
      potentialLimit = dailySensibleCoolingKWh * coolingDays;

      // Store this sensible-only potential limit
      coolingState.calculatedPotentialFreeCooling = potentialLimit;
    } catch (error) {
      console.error(
        "[S13 Error] Error during calculateFreeCoolingLimit:",
        error,
      );
      potentialLimit = 0;
    } finally {
      window.TEUI.sect13.calculatingFreeCooling = false;
    }
    return potentialLimit;
  }

  /** [Cooling Calc] Calculate days of active cooling required */
  function calculateDaysActiveCooling(currentFreeCoolingLimit /* h_124 */) {
    // Keep signature for now
    const coolingLoad = coolingState.coolingLoad; // Annual kWh load (m_129)
    // Get cooling days from m_19, default to 120
    const coolingDays = window.TEUI.parseNumeric(getFieldValue("m_19")) || 120;
    const freeCoolingLimit = currentFreeCoolingLimit; // Annual kWh free cooling (h_124)
    let calculatedDays = 0;
    let dailyCoolingLoad = 0;
    let daysCoveredByFreeCooling = 0;

    if (coolingLoad > 0 && freeCoolingLimit >= 0) {
      if (coolingDays > 0) {
        dailyCoolingLoad = coolingLoad / coolingDays; // Avg kWh/day
        if (dailyCoolingLoad > 0) {
          daysCoveredByFreeCooling = freeCoolingLimit / dailyCoolingLoad;
          // Calculate the actual value (can be negative), but don't clamp or assign to state for now
          calculatedDays = coolingDays - daysCoveredByFreeCooling;
        } else {
          calculatedDays = 0; // No load
        }
      } else {
        calculatedDays = 0; // No cooling season
      }
    } else {
      // Handle cases with no load or negative free cooling if needed for internal logic
      // For now, just setting to 0 for internal consistency if load <= 0
      calculatedDays = 0;
    }

    // Logging removed
    // console.warn(`[S13 Debug m_124] Inputs -> Load(m129): ${coolingLoad.toFixed(2)}, FreeCooling(h124): ${freeCoolingLimit.toFixed(2)}, SeasonDays(m19): ${coolingDays}`);
    // console.warn(`[S13 Debug m_124] Calcs -> DailyLoad: ${dailyCoolingLoad.toFixed(2)}, DaysCovered: ${daysCoveredByFreeCooling.toFixed(2)}, Result(m124): ${calculatedDays.toFixed(2)} (clamped >= 0 for logging)`);

    // Don't update state with this potentially incorrect value yet
    // coolingState.daysActiveCooling = calculatedDays;
    return calculatedDays; // Return the calculated value, even though it won't be directly displayed
  }

  /** [Cooling Calc] Calculate wet bulb temperature (Approximation) */
  function calculateWetBulbTemperature() {
    // Note: This is an approximation, potentially from COOLING-TARGET.csv E64
    const tdb = coolingState.nightTimeTemp;
    const rh = coolingState.coolingSeasonMeanRH * 100;
    const twbSimple =
      tdb - (tdb - (tdb - (100 - rh) / 5)) * (0.1 + 0.9 * (rh / 100));
    const twbCorrected =
      tdb - (tdb - (tdb - (100 - rh) / 5)) * (0.3 + 0.7 * (rh / 100));
    coolingState.wetBulbTemperature = (twbSimple + twbCorrected) / 2;
    return coolingState.wetBulbTemperature;
  }

  /** [Cooling Calc] Calculate the intermediate temperature A50 based on Excel logic */
  function calculateA50Temp() {
    // Based on Excel E64 = E60 - (E60 - (E60 - (100 - E59)/5)) * (0.1 + 0.9 * (E59 / 100))
    const E60 = coolingState.nightTimeTemp;
    const E59 = (coolingState.coolingSeasonMeanRH || 0.5585) * 100; // Use state value or default

    const term1 = (100 - E59) / 5;
    const term2 = E60 - term1;
    const term3 = E60 - term2;
    const term4 = 0.1 + 0.9 * (E59 / 100);
    const A50 = E60 - term3 * term4;

    coolingState.A50_temp = A50;
    return A50;
  }

  /** [Cooling Calc] Update internal state from external sources */
  function updateCoolingInputs() {
    const parseNum =
      window.TEUI?.parseNumeric ||
      function (v) {
        return parseFloat(v) || 0;
      };
    const getValue =
      window.TEUI?.StateManager?.getValue ||
      function (id) {
        return null;
      };

    // Update state from StateManager
    // TODO: This value should eventually be dynamic, likely from Section 03 weather data
    coolingState.nightTimeTemp = 20.43; // Hardcoded default: Summer Mean Overnight Temp (See COOLING-TARGET.csv A3/A49)

    // TODO: This value should eventually be dynamic, likely from Section 03 weather data or user input
    coolingState.coolingSeasonMeanRH = 0.5585; // Default A4 (55.85%) NOT A57 (70%) used elsewhere

    // Fetch elevation
    // TODO: Should be dynamic from weather data lookup in Section 03
    const projectElevation = parseNum(getValue("l_22")) || 80; // Read from Sec 03, fallback to 80m
    const seaLevelPressure = 101325; // E13
    coolingState.atmPressure =
      seaLevelPressure * Math.exp(-projectElevation / 8434); // E15 logic

    // Check for user override for cooling setpoint in l_24, otherwise use h_24
    const coolingSetTempOverride_l24 = parseNum(getValue("l_24"));
    if (coolingSetTempOverride_l24 && !isNaN(coolingSetTempOverride_l24)) {
      coolingState.coolingSetTemp = coolingSetTempOverride_l24;
    } else {
      coolingState.coolingSetTemp = parseNum(getValue("h_24")) || 24; // Fallback to h_24 or default 24
    }

    coolingState.coolingDegreeDays = parseNum(getValue("d_21")) || 196;
    coolingState.buildingVolume = parseNum(getValue("d_105")) || 8000;
    coolingState.buildingArea = parseNum(getValue("h_15")) || 1427.2;
    coolingState.coolingLoad = getNumericValue("l_128") || 0; // Read mitigated cooling load from S14 - Note: May cause dependency loop issues if S14 reads S13 outputs
    coolingState.ventilationMethod = getFieldValue("g_118") || "Constant"; // Default to Constant

    // Calculate the intermediate A50 temperature needed for atmospheric calcs
    calculateA50Temp();
  }

  /** [Cooling Calc] Orchestrates the internal cooling-related calculations */
  function runIntegratedCoolingCalculations() {
    updateCoolingInputs();

    // Ensure atmospheric & humidity are calculated BEFORE factors/limits that depend on them
    calculateAtmosphericValues();
    calculateHumidityRatios();

    // Now calculate factors/limits that use the results
    coolingState.latentLoadFactor = calculateLatentLoadFactor();
    // Calculate other intermediate cooling values if needed by core S13 funcs
    calculateWetBulbTemperature();
    // Note: calculateFreeCoolingLimit() is NOT called here, it's called by calculateFreeCooling()
    // Note: calculateDaysActiveCooling() is called within calculateFreeCooling()
  }

  // --- End of Integrated Cooling Logic ---

  //==========================================================================
  // REFERENCE INDICATOR CONFIGURATION
  //==========================================================================

  // T-cell comparison configuration for Section 13
  const referenceComparisons = {
    f_113: {
      type: "higher-is-better",
      tCell: "t_113",
      description: "Heating HSPF",
    },
    j_115: {
      type: "higher-is-better",
      tCell: "t_115",
      description: "AFUE Gas/Oil",
    },
    j_116: {
      type: "higher-is-better",
      tCell: "t_116",
      description: "Cooling COP",
    },
    d_118: {
      type: "higher-is-better",
      tCell: "t_118",
      description: "HRV/ERV SRE %",
    },
    d_119: {
      type: "higher-is-better",
      tCell: "t_119",
      description: "Vent Rate L/s per person",
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
      console.error("Error updating reference indicators:", error);
    }
  }

  /**
   * Update reference indicator (M and N columns) for a specific field
   * @param {string} fieldId - The application field ID to update
   */
  function updateReferenceIndicator(fieldId) {
    const config = referenceComparisons[fieldId];
    if (!config) return;

    const currentValue =
      window.TEUI?.parseNumeric?.(getFieldValue(fieldId)) || 0;

    const referenceValue =
      window.TEUI?.StateManager?.getTCellValue?.(fieldId) ||
      window.TEUI?.StateManager?.getReferenceValue?.(config.tCell);

    const rowId = fieldId.match(/\d+$/)?.[0];
    if (!rowId) return;

    const mFieldId = `m_${rowId}`;
    const nFieldId = `n_${rowId}`;

    if (!referenceValue && referenceValue !== 0) {
      // console.warn(`No reference value found for ${fieldId} - showing N/A`); // Ensure this is commented
      setCalculatedValue(mFieldId, "N/A", "raw");

      const nElement = document.querySelector(`[data-field-id="${nFieldId}"]`);
      if (nElement) {
        nElement.textContent = "–";
        setElementClass(nFieldId, ""); // No special class
      }
      return;
    }

    try {
      let referencePercent = 1;
      let isGood = true;

      const refValueNum = parseFloat(referenceValue);
      const currentValueNum = parseFloat(currentValue);

      if (config.type === "lower-is-better") {
        // For values where lower is better
        referencePercent =
          currentValueNum > 0 ? refValueNum / currentValueNum : 0;
        isGood = currentValueNum <= refValueNum;
      } else if (config.type === "higher-is-better") {
        // For values where higher is better (e.g., HSPF, AFUE, COP)
        referencePercent = refValueNum > 0 ? currentValueNum / refValueNum : 0;
        isGood = currentValueNum >= refValueNum;
      }

      // Update Column M (Reference %)
      setCalculatedValue(mFieldId, referencePercent, "percent-0dp");

      // Update Column N (Pass/Fail checkmark)
      const nElement = document.querySelector(`[data-field-id="${nFieldId}"]`);
      if (nElement) {
        nElement.textContent = isGood ? "✓" : "✗";
        setElementClass(nFieldId, isGood ? "checkmark" : "warning");
      }
    } catch (error) {
      console.error(
        `Error updating reference indicators for ${fieldId}:`,
        error,
      );
    }
  }

  //==========================================================================
  // CONSOLIDATED FIELD DEFINITIONS AND LAYOUT
  //==========================================================================

  /**
   * IMPORTANT: The section layout must follow these rules:
   * 1. Unit subheader MUST be the first row in the array with id "SECTXX-ID" or "header"
   * 2. Field definitions should be embedded directly in the cell objects
   * 3. Each row must have a unique ID that matches its Excel row number or label
   * 4. Cells must align perfectly with Excel column positions A-N
   * 5. Empty cells still need empty objects {} as placeholders to maintain alignment
   */

  // Define rows with integrated field definitions
  const sectionRows = {
    // UNIT SUBHEADER
    header: {
      id: "S13-ID",
      rowId: "S13-ID",
      label: "Mechanical Loads",
      cells: {
        c: {
          content: "SECTION 13. Mechanical Loads",
          classes: ["section-subheader", "section-title", "flex-cell"],
        },
        d: {
          content: "kWh/yr",
          classes: ["section-subheader", "flex-cell", "align-center"],
        },
        e: { content: "", classes: ["section-subheader", "flex-cell"] },
        f: { content: "", classes: ["section-subheader", "flex-cell"] },
        g: { content: "", classes: ["section-subheader", "flex-cell"] },
        h: { content: "", classes: ["section-subheader", "flex-cell"] },
        i: { content: "", classes: ["section-subheader", "flex-cell"] },
        j: {
          content: "kWh/yr",
          classes: ["section-subheader", "flex-cell", "align-center"],
        },
        k: {
          content: "Reference",
          classes: ["section-subheader", "flex-cell", "align-center"],
        },
        l: { content: "", classes: ["section-subheader", "flex-cell"] },
        m: { content: "", classes: ["section-subheader", "flex-cell"] },
        n: { content: "", classes: ["section-subheader", "flex-cell"] },
      },
    },

    // ROW 113: Primary Heating System
    113: {
      id: "M.1.0",
      rowId: "M.1.0",
      label: "Primary Heating System",
      cells: {
        c: { label: "Primary Heating System", classes: ["flex-cell"] },
        d: {
          fieldId: "d_113",
          type: "dropdown",
          dropdownId: "dd_d_113",
          value: "Heatpump",
          section: "mechanicalLoads",
          options: [
            { value: "Heatpump", name: "Heatpump" },
            { value: "Electricity", name: "Electricity" },
            { value: "Gas", name: "Gas" },
            { value: "Oil", name: "Oil" },
          ],
        },
        e: {
          content: "M.1.1 HSPF",
          classes: ["label-prefix"],
        },
        f: {
          fieldId: "f_113",
          type: "coefficient", // Changed from editable to coefficient slider type
          value: "12.5", // Default value
          min: 3.5, // Min value
          max: 20, // Max value
          step: 0.1, // Step increment
          section: "mechanicalLoads",
          // Removed classes: ["user-input", "editable"]
        },
        g: {
          content: "M.1.2 COPheat",
          classes: ["label-prefix"],
        },
        h: {
          fieldId: "h_113",
          type: "calculated",
          value: "3.66",
          section: "mechanicalLoads",
          dependencies: ["d_113", "f_113"],
        },
        i: {
          content: "M.1.3 COPcool",
          classes: ["label-prefix"],
        },
        j: {
          fieldId: "j_113",
          type: "calculated",
          value: "2.7",
          section: "mechanicalLoads",
          dependencies: ["h_113"],
        },
        k: {
          content: "M.1.4 Sink",
          classes: ["label-prefix"],
        },
        l: {
          fieldId: "l_113",
          type: "calculated",
          value: "86,642.65",
          section: "mechanicalLoads",
          dependencies: ["d_113", "d_114", "h_113"],
        },
        m: {
          fieldId: "m_113",
          type: "calculated",
          value: "176%",
          section: "mechanicalLoads",
          dependencies: ["f_113"],
        },
        n: {},
      },
    },

    // ROW 114: Heating System Demand
    114: {
      id: "M.2.1",
      rowId: "M.2.1",
      label: "Heating System Demand",
      cells: {
        c: { label: "Heating System Demand", classes: ["flex-cell"] },
        d: {
          fieldId: "d_114",
          type: "calculated",
          value: "32,529.13",
          section: "mechanicalLoads",
          dependencies: ["d_113", "d_127", "h_113"],
        },
        e: {
          content: "Net Emissions",
          classes: ["label-prefix", "flex-cell"],
        },
        f: {
          fieldId: "f_114",
          type: "calculated",
          value: "0.00",
          section: "mechanicalLoads",
          dependencies: ["d_113", "f_115", "l_30", "h_115", "l_28"],
        },
        g: {
          content: "kgCO2e/yr",
          classes: ["label", "flex-cell"],
        },
        h: {},
        i: {
          content: "M.1.5. CEER",
          classes: ["label-prefix"],
        },
        j: {
          fieldId: "j_114",
          type: "calculated",
          value: "9.1",
          section: "mechanicalLoads",
          dependencies: ["j_113"],
        },
        k: {
          content: "M.1.6 Sink",
          classes: ["label-prefix"],
        },
        l: {
          fieldId: "l_114",
          type: "calculated",
          value: "5,020.63",
          section: "mechanicalLoads",
          dependencies: ["d_113", "d_116", "d_117", "j_113"],
        },
        m: {},
        n: {},
      },
    },

    // ROW 115: Heating Fuel Impact
    115: {
      id: "M.2.2",
      rowId: "M.2.2",
      label: "Heating Fuel Impact (ekWh/yr)",
      cells: {
        c: { label: "Heating Fuel Impact (ekWh/yr)", classes: ["flex-cell"] },
        d: {
          fieldId: "d_115",
          type: "calculated",
          value: "0.00",
          section: "mechanicalLoads",
          dependencies: ["d_113", "d_127", "j_115"],
        },
        e: {
          content: "M.2.3 Oil l/yr",
          classes: ["label-prefix"],
        },
        f: {
          fieldId: "f_115",
          type: "calculated",
          value: "0.00",
          section: "mechanicalLoads",
          dependencies: ["d_115"],
        },
        g: {
          content: "M.2.4 Gas m3/yr",
          classes: ["label-prefix"],
        },
        h: {
          fieldId: "h_115",
          type: "calculated",
          value: "0.00",
          section: "mechanicalLoads",
          dependencies: ["d_115"],
        },
        i: {
          content: "M.2.5 AFUE",
          classes: ["label-prefix"],
        },
        j: {
          fieldId: "j_115",
          type: "editable",
          value: "0.98", // RESTORED default value
          section: "mechanicalLoads",
        },
        k: {
          content: "M.2.5 Exhaust",
          classes: ["label-prefix"],
        },
        l: {
          fieldId: "l_115",
          type: "calculated",
          value: "0.00",
          section: "mechanicalLoads",
          dependencies: ["d_113", "d_115", "d_114"],
        },
        m: {
          fieldId: "m_115",
          type: "calculated",
          value: "109%",
          section: "mechanicalLoads",
          dependencies: ["j_115"],
        },
        n: {},
      },
    },

    // ROW 116: Heatpump or Dedicated Cooling System
    116: {
      id: "M.3.0",
      rowId: "M.3.0",
      label: "Heatpump or Dedicated Cooling System",
      cells: {
        c: {
          label: "Heatpump or Dedicated Cooling System",
          classes: ["flex-cell"],
        },
        d: {
          fieldId: "d_116",
          type: "dropdown",
          dropdownId: "dd_d_116",
          value: "Cooling",
          section: "mechanicalLoads",
          options: [
            { value: "Cooling", name: "Cooling" },
            { value: "No Cooling", name: "No Cooling" },
          ],
        },
        e: {},
        f: {},
        g: {
          content: "M.3.3 COPcool", //ONLY when Dedicated Cooling
          classes: ["label-prefix"],
        },
        h: {},
        i: {},
        j: {
          fieldId: "j_116",
          type: "calculated",
          value: "2.7",
          section: "mechanicalLoads",
          dependencies: [],
        },
        k: {
          content: "M.3.4 Sink",
          classes: ["label-prefix"],
        },
        l: {
          fieldId: "l_116",
          type: "calculated",
          value: "5,009.95",
          section: "mechanicalLoads",
          dependencies: ["d_116", "d_117", "j_116"],
        },
        m: {
          fieldId: "m_116",
          type: "calculated",
          value: "124%",
          section: "mechanicalLoads",
          dependencies: ["j_116"],
        },
        n: {},
      },
    },

    // ROW 117: Heatpump Cool Elect. Load
    117: {
      id: "M.3.5",
      rowId: "M.3.5",
      label: "Heatpump Cool Elect. Load",
      cells: {
        c: { label: "Heatpump Cool Elect. Load", classes: ["flex-cell"] },
        d: {
          fieldId: "d_117",
          type: "calculated",
          value: "3,018.04",
          section: "mechanicalLoads",
          dependencies: ["d_116", "d_113", "m_129", "j_113", "j_116"],
        },
        e: {},
        f: {
          fieldId: "f_117",
          type: "calculated",
          value: "2.11",
          section: "mechanicalLoads",
          dependencies: ["d_117", "h_15"],
        },
        g: {
          content: "kWh/m2/yr",
          classes: ["label"],
        },
        h: {},
        i: {
          content: "M.3.6 CEER",
          classes: ["label-prefix"],
        },
        j: {
          fieldId: "j_117",
          type: "calculated",
          value: "9.1",
          section: "mechanicalLoads",
          dependencies: ["j_116"],
        },
        k: {},
        l: {},
        m: {
          fieldId: "m_117",
          type: "calculated",
          value: "4%",
          section: "mechanicalLoads",
          dependencies: ["f_117"],
        },
        n: {},
      },
    },

    // ROW 118: HRV/ERV/MVHR Efficiency (SRE)
    118: {
      id: "V.1.1",
      rowId: "V.1.1",
      label: "HRV/ERV/MVHR Efficiency (SRE)",
      cells: {
        c: { label: "HRV/ERV/MVHR Efficiency (SRE)", classes: ["flex-cell"] },
        d: {
          fieldId: "d_118",
          type: "percentage",
          value: "89",
          min: 0,
          max: 100,
          step: 1,
          section: "mechanicalLoads",
        },
        e: {},
        f: {
          content: "Ventil. Method",
          classes: ["label-prefix"],
        },
        g: {
          fieldId: "g_118",
          type: "dropdown",
          dropdownId: "dd_g_118",
          value: "Volume by Schedule",
          section: "mechanicalLoads",
          options: [
            { value: "Volume Constant", name: "Volume Constant" }, // ADDED MISSING
            { value: "Volume by Schedule", name: "Volume by Schedule" },
            { value: "Occupant Constant", name: "Occupant Constant" },
            { value: "Occupant by Schedule", name: "Occupant by Schedule" },
          ],
        },
        h: {},
        i: {
          content: "V.1.3",
          classes: ["label-prefix"],
        },
        j: {
          content: "ACH", //(Only if Volume-Based)
          classes: ["label"],
        },
        k: {},
        l: {
          fieldId: "l_118",
          type: "editable",
          value: "3",
          section: "mechanicalLoads",
        },
        m: {
          fieldId: "m_118",
          type: "calculated",
          value: "162%",
          section: "mechanicalLoads",
          dependencies: ["d_118"],
        },
        n: {},
      },
    },

    // ROW 119: Per Person Ventilation Rate
    119: {
      id: "V.1.4",
      rowId: "V.1.4",
      label: "Per Person Ventilation Rate",
      cells: {
        c: { label: "Per Person Ventilation Rate", classes: ["flex-cell"] },
        d: {
          fieldId: "d_119",
          type: "editable",
          value: "14.00", // RESTORED default value
          section: "mechanicalLoads",
        },
        e: {
          content: "l/s per person",
          classes: ["label"],
        },
        f: {
          fieldId: "f_119",
          type: "calculated",
          value: "29.66",
          section: "mechanicalLoads",
          dependencies: ["d_119"],
        },
        g: {
          content: "cfm",
          classes: ["label"],
        },
        h: {
          fieldId: "h_119",
          type: "calculated",
          value: "50.40",
          section: "mechanicalLoads",
          dependencies: ["d_119"],
        },
        i: {
          content: "m3/hr",
          classes: ["label"],
        },
        j: { content: "V.1.7", classes: ["label-prefix"] }, // New Label ID
        k: {
          content: "Summer Boost",
          classes: ["label"],
        },
        l: {
          fieldId: "l_119",
          type: "dropdown",
          dropdownId: "dd_l_119",
          value: "None",
          section: "mechanicalLoads",
          options: [
            // CORRECTED OPTIONS
            { value: "None", name: "None" },
            { value: "1.10", name: "1.10x" },
            { value: "1.20", name: "1.20x" },
            { value: "1.30", name: "1.30x" },
            { value: "1.40", name: "1.40x" },
            { value: "1.50", name: "1.50x" },
            { value: "1.60", name: "1.60x" },
            { value: "1.70", name: "1.70x" },
            { value: "1.80", name: "1.80x" },
            { value: "1.90", name: "1.90x" },
            { value: "2.00", name: "2.00x" },
          ],
        },
        m: {
          fieldId: "m_119",
          type: "calculated",
          value: "112%",
          section: "mechanicalLoads",
          dependencies: ["d_119"],
        },
        n: {},
      },
    },

    // ROW 120: Volumetric Ventilation Rate
    120: {
      id: "V.1.6",
      rowId: "V.1.6",
      label: "Volumetric Ventilation Rate",
      cells: {
        c: { label: "Volumetric Ventilation Rate", classes: ["flex-cell"] },
        d: {
          fieldId: "d_120",
          type: "calculated",
          value: "3,333.33",
          section: "mechanicalLoads",
          dependencies: [
            "h_118",
            "d_63",
            "d_119",
            "i_63",
            "j_63",
            "l_118",
            "d_105",
          ],
        },
        e: {
          content: "l/s",
          classes: ["label"],
        },
        f: {
          fieldId: "f_120",
          type: "calculated",
          value: "7,062.93",
          section: "mechanicalLoads",
          dependencies: ["d_120"],
        },
        g: {
          content: "cfm",
          classes: ["label"],
        },
        h: {
          fieldId: "h_120",
          type: "calculated",
          value: "12,000.00",
          section: "mechanicalLoads",
          dependencies: ["d_120"],
        },
        i: {
          content: "m3/hr",
          classes: ["label"],
        },
        j: { content: "V.1.7", classes: ["label-prefix"] }, // Label for k_120 Unoccupied Ventilation Setback
        k: {
          fieldId: "k_120",
          type: "percentage",
          value: "90",
          min: 0, // ADD min for standard slider behavior
          max: 100, // ADD max
          step: 10, // ADD step (e.g., 10 for 10% increments, or 1 for 1%)
          section: "mechanicalLoads",
          classes: ["col-small"],
        },
        l: { content: "Unoccupied Setback", classes: ["label"] }, // Unoccupied Setback label
        m: {},
        n: {},
      },
    },

    // ROW 121: Heating Season Ventil. Energy
    121: {
      id: "V.2.1",
      rowId: "V.2.1",
      label: "Heating Season Ventil. Energy",
      cells: {
        c: { label: "Heating Season Ventil. Energy", classes: ["flex-cell"] },
        d: {
          fieldId: "d_121",
          type: "calculated",
          value: "445,280.00",
          section: "mechanicalLoads",
          dependencies: ["d_120", "d_20"],
        },
        e: {
          content: "V.2.2",
          classes: ["label-prefix", "flex-cell"],
        },
        f: {
          content: "Htg. Vent. Energy Recovered",
          classes: ["label", "flex-cell"],
        },
        g: {},
        h: {},
        i: {
          fieldId: "i_121",
          type: "calculated",
          value: "396,299.20",
          section: "mechanicalLoads",
          dependencies: ["d_121", "d_118"],
        },
        j: {
          content: "V.2.3",
          classes: ["label-prefix", "flex-cell"],
        },
        k: {
          content: "Net Htg. Vent. Losses", //Net Heating Season Ventilation Losses
          classes: ["label", "flex-cell"],
        },
        l: {},
        m: {
          fieldId: "m_121",
          type: "calculated",
          value: "48,980.80",
          section: "mechanicalLoads",
          dependencies: ["d_121", "i_121"],
        },
        n: {},
      },
    },

    // ROW 122: Incoming Cooling Season Ventil. Energy - References Cooling calculations
    122: {
      id: "V.3.1",
      rowId: "V.3.1",
      label: "Incoming Cooling Season Ventil. Energy",
      cells: {
        c: {
          label: "Incoming Cooling Season Ventil. Energy",
          classes: ["flex-cell"],
        },
        d: {
          fieldId: "d_122",
          type: "calculated",
          value: "30,257.37",
          section: "mechanicalLoads",
          dependencies: [
            "h_118",
            "l_119",
            "d_120",
            "d_21",
            "i_63",
            "j_63",
            "i_122",
          ],
        },
        e: {
          content: "V.3.2",
          classes: ["label-prefix", "flex-cell"],
        },
        f: {
          content: "Latent Load Factor (Calc'd)",
          classes: ["label", "flex-cell"],
        },
        g: {},
        h: {},
        i: {
          fieldId: "i_122",
          type: "calculated",
          value: "159%",
          section: "mechanicalLoads",
          dependencies: ["cooling_latentLoadFactor"],
        },
        j: {},
        k: {},
        l: {},
        m: {},
        n: {},
      },
    },

    // ROW 123: Outgoing Cooling Season Ventil. Energy
    123: {
      id: "V.3.3",
      rowId: "V.3.3",
      label: "Outgoing Cooling Season Ventil. Energy",
      cells: {
        c: {
          label: "Outgoing Cooling Season Ventil. Energy",
          classes: ["flex-cell"],
        },
        d: {
          fieldId: "d_123",
          type: "calculated",
          value: "26,929.06",
          section: "mechanicalLoads",
          dependencies: ["d_118", "d_122"],
        },
        e: {},
        f: {},
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

    // ROW 124: Ventilation Free Cooling/Vent Capacity - References Cooling calculations
    124: {
      id: "V.4.1",
      rowId: "V.4.1",
      label: "Ventilation Free Cooling/Vent Capacity",
      cells: {
        c: {
          label: "Ventilation Free Cooling/Vent Capacity",
          classes: ["flex-cell"],
        },
        d: {
          fieldId: "d_124",
          type: "calculated",
          value: "54%",
          section: "mechanicalLoads",
          dependencies: ["h_124", "d_129"],
        },
        e: {
          content: "V.4.2",
          classes: ["label-prefix", "flex-cell"],
        },
        f: {
          content: "Free Cooling Limit",
          classes: ["label", "flex-cell"],
        },
        g: {},
        h: {
          fieldId: "h_124",
          type: "calculated",
          value: "37,322.60",
          section: "mechanicalLoads",
          dependencies: ["cooling_freeCoolingLimit", "m_19", "g_118", "k_120"], // Added g_118, k_120
        },
        i: {
          content: "kWh/yr",
          classes: ["label", "flex-cell"],
        },
        j: {
          content: "Cooling Days", //Days Active Cooling Required (Experimental)
          classes: ["label", "flex-cell"],
        },
        k: {},
        l: {},
        m: {
          fieldId: "m_124",
          type: "calculated",
          value: "96",
          section: "mechanicalLoads",
          dependencies: ["cooling_daysActiveCooling", "h_124"], // Added h_124 dependency
        },
        n: {},
      },
    },
  };

  //==========================================================================
  // ACCESSOR METHODS
  //==========================================================================

  /**
   * Extract field definitions from the integrated layout
   * This method is required for compatibility with the FieldManager
   */
  function getFields() {
    const fields = {};

    // Extract field definitions from all rows except the header
    Object.entries(sectionRows).forEach(([rowKey, row]) => {
      if (rowKey === "header") return; // Skip the header row
      if (!row.cells) return;

      // Process each cell in the row
      Object.entries(row.cells).forEach(([colKey, cell]) => {
        if (cell.fieldId && cell.type) {
          // Create field definition with all relevant properties
          fields[cell.fieldId] = {
            type: cell.type,
            label: cell.label || row.label,
            defaultValue: cell.value || "",
            section: cell.section || "mechanicalLoads",
          };

          // Copy additional field properties if they exist
          if (cell.dropdownId)
            fields[cell.fieldId].dropdownId = cell.dropdownId;
          if (cell.dependencies)
            fields[cell.fieldId].dependencies = cell.dependencies;
          if (cell.min !== undefined) fields[cell.fieldId].min = cell.min;
          if (cell.max !== undefined) fields[cell.fieldId].max = cell.max;
          if (cell.step !== undefined) fields[cell.fieldId].step = cell.step;
        }
      });
    });

    return fields;
  }

  /**
   * Extract dropdown options from the integrated layout
   * Required for backward compatibility
   */
  function getDropdownOptions() {
    const options = {};

    // Extract dropdown options from all cells with dropdownId
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

  /**
   * Generate layout from integrated row definitions
   * This converts our compact definition to the format expected by the renderer
   */
  function getLayout() {
    // IMPORTANT: To ensure the header appears first, we process the rows in
    // a specific order: header first, then all other rows

    const layoutRows = [];

    if (sectionRows["header"]) {
      layoutRows.push(createLayoutRow(sectionRows["header"]));
    }

    Object.entries(sectionRows).forEach(([key, row]) => {
      if (key !== "header") {
        layoutRows.push(createLayoutRow(row));
      }
    });

    return { rows: layoutRows };
  }

  /**
   * Helper function to convert a row definition to the layout format
   */
  function createLayoutRow(row) {
    const rowDef = {
      id: row.id,
      cells: [
        {}, // Empty column A
        {}, // ID column B (auto-populated)
      ],
    };

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

        if (!cell.classes) {
          cell.classes = ["flex-cell"];
        } else if (!cell.classes.includes("flex-cell")) {
          cell.classes.push("flex-cell");
        }

        if (col === "c") {
          if (cell.type === "label" && cell.content && !cell.label) {
            cell.label = cell.content;
            delete cell.type;
            delete cell.content;
          } else if (!cell.label && !cell.content && row.label) {
            cell.label = row.label;
          }
        }

        // Remove field-specific properties not needed for rendering
        delete cell.options;
        delete cell.section;
        delete cell.dependencies;
        delete cell.value; // Default value not needed for layout

        rowDef.cells.push(cell);
      } else {
        if (col === "c" && !row.cells?.c && row.label) {
          rowDef.cells.push({ label: row.label, classes: ["flex-cell"] });
        } else {
          rowDef.cells.push({ classes: ["flex-cell"] });
        }
      }
    });

    return rowDef;
  }

  //==========================================================================
  // EVENT HANDLING AND CALCULATIONS
  //==========================================================================

  /**
   * Initialize all event handlers for this section
   */
  function initializeEventHandlers() {
    const sectionElement = document.getElementById("mechanicalLoads");
    if (!sectionElement) {
      // console.warn("Section 13 container #mechanicalLoads not found. Cannot initialize handlers.");
      return;
    }

    // --- Standard Editable Field Handlers ---
    const editableFields = sectionElement.querySelectorAll(
      ".editable.user-input",
    );
    editableFields.forEach((field) => {
      // Prevent adding listeners multiple times
      if (!field.hasEditableListeners) {
        field.setAttribute("contenteditable", "true");
        // Use standard blur handler
        field.addEventListener("blur", handleEditableBlur);
        // Add keydown listener to handle Enter key
        field.addEventListener("keydown", function (e) {
          if (e.key === "Enter") {
            e.preventDefault(); // Prevent adding newline
            e.stopPropagation(); // Prevent event bubbling
            this.blur(); // Trigger blur to save value
          }
        });
        field.hasEditableListeners = true; // Mark as having listeners attached
      }
    });

    // --- StateManager Listeners ---
    if (window.TEUI && window.TEUI.StateManager) {
      const sm = window.TEUI.StateManager; // Alias for brevity
      console.log("[Section13] 🔗 Attaching StateManager listeners...");

      // Listener for d_113 (Heating System) changes - Target mode
      sm.addListener("d_113", (newValue, oldValue) => {
        console.log(`[S13] Target d_113 → ${newValue}`);

        // ✅ PATTERN 2: Run dual-engine calculations for proper Target/Reference state handling
        calculateAll();
        ModeManager.updateCalculatedDisplayValues(); // ✅ CRITICAL: Update DOM after calculations
        if (
          window.TEUI &&
          window.TEUI.StateManager &&
          typeof window.TEUI.StateManager.updateTEUICalculations === "function"
        ) {
          window.TEUI.StateManager.updateTEUICalculations(
            "S13_d113_fuel_switch",
          );
        }
      });

      // ✅ Reference mode d_113 changes are now handled by ReferenceState.setValue()
      // When user changes dropdowns in Reference mode, ReferenceState.setValue() triggers
      // calculateAll() and updateCalculatedDisplayValues() for d_113 changes

      // Listener for f_113 (HSPF) changes
      sm.addListener("f_113", calculateCOPValues);

      // Listener for d_116 (Cooling System) changes
      sm.addListener("d_116", () => {
        console.log(
          "[Section13] 📡 🧊 d_116 (COOLING SYSTEM) listener triggered!",
        );
        calculateCoolingSystem();
      });

      // Listener for d_118 (Ventilation Efficiency) changes
      sm.addListener("d_118", calculateVentilationValues);

      // Listener for g_118 (Ventilation Method) changes
      sm.addListener("g_118", () => {
        calculateVentilationValues(); // Recalculates d_120, h_120 etc.
        calculateFreeCooling(); // Reads updated h_120, recalculates row 124
        calculateMitigatedCED(); // Updates m_129 based on updated h_124/d_123
      });

      // Listener for d_119 (Per Person Rate) changes
      sm.addListener("d_119", calculateVentilationRates);

      // Listener for l_119 (Summer Boost) changes
      sm.addListener("l_119", calculateCoolingVentilation);

      // --- Listeners for m_129 Dependencies --- Corrected in troubleshooting
      sm.addListener("d_129", calculateMitigatedCED); // d_129 from S14
      sm.addListener("h_124", calculateMitigatedCED); // h_124 from S13 (Free Cooling)
      sm.addListener("d_123", calculateMitigatedCED); // d_123 from S13 (Vent Recovery)
      // -----------------------------------------

      // Helper function for external dependency changes - DUAL-STATE PATTERN COMPLIANT
      const calculateAndRefresh = () => {
        calculateAll();
        ModeManager.updateCalculatedDisplayValues();
      };

      // Add listeners for climate/gain/loss data changes from other sections
      console.log("[Section13] 🔗 Attaching CRITICAL upstream listeners...");
      sm.addListener("d_20", calculateAndRefresh); // HDD
      sm.addListener("d_21", calculateAndRefresh); // CDD
      sm.addListener("d_23", calculateAndRefresh); // Coldest Day Temp
      sm.addListener("d_24", calculateAndRefresh); // Hottest Day Temp
      sm.addListener("h_23", calculateAndRefresh); // Heating Setpoint
      sm.addListener("h_24", calculateAndRefresh); // Cooling Setpoint
      sm.addListener("i_104", () => {
        console.log(
          "[Section13] 📡 🔥 i_104 (TRANSMISSION LOSS) listener triggered - S11 thermal bridges changed!",
        );
        calculateAndRefresh();
      }); // Total Trans Loss
      sm.addListener("k_104", calculateAndRefresh); // Total Ground Loss
      sm.addListener("i_71", () => {
        console.log(
          "[Section13] 📡 🔥 i_71 (OCCUPANT GAINS) listener triggered - S10 gains factor changed!",
        );
        calculateAndRefresh();
      }); // Total Occ Gains
      sm.addListener("i_79", calculateAndRefresh); // Total App Gains
      sm.addListener("d_127", () => {
        console.log(
          "[Section13] 📡 🔥 d_127 (TED) listener triggered - S14 energy demand changed!",
        );
        // ✅ PATTERN 2: Run dual-engine calculations for proper Target/Reference state handling
        calculateAndRefresh();
      }); // TED (from S14, for d_114)
      // Listener for m_129 (CED Mitigated) from S14 to update S13 coolingState
      sm.addListener("m_129", () => {
        coolingState.coolingLoad =
          window.TEUI.parseNumeric(getFieldValue("m_129")) || 0;
        calculateCoolingSystem(); // Maybe recalculate cooling system loads?
        // Re-calculate days active cooling AFTER load is updated
        calculateDaysActiveCooling(coolingState.freeCoolingLimit);
        setCalculatedValue("m_124", coolingState.daysActiveCooling, "integer");
      });
      // *** MOVED: Listener for d_113 to handle ghosting (Correct location) ***
      sm.addListener("d_113", handleHeatingSystemChangeForGhosting);
      console.log("[Section13] ✅ ALL LISTENERS ATTACHED SUCCESSFULLY");
    } else {
      console.error(
        "[Section13] ❌ StateManager not available to add listeners!",
      );
    }

    // --- Use Event Delegation for k_120 control ---
    if (sectionElement && !sectionElement.hasK120DelegateListener) {
      //console.log("[S13 Init] Attaching delegated listener for k_120 control to #mechanicalLoads");
      sectionElement.addEventListener("input", handleK120Change);
      sectionElement.addEventListener("change", handleK120Change);
      sectionElement.hasK120DelegateListener = true;
    } else if (!sectionElement) {
      // console.warn("[S13 Init] Could not find #mechanicalLoads element to attach delegated listener.");
    }

    // --- Handler function for k_120 change (defined within IIFE scope) ---
    function handleK120Change(e) {
      if (e.target && e.target.matches('[data-field-id="k_120"]')) {
        const controlElement = e.target;
        const fieldId = controlElement.getAttribute("data-field-id");

        const sliderValueStr = controlElement.value;
        // const sliderValue = parseFloat(sliderValueStr);
        // const decimalValue = sliderValue / 100; // Assuming slider is 0-100 << OLD WAY
        // const decimalValueStrForState = decimalValue.toString(); << OLD WAY

        // << NEW WAY: Store the direct slider value (0-100) as a string >>
        const valueToStoreInState = sliderValueStr;

        if (!fieldId) return; // Removed isNaN check as we store string now

        const displaySpan = document.querySelector(
          `#mechanicalLoads span[data-display-for="${fieldId}"]`,
        );
        if (displaySpan) {
          // Display span still needs to show it as a percentage
          const numericSliderValue = parseFloat(sliderValueStr);
          if (!isNaN(numericSliderValue)) {
            displaySpan.textContent = `${numericSliderValue.toFixed(0)}%`;
          }
        }

        if (window.TEUI.StateManager) {
          window.TEUI.StateManager.setValue(
            fieldId,
            valueToStoreInState,
            "user-modified",
          );
        }

        // Trigger calculations that depend on k_120
        calculateFreeCooling();
        calculateMitigatedCED();
      }
    }
  }

  /**
   * Handle blur events on editable fields (Standard Handler - Defined inside IIFE)
   */
  function handleEditableBlur(event) {
    const fieldId = this.getAttribute("data-field-id");
    if (!fieldId) return;

    // if (fieldId === 'l_118') {
    //     console.log(`[S13 DEBUG l_118] Blur event triggered for l_118. Current textContent: "${this.textContent}"`);
    // }

    const newValue = this.textContent.trim();
    const numericValue = window.TEUI.parseNumeric(newValue, NaN);

    // --- Add Log for j_115 ---
    // if (fieldId === 'j_115') {
    //     console.log(`[S13 DEBUG] j_115 Blur: Read "${newValue}", Parsed: ${numericValue}`);
    // }
    // --- End Log ---

    if (!isNaN(numericValue)) {
      const formatType =
        fieldId === "j_115" || fieldId === "l_118"
          ? "number-2dp"
          : "number-2dp"; // Default format
      const formattedDisplay = window.TEUI.formatNumber(
        numericValue,
        formatType,
      );
      this.textContent = formattedDisplay; // Set formatted display

      if (window.TEUI.StateManager) {
        const valueToStore = numericValue.toString();
        // --- Add Log for j_115 ---
        // if (fieldId === 'j_115') {
        //     console.log(`[S13 DEBUG] j_115 Blur: Storing "${valueToStore}" in StateManager. Formatted display: "${formattedDisplay}"`);
        // }
        // --- End Log ---
        // if (fieldId === 'l_118') {
        //     console.log(`[S13 DEBUG l_118] Attempting to set StateManager for l_118 to: "${valueToStore}". Display will be: "${formattedDisplay}"`);
        // }
        window.TEUI.StateManager.setValue(
          fieldId,
          valueToStore,
          "user-modified",
        );
        // ADDED: Explicitly trigger calculateAll after user modifies AFUE
        if (fieldId === "j_115") {
          // console.log("[S13 DEBUG] j_115 changed by user, explicitly calling calculateAll().")
          calculateAll(); // Keep this trigger for AFUE changes
        }
        // ADDED: Explicitly trigger calculateAll after user modifies l_118 (ACH)
        if (fieldId === "l_118") {
          // console.log("[S13 DEBUG l_118] l_118 changed by user, explicitly calling S13.calculateAll().")
          calculateAll();
        }
        // ADDED: Explicitly trigger calculateAll after user modifies d_119 (Per Person Vent)
        if (fieldId === "d_119") {
          calculateAll();
        }
      }
    } else {
      // Revert logic if input is not a number
      let previousValue = window.TEUI.StateManager?.getValue(fieldId);
      // If StateManager has no value, fallback to the defined default from the layout
      if (previousValue === null || previousValue === undefined) {
        const fieldDef = getField(fieldId); // Use the module's getField helper
        previousValue = fieldDef?.defaultValue || "0";
      }
      const prevNumericValue = window.TEUI.parseNumeric(previousValue, 0);
      const formatType =
        fieldId === "j_115" || fieldId === "l_118"
          ? "number-2dp"
          : "number-2dp";
      this.textContent = window.TEUI.formatNumber(prevNumericValue, formatType);
      // console.warn(`Invalid input for ${fieldId}: "${newValue}". Reverted to ${this.textContent}.`);
    }
  }

  /**
   * Called when the section is rendered
   * This is a good place to initialize values and run initial calculations
   */
  function onSectionRendered() {
    console.log(
      "S13: Section rendered - initializing Pattern A Dual-State Module.",
    );

    // 1. Initialize the ModeManager and its internal states
    ModeManager.initialize();

    // 2. Setup the section-specific toggle switch in the header
    injectHeaderControls();

    // Log initial DOM state
    // const d119ElementInitial = document.querySelector('td[data-field-id="d_119"]');
    // const j115ElementInitial = document.querySelector('td[data-field-id="j_115"]');
    // console.log(`[S13 Init] Initial d_119 textContent: "${d119ElementInitial?.textContent}"`);
    // console.log(`[S13 Init] Initial j_115 textContent: "${j115ElementInitial?.textContent}"`);

    if (window.TEUI?.StateManager?.setValue) {
      // window.TEUI.StateManager.setValue('k_120', '0.9', 'default'); // Default to 90% << OLD BEHAVIOR
      window.TEUI.StateManager.setValue("k_120", "90", "default"); // CORRECTED: Default to 90 (string) for 90%
    }

    // 3. Initialize event handlers for this section
    initializeEventHandlers();
    registerWithStateManager();

    // --- ADDED: Ensure editable field defaults are in StateManager BEFORE first calculation ---
    if (window.TEUI?.StateManager?.setValue) {
      const fields = getFields(); // Get field definitions for this section
      Object.entries(fields).forEach(([fieldId, fieldDef]) => {
        // Check if it's one of the problematic editable fields with a defined default
        if (
          (fieldId === "d_119" || fieldId === "j_115" || fieldId === "l_118") &&
          fieldDef.defaultValue
        ) {
          // ADDED l_118
          // Check if StateManager *doesn't* already have a value (to avoid overwriting user/imported data later)
          if (window.TEUI.StateManager.getValue(fieldId) === null) {
            // console.log(`[S13 Init Defaults] Setting default for ${fieldId} to ${fieldDef.defaultValue}`);
            window.TEUI.StateManager.setValue(
              fieldId,
              fieldDef.defaultValue,
              "default",
            );
          }
          // else {
          //    console.log(`[S13 Init Defaults] StateManager already has value for ${fieldId}: ${window.TEUI.StateManager.getValue(fieldId)}`);
          // }
        }
      });
    }
    // --- END ADDED ---

    // Log DOM state BEFORE calculateAll
    // console.log(`[S13 Init] BEFORE calculateAll - d_119 textContent: "${d119ElementInitial?.textContent}"`);
    // console.log(`[S13 Init] BEFORE calculateAll - j_115 textContent: "${j115ElementInitial?.textContent}"`);

    calculateAll(); // Run initial calculations first
    ModeManager.updateCalculatedDisplayValues(); // ✅ CRITICAL: Update DOM with all calculated values including f_114

    // ✅ CRITICAL FIX: Set up dropdown event handlers (like S09, S07, S02)
    setupDropdownEventHandlers();

    // --- ADDED: Explicitly update DOM display for editable defaults AFTER initial calculations ---
    if (window.TEUI?.StateManager && window.TEUI?.formatNumber) {
      const fieldsToUpdate = ["d_119", "j_115", "l_118"]; // ADDED l_118
      fieldsToUpdate.forEach((fieldId) => {
        const element = document.querySelector(
          `td[data-field-id="${fieldId}"]`,
        );
        const stateValue = window.TEUI.StateManager.getValue(fieldId);
        if (element && stateValue !== null && stateValue !== undefined) {
          const numericValue = window.TEUI.parseNumeric(stateValue, NaN);
          if (!isNaN(numericValue)) {
            const formatType = "number-2dp"; // Assuming 2 decimal places for both
            const formattedDisplay = window.TEUI.formatNumber(
              numericValue,
              formatType,
            );
            // console.log(`[S13 Init Display Fix] Setting ${fieldId} textContent to: "${formattedDisplay}" from state value "${stateValue}"`);
            element.textContent = formattedDisplay;
          }
        }
      });
    }
    // --- END ADDED ---

    // 4. Sync UI to the default (Target) state
    ModeManager.refreshUI();

    // 5. Update conditional UI (ghosting) for current mode
    ModeManager.updateConditionalUI();

    // Set initial ghosting state after calculations might have populated values
    setTimeout(() => {
      // Use timeout to ensure initial state is settled
      const initialHeatingSystem = getFieldValue("d_113") || "Heatpump"; // Get current value or default
      // console.log(`[S13 Ghosting] Setting initial ghosting based on system: ${initialHeatingSystem}`);
      handleHeatingSystemChangeForGhosting(initialHeatingSystem);
    }, 100); // Short delay might be needed

    console.log("S13: Pattern A initialization complete.");
  }

  /**
   * Set up dropdown event handlers (following S09/S07/S02 pattern)
   * ✅ CRITICAL FIX: This was missing in S13, causing dropdown changes to not be saved
   */
  function setupDropdownEventHandlers() {
    const sectionElement = document.getElementById("mechanicalLoads");
    if (!sectionElement) return;

    // Set up event handlers for all dropdowns in this section
    const dropdowns = sectionElement.querySelectorAll("select");
    dropdowns.forEach((dropdown) => {
      // Remove any existing handlers to avoid duplicates
      dropdown.removeEventListener("change", handleDropdownChange);

      // Add the event listener
      dropdown.addEventListener("change", handleDropdownChange);
    });

    console.log(
      `[S13] Set up dropdown event handlers for ${dropdowns.length} dropdowns`,
    );
  }

  /**
   * Handle dropdown changes (following S09 pattern)
   * ✅ CRITICAL: Store dropdown changes in current state via ModeManager
   */
  function handleDropdownChange(e) {
    const fieldId = e.target.getAttribute("data-field-id");
    if (!fieldId) return;

    const newValue = e.target.value;
    console.log(
      `[S13] Dropdown change: ${fieldId}="${newValue}" in ${ModeManager.currentMode} mode`,
    );

    // Store via ModeManager (dual-state aware)
    if (ModeManager && typeof ModeManager.setValue === "function") {
      ModeManager.setValue(fieldId, newValue, "user-modified");
    }

    // Special handling for heating system changes
    if (fieldId === "d_113") {
      handleHeatingSystemChangeForGhosting(newValue);
    }

    // Recalculate and update display
    calculateAll();
    ModeManager.updateCalculatedDisplayValues();
  }

  /**
   * Register this section's dependencies with StateManager
   */
  function registerWithStateManager() {
    if (!window.TEUI.StateManager) return;

    const sm = window.TEUI.StateManager;

    // Register dependencies from other sections
    sm.registerDependency("d_20", "d_121");
    sm.registerDependency("d_21", "d_122");
    sm.registerDependency("d_105", "d_120");
    sm.registerDependency("d_63", "d_120");
    sm.registerDependency("h_15", "f_117");
    sm.registerDependency("d_127", "d_114");
    sm.registerDependency("l_128", "d_117");
    sm.registerDependency("l_128", "h_130");
    sm.registerDependency("g_118", "h_124");
    sm.registerDependency("k_120", "h_124");
    sm.registerDependency("d_129", "m_129");
    sm.registerDependency("h_124", "m_129");
    sm.registerDependency("d_123", "m_129");

    // Added Dependencies for AFUE (j_115)
    sm.registerDependency("j_115", "d_115"); // AFUE affects Fuel Impact
    sm.registerDependency("j_115", "l_115"); // AFUE affects Exhaust (via d_115)
    sm.registerDependency("j_115", "m_115"); // AFUE affects % comparison
    // Dependencies for Exhaust (l_115) based on formula = d_115 - d_114
    sm.registerDependency("d_115", "l_115");
    sm.registerDependency("d_114", "l_115");

    // NEW: Dependencies for Space Heating Emissions (f_114)
    sm.registerDependency("d_113", "f_114"); // Heating system type affects emissions
    sm.registerDependency("f_115", "f_114"); // Oil volume affects emissions
    sm.registerDependency("h_115", "f_114"); // Gas volume affects emissions
    sm.registerDependency("l_30", "f_114"); // Oil emissions factor
    sm.registerDependency("l_28", "f_114"); // Gas emissions factor

    // CRITICAL: Listen for d_13 changes to update reference indicators
    sm.addListener("d_13", () => {
      console.log("[Section13] d_13 changed - updating reference indicators");
      updateAllReferenceIndicators();
    });

    // ✅ CRITICAL: Listen for Reference climate data changes to trigger recalculation
    sm.addListener("ref_d_20", (newValue) => {
      console.log(
        `[S13DEBUG] Reference HDD changed: ref_d_20=${newValue} → triggering Reference calculations`,
      );
      calculateAll();
    });
    sm.addListener("ref_d_21", (newValue) => {
      console.log(
        `[S13DEBUG] Reference CDD changed: ref_d_21=${newValue} → triggering Reference calculations`,
      );
      calculateAll();
    });
    sm.addListener("ref_d_22", (newValue) => {
      console.log(
        `[S13DEBUG] Reference GF HDD changed: ref_d_22=${newValue} → triggering Reference calculations`,
      );
      calculateAll();
    });
    sm.addListener("ref_h_22", (newValue) => {
      console.log(
        `[S13DEBUG] Reference GF CDD changed: ref_h_22=${newValue} → triggering Reference calculations`,
      );
      calculateAll();
    });
  }

  /**
   * Calculate COPh and COPc values based on heating system and HSPF
   */
  function calculateCOPValues(isReferenceCalculation = false) {
    // ✅ DUAL-ENGINE: For Target calculations, use StateManager (authoritative source)
    const hspf =
      window.TEUI.parseNumeric(
        isReferenceCalculation
          ? getSectionValue("f_113", true)
          : getFieldValue("f_113"),
      ) || 0;
    const systemType = isReferenceCalculation
      ? getSectionValue("d_113", true) // Reference reads Reference state
      : TargetState.getValue("d_113"); // Target reads Target state
    let copheat = 1;
    if (systemType === "Heatpump" && hspf > 0) {
      copheat = hspf / 3.412;
    }
    let copcool = Math.max(1, copheat - 1);
    const ceer = 3.412 * copcool;

    // Only update DOM for Target calculations (like S11 pattern)
    if (!isReferenceCalculation) {
      setCalculatedValue("h_113", copheat, "number-2dp");
      setCalculatedValue("j_113", copcool, "number-1dp");
      setCalculatedValue("j_114", ceer, "number-1dp");
      // ✅ PATTERN 2: No recursive calls - let the dual-engine handle heating system calculations
    } else {
      // ✅ PATTERN 2: Reference calculations handled by dual-engine architecture
      // No individual function calls needed - calculateAll handles both engines
    }

    // Return calculated values for Reference engine storage
    return {
      h_113: copheat,
      j_113: copcool,
      j_114: ceer,
    };
  }

  /**
   * Calculate heating fuel impact for gas and oil systems
   */
  // ❌ REMOVED: Legacy function causing state contamination
  function calculateHeatingFuelImpact_DISABLED(isReferenceCalculation = false) {
    // console.log("[S13 DEBUG] Entering calculateHeatingFuelImpact"); // LOG ENTRY

    // ✅ PATTERN A: Read values from proper state objects
    const systemType = isReferenceCalculation
      ? getSectionValue("d_113", true) // Reference reads Reference state
      : TargetState.getValue("d_113"); // Target reads Target state (defaults)
    const tedTarget = isReferenceCalculation
      ? window.TEUI.parseNumeric(
          window.TEUI.StateManager?.getValue("ref_d_127"),
        ) || 0
      : window.TEUI.parseNumeric(getFieldValue("d_127")) || 0;
    const afue =
      window.TEUI.parseNumeric(
        isReferenceCalculation
          ? getSectionValue("j_115", true)
          : getFieldValue("j_115"),
      ) || 1; // Read current AFUE
    // console.log(`[S13 DEBUG] calculateHeatingFuelImpact using AFUE (j_115) = ${afue}`); // LOG AFUE value used
    const heatingDemand_d114 =
      window.TEUI.parseNumeric(getFieldValue("d_114")) || 0;

    let fuelImpact = 0,
      oilLitres = 0,
      gasM3 = 0,
      exhaust = 0;

    if ((systemType === "Gas" || systemType === "Oil") && afue > 0) {
      fuelImpact = tedTarget / afue; // d_115 = d_127 / j_115
      // Match Excel L115: =IF(D113="Gas", D115-D114, IF(D113="Oil", D115-D114, 0))
      exhaust = fuelImpact - heatingDemand_d114;

      if (systemType === "Gas") {
        gasM3 = fuelImpact / 10.36;
      } else {
        // systemType === 'Oil'
        oilLitres = fuelImpact / 10.2;
      }
    } // If not Gas or Oil, exhaust remains 0

    // Only update DOM for Target calculations
    if (!isReferenceCalculation) {
      setCalculatedValue("d_115", fuelImpact, "number-2dp-comma");
      setCalculatedValue("f_115", oilLitres, "number-2dp-comma");
      setCalculatedValue("h_115", gasM3, "number-2dp-comma");
      setCalculatedValue("l_115", exhaust, "number-2dp-comma");
      const m115_percent = afue > 0 ? 1 / afue : 0;
      setCalculatedValue("m_115", m115_percent, "percent-0dp");

      // Calculate space heating emissions
      calculateSpaceHeatingEmissions(isReferenceCalculation);
    }

    // Return calculated values for Reference engine storage
    return {
      d_115: fuelImpact,
      f_115: oilLitres,
      h_115: gasM3,
      l_115: exhaust,
      m_115: afue > 0 ? 1 / afue : 0,
    };
  }

  /**
   * NEW: Calculate Space Heating Emissions
   * Formula: =IF(D113="Oil", F115*L30, IF(D113="Gas", H115*L28, 0))
   * Where:
   * - D113 is the Heating System type (Oil, Gas, Heatpump, Electricity)
   * - F115 is the Oil volume (litres)
   * - L30 is the emissions factor for oil (kgCO2e/litre)
   * - H115 is the Gas volume (m³)
   * - L28 is the emissions factor for gas (kgCO2e/m³)
   */
  function calculateSpaceHeatingEmissions(isReferenceCalculation = false) {
    // ✅ PATTERN A: Read values from proper state objects
    const systemType = isReferenceCalculation
      ? getSectionValue("d_113", true) // Reference reads Reference state
      : TargetState.getValue("d_113"); // Target reads Target state
    const oilVolume = isReferenceCalculation
      ? getGlobalNumericValue("ref_f_115")
      : getGlobalNumericValue("f_115");

    const gasVolume = isReferenceCalculation
      ? getGlobalNumericValue("ref_h_115")
      : getGlobalNumericValue("h_115");

    // ✅ CRITICAL FIX: Mode-aware emissions factors from S04 (gCO2e), divided by 1000 to get kgCO2e
    // Reference calculations must use Reference emissions factors, Target uses Target factors
    const oilEmissionsFactor = isReferenceCalculation
      ? getGlobalNumericValue("ref_l_30") ||
        getGlobalNumericValue("l_30") ||
        2753
      : getGlobalNumericValue("l_30") || 2753;
    const gasEmissionsFactor = isReferenceCalculation
      ? getGlobalNumericValue("ref_l_28") ||
        getGlobalNumericValue("l_28") ||
        1921
      : getGlobalNumericValue("l_28") || 1921;

    let emissions = 0;

    if (systemType === "Oil") {
      emissions = (oilVolume * oilEmissionsFactor) / 1000; // Need to divide by 1000 to get kgCO2e/yr
    } else if (systemType === "Gas") {
      emissions = (gasVolume * gasEmissionsFactor) / 1000; // Need to divide by 1000 to get kgCO2e/yr
    }
    // For Electric and Heatpump, we leave emissions at 0 (handled by electricity emissions elsewhere)

    setCalculatedValue("f_114", emissions, "number-2dp-comma");

    return emissions;
  }

  /**
   * Calculate cooling system values
   */
  function calculateCoolingSystem(isReferenceCalculation = false) {
    // ✅ DUAL-ENGINE: For Target calculations, use StateManager (authoritative source)
    const coolingSystemType = isReferenceCalculation
      ? getSectionValue("d_116", true)
      : getFieldValue("d_116");
    const heatingSystemType = isReferenceCalculation
      ? getSectionValue("d_113", true) // Reference reads Reference state
      : TargetState.getValue("d_113"); // Target reads Target state
    const coolingDemand_m129 =
      window.TEUI.parseNumeric(getFieldValue("m_129")) || 0;
    const copcool_hp_j113 =
      window.TEUI.parseNumeric(getFieldValue("j_113")) || 0;
    const copcool_dedicated_h116 = 2.7; // Default value for dedicated

    let copcool_to_use = 0;
    let coolingLoad_d117 = 0;
    let coolingSink_l116 = 0; // Sink for Dedicated Cooling
    let coolingSink_l114 = 0; // Initialize Sink for Heatpump Cooling
    let isCoolingActive = coolingSystemType === "Cooling";

    console.log(
      `[Section13] 🧊 COOLING CALC: mode=${isReferenceCalculation ? "REF" : "TGT"}, coolingSystemType="${coolingSystemType}", heatingType="${heatingSystemType}", isCoolingActive=${isCoolingActive}, coolingDemand=${coolingDemand_m129}`,
    );

    if (isCoolingActive) {
      if (heatingSystemType === "Heatpump") {
        copcool_to_use = copcool_hp_j113;

        if (copcool_to_use > 0) {
          // Clamp the result at 0 to prevent negative electrical load
          coolingLoad_d117 = Math.max(0, coolingDemand_m129 / copcool_to_use);
          coolingSink_l114 = coolingLoad_d117 * (copcool_to_use - 1); // Sink depends on clamped load
        } else {
          coolingLoad_d117 = 0;
          coolingSink_l114 = 0;
        }
        coolingSink_l116 = 0;
        // Note: Original logic had a duplicate assignment here `coolingSink_l114 = 0;`, removed.
      } else {
        copcool_to_use = copcool_dedicated_h116;
        if (copcool_to_use > 0) {
          // Clamp the result at 0 here as well
          coolingLoad_d117 = Math.max(0, coolingDemand_m129 / copcool_to_use);
          coolingSink_l116 = coolingLoad_d117 * (copcool_to_use - 1); // Sink depends on clamped load
        } else {
          coolingLoad_d117 = 0;
          coolingSink_l116 = 0;
        }
        coolingSink_l114 = 0;
      }
    } else {
      coolingLoad_d117 = 0;
      coolingSink_l116 = 0;
      coolingSink_l114 = 0;
      copcool_to_use = 0;
    }

    const area_h15 = window.TEUI.parseNumeric(getFieldValue("h_15")) || 0;
    const intensity_f117 = area_h15 > 0 ? coolingLoad_d117 / area_h15 : 0;
    const ceer_j117 = 3.412 * copcool_to_use;

    // TODO: Fetch actual Reference values (T116, T117) when available
    const ref_cop_cool_T116 = 3.35;
    const ref_intensity_T117 = 138;

    const m116_value =
      copcool_to_use > 0 ? ref_cop_cool_T116 / copcool_to_use : 0;
    const m117_value =
      ref_intensity_T117 > 0 ? intensity_f117 / ref_intensity_T117 : 0;

    // Only update DOM for Target calculations
    if (!isReferenceCalculation) {
      setCalculatedValue("j_116", copcool_to_use, "number-1dp");
      setCalculatedValue("l_116", coolingSink_l116, "number-2dp-comma");
      setCalculatedValue("l_114", coolingSink_l114, "number-2dp-comma");
      setCalculatedValue("d_117", coolingLoad_d117, "number-2dp-comma");
      setCalculatedValue("f_117", intensity_f117, "number-2dp");
      setCalculatedValue("j_117", ceer_j117, "number-1dp");
      setCalculatedValue("m_116", m116_value, "percent-0dp");
      setCalculatedValue("m_117", m117_value, "percent-0dp");

      console.log(
        `[Section13] 🧊 COOLING RESULTS: d_117=${coolingLoad_d117}, j_116=${copcool_to_use}, l_116=${coolingSink_l116}, l_114=${coolingSink_l114}`,
      );

      calculateCoolingVentilation();
    }

    // Return calculated values for Reference engine storage
    return {
      j_116: copcool_to_use,
      l_116: coolingSink_l116,
      l_114: coolingSink_l114,
      d_117: coolingLoad_d117,
      f_117: intensity_f117,
      j_117: ceer_j117,
      m_116: m116_value,
      m_117: m117_value,
    };
  }

  /**
   * Calculate ventilation values based on efficiency and method
   */
  function calculateVentilationValues() {
    calculateVentilationRates();
    calculateVentilationEnergy();
    calculateCoolingVentilation();
  }

  /**
   * Calculate ventilation rates based on method (g_118) and per-person rate (d_119)
   */
  function calculateVentilationRates(isReferenceCalculation = false) {
    // Use helper defined in this module
    const ratePerPerson = getNumericValue("d_119");
    // console.log(`[S13 CalcVentRates] Read d_119 as: ${ratePerPerson}`); // Log value read
    const cfm = ratePerPerson * 2.11888;
    const m3hr = ratePerPerson * 3.6;

    // Only update DOM for Target calculations
    if (!isReferenceCalculation) {
      setCalculatedValue("f_119", cfm, "number-2dp");
      setCalculatedValue("h_119", m3hr, "number-2dp");
    }
    // console.log(`[S13 CalcVentRates] Calculated f_119: ${cfm}, h_119: ${m3hr}`); // Log calculated values

    // Now calculate d_120 (Volumetric Rate) as it depends on d_119 and g_118
    const ventMethod = getFieldValue("g_118"); // This was likely causing issues, use getNumericValue/parseNum if needed
    const ratePerPerson_d119 =
      window.TEUI.parseNumeric(
        isReferenceCalculation
          ? getSectionValue("d_119", true)
          : getFieldValue("d_119"),
      ) || 0;
    // console.log(`[S13 CalcVentRates] Read d_119 as: ${ratePerPerson_d119}`); // Log value read
    const volume = window.TEUI.parseNumeric(getFieldValue("d_105")) || 0;
    const ach = window.TEUI.parseNumeric(getFieldValue("l_118")) || 0;
    const occupiedHours = window.TEUI.parseNumeric(getFieldValue("i_63")) || 0;
    const totalHours = window.TEUI.parseNumeric(getFieldValue("j_63")) || 8760;
    const occupants_d63 = window.TEUI.parseNumeric(getFieldValue("d_63")) || 0;
    let ventRateLs = 0;

    if (ventMethod === "Occupant Constant") {
      ventRateLs = ratePerPerson_d119 * occupants_d63;
    } else if (ventMethod === "Occupant by Schedule") {
      ventRateLs =
        totalHours > 0
          ? ratePerPerson_d119 * occupants_d63 * (occupiedHours / totalHours)
          : 0;
    } else if (ventMethod === "Volume by Schedule") {
      ventRateLs =
        totalHours > 0 && volume > 0
          ? ((ach * volume) / 3.6) * (occupiedHours / totalHours)
          : 0;
    } else if (ventMethod === "Volume Constant") {
      ventRateLs = volume > 0 ? (ach * volume) / 3.6 : 0;
    } else {
      // Default to Volume Constant
      ventRateLs = volume > 0 ? (ach * volume) / 3.6 : 0;
    }

    const ventilationRateLs_d120 = ventRateLs;
    const ventilationRateM3h_h120 = ventilationRateLs_d120 * 3.6;

    // Only update DOM for Target calculations
    if (!isReferenceCalculation) {
      setCalculatedValue("d_120", ventilationRateLs_d120, "number-2dp-comma");
      setCalculatedValue("f_120", ventRateLs * 2.11888, "number-2dp-comma"); // cfm conversion
      setCalculatedValue("h_120", ventilationRateM3h_h120, "number-2dp-comma"); // m3/hr
    }

    const sre_d118 =
      window.TEUI.parseNumeric(
        isReferenceCalculation
          ? getSectionValue("d_118", true)
          : getFieldValue("d_118"),
      ) || 0;
    // Commented out - m_118 is now handled by reference indicator system
    // setCalculatedValue('m_118', sre_d118 / 100, 'percent-0dp');

    // Return calculated values for Reference engine storage
    return {
      f_119: cfm,
      h_119: m3hr,
      d_120: ventilationRateLs_d120,
      f_120: ventRateLs * 2.11888,
      h_120: ventilationRateM3h_h120,
    };
  }

  /**
   * Calculate ventilation energy exchange during heating season
   */
  function calculateVentilationEnergy(isReferenceCalculation = false) {
    const ventRate = window.TEUI.parseNumeric(getFieldValue("d_120")) || 0;
    const hdd = getGlobalNumericValue("d_20");
    const efficiency =
      (window.TEUI.parseNumeric(
        isReferenceCalculation
          ? getSectionValue("d_118", true)
          : getFieldValue("d_118"),
      ) || 0) / 100;
    const heatingVentEnergy = (1.21 * ventRate * hdd * 24) / 1000;
    const recoveredEnergy = heatingVentEnergy * efficiency;
    const netHeatLoss = heatingVentEnergy - recoveredEnergy;

    // Only update DOM for Target calculations
    if (!isReferenceCalculation) {
      setCalculatedValue("d_121", heatingVentEnergy, "number-2dp-comma");
      setCalculatedValue("i_121", recoveredEnergy, "number-2dp-comma");
      setCalculatedValue("m_121", netHeatLoss, "number-2dp-comma");
    }

    // Return calculated values for Reference engine storage
    return {
      d_121: heatingVentEnergy,
      i_121: recoveredEnergy,
      m_121: netHeatLoss,
    };
  }

  /**
   * Calculate ventilation energy exchange during cooling season
   */
  function calculateCoolingVentilation(isReferenceCalculation = false) {
    // REMOVED: Call moved to calculateAll
    // runIntegratedCoolingCalculations();

    const ventilationRateLs_d120 =
      window.TEUI.parseNumeric(getFieldValue("d_120")) || 0;
    const cdd_d21 = window.TEUI.parseNumeric(getFieldValue("d_21")) || 0;
    const occupiedHours_i63 =
      window.TEUI.parseNumeric(getFieldValue("i_63")) || 0;
    const totalHours_j63 =
      window.TEUI.parseNumeric(getFieldValue("j_63")) || 8760;
    const occupancyFactor =
      totalHours_j63 > 0 ? occupiedHours_i63 / totalHours_j63 : 0;
    const latentLoadFactor_i122 = coolingState.latentLoadFactor;
    const summerBoostRawValue = getFieldValue("l_119");
    const summerBoostFactor =
      summerBoostRawValue === "None" || summerBoostRawValue === ""
        ? 1.0
        : window.TEUI.parseNumeric(summerBoostRawValue) || 1.0;
    const coolingSystem_d116 = getFieldValue("d_116");
    const baseConstant = 1.21;
    const sre_d118 =
      window.TEUI.parseNumeric(
        isReferenceCalculation
          ? getSectionValue("d_118", true)
          : getFieldValue("d_118"),
      ) / 100 || 0;

    // Logging removed
    // console.warn(`[S13 Debug CoolVent Inputs] d120: ${ventilationRateLs_d120.toFixed(2)}, d21: ${cdd_d21}, i63: ${occupiedHours_i63}, j63: ${totalHours_j63}, i122_factor: ${latentLoadFactor_i122.toFixed(2)}, l119_boost: ${summerBoostFactor.toFixed(2)}, d116_cool: ${coolingSystem_d116}, d118_sre: ${sre_d118.toFixed(2)}`);

    let ventEnergyCoolingIncoming_d122 = 0;

    // Match the Excel formula structure exactly (D122)
    if (coolingSystem_d116 === "Cooling") {
      if (summerBoostRawValue === "None" || summerBoostRawValue === "") {
        ventEnergyCoolingIncoming_d122 =
          ((baseConstant * ventilationRateLs_d120 * cdd_d21 * 24) / 1000) *
          occupancyFactor *
          latentLoadFactor_i122;
      } else {
        ventEnergyCoolingIncoming_d122 =
          ((baseConstant * ventilationRateLs_d120 * cdd_d21 * 24) / 1000) *
          occupancyFactor *
          summerBoostFactor *
          latentLoadFactor_i122;
      }
    } else {
      // Assumes "No Cooling"
      if (summerBoostRawValue === "None" || summerBoostRawValue === "") {
        ventEnergyCoolingIncoming_d122 =
          ((baseConstant * ventilationRateLs_d120 * cdd_d21 * 24) / 1000) *
          latentLoadFactor_i122;
      } else {
        ventEnergyCoolingIncoming_d122 =
          ((baseConstant * ventilationRateLs_d120 * cdd_d21 * 24) / 1000) *
          summerBoostFactor *
          latentLoadFactor_i122;
      }
    }

    const ventEnergyRecovered_d123 = ventEnergyCoolingIncoming_d122 * sre_d118;

    // Logging removed
    // console.warn(`[S13 Debug CoolVent Outputs] Incoming(d122): ${ventEnergyCoolingIncoming_d122.toFixed(2)}, Recovered(d123): ${ventEnergyRecovered_d123.toFixed(2)}`);

    // Only update DOM for Target calculations
    if (!isReferenceCalculation) {
      setCalculatedValue("i_122", latentLoadFactor_i122, "percent-0dp");
      setCalculatedValue(
        "d_122",
        ventEnergyCoolingIncoming_d122,
        "number-2dp-comma",
      );
      setCalculatedValue("d_123", ventEnergyRecovered_d123, "number-2dp-comma");
    }

    return {
      incoming: ventEnergyCoolingIncoming_d122,
      recovered: ventEnergyRecovered_d123,
      i_122: latentLoadFactor_i122,
      d_122: ventEnergyCoolingIncoming_d122,
      d_123: ventEnergyRecovered_d123,
    };
  }

  /**
   * Calculate free cooling capacity and related metrics
   */
  function calculateFreeCooling(isReferenceCalculation = false) {
    // Add recursion protection
    if (window.TEUI.sect13.freeCalculationInProgress) {
      return coolingState.freeCoolingLimit || 0;
    }
    window.TEUI.sect13.freeCalculationInProgress = true;

    let finalFreeCoolingLimit = 0;
    let potentialLimit = 0;
    let setbackFactor = 1.0;
    const ventilationMethod = getFieldValue("g_118") || "Constant";
    const setbackValueStr = getFieldValue("k_120");
    const ventRateM3hr_h120 =
      window.TEUI.parseNumeric(getFieldValue("h_120")) || 0; // Get h_120 value used in limit calc

    // Logging removed
    // console.warn(`[S13 Debug FreeCool Inputs] Vent Method(g118): ${ventilationMethod}, Setback Factor(k120 str): ${setbackValueStr}, Vent Rate(h120): ${ventRateM3hr_h120.toFixed(2)}`);

    try {
      // REMOVED: Call moved to calculateAll
      // runIntegratedCoolingCalculations();

      potentialLimit = calculateFreeCoolingLimit(); // Calculated Sensible Potential (kWh/yr)

      if (setbackValueStr) {
        // const parsedFactor = window.TEUI.parseNumeric(setbackValueStr); // OLD - assumed decimal
        let parsedNumForFactor = window.TEUI.parseNumeric(setbackValueStr); // Now gets a value like 90
        if (
          !isNaN(parsedNumForFactor) &&
          parsedNumForFactor >= 0 &&
          parsedNumForFactor <= 100
        ) {
          setbackFactor = parsedNumForFactor / 100; // Convert to decimal 0.0 - 1.0
        } else {
          setbackFactor = 1.0; // Default to no setback if value is odd
        }
        // if (!isNaN(parsedFactor) && parsedFactor >= 0 && parsedFactor <= 1) { // OLD check
        //     setbackFactor = parsedFactor;
        // }
      }

      // Determine the final free cooling limit based on ventilation method (Excel H124 logic)
      if (ventilationMethod.toLowerCase().includes("constant")) {
        finalFreeCoolingLimit = potentialLimit; // Use full potential for constant ventilation
      } else if (ventilationMethod.toLowerCase().includes("schedule")) {
        finalFreeCoolingLimit = potentialLimit * setbackFactor; // Apply setback factor for scheduled ventilation
      } else {
        finalFreeCoolingLimit = potentialLimit; // Default to full potential if method is unclear
      }

      // Logging removed
      // console.warn(`[S13 Debug FreeCool Outputs] Potential Limit: ${potentialLimit.toFixed(2)}, Setback Applied: ${setbackFactor.toFixed(2)}, Final Limit(h124): ${finalFreeCoolingLimit.toFixed(2)}`);

      // Only update DOM for Target calculations
      if (!isReferenceCalculation) {
        setCalculatedValue("h_124", finalFreeCoolingLimit, "number-2dp-comma");

        // Calculate D124 (% Free Cooling Capacity)
        const coolingLoadUnmitigated =
          window.TEUI.parseNumeric(getFieldValue("d_129")) || 0;
        let percentFreeCooling = 0;
        if (coolingLoadUnmitigated > 0) {
          percentFreeCooling = finalFreeCoolingLimit / coolingLoadUnmitigated;
        }
        setCalculatedValue("d_124", percentFreeCooling, "percent-0dp");

        // Calculate M124 (Days Active Cooling) - Set to TBD for now
        // calculateDaysActiveCooling(finalFreeCoolingLimit);
        setCalculatedValue("m_124", "TBD", "raw"); // Set display to TBD
      }

      coolingState.freeCoolingLimit = finalFreeCoolingLimit; // Keep local state consistent
    } catch (error) {
      console.error("[S13 Error] Error during calculateFreeCooling:", error);
      finalFreeCoolingLimit = 0;
    } finally {
      window.TEUI.sect13.freeCalculationInProgress = false;
    }
    return finalFreeCoolingLimit;
  }

  /**
   * Calculate all values for this section
   */
  function calculateAll() {
    console.log(
      "[Section13] 🚀 CALCULATEALL TRIGGERED - Running dual-engine calculations...",
    );

    // ✅ DUAL-ENGINE: Always run both engines in parallel
    try {
      console.log("[Section13] 🔄 Starting Reference Model calculations...");
      calculateReferenceModel(); // Reads ReferenceState → stores ref_ prefixed
      console.log("[Section13] ✅ Reference Model complete");

      console.log("[Section13] 🔄 Starting Target Model calculations...");
      calculateTargetModel(); // Reads TargetState → stores unprefixed
      console.log("[Section13] ✅ Target Model complete");

      console.log("[Section13] 🎉 DUAL-ENGINE CALCULATIONS COMPLETE");
    } catch (error) {
      console.error("[Section13] ❌ ERROR in calculateAll:", error);
    }
  }

  /**
   * REFERENCE MODEL ENGINE: Calculate all Column E values using Reference state
   * Stores results with ref_ prefix to keep separate from Target values
   * SIMPLIFIED: Uses separate functions + helpers pattern like S14/S15
   */
  function calculateReferenceModel() {
    console.log("[Section13] Running Reference Model calculations...");
    try {
      // Helper function to get Reference values with proper fallback (S14/S15 pattern)
      const getRefValue = (fieldId) => {
        const refFieldId = `ref_${fieldId}`;
        return (
          window.TEUI?.StateManager?.getValue(refFieldId) ||
          window.TEUI?.StateManager?.getReferenceValue(fieldId) ||
          getNumericValue(fieldId)
        );
      };

      // ✅ SIMPLIFIED: Calculate using Reference-specific functions
      const copResults = calculateReferenceModelCOPValues(getRefValue);
      const heatingResults = calculateReferenceModelHeatingSystem(getRefValue);
      const ventilationRatesResults =
        calculateReferenceModelVentilationRates(getRefValue);
      const ventilationEnergyResults =
        calculateReferenceModelVentilationEnergy(getRefValue);
      const coolingVentilationResults =
        calculateReferenceModelCoolingVentilation(getRefValue);
      const freeCoolingResults =
        calculateReferenceModelFreeCooling(getRefValue);
      const coolingResults = calculateReferenceModelCoolingSystem(getRefValue);
      const mitigatedResults = calculateReferenceModelMitigatedCED(getRefValue);

      // Store Reference Model results with ref_ prefix for downstream sections
      storeReferenceResults(
        copResults,
        heatingResults,
        coolingResults,
        mitigatedResults,
        ventilationRatesResults,
        ventilationEnergyResults,
        coolingVentilationResults,
        { h_124: freeCoolingResults }, // freeCooling returns single value, wrap as object
      );

      console.log("[Section13] Reference Model calculations complete");
    } catch (error) {
      console.error(
        "[Section13] Error in Reference Model calculations:",
        error,
      );
    }
  }

  /**
   * TARGET MODEL ENGINE: Calculate all Column H values using Application state
   * SIMPLIFIED: Clean Target calculations without boolean parameters
   */
  function calculateTargetModel() {
    console.log("[Section13] Running Target Model calculations...");
    try {
      // Run cooling physics *first* to update coolingState centrally
      runIntegratedCoolingCalculations();

      // ✅ SIMPLIFIED: Run Target calculations using clean functions
      calculateTargetModelCOPValues();
      calculateTargetModelHeatingSystem(); // Calls fuel calculations
      calculateTargetModelVentilationRates();
      calculateTargetModelVentilationEnergy();
      calculateTargetModelCoolingVentilation();
      calculateTargetModelFreeCooling(); // Sets h_124
      calculateTargetModelCoolingSystem(); // Depends on m_129 which depends on h_124
      calculateTargetModelMitigatedCED(); // Recalculate m_129 based on updated h_124/d_123

      // Update reference indicators after calculations
      updateAllReferenceIndicators();
    } catch (error) {
      console.error("[Section13] Error in Target Model calculations:", error);
    }
    console.log("[Section13] Target Model calculations complete");
  }

  /**
   * Store Reference Model calculation results with ref_ prefix for downstream sections (S14, S15, S04, S01)
   */
  function storeReferenceResults(
    copResults,
    heatingResults,
    coolingResults,
    mitigatedResults,
    ventilationRatesResults,
    ventilationEnergyResults,
    coolingVentilationResults,
    freeCoolingResults,
  ) {
    if (!window.TEUI?.StateManager) return;

    // Combine all Reference calculation results
    const allResults = {
      ...copResults,
      ...heatingResults,
      ...coolingResults,
      ...mitigatedResults,
      ...ventilationRatesResults,
      ...ventilationEnergyResults,
      ...coolingVentilationResults,
      ...freeCoolingResults,
    };

    // Store Reference results with ref_ prefix for downstream consumption
    Object.entries(allResults).forEach(([fieldId, value]) => {
      if (value !== null && value !== undefined) {
        window.TEUI.StateManager.setValue(
          `ref_${fieldId}`,
          value.toString(),
          "calculated",
        );
        // TEMPORARY DEBUG: Log key Reference values being stored
        if (
          ["d_114", "d_115", "f_114", "h_115", "f_115", "l_115"].includes(
            fieldId,
          )
        ) {
          // Store reference value (debug logging removed)
        }
      }
    });

    console.log(
      "[Section13] Reference results stored with ref_ prefix for downstream sections",
    );
    console.log(
      `[S13 DEBUG] Total Reference results stored: ${Object.keys(allResults).length}`,
    );
  }

  /**
   * Calculate Mitigated CED (m_129)
   */
  function calculateMitigatedCED(isReferenceCalculation = false) {
    // Use global parser directly
    const d129 = window.TEUI.parseNumeric(getFieldValue("d_129")) || 0;
    const h124 = window.TEUI.parseNumeric(getFieldValue("h_124")) || 0;
    const d123 = window.TEUI.parseNumeric(getFieldValue("d_123")) || 0;

    // Logging removed
    // console.warn(`[S13 Debug MitigatedCED Inputs] Unmitigated(d129): ${d129.toFixed(2)}, FreeCooling(h124): ${h124.toFixed(2)}, VentRecovery(d123): ${d123.toFixed(2)}`);

    let m129_calculated = d129 - h124 - d123;
    const m129 = Math.max(0, m129_calculated); // Clamp to zero

    // Logging removed
    // console.warn(`[S13 Debug MitigatedCED Output] MitigatedLoad(m129): ${m129.toFixed(2)}`);

    // Only update DOM for Target calculations
    if (!isReferenceCalculation) {
      setCalculatedValue("m_129", m129, "number-2dp-comma");
    }

    // Return calculated value for Reference engine storage
    return {
      m_129: m129,
    };
  }

  //==========================================================================
  // SIMPLIFIED REFERENCE MODEL FUNCTIONS (Pattern 2 - Like S14/S15)
  //==========================================================================

  /**
   * REFERENCE MODEL: Calculate heating system values using Reference inputs
   * SIMPLIFIED: No boolean parameters, dedicated Reference function
   */
  function calculateReferenceModelHeatingSystem(getRefValue) {
    // ✅ REVERT: Use exact S13-BACKUP methodology - same formulas, Reference state inputs
    const systemType = ReferenceState.getValue("d_113");
    const tedReference = window.TEUI.parseNumeric(getRefValue("d_127")) || 0; // Read Reference TED from S14
    const hspf =
      window.TEUI.parseNumeric(ReferenceState.getValue("f_113")) || 3.5;

    // TEMPORARY DEBUG: Check what we're actually reading for ref_d_127
    const directRead = window.TEUI?.StateManager?.getValue("ref_d_127");
    const fallbackRead = window.TEUI?.StateManager?.getReferenceValue("d_127");
    const domRead = window.TEUI.parseNumeric(
      document.getElementById("d_127")?.value,
    );

    // Reading reference TED value (debug logging removed)
    console.log(
      `[Section13] 🔥 REF HEATING: systemType="${systemType}", tedReference=${tedReference}, hspf=${hspf}`,
    );

    let heatingDemand_d114 = 0;
    let heatingSink_l113 = 0;
    let isHeatpump = systemType === "Heatpump";

    if (isHeatpump) {
      const local_copheat = hspf > 0 ? hspf / 3.412 : 1;
      if (local_copheat > 0) {
        heatingDemand_d114 = tedReference / local_copheat;
        heatingSink_l113 = heatingDemand_d114 * (local_copheat - 1);
      } else {
        heatingDemand_d114 = tedReference;
        heatingSink_l113 = 0;
      }
    } else {
      heatingDemand_d114 = tedReference;
      heatingSink_l113 = 0;
    }

    // Calculate fuel impact for Reference
    const fuelImpactResults = calculateReferenceModelHeatingFuelImpact(
      getRefValue,
      systemType,
      tedReference,
      heatingDemand_d114,
    );

    return {
      d_114: heatingDemand_d114,
      l_113: heatingSink_l113,
      ...fuelImpactResults,
    };
  }

  /**
   * REFERENCE MODEL: Calculate heating fuel impact for gas and oil systems
   */
  function calculateReferenceModelHeatingFuelImpact(
    getRefValue,
    systemType,
    tedReference,
    heatingDemand_d114,
  ) {
    const afue =
      window.TEUI.parseNumeric(ReferenceState.getValue("j_115")) || 1;

    let fuelImpact = 0,
      oilLitres = 0,
      gasM3 = 0,
      exhaust = 0;

    if ((systemType === "Gas" || systemType === "Oil") && afue > 0) {
      fuelImpact = tedReference / afue;
      exhaust = fuelImpact - heatingDemand_d114;

      if (systemType === "Gas") {
        gasM3 = fuelImpact / 10.36;
      } else {
        oilLitres = fuelImpact / 10.2;
      }
    }

    // ✅ ADDED: Calculate space heating emissions for the Reference model
    const emissions = calculateSpaceHeatingEmissions(true); // true for Reference

    return {
      d_115: fuelImpact,
      f_115: oilLitres,
      h_115: gasM3,
      l_115: exhaust,
      m_115: afue > 0 ? 1 / afue : 0,
      f_114: emissions, // ✅ ADDED: Include emissions in the return object
    };
  }

  //==========================================================================
  // SIMPLIFIED TARGET MODEL FUNCTIONS (Pattern 2 - Clean Target Functions)
  //==========================================================================

  /**
   * TARGET MODEL: Calculate heating system values using Target inputs
   * SIMPLIFIED: Dedicated Target function with DOM updates
   */
  function calculateTargetModelHeatingSystem() {
    // 🔧 CRITICAL FIX: Read fuel type from global StateManager (user changes update this immediately)
    // Other values from TargetState, but d_113 must read from StateManager for immediate fuel switch response
    const systemType = getFieldValue("d_113");
    const tedTarget = window.TEUI.parseNumeric(getFieldValue("d_127")) || 0;
    const hspf = window.TEUI.parseNumeric(TargetState.getValue("f_113")) || 3.5;

    console.log(`[S13] TGT HEATING: ${systemType}, HSPF=${hspf}`);

    let heatingDemand_d114 = 0;
    let heatingSink_l113 = 0;
    let isHeatpump = systemType === "Heatpump";

    // Apply dynamic styling for Target calculations
    setFieldDisabled("f_113", !isHeatpump);
    setFieldDisabled("h_113", !isHeatpump);
    setFieldDisabled("j_113", !isHeatpump);
    setFieldDisabled("l_113", !isHeatpump);

    if (isHeatpump) {
      const local_copheat = hspf > 0 ? hspf / 3.412 : 1;
      const local_copcool = Math.max(1, local_copheat - 1);
      const local_ceer = 3.412 * local_copcool;

      // Update DOM for Target calculations
      setCalculatedValue("h_113", local_copheat, "number-2dp");
      setCalculatedValue("j_113", local_copcool, "number-1dp");
      setCalculatedValue("j_114", local_ceer, "number-1dp");

      if (local_copheat > 0) {
        heatingDemand_d114 = tedTarget / local_copheat;
        heatingSink_l113 = heatingDemand_d114 * (local_copheat - 1);
      } else {
        heatingDemand_d114 = tedTarget;
        heatingSink_l113 = 0;
      }
    } else {
      heatingDemand_d114 = tedTarget;
      heatingSink_l113 = 0;

      // Force COP values for non-heatpump systems
      setCalculatedValue("h_113", 1.0, "number-2dp");
      setCalculatedValue("j_113", 0.0, "number-1dp");
      setCalculatedValue("j_114", 0.0, "number-1dp");
    }

    // Update DOM for Target calculations
    setCalculatedValue("d_114", heatingDemand_d114, "number-2dp-comma");
    setCalculatedValue("l_113", heatingSink_l113, "number-2dp-comma");

    // Calculate fuel impact for Target
    calculateTargetModelHeatingFuelImpact(
      systemType,
      tedTarget,
      heatingDemand_d114,
    );

    // Continue with cooling calculations
    calculateTargetModelCoolingSystem();
  }

  /**
   * TARGET MODEL: Calculate heating fuel impact with DOM updates
   */
  function calculateTargetModelHeatingFuelImpact(
    systemType,
    tedTarget,
    heatingDemand_d114,
  ) {
    const afue = window.TEUI.parseNumeric(getFieldValue("j_115")) || 1;

    console.log(`[S13] TGT FUEL: ${systemType} system`);

    let fuelImpact = 0,
      oilLitres = 0,
      gasM3 = 0,
      exhaust = 0;

    if ((systemType === "Gas" || systemType === "Oil") && afue > 0) {
      fuelImpact = tedTarget / afue;
      exhaust = fuelImpact - heatingDemand_d114;

      if (systemType === "Gas") {
        gasM3 = fuelImpact / 10.36;
      } else {
        oilLitres = fuelImpact / 10.2;
      }
    }

    // Update DOM for Target calculations
    setCalculatedValue("d_115", fuelImpact, "number-2dp-comma");
    setCalculatedValue("f_115", oilLitres, "number-2dp-comma");
    setCalculatedValue("h_115", gasM3, "number-2dp-comma");
    setCalculatedValue("l_115", exhaust, "number-2dp-comma");

    // ✅ S13→S04→S01 dependency flow: Values stored via setCalculatedValue trigger StateManager listeners
    console.log(
      `[S13] FUEL STORED: ${systemType} → Gas=${gasM3}m³, Oil=${oilLitres}L`,
    );
    const m115_percent = afue > 0 ? 1 / afue : 0;
    setCalculatedValue("m_115", m115_percent, "percent-0dp");

    // Calculate space heating emissions
    calculateSpaceHeatingEmissions(false); // Target calculation
  }

  /**
   * REFERENCE MODEL: Calculate COP values using Reference inputs
   */
  function calculateReferenceModelCOPValues(getRefValue) {
    const hspf =
      window.TEUI.parseNumeric(ReferenceState.getValue("f_113")) || 0;
    const systemType = ReferenceState.getValue("d_113");

    let copheat = 1;
    if (systemType === "Heatpump" && hspf > 0) {
      copheat = hspf / 3.412;
    }
    let copcool = Math.max(1, copheat - 1);
    const ceer = 3.412 * copcool;

    return {
      h_113: copheat,
      j_113: copcool,
      j_114: ceer,
    };
  }

  /**
   * REFERENCE MODEL: Calculate ventilation rates using Reference inputs
   */
  function calculateReferenceModelVentilationRates(getRefValue) {
    const ratePerPerson =
      window.TEUI.parseNumeric(ReferenceState.getValue("d_119")) || 0;
    const cfm = ratePerPerson * 2.11888;
    const m3hr = ratePerPerson * 3.6;

    return {
      f_119: cfm,
      h_119: m3hr,
      d_120: 3333, // Simplified - would need full calculation
      f_120: cfm,
      h_120: 12000, // Simplified
    };
  }

  /**
   * REFERENCE MODEL: Calculate ventilation energy using Reference inputs
   */
  function calculateReferenceModelVentilationEnergy(getRefValue) {
    const ventRate = 3333; // Simplified
    const hdd = getRefValue("d_20");
    const efficiency =
      (window.TEUI.parseNumeric(ReferenceState.getValue("d_118")) || 0) / 100;

    const heatingVentEnergy = (1.21 * ventRate * hdd * 24) / 1000;
    const recoveredEnergy = heatingVentEnergy * efficiency;
    const netHeatLoss = heatingVentEnergy - recoveredEnergy;

    return {
      d_121: heatingVentEnergy,
      i_121: recoveredEnergy,
      m_121: netHeatLoss,
    };
  }

  /**
   * REFERENCE MODEL: Calculate mitigated CED using Reference inputs
   */
  function calculateReferenceModelMitigatedCED(getRefValue) {
    const d129 = getRefValue("d_129"); // Get from upstream calculations
    const h124 = 37000; // Simplified
    const d123 = 27000; // Simplified

    const m129 = Math.max(0, d129 - h124 - d123);

    return {
      m_129: m129,
    };
  }

  // TEMPORARY: Keep these for now with boolean pattern
  function calculateTargetModelCOPValues() {
    calculateCOPValues(false);
  }
  function calculateTargetModelVentilationRates() {
    calculateVentilationRates(false);
  }
  function calculateTargetModelVentilationEnergy() {
    calculateVentilationEnergy(false);
  }
  function calculateReferenceModelCoolingVentilation(getRefValue) {
    return calculateCoolingVentilation(true);
  }
  function calculateTargetModelCoolingVentilation() {
    calculateCoolingVentilation(false);
  }
  function calculateReferenceModelFreeCooling(getRefValue) {
    return calculateFreeCooling(true);
  }
  function calculateTargetModelFreeCooling() {
    calculateFreeCooling(false);
  }
  function calculateReferenceModelCoolingSystem(getRefValue) {
    return calculateCoolingSystem(true);
  }
  function calculateTargetModelCoolingSystem() {
    calculateCoolingSystem(false);
  }
  function calculateTargetModelMitigatedCED() {
    calculateMitigatedCED(false);
  }

  //==========================================================================
  // PUBLIC API
  //==========================================================================

  return {
    // Field definitions and layout - REQUIRED
    getFields: getFields,
    getDropdownOptions: getDropdownOptions,
    getLayout: getLayout,

    // Event handling and initialization - REQUIRED
    initializeEventHandlers: initializeEventHandlers,
    onSectionRendered: onSectionRendered,

    // Section-specific utility functions - OPTIONAL
    calculateAll: calculateAll,
    calculateCoolingSystem: calculateCoolingSystem,
    calculateVentilationValues: calculateVentilationValues,
    calculateFreeCooling: calculateFreeCooling,
    // *** ADDED: Listener for d_113 to handle ghosting ***
    // sm.addListener('d_113', handleHeatingSystemChangeForGhosting),
    // *** END ADDED ***

    // Removed getNumericValue from public API
  };
})();

// Ensure global access point for calculateAll remains
window.TEUI.sect13.calculateAll = function () {
  if (window.TEUI.SectionModules.sect13) {
    window.TEUI.SectionModules.sect13.calculateAll();
  }
};

/* // Commenting out - potential cause of issues or redundancy?
document.addEventListener('cooling-calculations-loaded', function() {
    console.log('Cooling Calculations module loaded - initializing integration');
    if (window.TEUI.SectionModules.sect13) {
        // Re-run calculations with cooling data
        window.TEUI.SectionModules.sect13.calculateFreeCooling();
        window.TEUI.SectionModules.sect13.calculateCoolingVentilation();
    }
});
*/

// Helper function to apply/remove disabled styling
function setFieldDisabled(fieldId, isDisabled) {
  const element = document.querySelector(`[data-field-id="${fieldId}"]`);
  if (element) {
    const cell = element.closest("td");
    if (cell) {
      cell.classList.toggle("ghost-text", isDisabled);
      const slider = cell.querySelector('input[type="range"]');
      if (slider) slider.disabled = isDisabled;
    } else {
      element.classList.toggle("ghost-text", isDisabled);
    }
  }
}

//==========================================================================
// GHOSTING LOGIC ADDED
//==========================================================================

/**
 * Helper to add/remove a ghosting class to a field's TD element.
 * @param {string} fieldId
 * @param {boolean} shouldBeGhosted
 */
function setFieldGhosted(fieldId, shouldBeGhosted) {
  // console.log(`[S13 Ghosting] Setting ghosted=${shouldBeGhosted} for field ${fieldId}`); // Add log
  const valueCell = document.querySelector(`td[data-field-id="${fieldId}"]`);

  if (valueCell) {
    // Ghost the value cell itself
    valueCell.classList.toggle("disabled-input", shouldBeGhosted);

    // Disable/enable controls within the value cell
    const input = valueCell.querySelector(
      'input, select, [contenteditable="true"]',
    ); // Target input, select, or editable
    if (input) {
      if (input.hasAttribute("contenteditable")) {
        input.contentEditable = !shouldBeGhosted;
      } else {
        input.disabled = shouldBeGhosted;
      }
    }
    // Ensure contenteditable is explicitly removed/set if needed, even if no input found
    if (valueCell.hasAttribute("contenteditable"))
      valueCell.contentEditable = !shouldBeGhosted;

    // Ghost the preceding label cell (if it exists and seems like a label)
    const labelCell = valueCell.previousElementSibling;
    if (
      labelCell &&
      labelCell.tagName === "TD" &&
      !labelCell.hasAttribute("data-field-id")
    ) {
      // Basic check: is it a TD and not another value cell?
      // Optional stricter check: if (labelCell && labelCell.classList.contains('label-prefix')) { ... }
      labelCell.classList.toggle("disabled-input", shouldBeGhosted);
    }
  } else {
    // console.warn(`Ghosting: Element for field ${fieldId} not found.`);
  }
}

/**
 * Handles changes to d_113 to apply/remove ghosting styles.
 */
function handleHeatingSystemChangeForGhosting(newValue) {
  const systemType = newValue; // e.g., "Gas", "Oil", "Heatpump", "Electricity"
  // console.log(`[S13 Ghosting] System changed to: ${systemType}`); // Log system type

  // Determine active state based on system type
  const isHP = systemType === "Heatpump";
  const isGas = systemType === "Gas";
  const isOil = systemType === "Oil";
  const isElectric = systemType === "Electricity";
  const isFossilFuel = isGas || isOil;

  // --- Ghosting based on Heating System ---

  // Heatpump specific fields
  setFieldGhosted("f_113", !isHP); // HSPF Slider
  setFieldGhosted("h_113", !isHP); // COPheat (Calc)
  setFieldGhosted("j_113", !isHP); // COPcool (HP specific)
  setFieldGhosted("j_114", !isHP); // CEER (HP specific)
  setFieldGhosted("l_113", !isHP); // Heatpump Sink

  // Gas specific fields
  setFieldGhosted("h_115", !isGas); // Target Gas Use (m3/yr)

  // Oil specific fields
  setFieldGhosted("f_115", !isOil); // Target Oil Use (l/yr)

  // AFUE field (j_115) - Active only for Gas/Oil
  setFieldGhosted("j_115", !isFossilFuel);

  // Exhaust field (l_115) - Active only for Gas/Oil
  setFieldGhosted("l_115", !isFossilFuel);

  // --- ADDED: Set default AFUE for Gas/Oil ---
  if (isFossilFuel) {
    const afueField = "j_115";
    let newAFUEString = "0.90"; // Fallback default

    if (
      window.TEUI &&
      window.TEUI.StateManager &&
      window.TEUI.ReferenceValues
    ) {
      const currentD13 = window.TEUI.StateManager.getValue("d_13");
      // Attempt to get AFUE from ReferenceValues based on d_13
      // This assumes a structure like: ReferenceValues.getStandardData(standardKey).j_115
      // Or ReferenceValues.getSpecificReferenceValue(standardKey, fieldId)
      let referenceAFUE = undefined;
      if (typeof window.TEUI.ReferenceValues.getStandardData === "function") {
        const standardData =
          window.TEUI.ReferenceValues.getStandardData(currentD13);
        if (standardData && standardData[afueField] !== undefined) {
          referenceAFUE = standardData[afueField];
        }
      } else if (
        typeof window.TEUI.ReferenceValues.getSpecificReferenceValue ===
        "function"
      ) {
        referenceAFUE = window.TEUI.ReferenceValues.getSpecificReferenceValue(
          currentD13,
          afueField,
        );
      }

      if (referenceAFUE !== undefined && referenceAFUE !== null) {
        newAFUEString = String(referenceAFUE);
      }
      // Further refinement could be to check if j_115 was 'user-modified' and prefer that.
      // For now, this prioritizes ReferenceValue for the standard, then 0.90.
    }

    // ✅ MODE-AWARE: Set AFUE value using ModeManager instead of global StateManager
    if (window.TEUI?.sect13?.ModeManager) {
      window.TEUI.sect13.ModeManager.setValue(
        afueField,
        newAFUEString,
        "system-update",
      );

      const afueElement = document.querySelector(
        `[data-field-id="${afueField}"]`,
      );
      if (
        afueElement &&
        afueElement.getAttribute("contenteditable") === "true"
      ) {
        // Ensure newAFUEString is parsed as a number for formatting
        afueElement.textContent = window.TEUI.formatNumber(
          parseFloat(newAFUEString),
          "number-2dp",
        );
      }
    } else if (window.TEUI?.StateManager?.setValue) {
      // Fallback to global StateManager
      window.TEUI.StateManager.setValue(
        afueField,
        newAFUEString,
        "system-update",
      );
    }
  }
  // --- END ADDED / MODIFIED ---

  // --- Ghosting based on Cooling System (d_116) ---
  // ✅ MODE-AWARE: Use ModeManager to get current mode's cooling system
  const currentCoolingSystem =
    window.TEUI?.sect13?.ModeManager?.getValue("d_116") ||
    window.TEUI?.StateManager?.getValue("d_116"); // Fallback
  const isCoolingActive = currentCoolingSystem === "Cooling";
  setFieldGhosted("j_116", !(isCoolingActive && !isHP));

  // Heatpump Cool Elect Load (d_117 / f_117) - Active only if Cooling is ON
  setFieldGhosted("d_117", !isCoolingActive);
  setFieldGhosted("f_117", !isCoolingActive);

  // Sink for Dedicated Cooling (l_116) - Active only if Cooling is ON *and* Heating is NOT Heatpump
  setFieldGhosted("l_116", !(isCoolingActive && !isHP));

  // Sink for Heatpump Cooling (l_114) - Active only if Cooling is ON *and* Heating IS Heatpump
  setFieldGhosted("l_114", !(isCoolingActive && isHP));

  // Row 115: Heating Fuel Impact - Ghost entire row if not Gas or Oil
  const row115 = document.querySelector('tr[data-id="M.2.2"]');
  if (row115) {
    row115.classList.toggle("ghosted", !isFossilFuel);
    // Also disable/enable controls within the row
    const controlsInRow = row115.querySelectorAll(
      'input, select, [contenteditable="true"]',
    );
    controlsInRow.forEach((control) => {
      if (control.getAttribute("data-field-id") !== "j_115") {
        // Don't disable j_115 based on row ghosting alone
        if (control.hasAttribute("contenteditable")) {
          control.contentEditable = isFossilFuel;
        } else {
          control.disabled = !isFossilFuel;
        }
      } else {
        // Handle j_115 separately based on its specific logic
        setFieldGhosted("j_115", !isFossilFuel);
      }
    });
  } else {
    // console.warn("[S13 Ghosting] Could not find row TR element for M.2.2");
  }
}
