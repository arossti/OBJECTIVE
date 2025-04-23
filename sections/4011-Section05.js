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
                h: { content: "kgCO2e/m2", classes: ["section-subheader"] },
                i: { content: "I", classes: ["section-subheader"] },
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
                    value: "6.78",
                    section: "emissions",
                    dependencies: ["f_32", "i_15"] // Depends on emissions subtotal and conditioned area
                },
                e: { content: "MT CO2e/yr" }, // Units
                g: { 
                    fieldId: "g_38", 
                    type: "calculated", 
                    value: "4.75",
                    section: "emissions",
                    dependencies: ["d_38"]
                },
                j: { 
                    fieldId: "j_38", 
                    type: "calculated", 
                    value: "237.52",
                    section: "emissions",
                    dependencies: ["g_38", "h_13"] // Depends on annual GHGI and service life
                },
                k: { content: "(B6 Annual Emissions * Service Life)" }, // Description
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
                        { value: "Low Carbon", name: "Low Carbon" },
                        { value: "Standard", name: "Standard" },
                        { value: "Pt.3 Mass Timber", name: "Pt.3 Mass Timber" },
                        { value: "Pt.3 Concrete", name: "Pt.3 Concrete" },
                        { value: "Pt.9 Wood", name: "Pt.9 Wood" },
                        { value: "Pt.9 ICF", name: "Pt.9 ICF" },
                        { value: "Pt.9 SIP", name: "Pt.9 SIP" },
                        { value: "Pt.9 Steel", name: "Pt.9 Steel" }
                    ]
                },
                f: { content: "E.3.2", classes: ["label-prefix"] },
                g: { content: "Typology-Based Cap (TGS4)", classes: ["label-main"] },
                h: { 
                    fieldId: "h_39", 
                    type: "calculated", 
                    value: "350.00",
                    section: "emissions",
                    dependencies: ["d_39"]
                },
                l: { 
                    fieldId: "l_39", 
                    type: "calculated", 
                    value: "99%",
                    section: "emissions",
                    dependencies: ["h_39", "h_40"]
                },
                m: { content: "✓", classes: ["checkmark"] } // Checkmark indicator
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
                    value: "390.82",
                    section: "emissions"
                },
                e: { content: "MT CO2e/Service Life" }, // Units
                f: { content: "S.4", classes: ["label-prefix"] },
                g: { content: "Embodied Carbon Target", classes: ["label-main"] },
                h: { 
                    fieldId: "h_40", 
                    type: "calculated", 
                    value: "345.82",
                    section: "emissions",
                    dependencies: ["d_16"] // Depends on embodied carbon target in Building Info
                },
                l: { 
                    fieldId: "l_40", 
                    type: "calculated", 
                    value: "69%",
                    section: "emissions",
                    dependencies: ["d_40", "h_40"]
                },
                m: { content: "✓", classes: ["checkmark"] } // Checkmark indicator
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
                    value: "2,057.05",
                    section: "emissions",
                    dependencies: ["j_38", "d_40"]
                },
                e: { content: "MT CO2e" }, // Units
                f: { content: "E.3.4", classes: ["label-prefix"] },
                g: { content: "Modelled Value (A1-3)", classes: ["label-main"] },
                h: { 
                    fieldId: "h_41", 
                    type: "calculated", 
                    value: "345.82",
                    section: "emissions",
                    dependencies: ["h_40"]
                },
                l: { 
                    fieldId: "l_41", 
                    type: "calculated", 
                    value: "100%",
                    section: "emissions",
                    dependencies: ["h_41", "h_40"]
                },
                m: { content: "✓", classes: ["checkmark"] } // Checkmark indicator
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
        // Default values based on typology
        const capValues = {
            "Low Carbon": 200,
            "Standard": 300,
            "Pt.3 Mass Timber": 350,
            "Pt.3 Concrete": 450,
            "Pt.9 Wood": 300,
            "Pt.9 ICF": 325,
            "Pt.9 SIP": 300,
            "Pt.9 Steel": 375
        };
        
        return capValues[typology] || 350; // Default to 350 if not found
    }
    
    /**
     * Calculate percentage of target achieved
     */
    function calculatePercentages() {
        // Get values
        const typologyCap = parseFloat(getFieldValue("h_39")) || 350;
        const carbonTarget = parseFloat(getFieldValue("h_40")) || 345.82;
        const totalEmitted = parseFloat(getFieldValue("d_40")) || 390.82;
        const modelledValue = parseFloat(getFieldValue("h_41")) || 345.82;
        
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
        // Get values
        const emissionsSubtotal = parseFloat(getFieldValue("f_32")) || 6779.84;
        const conditionedArea = parseFloat(getFieldValue("i_15")) || 1427.20;
        
        if (emissionsSubtotal && conditionedArea) {
            // Calculate MT CO2e/yr
            const ghgiMT = emissionsSubtotal / 1000; // Convert kg to metric tons
            
            // Calculate kgCO2e/m²
            const ghgiPerM2 = emissionsSubtotal / conditionedArea;
            
            // Set calculated values
            setCalculatedValue("d_38", ghgiMT.toFixed(2));
            setCalculatedValue("g_38", ghgiPerM2.toFixed(2));
            
            // Calculate lifetime emissions
            const serviceLife = parseFloat(getFieldValue("h_13")) || 50;
            const lifetimeEmissions = ghgiPerM2 * serviceLife;
            setCalculatedValue("j_38", lifetimeEmissions.toFixed(2));
        }
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
        // Set in state manager
        if (window.TEUI.StateManager && window.TEUI.StateManager.setValue) {
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
     * Calculate all values for this section
     */
    function calculateAll() {
        // Calculate typology-based cap based on selected typology
        const typology = getFieldValue("d_39");
        if (typology) {
            const cap = calculateTypologyBasedCap(typology);
            setCalculatedValue("h_39", cap.toString());
        }
        
        // Calculate GHGI values
        calculateGHGI();
        
        // Calculate lifetime avoided emissions
        calculateLifetimeAvoided();
        
        // Calculate percentages (must be done after other calculations)
        calculatePercentages();
    }
    
    /**
     * Initialize all event handlers for this section
     */
    function initializeEventHandlers() {
        // Typology dropdown change handler
        const typologyDropdown = document.querySelector('[data-dropdown-id="dd_d_39"]');
        if (typologyDropdown) {
            typologyDropdown.addEventListener('change', function(e) {
                const typology = e.target.value;
                const cap = calculateTypologyBasedCap(typology);
                setCalculatedValue("h_39", cap.toString());
                calculatePercentages();
            });
        }
        
        // Listen for changes in related fields from other sections
        if (window.TEUI.StateManager) {
            // Listen for changes to emissions subtotal
            window.TEUI.StateManager.addListener("f_32", function() {
                calculateGHGI();
                calculateLifetimeAvoided();
                calculatePercentages();
            });
            
            // Listen for changes to conditioned area
            window.TEUI.StateManager.addListener("i_15", function() {
                calculateGHGI();
                calculateLifetimeAvoided();
                calculatePercentages();
            });
            
            // Listen for changes to service life
            window.TEUI.StateManager.addListener("h_13", function() {
                calculateGHGI();
                calculateLifetimeAvoided();
                calculatePercentages();
            });
            
            // Listen for changes to embodied carbon target
            window.TEUI.StateManager.addListener("d_16", function() {
                setCalculatedValue("h_40", getFieldValue("d_16"));
                setCalculatedValue("h_41", getFieldValue("d_16"));
                calculatePercentages();
            });
        }
    }
    
    /**
     * Called when the section is rendered
     * This is a good place to initialize values and run initial calculations
     */
    function onSectionRendered() {
        // console.log('Emissions section rendered, initializing calculations...');
        
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
        calculatePercentages: calculatePercentages,
        calculateLifetimeAvoided: calculateLifetimeAvoided
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