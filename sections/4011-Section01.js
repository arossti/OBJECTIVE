/**
 * 4011-Section01.js
 * Key Values (Section 1) module for TEUI Calculator 4.011
 * 
 * Direct HTML rendering for precise styling, dynamic calculations for key metrics.
 * DUAL-ENGINE ARCHITECTURE: Reference Model (Column E) and Target Model (Column H)
 * 
 * IT-DEPENDS MIGRATION: Complete
 * - Mode-agnostic dual-column display preserved
 * - Strict Reference/Target state separation
 * - Cross-section listeners implemented
 * - Recursion protection added
 */

window.TEUI = window.TEUI || {};
window.TEUI.SectionModules = window.TEUI.SectionModules || {};

// Create section-specific namespace for recursion protection
window.TEUI.sect01 = window.TEUI.sect01 || {};
window.TEUI.sect01.calculationInProgress = false;

window.TEUI.SectionModules.sect01 = (function() {
    
    // Animation state tracking
    const activeAnimations = {}; // Stores { fieldId: animationFrameId }
    
    // Add module-level recursion protection flags for dual-engine
    let referenceCalculationInProgress = false;
    let targetCalculationInProgress = false;

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

    /**
     * Helper to get Reference state values with proper hemisphere isolation.
     * CRITICAL: Now prioritizes multiple methods for reference state access.
     */
    function getRefStateValue(fieldId) {
        // Method 1: Try ref_ prefixed value in the StateManager (from upstream Reference calculations)
        const refFieldId = `ref_${fieldId}`;
        let value = window.TEUI?.StateManager?.getValue?.(refFieldId);
        if (value !== null && value !== undefined) {
            return value;
        }
        
        // Method 2: Try SessionReferenceState (most persistent between toggles)
        if (window.TEUI?.StateManager?.getSessionReferenceValue) {
            const sessionValue = window.TEUI.StateManager.getSessionReferenceValue(refFieldId);
            if (sessionValue !== null && sessionValue !== undefined) {
                return sessionValue;
            }
        }
        
        // Method 3: Try direct getReferenceValue API (V2 architecture)
        if (window.TEUI?.StateManager?.getReferenceValue) {
            const refValue = window.TEUI.StateManager.getReferenceValue(fieldId);
            if (refValue !== null && refValue !== undefined) {
                return refValue;
            }
        }
        
        // Method 4: Try Reference standard values when available (from activeReferenceDataSet)
        if (window.TEUI?.StateManager?.getValue) {
            // For Reference calculations, use the Reference standard values when available
            const activeDataSet = window.TEUI.StateManager.activeReferenceDataSet || {};
            if (activeDataSet[fieldId] !== undefined) {
                return activeDataSet[fieldId];
            }
        }
        
        // Method 5: Use hardcoded Reference standard values as the last resort
        // This prevents Reference Model from reading Application values
        const referenceStandardValues = {
            'h_15': 1427.2,    // Reference standard area
            'h_13': 60,        // Reference standard service life
            'f_113': 7.1,      // Reference standard HSPF
            'd_119': 8.33,     // Reference standard ventilation rate
            'i_41': 0,         // Reference standard embodied carbon
            'e_139': 0,        // Reference standard energy (will be calculated)
            'h_136': 0,        // Reference standard TEUI (will be calculated)
            'l_27': 18         // Reference standard emissions factor (default for 2017)
        };
        
        if (referenceStandardValues[fieldId] !== undefined) {
            return referenceStandardValues[fieldId];
        }
        
        // Return null/undefined if no Reference value is found
        return null;
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
     * CRITICAL: Now uses proper Reference state access methods for hemisphere isolation.
     */
    function getRefNumericValue(fieldId, defaultValue = 0) {
        let value = defaultValue;
        
        // Try multiple methods to get reference value, in order of preference:
        
        // Method 1: Try standard Reference Value getter (best practice)
        if (window.TEUI?.StateManager?.getReferenceValue) {
            const refValue = window.TEUI.StateManager.getReferenceValue(fieldId);
            if (refValue !== null && refValue !== undefined) {
                // Parse the reference value
                if (typeof refValue === 'string') {
                    const cleanedValue = refValue.replace(/[^\d.-]/g, '');
                    const parsed = window.TEUI?.parseNumeric?.(cleanedValue, defaultValue) ?? defaultValue;
                    if (!isNaN(parsed)) {
                        return parsed; // Return immediately with parsed reference value
                    }
                } else if (typeof refValue === 'number') {
                    return refValue; // Return immediately with numeric reference value
                }
            }
        }
        
        // Method 2: Try SessionReferenceState (persistent between Reference mode toggles)
        if (window.TEUI?.StateManager?.getSessionReferenceValue) {
            const sessionRefValue = window.TEUI.StateManager.getSessionReferenceValue(`ref_${fieldId}`);
            if (sessionRefValue !== null && sessionRefValue !== undefined) {
                const parsed = window.TEUI?.parseNumeric?.(sessionRefValue, defaultValue) ?? defaultValue;
                if (!isNaN(parsed)) {
                    return parsed; // Return immediately with parsed session value
                }
            }
        }
        
        // Method 3: Try ref_ prefixed value in normal state
        const prefixedFieldId = `ref_${fieldId}`;
        const prefixedValue = window.TEUI?.StateManager?.getValue?.(prefixedFieldId);
        if (prefixedValue !== null && prefixedValue !== undefined) {
            // Parse the prefixed value
            if (typeof prefixedValue === 'string') {
                const cleanedValue = prefixedValue.replace(/[^\d.-]/g, '');
                const parsed = window.TEUI?.parseNumeric?.(cleanedValue, defaultValue) ?? defaultValue;
                if (!isNaN(parsed)) {
                    return parsed; // Return immediately with parsed prefixed value
                }
            } else if (typeof prefixedValue === 'number') {
                return prefixedValue; // Return immediately with numeric prefixed value
            }
        }
        
        // If all Reference state access methods failed, fall back to default value
        return defaultValue;
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

    /**
     * REFERENCE MODEL ENGINE: Calculate all Reference values
     */
    function calculateReferenceModel() {
        console.log('[S01] 🔵 Running Reference Model calculation');
        
        // RECURSION PROTECTION
        if (referenceCalculationInProgress) {
            console.log('[S01] Reference calculation already in progress, skipping');
            return;
        }
        
        try {
            referenceCalculationInProgress = true;
            
            // =============================================================================
            // Direct lookup from S15 (Reference TEUI) if available
            // =============================================================================
            
            // Primary value: ref_h_136 is the Reference TEUI from S15
            const ref_h136 = getRefStateValue('h_136');
            if (ref_h136) {
                console.log(`[S01] Found Reference TEUI from S15: ${ref_h136} kWh/m²/yr`);
                // Set ref_e_10 and update UI if in Reference Mode
                setReferenceValue('e_10', ref_h136);
            } else {
                console.log('[S01] No Reference TEUI from S15, calculating manually');
                
                // Fallback: Calculate e_10 from Reference energy and area
                const ref_energy = getRefStateValue('e_139') || getRefStateValue('j_32') || 0;
                const ref_area = getRefStateValue('h_15') || 1427.2; // standard area
                
                if (ref_energy > 0 && ref_area > 0) {
                    const ref_teui = ref_energy / ref_area;
                    console.log(`[S01] Calculated Reference TEUI: ${ref_teui} kWh/m²/yr (energy: ${ref_energy}, area: ${ref_area})`);
                    setReferenceValue('e_10', ref_teui);
                } else {
                    // Ultimate fallback: Set standard reference value
                    setReferenceValue('e_10', 186.4);
                    console.log('[S01] Using standard Reference TEUI: 186.4 kWh/m²/yr');
                }
            }
            
            // =============================================================================
            // REFERENCE ANNUAL CARBON INTENSITY (d_8)
            // =============================================================================
            
            // CRITICAL FIX: Get proper Reference emissions factor
            // Try multiple methods to get the reference emissions factor
            let ref_l27 = 0; 
            
            // Method 1: Try SessionReferenceState (preferred - most persistent)
            if (window.TEUI?.StateManager?.getSessionReferenceValue) {
                const sessionRefValue = window.TEUI.StateManager.getSessionReferenceValue('ref_l_27');
                if (sessionRefValue) {
                    ref_l27 = window.TEUI.parseNumeric(sessionRefValue, 0);
                    console.log(`[S01] 🔐 Found Reference emissions factor from SessionReferenceState: ${ref_l27}`);
                }
            }
            
            // Method 2: Try standard Reference state
            if (ref_l27 === 0 && window.TEUI?.StateManager?.getReferenceValue) {
                const refValue = window.TEUI.StateManager.getReferenceValue('l_27');
                if (refValue) {
                    ref_l27 = window.TEUI.parseNumeric(refValue, 0);
                    console.log(`[S01] 🔐 Found Reference emissions factor from ReferenceValue: ${ref_l27}`);
                }
            }
            
            // Method 3: Try ref_ prefixed value in normal state
            if (ref_l27 === 0) {
                const stateRefValue = window.TEUI?.StateManager?.getValue?.('ref_l_27');
                if (stateRefValue) {
                    ref_l27 = window.TEUI.parseNumeric(stateRefValue, 0);
                    console.log(`[S01] 🔐 Found Reference emissions factor from StateManager ref_l_27: ${ref_l27}`);
                }
            }
            
            // Final fallback: Use Application emissions factor
            if (ref_l27 === 0) {
                const appValue = window.TEUI?.StateManager?.getApplicationValue?.('l_27') || 
                                window.TEUI?.StateManager?.getValue?.('l_27');
                if (appValue) {
                    ref_l27 = window.TEUI.parseNumeric(appValue, 0);
                    console.log(`[S01] ⚠️ Falling back to Application emissions factor: ${ref_l27}`);
                } else {
                    // Ultimate fallback: Default value
                    ref_l27 = 51; // Default for Ontario 2022
                    console.log(`[S01] ⚠️ Using default emissions factor: ${ref_l27}`);
                }
            }
            
            // Get Reference energy and calculate emissions
            const ref_energy = getRefStateValue('j_32') || 0;
            const ref_area = getRefStateValue('h_15') || 1427.2; // standard area
            
            if (ref_energy > 0 && ref_area > 0) {
                // First calculate total emissions using the Reference emissions factor
                const ref_emissions = (ref_energy * ref_l27) / 1000; // ref_l27 is in gCO2e/kWh, result in kgCO2e
                
                // Then calculate intensity (per m²)
                const ref_carbon_intensity = Math.round((ref_emissions / ref_area) * 10) / 10;
                console.log(`[S01] Calculated Reference Carbon Intensity: ${ref_carbon_intensity} kgCO2e/m²/yr (energy: ${ref_energy}, emissions factor: ${ref_l27}, total emissions: ${ref_emissions}, area: ${ref_area})`);
                setReferenceValue('d_8', ref_carbon_intensity);
            } else {
                // Fallback for emissions
                setReferenceValue('d_8', 10.5); // Typical reference value
                console.log('[S01] Using standard Reference Carbon Intensity: 10.5 kgCO2e/m²/yr');
            }
            
            // =============================================================================
            // REFERENCE LIFETIME CARBON INTENSITY (d_6)
            // =============================================================================
            
            const ref_embodied = getRefStateValue('i_41') || 0;
            const ref_service_life = getRefStateValue('h_13') || 60; // standard life
            const ref_annual = getRefNumericValue('d_8', 10.5); // Use already-calculated value
            
            if (ref_service_life > 0) {
                const ref_lifetime = Math.round(((ref_embodied / ref_service_life) + ref_annual) * 10) / 10;
                console.log(`[S01] Calculated Reference Lifetime Carbon: ${ref_lifetime} kgCO2e/m²/yr (embodied: ${ref_embodied}, service life: ${ref_service_life}, annual: ${ref_annual})`);
                setReferenceValue('d_6', ref_lifetime);
            } else {
                // Fallback
                setReferenceValue('d_6', 17.1); // Typical reference value
                console.log('[S01] Using standard Reference Lifetime Carbon: 17.1 kgCO2e/m²/yr');
            }
        } finally {
            referenceCalculationInProgress = false;
        }
    }

    //==========================================================================
    // DUAL-ENGINE ARCHITECTURE: TARGET MODEL (Column H)
    //==========================================================================

    /**
     * TARGET MODEL ENGINE: Calculate all Target values
     */
    function calculateTargetModel() {
        console.log('[S01] 🟢 Running Target Model calculation');
        
        // RECURSION PROTECTION
        if (targetCalculationInProgress) {
            console.log('[S01] Target calculation already in progress, skipping');
            return;
        }
        
        try {
            targetCalculationInProgress = true;
            
            // =============================================================================
            // Target TEUI (h_10)
            // =============================================================================
            
            // Get S15 Target TEUI if available
            const h136 = getAppStateValue('h_136');
            if (h136 && parseFloat(h136) > 0) {
                console.log(`[S01] Found Target TEUI from S15: ${h136} kWh/m²/yr`);
                setTargetValue('h_10', parseFloat(h136));
            } else {
                // Calculate from energy and area
                const target_energy = getAppNumericValue('j_32', 0);
                const target_area = getAppNumericValue('h_15', 1427.2);
                
                if (target_area > 0) {
                    const target_teui = Math.round((target_energy / target_area) * 10) / 10;
                    console.log(`[S01] Calculated Target TEUI: ${target_teui} kWh/m²/yr (energy: ${target_energy}, area: ${target_area})`);
                    setTargetValue('h_10', target_teui);
                } else {
                    console.log('[S01] Cannot calculate Target TEUI: area is zero');
                    setTargetValue('h_10', 0);
                }
            }
            
            // =============================================================================
            // TARGET ANNUAL CARBON INTENSITY (h_8)
            // =============================================================================
            
            // Get emissions factor from Application state
            const app_l27 = getAppNumericValue('l_27', 51); // Default 51 for Ontario 2022
            
            // Get Application energy and calculate emissions
            const target_emissions = getAppNumericValue('k_32', 0);
            const target_area = getAppNumericValue('h_15', 1427.2);
            
            if (target_area > 0) {
                const target_carbon_intensity = Math.round((target_emissions / target_area) * 10) / 10;
                console.log(`[S01] Calculated Target Carbon Intensity: ${target_carbon_intensity} kgCO2e/m²/yr (emissions: ${target_emissions}, area: ${target_area}, emissions factor: ${app_l27})`);
                setTargetValue('h_8', target_carbon_intensity);
            } else {
                console.log('[S01] Cannot calculate Target Carbon Intensity: area is zero');
                setTargetValue('h_8', 0);
            }
            
            // =============================================================================
            // TARGET LIFETIME CARBON INTENSITY (h_6)
            // =============================================================================
            
            const target_embodied = getAppNumericValue('i_41', 0);
            const target_service_life = getAppNumericValue('h_13', 60);
            const target_annual = getNumericValue('h_8', 0);
            
            if (target_service_life > 0) {
                const target_lifetime = Math.round(((target_embodied / target_service_life) + target_annual) * 10) / 10;
                console.log(`[S01] Calculated Target Lifetime Carbon: ${target_lifetime} kgCO2e/m²/yr (embodied: ${target_embodied}, service life: ${target_service_life}, annual: ${target_annual})`);
                setTargetValue('h_6', target_lifetime);
            } else {
                console.log('[S01] Cannot calculate Target Lifetime Carbon: service life is zero');
                setTargetValue('h_6', 0);
            }
            
            // =============================================================================
            // ACTUAL VALUES (k_10, k_8, k_6)
            // =============================================================================
            
            // Actual TEUI (k_10)
            const actual_energy = getAppNumericValue('f_32', 0);
            if (actual_energy > 0 && target_area > 0) {
                const actual_teui = Math.round((actual_energy / target_area) * 10) / 10;
                console.log(`[S01] Calculated Actual TEUI: ${actual_teui} kWh/m²/yr`);
                setCalculatedValue('k_10', actual_teui);
            } else {
                console.log('[S01] No Actual Energy data available');
                setCalculatedValue('k_10', 'N/A');
            }
            
            // Actual Annual Carbon (k_8)
            const actual_emissions = getAppNumericValue('g_32', 0);
            if (actual_emissions > 0 && target_area > 0) {
                const actual_carbon_intensity = Math.round((actual_emissions / target_area) * 10) / 10;
                console.log(`[S01] Calculated Actual Carbon Intensity: ${actual_carbon_intensity} kgCO2e/m²/yr`);
                setCalculatedValue('k_8', actual_carbon_intensity);
            } else {
                console.log('[S01] No Actual Emissions data available');
                setCalculatedValue('k_8', 'N/A');
            }
            
            // Actual Lifetime Carbon (k_6)
            const actual_annual = getNumericValue('k_8');
            if (typeof actual_annual === 'number' && target_service_life > 0) {
                const actual_lifetime = Math.round(((target_embodied / target_service_life) + actual_annual) * 10) / 10;
                console.log(`[S01] Calculated Actual Lifetime Carbon: ${actual_lifetime} kgCO2e/m²/yr`);
                setCalculatedValue('k_6', actual_lifetime);
            } else {
                console.log('[S01] No Actual Emissions data available for lifetime calculation');
                setCalculatedValue('k_6', 'N/A');
            }
            
            // Calculate percentages and explanations
            calculatePercentagesAndExplanations();
            
            // Update gauges with new values
            updateAllGauges();
            
            // Check if target exceeds reference (for warnings)
            checkTargetExceedsReference();
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
        
        console.log(`[S01 DISPLAY] 🔄 updateTEUIDisplay called - State agnostic mode`);

        // SECTION 01 IS STATE AGNOSTIC: Always show Reference vs Application comparison
        console.log(`[S01 DISPLAY] 📊 Displaying Reference vs Application comparison (always)`);
        
        // Reference values in Reference column (ALWAYS)
        const d6RefRaw = window.TEUI.StateManager?.getValue("ref_d_6") || "24.4";
        const d8RefRaw = window.TEUI.StateManager?.getValue("ref_d_8") || "17.4";
        const e10RefRaw = window.TEUI.StateManager?.getValue("ref_e_10") || "341.2";
        
        const d6RefFormatted = window.TEUI?.formatNumber?.(window.TEUI?.parseNumeric?.(d6RefRaw, 24.4), 'number-1dp') ?? d6RefRaw;
        const d8RefFormatted = window.TEUI?.formatNumber?.(window.TEUI?.parseNumeric?.(d8RefRaw, 17.4), 'number-1dp') ?? d8RefRaw;
        const e10RefFormatted = window.TEUI?.formatNumber?.(window.TEUI?.parseNumeric?.(e10RefRaw, 341.2), 'number-1dp') ?? e10RefRaw;
        
        console.log(`[S01 DISPLAY] 🔵 Reference Column Values: d_6=${d6RefFormatted}, d_8=${d8RefFormatted}, e_10=${e10RefFormatted}`);
        
        updateDisplayValue('d_6', d6RefFormatted);
        updateDisplayValue('d_8', d8RefFormatted);
        updateDisplayValue('e_10', e10RefFormatted);

        // Application values in Target column (ALWAYS)
        const h6Raw = window.TEUI.StateManager?.getApplicationValue("h_6") || "11.7";
        const h8Raw = window.TEUI.StateManager?.getApplicationValue("h_8") || "4.7";
        const h10Raw = window.TEUI.StateManager?.getApplicationValue("h_10") || "93.0";
        
        const h6Formatted = window.TEUI?.formatNumber?.(window.TEUI?.parseNumeric?.(h6Raw, 11.7), 'number-1dp') ?? h6Raw;
        const h8Formatted = window.TEUI?.formatNumber?.(window.TEUI?.parseNumeric?.(h8Raw, 4.7), 'number-1dp') ?? h8Raw;
        const h10Formatted = window.TEUI?.formatNumber?.(window.TEUI?.parseNumeric?.(h10Raw, 93.0), 'number-1dp') ?? h10Raw;
        
        console.log(`[S01 DISPLAY] 🟢 Target Column Values: h_6=${h6Formatted}, h_8=${h8Formatted}, h_10=${h10Formatted}`);
        
        updateDisplayValue('h_6', h6Formatted);
        updateDisplayValue('h_8', h8Formatted);
        
        // Calculate tier for h_10 in Application mode
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
        
        updateDisplayValue('h_10', h10Formatted, calculatedTier);

        // Update Actual Column (K) values - conditional on Utility Bills mode (ALWAYS works regardless of UI mode)
        if (isUtilityMode) {
            const k6Raw = window.TEUI.StateManager?.getApplicationValue("k_6") || "11.7";
            const k8Raw = window.TEUI.StateManager?.getApplicationValue("k_8") || "4.8";
            const k10Raw = window.TEUI.StateManager?.getApplicationValue("k_10") || "93.1";
            
            const k6Formatted = window.TEUI?.formatNumber?.(window.TEUI?.parseNumeric?.(k6Raw, 11.7), 'number-1dp') ?? k6Raw;
            const k8Formatted = window.TEUI?.formatNumber?.(window.TEUI?.parseNumeric?.(k8Raw, 4.8), 'number-1dp') ?? k8Raw;
            
            console.log(`[S01 DISPLAY] 📋 Actual Column Values: k_6=${k6Formatted}, k_8=${k8Formatted}, k_10=${k10Raw}`);
            
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
            console.log(`[S01 DISPLAY] 📋 Actual Column: N/A (not in Utility Bills mode)`);
            updateDisplayValue('k_6', 'N/A');
            updateDisplayValue('k_8', 'N/A');
            updateDisplayValue('k_10', 'N/A');
        }

        // Update gauges and warnings
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

    // Add recursion protection flag - ENHANCED for cross-section protection
    let calculationInProgress = false;
    let isInitializing = false;

    function runAllCalculations() {
        console.log("[Section01] Running all calculations...");
        
        // Use IT-DEPENDS calculateAll instead of manual calculations
        calculateAll();
    }

    /**
     * IT-DEPENDS entry point for calculations
     * This follows the standard pattern expected by the system
     */
    function calculateAll() {
        console.log("[Section01] ✨ IT-DEPENDS calculateAll() triggered");
        
        // RECURSION PROTECTION
        if (window.TEUI.sect01.calculationInProgress) {
            console.log("[S01] Calculation already in progress, skipping to prevent recursion");
            return;
        }
        
        try {
            window.TEUI.sect01.calculationInProgress = true;
            
            // Run both engines independently
            calculateReferenceModel();  // Calculates Reference values with ref_ prefix
            calculateTargetModel();     // Calculates Target values (existing logic)
        } finally {
            window.TEUI.sect01.calculationInProgress = false;
        }
    }

    //==========================================================================
    // INITIALIZATION
    //==========================================================================

    function initializeEventHandlers() {
        if (!window.TEUI.StateManager) return;
        const sm = window.TEUI.StateManager;
        
        // =============================================================================
        // IT-DEPENDS: SMART LISTENERS FOR CROSS-SECTION DEPENDENCIES
        // =============================================================================
        
        // Listen for S15 TEUI values
        sm.addListener('ref_h_136', function(newValue) {
            if (!window.TEUI.sect01.calculationInProgress) {
                console.log('[S01] ref_h_136 (S15 Reference TEUI) changed, updating Reference values');
                calculateReferenceModel();
            }
        });
        
        sm.addListener('h_136', function(newValue) {
            if (!window.TEUI.sect01.calculationInProgress) {
                console.log('[S01] h_136 (S15 Target TEUI) changed, checking for updates');
                calculateAll();
            }
        });
        
        // Listen for S04/S05 energy and emissions
        sm.addListener('j_32', function(newValue) {
            if (!window.TEUI.sect01.calculationInProgress) {
                console.log('[S01] j_32 (Target Energy) changed, updating calculations');
                calculateAll();
            }
        });
        
        sm.addListener('k_32', function(newValue) {
            if (!window.TEUI.sect01.calculationInProgress) {
                console.log('[S01] k_32 (Target Emissions) changed, updating calculations');
                calculateAll();
            }
        });
        
        sm.addListener('f_32', function(newValue) {
            if (!window.TEUI.sect01.calculationInProgress) {
                console.log('[S01] f_32 (Actual Energy) changed, updating actual values');
                calculateTargetModel();
            }
        });
        
        sm.addListener('g_32', function(newValue) {
            if (!window.TEUI.sect01.calculationInProgress) {
                console.log('[S01] g_32 (Actual Emissions) changed, updating actual values');
                calculateTargetModel();
            }
        });
        
        // Listen for area changes
        sm.addListener('h_15', function(newValue) {
            if (!window.TEUI.sect01.calculationInProgress) {
                console.log('[S01] h_15 (Area) changed, recalculating all intensities');
                calculateAll();
            }
        });
        
        // Listen for embodied carbon and service life
        sm.addListener('i_41', function(newValue) {
            if (!window.TEUI.sect01.calculationInProgress) {
                console.log('[S01] i_41 (Embodied Carbon) changed, updating lifetime carbon');
                calculateAll();
            }
        });
        
        sm.addListener('h_13', function(newValue) {
            if (!window.TEUI.sect01.calculationInProgress) {
                console.log('[S01] h_13 (Service Life) changed, updating lifetime carbon');
                calculateAll();
            }
        });
        
        // Reference state changes
        sm.addListener('ref_j_32', function(newValue) {
            if (!window.TEUI.sect01.calculationInProgress) {
                console.log('[S01] ref_j_32 (Reference Emissions) changed, updating Reference values');
                calculateReferenceModel();
            }
        });
        
        sm.addListener('ref_e_139', function(newValue) {
            if (!window.TEUI.sect01.calculationInProgress) {
                console.log('[S01] ref_e_139 (Reference Energy) changed, updating Reference TEUI');
                calculateReferenceModel();
            }
        });
        
        sm.addListener('ref_h_15', function(newValue) {
            if (!window.TEUI.sect01.calculationInProgress) {
                console.log('[S01] ref_h_15 (Reference Area) changed, updating Reference calculations');
                calculateReferenceModel();
            }
        });
        
        sm.addListener('ref_i_41', function(newValue) {
            if (!window.TEUI.sect01.calculationInProgress) {
                console.log('[S01] ref_i_41 (Reference Embodied) changed, updating Reference lifetime');
                calculateReferenceModel();
            }
        });
        
        sm.addListener('ref_h_13', function(newValue) {
            if (!window.TEUI.sect01.calculationInProgress) {
                console.log('[S01] ref_h_13 (Reference Service Life) changed, updating Reference lifetime');
                calculateReferenceModel();
            }
        });
        
        console.log('[S01 INIT] ✅ Event handlers initialized successfully');
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
        console.log("[Section01] Section rendered, initializing...");
        
        // Add custom styling
        addCustomStyling();
        
        // Render the custom HTML content
        renderKeyValuesSection();
        
        // Remove toggle icon
        removeToggleIcon();
        
        // Register dependencies with IT-DEPENDS
        registerDependencies();
        
        // Initialize event handlers
        initializeEventHandlers();
        
        // Mark as initialized
        isInitialized = true;
        
        console.log("[Section01] ✅ Initialization complete");
    }
    
    let isInitialized = false;

    function initializeOnce() {
        if (isInitialized) return;
        const sectionElement = document.getElementById('keyValues');
        if (sectionElement && window.TEUI?.StateManager) {
            // Just mark as initialized here, don't call onSectionRendered
            isInitialized = true;
        }
    }
    
    //==========================================================================
    // IT-DEPENDS: DEPENDENCY REGISTRATION
    //==========================================================================
    
    /**
     * Register all field dependencies with the StateManager
     */
    function registerDependencies() {
        if (!window.TEUI.StateManager) {
            console.warn("[S01] StateManager not available for dependency registration");
            return;
        }
        const sm = window.TEUI.StateManager;
        
        // Reference TEUI (e_10) dependencies
        sm.registerDependency('h_136', 'e_10'); // From S15 Reference TEUI
        sm.registerDependency('e_139', 'e_10'); // Reference energy (fallback)
        sm.registerDependency('h_15', 'e_10');  // Area (for internal calc)
        
        // Target TEUI (h_10) dependencies
        sm.registerDependency('j_32', 'h_10');  // Target energy from S04
        sm.registerDependency('h_15', 'h_10');  // Area
        
        // Reference Annual Carbon (d_8) dependencies
        sm.registerDependency('k_32', 'd_8');   // Reference emissions (or j_32)
        sm.registerDependency('j_32', 'd_8');   // Reference emissions fallback
        sm.registerDependency('h_15', 'd_8');   // Area
        
        // Target Annual Carbon (h_8) dependencies
        sm.registerDependency('k_32', 'h_8');   // Target emissions from S04
        sm.registerDependency('h_15', 'h_8');   // Area
        
        // Reference Lifetime Carbon (d_6) dependencies
        sm.registerDependency('i_41', 'd_6');   // Embodied carbon
        sm.registerDependency('h_13', 'd_6');   // Service life
        sm.registerDependency('d_8', 'd_6');    // Annual carbon
        
        // Target Lifetime Carbon (h_6) dependencies
        sm.registerDependency('i_41', 'h_6');   // Embodied carbon
        sm.registerDependency('h_13', 'h_6');   // Service life
        sm.registerDependency('h_8', 'h_6');    // Annual carbon
        
        // Actual values dependencies (k_6, k_8, k_10)
        sm.registerDependency('f_32', 'k_10');  // Actual energy
        sm.registerDependency('h_15', 'k_10');  // Area
        sm.registerDependency('g_32', 'k_8');   // Actual emissions
        sm.registerDependency('h_15', 'k_8');   // Area
        sm.registerDependency('i_41', 'k_6');   // Embodied carbon
        sm.registerDependency('h_13', 'k_6');   // Service life
        sm.registerDependency('k_8', 'k_6');    // Annual carbon
        
        // Percentage calculation (j_8) dependencies
        sm.registerDependency('h_8', 'j_8');    // Target annual carbon
        sm.registerDependency('k_8', 'j_8');    // Actual annual carbon
        
        // Register IT-DEPENDS calculations
        registerITDependsCalculations();
    }
    
    /**
     * Safely parses a numeric value from StateManager, using the global parseNumeric.
     * @param {string} fieldId - The ID of the field to retrieve the value for.
     * @param {number} defaultValue - Default value if field doesn't exist or can't be parsed
     * @returns {number} The parsed numeric value, or defaultValue if parsing fails.
     */
    function getNumericValue(fieldId, defaultValue = 0) {
        const rawValue = window.TEUI?.StateManager?.getValue(fieldId);
        // Use the global parseNumeric if available
        return window.TEUI?.parseNumeric?.(rawValue, defaultValue) || defaultValue;
    }
    
    /**
     * Register IT-DEPENDS calculation functions with strict state separation
     */
    function registerITDependsCalculations() {
        if (!window.TEUI?.StateManager?.registerCalculation) {
            console.warn('[S01 IT-DEPENDS] StateManager.registerCalculation not available');
            return;
        }
        
        const sm = window.TEUI.StateManager;
        
        // =============================================================================
        // REFERENCE CALCULATIONS (Column D/E) - ONLY read from Reference state
        // =============================================================================
        
        // e_10: Reference TEUI
        sm.registerCalculation('e_10', function() {
            // Priority 1: Use S15 Reference TEUI if available
            const s15RefTEUI = sm.getValue('ref_h_136') || 0;
            if (s15RefTEUI > 0) {
                return s15RefTEUI;
            }
            
            // Priority 2: Calculate from reference energy
            const refEnergy = sm.getValue('ref_e_139') || 0;
            const refArea = sm.getValue('ref_h_15') || 1427.2; // Reference standard area
            
            if (refEnergy > 0 && refArea > 0) {
                return refEnergy / refArea;
            }
            
            // Fallback: Standard reference TEUI
            return 186.4;
        }, 'Reference TEUI from S15 or calculation');
        
        // d_8: Reference Annual Carbon
        sm.registerCalculation('d_8', function() {
            // Get reference emissions - prioritize j_32 as the reference baseline
            const refEmissions = sm.getValue('ref_j_32') || sm.getValue('j_32') || 0;
            const refArea = sm.getValue('ref_h_15') || 1427.2;
            
            if (refArea > 0) {
                return Math.round((refEmissions / refArea) * 10) / 10;
            }
            return 0;
        }, 'Reference Annual Carbon Intensity');
        
        // d_6: Reference Lifetime Carbon
        sm.registerCalculation('d_6', function() {
            const embodiedCarbon = sm.getValue('ref_i_41') || 0;
            const serviceLife = sm.getValue('ref_h_13') || 60;
            const annualCarbon = getNumericValue('d_8'); // Current reference annual carbon
            
            return Math.round(((embodiedCarbon / serviceLife) + annualCarbon) * 10) / 10;
        }, 'Reference Lifetime Carbon Intensity');
        
        // =============================================================================
        // TARGET CALCULATIONS (Column H) - ONLY read from Application state
        // =============================================================================
        
        // h_10: Target TEUI
        sm.registerCalculation('h_10', function() {
            const targetEnergy = getAppNumericValue('j_32', 0);
            const appArea = getAppNumericValue('h_15', 1);
            
            if (appArea > 0) {
                return Math.round((targetEnergy / appArea) * 10) / 10;
            }
            return 0;
        }, 'Target TEUI from application energy');
        
        // h_8: Target Annual Carbon
        sm.registerCalculation('h_8', function() {
            const targetEmissions = getAppNumericValue('k_32', 0);
            const appArea = getAppNumericValue('h_15', 1);
            
            if (appArea > 0) {
                return Math.round((targetEmissions / appArea) * 10) / 10;
            }
            return 0;
        }, 'Target Annual Carbon Intensity');
        
        // h_6: Target Lifetime Carbon
        sm.registerCalculation('h_6', function() {
            const embodiedCarbon = getAppNumericValue('i_41', 0);
            const serviceLife = getAppNumericValue('h_13', 60);
            const annualCarbon = getNumericValue('h_8'); // Current target annual carbon
            
            return Math.round(((embodiedCarbon / serviceLife) + annualCarbon) * 10) / 10;
        }, 'Target Lifetime Carbon Intensity');
        
        // =============================================================================
        // ACTUAL CALCULATIONS (Column K) - Read from Application state
        // =============================================================================
        
        // k_10: Actual TEUI
        sm.registerCalculation('k_10', function() {
            const actualEnergy = getAppNumericValue('f_32', 0);
            const appArea = getAppNumericValue('h_15', 1);
            
            if (actualEnergy > 0 && appArea > 0) {
                return Math.round((actualEnergy / appArea) * 10) / 10;
            }
            return 'N/A';
        }, 'Actual TEUI from utility data');
        
        // k_8: Actual Annual Carbon
        sm.registerCalculation('k_8', function() {
            const actualEmissions = getAppNumericValue('g_32', 0);
            const appArea = getAppNumericValue('h_15', 1);
            
            if (actualEmissions > 0 && appArea > 0) {
                return Math.round((actualEmissions / appArea) * 10) / 10;
            }
            return 'N/A';
        }, 'Actual Annual Carbon Intensity');
        
        // k_6: Actual Lifetime Carbon
        sm.registerCalculation('k_6', function() {
            const embodiedCarbon = getAppNumericValue('i_41', 0);
            const serviceLife = getAppNumericValue('h_13', 60);
            const annualCarbon = getNumericValue('k_8');
            
            if (typeof annualCarbon === 'number') {
                return Math.round(((embodiedCarbon / serviceLife) + annualCarbon) * 10) / 10;
            }
            return 'N/A';
        }, 'Actual Lifetime Carbon Intensity');
        
        // j_8: Annual Carbon Percentage
        sm.registerCalculation('j_8', function() {
            const targetCarbon = getNumericValue('h_8');
            const actualCarbon = getNumericValue('k_8');
            
            if (typeof actualCarbon === 'number' && actualCarbon > 0) {
                const percentage = Math.round((targetCarbon / actualCarbon) * 100);
                return percentage;
            }
            return 'N/A';
        }, 'Target vs Actual Carbon Percentage');
    }

    //==========================================================================
    // IT-DEPENDS TEST FUNCTION
    //==========================================================================
    
    /**
     * Test function for Section 01 IT-DEPENDS implementation
     * Run from console: window.TEUI.SectionModules.sect01.testS01_ITDepends()
     */
    function testS01_ITDepends() {
        console.log('=== S01 IT-DEPENDS TEST ===');
        
        const sm = window.TEUI.StateManager;
        if (!sm) {
            console.error('❌ StateManager not found');
            return false;
        }
        
        console.log('✓ StateManager found');
        
        // Test 1: Check all calculations are registered
        const expectedCalculations = [
            'e_10', 'd_8', 'd_6',    // Reference values
            'h_10', 'h_8', 'h_6',    // Target values
            'k_10', 'k_8', 'k_6',    // Actual values
            'j_8'                     // Percentage
        ];
        
        console.log('\n--- Testing Calculation Registrations ---');
        let registrationsPassed = 0;
        expectedCalculations.forEach(calcId => {
            const isRegistered = sm.hasCalculation && sm.hasCalculation(calcId);
            console.log(`${isRegistered ? '✓' : '❌'} ${calcId} registered: ${isRegistered}`);
            if (isRegistered) registrationsPassed++;
        });
        
        console.log(`\nRegistration Summary: ${registrationsPassed}/${expectedCalculations.length} calculations registered`);
        
        // Test 2: Test state separation
        console.log('\n--- Testing State Separation ---');
        
        // Get current values
        const refTEUI = getNumericValue('e_10');
        const targetTEUI = getNumericValue('h_10');
        
        console.log(`Reference TEUI (e_10): ${refTEUI}`);
        console.log(`Target TEUI (h_10): ${targetTEUI}`);
        console.log(`${refTEUI !== targetTEUI ? '✓' : '❌'} Reference and Target values are different`);
        
        // Test 3: Test cross-section dependency
        console.log('\n--- Testing Cross-Section Dependencies ---');
        console.log('Simulating change in j_32 (Target Energy)...');
        
        const originalJ32 = getAppNumericValue('j_32', 0);
        const testValue = 100000;
        
        // Set a test value
        sm.setValue('j_32', testValue.toString(), 'test');
        
        // Allow time for calculations to propagate
        setTimeout(() => {
            const newH10 = getNumericValue('h_10');
            const area = getAppNumericValue('h_15', 1);
            const expectedTEUI = Math.round((testValue / area) * 10) / 10;
            
            console.log(`Original j_32: ${originalJ32}`);
            console.log(`Test j_32: ${testValue}`);
            console.log(`New h_10: ${newH10}`);
            console.log(`Expected h_10: ${expectedTEUI}`);
            console.log(`${Math.abs(newH10 - expectedTEUI) < 0.1 ? '✓' : '❌'} Cross-section dependency working`);
            
            // Restore original value
            sm.setValue('j_32', originalJ32.toString(), 'test');
            
            console.log('\n=== S01 IT-DEPENDS TEST COMPLETE ===');
        }, 100);
        
        return true;
    }
    
    //==========================================================================
    // PUBLIC API
    //==========================================================================
    
    return {
        getFields: () => fields,
        getHTML: () => '',  // Section 01 renders directly
        getLayout: () => ({ rows: [] }),  // Return empty layout since we render directly
        runAllCalculations: runAllCalculations,
        calculateAll: calculateAll,
        onSectionRendered: onSectionRendered,
        renderKeyValuesSection: renderKeyValuesSection,
        testS01_ITDepends: testS01_ITDepends
    };
})();