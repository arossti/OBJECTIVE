/**
 * 4011-Section03.js
 * Climate Calculations (Section 3) module for TEUI Calculator 4.011
 * 
 * Fully consolidated version matching Section04's template approach.
 * Field definitions are integrated directly into the layout structure.
 * FIX: Header row now properly appears at the top of the section.
 */

// Ensure namespace exists
window.TEUI = window.TEUI || {};
window.TEUI.SectionModules = window.TEUI.SectionModules || {};

// Section 3: Climate Calculations Module
window.TEUI.SectionModules.sect03 = (function() {
    //==========================================================================
    // PART 1: CONSOLIDATED FIELD DEFINITIONS AND LAYOUT
    //==========================================================================
    
    // Define rows with integrated field definitions for a fully consolidated approach
    const sectionRows = {
        // Unit Subheader Row - MUST BE FIRST for proper rendering order
        "header": {
            id: "03-ID",
            rowId: "03-ID",
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
                    value: "ON",
                    section: "climateCalculations",
                    getOptions: function() {
                        const locationData = TEUI?.ExcelLocationHandler?.getLocationData?.() || {};
                        return Object.keys(locationData).map(province => ({
                            value: province,
                            name: locationData[province].name || province
                        }));
                    }
                },
                f: { content: "L.1.2", classes: ["label-prefix"] },
                g: { content: "City", classes: ["label-main"] },
                h: { 
                    fieldId: "h_19", 
                    type: "dropdown", 
                    dropdownId: "dd_h_19", 
                    value: "Alexandria",
                    section: "climateCalculations",
                    dependencies: ["d_19"],
                    getOptions: function(provinceValue) {
                        if (!provinceValue) {
                            provinceValue = TEUI.StateManager?.getValue?.("d_19") || 
                                         document.querySelector('[data-dropdown-id="dd_d_19"]')?.value;
                        }
                        
                        const locationData = TEUI?.ExcelLocationHandler?.getLocationData?.() || {};
                        const provinceData = locationData[provinceValue] || {};
                        return (provinceData.cities || []).map(city => ({
                            value: city.name,
                            name: city.name
                        }));
                    }
                },
                i: { content: "Climate Zone" },
                j: { 
                    fieldId: "j_19", 
                    type: "derived", 
                    value: "6.0",
                    section: "climateCalculations",
                    dependencies: ["d_19", "h_19"]
                },
                k: { content: "L.3.3", classes: ["label-prefix"] },
                l: { content: "Days Cooling", classes: ["label-main"] },
                m: { 
                    fieldId: "m_19", 
                    type: "editable", 
                    value: "120",
                    section: "climateCalculations"
                }
            }
        },
        
        // Row 20: Heating Degree Days
        "20": {
            id: "L.2.1",
            rowId: "L.2.1",
            label: "Heating Degree Days (HDD)",
            cells: {
                c: { content: "Heating Degree Days (HDD)", type: "label" },
                d: { 
                    fieldId: "d_20", 
                    type: "derived", 
                    value: "4600",
                    section: "climateCalculations",
                    dependencies: ["d_19", "h_19"]
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
                        { value: "Present", name: "Present (1991-2020)" },
                        { value: "Future", name: "Future (2021-2050)" }
                    ]
                },
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
        
        // Row 21: Cooling Degree Days
        "21": {
            id: "L.2.3",
            rowId: "L.2.3",
            label: "Cooling Degree Days (CDD)",
            cells: {
                c: { content: "Cooling Degree Days (CDD)", type: "label" },
                d: { 
                    fieldId: "d_21", 
                    type: "derived", 
                    value: "196",
                    section: "climateCalculations",
                    dependencies: ["d_19", "h_19"]
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
                    section: "climateCalculations"
                },
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
        
        // Row 22: Ground Facing HDD, Ground Facing CDD
        "22": {
            id: "L.2.4",
            rowId: "L.2.4",
            label: "Ground Facing GF HDD",
            cells: {
                c: { content: "Ground Facing GF HDD", type: "label" },
                d: { 
                    fieldId: "d_22", 
                    type: "derived", 
                    value: "1960",
                    section: "climateCalculations",
                    dependencies: ["d_20"]
                },
                f: { content: "L.2.5", classes: ["label-prefix"] },
                g: { content: "GF CDD", classes: ["label-main"] },
                h: { 
                    fieldId: "h_22", 
                    type: "calculated", 
                    value: "-1680",
                    section: "climateCalculations",
                    dependencies: ["d_21"]
                }
            }
        },
        
        // Row 23: Coldest Days, Heating Setpoint
        "23": {
            id: "L.3.1",
            rowId: "L.3.1",
            label: "Coldest Days (Location Specific)",
            cells: {
                c: { content: "Coldest Days (Location Specific)", type: "label" },
                d: { 
                    fieldId: "d_23", 
                    type: "derived", 
                    value: "-26",
                    section: "climateCalculations",
                    dependencies: ["d_19", "h_19"]
                },
                e: { 
                    fieldId: "e_23", 
                    type: "calculated", 
                    value: "-22",
                    section: "climateCalculations",
                    dependencies: ["d_23"]
                },
                f: { content: "B.1.2", classes: ["label-prefix"] },
                g: { content: "Tset Heating", classes: ["label-main"] },
                h: { 
                    fieldId: "h_23", 
                    type: "derived", 
                    value: "18",
                    section: "climateCalculations",
                    dependencies: ["d_12"]
                },
                i: { 
                    fieldId: "i_23", 
                    type: "calculated", 
                    value: "66",
                    section: "climateCalculations",
                    dependencies: ["h_23"]
                },
                m: { 
                    fieldId: "m_23", 
                    type: "calculated", 
                    value: "122%",
                    section: "climateCalculations"
                }
            }
        },
        
        // Row 24: Hottest Days, Cooling Setpoint
        "24": {
            id: "L.3.2",
            rowId: "L.3.2",
            label: "Hottest Days (Location Specific)",
            cells: {
                c: { content: "Hottest Days (Location Specific)", type: "label" },
                d: { 
                    fieldId: "d_24", 
                    type: "derived", 
                    value: "34",
                    section: "climateCalculations",
                    dependencies: ["d_19", "h_19"]
                },
                e: { 
                    fieldId: "e_24", 
                    type: "calculated", 
                    value: "98",
                    section: "climateCalculations",
                    dependencies: ["d_24"]
                },
                f: { content: "B.1.3", classes: ["label-prefix"] },
                g: { content: "Tset Cooling", classes: ["label-main"] },
                h: { 
                    fieldId: "h_24", 
                    type: "derived", 
                    value: "24",
                    section: "climateCalculations",
                    dependencies: ["d_12"]
                },
                i: { 
                    fieldId: "i_24", 
                    type: "calculated", 
                    value: "78",
                    section: "climateCalculations",
                    dependencies: ["h_24"]
                },
                m: { 
                    fieldId: "m_24", 
                    type: "calculated", 
                    value: "108%",
                    section: "climateCalculations"
                }
            }
        }
    };
    
    //==========================================================================
    // PART 2: ACCESSOR METHODS TO EXTRACT FIELDS AND LAYOUT
    //==========================================================================
    
    /**
     * Extract field definitions from the integrated layout
     * This separates the fields from the layout for compatibility with existing code
     */
    function getFields() {
        const fields = {};
        
        // Extract field definitions from layout rows
        Object.values(sectionRows).forEach(row => {
            if (!row.cells) return;
            
            Object.values(row.cells).forEach(cell => {
                if (cell.fieldId && cell.type) {
                    // Create a field definition with relevant properties
                    fields[cell.fieldId] = {
                        type: cell.type,
                        label: cell.content || row.label,
                        defaultValue: cell.value || "",
                        section: cell.section || "climateCalculations"
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
     */
    function getDropdownOptions() {
        const options = {};
        
        // Extract dropdown options from cells with dropdownId
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
     * FIXED: Now properly places the header row first
     */
    function getLayout() {
        // Create array with rows in the correct order
        const layoutRows = [];
        
        // STEP 1: First add the header row if it exists
        if (sectionRows["header"]) {
            layoutRows.push(createLayoutRow(sectionRows["header"]));
        }
        
        // STEP 2: Add all remaining rows in the proper order (excluding the header)
        Object.entries(sectionRows).forEach(([key, row]) => {
            if (key !== "header") {
                layoutRows.push(createLayoutRow(row));
            }
        });
        
        return { rows: layoutRows };
    }
    
    /**
     * Helper function to convert a row definition to the layout format expected by the renderer
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
                
                // Special handling for column C to ensure row labels work
                if (col === 'c' && cell.type === 'label' && cell.content) {
                    // When we have a cell in column C with type "label", ensure it has a label property 
                    // which the renderer needs to display properly
                    cell.label = cell.content;
                }
                
                // Remove field-specific properties that aren't needed for rendering
                delete cell.getOptions;
                delete cell.section;
                delete cell.dependencies;
                
                rowDef.cells.push(cell);
            } else {
                // Add empty cell if not defined
                // Special handling for column C - use row's label if column C is missing
                if (col === 'c' && !row.cells?.c && row.label) {
                    // If column C is missing but we have a row label, use that
                    rowDef.cells.push({ label: row.label });
                } else {
                    // Otherwise add empty cell
                    rowDef.cells.push({});
                }
            }
        });
        
        return rowDef;
    }
    
    //==========================================================================
    // EVENT HANDLING AND CALCULATIONS
    //==========================================================================
    
    // All event handling and calculation functions remain unchanged
    
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
     * Helper: Set field value in DOM and StateManager if available
     */
    function setFieldValue(fieldId, value, state = 'calculated') {
        // Set in state manager
        if (TEUI.StateManager) {
            TEUI.StateManager.setValue(fieldId, value.toString(), state);
        }
        
        // Also update DOM
        const element = document.querySelector(`[data-field-id="${fieldId}"]`);
        if (element) {
            if (element.tagName === 'SELECT' || element.tagName === 'INPUT') {
                element.value = value;
            } else {
                element.textContent = value;
            }
        }
    }

    /**
     * Handle province selection change
     */
    function handleProvinceChange(e) {
        const provinceValue = e?.target?.value;
        if (!provinceValue) return;
        
        // console.log('Section03: Province selected:', provinceValue);
        
        // Set province value in StateManager for cross-section communication
        if (TEUI.StateManager) {
            // console.log('Section03: Updating StateManager with province:', provinceValue);
            TEUI.StateManager.setValue('d_19', provinceValue, 'user-modified');
            // Also update the dropdown ID used by some listeners
            TEUI.StateManager.setValue('dd_d_19', provinceValue, 'user-modified');
        }
        
        // Find city dropdown
        const cityDropdown = getElement([
            '[data-dropdown-id="dd_h_19"]',
            'select[id="dd_h_19"]',
            'select[name="h_19"]'
        ]);
        
        if (!cityDropdown) return;
        
        // Clear and populate city dropdown
        cityDropdown.innerHTML = '<option value="">Select City</option>';
        cityDropdown.disabled = false;
        
        // Get cities from location data
        const locationData = TEUI?.ExcelLocationHandler?.getLocationData?.() || {};
        const cities = (locationData[provinceValue]?.cities || []);
        
        // Add city options
        cities.forEach(city => {
            const option = document.createElement('option');
            option.value = city.name;
            option.textContent = city.name;
            cityDropdown.appendChild(option);
        });
    }
    
    /**
     * Update weather data based on selected city/province
     */
    function updateWeatherData() {
        // Get province and city values
        const provinceValue = getElement(['[data-dropdown-id="dd_d_19"]'])?.value;
        const cityValue = getElement(['[data-dropdown-id="dd_h_19"]'])?.value;
        const isFuture = getElement(['[data-dropdown-id="dd_h_20"]'])?.value === 'Future';
        
        if (!provinceValue || !cityValue) return;
        
        // Get city data
        const locationData = TEUI?.ExcelLocationHandler?.getLocationData?.() || {};
        const cityData = locationData[provinceValue]?.cities?.find(c => c.name === cityValue)?.data;
        
        if (!cityData) return;
        
        // Update climate data fields
        
        // Climate zone
        const climateZone = determineClimateZone(
            isFuture ? cityData.HDD18_2021_2050 : cityData.HDD18
        );
        setFieldValue("j_19", climateZone, 'derived');
        
        // HDD value
        const hddValue = isFuture ? cityData.HDD18_2021_2050 : cityData.HDD18;
        setFieldValue("d_20", hddValue || '4600', 'derived');
        
        // CDD value
        const cddValue = isFuture ? cityData.CDD24_2021_2050 : cityData.CDD24;
        setFieldValue("d_21", cddValue || '196', 'derived');
        
        // Coldest days
        const coldestTemp = isFuture ? 
            cityData.January_2_5_2021_2050 || cityData.January_1_2021_2050 : 
            cityData.January_2_5 || cityData.January_1;
        setFieldValue("d_23", coldestTemp || '-26', 'derived');
        
        // Hottest days
        const hottestTemp = isFuture ? 
            cityData.Extreme_Hot_Tdb_2021_2050 || cityData.July_2_5_Tdb_2021_2050 : 
            cityData.Extreme_Hot_Tdb_1991_2020 || cityData.July_2_5_Tdb || '34';
        setFieldValue("d_24", hottestTemp || '34', 'derived');
        
        // Run calculations
        calculateAll();
        
        // Update feedback area
        const feedback = document.getElementById('feedback-area');
        if (feedback) {
            feedback.textContent = `Weather data: ${cityValue}, ${provinceValue} (${isFuture ? 'Future' : 'Present'})`;
            feedback.style.color = '#0dcaf0';
        }
    }
    
    /**
     * Determine climate zone based on HDD
     */
    function determineClimateZone(hdd) {
        if (!hdd) return '6.0';
        hdd = parseFloat(hdd);
        if (hdd < 3000) return '4.0';
        if (hdd < 4000) return '5.0';
        if (hdd < 5000) return '6.0';
        if (hdd < 6000) return '7.0';
        return '8.0';
    }
    
    /**
     * Display weather data in modal
     */
    function showWeatherData() {
        const provinceValue = getElement(['[data-dropdown-id="dd_d_19"]'])?.value;
        const cityValue = getElement(['[data-dropdown-id="dd_h_19"]'])?.value;
        
        if (!provinceValue || !cityValue) {
            alert('Please select a province and city first.');
            return;
        }
        
        // Get city data
        const locationData = TEUI?.ExcelLocationHandler?.getLocationData?.() || {};
        const cityData = locationData[provinceValue]?.cities?.find(c => c.name === cityValue);
        
        if (!cityData) {
            alert(`City data not found for ${cityValue}, ${provinceValue}`);
            return;
        }
        
        // Set modal title and content
        const modalTitle = document.getElementById('weatherDataModalLabel');
        const modalContent = document.getElementById('weatherDataContent');
        
        if (modalTitle) modalTitle.textContent = `Weather Data for ${cityValue}, ${provinceValue}`;
        if (modalContent) modalContent.textContent = JSON.stringify(cityData.data, null, 2);
        
        // Show modal
        const modal = document.getElementById('weatherDataModal');
        if (modal) new bootstrap.Modal(modal).show();
    }
    
    /**
     * Calculate Celsius to Fahrenheit conversions
     */
    function calculateTemperatures() {
        // Coldest days conversion
        const coldestC = parseFloat(document.querySelector('[data-field-id="d_23"]')?.textContent);
        if (!isNaN(coldestC)) {
            const coldestF = Math.round((coldestC * 9/5) + 32);
            setFieldValue("e_23", coldestF);
        }
        
        // Heating setpoint conversion
        const heatingC = parseFloat(document.querySelector('[data-field-id="h_23"]')?.textContent);
        if (!isNaN(heatingC)) {
            const heatingF = Math.round((heatingC * 9/5) + 32);
            setFieldValue("i_23", heatingF);
        }
        
        // Hottest days conversion
        const hottestC = parseFloat(document.querySelector('[data-field-id="d_24"]')?.textContent);
        if (!isNaN(hottestC)) {
            const hottestF = Math.round((hottestC * 9/5) + 32);
            setFieldValue("e_24", hottestF);
        }
        
        // Cooling setpoint conversion
        const coolingC = parseFloat(document.querySelector('[data-field-id="h_24"]')?.textContent);
        if (!isNaN(coolingC)) {
            const coolingF = Math.round((coolingC * 9/5) + 32);
            setFieldValue("i_24", coolingF);
        }
    }
    
    /**
     * Calculate ground facing HDD and CDD
     */
    function calculateGroundFacing() {
        // Ground facing HDD
        const hdd = parseFloat(document.querySelector('[data-field-id="d_20"]')?.textContent);
        if (!isNaN(hdd)) {
            const gfhdd = Math.round(hdd * 0.43);
            setFieldValue("d_22", gfhdd);
        }
        
        // Ground facing CDD
        const cdd = parseFloat(document.querySelector('[data-field-id="d_21"]')?.textContent);
        if (!isNaN(cdd)) {
            const gfcdd = Math.round(cdd * -0.85);
            setFieldValue("h_22", gfcdd);
        }
    }
    
    /**
     * Calculate all values
     */
    function calculateAll() {
        calculateTemperatures();
        calculateGroundFacing();
    }
    
    /**
     * Initialize all event handlers
     */
    function initializeEventHandlers() {
        // Province dropdown change
        const provinceDropdown = getElement(['[data-dropdown-id="dd_d_19"]']);
        if (provinceDropdown) {
            // Remove any existing listeners
            const newProvinceDropdown = provinceDropdown.cloneNode(true);
            provinceDropdown.parentNode.replaceChild(newProvinceDropdown, provinceDropdown);
            
            // Add new listener
            newProvinceDropdown.addEventListener('change', handleProvinceChange);
        }
        
        // City dropdown change
        const cityDropdown = getElement(['[data-dropdown-id="dd_h_19"]']);
        if (cityDropdown) {
            // Remove any existing listeners
            const newCityDropdown = cityDropdown.cloneNode(true);
            cityDropdown.parentNode.replaceChild(newCityDropdown, cityDropdown);
            
            // Add new listener
            newCityDropdown.addEventListener('change', updateWeatherData);
        }
        
        // Present/Future toggle
        const presentFutureToggle = getElement(['[data-dropdown-id="dd_h_20"]']);
        if (presentFutureToggle) {
            // Remove any existing listeners
            const newToggle = presentFutureToggle.cloneNode(true);
            presentFutureToggle.parentNode.replaceChild(newToggle, presentFutureToggle);
            
            // Add new listener
            newToggle.addEventListener('change', updateWeatherData);
        }
        
        // Weather data buttons
        ['showWeatherDataBtn', 'weatherDataBtn'].forEach(id => {
            const btn = document.getElementById(id);
            if (btn) {
                // Remove any existing listeners
                const newBtn = btn.cloneNode(true);
                btn.parentNode.replaceChild(newBtn, btn);
                
                // Add new listener
                newBtn.addEventListener('click', showWeatherData);
            }
        });
        
        // Initial update if province and city already selected
        if (provinceDropdown?.value && cityDropdown?.value) {
            updateWeatherData();
        }
    }
    
    /**
     * Called when section is rendered
     */
    function onSectionRendered() {
        // Ensure ExcelLocationHandler is ready
        if (TEUI?.ExcelLocationHandler?.getLocationData?.()) {
            initializeEventHandlers();
            calculateAll();
        } else {
            // ExcelLocationHandler not ready, wait for it
            document.addEventListener('location-data-ready', function() {
                initializeEventHandlers();
                calculateAll();
            });
        }
    }
    
    //==========================================================================
    // PART 5: PUBLIC API
    //==========================================================================
    
    return {
        // Field definitions and layout
        getFields: getFields,
        getDropdownOptions: getDropdownOptions,
        getLayout: getLayout,
        
        // Event handling and initialization
        initializeEventHandlers: initializeEventHandlers,
        onSectionRendered: onSectionRendered,
        
        // Utility functions
        updateWeatherData: updateWeatherData,
        showWeatherData: showWeatherData,
        calculateAll: calculateAll
    };
})();

// Initialize when the section is rendered
document.addEventListener('teui-section-rendered', function(event) {
    if (event.detail?.sectionId === 'climateCalculations') {
        setTimeout(() => window.TEUI.SectionModules.sect03.onSectionRendered(), 100);
    }
});

// Fallback to rendering complete event
document.addEventListener('teui-rendering-complete', function() {
    setTimeout(() => {
        if (document.getElementById('climateCalculations')) {
            window.TEUI.SectionModules.sect03.onSectionRendered();
        }
    }, 300);
});