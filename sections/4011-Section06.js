/**
 * 4011-Section06.js
 * Renewable Energy (Section 6) module for TEUI Calculator 4.011
 * 
 * Uses the consolidated declarative approach where field definitions
 * are integrated directly into the layout structure.
 */

// Ensure namespace exists
window.TEUI = window.TEUI || {};
window.TEUI.SectionModules = window.TEUI.SectionModules || {};

// Section 6: Renewable Energy Module
window.TEUI.SectionModules.sect06 = (function() {
    //==========================================================================
    // CONSOLIDATED FIELD DEFINITIONS AND LAYOUT
    //==========================================================================
    
    // Define rows with integrated field definitions
    const sectionRows = {
        // UNIT SUBHEADER - MUST COME FIRST
        "header": {
            id: "06-ID",
            rowId: "06-ID",
            label: "Renewable Energy Units",
            cells: {
                c: { content: "C", classes: ["section-subheader"] },
                d: { content: "kWh/yr", classes: ["section-subheader"] },
                e: { content: "E", classes: ["section-subheader"] },
                f: { content: "F", classes: ["section-subheader"] },
                g: { content: "G", classes: ["section-subheader"] },
                h: { content: "H", classes: ["section-subheader"] }, // Empty column for alignment
                i: { content: "kWh/yr", classes: ["section-subheader"] },
                j: { content: "J", classes: ["section-subheader"] },
                k: { content: "K", classes: ["section-subheader"] },
                l: { content: "L", classes: ["section-subheader"] },
                m: { content: "kWh/yr", classes: ["section-subheader"] },
                n: { content: "N", classes: ["section-subheader"] }
            }
        },

        // Row 43: R.1 Onsite Energy Subtotals
        "43": {
            id: "R.1",
            rowId: "R.1",
            label: "Onsite Energy Subtotals",
            cells: {
                c: { label: "Onsite Energy Subtotals" },
                d: {
                    fieldId: "d_43",
                    type: "calculated",
                    value: "0.00",
                    section: "onSiteEnergy",
                    dependencies: ["d_44", "d_45", "d_46"]
                },
                f: { content: "R.5", classes: ["label-prefix"] },
                g: { content: "Offsite Renewable (REC)", classes: ["label-main"] },
                h: {}, // Empty column for alignment
                i: {
                    fieldId: "i_43",
                    type: "calculated",
                    value: "0.00",
                    section: "onSiteEnergy",
                    dependencies: ["i_44", "i_45", "i_46"] // Now depends on all three fields
                },
                j: { content: "P.5", classes: ["label-prefix"] },
                k: { content: "Exterior/Site/Other Loads", classes: ["label-main"] },
                m: {
                    fieldId: "m_43",
                    type: "editable",
                    value: "0.00",
                    section: "onSiteEnergy",
                    classes: ["user-input"]
                }
            }
        },

        // Row 44: R.2 Photovoltaics
        "44": {
            id: "R.2",
            rowId: "R.2",
            label: "Photovoltaics",
            cells: {
                c: { label: "Photovoltaics" },
                d: {
                    fieldId: "d_44",
                    type: "editable",
                    value: "0.00",
                    section: "onSiteEnergy",
                    classes: ["user-input"]
                },
                f: { content: "R.6", classes: ["label-prefix"] },
                g: { content: "WWS Electricity", classes: ["label-main"] },
                h: {}, // Empty column for alignment
                i: {
                    fieldId: "i_44",
                    type: "editable",
                    value: "0.00",
                    section: "onSiteEnergy",
                    classes: ["user-input"]
                }
            }
        },

        // Row 45: R.3 Wind
        "45": {
            id: "R.3",
            rowId: "R.3",
            label: "Wind",
            cells: {
                c: { label: "Wind" },
                d: {
                    fieldId: "d_45",
                    type: "editable",
                    value: "0.00",
                    section: "onSiteEnergy",
                    classes: ["user-input"]
                },
                f: { content: "R.7", classes: ["label-prefix"] },
                g: { content: "Green Natural Gas", classes: ["label-main"] },
                h: {}, // Empty column for alignment
                i: {
                    fieldId: "i_45",
                    type: "calculated",
                    value: "0.00",
                    section: "onSiteEnergy",
                    dependencies: ["j_45"]
                },
                j: { content: "ekWh/yr" },
                k: {
                    fieldId: "k_45",
                    type: "editable",
                    value: "0.00",
                    section: "onSiteEnergy",
                    classes: ["user-input"]
                },
                l: { content: "m³" }
            }
        },

        // Row 46: R.4 Remove EV Charging from TEUI
        "46": {
            id: "R.4",
            rowId: "R.4",
            label: "Remove EV Charging from TEUI",
            cells: {
                c: { label: "Remove EV Charging from TEUI" },
                d: {
                    fieldId: "d_46",
                    type: "editable",
                    value: "0.00",
                    section: "onSiteEnergy",
                    classes: ["user-input"]
                },
                f: { content: "R.8", classes: ["label-prefix"] },
                g: { content: "Reserved (other removals)", classes: ["label-main"] },
                h: {}, // Empty column for alignment
                i: {
                    fieldId: "i_46",
                    type: "editable",
                    value: "0.00",
                    section: "onSiteEnergy",
                    classes: ["user-input"]
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
                        label: cell.content || row.label,
                        defaultValue: cell.value || "",
                        section: cell.section || "onSiteEnergy"
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
     * Calculate the subtotal of on-site renewable generation
     */
    function calculateOnSiteSubtotal() {
        // Use global parser on values fetched via local getFieldValue
        const pvValue = window.TEUI.parseNumeric(getFieldValue("d_44")) || 0;
        const windValue = window.TEUI.parseNumeric(getFieldValue("d_45")) || 0;
        const evRemoval = window.TEUI.parseNumeric(getFieldValue("d_46")) || 0;
        const subtotal = pvValue + windValue + evRemoval;
        
        // Update using standard pattern with global formatter
        setCalculatedValueHelper("d_43", subtotal, 'number-2dp-comma');
        return subtotal;
    }
    
    /**
     * Calculate Offsite Renewable (REC) total (i_43)
     * Sums only R.6 WWS Electricity (i_44) and R.8 Reserved (i_46),
     * excluding R.7 Green Natural Gas (i_45) as requested
     */
    function calculateOffsiteRenewable() {
        const wwsValue = window.TEUI.parseNumeric(getFieldValue("i_44")) || 0;
        const reservedValue = window.TEUI.parseNumeric(getFieldValue("i_46")) || 0;
        const subtotal = wwsValue + reservedValue;
        
        // Update using standard pattern with global formatter
        setCalculatedValueHelper("i_43", subtotal, 'number-2dp-comma'); 
        return subtotal;
    }
    
    /**
     * Calculate Green Natural Gas energy (i_45)
     * Converts gas volume in m³ (k_45) to energy in kWh (i_45)
     */
    function calculateGreenNaturalGasEnergy() {
        const gasVolume = window.TEUI.parseNumeric(getFieldValue("k_45")) || 0;
        const energyContent = gasVolume * 10.3321;
        
        // Update using standard pattern with global formatter
        setCalculatedValueHelper("i_45", energyContent, 'number-2dp-comma');
        return energyContent;
    }
    
    /**
     * Calculate Wind, Water, and Solar Electricity
     * @returns {number} - Total WWS energy in kWh/year
     */
    function calculateWWSElectricity() {
        // For now, this is just user input - in the future we might calculate it
        // from other input fields like solar PV area, wind capacity, etc.
        const wws = window.TEUI?.parseNumeric?.(getFieldValue("i_44"), 0) ?? 0;
        return wws;
    }
    
    /**
     * Calculate all values for the Renewable Energy section
     */
    function calculateAll() {
        calculateOnSiteSubtotal();
        calculateGreenNaturalGasEnergy();
        calculateOffsiteRenewable();
    }
    
    /**
     * Helper function to get a field value
     * @param {string} fieldId - Field ID
     * @returns {string} - Field value
     */
    function getFieldValue(fieldId) {
        if (window.TEUI?.StateManager?.getValue) {
            const value = window.TEUI.StateManager.getValue(fieldId);
            if (value !== null && value !== undefined) {
                return value;
            }
        }
        const element = document.querySelector(`[data-field-id="${fieldId}"]`);
        if (element) {
            return element.value !== undefined ? element.value : element.textContent;
            }
        return '0'; // Return '0' as string fallback to match previous behavior
    }
    
    /**
     * Helper function to set a calculated value using the global pattern.
     * (Replaces the old local setCalculatedValue)
     */
    function setCalculatedValueHelper(fieldId, rawValue, formatType = 'number-2dp-comma') {
        const numericValue = Number(rawValue);
        if (isNaN(numericValue)) { 
             if (window.TEUI?.StateManager) {
                 window.TEUI.StateManager.setValue(fieldId, '0', 'calculated');
             }
             const element = document.querySelector(`[data-field-id="${fieldId}"]`);
             if(element) element.textContent = window.TEUI.formatNumber(0, formatType);
             return; 
        }

        const formattedValue = window.TEUI.formatNumber(numericValue, formatType);
        const valueToStore = numericValue.toString();

        if (window.TEUI?.StateManager) {
            const currentStateValue = window.TEUI.StateManager.getValue(fieldId);
            if (currentStateValue !== valueToStore) {
                window.TEUI.StateManager.setValue(fieldId, valueToStore, 'calculated');
        }
        }
        
        const element = document.querySelector(`[data-field-id="${fieldId}"]`);
        if (element) {
            if (element.textContent !== formattedValue) {
                element.textContent = formattedValue;
            }
             element.classList.toggle('negative-value', numericValue < 0);
        }
    }
    
    /**
     * Initialize all event handlers for this section
     */
    function initializeEventHandlers() {
        const sectionElement = document.getElementById('onSiteEnergy');
        if (!sectionElement) return;
        
        const editableFields = sectionElement.querySelectorAll('.user-input.editable'); 
        
        editableFields.forEach(field => {
            if (!field.hasEditableListeners) { 
                field.setAttribute('contenteditable', 'true');
                
                field.addEventListener('focus', function() {
                    this.classList.add('editing');
                    this.dataset.originalValue = window.TEUI.StateManager.getValue(this.dataset.fieldId) || '0';
                });
                
                field.addEventListener('blur', function() {
                    this.classList.remove('editing');
                    handleEditableBlur(this); 
                });

                field.addEventListener('keydown', function(e) {
                    if (e.key === 'Enter') {
                        e.preventDefault(); 
                        this.blur(); 
                    }
                });
                field.hasEditableListeners = true;
            }
        });
    }
    
    /**
     * Standard blur handler for editable fields in this section
     */
    function handleEditableBlur(element) {
        const fieldId = element.getAttribute('data-field-id');
                if (!fieldId) return;
                
        const originalValue = element.dataset.originalValue || '0'; 
        const newValueText = element.textContent.trim();
                
        // Use global parser
        const numericValue = window.TEUI.parseNumeric(newValueText, NaN); 

        if (!isNaN(numericValue)) {
            const valueToStore = numericValue.toString();
            // Only update if value has actually changed from the stored raw value
            if (valueToStore !== originalValue) { 
                // Use global formatter
                const formatType = 'number-2dp-comma'; 
                const formattedDisplay = window.TEUI.formatNumber(numericValue, formatType);
                element.textContent = formattedDisplay;
                
                if (window.TEUI.StateManager) {
                    window.TEUI.StateManager.setValue(fieldId, valueToStore, 'user-modified');
                    calculateAll(); // Recalculate Section 06 subtotals
                }
            } else {
                 // Value didn't change numerically, just reformat display if needed
                 const formatType = 'number-2dp-comma'; 
                 // Use global formatter
                 element.textContent = window.TEUI.formatNumber(numericValue, formatType);
            }
        } else {
            // Revert to original value if input is invalid
            // Use global parser and formatter
            const prevNumericValue = window.TEUI.parseNumeric(originalValue, 0);
            const formatType = 'number-2dp-comma';
            element.textContent = window.TEUI.formatNumber(prevNumericValue, formatType);
            console.warn(`Invalid input for ${fieldId}: "${newValueText}". Reverted to ${element.textContent}.`);
        }
    }
    
    /**
     * Called when the section is rendered
     * This is a good place to initialize values and run initial calculations
     */
    function onSectionRendered() {
        initializeEventHandlers();
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
        calculateOnSiteSubtotal: calculateOnSiteSubtotal,
        calculateGreenNaturalGasEnergy: calculateGreenNaturalGasEnergy,
        calculateOffsiteRenewable: calculateOffsiteRenewable
    };
})();