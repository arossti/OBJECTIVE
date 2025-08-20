/**
 * 4011-Section02.js
 * Building Information (Section 2) module for TEUI Calculator 4.011
 *
 * This file contains field definitions, layout templates, and rendering logic
 * specific to the Building Information section.
 *
 * Refactored to use the consolidated declarative approach where field definitions
 * are integrated directly into the layout structure.
 */

// Create section-specific namespace for global references
window.TEUI = window.TEUI || {};
window.TEUI.sect02 = window.TEUI.sect02 || {};
window.TEUI.sect02.initialized = false;
window.TEUI.sect02.userInteracted = false;

// Section 2: Building Information Module
window.TEUI.SectionModules.sect02 = (function () {
  //==========================================================================
  // CONSOLIDATED FIELD DEFINITIONS AND LAYOUT
  //==========================================================================

  // Define rows with integrated field definitions
  const sectionRows = {
    // UNIT SUBHEADER - MUST COME FIRST
    header: {
      id: "02-ID",
      rowId: "02-ID",
      label: "Building Info Units",
      cells: {
        c: {
          content: "SECTION 02. Building Information",
          classes: ["section-header"],
        },
        d: { content: "", classes: ["section-subheader"] },
        e: { content: "", classes: ["section-subheader"] },
        f: { content: "", classes: ["section-subheader"] },
        g: { content: "", classes: ["section-subheader"] },
        h: { content: "", classes: ["section-subheader"] },
        i: { content: "", classes: ["section-subheader"] },
        j: { content: "", classes: ["section-subheader"] },
        k: { content: "", classes: ["section-subheader"] },
        l: {
          content: "T.10 Cost of Energy by Source",
          classes: ["section-subheader", "text-center"],
          colspan: 3,
        },
        m: { content: "" },
        n: { content: "" },
      },
    },

    // Row 12: B.1 Major Occupancy
    12: {
      id: "B.1",
      rowId: "B.1",
      label: "Major Occupancy",
      cells: {
        c: { label: "Major Occupancy" },
        d: {
          fieldId: "d_12",
          type: "dropdown",
          dropdownId: "dd_d_12",
          value: "A-Assembly",
          section: "buildingInfo",
          options: [
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
        e: { content: "" }, // Empty but needed for alignment
        f: {
          content: "D.1",
          classes: ["label-prefix", "text-right", "no-wrap"],
        },
        g: {
          content: "Reporting Period",
          classes: ["label-main", "text-left", "no-wrap"],
        },
        h: {
          fieldId: "h_12",
          type: "year_slider",
          value: "2022",
          min: 2015,
          max: 2041,
          step: 1,
          section: "buildingInfo",
          span: 2,
        },
        i: { content: "" }, // Empty but needed for alignment
        j: { content: "" }, // Empty but needed for alignment
        k: { content: "Electricity", classes: ["text-end"] },
        l: {
          fieldId: "l_12",
          type: "editable",
          value: "$0.1300",
          section: "buildingInfo",
        },
        m: { content: "/kWh", classes: ["text-start"] },
        n: { content: "" }, // Empty but needed for alignment
      },
    },

    // Row 13: S.1 Reference Standard
    13: {
      id: "S.1",
      rowId: "S.1",
      label: "Reference Standard",
      cells: {
        c: { label: "Reference Standard" },
        d: {
          fieldId: "d_13",
          type: "dropdown",
          dropdownId: "dd_d_13",
          value: "OBC SB10 5.5-6 Z6",
          section: "buildingInfo",
          options: [
            { value: "OBC SB12 3.1.1.2.C4", name: "OBC SB12 3.1.1.2.C4" },
            { value: "OBC SB12 3.1.1.2.C1", name: "OBC SB12 3.1.1.2.C1" },
            { value: "OBC SB12 3.1.1.2.A3", name: "OBC SB12 3.1.1.2.A3" },
            { value: "OBC SB10 5.5-6 Z6", name: "OBC SB10 5.5-6 Z6" },
            {
              value: "OBC SB10 5.5-6 Z5 (2010)",
              name: "OBC SB10 5.5-6 Z5 (2010)",
            },
            { value: "NBC T1", name: "NBC T1" },
            { value: "NECB T1 (Z6)", name: "NECB T1 (Z6)" },
            { value: "CaGBC ZCB", name: "CaGBC ZCB" },
            { value: "PH Classic", name: "PH Classic" },
            { value: "PH Plus", name: "PH Plus" },
            { value: "PH Premium", name: "PH Premium" },
            { value: "EnerPHit", name: "EnerPHit" },
            { value: "PH Low Energy", name: "PH Low Energy" },
            { value: "ADD YOUR OWN HERE", name: "ADD YOUR OWN HERE" },
          ],
        },
        e: { content: "" }, // Empty but needed for alignment
        f: {
          content: "D.2",
          classes: ["label-prefix", "text-right", "no-wrap"],
        },
        g: {
          content: "Service Life (yrs)",
          classes: ["label-main", "text-left", "no-wrap"],
        },
        h: {
          fieldId: "h_13",
          type: "year_slider",
          value: "50",
          min: 30,
          max: 100,
          step: 10,
          section: "buildingInfo",
          span: 2,
        },
        i: { content: "" }, // Empty but needed for alignment
        j: { content: "" }, // Empty but needed for alignment
        k: { content: "Gas", classes: ["text-end"] },
        l: {
          fieldId: "l_13",
          type: "editable",
          value: "$0.5070",
          section: "buildingInfo",
        },
        m: { content: "/m³", classes: ["text-start"] },
        n: { content: "" }, // Empty but needed for alignment
      },
    },

    // Row 14: S.2 Actual/Target Use
    14: {
      id: "S.2",
      rowId: "S.2",
      label: "Actual (Bills) or Targeted (Design) Use",
      cells: {
        c: { label: "Actual (Bills) or Targeted (Design) Use" },
        d: {
          fieldId: "d_14",
          type: "dropdown",
          dropdownId: "dd_d_14",
          value: "Utility Bills",
          section: "buildingInfo",
          options: [
            { value: "Targeted Use", name: "Targeted Use" },
            { value: "Utility Bills", name: "Utility Bills" },
          ],
        },
        e: { content: "" }, // Empty but needed for alignment
        f: {
          content: "B.2",
          classes: ["label-prefix", "text-right", "no-wrap"],
        },
        g: {
          content: "Project Name",
          classes: ["label-main", "text-left", "no-wrap"],
        },
        h: {
          fieldId: "h_14",
          type: "editable",
          value: "Three Feathers Terrace",
          classes: ["wide-text", "no-wrap"],
          section: "buildingInfo",
          span: 2,
        },
        i: { content: "" }, // Empty but needed for alignment
        j: { content: "" }, // Empty but needed for alignment
        k: { content: "Propane", classes: ["text-end"] },
        l: {
          fieldId: "l_14",
          type: "editable",
          value: "$1.6200",
          section: "buildingInfo",
        },
        m: { content: "/kg", classes: ["text-start"] },
        n: { content: "" }, // Empty but needed for alignment
      },
    },

    // Row 15: S.3 Carbon Standard
    15: {
      id: "S.3",
      rowId: "S.3",
      label: "Carbon Benchmarking Standard",
      cells: {
        c: { label: "Carbon Benchmarking Standard" },
        d: {
          fieldId: "d_15",
          type: "dropdown",
          dropdownId: "dd_d_15",
          value: "Self Reported",
          section: "buildingInfo",
          options: [
            { value: "BR18 (Denmark)", name: "BR18 (Denmark)" },
            { value: "IPCC AR6 EPC", name: "IPCC AR6 EPC" },
            { value: "IPCC AR6 EA", name: "IPCC AR6 EA" },
            { value: "TGS4", name: "TGS4" },
            { value: "CaGBC ZCB D", name: "CaGBC ZCB D" },
            { value: "CaGBC ZCB P", name: "CaGBC ZCB P" },
            { value: "Self Reported", name: "Self Reported" },
            { value: "Not Reported", name: "Not Reported" },
          ],
        },
        e: { content: "" }, // Empty but needed for alignment
        f: {
          content: "B.3",
          classes: ["label-prefix", "text-right", "no-wrap"],
        },
        g: {
          content: "Conditioned Area",
          classes: ["label-main", "text-left", "no-wrap"],
        }, // validate as (Net m²)
        h: {
          fieldId: "h_15",
          type: "editable", // *** REVERTED TO EDITABLE ***
          value: "1,427.20", // *** RESTORED value, ensure formatting is consistent ***
          classes: ["user-input", "editable"], // *** RESTORED classes ***
          // Removed editable_slider specific config
          section: "buildingInfo",
          // span: 2 // No longer spanning
        },
        i: {
          fieldId: "i_15_slider",
          type: "generic_slider",
          min: -500, // Adjustment range min (+/- 500)
          max: 500, // Adjustment range max (+/- 500)
          step: 10,
          value: "0",
          controlsField: "h_15",
          section: "buildingInfo",
          classes: ["area-adjust-slider"], // Optional class for specific styling
        },
        j: { content: "" }, // Empty but needed for alignment
        k: { content: "Wood", span: 2, classes: ["text-end"] }, // Restored: Wood label back in K, added span:2 to fix alignment
        l: {
          fieldId: "l_15",
          type: "editable",
          value: "$180.00",
          section: "buildingInfo",
        }, // Restored: Field l_15 back in L
        m: { content: "/m³", classes: ["text-start"] }, // Restored: Unit back in M
        n: { content: "" }, // Restored: N is empty
      },
    },

    // Row 16: S.4 Embodied Carbon Target
    16: {
      id: "S.4",
      rowId: "S.4",
      label: "Embodied Carbon Target (kgCO₂e/m²)",
      cells: {
        c: { label: "Embodied Carbon Target (kgCO₂e/m²)" },
        d: {
          fieldId: "d_16",
          type: "derived",
          value: "345.82",
          section: "buildingInfo",
        },
        e: { content: "" }, // Empty but needed for alignment
        f: {
          content: "A.1",
          classes: ["label-prefix", "text-right", "no-wrap"],
        },
        g: {
          content: "Certifier:",
          classes: ["label-main", "text-left", "no-wrap"],
        },
        h: {
          fieldId: "i_16",
          type: "editable",
          value: "Thomson Architecture, Inc.",
          section: "buildingInfo",
          span: 2,
        },
        i: { content: "" }, // Empty but needed for alignment
        j: { content: "" }, // Empty but needed for alignment
        k: { content: "Oil", classes: ["text-end"] },
        l: {
          fieldId: "l_16",
          type: "editable",
          value: "$1.5000",
          section: "buildingInfo",
        },
        m: { content: "/litre", classes: ["text-start"] },
        n: { content: "" }, // Empty but needed for alignment
      },
    },

    // Row 17: License Number
    17: {
      id: "L",
      rowId: "L",
      label: "",
      cells: {
        c: { content: "" }, // Empty but needed for alignment
        d: { content: "" }, // Empty but needed for alignment
        e: { content: "" }, // Empty but needed for alignment
        f: {
          content: "A.2",
          classes: ["label-prefix", "text-right", "no-wrap"],
        },
        g: {
          content: "Licence No:",
          classes: ["label-main", "text-left", "no-wrap"],
        },
        h: {
          fieldId: "i_17",
          type: "editable",
          value: "8154",
          section: "buildingInfo",
          span: 2,
        },
        i: { content: "" }, // Empty but needed for alignment
        j: { content: "" }, // Empty but needed for alignment
        k: { content: "" }, // Empty but needed for alignment
        l: { content: "" }, // Empty but needed for alignment
        m: { content: "" }, // Empty but needed for alignment
        n: { content: "" }, // Empty but needed for alignment
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
        if (cell.fieldId && cell.type) {
          // Create field definition with all relevant properties
          fields[cell.fieldId] = {
            type: cell.type,
            label: cell.label || row.label,
            defaultValue: cell.value || "",
            section: cell.section || "buildingInfo",
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
  // EVENT HANDLING AND CALCULATIONS
  //==========================================================================

  /**
   * Helper function to safely get numeric values with proper comma handling.
   * STANDARD MODE-AWARE PATTERN
   * This function reads from the correct state (`target_` or `ref_`) based on the current mode.
   */
  function getNumericValue(fieldId, defaultValue = 0) {
    const prefix = ModeManager.currentMode === "target" ? "target_" : "ref_";
    const prefixedFieldId = `${prefix}${fieldId}`;

    // First, try to get the mode-specific value.
    let rawValue = window.TEUI?.StateManager?.getValue(prefixedFieldId);

    // If the mode-specific value is not found, fall back to the global value.
    // This is crucial for handling dependencies from sections not yet fully refactored.
    if (rawValue === null || rawValue === undefined) {
      rawValue = window.TEUI?.StateManager?.getValue(fieldId);
    }

    return window.TEUI?.parseNumeric?.(rawValue, defaultValue) ?? defaultValue;
  }

  /**
   * Helper function to set a calculated value in the StateManager and update the DOM.
   * STANDARD MODE-AWARE PATTERN
   * This function writes to the correct state and only updates the global (unprefixed)
   * state when in 'target' mode to prevent state contamination.
   */
  function setFieldValue(fieldId, value, fieldType = "calculated") {
    const modePrefix =
      ModeManager.currentMode === "target" ? "target_" : "ref_";
    const prefixedFieldId = `${modePrefix}${fieldId}`;

    // Always store with prefix for dual-state isolation.
    if (window.TEUI?.StateManager) {
      window.TEUI.StateManager.setValue(
        prefixedFieldId,
        value.toString(),
        fieldType,
      );
    }

    // CRITICAL: Only update the global state (for DOM binding) when in target mode.
    if (ModeManager.currentMode === "target") {
      if (window.TEUI?.StateManager) {
        window.TEUI.StateManager.setValue(fieldId, value.toString(), fieldType);
      }
    }

    // Update DOM with formatted value.
    // Special handling for 'N/A' values - don't try to format them.
    const formattedValue =
      value === "N/A"
        ? "N/A"
        : (window.TEUI?.formatNumber?.(value, "number-2dp-comma") ??
          value.toString());

    const element = document.querySelector(`[data-field-id="${fieldId}"]`);
    if (element) {
      if (element.tagName === "SELECT" || element.tagName === "INPUT") {
        element.value = value;
      } else {
        element.textContent = formattedValue;
      }
    }
  }

  /**
   * Register calculations with StateManager
   * This is the standard approach from other working sections
   */
  function registerCalculations() {
    if (!window.TEUI || !window.TEUI.StateManager) {
      return;
    }

    try {
      // Register dependencies - these must be registered AFTER the calculation
      window.TEUI.StateManager.registerDependency("d_15", "d_16"); // d_16 depends on the standard selected
      window.TEUI.StateManager.registerDependency("i_41", "d_16"); // d_16 depends on i_41 when standard is 'Self Reported' or default
      window.TEUI.StateManager.registerDependency("i_39", "d_16"); // d_16 depends on i_39 when standard is 'TGS4'
    } catch (_error) {
      // console.warn("Error registering calculations:", _error);
    }
  }

  //==========================================================================
  // DUAL-ENGINE ARCHITECTURE
  //==========================================================================

  /**
   * Inject Target/Reference toggle controls into section header
   * Standard Pattern A implementation
   */
  function injectHeaderControls() {
    const sectionHeader = document.querySelector(
      "#buildingInfo .section-header",
    );
    if (
      !sectionHeader ||
      sectionHeader.querySelector(".local-controls-container")
    ) {
      return; // Already setup or header not found
    }

    // Create controls container
    const controlsContainer = document.createElement("div");
    controlsContainer.className = "local-controls-container";
    controlsContainer.style.cssText =
      "display: flex; align-items: center; gap: 10px; margin-left: auto;";

    // Create Reset button
    const resetButton = document.createElement("button");
    resetButton.textContent = "Reset";
    resetButton.style.cssText =
      "padding: 4px 8px; font-size: 12px; border: 1px solid #ccc; background: white; cursor: pointer; border-radius: 3px;";
    resetButton.addEventListener("click", (event) => {
      event.stopPropagation();
      if (confirm("Reset all values to defaults?")) {
        TargetState.setDefaults();
        ReferenceState.setDefaults();
        ModeManager.refreshUI();
        console.log("S02: Reset to defaults");
      }
    });

    // Create state indicator
    const stateIndicator = document.createElement("div");
    stateIndicator.textContent = "TARGET";
    stateIndicator.style.cssText =
      "padding: 4px 8px; font-size: 12px; font-weight: bold; color: white; background-color: rgba(0, 123, 255, 0.5); border-radius: 3px;";

    // Create toggle switch
    const toggleSwitch = document.createElement("div");
    toggleSwitch.style.cssText =
      "position: relative; width: 40px; height: 20px; background-color: #ccc; border-radius: 10px; cursor: pointer;";

    const slider = document.createElement("div");
    slider.style.cssText =
      "position: absolute; top: 2px; left: 2px; width: 16px; height: 16px; background-color: white; border-radius: 50%; transition: transform 0.2s;";

    toggleSwitch.appendChild(slider);

    // Toggle Switch Click Handler
    toggleSwitch.addEventListener("click", (event) => {
      event.stopPropagation();
      const isReference = toggleSwitch.classList.toggle("active");
      if (isReference) {
        slider.style.transform = "translateX(20px)";
        toggleSwitch.style.backgroundColor = "#28a745";
        stateIndicator.textContent = "REFERENCE";
        stateIndicator.style.backgroundColor = "rgba(40, 167, 69, 0.7)";
        ModeManager.switchMode("reference");
      } else {
        slider.style.transform = "translateX(0px)";
        toggleSwitch.style.backgroundColor = "#ccc";
        stateIndicator.textContent = "TARGET";
        stateIndicator.style.backgroundColor = "rgba(0, 123, 255, 0.5)";
        ModeManager.switchMode("target");
      }
    });

    // Assemble controls
    controlsContainer.appendChild(resetButton);
    controlsContainer.appendChild(stateIndicator);
    controlsContainer.appendChild(toggleSwitch);
    sectionHeader.appendChild(controlsContainer);

    console.log("✅ S02: Header controls injected successfully");
  }

  /**
   * REFERENCE MODEL ENGINE: Calculate all values using Reference state.
   * STANDARD MODE-AWARE PATTERN.
   * Stores results with ref_ prefix to keep separate from Target values.
   */
  function calculateReferenceModel() {
    const originalMode = ModeManager.currentMode;
    ModeManager.currentMode = "reference"; // Directly set mode without triggering switchMode

    try {
      // ✅ CRITICAL FIX: Read from sovereign ReferenceState, not global StateManager with prefixes
      const carbonStandard = ReferenceState.getValue("d_15") || "Self Reported";

      // For external dependencies (from other sections), still use getNumericValue fallback
      const modelledValueI41 = getNumericValue("i_41", 345.82);

      if (carbonStandard === "Not Reported") {
        setFieldValue("d_16", "N/A", "calculated");
        return;
      }

      if (carbonStandard === "TGS4") {
        const tgs4Value = getNumericValue("i_39", 0);
        setFieldValue("d_16", tgs4Value, "calculated");
        return;
      }

      const AR6_EPC_K5 = 3.39;
      const AR6_EA_L5 = 0.17;

      let targetValue;
      switch (carbonStandard) {
        case "BR18 (Denmark)":
          targetValue = 500;
          break;
        case "IPCC AR6 EPC":
          targetValue = AR6_EPC_K5;
          break;
        case "IPCC AR6 EA":
          targetValue = AR6_EA_L5;
          break;
        case "CaGBC ZCB D":
          targetValue = 425;
          break;
        case "CaGBC ZCB P":
          targetValue = 425;
          break;
        case "Self Reported":
          targetValue = modelledValueI41;
          break;
        default:
          targetValue = modelledValueI41;
      }
      setFieldValue("d_16", targetValue, "calculated");

      // Store Reference results for downstream sections
      storeReferenceResults();
    } catch (error) {
      console.error(
        "[Section02] Error in Reference Model calculations:",
        error,
      );
    } finally {
      ModeManager.currentMode = originalMode; // Restore original mode directly
    }
  }

  /**
   * Store Reference calculation results with ref_ prefix for downstream sections
   */
  function storeReferenceResults() {
    if (!window.TEUI?.StateManager) return;

    // Store Reference values for downstream consumption
    const referenceResults = {
      h_12: ReferenceState.getValue("h_12"), // 2020 reporting year
      h_13: ReferenceState.getValue("h_13"), // ✅ CRITICAL FIX: Service life (was missing!)
      d_13: ReferenceState.getValue("d_13"), // OBC SB10 5.5-6 Z5 (2010)
      d_15: ReferenceState.getValue("d_15"), // Carbon standard
      h_15: ReferenceState.getValue("h_15"), // Building area
      l_12: ReferenceState.getValue("l_12"), // Electricity price
      l_13: ReferenceState.getValue("l_13"), // Gas price
      l_14: ReferenceState.getValue("l_14"), // Oil price
      l_15: ReferenceState.getValue("l_15"), // Propane price
      l_16: ReferenceState.getValue("l_16"), // Wood price
    };
    
    // [S02DB] Targeted logging for critical Reference parameters
    try {
      console.log(
        "[S02DB] storeReference: ref_h_12=",
        referenceResults.h_12,
        "ref_h_13=",
        referenceResults.h_13,
        "ref_h_15=",
        referenceResults.h_15,
      );
    } catch (e) {
      console.warn("[S02DB] storeReference logging failed", e);
    }

    // Store with ref_ prefix for downstream sections
    Object.entries(referenceResults).forEach(([fieldId, value]) => {
      if (value !== null && value !== undefined) {
        window.TEUI.StateManager.setValue(
          `ref_${fieldId}`,
          String(value),
          "calculated",
        );
      }
    });

    console.log(
      "[S02] Reference results stored with ref_ prefix for downstream sections",
    );
  }

  /**
   * TARGET MODEL ENGINE: Calculate all values using Application state.
   * STANDARD MODE-AWARE PATTERN.
   */
  function calculateTargetModel() {
    const originalMode = ModeManager.currentMode;
    ModeManager.currentMode = "target"; // Directly set mode without triggering switchMode

    try {
      // ✅ CRITICAL FIX: Read from sovereign TargetState, not global StateManager
      const carbonStandard = TargetState.getValue("d_15") || "Self Reported";

      // For external dependencies (from other sections), still use getNumericValue fallback
      const modelledValueI41 = getNumericValue("i_41", 345.82);

      if (carbonStandard === "Not Reported") {
        setFieldValue("d_16", "N/A", "calculated");
        return;
      }

      if (carbonStandard === "TGS4") {
        const tgs4Value = getNumericValue("i_39", 0);
        setFieldValue("d_16", tgs4Value, "calculated");
        return;
      }

      const AR6_EPC_K5 = 3.39;
      const AR6_EA_L5 = 0.17;

      let targetValue;
      switch (carbonStandard) {
        case "BR18 (Denmark)":
          targetValue = 500;
          break;
        case "IPCC AR6 EPC":
          targetValue = AR6_EPC_K5;
          break;
        case "IPCC AR6 EA":
          targetValue = AR6_EA_L5;
          break;
        case "CaGBC ZCB D":
          targetValue = 425;
          break;
        case "CaGBC ZCB P":
          targetValue = 425;
          break;
        case "Self Reported":
          targetValue = modelledValueI41;
          break;
        default:
          targetValue = modelledValueI41;
      }

      // Since mode is 'target', this will update `target_d_16` AND the global `d_16` for the DOM.
      setFieldValue("d_16", targetValue, "calculated");
    } catch (error) {
      console.error("[Section02] Error in Target Model calculations:", error);
    } finally {
      ModeManager.currentMode = originalMode; // Restore original mode directly
    }
  }

  /**
   * DUAL-ENGINE ORCHESTRATION
   * Replaces the original calculateAll function
   */
  function calculateAll() {
    calculateReferenceModel();
    calculateTargetModel();
  }

  /**
   * Setup Carbon Standard dropdown event handler
   * Follows the dropdown handler pattern from the framework
   */
  function setupCarbonStandardDropdown() {
    const dropdown = document.querySelector(
      'select[data-dropdown-id="dd_d_15"], select[data-field-id="d_15"]',
    );
    if (!dropdown) return;

    // Remove any existing handlers to avoid duplicates
    dropdown.removeEventListener("change", handleCarbonStandardChange);

    // Add the event listener
    dropdown.addEventListener("change", handleCarbonStandardChange);
  }

  /**
   * Handle Carbon Standard dropdown change
   * ✅ PATTERN A: Use ModeManager.setValue() to save to current state
   */
  function handleCarbonStandardChange(e) {
    const selectedValue = e.target.value;
    const fieldId = e.target.getAttribute("data-field-id") || "d_15";

    if (e.isTrusted) {
      window.TEUI.sect02.userInteracted = true;
    }

    // ✅ PATTERN A: Save to current state (Target or Reference) via ModeManager
    ModeManager.setValue(fieldId, selectedValue, "user-modified");

    // Recalculate all values
    calculateAll();
    // Update DOM with new calculated values
    ModeManager.updateCalculatedDisplayValues();
  }

  /**
   * Handle Major Occupancy dropdown change (d_12)
   * Saves to current state (Target or Reference) via ModeManager
   */
  function handleMajorOccupancyChange(e) {
    const selectedValue = e.target.value;
    const fieldId = e.target.getAttribute("data-field-id") || "d_12";

    if (e.isTrusted) {
      window.TEUI.sect02.userInteracted = true;
    }

    // ✅ CRITICAL FIX: Save to current state (Target or Reference) via ModeManager
    // This ensures user changes persist when toggling between modes
    ModeManager.setValue(fieldId, selectedValue, "user-modified");

    // Recalculate all values after occupancy change
    calculateAll();
    // Update DOM with new calculated values
    ModeManager.updateCalculatedDisplayValues();
  }

  /**
   * Handle Actual/Target Use dropdown change (d_14)
   * Saves to current state (Target or Reference) via ModeManager
   */
  function handleActualTargetChange(e) {
    const selectedValue = e.target.value;
    const fieldId = e.target.getAttribute("data-field-id") || "d_14";

    if (e.isTrusted) {
      window.TEUI.sect02.userInteracted = true;
    }

    // ✅ CRITICAL FIX: Save to current state (Target or Reference) via ModeManager
    // This ensures user changes persist when toggling between modes
    ModeManager.setValue(fieldId, selectedValue, "user-modified");

    // Recalculate all values after use type change
    calculateAll();
    // Update DOM with new calculated values
    ModeManager.updateCalculatedDisplayValues();
  }

  /**
   * Handle Building Code dropdown change (d_13)
   * Saves to current state (Target or Reference) via ModeManager
   */
  function handleBuildingCodeChange(e) {
    const selectedValue = e.target.value;
    const fieldId = e.target.getAttribute("data-field-id") || "d_13";

    if (e.isTrusted) {
      window.TEUI.sect02.userInteracted = true;
    }

    // ✅ CRITICAL FIX: Save to current state (Target or Reference) via ModeManager
    // This ensures user changes persist when toggling between modes
    ModeManager.setValue(fieldId, selectedValue, "user-modified");

    // Recalculate all values after building code change
    calculateAll();
    // Update DOM with new calculated values
    ModeManager.updateCalculatedDisplayValues();
  }

  /**
   * Set up Major Occupancy dropdown event handler
   */
  function setupMajorOccupancyDropdown() {
    const dropdown = document.querySelector(
      'select[data-dropdown-id="dd_d_12"], select[data-field-id="d_12"]',
    );
    if (dropdown) {
      // Remove existing listener to prevent duplicates
      dropdown.removeEventListener("change", handleMajorOccupancyChange);

      // Add new listener
      dropdown.addEventListener("change", handleMajorOccupancyChange);
    }
  }

  /**
   * Set up Actual/Target Use dropdown event handler
   */
  function setupActualTargetDropdown() {
    const dropdown = document.querySelector(
      'select[data-dropdown-id="dd_d_14"], select[data-field-id="d_14"]',
    );
    if (dropdown) {
      // Remove existing listener to prevent duplicates
      dropdown.removeEventListener("change", handleActualTargetChange);

      // Add new listener
      dropdown.addEventListener("change", handleActualTargetChange);
    }
  }

  /**
   * Set up Building Code dropdown event handler
   */
  function setupBuildingCodeDropdown() {
    const dropdown = document.querySelector(
      'select[data-dropdown-id="dd_d_13"], select[data-field-id="d_13"]',
    );
    if (dropdown) {
      // Remove existing listener to prevent duplicates
      dropdown.removeEventListener("change", handleBuildingCodeChange);

      // Add new listener
      dropdown.addEventListener("change", handleBuildingCodeChange);
    }
  }

  /**
   * Initialize event handlers for this section
   */
  function initializeEventHandlers() {
    // Register calculations with StateManager
    registerCalculations();

    // Set up dropdown handlers
    setupMajorOccupancyDropdown();
    setupActualTargetDropdown();
    setupBuildingCodeDropdown();
    setupCarbonStandardDropdown();

    // Set initial values on dropdown if not already set
    if (!window.TEUI.sect02.initialized) {
      const dropdown = document.querySelector(
        'select[data-dropdown-id="dd_d_15"], select[data-field-id="d_15"]',
      );
      if (dropdown && window.TEUI?.StateManager) {
        const currentValue = window.TEUI.StateManager.getValue("d_15");
        if (!currentValue) {
          window.TEUI.StateManager.setValue("d_15", dropdown.value, "default");
        }
      }
      window.TEUI.sect02.initialized = true;
    }

    // Initialize user-editable area field
    ensureAreaValueIsSet();

    // Area field blur event
    const areaField = document.querySelector('[data-field-id="h_15"]');
    if (areaField) {
      areaField.addEventListener("blur", updateAreaValue);
      areaField.addEventListener("keydown", function (e) {
        if (e.key === "Enter") {
          e.preventDefault();
          this.blur();
        }
      });
    }

    // Area adjustment slider events
    const areaSlider = document.querySelector('[data-field-id="i_15_slider"]');
    if (areaSlider) {
      areaSlider.addEventListener("input", handleAreaSliderInput);
      areaSlider.addEventListener("change", handleAreaSliderChange);
    }

    // ✅ PATTERN A: Year slider events (h_12 - reporting year)
    const yearSlider = document.querySelector('input[data-field-id="h_12"]');
    if (yearSlider) {
      yearSlider.addEventListener("input", function (e) {
        const newYear = e.target.value;
        // Update display label
        const yearDisplay = this.nextElementSibling;
        if (yearDisplay) {
          yearDisplay.textContent = newYear;
        }
      });

      yearSlider.addEventListener("change", function (e) {
        const newYear = e.target.value;
        // ✅ PATTERN A: Save to current state (Target or Reference) via ModeManager
        ModeManager.setValue("h_12", newYear, "user-modified");
        
        // Recalculate after year change
        calculateAll();
        
        // Update DOM with new calculated values
        ModeManager.updateCalculatedDisplayValues();
      });
    }

    // ✅ CRITICAL FIX: Service life slider events (h_13)
    const serviceLifeSlider = document.querySelector(
      'input[data-field-id="h_13"]',
    );
    if (serviceLifeSlider) {
      serviceLifeSlider.addEventListener("input", function (e) {
        const newServiceLife = e.target.value;
        // Update display label
        const serviceLifeDisplay = this.nextElementSibling;
        if (serviceLifeDisplay) {
          serviceLifeDisplay.textContent = newServiceLife;
        }
      });

      serviceLifeSlider.addEventListener("change", function (e) {
        const newServiceLife = e.target.value;
        // ✅ PATTERN A: Save to current state (Target or Reference) via ModeManager
        ModeManager.setValue("h_13", newServiceLife, "user-modified");
        
        // Recalculate after service life change
        calculateAll();
        
        // Update DOM with new calculated values
        ModeManager.updateCalculatedDisplayValues();
      });
    }

    // Add listener for changes from external sections (e.g., Section 5)
    if (window.TEUI && window.TEUI.StateManager) {
      // Create wrapper function that properly updates DOM after calculations
      const calculateAndRefresh = () => {
        calculateAll();
        ModeManager.updateCalculatedDisplayValues();
      };

      // When these external dependencies change, recalculate everything in this section.
      window.TEUI.StateManager.addListener("i_39", calculateAndRefresh);
      window.TEUI.StateManager.addListener("ref_i_39", calculateAndRefresh);
      window.TEUI.StateManager.addListener("i_41", calculateAndRefresh);
      window.TEUI.StateManager.addListener("ref_i_41", calculateAndRefresh);

      // Add listener for occupancy changes (d_12) to update critical flag
      window.TEUI.StateManager.addListener("d_12", updateCriticalOccupancyFlag);
    }
  }

  /**
   * Update the critical occupancy flag display in Section 2 header
   */
  function updateCriticalOccupancyFlag() {
    const occupancyType = window.TEUI.StateManager?.getValue("d_12") || "";
    const sectionHeader = document.querySelector(
      "#buildingInfo .section-header",
    ); // Target the Section 2 header
    if (!sectionHeader) {
      console.warn("Section 2 header not found for critical flag.");
      return false;
    }

    let flagSpan = sectionHeader.querySelector(
      ".critical-occupancy-header-flag",
    );
    let isCritical = occupancyType.includes("Care");

    if (isCritical) {
      if (!flagSpan) {
        // Create the span if it doesn't exist
        flagSpan = document.createElement("span");
        flagSpan.className = "critical-occupancy-header-flag";
        flagSpan.style.cssText = `
          color: #dc3545;
          font-weight: 600;
          margin-left: 15px;
          font-size: 14px;
          background-color: rgba(220, 53, 69, 0.1);
          padding: 2px 8px;
          border-radius: 4px;
          border: 1px solid rgba(220, 53, 69, 0.3);
        `;

        // Insert immediately after the section title text
        const sectionTitleText = sectionHeader.textContent.trim();
        if (sectionTitleText.includes("SECTION 2. Building Information")) {
          // Find the text node or icon and insert after it
          const iconSpan = sectionHeader.querySelector(".section-icon");
          if (iconSpan && iconSpan.nextSibling) {
            // Insert after icon and title text
            iconSpan.parentNode.insertBefore(
              flagSpan,
              iconSpan.nextSibling.nextSibling || null,
            );
          } else {
            // Fallback: insert at beginning
            sectionHeader.insertBefore(
              flagSpan,
              sectionHeader.firstChild.nextSibling,
            );
          }
        }
      }
      flagSpan.textContent = "Critical Occupancy";
    } else {
      // If not critical, remove the span if it exists
      flagSpan?.remove();
    }

    return isCritical; // Return the status for other functions
  }

  /**
   * Called when section is rendered
   * Standard implementation from SectionXX template
   */
  function onSectionRendered() {
    // Initialize Pattern A Dual-State Module
    ModeManager.initialize();

    // Initialize event handlers
    initializeEventHandlers();

    // Inject header controls for Target/Reference toggle
    injectHeaderControls();

    // ✅ PATTERN A: Defaults are now handled by TargetState.setDefaults() and ReferenceState.setDefaults()
    // No need to set defaults in StateManager - the dual-state architecture handles this

    // Run initial calculations
    calculateAll();
    // Update DOM with initial calculated values
    ModeManager.updateCalculatedDisplayValues();

    // ✅ PATTERN A: ModeManager.refreshUI() already handles cost field formatting
    // No need for separate syncCostFieldDisplays() - it conflicts with dual-state values
    ModeManager.refreshUI();

    // Initialize critical occupancy flag
    updateCriticalOccupancyFlag();
  }

  /**
   * Update the StateManager value for h_15 when conditioned area changes
   */
  function ensureAreaValueIsSet() {
    // Find the conditioned area field
    const areaField = document.querySelector('[data-field-id="h_15"]');
    if (!areaField) {
      return;
    }

    // Make sure it's editable
    if (!areaField.hasAttribute("contenteditable")) {
      areaField.setAttribute("contenteditable", "true");
      areaField.classList.add("user-input", "editable");

      // Add event listeners for editing
      areaField.addEventListener("focus", function () {
        this.classList.add("editing");
        // Store original value to detect changes
        this.dataset.originalValue = this.textContent.trim();
      });

      areaField.addEventListener("blur", function () {
        this.classList.remove("editing");
        updateAreaValue();
      });

      // Handle Enter key
      areaField.addEventListener("keydown", function (e) {
        if (e.key === "Enter") {
          e.preventDefault(); // Prevent adding a newline
          this.blur(); // Remove focus to trigger the blur event
        }
      });
    }

    // Get current value and update StateManager
    updateAreaValue();

    // Ensure all editable fields in this section use proper classes
    ensureAllFieldsUseProperStyling();
  }

  /**
   * Ensure all editable fields in the section use the proper classes
   */
  function ensureAllFieldsUseProperStyling() {
    // Fields that should be user editable
    const userInputFields = [
      "h_14", // Project Name
      "h_15", // Conditioned Area
      "i_16", // Certifier
      "i_17", // License No
      "l_12", // Electricity cost
      "l_13", // Gas cost
      "l_14", // Propane cost
      "l_15", // Wood cost
      "l_16", // Oil cost
    ];

    // Apply proper classes to all user input fields
    userInputFields.forEach((fieldId) => {
      const field = document.querySelector(`[data-field-id="${fieldId}"]`);
      if (field) {
        // Make sure it's properly styled and editable
        field.setAttribute("contenteditable", "true");
        field.classList.add("user-input", "editable");

        // Remove any existing inline styles
        field.removeAttribute("style");

        // Set up event listeners if not already present
        if (!field.hasEventListener) {
          field.addEventListener("focus", function () {
            this.classList.add("editing");
            this.dataset.originalValue = this.textContent.trim();
          });

          field.addEventListener("blur", function () {
            this.classList.remove("editing");
            // ✅ CRITICAL FIX: Save to current state (Target or Reference) via ModeManager
            ModeManager.setValue(
              fieldId,
              this.textContent.trim(),
              "user-modified",
            );

            // Also update StateManager for downstream sections (if this field needs to be shared)
            if (window.TEUI && window.TEUI.StateManager && fieldId === "l_12") {
              window.TEUI.StateManager.setValue(
                fieldId,
                this.textContent.trim(),
                "user-modified",
              );
            }
          });

          field.addEventListener("keydown", function (e) {
            if (e.key === "Enter") {
              e.preventDefault();
              this.blur();
            }
          });

          field.hasEventListener = true;
        }
      }
    });

    // Fields that should be derived values
    const derivedFields = [
      "d_16", // Embodied Carbon Target
    ];

    // Apply proper classes to derived fields
    derivedFields.forEach((fieldId) => {
      const field = document.querySelector(`[data-field-id="${fieldId}"]`);
      if (field) {
        // Remove editable attributes
        field.removeAttribute("contenteditable");
        field.classList.remove("user-input", "editable");
        field.classList.add("derived-value");

        // Remove any existing inline styles
        field.removeAttribute("style");
      }
    });
  }

  /**
   * Update area value in StateManager and trigger a full recalculation.
   * This is the correct pattern for a global input.
   */
  function updateAreaValue() {
    const areaField = document.querySelector('[data-field-id="h_15"]');
    if (!areaField) return;

    const areaValue =
      window.TEUI?.parseNumeric?.(areaField.textContent, 0) ?? 0;

    if (!isNaN(areaValue) && areaValue > 0) {
      // ✅ PATTERN A: Save to current state (Target or Reference) via ModeManager
      ModeManager.setValue("h_15", areaValue.toString(), "user-modified");

      // Recalculate after state update
      calculateAll();
      // Update DOM with new calculated values
      ModeManager.updateCalculatedDisplayValues();
    }
  }

  /**
   * Handle Area Slider input (live updates while dragging)
   */
  function handleAreaSliderInput(event) {
    const areaField = document.querySelector('[data-field-id="h_15"]');
    const slider = event.target;

    if (!areaField || !slider) return;

    try {
      // ✅ CRITICAL FIX: Get original area value from current mode's state for maximum reliability
      const originalAreaStr =
        ModeManager.getValue("h_15") ||
        slider.dataset.originalArea ||
        areaField.dataset.originalValue ||
        areaField.textContent.trim() ||
        "1427.20"; // Fallback to field definition default

      let originalArea = window.TEUI?.parseNumeric?.(originalAreaStr, 0) ?? 0;

      // Get adjustment value from slider's current position
      const adjustment = parseFloat(slider.value);
      if (isNaN(adjustment)) return;

      // Calculate potential new area
      let newArea = Math.max(10, originalArea + adjustment);

      // Update the text field display ONLY (formatted using global helper)
      areaField.textContent =
        window.TEUI?.formatNumber?.(newArea, "number-2dp-comma") ??
        newArea.toString();

      // Store the original value if it's not already stored for the 'change' event
      if (!slider.dataset.originalArea) {
        slider.dataset.originalArea = originalAreaStr;
      }
    } catch (_error) {
      // console.warn("Error handling area slider input:", _error);
    }
  }

  /**
   * Handle Area Slider change (final value on release)
   */
  function handleAreaSliderChange(event) {
    const areaField = document.querySelector('[data-field-id="h_15"]');
    const slider = event.target;

    if (!areaField || !slider) return;

    try {
      // Get current area value using global helper
      const currentAreaText = areaField.textContent.trim();
      let currentArea = window.TEUI?.parseNumeric?.(currentAreaText, 0) ?? 0;

      if (currentArea === 0) {
        // ✅ CRITICAL FIX: Try getting from current mode's state as a fallback
        const stateArea = ModeManager.getValue("h_15") || "1427.20"; // Fallback to field definition default
        currentArea = window.TEUI?.parseNumeric?.(stateArea, 0) ?? 0;
      }

      // Get adjustment value from slider's FINAL position
      const adjustment = parseFloat(slider.value);
      if (isNaN(adjustment)) return;

      // Calculate new area, ensuring it doesn't go below a minimum (e.g., 10)
      let newArea = Math.max(10, currentArea + adjustment);

      // Update the text field display using global helper
      areaField.textContent =
        window.TEUI?.formatNumber?.(newArea, "number-2dp-comma") ??
        newArea.toString();

      // Mark this as a user interaction
      window.TEUI.sect02.userInteracted = true;

      // ✅ PATTERN A: Save to current state (Target or Reference) via ModeManager
      ModeManager.setValue("h_15", newArea.toString(), "user-modified");

      // Reset the slider value back to 0 after applying the adjustment
      slider.value = 0;

      // Clear the stored original area value
      delete slider.dataset.originalArea;
    } catch (_error) {
      // console.warn("Error handling area slider change:", _error);
    }
  }

  /**
   * Sync cost field displays with proper CAD formatting
   * Uses global window.TEUI.formatNumber with correct CAD format types
   * Only formats fields that have been modified or have valid numeric values
   */
  function syncCostFieldDisplays() {
    const costFields = ["l_12", "l_13", "l_14", "l_15", "l_16"];
    costFields.forEach((fieldId) => {
      const element = document.querySelector(`[data-field-id="${fieldId}"]`);
      if (element) {
        // Get the current displayed value
        const currentDisplayValue = element.textContent.trim();

        // Only reformat if the field has been modified by user or has a non-default value
        const stateManagerValue =
          window.TEUI?.StateManager?.getValue?.(fieldId);

        // Skip formatting if:
        // 1. No value in StateManager (field hasn't been initialized)
        // 2. Current display already looks like a properly formatted currency
        if (!stateManagerValue || currentDisplayValue.startsWith("$")) {
          // Check if we need to ensure the field is properly set in StateManager
          if (!stateManagerValue && currentDisplayValue.startsWith("$")) {
            // Extract numeric value from the displayed currency and store it
            const numericValue = window.TEUI?.parseNumeric?.(
              currentDisplayValue,
              0,
            );
            if (numericValue > 0 && window.TEUI?.StateManager) {
              window.TEUI.StateManager.setValue(
                fieldId,
                numericValue.toString(),
                "default",
              );
            }
          }
          return; // Skip reformatting
        }

        // Only format if we have a valid numeric value from StateManager
        const rawValue = window.TEUI?.parseNumeric?.(stateManagerValue, 0);
        if (rawValue > 0) {
          // Apply specific CAD formatting based on field ID
          const formatType = fieldId === "l_15" ? "cad-2dp" : "cad-4dp"; // Wood uses 2dp, others use 4dp
          const formattedValue =
            window.TEUI?.formatNumber?.(rawValue, formatType) ??
            rawValue.toString();
          element.textContent = formattedValue;
        }
      }
    });
  }

  //==========================================================================
  // DUAL-STATE MODE MANAGEMENT
  //==========================================================================

  /**
   * TargetState: Manages Target (user's design) state with persistence
   */
  const TargetState = {
    data: {},
    storageKey: "S02_TARGET_STATE",

    loadState: function () {
      try {
        const saved = localStorage.getItem(this.storageKey);
        if (saved) {
          const savedData = JSON.parse(saved);
          // ✅ CRITICAL FIX: Merge saved data with defaults, don't replace defaults
          this.data = { ...this.data, ...savedData };
          console.log(`S02: Loaded and merged Target state from localStorage`);
        }
      } catch (error) {
        console.warn(`S02: Error loading Target state:`, error);
        // ✅ CRITICAL FIX: Don't wipe defaults on error, keep existing defaults
        console.log(`S02: Keeping Target defaults due to localStorage error`);
      }
    },

    saveState: function () {
      try {
        localStorage.setItem(this.storageKey, JSON.stringify(this.data));
        // console.log(`S02: Saved Target state to localStorage`);
      } catch (error) {
        console.warn(`S02: Error saving Target state:`, error);
      }
    },

    getValue: function (fieldId) {
      return this.data[fieldId] || "";
    },

    setValue: function (fieldId, value, source = "calculated") {
      this.data[fieldId] = value;
      if (source === "user" || source === "user-modified") {
        this.saveState();
      }
    },

    setDefaults: function () {
      // S02 Target defaults (Validation Case: 2022 reporting year)
      // ✅ CRITICAL FIX: Don't spread existing data - defaults should ALWAYS take precedence
      this.data = {
        d_12: "A-Assembly", // Major Occupancy
        d_13: "OBC SB10 5.5-6 Z6", // Target building code
        d_14: "Utility Bills", // Actual/Target Use
        d_15: "Self Reported", // Carbon standard
        // Reporting year 2022 for Target (affects S04 emissions factors)
        h_12: "2022", // Reporting Period - Target uses 2022 (actual field is h_12)
        // h_15 default comes from field definition (value: "1,427.20")
        // Energy costs - same for both Target and Reference
        l_12: "0.1300", // Electricity cost
        l_13: "0.5070", // Gas cost
        l_14: "1.6200", // Propane cost
        l_15: "180.00", // Wood cost
        l_16: "1.5000", // Oil cost
      };
      console.log(
        `S02: Target defaults set (2022 reporting year) - overriding any localStorage empties`,
      );
    },
  };

  /**
   * ReferenceState: Manages Reference (building code minimums) state with persistence
   */
  const ReferenceState = {
    data: {},
    storageKey: "S02_REFERENCE_STATE",

    loadState: function () {
      try {
        const saved = localStorage.getItem(this.storageKey);
        if (saved) {
          const savedData = JSON.parse(saved);
          // ✅ CRITICAL FIX: Merge saved data with defaults, don't replace defaults
          this.data = { ...this.data, ...savedData };
          console.log(
            `S02: Loaded and merged Reference state from localStorage`,
          );
        }
      } catch (error) {
        console.warn(`S02: Error loading Reference state:`, error);
        // ✅ CRITICAL FIX: Don't wipe defaults on error, keep existing defaults
        console.log(
          `S02: Keeping Reference defaults due to localStorage error`,
        );
      }
    },

    saveState: function () {
      try {
        localStorage.setItem(this.storageKey, JSON.stringify(this.data));
        // console.log(`S02: Saved Reference state to localStorage`);
      } catch (error) {
        console.warn(`S02: Error saving Reference state:`, error);
      }
    },

    getValue: function (fieldId) {
      return this.data[fieldId] || "";
    },

    setValue: function (fieldId, value, source = "calculated") {
      this.data[fieldId] = value;
      if (source === "user" || source === "user-modified") {
        this.saveState();
      }
    },

    setDefaults: function () {
      // S02 Reference defaults (Validation Case: 2020 reporting year)
      // ✅ CRITICAL FIX: Don't spread existing data - defaults should ALWAYS take precedence
      this.data = {
        d_12: "A-Assembly", // Major Occupancy (same as Target)
        d_13: "OBC SB10 5.5-6 Z5 (2010)", // Reference building code - earlier standard
        d_14: "Utility Bills", // Actual/Target Use (same as Target)
        d_15: "Self Reported", // Carbon standard (same)
        // Reporting year 2020 for Reference (creates natural S04 emissions differences)
        h_12: "2020", // Reporting Period - Reference uses 2020 (actual field is h_12)
        h_13: "50", // Service life (from field definition)
        h_15: "1427.20", // ✅ CRITICAL FIX: Must be set for ref_h_15 storage
        // Energy costs - same as Target (differences come from reporting year/location)
        l_12: "0.1300", // Electricity cost (same as Target)
        l_13: "0.5070", // Gas cost (same as Target)
        l_14: "1.6200", // Propane cost (same as Target)
        l_15: "180.00", // Wood cost (same as Target)
        l_16: "1.5000", // Oil cost (same as Target)
      };
      console.log(
        `S02: Reference defaults set (2020 reporting year) - overriding any localStorage empties`,
      );
    },
  };

  const ModeManager = {
    currentMode: "target", // "target" or "reference"

    // Initialize the mode manager
    initialize: function () {
      // Properly initialize both Target and Reference states
      try {
        TargetState.setDefaults();
        TargetState.loadState();
        ReferenceState.setDefaults();
        ReferenceState.loadState();
        // Publish core Reference parameters immediately so consumers (S01, S04) have values on first load
        if (window.TEUI?.StateManager) {
          const refH12 = ReferenceState.getValue("h_12");
          const refH13 = ReferenceState.getValue("h_13");
          const refH15 = ReferenceState.getValue("h_15");
          if (refH12) window.TEUI.StateManager.setValue("ref_h_12", refH12, "default");
          if (refH13) window.TEUI.StateManager.setValue("ref_h_13", refH13, "default");
          if (refH15) window.TEUI.StateManager.setValue("ref_h_15", refH15, "default");
          console.log("[S02DB] init publish: ref_h_12=", refH12, "ref_h_13=", refH13, "ref_h_15=", refH15);
        }
      } catch (e) {
        console.warn("[S02] initialize: state initialization error", e);
      }
    },

    // Switch between Target and Reference modes with UI refresh only
    switchMode: function (mode) {
      if (mode !== "target" && mode !== "reference") {
        console.warn(`[S02] Invalid mode: ${mode}`);
        return;
      }
      this.currentMode = mode;
      console.log(`[S02] Switched to ${mode.toUpperCase()} mode`);

      // ✅ CRITICAL FIX: UI toggle is for DISPLAY ONLY - values are already calculated
      this.refreshUI(); // Update input fields from state
      this.updateCalculatedDisplayValues(); // Update calculated fields from StateManager

      // ❌ REMOVED: calculateAll() - this is a UI action, not a data change
    },

    getValue: function (fieldId) {
      const currentState =
        this.currentMode === "target" ? TargetState : ReferenceState;
      return currentState.getValue(fieldId);
    },

    setValue: function (fieldId, value, source = "calculated") {
      const currentState =
        this.currentMode === "target" ? TargetState : ReferenceState;
      currentState.setValue(fieldId, value, source);

      // ✅ CRITICAL BRIDGE: Sync Target changes to StateManager for downstream sections
      if (this.currentMode === "target" && window.TEUI?.StateManager) {
        window.TEUI.StateManager.setValue(fieldId, value, source);
      }

      // ✅ CRITICAL BRIDGE: Sync Reference changes to StateManager with ref_ prefix
      if (this.currentMode === "reference" && window.TEUI?.StateManager) {
        window.TEUI.StateManager.setValue(`ref_${fieldId}`, value, source);
      }
    },

    // Update UI input fields based on current mode's state (✅ S03 Pattern)
    refreshUI: function () {
      console.log(
        `[S02] Refreshing UI for ${this.currentMode.toUpperCase()} mode`,
      );

      const sectionElement = document.getElementById("buildingInfo");
      if (!sectionElement) return;

      const currentState =
        this.currentMode === "target" ? TargetState : ReferenceState;

      // ✅ S03 PATTERN: Update Reference Standard dropdown using specific selector
      const referenceStandardDropdown = sectionElement.querySelector(
        '[data-dropdown-id="dd_d_13"]',
      );
      const d13Value = currentState.getValue("d_13");
      if (referenceStandardDropdown && d13Value) {
        referenceStandardDropdown.value = d13Value;
      }

      // ✅ S03 PATTERN: Update Carbon Standard dropdown using specific selector
      const carbonStandardDropdown = sectionElement.querySelector(
        '[data-dropdown-id="dd_d_15"]',
      );
      const d15Value = currentState.getValue("d_15");
      if (carbonStandardDropdown && d15Value) {
        carbonStandardDropdown.value = d15Value;
      }

      // ✅ CRITICAL FIX: Update Major Occupancy dropdown using specific selector
      const majorOccupancyDropdown = sectionElement.querySelector(
        '[data-dropdown-id="dd_d_12"]',
      );
      const d12Value = currentState.getValue("d_12");
      if (majorOccupancyDropdown && d12Value) {
        majorOccupancyDropdown.value = d12Value;
      }

      // ✅ CRITICAL FIX: Update Actual/Target Use dropdown using specific selector
      const actualTargetDropdown = sectionElement.querySelector(
        '[data-dropdown-id="dd_d_14"]',
      );
      const d14Value = currentState.getValue("d_14");
      if (actualTargetDropdown && d14Value) {
        actualTargetDropdown.value = d14Value;
      }

      // ✅ CRITICAL: Update reporting year slider (h_12, displayed as d_1)
      const yearSlider = sectionElement.querySelector(
        'input[data-field-id="h_12"]',
      );
      const yearValue = currentState.getValue("h_12"); // Actual field is h_12
      if (yearSlider && yearValue) {
        yearSlider.value = yearValue;
        // Update year display
        const yearDisplay = yearSlider.nextElementSibling;
        if (yearDisplay) {
          yearDisplay.textContent = yearValue;
        }
        console.log(
          `[S02] Updated h_12 (reporting year) slider = "${yearValue}" (${this.currentMode} mode)`,
        );
      }

      // ✅ Update other editable fields using standard selectors
      const editableFields = [
        "h_15",
        "i_17",
        "l_12",
        "l_13",
        "l_14",
        "l_15",
        "l_16",
      ];

      editableFields.forEach((fieldId) => {
        const stateValue = currentState.getValue(fieldId);
        if (stateValue === undefined || stateValue === null) return;

        const element = sectionElement.querySelector(
          `[data-field-id="${fieldId}"]`,
        );
        if (!element) return;

        if (element.hasAttribute("contenteditable")) {
          let displayValue = stateValue;

          // Format currency fields properly
          if (["l_12", "l_13", "l_14", "l_15", "l_16"].includes(fieldId)) {
            const numericValue = window.TEUI?.parseNumeric?.(stateValue, 0);
            if (numericValue > 0) {
              const formatType = fieldId === "l_15" ? "cad-2dp" : "cad-4dp";
              displayValue =
                window.TEUI?.formatNumber?.(numericValue, formatType) ??
                stateValue;
            }
          }

          element.textContent = displayValue;
          console.log(
            `[S02] Updated ${fieldId} = "${displayValue}" (${this.currentMode} mode)`,
          );
        }
      });
    },

    /**
     * Update calculated fields display based on current mode
     * This updates DOM elements to show calculated values from StateManager
     */
    updateCalculatedDisplayValues: function () {
      // console.log(`🔄 [S02] updateCalculatedDisplayValues: mode=${this.currentMode}`);

      // Update calculated fields to show values for current mode
      const calculatedFields = ["d_16"]; // Embodied Carbon Target

      calculatedFields.forEach((fieldId) => {
        const element = document.querySelector(`[data-field-id="${fieldId}"]`);
        if (element) {
          // Read the correct value from StateManager based on mode
          const value =
            this.currentMode === "reference"
              ? window.TEUI.StateManager.getValue(`ref_${fieldId}`) ||
                window.TEUI.StateManager.getValue(fieldId)
              : window.TEUI.StateManager.getValue(fieldId);

          if (value !== null && value !== undefined) {
            // Format numeric fields appropriately
            const formattedValue =
              value === "N/A"
                ? "N/A"
                : window.TEUI.formatNumber
                  ? window.TEUI.formatNumber(value, "number-2dp-comma")
                  : value;

            element.textContent = formattedValue;
            // console.log(`[S02] Updated calculated field ${fieldId} = "${formattedValue}" (${this.currentMode} mode)`);
          }
        }
      });
    },
  };
  // Expose ModeManager for debugging and cross-section communication
  window.TEUI.sect02.ModeManager = ModeManager;

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

    // Public API for cost field formatting
    syncCostFieldDisplays: syncCostFieldDisplays,

    // ✅ PATTERN A: Expose ModeManager for dual-state routing
    ModeManager: ModeManager,
  };
})();
