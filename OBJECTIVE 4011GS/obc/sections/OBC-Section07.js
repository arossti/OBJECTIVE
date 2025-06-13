/**
 * OBC-Section07.js
 * Fire Resistance & Spatial Separation (Section 7) module for OBC Matrix
 *
 * Based on OBC Matrix Part 3 structure covering rows 66-76
 * Includes Required Fire Resistance Ratings and Spatial Separation
 */

// Create section-specific namespace for global references
window.OBC = window.OBC || {};
window.OBC.sect07 = window.OBC.sect07 || {};
window.OBC.sect07.initialized = false;
window.OBC.sect07.userInteracted = false;

// Section 7: Fire Resistance & Spatial Separation Module
window.OBC.SectionModules.sect07 = (function () {
  //==========================================================================
  // SECTION CONFIGURATION
  //==========================================================================

  const SECTION_CONFIG = {
    name: "fireResistance",
    excelRowStart: 66,
    excelRowEnd: 76,
    hasCalculations: false,
    hasDropdowns: true,
    needsCSS: false,
  };

  //==========================================================================
  // DROPDOWN OPTIONS
  //==========================================================================

  const dropdownOptions = {
    // TODO: Add fire resistance rating options from CSV
    fireRatings: [
      { value: "-", name: "Select..." },
      { value: "0.75", name: "0.75" },
      { value: "1", name: "1" },
      { value: "1.5", name: "1.5" },
      { value: "2", name: "2" },
      { value: "3", name: "3" },
      { value: "4", name: "4" },
    ],
    yesNoOptions: [
      { value: "-", name: "Select..." },
      { value: "Yes", name: "Yes" },
      { value: "No", name: "No" },
      { value: "N/A", name: "N/A" },
    ],
  };

  //==========================================================================
  // CONSOLIDATED FIELD DEFINITIONS AND LAYOUT
  //==========================================================================

  const sectionRows = {
    // SUBHEADER ROW
    header: {
      id: "7.h",
      rowId: "7.h",
      label: "Fire Resistance Header",
      cells: {
        b: { content: "7.h" },
        c: { content: "FIRE RESISTANCE", classes: ["section-subheader"] },
        d: { content: "HORIZONTAL ASSEMBLY", classes: ["section-subheader"] },
        e: { content: "E", classes: ["section-subheader"] },
        f: { content: "F", classes: ["section-subheader"] },
        g: { content: "G", classes: ["section-subheader"] },
        h: { content: "RATING (H)", classes: ["section-subheader"] },
        i: {
          content: "SUPPORTING ASSEMBLY (H)",
          classes: ["section-subheader"],
        },
        j: {
          content: "NONCOMBUSTIBLE IN LIEU OF RATING?",
          classes: ["section-subheader"],
        },
        k: { content: "K", classes: ["section-subheader"] },
        l: { content: "OBC REFERENCE", classes: ["section-subheader"] },
        m: { content: "M", classes: ["section-subheader"] },
        n: { content: "N", classes: ["section-subheader"] },
        o: { content: "Notes", classes: ["section-subheader", "notes-column"] },
      },
    },

    // Row 66: 3.21 Required Fire Resistance Ratings
    7.66: {
      id: "7.66",
      rowId: "7.66",
      label: "REQUIRED FIRE RESISTANCE RATINGS",
      cells: {
        b: { content: "3.21" },
        c: { content: "REQUIRED FIRE RESISTANCE RATINGS" },
        d: { content: "HORIZONTAL ASSEMBLY" },
        h: { content: "RATING (H)" },
        i: { content: "SUPPORTING ASSEMBLY (H)" },
        j: { content: "NONCOMBUSTIBLE IN LIEU OF RATING?" },
        l: { content: "3.2.2.20-83., 3.2.1.2., 3.2.1.4., 3.2.2.15." },
        o: {
          fieldId: "o_66",
          type: "editable",
          value: "enter notes here...",
          section: SECTION_CONFIG.name,
          classes: ["notes-column", "user-input"],
        },
      },
    },

    // Row 67: Storeys Below Grade
    7.67: {
      id: "7.67",
      rowId: "7.67",
      label: "STOREYS BELOW GRADE",
      cells: {
        d: { content: "STOREYS BELOW GRADE" },
        h: {
          fieldId: "h_67",
          type: "dropdown",
          dropdownId: "dd_h_67",
          value: "-",
          section: SECTION_CONFIG.name,
          classes: ["dropdown-sm"],
          options: dropdownOptions.fireRatings,
        },
        i: {
          fieldId: "i_67",
          type: "dropdown",
          dropdownId: "dd_i_67",
          value: "-",
          section: SECTION_CONFIG.name,
          classes: ["dropdown-sm"],
          options: dropdownOptions.fireRatings,
        },
        j: {
          fieldId: "j_67",
          type: "dropdown",
          dropdownId: "dd_j_67",
          value: "-",
          section: SECTION_CONFIG.name,
          classes: ["dropdown-sm"],
          options: dropdownOptions.yesNoOptions,
        },
        o: {
          fieldId: "o_67",
          type: "editable",
          value: "enter notes here...",
          section: SECTION_CONFIG.name,
          classes: ["notes-column", "user-input"],
        },
      },
    },

    // Row 68: Floors Over Basement
    7.68: {
      id: "7.68",
      rowId: "7.68",
      label: "FLOORS OVER BASEMENT",
      cells: {
        d: { content: "FLOORS OVER BASEMENT" },
        h: {
          fieldId: "h_68",
          type: "dropdown",
          dropdownId: "dd_h_68",
          value: "-",
          section: SECTION_CONFIG.name,
          classes: ["dropdown-sm"],
          options: dropdownOptions.fireRatings,
        },
        i: {
          fieldId: "i_68",
          type: "dropdown",
          dropdownId: "dd_i_68",
          value: "-",
          section: SECTION_CONFIG.name,
          classes: ["dropdown-sm"],
          options: dropdownOptions.fireRatings,
        },
        j: {
          fieldId: "j_68",
          type: "dropdown",
          dropdownId: "dd_j_68",
          value: "-",
          section: SECTION_CONFIG.name,
          classes: ["dropdown-sm"],
          options: dropdownOptions.yesNoOptions,
        },
        o: {
          fieldId: "o_68",
          type: "editable",
          value: "enter notes here...",
          section: SECTION_CONFIG.name,
          classes: ["notes-column", "user-input"],
        },
      },
    },

    // Row 69: Floors
    7.69: {
      id: "7.69",
      rowId: "7.69",
      label: "FLOORS",
      cells: {
        d: { content: "FLOORS" },
        h: {
          fieldId: "h_69",
          type: "dropdown",
          dropdownId: "dd_h_69",
          value: "-",
          section: SECTION_CONFIG.name,
          classes: ["dropdown-sm"],
          options: dropdownOptions.fireRatings,
        },
        i: {
          fieldId: "i_69",
          type: "dropdown",
          dropdownId: "dd_i_69",
          value: "-",
          section: SECTION_CONFIG.name,
          classes: ["dropdown-sm"],
          options: dropdownOptions.fireRatings,
        },
        j: {
          fieldId: "j_69",
          type: "dropdown",
          dropdownId: "dd_j_69",
          value: "-",
          section: SECTION_CONFIG.name,
          classes: ["dropdown-sm"],
          options: dropdownOptions.yesNoOptions,
        },
        o: {
          fieldId: "o_69",
          type: "editable",
          value: "enter notes here...",
          section: SECTION_CONFIG.name,
          classes: ["notes-column", "user-input"],
        },
      },
    },

    // Row 70: Mezzanine
    "7.70": {
      id: "7.70",
      rowId: "7.70",
      label: "MEZZANINE",
      cells: {
        d: { content: "MEZZANINE" },
        h: {
          fieldId: "h_70",
          type: "dropdown",
          dropdownId: "dd_h_70",
          value: "-",
          section: SECTION_CONFIG.name,
          classes: ["dropdown-sm"],
          options: dropdownOptions.fireRatings,
        },
        i: {
          fieldId: "i_70",
          type: "dropdown",
          dropdownId: "dd_i_70",
          value: "-",
          section: SECTION_CONFIG.name,
          classes: ["dropdown-sm"],
          options: dropdownOptions.fireRatings,
        },
        j: {
          fieldId: "j_70",
          type: "dropdown",
          dropdownId: "dd_j_70",
          value: "-",
          section: SECTION_CONFIG.name,
          classes: ["dropdown-sm"],
          options: dropdownOptions.yesNoOptions,
        },
        o: {
          fieldId: "o_70",
          type: "editable",
          value: "enter notes here...",
          section: SECTION_CONFIG.name,
          classes: ["notes-column", "user-input"],
        },
      },
    },

    // Row 71: Roof
    7.71: {
      id: "7.71",
      rowId: "7.71",
      label: "ROOF",
      cells: {
        d: { content: "ROOF" },
        j: { content: "N/A" },
        o: {
          fieldId: "o_71",
          type: "editable",
          value: "enter notes here...",
          section: SECTION_CONFIG.name,
          classes: ["notes-column", "user-input"],
        },
      },
    },

    // Row 72: 3.22 Spatial Separation
    7.72: {
      id: "7.72",
      rowId: "7.72",
      label: "SPATIAL SEPARATION",
      cells: {
        b: { content: "3.22" },
        c: { content: "SPATIAL SEPARATION" },
        d: { content: "EXPOSING BUILDING FACE" },
        e: { content: "EBF AREA (m²)" },
        f: { content: "L.D. (m)" },
        g: { content: "L/H OR H/L" },
        h: { content: "% UPO PERMITTED / ACTUAL" },
        i: { content: "REQUIRED FRR (H)" },
        j: { content: "CONSTRUCTION TYPE" },
        k: { content: "CLADDING TYPE" },
        l: { content: "3.2.3." },
        o: {
          fieldId: "o_72",
          type: "editable",
          value: "enter notes here...",
          section: SECTION_CONFIG.name,
          classes: ["notes-column", "user-input"],
        },
      },
    },

    // Row 73-76: Spatial Separation Rows
    7.73: {
      id: "7.73",
      rowId: "7.73",
      label: "Spatial Separation 1",
      cells: {
        d: {
          fieldId: "d_73",
          type: "editable",
          value: "Exposing Face",
          section: SECTION_CONFIG.name,
          classes: ["user-input"],
        },
        e: {
          fieldId: "e_73",
          type: "num-editable",
          value: "0",
          section: SECTION_CONFIG.name,
          classes: ["user-input"],
        },
        f: {
          fieldId: "f_73",
          type: "num-editable",
          value: "0",
          section: SECTION_CONFIG.name,
          classes: ["user-input"],
        },
        g: {
          fieldId: "g_73",
          type: "editable",
          value: "/",
          section: SECTION_CONFIG.name,
          classes: ["user-input"],
        },
        h: {
          fieldId: "h_73",
          type: "editable",
          value: "/",
          section: SECTION_CONFIG.name,
          classes: ["user-input"],
        },
        i: {
          fieldId: "i_73",
          type: "dropdown",
          dropdownId: "dd_i_73",
          value: "-",
          section: SECTION_CONFIG.name,
          classes: ["dropdown-sm"],
          options: dropdownOptions.fireRatings,
        },
        j: {
          fieldId: "j_73",
          type: "editable",
          value: "-",
          section: SECTION_CONFIG.name,
          classes: ["user-input"],
        },
        k: {
          fieldId: "k_73",
          type: "editable",
          value: "-",
          section: SECTION_CONFIG.name,
          classes: ["user-input"],
        },
        o: {
          fieldId: "o_73",
          type: "editable",
          value: "enter notes here...",
          section: SECTION_CONFIG.name,
          classes: ["notes-column", "user-input"],
        },
      },
    },

    // Additional spatial separation rows (74-76) would follow the same pattern...
    // TODO: Add rows 74-76 with similar structure
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

    if (sectionRows["header"]) {
      layoutRows.push(createLayoutRow(sectionRows["header"]));
    }

    Object.entries(sectionRows).forEach(([key, row]) => {
      if (key !== "header") {
        layoutRows.push(createLayoutRow(row));
      }
    });

    return { rows: layoutRows };
  }

  function createLayoutRow(row) {
    const rowDef = {
      id: row.id,
      cells: [
        {}, // Column A - empty spacer
        {}, // Column B - auto-populated
      ],
    };

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
    // Initializing Section 07 event handlers

    if (window.OBC?.StateManager?.initializeGlobalInputHandlers) {
      window.OBC.StateManager.initializeGlobalInputHandlers();
    }
  }

  function onSectionRendered() {
    // Section 07 rendered
    initializeEventHandlers();
    window.OBC.sect07.initialized = true;
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
