/**
 * 4011-Section04.js
 * Actual vs. Target Energy & Carbon (Section 4) module for TEUI Calculator 4.011
 * 
 * IT-DEPENDS MIGRATION: Complete
 * - Dual-engine architecture for Reference/Application separation
 * - IT-DEPENDS calculations registered with StateManager
 * - Recursion protection implemented
 */

// Ensure namespace exists
window.TEUI = window.TEUI || {};
window.TEUI.SectionModules = window.TEUI.SectionModules || {};
window.TEUI.sect04 = window.TEUI.sect04 || {};
window.TEUI.sect04.calculationInProgress = false;

// Section 4: Actual vs. Target Energy & Carbon Module
window.TEUI.SectionModules.sect04 = (function() {
    // Recursion protection flags
    let referenceCalculationInProgress = false;
    let targetCalculationInProgress = false;
    
    //==========================================================================
    // HELPER FUNCTIONS
    //==========================================================================
    
    /**
     * Get numeric value from StateManager
     */
    function getNumericValue(fieldId, defaultValue = 0) {
        const rawValue = window.TEUI?.StateManager?.getValue(fieldId);
        return window.TEUI?.parseNumeric?.(rawValue, defaultValue) || defaultValue;
    }
    
    /**
     * Get field value from StateManager or DOM
     */
    function getFieldValue(fieldId) {
        if (window.TEUI?.StateManager?.getValue) {
            const value = window.TEUI.StateManager.getValue(fieldId);
            if (value !== null && value !== undefined) return value.toString();
        }
        
        const element = document.querySelector(`[data-field-id="${fieldId}"]`); 
        return element ? (element.value !== undefined ? element.value : element.textContent) : null;
    }
    
    /**
     * Get Application numeric value
     */
    function getAppNumericValue(fieldId, defaultValue = 0) {
        const rawValue = window.TEUI?.StateManager?.getApplicationValue?.(fieldId) || getFieldValue(fieldId);
        return window.TEUI?.parseNumeric?.(rawValue, defaultValue) ?? defaultValue;
    }
    
    /**
     * Get Reference numeric value
     */
    function getRefNumericValue(fieldId, defaultValue = 0) {
        // Try different sources for reference values in order of preference
        
        // Method 1: First try StateManager.getReferenceValue (best practice)
        if (window.TEUI?.StateManager?.getReferenceValue) {
            const refValue = window.TEUI.StateManager.getReferenceValue(fieldId);
            if (refValue !== null && refValue !== undefined) {
                return window.TEUI?.parseNumeric?.(refValue, defaultValue) ?? defaultValue;
            }
        }
        
        // Method 2: Try SessionReferenceState for persistence between toggles
        if (window.TEUI?.StateManager?.getSessionReferenceValue) {
            const sessionValue = window.TEUI.StateManager.getSessionReferenceValue(`ref_${fieldId}`);
            if (sessionValue !== null && sessionValue !== undefined) {
                return window.TEUI?.parseNumeric?.(sessionValue, defaultValue) ?? defaultValue;
            }
        }
        
        // Method 3: Check for ref_ prefixed value
        if (window.TEUI?.StateManager?.getValue) {
            const prefixedValue = window.TEUI.StateManager.getValue(`ref_${fieldId}`);
            if (prefixedValue !== null && prefixedValue !== undefined) {
                return window.TEUI?.parseNumeric?.(prefixedValue, defaultValue) ?? defaultValue;
            }
        }
        
        // Method 4: Try to get value from ReferenceValues.js active dataset
        if (window.TEUI?.StateManager?.activeReferenceDataSet) {
            const activeDataValue = window.TEUI.StateManager.activeReferenceDataSet[fieldId];
            if (activeDataValue !== null && activeDataValue !== undefined) {
                return window.TEUI?.parseNumeric?.(activeDataValue, defaultValue) ?? defaultValue;
            }
        }
        
        // Method 5: Last resort - use application value
        return getAppNumericValue(fieldId, defaultValue);
    }
    
    /**
     * Set calculated value with dual-engine support
     */
    function setCalculatedValue(fieldId, rawValue, formatType = 'number-2dp-comma') {
        // Handle invalid values
        if (!isFinite(rawValue) || rawValue === null || rawValue === undefined) {
            const element = document.querySelector(`[data-field-id="${fieldId}"]`);
            if (element) element.textContent = 'N/A';
        if (window.TEUI?.StateManager?.setValue) {
                window.TEUI.StateManager.setValue(fieldId, 'N/A', 'calculated');
            }
            return;
        }
        
        // Use dual-engine setter
        setDualEngineValue(fieldId, rawValue, formatType);
    }
    
    /**
     * Dual-engine value setter that handles Reference/Application state
     */
    function setDualEngineValue(fieldId, rawValue, formatType = 'number-2dp-comma') {
        const isReferenceMode = window.TEUI?.ReferenceToggle?.isReferenceMode?.() || false;
        
        if (isReferenceMode) {
            // Store in Reference state
            if (window.TEUI?.StateManager?.setReferenceValue) {
                window.TEUI.StateManager.setReferenceValue(`ref_${fieldId}`, rawValue.toString(), 'calculated-reference');
            }
        } else {
            // Store in Application state
            if (window.TEUI?.StateManager?.setApplicationValue) {
                window.TEUI.StateManager.setApplicationValue(fieldId, rawValue.toString(), 'calculated');
            }
        }
        
        // Update DOM
        const formattedValue = window.TEUI?.formatNumber?.(rawValue, formatType) ?? rawValue?.toString() ?? 'N/A';
        const element = document.querySelector(`[data-field-id="${fieldId}"]`);
        if (element) {
            element.textContent = formattedValue;
            element.classList.toggle('negative-value', isFinite(rawValue) && rawValue < 0);
        }
    }
    
    //==========================================================================
    // SECTION DEFINITION (DECLARATIVE STRUCTURE)
    //==========================================================================
    
    const sectionRows = {
        metadata: { 
            sectionId: "actualTargetEnergy",
            sectionName: "Actual vs. Target Energy & Carbon",
            sectionNumber: "04"
        },
        
        "header": {
            id: "04-ID",
            rowId: "04-ID",
            label: "Section 04 Units",
            cells: {
                b: {}, 
                c: { content: "C", classes: ["section-subheader"] },
                d: { content: "ACTUAL ENERGY", classes: ["section-subheader"] },
                e: { content: "UNITS", classes: ["section-subheader"] },
                f: { content: "ACTUAL NET", classes: ["section-subheader"] },
                g: { content: "E.1 EMISSIONS\nkgCO2e/yr", classes: ["section-subheader"], style: "white-space: pre-line;" },
                h: { content: "TARGET ENERGY", classes: ["section-subheader"] },
                i: { content: "UNITS", classes: ["section-subheader"] },
                j: { content: "TARGET NET", classes: ["section-subheader"] },
                k: { content: "E.1 EMISSIONS\nkgCO2e/yr", classes: ["section-subheader"], style: "white-space: pre-line;" },
                l: { content: "EMISSION FACTORS", classes: ["section-subheader"] },
                m: { content: "UNITS", classes: ["section-subheader"] },
                n: { content: "", classes: ["section-subheader"] }
            }
        },
            
        // Row 27: T.3.1 Total Electricity Use
        "27": {
            id: "T.3.1",
            rowId: "T.3.1",
            label: "Total Electricity Use",
            cells: {
                b: {}, 
                c: { label: "Total Electricity Use" }, 
                d: { fieldId: "d_27", type: "editable", value: "132,938.00", classes: ["user-input"], section: "actualTargetEnergy" },
                e: { content: "kWh/yr" },
                f: { fieldId: "f_27", type: "calculated", value: "132,938.00", dependencies: ["d_27", "d_43", "i_43"], classes: ["calculated-value"], section: "actualTargetEnergy" },
                g: { fieldId: "g_27", type: "calculated", value: "6,779.84", dependencies: ["f_27", "l_27"], classes: ["calculated-value"], section: "actualTargetEnergy" },
                h: { fieldId: "h_27", type: "calculated", value: "132,765.65", dependencies: ["d_136"], classes: ["calculated-value"], section: "actualTargetEnergy" },
                i: { content: "kWh/yr" },
                j: { fieldId: "j_27", type: "calculated", value: "132,765.65", dependencies: ["h_27", "d_43", "i_43"], classes: ["calculated-value"], section: "actualTargetEnergy" },
                k: { fieldId: "k_27", type: "calculated", value: "6,771.05", dependencies: ["j_27", "l_27"], classes: ["calculated-value"], section: "actualTargetEnergy" },
                l: { fieldId: "l_27", type: "editable", value: "51.00", classes: ["user-input"], section: "actualTargetEnergy" },
                m: { content: "gCO2e/kWh" }
            }
        },
            
        // Row 28-31: Remaining energy rows
        // ... (keeping existing rows for Gas, Propane, Oil, Wood)
            
        // Row 28: T.3.2 Total Fossil Gas Use
        "28": {
            id: "T.3.2",
            rowId: "T.3.2",
            label: "Total Fossil Gas Use",
            cells: {
                b: {}, 
                c: { label: "Total Fossil Gas Use" },
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
                b: {}, 
                c: { label: "Total Propane Use" },
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
                b: {}, 
                c: { label: "Total Oil Use" },
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
                b: {}, 
                c: { label: "Total Wood Use" },
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
                b: {}, 
                c: { label: "Operational GHG & Energy Subtotals" },
                f: { fieldId: "f_32", type: "calculated", value: "132,938.00", dependencies: ["f_27", "f_28", "f_29", "f_30", "f_31"], classes: ["calculated-value"], section: "actualTargetEnergy" },
                g: { fieldId: "g_32", type: "calculated", value: "6,779.84", dependencies: ["g_27", "g_28", "g_29", "g_30", "g_31", "d_60"], classes: ["calculated-value"], section: "actualTargetEnergy" },
                j: { fieldId: "j_32", type: "calculated", value: "132,765.65", dependencies: ["j_27", "j_28", "j_29", "j_30", "j_31"], classes: ["calculated-value"], section: "actualTargetEnergy" },
                k: { fieldId: "k_32", type: "calculated", value: "6,771.05", dependencies: ["k_27", "k_28", "k_29", "k_30", "k_31", "d_60"], classes: ["calculated-value"], section: "actualTargetEnergy" }
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
                k: { content: "GJ Target" }
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
    // FIELD AND LAYOUT ACCESSOR METHODS
    //==========================================================================
    
    /**
     * Extract field definitions from the integrated layout
     */
    function getFields() {
        const fields = {};
        const sectionId = sectionRows.metadata.sectionId;
        
        Object.entries(sectionRows).forEach(([rowKey, row]) => {
            if (rowKey === "metadata" || rowKey === "header" || !row.cells) return;
            
            Object.entries(row.cells).forEach(([colKey, cell]) => {
                if (cell.fieldId && cell.type) {
                    fields[cell.fieldId] = {
                        type: cell.type,
                        label: cell.label || row.label,
                        defaultValue: cell.value || "",
                        section: cell.section || sectionId
                    };
                    
                    // Copy additional properties
                    ['dropdownId', 'options', 'getOptions', 'dependencies', 'min', 'max', 'step'].forEach(prop => {
                        if (cell[prop] !== undefined) fields[cell.fieldId][prop] = cell[prop];
                    });
                }
            });
        });
        
        return fields;
    }
    
    /**
     * Extract dropdown options from the integrated layout
     */
    function getDropdownOptions() {
        const options = {};
        
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
     */
    function getLayout() {
        const layoutRows = [];
        
        // Add header row first
        if (sectionRows["header"]) {
            layoutRows.push(createLayoutRow(sectionRows["header"]));
        }
        
        // Add remaining rows
        Object.entries(sectionRows).forEach(([key, row]) => {
            if (key !== "header" && key !== "metadata") {
                layoutRows.push(createLayoutRow(row));
            }
        });
        
        return { rows: layoutRows };
    }
    
    /**
     * Helper function to convert a row definition to the layout format
     */
    function createLayoutRow(row) {
        const rowDef = {
            id: row.id || row.rowId,
            cells: [{}, {}]  // Empty columns A and B
        };
        
        // Add cells C through N
        const columns = ['c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n'];
        
        columns.forEach(col => {
            if (row.cells && row.cells[col]) {
                const cell = { ...row.cells[col] };
                
                // Special handling for column C
                if (col === 'c') {
                    if (cell.type === 'label' && cell.content && !cell.label) {
                        cell.label = cell.content;
                        delete cell.type;
                        delete cell.content;
                    }
                    else if (!cell.label && !cell.content && row.label) {
                        cell.label = row.label;
                    }
                    else if (!cell.label && cell.content) {
                         cell.label = cell.content;
                         delete cell.content;
                    }
                }
                
                // Remove properties not needed for rendering
                ['getOptions', 'section', 'dependencies'].forEach(prop => delete cell[prop]);
                
                rowDef.cells.push(cell);
            } else {
                // Add empty cell or row label for column C
                if (col === 'c' && !row.cells?.c && row.label) {
                    rowDef.cells.push({ label: row.label });
                } else {
                    rowDef.cells.push({});
                }
            }
        });
        
        return rowDef;
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
        // Set up cross-section dependencies
        setupCrossSectionDependencies();
        
        // Add event listeners for editable fields
        const sectionElement = document.getElementById(sectionRows.metadata.sectionId);
        if (!sectionElement) return;
        
        // Handle subheader styling for newlines
        sectionElement.querySelectorAll('.section-subheader').forEach(cell => {
                if (cell.textContent.includes('\n')) {
                    cell.style.whiteSpace = 'pre-line';
                    cell.style.lineHeight = '1.1';
                    cell.style.paddingTop = '2px';
                    cell.style.paddingBottom = '2px';
                }
            });
        
        // Set up editable fields
        const editableFields = sectionElement.querySelectorAll('.user-input, [data-field-id^="d_"], [data-field-id^="h_"], [data-field-id^="l_"]');
        
        editableFields.forEach(field => {
            // Make fields editable
            if (field.classList.contains('user-input') || field.classList.contains('editable')) {
                field.setAttribute('contenteditable', 'true');
                
                // Add focus/blur styling
                field.addEventListener('focus', function() {
                    this.classList.add('editing');
                    this.dataset.originalValue = this.textContent.trim();
                });
                
                field.addEventListener('blur', function() {
                    this.classList.remove('editing');
                    handleFieldBlur(this);
                });
                
                // Handle Enter key
            field.addEventListener('keydown', function(e) {
                if (e.key === 'Enter') {
                        e.preventDefault();
                        handleFieldEnter(this);
                }
            });
            
                // Handle paste events
            field.addEventListener('paste', function(e) {
                setTimeout(() => {
                    const pastedContent = this.textContent.trim();
                    if (pastedContent.includes(',')) {
                        const cleanValue = window.TEUI?.parseNumeric?.(pastedContent, 0) ?? 0;
                        if (!isNaN(cleanValue)) {
                            this.textContent = window.TEUI.formatNumber(cleanValue, 'number-2dp-comma');
                        }
                    }
                }, 0);
            });
            }
        });
    }
    
    /**
     * Handle editable field blur event
     * Updates StateManager with the changed value
     */
    function handleFieldBlur(field) {
        if (!field) return;
        
        const fieldId = field.getAttribute('data-field-id');
        if (!fieldId) return;
        
        // Get the new value and clean it (remove commas)
        const newValue = field.textContent.trim().replace(/,/g, '');
        
        // Only update if value has changed
        if (field.dataset.originalValue !== field.textContent.trim()) {
            // Update StateManager with the new value
            if (window.TEUI?.StateManager) {
                window.TEUI.StateManager.setValue(fieldId, newValue, 'user-modified');
                
                // CRITICAL FIX: Explicitly trigger calculations for fuel inputs
                if (fieldId.match(/^d_(27|28|29|30|31)$/)) {
                    handleEnergyInputChange(fieldId);
                }
            }
            
            // Format the displayed value
            const numericValue = window.TEUI?.parseNumeric?.(newValue, 0);
            if (!isNaN(numericValue)) {
                field.textContent = window.TEUI?.formatNumber?.(numericValue, 'number-2dp-comma') || numericValue.toFixed(2);
            }
        }
    }
    
    /**
     * Handle Enter key press in editable fields
     * Prevents default behavior (new line) and triggers blur
     */
    function handleFieldEnter(field) {
        if (!field) return;
        field.blur();
    }
    
    /**
     * Handle energy input field changes
     */
    function handleEnergyInputChange(fieldId) {
        if (fieldId === 'd_27') {
            const f27Value = calculateF27();
            setCalculatedValue('f_27', f27Value, 'number-2dp-comma');
            const g27Value = calculateG27();
            setCalculatedValue('g_27', g27Value, 'number-2dp-comma');
        } else if (fieldId === 'd_28') {
            const f28Value = calculateF28();
            setCalculatedValue('f_28', f28Value, 'number-2dp-comma');
            const g28Value = calculateG28();
            setCalculatedValue('g_28', g28Value, 'number-2dp-comma');
        } else if (fieldId === 'd_29') {
            const f29Value = calculateF29();
            setCalculatedValue('f_29', f29Value, 'number-2dp-comma');
            const g29Value = calculateG29();
            setCalculatedValue('g_29', g29Value, 'number-2dp-comma');
        } else if (fieldId === 'd_30') {
            const f30Value = calculateF30();
            setCalculatedValue('f_30', f30Value, 'number-2dp-comma');
            const g30Value = calculateG30();
            setCalculatedValue('g_30', g30Value, 'number-2dp-comma');
        } else if (fieldId === 'd_31') {
            const f31Value = calculateF31();
            setCalculatedValue('f_31', f31Value, 'number-2dp-comma');
            const g31Value = calculateG31();
            setCalculatedValue('g_31', g31Value, 'number-2dp-comma');
        }
        
        // Update subtotals
        updateSubtotals();
    }
    
    /**
     * Set up listeners for cross-section dependencies
     */
    function setupCrossSectionDependencies() {
        if (!window.TEUI?.StateManager) return;
        
        const sm = window.TEUI.StateManager;
        
        // Register key cross-section dependencies
        
        // Target electricity dependencies (h_27 from S15 d_136)
        sm.registerDependency('d_136', 'h_27');
        
        // Emissions factor dependencies (l_27)
        sm.registerDependency('d_19', 'l_27');  // Province
        sm.registerDependency('h_12', 'l_27');  // Year
        sm.registerDependency('d_12', 'l_27');  // Year (alternative)
        
        // Net fuel dependencies for target fuels
        
        // Gas dependencies (h_28, j_28, k_28)
        sm.registerDependency('d_51', 'h_28');   // DHW Source
        sm.registerDependency('e_51', 'h_28');   // DHW Gas volume
        sm.registerDependency('d_113', 'h_28');  // Heating System
        sm.registerDependency('h_115', 'h_28');  // Target Gas Use from S13
        
        // Oil dependencies (h_30, j_30, k_30)
        sm.registerDependency('d_51', 'h_30');   // DHW Source
        sm.registerDependency('k_54', 'h_30');   // DHW Oil volume
        sm.registerDependency('d_113', 'h_30');  // Heating System
        sm.registerDependency('f_115', 'h_30');  // Target Oil Use from S13
        
        // Subtotal dependencies (wood offsets)
        sm.registerDependency('d_60', 'g_32');  // Wood offsets affect actual emissions
        sm.registerDependency('d_60', 'k_32');  // Wood offsets affect target emissions
        
        // CRITICAL FIX: Add direct listeners for cross-section fuel changes
        if (sm.addListener) {
            // Listen for S07 DHW fuel type changes
            sm.addListener('d_51', function() {
                calculateAll();
            });
            
            // Listen for S13 heating system changes
            sm.addListener('d_113', function() {
                calculateAll();
            });
            
            // Listen for fuel volume changes from S07/S13
            sm.addListener('e_51', function() { calculateAll(); });  // DHW Gas
            sm.addListener('k_54', function() { calculateAll(); });  // DHW Oil
            sm.addListener('h_115', function() { calculateAll(); }); // Heating Gas
            sm.addListener('f_115', function() { calculateAll(); }); // Heating Oil
        }
        
        // CRITICAL FIX: Listen for Reference mode toggle to refresh UI
        // Move outside StateManager condition since it's independent
        document.removeEventListener('teui-reference-mode-changed', refreshUIOnModeChange);
        document.addEventListener('teui-reference-mode-changed', refreshUIOnModeChange);
    }
    
    /**
     * Handler for reference mode change event
     */
    function refreshUIOnModeChange() {
        // Wait a moment for ReferenceToggle to update its internal state
        setTimeout(function() {
            refreshUIForCurrentMode();
        }, 50);
    }
    
    /**
     * Refresh UI to show correct values for current mode (Reference or Application)
     * CRITICAL FIX: Added to ensure UI updates properly on mode toggle
     */
    function refreshUIForCurrentMode() {
        const isReferenceMode = window.TEUI?.ReferenceToggle?.isReferenceMode?.() || false;
        
        if (isReferenceMode) {
            // Update UI with Reference values
            updateUIWithReferenceValues();
        } else {
            // Update UI with Application values
            updateUIWithApplicationValues();
        }
    }
    
    /**
     * Update UI with Reference values
     */
    function updateUIWithReferenceValues() {
        // Get reference values
        const ref_h27 = getRefNumericValue('h_27', 0);
        const ref_j27 = getRefNumericValue('j_27', 0);
        const ref_k27 = getRefNumericValue('k_27', 0);
        
        const ref_h28 = getRefNumericValue('h_28', 0);
        const ref_j28 = getRefNumericValue('j_28', 0);
        const ref_k28 = getRefNumericValue('k_28', 0);
        
        const ref_h29 = getRefNumericValue('h_29', 0);
        const ref_j29 = getRefNumericValue('j_29', 0);
        const ref_k29 = getRefNumericValue('k_29', 0);
        
        const ref_h30 = getRefNumericValue('h_30', 0);
        const ref_j30 = getRefNumericValue('j_30', 0);
        const ref_k30 = getRefNumericValue('k_30', 0);
        
        const ref_h31 = getRefNumericValue('h_31', 0);
        const ref_j31 = getRefNumericValue('j_31', 0);
        const ref_k31 = getRefNumericValue('k_31', 0);
        
        const ref_j32 = getRefNumericValue('j_32', 0);
        const ref_k32 = getRefNumericValue('k_32', 0);
        
        // Update UI elements
        updateDOMElement('h_27', ref_h27, 'number-2dp-comma');
        updateDOMElement('j_27', ref_j27, 'number-2dp-comma');
        updateDOMElement('k_27', ref_k27, 'number-2dp-comma');
        
        updateDOMElement('h_28', ref_h28, 'number-2dp-comma');
        updateDOMElement('j_28', ref_j28, 'number-2dp-comma');
        updateDOMElement('k_28', ref_k28, 'number-2dp-comma');
        
        updateDOMElement('h_29', ref_h29, 'number-2dp-comma');
        updateDOMElement('j_29', ref_j29, 'number-2dp-comma');
        updateDOMElement('k_29', ref_k29, 'number-2dp-comma');
        
        updateDOMElement('h_30', ref_h30, 'number-2dp-comma');
        updateDOMElement('j_30', ref_j30, 'number-2dp-comma');
        updateDOMElement('k_30', ref_k30, 'number-2dp-comma');
        
        updateDOMElement('h_31', ref_h31, 'number-2dp-comma');
        updateDOMElement('j_31', ref_j31, 'number-2dp-comma');
        updateDOMElement('k_31', ref_k31, 'number-2dp-comma');
        
        updateDOMElement('j_32', ref_j32, 'number-2dp-comma');
        updateDOMElement('k_32', ref_k32, 'number-2dp-comma');
    }
    
    /**
     * Update UI with Application values
     */
    function updateUIWithApplicationValues() {
        // Get application values
        const h27 = getAppNumericValue('h_27', 0);
        const j27 = getAppNumericValue('j_27', 0);
        const k27 = getAppNumericValue('k_27', 0);
        
        const h28 = getAppNumericValue('h_28', 0);
        const j28 = getAppNumericValue('j_28', 0);
        const k28 = getAppNumericValue('k_28', 0);
        
        const h29 = getAppNumericValue('h_29', 0);
        const j29 = getAppNumericValue('j_29', 0);
        const k29 = getAppNumericValue('k_29', 0);
        
        const h30 = getAppNumericValue('h_30', 0);
        const j30 = getAppNumericValue('j_30', 0);
        const k30 = getAppNumericValue('k_30', 0);
        
        const h31 = getAppNumericValue('h_31', 0);
        const j31 = getAppNumericValue('j_31', 0);
        const k31 = getAppNumericValue('k_31', 0);
        
        const j32 = getAppNumericValue('j_32', 0);
        const k32 = getAppNumericValue('k_32', 0);
        
        // Update UI elements
        updateDOMElement('h_27', h27, 'number-2dp-comma');
        updateDOMElement('j_27', j27, 'number-2dp-comma');
        updateDOMElement('k_27', k27, 'number-2dp-comma');
        
        updateDOMElement('h_28', h28, 'number-2dp-comma');
        updateDOMElement('j_28', j28, 'number-2dp-comma');
        updateDOMElement('k_28', k28, 'number-2dp-comma');
        
        updateDOMElement('h_29', h29, 'number-2dp-comma');
        updateDOMElement('j_29', j29, 'number-2dp-comma');
        updateDOMElement('k_29', k29, 'number-2dp-comma');
        
        updateDOMElement('h_30', h30, 'number-2dp-comma');
        updateDOMElement('j_30', j30, 'number-2dp-comma');
        updateDOMElement('k_30', k30, 'number-2dp-comma');
        
        updateDOMElement('h_31', h31, 'number-2dp-comma');
        updateDOMElement('j_31', j31, 'number-2dp-comma');
        updateDOMElement('k_31', k31, 'number-2dp-comma');
        
        updateDOMElement('j_32', j32, 'number-2dp-comma');
        updateDOMElement('k_32', k32, 'number-2dp-comma');
    }
    
    /**
     * Helper to update DOM element with formatted value
     */
    function updateDOMElement(fieldId, value, formatType) {
        const element = document.querySelector(`[data-field-id="${fieldId}"]`);
        if (element) {
            element.textContent = window.TEUI?.formatNumber?.(value, formatType) || value.toString();
        }
    }
    
    /**
     * Update electricity emission factor based on province and reporting year
     */
    function updateElectricityEmissionFactor() {
        updateGridIntensityForMode('application');
        updateGridIntensityForMode('reference');
    }
    
    /**
     * Update grid intensity for a specific calculation mode
     */
    function updateGridIntensityForMode(mode) {
        // Get province
        let provinceAbbreviation = 'ON';
        const provinceStateValue = window.TEUI.StateManager?.getApplicationValue('d_19');
            if (provinceStateValue) {
                provinceAbbreviation = getProvinceCode(provinceStateValue);
            }
            
        // Get reporting year for the specific mode
        let reportingYear = 2022;
            let yearStateValue;
        
            if (mode === 'reference') {
            yearStateValue = window.TEUI.StateManager?.getReferenceValue('h_12');
            } else {
            yearStateValue = window.TEUI.StateManager?.getApplicationValue('h_12');
            }
            
            if (yearStateValue) {
                const parsedYear = parseInt(yearStateValue);
                if (!isNaN(parsedYear) && parsedYear >= 2015 && parsedYear <= 2041) {
                    reportingYear = parsedYear;
            }
        }
        
        // Get emission factor
        const factor = getElectricityFactor(provinceAbbreviation, reportingYear);
        
        if (mode === 'reference') {
            // Store in reference state
            if (window.TEUI?.StateManager) {
                window.TEUI.StateManager.setValue('ref_l_27', factor.toString(), 'calculated');
                
                // Also ensure it's in SessionReferenceState for persistence
                if (window.TEUI?.StateManager?.setSessionReferenceValue) {
                    window.TEUI.StateManager.setSessionReferenceValue('ref_l_27', factor.toString());
                }
                
                // Store with reference prefix
                if (window.TEUI?.StateManager?.setReferenceValue) {
                    window.TEUI.StateManager.setReferenceValue('l_27', factor.toString(), 'calculated-reference');
                }
            }
            
            // CRITICAL FIX: Always calculate Reference model after updating grid intensity
            calculateReferenceModel();
            
            // Update UI in Reference Mode if active
            if (window.TEUI?.ReferenceToggle?.isReferenceMode?.()) {
                refreshUIForCurrentMode();
            }
        } else {
            // Update application state
            setCalculatedValue('l_27', factor, 'integer');
            
            // CRITICAL FIX: Always calculate Application model after updating grid intensity
            calculateTargetModel();
            
            // Update UI in Application Mode if active
            if (!window.TEUI?.ReferenceToggle?.isReferenceMode?.()) {
                refreshUIForCurrentMode();
            }
        }
    }

    /**
     * Helper to get province code from name
     */
    function getProvinceCode(provinceText) {
        if (!provinceText) return 'ON';
        
        // Direct match for 2-letter codes
        if (provinceText.length === 2) {
            const code = provinceText.toUpperCase();
            if (['ON', 'QC', 'BC', 'AB', 'SK', 'MB', 'NS', 'NB', 'NL', 'PE', 'NT', 'YT', 'NU'].includes(code)) {
                return code;
            }
        }
        
        provinceText = provinceText.trim().toLowerCase();
        
        // Province name mapping
        const provinceMap = {
            'ontario': 'ON', 'on': 'ON',
            'quebec': 'QC', 'québec': 'QC', 'qc': 'QC',
            'british columbia': 'BC', 'bc': 'BC',
            'alberta': 'AB', 'ab': 'AB',
            'saskatchewan': 'SK', 'sk': 'SK',
            'manitoba': 'MB', 'mb': 'MB',
            'nova scotia': 'NS', 'ns': 'NS',
            'new brunswick': 'NB', 'nb': 'NB',
            'newfoundland and labrador': 'NL', 'nl': 'NL',
            'prince edward island': 'PE', 'pe': 'PE',
            'northwest territories': 'NT', 'nt': 'NT',
            'yukon': 'YT', 'yt': 'YT',
            'nunavut': 'NU', 'nu': 'NU'
        };
        
        // Try direct match
        if (provinceMap[provinceText]) return provinceMap[provinceText];
        
        // Try partial match
        for (const [name, code] of Object.entries(provinceMap)) {
            if (provinceText.includes(name)) return code;
        }
        
        return 'ON'; // Default
    }

    /**
     * Get electricity emission factor based on province and year
     */
    function getElectricityFactor(province, year) {
    const GRID_INTENSITY_FACTORS = {
        'ON': { default: 51, 2015: 46, 2016: 40, 2017: 18, 2018: 29, 2019: 29, 2020: 36, 2021: 44, 2022: 51, 2023: 67, 2024: 71, 2025: 138, 2026: 145, 2027: 132, 2028: 133, 2029: 126, 2030: 126, 2031: 122, 2032: 122, 2033: 104, 2034: 58, 2035: 40, 2036: 34, 2037: 33, 2038: 32, 2039: 13, 2040: 8, 2041: 3, future: 3 },
        'QC': { default: 1 }, 'BC': { default: 12 }, 'AB': { default: 650 }, 'SK': { default: 720 }, 
        'MB': { default: 3 }, 'NS': { default: 600 }, 'NB': { default: 340 }, 'NL': { default: 30 },
        'PE': { default: 12 }, 'NT': { default: 180 }, 'YT': { default: 2 }, 'NU': { default: 200 }
    };

        const provinceFactors = GRID_INTENSITY_FACTORS[province] || GRID_INTENSITY_FACTORS['ON'];
        
        if (year > 2041 && provinceFactors.future !== undefined) {
            return provinceFactors.future;
        }
        
        return provinceFactors[year] || provinceFactors.default;
    }
    
    /**
     * Update the subtotal rows
     */
    function updateSubtotals() {
        // Get values for f_32 calculation
        const f27 = getAppNumericValue('f_27');
        const f28 = getAppNumericValue('f_28');
        const f29 = getAppNumericValue('f_29');
        const f30 = getAppNumericValue('f_30');
        const f31 = getAppNumericValue('f_31');
        
        // Calculate f_32 and update
        const f32 = f27 + f28 + f29 + f30 + f31;
        setCalculatedValue('f_32', f32, 'number-2dp-comma');
        
        // Get values for g_32 calculation
        const g27 = getAppNumericValue('g_27');
        const g28 = getAppNumericValue('g_28');
        const g29 = getAppNumericValue('g_29');
        const g30 = getAppNumericValue('g_30');
        const g31 = getAppNumericValue('g_31');
        const d60 = getAppNumericValue('d_60');
        
        // Calculate g_32 and update
        const g32 = g27 + g28 + g29 + g30 + g31 - (d60 * 1000);
        setCalculatedValue('g_32', g32, 'number-2dp-comma');
        
        // Get values for j_32 calculation
        const j27 = getAppNumericValue('j_27');
        const j28 = getAppNumericValue('j_28');
        const j29 = getAppNumericValue('j_29');
        const j30 = getAppNumericValue('j_30');
        const j31 = getAppNumericValue('j_31');
        
        // Calculate j_32 and update
        const j32 = j27 + j28 + j29 + j30 + j31;
        setCalculatedValue('j_32', j32, 'number-2dp-comma');
        
        // Get values for k_32 calculation
        const k27 = getAppNumericValue('k_27');
        const k28 = getAppNumericValue('k_28');
        const k29 = getAppNumericValue('k_29');
        const k30 = getAppNumericValue('k_30');
        const k31 = getAppNumericValue('k_31');
        
        // Calculate k_32 and update
        const k32 = k27 + k28 + k29 + k30 + k31 - (d60 * 1000);
        setCalculatedValue('k_32', k32, 'number-2dp-comma');
        
        // Update dependent totals
        updateDependentTotals();
    }
    
    /**
     * Update fields that depend on the subtotals
     */
    function updateDependentTotals() {
        // Get required values
        const f27 = getNumericValue('f_27');
        const f28 = getNumericValue('f_28');
        const f29 = getNumericValue('f_29');
        const f30 = getNumericValue('f_30');
        const f31 = getNumericValue('f_31');
        const d43 = getNumericValue('d_43');
        const i43 = getNumericValue('i_43');
        const j27 = getNumericValue('j_27');
        const j28 = getNumericValue('j_28');
        const j29 = getNumericValue('j_29');
        const j30 = getNumericValue('j_30');
        const j31 = getNumericValue('j_31');
        const d63 = getNumericValue('d_63');
        const h15 = getNumericValue('h_15');
        const d14 = window.TEUI.StateManager?.getValue('d_14');
        const h35 = getNumericValue('h_35');

        // Calculate d_33 (Total Net Energy - Actual)
        const d33 = (f27 + f28 + f29 + f30 + f31 - d43 - i43) / 277.7777;
        setCalculatedValue('d_33', d33, 'number-2dp-comma');

        // Calculate h_33 (Total Net Energy - Target)
        const h33 = (j27 + j28 + j29 + j30 + j31 - i43 - d43) / 277.7777;
        setCalculatedValue('h_33', h33, 'number-2dp-comma');
        
        // Calculate per capita values
        const d34 = getNumericValue('f_32') / (d63 || 1);
        setCalculatedValue('d_34', d34, 'number-2dp-comma');
        
        const f34 = d33 / (d63 || 1);
        setCalculatedValue('f_34', f34, 'number-2dp-comma');
        
        const h34 = getNumericValue('j_32') / (d63 || 1);
        setCalculatedValue('h_34', h34, 'number-2dp-comma');
        
        const j34 = h33 / (d63 || 1);
        setCalculatedValue('j_34', j34, 'number-2dp-comma');
        
        // Calculate d_35 (Primary Energy)
        let d35 = 0;
        if (d14 === "Targeted Use") {
            d35 = j27 * h35;
        } else {
            d35 = f27 * h35;
        }
        setCalculatedValue('d_35', d35, 'number-2dp-comma');
        
        // Calculate f_35 (Primary Energy Intensity)
        const f35 = d35 / (h15 || 1);
        setCalculatedValue('f_35', f35, 'number-2dp-comma');
    }
    
    //==========================================================================
    // CALCULATION FUNCTIONS
    //==========================================================================
    
    // Row 27: Electricity calculations
    function calculateF27() {
        const d27 = getAppNumericValue('d_27');
        const d43 = getAppNumericValue('d_43');
        const i43 = getAppNumericValue('i_43');
        return d27 - d43 - i43;
    }
    
    function calculateG27(f27Value, l27Factor) {
        if (f27Value === undefined) {
            f27Value = getAppNumericValue('f_27');
            l27Factor = getAppNumericValue('l_27');
        }
        return (f27Value * l27Factor) / 1000;
    }
    
    function calculateJ27() {
        const h27 = getAppNumericValue('h_27');
        const d43 = getAppNumericValue('d_43');
        const i43 = getAppNumericValue('i_43');
        const j27Value = h27 - d43 - i43;
        setCalculatedValue('j_27', j27Value, 'number-2dp-comma');
        return j27Value;
    }
    
    function calculateK27(j27Value, l27Factor) {
        if (j27Value === undefined) {
            j27Value = getAppNumericValue('j_27');
            l27Factor = getAppNumericValue('l_27');
        }
        return (j27Value * l27Factor) / 1000;
    }
    
    // Row 28-31: Other fuel calculations (Gas, Propane, Oil, Wood)
    function calculateF28() {
        const d28 = getAppNumericValue('d_28');
        return d28 * 0.0373 * 277.7778;
    }
    
    function calculateG28() {
        const d28 = getAppNumericValue('d_28');
        const l28 = getAppNumericValue('l_28');
        return (d28 * l28) / 1000;
    }
    
    function calculateF29() {
        const d29 = getAppNumericValue('d_29');
        return d29 * 14.019;
    }
    
    function calculateG29() {
        const d29 = getAppNumericValue('d_29');
        const l29 = getAppNumericValue('l_29');
        return (d29 * l29) / 1000;
    }
    
    function calculateF30() {
        const d30 = getAppNumericValue('d_30');
        return d30 * 36.72 * 0.2777778;
    }
    
    function calculateG30() {
        const d30 = getAppNumericValue('d_30');
        const l30 = getAppNumericValue('l_30');
        return (d30 * l30) / 1000;
    }
    
    function calculateF31() {
        const d31 = getAppNumericValue('d_31');
        return d31 * 1000;
    }
    
    function calculateG31() {
        const h31 = getAppNumericValue('h_31');
        const l31 = getAppNumericValue('l_31');
        return h31 * l31;
    }
    
    //==========================================================================
    // IT-DEPENDS CALCULATION REGISTRATION
    //==========================================================================
    
    /**
     * Register IT-DEPENDS calculations with StateManager
     */
    function registerITDependsCalculations() {
        if (!window.TEUI?.StateManager) {
            return;
        }
        
        const sm = window.TEUI.StateManager;
        
        // ---------- ROW 27: ELECTRICITY ----------
        // f_27: Actual Net Electricity
        sm.registerCalculation('f_27', function() {
            const d27 = getAppNumericValue('d_27');
        const d43 = getAppNumericValue('d_43'); 
        const i43 = getAppNumericValue('i_43'); 
        return d27 - d43 - i43;
        }, 'Actual Net Electricity (kWh/yr)');
        
        // g_27: Actual Electricity Emissions
        sm.registerCalculation('g_27', function() {
            const f27 = getAppNumericValue('f_27');
        const l27 = getAppNumericValue('l_27'); 
        return (f27 * l27) / 1000;
        }, 'Actual Electricity Emissions (kgCO2e/yr)');
        
        // h_27: Target Electricity Use
        sm.registerCalculation('h_27', function() {
            return getAppNumericValue('d_136', 0);
        }, 'Target Electricity Use from S15 (kWh/yr)');
        
        // j_27: Target Net Electricity
        sm.registerCalculation('j_27', function() {
            const h27 = getAppNumericValue('h_27');
        const d43 = getAppNumericValue('d_43'); 
        const i43 = getAppNumericValue('i_43'); 
        return h27 - d43 - i43;
        }, 'Target Net Electricity (kWh/yr)');
        
        // k_27: Target Electricity Emissions
        sm.registerCalculation('k_27', function() {
            const j27 = getAppNumericValue('j_27');
        const l27 = getAppNumericValue('l_27'); 
        return (j27 * l27) / 1000;
        }, 'Target Electricity Emissions (kgCO2e/yr)');
        
        // l_27: Electricity Emissions Factor
        sm.registerCalculation('l_27', function() {
            // Get province
            let provinceAbbreviation = 'ON';
            const provinceStateValue = window.TEUI.StateManager?.getApplicationValue('d_19');
            if (provinceStateValue) {
                provinceAbbreviation = getProvinceCode(provinceStateValue);
            }
                
            // Get reporting year
            let reportingYear = 2022;
            const yearStateValue = window.TEUI.StateManager?.getApplicationValue('h_12');
            if (yearStateValue) {
                const parsedYear = parseInt(yearStateValue);
                if (!isNaN(parsedYear) && parsedYear >= 2015 && parsedYear <= 2041) {
                    reportingYear = parsedYear;
                }
            }
            
            // Get emission factor
            return getElectricityFactor(provinceAbbreviation, reportingYear);
        }, 'Electricity Emissions Factor (gCO2e/kWh)');
        
        // ---------- ROW 28: GAS ----------
        // f_28: Actual Net Gas Energy
        sm.registerCalculation('f_28', function() {
            const d28 = getAppNumericValue('d_28');
            return d28 * 0.0373 * 277.7778;
        }, 'Actual Net Gas Energy (kWh/yr)');
        
        // g_28: Actual Gas Emissions
        sm.registerCalculation('g_28', function() {
            const d28 = getAppNumericValue('d_28');
        const l28 = getAppNumericValue('l_28'); 
        return (d28 * l28) / 1000;
        }, 'Actual Gas Emissions (kgCO2e/yr)');
        
        // h_28: Target Gas Volume
        sm.registerCalculation('h_28', function() {
            const d51 = window.TEUI.StateManager?.getValue('d_51');
            const e51 = getAppNumericValue('e_51');
            const d113 = window.TEUI.StateManager?.getValue('d_113');
            const h115 = getAppNumericValue('h_115');
            
        if (d113 === "Gas" && d51 === "Gas") {
            return e51 + h115;
        } else if (d51 === "Gas") {
            return e51;
        } else if (d113 === "Gas") {
            return h115;
        } else {
            return 0;
        }
        }, 'Target Gas Volume (m³/yr)');
        
        // j_28: Target Net Gas Energy
        sm.registerCalculation('j_28', function() {
            const h28 = getAppNumericValue('h_28');
        return h28 * 0.0373 * 277.7778;
        }, 'Target Net Gas Energy (kWh/yr)');
    
        // k_28: Target Gas Emissions
        sm.registerCalculation('k_28', function() {
            const h28 = getAppNumericValue('h_28');
        const l28 = getAppNumericValue('l_28'); 
        return (h28 * l28) / 1000;
        }, 'Target Gas Emissions (kgCO2e/yr)');
        
        // ---------- ROW 29: PROPANE ----------
        // f_29: Actual Net Propane Energy
        sm.registerCalculation('f_29', function() {
            const d29 = getAppNumericValue('d_29');
        return d29 * 14.019;
        }, 'Actual Net Propane Energy (kWh/yr)');
    
        // g_29: Actual Propane Emissions
        sm.registerCalculation('g_29', function() {
            const d29 = getAppNumericValue('d_29');
        const l29 = getAppNumericValue('l_29'); 
        return (d29 * l29) / 1000;
        }, 'Actual Propane Emissions (kgCO2e/yr)');
        
        // h_29: Target Propane Volume
        sm.registerCalculation('h_29', function() {
            return getAppNumericValue('d_29', 0);
        }, 'Target Propane Volume (kg/yr)');
        
        // j_29: Target Net Propane Energy
        sm.registerCalculation('j_29', function() {
            const h29 = getAppNumericValue('h_29');
        return h29 * 14.019;
        }, 'Target Net Propane Energy (kWh/yr)');
    
        // k_29: Target Propane Emissions
        sm.registerCalculation('k_29', function() {
            const h29 = getAppNumericValue('h_29');
        const l29 = getAppNumericValue('l_29'); 
        return (h29 * l29) / 1000;
        }, 'Target Propane Emissions (kgCO2e/yr)');
        
        // ---------- ROW 30: OIL ----------
        // f_30: Actual Net Oil Energy
        sm.registerCalculation('f_30', function() {
            const d30 = getAppNumericValue('d_30');
        return d30 * 36.72 * 0.2777778;
        }, 'Actual Net Oil Energy (kWh/yr)');
    
        // g_30: Actual Oil Emissions
        sm.registerCalculation('g_30', function() {
            const d30 = getAppNumericValue('d_30');
        const l30 = getAppNumericValue('l_30'); 
        return (d30 * l30) / 1000;
        }, 'Actual Oil Emissions (kgCO2e/yr)');
        
        // h_30: Target Oil Volume
        sm.registerCalculation('h_30', function() {
            const d51 = window.TEUI.StateManager?.getValue('d_51');
            const d113 = window.TEUI.StateManager?.getValue('d_113');
            const k54 = getAppNumericValue('k_54');
            const f115 = getAppNumericValue('f_115');
            
        if (d113 === "Oil" && d51 === "Oil") {
            return k54 + f115; 
        } else if (d51 === "Oil") {
            return k54; 
        } else if (d113 === "Oil") {
            return f115;
        } else {
            return 0;
        }
        }, 'Target Oil Volume (litres/yr)');
        
        // j_30: Target Net Oil Energy
        sm.registerCalculation('j_30', function() {
            const h30 = getAppNumericValue('h_30');
        return h30 * 36.72 * 0.2777778;
        }, 'Target Net Oil Energy (kWh/yr)');
    
        // k_30: Target Oil Emissions
        sm.registerCalculation('k_30', function() {
            const h30 = getAppNumericValue('h_30');
        const l30 = getAppNumericValue('l_30'); 
        return (h30 * l30) / 1000;
        }, 'Target Oil Emissions (kgCO2e/yr)');
        
        // ---------- ROW 31: WOOD ----------
        // f_31: Actual Net Wood Energy
        sm.registerCalculation('f_31', function() {
            const d31 = getAppNumericValue('d_31');
        return d31 * 1000;
        }, 'Actual Net Wood Energy (kWh/yr)');
    
        // g_31: Actual Wood Emissions
        sm.registerCalculation('g_31', function() {
            const h31 = getAppNumericValue('h_31');
        const l31 = getAppNumericValue('l_31'); 
        return h31 * l31;
        }, 'Actual Wood Emissions (kgCO2e/yr)');
        
        // h_31: Target Wood Volume
        sm.registerCalculation('h_31', function() {
            return getAppNumericValue('d_31', 0);
        }, 'Target Wood Volume (m³/yr)');
        
        // j_31: Target Net Wood Energy
        sm.registerCalculation('j_31', function() {
            const h31 = getAppNumericValue('h_31');
        return h31 * 1000;
        }, 'Target Net Wood Energy (kWh/yr)');
    
        // k_31: Target Wood Emissions
        sm.registerCalculation('k_31', function() {
            const h31 = getAppNumericValue('h_31');
        const l31 = getAppNumericValue('l_31'); 
        return h31 * l31;
        }, 'Target Wood Emissions (kgCO2e/yr)');
        
        // ---------- ROW 32: SUBTOTALS ----------
        // f_32: Total Actual Energy
        sm.registerCalculation('f_32', function() {
            const f27 = getAppNumericValue('f_27');
        const f28 = getAppNumericValue('f_28'); 
        const f29 = getAppNumericValue('f_29'); 
        const f30 = getAppNumericValue('f_30'); 
        const f31 = getAppNumericValue('f_31'); 
        return f27 + f28 + f29 + f30 + f31;
        }, 'Total Actual Energy (kWh/yr)');
    
        // g_32: Total Actual Emissions
        sm.registerCalculation('g_32', function() {
            const g27 = getAppNumericValue('g_27');
        const g28 = getAppNumericValue('g_28'); 
        const g29 = getAppNumericValue('g_29'); 
        const g30 = getAppNumericValue('g_30'); 
        const g31 = getAppNumericValue('g_31'); 
            const d60 = getAppNumericValue('d_60');
        return g27 + g28 + g29 + g30 + g31 - (d60 * 1000);
        }, 'Total Actual Emissions (kgCO2e/yr)');
    
        // j_32: Total Target Energy
        sm.registerCalculation('j_32', function() {
            const j27 = getAppNumericValue('j_27');
        const j28 = getAppNumericValue('j_28'); 
        const j29 = getAppNumericValue('j_29'); 
        const j30 = getAppNumericValue('j_30'); 
        const j31 = getAppNumericValue('j_31'); 
        return j27 + j28 + j29 + j30 + j31;
        }, 'Total Target Energy (kWh/yr)');
    
        // k_32: Total Target Emissions
        sm.registerCalculation('k_32', function() {
            const k27 = getAppNumericValue('k_27');
        const k28 = getAppNumericValue('k_28'); 
        const k29 = getAppNumericValue('k_29'); 
        const k30 = getAppNumericValue('k_30'); 
        const k31 = getAppNumericValue('k_31'); 
            const d60 = getAppNumericValue('d_60');
        return k27 + k28 + k29 + k30 + k31 - (d60 * 1000);
        }, 'Total Target Emissions (kgCO2e/yr)');
        
        // ---------- ROW 33: TOTAL NET ENERGY ----------
        // d_33: Actual Total Net Energy
        sm.registerCalculation('d_33', function() {
            const f27 = getAppNumericValue('f_27');
        const f28 = getAppNumericValue('f_28'); 
        const f29 = getAppNumericValue('f_29'); 
        const f30 = getAppNumericValue('f_30'); 
        const f31 = getAppNumericValue('f_31'); 
        const d43 = getAppNumericValue('d_43'); 
        const i43 = getAppNumericValue('i_43'); 
        return (f27 + f28 + f29 + f30 + f31 - d43 - i43) / 277.7777;
        }, 'Actual Total Net Energy (GJ/yr)');
    
        // h_33: Target Total Net Energy
        sm.registerCalculation('h_33', function() {
            const j27 = getAppNumericValue('j_27');
        const j28 = getAppNumericValue('j_28'); 
        const j29 = getAppNumericValue('j_29'); 
        const j30 = getAppNumericValue('j_30'); 
        const j31 = getAppNumericValue('j_31'); 
        const i43 = getAppNumericValue('i_43'); 
        const d43 = getAppNumericValue('d_43'); 
        return (j27 + j28 + j29 + j30 + j31 - i43 - d43) / 277.7777;
        }, 'Target Total Net Energy (GJ/yr)');
        
        // ---------- ROW 34: PER CAPITA ENERGY ----------
        // d_34: Actual Per Capita Energy (kWh)
        sm.registerCalculation('d_34', function() {
            const f32 = getAppNumericValue('f_32');
            const d63 = getAppNumericValue('d_63');
            return f32 / (d63 || 1);
        }, 'Actual Per Capita Energy (kWh)');
        
        // f_34: Actual Per Capita Energy (GJ)
        sm.registerCalculation('f_34', function() {
            const d33 = getAppNumericValue('d_33');
        const d63 = getAppNumericValue('d_63'); 
        return d33 / (d63 || 1);
        }, 'Actual Per Capita Energy (GJ)');
        
        // h_34: Target Per Capita Energy (kWh)
        sm.registerCalculation('h_34', function() {
            const j32 = getAppNumericValue('j_32');
            const d63 = getAppNumericValue('d_63');
            return j32 / (d63 || 1);
        }, 'Target Per Capita Energy (kWh)');
        
        // j_34: Target Per Capita Energy (GJ)
        sm.registerCalculation('j_34', function() {
            const h33 = getAppNumericValue('h_33');
        const d63 = getAppNumericValue('d_63'); 
        return h33 / (d63 || 1);
        }, 'Target Per Capita Energy (GJ)');
        
        // ---------- ROW 35: PRIMARY ENERGY ----------
        // d_35: Primary Energy
        sm.registerCalculation('d_35', function() {
            const d14 = window.TEUI.StateManager?.getValue('d_14');
            const j27 = getAppNumericValue('j_27');
        const h35 = getAppNumericValue('h_35'); 
        const f27 = getAppNumericValue('f_27'); 
            
        if (d14 === "Targeted Use") {
            return j27 * h35;
        } else {
            return f27 * h35;
        }
        }, 'Primary Energy (kWh/yr)');
    
        // f_35: Primary Energy Intensity
        sm.registerCalculation('f_35', function() {
            const d35 = getAppNumericValue('d_35');
        const h15 = getAppNumericValue('h_15'); 
        return d35 / (h15 || 1);
        }, 'Primary Energy Intensity (kWh/m²/yr)');
        
        // Register dependencies for Reference Model values
        sm.registerDependency('ref_l_27', 'ref_g_27');
        sm.registerDependency('ref_l_27', 'ref_k_27');
        sm.registerDependency('ref_j_27', 'ref_k_27');
        sm.registerDependency('ref_h_28', 'ref_j_28');
        sm.registerDependency('ref_h_28', 'ref_k_28');
        sm.registerDependency('ref_l_28', 'ref_k_28');
        sm.registerDependency('ref_h_29', 'ref_j_29');
        sm.registerDependency('ref_h_29', 'ref_k_29');
        sm.registerDependency('ref_l_29', 'ref_k_29');
        sm.registerDependency('ref_h_30', 'ref_j_30');
        sm.registerDependency('ref_h_30', 'ref_k_30');
        sm.registerDependency('ref_l_30', 'ref_k_30');
        sm.registerDependency('ref_h_31', 'ref_j_31');
        sm.registerDependency('ref_h_31', 'ref_k_31');
        sm.registerDependency('ref_l_31', 'ref_k_31');
        sm.registerDependency('ref_j_27', 'ref_j_32');
        sm.registerDependency('ref_j_28', 'ref_j_32');
        sm.registerDependency('ref_j_29', 'ref_j_32');
        sm.registerDependency('ref_j_30', 'ref_j_32');
        sm.registerDependency('ref_j_31', 'ref_j_32');
        sm.registerDependency('ref_k_27', 'ref_k_32');
        sm.registerDependency('ref_k_28', 'ref_k_32');
        sm.registerDependency('ref_k_29', 'ref_k_32');
        sm.registerDependency('ref_k_30', 'ref_k_32');
        sm.registerDependency('ref_k_31', 'ref_k_32');
        sm.registerDependency('d_60', 'ref_k_32');
        
        // Register main dependencies
        // Row 27: Electricity
        sm.registerDependency('d_27', 'f_27');
        sm.registerDependency('d_43', 'f_27');
        sm.registerDependency('i_43', 'f_27');
        sm.registerDependency('f_27', 'g_27');
        sm.registerDependency('l_27', 'g_27');
        sm.registerDependency('d_136', 'h_27');
        sm.registerDependency('h_27', 'j_27');
        sm.registerDependency('d_43', 'j_27');
        sm.registerDependency('i_43', 'j_27');
        sm.registerDependency('j_27', 'k_27');
        sm.registerDependency('l_27', 'k_27');
        sm.registerDependency('d_19', 'l_27');
        sm.registerDependency('h_12', 'l_27');
        
        // Row 28: Gas
        sm.registerDependency('d_28', 'f_28');
        sm.registerDependency('d_28', 'g_28');
        sm.registerDependency('l_28', 'g_28');
        sm.registerDependency('d_51', 'h_28');
        sm.registerDependency('e_51', 'h_28');
        sm.registerDependency('d_113', 'h_28');
        sm.registerDependency('h_115', 'h_28');
        sm.registerDependency('h_28', 'j_28');
        sm.registerDependency('h_28', 'k_28');
        sm.registerDependency('l_28', 'k_28');
        
        // Row 29: Propane
        sm.registerDependency('d_29', 'f_29');
        sm.registerDependency('d_29', 'g_29');
        sm.registerDependency('l_29', 'g_29');
        sm.registerDependency('d_29', 'h_29');
        sm.registerDependency('h_29', 'j_29');
        sm.registerDependency('h_29', 'k_29');
        sm.registerDependency('l_29', 'k_29');
        
        // Row 30: Oil
        sm.registerDependency('d_30', 'f_30');
        sm.registerDependency('d_30', 'g_30');
        sm.registerDependency('l_30', 'g_30');
        sm.registerDependency('d_51', 'h_30');
        sm.registerDependency('k_54', 'h_30');
        sm.registerDependency('d_113', 'h_30');
        sm.registerDependency('f_115', 'h_30');
        sm.registerDependency('h_30', 'j_30');
        sm.registerDependency('h_30', 'k_30');
        sm.registerDependency('l_30', 'k_30');
        
        // Row 31: Wood
        sm.registerDependency('d_31', 'f_31');
        sm.registerDependency('h_31', 'g_31');
        sm.registerDependency('l_31', 'g_31');
        sm.registerDependency('d_31', 'h_31');
        sm.registerDependency('h_31', 'j_31');
        sm.registerDependency('h_31', 'k_31');
        sm.registerDependency('l_31', 'k_31');
        
        // Row 32: Subtotals
        sm.registerDependency('f_27', 'f_32');
        sm.registerDependency('f_28', 'f_32');
        sm.registerDependency('f_29', 'f_32');
        sm.registerDependency('f_30', 'f_32');
        sm.registerDependency('f_31', 'f_32');
        sm.registerDependency('g_27', 'g_32');
        sm.registerDependency('g_28', 'g_32');
        sm.registerDependency('g_29', 'g_32');
        sm.registerDependency('g_30', 'g_32');
        sm.registerDependency('g_31', 'g_32');
        sm.registerDependency('d_60', 'g_32');
        sm.registerDependency('j_27', 'j_32');
        sm.registerDependency('j_28', 'j_32');
        sm.registerDependency('j_29', 'j_32');
        sm.registerDependency('j_30', 'j_32');
        sm.registerDependency('j_31', 'j_32');
        sm.registerDependency('k_27', 'k_32');
        sm.registerDependency('k_28', 'k_32');
        sm.registerDependency('k_29', 'k_32');
        sm.registerDependency('k_30', 'k_32');
        sm.registerDependency('k_31', 'k_32');
        sm.registerDependency('d_60', 'k_32');
        
        // Row 33: Total Net Energy
        sm.registerDependency('f_27', 'd_33');
        sm.registerDependency('f_28', 'd_33');
        sm.registerDependency('f_29', 'd_33');
        sm.registerDependency('f_30', 'd_33');
        sm.registerDependency('f_31', 'd_33');
        sm.registerDependency('d_43', 'd_33');
        sm.registerDependency('i_43', 'd_33');
        sm.registerDependency('j_27', 'h_33');
        sm.registerDependency('j_28', 'h_33');
        sm.registerDependency('j_29', 'h_33');
        sm.registerDependency('j_30', 'h_33');
        sm.registerDependency('j_31', 'h_33');
        sm.registerDependency('i_43', 'h_33');
        sm.registerDependency('d_43', 'h_33');
        
        // Row 34: Per Capita Energy
        sm.registerDependency('f_32', 'd_34');
        sm.registerDependency('d_63', 'd_34');
        sm.registerDependency('d_33', 'f_34');
        sm.registerDependency('d_63', 'f_34');
        sm.registerDependency('j_32', 'h_34');
        sm.registerDependency('d_63', 'h_34');
        sm.registerDependency('h_33', 'j_34');
        sm.registerDependency('d_63', 'j_34');
        
        // Row 35: Primary Energy
        sm.registerDependency('d_14', 'd_35');
        sm.registerDependency('j_27', 'd_35');
        sm.registerDependency('h_35', 'd_35');
        sm.registerDependency('f_27', 'd_35');
        sm.registerDependency('d_35', 'f_35');
        sm.registerDependency('h_15', 'f_35');
    }
    
    //==========================================================================
    // DUAL-ENGINE ARCHITECTURE
    //==========================================================================
    
    /**
     * REFERENCE MODEL ENGINE: Calculate all Reference values
     */
    function calculateReferenceModel() {
        if (referenceCalculationInProgress) return;
        
        try {
        referenceCalculationInProgress = true;
        
            // Get Reference values
            const ref_d136 = getRefNumericValue('d_136', 0);
            
            const ref_d51 = window.TEUI?.StateManager?.getReferenceValue?.('d_51') || 
                          window.TEUI?.StateManager?.getValue?.('d_51');
            const ref_e51 = getRefNumericValue('e_51', 0);
            const ref_k54 = getRefNumericValue('k_54', 0);
            const ref_d113 = window.TEUI?.StateManager?.getReferenceValue?.('d_113') || 
                           window.TEUI?.StateManager?.getValue?.('d_113');
            const ref_h115 = getRefNumericValue('h_115', 0);
            const ref_f115 = getRefNumericValue('f_115', 0);
            
            const d27 = getAppNumericValue('d_27', 0);
            const d28 = getAppNumericValue('d_28', 0);
            const d29 = getAppNumericValue('d_29', 0);
            const d30 = getAppNumericValue('d_30', 0);
            const d31 = getAppNumericValue('d_31', 0);
            const d60 = getAppNumericValue('d_60', 0);
            
            // Get emission factors
            const l27 = getRefNumericValue('l_27', 0);
            const l28 = getAppNumericValue('l_28', 0);
            const l29 = getAppNumericValue('l_29', 0);
            const l30 = getAppNumericValue('l_30', 0);
            const l31 = getAppNumericValue('l_31', 0);
        
        // Calculate Reference H values (Target consumption)
        const ref_h27 = ref_d136;
        
            // H28: Gas target
        let ref_h28 = 0;
        if (ref_d113 === "Gas" && ref_d51 === "Gas") {
                ref_h28 = ref_e51 + ref_h115;
        } else if (ref_d51 === "Gas") {
                ref_h28 = ref_e51;
        } else if (ref_d113 === "Gas") {
                ref_h28 = ref_h115;
        }
        
        // H29: Propane = actual
        const ref_h29 = d29;
        
            // H30: Oil target
        let ref_h30 = 0;
        if (ref_d113 === "Oil" && ref_d51 === "Oil") {
                ref_h30 = ref_k54 + ref_f115;
        } else if (ref_d51 === "Oil") {
                ref_h30 = ref_k54;
        } else if (ref_d113 === "Oil") {
                ref_h30 = ref_f115;
        }
        
        // H31: Wood = actual
        const ref_h31 = d31;
        
        // Calculate Reference J values (Energy)
            const ref_j27 = ref_h27;
            const ref_j28 = ref_h28 * 0.0373 * 277.7778;
            const ref_j29 = ref_h29 * 14.019;
            const ref_j30 = ref_h30 * 36.72 * 0.2777778;
            const ref_j31 = ref_h31 * 1000;
        
        // Calculate Reference K values (Emissions)
            const ref_k27 = (ref_j27 * l27) / 1000;
        const ref_k28 = (ref_h28 * l28) / 1000;
        const ref_k29 = (ref_h29 * l29) / 1000;
        const ref_k30 = (ref_h30 * l30) / 1000;
        const ref_k31 = ref_h31 * l31;
        
        // Calculate Reference subtotals
        const ref_j32 = ref_j27 + ref_j28 + ref_j29 + ref_j30 + ref_j31;
        const ref_k32 = ref_k27 + ref_k28 + ref_k29 + ref_k30 + ref_k31 - (d60 * 1000);
        
            // Store Reference values with ref_ prefix
        if (window.TEUI?.StateManager) {
                // Row 27
                window.TEUI.StateManager.setValue('ref_h_27', ref_h27.toString(), 'calculated');
                window.TEUI.StateManager.setValue('ref_j_27', ref_j27.toString(), 'calculated');
                window.TEUI.StateManager.setValue('ref_k_27', ref_k27.toString(), 'calculated');
            
            // Row 28
                window.TEUI.StateManager.setValue('ref_h_28', ref_h28.toString(), 'calculated');
                window.TEUI.StateManager.setValue('ref_j_28', ref_j28.toString(), 'calculated');
                window.TEUI.StateManager.setValue('ref_k_28', ref_k28.toString(), 'calculated');
            
            // Row 29
                window.TEUI.StateManager.setValue('ref_h_29', ref_h29.toString(), 'calculated');
                window.TEUI.StateManager.setValue('ref_j_29', ref_j29.toString(), 'calculated');
                window.TEUI.StateManager.setValue('ref_k_29', ref_k29.toString(), 'calculated');
            
            // Row 30
                window.TEUI.StateManager.setValue('ref_h_30', ref_h30.toString(), 'calculated');
                window.TEUI.StateManager.setValue('ref_j_30', ref_j30.toString(), 'calculated');
                window.TEUI.StateManager.setValue('ref_k_30', ref_k30.toString(), 'calculated');
            
            // Row 31
                window.TEUI.StateManager.setValue('ref_h_31', ref_h31.toString(), 'calculated');
                window.TEUI.StateManager.setValue('ref_j_31', ref_j31.toString(), 'calculated');
                window.TEUI.StateManager.setValue('ref_k_31', ref_k31.toString(), 'calculated');
                
                // Subtotals
                window.TEUI.StateManager.setValue('ref_j_32', ref_j32.toString(), 'calculated');
                window.TEUI.StateManager.setValue('ref_k_32', ref_k32.toString(), 'calculated');
        }
        } finally {
            referenceCalculationInProgress = false;
        }
    }
    
    /**
     * TARGET MODEL ENGINE: Calculate all Target/Application values
     */
    function calculateTargetModel() {
        // Update electricity emission factor
        updateElectricityEmissionFactor();
        
        // Calculate all rows
        const f27Value = calculateF27();
        setCalculatedValue('f_27', f27Value, 'number-2dp-comma');
        const g27Value = calculateG27();
        setCalculatedValue('g_27', g27Value, 'number-2dp-comma');
        
        const f28Value = calculateF28();
        setCalculatedValue('f_28', f28Value, 'number-2dp-comma');
        const g28Value = calculateG28();
        setCalculatedValue('g_28', g28Value, 'number-2dp-comma');
        
        const f29Value = calculateF29();
        setCalculatedValue('f_29', f29Value, 'number-2dp-comma');
        const g29Value = calculateG29();
        setCalculatedValue('g_29', g29Value, 'number-2dp-comma');
        
        const f30Value = calculateF30();
        setCalculatedValue('f_30', f30Value, 'number-2dp-comma');
        const g30Value = calculateG30();
        setCalculatedValue('g_30', g30Value, 'number-2dp-comma');
        
        const f31Value = calculateF31();
        setCalculatedValue('f_31', f31Value, 'number-2dp-comma');
        const g31Value = calculateG31();
        setCalculatedValue('g_31', g31Value, 'number-2dp-comma');
        
        // Update subtotals
        updateSubtotals();
    }
    
    /**
     * Main calculation function for Section 04.
     * Handles both reference and application models.
     */
    function calculateAll() {
        // Prevent recursion
        if (window.TEUI.sect04.calculationInProgress) return;
        
        // Set recursion protection flag
            window.TEUI.sect04.calculationInProgress = true;
            
        try {
            // DUAL-ENGINE ARCHITECTURE: Always run both engines
            calculateReferenceModel();  // Calculates Reference values using ref_ inputs
            calculateTargetModel();     // Calculates Target values using application state
            
            // CRITICAL FIX: Update UI after calculations complete
            refreshUIForCurrentMode();
        } finally {
            // Clear recursion protection flag
            window.TEUI.sect04.calculationInProgress = false;
        }
    }

    /**
     * Called when the section is rendered
     */
    function onSectionRendered() {
        // Set global recursion protection flag
        window.TEUI.sect04 = window.TEUI.sect04 || {};
        window.TEUI.sect04.calculationInProgress = false;
        
        // Initialize event handlers for editable fields
        initializeEventHandlers();
        
        // Register IT-DEPENDS calculations
        registerITDependsCalculations();
        
        // Set default province if not already set
        if (window.TEUI?.StateManager && !window.TEUI.StateManager.getValue('d_19')) {
            window.TEUI.StateManager.setValue('d_19', 'ON', 'default');
            if (!window.TEUI.StateManager.getValue('dd_d_19')) {
                window.TEUI.StateManager.setValue('dd_d_19', 'ON', 'default');
            }
        }
        
        // Mark as initialized
        window.TEUI.sect04.initialized = true;
        
        // Run initial calculations after initialization
        calculateAll();
        
        // CRITICAL FIX: Ensure UI reflects the correct mode immediately
        refreshUIForCurrentMode();
    }
    
    // Return public API using standardized function names
    return {
        // Standardized names REQUIRED by FieldManager
        getFields: getFields, 
        getDropdownOptions: getDropdownOptions,
        getLayout: getLayout,
        initializeEventHandlers: initializeEventHandlers,
        onSectionRendered: onSectionRendered,
        
        // Metadata accessor
        getMetadata: function() { 
            return sectionRows.metadata; 
        },
        
        // Public calculation functions
        calculateAll: calculateAll,
        calculateReferenceModel: calculateReferenceModel,
        calculateApplicationModel: calculateTargetModel,
        
        // CRITICAL FIX: Export UI refresh function
        refreshUIForCurrentMode: refreshUIForCurrentMode,
        
        // Testing function
        testITDependsCalculations: testITDependsCalculations
    };
    
    /**
     * Test IT-DEPENDS calculations for this section
     * Useful for debugging and verification
     */
    function testITDependsCalculations() {
        if (!window.TEUI?.StateManager) {
            console.error('[S04 Test] StateManager not available');
            return;
        }
        
        console.log('--------------------------------');
        console.log('SECTION 04 - IT-DEPENDS TEST');
        console.log('--------------------------------');
        
        // Test data
        const testData = {
            'd_27': '100000',   // Electricity 
            'd_28': '1000',     // Gas
            'd_29': '500',      // Propane
            'd_30': '200',      // Oil
            'd_31': '5',        // Wood
            'd_43': '10000',    // Onsite renewables
            'i_43': '5000',     // Offsite REC
            'd_136': '95000',   // Target electricity
            'l_27': '51',       // Electricity emissions factor
            'l_28': '1921',     // Gas emissions factor
            'l_29': '2970',     // Propane emissions factor
            'l_30': '2753',     // Oil emissions factor
            'l_31': '150',      // Wood emissions factor
            'd_60': '2',        // Wood offsets
            'd_63': '4'         // Occupants
        };
        
        // Set test values
        Object.entries(testData).forEach(([fieldId, value]) => {
            window.TEUI.StateManager.setValue(fieldId, value, 'test');
            console.log(`[S04 Test] Set ${fieldId} = ${value}`);
        });
        
        // Wait for StateManager to process values
        setTimeout(() => {
            // Verify row 27: Electricity
            const f27 = window.TEUI.parseNumeric(window.TEUI.StateManager.getValue('f_27'), 0);
            console.log(`[S04 Test] f_27 (Actual Net Electricity): ${f27.toFixed(2)} kWh/yr`);
            const expected_f27 = 100000 - 10000 - 5000; // Electricity - Onsite - Offsite
            console.log(`[S04 Test] Expected f_27: ${expected_f27.toFixed(2)} kWh/yr`);
            
            const g27 = window.TEUI.parseNumeric(window.TEUI.StateManager.getValue('g_27'), 0);
            console.log(`[S04 Test] g_27 (Actual Electricity Emissions): ${g27.toFixed(2)} kgCO2e/yr`);
            const expected_g27 = (expected_f27 * 51) / 1000; // Net electricity * factor / 1000
            console.log(`[S04 Test] Expected g_27: ${expected_g27.toFixed(2)} kgCO2e/yr`);
            
            // Verify subtotals
            const f32 = window.TEUI.parseNumeric(window.TEUI.StateManager.getValue('f_32'), 0);
            console.log(`[S04 Test] f_32 (Total Actual Energy): ${f32.toFixed(2)} kWh/yr`);
            
            const g32 = window.TEUI.parseNumeric(window.TEUI.StateManager.getValue('g_32'), 0);
            console.log(`[S04 Test] g_32 (Total Actual Emissions): ${g32.toFixed(2)} kgCO2e/yr`);
            
            const j32 = window.TEUI.parseNumeric(window.TEUI.StateManager.getValue('j_32'), 0);
            console.log(`[S04 Test] j_32 (Total Target Energy): ${j32.toFixed(2)} kWh/yr`);
            
            const k32 = window.TEUI.parseNumeric(window.TEUI.StateManager.getValue('k_32'), 0);
            console.log(`[S04 Test] k_32 (Total Target Emissions): ${k32.toFixed(2)} kgCO2e/yr`);
            
            // Verify per capita values
            const d34 = window.TEUI.parseNumeric(window.TEUI.StateManager.getValue('d_34'), 0);
            console.log(`[S04 Test] d_34 (Actual Per Capita Energy): ${d34.toFixed(2)} kWh/person`);
            const expected_d34 = f32 / 4; // Total energy / occupants
            console.log(`[S04 Test] Expected d_34: ${expected_d34.toFixed(2)} kWh/person`);
            
            console.log('--------------------------------');
            console.log('SECTION 04 - TEST COMPLETE');
            console.log('--------------------------------');
            }, 100);
        }
})();