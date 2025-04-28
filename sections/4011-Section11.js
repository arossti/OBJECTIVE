/**
 * 4011-Section11MONDAY.js
 * Simplified Transmission Losses (Section 11) module for TEUI Calculator 4.011
 * Based on SectionXX template, starting with only Header and Row 85 (Roof).
 */

// Ensure namespace exists
window.TEUI = window.TEUI || {};
window.TEUI.SectionModules = window.TEUI.SectionModules || {};

// Create section-specific namespace for global references if needed
// window.TEUI.sect11 = window.TEUI.sect11 || {};

// Section 11: Transmission Losses Module (Simplified)
window.TEUI.SectionModules.sect11 = (function() {
    //==========================================================================
    // CONFIGURATION
    //==========================================================================
    
    // Baseline values for Reference % calculation (derived from screenshot)
    // NOTE: These are temporary until a proper reference model system is built.
    const baselineValues = {
        85: { type: 'rsi', value: 5.3 },   // Roof
        86: { type: 'rsi', value: 4.1 },   // Walls AG
        87: { type: 'rsi', value: 6.6 },   // Floor Exp
        88: { type: 'uvalue', value: 1.99 }, // Doors (U-value comparison)
        89: { type: 'uvalue', value: 1.42 }, // Window N (U-value comparison)
        90: { type: 'uvalue', value: 1.42 }, // Window E (U-value comparison)
        91: { type: 'uvalue', value: 1.42 }, // Window S (U-value comparison)
        92: { type: 'uvalue', value: 1.42 }, // Window W (U-value comparison)
        93: { type: 'uvalue', value: 1.42 }, // Skylights (U-value comparison)
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
        { row: 88, type: 'air', input: 'uvalue' }, // Doors
        { row: 89, type: 'air', input: 'uvalue' }, // Window N
        { row: 90, type: 'air', input: 'uvalue' }, // Window E
        { row: 91, type: 'air', input: 'uvalue' }, // Window S
        { row: 92, type: 'air', input: 'uvalue' }, // Window W
        { row: 93, type: 'air', input: 'uvalue' }, // Skylights
        { row: 94, type: 'ground', input: 'rsi' }, // Walls BG
        { row: 95, type: 'ground', input: 'rsi' }, // Floor Slab
    ];

    // List of all editable fields in this section
    const editableFields = [
        'd_85', 'f_85', // Row 85
        'd_86', 'f_86', // Row 86
        'd_87', 'f_87', // Row 87
        'g_88', 'g_89', 'g_90', 'g_91', 'g_92', 'g_93', // Rows 88-93 (U-Value Input)
        'd_94', 'f_94', // Row 94
        'd_95', 'f_95', // Row 95
        'd_96', // Row 96 (Area Only)
        'd_97' // Row 97 (Penalty %)
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
                m: { content: "M", classes: ["section-subheader", "align-center"] },
                n: { content: "N", classes: ["section-subheader", "align-center"] }
            }
        },
        "85": {
            id: "B.4", rowId: "B.4", label: "Roof",
            cells: {
                c: { label: "Roof" },
                d: { fieldId: "d_85", type: "editable", value: "1411.52", section: "transmissionLosses" },
                e: { fieldId: "e_85", type: "calculated", dependencies: ["f_85"] },
                f: { fieldId: "f_85", type: "editable", value: "9.35", section: "transmissionLosses" },
                g: { fieldId: "g_85", type: "calculated", dependencies: ["f_85"] },
                h: { fieldId: "h_85", type: "calculated", dependencies: ["d_85", "d_101"] },
                i: { fieldId: "i_85", type: "calculated", dependencies: ["d_85", "d_20", "f_85"] },
                j: { fieldId: "j_85", type: "calculated", dependencies: ["i_85", "i_98"] },
                k: { fieldId: "k_85", type: "calculated", dependencies: ["d_85", "d_21", "f_85"] },
                l: { fieldId: "l_85", type: "calculated", dependencies: ["k_85", "k_98"] },
                m: { fieldId: "m_85", type: "calculated", dependencies: ["f_85"] },
                n: { fieldId: "n_85", type: "calculated" } // Pass/Fail Checkmark
            }
        },
        "86": {
            id: "B.5", rowId: "B.5", label: "Walls Above Grade (Exclude Openings!)",
            cells: {
                c: { label: "Walls Above Grade (Exclude Openings!)" },
                d: { fieldId: "d_86", type: "editable", value: "712.97", section: "transmissionLosses" },
                e: { fieldId: "e_86", type: "calculated", dependencies: ["f_86"] },
                f: { fieldId: "f_86", type: "editable", value: "6.69", section: "transmissionLosses" },
                g: { fieldId: "g_86", type: "calculated", dependencies: ["f_86"] },
                h: { fieldId: "h_86", type: "calculated", dependencies: ["d_86", "d_101"] },
                i: { fieldId: "i_86", type: "calculated", dependencies: ["d_86", "d_20", "f_86"] },
                j: { fieldId: "j_86", type: "calculated", dependencies: ["i_86", "i_98"] },
                k: { fieldId: "k_86", type: "calculated", dependencies: ["d_86", "d_21", "f_86"] },
                l: { fieldId: "l_86", type: "calculated", dependencies: ["k_86", "k_98"] },
                m: { fieldId: "m_86", type: "calculated", dependencies: ["f_86"] },
                n: { fieldId: "n_86", type: "calculated" }
            }
        },
        "87": {
            id: "B.6", rowId: "B.6", label: "Floor Exposed",
            cells: {
                c: { label: "Floor Exposed" },
                d: { fieldId: "d_87", type: "editable", value: "0.00", section: "transmissionLosses" },
                e: { fieldId: "e_87", type: "calculated", dependencies: ["f_87"] },
                f: { fieldId: "f_87", type: "editable", value: "9.52", section: "transmissionLosses" },
                g: { fieldId: "g_87", type: "calculated", dependencies: ["f_87"] },
                h: { fieldId: "h_87", type: "calculated", dependencies: ["d_87", "d_101"] },
                i: { fieldId: "i_87", type: "calculated", dependencies: ["d_87", "d_20", "f_87"] },
                j: { fieldId: "j_87", type: "calculated", dependencies: ["i_87", "i_98"] },
                k: { fieldId: "k_87", type: "calculated", dependencies: ["d_87", "d_21", "f_87"] },
                l: { fieldId: "l_87", type: "calculated", dependencies: ["k_87", "k_98"] },
                m: { fieldId: "m_87", type: "calculated", dependencies: ["f_87"] },
                n: { fieldId: "n_87", type: "calculated" }
            }
        },
        "88": {
            id: "B.7.0", rowId: "B.7.0", label: "Doors",
            cells: {
                c: { label: "Doors" },
                d: { fieldId: "d_88", type: "calculated", dependencies: ["d_73"] }, // Linked area
                e: { fieldId: "e_88", type: "calculated", dependencies: ["f_88"] },
                f: { fieldId: "f_88", type: "calculated", dependencies: ["g_88"] }, // Calculated RSI
                g: { fieldId: "g_88", type: "editable", value: "0.900", section: "transmissionLosses" }, // Editable U-Value
                h: { fieldId: "h_88", type: "calculated", dependencies: ["d_88", "d_101"] },
                i: { fieldId: "i_88", type: "calculated", dependencies: ["d_88", "d_20", "f_88"] },
                j: { fieldId: "j_88", type: "calculated", dependencies: ["i_88", "i_98"] },
                k: { fieldId: "k_88", type: "calculated", dependencies: ["d_88", "d_21", "f_88"] },
                l: { fieldId: "l_88", type: "calculated", dependencies: ["k_88", "k_98"] },
                m: { fieldId: "m_88", type: "calculated", dependencies: ["g_88"] },
                n: { fieldId: "n_88", type: "calculated" }
            }
        },
        "89": {
            id: "B.8.1", rowId: "B.8.1", label: "Window Area North",
            cells: {
                c: { label: "Window Area North" },
                d: { fieldId: "d_89", type: "calculated", dependencies: ["d_74"] },
                e: { fieldId: "e_89", type: "calculated", dependencies: ["f_89"] },
                f: { fieldId: "f_89", type: "calculated", dependencies: ["g_89"] },
                g: { fieldId: "g_89", type: "editable", value: "0.900", section: "transmissionLosses" },
                h: { fieldId: "h_89", type: "calculated", dependencies: ["d_89", "d_101"] },
                i: { fieldId: "i_89", type: "calculated", dependencies: ["d_89", "d_20", "f_89"] },
                j: { fieldId: "j_89", type: "calculated", dependencies: ["i_89", "i_98"] },
                k: { fieldId: "k_89", type: "calculated", dependencies: ["d_89", "d_21", "f_89"] },
                l: { fieldId: "l_89", type: "calculated", dependencies: ["k_89", "k_98"] },
                m: { fieldId: "m_89", type: "calculated", dependencies: ["g_89"] },
                n: { fieldId: "n_89", type: "calculated" }
            }
        },
        "90": {
            id: "B.8.2", rowId: "B.8.2", label: "Window Area East",
            cells: {
                c: { label: "Window Area East" },
                d: { fieldId: "d_90", type: "calculated", dependencies: ["d_75"] },
                e: { fieldId: "e_90", type: "calculated", dependencies: ["f_90"] },
                f: { fieldId: "f_90", type: "calculated", dependencies: ["g_90"] },
                g: { fieldId: "g_90", type: "editable", value: "0.900", section: "transmissionLosses" },
                h: { fieldId: "h_90", type: "calculated", dependencies: ["d_90", "d_101"] },
                i: { fieldId: "i_90", type: "calculated", dependencies: ["d_90", "d_20", "f_90"] },
                j: { fieldId: "j_90", type: "calculated", dependencies: ["i_90", "i_98"] },
                k: { fieldId: "k_90", type: "calculated", dependencies: ["d_90", "d_21", "f_90"] },
                l: { fieldId: "l_90", type: "calculated", dependencies: ["k_90", "k_98"] },
                m: { fieldId: "m_90", type: "calculated", dependencies: ["g_90"] },
                n: { fieldId: "n_90", type: "calculated" }
            }
        },
        "91": {
            id: "B.8.3", rowId: "B.8.3", label: "Window Area South",
            cells: {
                c: { label: "Window Area South" },
                d: { fieldId: "d_91", type: "calculated", dependencies: ["d_76"] },
                e: { fieldId: "e_91", type: "calculated", dependencies: ["f_91"] },
                f: { fieldId: "f_91", type: "calculated", dependencies: ["g_91"] },
                g: { fieldId: "g_91", type: "editable", value: "0.900", section: "transmissionLosses" },
                h: { fieldId: "h_91", type: "calculated", dependencies: ["d_91", "d_101"] },
                i: { fieldId: "i_91", type: "calculated", dependencies: ["d_91", "d_20", "f_91"] },
                j: { fieldId: "j_91", type: "calculated", dependencies: ["i_91", "i_98"] },
                k: { fieldId: "k_91", type: "calculated", dependencies: ["d_91", "d_21", "f_91"] },
                l: { fieldId: "l_91", type: "calculated", dependencies: ["k_91", "k_98"] },
                m: { fieldId: "m_91", type: "calculated", dependencies: ["g_91"] },
                n: { fieldId: "n_91", type: "calculated" }
            }
        },
        "92": {
            id: "B.8.4", rowId: "B.8.4", label: "Window Area West",
            cells: {
                c: { label: "Window Area West" },
                d: { fieldId: "d_92", type: "calculated", dependencies: ["d_77"] },
                e: { fieldId: "e_92", type: "calculated", dependencies: ["f_92"] },
                f: { fieldId: "f_92", type: "calculated", dependencies: ["g_92"] },
                g: { fieldId: "g_92", type: "editable", value: "0.900", section: "transmissionLosses" },
                h: { fieldId: "h_92", type: "calculated", dependencies: ["d_92", "d_101"] },
                i: { fieldId: "i_92", type: "calculated", dependencies: ["d_92", "d_20", "f_92"] },
                j: { fieldId: "j_92", type: "calculated", dependencies: ["i_92", "i_98"] },
                k: { fieldId: "k_92", type: "calculated", dependencies: ["d_92", "d_21", "f_92"] },
                l: { fieldId: "l_92", type: "calculated", dependencies: ["k_92", "k_98"] },
                m: { fieldId: "m_92", type: "calculated", dependencies: ["g_92"] },
                n: { fieldId: "n_92", type: "calculated" }
            }
        },
        "93": {
            id: "B.8.5", rowId: "B.8.5", label: "Skylights",
            cells: {
                c: { label: "Skylights" },
                d: { fieldId: "d_93", type: "calculated", dependencies: ["d_78"] },
                e: { fieldId: "e_93", type: "calculated", dependencies: ["f_93"] },
                f: { fieldId: "f_93", type: "calculated", dependencies: ["g_93"] },
                g: { fieldId: "g_93", type: "editable", value: "0.900", section: "transmissionLosses" },
                h: { fieldId: "h_93", type: "calculated", dependencies: ["d_93", "d_101"] },
                i: { fieldId: "i_93", type: "calculated", dependencies: ["d_93", "d_20", "f_93"] },
                j: { fieldId: "j_93", type: "calculated", dependencies: ["i_93", "i_98"] },
                k: { fieldId: "k_93", type: "calculated", dependencies: ["d_93", "d_21", "f_93"] },
                l: { fieldId: "l_93", type: "calculated", dependencies: ["k_93", "k_98"] },
                m: { fieldId: "m_93", type: "calculated", dependencies: ["g_93"] },
                n: { fieldId: "n_93", type: "calculated" }
            }
        },
        "94": {
            id: "B.9", rowId: "B.9", label: "Walls Below Grade (Conditioned Space)",
            cells: {
                c: { label: "Walls Below Grade (Conditioned Space)" },
                d: { fieldId: "d_94", type: "editable", value: "0.00", section: "transmissionLosses" },
                e: { fieldId: "e_94", type: "calculated", dependencies: ["f_94"] },
                f: { fieldId: "f_94", type: "editable", value: "4.00", section: "transmissionLosses" },
                g: { fieldId: "g_94", type: "calculated", dependencies: ["f_94"] },
                h: { fieldId: "h_94", type: "calculated", dependencies: ["d_94", "d_102"] },
                i: { fieldId: "i_94", type: "calculated", dependencies: ["d_94", "d_22", "f_94"] },
                j: { fieldId: "j_94", type: "calculated", dependencies: ["i_94", "i_98"] },
                k: { fieldId: "k_94", type: "calculated", dependencies: ["d_21", "d_94", "h_22", "f_94"] }, // d_21 = capacitance factor here
                l: { fieldId: "l_94", type: "calculated", dependencies: ["k_94", "k_98"] },
                m: { fieldId: "m_94", type: "calculated", dependencies: ["f_94"] },
                n: { fieldId: "n_94", type: "calculated" }
            }
        },
        "95": {
            id: "B.10", rowId: "B.10", label: "Floor Slab (Conditioned Space)",
            cells: {
                c: { label: "Floor Slab (Conditioned Space)" },
                d: { fieldId: "d_95", type: "editable", value: "1100.42", section: "transmissionLosses" },
                e: { fieldId: "e_95", type: "calculated", dependencies: ["f_95"] },
                f: { fieldId: "f_95", type: "editable", value: "3.70", section: "transmissionLosses" },
                g: { fieldId: "g_95", type: "calculated", dependencies: ["f_95"] },
                h: { fieldId: "h_95", type: "calculated", dependencies: ["d_95", "d_102"] },
                i: { fieldId: "i_95", type: "calculated", dependencies: ["d_95", "d_22", "f_95"] },
                j: { fieldId: "j_95", type: "calculated", dependencies: ["i_95", "i_98"] },
                k: { fieldId: "k_95", type: "calculated", dependencies: ["d_21", "d_95", "h_22", "f_95"] }, // d_21 = capacitance factor here
                l: { fieldId: "l_95", type: "calculated", dependencies: ["k_95", "k_98"] },
                m: { fieldId: "m_95", type: "calculated", dependencies: ["f_95"] },
                n: { fieldId: "n_95", type: "calculated" }
            }
        },
        "96": {
            id: "B.11", rowId: "B.11", label: "B.11 Interior Floors (incl. garages)",
            cells: {
                c: { label: "B.11 Interior Floors (incl. garages)" },
                d: { fieldId: "d_96", type: "editable", value: "29.70", section: "transmissionLosses" },
                // Other cells display '-' as per Excel/offline file
                e: { content: "-" }, f: { content: "-" }, g: { content: "-" }, h: { content: "-" },
                i: { content: "-" }, j: { content: "-" }, k: { content: "-" }, l: { content: "-" },
                m: {}, n: {}
            }
        },
        "97": {
            id: "B.12", rowId: "B.12", label: "Thermal Bridge Penalty (min. 5-70%)",
            cells: {
                c: { label: "Thermal Bridge Penalty (min. 5-70%)" },
                d: { fieldId: "d_97", type: "editable", value: "20%", section: "transmissionLosses", title: "Assume Code Minimum Construction at 50%, PassiveHouse at 5-10%" },
                e: { fieldId: "e_97", type: "calculated" }, // Blank
                f: {}, g: {}, h: {},
                i: { fieldId: "i_97", type: "calculated", dependencies: ["i_98", "d_97"] },
                j: { fieldId: "j_97", type: "calculated", dependencies: ["i_97", "i_98"] },
                k: { fieldId: "k_97", type: "calculated", dependencies: ["k_98", "d_97"] },
                l: { fieldId: "l_97", type: "calculated", dependencies: ["k_97", "k_98"] },
                m: { fieldId: "m_97", type: "calculated", dependencies: ["d_97"] }, // M column for TBP
                n: { fieldId: "n_97", type: "calculated" } // N column for TBP
            }
        },
        "98": {
            id: "ET", rowId: "ET", label: "ET",
            cells: {
                c: { label: "Envelope Totals" },
                // Simplified dependencies - precise list omitted for brevity
                d: { fieldId: "d_98", type: "calculated" },
                e: { fieldId: "e_98", type: "calculated", dependencies: ["d_94", "d_95", "g_101", "g_102"] },
                f: {}, g: {},
                h: { fieldId: "h_98", type: "calculated", value: "100%" },
                i: { fieldId: "i_98", type: "calculated" },
                j: { fieldId: "j_98", type: "calculated", value: "100%" },
                k: { fieldId: "k_98", type: "calculated" },
                l: { fieldId: "l_98", type: "calculated", value: "100%" },
                m: {}, n: { fieldId: "n_98", type: "calculated" }
            }
        }
    };
    
    //==========================================================================
    // ACCESSOR METHODS (Consolidated)
    //==========================================================================
    
    function getFields() {
        const fields = {};
        Object.values(sectionRows).forEach(row => {
            if (!row.cells) return;
            Object.values(row.cells).forEach(cell => {
                if (cell.fieldId && cell.type) {
                    fields[cell.fieldId] = { type: cell.type, defaultValue: cell.value || "", section: cell.section || "transmissionLosses", ...(cell.dependencies && { dependencies: cell.dependencies }) };
                }
            });
        });
        return fields;
    }
    
    function getDropdownOptions() { return {}; } // None in this section

    function getLayout() {
        // Reverted: Explicitly handle header first to guarantee order
        const layoutRows = [];
        if (sectionRows["header"]) {
            layoutRows.push(createLayoutRow(sectionRows["header"]));
        }
        Object.entries(sectionRows).forEach(([key, row]) => {
            if (key !== "header") {
                layoutRows.push(createLayoutRow(row));
            }
        });
        return { rows: layoutRows };
    }
    
    function createLayoutRow(row) {
        const rowDef = { id: row.id, cells: [{}, {}] }; // A and B
        const columns = ['c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n'];
        columns.forEach(col => {
            const cell = row.cells?.[col] ? { ...row.cells[col] } : {};
            if (col === 'c' && !cell.label && row.label) cell.label = row.label;

            // Reverted: Only remove properties confirmed unnecessary for rendering
            delete cell.getOptions; // Example, if exists
                delete cell.section;
                delete cell.dependencies;
            // Keep fieldId, type, value etc. as they might be needed by renderer
                
                rowDef.cells.push(cell);
        });
        return rowDef;
    }

    //==========================================================================
    // HELPER FUNCTIONS
    //==========================================================================
    
    function getNumericValue(fieldId) {
            const value = getFieldValue(fieldId);
        if (window.TEUI?.parseNumeric) return window.TEUI.parseNumeric(value);
        if (typeof value === 'string') {
            if (value.endsWith('%')) return parseFloat(value.replace(/[%|,]/g, '')) / 100 || 0;
            return parseFloat(value.replace(/,/g, '')) || 0;
        } else if (typeof value === 'number') return value;
        return 0;
    }

    function getFieldValue(fieldId) {
        const stateValue = window.TEUI?.StateManager?.getValue(fieldId);
        if (stateValue != null) return stateValue;
        const element = document.querySelector(`[data-field-id="${fieldId}"]`);
        return element ? (element.value ?? element.textContent?.trim()) : null;
    }

    function setCalculatedValue(fieldId, value, skipFormat = false) {
            let displayValue = value;
        let rawValue = (typeof value === 'number') ? value.toString() : (value || '').toString().replace(/,/g, '');

        if (!skipFormat && !isNaN(parseFloat(rawValue))) {
            const numValue = parseFloat(rawValue);
            if (fieldId.startsWith('g_')) displayValue = formatNumber(numValue, 3); // U-Values
            else if (/[hjl]_[\d]{2,}/.test(fieldId) || fieldId === 'h_98' || fieldId === 'j_98' || fieldId === 'l_98') displayValue = formatPercentage(numValue); // Percentages
            else displayValue = formatNumber(numValue, 2); // Default 2 decimals
        }

            if (window.TEUI?.StateManager?.setValue) {
                window.TEUI.StateManager.setValue(fieldId, rawValue, 'calculated');
            }
            const element = document.querySelector(`[data-field-id="${fieldId}"]`);
        if (element) element.textContent = displayValue;
    }

    function formatNumber(value, decimalPlaces = 2) {
            value = parseFloat(value);
        return isNaN(value) ? "" : value.toLocaleString(undefined, { minimumFractionDigits: decimalPlaces, maximumFractionDigits: decimalPlaces });
    }

    function formatPercentage(value) {
            value = parseFloat(value);
        return isNaN(value) ? "0%" : `${Math.round(value)}%`;
    }

    /**
     * Sets the visual class (checkmark/warning) for a status indicator cell.
     * @param {string} fieldId - The data-field-id of the element (typically N column).
     * @param {boolean} isGood - True for checkmark (pass), false for warning (fail).
     */
    function setElementClass(fieldId, isGood) {
        const element = document.querySelector(`[data-field-id="${fieldId}"]`);
        if (element) {
            element.classList.remove("checkmark", "warning");
            element.classList.add(isGood ? "checkmark" : "warning");
            // Optional: Add tooltip based on status if desired
            // element.title = isGood ? "Meets reference" : "Below reference";
        }
    }

    //==========================================================================
    // CALCULATION FUNCTIONS
    //==========================================================================

    function calculateComponentRow(rowNumber, config) {
        const { type, input } = config;
        const rowStr = rowNumber.toString();
        const areaFieldId = `d_${rowStr}`, rsiFieldId = `f_${rowStr}`, uValueFieldId = `g_${rowStr}`,
              rimpFieldId = `e_${rowStr}`, heatlossFieldId = `i_${rowStr}`, heatgainFieldId = `k_${rowStr}`;

        try {
            let area = 0;
            const sourceAreaFieldId = areaSourceMap[rowNumber];
            if (sourceAreaFieldId) {
                area = getNumericValue(sourceAreaFieldId) || 0;
                setCalculatedValue(areaFieldId, area);
                } else {
                area = getNumericValue(areaFieldId) || 0;
            }

            let rsiValue, uValue;
            if (input === 'rsi') {
                rsiValue = getNumericValue(rsiFieldId);
                if (rsiValue <= 0) { console.warn(`Invalid RSI (${rsiValue}) for row ${rowNumber}.`); uValue = Infinity; }
                 else uValue = 1 / rsiValue;
                setCalculatedValue(uValueFieldId, (uValue === Infinity ? '∞' : uValue), uValue === Infinity);
            } else { // input === 'uvalue'
                uValue = getNumericValue(uValueFieldId);
                if (uValue <= 0) { console.warn(`Invalid U-Value (${uValue}) for row ${rowNumber}.`); rsiValue = Infinity; }
                else rsiValue = 1 / uValue;
                setCalculatedValue(rsiFieldId, (rsiValue === Infinity ? '∞' : rsiValue), rsiValue === Infinity);
            }

            if (area === 0 || rsiValue === Infinity || uValue === Infinity) {
                setCalculatedValue(rimpFieldId, 0); setCalculatedValue(heatlossFieldId, 0); setCalculatedValue(heatgainFieldId, 0);
                return;
            }

            setCalculatedValue(rimpFieldId, rsiValue * 5.678);

            let hdd, heatgainMultiplier;
            if (type === 'air') {
                hdd = getNumericValue('d_20') || 0;
                heatgainMultiplier = (getNumericValue('d_21') || 0) * 24;
            } else { // ground
                hdd = getNumericValue('d_22') || 0;
                heatgainMultiplier = (getNumericValue('d_21') || 0) * (getNumericValue('h_22') || 0) * 24;
            }

            const denominator = rsiValue * 1000;
            setCalculatedValue(heatlossFieldId, (area * hdd * 24) / denominator);
            setCalculatedValue(heatgainFieldId, (area * heatgainMultiplier) / denominator);

        } catch (error) {
            console.error(`Error calculating row ${rowNumber}:`, error);
            // Reset calculated values for the row on error
            [rimpFieldId, rsiFieldId, uValueFieldId, heatlossFieldId, heatgainFieldId].forEach(id => setCalculatedValue(id, 0));
        }
    }

    function calculateThermalBridgePenalty(componentHeatlossSubtotal, componentHeatgainSubtotal) {
        try {
            const penaltyPercent = getNumericValue('d_97');
            const validatedPenalty = Math.max(0, Math.min(1, penaltyPercent));
            const penaltyHeatloss = componentHeatlossSubtotal * validatedPenalty;
            setCalculatedValue('i_97', penaltyHeatloss);
            const penaltyHeatgain = Math.abs(componentHeatgainSubtotal) * validatedPenalty;
            setCalculatedValue('k_97', -penaltyHeatgain);
        } catch (error) {
            console.error("Error calculating Thermal Bridge Penalty:", error);
            setCalculatedValue('i_97', 0); setCalculatedValue('k_97', 0);
        }
    }
    
    /**
     * Updates the reference percentage (Column M) and Pass/Fail indicator (Column N)
     * for a given row based on hardcoded baseline values.
     * @param {number|string} rowId - The row number (e.g., 85, 97).
     */
    function updateReferenceIndicators(rowId) {
        const baseline = baselineValues[rowId];
        if (!baseline) return; // No baseline defined for this row

        const mFieldId = `m_${rowId}`;
        const nFieldId = `n_${rowId}`;
        let referencePercent = 100; // Default to 100%
        let isGood = true; // Default pass

        try {
            if (baseline.type === 'rsi') {
                const currentRSI = getNumericValue(`f_${rowId}`);
                if (baseline.value > 0) {
                    referencePercent = (currentRSI / baseline.value) * 100;
                }
                isGood = referencePercent >= 100;
            } else if (baseline.type === 'uvalue') {
                const currentUValue = getNumericValue(`g_${rowId}`);
                if (currentUValue > 0) {
                    // Compare U-values: (baseline / current) * 100
                    referencePercent = (baseline.value / currentUValue) * 100;
                }
                 // Lower U-value is better, so check if current <= baseline
                isGood = currentUValue <= baseline.value;
            } else if (baseline.type === 'penalty') {
                const currentPenalty = getNumericValue(`d_${rowId}`);
                // Reference % for penalty isn't directly comparable like RSI/U-value
                // We can display the penalty itself or a derived value if needed.
                // For now, just calculate pass/fail.
                referencePercent = currentPenalty * 100; // Show current penalty % in M col?
                isGood = currentPenalty <= baseline.value;
                // Let's set M column for TBP based on pass/fail for now
                setCalculatedValue(mFieldId, isGood ? "Pass" : "Fail", true);
                setCalculatedValue(nFieldId, isGood ? "✓" : "✗", true);
                setElementClass(nFieldId, isGood);
                return; // Exit early for TBP special handling
            }

            // Set Column M (Reference %)
            setCalculatedValue(mFieldId, formatPercentage(referencePercent), true);
            // Set Column N (Pass/Fail Checkmark)
            setCalculatedValue(nFieldId, isGood ? "✓" : "✗", true);
            setElementClass(nFieldId, isGood);

        } catch (error) {
            console.error(`Error updating reference indicators for row ${rowId}:`, error);
            setCalculatedValue(mFieldId, "Error", true);
            setCalculatedValue(nFieldId, "?", true);
        }
    }

    function calculateAll() {
        let componentTotals = { loss: 0, gain: 0, areaD: 0, airAreaD: 0, groundAreaD: 0 };

        componentConfig.forEach(config => {
            calculateComponentRow(config.row, config);
            const area = getNumericValue(`d_${config.row}`) || 0;
            componentTotals.loss += getNumericValue(`i_${config.row}`) || 0;
            componentTotals.gain += getNumericValue(`k_${config.row}`) || 0;
            if (config.row >= 85 && config.row <= 95) {
                componentTotals.areaD += area;
            }
            if (config.type === 'air') componentTotals.airAreaD += area;
            else if (config.type === 'ground') componentTotals.groundAreaD += area;
        });

        calculateThermalBridgePenalty(componentTotals.loss, componentTotals.gain);
        const penaltyHeatlossI = getNumericValue('i_97') || 0;
        const penaltyHeatgainK = getNumericValue('k_97') || 0;

        const grandTotalHeatlossI = componentTotals.loss + penaltyHeatlossI;
        const grandTotalHeatgainK = componentTotals.gain + penaltyHeatgainK;

        // Set totals for Row 98
        setCalculatedValue('d_98', componentTotals.areaD);
        setCalculatedValue('i_98', grandTotalHeatlossI);
        setCalculatedValue('k_98', grandTotalHeatgainK);
        // Skip e_98 and n_98 for now; h_98, j_98, l_98 are set to 100% in sectionRows

        // Calculate Percentages and Update Reference Indicators
        const totalAreaAe = componentTotals.airAreaD > 0 ? componentTotals.airAreaD : 1;
        const totalAreaAg = componentTotals.groundAreaD > 0 ? componentTotals.groundAreaD : 1;
        // Include TBP row (97) for percentage calcs, and all component rows for ref indicators
        const rowsToProcess = [...componentConfig, { row: 97 }];

        rowsToProcess.forEach(config => {
            const rowStr = config.row.toString();
            const area = getNumericValue(`d_${rowStr}`) || 0;
            const heatloss = getNumericValue(`i_${rowStr}`) || 0;
            const heatgain = getNumericValue(`k_${rowStr}`) || 0;

            // Area Percentage (h_XX) - Skip for penalty row
            if (config.row !== 97) {
                 if (config.type === 'air') setCalculatedValue(`h_${rowStr}`, totalAreaAe > 0 ? (area / totalAreaAe) * 100 : 0);
                 else if (config.type === 'ground') setCalculatedValue(`h_${rowStr}`, totalAreaAg > 0 ? (area / totalAreaAg) * 100 : 0);
            }
            // Heatloss Percentage (j_XX)
            setCalculatedValue(`j_${rowStr}`, grandTotalHeatlossI > 0 ? (heatloss / grandTotalHeatlossI) * 100 : 0);
            // Heatgain Percentage (l_XX)
            setCalculatedValue(`l_${rowStr}`, Math.abs(grandTotalHeatgainK) > 1e-6 ? (heatgain / grandTotalHeatgainK) * 100 : 0);

            // Update Reference Indicators (M & N columns)
            updateReferenceIndicators(config.row);
        });
    }

    //==========================================================================
    // EVENT HANDLING & INITIALIZATION
    //==========================================================================

    function handleFieldBlur(event) {
        const fieldElement = this;
        const currentFieldId = fieldElement.getAttribute('data-field-id');
        if (!currentFieldId) return;

        let valueStr = fieldElement.textContent.trim().replace(/,/g, '');
        let numValue = NaN;
        let rawValueToStore = valueStr;
        let displayValue = valueStr;

        if (currentFieldId === 'd_97') {
             if (valueStr.includes('%')) numValue = parseFloat(valueStr.replace('%','')) / 100;
             else numValue = parseFloat(valueStr);
             // Assume direct percentage if > 1, else decimal
             if (!isNaN(numValue)) rawValueToStore = (numValue > 1 ? numValue / 100 : numValue).toString();
             else rawValueToStore = '0.2'; // Default if invalid
             displayValue = `${Math.round(parseFloat(rawValueToStore) * 100)}%`;
                    } else {
             numValue = parseFloat(valueStr);
             if (!isNaN(numValue)) rawValueToStore = numValue.toString();
             else rawValueToStore = '0'; // Default if invalid

             if (currentFieldId.startsWith('f_')) displayValue = formatNumber(numValue, 2);
             else if (currentFieldId.startsWith('g_')) displayValue = formatNumber(numValue, 3);
             else displayValue = formatNumber(numValue, 2); // Default Area
        }

        fieldElement.textContent = displayValue;
                if (window.TEUI?.StateManager?.setValue) {
            window.TEUI.StateManager.setValue(currentFieldId, rawValueToStore, 'user-modified');
        }
        calculateAll();
    }

    function initializeEventHandlers() {
        editableFields.forEach(fieldId => {
            const field = document.querySelector(`[data-field-id="${fieldId}"]`);
            if (field && field.classList.contains('editable')) {
                field.addEventListener('keydown', function(e) { if (e.key === 'Enter') { e.preventDefault(); this.blur(); } });
                field.addEventListener('blur', handleFieldBlur);
                field.addEventListener('focus', function() { this.classList.add('editing'); });
                field.addEventListener('focusout', function() { this.classList.remove('editing'); });
                // Initial format
                handleFieldBlur.call(field, { target: field });
            } else {
                // console.warn(`Editable field ${fieldId} not found or missing 'editable' class.`);
            }
        });
    }

    function onSectionRendered() {
        initializeEventHandlers();
        // Setup listeners for linked area values from Section 10
        Object.entries(areaSourceMap).forEach(([targetRow, sourceFieldId]) => {
            if (window.TEUI?.StateManager?.addListener) {
                window.TEUI.StateManager.addListener(sourceFieldId, (newValue) => {
                    const targetFieldId = `d_${targetRow}`;
                    const targetElement = document.querySelector(`[data-field-id="${targetFieldId}"]`);
                    if (targetElement) {
                        const numericValue = getNumericValue(sourceFieldId) || 0;
                        targetElement.textContent = formatNumber(numericValue, 2);
                        // Trigger full recalc when linked area changes
                        calculateAll();
                    }
                });
            }
        });
        calculateAll(); // Run initial calculations
    }
    
    //==========================================================================
    // PUBLIC API
    //==========================================================================
    return {
        getFields, getDropdownOptions, getLayout,
        initializeEventHandlers, onSectionRendered, calculateAll
    };
})();

// Standard initialization listeners
document.addEventListener('teui-section-rendered', function(event) {
    if (event.detail?.sectionId === 'transmissionLosses') {
        setTimeout(() => { window.TEUI.SectionModules.sect11?.onSectionRendered(); }, 50);
    }
});
document.addEventListener('teui-rendering-complete', function() {
    setTimeout(() => { if (document.getElementById('transmissionLosses')) window.TEUI.SectionModules.sect11?.onSectionRendered(); }, 250);
}); 