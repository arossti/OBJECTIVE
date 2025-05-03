/**
 * 4011-Section14.js
 * TEDI & TELI (Section 14) module for TEUI Calculator 4.011 (this file shows as uncommitted, but it works betetr than the committed one so commit THIS to over-write the committed one)
 * 
 * This file contains field definitions, layout templates, and rendering logic
 * specific to the TEDI & TELI section.
 * 
 * Follows the consolidated declarative approach where field definitions
 * are integrated directly into the layout structure.
 */

// Ensure namespace exists
window.TEUI = window.TEUI || {};
window.TEUI.SectionModules = window.TEUI.SectionModules || {};

// Section 14: TEDI & TELI Module
window.TEUI.SectionModules.sect14 = (function() {
    
    //==========================================================================
    // HELPER FUNCTIONS (Copied from Section 15 Refactor)
    //==========================================================================

    /**
     * Safely parses a numeric value from StateManager or DOM, handling potential strings with commas.
     * Uses the global parseNumeric if available, otherwise provides a fallback.
     * @param {string} fieldId - The ID of the field to retrieve the value for.
     * @returns {number} The parsed numeric value, or 0 if parsing fails.
     */
    function getNumericValue(fieldId) {
        if (typeof window.TEUI?.parseNumeric === 'function') {
            return window.TEUI.parseNumeric(window.TEUI.StateManager?.getValue(fieldId)) || 0;
        } else {
            // Fallback parsing logic
            const value = window.TEUI.StateManager?.getValue(fieldId);
            if (value === null || value === undefined) return 0;
            if (typeof value === 'number') return value;
            if (typeof value === 'string') {
                // Remove $, commas, % and handle potential empty strings or non-numeric values
                const cleanedValue = value.replace(/[$,%]/g, '').trim();
                if (cleanedValue === '') return 0;
                const parsed = parseFloat(cleanedValue);
                return isNaN(parsed) ? 0 : parsed;
            }
            return 0;
        }
    }

    /**
     * Formats a number according to the project's display rules (2 decimal places, commas).
     * Handles specific formats like percentages and currency.
     * @param {number} value - The number to format.
     * @param {string} [format='number'] - The type of format ('number', 'currency', 'percent', 'W/m2').
     * @returns {string} The formatted number as a string.
     */
    function formatNumber(value, format = 'number') {
        if (value === null || value === undefined || isNaN(value)) {
            return '0.00'; // Default numeric format for errors/NaN
        }

        const num = Number(value);

        if (format === 'currency') {
            return '$' + num.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 });
        } else if (format === 'percent') {
            return (num * 100).toFixed(0) + '%';
        } else if (format === 'btu') {
            return num.toLocaleString('en-US', { maximumFractionDigits: 0 });
        } else if (format === 'tons') {
            return num.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 });
        } else if (format === 'integer') {
             return num.toLocaleString('en-US', { maximumFractionDigits: 0 });
        } else { // Default number format (kWh, kWh/m2, W/m2)
            return num.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 });
        }
    }

    /**
     * Sets a calculated value in the StateManager and updates the corresponding DOM element.
     * @param {string} fieldId - The ID of the field to update.
     * @param {number} rawValue - The raw calculated numeric value.
     * @param {string} [format='number'] - The format type for display.
     */
    function setCalculatedValue(fieldId, rawValue, format = 'number') {
        // Handle potential N/A cases first
        if (isNaN(rawValue) || rawValue === null || rawValue === undefined) {
             window.TEUI.StateManager?.setValue(fieldId, 'N/A', 'calculated');
             const elementNA = document.querySelector(`[data-field-id=\"${fieldId}\"]`);
             if (elementNA) elementNA.textContent = 'N/A';
             return; // Stop processing if value is not a valid number
        }

        const formattedValue = formatNumber(rawValue, format);
        
        // Store raw value as string in StateManager for precision
        window.TEUI.StateManager?.setValue(fieldId, rawValue.toString(), 'calculated');
        
        // Update DOM with formatted value
        const element = document.querySelector(`[data-field-id=\"${fieldId}\"]`);
        if (element) {
            element.textContent = formattedValue;
            element.classList.toggle('negative-value', rawValue < 0);
        } else {
            console.warn(`setCalculatedValue: Element not found for fieldId ${fieldId}`);
        }
    }

    //==========================================================================
    // CONSOLIDATED FIELD DEFINITIONS AND LAYOUT (Update Defaults)
    //==========================================================================
    
    // Define rows with integrated field definitions
    const sectionRows = {
        // SECTION HEADER
        "header": {
            id: "14-ID",
            rowId: "14-ID",
            label: "TEDI & TELI Units",
            cells: {
                c: { content: "SECTION 14. TEDI & TELI Targeted", classes: ["section-header"] },
                d: { content: "kWh/yr", classes: ["section-subheader", "text-center"] },
                e: { content: "", classes: ["section-subheader"] },
                f: { content: "", classes: ["section-subheader"] },
                g: { content: "", classes: ["section-subheader"] },
                h: { content: "kWh/m²/yr", classes: ["section-subheader", "text-center"] },
                i: { content: "", classes: ["section-subheader"] },
                j: { content: "", classes: ["section-subheader"] },
                k: { content: "", classes: ["section-subheader"] },
                l: { content: "", classes: ["section-subheader"] },
                m: { content: "kWh/yr", classes: ["section-subheader", "text-center"] },
                n: { content: "", classes: ["section-subheader"] }
            }
        },

        // Row 127: T.4.0 TED Targeted / T.4.1 TEDI
        "127": {
            id: "T.4.0",
            rowId: "127",
            label: "TED Targeted",
            cells: {
                c: { label: "TED Targeted" },
                d: { 
                    fieldId: "d_127",
                    type: "calculated", 
                    value: "0.00",
                    classes: ["calculated-value"],
                    section: "tediSummary"
                },
                e: { content: "" },
                f: { content: "T.4.1", classes: ["label-prefix", "text-right", "no-wrap"] },
                g: { content: "TEDI", classes: ["label-main", "text-left", "no-wrap"] },
                h: { 
                    fieldId: "h_127",
                    type: "calculated", 
                    value: "0.00",
                    classes: ["calculated-value"],
                    section: "tediSummary"
                },
                i: { content: "Includes V.5 Net Ventilation Losses, Excludes T.7.3 CEDI Ae", classes: ["note-text"] },
                j: { content: "" },
                k: { content: "" },
                l: { content: "" },
                m: { content: "" },
                n: { content: "" }
            }
        },

        // Row 128: T.4.2 TED Envelope / T.4.3 TEDI (Excludes Ventilation)
        "128": {
            id: "T.4.2",
            rowId: "128",
            label: "TED Envelope (Excludes Ventilation)",
            cells: {
                c: { label: "TED Envelope (Excludes Ventilation)" },
                d: { 
                    fieldId: "d_128",
                    type: "calculated", 
                    value: "0.00",
                    classes: ["calculated-value"],
                    section: "tediSummary"
                },
                e: { content: "" },
                f: { content: "T.4.3", classes: ["label-prefix", "text-right", "no-wrap"] },
                g: { content: "TEDI (Excludes Ventilation)", classes: ["label-main", "text-left", "no-wrap"] },
                h: { 
                    fieldId: "h_128",
                    type: "calculated", 
                    value: "0.00",
                    classes: ["calculated-value"],
                    section: "tediSummary"
                },
                i: { content: "" },
                j: { content: "" },
                k: { content: "" },
                l: { content: "" },
                m: { content: "" },
                n: { content: "" }
            }
        },

        // Row 129: T.4.4 CED Cooling Load Unmitigated / T.4.5 CEDI Unmitigated
        "129": {
            id: "T.4.4",
            rowId: "129",
            label: "CED Cooling Load Unmitigated",
            cells: {
                c: { label: "CED Cooling Load Unmitigated" },
                d: { 
                    fieldId: "d_129",
                    type: "calculated", 
                    value: "0.00",
                    classes: ["calculated-value"],
                    section: "tediSummary"
                },
                e: { content: "" },
                f: { content: "T.4.5", classes: ["label-prefix", "text-right", "no-wrap"] },
                g: { content: "CEDI Unmitigated", classes: ["label-main", "text-left", "no-wrap"] },
                h: { 
                    fieldId: "h_129",
                    type: "calculated", 
                    value: "0.00",
                    classes: ["calculated-value"],
                    section: "tediSummary"
                },
                i: { content: "" },
                j: { content: "T.5.2 less Free Cool. & Vent. Exhaust", classes: ["note-text"]  },
                k: { content: "" },
                l: { content: "" },
                m: { 
                    fieldId: "m_129",
                    type: "calculated", 
                    value: "0.00",
                    classes: ["calculated-value"],
                    section: "tediSummary"
                },
                n: { content: "" }
            }
        },

        // Row 130: T.4.6 CEDI Cooling Load (W/m2) / T.4.7 CEDI Mitigated (W/m2)
        "130": {
            id: "T.4.6",
            rowId: "130",
            label: "CEDI Cooling Load",
            cells: {
                c: { label: "CEDI Cooling Load" },
                d: { 
                    fieldId: "d_130",
                    type: "calculated", 
                    value: "0.00",
                    classes: ["calculated-value"],
                    section: "tediSummary"
                },
                e: { content: "W/m²", classes: ["unit-text"] },
                f: { content: "T.4.7", classes: ["label-prefix", "text-right", "no-wrap"] },
                g: { content: "CEDI Mitigated", classes: ["label-main", "text-left", "no-wrap"] },
                h: { 
                    fieldId: "h_130",
                    type: "calculated", 
                    value: "0.00",
                    classes: ["calculated-value"],
                    section: "tediSummary"
                },
                i: { content: "W/m²", classes: ["unit-text"] },
                j: { content: "" },
                k: { content: "" },
                l: { content: "" },
                m: { content: "" },
                n: { content: "" }
            }
        },

        // Row 131: T.5.1 TEL Total Envelope Heatloss / T.5.2 TELI
        "131": {
            id: "T.5.1",
            rowId: "131",
            label: "TEL Total Envelope Heatloss",
            cells: {
                c: { label: "TEL Total Envelope Heatloss" },
                d: { 
                    fieldId: "d_131",
                    type: "calculated", 
                    value: "0.00",
                    classes: ["calculated-value"],
                    section: "tediSummary"
                },
                e: { content: "" },
                f: { content: "T.5.2", classes: ["label-prefix", "text-right", "no-wrap"] },
                g: { content: "TELI", classes: ["label-main", "text-left", "no-wrap"] },
                h: { 
                    fieldId: "h_131",
                    type: "calculated", 
                    value: "0.00",
                    classes: ["calculated-value"],
                    section: "tediSummary"
                },
                i: { content: "" },
                j: { content: "" },
                k: { content: "" },
                l: { content: "" },
                m: { content: "" },
                n: { content: "" }
            }
        },

        // Row 132: T.5.3 CEG Cooling Envelope Heatgain / T.5.4 CEGI
        "132": {
            id: "T.5.3",
            rowId: "132",
            label: "CEG Cooling Envelope Heatgain",
            cells: {
                c: { label: "CEG Cooling Envelope Heatgain" },
                d: { 
                    fieldId: "d_132",
                    type: "calculated", 
                    value: "0.00",
                    classes: ["calculated-value"],
                    section: "tediSummary"
                },
                e: { content: "" },
                f: { content: "T.5.4", classes: ["label-prefix", "text-right", "no-wrap"] },
                g: { content: "CEGI", classes: ["label-main", "text-left", "no-wrap"] },
                h: { 
                    fieldId: "h_132",
                    type: "calculated", 
                    value: "0.00",
                    classes: ["calculated-value"],
                    section: "tediSummary"
                },
                i: { content: "" },
                j: { content: "" },
                k: { content: "" },
                l: { content: "" },
                m: { content: "" },
                n: { content: "" }
            }
        }
    };
    
    //==========================================================================
    // ACCESSOR METHODS TO EXTRACT FIELDS AND LAYOUT (Unchanged)
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
                        section: cell.section || "tediSummary"
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
                delete cell.dependencies; // Renderer doesn't need these
                
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
    // CALCULATIONS AND DEPENDENCIES (Refactored)
    //==========================================================================
    
    /**
     * Register all field dependencies with the StateManager based on FORMULAE-3037.csv
     */
    function registerDependencies() {
        if (!window.TEUI.StateManager) {
            console.warn("StateManager not available for TEDI/TELI dependency registration");
            return;
        }
        const sm = window.TEUI.StateManager;
        
        // D127 (TED Targeted): =(I97+I98+I103+M121)-I80
        ['i_97', 'i_98', 'i_103', 'm_121', 'i_80'].forEach(dep => sm.registerDependency(dep, 'd_127'));
        // H127 (TEDI): =D127/H15
        sm.registerDependency('d_127', 'h_127');
        sm.registerDependency('h_15', 'h_127');

        // D128 (TED Envelope): =(I97+I98+I103)-I80
        ['i_97', 'i_98', 'i_103', 'i_80'].forEach(dep => sm.registerDependency(dep, 'd_128'));
        // H128 (TEDI Envelope): =D128/H15
        sm.registerDependency('d_128', 'h_128');
        sm.registerDependency('h_15', 'h_128');

        // D129 (CED Unmitigated): = K71+K79+K98+D122 (Using K98 for A47)
        sm.registerDependency('k_71', 'd_129');
        sm.registerDependency('k_79', 'd_129');
        sm.registerDependency('k_98', 'd_129'); // Changed from d_132 / k_97/k_103
        sm.registerDependency('d_122', 'd_129');
        
        // H129 (CEDI Unmitigated W/m2): =(D129/8760*1000)/H15
        sm.registerDependency('d_129', 'h_129'); 
        sm.registerDependency('h_15', 'h_129');
        
        // L128 (CED Mitigated kWh/yr): =D129-H124-D123
        sm.registerDependency('d_129', 'l_128'); 
        sm.registerDependency('h_124', 'l_128');
        sm.registerDependency('d_123', 'l_128');

        // D130 (CEDI Cooling Load W/m2 Unmitigated): =(D129/8760*1000)/H15
        sm.registerDependency('d_129', 'd_130'); 
        sm.registerDependency('h_15', 'd_130');

        // H130 (CEDI Mitigated W/m2): =(M129/8760*1000)/H15 
        sm.registerDependency('m_129', 'h_130');
        sm.registerDependency('h_15', 'h_130');
        
        // D131 (TEL Total Envelope Heatloss): =SUM(I97:I98)+I103
        ['i_97', 'i_98', 'i_103'].forEach(dep => sm.registerDependency(dep, 'd_131'));
        // H131 (TELI): =D131/H15
        sm.registerDependency('d_131', 'h_131');
        sm.registerDependency('h_15', 'h_131');
        
        // D132 (CEG Cooling Envelope Heatgain): =SUM(K97:K98)+K103
        ['k_97', 'k_98', 'k_103'].forEach(dep => sm.registerDependency(dep, 'd_132'));
        // H132 (CEGI): =D132/H15
        sm.registerDependency('d_132', 'h_132');
        sm.registerDependency('h_15', 'h_132');
        
        console.log("TEDI/TELI dependencies registered");
    }
    
    /**
     * Calculate all values for this section based on FORMULAE-3037.csv
     * This is triggered when dependencies change or on initial load
     */
    function calculateValues() {
        try {
            if (!window.TEUI.StateManager) {
                console.warn("StateManager not available for TEDI/TELI calculations");
                return;
            }
            
            // --- Fetch ALL Dependencies FIRST ---
            const area = getNumericValue('h_15');
            const i97 = getNumericValue('i_97');   // Thermal Bridge Penalty Heatloss
            const i98 = getNumericValue('i_98');   // Envelope Totals Heatloss
            const i103 = getNumericValue('i_103'); // Natural Air Leakage Heatloss
            const m121 = getNumericValue('m_121'); // Net Htg Season Ventil. Lost
            const i80 = getNumericValue('i_80');   // Internal heat gains - Occupants
            const k71 = getNumericValue('k_71');   // Internal gains people
            const k79 = getNumericValue('k_79');   // Internal gains equip/light
            const k97 = getNumericValue('k_97');   // Solar 
            const k98 = getNumericValue('k_98');   // Transmission
            const d122 = getNumericValue('d_122'); // Incoming Cooling Vent Energy from S13
            const h124 = getNumericValue('h_124'); // Free Cooling Limit from S13
            const d123 = getNumericValue('d_123'); // Recovered Cooling Vent Energy from S13

            // --- Perform Calculations ---
            
            // d_127: TED (Heating Load)
            const tedHeatloss_d127 = i97 + i98 + i103 + m121 - i80;
            setCalculatedValue('d_127', tedHeatloss_d127);

            // h_127: TEDI (Heating Load Intensity W/m2)
            const tediWm2_h127 = area > 0 ? (tedHeatloss_d127 / 8760 * 1000) / area : 0;
            setCalculatedValue('h_127', tediWm2_h127, 'W/m2'); 
            
            // d_128: TED Envelope (Heating Load - Envelope Only)
            const tediEnvelope_d128 = i97 + i98 + i103 - i80;
            setCalculatedValue('d_128', tediEnvelope_d128);

            // h_128: TEDI Envelope (Heating Load Intensity - Envelope Only W/m2)
            const tediEnvelope_h128 = area > 0 ? (tediEnvelope_d128 / 8760 * 1000) / area : 0;
            setCalculatedValue('h_128', tediEnvelope_h128);

            // Calculate d_129 value needed for h_129, m_129, d_130
            const cedCoolingUnmitigated_d129 = k71 + k79 + k98 + d122; 
            
            // h_129: CEDI Unmitigated (W/m2) 
            const cediUnmitigatedWm2_h129 = area > 0 ? (cedCoolingUnmitigated_d129 / 8760 * 1000) / area : 0;
            setCalculatedValue('h_129', cediUnmitigatedWm2_h129, 'W/m2'); 
            
            // m_129: CED Mitigated (kWh/yr)
            // Calculate using the fetched values
            const cedMitigated_m129 = cedCoolingUnmitigated_d129 - h124 - d123;
            setCalculatedValue('m_129', cedMitigated_m129);

            // Set d_129 display value now
            setCalculatedValue('d_129', cedCoolingUnmitigated_d129);
            
            // d_130: CEDI Cooling Load W/m2 Unmitigated: =(D129/8760*1000)/H15
            const cediCoolingWm2_d130 = area > 0 ? (cedCoolingUnmitigated_d129 / 8760 * 1000) / area : 0;
            setCalculatedValue('d_130', cediCoolingWm2_d130, 'W/m2');
            
            // d_131: TEL Heatloss (Heating + DHW)
            const d111 = getNumericValue('d_111'); // DHW Load
            const telHeatloss_d131 = tedHeatloss_d127 + d111;
            setCalculatedValue('d_131', telHeatloss_d131);
            
            // h_131: TELI Heatloss Intensity W/m2
            const teli_h131 = area > 0 ? telHeatloss_d131 / area : 0;
            setCalculatedValue('h_131', teli_h131);
            
            // d_132 & h_132: CEG and CEGI
            const cegHeatgain_d132 = k97 + k98;
            setCalculatedValue('d_132', cegHeatgain_d132);
            const cegi_h132 = area > 0 ? cegHeatgain_d132 / area : 0;
            setCalculatedValue('h_132', cegi_h132);
            
            // h_130: CEDI Mitigated W/m2
            const cediMitigatedWm2_h130 = area > 0 ? (cedMitigated_m129 / 8760 * 1000) / area : 0;
            setCalculatedValue('h_130', cediMitigatedWm2_h130, 'W/m2'); 
            
        } catch (error) {
            console.error("Error in TEDI/TELI calculations:", error);
        }
    }
    
    /**
     * Calculate all values for this section and connected sections
     * This follows the template pattern expected by the system
     */
    function calculateAll() {
        try {
            // console.log("TEDI/TELI calculateAll function called");
            
            // First perform internal calculations for this section
            calculateValues(); // Also updates display via setCalculatedValue
            
            // Then signal any dependent sections via the SectionIntegrator
            // Section 15 listens for changes in h_126 and h_130 from this section.
            // The setCalculatedValue calls in calculateValues handle triggering those listeners.
            
            // console.log("TEDI/TELI full calculation cycle completed");
        } catch (error) {
            console.error("Error in TEDI/TELI calculateAll:", error);
        }
    }
    
    //==========================================================================
    // EVENT HANDLING AND INITIALIZATION
    //==========================================================================
    
    /**
     * Update the DOM with the current values from the StateManager
     * Note: Redundant if setCalculatedValue handles DOM updates reliably.
     */
    function updateDisplay() {
        if (!window.TEUI.StateManager) return;
        
        const fields = getFields();
        
        Object.keys(fields).forEach(fieldId => {
            const value = window.TEUI.StateManager.getValue(fieldId);
            if (value !== null && value !== undefined) {
                const element = document.querySelector(`[data-field-id=\"${fieldId}\"]`);
                if (element) {
                    let format = 'number'; // Default
                    let rawValue = value; // Assume raw for N/A check
                    
                    // Determine format based on field ID
                    if (fieldId === 'd_129' || fieldId === 'h_129') {
                        format = 'W/m2';
                        rawValue = getNumericValue(fieldId);
                    } else if (value === 'N/A') {
                         element.textContent = 'N/A';
                         return; // Skip formatting
                    } else {
                         rawValue = getNumericValue(fieldId);
                    }
                    
                    element.textContent = formatNumber(rawValue, format);
                    element.classList.toggle('negative-value', rawValue < 0);
                }
            }
        });
         console.log("TEDI/TELI display updated");
    }
    
    /**
     * Initialize event handlers for this section
     * Sets up listeners for changes in dependency values from other sections.
     */
    function initializeEventHandlers() {
        if (!window.TEUI.StateManager) return;
        const sm = window.TEUI.StateManager;

        // Create a list of all unique dependencies needed by this section's calculations
        // Restoring S13 dependencies (d_122, h_124, d_123, m_121)
        const dependencies = [
            'h_15', 'i_97', 'i_98', 'i_103', 'm_121', 'i_80',
            'k_71', 'k_79', 'k_97', 'k_98', 'k_103', 'd_122',
            'h_124', 'd_123'
        ];
        
        // Remove duplicates
        const uniqueDependencies = [...new Set(dependencies)];

        // Add listeners for all unique dependencies
        uniqueDependencies.forEach(dep => {
            sm.addListener(dep, () => {
                console.log(`Listener triggered for dependency: ${dep} in Section 14`);
                calculateAll(); 
            });
        });

        // Add listeners for climate data changes from Section 3 (needed for some calcs)
        if (window.TEUI?.StateManager?.addListener) {
            sm.addListener('d_20', calculateAll); // HDD
            sm.addListener('d_21', calculateAll); // CDD
            sm.addListener('h_22', calculateAll); // GF CDD 
            sm.addListener('d_22', calculateAll); // GF HDD
        } else {
            console.warn("Section 14: StateManager not available to add climate listeners.");
        }
    }
    
    /**
     * Called when section is rendered
     */
    function onSectionRendered() {
        console.log("TEDI & TELI section (sect14) rendered");
        
        if (window.TEUI.StateManager) {
        registerDependencies();
        } else {
            console.warn("StateManager not ready during sect14 onSectionRendered dependency registration.");
        }
        
        initializeEventHandlers();

        // Initial calculation should now be triggered by the central Calculator.calculateAll
        // or by listeners responding to dependency updates.
    }
    
    //==========================================================================
    // PUBLIC API
    //==========================================================================
    
    return {
        // Field definitions and layout - REQUIRED
        getFields: getFields,
        getDropdownOptions: getDropdownOptions,
        getLayout: getLayout,
        
        // Calculations
        calculateAll: calculateAll,
        
        // Event handling and initialization - REQUIRED
        initializeEventHandlers: initializeEventHandlers,
        onSectionRendered: onSectionRendered
    };
})();

// Event listeners removed in ORDERING branch

// Add an initialized flag to prevent multiple runs
if (window.TEUI && window.TEUI.SectionModules && window.TEUI.SectionModules.sect14) {
    window.TEUI.SectionModules.sect14.initialized = false; 
}