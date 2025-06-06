/**
 * 4011-Section03.js
 * Building Areas (Section 3) module for OBC Matrix
 *
 * This file contains field definitions, layout templates, and rendering logic
 * specific to the Building Areas section for the OBC Matrix application.
 *
 * Based on OBC Matrix Part 3 structure covering rows 21-39 with user inputs in column D.
 */

// Create section-specific namespace for global references
window.TEUI = window.TEUI || {};
window.TEUI.sect03 = window.TEUI.sect03 || {};
window.TEUI.sect03.initialized = false;
window.TEUI.sect03.userInteracted = false;

// Section 3: Building Areas Module
window.TEUI.SectionModules.sect03 = (function () {
  //==========================================================================
  // CONSOLIDATED FIELD DEFINITIONS AND LAYOUT
  //==========================================================================

  // Define shared mezzanine type options
  const mezzanineOptions = [
    { value: "-", name: "Select applicable" },
    { value: "Type 1", name: "Type 1" },
    { value: "Type 2", name: "Type 2" },
    { value: "Type 3", name: "Type 3" },
    { value: "N/A", name: "N/A" },
  ];

  // Define rows with integrated field definitions
  const sectionRows = {
    // HEADER ROW
    header: {
      id: "03-HEADER",
      rowId: "03-HEADER",
      label: "Building Areas Header",
      cells: {
        b: { content: "B", classes: ["section-subheader"] },
        c: { content: "C", classes: ["section-subheader"] },
        d: { content: "DESCRIPTION", classes: ["section-subheader"] },
        e: { content: "EXISTING", classes: ["section-subheader"] },
        f: { content: "F", classes: ["section-subheader"] },
        g: { content: "NEW", classes: ["section-subheader"] },
        h: { content: "H", classes: ["section-subheader"] },
        i: { content: "TOTAL", classes: ["section-subheader"] },
        j: { content: "J", classes: ["section-subheader"] },
        k: { content: "K", classes: ["section-subheader"] },
        l: { content: "OBC References", classes: ["section-subheader"] },
        m: { content: "M", classes: ["section-subheader"] },
        n: { content: "N", classes: ["section-subheader"] },
        o: {
          content: "Notes",
          classes: ["section-subheader", "text-center", "notes-column"],
        },
      },
    },

    // Row 21: Empty spacer row
    21: {
      id: "21-EMPTY",
      rowId: "21-EMPTY",
      label: "",
      cells: {
        b: { content: "" },
        c: { content: "" },
        d: { content: "" },
        e: { content: "" },
        f: { content: "" },
        g: { content: "" },
        h: { content: "" },
        i: { content: "" },
        j: { content: "" },
        k: { content: "" },
        l: { content: "" },
        m: { content: "" },
        n: { content: "" },
        o: {
          fieldId: "o_21",
          type: "editable",
          value: "enter notes here...",
          section: "buildingAreas",
          classes: ["text-left", "no-wrap", "notes-column"],
        },
      },
    },

    // Row 22: 3.04 Building Area
    22: {
      id: "3.04",
      rowId: "3.04",
      label: "BUILDING AREA (m²)",
      cells: {
        b: { label: "BUILDING AREA (m²)" },
        c: { content: "" },
        d: { content: "DESCRIPTION" },
        e: { content: "EXISTING" },
        f: { content: "" },
        g: { content: "NEW" },
        h: { content: "" },
        i: { content: "TOTAL [A] 1.4.1.2." },
        j: { content: "" },
        k: { content: "" },
        l: { content: "" },
        m: { content: "" },
        n: { content: "" },
        o: {
          fieldId: "o_22",
          type: "editable",
          value: "enter notes here...",
          section: "buildingAreas",
          classes: ["text-left", "no-wrap", "notes-column"],
        },
      },
    },

    // Row 23: Building Area Row 1
    23: {
      id: "23-AREA1",
      rowId: "23-AREA1",
      label: "",
      cells: {
        b: { content: "" },
        c: { content: "" },
        d: {
          fieldId: "d_23",
          type: "editable",
          value: "Enter area description",
          section: "buildingAreas",
          classes: ["text-left", "no-wrap"],
        },
        e: {
          fieldId: "e_23",
          type: "editable",
          value: "-",
          section: "buildingAreas",
          classes: ["text-center"],
        },
        f: { content: "" },
        g: {
          fieldId: "g_23",
          type: "editable",
          value: "-",
          section: "buildingAreas",
          classes: ["text-center"],
        },
        h: { content: "" },
        i: {
          fieldId: "i_23",
          type: "editable",
          value: "-",
          section: "buildingAreas",
          classes: ["text-center"],
        },
        j: { content: "" },
        k: { content: "" },
        l: { content: "" },
        m: { content: "" },
        n: { content: "" },
        o: {
          fieldId: "o_23",
          type: "editable",
          value: "enter notes here...",
          section: "buildingAreas",
          classes: ["text-left", "no-wrap", "notes-column"],
        },
      },
    },

    // Row 24: Building Area Row 2
    24: {
      id: "24-AREA2",
      rowId: "24-AREA2",
      label: "",
      cells: {
        b: { content: "" },
        c: { content: "" },
        d: {
          fieldId: "d_24",
          type: "editable",
          value: "Enter area description",
          section: "buildingAreas",
          classes: ["text-left", "no-wrap"],
        },
        e: {
          fieldId: "e_24",
          type: "editable",
          value: "-",
          section: "buildingAreas",
          classes: ["text-center"],
        },
        f: { content: "" },
        g: {
          fieldId: "g_24",
          type: "editable",
          value: "-",
          section: "buildingAreas",
          classes: ["text-center"],
        },
        h: { content: "" },
        i: {
          fieldId: "i_24",
          type: "editable",
          value: "-",
          section: "buildingAreas",
          classes: ["text-center"],
        },
        j: { content: "" },
        k: { content: "" },
        l: { content: "" },
        m: { content: "" },
        n: { content: "" },
        o: {
          fieldId: "o_24",
          type: "editable",
          value: "enter notes here...",
          section: "buildingAreas",
          classes: ["text-left", "no-wrap", "notes-column"],
        },
      },
    },

    // Row 25: Building Area Total
    25: {
      id: "25-AREATOTAL",
      rowId: "25-AREATOTAL",
      label: "",
      cells: {
        b: { content: "" },
        c: { content: "" },
        d: { content: "TOTAL" },
        e: {
          fieldId: "e_25",
          type: "editable",
          value: "-",
          section: "buildingAreas",
          classes: ["text-center"],
        },
        f: { content: "" },
        g: {
          fieldId: "g_25",
          type: "editable",
          value: "-",
          section: "buildingAreas",
          classes: ["text-center"],
        },
        h: { content: "" },
        i: {
          fieldId: "i_25",
          type: "editable",
          value: "-",
          section: "buildingAreas",
          classes: ["text-center"],
        },
        j: { content: "" },
        k: { content: "" },
        l: { content: "" },
        m: { content: "" },
        n: { content: "" },
        o: {
          fieldId: "o_25",
          type: "editable",
          value: "enter notes here...",
          section: "buildingAreas",
          classes: ["text-left", "no-wrap", "notes-column"],
        },
      },
    },

    // Row 26: Empty spacer
    26: {
      id: "26-EMPTY",
      rowId: "26-EMPTY",
      label: "",
      cells: {
        b: { content: "" },
        c: { content: "" },
        d: { content: "" },
        e: { content: "" },
        f: { content: "" },
        g: { content: "" },
        h: { content: "" },
        i: { content: "" },
        j: { content: "" },
        k: { content: "" },
        l: { content: "" },
        m: { content: "" },
        n: { content: "" },
        o: {
          fieldId: "o_26",
          type: "editable",
          value: "enter notes here...",
          section: "buildingAreas",
          classes: ["text-left", "no-wrap", "notes-column"],
        },
      },
    },

    // Row 27: 3.05 Gross Area
    27: {
      id: "3.05",
      rowId: "3.05",
      label: "GROSS AREA (m²)",
      cells: {
        b: { label: "GROSS AREA (m²)" },
        c: { content: "" },
        d: { content: "DESCRIPTION" },
        e: { content: "EXISTING" },
        f: { content: "" },
        g: { content: "NEW" },
        h: { content: "" },
        i: { content: "TOTAL [A] 1.4.1.2." },
        j: { content: "" },
        k: { content: "" },
        l: { content: "" },
        m: { content: "" },
        n: { content: "" },
        o: {
          fieldId: "o_27",
          type: "editable",
          value: "enter notes here...",
          section: "buildingAreas",
          classes: ["text-left", "no-wrap", "notes-column"],
        },
      },
    },

    // Row 28-30: Gross Area rows (similar pattern)
    28: {
      id: "28-GROSS1",
      rowId: "28-GROSS1",
      label: "",
      cells: {
        b: { content: "" },
        c: { content: "" },
        d: {
          fieldId: "d_28",
          type: "editable",
          value: "Enter gross area description",
          section: "buildingAreas",
          classes: ["text-left", "no-wrap"],
        },
        e: {
          fieldId: "e_28",
          type: "editable",
          value: "-",
          section: "buildingAreas",
          classes: ["text-center"],
        },
        f: { content: "" },
        g: {
          fieldId: "g_28",
          type: "editable",
          value: "-",
          section: "buildingAreas",
          classes: ["text-center"],
        },
        h: { content: "" },
        i: {
          fieldId: "i_28",
          type: "editable",
          value: "-",
          section: "buildingAreas",
          classes: ["text-center"],
        },
        j: { content: "" },
        k: { content: "" },
        l: { content: "" },
        m: { content: "" },
        n: { content: "" },
        o: {
          fieldId: "o_28",
          type: "editable",
          value: "enter notes here...",
          section: "buildingAreas",
          classes: ["text-left", "no-wrap", "notes-column"],
        },
      },
    },

    // Row 31: 3.06 Mezzanine Area
    31: {
      id: "3.06",
      rowId: "3.06",
      label: "MEZZANINE AREA (m²)",
      cells: {
        b: { label: "MEZZANINE AREA (m²)" },
        c: { content: "" },
        d: { content: "DESCRIPTION" },
        e: { content: "MEZZ TYPE" },
        f: { content: "EXISTING" },
        g: { content: "" },
        h: { content: "NEW" },
        i: { content: "" },
        j: { content: "TOTAL 3.2.1.1." },
        k: { content: "" },
        l: { content: "" },
        m: { content: "" },
        n: { content: "" },
        o: {
          fieldId: "o_31",
          type: "editable",
          value: "enter notes here...",
          section: "buildingAreas",
          classes: ["text-left", "no-wrap", "notes-column"],
        },
      },
    },

    // Row 32: Mezzanine Area Row 1
    32: {
      id: "32-MEZZ1",
      rowId: "32-MEZZ1",
      label: "",
      cells: {
        b: { content: "" },
        c: { content: "" },
        d: {
          fieldId: "d_32",
          type: "editable",
          value: "Enter mezzanine description",
          section: "buildingAreas",
          classes: ["text-left", "no-wrap"],
        },
        e: {
          fieldId: "e_32",
          type: "dropdown",
          dropdownId: "dd_e_32",
          value: "-",
          section: "buildingAreas",
          classes: ["dropdown-sm"],
          options: mezzanineOptions,
        },
        f: {
          fieldId: "f_32",
          type: "editable",
          value: "-",
          section: "buildingAreas",
          classes: ["text-center"],
        },
        g: { content: "" },
        h: {
          fieldId: "h_32",
          type: "editable",
          value: "-",
          section: "buildingAreas",
          classes: ["text-center"],
        },
        i: { content: "" },
        j: {
          fieldId: "j_32",
          type: "editable",
          value: "-",
          section: "buildingAreas",
          classes: ["text-center"],
        },
        k: { content: "" },
        l: { content: "" },
        m: { content: "" },
        n: { content: "" },
        o: {
          fieldId: "o_32",
          type: "editable",
          value: "enter notes here...",
          section: "buildingAreas",
          classes: ["text-left", "no-wrap", "notes-column"],
        },
      },
    },

    // Row 37: 3.07 Building Height
    37: {
      id: "3.07",
      rowId: "3.07",
      label: "BUILDING HEIGHT",
      cells: {
        b: { label: "BUILDING HEIGHT" },
        c: { content: "" },
        d: { content: "STOREYS ABOVE GRADE" },
        e: { content: "" },
        f: { content: "" },
        g: { content: "" },
        h: { content: "" },
        i: { content: "(m) ABOVE GRADE [A] 1.4.1.2. & 3.2.1.1." },
        j: { content: "" },
        k: { content: "" },
        l: { content: "" },
        m: { content: "" },
        n: { content: "" },
        o: {
          fieldId: "o_37",
          type: "editable",
          value: "enter notes here...",
          section: "buildingAreas",
          classes: ["text-left", "no-wrap", "notes-column"],
        },
      },
    },

    // Row 38: Building Height Row 1
    38: {
      id: "38-HEIGHT1",
      rowId: "38-HEIGHT1",
      label: "",
      cells: {
        b: { content: "" },
        c: { content: "" },
        d: { content: "STOREYS BELOW GRADE" },
        e: { content: "" },
        f: { content: "" },
        g: { content: "" },
        h: { content: "" },
        i: {
          fieldId: "i_38",
          type: "editable",
          value: "Enter height in metres",
          section: "buildingAreas",
          classes: ["text-center"],
        },
        j: { content: "" },
        k: { content: "" },
        l: { content: "" },
        m: { content: "" },
        n: { content: "" },
        o: {
          fieldId: "o_38",
          type: "editable",
          value: "enter notes here...",
          section: "buildingAreas",
          classes: ["text-left", "no-wrap", "notes-column"],
        },
      },
    },

    // Row 39: 3.08 High Building
    39: {
      id: "3.08",
      rowId: "3.08",
      label: "HIGH BUILDING",
      cells: {
        b: { label: "HIGH BUILDING" },
        c: { content: "" },
        d: { content: "-" },
        e: { content: "" },
        f: { content: "" },
        g: { content: "" },
        h: { content: "" },
        i: { content: "3.2.6." },
        j: { content: "" },
        k: { content: "" },
        l: { content: "" },
        m: { content: "" },
        n: { content: "" },
        o: {
          fieldId: "o_39",
          type: "editable",
          value: "enter notes here...",
          section: "buildingAreas",
          classes: ["text-left", "no-wrap", "notes-column"],
        },
      },
    },

  };

  //==========================================================================
  // UTILITY FUNCTIONS
  //==========================================================================

  function getFields() {
    const fields = {};
    Object.keys(sectionRows).forEach((rowKey) => {
      const row = sectionRows[rowKey];
      Object.keys(row.cells).forEach((cellKey) => {
        const cell = row.cells[cellKey];
        if (cell.fieldId) {
          fields[cell.fieldId] = {
            type: cell.type,
            value: cell.value,
            section: cell.section,
            min: cell.min,
            max: cell.max,
            step: cell.step,
            options: cell.options,
            dropdownId: cell.dropdownId,
            classes: cell.classes,
            placeholder: cell.placeholder,
            colspan: cell.colspan,
            span: cell.span,
          };
        }
      });
    });
    return fields;
  }

  function getDropdownOptions() {
    const dropdowns = {};
    Object.keys(sectionRows).forEach((rowKey) => {
      const row = sectionRows[rowKey];
      Object.keys(row.cells).forEach((cellKey) => {
        const cell = row.cells[cellKey];
        if (cell.type === "dropdown" && cell.options) {
          dropdowns[cell.dropdownId || cell.fieldId] = cell.options;
        }
      });
    });
    return dropdowns;
  }

  function getLayout() {
    // IMPORTANT: To ensure the header appears first, we process the rows in
    // a specific order: header first, then all other rows

    // Start with an empty array for rows
    const layoutRows = [];

    // First add the header row if it exists
    if (sectionRows["header"]) {
      layoutRows.push(createLayoutRow(sectionRows["header"]));
    }

    // Then add all other rows in their original order, excluding the header
    Object.entries(sectionRows).forEach(([key, row]) => {
      if (key !== "header") {
        layoutRows.push(createLayoutRow(row));
      }
    });

    return { rows: layoutRows };
  }

  function createLayoutRow(row) {
    // Create standard row structure
    const rowDef = {
      id: row.id,
      cells: [
        {}, // Empty column A
        {}, // ID column B (auto-populated)
      ],
    };

    // Add cells B through O based on the row definition (matching Excel structure)
    const columns = [
      "b",
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

    // For each column, add the cell definition if it exists in the row
    columns.forEach((col) => {
      if (row.cells && row.cells[col]) {
        // Create a simplified cell definition for the renderer
        // without the extra field properties
        const cell = { ...row.cells[col] };

        // Special handling for column C to support both label patterns
        if (col === "c") {
          // If using content+type pattern, convert to label pattern
          if (cell.type === "label" && cell.content && !cell.label) {
            cell.label = cell.content;
            delete cell.type; // Not needed for rendering
            delete cell.content; // Not needed once we have label
          }
          // If neither label nor content exists, use row's label as fallback
          else if (!cell.label && !cell.content && row.label) {
            cell.label = row.label;
          }
        }

        // Remove field-specific properties that aren't needed for rendering
        delete cell.getOptions;
        delete cell.section;
        delete cell.dependencies;

        rowDef.cells.push(cell);
      } else {
        // Add empty cell if not defined
        // Special handling for column C - use row's label if available
        if (col === "c" && !row.cells?.c && row.label) {
          rowDef.cells.push({ label: row.label });
        } else {
          // Otherwise add empty cell
          rowDef.cells.push({});
        }
      }
    });

    return rowDef;
  }

  //==========================================================================
  // STATE MANAGEMENT
  //==========================================================================

  function getFieldValue(fieldId) {
    const field = document.getElementById(fieldId);
    if (!field) return "";

    if (field.type === "checkbox") {
      return field.checked;
    } else if (field.type === "number" || field.type === "range") {
      return parseFloat(field.value) || 0;
    } else {
      return field.value || "";
    }
  }

  function getNumericValue(fieldId, defaultValue = 0) {
    const value = getFieldValue(fieldId);
    const numericValue = parseFloat(value);
    return isNaN(numericValue) ? defaultValue : numericValue;
  }

  function setCalculatedValue(fieldId, value) {
    const element = document.getElementById(fieldId);
    if (element) {
      if (typeof value === "number") {
        element.textContent = value.toLocaleString(undefined, {
          minimumFractionDigits: 0,
          maximumFractionDigits: 2,
        });
      } else {
        element.textContent = value;
      }
    }
  }

  //==========================================================================
  // EVENT HANDLERS
  //==========================================================================

  function initializeEventHandlers() {
    console.log("Initializing Section 03 event handlers");
    
    window.TEUI.sect03.initialized = true;
  }



  function onSectionRendered() {
    console.log("Section 03 rendered - Building Areas (OBC Matrix)");
    
    // Initialize any section-specific functionality after rendering
    if (!window.TEUI.sect03.initialized) {
      initializeEventHandlers();
    }


  }

  //==========================================================================
  // PUBLIC API
  //==========================================================================

  return {
    getFields: getFields,
    getDropdownOptions: getDropdownOptions,
    getLayout: getLayout,
    onSectionRendered: onSectionRendered,
    
    // State management functions
    getFieldValue: getFieldValue,
    getNumericValue: getNumericValue,
    setCalculatedValue: setCalculatedValue,
  };
})();
