/**
 * 4011-Section15.js
 * TEUI Summary (Section 15) module for TEUI Calculator 4.011
 *
 * This file contains field definitions, layout templates, and rendering logic
 * specific to the TEUI Summary section.
 *
 * Follows the consolidated declarative approach where field definitions
 * are integrated directly into the layout structure.
 */

// Ensure namespace exists
window.TEUI = window.TEUI || {};
window.TEUI.SectionModules = window.TEUI.SectionModules || {};

// Section 15: TEUI Summary Module
window.TEUI.SectionModules.sect15 = (function () {
  //==========================================================================
  // HELPER FUNCTIONS
  //==========================================================================

  /**
   * Safely parses a numeric value from StateManager or DOM, handling potential strings with commas.
   * Uses the global parseNumeric if available, otherwise provides a fallback.
   * @param {string} fieldId - The ID of the field to retrieve the value for.
   * @returns {number} The parsed numeric value, or 0 if parsing fails.
   */
  function getNumericValue(fieldId) {
    if (typeof window.TEUI?.parseNumeric === "function") {
      return (
        window.TEUI.parseNumeric(window.TEUI.StateManager?.getValue(fieldId)) ||
        0
      );
    } else {
      // Fallback parsing logic
      const value = window.TEUI.StateManager?.getValue(fieldId);
      if (value === null || value === undefined) return 0;
      if (typeof value === "number") return value;
      if (typeof value === "string") {
        // Remove $, commas, % and handle potential empty strings or non-numeric values
        const cleanedValue = value.replace(/[$,%]/g, "").trim();
        if (cleanedValue === "") return 0;
        const parsed = parseFloat(cleanedValue);
        return isNaN(parsed) ? 0 : parsed;
      }
      return 0;
    }
  }

  /**
   * Formats a number according to the project's display rules (2 decimal places, commas).
   * Handles specific formats like percentages and currency.
   * @param {number} value - The number to format.
   * @param {string} [format='number'] - The type of format ('number', 'currency', 'percent').
   * @returns {string} The formatted number as a string.
   */
  function formatNumber(value, format = "number") {
    if (value === null || value === undefined || isNaN(value)) {
      return format === "currency"
        ? "$0.00"
        : format === "percent"
          ? "0%"
          : "0.00";
    }

    const num = Number(value);

    if (format === "currency") {
      return (
        "$" +
        num.toLocaleString("en-US", {
          minimumFractionDigits: 2,
          maximumFractionDigits: 2,
        })
      );
    } else if (format === "percent") {
      // Assuming the input value is the raw decimal (e.g., 0.59 for 59%)
      return (num * 100).toFixed(0) + "%";
    } else if (format === "btu") {
      return num.toLocaleString("en-US", { maximumFractionDigits: 0 });
    } else if (format === "tons") {
      return num.toLocaleString("en-US", {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2,
      });
    } else if (format === "integer") {
      return num.toLocaleString("en-US", { maximumFractionDigits: 0 });
    } else {
      // Default number format (e.g., kWh, kWh/m2, W/m2)
      return num.toLocaleString("en-US", {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2,
      });
    }
  }

  /**
   * Sets a calculated value in the StateManager and updates the corresponding DOM element.
   * @param {string} fieldId - The ID of the field to update.
   * @param {number} rawValue - The raw calculated numeric value.
   * @param {string} [format='number'] - The format type for display.
   */
  function setCalculatedValue(fieldId, rawValue, format = "number") {
    const formattedValue = formatNumber(rawValue, format);

    // 🔧 REFERENCE MODE FIX: Check if we're in Reference mode and store values appropriately
    if (window.TEUI?.ReferenceToggle?.isReferenceMode?.()) {
      // During Reference mode, store with ref_ prefix to prevent contamination
      const refFieldId = `ref_${fieldId}`;
      window.TEUI.StateManager?.setValue(
        refFieldId,
        rawValue.toString(),
        "calculated",
      );
      
      // Don't update DOM during Reference mode to prevent visual contamination
      console.log(
        `🔧 S15: Reference mode - storing ${refFieldId} = ${rawValue} (no DOM update)`,
      );
    } else {
      // Normal Target mode: store in application state and update DOM
      window.TEUI.StateManager?.setValue(
        fieldId,
        rawValue.toString(),
        "calculated",
      );
      
      // Update DOM with formatted value
      const element = document.querySelector(`[data-field-id="${fieldId}"]`);
      if (element) {
        element.textContent = formattedValue;
        // Add/remove classes based on value if needed (e.g., for negatives)
        element.classList.toggle("negative-value", rawValue < 0);
      }
    }
  }

  //==========================================================================
  // CONSOLIDATED FIELD DEFINITIONS AND LAYOUT
  //==========================================================================

  // Define rows with integrated field definitions
  const sectionRows = {
    // SECTION HEADER
    header: {
      id: "15-ID",
      rowId: "15-ID",
      label: "TEUI Summary Units",
      cells: {
        c: {
          content: "SECTION 15. TEUI Targeted",
          classes: ["section-header"],
        },
        d: { content: "Column D", classes: ["section-subheader"] },
        e: { content: "Column E", classes: ["section-subheader"] },
        f: { content: "Column F", classes: ["section-subheader"] },
        g: { content: "Column G", classes: ["section-subheader"] },
        h: { content: "Column H", classes: ["section-subheader"] },
        i: { content: "Column I", classes: ["section-subheader"] },
        j: { content: "Column J", classes: ["section-subheader"] },
        k: { content: "Column K", classes: ["section-subheader"] },
        l: { content: "Column L", classes: ["section-subheader"] },
        m: { content: "Column M", classes: ["section-subheader"] },
        n: { content: "Column N", classes: ["section-subheader"] },
      },
    },

    // Row 135: T.6.0 TEU Targeted Electricity / T.6.1 TEUI
    135: {
      id: "T.6.0",
      rowId: "T.6.0",
      label: "TEU Targeted Electricity",
      cells: {
        c: { label: "TEU Targeted Electricity" },
        d: {
          fieldId: "d_135",
          type: "calculated",
          value: "0.00", // Default to 0.00, will be calculated
          classes: ["calculated-value"],
          section: "teuiSummary",
        },
        e: { content: "ekWh/yr" },
        f: {
          content: "T.6.1",
          classes: ["label-prefix", "text-right", "no-wrap"],
        },
        g: { content: "TEUI", classes: ["label-main", "text-left", "no-wrap"] },
        h: {
          fieldId: "h_135",
          type: "calculated",
          value: "0.00", // Default to 0.00
          classes: ["calculated-value"],
          section: "teuiSummary",
        },
        i: { content: "kWh/m²/yr" },
        j: {
          content: "Excludes ekWh of any Gas or Oil loads",
          classes: ["note-text"],
        },
        k: { content: "" },
        l: { content: "" },
        m: { content: "" },
        n: { content: "" },
      },
    },

    // Row 136: T.6.2 TEU Targeted Electricity if HP/Gas/Oil Bldg. / T.6.3 TEUI
    136: {
      id: "T.6.2",
      rowId: "T.6.2",
      label: "TEU Targeted Electricity if HP/Gas/Oil Bldg.",
      cells: {
        c: { label: "TEU Targeted Electricity if HP/Gas/Oil Bldg." },
        d: {
          fieldId: "d_136",
          type: "calculated",
          value: "0.00", // Default to 0.00
          classes: ["calculated-value"],
          section: "teuiSummary",
        },
        e: { content: "kWh/yr" },
        f: {
          content: "T.6.3",
          classes: ["label-prefix", "text-right", "no-wrap"],
        },
        g: { content: "TEUI", classes: ["label-main", "text-left", "no-wrap"] },
        h: {
          fieldId: "h_136",
          type: "calculated",
          value: "0.00", // Default to 0.00
          classes: ["calculated-value"],
          section: "teuiSummary",
        },
        i: { content: "kWh/m²/yr" },
        j: {
          content: "Excl. ekWh of fossil eqpt/Applies COP for HP",
          classes: ["note-text"],
        }, //Excludes ekWh of any Gas loads, and Applies COP for HP Equipment
        k: { content: "" },
        l: { content: "" },
        m: { content: "" },
        n: { content: "" },
      },
    },

    // Row 137: T.6.4 Peak Heating Load (Enclosure Only) / T.6.4 TEUI-imp
    137: {
      id: "T.6.4",
      rowId: "T.6.4",
      label: "Peak Heating Load (Enclosure Only)",
      cells: {
        c: { label: "Peak Heating Load (Enclosure Only)" },
        d: {
          fieldId: "d_137",
          type: "calculated",
          value: "0.00", // Default to 0.00
          classes: ["calculated-value"],
          section: "teuiSummary",
        },
        e: { content: "kW" },
        f: {
          content: "T.6.4",
          classes: ["label-prefix", "text-right", "no-wrap"],
        },
        g: {
          content: "TEUI-imp",
          classes: ["label-main", "text-left", "no-wrap"],
        },
        h: { content: "" }, // Removed fieldId, no calculation for h_137
        i: { content: "" },
        j: { content: "" },
        k: { content: "" },
        l: {
          fieldId: "l_137",
          type: "calculated",
          value: "0", // Default to 0
          classes: ["calculated-value"],
          section: "teuiSummary",
        },
        m: { content: "BTU/hr" },
        n: { content: "" },
      },
    },

    // Row 138: T.6.5 Peak Cooling Load (Enclosure Only) / T.6.6 Peak Cooling Imp
    138: {
      id: "T.6.5",
      rowId: "T.6.5",
      label: "Peak Cooling Load (Enclosure Only)",
      cells: {
        c: { label: "Peak Cooling Load (Enclosure Only)" },
        d: {
          fieldId: "d_138",
          type: "calculated",
          value: "0.00", // Default to 0.00
          classes: ["calculated-value"],
          section: "teuiSummary",
        },
        e: { content: "kW" },
        f: {
          content: "T.6.6",
          classes: ["label-prefix", "text-right", "no-wrap"],
        },
        g: {
          content: "Peak Cooling Imp",
          classes: ["label-main", "text-left", "no-wrap"],
        },
        h: {
          fieldId: "h_138",
          type: "calculated",
          value: "0.00", // Default to 0.00
          classes: ["calculated-value"],
          section: "teuiSummary",
        },
        i: { content: "Tons-Cooling" },
        j: { content: "" },
        k: { content: "" },
        l: {
          fieldId: "l_138",
          type: "calculated",
          value: "0", // Default to 0
          classes: ["calculated-value"],
          section: "teuiSummary",
        },
        m: { content: "BTU/hr" },
        n: { content: "" },
      },
    },

    // Row 139: T.6.7 Peak Cooling Load (Enclosure + Gains) / T.6.9 Peak Cooling Imp
    139: {
      id: "T.6.7",
      rowId: "T.6.7",
      label: "Peak Cooling Load (Enclosure + Gains)",
      cells: {
        c: { label: "Peak Cooling Load (Enclosure + Gains)" },
        d: {
          fieldId: "d_139",
          type: "calculated",
          value: "0.00", // Default to 0.00
          classes: ["calculated-value"],
          section: "teuiSummary",
        },
        e: { content: "kW" },
        f: {
          content: "T.6.9",
          classes: ["label-prefix", "text-right", "no-wrap"],
        }, // Note: CSV says T.6.7, but UI label suggests T.6.9? Assuming T.6.9 for field h_139
        g: {
          content: "Peak Cooling Imp",
          classes: ["label-main", "text-left", "no-wrap"],
        },
        h: {
          fieldId: "h_139",
          type: "calculated",
          value: "0.00", // Default to 0.00
          classes: ["calculated-value"],
          section: "teuiSummary",
        },
        i: { content: "Tons-Cooling" },
        j: { content: "" },
        k: { content: "" },
        l: {
          fieldId: "l_139",
          type: "calculated",
          value: "0", // Default to 0
          classes: ["calculated-value"],
          section: "teuiSummary",
        },
        m: { content: "BTU/hr" },
        n: { content: "" },
      },
    },

    // Row 140: T.6.8 Max. Heating Load Intensity / T.6.8 Heat Load Imp
    140: {
      id: "T.6.8",
      rowId: "T.6.8",
      label: "Max. Heating Load Intensity",
      cells: {
        c: { label: "Max. Heating Load Intensity" },
        d: {
          fieldId: "d_140",
          type: "calculated",
          value: "0.00", // Default to 0.00
          classes: ["calculated-value"],
          section: "teuiSummary",
        },
        e: { content: "W/m²" },
        f: {
          content: "T.6.8",
          classes: ["label-prefix", "text-right", "no-wrap"],
        },
        g: {
          content: "Heat Load Imp",
          classes: ["label-main", "text-left", "no-wrap"],
        },
        h: {
          fieldId: "h_140",
          type: "calculated",
          value: "0.00", // Default to 0.00 - Max Cool Intsty in W/m² (Enclosure Only)
          classes: ["calculated-value"],
          section: "teuiSummary",
        },
        i: { content: "" }, // Unit removed as it's W/m2
        j: { content: "T.6.6 Mx. Cool Intsty in W/m² (Enclosure Only)" },
        k: { content: "" },
        l: { content: "" }, // l_140 removed, no formula in CSV
        m: { content: "" },
        n: { content: "" },
      },
    },

    // Row 141: T.7.1 Annual Cost of Electricity
    141: {
      id: "T.7.1",
      rowId: "T.7.1",
      label: "Annual Cost of Electricity",
      cells: {
        c: { label: "Annual Cost of Electricity" },
        d: {
          fieldId: "d_141",
          type: "calculated",
          value: "$0.00", // Default to $0.00
          classes: ["calculated-value"],
          section: "teuiSummary",
        },
        e: { content: "" },
        f: {
          content: "T.7.2",
          classes: ["label-prefix", "text-right", "no-wrap"],
        },
        g: {
          content: "pre and",
          classes: ["label-main", "text-left", "no-wrap"],
        },
        h: {
          fieldId: "h_141",
          type: "calculated",
          value: "$0.00", // Default to $0.00
          classes: ["calculated-value"],
          section: "teuiSummary",
        },
        i: { content: "post heat pump" },
        j: { content: "T.7.3" },
        k: { content: "∑ Other Energy" },
        l: {
          fieldId: "l_141",
          type: "calculated",
          value: "$0.00", // Default to $0.00
          classes: ["calculated-value"],
          section: "teuiSummary",
        },
        m: { content: "" },
        n: { content: "" },
      },
    },

    // Row 142: T.7.4 Cost Premium of HP Equipment
    142: {
      id: "T.7.4",
      rowId: "T.7.4",
      label: "Cost Premium of HP Equipment",
      cells: {
        c: { label: "Cost Premium of HP Equipment" },
        d: {
          // This seems like an input, not calculated. Assuming it's an editable field for now.
          fieldId: "d_142",
          type: "editable",
          value: "30000.00", // Default value from CSV example
          classes: ["user-input"], // Assuming user input style
          section: "teuiSummary",
        },
        e: { content: "" },
        f: {
          content: "T.7.5",
          classes: ["label-prefix", "text-right", "no-wrap"],
        },
        g: { content: "ROI", classes: ["label-main", "text-left", "no-wrap"] },
        h: {
          fieldId: "h_142",
          type: "calculated",
          value: "0.00", // Default to 0.00
          classes: ["calculated-value"],
          section: "teuiSummary",
        },
        i: { content: "Years to Amortize" },
        j: { content: "" },
        k: { content: "" },
        l: { content: "" },
        m: { content: "" },
        n: { content: "" },
      },
    },

    // Row 143: T.3.1 TEUI Reference / T.3.2 Targeted TEUI / T.3.3 Actual
    143: {
      id: "T.3.1",
      rowId: "T.3.1",
      label: "TEUI Reference (Performance Gap)",
      cells: {
        c: { label: "TEUI Reference (Performance Gap)" },
        d: {
          fieldId: "d_143",
          type: "calculated",
          value: "0.00", // Default to 0.00
          classes: ["reference-value"], // Keep reference style
          section: "teuiSummary",
        },
        e: { content: "Reference" },
        f: {
          content: "T.3.2",
          classes: ["label-prefix", "text-right", "no-wrap"],
        },
        g: {
          content: "Targeted TEUI",
          classes: ["label-main", "text-left", "no-wrap"],
        },
        h: {
          fieldId: "h_143",
          type: "calculated",
          value: "0.00", // Default to 0.00
          classes: ["calculated-value"],
          section: "teuiSummary",
        },
        i: { content: "Target (Design)" },
        j: { content: "T.3.3" },
        k: { content: "Actual" },
        l: {
          fieldId: "l_143",
          type: "calculated",
          value: "0.00", // Default to 0.00
          classes: ["calculated-value"],
          section: "teuiSummary",
        },
        m: { content: "Actual (Utility Bills)" },
        n: { content: "" },
      },
    },

    // Row 144: T.8.1 TEUI Energy Reduction from Reference / T.8.2 Target % of Utility
    144: {
      id: "T.8.1",
      rowId: "T.8.1",
      label: "TEUI Energy Reduction from Reference",
      cells: {
        c: { label: "TEUI Energy Reduction from Reference" },
        d: {
          fieldId: "d_144",
          type: "calculated",
          value: "0%", // Default to 0%
          classes: ["calculated-value"],
          section: "teuiSummary",
        },
        e: { content: "" },
        f: {
          content: "T.8.2",
          classes: ["label-prefix", "text-right", "no-wrap"],
        },
        g: {
          content: "Target % of Utility Data",
          classes: ["label-main", "text-left", "no-wrap"],
        },
        h: {
          fieldId: "h_144",
          type: "calculated",
          value: "0%", // Default to 0%
          classes: ["calculated-value"],
          section: "teuiSummary",
        },
        i: { content: "of Utility Data" },
        j: { content: "T.8.3" },
        k: { content: "Actual" },
        l: {
          fieldId: "l_144",
          type: "calculated",
          value: "0%", // Default to 0%
          classes: ["calculated-value"],
          section: "teuiSummary",
        },
        m: { content: "of Targeted Design" },
        n: { content: "" },
      },
    },

    // Row 145: T.9.1 GHGe Reduction from Reference
    145: {
      id: "T.9.1",
      rowId: "T.9.1",
      label: "GHGe Reduction from Reference",
      cells: {
        c: { label: "GHGe Reduction from Reference" },
        d: {
          fieldId: "d_145",
          type: "calculated",
          value: "0%", // Default to 0%
          classes: ["calculated-value"],
          section: "teuiSummary",
        },
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
      },
    },
  };

  //==========================================================================
  // ACCESSOR METHODS TO EXTRACT FIELDS AND LAYOUT
  //==========================================================================

  /**
   * Extract field definitions from the integrated layout
   * This method is required for compatibility with the FieldManager
   */
  function getFields() {
    const fields = {};

    // Extract field definitions from all rows except the header
    Object.entries(sectionRows).forEach(([rowKey, row]) => {
      if (rowKey === "header") return; // Skip the header row
      if (!row.cells) return;

      // Process each cell in the row
      Object.entries(row.cells).forEach(([colKey, cell]) => {
        // Include 'editable' types now
        if (
          cell.fieldId &&
          (cell.type === "calculated" || cell.type === "editable")
        ) {
          // Create field definition with all relevant properties
          fields[cell.fieldId] = {
            type: cell.type,
            label: cell.label || row.label,
            // Use 'value' from cell definition as defaultValue
            defaultValue: cell.value !== undefined ? cell.value.toString() : "",
            section: cell.section || "teuiSummary",
          };

          // Copy additional field properties if they exist
          if (cell.dropdownId)
            fields[cell.fieldId].dropdownId = cell.dropdownId;
          if (cell.options) fields[cell.fieldId].options = cell.options;
          if (cell.getOptions)
            fields[cell.fieldId].getOptions = cell.getOptions;
          if (cell.dependencies)
            fields[cell.fieldId].dependencies = cell.dependencies;
          if (cell.min !== undefined) fields[cell.fieldId].min = cell.min;
          if (cell.max !== undefined) fields[cell.fieldId].max = cell.max;
          if (cell.step !== undefined) fields[cell.fieldId].step = cell.step;
        }
      });
    });

    return fields;
  }

  /**
   * Extract dropdown options from the integrated layout
   * Required for backward compatibility
   */
  function getDropdownOptions() {
    const options = {};

    // Extract dropdown options from all cells with dropdownId
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

  /**
   * Generate layout from integrated row definitions
   * This converts our compact definition to the format expected by the renderer
   */
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

  /**
   * Helper function to convert a row definition to the layout format
   * This function handles the conversion of column C cells for proper row labels
   */
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
        delete cell.dependencies; // Dependencies are handled by StateManager, not renderer
        // Keep 'value' for editable fields' initial display
        // Keep 'type' for renderer to identify editable vs calculated

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
  // CALCULATIONS AND DEPENDENCIES
  //==========================================================================

  /**
   * Register all field dependencies with the StateManager based on FORMULAE-3037.csv
   */
  function registerDependencies() {
    if (!window.TEUI.StateManager) {
      // console.warn("StateManager not available for TEUI dependency registration");
      return;
    }
    const sm = window.TEUI.StateManager;

    // Dependencies for d_135: =M43+K51+H70+D117+I104+M121-I80
    ["m_43", "k_51", "h_70", "d_117", "i_104", "m_121", "i_80"].forEach((dep) =>
      sm.registerDependency(dep, "d_135"),
    );

    // Dependencies for h_135: =D135/H15
    sm.registerDependency("d_135", "h_135");
    sm.registerDependency("h_15", "h_135");

    // Dependencies for d_136: =IF(D113="Electricity",D135,IF(D113="Heatpump",(K51+D117+D114+M43+H70),IF(D113="Gas",(K51+D117+M43+H70),IF(D113="Oil",(K51+D117+M43+H70)))))
    sm.registerDependency("d_113", "d_136"); // Primary Heating System
    sm.registerDependency("d_135", "d_136"); // Dependency if electric
    ["k_51", "d_117", "d_114", "m_43", "h_70"].forEach((dep) =>
      sm.registerDependency(dep, "d_136"),
    ); // Dependencies if HP/Gas/Oil

    // Dependencies for h_136: =D136/H15
    sm.registerDependency("d_136", "h_136");
    sm.registerDependency("h_15", "h_136");

    // Dependencies for d_137: =(G101*D101+D102*G102)*(H23-D23)/1000
    ["g_101", "d_101", "d_102", "g_102", "h_23", "d_23"].forEach((dep) =>
      sm.registerDependency(dep, "d_137"),
    );

    // Dependencies for l_137: =D137*3412.14245
    sm.registerDependency("d_137", "l_137");

    // Dependencies for d_138: =(G101*D101+D102*G102)*(D24-H24)/1000
    ["g_101", "d_101", "d_102", "g_102", "d_24", "h_24"].forEach((dep) =>
      sm.registerDependency(dep, "d_138"),
    );

    // Dependencies for h_138: =D138*0.2843451361
    sm.registerDependency("d_138", "h_138");

    // Dependencies for l_138: =D138*3412.14245
    sm.registerDependency("d_138", "l_138");

    // Dependencies for d_139: =((G101*D101+D102*G102)*(D24-H24)+(D65+D66+D67)*H15)/1000+((K79+D122+K64-H124)/(M19*24))
    [
      "g_101",
      "d_101",
      "d_102",
      "g_102",
      "d_24",
      "h_24",
      "d_65",
      "d_66",
      "d_67",
      "h_15",
      "k_79",
      "d_122",
      "k_64",
      "h_124",
      "m_19",
    ].forEach((dep) => sm.registerDependency(dep, "d_139"));

    // Dependencies for h_139: =D139*0.2843451361
    sm.registerDependency("d_139", "h_139");

    // Dependencies for l_139: =D139*3412.14245
    sm.registerDependency("d_139", "l_139");

    // Dependencies for d_140: =D137*1000/H15
    sm.registerDependency("d_137", "d_140");
    sm.registerDependency("h_15", "d_140");

    // Dependencies for h_140: =D138/H15*1000
    sm.registerDependency("d_138", "h_140");
    sm.registerDependency("h_15", "h_140");

    // Dependencies for d_141: =D135*L12
    sm.registerDependency("d_135", "d_141");
    sm.registerDependency("l_12", "d_141"); // Electricity price

    // Dependencies for h_141: =D136*L12
    sm.registerDependency("d_136", "h_141");
    sm.registerDependency("l_12", "h_141"); // Electricity price

    // Dependencies for l_141: =(L13*D28)+(D29*L14)+(L15*D31)
    ["l_13", "d_28", "d_29", "l_14", "l_15", "d_31"].forEach((dep) =>
      sm.registerDependency(dep, "l_141"),
    );

    // Dependencies for h_142: =IF(D113="Heatpump",D142/(D141-H141), 0)
    sm.registerDependency("d_113", "h_142"); // Primary Heating System
    sm.registerDependency("d_142", "h_142"); // Cost Premium (Input)
    sm.registerDependency("d_141", "h_142"); // Pre-HP cost
    sm.registerDependency("h_141", "h_142"); // Post-HP cost

    // Dependencies for d_143: =E10 (Reference TEUI)
    sm.registerDependency("e_10", "d_143"); // Note: e_10 might be calculated elsewhere

    // Dependencies for h_143: =H10 (Target TEUI)
    sm.registerDependency("h_10", "h_143");

    // Dependencies for l_143: =IF(D14="Targeted Use", "N/A", K10)
    sm.registerDependency("d_14", "l_143"); // Reporting Mode
    sm.registerDependency("k_10", "l_143"); // Actual TEUI from Sec 1

    // Dependencies for d_144: =1-(H143/D143)
    sm.registerDependency("h_143", "d_144");
    sm.registerDependency("d_143", "d_144");

    // Dependencies for h_144: =IF(L143="N/A", "N/A", IF(L143=0, 0, H143/L143))
    sm.registerDependency("l_143", "h_144");
    sm.registerDependency("h_143", "h_144");

    // Dependencies for l_144: =IF(D14="Targeted Use", "N/A", L143/H143)
    sm.registerDependency("d_14", "l_144"); // Reporting Mode
    sm.registerDependency("l_143", "l_144");
    sm.registerDependency("h_143", "l_144");

    // Dependencies for d_145: =1-(K32/REFERENCE!K32)
    // Requires k_32 (Target Net Emissions) and a reference emission value (REFERENCE!K32)
    // Assuming REFERENCE!K32 needs to be defined/retrieved, maybe from section 4 or 5? Using a placeholder.
    sm.registerDependency("k_32", "d_145");
    // Placeholder: sm.registerDependency('reference_k_32', 'd_145');
  }

  /**
   * Calculate all values for this section and connected sections
   * This follows the template pattern expected by the system
   */
  function calculateAll() {
    // Run both engines independently
    calculateReferenceModel(); // Calculates Reference values with ref_ prefix
    calculateTargetModel(); // Calculates Target values (existing logic)
  }

  /**
   * REFERENCE MODEL ENGINE: Calculate all values using Reference state
   * Stores results with ref_ prefix to keep separate from Target values
   * ENHANCED: Now properly receives Reference values from Section 04
   */
  function calculateReferenceModel() {
    try {
      // Helper function to get Reference values with proper fallback
      const getRefValue = (fieldId) => {
        const refFieldId = `ref_${fieldId}`;
        let value =
          window.TEUI?.StateManager?.getValue(refFieldId) ||
          window.TEUI?.StateManager?.getReferenceValue(fieldId) ||
          getNumericValue(fieldId);

        // CRITICAL FIX: Ensure numeric conversion to prevent string concatenation
        if (typeof value === "string") {
          value = parseFloat(value.replace(/,/g, "")) || 0;
        }
        return typeof value === "number" ? value : 0;
      };

      // Helper function to set Reference values only if changed (Section 07 Gold Standard)
      const setRefValueIfChanged = (fieldId, newValue) => {
        const currentValue = window.TEUI?.StateManager?.getValue(fieldId);
        const newValueStr = newValue.toString();
        if (currentValue !== newValueStr) {
          window.TEUI.StateManager.setValue(fieldId, newValueStr, "calculated");
          return true;
        }
        return false;
      };

      // Get Reference values from upstream sections
      const area = getRefValue("h_15");
      const elecPrice = getRefValue("l_12");
      const gasPrice = getRefValue("l_13");
      const propanePrice = getRefValue("l_14");
      const oilPrice = getRefValue("l_16");
      const woodPrice = getRefValue("l_15");

      // CRITICAL: Get Reference values from Section 04 (j_32, k_32)
      const ref_j32 = getRefValue("j_32"); // Reference Total Energy from S04
      const ref_k32 = getRefValue("k_32"); // Reference Total Emissions from S04

      // 🔍 REFERENCE TRACKER: Monitor Reference engine climate data usage
      const ref_hdd = getRefValue("d_20");
      const ref_cdd = getRefValue("d_21"); 
      const ref_gfhdd = getRefValue("d_22");
      const ref_gfcdd = getRefValue("h_22");
      // console.log(`🔍 S15 REFERENCE ENGINE CLIMATE: HDD=${ref_hdd}, CDD=${ref_cdd}, GFHDD=${ref_gfhdd}, GFCDD=${ref_gfcdd}`);
      
      // Track Reference upstream values - READ ONLY ref_ prefixed values
      const ref_i104 = window.TEUI?.StateManager?.getValue("ref_i_104") || 0; // From S12 Building Envelope
      const ref_m121 = window.TEUI?.StateManager?.getValue("ref_m_121") || 0; // From S13 Ventilation  
      const ref_i80 = window.TEUI?.StateManager?.getValue("ref_i_80") || 0; // From S10 Solar Gains
      console.log(
        `🔍 S15 REFERENCE UPSTREAM: ref_i_104=${ref_i104}, ref_m_121=${ref_m121}, ref_i_80=${ref_i80}`,
      );

      // Get other Reference dependencies
      const m43 = getRefValue("m_43");
      const k51 = getRefValue("k_51");
      const h70 = getRefValue("h_70");
      const i104 = ref_i104; // Use Reference values for Reference calculations
      const m121 = ref_m121; // Use Reference values for Reference calculations
      const i80 = ref_i80; // Use Reference values for Reference calculations

      const primaryHeating =
        window.TEUI?.StateManager?.getReferenceValue("d_113") || "Electricity";
      const d114 = getRefValue("d_114");

      const g101 = getRefValue("g_101");
      const d101 = getRefValue("d_101");
      const d102 = getRefValue("d_102");
      const g102 = getRefValue("g_102");
      const h23 = getRefValue("h_23");
      const d23 = getRefValue("d_23");
      const d24 = getRefValue("d_24");
      const h24 = getRefValue("h_24");

      const d65 = getRefValue("d_65");
      const d66 = getRefValue("d_66");
      const d67 = getRefValue("d_67");
      const k79 = getRefValue("k_79");
      const d122 = getRefValue("d_122");
      const k64 = getRefValue("k_64");
      const h124 = getRefValue("h_124");
      const m19_days = getRefValue("m_19") || 120;

      const d28 = getRefValue("d_28");
      const d29 = getRefValue("d_29");
      const d31 = getRefValue("d_31");
      const d30_litres = getRefValue("d_30");

      const hpCostPremium = getRefValue("d_142");

      const refTEUI_e10 = getRefValue("e_10");
      const targetTEUI_h10 = getRefValue("h_10");
      const actualTEUI_k10 = getRefValue("k_10");
      const reportingMode_d14 =
        window.TEUI?.StateManager?.getReferenceValue("d_14") || "Targeted Use";

      const coolingType_d116 =
        window.TEUI?.StateManager?.getReferenceValue("d_116") || "Heatpump";

      // Calculate Reference values
      let d117_actual_val = getRefValue("d_117");
      let d117_effective = d117_actual_val;
      if (coolingType_d116 === "No Cooling") {
        d117_effective = 0;
      }

      // d_135: TEU Targeted Electricity (Reference)
      let ref_teuTargetTotal =
        m43 + k51 + h70 + d117_effective + i104 + m121 - i80;
      setRefValueIfChanged("ref_d_135", ref_teuTargetTotal);

      // h_135: TEUI (Reference)
      let ref_teui_h135 = area > 0 ? ref_teuTargetTotal / area : 0;
      setRefValueIfChanged("ref_h_135", ref_teui_h135);

      // d_136: TEU Targeted Electricity if HP/Gas/Oil Bldg (Reference)
      let ref_teuTargetedElecHPGasOil;
      if (primaryHeating === "Electricity") {
        ref_teuTargetedElecHPGasOil = ref_teuTargetTotal;
      } else if (primaryHeating === "Heatpump") {
        ref_teuTargetedElecHPGasOil = k51 + d117_effective + d114 + m43 + h70;
      } else {
        ref_teuTargetedElecHPGasOil = k51 + d117_effective + m43 + h70;
      }
      setRefValueIfChanged("ref_d_136", ref_teuTargetedElecHPGasOil);

      // h_136: TEUI (HP/Gas/Oil) (Reference)
      let ref_teui_h136 = area > 0 ? ref_teuTargetedElecHPGasOil / area : 0;
      setRefValueIfChanged("ref_h_136", ref_teui_h136);

      // Calculate all other Reference values using the same pattern...

      // d_137: Peak Heating Load (Reference)
      let ref_peakHeatingLoad_d137 =
        ((g101 * d101 + d102 * g102) * (h23 - d23)) / 1000;
      setRefValueIfChanged("ref_d_137", ref_peakHeatingLoad_d137);

      // l_137: Peak Heating BTU (Reference)
      let ref_peakHeatingBTU_l137 = ref_peakHeatingLoad_d137 * 3412.14245;
      setRefValueIfChanged("ref_l_137", ref_peakHeatingBTU_l137);

      // d_138: Peak Cooling Load (Reference)
      let ref_peakCoolingLoad_d138 =
        ((g101 * d101 + d102 * g102) * (d24 - h24)) / 1000;
      setRefValueIfChanged("ref_d_138", ref_peakCoolingLoad_d138);

      // h_138: Peak Cooling Tons (Reference)
      let ref_peakCoolingTons_h138 = ref_peakCoolingLoad_d138 * 0.2843451361;
      setRefValueIfChanged("ref_h_138", ref_peakCoolingTons_h138);

      // l_138: Peak Cooling BTU (Reference)
      let ref_peakCoolingBTU_l138 = ref_peakCoolingLoad_d138 * 3412.14245;
      setRefValueIfChanged("ref_l_138", ref_peakCoolingBTU_l138);

      // d_139: Peak Cooling Load with Gains (Reference)
      let ref_enclosureCoolLoad = (g101 * d101 + d102 * g102) * (d24 - h24);
      let ref_internalGainsW = (d65 + d66 + d67) * area;
      let ref_solarVentOccGains = k79 + d122 + k64 - h124;
      let ref_peakCoolingLoadGains_d139 =
        (ref_enclosureCoolLoad + ref_internalGainsW) / 1000;
      if (m19_days > 0) {
        ref_peakCoolingLoadGains_d139 +=
          ref_solarVentOccGains / (m19_days * 24);
      }
      setRefValueIfChanged("ref_d_139", ref_peakCoolingLoadGains_d139);

      // h_139: Peak Cooling Tons with Gains (Reference)
      let ref_peakCoolingTonsGains_h139 =
        ref_peakCoolingLoadGains_d139 * 0.2843451361;
      setRefValueIfChanged("ref_h_139", ref_peakCoolingTonsGains_h139);

      // l_139: Peak Cooling BTU with Gains (Reference)
      let ref_peakCoolingBTUGains_l139 =
        ref_peakCoolingLoadGains_d139 * 3412.14245;
      setRefValueIfChanged("ref_l_139", ref_peakCoolingBTUGains_l139);

      // d_140: Max Heating Intensity (Reference)
      let ref_maxHeatingIntensity_d140 =
        area > 0 ? (ref_peakHeatingLoad_d137 * 1000) / area : 0;
      setRefValueIfChanged("ref_d_140", ref_maxHeatingIntensity_d140);

      // h_140: Max Cooling Intensity (Reference)
      let ref_maxCoolingIntensity_h140 =
        area > 0 ? (ref_peakCoolingLoad_d138 * 1000) / area : 0;
      setRefValueIfChanged("ref_h_140", ref_maxCoolingIntensity_h140);

      // d_141: Annual Cost of Electricity (Reference)
      let ref_annualCostElecPre_d141 = ref_teuTargetTotal * elecPrice;
      setRefValueIfChanged("ref_d_141", ref_annualCostElecPre_d141);

      // h_141: Annual Cost of Electricity Post HP (Reference)
      let ref_annualCostElecPost_h141 = ref_teuTargetedElecHPGasOil * elecPrice;
      setRefValueIfChanged("ref_h_141", ref_annualCostElecPost_h141);

      // l_141: Other Energy Cost (Reference)
      let ref_otherEnergyCost_l141 =
        gasPrice * d28 +
        propanePrice * d29 +
        woodPrice * d31 +
        oilPrice * d30_litres;
      setRefValueIfChanged("ref_l_141", ref_otherEnergyCost_l141);

      // h_142: ROI (Reference)
      let ref_roi_h142 = 0;
      let ref_costSavings =
        ref_annualCostElecPre_d141 - ref_annualCostElecPost_h141;
      if (primaryHeating === "Heatpump" && ref_costSavings > 0) {
        ref_roi_h142 = hpCostPremium / ref_costSavings;
      }
      setRefValueIfChanged("ref_h_142", ref_roi_h142);

      // CRITICAL: Store Reference TEUI values for Section 01 consumption
      // These are the final Reference values that Section 01 needs for e_10 calculation
      setRefValueIfChanged("ref_d_143", refTEUI_e10); // Reference TEUI
      setRefValueIfChanged("ref_h_143", targetTEUI_h10); // Target TEUI
      
      // ✅ FINAL REFERENCE TEUI CALCULATION TRACKER - Use Section 01's specialized display system
          // console.log(`🔍 S15 REFERENCE ENGINE: Final TEUI calculation = ${ref_teui_h136}`);
      // console.log(`🔍 S15 REFERENCE ENGINE: Setting e_10 = ${ref_teui_h136} (changes with Reference location)`);
    // console.log(`🔍 S15 REFERENCE ENGINE: ** REFERENCE e_10 SHOULD CHANGE WHEN REFERENCE MODE LOCATION CHANGES **`);
      
      // Store in StateManager but let Section 01 handle the display
      window.TEUI.StateManager?.setValue("e_10", ref_teui_h136.toString(), "calculated");
      window.TEUI.StateManager?.setValue("ref_e_10", ref_teui_h136.toString(), "calculated");
      
      // Trigger Section 01's specialized display update if available
      if (window.TEUI?.SectionModules?.sect01?.updateDisplayValue) {
        const formattedValue = window.TEUI?.formatNumber?.(ref_teui_h136, "number-1dp") ?? ref_teui_h136.toString();
        window.TEUI.SectionModules.sect01.updateDisplayValue("e_10", formattedValue);
      }

      // Calculate Reference percentage reductions
      let ref_teuiReduction_d144 =
        refTEUI_e10 > 0 ? 1 - targetTEUI_h10 / refTEUI_e10 : 0;
      setRefValueIfChanged("ref_d_144", ref_teuiReduction_d144);

      // GHG Reduction using Reference emissions from Section 04
      let ref_ghgReduction_d145 = ref_k32 > 0 ? 1 - ref_k32 / ref_k32 : 0; // This will be 0 for Reference vs Reference
      setRefValueIfChanged("ref_d_145", ref_ghgReduction_d145);

      // Debug logging (reduced frequency)
      // Reference calculations completed successfully
    } catch (error) {
      console.error(
        "[Section15] Error in Reference Model calculations:",
        error,
      );
    }
  }

  /**
   * TARGET MODEL ENGINE: Calculate all values using Application state
   * This is the existing calculation logic
   */
  function calculateTargetModel() {
    try {
      // Perform target calculations using existing calculateValues function
      calculateValues();

      // Note: Section 15 doesn't appear to have reference indicators in the standard sense
      // The percentages calculated (d_144, h_144, l_144, d_145) are comparisons between
      // Reference, Target, and Actual values rather than pass/fail indicators
    } catch (error) {
      console.error("[Section15] Error in Target Model calculations:", error);
    }
  }

  /**
   * Calculate all values for this section based on FORMULAE-3037.csv
   * This is triggered when dependencies change or on initial load
   */
  function calculateValues() {
    try {
      if (!window.TEUI.StateManager) {
        // console.warn("StateManager not available for TEUI Summary calculations");
        return;
      }
      const sm = window.TEUI.StateManager;

      // --- Get Input Values ---
      const area = getNumericValue("h_15");
      const elecPrice = getNumericValue("l_12");
      
      // 🔍 CONTAMINATION TRACKER: Monitor what climate data Target engine is actually using
      const target_hdd = getNumericValue("d_20");
      const target_cdd = getNumericValue("d_21"); 
      const target_gfhdd = getNumericValue("d_22");
      const target_gfcdd = getNumericValue("h_22");
      // console.log(`🔍 S15 TARGET ENGINE CLIMATE: HDD=${target_hdd}, CDD=${target_cdd}, GFHDD=${target_gfhdd}, GFCDD=${target_gfcdd}`);
      
      // Track key upstream values that feed Target TEUI calculation - READ ONLY target_ prefixed values
      const target_i104 =
        window.TEUI?.StateManager?.getValue("target_i_104") ||
        getNumericValue("i_104"); // From S12 Building Envelope
      const target_m121 =
        window.TEUI?.StateManager?.getValue("target_m_121") ||
        getNumericValue("m_121"); // From S13 Ventilation
      const target_i80 =
        window.TEUI?.StateManager?.getValue("target_i_80") ||
        getNumericValue("i_80"); // From S10 Solar Gains
      console.log(
        `🔍 S15 TARGET UPSTREAM: target_i_104=${target_i104}, target_m_121=${target_m121}, target_i_80=${target_i80}`,
      );
      const gasPrice = getNumericValue("l_13"); // Price per m3
      const propanePrice = getNumericValue("l_14"); // Price per kg
      const oilPrice = getNumericValue("l_16"); // Price per litre (CSV says l_16, form says l_15?) - Assuming l_16 from formula
      const woodPrice = getNumericValue("l_15"); // Price per m3 (CSV says l_15, form says l_16?) - Assuming l_15 from formula

      const m43 = getNumericValue("m_43"); // Onsite Energy Subtotals
      const k51 = getNumericValue("k_51"); // W.3.3 Net Electrical Demand (DHW)
      const h70 = getNumericValue("h_70"); // Plug/Light/Eqpt. Subtotals (Annual kWh)
      const i104 = target_i104; // Use Target values for Target calculations
      const m121 = target_m121; // Use Target values for Target calculations
      const i80 = target_i80; // Use Target values for Target calculations

      const primaryHeating = sm.getValue("d_113"); // e.g., "Heatpump", "Gas", "Oil", "Electricity"
      const d114 = getNumericValue("d_114"); // Heating System Demand (after COP/AFUE)

      const g101 = getNumericValue("g_101"); // U-Val. for Ae
      const d101 = getNumericValue("d_101"); // Total Area Exposed to Air (Ae)
      const d102 = getNumericValue("d_102"); // Total Area Exposed to Ground (Ag)
      const g102 = getNumericValue("g_102"); // U-Val. for Ag
      
      // ✅ FIX: Read temperature data using target_ prefixes for Target calculations
      const h23 = getNumericValue("target_h_23") || getNumericValue("h_23"); // Tset Heating
      const d23 = getNumericValue("target_d_23") || getNumericValue("d_23"); // Coldest Days Temp
      const d24 = getNumericValue("target_d_24") || getNumericValue("d_24"); // Hottest Days Temp
      const h24 = getNumericValue("target_h_24") || getNumericValue("h_24"); // Tset Cooling

      const d65 = getNumericValue("d_65"); // Plug Loads W/m2
      const d66 = getNumericValue("d_66"); // Lighting Loads W/m2
      const d67 = getNumericValue("d_67"); // Equipment Loads W/m2
      const k79 = getNumericValue("k_79"); // Subtotal Solar Gains (Cool Load kWh/yr)
      const d122 = getNumericValue("d_122"); // Incoming Cooling Season Ventil. Energy
      const k64 = getNumericValue("k_64"); // Occupant Activity (Cooling Gain kWh/yr)
      const h124 = getNumericValue("h_124"); // Ventilation Free Cooling/Vent Capacity (kWh/yr)
      const m19_days = getNumericValue("m_19") || 120; // L.3.3 Days Cooling (default 120 if not set)

      const d28 = getNumericValue("d_28"); // Total Fossil Gas Use (m3/yr) - Actual
      const d29 = getNumericValue("d_29"); // Total Propane Use (kg/yr) - Actual
      const d31 = getNumericValue("d_31"); // Total Wood Use (m3/yr) - Actual
      const d30_litres = getNumericValue("d_30"); // Total Oil Use (litres/yr) - Actual (Need value for l_141 calc)

      const hpCostPremium = getNumericValue("d_142"); // User input cost premium

      const refTEUI_e10 = getNumericValue("e_10"); // Reference TEUI (Sec 1)
      const targetTEUI_h10 = getNumericValue("h_10"); // Target TEUI (Sec 1)
      const actualTEUI_k10 = getNumericValue("k_10"); // Actual TEUI (Sec 1)
      const reportingMode_d14 = sm.getValue("d_14"); // "Utility Bills" or "Targeted Use"

      const targetEmissions_k32 = getNumericValue("k_32"); // Target Net Emissions kgCO2/yr
      const referenceEmissions_REF_k32 = getNumericValue("reference_k_32") || 0; // Placeholder

      const coolingType_d116 = sm.getValue("d_116"); // Get cooling type for d117 logic

      // --- Perform Calculations ---
      let d117_actual_val = getNumericValue("d_117"); // Get the actual d_117 value
      let d117_effective = d117_actual_val;
      if (coolingType_d116 === "No Cooling") {
        d117_effective = 0; // Override d_117 if No Cooling selected
      }

      // d_135: =M43+K51+H70+D117+I104+M121-I80
      let teuTargetTotal = m43 + k51 + h70 + d117_effective + i104 + m121 - i80;
      setCalculatedValue("d_135", teuTargetTotal);

      // h_135: =D135/H15
      let teui_h135 = area > 0 ? teuTargetTotal / area : 0;
      setCalculatedValue("h_135", teui_h135);

      // d_136: Calculation using d117_effective logic
      let teuTargetedElecHPGasOil;
      if (primaryHeating === "Electricity") {
        teuTargetedElecHPGasOil = teuTargetTotal; // teuTargetTotal already uses d117_effective
      } else if (primaryHeating === "Heatpump") {
        teuTargetedElecHPGasOil = k51 + d117_effective + d114 + m43 + h70;
      } else {
        // Gas or Oil - sum elec loads only, exclude heating demand (d114)
        teuTargetedElecHPGasOil = k51 + d117_effective + m43 + h70;
      }
      setCalculatedValue("d_136", teuTargetedElecHPGasOil);

      // h_136: =D136/H15
      let teui_h136 = area > 0 ? teuTargetedElecHPGasOil / area : 0;
      setCalculatedValue("h_136", teui_h136);
      
      // ✅ FINAL TARGET TEUI CALCULATION TRACKER - Use Section 01's specialized display system
          // console.log(`🔍 S15 TARGET ENGINE: Final TEUI calculation = ${teui_h136}`);
      // console.log(`🔍 S15 TARGET ENGINE: Setting h_10 = ${teui_h136} (should be stable ~93.6)`);
    // console.log(`🔍 S15 TARGET ENGINE: ** TARGET h_10 SHOULD NEVER CHANGE WHEN REFERENCE MODE LOCATION CHANGES **`);
      
      // Store in StateManager but let Section 01 handle the display
      window.TEUI.StateManager?.setValue("h_10", teui_h136.toString(), "calculated");
      window.TEUI.StateManager?.setValue("target_h_10", teui_h136.toString(), "calculated");
      
      // Trigger Section 01's specialized display update if available
      if (window.TEUI?.SectionModules?.sect01?.updateDisplayValue) {
        const formattedValue = window.TEUI?.formatNumber?.(teui_h136, "number-1dp") ?? teui_h136.toString();
        window.TEUI.SectionModules.sect01.updateDisplayValue("h_10", formattedValue);
      }

      // d_137: =(G101*D101+D102*G102)*(H23-D23)/1000
      let peakHeatingLoad_d137 =
        ((g101 * d101 + d102 * g102) * (h23 - d23)) / 1000;
      setCalculatedValue("d_137", peakHeatingLoad_d137);

      // l_137: =D137*3412.14245
      let peakHeatingBTU_l137 = peakHeatingLoad_d137 * 3412.14245;
      setCalculatedValue("l_137", peakHeatingBTU_l137, "btu");

      // d_138: =(G101*D101+D102*G102)*(D24-H24)/1000
      let peakCoolingLoad_d138 =
        ((g101 * d101 + d102 * g102) * (d24 - h24)) / 1000;
      setCalculatedValue("d_138", peakCoolingLoad_d138);

      // h_138: =D138*0.2843451361
      let peakCoolingTons_h138 = peakCoolingLoad_d138 * 0.2843451361;
      setCalculatedValue("h_138", peakCoolingTons_h138, "tons");

      // l_138: =D138*3412.14245
      let peakCoolingBTU_l138 = peakCoolingLoad_d138 * 3412.14245;
      setCalculatedValue("l_138", peakCoolingBTU_l138, "btu");

      // d_139: =((G101*D101+D102*G102)*(D24-H24)+(D65+D66+D67)*H15)/1000+((K79+D122+K64-H124)/(M19*24))
      let enclosureCoolLoad = (g101 * d101 + d102 * g102) * (d24 - h24);
      let internalGainsW = (d65 + d66 + d67) * area; // Gains in Watts
      let solarVentOccGains = k79 + d122 + k64 - h124; // Gains in kWh/yr
      let peakCoolingLoadGains_d139 =
        (enclosureCoolLoad + internalGainsW) / 1000; // Convert W to kW
      if (m19_days > 0) {
        // Convert annual kWh gains to average kW during cooling days
        peakCoolingLoadGains_d139 += solarVentOccGains / (m19_days * 24);
      }
      setCalculatedValue("d_139", peakCoolingLoadGains_d139);

      // h_139: =D139*0.2843451361
      let peakCoolingTonsGains_h139 = peakCoolingLoadGains_d139 * 0.2843451361;
      setCalculatedValue("h_139", peakCoolingTonsGains_h139, "tons");

      // l_139: =D139*3412.14245
      let peakCoolingBTUGains_l139 = peakCoolingLoadGains_d139 * 3412.14245;
      setCalculatedValue("l_139", peakCoolingBTUGains_l139, "btu");

      // d_140: =D137*1000/H15
      let maxHeatingIntensity_d140 =
        area > 0 ? (peakHeatingLoad_d137 * 1000) / area : 0;
      setCalculatedValue("d_140", maxHeatingIntensity_d140);

      // h_140: =D138/H15*1000
      let maxCoolingIntensity_h140 =
        area > 0 ? (peakCoolingLoad_d138 * 1000) / area : 0;
      setCalculatedValue("h_140", maxCoolingIntensity_h140);

      // d_141: =D135*L12
      let annualCostElecPre_d141 = teuTargetTotal * elecPrice; // Using d_135 value
      setCalculatedValue("d_141", annualCostElecPre_d141, "currency");

      // h_141: =D136*L12
      let annualCostElecPost_h141 = teuTargetedElecHPGasOil * elecPrice; // Using d_136 value
      setCalculatedValue("h_141", annualCostElecPost_h141, "currency");

      // l_141: =(L13*D28)+(D29*L14)+(L15*D31)
      let otherEnergyCost_l141 =
        gasPrice * d28 +
        propanePrice * d29 +
        woodPrice * d31 +
        oilPrice * d30_litres;
      setCalculatedValue("l_141", otherEnergyCost_l141, "currency");

      // h_142: =IF(D113="Heatpump",D142/(D141-H141), 0)
      let roi_h142 = 0;
      let costSavings = annualCostElecPre_d141 - annualCostElecPost_h141;
      if (primaryHeating === "Heatpump" && costSavings > 0) {
        roi_h142 = hpCostPremium / costSavings;
      }
      setCalculatedValue("h_142", roi_h142);

      // d_143: =E10 (Reference TEUI)
      setCalculatedValue("d_143", refTEUI_e10);

      // h_143: =H10 (Target TEUI)
      setCalculatedValue("h_143", targetTEUI_h10);

      // l_143: =IF(D14="Targeted Use", "N/A", K10)
      let actualTEUI_l143 =
        reportingMode_d14 === "Utility Bills" ? actualTEUI_k10 : NaN; // Use NaN to represent N/A
      if (!isNaN(actualTEUI_l143)) {
        setCalculatedValue("l_143", actualTEUI_l143);
      } else {
        sm?.setValue("l_143", "N/A", "calculated");
        const element = document.querySelector(`[data-field-id="l_143"]`);
        if (element) element.textContent = "N/A";
      }

      // d_144: =1-(H143/D143)
      let teuiReduction_d144 =
        refTEUI_e10 > 0 ? 1 - targetTEUI_h10 / refTEUI_e10 : 0;
      setCalculatedValue("d_144", teuiReduction_d144, "percent");

      // h_144: =IF(L143="N/A", "N/A", IF(L143=0, 0, H143/L143))
      let targetVsActual_h144 = NaN;
      if (!isNaN(actualTEUI_l143)) {
        targetVsActual_h144 =
          actualTEUI_l143 > 0 ? targetTEUI_h10 / actualTEUI_l143 : 0;
        setCalculatedValue("h_144", targetVsActual_h144, "percent");
      } else {
        sm?.setValue("h_144", "N/A", "calculated");
        const element = document.querySelector(`[data-field-id="h_144"]`);
        if (element) element.textContent = "N/A";
      }

      // l_144: =IF(D14="Targeted Use", "N/A", L143/H143)
      let actualVsTarget_l144 = NaN;
      if (reportingMode_d14 === "Utility Bills" && targetTEUI_h10 > 0) {
        actualVsTarget_l144 = actualTEUI_l143 / targetTEUI_h10;
        setCalculatedValue("l_144", actualVsTarget_l144, "percent");
      } else {
        sm?.setValue("l_144", "N/A", "calculated");
        const element = document.querySelector(`[data-field-id="l_144"]`);
        if (element) element.textContent = "N/A";
      }

      // d_145: =1-(K32/REFERENCE!K32)
      let ghgReduction_d145 =
        referenceEmissions_REF_k32 > 0
          ? 1 - targetEmissions_k32 / referenceEmissions_REF_k32
          : 0;
      // Check if targetEmissions is negative (sequestration), handle division by zero
      if (referenceEmissions_REF_k32 === 0 && targetEmissions_k32 < 0) {
        ghgReduction_d145 = 1; // Or some indicator of 100%+ reduction if baseline is zero
      } else if (referenceEmissions_REF_k32 === 0 && targetEmissions_k32 >= 0) {
        ghgReduction_d145 = 0; // No reduction if baseline and target are zero or positive
      }
      setCalculatedValue("d_145", ghgReduction_d145, "percent");
    } catch (error) {
      console.error("Error in TEUI Summary calculations:", error);
    }
  }

  /**
   * Update the DOM with the current values from the StateManager
   * Note: This might become redundant if setCalculatedValue handles DOM updates reliably.
   * Keeping it for now as a fallback or explicit refresh mechanism if needed.
   */
  function updateDisplay() {
    if (!window.TEUI.StateManager) return;

    // Get all fields managed by this section
    const fields = getFields();

    Object.keys(fields).forEach((fieldId) => {
      const value = window.TEUI.StateManager.getValue(fieldId);
      if (value !== null && value !== undefined) {
        const element = document.querySelector(`[data-field-id="${fieldId}"]`);
        if (element) {
          // Find the field definition to know the format
          let format = "number"; // Default format
          let rawValue = getNumericValue(fieldId); // Get raw value for formatting check

          if (
            fieldId === "d_141" ||
            fieldId === "h_141" ||
            fieldId === "l_141" ||
            fieldId === "d_142"
          ) {
            format = "currency";
          } else if (fieldId === "l_143" && value === "N/A") {
            element.textContent = "N/A";
            return; // Skip formatting for N/A
          } else if (fieldId === "h_144" && value === "N/A") {
            element.textContent = "N/A";
            return;
          } else if (fieldId === "l_144" && value === "N/A") {
            element.textContent = "N/A";
            return;
          } else if (
            fieldId === "d_144" ||
            fieldId === "h_144" ||
            fieldId === "l_144" ||
            fieldId === "d_145"
          ) {
            format = "percent";
          } else if (
            fieldId === "l_137" ||
            fieldId === "l_138" ||
            fieldId === "l_139"
          ) {
            format = "btu";
          } else if (fieldId === "h_138" || fieldId === "h_139") {
            format = "tons";
          } else if (fieldId === "h_142") {
            format = "number"; // Years, 2 decimals ok
          }

          // Use formatNumber for display consistency
          element.textContent = formatNumber(rawValue, format);
        }
      }
    });
  }

  /**
   * Initialize event handlers for this section
   * Sets up listeners for changes in dependency values from other sections.
   */
  function initializeEventHandlers() {
    if (!window.TEUI.StateManager) {
      console.warn(
        "StateManager not available for teuiSummary dependency registration",
      );
      return;
    }
    const sm = window.TEUI.StateManager;

    // Helper function to create listeners that trigger calculateAll
    const addCalculationListener = (key) => {
      sm.addListener(key, () => {
        calculateAll();
      });
    };

    // Create a flat list of all unique dependencies
    const dependencies = [
      "m_43",
      "k_51",
      "h_70",
      "d_117",
      "i_104",
      "m_121",
      "i_80",
      "h_15",
      "d_113",
      "d_114",
      "g_101",
      "d_101",
      "d_102",
      "g_102",
      "h_23",
      "d_23",
      "d_24",
      "h_24",
      "d_65",
      "d_66",
      "d_67",
      "k_79",
      "d_122",
      "k_64",
      "h_124",
      "m_19",
      "l_12",
      "l_13",
      "d_28",
      "d_29",
      "l_14",
      "l_15",
      "d_31",
      "l_16",
      "d_30",
      "d_142",
      "e_10",
      "h_10",
      "k_10",
      "d_14",
      "k_32",
      "reference_k_32",
      // Add dependencies from other sections that S15 might react to
      "i_98", // Total Envelope Loss from S11
      "k_98", // Total Envelope Gain from S11
    ];

    const uniqueDependencies = [...new Set(dependencies)];

    // Add listeners for both the base dependency and its 'ref_' prefixed version
    uniqueDependencies.forEach((dep) => {
      addCalculationListener(dep);
      addCalculationListener(`ref_${dep}`);
    });

    // Initial calculation on render
        calculateAll();
  }

  /**
   * Called when section is rendered
   */
  function onSectionRendered() {
    // Register dependencies first
    // Dependencies might rely on other sections being registered, so ensure StateManager is ready
    if (window.TEUI.StateManager) {
      registerDependencies();
    } else {
      console.warn(
        "StateManager not ready during sect15 onSectionRendered dependency registration.",
      );
      // Optionally, retry registration later or listen for a StateManager ready event
    }

    // Initialize event handlers AFTER dependencies are registered
    initializeEventHandlers();

    // Initial calculation should now be triggered by the central Calculator.calculateAll
    // or by listeners responding to dependency updates.
  }

  //==========================================================================
  // PUBLIC API
  //==========================================================================

  return {
    // Field definitions and layout - REQUIRED
    getFields: getFields,
    getDropdownOptions: getDropdownOptions,
    getLayout: getLayout,

    // Calculations
    calculateAll: calculateAll,

    // Event handling and initialization - REQUIRED
    initializeEventHandlers: initializeEventHandlers,
    onSectionRendered: onSectionRendered,
  };
})();

// Event listeners removed in ORDERING branch

// Add an initialized flag to prevent multiple runs of onSectionRendered
if (
  window.TEUI &&
  window.TEUI.SectionModules &&
  window.TEUI.SectionModules.sect15
) {
  window.TEUI.SectionModules.sect15.initialized = false;
}
