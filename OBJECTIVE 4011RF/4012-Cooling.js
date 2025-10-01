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

    // Calculated values (COOLING-TARGET.csv only)
    freeCoolingLimit: 0, // A33 - Free cooling capacity (daily kWh)
    daysActiveCooling: 0, // E55 - Days active cooling required
    
    // Atmospheric calculation properties (from COOLING-TARGET.csv)
    atmPressure: 101325, // E13/E15 - Standard atmospheric pressure, adjusted for elevation
    partialPressure: 0, // Calculated - Partial pressure of water vapor
    pSatAvg: 0, // Calculated - Average saturation pressure
    pSatIndoor: 0, // Calculated - Indoor saturation pressure  
    partialPressureIndoor: 0, // Calculated - Indoor partial pressure
    
    // Humidity calculation properties (from COOLING-TARGET.csv)
    humidityRatioIndoor: 0, // Calculated - Indoor humidity ratio
    humidityRatioAvg: 0, // Calculated - Average humidity ratio
    humidityRatioDifference: 0, // Calculated - Humidity ratio difference
    
    // Temperature calculations
    wetBulbTemperature: 0, // Calculated - Wet bulb temperature

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
   * Calculate latent load factor based on humidity ratios and temperature differential
   * This implements the formula from cell A6 in COOLING-TARGET.csv
   * 
   * Excel Formula: A6 = 1 + A64/A55
   * Where:
   *   A64 = A54 × E3 × E6 × A63 (Latent Cooling Load)
   *   A55 = H26 × E3 × E4 × (A49 - H27) (Sensible Cooling Load)
   * 
   * Since A54 = H26 = h_120/3600, these cancel out, simplifying to:
   *   A6 = 1 + [E6 × A63] / [E4 × (A49 - H27)]
   *   A6 = 1 + [latentHeatVaporization × humidityRatioDifference] / [specificHeatCapacity × (nightTimeTemp - coolingSetTemp)]
   */
  function calculateLatentLoadFactor() {
    // Excel A6 formula: 1 + A64/A55
    // A64 = 2,501,000 J/kg × humidityRatioDifference (kg/kg)
    // A55 = 1005 J/(kg•K) × temperatureDifferential (K)
    
    const numerator = state.latentHeatVaporization * state.humidityRatioDifference; // E6 × A63
    const denominator = state.specificHeatCapacity * (state.nightTimeTemp - state.coolingSetTemp); // E4 × (A49 - H27)
    
    // Avoid division by zero
    if (denominator === 0) {
      console.warn("[Cooling] Temperature differential is zero, using fallback latent load factor");
      return 1.0;
    }
    
    return 1 + (numerator / denominator);
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
    // Always read fresh i_59 value to ensure latest indoor RH% is used
    const i_59_value = window.TEUI.parseNumeric(window.TEUI.StateManager.getValue("i_59"));
    state.indoorRH = i_59_value ? i_59_value / 100 : 0.45; // Convert percentage to decimal, default 45%
    const partialPressureIndoor = pSatIndoor * state.indoorRH; // A52: Indoor RH% from S08 i_59

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
    // ✅ EXCEL PARITY: Use exact S13 formula instead of simplified approximation
    // Based on S13's calculateFreeCoolingLimit function (Excel A33 * M19)
    
    // Get necessary values
    const ventFlowRateM3hr = window.TEUI.parseNumeric(window.TEUI.StateManager.getValue("h_120")) || 0;
    const ventFlowRateM3s = ventFlowRateM3hr / 3600;
    const massFlowRateKgS = ventFlowRateM3s * state.airMass; // kg/s
    
    const Cp = state.specificHeatCapacity; // J/kg·K
    const T_indoor = state.coolingSetTemp; // °C
    const T_outdoor_night = state.nightTimeTemp; // °C
    const coolingDays = window.TEUI.parseNumeric(window.TEUI.StateManager.getValue("m_19")) || 120;
    
    // Excel A16: Temp Diff = A8 - A3 (Indoor - Outdoor)
    const tempDiff = T_indoor - T_outdoor_night; // Match Excel A16 formula
    
    // Excel A31: Q̇ = ṁ * cₚ * ΔT (Heat Removal Power in Watts)
    const sensiblePowerWatts = massFlowRateKgS * Cp * tempDiff;
    
    // Free cooling only works when indoor is warmer than outdoor (tempDiff > 0)
    let sensibleCoolingPowerWatts = 0;
    if (tempDiff > 0) {
      // Indoor warmer than outdoor = cooling potential exists
      sensibleCoolingPowerWatts = sensiblePowerWatts; // Use positive value directly
    }
    
    // Convert Sensible Power to Daily Sensible Energy (kWh/day) - Based on Excel A33
    const dailySensibleCoolingKWh = sensibleCoolingPowerWatts * 0.024; // Correct Factor: (J/s) * (86400 s/day) / (3.6e6 J/kWh) = 0.024
    
    // Calculate Annual Potential Limit (kWh/yr) - Based on Excel A33 * M19
    const potentialLimit = dailySensibleCoolingKWh * coolingDays;
    
    // Store the Excel-based calculation result
    state.freeCoolingLimit = potentialLimit;
    
    console.log(`[Cooling] Free cooling calc: massFlow=${massFlowRateKgS.toFixed(3)} kg/s, ΔT=${tempDiff.toFixed(1)}°C → ${dailySensibleCoolingKWh.toFixed(2)} kWh/day → ${potentialLimit.toFixed(2)} kWh/yr`);
    
    return potentialLimit;
  }

  /**
   * Update atmospheric pressure based on elevation from S03
   * Implements COOLING-TARGET E15 logic: E13 * EXP(-E14/8434)
   */
  function updateAtmosphericPressure() {
    const elevation = window.TEUI.parseNumeric(window.TEUI.StateManager.getValue("l_22")) || 80; // Project elevation from S03
    const seaLevelPressure = 101325; // E13 - Standard atmospheric pressure at sea level
    state.atmPressure = seaLevelPressure * Math.exp(-elevation / 8434); // E15 logic
    
    console.log(`[Cooling] Atmospheric pressure updated: elevation=${elevation}m → atmPressure=${state.atmPressure.toFixed(0)}Pa`);
  }

  /**
   * Calculate days of active cooling required
   * This implements the formula in cell E55 of COOLING-TARGET.csv
   */
  function calculateDaysActiveCooling() {
    // ✅ EXCEL PARITY: Implement COOLING-TARGET.csv internal logic for E55 calculation
    // COOLING-TARGET E55: =E52/(E54*24) where E52=(E50-E51)
    // E50 = E37*E45 = (REPORT!M129 * REPORT!D21)  
    // E51 = E36*E45 = (daily_free_cooling_kWh * REPORT!D21)
    // E54 = REPORT!M19 = cooling season days
    
    // Get base values from StateManager
    const m_129_annual = window.TEUI.parseNumeric(window.TEUI.StateManager.getValue("m_129")) || 0; // Annual mitigated cooling load
    const d_21 = window.TEUI.parseNumeric(window.TEUI.StateManager.getValue("d_21")) || 120; // E45: CDD
    const m_19 = window.TEUI.parseNumeric(window.TEUI.StateManager.getValue("m_19")) || 120; // E54: Cooling season days
    
    // ✅ CRITICAL FIX: E37 should be daily mitigated cooling load, not annual
    // E37 = m_129 / CDD = daily cooling load that gets multiplied back by CDD in E50
    const E37_daily_mitigated_cooling = d_21 > 0 ? m_129_annual / d_21 : 0;
    
    // Calculate COOLING-TARGET internal values
    // E36 = A33 = Daily free cooling potential (kWh/day) - calculated from ventilation physics
    const E36_daily_free_cooling_kWh = calculateDailyFreeCoolingPotential(); // A33 equivalent
    
    // COOLING-TARGET E50: Seasonal cooling load = E37 * E45
    const E50_seasonal_cooling_load = E37_daily_mitigated_cooling * d_21;
    
    // COOLING-TARGET E51: Seasonal free cooling potential = E36 * E45  
    const E51_seasonal_free_cooling = E36_daily_free_cooling_kWh * d_21;
    
    // COOLING-TARGET E52: Unmet cooling load = E50 - E51
    const E52_unmet_cooling_load = E50_seasonal_cooling_load - E51_seasonal_free_cooling;
    
    // COOLING-TARGET E55: Days active cooling = E52 / (E54 * 24)
    let E55_days_active_cooling = 0;
    if (m_19 > 0) {
      E55_days_active_cooling = E52_unmet_cooling_load / (m_19 * 24);
    }
    
    // ✅ EXCEL COMMENT: "Obviously negative days of free cooling is not possible - 
    // the goal here is to get close to zero - anything less than zero is overkill ventilation-wise"
    // So we preserve the raw calculation (can be negative) as per Excel methodology
    
    console.log(`[Cooling m_124 COOLING-TARGET] m_129_annual=${m_129_annual}, E37_daily=${E37_daily_mitigated_cooling}, E45(d_21)=${d_21}, E50=${E50_seasonal_cooling_load}, E51=${E51_seasonal_free_cooling}, E52=${E52_unmet_cooling_load}, E54(m_19)=${m_19}, E55(result)=${E55_days_active_cooling}`);
    
    state.daysActiveCooling = E55_days_active_cooling;
    return E55_days_active_cooling; // Return exact COOLING-TARGET Excel calculation result
  }

  /**
   * Calculate daily free cooling potential (COOLING-TARGET A33/E36)
   * Implements the physics chain: A28→A29→A30→A31→A32→A33
   */
  function calculateDailyFreeCoolingPotential() {
    // COOLING-TARGET A28: Ventilation Rate l/s (with summer boost)
    // =IF(REPORT!L119="None", REPORT!D120, REPORT!D120*REPORT!L119)
    const d_120 = window.TEUI.parseNumeric(window.TEUI.StateManager.getValue("d_120")) || 0; // Base ventilation rate l/s
    const l_119 = window.TEUI.StateManager.getValue("l_119") || "None"; // Summer boost factor
    
    let A28_ventilation_rate_ls = d_120;
    if (l_119 !== "None" && l_119 !== "") {
      const boostFactor = window.TEUI.parseNumeric(l_119) || 1.0;
      A28_ventilation_rate_ls = d_120 * boostFactor;
    }
    
    // COOLING-TARGET A29: m3/second = A28/1000
    const A29_ventilation_rate_m3s = A28_ventilation_rate_ls / 1000;
    
    // COOLING-TARGET A30: Mass-Flow Rate = A29 * E3 (air density)
    const A30_mass_flow_rate_kgs = A29_ventilation_rate_m3s * state.airMass; // E3 = 1.204 kg/m3
    
    // COOLING-TARGET A16: Temp difference = A8 - A3 (indoor - outdoor night temp)
    const h_24 = window.TEUI.parseNumeric(window.TEUI.StateManager.getValue("h_24")) || 24; // A8: Indoor setpoint
    const A16_temp_diff = h_24 - state.nightTimeTemp; // A8 - A3
    
    // COOLING-TARGET A31: Heat removal power = A30 * E4 * A16 (J/s or Watts)
    const A31_heat_removal_watts = A30_mass_flow_rate_kgs * state.specificHeatCapacity * A16_temp_diff;
    
    // COOLING-TARGET A32: Heat removed in one day (Joules) = A31 * 86400
    const A32_daily_heat_removal_joules = A31_heat_removal_watts * 86400;
    
    // COOLING-TARGET A33: Heat removed in one day (kWh) = A32 / 3600000
    const A33_daily_free_cooling_kWh = A32_daily_heat_removal_joules / 3600000;
    
    console.log(`[Cooling A33 PHYSICS] d_120=${d_120}, l_119=${l_119}, A28=${A28_ventilation_rate_ls}, A29=${A29_ventilation_rate_m3s}, A30=${A30_mass_flow_rate_kgs}, A16=${A16_temp_diff}, A31=${A31_heat_removal_watts}, A32=${A32_daily_heat_removal_joules}, A33=${A33_daily_free_cooling_kWh}`);
    
    return A33_daily_free_cooling_kWh; // E36 equivalent
  }

  /**
   * Calculate cooling system integration with S13 heating systems
   * Implements Excel formulas for d_117, l_114, and cross-section outputs
   */

  /**
   * Calculate CED Unmitigated (d_129) - Excel: K71+K79+K97+K104+K103+D122
   */

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
    // Read fresh values from StateManager before calculating
    const h_24 = window.TEUI.StateManager.getValue("h_24");
    state.coolingSetTemp = h_24 ? parseFloat(h_24) : 24;
    
    const d_21 = window.TEUI.StateManager.getValue("d_21");
    state.coolingDegreeDays = d_21 ? parseFloat(d_21) : 196;
    
    const d_105 = window.TEUI.StateManager.getValue("d_105");
    state.buildingVolume = d_105 ? parseFloat(d_105.replace(/,/g, "")) : 8000;
    
    const h_15 = window.TEUI.StateManager.getValue("h_15");
    state.buildingArea = h_15 ? parseFloat(h_15.replace(/,/g, "")) : 1427.2;
    
    const i_59 = window.TEUI.StateManager.getValue("i_59");
    state.indoorRH = i_59 ? parseFloat(i_59) / 100 : 0.45;
    
    // CRITICAL: Must calculate humidity ratios BEFORE latent load factor
    // because A6 formula depends on A63 (humidityRatioDifference)
    
    // Calculate atmospheric values (needed for humidity ratios)
    calculateAtmosphericValues();

    // Calculate humidity ratios (calculates humidityRatioDifference = A63)
    calculateHumidityRatios();

    // Calculate latent load factor (now has humidityRatioDifference available)
    state.latentLoadFactor = calculateLatentLoadFactor();

    // Calculate wet bulb temperature
    calculateWetBulbTemperature();

    // Calculate free cooling limit
    calculateFreeCoolingLimit();

    // Calculate days of active cooling required
    calculateDaysActiveCooling();

    // Calculate CED values (moved from S14/S13 for tight cooling integration)

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
    
    // D117, L114, D122, D123 are calculated by S13, not Cooling.js
    
    // Intermediate cooling calculations for S13 integration
    sm.setValue("cooling_latentLoadFactor", (state.latentLoadFactor || 0).toString(), "calculated");   // Latent Load Factor
    sm.setValue("cooling_wetBulbTemperature", (state.wetBulbTemperature || 0).toString(), "calculated"); // Wet Bulb Temp
    
    // Atmospheric and humidity calculations for S13 integration
    sm.setValue("cooling_atmosphericPressure", state.atmPressure.toString(), "calculated");     // Atmospheric pressure
    sm.setValue("cooling_partialPressure", state.partialPressure.toString(), "calculated");     // Partial pressure  
    sm.setValue("cooling_humidityRatio", state.humidityRatioDifference.toString(), "calculated");         // Humidity ratio difference
    
    // Cross-section outputs for S14 (moved from S14/S13 for tight cooling integration)
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
    console.log(`[Cooling] 🔗 Registering i_59 listener for indoor humidity changes`);
    sm.addListener("i_59", function (newValue) {
      console.log(`[Cooling] 🌡️ Indoor RH% changed: i_59=${newValue}% → updating latent load calculations`);
      state.indoorRH = parseFloat(newValue) / 100; // Convert percentage to decimal
      calculateLatentLoadFactor(); // Recalculate latent load factor
      calculateFreeCoolingLimit(); // Recalculate free cooling with new latent load
      updateStateManager(); // 📊 STATEMANAGER: Publish updated cooling calculations
    });

    // D117/L114 now calculated by S13, not Cooling.js - listeners removed

    // ✅ FIX: Listen for h_124 (free cooling limit) changes from S13
    // This fixes the m_124 dependency chain: l_119 → d_122/d_123 → h_124 → m_124
    sm.addListener("h_124", function (newValue) {
      console.log(`[Cooling] Free cooling limit changed: h_124=${newValue} → recalculating m_124 (days active cooling)`);
      state.freeCoolingLimit = parseFloat(newValue.replace(/,/g, "")) || 0;
      calculateDaysActiveCooling(); // Recalculate m_124 with new h_124
      updateStateManager(); // Publish updated cooling_m_124 to StateManager
    });

    // ✅ FIX: Listen for l_119 (summer boost) changes to trigger complete m_124 recalculation
    // This ensures m_124 updates when ventilation parameters change
    sm.addListener("l_119", function (newValue) {
      console.log(`[Cooling] Summer boost changed: l_119=${newValue} → recalculating m_124 with new ventilation rate`);
      calculateDaysActiveCooling(); // Recalculate m_124 with new l_119 boost factor
      updateStateManager(); // Publish updated cooling_m_124 to StateManager
    });

    // ✅ FIX: Listen for d_120 (base ventilation rate) changes
    // This ensures m_124 updates when base ventilation rate changes  
    sm.addListener("d_120", function (newValue) {
      console.log(`[Cooling] Base ventilation rate changed: d_120=${newValue} → recalculating m_124`);
      calculateDaysActiveCooling(); // Recalculate m_124 with new base ventilation rate
      updateStateManager(); // Publish updated cooling_m_124 to StateManager
    });

    // ✅ FIX: Listen for l_22 (elevation) changes from S03 location selection
    // This ensures atmospheric pressure updates when location changes
    sm.addListener("l_22", function (newValue) {
      console.log(`[Cooling] Elevation changed: l_22=${newValue}m → updating atmospheric pressure`);
      updateAtmosphericPressure(); // Recalculate atmospheric pressure
      // Atmospheric pressure affects humidity calculations, so recalculate everything
      calculateAll();
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
      // Read values from StateManager (lenient initialization - will update via listeners)
      const coolingSetpoint = window.TEUI.StateManager.getValue("h_24");
      state.coolingSetTemp = coolingSetpoint ? parseFloat(coolingSetpoint) : 24;

      const cdd = window.TEUI.StateManager.getValue("d_21");
      state.coolingDegreeDays = cdd ? parseFloat(cdd) : 196;

      const volume = window.TEUI.StateManager.getValue("d_105");
      state.buildingVolume = volume ? parseFloat(volume.replace(/,/g, "")) : 8000;

      const area = window.TEUI.StateManager.getValue("h_15");
      state.buildingArea = area ? parseFloat(area.replace(/,/g, "")) : 1427.2;

      const indoorRH = window.TEUI.StateManager.getValue("i_59");
      state.indoorRH = indoorRH ? parseFloat(indoorRH) / 100 : 0.45;
      
      // Calculate atmospheric pressure from elevation (COOLING-TARGET E15 logic)
      updateAtmosphericPressure(); // Calculate initial atmospheric pressure from S03 elevation

      // Get cooling load (for D129/M129 calculations)
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
