/**
 * OBC-Section09.js
 * Compliance & Design (Section 9) module for OBC Matrix
 *
 * Based on OBC Matrix Part 3 structure covering rows 82-89
 * Includes Energy Efficiency, Sound Transmission Design, and Alternative Solutions
 */

// Create section-specific namespace for global references
window.TEUI = window.TEUI || {};
window.TEUI.sect09 = window.TEUI.sect09 || {};
window.TEUI.sect09.initialized = false;
window.TEUI.sect09.userInteracted = false;

// Section 9: Compliance & Design Module
window.TEUI.SectionModules.sect09 = (function () {
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
      { value: "Alternative Solution", name: "Alternative Solution" }
    ],
    yesNoOptions: [
      { value: "-", name: "Select..." },
      { value: "Yes", name: "Yes" },
      { value: "No", name: "No" },
      { value: "N/A", name: "N/A" }
    ],
    climateZones: [
      { value: "-", name: "Select..." },
      { value: "4", name: "4" },
      { value: "5", name: "5" },
      { value: "6", name: "6" },
      { value: "7A", name: "7A" },
      { value: "7B", name: "7B" },
      { value: "8", name: "8" }
    ]
  };

  //==========================================================================
  // CONSOLIDATED FIELD DEFINITIONS AND LAYOUT
  //==========================================================================

  const sectionRows = {
    
    // SUBHEADER ROW
    header: {
      id: "9.h",
      rowId: "9.h",
      label: "Compliance & Design Header",
      cells: {
        b: { content: "9.h" },
        c: { content: "COMPLIANCE & DESIGN", classes: ["section-subheader"] },
        d: { content: "COMPLIANCE PATH:", classes: ["section-subheader"] },
        e: { content: "E", classes: ["section-subheader"] },
        f: { content: "F", classes: ["section-subheader"] },
        g: { content: "G", classes: ["section-subheader"] },
        h: { content: "H", classes: ["section-subheader"] },
        i: { content: "DEGREE DAYS BELOW 18 C:", classes: ["section-subheader"] },
        j: { content: "J", classes: ["section-subheader"] },
        k: { content: "K", classes: ["section-subheader"] },
        l: { content: "OBC REFERENCE", classes: ["section-subheader"] },
        m: { content: "M", classes: ["section-subheader"] },
        n: { content: "N", classes: ["section-subheader"] },
        o: { content: "Notes", classes: ["section-subheader", "notes-column"] },
      },
    },

    // Row 82: 3.24 Energy Efficiency
    "9.82": {
      id: "9.82",
      rowId: "9.82",
      label: "ENERGY EFFICIENCY",
      cells: {
        b: { content: "3.24" },
        c: { content: "ENERGY EFFICIENCY" },
        d: { content: "COMPLIANCE PATH:" },
        l: { content: "12.2.1.2." },
        o: {
          fieldId: "o_82",
          type: "editable",
          value: "enter notes here...",
          section: SECTION_CONFIG.name,
          classes: ["notes-column", "user-input"]
        }
      }
    },

    // Row 83: Climate Zone
    "9.83": {
      id: "9.83",
      rowId: "9.83",
      label: "CLIMATE ZONE",
      cells: {
        d: { content: "CLIMATE ZONE:" },
        e: {
          fieldId: "e_83",
          type: "dropdown",
          dropdownId: "dd_e_83",
          value: "-",
          section: SECTION_CONFIG.name,
          classes: ["dropdown-sm"],
          options: dropdownOptions.climateZones
        },
        i: { content: "DEGREE DAYS BELOW 18 C:" },
        j: {
          fieldId: "j_83",
          type: "num-editable",
          value: "0",
          section: SECTION_CONFIG.name,
          classes: ["user-input"]
        },
        l: { content: "SB-1 Table 2" },
        o: {
          fieldId: "o_83",
          type: "editable",
          value: "enter notes here...",
          section: SECTION_CONFIG.name,
          classes: ["notes-column", "user-input"]
        }
      }
    },

    // Row 84: 3.25 Sound Transmission Design
    "9.84": {
      id: "9.84",
      rowId: "9.84",
      label: "SOUND TRANSMISSION DESIGN",
      cells: {
        b: { content: "3.25" },
        c: { content: "SOUND TRANSMISSION DESIGN" },
        d: { content: "IS THERE MORE THAN 1 DWELLING UNIT IN THE BUILDING?:" },
        e: {
          fieldId: "e_84",
          type: "dropdown",
          dropdownId: "dd_e_84",
          value: "-",
          section: SECTION_CONFIG.name,
          classes: ["dropdown-sm"],
          options: dropdownOptions.yesNoOptions
        },
        o: {
          fieldId: "o_84",
          type: "editable",
          value: "enter notes here...",
          section: SECTION_CONFIG.name,
          classes: ["notes-column", "user-input"]
        }
      }
    },

    // Row 85: Sound Transmission Notes
    "9.85": {
      id: "9.85",
      rowId: "9.85",
      label: "Sound Transmission Notes",
      cells: {
        d: { content: "NOTES:" },
        e: {
          fieldId: "e_85",
          type: "editable",
          value: "enter notes here...",
          section: SECTION_CONFIG.name,
          classes: ["user-input"]
        },
        o: {
          fieldId: "o_85",
          type: "editable",
          value: "enter notes here...",
          section: SECTION_CONFIG.name,
          classes: ["notes-column", "user-input"]
        }
      }
    },

    // Row 86: Option Implemented
    "9.86": {
      id: "9.86",
      rowId: "9.86",
      label: "Option Implemented",
      cells: {
        d: { content: "OPTION IMPLEMENTED:" },
        e: {
          fieldId: "e_86",
          type: "dropdown",
          dropdownId: "dd_e_86",
          value: "-",
          section: SECTION_CONFIG.name,
          classes: ["dropdown-sm"],
          options: dropdownOptions.yesNoOptions
        },
        o: {
          fieldId: "o_86",
          type: "editable",
          value: "enter notes here...",
          section: SECTION_CONFIG.name,
          classes: ["notes-column", "user-input"]
        }
      }
    },

    // Row 87: 3.26 Alternative Solutions
    "9.87": {
      id: "9.87",
      rowId: "9.87",
      label: "ALTERNATIVE SOLUTIONS",
      cells: {
        b: { content: "3.26" },
        c: { content: "ALTERNATIVE SOLUTIONS" },
        l: { content: "[A]1.2.1.1. and [C]2.1." },
        o: {
          fieldId: "o_87",
          type: "editable",
          value: "enter notes here...",
          section: SECTION_CONFIG.name,
          classes: ["notes-column", "user-input"]
        }
      }
    },

    // Row 88: Alternative Solutions Details 1
    "9.88": {
      id: "9.88",
      rowId: "9.88",
      label: "Alternative Solutions Details 1",
      cells: {
        d: {
          fieldId: "d_88",
          type: "editable",
          value: "Alternative solution details...",
          section: SECTION_CONFIG.name,
          classes: ["user-input"]
        },
        o: {
          fieldId: "o_88",
          type: "editable",
          value: "enter notes here...",
          section: SECTION_CONFIG.name,
          classes: ["notes-column", "user-input"]
        }
      }
    },

    // Row 89: Alternative Solutions Details 2
    "9.89": {
      id: "9.89",
      rowId: "9.89",
      label: "Alternative Solutions Details 2",
      cells: {
        d: {
          fieldId: "d_89",
          type: "editable",
          value: "Alternative solution details...",
          section: SECTION_CONFIG.name,
          classes: ["user-input"]
        },
        o: {
          fieldId: "o_89",
          type: "editable",
          value: "enter notes here...",
          section: SECTION_CONFIG.name,
          classes: ["notes-column", "user-input"]
        }
      }
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

      Object.entries(row.cells).forEach(([colKey, cell]) => {
        if (cell.fieldId && cell.type) {
          fields[cell.fieldId] = {
            type: cell.type,
            label: cell.label || row.label,
            defaultValue: cell.value || "",
            section: cell.section || SECTION_CONFIG.name,
          };

          if (cell.dropdownId) fields[cell.fieldId].dropdownId = cell.dropdownId;
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

    const columns = ["c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o"];
    
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
    console.log("Initializing Section 09 event handlers");
    
    if (window.TEUI?.OBCStateManager?.initializeGlobalInputHandlers) {
      window.TEUI.OBCStateManager.initializeGlobalInputHandlers();
    }
  }

  function onSectionRendered() {
    console.log("Section 09 rendered");
    initializeEventHandlers();
    window.TEUI.sect09.initialized = true;
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