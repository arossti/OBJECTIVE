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
window.TEUI.SectionModules.sect13 = (function() {
    
    // --- Integrated Cooling Calculation State & Logic --- 
    const coolingState = {
        nightTimeTemp: 20.43,                 // Default, updated from d_24
        coolingSeasonMeanRH: 0.5585,          // Default, A4
        latentLoadFactor: 1.0,                // Calculated A6
        groundTemp: 10,                       // A7
        airMass: 1.204,                       // E3
        specificHeatCapacity: 1005,           // E4
        latentHeatVaporization: 2501000,      // E6
        coolingSetTemp: 24,                   // A8 / h_24
        freeCoolingLimit: 0,                  // Calculated based on A33, M19, K120
        daysActiveCooling: 120,               // Calculated E55, default 120
        buildingVolume: 8000,                 // Default, updated from d_105
        buildingArea: 1427.2,                 // Default, updated from h_15
        coolingDegreeDays: 196,               // Default, updated from d_21
        coolingLoad: 0,                       // Updated from l_128
        pSatAvg: 0,                           // Intermediate atmospheric calc
        partialPressure: 0,
        pSatIndoor: 0,
        partialPressureIndoor: 0,
        humidityRatioIndoor: 0,
        humidityRatioAvg: 0,
        humidityRatioDifference: 0,
        wetBulbTemperature: 0,
        A50_temp: 0, // Added for A50 temperature calculation
        ventilationMethod: '' // Added for g_118
    };

    /** [Cooling Calc] Calculate latent load factor */
    function calculateLatentLoadFactor() {
        const hDiff = coolingState.humidityRatioDifference;
        const LHV = coolingState.latentHeatVaporization;
        const Cp = coolingState.specificHeatCapacity;
        const Tdiff = coolingState.nightTimeTemp - coolingState.coolingSetTemp; 

        // Check for division by zero or invalid inputs
        if (Cp === 0 || Tdiff === 0 || isNaN(hDiff) || isNaN(LHV) || isNaN(Cp) || isNaN(Tdiff)) {
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
        const indoorRH_percent = window.TEUI.parseNumeric(getFieldValue('d_59')) || 45;
        const indoorRH = indoorRH_percent / 100;
        
        coolingState.pSatAvg = 610.94 * Math.exp(17.625 * t_outdoor / (t_outdoor + 243.04));
        coolingState.partialPressure = coolingState.pSatAvg * outdoorRH; 

        coolingState.pSatIndoor = 610.94 * Math.exp(17.625 * t_indoor / (t_indoor + 243.04));
        coolingState.partialPressureIndoor = coolingState.pSatIndoor * indoorRH; 
    }

    /** [Cooling Calc] Calculate humidity ratios */
    function calculateHumidityRatios() {
        const atmPressure = coolingState.atmPressure || 101325; 
        const pPartialIndoor = coolingState.partialPressureIndoor;
        const pSatAvgOutdoor = coolingState.pSatAvg; // Get Saturation Pressure Outdoor (A56)
        
        // Calculate Indoor Humidity Ratio (A61)
        if ((atmPressure - pPartialIndoor) === 0) {
            console.warn("Cooling Calc: Division by zero prevented in indoor humidity ratio.");
            coolingState.humidityRatioIndoor = 0;
        } else {
            coolingState.humidityRatioIndoor = 0.62198 * pPartialIndoor / (atmPressure - pPartialIndoor);
        }

        // Calculate Outdoor Humidity Ratio (A62) - CORRECTED FORMULA
        // First, calculate the outdoor partial pressure *using the required 70% RH* (Excel A57)
        const outdoorRH_forA62 = 0.70; 
        const pPartialOutdoor_forA62 = pSatAvgOutdoor * outdoorRH_forA62;

        if ((atmPressure - pSatAvgOutdoor) === 0) { // Check denominator using pSatAvgOutdoor (A56)
            console.warn("Cooling Calc: Division by zero prevented in outdoor humidity ratio.");
            coolingState.humidityRatioAvg = 0;
        } else {
            // Use the partial pressure based on 70% RH (pPartialOutdoor_forA62)
            coolingState.humidityRatioAvg = 0.62198 * pPartialOutdoor_forA62 / (atmPressure - pSatAvgOutdoor); // USE pSatAvgOutdoor (A56) in denominator
        }

        // Calculate Difference (A63)
        coolingState.humidityRatioDifference = coolingState.humidityRatioAvg - coolingState.humidityRatioIndoor;
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
            const ventFlowRateM3hr = window.TEUI.parseNumeric(getFieldValue('h_120')) || 0;
            const ventFlowRateM3s = ventFlowRateM3hr / 3600;
            const massFlowRateKgS = ventFlowRateM3s * coolingState.airMass; // kg/s
            
            const Cp = coolingState.specificHeatCapacity; // J/kg·K
            const T_indoor = coolingState.coolingSetTemp; // °C
            const T_outdoor_night = coolingState.nightTimeTemp; // °C
            const coolingDays = window.TEUI.parseNumeric(getFieldValue('m_19')) || 120; 
            
            // 2. Calculate Temperature Difference
            const tempDiff = T_outdoor_night - T_indoor; // °C or K difference

            // 3. Calculate Sensible Power (Watts) - Based on Excel A55 / A31
            const sensiblePowerWatts = massFlowRateKgS * Cp * tempDiff;
            
            // 4. Determine potential SENSIBLE free cooling power
            let sensibleCoolingPowerWatts = 0;
            if (tempDiff < 0) { // Only possible if outdoor air is cooler
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
            console.error("[S13 Error] Error during calculateFreeCoolingLimit:", error);
            potentialLimit = 0; 
        } finally {
            window.TEUI.sect13.calculatingFreeCooling = false;
        }
        return potentialLimit; 
    }

    /** [Cooling Calc] Calculate days of active cooling required */
    function calculateDaysActiveCooling(currentFreeCoolingLimit) {
        // Note: This calculation might need review against Excel E55 logic.
        // It currently depends on coolingLoad (l_128 from S14) and the passed free cooling limit.
        if (coolingState.coolingLoad > 0 && currentFreeCoolingLimit >= 0) { 
            const dailyCoolingLoad = coolingState.coolingLoad / 120; // Assumes 120 cooling days
            if (dailyCoolingLoad > 0) {
                 const daysCovered = currentFreeCoolingLimit / dailyCoolingLoad;
                 coolingState.daysActiveCooling = Math.max(0, 120 - daysCovered); 
            } else {
                 coolingState.daysActiveCooling = 0; 
            }
        } else {
            coolingState.daysActiveCooling = 0; 
        }
        return coolingState.daysActiveCooling; 
    }

    /** [Cooling Calc] Calculate wet bulb temperature (Approximation) */
    function calculateWetBulbTemperature() {
        // Note: This is an approximation, potentially from COOLING-TARGET.csv E64
        const tdb = coolingState.nightTimeTemp;
        const rh = coolingState.coolingSeasonMeanRH * 100; 
        const twbSimple = tdb - (tdb - (tdb - (100 - rh)/5)) * (0.1 + 0.9 * (rh / 100));
        const twbCorrected = tdb - (tdb - (tdb - (100 - rh) / 5)) * (0.3 + 0.7 * (rh / 100));
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
        const parseNum = window.TEUI?.parseNumeric || function(v) { return parseFloat(v) || 0; }; 
        const getValue = window.TEUI?.StateManager?.getValue || function(id) { return null; };

        // Update state from StateManager
        // TODO: This value should eventually be dynamic, likely from Section 03 weather data
        coolingState.nightTimeTemp = 20.43; // Hardcoded default: Summer Mean Overnight Temp (See COOLING-TARGET.csv A3/A49)
        
        // TODO: This value should eventually be dynamic, likely from Section 03 weather data or user input
        coolingState.coolingSeasonMeanRH = 0.5585; // Default A4 (55.85%) NOT A57 (70%) used elsewhere
        
        // Fetch elevation 
        // TODO: Should be dynamic from weather data lookup in Section 03
        const projectElevation = parseNum(getValue('l_22')) || 80; // Read from Sec 03, fallback to 80m
        const seaLevelPressure = 101325; // E13
        coolingState.atmPressure = seaLevelPressure * Math.exp(-projectElevation / 8434); // E15 logic

        // Check for user override for cooling setpoint in l_24, otherwise use h_24
        const coolingSetTempOverride_l24 = parseNum(getValue('l_24')); 
        if (coolingSetTempOverride_l24 && !isNaN(coolingSetTempOverride_l24)) {
            coolingState.coolingSetTemp = coolingSetTempOverride_l24;
        } else {
            coolingState.coolingSetTemp = parseNum(getValue('h_24')) || 24; // Fallback to h_24 or default 24
        }
        
        coolingState.coolingDegreeDays = parseNum(getValue('d_21')) || 196;
        coolingState.buildingVolume = parseNum(getValue('d_105')) || 8000;
        coolingState.buildingArea = parseNum(getValue('h_15')) || 1427.2;
        coolingState.coolingLoad = getNumericValue('l_128') || 0; // Read mitigated cooling load from S14 - Note: May cause dependency loop issues if S14 reads S13 outputs
        coolingState.ventilationMethod = getFieldValue('g_118') || 'Constant'; // Default to Constant

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
        "header": {
            id: "S13-ID",
            rowId: "S13-ID",
            label: "Mechanical Loads",
            cells: {
                c: { content: "SECTION 13. Mechanical Loads", classes: ["section-subheader", "section-title", "flex-cell"] },
                d: { content: "kWh/yr", classes: ["section-subheader", "flex-cell", "align-center"] },
                e: { content: "", classes: ["section-subheader", "flex-cell"] },
                f: { content: "", classes: ["section-subheader", "flex-cell"] },
                g: { content: "", classes: ["section-subheader", "flex-cell"] },
                h: { content: "", classes: ["section-subheader", "flex-cell"] },
                i: { content: "", classes: ["section-subheader", "flex-cell"] },
                j: { content: "kWh/yr", classes: ["section-subheader", "flex-cell", "align-center"] },
                k: { content: "Reference", classes: ["section-subheader", "flex-cell", "align-center"] },
                l: { content: "", classes: ["section-subheader", "flex-cell"] },
                m: { content: "", classes: ["section-subheader", "flex-cell"] },
                n: { content: "", classes: ["section-subheader", "flex-cell"] }
            }
        },
        
        // ROW 113: Primary Heating System
        "113": {
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
                        { value: "Oil", name: "Oil" }
                    ]
                },
                e: { 
                    content: "M.1.1 HSPF",
                    classes: ["label-prefix"]
                },
                f: { 
                    fieldId: "f_113", 
                    type: "coefficient", // Changed from editable to coefficient slider type
                    value: "12.5",      // Default value
                    min: 3.5,           // Min value
                    max: 20,            // Max value
                    step: 0.1,          // Step increment
                    section: "mechanicalLoads"
                    // Removed classes: ["user-input", "editable"]
                },
                g: { 
                    content: "M.1.2 COPheat",
                    classes: ["label-prefix"]
                },
                h: { 
                    fieldId: "h_113", 
                    type: "calculated", 
                    value: "3.66",
                    section: "mechanicalLoads",
                    dependencies: ["d_113", "f_113"]
                },
                i: { 
                    content: "M.1.3 COPcool",
                    classes: ["label-prefix"]
                },
                j: { 
                    fieldId: "j_113", 
                    type: "calculated", 
                    value: "2.7",
                    section: "mechanicalLoads",
                    dependencies: ["h_113"]
                },
                k: { 
                    content: "M.1.4 Sink",
                    classes: ["label-prefix"]
                },
                l: { 
                    fieldId: "l_113", 
                    type: "calculated", 
                    value: "86,642.65",
                    section: "mechanicalLoads",
                    dependencies: ["d_113", "d_114", "h_113"]
                },
                m: { 
                    fieldId: "m_113", 
                    type: "calculated", 
                    value: "176%",
                    section: "mechanicalLoads",
                    dependencies: ["f_113"]
                },
                n: {}
            }
        },
        
        // ROW 114: Heating System Demand
        "114": {
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
                    dependencies: ["d_113", "d_127", "h_113"]
                },
                e: {},
                f: {},
                g: {},
                h: {},
                i: { 
                    content: "M.1.5. CEER",
                    classes: ["label-prefix"]
                },
                j: { 
                    fieldId: "j_114", 
                    type: "calculated", 
                    value: "9.1",
                    section: "mechanicalLoads",
                    dependencies: ["j_113"]
                },
                k: { 
                    content: "M.1.6 Sink",
                    classes: ["label-prefix"]
                },
                l: { 
                    fieldId: "l_114", 
                    type: "calculated", 
                    value: "5,020.63",
                    section: "mechanicalLoads",
                    dependencies: ["d_113", "d_116", "d_117", "j_113"]
                },
                m: {},
                n: {}
            }
        },
        
        // ROW 115: Heating Fuel Impact
        "115": {
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
                    dependencies: ["d_113", "d_127", "j_115"]
                },
                e: { 
                    content: "M.2.3 Oil l/yr",
                    classes: ["label-prefix"]
                },
                f: { 
                    fieldId: "f_115", 
                    type: "calculated", 
                    value: "0.00",
                    section: "mechanicalLoads",
                    dependencies: ["d_115"]
                },
                g: { 
                    content: "M.2.4 Gas m3/yr",
                    classes: ["label-prefix"]
                },
                h: { 
                    fieldId: "h_115", 
                    type: "calculated", 
                    value: "0.00",
                    section: "mechanicalLoads",
                    dependencies: ["d_115"]
                },
                i: { 
                    content: "M.2.5 AFUE",
                    classes: ["label-prefix"]
                },
                j: { 
                    fieldId: "j_115", 
                    type: "editable", 
                    value: "0.98",
                    section: "mechanicalLoads"
                },
                k: { 
                    content: "M.2.5 Exhaust",
                    classes: ["label-prefix"]
                },
                l: { 
                    fieldId: "l_115", 
                    type: "calculated", 
                    value: "0.00",
                    section: "mechanicalLoads",
                    dependencies: ["d_113", "d_115", "d_114"]
                },
                m: { 
                    fieldId: "m_115", 
                    type: "calculated", 
                    value: "109%",
                    section: "mechanicalLoads",
                    dependencies: ["j_115"]
                },
                n: {}
            }
        },
        
        // ROW 116: Heatpump or Dedicated Cooling System
        "116": {
            id: "M.3.0",
            rowId: "M.3.0",
            label: "Heatpump or Dedicated Cooling System",
            cells: {
                c: { label: "Heatpump or Dedicated Cooling System", classes: ["flex-cell"] },
                d: { 
                    fieldId: "d_116", 
                    type: "dropdown", 
                    dropdownId: "dd_d_116", 
                    value: "Cooling",
                    section: "mechanicalLoads",
                    options: [
                        { value: "Cooling", name: "Cooling" },
                        { value: "No Cooling", name: "No Cooling" }
                    ]
                },
                e: {},
                f: {},
                g: { 
                    content: "M.3.3 COPcool", //ONLY when Dedicated Cooling
                    classes: ["label-prefix"]
                },
                h: {},
                i: {},
                j: { 
                    fieldId: "j_116", 
                    type: "calculated", 
                    value: "2.7",
                    section: "mechanicalLoads",
                    dependencies: []
                },
                k: { 
                    content: "M.3.4 Sink",
                    classes: ["label-prefix"]
                },
                l: { 
                    fieldId: "l_116", 
                    type: "calculated", 
                    value: "5,009.95",
                    section: "mechanicalLoads",
                    dependencies: ["d_116", "d_117", "j_116"]
                },
                m: { 
                    fieldId: "m_116", 
                    type: "calculated", 
                    value: "124%",
                    section: "mechanicalLoads",
                    dependencies: ["j_116"]
                },
                n: {}
            }
        },
        
        // ROW 117: Heatpump Cool Elect. Load
        "117": {
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
                    dependencies: ["d_116", "d_113", "m_129", "j_113", "j_116"]
                },
                e: {},
                f: { 
                    fieldId: "f_117", 
                    type: "calculated", 
                    value: "2.11",
                    section: "mechanicalLoads",
                    dependencies: ["d_117", "h_15"]
                },
                g: { 
                    content: "kWh/m2/yr",
                    classes: ["label"]
                },
                h: {},
                i: { 
                    content: "M.3.6 CEER",
                    classes: ["label-prefix"]
                },
                j: { 
                    fieldId: "j_117", 
                    type: "calculated", 
                    value: "9.1",
                    section: "mechanicalLoads",
                    dependencies: ["j_116"]
                },
                k: {},
                l: {},
                m: { 
                    fieldId: "m_117", 
                    type: "calculated", 
                    value: "4%",
                    section: "mechanicalLoads",
                    dependencies: ["f_117"]
                },
                n: {}
            }
        },
        
        // ROW 118: HRV/ERV/MVHR Efficiency (SRE)
        "118": {
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
                    section: "mechanicalLoads"
                },
                e: {},
                f: { 
                    content: "Ventil. Method",
                    classes: ["label-prefix"]
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
                        { value: "Occupant by Schedule", name: "Occupant by Schedule" }
                    ]
                },
                h: {},
                i: { 
                    content: "V.1.3",
                    classes: ["label-prefix"]
                },
                j: { 
                    content: "ACH",  //(Only if Volume-Based)
                    classes: ["label"]
                },
                k: {},
                l: { 
                    fieldId: "l_118", 
                    type: "editable", 
                    value: "3",
                    section: "mechanicalLoads"
                },
                m: { 
                    fieldId: "m_118", 
                    type: "calculated", 
                    value: "162%",
                    section: "mechanicalLoads",
                    dependencies: ["d_118"]
                },
                n: {}
            }
        },
        
        // ROW 119: Per Person Ventilation Rate
        "119": {
            id: "V.1.4",
            rowId: "V.1.4",
            label: "Per Person Ventilation Rate",
            cells: {
                c: { label: "Per Person Ventilation Rate", classes: ["flex-cell"] },
                d: { 
                    fieldId: "d_119", 
                    type: "editable", 
                    value: "14.00",
                    section: "mechanicalLoads"
                },
                e: { 
                    content: "l/s per person",
                    classes: ["label"]
                },
                f: { 
                    fieldId: "f_119", 
                    type: "calculated", 
                    value: "29.66",
                    section: "mechanicalLoads",
                    dependencies: ["d_119"]
                },
                g: { 
                    content: "cfm",
                    classes: ["label"]
                },
                h: { 
                    fieldId: "h_119", 
                    type: "calculated", 
                    value: "50.40",
                    section: "mechanicalLoads",
                    dependencies: ["d_119"]
                },
                i: { 
                    content: "m3/hr",
                    classes: ["label"]
                },
                j: { content: "V.1.7", classes: ["label-prefix"] }, // New Label ID
                k: { 
                    content: "Summer Boost",
                    classes: ["label"]
                },
                l: { 
                    fieldId: "l_119", 
                    type: "dropdown",
                    dropdownId: "dd_l_119", 
                    value: "None",
                    section: "mechanicalLoads",
                    options: [ // CORRECTED OPTIONS
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
                        { value: "2.00", name: "2.00x" }
                    ]
                },
                m: { 
                    fieldId: "m_119", 
                    type: "calculated", 
                    value: "112%",
                    section: "mechanicalLoads",
                    dependencies: ["d_119"]
                },
                n: {}
            }
        },
        
        // ROW 120: Volumetric Ventilation Rate
        "120": {
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
                    dependencies: ["h_118", "d_63", "d_119", "i_63", "j_63", "l_118", "d_105"]
                },
                e: { 
                    content: "l/s",
                    classes: ["label"]
                },
                f: { 
                    fieldId: "f_120", 
                    type: "calculated", 
                    value: "7,062.93",
                    section: "mechanicalLoads",
                    dependencies: ["d_120"]
                },
                g: { 
                    content: "cfm",
                    classes: ["label"]
                },
                h: { 
                    fieldId: "h_120", 
                    type: "calculated", 
                    value: "12,000.00",
                    section: "mechanicalLoads",
                    dependencies: ["d_120"]
                },
                i: { 
                    content: "m3/hr",
                    classes: ["label"]
                },
                j: { content: "V.1.7", classes: ["label-prefix"] }, // Label for k_120 Unoccupied Ventilation Setback 
                k: { 
                    fieldId: "k_120", 
                    type: "percentage", // Change to percentage
                    dropdownId: "dd_k_120", // Add ID
                    value: "90", // Set default to 90%
                    section: "mechanicalLoads",
                    options: [ // Add options
                        { value: "0.1", name: "10%" },
                        { value: "0.2", name: "20%" },
                        { value: "0.3", name: "30%" },
                        { value: "0.4", name: "40%" },
                        { value: "0.5", name: "50%" },
                        { value: "0.6", name: "60%" },
                        { value: "0.7", name: "70%" },
                        { value: "0.8", name: "80%" },
                        { value: "0.9", name: "90%" }
                    ],
                    classes: ["col-small"] // Add class
                 }, 
                l: { content: "Unoccupied Setback", classes: ["label"] }, // Unoccupied Setback label
                m: {},
                n: {}
            }
        },
        
        // ROW 121: Heating Season Ventil. Energy
        "121": {
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
                    dependencies: ["d_120", "d_20"]
                },
                e: { 
                    content: "V.2.2",
                    classes: ["label-prefix", "flex-cell"]
                },
                f: { 
                    content: "Htg. Vent. Energy Recovered",
                    classes: ["label", "flex-cell"]
                },
                g: {},
                h: {},
                i: { 
                    fieldId: "i_121", 
                    type: "calculated", 
                    value: "396,299.20",
                    section: "mechanicalLoads",
                    dependencies: ["d_121", "d_118"]
                },
                j: { 
                    content: "V.2.3",
                    classes: ["label-prefix", "flex-cell"]
                },
                k: { 
                    content: "Net Htg. Vent. Losses",  //Net Heating Season Ventilation Losses
                    classes: ["label", "flex-cell"]
                },
                l: {},
                m: { 
                    fieldId: "m_121", 
                    type: "calculated", 
                    value: "48,980.80",
                    section: "mechanicalLoads",
                    dependencies: ["d_121", "i_121"]
                },
                n: {}
            }
        },
        
        // ROW 122: Incoming Cooling Season Ventil. Energy - References Cooling calculations
        "122": {
            id: "V.3.1",
            rowId: "V.3.1",
            label: "Incoming Cooling Season Ventil. Energy",
            cells: {
                c: { label: "Incoming Cooling Season Ventil. Energy", classes: ["flex-cell"] },
                d: { 
                    fieldId: "d_122", 
                    type: "calculated", 
                    value: "30,257.37",
                    section: "mechanicalLoads",
                    dependencies: ["h_118", "l_119", "d_120", "d_21", "i_63", "j_63", "i_122"]
                },
                e: { 
                    content: "V.3.2",
                    classes: ["label-prefix", "flex-cell"]
                },
                f: { 
                    content: "Latent Load Factor (Calc'd)",
                    classes: ["label", "flex-cell"]
                },
                g: {},
                h: {},
                i: { 
                    fieldId: "i_122", 
                    type: "calculated", 
                    value: "159%",
                    section: "mechanicalLoads",
                    dependencies: ["cooling_latentLoadFactor"]
                },
                j: {},
                k: {},
                l: {},
                m: {},
                n: {}
            }
        },
        
        // ROW 123: Outgoing Cooling Season Ventil. Energy
        "123": {
            id: "V.3.3",
            rowId: "V.3.3",
            label: "Outgoing Cooling Season Ventil. Energy",
            cells: {
                c: { label: "Outgoing Cooling Season Ventil. Energy", classes: ["flex-cell"] },
                d: { 
                    fieldId: "d_123", 
                    type: "calculated", 
                    value: "26,929.06",
                    section: "mechanicalLoads",
                    dependencies: ["d_118", "d_122"]
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
                n: {}
            }
        },
        
        // ROW 124: Ventilation Free Cooling/Vent Capacity - References Cooling calculations
        "124": {
            id: "V.4.1",
            rowId: "V.4.1",
            label: "Ventilation Free Cooling/Vent Capacity",
            cells: {
                c: { label: "Ventilation Free Cooling/Vent Capacity", classes: ["flex-cell"] },
                d: { 
                    fieldId: "d_124", 
                    type: "calculated", 
                    value: "54%",
                    section: "mechanicalLoads",
                    dependencies: ["h_124", "d_129"]
                },
                e: { 
                    content: "V.4.2",
                    classes: ["label-prefix", "flex-cell"]
                },
                f: { 
                    content: "Free Cooling Limit",
                    classes: ["label", "flex-cell"]
                },
                g: {},
                h: { 
                    fieldId: "h_124", 
                    type: "calculated", 
                    value: "41,469.81",
                    section: "mechanicalLoads",
                    dependencies: ["cooling_freeCoolingLimit", "m_19"]
                },
                i: { 
                    content: "kWh/yr",
                    classes: ["label", "flex-cell"]
                },
                j: { 
                    content: "Cooling Days", //Days Active Cooling Required (Experimental)
                    classes: ["label", "flex-cell"]
                },
                k: {},
                l: {},
                m: { 
                    fieldId: "m_124", 
                    type: "calculated", 
                    value: "-31",
                    section: "mechanicalLoads",
                    dependencies: ["cooling_daysActiveCooling"]
                },
                n: {}
            }
        }
    };
    
    //==========================================================================
    // ACCESSOR METHODS TO EXTRACT FIELDS AND LAYOUT
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
                        section: cell.section || "mechanicalLoads"
                    };
                    
                    // Copy additional field properties if they exist
                    if (cell.dropdownId) fields[cell.fieldId].dropdownId = cell.dropdownId;
                    if (cell.options) fields[cell.fieldId].options = cell.options;
                    if (cell.getOptions) fields[cell.fieldId].getOptions = cell.getOptions;
                    if (cell.dependencies) fields[cell.fieldId].dependencies = cell.dependencies;
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
        Object.values(sectionRows).forEach(row => {
            if (!row.cells) return;
            
            Object.values(row.cells).forEach(cell => {
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
        
        // Start with an empty array for rows
        const layoutRows = [];
        
        // First add the header row if it exists
        if (sectionRows["header"]) {
            layoutRows.push(createLayoutRow(sectionRows["header"]));
        }
        
        // Then add all other rows in their original order, excluding the header
        Object.entries(sectionRows).forEach(([key, row]) => {
            if (key !== "header") {
                layoutRows.push(createLayoutRow(row));
            }
        });
        
        return { rows: layoutRows };
    }
    
    /**
     * Helper function to convert a row definition to the layout format
     * This function handles the conversion of column C cells for proper row labels
     */
    function createLayoutRow(row) {
        // Create standard row structure
        const rowDef = {
            id: row.id,
            cells: [
                {}, // Empty column A
                {}  // ID column B (auto-populated)
            ]
        };
        
        // Add cells C through N based on the row definition
        const columns = ['c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n'];
        
        // For each column, add the cell definition if it exists in the row
        columns.forEach(col => {
            if (row.cells && row.cells[col]) {
                // Create a simplified cell definition for the renderer
                // without the extra field properties
                const cell = { ...row.cells[col] };
                
                // Ensure each cell has flex-cell class for responsive behavior
                if (!cell.classes) {
                    cell.classes = ["flex-cell"];
                } else if (!cell.classes.includes("flex-cell")) {
                    cell.classes.push("flex-cell");
                }
                
                // Special handling for column C to support both label patterns
                if (col === 'c') {
                    // If using content+type pattern, convert to label pattern
                    if (cell.type === 'label' && cell.content && !cell.label) {
                        cell.label = cell.content;
                        delete cell.type;    // Not needed for rendering
                        delete cell.content; // Not needed once we have label
                    }
                    // If neither label nor content exists, use row's label as fallback
                    else if (!cell.label && !cell.content && row.label) {
                        cell.label = row.label;
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
                if (col === 'c' && !row.cells?.c && row.label) {
                    rowDef.cells.push({ label: row.label, classes: ["flex-cell"] });
                } else {
                    // Otherwise add empty cell with flex class
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
        // Get the section container element once
        const sectionElement = document.getElementById('mechanicalLoads');
        if (!sectionElement) {
            console.warn("Section 13 container #mechanicalLoads not found. Cannot initialize handlers.");
            return; // Exit if container not found
        }

        // --- Standard Editable Field Handlers --- 
        // Use the already defined sectionElement
        const editableFields = sectionElement.querySelectorAll('.editable.user-input');
        // console.log(`[Debug S13] Found ${editableFields.length} editable fields in Section 13.`); // Keep logs for now
        editableFields.forEach(field => {
            const fieldId = field.getAttribute('data-field-id'); // Get field ID for logging
            // Prevent adding listeners multiple times
            if (!field.hasEditableListeners) {
                // console.log(`[Debug S13] Attaching listeners to editable field: ${fieldId}`); // Keep logs for now
                field.setAttribute('contenteditable', 'true');
                
                // Use a single blur handler for consistency
                field.addEventListener('blur', handleEditableBlur); 
                
                // Add keydown listener to handle Enter key
                field.addEventListener('keydown', function(e) { 
                    // console.log(`[Debug S13] Keydown on ${fieldId}: Key = ${e.key}`); // Keep logs for now
                    if (e.key === 'Enter') {
                        // console.log(`[Debug S13] Enter detected on ${fieldId}. Preventing default and blurring.`); // Keep logs for now
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

            // Listener for d_113 (Heating System) changes
            sm.addListener('d_113', calculateHeatingSystem);
            
            // Listener for f_113 (HSPF) changes
            sm.addListener('f_113', calculateCOPValues);

            // Listener for d_116 (Cooling System) changes
            sm.addListener('d_116', calculateCoolingSystem);

            // Listener for d_118 (Ventilation Efficiency) changes
            sm.addListener('d_118', calculateVentilationValues);

            // Listener for g_118 (Ventilation Method) changes
            sm.addListener('g_118', calculateVentilationRates);

            // Listener for d_119 (Per Person Rate) changes
            sm.addListener('d_119', calculateVentilationRates);

            // Listener for l_119 (Summer Boost) changes
            sm.addListener('l_119', calculateCoolingVentilation);

            // --- Listeners for m_129 Dependencies ---
            // These ensure m_129 recalculates ONLY when its direct inputs change
            sm.addListener('d_129', calculateMitigatedCED); // d_129 from S14
            sm.addListener('h_124', calculateMitigatedCED); // h_124 from S13 (Free Cooling)
            sm.addListener('d_123', calculateMitigatedCED); // d_123 from S13 (Vent Recovery)
            // -----------------------------------------

        // Add listeners for climate data changes from Section 3
            sm.addListener('d_20', calculateAll); // HDD
            sm.addListener('d_21', calculateAll); // CDD
            sm.addListener('d_23', calculateAll); // Coldest Day Temp
            sm.addListener('d_24', calculateAll); // Hottest Day Temp
            sm.addListener('h_23', calculateAll); // Heating Setpoint
            sm.addListener('h_24', calculateAll); // Cooling Setpoint
            // Listen to relevant outputs from Section 12 (e.g., total losses)
            sm.addListener('i_104', calculateAll);
            sm.addListener('k_104', calculateAll);
            // Listen to relevant outputs from Section 9/10 (gains)
            sm.addListener('i_71', calculateAll);
            sm.addListener('i_79', calculateAll);
            sm.addListener('d_127', calculateHeatingSystem); // TED (from S14, for d_114)
            // Listener for m_129 (CED Mitigated) - NEEDED
            sm.addListener('m_129', () => { 
                // console.log("[S13 Listener] m_129 changed! Calling calculateCoolingSystem."); // REMOVE Log
                calculateCoolingSystem(); 
            }); 
        } else {
            console.warn("Section 13: StateManager not available to add climate/loss/gain listeners.");
        }

        // --- Use Event Delegation for k_120 control --- 
        // Use the sectionElement declared earlier
        // const sectionElement = document.getElementById('mechanicalLoads'); // REMOVE this duplicate declaration
        if (sectionElement && !sectionElement.hasK120DelegateListener) { // Just use sectionElement
            console.log("[S13 Init] Attaching delegated listener for k_120 control to #mechanicalLoads");
            // Listen for both input (for slider drag) and change (for select or slider release)
            sectionElement.addEventListener('input', handleK120Change);
            sectionElement.addEventListener('change', handleK120Change);
            sectionElement.hasK120DelegateListener = true; // Add flag
        } else if (!sectionElement) {
            console.warn("[S13 Init] Could not find #mechanicalLoads element to attach delegated listener.");
        }
        // --- End Event Delegation ---

        // --- Remove previous direct listener attempt ---
        /*
        const k120Dropdowns = document.querySelectorAll('[data-dropdown-id="dd_k_120"]');
        console.log(`[S13 Init] Found ${k120Dropdowns.length} elements for dd_k_120 listener.`); 
        k120Dropdowns.forEach(dropdown => {
            if (dropdown.hasK120Listener) {
                 console.log(`[S13 Init] Listener already attached to dd_k_120.`); 
                 return;
            }
            console.log(`[S13 Init] Attaching listener to dd_k_120:`, dropdown); 
            dropdown.addEventListener('change', function(e) {
                console.log("[S13 Listener] k_120 changed!");
                const fieldId = this.getAttribute('data-field-id');
                const decimalValueStr = this.value; 
                const decimalValue = parseFloat(decimalValueStr); 
                console.log(`[S13 Listener] Field ID: ${fieldId}, New Value: ${decimalValueStr}`);
                
                if (!fieldId || isNaN(decimalValue)) return;
                
                if (window.TEUI.StateManager) {
                    console.log(`[S13 Listener] Updating StateManager for ${fieldId} with value ${decimalValueStr}`);
                    window.TEUI.StateManager.setValue(fieldId, decimalValueStr, 'user-modified'); 
                    console.log(`[S13 Listener] StateManager value for ${fieldId} is now: ${window.TEUI.StateManager.getValue(fieldId)}`);
                }
                
                if (window.TEUI.SectionModules.sect13?.calculateFreeCooling) {
                     console.log(`[S13 Listener] Calling calculateFreeCooling directly with setback override: ${decimalValue}`);
                     window.TEUI.SectionModules.sect13.calculateFreeCooling(decimalValue); 
                } else {
                    console.warn("Could not find calculateFreeCooling function to call directly.");
                    calculateAll(); 
                }
            });
            dropdown.hasK120Listener = true;
        });
        */

        // --- Handler function for k_120 change (defined within IIFE scope) ---
        function handleK120Change(e) {
            if (e.target && e.target.matches('[data-field-id="k_120"]')) {
                // console.log(`[S13 Listener] k_120 ${e.type} event!`); // REMOVE Log
                const controlElement = e.target;
                const fieldId = controlElement.getAttribute('data-field-id');
                
                const sliderValueStr = controlElement.value; 
                const sliderValue = parseFloat(sliderValueStr);
                const decimalValue = sliderValue / 100; 
                const decimalValueStrForState = decimalValue.toString();

                // console.log(`[S13 Listener] Field ID: ${fieldId}, Slider Value: ${sliderValueStr}, Decimal Value: ${decimalValue}`); // REMOVE Log
                
                if (!fieldId || isNaN(decimalValue)) {
                    // console.warn(`[S13 Listener] Invalid value or fieldId for k_120.`); // REMOVE Log
                    return;
                }
                
                const displaySpan = document.querySelector(`#mechanicalLoads span[data-display-for="${fieldId}"]`); 
                if (displaySpan) {
                    displaySpan.textContent = `${sliderValue.toFixed(0)}%`; 
                }

                if (window.TEUI.StateManager) {
                    // console.log(`[S13 Listener] Updating StateManager for ${fieldId} with value ${decimalValueStrForState}`); // REMOVE Log
                    window.TEUI.StateManager.setValue(fieldId, decimalValueStrForState, 'user-modified'); 
                    // console.log(`[S13 Listener] StateManager value for ${fieldId} is now: ${window.TEUI.StateManager.getValue(fieldId)}`); // REMOVE Log
                }
                
                // REVERT: Remove direct call, rely on calculateAll trigger
                /*
                if (window.TEUI.SectionModules.sect13?.calculateFreeCooling) {
                     console.log(`[S13 Listener] Calling calculateFreeCooling directly with setback override: ${decimalValue}`); 
                     window.TEUI.SectionModules.sect13.calculateFreeCooling(decimalValue); 
                } else {
                    console.warn("Could not find calculateFreeCooling function to call directly.");
                    calculateAll(); 
                }
                */
                console.log(`[S13 Listener] Calling calculateAll() after k_120 change.`); // KEEP Log
                calculateAll(); // Trigger full recalculation via standard flow
            }
        }
        // --- End Handler function ---
    }
    
    /**
     * Handle blur events on editable fields (Standard Handler - Defined inside IIFE)
     */
    function handleEditableBlur(event) {
        const fieldId = this.getAttribute('data-field-id');
        if (!fieldId) return;

        const newValue = this.textContent.trim();
        const numericValue = window.TEUI.parseNumeric(newValue, NaN); // Use global parser

        if (!isNaN(numericValue)) {
            // Format display using the global formatter - infer format or use default
            const formatType = (fieldId === 'j_115' || fieldId === 'l_118') ? 'number-2dp' : 'number-2dp'; // Adjust format as needed
            this.textContent = window.TEUI.formatNumber(numericValue, formatType);
            
            // Update StateManager with the raw numeric value (as string for precision)
            if (window.TEUI.StateManager) {
                window.TEUI.StateManager.setValue(fieldId, numericValue.toString(), 'user-modified');
            }
            // Trigger calculateAll explicitly AFTER state is set if blur handler doesn't rely on listeners
            // Check if a listener for this fieldId already triggers calculateAll via StateManager
            // If not, uncomment the line below. For f_113, a listener exists.
            // if (fieldId !== 'f_113') { calculateAll(); } 
        } else {
            // Revert to previous valid value if input is invalid
            const previousValue = window.TEUI.StateManager?.getValue(fieldId) || '0'; // Fallback to 0 or previous state
            const prevNumericValue = window.TEUI.parseNumeric(previousValue, 0);
            // Determine format for previous value
            const formatType = (fieldId === 'j_115' || fieldId === 'l_118') ? 'number-2dp' : 'number-2dp';
            this.textContent = window.TEUI.formatNumber(prevNumericValue, formatType);
            console.warn(`Invalid input for ${fieldId}: "${newValue}". Reverted to ${this.textContent}.`);
        }
    }
    
    /**
     * Called when the section is rendered
     * This is a good place to initialize values and run initial calculations
     */
    function onSectionRendered() {
        // Register default value for the new setback dropdown
        if (window.TEUI?.StateManager?.setValue) {
            window.TEUI.StateManager.setValue('k_120', '0.9', 'default'); // Default to 90%
        }

        // Initialize event handlers
        initializeEventHandlers();
        
        // Register with the StateManager
        registerWithStateManager();
        
        // Run initial calculations
        calculateAll();
    }
    
    /**
     * Register this section's dependencies with StateManager
     */
    function registerWithStateManager() {
        if (!window.TEUI.StateManager) return;
        
        const sm = window.TEUI.StateManager;
        
        // Register dependencies from other sections
        sm.registerDependency('d_20', 'd_121'); // HDD affects ventilation energy
        sm.registerDependency('d_21', 'd_122'); // CDD affects cooling ventilation
        sm.registerDependency('d_105', 'd_120'); // Building volume affects ventilation rate
        sm.registerDependency('d_63', 'd_120'); // Occupants affects ventilation rate
        sm.registerDependency('h_15', 'f_117'); // Floor area affects intensity
        sm.registerDependency('d_127', 'd_114'); // TED affects heating demand
        sm.registerDependency('l_128', 'd_117'); // Mitigated cooling load affects HP elect load
        sm.registerDependency('l_128', 'h_130'); // Mitigated cooling load affects CEDI Mitigated W/m2
        sm.registerDependency('g_118', 'h_124'); // Ventilation method affects Free Cooling Limit
        sm.registerDependency('k_120', 'h_124'); // Setback % affects Free Cooling Limit (if scheduled)
        
        // REMOVED listener registration for cooling module values
        /*
        if (window.TEUI.CoolingCalculations) {
            sm.addListener('cooling_latentLoadFactor', calculateCoolingVentilation);
            sm.addListener('cooling_freeCoolingLimit', calculateFreeCooling);
        }
        */
        sm.registerDependency('d_129', 'm_129');
        // ADDED: Need h_124 and d_123 from S13 itself to calculate m_129
        sm.registerDependency('h_124', 'm_129');
        sm.registerDependency('d_123', 'm_129');
    }
    
    /**
     * Initialize the cooling calculations module if available
     */
    // REMOVED function initializeCoolingModule() { ... }
    
    /**
     * Calculate COPh and COPc values based on heating system and HSPF
     */
    function calculateCOPValues() {
        const hspf = window.TEUI.parseNumeric(getFieldValue('f_113')) || 0;
        const systemType = getFieldValue('d_113');
        let copheat = 1;
        if (systemType === 'Heatpump' && hspf > 0) { copheat = hspf / 3.412; }
        let copcool = Math.max(1, copheat - 1);
        setCalculatedValue('h_113', copheat, 'number-2dp'); 
        setCalculatedValue('j_113', copcool, 'number-1dp'); 
        const ceer = 3.412 * copcool;
        setCalculatedValue('j_114', ceer, 'number-1dp'); 
        calculateHeatingSystem();
    }
    
    /**
     * Calculate heating system values based on system type and COP
     */
    function calculateHeatingSystem() {
        const systemType = getFieldValue('d_113');
        // Use global parser
        const tedTarget = window.TEUI.parseNumeric(getFieldValue('d_127')) || 0; 
        // console.log(`[S13 Debug] Inside calculateHeatingSystem - tedTarget (d_127) = ${tedTarget}`); // REMOVED LOG
        let heatingDemand_d114 = 0;
        let heatingSink_l113 = 0;
        let isHeatpump = (systemType === 'Heatpump');
        
        // --- Apply dynamic styling/values --- 
        setFieldDisabled('f_113', !isHeatpump); // Disable HSPF slider if not Heatpump
        setFieldDisabled('h_113', !isHeatpump); // Disable COPheat display if not Heatpump
        setFieldDisabled('j_113', !isHeatpump); // Disable COPcool display if not Heatpump
        setFieldDisabled('l_113', !isHeatpump); // Disable HP Sink display if not Heatpump
        // Style labels too? (e.g., f_113 label is in cell e, h_113 label in g, j_113 label in i, l_113 label in k)
        // Example: document.querySelector('[data-id="M.1.0"] .col-e').classList.toggle('ghost-text', !isHeatpump);
        
        if (isHeatpump) {
            // Re-calculate COP locally based on f_113 (HSPF) for this calculation
            const hspf = window.TEUI.parseNumeric(getFieldValue('f_113')) || 3.5; // Get HSPF
            const local_copheat = (hspf > 0) ? hspf / 3.412 : 1; // Calculate local COP
            
            // Use the locally calculated COP value for d_114 calculation
            if (local_copheat > 0) { // Ensure COP > 0 before dividing
                 heatingDemand_d114 = tedTarget / local_copheat; 
                 heatingSink_l113 = heatingDemand_d114 * (local_copheat - 1);
            } else {
                 heatingDemand_d114 = tedTarget; // Fallback if COP is invalid
                 heatingSink_l113 = 0;
            }
        } else {
            // Not a Heatpump - Use TEDI directly, sink is 0
            heatingDemand_d114 = tedTarget;
            heatingSink_l113 = 0;
            // Force COP values for non-heatpump systems
            setCalculatedValue('h_113', 1.0, 'number-2dp'); 
            setCalculatedValue('j_113', 0.0, 'number-1dp'); 
            setCalculatedValue('j_114', 0.0, 'number-1dp'); // CEER is also 0
            // Optionally reset HSPF slider/value to min when disabled?
            // const slider = document.querySelector('[data-field-id="f_113"] input[type="range"]');
            // if (slider) slider.value = 3.5;
            // setCalculatedValue('f_113', 3.5, 'number-1dp'); // Update display too
        }
        
        setCalculatedValue('d_114', heatingDemand_d114, 'number-2dp-comma'); 
        setCalculatedValue('l_113', heatingSink_l113, 'number-2dp-comma');

        calculateHeatingFuelImpact();
        calculateCoolingSystem();
    }
    
    /**
     * Calculate heating fuel impact for gas and oil systems
     */
    function calculateHeatingFuelImpact() {
        const systemType = getFieldValue('d_113');
        const tedTarget = window.TEUI.parseNumeric(getFieldValue('d_127')) || 0; 
        const afue = window.TEUI.parseNumeric(getFieldValue('j_115')) || 1; 
        let fuelImpact = 0, oilLitres = 0, gasM3 = 0, exhaust = 0;
        if (systemType === 'Gas' && afue > 0) {
            fuelImpact = tedTarget / afue;
            gasM3 = fuelImpact / 10.36; // kWh to m3 approx
            exhaust = fuelImpact - tedTarget; 
        } else if (systemType === 'Oil' && afue > 0) {
            fuelImpact = tedTarget / afue;
            oilLitres = fuelImpact / 10.2; // kWh to Litres approx
            exhaust = fuelImpact - tedTarget; 
        }
        setCalculatedValue('d_115', fuelImpact, 'number-2dp-comma');
        setCalculatedValue('f_115', oilLitres, 'number-2dp-comma');
        setCalculatedValue('h_115', gasM3, 'number-2dp-comma');
        setCalculatedValue('l_115', exhaust, 'number-2dp-comma');
        const m115_percent = afue > 0 ? 1 / afue : 0;
        setCalculatedValue('m_115', m115_percent, 'percent-0dp');
    }
    
    /**
     * Calculate cooling system values
     */
    function calculateCoolingSystem() {
        const coolingSystemType = getFieldValue('d_116');
        const heatingSystemType = getFieldValue('d_113');
        // Use global parser
        // Read m_129 (CED Mitigated) from S14
        const coolingDemand_m129 = window.TEUI.parseNumeric(getFieldValue('m_129')) || 0; 
        const copcool_hp_j113 = window.TEUI.parseNumeric(getFieldValue('j_113')) || 0;
        const copcool_dedicated_h116 = 2.7; // Default value for dedicated
        
        let copcool_to_use = 0;
        let coolingLoad_d117 = 0;
        let coolingSink_l116 = 0; // Sink for Dedicated Cooling
        let coolingSink_l114 = 0; // Initialize Sink for Heatpump Cooling
        let isCoolingActive = (coolingSystemType === 'Cooling');

        // --- Dynamic Styling --- // (Logic remains unchanged)
        // ...

        if (isCoolingActive) {
            if (heatingSystemType === 'Heatpump') {
                copcool_to_use = copcool_hp_j113; // Uses HP COPcool
                
                // --- Add Debug Logs --- 
                // console.log(`[Debug S13] Inside calculateCoolingSystem (Heatpump Active):`);
                // console.log(`  - coolingDemandTEDI_m129 (from m_129/l_128): ${coolingDemandTEDI_m129}`);
                // console.log(`  - copcool_hp_j113 (from j_113): ${copcool_hp_j113}`);
                // console.log(`  - copcool_to_use: ${copcool_to_use}`);
                
                // Calculate L114 Sink = (Load * COP) - Load = Load * (COP - 1)
                // Need to calculate D117 (Load) first
                if (copcool_to_use > 0) { // Check HP COPcool
                     coolingLoad_d117 = coolingDemand_m129 / copcool_to_use; // Use m_129
                     coolingSink_l114 = coolingLoad_d117 * (copcool_to_use - 1);
                } else {
                     coolingLoad_d117 = 0; // Avoid division by zero if COP is invalid
                     coolingSink_l114 = 0;
                }
                // Dedicated sink is 0 if HP is used
                coolingSink_l116 = 0;
                // HP sink is 0 if dedicated is used
                coolingSink_l114 = 0;
                // --- REMOVE Debug Logs --- 
                // console.log(`[Debug S13] Inside calculateCoolingSystem (Dedicated Active):`);
                // console.log(`  - coolingDemandTEDI_m129 (from m_129/l_128): ${coolingDemandTEDI_m129}`);
                // console.log(`  - copcool_dedicated_h116: ${copcool_dedicated_h116}`);
                // console.log(`  - copcool_to_use: ${copcool_to_use}`);
            } else {
                // Assumes dedicated cooling system if not Heatpump and Cooling is active
                copcool_to_use = copcool_dedicated_h116; // Use the hardcoded/default dedicated value
                 // Calculate load and L116 sink
                 if (copcool_to_use > 0) {
                    coolingLoad_d117 = coolingDemand_m129 / copcool_to_use; // Use m_129
                    coolingSink_l116 = coolingLoad_d117 * (copcool_to_use - 1); 
                } else {
                    coolingLoad_d117 = 0;
                    coolingSink_l116 = 0;
                }
                // HP sink is 0 if dedicated is used
                coolingSink_l114 = 0;
            }
            
        } else {
            // No Cooling selected
            coolingLoad_d117 = 0;
            coolingSink_l116 = 0;
            coolingSink_l114 = 0; // Also set HP sink to 0 if no cooling
            copcool_to_use = 0; // Reflects no active cooling efficiency
        }

        // Specify format types explicitly
        setCalculatedValue('j_116', copcool_to_use, 'number-1dp'); // Use the effective COPc
        setCalculatedValue('l_116', coolingSink_l116, 'number-2dp-comma'); // Dedicated Sink
        setCalculatedValue('l_114', coolingSink_l114, 'number-2dp-comma'); // ADDED: Heatpump Sink
        setCalculatedValue('d_117', coolingLoad_d117, 'number-2dp-comma');
        
        // Calculate intensity f_117
        // Use global parser
        const area_h15 = window.TEUI.parseNumeric(getFieldValue('h_15')) || 0;
        const intensity_f117 = area_h15 > 0 ? coolingLoad_d117 / area_h15 : 0;
        setCalculatedValue('f_117', intensity_f117, 'number-2dp');
        
        // Update other COP/CEER displays based on effective COPc
        const ceer_j117 = 3.412 * copcool_to_use;
        setCalculatedValue('j_117', ceer_j117, 'number-1dp');
        
        // Update percentage comparison m_116, m_117 using FORMULAE-3037 logic
        // TODO: Fetch actual Reference values (T116, T117) when available
        const ref_cop_cool_T116 = 3.35; // Placeholder for Reference COPcool
        const ref_intensity_T117 = 138; // Placeholder for Reference Intensity
        
        const m116_value = (copcool_to_use > 0) ? ref_cop_cool_T116 / copcool_to_use : 0;
        setCalculatedValue('m_116', m116_value, 'percent-0dp'); 

        const m117_value = (ref_intensity_T117 > 0) ? intensity_f117 / ref_intensity_T117 : 0;
        setCalculatedValue('m_117', m117_value, 'percent-0dp'); 

        // Trigger downstream calcs like ventilation
        calculateCoolingVentilation();
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
     * Also calculates k_120 (Vent Volume for Cooling) based on method.
     */
    function calculateVentilationRates() {
        const ventMethod = getFieldValue('g_118');
        
        const ratePerPerson_d119 = window.TEUI.parseNumeric(getFieldValue('d_119')) || 0;
        const volume = window.TEUI.parseNumeric(getFieldValue('d_105')) || 0;
        const ach = window.TEUI.parseNumeric(getFieldValue('l_118')) || 0;
        const occupiedHours = window.TEUI.parseNumeric(getFieldValue('i_63')) || 0;
        const totalHours = window.TEUI.parseNumeric(getFieldValue('j_63')) || 8760;
        const occupants_d63 = window.TEUI.parseNumeric(getFieldValue('d_63')) || 0; // Fetch d_63 value
        let ventRateLs = 0;

        if (ventMethod === 'Occupant Constant') { 
            ventRateLs = ratePerPerson_d119 * occupants_d63; // CORRECT: Use d_63 value
        }
        else if (ventMethod === 'Occupant by Schedule') { 
             ventRateLs = totalHours > 0 ? (ratePerPerson_d119 * occupants_d63 * (occupiedHours / totalHours)) : 0; // CORRECT: Use d_63 value
        }
        else if (ventMethod === 'Volume by Schedule') { 
            ventRateLs = totalHours > 0 && volume > 0 ? ((ach * volume / 3.6) * (occupiedHours / totalHours)) : 0; 
        }
        else if (ventMethod === 'Volume Constant') { ventRateLs = volume > 0 ? (ach * volume / 3.6) : 0; }
        else { ventRateLs = volume > 0 ? (ach * volume / 3.6) : 0; } // Default to Volume Constant
        
        const ventilationRateLs_d120 = ventRateLs;
        const ventilationRateM3h_h120 = ventilationRateLs_d120 * 3.6;

        setCalculatedValue('d_120', ventilationRateLs_d120, 'number-2dp-comma');
        setCalculatedValue('f_120', ventRateLs * 2.11888, 'number-2dp-comma'); // cfm conversion
        setCalculatedValue('h_120', ventilationRateM3h_h120, 'number-2dp-comma'); // m3/hr

        // REMOVED Calculation for k_120 - Now a user input dropdown
        /*
        let ventVolumeCooling_k120 = 0;
        if (ventMethod && ventMethod.includes('Constant')) {
            ventVolumeCooling_k120 = ventilationRateM3h_h120; // Use full avg rate if constant
        } else { 
            ventVolumeCooling_k120 = 0; // Assume zero effective rate for cooling if scheduled
        }
        setCalculatedValue('k_120', ventVolumeCooling_k120, 'number-2dp-comma');
        */

        // Update SRE % display (m_118)
        const sre_d118 = window.TEUI.parseNumeric(getFieldValue('d_118')) || 0;
        setCalculatedValue('m_118', sre_d118 / 100, 'percent-0dp'); 

        // console.log(`[S13 Vent Calc] Method: ${ventMethod}, Calculated ventRateLs (d_120): ${ventRateLs.toFixed(2)}`); // REMOVED LOG

        // Update d_120 (L/s)
        setCalculatedValue('d_120', ventRateLs, 'number-2dp-comma');
    }
    
    /**
     * Calculate ventilation energy exchange during heating season
     */
    function calculateVentilationEnergy() {
        const ventRate = window.TEUI.parseNumeric(getFieldValue('d_120')) || 0;
        const hdd = window.TEUI.parseNumeric(getFieldValue('d_20')) || 0;
        const efficiency = (window.TEUI.parseNumeric(getFieldValue('d_118')) || 0) / 100;
        const heatingVentEnergy = 1.21 * ventRate * hdd * 24 / 1000;
        setCalculatedValue('d_121', heatingVentEnergy, 'number-2dp-comma');
        const recoveredEnergy = heatingVentEnergy * efficiency;
        setCalculatedValue('i_121', recoveredEnergy, 'number-2dp-comma');
        const netHeatLoss = heatingVentEnergy - recoveredEnergy;
        setCalculatedValue('m_121', netHeatLoss, 'number-2dp-comma');
    }
    
    /**
     * Calculate ventilation energy exchange during cooling season
     */
    function calculateCoolingVentilation() {
        // IMPORTANT: First run integrated cooling calculations to ensure state is up-to-date
        runIntegratedCoolingCalculations(); 
        
        // Get required inputs FROM STATEMANAGER 
        const ventilationRateLs_d120 = window.TEUI.parseNumeric(getFieldValue('d_120')) || 0;
        const cdd_d21 = window.TEUI.parseNumeric(getFieldValue('d_21')) || 0; 
        const occupiedHours_i63 = window.TEUI.parseNumeric(getFieldValue('i_63')) || 0; 
        const totalHours_j63 = window.TEUI.parseNumeric(getFieldValue('j_63')) || 8760; 
        const occupancyFactor = (totalHours_j63 > 0) ? (occupiedHours_i63 / totalHours_j63) : 0;
        const latentLoadFactor_i122 = coolingState.latentLoadFactor;
        const summerBoostRawValue = getFieldValue('l_119');
        const summerBoostFactor = (summerBoostRawValue === 'None' || summerBoostRawValue === '') ? 1.0 : window.TEUI.parseNumeric(summerBoostRawValue) || 1.0;
        const coolingSystem_d116 = getFieldValue('d_116');
        const baseConstant = 1.21; 
        const sre_d118 = window.TEUI.parseNumeric(getFieldValue('d_118')) / 100 || 0; // Convert %

        // console.log("=== [S13 DIAG] Cooling Ventilation Diagnostics ==="); // REMOVE Log
        // console.log(`  Inputs: d120=${ventilationRateLs_d120.toFixed(2)}, cdd=${cdd_d21}, i63=${occupiedHours_i63}, j63=${totalHours_j63}, occFactor=${occupancyFactor.toFixed(4)}, LLF(i122)=${latentLoadFactor_i122.toFixed(4)}, boost=${summerBoostFactor}, coolingActive=${coolingSystem_d116}, SRE(d118)=${sre_d118}`); // REMOVE Log

        let ventEnergyCoolingIncoming_d122 = 0;

        // Match the Excel formula structure exactly to ensure calculation parity
        if (coolingSystem_d116 === 'Cooling') {
            if (summerBoostRawValue === 'None' || summerBoostRawValue === '') {
                ventEnergyCoolingIncoming_d122 = baseConstant * ventilationRateLs_d120 * cdd_d21 * 24 / 1000 * occupancyFactor * latentLoadFactor_i122;
            } else {
                ventEnergyCoolingIncoming_d122 = baseConstant * ventilationRateLs_d120 * cdd_d21 * 24 / 1000 * occupancyFactor * summerBoostFactor * latentLoadFactor_i122;
            }
        } else {
            if (summerBoostRawValue === 'None' || summerBoostRawValue === '') {
                ventEnergyCoolingIncoming_d122 = baseConstant * ventilationRateLs_d120 * cdd_d21 * 24 / 1000 * latentLoadFactor_i122;
            } else {
                ventEnergyCoolingIncoming_d122 = baseConstant * ventilationRateLs_d120 * cdd_d21 * 24 / 1000 * summerBoostFactor * latentLoadFactor_i122;
            }
        }
        
        const ventEnergyRecovered_d123 = ventEnergyCoolingIncoming_d122 * sre_d118;

        // console.log(`  Calculated: d_122 (Incoming)=${ventEnergyCoolingIncoming_d122.toFixed(2)}, d_123 (Recovered)=${ventEnergyRecovered_d123.toFixed(2)}`); // REMOVE Log
        // console.log("=============================================="); // REMOVE Log

        // Update StateManager (single source of truth) and DOM
        setCalculatedValue('i_122', latentLoadFactor_i122, 'percent-0dp'); // Display LLF
        setCalculatedValue('d_122', ventEnergyCoolingIncoming_d122, 'number-2dp-comma');
        setCalculatedValue('d_123', ventEnergyRecovered_d123, 'number-2dp-comma'); 
        
        // Return raw values for potential use by calling functions
        return {
            incoming: ventEnergyCoolingIncoming_d122,
            recovered: ventEnergyRecovered_d123
        };
    }
    
    /**
     * Calculate free cooling capacity and related metrics
     * @param {number|null} [setbackFactorOverride=null] - Optional override for k_120, passed from event listener.
     */
    function calculateFreeCooling() { 
        // Add recursion protection
        if (window.TEUI.sect13.freeCalculationInProgress) {
            // console.warn("[S13 Recursion] Preventing recursive call to calculateFreeCooling. Returning cached:", coolingState.freeCoolingLimit);
            return coolingState.freeCoolingLimit || 0; // Return cached value if already calculating
        }
        window.TEUI.sect13.freeCalculationInProgress = true;
        // LOG START Removed

        let finalFreeCoolingLimit = 0; 
        try { 
            runIntegratedCoolingCalculations(); 
            
            const potentialLimit = calculateFreeCoolingLimit(); // Calculated Sensible Potential (kWh/yr)

            const ventilationMethod = getFieldValue('g_118') || 'Constant'; 
            
            let setbackFactor = 1.0; 
            const setbackValueStr = getFieldValue('k_120'); 
            if (setbackValueStr) {
                const parsedFactor = parseFloat(setbackValueStr);
                if (!isNaN(parsedFactor) && parsedFactor >= 0 && parsedFactor <= 1) {
                    setbackFactor = parsedFactor;
                }
            }
            // LOG FACTORS Removed

            // Determine the final free cooling limit based on ventilation method
            if (ventilationMethod.toLowerCase().includes('constant')) {
                finalFreeCoolingLimit = potentialLimit; 
            } else if (ventilationMethod.toLowerCase().includes('schedule')) {
                finalFreeCoolingLimit = potentialLimit * setbackFactor; 
            } else {
                finalFreeCoolingLimit = potentialLimit; 
            }
            
            // LOG FINAL VALUE Removed

            setCalculatedValue('h_124', finalFreeCoolingLimit, 'number-2dp-comma');
            coolingState.freeCoolingLimit = finalFreeCoolingLimit; 

        } catch (error) {
            console.error("[S13 Error] Error during calculateFreeCooling:", error);
            finalFreeCoolingLimit = 0; 
        } finally {
            window.TEUI.sect13.freeCalculationInProgress = false;
            // LOG END Removed
        }
        return finalFreeCoolingLimit;
    }
    
    /**
     * Calculate all values for this section
     */
    function calculateAll() {
        // Run calculations in a logical dependency order
        calculateCOPValues();           // Sets COP needed for systems
        calculateHeatingSystem();       // Sets d_114, l_113, calls fuel/cooling
        calculateVentilationRates();    // Sets d_120, h_120 etc.
        calculateVentilationEnergy();   // Sets d_121, i_121, m_121
        // Run cooling physics *first* to update coolingState
        runIntegratedCoolingCalculations(); 
        // Now calculate the specific S13 outputs using updated state
        calculateFreeCooling();         // Sets h_124, d_124, m_124 based on coolingState
        calculateCoolingVentilation();  // Sets d_122, d_123, i_122 based on coolingState
        calculateCoolingSystem();       // Sets d_117, l_114, l_116 etc.
        // REMOVED: Let m_129 be calculated only via listeners
        // calculateMitigatedCED();        // Sets m_129 based on latest d_129, h_124, d_123
    }
    
    /**
     * Helper function to get numeric values from any field
     * Handles commas and parsing
     */
    function getNumericValue(fieldId) {
        const value = getFieldValue(fieldId);
        
        // Handle string values (with comma removal)
        if (typeof value === 'string') {
            return parseFloat(value.replace(/,/g, '')) || 0;
        }
        // Handle number values directly
        else if (typeof value === 'number') {
            return value;
        }
        // Default fallback
        return 0;
    }
    
    /**
     * Safely retrieves the field value from StateManager or the DOM element.
     * Prefers StateManager for reliability.
     * @param {string} fieldId - The ID of the field to retrieve.
     * @returns {string|number|null} The value of the field, or null if not found.
     */
    function getFieldValue(fieldId) {
        if (window.TEUI && window.TEUI.StateManager) {
            const value = window.TEUI.StateManager.getValue(fieldId);
            // Return the value directly if it exists and is not null/undefined
            if (value !== undefined && value !== null) {
                return value;
            }
        }
        // If value not in StateManager, return empty string or default
        // console.warn(`getFieldValue: Value for ${fieldId} not found in StateManager.`);
        return ""; // Return empty string if not found in state
    }
    
    /**
     * Sets a calculated value in the StateManager and updates the corresponding DOM element.
     * Ensures the raw numeric value is stored in StateManager and the formatted
     * value is displayed in the DOM, according to the global formatting function.
     * @param {string} fieldId - The ID of the field to update.
     * @param {number} rawValue - The raw calculated numeric value.
     * @param {string} [formatType='number-2dp'] - The format type string (e.g., 'number-2dp', 'currency', 'percent-0dp', 'integer') passed to window.TEUI.formatNumber.
     */
    function setCalculatedValue(fieldId, rawValue, formatType = 'number-2dp') {
        // console.log(`[Debug S13] setCalculatedValue called for ${fieldId} with rawValue: ${rawValue}, formatType: ${formatType}`); // REMOVE Log 7
        try {
            const element = document.querySelector(`[data-field-id="${fieldId}"]`);
        // Handle non-numeric or invalid rawValues gracefully
        if (rawValue === null || rawValue === undefined || isNaN(Number(rawValue))) {
            const displayValue = "N/A"; // Or '0.00' or '--' depending on desired display
                if (window.TEUI.StateManager) { window.TEUI.StateManager.setValue(fieldId, displayValue, 'calculated'); }
                // const elementNA = document.querySelector(`[data-field-id="${fieldId}"]`); // Use element declared above
                if (element) {
                    element.textContent = displayValue;
                    element.classList.remove('negative-value'); // Ensure no negative styling
            }
            return; 
        }

        const numericValue = Number(rawValue);
        const formattedValue = window.TEUI.formatNumber(numericValue, formatType);

        // Store raw value as string in StateManager for precision and consistency
            // Note: Added check to prevent unnecessary state updates & listener triggers
            if (window.TEUI.StateManager) {
                 // Store raw value as string to preserve precision and avoid floating point issues
                 // Check if state value is different before setting to avoid unnecessary listener triggers
                 const currentStateValue = window.TEUI.StateManager.getValue(fieldId);
                 const rawValueString = numericValue.toString(); 
                 // REMOVED const currentNumericValue = window.TEUI.parseNumeric(currentStateValue); 
                 
                 // --- Revert to comparing STRINGS --- 
                 if (currentStateValue !== rawValueString) { 
                    // console.log(`[Debug S13] State different for ${fieldId}, setting value: ${rawValueString}`); 
                    window.TEUI.StateManager.setValue(fieldId, rawValueString, 'calculated');
                 } else {
                     // console.log(`[Debug S13] State same for ${fieldId}, skipping StateManager.setValue.`);
                 }
            }
        
        // Update DOM with formatted value
            // REMOVED redundant element declaration: const element = document.querySelector(`[data-field-id="${fieldId}"]`);
        if (element) {
                // Avoid updating if the display value hasn't changed (prevents unnecessary redraws/flicker)
                if (element.textContent !== formattedValue) {
            element.textContent = formattedValue;
                }
            element.classList.toggle('negative-value', numericValue < 0);
            } else {
                 // console.warn(`setCalculatedValue: Element not found for fieldId: ${fieldId}`);
            }
        } catch (error) {
            console.error("Error in setCalculatedValue:", error);
            // Handle any other errors that might occur
        }
    }
    
    /**
     * Format numbers with commas and proper decimals
     */
    function formatNumber(value) {
        if (Math.abs(value) < 0.01 && value !== 0) {
            return value.toFixed(2); // Handle very small numbers
        }
        
        if (Number.isInteger(parseFloat(value))) {
            return parseFloat(value).toLocaleString(undefined, {
                minimumFractionDigits: 0,
                maximumFractionDigits: 0
            }); // Integers with commas, no decimals
        }
        
        return parseFloat(value).toLocaleString(undefined, {
            minimumFractionDigits: 2,
            maximumFractionDigits: 2
        }); // Format with commas and 2 decimal places
    }
    
    /**
     * Calculate Mitigated CED (m_129) - MOVED EARLIER INSIDE IIFE
     */
    function calculateMitigatedCED() {
        const d129 = getNumericValue('d_129'); // Get latest from S14 via StateManager
        // Fetch h_124 using getNumericValue to ensure we get the StateManager value
        const h124 = getNumericValue('h_124'); 
        const d123 = getNumericValue('d_123'); // Get latest d_123
        
        // console.log("=== [S13 DIAG] m_129 Calculation ==="); // Keep commented for now
        // console.log(`  Inputs: d129=${d129.toFixed(2)}, h124(fetched)=${h124.toFixed(2)}, d123=${d123.toFixed(2)}`); 

        const m129 = d129 - h124 - d123;
        // console.log(`  Calculated: m_129=${m129.toFixed(2)}`); 
        setCalculatedValue('m_129', m129, 'number-2dp-comma');
        // console.log("====================================="); 
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
        
        // Section-specific utility functions
        calculateAll: calculateAll,
        calculateHeatingSystem: calculateHeatingSystem,
        calculateCoolingSystem: calculateCoolingSystem,
        calculateVentilationValues: calculateVentilationValues,
        calculateFreeCooling: calculateFreeCooling,
        
        // Exposed for testing and debugging
        getNumericValue: getNumericValue
    };
})();

// Initialize when the section is rendered
document.addEventListener('teui-section-rendered', function(event) {
    if (event.detail?.sectionId === 'mechanicalLoads') { // Correct section ID
        setTimeout(() => window.TEUI.SectionModules.sect13.onSectionRendered(), 100);
    }
});

// Fallback to rendering complete event
document.addEventListener('teui-rendering-complete', function() {
    setTimeout(() => {
        if (document.getElementById('mechanicalLoads')) { // Correct section ID
            window.TEUI.SectionModules.sect13.onSectionRendered();
        }
    }, 300);
});

// Global access point for Section13 functions
window.TEUI.sect13.calculateAll = function() {
    if (window.TEUI.SectionModules.sect13) {
        window.TEUI.SectionModules.sect13.calculateAll();
    }
};

// Integration with Cooling module
document.addEventListener('cooling-calculations-loaded', function() {
    console.log('Cooling Calculations module loaded - initializing integration');
    if (window.TEUI.SectionModules.sect13) {
        // Re-run calculations with cooling data
        window.TEUI.SectionModules.sect13.calculateFreeCooling();
        window.TEUI.SectionModules.sect13.calculateCoolingVentilation();
    }
});

// Helper function to apply/remove disabled styling
function setFieldDisabled(fieldId, isDisabled) {
    const element = document.querySelector(`[data-field-id="${fieldId}"]`);
    // Also target associated labels if needed by adjusting selector or passing label ID
    if (element) {
        // Find the parent TD cell to apply styling more broadly if needed
        const cell = element.closest('td');
        if (cell) {
            cell.classList.toggle('ghost-text', isDisabled);
            // Maybe disable slider interaction directly?
            const slider = cell.querySelector('input[type="range"]');
            if (slider) slider.disabled = isDisabled;
        } else {
            element.classList.toggle('ghost-text', isDisabled);
        }
    } 
    // Could add logic here to find and style the label cell (e.g., the cell with M.1.1 HSPF)
}