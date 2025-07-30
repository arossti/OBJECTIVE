/**
 * 4011-Section04.js
 * Actual vs. Target Energy & Carbon (Section 4) module for TEUI Calculator 4.011
 *
 * This file contains field definitions, layout templates, and rendering logic
 * specific to the Actual vs. Target Energy & Carbon section using a declarative row-based approach.
 */

// Ensure namespace exists
window.TEUI = window.TEUI || {};
window.TEUI.SectionModules = window.TEUI.SectionModules || {};

// Section 4: Actual vs. Target Energy & Carbon Module
window.TEUI.SectionModules.sect04 = (function () {
  //==========================================================================
  // HELPER FUNCTIONS (Standard Implementation)
  //==========================================================================

  /**
   * Safely parses a numeric value from StateManager, using the global parseNumeric.
   * @param {string} fieldId - The ID of the field to retrieve the value for.
   * @returns {number} The parsed numeric value, or 0 if parsing fails.
   */
  function getNumericValue(fieldId, defaultValue = 0) {
    const rawValue = window.TEUI?.StateManager?.getValue(fieldId);
    // Use the global parseNumeric if available
    return window.TEUI?.parseNumeric?.(rawValue, defaultValue) || defaultValue;
  }

  /**
   * Helper to get field value, preferring StateManager but falling back to DOM.
   * @param {string} fieldId
   * @returns {string | null} Value as string or null if not found.
   */
  function getFieldValue(fieldId) {
    if (window.TEUI?.StateManager?.getValue) {
      const value = window.TEUI.StateManager.getValue(fieldId);
      if (value !== null && value !== undefined) {
        return value.toString();
      }
    }
    const element = document.querySelector(
      `[data-field-id="${fieldId}"],[data-dropdown-id="${fieldId}"]`,
    );
    if (element) {
      return element.value !== undefined ? element.value : element.textContent;
    }
    return null;
  }

  /**
   * Sets a calculated value in the StateManager and updates the corresponding DOM element.
   * @param {string} fieldId - The ID of the field to update.
   * @param {number} rawValue - The raw calculated numeric value.
   * @param {string} [formatType='number-2dp-comma'] - The format type string (e.g., 'number-2dp-comma', 'percent-1dp', 'integer').
   */
  function setCalculatedValue(
    fieldId,
    rawValue,
    formatType = "number-2dp-comma",
  ) {
    // Use global formatter - ensuring window.TEUI and formatNumber exist
    const formattedValue =
      window.TEUI?.formatNumber?.(rawValue, formatType) ??
      rawValue?.toString() ??
      "N/A";

    // Store raw value as string in StateManager for precision
    if (window.TEUI?.StateManager?.setValue) {
      let stateValue = isFinite(rawValue) ? rawValue.toString() : null;

      // 🔧 CRITICAL FIX: Be Reference mode aware to prevent contamination
      if (window.TEUI?.ReferenceToggle?.isReferenceMode?.()) {
        // Reference mode: store with ref_ prefix (no global contamination)
        const refFieldId = `ref_${fieldId}`;
        window.TEUI.StateManager.setValue(refFieldId, stateValue, "calculated");
        console.log(
          `S04: 🔒 REFERENCE MODE - ${fieldId}: ref_${fieldId}=${stateValue} (NO global contamination)`,
        );
      } else {
        // Target mode: store normally in application state
        window.TEUI.StateManager.setValue(fieldId, stateValue, "calculated");
      }
    }

    // Update DOM
    const element = document.querySelector(`[data-field-id="${fieldId}"]`);
    if (element) {
      element.textContent = formattedValue;
      element.classList.toggle(
        "negative-value",
        isFinite(rawValue) && rawValue < 0,
      );
    } else {
      // Element not found - field may not be rendered yet
    }
  }

  //==========================================================================
  // 🎯 MINIMAL PATTERN A DUAL-STATE ARCHITECTURE
  //==========================================================================

  /**
   * TargetState: Manages Target (user's design) state with persistence
   */
  const TargetState = {
    data: {},
    storageKey: "S04_TARGET_STATE",

    loadState: function () {
      try {
        const saved = localStorage.getItem(this.storageKey);
        if (saved) {
          this.data = JSON.parse(saved);
          console.log(`S04: Loaded Target state from localStorage`);
        }
      } catch (error) {
        console.warn(`S04: Error loading Target state:`, error);
        this.data = {};
      }
    },

    saveState: function () {
      try {
        localStorage.setItem(this.storageKey, JSON.stringify(this.data));
        console.log(`S04: Saved Target state to localStorage`);
      } catch (error) {
        console.warn(`S04: Error saving Target state:`, error);
      }
    },

    getValue: function (fieldId) {
      return this.data[fieldId] || getNumericValue(fieldId) || 0;
    },

    setValue: function (fieldId, value, source = "calculated") {
      this.data[fieldId] = value;
      if (source === "user" || source === "user-modified") {
        this.saveState();
      }
    },

    setDefaults: function () {
      // S04 minimal defaults - mostly calculated values
      console.log(`S04: Target defaults set`);
    },
  };

  /**
   * ReferenceState: Manages Reference (building code minimums) state with persistence
   */
  const ReferenceState = {
    data: {},
    storageKey: "S04_REFERENCE_STATE",

    loadState: function () {
      try {
        const saved = localStorage.getItem(this.storageKey);
        if (saved) {
          this.data = JSON.parse(saved);
          console.log(`S04: Loaded Reference state from localStorage`);
        }
      } catch (error) {
        console.warn(`S04: Error loading Reference state:`, error);
        this.data = {};
      }
    },

    saveState: function () {
      try {
        localStorage.setItem(this.storageKey, JSON.stringify(this.data));
        console.log(`S04: Saved Reference state to localStorage`);
      } catch (error) {
        console.warn(`S04: Error saving Reference state:`, error);
      }
    },

    getValue: function (fieldId) {
      return this.data[fieldId] || getNumericValue(fieldId) || 0;
    },

    setValue: function (fieldId, value, source = "calculated") {
      this.data[fieldId] = value;
      if (source === "user" || source === "user-modified") {
        this.saveState();
      }
    },

    setDefaults: function () {
      // S04 minimal defaults - mostly calculated values
      console.log(`S04: Reference defaults set`);
    },
  };

  /**
   * ModeManager: Handles UI mode switching and state coordination
   */
  const ModeManager = {
    currentMode: "target", // "target" or "reference"

    initialize: function () {
      TargetState.loadState();
      ReferenceState.loadState();
      TargetState.setDefaults();
      ReferenceState.setDefaults();
      console.log(`S04: Pattern A initialization complete.`);
    },

    switchMode: function (mode) {
      if (mode !== "target" && mode !== "reference") {
        console.warn(`S04: Invalid mode: ${mode}`);
        return;
      }
      this.currentMode = mode;
      console.log(`S04: Switched to ${mode.toUpperCase()} mode`);
      calculateAll();
    },

    getValue: function (fieldId) {
      const currentState = this.currentMode === "target" ? TargetState : ReferenceState;
      return currentState.getValue(fieldId);
    },

    setValue: function (fieldId, value, source = "calculated") {
      const currentState = this.currentMode === "target" ? TargetState : ReferenceState;
      currentState.setValue(fieldId, value, source);
    },

    // Update UI input fields based on current mode's state
    refreshUI: function () {
      console.log(`[S04] Refreshing UI for ${this.currentMode.toUpperCase()} mode`);
      
      const currentState = this.currentMode === "target" ? TargetState : ReferenceState;
      
      // Update user input fields with values from current state
      // S04 fields include energy costs, fuel costs, carbon factors, etc.
      const userInputFields = ["l_12", "l_13", "l_14", "l_15", "l_16", "m_12", "m_13", "m_14", "m_15", "m_16"];
      
      userInputFields.forEach(fieldId => {
        const element = document.querySelector(`[data-field-id="${fieldId}"]`);
        const value = currentState.getValue(fieldId);
        
        if (element && value) {
          if (element.tagName === "SELECT") {
            element.value = value;
          } else {
            element.textContent = value;
          }
        }
      });
    },
  };

  /**
   * Inject Target/Reference toggle controls into section header
   * Standard Pattern A implementation
   */
  function injectHeaderControls() {
    const sectionHeader = document.querySelector("#actualTargetEnergy .section-header");
    if (!sectionHeader || sectionHeader.querySelector(".local-controls-container")) {
      return; // Already setup or header not found
    }

    // Create controls container
    const controlsContainer = document.createElement("div");
    controlsContainer.className = "local-controls-container";
    controlsContainer.style.cssText = "display: flex; align-items: center; gap: 10px; margin-left: auto;";

    // Create Reset button
    const resetButton = document.createElement("button");
    resetButton.textContent = "Reset";
    resetButton.style.cssText = "padding: 4px 8px; font-size: 12px; border: 1px solid #ccc; background: white; cursor: pointer; border-radius: 3px;";
    resetButton.addEventListener("click", (event) => {
      event.stopPropagation();
      if (confirm("Reset all values to defaults?")) {
        TargetState.setDefaults();
        ReferenceState.setDefaults();
        ModeManager.refreshUI();
        console.log("S04: Reset to defaults");
      }
    });

    // Create state indicator
    const stateIndicator = document.createElement("div");
    stateIndicator.textContent = "TARGET";
    stateIndicator.style.cssText = "padding: 4px 8px; font-size: 12px; font-weight: bold; color: white; background-color: rgba(0, 123, 255, 0.5); border-radius: 3px;";

    // Create toggle switch
    const toggleSwitch = document.createElement("div");
    toggleSwitch.style.cssText = "position: relative; width: 40px; height: 20px; background-color: #ccc; border-radius: 10px; cursor: pointer;";

    const slider = document.createElement("div");
    slider.style.cssText = "position: absolute; top: 2px; left: 2px; width: 16px; height: 16px; background-color: white; border-radius: 50%; transition: transform 0.2s;";

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

    console.log("✅ S04: Header controls injected successfully");
  }

  //==========================================================================
  // PART 1: SECTION DEFINITION (DECLARATIVE STRUCTURE)
  //==========================================================================

  // Renamed from sectionDefinition to sectionRows for consistency
  const sectionRows = {
    metadata: {
      // Keep metadata for now, though not standard in template
      sectionId: "actualTargetEnergy",
      sectionName: "Actual vs. Target Energy & Carbon",
      sectionNumber: "04",
    },

    // Renamed 'subheader' key to 'header'
    header: {
      id: "04-ID",
      rowId: "04-ID", // Added rowId for consistency
      label: "Section 04 Units", // Added label for consistency
      cells: {
        // Column B should be empty, FieldManager populates it
        b: {},
        c: { content: "C", classes: ["section-subheader"] }, // Content is fine for header
        d: { content: "ACTUAL ENERGY", classes: ["section-subheader"] },
        e: { content: "UNITS", classes: ["section-subheader"] },
        f: { content: "ACTUAL NET", classes: ["section-subheader"] },
        g: {
          content: "E.1 EMISSIONS\nkgCO2e/yr",
          classes: ["section-subheader"],
          style: "white-space: pre-line;",
        }, // Added style for newline
        h: { content: "TARGET ENERGY", classes: ["section-subheader"] },
        i: { content: "UNITS", classes: ["section-subheader"] },
        j: { content: "TARGET NET", classes: ["section-subheader"] },
        k: {
          content: "E.1 EMISSIONS\nkgCO2e/yr",
          classes: ["section-subheader"],
          style: "white-space: pre-line;",
        }, // Added style for newline
        l: { content: "EMISSION FACTORS", classes: ["section-subheader"] },
        m: { content: "UNITS", classes: ["section-subheader"] },
        n: { content: "", classes: ["section-subheader"] }, // Keep n empty
      },
    },

    // Row 27: T.3.1 Total Electricity Use
    27: {
      id: "T.3.1",
      rowId: "T.3.1",
      label: "Total Electricity Use",
      cells: {
        // Column B should be empty {}
        b: {},
        // Column C should use label property
        c: { label: "Total Electricity Use" },
        // Other columns define fields as before, adding section property
        d: {
          fieldId: "d_27",
          type: "editable",
          value: "132,938.00",
          classes: ["user-input"],
          section: "actualTargetEnergy",
        },
        e: { content: "kWh/yr" },
        f: {
          fieldId: "f_27",
          type: "calculated",
          value: "132,938.00",
          dependencies: ["d_27", "d_43", "i_43"],
          classes: ["calculated-value"],
          section: "actualTargetEnergy",
        }, // Dependency uses i_43
        g: {
          fieldId: "g_27",
          type: "calculated",
          value: "6,779.84",
          dependencies: ["f_27", "l_27"],
          classes: ["calculated-value"],
          section: "actualTargetEnergy",
        },
        h: {
          fieldId: "h_27",
          type: "calculated",
          value: "132,765.65",
          dependencies: ["d_136"],
          classes: ["calculated-value"],
          section: "actualTargetEnergy",
        },
        i: { content: "kWh/yr" },
        j: {
          fieldId: "j_27",
          type: "calculated",
          value: "132,765.65",
          dependencies: ["h_27", "d_43", "i_43"],
          classes: ["calculated-value"],
          section: "actualTargetEnergy",
        }, // Dependency uses i_43
        k: {
          fieldId: "k_27",
          type: "calculated",
          value: "6,771.05",
          dependencies: ["j_27", "l_27"],
          classes: ["calculated-value"],
          section: "actualTargetEnergy",
        },
        l: {
          fieldId: "l_27",
          type: "editable",
          value: "51.00",
          classes: ["user-input"],
          section: "actualTargetEnergy",
        },
        m: { content: "gCO2e/kWh" },
      },
    },

    // Row 28: T.3.2 Total Fossil Gas Use
    28: {
      id: "T.3.2",
      rowId: "T.3.2",
      label: "Total Fossil Gas Use",
      cells: {
        b: {}, // Empty
        c: { label: "Total Fossil Gas Use" }, // Use label
        d: {
          fieldId: "d_28",
          type: "editable",
          value: "0.00",
          classes: ["user-input"],
          section: "actualTargetEnergy",
        },
        e: { content: "m³/yr" },
        f: {
          fieldId: "f_28",
          type: "calculated",
          value: "0.00",
          dependencies: ["d_28"],
          classes: ["calculated-value"],
          section: "actualTargetEnergy",
        },
        g: {
          fieldId: "g_28",
          type: "calculated",
          value: "0.00",
          dependencies: ["d_28", "l_28"],
          classes: ["calculated-value"],
          section: "actualTargetEnergy",
        },
        h: {
          fieldId: "h_28",
          type: "calculated",
          value: "0.00",
          dependencies: ["d_51", "e_51", "d_113", "h_115"],
          classes: ["calculated-value"],
          section: "actualTargetEnergy",
        },
        i: { content: "m³/yr" },
        j: {
          fieldId: "j_28",
          type: "calculated",
          value: "0.00",
          dependencies: ["h_28"],
          classes: ["calculated-value"],
          section: "actualTargetEnergy",
        },
        k: {
          fieldId: "k_28",
          type: "calculated",
          value: "0.00",
          dependencies: ["h_28", "l_28"],
          classes: ["calculated-value"],
          section: "actualTargetEnergy",
        },
        l: {
          fieldId: "l_28",
          type: "editable",
          value: "1,921.00",
          classes: ["user-input"],
          section: "actualTargetEnergy",
        },
        m: { content: "gCO2e/m³" },
      },
    },

    // Row 29: T.3.3 Total Propane Use
    29: {
      id: "T.3.3",
      rowId: "T.3.3",
      label: "Total Propane Use",
      cells: {
        b: {}, // Empty
        c: { label: "Total Propane Use" }, // Use label
        d: {
          fieldId: "d_29",
          type: "editable",
          value: "0.00",
          classes: ["user-input"],
          section: "actualTargetEnergy",
        },
        e: { content: "kg/yr" },
        f: {
          fieldId: "f_29",
          type: "calculated",
          value: "0.00",
          dependencies: ["d_29"],
          classes: ["calculated-value"],
          section: "actualTargetEnergy",
        },
        g: {
          fieldId: "g_29",
          type: "calculated",
          value: "0.00",
          dependencies: ["d_29", "l_29"],
          classes: ["calculated-value"],
          section: "actualTargetEnergy",
        },
        h: {
          fieldId: "h_29",
          type: "calculated",
          value: "0.00",
          dependencies: ["d_29"],
          classes: ["calculated-value"],
          section: "actualTargetEnergy",
        },
        i: { content: "kg/yr" },
        j: {
          fieldId: "j_29",
          type: "calculated",
          value: "0.00",
          dependencies: ["h_29"],
          classes: ["calculated-value"],
          section: "actualTargetEnergy",
        },
        k: {
          fieldId: "k_29",
          type: "calculated",
          value: "0.00",
          dependencies: ["h_29", "l_29"],
          classes: ["calculated-value"],
          section: "actualTargetEnergy",
        },
        l: {
          fieldId: "l_29",
          type: "editable",
          value: "2,970.00",
          classes: ["user-input"],
          section: "actualTargetEnergy",
        },
        m: { content: "gCO2e/kg" },
      },
    },

    // Row 30: T.3.4 Total Oil Use
    30: {
      id: "T.3.4",
      rowId: "T.3.4",
      label: "Total Oil Use",
      cells: {
        b: {}, // Empty
        c: { label: "Total Oil Use" }, // Use label
        d: {
          fieldId: "d_30",
          type: "editable",
          value: "0.00",
          classes: ["user-input"],
          section: "actualTargetEnergy",
        },
        e: { content: "litres/yr" },
        f: {
          fieldId: "f_30",
          type: "calculated",
          value: "0.00",
          dependencies: ["d_30"],
          classes: ["calculated-value"],
          section: "actualTargetEnergy",
        },
        g: {
          fieldId: "g_30",
          type: "calculated",
          value: "0.00",
          dependencies: ["d_30", "l_30"],
          classes: ["calculated-value"],
          section: "actualTargetEnergy",
        },
        h: {
          fieldId: "h_30",
          type: "calculated",
          value: "0.00",
          dependencies: ["d_51", "d_113", "k_54", "f_115"],
          classes: ["calculated-value"],
          section: "actualTargetEnergy",
        },
        i: { content: "litres/yr" },
        j: {
          fieldId: "j_30",
          type: "calculated",
          value: "0.00",
          dependencies: ["h_30"],
          classes: ["calculated-value"],
          section: "actualTargetEnergy",
        },
        k: {
          fieldId: "k_30",
          type: "calculated",
          value: "0.00",
          dependencies: ["h_30", "l_30"],
          classes: ["calculated-value"],
          section: "actualTargetEnergy",
        },
        l: {
          fieldId: "l_30",
          type: "editable",
          value: "2,753.00",
          classes: ["user-input"],
          section: "actualTargetEnergy",
        },
        m: { content: "gCO2e/litre" },
      },
    },

    // Row 31: T.3.5 Total Wood Use
    31: {
      id: "T.3.5",
      rowId: "T.3.5",
      label: "Total Wood Use",
      cells: {
        b: {}, // Empty
        c: { label: "Total Wood Use" }, // Use label
        d: {
          fieldId: "d_31",
          type: "editable",
          value: "0.00",
          classes: ["user-input"],
          section: "actualTargetEnergy",
        },
        e: { content: "m³/yr" },
        f: {
          fieldId: "f_31",
          type: "calculated",
          value: "0.00",
          dependencies: ["d_31"],
          classes: ["calculated-value"],
          section: "actualTargetEnergy",
        },
        g: {
          fieldId: "g_31",
          type: "calculated",
          value: "0.00",
          dependencies: ["h_31", "l_31"],
          classes: ["calculated-value"],
          section: "actualTargetEnergy",
        },
        h: {
          fieldId: "h_31",
          type: "calculated",
          value: "0.00",
          dependencies: ["d_31"],
          classes: ["calculated-value"],
          section: "actualTargetEnergy",
        },
        i: { content: "m³/yr" },
        j: {
          fieldId: "j_31",
          type: "calculated",
          value: "0.00",
          dependencies: ["h_31"],
          classes: ["calculated-value"],
          section: "actualTargetEnergy",
        },
        k: {
          fieldId: "k_31",
          type: "calculated",
          value: "0.00",
          dependencies: ["h_31", "l_31"],
          classes: ["calculated-value"],
          section: "actualTargetEnergy",
        },
        l: {
          fieldId: "l_31",
          type: "editable",
          value: "150.00",
          classes: ["user-input"],
          section: "actualTargetEnergy",
        },
        m: { content: "kgCO2e/m³" },
      },
    },

    // Row 32: E.1.1 Operational GHG & Energy Subtotals
    32: {
      id: "E.1.1",
      rowId: "E.1.1",
      label: "Operational GHG & Energy Subtotals",
      cells: {
        b: {}, // Empty
        c: { label: "Operational GHG & Energy Subtotals" }, // Use label
        // Col D, E empty
        f: {
          fieldId: "f_32",
          type: "calculated",
          value: "132,938.00",
          dependencies: ["f_27", "f_28", "f_29", "f_30", "f_31"],
          classes: ["calculated-value"],
          section: "actualTargetEnergy",
        },
        g: {
          fieldId: "g_32",
          type: "calculated",
          value: "6,779.84",
          dependencies: ["g_27", "g_28", "g_29", "g_30", "g_31", "d_60"],
          classes: ["calculated-value"],
          section: "actualTargetEnergy",
        },
        // Col H, I empty
        j: {
          fieldId: "j_32",
          type: "calculated",
          value: "132,765.65",
          dependencies: ["j_27", "j_28", "j_29", "j_30", "j_31"],
          classes: ["calculated-value"],
          section: "actualTargetEnergy",
        },
        k: {
          fieldId: "k_32",
          type: "calculated",
          value: "6,771.05",
          dependencies: ["k_27", "k_28", "k_29", "k_30", "k_31", "d_60"],
          classes: ["calculated-value"],
          section: "actualTargetEnergy",
        },
        // Col L, M, N empty
      },
    },

    // Row 33: T.3.6 Total Net Energy
    33: {
      id: "T.3.6",
      rowId: "T.3.6",
      label: "Total Net Energy",
      cells: {
        b: {}, // Empty
        c: { label: "Total Net Energy" }, // Use label
        d: {
          fieldId: "d_33",
          type: "calculated",
          value: "478.58",
          dependencies: [
            "f_27",
            "f_28",
            "f_29",
            "f_30",
            "f_31",
            "d_43",
            "i_43",
          ],
          classes: ["calculated-value"],
          section: "actualTargetEnergy",
        },
        e: { content: "GJ/yr" },
        // Col F, G empty
        h: {
          fieldId: "h_33",
          type: "calculated",
          value: "477.96",
          dependencies: [
            "j_27",
            "j_28",
            "j_29",
            "j_30",
            "j_31",
            "i_43",
            "d_43",
          ],
          classes: ["calculated-value"],
          section: "actualTargetEnergy",
        },
        i: { content: "GJ/yr" },
        // Col J, K, L, M, N empty
      },
    },

    // Row 34: T.3.7 Annual Percapita Energy
    34: {
      id: "T.3.7",
      rowId: "T.3.7",
      label: "Annual Percapita Energy",
      cells: {
        b: {}, // Empty
        c: { label: "Annual Percapita Energy" }, // Use label
        d: {
          fieldId: "d_34",
          type: "calculated",
          value: "1,055.06",
          dependencies: ["f_32", "d_63"],
          classes: ["calculated-value"],
          section: "actualTargetEnergy",
        }, // Dependency updated
        e: { content: "kWh Actual" },
        f: {
          fieldId: "f_34",
          type: "calculated",
          value: "3.80",
          dependencies: ["d_33", "d_63"],
          classes: ["calculated-value"],
          section: "actualTargetEnergy",
        },
        g: { content: "GJ Actual" },
        h: {
          fieldId: "h_34",
          type: "calculated",
          value: "1,053.70",
          dependencies: ["j_32", "d_63"],
          classes: ["calculated-value"],
          section: "actualTargetEnergy",
        }, // Dependency updated
        i: { content: "kWh Target" },
        j: {
          fieldId: "j_34",
          type: "calculated",
          value: "3.79",
          dependencies: ["h_33", "d_63"],
          classes: ["calculated-value"],
          section: "actualTargetEnergy",
        },
        k: { content: "GJ Target" },
        l: {}, // Was l_34, now empty
        m: {}, // Was unit for l_34, now empty
      },
    },

    // Row 35: T.3.8 Primary Energy
    35: {
      id: "T.3.8",
      rowId: "T.3.8",
      label: "Primary Energy",
      cells: {
        b: {}, // Empty
        c: { label: "Primary Energy" }, // Use label
        d: {
          fieldId: "d_35",
          type: "calculated",
          value: "132,938.00",
          dependencies: ["d_14", "j_27", "h_35", "f_27"],
          classes: ["calculated-value"],
          section: "actualTargetEnergy",
        },
        e: { content: "kWh/yr" },
        f: {
          fieldId: "f_35",
          type: "calculated",
          value: "93.15",
          dependencies: ["d_35", "h_15"],
          classes: ["calculated-value"],
          section: "actualTargetEnergy",
        },
        g: { content: "kWh/m²/yr" },
        h: {
          fieldId: "h_35",
          type: "editable",
          value: "1.0",
          classes: ["user-input"],
          section: "actualTargetEnergy",
        },
        i: { content: "PER Factor" },
        // Col J, K, L, M, N empty
      },
    },
  };

  //==========================================================================
  // PART 2: FIELD GENERATION (Standardized)
  //==========================================================================

  /**
   * Extract field definitions from the integrated layout (sectionRows)
   * This method is required for compatibility with the FieldManager
   */
  function getFields() {
    const fields = {};
    const sectionId = sectionRows.metadata.sectionId; // Use metadata

    // Extract field definitions from all rows except the header
    Object.entries(sectionRows).forEach(([rowKey, row]) => {
      // Skip metadata and header
      if (rowKey === "metadata" || rowKey === "header") return;
      if (!row.cells) return;

      // Process each cell in the row
      Object.entries(row.cells).forEach(([_colKey, cell]) => {
        if (cell.fieldId && cell.type) {
          // Create field definition with all relevant properties
          fields[cell.fieldId] = {
            type: cell.type,
            label: cell.label || row.label, // Use cell label first, fallback to row label
            defaultValue: cell.value || "",
            section: cell.section || sectionId, // Use cell section first, fallback to metadata
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

  //==========================================================================
  // PART 3: DROPDOWN OPTION GENERATION (Standardized)
  //==========================================================================

  /**
   * Extract dropdown options from the integrated layout (sectionRows)
   * Required for backward compatibility
   */
  function getDropdownOptions() {
    const options = {};

    // Extract dropdown options from all cells with dropdownId
    Object.values(sectionRows).forEach((row) => {
      // Skip metadata row
      if (typeof row !== "object" || row === null || !row.cells) return;

      Object.values(row.cells).forEach((cell) => {
        if (cell.dropdownId && cell.options) {
          options[cell.dropdownId] = cell.options;
        }
      });
    });

    return options;
  }

  //==========================================================================
  // PART 4: LAYOUT GENERATION (Standardized - Replaced custom version)
  //==========================================================================

  /**
   * Generate layout from integrated row definitions (sectionRows)
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

    // Then add all other rows in their original order, excluding the header and metadata
    Object.entries(sectionRows).forEach(([key, row]) => {
      if (key !== "header" && key !== "metadata") {
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
      id: row.id || row.rowId, // Use id, fallback to rowId
      cells: [
        {}, // Empty column A
        {}, // ID column B (auto-populated by FieldManager)
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
          // Ensure cell.label exists if defined
          else if (!cell.label && cell.content) {
            cell.label = cell.content; // Assume content is label if type isn't specified
            delete cell.content;
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
  // PART 5: EVENT HANDLING
  //==========================================================================

  /**
   * Initialize event handlers for this section
   */
  function initializeEventHandlers() {
    // Add line break styling for subheaders that contain newlines
    const sectionElement = document.getElementById(
      sectionRows.metadata.sectionId,
    );
    if (sectionElement) {
      const subheaderCells =
        sectionElement.querySelectorAll(".section-subheader");
      subheaderCells.forEach((cell) => {
        if (cell.textContent.includes("\n")) {
          cell.style.whiteSpace = "pre-line";
          cell.style.lineHeight = "1.1";
          cell.style.paddingTop = "2px";
          cell.style.paddingBottom = "2px";
        }
      });
    }

    // Add event listeners for editable fields
    if (!sectionElement) {
      return;
    }

    // Find all editable fields within this section
    const editableFields = sectionElement.querySelectorAll(
      '.user-input, [data-field-id^="d_"], [data-field-id^="h_"], [data-field-id^="l_"]',
    );

    editableFields.forEach((field) => {
      // Make editable fields actually editable
      if (
        field.classList.contains("user-input") ||
        field.classList.contains("editable")
      ) {
        field.setAttribute("contenteditable", "true");

        // Also add a focus styling
        field.addEventListener("focus", function () {
          this.classList.add("editing");

          // Store original value to detect changes
          this.dataset.originalValue = this.textContent.trim();
        });

        field.addEventListener("blur", function () {
          this.classList.remove("editing");
        });
      }

      // Handle changes to the field value
      field.addEventListener("blur", function (_e) {
        const fieldId = this.getAttribute("data-field-id");
        if (!fieldId) return;

        // Get new value
        let newValue = this.textContent.trim();

        // Clean the value - remove commas before parsing
        newValue = newValue.replace(/,/g, "");

        // Only update if value has changed
        if (this.dataset.originalValue !== newValue) {
          // Update state manager if available
          if (window.TEUI && window.TEUI.StateManager) {
            window.TEUI.StateManager.setValue(
              fieldId,
              newValue,
              "user-modified",
            );
          }

          // Removed call to updateDependentFields - rely on StateManager listeners

          // Removed calculateSection call - Rely solely on StateManager listeners to trigger calcs
        }
      });

      // Also handle Enter key (common way to "commit" edits)
      field.addEventListener("keydown", function (e) {
        if (e.key === "Enter") {
          e.preventDefault(); // Prevent adding a newline
          this.blur(); // Remove focus to trigger the blur event
        }
      });

      // Add paste event handler to clean pasted values immediately
      field.addEventListener("paste", function (_e) {
        // Let the paste happen normally
        setTimeout(() => {
          // After paste, clean up the value but don't process calculations yet
          // (that will happen on blur)
          const pastedContent = this.textContent.trim();

          // Just for visual consistency, if needed
          if (pastedContent.includes(",")) {
            // Keep the formatted display but ensure consistent formatting
            const cleanValue =
              window.TEUI?.parseNumeric?.(pastedContent, 0) ?? 0;
            if (!isNaN(cleanValue)) {
              this.textContent = window.TEUI.formatNumber(
                cleanValue,
                "number-2dp-comma",
              );
            }
          }
        }, 0);
      });
    });

    // Set up listeners for cross-section dependencies
    setupCrossSectionListeners();
  }

  /**
   * Set up listeners for values from other sections that affect calculations in this section
   */
  function setupCrossSectionListeners() {
    if (window.TEUI && window.TEUI.StateManager) {
      const sm = window.TEUI.StateManager; // Alias for brevity

      // Listener function for Electricity Emission Factor
      const updateFactorCallback = () => {
        updateElectricityEmissionFactor();
      };

      // Listen for province changes (dd_d_19)
      sm.addListener("dd_d_19", updateFactorCallback);
      sm.addListener("d_19", updateFactorCallback); // Also listen for d_19

      // Listen for reporting year changes (h_12)
      sm.addListener("h_12", updateFactorCallback);
      sm.addListener("d_12", updateFactorCallback);

      // Listener function for Net Electricity changes (Renewables)
      const netElectricityUpdateCallback = function (
        newValue,
        oldValue,
        sourceFieldId,
      ) {
        // Added params

        // Specific log when d_27 changes
        if (sourceFieldId === "d_27") {
          // TODO: Add specific logging for d_27 changes if needed
        }

        // Fetch CURRENT values from StateManager using helper
        const d27 = getNumericValue("d_27");
        const h27 = getNumericValue("h_27");
        const l27 = getNumericValue("l_27");
        const d43 = getNumericValue("d_43"); // Should reflect the trigger if sourceFieldId was d_43
        const i43 = getNumericValue("i_43"); // Should reflect the trigger if sourceFieldId was i_43

        // Perform calculations using calculation helpers
        const f27New = calculateF27(); // No args needed
        const j27New = calculateJ27(); // No args needed
        const g27New = calculateG27(); // No args needed
        const k27New = calculateK27(); // No args needed

        // Update net usage fields using standard helper
        setCalculatedValue("f_27", f27New, "number-2dp-comma");
        setCalculatedValue("j_27", j27New, "number-2dp-comma");
        // Update emission fields using standard helper
        setCalculatedValue("g_27", g27New, "number-2dp-comma");
        setCalculatedValue("k_27", k27New, "number-2dp-comma");

        updateSubtotals(); // Update totals after row 27 changes
      };

      sm.addListener("d_27", netElectricityUpdateCallback); // *** ADDED: Listen for Actual Electricity Use ***
      sm.addListener("d_43", netElectricityUpdateCallback); // Onsite Renewables
      // window.TEUI.StateManager.addListener('i_44', netElectricityUpdateCallback); // Listener no longer needed
      sm.addListener("i_43", netElectricityUpdateCallback); // Offsite REC Subtotal

      // --- Listener for d_136 (Target Energy from S15) ---
      const handleD136Update = () => {
        const d136Value = getNumericValue("d_136");

        // Update h_27 (Target Electricity Use in S04)
        setCalculatedValue("h_27", d136Value, "number-2dp-comma"); // Added formatType

        // Now trigger j_27 recalculation using the NEW h_27 value
        const h27Value = d136Value; // Use the value we just set
        const d43Value = getNumericValue("d_43");
        const i43Value = getNumericValue("i_43");
        const l27Value = getNumericValue("l_27"); // Needed for k_27 calculation

        const j27Value = calculateJ27(); // No args needed
        setCalculatedValue("j_27", j27Value, "number-2dp-comma");

        // Also trigger k_27 recalculation (Target Emissions)
        const k27Value = calculateK27(); // No args needed
        setCalculatedValue("k_27", k27Value, "number-2dp-comma");

        // Trigger subtotal update
        updateSubtotals();
      };

      sm.addListener("d_136", handleD136Update); // Listen for d_136 now
      // --- End Listener for d_136 ---

      // --- Listeners for Target Fuel Updates (Gas/Oil from S07/S13) ---
      const targetFuelUpdateCallback = () => {
        // Recalculate H28/J28/K28 (Gas)
        const h28Value = calculateH28();
        setCalculatedValue("h_28", h28Value, "number-2dp-comma");
        const j28Value = calculateJ28();
        setCalculatedValue("j_28", j28Value, "number-2dp-comma");
        const k28Value = calculateK28();
        setCalculatedValue("k_28", k28Value, "number-2dp-comma");

        // Recalculate H30/J30/K30 (Oil)
        const h30Value = calculateH30();
        setCalculatedValue("h_30", h30Value, "number-2dp-comma");
        const j30Value = calculateJ30();
        setCalculatedValue("j_30", j30Value, "number-2dp-comma");
        const k30Value = calculateK30();
        setCalculatedValue("k_30", k30Value, "number-2dp-comma");

        // Update subtotals that depend on these rows
        updateSubtotals();
      };

      // Dependencies for H28/J28/K28 (Gas)
      sm.addListener("d_113", targetFuelUpdateCallback); // S13 Primary Heating System
      sm.addListener("h_115", targetFuelUpdateCallback); // S13 Target Gas Use (Calc)
      sm.addListener("d_51", targetFuelUpdateCallback); // S07 DHW Source
      sm.addListener("e_51", targetFuelUpdateCallback); // S07 DHW User kWh (if Gas)

      // Dependencies for H30/J30/K30 (Oil) - Assuming k_54 is target DHW Oil use
      sm.addListener("d_113", targetFuelUpdateCallback); // S13 Primary Heating System (already added, listener handles multiple calls)
      sm.addListener("f_115", targetFuelUpdateCallback); // S13 Target Oil Use (Calc)
      sm.addListener("d_51", targetFuelUpdateCallback); // S07 DHW Source (already added)
      sm.addListener("k_54", targetFuelUpdateCallback); // CORRECTED: Listen to k_54 where Oil calculation is now located
      // --- End Target Fuel Listeners ---

      // --- Listeners for Actual Fuel Inputs (d_28 to d_31) ---
      const actualFuelUpdateCallback = (newValue, oldValue, sourceFieldId) => {
        let calculateSubtotalsAfter = true;
        // Determine which calculation pair to run based on the source
        switch (sourceFieldId) {
          case "d_28": {
            // Gas
            const f28Value = calculateF28();
            setCalculatedValue("f_28", f28Value, "number-2dp-comma");
            const g28Value = calculateG28();
            setCalculatedValue("g_28", g28Value, "number-2dp-comma");
            break;
          }
          case "d_29": {
            // Propane
            const f29Value = calculateF29();
            setCalculatedValue("f_29", f29Value, "number-2dp-comma");
            const g29Value = calculateG29();
            setCalculatedValue("g_29", g29Value, "number-2dp-comma");
            break;
          }
          case "d_30": {
            // Oil
            const f30Value = calculateF30();
            setCalculatedValue("f_30", f30Value, "number-2dp-comma");
            const g30Value = calculateG30();
            setCalculatedValue("g_30", g30Value, "number-2dp-comma");
            break;
          }
          case "d_31": {
            // Wood
            const f31Value = calculateF31();
            setCalculatedValue("f_31", f31Value, "number-2dp-comma");
            const h31Value = calculateH31();
            setCalculatedValue("h_31", h31Value, "number-2dp-comma");
            const g31Value = calculateG31();

            setCalculatedValue("g_31", g31Value, "number-2dp-comma");
            const k31Value = calculateK31(); // Calculate k_31 as it's needed by d_60
            setCalculatedValue("k_31", k31Value, "number-2dp-comma");
            // When d_31 (wood use) changes, k_31 also changes.
            // S08 listens to k_31 to update d_60.
            // S04 listens to d_60 to update subtotals.
            // So, we don't call updateSubtotals() directly here for d_31 changes.
            calculateSubtotalsAfter = false;

            break;
          }
        }

        // Update subtotals after any actual fuel input change, unless it was d_31
        if (calculateSubtotalsAfter) {
          updateSubtotals();
        }
      };

      sm.addListener("d_28", actualFuelUpdateCallback);
      sm.addListener("d_29", actualFuelUpdateCallback);
      sm.addListener("d_30", actualFuelUpdateCallback);
      sm.addListener("d_31", actualFuelUpdateCallback);
      // --- End Actual Fuel Listeners ---

      // Listener for d_60 (Calculated Wood Offset from S08)
      sm.addListener("d_60", () => {
        updateSubtotals(); // This will recalculate g_32 and k_32 which depend on d_60
      });

      // CRITICAL: Listener for d_13 (Reference Standard) changes - triggers dual-engine calculations
      sm.addListener("d_13", () => {
        // When reference standard changes, trigger both engines
        calculateReferenceModel(); // Calculate Reference values using new standard
        calculateTargetModel(); // Recalculate Target values (may have dependencies)
      });

      // CRITICAL: Listener for h_12 changes in Reference Mode
      // This ensures Reference grid intensity updates when Reference reporting year changes
      sm.addListener("h_12", () => {
        // h_12 changed, updating grid intensity and Reference Model
        // Update both Application and Reference grid intensities
        updateElectricityEmissionFactor();
        // Trigger Reference Model recalculation to use new Reference grid intensity
        calculateReferenceModel();
      });

      // CRITICAL: Listeners for Section 07 Reference values
      // These trigger Reference Model recalculation when S07 Reference values change
      sm.addListener("ref_e_51", () => {
        // ref_e_51 changed, triggering Reference Model recalculation
        calculateReferenceModel();
      });

      sm.addListener("ref_k_54", () => {
        // ref_k_54 changed, triggering Reference Model recalculation
        calculateReferenceModel();
      });

      // CRITICAL: Listener for Section 15 Reference values
      sm.addListener("ref_d_136", () => {
        // ref_d_136 changed, triggering Reference Model recalculation
        calculateReferenceModel();
      });

      // Direct DOM event listener as fallback (Consider removing if listeners are reliable)
      document.addEventListener("input", function (e) {
        const target = e.target;
        if (
          target &&
          (target.getAttribute("data-field-id") === "h_12" ||
            target.getAttribute("data-field-id") === "d_12" ||
            target.getAttribute("data-field-id") === "d_19" ||
            target.getAttribute("data-field-id") === "dd_d_19")
        ) {
          updateElectricityEmissionFactor();
        }
      });
    }
  }

  /**
   * Update the electricity emission factor (l_27) based on province and reporting year
   * DUAL-ENGINE: Now supports separate Reference and Target grid intensity calculations
   */
  function updateElectricityEmissionFactor() {
    // Calculate Target/Application grid intensity
    updateGridIntensityForMode("application");

    // Calculate Reference grid intensity (may use different reporting year)
    updateGridIntensityForMode("reference");
  }

  /**
   * Update grid intensity for a specific calculation mode
   * @param {string} mode - 'application' or 'reference'
   */
  function updateGridIntensityForMode(mode) {
    let provinceAbbreviation = "ON"; // Default
    let reportingYear = 2022; // Default

    if (window.TEUI?.StateManager) {
      // Province is always from application state (same for both modes)
      const provinceStateValue =
        window.TEUI.StateManager.getApplicationValue("d_19"); // From S03
      if (provinceStateValue) {
        provinceAbbreviation = getProvinceCode(provinceStateValue);
      }

      // Reporting year depends on mode - CRITICAL: Use explicit state getters
      let yearStateValue;
      if (mode === "reference") {
        // In Reference Mode, use Reference state for h_12 (may be different from application)
        yearStateValue = window.TEUI.StateManager.getReferenceValue("h_12");
      } else {
        // In Application Mode, use Application state for h_12
        yearStateValue = window.TEUI.StateManager.getApplicationValue("h_12");
      }

      if (yearStateValue) {
        const parsedYear = parseInt(yearStateValue);
        if (!isNaN(parsedYear) && parsedYear >= 2015 && parsedYear <= 2041) {
          reportingYear = parsedYear;
        }
      }
    } else {
      // Fallback to DOM (application state only)
      const provinceDropdown = document.querySelector(
        'select[data-dropdown-id="dd_d_19"], select[data-field-id="d_19"]',
      );
      if (provinceDropdown && provinceDropdown.value) {
        provinceAbbreviation = getProvinceCode(provinceDropdown.value);
      }
      const yearInput = document.querySelector('[data-field-id="h_12"]');
      if (yearInput && yearInput.value) {
        const parsedYear = parseInt(yearInput.value);
        if (!isNaN(parsedYear) && parsedYear >= 2015 && parsedYear <= 2041) {
          reportingYear = parsedYear;
        }
      }
    }

    // Get emission factor based on province and year
    const factor = getElectricityFactor(provinceAbbreviation, reportingYear);

    if (mode === "reference") {
      // Store Reference grid intensity with ref_ prefix
      if (window.TEUI?.StateManager) {
        window.TEUI.StateManager.setValue(
          "ref_l_27",
          factor.toString(),
          "calculated",
        );
      }

      // UPDATE UI IN REFERENCE MODE: If user is currently in Reference Mode, update the visible l_27 field
      if (window.TEUI?.ReferenceToggle?.isReferenceMode?.()) {
        // Update l_27 display with Reference value
        const l27Element = document.querySelector('[data-field-id="l_27"]');
        if (l27Element) {
          l27Element.textContent = window.TEUI.formatNumber(factor, "integer");
        }

        // Recalculate and update dependent Reference values in UI
        const ref_j27 = getRefNumericValue("j_27", 0);
        const ref_g27 = (ref_j27 * factor) / 1000;
        const g27Element = document.querySelector('[data-field-id="g_27"]');
        if (g27Element) {
          g27Element.textContent = window.TEUI.formatNumber(
            ref_g27,
            "number-2dp-comma",
          );
        }

        const ref_k27 = ref_g27; // Same calculation for k_27 in Reference Mode
        const k27Element = document.querySelector('[data-field-id="k_27"]');
        if (k27Element) {
          k27Element.textContent = window.TEUI.formatNumber(
            ref_k27,
            "number-2dp-comma",
          );
        }

        // Reference Mode UI updated successfully
      }
    } else {
      // Update the application l_27 field
      setCalculatedValue("l_27", factor, "integer");

      // Recalculate dependent values for application state
      const f27Value = getNumericValue("f_27");
      const g27Value = calculateG27Helper(f27Value, factor);
      setCalculatedValue("g_27", g27Value, "number-2dp-comma");

      const j27Value = getNumericValue("j_27");
      const k27Value = calculateK27Helper(j27Value, factor);
      setCalculatedValue("k_27", k27Value, "number-2dp-comma");

      updateSubtotals();
    }
  }

  // Helper function to convert province name to province code
  // This function is defined within the IIFE and directly callable by others within the same scope (like updateElectricityEmissionFactor)
  function getProvinceCode(provinceText) {
    if (!provinceText) return "ON";

    // Direct match for 2-letter codes
    if (provinceText.length === 2) {
      const code = provinceText.toUpperCase();
      if (
        [
          "ON",
          "QC",
          "BC",
          "AB",
          "SK",
          "MB",
          "NS",
          "NB",
          "NL",
          "PE",
          "NT",
          "YT",
          "NU",
        ].includes(code)
      ) {
        return code;
      }
    }

    const originalText = provinceText;
    provinceText = provinceText.trim().toLowerCase();

    if (provinceText === "ontario" || provinceText === "on") return "ON";
    if (
      provinceText === "quebec" ||
      provinceText === "québec" ||
      provinceText === "qc"
    )
      return "QC";
    if (provinceText === "british columbia" || provinceText === "bc")
      return "BC";
    if (provinceText === "alberta" || provinceText === "ab") return "AB";
    if (provinceText === "saskatchewan" || provinceText === "sk") return "SK";
    if (provinceText === "manitoba" || provinceText === "mb") return "MB";
    if (provinceText === "nova scotia" || provinceText === "ns") return "NS";
    if (provinceText === "new brunswick" || provinceText === "nb") return "NB";
    if (provinceText === "newfoundland and labrador" || provinceText === "nl")
      return "NL";
    if (provinceText === "prince edward island" || provinceText === "pe")
      return "PE";
    if (provinceText === "northwest territories" || provinceText === "nt")
      return "NT";
    if (provinceText === "yukon" || provinceText === "yt") return "YT";
    if (provinceText === "nunavut" || provinceText === "nu") return "NU";

    const provinceMatches = {
      ON: provinceText.includes("ontario"),
      QC: provinceText.includes("quebec") || provinceText.includes("québec"),
      BC: provinceText.includes("british columbia"),
      AB: provinceText.includes("alberta"),
      SK: provinceText.includes("saskatchewan"),
      MB: provinceText.includes("manitoba"),
      NS: provinceText.includes("nova scotia"),
      NB: provinceText.includes("new brunswick"),
      NL: provinceText.includes("newfoundland"),
      PE: provinceText.includes("prince edward"),
      NT: provinceText.includes("northwest"),
      YT: provinceText.includes("yukon"),
      NU: provinceText.includes("nunavut"),
    };
    const matches = Object.entries(provinceMatches).filter(
      ([_, matches]) => matches,
    );
    if (matches.length > 0) return matches[0][0];
    return "ON"; // Default
  }

  // Helper function to get electricity emission factor (can be moved to a central data module later)
  const GRID_INTENSITY_FACTORS = {
    ON: {
      default: 51,
      2015: 46,
      2016: 40,
      2017: 18,
      2018: 29,
      2019: 29,
      2020: 36,
      2021: 44,
      2022: 51,
      2023: 67,
      2024: 71,
      2025: 138,
      2026: 145,
      2027: 132,
      2028: 133,
      2029: 126,
      2030: 126,
      2031: 122,
      2032: 122,
      2033: 104,
      2034: 58,
      2035: 40,
      2036: 34,
      2037: 33,
      2038: 32,
      2039: 13,
      2040: 8,
      2041: 3,
      future: 3,
    },
    QC: { default: 1 },
    BC: { default: 12 },
    AB: { default: 650 },
    SK: { default: 720 },
    MB: { default: 3 },
    NS: { default: 600 },
    NB: { default: 340 },
    NL: { default: 30 },
    PE: { default: 12 },
    NT: { default: 180 },
    YT: { default: 2 },
    NU: { default: 200 },
  };

  // Get electricity emission factor based on CSV formula data
  function getElectricityFactor(province, year) {
    const provinceFactors =
      GRID_INTENSITY_FACTORS[province] || GRID_INTENSITY_FACTORS["ON"];
    if (year > 2041 && provinceFactors.future !== undefined) {
      return provinceFactors.future;
    }
    return provinceFactors[year] || provinceFactors.default;
  }

  // Recalculate G27 and K27 with the factor as an argument
  function calculateG27Helper(f27Value, l27Factor) {
    return (f27Value * l27Factor) / 1000;
  }

  function calculateK27Helper(j27Value, l27Factor) {
    return (j27Value * l27Factor) / 1000;
  }

  /**
   * Helper function to update the subtotal rows (row 32)
   */
  function updateSubtotals() {
    // Get all the values needed for subtotals using the standard helper
    const f27Value = getNumericValue("f_27");
    const f28Value = getNumericValue("f_28");
    const f29Value = getNumericValue("f_29");
    const f30Value = getNumericValue("f_30");
    const f31Value = getNumericValue("f_31");

    const g27Value = getNumericValue("g_27");
    const g28Value = getNumericValue("g_28");
    const g29Value = getNumericValue("g_29");
    const g30Value = getNumericValue("g_30");
    const g31Value = getNumericValue("g_31");

    const j27Value = getNumericValue("j_27");
    const j28Value = getNumericValue("j_28");
    const j29Value = getNumericValue("j_29");
    const j30Value = getNumericValue("j_30");
    const j31Value = getNumericValue("j_31");

    const k27Value = getNumericValue("k_27");
    const k28Value = getNumericValue("k_28");
    const k29Value = getNumericValue("k_29");
    const k30Value = getNumericValue("k_30");
    const k31Value = getNumericValue("k_31");

    const d60Value = getNumericValue("d_60"); // Offsets (tCO2e), will be multiplied by 1000 later

    // Update f_32 (Operational GHG & Energy Subtotals)
    const f32Value = calculateF32(
      f27Value,
      f28Value,
      f29Value,
      f30Value,
      f31Value,
    );
    setCalculatedValue("f_32", f32Value, "number-2dp-comma");

    // Check for zero energy case and force immediate TEUI update
    if (f32Value === 0 && window.TEUI?.StateManager) {
      // Check StateManager exists

      if (typeof window.calculateTEUI === "function") {
        window.calculateTEUI();
      } else if (window.TEUI.StateManager.updateTEUICalculations) {
        window.TEUI.StateManager.updateTEUICalculations("zero-energy-case");
      } else if (window.TEUI.SectionModules?.sect01?.runAllCalculations) {
        // Fallback: directly call S01 calculation if specific hook is missing
        window.TEUI.SectionModules.sect01.runAllCalculations();
      }
    } else {
      // Force TEUI recalculation after energy update (if not zero)
      // REMOVED: setTimeout(() => { ... }, 100);
      // Section 01 should listen to f_32 or j_32 for updates.
      if (typeof window.calculateTEUI === "function") {
        window.calculateTEUI(); // Call directly or let listener handle it
      } else if (window.TEUI?.SectionModules?.sect01?.runAllCalculations) {
        window.TEUI.SectionModules.sect01.runAllCalculations();
      }
    }

    // Update g_32 (Emissions subtotal)
    const g32Value = calculateG32(
      g27Value,
      g28Value,
      g29Value,
      g30Value,
      g31Value,
      d60Value,
    );

    setCalculatedValue("g_32", g32Value, "number-2dp-comma");

    // Update j_32 (Target subtotal)
    const j32Value = calculateJ32(
      j27Value,
      j28Value,
      j29Value,
      j30Value,
      j31Value,
    );
    setCalculatedValue("j_32", j32Value, "number-2dp-comma");

    // Update k_32 (Target emissions subtotal)
    const k32Value = calculateK32(
      k27Value,
      k28Value,
      k29Value,
      k30Value,
      k31Value,
      d60Value,
    );
    setCalculatedValue("k_32", k32Value, "number-2dp-comma");

    // Also update other dependent fields if needed
    updateDependentTotals(); // This function should also use getNumericValue
  }

  /**
   * Update any other fields that depend on the subtotals
   */
  function updateDependentTotals() {
    // Update d_33, h_33, etc. using standard helpers
    const f27Value = getNumericValue("f_27");
    const f28Value = getNumericValue("f_28");
    const f29Value = getNumericValue("f_29");
    const f30Value = getNumericValue("f_30");
    const f31Value = getNumericValue("f_31");
    const d43Value = getNumericValue("d_43");
    const i43Value = getNumericValue("i_43");
    const j27Value = getNumericValue("j_27");
    const j28Value = getNumericValue("j_28");
    const j29Value = getNumericValue("j_29");
    const j30Value = getNumericValue("j_30");
    const j31Value = getNumericValue("j_31");
    const k32Value = getNumericValue("k_32"); // For L34
    const d63Value = getNumericValue("d_63"); // For L34
    const h15Value = getNumericValue("h_15"); // For F35
    const d14Value = window.TEUI.StateManager?.getValue("d_14"); // For D35
    const h35Value = getNumericValue("h_35"); // For D35

    const d33Value = calculateD33(
      f27Value,
      f28Value,
      f29Value,
      f30Value,
      f31Value,
      d43Value,
      i43Value,
    );
    setCalculatedValue("d_33", d33Value, "number-2dp-comma");

    const h33Value = calculateH33(
      j27Value,
      j28Value,
      j29Value,
      j30Value,
      j31Value,
      i43Value,
      d43Value,
    );
    setCalculatedValue("h_33", h33Value, "number-2dp-comma");

    const d34Value = calculateD34(f27Value, f28Value, d63Value);
    setCalculatedValue("d_34", d34Value, "number-2dp-comma");

    const f34Value = calculateF34(d33Value, d63Value);
    setCalculatedValue("f_34", f34Value, "number-2dp-comma");

    const h34Value = calculateH34(j27Value, j28Value, d63Value);
    setCalculatedValue("h_34", h34Value, "number-2dp-comma");

    const j34Value = calculateJ34(h33Value, d63Value);
    setCalculatedValue("j_34", j34Value, "number-2dp-comma");

    const d35Value = calculateD35(d14Value, j27Value, h35Value, f27Value);
    setCalculatedValue("d_35", d35Value, "number-2dp-comma");

    const f35Value = calculateF35(d35Value, h15Value);
    setCalculatedValue("f_35", f35Value, "number-2dp-comma");
  }

  /**
   * Define section-specific calculation functions here
   * These will be called by the Calculator module based on field dependencies
   */

  // Row 27: Electricity calculations
  function calculateF27() {
    // =D27-D43-I43 (Total Electricity Use - Onsite Energy - Offsite REC Subtotal)
    const d27 = getNumericValue("d_27"); // Use helper
    const d43 = getNumericValue("d_43"); // Use helper
    const i43 = getNumericValue("i_43"); // Use helper
    return d27 - d43 - i43;
  }

  function calculateG27() {
    // =F27*L27/1000 (Actual Net * Emission factor / 1000)
    const f27 = getNumericValue("f_27"); // Use helper
    const l27 = getNumericValue("l_27"); // Use helper
    // Dividing by 1000 converts from gCO2e to kgCO2e
    return (f27 * l27) / 1000;
  }

  function calculateH27(d136) {
    // =D$136 (Target value comes from another section)
    // Use parseNumeric here too
    return window.TEUI?.parseNumeric?.(d136, 0) ?? 0;
  }

  function calculateJ27() {
    // =H27-D43-I43 (Target Energy - Onsite Energy - Offsite REC Subtotal)
    const h27 = getNumericValue("h_27"); // Use helper
    const d43 = getNumericValue("d_43"); // Use helper
    const i43 = getNumericValue("i_43"); // Use helper
    return h27 - d43 - i43;
  }

  function calculateK27() {
    // =J27*L27/1000 (Target Net * Emission factor / 1000)
    const j27 = getNumericValue("j_27"); // Use helper
    const l27 = getNumericValue("l_27"); // Use helper
    // Dividing by 1000 converts from gCO2e to kgCO2e
    return (j27 * l27) / 1000;
  }

  // Row 28: Gas calculations
  function calculateF28() {
    const d28 = getNumericValue("d_28"); // Use helper
    // =D28*0.0373*277.7778 (Gas volume to energy conversion)
    return d28 * 0.0373 * 277.7778;
  }

  function calculateG28() {
    const d28 = getNumericValue("d_28"); // Use helper
    const l28 = getNumericValue("l_28"); // Use helper
    // =(D28)*L28/1000 (Gas volume * Emission factor / 1000)
    return (d28 * l28) / 1000;
  }

  function calculateH28() {
    const d51 = window.TEUI.StateManager?.getValue("d_51"); // Get raw string value
    const e51 = getNumericValue("e_51"); // Get numeric value
    const d113 = window.TEUI.StateManager?.getValue("d_113"); // Get raw string value
    const h115 = getNumericValue("h_115"); // Get numeric value
    // =IF(AND($D$113="Gas", $D$51="Gas"), E51+H115, IF($D$51="Gas", E51, IF($D$113="Gas", H115, 0)))
    if (d113 === "Gas" && d51 === "Gas") {
      return e51 + h115;
    } else if (d51 === "Gas") {
      return e51;
    } else if (d113 === "Gas") {
      return h115;
    } else {
      return 0;
    }
  }

  function calculateJ28() {
    const h28 = getNumericValue("h_28"); // Use helper
    // =H28*0.0373*277.7778 (Gas volume to energy conversion)
    return h28 * 0.0373 * 277.7778;
  }

  function calculateK28() {
    const h28 = getNumericValue("h_28"); // Use helper
    const l28 = getNumericValue("l_28"); // Use helper
    // =H28*L28/1000 (Gas volume * Emission factor / 1000)
    return (h28 * l28) / 1000;
  }

  // Row 29: Propane calculations
  function calculateF29() {
    const d29 = getNumericValue("d_29"); // Use helper
    // =D29*14.019 (Propane to energy conversion)
    return d29 * 14.019;
  }

  function calculateG29() {
    const d29 = getNumericValue("d_29"); // Use helper
    const l29 = getNumericValue("l_29"); // Use helper
    // =D29*L29/1000 (Propane * Emission factor / 1000)
    return (d29 * l29) / 1000;
  }

  function calculateH29() {
    const d29 = getNumericValue("d_29"); // Use helper
    // =D29 (Target is same as actual for this case)
    return d29;
  }

  function calculateJ29() {
    const h29 = getNumericValue("h_29"); // Use helper
    // =H29*14.019 (Propane to energy conversion)
    return h29 * 14.019;
  }

  function calculateK29() {
    const h29 = getNumericValue("h_29"); // Use helper
    const l29 = getNumericValue("l_29"); // Use helper
    // =H29*L29/1000 (Propane * Emission factor / 1000)
    return (h29 * l29) / 1000;
  }

  // Row 30: Oil calculations
  function calculateF30() {
    const d30 = getNumericValue("d_30"); // Use helper
    // =D30*36.72*0.2777778 (Oil to energy conversion)
    return d30 * 36.72 * 0.2777778;
  }

  function calculateG30() {
    const d30 = getNumericValue("d_30"); // Use helper
    const l30 = getNumericValue("l_30"); // Use helper
    // =D30*L30/1000 (Oil * Emission factor / 1000)
    return (d30 * l30) / 1000;
  }

  function calculateH30() {
    const d51 = window.TEUI.StateManager?.getValue("d_51"); // Get raw string value
    const d113 = window.TEUI.StateManager?.getValue("d_113"); // Get raw string value
    const k54 = getNumericValue("k_54"); // CORRECTED: Use k_54 where Oil calculation is now located
    const f115 = getNumericValue("f_115"); // Get numeric value
    // =IF(AND($D$113="Oil", $D$51="Oil"), $K$54+$F$115, IF($D$51="Oil", K54, IF($D$113="Oil", F115, 0)))
    // --- CORRECTED LOGIC ---
    if (d113 === "Oil" && d51 === "Oil") {
      // Sum target Oil Litres from S13 heating (f_115) and S07 DHW (k_54)
      return k54 + f115;
    } else if (d51 === "Oil") {
      // Only DHW uses Oil
      return k54;
    } else if (d113 === "Oil") {
      // Only Heating uses Oil
      return f115;
    } else {
      return 0;
    }
  }

  function calculateJ30() {
    const h30 = getNumericValue("h_30"); // Use helper
    // =H30*36.72*0.2777778 (Oil to energy conversion)
    return h30 * 36.72 * 0.2777778;
  }

  function calculateK30() {
    const h30 = getNumericValue("h_30"); // Use helper
    const l30 = getNumericValue("l_30"); // Use helper
    // =H30*L30/1000 (Oil * Emission factor / 1000)
    return (h30 * l30) / 1000;
  }

  // Row 31: Wood calculations
  function calculateF31() {
    const d31 = getNumericValue("d_31"); // Use helper
    // =D31*1000 (Wood to energy conversion)
    return d31 * 1000;
  }

  function calculateG31() {
    const h31 = getNumericValue("h_31"); // Use helper
    const l31 = getNumericValue("l_31"); // Use helper
    // =H31*L31 (Wood * Emission factor)
    return h31 * l31;
  }

  function calculateH31() {
    const d31 = getNumericValue("d_31"); // Use helper
    // =D31 (Target is same as actual for this case)
    return d31;
  }

  function calculateJ31() {
    const h31 = getNumericValue("h_31"); // Use helper
    // =H31*1000 (Wood to energy conversion)
    return h31 * 1000;
  }

  function calculateK31() {
    const h31 = getNumericValue("h_31"); // Use helper
    const l31 = getNumericValue("l_31"); // Use helper
    // =H31*L31 (Wood * Emission factor)
    return h31 * l31;
  }

  // Row 32: Subtotals
  function calculateF32() {
    const f27 = getNumericValue("f_27"); // Use helper
    const f28 = getNumericValue("f_28"); // Use helper
    const f29 = getNumericValue("f_29"); // Use helper
    const f30 = getNumericValue("f_30"); // Use helper
    const f31 = getNumericValue("f_31"); // Use helper
    // =SUM(F27:F31) (Sum of all energy sources)
    return f27 + f28 + f29 + f30 + f31;
  }

  function calculateG32() {
    const g27 = getNumericValue("g_27"); // Use helper
    const g28 = getNumericValue("g_28"); // Use helper
    const g29 = getNumericValue("g_29"); // Use helper
    const g30 = getNumericValue("g_30"); // Use helper
    const g31 = getNumericValue("g_31"); // Use helper
    const d60 = getNumericValue("d_60"); // Use helper (Offsets in tCO2e)

    // =SUM(G27:G31)-(D60*1000) (Sum of emissions minus offsets)
    const result = g27 + g28 + g29 + g30 + g31 - d60 * 1000;

    return result;
  }

  function calculateJ32() {
    const j27 = getNumericValue("j_27"); // Use helper
    const j28 = getNumericValue("j_28"); // Use helper
    const j29 = getNumericValue("j_29"); // Use helper
    const j30 = getNumericValue("j_30"); // Use helper
    const j31 = getNumericValue("j_31"); // Use helper
    // =SUM(J27:J31) (Sum of all energy sources)
    return j27 + j28 + j29 + j30 + j31;
  }

  function calculateK32() {
    const k27 = getNumericValue("k_27"); // Use helper
    const k28 = getNumericValue("k_28"); // Use helper
    const k29 = getNumericValue("k_29"); // Use helper
    const k30 = getNumericValue("k_30"); // Use helper
    const k31 = getNumericValue("k_31"); // Use helper
    const d60 = getNumericValue("d_60"); // Use helper (Offsets in tCO2e)
    // =SUM(K27:K31)-(D60*1000) (Sum of emissions minus offsets)
    return k27 + k28 + k29 + k30 + k31 - d60 * 1000;
  }

  // Row 33: Total Net Energy
  function calculateD33() {
    const f27 = getNumericValue("f_27"); // Use helper
    const f28 = getNumericValue("f_28"); // Use helper
    const f29 = getNumericValue("f_29"); // Use helper
    const f30 = getNumericValue("f_30"); // Use helper
    const f31 = getNumericValue("f_31"); // Use helper
    const d43 = getNumericValue("d_43"); // Use helper
    const i43 = getNumericValue("i_43"); // Use helper
    // =SUM(F$27+F$28+F$29+F$30+F$31-D43-I43)/277.7777
    return (f27 + f28 + f29 + f30 + f31 - d43 - i43) / 277.7777;
  }

  function calculateH33() {
    const j27 = getNumericValue("j_27"); // Use helper
    const j28 = getNumericValue("j_28"); // Use helper
    const j29 = getNumericValue("j_29"); // Use helper
    const j30 = getNumericValue("j_30"); // Use helper
    const j31 = getNumericValue("j_31"); // Use helper
    const i43 = getNumericValue("i_43"); // Use helper
    const d43 = getNumericValue("d_43"); // Use helper
    // =SUM(J$27+J$28+J$29+J$30+J$31-I43-D43)/277.7777
    return (j27 + j28 + j29 + j30 + j31 - i43 - d43) / 277.7777;
  }

  // Row 34: Annual Percapita Energy
  function calculateD34() {
    const f32 = getNumericValue("f_32"); // Actual Net Energy Subtotal
    const d63 = getNumericValue("d_63"); // Occupants
    // New formula: =F32/D63 (Actual Net Energy / Occupants)
    return f32 / (d63 || 1); // Ensure d63 is not zero
  }

  function calculateF34() {
    const d33 = getNumericValue("d_33"); // Use helper
    const d63 = getNumericValue("d_63"); // Use helper
    // =D33/D63 (Total energy per person)
    return d33 / (d63 || 1);
  }

  function calculateH34() {
    const j32 = getNumericValue("j_32"); // Target Net Energy Subtotal
    const d63 = getNumericValue("d_63"); // Occupants
    // New formula: =J32/D63 (Target Net Energy / Occupants)
    return j32 / (d63 || 1); // Ensure d63 is not zero
  }

  function calculateJ34() {
    const h33 = getNumericValue("h_33"); // Use helper
    const d63 = getNumericValue("d_63"); // Use helper
    // =H33/D63 (Target GJ per person)
    return h33 / (d63 || 1);
  }

  // Function calculateL34 will be removed or effectively disabled later by removing its call and display
  /*
    function calculateL34() {
        const j32 = getNumericValue('j_32'); // CORRECTED: Target Net ekWh
        const d63 = getNumericValue('d_63'); // Occupants
        // New formula: =J32/D63 (Target kWh/pp)
        return j32 / (d63 || 1);
    }
    */

  // Row 35: Primary Energy
  function calculateD35() {
    const d14 = window.TEUI.StateManager?.getValue("d_14"); // Get raw string value
    const j27 = getNumericValue("j_27"); // Use helper
    const h35 = getNumericValue("h_35"); // Use helper
    const f27 = getNumericValue("f_27"); // Use helper
    // =IF(D14="Targeted Use", J27*H35, F27*H35)
    if (d14 === "Targeted Use") {
      return j27 * h35;
    } else {
      return f27 * h35;
    }
  }

  function calculateF35() {
    const d35 = getNumericValue("d_35"); // Use helper
    const h15 = getNumericValue("h_15"); // Use helper
    // =D35/H15 (Energy per floor area)
    return d35 / (h15 || 1);
  }

  // Register calculation functions
  function registerCalculations() {
    if (
      window.TEUI &&
      window.TEUI.Calculator &&
      window.TEUI.Calculator.registerCalculation
    ) {
      // Row 27
      window.TEUI.Calculator.registerCalculation("f_27", calculateF27);
      window.TEUI.Calculator.registerCalculation("g_27", calculateG27);
      window.TEUI.Calculator.registerCalculation("h_27", calculateH27);
      window.TEUI.Calculator.registerCalculation("j_27", calculateJ27);
      window.TEUI.Calculator.registerCalculation("k_27", calculateK27);

      // Row 28
      window.TEUI.Calculator.registerCalculation("f_28", calculateF28);
      window.TEUI.Calculator.registerCalculation("g_28", calculateG28);
      window.TEUI.Calculator.registerCalculation("h_28", calculateH28);
      window.TEUI.Calculator.registerCalculation("j_28", calculateJ28);
      window.TEUI.Calculator.registerCalculation("k_28", calculateK28);

      // Row 29
      window.TEUI.Calculator.registerCalculation("f_29", calculateF29);
      window.TEUI.Calculator.registerCalculation("g_29", calculateG29);
      window.TEUI.Calculator.registerCalculation("h_29", calculateH29);
      window.TEUI.Calculator.registerCalculation("j_29", calculateJ29);
      window.TEUI.Calculator.registerCalculation("k_29", calculateK29);

      // Row 30
      window.TEUI.Calculator.registerCalculation("f_30", calculateF30);
      window.TEUI.Calculator.registerCalculation("g_30", calculateG30);
      window.TEUI.Calculator.registerCalculation("h_30", calculateH30);
      window.TEUI.Calculator.registerCalculation("j_30", calculateJ30);
      window.TEUI.Calculator.registerCalculation("k_30", calculateK30);

      // Row 31
      window.TEUI.Calculator.registerCalculation("f_31", calculateF31);
      window.TEUI.Calculator.registerCalculation("g_31", calculateG31);
      window.TEUI.Calculator.registerCalculation("h_31", calculateH31);
      window.TEUI.Calculator.registerCalculation("j_31", calculateJ31);
      window.TEUI.Calculator.registerCalculation("k_31", calculateK31);

      // Row 32
      window.TEUI.Calculator.registerCalculation("f_32", calculateF32);
      window.TEUI.Calculator.registerCalculation("g_32", calculateG32);
      window.TEUI.Calculator.registerCalculation("j_32", calculateJ32);
      window.TEUI.Calculator.registerCalculation("k_32", calculateK32);

      // Row 33
      window.TEUI.Calculator.registerCalculation("d_33", calculateD33);
      window.TEUI.Calculator.registerCalculation("h_33", calculateH33);

      // Row 34
      window.TEUI.Calculator.registerCalculation("d_34", calculateD34);
      window.TEUI.Calculator.registerCalculation("f_34", calculateF34);
      window.TEUI.Calculator.registerCalculation("h_34", calculateH34);
      window.TEUI.Calculator.registerCalculation("j_34", calculateJ34);
      window.TEUI.Calculator.registerCalculation("l_34", calculateL34);

      // Row 35
      window.TEUI.Calculator.registerCalculation("d_35", calculateD35);
      window.TEUI.Calculator.registerCalculation("f_35", calculateF35);
    }
  }

  /**
   * Called when the section is rendered
   */
  function onSectionRendered() {
    // Initialize Pattern A Dual-State Module
    ModeManager.initialize();

    // Inject header controls for Target/Reference toggle
    injectHeaderControls();

    // --- Start: Add Default Province Initialization ---
    // Ensure Ontario is selected by default for emissions calculations
    if (window.TEUI && window.TEUI.StateManager) {
      // Only set default if no province is already set
      if (!window.TEUI.StateManager.getValue("d_19")) {
        window.TEUI.StateManager.setValue("d_19", "ON", "default");
        // If a dropdown exists, ensure its state is also set
        if (!window.TEUI.StateManager.getValue("dd_d_19")) {
          window.TEUI.StateManager.setValue("dd_d_19", "ON", "default");
        }
      }
    }
    // --- End: Add Default Province Initialization ---

    // Initialize event handlers
    initializeEventHandlers();

    // Register calculation functions
    registerCalculations();

    // Update electricity emission factor based on province and year
    // Moved the timeout wrapper here to ensure factors are updated after potential defaults are set
    setTimeout(() => {
      updateElectricityEmissionFactor();
      // CRITICAL: Run dual-engine calculations on initial load
      calculateAll();

      // Trigger initial calculations after factors and subtotals are set
      if (window.TEUI && window.TEUI.Calculator) {
        window.TEUI.Calculator.calculateSection(sectionRows.metadata.sectionId);
      }
    }, 50); // Short delay to allow potential state updates
  }

  //==========================================================================
  // PART 6: CALCULATION LOGIC
  //==========================================================================

  /**
   * DUAL-ENGINE ARCHITECTURE: Helper functions to get values based on calculation mode
   */

  /**
   * Get numeric value from Application state (for Target calculations)
   */
  function getAppNumericValue(fieldId, defaultValue = 0) {
    const value =
      window.TEUI?.StateManager?.getApplicationValue?.(fieldId) ||
      window.TEUI?.StateManager?.getValue?.(fieldId);

    // Use the global parseNumeric function to handle comma-formatted values
    return window.TEUI?.parseNumeric?.(value, defaultValue) || defaultValue;
  }

  /**
   * Get numeric value for Reference calculations
   * First checks for ref_ prefixed values, then falls back to application state
   */
  function getRefNumericValue(fieldId, defaultValue = 0) {
    // First try to get ref_ prefixed value (from upstream Reference calculations)
    const refFieldId = `ref_${fieldId}`;
    let value = window.TEUI.StateManager?.getValue?.(refFieldId);

    // If no ref_ value, fall back to application state
    if (value === null || value === undefined) {
      value =
        window.TEUI?.StateManager?.getApplicationValue?.(fieldId) ||
        window.TEUI?.StateManager?.getValue?.(fieldId);
    }

    // Use the global parseNumeric function to handle comma-formatted values
    return window.TEUI?.parseNumeric?.(value, defaultValue) || defaultValue;
  }

  /**
   * DUAL-ENGINE: Calculate all Reference values using Reference state
   */
  function calculateReferenceModel() {
    // Helper function to set value only if changed (prevents infinite loops)
    const setValueIfChanged = (fieldId, newValue) => {
      const currentValue = window.TEUI.StateManager.getValue(fieldId);
      const newValueStr = newValue.toString();
      if (currentValue !== newValueStr) {
        window.TEUI.StateManager.setValue(fieldId, newValueStr, "calculated");
        return true;
      }
      return false;
    };

    try {
      // Get all necessary Reference values FIRST to ensure data integrity
      const ref_h27 = getRefNumericValue("h_27", 0);
      const ref_h28 = getRefNumericValue("h_28", 0);
      const ref_h29 = getRefNumericValue("h_29", 0);
      const ref_h30 = getRefNumericValue("h_30", 0);
      const ref_h31 = getRefNumericValue("h_31", 0);
      const ref_j27 = getRefNumericValue("j_27", 0);
      const ref_j28 = getRefNumericValue("j_28", 0);
      const ref_j29 = getRefNumericValue("j_29", 0);
      const ref_j30 = getRefNumericValue("j_30", 0);
      const ref_j31 = getRefNumericValue("j_31", 0);
      const ref_k27 = getRefNumericValue("k_27", 0);
      const ref_k28 = getRefNumericValue("k_28", 0);
      const ref_k29 = getRefNumericValue("k_29", 0);
      const ref_k30 = getRefNumericValue("k_30", 0);
      const ref_k31 = getRefNumericValue("k_31", 0);
      const ref_l27 = getRefNumericValue("l_27", 0);
      const ref_l28 = getRefNumericValue("l_28", 1921);
      const ref_l29 = getRefNumericValue("l_29", 2970);
      const ref_l30 = getRefNumericValue("l_30", 2753);
      const ref_l31 = getRefNumericValue("l_31", 150);
      const d60 = getRefNumericValue("d_60", 0);

      // Calculate Reference subtotals
      const ref_j32 = ref_j27 + ref_j28 + ref_j29 + ref_j30 + ref_j31;
      const ref_k32 =
        ref_k27 + ref_k28 + ref_k29 + ref_k30 + ref_k31 - d60 * 1000;

      // Store Reference values with ref_ prefix - WITH CHANGE DETECTION
      setValueIfChanged("ref_j_32", ref_j32);
      setValueIfChanged("ref_k_32", ref_k32);

      console.log(
        `S04 REFERENCE MODEL: ref_j_32=${ref_j32}, ref_k_32=${ref_k32}`,
      );
    } catch (error) {
      console.error(
        "[Section04] Error during Reference Model calculation:",
        error,
      );
    }
  }

  /**
   * TARGET MODEL ENGINE: Calculate all Target/Application values
   */
  function calculateTargetModel() {
    // Helper function to set value only if changed (prevents infinite loops)
    const setValueIfChanged = (fieldId, newValue) => {
      const currentValue = window.TEUI.StateManager.getValue(fieldId);
      const newValueStr = newValue.toString();
      if (currentValue !== newValueStr) {
        window.TEUI.StateManager.setValue(fieldId, newValueStr, "calculated");
        return true;
      }
      return false;
    };

    try {
      // Get all necessary Reference values FIRST to ensure data integrity
      const ref_h27 = getRefNumericValue("h_27", 0);
      const ref_h28 = getRefNumericValue("h_28", 0);
      const ref_h29 = getRefNumericValue("h_29", 0);
      const ref_h30 = getRefNumericValue("h_30", 0);
      const ref_h31 = getRefNumericValue("h_31", 0);
      const ref_j27 = getRefNumericValue("j_27", 0);
      const ref_j28 = getRefNumericValue("j_28", 0);
      const ref_j29 = getRefNumericValue("j_29", 0);
      const ref_j30 = getRefNumericValue("j_30", 0);
      const ref_j31 = getRefNumericValue("j_31", 0);
      const ref_k27 = getRefNumericValue("k_27", 0);
      const ref_k28 = getRefNumericValue("k_28", 0);
      const ref_k29 = getRefNumericValue("k_29", 0);
      const ref_k30 = getRefNumericValue("k_30", 0);
      const ref_k31 = getRefNumericValue("k_31", 0);
      const ref_l27 = getRefNumericValue("l_27", 0);
      const ref_l28 = getRefNumericValue("l_28", 1921);
      const ref_l29 = getRefNumericValue("l_29", 2970);
      const ref_l30 = getRefNumericValue("l_30", 2753);
      const ref_l31 = getRefNumericValue("l_31", 150);
      const ref_d60 = getRefNumericValue("d_60", 0);

      // Calculate all row 27-31 actuals (F and G columns)
      setCalculatedValue("f_27", calculateF27(), "number-2dp-comma");
      setCalculatedValue("g_27", calculateG27(), "number-2dp-comma");

      setCalculatedValue("f_28", calculateF28(), "number-2dp-comma");
      setCalculatedValue("g_28", calculateG28(), "number-2dp-comma");

      setCalculatedValue("f_29", calculateF29(), "number-2dp-comma");
      setCalculatedValue("g_29", calculateG29(), "number-2dp-comma");

      setCalculatedValue("f_30", calculateF30(), "number-2dp-comma");
      setCalculatedValue("g_30", calculateG30(), "number-2dp-comma");

      setCalculatedValue("f_31", calculateF31(), "number-2dp-comma");
      setCalculatedValue("h_31", getNumericValue("d_31"), "number-2dp-comma");
      setCalculatedValue("g_31", calculateG31(), "number-2dp-comma");

      // Calculate all row 27-31 targets (H, J, and K columns)
      setCalculatedValue("h_27", getNumericValue("d_136"), "number-2dp-comma");
      setCalculatedValue("j_27", calculateJ27(), "number-2dp-comma");
      setCalculatedValue("k_27", calculateK27(), "number-2dp-comma");

      setCalculatedValue("h_28", calculateH28(), "number-2dp-comma");
      setCalculatedValue("j_28", calculateJ28(), "number-2dp-comma");
      setCalculatedValue("k_28", calculateK28(), "number-2dp-comma");

      setCalculatedValue("h_29", calculateH29(), "number-2dp-comma");
      setCalculatedValue("j_29", calculateJ29(), "number-2dp-comma");
      setCalculatedValue("k_29", calculateK29(), "number-2dp-comma");

      setCalculatedValue("h_30", calculateH30(), "number-2dp-comma");
      setCalculatedValue("j_30", calculateJ30(), "number-2dp-comma");

      setCalculatedValue("h_30", calculateH30(), "number-2dp-comma");
      setCalculatedValue("j_30", calculateJ30(), "number-2dp-comma");
      setCalculatedValue("k_30", calculateK30(), "number-2dp-comma");

      setCalculatedValue("j_31", calculateJ31(), "number-2dp-comma");
      setCalculatedValue("k_31", calculateK31(), "number-2dp-comma");

      // Update subtotals and dependent totals
      updateSubtotals();
      updateDependentTotals();
    } catch (error) {
      console.error(
        "[Section04] Error during Target Model calculation:",
        error,
      );
    }
  }

  /**
   * Main calculation function for Section 04.
   * Now runs BOTH calculation engines.
   */
  function calculateAll() {
    calculateReferenceModel();
    calculateTargetModel();
  }

  //==========================================================================
  // PART 7: PUBLIC API
  //==========================================================================

  // Return public API using standardized function names
  return {
    // Standardized names REQUIRED by FieldManager
    getFields: getFields,
    getDropdownOptions: getDropdownOptions,
    getLayout: getLayout,
    initializeEventHandlers: initializeEventHandlers,
    onSectionRendered: onSectionRendered,

    // Keep metadata accessor if needed elsewhere, though not standard
    getMetadata: function () {
      return sectionRows.metadata;
    },

    // Expose calculation and helper functions if they need to be called externally
    // or by listeners that might have a different 'this' context.
    calculateAll: calculateAll, // Now correctly points to the defined function
    calculateReferenceModel: calculateReferenceModel, // NEW: Reference engine
    calculateTargetModel: calculateTargetModel, // NEW: Target engine
    
    // Expose ModeManager for global Toggle and cross-section communication
    ModeManager: ModeManager,
    updateElectricityEmissionFactor: updateElectricityEmissionFactor,
    getProvinceCode: getProvinceCode, // Expose getProvinceCode
    // ... any other functions that need to be public ...

    // Keep calculations exposed if needed (already present)
    calculations: {
      // ... (existing calculation functions) ...
      calculateF27: calculateF27,
      calculateG27: calculateG27,
      calculateH27: calculateH27,
      calculateJ27: calculateJ27,
      calculateK27: calculateK27,
      calculateF28: calculateF28,
      calculateG28: calculateG28,
      calculateH28: calculateH28,
      calculateJ28: calculateJ28,
      calculateK28: calculateK28,
      calculateF29: calculateF29,
      calculateG29: calculateG29,
      calculateH29: calculateH29,
      calculateJ29: calculateJ29,
      calculateK29: calculateK29,
      calculateF30: calculateF30,
      calculateG30: calculateG30,
      calculateH30: calculateH30,
      calculateJ30: calculateJ30,
      calculateK30: calculateK30,
      calculateF31: calculateF31,
      calculateG31: calculateG31,
      calculateH31: calculateH31,
      calculateJ31: calculateJ31,
      calculateK31: calculateK31,
      calculateF32: calculateF32,
      calculateG32: calculateG32,
      calculateJ32: calculateJ32,
      calculateK32: calculateK32,
      calculateD33: calculateD33,
      calculateH33: calculateH33,
      calculateD34: calculateD34,
      calculateF34: calculateF34,
      calculateH34: calculateH34,
      calculateJ34: calculateJ34,
      calculateD35: calculateD35,
      calculateF35: calculateF35,
    },

    updateSubtotals: updateSubtotals,
    updateDependentTotals: updateDependentTotals,
  };

  // Expose ModeManager globally for cross-section communication
  window.TEUI.sect04 = window.TEUI.sect04 || {};
  window.TEUI.sect04.ModeManager = ModeManager;
  
})();
