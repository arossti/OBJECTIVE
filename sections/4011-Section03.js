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

// --- Global Utility Functions (if needed) ---

// REMOVED: Redundant global formatNumber definition. Rely on the one in StateManager.js
/*
window.TEUI.formatNumber = function(value) { ... }; // Removed this block
*/

// Section 3: Climate Calculations Module
window.TEUI.SectionModules.sect03 = (function() {
    //==========================================================================
    // ADDED: HELPER FUNCTIONS (Standard Implementation like S04)
    //==========================================================================
    
    /**
     * Safely parses a numeric value from StateManager, using the global parseNumeric.
     * @param {string} fieldId - The ID of the field to retrieve the value for.
     * @returns {number} The parsed numeric value, or 0 if parsing fails.
     */
    function getNumericValue(fieldId) {
        // Always use global parseNumeric and StateManager
        // Ensure window.TEUI and window.TEUI.parseNumeric exist
        const rawValue = window.TEUI?.StateManager?.getValue(fieldId);
        return window.TEUI?.parseNumeric?.(rawValue) || 0;
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
        // Fallback to DOM - useful for dropdowns or elements not strictly state-managed?
        const element = document.querySelector(`[data-field-id="${fieldId}"],[data-dropdown-id="${fieldId}"]`); 
        if (element) {
            return element.value !== undefined ? element.value : element.textContent;
        }
        return null;
    }

    //==========================================================================
    // V2 DUAL-ENGINE HELPER FUNCTIONS (Copy from Section 07 Template)
    //==========================================================================
    
    // 1. Mode-aware value getter
    function getRefFieldValue(fieldId) {
        if (window.TEUI?.ReferenceToggle?.isReferenceMode?.()) {
            return window.TEUI.StateManager?.getReferenceValue?.(fieldId) || getFieldValue(fieldId);
        } else {
            return getFieldValue(fieldId);
        }
    }

    // 2. Application value getter
    function getAppFieldValue(fieldId) {
        return window.TEUI.StateManager?.getApplicationValue?.(fieldId) || getFieldValue(fieldId);
    }

    // 3. Dual-engine value setter
    function setDualEngineValue(fieldId, rawValue, formatType = 'number-1dp') {
        const isReferenceMode = window.TEUI?.ReferenceToggle?.isReferenceMode?.() || false;
        
        if (isReferenceMode) {
            // Reference Mode - store with ref_ prefix using new V2 API
            if (window.TEUI?.StateManager?.setReferenceValue) {
                window.TEUI.StateManager.setReferenceValue(`ref_${fieldId}`, rawValue.toString(), 'calculated-reference');
            }
        } else {
            // Application Mode - store in main state using new V2 API
            if (window.TEUI?.StateManager?.setApplicationValue) {
                window.TEUI.StateManager.setApplicationValue(fieldId, rawValue.toString(), 'calculated');
            }
        }
        
        // Update DOM with proper formatting using global formatNumber
        const formattedValue = window.TEUI?.formatNumber?.(rawValue, formatType) ?? rawValue?.toString() ?? 'N/A';
        const element = document.querySelector(`[data-field-id="${fieldId}"]`);
        if (element) {
            element.textContent = formattedValue;
        }
    }

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
                    options: [ { value: "", name: "Select Province" } ],
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
                    options: [ { value: "", name: "Select City" } ],
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
                    dependencies: ["d_20"]
                },
                k: { content: "L.3.3", classes: ["label-prefix"] },
                l: { content: "Days Cooling", classes: ["label-main"] },
                m: { 
                    fieldId: "m_19", 
                    type: "editable", 
                    value: "120",
                    section: "climateCalculations",
                    classes: ["user-input", "editable"]
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
        
        // Row 22: Ground Facing HDD, Ground Facing CDD, Elevation
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
                e: { content: "ºC•days", classes: ["unit-label"] },
                f: { content: "L.2.5", classes: ["label-prefix"] },
                g: { content: "GF CDD", classes: ["label-main"] },
                h: { 
                    fieldId: "h_22", 
                    type: "calculated", 
                    value: "-1680",
                    section: "climateCalculations",
                    dependencies: ["d_21"]
                },
                i: { content: "ºC•days", classes: ["unit-label"] },
                j: { content: "L.1.3", classes: ["label-prefix"] },
                k: { content: "Elevation (ASL)", classes: ["label-main"] },
                l: { 
                    fieldId: "l_22", 
                    type: "editable",
                    value: "80", 
                    section: "climateCalculations",
                    classes: ["user-input", "editable"]
                },
                m: { content: "m", classes: ["unit-label"] }
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
                    value: "-24",
                    section: "climateCalculations",
                    dependencies: ["d_19", "h_19", "d_12"]
                },
                e: { 
                    fieldId: "e_23", 
                    type: "calculated", 
                    value: "-11",
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
        
        // Row 24: Hottest Days, Cooling Setpoint & Override
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
                    type: "calculated",
                    section: "climateCalculations",
                    dependencies: ["d_12"]
                },
                i: { 
                    fieldId: "i_24", 
                    type: "calculated", 
                    value: "78",
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
                    value: "108%",
                    section: "climateCalculations",
                    dependencies: ["h_24", "l_24"]
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
                    if (cell.classes) fields[cell.fieldId].classes = cell.classes;
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
     * Set a field value with proper formatting and StateManager updates.
     * REFACTORED: Uses the global window.TEUI.formatNumber standard helper.
     * Updated for V2 dual-engine architecture using setDualEngineValue
     */
    function setFieldValue(fieldId, value, state = 'calculated') {
        // Handle N/A or null cases
        if (value === null || value === undefined || value === "N/A") {
            const element = document.querySelector(`[data-field-id="${fieldId}"]`);
            if (element) {
                element.textContent = "N/A";
            }
            if (window.TEUI?.StateManager?.setValue) {
                window.TEUI.StateManager.setValue(fieldId, 'N/A', state);
            }
            return;
        }

        // Determine if it's a numeric field requiring formatting
        const numericValue = window.TEUI?.parseNumeric?.(value);
        const isNumeric = numericValue !== null && isFinite(numericValue);

        if (isNumeric) {
            // Determine format type based on field ID patterns for climate calculations
            let formatType = 'number-1dp'; // Default for most climate fields
            
            if (fieldId.includes('_22') || fieldId.includes('_23') || fieldId.includes('_24')) {
                formatType = 'integer-nocomma'; // Temperature fields
            } else if (fieldId.includes('_20') || fieldId.includes('_21')) {
                formatType = 'integer-comma'; // Degree days
            } else if (fieldId.endsWith('_19')) {
                formatType = 'integer-nocomma'; // Days cooling
            }

            // Use V2 dual-engine setter for numeric values
            setDualEngineValue(fieldId, numericValue, formatType);
        } else {
            // Non-numeric values (text, dropdowns, etc.)
            if (window.TEUI?.StateManager?.setValue) {
                window.TEUI.StateManager.setValue(fieldId, value.toString(), state);
            }
            
            const element = document.querySelector(`[data-field-id="${fieldId}"]`);
            if (element) {
                element.textContent = value.toString();
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
        const provinceValue = window.TEUI.StateManager?.getValue("d_19") || getElement(['[data-dropdown-id="dd_d_19"]'])?.value; // Wrap selector in []
        const cityValue = window.TEUI.StateManager?.getValue("h_19") || getElement(['[data-dropdown-id="dd_h_19"]'])?.value; // Wrap selector in []
        const isFuture = (window.TEUI.StateManager?.getValue("h_20") || getElement(['[data-dropdown-id="dd_h_20"]'])?.value) === 'Future'; // Wrap selector in []
        
        if (!provinceValue || !cityValue) return;
        
        // Get city data
        const locationData = TEUI?.ExcelLocationHandler?.getLocationData?.() || {};
        // Find the specific city's data object
        const cityObject = locationData[provinceValue]?.cities?.find(c => c.name === cityValue);
        const cityData = cityObject?.data;
        
        if (!cityData) {
            console.warn(`Weather data not found for ${cityValue}, ${provinceValue}. Using defaults.`);
            // Optionally set default values here if needed
            return; 
        }
        
        // Update climate data fields
        const hddValue = isFuture ? cityData.HDD18_2021_2050 : cityData.HDD18;
        setFieldValue("d_20", hddValue || '4600', 'derived');
        
        // CDD value
        const cddValue = isFuture ? cityData.CDD24_2021_2050 : cityData.CDD24;
        setFieldValue("d_21", cddValue || '196', 'derived');
        
        // Coldest days - Use the pre-selected temp from ExcelLocationHandler
        const coldestTemp = cityData.January_Design_Temp || '-24'; // Use the value processed during import
        setFieldValue("d_23", coldestTemp, 'derived');
        
        // Hottest days - Using July 2.5% Tdb.
        let hottestTempKey = isFuture ? 'Future_July_2_5_Tdb' : 'July_2_5_Tdb';
        const hottestTemp = cityData[hottestTempKey] || '30'; // Fallback logic
        setFieldValue("d_24", hottestTemp, 'derived');
        
        // Elevation
        const elevation = cityData["Elevation_ASL"] || '80'; // Corrected key
        setFieldValue("l_22", elevation, 'derived');

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
        // Excel Formula: =IF(D20<3000, 4, IF(D20<4000, 5, IF(D20<5000, 6, IF(D20<6000, 7.1, IF(D20<7000, 7.2, 8))))) )
        if (hdd === null || hdd === undefined || hdd === '') return '6.0'; // Default if HDD is missing
        
        const numericHdd = parseFloat(hdd);
        if (isNaN(numericHdd)) return '6.0'; // Default if HDD is not a number

        if (numericHdd < 3000) return '4.0';
        if (numericHdd < 4000) return '5.0';
        if (numericHdd < 5000) return '6.0';
        if (numericHdd < 6000) return '7.1'; // Corrected from 7.0
        if (numericHdd < 7000) return '7.2'; // Added missing check
        return '8.0'; // Correct: returns 8.0 only if HDD >= 7000
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
     * Calculate Celsius to Fahrenheit conversions (Heating only now)
     */
    function calculateTemperatures() {
        // Coldest days conversion (d_23 -> e_23)
        const coldestC_str = window.TEUI.StateManager?.getValue("d_23");
        const coldestC = parseFloat(coldestC_str);
        if (!isNaN(coldestC)) {
            const coldestF = Math.round((coldestC * 9/5) + 32);
            setFieldValue("e_23", coldestF);
        }
        
        // Heating setpoint conversion (h_23 -> i_23)
        const heatingC_str = window.TEUI.StateManager?.getValue("h_23");
        const heatingC = parseFloat(heatingC_str);
        if (!isNaN(heatingC)) {
            const heatingF = Math.round((heatingC * 9/5) + 32);
            setFieldValue("i_23", heatingF);
        }
        
        // Hottest days conversion (d_24 -> e_24)
        const hottestC_str = window.TEUI.StateManager?.getValue("d_24");
        const hottestC = parseFloat(hottestC_str);
        if (!isNaN(hottestC)) {
            const hottestF = Math.round((hottestC * 9/5) + 32);
            setFieldValue("e_24", hottestF);
        }
        
        // Cooling setpoint conversion is now handled by updateCoolingDependents
    }
    
    /**
     * Calculate ground facing HDD and CDD
     */
    function calculateGroundFacing() {
        // --- Ground facing HDD --- 
        const heatingSetpoint = getNumericValue('h_23');
        const coolingDaysGFH = getNumericValue('m_19'); // Use a separate variable name to avoid confusion
        const heatingDays = 365 - coolingDaysGFH;

        // Formula: (TsetHeating - 10°C_ground) * HeatingDays
        const gfhdd = Math.round((heatingSetpoint - 10) * heatingDays);
        setFieldValue("d_22", gfhdd);
        
        // --- Ground facing CDD (h_22) --- NEW LOGIC --- 
        const capacitanceSetting = getFieldValue('h_21') || 'Static'; // Default to Static if undefined
        const coolingSetpoint_h24 = getNumericValue('h_24'); // TsetCool
        const coolingDays_m19 = getNumericValue('m_19');     // DaysCooling
        let gfcdd;

        if (capacitanceSetting === 'Static') {
            // Formula: MAX(0, (10 - TsetCool) * DaysCooling)
            gfcdd = Math.max(0, (10 - coolingSetpoint_h24) * coolingDays_m19);
        } else { // Assumes 'Capacitance' or any other value
            // Formula: (10 - TsetCool) * DaysCooling
            gfcdd = (10 - coolingSetpoint_h24) * coolingDays_m19;
        }

        // Update h_22 field with the newly calculated GF CDD value
        // Use Math.round as Excel likely rounds this
        setFieldValue("h_22", Math.round(gfcdd)); 
    }
    
    /**
     * Calculate all values
     */
    function calculateAll() {
        // Dependencies: d_19, h_19 -> d_23, d_24; h_20 -> future flag; d_12 -> critical flag
        
        // Calculate base setpoints (depend on d_12, which might be set by StateManager init or user)
        calculateHeatingSetpoint(); 
        calculateCoolingSetpoint_h24();
        
        // Calculate temperature conversions (depend on d_23, d_24, h_23)
        calculateTemperatures();
        
        // Calculate Ground Facing values (depend on d_20, d_21 from weather)
        calculateGroundFacing();
        
        // Calculate cooling dependents (depend on h_24, l_24)
        updateCoolingDependents(); 
        
        // Add calculation for m_23 here if needed

        // Update critical occupancy flag (depends on d_12)
        updateCriticalOccupancyFlag(); 
    }

    // --- New Calculation Functions --- 

    /**
     * Calculate Heating Setpoint (h_23) based on Occupancy Type (d_12)
     */
    function calculateHeatingSetpoint() {
        const referenceStandard = window.TEUI.StateManager?.getValue("d_13") || ""; // Get from S02
        const occupancyType = window.TEUI.StateManager?.getValue("d_12") || "";   // Get from S02
        let heatingSetpoint;

        // Check if the reference standard indicates a Passive House related standard
        if (referenceStandard.toUpperCase().includes("PH")) { // Case-insensitive check for "PH"
            heatingSetpoint = 18;
        } else {
            // Original logic if not a PH standard: 22°C for Residential or Care occupancies, else 18°C
            // Ensuring the occupancyType strings match those defined in Section02 d_12 options
            if (occupancyType === "C-Residential" || 
                occupancyType === "B2-Care and Treatment" || // Exact match for B2
                occupancyType === "B3-Detention Care & Treatment" || // Exact match for B3
                occupancyType.includes("Care")) { // Broader check for "Care" just in case of variations
            heatingSetpoint = 22;
            } else {
                heatingSetpoint = 18; // Default for other non-PH, non-Care/Residential occupancies
        }
        }
        
        setFieldValue("h_23", heatingSetpoint); // Update state and DOM via S03 local helper
        return heatingSetpoint; // Return value for potential chaining
    }

    /**
     * Calculate Base Cooling Setpoint (h_24) based on Occupancy Type (d_12)
     */
    function calculateCoolingSetpoint_h24() {
        const occupancyType = window.TEUI.StateManager?.getValue("d_12") || ""; // Direct StateManager access
        let coolingSetpoint = 24; // Default for all types currently
        
        // Add specific logic based on occupancy if needed in the future
        setFieldValue("h_24", coolingSetpoint); // Update state and DOM
        return coolingSetpoint; // Return value for potential chaining
    }

    /**
     * Determine the effective cooling setpoint considering the override
     */
    function determineEffectiveCoolingSetpoint() {
        const baseSetpoint_h24 = parseFloat(window.TEUI.StateManager?.getValue("h_24")) || 24; // Direct StateManager access
        const override_l24 = parseFloat(window.TEUI.StateManager?.getValue("l_24")) || 24; // Direct StateManager access
        
        // Use override only if it's a valid number and > 20
        if (!isNaN(override_l24) && override_l24 > 20) {
            return override_l24;
        } else {
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
        }
        
        // Update m_24 (Percentage calculation - Placeholder logic)
        // Add the actual calculation logic for m_24 here when known
        // Example placeholder:
        const someBaseValueForM24 = 100; // Replace with actual dependency value
        const m24Value = Math.round((effectiveSetpointC / 22) * 100); // Example calc
        setFieldValue("m_24", `${m24Value}%`);
    }

    /**
     * Update the critical occupancy flag display based on d_12
     */
    function updateCriticalOccupancyFlag() {
        const occupancyType = window.TEUI.StateManager?.getValue("d_12") || "";
        const sectionHeader = document.querySelector('#climateCalculations .section-header'); // Target the main header
        if (!sectionHeader) {
            console.warn("Section 3 header not found for critical flag.");
            return false;
        }

        let flagSpan = sectionHeader.querySelector('.critical-occupancy-header-flag');
        let isCritical = occupancyType.includes("Care");

        if (isCritical) {
            if (!flagSpan) {
                // Create the span if it doesn't exist
                flagSpan = document.createElement('span');
                flagSpan.className = 'critical-occupancy-header-flag';
                flagSpan.style.color = 'red';
                flagSpan.style.marginLeft = '15px'; // Keep spacing
                // Try to insert it after the status message or append to header
                const statusMsg = sectionHeader.querySelector('.section-status-message');
                if (statusMsg && statusMsg.parentNode === sectionHeader) {
                     statusMsg.parentNode.insertBefore(flagSpan, statusMsg.nextSibling);
                } else {
                    sectionHeader.appendChild(flagSpan); // Fallback: append to header
                }
            }
            flagSpan.textContent = "Critical Occupancy";
        } else {
            // If not critical, remove the span if it exists
            flagSpan?.remove();
        }

        // Store status on the header dataset for easier access by updateWeatherData
        sectionHeader.dataset.isCritical = isCritical;
         
        return isCritical; // Return the status for other functions
    }

    // --- End New Calculation Functions ---
    
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
            newCityDropdown.addEventListener('change', function() {
                const selectedCity = this.value;
                if (window.TEUI && window.TEUI.StateManager) {
                     window.TEUI.StateManager.setValue('h_19', selectedCity, 'user-modified');
                }
                updateWeatherData();
            });
        }
        
        // Present/Future toggle
        const presentFutureToggle = getElement(['[data-dropdown-id="dd_h_20"]']);
        if (presentFutureToggle) {
            presentFutureToggle.removeEventListener('change', updateWeatherData);
            presentFutureToggle.addEventListener('change', updateWeatherData);
        }
        
        // Weather data buttons
        ['showWeatherDataBtn', 'weatherDataBtn'].forEach(id => {
            const btn = document.getElementById(id);
            if (btn) {
                 btn.removeEventListener('click', showWeatherData); 
                 btn.addEventListener('click', showWeatherData);
            }
        });
        
        // Add handlers for ALL editable fields in this section (e.g., m_19, l_24)
        const sectionElement = document.getElementById('climateCalculations');
        if (sectionElement) {
            const editableFields = sectionElement.querySelectorAll('.editable.user-input');
            editableFields.forEach(field => {
                if (!field.hasEditableListeners) { // Add a flag to prevent duplicate listeners
                    field.setAttribute('contenteditable', 'true');
                    field.addEventListener('blur', handleEditableBlur); // Use the general blur handler
                    // Add the general keydown handler to prevent Enter newlines
                    field.addEventListener('keydown', function(e) { 
                        if (e.key === 'Enter') {
                            e.preventDefault();
                            e.stopPropagation(); 
                            this.blur();
                        }
                    });
                    field.hasEditableListeners = true; // Set the flag
                }
            });
        }
        
        // Initial update if province and city already selected
        if (provinceDropdown?.value && cityDropdown?.value) {
            updateWeatherData();
        }

        // --- StateManager Listeners --- 
        if (window.TEUI && window.TEUI.StateManager) {
            // Listener for d_12 (Occupancy) changes
            window.TEUI.StateManager.addListener('d_12', function(newOccupancyValue) {
                // When occupancy changes, re-evaluate the Jan Design Temp based on stored data
                const provinceValue = window.TEUI.StateManager?.getValue("d_19");
                const cityValue = window.TEUI.StateManager?.getValue("h_19");
                
                let isCritical = newOccupancyValue.includes("Care");
                
                // Update d_23 (January Design Temp) based on stored data
                if (provinceValue && cityValue) {
                    const locationData = TEUI?.ExcelLocationHandler?.getLocationData?.() || {};
                    const cityData = locationData[provinceValue]?.cities?.find(c => c.name === cityValue)?.data;
                    
                    if (cityData) {
                        // Use the stored 1% or 2.5% value based on isCritical
                        const janTempKey = isCritical ? 'January_1' : 'January_2_5';
                        const correctTemp = cityData[janTempKey] || cityData['January_2_5'] || '-24'; // Fallback
                        setFieldValue("d_23", correctTemp, 'derived'); // Update d_23 state and DOM
                    } else {
                         console.warn(`S03 d_12 listener: Could not find cityData for ${cityValue} to update Jan temp.`);
                         // If city data isn't loaded, maybe just update setpoints?
                    }
                } else {
                    console.warn("S03 d_12 listener: Province or City not set, cannot update Jan temp.");
                    // Fallback: Update d_23 based on a default assumption if needed
                    // setFieldValue("d_23", isCritical ? '-26' : '-24', 'derived');
                }
                
                // Always update setpoints and critical flag when occupancy changes
                calculateHeatingSetpoint();
                calculateCoolingSetpoint_h24();
                calculateTemperatures(); 
                updateCriticalOccupancyFlag();
                // NOTE: DO NOT call updateWeatherData() here. We only recalculate based on occupancy type change.
            });

            // Listener for h_24 (Calculated Cooling Setpoint) changes
            window.TEUI.StateManager.addListener('h_24', function(newValue) {
                updateCoolingDependents();
                calculateGroundFacing(); // Re-add call needed for GF CDD
            });

            // Listener for l_24 (Cooling Override) changes
            window.TEUI.StateManager.addListener('l_24', function(newValue) {
                 updateCoolingDependents();
                 calculateGroundFacing(); // Re-add call needed for GF CDD
            });

            // Listener for d_20 (HDD) changes to update j_19 (Climate Zone)
            window.TEUI.StateManager.addListener('d_20', function(newHddValue) {
                const climateZone = determineClimateZone(newHddValue);
                setFieldValue("j_19", climateZone, 'derived');
                // Also recalculate Ground Facing HDD (d_22) which depends on d_20
                calculateGroundFacing(); 
            });

            // Listener for h_21 (Capacitance Setting) changes
            window.TEUI.StateManager.addListener('h_21', function(newValue) {
                calculateAll(); // Recalculate everything as GF CDD changes
            });

            // Listener for m_19 (Cooling Days) changes
            window.TEUI.StateManager.addListener('m_19', function(newValue) {
                calculateAll(); // Recalculate everything as GF HDD and GF CDD change
            });

        } else {
             console.warn("Section 03: StateManager not found, listeners not added.");
        }
    }
    
    /**
     * Handle blur events on editable fields
     */
    function handleEditableBlur(event) {
        const fieldId = this.getAttribute('data-field-id');
        if (!fieldId) return;

        const newValue = this.textContent.trim();
        const numericValue = window.TEUI.parseNumeric(newValue, NaN); // Try parsing

        if (!isNaN(numericValue)) {
            // Format display for valid numbers
            const formatType = Number.isInteger(numericValue) ? 'integer' : 'number-2dp'; // Default format
            this.textContent = window.TEUI.formatNumber(numericValue, formatType);
            // Update StateManager
            if (window.TEUI.StateManager) {
                window.TEUI.StateManager.setValue(fieldId, numericValue.toString(), 'user-modified');
            }
            calculateAll(); // Recalculate after state update
        } else {
            // Revert to previous value if input is invalid
            const previousValue = window.TEUI.StateManager?.getValue(fieldId) || '0'; // Fallback to 0
            const prevNumericValue = window.TEUI.parseNumeric(previousValue, 0);
            const formatType = Number.isInteger(prevNumericValue) ? 'integer' : 'number-2dp';
            this.textContent = window.TEUI.formatNumber(prevNumericValue, formatType);
            console.warn(`Invalid input for ${fieldId}: ${newValue}. Reverted to ${this.textContent}.`);
        }
    }
    
    /**
     * Called when section is rendered
     */
    function onSectionRendered() {
        // --- Explicitly register default values --- 
        if (window.TEUI.StateManager) {
            // Ensure default elevation is in StateManager for other sections to read
            window.TEUI.StateManager.setValue('l_22', '80', 'default');
        } else {
            console.warn("Section 03: StateManager not available for default value registration.");
        }
        // -----------------------------------------

        // --- Set Initial Display Values --- 
        // Manually set initial display for setpoints based on known default d_12="A-Assembly"
        // This provides immediate visual feedback before StateManager might be fully ready.
        const initialHeatingEl = getElement(['[data-field-id="h_23"]']);
        if (initialHeatingEl) initialHeatingEl.textContent = window.TEUI.formatNumber(18, 'integer-nocomma');
        const initialCoolingEl = getElement(['[data-field-id="h_24"]']);
        if (initialCoolingEl) initialCoolingEl.textContent = window.TEUI.formatNumber(24, 'integer-nocomma');
        // The StateManager listeners will calculate and set the correct state later.
        // -------------------------------------

        // Ensure ExcelLocationHandler is ready
        if (TEUI?.ExcelLocationHandler?.getLocationData?.()) {
            initializeEventHandlers();
            // Trigger initial data load and calculations
            if (getElement(['[data-dropdown-id="dd_d_19"]'])?.value && getElement(['[data-dropdown-id="dd_h_19"]'])?.value) {
                updateWeatherData(); // Includes calculateAll() at the end
            } else {
                 calculateAll(); // Run calculations even if location not selected yet
            }
        } else {
            // ExcelLocationHandler not ready, wait for it
            document.addEventListener('location-data-ready', function handler() {
                initializeEventHandlers();
                 // Trigger initial data load and calculations
                if (getElement(['[data-dropdown-id="dd_d_19"]'])?.value && getElement(['[data-dropdown-id="dd_h_19"]'])?.value) {
                    updateWeatherData(); // Includes calculateAll() at the end
                } else {
                    calculateAll(); // Run calculations even if location not selected yet
                }
                // Remove listener after running once
                document.removeEventListener('location-data-ready', handler);
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