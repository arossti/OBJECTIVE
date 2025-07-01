/**
 * 4011-Section08.js
 * Indoor Air Quality (Section 8) module for TEUI Calculator 4.011
 *
 * Refactored to use the standardized dual-engine architecture.
 * TODO: Future S13 Cooling.js integration - replace default 45% RH with user values from d_59/i_59
 */

// Ensure namespace exists
window.TEUI = window.TEUI || {};
window.TEUI.SectionModules = window.TEUI.SectionModules || {};

// Section 8: Indoor Air Quality Module
window.TEUI.SectionModules.sect08 = (function () {
  //==========================================================================
  // CONSOLIDATED FIELD DEFINITIONS AND LAYOUT
  //==========================================================================

  const sectionRows = {
    header: {
      id: "08-ID",
      rowId: "08-ID",
      cells: {
        c: { content: "C", classes: ["section-subheader"] },
        d: { content: "Targeted", classes: ["section-subheader"] },
        e: { content: "E", classes: ["section-subheader"] },
        f: { content: "F", classes: ["section-subheader"] },
        g: { content: "G", classes: ["section-subheader"] },
        h: { content: "H", classes: ["section-subheader"] },
        i: { content: "I", classes: ["section-subheader"] },
        j: { content: "J", classes: ["section-subheader"] },
        k: { content: "Guidance Limits", classes: ["section-subheader"] },
        l: { content: "L", classes: ["section-subheader"] },
        m: { content: "% per Health Canada/NBC", classes: ["section-subheader"] },
        n: { content: "Status", classes: ["section-subheader"] },
      },
    },
    56: {
      id: "A.2",
      label: "Radon (annual avg.)",
      cells: {
        c: { label: "Radon (annual avg.)" },
        d: { fieldId: "d_56", type: "editable", value: "50", classes: ["user-input"] },
        e: { content: "Bq/m³" },
        k: { fieldId: "k_56", type: "calculated", value: "150" },
        l: { content: "Bq/m³" },
        m: { fieldId: "m_56", type: "calculated", value: "0%" },
        n: { fieldId: "n_56", type: "calculated", value: "✓", classes: ["checkmark"] },
      },
    },
    57: {
      id: "A.3",
      label: "CO2 (annual avg.)",
      cells: {
        c: { label: "CO2 (annual avg.)" },
        d: { fieldId: "d_57", type: "editable", value: "550", classes: ["user-input"] },
        e: { content: "ppm" },
        k: { fieldId: "k_57", type: "calculated", value: "1000" },
        l: { content: "ppm" },
        m: { fieldId: "m_57", type: "calculated", value: "0%" },
        n: { fieldId: "n_57", type: "calculated", value: "✓", classes: ["checkmark"] },
      },
    },
    58: {
      id: "A.4",
      label: "TVOC (annual avg.)",
      cells: {
        c: { label: "TVOC (annual avg.)" },
        d: { fieldId: "d_58", type: "editable", value: "100", classes: ["user-input"] },
        e: { content: "ppm" },
        k: { fieldId: "k_58", type: "calculated", value: "400" },
        l: { content: "ppm" },
        m: { fieldId: "m_58", type: "calculated", value: "0%" },
        n: { fieldId: "n_58", type: "calculated", value: "✓", classes: ["checkmark"] },
      },
    },
    59: {
      id: "A.5.1",
      label: "Indoor Heating Season Avg.",
      cells: {
        c: { label: "Indoor Heating Season Avg." },
        d: { fieldId: "d_59", type: "percentage", value: "45", min: 0, max: 100, step: 1, classes: ["user-input"] },
        e: { content: "% RH" },
        f: { content: "A.5.2" },
        g: { label: "" },
        h: { content: "Indoor Cooling Season Avg." },
        i: { fieldId: "i_59", type: "percentage", value: "45", min: 0, max: 100, step: 1, classes: ["user-input"] },
        j: { content: "% RH" },
        k: { fieldId: "k_59", type: "calculated", value: "30-60" },
        l: { content: "%" },
        m: { fieldId: "m_59", type: "calculated", value: "0%" },
        n: { fieldId: "n_59", type: "calculated", value: "✓", classes: ["checkmark"] },
      },
    },
    60: {
      id: "A.6",
      label: "Wood Emissions Offset (Calculated)",
      cells: {
        c: { label: "Wood Emissions Offset (Calculated from Target Wood Use)" },
        d: { fieldId: "d_60", type: "calculated", value: "0.00" },
        e: { content: "MT/yr CO2e" },
      },
    },
  };

  //==========================================================================
  // ACCESSOR METHODS (Standardized)
  //==========================================================================
  function getFields() {
    const fields = {};
    Object.values(sectionRows).forEach(row => {
      if (!row.cells) return;
      Object.values(row.cells).forEach(cell => {
        if (cell.fieldId) {
          fields[cell.fieldId] = {
            type: cell.type,
            label: cell.label || row.label,
            defaultValue: cell.value || "",
            section: "indoorAirQuality",
          };
          if (cell.min !== undefined) fields[cell.fieldId].min = cell.min;
          if (cell.max !== undefined) fields[cell.fieldId].max = cell.max;
          if (cell.step !== undefined) fields[cell.fieldId].step = cell.step;
        }
      });
    });
    return fields;
  }

  function getDropdownOptions() {
    return {}; // No dropdowns in this section
  }

  function getLayout() {
    const layoutRows = [];
    if (sectionRows["header"]) layoutRows.push(createLayoutRow(sectionRows["header"]));
    Object.keys(sectionRows).forEach(key => {
      if (key !== "header") layoutRows.push(createLayoutRow(sectionRows[key]));
    });
    return { rows: layoutRows };
  }

  function createLayoutRow(row) {
    const rowDef = { id: row.id, cells: [{}, {}] };
    const columns = ["c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n"];
    columns.forEach(col => {
      const cell = row.cells?.[col] || {};
      if (col === "c" && !cell.label && row.label) cell.label = row.label;
      rowDef.cells.push(cell);
    });
    return rowDef;
  }
  
  //==========================================================================
  // DUAL-STATE MODE MANAGEMENT (Standardized Pattern)
  //==========================================================================
  const ModeManager = {
    currentMode: "target",
    switchMode: function (mode) {
      if (mode !== "target" && mode !== "reference") return;
      this.currentMode = mode;
    },
  };
  window.TEUI.sect08 = { ModeManager: ModeManager };

  //==========================================================================
  // HELPER FUNCTIONS (Standardized)
  //==========================================================================
  function getNumericValue(fieldId, defaultValue = 0) {
    const prefix = ModeManager.currentMode === "target" ? "target_" : "ref_";
    let rawValue = window.TEUI?.StateManager?.getValue(`${prefix}${fieldId}`);
    if (rawValue === null || rawValue === undefined) {
      rawValue = window.TEUI?.StateManager?.getValue(fieldId);
    }
    return window.TEUI?.parseNumeric?.(rawValue, defaultValue) ?? defaultValue;
  }
  
  function getStringValue(fieldId, defaultValue = "") {
      const prefix = ModeManager.currentMode === "target" ? "target_" : "ref_";
      let rawValue = window.TEUI?.StateManager?.getValue(`${prefix}${fieldId}`);
      if (rawValue === null || rawValue === undefined) {
          rawValue = window.TEUI?.StateManager?.getValue(fieldId);
      }
      return rawValue === null || rawValue === undefined ? defaultValue : rawValue;
  }

  function setFieldValue(fieldId, value, fieldType = "calculated") {
    const modePrefix = ModeManager.currentMode === "target" ? "target_" : "ref_";
    const prefixedFieldId = `${modePrefix}${fieldId}`;

    if (window.TEUI?.StateManager) {
      window.TEUI.StateManager.setValue(prefixedFieldId, value.toString(), fieldType);
    }

    if (ModeManager.currentMode === "target") {
      if (window.TEUI?.StateManager) {
        window.TEUI.StateManager.setValue(fieldId, value.toString(), fieldType);
      }
      const formatType = getFieldFormat(fieldId);
      const formattedValue = window.TEUI?.formatNumber?.(value, formatType) ?? value.toString();
      const element = document.querySelector(`[data-field-id="${fieldId}"]`);
      if (element) {
        element.textContent = formattedValue;
        element.classList.toggle("negative-value", Number(value) < 0);
      }
    }
  }

  function getFieldFormat(fieldId) {
    const formatMap = {
      d_56: "number-0dp", d_57: "number-0dp", d_58: "number-0dp",
      d_59: "number-0dp", i_59: "number-0dp", d_60: "number-2dp-comma",
      k_56: "number-0dp", k_57: "number-0dp", k_58: "number-0dp",
      m_56: "percent-0dp", m_57: "percent-0dp", m_58: "percent-0dp", m_59: "percent-0dp",
    };
    return formatMap[fieldId] || "number-0dp";
  }

  function setElementClass(fieldId, className) {
    const element = document.querySelector(`[data-field-id="${fieldId}"]`);
    if (element) {
      element.classList.remove("checkmark", "warning");
      if (className) element.classList.add(className);
    }
  }

  //==========================================================================
  // CALCULATION FUNCTIONS
  //==========================================================================
  function calculateWoodOffset() {
    // TODO: This wood offset calculation reads from S04 values
    const d31_actualWoodUse = getNumericValue("d_31"); // From S04
    const k31_targetWoodEmissions = getNumericValue("k_31"); // From S04

    let woodOffset = 0;
    if (d31_actualWoodUse > 0) {
      woodOffset = k31_targetWoodEmissions / 1000;
    }
    setFieldValue("d_60", woodOffset);
  }

  function calculateAirQualityStatus() {
    // Set static limit values
    setFieldValue("k_56", 150); // Radon limit
    setFieldValue("k_57", 1000); // CO2 limit
    setFieldValue("k_58", 400); // TVOC limit
    setFieldValue("k_59", "30-60"); // Humidity range

    // Calculate Radon status
    const radonValue = getNumericValue("d_56");
    const radonLimit = getNumericValue("k_56", 150);
    if (radonLimit > 0) {
      const radonPercent = radonValue / radonLimit;
      setFieldValue("m_56", radonPercent);
      if (radonValue <= radonLimit) {
        setFieldValue("n_56", "✓");
        setElementClass("n_56", "checkmark");
      } else {
        setFieldValue("n_56", "✗");
        setElementClass("n_56", "warning");
      }
    }

    // Calculate CO2 status
    const co2Value = getNumericValue("d_57");
    const co2Limit = getNumericValue("k_57", 1000);
    if (co2Limit > 0) {
      const co2Percent = co2Value / co2Limit;
      setFieldValue("m_57", co2Percent);
      if (co2Value <= co2Limit) {
        setFieldValue("n_57", "✓");
        setElementClass("n_57", "checkmark");
      } else {
        setFieldValue("n_57", "✗");
        setElementClass("n_57", "warning");
      }
    }

    // Calculate TVOC status
    const tvocValue = getNumericValue("d_58");
    const tvocLimit = getNumericValue("k_58", 400);
    if (tvocLimit > 0) {
      const tvocPercent = tvocValue / tvocLimit;
      setFieldValue("m_58", tvocPercent);
      if (tvocValue <= tvocLimit) {
        setFieldValue("n_58", "✓");
        setElementClass("n_58", "checkmark");
      } else {
        setFieldValue("n_58", "✗");
        setElementClass("n_58", "warning");
      }
    }

    // Calculate Humidity status
    // TODO: These RH values (d_59 heating, i_59 cooling) will eventually replace
    // the default 45% RH used in S13 Cooling.js calculations
    const heatingHumidity = getNumericValue("d_59");
    const coolingHumidity = getNumericValue("i_59");
    const minHumidity = 30;
    const maxHumidity = 60;
    
    const averageHumidity = (heatingHumidity + coolingHumidity) / 2;
    const middleOfRange = (minHumidity + maxHumidity) / 2;
    const humidityPercent = middleOfRange > 0 ? averageHumidity / middleOfRange : 0;
    setFieldValue("m_59", humidityPercent);

    const heatingInRange = heatingHumidity >= minHumidity && heatingHumidity <= maxHumidity;
    const coolingInRange = coolingHumidity >= minHumidity && coolingHumidity <= maxHumidity;

    if (heatingInRange && coolingInRange) {
      setFieldValue("n_59", "✓");
      setElementClass("n_59", "checkmark");
    } else {
      setFieldValue("n_59", "✗");
      setElementClass("n_59", "warning");
    }
  }

  function calculateAllForMode() {
    calculateWoodOffset();
    calculateAirQualityStatus();
  }
  
  function calculateReferenceModel() {
    const originalMode = ModeManager.currentMode;
    ModeManager.switchMode("reference");
    try {
      calculateAllForMode();
    } catch (error) {
      console.error("[S08] Error in Reference Model calculations:", error);
    } finally {
      ModeManager.switchMode(originalMode);
    }
  }

  function calculateTargetModel() {
    const originalMode = ModeManager.currentMode;
    ModeManager.switchMode("target");
    try {
      calculateAllForMode();
    } catch (error) {
      console.error("[S08] Error in Target Model calculations:", error);
    } finally {
      ModeManager.switchMode(originalMode);
    }
  }

  function calculateAll() {
    calculateReferenceModel();
    calculateTargetModel();
  }

  //==========================================================================
  // EVENT HANDLING (Standardized)
  //==========================================================================
  function initializeEventHandlers() {
    const sectionElement = document.getElementById("indoorAirQuality");
    if (!sectionElement) return;

    // Setup editable field handlers
    const editableFields = ["d_56", "d_57", "d_58"];
    editableFields.forEach((fieldId) => {
      const field = sectionElement.querySelector(`[data-field-id="${fieldId}"]`);
      if (field && !field.hasEditableListeners) {
        field.setAttribute("contenteditable", "true");
        field.classList.add("user-input");
        field.addEventListener("blur", () => {
          const newValue = field.textContent.trim();
          if (window.TEUI?.StateManager) {
            window.TEUI.StateManager.setValue(fieldId, newValue, "user-modified");
            window.TEUI.StateManager.setValue(`ref_${fieldId}`, newValue, "user-modified");
          }
          calculateAll();
        });
        field.addEventListener("keydown", (e) => {
          if (e.key === "Enter") {
            e.preventDefault();
            field.blur();
          }
        });
        field.hasEditableListeners = true;
      }
    });

    // Setup slider handlers for humidity
    // TODO: Future integration - when S13 Cooling.js is refactored, it should read
    // d_59 (heating season RH) and i_59 (cooling season RH) instead of using default 45%
    const sliders = sectionElement.querySelectorAll('input[type="range"]');
    sliders.forEach((slider) => {
      if (!slider.hasSliderListener) {
        slider.addEventListener("input", (e) => {
          const fieldId = e.target.getAttribute("data-field-id");
          const value = e.target.value;
          const displaySpan = document.querySelector(`span[data-display-for="${fieldId}"]`);
          if (displaySpan) displaySpan.textContent = value + "%";
        });
        slider.addEventListener("change", (e) => {
          const fieldId = e.target.getAttribute("data-field-id");
          const value = e.target.value;
          if (window.TEUI?.StateManager) {
            window.TEUI.StateManager.setValue(fieldId, value, "user-modified");
            window.TEUI.StateManager.setValue(`ref_${fieldId}`, value, "user-modified");
          }
          calculateAll();
        });
        slider.hasSliderListener = true;
      }
    });

    // StateManager listeners for cross-section dependencies
    if (window.TEUI?.StateManager) {
      window.TEUI.StateManager.addListener("d_31", calculateAll); // S04 wood use
      window.TEUI.StateManager.addListener("k_31", calculateAll); // S04 wood emissions
    }
  }

  function onSectionRendered() {
    // Add CSS for status indicators
    addStatusStyles();
    initializeEventHandlers();
    calculateAll();
  }

  function addStatusStyles() {
    if (!document.getElementById("air-quality-status-styles")) {
      const styleElement = document.createElement("style");
      styleElement.id = "air-quality-status-styles";
      styleElement.textContent = `
        .checkmark {
          color: #28a745 !important;
          font-weight: bold;
          font-size: 1.2em;
        }
        .warning {
          color: #dc3545 !important;
          font-weight: bold;
          font-size: 1.2em;
        }
      `;
      document.head.appendChild(styleElement);
    }
  }

  //==========================================================================
  // PUBLIC API
  //==========================================================================
  return {
    getFields,
    getDropdownOptions,
    getLayout,
    initializeEventHandlers,
    onSectionRendered,
    calculateAll,
  };
})();
