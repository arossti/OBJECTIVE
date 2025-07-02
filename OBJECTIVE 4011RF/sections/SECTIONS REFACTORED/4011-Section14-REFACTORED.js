/**
 * 4011-Section14.js
 * TEDI & TELI (Section 14) module for TEUI Calculator 4.011
 *
 * This file contains field definitions, layout templates, and rendering logic
 * specific to the TEDI & TELI section.
 *
 * REFACTORED FOR DUAL-STATE ISOLATION.
 */

// Ensure namespace exists
window.TEUI = window.TEUI || {};
window.TEUI.SectionModules = window.TEUI.SectionModules || {};

// Section 14: TEDI & TELI Module
window.TEUI.SectionModules.sect14 = (function () {
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
  window.TEUI.sect14.ModeManager = ModeManager;

  //==========================================================================
  // HELPER FUNCTIONS (REFACTORED FOR 100% STATE ISOLATION)
  //==========================================================================

  function getNumericValue(fieldId, defaultValue = 0) {
    const prefix = ModeManager.currentMode === "target" ? "target_" : "ref_";
    const rawValue = window.TEUI?.StateManager?.getValue(`${prefix}${fieldId}`);
    return window.TEUI?.parseNumeric?.(rawValue, defaultValue) ?? defaultValue;
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
  // CONSOLIDATED FIELD DEFINITIONS AND LAYOUT (No Changes)
  //==========================================================================
  const sectionRows = {
    header: { id: "14-ID", rowId: "14-ID", label: "TEDI & TELI Units", cells: { c: { content: "SECTION 14. TEDI & TELI Targeted", classes: ["section-header"] }, d: { content: "kWh/yr", classes: ["section-subheader", "text-center"] }, e: { content: "", classes: ["section-subheader"] }, f: { content: "", classes: ["section-subheader"] }, g: { content: "", classes: ["section-subheader"] }, h: { content: "kWh/m²/yr", classes: ["section-subheader", "text-center"] }, i: { content: "", classes: ["section-subheader"] }, j: { content: "", classes: ["section-subheader"] }, k: { content: "", classes: ["section-subheader"] }, l: { content: "", classes: ["section-subheader"] }, m: { content: "kWh/yr", classes: ["section-subheader", "text-center"] }, n: { content: "", classes: ["section-subheader"] } } },
    127: { id: "T.4.0", rowId: "127", label: "TED Targeted", cells: { c: { label: "TED Targeted" }, d: { fieldId: "d_127", type: "calculated", value: "0.00", classes: ["calculated-value"], section: "tediSummary" }, f: { content: "T.4.1", classes: ["label-prefix", "text-right", "no-wrap"] }, g: { content: "TEDI", classes: ["label-main", "text-left", "no-wrap"] }, h: { fieldId: "h_127", type: "calculated", value: "0.00", classes: ["calculated-value"], section: "tediSummary" }, i: { content: "Includes V.5 Net Ventilation Losses, Excludes T.7.3 CEDI Ae", classes: ["note-text"] } } },
    128: { id: "T.4.2", rowId: "128", label: "TED Envelope (Excludes Ventilation)", cells: { c: { label: "TED Envelope (Excludes Ventilation)" }, d: { fieldId: "d_128", type: "calculated", value: "0.00", classes: ["calculated-value"], section: "tediSummary" }, f: { content: "T.4.3", classes: ["label-prefix", "text-right", "no-wrap"] }, g: { content: "TEDI (Excludes Ventilation)", classes: ["label-main", "text-left", "no-wrap"] }, h: { fieldId: "h_128", type: "calculated", value: "0.00", classes: ["calculated-value"], section: "tediSummary" } } },
    129: { id: "T.4.4", rowId: "129", label: "CED Cooling Load Unmitigated", cells: { c: { label: "CED Cooling Load Unmitigated" }, d: { fieldId: "d_129", type: "calculated", value: "0.00", classes: ["calculated-value"], section: "tediSummary" }, f: { content: "T.4.5", classes: ["label-prefix", "text-right", "no-wrap"] }, g: { content: "CEDI Unmitigated", classes: ["label-main", "text-left", "no-wrap"] }, h: { fieldId: "h_129", type: "calculated", value: "0.00", classes: ["calculated-value"], section: "tediSummary" }, j: { content: "T.5.2 less Free Cool. & Vent. Exhaust", classes: ["note-text"] }, m: { fieldId: "m_129", type: "calculated", value: "0.00", classes: ["calculated-value"], section: "tediSummary" } } },
    130: { id: "T.4.6", rowId: "130", label: "CEDI Cooling Load", cells: { c: { label: "CEDI Cooling Load" }, d: { fieldId: "d_130", type: "calculated", value: "0.00", classes: ["calculated-value"], section: "tediSummary" }, e: { content: "W/m²", classes: ["unit-text"] }, f: { content: "T.4.7", classes: ["label-prefix", "text-right", "no-wrap"] }, g: { content: "CEDI Mitigated", classes: ["label-main", "text-left", "no-wrap"] }, h: { fieldId: "h_130", type: "calculated", value: "0.00", classes: ["calculated-value"], section: "tediSummary" }, i: { content: "W/m²", classes: ["unit-text"] } } },
    131: { id: "T.5.1", rowId: "131", label: "TEL Total Envelope Heatloss", cells: { c: { label: "TEL Total Envelope Heatloss" }, d: { fieldId: "d_131", type: "calculated", value: "0.00", classes: ["calculated-value"], section: "tediSummary" }, f: { content: "T.5.2", classes: ["label-prefix", "text-right", "no-wrap"] }, g: { content: "TELI", classes: ["label-main", "text-left", "no-wrap"] }, h: { fieldId: "h_131", type: "calculated", value: "0.00", classes: ["calculated-value"], section: "tediSummary" } } },
    132: { id: "T.5.3", rowId: "132", label: "CEG Cooling Envelope Heatgain", cells: { c: { label: "CEG Cooling Envelope Heatgain" }, d: { fieldId: "d_132", type: "calculated", value: "0.00", classes: ["calculated-value"], section: "tediSummary" }, f: { content: "T.5.4", classes: ["label-prefix", "text-right", "no-wrap"] }, g: { content: "CEGI", classes: ["label-main", "text-left", "no-wrap"] }, h: { fieldId: "h_132", type: "calculated", value: "0.00", classes: ["calculated-value"], section: "tediSummary" } } },
  };

  //==========================================================================
  // ACCESSOR METHODS (Unchanged)
  //==========================================================================
  function getFields() { const fields = {}; Object.entries(sectionRows).forEach(([rowKey, row]) => { if (rowKey === "header") return; if (!row.cells) return; Object.entries(row.cells).forEach(([colKey, cell]) => { if (cell.fieldId && cell.type) { fields[cell.fieldId] = { type: cell.type, label: cell.label || row.label, defaultValue: cell.value || "", section: cell.section || "tediSummary", }; if (cell.dropdownId) fields[cell.fieldId].dropdownId = cell.dropdownId; if (cell.options) fields[cell.fieldId].options = cell.options; if (cell.getOptions) fields[cell.fieldId].getOptions = cell.getOptions; if (cell.dependencies) fields[cell.fieldId].dependencies = cell.dependencies; if (cell.min !== undefined) fields[cell.fieldId].min = cell.min; if (cell.max !== undefined) fields[cell.fieldId].max = cell.max; if (cell.step !== undefined) fields[cell.fieldId].step = cell.step; } }); }); return fields; }
  function getDropdownOptions() { const options = {}; Object.values(sectionRows).forEach((row) => { if (!row.cells) return; Object.values(row.cells).forEach((cell) => { if (cell.dropdownId && cell.options) { options[cell.dropdownId] = cell.options; } }); }); return options; }
  function getLayout() { const layoutRows = []; if (sectionRows["header"]) { layoutRows.push(createLayoutRow(sectionRows["header"])); } Object.entries(sectionRows).forEach(([key, row]) => { if (key !== "header") { layoutRows.push(createLayoutRow(row)); } }); return { rows: layoutRows }; }
  function createLayoutRow(row) { const rowDef = { id: row.id, cells: [{}, {}] }; const columns = ["c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n"]; columns.forEach((col) => { if (row.cells && row.cells[col]) { const cell = { ...row.cells[col] }; if (col === "c") { if (cell.type === "label" && cell.content && !cell.label) { cell.label = cell.content; delete cell.type; delete cell.content; } else if (!cell.label && !cell.content && row.label) { cell.label = row.label; } } delete cell.getOptions; delete cell.section; delete cell.dependencies; rowDef.cells.push(cell); } else { if (col === "c" && !row.cells?.c && row.label) { rowDef.cells.push({ label: row.label }); } else { rowDef.cells.push({}); } } }); return rowDef; }

  //==========================================================================
  // DUAL-ENGINE CALCULATION ORCHESTRATION
  //==========================================================================

  function calculateAll() {
    calculateReferenceModel();
    calculateTargetModel();
  }

  function calculateAllForMode() {
    const area = getNumericValue("h_15");
    const i97 = getNumericValue("i_97");
    const i98 = getNumericValue("i_98");
    const i103 = getNumericValue("i_103");
    const m121 = getNumericValue("m_121");
    const i80 = getNumericValue("i_80");
    const k71 = getNumericValue("k_71");
    const k79 = getNumericValue("k_79");
    const k98 = getNumericValue("k_98");
    const d122 = getNumericValue("d_122");
    const h124 = getNumericValue("h_124");
    const d123 = getNumericValue("d_123");
    const k103 = getNumericValue("k_103");
    const k97 = getNumericValue("k_97");

    const tedHeatloss_d127 = i97 + i98 + i103 + m121 - i80;
    setCalculatedValue("d_127", tedHeatloss_d127);

    const tedi_h127 = area > 0 ? tedHeatloss_d127 / area : 0;
    setCalculatedValue("h_127", tedi_h127);

    const tediEnvelope_d128 = i97 + i98 + i103 - i80;
    setCalculatedValue("d_128", tediEnvelope_d128);

    const tediEnvelope_h128 = area > 0 ? tediEnvelope_d128 / area : 0;
    setCalculatedValue("h_128", tediEnvelope_h128);

    const cedCoolingUnmitigated_d129 = k71 + k79 + k98 + d122;
    setCalculatedValue("d_129", cedCoolingUnmitigated_d129);

    const cediUnmitigated_h129 = area > 0 ? cedCoolingUnmitigated_d129 / area : 0;
    setCalculatedValue("h_129", cediUnmitigated_h129);

    const cedMitigated_m129 = cedCoolingUnmitigated_d129 - h124 - d123;
    setCalculatedValue("m_129", cedMitigated_m129);

    const cediCoolingWm2_d130 = area > 0 ? ((cedCoolingUnmitigated_d129 / 8760) * 1000) / area : 0;
    setCalculatedValue("d_130", cediCoolingWm2_d130, "W/m2");

    const cediMitigated_h130 = area > 0 ? ((cedMitigated_m129 / 8760) * 1000) / area : 0;
    setCalculatedValue("h_130", cediMitigated_h130, "W/m2");

    const telHeatloss_d131 = i97 + i98 + i103;
    setCalculatedValue("d_131", telHeatloss_d131);

    const teli_h131 = area > 0 ? telHeatloss_d131 / area : 0;
    setCalculatedValue("h_131", teli_h131);

    const cegHeatgain_d132 = k97 + k98 + k103;
    setCalculatedValue("d_132", cegHeatgain_d132);

    const cegi_h132 = area > 0 ? cegHeatgain_d132 / area : 0;
    setCalculatedValue("h_132", cegi_h132);
  }

  function calculateReferenceModel() {
    const originalMode = ModeManager.currentMode;
    ModeManager.switchMode("reference");
    try {
      calculateAllForMode();
    } finally {
      ModeManager.switchMode(originalMode);
    }
  }

  function calculateTargetModel() {
    const originalMode = ModeManager.currentMode;
    ModeManager.switchMode("target");
    try {
      calculateAllForMode();
    } finally {
      ModeManager.switchMode(originalMode);
    }
  }

  //==========================================================================
  // EVENT HANDLING AND INITIALIZATION
  //==========================================================================
  
  function initializeEventHandlers() {
    if (!window.TEUI?.StateManager) return;
    const sm = window.TEUI.StateManager;

    const dependencies = [
      "h_15", "i_97", "i_98", "i_103", "m_121", "i_80", "k_71", "k_79", 
      "k_97", "k_98", "k_103", "d_122", "h_124", "d_123", "d_20", "d_21", 
      "h_22", "d_22", "d_13"
    ];

    dependencies.forEach(dep => {
      sm.addListener(`target_${dep}`, calculateTargetModel);
      sm.addListener(`ref_${dep}`, calculateReferenceModel);
    });
  }

  function onSectionRendered() {
    initializeEventHandlers();
    calculateAll();
  }

  //==========================================================================
  // PUBLIC API
  //==========================================================================
  return {
    getFields,
    getDropdownOptions,
    getLayout,
    onSectionRendered,
    calculateAll,
  };
})(); 