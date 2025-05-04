/**
 * 4011-Section07.js
 * Water Use (Section 7) module for TEUI Calculator 4.011
 * 
 * Uses the consolidated declarative approach where field definitions
 * are integrated directly into the layout structure.
 */

// Ensure namespace exists
window.TEUI = window.TEUI || {};
window.TEUI.SectionModules = window.TEUI.SectionModules || {};

// Create section-specific namespace for global references
window.TEUI.sect07 = window.TEUI.sect07 || {};
window.TEUI.sect07.initialized = false;
window.TEUI.sect07.userInteracted = false;

// Section 7: Water Use Module
window.TEUI.SectionModules.sect07 = (function() {
    //==========================================================================
    // CONSOLIDATED FIELD DEFINITIONS AND LAYOUT
    //==========================================================================
    
    // Define rows with integrated field definitions
    const sectionRows = {
        // UNIT SUBHEADER - MUST COME FIRST
        "header": {
            id: "S07-ID",
            rowId: "S07-ID",
            label: "Water Use Units",
            cells: {
                c: { content: "C", classes: ["section-subheader"] },
                d: { content: "Targeted", classes: ["section-subheader"] },
                e: { content: "E", classes: ["section-subheader"] },
                f: { content: "F", classes: ["section-subheader"] },
                g: { content: "G", classes: ["section-subheader"] },
                h: { content: "litres/pp/day", classes: ["section-subheader"] },
                i: { content: "litres/yr", classes: ["section-subheader"] },
                j: { content: "Annual kWh/yr", classes: ["section-subheader"] },
                k: { content: "Annual ekWh/yr", classes: ["section-subheader"] },
                l: { content: "K", classes: ["section-subheader"] },
                m: { content: "Ref", classes: ["section-subheader"] },
                n: { content: "M", classes: ["section-subheader"] }
            }
        },

        // Row 49: W.1.0 Total Hot+Cold Water Use (Method)
        "49": {
            id: "W.1.0",
            rowId: "W.1.0",
            label: "Total Hot+Cold Water Use (Method)",
            cells: {
                c: { label: "Total Hot+Cold Water Use (Method)" },
                d: {
                    fieldId: "d_49",
                    type: "dropdown",
                    dropdownId: "dd_d_49",
                    value: "User Defined",
                    section: "waterUse",
                    classes: ["user-input"],
                    options: [
                        { value: "User Defined", name: "User Defined" },
                        { value: "By Engineer", name: "By Engineer" },
                        { value: "PHPP Method", name: "PHPP Method" },
                        { value: "NBC Method", name: "NBC Method" },
                        { value: "OBC Method", name: "OBC Method" },
                        { value: "Luxury", name: "Luxury" }
                    ]
                },
                e: {
                    fieldId: "e_49",
                    type: "editable",
                    value: "40.00",
                    section: "waterUse",
                    classes: ["user-input", "editable"]
                },
                f: { content: "lpppd (User Defined)", classes: ["text-left"] },
                h: {
                    fieldId: "h_49",
                    type: "calculated",
                    value: "40.00",
                    section: "waterUse",
                    dependencies: ["d_49", "e_49", "d_63"]
                },
                i: {
                    fieldId: "i_49",
                    type: "calculated",
                    value: "1,839,600",
                    section: "waterUse",
                    dependencies: ["h_49", "d_63"]
                },
                m: { content: "✓", classes: ["checkmark"] },
                n: {
                    fieldId: "n_49",
                    type: "calculated",
                    value: "15%",
                    section: "waterUse",
                    dependencies: ["i_49"]
                }
            }
        },

        // Row 50: W.1.2 DHW Use (40% of W.1.0)
        "50": {
            id: "W.1.2",
            rowId: "W.1.2",
            label: "DHW Use (40% of W.1.0)",
            cells: {
                c: { label: "DHW Use (40% of W.1.0)" },
                d: {
                    fieldId: "d_50",
                    type: "editable",
                    value: "10,000.00",
                    section: "waterUse",
                    classes: ["user-input", "editable"]
                },
                e: { content: "kWh/yr", classes: ["text-left"] },
                f: { content: "IF By Engineer", classes: ["text-left"] },
                h: {
                    fieldId: "h_50",
                    type: "calculated",
                    value: "16.00",
                    section: "waterUse",
                    dependencies: ["h_49"]
                },
                i: {
                    fieldId: "i_50",
                    type: "calculated",
                    value: "735,840",
                    section: "waterUse",
                    dependencies: ["h_50", "d_63"]
                },
                j: {
                    fieldId: "j_50",
                    type: "calculated",
                    value: "38,484.43",
                    section: "waterUse",
                    dependencies: ["i_50", "d_51", "d_52"]
                },
                m: { content: "✓", classes: ["checkmark"] },
                n: {
                    fieldId: "n_50",
                    type: "calculated",
                    value: "15%",
                    section: "waterUse"
                }
            }
        },

        // Row 51: W.3.1 DHW or SHW Energy Source
        "51": {
            id: "W.3.1",
            rowId: "W.3.1",
            label: "DHW or SHW Energy Source",
            cells: {
                c: { label: "DHW or SHW Energy Source" },
                d: {
                    fieldId: "d_51",
                    type: "dropdown",
                    dropdownId: "dd_d_51",
                    value: "Heatpump",
                    section: "waterUse",
                    classes: ["user-input"],
                    options: [
                        { value: "Heatpump", name: "Heatpump" },
                        { value: "Gas", name: "Gas" },
                        { value: "Oil", name: "Oil" },
                        { value: "Electric", name: "Electric" }
                    ]
                },
                e: {
                    fieldId: "e_51",
                    type: "calculated",
                    value: "0.00",
                    section: "waterUse",
                    dependencies: ["d_51", "j_52"]
                },
                f: { content: "Gas m³/yr", classes: ["text-left"] },
                g: { content: "W.3.2", classes: ["text-left"] },
                h: { content: "Net Thermal Demand", classes: ["text-left"] },
                j: {
                    fieldId: "j_51",
                    type: "calculated",
                    value: "12,828.14",
                    section: "waterUse",
                    dependencies: ["j_50"]
                },
                k: {
                    fieldId: "k_51",
                    type: "calculated",
                    value: "12,828.14",
                    section: "waterUse",
                    dependencies: ["j_51", "d_51", "d_52"]
                },
                l: { content: "W.3.3 Net Elect. Demand", classes: ["text-left"] }
            }
        },

        // Row 52: W.4 DHW or SHW Efficiency Factor (EF)
        "52": {
            id: "W.4",
            rowId: "W.4",
            label: "DHW or SHW Efficiency Factor (EF)",
            cells: {
                c: { label: "DHW or SHW Efficiency Factor (EF)" },
                d: {
                    fieldId: "d_52",
                    type: "percentage",
                    value: "300",
                    min: 50,
                    max: 400,
                    step: 2,
                    section: "waterUse",
                    classes: ["user-input"]
                },
                e: {
                    fieldId: "e_52",
                    type: "calculated",
                    value: "3.00",
                    section: "waterUse",
                    dependencies: ["d_52"]
                },
                f: { content: "COPdhw", classes: ["text-left"] },
                g: { content: "W.5.2", classes: ["text-left"] },
                h: { content: "Net Demand-Recovered", classes: ["text-left"] }, // formerly (W2DN)
                j: {
                    fieldId: "j_52",
                    type: "calculated",
                    value: "12,828.14",
                    section: "waterUse",
                    dependencies: ["j_51", "e_53"]
                },
                m: { content: "✓", classes: ["checkmark"] },
                n: {
                    fieldId: "n_52",
                    type: "calculated",
                    value: "333%",
                    section: "waterUse"
                }
            }
        },

        // Row 53: W.5.1 Drain Water Heat Recovery Efficiency
        "53": {
            id: "W.5.1",
            rowId: "W.5.1",
            label: "Drain Water Heat Recovery Efficiency",
            cells: {
                c: { label: "Drain Water Heat Recovery Efficiency" },
                d: {
                    fieldId: "d_53",
                    type: "percentage",
                    value: "0",
                    min: 0,
                    max: 70,
                    step: 1,
                    section: "waterUse",
                    classes: ["user-input"]
                },
                e: {
                    fieldId: "e_53",
                    type: "calculated",
                    value: "0.00",
                    section: "waterUse",
                    dependencies: ["d_53", "j_51"]
                },
                f: { content: "kWh/yr", classes: ["text-left"] },
                g: { content: "W.5.3", classes: ["text-left"] },
                h: { content: "(W.2.W) SHW Wasted", classes: ["text-left"] },
                j: {
                    fieldId: "j_53",
                    type: "calculated",
                    value: "12,828.14",
                    section: "waterUse",
                    dependencies: ["j_51", "e_53"]
                },
                m: { content: "!", classes: ["warning"] },
                n: {
                    fieldId: "n_53",
                    type: "calculated",
                    value: "0%",
                    section: "waterUse"
                }
            }
        },

        // Row 54: W.6.1 System Losses (% → W.1.3 Eqpt Gains)
        "54": {
            id: "W.6.1",
            rowId: "W.6.1",
            label: "System Losses (% → W.1.3 Eqpt Gains)",
            cells: {
                c: { label: "System Losses (% → W.1.3 Eqpt Gains)" },
                d: {
                    fieldId: "d_54",
                    type: "calculated",
                    value: "0.00",
                    section: "waterUse",
                    dependencies: ["d_51", "d_52", "j_51", "d_49", "j_50"]
                },
                f: { content: "kWh/yr", classes: ["text-left"] },
                g: { content: "W.X", classes: ["text-left"] },
                h: { content: "Exhaust (if Gas or Oil)", classes: ["text-left"] },
                i: { }, // Empty cell for alignment
                j: {
                    fieldId: "k_54",
                    type: "calculated",
                    value: "0.00",
                    section: "waterUse",
                    dependencies: ["d_51", "j_51", "j_52", "d_52"]
                },
                k: {
                    fieldId: "l_54",
                    type: "calculated",
                    value: "0.00",
                    section: "waterUse",
                    dependencies: ["d_51", "j_52", "d_53", "d_52"]
                },
                l: { content: "W.3.4 Net Oil Demand Ltrs", classes: ["text-left"] }
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
                        section: cell.section || "waterUse"
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
    
    /**
     * Calculate water use based on method and occupants
     */
    function calculateWaterUse() {
        // Get values with full precision
        const method = getFieldValue("d_49");
        const userDefinedValue = getNumericValue("e_49");
        const occupants = getNumericValue("d_63");
        
        let litersPerPersonDay = 0;
        
        // Determine water use based on selected method
        switch(method) {
            case "User Defined":
                litersPerPersonDay = userDefinedValue;
                break;
            case "By Engineer":
                // Use the value from d_50 to calculate backwards using exact Excel formula
                const engineerValue = getNumericValue("d_50");
                const waterHeatFactor = 0.0524; // kWh per liter for temp rise (from Excel)
                litersPerPersonDay = (engineerValue / 365 / waterHeatFactor / occupants) / 0.4;
                break;
            case "PHPP Method":
                litersPerPersonDay = 62.5; // Standard PHPP value
                break;
            case "NBC Method":
                litersPerPersonDay = 220; // Standard NBC value
                break;
            case "OBC Method":
                litersPerPersonDay = 275; // Standard OBC value
                break;
            case "Luxury":
                litersPerPersonDay = 400; // Luxury water use
                break;
            default:
                litersPerPersonDay = 40; // Default value
        }
        
        // Store raw values in StateManager
        setCalculatedValue("h_49", litersPerPersonDay);
        
        // Calculate total annual water use (liters/year)
        const annualWaterUse = litersPerPersonDay * occupants * 365;
        setCalculatedValue("i_49", annualWaterUse);
        
        // Hot water is exactly 40% of total water use (from Excel)
        const hotWaterPercentage = 0.4;
        const hotWaterLitersPerDay = litersPerPersonDay * hotWaterPercentage;
        setCalculatedValue("h_50", hotWaterLitersPerDay);
        
        // Calculate hot water annual volume
        const hotWaterAnnualLiters = hotWaterLitersPerDay * occupants * 365;
        setCalculatedValue("i_50", hotWaterAnnualLiters);
        
        // Calculate hot water energy demand (kWh/yr) using exact Excel formula
        let hotWaterEnergyDemand = 0;
        if (method === "By Engineer") {
            // If specified by engineer, use provided value from d_50 (updated)
            hotWaterEnergyDemand = getNumericValue("d_50"); 
        } else {
            // Otherwise use formula: H50*D63*0.0523*365
            hotWaterEnergyDemand = hotWaterLitersPerDay * occupants * 0.0523 * 365;
        }
        
        setCalculatedValue("j_50", hotWaterEnergyDemand);
        
        // Calculate reference percentages
        // These should compare to standard values from Excel
        const waterUseReference = 275; // OBC standard value
        const waterUsePercent = Math.round((litersPerPersonDay / waterUseReference) * 100);
        setCalculatedValue("n_49", `${waterUsePercent}%`);
        
        const dhwUseReference = 110; // From Excel reference
        const dhwUsePercent = Math.round((hotWaterLitersPerDay / dhwUseReference) * 100);
        setCalculatedValue("n_50", `${dhwUsePercent}%`);
        
        // Return calculated values for use in other calculations
        return {
            litersPerPersonDay,
            annualWaterUse,
            hotWaterLitersPerDay,
            hotWaterAnnualLiters,
            hotWaterEnergyDemand
        };
    }
    
    /**
     * Calculate heating system parameters based on water use and system type
     */
    function calculateHeatingSystem() {
        // Get energy demand from prior calculation using type-safe approach
        const energyDemand_j50 = getNumericValue("j_50"); // Gross hot water energy demand
        
        // Get system type and efficiency
        const systemType = getFieldValue("d_51");
        const efficiencyInput_d52 = getFieldValue("d_52"); // Raw input (e.g., "90.00")
        
        // Convert efficiency input (percentage number) to decimal factor
        let efficiency = 1.0; // Default value
        if (efficiencyInput_d52) {
            // Directly parse the number, assuming it represents a percentage
            const parsedEfficiency = parseFloat(efficiencyInput_d52.toString().replace(/,/g, '')); 
            if (!isNaN(parsedEfficiency)) {
                efficiency = parsedEfficiency / 100;
            }
        }
        
        // Set COP value (e_52)
        setCalculatedValue("e_52", efficiency); 
        
        // Calculate Net Thermal Demand (j_51) - EXCEL: =J50/D52
        const netThermalDemand_j_51 = efficiency !== 0 ? energyDemand_j50 / efficiency : 0;
        setCalculatedValue("j_51", netThermalDemand_j_51);
        
        // Handle drain water heat recovery
        const recoveryOption_d53 = getFieldValue("d_53");
        let recoveryPercent = 0;
        if (recoveryOption_d53) {
            // Slider provides a numeric value directly (e.g., 25), convert to decimal
            const parsedRecovery = parseFloat(recoveryOption_d53);
            if (!isNaN(parsedRecovery)) {
                recoveryPercent = parsedRecovery / 100;
            }
        }
        
        // Calculate energy recovered (e_53) - EXCEL: =J51*D53
        const energyRecovered_e53 = netThermalDemand_j_51 * recoveryPercent;
        setCalculatedValue("e_53", energyRecovered_e53);
        
        // Calculate net demand after recovery (j_52 & j_53) - EXCEL: =J51-E53
        const netDemandAfterRecovery_j52_j53 = netThermalDemand_j_51 - energyRecovered_e53;
        setCalculatedValue("j_52", netDemandAfterRecovery_j52_j53);
        setCalculatedValue("j_53", netDemandAfterRecovery_j52_j53); // SHW Wasted is same as net demand
        
        // Define netDemand for clarity in subsequent calculations (this is j_52/j_53)
        const netDemand = netDemandAfterRecovery_j52_j53; 

        // Calculate final energy consumption (k_51 - Sticking with JS logic) & fuel volumes (e_51, l_54 - OK)
        let finalEnergy = 0;
        let gasVolume = 0;
        let oilVolume = 0;
        
        switch(systemType) {
            case "Heatpump":
                finalEnergy = efficiency !== 0 ? netDemand / efficiency : netDemand; // Avoid division by zero
                break;
            case "Electric":
                finalEnergy = netDemand;
                break;
            case "Gas":
                const gasEfficiency = efficiency || 0.9; // Fallback to 90%
                finalEnergy = gasEfficiency !== 0 ? netDemand / gasEfficiency : netDemand;
                gasVolume = gasEfficiency !== 0 ? finalEnergy / 10.33 : 0; // kWh per m³ of natural gas
                setCalculatedValue("e_51", gasVolume);
                break;
            case "Oil":
                const oilEfficiency = efficiency || 0.82; // Fallback to 82%
                finalEnergy = oilEfficiency !== 0 ? netDemand / oilEfficiency : netDemand;
                oilVolume = oilEfficiency !== 0 ? finalEnergy / (36.72 * 0.2777778) : 0; // kWh per liter of oil
                setCalculatedValue("l_54", oilVolume);
                break;
        }
        
        // Update net electrical demand (k_51) - Using EXACT Excel formula: =IF(OR(D51="Gas", D51="Oil"), 0, J52)
        let netElectricalDemand_k51 = 0;
        if (systemType !== "Gas" && systemType !== "Oil") {
            netElectricalDemand_k51 = netDemand; // Use netDemand (which is j_52)
        }
        setCalculatedValue("k_51", netElectricalDemand_k51);
        
        // Calculate System Losses (d_54) - EXCEL: =IF(D52>1, 0, IF(D49="PHPP Method", J50*0.25, J50*0.1))
        let systemLosses_d54 = 0;
        const waterUseMethod_d49 = getFieldValue("d_49");
        if (efficiency <= 1) { // Check if D52 (efficiency) is NOT > 1 (i.e., not a heat pump)
            if (waterUseMethod_d49 === "PHPP Method") {
                systemLosses_d54 = energyDemand_j50 * 0.25;
            } else {
                systemLosses_d54 = energyDemand_j50 * 0.1;
            }
        }
        setCalculatedValue("d_54", systemLosses_d54);
        
        // Update metrics for Gas and Oil (k_54 - Sticking with JS logic)
        if (systemType === "Gas" || systemType === "Oil") {
            const exhaustValue = finalEnergy - netDemand; // Energy lost to exhaust
            setCalculatedValue("k_54", exhaustValue);
        } else {
            setCalculatedValue("k_54", 0);
        }
        
        // Update performance metrics (n_52, n_53 - OK)
        const standardCOP = 0.9; // Reference value for standard equipment
        const efficiencyPercent = standardCOP !== 0 ? Math.round((efficiency / standardCOP) * 100) : 0;
        setCalculatedValue("n_52", `${efficiencyPercent}%`);
        
        setCalculatedValue("n_53", `${Math.round(recoveryPercent * 100)}%`);
        
        // Return calculated values for use in other functions
        return {
            finalEnergy,
            systemLosses: systemLosses_d54, // Return the newly calculated losses
            gasVolume,
            oilVolume
        };
    }
    
    /**
     * Calculate all values for this section
     */
    function calculateAll() {
        // Calculate water use first
        const waterUseResults = calculateWaterUse();
        
        // Then calculate heating system
        const heatingResults = calculateHeatingSystem();
        
        // Update global internal gains value for cross-section usage
        if (window.TEUI && window.TEUI.StateManager) {
            // System losses become internal gains in Section 9
            window.TEUI.StateManager.setValue("h_69", heatingResults.systemLosses.toString(), "calculated");
        }
        
        // Publish event for sections that depend on water calculations
        const waterUseEvent = new CustomEvent('teui-wateruse-updated', {
            detail: {
                waterUse: waterUseResults,
                heatingSystem: heatingResults
            }
        });
        document.dispatchEvent(waterUseEvent);
    }
    
    /**
     * Get a numeric value from a field, ensuring proper parsing and precision
     * @param {string} fieldId - The field ID to get the value from
     * @returns {number} The parsed numeric value
     */
    function getNumericValue(fieldId) {
        const value = window.TEUI.StateManager.getValue(fieldId);
        if (value === null || value === undefined) return 0;
        
        // Remove any formatting and parse as float
        const numericValue = parseFloat(value.toString().replace(/,/g, ''));
        return isNaN(numericValue) ? 0 : numericValue;
    }
    
    /**
     * Get a field value from StateManager
     * @param {string} fieldId - The field ID to get the value from
     * @returns {string} The field value
     */
    function getFieldValue(fieldId) {
        return window.TEUI.StateManager.getValue(fieldId);
    }
    
    /**
     * Set a calculated value, updating both StateManager and DOM
     * @param {string} fieldId - The field ID to set
     * @param {number|string} value - The value to set
     */
    function setCalculatedValue(fieldId, value) {
        // Store raw value in StateManager
        window.TEUI.StateManager.setValue(
            fieldId, 
            value, 
            window.TEUI.StateManager.VALUE_STATES.CALCULATED
        );
        
        // Format for display and update DOM
        const formattedValue = formatNumber(value);
        const element = document.querySelector(`[data-field-id="${fieldId}"]`);
        if (element) {
            element.textContent = formattedValue;
        }
    }
    
    /**
     * Format a number for display with proper precision
     * @param {number|string} value - The value to format
     * @returns {string} The formatted value
     */
    function formatNumber(value) {
        // Convert to number if string
        const numValue = typeof value === 'string' ? parseFloat(value.replace(/,/g, '')) : value;
        
        // Handle special cases
        if (isNaN(numValue)) return '0.00';
        if (numValue === 0) return '0.00';
        
        // Format with 2 decimal places and thousands separator
        return numValue.toLocaleString('en-US', {
            minimumFractionDigits: 2,
            maximumFractionDigits: 2
        });
    }
    
    /**
     * Updates the visibility and editability of conditional input fields (e_49, d_50)
     * and related fields (Gas/Oil outputs) based on the selected methods.
     * @param {string} waterMethod - Value from d_49 dropdown.
     * @param {string} systemType - Value from d_51 dropdown.
     */
    function updateSection7Visibility(waterMethod, systemType) {
        // Get relevant elements
        const e49Element = document.querySelector('[data-field-id="e_49"]');
        const f49Element = document.querySelector('.data-table tr[data-id="W.1.0"] td:nth-child(6)'); // F49
        const d50Element = document.querySelector('[data-field-id="d_50"]');
        const e50Element = document.querySelector('.data-table tr[data-id="W.1.2"] td:nth-child(5)'); // E50
        const f50Element = document.querySelector('.data-table tr[data-id="W.1.2"] td:nth-child(6)'); // F50
        
        const e51Element = document.querySelector('[data-field-id="e_51"]'); // Gas Volume
        const f51Element = document.querySelector('.data-table tr[data-id="W.3.1"] td:nth-child(6)'); // F51 Label
        const k54Element = document.querySelector('[data-field-id="k_54"]'); // Exhaust
        const l54Element = document.querySelector('[data-field-id="l_54"]'); // Oil Volume
        const h54Element = document.querySelector('.data-table tr[data-id="W.6.1"] td:nth-child(8)'); // H54 Label
        const l54LabelElement = document.querySelector('.data-table tr[data-id="W.6.1"] td:nth-child(12)'); // L54 Label


        // --- Handle User Defined inputs (e_49, f_49) based on waterMethod ---
        if (e49Element && f49Element) {
            const isActive = (waterMethod === "User Defined");
            e49Element.contentEditable = isActive ? "true" : "false";
            e49Element.classList.toggle('user-input', isActive);
            e49Element.classList.toggle('editable', isActive);
            e49Element.classList.toggle('disabled-input', !isActive);
            f49Element.classList.toggle('disabled-input', !isActive);
        }

        // --- Handle By Engineer inputs (d_50, e_50, f_50) based on waterMethod ---
        if (d50Element && e50Element && f50Element) {
            const isActive = (waterMethod === "By Engineer");
            d50Element.contentEditable = isActive ? "true" : "false";
            d50Element.classList.toggle('user-input', isActive);
            d50Element.classList.toggle('editable', isActive);
            d50Element.classList.toggle('disabled-input', !isActive);
            e50Element.classList.toggle('disabled-input', !isActive); 
            f50Element.classList.toggle('disabled-input', !isActive); 
        }
        
        // --- Handle Gas specific fields (e_51, f_51) based on systemType ---
        if (e51Element && f51Element) {
            const isActive = (systemType === "Gas");
            e51Element.classList.toggle('disabled-input', !isActive);
            f51Element.classList.toggle('disabled-input', !isActive);
        }

        // --- Handle Oil specific field (l_54) and its label based on systemType ---
        if (l54Element && l54LabelElement) {
            const isActive = (systemType === "Oil");
            l54Element.classList.toggle('disabled-input', !isActive);
            l54LabelElement.classList.toggle('disabled-input', !isActive);
        }
        
        // --- Handle Gas/Oil specific fields (k_54, h_54) based on systemType ---
        if (k54Element && h54Element) {
            const isActive = (systemType === "Gas" || systemType === "Oil");
            k54Element.classList.toggle('disabled-input', !isActive);
            h54Element.classList.toggle('disabled-input', !isActive);
        }
    }
    
    /**
     * Initialize all event handlers for this section
     */
    function initializeEventHandlers() {
        // Get the waterUse section element
        const sectionElement = document.getElementById('waterUse');
        if (!sectionElement) {
            return; // Exit gracefully if section element not found
        }
        
        // --- ADDED: Listener for DHW Source change (d_51) ---
        const d51Dropdown = sectionElement.querySelector('select[data-field-id="d_51"]');
        if (d51Dropdown) {
            d51Dropdown.addEventListener('change', handleDHWSourceChange);
        }
        // --- END ADDED --- 

        // Setup dropdown change handlers
        const dropdowns = sectionElement.querySelectorAll('[data-dropdown-id]');
        dropdowns.forEach(dropdown => {
            dropdown.addEventListener('change', function(e) {
                const fieldId = this.getAttribute('data-field-id');
                const value = this.value;

                // Check if this is a user-initiated change (not programmatic)
                if (e.isTrusted) {
                    window.TEUI.sect07.userInteracted = true;
                    
                    // Store value in StateManager with user-modified state
                    if (fieldId && window.TEUI.StateManager) {
                        window.TEUI.StateManager.setValue(fieldId, value, 'user-modified');
                    }
                }
                
                // Update visibility for conditional inputs 
                // Get current values of both controlling dropdowns
                const currentWaterMethod = getFieldValue("d_49");
                const currentSystemType = getFieldValue("d_51");
                updateSection7Visibility(currentWaterMethod, currentSystemType);

                // Recalculate all values when any dropdown changes
                calculateAll();
            });
        });
        
        // *** ADDED: Specific listener for d_53 slider ***
        const d53Slider = sectionElement.querySelector('input[type="range"][data-field-id="d_53"]');
        if (d53Slider) {
            d53Slider.addEventListener('input', function() {
                // Update StateManager directly (FieldManager might also do this, but explicit is safe)
                if (window.TEUI && window.TEUI.StateManager) {
                    window.TEUI.StateManager.setValue("d_53", this.value, 'user-modified');
                }
                // Trigger recalculation
                calculateAll();
            });
        }
        // *** END ADDED CODE ***

        // *** ADDED: Specific listener for d_52 slider ***
        const d52Slider = sectionElement.querySelector('input[type="range"][data-field-id="d_52"]');
        if (d52Slider) {
            d52Slider.addEventListener('input', function() {
                // Update StateManager directly
                if (window.TEUI && window.TEUI.StateManager) {
                    window.TEUI.StateManager.setValue("d_52", this.value, 'user-modified');
                }
                // Trigger recalculation
                calculateAll();
            });
        } // No console.warn needed here, FieldManager handles slider creation
        // *** END ADDED CODE ***

        // Setup editable field handlers
        const editableFields = sectionElement.querySelectorAll('.editable, [contenteditable="true"]');
        editableFields.forEach(field => {
            // Make editable fields actually editable
            if (!field.getAttribute('contenteditable')) {
                field.setAttribute('contenteditable', 'true');
            }
            
            // Prevent newlines and handle Enter key
            field.addEventListener('keydown', function(e) {
                if (e.key === 'Enter') {
                    e.preventDefault(); // Prevent adding a newline
                    this.blur(); // Remove focus to trigger the blur event
                }
            });
            
            // Handle changes to the field value
            field.addEventListener('blur', function() {
                const fieldId = this.getAttribute('data-field-id');
                if (!fieldId) return;
                
                // Get new value and clean it
                let newValue = this.textContent.trim().replace(/,/g, '');
                
                // Format the number for display
                if (!isNaN(parseFloat(newValue)) && isFinite(newValue)) {
                    const formattedValue = formatNumber(newValue);
                    this.textContent = formattedValue;
                    
                    // Mark user interaction
                    window.TEUI.sect07.userInteracted = true;
                    
                    // Update state manager if available
                    if (window.TEUI.StateManager) {
                        window.TEUI.StateManager.setValue(fieldId, newValue, 'user-modified');
                    }
                    
                    // Recalculate all values
                    calculateAll();
                }
            });
        });
        
        // Listen for changes to related fields from other sections
        if (window.TEUI.StateManager) {
            // Listen for changes to occupancy (from Section 9)
            window.TEUI.StateManager.addListener("d_63", function() {
                calculateAll();
            });
        }

        // Mark section as initialized
        window.TEUI.sect07.initialized = true;
    }
    
    /**
     * Called when the section is rendered
     */
    function onSectionRendered() {
        
        // Initialize event handlers
        initializeEventHandlers();
        
        // Setup default values for fields if not already initialized
        setupValueEnforcement();
        
        // Set initial visibility for conditional inputs
        const initialWaterMethod = getFieldValue("d_49");
        const initialSystemType = getFieldValue("d_51");
        updateSection7Visibility(initialWaterMethod, initialSystemType);

        // Run initial calculations
        calculateAll();
        
        // Mark section as initialized
        window.TEUI.sect07.initialized = true;
    }
    
    /**
     * Set up one-time initialization and value enforcement
     */
    function setupValueEnforcement() {
        // Skip if already initialized
        if (window.TEUI.sect07.initialized) return;
        
        // Register default values with StateManager
        if (window.TEUI.StateManager) {
            // Register basic default values - won't override existing values
            window.TEUI.StateManager.setValue("d_49", "User Defined", 'default');
            window.TEUI.StateManager.setValue("e_49", "40.00", 'default');
            window.TEUI.StateManager.setValue("d_51", "Heatpump", 'default');
            window.TEUI.StateManager.setValue("d_52", "300", 'default'); // Default for slider
            window.TEUI.StateManager.setValue("d_53", "0", 'default'); // Updated default for slider
            
            // Register cross-section dependencies
            window.TEUI.StateManager.registerDependency("d_63", "h_49"); // Occupants affects water use
            window.TEUI.StateManager.registerDependency("d_54", "h_69"); // System losses affect internal gains
        }
        
        // Set initial dropdown values exactly once
        function initializeDropdownValues() {
            
            if (window.TEUI.sect07.initialized && window.TEUI.sect07.userInteracted) {
                return; // Skip if already initialized and interacted with
            }
            
            // Set initial dropdown values            
            // Use both direct DOM access and StateManager for redundancy
            const efficiencyDropdown = document.querySelector('select[data-field-id="g_67"]');
            if (efficiencyDropdown) {
                efficiencyDropdown.value = "300%";
                efficiencyDropdown.dispatchEvent(new Event('change', { bubbles: true }));
            }
            
            const dropdowns = {
                "d_49": "User Defined",
                "d_51": "Heatpump",
                "d_52": "300", // Default for slider
                "d_53": "0"  // Updated default for slider
            };
            
            // Set each dropdown/slider to its initial value
            Object.entries(dropdowns).forEach(([fieldId, defaultValue]) => {
                const element = document.querySelector(`[data-field-id="${fieldId}"]`); // General selector
                // Check if it's a dropdown or a slider container/input
                const selectElement = element?.tagName === 'SELECT' ? element : element?.querySelector('input[type="range"]');
                
                if (selectElement && !window.TEUI.sect07.userInteracted) {
                    selectElement.value = defaultValue;
                    // Trigger change event without marking as user-initiated
                    selectElement.dispatchEvent(new Event('change', { bubbles: true }));
                    // Also trigger input for sliders to update display value
                    if (selectElement.type === 'range') {
                         selectElement.dispatchEvent(new Event('input', { bubbles: true }));
                    }
                }
            });
        }
        
        // Run initialization
        initializeDropdownValues();
    }
    
    /**
     * NEW: Handles changes to the DHW Energy Source dropdown (d_51)
     * Updates the efficiency field (d_52) based on the selection.
     */
    function handleDHWSourceChange(event) {
        const selectedSource = event.target.value;
        const d52Slider = document.querySelector('input[type="range"][data-field-id="d_52"]');
        const d52Display = document.querySelector('span[data-display-for="d_52"]'); 
        const d52Cell = document.querySelector('td[data-field-id="d_52"]');

        let newMinValue = 50;
        let newMaxValue = 400;
        let newStep = 2;
        let newValue = 300; // Default for Heatpump
        let isEditable = true; // Assume editable by default

        if (selectedSource === "Gas" || selectedSource === "Oil") {
            newMinValue = 50;
            newMaxValue = 100;
            newStep = 1;
            newValue = 90; // Reset value to 90%
            isEditable = true; // Still editable, but within new range
        } else if (selectedSource === "Electric") {
            newMinValue = 50;
            newMaxValue = 100;
            newStep = 1;
            newValue = 100; // Reset value to 100%
            isEditable = true; // Still editable
        } else { // Heatpump
            newMinValue = 50;
            newMaxValue = 400;
            newStep = 2;
            // Maybe restore last HP value? For now, reset to default.
            newValue = 300; 
            isEditable = true;
        }

        // Update StateManager first
        if (window.TEUI.StateManager) {
            // Store the percentage value (as string)
            window.TEUI.StateManager.setValue("d_52", newValue.toString(), 'system-update');
        }

        // Update Slider Attributes & Value & Display
        if (d52Slider) {
            d52Slider.min = newMinValue;
            d52Slider.max = newMaxValue;
            d52Slider.step = newStep;
            d52Slider.value = newValue; // Update slider value to the new default/reset value
            // d52Slider.disabled = isDisabled; // REMOVED - Keep slider enabled
            if (d52Display) { 
                d52Display.textContent = `${newValue}%`; // Update display
            }
        }
        // Also update cell appearance (using disabled-input class for styling if needed)
        if(d52Cell){
            d52Cell.classList.toggle('disabled-input', !isEditable); // Style based on editability flag if needed
            // If we have a slider, remove editable class just in case
            if(d52Slider) d52Cell.classList.remove('editable', 'user-input');
        }

        // Trigger recalculations that depend on d_52
        calculateAll(); // Recalculate section
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
        setupValueEnforcement: setupValueEnforcement,
        
        // Section-specific utility functions - OPTIONAL
        calculateAll: calculateAll,
        calculateWaterUse: calculateWaterUse,
        calculateHeatingSystem: calculateHeatingSystem,
        getNumericValue: getNumericValue,
        getFieldValue: getFieldValue,
        setCalculatedValue: setCalculatedValue,
        formatNumber: formatNumber
    };
})();

// Initialize when the section is rendered
document.addEventListener('teui-section-rendered', function(event) {
    if (event.detail?.sectionId === 'waterUse') {
        setTimeout(() => window.TEUI.SectionModules.sect07.onSectionRendered(), 100);
    }
});

// Fallback to rendering complete event
document.addEventListener('teui-rendering-complete', function() {
    setTimeout(() => {
        if (document.getElementById('waterUse')) {
            window.TEUI.SectionModules.sect07.onSectionRendered();
        }
    }, 300);
});

// Expose critical functions to global namespace for cross-module access
document.addEventListener('DOMContentLoaded', function() {
    const module = window.TEUI.SectionModules.sect07;
    window.TEUI.sect07.calculateWaterUse = module.calculateWaterUse;
    window.TEUI.sect07.calculateHeatingSystem = module.calculateHeatingSystem;
    window.TEUI.sect07.calculateAll = module.calculateAll;
});

// Create a globally accessible safe version of calculateAll
window.calculateWaterUse = function() {
    // Prevent infinite recursion
    if (window.waterUseCalculationRunning) {
        return;
    }
    
    window.waterUseCalculationRunning = true;
    
    try {
        // Try multiple paths to find the actual implementation
        if (window.TEUI?.SectionModules?.sect07?.calculateAll) {
            window.TEUI.SectionModules.sect07.calculateAll();
        } 
        else if (window.TEUI?.sect07?.calculateAll) {
            window.TEUI.sect07.calculateAll();
        }
    } catch (e) {
        // console.error("Error in wrapper:", e);
    } finally {
        // ALWAYS clear recursion flag regardless of success/failure
        window.waterUseCalculationRunning = false;
    }
};