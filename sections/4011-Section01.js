/**
 * 4011-Section01.js
 * Key Values (Section 1) module for TEUI Calculator 4.011
 * 
 * Direct HTML rendering for precise styling, dynamic calculations for key metrics.
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
        // Condensed HTML structure for brevity
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
    // PART 4: CORE LOGIC & CALCULATIONS
    //==========================================================================

    /**
     * Helper function to safely get numeric values from the APPLICATION state.
     */
    function getAppNumericValue(fieldId, defaultValue = 0) {
        let value = defaultValue;
        // Use the new explicit getter for Application State
        const stateValue = window.TEUI?.StateManager?.getApplicationStateValue(fieldId);
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
        // Use the new explicit getter for Reference State
        const stateValue = window.TEUI?.StateManager?.getActiveReferenceModeValue(fieldId);
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
     * Parses the *currently displayed* numeric value from a key value cell,
     * handling potential embedded spans (like the tier indicator).
     */
    function getCurrentNumericValue(element) {
        if (!element) return NaN;

        // Find the specific span holding the number if it exists (like for e_10)
        const numericSpan = element.querySelector('.numeric-value');
        let textContent = numericSpan ? numericSpan.textContent : element.textContent;

        // If no specific span, strip out any child elements (like the tier span in h_10)
        if (!numericSpan) {
            // Clone the element to avoid modifying the original temporarily
            const clone = element.cloneNode(true);
            // Remove known non-numeric child spans
            clone.querySelectorAll('.tier-indicator, .checkmark').forEach(el => el.remove());
            textContent = clone.textContent;
        }

        const cleanedText = textContent.replace(/[^\d.-]/g, '').trim(); // Keep digits, dot, minus
        return parseFloat(cleanedText);
    }

    /**
     * Update display value for a specific field
     * Includes animation for specific key TEUI/Carbon fields.
     */
    function updateDisplayValue(fieldId, value) {
        const element = document.querySelector(`[data-field-id="${fieldId}"] .key-value, [data-field-id="${fieldId}"] .percent-value`);
        if (!element) return;

        const fieldsToAnimate = ["h_10", "k_10"]; 

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
                    const formattedValue = currentValue.toFixed(1);

                    if (fieldId === "h_10") {
                        // Tier for h_10 (Target) comes from i_10 (Application State)
                        const tierValue = window.TEUI.StateManager?.getApplicationStateValue("i_10") || "tier3";
                        const tierClass = tierValue.toLowerCase().replace(' ', '-') + '-tag';
                        element.innerHTML = `<span class="tier-indicator ${tierClass}">${tierValue}</span> ${formattedValue}`;
                    } else { 
                        element.textContent = formattedValue;
                    }

                    if (progress < 1) {
                        activeAnimations[fieldId] = requestAnimationFrame(animateStep);
                    } else {
                        const finalFormattedValue = endValue.toFixed(1);
                        if (fieldId === "h_10") {
                             const tierValue = window.TEUI.StateManager?.getApplicationStateValue("i_10") || "tier3";
                            const tierClass = tierValue.toLowerCase().replace(' ', '-') + '-tag';
                            element.innerHTML = `<span class="tier-indicator ${tierClass}">${tierValue}</span> ${finalFormattedValue}`;
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
        if (fieldId === "h_10") { // Target TEUI
            const tierValue = window.TEUI.StateManager?.getApplicationStateValue("i_10") || "tier3";
            const tierClass = tierValue.toLowerCase().replace(' ', '-') + '-tag';
            element.innerHTML = `<span class="tier-indicator ${tierClass}">${tierValue}</span> ${value}`;
        } else if (fieldId === "e_10") { // Reference TEUI
            const numericSpanE10 = element.querySelector('.numeric-value');
            if (numericSpanE10) numericSpanE10.textContent = value;
            // Ensure "tier1" and styling for Reference column is always present
            if (!element.querySelector('.tier-indicator.t1-tag')) {
                const tierSpan = document.createElement('span');
                tierSpan.className = 'tier-indicator t1-tag';
                tierSpan.textContent = 'tier1';
                element.prepend(tierSpan, ' ');
            }
            element.classList.add('ref-value'); 
        } else if (fieldId === "d_6" || fieldId === "d_8") { // Reference Carbon Values
            element.textContent = value;
            element.classList.add('ref-value'); 
        } else if (fieldId === "j_8" || fieldId === "j_10") { // Percentage Values
            const percentSpan = element.closest('td').querySelector('.percent-value');
            if (percentSpan) percentSpan.textContent = value;
        } else { // All other Target/Actual values (h_6, k_6, h_8, k_8, k_10)
            element.textContent = value;
        }
    }

    /**
     * Calculate TEUI values (T.3) for Target (H) and Actual (K) columns.
     */
    function calculateTargetActualTEUI() {
        const actualEnergy = getAppNumericValue('f_32', 0); // App State
        const targetEnergy = getAppNumericValue('j_32', 0); // App State
        const area = getAppNumericValue('h_15', 1);         // App State
        const useType = window.TEUI.StateManager?.getApplicationStateValue("d_14") || "Targeted Use"; // App State
        let actualTEUI = 0, targetTEUI = 0;

        if (area > 0) {
            targetTEUI = Math.round((targetEnergy / area) * 10) / 10;
            if (useType === "Utility Bills") {
                actualTEUI = Math.round((actualEnergy / area) * 10) / 10;
            }
        }

        if (window.TEUI?.StateManager) {
            window.TEUI.StateManager.setValue('h_10', targetTEUI.toFixed(1), 'calculated');
            if (useType === "Utility Bills") {
                window.TEUI.StateManager.setValue('k_10', actualTEUI.toFixed(1), 'calculated');
            } else {
                 // Ensure k_10 is cleared or set to N/A if not in utility bill mode at StateManager level
                 window.TEUI.StateManager.setValue('k_10', 'N/A', 'calculated');
            }
        }
        // Display updates will be handled by updateTEUIDisplay
        return true; 
    }
    
    /**
     * Calculate TEUI value (T.3) for Reference (E) column.
     */
    function calculateReferenceTEUI() {
        console.log("[S01 REFAC] Entered calculateReferenceTEUI");
        const currentStandard = window.TEUI.StateManager?.getApplicationStateValue("d_13");
        let referenceTEUI = 0;

        if (currentStandard === "OBC SB10 5.5-6 Z6") {
            referenceTEUI = 341.2;
            console.log(`[S01 REFAC] calculateReferenceTEUI - OBC SB10 5.5-6 Z6 detected. Using placeholder: ${referenceTEUI}`);
        } else {
            const referenceTargetEnergy = getRefNumericValue('j_32', 0);
            const referenceArea = getRefNumericValue('h_15', 1);
            console.log(`[S01 REFAC] calculateReferenceTEUI - Inputs: refTargetEnergy = ${referenceTargetEnergy}, refArea = ${referenceArea}`);
            if (referenceArea > 0) {
                referenceTEUI = Math.round((referenceTargetEnergy / referenceArea) * 10) / 10;
            }
        }

        if (window.TEUI?.StateManager) {
            window.TEUI.StateManager.setValue('e_10', referenceTEUI.toFixed(1), 'calculated');
        }
        // Display updates will be handled by updateTEUIDisplay
        return true;
    }

    /**
     * Calculate Annual Carbon values (T.2) for Target (H) and Actual (K) columns.
     */
    function calculateTargetActualAnnualCarbon() {
        const targetEmissions = getAppNumericValue("k_32", 0); // App State
        const actualEmissions = getAppNumericValue("g_32", 0); // App State
        const area = getAppNumericValue("h_15", 1);         // App State
        const useType = window.TEUI.StateManager?.getApplicationStateValue("d_14") || "Targeted Use"; // App State
        let targetValue_h8 = 0, actualValue_k8 = 0;

        if (area > 0) {
            targetValue_h8 = Math.round((targetEmissions / area) * 10) / 10;
            if (useType === "Utility Bills") {
                 actualValue_k8 = Math.round((actualEmissions / area) * 10) / 10;
            }
        }

        if (window.TEUI?.StateManager) {
            window.TEUI.StateManager.setValue('h_8', targetValue_h8.toFixed(1), 'calculated');
            if (useType === "Utility Bills") {
                window.TEUI.StateManager.setValue('k_8', actualValue_k8.toFixed(1), 'calculated'); 
            } else {
                window.TEUI.StateManager.setValue('k_8', 'N/A', 'calculated');
            }
        }
        
        // Update explanation text for Target Annual Carbon (h_8)
        const reference_d8_for_h8_text = getAppNumericValue("d_8", 1); 
        if (reference_d8_for_h8_text !== 0) {
            const reduction_t2 = 1 - (targetValue_h8 / reference_d8_for_h8_text);
            const reductionPercent_t2 = Math.round(reduction_t2 * 100);
            const explanationText_t2 = `Targeted (Design) ${reductionPercent_t2}% Reduction`;
            const targetExplanationSpan_t2 = document.querySelector('[data-field-id="h_8"] .key-explanation');
            if (targetExplanationSpan_t2) targetExplanationSpan_t2.textContent = explanationText_t2;
        }
        
        calculateTargetActualLifetimeCarbon(); // Depends on h_8 and k_8
    }

    /**
     * Calculate Annual Carbon value (T.2) for Reference (E) column.
     */
    function calculateReferenceAnnualCarbon() {
        console.log("[S01 REFAC] Entered calculateReferenceAnnualCarbon");
        const currentStandard = window.TEUI.StateManager?.getApplicationStateValue("d_13");
        let referenceValue_d8 = 0;

        if (currentStandard === "OBC SB10 5.5-6 Z6") {
            referenceValue_d8 = 17.4;
            console.log(`[S01 REFAC] calculateReferenceAnnualCarbon - OBC SB10 5.5-6 Z6 detected. Using placeholder: ${referenceValue_d8}`);
        } else {
            const referenceTargetEmissions = getRefNumericValue("k_32", 0);
            const referenceArea = getRefNumericValue("h_15", 1);
            console.log(`[S01 REFAC] calculateReferenceAnnualCarbon - Inputs: refTargetEmissions = ${referenceTargetEmissions}, refArea = ${referenceArea}`);
            if (referenceArea > 0) {
                referenceValue_d8 = Math.round((referenceTargetEmissions / referenceArea) * 10) / 10;
            }
        }

        if (window.TEUI?.StateManager) {
            window.TEUI.StateManager.setValue('d_8', referenceValue_d8.toFixed(1), 'calculated');
        }
        calculateReferenceLifetimeCarbon(); // Depends on d_8
    }

    /**
     * Calculate Lifetime Carbon values (T.1) for Target (H) and Actual (K) columns.
     */
    function calculateTargetActualLifetimeCarbon() {
        let embodiedCarbon_i41 = getAppNumericValue("i_41", 0); // App State
        if (embodiedCarbon_i41 === 0) embodiedCarbon_i41 = 345.82; // Default if app state is 0
        
        const serviceLife_h13 = getAppNumericValue("h_13", 50); // App State
        const annualTarget_h8 = getAppNumericValue("h_8", 0);  // App State (already calculated)
        const annualActual_k8 = getAppNumericValue("k_8", 0);  // App State (already calculated)
        const useType = window.TEUI.StateManager?.getApplicationStateValue("d_14") || "Targeted Use"; // App State
        let targetValue_h6 = 0, actualValue_k6 = 0;

        if (serviceLife_h13 > 0) {
            targetValue_h6 = Math.round((embodiedCarbon_i41 / serviceLife_h13 + annualTarget_h8) * 10) / 10;
            if (useType === "Utility Bills" && !isNaN(annualActual_k8)) { // Ensure k_8 is a number
                actualValue_k6 = Math.round((embodiedCarbon_i41 / serviceLife_h13 + annualActual_k8) * 10) / 10;
            }
        }

        if (window.TEUI?.StateManager) {
            window.TEUI.StateManager.setValue('h_6', targetValue_h6.toFixed(1), 'calculated');
            if (useType === "Utility Bills" && !isNaN(annualActual_k8)) {
                window.TEUI.StateManager.setValue('k_6', actualValue_k6.toFixed(1), 'calculated');
            } else {
                 window.TEUI.StateManager.setValue('k_6', 'N/A', 'calculated');
            }
        }
        
        // Update explanation text for Target Lifetime Carbon (h_6)
        const reference_d6_for_h6_text = getAppNumericValue("d_6", 1); 
        if (reference_d6_for_h6_text !== 0) {
            const reduction_t1 = 1 - (targetValue_h6 / reference_d6_for_h6_text);
            const reductionPercent_t1 = Math.round(reduction_t1 * 100);
            const explanationText_t1 = `Targeted (Design) ${reductionPercent_t1}% Reduction`;
            const targetExplanationSpan_t1 = document.querySelector('[data-field-id="h_6"] .key-explanation');
            if (targetExplanationSpan_t1) targetExplanationSpan_t1.textContent = explanationText_t1;
        }
    }

    /**
     * Calculate Lifetime Carbon value (T.1) for Reference (E) column.
     */
    function calculateReferenceLifetimeCarbon() {
        console.log("[S01 REFAC] Entered calculateReferenceLifetimeCarbon");
        const currentStandard = window.TEUI.StateManager?.getApplicationStateValue("d_13");
        let referenceValue_d6 = 0;

        if (currentStandard === "OBC SB10 5.5-6 Z6") {
            referenceValue_d6 = 24.4;
            console.log(`[S01 REFAC] calculateReferenceLifetimeCarbon - OBC SB10 5.5-6 Z6 detected. Using placeholder: ${referenceValue_d6}`);
        } else {
            let embodiedCarbon_i41_ref = getRefNumericValue("i_41", 0); // Ref State
            if (embodiedCarbon_i41_ref === 0) embodiedCarbon_i41_ref = 345.82; // Default if ref state is 0
            
            const serviceLife_h13_ref = getRefNumericValue("h_13", 50);    // Ref State
            const annualReference_d8 = getRefNumericValue("d_8", 0);     // Ref State (already calculated by calculateReferenceAnnualCarbon)
            console.log(`[S01 REFAC] calculateReferenceLifetimeCarbon - Inputs: embodied_ref = ${embodiedCarbon_i41_ref}, serviceLife_ref = ${serviceLife_h13_ref}, annualRefCarbon_d8 = ${annualReference_d8}`);
            if (serviceLife_h13_ref > 0) {
                referenceValue_d6 = Math.round((embodiedCarbon_i41_ref / serviceLife_h13_ref + annualReference_d8) * 10) / 10;
            }
        }

        if (window.TEUI?.StateManager) {
            window.TEUI.StateManager.setValue('d_6', referenceValue_d6.toFixed(1), 'calculated');
        }
    }

    /**
     * Update Annual Carbon percentage (T.2 % J8)
     */
    function updateAnnualCarbonPercentage() {
        const useType = window.TEUI.StateManager?.getApplicationStateValue("d_14") || "Targeted Use";
        const reference = getAppNumericValue("d_8", 1); // Use App value for d_8 (which has stopgap)
        const target = getAppNumericValue("h_8", 0);    // Use Application value for h_8
        const actual = getAppNumericValue("k_8", 0);    // Use Application value for k_8
        let percent = 0;

        if (reference !== 0) {
            const valueToUse = (useType === "Utility Bills" && !isNaN(actual)) ? actual : target;
            percent = Math.round((valueToUse / reference) * 100);
        }
        const displayValue = `${percent}%`;

        if (window.TEUI?.StateManager) {
            window.TEUI.StateManager.setValue('j_8', displayValue, 'calculated');
        }
        // Display update will be handled by updateTEUIDisplay

        const checkmark = document.querySelector('[data-field-id="j_8"] .checkmark');
        if (checkmark) checkmark.style.display = (percent <= 50 && percent > 0) ? 'inline-block' : 'none'; // Show check if reduction is positive and significant
    }

    /**
     * Update TEUI percentage (T.3 % J10)
     */
    function updateTEUIPercentage() {
        const useType = window.TEUI.StateManager?.getApplicationStateValue("d_14") || "Targeted Use";
        const reference = getAppNumericValue("e_10", 1); // Use App value for e_10 (which has stopgap)
        const target = getAppNumericValue("h_10", 0);    // Use Application value for h_10
        const actual = getAppNumericValue("k_10", 0);    // Use Application value for k_10
        let percent = 0;

        if (reference !== 0) {
            const valueToUse = (useType === "Utility Bills" && !isNaN(actual)) ? actual : target;
            percent = Math.round((valueToUse / reference) * 100);
        }
        const displayValue = `${percent}%`;

        if (window.TEUI?.StateManager) {
            window.TEUI.StateManager.setValue("j_10", displayValue, "calculated");
        }
        // Display update will be handled by updateTEUIDisplay

        const checkmark = document.querySelector('[data-field-id="j_10"] .checkmark');
        if (checkmark) checkmark.style.display = (percent <= 50 && percent > 0) ? 'inline-block' : 'none'; // Show check if reduction is positive and significant

        checkTargetExceedsReference();
    }

    /**
     * Calculate the target TEUI tier (i_10) based on reduction and standard.
     * This tier is for the TARGET column (H10).
     */
    function calculateTargetTier() {
        if (!window.TEUI?.StateManager) return;

        const targetTEUI_h10 = getAppNumericValue("h_10", 0);    // App State for H10
        const referenceTEUI_e10 = getAppNumericValue("e_10", 1); // App State for E10 (which has stopgap)
        const standard_d13 = window.TEUI.StateManager?.getApplicationStateValue("d_13") || ""; // App State for selected standard
        
        let reduction = 0;
        if (referenceTEUI_e10 !== 0) { // Avoid division by zero
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
        } else { // Other standards (or self-defined)
            if (reduction > 0.6) tier = "tier4";
            else if (reduction > 0.45) tier = "tier3";
            else if (reduction > 0.2) tier = "tier2";
            else if (reduction > 0.1) tier = "tier1";
        }

        window.TEUI.StateManager.setValue("i_10", tier, "calculated"); // i_10 is the tier for Target (h_10)
        
        // Update the explanation text for the Target cell (h_10)
        const reductionPercent = Math.round(reduction * 100);
        // Ensure explanation text reflects a positive reduction or notes if it's an increase
        let explanationText;
        if (reductionPercent >=0) {
            explanationText = `Targeted (Design) ${reductionPercent}% Reduction`;
        } else {
            explanationText = `Targeted (Design) ${Math.abs(reductionPercent)}% Increase`;
        }
        const targetExplanationSpan = document.querySelector('[data-field-id="h_10"] .key-explanation');
        if (targetExplanationSpan) {
            targetExplanationSpan.textContent = explanationText;
        }
    }

    /**
     * Update the visual display of all key values in Section 01.
     * This function now fetches values from their correct contexts.
     */
    function updateTEUIDisplay() {
        const useType = window.TEUI.StateManager?.getApplicationStateValue("d_14") || "Targeted Use"; // App State
        const isUtilityMode = useType === "Utility Bills";

        // Update Target Column (H) values - from Application State
        updateDisplayValue('h_6', window.TEUI.StateManager?.getApplicationStateValue("h_6") || "0.0");
        updateDisplayValue('h_8', window.TEUI.StateManager?.getApplicationStateValue("h_8") || "0.0");
        updateDisplayValue('h_10', window.TEUI.StateManager?.getApplicationStateValue("h_10") || "0.0"); // Tier is handled by updateDisplayValue

        // Update Actual Column (K) values - from Application State, conditional on useType
        updateDisplayValue('k_6', isUtilityMode ? (window.TEUI.StateManager?.getApplicationStateValue("k_6") || "0.0") : 'N/A');
        updateDisplayValue('k_8', isUtilityMode ? (window.TEUI.StateManager?.getApplicationStateValue("k_8") || "0.0") : 'N/A');
        
        let actualTEUIDisplay = 'N/A';
        if (isUtilityMode) {
            const actualTEUIValue_k10 = window.TEUI.StateManager?.getApplicationStateValue("k_10") || "0.0";
            const energyValue_f32 = getAppNumericValue("f_32", 0); // App State
            actualTEUIDisplay = (energyValue_f32 === 0 || Math.abs(energyValue_f32) < 0.01) ? "0.0" : actualTEUIValue_k10;
        }
        updateDisplayValue('k_10', actualTEUIDisplay);

        // Update Reference Column (E/D) values - from Reference State (via StateManager calculated values)
        // These values in StateManager (d_6, d_8, e_10) should now be correctly populated by the new reference calculation functions
        // **Correction**: Always source these from getApplicationStateValue, as the reference calculation functions store their results there.
        updateDisplayValue('d_6', window.TEUI.StateManager?.getApplicationStateValue("d_6") || "0.0"); 
        updateDisplayValue('d_8', window.TEUI.StateManager?.getApplicationStateValue("d_8") || "0.0");
        updateDisplayValue('e_10', window.TEUI.StateManager?.getApplicationStateValue("e_10") || "0.0"); 

        // Update percentages (j_8, j_10) - these functions now use correct app/ref values
        updateAnnualCarbonPercentage();
        updateTEUIPercentage();

        // Update gauges - getGaugeValues will now correctly source app/ref values
        updateAllGauges();
        checkTargetExceedsReference(); // Check after all values are updated
    }
    
    /**
     * Update all gauges based on current values
     */
    function updateAllGauges() {
        updateLinearGauge("lifetime-carbon-gauge");
        updateLinearGauge("annual-carbon-gauge");
        updateLinearGauge("teui-gauge");
    }

    /**
     * Update a specific gauge bar
     */
    function updateLinearGauge(gaugeId) {
        const gaugeBar = document.querySelector(`#${gaugeId} .linear-gauge-bar`);
        if (!gaugeBar) return;

        const { actualValue, referenceValue } = getGaugeValues(gaugeId);
        const percentValue = (referenceValue !== 0) ? Math.min(100, Math.max(0, 100 - ((actualValue / referenceValue) * 100))) : 0;
        const displayWidth = (percentValue === 0) ? '4px' : `${percentValue}%`;
        gaugeBar.style.width = displayWidth;

        gaugeBar.className = 'linear-gauge-bar'; // Reset classes
        if (percentValue >= 75) gaugeBar.classList.add('gauge-excellent');
        else if (percentValue >= 50) gaugeBar.classList.add('gauge-good');
        else if (percentValue >= 25) gaugeBar.classList.add('gauge-warning');
        else gaugeBar.classList.add('gauge-poor');

        if (gaugeId === 'teui-gauge') checkTargetExceedsReference();
    }
    
    /**
     * Get gauge values based on current mode
     */
    function getGaugeValues(gaugeId) {
        const useType = window.TEUI.StateManager?.getApplicationStateValue("d_14") || "Targeted Use"; // App State
        const isUtilityMode = useType === "Utility Bills";
        let actualFieldApp, targetFieldApp, refFieldApp; // Changed refFieldRef to refFieldApp
        let defaultActual, defaultTarget, defaultRef;

        if (gaugeId === "teui-gauge") {
            refFieldApp = "e_10"; defaultRef = 341.2;       // App State (stopgap) for e_10
            actualFieldApp = "k_10"; defaultActual = 93.1;   // App State for k_10
            targetFieldApp = "h_10"; defaultTarget = 93.0;   // App State for h_10
        } else if (gaugeId === "annual-carbon-gauge") {
            refFieldApp = "d_8"; defaultRef = 17.4;        // App State (stopgap) for d_8
            actualFieldApp = "k_8"; defaultActual = 4.8;    // App State for k_8
            targetFieldApp = "h_8"; defaultTarget = 4.7;    // App State for h_8
        } else if (gaugeId === "lifetime-carbon-gauge") {
            refFieldApp = "d_6"; defaultRef = 24.4;        // App State (stopgap) for d_6
            actualFieldApp = "k_6"; defaultActual = 11.7;   // App State for k_6
            targetFieldApp = "h_6"; defaultTarget = 11.7;   // App State for h_6
        } else {
            return { actualValue: 0, referenceValue: 100 }; // Fallback
        }

        // Fetch values from their designated states
        const referenceValue = getAppNumericValue(refFieldApp, defaultRef); // Use getAppNumericValue for ref baselines
        const appValueForGauge = getAppNumericValue(isUtilityMode ? actualFieldApp : targetFieldApp, isUtilityMode ? defaultActual : defaultTarget);
        
        return { actualValue: appValueForGauge, referenceValue };
    }

    /**
     * Check if Target TEUI exceeds Reference TEUI and show warning text
     */
    function checkTargetExceedsReference() {
        const targetValue = getAppNumericValue("h_10", 0);    // App State for H10
        const referenceValue = getAppNumericValue("e_10", 1); // App State for E10 (which has stopgap)
        
        // More specific selector: Find the gauge, go up to the container, then find the title.
        const gaugeContainer = document.getElementById('teui-gauge')?.closest('.key-title-container');
        const teuiTitleEl = gaugeContainer?.querySelector('.key-title-combined');
        
        if (!teuiTitleEl) {
            // console.warn("Could not find specific T.3 TEUI title element for warning."); // Keep commented out unless debugging
            return;
        }

        let warningEl = teuiTitleEl.querySelector('.teui-warning');
        if (targetValue > referenceValue) {
            // console.log(`Check: Target ${targetValue} > Ref ${referenceValue}. Adding warning.`); // Keep commented out
            if (!warningEl) {
                warningEl = document.createElement('span');
                warningEl.className = 'teui-warning';
                warningEl.textContent = ' TARGET>REFERENCE!';
                teuiTitleEl.appendChild(warningEl);
            }
                } else {
            // console.log(`Check: Target ${targetValue} <= Ref ${referenceValue}. Removing warning.`); // Keep commented out
            warningEl?.remove();
        }
    }
    
    /**
     * Update the cost intensity indicators ($/m²).
     * Uses placeholder totals until cost calcs are integrated.
     */
    function updateCostIndicators() {
        const area = getAppNumericValue("h_15", 1);
        const useType = window.TEUI.StateManager?.getApplicationStateValue("d_14") || "Targeted Use";
        if (area === 0) return; 

        // --- Get Unit Costs (Section 2 / T.6.7) ---
        const costElec_l12 = getAppNumericValue("l_12", 0.13);
        const costGas_l13 = getAppNumericValue("l_13", 0.507);
        const costPropane_l14 = getAppNumericValue("l_14", 1.62);
        const costWood_l15 = getAppNumericValue("l_15", 180.00);
        const costOil_l16 = getAppNumericValue("l_16", 1.50);

        // --- Get Target Energy Amounts (Section 4) ---
        const targetElec_j27 = getAppNumericValue("j_27", 0);
        const targetGas_h28 = getAppNumericValue("h_28", 0); // Gas amount is in H col
        const targetPropane_h29 = getAppNumericValue("h_29", 0);
        const targetOil_h30 = getAppNumericValue("h_30", 0);
        const targetWood_h31 = getAppNumericValue("h_31", 0);
        
        // --- Get Actual Energy Amounts (Section 4) ---
        const actualElec_f27 = getAppNumericValue("f_27", 0);
        const actualGas_d28 = getAppNumericValue("d_28", 0);
        const actualPropane_d29 = getAppNumericValue("d_29", 0);
        const actualOil_d30 = getAppNumericValue("d_30", 0);
        const actualWood_d31 = getAppNumericValue("d_31", 0);

        // --- Calculate Target Total Cost (P9 Equivalent) ---
        const targetCostTotal = 
            (targetElec_j27 * costElec_l12) +
            (targetGas_h28 * costGas_l13) +
            (targetPropane_h29 * costPropane_l14) +
            (targetOil_h30 * costOil_l16) +
            (targetWood_h31 * costWood_l15);
            
        // --- Calculate Actual Total Cost (L9 Equivalent - Used in Utility Bills mode) ---
        const actualCostTotal_Utility = 
            (actualElec_f27 * costElec_l12) +
            (actualGas_d28 * costGas_l13) +
            (actualPropane_d29 * costPropane_l14) +
            (actualOil_d30 * costOil_l16) +
            (actualWood_d31 * costWood_l15);

        // --- Determine Actual Cost based on Mode (K9 Equivalent) ---
        const actualCostTotal = (useType === "Utility Bills") ? actualCostTotal_Utility : targetCostTotal;

        // --- Reference Cost (Placeholder - R9 Equivalent) ---
        const referenceCostTotal = 23146.01; // Static placeholder from R9

        // --- Calculate Intensities --- 
        const refIntensity = referenceCostTotal / area;
        const targetIntensity = targetCostTotal / area;
        const actualIntensity = actualCostTotal / area;

        // Format as currency per m²
        const formatCostIntensity = (value) => `$ ${value.toFixed(2)}/m²`;

        // Update DOM elements
        const refCostEl = document.querySelector('[data-field-id="e_10"] .cost-indicator.ref-cost');
        const targetCostEl = document.querySelector('[data-field-id="h_10"] .cost-indicator');
        const actualCostEl = document.querySelector('[data-field-id="k_10"] .cost-indicator');

        if (refCostEl) refCostEl.textContent = formatCostIntensity(refIntensity);
        if (targetCostEl) targetCostEl.textContent = formatCostIntensity(targetIntensity);
        if (actualCostEl) actualCostEl.textContent = formatCostIntensity(actualIntensity);
    }

    /**
     * Run all primary calculations for Section 1 in the correct order.
     */
    function runAllCalculations() {
        // Calculate Target (H) and Actual (K) columns first
        calculateTargetActualAnnualCarbon(); // Calculates h_8, k_8 and then calls calculateTargetActualLifetimeCarbon (for h_6, k_6)
        calculateTargetActualTEUI();         // Calculates h_10, k_10

        // Then calculate Reference (E/D) column values
        calculateReferenceAnnualCarbon();    // Calculates d_8 and then calls calculateReferenceLifetimeCarbon (for d_6)
        calculateReferenceTEUI();            // Calculates e_10

        // Then calculate dependent display elements like Tiers and Percentages
        calculateTargetTier();   // Calculates i_10 (Target Tier for h_10) based on h_10 (App) and e_10 (Ref)
        updateCostIndicators();  // Update cost indicators
        
        // Finally, update all displays in Section01
        updateTEUIDisplay();     // Syncs all display values, percentages, and gauges using updated state
    }

    /**
     * Initialize event handlers for this section
     */
    function initializeEventHandlers() {
        if (!window.TEUI || !window.TEUI.StateManager) return;

        const fieldsToWatch = [
            "d_6", "h_6", "k_6", "d_8", "h_8", "k_8", "j_8", 
            "e_10", "f_10", "h_10", "i_10", "k_10", "j_10", 
            "i_41", "h_13", "k_32", "g_32", "h_15", "f_32", "d_14",
            "d_13" // Added Reference Standard dependency for tier calc
        ];

        // Add newly required dependencies for cost calculations
        const costDependencies = [ "l_12", "l_13", "l_14", "l_15", "l_16" ];
        const targetEnergyDependencies = [ "j_27", "h_28", "h_29", "h_30", "h_31" ];
        const actualEnergyDependencies = [ "f_27", "d_28", "d_29", "d_30", "d_31" ];

        // Add dependencies if not already watched
        [...costDependencies, ...targetEnergyDependencies, ...actualEnergyDependencies].forEach(dep => {
            if (!fieldsToWatch.includes(dep)) {
                fieldsToWatch.push(dep);
            }
        });

        // Add h_15 listener specifically for cost indicators if not already handled
        if (!fieldsToWatch.includes("h_15")) {
            fieldsToWatch.push("h_15");
        }

        fieldsToWatch.forEach(fieldId => {
            window.TEUI.StateManager.addListener(fieldId, (newValue, oldValue, sourceFieldId) => {
                // Determine which calculation to trigger based on the changed field
                // This logic might need refinement to ensure only necessary re-calcs run.
                // For now, runAllCalculations covers all updates.
                
                // Simplification: For any watched field change, run all S01 calculations.
                // This ensures E, H, K columns and all derived percentages/tiers/gauges are updated.
                // Specific optimization of listener logic can be a future step if performance issues arise.
                runAllCalculations();
            });
        });
        
        // Initial calculations
        runAllCalculations();
    }

    /**
     * Add custom styling to the page
     */
    function addCustomStyling() {
        let styleElement = document.getElementById('key-values-custom-style');
        if (!styleElement) {
            styleElement = document.createElement('style');
            styleElement.id = 'key-values-custom-style';
            document.head.appendChild(styleElement);
            styleElement.textContent = customCSS;
        }
    }

    /**
     * Remove the toggle icon from the section header
     */
    function removeToggleIcon() {
        const toggleIcon = document.querySelector('#keyValues .section-header .toggle-icon');
        toggleIcon?.remove();
    }
    
    /**
     * Called when section is first rendered or needs full refresh
     */
    function onSectionRendered() {
        addCustomStyling();
        renderKeyValuesSection();
        removeToggleIcon();
        initializeEventHandlers(); // Includes initial runAllCalculations()
    }
    
    //==========================================================================
    // PART 5: PUBLIC API & INITIALIZATION
    //==========================================================================
    
    // Flag to prevent multiple initializations
    let isInitialized = false;

    function initializeOnce() {
        if (isInitialized) return;
        const sectionElement = document.getElementById('keyValues');
        // Ensure the section element exists and StateManager is ready
        if (sectionElement && window.TEUI?.StateManager) {
             onSectionRendered();
             isInitialized = true;
        }
    }
    
    // Return public API
    return {
        getFields: () => fields, // Provide field definitions
        getDropdownOptions: () => ({}), // No dropdowns in this section
        getLayout: () => ({ rows: [] }), // No standard layout used
        onSectionRendered: onSectionRendered, // Allow external trigger if needed
        runAllCalculations: runAllCalculations, // Allow external trigger
        updateCostIndicators: updateCostIndicators // Expose if needed
    };
})();

// Expose key calculation functions globally for potential cross-module use or debugging
// window.calculateTEUI = () => window.TEUI.SectionModules.sect01.runAllCalculations();
// window.calculateAnnualCarbon = () => window.TEUI.SectionModules.sect01.calculateAnnualCarbon();
// window.calculateLifetimeCarbon = () => window.TEUI.SectionModules.sect01.calculateLifetimeCarbon();
// window.calculateLifetimeCarbon = () => window.TEUI.SectionModules.sect01.calculateLifetimeCarbon();