/**
 * 4011-Section02.js
 * Building Information (Section 2) module for TEUI Calculator 4.011
 * 
 * This file contains field definitions, layout templates, and rendering logic
 * specific to the Building Information section.
 * 
 * Refactored to use the consolidated declarative approach where field definitions
 * are integrated directly into the layout structure.
 */

// Ensure namespace exists
window.TEUI = window.TEUI || {};
window.TEUI.SectionModules = window.TEUI.SectionModules || {};

// Section 2: Building Information Module
window.TEUI.SectionModules.sect02 = (function() {
    
    //==========================================================================
    // CONSOLIDATED FIELD DEFINITIONS AND LAYOUT
    //==========================================================================
    
    // Define rows with integrated field definitions
    const sectionRows = {
        // UNIT SUBHEADER - MUST COME FIRST
        "header": {
            id: "02-ID",
            rowId: "02-ID",
            label: "Building Info Units",
            cells: {
                c: { content: "SECTION 02. Building Information", classes: ["section-header"] },
                d: { content: "", classes: ["section-subheader"] }, // Empty D for consistency
                e: { content: "Units", classes: ["section-subheader", "text-center"] },
                f: { content: "Reference", classes: ["section-subheader", "text-center"] },
                g: { content: "Target", classes: ["section-subheader", "text-center"] },
                h: { content: "Actual", classes: ["section-subheader", "text-center"] },
                i: { content: "Description", classes: ["section-subheader", "text-center"] },
                j: { content: "Target", classes: ["section-subheader", "text-center"] },
                k: { content: "Actual", classes: ["section-subheader", "text-center"] },
                l: { content: "T.10 Cost of Energy by Source", classes: ["section-subheader", "text-center"], colspan: 3 }, // Changed T.6.7 to T.10
                m: { content: "" }, // Covered by colspan
                n: { content: "" } // Covered by colspan
            }
        },

        // Row 12: B.1 Major Occupancy
        "12": {
            id: "B.1",
            rowId: "B.1",
            label: "Major Occupancy",
            cells: {
                c: { label: "Major Occupancy" },
                d: { 
                    fieldId: "d_12", 
                    type: "dropdown", 
                    dropdownId: "dd_d_12", 
                    value: "A-Assembly",
                    section: "buildingInfo",
                    options: [
                        { value: "A-Assembly", name: "A-Assembly" },
                        { value: "B1-Detention", name: "B1-Detention" },
                        { value: "B2-Care and Treatment", name: "B2-Care and Treatment" },
                        { value: "B3-Detention Care & Treatment", name: "B3-Detention Care & Treatment" },
                        { value: "C-Residential", name: "C-Residential" },
                        { value: "D-Business & Personal Services", name: "D-Business & Personal Services" },
                        { value: "E-Mercantile", name: "E-Mercantile" },
                        { value: "F-Industrial", name: "F-Industrial" }
                    ]
                },
                e: { content: "" }, // Empty but needed for alignment
                f: { content: "D.1", classes: ["label-prefix", "text-right", "no-wrap"] },
                g: { content: "Reporting Period", classes: ["label-main", "text-left", "no-wrap"] },
                h: { 
                    fieldId: "h_12", 
                    type: "year_slider", 
                    value: "2022", 
                    min: 2015, 
                    max: 2041, 
                    step: 1,
                    section: "buildingInfo",
                    span: 2
                },
                i: { content: "" }, // Empty but needed for alignment
                j: { content: "" }, // Empty but needed for alignment
                k: { content: "Electricity", classes: ["text-end"] },
                l: { 
                    fieldId: "l_12", 
                    type: "editable", 
                    value: "$0.1300",
                    section: "buildingInfo"
                },
                m: { content: "/kWh", classes: ["text-start"] },
                n: { content: "" } // Empty but needed for alignment
            }
        },

        // Row 13: S.1 Reference Standard
        "13": {
            id: "S.1",
            rowId: "S.1",
            label: "Reference Standard",
            cells: {
                c: { label: "Reference Standard" },
                d: { 
                    fieldId: "d_13", 
                    type: "dropdown", 
                    dropdownId: "dd_d_13", 
                    value: "OBC SB10 5.5-6 Z6",
                    section: "buildingInfo",
                    options: [
                        { value: "OBC SB12 3.1.1.2.C4", name: "OBC SB12 3.1.1.2.C4" },
                        { value: "OBC SB12 3.1.1.2.C1", name: "OBC SB12 3.1.1.2.C1" },
                        { value: "OBC SB10 5.5-6 Z6", name: "OBC SB10 5.5-6 Z6" },
                        { value: "OBC SB10 5.5-6 Z5 (2010)", name: "OBC SB10 5.5-6 Z5 (2010)" },
                        { value: "ADD YOUR OWN HERE", name: "ADD YOUR OWN HERE" },
                        { value: "NBC T1", name: "NBC T1" },
                        { value: "NBC T2", name: "NBC T2" },
                        { value: "NBC T3", name: "NBC T3" },
                        { value: "NBC T4", name: "NBC T4" },
                        { value: "NBC T5", name: "NBC T5" },
                        { value: "CaGBC ZCB", name: "CaGBC ZCB" },
                        { value: "NECB T1 (Z6)", name: "NECB T1 (Z6)" },
                        { value: "PH Classic", name: "PH Classic" },
                        { value: "PH Plus", name: "PH Plus" },
                        { value: "PH Premium", name: "PH Premium" },
                        { value: "EnerPHit", name: "EnerPHit" },
                        { value: "PH Low Energy", name: "PH Low Energy" }
                    ]
                },
                e: { content: "" }, // Empty but needed for alignment
                f: { content: "D.2", classes: ["label-prefix", "text-right", "no-wrap"] },
                g: { content: "Service Life (yrs)", classes: ["label-main", "text-left", "no-wrap"] },
                h: { 
                    fieldId: "h_13", 
                    type: "year_slider", 
                    value: "50", 
                    min: 30, 
                    max: 100, 
                    step: 10,
                    section: "buildingInfo",
                    span: 2 
                },
                i: { content: "" }, // Empty but needed for alignment
                j: { content: "" }, // Empty but needed for alignment
                k: { content: "Gas", classes: ["text-end"] },
                l: { 
                    fieldId: "l_13", 
                    type: "editable", 
                    value: "$0.5070",
                    section: "buildingInfo"
                },
                m: { content: "/m³", classes: ["text-start"] },
                n: { content: "" } // Empty but needed for alignment
            }
        },

        // Row 14: S.2 Actual/Target Use
        "14": {
            id: "S.2",
            rowId: "S.2",
            label: "Actual (Bills) or Targeted (Design) Use",
            cells: {
                c: { label: "Actual (Bills) or Targeted (Design) Use" },
                d: { 
                    fieldId: "d_14", 
                    type: "dropdown", 
                    dropdownId: "dd_d_14", 
                    value: "Targeted Use",
                    section: "buildingInfo",
                    options: [
                        { value: "Targeted Use", name: "Targeted Use" },
                        { value: "Utility Bills", name: "Utility Bills" }
                    ]
                },
                e: { content: "" }, // Empty but needed for alignment
                f: { content: "B.2", classes: ["label-prefix", "text-right", "no-wrap"] },
                g: { content: "Project Name", classes: ["label-main", "text-left", "no-wrap"] },
                h: { 
                    fieldId: "h_14", 
                    type: "editable", 
                    value: "Three Feathers Terrace", 
                    classes: ["wide-text", "no-wrap"],
                    section: "buildingInfo",
                    span: 2
                },
                i: { content: "" }, // Empty but needed for alignment
                j: { content: "" }, // Empty but needed for alignment
                k: { content: "Propane", classes: ["text-end"] },
                l: { 
                    fieldId: "l_14", 
                    type: "editable", 
                    value: "$1.6200",
                    section: "buildingInfo"
                },
                m: { content: "/kg", classes: ["text-start"] },
                n: { content: "" } // Empty but needed for alignment
            }
        },

        // Row 15: S.3 Carbon Standard
        "15": {
            id: "S.3",
            rowId: "S.3",
            label: "Carbon Benchmarking Standard",
            cells: {
                c: { label: "Carbon Benchmarking Standard" },
                d: { 
                    fieldId: "d_15", 
                    type: "dropdown", 
                    dropdownId: "dd_d_15", 
                    value: "Self Reported",
                    section: "buildingInfo",
                    options: [
                        { value: "BR18 (Denmark)", name: "BR18 (Denmark)" },
                        { value: "IPCC AR6 EPC", name: "IPCC AR6 EPC" },
                        { value: "IPCC AR6 EA", name: "IPCC AR6 EA" },
                        { value: "TGS4", name: "TGS4" },
                        { value: "CaGBC ZCB D", name: "CaGBC ZCB D" },
                        { value: "CaGBC ZCB P", name: "CaGBC ZCB P" },
                        { value: "Self Reported", name: "Self Reported" },
                        { value: "Not Reported", name: "Not Reported" }
                    ]
                },
                e: { content: "" }, // Empty but needed for alignment
                f: { content: "B.3", classes: ["label-prefix", "text-right", "no-wrap"] },
                g: { content: "Conditioned Area", classes: ["label-main", "text-left", "no-wrap"] }, // validate as (Net m²)
                h: { 
                    fieldId: "h_15", 
                    type: "editable",      // *** REVERTED TO EDITABLE ***
                    value: "1,427.20",    // *** RESTORED value, ensure formatting is consistent ***
                    classes: ["user-input", "editable"], // *** RESTORED classes ***
                    // Removed editable_slider specific config
                    section: "buildingInfo",
                    // span: 2 // No longer spanning
                },
                i: { 
                    fieldId: "i_15_slider", 
                    type: "generic_slider", 
                    min: -500,            // Adjustment range min (+/- 500)
                    max: 500,             // Adjustment range max (+/- 500)
                    step: 10,             
                    value: "0",           
                    controlsField: "h_15", 
                    section: "buildingInfo",
                    classes: ["area-adjust-slider"] // Optional class for specific styling
                }, 
                j: { content: "" }, // Empty but needed for alignment
                k: { content: "Wood", classes: ["text-end"] },
                l: { 
                    fieldId: "l_15", 
                    type: "editable", 
                    value: "$180.00",
                    section: "buildingInfo"
                },
                m: { content: "/m³", classes: ["text-start"] },
                n: { content: "" } // Empty but needed for alignment
            }
        },

        // Row 16: S.4 Embodied Carbon Target
        "16": {
            id: "S.4",
            rowId: "S.4",
            label: "Embodied Carbon Target (kgCO₂e/m²)",
            cells: {
                c: { label: "Embodied Carbon Target (kgCO₂e/m²)" },
                d: { 
                    fieldId: "d_16", 
                    type: "derived", 
                    value: "345.82",
                    section: "buildingInfo"
                },
                e: { content: "" }, // Empty but needed for alignment
                f: { content: "A.1", classes: ["label-prefix", "text-right", "no-wrap"] },
                g: { content: "Certifier:", classes: ["label-main", "text-left", "no-wrap"] },
                h: { 
                    fieldId: "i_16", 
                    type: "editable", 
                    value: "Thomson Architecture, Inc.",
                    classes: [],
                    section: "buildingInfo",
                    span: 2
                },
                i: { content: "" }, // Empty but needed for alignment
                j: { content: "" }, // Empty but needed for alignment
                k: { content: "Oil", classes: ["text-end"] },
                l: { 
                    fieldId: "l_16", 
                    type: "editable", 
                    value: "$1.5000",
                    section: "buildingInfo"
                },
                m: { content: "/litre", classes: ["text-start"] },
                n: { content: "" } // Empty but needed for alignment
            }
        },

        // Row 17: License Number
        "17": {
            id: "License",
            rowId: "License",
            label: "Licence No",
            cells: {
                c: { content: "" }, // Empty but needed for alignment
                d: { content: "" }, // Empty but needed for alignment
                e: { content: "" }, // Empty but needed for alignment
                f: { content: "A.2", classes: ["label-prefix", "text-right", "no-wrap"] },
                g: { content: "Licence No:", classes: ["label-main", "text-left", "no-wrap"] },
                h: { 
                    fieldId: "i_17", 
                    type: "editable", 
                    value: "8154",
                    classes: [],
                    section: "buildingInfo",
                    span: 2
                },
                i: { content: "" }, // Empty but needed for alignment
                j: { content: "" }, // Empty but needed for alignment
                k: { content: "" }, // Empty but needed for alignment
                l: { content: "" }, // Empty but needed for alignment
                m: { content: "" }, // Empty but needed for alignment
                n: { content: "" } // Empty but needed for alignment
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
                        section: cell.section || "buildingInfo"
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
     * Update the StateManager value for h_15 when conditioned area changes
     */
    function ensureAreaValueIsSet() {
        // Find the conditioned area field
        const areaField = document.querySelector('[data-field-id="h_15"]');
        if (!areaField) {
            // console.warn("Could not find conditioned area field (h_15)");
            return;
        }
        
        // Make sure it's editable
        if (!areaField.hasAttribute('contenteditable')) {
            // console.log("Making conditioned area field editable");
            areaField.setAttribute('contenteditable', 'true');
            areaField.classList.add('user-input', 'editable');
            
            // Add event listeners for editing
            areaField.addEventListener('focus', function() {
                this.classList.add('editing');
                // Store original value to detect changes
                this.dataset.originalValue = this.textContent.trim();
            });
            
            areaField.addEventListener('blur', function() {
                this.classList.remove('editing');
                updateAreaValue();
            });
            
            // Handle Enter key
            areaField.addEventListener('keydown', function(e) {
                if (e.key === 'Enter') {
                    e.preventDefault(); // Prevent adding a newline
                    this.blur(); // Remove focus to trigger the blur event
                }
            });
        }
        
        // Get current value and update StateManager
        updateAreaValue();
        
        // Ensure all editable fields in this section use proper classes
        ensureAllFieldsUseProperStyling();
    }
    
    /**
     * Ensure all editable fields in the section use the proper classes
     */
    function ensureAllFieldsUseProperStyling() {
        // Fields that should be user editable
        const userInputFields = [
            'h_14', // Project Name
            'h_15', // Conditioned Area
            'i_16', // Certifier 
            'i_17', // License No
            'l_12', // Electricity cost
            'l_13', // Gas cost
            'l_14', // Propane cost
            'l_15', // Wood cost
            'l_16'  // Oil cost
        ];
        
        // Apply proper classes to all user input fields
        userInputFields.forEach(fieldId => {
            const field = document.querySelector(`[data-field-id="${fieldId}"]`);
            if (field) {
                // Make sure it's properly styled and editable
                field.setAttribute('contenteditable', 'true');
                field.classList.add('user-input', 'editable');
                
                // Remove any existing inline styles
                field.removeAttribute('style');
                
                // Set up event listeners if not already present
                if (!field.hasEventListener) {
                    field.addEventListener('focus', function() {
                        this.classList.add('editing');
                        this.dataset.originalValue = this.textContent.trim();
                    });
                    
                    field.addEventListener('blur', function() {
                        this.classList.remove('editing');
                        // Update state manager if needed
                        if (window.TEUI && window.TEUI.StateManager) {
                            window.TEUI.StateManager.setValue(fieldId, this.textContent.trim(), "user-modified");
                        }
                    });
                    
                    field.addEventListener('keydown', function(e) {
                        if (e.key === 'Enter') {
                            e.preventDefault();
                            this.blur();
                        }
                    });
                    
                    field.hasEventListener = true;
                }
            }
        });
        
        // Fields that should be derived values
        const derivedFields = [
            'd_16'  // Embodied Carbon Target
        ];
        
        // Apply proper classes to derived fields
        derivedFields.forEach(fieldId => {
            const field = document.querySelector(`[data-field-id="${fieldId}"]`);
            if (field) {
                // Remove editable attributes
                field.removeAttribute('contenteditable');
                field.classList.remove('user-input', 'editable');
                field.classList.add('derived-value');
                
                // Remove any existing inline styles
                field.removeAttribute('style');
            }
        });
    }
    
    /**
     * Update area value in StateManager and propagate to TEUI calculations
     */
    function updateAreaValue() {
        const areaField = document.querySelector('[data-field-id="h_15"]');
        if (!areaField) return;
        
        // Get the current displayed value
        const displayedArea = areaField.textContent.trim();
        const areaValue = parseFloat(displayedArea.replace(/,/g, ''));
        
        if (!isNaN(areaValue) && areaValue > 0 && window.TEUI && window.TEUI.StateManager) {
            // console.log(`Setting conditioned area h_15 in StateManager to: ${areaValue}`);
            window.TEUI.StateManager.setValue("h_15", areaValue.toString(), "user-modified");
            
            // Trigger TEUI recalculation with the new area value
            setTimeout(() => {
                if (typeof window.calculateTEUI === 'function') {
                    // console.log("Triggering TEUI recalculation after area update");
                    window.calculateTEUI();
                }
            }, 100);
        }
    }
    
    /**
     * Initialize event handlers for this section
     */
    function initializeEventHandlers() {
        // Make sure the conditioned area value is set in StateManager initially
        ensureAreaValueIsSet(); 
        
        // Add a listener for changes to the conditioned area text input
        const areaField = document.querySelector('[data-field-id="h_15"]');
        if (areaField) {
            // Use blur event for text input changes
            areaField.addEventListener('blur', updateAreaValue); 
            // Handle Enter key for text input
            areaField.addEventListener('keydown', function(e) {
                if (e.key === 'Enter') {
                    e.preventDefault(); 
                    this.blur(); 
                }
            });
        }

        // Add listener for the new area adjustment slider
        const areaSlider = document.querySelector('[data-field-id="i_15_slider"]');
        if (areaSlider) {
            areaSlider.addEventListener('input', handleAreaSliderInput);
            // Optional: Add 'change' listener if you only want updates on release
            // areaSlider.addEventListener('change', handleAreaSliderChange); 
            areaSlider.addEventListener('change', handleAreaSliderChange); // Use CHANGE for final update + reset
        }
    }

    /**
     * Handle LIVE input from the area adjustment slider (i_15)
     * Updates the target field (h_15) display for immediate feedback.
     */
    function handleAreaSliderInput(event) {
        const areaField = document.querySelector('[data-field-id="h_15"]');
        const slider = event.target;
        
        if (!areaField || !slider) return;

        try {
            // Get *original* area value from a temporary attribute or StateManager
            // Store original value on focus/initial load if needed, or rely on StateManager
            const originalAreaStr = slider.dataset.originalArea || window.TEUI.StateManager?.getValue("h_15") || areaField.dataset.originalValue || areaField.textContent.trim();
            let originalArea = parseFloat(String(originalAreaStr).replace(/,/g, ''));
             if (isNaN(originalArea)) originalArea = 0; 

            // Get adjustment value from slider's current position
            const adjustment = parseFloat(slider.value);
            if (isNaN(adjustment)) return;

            // Calculate potential new area
            let newArea = Math.max(10, originalArea + adjustment);
            newArea = parseFloat(newArea.toFixed(2));
            
            // Update the text field display ONLY (formatted)
            areaField.textContent = newArea.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 });

            // Store the original value if it's not already stored for the 'change' event
            if (!slider.dataset.originalArea) {
                slider.dataset.originalArea = originalAreaStr; 
            }

        } catch (error) {
            console.error("Error handling area slider input:", error);
        }
    }

    /**
     * Handle changes from the area adjustment slider (i_15)
     * Finalizes the update on SLIDER RELEASE (change event).
     */
    function handleAreaSliderChange(event) {
        const areaField = document.querySelector('[data-field-id="h_15"]');
        const slider = event.target;
        
        if (!areaField || !slider) return;

        try {
            // Get current area value (remove commas, parse as float)
            const currentAreaText = areaField.textContent.trim();
            let currentArea = parseFloat(currentAreaText.replace(/,/g, ''));
            if (isNaN(currentArea)) {
                 console.warn("Could not parse current area value from h_15");
                 // Try getting from StateManager as a fallback
                 const stateArea = window.TEUI.StateManager.getValue("h_15");
                 currentArea = parseFloat(String(stateArea).replace(/,/g, ''));
                 if(isNaN(currentArea)) currentArea = 0; // Final fallback
            }
            
            // Get adjustment value from slider's FINAL position
            const adjustment = parseFloat(slider.value);
            if (isNaN(adjustment)) return; 

            // Calculate new area, ensuring it doesn't go below a minimum (e.g., 10)
            let newArea = Math.max(10, currentArea + adjustment);
            newArea = parseFloat(newArea.toFixed(2)); // Ensure 2 decimal places
            
            // Update the text field display (redundant if input handler worked, but safe)
            areaField.textContent = newArea.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 });

            // Update the StateManager
            if (window.TEUI && window.TEUI.StateManager) {
                window.TEUI.StateManager.setValue("h_15", newArea.toFixed(2), window.TEUI.StateManager.VALUE_STATES.USER_MODIFIED);
            }
            
            // **Important:** Reset the slider value back to 0 after applying the adjustment.
            // This makes the slider represent a +/- change rather than an absolute value.
            slider.value = 0; 

            // Clear the stored original area value
            delete slider.dataset.originalArea;

        } catch (error) {
            console.error("Error handling area slider change:", error);
        }
    }
    
    /**
     * Called when section is rendered
     */
    function onSectionRendered() {
        // Initialize event handlers, which now includes the slider handler
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
        
        // Event handling and initialization - REQUIRED
        initializeEventHandlers: initializeEventHandlers,
        onSectionRendered: onSectionRendered
    };
})();

// Initialize when the section is rendered
document.addEventListener('teui-section-rendered', function(event) {
    if (event.detail?.sectionId === 'buildingInfo') {
        setTimeout(() => window.TEUI.SectionModules.sect02.onSectionRendered(), 100);
    }
});

// Fallback to rendering complete event
document.addEventListener('teui-rendering-complete', function() {
    setTimeout(() => {
        if (document.getElementById('buildingInfo')) {
            window.TEUI.SectionModules.sect02.onSectionRendered();
        }
    }, 300);
});