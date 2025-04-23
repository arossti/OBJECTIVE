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
                k: { content: "Annual kWh/yr", classes: ["section-subheader"] },
                l: { content: "K", classes: ["section-subheader"] },
                m: { content: "Reference", classes: ["section-subheader"] },
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
                        { value: "By Manufacturer", name: "By Manufacturer" },
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
                f: { content: "l/pp/day IF User Defined" },
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
                e: { content: "kWh/yr" },
                f: { content: "IF By Engineer" },
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
                f: { content: "Gas m³/yr" },
                g: { content: "W.3.2" },
                h: { content: "ekWh/yr Net Thermal Demand" },
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
                l: { content: "W.3.3 Net Electrical Demand" }
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
                    type: "dropdown",
                    dropdownId: "dd_d_52",
                    value: "300%",
                    section: "waterUse",
                    classes: ["user-input"],
                    options: [
                        { value: "300%", name: "300%" },
                        { value: "250%", name: "250%" },
                        { value: "200%", name: "200%" },
                        { value: "150%", name: "150%" },
                        { value: "100%", name: "100%" },
                        { value: "50%", name: "50%" }
                    ]
                },
                e: {
                    fieldId: "e_52",
                    type: "calculated",
                    value: "3.00",
                    section: "waterUse",
                    dependencies: ["d_52"]
                },
                f: { content: "COPdhw" },
                g: { content: "W.5.2" },
                h: { content: "(W2DN) Net Demand -Recovered" },
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
                    type: "dropdown",
                    dropdownId: "dd_d_53",
                    value: "0%",
                    section: "waterUse",
                    classes: ["user-input"],
                    options: [
                        { value: "0%", name: "0%" },
                        { value: "10%", name: "10%" },
                        { value: "20%", name: "20%" },
                        { value: "30%", name: "30%" },
                        { value: "40%", name: "40%" },
                        { value: "50%", name: "50%" }
                    ]
                },
                e: {
                    fieldId: "e_53",
                    type: "calculated",
                    value: "0.00",
                    section: "waterUse",
                    dependencies: ["d_53", "j_51"]
                },
                f: { content: "kWh/yr" },
                g: { content: "W.5.3" },
                h: { content: "(W.2.W) SHW Wasted" },
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
                f: { content: "kWh/yr" },
                g: { content: "W.X" },
                h: { content: "Exhaust (if Gas or Oil)" },
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
                l: { content: "W.3.4 Net Oil Demand Litres" },
                m: { }, // Empty cell for alignment
                n: { }  // Empty cell for alignment
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
        // Get values from UI using type-safe approach
        const method = getFieldValue("d_49");
        const userDefinedValue = getNumericValue("e_49") || 40.0;
        const occupants = getNumericValue("d_63") || 126;
        
        let litersPerPersonDay = 0;
        
        // Determine water use based on selected method
        switch(method) {
            case "User Defined":
                litersPerPersonDay = userDefinedValue;
                break;
            case "By Engineer":
                // Use the value from d_50 to calculate backwards
                const engineerValue = getNumericValue("d_50") || 10000;
                const annualDays = 365;
                const waterHeatFactor = 0.0524; // kWh per liter for temp rise
                litersPerPersonDay = (engineerValue / annualDays / waterHeatFactor / occupants) / 0.4;
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
        
        // Update H49 with liters per person per day
        setCalculatedValue("h_49", formatNumber(litersPerPersonDay));
        
        // Calculate total annual water use (liters/year)
        const annualWaterUse = litersPerPersonDay * occupants * 365;
        setCalculatedValue("i_49", formatNumber(annualWaterUse));
        
        // Hot water is typically 40% of total water use
        const hotWaterPercentage = 0.4;
        const hotWaterLitersPerDay = litersPerPersonDay * hotWaterPercentage;
        setCalculatedValue("h_50", formatNumber(hotWaterLitersPerDay));
        
        // Calculate hot water annual volume
        const hotWaterAnnualLiters = hotWaterLitersPerDay * occupants * 365;
        setCalculatedValue("i_50", formatNumber(hotWaterAnnualLiters));
        
        // Calculate hot water energy demand (kWh/yr)
        // Formula: Volume (L) * 4.18 * temperature rise (K) / 3600
        const temperatureRise = 45; // Default rise from cold to hot water (K or °C)
        const waterDensity = 1; // kg/L
        const specificHeatCapacity = 4.18; // kJ/(kg·K)
        
        // Apply formula with specific heat capacity
        let hotWaterEnergyDemand = 0;
        if (method === "By Engineer") {
            // If specified by engineer, use provided value
            hotWaterEnergyDemand = getNumericValue("d_50");
        } else {
            // Otherwise calculate from liters and temperature rise
            hotWaterEnergyDemand = (hotWaterAnnualLiters * waterDensity * specificHeatCapacity * temperatureRise) / 3600;
        }
        
        setCalculatedValue("j_50", formatNumber(hotWaterEnergyDemand));
        
        // Calculate reference percentages
        // These should compare to standard values
        const waterUseReference = 275; // OBC standard value
        const waterUsePercent = Math.round((litersPerPersonDay / waterUseReference) * 100);
        setCalculatedValue("n_49", `${waterUsePercent}%`);
        
        const dhwUseReference = 110; // From reference
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
        const energyDemand = getNumericValue("j_50") || 38484.43;
        
        // Get system type and efficiency
        const systemType = getFieldValue("d_51");
        const efficiencyOption = getFieldValue("d_52");
        
        // Convert efficiency percentage to decimal
        let efficiency = 1.0; // Default value
        if (efficiencyOption) {
            efficiency = parseFloat(efficiencyOption.replace('%', '')) / 100;
        }
        
        // Set COP value
        setCalculatedValue("e_52", formatNumber(efficiency));
        
        // Calculate net thermal demand - base value without recovery
        setCalculatedValue("j_51", formatNumber(energyDemand));
        
        // Handle drain water heat recovery
        const recoveryOption = getFieldValue("d_53");
        let recoveryPercent = 0;
        if (recoveryOption) {
            recoveryPercent = parseFloat(recoveryOption.replace('%', '')) / 100;
        }
        
        // Calculate energy recovered
        const energyRecovered = energyDemand * recoveryPercent;
        setCalculatedValue("e_53", formatNumber(energyRecovered));
        
        // Calculate net demand after recovery
        const netDemand = energyDemand - energyRecovered;
        setCalculatedValue("j_52", formatNumber(netDemand));
        setCalculatedValue("j_53", formatNumber(netDemand)); // SHW Wasted is same as net demand
        
        // Calculate final energy consumption based on system type
        let finalEnergy = 0;
        let systemLosses = 0;
        let gasVolume = 0;
        let oilVolume = 0;
        
        switch(systemType) {
            case "Heatpump":
                // Heat pump - divide by COP
                finalEnergy = netDemand / efficiency;
                // Heat pump systems typically have minimal losses to the space
                systemLosses = 0; // Heat pumps have negligible losses to space
                break;
            case "Electric":
                // Electric direct - 100% efficient
                finalEnergy = netDemand;
                // Electric water heaters have significant tank losses
                systemLosses = netDemand * 0.1; // 10% losses for electric
                break;
            case "Gas":
                // Gas - efficiency typically 85-98%
                finalEnergy = netDemand / (efficiency || 0.9); // Fallback to 90% if not specified
                // Gas systems have higher losses
                systemLosses = netDemand * 0.15; // 15% losses for gas
                // Also calculate gas volume (m³)
                gasVolume = netDemand / (efficiency || 0.9) / 10.33; // kWh per m³ of natural gas
                setCalculatedValue("e_51", formatNumber(gasVolume));
                break;
            case "Oil":
                // Oil - efficiency typically 80-85%
                finalEnergy = netDemand / (efficiency || 0.82); // Fallback to 82% if not specified
                // Oil systems have higher losses
                systemLosses = netDemand * 0.18; // 18% losses for oil
                // Also calculate oil volume (liters)
                oilVolume = netDemand / (efficiency || 0.82) / (36.72 * 0.2777778); // kWh per liter of oil
                setCalculatedValue("l_54", formatNumber(oilVolume));
                break;
        }
        
        // Update net electrical demand
        setCalculatedValue("k_51", formatNumber(finalEnergy));
        
        // Update system losses
        setCalculatedValue("d_54", formatNumber(systemLosses));
        
        // Update metrics for Gas and Oil
        if (systemType === "Gas" || systemType === "Oil") {
            // Set exhaust values - for non-electric systems, calculate exhaust losses
            const exhaustValue = finalEnergy - netDemand; // Energy lost to exhaust
            setCalculatedValue("k_54", formatNumber(exhaustValue));
        } else {
            setCalculatedValue("k_54", "0.00");
        }
        
        // Update performance metrics with standard reference values
        const standardCOP = 0.9; // Reference value for standard equipment
        const efficiencyPercent = Math.round((efficiency / standardCOP) * 100);
        setCalculatedValue("n_52", `${efficiencyPercent}%`);
        
        // Recovery efficiency is shown as direct percentage
        setCalculatedValue("n_53", `${Math.round(recoveryPercent * 100)}%`);
        
        // Return calculated values for use in other functions
        return {
            finalEnergy,
            systemLosses,
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
     * Type-safe helper function to get a numeric value from any field
     * Handles commas and unit conversions properly
     */
    function getNumericValue(fieldId) {
        const value = getFieldValue(fieldId);
        
        // Handle string values with commas
        if (typeof value === 'string') {
            // Clean the string by removing commas and other non-numeric characters
            // Keep decimal points and minus signs
            const cleanValue = value.replace(/,/g, '').replace(/[^\d.-]/g, '');
            return parseFloat(cleanValue) || 0;
        }
        // Handle number values directly
        else if (typeof value === 'number') {
            return value;
        }
        // Default fallback
        return 0;
    }
    
    /**
     * Helper function to get a field value
     */
    function getFieldValue(fieldId) {
        // Try to get from StateManager first
        if (window.TEUI && window.TEUI.StateManager && window.TEUI.StateManager.getValue) {
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
        // Set in state manager
        if (window.TEUI && window.TEUI.StateManager && window.TEUI.StateManager.setValue) {
            window.TEUI.StateManager.setValue(fieldId, value, "calculated");
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
     * Format a number for display
     */
    function formatNumber(value) {
        // Check if value is very small
        if (Math.abs(value) < 0.01 && value !== 0) {
            return value.toFixed(2);
        }
        
        // Check if value is integer
        if (Number.isInteger(parseFloat(value))) {
            return parseFloat(value).toLocaleString(undefined, {
                minimumFractionDigits: 0,
                maximumFractionDigits: 0
            });
        }
        
        // Format with 2 decimal places
        return parseFloat(value).toLocaleString(undefined, {
            minimumFractionDigits: 2,
            maximumFractionDigits: 2
        });
    }
    
    /**
     * Initialize all event handlers for this section
     */
    function initializeEventHandlers() {
        // Get the waterUse section element
        const sectionElement = document.getElementById('waterUse');
        if (!sectionElement) {
            // console.warn("Water Use section element not found in DOM");
            return;
        }
        
        // Setup dropdown change handlers
        const dropdowns = sectionElement.querySelectorAll('[data-dropdown-id]');
        dropdowns.forEach(dropdown => {
            dropdown.addEventListener('change', function(e) {
                // Check if this is a user-initiated change (not programmatic)
                if (e.isTrusted) {
                    window.TEUI.sect07.userInteracted = true;
                    
                    // Store value in StateManager with user-modified state
                    const fieldId = this.getAttribute('data-field-id');
                    if (fieldId && window.TEUI.StateManager) {
                        window.TEUI.StateManager.setValue(fieldId, this.value, 'user-modified');
                    }
                }
                
                // Recalculate all values when any dropdown changes
                calculateAll();
            });
        });
        
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
    }
    
    /**
     * Called when the section is rendered
     */
    function onSectionRendered() {
        // console.log('Water Use section rendered, initializing...');
        
        // Initialize event handlers
        initializeEventHandlers();
        
        // Setup default values for fields if not already initialized
        setupValueEnforcement();
        
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
            window.TEUI.StateManager.setValue("d_52", "300%", 'default');
            window.TEUI.StateManager.setValue("d_53", "0%", 'default');
            
            // Register cross-section dependencies
            window.TEUI.StateManager.registerDependency("d_63", "h_49"); // Occupants affects water use
            window.TEUI.StateManager.registerDependency("d_54", "h_69"); // System losses affect internal gains
        }
        
        // Set initial dropdown values exactly once
        function initializeDropdownValues() {
            // console.log("Initializing dropdown values, already initialized:", window.TEUI.sect07.initialized);
            
            if (window.TEUI.sect07.initialized && window.TEUI.sect07.userInteracted) {
                // console.log("Section 07 already initialized and user has interacted - skipping defaults");
                return;
            }
            
            // Set initial dropdown values
            // console.log("Setting initial dropdown values for Section 07");
            
            // Use both direct DOM access and StateManager for redundancy
            const efficiencyDropdown = document.querySelector('select[data-field-id="g_67"]');
            if (efficiencyDropdown) {
                efficiencyDropdown.value = "300%";
                efficiencyDropdown.dispatchEvent(new Event('change', { bubbles: true }));
            }
            
            const dropdowns = {
                "d_49": "User Defined",
                "d_51": "Heatpump",
                "d_52": "300%",
                "d_53": "0%"
            };
            
            // Set each dropdown to its initial value
            Object.entries(dropdowns).forEach(([fieldId, defaultValue]) => {
                const dropdown = document.querySelector(`select[data-field-id="${fieldId}"]`);
                if (dropdown && !window.TEUI.sect07.userInteracted) {
                    dropdown.value = defaultValue;
                    // Trigger change event without marking as user-initiated
                    dropdown.dispatchEvent(new Event('change', { bubbles: true }));
                }
            });
        }
        
        // Run initialization
        initializeDropdownValues();
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
        // console.warn("Preventing recursive call to calculateWaterUse");
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
        else {
            // console.warn("Water Use calculation function not found in any namespace");
        }
    } catch (e) {
        // console.error("Error in wrapper:", e);
    } finally {
        // ALWAYS clear recursion flag regardless of success/failure
        window.waterUseCalculationRunning = false;
    }
};