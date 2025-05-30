/**
 * 4011-Section04.js
 * Actual vs. Target Energy & Carbon (Section 4) module for TEUI Calculator 4.011
 * 
 * This file contains field definitions, layout templates, and rendering logic
 * specific to the Actual vs. Target Energy & Carbon section using a declarative row-based approach.
 */

// Ensure namespace exists
window.TEUI = window.TEUI || {};
window.TEUI.SectionModules = window.TEUI.SectionModules || {};

// Section 4: Actual vs. Target Energy & Carbon Module
window.TEUI.SectionModules.sect04 = (function() {
    
    //==========================================================================
    // HELPER FUNCTIONS (Standard Implementation)
    //==========================================================================
    
    /**
     * Safely parses a numeric value from StateManager, using the global parseNumeric.
     * @param {string} fieldId - The ID of the field to retrieve the value for.
     * @returns {number} The parsed numeric value, or 0 if parsing fails.
     */
    function getNumericValue(fieldId, defaultValue = 0) {
        const rawValue = window.TEUI?.StateManager?.getValue(fieldId);
        // Use the global parseNumeric if available
        return window.TEUI?.parseNumeric?.(rawValue, defaultValue) || defaultValue;
    }
    
    /**
     * Helper to get field value, preferring StateManager but falling back to DOM.
     * @param {string} fieldId 
     * @returns {string | null} Value as string or null if not found.
     */
    function getFieldValue(fieldId) {
        if (window.TEUI?.StateManager?.getValue) {
            const value = window.TEUI.StateManager.getValue(fieldId);
            if (value !== null && value !== undefined) {
                return value.toString();
        }
        }
        const element = document.querySelector(`[data-field-id="${fieldId}"],[data-dropdown-id="${fieldId}"]`); 
        if (element) {
            return element.value !== undefined ? element.value : element.textContent;
        }
        return null;
    }
    
    /**
     * Sets a calculated value in the StateManager and updates the corresponding DOM element.
     * Updated for V2 dual-engine architecture using setDualEngineValue
     * @param {string} fieldId - The ID of the field to update.
     * @param {number} rawValue - The raw calculated numeric value.
     * @param {string} [formatType='number-2dp-comma'] - The format type string (e.g., 'number-2dp-comma', 'percent-1dp', 'integer').
     */
    function setCalculatedValue(fieldId, rawValue, formatType = 'number-2dp-comma') {
        // Handle N/A or invalid values
        if (!isFinite(rawValue) || rawValue === null || rawValue === undefined) {
            const element = document.querySelector(`[data-field-id="${fieldId}"]`);
            if (element) {
                element.textContent = 'N/A';
                element.classList.remove('negative-value');
            }
        if (window.TEUI?.StateManager?.setValue) {
                window.TEUI.StateManager.setValue(fieldId, 'N/A', 'calculated');
            }
            return;
        }
        
        // Use V2 dual-engine setter which handles state management and DOM updates
        setDualEngineValue(fieldId, rawValue, formatType);
    }
    
    //==========================================================================
    // V2 DUAL-ENGINE HELPER FUNCTIONS (Copy from Section 07 Template)
    //==========================================================================
    
    // 1. Mode-aware value getter - FIXED for proper dual-state calculation
    function getRefFieldValue(fieldId) {
        // CRITICAL FIX: Always try to get reference values first, regardless of viewing mode
        // This allows proper dual-state calculation where Reference and Target are calculated simultaneously
        const refValue = window.TEUI.StateManager?.getReferenceValue?.(fieldId);
        if (refValue !== null && refValue !== undefined) {
            return refValue;
        }
        
        // Fallback to application value if no reference value exists
        return window.TEUI.StateManager?.getApplicationValue?.(fieldId) || getFieldValue(fieldId);
    }

    // 2. Application value getter
    function getAppFieldValue(fieldId) {
        return window.TEUI.StateManager?.getApplicationValue?.(fieldId) || getFieldValue(fieldId);
    }

    // 3. Dual-engine value setter
    function setDualEngineValue(fieldId, rawValue, formatType = 'number-2dp-comma') {
        const isReferenceMode = window.TEUI?.ReferenceToggle?.isReferenceMode?.() || false;
        
        if (isReferenceMode) {
            // Reference Mode - store with ref_ prefix using new V2 API
            if (window.TEUI?.StateManager?.setReferenceValue) {
                window.TEUI.StateManager.setReferenceValue(`ref_${fieldId}`, rawValue.toString(), 'calculated-reference');
            }
        } else {
            // Application Mode - store in main state using new V2 API
            if (window.TEUI?.StateManager?.setApplicationValue) {
                window.TEUI.StateManager.setApplicationValue(fieldId, rawValue.toString(), 'calculated');
            }
        }
        
        // Update DOM with proper formatting using global formatNumber
        const formattedValue = window.TEUI?.formatNumber?.(rawValue, formatType) ?? rawValue?.toString() ?? 'N/A';
        const element = document.querySelector(`[data-field-id="${fieldId}"]`);
        if (element) {
            element.textContent = formattedValue;
            element.classList.toggle('negative-value', isFinite(rawValue) && rawValue < 0);
        }
    }
    
    //==========================================================================
    // PART 1: SECTION DEFINITION (DECLARATIVE STRUCTURE)
    //==========================================================================
    
    // Renamed from sectionDefinition to sectionRows for consistency
    const sectionRows = {
        metadata: { // Keep metadata for now, though not standard in template
            sectionId: "actualTargetEnergy",
            sectionName: "Actual vs. Target Energy & Carbon",
            sectionNumber: "04"
        },
        
        // Renamed 'subheader' key to 'header'
        "header": {
            id: "04-ID",
            rowId: "04-ID", // Added rowId for consistency
            label: "Section 04 Units", // Added label for consistency
            cells: {
                // Column B should be empty, FieldManager populates it
                b: {}, 
                c: { content: "C", classes: ["section-subheader"] }, // Content is fine for header
                d: { content: "ACTUAL ENERGY", classes: ["section-subheader"] },
                e: { content: "UNITS", classes: ["section-subheader"] },
                f: { content: "ACTUAL NET", classes: ["section-subheader"] },
                g: { content: "E.1 EMISSIONS\nkgCO2e/yr", classes: ["section-subheader"], style: "white-space: pre-line;" }, // Added style for newline
                h: { content: "TARGET ENERGY", classes: ["section-subheader"] },
                i: { content: "UNITS", classes: ["section-subheader"] },
                j: { content: "TARGET NET", classes: ["section-subheader"] },
                k: { content: "E.1 EMISSIONS\nkgCO2e/yr", classes: ["section-subheader"], style: "white-space: pre-line;" }, // Added style for newline
                l: { content: "EMISSION FACTORS", classes: ["section-subheader"] },
                m: { content: "UNITS", classes: ["section-subheader"] },
                n: { content: "", classes: ["section-subheader"] } // Keep n empty
            }
        },
            
        // Row 27: T.3.1 Total Electricity Use
        "27": {
            id: "T.3.1",
            rowId: "T.3.1",
            label: "Total Electricity Use",
            cells: {
                // Column B should be empty {}
                b: {}, 
                // Column C should use label property
                c: { label: "Total Electricity Use" }, 
                // Other columns define fields as before, adding section property
                d: { fieldId: "d_27", type: "editable", value: "132,938.00", classes: ["user-input"], section: "actualTargetEnergy" },
                e: { content: "kWh/yr" },
                f: { fieldId: "f_27", type: "calculated", value: "132,938.00", dependencies: ["d_27", "d_43", "i_43"], classes: ["calculated-value"], section: "actualTargetEnergy" }, // Dependency uses i_43
                g: { fieldId: "g_27", type: "calculated", value: "6,779.84", dependencies: ["f_27", "l_27"], classes: ["calculated-value"], section: "actualTargetEnergy" },
                h: { fieldId: "h_27", type: "calculated", value: "132,765.65", dependencies: ["d_136"], classes: ["calculated-value"], section: "actualTargetEnergy" },
                i: { content: "kWh/yr" },
                j: { fieldId: "j_27", type: "calculated", value: "132,765.65", dependencies: ["h_27", "d_43", "i_43"], classes: ["calculated-value"], section: "actualTargetEnergy" }, // Dependency uses i_43
                k: { fieldId: "k_27", type: "calculated", value: "6,771.05", dependencies: ["j_27", "l_27"], classes: ["calculated-value"], section: "actualTargetEnergy" },
                l: { fieldId: "l_27", type: "editable", value: "51.00", classes: ["user-input"], section: "actualTargetEnergy" },
                m: { content: "gCO2e/kWh" }
            }
        },
            
        // Row 28: T.3.2 Total Fossil Gas Use
        "28": {
            id: "T.3.2",
            rowId: "T.3.2",
            label: "Total Fossil Gas Use",
            cells: {
                b: {}, // Empty
                c: { label: "Total Fossil Gas Use" }, // Use label
                d: { fieldId: "d_28", type: "editable", value: "0.00", classes: ["user-input"], section: "actualTargetEnergy" },
                e: { content: "m³/yr" },
                f: { fieldId: "f_28", type: "calculated", value: "0.00", dependencies: ["d_28"], classes: ["calculated-value"], section: "actualTargetEnergy" },
                g: { fieldId: "g_28", type: "calculated", value: "0.00", dependencies: ["d_28", "l_28"], classes: ["calculated-value"], section: "actualTargetEnergy" },
                h: { fieldId: "h_28", type: "calculated", value: "0.00", dependencies: ["d_51", "e_51", "d_113", "h_115"], classes: ["calculated-value"], section: "actualTargetEnergy" },
                i: { content: "m³/yr" },
                j: { fieldId: "j_28", type: "calculated", value: "0.00", dependencies: ["h_28"], classes: ["calculated-value"], section: "actualTargetEnergy" },
                k: { fieldId: "k_28", type: "calculated", value: "0.00", dependencies: ["h_28", "l_28"], classes: ["calculated-value"], section: "actualTargetEnergy" },
                l: { fieldId: "l_28", type: "editable", value: "1,921.00", classes: ["user-input"], section: "actualTargetEnergy" },
                m: { content: "gCO2e/m³" }
            }
        },
            
        // Row 29: T.3.3 Total Propane Use
        "29": {
            id: "T.3.3",
            rowId: "T.3.3",
            label: "Total Propane Use",
            cells: {
                b: {}, // Empty
                c: { label: "Total Propane Use" }, // Use label
                d: { fieldId: "d_29", type: "editable", value: "0.00", classes: ["user-input"], section: "actualTargetEnergy" },
                e: { content: "kg/yr" },
                f: { fieldId: "f_29", type: "calculated", value: "0.00", dependencies: ["d_29"], classes: ["calculated-value"], section: "actualTargetEnergy" },
                g: { fieldId: "g_29", type: "calculated", value: "0.00", dependencies: ["d_29", "l_29"], classes: ["calculated-value"], section: "actualTargetEnergy" },
                h: { fieldId: "h_29", type: "calculated", value: "0.00", dependencies: ["d_29"], classes: ["calculated-value"], section: "actualTargetEnergy" },
                i: { content: "kg/yr" },
                j: { fieldId: "j_29", type: "calculated", value: "0.00", dependencies: ["h_29"], classes: ["calculated-value"], section: "actualTargetEnergy" },
                k: { fieldId: "k_29", type: "calculated", value: "0.00", dependencies: ["h_29", "l_29"], classes: ["calculated-value"], section: "actualTargetEnergy" },
                l: { fieldId: "l_29", type: "editable", value: "2,970.00", classes: ["user-input"], section: "actualTargetEnergy" },
                m: { content: "gCO2e/kg" }
            }
        },
            
        // Row 30: T.3.4 Total Oil Use
        "30": {
            id: "T.3.4",
            rowId: "T.3.4",
            label: "Total Oil Use",
            cells: {
                b: {}, // Empty
                c: { label: "Total Oil Use" }, // Use label
                d: { fieldId: "d_30", type: "editable", value: "0.00", classes: ["user-input"], section: "actualTargetEnergy" },
                e: { content: "litres/yr" },
                f: { fieldId: "f_30", type: "calculated", value: "0.00", dependencies: ["d_30"], classes: ["calculated-value"], section: "actualTargetEnergy" },
                g: { fieldId: "g_30", type: "calculated", value: "0.00", dependencies: ["d_30", "l_30"], classes: ["calculated-value"], section: "actualTargetEnergy" },
                h: { fieldId: "h_30", type: "calculated", value: "0.00", dependencies: ["d_51", "d_113", "k_54", "f_115"], classes: ["calculated-value"], section: "actualTargetEnergy" },
                i: { content: "litres/yr" },
                j: { fieldId: "j_30", type: "calculated", value: "0.00", dependencies: ["h_30"], classes: ["calculated-value"], section: "actualTargetEnergy" },
                k: { fieldId: "k_30", type: "calculated", value: "0.00", dependencies: ["h_30", "l_30"], classes: ["calculated-value"], section: "actualTargetEnergy" },
                l: { fieldId: "l_30", type: "editable", value: "2,753.00", classes: ["user-input"], section: "actualTargetEnergy" },
                m: { content: "gCO2e/litre" }
            }
        },
            
        // Row 31: T.3.5 Total Wood Use
        "31": {
            id: "T.3.5",
            rowId: "T.3.5",
            label: "Total Wood Use",
            cells: {
                b: {}, // Empty
                c: { label: "Total Wood Use" }, // Use label
                d: { fieldId: "d_31", type: "editable", value: "0.00", classes: ["user-input"], section: "actualTargetEnergy" },
                e: { content: "m³/yr" },
                f: { fieldId: "f_31", type: "calculated", value: "0.00", dependencies: ["d_31"], classes: ["calculated-value"], section: "actualTargetEnergy" },
                g: { fieldId: "g_31", type: "calculated", value: "0.00", dependencies: ["h_31", "l_31"], classes: ["calculated-value"], section: "actualTargetEnergy" },
                h: { fieldId: "h_31", type: "calculated", value: "0.00", dependencies: ["d_31"], classes: ["calculated-value"], section: "actualTargetEnergy" },
                i: { content: "m³/yr" },
                j: { fieldId: "j_31", type: "calculated", value: "0.00", dependencies: ["h_31"], classes: ["calculated-value"], section: "actualTargetEnergy" },
                k: { fieldId: "k_31", type: "calculated", value: "0.00", dependencies: ["h_31", "l_31"], classes: ["calculated-value"], section: "actualTargetEnergy" },
                l: { fieldId: "l_31", type: "editable", value: "150.00", classes: ["user-input"], section: "actualTargetEnergy" },
                m: { content: "kgCO2e/m³" }
            }
        },
            
        // Row 32: E.1.1 Operational GHG & Energy Subtotals
        "32": {
            id: "E.1.1",
            rowId: "E.1.1",
            label: "Operational GHG & Energy Subtotals",
            cells: {
                b: {}, // Empty
                c: { label: "Operational GHG & Energy Subtotals" }, // Use label
                // Col D, E empty
                f: { fieldId: "f_32", type: "calculated", value: "132,938.00", dependencies: ["f_27", "f_28", "f_29", "f_30", "f_31"], classes: ["calculated-value"], section: "actualTargetEnergy" },
                g: { fieldId: "g_32", type: "calculated", value: "6,779.84", dependencies: ["g_27", "g_28", "g_29", "g_30", "g_31", "d_60"], classes: ["calculated-value"], section: "actualTargetEnergy" },
                // Col H, I empty
                j: { fieldId: "j_32", type: "calculated", value: "132,765.65", dependencies: ["j_27", "j_28", "j_29", "j_30", "j_31"], classes: ["calculated-value"], section: "actualTargetEnergy" },
                k: { fieldId: "k_32", type: "calculated", value: "6,771.05", dependencies: ["k_27", "k_28", "k_29", "k_30", "k_31", "d_60"], classes: ["calculated-value"], section: "actualTargetEnergy" }
                // Col L, M, N empty
            }
        },
            
        // Row 33: T.3.6 Total Net Energy
        "33": {
            id: "T.3.6",
            rowId: "T.3.6",
            label: "Total Net Energy",
            cells: {
                b: {}, // Empty
                c: { label: "Total Net Energy" }, // Use label
                d: { fieldId: "d_33", type: "calculated", value: "478.58", dependencies: ["f_27", "f_28", "f_29", "f_30", "f_31", "d_43", "i_43"], classes: ["calculated-value"], section: "actualTargetEnergy" },
                e: { content: "GJ/yr" },
                // Col F, G empty
                h: { fieldId: "h_33", type: "calculated", value: "477.96", dependencies: ["j_27", "j_28", "j_29", "j_30", "j_31", "i_43", "d_43"], classes: ["calculated-value"], section: "actualTargetEnergy" },
                i: { content: "GJ/yr" }
                // Col J, K, L, M, N empty
            }
        },
            
        // Row 34: T.3.7 Annual Percapita Energy
        "34": {
            id: "T.3.7",
            rowId: "T.3.7",
            label: "Annual Percapita Energy",
            cells: {
                b: {}, // Empty
                c: { label: "Annual Percapita Energy" }, // Use label
                d: { fieldId: "d_34", type: "calculated", value: "1,055.06", dependencies: ["f_32", "d_63"], classes: ["calculated-value"], section: "actualTargetEnergy" }, // Dependency updated
                e: { content: "kWh Actual" },
                f: { fieldId: "f_34", type: "calculated", value: "3.80", dependencies: ["d_33", "d_63"], classes: ["calculated-value"], section: "actualTargetEnergy" },
                g: { content: "GJ Actual" },
                h: { fieldId: "h_34", type: "calculated", value: "1,053.70", dependencies: ["j_32", "d_63"], classes: ["calculated-value"], section: "actualTargetEnergy" }, // Dependency updated
                i: { content: "kWh Target" },
                j: { fieldId: "j_34", type: "calculated", value: "3.79", dependencies: ["h_33", "d_63"], classes: ["calculated-value"], section: "actualTargetEnergy" },
                k: { content: "GJ Target" },
                l: { }, // Was l_34, now empty
                m: { }  // Was unit for l_34, now empty
            }
        },
            
        // Row 35: T.3.8 Primary Energy
        "35": {
            id: "T.3.8",
            rowId: "T.3.8",
            label: "Primary Energy",
            cells: {
                b: {}, // Empty
                c: { label: "Primary Energy" }, // Use label
                d: { fieldId: "d_35", type: "calculated", value: "132,938.00", dependencies: ["d_14", "j_27", "h_35", "f_27"], classes: ["calculated-value"], section: "actualTargetEnergy" },
                e: { content: "kWh/yr" },
                f: { fieldId: "f_35", type: "calculated", value: "93.15", dependencies: ["d_35", "h_15"], classes: ["calculated-value"], section: "actualTargetEnergy" },
                g: { content: "kWh/m²/yr" },
                h: { fieldId: "h_35", type: "editable", value: "1.0", classes: ["user-input"], section: "actualTargetEnergy" },
                i: { content: "PER Factor" }
                // Col J, K, L, M, N empty
            }
        }
    };
    
    //==========================================================================
    // PART 2: FIELD GENERATION (Standardized)
    //==========================================================================
    
    /**
     * Extract field definitions from the integrated layout (sectionRows)
     * This method is required for compatibility with the FieldManager
     */
    function getFields() {
        const fields = {};
        const sectionId = sectionRows.metadata.sectionId; // Use metadata
        
        // Extract field definitions from all rows except the header
        Object.entries(sectionRows).forEach(([rowKey, row]) => {
            // Skip metadata and header
            if (rowKey === "metadata" || rowKey === "header") return; 
            if (!row.cells) return;
            
            // Process each cell in the row
            Object.entries(row.cells).forEach(([colKey, cell]) => {
                if (cell.fieldId && cell.type) {
                    // Create field definition with all relevant properties
                    fields[cell.fieldId] = {
                        type: cell.type,
                        label: cell.label || row.label, // Use cell label first, fallback to row label
                        defaultValue: cell.value || "",
                        section: cell.section || sectionId // Use cell section first, fallback to metadata
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
    
    //==========================================================================
    // PART 3: DROPDOWN OPTION GENERATION (Standardized)
    //==========================================================================
    
    /**
     * Extract dropdown options from the integrated layout (sectionRows)
     * Required for backward compatibility
     */
    function getDropdownOptions() {
        const options = {};
        
        // Extract dropdown options from all cells with dropdownId
        Object.values(sectionRows).forEach(row => {
            // Skip metadata row
            if (typeof row !== 'object' || row === null || !row.cells) return; 
            
            Object.values(row.cells).forEach(cell => {
                if (cell.dropdownId && cell.options) {
                    options[cell.dropdownId] = cell.options;
                }
            });
        });
        
        return options;
    }
    
    //==========================================================================
    // PART 4: LAYOUT GENERATION (Standardized - Replaced custom version)
    //==========================================================================
    
    /**
     * Generate layout from integrated row definitions (sectionRows)
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
        
        // Then add all other rows in their original order, excluding the header and metadata
        Object.entries(sectionRows).forEach(([key, row]) => {
            if (key !== "header" && key !== "metadata") {
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
            id: row.id || row.rowId, // Use id, fallback to rowId
            cells: [
                {}, // Empty column A
                {}  // ID column B (auto-populated by FieldManager)
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
                    // Ensure cell.label exists if defined
                    else if (!cell.label && cell.content) {
                         cell.label = cell.content; // Assume content is label if type isn't specified
                         delete cell.content;
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
    // PART 5: EVENT HANDLING
    //==========================================================================
    
    /**
     * Initialize event handlers for this section
     */
    function initializeEventHandlers() {
        // Add line break styling for subheaders that contain newlines
        const sectionElement = document.getElementById(sectionRows.metadata.sectionId);
        if (sectionElement) {
            const subheaderCells = sectionElement.querySelectorAll('.section-subheader');
            subheaderCells.forEach(cell => {
                if (cell.textContent.includes('\n')) {
                    cell.style.whiteSpace = 'pre-line';
                    cell.style.lineHeight = '1.1';
                    cell.style.paddingTop = '2px';
                    cell.style.paddingBottom = '2px';
                }
            });
        }
        
        // Add event listeners for editable fields
        if (!sectionElement) {
            return;
        }
        
        // Find all editable fields within this section
        const editableFields = sectionElement.querySelectorAll('.user-input, [data-field-id^="d_"], [data-field-id^="h_"], [data-field-id^="l_"]');
        
        editableFields.forEach(field => {
            // Make editable fields actually editable
            if (field.classList.contains('user-input') || field.classList.contains('editable')) {
                field.setAttribute('contenteditable', 'true');
                
                // Also add a focus styling
                field.addEventListener('focus', function() {
                    this.classList.add('editing');
                    
                    // Store original value to detect changes
                    this.dataset.originalValue = this.textContent.trim();
                });
                
                field.addEventListener('blur', function() {
                    this.classList.remove('editing');
                });
            }
            
            // Handle changes to the field value
            field.addEventListener('blur', function(e) {
                const fieldId = this.getAttribute('data-field-id');
                if (!fieldId) return;
                
                // Get new value
                let newValue = this.textContent.trim();
                
                // Clean the value - remove commas before parsing
                newValue = newValue.replace(/,/g, '');
                
                // Only update if value has changed
                if (this.dataset.originalValue !== newValue) {
                    
                    // Update state manager if available
                    if (window.TEUI && window.TEUI.StateManager) {
                        window.TEUI.StateManager.setValue(fieldId, newValue, 'user-modified');
                    }
                    
                    // Removed call to updateDependentFields - rely on StateManager listeners
                    
                    // Removed calculateSection call - Rely solely on StateManager listeners to trigger calcs
                }
            });
            
            // Also handle Enter key (common way to "commit" edits)
            field.addEventListener('keydown', function(e) {
                if (e.key === 'Enter') {
                    e.preventDefault(); // Prevent adding a newline
                    this.blur(); // Remove focus to trigger the blur event
                }
            });
            
            // Add paste event handler to clean pasted values immediately
            field.addEventListener('paste', function(e) {
                // Let the paste happen normally
                setTimeout(() => {
                    // After paste, clean up the value but don't process calculations yet
                    // (that will happen on blur)
                    const pastedContent = this.textContent.trim();
                    
                    // Just for visual consistency, if needed
                    if (pastedContent.includes(',')) {
                        // Keep the formatted display but ensure consistent formatting
                        const cleanValue = window.TEUI?.parseNumeric?.(pastedContent, 0) ?? 0;
                        if (!isNaN(cleanValue)) {
                            this.textContent = window.TEUI.formatNumber(cleanValue, 'number-2dp-comma');
                        }
                    }
                }, 0);
            });
        });
        
        // Set up listeners for cross-section dependencies
        setupCrossSectionListeners();
    }
    
    /**
     * Set up listeners for values from other sections that affect calculations in this section
     */
    function setupCrossSectionListeners() {
        if (window.TEUI && window.TEUI.StateManager) {
            const sm = window.TEUI.StateManager; // Alias for brevity

            // Listener function for Electricity Emission Factor
            const updateFactorCallback = () => { 
                 updateElectricityEmissionFactor(); 
            };
            
            // Listen for province changes (dd_d_19)
            sm.addListener('dd_d_19', updateFactorCallback);
            sm.addListener('d_19', updateFactorCallback); // Also listen for d_19
            
            // Listen for reporting year changes (h_12)
            sm.addListener('h_12', updateFactorCallback);
            sm.addListener('d_12', updateFactorCallback);
            
            // Listener function for Net Electricity changes (Renewables)
            const netElectricityUpdateCallback = function(newValue, oldValue, sourceFieldId) { // Added params
                // console.log(`[S4 DEBUG] netElectricityUpdateCallback triggered by ${sourceFieldId}. New value: ${newValue}, Old value: ${oldValue}`); 
                
                // Specific log when d_27 changes
                if (sourceFieldId === 'd_27') {
                    // console.log(`[S4 DEBUG] d_27 changed. Reading current values...`);
                }
                
                // Fetch CURRENT values from StateManager using helper
                const d27 = getNumericValue('d_27');
                const h27 = getNumericValue('h_27'); 
                const l27 = getNumericValue('l_27'); 
                const d43 = getNumericValue('d_43'); // Should reflect the trigger if sourceFieldId was d_43
                const i43 = getNumericValue('i_43'); // Should reflect the trigger if sourceFieldId was i_43

                // console.log(`[S4 DEBUG] Current values read: d27=${d27}, h27=${h27}, l27=${l27}, d43=${d43}, i43=${i43}`);
 
                // Perform calculations using calculation helpers
                const f27New = calculateF27(); // No args needed
                const j27New = calculateJ27(); // No args needed
                const g27New = calculateG27(); // No args needed
                const k27New = calculateK27(); // No args needed
                 // console.log(`[S4 DEBUG] Calculated values: f27New=${f27New}, j27New=${j27New}, g27New=${g27New}, k27New=${k27New}`);
  
                 // Update net usage fields using standard helper
                setCalculatedValue('f_27', f27New, 'number-2dp-comma'); 
                setCalculatedValue('j_27', j27New, 'number-2dp-comma'); 
                // Update emission fields using standard helper
                setCalculatedValue('g_27', g27New, 'number-2dp-comma'); 
                setCalculatedValue('k_27', k27New, 'number-2dp-comma'); 

               // console.log("[S4 DEBUG] Called setCalculatedValue for f_27, j_27, g_27, k_27.");
 
                 updateSubtotals(); // Update totals after row 27 changes
            };

            sm.addListener('d_27', netElectricityUpdateCallback); // *** ADDED: Listen for Actual Electricity Use ***
            sm.addListener('d_43', netElectricityUpdateCallback); // Onsite Renewables
            // window.TEUI.StateManager.addListener('i_44', netElectricityUpdateCallback); // Listener no longer needed
            sm.addListener('i_43', netElectricityUpdateCallback); // Offsite REC Subtotal

            // --- Listener for d_136 (Target Energy from S15) ---
            const handleD136Update = () => {
                 // console.log("[S4 DEBUG] Entering handleD136Update (d_136 changed)");
                const d136Value = getNumericValue('d_136');
                
                // Update h_27 (Target Electricity Use in S04)
                setCalculatedValue('h_27', d136Value, 'number-2dp-comma'); // Added formatType
                 // console.log(`[S4 DEBUG] Updated h_27 with d_136 value: ${d136Value}`);
                
                // Now trigger j_27 recalculation using the NEW h_27 value
                const h27Value = d136Value; // Use the value we just set
                const d43Value = getNumericValue('d_43');
                const i43Value = getNumericValue('i_43');
                const l27Value = getNumericValue('l_27'); // Needed for k_27 calculation
                
                const j27Value = calculateJ27(); // No args needed
                setCalculatedValue('j_27', j27Value, 'number-2dp-comma'); 

               // console.log(`[S4 DEBUG] Recalculated j_27: ${j27Value} (using internal h_27, d_43, i_43)`); // Updated log

                // Also trigger k_27 recalculation (Target Emissions)
                const k27Value = calculateK27(); // No args needed
                setCalculatedValue('k_27', k27Value, 'number-2dp-comma'); 

               // console.log(`[S4 DEBUG] Recalculated k_27: ${k27Value} (using internal j_27, l_27)`); // Updated log

                // Trigger subtotal update
                updateSubtotals();
            };

            sm.addListener('d_136', handleD136Update); // Listen for d_136 now
            // --- End Listener for d_136 ---
            
            // --- Listeners for Target Fuel Updates (Gas/Oil from S07/S13) ---
            const targetFuelUpdateCallback = () => {
                // console.log("[S4 DEBUG] targetFuelUpdateCallback triggered.");

                // Recalculate H28/J28/K28 (Gas)
                const h28Value = calculateH28();
                setCalculatedValue('h_28', h28Value, 'number-2dp-comma');
                const j28Value = calculateJ28();
                setCalculatedValue('j_28', j28Value, 'number-2dp-comma');
                const k28Value = calculateK28();
                setCalculatedValue('k_28', k28Value, 'number-2dp-comma');
                // console.log(`[S4 DEBUG] Updated Gas Target: h28=${h28Value}, j28=${j28Value}, k28=${k28Value}`);

                // Recalculate H30/J30/K30 (Oil)
                const h30Value = calculateH30();
                setCalculatedValue('h_30', h30Value, 'number-2dp-comma');
                const j30Value = calculateJ30();
                setCalculatedValue('j_30', j30Value, 'number-2dp-comma');
                const k30Value = calculateK30();
                setCalculatedValue('k_30', k30Value, 'number-2dp-comma');
                // console.log(`[S4 DEBUG] Updated Oil Target: h30=${h30Value}, j30=${j30Value}, k30=${k30Value}`);

                // Update subtotals that depend on these rows
                updateSubtotals();
            };

            // Dependencies for H28/J28/K28 (Gas)
            sm.addListener('d_113', targetFuelUpdateCallback); // S13 Primary Heating System
            sm.addListener('h_115', targetFuelUpdateCallback); // S13 Target Gas Use (Calc)
            sm.addListener('d_51', targetFuelUpdateCallback);  // S07 DHW Source
            sm.addListener('e_51', targetFuelUpdateCallback);  // S07 DHW User kWh (if Gas)

            // Dependencies for H30/J30/K30 (Oil) - Assuming k_54 is target DHW Oil use
            sm.addListener('d_113', targetFuelUpdateCallback); // S13 Primary Heating System (already added, listener handles multiple calls)
            sm.addListener('f_115', targetFuelUpdateCallback); // S13 Target Oil Use (Calc)
            sm.addListener('d_51', targetFuelUpdateCallback);  // S07 DHW Source (already added)
            sm.addListener('k_54', targetFuelUpdateCallback);  // CORRECTED: Listen to k_54 where Oil calculation is now located
            // --- End Target Fuel Listeners ---

            // --- Listeners for Actual Fuel Inputs (d_28 to d_31) ---
            const actualFuelUpdateCallback = (newValue, oldValue, sourceFieldId) => {
                // console.log(`[S04 DEBUG] actualFuelUpdateCallback triggered by ${sourceFieldId}`);

                let calculateSubtotalsAfter = true;
                // Determine which calculation pair to run based on the source
                switch (sourceFieldId) {
                    case 'd_28': // Gas
                        const f28Value = calculateF28();
                        setCalculatedValue('f_28', f28Value, 'number-2dp-comma');
                        const g28Value = calculateG28();
                        setCalculatedValue('g_28', g28Value, 'number-2dp-comma');
                        break;
                    case 'd_29': // Propane
                        const f29Value = calculateF29();
                        setCalculatedValue('f_29', f29Value, 'number-2dp-comma');
                        const g29Value = calculateG29();
                        setCalculatedValue('g_29', g29Value, 'number-2dp-comma');
                        break;
                    case 'd_30': // Oil
                        const f30Value = calculateF30();
                        setCalculatedValue('f_30', f30Value, 'number-2dp-comma');
                        const g30Value = calculateG30();
                        setCalculatedValue('g_30', g30Value, 'number-2dp-comma');
                        break;
                    case 'd_31': // Wood
                        const f31Value = calculateF31();
                        setCalculatedValue('f_31', f31Value, 'number-2dp-comma');
                        const h31Value = calculateH31(); 
                        setCalculatedValue('h_31', h31Value, 'number-2dp-comma');
                        const g31Value = calculateG31(); 
                        setCalculatedValue('g_31', g31Value, 'number-2dp-comma');
                        const k31Value = calculateK31(); // Calculate k_31 as it's needed by d_60
                        setCalculatedValue('k_31', k31Value, 'number-2dp-comma');
                        // When d_31 (wood use) changes, k_31 also changes.
                        // S08 listens to k_31 to update d_60.
                        // S04 listens to d_60 to update subtotals.
                        // So, we don't call updateSubtotals() directly here for d_31 changes.
                        calculateSubtotalsAfter = false;
                        break;
                }

                // Update subtotals after any actual fuel input change, unless it was d_31
                if (calculateSubtotalsAfter) {
                updateSubtotals();
                }
            };

            sm.addListener('d_28', actualFuelUpdateCallback);
            sm.addListener('d_29', actualFuelUpdateCallback);
            sm.addListener('d_30', actualFuelUpdateCallback);
            sm.addListener('d_31', actualFuelUpdateCallback);
            // --- End Actual Fuel Listeners ---

            // Listener for d_60 (Calculated Wood Offset from S08)
            sm.addListener('d_60', () => {
                // console.log('[S04 DEBUG] d_60 changed, calling updateSubtotals()');
                updateSubtotals(); // This will recalculate g_32 and k_32 which depend on d_60
            });

            // CRITICAL: Listener for d_13 (Reference Standard) changes - triggers dual-engine calculations
            sm.addListener('d_13', () => {
                // When reference standard changes, trigger both engines
                calculateReferenceModel();  // Calculate Reference values using new standard
                calculateTargetModel();     // Recalculate Target values (may have dependencies)
            });
            
            // CRITICAL: Listener for h_12 changes in Reference Mode
            // This ensures Reference grid intensity updates when Reference reporting year changes
            sm.addListener('h_12', () => {
                // h_12 changed, updating grid intensity and Reference Model
                // Update both Application and Reference grid intensities
                updateElectricityEmissionFactor();
                // Trigger Reference Model recalculation to use new Reference grid intensity
                calculateReferenceModel();
            });
            
            // CRITICAL: Listeners for Section 07 Reference values
            // These trigger Reference Model recalculation when S07 Reference values change
            sm.addListener('ref_e_51', () => {
                // ref_e_51 changed, triggering Reference Model recalculation
                calculateReferenceModel();
            });
            
            sm.addListener('ref_k_54', () => {
                // ref_k_54 changed, triggering Reference Model recalculation
                calculateReferenceModel();
            });
            
            // CRITICAL: Listener for Section 15 Reference values
            sm.addListener('ref_d_136', () => {
                // ref_d_136 changed, triggering Reference Model recalculation
                calculateReferenceModel();
            });

            // Direct DOM event listener as fallback (Consider removing if listeners are reliable)
            document.addEventListener('input', function(e) {
                const target = e.target;
                if (target && (target.getAttribute('data-field-id') === 'h_12' || 
                               target.getAttribute('data-field-id') === 'd_12' ||
                               target.getAttribute('data-field-id') === 'd_19' ||
                               target.getAttribute('data-field-id') === 'dd_d_19')) {
                    updateElectricityEmissionFactor();
                }
            });
        }
    }
    
    /**
     * Update the electricity emission factor (l_27) based on province and reporting year
     * DUAL-ENGINE: Now supports separate Reference and Target grid intensity calculations
     */
    function updateElectricityEmissionFactor() {
        // Calculate Target/Application grid intensity
        updateGridIntensityForMode('application');
        
        // Calculate Reference grid intensity (may use different reporting year)
        updateGridIntensityForMode('reference');
    }
    
    /**
     * Update grid intensity for a specific calculation mode
     * @param {string} mode - 'application' or 'reference'
     */
    function updateGridIntensityForMode(mode) {
        let provinceAbbreviation = 'ON'; // Default
        let reportingYear = 2022;    // Default

        if (window.TEUI?.StateManager) {
            // Province is always from application state (same for both modes)
            const provinceStateValue = window.TEUI.StateManager.getApplicationValue('d_19'); // From S03
            if (provinceStateValue) {
                provinceAbbreviation = getProvinceCode(provinceStateValue);
            }
            
            // Reporting year depends on mode - CRITICAL: Use explicit state getters
            let yearStateValue;
            if (mode === 'reference') {
                // In Reference Mode, use Reference state for h_12 (may be different from application)
                yearStateValue = window.TEUI.StateManager.getReferenceValue('h_12');
                // console.log(`[S04] Reference Mode: Using Reference h_12 value: ${yearStateValue}`);
            } else {
                // In Application Mode, use Application state for h_12
                yearStateValue = window.TEUI.StateManager.getApplicationValue('h_12');
                // console.log(`[S04] Application Mode: Using Application h_12 value: ${yearStateValue}`);
            }
            
            if (yearStateValue) {
                const parsedYear = parseInt(yearStateValue);
                if (!isNaN(parsedYear) && parsedYear >= 2015 && parsedYear <= 2041) {
                    reportingYear = parsedYear;
                }
            }
        } else {
            console.warn("[S04] StateManager not available for updateElectricityEmissionFactor.");
            // Fallback to DOM (application state only)
            const provinceDropdown = document.querySelector('select[data-dropdown-id="dd_d_19"], select[data-field-id="d_19"]');
            if (provinceDropdown && provinceDropdown.value) {
                provinceAbbreviation = getProvinceCode(provinceDropdown.value);
            }
            const yearInput = document.querySelector('[data-field-id="h_12"]');
            if (yearInput && yearInput.value) {
                 const parsedYear = parseInt(yearInput.value);
                 if (!isNaN(parsedYear) && parsedYear >= 2015 && parsedYear <= 2041) {
                    reportingYear = parsedYear;
                }
            }
        }
        
        // Get emission factor based on province and year
        const factor = getElectricityFactor(provinceAbbreviation, reportingYear);
        
        if (mode === 'reference') {
            // Store Reference grid intensity with ref_ prefix
            if (window.TEUI?.StateManager) {
                window.TEUI.StateManager.setValue('ref_l_27', factor.toString(), 'calculated');
            }
            
            // UPDATE UI IN REFERENCE MODE: If user is currently in Reference Mode, update the visible l_27 field
            if (window.TEUI?.ReferenceToggle?.isReferenceMode?.()) {
                // Update l_27 display with Reference value
                const l27Element = document.querySelector('[data-field-id="l_27"]');
                if (l27Element) {
                    l27Element.textContent = window.TEUI.formatNumber(factor, 'integer');
                }
                
                // Recalculate and update dependent Reference values in UI
                const ref_j27 = getRefNumericValue('j_27', 0);
                const ref_g27 = (ref_j27 * factor) / 1000;
                const g27Element = document.querySelector('[data-field-id="g_27"]');
                if (g27Element) {
                    g27Element.textContent = window.TEUI.formatNumber(ref_g27, 'number-2dp-comma');
                }
                
                const ref_k27 = ref_g27; // Same calculation for k_27 in Reference Mode
                const k27Element = document.querySelector('[data-field-id="k_27"]');
                if (k27Element) {
                    k27Element.textContent = window.TEUI.formatNumber(ref_k27, 'number-2dp-comma');
                }
                
                // Reference Mode UI updated successfully
                // console.log(`[S04] Reference Mode UI updated: l_27=${factor}, g_27=${ref_g27.toFixed(2)}, k_27=${ref_k27.toFixed(2)}`);
            }
            
            // console.log(`[S04] Reference grid intensity updated: ${factor} gCO2e/kWh (Province: ${provinceAbbreviation}, Year: ${reportingYear})`);
        } else {
            // Update the application l_27 field
            setCalculatedValue('l_27', factor, 'integer');
            
            // Recalculate dependent values for application state
        const f27Value = getNumericValue('f_27');
        const g27Value = calculateG27(f27Value, factor); 
        setCalculatedValue('g_27', g27Value, 'number-2dp-comma');

        const j27Value = getNumericValue('j_27');
        const k27Value = calculateK27(j27Value, factor); 
        setCalculatedValue('k_27', k27Value, 'number-2dp-comma');
        
        updateSubtotals(); 
            // console.log(`[S04] Application grid intensity updated: ${factor} gCO2e/kWh (Province: ${provinceAbbreviation}, Year: ${reportingYear})`);
        }
    }

    // Helper function to convert province name to province code
    // This function is defined within the IIFE and directly callable by others within the same scope (like updateElectricityEmissionFactor)
    function getProvinceCode(provinceText) {
        if (!provinceText) return 'ON';
        
        // Direct match for 2-letter codes
        if (provinceText.length === 2) {
            const code = provinceText.toUpperCase();
            if (['ON', 'QC', 'BC', 'AB', 'SK', 'MB', 'NS', 'NB', 'NL', 'PE', 'NT', 'YT', 'NU'].includes(code)) {
                return code;
            }
        }
        
        const originalText = provinceText;
        provinceText = provinceText.trim().toLowerCase();
        
        if (provinceText === "ontario" || provinceText === "on") return 'ON';
        if (provinceText === "quebec" || provinceText === "québec" || provinceText === "qc") return 'QC';
        if (provinceText === "british columbia" || provinceText === "bc") return 'BC';
        if (provinceText === "alberta" || provinceText === "ab") return 'AB';
        if (provinceText === "saskatchewan" || provinceText === "sk") return 'SK';
        if (provinceText === "manitoba" || provinceText === "mb") return 'MB';
        if (provinceText === "nova scotia" || provinceText === "ns") return 'NS';
        if (provinceText === "new brunswick" || provinceText === "nb") return 'NB';
        if (provinceText === "newfoundland and labrador" || provinceText === "nl") return 'NL';
        if (provinceText === "prince edward island" || provinceText === "pe") return 'PE';
        if (provinceText === "northwest territories" || provinceText === "nt") return 'NT';
        if (provinceText === "yukon" || provinceText === "yt") return 'YT';
        if (provinceText === "nunavut" || provinceText === "nu") return 'NU';
        
        const provinceMatches = {
            'ON': provinceText.includes("ontario"), 'QC': provinceText.includes("quebec") || provinceText.includes("québec"),
            'BC': provinceText.includes("british columbia"), 'AB': provinceText.includes("alberta"),
            'SK': provinceText.includes("saskatchewan"), 'MB': provinceText.includes("manitoba"),
            'NS': provinceText.includes("nova scotia"), 'NB': provinceText.includes("new brunswick"),
            'NL': provinceText.includes("newfoundland"), 'PE': provinceText.includes("prince edward"),
            'NT': provinceText.includes("northwest"), 'YT': provinceText.includes("yukon"),
            'NU': provinceText.includes("nunavut")
        };
        const matches = Object.entries(provinceMatches).filter(([_, matches]) => matches);
        if (matches.length > 0) return matches[0][0];
        return 'ON'; // Default
    }

    // Helper function to get electricity emission factor (can be moved to a central data module later)
    const GRID_INTENSITY_FACTORS = {
        'ON': { default: 51, 2015: 46, 2016: 40, 2017: 18, 2018: 29, 2019: 29, 2020: 36, 2021: 44, 2022: 51, 2023: 67, 2024: 71, 2025: 138, 2026: 145, 2027: 132, 2028: 133, 2029: 126, 2030: 126, 2031: 122, 2032: 122, 2033: 104, 2034: 58, 2035: 40, 2036: 34, 2037: 33, 2038: 32, 2039: 13, 2040: 8, 2041: 3, future: 3 },
        'QC': { default: 1 }, 'BC': { default: 12 }, 'AB': { default: 650 }, 'SK': { default: 720 }, 
        'MB': { default: 3 }, 'NS': { default: 600 }, 'NB': { default: 340 }, 'NL': { default: 30 },
        'PE': { default: 12 }, 'NT': { default: 180 }, 'YT': { default: 2 }, 'NU': { default: 200 }
    };

    // Get electricity emission factor based on CSV formula data
    function getElectricityFactor(province, year) {
        const provinceFactors = GRID_INTENSITY_FACTORS[province] || GRID_INTENSITY_FACTORS['ON'];
        if (year > 2041 && provinceFactors.future !== undefined) {
            return provinceFactors.future;
        }
        return provinceFactors[year] || provinceFactors.default;
    }
    
    // Recalculate G27 and K27 with the factor as an argument
    function calculateG27(f27Value, l27Factor) {
        return (f27Value * l27Factor) / 1000;
    }

    function calculateK27(j27Value, l27Factor) {
        return (j27Value * l27Factor) / 1000;
    }
    
    /**
     * Helper function to update the subtotal rows (row 32)
     */
    function updateSubtotals() {
        // Get all the values needed for subtotals using the standard helper
        const f27Value = getNumericValue('f_27');
        const f28Value = getNumericValue('f_28');
        const f29Value = getNumericValue('f_29');
        const f30Value = getNumericValue('f_30');
        const f31Value = getNumericValue('f_31');
        
        const g27Value = getNumericValue('g_27');
        const g28Value = getNumericValue('g_28');
        const g29Value = getNumericValue('g_29');
        const g30Value = getNumericValue('g_30');
        const g31Value = getNumericValue('g_31');
        
        const j27Value = getNumericValue('j_27');
        const j28Value = getNumericValue('j_28');
        const j29Value = getNumericValue('j_29');
        const j30Value = getNumericValue('j_30');
        const j31Value = getNumericValue('j_31');
        
        const k27Value = getNumericValue('k_27');
        const k28Value = getNumericValue('k_28');
        const k29Value = getNumericValue('k_29');
        const k30Value = getNumericValue('k_30');
        const k31Value = getNumericValue('k_31');
        
        const d60Value = getNumericValue('d_60'); // Offsets (tCO2e), will be multiplied by 1000 later
        
        // Update f_32 (Operational GHG & Energy Subtotals)
        const f32Value = calculateF32(f27Value, f28Value, f29Value, f30Value, f31Value);
        setCalculatedValue('f_32', f32Value, 'number-2dp-comma');
                
                // Check for zero energy case and force immediate TEUI update
        if (f32Value === 0 && window.TEUI?.StateManager) { // Check StateManager exists
                    // console.log("Zero energy detected - forcing TEUI update");
                    if (typeof window.calculateTEUI === 'function') {
                        window.calculateTEUI();
                    } else if (window.TEUI.StateManager.updateTEUICalculations) {
                        window.TEUI.StateManager.updateTEUICalculations('zero-energy-case');
            } else if (window.TEUI.SectionModules?.sect01?.runAllCalculations) {
                // Fallback: directly call S01 calculation if specific hook is missing
                window.TEUI.SectionModules.sect01.runAllCalculations();
                }
        } else {
            // Force TEUI recalculation after energy update (if not zero)
            // REMOVED: setTimeout(() => { ... }, 100);
            // Section 01 should listen to f_32 or j_32 for updates.
                    if (typeof window.calculateTEUI === 'function') {
                window.calculateTEUI(); // Call directly or let listener handle it
                } else if (window.TEUI?.SectionModules?.sect01?.runAllCalculations) {
                     window.TEUI.SectionModules.sect01.runAllCalculations();
                    }
        }
        
        // Update g_32 (Emissions subtotal)
        const g32Value = calculateG32(g27Value, g28Value, g29Value, g30Value, g31Value, d60Value);
        setCalculatedValue('g_32', g32Value, 'number-2dp-comma');
        
        // Update j_32 (Target subtotal)
        const j32Value = calculateJ32(j27Value, j28Value, j29Value, j30Value, j31Value);
        setCalculatedValue('j_32', j32Value, 'number-2dp-comma');
        
        // Update k_32 (Target emissions subtotal)
        const k32Value = calculateK32(k27Value, k28Value, k29Value, k30Value, k31Value, d60Value);
        setCalculatedValue('k_32', k32Value, 'number-2dp-comma');
        
        // Also update other dependent fields if needed
        updateDependentTotals(); // This function should also use getNumericValue
    }
    
    /**
     * Update any other fields that depend on the subtotals
     */
    function updateDependentTotals() {
        // Update d_33, h_33, etc. using standard helpers
        const f27Value = getNumericValue('f_27');
        const f28Value = getNumericValue('f_28');
        const f29Value = getNumericValue('f_29');
        const f30Value = getNumericValue('f_30');
        const f31Value = getNumericValue('f_31');
        const d43Value = getNumericValue('d_43');
        const i43Value = getNumericValue('i_43');
        const j27Value = getNumericValue('j_27');
        const j28Value = getNumericValue('j_28');
        const j29Value = getNumericValue('j_29');
        const j30Value = getNumericValue('j_30');
        const j31Value = getNumericValue('j_31');
        const k32Value = getNumericValue('k_32'); // For L34
        const d63Value = getNumericValue('d_63'); // For L34
        const h15Value = getNumericValue('h_15'); // For F35
        const d14Value = window.TEUI.StateManager?.getValue('d_14'); // For D35
        const h35Value = getNumericValue('h_35'); // For D35

        const d33Value = calculateD33(f27Value, f28Value, f29Value, f30Value, f31Value, d43Value, i43Value);
        setCalculatedValue('d_33', d33Value, 'number-2dp-comma');

        const h33Value = calculateH33(j27Value, j28Value, j29Value, j30Value, j31Value, i43Value, d43Value);
        setCalculatedValue('h_33', h33Value, 'number-2dp-comma');
        
        const d34Value = calculateD34(f27Value, f28Value, d63Value);
        setCalculatedValue('d_34', d34Value, 'number-2dp-comma');

        const f34Value = calculateF34(d33Value, d63Value);
        setCalculatedValue('f_34', f34Value, 'number-2dp-comma');

        const h34Value = calculateH34(j27Value, j28Value, d63Value);
        setCalculatedValue('h_34', h34Value, 'number-2dp-comma');

        const j34Value = calculateJ34(h33Value, d63Value);
        setCalculatedValue('j_34', j34Value, 'number-2dp-comma');

        const d35Value = calculateD35(d14Value, j27Value, h35Value, f27Value);
        setCalculatedValue('d_35', d35Value, 'number-2dp-comma');

        const f35Value = calculateF35(d35Value, h15Value);
        setCalculatedValue('f_35', f35Value, 'number-2dp-comma');
    }
    
    /**
     * Define section-specific calculation functions here
     * These will be called by the Calculator module based on field dependencies
     */
    
    // Row 27: Electricity calculations
    function calculateF27() {
        // =D27-D43-I43 (Total Electricity Use - Onsite Energy - Offsite REC Subtotal)
        const d27 = getAppNumericValue('d_27'); // FIXED: Use Application values for Target calculations
        const d43 = getAppNumericValue('d_43'); 
        const i43 = getAppNumericValue('i_43'); 
        return d27 - d43 - i43;
    }
    
    function calculateG27() {
        // =F27*L27/1000 (Actual Net * Emission factor / 1000)
        const f27 = getAppNumericValue('f_27'); // FIXED: Use Application values for Target calculations
        const l27 = getAppNumericValue('l_27'); 
        // Dividing by 1000 converts from gCO2e to kgCO2e
        return (f27 * l27) / 1000;
    }
    
    function calculateH27(d136) {
        // =D$136 (Target value comes from another section)
        // Use parseNumeric here too
        return window.TEUI?.parseNumeric?.(d136, 0) ?? 0;
    }
    
    function calculateJ27() {
        // =H27-D43-I43 (Target Energy - Onsite Energy - Offsite REC Subtotal)
        const h27 = getAppNumericValue('h_27'); // FIXED: Use Application values for Target calculations
        const d43 = getAppNumericValue('d_43'); 
        const i43 = getAppNumericValue('i_43'); 
        return h27 - d43 - i43;
    }
    
    function calculateK27() {
        // =J27*L27/1000 (Target Net * Emission factor / 1000)
        const j27 = getAppNumericValue('j_27'); // FIXED: Use Application values for Target calculations
        const l27 = getAppNumericValue('l_27'); 
        // Dividing by 1000 converts from gCO2e to kgCO2e
        return (j27 * l27) / 1000;
    }
    
    // Row 28: Gas calculations
    function calculateF28() {
        const d28 = getAppNumericValue('d_28'); // FIXED: Use Application values for Target calculations
        // =D28*0.0373*277.7778 (Gas volume to energy conversion)
        return d28 * 0.0373 * 277.7778;
    }
    
    function calculateG28() {
        const d28 = getAppNumericValue('d_28'); // FIXED: Use Application values for Target calculations
        const l28 = getAppNumericValue('l_28'); 
        // =(D28)*L28/1000 (Gas volume * Emission factor / 1000)
        return (d28 * l28) / 1000;
    }
    
    function calculateH28() {
        const d51 = window.TEUI.StateManager?.getValue('d_51'); // Get raw string value
        const e51 = getAppNumericValue('e_51'); // FIXED: Use Application values for Target calculations
        const d113 = window.TEUI.StateManager?.getValue('d_113'); // Get raw string value
        const h115 = getAppNumericValue('h_115'); // FIXED: Use Application values for Target calculations
        // =IF(AND($D$113="Gas", $D$51="Gas"), E51+H115, IF($D$51="Gas", E51, IF($D$113="Gas", H115, 0)))
        if (d113 === "Gas" && d51 === "Gas") {
            return e51 + h115;
        } else if (d51 === "Gas") {
            return e51;
        } else if (d113 === "Gas") {
            return h115;
        } else {
            return 0;
        }
    }
    
    function calculateJ28() {
        const h28 = getAppNumericValue('h_28'); // FIXED: Use Application values for Target calculations
        // =H28*0.0373*277.7778 (Gas volume to energy conversion)
        return h28 * 0.0373 * 277.7778;
    }
    
    function calculateK28() {
        const h28 = getAppNumericValue('h_28'); // FIXED: Use Application values for Target calculations
        const l28 = getAppNumericValue('l_28'); 
        // =H28*L28/1000 (Gas volume * Emission factor / 1000)
        return (h28 * l28) / 1000;
    }
    
    // Row 29: Propane calculations
    function calculateF29() {
        const d29 = getAppNumericValue('d_29'); // FIXED: Use Application values for Target calculations
        // =D29*14.019 (Propane to energy conversion)
        return d29 * 14.019;
    }
    
    function calculateG29() {
        const d29 = getAppNumericValue('d_29'); // FIXED: Use Application values for Target calculations
        const l29 = getAppNumericValue('l_29'); 
        // =D29*L29/1000 (Propane * Emission factor / 1000)
        return (d29 * l29) / 1000;
    }
    
    function calculateH29() {
        const d29 = getAppNumericValue('d_29'); // FIXED: Use Application values for Target calculations
        // =D29 (Target is same as actual for this case)
        return d29;
    }
    
    function calculateJ29() {
        const h29 = getAppNumericValue('h_29'); // FIXED: Use Application values for Target calculations
        // =H29*14.019 (Propane to energy conversion)
        return h29 * 14.019;
    }
    
    function calculateK29() {
        const h29 = getAppNumericValue('h_29'); // FIXED: Use Application values for Target calculations
        const l29 = getAppNumericValue('l_29'); 
        // =H29*L29/1000 (Propane * Emission factor / 1000)
        return (h29 * l29) / 1000;
    }
    
    // Row 30: Oil calculations
    function calculateF30() {
        const d30 = getAppNumericValue('d_30'); // FIXED: Use Application values for Target calculations
        // =D30*36.72*0.2777778 (Oil to energy conversion)
        return d30 * 36.72 * 0.2777778;
    }
    
    function calculateG30() {
        const d30 = getAppNumericValue('d_30'); // FIXED: Use Application values for Target calculations
        const l30 = getAppNumericValue('l_30'); 
        // =D30*L30/1000 (Oil * Emission factor / 1000)
        return (d30 * l30) / 1000;
    }
    
    function calculateH30() {
        const d51 = window.TEUI.StateManager?.getValue('d_51'); // Get raw string value
        const d113 = window.TEUI.StateManager?.getValue('d_113'); // Get raw string value
        const k54 = getAppNumericValue('k_54'); // FIXED: Use Application values for Target calculations
        const f115 = getAppNumericValue('f_115'); // FIXED: Use Application values for Target calculations
        // =IF(AND($D$113="Oil", $D$51="Oil"), $K$54+$F$115, IF($D$51="Oil", K54, IF($D$113="Oil", F115, 0)))
        if (d113 === "Oil" && d51 === "Oil") {
            // Sum target Oil Litres from S13 heating (f_115) and S07 DHW (k_54)
            return k54 + f115; 
        } else if (d51 === "Oil") {
            // Only DHW uses Oil
            return k54; 
        } else if (d113 === "Oil") {
            // Only Heating uses Oil
            return f115;
        } else {
            return 0;
        }
    }
    
    function calculateJ30() {
        const h30 = getAppNumericValue('h_30'); // FIXED: Use Application values for Target calculations
        // =H30*36.72*0.2777778 (Oil to energy conversion)
        return h30 * 36.72 * 0.2777778;
    }
    
    function calculateK30() {
        const h30 = getAppNumericValue('h_30'); // FIXED: Use Application values for Target calculations
        const l30 = getAppNumericValue('l_30'); 
        // =H30*L30/1000 (Oil * Emission factor / 1000)
        return (h30 * l30) / 1000;
    }
    
    // Row 31: Wood calculations
    function calculateF31() {
        const d31 = getAppNumericValue('d_31'); // FIXED: Use Application values for Target calculations
        // =D31*1000 (Wood to energy conversion)
        return d31 * 1000;
    }
    
    function calculateG31() {
        const h31 = getAppNumericValue('h_31'); // FIXED: Use Application values for Target calculations
        const l31 = getAppNumericValue('l_31'); 
        // =H31*L31 (Wood * Emission factor)
        return h31 * l31;
    }
    
    function calculateH31() {
        const d31 = getAppNumericValue('d_31'); // FIXED: Use Application values for Target calculations
        // =D31 (Target is same as actual for this case)
        return d31;
    }
    
    function calculateJ31() {
        const h31 = getAppNumericValue('h_31'); // FIXED: Use Application values for Target calculations
        // =H31*1000 (Wood to energy conversion)
        return h31 * 1000;
    }
    
    function calculateK31() {
        const h31 = getAppNumericValue('h_31'); // FIXED: Use Application values for Target calculations
        const l31 = getAppNumericValue('l_31'); 
        // =H31*L31 (Wood * Emission factor)
        return h31 * l31;
    }
    
    // Row 32: Subtotals
    function calculateF32() {
        const f27 = getAppNumericValue('f_27'); // FIXED: Use Application values for Target calculations
        const f28 = getAppNumericValue('f_28'); 
        const f29 = getAppNumericValue('f_29'); 
        const f30 = getAppNumericValue('f_30'); 
        const f31 = getAppNumericValue('f_31'); 
        // =SUM(F27:F31) (Sum of all energy sources)
        return f27 + f28 + f29 + f30 + f31;
    }
    
    function calculateG32() {
        const g27 = getAppNumericValue('g_27'); // FIXED: Use Application values for Target calculations
        const g28 = getAppNumericValue('g_28'); 
        const g29 = getAppNumericValue('g_29'); 
        const g30 = getAppNumericValue('g_30'); 
        const g31 = getAppNumericValue('g_31'); 
        const d60 = getAppNumericValue('d_60'); // (Offsets in tCO2e)
        // =SUM(G27:G31)-(D60*1000) (Sum of emissions minus offsets)
        return g27 + g28 + g29 + g30 + g31 - (d60 * 1000);
    }
    
    function calculateJ32() {
        const j27 = getAppNumericValue('j_27'); // FIXED: Use Application values for Target calculations
        const j28 = getAppNumericValue('j_28'); 
        const j29 = getAppNumericValue('j_29'); 
        const j30 = getAppNumericValue('j_30'); 
        const j31 = getAppNumericValue('j_31'); 
        // =SUM(J27:J31) (Sum of all energy sources)
        return j27 + j28 + j29 + j30 + j31;
    }
    
    function calculateK32() {
        const k27 = getAppNumericValue('k_27'); // FIXED: Use Application values for Target calculations
        const k28 = getAppNumericValue('k_28'); 
        const k29 = getAppNumericValue('k_29'); 
        const k30 = getAppNumericValue('k_30'); 
        const k31 = getAppNumericValue('k_31'); 
        const d60 = getAppNumericValue('d_60'); // (Offsets in tCO2e)
        // =SUM(K27:K31)-(D60*1000) (Sum of emissions minus offsets)
        return k27 + k28 + k29 + k30 + k31 - (d60 * 1000);
    }
    
    // Row 33: Total Net Energy
    function calculateD33() {
        const f27 = getAppNumericValue('f_27'); // FIXED: Use Application values for Target calculations
        const f28 = getAppNumericValue('f_28'); 
        const f29 = getAppNumericValue('f_29'); 
        const f30 = getAppNumericValue('f_30'); 
        const f31 = getAppNumericValue('f_31'); 
        const d43 = getAppNumericValue('d_43'); 
        const i43 = getAppNumericValue('i_43'); 
        // =SUM(F$27+F$28+F$29+F$30+F$31-D43-I43)/277.7777
        return (f27 + f28 + f29 + f30 + f31 - d43 - i43) / 277.7777;
    }
    
    function calculateH33() {
        const j27 = getAppNumericValue('j_27'); // FIXED: Use Application values for Target calculations
        const j28 = getAppNumericValue('j_28'); 
        const j29 = getAppNumericValue('j_29'); 
        const j30 = getAppNumericValue('j_30'); 
        const j31 = getAppNumericValue('j_31'); 
        const i43 = getAppNumericValue('i_43'); 
        const d43 = getAppNumericValue('d_43'); 
        // =SUM(J$27+J$28+J$29+J$30+J$31-I43-D43)/277.7777 
        return (j27 + j28 + j29 + j30 + j31 - i43 - d43) / 277.7777;
    }
    
    // Row 34: Annual Percapita Energy
    function calculateD34() {
        const f32 = getAppNumericValue('f_32'); // FIXED: Use Application values for Target calculations
        const d63 = getAppNumericValue('d_63'); // Occupants
        // New formula: =F32/D63 (Actual Net Energy / Occupants)
        return (f32) / (d63 || 1); // Ensure d63 is not zero
    }
    
    function calculateF34() {
        const d33 = getAppNumericValue('d_33'); // FIXED: Use Application values for Target calculations
        const d63 = getAppNumericValue('d_63'); 
        // =D33/D63 (Total energy per person)
        return d33 / (d63 || 1);
    }
    
    function calculateH34() {
        const j32 = getAppNumericValue('j_32'); // FIXED: Use Application values for Target calculations
        const d63 = getAppNumericValue('d_63'); // Occupants
        // New formula: =J32/D63 (Target Net Energy / Occupants)
        return (j32) / (d63 || 1); // Ensure d63 is not zero
    }
    
    function calculateJ34() {
        const h33 = getAppNumericValue('h_33'); // FIXED: Use Application values for Target calculations
        const d63 = getAppNumericValue('d_63'); 
        // =H33/D63 (Target GJ per person)
        return h33 / (d63 || 1);
    }
    
    // Row 35: Primary Energy
    function calculateD35() {
        const d14 = window.TEUI.StateManager?.getValue('d_14'); // Get raw string value
        const j27 = getAppNumericValue('j_27'); // FIXED: Use Application values for Target calculations
        const h35 = getAppNumericValue('h_35'); 
        const f27 = getAppNumericValue('f_27'); 
        // =IF(D14="Targeted Use", J27*H35, F27*H35)
        if (d14 === "Targeted Use") {
            return j27 * h35;
        } else {
            return f27 * h35;
        }
    }
    
    function calculateF35() {
        const d35 = getAppNumericValue('d_35'); // FIXED: Use Application values for Target calculations
        const h15 = getAppNumericValue('h_15'); 
        // =D35/H15 (Energy per floor area)
        return d35 / (h15 || 1);
    }
    
    // Register calculation functions
    function registerCalculations() {
        if (window.TEUI && window.TEUI.Calculator && window.TEUI.Calculator.registerCalculation) {
            // Row 27
            window.TEUI.Calculator.registerCalculation('f_27', calculateF27);
            window.TEUI.Calculator.registerCalculation('g_27', calculateG27);
            window.TEUI.Calculator.registerCalculation('h_27', calculateH27);
            window.TEUI.Calculator.registerCalculation('j_27', calculateJ27);
            window.TEUI.Calculator.registerCalculation('k_27', calculateK27);
            
            // Row 28
            window.TEUI.Calculator.registerCalculation('f_28', calculateF28);
            window.TEUI.Calculator.registerCalculation('g_28', calculateG28);
            window.TEUI.Calculator.registerCalculation('h_28', calculateH28);
            window.TEUI.Calculator.registerCalculation('j_28', calculateJ28);
            window.TEUI.Calculator.registerCalculation('k_28', calculateK28);
            
            // Row 29
            window.TEUI.Calculator.registerCalculation('f_29', calculateF29);
            window.TEUI.Calculator.registerCalculation('g_29', calculateG29);
            window.TEUI.Calculator.registerCalculation('h_29', calculateH29);
            window.TEUI.Calculator.registerCalculation('j_29', calculateJ29);
            window.TEUI.Calculator.registerCalculation('k_29', calculateK29);
            
            // Row 30
            window.TEUI.Calculator.registerCalculation('f_30', calculateF30);
            window.TEUI.Calculator.registerCalculation('g_30', calculateG30);
            window.TEUI.Calculator.registerCalculation('h_30', calculateH30);
            window.TEUI.Calculator.registerCalculation('j_30', calculateJ30);
            window.TEUI.Calculator.registerCalculation('k_30', calculateK30);
            
            // Row 31
            window.TEUI.Calculator.registerCalculation('f_31', calculateF31);
            window.TEUI.Calculator.registerCalculation('g_31', calculateG31);
            window.TEUI.Calculator.registerCalculation('h_31', calculateH31);
            window.TEUI.Calculator.registerCalculation('j_31', calculateJ31);
            window.TEUI.Calculator.registerCalculation('k_31', calculateK31);
            
            // Row 32
            window.TEUI.Calculator.registerCalculation('f_32', calculateF32);
            window.TEUI.Calculator.registerCalculation('g_32', calculateG32);
            window.TEUI.Calculator.registerCalculation('j_32', calculateJ32);
            window.TEUI.Calculator.registerCalculation('k_32', calculateK32);
            
            // Row 33
            window.TEUI.Calculator.registerCalculation('d_33', calculateD33);
            window.TEUI.Calculator.registerCalculation('h_33', calculateH33);
            
            // Row 34
            window.TEUI.Calculator.registerCalculation('d_34', calculateD34);
            window.TEUI.Calculator.registerCalculation('f_34', calculateF34);
            window.TEUI.Calculator.registerCalculation('h_34', calculateH34);
            window.TEUI.Calculator.registerCalculation('j_34', calculateJ34);
            window.TEUI.Calculator.registerCalculation('l_34', calculateL34);
            
            // Row 35
            window.TEUI.Calculator.registerCalculation('d_35', calculateD35);
            window.TEUI.Calculator.registerCalculation('f_35', calculateF35);
        }
    }
    
    /**
     * Called when the section is rendered
     */
    function onSectionRendered() {
        // console.log(`${sectionRows.metadata.sectionName} section rendered, initializing`);
        
        // --- Start: Add Default Province Initialization ---
        // Ensure Ontario is selected by default for emissions calculations
        if (window.TEUI && window.TEUI.StateManager) {
            // Only set default if no province is already set
            if (!window.TEUI.StateManager.getValue('d_19')) {
                window.TEUI.StateManager.setValue('d_19', 'ON', 'default');
                // If a dropdown exists, ensure its state is also set
                if (!window.TEUI.StateManager.getValue('dd_d_19')) {
                    window.TEUI.StateManager.setValue('dd_d_19', 'ON', 'default');
                }
                // console.log("Set default province to ON in StateManager.");
            }
        }
        // --- End: Add Default Province Initialization ---
        
        // Initialize event handlers
        initializeEventHandlers();
        
        // Register calculation functions
        registerCalculations();
        
        // Update electricity emission factor based on province and year
        // Moved the timeout wrapper here to ensure factors are updated after potential defaults are set
        setTimeout(() => {
        updateElectricityEmissionFactor();
        // CRITICAL: Run dual-engine calculations on initial load
        calculateAll();
        
            // Trigger initial calculations after factors and subtotals are set
        if (window.TEUI && window.TEUI.Calculator) {
            window.TEUI.Calculator.calculateSection(sectionRows.metadata.sectionId);
        }
            // console.log("Section 4 Initial Calculation Triggered");
        }, 50); // Short delay to allow potential state updates
    }
    
    //==========================================================================
    // PART 6: CALCULATION LOGIC
    //==========================================================================
    
    /**
     * DUAL-ENGINE ARCHITECTURE: Helper functions to get values based on calculation mode
     */
    
    /**
     * Get numeric value from Application state (for Target calculations)
     */
    function getAppNumericValue(fieldId, defaultValue = 0) {
        const value = window.TEUI?.StateManager?.getApplicationValue?.(fieldId) || 
                     window.TEUI?.StateManager?.getValue?.(fieldId);
        
        // Use the global parseNumeric function to handle comma-formatted values
        return window.TEUI?.parseNumeric?.(value, defaultValue) || defaultValue;
    }
    
    /**
     * Get numeric value for Reference calculations
     * First checks for ref_ prefixed values, then falls back to application state
     */
    function getRefNumericValue(fieldId, defaultValue = 0) {
        // First try to get ref_ prefixed value (from upstream Reference calculations)
        const refFieldId = `ref_${fieldId}`;
        let value = window.TEUI?.StateManager?.getValue?.(refFieldId);
        
        // If no ref_ value, fall back to application state
        if (value === null || value === undefined) {
            value = window.TEUI?.StateManager?.getApplicationValue?.(fieldId) || 
                   window.TEUI?.StateManager?.getValue?.(fieldId);
        }
        
        // Use the global parseNumeric function to handle comma-formatted values
        return window.TEUI?.parseNumeric?.(value, defaultValue) || defaultValue;
    }
    
    /**
     * REFERENCE MODEL ENGINE: Calculate all Reference values
     */
    function calculateReferenceModel() {
        
        // Get Reference values from upstream sections
        const ref_d136 = getRefNumericValue('d_136', 0); // From S15
        
        // Get system types - these carry over from Application state (Section 07 pattern)
        const ref_d51 = window.TEUI?.StateManager?.getValue?.('d_51'); // DHW Energy Source (carries over)
        const ref_d113 = window.TEUI?.StateManager?.getValue?.('d_113'); // Heating Energy Source (carries over)
        
        // Get Reference fuel volumes from Section 07 dual-engine calculations
        const ref_e51 = getRefNumericValue('e_51', 0); // Reference Gas volume from S07
        const ref_k54 = getRefNumericValue('k_54', 0); // Reference Oil volume from S07
        

        

        
        // Get Reference fuel volumes from Section 13 (heating systems)
        const ref_h115 = getRefNumericValue('h_115', 0); // Reference Gas volume from S13 heating
        const ref_f115 = getRefNumericValue('f_115', 0); // Reference Oil volume from S13 heating
        

        
        // Get user inputs (these typically carry over from application state)
        const d27 = getAppNumericValue('d_27', 0); // Electricity
        const d28 = getAppNumericValue('d_28', 0); // Gas
        const d29 = getAppNumericValue('d_29', 0); // Propane
        const d30 = getAppNumericValue('d_30', 0); // Oil
        const d31 = getAppNumericValue('d_31', 0); // Wood
        const d60 = getAppNumericValue('d_60', 0); // Offsets
        
        // Get emission factors (Reference grid intensity may be different from application)
        const ref_l27 = getRefNumericValue('l_27', 0); // Use Reference grid intensity
        const l28 = getAppNumericValue('l_28', 1921); // Default gas emissions factor
        const l29 = getAppNumericValue('l_29', 2970); // Default propane emissions factor
        const l30 = getAppNumericValue('l_30', 2753); // Default oil emissions factor
        const l31 = getAppNumericValue('l_31', 150); // Default wood emissions factor
        
        // Calculate Reference H values (Target consumption)
        // H27: Electricity target from S15
        const ref_h27 = ref_d136;
        
        // H28: Gas target (Excel formula: =IF(AND($D$113="Gas", $D$51="Gas"), E51+H115, IF($D$51="Gas", E51, IF($D$113="Gas", H115, 0))))
        let ref_h28 = 0;
        if (ref_d113 === "Gas" && ref_d51 === "Gas") {
            ref_h28 = ref_e51 + ref_h115; // Both heating and DHW use gas
        } else if (ref_d51 === "Gas") {
            ref_h28 = ref_e51; // Only DHW uses gas
        } else if (ref_d113 === "Gas") {
            ref_h28 = ref_h115; // Only heating uses gas
        }
        
        // H29: Propane = actual
        const ref_h29 = d29;
        
        // H30: Oil target (Excel formula: =IF(AND($D$113="Oil", $D$51="Oil"), $K$54+$F$115, IF($D$51="Oil", K54, IF($D$113="Oil", F115, 0))))
        let ref_h30 = 0;
        if (ref_d113 === "Oil" && ref_d51 === "Oil") {
            ref_h30 = ref_k54 + ref_f115; // Both heating and DHW use oil
        } else if (ref_d51 === "Oil") {
            ref_h30 = ref_k54; // Only DHW uses oil
        } else if (ref_d113 === "Oil") {
            ref_h30 = ref_f115; // Only heating uses oil
        }
        

        
        // H31: Wood = actual
        const ref_h31 = d31;
        
        // Calculate Reference J values (Energy)
        const ref_j27 = ref_h27; // Electricity kWh
        const ref_j28 = ref_h28 * 0.0373 * 277.7778; // Gas conversion
        const ref_j29 = ref_h29 * 14.019; // Propane conversion
        const ref_j30 = ref_h30 * 36.72 * 0.2777778; // Oil conversion
        const ref_j31 = ref_h31 * 1000; // Wood conversion
        
        // Calculate Reference K values (Emissions)
        const ref_k27 = (ref_j27 * ref_l27) / 1000;
        const ref_k28 = (ref_h28 * l28) / 1000;
        const ref_k29 = (ref_h29 * l29) / 1000;
        const ref_k30 = (ref_h30 * l30) / 1000;
        const ref_k31 = ref_h31 * l31;
        
        // Calculate Reference subtotals
        const ref_j32 = ref_j27 + ref_j28 + ref_j29 + ref_j30 + ref_j31;
        const ref_k32 = ref_k27 + ref_k28 + ref_k29 + ref_k30 + ref_k31 - (d60 * 1000);
        
        // Store Reference values with ref_ prefix - WITH CHANGE DETECTION
        if (window.TEUI?.StateManager) {
            // Helper function to set value only if changed
            const setValueIfChanged = (fieldId, newValue) => {
                const currentValue = window.TEUI.StateManager.getValue(fieldId);
                const newValueStr = newValue.toString();
                if (currentValue !== newValueStr) {
                    window.TEUI.StateManager.setValue(fieldId, newValueStr, 'calculated');
                    return true;
                }
                return false;
            };
            
            // Row 27 - only set if values changed
            setValueIfChanged('ref_h_27', ref_h27.toString());
            setValueIfChanged('ref_j_27', ref_j27.toString());
            setValueIfChanged('ref_k_27', ref_k27.toString());
            
            // Row 28
            setValueIfChanged('ref_h_28', ref_h28.toString());
            setValueIfChanged('ref_j_28', ref_j28.toString());
            setValueIfChanged('ref_k_28', ref_k28.toString());
            
            // Row 29
            setValueIfChanged('ref_h_29', ref_h29.toString());
            setValueIfChanged('ref_j_29', ref_j29.toString());
            setValueIfChanged('ref_k_29', ref_k29.toString());
            
            // Row 30
            setValueIfChanged('ref_h_30', ref_h30.toString());
            setValueIfChanged('ref_j_30', ref_j30.toString());
            setValueIfChanged('ref_k_30', ref_k30.toString());
            
            // Row 31
            setValueIfChanged('ref_h_31', ref_h31.toString());
            setValueIfChanged('ref_j_31', ref_j31.toString());
            setValueIfChanged('ref_k_31', ref_k31.toString());
            
            // Subtotals - CRITICAL for Section 01 (only set if changed)
            const j32Changed = setValueIfChanged('ref_j_32', ref_j32.toString());
            const k32Changed = setValueIfChanged('ref_k_32', ref_k32.toString());
            
            if (j32Changed || k32Changed) {
            }
        }
    }
    
    /**
     * TARGET MODEL ENGINE: Calculate all Target/Application values
     */
    function calculateTargetModel() {
        
        // This is essentially the existing calculateAll logic
        // but reorganized to be explicit about being the Target model
        
        // NOTE: updateElectricityEmissionFactor() is called separately by h_12 listener
        // Don't call it here to avoid overwriting Reference grid intensity

        // Calculate all row 27-31 actuals (F and G columns)
        setCalculatedValue('f_27', calculateF27(), 'number-2dp-comma');
        setCalculatedValue('g_27', calculateG27(), 'number-2dp-comma');
        
        setCalculatedValue('f_28', calculateF28(), 'number-2dp-comma');
        setCalculatedValue('g_28', calculateG28(), 'number-2dp-comma');
        
        setCalculatedValue('f_29', calculateF29(), 'number-2dp-comma');
        setCalculatedValue('g_29', calculateG29(), 'number-2dp-comma');
        
        setCalculatedValue('f_30', calculateF30(), 'number-2dp-comma');
        setCalculatedValue('g_30', calculateG30(), 'number-2dp-comma');
        
        setCalculatedValue('f_31', calculateF31(), 'number-2dp-comma');
        setCalculatedValue('h_31', getNumericValue('d_31'), 'number-2dp-comma');
        setCalculatedValue('g_31', calculateG31(), 'number-2dp-comma');

        // Calculate all row 27-31 targets (H, J, and K columns)
        setCalculatedValue('h_27', getNumericValue('d_136'), 'number-2dp-comma');
        setCalculatedValue('j_27', calculateJ27(), 'number-2dp-comma');
        setCalculatedValue('k_27', calculateK27(), 'number-2dp-comma');

        setCalculatedValue('h_28', calculateH28(), 'number-2dp-comma');
        setCalculatedValue('j_28', calculateJ28(), 'number-2dp-comma');
        setCalculatedValue('k_28', calculateK28(), 'number-2dp-comma');
        
        setCalculatedValue('h_29', calculateH29(), 'number-2dp-comma');
        setCalculatedValue('j_29', calculateJ29(), 'number-2dp-comma');
        setCalculatedValue('k_29', calculateK29(), 'number-2dp-comma');

        setCalculatedValue('h_30', calculateH30(), 'number-2dp-comma');
        setCalculatedValue('j_30', calculateJ30(), 'number-2dp-comma');
        
        setCalculatedValue('h_30', calculateH30(), 'number-2dp-comma');
        setCalculatedValue('j_30', calculateJ30(), 'number-2dp-comma');
        setCalculatedValue('k_30', calculateK30(), 'number-2dp-comma');

        setCalculatedValue('j_31', calculateJ31(), 'number-2dp-comma');
        setCalculatedValue('k_31', calculateK31(), 'number-2dp-comma');

        // Update subtotals and dependent totals
        updateSubtotals();
        updateDependentTotals();
    }
    
    /**
     * Main calculation function for Section 04.
     * Now runs BOTH calculation engines.
     */
    function calculateAll() {
        
        // DUAL-ENGINE ARCHITECTURE: Always run both engines
        calculateReferenceModel();  // Calculates Reference values using ref_ inputs
        calculateTargetModel();     // Calculates Target values using application state
    }

    //==========================================================================
    // PART 7: PUBLIC API
    //==========================================================================
    
    // Return public API using standardized function names
    return {
        // Standardized names REQUIRED by FieldManager
        getFields: getFields, 
        getDropdownOptions: getDropdownOptions,
        getLayout: getLayout,
        initializeEventHandlers: initializeEventHandlers,
        onSectionRendered: onSectionRendered,
        
        // Keep metadata accessor if needed elsewhere, though not standard
        getMetadata: function() { 
            return sectionRows.metadata; 
        },
        
        // Expose calculation and helper functions if they need to be called externally
        // or by listeners that might have a different 'this' context.
        calculateAll: calculateAll, // Now correctly points to the defined function
        calculateReferenceModel: calculateReferenceModel, // NEW: Reference engine
        calculateTargetModel: calculateTargetModel, // NEW: Target engine
        updateElectricityEmissionFactor: updateElectricityEmissionFactor,
        getProvinceCode: getProvinceCode, // Expose getProvinceCode
        // ... any other functions that need to be public ...

        // Keep calculations exposed if needed (already present)
        calculations: {
             // ... (existing calculation functions) ...
             calculateF27: calculateF27,
             calculateG27: calculateG27,
             calculateH27: calculateH27,
             calculateJ27: calculateJ27,
             calculateK27: calculateK27,
             calculateF28: calculateF28,
             calculateG28: calculateG28,
             calculateH28: calculateH28,
             calculateJ28: calculateJ28,
             calculateK28: calculateK28,
             calculateF29: calculateF29,
             calculateG29: calculateG29,
             calculateH29: calculateH29,
             calculateJ29: calculateJ29,
             calculateK29: calculateK29,
             calculateF30: calculateF30,
             calculateG30: calculateG30,
             calculateH30: calculateH30,
             calculateJ30: calculateJ30,
             calculateK30: calculateK30,
             calculateF31: calculateF31,
             calculateG31: calculateG31,
             calculateH31: calculateH31,
             calculateJ31: calculateJ31,
             calculateK31: calculateK31,
             calculateF32: calculateF32,
             calculateG32: calculateG32,
             calculateJ32: calculateJ32,
             calculateK32: calculateK32,
             calculateD33: calculateD33,
             calculateH33: calculateH33,
             calculateD34: calculateD34,
             calculateF34: calculateF34,
             calculateH34: calculateH34,
             calculateJ34: calculateJ34,
             calculateD35: calculateD35,
             calculateF35: calculateF35
        },
        
        updateSubtotals: updateSubtotals,
        updateDependentTotals: updateDependentTotals
    };
})();