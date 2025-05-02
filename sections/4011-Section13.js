/**
 * 4011-Section13.js
 * Mechanical Loads (Section 13) module for TEUI Calculator 4.011
 * 
 * This section integrates with 4011-Cooling.js for complex cooling calculations
 * and requires SectionIntegrator and StateManager connections to function properly.
 * 
 * ====================================================================
 * INTERNAL COOLING CALCULATIONS
 * ====================================================================
 * 
 * This section contains integrated logic for calculating key cooling-related factors,
 * replacing the previous dependency on an external Cooling.js module.
 * 
 * 1. Internal State: Uses an internal `coolingState` object to manage inputs,
 *    constants (like Air Mass, Specific Heat Capacity, Latent Heat of Vaporization),
 *    and intermediate/final calculated values.
 * 2. Core Functions: Relies on internal helper functions:
 *    - `updateCoolingInputs`: Fetches required values from StateManager.
 *    - `calculateA50Temp`: Calculates intermediate outdoor temperature for psychrometrics.
 *    - `calculateAtmosphericValues`: Calculates saturation/partial pressures.
 *    - `calculateHumidityRatios`: Calculates indoor/outdoor humidity ratios.
 *    - `calculateLatentLoadFactor`: Calculates the factor used in `i_122`.
 *    - `calculateFreeCoolingLimit`: Calculates potential free cooling (kWh/yr).
 *    - `calculateDaysActiveCooling`: Estimates active cooling days needed.
 *    - `runIntegratedCoolingCalculations`: Orchestrates these internal calculations.
 * 3. Key Outputs Used Internally:
 *    - `coolingState.latentLoadFactor` -> Used for `i_122` calculation.
 *    - `coolingState.freeCoolingLimit` -> Used for `h_124` calculation (conditionally zeroed based on `g_118`).
 *    - `coolingState.daysActiveCooling` -> Used for `m_124` calculation.
 * 4. Execution: `runIntegratedCoolingCalculations` is called within 
 *    `calculateCoolingVentilation` and `calculateFreeCooling` to ensure the 
 *    `coolingState` is up-to-date before relevant fields (`i_122`, `h_124`, `m_124`) are set.
 * 
 * ====================================================================
 * STATEMANAGER DEPENDENCIES
 * ====================================================================
 * 
 * This section has cross-section dependencies managed by StateManager, including:
 * - FROM Section 02: `h_15` (Building area) - Affects cooling calcs & intensity.
 * - FROM Section 03: 
 *    - `d_20` (HDD) - Affects heating ventilation energy.
 *    - `d_21` (CDD) - Affects cooling ventilation energy & internal cooling calcs.
 *    - `h_24` / `l_24` (Cooling Setpoint) - Affects internal cooling calcs.
 *    - `l_22` (Elevation) - Affects atmospheric pressure in internal cooling calcs.
 * - FROM Section 08/09(?): `d_59` (Indoor RH) - Affects internal cooling calcs.
 * - FROM Section 09: `d_63`, `i_63`, `j_63` (Occupants / Schedule) - Affects ventilation rates.
 * - FROM Section 12: `d_105` (Building volume) - Affects ventilation rates & internal cooling calcs.
 * - FROM Section 14: 
 *    - `d_127` (TED) - Affects heating demand.
 *    - `m_129` (CED Mitigated) - Affects cooling system electrical load.
 * 
 * The `registerWithStateManager()` function declares dependencies relevant for 
 * StateManager's change propagation, though not all internal dependencies might be 
 * explicitly listed there if calculations are handled internally via `calculateAll` triggers.
 * 
 * ====================================================================
 * SECTIONINTEGRATOR CONNECTIONS
 * ====================================================================
 * 
 * SectionIntegrator connects this section to others through these mechanisms:
 * 1. Global access point window.TEUI.sect13.calculateAll() is registered
 * 2. Section exposes key calculation functions as public API methods
 * 3. Listens for teui-section-rendered events for initialization timing
 * 
 * IMPORTANT: This section's calculated values affect TEDI values in Section14,
 * creating a bi-directional dependency that requires careful initialization
 * order management through SectionIntegrator.
 * 
 * TEMPLATE FOR SECTION MODULES USING THE CONSOLIDATED DECLARATIVE APPROACH
 * This template demonstrates the preferred pattern for defining sections where
 * field definitions are integrated directly into the layout structure.
 * 
 * IMPORTANT STANDARDS:
 * 1. Column C (row labels) should use this pattern: c: { label: "Row Label Text" }
 *    This is the preferred approach for maximum compatibility with the rendering system.
 *    (Alternative pattern c: { content: "Row Label Text", type: "label" } is supported
 *    but requires special handling in createLayoutRow)
 * 
 * 2. All unit subheaders must be defined as the first row with "header" key.
 * 
 * 3. Rows should be named with their Excel row numbers when possible, or descriptive
 *    IDs that match the CSV pattern.
 *
 * NEWLINES IN SUBHEADER CELLS:
 * To properly display newlines in subheader cells, follow these guidelines:
 * 1. Use the "\n" character in the content string where you want line breaks
 * 2. Add BOTH of these attributes to the cell:
 *    - Add the "section-subheader" class to the cell's classes array
 *    - Add the inline style "white-space: pre-line;" to ensure proper rendering
 * 
 * Example:
 * ```javascript
 * h: { 
 *     content: "Summer Shading\n%", 
 *     classes: ["section-subheader", "align-center"], 
 *     style: "white-space: pre-line;"
 * },
 * ```
 * 
 * The CSS rule `.section-subheader { white-space: pre-line; }` handles the display,
 * but adding the inline style ensures consistency across browsers and prevents styling issues.
 * This approach follows section 04 and 10's implementation, which works correctly.
 *
 * Section Module Template
 * 
 * This template provides a standardized format for creating section modules using the
 * consolidated declarative approach. Follow these guidelines to ensure your section is
 * compatible with the FieldManager and provides a consistent user experience.
 *
 * IMPORTANT STANDARDS:
 * - Unit subheaders should always be the first row
 * - Row labels should follow this pattern: <unit> | <category> | <parameter>
 * - Prefer defining fields as declarative objects where possible
 * - Always match column IDs with Excel column positions (a = column A, b = column B, etc.)
 * - Percentage fields should be formatted with the '%' symbol
 * - Currency fields should be formatted with the appropriate symbol
 *
 * COLUMN PERCENTAGES AND CHECKMARKS:
 * Section08 includes a percentage and checkmark function that allows displaying a percentage
 * in column M based on values from columns D and F, then displaying a checkmark (✓) or X (✗) 
 * in column N based on whether values meet criteria. This functionality should be implemented
 * in other sections as they are refactored. 
 * 
 * Here's a sample implementation for reference:
 * 
 * function calculatePercentagesAndStatus() {
 *     // Calculate percentage (value/limit * 100)
 *     const value = parseFloat(getFieldValue("d_rowId")) || 0;
 *     const limit = parseFloat(getFieldValue("f_rowId")) || 100;
 *     
 *     if (limit > 0) {
 *         const percent = Math.round((value / limit) * 100);
 *         setCalculatedValue("m_rowId", `${percent}%`);
 *         
 *         // Set status - checkmark if under limit, X if over
 *         if (value <= limit) {
 *             setCalculatedValue("n_rowId", "✓");
 *             setElementClass("n_rowId", "checkmark");
 *         } else {
 *             setCalculatedValue("n_rowId", "✗");
 *             setElementClass("n_rowId", "warning");
 *         }
 *     }
 * }
 * 
 * Helper functions needed:
 * - getFieldValue(fieldId): Gets a field's value from StateManager or DOM
 * - setCalculatedValue(fieldId, value): Sets a calculated field value
 * - setElementClass(fieldId, className): Sets appropriate visual classes
 * - CSS styles for .checkmark and .warning classes
 *
 * See Section08 for a complete implementation example.
 *
 * NUMERIC INPUT HANDLING:
 * All numeric inputs should have standardized behavior:
 * 1. Enter key should save the input and exit edit mode (prevent newlines)
 * 2. Numbers should be formatted with thousands separators (commas) after input
 * 3. Decimal values should maintain proper precision (typically 2 decimal places)
 * 
 * Here's the standard implementation to add to each section:
 * 
 * // Prevent newlines and handle Enter key in editable fields
 * field.addEventListener('keydown', function(e) {
 *     if (e.key === 'Enter') {
 *         e.preventDefault(); // Prevent adding a newline
 *         this.blur(); // Remove focus to trigger the blur event
 *     }
 * });
 * 
 * // Format numbers with commas and proper decimals 
 * function formatNumber(value) {
 *     if (Math.abs(value) < 0.01 && value !== 0) {
 *         return value.toFixed(2); // Handle very small numbers
 *     }
 *     
 *     if (Number.isInteger(parseFloat(value))) {
 *         return parseFloat(value).toLocaleString(undefined, {
 *             minimumFractionDigits: 0,
 *             maximumFractionDigits: 0
 *         }); // Integers with commas, no decimals
 *     }
 *     
 *     return parseFloat(value).toLocaleString(undefined, {
 *         minimumFractionDigits: 2,
 *         maximumFractionDigits: 2
 *     }); // Format with commas and 2 decimal places
 * }
 * 
 * // Apply formatting during blur event
 * field.addEventListener('blur', function() {
 *     const fieldId = this.getAttribute('data-field-id');
 *     if (!fieldId) return;
 *     
 *     // Get and clean the value (remove existing commas)
 *     let numValue = this.textContent.trim().replace(/,/g, '');
 *     
 *     // Check if this is a numeric field that should be formatted
 *     if (!isNaN(parseFloat(numValue)) && isFinite(numValue)) {
 *         // Format and display the number
 *         const formattedValue = formatNumber(numValue);
 *         this.textContent = formattedValue;
 *         
 *         // Store the raw value in the state manager
 *         if (window.TEUI?.StateManager?.setValue) {
 *             window.TEUI.StateManager.setValue(fieldId, numValue, 'user-modified');
 *         }
 *     }
 * });
 *
 * DEFAULT VALUE INITIALIZATION AND ENFORCEMENT:
 * ============================================
 * When your section needs to ensure specific default values (especially for dropdowns
 * or calculated fields), follow this balanced pattern that enforces defaults on initialization
 * but respects user changes afterward:
 *
 * 1. REGISTER DEFAULT VALUES WITH APPROPRIATE PRIORITY
 *    Use 'default' state for initial values to avoid overriding user choices:
 *    ```javascript
 *    // In registerWithStateManager()
 *    window.TEUI.StateManager.setValue("fieldId", "defaultValue", 'default');
 *    ```
 *    Only use 'user-modified' for values that must persist regardless of user interaction.
 *
 * 2. IMPLEMENT ONE-TIME INITIALIZATION
 *    Create a function that sets initial values exactly once using flags to track initialization:
 *    ```javascript
 *    function setupValueEnforcement() {
 *        // Create tracker flags
 *        window.TEUI = window.TEUI || {};
 *        window.TEUI.sectXX = window.TEUI.sectXX || {};
 *        window.TEUI.sectXX.initialized = false;
 *        
 *        function initializeDropdownValues() {
 *            // Skip if already initialized
 *            if (window.TEUI.sectXX.initialized) return;
 *            
 *            // Set initial values
 *            const dropdown = document.querySelector('select[data-field-id="fieldId"]');
 *            if (dropdown) {
 *                dropdown.value = "defaultValue";
 *                dropdown.dispatchEvent(new Event('change', { bubbles: true }));
 *            }
 *            
 *            // Mark as initialized
 *            window.TEUI.sectXX.initialized = true;
 *        }
 *        
 *        // Run initialization once
 *        initializeDropdownValues();
 *    }
 *    ```
 *
 * 3. TRACK USER INTERACTIONS
 *    Use event properties to distinguish user changes from programmatic ones:
 *    ```javascript
 *    dropdown.addEventListener('change', function(e) {
 *        // e.isTrusted is true for real user interactions, false for programmatic ones
 *        if (e.isTrusted) {
 *            window.TEUI.sectXX.userInteracted = true;
 *            
 *            // Use 'user-modified' state for user changes to ensure they persist
 *            window.TEUI.StateManager.setValue(fieldId, this.value, 'user-modified');
 *        }
 *        
 *        // Always update calculations
 *        performCalculation();
 *    });
 *    ```
 *
 * 4. CALL INITIALIZATION AT STRATEGIC POINTS
 *    Initialize in:
 *    - onSectionRendered()
 *    - DOMContentLoaded event handler
 *    - teui-section-rendered event handler
 *
 * The key benefit of this approach is balancing automatic initialization with user control.
 * Initial values are enforced during page load, but user changes are respected afterward.
 * This avoids the frustration of dropdowns that revert to default values when users try
 * to change them.
 * 
 * See Section09 (Occupant Internal Gains) for a complete implementation example.
 *
 * TYPE-SAFE VALUE HANDLING:
 * ========================
 * Always use type-safe functions to handle values that might be returned as either 
 * strings or numbers from different sources. This pattern is essential for robust calculations:
 * 
 * ```javascript
 * function getNumericValue(fieldId) {
 *     const value = getFieldValue(fieldId);
 *     // Handle string values (with comma removal)
 *     if (typeof value === 'string') {
 *         return parseFloat(value.replace(/,/g, '')) || 0;
 *     }
 *     // Handle number values directly
 *     else if (typeof value === 'number') {
 *         return value;
 *     }
 *     // Default fallback
 *     return 0;
 * }
 * ```
 * 
 * Always use this helper instead of directly parsing strings with potential formatting.
 * This prevents errors when StateManager returns a number but your code expects a string.
 *
 * CROSS-MODULE FUNCTION ACCESSIBILITY:
 * ==================================
 * Make key functions globally accessible for cross-module use to prevent "function not found" errors:
 * 
 * ```javascript
 * // At the top of your module
 * window.TEUI = window.TEUI || {};
 * window.TEUI.sectXX = window.TEUI.sectXX || {}; // Create section namespace
 * window.TEUI.sectXX.initialized = false; // Track initialization state
 * 
 * // In your DOMContentLoaded handler
 * document.addEventListener('DOMContentLoaded', function() {
 *     // Expose critical functions after module is defined
 *     const module = window.TEUI.SectionModules.sectXX;
 *     window.TEUI.sectXX.calculateSomething = module.calculateSomething;
 *     window.TEUI.sectXX.setupListeners = module.setupListeners;
 * });
 * ```
 * 
 * For functions that might be called from global context, implement safe wrappers with recursion protection:
 * 
 * ```javascript
 * window.globalFunction = function() {
 *     // Prevent infinite recursion
 *     if (window.globalFunctionRunning) {
 *         console.warn("Preventing recursive call");
 *         return;
 *     }
 *     
 *     window.globalFunctionRunning = true;
 *     
 *     try {
 *         // Try multiple paths to find the actual implementation
 *         if (window.TEUI?.SectionModules?.sectXX?.originalFunction) {
 *             window.TEUI.SectionModules.sectXX.originalFunction();
 *         } 
 *         else if (window.TEUI?.sectXX?.originalFunction) {
 *             window.TEUI.sectXX.originalFunction();
 *         }
 *         else {
 *             console.warn("Function not found in any namespace");
 *         }
 *     } catch (e) {
 *         console.error("Error in wrapper:", e);
 *     } finally {
 *         // ALWAYS clear recursion flag regardless of success/failure
 *         window.globalFunctionRunning = false;
 *     }
 * };
 * ```
 *
 * APPROPRIATE COMPLEXITY & DEFENSIVE PROGRAMMING:
 * =============================================
 * While we strive for simplicity, production-grade code often needs defensive measures:
 * 
 * 1. Include multiple safety checks for unpredictable browser environments
 * 2. Implement fallback mechanisms when primary access paths fail
 * 3. Use try/catch blocks to prevent cascading failures
 * 4. Handle race conditions between component loading/initialization
 * 
 * The goal is not to over-engineer but to create robust, resilient code. When issues occur 
 * in browser environments (especially with page refreshes and state persistence), these 
 * defensive patterns make the difference between a frustrating bug and seamless recovery.
 */

// Ensure namespace exists
window.TEUI = window.TEUI || {};
window.TEUI.SectionModules = window.TEUI.SectionModules || {};

// Create section-specific namespace for global references
window.TEUI.sect13 = window.TEUI.sect13 || {};
window.TEUI.sect13.initialized = false;
window.TEUI.sect13.userInteracted = false;

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
        freeCoolingLimit: 0,                  // Calculated A33
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
        // Ensure intermediate values are calculated (now done in runIntegratedCoolingCalculations)
        // calculateAtmosphericValues(); 
        // calculateHumidityRatios();

        const hDiff = coolingState.humidityRatioDifference;
        const LHV = coolingState.latentHeatVaporization;
        const Cp = coolingState.specificHeatCapacity;
        // Use the Tdiff definition from Excel: Outdoor Avg - Indoor Set
        const Tdiff = coolingState.nightTimeTemp - coolingState.coolingSetTemp; 
        // console.log(`[S13 Debug] In calculateLatentLoadFactor - hDiff: ${hDiff}, LHV: ${LHV}, Cp: ${Cp}, Tdiff: ${Tdiff}`); // REMOVED LOG

        // Check for division by zero or invalid inputs
        if (Cp === 0 || Tdiff === 0 || isNaN(hDiff) || isNaN(LHV) || isNaN(Cp) || isNaN(Tdiff)) {
            console.warn("Latent Load Factor: Invalid inputs or division by zero."); 
            return 1.0; 
        }

        const ratio = (hDiff * LHV) / (Cp * Tdiff);
        const factor = 1 + ratio;
        const finalFactor = Math.max(1.0, factor);
        // console.log(`[S13 Debug] Latent Load Factor - Ratio: ${ratio}, Factor: ${factor}, Final (capped): ${finalFactor}`); // REMOVED LOG
        return finalFactor;
    }

    /** [Cooling Calc] Calculate atmospheric values */
    function calculateAtmosphericValues() {
        // Use the calculated A50 temp for outdoor saturation pressure
        const t_outdoor = coolingState.A50_temp; 
        coolingState.pSatAvg = 610.94 * Math.exp(17.625 * t_outdoor / (t_outdoor + 243.04));
        // Use the seasonal average outdoor RH (70%)
        coolingState.partialPressure = coolingState.pSatAvg * coolingState.coolingSeasonMeanRH; 

        const t_indoor = coolingState.coolingSetTemp;
        coolingState.pSatIndoor = 610.94 * Math.exp(17.625 * t_indoor / (t_indoor + 243.04));
        // Get indoor RH from d_59, parse, DIVIDE BY 100, default to 0.45
        const indoorRH_percent = window.TEUI.parseNumeric(getFieldValue('d_59')) || 45;
        const indoorRH = indoorRH_percent / 100;
        coolingState.partialPressureIndoor = coolingState.pSatIndoor * indoorRH; 
        // console.log(`[S13 Debug] Indoor RH raw: ${getFieldValue('d_59')}, Parsed %: ${indoorRH_percent}, Used fraction: ${indoorRH}`); // REMOVED LOG
        
        // console.log(`[S13 Debug] In calculateAtmosphericValues - Outdoor t: ${t_outdoor}, RH: ${coolingState.coolingSeasonMeanRH}, pSatAvg: ${coolingState.pSatAvg}, pPartial: ${coolingState.partialPressure}`); // REMOVED LOG
        // console.log(`[S13 Debug] In calculateAtmosphericValues - Indoor t: ${t_indoor}, RH: ${indoorRH}, pSatIndoor: ${coolingState.pSatIndoor}, pPartialIndoor: ${coolingState.partialPressureIndoor}`); // REMOVED LOG
    }

    /** [Cooling Calc] Calculate humidity ratios */
    function calculateHumidityRatios() {
        // Use elevation-adjusted atmospheric pressure
        const atmPressure = coolingState.atmPressure || 101325; 
        if ((atmPressure - coolingState.partialPressureIndoor) === 0 || (atmPressure - coolingState.partialPressure) === 0) {
            console.warn("Cooling Calc: Division by zero prevented in humidity ratio calculation.");
            coolingState.humidityRatioIndoor = 0;
            coolingState.humidityRatioAvg = 0;
            coolingState.humidityRatioDifference = 0;
            return;
        }
        coolingState.humidityRatioIndoor = 0.62198 * coolingState.partialPressureIndoor / (atmPressure - coolingState.partialPressureIndoor);
        coolingState.humidityRatioAvg = 0.62198 * coolingState.partialPressure / (atmPressure - coolingState.partialPressure);
        coolingState.humidityRatioDifference = coolingState.humidityRatioAvg - coolingState.humidityRatioIndoor;
        // console.log(`[S13 Debug] In calculateHumidityRatios - hRatioIndoor: ${coolingState.humidityRatioIndoor}, hRatioAvg: ${coolingState.humidityRatioAvg}, hDiff: ${coolingState.humidityRatioDifference}`); // REMOVED LOG
    }

    /** [Cooling Calc] Calculate free cooling capacity limit */
    function calculateFreeCoolingLimit() {
        if (coolingState.buildingArea === 0) return 0; // Prevent division by zero
        calculateAtmosphericValues();
        calculateHumidityRatios();
        const totalMass = coolingState.buildingVolume * coolingState.airMass;
        const tempDiff = coolingState.coolingSetTemp - coolingState.nightTimeTemp;
        const sensibleCooling = totalMass * coolingState.specificHeatCapacity * tempDiff / (3.6e6); // Convert J to kWh
        const latentAdjustment = totalMass * coolingState.latentHeatVaporization * coolingState.humidityRatioDifference / (3.6e6); // Convert J to kWh
        const dailyFreeCooling = Math.max(0, sensibleCooling - latentAdjustment);
        
        // Get Cooling Days from m_19, default to 120
        const coolingDays = window.TEUI.parseNumeric(getFieldValue('m_19')) || 120; 

        // Use the cooling days value from m_19 
        coolingState.freeCoolingLimit = dailyFreeCooling * coolingDays; 
        return coolingState.freeCoolingLimit;
    }

    /** [Cooling Calc] Calculate days of active cooling required */
    function calculateDaysActiveCooling() {
        if (coolingState.coolingLoad > 0 && coolingState.freeCoolingLimit >= 0) { 
            const dailyCoolingLoad = coolingState.coolingLoad / 120; 
            if (dailyCoolingLoad > 0) {
                 const daysCovered = coolingState.freeCoolingLimit / dailyCoolingLoad;
                 coolingState.daysActiveCooling = Math.max(0, 120 - daysCovered); // Ensure non-negative
            } else {
                 coolingState.daysActiveCooling = 0; // No load, no active cooling days
            }
        } else {
            coolingState.daysActiveCooling = 0; // No load or negative free cooling -> no active cooling needed beyond passive
        }
        return coolingState.daysActiveCooling;
    }

    /** [Cooling Calc] Calculate wet bulb temperature */
    function calculateWetBulbTemperature() {
        const tdb = coolingState.nightTimeTemp;
        const rh = coolingState.coolingSeasonMeanRH * 100; 
        const twbSimple = tdb - (tdb - (tdb - (100 - rh)/5)) * (0.1 + 0.9 * (rh / 100));
        const twbCorrected = tdb - (tdb - (tdb - (100 - rh) / 5)) * (0.3 + 0.7 * (rh / 100));
        coolingState.wetBulbTemperature = (twbSimple + twbCorrected) / 2;
        return coolingState.wetBulbTemperature;
    }

    /** [Cooling Calc] Calculate the intermediate temperature A50 based on Excel logic */
    function calculateA50Temp() {
        // E60 = Avg Outdoor Temp (nightTimeTemp)
        const E60 = coolingState.nightTimeTemp; // Using the default 20.43
        // A4 = Mean Night-Time RH (0.5585)
        const A4 = 0.5585; 
        // E59 = A4 * 100
        const E59 = A4 * 100;

        // A50 = E60 - (E60 - (E60 - (100 - E59)/5)) * (0.1 + 0.9 * (E59 / 100))
        // Note: This is the first of the two linear equations provided in COOLING-TARGET E64/E65
        const A50 = E60 - (E60 - (E60 - (100 - E59) / 5)) * (0.1 + 0.9 * (E59 / 100));
        
        // Store in coolingState for use in atmospheric calcs
        coolingState.A50_temp = A50;
        // console.log(`[S13 Debug] Calculated A50 Temp: ${A50}`); // REMOVED LOG
        return A50;
    }

    /** [Cooling Calc] Update internal state from external sources */
    function updateCoolingInputs() {
        // Use the globally available parseNumeric function
        const parseNum = window.TEUI?.parseNumeric || function(v) { return parseFloat(v) || 0; }; 
        const getValue = window.TEUI?.StateManager?.getValue || function(id) { return null; };

        // Update state from StateManager
        // TODO: This value should eventually be dynamic, likely from Section 03 weather data
        coolingState.nightTimeTemp = 20.43; // Hardcoded default: Summer Mean Overnight Temp (See COOLING-TARGET.csv A3/A49)
        
        // TODO: This value should eventually be dynamic, likely from Section 03 weather data or user input
        coolingState.coolingSeasonMeanRH = 0.70; // Use 70% for Seasonal Average Outdoor RH (per user clarification)
        
        // Fetch elevation - TODO: Should be dynamic from weather data lookup in Section 03
        const projectElevation = parseNum(getValue('l_22')) || 80; // Read from Sec 03, fallback to 80m
        const seaLevelPressure = 101325; // E13
        coolingState.atmPressure = seaLevelPressure * Math.exp(-projectElevation / 8434); // E15 logic
        // console.log(`[S13 Debug] Updated coolingState.atmPressure: ${coolingState.atmPressure}`); // REMOVED LOG
        // console.log(`[S13 Debug] Updated coolingState.coolingSeasonMeanRH: ${coolingState.coolingSeasonMeanRH}`); // REMOVED LOG

        // Check for user override for cooling setpoint in l_24, otherwise use h_24
        const coolingSetTempOverride_l24 = parseNum(getValue('l_24')); // Check l_24 first
        if (coolingSetTempOverride_l24 && !isNaN(coolingSetTempOverride_l24)) {
            coolingState.coolingSetTemp = coolingSetTempOverride_l24;
        } else {
            coolingState.coolingSetTemp = parseNum(getValue('h_24')) || 24; // Fallback to h_24 or default 24
        }
        
        coolingState.coolingDegreeDays = parseNum(getValue('d_21')) || 196;
        coolingState.buildingVolume = parseNum(getValue('d_105')) || 8000;
        coolingState.buildingArea = parseNum(getValue('h_15')) || 1427.2;
        coolingState.coolingLoad = getNumericValue('l_128'); // Read mitigated cooling load from S14
        coolingState.ventilationMethod = getFieldValue('g_118') || 'Volume Constant'; // Get Vent method

        // Calculate the intermediate A50 temperature needed for atmospheric calcs
        calculateA50Temp();
    }

    /** [Cooling Calc] Run all integrated cooling calculations */
    function runIntegratedCoolingCalculations() {
        updateCoolingInputs(); // Get latest inputs
        coolingState.latentLoadFactor = calculateLatentLoadFactor();
        calculateFreeCoolingLimit(); // Includes atmospheric and humidity ratio calcs
        
        // --- Removed adjustment based on Ventilation Method (Reverted 2024-08-01) ---
        // Let the schedule-adjusted d_120 implicitly affect free cooling calc magnitude.
        /*
        if (coolingState.ventilationMethod && coolingState.ventilationMethod.includes('by Schedule')) {
            console.log(`[S13] Vent method (${coolingState.ventilationMethod}) is scheduled. Setting free cooling limit to 0.`);
            coolingState.freeCoolingLimit = 0;
        } else {
            console.log(`[S13] Vent method (${coolingState.ventilationMethod}) is constant. Using calculated free cooling limit: ${coolingState.freeCoolingLimit}`);
        }
        */
        // --------------------------------------------------------

        calculateDaysActiveCooling();
        calculateWetBulbTemperature();

        // Values are used internally by other S13 functions
        // Note: These might be set again later by setCalculatedValue if they are actual table cells
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
                    value: "0.9", // Set default to 90%
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
        // Heating system dropdown change handler
        document.querySelectorAll('[data-field-id="d_113"]').forEach(dropdown => {
            dropdown.addEventListener('change', function(e) {
                calculateHeatingSystem();
            });
        });
        
        // HSPF input change handler
        document.querySelectorAll('[data-field-id="f_113"]').forEach(input => {
            input.addEventListener('change', function(e) {
                calculateCOPValues();
            });
        });
        
        // Cooling system dropdown change handler
        document.querySelectorAll('[data-field-id="d_116"]').forEach(dropdown => {
            dropdown.addEventListener('change', function(e) {
                calculateCoolingSystem();
            });
        });
        
        // Ventilation efficiency slider change handler
        document.querySelectorAll('[data-field-id="d_118"]').forEach(slider => {
            slider.addEventListener('input', function(e) {
                calculateVentilationValues();
            });
        });
        
        // Ventilation method dropdown change handler
        document.querySelectorAll('[data-field-id="g_118"]').forEach(dropdown => {
            dropdown.addEventListener('change', function(e) {
                // Use e.target.value instead of this.value
                const newValue = e.target.value;
                // Add StateManager update
                if (window.TEUI.StateManager) {
                    // Use newValue and the correct fieldId from the event target's dataset
                    window.TEUI.StateManager.setValue(e.target.dataset.fieldId, newValue, 'user-modified');
                }
                // Call calculateAll instead of just calculateVentilationRates
                calculateAll(); 
            });
        });
        
        // Per person ventilation rate input handler
        document.querySelectorAll('[data-field-id="d_119"]').forEach(input => {
            input.addEventListener('change', function(e) {
                calculateVentilationRates();
            });
        });
        
        // Summer boost dropdown change handler
        document.querySelectorAll('[data-field-id="l_119"]').forEach(dropdown => {
            dropdown.addEventListener('change', function(e) {
                calculateCoolingVentilation();
            });
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
        } else {
            console.warn("Section 13: StateManager not available to add climate/loss/gain listeners.");
        }

        // --- Standard Editable Field Handlers (Moved Inside initializeEventHandlers) --- 
        const sectionElement = document.getElementById('mechanicalLoads'); // Use the correct section ID
        if (sectionElement) {
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
        } else {
             console.warn("Section 13 element not found for attaching editable field handlers.");
        }

        // Unoccupied Setback dropdown change handler (k_120)
        document.querySelectorAll('[data-dropdown-id="dd_k_120"]').forEach(dropdown => {
            dropdown.addEventListener('change', function(e) {
                const fieldId = this.getAttribute('data-field-id');
                if (!fieldId) return;
                if (window.TEUI.StateManager) {
                    window.TEUI.StateManager.setValue(fieldId, this.value, 'user-modified');
                }
                calculateAll(); // Recalculate needed, affects h_124
            });
        });
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
        
        // Update percentage comparison m_116, m_117 (assuming ref values are 1?)
        setCalculatedValue('m_116', copcool_to_use / 1 * 100, 'percent-0dp'); // Example: compare to COP=1
        setCalculatedValue('m_117', intensity_f117 / 5 * 100, 'percent-0dp'); // Example: compare to 5 kWh/m2

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
        let ventRateLs = 0;
        if (ventMethod === 'Occupant Constant') { ventRateLs = ratePerPerson_d119 * 14; }
        else if (ventMethod === 'Occupant by Schedule') { ventRateLs = totalHours > 0 ? (ratePerPerson_d119 * 14 * (occupiedHours / totalHours)) : 0; }
        else if (ventMethod === 'Volume by Schedule') { ventRateLs = totalHours > 0 && volume > 0 ? ((ach * volume / 3.6) * (occupiedHours / totalHours)) : 0; }
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
        // Run integrated cooling calculations first to ensure state is up-to-date
        runIntegratedCoolingCalculations(); 

        // Use global parser
        // REVERTING: Use d_120 (average rate) for cooling load calculation, not k_120.
        const ventilationRateLs_d120 = window.TEUI.parseNumeric(getFieldValue('d_120')) || 0;
        // const ventVolumeCooling_m3hr_k120 = window.TEUI.parseNumeric(getFieldValue('k_120')) || 0;
        // const ventilationRateCoolingLs = ventVolumeCooling_m3hr_k120 / 3.6; // Convert m3/hr to L/s

        const cdd_d21 = coolingState.coolingDegreeDays; // Use updated value from coolingState
        const sre_d118 = window.TEUI.parseNumeric(getFieldValue('d_118')) / 100 || 0; // Convert % to fraction
        const summerBoostRawValue = getFieldValue('l_119'); // Get raw value (could be "None" or numeric string)
        const summerBoostFactor = (summerBoostRawValue === 'None' || summerBoostRawValue === '') ? 1.0 : window.TEUI.parseNumeric(summerBoostRawValue) || 1.0;

        // Latent load factor - Use value from integrated coolingState
        let latentLoadFactor_i122 = coolingState.latentLoadFactor;
        
        // --- Get values needed for the revised formula ---
        const coolingSystem_d116 = getFieldValue('d_116');
        // Occupancy factor variables no longer needed here as k_120 handles schedule impact
        const baseConstant = 1.21; // Using 1.21 as per Excel formula

        let ventEnergyCoolingIncoming_d122 = 0;
        
        // NOTE: OccupancyFactor multiplication was removed (2024-07-31) because d_120 already includes
        // the schedule adjustment based on the selected Ventilation Method (g_118). Applying it
        // here would double-count the schedule reduction.
        // FURTHER NOTE: Now using d_120 (converted to L/s) which correctly reflects avg schedule.
        if (coolingSystem_d116 === 'Cooling') {
            // If cooling is active
            ventEnergyCoolingIncoming_d122 = baseConstant * ventilationRateLs_d120 * cdd_d21 * 24 / 1000 * latentLoadFactor_i122;
            // Apply summer boost if not "None"
            if (summerBoostFactor !== 1.0) {
                ventEnergyCoolingIncoming_d122 *= summerBoostFactor;
            }
        } else {
            // If no cooling
            ventEnergyCoolingIncoming_d122 = baseConstant * ventilationRateLs_d120 * cdd_d21 * 24 / 1000 * latentLoadFactor_i122;
            // Apply summer boost if not "None"
            if (summerBoostFactor !== 1.0) {
                ventEnergyCoolingIncoming_d122 *= summerBoostFactor;
            }
        }
        
        // Calculate Outgoing Energy (d_123)
        const ventEnergyCoolingOutgoing_d123 = ventEnergyCoolingIncoming_d122 * (1 - sre_d118);

        // Specify format types explicitly
        setCalculatedValue('i_122', latentLoadFactor_i122, 'percent-0dp'); // Display as percentage
        setCalculatedValue('d_122', ventEnergyCoolingIncoming_d122, 'number-2dp-comma');
        setCalculatedValue('d_123', ventEnergyCoolingOutgoing_d123, 'number-2dp-comma');
        // Placeholder for m_119 - need actual formula
        const perPersonRate_d119 = window.TEUI.parseNumeric(getFieldValue('d_119')) || 0;
        setCalculatedValue('m_119', perPersonRate_d119, 'number-2dp'); // Assuming raw value display for now
    }
    
    /**
     * Calculate free cooling capacity and related metrics
     */
    function calculateFreeCooling() {
        // Run integrated cooling calculations first to ensure state is up-to-date
        runIntegratedCoolingCalculations(); 

        // Get the potential free cooling limit from the integrated calculation
        let potentialFreeCoolingLimit = coolingState.freeCoolingLimit;
        let finalFreeCoolingLimit = 0; // Default to 0

        // Get the ventilation method
        const ventMethod = coolingState.ventilationMethod; // Already fetched in updateCoolingInputs

        // Apply the logic: If method is Constant, use full potential.
        // If scheduled, multiply potential by the setback factor from k_120.
        if (ventMethod && ventMethod.includes('Constant')) {
            finalFreeCoolingLimit = potentialFreeCoolingLimit;
            // console.log(`[S13] calculateFreeCooling: Using calculated limit (${finalFreeCoolingLimit}) for Constant method.`); // Keep commented
        } else { // Assumes 'by Schedule'
            const setbackFactor_k120 = window.TEUI.parseNumeric(getFieldValue('k_120')) || 0.5; // Read setback, default 0.5
            finalFreeCoolingLimit = potentialFreeCoolingLimit * setbackFactor_k120;
            // console.log(`[S13] calculateFreeCooling: Applying setback ${setbackFactor_k120} to potential ${potentialFreeCoolingLimit} for Scheduled method (${ventMethod}). Result: ${finalFreeCoolingLimit}`); // Keep commented
        }

        // Days Active Cooling - Use value from integrated coolingState (this depends on free cooling limit)
        // Recalculate days active cooling AFTER potentially modifying the free cooling limit
        // We need to temporarily set the state for the calculation
        const originalFreeCooling = coolingState.freeCoolingLimit;
        coolingState.freeCoolingLimit = finalFreeCoolingLimit; // Use the adjusted limit
        calculateDaysActiveCooling(); // Recalculate based on potentially modified free cooling
        coolingState.freeCoolingLimit = originalFreeCooling; // Restore original for other potential uses? Or leave adjusted?
                                                              // Let's leave adjusted for now, as it reflects reality.
        let daysActiveCooling_m124 = coolingState.daysActiveCooling;

        // Use global parser
        const coolingLoadTotal = window.TEUI.parseNumeric(getFieldValue('d_128')) || 0; // Get total load from S14 d_128 (TED Envelope)
                                                                                        // Note: Formula sheet uses d_129 (CED Unmitigated)
                                                                                        // Let's switch to d_129 based on formula sheet
        const coolingLoadUnmitigated_d129 = getNumericValue('d_129');

        // Set H124 (Free Cooling Limit kWh/yr)
        setCalculatedValue('h_124', finalFreeCoolingLimit, 'number-2dp-comma'); 
        
        // Calculate D124 (% Free Cooling of Total Cooling Load)
        // Use d_129 (Unmitigated CED) as the denominator based on formula sheet
        const percentFreeCooling = coolingLoadUnmitigated_d129 > 0 ? (finalFreeCoolingLimit / coolingLoadUnmitigated_d129) : 0;
        setCalculatedValue('d_124', percentFreeCooling, 'percent-0dp');
        
        // Set M124 (Days Active Cooling Required)
        setCalculatedValue('m_124', daysActiveCooling_m124, 'integer');
    }
    
    /**
     * Calculate all values for this section
     */
    function calculateAll() {
        // console.log("[Debug S13] calculateAll START"); // REMOVE Log 3
        // Run calculations in a logical dependency order
        calculateCOPValues();           // Depends on f_113 (HSPF)
        calculateHeatingSystem();        // Depends on d_113 (Heating System)
        calculateVentilationValues();     // Depends on d_119 (Per Person Rate)
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