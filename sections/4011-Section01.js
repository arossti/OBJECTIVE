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
    // PART 4: DUAL-ENGINE HELPER FUNCTIONS - FIXED FOR PROPER DATA SEPARATION
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
    function setDualEngineValue(fieldId, rawValue, formatType = 'number-1dp') {
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
        
        // CRITICAL: Use Section 01's custom updateDisplayValue to preserve styling
        // This maintains tier indicators, animations, gauges, and visual design
        const formattedValue = window.TEUI?.formatNumber?.(rawValue, formatType) ?? rawValue?.toString() ?? 'N/A';
        updateDisplayValue(fieldId, formattedValue);
    }

    // Basic field value getter for V2 compatibility
    function getFieldValue(fieldId) {
        const stateValue = window.TEUI?.StateManager?.getValue(fieldId);
        if (stateValue != null) return stateValue;
        const element = document.querySelector(`[data-field-id="${fieldId}"]`);
        return element ? (element.value ?? element.textContent?.trim()) : null;
    }

    /**
     * Helper function to safely get numeric values from the APPLICATION state.
     */
    function getAppNumericValue(fieldId, defaultValue = 0) {
        let value = defaultValue;
        const stateValue = window.TEUI?.StateManager?.getApplicationValue?.(fieldId) || 
                          window.TEUI?.StateManager?.getValue?.(fieldId);
        
        if (stateValue !== undefined && stateValue !== null && stateValue !== '') {
            if (typeof stateValue === 'string') {
                const cleanedValue = stateValue.replace(/[^\d.-]/g, '');
                const parsed = window.TEUI?.parseNumeric?.(cleanedValue, defaultValue) ?? defaultValue;
                if (!isNaN(parsed)) {
                    value = parsed;
                }
            } else if (typeof stateValue === 'number') {
                value = stateValue;
            }
        }
        return value;
    }

    /**
     * Helper function to safely get numeric values from the REFERENCE state.
     */
    function getRefNumericValue(fieldId, defaultValue = 0) {
        let value = defaultValue;
        const stateValue = window.TEUI?.StateManager?.getValue?.(fieldId);
        
        if (stateValue !== undefined && stateValue !== null && stateValue !== '') {
            if (typeof stateValue === 'string') {
                const cleanedValue = stateValue.replace(/[^\d.-]/g, '');
                const parsed = window.TEUI?.parseNumeric?.(cleanedValue, defaultValue) ?? defaultValue;
                if (!isNaN(parsed)) {
                    value = parsed;
                }
            } else if (typeof stateValue === 'number') {
                value = stateValue;
            }
        }
        return value;
    }

    /**
     * Standardized helper function to set calculated values with proper formatting.
     * CRITICAL: Preserves Section 01's custom styling and HTML structure
     * Updated for V2 dual-engine architecture - now uses setDualEngineValue
     * @param {string} fieldId - The field ID to update
     * @param {number} rawValue - The raw numeric value to store
     * @param {string} formatType - The format type for display (e.g., 'number-1dp', 'number-2dp-comma')
     */
    function setCalculatedValue(fieldId, rawValue, formatType = 'number-1dp') {
        // Handle N/A cases first
        if (!isFinite(rawValue) || rawValue === null || rawValue === undefined) {
            // For N/A values, update display directly and store as 'N/A'
            updateDisplayValue(fieldId, 'N/A');
            if (window.TEUI?.StateManager?.setValue) {
                window.TEUI.StateManager.setValue(fieldId, 'N/A', 'calculated');
            }
            return;
        }
        
        // Use the V2 dual-engine setter which handles state management and custom styling
        setDualEngineValue(fieldId, rawValue, formatType);
    }

    //==========================================================================
    // FIXED: DEDICATED UI UPDATE FUNCTIONS FOR DUAL-ENGINE ARCHITECTURE
    //==========================================================================
    
    /**
     * Updates Reference values (Column D, E) - ALWAYS updates Reference UI regardless of viewing mode
     */
    function setReferenceValue(fieldId, rawValue, formatType = 'number-1dp') {
        // Handle N/A or non-numeric values
        if (rawValue === 'N/A' || rawValue === null || rawValue === undefined || !isFinite(rawValue)) {
            // Store as string
            if (window.TEUI?.StateManager) {
                window.TEUI.StateManager.setValue(`ref_${fieldId}`, 'N/A', 'calculated');
            }
            // Update UI with N/A
            updateDisplayValue(fieldId, 'N/A');
            return;
        }
        
        // Always store with ref_ prefix for cross-section access
        if (window.TEUI?.StateManager) {
            window.TEUI.StateManager.setValue(`ref_${fieldId}`, rawValue.toString(), 'calculated');
        }
        
        // ALWAYS update Reference column UI (d_, e_ fields)
        const formattedValue = window.TEUI?.formatNumber?.(rawValue, formatType) ?? rawValue?.toString() ?? 'N/A';
        updateDisplayValue(fieldId, formattedValue);
    }
    
    /**
     * Updates Target values (Column H, K) - ALWAYS updates Target UI regardless of viewing mode
     */
    function setTargetValue(fieldId, rawValue, formatType = 'number-1dp') {
        // Handle N/A or non-numeric values
        if (rawValue === 'N/A' || rawValue === null || rawValue === undefined || !isFinite(rawValue)) {
            // Store as string
            if (window.TEUI?.StateManager?.setApplicationValue) {
                window.TEUI.StateManager.setApplicationValue(fieldId, 'N/A', 'calculated');
            }
            // Update UI with N/A
            updateDisplayValue(fieldId, 'N/A');
            return;
        }
        
        // Always store in Application state for cross-section access
        if (window.TEUI?.StateManager?.setApplicationValue) {
            window.TEUI.StateManager.setApplicationValue(fieldId, rawValue.toString(), 'calculated');
        }
        
        // ALWAYS update Target column UI (h_, k_ fields)
        const formattedValue = window.TEUI?.formatNumber?.(rawValue, formatType) ?? rawValue?.toString() ?? 'N/A';
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
     * ENHANCED: Now properly receives Reference values from Section 15 (ref_h_136)
     * FIXED: Uses explicit Reference state values to ensure proper dual-engine separation
     */
    function calculateReferenceModel() {
        // Add recursion protection
        if (referenceCalculationInProgress) {
            return;
        }
        
        referenceCalculationInProgress = true;
        
        try {
            // Get S15 Reference TEUI if available
            const s15RefTEUI = getRefStateValue('h_136');
            if (s15RefTEUI && s15RefTEUI > 0) {
                setReferenceValue('e_10', s15RefTEUI);
                // console.log('[S01 Reference] Using S15 Reference TEUI:', s15RefTEUI);
            } else {
                // Calculate internally using reference values
                const refHSPF = getRefStateValue('f_113') || 7.1;
                const refVentRate = getRefStateValue('d_119') || 8.33;
                const refTargetEnergy = getRefStateValue('e_139') || 0;
                
                if (refTargetEnergy > 0) {
                    const refArea = getRefStateValue('h_15') || 1427.2;
                    const refTEUI = refTargetEnergy / refArea;
                    // console.log('[S01 Reference] Calculated Reference TEUI:', refTEUI, 'using HSPF:', refHSPF, 'VentRate:', refVentRate);
                    setReferenceValue('e_10', refTEUI);
                }
            }
            
            // Get emissions data
            const s04RefEmissions = getRefStateValue('k_32');
            if (s04RefEmissions && s04RefEmissions > 0) {
                setReferenceValue('k_32', s04RefEmissions);
                // console.log('[S01 Reference] Calculated Reference emissions:', s04RefEmissions);
            } else {
                const refTEUI = getRefStateValue('e_10');
                const refTargetEmissions = refTEUI * refArea * 0.051; // Simplified: TEUI * Area * grid intensity
                // console.log('[S01 Reference] Using S04 Reference emissions:', refTargetEmissions);
                setReferenceValue('k_32', refTargetEmissions);
            }
            
            // Calculate carbon metrics using reference values
            const lifespan = getRefStateValue('h_13') || 60;
            const refAnnualCarbon = Math.round((s04RefEmissions / refArea) * 10) / 10;
            const refLifetimeCarbon = Math.round((refAnnualCarbon * lifespan) * 10) / 10;
            
            // Store Reference values in StateManager
            setReferenceValue('d_8', refAnnualCarbon);
            setReferenceValue('d_6', refLifetimeCarbon);
            
            // console.log('[S01 Reference] Final values - TEUI:', refTEUI, 'Annual Carbon:', refAnnualCarbon, 'Lifetime Carbon:', refLifetimeCarbon);
            
        } catch (error) {
            console.error('[S01 Reference] Calculation error:', error);
        } finally {
            referenceCalculationInProgress = false;
        }
    }

    //==========================================================================
    // DUAL-ENGINE ARCHITECTURE: TARGET MODEL (Column H)
    //==========================================================================

    /**
     * TARGET MODEL ENGINE: Calculate all Column H values using Application state exclusively
     * FIXED: Uses explicit Application state values to ensure proper dual-engine separation
     */
    function calculateTargetModel() {
        // Add recursion protection
        if (targetCalculationInProgress) {
            return;
        }
        
        targetCalculationInProgress = true;
        
        try {
            // Get application values for calculations
            const appTargetEnergy = getAppStateValue('j_32') || 0;
            const appTargetEmissions = getAppStateValue('k_32') || 0;
            const appArea = getAppStateValue('h_15') || 1;
            
            // console.log('[S01 Target] Input values - Energy:', appTargetEnergy, 'Emissions:', appTargetEmissions, 'Area:', appArea);
            
            // Calculate TEUI
            let targetTEUI = 0;
            if (appArea > 0) {
                targetTEUI = Math.round((appTargetEnergy / appArea) * 10) / 10;
            }
            
            // Calculate carbon metrics 
            const lifespan = getAppStateValue('h_13') || 60;
            const targetAnnualCarbon = Math.round((appTargetEmissions / appArea) * 10) / 10;
            const targetLifetimeCarbon = Math.round((targetAnnualCarbon * lifespan) * 10) / 10;
            
            // Store Application values in StateManager
            setTargetValue('h_10', targetTEUI);
            setTargetValue('h_8', targetAnnualCarbon); 
            setTargetValue('h_6', targetLifetimeCarbon);
            
            // console.log('[S01 Target] Final values - TEUI:', targetTEUI, 'Annual Carbon:', targetAnnualCarbon, 'Lifetime Carbon:', targetLifetimeCarbon);
            
        } catch (error) {
            console.error('[S01 Target] Calculation error:', error);
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
        return window.TEUI?.parseNumeric?.(cleanedText, NaN) ?? NaN;
    }

    function updateDisplayValue(fieldId, value, tierOverride = null) {
        const element = document.querySelector(`[data-field-id="${fieldId}"] .key-value, [data-field-id="${fieldId}"] .percent-value`);
        if (!element) return;

        const fieldsToAnimate = ["h_10", "k_10", "e_10"]; 

        if (fieldsToAnimate.includes(fieldId)) {
            const startValue = getCurrentNumericValue(element); 
            const endValue = window.TEUI?.parseNumeric?.(value, 0) ?? 0; 
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
                    const formattedValue = window.TEUI?.formatNumber?.(currentValue, 'number-1dp') ?? currentValue.toString();

                    if (fieldId === "h_10") {
                        const tierValue = tierOverride || window.TEUI.StateManager?.getApplicationValue("i_10") || "tier3";
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
                        const finalFormattedValue = window.TEUI?.formatNumber?.(endValue, 'number-1dp') ?? endValue.toString();
                        if (fieldId === "h_10") {
                             const tierValue = tierOverride || window.TEUI.StateManager?.getApplicationValue("i_10") || "tier3";
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
            const tierValue = tierOverride || window.TEUI.StateManager?.getApplicationValue("i_10") || "tier3";
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
        
        // Calculate the reduction percentage (D144 in Excel formula) - this is 1-(target/reference)
        let reduction = 0;
        if (referenceTEUI_e10 !== 0) {
            reduction = 1 - (targetTEUI_h10 / referenceTEUI_e10);
        }

        const standardLower = standard_d13.toLowerCase();
        const isCodeStandard = standardLower.includes("nbc") || standardLower.includes("obc") || standardLower.includes("necb");
        
        let tier = "No Tier";

        // Excel formula logic: IF(OR(ISNUMBER(SEARCH("NBC", D13)), ISNUMBER(SEARCH("OBC", D13)), ISNUMBER(SEARCH("NECB", D13))),
        //   IF(D144>0.7, "tier5", IF(D144>0.6, "tier4", IF(D144>0.5, "tier3", IF(D144>0.4, "tier2", "tier1")))),
        //   IF(D144>0.6, "tier4", IF(D144>0.45, "tier3", IF(D144>0.2, "tier2", IF(D144>0.1, "tier1", "No Tier")))))
        // Where D144 = 1-(target/reference) = reduction percentage

        if (isCodeStandard) {
            // For code standards (NBC/OBC/NECB): tier5 is the BEST performance (>70% reduction)
            if (reduction > 0.7) tier = "tier5";      // Best: >70% reduction
            else if (reduction > 0.6) tier = "tier4"; // Very good: >60% reduction
            else if (reduction > 0.5) tier = "tier3"; // Good: >50% reduction
            else if (reduction > 0.4) tier = "tier2"; // Fair: >40% reduction
            else tier = "tier1";                      // Baseline: ≤40% reduction
        } else {
            // For other standards: tier4 is the best available (>60% reduction)
            if (reduction > 0.6) tier = "tier4";      // Best: >60% reduction
            else if (reduction > 0.45) tier = "tier3"; // Good: >45% reduction
            else if (reduction > 0.2) tier = "tier2";  // Fair: >20% reduction
            else if (reduction > 0.1) tier = "tier1";  // Baseline: >10% reduction
            else tier = "No Tier";                     // Below baseline: ≤10% reduction
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
        const d6RefRaw = window.TEUI.StateManager?.getValue("ref_d_6") || "24.4";
        const d8RefRaw = window.TEUI.StateManager?.getValue("ref_d_8") || "17.4";
        const e10RefRaw = window.TEUI.StateManager?.getValue("ref_e_10") || "341.2";
        
        // CRITICAL FIX: Format values before passing to updateDisplayValue to prevent decimal burp
        const d6RefFormatted = window.TEUI?.formatNumber?.(window.TEUI?.parseNumeric?.(d6RefRaw, 24.4), 'number-1dp') ?? d6RefRaw;
        const d8RefFormatted = window.TEUI?.formatNumber?.(window.TEUI?.parseNumeric?.(d8RefRaw, 17.4), 'number-1dp') ?? d8RefRaw;
        const e10RefFormatted = window.TEUI?.formatNumber?.(window.TEUI?.parseNumeric?.(e10RefRaw, 341.2), 'number-1dp') ?? e10RefRaw;
        
        updateDisplayValue('d_6', d6RefFormatted);
        updateDisplayValue('d_8', d8RefFormatted);
        updateDisplayValue('e_10', e10RefFormatted);

        // ALWAYS display Target/Application values in Column H
        const h6Raw = window.TEUI.StateManager?.getApplicationValue("h_6") || "11.7";
        const h8Raw = window.TEUI.StateManager?.getApplicationValue("h_8") || "4.7";
        const h10Raw = window.TEUI.StateManager?.getApplicationValue("h_10") || "93.0";
        
        // CRITICAL FIX: Format values before passing to updateDisplayValue to prevent decimal burp
        const h6Formatted = window.TEUI?.formatNumber?.(window.TEUI?.parseNumeric?.(h6Raw, 11.7), 'number-1dp') ?? h6Raw;
        const h8Formatted = window.TEUI?.formatNumber?.(window.TEUI?.parseNumeric?.(h8Raw, 4.7), 'number-1dp') ?? h8Raw;
        const h10Formatted = window.TEUI?.formatNumber?.(window.TEUI?.parseNumeric?.(h10Raw, 93.0), 'number-1dp') ?? h10Raw;
        
        updateDisplayValue('h_6', h6Formatted);
        updateDisplayValue('h_8', h8Formatted);
        
        // Calculate tier for h_10 to pass atomically
        const targetTEUI_h10 = getAppNumericValue("h_10", 93.0);
        const referenceTEUI_e10 = getAppNumericValue("ref_e_10", 341.2);
        const standard_d13 = window.TEUI.StateManager?.getApplicationValue("d_13") || "";
        
        let reduction = 0;
        if (referenceTEUI_e10 !== 0) {
            reduction = 1 - (targetTEUI_h10 / referenceTEUI_e10);
        }

        const standardLower = standard_d13.toLowerCase();
        const isCodeStandard = standardLower.includes("nbc") || standardLower.includes("obc") || standardLower.includes("necb");
        
        let calculatedTier = "No Tier";
        if (isCodeStandard) {
            if (reduction > 0.7) calculatedTier = "tier5";
            else if (reduction > 0.6) calculatedTier = "tier4";
            else if (reduction > 0.5) calculatedTier = "tier3";
            else if (reduction > 0.4) calculatedTier = "tier2";
            else calculatedTier = "tier1";
        } else {
            if (reduction > 0.6) calculatedTier = "tier4";
            else if (reduction > 0.45) calculatedTier = "tier3";
            else if (reduction > 0.2) calculatedTier = "tier2";
            else if (reduction > 0.1) calculatedTier = "tier1";
            else calculatedTier = "No Tier";
        }
        
        // Update h_10 with calculated tier atomically
        updateDisplayValue('h_10', h10Formatted, calculatedTier);

        // Update Actual Column (K) values - conditional on Utility Bills mode
        if (isUtilityMode) {
            const k6Raw = window.TEUI.StateManager?.getApplicationValue("k_6") || "11.7";
            const k8Raw = window.TEUI.StateManager?.getApplicationValue("k_8") || "4.8";
            const k10Raw = window.TEUI.StateManager?.getApplicationValue("k_10") || "93.1";
            
            // CRITICAL FIX: Format values before passing to updateDisplayValue to prevent decimal burp
            const k6Formatted = window.TEUI?.formatNumber?.(window.TEUI?.parseNumeric?.(k6Raw, 11.7), 'number-1dp') ?? k6Raw;
            const k8Formatted = window.TEUI?.formatNumber?.(window.TEUI?.parseNumeric?.(k8Raw, 4.8), 'number-1dp') ?? k8Raw;
            
            updateDisplayValue('k_6', k6Formatted);
            updateDisplayValue('k_8', k8Formatted);
            
            // Special handling for k_10 (Actual TEUI)
            const energyValue_f32 = getAppNumericValue("f_32", 0);
            let actualTEUIDisplay = 'N/A';
            if (energyValue_f32 === 0 || Math.abs(energyValue_f32) < 0.01) {
                actualTEUIDisplay = "0.0";
            } else {
                actualTEUIDisplay = window.TEUI?.formatNumber?.(window.TEUI?.parseNumeric?.(k10Raw, 93.1), 'number-1dp') ?? k10Raw;
        }
        updateDisplayValue('k_10', actualTEUIDisplay);
        } else {
            updateDisplayValue('k_6', 'N/A');
            updateDisplayValue('k_8', 'N/A');
            updateDisplayValue('k_10', 'N/A');
        }

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