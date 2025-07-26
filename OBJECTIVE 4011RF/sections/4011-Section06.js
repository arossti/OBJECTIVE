/**
 * 4011-Section06.js
 * Renewable Energy (Section 6) module for TEUI Calculator 4.011
 *
 * Refactored to use the standardized dual-engine architecture.
 */

// Ensure namespace exists
window.TEUI = window.TEUI || {};
window.TEUI.SectionModules = window.TEUI.SectionModules || {};

// Section 6: Renewable Energy Module
window.TEUI.SectionModules.sect06 = (function () {
  //==========================================================================
  // CONSOLIDATED FIELD DEFINITIONS AND LAYOUT
  //==========================================================================

  const sectionRows = {
    header: {
      id: "06-ID",
      rowId: "06-ID",
      label: "Renewable Energy Units",
      cells: {
        c: { content: "C", classes: ["section-subheader"] },
        d: { content: "kWh/yr", classes: ["section-subheader"] },
        e: { content: "E", classes: ["section-subheader"] },
        f: { content: "F", classes: ["section-subheader"] },
        g: { content: "G", classes: ["section-subheader"] },
        h: { content: "H", classes: ["section-subheader"] },
        i: { content: "kWh/yr", classes: ["section-subheader"] },
        j: { content: "J", classes: ["section-subheader"] },
        k: { content: "K", classes: ["section-subheader"] },
        l: { content: "L", classes: ["section-subheader"] },
        m: { content: "kWh/yr", classes: ["section-subheader"] },
        n: { content: "N", classes: ["section-subheader"] },
      },
    },
    43: {
      id: "R.1",
      rowId: "R.1",
      label: "Onsite Energy Subtotals",
      cells: {
        c: { label: "Onsite Energy Subtotals" },
        d: { fieldId: "d_43", type: "calculated", value: "0.00" },
        f: { content: "R.5", classes: ["label-prefix"] },
        g: { content: "Offsite Renewable (REC)", classes: ["label-main"] },
        h: {},
        i: { fieldId: "i_43", type: "calculated", value: "0.00" },
        j: { content: "P.5", classes: ["label-prefix"] },
        k: { content: "Exterior/Site/Other Loads", classes: ["label-main"] },
        m: {
          fieldId: "m_43",
          type: "editable",
          value: "0.00",
          classes: ["user-input"],
        },
      },
    },
    44: {
      id: "R.2",
      rowId: "R.2",
      label: "Photovoltaics",
      cells: {
        c: { label: "Photovoltaics" },
        d: {
          fieldId: "d_44",
          type: "editable",
          value: "0.00",
          classes: ["user-input"],
        },
        f: { content: "R.6", classes: ["label-prefix"] },
        g: { content: "WWS Electricity", classes: ["label-main"] },
        h: {},
        i: {
          fieldId: "i_44",
          type: "editable",
          value: "0.00",
          classes: ["user-input"],
        },
      },
    },
    45: {
      id: "R.3",
      rowId: "R.3",
      label: "Wind",
      cells: {
        c: { label: "Wind" },
        d: {
          fieldId: "d_45",
          type: "editable",
          value: "0.00",
          classes: ["user-input"],
        },
        f: { content: "R.7", classes: ["label-prefix"] },
        g: { content: "Green Natural Gas", classes: ["label-main"] },
        h: {},
        i: { fieldId: "i_45", type: "calculated", value: "0.00" },
        j: { content: "ekWh/yr" },
        k: {
          fieldId: "k_45",
          type: "editable",
          value: "0.00",
          classes: ["user-input"],
        },
        l: { content: "m³" },
      },
    },
    46: {
      id: "R.4",
      rowId: "R.4",
      label: "Remove EV Charging from TEUI",
      cells: {
        c: { label: "Remove EV Charging from TEUI" },
        d: {
          fieldId: "d_46",
          type: "editable",
          value: "0.00",
          classes: ["user-input"],
        },
        f: { content: "R.8", classes: ["label-prefix"] },
        g: { content: "Reserved (other removals)", classes: ["label-main"] },
        h: {},
        i: {
          fieldId: "i_46",
          type: "editable",
          value: "0.00",
          classes: ["user-input"],
        },
      },
    },
  };

  //==========================================================================
  // ACCESSOR METHODS (Standardized)
  //==========================================================================
  function getFields() {
    const fields = {};
    Object.values(sectionRows).forEach((row) => {
      if (!row.cells) return;
      Object.values(row.cells).forEach((cell) => {
        if (cell.fieldId) {
          fields[cell.fieldId] = {
            type: cell.type,
            label: cell.label || row.label,
            defaultValue: cell.value || "",
            section: "onSiteEnergy",
          };
        }
      });
    });
    return fields;
  }

  function getDropdownOptions() {
    return {};
  }

  function getLayout() {
    const layoutRows = [];
    if (sectionRows["header"])
      layoutRows.push(createLayoutRow(sectionRows["header"]));
    Object.keys(sectionRows).forEach((key) => {
      if (key !== "header") layoutRows.push(createLayoutRow(sectionRows[key]));
    });
    return { rows: layoutRows };
  }

  function createLayoutRow(row) {
    const rowDef = { id: row.id, cells: [{}, {}] };
    const columns = [
      "c",
      "d",
      "e",
      "f",
      "g",
      "h",
      "i",
      "j",
      "k",
      "l",
      "m",
      "n",
    ];
    columns.forEach((col) => {
      if (row.cells && row.cells[col]) {
        const cell = { ...row.cells[col] };
        if (col === "c" && !cell.label && row.label) cell.label = row.label;
        rowDef.cells.push(cell);
      } else {
        rowDef.cells.push({});
      }
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
  window.TEUI.sect06 = { ModeManager: ModeManager };

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

  function setFieldValue(fieldId, value, fieldType = "calculated") {
    const modePrefix =
      ModeManager.currentMode === "target" ? "target_" : "ref_";
    const prefixedFieldId = `${modePrefix}${fieldId}`;

    if (window.TEUI?.StateManager) {
      window.TEUI.StateManager.setValue(
        prefixedFieldId,
        value.toString(),
        fieldType,
      );
    }

    if (ModeManager.currentMode === "target") {
      if (window.TEUI?.StateManager) {
        window.TEUI.StateManager.setValue(fieldId, value.toString(), fieldType);
      }
      const formattedValue =
        window.TEUI?.formatNumber?.(value, "number-2dp-comma") ??
        value.toString();
      const element = document.querySelector(`[data-field-id="${fieldId}"]`);
      if (element) {
        element.textContent = formattedValue;
        element.classList.toggle("negative-value", Number(value) < 0);
      }
    }
  }

  //==========================================================================
  // CALCULATION FUNCTIONS
  //==========================================================================
  function calculateOnSiteSubtotal() {
    const pvValue = getNumericValue("d_44");
    const windValue = getNumericValue("d_45");
    const evRemoval = getNumericValue("d_46");
    setFieldValue("d_43", pvValue + windValue + evRemoval);
  }

  function calculateOffsiteRenewable() {
    const wwsValue = getNumericValue("i_44");
    const reservedValue = getNumericValue("i_46");
    setFieldValue("i_43", wwsValue + reservedValue);
  }

  function calculateGreenNaturalGasEnergy() {
    const gasVolume = getNumericValue("k_45");
    setFieldValue("i_45", gasVolume * 10.3321);
  }

  //==========================================================================
  // DUAL-ENGINE ARCHITECTURE (Standardized Pattern)
  //==========================================================================
  function calculateReferenceModel() {
    const originalMode = ModeManager.currentMode;
    ModeManager.switchMode("reference");
    try {
      calculateOnSiteSubtotal();
      calculateGreenNaturalGasEnergy();
      calculateOffsiteRenewable();
    } catch (error) {
      console.error("[S06] Error in Reference Model calculations:", error);
    } finally {
      ModeManager.switchMode(originalMode);
    }
  }

  function calculateTargetModel() {
    const originalMode = ModeManager.currentMode;
    ModeManager.switchMode("target");
    try {
      calculateOnSiteSubtotal();
      calculateGreenNaturalGasEnergy();
      calculateOffsiteRenewable();
    } catch (error) {
      console.error("[S06] Error in Target Model calculations:", error);
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
    const editableFields = [
      "d_44",
      "d_45",
      "d_46",
      "i_44",
      "i_46",
      "k_45",
      "m_43",
    ];
    editableFields.forEach((fieldId) => {
      const field = document.querySelector(`[data-field-id="${fieldId}"]`);
      if (field && !field.hasEditableListeners) {
        field.setAttribute("contenteditable", "true");
        field.classList.add("user-input");
        field.addEventListener("blur", () => {
          const newValue = field.textContent.trim();
          if (window.TEUI?.StateManager) {
            window.TEUI.StateManager.setValue(
              fieldId,
              newValue,
              "user-modified",
            );
            window.TEUI.StateManager.setValue(
              `ref_${fieldId}`,
              newValue,
              "user-modified",
            );
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
    initializeEventHandlers: initializeEventHandlers,
    onSectionRendered: onSectionRendered,
    calculateAll: calculateAll,
  };
})();
