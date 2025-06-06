/**
 * 4011-Section02.js
 * Building Occupancy (Section 2) module for OBC Matrix
 *
 * This file contains field definitions, layout templates, and rendering logic
 * specific to the Building Occupancy section for the OBC Matrix application.
 *
 * Based on OBC Matrix Part 3 structure covering rows 10-20 with user inputs in column D.
 */

// Create section-specific namespace for global references
window.TEUI = window.TEUI || {};
window.TEUI.sect02 = window.TEUI.sect02 || {};
window.TEUI.sect02.initialized = false;
window.TEUI.sect02.userInteracted = false;

// Section 2: Building Occupancy Module
window.TEUI.SectionModules.sect02 = (function () {
  //==========================================================================
  // CONSOLIDATED FIELD DEFINITIONS AND LAYOUT
  //==========================================================================

  // Define shared occupancy options (used by all occupancy dropdowns)
  const occupancyOptions = [
    { value: "-", name: "Select Occupancy Classification" },
    { value: "A1", name: "A1-Performing Arts (Viewing and Production)" },
    { value: "A2", name: "A2-Other assembly occupancies" },
    { value: "A3", name: "A3-Arenas" },
    { value: "A4", name: "A4-Open-Air Assemblies" },
    { value: "B1", name: "B1-Detention Occupancies" },
    { value: "B2", name: "B2-Care and Treatment Occupancies" },
    { value: "B3", name: "B3-Care Occupancies" },
    { value: "C", name: "C-Residential" },
    { value: "D", name: "D-Business & Personal Services" },
    { value: "E", name: "E-Mercantile" },
    { value: "F1", name: "F1-High Hazard Industrial" },
    { value: "F2", name: "F2-Medium Hazard Industrial" },
    { value: "F3", name: "F3-Low Hazard Industrial" },
    { value: "G1", name: "G1-High-hazard Agricultural Occupancies" },
    { value: "G2", name: "G2-Agricultural Occupancies not Elsewhere Classified in Group G" },
    { value: "G3", name: "G3-Greenhouse Agricultural Occupancies" },
    { value: "G4", name: "G4-Agricultural Occupancies with no Human Occupants" },
  ];

  // Define rows with integrated field definitions
  const sectionRows = {
    // HEADER ROW
    header: {
      id: "02-HEADER",
      rowId: "02-HEADER",
      label: "Building Occupancy Header",
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

    // Row 10: 3.00 Building Code Version
    10: {
      id: "3.00",
      rowId: "3.00",
      label: "BUILDING CODE VERSION",
      cells: {
        b: { label: "BUILDING CODE VERSION" },
        c: { content: "" },
        d: { content: "O.Reg. 163/24" },
        e: { content: "" },
        f: { content: "" },
        g: { content: "" },
        h: { content: "LAST CODE AMENDMENT" },
        i: { content: "O.Reg. 447/24" },
        j: { content: "" },
        k: { content: "" },
        l: { content: "" },
        m: { content: "" },
        n: { content: "" },
        o: {
          fieldId: "o_10",
          type: "editable",
          value: "enter notes here...",
          section: "buildingOccupancy",
          classes: ["text-left", "no-wrap", "notes-column"],
        },
      },
    },

    // Row 11: 3.01 Project Type (moved from Section 01)
    11: {
      id: "3.01",
      rowId: "3.01",
      label: "PROJECT TYPE",
      cells: {
        b: { label: "PROJECT TYPE" },
        c: { content: "" },
        d: {
          fieldId: "d_11", // User inputs now in column D
          type: "dropdown",
          dropdownId: "dd_d_11",
          value: "-",
          section: "buildingOccupancy",
          colspan: 4, // Span columns D-G for dropdown
          options: [
            { value: "-", name: "Select Project Type" },
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
        i: { content: "[Provide further description below.]" },
        j: { content: "" },
        k: { content: "[A] 1.3.3.2.", classes: ["text-left", "obc-reference"] },
        l: { content: "" },
        m: { content: "" },
        n: { content: "" },
        o: {
          fieldId: "o_11",
          type: "editable",
          value: "enter notes here...",
          section: "buildingOccupancy",
          classes: ["text-left", "no-wrap", "notes-column"],
        },
      },
    },

    // Row 12: Empty row
    12: {
      id: "12-EMPTY",
      rowId: "12-EMPTY",
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
          fieldId: "o_12",
          type: "editable",
          value: "enter notes here...",
          section: "buildingOccupancy",
          classes: ["text-left", "no-wrap", "notes-column"],
        },
      },
    },

    // Row 13: 3.02 Major Occupancy Classification (moved from Section 01)
    13: {
      id: "3.02",
      rowId: "3.02",
      label: "MAJOR OCCUPANCY CLASSIFICATION",
      cells: {
        b: { label: "MAJOR OCCUPANCY CLASSIFICATION" },
        c: { content: "" },
        d: { content: "OCCUPANCY" },
        e: { content: "" },
        f: { content: "" },
        g: { content: "" },
        h: { content: "" },
        i: { content: "USE" },
        j: { content: "" },
        k: { content: "3.1.2.", classes: ["text-left", "obc-reference"] },
        l: { content: "" },
        m: { content: "" },
        n: { content: "" },
        o: {
          fieldId: "o_13",
          type: "editable",
          value: "enter notes here...",
          section: "buildingOccupancy",
          classes: ["text-left", "no-wrap", "notes-column"],
        },
      },
    },

    // Row 14: First occupancy dropdown row
    14: {
      id: "14-OCC1",
      rowId: "14-OCC1",
      label: "",
      cells: {
        b: { content: "" },
        c: { content: "" },
        d: {
          fieldId: "d_14",
          type: "dropdown",
          dropdownId: "dd_d_14",
          value: "-",
          section: "buildingOccupancy",
          options: occupancyOptions,
        },
        e: {
          fieldId: "e_14",
          type: "editable",
          value: "Provide description of use; e.g. \"Restaurant\", \"Medical Office\", \"Retirement Home\", \"Storage Garage\"",
          section: "buildingOccupancy",
          classes: ["text-left", "no-wrap"],
          colspan: 5, // Span columns E-I
        },
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
          fieldId: "o_14",
          type: "editable",
          value: "enter notes here...",
          section: "buildingOccupancy",
          classes: ["text-left", "no-wrap", "notes-column"],
        },
      },
    },

    // Row 15: Second occupancy dropdown row
    15: {
      id: "15-OCC2",
      rowId: "15-OCC2",
      label: "",
      cells: {
        b: { content: "" },
        c: { content: "" },
        d: {
          fieldId: "d_15",
          type: "dropdown",
          dropdownId: "dd_d_15",
          value: "-",
          section: "buildingOccupancy",
          options: occupancyOptions,
        },
        e: {
          fieldId: "e_15",
          type: "editable",
          value: "Provide description of use; e.g. \"Restaurant\", \"Medical Office\", \"Retirement Home\", \"Storage Garage\"",
          section: "buildingOccupancy",
          classes: ["text-left", "no-wrap"],
          colspan: 5, // Span columns E-I
        },
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
          fieldId: "o_15",
          type: "editable",
          value: "enter notes here...",
          section: "buildingOccupancy",
          classes: ["text-left", "no-wrap", "notes-column"],
        },
      },
    },

    // Row 16: Third occupancy dropdown row
    16: {
      id: "16-OCC3",
      rowId: "16-OCC3",
      label: "",
      cells: {
        b: { content: "" },
        c: { content: "" },
        d: {
          fieldId: "d_16",
          type: "dropdown",
          dropdownId: "dd_d_16",
          value: "-",
          section: "buildingOccupancy",
          options: occupancyOptions,
        },
        e: {
          fieldId: "e_16",
          type: "editable",
          value: "Provide description of use; e.g. \"Restaurant\", \"Medical Office\", \"Retirement Home\", \"Storage Garage\"",
          section: "buildingOccupancy",
          classes: ["text-left", "no-wrap"],
          colspan: 5, // Span columns E-I
        },
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
          fieldId: "o_16",
          type: "editable",
          value: "enter notes here...",
          section: "buildingOccupancy",
          classes: ["text-left", "no-wrap", "notes-column"],
        },
      },
    },

    // Row 17: Fourth occupancy dropdown row
    17: {
      id: "17-OCC4",
      rowId: "17-OCC4",
      label: "",
      cells: {
        b: { content: "" },
        c: { content: "" },
        d: {
          fieldId: "d_17",
          type: "dropdown",
          dropdownId: "dd_d_17",
          value: "-",
          section: "buildingOccupancy",
          options: occupancyOptions,
        },
        e: {
          fieldId: "e_17",
          type: "editable",
          value: "Provide description of use; e.g. \"Restaurant\", \"Medical Office\", \"Retirement Home\", \"Storage Garage\"",
          section: "buildingOccupancy",
          classes: ["text-left", "no-wrap"],
          colspan: 5, // Span columns E-I
        },
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
          fieldId: "o_17",
          type: "editable",
          value: "enter notes here...",
          section: "buildingOccupancy",
          classes: ["text-left", "no-wrap", "notes-column"],
        },
      },
    },

    // Row 18: Fifth occupancy dropdown row
    18: {
      id: "18-OCC5",
      rowId: "18-OCC5",
      label: "",
      cells: {
        b: { content: "" },
        c: { content: "" },
        d: {
          fieldId: "d_18",
          type: "dropdown",
          dropdownId: "dd_d_18",
          value: "-",
          section: "buildingOccupancy",
          options: occupancyOptions,
        },
        e: {
          fieldId: "e_18",
          type: "editable",
          value: "Provide description of use; e.g. \"Restaurant\", \"Medical Office\", \"Retirement Home\", \"Storage Garage\"",
          section: "buildingOccupancy",
          classes: ["text-left", "no-wrap"],
          colspan: 5, // Span columns E-I
        },
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
          fieldId: "o_18",
          type: "editable",
          value: "enter notes here...",
          section: "buildingOccupancy",
          classes: ["text-left", "no-wrap", "notes-column"],
        },
      },
    },

    // Row 19: 3.03 Superimposed Major Occupancies
    19: {
      id: "3.03",
      rowId: "3.03",
      label: "SUPERIMPOSED MAJOR OCCUPANCIES",
      cells: {
        b: { label: "SUPERIMPOSED MAJOR OCCUPANCIES" },
        c: { content: "" },
        d: {
          fieldId: "d_19",
          type: "dropdown",
          dropdownId: "dd_d_19",
          value: "-",
          section: "buildingOccupancy",
          options: [
            { value: "-", name: "Select Yes/No" },
            { value: "Yes", name: "Yes" },
            { value: "No", name: "No" },
          ],
        },
        e: {
          fieldId: "e_19",
          type: "editable",
          value: "[If Yes, provide explanation below; add lines as necessary]",
          section: "buildingOccupancy",
          classes: ["text-left", "no-wrap"],
          colspan: 6, // Span columns E-J
        },
        f: { content: "" },
        g: { content: "" },
        h: { content: "" },
        i: { content: "" },
        j: { content: "" },
        k: { content: "3.2.2.7.", classes: ["text-left", "obc-reference"] },
        l: { content: "" },
        m: { content: "" },
        n: { content: "" },
        o: {
          fieldId: "o_19",
          type: "editable",
          value: "enter notes here...",
          section: "buildingOccupancy",
          classes: ["text-left", "no-wrap", "notes-column"],
        },
      },
    },

    // Row 20: Empty row
    20: {
      id: "20-EMPTY",
      rowId: "20-EMPTY",
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
          fieldId: "o_20",
          type: "editable",
          value: "enter notes here...",
          section: "buildingOccupancy",
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
    console.log("Initializing Section 02 event handlers");
    
    window.TEUI.sect02.initialized = true;
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
    console.log("Section 02 rendered - Building Occupancy (OBC Matrix)");
    
    // Initialize any section-specific functionality after rendering
    if (!window.TEUI.sect02.initialized) {
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
