/**
 * 4011-Section08.js
 * Indoor Air Quality (Section 8) module for TEUI Calculator 4.011
 *
 * Simple section with minimal calculations - streamlined implementation
 * Updated to support heating/cooling season RH sliders per Excel layout changes
 */

// Ensure namespace exists
window.TEUI = window.TEUI || {};
window.TEUI.SectionModules = window.TEUI.SectionModules || {};

// Section 8: Indoor Air Quality Module
window.TEUI.SectionModules.sect08 = (function () {
  // Define rows with integrated field definitions
  const sectionRows = {
    // UNIT SUBHEADER - MUST BE FIRST
    header: {
      id: "08-ID",
      rowId: "08-ID",
      label: "Indoor Air Quality Units",
      cells: {
        c: { content: "C", classes: ["section-subheader"] },
        d: { content: "Targeted", classes: ["section-subheader"] },
        e: { content: "E", classes: ["section-subheader"] },
        f: { content: "F", classes: ["section-subheader"] },
        g: { content: "G", classes: ["section-subheader"] },
        h: { content: "H", classes: ["section-subheader"] },
        i: { content: "I", classes: ["section-subheader"] },
        j: { content: "J", classes: ["section-subheader"] },
        k: { content: "Guidance Limits", classes: ["section-subheader"] }, // Moved from F
        l: { content: "L", classes: ["section-subheader"] },
        m: {
          content: "% per Health Canada/NBC",
          classes: ["section-subheader"],
        },
        n: { content: "Status", classes: ["section-subheader"] },
      },
    },

    // Row 56: A.2 Radon (annual avg.)
    56: {
      id: "A.2",
      rowId: "A.2",
      label: "Radon (annual avg.)",
      cells: {
        c: { label: "Radon (annual avg.)" },
        d: {
          fieldId: "d_56",
          type: "editable",
          value: "50", // Default raw value
          section: "indoorAirQuality",
          classes: ["user-input"],
        },
        e: { content: "Bq/m³" },
        k: {
          fieldId: "k_56",
          type: "calculated",
          value: "150", // Default raw value for the limit
          section: "indoorAirQuality",
        },
        l: { content: "Bq/m³" },
        m: {
          fieldId: "m_56",
          type: "calculated",
          value: "0%", // Default display
          section: "indoorAirQuality",
          dependencies: ["d_56", "k_56"],
        },
        n: {
          fieldId: "n_56",
          type: "calculated",
          value: "✓", // Default display
          classes: ["checkmark"],
          section: "indoorAirQuality",
          dependencies: ["d_56", "k_56"],
        },
      },
    },

    // Row 57: A.3 CO2 (annual avg.)
    57: {
      id: "A.3",
      rowId: "A.3",
      label: "CO2 (annual avg.)",
      cells: {
        c: { label: "CO2 (annual avg.)" },
        d: {
          fieldId: "d_57",
          type: "editable",
          value: "550", // Default raw value
          section: "indoorAirQuality",
          classes: ["user-input"],
        },
        e: { content: "ppm" },
        k: {
          fieldId: "k_57",
          type: "calculated",
          value: "1000", // Default raw value for the limit
          section: "indoorAirQuality",
        },
        l: { content: "ppm" },
        m: {
          fieldId: "m_57",
          type: "calculated",
          value: "0%", // Default display
          section: "indoorAirQuality",
          dependencies: ["d_57", "k_57"],
        },
        n: {
          fieldId: "n_57",
          type: "calculated",
          value: "✓", // Default display
          classes: ["checkmark"],
          section: "indoorAirQuality",
          dependencies: ["d_57", "k_57"],
        },
      },
    },

    // Row 58: A.4 TVOC (annual avg.)
    58: {
      id: "A.4",
      rowId: "A.4",
      label: "TVOC (annual avg.)",
      cells: {
        c: { label: "TVOC (annual avg.)" },
        d: {
          fieldId: "d_58",
          type: "editable",
          value: "100", // Default raw value
          section: "indoorAirQuality",
          classes: ["user-input"],
        },
        e: { content: "ppm" },
        k: {
          fieldId: "k_58",
          type: "calculated",
          value: "400", // Default raw value for the limit
          section: "indoorAirQuality",
        },
        l: { content: "ppm" },
        m: {
          fieldId: "m_58",
          type: "calculated",
          value: "0%", // Default display
          section: "indoorAirQuality",
          dependencies: ["d_58", "k_58"],
        },
        n: {
          fieldId: "n_58",
          type: "calculated",
          value: "✓", // Default display
          classes: ["checkmark"],
          section: "indoorAirQuality",
          dependencies: ["d_58", "k_58"],
        },
      },
    },

    // Row 59: A.5.1 Rel. Indoor Humidity Heating Season Avg.
    59: {
      id: "A.5.1",
      rowId: "A.5.1",
      label: "Rel. Indoor Humidity Heating Season Avg.",
      cells: {
        c: { label: "Rel. Indoor Humidity Heating Season Avg." },
        d: {
          fieldId: "d_59",
          type: "percentage",
          value: "45", // Default raw value (slider 0-100)
          min: 0,
          max: 100,
          step: 1,
          section: "indoorAirQuality",
          classes: ["user-input"], // FieldManager will create slider
        },
        e: { content: "% RH" },
        f: { content: "A.5.2" }, // ID for cooling season
        g: { label: "" },
        h: { content: "Rel. Indoor Humidity Cooling Season Avg." }, // Empty for now
        i: {
          fieldId: "i_59",
          type: "percentage",
          value: "45", // Default raw value (slider 0-100) - same as heating for now
          min: 0,
          max: 100,
          step: 1,
          section: "indoorAirQuality",
          classes: ["user-input"], // FieldManager will create slider
        },
        j: { content: "% RH" },
        k: {
          fieldId: "k_59",
          type: "calculated",
          value: "30-60", // String range, handle as raw
          section: "indoorAirQuality",
        },
        l: { content: "%" },
        m: {
          fieldId: "m_59",
          type: "calculated",
          value: "0%", // Default display
          section: "indoorAirQuality",
          dependencies: ["d_59", "i_59", "k_59"],
        },
        n: {
          fieldId: "n_59",
          type: "calculated",
          value: "✓", // Default display
          classes: ["checkmark"],
          section: "indoorAirQuality",
          dependencies: ["d_59", "i_59", "k_59"],
        },
      },
    },

    // Row 60: A.6 Atmospheric Offsets - Now Calculated Wood Offset
    60: {
      id: "A.6",
      rowId: "A.6",
      label: "Wood Emissions Offset (Calculated)", // Updated label
      cells: {
        c: { label: "Wood Emissions Offset (Calculated from Target Wood Use)" }, // Updated descriptive label
        d: {
          fieldId: "d_60",
          type: "calculated", // Changed from editable
          value: "0.00",
          section: "indoorAirQuality",
          dependencies: ["d_31", "k_31"], // Dependencies from S04
        },
        e: { content: "MT/yr CO2e" },
      },
    },
  };

  /**
   * Return field definitions extracted from sectionRows
   */
  function getFields() {
    const fields = {};

    Object.entries(sectionRows).forEach(([rowKey, row]) => {
      if (rowKey === "header") return; // Skip header row

      Object.entries(row.cells || {}).forEach(([colKey, cell]) => {
        if (cell.fieldId && cell.type) {
          fields[cell.fieldId] = {
            type: cell.type,
            label: cell.label || row.label,
            defaultValue: cell.value || "",
            section: cell.section || "indoorAirQuality",
          };

          // Copy additional properties if present
          if (cell.dropdownId)
            fields[cell.fieldId].dropdownId = cell.dropdownId;
          if (cell.options) fields[cell.fieldId].options = cell.options;
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
   * Return dropdown options (empty for this section)
   */
  function getDropdownOptions() {
    return {}; // No dropdowns in this section
  }

  /**
   * Generate layout for rendering
   */
  function getLayout() {
    const layoutRows = [];

    // Add header row first
    if (sectionRows.header) {
      layoutRows.push(createLayoutRow(sectionRows.header));
    }

    // Add data rows
    Object.entries(sectionRows).forEach(([key, row]) => {
      if (key !== "header") {
        layoutRows.push(createLayoutRow(row));
      }
    });

    return { rows: layoutRows };
  }

  /**
   * Helper to create a layout row
   */
  function createLayoutRow(row) {
    const rowDef = {
      id: row.id,
      cells: [
        {}, // Empty column A
        {}, // ID column B (auto-populated)
      ],
    };

    // Add cells C through O (extended for new layout)
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
      "o",
    ];

    columns.forEach((col) => {
      if (row.cells && row.cells[col]) {
        // Create cell definition
        const cell = { ...row.cells[col] };

        // Handle column C specially for labels
        if (col === "c") {
          if (!cell.label && row.label) {
            cell.label = row.label;
          }
        }

        // Remove properties not needed for rendering
        delete cell.section;
        delete cell.dependencies;

        rowDef.cells.push(cell);
      } else {
        // Add empty cell or label for column C
        if (col === "c" && !row.cells?.c && row.label) {
          rowDef.cells.push({ label: row.label });
        } else {
          rowDef.cells.push({});
        }
      }
    });

    return rowDef;
  }

  /**
   * Calculate percentages and set status indicators (checkmarks or X)
   */
  function calculatePercentagesAndStatus() {
    // Calculate Radon percentage and status
    const radonValue = getNumericValue("d_56", 0);
    const radonLimit = getNumericValue("k_56", 150);
    let radonPercentRaw = 0;
    if (radonLimit > 0) {
      radonPercentRaw = radonValue / radonLimit;
      setCalculatedValue("m_56", radonPercentRaw, "percent-0dp");

      if (radonValue <= radonLimit) {
        setCalculatedValue("n_56", "✓", "raw");
        setElementClass("n_56", "checkmark");
      } else {
        setCalculatedValue("n_56", "✗", "raw");
        setElementClass("n_56", "warning");
      }
    } else {
      setCalculatedValue("m_56", 0, "percent-0dp");
      setCalculatedValue("n_56", "-", "raw");
      setElementClass("n_56", null);
    }

    // Calculate CO2 percentage and status
    const co2Value = getNumericValue("d_57", 0);
    const co2Limit = getNumericValue("k_57", 1000);
    let co2PercentRaw = 0;
    if (co2Limit > 0) {
      co2PercentRaw = co2Value / co2Limit;
      setCalculatedValue("m_57", co2PercentRaw, "percent-0dp");

      if (co2Value <= co2Limit) {
        setCalculatedValue("n_57", "✓", "raw");
        setElementClass("n_57", "checkmark");
      } else {
        setCalculatedValue("n_57", "✗", "raw");
        setElementClass("n_57", "warning");
      }
    } else {
      setCalculatedValue("m_57", 0, "percent-0dp");
      setCalculatedValue("n_57", "-", "raw");
      setElementClass("n_57", null);
    }

    // Calculate TVOC percentage and status
    const tvocValue = getNumericValue("d_58", 0);
    const tvocLimit = getNumericValue("k_58", 400);
    let tvocPercentRaw = 0;
    if (tvocLimit > 0) {
      tvocPercentRaw = tvocValue / tvocLimit;
      setCalculatedValue("m_58", tvocPercentRaw, "percent-0dp");

      if (tvocValue <= tvocLimit) {
        setCalculatedValue("n_58", "✓", "raw");
        setElementClass("n_58", "checkmark");
      } else {
        setCalculatedValue("n_58", "✗", "raw");
        setElementClass("n_58", "warning");
      }
    } else {
      setCalculatedValue("m_58", 0, "percent-0dp");
      setCalculatedValue("n_58", "-", "raw");
      setElementClass("n_58", null);
    }

    // Calculate Humidity percentage and status (now considers both heating and cooling season)
    const heatingHumidityValue = getNumericValue("d_59", 0); // d_59 is heating season percentage 0-100 from slider
    const coolingHumidityValue = getNumericValue("i_59", 0); // i_59 is cooling season percentage 0-100 from slider
    const humidityLimitRaw = getFieldValue("k_59") || "30-60"; // String "30-60"

    let minHumidity = 30;
    let maxHumidity = 60;
    if (
      typeof humidityLimitRaw === "string" &&
      humidityLimitRaw.includes("-")
    ) {
      const parts = humidityLimitRaw
        .split("-")
        .map((v) => window.TEUI.parseNumeric(v.trim(), NaN));
      if (!isNaN(parts[0]) && !isNaN(parts[1])) {
        minHumidity = parts[0];
        maxHumidity = parts[1];
      }
    }

    // Use average of heating and cooling season for overall assessment
    const averageHumidity = (heatingHumidityValue + coolingHumidityValue) / 2;
    const middleOfRange = (minHumidity + maxHumidity) / 2;
    let humidityPercentRaw = 0;
    if (middleOfRange > 0) {
      // Average humidity compared to middle of acceptable range
      humidityPercentRaw = averageHumidity / middleOfRange;
    }
    setCalculatedValue("m_59", humidityPercentRaw, "percent-0dp");

    // Pass if both heating and cooling season values are within range
    const heatingInRange =
      heatingHumidityValue >= minHumidity &&
      heatingHumidityValue <= maxHumidity;
    const coolingInRange =
      coolingHumidityValue >= minHumidity &&
      coolingHumidityValue <= maxHumidity;

    if (heatingInRange && coolingInRange) {
      setCalculatedValue("n_59", "✓", "raw");
      setElementClass("n_59", "checkmark");
    } else {
      setCalculatedValue("n_59", "✗", "raw");
      setElementClass("n_59", "warning");
    }
  }

  /**
   * NEW: Calculate Wood Emissions Offset (d_60)
   * Formula: =IF(D31 > 0, K31/1000, 0)
   */
  function calculateD60_WoodOffset() {
    const d31_actualWoodUse_m3 = getNumericValue("d_31"); // From S04
    const k31_targetWoodEmissions_kg = getNumericValue("k_31"); // From S04 ( H31*L31 )

    let d60_offset_MT = 0;
    if (d31_actualWoodUse_m3 > 0) {
      d60_offset_MT = k31_targetWoodEmissions_kg / 1000;
    }
    setCalculatedValue("d_60", d60_offset_MT, "number-2dp-comma");
    return d60_offset_MT;
  }

  /**
   * Helper function to get a field value
   */
  function getFieldValue(fieldId) {
    if (
      window.TEUI &&
      window.TEUI.StateManager &&
      typeof window.TEUI.StateManager.getValue === "function"
    ) {
      const value = window.TEUI.StateManager.getValue(fieldId);
      if (value !== null && value !== undefined) {
        return String(value);
      }
    }
    const element = document.querySelector(`[data-field-id="${fieldId}"]`);
    if (element) {
      return element.value !== undefined
        ? String(element.value)
        : String(element.textContent);
    }
    return null;
  }

  function getNumericValue(fieldId, defaultValue = 0) {
    const rawValue = getFieldValue(fieldId);
    if (window.TEUI && typeof window.TEUI.parseNumeric === "function") {
      return window.TEUI.parseNumeric(rawValue, defaultValue);
    }
    const parsed = parseFloat(rawValue);
    return isNaN(parsed) ? defaultValue : parsed;
  }

  /**
   * Helper function to set a calculated field value
   * Updated for V2 dual-engine architecture using setDualEngineValue
   */
  function setCalculatedValue(fieldId, rawValue, formatType = "number-0dp") {
    // Default to 0dp for this section unless specified
    // Handle special cases for raw strings like checkmarks
    if (
      formatType === "raw" ||
      rawValue === "N/A" ||
      typeof rawValue === "string"
    ) {
      const element = document.querySelector(`[data-field-id="${fieldId}"]`);
      if (element) {
        element.textContent = String(rawValue);
      }
      if (window.TEUI?.StateManager?.setValue) {
        window.TEUI.StateManager.setValue(
          fieldId,
          String(rawValue),
          "calculated",
        );
      }
      return;
    }

    // For numeric values, use V2 dual-engine setter
    const numericValue =
      typeof rawValue === "number"
        ? rawValue
        : window.TEUI?.parseNumeric?.(rawValue, 0) || 0;
    setDualEngineValue(fieldId, numericValue, formatType);
  }

  //==========================================================================
  // V2 DUAL-ENGINE HELPER FUNCTIONS (Copy from Section 07 Template)
  //==========================================================================

  // 1. Mode-aware value getter
  function getRefFieldValue(fieldId) {
    if (window.TEUI?.ReferenceToggle?.isReferenceMode?.()) {
      return (
        window.TEUI.StateManager?.getReferenceValue?.(fieldId) ||
        getFieldValue(fieldId)
      );
    } else {
      return getFieldValue(fieldId);
    }
  }

  // 2. Application value getter
  function getAppFieldValue(fieldId) {
    return (
      window.TEUI.StateManager?.getApplicationValue?.(fieldId) ||
      getFieldValue(fieldId)
    );
  }

  // 3. Dual-engine value setter
  function setDualEngineValue(fieldId, rawValue, formatType = "number-0dp") {
    const isReferenceMode =
      window.TEUI?.ReferenceToggle?.isReferenceMode?.() || false;

    if (isReferenceMode) {
      // Reference Mode - store with ref_ prefix using new V2 API
      if (window.TEUI?.StateManager?.setReferenceValue) {
        window.TEUI.StateManager.setReferenceValue(
          `ref_${fieldId}`,
          rawValue.toString(),
          "calculated-reference",
        );
      }
    } else {
      // Application Mode - store in main state using new V2 API
      if (window.TEUI?.StateManager?.setApplicationValue) {
        window.TEUI.StateManager.setApplicationValue(
          fieldId,
          rawValue.toString(),
          "calculated",
        );
      }
    }

    // Update DOM with proper formatting
    let formattedValue;
    if (formatType.startsWith("percent")) {
      // Global formatter expects a fraction for percent types
      formattedValue =
        window.TEUI?.formatNumber?.(rawValue, formatType) ??
        rawValue?.toString() ??
        "N/A";
    } else {
      formattedValue =
        window.TEUI?.formatNumber?.(rawValue, formatType) ??
        rawValue?.toString() ??
        "N/A";
    }

    const element = document.querySelector(`[data-field-id="${fieldId}"]`);
    if (element) {
      if (element.tagName === "SELECT" || element.tagName === "INPUT") {
        element.value = formattedValue;
      } else {
        element.textContent = formattedValue;
      }
    }
  }

  /**
   * Helper function to set element class
   */
  function setElementClass(fieldId, className) {
    const element = document.querySelector(`[data-field-id="${fieldId}"]`);
    if (element) {
      element.classList.remove("checkmark", "warning");
      if (className) {
        // Only add if a class is provided
        element.classList.add(className);
      }
    }
  }

  /**
   * Setup event handlers for this section
   */
  function initializeEventHandlers() {
    // Event handling for sliders will be managed by FieldManager

    const sectionElement = document.getElementById("indoorAirQuality");
    if (!sectionElement) return;

    const editableFields = sectionElement.querySelectorAll(
      '.user-input, [contenteditable="true"]',
    );
    editableFields.forEach((field) => {
      const fieldId = field.getAttribute("data-field-id");
      if (!fieldId) return;

      // Make text fields editable if they are not sliders
      if (
        field.classList.contains("user-input") &&
        !field.classList.contains("slider-cell") && // FieldManager handles slider display
        field.getAttribute("type") !== "percentage" && // FieldManager handles slider input
        field.tagName !== "SELECT"
      ) {
        field.setAttribute("contenteditable", "true");
      }

      // Handle blur event for actual editable text fields
      if (field.getAttribute("contenteditable") === "true") {
        field.addEventListener("blur", function () {
          const currentFieldId = this.getAttribute("data-field-id");
          let rawTextValue = this.textContent.trim();
          let numericValue = window.TEUI.parseNumeric(rawTextValue, NaN); // Parse first

          if (!isNaN(numericValue)) {
            // Store the raw numeric string in StateManager
            window.TEUI.StateManager.setValue(
              currentFieldId,
              numericValue.toString(),
              "user-modified",
            );
            // Update the display with formatting (default 0dp for this section as per old formatNumber logic)
            this.textContent = window.TEUI.formatNumber(
              numericValue,
              "number-0dp",
            );
          } else {
            // If not a valid number after parsing, store as is, display as is (or could default to 0)
            window.TEUI.StateManager.setValue(
              currentFieldId,
              rawTextValue,
              "user-modified",
            );
            this.textContent = rawTextValue; // Or window.TEUI.formatNumber(0, 'number-0dp');
          }
          calculateAllInternal();
        });
      }

      // Prevent newlines and handle Enter key in contenteditable fields
      if (field.getAttribute("contenteditable") === "true") {
        field.addEventListener("keydown", function (e) {
          if (e.key === "Enter") {
            e.preventDefault();
            this.blur();
          }
        });
      }

      // Add listener for StateManager changes for all user inputs to re-trigger calculations if needed
      // This is more for sliders/dropdowns handled by FieldManager or if state changes externally
      if (
        window.TEUI &&
        window.TEUI.StateManager &&
        (fieldId.startsWith("d_") || fieldId.startsWith("i_"))
      ) {
        // Include both d_ and i_ inputs
        window.TEUI.StateManager.addListener(
          fieldId,
          function (newValue, oldValue) {
            if (newValue !== oldValue) {
              // Only if value actually changed
              // For editable fields, the blur handler already calls calculatePercentagesAndStatus.
              // For sliders/dropdowns (d_59, i_59), this ensures calculation runs.
              if (fieldId === "d_59" || fieldId === "i_59") {
                // Specifically for the humidity sliders
                const displayElement = sectionElement.querySelector(
                  `[data-display-for="${fieldId}"]`,
                );
                if (displayElement) {
                  // Update slider display value if one exists
                  displayElement.textContent =
                    window.TEUI.formatNumber(
                      window.TEUI.parseNumeric(newValue, 0),
                      "number-0dp",
                    ) + "%";
                }
              }
              calculateAllInternal();
            }
          },
        );
      }
    });

    // Listen for S04 fields that affect d_60 (Wood Offset)
    if (window.TEUI && window.TEUI.StateManager) {
      window.TEUI.StateManager.addListener("d_31", calculateD60_WoodOffset);
      window.TEUI.StateManager.addListener("k_31", calculateD60_WoodOffset);
    }
  }

  /**
   * Main calculation function for the section that orchestrates all calculations.
   */
  function calculateAllInternal() {
    calculateD60_WoodOffset(); // Calculate wood offset first
    calculatePercentagesAndStatus(); // Then calculate IAQ percentages and statuses
  }

  /**
   * Called when section is rendered
   */
  function onSectionRendered() {
    // Add CSS for status indicators
    addStatusStyles();

    // Set initial values for calculated limits (k_56, k_57, k_58, k_59)
    // These are static but should be in StateManager and formatted in DOM
    setCalculatedValue("k_56", 150, "number-0dp");
    setCalculatedValue("k_57", 1000, "number-0dp");
    setCalculatedValue("k_58", 400, "number-0dp");
    setCalculatedValue("k_59", "30-60", "raw"); // This is a string range

    initializeEventHandlers();
    calculateAllInternal(); // Call the main orchestrator
  }

  /**
   * Add CSS styles for status indicators
   */
  function addStatusStyles() {
    // Only add styles if they don't already exist
    if (!document.getElementById("air-quality-status-styles")) {
      const styleElement = document.createElement("style");
      styleElement.id = "air-quality-status-styles";
      styleElement.textContent = `
                .checkmark {
                    color: #28a745 !important;
                    font-weight: bold;
                    font-size: 1.2em;
                }
                
                .warning {
                    color: #dc3545 !important;
                    font-weight: bold;
                    font-size: 1.2em;
                }
            `;
      document.head.appendChild(styleElement);
    }
  }

  // Return public API
  return {
    getFields,
    getDropdownOptions,
    getLayout,
    initializeEventHandlers,
    onSectionRendered,
    calculateAll: calculateAllInternal,
  };
})();
