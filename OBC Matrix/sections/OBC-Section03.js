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
    { value: "-", name: "Select..." },
    { value: "N/A", name: "N/A" },
    { value: "≤10% Mezzanine", name: "≤10% Mezzanine" },
    { value: "≤40% Mezzanine", name: "≤40% Mezzanine" },
  ];

  // Define rows with integrated field definitions
  const sectionRows = {
    // HEADER ROW
    header: {
      id: "3.04",
      rowId: "3.04",
      label: "Building Areas Header",
      cells: {
        b: { label: "BUILDING AREA (m²)", classes: ["section-subheader", "text-left"] },
        c: { content: "", classes: ["section-subheader"] },
        d: { content: "DESCRIPTION", classes: ["section-subheader"] },
        e: { content: "EXISTING", classes: ["section-subheader"] },
        f: { content: "F", classes: ["section-subheader"] },
        g: { content: "NEW", classes: ["section-subheader"] },
        h: { content: "H", classes: ["section-subheader"] },
        i: { content: "TOTAL", classes: ["section-subheader"] },
        j: { content: "J", classes: ["section-subheader"] },
        k: { content: "K", classes: ["section-subheader"] },
        l: { content: "OBC [A] 1.4.1.2.", classes: ["section-subheader"] },
        m: { content: "M", classes: ["section-subheader"] },
        n: { content: "N", classes: ["section-subheader"] },
        o: {
          content: "Notes",
          classes: ["section-subheader", "text-center", "notes-column"],
        },
      },
    },

    // Row 22: Building Area Row 1
    22: {
      id: "22-AREA1",
      rowId: "22-AREA1",
      label: "",
      cells: {
        b: { content: "" },
        c: { content: "" },
        d: {
          fieldId: "d_22",
          type: "editable",
          value: "Enter area description",
          section: "buildingAreas",
          classes: ["text-left", "no-wrap", "user-input"],
        },
        e: {
          fieldId: "e_22",
          type: "editable",
          value: "1,000.00",
          section: "buildingAreas",
          classes: ["text-center", "user-input"],
        },
        f: { content: "" },
        g: {
          fieldId: "g_22",
          type: "editable",
          value: "100.00",
          section: "buildingAreas",
          classes: ["text-center", "user-input"],
        },
        h: { content: "" },
        i: {
          fieldId: "i_22",
          type: "calculated",
          value: "1,100.00",
          section: "buildingAreas",
          classes: ["text-center", "calculated-value"],
        },
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
          classes: ["text-left", "no-wrap", "notes-column", "user-input"],
        },
      },
    },

    // Row 23: Building Area Row 2
    23: {
      id: "23-AREA2",
      rowId: "23-AREA2",
      label: "",
      cells: {
        b: { content: "" },
        c: { content: "" },
        d: {
          fieldId: "d_23",
          type: "editable",
          value: "Enter area description",
          section: "buildingAreas",
          classes: ["text-left", "no-wrap", "user-input"],
        },
        e: {
          fieldId: "e_23",
          type: "editable",
          value: "200.00",
          section: "buildingAreas",
          classes: ["text-center", "user-input"],
        },
        f: { content: "" },
        g: {
          fieldId: "g_23",
          type: "editable",
          value: "300.00",
          section: "buildingAreas",
          classes: ["text-center", "user-input"],
        },
        h: { content: "" },
        i: {
          fieldId: "i_23",
          type: "calculated",
          value: "500.00",
          section: "buildingAreas",
          classes: ["text-center", "calculated-value"],
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
          classes: ["text-left", "no-wrap", "notes-column", "user-input"],
        },
      },
    },

        // Row 24: Building Area Row 3
        24: {
          id: "24-AREA3",
          rowId: "24-AREA3",
          label: "",
          cells: {
            b: { content: "" },
            c: { content: "" },
            d: {
              fieldId: "d_24",
              type: "editable",
              value: "Enter area description",
              section: "buildingAreas",
              classes: ["text-left", "no-wrap", "user-input"],
            },
            e: {
              fieldId: "e_24",
              type: "editable",
              value: "200.00",
              section: "buildingAreas",
              classes: ["text-center", "user-input"],
            },
            f: { content: "" },
            g: {
              fieldId: "g_24",
              type: "editable",
              value: "300.00",
              section: "buildingAreas",
              classes: ["text-center", "user-input"],
            },
            h: { content: "" },
            i: {
              fieldId: "i_24",
              type: "calculated",
              value: "500.00",
              section: "buildingAreas",
              classes: ["text-center", "calculated-value"],
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
              classes: ["text-left", "no-wrap", "notes-column", "user-input"],
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
          type: "calculated",
          value: "1,300.00",
          section: "buildingAreas",
          classes: ["text-center", "calculated-value"],
        },
        f: { content: "" },
        g: {
          fieldId: "g_25",
          type: "calculated",
          value: "400.00",
          section: "buildingAreas",
          classes: ["text-center", "calculated-value"],
        },
        h: { content: "" },
        i: {
          fieldId: "i_25",
          type: "calculated",
          value: "1,700.00",
          section: "buildingAreas",
          classes: ["text-center", "calculated-value"],
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
          classes: ["text-left", "no-wrap", "notes-column", "user-input"],
        },
      },
    },

                     // Row 26: Intermediate Header - Gross Area
    26: {
      id: "3.05",
      rowId: "3.05",
      label: "GROSS AREA (m²)",
      cells: {
        b: { label: "GROSS AREA (m²)", classes: ["section-subheader", "text-left"] },
        c: { content: "", classes: ["section-subheader"] },
        d: { content: "DESCRIPTION", classes: ["section-subheader"] },
        e: { content: "EXISTING", classes: ["section-subheader"] },
        f: { content: "F", classes: ["section-subheader"] },
        g: { content: "NEW", classes: ["section-subheader"] },
        h: { content: "H", classes: ["section-subheader"] },
        i: { content: "TOTAL", classes: ["section-subheader"] },
        j: { content: "J", classes: ["section-subheader"] },
        k: { content: "K", classes: ["section-subheader"] },
        l: { content: "OBC [A] 1.4.1.2.", classes: ["section-subheader"] },
        m: { content: "M", classes: ["section-subheader"] },
        n: { content: "N", classes: ["section-subheader"] },
        o: {
          content: "Notes",
          classes: ["section-subheader", "text-left", "notes-column"],
        },
      },
    },

    // Row 28-30: Gross Area rows (similar pattern)
    27: {
      id: "27-GROSS1",
      rowId: "27-GROSS1",
      label: "",
      cells: {
        b: { content: "" },
        c: { content: "" },
        d: {
          fieldId: "d_27",
          type: "editable",
          value: "Enter gross area description",
          section: "buildingAreas",
          classes: ["text-left", "no-wrap"],
        },
        e: {
          fieldId: "e_27",
          type: "editable",
          value: "-",
          section: "buildingAreas",
          classes: ["text-center"],
        },
        f: { content: "" },
        g: {
          fieldId: "g_27",
          type: "editable",
          value: "-",
          section: "buildingAreas",
          classes: ["text-center"],
        },
        h: { content: "" },
        i: {
          fieldId: "i_27",
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

    // Row 29: Gross Area Row 3
    29: {
      id: "29-GROSS3",
      rowId: "29-GROSS3",
      label: "",
      cells: {
        b: { content: "" },
        c: { content: "" },
        d: {
          fieldId: "d_29",
          type: "editable",
          value: "Enter gross area description",
          section: "buildingAreas",
          classes: ["text-left", "no-wrap"],
        },
        e: {
          fieldId: "e_29",
          type: "editable",
          value: "-",
          section: "buildingAreas",
          classes: ["text-center"],
        },
        f: { content: "" },
        g: {
          fieldId: "g_29",
          type: "editable",
          value: "-",
          section: "buildingAreas",
          classes: ["text-center"],
        },
        h: { content: "" },
        i: {
          fieldId: "i_29",
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
          fieldId: "o_29",
          type: "editable",
          value: "enter notes here...",
          section: "buildingAreas",
          classes: ["text-left", "no-wrap", "notes-column"],
        },
      },
    },

    // Row 30: Gross Area Total
    30: {
      id: "30-GROSSTOTAL",
      rowId: "30-GROSSTOTAL",
      label: "",
      cells: {
        b: { content: "" },
        c: { content: "" },
        d: { content: "TOTAL" },
        e: {
          fieldId: "e_30",
          type: "calculated",
          value: "-",
          section: "buildingAreas",
          classes: ["text-center", "calculated-value"],
        },
        f: { content: "" },
        g: {
          fieldId: "g_30",
          type: "calculated",
          value: "-",
          section: "buildingAreas",
          classes: ["text-center", "calculated-value"],
        },
        h: { content: "" },
        i: {
          fieldId: "i_30",
          type: "calculated",
          value: "-",
          section: "buildingAreas",
          classes: ["text-center", "calculated-value"],
        },
        j: { content: "" },
        k: { content: "" },
        l: { content: "" },
        m: { content: "" },
        n: { content: "" },
        o: {
          fieldId: "o_30",
          type: "editable",
          value: "enter notes here...",
          section: "buildingAreas",
          classes: ["text-left", "no-wrap", "notes-column"],
        },
      },
    },

    // Row 31: Intermediate Header - Mezzanine Area
    31: {
      id: "31-MEZZ",
      rowId: "31-MEZZ",
      label: "MEZZANINE AREA (m²)",
      cells: {
        b: { label: "MEZZANINE AREA (m²)", classes: ["section-subheader", "text-left"] },
        c: { content: "", classes: ["section-subheader"] },
        d: { content: "DESCRIPTION", classes: ["section-subheader"] },
        e: { content: "EXISTING", classes: ["section-subheader"] },
        f: { content: "F", classes: ["section-subheader"] },
        g: { content: "NEW", classes: ["section-subheader"] },
        h: { content: "H", classes: ["section-subheader"] },
        i: { content: "TOTAL", classes: ["section-subheader"] },
        j: { content: "NEW", classes: ["section-subheader"] },
        k: { content: "K", classes: ["section-subheader"] },
        l: { content: "OBC 3.2.1.1.", classes: ["section-subheader"] },
        m: { content: "M", classes: ["section-subheader"] },
        n: { content: "N", classes: ["section-subheader"] },
        o: {
          content: "Notes",
          classes: ["section-subheader", "text-left", "notes-column"],
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

        // Row 33: Mezzanine Area Row 2
        33: {
          id: "33-MEZZ2",
          rowId: "33-MEZZ2",
          label: "",
          cells: {
            b: { content: "" },
            c: { content: "" },
            d: {
              fieldId: "d_33",
              type: "editable",
              value: "Enter mezzanine description",
              section: "buildingAreas",
              classes: ["text-left", "no-wrap"],
            },
            e: {
              fieldId: "e_33",
              type: "dropdown",
              dropdownId: "dd_e_33",
              value: "-",
              section: "buildingAreas",
              classes: ["dropdown-sm"],
              options: mezzanineOptions,
            },
            f: {
              fieldId: "f_33",
              type: "editable",
              value: "-",
              section: "buildingAreas",
              classes: ["text-center"],
            },
            g: { content: "" },
            h: {
              fieldId: "h_33",
              type: "editable",
              value: "-",
              section: "buildingAreas",
              classes: ["text-center"],
            },
            i: { content: "" },
            j: {
              fieldId: "j_33",
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
              fieldId: "o_33",
              type: "editable",
              value: "enter notes here...",
              section: "buildingAreas",
              classes: ["text-left", "no-wrap", "notes-column"],
            },
          },
        },

    // Row 34: Mezzanine Area Row 3
    34: {
      id: "34-MEZZ3",
      rowId: "34-MEZZ3",
      label: "",
      cells: {
        b: { content: "" },
        c: { content: "" },
        d: {
          fieldId: "d_34",
          type: "editable",
          value: "Enter mezzanine description",
          section: "buildingAreas",
          classes: ["text-left", "no-wrap"],
        },
        e: {
          fieldId: "e_34",
          type: "dropdown",
          dropdownId: "dd_e_34",
          value: "-",
          section: "buildingAreas",
          classes: ["dropdown-sm"],
          options: mezzanineOptions,
        },
        f: {
          fieldId: "f_34",
          type: "editable",
          value: "-",
          section: "buildingAreas",
          classes: ["text-center"],
        },
        g: { content: "" },
        h: {
          fieldId: "h_34",
          type: "editable",
          value: "-",
          section: "buildingAreas",
          classes: ["text-center"],
        },
        i: { content: "" },
        j: {
          fieldId: "j_34",
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
          fieldId: "o_34",
          type: "editable",
          value: "enter notes here...",
          section: "buildingAreas",
          classes: ["text-left", "no-wrap", "notes-column"],
        },
      },
    },

    // Row 35: Mezzanine Area Total
    35: {
      id: "35-MEZZTOTAL",
      rowId: "35-MEZZTOTAL",
      label: "",
      cells: {
        b: { content: "" },
        c: { content: "" },
        d: { content: "TOTAL" },
        e: { content: "" }, // No total for MEZZ TYPE column
        f: {
          fieldId: "f_35",
          type: "calculated",
          value: "-",
          section: "buildingAreas",
          classes: ["text-center", "calculated-value"],
        },
        g: { content: "" },
        h: {
          fieldId: "h_35",
          type: "calculated",
          value: "-",
          section: "buildingAreas",
          classes: ["text-center", "calculated-value"],
        },
        i: { content: "" },
        j: {
          fieldId: "j_35",
          type: "calculated",
          value: "-",
          section: "buildingAreas",
          classes: ["text-center", "calculated-value"],
        },
        k: { content: "" },
        l: { content: "" },
        m: { content: "" },
        n: { content: "" },
        o: {
          fieldId: "o_35",
          type: "editable",
          value: "enter notes here...",
          section: "buildingAreas",
          classes: ["text-left", "no-wrap", "notes-column"],
        },
      },
    },

    // Row 36: 3.07 Building Height (Stories Above Grade)
    36: {
      id: "3.07",
      rowId: "3.07",
      label: "BUILDING HEIGHT",
      cells: {
        b: { label: "BUILDING HEIGHT" },
        c: { content: "" },
        d: {
          fieldId: "d_36",
          type: "editable",
          value: "2.0",
          section: "buildingAreas",
          classes: ["text-center", "user-input"],
        },
        e: { content: "STOREYS ABOVE GRADE" },
        f: { content: "" },
        g: { content: "" },
        h: { content: "" },
        i: {
          fieldId: "i_36",
          type: "editable",
          value: "6.20",
          section: "buildingAreas",
          classes: ["text-center", "user-input"],
        },
        j: { content: "(m) ABOVE GRADE [A] 1.4.1.2. & 3.2.1.1." },
        k: { content: "" },
        l: { content: "" },
        m: { content: "" },
        n: { content: "" },
        o: {
          fieldId: "o_36",
          type: "editable",
          value: "enter notes here...",
          section: "buildingAreas",
          classes: ["text-left", "no-wrap", "notes-column", "user-input"],
        },
      },
    },

    // Row 37: Building Height (Stories Below Grade)
    37: {
      id: "37-HEIGHT2",
      rowId: "37-HEIGHT2",
      label: "",
      cells: {
        b: { content: "" },
        c: { content: "" },
        d: {
          fieldId: "d_37",
          type: "editable",
          value: "1.0",
          section: "buildingAreas",
          classes: ["text-center", "user-input"],
        },
        e: { content: "STOREYS BELOW GRADE" },
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
          fieldId: "o_37",
          type: "editable",
          value: "enter notes here...",
          section: "buildingAreas",
          classes: ["text-left", "no-wrap", "notes-column", "user-input"],
        },
      },
    },

    // Row 38: 3.08 High Building
    38: {
      id: "3.08",
      rowId: "3.08",
      label: "HIGH BUILDING",
      cells: {
        b: { label: "HIGH BUILDING" },
        c: { content: "" },
        d: {
          fieldId: "d_38",
          type: "dropdown",
          dropdownId: "dd_d_38",
          value: "-",
          section: "buildingAreas",
          classes: ["dropdown-sm"],
          options: [
            { value: "-", name: "Select..." },
            { value: "Yes", name: "Yes" },
            { value: "No", name: "No" },
          ],
        },
        e: { content: "" },
        f: { content: "" },
        g: { content: "" },
        h: { content: "" },
        i: { content: "" },
        j: { content: "3.2.6." },
        k: { content: "" },
        l: { content: "" },
        m: { content: "" },
        n: { content: "" },
        o: {
          fieldId: "o_38",
          type: "editable",
          value: "enter notes here...",
          section: "buildingAreas",
          classes: ["text-left", "no-wrap", "notes-column", "user-input"],
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
    const field = document.querySelector(`[data-field-id="${fieldId}"]`);
    if (!field) return "";

    if (field.type === "checkbox") {
      return field.checked;
    } else if (field.tagName === "INPUT") {
      return field.value || "";
    } else if (field.contentEditable === "true") {
      return field.textContent || "";
    } else {
      return field.textContent || "";
    }
  }

  function getNumericValue(fieldId, defaultValue = 0) {
    // Try StateManager first, then fallback to DOM
    if (window.TEUI?.StateManager?.getValue) {
      const stateValue = window.TEUI.StateManager.getValue(fieldId);
      if (stateValue !== null && stateValue !== undefined) {
        const numericValue = window.TEUI.parseNumeric ? 
          window.TEUI.parseNumeric(stateValue, defaultValue) : 
          parseFloat(stateValue.toString().replace(/,/g, ''));
        return isNaN(numericValue) ? defaultValue : numericValue;
      }
    }
    
    // Fallback to DOM
    const value = getFieldValue(fieldId);
    const cleanValue = value.toString().replace(/,/g, '').replace(/[^\d.-]/g, '');
    const numericValue = parseFloat(cleanValue);
    return isNaN(numericValue) ? defaultValue : numericValue;
  }

  function setCalculatedValue(fieldId, rawValue, formatType = "number-2dp-comma") {
    const element = document.querySelector(`[data-field-id="${fieldId}"]`);
    if (element) {
      // Use TEUI formatNumber if available, otherwise fallback with proper thousands separators
      let formattedValue;
      if (typeof rawValue === "number") {
        if (window.TEUI?.formatNumber) {
          formattedValue = window.TEUI.formatNumber(rawValue, formatType);
        } else {
          // Ensure thousands separators are included in fallback
          formattedValue = rawValue.toLocaleString('en-US', {
            minimumFractionDigits: 2,
            maximumFractionDigits: 2,
            useGrouping: true  // Explicitly enable thousands separators
          });
        }
      } else {
        formattedValue = rawValue;
      }
      
      element.textContent = formattedValue;
      
      // Add calculated value styling and remove user input styling
      element.classList.add('calculated-value');
      element.classList.remove('user-input', 'user-modified', 'editing-intent');
      element.removeAttribute('contenteditable');
      
      // Register value with StateManager
      if (window.TEUI?.StateManager?.setValue) {
        window.TEUI.StateManager.setValue(fieldId, rawValue.toString(), "calculated");
      }
    }
  }

  //==========================================================================
  // CALCULATION FUNCTIONS
  //==========================================================================

  function calculateAreaTotals() {
    // Row 22 horizontal total (i_22 = e_22 + g_22)
    const e22 = getNumericValue("e_22");
    const g22 = getNumericValue("g_22");
    const i22Total = e22 + g22;
    setCalculatedValue("i_22", i22Total);

    // Row 23 horizontal total (i_23 = e_23 + g_23)
    const e23 = getNumericValue("e_23");
    const g23 = getNumericValue("g_23");
    const i23Total = e23 + g23;
    setCalculatedValue("i_23", i23Total);

    // Row 24 horizontal total (i_24 = e_24 + g_24)
    const e24 = getNumericValue("e_24");
    const g24 = getNumericValue("g_24");
    const i24Total = e24 + g24;
    setCalculatedValue("i_24", i24Total);

    // Row 25 vertical totals (sum of all area rows)
    const e25Total = e22 + e23 + e24; // Sum of EXISTING column
    const g25Total = g22 + g23 + g24; // Sum of NEW column  
    const i25Total = i22Total + i23Total + i24Total; // Sum of TOTAL column
    
    setCalculatedValue("e_25", e25Total);
    setCalculatedValue("g_25", g25Total);
    setCalculatedValue("i_25", i25Total);
  }

  function calculateGrossAreaTotals() {
    // Row 30 gross area totals (sum of rows 27, 28, 29)
    const e27 = getNumericValue("e_27", 0);
    const e28 = getNumericValue("e_28", 0); 
    const e29 = getNumericValue("e_29", 0);
    const e30Total = e27 + e28 + e29;
    
    const g27 = getNumericValue("g_27", 0);
    const g28 = getNumericValue("g_28", 0);
    const g29 = getNumericValue("g_29", 0);
    const g30Total = g27 + g28 + g29;
    
    const i27 = getNumericValue("i_27", 0);
    const i28 = getNumericValue("i_28", 0);
    const i29 = getNumericValue("i_29", 0);
    const i30Total = i27 + i28 + i29;
    
    setCalculatedValue("e_30", e30Total);
    setCalculatedValue("g_30", g30Total);
    setCalculatedValue("i_30", i30Total);
  }

  function calculateMezzanineAreaTotals() {
    // Row 35 mezzanine area totals (sum of rows 32, 33, 34)
    const f32 = getNumericValue("f_32", 0);
    const f33 = getNumericValue("f_33", 0);
    const f34 = getNumericValue("f_34", 0);
    const f35Total = f32 + f33 + f34;
    
    const h32 = getNumericValue("h_32", 0);
    const h33 = getNumericValue("h_33", 0);
    const h34 = getNumericValue("h_34", 0);
    const h35Total = h32 + h33 + h34;
    
    const j32 = getNumericValue("j_32", 0);
    const j33 = getNumericValue("j_33", 0);
    const j34 = getNumericValue("j_34", 0);
    const j35Total = j32 + j33 + j34;
    
    setCalculatedValue("f_35", f35Total);
    setCalculatedValue("h_35", h35Total);
    setCalculatedValue("j_35", j35Total);
  }

  function performAllCalculations() {
    // Add recursion protection
    if (window.sectionCalculationInProgress) {
      console.log("[S03] Calculation already in progress, skipping...");
      return;
    }

    window.sectionCalculationInProgress = true;

    try {
      console.log("[S03] Starting area calculations...");
      calculateAreaTotals();
      calculateGrossAreaTotals();
      calculateMezzanineAreaTotals();
      console.log("[S03] Area calculations complete");
    } finally {
      window.sectionCalculationInProgress = false;
    }
  }

  //==========================================================================
  // DIAGNOSTIC FUNCTIONS
  //==========================================================================

  function checkS03State() {
    console.log("=== S03 STATE CHECK ===");
    console.log("Section 03 module loaded:", !!window.TEUI?.SectionModules?.sect03);
    console.log("StateManager available:", !!window.TEUI?.StateManager);
    
    const testFields = ['e_22', 'g_22', 'e_23', 'g_23', 'i_22', 'i_23', 'e_24', 'g_24', 'i_24'];
    testFields.forEach(fieldId => {
      const element = document.querySelector(`[data-field-id="${fieldId}"]`);
      const stateValue = window.TEUI?.StateManager?.getValue(fieldId);
      const numericValue = getNumericValue(fieldId);
      
      console.log(`${fieldId}:`);
      console.log(`  DOM: "${element?.textContent || "ELEMENT NOT FOUND"}"`);
      console.log(`  State: ${stateValue || "UNDEFINED"}`);
      console.log(`  Numeric: ${numericValue}`);
    });
    
    console.log("=== END S03 CHECK ===");
    return true;
  }

  //==========================================================================
  // EVENT HANDLERS
  //==========================================================================

  function handleFieldBlur(event) {
    const fieldElement = this;
    const currentFieldId = fieldElement.getAttribute("data-field-id");
    if (!currentFieldId) return;

    let valueStr = fieldElement.textContent.trim().replace(/,/g, "");
    let displayValue = "";
    let rawValueToStore = "";

    // Determine if this is a numeric field
    const numericFields = [
      'e_22', 'g_22', 'e_23', 'g_23', 'e_24', 'g_24',
      'e_27', 'g_27', 'i_27', 'e_28', 'g_28', 'i_28', 'e_29', 'g_29', 'i_29',
      'f_32', 'h_32', 'j_32', 'f_33', 'h_33', 'j_33', 'f_34', 'h_34', 'j_34',
      'd_36', 'd_37', 'i_36'
    ];
    const isNumericField = numericFields.includes(currentFieldId);
    
    // Determine decimal places for different field types
    const heightStoriesFields = ['d_36', 'd_37']; // 1 decimal place
    const heightMetresFields = ['i_36']; // 2 decimal places  
    const areaFields = [
      'e_22', 'g_22', 'e_23', 'g_23', 'e_24', 'g_24',
      'e_27', 'g_27', 'i_27', 'e_28', 'g_28', 'i_28', 'e_29', 'g_29', 'i_29',
      'f_32', 'h_32', 'j_32', 'f_33', 'h_33', 'j_33', 'f_34', 'h_34', 'j_34'
    ]; // 2 decimal places with commas

    if (isNumericField) {
      // Parse numeric value using TEUI parseNumeric if available
      let numValue = window.TEUI?.parseNumeric ? 
        window.TEUI.parseNumeric(valueStr, NaN) : 
        parseFloat(valueStr);

      if (!isNaN(numValue) && numValue >= 0) {
        // Successfully parsed a number
        rawValueToStore = numValue.toString();
        
        // Apply formatting based on field type
        if (heightStoriesFields.includes(currentFieldId)) {
          // Stories (1 decimal place, no commas)
          displayValue = window.TEUI?.formatNumber ? 
            window.TEUI.formatNumber(numValue, "number-1dp") :
            numValue.toFixed(1);
        } else if (heightMetresFields.includes(currentFieldId)) {
          // Metres (2 decimal places, no commas for small numbers)
          displayValue = window.TEUI?.formatNumber ? 
            window.TEUI.formatNumber(numValue, "number-2dp") :
            numValue.toFixed(2);
        } else if (areaFields.includes(currentFieldId)) {
          // Area fields (2 decimal places with commas)
          displayValue = window.TEUI?.formatNumber ? 
            window.TEUI.formatNumber(numValue, "number-2dp-comma") :
            numValue.toLocaleString('en-US', {
              minimumFractionDigits: 2,
              maximumFractionDigits: 2,
              useGrouping: true  // Ensure thousands separators
            });
        } else {
          // Default formatting
          displayValue = window.TEUI?.formatNumber ? 
            window.TEUI.formatNumber(numValue, "number-2dp-comma") :
            numValue.toLocaleString('en-US', {
              minimumFractionDigits: 2,
              maximumFractionDigits: 2,
              useGrouping: true  // Ensure thousands separators
            });
        }
      } else {
        // Invalid number, reset to previous value or default
        const previousValue = getNumericValue(currentFieldId, 0);
        rawValueToStore = previousValue.toString();
        
        // Apply same formatting logic for fallback
        if (heightStoriesFields.includes(currentFieldId)) {
          displayValue = window.TEUI?.formatNumber ? 
            window.TEUI.formatNumber(previousValue, "number-1dp") :
            previousValue.toFixed(1);
        } else if (heightMetresFields.includes(currentFieldId)) {
          displayValue = window.TEUI?.formatNumber ? 
            window.TEUI.formatNumber(previousValue, "number-2dp") :
            previousValue.toFixed(2);
        } else {
          displayValue = window.TEUI?.formatNumber ? 
            window.TEUI.formatNumber(previousValue, "number-2dp-comma") :
            previousValue.toLocaleString('en-US', {
              minimumFractionDigits: 2,
              maximumFractionDigits: 2,
              useGrouping: true  // Ensure thousands separators
            });
        }
      }
    } else {
      // Text field - store as-is but clean up
      rawValueToStore = valueStr;
      displayValue = valueStr;
    }

    // Update DOM
    fieldElement.textContent = displayValue;
    
    // Add user-modified styling
    fieldElement.classList.add('user-modified');
    fieldElement.classList.remove('user-input', 'editing-intent');

    // Register with StateManager
    if (window.TEUI?.StateManager?.setValue) {
      window.TEUI.StateManager.setValue(currentFieldId, rawValueToStore, "user-modified");
    }

    // Trigger calculations for numeric fields
    if (isNumericField && !window.sectionCalculationInProgress) {
      setTimeout(() => {
        performAllCalculations();
      }, 50);
    }
  }

  function initializeEventHandlers() {
    console.log("Initializing Section 03 event handlers");
    
    // All editable fields in Section 03
    const editableFields = [
      'd_22', 'd_23', 'e_22', 'g_22', 'e_23', 'g_23', 'e_24', 'g_24',
      'd_27', 'e_27', 'g_27', 'i_27', 'd_28', 'e_28', 'g_28', 'i_28', 'd_29', 'e_29', 'g_29', 'i_29',
      'd_32', 'f_32', 'h_32', 'j_32', 'd_33', 'f_33', 'h_33', 'j_33', 'd_34', 'f_34', 'h_34', 'j_34',
      'd_36', 'd_37', 'i_36', 'o_22', 'o_23', 'o_24', 'o_25', 'o_27', 
      'o_28', 'o_29', 'o_30', 'o_31', 'o_32', 'o_33', 'o_34', 'o_35', 'o_36', 'o_37', 'o_38'
    ];
    
    editableFields.forEach(fieldId => {
      const field = document.querySelector(`[data-field-id="${fieldId}"]`);
      if (field?.classList.contains("user-input") && field.contentEditable === "true") {
        if (!field.hasEditableListeners) {
          // Enter key triggers blur
          field.addEventListener("keydown", (e) => {
            if (e.key === "Enter") {
              e.preventDefault();
              field.blur();
            }
          });
          
          // Blur handler for formatting and state management
          field.addEventListener("blur", handleFieldBlur.bind(field));
          
          // Focus/focusout for styling
          field.addEventListener("focus", () => {
            field.classList.add("editing-intent");
          });
          
          field.addEventListener("focusout", () => {
            field.classList.remove("editing-intent");
          });
          
          // Input handler for immediate visual feedback
          field.addEventListener("input", () => {
            field.classList.add("user-modified", "editing-intent");
            field.classList.remove("user-input");
          });
          
          field.hasEditableListeners = true; // Prevent duplicate listeners
        }
      }
    });

    // Register StateManager listeners for cross-field dependencies
    if (window.TEUI?.StateManager?.addListener) {
      // Listen for changes to area fields to trigger calculations
      const calculationTriggers = [
        'e_22', 'g_22', 'e_23', 'g_23', 'e_24', 'g_24',
        'e_27', 'g_27', 'i_27', 'e_28', 'g_28', 'i_28', 'e_29', 'g_29', 'i_29',
        'f_32', 'h_32', 'j_32', 'f_33', 'h_33', 'j_33', 'f_34', 'h_34', 'j_34'
      ];
      calculationTriggers.forEach(fieldId => {
        window.TEUI.StateManager.addListener(fieldId, () => {
          if (!window.sectionCalculationInProgress) {
            performAllCalculations();
          }
        });
      });
    }
    
    window.TEUI.sect03.initialized = true;
  }

  function onSectionRendered() {
    console.log("Section 03 rendered - Building Areas (OBC Matrix)");
    
    // Initialize default state values in StateManager
    if (window.TEUI?.StateManager) {
      const defaultValues = {
        'd_22': 'Enter area description',
        'd_23': 'Enter area description',
        'd_24': 'Enter area description', 
        'e_22': '1000.00',
        'g_22': '100.00',
        'e_23': '200.00',
        'g_23': '300.00',
        'e_24': '200.00',
        'g_24': '300.00',
        'd_36': '2.0',  // Stories above grade
        'd_37': '1.0',  // Stories below grade
        'i_36': '6.20'  // Metres above grade
      };
      
      Object.entries(defaultValues).forEach(([fieldId, defaultValue]) => {
        // Only set default if no value exists (won't overwrite user-modified values)
        if (!window.TEUI.StateManager.getValue(fieldId)) {
          window.TEUI.StateManager.setValue(fieldId, defaultValue, "default");
        }
      });
    }
    
    // Initialize event handlers
    if (!window.TEUI.sect03.initialized) {
      initializeEventHandlers();
    }

    // Perform initial calculations after a small delay to ensure full initialization
    setTimeout(() => {
      if (!window.sectionCalculationInProgress) {
        console.log("[S03 INIT] Triggering initial calculations to populate calculated values...");
        performAllCalculations();
      }
    }, 100);
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
    
    // Calculation functions
    calculateAreaTotals: calculateAreaTotals,
    calculateGrossAreaTotals: calculateGrossAreaTotals,
    calculateMezzanineAreaTotals: calculateMezzanineAreaTotals,
    performAllCalculations: performAllCalculations,
    
    // Event handling functions
    handleFieldBlur: handleFieldBlur,
    initializeEventHandlers: initializeEventHandlers,
    
    // Diagnostic functions
    checkS03State: checkS03State,
  };
})();
