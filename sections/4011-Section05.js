/**
 * 4011-Section05.js
 * CO2e Emissions (Section 5) module for TEUI Calculator 4.011
 * 
 * Uses the consolidated declarative approach where field definitions
 * are integrated directly into the layout structure.
 */

// Ensure namespace exists
window.TEUI = window.TEUI || {};
window.TEUI.SectionModules = window.TEUI.SectionModules || {};

// Section 5: CO2e Emissions Module
window.TEUI.SectionModules.sect05 = (function() {
    //==========================================================================
    // CONSOLIDATED FIELD DEFINITIONS AND LAYOUT
    //==========================================================================
    
    // Define rows with integrated field definitions
    const sectionRows = {
        // ALWAYS PUT UNIT SUBHEADER FIRST - this ensures it appears at the top of the section
        "header": {
            id: "05-ID",
            rowId: "05-ID",
            label: "Emissions Units Header",
            cells: {
                c: { content: "C", classes: ["section-subheader"] },
                d: { content: "D", classes: ["section-subheader"] },
                e: { content: "E", classes: ["section-subheader"] },
                f: { content: "kgCO2e/m2", classes: ["section-subheader"] },
                g: { content: "G", classes: ["section-subheader"] },
                h: { content: "", classes: ["section-subheader", "spacer"] },
                i: { content: "kgCO2e/m2", classes: ["section-subheader"] },
                j: { content: "J", classes: ["section-subheader"] },
                k: { content: "K", classes: ["section-subheader"] },
                l: { content: "L", classes: ["section-subheader"] },
                m: { content: "M", classes: ["section-subheader"] },
                n: { content: "N", classes: ["section-subheader"] }
            }
        },
        
        // Row 38: E.1.2 GHGI Operational (B6) Emissions/yr
        "38": {
            id: "E.1.2",
            rowId: "E.1.2",
            label: "GHGI Operational (B6) Emissions/yr",
            cells: {
                c: { content: "GHGI Operational (B6) Emissions/yr", type: "label" },
                d: { 
                    fieldId: "d_38", 
                    type: "calculated", 
                    value: "0.00",
                    section: "emissions",
                },
                e: { content: "MT CO2e/yr" }, // Units
                f: { content: "", classes: ["label-prefix", "spacer"] },
                g: { 
                    fieldId: "g_38", 
                    type: "calculated", 
                    value: "0.00",
                    section: "emissions",
                },
                h: { content: "", classes: ["spacer"] },
                i: {
                    fieldId: "i_38",
                    type: "calculated",
                    value: "0.00",
                    section: "emissions",
                },
                j: { 
                    fieldId: "j_38", 
                    type: "calculated", 
                    value: "0.00",
                    section: "emissions",
                },
                k: { content: "(Lifetime Emissions)" },
                l: { content: "", classes: ["spacer"] },
                m: { 
                    fieldId: "m_38", 
                    type: "calculated", 
                    value: "N/A",
                    section: "emissions"
                }
            }
        },
        
        // Row 39: E.3.1 Typology-Based Carbon Intensity (A1-3)
        "39": {
            id: "E.3.1",
            rowId: "E.3.1",
            label: "Typology-Based Carbon Intensity (A1-3)",
            cells: {
                c: { content: "Typology-Based Carbon Intensity (A1-3)", type: "label" },
                d: { 
                    fieldId: "d_39", 
                    type: "dropdown", 
                    dropdownId: "dd_d_39", 
                    value: "Pt.3 Mass Timber",
                    section: "emissions",
                    options: [
                        { value: "Pt.9 Res. Stick Frame", name: "Pt.9 Res. Stick Frame" },
                        { value: "Pt.9 Small Mass Timber", name: "Pt.9 Small Mass Timber" },
                        { value: "Pt.3 Mass Timber", name: "Pt.3 Mass Timber" },
                        { value: "Pt.3 Concrete", name: "Pt.3 Concrete" },
                        { value: "Pt.3 Steel", name: "Pt.3 Steel" },
                        { value: "Pt.3 Office", name: "Pt.3 Office" },
                        { value: "Modelled Value", name: "Modelled Value" }
                    ]
                },
                e: { content: "", classes: ["spacer"] },
                f: { content: "E.3.2", classes: ["label-prefix"] },
                g: { content: "Typology-Based Cap (TGS4)", classes: ["label-main"] },
                h: { content: "", classes: ["spacer"] },
                i: {
                    fieldId: "i_39",
                    type: "calculated",
                    value: "350.00",
                    section: "emissions",
                },
                j: { content: "", classes: ["spacer"] },
                k: { content: "", classes: ["spacer"] },
                l: { 
                    fieldId: "l_39", 
                    type: "calculated", 
                    value: "0%",
                    section: "emissions",
                },
                m: { content: "✓", classes: ["checkmark"] }
            }
        },
        
        // Row 40: E.3.3 Total Embedded Carbon Emitted (A1-3)
        "40": {
            id: "E.3.3",
            rowId: "E.3.3",
            label: "Total Embedded Carbon Emitted (A1-3)",
            cells: {
                c: { content: "Total Embedded Carbon Emitted (A1-3)", type: "label" },
                d: { 
                    fieldId: "d_40", 
                    type: "calculated", 
                    value: "0.00",
                    section: "emissions",
                },
                e: { content: "MT CO2e/Service Life" }, // Units
                f: { content: "S.4", classes: ["label-prefix"] },
                g: { content: "Embodied Carbon Target", classes: ["label-main"] },
                h: { content: "", classes: ["spacer"] },
                i: {
                    fieldId: "i_40",
                    type: "calculated",
                    value: "0.00",
                    section: "emissions",
                },
                j: { content: "", classes: ["spacer"] },
                k: { content: "", classes: ["spacer"] },
                l: { 
                    fieldId: "l_40", 
                    type: "calculated", 
                    value: "0%",
                    section: "emissions",
                },
                m: { content: "✓", classes: ["checkmark"] }
            }
        },
        
        // Row 41: E.1.3 Lifetime Avoided (B6) Emissions
        "41": {
            id: "E.1.3",
            rowId: "E.1.3",
            label: "Lifetime Avoided (B6) Emissions",
            cells: {
                c: { content: "Lifetime Avoided (B6) Emissions", type: "label" },
                d: { 
                    fieldId: "d_41", 
                    type: "calculated", 
                    value: "0.00",
                    section: "emissions",
                },
                e: { content: "MT CO2e" }, // Units
                f: { content: "E.3.4", classes: ["label-prefix"] },
                g: { content: "Modelled Value (A1-3)", classes: ["label-main"] },
                h: { content: "", classes: ["spacer"] },
                i: {
                    fieldId: "i_41",
                    type: "number",
                    value: "345.82",
                    section: "emissions",
                },
                j: { content: "", classes: ["spacer"] },
                k: { content: "", classes: ["spacer"] },
                l: { 
                    fieldId: "l_41", 
                    type: "calculated", 
                    value: "0%",
                    section: "emissions",
                },
                m: { content: "✓", classes: ["checkmark"] }
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
                        label: cell.content || row.label,
                        defaultValue: cell.value || "",
                        section: cell.section || "emissions"
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
                
                // Remove field-specific properties that aren't needed for rendering
                delete cell.getOptions;
                delete cell.section;
                delete cell.dependencies;
                
                rowDef.cells.push(cell);
            } else {
                // Add empty cell if not defined
                rowDef.cells.push({});
            }
        });
        
        return rowDef;
    }
    
    //==========================================================================
    // EVENT HANDLING AND CALCULATIONS
    //==========================================================================
    
    /**
     * Calculate the typology-based cap based on selected typology
     */
    function calculateTypologyBasedCap(typology) {
        // Logic based on provided formula:
        // =IF(D39="Pt.9 Res. Stick Frame",125,IF(D39="Pt.9 Small Mass Timber",250,IF(D39="Pt.3 Mass Timber",350,IF(D39="Pt.3 Concrete",550,IF(D39="Pt.3 Steel",650,IF(D39="Pt.3 Office",600,IF(D39="Modelled Value",I$41,"Pls. Select a Value")))))))

        if (typology === "Pt.9 Res. Stick Frame") {
            return 125;
        } else if (typology === "Pt.9 Small Mass Timber") {
            return 250;
        } else if (typology === "Pt.3 Mass Timber") {
            return 350;
        } else if (typology === "Pt.3 Concrete") {
            return 550;
        } else if (typology === "Pt.3 Steel") {
            return 650;
        } else if (typology === "Pt.3 Office") {
            return 600;
        } else if (typology === "Modelled Value") {
            // If "Modelled Value" is selected, use the value from i_41
            const modelledValue = parseFloat(getFieldValue("i_41")) || 0; // Fetch current value of i_41
            return modelledValue;
        } else {
            // Default or if typology is not recognized (e.g., "Pls. Select a Value")
            return 0; // Or handle as appropriate, e.g., return null or a default cap
        }
    }
    
    /**
     * Calculate percentage of target achieved
     */
    function calculatePercentages() {
        // Get values
        const typologyCap = parseFloat(getFieldValue("i_39")) || 350;
        const carbonTargetValue = getFieldValue("i_40");
        const totalEmitted = parseFloat(getFieldValue("d_40")) || 390.82;
        const modelledValue = parseFloat(getFieldValue("i_41")) || 345.82;
        
        // Handle special case when carbon target is 'N/A'
        if (carbonTargetValue === "N/A") {
            // When carbon standard is "Not Reported", we don't show percentages
            setCalculatedValue("l_39", "N/A");
            setCalculatedValue("l_40", "N/A");
            setCalculatedValue("l_41", "N/A");
            return;
        }
        
        // Convert to number for calculations
        const carbonTarget = parseFloat(carbonTargetValue) || 345.82;
        
        // Calculate percentages
        const typologyPercent = Math.round((carbonTarget / typologyCap) * 100);
        const targetPercent = Math.round((carbonTarget / totalEmitted) * 100);
        const modelledPercent = Math.round((modelledValue / carbonTarget) * 100);
        
        // Set calculated values
        setCalculatedValue("l_39", `${typologyPercent}%`);
        setCalculatedValue("l_40", `${targetPercent}%`);
        setCalculatedValue("l_41", `${modelledPercent}%`);
    }
    
    /**
     * Calculate GHGI operational values
     */
    function calculateGHGI() {
        // Get values - retrieve all values at maximum available precision
        const d_14_value = getFieldValue("d_14") || "Utility Bills"; // Determine calculation method
        const g_32_value = parseFloat(getFieldValue("g_32")); // Utility Bills emissions
        const k_32_value = parseFloat(getFieldValue("k_32")); // Targeted Use emissions
        const conditionedArea = parseFloat(getFieldValue("i_15")) || 1427.20;
        
        // Default values only if not available from StateManager - maintaining precise defaults
        const g_32_default = 6779.84;
        const k_32_default = 6771.048; // Using precise value from Excel
        
        // Calculate MT CO2e/yr based on selection in d_14 with maximum precision
        const ghgiMT = (d_14_value === "Utility Bills") ? 
            (g_32_value || g_32_default) / 1000 : // Convert kg to metric tons for Utility Bills
            (k_32_value || k_32_default) / 1000;  // Convert kg to metric tons for Targeted Use
        
        // Calculate kgCO2e/m² using the same emissions value chosen above
        const emissionsKg = (d_14_value === "Utility Bills") ? 
            (g_32_value || g_32_default) : 
            (k_32_value || k_32_default);
        const ghgiPerM2 = emissionsKg / conditionedArea;
        
        // Maintain full floating point precision in StateManager for calculations
        // Only format for display in the DOM
        setCalculatedValue("d_38", ghgiMT);
        setCalculatedValue("g_38", ghgiPerM2);
        
        // Calculate lifetime emissions with maximum precision
        const serviceLife = parseFloat(getFieldValue("h_13")) || 50;
        const lifetimeEmissions = ghgiPerM2 * serviceLife;
        setCalculatedValue("j_38", lifetimeEmissions);
    }
    
    /**
     * Calculate lifetime avoided emissions
     */
    function calculateLifetimeAvoided() {
        // Get values
        const lifetimeEmissions = parseFloat(getFieldValue("j_38")) || 237.52;
        const embeddedCarbon = parseFloat(getFieldValue("d_40")) || 390.82;
        
        if (lifetimeEmissions && embeddedCarbon) {
            // Reference lifetime emissions would be much higher
            const referenceLifetimeEmissions = lifetimeEmissions * 5; // Assumption
            
            // Calculate avoided emissions
            const avoidedEmissions = referenceLifetimeEmissions - lifetimeEmissions;
            
            // Set calculated value
            setCalculatedValue("d_41", avoidedEmissions.toFixed(2));
        }
    }
    
    /**
     * Calculate Lifetime Operational kgCO2e/m2 (i_38 = g_38 * h_13)
     */
    function calculate_i_38() {
        const g_38_value = parseFloat(getFieldValue("g_38")) || 0; // Annual GHGI kgCO2e/m2
        const h_13_value = parseFloat(getFieldValue("h_13")) || 50; // Service Life (yrs)

        const i_38_result = g_38_value * h_13_value;
        setCalculatedValue("i_38", i_38_result.toFixed(2));
    }
    
    /**
     * Calculate Target kgCO2e/m2 (i_40 = d_16)
     */
    function calculate_i_40() {
        // Get the embodied carbon target
        const d_16_value = getFieldValue("d_16");
        
        // Special handling for 'N/A'
        if (d_16_value === "N/A") {
            setCalculatedValue("i_40", "N/A");
        } else {
            // Regular handling for numeric values
            const numericValue = parseFloat(d_16_value) || 0;
            setCalculatedValue("i_40", numericValue.toFixed(2));
        }
    }

    /**
     * Calculate Total Embedded MT CO2e (d_40 = i_41 * d_106 / 1000)
     */
    function calculate_d_40() {
        const i_41_value = parseFloat(getFieldValue("i_41")) || 0; // Modelled Value kgCO2e/m2
        const d_106_value = parseFloat(getFieldValue("d_106")) || 0; // Total Floor Area m2

        const d_40_result = (i_41_value * d_106_value) / 1000; // Result in MT CO2e
        setCalculatedValue("d_40", d_40_result.toFixed(2));
    }
    
    /**
     * Calculate Lifetime Avoided MT CO2e (d_41 = (REFERENCE_D38 - d_38) * h_13)
     * Uses a placeholder for the reference value until DeepState is implemented.
     */
    function calculate_d_41() {
        // Get the placeholder reference value from StateManager
        // TODO: Replace this fetch with the actual DeepState lookup based on d_13
        const reference_d_38_placeholder = parseFloat(getFieldValue("ref_d_38")) || 47.9209; // Default to 47.9209 until reference model is implemented

        const d_38_value = parseFloat(getFieldValue("d_38")) || 0; // Actual/Target MT CO2e/yr (from REPORT)
        const h_13_value = parseFloat(getFieldValue("h_13")) || 50; // Service Life (yrs)

        // Calculate Avoided Emissions with maximum precision through the calculation chain
        const d_41_result = (reference_d_38_placeholder - d_38_value) * h_13_value;
        
        // Apply formatting only at the final display step - maintaining calculation precision
        setCalculatedValue("d_41", d_41_result.toFixed(2));
    }
    
    /**
     * Format a number for display with thousand separators and proper decimals
     */
    function formatNumber(value) {
        // Ensure value is a number
        const numValue = parseFloat(value);
        
        // Handle invalid values
        if (isNaN(numValue)) {
            return "0.00";
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
    }
    
    /**
     * Helper function to get a field value
     */
    function getFieldValue(fieldId) {
        // Try to get from StateManager first
        if (window.TEUI.StateManager && window.TEUI.StateManager.getValue) {
            const value = window.TEUI.StateManager.getValue(fieldId);
            if (value !== null && value !== undefined) {
                return value;
            }
        }
        
        // Fall back to DOM
        const element = document.querySelector(`[data-field-id="${fieldId}"]`);
        if (element) {
            if (element.tagName === 'SELECT' || element.tagName === 'INPUT') {
                return element.value;
            } else {
                return element.textContent;
            }
        }
        
        return null;
    }
    
    /**
     * Helper function to set a calculated field value
     */
    function setCalculatedValue(fieldId, value) {
        // Store raw value in state manager
        if (window.TEUI.StateManager && window.TEUI.StateManager.setValue) {
            window.TEUI.StateManager.setValue(fieldId, value, "calculated");
        }
        
        // Special handling for 'N/A' values
        const formattedValue = value === "N/A" ? "N/A" : formatNumber(value);
        
        // Update DOM with formatted value
        const element = document.querySelector(`[data-field-id="${fieldId}"]`);
        if (element) {
            if (element.tagName === 'SELECT' || element.tagName === 'INPUT') {
                element.value = value;
            } else {
                element.textContent = formattedValue;
            }
        }
    }
    
    /**
     * Calculate all values for this section
     */
    function calculateAll() {
        // Calculate typology-based cap based on selected typology
        const typology = getFieldValue("d_39");
        if (typology) {
            const cap = calculateTypologyBasedCap(typology);
            // Use toFixed to ensure it's stored as a number string if needed, adjust decimals as necessary
            setCalculatedValue("i_39", cap.toFixed(2));
        }
        
        // Calculate GHGI values (d_38, g_38) (Needs implementation based on review)
        calculateGHGI();
        
        // Calculate i_38 (depends on g_38 and h_13)
        calculate_i_38();
        
        // Calculate i_40 (depends on d_16)
        calculate_i_40();

        // Calculate d_40 (depends on i_41, d_106)
        calculate_d_40();
        
        // Calculate lifetime avoided emissions (Uses placeholder for REFERENCE!D38)
        calculate_d_41();
        
        // Calculate percentages (must be done after other calculations)
        calculatePercentages();
    }
    
    /**
     * Initialize all event handlers for this section
     */
    function initializeEventHandlers() {
        // Typology dropdown change handler
        const typologyDropdown = document.querySelector('[data-field-id="d_39"], [data-dropdown-id="dd_d_39"]'); // Check both potential selectors
        if (typologyDropdown) {
            typologyDropdown.addEventListener('change', function(e) {
                const typology = e.target.value;
                const cap = calculateTypologyBasedCap(typology);
                setCalculatedValue("i_39", cap.toFixed(2)); // Update i_39 when d_39 changes
                calculatePercentages(); // Recalculate percentages that depend on i_39
            });
        }
        
        // Add listener for i_41 changes IF Modelled Value is selected in d_39
        if (window.TEUI.StateManager) {
            window.TEUI.StateManager.addListener("i_41", function(newValue) {
                const currentTypology = getFieldValue("d_39");
                if (currentTypology === "Modelled Value") {
                    const cap = parseFloat(newValue) || 0;
                    setCalculatedValue("i_39", cap.toFixed(2)); // Update i_39 directly
                    calculatePercentages(); // Recalculate percentages
                }
            });
            
            // Listen for changes in related fields from other sections (PLACEHOLDERS - Need Update)
            // TODO: Add listeners for d_14, g_32, k_32, h_15, h_13, d_106, REFERENCE!D38, T40
            
            // Listen for changes to service life (h_13 affects i_38 and d_41)
            window.TEUI.StateManager.addListener("h_13", function() {
                calculate_i_38();
                calculate_d_41();
                calculatePercentages(); // Percentages might depend on lifetime values
            });
            
            // Listen for changes affecting d_38 (which then affects d_41)
            // Note: d_38 depends on d_14, g_32, k_32. g_38 depends on d_14, g_32, k_32, h_15.
            // We need listeners for all unique dependencies affecting d_38 and g_38.
            const ghgi_dependencies = ["d_14", "g_32", "k_32", "h_15"]; // Inputs for d_38/g_38
            ghgi_dependencies.forEach(depId => {
                window.TEUI.StateManager.addListener(depId, function() {
                    calculateGHGI(); // Recalculates d_38 and g_38
                    calculate_i_38(); // Recalculates i_38 (depends on g_38)
                    calculate_d_41(); // Recalculates d_41 (depends on d_38)
                    calculatePercentages(); // Recalculate percentages
                });
            });
            
            // Listen for changes to embodied carbon target (d_16 affects i_40)
            window.TEUI.StateManager.addListener("d_16", function() {
                calculate_i_40(); // Call the dedicated function
                calculatePercentages(); // Recalculate percentages that depend on i_40
            });

            // Listen for changes to modelled value (i_41 affects d_40)
            window.TEUI.StateManager.addListener("i_41", function(newValue) {
                // Update i_39 if typology is 'Modelled Value'
                const currentTypology = getFieldValue("d_39");
                if (currentTypology === "Modelled Value") {
                    const cap = parseFloat(newValue) || 0;
                    setCalculatedValue("i_39", cap.toFixed(2));
                }
                // Recalculate d_40 and percentages
                calculate_d_40();
                calculatePercentages();
            });

            // Listen for changes to total floor area (d_106 affects d_40)
            window.TEUI.StateManager.addListener("d_106", function() {
                calculate_d_40();
                calculatePercentages(); // Recalculate percentages that depend on d_40
            });
        }
    }
    
    /**
     * Called when the section is rendered
     * This is a good place to initialize values and run initial calculations
     */
    function onSectionRendered() {
        // Initialize event handlers
        initializeEventHandlers();
        
        // Run initial calculations
        calculateAll();
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
        
        // Section-specific utility functions - OPTIONAL
        calculateAll: calculateAll,
        calculateGHGI: calculateGHGI,
        calculate_i_38: calculate_i_38,
        calculate_i_40: calculate_i_40,
        calculate_d_40: calculate_d_40,
        calculate_d_41: calculate_d_41,
        calculatePercentages: calculatePercentages,
    };
})();

// Initialize when the section is rendered
document.addEventListener('teui-section-rendered', function(event) {
    if (event.detail?.sectionId === 'emissions') {
        setTimeout(() => window.TEUI.SectionModules.sect05.onSectionRendered(), 100);
    }
});

// Fallback to rendering complete event
document.addEventListener('teui-rendering-complete', function() {
    setTimeout(() => {
        if (document.getElementById('emissions')) {
            window.TEUI.SectionModules.sect05.onSectionRendered();
        }
    }, 300);
});