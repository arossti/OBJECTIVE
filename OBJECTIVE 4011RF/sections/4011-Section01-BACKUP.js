/**
 * 4011-Section01.js
 * Key Values (Section 1) module for TEUI Calculator 4.011
 *
 * ✅ DUAL-STATE ARCHITECTURE COMPLIANT: Consumer Section Pattern
 * ✅ CONSUMER SECTION: Reads results from upstream Pattern A sections (S02, S04, S15)  
 * ✅ DISPLAY ONLY: Shows Reference (E), Target (H), Actual (K) simultaneously
 * ✅ NO INTERNAL STATE: No TargetState/ReferenceState objects needed
 * ✅ CLEAN DEPENDENCIES: Uses approved external dependency patterns
 * 
 * Direct HTML rendering for precise styling, dynamic calculations for key metrics.
 * B Pattern contamination eliminated - follows S01-PATTERN-A-REFACTOR-WORKPLAN.md
 */

window.TEUI = window.TEUI || {};
window.TEUI.SectionModules = window.TEUI.SectionModules || {};

window.TEUI.SectionModules.sect01 = (function () {
  // Animation state tracking
  const activeAnimations = {}; // Stores { fieldId: animationFrameId }

  //==========================================================================
  // PART 1: FIELD DEFINITIONS
  //==========================================================================

  // Field definitions primarily for StateManager tracking and reference
  const fields = {
    // T.1 Lifetime Carbon
    e_6: {
      type: "calculated",
      label: "Lifetime Carbon Ref",
      defaultValue: "24.4",
      section: "keyValues",
    },
    h_6: {
      type: "calculated",
      label: "Lifetime Carbon Target",
      defaultValue: "11.7",
      section: "keyValues",
    },
    k_6: {
      type: "calculated",
      label: "Lifetime Carbon Actual",
      defaultValue: "11.7",
      section: "keyValues",
    },
    // T.2 Annual Carbon
    e_8: {
      type: "calculated",
      label: "Annual Carbon Ref",
      defaultValue: "17.4",
      section: "keyValues",
    },
    h_8: {
      type: "calculated",
      label: "Annual Carbon Target",
      defaultValue: "4.7",
      section: "keyValues",
    },
    k_8: {
      type: "calculated",
      label: "Annual Carbon Actual",
      defaultValue: "4.8",
      section: "keyValues",
    },
    j_8: {
      type: "calculated",
      label: "Annual Carbon %",
      defaultValue: "14%",
      section: "keyValues",
    },
    // T.3 TEUI
    e_10: {
      type: "calculated",
      label: "TEUI Ref",
      defaultValue: "341.2",
      section: "keyValues",
    },
    f_10: {
      type: "calculated",
      label: "TEUI Ref Tier",
      defaultValue: "tier1",
      section: "keyValues",
    },
    h_10: {
      type: "calculated",
      label: "TEUI Target",
      defaultValue: "93.0",
      section: "keyValues",
    },
    i_10: {
      type: "calculated",
      label: "TEUI Target Tier",
      defaultValue: "tier3",
      section: "keyValues",
    },
    j_10: {
      type: "calculated",
      label: "TEUI %",
      defaultValue: "41%",
      section: "keyValues",
    },
    k_10: {
      type: "calculated",
      label: "TEUI Actual",
      defaultValue: "93.1",
      section: "keyValues",
    },
    // Inputs (Placeholder definitions for clarity)
    f_32: {
      type: "calculated",
      label: "Source: Actual Energy",
      defaultValue: "0",
      section: "keyValues",
    },
    j_32: {
      type: "calculated",
      label: "Source: Target Energy",
      defaultValue: "0",
      section: "keyValues",
    },
    h_15: {
      type: "calculated",
      label: "Source: Area",
      defaultValue: "1",
      section: "keyValues",
    },
    i_41: {
      type: "calculated",
      label: "Source: Embodied Carbon",
      defaultValue: "0",
      section: "keyValues",
    },
    h_13: {
      type: "calculated",
      label: "Source: Service Life",
      defaultValue: "50",
      section: "keyValues",
    },
    k_32: {
      type: "calculated",
      label: "Source: Target Emissions",
      defaultValue: "0",
      section: "keyValues",
    },
    g_32: {
      type: "calculated",
      label: "Source: Actual Emissions",
      defaultValue: "0",
      section: "keyValues",
    },
    d_13: {
      type: "calculated",
      label: "Reference Standard",
      defaultValue: "",
      section: "keyValues",
    },
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
        .key-title-mode-text {
            font-weight: bold; /* Matches Arial Black's typical boldness */
            margin-left: 8px; 
            font-size: 1.5rem; /* Match .key-title-combined */
            /* Color is inherited from .key-title-combined */
        }
        @media (max-width: 992px) { 
            .key-value { font-size: 1.7rem; } 
            .key-title-combined { font-size: 1.3rem; } 
            .key-title-mode-text { font-size: 1.3rem; }
        }
        @media (max-width: 768px) { 
            .key-value { font-size: 1.4rem; } 
            .key-title-combined { font-size: 1.1rem; } 
            .key-title-mode-text { font-size: 1.1rem; }
            .key-explanation { font-size: 0.65rem; } 
        }
    `;

  //==========================================================================
  // PART 3: DIRECT RENDERING
  //==========================================================================

  function getKeyValuesHTML() {
    return `
            <table class="key-values-table">
                <thead><tr><th class="key-values-label-cell key-values-header">Key Values</th><th class="key-values-ref-cell key-values-header">Reference</th><th class="key-values-target-cell key-values-header">Target</th><th class="key-values-actual-cell key-values-header">Actual</th><th class="key-values-percent-cell key-values-header">%</th></tr></thead>
                <tbody>
                    <tr><td class="key-values-label-cell"><div class="key-title-container"><span class="title-explanation">Lifetime Emissions Intensity kgCO2e/m²/Service Life (Yrs)</span><span class="key-title-combined" id="title-t1"><span class="key-title-id">T.1</span>Lifetime Carbon <span class="key-title-mode-text"></span></span><div id="lifetime-carbon-gauge" class="linear-gauge-container"><div class="linear-gauge-bar"></div></div></div></td><td class="key-values-ref-cell" data-field-id="e_6"><span class="key-explanation ref-explanation">Reference 100% (Baseline)</span><span class="key-value ref-value">24.4</span></td><td class="key-values-target-cell" data-field-id="h_6"><span class="key-explanation">Targeted (Design) 71% Reduction</span><span class="key-value">11.7</span></td><td class="key-values-actual-cell" data-field-id="k_6"><span class="key-explanation">Actual (Utility Bills)</span><span class="key-value">11.7</span></td><td class="key-values-percent-cell"><span class="percent-value">N/A</span></td></tr>
                    <tr><td class="key-values-label-cell"><div class="key-title-container"><span class="title-explanation">Annual Operational Emissions Intensity kgCO2e/m²</span><span class="key-title-combined" id="title-t2"><span class="key-title-id">T.2</span>Annual Carbon <span class="key-title-mode-text"></span></span><div id="annual-carbon-gauge" class="linear-gauge-container"><div class="linear-gauge-bar"></div></div></div></td><td class="key-values-ref-cell" data-field-id="e_8"><span class="key-explanation ref-explanation">Reference 100% (Baseline)</span><span class="key-value ref-value">17.4</span></td><td class="key-values-target-cell" data-field-id="h_8"><span class="key-explanation">Targeted (Design) 86% Reduction</span><span class="key-value">4.7</span></td><td class="key-values-actual-cell" data-field-id="k_8"><span class="key-explanation">Actual (Utility Bills)</span><span class="key-value">4.8</span></td><td class="key-values-percent-cell" data-field-id="j_8"><span class="checkmark">✓</span><span class="percent-value">14%</span></td></tr>
                    <tr><td class="key-values-label-cell"><div class="key-title-container"><span class="title-explanation">Total Annual Operational Energy Use Intensity kWh/m²/yr</span><span class="key-title-combined" id="title-t3"><span class="key-title-id">T.3</span>TEUI <span class="key-title-mode-text"></span></span><div id="teui-gauge" class="linear-gauge-container"><div class="linear-gauge-bar"></div></div></div></td><td class="key-values-ref-cell" data-field-id="e_10"><span class="key-explanation ref-explanation">Reference 100% (Baseline) <span class="cost-indicator ref-cost"></span></span><span class="key-value ref-value"><span class="tier-indicator t1-tag">tier1</span> <span class="numeric-value">341.2</span></span></td><td class="key-values-target-cell" data-field-id="h_10"><span class="key-explanation">Targeted (Design) 59% Reduction <span class="cost-indicator"></span></span><span class="key-value" data-tier-field="i_10"><span class="tier-indicator t3-tag">tier3</span> 93.0</span></td><td class="key-values-actual-cell" data-field-id="k_10"><span class="key-explanation">Actual (Utility Bills) <span class="cost-indicator"></span></span><span class="key-value">93.1</span></td><td class="key-values-percent-cell" data-field-id="j_10"><span class="checkmark">✓</span><span class="percent-value">41%</span></td></tr>
                </tbody>
            </table>
        `;
  }

  function renderKeyValuesSection() {
    const sectionElement = document.getElementById("keyValues");
    const contentContainer = sectionElement?.querySelector(".section-content");
    if (contentContainer) {
      contentContainer.innerHTML = getKeyValuesHTML();
    }
  }

  //==========================================================================
  // PART 4: CONSUMER SECTION PATTERN - CLEAN EXTERNAL DEPENDENCIES
  //==========================================================================

  /**
   * DUAL-STATE compliant helper for external dependencies
   * ✅ CONSUMER SECTION PATTERN: Clean external dependency pattern
   * Upstream sections handle Target/Reference internally, S01 reads results
   */
  function getGlobalNumericValue(fieldId) {
    const rawValue = window.TEUI?.StateManager?.getValue(fieldId);
    return window.TEUI.parseNumeric(rawValue) || 0;
  }

  /**
   * Standardized helper function to set calculated values with proper formatting.
   * CRITICAL: Preserves Section 01's custom styling and HTML structure
   * @param {string} fieldId - The field ID to update
   * @param {number} rawValue - The raw numeric value to store
   * @param {string} formatType - The format type for display (e.g., 'number-1dp', 'number-2dp-comma')
   */
  function setCalculatedValue(
    fieldId,
    rawValue,
    formatType = "number-2dp-comma",
  ) {
    // Store raw value as string in StateManager for precision
    if (window.TEUI?.StateManager?.setValue) {
      const valueToStore = isFinite(rawValue) ? rawValue.toString() : "N/A";

      // ✅ CONSUMER SECTION PATTERN: Only write global unprefixed values
      // S01 must NOT contaminate target_/ref_ state - upstream sections handle that
      window.TEUI.StateManager.setValue(fieldId, valueToStore, "calculated");

      // console.log(`S01: ✅ DUAL UPDATE - ${fieldId}: target_${fieldId}=${valueToStore} AND ref_${fieldId}=${valueToStore} AND global ${fieldId}=${valueToStore}`);
    }

    // CRITICAL: Use updateDisplayValue to preserve custom styling instead of direct DOM manipulation
    // This maintains tier indicators, styling classes, and visual design
    let formattedValue;
    if (rawValue === "N/A" || !isFinite(rawValue)) {
      formattedValue = "N/A";
    } else {
      formattedValue =
        window.TEUI?.formatNumber?.(rawValue, formatType) ??
        rawValue.toString();
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
   * REFERENCE MODEL ENGINE: Consumer section pattern - reads Reference results from upstream sections
   * ✅ CONSUMER SECTION PATTERN: No internal state, external dependencies only
   */
  function calculateReferenceModel() {
    // Add recursion protection
    if (referenceCalculationInProgress) {
      return;
    }

    referenceCalculationInProgress = true;

    try {
      console.log("🔍 [S01] REFERENCE MODEL: Reading upstream Reference values...");
      
      // ✅ CLEAN EXTERNAL DEPENDENCIES: Read Reference values from upstream Pattern A sections
      // S15: ref_h_136 (reference TEUI final calculation)
      const referenceTEUI = getGlobalNumericValue("ref_h_136") || 341.2;
      console.log(`🔍 [S01] ref_h_136 from S15: ${referenceTEUI}`);
      
      // S04: ref_k_32 (reference emissions totals)
      const refTargetEmissions = getGlobalNumericValue("ref_k_32") || 14740.8;
      console.log(`🔍 [S01] ref_k_32 from S04: ${refTargetEmissions}`);
      
      // S02: h_15 (area) - upstream section handles Target vs Reference internally
      const area = getGlobalNumericValue("h_15") || 1427.2;
      console.log(`🔍 [S01] h_15 from S02: ${area}`);
      
      // S05: ref_i_39 (reference embodied carbon)
      const refEmbodiedCarbon = getGlobalNumericValue("ref_i_39") || getGlobalNumericValue("i_41") || 0;
      console.log(`🔍 [S01] ref_i_39 from S05: ${refEmbodiedCarbon}`);
      
      // S02: h_13 (service life) - upstream section handles Target vs Reference internally
      const serviceLife = getGlobalNumericValue("h_13") || 60;
      console.log(`🔍 [S01] h_13 from S02: ${serviceLife}`);

      // Calculate Reference Annual Carbon (e_8) using clean external dependencies
      let referenceAnnualCarbon = 0;
      if (area > 0) {
        referenceAnnualCarbon =
          Math.round((refTargetEmissions / area) * 10) / 10;
      }

      // Calculate Reference Lifetime Carbon
      let referenceLifetimeCarbon = 0;
      if (serviceLife > 0) {
        referenceLifetimeCarbon =
          Math.round(
            (refEmbodiedCarbon / serviceLife + referenceAnnualCarbon) * 10,
          ) / 10;
      }

      console.log(`🔍 [S01] REFERENCE RESULTS: e_10=${referenceTEUI}, e_8=${referenceAnnualCarbon}, e_6=${referenceLifetimeCarbon}`);

      // Use standardized helper with proper 1dp formatting for key values
      setCalculatedValue("e_10", referenceTEUI, "number-1dp");
      setCalculatedValue("e_8", referenceAnnualCarbon, "number-1dp");
      setCalculatedValue("e_6", referenceLifetimeCarbon, "number-1dp");
      
      console.log("✅ [S01] REFERENCE MODEL: Values stored in Reference column (e_6, e_8, e_10)");
      console.log("✅ [S01] CONSUMER SECTION: S01 does NOT write ref_ prefixed values - upstream sections handle that");
    } finally {
      referenceCalculationInProgress = false;
    }
  }

  //==========================================================================
  // DUAL-ENGINE ARCHITECTURE: TARGET MODEL (Column H)
  //==========================================================================

  /**
   * TARGET MODEL ENGINE: Consumer section pattern with clean external dependencies
   * ✅ CONSUMER SECTION PATTERN: Simplified calculations using upstream results
   */
  function calculateTargetModel() {
    // Add recursion protection
    if (targetCalculationInProgress) {
      return;
    }

    targetCalculationInProgress = true;

    try {
      console.log("🎯 [S01] TARGET MODEL: Reading upstream Target values...");
      
      // ✅ CLEAN EXTERNAL DEPENDENCIES: Read from upstream Pattern A sections
      // S04: j_32 (target energy total), f_32 (actual energy), k_32 (target emissions), g_32 (actual emissions)
      const targetEnergy = getGlobalNumericValue("j_32");
      const actualEnergy = getGlobalNumericValue("f_32");
      const targetEmissions = getGlobalNumericValue("k_32");
      const actualEmissions = getGlobalNumericValue("g_32");
      console.log(`🎯 [S01] Energy: j_32=${targetEnergy}, f_32=${actualEnergy}, k_32=${targetEmissions}, g_32=${actualEmissions}`);
      
      // S02: h_15 (area), h_13 (service life), i_41 (embodied carbon) - upstream handles Target vs Reference
      const area = getGlobalNumericValue("h_15") || 1;
      const serviceLife = getGlobalNumericValue("h_13") || 50;
      const embodiedCarbon = getGlobalNumericValue("i_41") || 345.82;
      console.log(`🎯 [S01] Building: h_15=${area}, h_13=${serviceLife}, i_41=${embodiedCarbon}`);
      
      // S02: d_14 (use type)
      const useType = window.TEUI.StateManager?.getValue("d_14") || "Targeted Use";
      console.log(`🎯 [S01] Use type: ${useType}`);

      // ✅ SIMPLIFIED: Calculate Target TEUI (h_10)
      const targetTEUI = area > 0 ? Math.round((targetEnergy / area) * 10) / 10 : 0;

      // ✅ SIMPLIFIED: Calculate Actual TEUI (k_10) - only if in Utility Bills mode
      let actualTEUI = 0;
      if (useType === "Utility Bills" && area > 0) {
        actualTEUI = Math.round((actualEnergy / area) * 10) / 10;
      }

      // Calculate Target Annual Carbon (h_8)
      const targetAnnualCarbon = area > 0 ? Math.round((targetEmissions / area) * 10) / 10 : 0;

      // Calculate Actual Annual Carbon (k_8) - only if in Utility Bills mode
      let actualAnnualCarbon = 0;
      if (useType === "Utility Bills" && area > 0) {
        actualAnnualCarbon = Math.round((actualEmissions / area) * 10) / 10;
      }

      // Calculate Target Lifetime Carbon (h_6)
      const targetLifetimeCarbon = serviceLife > 0 ? 
        Math.round((embodiedCarbon / serviceLife + targetAnnualCarbon) * 10) / 10 : 0;

      // Calculate Actual Lifetime Carbon (k_6) - only if in Utility Bills mode
      let actualLifetimeCarbon = 0;
      if (useType === "Utility Bills" && serviceLife > 0) {
        actualLifetimeCarbon = 
          Math.round((embodiedCarbon / serviceLife + actualAnnualCarbon) * 10) / 10;
      }

      console.log(`🎯 [S01] TARGET RESULTS: h_10=${targetTEUI}, h_8=${targetAnnualCarbon}, h_6=${targetLifetimeCarbon}`);
      console.log(`🎯 [S01] ACTUAL RESULTS: k_10=${actualTEUI}, k_8=${actualAnnualCarbon}, k_6=${actualLifetimeCarbon}`);

      // Use standardized helper with proper 1dp formatting for key values
      setCalculatedValue("h_10", targetTEUI, "number-1dp");
      setCalculatedValue("h_8", targetAnnualCarbon, "number-1dp");
      setCalculatedValue("h_6", targetLifetimeCarbon, "number-1dp");

      // Handle Actual values (K column) - conditional based on use type
      if (useType === "Utility Bills") {
        setCalculatedValue("k_10", actualTEUI, "number-1dp");
        setCalculatedValue("k_8", actualAnnualCarbon, "number-1dp");
        setCalculatedValue("k_6", actualLifetimeCarbon, "number-1dp");
        console.log("✅ [S01] TARGET MODEL: Values stored in Target (h_6, h_8, h_10) and Actual (k_6, k_8, k_10) columns");
      } else {
        setCalculatedValue("k_10", "N/A", "raw");
        setCalculatedValue("k_8", "N/A", "raw");
        setCalculatedValue("k_6", "N/A", "raw");
        console.log("✅ [S01] TARGET MODEL: Values stored in Target (h_6, h_8, h_10) columns, Actual set to N/A");
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
    const useType = window.TEUI.StateManager?.getValue("d_14") || "Targeted Use";

    // ✅ CLEAN EXTERNAL DEPENDENCIES: Read calculated values using consumer pattern
    // Reference values from upstream sections or stored ref_ values
    const referenceAnnualCarbon = getGlobalNumericValue("ref_e_8") || getGlobalNumericValue("e_8") || 17.4;
    const referenceLifetimeCarbon = getGlobalNumericValue("ref_e_6") || getGlobalNumericValue("e_6") || 24.4;
    const referenceTEUI = getGlobalNumericValue("ref_e_10") || getGlobalNumericValue("e_10") || 341.2;

    // Target values from calculated results
    const targetAnnualCarbon = getGlobalNumericValue("h_8") || 4.7;
    const targetLifetimeCarbon = getGlobalNumericValue("h_6") || 11.7;
    const targetTEUI = getGlobalNumericValue("h_10") || 93.0;

    // Actual values from calculated results
    const actualLifetimeCarbon = getGlobalNumericValue("k_6") || 11.7;
    const actualAnnualCarbon = getGlobalNumericValue("k_8") || 4.8;
    const actualTEUI = getGlobalNumericValue("k_10") || 93.1;

    // Calculate T.2 Annual Carbon Percentage (j_8)
    let annualCarbonPercent = 0;
    if (referenceAnnualCarbon !== 0) {
      const valueToUse =
        useType === "Utility Bills" && !isNaN(actualAnnualCarbon)
          ? actualAnnualCarbon
          : targetAnnualCarbon;
      annualCarbonPercent = Math.round(
        (valueToUse / referenceAnnualCarbon) * 100,
      );
    }

    // Calculate T.3 TEUI Percentage (j_10)
    let teuiPercent = 0;
    if (referenceTEUI !== 0) {
      const valueToUse =
        useType === "Utility Bills" && !isNaN(actualTEUI)
          ? actualTEUI
          : targetTEUI;
      teuiPercent = Math.round((valueToUse / referenceTEUI) * 100);
    }

    // Only update StateManager if values have changed
    if (window.TEUI?.StateManager) {
      const currentJ8 = window.TEUI.StateManager.getValue("j_8");
      const currentJ10 = window.TEUI.StateManager.getValue("j_10");
      const newJ8 = `${annualCarbonPercent}%`;
      const newJ10 = `${teuiPercent}%`;

      if (currentJ8 !== newJ8) {
        window.TEUI.StateManager.setValue("j_8", newJ8, "calculated");
      }
      if (currentJ10 !== newJ10) {
        window.TEUI.StateManager.setValue("j_10", newJ10, "calculated");
      }
    }

    // Update explanation text for Target columns
    updateExplanationText("h_6", targetLifetimeCarbon, referenceLifetimeCarbon);
    updateExplanationText("h_8", targetAnnualCarbon, referenceAnnualCarbon);
    updateExplanationText("h_10", targetTEUI, referenceTEUI);

    // Update explanation text for Actual columns
    updateActualExplanationText(
      "k_6",
      actualLifetimeCarbon,
      referenceLifetimeCarbon,
      useType,
    );
    updateActualExplanationText(
      "k_8",
      actualAnnualCarbon,
      referenceAnnualCarbon,
      useType,
    );
    updateActualExplanationText("k_10", actualTEUI, referenceTEUI, useType);
  }

  function updateExplanationText(fieldId, targetValue, referenceValue) {
    if (referenceValue > 0) {
      const reduction = 1 - targetValue / referenceValue;
      const reductionPercent = Math.round(reduction * 100);
      const explanationText = `Targeted (Design) ${reductionPercent}% Reduction`;

      const explanationSpan = document.querySelector(
        `[data-field-id="${fieldId}"] .key-explanation`,
      );
      if (explanationSpan) {
        explanationSpan.textContent = explanationText;
      }
    }
  }

  function updateActualExplanationText(
    fieldId,
    actualValue,
    referenceValue,
    useType,
  ) {
    const explanationSpan = document.querySelector(
      `[data-field-id="${fieldId}"] .key-explanation`,
    );
    if (!explanationSpan) return;

    if (
      useType === "Utility Bills" &&
      referenceValue > 0 &&
      typeof actualValue === "number" &&
      isFinite(actualValue)
    ) {
      const reduction = 1 - actualValue / referenceValue;
      const reductionPercent = Math.round(reduction * 100);
      explanationSpan.textContent = `Actual (Utility Bills) ${reductionPercent}% Reduction`;
    } else {
      explanationSpan.textContent = "Actual (Utility Bills)";
    }
  }

  //==========================================================================
  // DISPLAY AND INTERACTION FUNCTIONS
  //==========================================================================

  function getCurrentNumericValue(element) {
    if (!element) return NaN;

    const numericSpan = element.querySelector(".numeric-value");
    let textContent = numericSpan
      ? numericSpan.textContent
      : element.textContent;

    if (!numericSpan) {
      const clone = element.cloneNode(true);
      clone
        .querySelectorAll(".tier-indicator, .checkmark")
        .forEach((el) => el.remove());
      textContent = clone.textContent;
    }

    const cleanedText = textContent.replace(/[^\d.-]/g, "").trim();
    return window.TEUI?.parseNumeric?.(cleanedText, NaN) ?? NaN;
  }

  function updateDisplayValue(fieldId, value, tierOverride = null) {
    const element = document.querySelector(
      `[data-field-id="${fieldId}"] .key-value, [data-field-id="${fieldId}"] .percent-value`,
    );
    if (!element) return;

    const fieldsToAnimate = ["h_10", "k_10", "e_10"];

    if (fieldsToAnimate.includes(fieldId)) {
      const startValue = getCurrentNumericValue(element);
      const endValue = window.TEUI?.parseNumeric?.(value, 0) ?? 0;
      const duration = 500;

      if (
        !isNaN(startValue) &&
        !isNaN(endValue) &&
        Math.abs(startValue - endValue) > 0.01
      ) {
        if (activeAnimations[fieldId]) {
          cancelAnimationFrame(activeAnimations[fieldId]);
        }
        const startTime = performance.now();
        const animateStep = (timestamp) => {
          const elapsedTime = timestamp - startTime;
          const progress = Math.min(1, elapsedTime / duration);
          const easedProgress = 1 - Math.pow(1 - progress, 2);
          const currentValue =
            startValue + (endValue - startValue) * easedProgress;
          const formattedValue =
            window.TEUI?.formatNumber?.(currentValue, "number-1dp") ??
            currentValue.toString();

          if (fieldId === "h_10") {
            const tierValue =
              tierOverride ||
              window.TEUI.StateManager?.getValue("i_10") ||
              "tier3";
            const tierClass =
              tierValue.toLowerCase().replace(" ", "-") + "-tag";
            element.innerHTML = `<span class="tier-indicator ${tierClass}">${tierValue}</span> ${formattedValue}`;
          } else if (fieldId === "e_10") {
            // Reference TEUI with tier1 indicator
            const numericSpan = element.querySelector(".numeric-value");
            if (numericSpan) {
              numericSpan.textContent = formattedValue;
            } else {
              element.innerHTML = `<span class="tier-indicator t1-tag">tier1</span> <span class="numeric-value">${formattedValue}</span>`;
            }
            element.classList.add("ref-value");
          } else {
            element.textContent = formattedValue;
          }

          if (progress < 1) {
            activeAnimations[fieldId] = requestAnimationFrame(animateStep);
          } else {
            const finalFormattedValue =
              window.TEUI?.formatNumber?.(endValue, "number-1dp") ??
              endValue.toString();
            if (fieldId === "h_10") {
              const tierValue =
                tierOverride ||
                window.TEUI.StateManager?.getValue("i_10") ||
                "tier3";
              const tierClass =
                tierValue.toLowerCase().replace(" ", "-") + "-tag";
              element.innerHTML = `<span class="tier-indicator ${tierClass}">${tierValue}</span> ${finalFormattedValue}`;
            } else if (fieldId === "e_10") {
              // Final Reference TEUI with tier1 indicator
              const numericSpan = element.querySelector(".numeric-value");
              if (numericSpan) {
                numericSpan.textContent = finalFormattedValue;
              } else {
                element.innerHTML = `<span class="tier-indicator t1-tag">tier1</span> <span class="numeric-value">${finalFormattedValue}</span>`;
              }
              element.classList.add("ref-value");
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
      const tierValue =
        tierOverride ||
        window.TEUI.StateManager?.getValue("i_10") ||
        "tier3";
      const tierClass = tierValue.toLowerCase().replace(" ", "-") + "-tag";
      element.innerHTML = `<span class="tier-indicator ${tierClass}">${tierValue}</span> ${value}`;
    } else if (fieldId === "e_10") {
      const numericSpanE10 = element.querySelector(".numeric-value");
      if (numericSpanE10) {
        numericSpanE10.textContent = value;
      } else {
        element.textContent = value;
      }
      if (!element.querySelector(".tier-indicator.t1-tag")) {
        const tierSpan = document.createElement("span");
        tierSpan.className = "tier-indicator t1-tag";
        tierSpan.textContent = "tier1";
        element.prepend(tierSpan, " ");
      }
      element.classList.add("ref-value");
    } else if (fieldId === "e_6" || fieldId === "e_8") {
      element.textContent = value;
      element.classList.add("ref-value");
    } else if (fieldId === "j_8" || fieldId === "j_10") {
      const percentSpan = element.closest("td").querySelector(".percent-value");
      if (percentSpan) percentSpan.textContent = value;
    } else {
      element.textContent = value;
    }
  }

  function calculateTargetTier() {
    if (!window.TEUI?.StateManager) return;

    // ✅ CLEAN EXTERNAL DEPENDENCIES: Read calculated values using consumer pattern
    const targetTEUI_h10 = getGlobalNumericValue("h_10") || 93.0;
    const referenceTEUI_e10 = getGlobalNumericValue("ref_e_10") || getGlobalNumericValue("e_10") || 341.2;
    const standard_d13 = window.TEUI.StateManager?.getValue("d_13") || "";

    // Calculate the reduction percentage (D144 in Excel formula) - this is 1-(target/reference)
    let reduction = 0;
    if (referenceTEUI_e10 !== 0) {
      reduction = 1 - targetTEUI_h10 / referenceTEUI_e10;
    }

    const standardLower = standard_d13.toLowerCase();
    const isCodeStandard =
      standardLower.includes("nbc") ||
      standardLower.includes("obc") ||
      standardLower.includes("necb");

    let tier = "No Tier";

    // Excel formula logic: IF(OR(ISNUMBER(SEARCH("NBC", D13)), ISNUMBER(SEARCH("OBC", D13)), ISNUMBER(SEARCH("NECB", D13))),
    //   IF(D144>0.7, "tier5", IF(D144>0.6, "tier4", IF(D144>0.5, "tier3", IF(D144>0.4, "tier2", "tier1")))),
    //   IF(D144>0.6, "tier4", IF(D144>0.45, "tier3", IF(D144>0.2, "tier2", IF(D144>0.1, "tier1", "No Tier")))))
    // Where D144 = 1-(target/reference) = reduction percentage

    if (isCodeStandard) {
      // For code standards (NBC/OBC/NECB): tier5 is the BEST performance (>70% reduction)
      if (reduction > 0.7)
        tier = "tier5"; // Best: >70% reduction
      else if (reduction > 0.6)
        tier = "tier4"; // Very good: >60% reduction
      else if (reduction > 0.5)
        tier = "tier3"; // Good: >50% reduction
      else if (reduction > 0.4)
        tier = "tier2"; // Fair: >40% reduction
      else tier = "tier1"; // Baseline: ≤40% reduction
    } else {
      // For other standards: tier4 is the best available (>60% reduction)
      if (reduction > 0.6)
        tier = "tier4"; // Best: >60% reduction
      else if (reduction > 0.45)
        tier = "tier3"; // Good: >45% reduction
      else if (reduction > 0.2)
        tier = "tier2"; // Fair: >20% reduction
      else if (reduction > 0.1)
        tier = "tier1"; // Baseline: >10% reduction
      else tier = "No Tier"; // Below baseline: ≤10% reduction
    }

    // Only update StateManager if value has changed
    const currentTier = window.TEUI.StateManager.getValue("i_10");
    if (currentTier !== tier) {
      window.TEUI.StateManager.setValue("i_10", tier, "calculated");
    }
  }

  function updateTEUIDisplay() {
    const useType =
      window.TEUI.StateManager?.getValue("d_14") || "Targeted Use";
    const isUtilityMode = useType === "Utility Bills";

    // MIRROR TARGET/APPLICATION PATTERN: Use Reference values for Column E display
    // Get the actual Reference values calculated by calculateReferenceModel()
    const e6RefRaw = window.TEUI.StateManager?.getValue("ref_e_6") || "24.4";
    const e8RefRaw = window.TEUI.StateManager?.getValue("ref_e_8") || "17.4";
    const e10RefRaw = window.TEUI.StateManager?.getValue("ref_e_10") || "341.2";

    // CRITICAL FIX: Format values before passing to updateDisplayValue to prevent decimal burp
    const e6RefFormatted =
      window.TEUI?.formatNumber?.(
        window.TEUI?.parseNumeric?.(e6RefRaw, 24.4),
        "number-1dp",
      ) ?? e6RefRaw;
    const e8RefFormatted =
      window.TEUI?.formatNumber?.(
        window.TEUI?.parseNumeric?.(e8RefRaw, 17.4),
        "number-1dp",
      ) ?? e8RefRaw;
    const e10RefFormatted =
      window.TEUI?.formatNumber?.(
        window.TEUI?.parseNumeric?.(e10RefRaw, 341.2),
        "number-1dp",
      ) ?? e10RefRaw;

    updateDisplayValue("e_6", e6RefFormatted);
    updateDisplayValue("e_8", e8RefFormatted);
    updateDisplayValue("e_10", e10RefFormatted);

    // ✅ CONSUMER PATTERN: Read calculated Target values using clean helpers
    const h6Raw = getGlobalNumericValue("h_6") || 11.7;
    const h8Raw = getGlobalNumericValue("h_8") || 4.7;
    const h10Raw = getGlobalNumericValue("h_10") || 93.0;

    // ✅ CONSUMER PATTERN: Format calculated values for display
    const h6Formatted =
      window.TEUI?.formatNumber?.(h6Raw, "number-1dp") ?? h6Raw.toString();
    const h8Formatted =
      window.TEUI?.formatNumber?.(h8Raw, "number-1dp") ?? h8Raw.toString();
    const h10Formatted =
      window.TEUI?.formatNumber?.(h10Raw, "number-1dp") ?? h10Raw.toString();

    updateDisplayValue("h_6", h6Formatted);
    updateDisplayValue("h_8", h8Formatted);

    // Calculate tier for h_10 to pass atomically
    const targetTEUI_h10 = getGlobalNumericValue("h_10") || 93.0;
    const referenceTEUI_e10 = getGlobalNumericValue("ref_e_10") || getGlobalNumericValue("e_10") || 341.2;
    const standard_d13 = window.TEUI.StateManager?.getValue("d_13") || "";

    let reduction = 0;
    if (referenceTEUI_e10 !== 0) {
      reduction = 1 - targetTEUI_h10 / referenceTEUI_e10;
    }

    const standardLower = standard_d13.toLowerCase();
    const isCodeStandard =
      standardLower.includes("nbc") ||
      standardLower.includes("obc") ||
      standardLower.includes("necb");

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
    updateDisplayValue("h_10", h10Formatted, calculatedTier);

    // Update Actual Column (K) values - conditional on Utility Bills mode
    if (isUtilityMode) {
      const k6Raw = getGlobalNumericValue("k_6") || 11.7;
      const k8Raw = getGlobalNumericValue("k_8") || 4.8;
      const k10Raw = getGlobalNumericValue("k_10") || 93.1;

      // ✅ CONSUMER PATTERN: Format Actual values for display
      const k6Formatted =
        window.TEUI?.formatNumber?.(k6Raw, "number-1dp") ?? k6Raw.toString();
      const k8Formatted =
        window.TEUI?.formatNumber?.(k8Raw, "number-1dp") ?? k8Raw.toString();

      updateDisplayValue("k_6", k6Formatted);
      updateDisplayValue("k_8", k8Formatted);

      // Special handling for k_10 (Actual TEUI)
      const energyValue_f32 = getGlobalNumericValue("f_32");
      let actualTEUIDisplay = "N/A";
      if (energyValue_f32 === 0 || Math.abs(energyValue_f32) < 0.01) {
        actualTEUIDisplay = "0.0";
      } else {
        actualTEUIDisplay =
          window.TEUI?.formatNumber?.(k10Raw, "number-1dp") ?? k10Raw.toString();
      }
      updateDisplayValue("k_10", actualTEUIDisplay);
    } else {
      updateDisplayValue("k_6", "N/A");
      updateDisplayValue("k_8", "N/A");
      updateDisplayValue("k_10", "N/A");
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
    const percentValue =
      referenceValue !== 0
        ? Math.min(100, Math.max(0, 100 - (actualValue / referenceValue) * 100))
        : 0;
    const displayWidth = percentValue === 0 ? "4px" : `${percentValue}%`;
    gaugeBar.style.width = displayWidth;

    gaugeBar.className = "linear-gauge-bar";
    if (percentValue >= 75) gaugeBar.classList.add("gauge-excellent");
    else if (percentValue >= 50) gaugeBar.classList.add("gauge-good");
    else if (percentValue >= 25) gaugeBar.classList.add("gauge-warning");
    else gaugeBar.classList.add("gauge-poor");

    if (gaugeId === "teui-gauge") checkTargetExceedsReference();
  }

  function getGaugeValues(gaugeId) {
    const useType =
      window.TEUI.StateManager?.getValue("d_14") || "Targeted Use";
    const isUtilityMode = useType === "Utility Bills";
    let actualFieldApp, targetFieldApp, refFieldPrefixed;
    let defaultActual, defaultTarget, defaultRef;

    if (gaugeId === "teui-gauge") {
      refFieldPrefixed = "ref_e_10";
      defaultRef = 341.2;
      actualFieldApp = "k_10";
      defaultActual = 93.1;
      targetFieldApp = "h_10";
      defaultTarget = 93.0;
    } else if (gaugeId === "annual-carbon-gauge") {
      refFieldPrefixed = "ref_e_8";
      defaultRef = 17.4;
      actualFieldApp = "k_8";
      defaultActual = 4.8;
      targetFieldApp = "h_8";
      defaultTarget = 4.7;
    } else if (gaugeId === "lifetime-carbon-gauge") {
      refFieldPrefixed = "ref_e_6";
      defaultRef = 24.4;
      actualFieldApp = "k_6";
      defaultActual = 11.7;
      targetFieldApp = "h_6";
      defaultTarget = 11.7;
    } else {
      return { actualValue: 0, referenceValue: 100 };
    }

    // ✅ CLEAN EXTERNAL DEPENDENCIES: Use consumer pattern for gauge values
    const referenceValue = getGlobalNumericValue(refFieldPrefixed) || getGlobalNumericValue(refFieldPrefixed.replace("ref_", "")) || defaultRef;
    const appValueForGauge = getGlobalNumericValue(
      isUtilityMode ? actualFieldApp : targetFieldApp
    ) || (isUtilityMode ? defaultActual : defaultTarget);

    return { actualValue: appValueForGauge, referenceValue };
  }

  function checkTargetExceedsReference() {
    // ✅ CLEAN EXTERNAL DEPENDENCIES: Use consumer pattern
    const targetValue = getGlobalNumericValue("h_10") || 93.0;
    const referenceValue = getGlobalNumericValue("ref_e_10") || getGlobalNumericValue("e_10") || 341.2;

    const gaugeContainer = document
      .getElementById("teui-gauge")
      ?.closest(".key-title-container");
    const teuiTitleEl = gaugeContainer?.querySelector(".key-title-combined");

    if (!teuiTitleEl) return;

    let warningEl = teuiTitleEl.querySelector(".teui-warning");
    if (targetValue > referenceValue) {
      if (!warningEl) {
        warningEl = document.createElement("span");
        warningEl.className = "teui-warning";
        warningEl.textContent = " TARGET>REFERENCE!";
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
  // ⚠️ WARNING: ESLint flags isInitializing as unused, but may be needed for future initialization logic
  // DO NOT remove - preserved for development (June 13, 2025)
  let isInitializing = false;

  function updateTitleModeIndicators() {
    if (!window.TEUI || !window.TEUI.StateManager) return;

    const useType =
      window.TEUI.StateManager.getValue("d_14") || "Targeted Use";
    const modeTextContent = useType === "Utility Bills" ? "Actual" : "Targeted";

    const indicators = [
      {
        textElId: "#title-t1 .key-title-mode-text",
        gaugeBarElId: "#lifetime-carbon-gauge .linear-gauge-bar",
      },
      {
        textElId: "#title-t2 .key-title-mode-text",
        gaugeBarElId: "#annual-carbon-gauge .linear-gauge-bar",
      },
      {
        textElId: "#title-t3 .key-title-mode-text",
        gaugeBarElId: "#teui-gauge .linear-gauge-bar",
      },
    ];

    const colorMap = {
      "gauge-excellent": "#28a745",
      "gauge-good": "#5bc0de",
      "gauge-warning": "#f0ad4e",
      "gauge-poor": "#d9534f",
    };

    indicators.forEach((indicator) => {
      const textElement = document.querySelector(indicator.textElId);
      const gaugeBarElement = document.querySelector(indicator.gaugeBarElId);

      if (textElement) {
        textElement.textContent = modeTextContent;
        textElement.style.opacity = "0.5"; // Set 50% opacity

        if (gaugeBarElement) {
          let determinedColor = "inherit"; // Default to inherit parent color
          for (const className in colorMap) {
            if (gaugeBarElement.classList.contains(className)) {
              determinedColor = colorMap[className];
              break;
            }
          }
          textElement.style.color = determinedColor;
        } else {
          textElement.style.color = "inherit"; // Fallback if gauge bar not found
        }
      }
    });
  }

  function runAllCalculations() {
    // Add recursion protection
    if (calculationInProgress) {
      return;
    }

    calculationInProgress = true;
    
    console.log("🚀 [S01] =================================");
    console.log("🚀 [S01] CALCULATION TRIGGERED");
    console.log("🚀 [S01] =================================");

    try {
      // Run both engines independently
      calculateReferenceModel(); // Calculates Column E values using Reference state
      calculateTargetModel(); // Calculates Column H values using Application state

      // Calculate tiers and display updates
      calculateTargetTier(); // Calculate i_10 (Target Tier for h_10)
      updateTEUIDisplay(); // Update all visual displays
      updateTitleModeIndicators(); // <-- ADDED CALL HERE
      
      console.log("✅ [S01] ALL CALCULATIONS COMPLETE");
      console.log("🚀 [S01] =================================");
    } finally {
      calculationInProgress = false;
    }
  }

  //==========================================================================
  // INITIALIZATION
  //==========================================================================

  function initializeEventHandlers() {
    if (!window.TEUI || !window.TEUI.StateManager) return;

    // ✅ CONSUMER SECTION PATTERN: Listen to TRUE INPUT fields that affect calculations
    // S01 as consumer section only listens to user inputs that affect its display calculations
    const inputFieldsToWatch = [
      "d_14", // Use type (user dropdown) - affects Actual column display
      "d_13", // Reference standard (user dropdown) - affects Reference calculations
      // REMOVED B Pattern contamination: No need to listen to calculated intermediate fields
      // Upstream sections (S04, S13, S15) handle their own dependencies
    ];

    // Listen to user input fields
    inputFieldsToWatch.forEach((fieldId) => {
      window.TEUI.StateManager.addListener(
        fieldId,
        // ⚠️ WARNING: ESLint flags these parameters as unused, but they are CALCULATION-CRITICAL
        // DO NOT prefix with underscore - causes calculation regression (June 13, 2025)
        (newValue, oldValue, sourceFieldId) => {
          // Debounce for d_51 which can trigger rapid changes
          if (fieldId === "d_51") {
            setTimeout(() => {
              runAllCalculations();
            }, 50);
          } else {
            runAllCalculations();
          }
        },
      );
    });

    // ✅ CONSUMER SECTION PATTERN: Listen to calculated fields from upstream Pattern A sections
    const calculatedFieldsToWatch = [
      // S04: Energy and emissions totals
      "j_32", // Target energy total
      "k_32", // Target emissions total 
      "f_32", // Actual energy total
      "g_32", // Actual emissions total
      "ref_j_32", // Reference energy total
      "ref_k_32", // Reference emissions total
      
      // S02: Building information
      "h_15", // Conditioned area
      "h_13", // Service life
      "i_41", // Embodied carbon
      
      // S15: Final Reference TEUI calculation (critical for Reference column)
      "ref_h_136", // Reference TEUI from Section 15 (final Reference calculation)
      
      // S05: Reference embodied carbon
      "ref_i_39", // Reference embodied carbon
    ];

    calculatedFieldsToWatch.forEach((fieldId) => {
      window.TEUI.StateManager.addListener(
        fieldId,
        // ⚠️ WARNING: ESLint flags these parameters as unused, but they are CALCULATION-CRITICAL
        // DO NOT prefix with underscore - causes calculation regression (June 13, 2025)
        (newValue, oldValue, sourceFieldId) => {
          // Only recalculate if the value actually changed
          if (newValue !== oldValue) {
            console.log(`📡 [S01] Listener triggered: ${fieldId} changed from ${oldValue} to ${newValue}`);
            if (fieldId === "g_32") {
              // Special handling for g_32 field changes (if needed in future)
            }
            runAllCalculations();
          }
        },
      );
    });

    runAllCalculations();
  }

  function addCustomStyling() {
    let styleElement = document.getElementById("key-values-custom-style");
    if (!styleElement) {
      styleElement = document.createElement("style");
      styleElement.id = "key-values-custom-style";
      document.head.appendChild(styleElement);
      styleElement.textContent = customCSS;
    }
  }

  function removeToggleIcon() {
    const toggleIcon = document.querySelector(
      "#keyValues .section-header .toggle-icon",
    );
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
    const sectionElement = document.getElementById("keyValues");
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
    runAllCalculations: runAllCalculations,
    updateDisplayValue: updateDisplayValue, // Expose for cross-section use (S15 -> S01)
  };
})();
