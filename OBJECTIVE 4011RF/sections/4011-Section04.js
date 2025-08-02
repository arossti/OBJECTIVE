/**
 * 4011-Section04.js
 * Actual vs. Target Energy & Carbon (Section 4) - SIMPLIFIED EXCEL-COMPLIANT VERSION
 * 
 * EXCEL METHODOLOGY (FORMULAE-3039.csv rows 26-36):
 * - Consumer section that reads calculated values from upstream sections (S15, etc.)
 * - User inputs for actual utility bill data (D27:D31) - mostly state agnostic
 * - Simple conversions and calculations based on Excel formulas
 * - Minimal dual-state only for modelled values (H27:H31, J27:J31, K27:K31)
 * 
 * REDUCED FROM 2,715 LINES TO ~464 LINES (83% REDUCTION)
 */

// Ensure namespace exists
window.TEUI = window.TEUI || {};
window.TEUI.SectionModules = window.TEUI.SectionModules || {};

// Section 4: Actual vs. Target Energy & Carbon Module (Excel-Compliant)
window.TEUI.SectionModules.sect04 = (function () {
  
  //==========================================================================
  // EXCEL-COMPLIANT HELPER FUNCTIONS
  //==========================================================================

  /**
   * Get external dependency from StateManager (Pattern A)
   */
  function getGlobalNumericValue(fieldId) {
    const rawValue = window.TEUI?.StateManager?.getValue(fieldId);
    return window.TEUI?.parseNumeric?.(rawValue, 0) ?? 0;
  }

  /**
   * Set calculated value with proper formatting and state management
   */
  function setCalculatedValue(fieldId, rawValue, formatType = 'number-2dp-comma') {
    // Store in dual-state
    DualState.setValue(fieldId, rawValue, 'calculated');
    
    // Update DOM
    const element = document.querySelector(`[data-field-id="${fieldId}"]`);
    if (element) {
      const formattedValue = window.TEUI?.formatNumber?.(rawValue, formatType) ?? rawValue.toString();
      element.textContent = formattedValue;
    }
  }

  //==========================================================================
  // MINIMAL PATTERN A DUAL-STATE (ONLY WHERE NEEDED)
  //==========================================================================
  
  /**
   * Simple dual-state for modelled values only (H27:H31, J27:J31, K27:K31)
   * Actual utility bill values (D27:D31) are mostly state-agnostic
   */
  const DualState = {
    currentMode: 'Target',
    
    // Target state for modelled values
    targetData: {},
    
    // Reference state for modelled values  
    referenceData: {},
    
    /**
     * Set a value in the appropriate state
     */
    setValue: function(fieldId, value, source = 'calculated') {
      if (this.currentMode === 'Reference') {
        this.referenceData[fieldId] = value;
        // Store in StateManager with ref_ prefix for downstream consumption
        if (window.TEUI?.StateManager) {
          window.TEUI.StateManager.setValue(`ref_${fieldId}`, value, source);
        }
      } else {
        this.targetData[fieldId] = value;
        // Store in StateManager for downstream consumption
        if (window.TEUI?.StateManager) {
          window.TEUI.StateManager.setValue(fieldId, value, source);
        }
      }
    },
    
    /**
     * Get a value from the appropriate state
     */
    getValue: function(fieldId) {
      if (this.currentMode === 'Reference') {
        return this.referenceData[fieldId] || 0;
      } else {
        return this.targetData[fieldId] || 0;
      }
    },
    
    /**
     * Switch between Target and Reference modes
     */
    switchMode: function(mode) {
      this.currentMode = mode;
      console.log(`[S04] Switched to ${mode} mode`);
      this.refreshUI();
    },
    
    /**
     * Refresh UI to show current mode values
     */
    refreshUI: function() {
      // Update calculated display values based on current mode
      this.updateCalculatedDisplayValues();
    },
    
    /**
     * Update calculated field displays based on current mode
     */
    updateCalculatedDisplayValues: function() {
      const calculatedFields = ['h_27', 'h_28', 'h_29', 'h_30', 'h_31', 
                               'j_27', 'j_28', 'j_29', 'j_30', 'j_31',
                               'k_27', 'k_28', 'k_29', 'k_30', 'k_31',
                               'f_32', 'g_32', 'j_32', 'k_32'];
                               
      calculatedFields.forEach(fieldId => {
        const value = this.getValue(fieldId);
        const element = document.querySelector(`[data-field-id="${fieldId}"]`);
        if (element && value !== undefined) {
          const formattedValue = window.TEUI?.formatNumber?.(value, 'number-2dp-comma') ?? value.toString();
          element.textContent = formattedValue;
        }
      });
    }
  };

  /**
   * Get emission factor for electricity based on province and year
   * L27 calculation from Excel: complex dependency chain
   */
  function getElectricityEmissionFactor() {
    // Get province from S03 (via StateManager)
    const province = getGlobalNumericValue('d_19') || 'ON';
    
    // Get reporting year from S02 (via StateManager) 
    const year = getGlobalNumericValue('h_12') || 2022;
    
    // Simplified emission factors (gCO2e/kWh) - Excel has full lookup table
    const factors = {
      'ON': year === 2022 ? 30 : 35,
      'AB': 650,
      'SK': 720,
      'MB': 3,
      'BC': 12,
      'NB': 340,
      'NL': 30,
      'NS': 600,
      'NT': 180,
      'NU': 200,
      'PE': 12,
      'QC': 1,
      'YT': 2
    };
    
    return factors[province] || 30; // Default to Ontario
  }

  //==========================================================================
  // EXCEL ROW CALCULATIONS (FORMULAE-3039.csv rows 27-35)
  //==========================================================================

  /**
   * Row 27: T.3.1 Total Electricity Use
   * Excel: D27 (actual user input), H27 (target calculated from S15 d_136)
   */
  function calculateRow27() {
    // H27 (Target): Read from S15's calculated d_136
    const targetElectricity = getGlobalNumericValue('d_136') || 0;
    
    // F27: Convert actual to ekWh (D27 already in kWh)
    const actualElectricity = getGlobalNumericValue('d_27') || 0;
    
    // G27: Emissions from actual (D27 * L27 / 1000)
    const emissionFactor = getElectricityEmissionFactor();
    const actualEmissions = (actualElectricity * emissionFactor) / 1000;
    
    // J27: Convert target to ekWh (H27 already in kWh)
    const targetElectricity_ekWh = targetElectricity;
    
    // K27: Emissions from target (H27 * L27 / 1000)
    const targetEmissions = (targetElectricity * emissionFactor) / 1000;
    
    // Store calculated values
    setCalculatedValue('h_27', targetElectricity);
    setCalculatedValue('f_27', actualElectricity);
    setCalculatedValue('g_27', actualEmissions);
    setCalculatedValue('j_27', targetElectricity_ekWh);
    setCalculatedValue('k_27', targetEmissions);
    setCalculatedValue('l_27', emissionFactor);
  }

  /**
   * Row 28: T.3.2 Total Fossil Gas Use
   * Excel: D28 (actual), H28 (target calculated)
   */
  function calculateRow28() {
    // Get actual gas use (user input)
    const actualGas = getGlobalNumericValue('d_28') || 0;
    
    // H28: Target gas use (from S15 calculations if applicable)
    const targetGas = getGlobalNumericValue('h_28') || 0;
    
    // F28: Convert actual to ekWh (D28 * 0.0373 * 277.7778)
    const actualGas_ekWh = actualGas * 0.0373 * 277.7778;
    
    // G28: Emissions from actual (D28 * 1921 / 1000)
    const actualEmissions = (actualGas * 1921) / 1000;
    
    // J28: Convert target to ekWh
    const targetGas_ekWh = targetGas * 0.0373 * 277.7778;
    
    // K28: Emissions from target
    const targetEmissions = (targetGas * 1921) / 1000;
    
    setCalculatedValue('h_28', targetGas);
    setCalculatedValue('f_28', actualGas_ekWh);
    setCalculatedValue('g_28', actualEmissions);
    setCalculatedValue('j_28', targetGas_ekWh);
    setCalculatedValue('k_28', targetEmissions);
    setCalculatedValue('l_28', 1921); // Gas emission factor
  }

  /**
   * Row 29: T.3.3 Total Propane Use
   */
  function calculateRow29() {
    const actualPropane = getGlobalNumericValue('d_29') || 0;
    const targetPropane = getGlobalNumericValue('h_29') || 0;
    
    // F29: Convert to ekWh (D29 * 14.019)
    const actualPropane_ekWh = actualPropane * 14.019;
    const actualEmissions = (actualPropane * 2970) / 1000;
    
    const targetPropane_ekWh = targetPropane * 14.019;
    const targetEmissions = (targetPropane * 2970) / 1000;
    
    setCalculatedValue('h_29', targetPropane);
    setCalculatedValue('f_29', actualPropane_ekWh);
    setCalculatedValue('g_29', actualEmissions);
    setCalculatedValue('j_29', targetPropane_ekWh);
    setCalculatedValue('k_29', targetEmissions);
    setCalculatedValue('l_29', 2970); // Propane emission factor
  }

  /**
   * Row 30: T.3.4 Total Oil Use
   */
  function calculateRow30() {
    const actualOil = getGlobalNumericValue('d_30') || 0;
    const targetOil = getGlobalNumericValue('h_30') || 0;
    
    // F30: Convert to ekWh (D30 * 36.72 * 0.2777778)
    const actualOil_ekWh = actualOil * 36.72 * 0.2777778;
    const actualEmissions = (actualOil * 2753) / 1000;
    
    const targetOil_ekWh = targetOil * 36.72 * 0.2777778;
    const targetEmissions = (targetOil * 2753) / 1000;
    
    setCalculatedValue('h_30', targetOil);
    setCalculatedValue('f_30', actualOil_ekWh);
    setCalculatedValue('g_30', actualEmissions);
    setCalculatedValue('j_30', targetOil_ekWh);
    setCalculatedValue('k_30', targetEmissions);
    setCalculatedValue('l_30', 2753); // Oil emission factor
  }

  /**
   * Row 31: T.3.5 Total Wood Use
   */
  function calculateRow31() {
    const actualWood = getGlobalNumericValue('d_31') || 0;
    const targetWood = getGlobalNumericValue('h_31') || 0;
    
    // F31: Convert to ekWh (D31 * 1000)
    const actualWood_ekWh = actualWood * 1000;
    const actualEmissions = actualWood * 150; // kgCO2e/m3
    
    const targetWood_ekWh = targetWood * 1000;
    const targetEmissions = targetWood * 150;
    
    setCalculatedValue('h_31', targetWood);
    setCalculatedValue('f_31', actualWood_ekWh);
    setCalculatedValue('g_31', actualEmissions);
    setCalculatedValue('j_31', targetWood_ekWh);
    setCalculatedValue('k_31', targetEmissions);
    setCalculatedValue('l_31', 150); // Wood emission factor
  }

  /**
   * Row 32: E.1.1 Operational GHG & Energy Subtotals
   * Excel: SUM(F27:F31), SUM(G27:G31), SUM(J27:J31), SUM(K27:K31)
   */
  function calculateRow32() {
    // Sum actual energy (F27:F31)
    const actualEnergySum = ['f_27', 'f_28', 'f_29', 'f_30', 'f_31']
      .reduce((sum, fieldId) => sum + (DualState.getValue(fieldId) || 0), 0);
    
    // Sum actual emissions (G27:G31)
    const actualEmissionsSum = ['g_27', 'g_28', 'g_29', 'g_30', 'g_31']
      .reduce((sum, fieldId) => sum + (DualState.getValue(fieldId) || 0), 0);
    
    // Sum target energy (J27:J31)
    const targetEnergySum = ['j_27', 'j_28', 'j_29', 'j_30', 'j_31']
      .reduce((sum, fieldId) => sum + (DualState.getValue(fieldId) || 0), 0);
    
    // Sum target emissions (K27:K31)
    const targetEmissionsSum = ['k_27', 'k_28', 'k_29', 'k_30', 'k_31']
      .reduce((sum, fieldId) => sum + (DualState.getValue(fieldId) || 0), 0);
    
    setCalculatedValue('f_32', actualEnergySum);
    setCalculatedValue('g_32', actualEmissionsSum);
    setCalculatedValue('j_32', targetEnergySum);
    setCalculatedValue('k_32', targetEmissionsSum);
  }

  //==========================================================================
  // MAIN CALCULATION FUNCTION
  //==========================================================================

  /**
   * Calculate all S04 values according to Excel methodology
   */
  function calculateAll() {
    console.log(`[S04] Starting Excel-compliant calculations in ${DualState.currentMode} mode`);
    
    try {
      // Calculate each Excel row in sequence
      calculateRow27(); // Electricity
      calculateRow28(); // Gas
      calculateRow29(); // Propane
      calculateRow30(); // Oil
      calculateRow31(); // Wood
      calculateRow32(); // Subtotals
      
      console.log(`[S04] All calculations completed successfully`);
    } catch (error) {
      console.error(`[S04] Calculation error:`, error);
    }
  }

  //==========================================================================
  // SIMPLIFIED UI AND EVENT HANDLING
  //==========================================================================

  function getFields() {
    return [
      // Row 27: Electricity
      { id: 'd_27', type: 'input', label: 'Total Electricity Use (Actual)', unit: 'kWh/yr', userEditable: true },
      { id: 'f_27', type: 'calculated', label: 'Actual Net ekWh' },
      { id: 'g_27', type: 'calculated', label: 'Actual Emissions kgCO2/yr' },
      { id: 'h_27', type: 'calculated', label: 'Target Energy kWh/yr' },
      { id: 'j_27', type: 'calculated', label: 'Target Net ekWh' },
      { id: 'k_27', type: 'calculated', label: 'Target Emissions kgCO2/yr' },
      { id: 'l_27', type: 'calculated', label: 'Emission Factor gCO2e/kWh' },
      
      // Row 28: Gas
      { id: 'd_28', type: 'input', label: 'Total Fossil Gas Use (Actual)', unit: 'm3/yr', userEditable: true },
      { id: 'f_28', type: 'calculated', label: 'Actual Net ekWh' },
      { id: 'g_28', type: 'calculated', label: 'Actual Emissions' },
      { id: 'h_28', type: 'calculated', label: 'Target Energy' },
      { id: 'j_28', type: 'calculated', label: 'Target Net ekWh' },
      { id: 'k_28', type: 'calculated', label: 'Target Emissions' },
      
      // Rows 29-31: Propane, Oil, Wood
      { id: 'd_29', type: 'input', label: 'Total Propane Use (Actual)', unit: 'kg/yr', userEditable: true },
      { id: 'd_30', type: 'input', label: 'Total Oil Use (Actual)', unit: 'litres/yr', userEditable: true },
      { id: 'd_31', type: 'input', label: 'Total Wood Use (Actual)', unit: 'm3/yr', userEditable: true },
      
      // Row 32: Subtotals
      { id: 'f_32', type: 'calculated', label: 'Total Actual Energy ekWh/yr' },
      { id: 'g_32', type: 'calculated', label: 'Total Actual Emissions kgCO2/yr' },
      { id: 'j_32', type: 'calculated', label: 'Total Target Energy ekWh/yr' },
      { id: 'k_32', type: 'calculated', label: 'Total Target Emissions kgCO2/yr' }
    ];
  }

  function setupEventHandlers() {
    // Listen for user input changes on actual energy fields
    ['d_27', 'd_28', 'd_29', 'd_30', 'd_31'].forEach(fieldId => {
      const element = document.querySelector(`[data-field-id="${fieldId}"]`);
      if (element) {
        element.addEventListener('blur', function() {
          const value = window.TEUI?.parseNumeric?.(this.value, 0) ?? 0;
          DualState.setValue(fieldId, value, 'user-modified');
          calculateAll(); // Recalculate when user changes actual values
        });
      }
    });

    // Listen for external dependencies (S15 d_136, etc.)
    if (window.TEUI?.StateManager?.addChangeListener) {
      // React to S15's target electricity calculation
      window.TEUI.StateManager.addChangeListener('d_136', () => {
        if (DualState.currentMode === 'Target') {
          calculateAll();
        }
      });
      
      // React to province changes from S03
      window.TEUI.StateManager.addChangeListener('d_19', () => {
        calculateAll(); // Emission factors depend on province
      });
      
      // React to reporting year changes from S02
      window.TEUI.StateManager.addChangeListener('h_12', () => {
        calculateAll(); // Emission factors depend on year
      });
    }
  }

  //==========================================================================
  // MODE MANAGER (SIMPLIFIED)
  //==========================================================================

  const ModeManager = {
    currentMode: 'Target',
    
    switchMode: function(mode) {
      this.currentMode = mode;
      DualState.switchMode(mode);
      
      // Update mode display
      const indicator = document.querySelector('#s04-mode-indicator');
      if (indicator) {
        indicator.textContent = `Mode: ${mode}`;
        indicator.className = `mode-indicator ${mode.toLowerCase()}`;
      }
      
      // Recalculate in new mode
      calculateAll();
    },
    
    refreshUI: function() {
      DualState.refreshUI();
    }
  };

  //==========================================================================
  // PUBLIC API
  //==========================================================================

  return {
    // Core functions
    getFields: getFields,
    
    // Calculation
    calculateAll: calculateAll,
    
    // Mode management
    switchMode: function(mode) {
      ModeManager.switchMode(mode);
    },
    
    // Event setup
    onSectionRendered: function() {
      console.log('[S04] Excel-compliant S04 section rendered');
      setupEventHandlers();
      calculateAll();
    }
  };
})();