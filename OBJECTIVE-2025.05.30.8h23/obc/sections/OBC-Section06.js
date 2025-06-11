/**
 * OBC-Section06.js
 * Occupant Safety & Accessibility (Section 6) module for OBC Matrix
 *
 * Based on OBC Matrix Part 3 structure covering rows 58-65
 * Includes Occupant Load, Barrier-Free Design, and Hazardous Substances
 */

// Create section-specific namespace for global references
window.OBC = window.OBC || {};
window.OBC.sect06 = window.OBC.sect06 || {};
window.OBC.sect06.initialized = false;
window.OBC.sect06.userInteracted = false;

// Section 6: Occupant Safety & Accessibility Module
window.OBC.SectionModules.sect06 = (function () {
  //==========================================================================
  // SECTION CONFIGURATION
  //==========================================================================
  
  const SECTION_CONFIG = {
    name: "occupantSafety",
    excelRowStart: 58,
    excelRowEnd: 65,
    hasCalculations: true, // Has occupant load totals
    hasDropdowns: true,
    needsCSS: false,
  };

  //==========================================================================
  // DROPDOWN OPTIONS
  //==========================================================================
  
  const dropdownOptions = {
    yesNoOptions: [
      { value: "-", name: "Select..." },
      { value: "Yes", name: "Yes" },
      { value: "No", name: "No" },
      { value: "N/A", name: "N/A" }
    ],
    
    occupancyTypes: [
      { value: "-", name: "Select..." },
      // Group A Occupancies
      { value: "A1", name: "A1 - Auditoriums, Concert Halls, Theatres" },
      { value: "A2", name: "A2 - Exhibition Halls, Museums, Gymnasiums" },
      { value: "A3", name: "A3 - Arena-type Buildings" },
      { value: "A4", name: "A4 - Places of Worship, Public/Community Halls" },
      // Group B Occupancies
      { value: "B1", name: "B1 - Detention Occupancies" },
      { value: "B2", name: "B2 - Treatment Occupancies" },
      { value: "B3", name: "B3 - Care/Care & Treatment Occupancies" },
      // Group C Occupancy
      { value: "C", name: "C - Residential Occupancy" },
      // Group D Occupancies
      { value: "D", name: "D - Business & Personal Services Occupancy" },
      // Group E Occupancies
      { value: "E", name: "E - Mercantile Occupancy" },
      // Group F Occupancies
      { value: "F1", name: "F1 - High Hazard Industrial Occupancy" },
      { value: "F2", name: "F2 - Medium Hazard Industrial Occupancy" },
      { value: "F3", name: "F3 - Low Hazard Industrial Occupancy" }
    ],
    
    basedOnOptions: [
      { value: "-", name: "Select..." },
      { value: "Floor Area", name: "Floor Area" },
      { value: "Fixed Seats", name: "Fixed Seats" },
      { value: "Actual Count", name: "Actual Count" },
      { value: "Mixed Use", name: "Mixed Use" }
    ],
    
    postedLimitOptions: [
      { value: "-", name: "Select..." },
      { value: "Required", name: "Required" },
      { value: "Not Required", name: "Not Required" },
      { value: "N/A", name: "N/A" }
    ]
  };

  //==========================================================================
  // CONSOLIDATED FIELD DEFINITIONS AND LAYOUT
  //==========================================================================

  const sectionRows = {
    
    // SUBHEADER ROW
    header: {
      id: "6.h",
      rowId: "6.h",
      label: "Occupant Safety Header",
      cells: {
        b: { content: "6.h" },
        c: { content: "OCCUPANT SAFETY", classes: ["section-subheader"] },
        d: { content: "FLOOR LEVEL/AREA", classes: ["section-subheader"] },
        e: { content: "OCCUPANCY TYPE", classes: ["section-subheader"] },
        f: { content: "F", classes: ["section-subheader"] },
        g: { content: "G", classes: ["section-subheader"] },
        h: { content: "OCCUPANT LOAD (PERSONS)", classes: ["section-subheader"] },
        i: { content: "BASED ON", classes: ["section-subheader"] },
        j: { content: "POSTED LIMIT REQUIRED", classes: ["section-subheader"] },
        k: { content: "K", classes: ["section-subheader"] },
        l: { content: "OBC REFERENCE", classes: ["section-subheader"] },
        m: { content: "M", classes: ["section-subheader"] },
        n: { content: "N", classes: ["section-subheader"] },
        o: { content: "Notes", classes: ["section-subheader", "notes-column"] },
      },
    },

    // Row 58: 3.18 Occupant Load Header
    "6.58": {
      id: "6.58",
      rowId: "6.58",
      label: "OCCUPANT LOAD",
      cells: {
        b: { content: "3.18" },
        c: { content: "OCCUPANT LOAD" },
        d: { content: "FLOOR LEVEL/AREA" },
        f: { content: "OCCUPANCY TYPE" },
        h: { content: "OCCUPANT LOAD (PERSONS)" },
        i: { content: "BASED ON" },
        j: { content: "POSTED LIMIT REQUIRED" },
        l: { content: "3.1.17. and 3.1.17.1.(2)" },
        o: {
          fieldId: "o_58",
          type: "editable",
          value: "enter notes here...",
          section: SECTION_CONFIG.name,
          classes: ["notes-column", "user-input"]
        }
      }
    },

    // Row 59: Occupant Load Row 1 (Trigger Row)
    "6.59": {
      id: "6.59",
      rowId: "6.59",
      label: "Occupant Load 1",
      cells: {
        d: {
          fieldId: "d_59",
          type: "editable",
          value: "Floor/Area",
          section: SECTION_CONFIG.name,
          classes: ["user-input", "expandable-row-trigger"],
          attributes: {
            "data-expandable-group": "occupant-loads",
            "data-expandable-rows": "6.60,6.61",
            "data-default-visible": "1"
          }
        },
        f: {
          fieldId: "f_59",
          type: "dropdown",
          dropdownId: "dd_f_59",
          value: "-",
          section: SECTION_CONFIG.name,
          classes: ["dropdown-sm"],
          options: dropdownOptions.occupancyTypes
        },
        h: {
          fieldId: "h_59",
          type: "num-editable",
          value: "-",
          section: SECTION_CONFIG.name,
          classes: ["user-input"]
        },
        i: {
          fieldId: "i_59",
          type: "dropdown",
          dropdownId: "dd_i_59",
          value: "-",
          section: SECTION_CONFIG.name,
          classes: ["dropdown-sm"],
          options: dropdownOptions.basedOnOptions
        },
        j: {
          fieldId: "j_59",
          type: "dropdown",
          dropdownId: "dd_j_59",
          value: "-",
          section: SECTION_CONFIG.name,
          classes: ["dropdown-sm"],
          options: dropdownOptions.postedLimitOptions
        },
        o: {
          fieldId: "o_59",
          type: "editable",
          value: "enter notes here...",
          section: SECTION_CONFIG.name,
          classes: ["notes-column", "user-input"]
        }
      }
    },

    // Row 60: Occupant Load Row 2 (Expandable)
    "6.60": {
      id: "6.60",
      rowId: "6.60",
      label: "Occupant Load 2",
      classes: ["expandable-row"],
      attributes: {
        "data-expandable-group": "occupant-loads"
      },
      cells: {
        d: {
          fieldId: "d_60",
          type: "editable",
          value: "Floor/Area",
          section: SECTION_CONFIG.name,
          classes: ["user-input"]
        },
        f: {
          fieldId: "f_60",
          type: "dropdown",
          dropdownId: "dd_f_60",
          value: "-",
          section: SECTION_CONFIG.name,
          classes: ["dropdown-sm"],
          options: dropdownOptions.occupancyTypes
        },
        h: {
          fieldId: "h_60",
          type: "num-editable",
          value: "-",
          section: SECTION_CONFIG.name,
          classes: ["user-input"]
        },
        i: {
          fieldId: "i_60",
          type: "dropdown",
          dropdownId: "dd_i_60",
          value: "-",
          section: SECTION_CONFIG.name,
          classes: ["dropdown-sm"],
          options: dropdownOptions.basedOnOptions
        },
        j: {
          fieldId: "j_60",
          type: "dropdown",
          dropdownId: "dd_j_60",
          value: "-",
          section: SECTION_CONFIG.name,
          classes: ["dropdown-sm"],
          options: dropdownOptions.postedLimitOptions
        },
        o: {
          fieldId: "o_60",
          type: "editable",
          value: "enter notes here...",
          section: SECTION_CONFIG.name,
          classes: ["notes-column", "user-input"]
        }
      }
    },

    // Row 61: Occupant Load Row 3 (Expandable)
    "6.61": {
      id: "6.61",
      rowId: "6.61",
      label: "Occupant Load 3",
      classes: ["expandable-row"],
      attributes: {
        "data-expandable-group": "occupant-loads"
      },
      cells: {
        d: {
          fieldId: "d_61",
          type: "editable",
          value: "Floor/Area",
          section: SECTION_CONFIG.name,
          classes: ["user-input"]
        },
        f: {
          fieldId: "f_61",
          type: "dropdown",
          dropdownId: "dd_f_61",
          value: "-",
          section: SECTION_CONFIG.name,
          classes: ["dropdown-sm"],
          options: dropdownOptions.occupancyTypes
        },
        h: {
          fieldId: "h_61",
          type: "num-editable",
          value: "-",
          section: SECTION_CONFIG.name,
          classes: ["user-input"]
        },
        i: {
          fieldId: "i_61",
          type: "dropdown",
          dropdownId: "dd_i_61",
          value: "-",
          section: SECTION_CONFIG.name,
          classes: ["dropdown-sm"],
          options: dropdownOptions.basedOnOptions
        },
        j: {
          fieldId: "j_61",
          type: "dropdown",
          dropdownId: "dd_j_61",
          value: "-",
          section: SECTION_CONFIG.name,
          classes: ["dropdown-sm"],
          options: dropdownOptions.postedLimitOptions
        },
        o: {
          fieldId: "o_61",
          type: "editable",
          value: "enter notes here...",
          section: SECTION_CONFIG.name,
          classes: ["notes-column", "user-input"]
        }
      }
    },

    // Row 62: Occupant Load Total
    "6.62": {
      id: "6.62",
      rowId: "6.62",
      label: "TOTAL",
      cells: {
        d: { content: "TOTAL" },
        h: {
          fieldId: "h_62",
          type: "calculated",
          value: "0",
          section: SECTION_CONFIG.name,
          classes: ["calculated-value"]
        },
        o: {
          fieldId: "o_62",
          type: "editable",
          value: "enter notes here...",
          section: SECTION_CONFIG.name,
          classes: ["notes-column", "user-input"]
        }
      }
    },

    // Row 63: 3.19 Barrier-Free Design
    "6.63": {
      id: "6.63",
      rowId: "6.63",
      label: "BARRIER-FREE DESIGN",
      cells: {
        b: { content: "3.19" },
        c: { content: "BARRIER-FREE DESIGN" },
        d: {
          fieldId: "d_63",
          type: "dropdown",
          dropdownId: "dd_d_63",
          value: "-",
          section: SECTION_CONFIG.name,
          classes: ["dropdown-sm"],
          options: dropdownOptions.yesNoOptions
        },
        e: { content: "[provide explanation here]" }, // TODO: Make this conditional editable
        l: { content: "3.8." },
        o: {
          fieldId: "o_63",
          type: "editable",
          value: "enter notes here...",
          section: SECTION_CONFIG.name,
          classes: ["notes-column", "user-input"]
        }
      }
    },

    // Row 64: Barrier-Free Entrances
    "6.64": {
      id: "6.64",
      rowId: "6.64",
      label: "BARRIER-FREE ENTRANCES",
      cells: {
        c: { content: "BARRIER-FREE ENTRANCES" },
        d: {
          fieldId: "d_64",
          type: "num-editable",
          value: "0",
          section: SECTION_CONFIG.name,
          classes: ["user-input"]
        },
        e: { content: "[state quantity to the left and provide an explanation here]" }, // TODO: Make this conditional editable
        l: { content: "3.1.8.2." },
        o: {
          fieldId: "o_64",
          type: "editable",
          value: "enter notes here...",
          section: SECTION_CONFIG.name,
          classes: ["notes-column", "user-input"]
        }
      }
    },

    // Row 65: 3.20 Hazardous Substances
    "6.65": {
      id: "6.65",
      rowId: "6.65",
      label: "HAZARDOUS SUBSTANCES",
      cells: {
        b: { content: "3.20" },
        c: { content: "HAZARDOUS SUBSTANCES" },
        d: {
          fieldId: "d_65",
          type: "dropdown",
          dropdownId: "dd_d_65",
          value: "-",
          section: SECTION_CONFIG.name,
          classes: ["dropdown-sm"],
          options: dropdownOptions.yesNoOptions
        },
        e: { content: "[provide explanation here]" }, // TODO: Make this conditional editable
        l: { content: "3.3.1.2. & 3.3.1.19." },
        o: {
          fieldId: "o_65",
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
  // CALCULATION FUNCTIONS
  //==========================================================================

  function getNumericValue(fieldId, defaultValue = 0) {
    // Try StateManager first, then DOM fallback
    let value = "";
    if (window.OBC?.StateManager?.getValue) {
      value = window.OBC.StateManager.getValue(fieldId);
    } else {
      const element = document.querySelector(`[data-field-id="${fieldId}"]`);
      if (element) {
        value = element.textContent || element.value || "";
      }
    }
    
    if (typeof value === 'string') {
      const parsed = parseFloat(value.replace(/,/g, ''));
      return isNaN(parsed) ? defaultValue : parsed;
    } else if (typeof value === 'number') {
      return isNaN(value) ? defaultValue : value;
    }
    
    return defaultValue;
  }

  function setCalculatedValue(fieldId, rawValue, formatType = "number-0dp-comma") {
        const formattedValue = window.OBC.formatNumber ?
      window.OBC.formatNumber(rawValue, formatType) :
      rawValue.toString();

    const element = document.querySelector(`[data-field-id="${fieldId}"]`);
    if (element) {
      element.textContent = formattedValue;
    }

    if (window.OBC?.StateManager?.setValue) {
      window.OBC.StateManager.setValue(fieldId, rawValue.toString(), "calculated");
    }
  }

  function calculateOccupantLoadTotal() {
    const load1 = getNumericValue("h_59");
    const load2 = getNumericValue("h_60");
    const load3 = getNumericValue("h_61");
    
    const total = load1 + load2 + load3;
    setCalculatedValue("h_62", total, "number-0dp-comma");
  }

  //==========================================================================
  // EVENT HANDLING (OBC MATRIX PATTERN)
  //==========================================================================

  function initializeEventHandlers() {
    console.log("Initializing Section 06 event handlers");
    
    if (window.OBC?.StateManager?.initializeGlobalInputHandlers) {
      window.OBC.StateManager.initializeGlobalInputHandlers();
    }
    
    // Add calculation listeners for occupant load totals
    const calculationTriggers = ['h_59', 'h_60', 'h_61'];
    calculationTriggers.forEach(fieldId => {
          if (window.OBC.StateManager?.addListener) {
      window.OBC.StateManager.addListener(fieldId, calculateOccupantLoadTotal);
    }
    });
  }

  function onSectionRendered() {
    console.log("Section 06 rendered");
    initializeEventHandlers();
    calculateOccupantLoadTotal(); // Run initial calculation
    window.OBC.sect06.initialized = true;
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
    calculateOccupantLoadTotal: calculateOccupantLoadTotal,
  };
})(); 