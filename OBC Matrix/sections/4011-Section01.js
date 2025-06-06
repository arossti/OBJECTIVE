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
        b: { content: "B", classes: ["section-subheader"] },
        c: { content: "C", classes: ["section-subheader"] },
        d: { content: "D", classes: ["section-subheader"] },
        e: { content: "E", classes: ["section-subheader"] },
        f: { content: "F", classes: ["section-subheader"] },
        g: { content: "G", classes: ["section-subheader"] },
        h: { content: "H", classes: ["section-subheader"] },
        i: { content: "I", classes: ["section-subheader"] },
        j: { content: "J", classes: ["section-subheader"] },
        k: { content: "K", classes: ["section-subheader"] },
        l: { content: "L", classes: ["section-subheader"] },
        m: { content: "M", classes: ["section-subheader"] },
        n: { content: "N", classes: ["section-subheader"] },
        o: {
          content: "Notes",
          classes: ["section-subheader", "text-center", "notes-column"],
        },
      },
    },

    // Row 3: Practice Information
    3: {
      id: "1.01",
      rowId: "1.01",
      label: "Name of Practice",
      cells: {
        b: { label: "Name of Practice" },
        c: {
          fieldId: "c_3", // FileHandler will read from column C
          type: "editable", 
          value: "Enter practice name",
          section: "buildingInfo",
          placeholder: "Enter practice name",
          classes: ["text-left", "no-wrap"],
          colspan: 6, // Span columns C-H
        },
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
          fieldId: "o_3",
          type: "editable",
          value: "enter notes here...",
          section: "buildingInfo",
          classes: ["text-left", "no-wrap", "notes-column"],
        },
      },
    },

    // Row 4: Address 1
    4: {
      id: "1.02",
      rowId: "1.02",
      label: "Address 1",
      cells: {
        b: { label: "Address 1" },
        c: {
          fieldId: "c_4", // FileHandler will read from column C
          type: "editable",
          value: "Enter address line 1",
          section: "buildingInfo",
          placeholder: "Enter address line 1",
          classes: ["text-left", "no-wrap"],
          colspan: 6, // Span columns C-H
        },
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
          fieldId: "o_4",
          type: "editable",
          value: "enter notes here...",
          section: "buildingInfo",
          classes: ["text-left", "no-wrap", "notes-column"],
        },
      },
    },

    // Row 5: Address 2
    5: {
      id: "1.03",
      rowId: "1.03",
      label: "Address 2",
      cells: {
        b: { label: "Address 2" },
        c: {
          fieldId: "c_5", // Fixed: should be c_5 not d_5
          type: "editable",
          value: "Enter address line 2",
          section: "buildingInfo",
          placeholder: "Enter address line 2",
          classes: ["text-left", "no-wrap"],
          colspan: 6, // Changed to colspan to match other rows
        },
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
          fieldId: "o_5",
          type: "editable",
          value: "enter notes here...",
          section: "buildingInfo",
          classes: ["text-left", "no-wrap", "notes-column"],
        },
      },
    },

    // Row 6: Contact
    6: {
      id: "1.04",
      rowId: "1.04",
      label: "Contact",
      cells: {
        b: { label: "Contact" },
        c: {
          fieldId: "c_6", // FileHandler will read from column C
          type: "editable",
          value: "Enter contact information",
          section: "buildingInfo",
          placeholder: "Enter contact information",
          classes: ["text-left", "no-wrap"],
          colspan: 6, // Span columns C-H
        },
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
          fieldId: "o_6",
          type: "editable",
          value: "enter notes here...",
          section: "buildingInfo",
          classes: ["text-left", "no-wrap", "notes-column"],
        },
      },
    },

    // Row 7: Name of Project
    7: {
      id: "1.05",
      rowId: "1.05",
      label: "Name of Project",
      cells: {
        b: { label: "Name of Project" },
        c: {
          fieldId: "c_7", // FileHandler will read from column C
          type: "editable",
          value: "Enter project name",
          section: "buildingInfo",
          placeholder: "Enter project name",
          classes: ["text-left", "no-wrap"],
          colspan: 6, // Span columns C-H
        },
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
          fieldId: "o_7",
          type: "editable",
          value: "enter notes here...",
          section: "buildingInfo",
          classes: ["text-left", "no-wrap", "notes-column"],
        },
      },
    },

    // Row 8: Location/Address
    8: {
      id: "1.06",
      rowId: "1.06",
      label: "Location/Address",
      cells: {
        b: { label: "Location/Address" },
        c: {
          fieldId: "c_8", // FileHandler will read from column C
          type: "editable",
          value: "Enter project location",
          section: "buildingInfo",
          placeholder: "Enter project location",
          classes: ["text-left", "no-wrap"],
          colspan: 6, // Span columns C-H
        },
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
          fieldId: "o_8",
          type: "editable",
          value: "enter notes here...",
          section: "buildingInfo",
          classes: ["text-left", "no-wrap", "notes-column"],
        },
      },
    },

    // Row 9: Date with Seal & Signature
    9: {
      id: "1.07",
      rowId: "1.07",
      label: "Date",
      cells: {
        b: { label: "Date" },
        c: {
          fieldId: "c_9", // FileHandler will read from column C
          type: "editable",
          value: "Enter date",
          section: "buildingInfo",
          placeholder: "Enter date",
          classes: ["text-left", "no-wrap"],
          colspan: 3, // Span columns C-E for date field
        },
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
          fieldId: "o_9",
          type: "editable",
          value: "enter notes here...",
          section: "buildingInfo",
          classes: ["text-left", "no-wrap", "notes-column"],
        },
      },
    },

    // Row 10: 3.01 Project Type
    10: {
      id: "3.01",
      rowId: "3.01",
      label: "Project Type",
      cells: {
        b: { label: "PROJECT TYPE" },
        c: {
          fieldId: "c_10", // FileHandler will read from column C
          type: "dropdown",
          dropdownId: "dd_c_10",
          value: "-",
          section: "buildingInfo",
          colspan: 4, // Span columns C-F for dropdown
          options: [
            { value: "-", name: "Select Project Type" },
            { value: "New Construction", name: "New Construction" },
            { value: "Addition", name: "Addition" },
            { value: "Alteration", name: "Alteration" },
            { value: "Change of Use", name: "Change of Use" },
            { value: "Repair", name: "Repair" },
          ],
        },
        d: { content: "" },
        e: { content: "" },
        f: { content: "" },
        g: { content: "" },
        h: { content: "[A] 1.3.3.2.", classes: ["text-left", "obc-reference"] },
        i: { content: "" },
        j: { content: "" },
        k: { content: "" },
        l: { content: "" },
        m: { content: "" },
        n: { content: "" },
        o: {
          fieldId: "o_10",
          type: "editable",
          value: "enter notes here...",
          section: "buildingInfo",
          classes: ["text-left", "no-wrap", "notes-column"],
        },
      },
    },

    // Row 12: 3.02 Major Occupancy Classification
    12: {
      id: "3.02",
      rowId: "3.02",
      label: "Major Occupancy Classification",
      cells: {
        b: { label: "MAJOR OCCUPANCY CLASSIFICATION" },
        c: {
          fieldId: "c_12", // FileHandler will read from column C
          type: "dropdown",
          dropdownId: "dd_c_12",
          value: "-",
          section: "buildingInfo",
          colspan: 4, // Span columns C-F for dropdown
          options: [
            { value: "-", name: "Select Occupancy Classification" },
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
        d: { content: "" },
        e: { content: "" },
        f: { content: "" },
        g: { content: "" },
        h: { content: "3.1.2.", classes: ["text-left", "obc-reference"] },
        i: { content: "" },
        j: { content: "" },
        k: { content: "" },
        l: { content: "" },
        m: { content: "" },
        n: { content: "" },
        o: {
          fieldId: "o_12",
          type: "editable",
          value: "enter notes here...",
          section: "buildingInfo",
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
  // FLOATING STAMP UPLOAD FUNCTIONALITY  
  //==========================================================================

  //==========================================================================
  // EVENT HANDLERS
  //==========================================================================

  function initializeEventHandlers() {
    console.log("Initializing Section 01 event handlers");
    
    window.TEUI.sect01.initialized = true;
  }

  function addFloatingStampUpload() {
    const sectionContent = document.querySelector('[data-render-section="buildingInfo"]');
    if (!sectionContent || document.getElementById('floating-stamp-upload')) return;

    // Create floating stamp upload container
    const stampContainer = document.createElement('div');
    stampContainer.id = 'floating-stamp-upload';
    stampContainer.innerHTML = `
      <div class="stamp-upload-label">Seal & Signature</div>
      <div class="stamp-upload-container">
        <div class="stamp-placeholder" id="floating-stamp-placeholder">
          <div class="stamp-instructions">Upload seal image here</div>
          <div class="stamp-hint">200x200px recommended</div>
        </div>
        <input type="file" id="floating-stamp-upload-input" accept="image/*" style="display: none;">
        <img id="floating-stamp-preview" class="stamp-preview" style="display: none;">
      </div>
    `;

    // Add CSS for floating positioning  
    stampContainer.style.cssText = `
      position: absolute;
      top: 20px;
      right: 20px;
      z-index: 10;
      background: white;
      border: 1px solid #dee2e6;
      border-radius: 8px;
      padding: 15px;
      box-shadow: 0 2px 4px rgba(0,0,0,0.1);
      width: 220px;
    `;

    // Position relative to section
    sectionContent.style.position = 'relative';
    sectionContent.appendChild(stampContainer);

    // Initialize stamp upload functionality on the floating element
    initializeFloatingStampUpload();
  }

  function initializeFloatingStampUpload() {
    const placeholder = document.getElementById('floating-stamp-placeholder');
    const fileInput = document.getElementById('floating-stamp-upload-input');
    const preview = document.getElementById('floating-stamp-preview');

    if (!placeholder || !fileInput || !preview) return;

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

  function onSectionRendered() {
    console.log("Section 01 rendered - Building Information (OBC Matrix)");
    
    // Initialize any section-specific functionality after rendering
    if (!window.TEUI.sect01.initialized) {
      initializeEventHandlers();
    }

    // Add floating stamp upload after section renders
    setTimeout(() => {
      addFloatingStampUpload();
    }, 100);

    // Add custom CSS for stamp upload
    if (!document.getElementById('stamp-upload-styles')) {
      const style = document.createElement('style');
      style.id = 'stamp-upload-styles';
      style.textContent = `
        .stamp-upload-container {
          width: 180px;
          height: 180px;
          position: relative;
          margin: 0 auto;
        }

        .stamp-placeholder {
          width: 180px;
          height: 180px;
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
          width: 180px;
          height: 180px;
          object-fit: contain;
          border-radius: 8px;
          cursor: pointer;
          border: 2px solid #ddd;
        }

        .stamp-upload-label {
          font-size: 14px;
          font-weight: 600;
          color: #333;
          margin-bottom: 8px;
          text-align: center;
        }

        #floating-stamp-upload {
          transition: opacity 0.3s ease;
        }

        body.notes-hidden #floating-stamp-upload {
          /* Keep stamp visible when notes are hidden */
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
