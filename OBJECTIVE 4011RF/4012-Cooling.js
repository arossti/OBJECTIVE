/**
 * 4011-Cooling.js
 * Cooling calculations module for TEUI Calculator 4.011
 *
 * This module implements the calculations from COOLING-TARGET.csv and provides
 * integration with Section13 (Mechanical Loads) and other sections that need
 * cooling-related data.
 *
 * ====================================================================
 * IMPLEMENTATION NOTES
 * ====================================================================
 *
 * This module implements several complex psychrometric and thermal calculations:
 *
 * 1. LATENT LOAD FACTOR (A6): Ratio affecting cooling energy needed for humidity control
 *    - Formula: 1 + (Cooling Season Mean RH / Night-Time Temp)
 *    - Used by Section13 for ventilation cooling energy calculations
 *
 * 2. FREE COOLING LIMIT (A33): Maximum cooling energy available from ventilation
 *    - Based on mass air flow, temperature differential, and humidity capacity
 *    - Used to calculate potential passive cooling percentage
 *
 * 3. WET BULB TEMPERATURE (E64-E66): Measures combined temperature/humidity effects
 *    - Uses linear approximation formulas based on dry bulb temp and RH
 *    - Important for cooling capacity calculations
 *
 * Formulas are implemented from COOLING-TARGET.csv with appropriate
 * variable naming and code organization for maintainability.
 *
 * ====================================================================
 * CROSS-MODULE INTEGRATION POINTS
 * ====================================================================
 *
 * SECTION13 INTEGRATION:
 * - Section13.js references values through:
 *   1. Direct getter methods (getLatentLoadFactor(), etc.)
 *   2. StateManager values (cooling_latentLoadFactor, etc.)
 *   3. Event listener for 'cooling-calculations-loaded'
 *
 * STATEMANAGER COORDINATION:
 * - Stores key calculated values with "cooling_" prefix
 * - Sets dependencies using registerDependency() for proper recalculation ordering
 * - Listens for changes to external dependencies (cooling setpoint, building data)
 *
 * INITIALIZATION SEQUENCE:
 * 1. Module is loaded (manually or via import in index.html)
 * 2. DOMContentLoaded or teui-statemanager-ready triggers initialize()
 * 3. Module pulls initial values from StateManager when available
 * 4. Module performs initial calculations
 * 5. Module dispatches 'cooling-calculations-loaded' event
 * 6. Section13 updates its calculated values based on cooling data
 *
 * ====================================================================
 * TESTING GUIDELINES
 * ====================================================================
 *
 * To verify correct operation:
 *
 * 1. Open browser console and check for initialization messages
 * 2. Verify cooling_latentLoadFactor value in StateManager matches Excel
 * 3. Check values in Section13 (row 124) match expected free cooling capacity
 * 4. Change cooling setpoint temperature and verify cooling values update
 * 5. Check Section13 values against Excel for same input conditions
 *
 * Known issues to look for:
 * - Numerical precision differs between JS and Excel calculations
 * - Temperature unit conversion errors common with psychrometric calculations
 * - Days of active cooling may be negative if free cooling > cooling load
 *
 * The module is designed to work independently but integrates with StateManager
 * when available. It provides fallback calculations when external data is not available.
 */

// Ensure namespace exists
window.TEUI = window.TEUI || {};

// Cooling Calculations Module
window.TEUI.CoolingCalculations = (function () {
  // Private state to store calculation values and intermediate results
  const state = {
    // Default values from COOLING-TARGET.csv - these can be overridden
    // TODO: Future build - these will come from S03 climate data as user inputs
    nightTimeTemp: 20.43, // A3 - Night-Time Temp Outside in ºC (USER DEFINED - future S03 integration)
    coolingSeasonMeanRH: 0.5585, // A4 - Cooling Season Mean RH (USER DEFINED - future S03 integration)
    latentLoadFactor: 0, // A6 - Will be calculated (1 + RH/Temp ratio)
    groundTemp: 10, // A7 - Temperature of ground in ºC (can simulate radiant cooling)
    airMass: 1.204, // E3 - Mass of air kg/m3
    specificHeatCapacity: 1005, // E4 - Specific heat capacity of air J/(kg•K)
    latentHeatVaporization: 2501000, // E6 - Latent heat of vaporization J/kg
    coolingSetTemp: null, // A8 - Indoor design temperature from S03 h_24 (REQUIRED from StateManager)
    indoorRH: null, // A52 - Indoor RH% from S08 i_59 (REQUIRED from StateManager for latent load)

    // S13 system integration state
    heatingSystem: null, // d_113 - Heating system type from S13
    coolingSystem: null, // d_116 - Cooling system type from S13
    heatingCOP: null, // j_113 - Heating COP from S13 (for heatpump cooling)
    userCoolingCOP: 2.66, // j_116 - User cooling COP from S13 (default 2.66)

    // Calculated values
    freeCoolingLimit: 0, // A33 - Free cooling capacity
    daysActiveCooling: 0, // E55 - Days active cooling required
    coolingElectricalLoad: 0, // d_117 - Heatpump cooling electrical load
    coolingSystemCOP: 0, // l_114 - Cooling system COP
    ventilationCoolingEnergy: 0, // d_123 - Cooling season ventilation energy

    // Building-specific values - MUST be read from StateManager (no defaults per CHEATSHEET)
    buildingVolume: null, // A9/D105 - Volume from S12 d_105 (REQUIRED from StateManager)
    buildingArea: null, // A15/H15 - Conditioned area from S02 h_15 (REQUIRED from StateManager)

    // Weather data - MUST be read from StateManager (no defaults per CHEATSHEET)
    coolingDegreeDays: null, // A21/D21 - CDD from S03 d_21 (REQUIRED from StateManager)

    // Misc state
    initialized: false,
    calculating: false, // Recursion protection
  };

  /**
   * Calculate latent load factor based on RH and temperature
   * This implements the formula from cell A6 in COOLING-TARGET.csv
   */
  function calculateLatentLoadFactor() {
    // Formula is: 1 + (Cooling Season Mean RH / Night-Time Temp)
    return 1 + state.coolingSeasonMeanRH / state.nightTimeTemp;
  }

  /**
   * Calculate atmospheric values derived from temperature and humidity
   * This implements formulas around cells E11-E24 in COOLING-TARGET.csv
   */
  function calculateAtmosphericValues() {
    // Calculate saturation vapor pressure (Tetens formula)
    // Formula: 610.94 * EXP(17.625 * T / (T + 243.04))
    const pSatAvg =
      610.94 *
      Math.exp((17.625 * state.nightTimeTemp) / (state.nightTimeTemp + 243.04));

    // Calculate partial pressure of water vapor
    const partialPressure = pSatAvg * state.coolingSeasonMeanRH;

    // Calculate indoor saturation vapor pressure
    const pSatIndoor =
      610.94 *
      Math.exp(
        (17.625 * state.coolingSetTemp) / (state.coolingSetTemp + 243.04),
      );

    // Calculate indoor partial pressure using dynamic indoor RH% from S08
    const partialPressureIndoor = pSatIndoor * (state.indoorRH || 0.45); // A52: Indoor RH% from S08 i_59, fallback 45%

    // Update state with calculated values
    state.pSatAvg = pSatAvg;
    state.partialPressure = partialPressure;
    state.pSatIndoor = pSatIndoor;
    state.partialPressureIndoor = partialPressureIndoor;
  }

  /**
   * Calculate humidity ratios used for latent load calculations
   * This implements formulas from cells E61-E63 in COOLING-TARGET.csv
   */
  function calculateHumidityRatios() {
    // Atmospheric pressure for calculation (sea level standard)
    const atmosphericPressure = 101325; // Pa

    // Calculate humidity ratio indoor
    // Formula: 0.62198 * partialPressureIndoor / (atmosphericPressure - partialPressureIndoor)
    const humidityRatioIndoor =
      (0.62198 * state.partialPressureIndoor) /
      (atmosphericPressure - state.partialPressureIndoor);

    // Calculate humidity ratio at average conditions
    // Formula: 0.62198 * partialPressure / (atmosphericPressure - partialPressure)
    const humidityRatioAvg =
      (0.62198 * state.partialPressure) /
      (atmosphericPressure - state.partialPressure);

    // Calculate humidity ratio difference
    const humidityRatioDifference = humidityRatioAvg - humidityRatioIndoor;

    // Update state
    state.humidityRatioIndoor = humidityRatioIndoor;
    state.humidityRatioAvg = humidityRatioAvg;
    state.humidityRatioDifference = humidityRatioDifference;
  }

  /**
   * Calculate free cooling capacity
   * This implements the formulas leading to cell A33 in COOLING-TARGET.csv
   */
  function calculateFreeCoolingLimit() {
    // First calculate air parameters if not done yet
    if (!state.pSatAvg) {
      calculateAtmosphericValues();
      calculateHumidityRatios();
    }

    // Get more building values if available
    const volume = state.buildingVolume;
    const area = state.buildingArea;

    // Calculate total mass of building air
    const totalMass = volume * state.airMass;

    // Calculate cooling energy potential
    // This is a simplified approximation based on the air volume's ability to remove heat
    // The exact formula in Excel is complex, but this captures the essence
    const temperatureDifference = state.coolingSetTemp - state.nightTimeTemp;

    // Calculate maximum free cooling limit
    // Basic formula: Mass * SpecificHeatCapacity * ΔT / 1000 (to convert to kWh)
    // Plus adjustment for latent load based on humidity ratios
    const sensibleCooling =
      (totalMass * state.specificHeatCapacity * temperatureDifference) / 1000;
    const latentAdjustment =
      (totalMass *
        state.latentHeatVaporization *
        state.humidityRatioDifference) /
      1000;

    // Free cooling limit is the total cooling energy potential per day
    // multiplied by effective cooling days (120 days is default cooling season)
    const dailyFreeCooling =
      sensibleCooling - latentAdjustment > 0
        ? sensibleCooling - latentAdjustment
        : 0;

    // Calculate cooling limit per square meter and total
    const coolingLimitPerM2 = dailyFreeCooling / area;
    const totalFreeCoolingLimit = coolingLimitPerM2 * area * 120; // 120 cooling days

    // Update state
    state.dailyFreeCooling = dailyFreeCooling;
    state.coolingLimitPerM2 = coolingLimitPerM2;
    state.freeCoolingLimit = totalFreeCoolingLimit;

    return state.freeCoolingLimit;
  }

  /**
   * Calculate days of active cooling required
   * This implements the formula in cell E55 of COOLING-TARGET.csv
   */
  function calculateDaysActiveCooling() {
    // ✅ EXCEL PARITY: Use exact Excel formula from COOLING-TARGET.csv line 55 (corrected from S13)
    // Excel: =E52/(E54*24) where E52=(E50-E51), E54=REPORT!M19
    
    const d_129 = state.coolingLoad || 0; // E50: Seasonal Cooling Load
    const h_124 = state.freeCoolingLimit || 0; // E51: Free Cooling Potential
    const m_19 = window.TEUI?.StateManager?.getValue("m_19") || 120; // E54: Cooling Season Days
    
    // Calculate E52: Unmet Cooling Load = E50 - E51
    const unmetCoolingLoad = d_129 - h_124; // E52 = E50 - E51
    
    // Calculate E55: Days Active Cooling = E52 / (E54 * 24)
    let daysActiveCooling = 0;
    if (m_19 > 0) {
      daysActiveCooling = unmetCoolingLoad / (parseFloat(m_19) * 24);
    }
    
    // ✅ EXCEL COMMENT: "Obviously negative days of free cooling is not possible - 
    // the goal here is to get close to zero - anything less than zero is overkill ventilation-wise"
    // So we preserve the raw calculation (can be negative) as per Excel methodology
    
    console.log(`[Cooling m_124 EXCEL] E50(d_129)=${d_129}, E51(h_124)=${h_124}, E52(unmet)=${unmetCoolingLoad}, E54(m_19)=${m_19}, E55(result)=${daysActiveCooling}`);
    
    state.daysActiveCooling = daysActiveCooling;
    return daysActiveCooling; // Return exact Excel calculation result
  }

  /**
   * Calculate cooling system integration with S13 heating systems
   * Implements Excel formulas for d_117, l_114, and cross-section outputs
   */
  function calculateCoolingSystemIntegration() {
    // Excel D117 formula: IF(D116="No Cooling", 0, IF(D113="Heatpump", M129/J113, IF(D116="Cooling", M129/J116)))
    
    let d_117 = 0; // Heatpump Cooling Electrical Load
    let l_114 = 0; // Cooling system COP
    
    // Get M129 (mitigated cooling load) from S13 via StateManager
    const m_129 = window.TEUI.parseNumeric(window.TEUI.StateManager.getValue("m_129")) || 0;
    
    if (state.coolingSystem && state.coolingSystem !== "No Cooling") {
      if (state.heatingSystem === "Heatpump") {
        // Heatpump cooling: use heating COP (j_113)
        if (state.heatingCOP > 0) {
          d_117 = m_129 / state.heatingCOP;
          l_114 = state.heatingCOP; // Use heating COP for cooling
        }
      } else if (state.coolingSystem === "Cooling") {
        // Dedicated cooling system: use user cooling COP (j_116)
        if (state.userCoolingCOP > 0) {
          d_117 = m_129 / state.userCoolingCOP;
          l_114 = state.userCoolingCOP; // Use user cooling COP
        }
      }
    }
    
    // Store calculated values
    state.coolingElectricalLoad = d_117; // d_117
    state.coolingSystemCOP = l_114; // l_114
    
    console.log(`[Cooling] System integration: d_113=${state.heatingSystem}, d_116=${state.coolingSystem}, j_113=${state.heatingCOP}, j_116=${state.userCoolingCOP} → d_117=${d_117}, l_114=${l_114}`);
  }

  /**
   * Calculate wet bulb temperature from dry bulb and RH
   * This implements formulas in cells E64-E66 of COOLING-TARGET.csv
   */
  function calculateWetBulbTemperature() {
    // Linear equation to obtain Twb from Tdb and RH% at 15h00 LST
    // Formula: = Tdb - (Tdb - (Tdb - (100 - RH)/5)) * (0.1 + 0.9 * (RH / 100))
    const tdb = state.nightTimeTemp; // Using night-time temp as dry bulb
    const rh = state.coolingSeasonMeanRH * 100; // Convert to percentage

    const twbSimple =
      tdb - (tdb - (tdb - (100 - rh) / 5)) * (0.1 + 0.9 * (rh / 100));

    // Second formula with dewpoint correction factor
    const twbCorrected =
      tdb - (tdb - (tdb - (100 - rh) / 5)) * (0.3 + 0.7 * (rh / 100));

    // Average of both
    state.wetBulbTemperature = (twbSimple + twbCorrected) / 2;

    return state.wetBulbTemperature;
  }

  /**
   * Calculate all values needed for cooling calculations
   */
  function calculateAll() {
    // Recursion protection
    if (state.calculating) {
      console.log("[Cooling] ⚠️ Already calculating - skipping to prevent recursion");
      return;
    }
    
    state.calculating = true;
    console.log("[Cooling] 🚀 Starting cooling calculations...");
    
    try {
      // First calculate latent load factor
      state.latentLoadFactor = calculateLatentLoadFactor();

    // Calculate atmospheric values
    calculateAtmosphericValues();

    // Calculate humidity ratios
    calculateHumidityRatios();

    // Calculate wet bulb temperature
    calculateWetBulbTemperature();

    // Calculate free cooling limit
    calculateFreeCoolingLimit();

    // Calculate days of active cooling required
    calculateDaysActiveCooling();

    // Calculate cooling system integration (d_117, l_114, cross-section outputs)
    calculateCoolingSystemIntegration();

    // 📊 STATEMANAGER: Publish results like any other section
    updateStateManager();

      // Dispatch event to notify S13 that cooling calculations are ready
      dispatchCoolingEvent();
    } finally {
      state.calculating = false;
    }
  }

  /**
   * 📊 STATEMANAGER INTEGRATION: Publish calculated cooling values (like any section)
   * S13 reads these values from StateManager for display and further calculations
   */
  function updateStateManager() {
    if (typeof window.TEUI.StateManager === "undefined") return;

    const sm = window.TEUI.StateManager;

    // Publish ALL cooling calculations to StateManager (complete S13 rows 113-124 coverage)
    sm.setValue("cooling_m_124", state.daysActiveCooling.toString(), "calculated");     // Days Active Cooling
    sm.setValue("cooling_h_124", state.freeCoolingLimit.toString(), "calculated");      // Free Cooling Capacity
    sm.setValue("cooling_d_124", (state.freeCoolingLimit / state.coolingLoad * 100).toString(), "calculated"); // Free Cooling %
    
    // Cooling system integration values (Excel formulas)
    sm.setValue("cooling_d_117", state.coolingElectricalLoad.toString(), "calculated"); // Heatpump cooling electrical load
    sm.setValue("cooling_l_114", state.coolingSystemCOP.toString(), "calculated");      // Cooling system COP
    sm.setValue("cooling_d_123", state.ventilationCoolingEnergy.toString(), "calculated"); // Cooling season ventilation energy
    
    // Intermediate cooling calculations for S13 integration
    sm.setValue("cooling_latentLoadFactor", state.latentLoadFactor.toString(), "calculated");   // Latent Load Factor
    sm.setValue("cooling_wetBulbTemperature", state.wetBulbTemperature.toString(), "calculated"); // Wet Bulb Temp
    sm.setValue("cooling_atmosphericPressure", state.atmPressure.toString(), "calculated");     // Atmospheric pressure
    sm.setValue("cooling_partialPressure", state.partialPressure.toString(), "calculated");     // Partial pressure
    sm.setValue("cooling_humidityRatio", state.humidityRatio.toString(), "calculated");         // Humidity ratio
    
    // Note: d_129 is calculated by S14, m_129 is calculated by S13
    // Cooling.js READS these values, does not publish them
    
    console.log(`[Cooling] Published to StateManager: m_124=${state.daysActiveCooling}, h_124=${state.freeCoolingLimit}, d_124=${(state.freeCoolingLimit / state.coolingLoad * 100).toFixed(1)}%`);
  }

  /**
   * Dispatch a custom event to notify other modules that cooling calculations are ready
   */
  function dispatchCoolingEvent() {
    const event = new CustomEvent("cooling-calculations-loaded", {
      detail: {
        latentLoadFactor: state.latentLoadFactor,
        freeCoolingLimit: state.freeCoolingLimit,
        daysActiveCooling: state.daysActiveCooling,
      },
    });

    document.dispatchEvent(event);
  }

  /**
   * Register this module's dependencies with StateManager
   */
  function registerWithStateManager() {
    if (typeof window.TEUI.StateManager === "undefined") return;

    const sm = window.TEUI.StateManager;

    // Register dependencies on climate data
    sm.registerDependency("d_21", "cooling_freeCoolingLimit"); // CDD affects free cooling
    sm.registerDependency("h_24", "cooling_latentLoadFactor"); // Cooling setpoint affects latent load

    // Register dependencies on building data
    sm.registerDependency("d_105", "cooling_freeCoolingLimit"); // Building volume affects cooling
    sm.registerDependency("h_15", "cooling_freeCoolingLimit"); // Building area affects cooling intensity
    sm.registerDependency("i_59", "cooling_latentLoadFactor"); // Indoor RH% from S08 affects latent load
    sm.registerDependency("m_19", "cooling_daysActiveCooling"); // Cooling season days affects active cooling calculation

    // Listen for cooling load updates
    sm.addListener("d_129", function (newValue) {
      // Update cooling load and recalculate
      state.coolingLoad = parseFloat(newValue.replace(/,/g, "")) || 0;
      calculateDaysActiveCooling();
      updateStateManager(); // 📊 STATEMANAGER: Publish updated results
    });

    // Listen for indoor RH% changes from S08 i_59 slider
    sm.addListener("i_59", function (newValue) {
      console.log(`[Cooling] Indoor RH% changed: i_59=${newValue}% → updating latent load calculations`);
      state.indoorRH = parseFloat(newValue) / 100; // Convert percentage to decimal
      calculateLatentLoadFactor(); // Recalculate latent load factor
      calculateFreeCoolingLimit(); // Recalculate free cooling with new latent load
      updateStateManager(); // 📊 STATEMANAGER: Publish updated cooling calculations
    });

    // Listen for S13 system integration fields
    sm.addListener("d_113", function (heatingSystem) {
      console.log(`[Cooling] Heating system changed: d_113=${heatingSystem} → updating cooling COP logic`);
      state.heatingSystem = heatingSystem;
      calculateCoolingSystemIntegration(); // Update cooling calculations based on heating system
      updateStateManager();
    });

    sm.addListener("d_116", function (coolingSystem) {
      console.log(`[Cooling] Cooling system changed: d_116=${coolingSystem} → updating active cooling calculations`);
      state.coolingSystem = coolingSystem;
      calculateCoolingSystemIntegration(); // Enable/disable active cooling calculations
      updateStateManager();
    });

    sm.addListener("j_113", function (heatingCOP) {
      console.log(`[Cooling] Heating COP changed: j_113=${heatingCOP} → updating heatpump cooling COP`);
      state.heatingCOP = parseFloat(heatingCOP) || 0;
      calculateCoolingSystemIntegration(); // Update cooling calculations with heating COP
      updateStateManager();
    });

    sm.addListener("j_116", function (coolingCOP) {
      console.log(`[Cooling] User cooling COP changed: j_116=${coolingCOP} → updating cooling calculations`);
      state.userCoolingCOP = parseFloat(coolingCOP) || 2.66;
      calculateCoolingSystemIntegration(); // Update cooling calculations with user COP
      updateStateManager();
    });
  }

  /**
   * Initialize the module
   */
  function initialize(params = {}) {
    // Already initialized - avoid duplicate initialization
    if (state.initialized) return;

    // Allow overriding default values with provided parameters
    Object.keys(params).forEach((key) => {
      if (key in state) {
        state[key] = params[key];
      }
    });

    // Try to get values from StateManager if available
    if (typeof window.TEUI.StateManager !== "undefined") {
      // Get cooling setpoint
      // Get cooling setpoint temperature from S03 (REQUIRED)
      const coolingSetpoint = window.TEUI.StateManager.getValue("h_24");
      if (!coolingSetpoint) {
        throw new Error("[Cooling] REQUIRED h_24 (cooling setpoint) missing from S03 - cannot calculate cooling");
      }
      state.coolingSetTemp = parseFloat(coolingSetpoint);

      // 🚨 CHEATSHEET COMPLIANCE: REQUIRE values from StateManager (no fallback defaults)
      
      // Get CDD from S03 (REQUIRED)
      const cdd = window.TEUI.StateManager.getValue("d_21");
      if (!cdd) {
        throw new Error("[Cooling] REQUIRED d_21 (CDD) missing from S03 - cannot calculate cooling");
      }
      state.coolingDegreeDays = parseFloat(cdd);

      // Get building volume from S12 (REQUIRED)
      const volume = window.TEUI.StateManager.getValue("d_105");
      if (!volume) {
        throw new Error("[Cooling] REQUIRED d_105 (building volume) missing from S12 - cannot calculate cooling");
      }
      state.buildingVolume = parseFloat(volume.replace(/,/g, ""));

      // Get building area from S02 (REQUIRED)
      const area = window.TEUI.StateManager.getValue("h_15");
      if (!area) {
        throw new Error("[Cooling] REQUIRED h_15 (conditioned area) missing from S02 - cannot calculate cooling");
      }
      state.buildingArea = parseFloat(area.replace(/,/g, ""));

      // Get indoor RH% from S08 (REQUIRED for latent load calculations)
      const indoorRH = window.TEUI.StateManager.getValue("i_59");
      if (!indoorRH) {
        throw new Error("[Cooling] REQUIRED i_59 (indoor RH%) missing from S08 - cannot calculate latent cooling load");
      }
      state.indoorRH = parseFloat(indoorRH) / 100; // Convert percentage to decimal

      // Get S13 system integration values
      const heatingSystem = window.TEUI.StateManager.getValue("d_113");
      if (heatingSystem) state.heatingSystem = heatingSystem;
      
      const coolingSystem = window.TEUI.StateManager.getValue("d_116");
      if (coolingSystem) state.coolingSystem = coolingSystem;
      
      const heatingCOP = window.TEUI.StateManager.getValue("j_113");
      if (heatingCOP) state.heatingCOP = parseFloat(heatingCOP);
      
      const userCoolingCOP = window.TEUI.StateManager.getValue("j_116");
      if (userCoolingCOP) state.userCoolingCOP = parseFloat(userCoolingCOP);

      // Get cooling load
      const coolingLoad = window.TEUI.StateManager.getValue("d_129");
      if (coolingLoad) {
        state.coolingLoad = parseFloat(coolingLoad.replace(/,/g, ""));
      }

      // Register with StateManager
      registerWithStateManager();
    }

    // Run initial calculations
    calculateAll();

    // Mark as initialized
    state.initialized = true;
  }

  // Public API
  return {
    // Initialization
    initialize: initialize,

    // Calculation methods
    calculateAll: calculateAll,

    // Getters for calculated values
    getLatentLoadFactor: function () {
      return state.latentLoadFactor;
    },

    getFreeCoolingLimit: function () {
      return state.freeCoolingLimit;
    },

    getDaysActiveCooling: function () {
      return state.daysActiveCooling;
    },

    getWetBulbTemperature: function () {
      return state.wetBulbTemperature;
    },

    // Method to update specific inputs and recalculate
    updateValue: function (key, value) {
      if (key in state) {
        state[key] = value;
        calculateAll();
      }
    },

    // 📊 STATEMANAGER METHODS: Standard section integration pattern
    calculateAll: calculateAll, // Trigger full calculation cycle
    
    // Method to recalculate cooling (standard section pattern)
    recalculate: function() {
      calculateAll(); // Recalculate and publish to StateManager
    },

    // Method to update cooling load and recalculate days of active cooling
    updateCoolingLoad: function (load) {
      state.coolingLoad = load;
      calculateDaysActiveCooling();
      updateStateManager(); // 📊 STATEMANAGER: Publish updated results
    },

    // Debug method to get all state values
    getDebugInfo: function () {
      return { ...state };
    },
  };
})();

// Initialize when StateManager becomes available
document.addEventListener("teui-statemanager-ready", function () {
  // Initialize with StateManager values
  window.TEUI.CoolingCalculations.initialize();
});
