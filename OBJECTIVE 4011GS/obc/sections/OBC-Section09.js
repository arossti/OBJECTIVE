/**
 * OBC-Section09.js
 * Compliance & Design (Section 9) module for OBC Matrix
 *
 * Based on OBC Matrix Part 3 structure covering rows 82-89
 * Includes Energy Efficiency, Sound Transmission Design, and Alternative Solutions
 */

// Create section-specific namespace for global references
window.OBC = window.OBC || {};
window.OBC.sect09 = window.OBC.sect09 || {};
window.OBC.sect09.initialized = false;
window.OBC.sect09.userInteracted = false;

// Section 9: Compliance & Design Module
window.OBC.SectionModules.sect09 = (function () {
  //==========================================================================
  // SECTION CONFIGURATION
  //==========================================================================

  const SECTION_CONFIG = {
    name: "complianceDesign",
    excelRowStart: 82,
    excelRowEnd: 89,
    hasCalculations: false,
    hasDropdowns: true,
    needsCSS: false,
  };

  //==========================================================================
  // DROPDOWN OPTIONS
  //==========================================================================

  const dropdownOptions = {
    compliancePaths: [
      { value: "-", name: "Select..." },
      { value: "Prescriptive", name: "Prescriptive" },
      { value: "Performance", name: "Performance" },
      { value: "Alternative Solution", name: "Alternative Solution" },
    ],
    yesNoOptions: [
      { value: "-", name: "Select..." },
      { value: "Yes", name: "Yes" },
      { value: "No", name: "No" },
      { value: "N/A", name: "N/A" },
    ],
    climateZones: [
      { value: "-", name: "Select..." },
      { value: "4", name: "4" },
      { value: "5", name: "5" },
      { value: "6", name: "6" },
      { value: "7A", name: "7A" },
      { value: "7B", name: "7B" },
      { value: "8", name: "8" },
    ],
  };

  //==========================================================================
  // CONSOLIDATED FIELD DEFINITIONS AND LAYOUT
  //==========================================================================

  const sectionRows = {
    // Row 82: 3.24 Energy Efficiency Header
    "9.82": {
      id: "9.82",
      rowId: "9.82",
      label: "ENERGY EFFICIENCY",
      cells: {
        b: { content: "3.24" },
        c: { content: "ENERGY EFFICIENCY", classes: ["section-subheader"] },
        d: { content: "COMPLIANCE PATH:", classes: ["section-subheader"] },
        e: {
          fieldId: "e_82",
          type: "dropdown",
          dropdownId: "dd_e_82",
          value: "-",
          section: SECTION_CONFIG.name,
          classes: ["dropdown-md"],
          options: dropdownOptions.compliancePaths,
        },
        f: { content: "", classes: ["section-subheader"] },
        g: { content: "", classes: ["section-subheader"] },
        h: { content: "", classes: ["section-subheader"] },
        i: { content: "", classes: ["section-subheader"] },
        j: { content: "", classes: ["section-subheader"] },
        k: { content: "", classes: ["section-subheader"] },
        l: { content: "12.2.1.2.", classes: ["section-subheader"] },
        m: { content: "", classes: ["section-subheader"] },
        n: { content: "", classes: ["section-subheader"] },
        o: {
          fieldId: "o_82",
          type: "editable",
          value: "enter notes here...",
          section: SECTION_CONFIG.name,
          classes: ["notes-column", "user-input"],
        },
      },
    },

    // Row 83: Climate Zone Information
    "9.83": {
      id: "9.83",
      rowId: "9.83",
      label: "Climate Zone",
      cells: {
        b: { content: "" },
        c: { content: "" },
        d: { content: "CLIMATE ZONE:", classes: ["section-subheader"] },
        e: {
          fieldId: "e_83",
          type: "dropdown",
          dropdownId: "dd_e_83",
          value: "-",
          section: SECTION_CONFIG.name,
          classes: ["dropdown-sm"],
          options: dropdownOptions.climateZones,
        },
        f: { content: "", classes: ["section-subheader"] },
        g: { content: "", classes: ["section-subheader"] },
        h: { content: "", classes: ["section-subheader"] },
        i: { content: "DEGREE DAYS BELOW 18 C:", classes: ["section-subheader"] },
        j: {
          fieldId: "j_83",
          type: "num-editable",
          value: "0",
          section: SECTION_CONFIG.name,
          classes: ["user-input"],
        },
        k: { content: "", classes: ["section-subheader"] },
        l: { content: "SB-1 Table 2", classes: ["section-subheader"] },
        m: { content: "", classes: ["section-subheader"] },
        n: { content: "", classes: ["section-subheader"] },
        o: {
          fieldId: "o_83",
          type: "editable",
          value: "enter notes here...",
          section: SECTION_CONFIG.name,
          classes: ["notes-column", "user-input"],
        },
      },
    },

    // Row 84: 3.25 Sound Transmission Design Header
    "9.84": {
      id: "9.84",
      rowId: "9.84",
      label: "SOUND TRANSMISSION DESIGN",
      cells: {
        b: { content: "3.25" },
        c: { content: "SOUND TRANSMISSION DESIGN", classes: ["section-subheader"] },
        d: { content: "IS THERE MORE THAN 1 DWELLING UNIT IN THE BUILDING?:", classes: ["section-subheader"] },
        e: { content: "", classes: ["section-subheader"] },
        f: { content: "", classes: ["section-subheader"] },
        g: { content: "", classes: ["section-subheader"] },
        h: {
          fieldId: "h_84",
          type: "dropdown",
          dropdownId: "dd_h_84",
          value: "-",
          section: SECTION_CONFIG.name,
          classes: ["dropdown-sm"],
          options: dropdownOptions.yesNoOptions,
        },
        i: { content: "", classes: ["section-subheader"] },
        j: { content: "", classes: ["section-subheader"] },
        k: { content: "", classes: ["section-subheader"] },
        l: { content: "", classes: ["section-subheader"] },
        m: { content: "", classes: ["section-subheader"] },
        n: { content: "", classes: ["section-subheader"] },
        o: { content: "Notes", classes: ["section-subheader", "notes-column"] },
      },
    },

    // Row 85: Sound Transmission Notes
    "9.85": {
      id: "9.85",
      rowId: "9.85",
      label: "Sound Transmission Notes",
      cells: {
        b: { content: "" },
        c: { content: "" },
        d: { content: "NOTES:" },
        e: {
          fieldId: "e_85",
          type: "editable",
          value: "enter sound transmission design notes here...",
          section: SECTION_CONFIG.name,
          classes: ["user-input"],
        },
        o: {
          fieldId: "o_85",
          type: "editable",
          value: "enter notes here...",
          section: SECTION_CONFIG.name,
          classes: ["notes-column", "user-input"],
        },
      },
    },

    // Row 86: Option Implemented
    "9.86": {
      id: "9.86",
      rowId: "9.86",
      label: "Option Implemented",
      cells: {
        b: { content: "" },
        c: { content: "" },
        d: { content: "OPTION IMPLEMENTED:" },
        e: {
          fieldId: "e_86",
          type: "dropdown",
          dropdownId: "dd_e_86",
          value: "-",
          section: SECTION_CONFIG.name,
          classes: ["dropdown-sm"],
          options: dropdownOptions.yesNoOptions,
        },
        o: {
          fieldId: "o_86",
          type: "editable",
          value: "enter notes here...",
          section: SECTION_CONFIG.name,
          classes: ["notes-column", "user-input"],
        },
      },
    },

    // Row 87: 3.26 Alternative Solutions Header
    "9.87": {
      id: "9.87",
      rowId: "9.87",
      label: "ALTERNATIVE SOLUTIONS",
      cells: {
        a: {
          content: "", // Will be populated by ExpandableRows utility
          classes: ["expandable-row-trigger"],
          attributes: {
            "data-expandable-group": "alternative-solutions",
            "data-expandable-rows": "9.88,9.89",
            "data-default-visible": "1", // Shows only the trigger row initially
          },
        },
        b: { content: "3.26" },
        c: { content: "ALTERNATIVE SOLUTIONS", classes: ["section-subheader"] },
        d: {
          fieldId: "d_87",
          type: "editable",
          value: "Enhanced egress lighting system exceeding prescriptive requirements",
          section: SECTION_CONFIG.name,
          classes: ["user-input"],
        },
        e: { content: "", classes: ["section-subheader"] },
        f: { content: "", classes: ["section-subheader"] },
        g: { content: "", classes: ["section-subheader"] },
        h: { content: "", classes: ["section-subheader"] },
        i: { content: "", classes: ["section-subheader"] },
        j: { content: "", classes: ["section-subheader"] },
        k: { content: "", classes: ["section-subheader"] },
        l: { content: "[A]1.2.1.1. and [C]2.1.", classes: ["section-subheader"] },
        m: { content: "", classes: ["section-subheader"] },
        n: { content: "", classes: ["section-subheader"] },
        o: {
          fieldId: "o_87",
          type: "editable",
          value: "Alternative solution providing equivalent safety performance",
          section: SECTION_CONFIG.name,
          classes: ["notes-column", "user-input"],
        },
      },
    },

    // Row 88: Alternative Solutions Details 1
    "9.88": {
      id: "9.88",
      rowId: "9.88",
      label: "Alternative Solutions Details 1",
      cells: {
        b: { content: "" },
        c: { content: "" },
        d: {
          fieldId: "d_88",
          type: "editable",
          value: "Performance-based structural fire protection design",
          section: SECTION_CONFIG.name,
          classes: ["user-input"],
        },
        o: {
          fieldId: "o_88",
          type: "editable",
          value: "Engineered solution with structural engineer certification",
          section: SECTION_CONFIG.name,
          classes: ["notes-column", "user-input"],
        },
      },
    },

    // Row 89: Alternative Solutions Details 2
    "9.89": {
      id: "9.89",
      rowId: "9.89",
      label: "Alternative Solutions Details 2",
      cells: {
        b: { content: "" },
        c: { content: "" },
        d: {
          fieldId: "d_89",
          type: "editable",
          value: "Fire separation performance based on advanced modeling analysis",
          section: SECTION_CONFIG.name,
          classes: ["user-input"],
        },
        o: {
          fieldId: "o_89",
          type: "editable",
          value: "Engineered solution with professional engineer certification",
          section: SECTION_CONFIG.name,
          classes: ["notes-column", "user-input"],
        },
      },
    },
  };

  //==========================================================================
  // ACCESSOR METHODS (REQUIRED FOR FIELDMANAGER)
  //==========================================================================

  function getFields() {
    const fields = {};

    Object.entries(sectionRows).forEach(([rowKey, row]) => {
      if (rowKey === "header") return;
      if (!row.cells) return;

      Object.entries(row.cells).forEach(([_colKey, cell]) => {
        if (cell.fieldId && cell.type) {
          fields[cell.fieldId] = {
            type: cell.type,
            label: cell.label || row.label,
            defaultValue: cell.value || "",
            section: cell.section || SECTION_CONFIG.name,
          };

          if (cell.dropdownId)
            fields[cell.fieldId].dropdownId = cell.dropdownId;
          if (cell.options) fields[cell.fieldId].options = cell.options;
        }
      });
    });

    return fields;
  }

  function getDropdownOptions() {
    const options = {};

    Object.values(sectionRows).forEach((row) => {
      if (!row.cells) return;
      Object.values(row.cells).forEach((cell) => {
        if (cell.dropdownId && cell.options) {
          options[cell.dropdownId] = cell.options;
        }
      });
    });

    return options;
  }

  function getLayout() {
    const layoutRows = [];

    // Process all rows in their natural order (same as Section 03 pattern)
    Object.entries(sectionRows).forEach(([key, row]) => {
      layoutRows.push(createLayoutRow(row));
    });

    return { rows: layoutRows };
  }

  function createLayoutRow(row) {
    const rowDef = {
      id: row.id,
      cells: [
        {}, // Column A - empty spacer (will be populated if row has 'a' cell)
        {}, // Column B - auto-populated
      ],
    };

    // Handle column A if defined (for expandable rows)
    if (row.cells && row.cells.a) {
      rowDef.cells[0] = { ...row.cells.a };
    }

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
      "o",
    ];

    columns.forEach((col) => {
      if (row.cells && row.cells[col]) {
        const cell = { ...row.cells[col] };
        delete cell.section;
        rowDef.cells.push(cell);
      } else {
        rowDef.cells.push({});
      }
    });

    return rowDef;
  }

  //==========================================================================
  // EVENT HANDLING (OBC MATRIX PATTERN)
  //==========================================================================

  function initializeEventHandlers() {
    // Initializing Section 09 event handlers

    if (window.OBC?.StateManager?.initializeGlobalInputHandlers) {
      window.OBC.StateManager.initializeGlobalInputHandlers();
    }
  }

  function onSectionRendered() {
    // Section 09 rendered
    initializeEventHandlers();
    window.OBC.sect09.initialized = true;
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
  };
})();
