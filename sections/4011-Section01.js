/**
 * 4011-Section01.js
 * Key Values (Section 1) module for TEUI Calculator 4.011
 * 
 * Direct HTML rendering for precise styling, dynamic calculations for key metrics.
 * DUAL-ENGINE ARCHITECTURE: Reference Model (Column E) and Target Model (Column H)
 */

window.TEUI = window.TEUI || {};
window.TEUI.SectionModules = window.TEUI.SectionModules || {};

window.TEUI.SectionModules.sect01 = (function() {
    
    // Animation state tracking
    const activeAnimations = {}; // Stores { fieldId: animationFrameId }

    //==========================================================================
    // PART 1: FIELD DEFINITIONS
    //==========================================================================
    
    // Field definitions primarily for StateManager tracking and reference
    const fields = {
        // T.1 Lifetime Carbon 
        "d_6": { type: "calculated", label: "Lifetime Carbon Ref", defaultValue: "24.4", section: "keyValues" },
        "h_6": { type: "calculated", label: "Lifetime Carbon Target", defaultValue: "11.7", section: "keyValues" },
        "k_6": { type: "calculated", label: "Lifetime Carbon Actual", defaultValue: "11.7", section: "keyValues" },
        // T.2 Annual Carbon
        "d_8": { type: "calculated", label: "Annual Carbon Ref", defaultValue: "17.4", section: "keyValues" },
        "h_8": { type: "calculated", label: "Annual Carbon Target", defaultValue: "4.7", section: "keyValues" },
        "k_8": { type: "calculated", label: "Annual Carbon Actual", defaultValue: "4.8", section: "keyValues" },
        "j_8": { type: "calculated", label: "Annual Carbon %", defaultValue: "14%", section: "keyValues" },
        // T.3 TEUI
        "e_10": { type: "calculated", label: "TEUI Ref", defaultValue: "341.2", section: "keyValues" },
        "f_10": { type: "calculated", label: "TEUI Ref Tier", defaultValue: "tier1", section: "keyValues" },
        "h_10": { type: "calculated", label: "TEUI Target", defaultValue: "93.0", section: "keyValues" },
        "i_10": { type: "calculated", label: "TEUI Target Tier", defaultValue: "tier3", section: "keyValues" },
        "j_10": { type: "calculated", label: "TEUI %", defaultValue: "41%", section: "keyValues" },
        "k_10": { type: "calculated", label: "TEUI Actual", defaultValue: "93.1", section: "keyValues" },
        // Inputs (Placeholder definitions for clarity)
        "f_32": { type: "calculated", label: "Source: Actual Energy", defaultValue: "0", section: "keyValues" },
        "j_32": { type: "calculated", label: "Source: Target Energy", defaultValue: "0", section: "keyValues" },
        "h_15": { type: "calculated", label: "Source: Area", defaultValue: "1", section: "keyValues" },
        "i_41": { type: "calculated", label: "Source: Embodied Carbon", defaultValue: "0", section: "keyValues" },
        "h_13": { type: "calculated", label: "Source: Service Life", defaultValue: "50", section: "keyValues" },
        "k_32": { type: "calculated", label: "Source: Target Emissions", defaultValue: "0", section: "keyValues" },
        "g_32": { type: "calculated", label: "Source: Actual Emissions", defaultValue: "0", section: "keyValues" },
        "d_13": { type: "calculated", label: "Reference Standard", defaultValue: "", section: "keyValues" }
    };
    
    //==========================================================================
    // PART 2: CUSTOM STYLING
    //==========================================================================
    
    const customCSS = `
        #keyValues {
            margin-bottom: 8px;
        }
        #keyValues .section-header .toggle-icon {
            display: none !important;
        }
        #keyValues .section-content {
            padding: 0 !important;
        }
        .key-values-table {
            width: 100%;
            border-collapse: collapse;
            border: 2px solid #212529;
            font-family: Arial, sans-serif;
        }
        .key-values-table th, 
        .key-values-table td {
            border-left: none;
            border-right: none;
            padding: 5px 10px;
            vertical-align: top;
        }
        .key-values-table tr {
            border-bottom: 2px solid #212529;
            position: relative;
        }
        .key-values-header {
            background-color: #f1f1f1;
            text-align: center;
            font-weight: bold;
            font-size: 1rem;
            padding: 4px !important;
            height: 30px;
        }
        .key-values-label-cell { width: 30%; padding-left: 0 !important; }
        .key-values-ref-cell, .key-values-target-cell, .key-values-actual-cell { width: 17%; position: relative; }
        .key-values-percent-cell { width: 10%; position: relative; text-align: center; }
        .key-title-combined { font-family: "Arial Black", Gadget, sans-serif; font-size: 1.5rem; font-weight: 900; line-height: 1.1; display: block; margin-bottom: 4px; text-align: left; margin-left: 20px; }
        .key-title-id { color: #7f7f7f; margin-right: 8px; }
        .key-explanation { font-size: 0.75rem; font-weight: bold; color: #555; margin-bottom: 4px; display: block; line-height: 1.1; text-align: right; padding-right: 10px; }
        .title-explanation { font-size: 0.75rem; font-weight: bold; color: #555; display: block; line-height: 1.1; margin-left: 20px; margin-bottom: 4px; }
        .ref-explanation { color: #8B0000; opacity: 0.9; }
        .key-value { font-family: "Arial Black", Gadget, sans-serif; font-size: 2rem; font-weight: 900; line-height: 1; display: block; text-align: right; margin: 0; padding: 0; white-space: nowrap; padding-right: 10px; }
        .ref-value { color: #8B0000; }
        .percent-value { font-size: 1.3rem; color: #333; text-align: center; display: inline-block; }
        .tier-indicator { display: inline-block; font-size: 2rem; font-weight: 900; color: #777; margin-right: 8px; opacity: 0.5; vertical-align: baseline; }
        .t1-tag { color: #8B0000; }
        .t3-tag { color: #333; }
        .cost-indicator { display: inline; font-size: 0.75rem; font-weight: bold; color: #555; margin-left: 5px; }
        .ref-cost { color: #8B0000; opacity: 0.9; }
        .checkmark { color: green; font-size: 1.2rem; display: inline-block; margin-right: 5px; }
        .linear-gauge-container { width: 92%; height: 12px; background-color: #f1f1f1; border-radius: 6px; overflow: hidden; margin: 6px 0 6px auto; position: relative; margin-right: 20px; }
        .linear-gauge-bar { height: 100%; width: 0%; background-color: #5bc0de; transition: width 1s ease-in-out; border-radius: 6px; }
        .gauge-excellent { background-color: #28a745; }
        .gauge-good { background-color: #5bc0de; }
        .gauge-warning { background-color: #f0ad4e; }
        .gauge-poor { background-color: #d9534f; }
        .key-title-container { display: flex; flex-direction: column; }
        .teui-warning { color: #8B0000; font-family: "Arial Black", Gadget, sans-serif; font-size: 1.5rem; font-weight: 900; }
        @media (max-width: 992px) { .key-value { font-size: 1.7rem; } .key-title-combined { font-size: 1.3rem; } }
        @media (max-width: 768px) { .key-value { font-size: 1.4rem; } .key-title-combined { font-size: 1.1rem; } .key-explanation { font-size: 0.65rem; } }
    `;
    
    //==========================================================================
    // PART 3: DIRECT RENDERING
    //==========================================================================
    
    function getKeyValuesHTML() {
        return `
            <table class="key-values-table">
                <thead><tr><th class="key-values-label-cell key-values-header">Key Values</th><th class="key-values-ref-cell key-values-header">Reference</th><th class="key-values-target-cell key-values-header">Target</th><th class="key-values-actual-cell key-values-header">Actual</th><th class="key-values-percent-cell key-values-header">%</th></tr></thead>
                <tbody>
                    <tr><td class="key-values-label-cell"><div class="key-title-container"><span class="title-explanation">Lifetime Emissions Intensity kgCO2e/m²/Service Life (Yrs)</span><span class="key-title-combined"><span class="key-title-id">T.1</span>Lifetime Carbon</span><div id="lifetime-carbon-gauge" class="linear-gauge-container"><div class="linear-gauge-bar"></div></div></div></td><td class="key-values-ref-cell" data-field-id="d_6"><span class="key-explanation ref-explanation">Reference 100% (Baseline)</span><span class="key-value ref-value">24.4</span></td><td class="key-values-target-cell" data-field-id="h_6"><span class="key-explanation">Targeted (Design) 71% Reduction</span><span class="key-value">11.7</span></td><td class="key-values-actual-cell" data-field-id="k_6"><span class="key-explanation">Actual (Utility Bills)</span><span class="key-value">11.7</span></td><td class="key-values-percent-cell"><span class="percent-value">N/A</span></td></tr>
                    <tr><td class="key-values-label-cell"><div class="key-title-container"><span class="title-explanation">Annual Operational Emissions Intensity kgCO2e/m²</span><span class="key-title-combined"><span class="key-title-id">T.2</span>Annual Carbon</span><div id="annual-carbon-gauge" class="linear-gauge-container"><div class="linear-gauge-bar"></div></div></div></td><td class="key-values-ref-cell" data-field-id="d_8"><span class="key-explanation ref-explanation">Reference 100% (Baseline)</span><span class="key-value ref-value">17.4</span></td><td class="key-values-target-cell" data-field-id="h_8"><span class="key-explanation">Targeted (Design) 86% Reduction</span><span class="key-value">4.7</span></td><td class="key-values-actual-cell" data-field-id="k_8"><span class="key-explanation">Actual (Utility Bills)</span><span class="key-value">4.8</span></td><td class="key-values-percent-cell" data-field-id="j_8"><span class="checkmark">✓</span><span class="percent-value">14%</span></td></tr>
                    <tr><td class="key-values-label-cell"><div class="key-title-container"><span class="title-explanation">Total Annual Operational Energy Use Intensity kWh/m²/yr</span><span class="key-title-combined"><span class="key-title-id">T.3</span>TEUI</span><div id="teui-gauge" class="linear-gauge-container"><div class="linear-gauge-bar"></div></div></div></td><td class="key-values-ref-cell" data-field-id="e_10"><span class="key-explanation ref-explanation">Reference 100% (Baseline) <span class="cost-indicator ref-cost"></span></span><span class="key-value ref-value"><span class="tier-indicator t1-tag">tier1</span> <span class="numeric-value">341.2</span></span></td><td class="key-values-target-cell" data-field-id="h_10"><span class="key-explanation">Targeted (Design) 59% Reduction <span class="cost-indicator"></span></span><span class="key-value" data-tier-field="i_10"><span class="tier-indicator t3-tag">tier3</span> 93.0</span></td><td class="key-values-actual-cell" data-field-id="k_10"><span class="key-explanation">Actual (Utility Bills) <span class="cost-indicator"></span></span><span class="key-value">93.1</span></td><td class="key-values-percent-cell" data-field-id="j_10"><span class="checkmark">✓</span><span class="percent-value">41%</span></td></tr>
                </tbody>
            </table>
        `;
    }

    function renderKeyValuesSection() {
        const sectionElement = document.getElementById('keyValues');
        const contentContainer = sectionElement?.querySelector('.section-content');
        if (contentContainer) {
            contentContainer.innerHTML = getKeyValuesHTML();
        }
    }

    //==========================================================================
    // PART 4: DUAL-ENGINE HELPER FUNCTIONS
    //==========================================================================

    /**
     * Helper function to safely get numeric values from the APPLICATION state.
     */
    function getAppNumericValue(fieldId, defaultValue = 0) {
        let value = defaultValue;
        const stateValue = window.TEUI?.StateManager?.getApplicationValue?.(fieldId) || 
                          window.TEUI?.StateManager?.getValue?.(fieldId); // Fallback for compatibility
        if (stateValue !== null && stateValue !== undefined) {
            if (typeof stateValue === 'string') {
                const cleanedValue = stateValue.replace(/,/g, '');
                if (cleanedValue === '' || cleanedValue.toUpperCase() === 'N/A') {
                    value = defaultValue;
                } else {
                    const parsed = parseFloat(cleanedValue);
                    value = isNaN(parsed) ? defaultValue : parsed;
                }
            } else if (typeof stateValue === 'number' && !isNaN(stateValue)) {
                value = stateValue;
            }
        }
        return isNaN(value) ? defaultValue : value;
    }

    /**
     * Helper function to safely get numeric values from the REFERENCE state.
     */
    function getRefNumericValue(fieldId, defaultValue = 0) {
        let value = defaultValue;
        const stateValue = window.TEUI?.StateManager?.getReferenceValue(fieldId);
        if (stateValue !== null && stateValue !== undefined) {
            if (typeof stateValue === 'string') {
                const cleanedValue = stateValue.replace(/,/g, '');
                if (cleanedValue === '' || cleanedValue.toUpperCase() === 'N/A') {
                    value = defaultValue;
                } else {
                    const parsed = parseFloat(cleanedValue);
                    value = isNaN(parsed) ? defaultValue : parsed;
                }
            } else if (typeof stateValue === 'number' && !isNaN(stateValue)) {
                value = stateValue;
            }
        }
        return isNaN(value) ? defaultValue : value;
    }

    /**
     * Standardized helper function to set calculated values with proper formatting.
     * CRITICAL: Preserves Section 01's custom styling and HTML structure
     * @param {string} fieldId - The field ID to update
     * @param {number} rawValue - The raw numeric value to store
     * @param {string} formatType - The format type for display (e.g., 'number-1dp', 'number-2dp-comma')
     */
    function setCalculatedValue(fieldId, rawValue, formatType = 'number-2dp-comma') {
        // Store raw value as string in StateManager for precision
        if (window.TEUI?.StateManager?.setValue) {
            const valueToStore = isFinite(rawValue) ? rawValue.toString() : 'N/A';
            window.TEUI.StateManager.setValue(fieldId, valueToStore, 'calculated');
        }
        
        // CRITICAL: Use updateDisplayValue to preserve custom styling instead of direct DOM manipulation
        // This maintains tier indicators, styling classes, and visual design
        let formattedValue;
        if (rawValue === "N/A" || !isFinite(rawValue)) {
            formattedValue = "N/A";
        } else {
            formattedValue = window.TEUI?.formatNumber?.(rawValue, formatType) ?? rawValue.toString();
        }
        
        // Use the specialized updateDisplayValue function that preserves Section 01's styling
        updateDisplayValue(fieldId, formattedValue);
    }

    //==========================================================================
    // DUAL-ENGINE ARCHITECTURE: REFERENCE MODEL (Column E)
    //==========================================================================

    // Add recursion protection flags
    let referenceCalculationInProgress = false;
    let targetCalculationInProgress = false;

    /**
     * REFERENCE MODEL ENGINE: Calculate all Column E values using Reference state exclusively
     * ENHANCED: Now properly receives Reference TEUI from Section 15 (ref_h_136)
     */
    function calculateReferenceModel() {
        // Add recursion protection
        if (referenceCalculationInProgress) {
            return;
        }
        
        referenceCalculationInProgress = true;
        
        try {
            // CRITICAL: Get Reference TEUI from Section 15 (final Reference calculation)
            const refTEUIFromS15 = window.TEUI.StateManager?.getValue('ref_h_136');
            const refJ32FromS04 = window.TEUI.StateManager?.getValue('ref_j_32');
            const refK32FromS04 = window.TEUI.StateManager?.getValue('ref_k_32');
            
            // Use Section 15's Reference TEUI if available, otherwise calculate from Section 04 values
            let referenceTEUI = 0;
            if (refTEUIFromS15 !== null && refTEUIFromS15 !== undefined) {
                referenceTEUI = parseFloat(refTEUIFromS15);
            } else {
                // Fallback: Calculate from Section 04 Reference values
                const refTargetEnergy = refJ32FromS04 !== null && refJ32FromS04 !== undefined ? 
                                      parseFloat(refJ32FromS04) : 
                                      getAppNumericValue('j_32', 0);
                const refArea = getRefNumericValue('h_15', getAppNumericValue('h_15', 1427.2)); 
                
                if (refArea > 0) {
                    referenceTEUI = Math.round((refTargetEnergy / refArea) * 10) / 10;
                }
            }
            
            // Calculate Reference Annual Carbon from Section 04 Reference emissions
            let referenceAnnualCarbon = 0;
            if (refK32FromS04 !== null && refK32FromS04 !== undefined) {
                const refTargetEmissions = parseFloat(refK32FromS04);
                // CRITICAL FIX: Use Application area as fallback, not default of 1
                // This prevents timing issues where Reference calculations run before Reference standard loads
                const refArea = getRefNumericValue('h_15', getAppNumericValue('h_15', 1427.2));
                
                if (refArea > 0) {
                    referenceAnnualCarbon = Math.round((refTargetEmissions / refArea) * 10) / 10;
                } else {
                    console.error('❌ ERROR: refArea is 0 or invalid for Reference d_8 calculation');
                }
            }
            
            // Calculate Reference Lifetime Carbon
            let referenceLifetimeCarbon = 0;
            // CRITICAL FIX: Use Application service life as fallback, not default of 50
            const refServiceLife = getRefNumericValue('h_13', getAppNumericValue('h_13', 50)); 
            // Use Reference i_39 (from Section 05 Reference calculation) instead of i_41
            const refEmbodiedCarbon = getAppNumericValue('ref_i_39', 350.0);
            
            if (refServiceLife > 0) {
                referenceLifetimeCarbon = Math.round((refEmbodiedCarbon / refServiceLife + referenceAnnualCarbon) * 10) / 10;
            }

            // Use standardized helper with proper 1dp formatting for key values
            setCalculatedValue('e_10', referenceTEUI, 'number-1dp');
            setCalculatedValue('d_8', referenceAnnualCarbon, 'number-1dp');
            setCalculatedValue('d_6', referenceLifetimeCarbon, 'number-1dp');

            // Store Reference values with ref_ prefix for cross-section use
            if (window.TEUI?.StateManager) {
                window.TEUI.StateManager.setValue('ref_e_10', referenceTEUI.toString(), 'calculated');
                window.TEUI.StateManager.setValue('ref_d_8', referenceAnnualCarbon.toString(), 'calculated');
                window.TEUI.StateManager.setValue('ref_d_6', referenceLifetimeCarbon.toString(), 'calculated');
            }
            
        } finally {
            referenceCalculationInProgress = false;
        }
    }

    //==========================================================================
    // DUAL-ENGINE ARCHITECTURE: TARGET MODEL (Column H)
    //==========================================================================

    /**
     * TARGET MODEL ENGINE: Calculate all Column H values using Application state exclusively
     */
    function calculateTargetModel() {
        // Add recursion protection
        if (targetCalculationInProgress) {
            return;
        }
        
        targetCalculationInProgress = true;
        
        try {
            // All inputs from Application state
            const appTargetEnergy = getAppNumericValue('j_32', 0);
            const appActualEnergy = getAppNumericValue('f_32', 0);
            const appTargetEmissions = getAppNumericValue('k_32', 0);
            const appActualEmissions = getAppNumericValue('g_32', 0);
            const appArea = getAppNumericValue('h_15', 1);
            const appServiceLife = getAppNumericValue('h_13', 50);
            const appEmbodiedCarbon = getAppNumericValue('i_41', 345.82);
            const useType = window.TEUI.StateManager?.getApplicationValue("d_14") || "Targeted Use";

            // Calculate Target TEUI (h_10)
            let targetTEUI = 0;
            if (appArea > 0) {
                targetTEUI = Math.round((appTargetEnergy / appArea) * 10) / 10;
            }

            // Calculate Actual TEUI (k_10) - only if in Utility Bills mode
            let actualTEUI = 0;
            if (useType === "Utility Bills" && appArea > 0) {
                actualTEUI = Math.round((appActualEnergy / appArea) * 10) / 10;
            }

            // Calculate Target Annual Carbon (h_8)
            let targetAnnualCarbon = 0;
            if (appArea > 0) {
                targetAnnualCarbon = Math.round((appTargetEmissions / appArea) * 10) / 10;
            }

            // Calculate Actual Annual Carbon (k_8) - only if in Utility Bills mode
            let actualAnnualCarbon = 0;
            if (useType === "Utility Bills" && appArea > 0) {
                actualAnnualCarbon = Math.round((appActualEmissions / appArea) * 10) / 10;
            }

            // Calculate Target Lifetime Carbon (h_6)
            let targetLifetimeCarbon = 0;
            if (appServiceLife > 0) {
                targetLifetimeCarbon = Math.round((appEmbodiedCarbon / appServiceLife + targetAnnualCarbon) * 10) / 10;
            }

            // Calculate Actual Lifetime Carbon (k_6) - only if in Utility Bills mode
            let actualLifetimeCarbon = 0;
            if (useType === "Utility Bills" && appServiceLife > 0) {
                actualLifetimeCarbon = Math.round((appEmbodiedCarbon / appServiceLife + actualAnnualCarbon) * 10) / 10;
            }

            // Use standardized helper with proper 1dp formatting for key values
            setCalculatedValue('h_10', targetTEUI, 'number-1dp');
            setCalculatedValue('h_8', targetAnnualCarbon, 'number-1dp');
            setCalculatedValue('h_6', targetLifetimeCarbon, 'number-1dp');

            // Handle Actual values (K column) - conditional based on use type
            if (useType === "Utility Bills") {
                setCalculatedValue('k_10', actualTEUI, 'number-1dp');
                setCalculatedValue('k_8', actualAnnualCarbon, 'number-1dp');
                setCalculatedValue('k_6', actualLifetimeCarbon, 'number-1dp');
            } else {
                setCalculatedValue('k_10', 'N/A', 'raw');
                setCalculatedValue('k_8', 'N/A', 'raw');
                setCalculatedValue('k_6', 'N/A', 'raw');
            }

            // Calculate percentages and explanations
            calculatePercentagesAndExplanations();
        } finally {
            targetCalculationInProgress = false;
        }
    }

    //==========================================================================
    // SUPPLEMENTARY CALCULATIONS (Percentages & Explanations)
    //==========================================================================

    function calculatePercentagesAndExplanations() {
        const useType = window.TEUI.StateManager?.getApplicationValue("d_14") || "Targeted Use";
        
        // Get calculated values from both engines
        // SIMPLIFIED: Always use ref_ prefixed fields for Reference values
        const referenceAnnualCarbon = getAppNumericValue("ref_d_8", 17.4);
        const referenceLifetimeCarbon = getAppNumericValue("ref_d_6", 24.4);
        const referenceTEUI = getAppNumericValue("ref_e_10", 341.2);
        
        const targetAnnualCarbon = getAppNumericValue("h_8", 4.7);
        const targetLifetimeCarbon = getAppNumericValue("h_6", 11.7);
        const targetTEUI = getAppNumericValue("h_10", 93.0);
        
        const actualAnnualCarbon = getAppNumericValue("k_8", 4.8);
        const actualTEUI = getAppNumericValue("k_10", 93.1);

        // Calculate T.2 Annual Carbon Percentage (j_8)
        let annualCarbonPercent = 0;
        if (referenceAnnualCarbon !== 0) {
            const valueToUse = (useType === "Utility Bills" && !isNaN(actualAnnualCarbon)) ? actualAnnualCarbon : targetAnnualCarbon;
            annualCarbonPercent = Math.round((valueToUse / referenceAnnualCarbon) * 100);
        }

        // Calculate T.3 TEUI Percentage (j_10)
        let teuiPercent = 0;
        if (referenceTEUI !== 0) {
            const valueToUse = (useType === "Utility Bills" && !isNaN(actualTEUI)) ? actualTEUI : targetTEUI;
            teuiPercent = Math.round((valueToUse / referenceTEUI) * 100);
        }

        // Only update StateManager if values have changed
        if (window.TEUI?.StateManager) {
            const currentJ8 = window.TEUI.StateManager.getApplicationValue('j_8');
            const currentJ10 = window.TEUI.StateManager.getApplicationValue('j_10');
            const newJ8 = `${annualCarbonPercent}%`;
            const newJ10 = `${teuiPercent}%`;
            
            if (currentJ8 !== newJ8) {
                window.TEUI.StateManager.setValue('j_8', newJ8, 'calculated');
            }
            if (currentJ10 !== newJ10) {
                window.TEUI.StateManager.setValue('j_10', newJ10, 'calculated');
            }
        }

        // Update explanation text for Target columns
        updateExplanationText('h_6', targetLifetimeCarbon, referenceLifetimeCarbon);
        updateExplanationText('h_8', targetAnnualCarbon, referenceAnnualCarbon);
        updateExplanationText('h_10', targetTEUI, referenceTEUI);
    }

    function updateExplanationText(fieldId, targetValue, referenceValue) {
        if (referenceValue > 0) {
            const reduction = 1 - (targetValue / referenceValue);
            const reductionPercent = Math.round(reduction * 100);
            const explanationText = `Targeted (Design) ${reductionPercent}% Reduction`;
            
            const explanationSpan = document.querySelector(`[data-field-id="${fieldId}"] .key-explanation`);
            if (explanationSpan) {
                explanationSpan.textContent = explanationText;
            }
        }
    }

    //==========================================================================
    // DISPLAY AND INTERACTION FUNCTIONS
    //==========================================================================

    function getCurrentNumericValue(element) {
        if (!element) return NaN;

        const numericSpan = element.querySelector('.numeric-value');
        let textContent = numericSpan ? numericSpan.textContent : element.textContent;

        if (!numericSpan) {
            const clone = element.cloneNode(true);
            clone.querySelectorAll('.tier-indicator, .checkmark').forEach(el => el.remove());
            textContent = clone.textContent;
        }

        const cleanedText = textContent.replace(/[^\d.-]/g, '').trim();
        return parseFloat(cleanedText);
    }

    function updateDisplayValue(fieldId, value) {
        const element = document.querySelector(`[data-field-id="${fieldId}"] .key-value, [data-field-id="${fieldId}"] .percent-value`);
        if (!element) return;

        const fieldsToAnimate = ["h_10", "k_10", "e_10"]; 

        if (fieldsToAnimate.includes(fieldId)) {
            const startValue = getCurrentNumericValue(element); 
            const endValue = parseFloat(value); 
            const duration = 500; 

            if (!isNaN(startValue) && !isNaN(endValue) && Math.abs(startValue - endValue) > 0.01) {
                if (activeAnimations[fieldId]) {
                    cancelAnimationFrame(activeAnimations[fieldId]);
                }
                const startTime = performance.now();
                const animateStep = (timestamp) => {
                    const elapsedTime = timestamp - startTime;
                    const progress = Math.min(1, elapsedTime / duration);
                    const easedProgress = 1 - Math.pow(1 - progress, 2); 
                    const currentValue = startValue + (endValue - startValue) * easedProgress; 
                    const formattedValue = window.TEUI?.formatNumber?.(currentValue, 'number-1dp') ?? currentValue.toFixed(1);

                    if (fieldId === "h_10") {
                        const tierValue = window.TEUI.StateManager?.getApplicationValue("i_10") || "tier3";
                        const tierClass = tierValue.toLowerCase().replace(' ', '-') + '-tag';
                        element.innerHTML = `<span class="tier-indicator ${tierClass}">${tierValue}</span> ${formattedValue}`;
                    } else if (fieldId === "e_10") {
                        // Reference TEUI with tier1 indicator
                        const numericSpan = element.querySelector('.numeric-value');
                        if (numericSpan) {
                            numericSpan.textContent = formattedValue;
                        } else {
                            element.innerHTML = `<span class="tier-indicator t1-tag">tier1</span> <span class="numeric-value">${formattedValue}</span>`;
                        }
                        element.classList.add('ref-value');
                    } else { 
                        element.textContent = formattedValue;
                    }

                    if (progress < 1) {
                        activeAnimations[fieldId] = requestAnimationFrame(animateStep);
                    } else {
                        const finalFormattedValue = window.TEUI?.formatNumber?.(endValue, 'number-1dp') ?? endValue.toFixed(1);
                        if (fieldId === "h_10") {
                             const tierValue = window.TEUI.StateManager?.getApplicationValue("i_10") || "tier3";
                            const tierClass = tierValue.toLowerCase().replace(' ', '-') + '-tag';
                            element.innerHTML = `<span class="tier-indicator ${tierClass}">${tierValue}</span> ${finalFormattedValue}`;
                        } else if (fieldId === "e_10") {
                            // Final Reference TEUI with tier1 indicator
                            const numericSpan = element.querySelector('.numeric-value');
                            if (numericSpan) {
                                numericSpan.textContent = finalFormattedValue;
                            } else {
                                element.innerHTML = `<span class="tier-indicator t1-tag">tier1</span> <span class="numeric-value">${finalFormattedValue}</span>`;
                            }
                            element.classList.add('ref-value');
                        } else {
                            element.textContent = finalFormattedValue;
                        }
                        delete activeAnimations[fieldId]; 
                    }
                };
                activeAnimations[fieldId] = requestAnimationFrame(animateStep);
                return; 
            }
        }

        // Standard non-animated update
        if (fieldId === "h_10") {
            const tierValue = window.TEUI.StateManager?.getApplicationValue("i_10") || "tier3";
            const tierClass = tierValue.toLowerCase().replace(' ', '-') + '-tag';
            element.innerHTML = `<span class="tier-indicator ${tierClass}">${tierValue}</span> ${value}`;
        } else if (fieldId === "e_10") {
            const numericSpanE10 = element.querySelector('.numeric-value');
            if (numericSpanE10) {
                numericSpanE10.textContent = value;
            } else {
                element.textContent = value;
            }
            if (!element.querySelector('.tier-indicator.t1-tag')) {
                const tierSpan = document.createElement('span');
                tierSpan.className = 'tier-indicator t1-tag';
                tierSpan.textContent = 'tier1';
                element.prepend(tierSpan, ' ');
            }
            element.classList.add('ref-value'); 
        } else if (fieldId === "d_6" || fieldId === "d_8") {
            element.textContent = value;
            element.classList.add('ref-value'); 
        } else if (fieldId === "j_8" || fieldId === "j_10") {
            const percentSpan = element.closest('td').querySelector('.percent-value');
            if (percentSpan) percentSpan.textContent = value;
        } else {
            element.textContent = value;
        }
    }

    function calculateTargetTier() {
        if (!window.TEUI?.StateManager) return;

        const targetTEUI_h10 = getAppNumericValue("h_10", 93.0);
        // SIMPLIFIED: Always use ref_ prefixed field for Reference value
        const referenceTEUI_e10 = getAppNumericValue("ref_e_10", 341.2);
        const standard_d13 = window.TEUI.StateManager?.getApplicationValue("d_13") || "";
        
        let reduction = 0;
        if (referenceTEUI_e10 !== 0) {
            reduction = 1 - (targetTEUI_h10 / referenceTEUI_e10);
        }

        const standardLower = standard_d13.toLowerCase();
        const isCodeStandard = standardLower.includes("nbc") || standardLower.includes("obc") || standardLower.includes("necb");
        
        let tier = "No Tier";

        if (isCodeStandard) {
            if (reduction > 0.7) tier = "tier5";
            else if (reduction > 0.6) tier = "tier4";
            else if (reduction > 0.5) tier = "tier3";
            else if (reduction > 0.4) tier = "tier2";
            else tier = "tier1"; 
        } else {
            if (reduction > 0.6) tier = "tier4";
            else if (reduction > 0.45) tier = "tier3";
            else if (reduction > 0.2) tier = "tier2";
            else if (reduction > 0.1) tier = "tier1";
        }

        // Only update StateManager if value has changed
        const currentTier = window.TEUI.StateManager.getApplicationValue("i_10");
        if (currentTier !== tier) {
        window.TEUI.StateManager.setValue("i_10", tier, "calculated");
        }
    }

    function updateTEUIDisplay() {
        const useType = window.TEUI.StateManager?.getApplicationValue("d_14") || "Targeted Use";
        const isUtilityMode = useType === "Utility Bills";

        // MIRROR TARGET/APPLICATION PATTERN: Use Reference values for Column E display
        // Get the actual Reference values calculated by calculateReferenceModel()
        const d6RefValue = window.TEUI.StateManager?.getValue("ref_d_6") || "24.4";
        const d8RefValue = window.TEUI.StateManager?.getValue("ref_d_8") || "17.4";
        const e10RefValue = window.TEUI.StateManager?.getValue("ref_e_10") || "341.2";
        
        updateDisplayValue('d_6', d6RefValue);
        updateDisplayValue('d_8', d8RefValue);
        updateDisplayValue('e_10', e10RefValue);

        // ALWAYS display Target/Application values in Column H
        const h6Val = window.TEUI.StateManager?.getApplicationValue("h_6") || "11.7";
        const h8Val = window.TEUI.StateManager?.getApplicationValue("h_8") || "4.7";
        const h10Val = window.TEUI.StateManager?.getApplicationValue("h_10") || "93.0";
        
        updateDisplayValue('h_6', h6Val);
        updateDisplayValue('h_8', h8Val);
        updateDisplayValue('h_10', h10Val);

        // Update Actual Column (K) values - conditional on Utility Bills mode
        updateDisplayValue('k_6', isUtilityMode ? (window.TEUI.StateManager?.getApplicationValue("k_6") || "11.7") : 'N/A');
        updateDisplayValue('k_8', isUtilityMode ? (window.TEUI.StateManager?.getApplicationValue("k_8") || "4.8") : 'N/A');
        
        let actualTEUIDisplay = 'N/A';
        if (isUtilityMode) {
            const actualTEUIValue_k10 = window.TEUI.StateManager?.getApplicationValue("k_10") || "93.1";
            const energyValue_f32 = getAppNumericValue("f_32", 0);
            actualTEUIDisplay = (energyValue_f32 === 0 || Math.abs(energyValue_f32) < 0.01) ? "0.0" : actualTEUIValue_k10;
        }
        updateDisplayValue('k_10', actualTEUIDisplay);

        // Update gauges
        updateAllGauges();
        checkTargetExceedsReference();
    }
    
    function updateAllGauges() {
        updateLinearGauge("lifetime-carbon-gauge");
        updateLinearGauge("annual-carbon-gauge");
        updateLinearGauge("teui-gauge");
    }

    function updateLinearGauge(gaugeId) {
        const gaugeBar = document.querySelector(`#${gaugeId} .linear-gauge-bar`);
        if (!gaugeBar) return;

        const { actualValue, referenceValue } = getGaugeValues(gaugeId);
        const percentValue = (referenceValue !== 0) ? Math.min(100, Math.max(0, 100 - ((actualValue / referenceValue) * 100))) : 0;
        const displayWidth = (percentValue === 0) ? '4px' : `${percentValue}%`;
        gaugeBar.style.width = displayWidth;

        gaugeBar.className = 'linear-gauge-bar';
        if (percentValue >= 75) gaugeBar.classList.add('gauge-excellent');
        else if (percentValue >= 50) gaugeBar.classList.add('gauge-good');
        else if (percentValue >= 25) gaugeBar.classList.add('gauge-warning');
        else gaugeBar.classList.add('gauge-poor');

        if (gaugeId === 'teui-gauge') checkTargetExceedsReference();
    }
    
    function getGaugeValues(gaugeId) {
        const useType = window.TEUI.StateManager?.getApplicationValue("d_14") || "Targeted Use";
        const isUtilityMode = useType === "Utility Bills";
        let actualFieldApp, targetFieldApp, refFieldPrefixed;
        let defaultActual, defaultTarget, defaultRef;

        if (gaugeId === "teui-gauge") {
            refFieldPrefixed = "ref_e_10"; defaultRef = 341.2;
            actualFieldApp = "k_10"; defaultActual = 93.1;
            targetFieldApp = "h_10"; defaultTarget = 93.0;
        } else if (gaugeId === "annual-carbon-gauge") {
            refFieldPrefixed = "ref_d_8"; defaultRef = 17.4;
            actualFieldApp = "k_8"; defaultActual = 4.8;
            targetFieldApp = "h_8"; defaultTarget = 4.7;
        } else if (gaugeId === "lifetime-carbon-gauge") {
            refFieldPrefixed = "ref_d_6"; defaultRef = 24.4;
            actualFieldApp = "k_6"; defaultActual = 11.7;
            targetFieldApp = "h_6"; defaultTarget = 11.7;
        } else {
            return { actualValue: 0, referenceValue: 100 };
        }

        // SIMPLIFIED: Always use ref_ prefixed value for Reference
        const referenceValue = getAppNumericValue(refFieldPrefixed, defaultRef);
        const appValueForGauge = getAppNumericValue(isUtilityMode ? actualFieldApp : targetFieldApp, isUtilityMode ? defaultActual : defaultTarget);
        
        return { actualValue: appValueForGauge, referenceValue };
    }

    function checkTargetExceedsReference() {
        const targetValue = getAppNumericValue("h_10", 93.0);
        // SIMPLIFIED: Always use ref_ prefixed field for Reference value
        const referenceValue = getAppNumericValue("ref_e_10", 341.2);
        
        const gaugeContainer = document.getElementById('teui-gauge')?.closest('.key-title-container');
        const teuiTitleEl = gaugeContainer?.querySelector('.key-title-combined');
        
        if (!teuiTitleEl) return;

        let warningEl = teuiTitleEl.querySelector('.teui-warning');
        if (targetValue > referenceValue) {
            if (!warningEl) {
                warningEl = document.createElement('span');
                warningEl.className = 'teui-warning';
                warningEl.textContent = ' TARGET>REFERENCE!';
                teuiTitleEl.appendChild(warningEl);
            }
        } else {
            warningEl?.remove();
        }
    }
    
    //==========================================================================
    // DUAL-ENGINE ORCHESTRATION
    //==========================================================================

    // Add recursion protection flag
    let calculationInProgress = false;
    let isInitializing = false;

    function runAllCalculations() {
        // Add recursion protection
        if (calculationInProgress) {
            return;
        }
        
        calculationInProgress = true;
        
        try {
            // Run both engines independently
            calculateReferenceModel();  // Calculates Column E values using Reference state
            calculateTargetModel();     // Calculates Column H values using Application state
            
            // Calculate tiers and display updates
            calculateTargetTier();      // Calculate i_10 (Target Tier for h_10)
            updateTEUIDisplay();        // Update all visual displays
        } finally {
            calculationInProgress = false;
        }
    }

    //==========================================================================
    // INITIALIZATION
    //==========================================================================

    function initializeEventHandlers() {
        if (!window.TEUI || !window.TEUI.StateManager) return;

        // Only listen to TRUE INPUT fields that affect calculations, not calculated outputs
        // CRITICAL: Do NOT listen to calculated fields like j_32, k_32 as they create infinite loops
        const inputFieldsToWatch = [
            "i_41",  // Embodied carbon (user input)
            "h_13",  // Service life (user input)
            "h_15",  // Conditioned area (user input)
            "d_51",  // Energy source (user dropdown)
            "d_14",  // Use type (user dropdown)
            "d_13"   // Reference standard (user dropdown)
            // REMOVED: j_32, k_32, f_32, g_32 - these are calculated by other sections
        ];

        // Listen to user input fields
        inputFieldsToWatch.forEach(fieldId => {
            window.TEUI.StateManager.addListener(fieldId, (newValue, oldValue, sourceFieldId) => {
                // Debounce for d_51 which can trigger rapid changes
                if (fieldId === 'd_51') {
                    setTimeout(() => {
                        runAllCalculations();
                    }, 50);
                } else {
                runAllCalculations();
                }
            });
        });

        // Listen to calculated fields from other sections that Section 01 depends on
        const calculatedFieldsToWatch = [
            "j_32",     // Target energy total (from Section 04)
            "k_32",     // Target emissions total (from Section 04)
            "f_32",     // Actual energy total (from Section 04)
            "g_32",     // Actual emissions total (from Section 04)
            "ref_j_32", // Reference energy total (from Section 04)
            "ref_k_32", // Reference emissions total (from Section 04)
            "ref_i_39", // Reference embodied carbon (from Section 05)
            "ref_h_136" // CRITICAL: Reference TEUI from Section 15 (final Reference calculation)
        ];

        calculatedFieldsToWatch.forEach(fieldId => {
            window.TEUI.StateManager.addListener(fieldId, (newValue, oldValue, sourceFieldId) => {
                // Only recalculate if the value actually changed
                if (newValue !== oldValue) {
                    runAllCalculations();
                }
            });
        });
        
        runAllCalculations();
    }

    function addCustomStyling() {
        let styleElement = document.getElementById('key-values-custom-style');
        if (!styleElement) {
            styleElement = document.createElement('style');
            styleElement.id = 'key-values-custom-style';
            document.head.appendChild(styleElement);
            styleElement.textContent = customCSS;
        }
    }

    function removeToggleIcon() {
        const toggleIcon = document.querySelector('#keyValues .section-header .toggle-icon');
        toggleIcon?.remove();
    }
    
    function onSectionRendered() {
        addCustomStyling();
        renderKeyValuesSection();
        removeToggleIcon();
        initializeEventHandlers();
    }
    
    let isInitialized = false;

    function initializeOnce() {
        if (isInitialized) return;
        const sectionElement = document.getElementById('keyValues');
        if (sectionElement && window.TEUI?.StateManager) {
             onSectionRendered();
             isInitialized = true;
        }
    }
    
    //==========================================================================
    // PUBLIC API
    //==========================================================================
    
    return {
        getFields: () => fields,
        getDropdownOptions: () => ({}),
        getLayout: () => ({ rows: [] }),
        onSectionRendered: onSectionRendered,
        runAllCalculations: runAllCalculations
    };
})();