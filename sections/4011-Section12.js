/**
 * 4011-Section12.js
 * Volume and Surface Metrics (Section 12) module for TEUI Calculator 4.011
 */

window.TEUI = window.TEUI || {};
window.TEUI.SectionModules = window.TEUI.SectionModules || {};

window.TEUI.SectionModules.sect12 = (function() {
    
    let isInitialized = false;
    
    //==========================================================================
    // FIELD DEFINITIONS AND LAYOUT
    //==========================================================================
    
    const sectionRows = {
        "header": {
            id: "12-ID",
            rowId: "12-ID",
            label: "Volume and Surface Metrics",
            cells: {
                c: { content: "SECTION 12. Volume and Surface Metrics", classes: ["section-header"], colspan: 4 },
                d: {}, e: {}, f: {},
                g: { content: "U-Value", classes: ["section-subheader", "align-center"] },
                h: { content: "Loss Rate", classes: ["section-subheader", "align-center"] },
                i: { content: "Heatloss", classes: ["section-subheader", "align-center"] },
                j: { content: "Gain Rate", classes: ["section-subheader", "align-center"] },
                k: { content: "Heatgain", classes: ["section-subheader", "align-center"] },
                l: { content: "Heatloss %", classes: ["section-subheader", "align-center"] },
                m: { content: "Reference", classes: ["section-subheader", "align-center"] },
                n: { content: "PASS/FAIL", classes: ["section-subheader", "align-center"] }
            }
        },
        "subheader": {
            id: "12-Units",
            rowId: "12-Units",
            label: "Units",
            cells: {
                c: { content: "", classes: ["section-label"] },
                d: { content: "", classes: ["section-label"] },
                e: { content: "", classes: ["section-label"] },
                f: { content: "", classes: ["section-label"] },
                g: { content: "W/m²·K", classes: ["section-subheader", "align-center"] },
                h: { content: "kWh/m²", classes: ["section-subheader", "align-center"] },
                i: { content: "kWh/yr", classes: ["section-subheader", "align-center"] },
                j: { content: "kWh/m²", classes: ["section-subheader", "align-center"] },
                k: { content: "kWh/Cool Season", classes: ["section-subheader", "align-center"] },
                l: { content: "", classes: ["section-subheader", "align-center"] },
                m: { content: "", classes: ["section-subheader", "align-center"] },
                n: { content: "", classes: ["section-subheader"] }
            }
        },
        "101": {
            id: "B.16", rowId: "B.16", label: "Total Area Exposed to Air (Ae)",
            cells: {
                c: { label: "Total Area Exposed to Air (Ae)" },
                d: { fieldId: "d_101", type: "calculated", value: "2476.62", section: "volumeSurfaceMetrics", dependencies: ["d_85", "d_86", "d_87", "d_88", "d_89", "d_90", "d_91", "d_92", "d_93"] },
                e: { content: "m²", classes: ["unit-label"] },
                f: { content: "U-Val. for Ae", classes: ["label-main"] },
                g: { fieldId: "g_101", type: "calculated", value: "0.278", section: "volumeSurfaceMetrics", dependencies: ["d_85", "h_85", "d_86", "h_86", "d_87", "h_87", "d_88", "h_88", "d_89", "h_89", "d_90", "h_90", "d_91", "h_91", "d_92", "h_92", "d_93", "h_93", "d_101", "d_97"] },
                h: { fieldId: "h_101", type: "calculated", value: "30.73", section: "volumeSurfaceMetrics", dependencies: ["g_101", "d_20"] },
                i: { fieldId: "i_101", type: "calculated", value: "76,103.69", section: "volumeSurfaceMetrics", dependencies: ["h_101", "d_101"] },
                j: { fieldId: "j_101", type: "calculated", value: "1.31", section: "volumeSurfaceMetrics", dependencies: ["g_101", "d_21"] },
                k: { fieldId: "k_101", type: "calculated", value: "3,242.68", section: "volumeSurfaceMetrics", dependencies: ["j_101", "d_101"] },
                l: { fieldId: "l_101", type: "calculated", value: "65.57%", section: "volumeSurfaceMetrics", dependencies: ["i_101", "i_104"], classes: ["percentage-value"] },
                m: { content: "", classes: ["reference-value"] }, n: { content: "" }
            }
        },
        "102": {
            id: "B.17", rowId: "B.17", label: "Total Area Exposed to Ground (Ag)",
            cells: {
                c: { label: "Total Area Exposed to Ground (Ag)" },
                d: { fieldId: "d_102", type: "calculated", value: "1100.42", section: "volumeSurfaceMetrics", dependencies: ["d_94", "d_95"] },
                e: { content: "m²", classes: ["unit-label"] },
                f: { content: "U-Val. for Ag", classes: ["label-main"] },
                g: { fieldId: "g_102", type: "calculated", value: "0.324", section: "volumeSurfaceMetrics", dependencies: ["d_94", "h_94", "d_95", "h_95", "d_102", "d_97"] },
                h: { fieldId: "h_102", type: "calculated", value: "15.26", section: "volumeSurfaceMetrics", dependencies: ["g_102", "d_22"] },
                i: { fieldId: "i_102", type: "calculated", value: "16,788.25", section: "volumeSurfaceMetrics", dependencies: ["h_102", "d_102"] },
                j: { fieldId: "j_102", type: "calculated", value: "-13.08", section: "volumeSurfaceMetrics", dependencies: ["g_102", "h_22"] },
                k: { fieldId: "k_102", type: "calculated", value: "-14,389.92", section: "volumeSurfaceMetrics", dependencies: ["j_102", "d_102"] },
                l: { fieldId: "l_102", type: "calculated", value: "14.46%", section: "volumeSurfaceMetrics", dependencies: ["i_102", "i_104"], classes: ["percentage-value"] },
                m: { content: "", classes: ["reference-value"] }, n: { content: "" }
            }
        },
        "103": {
            id: "B.18.3", rowId: "B.18.3", label: "Heating Natural Air Leakage Heatloss",
            cells: {
                c: { label: "Heating Natural Air Leakage Heatloss" },
                d: { fieldId: "d_103", type: "dropdown", dropdownId: "dd_d_103", value: "1.5", section: "volumeSurfaceMetrics", options: [{ value: "1", name: "1" }, { value: "1.5", name: "1.5" }, { value: "2", name: "2" }, { value: "3", name: "3" }, { value: "4", name: "4" }, { value: "5", name: "5" }, { value: "6", name: "6" }] },
                e: { content: "Stories", classes: ["unit-label"] },
                f: { content: "B.18.3 Shielding", classes: ["label-main"] },
                g: { fieldId: "g_103", type: "dropdown", dropdownId: "dd_g_103", value: "Normal", section: "volumeSurfaceMetrics", options: [{ value: "Shielded", name: "Shielded" }, { value: "Normal", name: "Normal" }, { value: "Exposed", name: "Exposed" }] },
                h: { fieldId: "h_103", type: "calculated", value: "9.35", section: "volumeSurfaceMetrics", dependencies: ["i_103", "d_101"] },
                i: { fieldId: "i_103", type: "calculated", value: "23,178.39", section: "volumeSurfaceMetrics", dependencies: ["g_109", "g_110", "d_105", "d_20"] },
                j: { fieldId: "j_103", type: "calculated", value: "0.40", section: "volumeSurfaceMetrics", dependencies: ["k_103", "d_101"] },
                k: { fieldId: "k_103", type: "calculated", value: "987.60", section: "volumeSurfaceMetrics", dependencies: ["g_109", "g_110", "d_105", "d_21"] },
                l: { fieldId: "l_103", type: "calculated", value: "19.97%", section: "volumeSurfaceMetrics", dependencies: ["i_103", "i_104"], classes: ["percentage-value"] },
                m: { content: "", classes: ["reference-value"] }, n: { content: "" }
            }
        },
        "104": {
            id: "T.4", rowId: "T.4", label: "Building U-Value Combined Total & Transmission Losses & Gains",
            cells: {
                c: { label: "Building U-Value Combined Total & Transmission Losses & Gains" },
                d: {}, e: { content: "", classes: ["unit-label"] }, f: {}, 
                g: { fieldId: "d_104", type: "calculated", value: "0.292", section: "volumeSurfaceMetrics", dependencies: ["g_101", "d_101", "g_102", "d_102"] }, 
                h: {}, 
                i: { fieldId: "i_104", type: "calculated", value: "116,070.33", section: "volumeSurfaceMetrics", dependencies: ["i_101", "i_102", "i_103"] },
                j: {}, 
                k: { fieldId: "k_104", type: "calculated", value: "-10,160.19", section: "volumeSurfaceMetrics", dependencies: ["k_101", "k_102", "k_103"] },
                l: { fieldId: "l_104", type: "calculated", value: "100%", section: "volumeSurfaceMetrics", classes: ["percentage-value"], dependencies: ["l_101", "l_102", "l_103"] },
                m: { content: "N/A", classes: ["reference-value"] }, n: { content: "" }
            }
        },
        "105": {
            id: "B.13", rowId: "B.13", label: "Total Conditioned Volume",
            cells: {
                c: { label: "Total Conditioned Volume" },
                d: { fieldId: "d_105", type: "editable", value: "8000.00", section: "volumeSurfaceMetrics", classes: ["user-input"] },
                e: { content: "m³", classes: ["unit-label"] },
                f: { content: "Volume/Area", classes: ["label-main"] },
                g: { fieldId: "g_105", type: "calculated", value: "3.23", section: "volumeSurfaceMetrics", dependencies: ["d_105", "d_101"] },
                h: { content: "Area/Volume", classes: ["text-center"] },
                i: { fieldId: "i_105", type: "calculated", value: "0.31", section: "volumeSurfaceMetrics", dependencies: ["d_101", "d_105"] },
                j: {}, k: {}, l: {}, m: {}, n: {}
            }
        },
        "106": {
            id: "B.14", rowId: "B.14", label: "Total Floor Area (Cond. + Uncond.)",
            cells: {
                c: { label: "Total Floor Area (Cond. + Uncond.)" },
                d: { fieldId: "d_106", type: "calculated", value: "1130.12", section: "volumeSurfaceMetrics", dependencies: ["d_87", "d_95", "d_96"] },
                e: { content: "m²", classes: ["unit-label"] },
                f: { content: "- Only used in E.3.2", classes: ["note-text"] },
                g: {}, h: {}, i: {}, j: {}, k: {}, l: {}, m: {}, n: {}
            }
        },
        "107": {
            id: "B.15", rowId: "B.15", label: "Window:Wall Ratio (WWR)",
            cells: {
                c: { label: "Window:Wall Ratio (WWR)" },
                d: { fieldId: "d_107", type: "calculated", value: "0.33", section: "volumeSurfaceMetrics", dependencies: ["d_88", "d_89", "d_90", "d_91", "d_92", "d_93", "d_86"] },
                e: { content: "%", classes: ["unit-label"] }, f: {}, g: {}, h: {}, i: {}, j: {}, k: {},
                l: { fieldId: "l_107", type: "calculated", value: "61%", section: "volumeSurfaceMetrics", classes: ["percentage-value"], dependencies: ["d_107"] },
                m: {}, n: {}
            }
        },
        "108": {
            id: "B.18.1", rowId: "B.18.1", label: "NRL₅₀ Target Method",
            cells: {
                c: { label: "NRL₅₀ Target Method" },
                d: { fieldId: "d_108", type: "dropdown", dropdownId: "dd_d_108", value: "AL-1B", section: "volumeSurfaceMetrics", options: [{ value: "MEASURED", name: "Measured" }, { value: "PH_CLASSIC", name: "PH Classic" }, { value: "PH_LOW", name: "PH Low" }, { value: "PH_PLUS", name: "PH+" }, { value: "AL-1A", name: "AL-1A" }, { value: "AL-2A", name: "AL-2A" }, { value: "AL-3A", name: "AL-3A" }, { value: "AL-4A", name: "AL-4A" }, { value: "AL-5A", name: "AL-5A" }, { value: "AL-1B", name: "AL-1B" }, { value: "AL-2B", name: "AL-2B" }, { value: "AL-3B", name: "AL-3B" }, { value: "AL-4B", name: "AL-4B" }, { value: "AL-5B", name: "AL-5B" }, { value: "AL-6B", name: "AL-6B" }] },
                e: { content: "", classes: ["unit-label"] },
                f: { content: "B.18.1 Target", classes: ["label-main"] },
                g: { fieldId: "g_108", type: "calculated", value: "1.17", section: "volumeSurfaceMetrics", dependencies: ["d_108", "g_109", "d_105", "d_101"] },
                h: { content: "L/s•m²", classes: ["unit-label"] },
                i: {}, j: {}, k: {}, l: {}, m: {}, n: {}
            }
        },
        "109": {
            id: "B.18.2", rowId: "B.18.2", label: "ACH₅₀ Target (Converts B.18.1)",
            cells: {
                c: { label: "ACH₅₀ Target (Converts B.18.1)" },
                d: { fieldId: "d_109", type: "calculated", value: "1.30", section: "volumeSurfaceMetrics", dependencies: ["g_108", "d_101", "d_105"] },
                e: { content: "ACH", classes: ["unit-label"] },
                f: { content: "B.18.2 Measured", classes: ["label-main"] },
                g: { fieldId: "g_109", type: "editable", value: "1.50", section: "volumeSurfaceMetrics", classes: ["user-input"] },
                h: {}, i: {}, j: {}, k: {},
                l: { fieldId: "l_109", type: "calculated", value: "115%", section: "volumeSurfaceMetrics", classes: ["percentage-value"], dependencies: ["g_109", "d_109"] },
                m: {}, n: {}
            }
        },
        "110": {
            id: "B.18.4", rowId: "B.18.4", label: "Ae₁₀ or ELA₁₀ (m²)",
            cells: {
                c: { label: "Ae₁₀ or ELA₁₀ (m²)" },
                d: { fieldId: "d_110", type: "calculated", value: "2.898", section: "volumeSurfaceMetrics", dependencies: ["d_109", "d_105"] },
                e: { content: "m²", classes: ["unit-label"] },
                f: { content: "B.18.5.1 n-Factor", classes: ["label-main"] },
                g: { fieldId: "g_110", type: "calculated", value: "16.7", section: "volumeSurfaceMetrics", dependencies: ["j_19", "d_103", "g_103"] },
                h: { content: "B.18.3 Ae₁₀ Zone", classes: ["text-center"] },
                i: { fieldId: "i_110", type: "calculated", value: "2", section: "volumeSurfaceMetrics", dependencies: ["j_19"] },
                j: {}, k: {},
                l: { fieldId: "l_110", type: "calculated", value: "173%", section: "volumeSurfaceMetrics", classes: ["percentage-value"], dependencies: ["d_110"] },
                m: {}, n: {}
            }
        }
    };
    
    //==========================================================================
    // ACCESSOR METHODS
    //==========================================================================

    function getFields() {
        const fields = {};
        Object.entries(sectionRows).forEach(([rowKey, row]) => {
            if (rowKey === "header" || rowKey === "subheader") return;
            if (!row.cells) return;
            Object.entries(row.cells).forEach(([colKey, cell]) => {
                if (cell.fieldId && cell.type) {
                    fields[cell.fieldId] = {
                        type: cell.type,
                        label: cell.label || row.label,
                        defaultValue: cell.value || "",
                        section: cell.section || "volumeSurfaceMetrics",
                        dependencies: cell.dependencies || []
                    };
                    if (cell.dropdownId) fields[cell.fieldId].dropdownId = cell.dropdownId;
                    if (cell.options) fields[cell.fieldId].options = cell.options;
                    if (cell.getOptions) fields[cell.fieldId].getOptions = cell.getOptions;
                    if (cell.min !== undefined) fields[cell.fieldId].min = cell.min;
                    if (cell.max !== undefined) fields[cell.fieldId].max = cell.max;
                    if (cell.step !== undefined) fields[cell.fieldId].step = cell.step;
                }
            });
        });
        return fields;
    }

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

    function getLayout() {
        const layoutRows = [];
        if (sectionRows["header"]) {
            layoutRows.push(createLayoutRow(sectionRows["header"]));
        }
        if (sectionRows["subheader"]) {
            layoutRows.push(createLayoutRow(sectionRows["subheader"]));
        }
        Object.entries(sectionRows).forEach(([key, row]) => {
            if (key !== "header" && key !== "subheader") {
                layoutRows.push(createLayoutRow(row));
            }
        });
        return { rows: layoutRows };
    }

    function createLayoutRow(row) {
        const rowDef = { id: row.id, cells: [ {}, {} ] };
        const columns = ['c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n'];
        columns.forEach(col => {
            if (row.cells && row.cells[col]) {
                const cell = { ...row.cells[col] };
                if (col === 'c') {
                    if (cell.type === 'label' && cell.content && !cell.label) {
                        cell.label = cell.content;
                        delete cell.type;
                        delete cell.content;
                    } else if (!cell.label && !cell.content && row.label) {
                        cell.label = row.label;
                    }
                }
                delete cell.getOptions;
                delete cell.section;
                delete cell.dependencies;
                rowDef.cells.push(cell);
            } else {
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
    // HELPER FUNCTIONS
    //==========================================================================
    
    function getNumericValue(fieldId) {
        const value = getFieldValue(fieldId);
        if (value === null || value === undefined) return 0;
        if (typeof value === 'string') {
            if (value.trim() === '') return 0;
            if (value.includes('%')) {
                return parseFloat(value.replace(/[%,]/g, '')) / 100 || 0;
            }
            return parseFloat(value.replace(/,/g, '')) || 0;
        }
        return typeof value === 'number' ? value : 0;
    }

    function getFieldValue(fieldId) {
        if (window.TEUI?.StateManager?.getValue) {
            const stateValue = window.TEUI.StateManager.getValue(fieldId);
            if (stateValue !== null && stateValue !== undefined) {
                return stateValue;
            }
        }
        const element = document.querySelector(`[data-field-id="${fieldId}"]`);
        if (element) {
             if (element.tagName === 'SELECT') {
                return element.value;
             }
             return element.textContent.trim();
        }
        return null;
    }

    function setCalculatedValue(fieldId, value, skipFormat = false) {
        const displayValue = skipFormat ? value : formatDisplayValue(fieldId, value);
        const rawValue = typeof value === 'number' ? value : (typeof value === 'string' ? value.replace(/,/g, '') : value);
        if (window.TEUI?.StateManager?.setValue) {
             window.TEUI.StateManager.setValue(fieldId, rawValue, 'calculated');
        } else {
             console.error("StateManager not available to set value for", fieldId);
             return;
        }
        const element = document.querySelector(`[data-field-id="${fieldId}"]`);
        if (element) {
            if (element.textContent !== displayValue) { 
                element.textContent = displayValue;
            }
            element.classList.add('calculated-value');
            element.classList.remove('user-input', 'editable', 'PendingValue');
            element.removeAttribute('contenteditable');
        } else {
             console.warn("DOM element not found for calculated field:", fieldId);
        }
    }

    function formatDisplayValue(fieldId, value) {
        if (typeof value !== 'number' && typeof value !== 'string') return value;
        let numValue = value;
        if (typeof value === 'string') {
            if (value.includes('%')) return value;
            if (value.includes('$')) return value;
            numValue = parseFloat(value.replace(/,/g, ''));
        }
        if (isNaN(numValue) || !isFinite(numValue)) {
            return (typeof value === 'string' && value.trim() !== '') ? value : ""; 
        }
        const isPercentCol = fieldId.startsWith('l_') || fieldId === 'g_105' || fieldId === 'i_105';
        const isWwr = fieldId === 'd_107';
        const isCurrencyCol = fieldId.startsWith('n_') && fieldId !== 'n_98';
        if (isPercentCol || isWwr) {
            return formatPercentage(numValue);
        } else if (isCurrencyCol) {
             return formatCurrency(numValue);
        } else {
             const decimals = (fieldId === 'g_101' || fieldId === 'g_102' || fieldId === 'd_104' || fieldId === 'd_110') ? 3 : 2; 
             return formatNumber(numValue, decimals);
        }
    }
    
    function formatNumber(value, decimals = 2) { 
        if (isNaN(value) || !isFinite(value)) return "0.00";
        return value.toLocaleString(undefined, { minimumFractionDigits: decimals, maximumFractionDigits: decimals });
    }
    
    function formatPercentage(value) { 
         if (isNaN(value)) return "0%";
         let percentage = value;
         if (Math.abs(value) <= 1 && value !== 0) { 
              percentage = value * 100;
         } else if (Math.abs(value) > 100) {
             // console.warn(`Potential percentage formatting issue for value: ${value}`);
         }
         const decimals = (Math.abs(percentage) < 1 && percentage !== 0) ? 1 : 0;
         return percentage.toLocaleString(undefined, { minimumFractionDigits: decimals, maximumFractionDigits: decimals }) + '%';
    }
    
    function formatCurrency(value) { 
        if (isNaN(value)) return "$0.00";
        return value.toLocaleString(undefined, { style: 'currency', currency: 'USD', minimumFractionDigits: 2, maximumFractionDigits: 2 });
    }
    
    function setElementClass(fieldId, className, removeClasses = []) {
        const element = document.querySelector(`[data-field-id="${fieldId}"]`);
        if (element) {
             removeClasses.forEach(cls => element.classList.remove(cls));
            if (className) element.classList.add(className);
        }
    }
    
    //==========================================================================
    // CALCULATION FUNCTIONS
    //==========================================================================

    function calculateVolumeMetrics() {
        const d85 = getNumericValue('d_85'); const d86 = getNumericValue('d_86');
        const d87 = getNumericValue('d_87'); const d88 = getNumericValue('d_88');
        const d89 = getNumericValue('d_89'); const d90 = getNumericValue('d_90');
        const d91 = getNumericValue('d_91'); const d92 = getNumericValue('d_92');
        const d93 = getNumericValue('d_93'); const d94 = getNumericValue('d_94');
        const d95 = getNumericValue('d_95'); const d96 = getNumericValue('d_96');
        const d105_vol = getNumericValue('d_105');
        const d101_areaAir = d85 + d86 + d87 + d88 + d89 + d90 + d91 + d92 + d93;
        const d102_areaGround = (d94 + d95 === 0) ? 0.0000001 : d94 + d95;
        const d106_floorArea = d87 + d95 + d96;
        setCalculatedValue('d_101', d101_areaAir);
        setCalculatedValue('d_102', d102_areaGround);
        setCalculatedValue('d_106', d106_floorArea);
        const g105_volAreaRatio = (d101_areaAir > 0) ? d105_vol / d101_areaAir : 0;
        setCalculatedValue('g_105', g105_volAreaRatio);
        const i105_areaVolRatio = (d105_vol > 0) ? d101_areaAir / d105_vol : 0;
        setCalculatedValue('i_105', i105_areaVolRatio);
    }

    function calculateCombinedUValue() {
        const d101_areaAir = getNumericValue('d_101');
        const d102_areaGround = getNumericValue('d_102');
        const g85 = getNumericValue('g_85') || (1 / (getNumericValue('f_85') || 1));
        const g86 = getNumericValue('g_86') || (1 / (getNumericValue('f_86') || 1));
        const g87 = getNumericValue('g_87') || (1 / (getNumericValue('f_87') || 1));
        const g88 = getNumericValue('g_88') || (1 / (getNumericValue('f_88') || 1));
        const g89 = getNumericValue('g_89') || (1 / (getNumericValue('f_89') || 1));
        const g90 = getNumericValue('g_90') || (1 / (getNumericValue('f_90') || 1));
        const g91 = getNumericValue('g_91') || (1 / (getNumericValue('f_91') || 1));
        const g92 = getNumericValue('g_92') || (1 / (getNumericValue('f_92') || 1));
        const g93 = getNumericValue('g_93') || (1 / (getNumericValue('f_93') || 1));
        const g94 = getNumericValue('g_94') || (1 / (getNumericValue('f_94') || 1));
        const g95 = getNumericValue('g_95') || (1 / (getNumericValue('f_95') || 1));
        const d85 = getNumericValue('d_85'); const d86 = getNumericValue('d_86');
        const d87 = getNumericValue('d_87'); const d88 = getNumericValue('d_88');
        const d89 = getNumericValue('d_89'); const d90 = getNumericValue('d_90');
        const d91 = getNumericValue('d_91'); const d92 = getNumericValue('d_92');
        const d93 = getNumericValue('d_93'); const d94 = getNumericValue('d_94');
        const d95 = getNumericValue('d_95');
        const d97_tbPenaltyPercent = getNumericValue('d_97'); 
        const tbFactor = 1 + d97_tbPenaltyPercent; 
        const sumProductAir = (d85 * g85) + (d86 * g86) + (d87 * g87) + (d88 * g88) + (d89 * g89) + (d90 * g90) + (d91 * g91) + (d92 * g92) + (d93 * g93);
        const g101_uAir = (d101_areaAir > 0) ? (sumProductAir / d101_areaAir) * tbFactor : 0;
        setCalculatedValue('g_101', g101_uAir);
        const sumProductGround = (d94 * g94) + (d95 * g95);
        const g102_uGround = (d102_areaGround > 0) ? (sumProductGround / d102_areaGround) * tbFactor : 0;
        setCalculatedValue('g_102', g102_uGround);
        const totalArea = d101_areaAir + d102_areaGround;
        const d104_uCombined = (totalArea > 0) ? (g101_uAir * d101_areaAir + g102_uGround * d102_areaGround) / totalArea : 0;
        setCalculatedValue('d_104', d104_uCombined);
    }

    function calculateWWR() {
        const d86 = getNumericValue('d_86');
        const d88 = getNumericValue('d_88');
        const d89 = getNumericValue('d_89'); const d90 = getNumericValue('d_90');
        const d91 = getNumericValue('d_91'); const d92 = getNumericValue('d_92');
        const d93 = getNumericValue('d_93');
        const windowDoorArea = d88 + d89 + d90 + d91 + d92 + d93;
        const totalWallArea = d86 + windowDoorArea;
        const wwr = (totalWallArea > 0) ? windowDoorArea / totalWallArea : 0;
        setCalculatedValue('d_107', wwr);
        const refWWR = 0.4; // Placeholder for reference value T107/T108
        const l107 = (refWWR > 0) ? wwr / refWWR : 0;
        setCalculatedValue('l_107', l107);
    }

    function calculateACH50Target() {
        const d108_method = getFieldValue("d_108");
        const g109_measured = getNumericValue("g_109");
        const d101_areaAir = getNumericValue("d_101");
        const d105_vol = getNumericValue("d_105");
        let g108_nrl50Target = 0;
        const nrlTargets = {
            "AL-1A": 0.89, "AL-2A": 0.71, "AL-3A": 0.53, "AL-4A": 0.35, "AL-5A": 0.21,
            "AL-1B": 1.17, "AL-2B": 0.98, "AL-3B": 0.78, "AL-4B": 0.59, "AL-5B": 0.39, "AL-6B": 0.23
        };
        const achToNrl = (ach) => (d101_areaAir > 0 && d105_vol > 0) ? (ach * d105_vol) / (d101_areaAir * 3.6) : 0;
        if (d108_method === "MEASURED") {
             g108_nrl50Target = achToNrl(g109_measured);
        } else if (d108_method === "PH_CLASSIC") {
            g108_nrl50Target = achToNrl(0.6);
        } else if (d108_method === "PH_LOW") {
            g108_nrl50Target = achToNrl(1.0);
        } else if (d108_method === "PH_PLUS") {
             g108_nrl50Target = 0.1;
        } else {
            g108_nrl50Target = nrlTargets[d108_method] || 0;
        }
        setCalculatedValue("g_108", g108_nrl50Target);
        const ach50Target = (d105_vol > 0 && d101_areaAir > 0) ? g108_nrl50Target * (d101_areaAir / d105_vol) * 3.6 : 0;
        setCalculatedValue("d_109", ach50Target);
         const targetACH = getNumericValue('d_109');
         const measuredACH = (d108_method === "MEASURED") ? g109_measured : ach50Target; 
         const l109 = (targetACH > 0) ? measuredACH / targetACH : 0;
         setCalculatedValue('l_109', l109);
    }

    function calculateAe10() {
        const ach50Target = getNumericValue("d_109");
        const volume = getNumericValue("d_105");
        const ae10 = (volume > 0) ? ach50Target * volume / 3600 : 0;
        setCalculatedValue("d_110", ae10);
        const refAe10 = 1.68; // Placeholder reference T110
        const l110 = (refAe10 > 0) ? ae10 / refAe10 : 0;
        setCalculatedValue('l_110', l110);
    }
    
     function calculateNFactor() {
        const climateZone = getNumericValue('j_19') || 6;
        const stories = getNumericValue('d_103') || 1.5;
        const shielding = getFieldValue('g_103') || 'Normal';
        let zoneNum = 2;
        if (climateZone <= 4) zoneNum = 1;
        else if (climateZone >= 7) zoneNum = 3;
        setCalculatedValue('i_110', zoneNum.toString(), true);
        const shieldingKey = shielding === 'Shielded' ? 'Shielded' : shielding === 'Exposed' ? 'Exposed' : 'Normal';
        const nFactorTable = {
            1: { "Shielded": { 1: 18.6, 1.5: 16.7, 2: 14.8, 3: 13.0 }, "Normal": { 1: 15.5, 1.5: 14.0, 2: 12.4, 3: 10.9 }, "Exposed": { 1: 14.0, 1.5: 12.6, 2: 11.2, 3: 9.8 } },
            2: { "Shielded": { 1: 22.2, 1.5: 20.0, 2: 17.8, 3: 15.5 }, "Normal": { 1: 18.5, 1.5: 16.7, 2: 14.8, 3: 13.0 }, "Exposed": { 1: 16.7, 1.5: 15.0, 2: 13.3, 3: 11.7 } },
            3: { "Shielded": { 1: 25.8, 1.5: 23.1, 2: 20.6, 3: 18.1 }, "Normal": { 1: 21.5, 1.5: 19.4, 2: 17.2, 3: 15.1 }, "Exposed": { 1: 19.4, 1.5: 17.4, 2: 15.5, 3: 13.5 } }
        };
        let storyKey = 1.5;
        if (stories <= 1) storyKey = 1;
        else if (stories > 1 && stories <= 1.75) storyKey = 1.5; 
        else if (stories > 1.75 && stories <= 2.5) storyKey = 2; 
        else storyKey = 3;
        let nFactor = nFactorTable[2]['Normal'][1.5];
        if (nFactorTable[zoneNum]?.[shieldingKey]?.[storyKey]) {
            nFactor = nFactorTable[zoneNum][shieldingKey][storyKey];
        }
        setCalculatedValue('g_110', nFactor);
    }

    function calculateAirLeakageHeatLoss() {
        const g109_ach50 = getNumericValue('g_109');
        const g110_nFactor = getNumericValue('g_110');
        const d105_volume = getNumericValue('d_105');
        const d20_hdd = getNumericValue('d_20');
        const d21_cdd = getNumericValue('d_21');
        const d101_areaAir = getNumericValue('d_101');
        const n_ach = (g110_nFactor > 0) ? g109_ach50 / g110_nFactor : 0;
        const airHeatCapacityFactor = 0.33; 
        const hoursPerDay = 24;
        const wattsToKw = 1000;
        const i103_heatloss = (airHeatCapacityFactor * n_ach * d105_volume * d20_hdd * hoursPerDay) / wattsToKw;
        setCalculatedValue('i_103', i103_heatloss);
        const h103_lossRate = (d101_areaAir > 0) ? i103_heatloss / d101_areaAir : 0;
        setCalculatedValue('h_103', h103_lossRate);
        const k103_heatgain = (airHeatCapacityFactor * n_ach * d105_volume * d21_cdd * hoursPerDay) / wattsToKw;
        setCalculatedValue('k_103', k103_heatgain);
        const j103_gainRate = (d101_areaAir > 0) ? k103_heatgain / d101_areaAir : 0;
        setCalculatedValue('j_103', j103_gainRate);
    }

    function calculateEnvelopeHeatLossGain() {
        const d101_areaAir = getNumericValue('d_101');
        const d102_areaGround = getNumericValue('d_102');
        const g101_uAir = getNumericValue('g_101');
        const g102_uGround = getNumericValue('g_102');
        const d20_hdd = getNumericValue('d_20');
        const d21_cdd = getNumericValue('d_21');
        const d22_gfHDD = getNumericValue('d_22');
        const h22_gfCDD = getNumericValue('h_22');
        const hoursPerDay = 24;
        const wattsToKw = 1000;
        const h101_lossRateAir = (g101_uAir * d20_hdd * hoursPerDay) / wattsToKw;
        const i101_heatlossAir = h101_lossRateAir * d101_areaAir;
        const j101_gainRateAir = (g101_uAir * d21_cdd * hoursPerDay) / wattsToKw;
        const k101_heatgainAir = j101_gainRateAir * d101_areaAir;
        setCalculatedValue('h_101', h101_lossRateAir);
        setCalculatedValue('i_101', i101_heatlossAir);
        setCalculatedValue('j_101', j101_gainRateAir);
        setCalculatedValue('k_101', k101_heatgainAir);
        const h102_lossRateGround = (g102_uGround * d22_gfHDD * hoursPerDay) / wattsToKw;
        const i102_heatlossGround = h102_lossRateGround * d102_areaGround;
        const j102_gainRateGround = (g102_uGround * h22_gfCDD * hoursPerDay) / wattsToKw;
        const k102_heatgainGround = j102_gainRateGround * d102_areaGround;
        setCalculatedValue('h_102', h102_lossRateGround);
        setCalculatedValue('i_102', i102_heatlossGround);
        setCalculatedValue('j_102', j102_gainRateGround);
        setCalculatedValue('k_102', k102_heatgainGround);
    }

    function calculateEnvelopeTotals() {
        const i101 = getNumericValue('i_101');
        const i102 = getNumericValue('i_102');
        const i103 = getNumericValue('i_103');
        const k101 = getNumericValue('k_101');
        const k102 = getNumericValue('k_102');
        const k103 = getNumericValue('k_103');
        const i104_totalLoss = i101 + i102 + i103;
        const k104_totalGain = k101 + k102 + k103;
        setCalculatedValue('i_104', i104_totalLoss);
        setCalculatedValue('k_104', k104_totalGain);
        const l101 = (i104_totalLoss > 0) ? i101 / i104_totalLoss : 0;
        const l102 = (i104_totalLoss > 0) ? i102 / i104_totalLoss : 0;
        const l103 = (i104_totalLoss > 0) ? i103 / i104_totalLoss : 0;
        const l104 = l101 + l102 + l103;
        setCalculatedValue('l_101', l101);
        setCalculatedValue('l_102', l102);
        setCalculatedValue('l_103', l103);
        setCalculatedValue('l_104', l104);
    }

    function calculateAll() {
        try {
            calculateVolumeMetrics();
            calculateCombinedUValue();
            calculateWWR();
            calculateNFactor();
            calculateACH50Target();
            calculateAe10();
            calculateAirLeakageHeatLoss();
            calculateEnvelopeHeatLossGain();
            calculateEnvelopeTotals();
            updateUIAfterCalculation();
        } catch (error) {
             console.error("Error during Section 12 calculateAll:", error);
        }
    }
    
    function updateUIAfterCalculation() {
        const fields = getFields();
        Object.keys(fields).forEach(fieldId => {
            const fieldDef = fields[fieldId];
            if (fieldDef.type === 'calculated') {
                 const element = document.querySelector(`[data-field-id="${fieldId}"]`);
                 if (element) {
                     const rawValue = getFieldValue(fieldId);
                     const displayValue = formatDisplayValue(fieldId, rawValue);
                     if (element.textContent !== displayValue) {
                          element.textContent = displayValue;
                     }
                 }
            }
        });
        // console.log("UI formatting updated after Section 12 calculation.");
    }
    
    //==========================================================================
    // EVENT HANDLING AND INITIALIZATION
    //==========================================================================
    
    function registerDependencies() {
        if (!window.TEUI?.StateManager) {
            // console.warn("StateManager not available for Section 12 dependency registration");
            return;
        }
        // console.log("Registering dependencies for Section 12");
        const fields = getFields();
        let count = 0;
        Object.entries(fields).forEach(([fieldId, fieldDef]) => {
            if (fieldDef.dependencies && Array.isArray(fieldDef.dependencies)) {
                fieldDef.dependencies.forEach(depId => {
                    if (window.TEUI.StateManager.getValue(depId) !== null || document.querySelector(`[data-field-id="${depId}"]`)) {
                         window.TEUI.StateManager.registerDependency(depId, fieldId);
                         count++;
                    } else {
                         // console.warn(`Section 12: Dependency ${depId} for ${fieldId} not found initially.`);
                    }
                });
            }
        });
        // console.log(`Registered ${count} dependencies for Section 12.`);
    }
    
    function initializeEventHandlers() {
        const sectionElement = document.getElementById('volumeSurfaceMetrics');
        if (!sectionElement) return;
        sectionElement.removeEventListener('blur', handleFieldBlur, true);
        sectionElement.removeEventListener('keydown', handleFieldKeydown, true);
        sectionElement.querySelectorAll('select').forEach(dropdown => {
             dropdown.removeEventListener('change', handleDropdownChange);
        });
        sectionElement.querySelectorAll('[contenteditable="true"].user-input').forEach(field => {
            field.removeEventListener('focus', handleFieldFocus);
            field.removeEventListener('focusout', handleFieldFocusOut);
        });
        sectionElement.addEventListener('blur', handleFieldBlur, true);
        sectionElement.addEventListener('keydown', handleFieldKeydown, true);
        const dropdowns = sectionElement.querySelectorAll('select');
        dropdowns.forEach(dropdown => {
            dropdown.addEventListener('change', handleDropdownChange);
        });
        const editableFields = sectionElement.querySelectorAll('[contenteditable="true"].user-input');
         editableFields.forEach(field => {
             field.addEventListener('focus', handleFieldFocus);
             field.addEventListener('focusout', handleFieldFocusOut);
         });
        handleConditionalEditability();
        const d108Dropdown = sectionElement.querySelector('select[data-field-id="d_108"]');
        if (d108Dropdown) {
            d108Dropdown.removeEventListener('change', handleConditionalEditability); 
            d108Dropdown.addEventListener('change', handleConditionalEditability);
        }
    }

    function handleDropdownChange(event) {
        const dropdown = event.target;
        const fieldId = dropdown.getAttribute('data-field-id');
        if (fieldId && window.TEUI?.StateManager) {
            window.TEUI.StateManager.setValue(fieldId, dropdown.value, 'user-modified');
            calculateAll();
        }
    }

    function handleFieldFocus(event) {
        event.target.classList.add('editing');
    }

    function handleFieldFocusOut(event) {
        event.target.classList.remove('editing');
    }

    function handleFieldBlur(event) {
        const field = event.target;
        if (field.hasAttribute('contenteditable') && field.getAttribute('contenteditable') === 'true' && field.classList.contains('user-input')) {
            const fieldId = field.getAttribute('data-field-id');
            if (!fieldId) return;
            let rawValue = field.textContent.trim().replace(/,/g, '');
            const originalText = field.textContent;
            let numValue = parseFloat(rawValue);
            if (!isNaN(numValue) && isFinite(numValue)) {
                 const formattedValue = formatDisplayValue(fieldId, numValue);
                 if (field.textContent !== formattedValue) {
                      field.textContent = formattedValue;
                 }
                 if (window.TEUI?.StateManager?.setValue) {
                    window.TEUI.StateManager.setValue(fieldId, numValue, 'user-modified');
                    calculateAll();
                 }
            } else {
                 const previousValue = window.TEUI?.StateManager?.getValue(fieldId);
                 if (previousValue !== null && previousValue !== undefined) {
                    field.textContent = formatDisplayValue(fieldId, previousValue);
                 } else {
                     field.textContent = formatDisplayValue(fieldId, 0); 
                 }
            }
        }
    }

    function handleFieldKeydown(event) {
        const field = event.target;
        if (field.hasAttribute('contenteditable') && field.getAttribute('contenteditable') === 'true') {
            if (event.key === 'Enter') {
                event.preventDefault();
                field.blur();
            }
        }
    }

    function handleConditionalEditability() {
        const d108Dropdown = document.querySelector('select[data-field-id="d_108"]');
        const g109Cell = document.querySelector('td[data-field-id="g_109"]');
        if (!d108Dropdown || !g109Cell) return;
        const isMeasured = d108Dropdown.value === 'MEASURED';
        const g109FieldDef = getFields()['g_109'];
        if (isMeasured) {
            if (g109Cell.getAttribute('contenteditable') !== 'true') {
                 g109Cell.setAttribute('contenteditable', 'true');
                 g109Cell.classList.add('user-input', 'editable');
                 g109Cell.classList.remove('calculated-value', 'PendingValue');
                 const currentValue = window.TEUI.StateManager.getValue('g_109');
                 const defaultValue = g109FieldDef?.defaultValue || '0';
                 const valueToDisplay = (currentValue !== null && !isNaN(parseFloat(currentValue))) ? currentValue : defaultValue;
                 g109Cell.textContent = formatDisplayValue('g_109', valueToDisplay);
                 g109Cell.removeEventListener('focus', handleFieldFocus);
                 g109Cell.removeEventListener('focusout', handleFieldFocusOut);
                 g109Cell.addEventListener('focus', handleFieldFocus);
                 g109Cell.addEventListener('focusout', handleFieldFocusOut);
            }
        } else {
            if (g109Cell.getAttribute('contenteditable') === 'true') {
                 g109Cell.setAttribute('contenteditable', 'false');
                 g109Cell.classList.remove('user-input', 'editable', 'editing');
                 g109Cell.classList.add('PendingValue');
                 g109Cell.textContent = "Target value used";
                 g109Cell.removeEventListener('focus', handleFieldFocus);
                 g109Cell.removeEventListener('focusout', handleFieldFocusOut);
            }
        }
    }

    function initializeListeners() {
        if (!window.TEUI || !window.TEUI.StateManager) return;
        const sm = window.TEUI.StateManager;
        // Listen for changes in area totals and TBP from Section 11
        sm.addListener('d_98', calculateAll);
        sm.addListener('i_98', calculateAll);
        sm.addListener('k_98', calculateAll);
        sm.addListener('d_97', calculateAll);
        // Listen for changes in climate data from Section 3
        sm.addListener('d_20', calculateAll); // HDD
        sm.addListener('d_21', calculateAll); // CDD
        sm.addListener('d_22', calculateAll); // GF HDD
        sm.addListener('h_22', calculateAll); // GF CDD
        // Add listeners for other inputs if S12 calculates things based on them
    }

    function onSectionRendered() {
        if (isInitialized) return;
        // console.log('Section 12 rendered, initializing...');
        registerWithStateManager();
        registerDependencies();
        initializeEventHandlers();
        addStateManagerListeners();
        initializeListeners();
        calculateAll();
        addCheckmarkStyles();
        isInitialized = true;
        // console.log('Section 12 initialization complete.');
    }

    function registerWithStateManager() {
        if (!window.TEUI?.StateManager) return;
        const fields = getFields();
        Object.entries(fields).forEach(([fieldId, fieldDef]) => {
             const currentValue = window.TEUI.StateManager.getValue(fieldId);
             if (currentValue === null || currentValue === undefined || window.TEUI.StateManager.getDebugInfo(fieldId)?.state === 'default') {
                 if (fieldDef.defaultValue !== undefined && fieldDef.defaultValue !== null && fieldDef.defaultValue !== "") {
                     window.TEUI.StateManager.setValue(fieldId, fieldDef.defaultValue, 'default');
                 }
             }
        });
    }
    
     function addStateManagerListeners() {
        if (!window.TEUI?.StateManager) return;
        const externalDependencies = [
             'd_85', 'f_85', 'g_85', 'd_86', 'f_86', 'g_86', 'd_87', 'f_87', 'g_87', 
             'd_88', 'f_88', 'g_88', 'd_89', 'f_89', 'g_89', 'd_90', 'f_90', 'g_90', 
             'd_91', 'f_91', 'g_91', 'd_92', 'f_92', 'g_92', 'd_93', 'f_93', 'g_93', 
             'd_94', 'f_94', 'g_94', 'd_95', 'f_95', 'g_95', 'd_96',
             'd_97',
             'd_20', 'd_21', 'd_22', 'h_22', 'j_19'
        ]; 
        externalDependencies.forEach(depId => {
             window.TEUI.StateManager.addListener(depId, () => {
                 calculateAll();
             });
        });
    }
    
     function addCheckmarkStyles() {
        let styleElement = document.getElementById('sect12-styles');
        if (!styleElement) {
            styleElement = document.createElement('style');
            styleElement.id = 'sect12-styles';
            styleElement.textContent = `
                .checkmark { color: green; font-weight: bold; }
                .warning { color: red; font-weight: bold; }
                .editable { background-color: #f0f8ff; cursor: text; }
                .editing { outline: 1px solid blue; background-color: #e6f2ff; }
                /* .calculated-value { background-color: #f8f9fa; } REMOVED - Style handled globally */
                .highlighted-result { font-weight: bold; background-color: #fff3cd; }
            `;
            document.head.appendChild(styleElement);
        }
    }
    
    //==========================================================================
    // PUBLIC API
    //==========================================================================
    
    return {
        getFields: getFields,
        getDropdownOptions: getDropdownOptions,
        getLayout: getLayout,
        initializeEventHandlers: initializeEventHandlers,
        onSectionRendered: onSectionRendered,
        calculateAll: calculateAll
    };
})();

// Standard Initialization listeners
document.addEventListener('teui-section-rendered', function(event) {
    if (event.detail?.sectionId === 'volumeSurfaceMetrics') {
         requestAnimationFrame(() => {
             if (window.TEUI?.SectionModules?.sect12) {
                 if (!window.TEUI.SectionModules.sect12.isInitialized) { 
                      window.TEUI.SectionModules.sect12.onSectionRendered();
                 }
             } else {
                  // console.warn("Section 12 module not ready when teui-section-rendered fired.");
             }
         });
    }
});

document.addEventListener('teui-rendering-complete', function() {
     requestAnimationFrame(() => {
         if (document.getElementById('volumeSurfaceMetrics') && window.TEUI?.SectionModules?.sect12) {
             if (!window.TEUI.SectionModules.sect12.isInitialized) {
                 window.TEUI.SectionModules.sect12.onSectionRendered();
             }
        }
     });
});

window.calculateVolumeMetricsSection = function() {
     if (window.TEUI?.SectionModules?.sect12?.calculateAll) {
          // console.log("Globally triggering Section 12 calculateAll...");
          window.TEUI.SectionModules.sect12.calculateAll();
     } else {
          console.warn("Section 12 calculateAll not available for global trigger.");
     }
};