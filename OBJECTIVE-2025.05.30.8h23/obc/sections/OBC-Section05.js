/**
 * OBC-Section05.js
 * Structural Requirements (Section 5) module for OBC Matrix
 *
 * Based on OBC Matrix Part 3 structure covering rows 53-57
 * Includes Importance Category and Seismic Category sections
 */

// Create section-specific namespace for global references
window.OBC = window.OBC || {};
window.OBC.sect05 = window.OBC.sect05 || {};
window.OBC.sect05.initialized = false;
window.OBC.sect05.userInteracted = false;

// Section 5: Structural Requirements Module
window.OBC.SectionModules.sect05 = (function () {
  //==========================================================================
  // SECTION CONFIGURATION
  //==========================================================================
  
  const SECTION_CONFIG = {
    name: "structuralRequirements",
    excelRowStart: 53,
    excelRowEnd: 57,
    hasCalculations: false,
    hasDropdowns: true,
    needsCSS: false,
  };

  //==========================================================================
  // DROPDOWN OPTIONS
  //==========================================================================
  
  const dropdownOptions = {
    importanceCategory: [
      { value: "Low", name: "Low" },
      { value: "Normal", name: "Normal" },
      { value: "High", name: "High" },
      { value: "Post-disaster", name: "Post-disaster" }
    ],
    // TODO: Add seismic category options from CSV
    seismicOptions: [
      { value: "-", name: "Select..." },
      // // Add seismic category options later
    ]
  };

  //==========================================================================
  // CONSOLIDATED FIELD DEFINITIONS AND LAYOUT
  //==========================================================================

  const sectionRows = {
    
    // SUBHEADER ROW
    header: {
      id: "5.h",
      rowId: "5.h",
      label: "Structural Requirements Header",
      cells: {
        b: { content: "5.h" },
        c: { content: "STRUCTURAL REQUIREMENTS", classes: ["section-subheader"] },
        d: { content: "CATEGORY/CLASS", classes: ["section-subheader"] },
        e: { content: "E", classes: ["section-subheader"] },
        f: { content: "F", classes: ["section-subheader"] },
        g: { content: "G", classes: ["section-subheader"] },
        h: { content: "H", classes: ["section-subheader"] },
        i: { content: "I", classes: ["section-subheader"] },
        j: { content: "J", classes: ["section-subheader"] },
        k: { content: "K", classes: ["section-subheader"] },
        l: { content: "OBC REFERENCE", classes: ["section-subheader"] },
        m: { content: "M", classes: ["section-subheader"] },
        n: { content: "N", classes: ["section-subheader"] },
        o: { content: "Notes", classes: ["section-subheader", "notes-column"] },
      },
    },

    // Row 53: 3.16 Importance Category
    "5.53": {
      id: "5.53",
      rowId: "5.53",
      label: "IMPORTANCE CATEGORY",
      cells: {
        b: { content: "3.16" },
        c: { content: "IMPORTANCE CATEGORY" },
        d: { 
          fieldId: "d_53",
          type: "dropdown",
          dropdownId: "dd_d_53",
          value: "Low",
          section: SECTION_CONFIG.name,
          classes: ["dropdown-sm"],
          options: dropdownOptions.importanceCategory
        },
        l: { content: "4.1.2.1.(3), T4.1.2.1.B" },
        o: {
          fieldId: "o_53",
          type: "editable",
          value: "enter notes here...",
          section: SECTION_CONFIG.name,
          classes: ["notes-column", "user-input"]
        }
      }
    },

    // Row 54: 3.17 Seismic Category  
    "5.54": {
      id: "5.54",
      rowId: "5.54",
      label: "SEISMIC CATEGORY",
      cells: {
        b: { content: "3.17" },
        c: { content: "SEISMIC CATEGORY" },
        d: { content: "SEISMIC CATEGORY -" }, // TODO: Make this a dropdown or calculated field
        l: { content: "4.1.8.4.(1)" },
        o: {
          fieldId: "o_54",
          type: "editable",
          value: "enter notes here...",
          section: SECTION_CONFIG.name,
          classes: ["notes-column", "user-input"]
        }
      }
    },

    // Row 55: Site Class
    "5.55": {
      id: "5.55",
      rowId: "5.55",
      label: "SITE CLASS",
      cells: {
        c: { content: "SITE CLASS" },
        d: { content: "-" }, // TODO: Add site class dropdown
        e: { content: "-" }, // TODO: Add related field
        l: { content: "T4.1.8.5.-B" },
        o: {
          fieldId: "o_55",
          type: "editable",
          value: "enter notes here...",
          section: SECTION_CONFIG.name,
          classes: ["notes-column", "user-input"]
        }
      }
    },

    // Row 56: Seismic Design Required
    "5.56": {
      id: "5.56",
      rowId: "5.56",
      label: "SEISMIC DESIGN REQUIRED",
      cells: {
        c: { content: "SEISMIC DESIGN REQUIRED FOR Table 4.1.8.18. items 6 to 22:" },
        i: { content: "Required" }, // TODO: Make this a dropdown
        l: { content: "4.1.8.18.(2)" },
        o: {
          fieldId: "o_56",
          type: "editable",
          value: "enter notes here...",
          section: SECTION_CONFIG.name,
          classes: ["notes-column", "user-input"]
        }
      }
    },

    // Row 57: Reason for Requirement
    "5.57": {
      id: "5.57",
      rowId: "5.57",
      label: "REASON FOR REQUIREMENT",
      cells: {
        d: { content: "REASON FOR REQUIREMENT" },
        e: { content: "NEITHER SC1 NOR SC2." }, // TODO: Make this editable
        o: {
          fieldId: "o_57",
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
    console.log("Initializing Section 05 event handlers");
    
    if (window.OBC?.StateManager?.initializeGlobalInputHandlers) {
      window.OBC.StateManager.initializeGlobalInputHandlers();
    }
  }

  function onSectionRendered() {
    console.log("Section 05 rendered");
    initializeEventHandlers();
    window.OBC.sect05.initialized = true;
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