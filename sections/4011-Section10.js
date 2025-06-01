/**
 * 4011-Section10.js
 * Radiant Gains (Section 10) module for TEUI Calculator 4.011
 * 
 * Uses the consolidated declarative approach where field definitions
 * are integrated directly into the layout structure.
 */

// Ensure namespace exists
window.TEUI = window.TEUI || {};
window.TEUI.SectionModules = window.TEUI.SectionModules || {};

// Section 10: Radiant Gains Module
window.TEUI.SectionModules.sect10 = (function() {
    //==========================================================================
    // HELPER FUNCTIONS (Standardized)
    //==========================================================================
    // Note: Using standardized helpers based on S11/S15
    function getNumericValue(fieldId) {
        // Directly use the global parser, assuming it's loaded correctly due to index.html order
        // Use || 0 as a fallback if parseNumeric returns null/undefined/NaN
        return window.TEUI.parseNumeric(getFieldValue(fieldId)) || 0;
    }

    function getFieldValue(fieldId) {
        const stateValue = window.TEUI?.StateManager?.getValue(fieldId);
        if (stateValue != null) return stateValue;
        const element = document.querySelector(`[data-field-id="${fieldId}"]`);
        return element ? (element.value ?? element.textContent?.trim()) : null;
    }

    /**
     * Formats a number for display.
     * Handles specific formats like percentage (integer + %), currency.
     * @param {number} value - The number to format.
     * @param {string} [format='number'] - 'number', 'percent', 'currency'.
     * @returns {string} The formatted number.
     */
    function formatNumber(value, format = 'number') {
        if (value === null || value === undefined || isNaN(value)) {
            return format === 'percent' ? '0%' : (format === 'currency' ? '$0.00' : '0.00');
        }

        const num = Number(value);

        if (format === 'percent') {
            // Input is raw decimal (e.g., 0.152 for 15.20%), output with 2 decimal places + %
            return (num * 100).toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 }) + '%';
        } else if (format === 'currency') {
            return '$' + num.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 });
        } else { // Default number format (kWh, Gain Factor, etc.)
            return num.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 });
        }
    }

    /**
     * Sets calculated value in StateManager and updates DOM using standard formatNumber.
     * Updated for V2 dual-engine architecture - now an alias for setDualEngineValue
     * @param {string} fieldId
     * @param {number} rawValue
     * @param {string} [format='number']
     */
    function setCalculatedValue(fieldId, rawValue, format = 'number') {
        // Handle N/A for non-finite numbers
        if (!isFinite(rawValue) || rawValue === null || rawValue === undefined) { 
            const element = document.querySelector(`[data-field-id="${fieldId}"]`);
            if (element) element.textContent = 'N/A';
            return; 
        }

        // Convert legacy format types to V2 format types
        let formatType = format;
        if (format === 'number') {
            if (/[jl]_[\\d]{2,}/.test(fieldId) || /[jl]_79/.test(fieldId)) { formatType = 'percent-2dp'; }
            else if (fieldId.startsWith('p_')) { formatType = 'currency-2dp'; }
            else formatType = 'number-2dp-comma';
        } else if (format === 'percent') {
            formatType = 'percent-2dp';
        } else if (format === 'currency') {
            formatType = 'currency-2dp';
        }
        
        // Use the V2 dual-engine setter
        setDualEngineValue(fieldId, rawValue, formatType);
    }

    function handleFieldBlur(event) {
        const fieldElement = this;
        const currentFieldId = fieldElement.getAttribute('data-field-id');
        if (!currentFieldId) return;

        if (currentFieldId === 'd_74') {
            // console.log(`[S10 handleFieldBlur DEBUG] Entered for d_74. Initial textContent: "${fieldElement.textContent}"`);
        }

        let valueStr = fieldElement.textContent.trim().replace(/,/g, '');
        let displayValue = '0.00';
        let rawValueToStore = '0';

        let numValue = window.TEUI.parseNumeric(valueStr, NaN);

        if (!isNaN(numValue)) { // Successfully parsed a number
            // Store the raw number string *first* for all valid number cases
            rawValueToStore = numValue.toString(); 

            // Apply specific formatting based on field type
            if (currentFieldId === 'd_97') { // Thermal Bridge Penalty (%)
                // Convert input number to decimal (assume input "20" means 20% -> 0.2)
                let decimalValue = numValue / 100;
                // Clamp the DECIMAL value between 0 and 1 
                decimalValue = Math.max(0, Math.min(1, decimalValue));
                rawValueToStore = decimalValue.toString(); // Overwrite with clamped decimal value for state
                displayValue = formatNumber(decimalValue * 100, 'number'); // Display as number 0-100, not percentage string
            } else if (currentFieldId.startsWith('g_')) { // U-Value (3 decimals)
                displayValue = formatNumber(numValue, 'W/m2'); // Use specific format
                // rawValueToStore is already set to numValue.toString()
            } else { // Default: Area (d_), RSI (f_) - 2 decimals
                displayValue = formatNumber(numValue, 'number'); 
                // rawValueToStore is already set to numValue.toString()
            }
        } else {
            // Handle invalid input (set to 0 or 0%)
            if (currentFieldId === 'd_97') {
                displayValue = '0%';
                rawValueToStore = '0'; // Store 0 for invalid TBP
            } else if (currentFieldId.startsWith('g_')) {
                displayValue = formatNumber(0, 'W/m2'); 
                rawValueToStore = '0';
            } else {
                displayValue = formatNumber(0, 'number');
                rawValueToStore = '0';
            }
            // console.warn(`Invalid input "${valueStr}" for ${currentFieldId}. Resetting to 0.`);
        }
        fieldElement.textContent = displayValue; // Update DOM display

        // Store the validated, raw numeric string for user inputs
        if (window.TEUI?.StateManager?.setValue) {
            window.TEUI.StateManager.setValue(currentFieldId, rawValueToStore, 'user-modified'); 
            // console.log(`handleFieldBlur: StateManager set ${currentFieldId} to ${rawValueToStore}`); // DEBUG LOG
        }

        // Trigger recalculation using the standardized calculateAll function
        if (typeof calculateAll === 'function') {
            calculateAll();
        } else {
            console.error('calculateAll function not found in Section 10');
        }
    }

    function setElementClass(fieldId, className) {
        const element = document.querySelector(`[data-field-id="${fieldId}"]`);
        if (element) {
            // Remove existing status classes
            element.classList.remove('checkmark', 'warning');
            // Add the new class
            element.classList.add(className);
        }
    }

    function setIndicatorClass(fieldId, newClass, potentialClasses) {
        const element = document.querySelector(`[data-field-id="${fieldId}"]`);
        if (element) {
            const baseClass = 'gain-indicator'; // Always gain for this section
            element.classList.remove(...potentialClasses);
            if (newClass) {
                element.classList.add(newClass);
                if (!element.classList.contains(baseClass)) {
                    element.classList.add(baseClass);
                }
            } else {
                 element.classList.remove(baseClass);
            }
        }
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

    //==========================================================================
    // CONSOLIDATED FIELD DEFINITIONS AND LAYOUT
    //==========================================================================
    
    // Define rows with integrated field definitions
    const sectionRows = {
        // UNIT SUBHEADER - MUST COME FIRST
        "header": {
            id: "10-ID",
            rowId: "10-ID",
            label: "RG-Unts",
            cells: {
                c: { content: "" }, // Empty column for row labels
                d: { content: "AREA m² " }, // Empty column for row labels
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
        
        // Row 73: G.7 Doors
        "73": {
            id: "G.7",
            rowId: "G.7",
            label: "Doors",
            cells: {
                c: { label: "Doors" },
                d: { 
                    fieldId: "d_73", 
                    type: "editable", 
                    value: "7.50",
                    section: "envelopeRadiantGains",
                    classes: ["user-input", "col-medium"]
                },
                e: { 
                    fieldId: "e_73", 
                    type: "dropdown", 
                    dropdownId: "dd_e_73", 
                    value: "Average",
                    section: "envelopeRadiantGains",
                    options: [
                        { value: "North", name: "North" },
                        { value: "NorthEast", name: "NorthEast" },
                        { value: "East", name: "East" },
                        { value: "SouthEast", name: "SouthEast" },
                        { value: "South", name: "South" },
                        { value: "SouthWest", name: "SouthWest" },
                        { value: "West", name: "West" },
                        { value: "NorthWest", name: "NorthWest" },
                        { value: "Average", name: "Average" },
                        { value: "Skylight", name: "Skylight" }
                    ],
                    classes: ["col-medium"]
                },
                f: { 
                    fieldId: "f_73", 
                    type: "coefficient_slider",
                    value: "0.50",
                    min: 0.20,
                    max: 0.60,
                    step: 0.05,
                    section: "envelopeRadiantGains",
                    classes: ["col-small", "slider-container"]
                },
                g: { 
                    fieldId: "g_73", 
                    type: "percentage", 
                    value: "0", 
                    min: 0, 
                    max: 100, 
                    step: 1,
                    section: "envelopeRadiantGains",
                    classes: ["col-large", "slider-container"]
                },
                h: { 
                    fieldId: "h_73", 
                    type: "percentage", 
                    value: "100", 
                    min: 0, 
                    max: 100, 
                    step: 1,
                    section: "envelopeRadiantGains",
                    classes: ["col-large", "slider-container"]
                },
                i: { 
                    fieldId: "i_73", 
                    type: "calculated", 
                    value: "225.00",
                    section: "envelopeRadiantGains",
                    dependencies: ["d_73", "e_73", "f_73", "g_73"]
                },
                j: { 
                    fieldId: "j_73", 
                    type: "calculated", 
                    value: "1.55%",
                    section: "envelopeRadiantGains",
                    dependencies: ["i_73", "h_79"]
                },
                k: { 
                    fieldId: "k_73", 
                    type: "calculated", 
                    value: "0.00",
                    section: "envelopeRadiantGains",
                    dependencies: ["d_73", "e_73", "f_73", "h_73"]
                },
                l: { 
                    fieldId: "l_73", 
                    type: "calculated", 
                    value: "0.00%",
                    section: "envelopeRadiantGains",
                    dependencies: ["k_73", "j_79"]
                },
                m: { 
                    fieldId: "m_73", 
                    type: "calculated", 
                    value: "50",
                    section: "envelopeRadiantGains",
                    dependencies: ["e_73"],
                    classes: ["reference-value"]
                },
                p: { fieldId: "p_73", type: "calculated", dependencies: ["l_12", "k_73", "i_73"] } // Column P (Cost)
            }
        },
        
        // Row 74: G.8.1 Window Area North
        "74": {
            id: "G.8.1",
            rowId: "G.8.1",
            label: "Window Area North",
            cells: {
                c: { label: "Window Area North" },
                d: { 
                    fieldId: "d_74", 
                    type: "editable", 
                    value: "81.14",
                    section: "envelopeRadiantGains",
                    classes: ["user-input", "col-medium"]
                },
                e: { 
                    fieldId: "e_74", 
                    type: "dropdown", 
                    dropdownId: "dd_e_74", 
                    value: "North",
                    section: "envelopeRadiantGains",
                    options: [
                        { value: "North", name: "North" },
                        { value: "NorthEast", name: "NorthEast" },
                        { value: "East", name: "East" },
                        { value: "SouthEast", name: "SouthEast" },
                        { value: "South", name: "South" },
                        { value: "SouthWest", name: "SouthWest" },
                        { value: "West", name: "West" },
                        { value: "NorthWest", name: "NorthWest" },
                        { value: "Average", name: "Average" },
                        { value: "Skylight", name: "Skylight" }
                    ],
                    classes: ["col-medium"]
                },
                f: { 
                    fieldId: "f_74", 
                    type: "coefficient_slider",
                    value: "0.50",
                    min: 0.20,
                    max: 0.60,
                    step: 0.05,
                    section: "envelopeRadiantGains",
                    classes: ["col-small", "slider-container"]
                },
                g: { 
                    fieldId: "g_74", 
                    type: "percentage", 
                    value: "0", 
                    min: 0, 
                    max: 100, 
                    step: 1,
                    section: "envelopeRadiantGains",
                    classes: ["col-large", "slider-container"]
                },
                h: { 
                    fieldId: "h_74", 
                    type: "percentage", 
                    value: "100", 
                    min: 0, 
                    max: 100, 
                    step: 1,
                    section: "envelopeRadiantGains",
                    classes: ["col-large", "slider-container"]
                },
                i: { 
                    fieldId: "i_74", 
                    type: "calculated", 
                    value: "106.29",
                    section: "envelopeRadiantGains",
                    dependencies: ["d_74", "e_74", "f_74", "g_74"]
                },
                j: { 
                    fieldId: "j_74", 
                    type: "calculated", 
                    value: "0.73%",
                    section: "envelopeRadiantGains",
                    dependencies: ["i_74", "h_79"]
                },
                k: { 
                    fieldId: "k_74", 
                    type: "calculated", 
                    value: "0.00",
                    section: "envelopeRadiantGains",
                    dependencies: ["d_74", "e_74", "f_74", "h_74"]
                },
                l: { 
                    fieldId: "l_74", 
                    type: "calculated", 
                    value: "0.00%",
                    section: "envelopeRadiantGains",
                    dependencies: ["k_74", "j_79"]
                },
                m: { 
                    fieldId: "m_74", 
                    type: "calculated", 
                    value: "1.31",
                    section: "envelopeRadiantGains",
                    dependencies: ["e_74"],
                    classes: ["reference-value"],
                    p: { fieldId: "p_74", type: "calculated", dependencies: ["l_12", "k_74", "i_74"] }
                }
            }
        },
        
        // Row 75: G.8.2 Window Area East
        "75": {
            id: "G.8.2",
            rowId: "G.8.2",
            label: "Window Area East",
            cells: {
                c: { label: "Window Area East" },
                d: { 
                    fieldId: "d_75", 
                    type: "editable", 
                    value: "3.83",
                    section: "envelopeRadiantGains",
                    classes: ["user-input"]
                },
                e: { 
                    fieldId: "e_75", 
                    type: "dropdown", 
                    dropdownId: "dd_e_75", 
                    value: "East",
                    section: "envelopeRadiantGains",
                    options: [
                        { value: "North", name: "North" },
                        { value: "NorthEast", name: "NorthEast" },
                        { value: "East", name: "East" },
                        { value: "SouthEast", name: "SouthEast" },
                        { value: "South", name: "South" },
                        { value: "SouthWest", name: "SouthWest" },
                        { value: "West", name: "West" },
                        { value: "NorthWest", name: "NorthWest" },
                        { value: "Average", name: "Average" },
                        { value: "Skylight", name: "Skylight" }
                    ]
                },
                f: { 
                    fieldId: "f_75", 
                    type: "coefficient_slider",
                    value: "0.50",
                    min: 0.20,
                    max: 0.60,
                    step: 0.05,
                    section: "envelopeRadiantGains",
                    classes: ["col-small", "slider-container"]
                },
                g: { 
                    fieldId: "g_75", 
                    type: "percentage", 
                    value: "0", 
                    min: 0, 
                    max: 100, 
                    step: 1,
                    section: "envelopeRadiantGains"
                },
                h: { 
                    fieldId: "h_75", 
                    type: "percentage", 
                    value: "100", 
                    min: 0, 
                    max: 100, 
                    step: 1,
                    section: "envelopeRadiantGains"
                },
                i: { 
                    fieldId: "i_75", 
                    type: "calculated", 
                    value: "294.68",
                    section: "envelopeRadiantGains",
                    dependencies: ["d_75", "e_75", "f_75", "g_75"]
                },
                j: { 
                    fieldId: "j_75", 
                    type: "calculated", 
                    value: "2.04%",
                    section: "envelopeRadiantGains",
                    dependencies: ["i_75", "h_79"]
                },
                k: { 
                    fieldId: "k_75", 
                    type: "calculated", 
                    value: "0.00",
                    section: "envelopeRadiantGains",
                    dependencies: ["d_75", "e_75", "f_75", "h_75"]
                },
                l: { 
                    fieldId: "l_75", 
                    type: "calculated", 
                    value: "0.00%",
                    section: "envelopeRadiantGains",
                    dependencies: ["k_75", "j_79"]
                },
                m: { 
                    fieldId: "m_75", 
                    type: "calculated", 
                    value: "76.94",
                    section: "envelopeRadiantGains",
                    dependencies: ["e_75"],
                    classes: ["reference-value"],
                    p: { fieldId: "p_75", type: "calculated", dependencies: ["l_12", "k_75", "i_75"] }
                }
            }
        },
        
        // Row 76: G.8.3 Window Area South
        "76": {
            id: "G.8.3",
            rowId: "G.8.3",
            label: "Window Area South",
            cells: {
                c: { label: "Window Area South" },
                d: { 
                    fieldId: "d_76", 
                    type: "editable", 
                    value: "159.00",
                    section: "envelopeRadiantGains",
                    classes: ["user-input"]
                },
                e: { 
                    fieldId: "e_76", 
                    type: "dropdown", 
                    dropdownId: "dd_e_76", 
                    value: "South",
                    section: "envelopeRadiantGains",
                    options: [
                        { value: "North", name: "North" },
                        { value: "NorthEast", name: "NorthEast" },
                        { value: "East", name: "East" },
                        { value: "SouthEast", name: "SouthEast" },
                        { value: "South", name: "South" },
                        { value: "SouthWest", name: "SouthWest" },
                        { value: "West", name: "West" },
                        { value: "NorthWest", name: "NorthWest" },
                        { value: "Average", name: "Average" },
                        { value: "Skylight", name: "Skylight" }
                    ]
                },
                f: { 
                    fieldId: "f_76", 
                    type: "coefficient_slider",
                    value: "0.50",
                    min: 0.20,
                    max: 0.60,
                    step: 0.05,
                    section: "envelopeRadiantGains",
                    classes: ["col-small", "slider-container"]
                },
                g: { 
                    fieldId: "g_76", 
                    type: "percentage", 
                    value: "0", 
                    min: 0, 
                    max: 100, 
                    step: 1,
                    section: "envelopeRadiantGains"
                },
                h: { 
                    fieldId: "h_76", 
                    type: "percentage", 
                    value: "100", 
                    min: 0, 
                    max: 100, 
                    step: 1,
                    section: "envelopeRadiantGains"
                },
                i: { 
                    fieldId: "i_76", 
                    type: "calculated", 
                    value: "11,247.66",
                    section: "envelopeRadiantGains",
                    dependencies: ["d_76", "e_76", "f_76", "g_76"]
                },
                j: { 
                    fieldId: "j_76", 
                    type: "calculated", 
                    value: "77.69%",
                    section: "envelopeRadiantGains",
                    dependencies: ["i_76", "h_79"]
                },
                k: { 
                    fieldId: "k_76", 
                    type: "calculated", 
                    value: "0.00",
                    section: "envelopeRadiantGains",
                    dependencies: ["d_76", "e_76", "f_76", "h_76"]
                },
                l: { 
                    fieldId: "l_76", 
                    type: "calculated", 
                    value: "0.00%",
                    section: "envelopeRadiantGains",
                    dependencies: ["k_76", "j_79"]
                },
                m: { 
                    fieldId: "m_76", 
                    type: "calculated", 
                    value: "70.74",
                    section: "envelopeRadiantGains",
                    dependencies: ["e_76"],
                    classes: ["reference-value"],
                    p: { fieldId: "p_76", type: "calculated", dependencies: ["l_12", "k_76", "i_76"] }
                }
            }
        },
        
        // Row 77: G.8.4 Window Area West
        "77": {
            id: "G.8.4",
            rowId: "G.8.4",
            label: "Window Area West",
            cells: {
                c: { label: "Window Area West" },
                d: { 
                    fieldId: "d_77", 
                    type: "editable", 
                    value: "100.66",
                    section: "envelopeRadiantGains",
                    classes: ["user-input"]
                },
                e: { 
                    fieldId: "e_77", 
                    type: "dropdown", 
                    dropdownId: "dd_e_77", 
                    value: "West",
                    section: "envelopeRadiantGains",
                    options: [
                        { value: "North", name: "North" },
                        { value: "NorthEast", name: "NorthEast" },
                        { value: "East", name: "East" },
                        { value: "SouthEast", name: "SouthEast" },
                        { value: "South", name: "South" },
                        { value: "SouthWest", name: "SouthWest" },
                        { value: "West", name: "West" },
                        { value: "NorthWest", name: "NorthWest" },
                        { value: "Average", name: "Average" },
                        { value: "Skylight", name: "Skylight" }
                    ]
                },
                f: { 
                    fieldId: "f_77", 
                    type: "coefficient_slider",
                    value: "0.50",
                    min: 0.20,
                    max: 0.60,
                    step: 0.05,
                    section: "envelopeRadiantGains",
                    classes: ["col-small", "slider-container"]
                },
                g: { 
                    fieldId: "g_77", 
                    type: "percentage", 
                    value: "0", 
                    min: 0, 
                    max: 100, 
                    step: 1,
                    section: "envelopeRadiantGains"
                },
                h: { 
                    fieldId: "h_77", 
                    type: "percentage", 
                    value: "90", 
                    min: 0, 
                    max: 100, 
                    step: 1,
                    section: "envelopeRadiantGains"
                },
                i: { 
                    fieldId: "i_77", 
                    type: "calculated", 
                    value: "2,603.07",
                    section: "envelopeRadiantGains",
                    dependencies: ["d_77", "e_77", "f_77", "g_77"]
                },
                j: { 
                    fieldId: "j_77", 
                    type: "calculated", 
                    value: "17.98%",
                    section: "envelopeRadiantGains",
                    dependencies: ["i_77", "h_79"]
                },
                k: { 
                    fieldId: "k_77", 
                    type: "calculated", 
                    value: "130.15",
                    section: "envelopeRadiantGains",
                    dependencies: ["d_77", "e_77", "f_77", "h_77"]
                },
                l: { 
                    fieldId: "l_77", 
                    type: "calculated", 
                    value: "100.00%",
                    section: "envelopeRadiantGains",
                    dependencies: ["k_77", "j_79"]
                },
                m: { 
                    fieldId: "m_77", 
                    type: "calculated", 
                    value: "25.86",
                    section: "envelopeRadiantGains",
                    dependencies: ["e_77"],
                    classes: ["reference-value"],
                    p: { fieldId: "p_77", type: "calculated", dependencies: ["l_12", "k_77", "i_77"] }
                }
            }
        },
        
        // Row 78: G.8.5 Skylights
        "78": {
            id: "G.8.5",
            rowId: "G.8.5",
            label: "Skylights",
            cells: {
                c: { label: "Skylights" },
                d: { 
                    fieldId: "d_78", 
                    type: "editable", 
                    value: "0.00",
                    section: "envelopeRadiantGains",
                    classes: ["user-input"]
                },
                e: { 
                    fieldId: "e_78", 
                    type: "dropdown", 
                    dropdownId: "dd_e_78", 
                    value: "Skylight",
                    section: "envelopeRadiantGains",
                    options: [
                        { value: "North", name: "North" },
                        { value: "NorthEast", name: "NorthEast" },
                        { value: "East", name: "East" },
                        { value: "SouthEast", name: "SouthEast" },
                        { value: "South", name: "South" },
                        { value: "SouthWest", name: "SouthWest" },
                        { value: "West", name: "West" },
                        { value: "NorthWest", name: "NorthWest" },
                        { value: "Average", name: "Average" },
                        { value: "Skylight", name: "Skylight" }
                    ]
                },
                f: { 
                    fieldId: "f_78", 
                    type: "coefficient_slider",
                    value: "0.50",
                    min: 0.20,
                    max: 0.60,
                    step: 0.05,
                    section: "envelopeRadiantGains",
                    classes: ["col-small", "slider-container"]
                },
                g: { 
                    fieldId: "g_78", 
                    type: "percentage", 
                    value: "0", 
                    min: 0, 
                    max: 100, 
                    step: 1,
                    section: "envelopeRadiantGains"
                },
                h: { 
                    fieldId: "h_78", 
                    type: "percentage", 
                    value: "80", 
                    min: 0, 
                    max: 100, 
                    step: 1,
                    section: "envelopeRadiantGains"
                },
                i: { 
                    fieldId: "i_78", 
                    type: "calculated", 
                    value: "0.00",
                    section: "envelopeRadiantGains",
                    dependencies: ["d_78", "e_78", "f_78", "g_78"]
                },
                j: { 
                    fieldId: "j_78", 
                    type: "calculated", 
                    value: "0.00%",
                    section: "envelopeRadiantGains",
                    dependencies: ["i_78", "h_79"]
                },
                k: { 
                    fieldId: "k_78", 
                    type: "calculated", 
                    value: "0.00",
                    section: "envelopeRadiantGains",
                    dependencies: ["d_78", "e_78", "f_78", "h_78"]
                },
                l: { 
                    fieldId: "l_78", 
                    type: "calculated", 
                    value: "0.00%",
                    section: "envelopeRadiantGains",
                    dependencies: ["k_78", "j_79"]
                },
                m: { 
                    fieldId: "m_78", 
                    type: "calculated", 
                    value: "75",
                    section: "envelopeRadiantGains",
                    dependencies: ["e_78"],
                    classes: ["reference-value"],
                    p: { fieldId: "p_78", type: "calculated", dependencies: ["l_12", "k_78", "i_78"] }
                }
            }
        },
        
        // Row 79: G.1 Subtotal Solar Gains
        "79": {
            id: "G.1",
            rowId: "G.1",
            label: "Subtotal Solar Gains",
            cells: {
                c: { label: "Subtotal Solar Gains" },
                d: { content: "" }, // Empty cell
                e: { content: "" }, // Empty cell
                f: { content: "" }, // Empty cell
                g: { content: "" }, // Empty cell
                h: { content: "" }, // Empty cell
                i: { 
                    fieldId: "i_79", 
                    type: "calculated", 
                    value: "14,626.70",
                    section: "radiantGains",
                    dependencies: ["i_73", "i_74", "i_75", "i_76", "i_77", "i_78"]
                },
                j: { 
                    fieldId: "j_79", 
                    type: "calculated", 
                    value: "100%",
                    section: "radiantGains"
                },
                k: { 
                    fieldId: "k_79", 
                    type: "calculated", 
                    value: "130.15",
                    section: "radiantGains",
                    dependencies: ["k_73", "k_74", "k_75", "k_76", "k_77", "k_78"]
                },
                l: { 
                    fieldId: "l_79", 
                    type: "calculated", 
                    value: "100%",
                    section: "radiantGains"
                },
                m: { 
                    fieldId: "m_79", 
                    type: "calculated", 
                    value: "14,626.70",
                    section: "radiantGains",
                    dependencies: ["i_79", "j_79", "k_79", "l_79"]
                },
                p: { 
                    fieldId: "p_79", 
                    type: "calculated", 
                    value: "14,626.70",
                    section: "radiantGains",
                    dependencies: ["i_79", "j_79", "k_79", "l_79"]
                }
            }
        },
        
        // Row 80: G.2 Gains Utilization Factor (n-Factor)
        "80": {
            id: "G.2",
            rowId: "G.2",
            label: "Gains Utilization Factor (n-Factor)",
            cells: {
                c: { label: "Gains Utilization Factor (n-Factor)" },
                d: { 
                    fieldId: "d_80", 
                    type: "dropdown", 
                    dropdownId: "dd_d_80", 
                    value: "NRC 40%",
                    section: "radiantGains",
                    options: [
                        { value: "NRC 0%", name: "NRC 0%" },
                        { value: "NRC 40%", name: "NRC 40%" },
                        { value: "NRC 50%", name: "NRC 50%" },
                        { value: "NRC 60%", name: "NRC 60%" },
                        { value: "PH Method", name: "PH Method" }
                    ]
                },
                e: { 
                    fieldId: "e_80", 
                    type: "calculated", 
                    value: "114,698.37",
                    section: "radiantGains",
                    dependencies: ["h_79", "i_71"]
                },
                f: { content: "Total Gains" },
                g: { 
                    fieldId: "g_80", 
                    type: "calculated", 
                    value: "40.00%",
                    section: "radiantGains",
                    dependencies: ["d_80"]
                },
                h: { content: "" }, // Empty cell
                i: { 
                    fieldId: "i_80", 
                    type: "calculated", 
                    value: "45,879.35",
                    section: "radiantGains",
                    dependencies: ["e_80", "g_80"]
                },
                j: { 
                    content: "G.3 nGains", 
                    classes: ["tooltip-cell"],
                    "data-tooltip": "G.3 Net Usable Gains by Method Selected"
                }
            }
        },
        
        // Row 81: G.4 Net Usable Heating Season Gains
        "81": {
            id: "G.4",
            rowId: "G.4",
            label: "Net Usable Heating Season Gains",
            cells: {
                c: { label: "Net Usable Heating Season Gains" },
                d: { 
                    content: "PH Method",
                    classes: ["reference-value"] // Use reference style (typically red text in the Excel)
                },
                e: { 
                    fieldId: "e_81", 
                    type: "calculated", 
                    value: "114,698.37",
                    section: "radiantGains",
                    dependencies: ["e_80"],
                    classes: ["reference-value"] // Apply reference styling
                },
                f: { 
                    content: "Total Gains", 
                    classes: ["reference-value"]
                },
                g: { 
                    fieldId: "g_81", 
                    type: "calculated", 
                    value: "94.43%",
                    section: "radiantGains",
                    classes: ["reference-value"] // Apply reference styling
                },
                h: { content: "", classes: ["reference-value"] }, // Empty cell
                i: { 
                    fieldId: "i_81", 
                    type: "calculated", 
                    value: "108,307.67",
                    section: "radiantGains",
                    dependencies: ["e_81", "g_81"],
                    classes: ["reference-value"] // Apply reference styling
                },
                j: { 
                    content: "G.4 nGains", 
                    classes: ["reference-value", "tooltip-cell"],
                    "data-tooltip": "Net Usable Gains by PHPP Method (Reference)"
                }
            }
        },
        
        // Row 82: G.5 Net UN-usable Htg. Gains
        "82": {
            id: "G.5",
            rowId: "G.5",
            label: "Net UN-usable Htg. Gains",
            cells: {
                c: { label: "Net UN-usable Htg. Gains" },
                i: { 
                    fieldId: "i_82", 
                    type: "calculated", 
                    value: "68,819.02",
                    section: "radiantGains",
                    dependencies: ["h_80", "k_80"]
                }
            }
        }
    };
    
    // Define configuration for orientation rows (similar to Section 11)
    const orientationConfig = [73, 74, 75, 76, 77, 78];
    
    // T-cell comparison configuration for Section 10
    const baselineValues = {
        80: { type: 'method', value: 'NRC 40%' }  // Net Useable Gains Method - only this needs reference comparison
    };
    
    //==========================================================================
    // ACCESSOR METHODS TO EXTRACT FIELDS AND LAYOUT
    //==========================================================================
    
    /**
     * Extract field definitions from the integrated layout
     * This method is required for compatibility with the FieldManager
     */
    function getFields() {
        try {
            const fields = {};
            
            // Extract field definitions from all rows except the header
            Object.entries(sectionRows).forEach(([rowKey, row]) => {
                if (rowKey === "header") return; // Skip the header row
                if (!row.cells) return;
                
                // Process each cell in the row
                Object.entries(row.cells).forEach(([colKey, cell]) => {
                    if (cell.fieldId && cell.type) {
                        // Create field definition with all relevant properties
                        fields[cell.fieldId] = {
                            type: cell.type,
                            label: cell.label || row.label,
                            defaultValue: cell.value || "",
                            section: cell.section || "radiantGains"
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
        } catch (error) {
            // console.error("Error in getFields:", error);
            return {}; // Return empty object to avoid breaking the application
        }
    }
    
    /**
     * Extract dropdown options from the integrated layout
     * Required for backward compatibility
     */
    function getDropdownOptions() {
        try {
            const options = {};
            
            // Extract dropdown options from all cells with dropdownId
            Object.values(sectionRows).forEach(row => {
                if (!row.cells) return;
                
                Object.values(row.cells).forEach(cell => {
                    if (cell.dropdownId && cell.options) {
                        options[cell.dropdownId] = cell.options;
                    }
                });
            });
            
            return options;
        } catch (error) {
            // console.error("Error in getDropdownOptions:", error);
            return {}; // Return empty object to avoid breaking the application
        }
    }
    
    /**
     * Generate layout from integrated row definitions
     * This converts our compact definition to the format expected by the renderer
     */
    function getLayout() {
        try {
            // IMPORTANT: To ensure the header appears first, we process the rows in 
            // a specific order: header first, then all other rows
            
            // Start with an empty array for rows
            const layoutRows = [];
            
            // First add the header row if it exists
            if (sectionRows["header"]) {
                layoutRows.push(createLayoutRow(sectionRows["header"]));
            }
            
            // Then add all other rows in their original order, excluding the header
            Object.entries(sectionRows).forEach(([key, row]) => {
                if (key !== "header") {
                    layoutRows.push(createLayoutRow(row));
                }
            });
            
            return { rows: layoutRows };
        } catch (error) {
            // console.error("Error in getLayout:", error);
            return { rows: [] }; // Return empty rows to avoid breaking the application
        }
    }
    
    /**
     * Helper function to convert a row definition to the layout format
     * This function handles the conversion of column C cells for proper row labels
     */
    function createLayoutRow(row) {
        // Create standard row structure
        const rowDef = {
            id: row.id,
            cells: [
                {}, // Empty column A
                {}  // ID column B (auto-populated)
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
                }
                
                // Remove field-specific properties that aren't needed for rendering
                // BUT preserve the classes property which is critical for styling
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
    // EVENT HANDLING AND CALCULATIONS
    //==========================================================================
    
    /**
     * Update reference indicators for all rows
     */
    function updateAllReferenceIndicators() {
        try {
            // Only update reference indicator for method row (80)
            // Rows 73-78 don't need reference comparison - they show gain factors in Column M
            updateReferenceIndicators(80);
        } catch (error) {
            console.error('Error updating reference indicators:', error);
        }
    }
    
    /**
     * Update reference indicators (M and N columns) for a specific row
     * @param {number} rowId - The row number to update
     */
    function updateReferenceIndicators(rowId) {
        const baseline = baselineValues[rowId];
        if (!baseline) return;
        
        const mFieldId = `m_${rowId}`;
        const nFieldId = `n_${rowId}`;
        let isGood = true;
        
        try {
            if (baseline.type === 'method') {
                // For method comparison (exact match)
                const currentMethod = getFieldValue(`d_${rowId}`);
                isGood = (currentMethod === baseline.value);
                
                // For method, show the reference method in Column M
                const mElement = document.querySelector(`[data-field-id="${mFieldId}"]`);
                if (mElement) mElement.textContent = baseline.value;
            }
            
            // Update Column N (Pass/Fail)
            const nElement = document.querySelector(`[data-field-id="${nFieldId}"]`);
            if (nElement) {
                nElement.textContent = isGood ? "✓" : "✗";
                setElementClass(nFieldId, isGood ? 'checkmark' : 'warning');
            }
        } catch (error) {
            console.error(`Error updating reference indicators for row ${rowId}:`, error);
        }
    }

    /**
     * Calculate all values for this section
     * Includes orientation gains (73-78), subtotals (79), and utilization factors (80-82)
     */
    function calculateAll() {
        // Add recursion protection for Section 10
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
    
    /**
     * REFERENCE MODEL ENGINE: Calculate all values using Reference state
     */
    function calculateReferenceModel() {
        // console.log("[Section10] Running Reference Model calculations...");
        
        try {
            // Calculate individual orientation rows using reference values
            const orientationResults = {};
            orientationConfig.forEach(rowId => {
                orientationResults[rowId] = calculateOrientationGains(rowId.toString(), true); // true = isReferenceCalculation
            });
            
            // Calculate subtotals using reference results
            const subtotalResults = calculateSubtotals(true); // true = isReferenceCalculation
            
            // Calculate utilization factors using reference values
            calculateUtilizationFactors(true); // true = isReferenceCalculation
            
            // Store reference results using V2 dual-engine setter
                orientationConfig.forEach(rowId => {
                    const results = orientationResults[rowId] || { heatingGains: 0, coolingGains: 0 };
                setDualEngineValue(`i_${rowId}`, results.heatingGains, 'number-2dp-comma');
                setDualEngineValue(`k_${rowId}`, results.coolingGains, 'number-2dp-comma');
                });
                
                // Store subtotal reference values
            setDualEngineValue('i_79', subtotalResults.heatingGains, 'number-2dp-comma');
            setDualEngineValue('k_79', subtotalResults.coolingGains, 'number-2dp-comma');
            
            // console.log("[Section10] Reference Model values stored");
        } catch (error) {
            console.error('[Section10] Error in Reference Model calculations:', error);
        }
    }
    
    /**
     * APPLICATION MODEL ENGINE: Calculate all values using Application state
     */
    function calculateApplicationModel() {
        // console.log("[Section10] Running Application Model calculations...");
        
        try {
            // Calculate individual orientation rows
            orientationConfig.forEach(rowId => {
                calculateOrientationGains(rowId.toString(), false); // false = Application calculation
            });
            
            // Calculate subtotals
            calculateSubtotals(false); // false = Application calculation
            
            // Calculate utilization factors
            calculateUtilizationFactors(false); // false = Application calculation
            
            // Update reference indicators for all rows
            updateAllReferenceIndicators();
        } catch (error) {
            console.error('[Section10] Error in Application Model calculations:', error);
        }

        // Application Model calculations completed
    }
    
    /**
     * Calculate solar gains for a specific orientation
     * @param {string} rowId - Row ID for the element (e.g., "73" for doors)
     * @param {boolean} isReferenceCalculation - Whether to use reference values
     */
    function calculateOrientationGains(rowId, isReferenceCalculation = false) {
        try {
            // Get area value (always from application state for UI purposes)
            const area = window.TEUI.parseNumeric(getFieldValue(`d_${rowId}`));
            
            // Get input values based on calculation type using V2 helper functions
            let orientation, shgc, winterShadingDecimal, summerShadingDecimal;
            
            if (isReferenceCalculation) {
                // For Reference calculations, use reference values
                orientation = getRefFieldValue(`e_${rowId}`);
                shgc = window.TEUI.parseNumeric(getRefFieldValue(`f_${rowId}`));
                winterShadingDecimal = window.TEUI.parseNumeric(getRefFieldValue(`g_${rowId}`), 0) / 100;
                summerShadingDecimal = window.TEUI.parseNumeric(getRefFieldValue(`h_${rowId}`), 100) / 100;
            } else {
                // For Application calculations, use application values
                orientation = getAppFieldValue(`e_${rowId}`);
                shgc = window.TEUI.parseNumeric(getAppFieldValue(`f_${rowId}`));
                winterShadingDecimal = window.TEUI.parseNumeric(getAppFieldValue(`g_${rowId}`), 0) / 100;
                summerShadingDecimal = window.TEUI.parseNumeric(getAppFieldValue(`h_${rowId}`), 100) / 100;
            }
            
            const climateZone = getNumericValue("j_19") || 6.0; // Default to zone 6 if not available
            
            const gainFactor = calculateGainFactor(orientation, climateZone); // This is M73 (Gain Factor based on SHGC=0.5)
            
            // Only update display for Application calculations
            if (!isReferenceCalculation) {
                setCalculatedValue(`m_${rowId}`, gainFactor); // Pass raw value, not formatted string
            }
            
            // SHGC Normalization Factor: Adjusts gains based on actual SHGC relative to the baseline SHGC of 0.5 used for M73 values.
            const shgcNormalizationFactor = shgc / 0.5; 
            
            // Calculate heating season solar gains
            const heatingGains = area * gainFactor * shgcNormalizationFactor * (1 - winterShadingDecimal);
            
            // Calculate cooling season solar gains
            // The coolingModifierFactor accounts for different load factors in summer (e.g. skylights more, others less)
            const coolingModifierFactor = (orientation === 'Skylight') ? 1.25 : 0.5;
            const coolingGains = area * gainFactor * shgcNormalizationFactor * (1 - summerShadingDecimal) * coolingModifierFactor;
            
            const cost = getNumericValue('l_12') * (coolingGains - heatingGains);
            
            // For Reference calculations, return the calculated values
            if (isReferenceCalculation) {
                return {
                    heatingGains,
                    coolingGains,
                    gainFactor
                };
            }
            
            // For Application calculations, update the DOM
            setCalculatedValue(`i_${rowId}`, heatingGains);
            setCalculatedValue(`k_${rowId}`, coolingGains);
            setCalculatedValue(`p_${rowId}`, cost, 'currency');
            
            return {
                heatingGains,
                coolingGains,
                gainFactor
            };
        } catch (error) {
            console.error(`Error calculating orientation gains for row ${rowId}:`, error);
            return { heatingGains: 0, coolingGains: 0, gainFactor: 0 };
        }
    }
    
    /**
     * Calculate subtotals for solar gains
     * @param {boolean} isReferenceCalculation - Whether to use reference values
     */
    function calculateSubtotals(isReferenceCalculation = false) {
        try {
            // Calculate total heating gains
            let heatingGains, coolingGains;
            
            if (isReferenceCalculation) {
                // For Reference calculations, use ref_ prefixed values
                heatingGains = [
                    window.TEUI?.StateManager?.getValue("ref_i_73") || 0,
                    window.TEUI?.StateManager?.getValue("ref_i_74") || 0,
                    window.TEUI?.StateManager?.getValue("ref_i_75") || 0,
                    window.TEUI?.StateManager?.getValue("ref_i_76") || 0,
                    window.TEUI?.StateManager?.getValue("ref_i_77") || 0,
                    window.TEUI?.StateManager?.getValue("ref_i_78") || 0
                ].reduce((sum, val) => sum + parseFloat(val || 0), 0);
                
                coolingGains = [
                    window.TEUI?.StateManager?.getValue("ref_k_73") || 0,
                    window.TEUI?.StateManager?.getValue("ref_k_74") || 0,
                    window.TEUI?.StateManager?.getValue("ref_k_75") || 0,
                    window.TEUI?.StateManager?.getValue("ref_k_76") || 0,
                    window.TEUI?.StateManager?.getValue("ref_k_77") || 0,
                    window.TEUI?.StateManager?.getValue("ref_k_78") || 0
                ].reduce((sum, val) => sum + parseFloat(val || 0), 0);
            } else {
                // For Target calculations, use regular values
                heatingGains = [
                    getNumericValue("i_73"), // Doors
                    getNumericValue("i_74"), // North
                    getNumericValue("i_75"), // East
                    getNumericValue("i_76"), // South
                    getNumericValue("i_77"), // West
                    getNumericValue("i_78")  // Skylights
                ].reduce((sum, val) => sum + val, 0);
                
                coolingGains = [
                    getNumericValue("k_73"), // Doors
                    getNumericValue("k_74"), // North
                    getNumericValue("k_75"), // East
                    getNumericValue("k_76"), // South
                    getNumericValue("k_77"), // West
                    getNumericValue("k_78")  // Skylights
                ].reduce((sum, val) => sum + val, 0);
            }
            
            // For Reference calculations, just return the values
            if (isReferenceCalculation) {
                return {
                    heatingGains,
                    coolingGains
                };
            }
            
            // For Target calculations, update the DOM
            setCalculatedValue('i_79', heatingGains, 'number');
            setCalculatedValue('k_79', coolingGains, 'number');
            setCalculatedValue('j_79', heatingGains > 0 ? 1 : 0, 'percent');
            setCalculatedValue('l_79', coolingGains > 0 ? 1 : 0, 'percent');
            
            // Update percentages (Columns J and L) for rows 73-78
            for (let i = 73; i <= 78; i++) {
                const rowStr = i.toString(); // Added for clarity
                const heatingGain = getNumericValue(`i_${rowStr}`);
                const coolingGain = getNumericValue(`k_${rowStr}`);
                // Handle division by zero explicitly
                const heatingPercentDecimal = heatingGains !== 0 ? (heatingGain / heatingGains) : 0;
                const coolingPercentDecimal = coolingGains !== 0 ? (coolingGain / coolingGains) : 0;

                const jFieldId = `j_${rowStr}`;
                const lFieldId = `l_${rowStr}`;

                setCalculatedValue(jFieldId, heatingPercentDecimal, 'percent');
                setCalculatedValue(lFieldId, coolingPercentDecimal, 'percent');

                // Apply Indicator Class & Left Alignment (similar to Section 11)
                const gainIndicatorClasses = ['gain-high', 'gain-medium', 'gain-low'];
                let htgGainClass = '';
                const htgPercent = heatingPercentDecimal * 100; // Use actual value for thresholds
                // Heating Gain: Higher is better. Thresholds: Green >= 33, Yellow >= 10, Red < 10
                if (htgPercent >= 33) { htgGainClass = 'gain-high'; }      // Green
                else if (htgPercent >= 10) { htgGainClass = 'gain-medium'; } // Yellow
                else if (htgPercent >= 0) { htgGainClass = 'gain-low'; }       // Red
                setIndicatorClass(jFieldId, htgGainClass, gainIndicatorClasses);

                let coolGainClass = '';
                const coolPercentValue = coolingPercentDecimal * 100; // Use actual value
                // Cooling Gain: Higher is worse. Thresholds: Red >= 15, Yellow >= 5, Green < 5
                if (coolPercentValue >= 15) { coolGainClass = 'gain-low'; }      // Red (High contribution = Bad)
                else if (coolPercentValue >= 5) { coolGainClass = 'gain-medium'; } // Yellow
                else if (coolPercentValue >= 0) { coolGainClass = 'gain-high'; }      // Green (Low contribution = Good)
                setIndicatorClass(lFieldId, coolGainClass, gainIndicatorClasses);

                const jElement = document.querySelector(`[data-field-id="${jFieldId}"]`);
                if (jElement) jElement.classList.add('text-left-indicator');
                const lElement = document.querySelector(`[data-field-id="${lFieldId}"]`);
                if (lElement) lElement.classList.add('text-left-indicator');
            }
            
            return {
                heatingGains,
                coolingGains
            };
        } catch (error) {
            console.error('Error calculating subtotals:', error);
            return { heatingGains: 0, coolingGains: 0 };
        }
    }
    
    /**
     * Calculate utilization factors
     * @param {boolean} isReferenceCalculation - Whether to use reference values
     */
    function calculateUtilizationFactors(isReferenceCalculation = false) {
        try {
            // Get total solar gains
            let solarGains;
            if (isReferenceCalculation) {
                solarGains = parseFloat(window.TEUI?.StateManager?.getValue("ref_i_79") || 0);
            } else {
                solarGains = getNumericValue("i_79");
            }
            
            // Get internal gains from Section 9 if available
            let internalGains;
            if (isReferenceCalculation) {
                internalGains = parseFloat(window.TEUI?.StateManager?.getValue("ref_i_71") || 0);
            } else {
                internalGains = getNumericValue("i_71") || 0;
            }
            
            // Calculate total gains (solar + internal)
            const totalGains = solarGains + internalGains;
            
            // For Reference calculations, don't update DOM for e_80/e_81
            if (!isReferenceCalculation) {
                setCalculatedValue("e_80", totalGains, 'number');
                setCalculatedValue("e_81", totalGains, 'number');
            }
            
            //=====================================================================
            // PART 1: Calculate utilization factor based on selected method in row 80
            //=====================================================================
            
            // Get utilization method
            let utilizationMethod;
            if (isReferenceCalculation) {
                // For Reference calculations, check if standard specifies a method
                utilizationMethod = window.TEUI?.StateManager?.getReferenceValue("d_80") || "NRC 40%";
            } else {
                utilizationMethod = getFieldValue("d_80") || "NRC 40%";
            }
            
            let utilizationFactor = 0.4; // Default to 40%
            
            // Implementation of the G80 formula based on dropdown selection
            // Options are: "NRC 0%", "NRC 40%", "NRC 50%", "NRC 60%", "PH Method"
            if (utilizationMethod === "NRC 0%") {
                utilizationFactor = 0;
            } else if (utilizationMethod === "NRC 40%") {
                utilizationFactor = 0.4;
            } else if (utilizationMethod === "NRC 50%") {
                utilizationFactor = 0.5;
            } else if (utilizationMethod === "NRC 60%") {
                utilizationFactor = 0.6;
            } else if (utilizationMethod === "PH Method") {
                // Formula: =(1-((i_79+i_71)/(i_97+i_103+m_121+i_98))^5)/(1-((i_79+i_71)/(i_97+i_103+m_121+i_98))^6)
                
                // Get loss values from other sections (with fallbacks)
                let i97, i103, m121, i98;
                if (isReferenceCalculation) {
                    i97 = parseFloat(window.TEUI?.StateManager?.getValue("ref_i_97") || 0);
                    i103 = parseFloat(window.TEUI?.StateManager?.getValue("ref_i_103") || 0);
                    m121 = parseFloat(window.TEUI?.StateManager?.getValue("ref_m_121") || 0);
                    i98 = parseFloat(window.TEUI?.StateManager?.getValue("ref_i_98") || 0);
                } else {
                    i97 = getNumericValue("i_97") || 0;
                    i103 = getNumericValue("i_103") || 0;
                    m121 = getNumericValue("m_121") || 0;
                    i98 = getNumericValue("i_98") || 0;
                }
                
                const numerator = totalGains; // i_79 + i_71
                const denominator = i97 + i103 + m121 + i98; // Total Losses
                
                if (denominator > 0) {
                    const gamma = numerator / denominator;
                    if (Math.abs(gamma - 1) < 1e-9) { // Handle gamma close to 1
                        utilizationFactor = 5 / 6; // a/(a+1)
                    } else {
                        const a = 5; 
                        const gamma_a = Math.pow(gamma, a);
                        const gamma_a_plus_1 = Math.pow(gamma, a + 1);
                        utilizationFactor = (1 - gamma_a) / (1 - gamma_a_plus_1);
                        utilizationFactor = Math.max(0, Math.min(1, utilizationFactor));
                    }
                } else {
                    utilizationFactor = (numerator > 0) ? 1 : 0; // If no losses, use 100% gain or 0%
                }
            }
            
            // Calculate usable gains based on selected method (i_80)
            const usableGains = totalGains * utilizationFactor;
            
            // For Reference calculations, store values with ref_ prefix
            if (isReferenceCalculation) {
                if (window.TEUI?.StateManager) {
                    window.TEUI.StateManager.setValue("ref_e_80", totalGains.toString(), 'calculated');
                    window.TEUI.StateManager.setValue("ref_g_80", utilizationFactor.toString(), 'calculated');
                    window.TEUI.StateManager.setValue("ref_i_80", usableGains.toString(), 'calculated');
                }
                return;
            }
            
            // For Target calculations, update the DOM
            setCalculatedValue("g_80", utilizationFactor, 'percent');
            setCalculatedValue("i_80", usableGains, 'number');
            
            //=====================================================================
            // PART 2: Calculate PHPP method as reference in row 81 (always)
            //=====================================================================
            
            // Get loss values again for potentially different reference calc if needed (using same for now)
            const i97Reference = getNumericValue("i_97") || 0;
            const i103Reference = getNumericValue("i_103") || 0;
            const m121Reference = getNumericValue("m_121") || 0;
            const i98Reference = getNumericValue("i_98") || 0;
            
            const numeratorReference = totalGains;
            const denominatorReference = i97Reference + i103Reference + m121Reference + i98Reference;
            
            let phUtilizationFactor = 0.9; // Default fallback if denom is 0
            
            if (denominatorReference > 0) {
                const gammaReference = numeratorReference / denominatorReference;
                if (Math.abs(gammaReference - 1) < 1e-9) {
                    phUtilizationFactor = 5 / 6;
                } else {
                    const a = 5;
                    const gamma_a = Math.pow(gammaReference, a);
                    const gamma_a_plus_1 = Math.pow(gammaReference, a + 1);
                    phUtilizationFactor = (1 - gamma_a) / (1 - gamma_a_plus_1);
                    phUtilizationFactor = Math.max(0, Math.min(1, phUtilizationFactor));
                }
            } else {
                phUtilizationFactor = (numeratorReference > 0) ? 1 : 0;
            } 
            
            // Update reference values in row 81 (always PHPP method)
            setCalculatedValue("g_81", phUtilizationFactor, 'percent');
            const phReferenceGains = totalGains * phUtilizationFactor;
            setCalculatedValue("i_81", phReferenceGains, 'number');
            
            //=====================================================================
            // PART 3: Calculate unusable gains based on selected method (row 80)
            //=====================================================================
            
            const unusedGains = totalGains - usableGains;
            setCalculatedValue("i_82", unusedGains, 'number');
        } catch (error) {
            console.error('Error calculating utilization factors:', error);
            // Set error values or defaults
            if (!isReferenceCalculation) {
                setCalculatedValue("e_80", 0); setCalculatedValue("g_80", 0, 'percent'); setCalculatedValue("i_80", 0);
                setCalculatedValue("e_81", 0); setCalculatedValue("g_81", 0, 'percent'); setCalculatedValue("i_81", 0);
                setCalculatedValue("i_82", 0);
            }
        }
    }
    
    /**
     * Calculate gain factor based on orientation and climate zone
     * @param {string} orientation - Window orientation (North, South, etc.)
     * @param {number} climateZone - Climate zone number (default 6)
     * @returns {number} Gain factor in kWh/m²/yr
     */
    function calculateGainFactor(orientation, climateZone = 6) {
        try {
            // Handle Skylight explicitly first
            if (orientation === "Skylight") {
                return climateZone > 6 ? 25.0 : 75.0;
            }

            // Define orientations for MATCH and values for CHOOSE
            const orientations = ["North", "NorthEast", "East", "SouthEast", "South", "SouthWest", "West", "NorthWest"];
            // CHOOSE values including the default (9th value for IFERROR)
            const northernValues = [0.19, 0.89, 2.09, 6.01, 24.76, 82.25, 64.37, 18.14, 24.84]; 
            const southernValues = [1.31, 34.69, 76.94, 86.59, 70.74, 60.4, 25.86, 2.88, 50.00]; 
            
            // Find index corresponding to MATCH
            let orientationIndex = orientations.indexOf(orientation);

            // Select the correct value array based on climate zone
            const values = climateZone > 6 ? northernValues : southernValues;
            
            // If index is -1 (MATCH failed -> IFERROR), use the default index (8 for 9th value)
            // Otherwise, use the found index (0-7)
            const valueIndex = (orientationIndex === -1) ? 8 : orientationIndex;
            
            return values[valueIndex];
        } catch (error) {
            console.error('Error calculating gain factor:', error);
            return 50.0; // Fallback default value in case of unexpected error
        }
    }
    
    /**
     * Initialize event handlers for this section
     */
    function initializeEventHandlers() {
        const sectionElement = document.getElementById('envelopeRadiantGains');
        if (!sectionElement) return;
        
        // Add handlers for editable fields
        const editableFields = sectionElement.querySelectorAll('.user-input, [contenteditable="true"]');
        editableFields.forEach(field => {
            // Make text fields editable
            if (field.classList.contains('user-input')) {
                field.setAttribute('contenteditable', 'true');
            }
            
            // Handle blur event for text fields
            field.addEventListener('blur', handleFieldBlur);
            
            // Handle Enter key
            field.addEventListener('keydown', function(e) {
                if (e.key === 'Enter') {
                    e.preventDefault(); // Prevent adding a newline
                    this.blur(); // Remove focus to trigger the blur event
                }
            });
        });
        
        // Add dropdown change event handlers
        const dropdowns = sectionElement.querySelectorAll('select');
        dropdowns.forEach(dropdown => {
            dropdown.addEventListener('change', function() {
                const fieldId = this.getAttribute('data-field-id');
                if (!fieldId) return;
                
                // Store the value in StateManager
                    if (window.TEUI?.StateManager?.setValue) {
                    window.TEUI.StateManager.setValue(fieldId, this.value, 'user-modified');
                }
                
                // Recalculate immediately (fixed setTimeout performance violation)
                if (!window.sectionCalculationInProgress) {
                    calculateAll();
                }
            });
        });
        
        // Add slider change handlers
        const sliders = sectionElement.querySelectorAll('input[type="range"]');
        sliders.forEach(slider => {
            slider.addEventListener('input', function() {
                const fieldId = this.getAttribute('data-field-id');
                if (!fieldId) return;
                
                // Store the value in StateManager
                if (window.TEUI?.StateManager?.setValue) {
                    window.TEUI.StateManager.setValue(fieldId, this.value, 'user-modified');
                }
                
                // Update the display value
                const displayElement = document.querySelector(`[data-display-for="${fieldId}"]`);
                if (displayElement) {
                    displayElement.textContent = `${this.value}%`;
                }
                
                // Recalculate immediately (fixed setTimeout performance violation)
                if (!window.sectionCalculationInProgress) {
                    calculateAll();
                }
            });
        });
    }
    
    /**
     * Set up default values for dropdowns in this section
     */
    function setupDropdownDefaults() {
        try {
            // Find all dropdowns in this section
            const dropdowns = document.querySelectorAll('[data-section="envelopeRadiantGains"] select');
            
            // For each dropdown, set default value based on the field definition
            dropdowns.forEach(dropdown => {
                const fieldId = dropdown.getAttribute('data-field-id');
                if (!fieldId) return;
                
                // Get default value from state manager if available
                const defaultValue = window.TEUI?.StateManager?.getValue(fieldId);
                if (defaultValue) {
                    dropdown.value = defaultValue;
                }
            });
            
            // console.log('Radiant Gains dropdown defaults initialized');
        } catch (error) {
            // console.error('Error in setupDropdownDefaults:', error);
        }
    }
    
    /**
     * Register values with the StateManager
     */
    function registerWithStateManager() {
        try {
            if (!window.TEUI?.StateManager) {
                // console.warn('StateManager not available for Radiant Gains registration');
                return;
            }
            
            // Register key values with the state manager
            // This ensures they're available to other sections
            const orientations = ['Average', 'North', 'East', 'South', 'West', 'Skylight'];
            orientations.forEach(orientation => {
                // Register orientation-specific fields if needed
            });
            
            // console.log('Radiant Gains values registered with StateManager');
        } catch (error) {
            // console.error('Error in registerWithStateManager:', error);
        }
    }
    
    /**
     * Add listeners for StateManager changes
     */
    function addStateManagerListeners() {
        try {
            if (!window.TEUI?.StateManager) {
                // console.warn('StateManager not available for Radiant Gains listeners');
                return;
            }
            
            // Add listeners for key fields that might change from other sections
            // Example: Listen for climate zone changes
            window.TEUI.StateManager.addListener('j_19', function() {
                // console.log('Climate zone changed, recalculating solar gains');
                calculateAll();
            });
            
            // Add listener for internal gains (i_71)
            window.TEUI.StateManager.addListener('i_71', calculateUtilizationFactors);
            // Add listeners for loss factors used in PH Method
            ['i_97', 'i_103', 'm_121', 'i_98'].forEach(lossField => {
                window.TEUI.StateManager.addListener(lossField, calculateUtilizationFactors);
            });
            
            // *** IT-DEPENDS MIGRATION FOR SECTION 10 ***
            if (!window.TEUI?.StateManager?.registerCalculation) {
                console.warn('[S10] StateManager.registerCalculation not available - skipping IT-DEPENDS setup');
                return;
            }
            
            const sm = window.TEUI.StateManager;
            console.log('[S10] 🚀 Starting IT-DEPENDS migration for Section 10 (Radiant Gains)...');
            
            // *** PHASE 1: ORIENTATION GAIN FACTORS (M columns) ***
            // Register calculation for gain factors (m_73 through m_78)
            const orientationRows = [73, 74, 75, 76, 77, 78];
            orientationRows.forEach(rowId => {
                sm.registerCalculation(`m_${rowId}`, function() {
                    const orientation = getFieldValue(`e_${rowId}`) || 'Average';
                    const climateZone = window.TEUI.parseNumeric(getFieldValue('j_19')) || 6.0;
                    return calculateGainFactor(orientation, climateZone);
                }, `Section 10: Gain Factor for row ${rowId} (kWh/m²/yr)`);
            });
            
            // *** PHASE 2: HEATING GAINS (I columns) ***
            // Register calculations for heating gains (i_73 through i_78)
            orientationRows.forEach(rowId => {
                sm.registerCalculation(`i_${rowId}`, function() {
                    const area = window.TEUI.parseNumeric(getFieldValue(`d_${rowId}`)) || 0;
                    const orientation = getFieldValue(`e_${rowId}`) || 'Average';
                    const shgc = window.TEUI.parseNumeric(getFieldValue(`f_${rowId}`)) || 0.5;
                    const winterShadingDecimal = (window.TEUI.parseNumeric(getFieldValue(`g_${rowId}`)) || 0) / 100;
                    
                    // Get gain factor (this will be calculated by m_XX dependency)
                    const gainFactor = window.TEUI.parseNumeric(getFieldValue(`m_${rowId}`)) || 0;
                    
                    // SHGC Normalization Factor: Adjusts gains based on actual SHGC relative to baseline 0.5
                    const shgcNormalizationFactor = shgc / 0.5;
                    
                    // Calculate heating season solar gains
                    const heatingGains = area * gainFactor * shgcNormalizationFactor * (1 - winterShadingDecimal);
                    
                    return heatingGains;
                }, `Section 10: Heating Gains for row ${rowId} (kWh/yr)`);
            });
            
            // *** PHASE 3: COOLING GAINS (K columns) ***
            // Register calculations for cooling gains (k_73 through k_78)
            orientationRows.forEach(rowId => {
                sm.registerCalculation(`k_${rowId}`, function() {
                    const area = window.TEUI.parseNumeric(getFieldValue(`d_${rowId}`)) || 0;
                    const orientation = getFieldValue(`e_${rowId}`) || 'Average';
                    const shgc = window.TEUI.parseNumeric(getFieldValue(`f_${rowId}`)) || 0.5;
                    const summerShadingDecimal = (window.TEUI.parseNumeric(getFieldValue(`h_${rowId}`)) || 100) / 100;
                    
                    // Get gain factor (this will be calculated by m_XX dependency)
                    const gainFactor = window.TEUI.parseNumeric(getFieldValue(`m_${rowId}`)) || 0;
                    
                    // SHGC Normalization Factor
                    const shgcNormalizationFactor = shgc / 0.5;
                    
                    // Cooling modifier factor (skylights have higher impact in summer)
                    const coolingModifierFactor = (orientation === 'Skylight') ? 1.25 : 0.5;
                    
                    // Calculate cooling season solar gains
                    const coolingGains = area * gainFactor * shgcNormalizationFactor * (1 - summerShadingDecimal) * coolingModifierFactor;
                    
                    return coolingGains;
                }, `Section 10: Cooling Gains for row ${rowId} (kWh/yr)`);
            });
            
            // *** PHASE 3.5: PERCENTAGE CALCULATIONS (J and L columns) ***
            // Register calculations for heating percentages (j_73 through j_78)
            orientationRows.forEach(rowId => {
                sm.registerCalculation(`j_${rowId}`, function() {
                    const individualHeatingGain = window.TEUI.parseNumeric(getFieldValue(`i_${rowId}`)) || 0;
                    const totalHeatingGains = window.TEUI.parseNumeric(getFieldValue('i_79')) || 0;
                    
                    // Handle division by zero explicitly
                    const heatingPercentDecimal = totalHeatingGains !== 0 ? (individualHeatingGain / totalHeatingGains) : 0;
                    
                    return heatingPercentDecimal;
                }, `Section 10: Heating Percentage for row ${rowId} (%)`);
                
                // Register calculations for cooling percentages (l_73 through l_78)
                sm.registerCalculation(`l_${rowId}`, function() {
                    const individualCoolingGain = window.TEUI.parseNumeric(getFieldValue(`k_${rowId}`)) || 0;
                    const totalCoolingGains = window.TEUI.parseNumeric(getFieldValue('k_79')) || 0;
                    
                    // Handle division by zero explicitly
                    const coolingPercentDecimal = totalCoolingGains !== 0 ? (individualCoolingGain / totalCoolingGains) : 0;
                    
                    return coolingPercentDecimal;
                }, `Section 10: Cooling Percentage for row ${rowId} (%)`);
            });
            
            // *** PHASE 3.6: SUBTOTAL PERCENTAGES (J_79, L_79) ***
            sm.registerCalculation('j_79', function() {
                const totalHeatingGains = window.TEUI.parseNumeric(getFieldValue('i_79')) || 0;
                return totalHeatingGains > 0 ? 1 : 0; // 100% if there are gains, 0% if not
            }, 'Section 10: Total Heating Gains Percentage (always 100% or 0%)');
            
            sm.registerCalculation('l_79', function() {
                const totalCoolingGains = window.TEUI.parseNumeric(getFieldValue('k_79')) || 0;
                return totalCoolingGains > 0 ? 1 : 0; // 100% if there are gains, 0% if not
            }, 'Section 10: Total Cooling Gains Percentage (always 100% or 0%)');
            
            // *** CRITICAL: SHGC STATE HANDLING FOR REFERENCE VS APPLICATION ***
            // For Reference Model calculations, we need separate calculations that use f_XX = 0.5
            // while Application Model calculations use user/imported SHGC values
            
            // Register Reference Model heating gains calculations (with SHGC = 0.5)
            orientationRows.forEach(rowId => {
                sm.registerCalculation(`ref_i_${rowId}`, function() {
                    // For Reference calculations, always use SHGC = 0.5 per user specification
                    const area = window.TEUI.parseNumeric(getFieldValue(`d_${rowId}`)) || 0;
                    const orientation = getFieldValue(`e_${rowId}`) || 'Average';
                    const shgc = 0.5; // FIXED at 0.5 for Reference calculations
                    const winterShadingDecimal = (window.TEUI.parseNumeric(getFieldValue(`g_${rowId}`)) || 0) / 100;
                    
                    // Get gain factor
                    const gainFactor = window.TEUI.parseNumeric(getFieldValue(`m_${rowId}`)) || 0;
                    
                    // SHGC Normalization Factor (will be 1.0 since we're using 0.5/0.5)
                    const shgcNormalizationFactor = shgc / 0.5; // Always 1.0 for Reference
                    
                    // Calculate Reference heating season solar gains
                    const heatingGains = area * gainFactor * shgcNormalizationFactor * (1 - winterShadingDecimal);
                    
                    return heatingGains;
                }, `Section 10: Reference Heating Gains for row ${rowId} (SHGC=0.5)`);
                
                // Register Reference Model cooling gains calculations (with SHGC = 0.5)
                sm.registerCalculation(`ref_k_${rowId}`, function() {
                    // For Reference calculations, always use SHGC = 0.5 per user specification
                    const area = window.TEUI.parseNumeric(getFieldValue(`d_${rowId}`)) || 0;
                    const orientation = getFieldValue(`e_${rowId}`) || 'Average';
                    const shgc = 0.5; // FIXED at 0.5 for Reference calculations
                    const summerShadingDecimal = (window.TEUI.parseNumeric(getFieldValue(`h_${rowId}`)) || 100) / 100;
                    
                    // Get gain factor
                    const gainFactor = window.TEUI.parseNumeric(getFieldValue(`m_${rowId}`)) || 0;
                    
                    // SHGC Normalization Factor (will be 1.0)
                    const shgcNormalizationFactor = shgc / 0.5; // Always 1.0 for Reference
                    
                    // Cooling modifier factor
                    const coolingModifierFactor = (orientation === 'Skylight') ? 1.25 : 0.5;
                    
                    // Calculate Reference cooling season solar gains
                    const coolingGains = area * gainFactor * shgcNormalizationFactor * (1 - summerShadingDecimal) * coolingModifierFactor;
                    
                    return coolingGains;
                }, `Section 10: Reference Cooling Gains for row ${rowId} (SHGC=0.5)`);
            });
            
            // Register Reference Model subtotals with Reference SHGC values
            sm.registerCalculation('ref_i_79', function() {
                const heatingGains = [
                    window.TEUI.parseNumeric(getFieldValue('ref_i_73')) || 0,
                    window.TEUI.parseNumeric(getFieldValue('ref_i_74')) || 0,
                    window.TEUI.parseNumeric(getFieldValue('ref_i_75')) || 0,
                    window.TEUI.parseNumeric(getFieldValue('ref_i_76')) || 0,
                    window.TEUI.parseNumeric(getFieldValue('ref_i_77')) || 0,
                    window.TEUI.parseNumeric(getFieldValue('ref_i_78')) || 0
                ].reduce((sum, val) => sum + val, 0);
                
                return heatingGains;
            }, 'Section 10: Reference Total Heating Gains (SHGC=0.5)');
            
            sm.registerCalculation('ref_k_79', function() {
                const coolingGains = [
                    window.TEUI.parseNumeric(getFieldValue('ref_k_73')) || 0,
                    window.TEUI.parseNumeric(getFieldValue('ref_k_74')) || 0,
                    window.TEUI.parseNumeric(getFieldValue('ref_k_75')) || 0,
                    window.TEUI.parseNumeric(getFieldValue('ref_k_76')) || 0,
                    window.TEUI.parseNumeric(getFieldValue('ref_k_77')) || 0,
                    window.TEUI.parseNumeric(getFieldValue('ref_k_78')) || 0
                ].reduce((sum, val) => sum + val, 0);
                
                return coolingGains;
            }, 'Section 10: Reference Total Cooling Gains (SHGC=0.5)');
            
            // Register Reference total gains calculation (for Reference utilization)
            sm.registerCalculation('ref_e_80', function() {
                const solarGains = window.TEUI.parseNumeric(getFieldValue('ref_i_79')) || 0;
                const internalGains = window.TEUI.parseNumeric(getFieldValue('ref_i_71')) || 0; // From S09 Reference
                
                return solarGains + internalGains;
            }, 'Section 10: Reference Total Gains (Solar + Internal) with SHGC=0.5');
            
            // Register Reference utilization factor (may use different D80 method)
            sm.registerCalculation('ref_g_80', function() {
                // For Reference, check if there's a standard-specific D80 method
                const referenceMethod = window.TEUI?.StateManager?.getReferenceValue('d_80') || 'NRC 40%';
                let utilizationFactor = 0.4; // Default to 40%
                
                if (referenceMethod === 'NRC 0%') {
                    utilizationFactor = 0;
                } else if (referenceMethod === 'NRC 40%') {
                    utilizationFactor = 0.4;
                } else if (referenceMethod === 'NRC 50%') {
                    utilizationFactor = 0.5;
                } else if (referenceMethod === 'NRC 60%') {
                    utilizationFactor = 0.6;
                } else if (referenceMethod === 'PH Method') {
                    // Use Reference total gains for PHPP calculation
                    const totalGains = window.TEUI.parseNumeric(getFieldValue('ref_e_80')) || 0;
                    
                    // Get Reference loss values
                    const i97 = window.TEUI.parseNumeric(getFieldValue('ref_i_97')) || 0;
                    const i103 = window.TEUI.parseNumeric(getFieldValue('ref_i_103')) || 0;
                    const m121 = window.TEUI.parseNumeric(getFieldValue('ref_m_121')) || 0;
                    const i98 = window.TEUI.parseNumeric(getFieldValue('ref_i_98')) || 0;
                    
                    const denominator = i97 + i103 + m121 + i98;
                    
                    if (denominator > 0) {
                        const gamma = totalGains / denominator;
                        if (Math.abs(gamma - 1) < 1e-9) {
                            utilizationFactor = 5 / 6;
                        } else {
                            const a = 5;
                            const gamma_a = Math.pow(gamma, a);
                            const gamma_a_plus_1 = Math.pow(gamma, a + 1);
                            utilizationFactor = (1 - gamma_a) / (1 - gamma_a_plus_1);
                            utilizationFactor = Math.max(0, Math.min(1, utilizationFactor));
                        }
                    } else {
                        utilizationFactor = (totalGains > 0) ? 1 : 0;
                    }
                }
                
                return utilizationFactor;
            }, 'Section 10: Reference Gains Utilization Factor (may differ from Application)');
            
            // Register Reference usable gains
            sm.registerCalculation('ref_i_80', function() {
                const totalGains = window.TEUI.parseNumeric(getFieldValue('ref_e_80')) || 0;
                const utilizationFactor = window.TEUI.parseNumeric(getFieldValue('ref_g_80')) || 0;
                
                return totalGains * utilizationFactor;
            }, 'Section 10: Reference Net Usable Gains (kWh/yr)');
            
            // *** PHASE 4: HEATING SUBTOTAL (I_79) ***
            sm.registerCalculation('i_79', function() {
                const heatingGains = [
                    window.TEUI.parseNumeric(getFieldValue('i_73')) || 0, // Doors
                    window.TEUI.parseNumeric(getFieldValue('i_74')) || 0, // North
                    window.TEUI.parseNumeric(getFieldValue('i_75')) || 0, // East
                    window.TEUI.parseNumeric(getFieldValue('i_76')) || 0, // South
                    window.TEUI.parseNumeric(getFieldValue('i_77')) || 0, // West
                    window.TEUI.parseNumeric(getFieldValue('i_78')) || 0  // Skylights
                ].reduce((sum, val) => sum + val, 0);
                
                return heatingGains;
            }, 'Section 10: Total Heating Gains (kWh/yr)');
            
            // *** PHASE 5: COOLING SUBTOTAL (K_79) ***
            sm.registerCalculation('k_79', function() {
                const coolingGains = [
                    window.TEUI.parseNumeric(getFieldValue('k_73')) || 0, // Doors
                    window.TEUI.parseNumeric(getFieldValue('k_74')) || 0, // North
                    window.TEUI.parseNumeric(getFieldValue('k_75')) || 0, // East
                    window.TEUI.parseNumeric(getFieldValue('k_76')) || 0, // South
                    window.TEUI.parseNumeric(getFieldValue('k_77')) || 0, // West
                    window.TEUI.parseNumeric(getFieldValue('k_78')) || 0  // Skylights
                ].reduce((sum, val) => sum + val, 0);
                
                return coolingGains;
            }, 'Section 10: Total Cooling Gains (kWh/yr)');
            
            // *** PHASE 6: TOTAL GAINS (E_80) - Critical for D80 toggle ***
            sm.registerCalculation('e_80', function() {
                const solarGains = window.TEUI.parseNumeric(getFieldValue('i_79')) || 0;
                const internalGains = window.TEUI.parseNumeric(getFieldValue('i_71')) || 0; // From Section 9
                
                return solarGains + internalGains;
            }, 'Section 10: Total Gains (Solar + Internal) (kWh/yr)');
            
            // *** PHASE 7: UTILIZATION FACTOR (G_80) - D80 Toggle Implementation ***
            sm.registerCalculation('g_80', function() {
                const utilizationMethod = getFieldValue('d_80') || 'NRC 40%';
                let utilizationFactor = 0.4; // Default to 40%
                
                // Implementation of the D80 toggle formula
                if (utilizationMethod === 'NRC 0%') {
                    utilizationFactor = 0;
                } else if (utilizationMethod === 'NRC 40%') {
                    utilizationFactor = 0.4;
                } else if (utilizationMethod === 'NRC 50%') {
                    utilizationFactor = 0.5;
                } else if (utilizationMethod === 'NRC 60%') {
                    utilizationFactor = 0.6;
                } else if (utilizationMethod === 'PH Method') {
                    // PHPP formula: (1-γ^5)/(1-γ^6) where γ = gains/losses
                    const totalGains = window.TEUI.parseNumeric(getFieldValue('e_80')) || 0;
                    
                    // Get loss values from other sections (with fallbacks)
                    const i97 = window.TEUI.parseNumeric(getFieldValue('i_97')) || 0;
                    const i103 = window.TEUI.parseNumeric(getFieldValue('i_103')) || 0;
                    const m121 = window.TEUI.parseNumeric(getFieldValue('m_121')) || 0;
                    const i98 = window.TEUI.parseNumeric(getFieldValue('i_98')) || 0;
                    
                    const denominator = i97 + i103 + m121 + i98; // Total Losses
                    
                    if (denominator > 0) {
                        const gamma = totalGains / denominator;
                        if (Math.abs(gamma - 1) < 1e-9) { // Handle gamma close to 1
                            utilizationFactor = 5 / 6; // a/(a+1)
                        } else {
                            const a = 5;
                            const gamma_a = Math.pow(gamma, a);
                            const gamma_a_plus_1 = Math.pow(gamma, a + 1);
                            utilizationFactor = (1 - gamma_a) / (1 - gamma_a_plus_1);
                            utilizationFactor = Math.max(0, Math.min(1, utilizationFactor));
                        }
                    } else {
                        utilizationFactor = (totalGains > 0) ? 1 : 0; // If no losses, use 100% or 0%
                    }
                }
                
                return utilizationFactor;
            }, 'Section 10: Gains Utilization Factor (D80 Toggle)');
            
            // *** PHASE 8: USABLE GAINS (I_80) - Key Output from D80 Toggle ***
            sm.registerCalculation('i_80', function() {
                const totalGains = window.TEUI.parseNumeric(getFieldValue('e_80')) || 0;
                const utilizationFactor = window.TEUI.parseNumeric(getFieldValue('g_80')) || 0;
                
                return totalGains * utilizationFactor;
            }, 'Section 10: Net Usable Gains (kWh/yr) - Main D80 Output');
            
            // *** PHASE 9: PHPP REFERENCE UTILIZATION FACTOR (G_81) ***
            sm.registerCalculation('g_81', function() {
                // Always use PHPP method for reference (row 81) - SHOULD ALWAYS SHOW REFERENCE VALUE
                const totalGains = window.TEUI.parseNumeric(getFieldValue('e_80')) || 0;
                
                // Get loss values for PHPP calculation
                const i97 = window.TEUI.parseNumeric(getFieldValue('i_97')) || 0;
                const i103 = window.TEUI.parseNumeric(getFieldValue('i_103')) || 0;
                const m121 = window.TEUI.parseNumeric(getFieldValue('m_121')) || 0;
                const i98 = window.TEUI.parseNumeric(getFieldValue('i_98')) || 0;
                
                const denominator = i97 + i103 + m121 + i98;
                let phUtilizationFactor = 0.8333; // More conservative fallback (5/6 = 83.33%)
                
                // Debug logging for G81 initialization issue
                if (denominator === 0) {
                    console.log('[S10-G81] Loss values not available on initialization - using fallback');
                    console.log(`[S10-G81] i97=${i97}, i103=${i103}, m121=${m121}, i98=${i98}`);
                }
                
                if (denominator > 0) {
                    const gamma = totalGains / denominator;
                    if (Math.abs(gamma - 1) < 1e-9) {
                        phUtilizationFactor = 5 / 6; // 83.33% when gamma ≈ 1
                    } else {
                        const a = 5;
                        const gamma_a = Math.pow(gamma, a);
                        const gamma_a_plus_1 = Math.pow(gamma, a + 1);
                        phUtilizationFactor = (1 - gamma_a) / (1 - gamma_a_plus_1);
                        phUtilizationFactor = Math.max(0, Math.min(1, phUtilizationFactor));
                    }
                } else {
                    // If we don't have loss data yet, try to trigger a delayed recalculation
                    if (window.TEUI?.StateManager) {
                        setTimeout(() => {
                            console.log('[S10-G81] Retrying calculation after loss data loads...');
                            window.TEUI.StateManager.setValue('g_81', window.TEUI.StateManager.getValue('g_81')); // Trigger recalc
                        }, 500);
                    }
                    phUtilizationFactor = (totalGains > 0) ? 1 : 0.8333; // Better fallback
                }
                
                return phUtilizationFactor;
            }, 'Section 10: PHPP Reference Utilization Factor');
            
            // *** PHASE 10: PHPP USABLE GAINS (I_81) ***
            sm.registerCalculation('i_81', function() {
                const totalGains = window.TEUI.parseNumeric(getFieldValue('e_80')) || 0;
                const phUtilizationFactor = window.TEUI.parseNumeric(getFieldValue('g_81')) || 0;
                
                return totalGains * phUtilizationFactor;
            }, 'Section 10: PHPP Reference Usable Gains (kWh/yr)');
            
            // *** PHASE 11: UNUSABLE GAINS (I_82) ***
            sm.registerCalculation('i_82', function() {
                const totalGains = window.TEUI.parseNumeric(getFieldValue('e_80')) || 0;
                const usableGains = window.TEUI.parseNumeric(getFieldValue('i_80')) || 0;
                
                return totalGains - usableGains;
            }, 'Section 10: Net UN-usable Gains (kWh/yr)');
            
            // *** DEPENDENCY REGISTRATION ***
            // Register dependencies for the calculation chain
            console.log('[S10] 📊 Registering IT-DEPENDS dependencies...');
            
            // Climate zone affects gain factors
            orientationRows.forEach(rowId => {
                sm.registerDependency('j_19', `m_${rowId}`); // Climate zone affects gain factors
                sm.registerDependency(`e_${rowId}`, `m_${rowId}`); // Orientation affects gain factors
            });
            
            // Gain factors affect heating and cooling gains
            orientationRows.forEach(rowId => {
                sm.registerDependency(`d_${rowId}`, `i_${rowId}`); // Area affects heating gains
                sm.registerDependency(`e_${rowId}`, `i_${rowId}`); // Orientation affects heating gains  
                sm.registerDependency(`f_${rowId}`, `i_${rowId}`); // SHGC affects heating gains
                sm.registerDependency(`g_${rowId}`, `i_${rowId}`); // Winter shading affects heating gains
                sm.registerDependency(`m_${rowId}`, `i_${rowId}`); // Gain factor affects heating gains
                
                sm.registerDependency(`d_${rowId}`, `k_${rowId}`); // Area affects cooling gains
                sm.registerDependency(`e_${rowId}`, `k_${rowId}`); // Orientation affects cooling gains
                sm.registerDependency(`f_${rowId}`, `k_${rowId}`); // SHGC affects cooling gains
                sm.registerDependency(`h_${rowId}`, `k_${rowId}`); // Summer shading affects cooling gains
                sm.registerDependency(`m_${rowId}`, `k_${rowId}`); // Gain factor affects cooling gains
            });
            
            // Individual gains affect subtotals
            orientationRows.forEach(rowId => {
                sm.registerDependency(`i_${rowId}`, 'i_79'); // Individual heating gains affect total
                sm.registerDependency(`k_${rowId}`, 'k_79'); // Individual cooling gains affect total
                
                // Percentage calculations depend on individual and total gains
                sm.registerDependency(`i_${rowId}`, `j_${rowId}`); // Individual heating gain affects its percentage
                sm.registerDependency('i_79', `j_${rowId}`); // Total heating gains affects individual percentages
                sm.registerDependency(`k_${rowId}`, `l_${rowId}`); // Individual cooling gain affects its percentage
                sm.registerDependency('k_79', `l_${rowId}`); // Total cooling gains affects individual percentages
            });
            
            // Total percentage calculations
            sm.registerDependency('i_79', 'j_79'); // Total heating gains affects total percentage
            sm.registerDependency('k_79', 'l_79'); // Total cooling gains affects total percentage
            
            // Reference state dependencies (same logic but for ref_ prefixed calculations)
            orientationRows.forEach(rowId => {
                // Area, orientation, gain factors affect Reference heating gains (with SHGC=0.5)
                sm.registerDependency(`d_${rowId}`, `ref_i_${rowId}`);
                sm.registerDependency(`e_${rowId}`, `ref_i_${rowId}`);
                sm.registerDependency(`g_${rowId}`, `ref_i_${rowId}`); // Winter shading
                sm.registerDependency(`m_${rowId}`, `ref_i_${rowId}`); // Gain factor
                
                // Area, orientation, gain factors affect Reference cooling gains (with SHGC=0.5)
                sm.registerDependency(`d_${rowId}`, `ref_k_${rowId}`);
                sm.registerDependency(`e_${rowId}`, `ref_k_${rowId}`);
                sm.registerDependency(`h_${rowId}`, `ref_k_${rowId}`); // Summer shading
                sm.registerDependency(`m_${rowId}`, `ref_k_${rowId}`); // Gain factor
                
                // Reference individual gains affect Reference subtotals
                sm.registerDependency(`ref_i_${rowId}`, 'ref_i_79');
                sm.registerDependency(`ref_k_${rowId}`, 'ref_k_79');
            });
            
            // Reference total gains dependencies
            sm.registerDependency('ref_i_79', 'ref_e_80'); // Reference solar gains affect Reference total
            sm.registerDependency('ref_i_71', 'ref_e_80'); // Reference internal gains affect Reference total
            
            // Reference utilization factor dependencies
            sm.registerDependency('d_80', 'ref_g_80'); // D80 method affects Reference utilization (may be overridden by standard)
            sm.registerDependency('ref_e_80', 'ref_g_80'); // Reference total gains affect Reference utilization
            sm.registerDependency('ref_i_97', 'ref_g_80'); // Reference losses affect Reference utilization
            sm.registerDependency('ref_i_103', 'ref_g_80');
            sm.registerDependency('ref_m_121', 'ref_g_80');
            sm.registerDependency('ref_i_98', 'ref_g_80');
            
            // Reference usable gains dependencies
            sm.registerDependency('ref_e_80', 'ref_i_80');
            sm.registerDependency('ref_g_80', 'ref_i_80');
            
            // Solar gains and internal gains affect total gains
            sm.registerDependency('i_79', 'e_80'); // Solar gains affect total gains
            sm.registerDependency('i_71', 'e_80'); // Internal gains (S09) affect total gains
            
            // D80 toggle and losses affect utilization factors
            sm.registerDependency('d_80', 'g_80'); // D80 method affects utilization factor
            sm.registerDependency('e_80', 'g_80'); // Total gains affect PHPP utilization
            sm.registerDependency('i_97', 'g_80'); // Losses affect PHPP utilization
            sm.registerDependency('i_103', 'g_80'); // Losses affect PHPP utilization
            sm.registerDependency('m_121', 'g_80'); // Losses affect PHPP utilization
            sm.registerDependency('i_98', 'g_80'); // Losses affect PHPP utilization
            
            // Same dependencies for PHPP reference
            sm.registerDependency('e_80', 'g_81'); // Total gains affect PHPP reference
            sm.registerDependency('i_97', 'g_81'); // Losses affect PHPP reference
            sm.registerDependency('i_103', 'g_81'); // Losses affect PHPP reference  
            sm.registerDependency('m_121', 'g_81'); // Losses affect PHPP reference
            sm.registerDependency('i_98', 'g_81'); // Losses affect PHPP reference
            
            // Utilization factors affect usable gains
            sm.registerDependency('e_80', 'i_80'); // Total gains affect usable gains
            sm.registerDependency('g_80', 'i_80'); // Utilization factor affects usable gains
            sm.registerDependency('e_80', 'i_81'); // Total gains affect PHPP usable gains
            sm.registerDependency('g_81', 'i_81'); // PHPP utilization affects PHPP usable gains
            
            // Usable gains affect unusable gains
            sm.registerDependency('e_80', 'i_82'); // Total gains affect unusable gains
            sm.registerDependency('i_80', 'i_82'); // Usable gains affect unusable gains
            
            // *** CRITICAL: S10 → S14 → S15 → S01 DEPENDENCY CONNECTIONS ***
            // Connect S10's key outputs through the proper calculation chain
            // This fixes the bug where i_80 changes don't flow to h_10
            
            // S10 → S14: Net Usable Gains affect Energy Balance calculations
            sm.registerDependency('i_80', 'd_140'); // S10 gains affect S14 heating energy balance
            sm.registerDependency('i_80', 'k_140'); // S10 gains affect S14 cooling energy balance
            sm.registerDependency('i_80', 'e_140'); // S10 gains affect S14 total energy balance
            
            // Reference usable gains affect S14 reference calculations
            sm.registerDependency('ref_i_80', 'ref_d_140'); // S10 reference gains affect S14 reference heating
            sm.registerDependency('ref_i_80', 'ref_k_140'); // S10 reference gains affect S14 reference cooling
            sm.registerDependency('ref_i_80', 'ref_e_140'); // S10 reference gains affect S14 reference total
            
            // S14 → S15: Energy Balance flows to Energy Totals (these should already exist)
            sm.registerDependency('e_140', 'e_170'); // S14 total energy affects S15 total energy
            sm.registerDependency('ref_e_140', 'ref_e_170'); // S14 reference energy affects S15 reference total
            
            // S15 → S01: Energy Totals flow to TEUI calculations (these should already exist)
            sm.registerDependency('e_170', 'h_10'); // S15 total energy affects S01 TEUI
            sm.registerDependency('ref_e_170', 'e_10'); // S15 reference energy affects S01 reference TEUI
            
            console.log('[S10] 🔗 Added correct S10→S14→S15→S01 dependency chain for TEUI updates');
            
            // Validate registrations - UPDATED TO INCLUDE ALL CALCULATIONS
            const expectedCalculations = [
                // Gain factors
                'm_73', 'm_74', 'm_75', 'm_76', 'm_77', 'm_78',
                // Application heating gains
                'i_73', 'i_74', 'i_75', 'i_76', 'i_77', 'i_78',
                // Application cooling gains
                'k_73', 'k_74', 'k_75', 'k_76', 'k_77', 'k_78',
                // Application heating percentages
                'j_73', 'j_74', 'j_75', 'j_76', 'j_77', 'j_78',
                // Application cooling percentages
                'l_73', 'l_74', 'l_75', 'l_76', 'l_77', 'l_78',
                // Application subtotals
                'i_79', 'k_79', 'j_79', 'l_79',
                // Application utilization system (D80 toggle)
                'e_80', 'g_80', 'i_80', 'g_81', 'i_81', 'i_82',
                // Reference heating gains (SHGC=0.5)
                'ref_i_73', 'ref_i_74', 'ref_i_75', 'ref_i_76', 'ref_i_77', 'ref_i_78',
                // Reference cooling gains (SHGC=0.5)
                'ref_k_73', 'ref_k_74', 'ref_k_75', 'ref_k_76', 'ref_k_77', 'ref_k_78',
                // Reference subtotals and utilization
                'ref_i_79', 'ref_k_79', 'ref_e_80', 'ref_g_80', 'ref_i_80'
            ];
            
            const registeredCount = expectedCalculations.filter(id => sm.hasCalculation && sm.hasCalculation(id)).length;
            console.log(`[S10] 📊 IT-DEPENDS Migration: ${registeredCount}/${expectedCalculations.length} calculations registered`);
            
            if (registeredCount === expectedCalculations.length) {
                console.log('✅ [S10] IT-DEPENDS system fully operational - All radiant gains calculations registered');
                console.log('[S10] 🎯 Critical D80 toggle and SHGC state handling implemented');
            } else {
                console.warn('⚠️ [S10] Some IT-DEPENDS calculations failed to register');
                console.log('[S10] Missing calculations:', expectedCalculations.filter(id => !sm.hasCalculation(id)));
            }
            
            // console.log('Radiant Gains StateManager listeners added');
        } catch (error) {
            console.error('[S10] Error in IT-DEPENDS migration:', error);
        }
    }
    
    /**
     * Register with the SectionIntegrator
     */
    function registerWithIntegrator() {
        try {
            // If the integrator exists, register dependencies
            if (window.TEUI?.SectionIntegrator) {
                // console.log('Registering with SectionIntegrator');
                // Add any required integrations
            }
        } catch (error) {
            // console.error('Error in registerWithIntegrator:', error);
        }
    }
    
    /**
     * Called when the section is rendered
     * This is a good place to initialize values and run initial calculations
     */
    function onSectionRendered() {
        // Initialize event handlers
        initializeEventHandlers();
        
        // Setup default values for dropdowns
        setupDropdownDefaults();
        
        // Register this section with StateManager
        registerWithStateManager();
        
        // Register with SectionIntegrator if needed
        registerWithIntegrator();

        // Add StateManager listeners for this section
        addStateManagerListeners();
        
        // Perform initial calculations for this section
        calculateAll(); // Calculate directly as part of onSectionRendered
    }
    
    //==========================================================================
    // PUBLIC API
    //==========================================================================
    
    return {
        // Field definitions and layout - REQUIRED
        getFields: getFields,
        getDropdownOptions: getDropdownOptions,
        getLayout: getLayout,
        
        // Event handling and initialization - REQUIRED
        initializeEventHandlers: initializeEventHandlers,
        
        onSectionRendered: onSectionRendered,
        
        calculateAll: calculateAll,
        calculateUtilizationFactors: calculateUtilizationFactors,
        setupDropdownDefaults: setupDropdownDefaults,
        registerWithStateManager: registerWithStateManager,
        addStateManagerListeners: addStateManagerListeners,
        registerWithIntegrator: registerWithIntegrator,
        
        calculateGainFactor: function(orientation, climateZone) {
            try {
                return calculateGainFactor(orientation, climateZone);
            } catch (error) {
                // console.error('Error in Section10 calculateGainFactor:', error);
                return 50.0; // Default value in case of error
            }
        }
    };
})();

// Export key functions to the global namespace for cross-section access
document.addEventListener('DOMContentLoaded', function() {
    // Create section namespace
    window.TEUI = window.TEUI || {};
    window.TEUI.sect10 = window.TEUI.sect10 || {};
    
    // Export critical functions
    const module = window.TEUI.SectionModules.sect10;
    window.TEUI.sect10.calculateAll = module.calculateAll;
    window.TEUI.sect10.calculateUtilizationFactors = module.calculateUtilizationFactors;
    
    // Create a safe global function for radiant gains recalculation
    window.recalculateRadiantGains = function() {
        if (window.recalculateRadiantGainsRunning) return;
        
        window.recalculateRadiantGainsRunning = true;
        try {
            if (window.TEUI?.SectionModules?.sect10?.calculateAll) {
                window.TEUI.SectionModules.sect10.calculateAll();
            } else if (window.TEUI?.sect10?.calculateAll) {
                window.TEUI.sect10.calculateAll();
            }
        } catch (e) {
            // console.error('Error in global recalculateRadiantGains:', e);
        } finally {
            window.recalculateRadiantGainsRunning = false;
        }
    };
});