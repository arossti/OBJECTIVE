/**
 * 4011-Section09.js
 * Occupant + Internal Gains (Section 9) module for TEUI Calculator 4.011
 * 
 * Uses the consolidated declarative approach where field definitions
 * are integrated directly into the layout structure.
 */

// Ensure namespace exists
window.TEUI = window.TEUI || {};
window.TEUI.SectionModules = window.TEUI.SectionModules || {};

// Create a section-specific namespace for global references
window.TEUI.sect09 = window.TEUI.sect09 || {};

// Global variable to track initialization state
window.TEUI.sect09.initialized = false;
window.TEUI.sect09.userInteracted = false;

// Section 9: Occupant + Internal Gains Module
window.TEUI.SectionModules.sect09 = (function() {
    //==========================================================================
    // EQUIPMENT LOADS LOOKUP TABLE
    //==========================================================================
    
    // Equipment loads by occupancy type, efficiency and elevator presence (W/m²)
    const equipmentLoadsTable = {
        "A-Assembly": {
            "Regular": { "Elevators": 9.0, "No Elevators": 7.0 },
            "Efficient": { "Elevators": 7.0, "No Elevators": 5.0 }
        },
        "B1-Detention": {
            "Regular": { "Elevators": 10.0, "No Elevators": 8.0 },
            "Efficient": { "Elevators": 8.0, "No Elevators": 6.0 }
        },
        "B2-Care": {
            "Regular": { "Elevators": 25.0, "No Elevators": 20.0 },
            "Efficient": { "Elevators": 18.0, "No Elevators": 15.0 }
        },
        "B3-DetentionCare": {
            "Regular": { "Elevators": 20.0, "No Elevators": 18.0 },
            "Efficient": { "Elevators": 14.0, "No Elevators": 12.0 }
        },
        "C-Residential": {
            "Regular": { "Elevators": 6.0, "No Elevators": 5.0 },
            "Efficient": { "Elevators": 4.0, "No Elevators": 3.5 }
        },
        "D-Business": {
            "Regular": { "Elevators": 10.0, "No Elevators": 7.0 },
            "Efficient": { "Elevators": 7.0, "No Elevators": 5.0 }
        },
        "E-Mercantile": {
            "Regular": { "Elevators": 15.0, "No Elevators": 12.0 },
            "Efficient": { "Elevators": 12.0, "No Elevators": 10.0 }
        },
        "F-Industrial": {
            "Regular": { "Elevators": 17.0, "No Elevators": 15.0 },
            "Efficient": { "Elevators": 10.0, "No Elevators": 8.0 }
        },
        "Hotels": {
            "Regular": { "No Elevators": 10, "Elevators": 12 },
            "Efficient": { "No Elevators": 7, "Elevators": 9 }
        },
        "Warehouses": {
            "Regular": { "No Elevators": 4, "Elevators": 6 },
            "Efficient": { "No Elevators": 3, "Elevators": 4 }
        },
        "Restaurants": {
            "Regular": { "No Elevators": 18, "Elevators": 20 },
            "Efficient": { "No Elevators": 15, "Elevators": 18 }
        }
    };
    
    // Default value if lookup fails
    const defaultEquipmentLoad = 5; // W/m²
    
    //==========================================================================
    // CONSOLIDATED FIELD DEFINITIONS AND LAYOUT
    //==========================================================================
    
    // Define rows with integrated field definitions
    const sectionRows = {
        // UNIT SUBHEADER - MUST COME FIRST
        "header": {
            id: "09-ID",
            rowId: "09-ID",
            label: "Internal Gains Units",
            cells: {
                c: { content: "C", classes: ["section-subheader"] },
                d: { content: "Unit Qty", classes: ["section-subheader"] },
                e: { content: "E", classes: ["section-subheader"] },
                f: { content: "F", classes: ["section-subheader"] },
                g: { content: "G", classes: ["section-subheader"] },
                h: { content: "Annual\nkWh/yr", classes: ["section-subheader"] },
                i: { content: "Htg Gain\nkWh/yr", classes: ["section-subheader", "text-right"] },
                j: { content: "Htg Gain\n%", classes: ["section-subheader"] },
                k: { content: "Cooling Gain\nkWh/yr", classes: ["section-subheader"] },
                l: { content: "Htg Gain\n%", classes: ["section-subheader"] },
                m: { content: "Reference", classes: ["section-subheader"] },
                n: { content: "N", classes: ["section-subheader"] }
            }
        },
        
        // Row 63: G.1.1 Occupants per Building (declared)
        "63": {
            id: "G.1.1",
            rowId: "G.1.1",
            label: "Occupants per Building (declared)",
            cells: {
                c: { label: "Occupants per Building (declared)" },
                d: { 
                    fieldId: "d_63", 
                    type: "editable", 
                    value: "126",
                    section: "occupantInternalGains",
                    classes: ["user-input"]
                },
                e: { content: "G.1.3", classes: ["label-prefix"] },
                f: { content: "Occupied Hrs/Day", classes: ["label-main"] },
                g: { 
                    fieldId: "g_63", 
                    type: "dropdown", 
                    dropdownId: "dd_g_63", 
                    value: "12",
                    section: "occupantInternalGains",
                    options: [
                        { value: "0", name: "0" },
                        { value: "8", name: "8" },
                        { value: "10", name: "10" },
                        { value: "12", name: "12" },
                        { value: "16", name: "16" },
                        { value: "24", name: "24" }
                    ]
                },
                i: { 
                    fieldId: "i_63", 
                    type: "calculated", 
                    value: "4380",
                    section: "occupantInternalGains",
                    dependencies: ["g_63"],
                    classes: ["text-right"]
                },
                j: { content: "/ 8760", classes: ["text-left"] }
            }
        },
        
        // Row 64: G.1.2 Occupant Activity
        "64": {
            id: "G.1.2",
            rowId: "G.1.2",
            label: "Occupant Activity",
            cells: {
                c: { label: "Occupant Activity" },
                d: { 
                    fieldId: "d_64", 
                    type: "dropdown", 
                    dropdownId: "dd_d_64", 
                    value: "Normal",
                    section: "occupantInternalGains",
                    options: [
                        { value: "Relaxed", name: "Relaxed" },
                        { value: "Normal", name: "Normal" },
                        { value: "Active", name: "Active" },
                        { value: "Hyperactive", name: "Hyperactive" }
                    ]
                },
                e: { content: "G.1.4", classes: ["label-prefix"] },
                f: { content: "Watts/pp (S+L)", classes: ["label-main"] },
                g: { 
                    fieldId: "f_64", 
                    type: "calculated", 
                    value: "117",
                    section: "occupantInternalGains",
                    dependencies: ["d_64"]
                },
                h: { 
                    fieldId: "h_64", 
                    type: "calculated", 
                    value: "64,696.02",
                    section: "occupantInternalGains",
                    dependencies: ["f_64", "d_63", "g_63"]
                },
                i: { 
                    fieldId: "i_64", 
                    type: "calculated", 
                    value: "43,426.10",
                    section: "occupantInternalGains",
                    dependencies: ["h_64"]
                },
                j: { 
                    fieldId: "j_64", 
                    type: "calculated", 
                    value: "43.39%",
                    section: "occupantInternalGains",
                    dependencies: ["i_64", "i_71"]
                },
                k: { 
                    fieldId: "k_64", 
                    type: "calculated", 
                    value: "21,269.93",
                    section: "occupantInternalGains",
                    dependencies: ["h_64"]
                },
                l: { 
                    fieldId: "l_64", 
                    type: "calculated", 
                    value: "43.39%",
                    section: "occupantInternalGains",
                    dependencies: ["k_64", "k_71"]
                }
            }
        },
        
        // Row 65: P.1 Plug Loads
        "65": {
            id: "P.1",
            rowId: "P.1",
            label: "Plug Loads",
            cells: {
                c: { label: "Plug Loads" },
                d: { 
                    fieldId: "d_65", 
                    type: "calculated", 
                    value: "7",
                    section: "occupantInternalGains"
                },
                h: { 
                    fieldId: "h_65", 
                    type: "calculated", 
                    value: "43,757.95",
                    section: "occupantInternalGains",
                    dependencies: ["d_65", "h_15"]
                },
                i: { 
                    fieldId: "i_65", 
                    type: "calculated", 
                    value: "29,371.78",
                    section: "occupantInternalGains",
                    dependencies: ["h_65"]
                },
                j: { 
                    fieldId: "j_65", 
                    type: "calculated", 
                    value: "29.35%",
                    section: "occupantInternalGains",
                    dependencies: ["i_65", "i_71"]
                },
                k: { 
                    fieldId: "k_65", 
                    type: "calculated", 
                    value: "14,386.18",
                    section: "occupantInternalGains",
                    dependencies: ["h_65"]
                },
                l: { 
                    fieldId: "l_65", 
                    type: "calculated", 
                    value: "29.35%",
                    section: "occupantInternalGains",
                    dependencies: ["k_65", "k_71"]
                },
                m: { 
                    fieldId: "m_65", 
                    type: "calculated", 
                    value: "100%",
                    section: "occupantInternalGains"
                },
                n: {
                    fieldId: "n_65",
                    type: "calculated",
                    value: "✓",
                    section: "occupantInternalGains",
                    classes: ["checkmark"]
                }
            }
        },
        
        // Row 66: P.2 Lighting Loads
        "66": {
            id: "P.2",
            rowId: "P.2",
            label: "Lighting Loads",
            cells: {
                c: { label: "Lighting Loads" },
                d: { 
                    fieldId: "d_66", 
                    type: "editable", 
                    value: "1.5",
                    section: "occupantInternalGains",
                    classes: ["user-input"]
                },
                h: { 
                    fieldId: "h_66", 
                    type: "calculated", 
                    value: "9,376.70",
                    section: "occupantInternalGains",
                    dependencies: ["d_66", "h_15"]
                },
                i: { 
                    fieldId: "i_66", 
                    type: "calculated", 
                    value: "6,293.95",
                    section: "occupantInternalGains",
                    dependencies: ["h_66"]
                },
                j: { 
                    fieldId: "j_66", 
                    type: "calculated", 
                    value: "6.29%",
                    section: "occupantInternalGains",
                    dependencies: ["i_66", "i_71"]
                },
                k: { 
                    fieldId: "k_66", 
                    type: "calculated", 
                    value: "3,082.75",
                    section: "occupantInternalGains",
                    dependencies: ["h_66"]
                },
                l: { 
                    fieldId: "l_66", 
                    type: "calculated", 
                    value: "6.29%",
                    section: "occupantInternalGains",
                    dependencies: ["k_66", "k_71"]
                },
                m: { 
                    fieldId: "m_66", 
                    type: "calculated", 
                    value: "133%",
                    section: "occupantInternalGains"
                },
                n: {
                    fieldId: "n_66",
                    type: "calculated",
                    value: "✓",
                    section: "occupantInternalGains",
                    classes: ["checkmark"]
                }
            }
        },
        
        // Row 67: P.3.1 Equipment Loads
        "67": {
            id: "P.3.1",
            rowId: "P.3.1",
            label: "Equipment Loads",
            cells: {
                c: { label: "Equipment Loads" },
                d: { 
                    fieldId: "d_67", 
                    type: "calculated", 
                    value: "5.00",
                    section: "occupantInternalGains"
                },
                e: { content: "P.3.3", classes: ["label-prefix"] },
                f: { content: "Equipment Spec", classes: ["label-main"] },
                g: { 
                    fieldId: "g_67", 
                    type: "dropdown", 
                    dropdownId: "dd_g_67", 
                    value: "Efficient",
                    section: "occupantInternalGains",
                    options: [
                        { value: "Regular", name: "Regular" },
                        { value: "Efficient", name: "Efficient" }
                    ]
                },
                h: { 
                    fieldId: "h_67", 
                    type: "calculated", 
                    value: "31,255.68",
                    section: "occupantInternalGains",
                    dependencies: ["d_67", "g_67", "h_15"]
                },
                i: { 
                    fieldId: "i_67", 
                    type: "calculated", 
                    value: "20,979.84",
                    section: "occupantInternalGains",
                    dependencies: ["h_67"]
                },
                j: { 
                    fieldId: "j_67", 
                    type: "calculated", 
                    value: "20.96%",
                    section: "occupantInternalGains",
                    dependencies: ["i_67", "i_71"]
                },
                k: { 
                    fieldId: "k_67", 
                    type: "calculated", 
                    value: "10,275.84",
                    section: "occupantInternalGains",
                    dependencies: ["h_67"]
                },
                l: { 
                    fieldId: "l_67", 
                    type: "calculated", 
                    value: "20.96%",
                    section: "occupantInternalGains",
                    dependencies: ["k_67", "k_71"]
                },
                m: { 
                    fieldId: "m_67", 
                    type: "calculated", 
                    value: "100%",
                    section: "occupantInternalGains"
                },
                n: {
                    fieldId: "n_67",
                    type: "calculated",
                    value: "✓",
                    section: "occupantInternalGains",
                    classes: ["checkmark"]
                }
            }
        },
        
        // Row 68: P.3.2 Elevator Loads
        "68": {
            id: "P.3.2",
            rowId: "P.3.2",
            label: "Elevator Loads (W/m² → Eqpt Gains)",
            cells: {
                c: { label: "Elevator Loads (W/m² → Eqpt Gains)" },
                d: { 
                    fieldId: "d_68", 
                    type: "dropdown", 
                    dropdownId: "dd_d_68", 
                    value: "No Elevators",
                    section: "occupantInternalGains",
                    options: [
                        { value: "Elevators", name: "Elevators" },
                        { value: "No Elevators", name: "No Elevators" }
                    ]
                }
            }
        },
        
        // Row 69: W.1.3 DHW System Losses
        "69": {
            id: "W.1.3",
            rowId: "W.1.3",
            label: "DHW System Losses",
            cells: {
                c: { label: "DHW System Losses" },
                h: { 
                    fieldId: "h_69", 
                    type: "calculated", 
                    value: "0.00",
                    section: "occupantInternalGains",
                    dependencies: ["d_54"]
                },
                i: { 
                    fieldId: "i_69", 
                    type: "calculated", 
                    value: "0.00",
                    section: "occupantInternalGains",
                    dependencies: ["h_69"]
                },
                j: { 
                    fieldId: "j_69", 
                    type: "calculated", 
                    value: "0.00%",
                    section: "occupantInternalGains",
                    dependencies: ["i_69", "i_71"]
                },
                k: { 
                    fieldId: "k_69", 
                    type: "calculated", 
                    value: "0.00",
                    section: "occupantInternalGains",
                    dependencies: ["h_69"]
                },
                l: { 
                    fieldId: "l_69", 
                    type: "calculated", 
                    value: "0.00%",
                    section: "occupantInternalGains",
                    dependencies: ["k_69", "k_71"]
                }
            }
        },
        
        // Row 70: G.2 Plug/Light/Eqpt. Subtotals
        "70": {
            id: "G.2",
            rowId: "G.2",
            label: "Plug/Light/Eqpt. Subtotals",
            cells: {
                c: { label: "Plug/Light/Eqpt. Subtotals" },
                h: { 
                    fieldId: "h_70", 
                    type: "calculated", 
                    value: "84,390.34",
                    section: "occupantInternalGains",
                    dependencies: ["h_65", "h_66", "h_67", "h_69"]
                },
                i: { 
                    fieldId: "i_70", 
                    type: "calculated", 
                    value: "56,645.57",
                    section: "occupantInternalGains",
                    dependencies: ["i_65", "i_66", "i_67", "i_69"]
                },
                k: { 
                    fieldId: "k_70", 
                    type: "calculated", 
                    value: "27,744.77",
                    section: "occupantInternalGains",
                    dependencies: ["k_65", "k_66", "k_67", "k_69"]
                }
            }
        },
        
        // Row 71: Internal Gains Totals
        "71": {
            id: "Totals",
            rowId: "Totals",
            label: "Internal Gains Totals",
            cells: {
                c: { label: "Internal Gains Totals" },
                h: { 
                    fieldId: "h_71", 
                    type: "calculated", 
                    value: "149,086.36",
                    section: "occupantInternalGains",
                    dependencies: ["h_64", "h_70"]
                },
                i: { 
                    fieldId: "i_71", 
                    type: "calculated", 
                    value: "100,071.67",
                    section: "occupantInternalGains",
                    dependencies: ["i_64", "i_70"]
                },
                j: { 
                    fieldId: "j_71", 
                    type: "calculated", 
                    value: "100%",
                    section: "occupantInternalGains"
                },
                k: { 
                    fieldId: "k_71", 
                    type: "calculated", 
                    value: "49,014.69",
                    section: "occupantInternalGains",
                    dependencies: ["k_64", "k_70"]
                },
                l: { 
                    fieldId: "l_71", 
                    type: "calculated", 
                    value: "100%",
                    section: "occupantInternalGains"
                }
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
                        section: cell.section || "occupantInternalGains"
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
     * Calculate Occupant Activity watts based on activity level
     */
    function calculateActivityWatts(activityLevel) {
        // Use precise values derived from SCHEDULES-3037.csv G32:G43
        const activityWatts = {
            "Relaxed": 96.71,    // Was 97
            "Normal": 117.23,   // Was 117
            "Active": 219.80,   // Was 220
            "Hyperactive": 424.95 // Was 425
        };
        
        return activityWatts[activityLevel] || 117.23; // Default to Normal (precise value)
    }
    
    /**
     * Calculate Occupied Hours based on daily hours
     */
    function calculateOccupiedHoursRatio(dailyHours) {
        const hours = parseInt(dailyHours, 10) || 0;
        
        // Handle special case of 0 hours
        if (hours === 0) {
            return "0"; // Unoccupied building like cold storage
        }
        
        const annualHours = hours * 365;
        return annualHours.toString(); // Just return the annual hours, not the ratio
    }
    
    /**
     * Calculate the heating/cooling split based on cooling days from Section 03
     * @returns {Object} Object with heatingRatio and coolingRatio properties
     */
    function calculateHeatingCoolingSplit() {
        // Get cooling days from Section 03, cell m_19
        const coolingDays = getNumericValue("m_19") || 120; // Default to 120 if not set
        
        // Calculate heating days
        const heatingDays = 365 - coolingDays;
        
        // Calculate ratios
        const heatingRatio = heatingDays / 365;
        const coolingRatio = coolingDays / 365;
        
        return {
            heatingRatio: heatingRatio,
            coolingRatio: coolingRatio
        };
    }
    
    /**
     * Calculate Annual kWh/yr for occupants
     */
    function calculateOccupantEnergy() {
        // Get values
        const occupants = getNumericValue("d_63");
        const dailyHours = getNumericValue("g_63");
        const watts = getNumericValue("f_64");
        
        // Calculate annual energy
        const annualHours = dailyHours * 365;
        const energy = occupants * watts * annualHours / 1000; // Convert W to kW
        
        // Get heating/cooling split
        const { heatingRatio, coolingRatio } = calculateHeatingCoolingSplit();
        
        // Update fields
        setCalculatedValue("h_64", formatNumber(energy));
        setCalculatedValue("i_64", formatNumber(energy * heatingRatio)); // Heating portion
        setCalculatedValue("k_64", formatNumber(energy * coolingRatio)); // Cooling portion
        
        return energy;
    }
    
    /**
     * Calculate Annual kWh/yr for plug loads
     */
    function calculatePlugLoads() {
        // Get reference values
        const referenceStandard = getFieldValue("d_13") || "";
        const buildingType = getFieldValue("d_12") || "";
        
        // Determine plug load density
        let plugLoadDensity;
        
        const isPassivhaus = referenceStandard.includes("PH");
        const isResidentialOrCare = buildingType === "C - Residential" || 
                                    buildingType === "B1 - Detention" || 
                                    buildingType === "B2 - Care and Treatment" || 
                                    buildingType === "B3 - Detention Care & Treatment";
        
        if (isPassivhaus) {
            plugLoadDensity = 2.1;
        } else if (isResidentialOrCare) {
            plugLoadDensity = 5;
        } else {
            plugLoadDensity = 7;
        }
        
        // Update density field
        setCalculatedValue("d_65", formatNumber(plugLoadDensity));
        
        // Calculate annual energy based on OCCUPIED HOURS (i_63) per Excel formula structure
        const conditionedArea = getNumericValue("h_15");
        const occupiedHours = getNumericValue("i_63"); // Use annual occupied hours
        const energy = plugLoadDensity * conditionedArea * occupiedHours / 1000; // W/m² to kWh/yr using occupied hours
        
        // Get heating/cooling split - Use DYNAMIC ratio for Plug Loads per user request
        const { heatingRatio, coolingRatio } = calculateHeatingCoolingSplit();
        
        // Update energy fields
        setCalculatedValue("h_65", formatNumber(energy));
        setCalculatedValue("i_65", formatNumber(energy * heatingRatio)); // Use dynamic heating ratio
        setCalculatedValue("k_65", formatNumber(energy * coolingRatio)); // Use dynamic cooling ratio
        
        // Calculate percentage against reference value
        // Reference is 5 W/m² for residential/care or 7 W/m² for others
        const referencePlugLoad = isResidentialOrCare ? 5 : 7;
        
        // If using PH standard, then reference is higher (5 or 7) than actual (2.1)
        // so percentage will be lower (which is good)
        const percentOfReference = Math.round((plugLoadDensity / referencePlugLoad) * 100);
        setCalculatedValue("m_65", percentOfReference + "%");
        
        // Set checkmark or X based on whether it's below reference
        if (plugLoadDensity <= referencePlugLoad) {
            setCalculatedValue("n_65", "✓");
            setElementClass("n_65", "checkmark");
        } else {
            setCalculatedValue("n_65", "✗");
            setElementClass("n_65", "warning");
        }
        
        return energy;
    }
    
    /**
     * Calculate Annual kWh/yr for lighting loads
     */
    function calculateLightingLoads() {
        // Get values
        const lightingDensity = getNumericValue("d_66");
        const conditionedArea = getNumericValue("h_15");
        
        // Calculate annual energy based on OCCUPIED HOURS (i_63) per Excel formula structure
        const occupiedHours = getNumericValue("i_63"); // Use annual occupied hours
        const energy = lightingDensity * conditionedArea * occupiedHours / 1000; // W/m² to kWh/yr using occupied hours
        
        // Get heating/cooling split - Use DYNAMIC ratio for Lighting Loads
        const { heatingRatio, coolingRatio } = calculateHeatingCoolingSplit();
        
        // Update fields
        setCalculatedValue("h_66", formatNumber(energy));
        setCalculatedValue("i_66", formatNumber(energy * heatingRatio)); // Use dynamic heating ratio
        setCalculatedValue("k_66", formatNumber(energy * coolingRatio)); // Use dynamic cooling ratio
        
        // Calculate percentage against reference value
        // Based on CSV data, reference appears to be around 1.13 W/m²
        const referenceLightingLoad = 1.13;
        const percentOfReference = Math.round((lightingDensity / referenceLightingLoad) * 100);
        setCalculatedValue("m_66", percentOfReference + "%");
        
        // Set checkmark or X based on standard comparison
        // In this case, we're checking if it exceeds 133% of reference
        if (percentOfReference <= 133) {
            setCalculatedValue("n_66", "✓");
            setElementClass("n_66", "checkmark");
        } else {
            setCalculatedValue("n_66", "✗");
            setElementClass("n_66", "warning");
        }
        
        return energy;
    }
    
    /**
     * Calculate Annual kWh/yr for equipment loads
     */
    function calculateEquipmentLoads() {
        try {
            // Get values from dropdowns
            let buildingType = "A-Assembly"; // Default
            let efficiencyType = "Efficient"; // Default to Efficient (was "Regular")
            let elevatorStatus = "No Elevators"; // Default
            
            // Get building type from dropdown
            const buildingTypeDropdown = document.querySelector('select[data-field-id="d_12"]');
            if (buildingTypeDropdown && buildingTypeDropdown.tagName === 'SELECT') {
                buildingType = buildingTypeDropdown.options[buildingTypeDropdown.selectedIndex].value;
            } else {
                const buildingTypeCell = document.querySelector('[data-field-id="d_12"]');
                if (buildingTypeCell) {
                    buildingType = buildingTypeCell.textContent.trim();
                }
            }
            
            // Get efficiency setting - now in column G in the CSV
            const efficiencyDropdown = document.querySelector('select[data-field-id="g_67"]');
            if (efficiencyDropdown && efficiencyDropdown.tagName === 'SELECT') {
                efficiencyType = efficiencyDropdown.options[efficiencyDropdown.selectedIndex].value;
            } else {
                const efficiencyElement = document.querySelector('[data-field-id="g_67"]');
                if (efficiencyElement) {
                    efficiencyType = efficiencyElement.textContent.trim();
                }
            }
            
            // Get elevator setting
            const elevatorDropdown = document.querySelector('select[data-field-id="d_68"]');
            if (elevatorDropdown && elevatorDropdown.tagName === 'SELECT') {
                elevatorStatus = elevatorDropdown.options[elevatorDropdown.selectedIndex].value;
            } else {
                const elevatorElement = document.querySelector('[data-field-id="d_68"]');
                if (elevatorElement) {
                    elevatorStatus = elevatorElement.textContent.trim();
                }
            }
            
            // Format building type to match lookup table
            buildingType = formatBuildingTypeForLookup(buildingType);
            
            // Lookup the equipment density value with fallbacks
            let densityValue = 5.0; // Default
            
            if (equipmentLoadsTable[buildingType]) {
                if (equipmentLoadsTable[buildingType][efficiencyType]) {
                    if (equipmentLoadsTable[buildingType][efficiencyType][elevatorStatus] !== undefined) {
                        densityValue = equipmentLoadsTable[buildingType][efficiencyType][elevatorStatus];
                    } else {
                        const firstElevatorStatus = Object.keys(equipmentLoadsTable[buildingType][efficiencyType])[0];
                        densityValue = equipmentLoadsTable[buildingType][efficiencyType][firstElevatorStatus];
                    }
                } else {
                    const firstEfficiencyType = Object.keys(equipmentLoadsTable[buildingType])[0];
                    if (equipmentLoadsTable[buildingType][firstEfficiencyType][elevatorStatus] !== undefined) {
                        densityValue = equipmentLoadsTable[buildingType][firstEfficiencyType][elevatorStatus];
                    } else {
                        const firstElevatorStatus = Object.keys(equipmentLoadsTable[buildingType][firstEfficiencyType])[0];
                        densityValue = equipmentLoadsTable[buildingType][firstEfficiencyType][firstElevatorStatus];
                    }
                }
            } else if (equipmentLoadsTable.default && equipmentLoadsTable.default[efficiencyType] && 
                       equipmentLoadsTable.default[efficiencyType][elevatorStatus] !== undefined) {
                densityValue = equipmentLoadsTable.default[efficiencyType][elevatorStatus];
            }
            
            // Update the equipment density field
            const densityField = document.querySelector('[data-field-id="d_67"]');
            if (densityField) {
                densityField.textContent = densityValue;
            }
            
            // Update StateManager
            if (window.TEUI?.StateManager?.setValue) {
                window.TEUI.StateManager.setValue("d_67", densityValue.toString(), 'calculated');
            }
            
            // Calculate annual energy based on OCCUPIED HOURS (i_63) per Excel formula structure
            // Use getNumericValue to safely get the floor area and occupied hours
            const floorArea = getNumericValue("h_15");
            const occupiedHours = getNumericValue("i_63"); // Use annual occupied hours
            
            const annualEnergy = (densityValue * floorArea * occupiedHours / 1000) || 0; // W/m² to kWh/yr using occupied hours
            
            // Get heating/cooling split - Use DYNAMIC ratio for Equipment Loads
            const { heatingRatio, coolingRatio } = calculateHeatingCoolingSplit();
            
            const heatingPortion = annualEnergy * heatingRatio; // Use dynamic heating ratio
            const coolingPortion = annualEnergy * coolingRatio; // Use dynamic cooling ratio
            
            // Update fields
            updateField("h_67", annualEnergy);
            updateField("i_67", heatingPortion);
            updateField("k_67", coolingPortion);
            
            // Calculate percentage against reference value
            // Reference is 100% - equipment loads are already based on lookup tables with occupancy-specific values
            setCalculatedValue("m_67", "100%");
            
            // Set checkmark for equipment loads - always a checkmark since we're using the table values
            setCalculatedValue("n_67", "✓");
            setElementClass("n_67", "checkmark");
            
            // Update percentages and totals
            calculateTotals();
        } catch (error) {
            // REMOVE: console.error("❌ Error calculating equipment loads:", error);
        }
        
        // Helper function to update a field
        function updateField(fieldId, value) {
            const field = document.querySelector(`[data-field-id="${fieldId}"]`);
            if (field) {
                field.textContent = formatNumber(value);
            }
            
            if (window.TEUI?.StateManager?.setValue) {
                window.TEUI.StateManager.setValue(fieldId, value, "calculated");
            }
        }
        
        // Helper function to format building type
        function formatBuildingTypeForLookup(rawType) {
            // If it's already in the right format, return it
            if (typeof equipmentLoadsTable !== 'undefined' && Object.keys(equipmentLoadsTable).includes(rawType)) {
                return rawType;
            }
            
            try {
                // Extract the category (e.g., "A - Assembly" -> "A")
                const categoryMatch = rawType.match(/^([A-F][0-9]?)\s*[-–]\s*/);
                if (categoryMatch) {
                    const category = categoryMatch[1].trim();
                    
                    // Map category to lookup key
                    if (category === 'A') return 'A-Assembly';
                    if (category === 'B1') return 'B1-Detention';
                    if (category === 'B2') return 'B2-Care';
                    if (category === 'B3') return 'B3-DetentionCare';
                    if (category === 'C') return 'C-Residential';
                    if (category === 'D') return 'D-Business';
                    if (category === 'E') return 'E-Mercantile';
                    if (category === 'F') return 'F-Industrial';
                } 
                
                // Try extracting just the first character as fallback
                if (rawType.length > 0) {
                    const firstChar = rawType.charAt(0);
                    if (firstChar === 'A') return 'A-Assembly';
                    if (firstChar === 'C') return 'C-Residential';
                    if (firstChar === 'D') return 'D-Business';
                    if (firstChar === 'E') return 'E-Mercantile';
                    if (firstChar === 'F') return 'F-Industrial';
                    
                    // Special case for B categories
                    if (firstChar === 'B') {
                        if (rawType.includes('1') || rawType.includes('Detention')) {
                            return 'B1-Detention';
                        } else if (rawType.includes('2') || (rawType.includes('Care') && !rawType.includes('Detention'))) {
                            return 'B2-Care';
                        } else if (rawType.includes('3') || (rawType.includes('Care') && rawType.includes('Detention'))) {
                            return 'B3-DetentionCare';
                        }
                        return 'B3-DetentionCare'; // Default B case
                    }
                }
            } catch (e) {
                // REMOVE: console.error("Error formatting building type:", e);
            }
            
            return 'A-Assembly'; // Default fallback
        }
    }
    
    /**
     * Calculate subtotals and totals
     */
    function calculateTotals() {
        // Get values for components
        const dhwLosses = getNumericValue("h_69");
        // Split DHW losses using DYNAMIC ratio
        const { heatingRatio: dhwHeatingRatio, coolingRatio: dhwCoolingRatio } = calculateHeatingCoolingSplit();
        const dhwHeating = dhwLosses * dhwHeatingRatio;
        const dhwCooling = dhwLosses * dhwCoolingRatio;
        setCalculatedValue("i_69", formatNumber(dhwHeating));
        setCalculatedValue("k_69", formatNumber(dhwCooling));
        
        // Energy values
        const plugEnergy = getNumericValue("h_65");
        const lightingEnergy = getNumericValue("h_66");
        const equipmentEnergy = getNumericValue("h_67");
        const occupantEnergy = getNumericValue("h_64");
        
        // Heating values
        const plugHeating = getNumericValue("i_65");
        const lightingHeating = getNumericValue("i_66");
        const equipmentHeating = getNumericValue("i_67");
        const occupantHeating = getNumericValue("i_64");
        
        // Cooling values
        const plugCooling = getNumericValue("k_65");
        const lightingCooling = getNumericValue("k_66");
        const equipmentCooling = getNumericValue("k_67");
        const occupantCooling = getNumericValue("k_64");
        
        // Calculate subtotals
        const pleTotalEnergy = plugEnergy + lightingEnergy + equipmentEnergy + dhwLosses;
        const pleHeatingTotal = plugHeating + lightingHeating + equipmentHeating + dhwHeating;
        const pleCoolingTotal = plugCooling + lightingCooling + equipmentCooling + dhwCooling;
        
        // Update subtotal fields
        setCalculatedValue("h_70", formatNumber(pleTotalEnergy));
        setCalculatedValue("i_70", formatNumber(pleHeatingTotal));
        setCalculatedValue("k_70", formatNumber(pleCoolingTotal));
        
        // Calculate grand totals
        const totalEnergy = pleTotalEnergy + occupantEnergy;
        const totalHeating = pleHeatingTotal + occupantHeating;
        const totalCooling = pleCoolingTotal + occupantCooling;
        
        // Update total fields
        setCalculatedValue("h_71", formatNumber(totalEnergy));
        setCalculatedValue("i_71", formatNumber(totalHeating));
        setCalculatedValue("k_71", formatNumber(totalCooling));
        
        // Update percentage fields
        updatePercentages(totalHeating, totalCooling);
    }
    
    /**
     * Update percentage fields
     */
    function updatePercentages(totalHeating, totalCooling) {
        // Helper to calculate and set percentage
        const setPercentage = (valueFieldId, percentageFieldId, total) => {
            if (total > 0) {
                const value = getNumericValue(valueFieldId);
                const percent = Math.round((value / total) * 100);
                setCalculatedValue(percentageFieldId, `${percent}%`);
            }
        };
        
        // Heating percentages
        if (totalHeating > 0) {
            setPercentage("i_64", "j_64", totalHeating); // Occupant
            setPercentage("i_65", "j_65", totalHeating); // Plug
            setPercentage("i_66", "j_66", totalHeating); // Lighting
            setPercentage("i_67", "j_67", totalHeating); // Equipment
            setPercentage("i_69", "j_69", totalHeating); // DHW
        }
        
        // Cooling percentages
        if (totalCooling > 0) {
            setPercentage("k_64", "l_64", totalCooling); // Occupant
            setPercentage("k_65", "l_65", totalCooling); // Plug
            setPercentage("k_66", "l_66", totalCooling); // Lighting
            setPercentage("k_67", "l_67", totalCooling); // Equipment
            setPercentage("k_69", "l_69", totalCooling); // DHW
        }
    }
    
    /**
     * Helper function to get a field value
     */
    function getFieldValue(fieldId) {
        // Try to get from StateManager first
        if (window.TEUI?.StateManager?.getValue) {
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
        
        return "";
    }
    
    /**
     * Helper function to safely get a numeric value from a field
     * This handles both string and number input types
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
     * Helper function to set a calculated field value
     */
    function setCalculatedValue(fieldId, value) {
        // Set in state manager
        if (window.TEUI?.StateManager?.setValue) {
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
     * Format a number for display with thousand separators and proper decimals
     */
    function formatNumber(value) {
        // Ensure value is a number
        const numValue = parseFloat(value);
        
        // Handle invalid values
        if (isNaN(numValue)) {
            return "0";
        }
        
        // Check if value is very small
        if (Math.abs(numValue) < 0.01 && numValue !== 0) {
            return numValue.toFixed(2);
        }
        
        // Check if value is integer
        if (Number.isInteger(numValue)) {
            return numValue.toLocaleString(undefined, {
                minimumFractionDigits: 0,
                maximumFractionDigits: 0
            });
        }
        
        // Format with 2 decimal places
        return numValue.toLocaleString(undefined, {
            minimumFractionDigits: 2,
            maximumFractionDigits: 2
        });
    }
    
    /**
     * Calculate all values for this section
     */
    function calculateAll() {
        // Calculate individual components
        const activityLevel = getFieldValue("d_64");
        const activityWatts = calculateActivityWatts(activityLevel);
        setCalculatedValue("f_64", activityWatts.toString());
        
        const dailyHours = getFieldValue("g_63");
        const hoursRatio = calculateOccupiedHoursRatio(dailyHours);
        setCalculatedValue("i_63", hoursRatio);
        
        // Calculate energy usage
        calculateOccupantEnergy();
        calculatePlugLoads();
        calculateLightingLoads();
        calculateEquipmentLoads();
        
        // Calculate subtotals and totals
        calculateTotals();
    }
    
    /**
     * Initialize all event handlers for this section
     */
    function initializeEventHandlers() {
        const sectionElement = document.getElementById('occupantInternalGains');
        if (!sectionElement) return;
        
        // Add handlers for editable fields
        const editableFields = sectionElement.querySelectorAll('.user-input, [contenteditable="true"]');
        editableFields.forEach(field => {
            // Make text fields editable
            if (field.classList.contains('user-input')) {
                field.setAttribute('contenteditable', 'true');
            }
            
            // Handle blur event for text fields
            field.addEventListener('blur', function() {
                const fieldId = this.getAttribute('data-field-id');
                if (!fieldId) return;
                
                // Handle numeric values
                if (this.getAttribute('contenteditable') === 'true') {
                    // Get and clean the value
                    const newValue = this.textContent.trim().replace(/,/g, '');
                    
                    // Store the value
                    if (window.TEUI?.StateManager?.setValue) {
                        window.TEUI.StateManager.setValue(fieldId, newValue, 'user-modified');
                    }
                    
                    // Format the display
                    if (!isNaN(parseFloat(newValue))) {
                        this.textContent = formatNumber(newValue);
                    }
                    
                    // Recalculate
                    calculateAll();
                }
            });
            
            // Handle Enter key
            field.addEventListener('keydown', function(e) {
                if (e.key === 'Enter') {
                    e.preventDefault(); // Prevent adding a newline
                    this.blur(); // Remove focus to trigger the blur event
                }
            });
        });
        
        // Add dropdown change event handlers
        const dropdowns = sectionElement.querySelectorAll('select');
        dropdowns.forEach(dropdown => {
            dropdown.addEventListener('change', function() {
                const fieldId = this.getAttribute('data-field-id');
                if (!fieldId) return;
                
                // Store the value
                if (window.TEUI?.StateManager?.setValue) {
                    window.TEUI.StateManager.setValue(fieldId, this.value, 'user-modified');
                }
                
                // Recalculate
                calculateAll();
            });
        });
        
        // Add special handling for equipment dropdowns
        setupEquipmentDropdownListeners();
        
        // Add cross-section dependency updates
        addStateManagerListeners();
    }
    
    /**
     * Add listeners for cross-section dependencies
     */
    function addStateManagerListeners() {
        if (!window.TEUI?.StateManager) return;
        
        // Define dependencies
        const dependencies = [
            { source: "h_15", handler: calculateAll, description: "Update when conditioned area changes" },
            { source: "d_54", handler: function() {
                // Get DHW system losses
                const dhwLosses = parseFloat(getFieldValue("d_54")) || 0;
                setCalculatedValue("h_69", formatNumber(dhwLosses));
                calculateTotals();
            }, description: "Update when DHW system losses change" },
            { source: "d_12", handler: function() {
                calculatePlugLoads();
                calculateEquipmentLoads();
                calculateTotals();
            }, description: "Update when building type changes" },
            { source: "d_13", handler: function() {
                calculatePlugLoads();
                calculateTotals();
            }, description: "Update when reference standard changes" },
            { source: "m_19", handler: function() {
                // Recalculate all loads when cooling days change
                calculateOccupantEnergy();
                calculatePlugLoads();
                calculateLightingLoads();
                calculateEquipmentLoads();
                calculateTotals();
            }, description: "Update when cooling days change" }
        ];
        
        // Register each dependency
        dependencies.forEach(dep => {
            window.TEUI.StateManager.addListener(dep.source, dep.handler);
        });
    }
    
    /**
     * Register with StateManager and set proper default values
     */
    function registerWithStateManager() {
        if (!window.TEUI?.StateManager) return;
        
        // Register default values with default state (not user-modified)
        // This ensures they are used as initial values but don't override user choices
        if (window.TEUI.StateManager.setValue) {
            window.TEUI.StateManager.setValue("g_67", "Efficient", 'default');
            window.TEUI.StateManager.setValue("d_68", "No Elevators", 'default');
            window.TEUI.StateManager.setValue("d_67", "5.00", 'calculated');
        }
        
        // Register key fields that other sections might depend on
        const keysToRegister = [
            // Total internal gains values
            { id: "h_71", value: "0", state: "calculated" }, // Total internal gains
            { id: "i_71", value: "0", state: "calculated" }, // Heating internal gains
            { id: "k_71", value: "0", state: "calculated" }, // Cooling internal gains
            
            // Individual loads
            { id: "h_64", value: "0", state: "calculated" }, // Occupant energy
            { id: "h_65", value: "0", state: "calculated" }, // Plug loads
            { id: "h_66", value: "0", state: "calculated" }, // Lighting loads
            { id: "h_67", value: "0", state: "calculated" }, // Equipment loads
            { id: "h_69", value: "0", state: "calculated" }  // DHW system losses
        ];
        
        // Register each key
        keysToRegister.forEach(key => {
            window.TEUI.StateManager.setValue(key.id, key.value, key.state);
        });
        
        // Register cross-section dependencies
        const dependencies = [
            // Building info dependencies
            { source: "d_12", target: "d_65", description: "Plug loads density based on building type" },
            { source: "d_12", target: "h_67", description: "Equipment loads based on building type" },
            { source: "d_13", target: "d_65", description: "Plug loads density based on reference standard" },
            { source: "h_15", target: "h_65", description: "Plug loads total based on conditioned area" },
            { source: "h_15", target: "h_66", description: "Lighting loads total based on conditioned area" },
            { source: "h_15", target: "h_67", description: "Equipment loads total based on conditioned area" },
            
            // Water use dependency
            { source: "d_54", target: "h_69", description: "DHW system losses" },
            
            // Cooling days dependency
            { source: "m_19", target: "i_64", description: "Heating/cooling split based on cooling days" },
            { source: "m_19", target: "i_65", description: "Heating/cooling split based on cooling days" },
            { source: "m_19", target: "i_66", description: "Heating/cooling split based on cooling days" },
            { source: "m_19", target: "i_67", description: "Heating/cooling split based on cooling days" },
            { source: "m_19", target: "k_64", description: "Heating/cooling split based on cooling days" },
            { source: "m_19", target: "k_65", description: "Heating/cooling split based on cooling days" },
            { source: "m_19", target: "k_66", description: "Heating/cooling split based on cooling days" },
            { source: "m_19", target: "k_67", description: "Heating/cooling split based on cooling days" },
            
            // Key dependencies affecting other sections
            { source: "i_71", target: "i_80", description: "Internal gains contribute to heating utilization factor" },
            { source: "h_71", target: "h_129", description: "Internal gains contribute to cooling loads" }
        ];
        
        // Register each dependency
        dependencies.forEach(dep => {
            window.TEUI.StateManager.registerDependency(dep.source, dep.target, dep.description);
        });
    }
    
    /**
     * Called when the section is rendered
     */
    function onSectionRendered() {
        // Register with state manager and integrator
        registerWithStateManager();
        registerWithSectionIntegrator();

        // Initialize event handlers
        initializeEventHandlers();

        // Initialize default dropdown values and related calculated fields (Moved from setupValueEnforcement)
        // Check initialization/interaction flags to prevent overriding user changes
        if (!(window.TEUI.sect09.initialized && window.TEUI.sect09.userInteracted)) {
            const efficiencyDropdown = document.querySelector('select[data-field-id="g_67"]');
            const elevatorDropdown = document.querySelector('select[data-field-id="d_68"]');
            const densityField = document.querySelector('[data-field-id="d_67"]');
            
            if (efficiencyDropdown) {
                efficiencyDropdown.value = "Efficient";
                if (window.TEUI?.StateManager?.setValue) {
                    window.TEUI.StateManager.setValue("g_67", "Efficient", "default");
                }
            }
            if (elevatorDropdown) {
                elevatorDropdown.value = "No Elevators";
                if (window.TEUI?.StateManager?.setValue) {
                    window.TEUI.StateManager.setValue("d_68", "No Elevators", "default");
                }
            }
            if (densityField) {
                 densityField.textContent = formatNumber(5.00); // Use formatNumber for consistency
                if (window.TEUI?.StateManager?.setValue) {
                    window.TEUI.StateManager.setValue("d_67", "5.00", "default");
                }
            }
            window.TEUI.sect09.initialized = true;
            // Trigger calculation involving these defaults
            calculateEquipmentLoads();
        }
        
        // Add checkmark styles
        addCheckmarkStyles();
        
        // Run initial full calculation (will re-run parts if defaults were set)
        calculateAll();
    }
    
    /**
     * Register with SectionIntegrator
     */
    function registerWithSectionIntegrator() {
        if (!window.TEUI?.SectionIntegrator) return;
        
        // Create the integration registration
        const internalGainsIntegration = {
            name: 'Internal Gains',
            sections: ['sect09', 'sect11', 'sect14'],
            description: 'Internal heat gains for TEDI and energy calculations',
            values: [
                { fieldId: 'h_71', name: 'Total Internal Gains', unit: 'kWh/yr', type: 'energy-internal' },
                { fieldId: 'i_71', name: 'Heating Internal Gains', unit: 'kWh/yr', type: 'energy-heating' },
                { fieldId: 'k_71', name: 'Cooling Internal Gains', unit: 'kWh/yr', type: 'energy-cooling' }
            ],
            initialize: function() {
                // Initial calculation when integration is initialized
                calculateAll();
            }
        };
        
        // Register with SectionIntegrator if it has a registry
        if (typeof window.TEUI.SectionIntegrator.getRegisteredIntegrations === 'function') {
            const integrations = window.TEUI.SectionIntegrator.getRegisteredIntegrations();
            if (!integrations.internalGains) {
                // If the SectionIntegrator has a registeredIntegrations property
                if (window.TEUI.SectionIntegrator.registeredIntegrations) {
                    window.TEUI.SectionIntegrator.registeredIntegrations.internalGains = internalGainsIntegration;
                }
            }
        }
    }
    
    /**
     * Set up direct event listeners for equipment-related dropdowns
     * This ensures they trigger equipment load calculations immediately
     */
    function setupEquipmentDropdownListeners() {
        // Map of fieldIds to their descriptions for more generic handling
        const dropdownFields = [
            { fieldId: "g_67", description: "Equipment efficiency" },
            { fieldId: "d_68", description: "Elevator status" },
            { fieldId: "d_12", description: "Building type" }
        ];
        
        // Set up listeners for all relevant dropdowns
        dropdownFields.forEach(field => {
            const dropdown = document.querySelector(`select[data-field-id="${field.fieldId}"]`);
            if (!dropdown) return;
            
            // Remove existing listeners by cloning
            const newDropdown = dropdown.cloneNode(true);
            if (dropdown.parentNode) {
                dropdown.parentNode.replaceChild(newDropdown, dropdown);
            }
            
            // Add change listener
            newDropdown.addEventListener('change', function(e) {
                // Flag as user interacted for original section09 dropdowns
                if ((field.fieldId === "g_67" || field.fieldId === "d_68") && e.isTrusted) {
                    if (window.TEUI && window.TEUI.sect09) {
                        window.TEUI.sect09.userInteracted = true;
                    }
                }
                
                // Store value in StateManager 
                if (window.TEUI?.StateManager?.setValue) {
                    // Mark as user-modified for real user interactions to prevent overrides
                    const state = e.isTrusted ? 'user-modified' : 'calculated';
                    window.TEUI.StateManager.setValue(field.fieldId, this.value, state);
                }
                
                // Trigger calculation
                calculateEquipmentLoads();
            });
        });
    }
    
    /**
     * Helper function to set class on an element
     */
    function setElementClass(fieldId, className) {
        const element = document.querySelector(`[data-field-id="${fieldId}"]`);
        if (element) {
            // Remove existing style classes
            element.classList.remove("checkmark", "warning");
            // Add new class
            element.classList.add(className);
        }
    }

    // Add CSS styles for checkmarks and X marks
    function addCheckmarkStyles() {
        // Check if the styles already exist
        let styleElement = document.getElementById('checkmark-styles');
        if (!styleElement) {
            // Create style element
            styleElement = document.createElement('style');
            styleElement.id = 'checkmark-styles';
            styleElement.textContent = `
                .checkmark {
                    color: green;
                    font-weight: bold;
                }
                .warning {
                    color: red;
                    font-weight: bold;
                }
            `;
            document.head.appendChild(styleElement);
        }
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
        calculateOccupantEnergy: calculateOccupantEnergy,
        calculatePlugLoads: calculatePlugLoads,
        calculateLightingLoads: calculateLightingLoads,
        calculateEquipmentLoads: calculateEquipmentLoads,
        calculateTotals: calculateTotals,
        setupEquipmentDropdownListeners: setupEquipmentDropdownListeners,
        
        // Registration functions
        registerWithStateManager: registerWithStateManager,
        registerWithSectionIntegrator: registerWithSectionIntegrator,
        
        // Public values needed by other sections
        getInternalGainsTotal: function() { return getFieldValue("h_71"); },
        getInternalGainsHeating: function() { return getFieldValue("i_71"); },
        getInternalGainsCooling: function() { return getFieldValue("k_71"); }
    };
})();

// Initialize when the section is rendered - THIS IS THE PRIMARY INITIALIZATION POINT
document.addEventListener('teui-section-rendered', function(event) {
    if (event.detail?.sectionId === 'occupantInternalGains') {
        // Use a small delay to ensure other elements might be ready
    setTimeout(() => {
             if (window.TEUI?.SectionModules?.sect09?.onSectionRendered) {
            window.TEUI.SectionModules.sect09.onSectionRendered();
        }
        }, 100); 
    }
});

// Clean up periodic recalculation log noise
if (window.console && window.console.log) {
    const originalLog = window.console.log;
    window.console.log = function(...args) {
        if (args[0] === "Periodic TEUI recalculation") {
            return; // Don't log this message
        }
        originalLog.apply(console, args);
    };
}

// Make sure we have the calculateTEUI function
if (typeof window.calculateTEUI !== 'function' && window.TEUI?.StateManager?.updateTEUICalculations) {
    window.calculateTEUI = function() {
        window.TEUI.StateManager.updateTEUICalculations('global-fallback');
    };
}