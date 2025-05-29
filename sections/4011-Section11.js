/**
 * 4011-Section11.js
 * Refactored Transmission Losses (Section 11) module for TEUI Calculator 4.011
 */

// Ensure namespace exists
window.TEUI = window.TEUI || {};
window.TEUI.SectionModules = window.TEUI.SectionModules || {};

// Section 11: Transmission Losses Module
window.TEUI.SectionModules.sect11 = (function() {
    //==========================================================================
    // CONFIGURATION
    //==========================================================================
    
    // Baseline values for Reference % calculation (derived from screenshot)
    const baselineValues = {
        85: { type: 'rsi', value: 5.3 },   // Roof
        86: { type: 'rsi', value: 4.1 },   // Walls AG
        87: { type: 'rsi', value: 6.6 },   // Floor Exp
        88: { type: 'uvalue', value: 1.99 }, // Doors
        89: { type: 'uvalue', value: 1.42 }, // Window N
        90: { type: 'uvalue', value: 1.42 }, // Window E
        91: { type: 'uvalue', value: 1.42 }, // Window S
        92: { type: 'uvalue', value: 1.42 }, // Window W
        93: { type: 'uvalue', value: 1.42 }, // Skylights
        94: { type: 'rsi', value: 1.8 },   // Walls BG
        95: { type: 'rsi', value: 3.5 },   // Floor Slab
        97: { type: 'penalty', value: 0.2 } // TBP (Pass <= 20%)
    };

    // Map Section 11 area fields (d_88-d_93) to their Section 10 sources
    const areaSourceMap = {
        88: 'd_73', 89: 'd_74', 90: 'd_75', 91: 'd_76', 92: 'd_77', 93: 'd_78'
    };

    // Configuration for each component row to be calculated
    const componentConfig = [
        { row: 85, type: 'air', input: 'rsi' },
        { row: 86, type: 'air', input: 'rsi' },
        { row: 87, type: 'air', input: 'rsi' },
        { row: 88, type: 'air', input: 'uvalue' },
        { row: 89, type: 'air', input: 'uvalue' },
        { row: 90, type: 'air', input: 'uvalue' },
        { row: 91, type: 'air', input: 'uvalue' },
        { row: 92, type: 'air', input: 'uvalue' },
        { row: 93, type: 'air', input: 'uvalue' },
        { row: 94, type: 'ground', input: 'rsi' },
        { row: 95, type: 'ground', input: 'rsi' },
    ];

    // List of all editable fields in this section
    const editableFields = [
        'd_85', 'f_85', 'd_86', 'f_86', 'd_87', 'f_87', // Air-facing RSI inputs
        'g_88', 'g_89', 'g_90', 'g_91', 'g_92', 'g_93', // Window/Door U-value inputs
        'd_94', 'f_94', 'd_95', 'f_95', // Ground-facing RSI inputs
        'd_96' // Interior Floor Area
    ];

    //==========================================================================
    // LAYOUT DEFINITION (sectionRows)
    //==========================================================================
    const sectionRows = {
        "header": {
            id: "11-ID", rowId: "11-ID", label: "Transmission Losses Units",
            cells: {
                c: { content: "", classes: ["section-subheader"] },
                d: { content: "Areas m²", classes: ["section-subheader", "align-center"] },
                e: { content: "Rimp ft²F•hr/Btu", classes: ["section-subheader", "align-center"] },
                f: { content: "RSI K•m²/W", classes: ["section-subheader", "align-center"] },
                g: { content: "U-Value W/m²•K", classes: ["section-subheader", "align-center"] },
                h: { content: "% of Ae & Ag", classes: ["section-subheader", "align-center"] },
                i: { content: "Heatloss kWh/yr", classes: ["section-subheader", "align-center"] },
                j: { content: "Heatloss %", classes: ["section-subheader", "align-center"] },
                k: { content: "Heatgain kWh/Cool Season", classes: ["section-subheader", "align-center"] },
                l: { content: "Heatgain %", classes: ["section-subheader", "align-center"] },
                m: { content: "Reference", classes: ["section-subheader", "align-center"] }, // Updated label
                n: { content: "Status", classes: ["section-subheader", "align-center"] } // Updated label
            }
        },
        "85": {
            id: "B.4", rowId: "B.4", label: "Roof", cells: {
                c: { label: "Roof" }, d: { fieldId: "d_85", type: "editable", value: "1411.52" },
                e: { fieldId: "e_85", type: "calculated", value: "0.00" }, f: { fieldId: "f_85", type: "editable", value: "9.35" },
                g: { fieldId: "g_85", type: "calculated", value: "0.00" }, h: { fieldId: "h_85", type: "calculated", value: "0%" },
                i: { fieldId: "i_85", type: "calculated", value: "0.00" }, j: { fieldId: "j_85", type: "calculated", value: "0%" },
                k: { fieldId: "k_85", type: "calculated", value: "0.00" }, l: { fieldId: "l_85", type: "calculated", value: "0%" },
                m: { fieldId: "m_85", type: "calculated", value: "0%" }, n: { fieldId: "n_85", type: "calculated", value: "✓" }
            }
        },
        "86": {
            id: "B.5", rowId: "B.5", label: "Walls Above Grade (Exclude Openings!)", cells: {
                c: { label: "Walls Above Grade (Exclude Openings!)" }, d: { fieldId: "d_86", type: "editable", value: "712.97" },
                e: { fieldId: "e_86", type: "calculated", value: "0.00" }, f: { fieldId: "f_86", type: "editable", value: "6.69" },
                g: { fieldId: "g_86", type: "calculated", value: "0.00" }, h: { fieldId: "h_86", type: "calculated", value: "0%" },
                i: { fieldId: "i_86", type: "calculated", value: "0.00" }, j: { fieldId: "j_86", type: "calculated", value: "0%" },
                k: { fieldId: "k_86", type: "calculated", value: "0.00" }, l: { fieldId: "l_86", type: "calculated", value: "0%" },
                m: { fieldId: "m_86", type: "calculated", value: "0%" }, n: { fieldId: "n_86", type: "calculated", value: "✓" }
            }
        },
        "87": {
             id: "B.6", rowId: "B.6", label: "Floor Exposed", cells: {
                c: { label: "Floor Exposed" }, d: { fieldId: "d_87", type: "editable", value: "0.00" },
                e: { fieldId: "e_87", type: "calculated", value: "0.00" }, f: { fieldId: "f_87", type: "editable", value: "9.52" },
                g: { fieldId: "g_87", type: "calculated", value: "0.00" }, h: { fieldId: "h_87", type: "calculated", value: "0%" },
                i: { fieldId: "i_87", type: "calculated", value: "0.00" }, j: { fieldId: "j_87", type: "calculated", value: "0%" },
                k: { fieldId: "k_87", type: "calculated", value: "0.00" }, l: { fieldId: "l_87", type: "calculated", value: "0%" },
                m: { fieldId: "m_87", type: "calculated", value: "0%" }, n: { fieldId: "n_87", type: "calculated", value: "✓" }
            }
        },
        "88": {
            id: "B.7.0", rowId: "B.7.0", label: "Doors", cells: {
                c: { label: "Doors" }, d: { fieldId: "d_88", type: "calculated", value: "0.00" },
                e: { fieldId: "e_88", type: "calculated", value: "0.00" }, f: { fieldId: "f_88", type: "calculated", value: "0.00" },
                g: { fieldId: "g_88", type: "editable", value: "0.900" }, h: { fieldId: "h_88", type: "calculated", value: "0%" },
                i: { fieldId: "i_88", type: "calculated", value: "0.00" }, j: { fieldId: "j_88", type: "calculated", value: "0%" },
                k: { fieldId: "k_88", type: "calculated", value: "0.00" }, l: { fieldId: "l_88", type: "calculated", value: "0%" },
                m: { fieldId: "m_88", type: "calculated", value: "0%" }, n: { fieldId: "n_88", type: "calculated", value: "✓" }
            }
        },
        "89": {
            id: "B.8.1", rowId: "B.8.1", label: "Window Area North", cells: {
                c: { label: "Window Area North" }, d: { fieldId: "d_89", type: "calculated", value: "0.00" },
                e: { fieldId: "e_89", type: "calculated", value: "0.00" }, f: { fieldId: "f_89", type: "calculated", value: "0.00" },
                g: { fieldId: "g_89", type: "editable", value: "0.900" }, h: { fieldId: "h_89", type: "calculated", value: "0%" },
                i: { fieldId: "i_89", type: "calculated", value: "0.00" }, j: { fieldId: "j_89", type: "calculated", value: "0%" },
                k: { fieldId: "k_89", type: "calculated", value: "0.00" }, l: { fieldId: "l_89", type: "calculated", value: "0%" },
                m: { fieldId: "m_89", type: "calculated", value: "0%" }, n: { fieldId: "n_89", type: "calculated", value: "✓" }
            }
        },
        "90": {
             id: "B.8.2", rowId: "B.8.2", label: "Window Area East", cells: {
                c: { label: "Window Area East" }, d: { fieldId: "d_90", type: "calculated", value: "0.00" },
                e: { fieldId: "e_90", type: "calculated", value: "0.00" }, f: { fieldId: "f_90", type: "calculated", value: "0.00" },
                g: { fieldId: "g_90", type: "editable", value: "0.900" }, h: { fieldId: "h_90", type: "calculated", value: "0%" },
                i: { fieldId: "i_90", type: "calculated", value: "0.00" }, j: { fieldId: "j_90", type: "calculated", value: "0%" },
                k: { fieldId: "k_90", type: "calculated", value: "0.00" }, l: { fieldId: "l_90", type: "calculated", value: "0%" },
                m: { fieldId: "m_90", type: "calculated", value: "0%" }, n: { fieldId: "n_90", type: "calculated", value: "✓" }
             }
        },
        "91": {
             id: "B.8.3", rowId: "B.8.3", label: "Window Area South", cells: {
                c: { label: "Window Area South" }, d: { fieldId: "d_91", type: "calculated", value: "0.00" },
                e: { fieldId: "e_91", type: "calculated", value: "0.00" }, f: { fieldId: "f_91", type: "calculated", value: "0.00" },
                g: { fieldId: "g_91", type: "editable", value: "0.900" }, h: { fieldId: "h_91", type: "calculated", value: "0%" },
                i: { fieldId: "i_91", type: "calculated", value: "0.00" }, j: { fieldId: "j_91", type: "calculated", value: "0%" },
                k: { fieldId: "k_91", type: "calculated", value: "0.00" }, l: { fieldId: "l_91", type: "calculated", value: "0%" },
                m: { fieldId: "m_91", type: "calculated", value: "0%" }, n: { fieldId: "n_91", type: "calculated", value: "✓" }
            }
        },
        "92": {
            id: "B.8.4", rowId: "B.8.4", label: "Window Area West", cells: {
                c: { label: "Window Area West" }, d: { fieldId: "d_92", type: "calculated", value: "0.00" },
                e: { fieldId: "e_92", type: "calculated", value: "0.00" }, f: { fieldId: "f_92", type: "calculated", value: "0.00" },
                g: { fieldId: "g_92", type: "editable", value: "0.900" }, h: { fieldId: "h_92", type: "calculated", value: "0%" },
                i: { fieldId: "i_92", type: "calculated", value: "0.00" }, j: { fieldId: "j_92", type: "calculated", value: "0%" },
                k: { fieldId: "k_92", type: "calculated", value: "0.00" }, l: { fieldId: "l_92", type: "calculated", value: "0%" },
                m: { fieldId: "m_92", type: "calculated", value: "0%" }, n: { fieldId: "n_92", type: "calculated", value: "✓" }
            }
        },
        "93": {
            id: "B.8.5", rowId: "B.8.5", label: "Skylights", cells: {
                c: { label: "Skylights" }, d: { fieldId: "d_93", type: "calculated", value: "0.00" },
                e: { fieldId: "e_93", type: "calculated", value: "0.00" }, f: { fieldId: "f_93", type: "calculated", value: "0.00" },
                g: { fieldId: "g_93", type: "editable", value: "0.900" }, h: { fieldId: "h_93", type: "calculated", value: "0%" },
                i: { fieldId: "i_93", type: "calculated", value: "0.00" }, j: { fieldId: "j_93", type: "calculated", value: "0%" },
                k: { fieldId: "k_93", type: "calculated", value: "0.00" }, l: { fieldId: "l_93", type: "calculated", value: "0%" },
                m: { fieldId: "m_93", type: "calculated", value: "0%" }, n: { fieldId: "n_93", type: "calculated", value: "✓" }
            }
        },
        "94": {
             id: "B.9", rowId: "B.9", label: "Walls Below Grade (Conditioned Space)", cells: {
                c: { label: "Walls Below Grade (Conditioned Space)" }, d: { fieldId: "d_94", type: "editable", value: "0.00" },
                e: { fieldId: "e_94", type: "calculated", value: "0.00" }, f: { fieldId: "f_94", type: "editable", value: "4.00" },
                g: { fieldId: "g_94", type: "calculated", value: "0.00" }, h: { fieldId: "h_94", type: "calculated", value: "0%" },
                i: { fieldId: "i_94", type: "calculated", value: "0.00" }, j: { fieldId: "j_94", type: "calculated", value: "0%" },
                k: { fieldId: "k_94", type: "calculated", value: "0.00" }, l: { fieldId: "l_94", type: "calculated", value: "0%" },
                m: { fieldId: "m_94", type: "calculated", value: "0%" }, n: { fieldId: "n_94", type: "calculated", value: "✓" }
            }
        },
        "95": {
             id: "B.10", rowId: "B.10", label: "Floor Slab (Conditioned Space)", cells: {
                c: { label: "Floor Slab (Conditioned Space)" }, d: { fieldId: "d_95", type: "editable", value: "1100.42" },
                e: { fieldId: "e_95", type: "calculated", value: "0.00" }, f: { fieldId: "f_95", type: "editable", value: "3.70" },
                g: { fieldId: "g_95", type: "calculated", value: "0.00" }, h: { fieldId: "h_95", type: "calculated", value: "100%" },
                i: { fieldId: "i_95", type: "calculated", value: "0.00" }, j: { fieldId: "j_95", type: "calculated", value: "0%" },
                k: { fieldId: "k_95", type: "calculated", value: "0.00" }, l: { fieldId: "l_95", type: "calculated", value: "0%" },
                m: { fieldId: "m_95", type: "calculated", value: "0%" }, n: { fieldId: "n_95", type: "calculated", value: "✓" }
             }
        },
        "96": {
            id: "B.11", rowId: "B.11", label: "B.11 Interior Floors (incl. garages)", cells: {
                c: { label: "B.11 Interior Floors (incl. garages)" }, d: { fieldId: "d_96", type: "editable", value: "29.70" },
                e: { content: "-" }, f: { content: "-" }, g: { content: "-" }, h: { content: "-" },
                i: { content: "-" }, j: { content: "-" }, k: { content: "-" }, l: { content: "-" },
                m: {}, n: {}
            }
        },
        "97": {
            id: "B.12", rowId: "B.12", label: "Thermal Bridge Penalty %", cells: {
                c: { label: "Thermal Bridge Penalty (%)" }, 
                d: { 
                    fieldId: "d_97", 
                    type: "percentage", // Changed from editable to percentage
                    value: "20", // Default value 20%
                    min: 5,      // **** CHANGED: Set min to 5 ****
                    max: 100,     // Max 100%
                    step: 5,      // Step 5%
                    section: "envelope"
                },
                e: { fieldId: "e_97", type: "calculated", value: "0.200" }, // Placeholder for decimal equivalent
                f: { content: "0.00", classes: ["label-prefix"] },
                i: { fieldId: "i_97", type: "calculated", value: "0.00" }, j: { fieldId: "j_97", type: "calculated", value: "0%" },
                k: { fieldId: "k_97", type: "calculated", value: "0.00" }, l: { fieldId: "l_97", type: "calculated", value: "0%" },
                m: { fieldId: "m_97", type: "calculated", value: "0%" }, n: { fieldId: "n_97", type: "calculated", value: "✓" }
            }
        },
        "98": {
            id: "ET", rowId: "ET", label: "ET", cells: {
                c: { label: "Envelope Totals" }, d: { fieldId: "d_98", type: "calculated", value: "0.00" },
                e: { fieldId: "e_98", type: "calculated", value: "0.00" }, f: {}, g: {},
                h: { fieldId: "h_98", type: "calculated", value: "100%" }, i: { fieldId: "i_98", type: "calculated", value: "0.00" },
                j: { fieldId: "j_98", type: "calculated", value: "100%" }, k: { fieldId: "k_98", type: "calculated", value: "0.00" },
                l: { fieldId: "l_98", type: "calculated", value: "100%" }, m: {}, n: { fieldId: "n_98", type: "calculated", value: "✓" }
            }
        }
    };
    
    //==========================================================================
    // ACCESSOR METHODS
    //==========================================================================
    
    function getFields() {
        const fields = {};
        Object.values(sectionRows).forEach(row => {
            if (!row.cells) return;
            Object.values(row.cells).forEach(cell => {
                if (cell.fieldId && cell.type) {
                    // Copy all relevant properties from the cell definition
                    fields[cell.fieldId] = { 
                        ...cell, // Spread operator to copy all properties
                        defaultValue: cell.value // Keep defaultValue mapping for consistency
                    };
                    // Remove original value key if necessary, as it's mapped to defaultValue
                    // delete fields[cell.fieldId].value; 
                }
            });
        });
        return fields;
    }
    
    function getDropdownOptions() { return {}; }

    function getLayout() {
        const layoutRows = [];
        if (sectionRows["header"]) layoutRows.push(createLayoutRow(sectionRows["header"]));
        Object.entries(sectionRows).forEach(([key, row]) => {
            if (key !== "header") layoutRows.push(createLayoutRow(row));
        });
        return { rows: layoutRows };
    }
    
    function createLayoutRow(row) {
        const rowDef = { id: row.id, cells: [{}, {}] };
        const columns = ['c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n'];
        columns.forEach(col => {
            const cell = row.cells?.[col] ? { ...row.cells[col] } : {};
            if (col === 'c' && !cell.label && row.label) cell.label = row.label;
            // Only remove properties confirmed unnecessary for rendering
            delete cell.section; delete cell.dependencies; delete cell.getOptions;
                rowDef.cells.push(cell);
        });
        return rowDef;
    }

    //==========================================================================
    // HELPER FUNCTIONS (Standardized)
    //==========================================================================
    
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

    // 3. EXPLICIT Reference state getter for Reference Model calculations
    function getRefStateValue(fieldId) {
        // First try ref_ prefixed value (from upstream Reference calculations)
        const refFieldId = `ref_${fieldId}`;
        let value = window.TEUI?.StateManager?.getValue?.(refFieldId);
        
        // If no ref_ value exists, check if we're looking for a field that should use Reference standard values
        if ((value === null || value === undefined) && window.TEUI?.StateManager?.getValue) {
            // For Reference calculations, use the Reference standard values when available
            const activeDataSet = window.TEUI.StateManager.activeReferenceDataSet || {};
            if (activeDataSet[fieldId] !== undefined) {
                value = activeDataSet[fieldId];
            } else {
                // Final fallback to main state
                value = window.TEUI.StateManager.getValue(fieldId);
            }
        }
        
        return value;
    }

    // 4. EXPLICIT Application state getter for Target Model calculations  
    function getAppStateValue(fieldId) {
        return window.TEUI?.StateManager?.getApplicationValue?.(fieldId) || getFieldValue(fieldId);
    }

    // 5. Dual-engine value setter
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
        
        // Update DOM display
        const element = document.querySelector(`[data-field-id="${fieldId}"]`);
        if (element) {
            const formattedValue = window.TEUI?.formatNumber?.(rawValue, formatType) ?? rawValue?.toString() ?? 'N/A';
            element.textContent = formattedValue;
        }
    }
    
    function getNumericValue(fieldId) {
        // Use global parser if available
        if (window.TEUI?.parseNumeric) return window.TEUI.parseNumeric(getFieldValue(fieldId));
        
        // Fallback parser (if global isn't loaded yet or for some reason)
            const value = getFieldValue(fieldId);
        if (value === null || value === undefined) return 0;
        if (typeof value === 'number') return value;
        if (typeof value === 'string') {
            const cleanedValue = value.replace(/[$,%]/g, '').trim();
            if (cleanedValue === '') return 0;
            const parsed = parseFloat(cleanedValue);
            return isNaN(parsed) ? 0 : parsed;
        }
        return 0;
    }

    function getFieldValue(fieldId) {
        const stateValue = window.TEUI?.StateManager?.getValue(fieldId);
        if (stateValue != null) return stateValue;
        const element = document.querySelector(`[data-field-id="${fieldId}"]`);
        return element ? (element.value ?? element.textContent?.trim()) : null;
    }

    /**
     * Sets a calculated value in the StateManager and updates the corresponding DOM element.
     * Updated for V2 dual-engine architecture - now an alias for setDualEngineValue
     * @param {string} fieldId - The ID of the field to update.
     * @param {number} rawValue - The raw calculated numeric value.
     * @param {string} [format='number'] - The format type for display.
     */
    function setCalculatedValue(fieldId, rawValue, format = 'number') {
        // Handle potential N/A cases first
        if (!isFinite(rawValue) || rawValue === null || rawValue === undefined) {
             const element = document.querySelector(`[data-field-id="${fieldId}"]`);
             if (element) element.textContent = 'N/A';
             return; // Stop processing if value is not a valid number
        }
        
        // Convert legacy format types to V2 format types
        let formatType = format;
        if (format === 'number') {
             if (fieldId.startsWith('g_')) { formatType = 'u-value'; } // U-Values
             else if (/[hjl]_[\\d]{2,}/.test(fieldId) || fieldId === 'h_98' || fieldId === 'j_98' || fieldId === 'l_98') { formatType = 'percent-2dp'; }
             else formatType = 'number-2dp-comma';
        } else if (format === 'W/m2') {
            formatType = 'u-value';
        } else if (format === 'percent') {
            formatType = 'percent-2dp';
        }
        
        // Use the V2 dual-engine setter
        setDualEngineValue(fieldId, rawValue, formatType);
    }

    function setElementClass(fieldId, isGood) {
        const element = document.querySelector(`[data-field-id="${fieldId}"]`);
        if (element) {
            element.classList.remove("checkmark", "warning");
            element.classList.add(isGood ? "checkmark" : "warning");
        }
    }

    /**
     * Sets indicator classes (e.g., loss-high, loss-medium, loss-low) for a cell.
     * Removes existing indicator classes before adding the new one.
     * @param {string} fieldId - The data-field-id of the cell element.
     * @param {string} newClass - The new indicator class to add (or empty string to remove all).
     * @param {string[]} potentialClasses - An array of all possible indicator classes for this type.
     */
    function setIndicatorClass(fieldId, newClass, potentialClasses) {
        const element = document.querySelector(`[data-field-id="${fieldId}"]`);
        if (element) {
            // Determine base class type from potentialClasses
            const baseClass = potentialClasses[0]?.startsWith('loss') ? 'loss-indicator' : 'gain-indicator';
            const otherBaseClass = baseClass === 'loss-indicator' ? 'gain-indicator' : 'loss-indicator';

            // Remove all potential indicator classes and the other base class
            element.classList.remove(...potentialClasses, otherBaseClass);

            if (newClass) {
                element.classList.add(newClass);
                // Ensure correct base class is present
                if (!element.classList.contains(baseClass)) {
                    element.classList.add(baseClass);
                }
                } else {
                 // Remove base class if removing indicator
                 element.classList.remove(baseClass);
            }
        }
    }

    //==========================================================================
    // CALCULATION FUNCTIONS
    //==========================================================================

    function calculateComponentRow(rowNumber, config, isReferenceCalculation = false) {
        const { type, input } = config;
        const rowStr = rowNumber.toString();
        const areaFieldId = `d_${rowStr}`, rsiFieldId = `f_${rowStr}`, uValueFieldId = `g_${rowStr}`, 
              rimpFieldId = `e_${rowStr}`, heatlossFieldId = `i_${rowStr}`, heatgainFieldId = `k_${rowStr}`;

        try {
            // Area always comes from Application state
            let area = 0;
            const sourceAreaFieldId = areaSourceMap[rowNumber];
            area = sourceAreaFieldId ? (getNumericValue(sourceAreaFieldId) || 0) : (getNumericValue(areaFieldId) || 0);
            if (sourceAreaFieldId && !isReferenceCalculation) {
                setCalculatedValue(areaFieldId, area);
            }
            
            let rsiValue, uValue, inputValue;
            
            // Get input values based on which engine is calling
            if (isReferenceCalculation) {
                // For Reference calculations, use reference values
                if (input === 'rsi') {
                    // Try to get reference RSI value
                    const refFieldId = `f_${rowStr}`;
                    inputValue = window.TEUI?.StateManager?.getReferenceValue(refFieldId) || 
                                baselineValues[rowNumber]?.value || 
                                getNumericValue(rsiFieldId);
                    rsiValue = inputValue;
                    if (rsiValue <= 0) { uValue = Infinity; } else uValue = 1 / rsiValue;
                } else { // input === 'uvalue'
                    // Try to get reference U-value
                    const refFieldId = `g_${rowStr}`;
                    inputValue = window.TEUI?.StateManager?.getReferenceValue(refFieldId) || 
                                baselineValues[rowNumber]?.value || 
                                getNumericValue(uValueFieldId);
                    uValue = inputValue;
                    if (uValue <= 0) { rsiValue = Infinity; } else rsiValue = 1 / uValue;
                }
            } else {
                // For Target calculations, use application values
                if (input === 'rsi') {
                    inputValue = getNumericValue(rsiFieldId);
                    rsiValue = inputValue;
                    if (rsiValue <= 0) { uValue = Infinity; } else uValue = 1 / rsiValue;
                } else { // input === 'uvalue'
                    inputValue = getNumericValue(uValueFieldId);
                    uValue = inputValue;
                    if (uValue <= 0) { rsiValue = Infinity; } else rsiValue = 1 / uValue;
                }
            }
            
            // Update complementary value display only for Target calculations
            if (!isReferenceCalculation) {
                setCalculatedValue(uValueFieldId, (uValue === Infinity ? 'N/A' : uValue), 'W/m2');
                setCalculatedValue(rsiFieldId, (rsiValue === Infinity ? 'N/A' : rsiValue), 'number');
            }

            let hdd, heatgainMultiplier;
            if (type === 'air') {
                hdd = getNumericValue('d_20') || 0;
                heatgainMultiplier = (getNumericValue('d_21') || 0) * 24;
            } else { // ground
                hdd = getNumericValue('d_22') || 0;
                // Get value from i_21 (assume it's stored as percentage, e.g., 50 for 50%)
                let capacitanceFactor_i21 = getNumericValue('i_21'); 
                // Convert percentage to decimal, fallback to 0.5 (50%) if input is invalid or missing
                capacitanceFactor_i21 = (capacitanceFactor_i21 / 100);
                if (isNaN(capacitanceFactor_i21) || capacitanceFactor_i21 === 0) {
                    capacitanceFactor_i21 = 0.5; // Apply fallback if result is invalid or zero
                }
                heatgainMultiplier = capacitanceFactor_i21 * (getNumericValue('h_22') || 0) * 24;
            }

            const denominator = rsiValue * 1000;
            let calcHeatloss = 0, calcHeatgain = 0, calcRimp = 0;
            if (area > 0 && rsiValue !== Infinity && uValue !== Infinity) {
                calcRimp = rsiValue * 5.678;
                calcHeatloss = (area * hdd * 24) / denominator;
                calcHeatgain = (area * heatgainMultiplier) / denominator;
            }
            
            // For Reference calculations, return the calculated values
            if (isReferenceCalculation) {
                return { heatloss: calcHeatloss, heatgain: calcHeatgain };
            }
            
            // For Target calculations, update the DOM
            setCalculatedValue(rimpFieldId, calcRimp);
            setCalculatedValue(heatlossFieldId, calcHeatloss);
            setCalculatedValue(heatgainFieldId, calcHeatgain);
            
        } catch (error) {
            console.error(`Error calculating row ${rowNumber}:`, error);
            if (isReferenceCalculation) {
                return { heatloss: 0, heatgain: 0 };
            } else {
                [rimpFieldId, rsiFieldId, uValueFieldId, heatlossFieldId, heatgainFieldId].forEach(id => setCalculatedValue(id, 0));
            }
        }
    }

    function calculateThermalBridgePenalty(componentHeatlossSubtotal, componentHeatgainSubtotal) {
        try {
            // Read the percentage value directly from state/slider
            const penaltyPercent = getNumericValue('d_97'); 
            // Convert percentage to decimal factor for calculation
            const penaltyDecimal = penaltyPercent / 100;
            const validatedPenalty = Math.max(0, Math.min(1, penaltyDecimal)); // Keep validation just in case
            
            // Update e_97 to display the decimal factor if desired
            setCalculatedValue('e_97', validatedPenalty, 'number-3dp'); // Show decimal with 3dp

            let penaltyHeatloss = componentHeatlossSubtotal * validatedPenalty;
            setCalculatedValue('i_97', penaltyHeatloss);
            const penaltyHeatgain = componentHeatgainSubtotal * validatedPenalty;
            setCalculatedValue('k_97', penaltyHeatgain);
        } catch (error) {
            console.error("Error calculating TBP:", error);
            setCalculatedValue('i_97', 0); setCalculatedValue('k_97', 0);
        }
    }

    function updateReferenceIndicators(rowId) {
        const baseline = baselineValues[rowId];
        if (!baseline) return;
        const mFieldId = `m_${rowId}`, nFieldId = `n_${rowId}`;
        let referencePercent = 100, isGood = true;
        let currentValue = NaN; // Initialize currentValue
        let referenceValue = NaN; // Initialize referenceValue

        try {
            let valueSourceElementId = null;
            let referenceFieldId = null;
            
            if (baseline.type === 'rsi') {
                valueSourceElementId = `f_${rowId}`;
                referenceFieldId = `f_${rowId}`;
            } else if (baseline.type === 'uvalue') {
                valueSourceElementId = `g_${rowId}`;
                referenceFieldId = `g_${rowId}`;
            } else if (baseline.type === 'penalty') {
                valueSourceElementId = `d_${rowId}`;
                referenceFieldId = `d_${rowId}`;
            }

            if (valueSourceElementId) {
                currentValue = getNumericValue(valueSourceElementId);
                if (referenceFieldId && window.TEUI?.StateManager?.getReferenceValue) {
                    referenceValue = window.TEUI.parseNumeric(
                        window.TEUI.StateManager.getReferenceValue(referenceFieldId)
                    ) || baseline.value; 
                } else {
                    referenceValue = baseline.value; 
                }
            } else {
                currentValue = NaN;
                referenceValue = baseline.value;
            }

            if (baseline.type === 'rsi') {
                if (referenceValue > 0 && !isNaN(currentValue)) {
                    referencePercent = (currentValue / referenceValue) * 100;
                }
                isGood = currentValue >= referenceValue;
                // console.log(`[S11] Row ${rowId} RSI comparison: Current=${currentValue}, Reference=${referenceValue}, Percent=${referencePercent.toFixed(0)}%`); // REMOVE/COMMENT
            } else if (baseline.type === 'uvalue') {
                if (currentValue > 0 && !isNaN(currentValue)) {
                    referencePercent = (referenceValue / currentValue) * 100;
                }
                isGood = currentValue <= referenceValue;
                // console.log(`[S11] Row ${rowId} U-value comparison: Current=${currentValue}, Reference=${referenceValue}, Percent=${referencePercent.toFixed(0)}%`); // REMOVE/COMMENT
            } else if (baseline.type === 'penalty') {
                const refPenalty = referenceValue / 100; 
                const currentPenalty = currentValue / 100; 
                isGood = currentPenalty <= refPenalty;
                if (refPenalty > 0) {
                    referencePercent = (refPenalty / currentPenalty) * 100;
                }
                setCalculatedValue(mFieldId, referencePercent / 100, 'percent');
                const nElementCheck = document.querySelector(`[data-field-id="${nFieldId}"]`);
                if (nElementCheck) nElementCheck.textContent = isGood ? "✓" : "✗";
                setElementClass(nFieldId, isGood);
                return; 
            }
            
            setCalculatedValue(mFieldId, referencePercent / 100, 'percent');
            const nElementCheck = document.querySelector(`[data-field-id="${nFieldId}"]`);
            if (nElementCheck) nElementCheck.textContent = isGood ? "✓" : "✗";
            setElementClass(nFieldId, isGood);
        } catch (error) {
            console.error(`Error updating reference indicators for row ${rowId}:`, error);
            const mElementErr = document.querySelector(`[data-field-id="${mFieldId}"]`);
            if (mElementErr) mElementErr.textContent = "Error";
            const nElementErr = document.querySelector(`[data-field-id="${nFieldId}"]`);
            if (nElementErr) nElementErr.textContent = "?";
        }
    }

    //==========================================================================
    // DUAL-ENGINE ARCHITECTURE
    //==========================================================================

    /**
     * REFERENCE MODEL ENGINE: Calculate all Column E values using Reference state
     */
    function calculateReferenceModel() {
        // console.log('[Section11] Running Reference Model calculations...'); // Comment out
        
        let totals = { loss: 0, gain: 0, areaD: 0, airAreaD: 0, groundAreaD: 0 };
        const componentResults = {};

        componentConfig.forEach(config => {
            // Calculate using reference values
            const result = calculateComponentRow(config.row, config, true); // true = isReferenceCalculation
            
            // CRITICAL FIX: After calculateComponentRow stores Reference values with setDualEngineValue,
            // we need to read them from the correct state location
            const area = getNumericValue(`d_${config.row}`) || 0;
            
            // FIX: Read Reference heatloss/heatgain from ref_ prefixed fields or direct result
            let heatloss, heatgain;
            if (result && result.heatloss !== undefined && result.heatgain !== undefined) {
                // Use direct calculation result if available
                heatloss = result.heatloss;
                heatgain = result.heatgain;
            } else {
                // Fallback: Try to read from ref_ prefixed state
                const refHeatloss = window.TEUI?.StateManager?.getValue(`ref_i_${config.row}`);
                const refHeatgain = window.TEUI?.StateManager?.getValue(`ref_k_${config.row}`);
                heatloss = refHeatloss ? window.TEUI.parseNumeric(refHeatloss, 0) : 0;
                heatgain = refHeatgain ? window.TEUI.parseNumeric(refHeatgain, 0) : 0;
            }
            
            // Store for later use
            componentResults[config.row] = { heatloss, heatgain };
            
            totals.loss += heatloss;
            totals.gain += heatgain;
            if (config.row >= 85 && config.row <= 95) totals.areaD += area;
            if (config.type === 'air') totals.airAreaD += area;
            else if (config.type === 'ground') totals.groundAreaD += area;
        });

        // Calculate thermal bridge penalty using reference percentage
        const penaltyPercent = getRefFieldValue('d_97');
        const penaltyDecimal = penaltyPercent / 100;
        const validatedPenalty = Math.max(0, Math.min(1, penaltyDecimal));
        
        const penaltyHeatlossI = totals.loss * validatedPenalty;
        const penaltyHeatgainK = totals.gain * validatedPenalty;

        // Store Reference Model results using V2 dual-engine setter
        setDualEngineValue('d_98', totals.areaD, 'number-2dp-comma');
        setDualEngineValue('i_98', totals.loss, 'number-2dp-comma');
        setDualEngineValue('k_98', totals.gain, 'number-2dp-comma');
        setDualEngineValue('i_97', penaltyHeatlossI, 'number-2dp-comma');
        setDualEngineValue('k_97', penaltyHeatgainK, 'number-2dp-comma');
            
            // Store individual component reference values
            Object.entries(componentResults).forEach(([row, results]) => {
            setDualEngineValue(`i_${row}`, results.heatloss, 'number-2dp-comma');
            setDualEngineValue(`k_${row}`, results.heatgain, 'number-2dp-comma');
            });
        
        // console.log('[Section11] Reference Model values stored'); // Comment out
    }

    /**
     * APPLICATION MODEL ENGINE: Calculate all Column H values using Application state
     */
    function calculateApplicationModel() {
        // console.log('[Section11] Running Application Model calculations...'); // Comment out
        
        let totals = { loss: 0, gain: 0, areaD: 0, airAreaD: 0, groundAreaD: 0 };

        componentConfig.forEach(config => {
            calculateComponentRow(config.row, config, false); // false = Application calculation
            const area = getNumericValue(`d_${config.row}`) || 0;
            totals.loss += getNumericValue(`i_${config.row}`) || 0;
            totals.gain += getNumericValue(`k_${config.row}`) || 0;
            if (config.row >= 85 && config.row <= 95) totals.areaD += area;
            if (config.type === 'air') totals.airAreaD += area;
            else if (config.type === 'ground') totals.groundAreaD += area;
        });

        calculateThermalBridgePenalty(totals.loss, totals.gain);
        const penaltyHeatlossI = getNumericValue('i_97') || 0;
        const penaltyHeatgainK = getNumericValue('k_97') || 0;

        // Grand totals include component subtotals + penalty
        // Corrected: i_98 should only be the sum of components 85-95
        const grandTotalHeatlossI = totals.loss; // Removed + penaltyHeatlossI
        // Corrected: k_98 should be SUM(K85:K95) and EXCLUDE k_97 (penaltyHeatgainK)
        const grandTotalHeatgainK = totals.gain; 

        // Set totals for Row 98
        setCalculatedValue('d_98', totals.areaD);
        setCalculatedValue('i_98', grandTotalHeatlossI);
        setCalculatedValue('k_98', grandTotalHeatgainK);

        // Calculate Percentages and Update Reference Indicators
        const totalAreaAe = totals.airAreaD > 0 ? totals.airAreaD : 1;
        const totalAreaAg = totals.groundAreaD > 0 ? totals.groundAreaD : 1;
        const rowsToProcess = [...componentConfig, { row: 97 }];
        const lossIndicatorClasses = ['loss-high', 'loss-medium', 'loss-low'];
        const gainIndicatorClasses = ['gain-high', 'gain-medium', 'gain-low']; // Define gain classes

        rowsToProcess.forEach(config => {
            const rowStr = config.row.toString();
            const hCellFieldId = `h_${rowStr}`; // Field ID for Column H
            const jCellFieldId = `j_${rowStr}`; // Field ID for Column J

            if (config.row !== 97) { // Area % only for components
                 const area = getNumericValue(`d_${rowStr}`) || 0;
                 const hValue = config.type === 'air' ? (area / totalAreaAe) * 100 :
                               (config.type === 'ground' ? (area / totalAreaAg) * 100 : 0);
                 setCalculatedValue(hCellFieldId, hValue / 100, 'percent');

                 // Apply text color class to Column H based on type
                 const hElement = document.querySelector(`[data-field-id="${hCellFieldId}"]`);
                 if (hElement) {
                     hElement.classList.remove('text-air-facing', 'text-ground-facing');
                     if (config.type === 'air') {
                         hElement.classList.add('text-air-facing');
                     } else if (config.type === 'ground') {
                         hElement.classList.add('text-ground-facing');
                     }
                 }
            }
            const heatloss = getNumericValue(`i_${rowStr}`) || 0;
            const heatingPercentDecimal = grandTotalHeatlossI > 0 ? (heatloss / grandTotalHeatlossI) : 0; // Pass raw fraction
            setCalculatedValue(jCellFieldId, heatingPercentDecimal, 'percent');

            // Apply Loss Indicator Class to Column J
            let htgGainClass = '';
            const absHtgPercent = Math.abs(heatingPercentDecimal * 100);
            // Thresholds for loss contribution: Red >= 15%, Yellow >= 5%, Green < 5%
            if (absHtgPercent >= 15) { htgGainClass = 'loss-high'; }      // Red for high heat loss contribution
            else if (absHtgPercent >= 5) { htgGainClass = 'loss-medium'; } // Yellow
            else if (absHtgPercent >= 0) { htgGainClass = 'loss-low'; }       // Green
            setIndicatorClass(jCellFieldId, htgGainClass, gainIndicatorClasses);

            const heatgain = getNumericValue(`k_${rowStr}`) || 0;
            const coolingPercentDecimal = Math.abs(totals.gain) > 1e-6 ? (-heatgain / totals.gain) : 0; // Pass raw fraction
            const lCellFieldId = `l_${rowStr}`; // Field ID for Column L
            setCalculatedValue(lCellFieldId, coolingPercentDecimal, 'percent');

            // Apply Gain Indicator Class to Column L
            let coolGainClass = '';
            // Thresholds for gain contribution: Red >= 15% (bad), Yellow >= 5%, Green < 5% (good)
            const absCoolPercent = Math.abs(coolingPercentDecimal * 100);
            if (absCoolPercent >= 15) { coolGainClass = 'gain-high'; }      // Red for high heat gain contribution
            else if (absCoolPercent >= 5) { coolGainClass = 'gain-medium'; } // Yellow
            else if (absCoolPercent >= 0) { coolGainClass = 'gain-low'; }       // Green
            setIndicatorClass(lCellFieldId, coolGainClass, gainIndicatorClasses);

            // --- Apply Left Alignment to J & L Columns --- 
            const jElement = document.querySelector(`[data-field-id="${jCellFieldId}"]`);
            if (jElement) jElement.classList.add('text-left-indicator');
            const lElement = document.querySelector(`[data-field-id="${lCellFieldId}"]`);
            if (lElement) lElement.classList.add('text-left-indicator');
            // --- End Left Alignment --- 

            // Update reference indicators for all rows
            updateReferenceIndicators(config.row);
        });
    }

    /**
     * DUAL-ENGINE ORCHESTRATION (V2 Pattern)
     * Always runs both engines regardless of UI mode
     */
    function calculateAll() {
        // Add recursion protection for Section 11
        if (window.sectionCalculationInProgress) {
            return;
        }
        
        window.sectionCalculationInProgress = true;
        
        try {
            // Run both engines independently
            calculateReferenceModel();  // Calculates Reference values with ref_ prefix
            calculateApplicationModel(); // Calculates Target values (existing logic)
        } finally {
            window.sectionCalculationInProgress = false;
        }
    }

    //==========================================================================
    // EVENT HANDLING & INITIALIZATION
    //==========================================================================

    /**
    * TODO: Optimize initial calculation flow.
    * The current sequence involves rendering with defaults (often "0.00"), 
    * then running calculateAll which updates the values, causing a visual "flash".
    * This flash was previously resolved in the ORDERING refactor branch but was 
    * re-introduced with the dual-engine reference system. It is a minor glitch but a known one.
    * Future improvements could involve:
    * - Calculating values *before* initial render.
    * - Using placeholders ("---") instead of "0.00" as defaults.
    * - Optimizing the calculateAll sequence itself.
    * For now, the flash is accepted as known behavior.
    */
    function handleFieldBlur(event) {
        const fieldElement = this;
        const currentFieldId = fieldElement.getAttribute('data-field-id');
        if (!currentFieldId) return;
        let valueStr = fieldElement.textContent.trim().replace(/,/g, '');
        let displayValue = '0.00';
        let rawValueToStore = '0';

        let numValue = window.TEUI.parseNumeric(valueStr, NaN);

        if (!isNaN(numValue)) { // Successfully parsed a number
            rawValueToStore = numValue.toString(); // Store the raw number string *first* for all valid number cases

            // Apply specific formatting based on field type
            if (currentFieldId === 'd_97') { // Thermal Bridge Penalty (%)
                // Convert input number to decimal (assume input "20" means 20% -> 0.2)
                let decimalValue = numValue / 100;
                // Clamp the DECIMAL value between 0 and 1 
                decimalValue = Math.max(0, Math.min(1, decimalValue));
                rawValueToStore = decimalValue.toString(); // Overwrite with clamped decimal value for storage
                displayValue = formatNumber(decimalValue * 100, 'number'); // Display as number 0-100, not percentage string
            } else if (currentFieldId.startsWith('g_')) { // U-Value (3 decimals)
                displayValue = formatNumber(numValue, 'W/m2'); // Use specific format
            } else { // Default: Area (d_), RSI (f_) - 2 decimals
                displayValue = formatNumber(numValue, 'number'); 
            }
        } else {
        // Removed console.warn for invalid input - handled by defaulting rawValueToStore
        }
        fieldElement.textContent = displayValue;
        if (window.TEUI?.StateManager?.setValue) {
            window.TEUI.StateManager.setValue(currentFieldId, rawValueToStore, 'user-modified');
        }
        // Recalculation will be triggered by StateManager listeners
        // RESTORE: Direct calculation trigger for immediate reactivity
        if (!window.sectionCalculationInProgress) {
            calculateAll();
        }
    }

    function initializeEventHandlers() {
        editableFields.forEach(fieldId => {
            const field = document.querySelector(`[data-field-id="${fieldId}"]`);
            // Attach listeners only to fields actually found and marked as editable
            if (field?.classList.contains('editable')) { 
                if (!field.hasEditableListeners) { // Prevent adding multiple listeners
                    field.addEventListener('keydown', e => { if (e.key === 'Enter') { e.preventDefault(); field.blur(); } });
                    field.addEventListener('blur', handleFieldBlur.bind(field)); // Ensure 'this' context
                    field.addEventListener('focus', () => field.classList.add('editing'));
                    field.addEventListener('focusout', () => field.classList.remove('editing'));
                    field.hasEditableListeners = true; // Mark as listener attached
                }
            }
            // Removed console.warn for missing/non-editable fields
        });

        // *** ADDED: Specific listener for d_97 slider ***
        const d97Slider = document.querySelector('input[type="range"][data-field-id="d_97"]');
        if (d97Slider) {
            if (!d97Slider.hasSliderListener) { // Prevent adding multiple listeners
                // LIVE FEEDBACK: Update StateManager + immediate calculations for responsive UI
                d97Slider.addEventListener('input', function() {
                    const percentageValue = parseFloat(this.value);
                    if (isNaN(percentageValue)) return;
                    
                    // Update the display span
                    const displaySpan = this.parentElement.querySelector('.slider-value');
                    if (displaySpan) {
                        displaySpan.textContent = percentageValue.toFixed(0) + '%';
                    }
                    
                    // Update StateManager (triggers listeners, but may be too slow for live feedback)
                    if (window.TEUI && window.TEUI.StateManager) {
                        window.TEUI.StateManager.setValue('d_97', percentageValue.toString(), 'user-modified');
                    }
                    
                    // LIVE FEEDBACK: Direct calculation calls for immediate visual response
                    // This ensures g_101/g_102 update in real-time during slider drag
                    // Recalculation will be triggered by StateManager listeners
                    if (window.TEUI?.SectionModules?.sect12?.calculateCombinedUValue) {
                        window.TEUI.SectionModules.sect12.calculateCombinedUValue(); // Update g_101, g_102 immediately
                    }
                });

                // ARCHITECTURAL COMPLIANCE: Final change event relies on StateManager dependency chain
                d97Slider.addEventListener('change', function() {
                    const percentageValue = parseFloat(this.value);
                    if (isNaN(percentageValue)) return;

                    // Final value goes through StateManager - let dependency chain handle everything
                    if (window.TEUI && window.TEUI.StateManager) {
                        window.TEUI.StateManager.setValue('d_97', percentageValue.toString(), 'user-modified');
                    }
                    // Note: StateManager listeners will handle full recalculation cascade
                });

                d97Slider.hasSliderListener = true; // Mark as listener attached
            }
        } else {
            // console.warn("Slider for d_97 not found during initialization.");
        }
        // *** END ADDED ***

        // Add listeners for climate data changes from Section 3
        if (window.TEUI?.StateManager?.addListener) {
            window.TEUI.StateManager.addListener('d_20', calculateAll); // HDD
            window.TEUI.StateManager.addListener('d_21', calculateAll); // CDD
            window.TEUI.StateManager.addListener('h_22', calculateAll); // GF CDD (affects ground gain)
            window.TEUI.StateManager.addListener('d_22', calculateAll); // GF HDD (affects ground loss)
            window.TEUI.StateManager.addListener('i_21', calculateAll); // Capacitance Factor (affects ground gain)
            window.TEUI.StateManager.addListener('d_97', calculateAll); // TB Penalty (affects all calculations)
            // console.log("Section 11 listeners for climate data added.");
        } else {
            // console.warn("Section 11: StateManager not available to add climate listeners.");
        }
    }

    function onSectionRendered() {
        // console.log("Section 11 onSectionRendered: Initializing state..."); // DEBUG LOG
        // Ensure StateManager has default values for editable fields before first calculation
        let isStateInitialized = false; // Flag to track if we set any default state
        if (window.TEUI?.StateManager) {
            editableFields.forEach(fieldId => {
                const fieldConfig = Object.values(sectionRows).flatMap(r => Object.values(r.cells)).find(c => c.fieldId === fieldId);
                if (fieldConfig && fieldConfig.value !== undefined) {
                    // Use parseNumeric to handle potential % in default value like d_97
                    let defaultValue = fieldConfig.value.toString();
                    let rawNumericValue = window.TEUI.parseNumeric(defaultValue, 0); // Default to 0 if parse fails
                    // For d_97, convert initial percentage string to decimal for storage
                    if (fieldId === 'd_97') {
                        rawNumericValue = rawNumericValue / 100;
                    }
                    // Always set the default value using 'default' priority.
                    // This won't overwrite saved/user-modified state loaded earlier.
                    window.TEUI.StateManager.setValue(fieldId, rawNumericValue.toString(), 'default');
                    // console.log(`Set default state for ${fieldId} to ${rawNumericValue.toString()}`); // Optional log
                    isStateInitialized = true; // Flag that we attempted init
                }
            });
        } else {
             // console.warn("StateManager not available during onSectionRendered for state init");
        }

        // console.log("Section 11 onSectionRendered: Initializing event handlers..."); // DEBUG LOG
        // Initialize listeners AFTER potential state initialization
        initializeEventHandlers();
        Object.entries(areaSourceMap).forEach(([targetRow, sourceFieldId]) => {
            if (window.TEUI?.StateManager?.addListener) {
                window.TEUI.StateManager.addListener(sourceFieldId, () => {
                    const targetFieldId = `d_${targetRow}`;
                    const targetElement = document.querySelector(`[data-field-id="${targetFieldId}"]`);
                    if (targetElement) {
                        const numericValue = getNumericValue(sourceFieldId) || 0;
                        targetElement.textContent = formatNumber(numericValue, 2);
                        // Recalculation will be triggered by StateManager listeners
                        // RESTORE: Direct calculation trigger for immediate reactivity
                        if (!window.sectionCalculationInProgress) {
                            calculateAll();
                        }
                    }
                });
            }
        });

        // Initial calculation is now triggered centrally after all sections render
        // console.log("Section 11 onSectionRendered: Skipping initial calculateAll() call.");

        isStateInitialized = true; // Set flag after setup
    }
    
    //==========================================================================
    // REFERENCE MODEL HANDLING (Refactored to use Factory)
    //==========================================================================

    // Create the reference handler using the factory function from ReferenceManager
    const referenceHandler = TEUI.ReferenceManager.createReferenceHandler({
        sectionId: 'envelopeTransmissionLosses',
        sectionName: 'Transmission Losses',
        sectionCalculateAll: calculateAll,
        sectionRecalculateRow: calculateComponentRow, // Pass the specific row recalculation function
        componentConfig: componentConfig, // Pass the config needed by sectionRecalculateRow
        sectionUpdateIndicators: updateReferenceIndicators // Pass the indicator update function
    });

    //==========================================================================
    // PUBLIC API
    //==========================================================================
    return { 
        getFields, 
        getDropdownOptions, 
        getLayout, 
        initializeEventHandlers, 
        onSectionRendered, 
        calculateAll,
        referenceHandler // Expose the generated handler
    };
})();

// REMOVED Event Listeners
// // Initialize when the section is rendered
// document.addEventListener('teui-section-rendered', (event) => {
//     if (event.detail?.sectionId === 'transmissionLosses') {
//         // Small delay to ensure other sections are ready and StateManager has values
//         setTimeout(() => { window.TEUI.SectionModules.sect11?.onSectionRendered(); }, 50);
//     }
// });
// 
// // Fallback to rendering complete event (ensure it runs even if teui-section-rendered is missed)
// document.addEventListener('teui-rendering-complete', () => {
//     setTimeout(() => { if (document.getElementById('transmissionLosses')) window.TEUI.SectionModules.sect11?.onSectionRendered(); }, 250);
// }); 