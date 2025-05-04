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
     * Safely parses a numeric value from StateManager or DOM, handling potential strings with commas.
     * Uses the global parseNumeric if available, otherwise provides a fallback.
     * @param {string} fieldId - The ID of the field to retrieve the value for.
     * @returns {number} The parsed numeric value, or 0 if parsing fails.
     */
    function getNumericValue(fieldId) {
        if (typeof window.TEUI?.parseNumeric === 'function') {
            // Prefer global parseNumeric and StateManager
            return window.TEUI.parseNumeric(window.TEUI.StateManager?.getValue(fieldId)) || 0;
        } else {
            // Fallback parsing logic if global is missing
            const value = getFieldValue(fieldId); // Use local getFieldValue
            if (value === null || value === undefined) return 0;
            if (typeof value === 'number') return value;
            if (typeof value === 'string') {
                const cleanedValue = value.replace(/[$,%]/g, '').replace(/,/g, '').trim();
                if (cleanedValue === '') return 0;
                const parsed = parseFloat(cleanedValue);
                return isNaN(parsed) ? 0 : parsed;
            }
            return 0;
        }
    }
    
    /**
     * Formats a number according to the project's display rules.
     * Handles specific formats like percentages and currency.
     * @param {number} value - The number to format.
     * @param {number} [decimals=2] - Number of decimal places.
     * @param {string} [format='number'] - The type of format ('number', 'currency', 'percent').
     * @returns {string} The formatted number as a string.
     */
    function formatNumber(value, decimals = 2, format = 'number') {
        // Use global formatter if available
        if (typeof window.TEUI?.formatNumber === 'function') {
            return window.TEUI.formatNumber(value, decimals, format);
        }

        // Fallback local implementation
        const num = Number(value);
        if (isNaN(num)) {
            return format === 'currency' ? '$0.00' : (format === 'percent' ? '0%' : '0.00');
        }

        if (format === 'currency') {
            return '$' + num.toLocaleString('en-US', { minimumFractionDigits: decimals, maximumFractionDigits: decimals });
        } else if (format === 'percent') {
            return (num * 100).toFixed(decimals) + '%';
        } else {
            return num.toLocaleString('en-US', { minimumFractionDigits: decimals, maximumFractionDigits: decimals });
        }
    }
    
    /**
     * Sets a calculated value in the StateManager and updates the corresponding DOM element.
     * @param {string} fieldId - The ID of the field to update.
     * @param {number} rawValue - The raw calculated numeric value.
     * @param {number} [decimals=2] - Number of decimal places for display.
     * @param {string} [format='number'] - The format type for display.
     */
    function setCalculatedValue(fieldId, rawValue, decimals = 2, format = 'number') {
        const formattedValue = formatNumber(rawValue, decimals, format);
        
        // Store raw value as string in StateManager for precision
        if (window.TEUI?.StateManager?.setValue) {
             // Convert NaN/Infinity to null or a specific string if needed
             let stateValue = isFinite(rawValue) ? rawValue.toString() : null; 
            window.TEUI.StateManager.setValue(fieldId, stateValue, 'calculated');
        }
        
        // Update DOM with formatted value or 'N/A'
        const element = document.querySelector(`[data-field-id="${fieldId}"]`);
        if (element) {
            element.textContent = isFinite(rawValue) ? formattedValue : 'N/A';
            // Add/remove classes based on value if needed (e.g., for negatives)
            element.classList.toggle('negative-value', isFinite(rawValue) && rawValue < 0);
        } else {
            // console.warn(`setCalculatedValue: Element not found for fieldId ${fieldId}`);
        }
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
        const element = document.querySelector(`[data-field-id="${fieldId}"]`);
        if (element) {
            return element.value !== undefined ? element.value : element.textContent;
        }
        return null;
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
                    
                    // Immediately update dependent calculated fields visually
                    updateDependentFields(fieldId, newValue);
                    
                    // Trigger calculations
                    if (window.TEUI && window.TEUI.Calculator) {
                        window.TEUI.Calculator.calculateSection(sectionRows.metadata.sectionId);
                    }
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
            // Listen for province changes (dd_d_19)
            window.TEUI.StateManager.addListener('dd_d_19', updateElectricityEmissionFactor);
            
            // Also listen for province changes with d_19 as a fallback
            window.TEUI.StateManager.addListener('d_19', updateElectricityEmissionFactor);
            
            // Listen for reporting year changes (h_12)
            window.TEUI.StateManager.addListener('h_12', updateElectricityEmissionFactor);
            window.TEUI.StateManager.addListener('d_12', updateElectricityEmissionFactor);
            
            // *** ADDING CODE BELOW THIS LINE ***
            const netElectricityUpdateCallback = function() {
                console.log("[S4 DEBUG] Entering netElectricityUpdateCallback"); 
                
                // Fetch values 
                const d27 = window.TEUI.parseNumeric(getFieldValue('d_27')) || 0;
                const h27 = window.TEUI.parseNumeric(getFieldValue('h_27')) || 0; 
                const l27 = window.TEUI.parseNumeric(getFieldValue('l_27')) || 0; 
                const d43 = window.TEUI.parseNumeric(getFieldValue('d_43')) || 0; // Onsite Renewables
                const i43 = window.TEUI.parseNumeric(getFieldValue('i_43')) || 0; // Offsite REC
                console.log(`[S4 DEBUG] netElectricityUpdateCallback read values: h27=${h27}, d43=${d43}, i43=${i43}, l27=${l27}`);

                // Perform calculations directly
                // Note: Formula for f27 might depend only on d27 & d43, check requirements.
                // Assuming F27 = D27 - D43 based on common practice & lack of i43 dependency in Excel for F27.
                const f27New = d27 - d43; 
                // CORRECTED FORMULA: Calculate j_27 = h27 - d43 - i43
                const j27New = h27 - d43 - i43; 
                const g27New = f27New * (l27 / 1000); 
                const k27New = j27New * (l27 / 1000); 

                // Update net usage fields
                setCalculatedValue('f_27', f27New, 'number-2dp-comma'); 
                setCalculatedValue('j_27', j27New, 'number-2dp-comma'); 
                // Update emission fields
                setCalculatedValue('g_27', g27New, 'number-2dp-comma'); 
                setCalculatedValue('k_27', k27New, 'number-2dp-comma'); 

                updateSubtotals(); // Update totals after row 27 changes
            };

            window.TEUI.StateManager.addListener('d_43', netElectricityUpdateCallback); // Onsite Renewables (affects f_27 & j_27)
            // window.TEUI.StateManager.addListener('i_44', netElectricityUpdateCallback); // Listener no longer needed
            window.TEUI.StateManager.addListener('i_43', netElectricityUpdateCallback); // Offsite REC Subtotal (affects f_27 & j_27)
            // *** ADDING CODE ABOVE THIS LINE ***
            
            // Direct DOM event listener as fallback
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
        // console.log(`Emission factor for ${province} in ${year}: ${factor}`);
        
        // Update the l_27 field and StateManager
        const l27El = document.querySelector('[data-field-id="l_27"]');
        if (l27El) {
            l27El.textContent = formatNumber(factor);
            
            // Also update StateManager
            if (window.TEUI && window.TEUI.StateManager) {
                window.TEUI.StateManager.setValue('l_27', factor.toString(), 'calculated');
            }
            
            // Update dependent emissions calculations for ACTUAL emissions
            const f27El = document.querySelector('[data-field-id="f_27"]');
            const g27El = document.querySelector('[data-field-id="g_27"]');
            
            if (f27El && g27El) {
                const f27Value = parseNumeric(f27El.textContent.trim());
                const g27Value = calculateG27(f27Value, factor);
                g27El.textContent = formatNumber(g27Value);
                
                // Update StateManager
                if (window.TEUI && window.TEUI.StateManager) {
                    window.TEUI.StateManager.setValue('g_27', g27Value.toString(), 'calculated');
                }
            }
            
            // Update dependent emissions calculations for TARGET emissions
            const j27El = document.querySelector('[data-field-id="j_27"]');
            const k27El = document.querySelector('[data-field-id="k_27"]');
            
            if (j27El && k27El) {
                const j27Value = parseNumeric(j27El.textContent.trim());
                const k27Value = calculateK27(j27Value, factor);
                k27El.textContent = formatNumber(k27Value);
                
                // Update StateManager
                if (window.TEUI && window.TEUI.StateManager) {
                    window.TEUI.StateManager.setValue('k_27', k27Value.toString(), 'calculated');
                }
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
        // Get all the values needed for subtotals
        const f27El = document.querySelector('[data-field-id="f_27"]');
        const f28El = document.querySelector('[data-field-id="f_28"]');
        const f29El = document.querySelector('[data-field-id="f_29"]');
        const f30El = document.querySelector('[data-field-id="f_30"]');
        const f31El = document.querySelector('[data-field-id="f_31"]');
        
        const g27El = document.querySelector('[data-field-id="g_27"]');
        const g28El = document.querySelector('[data-field-id="g_28"]');
        const g29El = document.querySelector('[data-field-id="g_29"]');
        const g30El = document.querySelector('[data-field-id="g_30"]');
        const g31El = document.querySelector('[data-field-id="g_31"]');
        
        const j27El = document.querySelector('[data-field-id="j_27"]');
        const j28El = document.querySelector('[data-field-id="j_28"]');
        const j29El = document.querySelector('[data-field-id="j_29"]');
        const j30El = document.querySelector('[data-field-id="j_30"]');
        const j31El = document.querySelector('[data-field-id="j_31"]');
        
        const k27El = document.querySelector('[data-field-id="k_27"]');
        const k28El = document.querySelector('[data-field-id="k_28"]');
        const k29El = document.querySelector('[data-field-id="k_29"]');
        const k30El = document.querySelector('[data-field-id="k_30"]');
        const k31El = document.querySelector('[data-field-id="k_31"]');
        
        const d60El = document.querySelector('[data-field-id="d_60"]');
        
        // Update f_32 (Operational GHG & Energy Subtotals)
        const f32El = document.querySelector('[data-field-id="f_32"]');
        if (f32El && f27El && f28El && f29El && f30El && f31El) {
            // Sum the values directly rather than using the calculation function
            const f27Value = parseNumeric(f27El.textContent.trim());
            const f28Value = parseNumeric(f28El.textContent.trim());
            const f29Value = parseNumeric(f29El.textContent.trim());
            const f30Value = parseNumeric(f30El.textContent.trim());
            const f31Value = parseNumeric(f31El.textContent.trim());
            
            const f32Value = f27Value + f28Value + f29Value + f30Value + f31Value;
            f32El.textContent = formatNumber(f32Value);
            
            // Replace multiple console logs with one concise log
            // console.log(`f_32 updated: ${formatNumber(f32Value)}`);
            
            // CRITICAL: Update StateManager with this real value for TEUI calculation
            if (window.TEUI && window.TEUI.StateManager) {
                window.TEUI.StateManager.setValue("f_32", f32Value.toString(), "calculated");
                
                // Check for zero energy case and force immediate TEUI update
                if (f32Value === 0) {
                    // Keep this important log
                    // console.log("Zero energy detected - forcing TEUI update");
                    if (typeof window.calculateTEUI === 'function') {
                        window.calculateTEUI();
                    } else if (window.TEUI.StateManager.updateTEUICalculations) {
                        window.TEUI.StateManager.updateTEUICalculations('zero-energy-case');
                    }
                    return;
                }
                
                // Force TEUI recalculation after energy update
                setTimeout(() => {
                    if (typeof window.calculateTEUI === 'function') {
                        window.calculateTEUI();
                    }
                }, 100);
            }
        }
        
        // Update g_32 (Emissions subtotal)
        const g32El = document.querySelector('[data-field-id="g_32"]');
        if (g32El && g27El && g28El && g29El && g30El && g31El) {
            // Sum the values directly rather than using the calculation function
            const g27Value = parseNumeric(g27El.textContent.trim());
            const g28Value = parseNumeric(g28El.textContent.trim());
            const g29Value = parseNumeric(g29El.textContent.trim());
            const g30Value = parseNumeric(g30El.textContent.trim());
            const g31Value = parseNumeric(g31El.textContent.trim());
            
            // Get offsets value (if available)
            const d60Value = d60El ? parseNumeric(d60El.textContent.trim()) * 1000 : 0;
            
            const g32Value = g27Value + g28Value + g29Value + g30Value + g31Value - d60Value;
            g32El.textContent = formatNumber(g32Value);
            
            // Replace verbose log with concise one
            // console.log(`g_32 updated: ${formatNumber(g32Value)}`);
            
            // CRITICAL: Update StateManager for g_32
            if (window.TEUI && window.TEUI.StateManager) {
                window.TEUI.StateManager.setValue("g_32", g32Value.toString(), "calculated");
            }
        }
        
        // Update j_32 (Target subtotal)
        const j32El = document.querySelector('[data-field-id="j_32"]');
        if (j32El && j27El && j28El && j29El && j30El && j31El) {
            // Sum the values directly rather than using the calculation function
            const j27Value = parseNumeric(j27El.textContent.trim());
            const j28Value = parseNumeric(j28El.textContent.trim());
            const j29Value = parseNumeric(j29El.textContent.trim());
            const j30Value = parseNumeric(j30El.textContent.trim());
            const j31Value = parseNumeric(j31El.textContent.trim());
            
            const j32Value = j27Value + j28Value + j29Value + j30Value + j31Value;
            j32El.textContent = formatNumber(j32Value);
            
            // Replace verbose log with concise one
            // console.log(`j_32 updated: ${formatNumber(j32Value)}`);
            
            // CRITICAL: Update StateManager with this real value for TEUI calculation
            if (window.TEUI && window.TEUI.StateManager) {
                window.TEUI.StateManager.setValue("j_32", j32Value.toString(), "calculated");
            }
        }
        
        // Update k_32 (Target emissions subtotal)
        const k32El = document.querySelector('[data-field-id="k_32"]');
        if (k32El && k27El && k28El && k29El && k30El && k31El) {
            // Sum the values directly rather than using the calculation function
            const k27Value = parseNumeric(k27El.textContent.trim());
            const k28Value = parseNumeric(k28El.textContent.trim());
            const k29Value = parseNumeric(k29El.textContent.trim());
            const k30Value = parseNumeric(k30El.textContent.trim());
            const k31Value = parseNumeric(k31El.textContent.trim());
            
            // Get offsets value (if available)
            const d60Value = d60El ? parseNumeric(d60El.textContent.trim()) * 1000 : 0;
            
            const k32Value = k27Value + k28Value + k29Value + k30Value + k31Value - d60Value;
            k32El.textContent = formatNumber(k32Value);
            
            // Replace verbose log with concise one
            // console.log(`k_32 updated: ${formatNumber(k32Value)}`);
            
            // CRITICAL: Update StateManager for k_32
            if (window.TEUI && window.TEUI.StateManager) {
                window.TEUI.StateManager.setValue("k_32", k32Value.toString(), "calculated");
            }
        }
        
        // Also update other dependent fields if needed
        updateDependentTotals();
    }
    
    /**
     * Update any other fields that depend on the subtotals
     */
    function updateDependentTotals() {
        // Update d_33, h_33, etc. if needed
        // For example:
        const f32El = document.querySelector('[data-field-id="f_32"]');
        const d43El = document.querySelector('[data-field-id="d_43"]');
        const i43El = document.querySelector('[data-field-id="i_43"]');
        const d33El = document.querySelector('[data-field-id="d_33"]');
        
        if (f32El && d33El) {
            const f32Value = parseNumeric(f32El.textContent.trim());
            const d43Value = d43El ? parseNumeric(d43El.textContent.trim()) : 0;
            const i43Value = i43El ? parseNumeric(i43El.textContent.trim()) : 0;
            
            // Calculate d_33 = (f32 - d43 - i43) / 277.7777
            if (d33El) {
                const d33Value = (f32Value - d43Value - i43Value) / 277.7777;
                d33El.textContent = formatNumber(d33Value);
            }
        }
        
        // Update other dependent values as needed
    }
    
    /**
     * Format a number for display
     * @param {number} value - The number to format
     * @returns {string} - Formatted number string
     */
    function formatNumber(value) {
        // Check if number is very small
        if (Math.abs(value) < 0.01 && value !== 0) {
            return value.toExponential(2);
        }
        
        // For subtotal rows, always use 2 decimal places for consistency
        if (arguments.callee.caller && 
            (arguments.callee.caller.name === 'updateSubtotals' || 
             arguments.callee.caller.name === 'updateDependentTotals')) {
            return parseFloat(value).toLocaleString(undefined, {
                minimumFractionDigits: 2,
                maximumFractionDigits: 2
            });
        }
        
        // Check if number is integer
        if (Number.isInteger(value)) {
            return value.toLocaleString();
        }
        
        // Otherwise format with 2 decimal places
        return parseFloat(value).toLocaleString(undefined, {
            minimumFractionDigits: 2,
            maximumFractionDigits: 2
        });
    }
    
    //==========================================================================
    // PART 6: CALCULATION FUNCTIONS
    //==========================================================================
    
    // Helper function to safely parse numeric values with commas
    function parseNumeric(value) {
        if (typeof value === 'string') {
            // Remove commas from string values before parsing
            return parseFloat(value.replace(/,/g, '')) || 0;
        }
        return parseFloat(value || 0);
    }
    
    /**
     * Define section-specific calculation functions here
     * These will be called by the Calculator module based on field dependencies
     */
    
    // Row 27: Electricity calculations
    function calculateF27(d27, d43, i43) { 
        // =D27-D43-I43 (Total Electricity Use - Onsite Energy - Offsite REC Subtotal)
        // Use parseNumeric to handle potential commas from getFieldValue
        return parseNumeric(d27) - parseNumeric(d43) - parseNumeric(i43);
    }
    
    function calculateG27(f27, l27) {
        // =F27*L27/1000 (Actual Net * Emission factor / 1000)
        // Dividing by 1000 converts from gCO2e to kgCO2e
        // Use parseNumeric here too for consistency
        return (parseNumeric(f27) * parseNumeric(l27)) / 1000;
    }
    
    function calculateH27(d136) {
        // =D$136 (Target value comes from another section)
        // Use parseNumeric here too
        return parseNumeric(d136);
    }
    
    function calculateJ27(h27, d43, i43) { 
        // =H27-D43-I43 (Target Energy - Onsite Energy - Offsite REC Subtotal)
        // Use parseNumeric to handle potential commas from getFieldValue
        return parseNumeric(h27) - parseNumeric(d43) - parseNumeric(i43);
    }
    
    function calculateK27(j27, l27) {
        // =J27*L27/1000 (Target Net * Emission factor / 1000)
        // Dividing by 1000 converts from gCO2e to kgCO2e
        // Use parseNumeric here too for consistency
        return (parseNumeric(j27) * parseNumeric(l27)) / 1000;
    }
    
    // Row 28: Gas calculations
    function calculateF28(d28) {
        // =D28*0.0373*277.7778 (Gas volume to energy conversion)
        // Use parseNumeric
        return parseNumeric(d28) * 0.0373 * 277.7778;
    }
    
    function calculateG28(d28, l28) {
        // =(D28)*L28/1000 (Gas volume * Emission factor / 1000)
        // Dividing by 1000 converts from gCO2e to kgCO2e
        // Use parseNumeric
        return (parseNumeric(d28) * parseNumeric(l28)) / 1000;
    }
    
    function calculateH28(d51, e51, d113, h115) {
        // =IF(AND($D$113="Gas", $D$51="Gas"), E51+H115, IF($D$51="Gas", E51, IF($D$113="Gas", H115, 0)))
        // String comparison is fine, but parse numbers
        if (d113 === "Gas" && d51 === "Gas") {
            return parseNumeric(e51) + parseNumeric(h115);
        } else if (d51 === "Gas") {
            return parseNumeric(e51);
        } else if (d113 === "Gas") {
            return parseNumeric(h115);
        } else {
            return 0;
        }
    }
    
    function calculateJ28(h28) {
        // =H28*0.0373*277.7778 (Gas volume to energy conversion)
        // Use parseNumeric
        return parseNumeric(h28) * 0.0373 * 277.7778;
    }
    
    function calculateK28(h28, l28) {
        // =H28*L28/1000 (Gas volume * Emission factor / 1000)
        // Dividing by 1000 converts from gCO2e to kgCO2e
        // Use parseNumeric
        return (parseNumeric(h28) * parseNumeric(l28)) / 1000;
    }
    
    // Row 29: Propane calculations
    function calculateF29(d29) {
        // =D29*14.019 (Propane to energy conversion)
        // Use parseNumeric
        return parseNumeric(d29) * 14.019;
    }
    
    function calculateG29(d29, l29) {
        // =D29*L29/1000 (Propane * Emission factor / 1000)
        // Dividing by 1000 converts from gCO2e to kgCO2e
        // Use parseNumeric
        return (parseNumeric(d29) * parseNumeric(l29)) / 1000;
    }
    
    function calculateH29(d29) {
        // =D29 (Target is same as actual for this case)
        // Use parseNumeric
        return parseNumeric(d29);
    }
    
    function calculateJ29(h29) {
        // =H29*14.019 (Propane to energy conversion)
        // Use parseNumeric
        return parseNumeric(h29) * 14.019;
    }
    
    function calculateK29(h29, l29) {
        // =H29*L29/1000 (Propane * Emission factor / 1000)
        // Dividing by 1000 converts from gCO2e to kgCO2e
        // Use parseNumeric
        return (parseNumeric(h29) * parseNumeric(l29)) / 1000;
    }
    
    // Row 30: Oil calculations
    function calculateF30(d30) {
        // =D30*36.72*0.2777778 (Oil to energy conversion)
        // Use parseNumeric
        return parseNumeric(d30) * 36.72 * 0.2777778;
    }
    
    function calculateG30(d30, l30) {
        // =D30*L30/1000 (Oil * Emission factor / 1000)
        // Dividing by 1000 converts from gCO2e to kgCO2e
        // Use parseNumeric
        return (parseNumeric(d30) * parseNumeric(l30)) / 1000;
    }
    
    function calculateH30(d51, d113, k54, f115) {
        // =IF(AND($D$113="Oil", $D$51="Oil"), $K$54+$F$115, IF($D$51="Oil", K54, IF($D$113="Oil", F115, 0)))
        // String comparison fine, parse numbers
        if (d113 === "Oil" && d51 === "Oil") {
            return parseNumeric(k54) + parseNumeric(f115);
        } else if (d51 === "Oil") {
            return parseNumeric(k54);
        } else if (d113 === "Oil") {
            return parseNumeric(f115);
        } else {
            return 0;
        }
    }
    
    function calculateJ30(h30) {
        // =H30*36.72*0.2777778 (Oil to energy conversion)
        // Use parseNumeric
        return parseNumeric(h30) * 36.72 * 0.2777778;
    }
    
    function calculateK30(h30, l30) {
        // =H30*L30/1000 (Oil * Emission factor / 1000)
        // Dividing by 1000 converts from gCO2e to kgCO2e
        // Use parseNumeric
        return (parseNumeric(h30) * parseNumeric(l30)) / 1000;
    }
    
    // Row 31: Wood calculations
    function calculateF31(d31) {
        // =D31*1000 (Wood to energy conversion)
        // Use parseNumeric
        return parseNumeric(d31) * 1000;
    }
    
    function calculateG31(h31, l31) {
        // =H31*L31 (Wood * Emission factor)
        // Use parseNumeric
        return parseNumeric(h31) * parseNumeric(l31);
    }
    
    function calculateH31(d31) {
        // =D31 (Target is same as actual for this case)
        // Use parseNumeric
        return parseNumeric(d31);
    }
    
    function calculateJ31(h31) {
        // =H31*1000 (Wood to energy conversion)
        // Use parseNumeric
        return parseNumeric(h31) * 1000;
    }
    
    function calculateK31(h31, l31) {
        // =H31*L31 (Wood * Emission factor)
        // Use parseNumeric
        return parseNumeric(h31) * parseNumeric(l31);
    }
    
    // Row 32: Subtotals
    function calculateF32(f27, f28, f29, f30, f31) {
        // =SUM(F27:F31) (Sum of all energy sources)
        // Use parseNumeric
        return parseNumeric(f27) + parseNumeric(f28) + parseNumeric(f29) + 
               parseNumeric(f30) + parseNumeric(f31);
    }
    
    function calculateG32(g27, g28, g29, g30, g31, d60) {
        // =SUM(G27:G31)-(D60*1000) (Sum of emissions minus offsets)
        // Use parseNumeric
        return parseNumeric(g27) + parseNumeric(g28) + parseNumeric(g29) + 
               parseNumeric(g30) + parseNumeric(g31) - (parseNumeric(d60) * 1000);
    }
    
    function calculateJ32(j27, j28, j29, j30, j31) {
        // =SUM(J27:J31) (Sum of all energy sources)
        // Use parseNumeric
        return parseNumeric(j27) + parseNumeric(j28) + parseNumeric(j29) + 
               parseNumeric(j30) + parseNumeric(j31);
    }
    
    function calculateK32(k27, k28, k29, k30, k31, d60) {
        // =SUM(K27:K31)-(D60*1000) (Sum of emissions minus offsets)
        // Use parseNumeric
        return parseNumeric(k27) + parseNumeric(k28) + parseNumeric(k29) + 
               parseNumeric(k30) + parseNumeric(k31) - (parseNumeric(d60) * 1000);
    }
    
    // Row 33: Total Net Energy
    function calculateD33(f27, f28, f29, f30, f31, d43, i43) { 
        // =SUM(F$27+F$28+F$29+F$30+F$31-D43-I43)/277.7777
        // Use parseNumeric
        return (parseNumeric(f27) + parseNumeric(f28) + parseNumeric(f29) + 
                parseNumeric(f30) + parseNumeric(f31) - parseNumeric(d43) - 
                parseNumeric(i43)) / 277.7777;
    }
    
    // Fixed function signature and body to use i_43 (consistent with j_27)
    function calculateH33(j27, j28, j29, j30, j31, i43, d43) { 
        // =SUM(J$27+J$28+J$29+J$30+J$31-I43-D43)/277.7777 
        // Use parseNumeric
        return (parseNumeric(j27) + parseNumeric(j28) + parseNumeric(j29) + 
                parseNumeric(j30) + parseNumeric(j31) - parseNumeric(i43) - 
                parseNumeric(d43)) / 277.7777;
    }
    
    // Row 34: Annual Percapita Energy
    function calculateD34(f27, f28, d63) {
        // =(F27+F28)/D63 (Sum of electricity and gas divided by occupants)
        // Use parseNumeric
        return (parseNumeric(f27) + parseNumeric(f28)) / parseNumeric(d63 || 1);
    }
    
    function calculateF34(d33, d63) {
        // =D33/D63 (Total energy per person)
        // Use parseNumeric
        return parseNumeric(d33) / parseNumeric(d63 || 1);
    }
    
    function calculateH34(j27, j28, d63) {
        // =(J27+J28)/D63 (Target energy per person)
        // Use parseNumeric
        return (parseNumeric(j27) + parseNumeric(j28)) / parseNumeric(d63 || 1);
    }
    
    function calculateJ34(h33, d63) {
        // =H33/D63 (Target GJ per person)
        // Use parseNumeric
        return parseNumeric(h33) / parseNumeric(d63 || 1);
    }
    
    function calculateL34(k32, d63) {
        // =K32/D63 (Emissions per person)
        // Use parseNumeric
        return parseNumeric(k32) / parseNumeric(d63 || 1);
    }
    
    // Row 35: Primary Energy
    function calculateD35(d14, j27, h35, f27) {
        // =IF(D14="Targeted Use", J27*H35, F27*H35)
        // String comparison fine, parse numbers
        if (d14 === "Targeted Use") {
            return parseNumeric(j27) * parseNumeric(h35);
        } else {
            return parseNumeric(f27) * parseNumeric(h35);
        }
    }
    
    function calculateF35(d35, h15) {
        // =D35/H15 (Energy per floor area)
        // Use parseNumeric
        return parseNumeric(d35) / parseNumeric(h15 || 1);
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
        
        // Initialize event handlers
        initializeEventHandlers();
        
        // Register calculation functions
        registerCalculations();
        
        // Update electricity emission factor based on province and year
        updateElectricityEmissionFactor();
        
        // Update subtotals immediately to ensure correct initial values
        updateSubtotals();
        
        // Trigger initial calculations
        if (window.TEUI && window.TEUI.Calculator) {
            window.TEUI.Calculator.calculateSection(sectionRows.metadata.sectionId);
        }
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

// Initialize when the section is rendered
document.addEventListener('teui-section-rendered', function(event) {
    if (event.detail && event.detail.sectionId === window.TEUI.SectionModules.sect04.getMetadata().sectionId) {
        // console.log(`${window.TEUI.SectionModules.sect04.getMetadata().sectionName} section rendering complete event received`);
        window.TEUI.SectionModules.sect04.onSectionRendered();
    }
});

// Also hook into the overall rendering complete event
document.addEventListener('teui-rendering-complete', function() {
    // console.log("All rendering complete, checking section");
    const sectionId = window.TEUI.SectionModules.sect04.getMetadata().sectionId;
    const section = document.getElementById(sectionId);
    if (section && section.querySelector('.section-content')) {
        window.TEUI.SectionModules.sect04.onSectionRendered();
    }
});

// Add initialization function to handle default values
// Rename to avoid conflicts with Section09
function initializeEmissionsFactorDefaults() {
    // Replace detailed log with a simpler one
    // console.log("Initializing emission factor defaults");
    
    // We need to ensure Ontario is selected by default for emissions calculations
    if (window.TEUI && window.TEUI.StateManager) {
        // Only set default if no province is already set
        if (!window.TEUI.StateManager.getValue('d_19')) {
            // Remove redundant log
            window.TEUI.StateManager.setValue('d_19', 'ON', 'default');
            window.TEUI.StateManager.setValue('dd_d_19', 'ON', 'default');
        }
    }
    
    // Use safe function calling approach
    try {
        // Check if the function exists in this module
        if (typeof updateElectricityEmissionFactor === 'function') {
            // Remove redundant log
            updateElectricityEmissionFactor();
        } 
        // Check if it's available in the module's public API
        else if (window.TEUI?.SectionModules?.sect04?.updateElectricityEmissionFactor) {
            // Remove redundant log
            window.TEUI.SectionModules.sect04.updateElectricityEmissionFactor();
        }
        else {
            // Keep this diagnostic log
            // console.log("updateElectricityEmissionFactor function not available yet");
        }
    } catch (error) {
        // console.warn("Could not update electricity emission factor during initialization:", error);
    }
}

// Move the function to run at the end of the initialization
/**
 * Called when section is rendered
 */
function onSectionRendered() {
    // Replace detailed log with a simpler one
    // console.log("Section04 rendering");

    // Initialize event handlers
    initializeEventHandlers();
    
    // Set up cross-section listeners
    setupCrossSectionListeners();
    
    // Run initial calculations
    calculateAll();
    
    // Update subtotals initially
    updateSubtotals();
    
    // Set initial values AFTER all functions are defined
    setTimeout(function() {
        // Remove redundant log
        initializeEmissionsFactorDefaults(); // Updated function name
        
        // Force electricity emission factor update
        if (typeof updateElectricityEmissionFactor === 'function') {
            updateElectricityEmissionFactor();
        }
    }, 100);
    
    // Keep this to confirm completion
    // console.log("Section04 initialization complete");
}

/**
 * Helper function to get a field value, preferring StateManager
 */
function getFieldValue(fieldId) {
    if (window.TEUI && window.TEUI.StateManager) {
        const stateValue = window.TEUI.StateManager.getValue(fieldId);
        if (stateValue !== null && stateValue !== undefined) return stateValue;
    }
    const element = document.querySelector(`[data-field-id="${fieldId}"]`);
    if (element) {
        // Use textContent for spans/divs, value for inputs/selects
        return element.value !== undefined ? element.value : element.textContent.trim();
    }
    return '0'; // Default to 0 if not found
}

/**
 * Set up listeners for values from other sections that affect calculations in this section
 */
function setupCrossSectionListeners() {
    if (window.TEUI && window.TEUI.StateManager) {
        // Listen for province changes (dd_d_19)
        window.TEUI.StateManager.addListener('dd_d_19', updateElectricityEmissionFactor);
        
        // Also listen for province changes with d_19 as a fallback
        window.TEUI.StateManager.addListener('d_19', updateElectricityEmissionFactor);
        
        // Listen for reporting year changes (h_12)
        window.TEUI.StateManager.addListener('h_12', updateElectricityEmissionFactor);
        window.TEUI.StateManager.addListener('d_12', updateElectricityEmissionFactor);
        
        // *** ADDING CODE BELOW THIS LINE ***
        const netElectricityUpdateCallback = function() {
            console.log("[S4 DEBUG] Entering netElectricityUpdateCallback"); 
            
            // Fetch values 
            const d27 = window.TEUI.parseNumeric(getFieldValue('d_27')) || 0;
            const h27 = window.TEUI.parseNumeric(getFieldValue('h_27')) || 0; 
            const l27 = window.TEUI.parseNumeric(getFieldValue('l_27')) || 0; 
            const d43 = window.TEUI.parseNumeric(getFieldValue('d_43')) || 0; // Onsite Renewables
            const i43 = window.TEUI.parseNumeric(getFieldValue('i_43')) || 0; // Offsite REC
            console.log(`[S4 DEBUG] netElectricityUpdateCallback read values: h27=${h27}, d43=${d43}, i43=${i43}, l27=${l27}`);

            // Perform calculations directly
            // Note: Formula for f27 might depend only on d27 & d43, check requirements.
            // Assuming F27 = D27 - D43 based on common practice & lack of i43 dependency in Excel for F27.
            const f27New = d27 - d43; 
            // CORRECTED FORMULA: Calculate j_27 = h27 - d43 - i43
            const j27New = h27 - d43 - i43; 
            const g27New = f27New * (l27 / 1000); 
            const k27New = j27New * (l27 / 1000); 

            // Update net usage fields
            setCalculatedValue('f_27', f27New, 'number-2dp-comma'); 
            setCalculatedValue('j_27', j27New, 'number-2dp-comma'); 
            // Update emission fields
            setCalculatedValue('g_27', g27New, 'number-2dp-comma'); 
            setCalculatedValue('k_27', k27New, 'number-2dp-comma'); 

            updateSubtotals(); // Update totals after row 27 changes
        };

        window.TEUI.StateManager.addListener('d_43', netElectricityUpdateCallback); // Onsite Renewables (affects f_27 & j_27)
        // window.TEUI.StateManager.addListener('i_44', netElectricityUpdateCallback); // Listener no longer needed
        window.TEUI.StateManager.addListener('i_43', netElectricityUpdateCallback); // Offsite REC Subtotal (affects f_27 & j_27)
        // *** ADDING CODE ABOVE THIS LINE ***
        
        // Direct DOM event listener as fallback
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
 * Placeholder function for calculating percentages.
 * TODO: Implement actual percentage calculation logic if needed.
 */
function calculatePercentages() {
    // console.warn("calculatePercentages called, but logic is not implemented yet.");
    // Add logic here to calculate and set any percentage fields if required by Section 4.
    // For example:
    // const totalActualEmissions = getNumericValue('g_32');
    // const elecActualEmissions = getNumericValue('g_27');
    // const elecPercent = totalActualEmissions > 0 ? (elecActualEmissions / totalActualEmissions) * 100 : 0;
    // setCalculatedValue('some_percentage_field_id', elecPercent, 0, 'percent');
}