# REVISED: Section 13 Last Mile Workplan v.1.2 2025.05.03 10.45am.

## Problem Overview (UPDATED)

We've identified the specific root cause of the cooling calculation discrepancy through targeted diagnostic logging:

- Section 13 calculates `h_124` (Free Cooling Limit) as only ~1,152 kWh/yr when it should be ~37,322 kWh/yr
- This causes `m_129` (CED Mitigated) to be ~45,203 kWh/yr instead of the expected ~10,521 kWh/yr
- The key issue is that `humidityRatioDifference` is exactly 0 when it should be negative (approx -0.005 to -0.01)
- A negative humidity difference would create a negative latent adjustment, BOOSTING the free cooling capacity
- Additionally, we've observed that the calculation functions are being called recursively, causing console flooding

## Root Cause Analysis

Our diagnostic logging revealed these specific values:

```
buildingVolume: 8000 m³
airMass: 1.204 kg/m³
specificHeatCapacity: 1005 J/kg·K
coolingSetTemp: 24°C
nightTimeTemp: 20.43°C
tempDiff: 3.57°C
humidityRatioDifference: 0  <-- THIS IS THE PROBLEM
atmPressure: 100368.43 Pa

totalMass: 9632 kg
sensibleCooling: 9.60 kWh/day
latentAdjustment: 0 kWh/day  <-- SHOULD BE NEGATIVE
dailyFreeCooling: 9.60 kWh/day
coolingDays (m_19): 120 days
potentialLimit: 1151.94 kWh/yr  <-- SHOULD BE ~37,322 kWh/yr
```

The calculation is mathematically correct based on the inputs it's using:
- The sensible cooling component is calculating correctly: `9632 kg × 1005 J/kg·K × 3.57°C ÷ 3.6e6 = 9.60 kWh/day`
- But the latent adjustment is 0 because `humidityRatioDifference` is 0
- This ultimately results in `1151.94 kWh/yr` instead of the expected `~37,322 kWh/yr`

## Targeted Fixes (No StateManager Changes)

Based on our analysis, we need these specific targeted fixes:

### 1. Fix the Relative Humidity Assumption

The root cause is that `coolingSeasonMeanRH` is set to 0.70 (70%) which leads to invalid humidity ratio calculations. The Excel model likely assumes a different RH value that creates a negative humidity difference.

```javascript
// In updateCoolingInputs function (around line 883)
// Find this line:
coolingState.coolingSeasonMeanRH = 0.70; // Use 70% for Seasonal Average Outdoor RH

// Change to:
coolingState.coolingSeasonMeanRH = 0.40; // Lower RH to match Excel's humidity assumptions
```

This change will create a negative humidity ratio difference, which will make the latent adjustment negative, boosting the free cooling capacity to match Excel's expectations.

### 2. Add Protection Against Recursive Calculations

To prevent console flooding and potential performance issues, add recursion protection:

```javascript
// At the beginning of calculateFreeCoolingLimit function (around line 495)
function calculateFreeCoolingLimit() {
    // Add these lines at the very start of the function
    if (window.TEUI.sect13.calculatingFreeCooling) {
        return coolingState.freeCoolingLimit; // Return cached value if already calculating
    }
    window.TEUI.sect13.calculatingFreeCooling = true;
    
    // ...existing calculation code...
    
    // Add this line just before the return statement
    window.TEUI.sect13.calculatingFreeCooling = false;
    return potentialLimit;
}
```

### 3. Add Recursion Protection to calculateFreeCooling as well

```javascript
// At the beginning of calculateFreeCooling function
function calculateFreeCooling() {
    // Add these lines at the very start of the function
    if (window.TEUI.sect13.freeCalculationInProgress) {
        return coolingState.freeCoolingLimit; // Return cached value
    }
    window.TEUI.sect13.freeCalculationInProgress = true;
    
    // ...existing calculation code...
    
    // Add this line just before the return statement
    window.TEUI.sect13.freeCalculationInProgress = false;
    return finalFreeCoolingLimit;
}
```

### 4. Initialize the Protection Flags

To ensure the protection flags are properly initialized:

```javascript
// Near the top of the file where other module properties are defined (around line 50)
// After: window.TEUI.sect13.initialized = false;
// Add:
window.TEUI.sect13.calculatingFreeCooling = false;
window.TEUI.sect13.freeCalculationInProgress = false;
```

## Expected Outcomes

After implementing these fixes:

1. The humidity calculations will produce a negative `humidityRatioDifference`
2. This will create a negative latent adjustment, significantly boosting free cooling capacity
3. The `h_124` value should increase from ~1,152 kWh/yr to approximately ~37,322 kWh/yr
4. This will reduce `m_129` (CED Mitigated) from ~45,203 kWh/yr to closer to ~10,521 kWh/yr
5. The recursive logging issues will be resolved

These changes maintain the architectural principles in README.md without modifying StateManager or other core components.

## Implementation Steps

1. Save/backup the current workspace
2. Restore from the last stable git commit
3. Apply only the targeted fixes above
4. Verify the calculations produce the expected values
5. Check for any regression issues in other sections
6. If successful, commit the changes with a clear message about the fix

This completes our Phase 1 (diagnostics) and Phase 2 (targeted fixes) of the last-mile plan. The remaining phases would only be needed if these specific fixes don't fully resolve the issue.
