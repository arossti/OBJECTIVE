/**
 * 4011-Section05.js
 * CO2e Emissions (Section 5) module for TEUI Calculator 4.011
 *
 * Uses the consolidated declarative approach where field definitions
 * are integrated directly into the layout structure.
 */

// Ensure namespace exists
window.TEUI = window.TEUI || {};
window.TEUI.SectionModules = window.TEUI.SectionModules || {};

// Section 5: CO2e Emissions Module
window.TEUI.SectionModules.sect05 = (function () {
  //==========================================================================
  // CONSOLIDATED FIELD DEFINITIONS AND LAYOUT
  //==========================================================================

  // Define rows with integrated field definitions
  const sectionRows = {
    // ALWAYS PUT UNIT SUBHEADER FIRST - this ensures it appears at the top of the section
    header: {
      id: "05-ID",
      rowId: "05-ID",
      label: "Emissions Units Header",
      cells: {
        c: { content: "C", classes: ["section-subheader"] },
        d: { content: "Metric Tons (MT)", classes: ["section-subheader"] },
        e: { content: "E", classes: ["section-subheader"] },
        f: { content: "F", classes: ["section-subheader"] },
        g: { content: "kgCO2e/m2", classes: ["section-subheader"] },
        h: { content: "", classes: ["section-subheader", "spacer"] },
        i: { content: "kgCO2e/m2", classes: ["section-subheader"] },
        j: { content: "J", classes: ["section-subheader"] },
        k: { content: "K", classes: ["section-subheader"] },
        l: { content: "L", classes: ["section-subheader"] },
        m: { content: "M", classes: ["section-subheader"] },
        n: { content: "N", classes: ["section-subheader"] },
      },
    },

    // Row 38: E.1.2 GHGI Operational (B6) Emissions/yr
    38: {
      id: "E.1.2",
      rowId: "E.1.2",
      label: "GHGI Operational (B6) Emissions/yr",
      cells: {
        c: { content: "GHGI Operational (B6) Emissions/yr", type: "label" },
        d: {
          fieldId: "d_38",
          type: "calculated",
          value: "0.00",
          section: "emissions",
        },
        e: { content: "MT CO2e/yr" }, // Unit for d_38
        f: { content: "E.1.4", classes: ["label-prefix"] }, // Label for i_38 based on Excel G38 position
        g: {
          fieldId: "g_38", // Annual kgCO2e/m2 - This value should appear in this column per app screenshot
          type: "calculated",
          value: "0.00",
          section: "emissions",
        },
        h: { content: "" }, // Unit for g_38 removed, now spacer
        i: {
          fieldId: "i_38", // Lifetime kgCO2e/m2 (g_38 * h_13) - This value appears in Excel I38
          type: "calculated",
          value: "0.00",
          section: "emissions",
        },
        j: {
          // Changed from calculated field to static text label, matching Excel J38
          content: "(B6 Annual Emissions * Service Life)",
          classes: ["descriptive-text", "text-center"], // Added text-center for potential better fit
        },
        k: { content: "" }, // Previously "(Lifetime Emissions)", now covered by j_38 label
        l: { content: "", classes: ["spacer"] }, // Keep as spacer or remove if not needed
        m: {
          fieldId: "m_38",
          type: "calculated",
          value: "N/A",
          section: "emissions",
        },
        // n: {} // Column N can be omitted if empty
      },
    },

    // Row 39: E.3.1 Typology-Based Carbon Intensity (A1-3)
    39: {
      id: "E.3.1",
      rowId: "E.3.1",
      label: "Typology-Based Carbon Intensity (A1-3)",
      cells: {
        c: { content: "Typology-Based Carbon Intensity (A1-3)", type: "label" },
        d: {
          fieldId: "d_39",
          type: "dropdown",
          dropdownId: "dd_d_39",
          value: "Pt.3 Mass Timber",
          section: "emissions",
          options: [
            { value: "Pt.9 Res. Stick Frame", name: "Pt.9 Res. Stick Frame" },
            { value: "Pt.9 Small Mass Timber", name: "Pt.9 Small Mass Timber" },
            { value: "Pt.3 Mass Timber", name: "Pt.3 Mass Timber" },
            { value: "Pt.3 Concrete", name: "Pt.3 Concrete" },
            { value: "Pt.3 Steel", name: "Pt.3 Steel" },
            { value: "Pt.3 Office", name: "Pt.3 Office" },
            { value: "Modelled Value", name: "Modelled Value" },
          ],
        },
        e: { content: "", classes: ["spacer"] }, // Spacer
        f: { content: "E.3.2", classes: ["label-prefix"] },
        g: { content: "Typology-Based Cap (TGS4)", classes: ["label-main"] },
        h: { content: "", classes: ["spacer"] }, // Spacer for alignment before value in col I
        i: {
          fieldId: "i_39", // Value displayed in Column I
          type: "calculated",
          value: "350.00",
          section: "emissions",
          dependencies: ["d_39", "i_41"], // i_41 is needed if d_39 is "Modelled Value"
        },
        j: { content: "" }, // Unit for i_39 removed, now spacer
        k: { content: "", classes: ["spacer"] }, // Spacer
        l: {
          fieldId: "l_39",
          type: "calculated",
          value: "0%",
          section: "emissions",
          dependencies: ["i_39", "i_40", "d_40", "i_41"], // Broad dependencies for percentage
        },
        m: {
          fieldId: "n_39",
          type: "calculated",
          value: "✓",
          classes: ["checkmark"],
          section: "emissions",
          dependencies: ["l_39"],
        }, // Status checkmark in M
      },
    },

    // Row 40: E.3.3 Total Embedded Carbon Emitted (A1-3)
    40: {
      id: "E.3.3",
      rowId: "E.3.3",
      label: "Total Embedded Carbon Emitted (A1-3)",
      cells: {
        c: { content: "Total Embedded Carbon Emitted (A1-3)", type: "label" },
        d: {
          fieldId: "d_40",
          type: "calculated",
          value: "0.00",
          section: "emissions",
          dependencies: ["i_41", "d_106"],
        },
        e: { content: "MT CO2e/Service Life" },
        f: { content: "S.4", classes: ["label-prefix"] },
        g: { content: "Embodied Carbon Target", classes: ["label-main"] },
        h: { content: "", classes: ["spacer"] },
        i: {
          fieldId: "i_40", // Value displayed in Column I
          type: "calculated",
          value: "0.00",
          section: "emissions",
          dependencies: ["d_16"],
        },
        j: { content: "" }, // Unit for i_40 removed, now spacer
        k: { content: "", classes: ["spacer"] },
        l: {
          fieldId: "l_40",
          type: "calculated",
          value: "0%",
          section: "emissions",
          dependencies: ["i_39", "i_40", "d_40", "i_41"],
        },
        m: {
          fieldId: "n_40",
          type: "calculated",
          value: "✓",
          classes: ["checkmark"],
          section: "emissions",
          dependencies: ["l_40"],
        },
      },
    },

    // Row 41: E.1.3 Lifetime Avoided (B6) Emissions
    41: {
      id: "E.1.3",
      rowId: "E.1.3",
      label: "Lifetime Avoided (B6) Emissions",
      cells: {
        c: { content: "Lifetime Avoided (B6) Emissions", type: "label" },
        d: {
          fieldId: "d_41",
          type: "calculated",
          value: "0.00",
          section: "emissions",
          dependencies: ["ref_d_38", "d_38", "h_13"], // ref_d_38 is a placeholder concept
        },
        e: { content: "MT CO2e" },
        f: { content: "E.3.4", classes: ["label-prefix"] },
        g: { content: "Modelled Value (A1-3)", classes: ["label-main"] },
        h: { content: "", classes: ["spacer"] },
        i: {
          fieldId: "i_41",
          type: "editable", // CHANGED from "number" to "editable"
          value: "345.82",
          section: "emissions",
          classes: ["user-input"],
          // FUTURE ENHANCEMENT: Consider implementing independent Reference Mode editing
          // for i_41 (Modelled Value A1-3). Currently this field carries over from
          // Application state to Reference state. Future implementation could allow
          // separate Reference vs Design modelled values for embodied carbon.
          // See STANDARDIZED-STATES.md Section 8.1.1 for full dual-engine implementation
          // patterns including immediate UI feedback requirements.
        },
        l: {
          fieldId: "l_41",
          type: "calculated",
          value: "0%",
          section: "emissions",
          dependencies: ["i_39", "i_40", "d_40", "i_41"],
        },
        m: {
          fieldId: "n_41",
          type: "calculated",
          value: "✓",
          classes: ["checkmark"],
          section: "emissions",
          dependencies: ["l_41"],
        },
      },
    },
  };

  //==========================================================================
  // HELPER FUNCTIONS (Standardized)
  //==========================================================================

  const editableFields = ["i_41"]; // Removed j_41_test

  /**
   * Helper function to get a field value primarily from StateManager, with a DOM fallback.
   * This function's main purpose is to retrieve the raw string value.
   */
  function getFieldValue(fieldId) {
    if (
      window.TEUI &&
      window.TEUI.StateManager &&
      typeof window.TEUI.StateManager.getValue === "function"
    ) {
      const value = window.TEUI.StateManager.getValue(fieldId);
      if (value !== null && value !== undefined) {
        return String(value); // Ensure it's a string
      }
    }
    const element = document.querySelector(`[data-field-id="${fieldId}"]`);
    if (element) {
      return element.value !== undefined
        ? String(element.value)
        : String(element.textContent);
    }
    return null; // Return null if not found
  }

  /**
   * Helper function to get a numeric field value, using global parseNumeric.
   * Provides a default value if parsing fails or field is not found.
   */
  function getNumericValue(fieldId, defaultValue = 0) {
    const rawValue = getFieldValue(fieldId);
    // Use global parseNumeric, ensure it's available
    if (window.TEUI && typeof window.TEUI.parseNumeric === "function") {
      return window.TEUI.parseNumeric(rawValue, defaultValue);
    }
    // Fallback to basic parseFloat if global is not available (should not happen in normal operation)
    const parsed = parseFloat(rawValue);
    return isNaN(parsed) ? defaultValue : parsed;
  }

  /**
   * Helper function to set a calculated field value.
   * Stores raw numeric value (as string) in StateManager.
   * Updates DOM with formatted value using global window.TEUI.formatNumber.
   */
  function setCalculatedValue(
    fieldId,
    rawValue,
    formatType = "number-2dp-comma",
  ) {
    const isNumb = typeof rawValue === "number" && isFinite(rawValue);
    const valueToStore =
      rawValue === "N/A"
        ? "N/A"
        : isNumb
          ? rawValue.toString()
          : String(rawValue);

    if (
      window.TEUI &&
      window.TEUI.StateManager &&
      typeof window.TEUI.StateManager.setValue === "function"
    ) {
      window.TEUI.StateManager.setValue(fieldId, valueToStore, "calculated");
    }

    let formattedValue;
    if (rawValue === "N/A") {
      formattedValue = "N/A";
    } else if (formatType.startsWith("percent")) {
      // Ensure rawValue for percent is a fraction (e.g., 0.5 for 50%)
      // The global formatter expects a fraction for percent types.
      const numericValForPercent =
        typeof rawValue === "number" ? rawValue : getNumericValue(fieldId, 0);
      formattedValue = window.TEUI.formatNumber(
        numericValForPercent,
        formatType,
      );
    } else {
      formattedValue = window.TEUI.formatNumber(rawValue, formatType);
    }

    const element = document.querySelector(`[data-field-id="${fieldId}"]`);
    if (element) {
      // For input/select, set value, for others, textContent.
      // This was in S05 original, kept for safety, though calc fields are usually not inputs.
      if (element.tagName === "SELECT" || element.tagName === "INPUT") {
        element.value = formattedValue; // Or rawValue if the input should not be formatted display
      } else {
        element.textContent = formattedValue;
      }
    }
  }

  /**
   * Handles the blur event for editable numeric fields.
   * Parses the input, updates StateManager, re-formats the display, and recalculates.
   */
  function handleEditableBlur() {
    // Renamed from handleFieldBlur to be specific
    const fieldElement = this; // 'this' is bound to the field element
    const currentFieldId = fieldElement.getAttribute("data-field-id");
    if (!currentFieldId) return;

    const originalValue = fieldElement.dataset.originalValue || "";
    let currentValueStr = fieldElement.textContent.trim();

    // Only proceed if the value has actually changed
    if (currentValueStr !== originalValue) {
      let numValue = window.TEUI.parseNumeric(currentValueStr, NaN);
      let rawValueToStore;

      if (!isNaN(numValue)) {
        // Successfully parsed a number
        rawValueToStore = numValue.toString();
        // Update StateManager with the user-modified value
        if (window.TEUI && window.TEUI.StateManager) {
          window.TEUI.StateManager.setValue(
            currentFieldId,
            rawValueToStore,
            "user-modified",
          );
        }
        // The existing StateManager listener for i_41 should handle recalculations and updates to i_39.
        // No direct call to calculateAll() here.
        // No direct re-formatting of fieldElement.textContent here;
        // if StateManager updates trigger a re-render or i_41 is read and set by a calculation,
        // that process should handle formatting.
      } else {
        // If parsing fails, revert to original value to prevent saving invalid input
        fieldElement.textContent = originalValue;
        // console.warn(`Invalid input for ${currentFieldId}: '${currentValueStr}'. Reverted to '${originalValue}'.`);
      }
    } else {
      // If the value hasn't changed, ensure it still has the standard formatting if needed.
      // This can be added if values sometimes lose formatting without changing.
      // For now, we only act on actual value changes to mirror S04 more closely.
    }
    // No calculateAll() here, rely on StateManager listeners.
  }

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
        if (cell.fieldId && cell.type) {
          // Create field definition with all relevant properties
          fields[cell.fieldId] = {
            type: cell.type,
            label: cell.content || row.label,
            defaultValue: cell.value || "",
            section: cell.section || "emissions",
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

        // Remove field-specific properties that aren't needed for rendering
        delete cell.getOptions;
        delete cell.section;
        delete cell.dependencies;

        rowDef.cells.push(cell);
      } else {
        // Add empty cell if not defined
        rowDef.cells.push({});
      }
    });

    return rowDef;
  }

  //==========================================================================
  // EVENT HANDLING AND CALCULATIONS
  //==========================================================================

  /**
   * Calculate the typology-based cap based on selected typology
   */
  function calculateTypologyBasedCap(typology) {
    // Logic based on provided formula:
    // =IF(D39="Pt.9 Res. Stick Frame",125,IF(D39="Pt.9 Small Mass Timber",250,IF(D39="Pt.3 Mass Timber",350,IF(D39="Pt.3 Concrete",550,IF(D39="Pt.3 Steel",650,IF(D39="Pt.3 Office",600,IF(D39="Modelled Value",I$41,"Pls. Select a Value")))))))

    if (typology === "Pt.9 Res. Stick Frame") {
      return 125;
    } else if (typology === "Pt.9 Small Mass Timber") {
      return 250;
    } else if (typology === "Pt.3 Mass Timber") {
      return 350;
    } else if (typology === "Pt.3 Concrete") {
      return 550;
    } else if (typology === "Pt.3 Steel") {
      return 650;
    } else if (typology === "Pt.3 Office") {
      return 600;
    } else if (typology === "Modelled Value") {
      // If "Modelled Value" is selected, use the value from i_41
      return getNumericValue("i_41", 0); // Use getNumericValue
    } else {
      // Default or if typology is not recognized (e.g., "Pls. Select a Value")
      return 0; // Or handle as appropriate, e.g., return null or a default cap
    }
  }

  /**
   * Calculate percentage of target achieved
   */
  function calculatePercentages() {
    // Get values using getNumericValue for robustness
    const typologyCap = getNumericValue("i_39", 350); // Default if i_39 not set
    const carbonTargetValue = getFieldValue("i_40"); // Get raw value to check for "N/A"
    const totalEmitted = getNumericValue("d_40", 0); // Default if d_40 not set or invalid
    const modelledValue = getNumericValue("i_41", 0); // Default if i_41 not set or invalid

    // Handle special case when carbon target is 'N/A'
    if (carbonTargetValue === "N/A") {
      setCalculatedValue("l_39", "N/A", "raw"); // Pass 'raw' or a specific N/A format if available
      setCalculatedValue("l_40", "N/A", "raw");
      setCalculatedValue("l_41", "N/A", "raw");
      return;
    }

    const carbonTarget = window.TEUI.parseNumeric(carbonTargetValue, 0); // Use global parseNumeric

    // Calculate percentages - ensure inputs to division are not zero where it makes sense
    const typologyPercentRaw =
      typologyCap !== 0 ? carbonTarget / typologyCap : 0;
    const targetPercentRaw =
      totalEmitted !== 0 ? carbonTarget / totalEmitted : 0;
    const modelledPercentRaw =
      carbonTarget !== 0 ? modelledValue / carbonTarget : 0;

    // Set calculated values using appropriate percentage format
    // The global formatter expects a fraction (e.g., 0.5 for 50%)
    setCalculatedValue("l_39", typologyPercentRaw, "percent-0dp");
    setCalculatedValue("l_40", targetPercentRaw, "percent-0dp");
    setCalculatedValue("l_41", modelledPercentRaw, "percent-0dp");
  }

  /**
   * Calculate GHGI operational values
   */
  function calculateGHGI() {
    // Get values using getNumericValue for robustness
    const d_14_value = getFieldValue("d_14") || "Utility Bills"; // Determine calculation method (string)
    const g_32_value = getNumericValue("g_32");
    const k_32_value = getNumericValue("k_32");
    const conditionedArea = getNumericValue("h_15", 1); // Avoid division by zero, default to 1 if not set

    const actual_g_32 = g_32_value;
    const actual_k_32 = k_32_value;

    const ghgiMT =
      d_14_value === "Utility Bills" ? actual_g_32 / 1000 : actual_k_32 / 1000;

    const emissionsKg =
      d_14_value === "Utility Bills" ? actual_g_32 : actual_k_32;

    const ghgiPerM2 = conditionedArea !== 0 ? emissionsKg / conditionedArea : 0;

    setCalculatedValue("d_38", ghgiMT, "number-2dp-comma"); // MT CO2e/yr
    setCalculatedValue("g_38", ghgiPerM2, "number-2dp-comma"); // kgCO2e/m2

    const serviceLife = getNumericValue("h_13", 50); // Default 50 years
    const lifetimeEmissions = ghgiPerM2 * serviceLife;
    setCalculatedValue("j_38", lifetimeEmissions, "number-2dp-comma"); // kgCO2e/m2 lifetime
  }

  /**
   * Calculate lifetime avoided emissions
   */
  function calculateLifetimeAvoided() {
    // This function seems to have placeholder logic ("referenceLifetimeEmissions = lifetimeEmissions * 5;")
    // We will keep the logic but ensure it uses new helpers.
    const lifetimeEmissions = getNumericValue("j_38", 0);
    // const embeddedCarbon = getNumericValue("d_40", 0); // This was in original but not used in calc

    // Original S05 used `toFixed(2)` which implies a numeric result desired.
    // Placeholder logic:
    const referenceLifetimeEmissions = lifetimeEmissions * 5;
    const avoidedEmissions = referenceLifetimeEmissions - lifetimeEmissions;

    setCalculatedValue("d_41", avoidedEmissions, "number-2dp-comma");
  }

  /**
   * Calculate Lifetime Operational kgCO2e/m2 (i_38 = g_38 * h_13)
   */
  function calculate_i_38() {
    const g_38_value = getNumericValue("g_38", 0); // Annual GHGI kgCO2e/m2
    const h_13_value = getNumericValue("h_13", 50); // Service Life (yrs)

    const i_38_result = g_38_value * h_13_value;
    setCalculatedValue("i_38", i_38_result, "number-2dp-comma");
  }

  /**
   * Calculate Target kgCO2e/m2 (i_40 = d_16)
   * This maintains Excel parity where i_40 comes from Section 2's d_16
   * Note: d_16 and i_39 should be functionally equivalent to prevent circular references
   */
  function calculate_i_40() {
    const d_16_value_raw = getFieldValue("d_16"); // Get raw to check "N/A"

    if (d_16_value_raw === "N/A") {
      setCalculatedValue("i_40", "N/A", "raw");
    } else {
      const numericValue = getNumericValue("d_16", 0);
      setCalculatedValue("i_40", numericValue, "number-2dp-comma");
    }
  }

  /**
   * Calculate Total Embedded MT CO2e (d_40 = i_41 * d_106 / 1000)
   */
  function calculate_d_40() {
    const i_41_value = getNumericValue("i_41", 0); // Modelled Value kgCO2e/m2
    const d_106_value = getNumericValue("d_106", 0); // Total Floor Area m2

    const d_40_result = (i_41_value * d_106_value) / 1000; // Result in MT CO2e
    setCalculatedValue("d_40", d_40_result, "number-2dp-comma");
  }

  /**
   * Calculate Lifetime Avoided MT CO2e (d_41 = (REFERENCE_D38 - d_38) * h_13)
   * Uses a placeholder for the reference value until DeepState is implemented.
   */
  function calculate_d_41() {
    // Placeholder for REFERENCE_D38
    const reference_d_38_placeholder = getNumericValue("ref_d_38", 47.9209);

    const d_38_value = getNumericValue("d_38", 0); // Actual/Target MT CO2e/yr
    const h_13_value = getNumericValue("h_13", 50); // Service Life (yrs)

    const d_41_result = (reference_d_38_placeholder - d_38_value) * h_13_value;
    setCalculatedValue("d_41", d_41_result, "number-2dp-comma");
  }

  //==========================================================================
  // DUAL-ENGINE ARCHITECTURE
  //==========================================================================

  /**
   * REFERENCE MODEL ENGINE: Calculate i_39 using Reference state d_39
   */
  function calculateReferenceModel() {
    // Get Reference state building typology
    const refTypology =
      window.TEUI?.StateManager?.getReferenceValue("d_39") ||
      getFieldValue("d_39");

    if (refTypology) {
      const refCap = calculateTypologyBasedCap(refTypology);
      // Store Reference i_39 with ref_ prefix for Section 01 to use
      if (window.TEUI?.StateManager) {
        window.TEUI.StateManager.setValue(
          "ref_i_39",
          refCap.toString(),
          "calculated",
        );
      }
    }
  }

  /**
   * TARGET MODEL ENGINE: Calculate i_39 using Application state d_39
   */
  function calculateTargetModel() {
    // Get Application state building typology
    const appTypology =
      window.TEUI?.StateManager?.getApplicationValue("d_39") ||
      getFieldValue("d_39");

    if (appTypology) {
      const appCap = calculateTypologyBasedCap(appTypology);
      // Store Application i_39 normally
      setCalculatedValue("i_39", appCap, "number-2dp-comma");
    }
  }

  /**
   * Update i_39 for a specific mode (like S04's updateGridIntensityForMode)
   * @param {string} mode - 'application' or 'reference'
   */
  function updateI39ForMode(mode) {
    let typology;

    if (mode === "reference") {
      // Get Reference state typology
      typology =
        window.TEUI?.StateManager?.getReferenceValue("d_39") ||
        getFieldValue("d_39");
    } else {
      // Get Application state typology
      typology =
        window.TEUI?.StateManager?.getApplicationValue("d_39") ||
        getFieldValue("d_39");
    }

    const cap = calculateTypologyBasedCap(typology);

    if (mode === "reference") {
      // Store Reference i_39 with ref_ prefix
      if (window.TEUI?.StateManager) {
        window.TEUI.StateManager.setValue(
          "ref_i_39",
          cap.toString(),
          "calculated",
        );
      }

      // UPDATE UI IN REFERENCE MODE: If user is currently in Reference Mode, update the visible i_39 field
      if (window.TEUI?.ReferenceToggle?.isReferenceMode?.()) {
        const i39Element = document.querySelector('[data-field-id="i_39"]');
        if (i39Element) {
          i39Element.textContent = window.TEUI.formatNumber(
            cap,
            "number-2dp-comma",
          );
        }
      }
    } else {
      // Update the application i_39 field
      setCalculatedValue("i_39", cap, "number-2dp-comma");
    }
  }

  /**
   * Update i_39 display based on current mode (wrapper function)
   * Shows Reference value in Reference Mode, Application value in Design Mode
   */
  function updateI39Display() {
    const isReferenceMode =
      window.TEUI?.ReferenceToggle?.isReferenceMode?.() || false;
    updateI39ForMode(isReferenceMode ? "reference" : "application");
  }

  /**
   * Calculate all values for this section
   */
  function calculateAll() {
    // Run both engines
    calculateReferenceModel(); // Calculate Reference i_39 using Reference d_39
    calculateTargetModel(); // Calculate Target i_39 using Application d_39

    // Update i_39 display based on current mode
    updateI39Display();

    // Continue with other calculations that use Application state
    calculateGHGI();
    calculate_i_38();
    calculate_i_40();
    calculate_d_40();
    calculate_d_41();

    calculatePercentages();
  }

  /**
   * Initialize all event handlers for this section
   */
  function initializeEventHandlers() {
    // Standard event handlers for editable numeric fields
    editableFields.forEach((fieldId) => {
      const field = document.querySelector(`[data-field-id="${fieldId}"]`);
      // Attach listeners only to fields found and marked as user-input (implies editable)
      if (field && field.classList.contains("user-input")) {
        if (!field.hasEditableListeners) {
          // Prevent adding multiple listeners
          field.addEventListener("keydown", (e) => {
            if (e.key === "Enter") {
              e.preventDefault();
              e.stopPropagation(); // Added stopPropagation
              field.blur();
            }
          });
          field.addEventListener("blur", handleEditableBlur.bind(field)); // Ensure 'this' context
          // Optional: Add focus/focusout for styling if needed, like in Section 11
          field.addEventListener("focus", () => {
            field.classList.add("editing");
            field.dataset.originalValue = field.textContent.trim(); // Store original value on focus
          });
          field.addEventListener("focusout", () =>
            field.classList.remove("editing"),
          );
          field.hasEditableListeners = true; // Mark as listener attached
        }
      } else {
        // console.warn(`Editable field ${fieldId} not found or not marked as 'user-input' in Section 05.`);
      }
    });

    // Typology dropdown change handler - simplified like S04 pattern
    const typologyDropdown = document.querySelector(
      '[data-field-id="d_39"], [data-dropdown-id="dd_d_39"]',
    );
    if (typologyDropdown) {
      typologyDropdown.addEventListener("change", function (e) {
        const typology = e.target.value;

        // Check if we're in Reference Mode
        const isReferenceMode =
          window.TEUI?.ReferenceToggle?.isReferenceMode?.() || false;

        if (isReferenceMode) {
          // In Reference Mode: Update Reference state only
          if (window.TEUI?.StateManager?.setValueInReferenceMode) {
            window.TEUI.StateManager.setValueInReferenceMode("d_39", typology);
          }
        } else {
          // In Design Mode: Update Application state
          if (window.TEUI?.StateManager) {
            window.TEUI.StateManager.setValue(
              "d_39",
              typology,
              "user-modified",
            );
          }
        }

        // Update i_39 for current mode (like S04's updateElectricityEmissionFactor)
        updateI39ForMode(isReferenceMode ? "reference" : "application");
      });
    }

    // Add listener for i_41 changes IF Modelled Value is selected in d_39
    if (window.TEUI.StateManager) {
      window.TEUI.StateManager.addListener("i_41", function (newValue) {
        const currentTypology = getFieldValue("d_39");
        if (currentTypology === "Modelled Value") {
          const cap = window.TEUI.parseNumeric(newValue, 0); // Use global parse
          setCalculatedValue("i_39", cap, "number-2dp-comma");
        }
        calculateAll(); // Call calculateAll to ensure all dependent values are updated
      });

      // Listen for changes in related fields from other sections (PLACEHOLDERS - Need Update)
      // TODO: Add listeners for d_14, g_32, k_32, h_15, h_13, d_106, REFERENCE!D38, T40

      // Listen for changes to service life (h_13 affects i_38 and d_41)
      window.TEUI.StateManager.addListener("h_13", function () {
        calculateAll();
      });

      // Listen for changes affecting d_38 (which then affects d_41)
      // Note: d_38 depends on d_14, g_32, k_32. g_38 depends on d_14, g_32, k_32, h_15.
      // We need listeners for all unique dependencies affecting d_38 and g_38.
      const ghgi_dependencies = ["d_14", "g_32", "k_32", "h_15"]; // Inputs for d_38/g_38
      ghgi_dependencies.forEach((depId) => {
        window.TEUI.StateManager.addListener(depId, function () {
          calculateAll();
        });
      });

      // Listen for changes to embodied carbon target (d_16 affects i_40)
      window.TEUI.StateManager.addListener("d_16", function () {
        calculateAll();
      });

      // Listener for i_41 already exists above, merged dependency recalculation.
      // The existing i_41 listener above already calls calculateAll()

      window.TEUI.StateManager.addListener("d_106", function () {
        calculateAll();
      });

      // CRITICAL: Listener for d_39 changes (like S04's h_12 listener)
      // This ensures i_39 updates when typology changes
      window.TEUI.StateManager.addListener("d_39", () => {
        // Update both Application and Reference i_39 values
        updateI39ForMode("application");
        updateI39ForMode("reference");

        // Recalculate percentages that depend on i_39
        calculatePercentages();
      });
    }
  }

  /**
   * Called when the section is rendered
   * This is a good place to initialize values and run initial calculations
   */
  function onSectionRendered() {
    // Initialize event handlers
    initializeEventHandlers();

    // Run initial calculations
    calculateAll();
  }

  //==========================================================================
  // PUBLIC API
  //==========================================================================

  return {
    // Field definitions and layout - REQUIRED
    getFields: getFields,
    getDropdownOptions: getDropdownOptions,
    getLayout: getLayout,

    // Event handling and initialization - REQUIRED
    initializeEventHandlers: initializeEventHandlers,
    onSectionRendered: onSectionRendered,

    // Section-specific utility functions - OPTIONAL
    calculateAll: calculateAll,
    calculateReferenceModel: calculateReferenceModel,
    calculateTargetModel: calculateTargetModel,
    updateI39Display: updateI39Display,
    updateI39ForMode: updateI39ForMode,
    calculateGHGI: calculateGHGI,
    calculate_i_38: calculate_i_38,
    calculate_i_40: calculate_i_40,
    calculate_d_40: calculate_d_40,
    calculate_d_41: calculate_d_41,
    calculatePercentages: calculatePercentages,
  };
})();
