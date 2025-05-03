# COOLING CALCULATION TROUBLESHOOTING

For AI Agents, !IMPORTANT: If you do not agree with or understand the INSTRUCTIONS below, kindly ASK the human agent to furnish additional detail from the available documentation or Excel codebase, before inventing new methods, this project requires structural compliance with regulator-approved methods and expects 100% parity with excel methods and final values from default data

## Problem Summary

The TEUI 4.011 application is calculating cooling-related values incorrectly compared to the Excel model:

- Target value for `m_129` (CED Mitigated) should be approximately **10,521.50 kWh/yr**
- Current app calculates **43,959.01 kWh/yr** (over 4x higher)
- Other cooling-related values like `d_122`, `d_123`, `h_124`, etc. are also mismatched

## Architecture Compliance Overview

Before diving into specific calculation issues, it's essential to note that all solutions must adhere strictly to the architecture outlined in the README.md, particularly:

1. **StateManager as Single Source of Truth**: All changes to values must go through StateManager using proper state types ('calculated', 'user-modified', etc.)
2. **Cross-Section Communication**: Sections must communicate via StateManager listeners rather than direct function calls
3. **Proper Dependency Registration**: Dependencies must be registered with StateManager to ensure calculations update correctly
4. **Calculation Function Pattern**: Functions should read from StateManager, perform calculations, and update via standard helpers
5. **Calculated Value Propagation**: `setValue(..., 'calculated')` requires explicit listeners for cross-section updates

## Key Findings

After analyzing the JavaScript implementation in `4011-Section13.js` and comparing it with the Excel formulas in `COOLING-TARGET.csv`, I've identified several critical issues:

### 1. Formula Discrepancy for `m_129` (CED Mitigated)

In the Excel formula, `m_129` is defined as:
```
=D129-H124-D123  
```

Where:
- `D129` is the CED Cooling Load Unmitigated
- `H124` is the Free Cooling Limit
- `D123` is the Outgoing Cooling Season Ventil. Energy (recovered energy)

Looking at the JavaScript implementation in Section 14 (`4011-Section14.js`):

```javascript
// m_129: CED Mitigated (kWh/yr) = D129-H124-D123 (Moved from l_128)
const cedMitigated_m129 = cedCoolingUnmitigated_d129 - h124 - d123;
setCalculatedValue('m_129', cedMitigated_m129);
```

The formula appears correct, but the input values are wrong:

### 2. Value Discrepancies in Input Values

#### a) `d_129` (CED Unmitigated) Calculation

Excel formula: 
```
=K71+K79+K98+D122
```

In `4011-Section14.js`:
```javascript
// d_129: CED Unmitigated (kWh/yr) = K71+K79+K98+D122 (Matching Excel formula structure)
const cedCoolingUnmitigated_d129 = k71 + k79 + k98 + d122;
```

The JavaScript correctly follows the formula, but looking at Section 13's calculations:

```javascript
if (coolingSystem_d116 === 'Cooling') {
    // If cooling is active
    ventEnergyCoolingIncoming_d122 = baseConstant * ventilationRateLs_d120 * cdd_d21 * 24 / 1000 * occupancyFactor * latentLoadFactor_i122;
    // Apply summer boost if not "None"
    if (summerBoostFactor !== 1.0) {
        ventEnergyCoolingIncoming_d122 *= summerBoostFactor;
    }
}
```

The calculation for ventEnergyCoolingIncoming_d122 is significantly higher than expected.

#### b) `h_124` (Free Cooling Limit) Calculation

In Section 13:
```javascript
function calculateFreeCooling(setbackFactorOverride = null) { 
    // Get the potential free cooling limit from the integrated calculation
    let potentialFreeCoolingLimit = coolingState.freeCoolingLimit;
    
    // Apply the logic: If method is Constant, use full potential.
    // If scheduled, multiply potential by the setback factor from k_120
    if (ventMethod && ventMethod.includes('Constant')) {
        finalFreeCoolingLimit = potentialFreeCoolingLimit;
    } else { // Assumes 'by Schedule'
        let setbackFactor_k120;
        if (setbackFactorOverride !== null && !isNaN(setbackFactorOverride)) {
             setbackFactor_k120 = setbackFactorOverride;
        } else {
             setbackFactor_k120 = window.TEUI.parseNumeric(getFieldValue('k_120')) || 0.5;
        }
        finalFreeCoolingLimit = potentialFreeCoolingLimit * setbackFactor_k120;
    }
}
```

The free cooling calculation appears to derive from `coolingState.freeCoolingLimit`, which depends on:

```javascript
function calculateFreeCoolingLimit() {
    const totalMass = coolingState.buildingVolume * coolingState.airMass;
    const tempDiff = coolingState.coolingSetTemp - coolingState.nightTimeTemp;
    const sensibleCooling = totalMass * coolingState.specificHeatCapacity * tempDiff / (3.6e6);
    const latentAdjustment = totalMass * coolingState.latentHeatVaporization * hDiff / (3.6e6);
    const dailyFreeCooling = Math.max(0, sensibleCooling - latentAdjustment);
    const coolingDays = window.TEUI.parseNumeric(getFieldValue('m_19')) || 120; 
    const potentialLimit = dailyFreeCooling * coolingDays;
    coolingState.freeCoolingLimit = potentialLimit;
}
```

### 3. Constant and Variable Initialization Issues

Looking at the coolingState initialization:

```javascript
const coolingState = {
    nightTimeTemp: 20.43,                 // Default, updated from d_24
    coolingSeasonMeanRH: 0.5585,          // Default, A4
    latentLoadFactor: 1.0,                // Calculated A6
    groundTemp: 10,                       // A7
    airMass: 1.204,                       // E3
    specificHeatCapacity: 1005,           // E4
    latentHeatVaporization: 2501000,      // E6
    coolingSetTemp: 24,                   // A8 / h_24
    freeCoolingLimit: 0,                  // Calculated A33
    daysActiveCooling: 120,               // Calculated E55, default 120
    buildingVolume: 8000,                 // Default, updated from d_105
    buildingArea: 1427.2,                 // Default, updated from h_15
    coolingDegreeDays: 196,               // Default, updated from d_21
    /* other variables */
};
```

Compared to COOLING-TARGET.csv, some values might be inconsistent.

### 4. Latent Load Factor Calculation

Looking at how `latentLoadFactor` is calculated:

```javascript
function calculateLatentLoadFactor() {
    const hDiff = coolingState.humidityRatioDifference;
    const LHV = coolingState.latentHeatVaporization;
    const Cp = coolingState.specificHeatCapacity;
    const Tdiff = coolingState.nightTimeTemp - coolingState.coolingSetTemp; 

    // Check for division by zero or invalid inputs
    if (Cp === 0 || Tdiff === 0 || isNaN(hDiff) || isNaN(LHV) || isNaN(Cp) || isNaN(Tdiff)) {
        return 1.0; 
    }

    const ratio = (hDiff * LHV) / (Cp * Tdiff);
    const factor = 1 + ratio;
    const finalFactor = Math.max(1.0, factor);
    return finalFactor;
}
```

The COOLING-TARGET.csv shows different formulas for this calculation.

### 5. Humidity Ratio Calculations

The atmospheric calculations may not match Excel exactly:

```javascript
function calculateHumidityRatios() {
    const atmPressure = coolingState.atmPressure || 101325; 
    if ((atmPressure - coolingState.partialPressureIndoor) === 0 || (atmPressure - coolingState.partialPressure) === 0) {
        coolingState.humidityRatioIndoor = 0;
        coolingState.humidityRatioAvg = 0;
        coolingState.humidityRatioDifference = 0;
        return;
    }
    coolingState.humidityRatioIndoor = 0.62198 * coolingState.partialPressureIndoor / (atmPressure - coolingState.partialPressureIndoor);
    coolingState.humidityRatioAvg = 0.62198 * coolingState.partialPressure / (atmPressure - coolingState.partialPressure);
    coolingState.humidityRatioDifference = coolingState.humidityRatioAvg - coolingState.humidityRatioIndoor;
}
```

These calculations are complex and a small difference here can propagate through the entire system.

## Specific Discrepancies in Key Variables (as of 2024-08-02)

| Variable | Excel Value | JS Value (Latest Log) | Status & Notes |
|----------|-------------|-----------------------|----------------|
| `d_122` (Incoming Cooling Ventil. Energy) | ~15,128.68 | ~15,128.68 | **MATCH!** Corrected Latent Load Factor calculation. |
| `d_123` (Outgoing Cooling Ventil. Energy) | ~13,464.53 | ~13,464.53 | **MATCH!** Follows `d_122`. |
| `h_124` (Free Cooling Limit) | ~37,322.82 | ~37,322.83 | **Potential MATCH.** App calculates the correct value including setback, but the value used in the `m_129` calculation seems stale (`41,469.81` was seen in logs). Suggests a timing/propagation issue. |
| `d_129` (CED Unmitigated) | ~61,308.85 | ~60,321.53 | **Close but Differs.** Formula (`k71+k79+k98+d122`) is correct, `d_122` now matches. Difference likely stems from `k71`, `k79`, or `k98` (inputs from Sections 9/10). |
| `m_129` (CED Mitigated) | ~10,521.50 | ~5,415.72 | **Incorrect.** Compound error, primarily due to the incorrect `h_124` value being used in the calculation (`d129 - h124 - d123`). Also affected by the slight `d_129` difference. |

## Architectural Patterns for Cooling Calculations

Based on the README.md guidelines, here's how the cooling calculations should properly integrate with the architecture:

### 1. StateManager-Compliant Calculation Flow

```javascript
// In Section 13 (source section)
function calculateAll() {
    // 1. Get all inputs FROM STATEMANAGER
    const inputs = getCoolingInputsFromStateManager();
    
    // 2. Calculate intermediate values
    const intermediateValues = calculateIntermediateValues(inputs);
    
    // 3. Update calculated values using standard helper
    // This stores values in StateManager AND updates DOM
    setCalculatedValue('i_122', intermediateValues.latentLoadFactor, 'percent-0dp');
    setCalculatedValue('d_122', intermediateValues.ventilationEnergy, 'number-2dp-comma');
    setCalculatedValue('d_123', intermediateValues.recoveredEnergy, 'number-2dp-comma');
    setCalculatedValue('h_124', intermediateValues.freeCoolingLimit, 'number-2dp-comma');
    
    // DO NOT directly calculate Section 14 values here
    // Section 14 will recalculate via StateManager listeners
}
```

### 2. Cross-Section Listener Pattern

```javascript
// In Section 14's initializeEventHandlers
function initializeEventHandlers() {
    if (!window.TEUI.StateManager) return;
    
    // CRITICAL: Listen for changes in calculated fields from Section 13
    window.TEUI.StateManager.addListener('h_124', function(newValue) {
        console.log("Free Cooling Limit (h_124) changed, recalculating m_129");
        // Trigger recalculation in Section 14
        calculateValues();
    });
    
    window.TEUI.StateManager.addListener('d_122', function(newValue) {
        console.log("Ventilation Energy (d_122) changed, recalculating d_129");
        // Trigger recalculation in Section 14
        calculateValues();
    });
    
    window.TEUI.StateManager.addListener('d_123', function(newValue) {
        console.log("Recovered Energy (d_123) changed, recalculating m_129");
        // Trigger recalculation in Section 14
        calculateValues();
    });
}
```

### 3. Correct Section 14's `m_129` Calculation with Architectural Compliance

```javascript
// In 4011-Section14.js
function calculateValues() {
    try {
        // PROPER: Get values via StateManager using global parser
        const d129 = window.TEUI.parseNumeric(getFieldValue('d_129')); // CED Unmitigated
        const h124 = window.TEUI.parseNumeric(getFieldValue('h_124')); // Free Cooling Limit
        const d123 = window.TEUI.parseNumeric(getFieldValue('d_123')); // Outgoing Cooling Ventil. Energy
        
        // Calculate m_129 with proper error handling
        let cedMitigated_m129 = 0;
        if (!isNaN(d129) && !isNaN(h124) && !isNaN(d123)) {
            cedMitigated_m129 = d129 - h124 - d123;
        }
        
        // Debug logging
        console.log(`[S14 Debug] m_129 calculation: d129(${d129}) - h124(${h124}) - d123(${d123}) = ${cedMitigated_m129}`);
        
        // CORRECT: Use standard helper that updates BOTH StateManager AND DOM
        // This triggers 'calculated' state which doesn't auto-propagate to dependents
        setCalculatedValue('m_129', cedMitigated_m129, 'number-2dp-comma');
        
        // Return value for potential use by calling function
        return cedMitigated_m129;
    } catch (error) {
        console.error("Error calculating m_129:", error);
        return 0;
    }
}
```

### 4. Correct Constants in Section 13 (Preserving Numerical Precision)

Ensure all constants match those in COOLING-TARGET.csv while maintaining full numerical precision as required by README.md (Point 6 - Calculation Precision and Significant Digits):

```javascript
// Update coolingState initialization with correct constants
const coolingState = {
    // Use exact values from COOLING-TARGET.csv
    nightTimeTemp: 20.43,                  // A3 in COOLING-TARGET
    coolingSeasonMeanRH: 0.70,             // Seasonal RH (70%)
    airMass: 1.204,                        // E3 in COOLING-TARGET
    specificHeatCapacity: 1005,            // E4 in COOLING-TARGET
    latentHeatVaporization: 2501000,       // E6 in COOLING-TARGET
    
    // CRITICAL: Keep full floating-point precision during calculations
    // Don't truncate or round intermediate values!
    coolingSetTemp: 24,                    // A8 / h_24
    freeCoolingLimit: 0,                   // Will be calculated with full precision
    atmPressure: 101325,                   // E13 in COOLING-TARGET (sea level)
    
    // Additional values with defaults
    buildingVolume: 8000,                  // Will be updated from d_105
    buildingArea: 1427.2,                  // Will be updated from h_15
    coolingDegreeDays: 196,                // Will be updated from d_21
    
    // Initialize calculated properties to avoid undefined errors
    humidityRatioIndoor: 0,
    humidityRatioAvg: 0,
    humidityRatioDifference: 0
};
```

### 5. Fix Ventilation Energy Calculation with Architectural Patterns

```javascript
/**
 * Calculate cooling ventilation values following Excel formula exactly
 * Implements architectural patterns from README.md:
 * - Uses getFieldValue from StateManager
 * - Maintains numerical precision throughout calculation
 * - Updates StateManager as the single source of truth
 */
function calculateCoolingVentilation() {
    // IMPORTANT: First run integrated cooling calculations to ensure state is up-to-date
    // This follows the ordered calculation pattern
    runIntegratedCoolingCalculations();
    
    // Get required inputs FROM STATEMANAGER using proper helper
    const ventilationRateLs_d120 = window.TEUI.parseNumeric(getFieldValue('d_120')) || 0;
    const cdd_d21 = window.TEUI.parseNumeric(getFieldValue('d_21')) || 0;
    
    // Calculate occupancy factor precisely (must match Excel)
    const occupiedHours = window.TEUI.parseNumeric(getFieldValue('i_63')) || 0;
    const totalHours = window.TEUI.parseNumeric(getFieldValue('j_63')) || 8760;
    const occupancyFactor = (totalHours > 0) ? (occupiedHours / totalHours) : 0;
    
    // Get latent load factor from the coolingState
    const latentLoadFactor_i122 = coolingState.latentLoadFactor;
    
    // Get summer boost factor value
    const summerBoostRawValue = getFieldValue('l_119'); // Get raw value (could be "None" or numeric)
    const summerBoostFactor = (summerBoostRawValue === 'None' || summerBoostRawValue === '') ? 
        1.0 : window.TEUI.parseNumeric(summerBoostRawValue) || 1.0;
    
    // CRITICAL: Follow Excel formula structure EXACTLY:
    // (See formula D122 in FORMULAE-3037.csv)
    let ventEnergyCoolingIncoming_d122 = 0;
    const coolingSystem_d116 = getFieldValue('d_116');
    const baseConstant = 1.21; // Matches Excel formula
    
    // Match the Excel formula structure exactly to ensure calculation parity
    if (coolingSystem_d116 === 'Cooling') {
        if (summerBoostRawValue === 'None') {
            ventEnergyCoolingIncoming_d122 = baseConstant * ventilationRateLs_d120 * cdd_d21 * 24 / 1000 * 
                (occupiedHours / totalHours) * latentLoadFactor_i122;
        } else {
            ventEnergyCoolingIncoming_d122 = baseConstant * ventilationRateLs_d120 * cdd_d21 * 24 / 1000 * 
                (occupiedHours / totalHours) * summerBoostFactor * latentLoadFactor_i122;
        }
    } else {
        if (summerBoostRawValue === 'None') {
            ventEnergyCoolingIncoming_d122 = baseConstant * ventilationRateLs_d120 * cdd_d21 * 24 / 1000 * 
                latentLoadFactor_i122;
        } else {
            ventEnergyCoolingIncoming_d122 = baseConstant * ventilationRateLs_d120 * cdd_d21 * 24 / 1000 * 
                summerBoostFactor * latentLoadFactor_i122;
        }
    }
    
    // DEBUG CRITICAL VALUES
    console.log(`[S13 Calculation] d_122 components:
        ventRate: ${ventilationRateLs_d120}
        CDD: ${cdd_d21}
        occFactor: ${occupancyFactor}
        LLF: ${latentLoadFactor_i122}
        boost: ${summerBoostFactor}
        Calculated: ${ventEnergyCoolingIncoming_d122}`);
    
    // Update StateManager (single source of truth) and DOM
    setCalculatedValue('i_122', latentLoadFactor_i122, 'percent-0dp');
    setCalculatedValue('d_122', ventEnergyCoolingIncoming_d122, 'number-2dp-comma');
    
    // Calculate Outgoing Energy (d_123) = Recovery Efficiency × Incoming Energy
    // This is recovery, not loss - matches Excel formula =D118*D122
    const sre_d118 = window.TEUI.parseNumeric(getFieldValue('d_118')) / 100; // Convert % to fraction
    const ventEnergyRecovered_d123 = ventEnergyCoolingIncoming_d122 * sre_d118;
    setCalculatedValue('d_123', ventEnergyRecovered_d123, 'number-2dp-comma');
    
    // Return raw values for potential use by calling functions
    return {
        incoming: ventEnergyCoolingIncoming_d122,
        recovered: ventEnergyRecovered_d123
    };
}
```

### 6. Proper Cross-Section Integration Following README.md

The issue may be in how data flows between sections. From README.md (point 3 under "REQUIRED: StateManager Implementation Pattern for Cross-Section Functions"):

> "CRITICAL NUANCE: Updates Triggered by CALCULATED Fields": `StateManager.setValue(..., 'calculated')` *intentionally does not* automatically trigger recalculations in dependent fields that were registered using `registerDependency`.

Here's the proper implementation:

```javascript
// In Section 14's initializeEventHandlers()
function initializeEventHandlers() {
    if (!window.TEUI || !window.TEUI.StateManager) {
        console.warn("StateManager not available for TEDI/TELI dependency registration");
        return;
    }
    
    // REQUIRED PATTERN FROM README.md:
    // 1. Add listeners for calculated values from other sections
    window.TEUI.StateManager.addListener('d_122', function(newValue) {
        console.log(`Listener triggered for d_122 in Section 14: ${newValue}`);
        // Trigger recalculation that depends on this value
        calculateValues();
    });
    
    window.TEUI.StateManager.addListener('h_124', function(newValue) {
        console.log(`Listener triggered for h_124 in Section 14: ${newValue}`);
        // Trigger recalculation that depends on this value
        calculateValues();
    });
    
    window.TEUI.StateManager.addListener('d_123', function(newValue) {
        console.log(`Listener triggered for d_123 in Section 14: ${newValue}`);
        // Trigger recalculation that depends on this value
        calculateValues();
    });
    
    // 2. Register regular dependencies for user-modified fields
    const sm = window.TEUI.StateManager;
    sm.registerDependency('d_129', 'm_129'); // CED Unmitigated affects CED Mitigated
    sm.registerDependency('h_124', 'm_129'); // Free Cooling affects CED Mitigated
    sm.registerDependency('d_123', 'm_129'); // Ventilation Recovery affects CED Mitigated
}
```

Similarly, ensure proper communication from Section 14 back to Section 13:

```javascript
// In Section 13's initializeEventHandlers()
function initializeEventHandlers() {
    if (!window.TEUI || !window.TEUI.StateManager) return;
    
    // Listen for changes in cooling-related values from Section 14
    window.TEUI.StateManager.addListener('m_129', function(newValue) {
        console.log(`CED Mitigated (m_129) changed to ${newValue}, updating coolingState`);
        // Update the local state for cooling calculations
        coolingState.coolingLoad = window.TEUI.parseNumeric(newValue);
        // Recalculate days of active cooling 
        calculateDaysActiveCooling();
        // Update any dependent values in this section
        setCalculatedValue('m_124', coolingState.daysActiveCooling, 'integer');
    });
}
```

### 7. Free Cooling Calculation with Architectural Compliance

The free cooling calculation is crucial and must be implemented to match Excel while following architectural patterns:

```javascript
/**
 * Calculate the free cooling limit in accordance with architectural patterns:
 * - Read inputs from StateManager
 * - Maintain full precision in calculations
 * - Update values through setCalculatedValue helper
 * @param {number|null} [setbackFactorOverride=null] - Optional override for k_120
 */
function calculateFreeCooling(setbackFactorOverride = null) {
    console.log("==== FREE COOLING CALCULATION ====");
    
    // 1. Get all inputs FROM STATEMANAGER
    updateCoolingInputs(); // Updates coolingState from StateManager
    
    // Log inputs for debugging
    console.log("Initial Values from StateManager:");
    console.log(`  buildingVolume: ${coolingState.buildingVolume}`);
    console.log(`  airMass: ${coolingState.airMass}`);
    console.log(`  specificHeatCapacity: ${coolingState.specificHeatCapacity}`);
    console.log(`  coolingSetTemp: ${coolingState.coolingSetTemp}`);
    console.log(`  nightTimeTemp: ${coolingState.nightTimeTemp}`);
    
    // 2. Calculate humidity and atmospheric values
    calculateAtmosphericValues();
    calculateHumidityRatios();
    console.log(`  humidityRatioDifference: ${coolingState.humidityRatioDifference}`);
    
    // 3. Calculate the free cooling limit with full precision (matching Excel)
    const totalMass = coolingState.buildingVolume * coolingState.airMass;
    console.log(`  totalMass: ${totalMass}`);
    
    const tempDiff = coolingState.coolingSetTemp - coolingState.nightTimeTemp;
    console.log(`  tempDiff: ${tempDiff}`);
    
    // Follow Excel calculation exactly, in the same order
    const sensibleCooling = totalMass * coolingState.specificHeatCapacity * tempDiff / (3.6e6); // Convert J to kWh
    const latentAdjustment = totalMass * coolingState.latentHeatVaporization * coolingState.humidityRatioDifference / (3.6e6);
    const dailyFreeCooling = Math.max(0, sensibleCooling - latentAdjustment);
    console.log(`  sensibleCooling_kWh/d: ${sensibleCooling}`);
    console.log(`  latentAdjustment_kWh/d: ${latentAdjustment}`);
    console.log(`  dailyFreeCooling_kWh/d: ${dailyFreeCooling}`);
    
    // Get cooling days with proper fallback
    const coolingDays = window.TEUI.parseNumeric(getFieldValue('m_19')) || 120;
    console.log(`  coolingDays: ${coolingDays}`);
    
    // Calculate potential limit (full days of free cooling)
    const potentialFreeCoolingLimit = dailyFreeCooling * coolingDays;
    console.log(`  potentialFreeCoolingLimit: ${potentialFreeCoolingLimit}`);
    
    // Apply ventilation method adjustment (based on README.md formula H124)
    let finalFreeCoolingLimit = 0;
    const ventMethod = getFieldValue('g_118') || 'Volume Constant';
    
    // IMPORTANT: Excel formula from README: 
    // =IF(ISNUMBER(SEARCH("Constant", G118)), 'COOLING-TARGET'!A33*M19, ('COOLING-TARGET'!A33*M19)*K120)
    if (ventMethod && ventMethod.includes('Constant')) {
        finalFreeCoolingLimit = potentialFreeCoolingLimit;
        console.log(`  Using constant method, finalFreeCoolingLimit = ${finalFreeCoolingLimit}`);
    } else {
        // For scheduled methods, apply the setback percentage from k_120
        let setbackFactor = 0.9; // Default 90%
        
        if (setbackFactorOverride !== null && !isNaN(setbackFactorOverride)) {
            setbackFactor = setbackFactorOverride;
            console.log(`  Using setbackFactor override: ${setbackFactor}`);
        } else {
            // Read from StateManager (k_120 value is stored as 0-1 decimal, not percentage)
            setbackFactor = window.TEUI.parseNumeric(getFieldValue('k_120')) || 0.9;
            console.log(`  Using setbackFactor from StateManager (k_120): ${setbackFactor}`);
        }
        
        finalFreeCoolingLimit = potentialFreeCoolingLimit * setbackFactor;
        console.log(`  Using scheduled method × setback: ${potentialFreeCoolingLimit} × ${setbackFactor} = ${finalFreeCoolingLimit}`);
    }
    
    // 4. Update StateManager with calculated value
    // Use standard helper to update StateManager AND DOM in one step
    setCalculatedValue('h_124', finalFreeCoolingLimit, 'number-2dp-comma');
    
    // 5. Calculate Percentage Display for d_124
    const coolingLoadUnmitigated = window.TEUI.parseNumeric(getFieldValue('d_129')) || 0;
    let percentFreeCooling = 0;
    if (coolingLoadUnmitigated > 0) {
        percentFreeCooling = finalFreeCoolingLimit / coolingLoadUnmitigated;
    }
    setCalculatedValue('d_124', percentFreeCooling, 'percent-0dp');
    
    // 6. Store for internal use by other functions like calculateDaysActiveCooling
    coolingState.freeCoolingLimit = finalFreeCoolingLimit;
    
    // Calculate days of active cooling based on updated values
    calculateDaysActiveCooling();
    setCalculatedValue('m_124', coolingState.daysActiveCooling, 'integer');
    
    console.log(`Final values: freeCoolingLimit (h_124): ${finalFreeCoolingLimit}, daysActiveCooling (m_124): ${coolingState.daysActiveCooling}`);
    console.log("====================================");
    
    // Return calculated value for potential use by calling functions
    return finalFreeCoolingLimit;
}
```

### 8. Timing Analysis and Race Conditions

Race conditions in TEUI are particularly problematic between Sections 13 and 14. According to the README's ordering section:

```
// First, Section 13 calculates cooling values
1. Section13.calculateFreeCooling() → sets h_124
2. Section13.calculateCoolingVentilation() → sets d_122, d_123
3. StateManager triggers listeners in Section 14
4. Section14.calculateValues() → calculates d_129, m_129 
5. StateManager triggers listeners back in Section 13
```

Potential race conditions:
1. If h_124 isn't set before d_129 is calculated
2. If Section 14 calculates m_129 before all Section 13 values are ready
3. If multiple listeners trigger simultaneous recalculations

**Resolution Strategy**:
- Ensure Section 13 registers all its calculations *before* Section 14 initializes
- Use a central `TEUI.Calculator.calculateAll()` that respects dependency order
- Add trace logging of calculation order in StateManager's setValue method

## 9. Dependency Flow Diagram

```
SECTION 13 (Mechanical Loads)            │ SECTION 14 (TEDI & TELI)
                                         │
┌───────────────────────────┐           │ ┌───────────────────────────┐
│ coolingState               │           │ │                           │
│  nightTimeTemp             │           │ │  k_71, k_79 (Internal Gains)
│  coolingSeasonMeanRH       │           │ │       │                   │
└───────────┬───────────────┘           │ │       ▼                   │
            │                           │ │  ┌────────────┐           │
            ▼                           │ │  │   d_129    │ CED Unmitigated
┌───────────────────────────┐           │ │  │ (Calculate)│◄────────┐ │
│calculateLatentLoadFactor()│           │ │  └────┬───────┘         │ │
└───────────┬───────────────┘           │ │       │                 │ │
            │                           │ │       │                 │ │
            ▼                           │ │       │                 │ │
┌───────────────────────────┐           │ │       │                 │ │
│  i_122 (Latent Load Factor)│           │ │       │                 │ │
└───────────┬───────────────┘           │ │       │                 │ │
            │                           │ │       │                 │ │
            ▼                           │ │       │                 │ │
┌───────────────────────────┐           │ │       │                 │ │
│calculateCoolingVentilation()│          │ │       │                 │ │
└───────────┬──────┬────────┘           │ │       │                 │ │
            │      │                    │ │       │                 │ │
            ▼      ▼                    │ │       │                 │ │
┌───────────────┐ ┌───────────────┐     │ │       │                 │ │
│    d_122      │ │     d_123     │     │ │       │                 │ │
│(Vent. Energy) │ │ (Vent. Recovery)│    │ │       │                 │ │
└───────┬───────┘ └───────┬───────┘     │ │       │                 │ │
        │                 │             │ │       │                 │ │
        │                 │             │ │       │                 │ │
        └────────────────┼─────────────────────►─┘                 │ │
                         │             │ │                         │ │
┌───────────────────────────┐          │ │                         │ │
│  calculateFreeCooling()   │          │ │                         │ │
└───────────┬───────────────┘          │ │                         │ │
            │                          │ │                         │ │
            ▼                          │ │                         │ │
┌───────────────────────────┐          │ │                         │ │
│  h_124 (Free Cooling Limit)│──────────────────────────────────►──┘ │
└───────────────────────────┘          │ │                           │
                                       │ │                           │
                                       │ │    ┌────────────┐         │
                                       │ │    │   m_129    │         │
                                       │ │    │ (Calculate)│         │
                                       │ │    └────┬───────┘         │
                                       │ │         │                 │
                                       │ │         │                 │
                                       │ │         │                 │
┌───────────────────────────┐          │ │         │                 │
│ calculateDaysActiveCooling()│◄────────────────────┘                 │
└───────────┬───────────────┘          │ │                           │
            │                          │ │                           │
            ▼                          │ │                           │
┌───────────────────────────┐          │ │                           │
│  m_124 (Days Active Cooling)│         │ │                           │
└───────────────────────────┘          │ └───────────────────────────┘
```

## 11. Step-wise Implementation Strategy

Rather than tearing everything out and refactoring from scratch (which would be high-risk), I recommend a step-wise integration approach that preserves stability while methodically addressing the issues:

### Phase 1: Diagnostic Instrumentation (Days 1-2)

1. **Step 1.1: Add Non-Invasive Logging**
   - Add comprehensive logging around key values without changing calculation logic:
   ```javascript
   // In Section 13's calculateCoolingVentilation
   console.log("=== Cooling Ventilation Diagnostics ===");
   console.log(`d_120 (Ventilation Rate): ${ventilationRateLs_d120}`);
   console.log(`i_122 (Latent Load Factor): ${latentLoadFactor_i122}`);
   console.log(`d_122 (Incoming Energy) Calculated: ${ventEnergyCoolingIncoming_d122}`);
   console.log(`d_123 (Outgoing Energy) Calculated: ${ventEnergyRecovered_d123}`);
   
   // In calculateFreeCooling
   console.log("=== Free Cooling Diagnostics ===");
   console.log(`potentialFreeCoolingLimit: ${potentialFreeCoolingLimit}`);
   console.log(`finalFreeCoolingLimit (h_124): ${finalFreeCoolingLimit}`);
   
   // In Section 14
   console.log("=== Section 14 Calculation Diagnostics ===");
   console.log(`d_129 inputs: k_71=${k71}, k_79=${k79}, k_98=${k98}, d_122=${d122}`);
   console.log(`d_129 (Unmitigated): ${cedCoolingUnmitigated_d129}`);
   console.log(`m_129 inputs: d_129=${d129}, h_124=${h124}, d_123=${d123}`);
   console.log(`m_129 (Mitigated): ${cedMitigated_m129}`);
   ```

2. **Step 1.2: Test and Create Value Comparison**
   - Create a table of current vs. target values from Excel
   - Run the app and collect all logged values
   - Identify specific calculations with largest discrepancies
   - Take screenshots of the console at each calculation step

**TEST**: Verify you can collect comprehensive diagnostics without disrupting existing functionality.

### Phase 2: Constants & Core Calculations (Days 3-4)

1. **Step 2.1: Update Physical Constants**
   - Update `coolingState` with correct constants from COOLING-TARGET.csv
   - Only change constant values, not calculation logic yet
   ```javascript
   const coolingState = {
       nightTimeTemp: 20.43,                  // Match Excel A3
       coolingSeasonMeanRH: 0.70,             // 70% per requirements
       airMass: 1.204,                        // Match Excel E3
       specificHeatCapacity: 1005,            // Match Excel E4
       latentHeatVaporization: 2501000,       // Match Excel E6
       // Other values unchanged
   };
   ```

2. **Step 2.2: Fix Atmospheric Calculations**
   - Update the A50 temperature calculation to match Excel
   - Correct the humidity ratio calculations
   - Don't modify any other functions yet

**TEST**: Run the app, log values, and verify constants match Excel and atmospheric calculations produce expected intermediate values.

### Phase 3: Ventilation Energy Calculations (Days 5-6)

1. **Step 3.1: Update d_122 Calculation**
   - Refactor `calculateCoolingVentilation()` to match Excel formula:
   ```javascript
   function calculateCoolingVentilation() {
       // Get required inputs 
       const inputs = getCoolingInputsFromStateManager();
       
       // EXACT Excel formula implementation
       let ventEnergyCoolingIncoming_d122 = 0;
       // Four conditional branches matching Excel exactly
       if (inputs.coolingSystem === 'Cooling') {
           if (inputs.summerBoost === 'None') {
               ventEnergyCoolingIncoming_d122 = 1.21 * inputs.ventilationRate * inputs.cdd * 24 / 1000 * inputs.occupancyFactor * inputs.latentLoadFactor;
           } else {
               // Summer boost branch...
           }
       } else {
           // Non-cooling branches...
       }
       
       // Update StateManager
       setCalculatedValue('d_122', ventEnergyCoolingIncoming_d122);
       
       // Rest of function unchanged for now
   }
   ```

2. **Step 3.2: Update d_123 Calculation**
   - Ensure d_123 reflects the correct formula (recovered energy)
   ```javascript
   const ventEnergyRecovered_d123 = ventEnergyCoolingIncoming_d122 * (sre_d118);
   setCalculatedValue('d_123', ventEnergyRecovered_d123);
   ```

**TEST**: 
- Run the app and verify d_122 and d_123 values match Excel
- Check console logs to compare previous vs. new values
- Confirm StateManager is updated correctly

### Phase 4: Free Cooling Calculations (Days 7-8)

1. **Step 4.1: Update Free Cooling Calculation**
   - Refactor `calculateFreeCooling()` to match Excel formula
   ```javascript
   function calculateFreeCooling() {
       // Full implementation of free cooling as in section 7
       // ...
       
       // Update values using standard helper
       setCalculatedValue('h_124', finalFreeCoolingLimit);
   }
   ```

2. **Step 4.2: Update Debug Logging**
   - Add detailed logging of calculation steps
   - Verify values match Excel at each step
   
**TEST**: 
- Run the app and verify h_124 matches Excel
- Confirm UI displays correct formatted value
- Verify that d_124 (percentage) is also correct

### Phase 5: Cross-Section Integration (Days 9-10)

1. **Step 5.1: Update Section 14 Calculations**
   - Correct the d_129 and m_129 calculations
   ```javascript
   // In Section 14's calculateValues
   const d129 = window.TEUI.parseNumeric(getFieldValue('d_129'));
   const h124 = window.TEUI.parseNumeric(getFieldValue('h_124')); 
   const d123 = window.TEUI.parseNumeric(getFieldValue('d_123'));
   
   const cedMitigated_m129 = d129 - h124 - d123;
   setCalculatedValue('m_129', cedMitigated_m129);
   ```

2. **Step 5.2: Add Proper Listeners**
   - Implement StateManager listeners in both sections
   ```javascript
   // In Section 14's initializeEventHandlers
   window.TEUI.StateManager.addListener('h_124', function(newValue) {
       console.log(`h_124 listener triggered in Section 14 with ${newValue}`);
       calculateValues();
   });
   
   // Similar listeners for d_122, d_123
   ```

**TEST**:
- Run the app and trigger recalculations
- Verify all values update properly when inputs change
- Confirm final m_129 value matches Excel target (10,521.50)

### Phase 6: Final Integration & Cleanup (Days 11-12)

1. **Step 6.1: Remove Diagnostic Logging**
   - Remove or comment out excessive logging added for debugging
   - Keep only essential logs for production monitoring

2. **Step 6.2: Review State Updates**
   - Ensure all values use appropriate state types:
   ```javascript
   // For calculated values
   window.TEUI.StateManager.setValue(fieldId, rawValue.toString(), 'calculated');
   
   // For user inputs
   window.TEUI.StateManager.setValue(fieldId, value, 'user-modified');
   ```

3. **Step 6.3: Final Integration Testing**
   - Test all cooling-related workflow paths
   - Verify performance under various conditions
   - Confirm all Excel values match within expected tolerance

**TEST**:
- Run complete end-to-end tests
- Verify correct values and formatting
- Compare with Excel benchmark values

### Implementation Notes

1. **Maintain Stability:**
   - Each phase should produce a working application
   - Implement one change at a time, test, then proceed
   - Use feature flags if needed to disable partial implementations

2. **Comprehensive Testing:**
   - Create a test sheet with Excel values for verification
   - Log intermediate calculation values 
   - Compare before/after values for each change

3. **Rollback Strategy:**
   - Commit changes after each successful phase
   - Document the original values before changes
   - Prepare quick rollback plan if issues arise

4. **Verification Process:**
   - For each implementation step:
     1. Make the specified changes
     2. Run the app and trigger calculations
     3. Verify values match expected Excel values
     4. Check all dependent values update correctly
     5. Document the results before proceeding

5. **Regression Prevention:**
   - Test key workflows after each phase
   - Verify unrelated sections still function properly
   - Ensure system architecture remains compliant with README.md

This step-wise approach maintains system stability while methodically addressing the cooling calculation issues, with clear testing points and verification steps between each phase.
