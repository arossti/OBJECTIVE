/**
 * 4011-Section01.js
 * Building Information (Section 1) module for OBC Matrix
 *
 * This file contains field definitions, layout templates, and rendering logic
 * specific to the Building Information section for the OBC Matrix application.
 *
 * Restructured to match the OBC Matrix Part 3 structure with proper Notes fields.
 */

// Create section-specific namespace for global references
window.TEUI = window.TEUI || {};
window.TEUI.sect01 = window.TEUI.sect01 || {};
window.TEUI.sect01.initialized = false;
window.TEUI.sect01.userInteracted = false;

// Section 1: Building Information Module
window.TEUI.SectionModules.sect01 = (function () {
  //==========================================================================
  // CONSOLIDATED FIELD DEFINITIONS AND LAYOUT
  //==========================================================================

  // Define rows with integrated field definitions
  const sectionRows = {
    // HEADER ROW
    header: {
      id: "01-HEADER",
      rowId: "01-HEADER",
      label: "Building Information Header",
      cells: {
        c: {
          content: "BUILDING INFORMATION",
          classes: ["section-header"],
        },
        d: { content: "D", classes: ["section-subheader"] },
        e: { content: "E", classes: ["section-subheader"] },
        f: { content: "F", classes: ["section-subheader"] },
        g: { content: "G", classes: ["section-subheader"] },
        h: { content: "H", classes: ["section-subheader"] },
        i: { content: "I", classes: ["section-subheader"] },
        j: { content: "J", classes: ["section-subheader"] },
        k: { content: "K", classes: ["section-subheader"] },
        l: {
          content: "Notes",
          classes: ["section-subheader", "text-center", "notes-column"],
          colspan: 3,
        },
        m: { content: "M" },
        n: { content: "N" },
      },
    },

    // Row 3: Practice Information
    3: {
      id: "3.00",
      rowId: "3.00",
      label: "Name of Practice",
      cells: {
        c: { label: "Name of Practice" },
        d: {
          fieldId: "c_3", // FileHandler will read from column C
          type: "editable", 
          value: "Enter practice name",
          section: "buildingInfo",
          placeholder: "Enter practice name",
          classes: ["text-left", "no-wrap"],
          colspan: 6, // Span columns D-I
        },
        e: { content: "" },
        f: { content: "" },
        g: { content: "" },
        h: { content: "" },
        i: { content: "" },
        j: { content: "" },
        k: { content: "" },
        l: {
          fieldId: "o_3",
          type: "editable",
          value: "enter notes here...",
          section: "buildingInfo",
          classes: ["text-left", "no-wrap", "notes-column"],
          colspan: 3,
        },
        m: { content: "" },
        n: { content: "" },
      },
    },

    // Row 4: Address 1
    4: {
      id: "3.00",
      rowId: "3.00",
      label: "Address 1",
      cells: {
        c: { label: "Address 1" },
        d: {
          fieldId: "c_4", // FileHandler will read from column C
          type: "editable",
          value: "Enter address line 1",
          section: "buildingInfo",
          placeholder: "Enter address line 1",
          classes: ["text-left", "no-wrap"],
          colspan: 6, // Span columns D-I
        },
        e: { content: "" },
        f: { content: "" },
        g: { content: "" },
        h: { content: "" },
        i: { content: "" },
        j: { content: "" },
        k: { content: "" },
        l: {
          fieldId: "o_4",
          type: "editable",
          value: "enter notes here...",
          section: "buildingInfo",
          classes: ["text-left", "no-wrap", "notes-column"],
          colspan: 3,
        },
        m: { content: "" },
        n: { content: "" },
      },
    },

    // Row 5: Address 2
    5: {
      id: "3.00",
      rowId: "3.00",
      label: "Address 2",
      cells: {
        c: { label: "Address 2" },
        d: {
          fieldId: "d_5",
          type: "editable",
          value: "Enter address line 2",
          section: "buildingInfo",
          placeholder: "Enter address line 2",
          classes: ["text-left", "no-wrap"],
          span: 2,
        },
        e: { content: "" },
        f: { content: "" },
        g: { content: "" },
        h: { content: "" },
        i: { content: "" },
        j: { content: "" },
        k: { content: "" },
        l: {
          fieldId: "o_5",
          type: "editable",
          value: "enter notes here...",
          section: "buildingInfo",
          classes: ["text-left", "no-wrap", "notes-column"],
          colspan: 3,
        },
        m: { content: "" },
        n: { content: "" },
      },
    },

    // Row 6: Contact
    6: {
      id: "3.00",
      rowId: "3.00",
      label: "Contact",
      cells: {
        c: { label: "Contact" },
        d: {
          fieldId: "c_6", // FileHandler will read from column C
          type: "editable",
          value: "Enter contact information",
          section: "buildingInfo",
          placeholder: "Enter contact information",
          classes: ["text-left", "no-wrap"],
          colspan: 6, // Span columns D-I
        },
        e: { content: "" },
        f: { content: "" },
        g: { content: "" },
        h: { content: "" },
        i: { content: "" },
        j: { content: "" },
        k: { content: "" },
        l: {
          fieldId: "o_6",
          type: "editable",
          value: "enter notes here...",
          section: "buildingInfo",
          classes: ["text-left", "no-wrap", "notes-column"],
          colspan: 3,
        },
        m: { content: "" },
        n: { content: "" },
      },
    },

    // Row 7: Name of Project
    7: {
      id: "3.00",
      rowId: "3.00",
      label: "Name of Project",
      cells: {
        c: { label: "Name of Project" },
        d: {
          fieldId: "c_7", // FileHandler will read from column C
          type: "editable",
          value: "Enter project name",
          section: "buildingInfo",
          placeholder: "Enter project name",
          classes: ["text-left", "no-wrap"],
          colspan: 6, // Span columns D-I
        },
        e: { content: "" },
        f: { content: "" },
        g: { content: "" },
        h: { content: "" },
        i: { content: "" },
        j: { content: "" },
        k: { content: "" },
        l: {
          fieldId: "o_7",
          type: "editable",
          value: "enter notes here...",
          section: "buildingInfo",
          classes: ["text-left", "no-wrap", "notes-column"],
          colspan: 3,
        },
        m: { content: "" },
        n: { content: "" },
      },
    },

    // Row 8: Location/Address
    8: {
      id: "3.00",
      rowId: "3.00",
      label: "Location/Address",
      cells: {
        c: { label: "Location/Address" },
        d: {
          fieldId: "c_8", // FileHandler will read from column C
          type: "editable",
          value: "Enter project location",
          section: "buildingInfo",
          placeholder: "Enter project location",
          classes: ["text-left", "no-wrap"],
          colspan: 6, // Span columns D-I
        },
        e: { content: "" },
        f: { content: "" },
        g: { content: "" },
        h: { content: "" },
        i: { content: "" },
        j: { content: "" },
        k: { content: "" },
        l: {
          fieldId: "o_8",
          type: "editable",
          value: "enter notes here...",
          section: "buildingInfo",
          classes: ["text-left", "no-wrap", "notes-column"],
          colspan: 3,
        },
        m: { content: "" },
        n: { content: "" },
      },
    },

    // Row 9: Date with Seal & Signature
    9: {
      id: "3.00",
      rowId: "3.00",
      label: "Date",
      cells: {
        c: { label: "Date" },
        d: {
          fieldId: "c_9", // FileHandler will read from column C
          type: "editable",
          value: "Enter date",
          section: "buildingInfo",
          placeholder: "Enter date",
          classes: ["text-left", "no-wrap"],
          colspan: 3, // Span columns D-F for date field
        },
        e: { content: "" },
        f: { content: "" },
        g: { content: "" },
        h: { content: "Seal & Signature", classes: ["text-left"] },
        i: {
          fieldId: "i_9",
          type: "stamp_upload",
          value: "",
          section: "buildingInfo",
          classes: ["stamp-upload-area"],
          colspan: 2, // Span columns I-J for stamp upload
        },
        j: { content: "" },
        k: { content: "" },
        l: {
          fieldId: "o_9",
          type: "editable",
          value: "enter notes here...",
          section: "buildingInfo",
          classes: ["text-left", "no-wrap", "notes-column"],
          colspan: 3,
        },
        m: { content: "" },
        n: { content: "" },
      },
    },

    // Row 10: 3.01 Project Type
    10: {
      id: "3.01",
      rowId: "3.01",
      label: "Project Type",
      cells: {
        c: { label: "3.01 PROJECT TYPE" },
        d: {
          fieldId: "c_10", // FileHandler will read from column C
          type: "dropdown",
          dropdownId: "dd_c_10",
          value: "-",
          section: "buildingInfo",
          colspan: 4, // Span columns D-G for dropdown
          options: [
            { value: "-", name: "-" },
            { value: "New Construction", name: "New Construction" },
            { value: "Addition", name: "Addition" },
            { value: "Alteration", name: "Alteration" },
            { value: "Change of Use", name: "Change of Use" },
            { value: "Repair", name: "Repair" },
          ],
        },
        e: { content: "" },
        f: { content: "" },
        g: { content: "" },
        h: { content: "" },
        i: { content: "[A] 1.3.3.2.", classes: ["text-left", "obc-reference"] },
        j: { content: "" },
        k: { content: "" },
        l: {
          fieldId: "o_10",
          type: "editable",
          value: "enter notes here...",
          section: "buildingInfo",
          classes: ["text-left", "no-wrap", "notes-column"],
          colspan: 3,
        },
        m: { content: "" },
        n: { content: "" },
      },
    },

    // Row 12: 3.02 Major Occupancy Classification
    12: {
      id: "3.02",
      rowId: "3.02",
      label: "Major Occupancy Classification",
      cells: {
        c: { label: "3.02 MAJOR OCCUPANCY CLASSIFICATION" },
        d: {
          fieldId: "c_12", // FileHandler will read from column C
          type: "dropdown",
          dropdownId: "dd_c_12",
          value: "-",
          section: "buildingInfo",
          colspan: 4, // Span columns D-G for dropdown
          options: [
            { value: "-", name: "-" },
            { value: "A-Assembly", name: "A-Assembly" },
            { value: "B1-Detention", name: "B1-Detention" },
            { value: "B2-Care and Treatment", name: "B2-Care and Treatment" },
            {
              value: "B3-Detention Care & Treatment",
              name: "B3-Detention Care & Treatment",
            },
            { value: "C-Residential", name: "C-Residential" },
            {
              value: "D-Business & Personal Services",
              name: "D-Business & Personal Services",
            },
            { value: "E-Mercantile", name: "E-Mercantile" },
            { value: "F-Industrial", name: "F-Industrial" },
          ],
        },
        e: { content: "" },
        f: { content: "" },
        g: { content: "" },
        h: { content: "" },
        i: { content: "3.1.2.", classes: ["text-left", "obc-reference"] },
        j: { content: "" },
        k: { content: "" },
        l: {
          fieldId: "o_12",
          type: "editable",
          value: "enter notes here...",
          section: "buildingInfo",
          classes: ["text-left", "no-wrap", "notes-column"],
          colspan: 3,
        },
        m: { content: "" },
        n: { content: "" },
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

    // Add cells C through N based on the row definition
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
  // STAMP UPLOAD FUNCTIONALITY
  //==========================================================================

  function initializeStampUpload() {
    const stampArea = document.querySelector('[data-field-id="i_9"]');
    if (!stampArea) return;

    // Create the stamp upload HTML
    stampArea.innerHTML = `
      <div class="stamp-upload-container">
        <div class="stamp-placeholder" id="stamp-placeholder">
          <div class="stamp-instructions">Upload seal image here</div>
          <div class="stamp-hint">200x200px recommended</div>
        </div>
        <input type="file" id="stamp-upload-input" accept="image/*" style="display: none;">
        <img id="stamp-preview" class="stamp-preview" style="display: none;">
      </div>
    `;

    // Add event listeners
    const placeholder = stampArea.querySelector('#stamp-placeholder');
    const fileInput = stampArea.querySelector('#stamp-upload-input');
    const preview = stampArea.querySelector('#stamp-preview');

    placeholder.addEventListener('click', () => {
      fileInput.click();
    });

    fileInput.addEventListener('change', (e) => {
      const file = e.target.files[0];
      if (file) {
        const reader = new FileReader();
        reader.onload = (e) => {
          preview.src = e.target.result;
          preview.style.display = 'block';
          placeholder.style.display = 'none';
        };
        reader.readAsDataURL(file);
      }
    });

    // Allow reset by clicking on the preview
    preview.addEventListener('click', () => {
      preview.style.display = 'none';
      placeholder.style.display = 'flex';
      fileInput.value = '';
    });
  }

  //==========================================================================
  // EVENT HANDLERS
  //==========================================================================

  function initializeEventHandlers() {
    console.log("Initializing Section 01 event handlers");
    
    // Initialize stamp upload functionality
    setTimeout(() => {
      initializeStampUpload();
    }, 100);
    
    window.TEUI.sect01.initialized = true;
  }

  function onSectionRendered() {
    console.log("Section 01 rendered - Building Information (OBC Matrix)");
    
    // Initialize any section-specific functionality after rendering
    if (!window.TEUI.sect01.initialized) {
      initializeEventHandlers();
    }

    // Add custom CSS for stamp upload
    if (!document.getElementById('stamp-upload-styles')) {
      const style = document.createElement('style');
      style.id = 'stamp-upload-styles';
      style.textContent = `
        .stamp-upload-container {
          width: 200px;
          height: 200px;
          position: relative;
          margin: 0 auto;
        }

        .stamp-placeholder {
          width: 200px;
          height: 200px;
          border: 2px dashed #ccc;
          border-radius: 8px;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          transition: border-color 0.3s ease;
          background-color: #fafafa;
        }

        .stamp-placeholder:hover {
          border-color: #007bff;
          background-color: #f0f8ff;
        }

        .stamp-instructions {
          font-size: 12px;
          color: #666;
          text-align: center;
          margin-bottom: 4px;
          font-weight: 500;
        }

        .stamp-hint {
          font-size: 10px;
          color: #999;
          text-align: center;
        }

        .stamp-preview {
          width: 200px;
          height: 200px;
          object-fit: contain;
          border-radius: 8px;
          cursor: pointer;
          border: 2px solid #ddd;
        }

        .stamp-upload-area {
          padding: 0 !important;
          vertical-align: middle;
        }
      `;
      document.head.appendChild(style);
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
