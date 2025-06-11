/**
 * OBC-Section08.js
 * Plumbing Fixture Requirements (Section 8) module for OBC Matrix
 *
 * Based on OBC Matrix Part 3 structure covering rows 77-81
 * Includes Plumbing Fixture Requirements
 */

// Create section-specific namespace for global references
window.OBC = window.OBC || {};
window.OBC.sect08 = window.OBC.sect08 || {};
window.OBC.sect08.initialized = false;
window.OBC.sect08.userInteracted = false;

// Section 8: Plumbing Fixture Requirements Module
window.OBC.SectionModules.sect08 = (function () {
  //==========================================================================
  // SECTION CONFIGURATION
  //==========================================================================
  
  const SECTION_CONFIG = {
    name: "plumbingFixtures",
    excelRowStart: 77,
    excelRowEnd: 81,
    hasCalculations: false,
    hasDropdowns: true,
    needsCSS: false,
  };

  //==========================================================================
  // DROPDOWN OPTIONS
  //==========================================================================
  
  const dropdownOptions = {
    obcSentences: [
      { value: "-", name: "Select..." },
      { value: "3.7.4.1.(1)", name: "3.7.4.1.(1) - Assembly" },
      { value: "3.7.4.2.(1)", name: "3.7.4.2.(1) - Business & Personal Services" },
      { value: "3.7.4.3.(1)", name: "3.7.4.3.(1) - Care Occupancy" },
      { value: "3.7.4.4.(1)", name: "3.7.4.4.(1) - Detention" },
      { value: "3.7.4.5.(1)", name: "3.7.4.5.(1) - Industrial" },
      { value: "3.7.4.6.(1)", name: "3.7.4.6.(1) - Mercantile" },
      { value: "3.7.4.7.(1)", name: "3.7.4.7.(1) - Residential" },
      { value: "3.7.4.8.(1)", name: "3.7.4.8.(1) - Treatment" },
      { value: "Table 3.7.4.1.A", name: "Table 3.7.4.1.A - Assembly Occupancies" },
      { value: "Table 3.7.4.2.A", name: "Table 3.7.4.2.A - Business & Personal Services" },
      { value: "Table 3.7.4.3.A", name: "Table 3.7.4.3.A - Care Occupancies" },
      { value: "Table 3.7.4.4.A", name: "Table 3.7.4.4.A - Detention Occupancies" },
      { value: "Table 3.7.4.5.A", name: "Table 3.7.4.5.A - Industrial Occupancies" },
      { value: "Table 3.7.4.6.A", name: "Table 3.7.4.6.A - Mercantile Occupancies" },
      { value: "Table 3.7.4.7.A", name: "Table 3.7.4.7.A - Residential Occupancies" },
      { value: "Table 3.7.4.8.A", name: "Table 3.7.4.8.A - Treatment Occupancies" }
    ]
  };

  //==========================================================================
  // CONSOLIDATED FIELD DEFINITIONS AND LAYOUT
  //==========================================================================

  const sectionRows = {
    
    // SUBHEADER ROW
    header: {
      id: "8.h",
      rowId: "8.h",
      label: "Plumbing Fixtures Header",
      cells: {
        b: { content: "8.h" },
        c: { content: "PLUMBING FIXTURE REQUIREMENTS", classes: ["section-subheader"] },
        d: { content: "RATIO:", classes: ["section-subheader"] },
        e: { content: "MALE:FEMALE = 50:50 EXCEPT AS NOTED OTHERWISE", classes: ["section-subheader"] },
        f: { content: "F", classes: ["section-subheader"] },
        g: { content: "OCCUPANT LOAD (PERSONS)", classes: ["section-subheader"] },
        h: { content: "OBC SENTENCE", classes: ["section-subheader"] },
        i: { content: "WATER CLOSETS REQUIRED", classes: ["section-subheader"] },
        j: { content: "WATER CLOSETS PROVIDED", classes: ["section-subheader"] },
        k: { content: "BARRIER-FREE WATER CLOSETS REQUIRED / PROVIDED", classes: ["section-subheader"] },
        l: { content: "UNIVERSAL WASHROOMS REQUIRED / PROVIDED", classes: ["section-subheader"] },
        m: { content: "M", classes: ["section-subheader"] },
        n: { content: "N", classes: ["section-subheader"] },
        o: { content: "Notes", classes: ["section-subheader", "notes-column"] },
      },
    },

    // Row 77: 3.23 Plumbing Fixture Requirements
    "8.77": {
      id: "8.77",
      rowId: "8.77",
      label: "PLUMBING FIXTURE REQUIREMENTS",
      cells: {
        b: { content: "3.23" },
        c: { content: "PLUMBING FIXTURE REQUIREMENTS" },
        d: { content: "RATIO:" },
        e: { content: "MALE:FEMALE = 50:50 EXCEPT AS NOTED OTHERWISE" },
        g: { content: "OCCUPANT LOAD (PERSONS)" },
        h: { content: "OBC SENTENCE" },
        i: { content: "WATER CLOSETS REQUIRED" },
        j: { content: "WATER CLOSETS PROVIDED" },
        k: { content: "BARRIER-FREE WATER CLOSETS REQUIRED / PROVIDED" },
        l: { content: "UNIVERSAL WASHROOMS REQUIRED / PROVIDED" },
        m: { content: "3.7.4., 3.8.2.3., Tables 3.8.2.3.A, and 3.8.2.3.B" },
        o: {
          fieldId: "o_77",
          type: "editable",
          value: "enter notes here...",
          section: SECTION_CONFIG.name,
          classes: ["notes-column", "user-input"]
        }
      }
    },

    // Row 78: Plumbing Requirements Header
    "8.78": {
      id: "8.78",
      rowId: "8.78",
      label: "Plumbing Requirements Data",
      cells: {
        d: { content: "FLOOR LEVEL OR AREA" },
        g: { content: "OCCUPANT LOAD (PERSONS)" },
        h: { content: "OBC SENTENCE" },
        i: { content: "WATER CLOSETS REQUIRED" },
        j: { content: "WATER CLOSETS PROVIDED" },
        k: { content: "BARRIER-FREE WATER CLOSETS REQUIRED / PROVIDED" },
        l: { content: "UNIVERSAL WASHROOMS REQUIRED / PROVIDED" },
        o: {
          fieldId: "o_78",
          type: "editable",
          value: "enter notes here...",
          section: SECTION_CONFIG.name,
          classes: ["notes-column", "user-input"]
        }
      }
    },

    // Row 79: Plumbing Requirements Row 1 (Trigger Row)
    "8.79": {
      id: "8.79",
      rowId: "8.79",
      label: "Plumbing Row 1",
      cells: {
        d: {
          fieldId: "d_79",
          type: "editable",
          value: "Floor/Area",
          section: SECTION_CONFIG.name,
          classes: ["user-input", "expandable-row-trigger"],
          attributes: {
            "data-expandable-group": "plumbing-fixtures",
            "data-expandable-rows": "8.80,8.81",
            "data-default-visible": "1"
          }
        },
        g: {
          fieldId: "g_79",
          type: "num-editable",
          value: "0",
          section: SECTION_CONFIG.name,
          classes: ["user-input"]
        },
        h: {
          fieldId: "h_79",
          type: "dropdown",
          dropdownId: "dd_h_79",
          value: "-",
          section: SECTION_CONFIG.name,
          classes: ["dropdown-sm"],
          options: dropdownOptions.obcSentences
        },
        i: {
          fieldId: "i_79",
          type: "num-editable",
          value: "0",
          section: SECTION_CONFIG.name,
          classes: ["user-input"]
        },
        j: {
          fieldId: "j_79",
          type: "num-editable",
          value: "0",
          section: SECTION_CONFIG.name,
          classes: ["user-input"]
        },
        k: {
          fieldId: "k_79",
          type: "editable",
          value: "/ ",
          section: SECTION_CONFIG.name,
          classes: ["user-input"]
        },
        l: {
          fieldId: "l_79",
          type: "editable",
          value: "/ ",
          section: SECTION_CONFIG.name,
          classes: ["user-input"]
        },
        o: {
          fieldId: "o_79",
          type: "editable",
          value: "enter notes here...",
          section: SECTION_CONFIG.name,
          classes: ["notes-column", "user-input"]
        }
      }
    },

    // Row 80: Plumbing Requirements Row 2 (Expandable)
    "8.80": {
      id: "8.80",
      rowId: "8.80",
      label: "Plumbing Row 2",
      classes: ["expandable-row"],
      attributes: {
        "data-expandable-group": "plumbing-fixtures"
      },
      cells: {
        d: {
          fieldId: "d_80",
          type: "editable",
          value: "Floor/Area",
          section: SECTION_CONFIG.name,
          classes: ["user-input"]
        },
        g: {
          fieldId: "g_80",
          type: "num-editable",
          value: "0",
          section: SECTION_CONFIG.name,
          classes: ["user-input"]
        },
        h: {
          fieldId: "h_80",
          type: "dropdown",
          dropdownId: "dd_h_80",
          value: "-",
          section: SECTION_CONFIG.name,
          classes: ["dropdown-sm"],
          options: dropdownOptions.obcSentences
        },
        i: {
          fieldId: "i_80",
          type: "num-editable",
          value: "0",
          section: SECTION_CONFIG.name,
          classes: ["user-input"]
        },
        j: {
          fieldId: "j_80",
          type: "num-editable",
          value: "0",
          section: SECTION_CONFIG.name,
          classes: ["user-input"]
        },
        k: {
          fieldId: "k_80",
          type: "editable",
          value: "/ ",
          section: SECTION_CONFIG.name,
          classes: ["user-input"]
        },
        l: {
          fieldId: "l_80",
          type: "editable",
          value: "/ ",
          section: SECTION_CONFIG.name,
          classes: ["user-input"]
        },
        o: {
          fieldId: "o_80",
          type: "editable",
          value: "enter notes here...",
          section: SECTION_CONFIG.name,
          classes: ["notes-column", "user-input"]
        }
      }
    },

    // Row 81: Plumbing Requirements Row 3 (Expandable)
    "8.81": {
      id: "8.81",
      rowId: "8.81",
      label: "Plumbing Row 3",
      classes: ["expandable-row"],
      attributes: {
        "data-expandable-group": "plumbing-fixtures"
      },
      cells: {
        d: {
          fieldId: "d_81",
          type: "editable",
          value: "Floor/Area",
          section: SECTION_CONFIG.name,
          classes: ["user-input"]
        },
        g: {
          fieldId: "g_81",
          type: "num-editable",
          value: "0",
          section: SECTION_CONFIG.name,
          classes: ["user-input"]
        },
        h: {
          fieldId: "h_81",
          type: "dropdown",
          dropdownId: "dd_h_81",
          value: "-",
          section: SECTION_CONFIG.name,
          classes: ["dropdown-sm"],
          options: dropdownOptions.obcSentences
        },
        i: {
          fieldId: "i_81",
          type: "num-editable",
          value: "0",
          section: SECTION_CONFIG.name,
          classes: ["user-input"]
        },
        j: {
          fieldId: "j_81",
          type: "num-editable",
          value: "0",
          section: SECTION_CONFIG.name,
          classes: ["user-input"]
        },
        k: {
          fieldId: "k_81",
          type: "editable",
          value: "/ ",
          section: SECTION_CONFIG.name,
          classes: ["user-input"]
        },
        l: {
          fieldId: "l_81",
          type: "editable",
          value: "/ ",
          section: SECTION_CONFIG.name,
          classes: ["user-input"]
        },
        o: {
          fieldId: "o_81",
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
    console.log("Initializing Section 08 event handlers");
    
    if (window.OBC?.StateManager?.initializeGlobalInputHandlers) {
      window.OBC.StateManager.initializeGlobalInputHandlers();
    }
  }

  function onSectionRendered() {
    console.log("Section 08 rendered");
    initializeEventHandlers();
    window.OBC.sect08.initialized = true;
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