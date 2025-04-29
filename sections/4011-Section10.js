/**
 * 4011-Section10.js
 * Radiant Gains (Section 10) module for TEUI Calculator 4.011
 * Initial refactor based on SectionXX template, starting with Header and Row 73 (Doors).
 */

// Ensure namespace exists
window.TEUI = window.TEUI || {};
window.TEUI.SectionModules = window.TEUI.SectionModules || {};

// Section 10: Radiant Gains Module (Simplified)
window.TEUI.SectionModules.sect10 = (function() {
    //==========================================================================
    // CONFIGURATION
    //==========================================================================
    // TODO: Add config array later when using parameterized function for rows 73-78

    const editableFields = ['d_73', 'e_73', 'f_73', 'g_73', 'h_73']; // Editable fields for Row 73

    //==========================================================================
    // LAYOUT DEFINITION (sectionRows)
    //==========================================================================
    const sectionRows = {
        // UNIT SUBHEADER (Adapted from original Section 10)
        "header": {
            id: "10-ID", rowId: "10-ID", label: "RG-Unts", cells: {
                c: { content: "" },
                d: { content: "AREA m²" },
                e: { content: "ORIENTATION", classes: ["section-subheader", "align-center"], style: "white-space: pre-line;" },
                f: { content: "SHGC", classes: ["section-subheader", "align-center"], style: "white-space: pre-line;" },
                g: { content: "WINTER SHADING", classes: ["section-subheader", "align-center"], style: "white-space: pre-line;" },
                h: { content: "SUMMER SHADING", classes: ["section-subheader", "align-center"], style: "white-space: pre-line;" },
                i: { content: "HTG GAIN kWh/yr", classes: ["section-subheader", "align-center"], style: "white-space: pre-line;" },
                j: { content: "HTG GAIN %", classes: ["section-subheader", "align-center"], style: "white-space: pre-line;" },
                k: { content: "COOL GAIN kWh/yr", classes: ["section-subheader", "align-center"], style: "white-space: pre-line;" },
                l: { content: "COOL GAIN %", classes: ["section-subheader", "align-center"], style: "white-space: pre-line;" },
                m: { content: "G-FACTOR kWh/m²/yr", classes: ["section-subheader", "align-center"], style: "white-space: pre-line;" }
            }
        },
        // Row 73: G.7 Doors (Adapted from original Section 10)
        "73": {
            id: "G.7", rowId: "G.7", label: "Doors", cells: {
                c: { label: "Doors" },
                d: { fieldId: "d_73", type: "editable", value: "7.50", section: "envelopeRadiantGains", classes: ["user-input", "col-medium"] },
                e: { fieldId: "e_73", type: "dropdown", dropdownId: "dd_e_73", value: "Average", section: "envelopeRadiantGains", options: [ { value: "North", name: "North" }, { value: "NorthEast", name: "NorthEast" }, { value: "East", name: "East" }, { value: "SouthEast", name: "SouthEast" }, { value: "South", name: "South" }, { value: "SouthWest", name: "SouthWest" }, { value: "West", name: "West" }, { value: "NorthWest", name: "NorthWest" }, { value: "Average", name: "Average" }, { value: "Skylight", name: "Skylight" } ], classes: ["col-medium"] },
                f: { fieldId: "f_73", type: "percentage", value: "30", min: 20, max: 65, step: 5, section: "envelopeRadiantGains", classes: ["col-small", "slider-container"] },
                g: { fieldId: "g_73", type: "percentage", value: "0", min: 0, max: 100, step: 1, section: "envelopeRadiantGains", classes: ["col-large", "slider-container"] },
                h: { fieldId: "h_73", type: "percentage", value: "100", min: 0, max: 100, step: 1, section: "envelopeRadiantGains", classes: ["col-large", "slider-container"] },
                i: { fieldId: "i_73", type: "calculated", dependencies: ["d_73", "e_73", "f_73", "g_73"] },
                j: { fieldId: "j_73", type: "calculated", dependencies: ["i_73", "h_79"] }, // Depends on total h_79
                k: { fieldId: "k_73", type: "calculated", dependencies: ["d_73", "e_73", "f_73", "h_73"] },
                l: { fieldId: "l_73", type: "calculated", dependencies: ["k_73", "j_79"] }, // Depends on total j_79
                m: { fieldId: "m_73", type: "calculated", dependencies: ["e_73"] }
            }
        }
        // Other rows (74-82) will be added later
    };
    
    //==========================================================================
    // ACCESSOR METHODS
    //==========================================================================
    function getFields() {
            const fields = {};
        Object.values(sectionRows).forEach(row => {
            if (!row.cells || row.id === '10-ID') return; // Skip header row
            Object.values(row.cells).forEach(cell => {
                    if (cell.fieldId && cell.type) {
                    // Base field definition
                        fields[cell.fieldId] = {
                            type: cell.type,
                            defaultValue: cell.value || "",
                        section: cell.section || "envelopeRadiantGains", // Added default
                        ...(cell.dependencies && { dependencies: cell.dependencies })
                    };
                    // --- Explicitly copy dropdown/slider properties --- 
                    if (cell.dropdownId) {
                        fields[cell.fieldId].dropdownId = cell.dropdownId;
                    }
                    if (cell.options) {
                        fields[cell.fieldId].options = cell.options; // <<< Copy options array
                    }
                    if (cell.getOptions) {
                        fields[cell.fieldId].getOptions = cell.getOptions;
                    }
                    if (cell.min !== undefined) {
                        fields[cell.fieldId].min = cell.min;
                    }
                     if (cell.max !== undefined) {
                        fields[cell.fieldId].max = cell.max;
                    }
                     if (cell.step !== undefined) {
                        fields[cell.fieldId].step = cell.step;
                    }
                     // --- End property copying ---
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
                // Use dropdownId if present (legacy), otherwise fallback to fieldId for identification
                const id = cell.dropdownId || cell.fieldId;
                if (id && cell.type === 'dropdown' && cell.options) {
                    options[id] = cell.options;
                    }
                });
            });
            return options;
    }
    
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
            // Clean non-render props
            delete cell.section; delete cell.dependencies; delete cell.getOptions;
             // Keep fieldId, type, value etc. needed by renderer or logic
                rowDef.cells.push(cell);
        });
        return rowDef;
    }
    
    //==========================================================================
    // HELPER FUNCTIONS (Copied/Adapted from S11/Template)
    //==========================================================================
    // Note: Implementations copied from Section 11
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
            // Basic formatting for Section 10: default 2 decimals
            // Specific formatting for percentages or other types can be added here later
            // Column M (Gain Factor) uses 2 decimals according to Excel
            if (fieldId.startsWith('m_')) {
                 displayValue = formatNumber(numValue, 2);
            } else {
                 displayValue = formatNumber(numValue, 2);
            }
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
    function handleFieldBlur(event) {
        const fieldElement = this;
        const currentFieldId = fieldElement.getAttribute('data-field-id');
        if (!currentFieldId) return;
        let valueStr = fieldElement.textContent.trim().replace(/,/g, '');
        let numValue = parseFloat(valueStr);
        let rawValueToStore = !isNaN(numValue) ? numValue.toString() : '0';
        let displayValue = formatNumber(numValue, 2); // Default format for S10 editable fields (Area)

        fieldElement.textContent = displayValue;
        if (window.TEUI?.StateManager?.setValue) {
            window.TEUI.StateManager.setValue(currentFieldId, rawValueToStore, 'user-modified');
        }
        calculateAll();
    }
    // We might need setIndicatorClass later
    // function setIndicatorClass(fieldId, newClass, potentialClasses) { /* ... */ }

    //==========================================================================
    // CALCULATION FUNCTIONS
    //==========================================================================

    /**
     * Calculate gain factor based on orientation and climate zone (from original S10)
     */
    function calculateGainFactor(orientation, climateZone = 6) {
        try {
            const orientations = ["North", "NorthEast", "East", "SouthEast", "South", "SouthWest", "West", "NorthWest"];
            // Add the default/9th value used by CHOOSE/IFERROR to each list
            const northernValues = [0.19, 0.89, 2.09, 6.01, 24.76, 82.25, 64.37, 18.14, 24.84]; // Index 8 = default/Average/Error
            const southernValues = [1.31, 34.69, 76.94, 86.59, 70.74, 60.4, 25.86, 2.88, 50.00]; // Index 8 = default/Average/Error

            // Choose the correct value list based on climate zone FIRST
            const values = climateZone > 6 ? northernValues : southernValues;

            // Handle Skylight explicitly: 25 for Arctic (zone > 6), 75 otherwise
            if (orientation === "Skylight") {
                return climateZone > 6 ? 25.0 : 75.0;
            }

            // Find the index of the orientation in the list (0-7)
            let orientationIndex = orientations.indexOf(orientation);

            // If not found (e.g., "Average" or error), use the default index (8)
            if (orientationIndex === -1) {
                orientationIndex = 8;
            }

            // Return the value from the selected list using the determined index
            return values[orientationIndex];

        } catch (error) {
            console.error('Error calculating gain factor:', error);
            // Return a reasonable default based on climate zone if error occurs
            return climateZone > 6 ? 24.84 : 50.0;
        }
    }
    
    /**
     * Calculate solar gains for a specific orientation row (Simplified for Row 73 initially)
     * @param {string} rowId - Row ID (e.g., "73")
     */
    function calculateOrientationGains(rowId) {
        try {
            const area = getNumericValue(`d_${rowId}`);
            const orientation = getFieldValue(`e_${rowId}`);
            const shgcPercentage = getNumericValue(`f_${rowId}`);
            const shgc = shgcPercentage / 100;
            const winterShading = getNumericValue(`g_${rowId}`) / 100;
            const summerShading = getNumericValue(`h_${rowId}`) / 100;
            const climateZone = getNumericValue("j_19") || 6.0;

            const gainFactor = calculateGainFactor(orientation, climateZone);
            setCalculatedValue(`m_${rowId}`, gainFactor);

            const baseGain = area * gainFactor * (shgc / 0.5);
            const heatingGains = baseGain * (1 - winterShading);
            const coolingGains = baseGain * 0.5 * (1 - summerShading);

            setCalculatedValue(`i_${rowId}`, heatingGains);
            setCalculatedValue(`k_${rowId}`, coolingGains);

            // Percentages (j, l) require totals - skip for now
             setCalculatedValue(`j_${rowId}`, '0.00%'); // Placeholder
             setCalculatedValue(`l_${rowId}`, '0.00%'); // Placeholder

        } catch (error) {
            console.error(`Error calculating orientation gains for row ${rowId}:`, error);
             setCalculatedValue(`i_${rowId}`, 0); setCalculatedValue(`k_${rowId}`, 0); setCalculatedValue(`m_${rowId}`, 0);
             setCalculatedValue(`j_${rowId}`, '0.00%'); setCalculatedValue(`l_${rowId}`, '0.00%');
        }
    }
    
    /**
     * Calculate all values for this section (Simplified: only Row 73)
     */
    function calculateAll() {
        // console.log("Calculating Section 10 (Simplified)");
        calculateOrientationGains("73");
        // TODO: Later: Add calls for rows 74-78
        // TODO: Later: calculateSubtotals(); updatePercentages(); calculateUtilizationFactors();
    }

    //==========================================================================
    // EVENT HANDLING & INITIALIZATION
    //==========================================================================

    /**
     * Set up default values for dropdowns after rendering.
     */
    function setupDropdownDefaults() {
        try {
            const dropdowns = document.querySelectorAll('#envelopeRadiantGains select[data-field-id]');
            dropdowns.forEach(dropdown => {
                const fieldId = dropdown.getAttribute('data-field-id');
                let defaultValue = null;

                // Find definition in sectionRows
                Object.values(sectionRows).find(row => {
                    const cell = Object.values(row.cells || {}).find(c => c.fieldId === fieldId && c.type === 'dropdown');
                    if (cell) {
                        defaultValue = cell.value; // Get default value from layout definition
                        return true;
                    }
                    return false;
                });

                // Try StateManager if not found or null in layout
                if (defaultValue == null && window.TEUI?.StateManager?.getValue) {
                   defaultValue = window.TEUI.StateManager.getValue(fieldId);
                }

                if (defaultValue != null) {
                    dropdown.value = defaultValue;
                    // Optionally trigger change event if needed for initial calculations based on default
                    // dropdown.dispatchEvent(new Event('change'));
                }
            });
        } catch (error) {
            console.error('Error setting up dropdown defaults:', error);
        }
    }
    
    /**
     * Initialize slider interactions.
     */
    function initializeSliders() {
        const sectionElement = document.getElementById('envelopeRadiantGains');
        if (!sectionElement) return;
        const sliders = sectionElement.querySelectorAll('input[type="range"]');

        sliders.forEach(slider => {
            const fieldId = slider.getAttribute('data-field-id');
            const display = sectionElement.querySelector(`[data-display-for="${fieldId}"]`);

            // Update display on input
            slider.addEventListener('input', () => {
                if (display) display.textContent = `${slider.value}%`;
                    if (window.TEUI?.StateManager?.setValue) {
                    window.TEUI.StateManager.setValue(fieldId, slider.value, 'user-modified');
                 }
                calculateAll(); // Recalculate on slider change
            });

             // Initial display update
             if (display) display.textContent = `${slider.value}%`;

            // Add focus/blur styling if desired (optional)
            slider.addEventListener('focus', () => slider.classList.add('editing'));
            slider.addEventListener('focusout', () => slider.classList.remove('editing'));
        });
    }
    
    /**
     * Initialize dropdown interactions (Placeholder - specific logic depends on FieldManager/UI Lib)
     */
    function initializeDropdowns() {
         const sectionElement = document.getElementById('envelopeRadiantGains');
         if (!sectionElement) return;
         const dropdowns = sectionElement.querySelectorAll('select[data-field-id]');

            dropdowns.forEach(dropdown => {
                const fieldId = dropdown.getAttribute('data-field-id');
             if (fieldId) {
                 dropdown.addEventListener('change', () => {
                     if (window.TEUI?.StateManager?.setValue) {
                         window.TEUI.StateManager.setValue(fieldId, dropdown.value, 'user-modified');
                     }
                     calculateAll(); // Recalculate
                 });
             }
         });
         // NOTE: Actual option population usually handled by the rendering engine (FieldManager?)
         // based on the options provided in sectionRows. If options are still missing,
         // the issue might be in how the FieldManager consumes the layout definition.
         // Calling setupDropdownDefaults in onSectionRendered helps ensure the *selected* value is correct.
    }

    function initializeEventHandlers() {
         // Attach listeners to editable text fields
        editableFields.forEach(fieldId => {
            const field = document.querySelector(`[data-field-id="${fieldId}"]`);
            if (field?.classList.contains('user-input')) { // Target only text editable
                 field.addEventListener('blur', handleFieldBlur.bind(field));
                 field.addEventListener('keydown', e => { if (e.key === 'Enter') { e.preventDefault(); field.blur(); } });
                 field.addEventListener('focus', () => field.classList.add('editing'));
                 field.addEventListener('focusout', () => field.classList.remove('editing'));
                 handleFieldBlur.call(field); // Initial format
            }
        });
        // Initialize specific component types
        initializeSliders();
        initializeDropdowns();
    }

    function onSectionRendered() {
        // console.log("Section 10 (Simplified) rendered.");
        initializeEventHandlers();
        setupDropdownDefaults(); // Ensure defaults are set

        // Add StateManager listener for Climate Zone changes
        if (window.TEUI?.StateManager?.addListener) {
            window.TEUI.StateManager.addListener('j_19', (newValue) => {
                calculateAll();
            });
            // TODO: Add listener for internal gains (i_71) when needed for utilization factor
        }

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
        if (event.detail?.sectionId === 'envelopeRadiantGains') {
        setTimeout(() => { window.TEUI.SectionModules.sect10?.onSectionRendered(); }, 50);
    }
});
document.addEventListener('teui-rendering-complete', function() { // Fallback
    setTimeout(() => { if (document.getElementById('envelopeRadiantGains')) window.TEUI.SectionModules.sect10?.onSectionRendered(); }, 250);
});