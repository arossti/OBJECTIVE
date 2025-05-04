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
    function getNumericValue(fieldId) {
        const rawValue = window.TEUI?.StateManager?.getValue(fieldId);
        // Use the global parseNumeric if available
        return window.TEUI?.parseNumeric?.(rawValue) || 0;
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
     * @param {string} fieldId - The ID of the field to update.
     * @param {number} rawValue - The raw calculated numeric value.
     * @param {string} [formatType='number-2dp-comma'] - The format type string (e.g., 'number-2dp-comma', 'percent-1dp', 'integer').
     */
    function setCalculatedValue(fieldId, rawValue, formatType = 'number-2dp-comma') {
        // Use global formatter - ensuring window.TEUI and formatNumber exist
        const formattedValue = window.TEUI?.formatNumber?.(rawValue, formatType) ?? rawValue?.toString() ?? 'N/A';
        
        // Store raw value as string in StateManager for precision
        if (window.TEUI?.StateManager?.setValue) {
             let stateValue = isFinite(rawValue) ? rawValue.toString() : null; 
            window.TEUI.StateManager.setValue(fieldId, stateValue, 'calculated');
        }
        
        // Update DOM
        const element = document.querySelector(`[data-field-id="${fieldId}"]`);
        if (element) {
            element.textContent = formattedValue;
            element.classList.toggle('negative-value', isFinite(rawValue) && rawValue < 0);
        } else {
            // console.warn(`setCalculatedValue (S13): Element not found for fieldId ${fieldId}`);
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
                d: { fieldId: "d_34", type: "calculated", value: "1,055.06", dependencies: ["f_27", "f_28", "d_63"], classes: ["calculated-value"], section: "actualTargetEnergy" },
                e: { content: "kWh Actual" },
                f: { fieldId: "f_34", type: "calculated", value: "3.80", dependencies: ["d_33", "d_63"], classes: ["calculated-value"], section: "actualTargetEnergy" },
                g: { content: "GJ Actual" },
                h: { fieldId: "h_34", type: "calculated", value: "1,053.70", dependencies: ["j_27", "j_28", "d_63"], classes: ["calculated-value"], section: "actualTargetEnergy" },
                i: { content: "kWh Target" },
                j: { fieldId: "j_34", type: "calculated", value: "3.79", dependencies: ["h_33", "d_63"], classes: ["calculated-value"], section: "actualTargetEnergy" },
                k: { content: "GJ Target" },
                l: { fieldId: "l_34", type: "calculated", value: "53.74", dependencies: ["k_32", "d_63"], classes: ["calculated-value"], section: "actualTargetEnergy" },
                m: { content: "kWh/pp" }
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
                        const cleanValue = parseFloat(pastedContent.replace(/,/g, ''));
                        if (!isNaN(cleanValue)) {
                            this.textContent = formatNumber(cleanValue);
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
                console.log("[S4 DEBUG] targetFuelUpdateCallback triggered.");

                // Recalculate H28/J28/K28 (Gas)
                const h28Value = calculateH28();
                setCalculatedValue('h_28', h28Value, 'number-2dp-comma');
                const j28Value = calculateJ28();
                setCalculatedValue('j_28', j28Value, 'number-2dp-comma');
                const k28Value = calculateK28();
                setCalculatedValue('k_28', k28Value, 'number-2dp-comma');
                console.log(`[S4 DEBUG] Updated Gas Target: h28=${h28Value}, j28=${j28Value}, k28=${k28Value}`);

                // Recalculate H30/J30/K30 (Oil)
                const h30Value = calculateH30();
                setCalculatedValue('h_30', h30Value, 'number-2dp-comma');
                const j30Value = calculateJ30();
                setCalculatedValue('j_30', j30Value, 'number-2dp-comma');
                const k30Value = calculateK30();
                setCalculatedValue('k_30', k30Value, 'number-2dp-comma');
                console.log(`[S4 DEBUG] Updated Oil Target: h30=${h30Value}, j30=${j30Value}, k30=${k30Value}`);

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
            sm.addListener('l_54', targetFuelUpdateCallback);  // CORRECTED: Listen to Net Oil Litres (l_54)
            // --- End Target Fuel Listeners ---

            // --- Listeners for Actual Fuel Inputs (d_28 to d_31) ---
            const actualFuelUpdateCallback = (newValue, oldValue, sourceFieldId) => {
                // console.log(`[S4 DEBUG] actualFuelUpdateCallback triggered by ${sourceFieldId}`);

                // Determine which calculation pair to run based on the source
                switch (sourceFieldId) {
                    case 'd_28': // Gas
                        const f28Value = calculateF28();
                        setCalculatedValue('f_28', f28Value, 'number-2dp-comma');
                        const g28Value = calculateG28();
                        setCalculatedValue('g_28', g28Value, 'number-2dp-comma');
                        // console.log(`[S4 DEBUG] Updated Actual Gas: f28=${f28Value}, g28=${g28Value}`);
                        break;
                    case 'd_29': // Propane
                        const f29Value = calculateF29();
                        setCalculatedValue('f_29', f29Value, 'number-2dp-comma');
                        const g29Value = calculateG29();
                        setCalculatedValue('g_29', g29Value, 'number-2dp-comma');
                        // console.log(`[S4 DEBUG] Updated Actual Propane: f29=${f29Value}, g29=${g29Value}`);
                        break;
                    case 'd_30': // Oil
                        const f30Value = calculateF30();
                        setCalculatedValue('f_30', f30Value, 'number-2dp-comma');
                        const g30Value = calculateG30();
                        setCalculatedValue('g_30', g30Value, 'number-2dp-comma');
                        // console.log(`[S4 DEBUG] Updated Actual Oil: f30=${f30Value}, g30=${g30Value}`);
                        break;
                    case 'd_31': // Wood
                        const f31Value = calculateF31();
                        setCalculatedValue('f_31', f31Value, 'number-2dp-comma');
                        // Also need h_31 for g_31 calculation
                        const h31Value = calculateH31(); 
                        setCalculatedValue('h_31', h31Value, 'number-2dp-comma'); // Update target too
                        const g31Value = calculateG31(); 
                        setCalculatedValue('g_31', g31Value, 'number-2dp-comma');
                        // console.log(`[S4 DEBUG] Updated Actual Wood: f31=${f31Value}, g31=${g31Value}`);
                        break;
                }

                // Update subtotals after any actual fuel input change
                updateSubtotals();
            };

            sm.addListener('d_28', actualFuelUpdateCallback);
            sm.addListener('d_29', actualFuelUpdateCallback);
            sm.addListener('d_30', actualFuelUpdateCallback);
            sm.addListener('d_31', actualFuelUpdateCallback);
            // --- End Actual Fuel Listeners ---

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
     */
    function updateElectricityEmissionFactor() {
        // Get current province, default to Ontario if not available
        let province = 'ON';
        
        // IMPROVED PROVINCE DETECTION:
        // First try StateManager as the most reliable source
        if (window.TEUI && window.TEUI.StateManager) {
            const stateValue = window.TEUI.StateManager.getValue('d_19');
            if (stateValue) {
                province = getProvinceCode(stateValue);
                // Keep main province log but make it more concise
                // console.log('Province:', stateValue, '→', province);
            }
        }
        
        // If not found in StateManager, try getting province from the dropdown element
        if (province === 'ON') {
            const provinceDropdown = document.querySelector('select[data-dropdown-id="dd_d_19"], select[data-field-id="d_19"]');
            if (provinceDropdown && provinceDropdown.value) {
                province = getProvinceCode(provinceDropdown.value);
                // Remove redundant intermediate logs
            }
        }
        
        // FIXED: Only get text from specific elements, not the dropdown itself
        if (province === 'ON') {
            // For text displays, look for spans or divs with the province value
            const possibleElements = [
                document.querySelector('.province-display'), // Look for custom province display elements
                document.querySelector('[data-field-id="d_19"]:not(select)'), // Non-select element with field ID
                document.querySelector('.selected-province') // Any custom class for selected province
            ];
            
            // Use the first valid element text we find
            for (const el of possibleElements) {
                if (el && el.textContent && el.textContent.trim()) {
                    // Make sure we're not getting the entire dropdown text
                    const text = el.textContent.trim();
                    // Simple validation - if text is too long, it's probably not just a province name
                    if (text.length < 50) {
                        province = getProvinceCode(text);
                        // Remove redundant logs
                        break;
                    } else {
                        // Keep this useful diagnostic log
                        // console.log('Text too long to be province name, skipping:', text.substring(0, 30) + '...');
                    }
                }
            }
        }
        
        // Get reporting year from h_12 or alternative field
        let year = 2022; // Default from CSV
        
        // First try StateManager for year
        if (window.TEUI && window.TEUI.StateManager) {
            const yearState = window.TEUI.StateManager.getValue('h_12');
            if (yearState) {
                const yearValue = parseInt(yearState);
                if (!isNaN(yearValue) && yearValue >= 2015 && yearValue <= 2041) {
                    year = yearValue;
                    // Remove redundant year log
                }
            }
        }
        
        // Fallback to DOM element if needed
        if (year === 2022) {
            // Try multiple potential field IDs for the reporting year
            const yearFields = [
                document.querySelector('input[data-field-id="h_12"]'), 
                document.querySelector('[data-field-id="h_12"]'),
                document.querySelector('[data-field-id="d_12"]')
            ];
            
            // Use the first available field
            for (const field of yearFields) {
                if (field) {
                    // Check both value (for inputs) and textContent
                    const yearText = field.value || field.textContent;
                    if (yearText) {
                        const yearValue = parseInt(yearText.trim());
                        if (!isNaN(yearValue) && yearValue >= 2015 && yearValue <= 2041) {
                            year = yearValue;
                            // Remove redundant year log
                            break;
                        }
                    }
                }
            }
        }
        
        // Get emission factor based on province and year
        const factor = getElectricityFactor(province, year);
        // Keep one consolidated log with all important info
        
        // Update the l_27 field and StateManager
        const l27El = document.querySelector('[data-field-id="l_27"]');
        if (l27El) {
            // Use standard helper with formatType
            setCalculatedValue('l_27', factor, 'integer'); // Emission factors usually shown as integers
            
            // Also update StateManager
            if (window.TEUI && window.TEUI.StateManager) {
                window.TEUI.StateManager.setValue('l_27', factor.toString(), 'calculated');
            }
            
            // Update dependent emissions calculations for ACTUAL emissions
            const f27El = document.querySelector('[data-field-id="f_27"]');
            const g27El = document.querySelector('[data-field-id="g_27"]');
            
            if (f27El && g27El) {
                // Use getNumericValue to read state
                const f27Value = getNumericValue('f_27');
                const g27Value = calculateG27(f27Value, factor);
                // Update state and DOM using standard helper
                setCalculatedValue('g_27', g27Value, 'number-2dp-comma');
            }
            
            // Update dependent emissions calculations for TARGET emissions
            const j27El = document.querySelector('[data-field-id="j_27"]');
            const k27El = document.querySelector('[data-field-id="k_27"]');
            
            if (j27El && k27El) {
                // Use getNumericValue to read state
                const j27Value = getNumericValue('j_27');
                const k27Value = calculateK27(j27Value, factor);
                 // Update state and DOM using standard helper
                setCalculatedValue('k_27', k27Value, 'number-2dp-comma');
            }
            
            // Update subtotals after both actual and target emissions are updated
            updateSubtotals();
        }
    }
    
    // Helper function to convert province name to province code
    function getProvinceCode(provinceText) {
        if (!provinceText) return 'ON';
        
        // Direct match for 2-letter codes
        if (provinceText.length === 2) {
            const code = provinceText.toUpperCase();
            if (['ON', 'QC', 'BC', 'AB', 'SK', 'MB', 'NS', 'NB', 'NL', 'PE', 'NT', 'YT', 'NU'].includes(code)) {
                return code;
            }
        }
        
        // Store original provinceText for minimal logging
        const originalText = provinceText;
        
        // Normalize the text - remove extra spaces and convert to lowercase
        provinceText = provinceText.trim().toLowerCase();
        
        // Exact match check (more specific matches first)
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
        
        // Only use includes() if exact matches failed, and prioritize matches
        const provinceMatches = {
            'ON': provinceText.includes("ontario"),
            'QC': provinceText.includes("quebec") || provinceText.includes("québec"),
            'BC': provinceText.includes("british columbia"),
            'AB': provinceText.includes("alberta"),
            'SK': provinceText.includes("saskatchewan"),
            'MB': provinceText.includes("manitoba"),
            'NS': provinceText.includes("nova scotia"),
            'NB': provinceText.includes("new brunswick"),
            'NL': provinceText.includes("newfoundland"),
            'PE': provinceText.includes("prince edward"),
            'NT': provinceText.includes("northwest"),
            'YT': provinceText.includes("yukon"),
            'NU': provinceText.includes("nunavut")
        };
        
        // Find all matches
        const matches = Object.entries(provinceMatches).filter(([_, matches]) => matches);
        
        // If we have matches, take the first one
        if (matches.length > 0) {
            // Simplify log message
            if (matches.length > 1) {
                // console.log(`Multiple province matches for "${originalText.substring(0, 20)}..."`);
            }
            return matches[0][0];
        }
        
        // Default to Ontario if no match found
        // console.log(`No province match found for "${originalText.substring(0, 20)}..."`);
        return 'ON';
    }
    
    // Get electricity emission factor based on CSV formula data
    function getElectricityFactor(province, year) {
        // Remove redundant log
        
        // Default values from CSV Line 27 for different provinces
        const defaultFactors = {
            'ON': calculateOntarioFactor(year),
            'QC': 1.0,
            'BC': 12.0,
            'AB': 650.0,
            'SK': 720.0,
            'MB': 3.0,
            'NS': 600.0,
            'NB': 340.0,
            'NL': 30.0,
            'PE': 12.0,
            'NT': 180.0,
            'YT': 2.0,
            'NU': 200.0
        };
        
        const factor = defaultFactors[province] || defaultFactors['ON'];
        // Remove redundant Ontario-specific log
        return factor;
    }
    
    // Calculate Ontario's electricity factor based on year (from CSV formula)
    function calculateOntarioFactor(year) {
        // Remove redundant log
        
        let factor;
        if (year < 2015) factor = 46.0;
        else if (year === 2015) factor = 46.0;
        else if (year === 2016) factor = 40.0;
        else if (year === 2017) factor = 18.0;
        else if (year === 2018) factor = 29.0;
        else if (year === 2019) factor = 29.0;
        else if (year === 2020) factor = 36.0;
        else if (year === 2021) factor = 44.0;
        else if (year === 2022) factor = 51.0;
        else if (year === 2023) factor = 67.0;
        else if (year === 2024) factor = 71.0;
        else if (year === 2025) factor = 138.0;
        else if (year === 2026) factor = 145.0;
        else if (year === 2027) factor = 132.0;
        else if (year === 2028) factor = 133.0;
        else if (year === 2029) factor = 126.0;
        else if (year === 2030) factor = 126.0;
        else if (year === 2031) factor = 122.0;
        else if (year === 2032) factor = 122.0;
        else if (year === 2033) factor = 104.0;
        else if (year === 2034) factor = 58.0;
        else if (year === 2035) factor = 40.0;
        else if (year === 2036) factor = 34.0;
        else if (year === 2037) factor = 33.0;
        else if (year === 2038) factor = 32.0;
        else if (year === 2039) factor = 13.0;
        else if (year === 2040) factor = 8.0;
        else if (year === 2041) factor = 3.0;
        else if (year > 2041) factor = 3.0;
        else factor = 51.0; // Default to 2022 value
        
        // Remove redundant log
        return factor;
    }
    
    /**
     * Helper function to immediately update dependent fields without waiting for calculator
     * @param {string} fieldId - The ID of the field that changed
     * @param {string} newValue - The new value of the field
     */
    function updateDependentFields(fieldId, newValue) {
        // For d_27, update f_27, g_27
        if (fieldId === 'd_27') {
            const f27El = document.querySelector('[data-field-id="f_27"]');
            const g27El = document.querySelector('[data-field-id="g_27"]');
            const l27El = document.querySelector('[data-field-id="l_27"]');
            
            // *** FIX: Get current renewable values ***
            const d43Value = getFieldValue('d_43');
            const i43Value = getFieldValue('i_43'); // Fetch i_43 for f_27

            // Calculate f_27 correctly using i_43
            const f27CorrectedValue = calculateF27(newValue, d43Value, i43Value); 

            if (f27El) {
                // Update f_27 display with the correct value
                f27El.textContent = formatNumber(f27CorrectedValue);
                // Update StateManager for f_27 as well (important for subsequent calculations)
                if (window.TEUI && window.TEUI.StateManager) {
                    window.TEUI.StateManager.setValue('f_27', f27CorrectedValue.toString(), 'calculated');
                }
            }
            
            if (g27El && l27El) {
                const l27Value = getFieldValue('l_27'); // Use getFieldValue for consistency
                // Use the CORRECTED f_27 value to calculate g_27
                const g27Value = calculateG27(f27CorrectedValue, l27Value);
                g27El.textContent = formatNumber(g27Value);
                // Update StateManager for g_27
                if (window.TEUI && window.TEUI.StateManager) {
                    window.TEUI.StateManager.setValue('g_27', g27Value.toString(), 'calculated');
                }
            }
            
            // Update subtotals after any row changes
            updateSubtotals();
        }
        
        // For d_28, update f_28, g_28
        else if (fieldId === 'd_28') {
            const f28El = document.querySelector('[data-field-id="f_28"]');
            const g28El = document.querySelector('[data-field-id="g_28"]');
            const l28El = document.querySelector('[data-field-id="l_28"]');
            
            if (f28El) {
                const f28Value = calculateF28(newValue);
                f28El.textContent = formatNumber(f28Value);
            }
            
            if (g28El && l28El) {
                const l28Value = l28El.textContent.trim();
                const g28Value = calculateG28(newValue, l28Value);
                g28El.textContent = formatNumber(g28Value);
            }
            
            // Update subtotals after any row changes
            updateSubtotals();
        }
        
        // For d_29, update f_29, g_29
        else if (fieldId === 'd_29') {
            const f29El = document.querySelector('[data-field-id="f_29"]');
            const g29El = document.querySelector('[data-field-id="g_29"]');
            const l29El = document.querySelector('[data-field-id="l_29"]');
            
            if (f29El) {
                const f29Value = calculateF29(newValue);
                f29El.textContent = formatNumber(f29Value);
            }
            
            if (g29El && l29El) {
                const l29Value = l29El.textContent.trim();
                const g29Value = calculateG29(newValue, l29Value);
                g29El.textContent = formatNumber(g29Value);
            }
            
            // Update subtotals after any row changes
            updateSubtotals();
        }
        
        // For d_30, update f_30, g_30
        else if (fieldId === 'd_30') {
            const f30El = document.querySelector('[data-field-id="f_30"]');
            const g30El = document.querySelector('[data-field-id="g_30"]');
            const l30El = document.querySelector('[data-field-id="l_30"]');
            
            if (f30El) {
                const f30Value = calculateF30(newValue);
                f30El.textContent = formatNumber(f30Value);
            }
            
            if (g30El && l30El) {
                const l30Value = l30El.textContent.trim();
                const g30Value = calculateG30(newValue, l30Value);
                g30El.textContent = formatNumber(g30Value);
            }
            
            // Update subtotals after any row changes
            updateSubtotals();
        }
        
        // For d_31, update f_31, g_31
        else if (fieldId === 'd_31') {
            const f31El = document.querySelector('[data-field-id="f_31"]');
            const g31El = document.querySelector('[data-field-id="g_31"]');
            const l31El = document.querySelector('[data-field-id="l_31"]');
            
            if (f31El) {
                const f31Value = calculateF31(newValue);
                f31El.textContent = formatNumber(f31Value);
            }
            
            if (g31El && l31El) {
                const l31Value = l31El.textContent.trim();
                const h31Value = calculateH31(newValue); // Since h_31 depends on d_31
                const g31Value = calculateG31(h31Value, l31Value);
                g31El.textContent = formatNumber(g31Value);
            }
            
            // Update subtotals after any row changes
            updateSubtotals();
        }
        
        // Also handle emission factor changes (l_XX cells)
        else if (fieldId === 'l_27' && document.querySelector('[data-field-id="g_27"]')) {
            const d27El = document.querySelector('[data-field-id="d_27"]');
            const f27El = document.querySelector('[data-field-id="f_27"]');
            const g27El = document.querySelector('[data-field-id="g_27"]');
            
            if (d27El && f27El && g27El) {
                const f27Value = f27El.textContent.trim();
                const g27Value = calculateG27(f27Value, newValue);
                g27El.textContent = formatNumber(g27Value);
            }
            
            // Update subtotals after any row changes
            updateSubtotals();
        }
        
        // Add similar handlers for other emission factor cells (l_28, l_29, etc.)
        else if (fieldId === 'l_28' || fieldId === 'l_29' || fieldId === 'l_30' || fieldId === 'l_31') {
            // Update subtotals after any emission factor changes
            updateSubtotals();
        }
        
        // For d_60 (offsets), update g_32 and k_32
        else if (fieldId === 'd_60') {
            updateSubtotals();
        }
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
                setTimeout(() => {
                    if (typeof window.calculateTEUI === 'function') {
                        window.calculateTEUI();
                } else if (window.TEUI?.SectionModules?.sect01?.runAllCalculations) {
                     window.TEUI.SectionModules.sect01.runAllCalculations();
                    }
            }, 100); // Delay slightly
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

        const l34Value = calculateL34(k32Value, d63Value);
        setCalculatedValue('l_34', l34Value, 'number-2dp-comma');

        const d35Value = calculateD35(d14Value, j27Value, h35Value, f27Value);
        setCalculatedValue('d_35', d35Value, 'number-2dp-comma');

        const f35Value = calculateF35(d35Value, h15Value);
        setCalculatedValue('f_35', f35Value, 'number-2dp-comma');
    }
    
    /**
     * Format a number for display
     * @param {number} value - The number to format
     * @returns {string} - Formatted number string
     */
    
    /**
     * Define section-specific calculation functions here
     * These will be called by the Calculator module based on field dependencies
     */
    
    // Row 27: Electricity calculations
    function calculateF27() {
        // =D27-D43-I43 (Total Electricity Use - Onsite Energy - Offsite REC Subtotal)
        const d27 = getNumericValue('d_27'); // Use helper
        const d43 = getNumericValue('d_43'); // Use helper
        const i43 = getNumericValue('i_43'); // Use helper
        return d27 - d43 - i43;
    }
    
    function calculateG27() {
        // =F27*L27/1000 (Actual Net * Emission factor / 1000)
        const f27 = getNumericValue('f_27'); // Use helper
        const l27 = getNumericValue('l_27'); // Use helper
        // Dividing by 1000 converts from gCO2e to kgCO2e
        return (f27 * l27) / 1000;
    }
    
    function calculateH27(d136) {
        // =D$136 (Target value comes from another section)
        // Use parseNumeric here too
        return parseNumeric(d136);
    }
    
    function calculateJ27() {
        // =H27-D43-I43 (Target Energy - Onsite Energy - Offsite REC Subtotal)
        const h27 = getNumericValue('h_27'); // Use helper
        const d43 = getNumericValue('d_43'); // Use helper
        const i43 = getNumericValue('i_43'); // Use helper
        return h27 - d43 - i43;
    }
    
    function calculateK27() {
        // =J27*L27/1000 (Target Net * Emission factor / 1000)
        const j27 = getNumericValue('j_27'); // Use helper
        const l27 = getNumericValue('l_27'); // Use helper
        // Dividing by 1000 converts from gCO2e to kgCO2e
        return (j27 * l27) / 1000;
    }
    
    // Row 28: Gas calculations
    function calculateF28() {
        const d28 = getNumericValue('d_28'); // Use helper
        // =D28*0.0373*277.7778 (Gas volume to energy conversion)
        return d28 * 0.0373 * 277.7778;
    }
    
    function calculateG28() {
        const d28 = getNumericValue('d_28'); // Use helper
        const l28 = getNumericValue('l_28'); // Use helper
        // =(D28)*L28/1000 (Gas volume * Emission factor / 1000)
        return (d28 * l28) / 1000;
    }
    
    function calculateH28() {
        const d51 = window.TEUI.StateManager?.getValue('d_51'); // Get raw string value
        const e51 = getNumericValue('e_51'); // Get numeric value
        const d113 = window.TEUI.StateManager?.getValue('d_113'); // Get raw string value
        const h115 = getNumericValue('h_115'); // Get numeric value
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
        const h28 = getNumericValue('h_28'); // Use helper
        // =H28*0.0373*277.7778 (Gas volume to energy conversion)
        return h28 * 0.0373 * 277.7778;
    }
    
    function calculateK28() {
        const h28 = getNumericValue('h_28'); // Use helper
        const l28 = getNumericValue('l_28'); // Use helper
        // =H28*L28/1000 (Gas volume * Emission factor / 1000)
        return (h28 * l28) / 1000;
    }
    
    // Row 29: Propane calculations
    function calculateF29() {
        const d29 = getNumericValue('d_29'); // Use helper
        // =D29*14.019 (Propane to energy conversion)
        return d29 * 14.019;
    }
    
    function calculateG29() {
        const d29 = getNumericValue('d_29'); // Use helper
        const l29 = getNumericValue('l_29'); // Use helper
        // =D29*L29/1000 (Propane * Emission factor / 1000)
        return (d29 * l29) / 1000;
    }
    
    function calculateH29() {
        const d29 = getNumericValue('d_29'); // Use helper
        // =D29 (Target is same as actual for this case)
        return d29;
    }
    
    function calculateJ29() {
        const h29 = getNumericValue('h_29'); // Use helper
        // =H29*14.019 (Propane to energy conversion)
        return h29 * 14.019;
    }
    
    function calculateK29() {
        const h29 = getNumericValue('h_29'); // Use helper
        const l29 = getNumericValue('l_29'); // Use helper
        // =H29*L29/1000 (Propane * Emission factor / 1000)
        return (h29 * l29) / 1000;
    }
    
    // Row 30: Oil calculations
    function calculateF30() {
        const d30 = getNumericValue('d_30'); // Use helper
        // =D30*36.72*0.2777778 (Oil to energy conversion)
        return d30 * 36.72 * 0.2777778;
    }
    
    function calculateG30() {
        const d30 = getNumericValue('d_30'); // Use helper
        const l30 = getNumericValue('l_30'); // Use helper
        // =D30*L30/1000 (Oil * Emission factor / 1000)
        return (d30 * l30) / 1000;
    }
    
    function calculateH30() {
        const d51 = window.TEUI.StateManager?.getValue('d_51'); // Get raw string value
        const d113 = window.TEUI.StateManager?.getValue('d_113'); // Get raw string value
        const l54 = getNumericValue('l_54'); // CORRECT: Use Net Oil Demand Ltrs
        const f115 = getNumericValue('f_115'); // Get numeric value
        // =IF(AND($D$113="Oil", $D$51="Oil"), $K$54+$F$115, IF($D$51="Oil", K54, IF($D$113="Oil", F115, 0)))
        // --- CORRECTED LOGIC ---
        if (d113 === "Oil" && d51 === "Oil") {
            // Sum target Oil Litres from S13 heating (f_115) and S07 DHW (l_54)
            return l54 + f115; 
        } else if (d51 === "Oil") {
            // Only DHW uses Oil
            return l54; 
        } else if (d113 === "Oil") {
            // Only Heating uses Oil
            return f115;
        } else {
            return 0;
        }
    }
    
    function calculateJ30() {
        const h30 = getNumericValue('h_30'); // Use helper
        // =H30*36.72*0.2777778 (Oil to energy conversion)
        return h30 * 36.72 * 0.2777778;
    }
    
    function calculateK30() {
        const h30 = getNumericValue('h_30'); // Use helper
        const l30 = getNumericValue('l_30'); // Use helper
        // =H30*L30/1000 (Oil * Emission factor / 1000)
        return (h30 * l30) / 1000;
    }
    
    // Row 31: Wood calculations
    function calculateF31() {
        const d31 = getNumericValue('d_31'); // Use helper
        // =D31*1000 (Wood to energy conversion)
        return d31 * 1000;
    }
    
    function calculateG31() {
        const h31 = getNumericValue('h_31'); // Use helper
        const l31 = getNumericValue('l_31'); // Use helper
        // =H31*L31 (Wood * Emission factor)
        return h31 * l31;
    }
    
    function calculateH31() {
        const d31 = getNumericValue('d_31'); // Use helper
        // =D31 (Target is same as actual for this case)
        return d31;
    }
    
    function calculateJ31() {
        const h31 = getNumericValue('h_31'); // Use helper
        // =H31*1000 (Wood to energy conversion)
        return h31 * 1000;
    }
    
    function calculateK31() {
        const h31 = getNumericValue('h_31'); // Use helper
        const l31 = getNumericValue('l_31'); // Use helper
        // =H31*L31 (Wood * Emission factor)
        return h31 * l31;
    }
    
    // Row 32: Subtotals
    function calculateF32() {
        const f27 = getNumericValue('f_27'); // Use helper
        const f28 = getNumericValue('f_28'); // Use helper
        const f29 = getNumericValue('f_29'); // Use helper
        const f30 = getNumericValue('f_30'); // Use helper
        const f31 = getNumericValue('f_31'); // Use helper
        // =SUM(F27:F31) (Sum of all energy sources)
        return f27 + f28 + f29 + f30 + f31;
    }
    
    function calculateG32() {
        const g27 = getNumericValue('g_27'); // Use helper
        const g28 = getNumericValue('g_28'); // Use helper
        const g29 = getNumericValue('g_29'); // Use helper
        const g30 = getNumericValue('g_30'); // Use helper
        const g31 = getNumericValue('g_31'); // Use helper
        const d60 = getNumericValue('d_60'); // Use helper (Offsets in tCO2e)
        // =SUM(G27:G31)-(D60*1000) (Sum of emissions minus offsets)
        return g27 + g28 + g29 + g30 + g31 - (d60 * 1000);
    }
    
    function calculateJ32() {
        const j27 = getNumericValue('j_27'); // Use helper
        const j28 = getNumericValue('j_28'); // Use helper
        const j29 = getNumericValue('j_29'); // Use helper
        const j30 = getNumericValue('j_30'); // Use helper
        const j31 = getNumericValue('j_31'); // Use helper
        // =SUM(J27:J31) (Sum of all energy sources)
        return j27 + j28 + j29 + j30 + j31;
    }
    
    function calculateK32() {
        const k27 = getNumericValue('k_27'); // Use helper
        const k28 = getNumericValue('k_28'); // Use helper
        const k29 = getNumericValue('k_29'); // Use helper
        const k30 = getNumericValue('k_30'); // Use helper
        const k31 = getNumericValue('k_31'); // Use helper
        const d60 = getNumericValue('d_60'); // Use helper (Offsets in tCO2e)
        // =SUM(K27:K31)-(D60*1000) (Sum of emissions minus offsets)
        return k27 + k28 + k29 + k30 + k31 - (d60 * 1000);
    }
    
    // Row 33: Total Net Energy
    function calculateD33() {
        const f27 = getNumericValue('f_27'); // Use helper
        const f28 = getNumericValue('f_28'); // Use helper
        const f29 = getNumericValue('f_29'); // Use helper
        const f30 = getNumericValue('f_30'); // Use helper
        const f31 = getNumericValue('f_31'); // Use helper
        const d43 = getNumericValue('d_43'); // Use helper
        const i43 = getNumericValue('i_43'); // Use helper
        // =SUM(F$27+F$28+F$29+F$30+F$31-D43-I43)/277.7777
        return (f27 + f28 + f29 + f30 + f31 - d43 - i43) / 277.7777;
    }
    
    function calculateH33() {
        const j27 = getNumericValue('j_27'); // Use helper
        const j28 = getNumericValue('j_28'); // Use helper
        const j29 = getNumericValue('j_29'); // Use helper
        const j30 = getNumericValue('j_30'); // Use helper
        const j31 = getNumericValue('j_31'); // Use helper
        const i43 = getNumericValue('i_43'); // Use helper
        const d43 = getNumericValue('d_43'); // Use helper
        // =SUM(J$27+J$28+J$29+J$30+J$31-I43-D43)/277.7777 
        return (j27 + j28 + j29 + j30 + j31 - i43 - d43) / 277.7777;
    }
    
    // Row 34: Annual Percapita Energy
    function calculateD34() {
        const f27 = getNumericValue('f_27'); // Use helper
        const f28 = getNumericValue('f_28'); // Use helper
        const d63 = getNumericValue('d_63'); // Use helper
        // =(F27+F28)/D63 (Sum of electricity and gas divided by occupants)
        return (f27 + f28) / (d63 || 1);
    }
    
    function calculateF34() {
        const d33 = getNumericValue('d_33'); // Use helper
        const d63 = getNumericValue('d_63'); // Use helper
        // =D33/D63 (Total energy per person)
        return d33 / (d63 || 1);
    }
    
    function calculateH34() {
        const j27 = getNumericValue('j_27'); // Use helper
        const j28 = getNumericValue('j_28'); // Use helper
        const d63 = getNumericValue('d_63'); // Use helper
        // =(J27+J28)/D63 (Target energy per person)
        return (j27 + j28) / (d63 || 1);
    }
    
    function calculateJ34() {
        const h33 = getNumericValue('h_33'); // Use helper
        const d63 = getNumericValue('d_63'); // Use helper
        // =H33/D63 (Target GJ per person)
        return h33 / (d63 || 1);
    }
    
    function calculateL34() {
        const k32 = getNumericValue('k_32'); // Use helper
        const d63 = getNumericValue('d_63'); // Use helper
        // =K32/D63 (Emissions per person)
        return k32 / (d63 || 1);
    }
    
    // Row 35: Primary Energy
    function calculateD35() {
        const d14 = window.TEUI.StateManager?.getValue('d_14'); // Get raw string value
        const j27 = getNumericValue('j_27'); // Use helper
        const h35 = getNumericValue('h_35'); // Use helper
        const f27 = getNumericValue('f_27'); // Use helper
        // =IF(D14="Targeted Use", J27*H35, F27*H35)
        if (d14 === "Targeted Use") {
            return j27 * h35;
        } else {
            return f27 * h35;
        }
    }
    
    function calculateF35() {
        const d35 = getNumericValue('d_35'); // Use helper
        const h15 = getNumericValue('h_15'); // Use helper
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
        // Update subtotals immediately to ensure correct initial values
        updateSubtotals();
        
            // Trigger initial calculations after factors and subtotals are set
        if (window.TEUI && window.TEUI.Calculator) {
            window.TEUI.Calculator.calculateSection(sectionRows.metadata.sectionId);
        }
            // console.log("Section 4 Initial Calculation Triggered");
        }, 50); // Short delay to allow potential state updates
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
        
        // Keep calculations exposed if needed
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
             calculateL34: calculateL34,
             calculateD35: calculateD35,
             calculateF35: calculateF35
        },
        
        // Keep other exposed functions if needed
        updateElectricityEmissionFactor: updateElectricityEmissionFactor,
        updateSubtotals: updateSubtotals,
        updateDependentTotals: updateDependentTotals
    };
})();