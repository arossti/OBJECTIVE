/**
 * 4011-Section03CAN.js
 * Climate Calculations (Section 3) module for TEUI Calculator 4.011
 * 
 * VERSION MODIFIED TO USE PRE-LOADED JAVASCRIPT WEATHER DATA
 * Uses data from window.TEUI_PRELOADED_WEATHER (defined in data/4011-Canada.js)
 * instead of reading from an Excel file.
 */

// Ensure namespace exists
window.TEUI = window.TEUI || {};
window.TEUI.SectionModules = window.TEUI.SectionModules || {};

// --- Global Utility Functions (Copied from original Section03 for self-containment) ---
window.TEUI.formatNumber = window.TEUI.formatNumber || function(value) {
    const numValue = parseFloat(String(value).replace(/,/g, ''));
    if (isNaN(numValue)) { return String(value) || "0.00"; }
    if (Math.abs(numValue) < 0.01 && numValue !== 0) { return numValue.toFixed(2); }
    return numValue.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 });
};

// Section 3 CAN: Climate Calculations Module (Pre-loaded Data Version)
window.TEUI.SectionModules.sect03 = (function() {
    //==========================================================================
    // PART 1: CONSOLIDATED FIELD DEFINITIONS AND LAYOUT (Mostly Unchanged)
    //==========================================================================
    
    const sectionRows = {
        // Unit Subheader Row - MUST BE FIRST for proper rendering order
        "header": {
            id: "03-CAN",
            rowId: "03-CAN",
            label: "Climate Units",
            cells: {
                c: { content: "C", classes: ["section-subheader"] },
                d: { content: "ºC", classes: ["section-subheader"] },
                e: { content: "ºF", classes: ["section-subheader"] },
                f: { content: "F", classes: ["section-subheader"] },
                g: { content: "G", classes: ["section-subheader"] },
                h: { content: "ºC", classes: ["section-subheader"] },
                i: { content: "ºF", classes: ["section-subheader"] },
                j: { content: "J", classes: ["section-subheader"] },
                k: { content: "K", classes: ["section-subheader"] },
                l: { content: "L", classes: ["section-subheader"] },
                m: { content: "M", classes: ["section-subheader"] },
                n: { content: "N", classes: ["section-subheader"] }
            }
        },
        
        // Row 19: Province, City, Climate Zone
        "19": {
            id: "L.1.1",
            rowId: "L.1.1",
            label: "Province",
            cells: {
                c: { content: "Province", type: "label" },
                d: { 
                    fieldId: "d_19", 
                    type: "dropdown", 
                    dropdownId: "dd_d_19", 
                    value: "ON", // Default to Ontario
                    section: "climateCalculations",
                    // Options populated dynamically by FieldManager using getOptions
                    getOptions: function() {
                        console.log("Section 03: getOptions for Province (d_19) called."); // Log call
                        const provinces = Object.keys(preloadedData || {});
                        provinces.sort();
                        const options = provinces.map(provCode => ({
                            value: provCode,
                            name: preloadedData[provCode]?.name || provCode
                        }));
                        const finalOptions = [{ value: "", name: "Select Province" }, ...options];
                        console.log(" -> Returning province options:", finalOptions.length); // Log count
                        return finalOptions;
                    }
                    // options: [] // Removed static options
                },
                f: { content: "L.1.2", classes: ["label-prefix"] },
                g: { content: "City", classes: ["label-main"] },
                h: { 
                    fieldId: "h_19", 
                    type: "dropdown", 
                    dropdownId: "dd_h_19", 
                    value: "Alexandria", // Default city
                    section: "climateCalculations",
                    dependencies: ["d_19"], // FieldManager should use this
                    // Options populated dynamically by FieldManager using getOptions
                    getOptions: function() {
                        console.log("Section 03: getOptions for City (h_19) called."); // Log call
                        const provinceCode = window.TEUI?.StateManager?.getValue("d_19") || "ON";
                        console.log("  -- Using province code:", provinceCode);
                        const cityOptions = [{ value: "", name: "Select City" }]; // Default prompt
                        if (preloadedData && preloadedData[provinceCode]) {
                            const cities = Object.keys(preloadedData[provinceCode]).filter(key => key !== 'name');
                            cities.sort();
                            cities.forEach(cityName => {
                                cityOptions.push({ value: cityName, name: cityName });
                            });
                        } else {
                            console.warn("  -- No city data found for province:", provinceCode);
                        }
                        console.log(" -> Returning city options:", cityOptions.length); // Log count
                        return cityOptions;
                    }
                    // options: [] // Removed static options
                },
                i: { content: "Climate Zone" },
                j: { 
                    fieldId: "j_19", 
                    type: "derived", 
                    value: "6.0", // Initial default, will update
                    section: "climateCalculations",
                    dependencies: ["d_19", "h_19"]
                },
                k: { content: "L.3.3", classes: ["label-prefix"] },
                l: { content: "Days Cooling", classes: ["label-main"] },
                m: { 
                    fieldId: "m_19", 
                    type: "editable", 
                    value: "120", // Default value, consider if it should be derived
                    section: "climateCalculations",
                    classes: ["user-input"]
                }
            }
        },
        
        // Row 20: Heating Degree Days (Definition unchanged, value derived from pre-loaded data)
        "20": {
            id: "L.2.1",
            rowId: "L.2.1",
            label: "Heating Degree Days (HDD)",
            cells: {
                c: { content: "Heating Degree Days (HDD)", type: "label" },
                d: { 
                    fieldId: "d_20", 
                    type: "derived", 
                    value: "4600", // Initial default
                    section: "climateCalculations",
                    dependencies: ["d_19", "h_19", "h_20"]
                },
                f: { content: "L.2.2", classes: ["label-prefix"] },
                g: { content: "Current or Future Values", classes: ["label-main"] },
                h: { 
                    fieldId: "h_20", 
                    type: "dropdown", 
                    dropdownId: "dd_h_20", 
                    value: "Present",
                    section: "climateCalculations",
                    options: [
                        { value: "Present", name: "Present (Ref Data)" },
                        { value: "Future", name: "Future (2021-2050)" }
                    ]
                },
                // j & k can remain as static reference displays if desired, or be removed
                j: { 
                    fieldId: "j_20", 
                    type: "calculated", 
                    value: "HDD Reference Lookup", 
                    classes: ["reference-value"],
                    section: "climateCalculations"
                },
                k: { content: "HDD - Energy Star", classes: ["reference-label"] }
            }
        },
        
        // Row 21: Cooling Degree Days (Definition unchanged, value derived)
        "21": {
            id: "L.2.3",
            rowId: "L.2.3",
            label: "Cooling Degree Days (CDD)",
            cells: {
                c: { content: "Cooling Degree Days (CDD)", type: "label" },
                d: { 
                    fieldId: "d_21", 
                    type: "derived", 
                    value: "196", // Initial default
                    section: "climateCalculations",
                    dependencies: ["d_19", "h_19", "h_20"]
                },
                f: { content: "G.4.2", classes: ["label-prefix"] },
                g: { content: "Capacitance", classes: ["label-main"] },
                h: { 
                    fieldId: "h_21", 
                    type: "dropdown", 
                    dropdownId: "dd_h_21", 
                    value: "Capacitance",
                    section: "climateCalculations",
                    options: [
                        { value: "Static", name: "Static" },
                        { value: "Capacitance", name: "Capacitance" }
                    ]
                },
                i: { 
                    fieldId: "i_21", 
                    type: "percentage", 
                    value: "50", 
                    min: 0, 
                    max: 100, 
                    step: 5,
                    section: "climateCalculations",
                    classes: ["user-input"]
                },
                // j & k can remain as static reference displays if desired, or be removed
                j: { 
                    fieldId: "j_21", 
                    type: "calculated", 
                    value: "CDD Reference Lookup", 
                    classes: ["reference-value"],
                    section: "climateCalculations"
                },
                k: { content: "CDD - Energy Star", classes: ["reference-label"] }
            }
        },
        
        // Row 22: Ground Facing HDD, Ground Facing CDD (Definitions unchanged, values derived)
        "22": {
            id: "L.2.4",
            rowId: "L.2.4",
            label: "Ground Facing GF HDD",
            cells: {
                c: { content: "Ground Facing GF HDD", type: "label" },
                d: { 
                    fieldId: "d_22", 
                    type: "derived", 
                    value: "1960", // Initial default
                    section: "climateCalculations",
                    dependencies: ["d_20"]
                },
                f: { content: "L.2.5", classes: ["label-prefix"] },
                g: { content: "GF CDD", classes: ["label-main"] },
                h: { 
                    fieldId: "h_22", 
                    type: "calculated", 
                    value: "-1680", // Initial default
                    section: "climateCalculations",
                    dependencies: ["d_21"]
                }
            }
        },
        
        // Row 23: Coldest Days, Heating Setpoint (Definitions unchanged, values derived/calculated)
        "23": {
            id: "L.3.1",
            rowId: "L.3.1",
            label: "Coldest Days (Location Specific)",
            cells: {
                c: { content: "Coldest Days (Location Specific)", type: "label" },
                d: { 
                    fieldId: "d_23", 
                    type: "derived", 
                    value: "-26", // Initial default
                    section: "climateCalculations",
                    dependencies: ["d_19", "h_19"]
                },
                e: { 
                    fieldId: "e_23", 
                    type: "calculated", 
                    value: "-22", // Initial default
                    section: "climateCalculations",
                    dependencies: ["d_23"]
                },
                f: { content: "B.1.2", classes: ["label-prefix"] },
                g: { content: "Tset Heating", classes: ["label-main"] },
                h: { 
                    fieldId: "h_23", 
                    type: "calculated",
                    section: "climateCalculations",
                    dependencies: ["d_12"]
                },
                i: { 
                    fieldId: "i_23", 
                    type: "calculated", 
                    value: "66", // Initial default
                    section: "climateCalculations",
                    dependencies: ["h_23"]
                },
                m: { 
                    fieldId: "m_23", 
                    type: "calculated", 
                    value: "122%", // Placeholder - needs real calc
                    section: "climateCalculations"
                }
            }
        },
        
        // Row 24: Hottest Days, Cooling Setpoint & Override (Definitions unchanged, values derived/calculated)
        "24": {
            id: "L.3.2",
            rowId: "L.3.2",
            label: "Hottest Days (Location Specific)",
            cells: {
                c: { content: "Hottest Days (Location Specific)", type: "label" },
                d: { 
                    fieldId: "d_24", 
                    type: "derived", 
                    value: "34", // Initial default
                    section: "climateCalculations",
                    dependencies: ["d_19", "h_19", "h_20"] // Added h_20 dependency
                },
                e: { 
                    fieldId: "e_24", 
                    type: "calculated", 
                    value: "98", // Initial default
                    section: "climateCalculations",
                    dependencies: ["d_24"]
                },
                f: { content: "B.1.3", classes: ["label-prefix"] },
                g: { content: "Tset Cooling", classes: ["label-main"] },
                h: { 
                    fieldId: "h_24", 
                    type: "calculated",
                    section: "climateCalculations",
                    dependencies: ["d_12"]
                },
                i: { 
                    fieldId: "i_24", 
                    type: "calculated", 
                    value: "78", // Initial default
                    section: "climateCalculations",
                    dependencies: ["h_24", "l_24"]
                },
                j: { content: "B.1.4", classes: ["label-prefix"] },
                k: { content: "Cooling Override", classes: ["label-main"] },
                l: { 
                    fieldId: "l_24", 
                    type: "editable", 
                    value: "24",
                    section: "climateCalculations",
                    classes: ["user-input", "editable"]
                },
                m: { 
                    fieldId: "m_24", 
                    type: "calculated", 
                    value: "108%", // Placeholder
                    section: "climateCalculations",
                    dependencies: ["h_24", "l_24"]
                }
            }
        }
    };
    
    //==========================================================================
    // PART 2: ACCESSOR METHODS (Standardized)
    //==========================================================================
    
    function getFields() {
        const fields = {};
        Object.values(sectionRows).forEach(row => {
            if (!row.cells) return;
            Object.values(row.cells).forEach(cell => {
                if (cell.fieldId && cell.type) {
                    fields[cell.fieldId] = { ...cell }; // Copy relevant props
                    fields[cell.fieldId].label = cell.content || row.label || cell.fieldId;
                    fields[cell.fieldId].section = cell.section || "climateCalculations";
                    fields[cell.fieldId].defaultValue = cell.value || "";
                    // Remove properties not needed for FieldManager registry
                    delete fields[cell.fieldId].content;
                    delete fields[cell.fieldId].value;
                }
            });
        });
        return fields;
    }
    
    function getDropdownOptions() {
        const options = {};
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
    
    function getLayout() {
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
    
    function createLayoutRow(row) {
        const rowDef = { id: row.id || row.rowId, cells: [{}, {}] };
        const columns = ['c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n'];
        columns.forEach(col => {
            if (row.cells && row.cells[col]) {
                const cell = { ...row.cells[col] };
                if (col === 'c') {
                    if (cell.type === 'label' && cell.content && !cell.label) { cell.label = cell.content; }
                    else if (!cell.label && !cell.content && row.label) { cell.label = row.label; }
                }
                delete cell.getOptions; delete cell.section; delete cell.dependencies;
                delete cell.value; // Value is not needed for layout rendering itself
                rowDef.cells.push(cell);
            } else {
                rowDef.cells.push(col === 'c' && row.label ? { label: row.label } : {});
            }
        });
        return rowDef;
    }
    
    //==========================================================================
    // PART 3: INTERNAL HELPERS (Moved or Defined Locally)
    //==========================================================================

    let isInitialized = false;
    const preloadedData = window.TEUI_PRELOADED_WEATHER || {};

    /**
     * Helper: Get element by multiple possible selectors
     */
    function getElement(selectors) {
        for (const selector of selectors) {
            const el = document.querySelector(selector);
            if (el) return el;
        }
        return null;
    }

    /**
     * Helper to parse numeric values robustly, handling commas and non-numeric inputs.
     */
     function parseNumericHelper(value) {
        if (value === null || value === undefined || value === '--' || value === 'N/A') return NaN;
        // Convert to string first to ensure .replace works
        const stringValue = String(value).replace(/,/g, ''); 
        const num = parseFloat(stringValue);
        return isNaN(num) ? NaN : num; // Return NaN if parsing fails
     }

    /**
     * Helper: Set field value in DOM and StateManager if available.
     * Ensures raw numeric value is stored in StateManager, formatted value in DOM.
     */
    function setFieldValue(fieldId, value, state = 'derived') {
        const rawValue = value;
        let valueToStore = String(rawValue); // Default to string
        let displayValue = valueToStore;

        const numValue = parseNumericHelper(rawValue); // Use robust parser

        if (!isNaN(numValue)) {
            valueToStore = numValue.toString(); // Store raw number as string
            // Use global formatter for display consistency
            displayValue = window.TEUI.formatNumber ? window.TEUI.formatNumber(numValue) : valueToStore;
        } else {
            // Handle non-numeric values like "--" or "N/A"
            displayValue = valueToStore; 
        }

        // Set raw value (as string) in state manager
        if (window.TEUI && window.TEUI.StateManager) {
            window.TEUI.StateManager.setValue(fieldId, valueToStore, state);
        }
        
        // Update DOM with formatted value
        const element = document.querySelector(`[data-field-id="${fieldId}"]`);
        if (element) {
            if (element.tagName === 'SELECT' || element.tagName === 'INPUT') {
                element.value = rawValue; // Use raw value for form elements
            } else {
                element.textContent = displayValue;
            }
        }
    }

    //==========================================================================
    // PART 4: CALCULATION FUNCTIONS (Internalized)
    //==========================================================================

    /**
     * Calculate Heating Setpoint (h_23) based on Occupancy Type (d_12)
     */
    function calculateHeatingSetpoint() {
        const occupancyType = window.TEUI.StateManager?.getValue("d_12") || "";
        let heatingSetpoint = 18; // Default
        if (occupancyType === "C-Residential" || occupancyType.includes("Care")) { heatingSetpoint = 22; }
        setFieldValue("h_23", heatingSetpoint);
    }

    /**
     * Calculate Base Cooling Setpoint (h_24) based on Occupancy Type (d_12)
     */
    function calculateCoolingSetpoint_h24() {
        const occupancyType = window.TEUI.StateManager?.getValue("d_12") || "";
        let coolingSetpoint = 24; // Default
        setFieldValue("h_24", coolingSetpoint);
    }

    /**
     * Determine the effective cooling setpoint considering the override (l_24)
     */
    function determineEffectiveCoolingSetpoint() {
        const baseSetpoint_h24 = parseNumericHelper(window.TEUI.StateManager?.getValue("h_24")) || 24;
        const override_l24_str = window.TEUI.StateManager?.getValue("l_24");
        const override_l24 = parseNumericHelper(override_l24_str);
        
        if (!isNaN(override_l24) && override_l24 > 20 && override_l24_str?.trim() !== "") {
            return override_l24;
        } else {
            if (override_l24_str?.trim() !== "" && (isNaN(override_l24) || override_l24 <= 20)){
                 window.TEUI?.StateManager?.setValue("l_24", "", 'user-modified');
                 const overrideElement = document.querySelector('[data-field-id="l_24"]');
                 if(overrideElement) overrideElement.textContent = "";
            }
            return baseSetpoint_h24;
        }
    }

    /**
     * Update fields dependent on the effective cooling setpoint (i_24, m_24)
     */
    function updateCoolingDependents() {
        const effectiveSetpointC = determineEffectiveCoolingSetpoint();
        
        // Update i_24 (Fahrenheit conversion)
        if (!isNaN(effectiveSetpointC)) {
            const effectiveSetpointF = Math.round((effectiveSetpointC * 9/5) + 32);
            setFieldValue("i_24", effectiveSetpointF);
        } else {
            setFieldValue("i_24", "--");
        }
        
        // Update m_24 (Percentage calculation)
        const baseCooling_h24 = parseNumericHelper(window.TEUI.StateManager?.getValue("h_24")) || 24;
        if (!isNaN(effectiveSetpointC) && !isNaN(baseCooling_h24) && baseCooling_h24 !== 0) {
             const m24Value = Math.round((effectiveSetpointC / baseCooling_h24) * 100);
             setFieldValue("m_24", `${m24Value}%`);
        } else {
             setFieldValue("m_24", "--");
        }
    }

    /**
     * Update the critical occupancy flag display based on d_12
     */
    function updateCriticalOccupancyFlag() {
        const occupancyType = window.TEUI.StateManager?.getValue("d_12") || "";
        const isCritical = occupancyType.includes("Care");
        const sectionHeader = document.querySelector('#climateCalculations .section-header');
        if (!sectionHeader) return isCritical;

        let flagSpan = sectionHeader.querySelector('.critical-occupancy-header-flag');
        if (isCritical) {
            if (!flagSpan) {
                flagSpan = document.createElement('span');
                flagSpan.className = 'critical-occupancy-header-flag';
                flagSpan.style.color = 'red';
                flagSpan.style.marginLeft = '15px';
                sectionHeader.appendChild(flagSpan);
            }
            flagSpan.textContent = "Critical Occupancy";
        } else {
            flagSpan?.remove();
        }
        sectionHeader.dataset.isCritical = isCritical; // Store for easy access
        return isCritical;
    }

    /**
     * Determine climate zone based on HDD
     */
    function determineClimateZone(hdd) {
        const numHdd = parseNumericHelper(hdd);
        if (isNaN(numHdd)) return '--';
        if (numHdd < 3000) return '4';
        if (numHdd < 4000) return '5';
        if (numHdd < 5000) return '6';
        if (numHdd < 6000) return '7a';
        if (numHdd < 7000) return '7b';
        return '8';
    }

    /**
     * Calculate Celsius to Fahrenheit conversions for relevant fields
     */
    function calculateTemperatures() {
        const fieldsToConvert = { "d_23": "e_23", "h_23": "i_23", "d_24": "e_24", "h_24": "i_24_base", "l_24": "i_24_override" };
        Object.entries(fieldsToConvert).forEach(([celsiusFieldId, fahrenheitFieldId]) => {
            const celsiusValue = parseNumericHelper(window.TEUI.StateManager?.getValue(celsiusFieldId));
            const fahrenheitValue = !isNaN(celsiusValue) ? Math.round((celsiusValue * 9/5) + 32) : "--";
            // Only update the actual display field i_24 based on the effective cooling setpoint
            if (!fahrenheitFieldId.startsWith("i_24_")) { 
                setFieldValue(fahrenheitFieldId, fahrenheitValue);
            }
        });
        // Ensure the displayed cooling F (i_24) reflects the potentially overridden value
        updateCoolingDependents(); 
    }

    /**
     * Calculate ground facing HDD and CDD
     */
    function calculateGroundFacing() {
        const hdd = parseNumericHelper(window.TEUI.StateManager?.getValue("d_20"));
        const cdd = parseNumericHelper(window.TEUI.StateManager?.getValue("d_21"));
        
        setFieldValue("d_22", !isNaN(hdd) ? Math.round(hdd * 0.43) : '--');
        setFieldValue("h_22", !isNaN(cdd) ? Math.round(cdd * -0.85) : '--');
    }

    /**
     * Calculate all derived/calculated values within Section 03
     */
    function calculateAll() {
        // console.log("Section 03: Running calculateAll...");
        calculateHeatingSetpoint();
        calculateCoolingSetpoint_h24(); 
        calculateTemperatures(); // This includes updateCoolingDependents
        calculateGroundFacing();
        // Recalculate climate zone based on current HDD (d_20)
        const hddValue = window.TEUI.StateManager?.getValue("d_20");
        const climateZone = determineClimateZone(hddValue);
        setFieldValue("j_19", climateZone);

        // Placeholder for m_23 calculation if logic becomes available
        // const m23Value = calculateM23(...);
        // setFieldValue("m_23", m23Value);
    }

    //==========================================================================
    // PART 5: EVENT HANDLING & INITIALIZATION (Using Pre-loaded Data)
    //==========================================================================

    /**
     * Handle province selection change
     * Simplified: Update state; FieldManager handles re-rendering dependent city dropdown via getOptions
     */
    function handleProvinceChange(e) {
        const provinceValue = e?.target?.value;
        // console.log("Section 03: Province changed to:", provinceValue);
        if (window.TEUI && window.TEUI.StateManager) {
            window.TEUI.StateManager.setValue('d_19', provinceValue || "", 'user-modified');
            window.TEUI.StateManager.setValue('dd_d_19', provinceValue || "", 'user-modified'); // Compatibility
            // Clear the city selection when province changes - FieldManager's update should handle the rest
            window.TEUI.StateManager.setValue('h_19', "", 'user-modified'); 
        }
        // No need to manually populate city dropdown here
        clearWeatherDataFields(); 
    }

    /**
     * Handle city selection change (Unchanged - triggers weather update)
     */
    function handleCityChange(e) {
        const cityValue = e?.target?.value;
        if (!cityValue) {
            clearWeatherDataFields();
            return;
        }

        if (window.TEUI && window.TEUI.StateManager) {
            window.TEUI.StateManager.setValue('h_19', cityValue, 'user-modified');
        }
        updateWeatherData();
    }

    /**
     * Clear weather-derived fields when province/city changes or is unselected
     */
    function clearWeatherDataFields() {
        const fieldsToClear = ["j_19", "d_20", "d_21", "d_22", "h_22", "d_23", "e_23", "d_24", "e_24"];
        fieldsToClear.forEach(fieldId => setFieldValue(fieldId, "--"));
    }

    /**
     * Update weather data based on selected city/province using PRE-LOADED data
     */
    function updateWeatherData() {
        // *** ADD TEMPORARY LOGGING ***
        console.log("Section 03 (Pre-loaded): updateWeatherData called.");
        // *** END TEMPORARY LOGGING ***

        const provinceValue = window.TEUI.StateManager?.getValue("d_19");
        const cityValue = window.TEUI.StateManager?.getValue("h_19");
        const isFuture = (window.TEUI.StateManager?.getValue("h_20") || 'Present') === 'Future';
        
        // *** ADD TEMPORARY LOGGING ***
        console.log(`  -- State values: Province=${provinceValue}, City=${cityValue}, Future=${isFuture}`);
        // *** END TEMPORARY LOGGING ***

        if (!provinceValue || !cityValue || !preloadedData[provinceValue] || !preloadedData[provinceValue][cityValue]) {
            clearWeatherDataFields(); // Clear if city/province invalid
            return;
        }
        
        const cityData = preloadedData[provinceValue][cityValue];
        
        // Update derived climate data fields
        const hddValue = isFuture ? cityData.HDD18_2021_2050 : cityData.HDD18;
        setFieldValue("d_20", hddValue ?? '--'); 
        
        const climateZone = determineClimateZone(hddValue);
        setFieldValue("j_19", climateZone);
        
        const cddValue = isFuture ? cityData.CDD24_2021_2050 : cityData.CDD24;
        setFieldValue("d_21", cddValue ?? '--');
        
        const isCritical = updateCriticalOccupancyFlag(); 
        let coldestTempSource = isCritical ? cityData.January_1 : cityData.January_2_5;
        // Add future logic here if data becomes available
        setFieldValue("d_23", coldestTempSource ?? '--');
        
        let hottestTempSource = cityData.July_2_5_Tdb;
        // Add future logic here if data becomes available
        setFieldValue("d_24", hottestTempSource ?? '--');
        
        // Run all internal calculations for this section
        calculateAll(); 
    }
    
    /**
     * Handle user changes to the cooling override field (l_24)
     */
    function handleOverrideChange(event) {
        const fieldId = "l_24";
        const element = event.target;
        const newValue = element.textContent.trim();
        const numericValue = parseNumericHelper(newValue);

        if (newValue !== "" && isNaN(numericValue)) {
             console.warn(`Invalid input for ${fieldId}: ${newValue}. Reverting.`);
             const previousValue = window.TEUI.StateManager?.getValue(fieldId) || "";
             element.textContent = window.TEUI.formatNumber ? window.TEUI.formatNumber(previousValue) : previousValue;
             return; 
        }
        
        // Update StateManager only if it's a valid number or empty string
        if (window.TEUI && window.TEUI.StateManager) {
            window.TEUI.StateManager.setValue(fieldId, isNaN(numericValue) ? "" : numericValue.toString(), 'user-modified');
        }
        // The StateManager listener for l_24 will trigger updates
    }
    
    /**
     * Initialize all event handlers for Section 03
     */
    function initializeEventHandlers() {
        if (isInitialized) {
            // console.log("Section 03: Already initialized, skipping.");
            return;
        }
        // console.log("Section 03: Initializing event handlers...");

        // Province dropdown change listener
        const provinceDropdown = getElement(['[data-dropdown-id="dd_d_19"]']);
        if (provinceDropdown) {
            provinceDropdown.removeEventListener('change', handleProvinceChange);
            provinceDropdown.addEventListener('change', handleProvinceChange);
        }
        
        // City dropdown change listener
        const cityDropdown = getElement(['[data-dropdown-id="dd_h_19"]']);
        if (cityDropdown) {
            cityDropdown.removeEventListener('change', handleCityChange);
            cityDropdown.addEventListener('change', handleCityChange);
        }
        
        // Present/Future toggle listener
        const presentFutureToggle = getElement(['[data-dropdown-id="dd_h_20"]']);
        if (presentFutureToggle) {
            presentFutureToggle.removeEventListener('change', updateWeatherData);
            presentFutureToggle.addEventListener('change', updateWeatherData);
        }
        
        // Editable Cooling Override Field (l_24)
        const overrideField = getElement(['[data-field-id="l_24"]']);
        if (overrideField && !overrideField.hasEventListener) {
            overrideField.setAttribute('contenteditable', 'true');
            overrideField.classList.add('editable', 'user-input'); // Ensure styling
            overrideField.removeEventListener('blur', handleOverrideChange);
            overrideField.addEventListener('blur', handleOverrideChange);
            overrideField.addEventListener('keydown', function(e) {
                if (e.key === 'Enter') { e.preventDefault(); this.blur(); }
            });
            overrideField.hasEventListener = true; 
        }

        // StateManager Listeners
        if (window.TEUI && window.TEUI.StateManager) {
            // Listener for d_12 (Occupancy) changes from other sections
            window.TEUI.StateManager.addListener('d_12', function(newValue) {
                // console.log("Section 03: d_12 changed, recalculating setpoints/weather...");
                calculateHeatingSetpoint();
                calculateCoolingSetpoint_h24();
                updateCriticalOccupancyFlag();
                updateWeatherData(); // Weather might change based on critical flag (Jan temp)
            });

            // Listener for l_24 (Cooling Override) changes (local user input)
            window.TEUI.StateManager.addListener('l_24', function(newValue) {
                // console.log("Section 03: l_24 changed, updating cooling dependents...");
                 updateCoolingDependents();
                 calculateTemperatures(); // Recalculate F conversion for display
            });
        } else {
             console.warn("Section 03: StateManager not found, listeners not added.");
        }

        isInitialized = true;
        // console.log("Section 03: Event handlers initialized.");
    }
    
    /**
     * Called when section is rendered
     */
    function onSectionRendered() {
        // *** ADD CHECK: Prevent re-initialization ***
        if (isInitialized) { 
            // console.log("Section 03 (Pre-loaded): Already initialized, skipping re-render logic.");
            return; 
        }
        // *** END CHECK ***

        // console.log("Section 03 (Pre-loaded): Rendering...");
        if (!window.TEUI_PRELOADED_WEATHER || Object.keys(window.TEUI_PRELOADED_WEATHER).length === 0) {
            console.error("Section 03 ERROR: Pre-loaded weather data not found or empty.");
            const sectionElement = document.getElementById('climateCalculations');
            if (sectionElement) { sectionElement.innerHTML = '<p style="color: red; padding: 10px;">Error: Weather data unavailable.</p>'; }
            return; 
        }
        // Initialize handlers FIRST
        initializeEventHandlers(); 
        // THEN trigger initial weather data update based on default state
        // Ensure default state is set before this runs
        if (window.TEUI && window.TEUI.StateManager) {
             window.TEUI.StateManager.setValue('d_19', "ON", 'default');
             window.TEUI.StateManager.setValue('h_19', "Alexandria", 'default');
        }
        updateWeatherData(); 
        // console.log("Section 03 (Pre-loaded): Rendered and initialized.");

        // *** Set flag AFTER successful initialization ***
        isInitialized = true; 
    }
    
    //==========================================================================
    // PART 6: PUBLIC API (Standardized)
    //==========================================================================
    
    return {
        getFields: getFields,
        getDropdownOptions: getDropdownOptions, // Returns static options if any
        getLayout: getLayout,
        initializeEventHandlers: initializeEventHandlers, 
        onSectionRendered: onSectionRendered,
        calculateAll: calculateAll // Expose if needed
    };
})();

// Remove the event listeners below as FieldManager handles initialization calls
/* 
// Initialize when the section is rendered 
document.addEventListener('teui-section-rendered', function(event) {
    if (event.detail?.sectionId === 'climateCalculations') { 
        if (window.TEUI.SectionModules.sect03) { 
             // console.log("Section 03 (Pre-loaded): Handling teui-section-rendered event.");
             // Use a small timeout to ensure the section DOM is fully ready
             setTimeout(() => window.TEUI.SectionModules.sect03.onSectionRendered(), 50); 
        }
    }
});

// Fallback to rendering complete event 
document.addEventListener('teui-rendering-complete', function() {
    // Add a check to prevent re-initialization if already done by section-rendered
    if (document.getElementById('climateCalculations') && window.TEUI.SectionModules.sect03 && !window.TEUI.SectionModules.sect03.isInitialized) { 
         // console.log("Section 03 (Pre-loaded): Handling teui-rendering-complete event.");
         // Use a small timeout
         setTimeout(() => window.TEUI.SectionModules.sect03.onSectionRendered(), 100); 
    }
}); 
*/ 