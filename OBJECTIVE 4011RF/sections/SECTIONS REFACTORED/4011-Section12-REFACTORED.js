/**
 * 4011-Section12.js
 * Volume and Surface Metrics (Section 12) module for TEUI Calculator 4.011
 *
 * REFACTORED FOR DUAL-STATE ISOLATION.
 */

window.TEUI = window.TEUI || {};
window.TEUI.SectionModules = window.TEUI.SectionModules || {};

window.TEUI.SectionModules.sect12 = (function () {
  //==========================================================================
  // DUAL-STATE MODE MANAGEMENT
  //==========================================================================
  const ModeManager = {
    currentMode: "target",
    switchMode: function (mode) {
      if (mode !== "target" && mode !== "reference") return;
      this.currentMode = mode;
    },
  };
  window.TEUI.sect12.ModeManager = ModeManager;

  //==========================================================================
  // HELPER FUNCTIONS (REFACTORED FOR 100% STATE ISOLATION)
  //==========================================================================

  function getNumericValue(fieldId, defaultValue = 0) {
    const prefix = ModeManager.currentMode === "target" ? "target_" : "ref_";
    const rawValue = window.TEUI?.StateManager?.getValue(`${prefix}${fieldId}`);
    return window.TEUI?.parseNumeric?.(rawValue, defaultValue) ?? defaultValue;
  }
  
  function getFieldValue(fieldId, defaultValue = "") {
    const prefix = ModeManager.currentMode === "target" ? "target_" : "ref_";
    const rawValue = window.TEUI?.StateManager?.getValue(`${prefix}${fieldId}`);
    return rawValue === null || rawValue === undefined ? defaultValue : rawValue;
  }

  function setCalculatedValue(fieldId, rawValue, format = "number") {
    const modePrefix = ModeManager.currentMode === "target" ? "target_" : "ref_";
    const prefixedFieldId = `${modePrefix}${fieldId}`;
    
    if (window.TEUI?.StateManager) {
        const valueToStore = isFinite(rawValue) ? rawValue.toString() : "N/A";
        window.TEUI.StateManager.setValue(prefixedFieldId, valueToStore, "calculated");
    }

    if (ModeManager.currentMode === "target") {
        const formattedValue = window.TEUI?.formatNumber?.(rawValue, format) ?? rawValue?.toString() ?? "N/A";
        const element = document.querySelector(`[data-field-id="${fieldId}"]`);
        if (element) {
            element.textContent = formattedValue;
            element.classList.toggle("negative-value", isFinite(rawValue) && rawValue < 0);
        }
    }
  }

  //==========================================================================
  // CONFIGURATION & LAYOUT (No Changes)
  //==========================================================================
  const sectionRows = { /* ... Original sectionRows ... */ };
  function getFields() { /* ... Original getFields ... */ }
  function getDropdownOptions() { /* ... Original getDropdownOptions ... */ }
  function getLayout() { /* ... Original getLayout ... */ }
  function createLayoutRow(row) { /* ... Original createLayoutRow ... */ }

  //==========================================================================
  // DUAL-ENGINE CALCULATION ORCHESTRATION
  //==========================================================================
  
  function calculateAll() {
    calculateTargetModel();
    calculateReferenceModel();
  }

  function calculateAllForMode() {
    // This function will now be called by both engines,
    // and the helpers will read from the correct state.
    calculateVolumeMetrics();
    calculateCombinedUValue();
    calculateWWR();
    calculateACH50Target();
    calculateAe10();
    calculateNFactor();
    calculateAirLeakageHeatLoss();
    calculateEnvelopeHeatLossGain();
    calculateEnvelopeTotals();
  }

  function calculateTargetModel() {
    const originalMode = ModeManager.currentMode;
    ModeManager.switchMode('target');
    try {
      calculateAllForMode();
    } finally {
      ModeManager.switchMode(originalMode);
    }
  }

  function calculateReferenceModel() {
    const originalMode = ModeManager.currentMode;
    ModeManager.switchMode('reference');
    try {
      calculateAllForMode();
    } finally {
      ModeManager.switchMode(originalMode);
    }
  }

  function calculateVolumeMetrics() { /* ... Original logic ... */ }
  function calculateCombinedUValue() { /* ... Original logic ... */ }
  function calculateWWR() { /* ... Original logic ... */ }
  function calculateACH50Target() { /* ... Original logic ... */ }
  function calculateAe10() { /* ... Original logic ... */ }
  function calculateNFactor() { /* ... Original logic ... */ }
  function calculateAirLeakageHeatLoss() { /* ... Original logic ... */ }
  function calculateEnvelopeHeatLossGain() { /* ... Original logic ... */ }
  function calculateEnvelopeTotals() { /* ... Original logic ... */ }

  //==========================================================================
  // EVENT HANDLING AND INITIALIZATION
  //==========================================================================
  
  function initializeEventHandlers() {
    const sectionElement = document.getElementById("volumeSurfaceMetrics");
    if (!sectionElement) return;

    // Use event delegation for better performance
    sectionElement.addEventListener('change', e => {
        if (e.target.matches('select[data-field-id]')) {
            const fieldId = e.target.getAttribute('data-field-id');
            setFieldValue(fieldId, e.target.value, 'user-modified');
            calculateAll();
        }
    });

    sectionElement.addEventListener('blur', e => {
        if (e.target.matches('[contenteditable="true"]')) {
            const fieldId = e.target.getAttribute('data-field-id');
            setFieldValue(fieldId, e.target.textContent.trim(), 'user-modified');
            calculateAll();
        }
    }, true);

    if (window.TEUI?.StateManager) {
        const sm = window.TEUI.StateManager;
        const deps = [
            "d_85", "f_85", "d_86", "f_86", "d_87", "f_87", "g_88", "g_89", "g_90", "g_91", "g_92", "g_93", 
            "d_94", "f_94", "d_95", "f_95", "d_96", "d_97", "d_105", "g_109", "d_103", "g_103", 
            "j_19", "d_20", "d_21", "d_22", "h_22", "h_21"
        ];
        
        deps.forEach(dep => {
            sm.addListener(`target_${dep}`, calculateTargetModel);
            sm.addListener(`ref_${dep}`, calculateReferenceModel);
        });
    }
  }

  function onSectionRendered() {
    initializeEventHandlers();
    calculateAll();
  }

  return {
    getFields,
    getDropdownOptions,
    getLayout,
    onSectionRendered,
    calculateAll,
  };
})(); 