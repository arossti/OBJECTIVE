/**
 * 4011-Section14.js
 * TEDI & TELI (Section 14) module for TEUI Calculator 4.011
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
    // CONSOLIDATED FIELD DEFINITIONS AND LAYOUT
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
                e: { content: "Column E", classes: ["section-subheader"] },
                f: { content: "Column F", classes: ["section-subheader"] },
                g: { content: "Column G", classes: ["section-subheader"] },
                h: { content: "kWh/m²/yr", classes: ["section-subheader", "text-center"] },
                i: { content: "Column I", classes: ["section-subheader"] },
                j: { content: "Column J", classes: ["section-subheader"] },
                k: { content: "Column K", classes: ["section-subheader"] },
                l: { content: "kWh/yr", classes: ["section-subheader", "text-center"] },
                m: { content: "Column M", classes: ["section-subheader"] },
                n: { content: "Column N", classes: ["section-subheader"] }
            }
        },

        // Row 126: T.4.0 TED Targeted / T.4.1 TEDI
        "126": {
            id: "T.4.0",
            rowId: "T.4.0",
            label: "TED Targeted",
            cells: {
                c: { label: "TED Targeted" },
                d: { 
                    fieldId: "d_126", 
                    type: "calculated", 
                    value: "119,171.78",
                    classes: ["calculated-value"],
                    section: "tediSummary"
                },
                e: { content: "" },
                f: { content: "T.4.1", classes: ["label-prefix", "text-right", "no-wrap"] },
                g: { content: "TEDI", classes: ["label-main", "text-left", "no-wrap"] },
                h: { 
                    fieldId: "h_126", 
                    type: "calculated", 
                    value: "83.50",
                    classes: ["calculated-value"],
                    section: "tediSummary"
                },
                i: { content: "Includes V.5 Net Ventilation Losses, Excludes T.7.3 CEDI Ae", classes: ["note-text"] },
                j: { content: "" },
                k: { content: "" },
                l: { 
                    fieldId: "l_126", 
                    type: "calculated", 
                    value: "N/A",
                    classes: ["reference-value"],
                    section: "tediSummary"
                },
                m: { content: "" },
                n: { content: "" }
            }
        },

        // Row 127: T.4.2 TED Envelope / T.4.3 TEDI (Excludes Ventilation)
        "127": {
            id: "T.4.2",
            rowId: "T.4.2",
            label: "TED Envelope (Excludes Ventilation)",
            cells: {
                c: { label: "TED Envelope (Excludes Ventilation)" },
                d: { 
                    fieldId: "d_127", 
                    type: "calculated", 
                    value: "70,190.98",
                    classes: ["calculated-value"],
                    section: "tediSummary"
                },
                e: { content: "" },
                f: { content: "T.4.3", classes: ["label-prefix", "text-right", "no-wrap"] },
                g: { content: "TEDI (Excludes Ventilation)", classes: ["label-main", "text-left", "no-wrap"] },
                h: { 
                    fieldId: "h_127", 
                    type: "calculated", 
                    value: "49.18",
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

        // Row 128: T.4.4 CED Cooling Load / T.4.5 CEDI Unmitigated
        "128": {
            id: "T.4.4",
            rowId: "T.4.4",
            label: "CED Cooling Load Unmitigated",
            cells: {
                c: { label: "CED Cooling Load Unmitigated" },
                d: { 
                    fieldId: "d_128", 
                    type: "calculated", 
                    value: "76,437.53",
                    classes: ["calculated-value"],
                    section: "tediSummary"
                },
                e: { content: "" },
                f: { content: "T.4.5", classes: ["label-prefix", "text-right", "no-wrap"] },
                g: { content: "CEDI Unmitigated", classes: ["label-main", "text-left", "no-wrap"] },
                h: { 
                    fieldId: "h_128", 
                    type: "calculated", 
                    value: "53.56",
                    classes: ["calculated-value"],
                    section: "tediSummary"
                },
                i: { content: "T.5.2 less Free Cool. & Vent. Exhaust", classes: ["note-text"] },
                j: { content: "" },
                k: { content: "" },
                l: { 
                    fieldId: "l_128", 
                    type: "calculated", 
                    value: "8,038.67",
                    classes: ["calculated-value"],
                    section: "tediSummary"
                },
                m: { content: "" },
                n: { content: "" }
            }
        },

        // Row 129: T.4.6 CEDI Cooling Load / T.4.7 CEDI Mitigated
        "129": {
            id: "T.4.6",
            rowId: "T.4.6",
            label: "CEDI Cooling Load",
            cells: {
                c: { label: "CEDI Cooling Load" },
                d: { 
                    fieldId: "d_129", 
                    type: "calculated", 
                    value: "6.11",
                    classes: ["calculated-value"],
                    section: "tediSummary"
                },
                e: { content: "W/m²", classes: ["unit-text"] },
                f: { content: "T.4.7", classes: ["label-prefix", "text-right", "no-wrap"] },
                g: { content: "CEDI Mitigated", classes: ["label-main", "text-left", "no-wrap"] },
                h: { 
                    fieldId: "h_129", 
                    type: "calculated", 
                    value: "0.64",
                    classes: ["calculated-value"],
                    section: "tediSummary"
                },
                i: { content: "W/m²", classes: ["unit-text"] },
                j: { content: "Mitigated", classes: ["note-text"] },
                k: { content: "" },
                l: { content: "" },
                m: { content: "" },
                n: { content: "" }
            }
        },

        // Row 130: T.5.1 TEL Total Envelope Heatloss / T.5.2 TELI
        "130": {
            id: "T.5.1",
            rowId: "T.5.1",
            label: "TEL Total Envelope Heatloss",
            cells: {
                c: { label: "TEL Total Envelope Heatloss" },
                d: { 
                    fieldId: "d_130", 
                    type: "calculated", 
                    value: "116,070.33",
                    classes: ["calculated-value"],
                    section: "tediSummary"
                },
                e: { content: "" },
                f: { content: "T.5.2", classes: ["label-prefix", "text-right", "no-wrap"] },
                g: { content: "TELI", classes: ["label-main", "text-left", "no-wrap"] },
                h: { 
                    fieldId: "h_130", 
                    type: "calculated", 
                    value: "81.33",
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

        // Row 131: T.5.3 CEG Cooling Envelope Heatgain / T.5.4 CEGI
        "131": {
            id: "T.5.3",
            rowId: "T.5.3",
            label: "CEG Cooling Envelope Heatgain",
            cells: {
                c: { label: "CEG Cooling Envelope Heatgain" },
                d: { 
                    fieldId: "d_131", 
                    type: "calculated", 
                    value: "-2,964.68",
                    classes: ["calculated-value"],
                    section: "tediSummary"
                },
                e: { content: "" },
                f: { content: "T.5.4", classes: ["label-prefix", "text-right", "no-wrap"] },
                g: { content: "CEGI", classes: ["label-main", "text-left", "no-wrap"] },
                h: { 
                    fieldId: "h_131", 
                    type: "calculated", 
                    value: "-2.08",
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
    // CALCULATIONS AND DEPENDENCIES
    //==========================================================================
    
    /**
     * Register all field dependencies with the StateManager
     */
    function registerDependencies() {
        if (!window.TEUI.StateManager) {
            // console.warn("StateManager not available for TEDI/TELI dependency registration");
            return;
        }
        
        // Register dependencies for field calculations
        
        // Relationship between area and intensity values
        window.TEUI.StateManager.registerDependency('h_15', 'h_126'); // Area affects TEDI
        window.TEUI.StateManager.registerDependency('d_126', 'h_126'); // TED Targeted affects TEDI
        
        window.TEUI.StateManager.registerDependency('h_15', 'h_127'); // Area affects TEDI (Excludes Ventilation)
        window.TEUI.StateManager.registerDependency('d_127', 'h_127'); // TED Envelope affects TEDI (Excludes Ventilation)
        
        window.TEUI.StateManager.registerDependency('h_15', 'h_128'); // Area affects CEDI Unmitigated
        window.TEUI.StateManager.registerDependency('d_128', 'h_128'); // CED Cooling Load affects CEDI Unmitigated
        
        window.TEUI.StateManager.registerDependency('h_15', 'h_130'); // Area affects TELI
        window.TEUI.StateManager.registerDependency('d_130', 'h_130'); // TEL Total Envelope Heatloss affects TELI
        
        window.TEUI.StateManager.registerDependency('h_15', 'h_131'); // Area affects CEGI
        window.TEUI.StateManager.registerDependency('d_131', 'h_131'); // CEG Cooling Envelope Heatgain affects CEGI
        
        // Dependency on envelope and ventilation heat loss
        window.TEUI.StateManager.registerDependency('d_130', 'd_126'); // Envelope heatloss affects TED Targeted
        window.TEUI.StateManager.registerDependency('d_121', 'd_126'); // Ventilation affects TED Targeted
        
        // console.log("TEDI/TELI dependencies registered");
    }
    
    /**
     * Calculate all values for this section 
     * This is triggered when dependencies change or on initial load
     */
    function calculateValues() {
        try {
            if (!window.TEUI.StateManager) {
                // console.warn("StateManager not available for TEDI/TELI calculations");
                return;
            }
            
            // Get building area from StateManager
            const areaStr = window.TEUI.StateManager.getValue('h_15') || "1427.20";
            const area = parseFloat(areaStr.replace(/,/g, ''));
            
            // Calculations based on the FORMULAE-3037.csv
            
            // T.4.0 TED Targeted (d_126) - Get from envelope loss and ventilation values
            // In the real calculation this would need the actual envelope loss and ventilation values
            // For now, we'll use a simplified calculation or default value
            const envelopeLossStr = window.TEUI.StateManager.getValue('d_130') || "116070.33";
            const envelopeLoss = parseFloat(envelopeLossStr.replace(/,/g, ''));
            
            // Simplified TED Targeted (should use actual envelope and ventilation)
            const tedTargeted = envelopeLoss * 1.027; // Simple approximation
            window.TEUI.StateManager.setValue('d_126', tedTargeted.toLocaleString('en-US', {maximumFractionDigits: 2}), "calculated");
            
            // T.4.1 TEDI (h_126) - TED Targeted divided by area
            const tedi = tedTargeted / area;
            window.TEUI.StateManager.setValue('h_126', tedi.toLocaleString('en-US', {maximumFractionDigits: 2}), "calculated");
            
            // T.4.2 TED Envelope (d_127) - This would be calculated from other values
            // For now, use 60% of TED Targeted as an approximation
            const tedEnvelope = tedTargeted * 0.59;
            window.TEUI.StateManager.setValue('d_127', tedEnvelope.toLocaleString('en-US', {maximumFractionDigits: 2}), "calculated");
            
            // T.4.3 TEDI (Excludes Ventilation) (h_127)
            const tediExcludesVent = tedEnvelope / area;
            window.TEUI.StateManager.setValue('h_127', tediExcludesVent.toLocaleString('en-US', {maximumFractionDigits: 2}), "calculated");
            
            // T.4.4 CED Cooling Load Unmitigated (d_128) - Based on other calculations
            // For now, use default value or approx
            const cedCoolingUnmitigated = 76437.53;
            window.TEUI.StateManager.setValue('d_128', cedCoolingUnmitigated.toLocaleString('en-US', {maximumFractionDigits: 2}), "calculated");
            
            // T.4.5 CEDI Unmitigated (h_128)
            const cediUnmitigated = cedCoolingUnmitigated / area;
            window.TEUI.StateManager.setValue('h_128', cediUnmitigated.toLocaleString('en-US', {maximumFractionDigits: 2}), "calculated");
            
            // T.4.6 CEDI Cooling Load (d_129) - Watts per square meter
            const cediCoolingLoad = 6.11;
            window.TEUI.StateManager.setValue('d_129', cediCoolingLoad.toLocaleString('en-US', {maximumFractionDigits: 2}), "calculated");
            
            // T.4.7 CEDI Mitigated (h_129)
            const cediMitigated = 0.64;
            window.TEUI.StateManager.setValue('h_129', cediMitigated.toLocaleString('en-US', {maximumFractionDigits: 2}), "calculated");
            
            // T.5.1 TEL Total Envelope Heatloss (d_130)
            // For now, use the constant value since this is a source value
            window.TEUI.StateManager.setValue('d_130', envelopeLoss.toLocaleString('en-US', {maximumFractionDigits: 2}), "calculated");
            
            // T.5.2 TELI (h_130)
            const teli = envelopeLoss / area;
            window.TEUI.StateManager.setValue('h_130', teli.toLocaleString('en-US', {maximumFractionDigits: 2}), "calculated");
            
            // T.5.3 CEG Cooling Envelope Heatgain (d_131)
            const cegHeatgain = -2964.68;
            window.TEUI.StateManager.setValue('d_131', cegHeatgain.toLocaleString('en-US', {maximumFractionDigits: 2}), "calculated");
            
            // T.5.4 CEGI (h_131)
            const cegi = cegHeatgain / area;
            window.TEUI.StateManager.setValue('h_131', cegi.toLocaleString('en-US', {maximumFractionDigits: 2}), "calculated");
            
            // T.5.2 less Free Cool & Vent Exhaust (l_128)
            const lessFreeVent = 8038.67;
            window.TEUI.StateManager.setValue('l_128', lessFreeVent.toLocaleString('en-US', {maximumFractionDigits: 2}), "calculated");
            
            // console.log("TEDI/TELI calculations completed");
            
        } catch (error) {
            // console.error("Error in TEDI/TELI calculations:", error);
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
            calculateValues();
            
            // Update the DOM to match calculated values
            updateDisplay();
            
            // Then signal any dependent sections via the SectionIntegrator
            if (window.TEUI.SectionIntegrator) {
                // If we have a global function for TEUI summary recalculation, call it
                if (typeof window.TEUI.updateTEUIValues === 'function') {
                    // console.log("Triggering TEUI value recalculation from TEDI/TELI");
                    window.TEUI.updateTEUIValues();
                }
            }
            
            // console.log("TEDI/TELI full calculation cycle completed");
        } catch (error) {
            // console.error("Error in TEDI/TELI calculateAll:", error);
        }
    }
    
    //==========================================================================
    // EVENT HANDLING AND INITIALIZATION
    //==========================================================================
    
    /**
     * Update the DOM with the current values from the StateManager
     */
    function updateDisplay() {
        if (!window.TEUI.StateManager) return;
        
        // Get all fields in this section
        const fields = getFields();
        
        // Update each field in the DOM
        Object.keys(fields).forEach(fieldId => {
            const value = window.TEUI.StateManager.getValue(fieldId);
            if (value !== null) {
                const element = document.querySelector(`[data-field-id="${fieldId}"]`);
                if (element) {
                    element.textContent = value;
                }
            }
        });
    }
    
    /**
     * Initialize event handlers for this section
     */
    function initializeEventHandlers() {
        // Register for area change events to recalculate intensity values
        if (window.TEUI.StateManager) {
            window.TEUI.StateManager.addListener('h_15', () => {
                calculateValues();
                updateDisplay();
            });
        }
        
        // Add listeners for other dependencies as needed
    }
    
    /**
     * Called when section is rendered
     */
    function onSectionRendered() {
        // console.log("TEDI & TELI section rendered");
        
        // Register dependencies first
        registerDependencies();
        
        // Calculate initial values
        calculateValues();
        
        // Update display with calculated values
        updateDisplay();
        
        // Initialize event handlers
        initializeEventHandlers();
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
        calculateValues: calculateValues,
        calculateAll: calculateAll,
        updateDisplay: updateDisplay,
        
        // Event handling and initialization - REQUIRED
        initializeEventHandlers: initializeEventHandlers,
        onSectionRendered: onSectionRendered
    };
})();

// Initialize when the section is rendered
document.addEventListener('teui-section-rendered', function(event) {
    if (event.detail?.sectionId === 'tediSummary') {
        window.TEUI.SectionModules.sect14.onSectionRendered();
    }
});

// Fallback to rendering complete event
document.addEventListener('teui-rendering-complete', function() {
    setTimeout(() => {
        if (document.getElementById('tediSummary')) {
            window.TEUI.SectionModules.sect14.onSectionRendered();
        }
    }, 300);
});