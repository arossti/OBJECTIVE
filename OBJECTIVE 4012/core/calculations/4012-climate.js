/**
 * 4012-climate.js
 * Pure functional climate calculations for v4.012
 *
 * All calculations return tuples { target, reference }
 * No side effects, no DOM manipulation, no state access
 * No ES6 modules - works in air-gapped environments
 */

// Create namespace
window.TEUI = window.TEUI || {};
window.TEUI.v4012 = window.TEUI.v4012 || {};
window.TEUI.v4012.Climate = window.TEUI.v4012.Climate || {};

(function () {
  "use strict";

  // Climate zone determination based on HDD
  function calculateClimateZone(inputs) {
    const calc = function (hdd) {
      if (!hdd || isNaN(hdd)) return 6.0;

      if (hdd < 3000) return 4.0;
      if (hdd < 4000) return 5.0;
      if (hdd < 5000) return 6.0;
      if (hdd < 6000) return 7.1;
      if (hdd < 7000) return 7.2;
      return 8.0;
    };

    return {
      target: calc(inputs.target?.d_20),
      reference: calc(inputs.reference?.d_20),
    };
  }

  // Temperature conversions (Celsius to Fahrenheit)
  function convertCelsiusToFahrenheit(inputs, fieldId) {
    const calc = function (celsius) {
      if (!celsius || isNaN(celsius)) return 32;
      return Math.round((celsius * 9) / 5 + 32);
    };

    return {
      target: calc(inputs.target?.[fieldId]),
      reference: calc(inputs.reference?.[fieldId]),
    };
  }

  // Heating setpoint based on occupancy type
  function calculateHeatingSetpoint(inputs) {
    const calc = function (occupancyType, referenceStandard) {
      // Check if Passive House standard
      if (referenceStandard?.toUpperCase().includes("PH")) {
        return 18;
      }

      // Check if residential or care occupancy
      if (
        occupancyType === "C-Residential" ||
        occupancyType === "B2-Care and Treatment" ||
        occupancyType === "B3-Detention Care & Treatment" ||
        occupancyType?.includes("Care")
      ) {
        return 22;
      }

      // Default for other occupancies
      return 18;
    };

    return {
      target: calc(inputs.target?.d_12, inputs.target?.d_13),
      reference: calc(inputs.reference?.d_12, inputs.reference?.d_13),
    };
  }

  // Cooling setpoint (currently fixed, but structure allows future logic)
  function calculateCoolingSetpoint(inputs) {
    const calc = function (occupancyType) {
      // Currently all occupancy types use 24°C
      // Structure allows for future differentiation
      return 24;
    };

    return {
      target: calc(inputs.target?.d_12),
      reference: calc(inputs.reference?.d_12),
    };
  }

  // Effective cooling setpoint considering override
  function calculateEffectiveCoolingSetpoint(inputs) {
    const calc = function (baseSetpoint, override) {
      const base = parseFloat(baseSetpoint) || 24;
      const overrideValue = parseFloat(override) || 24;

      // Use override if it's valid and > 20
      return overrideValue > 20 ? overrideValue : base;
    };

    return {
      target: calc(inputs.target?.h_24, inputs.target?.l_24),
      reference: calc(inputs.reference?.h_24, inputs.reference?.l_24),
    };
  }

  // Ground facing heating degree days
  function calculateGroundFacingHDD(inputs) {
    const calc = function (heatingSetpoint, coolingDays) {
      const setpoint = parseFloat(heatingSetpoint) || 18;
      const coolDays = parseFloat(coolingDays) || 120;
      const heatingDays = 365 - coolDays;

      // Formula: (TsetHeating - 10°C_ground) * HeatingDays
      return Math.round((setpoint - 10) * heatingDays);
    };

    return {
      target: calc(inputs.target?.h_23, inputs.target?.m_19),
      reference: calc(inputs.reference?.h_23, inputs.reference?.m_19),
    };
  }

  // Ground facing cooling degree days
  function calculateGroundFacingCDD(inputs) {
    const calc = function (coolingSetpoint, coolingDays, capacitanceSetting) {
      const setpoint = parseFloat(coolingSetpoint) || 24;
      const coolDays = parseFloat(coolingDays) || 120;

      const baseCDD = (10 - setpoint) * coolDays;

      // Static mode uses MAX(0, calculation)
      if (capacitanceSetting === "Static") {
        return Math.round(Math.max(0, baseCDD));
      }

      // Capacitance mode allows negative values
      return Math.round(baseCDD);
    };

    return {
      target: calc(
        inputs.target?.h_24,
        inputs.target?.m_19,
        inputs.target?.h_21,
      ),
      reference: calc(
        inputs.reference?.h_24,
        inputs.reference?.m_19,
        inputs.reference?.h_21,
      ),
    };
  }

  // Cooling percentage calculation
  function calculateCoolingPercentage(inputs) {
    const calc = function (effectiveCoolingSetpoint) {
      const setpoint = parseFloat(effectiveCoolingSetpoint) || 24;
      return Math.round((setpoint / 22) * 100);
    };

    // Get effective cooling setpoints first
    const effectiveSetpoints = calculateEffectiveCoolingSetpoint(inputs);

    return {
      target: calc(effectiveSetpoints.target),
      reference: calc(effectiveSetpoints.reference),
    };
  }

  // Main climate data retrieval based on location and timeframe
  function getClimateData(province, city, timeframe) {
    // Access the internalized climate data
    const climateData = window.TEUI.v4012.ClimateData;

    if (
      !climateData ||
      !climateData[province] ||
      !climateData[province][city]
    ) {
      // Return defaults if data not found
      return {
        hdd: 4600,
        cdd: 196,
        coldestTemp: -24,
        hottestTemp: 30,
        elevation: 80,
      };
    }

    const cityData = climateData[province][city];
    const isFuture = timeframe === "Future";

    return {
      hdd: isFuture
        ? cityData.HDD18_2021_2050 || cityData.HDD18 || 4600
        : cityData.HDD18 || 4600,
      cdd: isFuture
        ? cityData.CDD24_2021_2050 || cityData.CDD24 || 196
        : cityData.CDD24 || 196,
      coldestTemp: cityData.January_2_5 || -24,
      hottestTemp: isFuture
        ? cityData.Future_July_2_5_Tdb || cityData.July_2_5_Tdb || 30
        : cityData.July_2_5_Tdb || 30,
      elevation: cityData["Elev ASL (m)"] || 80,
    };
  }

  // All climate calculations in one function
  function calculateAllClimate(inputs) {
    const results = {};

    // Climate zone (j_19)
    const climateZone = calculateClimateZone(inputs);
    results.j_19 = climateZone;

    // Temperature setpoints
    const heatingSetpoint = calculateHeatingSetpoint(inputs);
    results.h_23 = heatingSetpoint;

    const coolingSetpoint = calculateCoolingSetpoint(inputs);
    results.h_24 = coolingSetpoint;

    // Temperature conversions
    results.e_23 = convertCelsiusToFahrenheit(inputs, "d_23");
    results.i_23 = convertCelsiusToFahrenheit(
      {
        target: { d_23: heatingSetpoint.target },
        reference: { d_23: heatingSetpoint.reference },
      },
      "d_23",
    );

    results.e_24 = convertCelsiusToFahrenheit(inputs, "d_24");

    // Effective cooling setpoint and its Fahrenheit conversion
    const effectiveCooling = calculateEffectiveCoolingSetpoint(inputs);
    results.i_24 = convertCelsiusToFahrenheit(
      {
        target: { d_24: effectiveCooling.target },
        reference: { d_24: effectiveCooling.reference },
      },
      "d_24",
    );

    // Ground facing calculations
    results.d_22 = calculateGroundFacingHDD(inputs);
    results.h_22 = calculateGroundFacingCDD(inputs);

    // Cooling percentage
    results.m_24 = calculateCoolingPercentage(inputs);

    return results;
  }

  // Export functions to global namespace
  window.TEUI.v4012.Climate = {
    calculateClimateZone: calculateClimateZone,
    convertCelsiusToFahrenheit: convertCelsiusToFahrenheit,
    calculateHeatingSetpoint: calculateHeatingSetpoint,
    calculateCoolingSetpoint: calculateCoolingSetpoint,
    calculateEffectiveCoolingSetpoint: calculateEffectiveCoolingSetpoint,
    calculateGroundFacingHDD: calculateGroundFacingHDD,
    calculateGroundFacingCDD: calculateGroundFacingCDD,
    calculateCoolingPercentage: calculateCoolingPercentage,
    getClimateData: getClimateData,
    calculateAllClimate: calculateAllClimate,
  };
})();
