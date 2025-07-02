/**
 * 4011-Section02.js
 * Building Information (Section 2) module for TEUI Calculator 4.011
 *
 * This file contains field definitions, layout templates, and rendering logic
 * specific to the Building Information section.
 *
 * REFACTORED FOR DUAL-STATE ISOLATION.
 */

// Create section-specific namespace for global references
window.TEUI = window.TEUI || {};
window.TEUI.sect02 = window.TEUI.sect02 || {};

// Section 2: Building Information Module
window.TEUI.SectionModules.sect02 = (function () {
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
  window.TEUI.sect02.ModeManager = ModeManager;

  //==========================================================================
  // HELPER FUNCTIONS (REFACTORED FOR 100% STATE ISOLATION)
  //==========================================================================

  function getNumericValue(fieldId, defaultValue = 0) {
    const prefix = ModeManager.currentMode === "target" ? "target_" : "ref_";
    const rawValue = window.TEUI?.StateManager?.getValue(`${prefix}${fieldId}`);
    // Fallback to unprefixed for legacy compatibility during transition
    if (rawValue === null || rawValue === undefined) {
      const unprefixedValue = window.TEUI?.StateManager?.getValue(fieldId);
      return window.TEUI?.parseNumeric?.(unprefixedValue, defaultValue) ?? defaultValue;
    }
    return window.TEUI?.parseNumeric?.(rawValue, defaultValue) ?? defaultValue;
  }
  
  function getFieldValue(fieldId, defaultValue = "") {
    const prefix = ModeManager.currentMode === "target" ? "target_" : "ref_";
    const rawValue = window.TEUI?.StateManager?.getValue(`${prefix}${fieldId}`);
    // Fallback for transition
    if (rawValue === null || rawValue === undefined) {
        return window.TEUI?.StateManager?.getValue(fieldId) ?? defaultValue;
    }
    return rawValue === null || rawValue === undefined ? defaultValue : rawValue;
  }

  function setFieldValue(fieldId, value, fieldType = "user-modified") {
    const modePrefix = ModeManager.currentMode === "target" ? "target_" : "ref_";
    const prefixedFieldId = `${modePrefix}${fieldId}`;

    if (window.TEUI?.StateManager) {
      window.TEUI.StateManager.setValue(prefixedFieldId, value.toString(), fieldType);
      
      // For user inputs, also update the global unprefixed value for legacy compatibility
      if (fieldType === 'user-modified') {
        window.TEUI.StateManager.setValue(fieldId, value.toString(), fieldType);
      }
    }
  }
  
  function setCalculatedValue(fieldId, value) {
      const modePrefix = ModeManager.currentMode === "target" ? "target_" : "ref_";
      const prefixedFieldId = `${modePrefix}${fieldId}`;

      if (window.TEUI?.StateManager) {
          window.TEUI.StateManager.setValue(prefixedFieldId, value.toString(), 'calculated');
           if (ModeManager.currentMode === 'target') {
             window.TEUI.StateManager.setValue(fieldId, value.toString(), 'calculated');
           }
      }

      // Only update the target DOM
      if (ModeManager.currentMode === 'target') {
          const element = document.querySelector(`[data-field-id="${fieldId}"]`);
          if (element) {
              const formattedValue = value === "N/A" ? "N/A" : window.TEUI?.formatNumber?.(value, "number-2dp-comma") ?? value.toString();
              element.textContent = formattedValue;
          }
      }
  }

  //==========================================================================
  // CONSOLIDATED FIELD DEFINITIONS AND LAYOUT (FROM ORIGINAL)
  //==========================================================================
  const sectionRows = {
    header: { id: "02-ID", rowId: "02-ID", label: "Building Info Units", cells: { c: { content: "SECTION 02. Building Information", classes: ["section-header"], }, d: { content: "", classes: ["section-subheader"] }, e: { content: "", classes: ["section-subheader"] }, f: { content: "", classes: ["section-subheader"] }, g: { content: "", classes: ["section-subheader"] }, h: { content: "", classes: ["section-subheader"] }, i: { content: "", classes: ["section-subheader"] }, j: { content: "", classes: ["section-subheader"] }, k: { content: "", classes: ["section-subheader"] }, l: { content: "T.10 Cost of Energy by Source", classes: ["section-subheader", "text-center"], colspan: 3, }, m: { content: "" }, n: { content: "" }, }, },
    12: { id: "B.1", rowId: "B.1", label: "Major Occupancy", cells: { c: { label: "Major Occupancy" }, d: { fieldId: "d_12", type: "dropdown", dropdownId: "dd_d_12", value: "A-Assembly", section: "buildingInfo", options: [ { value: "A-Assembly", name: "A-Assembly" }, { value: "B1-Detention", name: "B1-Detention" }, { value: "B2-Care and Treatment", name: "B2-Care and Treatment" }, { value: "B3-Detention Care & Treatment", name: "B3-Detention Care & Treatment", }, { value: "C-Residential", name: "C-Residential" }, { value: "D-Business & Personal Services", name: "D-Business & Personal Services", }, { value: "E-Mercantile", name: "E-Mercantile" }, { value: "F-Industrial", name: "F-Industrial" }, ], }, e: { content: "" }, f: { content: "D.1", classes: ["label-prefix", "text-right", "no-wrap"], }, g: { content: "Reporting Period", classes: ["label-main", "text-left", "no-wrap"], }, h: { fieldId: "h_12", type: "year_slider", value: "2022", min: 2015, max: 2041, step: 1, section: "buildingInfo", span: 2, }, i: { content: "" }, j: { content: "" }, k: { content: "Electricity", classes: ["text-end"] }, l: { fieldId: "l_12", type: "editable", value: "$0.1300", section: "buildingInfo", }, m: { content: "/kWh", classes: ["text-start"] }, n: { content: "" }, }, },
    13: { id: "S.1", rowId: "S.1", label: "Reference Standard", cells: { c: { label: "Reference Standard" }, d: { fieldId: "d_13", type: "dropdown", dropdownId: "dd_d_13", value: "OBC SB10 5.5-6 Z6", section: "buildingInfo", options: [ { value: "OBC SB12 3.1.1.2.C4", name: "OBC SB12 3.1.1.2.C4" }, { value: "OBC SB12 3.1.1.2.C1", name: "OBC SB12 3.1.1.2.C1" }, { value: "OBC SB12 3.1.1.2.A3", name: "OBC SB12 3.1.1.2.A3" }, { value: "OBC SB10 5.5-6 Z6", name: "OBC SB10 5.5-6 Z6" }, { value: "OBC SB10 5.5-6 Z5 (2010)", name: "OBC SB10 5.5-6 Z5 (2010)", }, { value: "NBC T1", name: "NBC T1" }, { value: "NECB T1 (Z6)", name: "NECB T1 (Z6)" }, { value: "CaGBC ZCB", name: "CaGBC ZCB" }, { value: "PH Classic", name: "PH Classic" }, { value: "PH Plus", name: "PH Plus" }, { value: "PH Premium", name: "PH Premium" }, { value: "EnerPHit", name: "EnerPHit" }, { value: "PH Low Energy", name: "PH Low Energy" }, { value: "ADD YOUR OWN HERE", name: "ADD YOUR OWN HERE" }, ], }, e: { content: "" }, f: { content: "D.2", classes: ["label-prefix", "text-right", "no-wrap"], }, g: { content: "Service Life (yrs)", classes: ["label-main", "text-left", "no-wrap"], }, h: { fieldId: "h_13", type: "year_slider", value: "50", min: 30, max: 100, step: 10, section: "buildingInfo", span: 2, }, i: { content: "" }, j: { content: "" }, k: { content: "Gas", classes: ["text-end"] }, l: { fieldId: "l_13", type: "editable", value: "$0.5070", section: "buildingInfo", }, m: { content: "/m³", classes: ["text-start"] }, n: { content: "" }, }, },
    14: { id: "S.2", rowId: "S.2", label: "Actual (Bills) or Targeted (Design) Use", cells: { c: { label: "Actual (Bills) or Targeted (Design) Use" }, d: { fieldId: "d_14", type: "dropdown", dropdownId: "dd_d_14", value: "Utility Bills", section: "buildingInfo", options: [ { value: "Targeted Use", name: "Targeted Use" }, { value: "Utility Bills", name: "Utility Bills" }, ], }, e: { content: "" }, f: { content: "B.2", classes: ["label-prefix", "text-right", "no-wrap"], }, g: { content: "Project Name", classes: ["label-main", "text-left", "no-wrap"], }, h: { fieldId: "h_14", type: "editable", value: "Three Feathers Terrace", classes: ["wide-text", "no-wrap"], section: "buildingInfo", span: 2, }, i: { content: "" }, j: { content: "" }, k: { content: "Propane", classes: ["text-end"] }, l: { fieldId: "l_14", type: "editable", value: "$1.6200", section: "buildingInfo", }, m: { content: "/kg", classes: ["text-start"] }, n: { content: "" }, }, },
    15: { id: "S.3", rowId: "S.3", label: "Carbon Benchmarking Standard", cells: { c: { label: "Carbon Benchmarking Standard" }, d: { fieldId: "d_15", type: "dropdown", dropdownId: "dd_d_15", value: "Self Reported", section: "buildingInfo", options: [ { value: "BR18 (Denmark)", name: "BR18 (Denmark)" }, { value: "IPCC AR6 EPC", name: "IPCC AR6 EPC" }, { value: "IPCC AR6 EA", name: "IPCC AR6 EA" }, { value: "TGS4", name: "TGS4" }, { value: "CaGBC ZCB D", name: "CaGBC ZCB D" }, { value: "CaGBC ZCB P", name: "CaGBC ZCB P" }, { value: "Self Reported", name: "Self Reported" }, { value: "Not Reported", name: "Not Reported" }, ], }, e: { content: "" }, f: { content: "B.3", classes: ["label-prefix", "text-right", "no-wrap"], }, g: { content: "Conditioned Area", classes: ["label-main", "text-left", "no-wrap"], }, h: { fieldId: "h_15", type: "editable", value: "1,427.20", classes: ["user-input", "editable"], section: "buildingInfo", }, i: { fieldId: "i_15_slider", type: "generic_slider", min: -500, max: 500, step: 10, value: "0", controlsField: "h_15", section: "buildingInfo", classes: ["area-adjust-slider"], }, j: { content: "" }, k: { content: "Wood", span: 2, classes: ["text-end"] }, l: { fieldId: "l_15", type: "editable", value: "$180.00", section: "buildingInfo", }, m: { content: "/m³", classes: ["text-start"] }, n: { content: "" }, }, },
    16: { id: "S.4", rowId: "S.4", label: "Embodied Carbon Target (kgCO₂e/m²)", cells: { c: { label: "Embodied Carbon Target (kgCO₂e/m²)" }, d: { fieldId: "d_16", type: "derived", value: "345.82", section: "buildingInfo", }, e: { content: "" }, f: { content: "A.1", classes: ["label-prefix", "text-right", "no-wrap"], }, g: { content: "Certifier:", classes: ["label-main", "text-left", "no-wrap"], }, h: { fieldId: "i_16", type: "editable", value: "Thomson Architecture, Inc.", section: "buildingInfo", span: 2, }, i: { content: "" }, j: { content: "" }, k: { content: "Oil", classes: ["text-end"] }, l: { fieldId: "l_16", type: "editable", value: "$1.5000", section: "buildingInfo", }, m: { content: "/litre", classes: ["text-start"] }, n: { content: "" }, }, },
    17: { id: "L", rowId: "L", label: "", cells: { c: { content: "" }, d: { content: "" }, e: { content: "" }, f: { content: "A.2", classes: ["label-prefix", "text-right", "no-wrap"], }, g: { content: "Licence No:", classes: ["label-main", "text-left", "no-wrap"], }, h: { fieldId: "i_17", type: "editable", value: "8154", section: "buildingInfo", span: 2, }, i: { content: "" }, j: { content: "" }, k: { content: "" }, l: { content: "" }, m: { content: "" }, n: { content: "" }, }, },
  };

  //==========================================================================
  // ACCESSOR METHODS (FROM ORIGINAL)
  //==========================================================================
  function getFields() { const fields = {}; Object.entries(sectionRows).forEach(([rowKey, row]) => { if (rowKey === "header") return; if (!row.cells) return; Object.entries(row.cells).forEach(([colKey, cell]) => { if (cell.fieldId && cell.type) { fields[cell.fieldId] = { type: cell.type, label: cell.label || row.label, defaultValue: cell.value || "", section: cell.section || "buildingInfo", }; if (cell.dropdownId) fields[cell.fieldId].dropdownId = cell.dropdownId; if (cell.options) fields[cell.fieldId].options = cell.options; if (cell.getOptions) fields[cell.fieldId].getOptions = cell.getOptions; if (cell.dependencies) fields[cell.fieldId].dependencies = cell.dependencies; if (cell.min !== undefined) fields[cell.fieldId].min = cell.min; if (cell.max !== undefined) fields[cell.fieldId].max = cell.max; if (cell.step !== undefined) fields[cell.fieldId].step = cell.step; } }); }); return fields; }
  function getDropdownOptions() { const options = {}; Object.values(sectionRows).forEach((row) => { if (!row.cells) return; Object.values(row.cells).forEach((cell) => { if (cell.dropdownId && cell.options) { options[cell.dropdownId] = cell.options; } }); }); return options; }
  function getLayout() { const layoutRows = []; if (sectionRows["header"]) { layoutRows.push(createLayoutRow(sectionRows["header"])); } Object.entries(sectionRows).forEach(([key, row]) => { if (key !== "header") { layoutRows.push(createLayoutRow(row)); } }); return { rows: layoutRows }; }
  function createLayoutRow(row) { const rowDef = { id: row.id, cells: [ {}, {} ] }; const columns = [ "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n" ]; columns.forEach((col) => { if (row.cells && row.cells[col]) { const cell = { ...row.cells[col] }; if (col === "c") { if (cell.type === "label" && cell.content && !cell.label) { cell.label = cell.content; delete cell.type; delete cell.content; } else if (!cell.label && !cell.content && row.label) { cell.label = row.label; } } delete cell.getOptions; delete cell.section; delete cell.dependencies; rowDef.cells.push(cell); } else { if (col === "c" && !row.cells?.c && row.label) { rowDef.cells.push({ label: row.label }); } else { rowDef.cells.push({}); } } }); return rowDef; }

  //==========================================================================
  // EVENT HANDLING AND CALCULATIONS (REFACTORED)
  //==========================================================================

  function calculateEmbodiedCarbonTarget() {
      const carbonStandard = getFieldValue("d_15", "Self Reported");
      const modelledValueI41 = getNumericValue("i_41", 345.82);

      if (carbonStandard === "Not Reported") {
          setCalculatedValue("d_16", "N/A");
          return;
      }
      if (carbonStandard === "TGS4") {
          const tgs4Value = getNumericValue("i_39", 0);
          setCalculatedValue("d_16", tgs4Value);
          return;
      }

      const AR6_EPC_K5 = 3.39;
      const AR6_EA_L5 = 0.17;
      let targetValue;

      switch (carbonStandard) {
          case "BR18 (Denmark)": targetValue = 500; break;
          case "IPCC AR6 EPC": targetValue = AR6_EPC_K5; break;
          case "IPCC AR6 EA": targetValue = AR6_EA_L5; break;
          case "CaGBC ZCB D": targetValue = 425; break;
          case "CaGBC ZCB P": targetValue = 425; break;
          default: targetValue = modelledValueI41;
      }
      setCalculatedValue("d_16", targetValue);
  }

  function calculateTargetModel() {
      ModeManager.switchMode('target');
      calculateEmbodiedCarbonTarget();
  }

  function calculateReferenceModel() {
      ModeManager.switchMode('reference');
      calculateEmbodiedCarbonTarget();
  }
  
  function calculateAll() {
      const originalMode = ModeManager.currentMode;
      calculateTargetModel();
      calculateReferenceModel();
      ModeManager.switchMode(originalMode);
  }
  
  function initializeEventHandlers() {
    const sectionElement = document.getElementById("buildingInfo");
    if (!sectionElement) return;

    // Use event delegation for user inputs
    sectionElement.addEventListener('change', (e) => {
      if (e.target.matches('select[data-field-id], input[type="range"]')) {
        const fieldId = e.target.getAttribute('data-field-id');
        setFieldValue(fieldId, e.target.value, 'user-modified');
        calculateAll();
      }
    });

    sectionElement.addEventListener('blur', (e) => {
      if (e.target.matches('[contenteditable="true"]')) {
        const fieldId = e.target.getAttribute('data-field-id');
        setFieldValue(fieldId, e.target.textContent.trim(), 'user-modified');
      }
    }, true);

    // Cross-section listeners for calculated values
    if (window.TEUI?.StateManager) {
      const sm = window.TEUI.StateManager;
      const deps = ["i_39", "i_41", "d_15"];
      deps.forEach(dep => {
        sm.addListener(`target_${dep}`, calculateAll);
        sm.addListener(`ref_${dep}`, calculateAll);
      });
    }
  }

  function onSectionRendered() {
    initializeEventHandlers();
    calculateAll();
  }

  //==========================================================================
  // PUBLIC API
  //==========================================================================
  return {
    getFields: getFields,
    getDropdownOptions: getDropdownOptions,
    getLayout: getLayout,
    onSectionRendered: onSectionRendered,
  };
})(); 