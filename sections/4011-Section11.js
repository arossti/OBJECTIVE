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
        'd_96', // Interior Floor Area
        'd_97'  // Thermal Bridge Penalty %
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
                e: { fieldId: "e_85", type: "calculated" }, f: { fieldId: "f_85", type: "editable", value: "9.35" },
                g: { fieldId: "g_85", type: "calculated" }, h: { fieldId: "h_85", type: "calculated" },
                i: { fieldId: "i_85", type: "calculated" }, j: { fieldId: "j_85", type: "calculated" },
                k: { fieldId: "k_85", type: "calculated" }, l: { fieldId: "l_85", type: "calculated" },
                m: { fieldId: "m_85", type: "calculated" }, n: { fieldId: "n_85", type: "calculated" }
            }
        },
        "86": {
            id: "B.5", rowId: "B.5", label: "Walls Above Grade (Exclude Openings!)", cells: {
                c: { label: "Walls Above Grade (Exclude Openings!)" }, d: { fieldId: "d_86", type: "editable", value: "712.97" },
                e: { fieldId: "e_86", type: "calculated" }, f: { fieldId: "f_86", type: "editable", value: "6.69" },
                g: { fieldId: "g_86", type: "calculated" }, h: { fieldId: "h_86", type: "calculated" },
                i: { fieldId: "i_86", type: "calculated" }, j: { fieldId: "j_86", type: "calculated" },
                k: { fieldId: "k_86", type: "calculated" }, l: { fieldId: "l_86", type: "calculated" },
                m: { fieldId: "m_86", type: "calculated" }, n: { fieldId: "n_86", type: "calculated" }
            }
        },
        "87": {
             id: "B.6", rowId: "B.6", label: "Floor Exposed", cells: {
                c: { label: "Floor Exposed" }, d: { fieldId: "d_87", type: "editable", value: "0.00" },
                e: { fieldId: "e_87", type: "calculated" }, f: { fieldId: "f_87", type: "editable", value: "9.52" },
                g: { fieldId: "g_87", type: "calculated" }, h: { fieldId: "h_87", type: "calculated" },
                i: { fieldId: "i_87", type: "calculated" }, j: { fieldId: "j_87", type: "calculated" },
                k: { fieldId: "k_87", type: "calculated" }, l: { fieldId: "l_87", type: "calculated" },
                m: { fieldId: "m_87", type: "calculated" }, n: { fieldId: "n_87", type: "calculated" }
            }
        },
        "88": {
            id: "B.7.0", rowId: "B.7.0", label: "Doors", cells: {
                c: { label: "Doors" }, d: { fieldId: "d_88", type: "calculated" },
                e: { fieldId: "e_88", type: "calculated" }, f: { fieldId: "f_88", type: "calculated" },
                g: { fieldId: "g_88", type: "editable", value: "0.900" }, h: { fieldId: "h_88", type: "calculated" },
                i: { fieldId: "i_88", type: "calculated" }, j: { fieldId: "j_88", type: "calculated" },
                k: { fieldId: "k_88", type: "calculated" }, l: { fieldId: "l_88", type: "calculated" },
                m: { fieldId: "m_88", type: "calculated" }, n: { fieldId: "n_88", type: "calculated" }
            }
        },
        "89": {
            id: "B.8.1", rowId: "B.8.1", label: "Window Area North", cells: {
                c: { label: "Window Area North" }, d: { fieldId: "d_89", type: "calculated" },
                e: { fieldId: "e_89", type: "calculated" }, f: { fieldId: "f_89", type: "calculated" },
                g: { fieldId: "g_89", type: "editable", value: "0.900" }, h: { fieldId: "h_89", type: "calculated" },
                i: { fieldId: "i_89", type: "calculated" }, j: { fieldId: "j_89", type: "calculated" },
                k: { fieldId: "k_89", type: "calculated" }, l: { fieldId: "l_89", type: "calculated" },
                m: { fieldId: "m_89", type: "calculated" }, n: { fieldId: "n_89", type: "calculated" }
            }
        },
        "90": {
             id: "B.8.2", rowId: "B.8.2", label: "Window Area East", cells: {
                c: { label: "Window Area East" }, d: { fieldId: "d_90", type: "calculated" },
                e: { fieldId: "e_90", type: "calculated" }, f: { fieldId: "f_90", type: "calculated" },
                g: { fieldId: "g_90", type: "editable", value: "0.900" }, h: { fieldId: "h_90", type: "calculated" },
                i: { fieldId: "i_90", type: "calculated" }, j: { fieldId: "j_90", type: "calculated" },
                k: { fieldId: "k_90", type: "calculated" }, l: { fieldId: "l_90", type: "calculated" },
                m: { fieldId: "m_90", type: "calculated" }, n: { fieldId: "n_90", type: "calculated" }
             }
        },
        "91": {
             id: "B.8.3", rowId: "B.8.3", label: "Window Area South", cells: {
                c: { label: "Window Area South" }, d: { fieldId: "d_91", type: "calculated" },
                e: { fieldId: "e_91", type: "calculated" }, f: { fieldId: "f_91", type: "calculated" },
                g: { fieldId: "g_91", type: "editable", value: "0.900" }, h: { fieldId: "h_91", type: "calculated" },
                i: { fieldId: "i_91", type: "calculated" }, j: { fieldId: "j_91", type: "calculated" },
                k: { fieldId: "k_91", type: "calculated" }, l: { fieldId: "l_91", type: "calculated" },
                m: { fieldId: "m_91", type: "calculated" }, n: { fieldId: "n_91", type: "calculated" }
            }
        },
        "92": {
            id: "B.8.4", rowId: "B.8.4", label: "Window Area West", cells: {
                c: { label: "Window Area West" }, d: { fieldId: "d_92", type: "calculated" },
                e: { fieldId: "e_92", type: "calculated" }, f: { fieldId: "f_92", type: "calculated" },
                g: { fieldId: "g_92", type: "editable", value: "0.900" }, h: { fieldId: "h_92", type: "calculated" },
                i: { fieldId: "i_92", type: "calculated" }, j: { fieldId: "j_92", type: "calculated" },
                k: { fieldId: "k_92", type: "calculated" }, l: { fieldId: "l_92", type: "calculated" },
                m: { fieldId: "m_92", type: "calculated" }, n: { fieldId: "n_92", type: "calculated" }
            }
        },
        "93": {
            id: "B.8.5", rowId: "B.8.5", label: "Skylights", cells: {
                c: { label: "Skylights" }, d: { fieldId: "d_93", type: "calculated" },
                e: { fieldId: "e_93", type: "calculated" }, f: { fieldId: "f_93", type: "calculated" },
                g: { fieldId: "g_93", type: "editable", value: "0.900" }, h: { fieldId: "h_93", type: "calculated" },
                i: { fieldId: "i_93", type: "calculated" }, j: { fieldId: "j_93", type: "calculated" },
                k: { fieldId: "k_93", type: "calculated" }, l: { fieldId: "l_93", type: "calculated" },
                m: { fieldId: "m_93", type: "calculated" }, n: { fieldId: "n_93", type: "calculated" }
            }
        },
        "94": {
             id: "B.9", rowId: "B.9", label: "Walls Below Grade (Conditioned Space)", cells: {
                c: { label: "Walls Below Grade (Conditioned Space)" }, d: { fieldId: "d_94", type: "editable", value: "0.00" },
                e: { fieldId: "e_94", type: "calculated" }, f: { fieldId: "f_94", type: "editable", value: "4.00" },
                g: { fieldId: "g_94", type: "calculated" }, h: { fieldId: "h_94", type: "calculated" },
                i: { fieldId: "i_94", type: "calculated" }, j: { fieldId: "j_94", type: "calculated" },
                k: { fieldId: "k_94", type: "calculated" }, l: { fieldId: "l_94", type: "calculated" },
                m: { fieldId: "m_94", type: "calculated" }, n: { fieldId: "n_94", type: "calculated" }
            }
        },
        "95": {
             id: "B.10", rowId: "B.10", label: "Floor Slab (Conditioned Space)", cells: {
                c: { label: "Floor Slab (Conditioned Space)" }, d: { fieldId: "d_95", type: "editable", value: "1100.42" },
                e: { fieldId: "e_95", type: "calculated" }, f: { fieldId: "f_95", type: "editable", value: "3.70" },
                g: { fieldId: "g_95", type: "calculated" }, h: { fieldId: "h_95", type: "calculated" },
                i: { fieldId: "i_95", type: "calculated" }, j: { fieldId: "j_95", type: "calculated" },
                k: { fieldId: "k_95", type: "calculated" }, l: { fieldId: "l_95", type: "calculated" },
                m: { fieldId: "m_95", type: "calculated" }, n: { fieldId: "n_95", type: "calculated" }
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
            id: "B.12", rowId: "B.12", label: "Thermal Bridge Penalty (min. 5-70%)", cells: {
                c: { label: "Thermal Bridge Penalty (min. 5-70%)" },
                d: { fieldId: "d_97", type: "editable", value: "20.00", title: "Enter percentage (e.g., 20 for 20%). Assume Code Minimum Construction at 50%, PassiveHouse at 5-10%" },
                e: { fieldId: "e_97", type: "calculated" }, f: {}, g: {}, h: {},
                i: { fieldId: "i_97", type: "calculated" }, j: { fieldId: "j_97", type: "calculated" },
                k: { fieldId: "k_97", type: "calculated" }, l: { fieldId: "l_97", type: "calculated" },
                m: { fieldId: "m_97", type: "calculated" }, n: { fieldId: "n_97", type: "calculated" }
            }
        },
        "98": {
            id: "ET", rowId: "ET", label: "ET", cells: {
                c: { label: "Envelope Totals" }, d: { fieldId: "d_98", type: "calculated" },
                e: { fieldId: "e_98", type: "calculated" }, f: {}, g: {},
                h: { fieldId: "h_98", type: "calculated", value: "100%" }, i: { fieldId: "i_98", type: "calculated" },
                j: { fieldId: "j_98", type: "calculated", value: "100%" }, k: { fieldId: "k_98", type: "calculated" },
                l: { fieldId: "l_98", type: "calculated", value: "100%" }, m: {}, n: { fieldId: "n_98", type: "calculated" }
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
                    fields[cell.fieldId] = { type: cell.type, defaultValue: cell.value || "" };
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
     * Uses the standardized formatNumber helper.
     * @param {string} fieldId - The ID of the field to update.
     * @param {number} rawValue - The raw calculated numeric value.
     * @param {string} [format='number'] - The format type for display.
     */
    function setCalculatedValue(fieldId, rawValue, format = 'number') {
        // Handle potential N/A cases first
        if (!isFinite(rawValue) || rawValue === null || rawValue === undefined) {
             window.TEUI.StateManager?.setValue(fieldId, 'N/A', 'calculated');
             const elementNA = document.querySelector(`[data-field-id="${fieldId}"]`);
             if (elementNA) elementNA.textContent = 'N/A';
             return; // Stop processing if value is not a valid number
        }
        
        // Determine format if not explicitly passed (needed for percentages in this section)
        if (format === 'number') {
             if (fieldId.startsWith('g_')) { format = 'W/m2'; } // U-Values are 3 decimals
             else if (/[hjl]_[\\d]{2,}/.test(fieldId) || fieldId === 'h_98' || fieldId === 'j_98' || fieldId === 'l_98') { format = 'percent'; }
             // Default remains 'number' for others (i_, k_, e_)
        }
        
        const formattedValue = formatNumber(rawValue, format);

            if (window.TEUI?.StateManager?.setValue) {
            // Store raw value as string in StateManager for precision
            window.TEUI.StateManager.setValue(fieldId, rawValue.toString(), 'calculated');
            }
        
        // Update DOM with formatted value
            const element = document.querySelector(`[data-field-id="${fieldId}"]`);
        if (element) {
            element.textContent = formattedValue;
            element.classList.toggle('negative-value', rawValue < 0);
        } else {
             // console.warn(`setCalculatedValue: Element not found for fieldId ${fieldId}`);
        }
    }

    /**
     * Formats a number according to the project's display rules.
     * Handles specific formats like percentages, currency, W/m2.
     * @param {number} value - The number to format.
     * @param {string} [format='number'] - The type of format.
     * @returns {string} The formatted number as a string.
     */
    function formatNumber(value, format = 'number') {
        if (value === null || value === undefined || isNaN(value)) {
            // Return 0 or 0% based on expected format
            return format === 'percent' ? '0%' : (format === 'W/m2' ? '0.000' : '0.00');
        }
        
        const num = Number(value);
        
        if (format === 'percent') {
            // Multiply decimal by 100, then format to 2 decimal places and add %
            return (num * 100).toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 }) + '%';
        } else if (format === 'W/m2') { // U-Values (3 decimals)
            return num.toLocaleString('en-US', { minimumFractionDigits: 3, maximumFractionDigits: 3 });
        } else { // Default: kWh, RSI, Rimp, Area etc. (2 decimals)
            return num.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 });
        }
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

    function calculateComponentRow(rowNumber, config, referenceFieldId = null) {
        const { type, input } = config;
        const rowStr = rowNumber.toString();
        const areaFieldId = `d_${rowStr}`, rsiFieldId = `f_${rowStr}`, uValueFieldId = `g_${rowStr}`, 
              rimpFieldId = `e_${rowStr}`, heatlossFieldId = `i_${rowStr}`, heatgainFieldId = `k_${rowStr}`;

        const isRefMode = TEUI.ReferenceToggle?.isReferenceMode() || false;
        // console.warn(` S11 Calc Row: START calculateComponentRow(${rowNumber}, refId=${referenceFieldId || 'N/A'}) | Mode: ${isRefMode ? 'Reference' : 'Design'}`);

        try {
            // Area always comes from Design Model (via StateManager -> getNumericValue)
            let area = 0;
            const sourceAreaFieldId = areaSourceMap[rowNumber];
            area = sourceAreaFieldId ? (getNumericValue(sourceAreaFieldId) || 0) : (getNumericValue(areaFieldId) || 0);
            if (sourceAreaFieldId && !isRefMode) { // Only update linked area display in Design mode
                 setCalculatedValue(areaFieldId, area);
            }
            
            let rsiValue, uValue, inputValue;
            
            // Determine the primary input value based on mode
            if (isRefMode && referenceFieldId) {
                // --- REFERENCE MODE --- 
                // Get the reference value directly using the original field ID (e.g., "B.4")
                const refValueStr = TEUI.ReferenceManager?.getValue(referenceFieldId);
                inputValue = window.TEUI.parseNumeric(refValueStr, NaN); // Use global parser
                // console.warn(`  S11 Calc Row ${rowNumber}: Using REFERENCE value for ${referenceFieldId} = ${inputValue}`);
                
                // Assign to rsiValue or uValue based on config.input
                 if (input === 'rsi') {
                    rsiValue = inputValue;
                    if (rsiValue <= 0) { uValue = Infinity; } else uValue = 1 / rsiValue;
                } else { // input === 'uvalue'
                    uValue = inputValue;
                    if (uValue <= 0) { rsiValue = Infinity; } else rsiValue = 1 / uValue;
                }
            } else {
                // --- DESIGN MODE (or if referenceFieldId missing) ---
                if (input === 'rsi') {
                    inputValue = getNumericValue(rsiFieldId); // Read from state/DOM
                    // console.warn(`  S11 Calc Row ${rowNumber}: Read DESIGN RSI (f_${rowStr}) = ${inputValue}`);
                    rsiValue = inputValue;
                    if (rsiValue <= 0) { uValue = Infinity; } else uValue = 1 / rsiValue;
                } else { // input === 'uvalue'
                    inputValue = getNumericValue(uValueFieldId); // Read from state/DOM
                    // console.warn(`  S11 Calc Row ${rowNumber}: Read DESIGN U-Value (g_${rowStr}) = ${inputValue}`);
                    uValue = inputValue;
                    if (uValue <= 0) { rsiValue = Infinity; } else rsiValue = 1 / uValue;
                }
            }
            
            // Update complementary value display (unless in ref mode and it IS the ref value)
            if (!isRefMode || (isRefMode && input !== 'uvalue')) { // Don't overwrite ref U-Value
                setCalculatedValue(uValueFieldId, (uValue === Infinity ? 'N/A' : uValue), 'W/m2'); // Use N/A for Infinity
            }
            if (!isRefMode || (isRefMode && input !== 'rsi')) { // Don't overwrite ref RSI
                setCalculatedValue(rsiFieldId, (rsiValue === Infinity ? 'N/A' : rsiValue), 'number'); // Use N/A for Infinity
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
            
            // console.warn(`  S11 Calc Row ${rowNumber}: Calculated -> Rimp=${calcRimp.toFixed(2)}, Loss=${calcHeatloss.toFixed(2)}, Gain=${calcHeatgain.toFixed(2)}`); // Log calculated derived values
            
            setCalculatedValue(rimpFieldId, calcRimp);
            setCalculatedValue(heatlossFieldId, calcHeatloss);
            setCalculatedValue(heatgainFieldId, calcHeatgain);
            
            // console.warn(` S11 Calc Row: END calculateComponentRow(${rowNumber})`);
        } catch (error) {
            console.error(`Error calculating row ${rowNumber}:`, error);
            [rimpFieldId, rsiFieldId, uValueFieldId, heatlossFieldId, heatgainFieldId].forEach(id => setCalculatedValue(id, 0));
        }
    }

    function calculateThermalBridgePenalty(componentHeatlossSubtotal, componentHeatgainSubtotal) {
        try {
            const penaltyPercent = getNumericValue('d_97');
            const validatedPenalty = Math.max(0, Math.min(1, penaltyPercent));
            let penaltyHeatloss = componentHeatlossSubtotal * validatedPenalty;
            setCalculatedValue('i_97', penaltyHeatloss);
            const penaltyHeatgain = Math.abs(componentHeatgainSubtotal) * validatedPenalty;
            setCalculatedValue('k_97', -penaltyHeatgain);
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
        const isRefMode = TEUI.ReferenceToggle?.isReferenceMode() || false;

        // console.warn(`S11 Ref Indicators: Updating row ${rowId} | Mode: ${isRefMode ? 'Reference' : 'Design'}`);

        try {
            let valueSourceElementId = null;
            if (baseline.type === 'rsi') {
                valueSourceElementId = `f_${rowId}`;
            } else if (baseline.type === 'uvalue') {
                valueSourceElementId = `g_${rowId}`;
            } else if (baseline.type === 'penalty') {
                valueSourceElementId = `d_${rowId}`;
            }

            if (valueSourceElementId) {
                if (isRefMode) {
                    // In Reference Mode, read directly from the DOM element that SHOULD display the reference value
                    const element = document.querySelector(`[data-field-id="${valueSourceElementId}"]`);
                    const domValue = element ? (element.value !== undefined ? element.value : element.textContent) : null;
                    currentValue = window.TEUI.parseNumeric(domValue, NaN); // Parse the DOM value
                    // console.warn(`  -> Ref Mode: Reading value directly from DOM element ${valueSourceElementId}: ${domValue} -> Parsed: ${currentValue}`);
                } else {
                    // In Design Mode, read normally (prioritizes StateManager)
                    currentValue = getNumericValue(valueSourceElementId);
                     // console.warn(`  -> Design Mode: Reading value via getNumericValue(${valueSourceElementId}) = ${currentValue}`);
                }
            } else {
                 // console.warn(`  -> Could not determine source element ID for comparison.`);
                 currentValue = NaN;
            }

            // Perform comparison based on the currentValue read above
            if (baseline.type === 'rsi') {
                // console.warn(`  -> Comparing RSI. Current value = ${currentValue}, Baseline = ${baseline.value}`);
                if (baseline.value > 0 && !isNaN(currentValue)) referencePercent = (currentValue / baseline.value) * 100;
                isGood = referencePercent >= 100;
            } else if (baseline.type === 'uvalue') {
                // console.warn(`  -> Comparing U-Value. Current value = ${currentValue}, Baseline = ${baseline.value}`);
                if (currentValue > 0 && !isNaN(currentValue)) referencePercent = (baseline.value / currentValue) * 100;
                isGood = currentValue <= baseline.value;
            } else if (baseline.type === 'penalty') {
                 // console.warn(`  -> Comparing Penalty %. Current value = ${currentValue}, Baseline <= 0.50?`);
                 isGood = currentValue <= 0.50; // Check against 50%
                 // ... [rest of penalty logic] ...
                 return; // Exit after handling penalty row
            }
            
            // console.warn(`  -> Calculated Comparison: Percent = ${referencePercent.toFixed(2)}%, Pass = ${isGood}`);
            // Set Column M (Reference %)
            setCalculatedValue(mFieldId, referencePercent / 100, 'percent'); // Use standard helper for numeric percentage display
            // Set Column N (Pass/Fail Checkmark)
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

    function calculateAll() {
        // console.warn("S11: calculateAll called."); // Add log
        let totals = { loss: 0, gain: 0, areaD: 0, airAreaD: 0, groundAreaD: 0 };

        componentConfig.forEach(config => {
            calculateComponentRow(config.row, config);
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
        const grandTotalHeatgainK = totals.gain + penaltyHeatgainK;

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

    //==========================================================================
    // EVENT HANDLING & INITIALIZATION
    //==========================================================================

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
        calculateAll();
    }

    function initializeEventHandlers() {
        editableFields.forEach(fieldId => {
            const field = document.querySelector(`[data-field-id="${fieldId}"]`);
            if (field?.classList.contains('editable')) {
                field.addEventListener('keydown', e => { if (e.key === 'Enter') { e.preventDefault(); field.blur(); } });
                field.addEventListener('blur', handleFieldBlur.bind(field)); // Ensure 'this' context
                field.addEventListener('focus', () => field.classList.add('editing'));
                field.addEventListener('focusout', () => field.classList.remove('editing'));
            }
            // Removed console.warn for missing/non-editable fields
        });

        // Add listeners for climate data changes from Section 3
        if (window.TEUI?.StateManager?.addListener) {
            window.TEUI.StateManager.addListener('d_20', calculateAll); // HDD
            window.TEUI.StateManager.addListener('d_21', calculateAll); // CDD
            window.TEUI.StateManager.addListener('h_22', calculateAll); // GF CDD (affects ground gain)
            window.TEUI.StateManager.addListener('d_22', calculateAll); // GF HDD (affects ground loss)
            window.TEUI.StateManager.addListener('i_21', calculateAll); // Capacitance Factor (affects ground gain)
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
                        calculateAll(); // Recalc on linked area change
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

// Standard initialization listeners
document.addEventListener('teui-section-rendered', function(event) {
    if (event.detail?.sectionId === 'transmissionLosses') {
        setTimeout(() => { window.TEUI.SectionModules.sect11?.onSectionRendered(); }, 50);
    }
});
document.addEventListener('teui-rendering-complete', function() { // Fallback
    setTimeout(() => { if (document.getElementById('transmissionLosses')) window.TEUI.SectionModules.sect11?.onSectionRendered(); }, 250);
}); 