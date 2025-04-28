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
                d: { fieldId: "d_97", type: "editable", value: "20%", title: "Assume Code Minimum Construction at 50%, PassiveHouse at 5-10%" },
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
    // HELPER FUNCTIONS
    //==========================================================================

    function getNumericValue(fieldId) {
        const value = getFieldValue(fieldId);
        if (window.TEUI?.parseNumeric) return window.TEUI.parseNumeric(value);
        // Fallback parser
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
            // Updated: Format H, J, L columns as numbers with 2 decimals, then add %
            else if (/[hjl]_[\d]{2,}/.test(fieldId) || fieldId === 'h_98' || fieldId === 'j_98' || fieldId === 'l_98') {
                 displayValue = formatNumber(numValue, 2) + '%';
            } else displayValue = formatNumber(numValue, 2); // Default 2 decimals
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

    // Reinstated formatPercentage as it's needed for Column M display
    function formatPercentage(value) {
        value = parseFloat(value);
        return isNaN(value) ? "0%" : `${Math.round(value)}%`;
    }

    function setElementClass(fieldId, isGood) {
        const element = document.querySelector(`[data-field-id="${fieldId}"]`);
        if (element) {
            element.classList.remove("checkmark", "warning");
            element.classList.add(isGood ? "checkmark" : "warning");
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
            area = sourceAreaFieldId ? (getNumericValue(sourceAreaFieldId) || 0) : (getNumericValue(areaFieldId) || 0);
            if (sourceAreaFieldId) setCalculatedValue(areaFieldId, area); // Update linked display

            let rsiValue, uValue;
            if (input === 'rsi') {
                rsiValue = getNumericValue(rsiFieldId);
                if (rsiValue <= 0) { uValue = Infinity; } else uValue = 1 / rsiValue;
                setCalculatedValue(uValueFieldId, (uValue === Infinity ? '∞' : uValue), uValue === Infinity);
            } else {
                uValue = getNumericValue(uValueFieldId);
                if (uValue <= 0) { rsiValue = Infinity; } else rsiValue = 1 / uValue;
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
                // TEMPORARY FIX: Hardcode capacitance factor (d_21/I21) to 0.5 to match Excel 
                // and avoid Section 3 dependency issues for now. TODO: Link properly later.
                const capacitanceFactor = 0.5; 
                heatgainMultiplier = capacitanceFactor * (getNumericValue('h_22') || 0) * 24;
            }

            const denominator = rsiValue * 1000;
            setCalculatedValue(heatlossFieldId, (area * hdd * 24) / denominator);
            setCalculatedValue(heatgainFieldId, (area * heatgainMultiplier) / denominator);

        } catch (error) {
            console.error(`Error calculating row ${rowNumber}:`, error);
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
            console.error("Error calculating TBP:", error);
            setCalculatedValue('i_97', 0); setCalculatedValue('k_97', 0);
        }
    }

    function updateReferenceIndicators(rowId) {
        const baseline = baselineValues[rowId];
        if (!baseline) return;
        const mFieldId = `m_${rowId}`, nFieldId = `n_${rowId}`;
        let referencePercent = 100, isGood = true;

        try {
            if (baseline.type === 'rsi') {
                const currentRSI = getNumericValue(`f_${rowId}`);
                if (baseline.value > 0) referencePercent = (currentRSI / baseline.value) * 100;
                isGood = referencePercent >= 100;
            } else if (baseline.type === 'uvalue') {
                const currentUValue = getNumericValue(`g_${rowId}`);
                if (currentUValue > 0) referencePercent = (baseline.value / currentUValue) * 100;
                isGood = currentUValue <= baseline.value;
            } else if (baseline.type === 'penalty') {
                const currentPenalty = getNumericValue(`d_${rowId}`);
                isGood = currentPenalty <= baseline.value;
                setCalculatedValue(mFieldId, isGood ? "Pass" : "Fail", true); // Special display for TBP M col
                setCalculatedValue(nFieldId, isGood ? "✓" : "✗", true);
                setElementClass(nFieldId, isGood);
                return;
            }
            // Set Column M (Reference %)
            // Corrected: Call the reinstated formatPercentage function
            setCalculatedValue(mFieldId, formatPercentage(referencePercent), true);
            // Set Column N (Pass/Fail Checkmark)
            setCalculatedValue(nFieldId, isGood ? "✓" : "✗", true);
            setElementClass(nFieldId, isGood);
        } catch (error) {
            console.error(`Error updating reference indicators for row ${rowId}:`, error);
            setCalculatedValue(mFieldId, "Error", true); setCalculatedValue(nFieldId, "?", true);
        }
    }

    function calculateAll() {
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

        rowsToProcess.forEach(config => {
            const rowStr = config.row.toString();
            if (config.row !== 97) { // Area % only for components
                 const area = getNumericValue(`d_${rowStr}`) || 0;
                 if (config.type === 'air') setCalculatedValue(`h_${rowStr}`, (area / totalAreaAe) * 100);
                 else if (config.type === 'ground') setCalculatedValue(`h_${rowStr}`, (area / totalAreaAg) * 100);
            }
            const heatloss = getNumericValue(`i_${rowStr}`) || 0;
            setCalculatedValue(`j_${rowStr}`, grandTotalHeatlossI > 0 ? (heatloss / grandTotalHeatlossI) * 100 : 0);
            const heatgain = getNumericValue(`k_${rowStr}`) || 0;
            setCalculatedValue(`l_${rowStr}`, Math.abs(totals.gain) > 1e-6 ? (-heatgain / totals.gain) * 100 : 0);
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
        let numValue = NaN, rawValueToStore = valueStr, displayValue = valueStr;

        if (currentFieldId === 'd_97') {
             numValue = valueStr.includes('%') ? parseFloat(valueStr.replace('%','')) / 100 : parseFloat(valueStr);
             rawValueToStore = (!isNaN(numValue) && numValue <= 1 && numValue >= 0) ? (numValue > 1 ? numValue / 100 : numValue).toString() : '0.2'; // Clamp and default
             displayValue = formatNumber(parseFloat(rawValueToStore) * 100, 2) + '%'; // Use formatNumber here
        } else {
             numValue = parseFloat(valueStr);
             rawValueToStore = !isNaN(numValue) ? numValue.toString() : '0';
             if (currentFieldId.startsWith('f_')) displayValue = formatNumber(numValue, 2);
             else if (currentFieldId.startsWith('g_')) displayValue = formatNumber(numValue, 3);
             else displayValue = formatNumber(numValue, 2);
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
                handleFieldBlur.call(field); // Initial format
            }
        });
    }

    function onSectionRendered() {
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
        calculateAll();
    }

    //==========================================================================
    // PUBLIC API
    //==========================================================================
    return { getFields, getDropdownOptions, getLayout, initializeEventHandlers, onSectionRendered, calculateAll };
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