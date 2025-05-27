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
    // ADDED: HELPER FUNCTIONS (Standard Implementation)
    //==========================================================================

    /**
     * Helper function to get a field value primarily from StateManager, with a DOM fallback.
     */
    function getFieldValue(fieldId) {
        if (window.TEUI && window.TEUI.StateManager && typeof window.TEUI.StateManager.getValue === 'function') {
            const value = window.TEUI.StateManager.getValue(fieldId);
            if (value !== null && value !== undefined) {
                return String(value); // Ensure it's a string
            }
        }
        // Query for elements with data-field-id or data-dropdown-id
        const element = document.querySelector(`[data-field-id="${fieldId}"], [data-dropdown-id="${fieldId}"]`); 
        if (element) {
            // For sliders, read the value attribute directly
            if (element.type === 'range') {
                return String(element.value);
            }
            return element.value !== undefined ? String(element.value) : String(element.textContent);
        }
        return null; // Return null if not found
    }

    /**
     * Helper function to get a numeric field value, using global parseNumeric.
     */
    function getNumericValue(fieldId, defaultValue = 0) {
        const rawValue = getFieldValue(fieldId);
        if (window.TEUI && typeof window.TEUI.parseNumeric === 'function') {
            return window.TEUI.parseNumeric(rawValue, defaultValue);
        }
        // Fallback parsing
        const parsed = parseFloat(String(rawValue).replace(/[$,%]/g, '')); // Handle currency/percentage symbols
        return isNaN(parsed) ? defaultValue : parsed;
    }
    
    /**
     * Helper function to set a calculated field value.
     * Stores raw numeric value (as string) in StateManager.
     * Updates DOM with formatted value using global window.TEUI.formatNumber.
     */
    function setCalculatedValue(fieldId, rawValue, formatType = 'number-2dp-comma') { // Default format
        const isNumb = typeof rawValue === 'number' && isFinite(rawValue);
        // Store numbers as strings, keep "N/A" or other specific strings as is
        const valueToStore = rawValue === "N/A" ? "N/A" : (isNumb ? rawValue.toString() : String(rawValue));

        if (window.TEUI?.StateManager?.setValue) {
            window.TEUI.StateManager.setValue(fieldId, valueToStore, "calculated");
        }
        
        let formattedValue;
        if (rawValue === "N/A") {
            formattedValue = "N/A";
        } else if (formatType === 'raw') {
            formattedValue = String(rawValue);
        } else {
            // Use global formatter, ensuring it's available
            formattedValue = window.TEUI?.formatNumber?.(rawValue, formatType) ?? valueToStore; // Fallback to stored value
        }
        
        const element = document.querySelector(`[data-field-id="${fieldId}"]`);
        if (element) {
            if (element.tagName === 'SELECT' || element.tagName === 'INPUT') {
                element.value = formattedValue; // Or potentially rawValue depending on input type
            } else {
                element.textContent = formattedValue;
            }
            // Optional: Add negative value class if applicable
            if (isNumb) {
                element.classList.toggle('negative-value', rawValue < 0);
            }
        }
    }

     /**
     * Standard blur handler for editable fields.
     * Parses input, updates state, formats display.
     */
    function handleEditableBlur(event) {
        const fieldElement = this; // `this` is the element that triggered the blur
        const fieldId = fieldElement.getAttribute('data-field-id');
        if (!fieldId) return;

        let rawTextValue = fieldElement.textContent.trim();
        let valueToStore;
        let formatType = 'number-2dp-comma'; // Default format

        let numericValue = window.TEUI.parseNumeric(rawTextValue, NaN);

        if (isNaN(numericValue)) { // Handle invalid numeric input -> default to 0 or revert
             console.warn(`Invalid input for ${fieldId}: "${rawTextValue}". Reverting or defaulting.`);
             // Revert to previous value from StateManager
             const previousValue = getFieldValue(fieldId); // Get potentially old value from state
             numericValue = window.TEUI.parseNumeric(previousValue, 0); // Parse previous or default to 0
        }
        
        // Determine specific formatting if needed (example)
        // if (fieldId === 'some_specific_field') { formatType = 'some-format'; }
        
        // Special formatting for k_52 (AFUE) - use 2 decimal places without comma
        if (fieldId === 'k_52') { 
            formatType = 'number-2dp'; 
        }

        valueToStore = numericValue.toString(); // Store raw number string
        const formattedDisplay = window.TEUI.formatNumber(numericValue, formatType);
        fieldElement.textContent = formattedDisplay;

        // Update StateManager only if the stored value differs
        if (window.TEUI?.StateManager) {
            const currentStateValue = window.TEUI.StateManager.getValue(fieldId);
             if (currentStateValue !== valueToStore) {
                window.TEUI.StateManager.setValue(fieldId, valueToStore, 'user-modified');
                // Trigger dependent calculations if this field is a dependency for others
                calculateAll(); // Recalculate section on change
            }
        }
    }

    //==========================================================================
    // DUAL-ENGINE ARCHITECTURE SUPPORT
    //==========================================================================
    
    /**
     * Get field value with mode awareness - checks if we're in Reference Mode
     * and returns appropriate value from Reference or Application state
     */
    function getRefFieldValue(fieldId) {
        if (window.TEUI?.ReferenceToggle?.isReferenceMode?.()) {
            // In Reference Mode - get from reference state
            return window.TEUI.StateManager?.getReferenceValue?.(fieldId) || getFieldValue(fieldId);
        } else {
            // In Design Mode - get from application state
            return getFieldValue(fieldId);
        }
    }
    
    /**
     * Get application field value (always from Design state, regardless of current mode)
     */
    function getAppFieldValue(fieldId) {
        return window.TEUI.StateManager?.getApplicationValue?.(fieldId) || getFieldValue(fieldId);
    }
    
         /**
      * Set calculated value with mode awareness and reference state storage
      * CRITICAL: Reference Mode values NEVER update main StateManager fields
      */
     function setDualEngineValue(fieldId, rawValue, formatType = 'number-2dp-comma') {
         const isReferenceMode = window.TEUI?.ReferenceToggle?.isReferenceMode?.() || false;
         
         if (isReferenceMode) {
             // In Reference Mode - ONLY store with ref_ prefix, NEVER update main fields
             if (window.TEUI?.StateManager?.setValue) {
                 console.log(`[S07-REF-STORE] Storing ref_${fieldId}:`, rawValue.toString());
                 window.TEUI.StateManager.setValue(`ref_${fieldId}`, rawValue.toString(), "calculated");
             }
             // DO NOT update the main fieldId - this prevents contamination of Application State
         } else {
             // In Design Mode - store in application state (main fields)
             if (window.TEUI?.StateManager?.setValue) {
                 window.TEUI.StateManager.setValue(fieldId, rawValue.toString(), "calculated");
             }
         }
         
         // Update DOM display (always update visible field)
         const isNumb = typeof rawValue === 'number' && isFinite(rawValue);
         const valueToStore = rawValue === "N/A" ? "N/A" : (isNumb ? rawValue.toString() : String(rawValue));
         
         let formattedValue;
         if (rawValue === "N/A") {
             formattedValue = "N/A";
         } else if (formatType === 'raw') {
             formattedValue = String(rawValue);
         } else {
             formattedValue = window.TEUI?.formatNumber?.(rawValue, formatType) ?? valueToStore;
         }
         
         const element = document.querySelector(`[data-field-id="${fieldId}"]`);
         if (element) {
             if (element.tagName === 'SELECT' || element.tagName === 'INPUT') {
                 element.value = formattedValue;
             } else {
                 element.textContent = formattedValue;
             }
             if (isNumb) {
                 element.classList.toggle('negative-value', rawValue < 0);
             }
         }
     }
    
    /**
     * Calculate water use for specific mode (Reference or Application)
     */
    function calculateWaterUseForMode(mode = 'current') {
        const isRefMode = mode === 'reference' || (mode === 'current' && window.TEUI?.ReferenceToggle?.isReferenceMode?.());
        
        // Get values from appropriate state
        const method = isRefMode ? getRefFieldValue("d_49") : getAppFieldValue("d_49");
        const userDefinedValue = isRefMode ? parseFloat(getRefFieldValue("e_49")) || 40 : parseFloat(getAppFieldValue("e_49")) || 40;
        const engineerValue = isRefMode ? parseFloat(getRefFieldValue("e_50")) || 10000 : parseFloat(getAppFieldValue("e_50")) || 10000;
        const occupants = getNumericValue("d_63"); // Always from current state
        
        let litersPerPersonDay = 0;
        let hotWaterEnergyDemand = 0;
        
        switch(method) {
            case "User Defined": 
                litersPerPersonDay = userDefinedValue; 
                hotWaterEnergyDemand = litersPerPersonDay * 0.4 * occupants * 0.0523 * 365;
                break;
            case "By Engineer": 
                hotWaterEnergyDemand = engineerValue;
                const waterHeatFactor = 0.0524;
                litersPerPersonDay = (occupants > 0 && waterHeatFactor > 0) ? (engineerValue / 365 / waterHeatFactor / occupants) / 0.4 : 0;
                break;
            case "PHPP Method": 
                litersPerPersonDay = 62.5; 
                hotWaterEnergyDemand = litersPerPersonDay * 0.4 * occupants * 0.0523 * 365;
                break;
            case "NBC Method": 
                litersPerPersonDay = 220; 
                hotWaterEnergyDemand = litersPerPersonDay * 0.4 * occupants * 0.0523 * 365;
                break;
            case "OBC Method": 
                litersPerPersonDay = 275; 
                hotWaterEnergyDemand = litersPerPersonDay * 0.4 * occupants * 0.0523 * 365;
                break;
            case "Luxury": 
                litersPerPersonDay = 400; 
                hotWaterEnergyDemand = litersPerPersonDay * 0.4 * occupants * 0.0523 * 365;
                break;
            default: 
                litersPerPersonDay = 40;
                hotWaterEnergyDemand = litersPerPersonDay * 0.4 * occupants * 0.0523 * 365;
        }
        
        const annualWaterUse = litersPerPersonDay * occupants * 365;
        const hotWaterLitersPerDay = litersPerPersonDay * 0.4;
        const hotWaterAnnualLiters = hotWaterLitersPerDay * occupants * 365;
        
        // Store calculated values using dual-engine approach
        setDualEngineValue("h_49", litersPerPersonDay, 'number-2dp');
        setDualEngineValue("i_49", annualWaterUse, 'integer-comma');
        setDualEngineValue("h_50", hotWaterLitersPerDay, 'number-2dp');
        setDualEngineValue("i_50", hotWaterAnnualLiters, 'integer-comma');
        setDualEngineValue("j_50", hotWaterEnergyDemand, 'number-2dp-comma');
        
        // Calculate compliance percentages
        const waterUseReference = 275;
        const waterUsePercentRaw = waterUseReference !== 0 ? (litersPerPersonDay / waterUseReference) : 0;
        const dhwUseReference = 110;
        const dhwUsePercentRaw = dhwUseReference !== 0 ? (hotWaterLitersPerDay / dhwUseReference) : 0;
        
        setDualEngineValue("n_49", (waterUsePercentRaw * 100).toFixed(0) + '%', 'raw');
        setDualEngineValue("n_50", (dhwUsePercentRaw * 100).toFixed(0) + '%', 'raw');
        
        return { hotWaterEnergyDemand, litersPerPersonDay, hotWaterLitersPerDay };
    }

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
                l: { content: "L", classes: ["section-subheader"] },
                m: { content: "Ref", classes: ["section-subheader"] },
                n: { content: "N", classes: ["section-subheader"] }
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
                j: { content: "Net Emissions", classes: ["text-left"] },
                k: { 
                    fieldId: "k_49", 
                    type: "calculated", 
                    value: "0.00",
                    section: "waterUse",
                    dependencies: ["d_51", "k_54", "l_30", "e_51", "l_28"]
                },
                l: { content: "kgCO2e/yr", classes: ["text-left"] },
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
                d: { content: "" },
                e: { 
                    fieldId: "e_50",
                    type: "editable",
                    value: "10,000.00",
                    section: "waterUse",
                    classes: ["user-input", "editable"]
                },
                f: { content: "kWh/yr (IF By Engineer)", classes: ["text-left"] },
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
                    dependencies: ["i_50", "d_51", "d_52", "d_49", "e_50"]
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
                    dependencies: ["j_50", "d_51", "d_52", "k_52"]
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

        // Row 52: W.4 DHW or SHW Efficiency Factor (EF) - REFACTORED TO SUPPORT AFUE SEPARATELY
        "52": {
            id: "W.4.1",
            rowId: "W.4.1",
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
                k: { 
                    fieldId: "k_52", 
                    type: "editable", 
                    value: "0.90", // default SHW AFUE value
                    section: "waterUse",
                    classes: ["user-input", "editable"]
                },
                l: { content: "W.4.2 AFUE", classes: ["text-left"] },
                m: { content: "✓", classes: ["checkmark"] },
                n: {
                    fieldId: "n_52",
                    type: "calculated",
                    value: "100%", // Will be l_52/t_52 when T-cells are implemented for Ref Standards
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
                    fieldId: "d_54", // System Losses kWh
                    type: "calculated",
                    value: "0.00",
                    section: "waterUse",
                    dependencies: ["d_51", "d_52", "j_51", "d_49", "j_50"]
                },
                f: { content: "kWh/yr", classes: ["text-left"] }, // Unit for d_54
                g: { content: "W.X", classes: ["text-right"] }, // ID for Exhaust
                h: { content: "Exhaust (if Gas or Oil)", classes: ["text-left"] }, // Label for k_54
                j: { 
                    fieldId: "j_54", // CORRECT Field ID for Column J - User's target formula
                    type: "calculated", 
                    value: "0.00",
                    section: "waterUse",
                    dependencies: ["d_51", "j_52", "d_52"] // Depends on source, net demand, efficiency
                },
                k: {
                    fieldId: "k_54", // CORRECT Field ID for Column K - Oil Demand Litres
                    type: "calculated",
                    value: "0.00",
                    section: "waterUse",
                    dependencies: ["d_51", "j_52", "d_53", "k_52"] // Depends on source, net demand, recovery, AFUE
                },
                l: { content: "W.3.4 Net Oil Demand Ltrs", classes: ["text-left"] }, // Label for k_54
                m: { content: "", classes: ["text-left"] }
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
        const method = getFieldValue("d_49");
        const userDefinedValue = getNumericValue("e_49");
        const occupants = getNumericValue("d_63");
        
        let litersPerPersonDay = 0;
        
        switch(method) {
            case "User Defined": litersPerPersonDay = userDefinedValue; break;
            case "By Engineer": 
                const engineerValue = getNumericValue("e_50");
                const waterHeatFactor = 0.0524;
                litersPerPersonDay = (occupants > 0 && waterHeatFactor > 0) ? (engineerValue / 365 / waterHeatFactor / occupants) / 0.4 : 0;
                break;
            case "PHPP Method": litersPerPersonDay = 62.5; break;
            case "NBC Method": litersPerPersonDay = 220; break;
            case "OBC Method": litersPerPersonDay = 275; break;
            case "Luxury": litersPerPersonDay = 400; break;
            default: litersPerPersonDay = 40;
        }
        
        setDualEngineValue("h_49", litersPerPersonDay, 'number-2dp'); 
        const annualWaterUse = litersPerPersonDay * occupants * 365;
        setDualEngineValue("i_49", annualWaterUse, 'integer-comma');
        const hotWaterLitersPerDay = litersPerPersonDay * 0.4;
        setDualEngineValue("h_50", hotWaterLitersPerDay, 'number-2dp');
        const hotWaterAnnualLiters = hotWaterLitersPerDay * occupants * 365;
        setDualEngineValue("i_50", hotWaterAnnualLiters, 'integer-comma'); 
        
        let hotWaterEnergyDemand = 0;
        if (method === "By Engineer") {
            hotWaterEnergyDemand = getNumericValue("e_50");
        } else {
            hotWaterEnergyDemand = hotWaterLitersPerDay * occupants * 0.0523 * 365;
        }
        setDualEngineValue("j_50", hotWaterEnergyDemand, 'number-2dp-comma');
        
        const waterUseReference = 275;
        const waterUsePercentRaw = waterUseReference !== 0 ? (litersPerPersonDay / waterUseReference) : 0;
        setDualEngineValue("n_49", waterUsePercentRaw, 'percent-0dp');
        const dhwUseReference = 110;
        const dhwUsePercentRaw = dhwUseReference !== 0 ? (hotWaterLitersPerDay / dhwUseReference) : 0;
        setDualEngineValue("n_50", dhwUsePercentRaw, 'percent-0dp');
        
        return { hotWaterEnergyDemand }; // Return only what's needed by next calc
    }
    
    /**
     * Calculate heating system parameters based on water use and system type
     */
    function calculateHeatingSystem(hotWaterEnergyDemand_j50) {
        const systemType = getFieldValue("d_51");
        const efficiencyInput_d52 = getNumericValue("d_52");
        let efficiency = !isNaN(efficiencyInput_d52) ? efficiencyInput_d52 / 100 : 1.0;
        setDualEngineValue("e_52", efficiency, 'number-2dp');
        
        // Calculate j_51 using Excel logic: =IF(OR(D51="Heatpump", D51="Electric"), J50/D52, J50/K52)
        let netThermalDemand_j_51 = 0;
        if (systemType === "Heatpump" || systemType === "Electric") {
            // Use efficiency from d_52 (already converted to decimal)
            netThermalDemand_j_51 = efficiency !== 0 ? hotWaterEnergyDemand_j50 / efficiency : 0;
        } else {
            // Use AFUE from k_52 for Gas/Oil systems
            const afue = getNumericValue("k_52", 0.9);
            netThermalDemand_j_51 = afue !== 0 ? hotWaterEnergyDemand_j50 / afue : 0;
        }
        setDualEngineValue("j_51", netThermalDemand_j_51, 'number-2dp-comma');
        
        const recoveryOption_d53 = getNumericValue("d_53");
        let recoveryPercent = !isNaN(recoveryOption_d53) ? recoveryOption_d53 / 100 : 0;
        const energyRecovered_e53 = netThermalDemand_j_51 * recoveryPercent;
        setDualEngineValue("e_53", energyRecovered_e53, 'number-2dp-comma');
        
        const netDemandAfterRecovery = netThermalDemand_j_51 - energyRecovered_e53;
        setDualEngineValue("j_52", netDemandAfterRecovery, 'number-2dp-comma');
        setDualEngineValue("j_53", netDemandAfterRecovery, 'number-2dp-comma');
        
        let finalEnergy = 0, gasVolume = 0, oilVolume = 0;
        const netDemand = netDemandAfterRecovery;
        switch(systemType) {
            case "Heatpump": 
                finalEnergy = efficiency !== 0 ? netDemand / efficiency : netDemand; 
                setDualEngineValue("e_51", 0, 'number-2dp-comma'); // Set gas to 0 for non-gas systems
                break;
            case "Electric": 
                finalEnergy = netDemand; 
                setDualEngineValue("e_51", 0, 'number-2dp-comma'); // Set gas to 0 for non-gas systems
                break;
            case "Gas":
                const afue = getNumericValue("k_52", 0.9); // Use AFUE from k_52
                const recoveryPercent = getNumericValue("d_53") / 100; // Get d_53 as decimal
                const netDemandAfterRecovery_j52 = getNumericValue("j_52"); // Use j_52 as confirmed
                
                // Apply Excel formula exactly: ((J52*(1-D53))/0.0373/277.7778/K52)
                const conversionFactor = 0.0373 * 277.7778; // More precise than 10.33
                const adjustedDemand = netDemandAfterRecovery_j52 * (1 - recoveryPercent);
                gasVolume = (adjustedDemand / conversionFactor) / afue;
                
                setDualEngineValue("e_51", gasVolume, 'number-2dp-comma');
                break;
            case "Oil":
                // Oil volume calculation now handled by calculateK54() for k_54
                setDualEngineValue("e_51", 0, 'number-2dp-comma'); // Set gas to 0 for non-gas systems
                break;
        }

        let netElectricalDemand_k51 = (systemType !== "Gas" && systemType !== "Oil") ? netDemand : 0;
        setDualEngineValue("k_51", netElectricalDemand_k51, 'number-2dp-comma');

        let systemLosses_d54 = 0;
        const waterUseMethod_d49 = getFieldValue("d_49");
        if (efficiency <= 1) {
            systemLosses_d54 = hotWaterEnergyDemand_j50 * (waterUseMethod_d49 === "PHPP Method" ? 0.25 : 0.1);
        }
        setDualEngineValue("d_54", systemLosses_d54, 'number-2dp-comma');

        let exhaustValue = (systemType === "Gas" || systemType === "Oil") ? (finalEnergy - netDemand) : 0;

        const standardCOP = 0.9;
        const efficiencyPercentRaw = standardCOP !== 0 ? (efficiency / standardCOP) : 0;
        setDualEngineValue("n_52", efficiencyPercentRaw, 'percent-0dp');
        setDualEngineValue("n_53", recoveryPercent, 'percent-0dp');
        
        return { systemLosses: systemLosses_d54 };
    }
    
    /**
     * NEW: Calculate Exhaust Losses (j_54)
     * Formula: =IF(D51="Gas", (J52-(J52*D52)), IF(D51="Oil", (J52-(J52*D52)), 0))
     * Where D52 is efficiency FACTOR (0.0-1.0)
     * MODE-AWARE: Uses Reference state values when in Reference Mode
     */
    function calculateJ54() {
        const isReferenceMode = window.TEUI?.ReferenceToggle?.isReferenceMode?.() || false;
        
        // Get values from appropriate state based on current mode
        const systemType = isReferenceMode ? getRefFieldValue("d_51") : getFieldValue("d_51");
        const netDemand_j52 = isReferenceMode ? 
            parseFloat(getRefFieldValue("j_52")) || 0 : 
            getNumericValue("j_52");
        const efficiency_d52 = isReferenceMode ? 
            parseFloat(getRefFieldValue("e_52")) || 0 : 
            getNumericValue("e_52");
        
        let exhaustLosses = 0;
        if (systemType === "Gas" || systemType === "Oil") {
            // Formula is J52 * (1 - EfficiencyFactor)
             exhaustLosses = netDemand_j52 * (1 - efficiency_d52);
        }
        return exhaustLosses;
    }

    /**
     * CORRECTED: Calculate Oil Demand Litres (k_54) 
     * Formula: =IF(D51="Oil", ((J52*(1-D53))/(36.72*0.2777778)/K52), 0)
     * MODE-AWARE: Uses Reference state values when in Reference Mode
     */
    function calculateK54() {
        const isReferenceMode = window.TEUI?.ReferenceToggle?.isReferenceMode?.() || false;
        
        // Get values from appropriate state based on current mode
        const systemType = isReferenceMode ? getRefFieldValue("d_51") : getFieldValue("d_51");
        
        let oilVolume = 0;
        if (systemType === "Oil") {
            // Get values from appropriate state
            const afue = isReferenceMode ? 
                parseFloat(getRefFieldValue("k_52")) || 0.9 : 
                getNumericValue("k_52", 0.9);
            const recoveryPercent = isReferenceMode ? 
                (parseFloat(getRefFieldValue("d_53")) || 0) / 100 : 
                getNumericValue("d_53") / 100;
            const netDemandAfterRecovery_j52 = isReferenceMode ? 
                parseFloat(getRefFieldValue("j_52")) || 0 : 
                getNumericValue("j_52");
            
            // Apply Excel formula exactly: ((J52*(1-D53))/(36.72*0.2777778)/K52)
            const conversionFactor = 36.72 * 0.2777778; // kWh per liter of oil
            const adjustedDemand = netDemandAfterRecovery_j52 * (1 - recoveryPercent);
            oilVolume = (adjustedDemand / conversionFactor) / afue;
            
            if (isReferenceMode) {
                console.log('[S07-REF-K54] Oil volume calculation:', {
                    systemType, afue, recoveryPercent, netDemandAfterRecovery_j52, 
                    adjustedDemand, oilVolume: oilVolume.toFixed(2)
                });
            }
        }
        return oilVolume;
    }

    /**
     * NEW: Calculate DHW/SHW Emissions
     * Formula: =IF(D51="Oil", K54*L30/1000, IF(D51="Gas", E51*L28/1000, 0)) - REVISED TO CORRECT TO KG as Emissions Factors are in Grams!
     * Where:
     * - D51 is the DHW energy source (Oil, Gas, Heatpump, Electric)
     * - K54 is the Oil volume (litres)
     * - L30 is the emissions factor for oil (kgCO2e/litre)
     * - E51 is the Gas volume (m³)
     * - L28 is the emissions factor for gas (kgCO2e/m³)
     */
    function calculateDHWEmissions() {
        const systemType = getFieldValue("d_51");
        const oilVolume = getNumericValue("k_54"); // Litres from k_54 (Oil demand litres)
        const gasVolume = getNumericValue("e_51"); // m³
        
        // Emission factors are in g/unit from FORMULAE-3039.csv (L28, L30)
        // StateManager fields l_28 and l_30 are expected to hold these gram values.
        const oilEmissionsFactor_g_per_L = getNumericValue("l_30", 2753); // gCO2e/litre
        const gasEmissionsFactor_g_per_m3 = getNumericValue("l_28", 1921); // gCO2e/m³
        
        let emissions_g = 0; // Calculate in grams first
        
        if (systemType === "Oil") {
            emissions_g = oilVolume * oilEmissionsFactor_g_per_L;
        } else if (systemType === "Gas") {
            emissions_g = gasVolume * gasEmissionsFactor_g_per_m3;
        }
        // For Electric and Heatpump, emissions are 0 here (handled by electricity grid intensity elsewhere).
        
        const emissions_kg = emissions_g / 1000; // Convert to kg

        // Sankey Comment: The value k_49 is stored and displayed in kgCO2e/yr.
        // If Sankey diagram requires different units (e.g., grams or tonnes), adjust accordingly when feeding data to Sankey.
        setDualEngineValue("k_49", emissions_kg, 'number-2dp-comma'); 
        
        return emissions_kg;
    }

    /**
     * Calculate all values for this section - supports dual-engine architecture
     * CRITICAL: Only calculates for current mode to prevent state contamination
     */
    function calculateAll() {
        const isReferenceMode = window.TEUI?.ReferenceToggle?.isReferenceMode?.() || false;
        
        if (isReferenceMode) {
            // In Reference Mode - calculate complete reference values with ref_ prefix
            console.log('[S07-REF-ENGINE] Starting Reference Mode calculations');
            try {
                const refWaterResults = calculateWaterUseForMode('reference');
                console.log('[S07-REF-ENGINE] Water use calculated:', refWaterResults);
                
                // CRITICAL: Also calculate heating system in Reference Mode
                const refHeatingResults = calculateHeatingSystem(refWaterResults.hotWaterEnergyDemand);
                console.log('[S07-REF-ENGINE] Heating system calculated:', refHeatingResults);
                
                // Calculate the row 54 values AFTER heating system calculations
                const j54Value = calculateJ54();
                setDualEngineValue("j_54", j54Value, 'number-2dp-comma');
                const k54Value = calculateK54();
                setDualEngineValue("k_54", k54Value, 'number-2dp-comma');
                console.log('[S07-REF-ENGINE] Row 54 values - j_54:', j54Value, 'k_54:', k54Value);
                
                // Calculate DHW emissions
                calculateDHWEmissions();
                
                console.log('[S07-REF-ENGINE] Reference Mode calculation completed');
            } catch (error) {
                console.error('[S07-REF-ENGINE] Reference Mode calculation failed:', error);
            }
        } else {
            // In Application Mode - calculate Application values only
            const waterUseResults = calculateWaterUse();
            const heatingResults = calculateHeatingSystem(waterUseResults.hotWaterEnergyDemand);
            
            // Calculate the row 54 values AFTER heating system calculations
            const j54Value = calculateJ54();
            setDualEngineValue("j_54", j54Value, 'number-2dp-comma');
            const k54Value = calculateK54();
            setDualEngineValue("k_54", k54Value, 'number-2dp-comma');
            
            // Calculate DHW emissions
            calculateDHWEmissions();

            if (window.TEUI && window.TEUI.StateManager) {
                window.TEUI.StateManager.setValue("h_69", heatingResults.systemLosses.toString(), "calculated");
            }
            
            const waterUseEvent = new CustomEvent('teui-wateruse-updated', { detail: { waterUse: waterUseResults, heatingSystem: heatingResults } });
            document.dispatchEvent(waterUseEvent);
        }
    }
    
    /**
     * Initialize all event handlers for this section
     */
    function initializeEventHandlers() {
        const sectionElement = document.getElementById('waterUse');
        if (!sectionElement) return;

        // Setup editable field handlers
        const editableFieldIds = ['e_49', 'e_50', 'k_52', 'k_45', 'm_43', 'i_44', 'i_46'];
        editableFieldIds.forEach(fieldId => {
            const field = sectionElement.querySelector(`[data-field-id="${fieldId}"]`);
            if(field && field.classList.contains('editable')) {
                if (!field.hasEditableListeners) { 
                    field.setAttribute('contenteditable', 'true');
                    field.classList.add('user-input');
                    field.addEventListener('blur', handleEditableBlur);
                    field.addEventListener('keydown', function(e) {
                         if (e.key === 'Enter') { e.preventDefault(); this.blur(); }
                    });
                    field.hasEditableListeners = true;
                }
            }
        });

        // Attach standard handler to dropdowns
        const dropdowns = sectionElement.querySelectorAll('select[data-dropdown-id]');
        dropdowns.forEach(dropdown => {
             if (!dropdown.hasDropdownListener) {
                 dropdown.addEventListener('change', handleGenericDropdownChange);
                 dropdown.hasDropdownListener = true;
             }
        });

        // Attach standard handler to sliders
        const sliders = sectionElement.querySelectorAll('input[type="range"]');
        sliders.forEach(slider => {
            if (!slider.hasSliderListener) {
                // Update display on input
                slider.addEventListener('input', handleSliderChange);
                // Update state & recalc on change (when slider released)
                slider.addEventListener('change', handleSliderChange);
                slider.hasSliderListener = true;
            }
        });

        // StateManager listeners
        if (window.TEUI && window.TEUI.StateManager) {
            window.TEUI.StateManager.addListener("d_63", calculateAll); // Occupancy
            window.TEUI.StateManager.addListener("k_52", calculateAll); // AFUE changes
            window.TEUI.StateManager.addListener("d_13", handleReferenceStandardChange); // Reference standard changes
            
            // CRITICAL: Listen for d_51 (system type) changes
            // This ensures Reference Mode efficiency values update when system type changes
            window.TEUI.StateManager.addListener("d_51", () => {
                console.log('[S07] System type (d_51) changed, triggering recalculation');
                calculateAll(); // This will update both Application and Reference calculations
            });
        }
    }
    
    /**
     * Called when the section is rendered
     */
    function onSectionRendered() {
        initializeEventHandlers();
        // Get initial values based on current mode
        const isReferenceMode = window.TEUI?.ReferenceToggle?.isReferenceMode?.() || false;
        const initialWaterMethod = (isReferenceMode ? getRefFieldValue("d_49") : getFieldValue("d_49")) || "User Defined";
        const initialSystemType = (isReferenceMode ? getRefFieldValue("d_51") : getFieldValue("d_51")) || "Heatpump";
        updateSection7Visibility(initialWaterMethod, initialSystemType);
        
        // Register dependencies with StateManager
        if (window.TEUI && window.TEUI.StateManager) {
            const sm = window.TEUI.StateManager;
            
            // Register dependencies for j_51 (Net Thermal Demand)
            sm.registerDependency('j_50', 'j_51'); // Water energy demand affects thermal demand
            sm.registerDependency('d_51', 'j_51'); // System type affects j_51 calculation
            sm.registerDependency('d_52', 'j_51'); // Efficiency affects j_51 for Heatpump/Electric
            sm.registerDependency('k_52', 'j_51'); // AFUE affects j_51 for Gas/Oil
            
            // Register dependencies for k_49 (DHW Emissions)
            sm.registerDependency('d_51', 'k_49'); // Energy source affects emissions
            sm.registerDependency('k_54', 'k_49'); // Oil volume affects emissions
            sm.registerDependency('e_51', 'k_49'); // Gas volume affects emissions
            sm.registerDependency('l_30', 'k_49'); // Oil emissions factor
            sm.registerDependency('l_28', 'k_49'); // Gas emissions factor
        }
        
        calculateAll();
    }
    
    /**
     * Updates the visibility and editability of conditional input fields (e_49, d_50)
     * and related fields (Gas/Oil outputs) based on the selected methods.
     */
    function updateSection7Visibility(waterMethod, systemType) {
        const isUserDefined = waterMethod === "User Defined";
        setFieldGhosted('e_49', !isUserDefined);
        const f49Cell = document.querySelector('.data-table tr[data-id="W.1.0"] td:nth-child(6)');
        if (f49Cell) f49Cell.classList.toggle('disabled-input', !isUserDefined);

        const isByEngineer = waterMethod === "By Engineer";
        setFieldGhosted('e_50', !isByEngineer);
        const e50Cell = document.querySelector('.data-table tr[data-id="W.1.2"] td:nth-child(5)');
        const f50Cell = document.querySelector('.data-table tr[data-id="W.1.2"] td:nth-child(6)');
        if (e50Cell) e50Cell.classList.toggle('disabled-input', !isByEngineer);
        if (f50Cell) f50Cell.classList.toggle('disabled-input', !isByEngineer);
        
        const isGas = systemType === "Gas";
        const isOil = systemType === "Oil";
        const isFossilFuel = isGas || isOil;

        setFieldGhosted('e_51', !isGas);
        const f51Cell = document.querySelector('.data-table tr[data-id="W.3.1"] td:nth-child(6)'); 
        if (f51Cell) f51Cell.classList.toggle('disabled-input', !isGas);

        // Ghost oil-related labels when not using oil
        const g54Cell = document.querySelector('.data-table tr[data-id="W.6.1"] td:nth-child(7)'); 
        if(g54Cell) g54Cell.classList.toggle('disabled-input', !isOil);
        const l54LabelCell = document.querySelector('.data-table tr[data-id="W.6.1"] td:nth-child(12)'); 
        if(l54LabelCell) l54LabelCell.classList.toggle('disabled-input', !isOil);

        setFieldGhosted('k_54', !isOil); 
        const h54Cell = document.querySelector('.data-table tr[data-id="W.6.1"] td:nth-child(8)'); 
        if(h54Cell) h54Cell.classList.toggle('disabled-input', !isOil);

        setFieldGhosted('d_52', isFossilFuel);      
        setFieldGhosted('e_52', isFossilFuel);       
        const f52Cell_label = document.querySelector('.data-table tr[data-id="W.4.1"] td:nth-child(6)'); 
        if(f52Cell_label) f52Cell_label.classList.toggle('disabled-input', isFossilFuel);

        setFieldGhosted('k_52', !isFossilFuel);      
        const l52Cell_label = document.querySelector('.data-table tr[data-id="W.4.1"] td:nth-child(12)'); 
        if(l52Cell_label) l52Cell_label.classList.toggle('disabled-input', !isFossilFuel);
    }
    
    /**
     * NEW: Helper to add/remove a ghosting class to a field's TD element.
     * Uses '.disabled-input' class for visual consistency with previous S07 implementation.
     * @param {string} fieldId 
     * @param {boolean} shouldBeGhosted 
     */
    function setFieldGhosted(fieldId, shouldBeGhosted) {
        const valueCell = document.querySelector(`td[data-field-id="${fieldId}"]`);
        if (valueCell) {
            valueCell.classList.toggle('disabled-input', shouldBeGhosted);
            const input = valueCell.querySelector('input, select, [contenteditable="true"]');
            if(input) {
                if(input.hasAttribute('contenteditable')) input.contentEditable = !shouldBeGhosted;
                else input.disabled = shouldBeGhosted;
            }
            if(valueCell.hasAttribute('contenteditable')) valueCell.contentEditable = !shouldBeGhosted;
            const labelCell = valueCell.previousElementSibling;
            if (labelCell && labelCell.tagName === 'TD' && !labelCell.hasAttribute('data-field-id')) { 
                labelCell.classList.toggle('disabled-input', shouldBeGhosted);
            }
        }
    }
    
    /**
     * Helper for generic dropdown changes
     */
    function handleGenericDropdownChange(e) {
        const fieldId = e.target.getAttribute('data-field-id') || e.target.getAttribute('data-dropdown-id');
        const value = e.target.value;
        if (fieldId && window.TEUI?.StateManager?.setValue) {
             window.TEUI.StateManager.setValue(fieldId, value, 'user-modified');
             if (fieldId === 'd_51') {
                 handleDHWSourceChange(e); // Specific logic for DHW source
             }
             // Update visibility based on current dropdown values (mode-aware)
             const isReferenceMode = window.TEUI?.ReferenceToggle?.isReferenceMode?.() || false;
             const currentWaterMethod = isReferenceMode ? getRefFieldValue("d_49") : getFieldValue("d_49");
             const currentSystemType = isReferenceMode ? getRefFieldValue("d_51") : getFieldValue("d_51");
             updateSection7Visibility(currentWaterMethod, currentSystemType);
             calculateAll(); 
        }
    }

    /**
     * Helper for generic slider input/change events
     */
    function handleSliderChange(e) {
         const fieldId = e.target.getAttribute('data-field-id');
         const value = e.target.value;
         const displaySpan = document.querySelector(`span[data-display-for="${fieldId}"]`);
         
         if(displaySpan) displaySpan.textContent = value + '%'; 

         if (fieldId && window.TEUI?.StateManager?.setValue && (e.type === 'change' || e.type === 'input') ) {
             window.TEUI.StateManager.setValue(fieldId, value, 'user-modified');
             if(e.type === 'change'){ // Only calculate fully on release
                 calculateAll();
             }
         }
         if (fieldId === 'd_52') { // Special handling for d_52 visibility
             const currentWaterMethod = getFieldValue("d_49");
             const currentSystemType = getFieldValue("d_51");
             updateSection7Visibility(currentWaterMethod, currentSystemType);
         }
    }
    
    /**
     * Specific handler for d_51 dropdown change
     */
    function handleDHWSourceChange(event) {
        const selectedSource = event.target.value;
        const d52Slider = document.querySelector('input[type="range"][data-field-id="d_52"]');
        // Assuming a span with data-display-for="d_52" exists for the slider value display
        const d52Display = document.querySelector(`span[data-display-for="d_52"]`); 

        let newMinValue = 50, newMaxValue = 400, newStep = 2, newValue = 300;
        // isEditable flag is not strictly needed here if we only set slider params and value

        if (selectedSource === "Gas" || selectedSource === "Oil") {
            newMinValue = 50; 
            newMaxValue = 98; // Max AFUE typically < 100%
            newStep = 1;     
            // When switching to Gas/Oil, d_52 (COP/Eff%) input field is ghosted.
            // Its value might be reset to a typical % for AFUE range, or left as is.
            // The actual AFUE value for calculation will come from k_52.
            // Let's set d_52 to a common AFUE % like 90 for visual consistency if user switches back.
            newValue = 90; 
        } else if (selectedSource === "Electric") {
            newMinValue = 90; // e.g. 90%
            newMaxValue = 100; // e.g. 100%
            newStep = 1;     
            newValue = 100;
        } else { // Heatpump (default)
            newMinValue = 100; // Represents COP 1.0
            newMaxValue = 450; // Represents COP 4.5
            newStep = 10;    // Represents 0.1 COP steps
            newValue = 300; // Default COP 3.0 (300%)
        }

        if (window.TEUI.StateManager) {
            // Update the state of d_52 to reflect its new default for the selected system type
            window.TEUI.StateManager.setValue("d_52", newValue.toString(), 'system-update');
        }
        if (d52Slider) {
            d52Slider.min = newMinValue;
            d52Slider.max = newMaxValue;
            d52Slider.step = newStep;
            d52Slider.value = newValue; // Visually update slider position
            if (d52Display) { 
                // If d_52 is a percentage slider, display it as %
                // If it conceptually represents COP for heatpumps, the label f_52_label handles "COP"
                d52Display.textContent = `${newValue}%`; 
            }
        }
        // Note: calculateAll() is called by handleGenericDropdownChange after d_51 state is set and this handler runs.
        // updateSection7Visibility() will then apply the correct ghosting.
    }
    
    /**
     * Handle reference standard changes (d_13) - update reference defaults
     */
    function handleReferenceStandardChange(newStandardKey) {
        if (!newStandardKey || !window.TEUI?.ReferenceValues) return;
        
        console.log(`[Section07] Reference standard changed to: ${newStandardKey}`);
        
        // Get reference values for the new standard
        const standardData = window.TEUI.ReferenceValues.getStandardData?.(newStandardKey);
        if (!standardData) {
            console.warn(`[Section07] No data found for standard: ${newStandardKey}`);
            return;
        }
        
        // Update reference defaults (clear the deck as requested)
        const section07Fields = ['d_52', 'k_52', 'd_53'];
        section07Fields.forEach(fieldId => {
            if (standardData[fieldId] !== undefined) {
                // Update reference state if StateManager supports it
                if (window.TEUI?.StateManager?.setReferenceValue) {
                    window.TEUI.StateManager.setReferenceValue(fieldId, standardData[fieldId], 'standard-update');
                }
                console.log(`[Section07] Updated reference ${fieldId} to ${standardData[fieldId]} for ${newStandardKey}`);
            }
        });
        
        // Recalculate if we're in Reference Mode
        if (window.TEUI?.ReferenceToggle?.isReferenceMode?.()) {
            calculateAll();
        }
    }
    
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
        calculateWaterUse: calculateWaterUse,
        calculateHeatingSystem: calculateHeatingSystem 
    };
})();

// Expose critical functions to global namespace for cross-module access
document.addEventListener('DOMContentLoaded', function() {
    const module = window.TEUI.SectionModules.sect07;
    if (module) { // Check if module exists
        window.TEUI.sect07.calculateWaterUse = module.calculateWaterUse;
        window.TEUI.sect07.calculateHeatingSystem = module.calculateHeatingSystem;
        window.TEUI.sect07.calculateAll = module.calculateAll;
    }
});

// Create a globally accessible safe version of calculateAll
window.calculateWaterUse = function() {
    if (window.waterUseCalculationRunning) return;
    window.waterUseCalculationRunning = true;
    try {
        if (window.TEUI?.SectionModules?.sect07?.calculateAll) {
            window.TEUI.SectionModules.sect07.calculateAll();
        } 
        else if (window.TEUI?.sect07?.calculateAll) {
            window.TEUI.sect07.calculateAll();
        }
    } catch (e) {
        // console.error("Error in wrapper:", e);
    } finally {
        window.waterUseCalculationRunning = false;
    }
};