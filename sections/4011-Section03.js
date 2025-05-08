/**
 * 4011-Section03.js (Formerly 03C - Modified for ClimateData)
 * Climate Calculations (Section 3) module for TEUI Calculator 4.011
 * 
 * MODIFIED: Uses internal ClimateData object instead of Excel import.
 */

// Ensure namespace exists
window.TEUI = window.TEUI || {};
window.TEUI.SectionModules = window.TEUI.SectionModules || {};

// Create section-specific namespace for global references
window.TEUI.sect03 = window.TEUI.sect03 || {}; // Changed from sect03C

// Global variable to track initialization state
window.TEUI.sect03.initialized = false; // Changed from sect03C
// window.TEUI.sect03.userInteracted = false; // User interaction flag might not be needed now

// --- Global Utility Functions (Can be removed if defined elsewhere reliably) ---
window.TEUI.formatNumber = window.TEUI.formatNumber || function(value) {
    // Ensure value is a number
    const numValue = parseFloat(value);
    
    // Handle invalid values
    if (isNaN(numValue)) {
        // Return the original value if it's not parseable as a number (e.g., "N/A")
        return value?.toString() || "0.00";
    }
    
    // Check if value is very small
    if (Math.abs(numValue) < 0.01 && numValue !== 0) {
        return numValue.toFixed(2);
    }
    
    // Always use 2 decimal places for all numbers, including integers
    return numValue.toLocaleString(undefined, {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2
    });
};

// Section 3: Climate Calculations Module (Modified Copy)
window.TEUI.SectionModules.sect03 = (function() { // Changed from sect03C
    //==========================================================================
    // ADDED: HELPER FUNCTIONS (Standard Implementation like S04)
    //==========================================================================
    
    /**
     * Safely parses a numeric value from StateManager, using the global parseNumeric.
     * @param {string} fieldId - The ID of the field to retrieve the value for.
     * @returns {number} The parsed numeric value, or 0 if parsing fails.
     */
    function getNumericValue(fieldId, defaultValue = 0) { // Added default value parameter
        // Always use global parseNumeric and StateManager
        const rawValue = window.TEUI?.StateManager?.getValue(fieldId);
        return window.TEUI?.parseNumeric?.(rawValue, defaultValue) || defaultValue;
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
        const element = document.querySelector(`[data-field-id="${fieldId}"],[data-dropdown-id="${fieldId}"]`); 
        if (element) {
            return element.value !== undefined ? element.value : element.textContent;
        }
        return null;
    }

    /**
     * Sets a calculated value in the StateManager and updates the corresponding DOM element.
     * Uses the global window.TEUI.formatNumber for formatting.
     * @param {string} fieldId - The ID of the field to update.
     * @param {number} rawValue - The raw calculated numeric value.
     * @param {string} [formatType='number'] - The format type string (e.g., 'number-2dp-comma', 'percent-1dp', 'integer').
     */
    function setCalculatedValue(fieldId, rawValue, formatType = 'number') {
        // Handle potential N/A cases first
        if (isNaN(rawValue) || rawValue === null || rawValue === undefined) {
             window.TEUI.StateManager?.setValue(fieldId, 'N/A', 'calculated');
             const elementNA = document.querySelector(`[data-field-id="${fieldId}"]`);
             if (elementNA) elementNA.textContent = 'N/A';
             return; // Stop processing if value is not a valid number
        }

        const formattedValue = window.TEUI.formatNumber(rawValue, formatType);
        
        // Store raw value as string in StateManager for precision
        if (window.TEUI?.StateManager?.setValue) {
            window.TEUI.StateManager.setValue(fieldId, rawValue.toString(), 'calculated');
        }
        
        // Update DOM
        const element = document.querySelector(`[data-field-id="${fieldId}"]`);
        if (element) {
            element.textContent = formattedValue;
            element.classList.toggle('negative-value', rawValue < 0);
        } else {
            // console.warn(`setCalculatedValue: Element not found for ${fieldId}`);
        }
    }

    //==========================================================================
    // PART 1: CONSOLIDATED FIELD DEFINITIONS AND LAYOUT (Modified for ClimateData)
    //==========================================================================
    
    const canadianProvinces = [
        { value: "", name: "Select Province" },
        { value: "AB", name: "Alberta" },
        { value: "BC", name: "British Columbia" },
        { value: "MB", name: "Manitoba" },
        { value: "NB", name: "New Brunswick" },
        { value: "NL", name: "Newfoundland and Labrador" },
        { value: "NS", name: "Nova Scotia" },
        { value: "NT", name: "Northwest Territories" },
        { value: "NU", name: "Nunavut" },
        { value: "ON", name: "Ontario" },
        { value: "PE", name: "Prince Edward Island" },
        { value: "QC", name: "Québec" },
        { value: "SK", name: "Saskatchewan" },
        { value: "YT", name: "Yukon" }
    ];

    const sectionRows = {
        "header": {
            id: "03-ID", rowId: "03-ID", label: "Climate Units",
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
        "19": {
            id: "L.1.1", rowId: "L.1.1", label: "Province",
            cells: {
                c: { content: "Province", type: "label" },
                d: { 
                    fieldId: "d_19", type: "dropdown", dropdownId: "dd_d_19", value: "ON", 
                    section: "climateCalculations", 
                    options: canadianProvinces // Directly use the province list
                },
                f: { content: "L.1.2", classes: ["label-prefix"] },
                g: { content: "City", classes: ["label-main"] },
                h: { 
                    fieldId: "h_19", type: "dropdown", dropdownId: "dd_h_19", value: "Alexandria", 
                    section: "climateCalculations", dependencies: ["d_19"],
                    options: [{ value: "", name: "Select City" }], // Initial placeholder
                    // getOptions is now handled by the event listener
                },
                i: { content: "Climate Zone" },
                j: { fieldId: "j_19", type: "derived", value: "6.0", section: "climateCalculations" },
                k: { content: "L.3.3", classes: ["label-prefix"] },
                l: { content: "Days Cooling", classes: ["label-main"] },
                m: { fieldId: "m_19", type: "editable", value: "120", section: "climateCalculations", classes: ["user-input", "editable"] }
            }
        },
        // ... (Keep rows 20-24 definitions as they were, they depend on derived values) ...
        // Row 20: Heating Degree Days
        "20": {
            id: "L.2.1", rowId: "L.2.1", label: "Heating Degree Days (HDD)",
            cells: {
                c: { content: "Heating Degree Days (HDD)", type: "label" },
                d: { fieldId: "d_20", type: "derived", value: "0", section: "climateCalculations" },
                f: { content: "L.2.2", classes: ["label-prefix"] },
                g: { content: "Current or Future Values", classes: ["label-main"] },
                h: { 
                    fieldId: "h_20", type: "dropdown", dropdownId: "dd_h_20", value: "Present",
                    section: "climateCalculations",
                    options: [{ value: "Present", name: "Present (1991-2020)" }, { value: "Future", name: "Future (2021-2050)" }]
                },
                j: { fieldId: "j_20", type: "calculated", value: "HDD Ref Lookup", classes: ["reference-value"] },
                k: { content: "HDD - Energy Star", classes: ["reference-label"] }
            }
        },
        // Row 21: Cooling Degree Days
        "21": {
            id: "L.2.3", rowId: "L.2.3", label: "Cooling Degree Days (CDD)",
            cells: {
                c: { content: "Cooling Degree Days (CDD)", type: "label" },
                d: { fieldId: "d_21", type: "derived", value: "0", section: "climateCalculations" },
                f: { content: "G.4.2", classes: ["label-prefix"] },
                g: { content: "Capacitance", classes: ["label-main"] },
                h: { 
                    fieldId: "h_21", type: "dropdown", dropdownId: "dd_h_21", value: "Capacitance",
                    section: "climateCalculations",
                    options: [{ value: "Static", name: "Static" }, { value: "Capacitance", name: "Capacitance" }]
                },
                i: { fieldId: "i_21", type: "percentage", value: "50", min: 0, max: 100, step: 5 },
                j: { fieldId: "j_21", type: "calculated", value: "CDD Ref Lookup", classes: ["reference-value"] },
                k: { content: "CDD - Energy Star", classes: ["reference-label"] }
            }
        },
        // Row 22: Ground Facing HDD, Ground Facing CDD, Elevation
        "22": {
            id: "L.2.4", rowId: "L.2.4", label: "Ground Facing GF HDD",
            cells: {
                c: { content: "Ground Facing GF HDD", type: "label" },
                d: { fieldId: "d_22", type: "derived", value: "0", section: "climateCalculations" },
                e: { content: "ºC•days", classes: ["unit-label"] },
                f: { content: "L.2.5", classes: ["label-prefix"] },
                g: { content: "GF CDD", classes: ["label-main"] },
                h: { fieldId: "h_22", type: "calculated", value: "0", section: "climateCalculations" },
                i: { content: "ºC•days", classes: ["unit-label"] },
                j: { content: "L.1.3", classes: ["label-prefix"] },
                k: { content: "Elevation (ASL)", classes: ["label-main"] },
                l: { fieldId: "l_22", type: "derived", value: "0", section: "climateCalculations" }, // Elevation will be derived
                m: { content: "m", classes: ["unit-label"] }
            }
        },
        // Row 23: Coldest Days, Heating Setpoint
        "23": {
            id: "L.3.1", rowId: "L.3.1", label: "Coldest Days (Location Specific)",
            cells: {
                c: { content: "Coldest Days (Location Specific)", type: "label" },
                d: { fieldId: "d_23", type: "derived", value: "0", section: "climateCalculations" },
                e: { fieldId: "e_23", type: "calculated", value: "0", section: "climateCalculations" },
                f: { content: "B.1.2", classes: ["label-prefix"] },
                g: { content: "Tset Heating", classes: ["label-main"] },
                h: { fieldId: "h_23", type: "calculated", section: "climateCalculations", dependencies: ["d_12"] },
                i: { fieldId: "i_23", type: "calculated", value: "0", section: "climateCalculations" },
                m: { fieldId: "m_23", type: "calculated", value: "0%" }
            }
        },
        // Row 24: Hottest Days, Cooling Setpoint & Override
        "24": {
            id: "L.3.2", rowId: "L.3.2", label: "Hottest Days (Location Specific)",
            cells: {
                c: { content: "Hottest Days (Location Specific)", type: "label" },
                d: { fieldId: "d_24", type: "derived", value: "0", section: "climateCalculations" },
                e: { fieldId: "e_24", type: "calculated", value: "0", section: "climateCalculations" },
                f: { content: "B.1.3", classes: ["label-prefix"] },
                g: { content: "Tset Cooling", classes: ["label-main"] },
                h: { fieldId: "h_24", type: "calculated", section: "climateCalculations", dependencies: ["d_12"] },
                i: { fieldId: "i_24", type: "calculated", value: "0" },
                j: { content: "B.1.4", classes: ["label-prefix"] },
                k: { content: "Cooling Override", classes: ["label-main"] },
                l: { fieldId: "l_24", type: "editable", value: "24", section: "climateCalculations", classes: ["user-input", "editable"] },
                m: { fieldId: "m_24", type: "calculated", value: "0%" }
            }
        }
    };
    
    //==========================================================================
    // ACCESSOR METHODS TO EXTRACT FIELDS AND LAYOUT (Keep these)
    //==========================================================================
    
    /**
     * Extract field definitions from the integrated layout
     */
    function getFields() {
        const fields = {};
        Object.entries(sectionRows).forEach(([rowKey, row]) => {
            if (rowKey === "header") return; 
            if (!row.cells) return;
            Object.entries(row.cells).forEach(([colKey, cell]) => {
                if (cell.fieldId && cell.type) {
                    fields[cell.fieldId] = { 
                        ...cell, 
                        defaultValue: cell.value // Ensure defaultValue is set
                    };
                    // delete fields[cell.fieldId].value; // Remove original value key
                }
            });
        });
        return fields;
    }
    
    /**
     * Extract dropdown options from the integrated layout
     */
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
    
    /**
     * Generate layout from integrated row definitions
     */
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
    
    /**
     * Helper function to convert a row definition to the layout format
     */
    function createLayoutRow(row) {
        const rowDef = { id: row.id, cells: [{}, {}] };
        const columns = ['c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n'];
        columns.forEach(col => {
            const cell = row.cells?.[col] ? { ...row.cells[col] } : {};
            if (col === 'c') {
                if (cell.type === 'label' && cell.content && !cell.label) {
                    cell.label = cell.content;
                    delete cell.type; delete cell.content;
                } else if (!cell.label && !cell.content && row.label) {
                    cell.label = row.label;
                }
            }
            delete cell.getOptions; delete cell.section; delete cell.dependencies;
             // Keep 'value' only if type is 'editable' or 'calculated' for default display
            if (cell.type !== 'editable' && cell.type !== 'calculated') {
                 delete cell.value; 
            }
            rowDef.cells.push(cell);
        });
        return rowDef;
    }

    //==========================================================================
    // CALCULATIONS AND DEPENDENCIES (Keep existing calculation logic)
    //==========================================================================
    
    /**
     * Determine climate zone based on HDD
     */
    function determineClimateZone(hdd) {
        const numericHdd = parseFloat(hdd);
        if (isNaN(numericHdd)) return '6.0'; // Default
        if (numericHdd < 3000) return '4.0';
        if (numericHdd < 4000) return '5.0';
        if (numericHdd < 5000) return '6.0';
        if (numericHdd < 6000) return '7.1';
        if (numericHdd < 7000) return '7.2';
        return '8.0';
    }

    /**
     * Calculate Celsius to Fahrenheit conversions (Heating only now)
     */
    function calculateTemperatures() {
        const coldestC = getNumericValue("d_23");
        setCalculatedValue("e_23", (coldestC * 9/5) + 32, 'integer-nocomma');
        const heatingC = getNumericValue("h_23");
        setCalculatedValue("i_23", (heatingC * 9/5) + 32, 'integer-nocomma');
        const hottestC = getNumericValue("d_24");
        setCalculatedValue("e_24", (hottestC * 9/5) + 32, 'integer-nocomma');
        updateCoolingDependents(); // Update cooling F and % too
    }

    /**
     * Calculate ground facing HDD and CDD
     */
    function calculateGroundFacing() {
        const heatingSetpoint = getNumericValue('h_23');
        const coolingDaysGFH = getNumericValue('m_19');
        const heatingDays = 365 - coolingDaysGFH;
        const gfhdd = Math.round((heatingSetpoint - 10) * heatingDays);
        setCalculatedValue("d_22", gfhdd, 'integer-nocomma');
        
        const capacitanceSetting = getFieldValue('h_21');
        const coolingSetpoint_h24 = getNumericValue('h_24');
        const coolingDays_m19 = getNumericValue('m_19');
        let gfcdd;
        if (capacitanceSetting === 'Static') {
            gfcdd = Math.max(0, (10 - coolingSetpoint_h24) * coolingDays_m19);
        } else {
            gfcdd = (10 - coolingSetpoint_h24) * coolingDays_m19;
        }
        setCalculatedValue("h_22", Math.round(gfcdd), 'integer-nocomma');
    }

    /**
     * Calculate Heating Setpoint (h_23) based on Occupancy Type (d_12)
     */
    function calculateHeatingSetpoint() {
        const occupancyType = window.TEUI.StateManager?.getValue("d_12") || "";
        let heatingSetpoint = 18;
        if (occupancyType === "C-Residential" || occupancyType.includes("Care")) {
            heatingSetpoint = 22;
        }
        setCalculatedValue("h_23", heatingSetpoint, 'integer-nocomma');
        return heatingSetpoint;
    }

    /**
     * Calculate Base Cooling Setpoint (h_24) based on Occupancy Type (d_12)
     */
    function calculateCoolingSetpoint_h24() {
        let coolingSetpoint = 24;
        setCalculatedValue("h_24", coolingSetpoint, 'integer-nocomma');
        return coolingSetpoint;
    }

    /**
     * Determine the effective cooling setpoint considering the override
     */
    function determineEffectiveCoolingSetpoint() {
        const baseSetpoint_h24 = getNumericValue("h_24", 24);
        const override_l24 = getNumericValue("l_24", baseSetpoint_h24); // Default override to base
        return (override_l24 > 20) ? override_l24 : baseSetpoint_h24;
    }

    /**
     * Update fields dependent on the effective cooling setpoint (i_24, m_24)
     */
    function updateCoolingDependents() {
        const effectiveSetpointC = determineEffectiveCoolingSetpoint();
        setCalculatedValue("i_24", (effectiveSetpointC * 9/5) + 32, 'integer-nocomma');
        const m24Value = Math.round((effectiveSetpointC / 22) * 100); // Example calc
        setCalculatedValue("m_24", m24Value / 100, 'percent-0dp'); // Pass raw decimal for percent formatting
    }

    /**
     * Update the critical occupancy flag display based on d_12
     */
    function updateCriticalOccupancyFlag() {
        const occupancyType = window.TEUI.StateManager?.getValue("d_12") || "";
        const sectionHeader = document.querySelector('#climateCalculations .section-header');
        if (!sectionHeader) return false;

        let flagSpan = sectionHeader.querySelector('.critical-occupancy-header-flag');
        let isCritical = occupancyType.includes("Care");

        if (isCritical) {
            if (!flagSpan) {
                flagSpan = document.createElement('span');
                flagSpan.className = 'critical-occupancy-header-flag';
                flagSpan.style.color = 'red';
                flagSpan.style.marginLeft = '15px';
                const statusMsg = sectionHeader.querySelector('.section-status-message');
                if (statusMsg && statusMsg.parentNode === sectionHeader) {
                     statusMsg.parentNode.insertBefore(flagSpan, statusMsg.nextSibling);
                } else {
                    sectionHeader.appendChild(flagSpan);
                }
            }
            flagSpan.textContent = "Critical Occupancy";
        } else {
            flagSpan?.remove();
        }
        sectionHeader.dataset.isCritical = isCritical;
        return isCritical;
    }

    /**
     * Calculate all values for this section
     */
    function calculateAll() {
        calculateHeatingSetpoint(); 
        calculateCoolingSetpoint_h24();
        calculateTemperatures();
        calculateGroundFacing();
        updateCoolingDependents(); 
        updateCriticalOccupancyFlag();
        
        // Recalculate Climate Zone based on updated HDD
        const hdd = getNumericValue('d_20');
        const climateZone = determineClimateZone(hdd);
        setCalculatedValue("j_19", climateZone, 'number-1dp');
    }

    //==========================================================================
    // EVENT HANDLING AND INITIALIZATION (Modified)
    //==========================================================================

    /**
     * Handle province selection change - MODIFIED FOR ClimateData
     */
    function handleProvinceChange(e) {
        const provinceValue = e?.target?.value;
        console.log(`[S03 DEBUG] handleProvinceChange triggered. Province: ${provinceValue}`); // Log Entry
        
        if (!provinceValue) {
            resetClimateFields(); // Reset if province is unselected
            return;
        }
        
        if (TEUI.StateManager) {
            TEUI.StateManager.setValue('d_19', provinceValue, 'user-modified');
        }
        
        const cityDropdown = document.querySelector('[data-dropdown-id="dd_h_19"]');
        if (!cityDropdown) {
             console.error("[S03 DEBUG] City dropdown not found!");
             return;
        }
        
        cityDropdown.innerHTML = '<option value="">Select City</option>';
        cityDropdown.disabled = true;
        
        // Get cities from ClimateData
        const provinceData = window.TEUI.ClimateData?.[provinceValue];
        const cities = provinceData ? Object.keys(provinceData).sort() : [];
        console.log(`[S03 DEBUG] Cities found for ${provinceValue}:`, cities); // Log Cities
        
        if (cities.length > 0) {
            cities.forEach(cityName => {
                const option = document.createElement('option');
                option.value = cityName;
                option.textContent = cityName;
                cityDropdown.appendChild(option);
            });
            cityDropdown.disabled = false;

            // Set default city to Alexandria for ON, else first city
            const defaultCity = "Alexandria";
            let cityToSelect = cities[0]; // Default to first alphabetical
            if (provinceValue === "ON" && cities.includes(defaultCity)) {
                cityToSelect = defaultCity;
            }
            console.log(`[S03 DEBUG] Default city selected: ${cityToSelect}`); // Log Default City
            
            cityDropdown.value = cityToSelect; // Set the dropdown value
            if (TEUI.StateManager) {
                TEUI.StateManager.setValue('h_19', cityToSelect, 'user-modified'); 
            }
            updateWeatherData(); // Trigger weather update for the selected city

        } else {
             console.warn(`[S03 DEBUG] No cities found for province: ${provinceValue}`); // Log No Cities
             resetClimateFields();
        }
    }

    /**
     * Update weather data based on selected city/province - MODIFIED FOR ClimateData
     */
    function updateWeatherData() {
        const provinceValue = getFieldValue("d_19");
        const cityValue = getFieldValue("h_19");
        const isFuture = getFieldValue("h_20") === 'Future';
        
        if (!provinceValue || !cityValue || !window.TEUI.ClimateData?.[provinceValue]?.[cityValue]) {
            resetClimateFields(); // Reset if data not found
            return;
        }
        
        const cityData = window.TEUI.ClimateData[provinceValue][cityValue];
        const isCritical = updateCriticalOccupancyFlag(); // Check criticality

        // Update derived climate data fields using keys from ClimateData
        setCalculatedValue("d_20", isFuture ? cityData.HDD18_2021_2050 : cityData.HDD18, 'integer');
        setCalculatedValue("d_21", isFuture ? cityData.CDD24_2021_2050 : cityData.CDD24, 'integer');
        setCalculatedValue("l_22", cityData["Elev ASL (m)"], 'integer');
        
        // Select temp based on criticality
        const coldestTemp = isCritical ? cityData.January_1 : cityData.January_2_5;
        setCalculatedValue("d_23", coldestTemp, 'integer');

        // Select hottest temp (use future if selected, otherwise present)
        const hottestTemp = isFuture ? cityData.Future_July_2_5_Tdb : cityData.July_2_5_Tdb;
        setCalculatedValue("d_24", hottestTemp, 'integer');

        // Update reference lookups (these might need more complex logic or direct values)
        setCalculatedValue("j_20", "Ref HDD", 'raw'); // Placeholder
        setCalculatedValue("j_21", "Ref CDD", 'raw'); // Placeholder

        calculateAll(); // Recalculate dependent fields
    }
    
    /**
     * Reset climate fields when no city is selected or data is missing
     */
    function resetClimateFields() {
        const fieldsToReset = ["d_20", "d_21", "l_22", "d_23", "d_24", "e_23", "e_24", "j_19", "d_22", "h_22", "i_23", "i_24", "m_23", "m_24"];
        fieldsToReset.forEach(fieldId => {
            setCalculatedValue(fieldId, 0); // Reset to 0 or appropriate default
        });
         // Update display for overridden fields too
         setCalculatedValue("l_24", 24);
         setCalculatedValue("m_19", 120);
    }

    /**
     * Display weather data in modal - RESTORED AND MODIFIED FOR ClimateData
     */
    function showWeatherData() {
        const provinceValue = getFieldValue("d_19");
        const cityValue = getFieldValue("h_19");
        
        if (!provinceValue || !cityValue) {
            alert('Please select a province and city first.');
            return;
        }
        
        // Get city data from the new structure
        const cityData = window.TEUI.ClimateData?.[provinceValue]?.[cityValue];
        
        if (!cityData) {
            alert(`Climate data not found for ${cityValue}, ${provinceValue}`);
            return;
        }
        
        // Set modal title and content
        const modalTitle = document.getElementById('weatherDataModalLabel');
        const modalContent = document.getElementById('weatherDataContent');
        
        if (modalTitle) modalTitle.textContent = `Weather Data for ${cityValue}, ${provinceValue}`;
        if (modalContent) {
            // Format the data nicely for the modal
            let formattedContent = '';
            for (const [key, value] of Object.entries(cityData)) {
                formattedContent += `${key}: ${value}\n`;
            }
            modalContent.textContent = formattedContent.trim();
        }
        
        // Show modal using Bootstrap API
        const modalElement = document.getElementById('weatherDataModal');
        if (modalElement) {
            const modal = bootstrap.Modal.getInstance(modalElement) || new bootstrap.Modal(modalElement);
            modal.show();
        }
    }

    /**
     * Initialize event handlers for this section - MODIFIED FOR ClimateData
     */
    function initializeEventHandlers() {
        const sectionElement = document.getElementById('climateCalculations');
        if (!sectionElement) return;

        // Province dropdown change
        const provinceDropdown = document.querySelector('[data-dropdown-id="dd_d_19"]');
        if (provinceDropdown) {
            provinceDropdown.removeEventListener('change', handleProvinceChange);
            provinceDropdown.addEventListener('change', handleProvinceChange);
        }

        // City dropdown change
        const cityDropdown = document.querySelector('[data-dropdown-id="dd_h_19"]');
        if (cityDropdown) {
            cityDropdown.removeEventListener('change', handleCityChange); // Use new handler
            cityDropdown.addEventListener('change', handleCityChange);
        }

        // Present/Future toggle
        const presentFutureToggle = document.querySelector('[data-dropdown-id="dd_h_20"]');
        if (presentFutureToggle) {
            presentFutureToggle.removeEventListener('change', updateWeatherData);
            presentFutureToggle.addEventListener('change', updateWeatherData);
        }

        // Add handlers for editable fields (m_19, l_24)
        const editableFields = sectionElement.querySelectorAll('.editable.user-input');
        editableFields.forEach(field => {
            if (!field.hasEditableListeners) {
                field.setAttribute('contenteditable', 'true');
                field.addEventListener('blur', handleEditableBlur); 
                field.addEventListener('keydown', function(e) { 
                    if (e.key === 'Enter') { e.preventDefault(); e.stopPropagation(); this.blur(); }
                });
                field.addEventListener('focus', () => field.classList.add('editing'));
                field.addEventListener('focusout', () => field.classList.remove('editing'));
                field.hasEditableListeners = true;
            }
        });

        // StateManager Listeners (mostly unchanged, but ensure calculateAll covers dependencies)
        if (window.TEUI && window.TEUI.StateManager) {
            const sm = window.TEUI.StateManager;
            sm.addListener('d_12', calculateAll); // Occupancy affects setpoints
            sm.addListener('h_24', calculateAll); // Base Cooling Setpoint
            sm.addListener('l_24', calculateAll); // Cooling Override
            sm.addListener('d_20', calculateAll); // HDD affects Zone & GF HDD
            sm.addListener('h_21', calculateAll); // Capacitance affects GF CDD
            sm.addListener('m_19', calculateAll); // Cooling Days affects GF HDD/CDD
        }

        // Add listener for the restored weather data button
        const weatherBtn = document.getElementById('showWeatherDataBtn');
        if (weatherBtn) {
            weatherBtn.removeEventListener('click', showWeatherData);
            weatherBtn.addEventListener('click', showWeatherData);
        }

        // Trigger initial population of city dropdown if province has a value
        if (provinceDropdown?.value) {
            handleProvinceChange({ target: provinceDropdown }); // Simulate change event
        } else {
             resetClimateFields(); // Ensure fields are reset if no province selected initially
        }
    }

    /**
     * Handle City dropdown change - MODIFIED FOR ClimateData
     */
    function handleCityChange(e) {
        const cityValue = e?.target?.value;
        if (TEUI.StateManager) {
            TEUI.StateManager.setValue('h_19', cityValue, 'user-modified');
        }
        updateWeatherData();
    }

    /**
     * Handle blur events on editable fields - Copied from S09, adjusted slightly
     */
    function handleEditableBlur(event) {
        const fieldId = this.getAttribute('data-field-id');
        if (!fieldId) return;

        if (this.getAttribute('contenteditable') === 'true') {
            const newValueStr = this.textContent.trim();
            const numericValue = window.TEUI.parseNumeric(newValueStr, NaN); // Parse the NEW text

            // Store the parsed value (or default 0) in StateManager
            const valueToStore = isNaN(numericValue) ? '0' : numericValue.toString();
            if (window.TEUI?.StateManager?.setValue) {
                window.TEUI.StateManager.setValue(fieldId, valueToStore, 'user-modified');
            }
            
            // Format the display using the NEW parsed value
            const formatType = (fieldId === 'm_19' || fieldId === 'l_22' || fieldId === 'd_23' || fieldId === 'd_24' || fieldId === 'e_23' || fieldId === 'e_24' || fieldId === 'h_23' || fieldId === 'i_23') ? 'integer' : 'number-2dp';
            this.textContent = window.TEUI.formatNumber(isNaN(numericValue) ? 0 : numericValue, formatType);
            
            // Recalculate (will use updated StateManager value)
            calculateAll();
        }
    }

    /**
     * Called when section is rendered - MODIFIED FOR ClimateData
     */
    function onSectionRendered() {
        // console.log("Section03 onSectionRendered"); // Changed from 03C
        if (!window.TEUI.sect03.initialized) { // Changed from 03C
            registerWithStateManager(); 
            initializeEventHandlers();
            addStateManagerListeners();
            
            // *** ADDED: Trigger initial province handler if province is already selected (e.g., ON) ***
            const provinceDropdown = document.querySelector('[data-dropdown-id="dd_d_19"]');
            if (provinceDropdown?.value) {
                handleProvinceChange({ target: provinceDropdown }); // Simulate change to set default city and load data
            } else {
                resetClimateFields(); // Reset if no initial province
            }
            // *** END ADDED ***

            window.TEUI.sect03.initialized = true; // Changed from 03C
        }
    }
    
    /**
     * Register with StateManager
     */
    function registerWithStateManager() {
        // Register fields if needed (should be done by FieldManager)
    }
    
    /**
     * Add StateManager listeners
     */
    function addStateManagerListeners() {
        // Listeners are now added within initializeEventHandlers
    }

    // REMOVED: Excel/Weather Data Functions (showWeatherData, updateWeatherData, handleProvinceChange)
    
    //==========================================================================
    // PUBLIC API
    //==========================================================================
    
    return {
        getFields: getFields,
        getDropdownOptions: getDropdownOptions,
        getLayout: getLayout,
        initializeEventHandlers: initializeEventHandlers,
        onSectionRendered: onSectionRendered,
        calculateAll: calculateAll,
        showWeatherData: showWeatherData
    };
})();

// REMOVED Standard Initialization listeners (Handled by FieldManager)
// document.addEventListener('teui-section-rendered', function(event) {
//     if (event.detail?.sectionId === 'climateCalculations') { // Keep original ID for now
//         setTimeout(() => window.TEUI.SectionModules.sect03C?.onSectionRendered(), 100);
//     }
// });
// document.addEventListener('teui-rendering-complete', function() {
//     setTimeout(() => {
//         if (document.getElementById('climateCalculations')) {
//             window.TEUI.SectionModules.sect03C?.onSectionRendered();
//         }
//     }, 300);
// });

// REMOVED initialized flag check (Initialization is handled by FieldManager)
// if (window.TEUI && window.TEUI.SectionModules && window.TEUI.SectionModules.sect03) {
//     window.TEUI.SectionModules.sect03.initialized = false; 
// }