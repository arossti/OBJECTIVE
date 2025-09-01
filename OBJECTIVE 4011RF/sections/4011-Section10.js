/**
 * 4011-Section10.js
 * Radiant Gains (Section 10) module for TEUI Calculator 4.011
 *
 * Uses the consolidated declarative approach where field definitions
 * are integrated directly into the layout structure.
 */

// Ensure namespace exists
window.TEUI = window.TEUI || {};
window.TEUI.SectionModules = window.TEUI.SectionModules || {};

// Section 10: Radiant Gains Module
window.TEUI.SectionModules.sect10 = (function () {
  //==========================================================================
  // DUAL-STATE ARCHITECTURE (Self-Contained State Module)
  //==========================================================================

  // PATTERN 1: Internal State Objects (Self-Contained + Persistent)
  const TargetState = {
    state: {},
    listeners: {},
    initialize: function () {
      const savedState = localStorage.getItem("S10_TARGET_STATE");
      if (savedState) {
        this.state = JSON.parse(savedState);
      } else {
        this.setDefaults();
      }
    },
    setDefaults: function () {
      // ✅ SINGLE SOURCE OF TRUTH: Read defaults from field definitions only
      // This prevents data corruption from duplicate defaults
      this.state = {};

      // Get all field definitions
      const fields = getFields();

      // Only populate defaults that exist in field definitions
      Object.keys(fields).forEach((fieldId) => {
        const defaultValue = getFieldDefault(fieldId);
        if (defaultValue !== "") {
          this.state[fieldId] = defaultValue;
        }
      });

      console.log(
        "S10: TargetState defaults loaded from field definitions (single source of truth)",
      );
    },
    saveState: function () {
      localStorage.setItem("S10_TARGET_STATE", JSON.stringify(this.state));
    },
    setValue: function (fieldId, value) {
      this.state[fieldId] = value;
      this.saveState();
    },
    getValue: function (fieldId) {
      return this.state[fieldId];
    },
  };

  const ReferenceState = {
    state: {},
    listeners: {},
    initialize: function () {
      const savedState = localStorage.getItem("S10_REFERENCE_STATE");
      if (savedState) {
        this.state = JSON.parse(savedState);
      } else {
        this.setDefaults();
      }
    },
    setDefaults: function () {
      // ✅ SINGLE SOURCE OF TRUTH: Read defaults from field definitions only
      // This prevents data corruption from duplicate/different defaults
      this.state = {};

      // Get all field definitions
      const fields = getFields();

      // Start with field definition defaults
      Object.keys(fields).forEach((fieldId) => {
        const defaultValue = getFieldDefault(fieldId);
        if (defaultValue !== "") {
          this.state[fieldId] = defaultValue;
        }
      });

      // ✅ REFERENCE MODE OVERRIDES: Only values that should differ from Target
      // These represent building code reference values vs actual building values
      this.state.d_73 = "5.00"; // Reference: Smaller window area
      this.state.e_73 = "South"; // Reference: Optimal orientation
      this.state.f_73 = "0.35"; // Reference: Better shading factor
      this.state.h_73 = "0"; // Reference: No user adjustments
      this.state.d_74 = "60.00"; // Reference: Smaller window area
      this.state.f_74 = "0.35"; // Reference: Better shading factor
      this.state.h_74 = "0"; // Reference: No user adjustments
      this.state.d_75 = "2.50"; // Reference: Smaller window area
      this.state.f_75 = "0.35"; // Reference: Better shading factor
      this.state.h_75 = "0"; // Reference: No user adjustments
      this.state.f_76 = "0.35"; // Reference: Better shading factor
      this.state.h_76 = "0"; // Reference: No user adjustments
      this.state.f_77 = "0.35"; // Reference: Better shading factor
      this.state.h_77 = "0"; // Reference: No user adjustments
      this.state.f_78 = "0.35"; // Reference: Better shading factor
      this.state.h_78 = "0"; // Reference: No user adjustments

      console.log(
        "S10: ReferenceState defaults loaded from field definitions with Reference overrides",
      );
    },
    saveState: function () {
      localStorage.setItem("S10_REFERENCE_STATE", JSON.stringify(this.state));
    },
    setValue: function (fieldId, value) {
      this.state[fieldId] = value;
      this.saveState();
    },
    getValue: function (fieldId) {
      return this.state[fieldId];
    },
  };

  // PATTERN 2: The ModeManager Facade
  const ModeManager = {
    currentMode: "target",
    initialize: function () {
      TargetState.initialize();
      ReferenceState.initialize();
    },
    switchMode: function (mode) {
      if (
        this.currentMode === mode ||
        (mode !== "target" && mode !== "reference")
      )
        return;
      this.currentMode = mode;
      console.log(`S10: Switched to ${mode.toUpperCase()} mode`);

      // ✅ PATTERN A: UI toggle only switches display, values should already be calculated
      this.refreshUI();
      this.updateCalculatedDisplayValues(); // ✅ ADD: Update calculated field displays for new mode
    },
    resetState: function () {
      console.log(
        "S10: Resetting state and clearing localStorage for Section 10.",
      );
      TargetState.setDefaults();
      TargetState.saveState();
      ReferenceState.setDefaults();
      ReferenceState.saveState();
      console.log("S10: States have been reset to defaults.");

      // After resetting, refresh the UI and recalculate.
      this.refreshUI();
      calculateAll();
      this.updateCalculatedDisplayValues(); // ✅ CRITICAL: Update DOM after calculations
    },
    getCurrentState: function () {
      return this.currentMode === "target" ? TargetState : ReferenceState;
    },
    getValue: function (fieldId) {
      return this.getCurrentState().getValue(fieldId);
    },
    setValue: function (fieldId, value, source = "user") {
      this.getCurrentState().setValue(fieldId, value, source);

      // BRIDGE: Sync changes to global StateManager for downstream sections
      if (this.currentMode === "target") {
        window.TEUI.StateManager.setValue(fieldId, value, source);
      } else if (this.currentMode === "reference") {
        // 🔧 FIX: Bridge Reference values with ref_ prefix for downstream consumption
        window.TEUI.StateManager.setValue(`ref_${fieldId}`, value, source);
        // console.log(`[S10] 🔗 Published ref_${fieldId}=${value} to StateManager for S15`);
      }
    },
    refreshUI: function () {
      const sectionElement = document.getElementById("envelopeRadiantGains");
      if (!sectionElement) return;

      const currentState = this.getCurrentState();

      const fieldsToSync = [
        "d_73",
        "e_73",
        "f_73",
        "g_73",
        "h_73",
        "d_74",
        "e_74",
        "f_74",
        "g_74",
        "h_74",
        "d_75",
        "e_75",
        "f_75",
        "g_75",
        "h_75",
        "d_76",
        "e_76",
        "f_76",
        "g_76",
        "h_76",
        "d_77",
        "e_77",
        "f_77",
        "g_77",
        "h_77",
        "d_78",
        "e_78",
        "f_78",
        "g_78",
        "h_78",
        "d_80",
      ];

      fieldsToSync.forEach((fieldId) => {
        const stateValue = currentState.getValue(fieldId);
        if (stateValue === undefined || stateValue === null) return;

        const element = sectionElement.querySelector(
          `[data-field-id="${fieldId}"]`,
        );
        if (!element) return;

        const slider = element.matches('input[type="range"]')
          ? element
          : element.querySelector('input[type="range"]');
        const dropdown = element.matches("select")
          ? element
          : element.querySelector("select");

        if (slider) {
          const numericValue = window.TEUI.parseNumeric(stateValue, 0);
          slider.value = numericValue;

          // CORRECTED PATTERN: Use the direct nextElementSibling property, which is the proven pattern from Section 08.
          const display = slider.nextElementSibling;

          if (display) {
            const displayValue = window.TEUI.parseNumeric(stateValue, 0);
            let textContent;
            if (fieldId.startsWith("g_") || fieldId.startsWith("h_")) {
              textContent = `${displayValue}%`;
            } else {
              textContent = parseFloat(displayValue).toFixed(2);
            }
            display.textContent = textContent;
          }
        } else if (dropdown) {
          dropdown.value = stateValue;
        } else if (element.hasAttribute("contenteditable")) {
          element.textContent = stateValue;
        }
      });
    },

    // Update displayed calculated values based on current mode (Target vs Reference)
    updateCalculatedDisplayValues: function () {
      if (!window.TEUI?.StateManager) return;

      // All calculated fields that need mode-aware display updates
      const calculatedFields = [
        // Gain factors (rows 73-78)
        "m_73", "m_74", "m_75", "m_76", "m_77", "m_78",
        // Heating gains (rows 73-78, subtotal 79)
        "i_73", "i_74", "i_75", "i_76", "i_77", "i_78", "i_79",
        // Cooling gains (rows 73-78, subtotal 79)
        "k_73", "k_74", "k_75", "k_76", "k_77", "k_78", "k_79",
        // Percentages (rows 73-78, subtotal 79)
        "j_73", "j_74", "j_75", "j_76", "j_77", "j_78", "j_79",
        "l_73", "l_74", "l_75", "l_76", "l_77", "l_78", "l_79",
        // Costs (rows 73-78)
        "p_73", "p_74", "p_75", "p_76", "p_77", "p_78",
        // Utilization factors (rows 80-82)
        "e_80", "e_81", "e_82", "g_80", "g_81", "i_80", "i_81", "i_82"
      ];

      calculatedFields.forEach((fieldId) => {
        let valueToDisplay;
        // ✅ STRICT MODE ISOLATION: Read from local state objects, not global StateManager
        if (this.currentMode === "reference") {
            valueToDisplay = ReferenceState.getValue(fieldId);
        } else {
            valueToDisplay = TargetState.getValue(fieldId);
        }

        if (valueToDisplay !== null && valueToDisplay !== undefined) {
          const element = document.querySelector(
            `[data-field-id="${fieldId}"]`,
          );
          if (element) {
            const num = window.TEUI.parseNumeric(valueToDisplay, 0);

            // Format based on field type
            let formattedValue;
            if (fieldId.startsWith("m_")) {
              formattedValue = window.TEUI.formatNumber(num, "number-2dp"); // Gain factors
            } else if (fieldId.startsWith("j_") || fieldId.startsWith("l_")) {
              formattedValue = window.TEUI.formatNumber(num, "percent-0dp"); // Percentages
            } else if (fieldId.startsWith("p_")) {
              formattedValue = window.TEUI.formatNumber(num, "currency"); // Costs
            } else {
              formattedValue = window.TEUI.formatNumber(num, "number-2dp-comma"); // Default
            }

            element.textContent = formattedValue;
            // console.log(`[S10DISPLAY] Display (${this.currentMode}) ${fieldId} = ${formattedValue}`);
          }
        }
      });
    },
  };

  // Expose globally for cross-section communication
  window.TEUI.sect10 = window.TEUI.sect10 || {};
  window.TEUI.sect10.ModeManager = ModeManager;

  //==========================================================================
  // HELPER FUNCTIONS (Refactored for Self-Contained State Module)
  //==========================================================================

  function getNumericValue(fieldId) {
    // For values INTERNAL to this section
    const rawValue = ModeManager.getValue(fieldId);
    return window.TEUI.parseNumeric(rawValue) || 0;
  }

  function getGlobalNumericValue(fieldId) {
    // For values EXTERNAL to this section (from global StateManager)
    const rawValue = window.TEUI?.StateManager?.getValue(fieldId);
    return window.TEUI.parseNumeric(rawValue) || 0;
  }

  /**
   * Get field default value from field definitions (single source of truth)
   * Prevents hardcoded defaults anti-pattern
   */
  function getFieldDefault(fieldId) {
    const fields = getFields();
    return fields[fieldId]?.defaultValue || fields[fieldId]?.value || "";
  }

  function getFieldValue(fieldId) {
    const stateValue = ModeManager.getValue(fieldId);
    if (stateValue != null) return stateValue;

    // Fallback for non-state values (e.g., legacy DOM elements)
    const element = document.querySelector(`[data-field-id="${fieldId}"]`);
    return element ? (element.value ?? element.textContent?.trim()) : null;
  }

  /**
   * Sets calculated value in the correct state object (Target or Reference).
   * This function NO LONGER touches the DOM.
   */
  function setCalculatedValue(fieldId, rawValue, isReferenceCalculation = false) {
      const valueToStore = (rawValue !== null && rawValue !== undefined) ? String(rawValue) : "0";
      
      const state = isReferenceCalculation ? ReferenceState : TargetState;
      state.setValue(fieldId, valueToStore);
  
      // Also publish to the global StateManager for downstream sections
      if (window.TEUI?.StateManager) {
          const key = isReferenceCalculation ? `ref_${fieldId}` : fieldId;
          window.TEUI.StateManager.setValue(key, valueToStore, "calculated");
      }
  }

  /**
   * Formats a number for display.
   * Handles specific formats like percentage (integer + %), currency.
   * @param {number} value - The number to format.
   * @param {string} [format='number'] - 'number', 'percent', 'currency'.
   * @returns {string} The formatted number.
   */
  function formatNumber(value, format = "number") {
      if (value === null || value === undefined || isNaN(value)) {
          return format === "percent"
              ? "0%"
              : format === "currency"
                  ? "$0.00"
                  : "0.00";
      }

      const num = Number(value);

      if (format === "percent") {
          // Input is raw decimal (e.g., 0.152 for 15.20%), output with 2 decimal places + %
          return (
              (num * 100).toLocaleString(undefined, {
                  minimumFractionDigits: 2,
                  maximumFractionDigits: 2,
              }) + "%"
          );
      } else if (format === "currency") {
          return (
              "$" +
              num.toLocaleString("en-US", {
                  minimumFractionDigits: 2,
                  maximumFractionDigits: 2,
              })
          );
      } else {
          // Default number format (kWh, Gain Factor, etc.)
          return num.toLocaleString("en-US", {
              minimumFractionDigits: 2,
              maximumFractionDigits: 2,
          });
      }
  }

  function handleFieldBlur(_event) {
    const fieldElement = this;
    const currentFieldId = fieldElement.getAttribute("data-field-id");
    if (!currentFieldId) return;

    if (currentFieldId === "d_74") {
      /* No specific action for d_74 blur, but keeping structure */
    }

    let valueStr = fieldElement.textContent.trim().replace(/,/g, "");
    let displayValue = "0.00";
    let rawValueToStore = "0";

    let numValue = window.TEUI.parseNumeric(valueStr, NaN);

    if (!isNaN(numValue)) {
      // Successfully parsed a number
      // Store the raw number string *first* for all valid number cases
      rawValueToStore = numValue.toString();

      // Apply specific formatting based on field type
      if (currentFieldId === "d_97") {
        // Thermal Bridge Penalty (%)
        // Convert input number to decimal (assume input "20" means 20% -> 0.2)
        let decimalValue = numValue / 100;
        // Clamp the DECIMAL value between 0 and 1
        decimalValue = Math.max(0, Math.min(1, decimalValue));
        rawValueToStore = decimalValue.toString(); // Overwrite with clamped decimal value for state
        displayValue = formatNumber(decimalValue * 100, "number"); // Display as number 0-100, not percentage string
      } else if (currentFieldId.startsWith("g_")) {
        // U-Value (3 decimals)
        displayValue = formatNumber(numValue, "W/m2"); // Use specific format
        // rawValueToStore is already set to numValue.toString()
      } else {
        // Default: Area (d_), RSI (f_) - 2 decimals
        displayValue = formatNumber(numValue, "number");
        // rawValueToStore is already set to numValue.toString()
      }
    } else {
      // Handle invalid input (set to 0 or 0%)
      if (currentFieldId === "d_97") {
        displayValue = "0%";
        rawValueToStore = "0"; // Store 0 for invalid TBP
      } else if (currentFieldId.startsWith("g_")) {
        displayValue = formatNumber(0, "W/m2");
        rawValueToStore = "0";
      } else {
        displayValue = formatNumber(0, "number");
        rawValueToStore = "0";
      }
    }
    fieldElement.textContent = displayValue; // Update DOM display

    // ✅ DUAL-STATE: Store value using the ModeManager facade.
    ModeManager.setValue(currentFieldId, rawValueToStore, "user-modified");

    // Trigger recalculation using the standardized calculateAll function
    if (typeof calculateAll === "function") {
      calculateAll();
    }
  }

  function setElementClass(fieldId, className) {
    const element = document.querySelector(`[data-field-id="${fieldId}"]`);
    if (element) {
      // Remove existing status classes
      element.classList.remove("checkmark", "warning");
      // Add the new class
      element.classList.add(className);
    }
  }

  function setIndicatorClass(fieldId, newClass, potentialClasses) {
    const element = document.querySelector(`[data-field-id="${fieldId}"]`);
    if (element) {
      const baseClass = "gain-indicator"; // Always gain for this section
      element.classList.remove(...potentialClasses);
      if (newClass) {
        element.classList.add(newClass);
        if (!element.classList.contains(baseClass)) {
          element.classList.add(baseClass);
        }
      } else {
        element.classList.remove(baseClass);
      }
    }
  }

  //==========================================================================
  // CONSOLIDATED FIELD DEFINITIONS AND LAYOUT
  //==========================================================================

  // Define rows with integrated field definitions
  const sectionRows = {
    // UNIT SUBHEADER - MUST COME FIRST
    header: {
      id: "10-ID",
      rowId: "10-ID",
      label: "RG-Unts",
      cells: {
        c: { content: "" }, // Empty column for row labels
        d: { content: "AREA m² " }, // Empty column for row labels
        e: {
          content: "ORIENTATION",
          classes: ["section-subheader", "align-center"],
          style: "white-space: pre-line;",
        },
        f: {
          content: "SHGC",
          classes: ["section-subheader", "align-center"],
          style: "white-space: pre-line;",
        },
        g: {
          content: "WINTER SHADING",
          classes: ["section-subheader", "align-center"],
          style: "white-space: pre-line;",
        },
        h: {
          content: "SUMMER SHADING",
          classes: ["section-subheader", "align-center"],
          style: "white-space: pre-line;",
        },
        i: {
          content: "HTG GAIN kWh/yr",
          classes: ["section-subheader", "align-center"],
          style: "white-space: pre-line;",
        },
        j: {
          content: "HTG GAIN %",
          classes: ["section-subheader", "align-center"],
          style: "white-space: pre-line;",
        },
        k: {
          content: "COOL GAIN kWh/yr",
          classes: ["section-subheader", "align-center"],
          style: "white-space: pre-line;",
        },
        l: {
          content: "COOL GAIN %",
          classes: ["section-subheader", "align-center"],
          style: "white-space: pre-line;",
        },
        m: {
          content: "G-FACTOR kWh/m²/yr",
          classes: ["section-subheader", "align-center"],
          style: "white-space: pre-line;",
        },
      },
    },

    // Row 73: G.7 Doors
    73: {
      id: "G.7",
      rowId: "G.7",
      label: "Doors",
      cells: {
        c: { label: "Doors" },
        d: {
          fieldId: "d_73",
          type: "editable",
          value: "7.50",
          section: "envelopeRadiantGains",
          classes: ["user-input", "col-medium"],
        },
        e: {
          fieldId: "e_73",
          type: "dropdown",
          dropdownId: "dd_e_73",
          value: "Average",
          section: "envelopeRadiantGains",
          options: [
            { value: "North", name: "North" },
            { value: "NorthEast", name: "NorthEast" },
            { value: "East", name: "East" },
            { value: "SouthEast", name: "SouthEast" },
            { value: "South", name: "South" },
            { value: "SouthWest", name: "SouthWest" },
            { value: "West", name: "West" },
            { value: "NorthWest", name: "NorthWest" },
            { value: "Average", name: "Average" },
            { value: "Skylight", name: "Skylight" },
          ],
          classes: ["col-medium"],
        },
        f: {
          fieldId: "f_73",
          type: "coefficient_slider",
          value: "0.50",
          min: 0.2,
          max: 0.6,
          step: 0.05,
          section: "envelopeRadiantGains",
          classes: ["col-small", "slider-container"],
        },
        g: {
          fieldId: "g_73",
          type: "percentage",
          value: "0",
          min: 0,
          max: 100,
          step: 1,
          section: "envelopeRadiantGains",
          classes: ["col-large", "slider-container"],
        },
        h: {
          fieldId: "h_73",
          type: "percentage",
          value: "100",
          min: 0,
          max: 100,
          step: 1,
          section: "envelopeRadiantGains",
          classes: ["col-large", "slider-container"],
        },
        i: {
          fieldId: "i_73",
          type: "calculated",
          value: "225.00",
          section: "envelopeRadiantGains",
          dependencies: ["d_73", "e_73", "f_73", "g_73"],
        },
        j: {
          fieldId: "j_73",
          type: "calculated",
          value: "1.55%",
          section: "envelopeRadiantGains",
          dependencies: ["i_73", "h_79"],
        },
        k: {
          fieldId: "k_73",
          type: "calculated",
          value: "0.00",
          section: "envelopeRadiantGains",
          dependencies: ["d_73", "e_73", "f_73", "h_73"],
        },
        l: {
          fieldId: "l_73",
          type: "calculated",
          value: "0.00%",
          section: "envelopeRadiantGains",
          dependencies: ["k_73", "j_79"],
        },
        m: {
          fieldId: "m_73",
          type: "calculated",
          value: "50",
          section: "envelopeRadiantGains",
          dependencies: ["e_73"],
          classes: ["reference-value"],
        },
        p: {
          fieldId: "p_73",
          type: "calculated",
          dependencies: ["l_12", "k_73", "i_73"],
        }, // Column P (Cost)
      },
    },

    // Row 74: G.8.1 Window Area North
    74: {
      id: "G.8.1",
      rowId: "G.8.1",
      label: "Window Area North",
      cells: {
        c: { label: "Window Area North" },
        d: {
          fieldId: "d_74",
          type: "editable",
          value: "81.14",
          section: "envelopeRadiantGains",
          classes: ["user-input", "col-medium"],
        },
        e: {
          fieldId: "e_74",
          type: "dropdown",
          dropdownId: "dd_e_74",
          value: "North",
          section: "envelopeRadiantGains",
          options: [
            { value: "North", name: "North" },
            { value: "NorthEast", name: "NorthEast" },
            { value: "East", name: "East" },
            { value: "SouthEast", name: "SouthEast" },
            { value: "South", name: "South" },
            { value: "SouthWest", name: "SouthWest" },
            { value: "West", name: "West" },
            { value: "NorthWest", name: "NorthWest" },
            { value: "Average", name: "Average" },
            { value: "Skylight", name: "Skylight" },
          ],
          classes: ["col-medium"],
        },
        f: {
          fieldId: "f_74",
          type: "coefficient_slider",
          value: "0.50",
          min: 0.2,
          max: 0.6,
          step: 0.05,
          section: "envelopeRadiantGains",
          classes: ["col-small", "slider-container"],
        },
        g: {
          fieldId: "g_74",
          type: "percentage",
          value: "0",
          min: 0,
          max: 100,
          step: 1,
          section: "envelopeRadiantGains",
          classes: ["col-large", "slider-container"],
        },
        h: {
          fieldId: "h_74",
          type: "percentage",
          value: "100",
          min: 0,
          max: 100,
          step: 1,
          section: "envelopeRadiantGains",
          classes: ["col-large", "slider-container"],
        },
        i: {
          fieldId: "i_74",
          type: "calculated",
          value: "106.29",
          section: "envelopeRadiantGains",
          dependencies: ["d_74", "e_74", "f_74", "g_74"],
        },
        j: {
          fieldId: "j_74",
          type: "calculated",
          value: "0.73%",
          section: "envelopeRadiantGains",
          dependencies: ["i_74", "h_79"],
        },
        k: {
          fieldId: "k_74",
          type: "calculated",
          value: "0.00",
          section: "envelopeRadiantGains",
          dependencies: ["d_74", "e_74", "f_74", "h_74"],
        },
        l: {
          fieldId: "l_74",
          type: "calculated",
          value: "0.00%",
          section: "envelopeRadiantGains",
          dependencies: ["k_74", "j_79"],
        },
        m: {
          fieldId: "m_74",
          type: "calculated",
          value: "1.31",
          section: "envelopeRadiantGains",
          dependencies: ["e_74"],
          classes: ["reference-value"],
          p: {
            fieldId: "p_74",
            type: "calculated",
            dependencies: ["l_12", "k_74", "i_74"],
          },
        },
      },
    },

    // Row 75: G.8.2 Window Area East
    75: {
      id: "G.8.2",
      rowId: "G.8.2",
      label: "Window Area East",
      cells: {
        c: { label: "Window Area East" },
        d: {
          fieldId: "d_75",
          type: "editable",
          value: "3.83",
          section: "envelopeRadiantGains",
          classes: ["user-input"],
        },
        e: {
          fieldId: "e_75",
          type: "dropdown",
          dropdownId: "dd_e_75",
          value: "East",
          section: "envelopeRadiantGains",
          options: [
            { value: "North", name: "North" },
            { value: "NorthEast", name: "NorthEast" },
            { value: "East", name: "East" },
            { value: "SouthEast", name: "SouthEast" },
            { value: "South", name: "South" },
            { value: "SouthWest", name: "SouthWest" },
            { value: "West", name: "West" },
            { value: "NorthWest", name: "NorthWest" },
            { value: "Average", name: "Average" },
            { value: "Skylight", name: "Skylight" },
          ],
        },
        f: {
          fieldId: "f_75",
          type: "coefficient_slider",
          value: "0.50",
          min: 0.2,
          max: 0.6,
          step: 0.05,
          section: "envelopeRadiantGains",
          classes: ["col-small", "slider-container"],
        },
        g: {
          fieldId: "g_75",
          type: "percentage",
          value: "0",
          min: 0,
          max: 100,
          step: 1,
          section: "envelopeRadiantGains",
        },
        h: {
          fieldId: "h_75",
          type: "percentage",
          value: "100",
          min: 0,
          max: 100,
          step: 1,
          section: "envelopeRadiantGains",
        },
        i: {
          fieldId: "i_75",
          type: "calculated",
          value: "294.68",
          section: "envelopeRadiantGains",
          dependencies: ["d_75", "e_75", "f_75", "g_75"],
        },
        j: {
          fieldId: "j_75",
          type: "calculated",
          value: "2.04%",
          section: "envelopeRadiantGains",
          dependencies: ["i_75", "h_79"],
        },
        k: {
          fieldId: "k_75",
          type: "calculated",
          value: "0.00",
          section: "envelopeRadiantGains",
          dependencies: ["d_75", "e_75", "f_75", "h_75"],
        },
        l: {
          fieldId: "l_75",
          type: "calculated",
          value: "0.00%",
          section: "envelopeRadiantGains",
          dependencies: ["k_75", "j_79"],
        },
        m: {
          fieldId: "m_75",
          type: "calculated",
          value: "76.94",
          section: "envelopeRadiantGains",
          dependencies: ["e_75"],
          classes: ["reference-value"],
          p: {
            fieldId: "p_75",
            type: "calculated",
            dependencies: ["l_12", "k_75", "i_75"],
          },
        },
      },
    },

    // Row 76: G.8.3 Window Area South
    76: {
      id: "G.8.3",
      rowId: "G.8.3",
      label: "Window Area South",
      cells: {
        c: { label: "Window Area South" },
        d: {
          fieldId: "d_76",
          type: "editable",
          value: "159.00",
          section: "envelopeRadiantGains",
          classes: ["user-input"],
        },
        e: {
          fieldId: "e_76",
          type: "dropdown",
          dropdownId: "dd_e_76",
          value: "South",
          section: "envelopeRadiantGains",
          options: [
            { value: "North", name: "North" },
            { value: "NorthEast", name: "NorthEast" },
            { value: "East", name: "East" },
            { value: "SouthEast", name: "SouthEast" },
            { value: "South", name: "South" },
            { value: "SouthWest", name: "SouthWest" },
            { value: "West", name: "West" },
            { value: "NorthWest", name: "NorthWest" },
            { value: "Average", name: "Average" },
            { value: "Skylight", name: "Skylight" },
          ],
        },
        f: {
          fieldId: "f_76",
          type: "coefficient_slider",
          value: "0.50",
          min: 0.2,
          max: 0.6,
          step: 0.05,
          section: "envelopeRadiantGains",
          classes: ["col-small", "slider-container"],
        },
        g: {
          fieldId: "g_76",
          type: "percentage",
          value: "0",
          min: 0,
          max: 100,
          step: 1,
          section: "envelopeRadiantGains",
        },
        h: {
          fieldId: "h_76",
          type: "percentage",
          value: "100",
          min: 0,
          max: 100,
          step: 1,
          section: "envelopeRadiantGains",
        },
        i: {
          fieldId: "i_76",
          type: "calculated",
          value: "11,247.66",
          section: "envelopeRadiantGains",
          dependencies: ["d_76", "e_76", "f_76", "g_76"],
        },
        j: {
          fieldId: "j_76",
          type: "calculated",
          value: "77.69%",
          section: "envelopeRadiantGains",
          dependencies: ["i_76", "h_79"],
        },
        k: {
          fieldId: "k_76",
          type: "calculated",
          value: "0.00",
          section: "envelopeRadiantGains",
          dependencies: ["d_76", "e_76", "f_76", "h_76"],
        },
        l: {
          fieldId: "l_76",
          type: "calculated",
          value: "0.00%",
          section: "envelopeRadiantGains",
          dependencies: ["k_76", "j_79"],
        },
        m: {
          fieldId: "m_76",
          type: "calculated",
          value: "70.74",
          section: "envelopeRadiantGains",
          dependencies: ["e_76"],
          classes: ["reference-value"],
          p: {
            fieldId: "p_76",
            type: "calculated",
            dependencies: ["l_12", "k_76", "i_76"],
          },
        },
      },
    },

    // Row 77: G.8.4 Window Area West
    77: {
      id: "G.8.4",
      rowId: "G.8.4",
      label: "Window Area West",
      cells: {
        c: { label: "Window Area West" },
        d: {
          fieldId: "d_77",
          type: "editable",
          value: "100.66",
          section: "envelopeRadiantGains",
          classes: ["user-input"],
        },
        e: {
          fieldId: "e_77",
          type: "dropdown",
          dropdownId: "dd_e_77",
          value: "West",
          section: "envelopeRadiantGains",
          options: [
            { value: "North", name: "North" },
            { value: "NorthEast", name: "NorthEast" },
            { value: "East", name: "East" },
            { value: "SouthEast", name: "SouthEast" },
            { value: "South", name: "South" },
            { value: "SouthWest", name: "SouthWest" },
            { value: "West", name: "West" },
            { value: "NorthWest", name: "NorthWest" },
            { value: "Average", name: "Average" },
            { value: "Skylight", name: "Skylight" },
          ],
        },
        f: {
          fieldId: "f_77",
          type: "coefficient_slider",
          value: "0.50",
          min: 0.2,
          max: 0.6,
          step: 0.05,
          section: "envelopeRadiantGains",
          classes: ["col-small", "slider-container"],
        },
        g: {
          fieldId: "g_77",
          type: "percentage",
          value: "0",
          min: 0,
          max: 100,
          step: 1,
          section: "envelopeRadiantGains",
        },
        h: {
          fieldId: "h_77",
          type: "percentage",
          value: "90",
          min: 0,
          max: 100,
          step: 1,
          section: "envelopeRadiantGains",
        },
        i: {
          fieldId: "i_77",
          type: "calculated",
          value: "2,603.07",
          section: "envelopeRadiantGains",
          dependencies: ["d_77", "e_77", "f_77", "g_77"],
        },
        j: {
          fieldId: "j_77",
          type: "calculated",
          value: "17.98%",
          section: "envelopeRadiantGains",
          dependencies: ["i_77", "h_79"],
        },
        k: {
          fieldId: "k_77",
          type: "calculated",
          value: "130.15",
          section: "envelopeRadiantGains",
          dependencies: ["d_77", "e_77", "f_77", "h_77"],
        },
        l: {
          fieldId: "l_77",
          type: "calculated",
          value: "100.00%",
          section: "envelopeRadiantGains",
          dependencies: ["k_77", "j_79"],
        },
        m: {
          fieldId: "m_77",
          type: "calculated",
          value: "25.86",
          section: "envelopeRadiantGains",
          dependencies: ["e_77"],
          classes: ["reference-value"],
          p: {
            fieldId: "p_77",
            type: "calculated",
            dependencies: ["l_12", "k_77", "i_77"],
          },
        },
      },
    },

    // Row 78: G.8.5 Skylights
    78: {
      id: "G.8.5",
      rowId: "G.8.5",
      label: "Skylights",
      cells: {
        c: { label: "Skylights" },
        d: {
          fieldId: "d_78",
          type: "editable",
          value: "0.00",
          section: "envelopeRadiantGains",
          classes: ["user-input"],
        },
        e: {
          fieldId: "e_78",
          type: "dropdown",
          dropdownId: "dd_e_78",
          value: "Skylight",
          section: "envelopeRadiantGains",
          options: [
            { value: "North", name: "North" },
            { value: "NorthEast", name: "NorthEast" },
            { value: "East", name: "East" },
            { value: "SouthEast", name: "SouthEast" },
            { value: "South", name: "South" },
            { value: "SouthWest", name: "SouthWest" },
            { value: "West", name: "West" },
            { value: "NorthWest", name: "NorthWest" },
            { value: "Average", name: "Average" },
            { value: "Skylight", name: "Skylight" },
          ],
        },
        f: {
          fieldId: "f_78",
          type: "coefficient_slider",
          value: "0.50",
          min: 0.2,
          max: 0.6,
          step: 0.05,
          section: "envelopeRadiantGains",
          classes: ["col-small", "slider-container"],
        },
        g: {
          fieldId: "g_78",
          type: "percentage",
          value: "0",
          min: 0,
          max: 100,
          step: 1,
          section: "envelopeRadiantGains",
        },
        h: {
          fieldId: "h_78",
          type: "percentage",
          value: "80",
          min: 0,
          max: 100,
          step: 1,
          section: "envelopeRadiantGains",
        },
        i: {
          fieldId: "i_78",
          type: "calculated",
          value: "0.00",
          section: "envelopeRadiantGains",
          dependencies: ["d_78", "e_78", "f_78", "g_78"],
        },
        j: {
          fieldId: "j_78",
          type: "calculated",
          value: "0.00%",
          section: "envelopeRadiantGains",
          dependencies: ["i_78", "h_79"],
        },
        k: {
          fieldId: "k_78",
          type: "calculated",
          value: "0.00",
          section: "envelopeRadiantGains",
          dependencies: ["d_78", "e_78", "f_78", "h_78"],
        },
        l: {
          fieldId: "l_78",
          type: "calculated",
          value: "0.00%",
          section: "envelopeRadiantGains",
          dependencies: ["k_78", "j_79"],
        },
        m: {
          fieldId: "m_78",
          type: "calculated",
          value: "75",
          section: "envelopeRadiantGains",
          dependencies: ["e_78"],
          classes: ["reference-value"],
          p: {
            fieldId: "p_78",
            type: "calculated",
            dependencies: ["l_12", "k_78", "i_78"],
          },
        },
      },
    },

    // Row 79: G.1 Subtotal Solar Gains
    79: {
      id: "G.1",
      rowId: "G.1",
      label: "Subtotal Solar Gains",
      cells: {
        c: { label: "Subtotal Solar Gains" },
        d: { content: "" }, // Empty cell
        e: { content: "" }, // Empty cell
        f: { content: "" }, // Empty cell
        g: { content: "" }, // Empty cell
        h: { content: "" }, // Empty cell
        i: {
          fieldId: "i_79",
          type: "calculated",
          value: "14,626.70",
          section: "radiantGains",
          dependencies: ["i_73", "i_74", "i_75", "i_76", "i_77", "i_78"],
        },
        j: {
          fieldId: "j_79",
          type: "calculated",
          value: "100%",
          section: "radiantGains",
        },
        k: {
          fieldId: "k_79",
          type: "calculated",
          value: "130.15",
          section: "radiantGains",
          dependencies: ["k_73", "k_74", "k_75", "k_76", "k_77", "k_78"],
        },
        l: {
          fieldId: "l_79",
          type: "calculated",
          value: "100%",
          section: "radiantGains",
        },
        m: {
          fieldId: "m_79",
          type: "calculated",
          value: "14,626.70",
          section: "radiantGains",
          dependencies: ["i_79", "j_79", "k_79", "l_79"],
        },
        p: {
          fieldId: "p_79",
          type: "calculated",
          value: "14,626.70",
          section: "radiantGains",
          dependencies: ["i_79", "j_79", "k_79", "l_79"],
        },
      },
    },

    // Row 80: G.2 Gains Utilization Factor (n-Factor)
    80: {
      id: "G.2",
      rowId: "G.2",
      label: "Gains Utilization Factor (n-Factor)",
      cells: {
        c: { label: "Gains Utilization Factor (n-Factor)" },
        d: {
          fieldId: "d_80",
          type: "dropdown",
          dropdownId: "dd_d_80",
          value: "NRC 40%",
          section: "radiantGains",
          options: [
            { value: "NRC 0%", name: "NRC 0%" },
            { value: "NRC 40%", name: "NRC 40%" },
            { value: "NRC 50%", name: "NRC 50%" },
            { value: "NRC 60%", name: "NRC 60%" },
            { value: "PH Method", name: "PH Method" },
          ],
        },
        e: {
          fieldId: "e_80",
          type: "calculated",
          value: "114,698.37",
          section: "radiantGains",
          dependencies: ["h_79", "i_71"],
        },
        f: { content: "Total Gains" },
        g: {
          fieldId: "g_80",
          type: "calculated",
          value: "40.00%",
          section: "radiantGains",
          dependencies: ["d_80"],
        },
        h: { content: "" }, // Empty cell
        i: {
          fieldId: "i_80",
          type: "calculated",
          value: "45,879.35",
          section: "radiantGains",
          dependencies: ["e_80", "g_80"],
        },
        j: {
          content: "G.3 nGains",
          classes: ["tooltip-cell"],
          "data-tooltip": "G.3 Net Usable Gains by Method Selected",
        },
      },
    },

    // Row 81: G.4 Net Usable Heating Season Gains
    81: {
      id: "G.4",
      rowId: "G.4",
      label: "Net Usable Heating Season Gains",
      cells: {
        c: { label: "Net Usable Heating Season Gains" },
        d: {
          content: "PH Method",
          classes: ["reference-value"], // Use reference style (typically red text in the Excel)
        },
        e: {
          fieldId: "e_81",
          type: "calculated",
          value: "114,698.37",
          section: "radiantGains",
          dependencies: ["e_80"],
          classes: ["reference-value"], // Apply reference styling
        },
        f: {
          content: "Total Gains",
          classes: ["reference-value"],
        },
        g: {
          fieldId: "g_81",
          type: "calculated",
          value: "94.43%",
          section: "radiantGains",
          classes: ["reference-value"], // Apply reference styling
        },
        h: { content: "", classes: ["reference-value"] }, // Empty cell
        i: {
          fieldId: "i_81",
          type: "calculated",
          value: "108,307.67",
          section: "radiantGains",
          dependencies: ["e_81", "g_81"],
          classes: ["reference-value"], // Apply reference styling
        },
        j: {
          content: "G.4 nGains",
          classes: ["reference-value", "tooltip-cell"],
          "data-tooltip": "Net Usable Gains by PHPP Method (Reference)",
        },
      },
    },

    // Row 82: G.5 Net UN-usable Htg. Gains
    82: {
      id: "G.5",
      rowId: "G.5",
      label: "Net UN-usable Htg. Gains",
      cells: {
        c: { label: "Net UN-usable Htg. Gains" },
        i: {
          fieldId: "i_82",
          type: "calculated",
          value: "68,819.02",
          section: "radiantGains",
          dependencies: ["h_80", "k_80"],
        },
      },
    },
  };

  // Define configuration for orientation rows (similar to Section 11)
  const orientationConfig = [73, 74, 75, 76, 77, 78];

  // T-cell comparison configuration for Section 10
  const baselineValues = {
    80: { type: "method", value: "NRC 40%" }, // Net Useable Gains Method - only this needs reference comparison
  };

  //==========================================================================
  // ACCESSOR METHODS TO EXTRACT FIELDS AND LAYOUT
  //==========================================================================

  /**
   * Extract field definitions from the integrated layout
   * This method is required for compatibility with the FieldManager
   */
  function getFields() {
    try {
      const fields = {};

      // Extract field definitions from all rows except the header
      Object.entries(sectionRows).forEach(([rowKey, row]) => {
        if (rowKey === "header") return; // Skip the header row
        if (!row.cells) return;

        // Process each cell in the row
        Object.entries(row.cells).forEach(([_colKey, cell]) => {
          if (cell.fieldId && cell.type) {
            // Create field definition with all relevant properties
            fields[cell.fieldId] = {
              type: cell.type,
              label: cell.label || row.label,
              defaultValue: cell.value || "",
              section: cell.section || "radiantGains",
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
    } catch (_error) {
      return {}; // Return empty object to avoid breaking the application
    }
  }

  /**
   * Extract dropdown options from the integrated layout
   * Required for backward compatibility
   */
  function getDropdownOptions() {
    try {
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
    } catch (_error) {
      return {}; // Return empty object to avoid breaking the application
    }
  }

  /**
   * Generate layout from integrated row definitions
   * This converts our compact definition to the format expected by the renderer
   */
  function getLayout() {
    try {
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
    } catch (_error) {
      return { rows: [] }; // Return empty rows to avoid breaking the application
    }
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
        // BUT preserve the classes property which is critical for styling
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
   * Update reference indicators for all rows
   */
  function updateAllReferenceIndicators() {
    try {
      // Only update reference indicator for method row (80)
      // Rows 73-78 don't need reference comparison - they show gain factors in Column M
      updateReferenceIndicators(80);
    } catch (_error) {
      /* No operation needed, was empty catch */
    }
  }

  /**
   * Update reference indicators (M and N columns) for a specific row
   * @param {number} rowId - The row number to update
   */
  function updateReferenceIndicators(rowId) {
    const baseline = baselineValues[rowId];
    if (!baseline) return;

    const mFieldId = `m_${rowId}`;
    const nFieldId = `n_${rowId}`;
    let isGood = true;

    try {
      if (baseline.type === "method") {
        // For method comparison (exact match)
        const currentMethod = getFieldValue(`d_${rowId}`);
        isGood = currentMethod === baseline.value;

        // For method, show the reference method in Column M
        const mElement = document.querySelector(
          `[data-field-id="${mFieldId}"]`,
        );
        if (mElement) mElement.textContent = baseline.value;
      }

      // Update Column N (Pass/Fail)
      const nElement = document.querySelector(`[data-field-id="${nFieldId}"]`);
      if (nElement) {
        nElement.textContent = isGood ? "✓" : "✗";
        setElementClass(nFieldId, isGood ? "checkmark" : "warning");
      }
    } catch (_error) {
      /* No operation needed, was empty catch */
    }
  }

  /**
   * Calculate all values for this section
   * Includes orientation gains (73-78), subtotals (79), and utilization factors (80-82)
   */
  function calculateAll() {
    // ✅ DUAL-ENGINE PATTERN: Always run BOTH Target and Reference calculations
    calculateTargetModel(); // Calculate Target model values
    calculateReferenceModel(); // Calculate Reference model values
  }

  /**
   * TARGET MODEL ENGINE: Calculate all values using Application state
   * This is the existing calculation logic, refactored
   */
  function calculateTargetModel() {
    try {
      // Calculate individual orientation rows
      orientationConfig.forEach((rowId) => {
        calculateOrientationGains(rowId.toString(), false); // false = Target calculation
      });

      // Calculate subtotals
      calculateSubtotals(false); // false = Target calculation

      // Calculate utilization factors
      calculateUtilizationFactors(false); // false = Target calculation

      // Update reference indicators for all rows
      updateAllReferenceIndicators();
    } catch (_error) {
      // Error in Target Model calculations was previously logged here
    }

    // Target Model calculations completed
  }

  /**
   * REFERENCE MODEL ENGINE: Calculate all values using Reference state
   * Parallel calculation engine for Reference model
   */
  function calculateReferenceModel() {
    try {
      // Calculate individual orientation rows with Reference inputs
      orientationConfig.forEach((rowId) => {
        calculateOrientationGainsReference(rowId.toString());
      });

      // Calculate subtotals for Reference model
      calculateSubtotalsReference();

      // Calculate utilization factors for Reference model
      calculateUtilizationFactorsReference();

      // Store Reference results for other sections
      storeReferenceResults();

      // Update reference indicators for all rows
      updateAllReferenceIndicators();
    } catch (_error) {
      console.error("S10: Error in Reference Model calculations:", _error);
    }

    // Reference Model calculations completed
  }

  /**
   * Calculate solar gains for a specific orientation (Reference model)
   * @param {string} rowId - Row ID for the element (e.g., "73" for doors)
   */
  function calculateOrientationGainsReference(rowId) {
    try {
      // Get relevant values using Reference state
      const area =
        window.TEUI.parseNumeric(ReferenceState.getValue(`d_${rowId}`)) || 0;
      const orientation = ReferenceState.getValue(`e_${rowId}`) || "Average";
      const shgc =
        window.TEUI.parseNumeric(ReferenceState.getValue(`f_${rowId}`)) || 0.5;

      // Winter/Summer shading are percentages (0-100), convert to decimal (0-1) for calculation
      const winterShadingDecimal =
        (window.TEUI.parseNumeric(ReferenceState.getValue(`g_${rowId}`)) || 0) /
        100;
      const summerShadingDecimal =
        (window.TEUI.parseNumeric(ReferenceState.getValue(`h_${rowId}`)) || 0) /
        100;

      // EXTERNAL DEPENDENCY: Get Reference Climate Zone from S03 via global state
      const climateZone = getGlobalNumericValue("ref_j_19") || 6.0; // Default to zone 6 if not available

      const gainFactor = calculateGainFactor(orientation, climateZone);

      // SHGC Normalization Factor
      const shgcNormalizationFactor = shgc / 0.5;

      // Calculate heating season solar gains
      const heatingGains =
        area *
        gainFactor *
        shgcNormalizationFactor *
        (1 - winterShadingDecimal);

      // Calculate cooling season solar gains
      const coolingModifierFactor = orientation === "Skylight" ? 1.25 : 0.5;
      const coolingGains =
        area *
        gainFactor *
        shgcNormalizationFactor *
        (1 - summerShadingDecimal) *
        coolingModifierFactor;

      // EXTERNAL DEPENDENCY: Get cost from S01 via global state
      const cost =
        getGlobalNumericValue("ref_l_12") * (coolingGains - heatingGains);

      // Store Reference results in StateManager with ref_ prefix
      setCalculatedValue(`m_${rowId}`, gainFactor, true);
      setCalculatedValue(`i_${rowId}`, heatingGains, true);
      setCalculatedValue(`k_${rowId}`, coolingGains, true);
      setCalculatedValue(`p_${rowId}`, cost, true);

      // console.log(`[S10REF] Row${rowId}: Area=${area}, Climate=${climateZone}, GainFactor=${gainFactor}, Heat=${heatingGains.toFixed(2)}, Cool=${coolingGains.toFixed(2)}`);
    } catch (_error) {
      console.error(
        `S10: Error calculating Reference orientation gains for row ${rowId}:`,
        _error,
      );
      // Set error values
      setCalculatedValue(`m_${rowId}`, 0, true);
      setCalculatedValue(`i_${rowId}`, 0, true);
      setCalculatedValue(`k_${rowId}`, 0, true);
      setCalculatedValue(`p_${rowId}`, 0, true);
    }
  }

  /**
   * Calculate subtotals for solar gains (Reference model)
   */
  function calculateSubtotalsReference() {
    try {
      const heatingGains = [
        window.TEUI.parseNumeric(
          window.TEUI.StateManager.getValue("ref_i_73"),
        ) || 0,
        window.TEUI.parseNumeric(
          window.TEUI.StateManager.getValue("ref_i_74"),
        ) || 0,
        window.TEUI.parseNumeric(
          window.TEUI.StateManager.getValue("ref_i_75"),
        ) || 0,
        window.TEUI.parseNumeric(
          window.TEUI.StateManager.getValue("ref_i_76"),
        ) || 0,
        window.TEUI.parseNumeric(
          window.TEUI.StateManager.getValue("ref_i_77"),
        ) || 0,
        window.TEUI.parseNumeric(
          window.TEUI.StateManager.getValue("ref_i_78"),
        ) || 0,
      ].reduce((sum, val) => sum + val, 0);

      const coolingGains = [
        window.TEUI.parseNumeric(
          window.TEUI.StateManager.getValue("ref_k_73"),
        ) || 0,
        window.TEUI.parseNumeric(
          window.TEUI.StateManager.getValue("ref_k_74"),
        ) || 0,
        window.TEUI.parseNumeric(
          window.TEUI.StateManager.getValue("ref_k_75"),
        ) || 0,
        window.TEUI.parseNumeric(
          window.TEUI.StateManager.getValue("ref_k_76"),
        ) || 0,
        window.TEUI.parseNumeric(
          window.TEUI.StateManager.getValue("ref_k_77"),
        ) || 0,
        window.TEUI.parseNumeric(
          window.TEUI.StateManager.getValue("ref_k_78"),
        ) || 0,
      ].reduce((sum, val) => sum + val, 0);

      // Store Reference subtotals in StateManager
      setCalculatedValue("i_79", heatingGains, true);
      setCalculatedValue("k_79", coolingGains, true);
      setCalculatedValue("j_79", heatingGains > 0 ? "1" : "0", true);
      setCalculatedValue("l_79", coolingGains > 0 ? "1" : "0", true);

      // console.log(`[S10REF] Subtotals: Heat=${heatingGains.toFixed(2)}, Cool=${coolingGains.toFixed(2)}`);
    } catch (_error) {
      console.error("S10: Error calculating Reference subtotals:", _error);
    }
  }

  /**
   * Calculate utilization factors for Reference model
   */
  function calculateUtilizationFactorsReference() {
    try {
      // Get Reference internal gains from S09 (critical for E80/E81 Excel formula)
      const internalGains = getGlobalNumericValue("ref_i_71") || 0;
      const subtotalHeating =
        window.TEUI.parseNumeric(
          window.TEUI.StateManager.getValue("ref_i_79"),
        ) || 0;

      // Excel formula: E80 = I71 + I79 (Reference version)
      const utilizationE80 = internalGains + subtotalHeating;
      const utilizationE81 = internalGains + subtotalHeating; // Same formula
      const utilizationE82 = 50.0; // Default or specific Reference logic

      // Store Reference utilization factors in StateManager
      setCalculatedValue("e_80", utilizationE80, true);
      setCalculatedValue("e_81", utilizationE81, true);

      // ✅ CRITICAL: Publish ref_i_80 for S15 (same value as ref_e_80 for Excel compliance)
      setCalculatedValue("i_80", utilizationE80, true);
      // console.log(`[S10] 🔗 Published ref_i_80=${utilizationE80} for S15 (Reference utilization)`);
      setCalculatedValue("e_82", utilizationE82, true);

      // console.log(`[S10REF] Utilization: E80=${utilizationE80.toFixed(2)} (ref_i_71=${internalGains} + ref_i_79=${subtotalHeating}), E81=${utilizationE81.toFixed(2)}, E82=${utilizationE82.toFixed(2)}`);
    } catch (_error) {
      console.error(
        "S10: Error calculating Reference utilization factors:",
        _error,
      );
    }
  }

  /**
   * Store Reference results for downstream sections
   */
  function storeReferenceResults() {
    // All Reference values are already stored in StateManager with ref_ prefix
    // This function exists for consistency with the architectural pattern
    // console.log("[S10REF] Reference results stored for downstream sections");
  }

  /**
   * Calculate solar gains for a specific orientation
   * @param {string} rowId - Row ID for the element (e.g., "73" for doors)
   */
  function calculateOrientationGains(rowId) {
    try {
      // Get relevant values using the new ModeManager-aware helpers
      const area = getNumericValue(`d_${rowId}`);
      const orientation = getFieldValue(`e_${rowId}`);
      const shgc = getNumericValue(`f_${rowId}`);

      // Winter/Summer shading are percentages (0-100), convert to decimal (0-1) for calculation
      const winterShadingDecimal = getNumericValue(`g_${rowId}`) / 100;
      const summerShadingDecimal = getNumericValue(`h_${rowId}`) / 100;

      // ✅ FIXED: Mode-aware climate zone reading for proper state isolation
      const climateZone =
        ModeManager.currentMode === "reference"
          ? getGlobalNumericValue("ref_j_19") || 6.0 // Reference climate zone
          : getGlobalNumericValue("j_19") || 6.0; // Target climate zone

      const gainFactor = calculateGainFactor(orientation, climateZone);

      // Always update the gain factor in the DOM (mode-aware via setCalculatedValue)
      setCalculatedValue(`m_${rowId}`, gainFactor);

      // SHGC Normalization Factor
      const shgcNormalizationFactor = shgc / 0.5;

      // Calculate heating season solar gains
      const heatingGains =
        area *
        gainFactor *
        shgcNormalizationFactor *
        (1 - winterShadingDecimal);

      // Calculate cooling season solar gains
      const coolingModifierFactor = orientation === "Skylight" ? 1.25 : 0.5;
      const coolingGains =
        area *
        gainFactor *
        shgcNormalizationFactor *
        (1 - summerShadingDecimal) *
        coolingModifierFactor;

      // ✅ FIXED: Mode-aware cost calculation for proper state isolation
      const costPerUnit =
        ModeManager.currentMode === "reference"
          ? getGlobalNumericValue("ref_l_12") || 0 // Reference cost from S01
          : getGlobalNumericValue("l_12") || 0; // Target cost from S01
      const cost = costPerUnit * (coolingGains - heatingGains);

      // Set state using ModeManager before updating DOM via setCalculatedValue
      setCalculatedValue(`i_${rowId}`, heatingGains);
      setCalculatedValue(`k_${rowId}`, coolingGains);
      setCalculatedValue(`p_${rowId}`, cost);

      // Update the DOM
      setCalculatedValue(`i_${rowId}`, heatingGains);
      setCalculatedValue(`k_${rowId}`, coolingGains);
      setCalculatedValue(`p_${rowId}`, cost, "currency");
    } catch (_error) {
      // Set error values
      setCalculatedValue(`i_${rowId}`, 0);
      setCalculatedValue(`k_${rowId}`, 0);
      setCalculatedValue(`p_${rowId}`, 0, "currency");
    }
  }

  /**
   * Calculate subtotals for solar gains
   */
  function calculateSubtotals() {
    try {
      const heatingGains = [
        getNumericValue("i_73"),
        getNumericValue("i_74"),
        getNumericValue("i_75"),
        getNumericValue("i_76"),
        getNumericValue("i_77"),
        getNumericValue("i_78"),
      ].reduce((sum, val) => sum + val, 0);

      const coolingGains = [
        getNumericValue("k_73"),
        getNumericValue("k_74"),
        getNumericValue("k_75"),
        getNumericValue("k_76"),
        getNumericValue("k_77"),
        getNumericValue("k_78"),
      ].reduce((sum, val) => sum + val, 0);

      // Set state via ModeManager
      ModeManager.setValue("i_79", heatingGains.toString(), "calculated");
      ModeManager.setValue("k_79", coolingGains.toString(), "calculated");
      ModeManager.setValue("j_79", heatingGains > 0 ? "1" : "0", "calculated");
      ModeManager.setValue("l_79", coolingGains > 0 ? "1" : "0", "calculated");

      // Update the DOM
      setCalculatedValue("i_79", heatingGains, "number");
      setCalculatedValue("k_79", coolingGains, "number");
      setCalculatedValue("j_79", heatingGains > 0 ? 1 : 0, "percent");
      setCalculatedValue("l_79", coolingGains > 0 ? 1 : 0, "percent");

      // Update percentages (Columns J and L) for rows 73-78
      for (let i = 73; i <= 78; i++) {
        const rowStr = i.toString(); // Added for clarity
        const heatingGain = getNumericValue(`i_${rowStr}`);
        const coolingGain = getNumericValue(`k_${rowStr}`);
        // Handle division by zero explicitly
        const heatingPercentDecimal =
          heatingGains !== 0 ? heatingGain / heatingGains : 0;
        const coolingPercentDecimal =
          coolingGains !== 0 ? coolingGain / coolingGains : 0;

        const jFieldId = `j_${rowStr}`;
        const lFieldId = `l_${rowStr}`;

        // Set state via ModeManager for percentage values
        ModeManager.setValue(
          jFieldId,
          heatingPercentDecimal.toString(),
          "calculated",
        );
        ModeManager.setValue(
          lFieldId,
          coolingPercentDecimal.toString(),
          "calculated",
        );

        setCalculatedValue(jFieldId, heatingPercentDecimal, "percent");
        setCalculatedValue(lFieldId, coolingPercentDecimal, "percent");

        // Apply Indicator Class & Left Alignment (similar to Section 11)
        const gainIndicatorClasses = ["gain-high", "gain-medium", "gain-low"];
        let htgGainClass = "";
        const htgPercent = heatingPercentDecimal * 100; // Use actual value for thresholds
        // Heating Gain: Higher is better. Thresholds: Green >= 33, Yellow >= 10, Red < 10
        if (htgPercent >= 33) {
          htgGainClass = "gain-high";
        } // Green
        else if (htgPercent >= 10) {
          htgGainClass = "gain-medium";
        } // Yellow
        else if (htgPercent >= 0) {
          htgGainClass = "gain-low";
        } // Red
        setIndicatorClass(jFieldId, htgGainClass, gainIndicatorClasses);

        let coolGainClass = "";
        const coolPercentValue = coolingPercentDecimal * 100; // Use actual value
        // Cooling Gain: Higher is worse. Thresholds: Red >= 15, Yellow >= 5, Green < 5
        if (coolPercentValue >= 15) {
          coolGainClass = "gain-low";
        } // Red (High contribution = Bad)
        else if (coolPercentValue >= 5) {
          coolGainClass = "gain-medium";
        } // Yellow
        else if (coolPercentValue >= 0) {
          coolGainClass = "gain-high";
        } // Green (Low contribution = Good)
        setIndicatorClass(lFieldId, coolGainClass, gainIndicatorClasses);

        const jElement = document.querySelector(
          `[data-field-id="${jFieldId}"]`,
        );
        if (jElement) jElement.classList.add("text-left-indicator");
        const lElement = document.querySelector(
          `[data-field-id="${lFieldId}"]`,
        );
        if (lElement) lElement.classList.add("text-left-indicator");
      }
    } catch (_error) {
      setCalculatedValue("i_79", 0);
      setCalculatedValue("k_79", 0);
    }
  }

  /**
   * Calculate utilization factors
   */
  function calculateUtilizationFactors() {
    try {
      // Get total solar gains (internal to S10)
      const solarGains = getNumericValue("i_79");
      // EXTERNAL DEPENDENCY: Get internal gains from S09 via global state (MODE-AWARE)
      // ✅ EXPLICIT MODE ISOLATION: No cross-mode fallbacks (prevents silent failures)
      const internalGains =
        ModeManager.currentMode === "reference"
          ? getGlobalNumericValue("ref_i_71") || 0 // ✅ Reference only - no Target fallback
          : getGlobalNumericValue("i_71") || 0; // ✅ Target only

      // console.log(`[S10] 🔗 Utilization calc: i_71=${internalGains} [mode=${ModeManager.currentMode}]`);
      const totalGains = solarGains + internalGains;

      // Set total gains for both rows 80 and 81 (DOM only)
      setCalculatedValue("e_80", totalGains, "number");
      setCalculatedValue("e_81", totalGains, "number");

      //=====================================================================
      // PART 1: Calculate utilization factor based on selected method in row 80
      //=====================================================================
      const utilizationMethod = getFieldValue("d_80") || "NRC 40%";
      let utilizationFactor = 0.4; // Default to 40%

      if (utilizationMethod === "NRC 0%") {
        utilizationFactor = 0;
      } else if (utilizationMethod === "NRC 40%") {
        utilizationFactor = 0.4;
      } else if (utilizationMethod === "NRC 50%") {
        utilizationFactor = 0.5;
      } else if (utilizationMethod === "NRC 60%") {
        utilizationFactor = 0.6;
      } else if (utilizationMethod === "PH Method") {
        // EXTERNAL DEPENDENCIES: Get loss values from other sections via global state
        const i97 = getGlobalNumericValue("i_97") || 0;
        const i103 = getGlobalNumericValue("i_103") || 0;
        const m121 = getGlobalNumericValue("m_121") || 0;
        const i98 = getGlobalNumericValue("i_98") || 0;

        const numerator = totalGains;
        const denominator = i97 + i103 + m121 + i98;

        if (denominator > 0) {
          const gamma = numerator / denominator;
          if (Math.abs(gamma - 1) < 1e-9) {
            utilizationFactor = 5 / 6;
          } else {
            const a = 5;
            const gamma_a = Math.pow(gamma, a);
            const gamma_a_plus_1 = Math.pow(gamma, a + 1);
            utilizationFactor = (1 - gamma_a) / (1 - gamma_a_plus_1);
            utilizationFactor = Math.max(0, Math.min(1, utilizationFactor));
          }
        } else {
          utilizationFactor = numerator > 0 ? 1 : 0;
        }
      }

      const usableGains = totalGains * utilizationFactor;

      // console.log(`[S10] 🔗 Final i_80 calc: ${usableGains} = totalGains(${totalGains}) × utilizationFactor(${utilizationFactor}) [mode=${ModeManager.currentMode}]`);

      // Set state via ModeManager
      setCalculatedValue("g_80", utilizationFactor);
      setCalculatedValue("i_80", usableGains);

      //=====================================================================
      // PART 2: Calculate PHPP method as reference in row 81 (always)
      //=====================================================================
      const i97Reference = getGlobalNumericValue("i_97") || 0;
      const i103Reference = getGlobalNumericValue("i_103") || 0;
      const m121Reference = getGlobalNumericValue("m_121") || 0;
      const i98Reference = getGlobalNumericValue("i_98") || 0;

      const numeratorReference = totalGains;
      const denominatorReference =
        i97Reference + i103Reference + m121Reference + i98Reference;

      let phUtilizationFactor = 0.9;

      if (denominatorReference > 0) {
        const gammaReference = numeratorReference / denominatorReference;
        if (Math.abs(gammaReference - 1) < 1e-9) {
          phUtilizationFactor = 5 / 6;
        } else {
          const a = 5;
          const gamma_a = Math.pow(gammaReference, a);
          const gamma_a_plus_1 = Math.pow(gammaReference, a + 1);
          phUtilizationFactor = (1 - gamma_a) / (1 - gamma_a_plus_1);
          phUtilizationFactor = Math.max(0, Math.min(1, phUtilizationFactor));
        }
      } else {
        phUtilizationFactor = numeratorReference > 0 ? 1 : 0;
      }

      const phReferenceGains = totalGains * phUtilizationFactor;

      // Set state and update DOM for reference row 81
      setCalculatedValue("g_81", phUtilizationFactor);
      setCalculatedValue("i_81", phReferenceGains);
      setCalculatedValue("g_81", phUtilizationFactor, "percent");
      setCalculatedValue("i_81", phReferenceGains, "number");

      //=====================================================================
      // PART 3: Calculate unusable gains based on selected method (row 80)
      //=====================================================================
      const unusedGains = totalGains - usableGains;
      setCalculatedValue("i_82", unusedGains);
      setCalculatedValue("i_82", unusedGains, "number");
    } catch (_error) {
      // Set error values or defaults
      setCalculatedValue("e_80", 0);
      setCalculatedValue("g_80", 0);
      setCalculatedValue("i_80", 0);
      setCalculatedValue("e_81", 0);
      setCalculatedValue("g_81", 0);
      setCalculatedValue("i_81", 0);
      setCalculatedValue("i_82", 0);
    }
  }

  /**
   * Calculate gain factor based on orientation and climate zone
   * @param {string} orientation - Window orientation (North, South, etc.)
   * @param {number} climateZone - Climate zone number (default 6)
   * @returns {number} Gain factor in kWh/m²/yr
   */
  function calculateGainFactor(orientation, climateZone = 6) {
    try {
      // Handle Skylight explicitly first
      if (orientation === "Skylight") {
        return climateZone > 6 ? 25.0 : 75.0;
      }

      // Define orientations for MATCH and values for CHOOSE
      const orientations = [
        "North",
        "NorthEast",
        "East",
        "SouthEast",
        "South",
        "SouthWest",
        "West",
        "NorthWest",
      ];
      // CHOOSE values including the default (9th value for IFERROR)
      const northernValues = [
        0.19, 0.89, 2.09, 6.01, 24.76, 82.25, 64.37, 18.14, 24.84,
      ];
      const southernValues = [
        1.31, 34.69, 76.94, 86.59, 70.74, 60.4, 25.86, 2.88, 50.0,
      ];

      // Find index corresponding to MATCH
      let orientationIndex = orientations.indexOf(orientation);

      // Select the correct value array based on climate zone
      const values = climateZone > 6 ? northernValues : southernValues;

      // If index is -1 (MATCH failed -> IFERROR), use the default index (8 for 9th value)
      // Otherwise, use the found index (0-7)
      const valueIndex = orientationIndex === -1 ? 8 : orientationIndex;

      return values[valueIndex];
    } catch (_error) {
      return 50.0; // Fallback default value in case of unexpected error
    }
  }

  /**
   * Initialize event handlers for this section
   */
  function initializeEventHandlers() {
    const sectionElement = document.getElementById("envelopeRadiantGains");
    if (!sectionElement) return;

    // Add handlers for editable fields
    const editableFields = sectionElement.querySelectorAll(
      '.user-input, [contenteditable="true"]',
    );
    editableFields.forEach((field) => {
      // Make text fields editable
      if (field.classList.contains("user-input")) {
        field.setAttribute("contenteditable", "true");
      }

      // Handle blur event for text fields
      field.addEventListener("blur", handleFieldBlur);

      // Handle Enter key
      field.addEventListener("keydown", function (e) {
        if (e.key === "Enter") {
          e.preventDefault(); // Prevent adding a newline
          this.blur(); // Remove focus to trigger the blur event
        }
      });
    });

    // Add dropdown change event handlers
    const dropdowns = sectionElement.querySelectorAll("select");
    dropdowns.forEach((dropdown) => {
      dropdown.addEventListener("change", function () {
        const fieldId = this.getAttribute("data-field-id");
        if (!fieldId) return;

        ModeManager.setValue(fieldId, this.value, "user-modified");
        calculateAll();
        ModeManager.updateCalculatedDisplayValues(); // ✅ CRITICAL: Update DOM after calculations
      });
    });

    // Add slider change handlers
    const sliders = sectionElement.querySelectorAll('input[type="range"]');
    sliders.forEach((slider) => {
      slider.addEventListener("input", function () {
        const fieldId = this.getAttribute("data-field-id");
        if (!fieldId) return;

        ModeManager.setValue(fieldId, this.value, "user-modified");

        // CORRECTED PATTERN: Use the direct nextElementSibling property for the input handler as well.
        const displayElement = this.nextElementSibling;

        if (displayElement) {
          if (fieldId.startsWith("g_") || fieldId.startsWith("h_")) {
            displayElement.textContent = `${this.value}%`;
          } else {
            displayElement.textContent = parseFloat(this.value).toFixed(2);
          }
        }
      });
      // Let's also add a 'change' listener to trigger recalculation when the user releases the slider
      slider.addEventListener("change", function () {
        // We only need to trigger the recalculation
        calculateAll();
        ModeManager.updateCalculatedDisplayValues(); // ✅ CRITICAL: Update DOM after calculations
      });
    });
  }

  /**
   * Set up default values for dropdowns in this section
   */
  function setupDropdownDefaults() {
    try {
      // Find all dropdowns in this section
      const dropdowns = document.querySelectorAll(
        '[data-section="envelopeRadiantGains"] select',
      );

      // For each dropdown, set default value based on the field definition
      dropdowns.forEach((dropdown) => {
        const fieldId = dropdown.getAttribute("data-field-id");
        if (!fieldId) return;

        // Get default value from state manager if available
        const defaultValue = window.TEUI?.StateManager?.getValue(fieldId);
        if (defaultValue) {
          dropdown.value = defaultValue;
        }
      });

      // console.log('Radiant Gains dropdown defaults initialized');
    } catch (_error) {
      // Error in setupDropdownDefaults was previously logged here
    }
  }

  /**
   * Register values with the StateManager
   */
  function registerWithStateManager() {
    try {
      if (!window.TEUI?.StateManager) {
        return;
      }

      // Register key values with the state manager
      // This ensures they're available to other sections
      const orientations = [
        "Average",
        "North",
        "East",
        "South",
        "West",
        "Skylight",
      ];
      orientations.forEach((_orientation) => {
        // Register orientation-specific fields if needed
      });

      // console.log('Radiant Gains values registered with StateManager');
    } catch (_error) {
      // Error in registerWithStateManager was previously logged here
    }
  }

  /**
   * Add listeners for StateManager changes (dual-state aware)
   */
  function addStateManagerListeners() {
    try {
      if (!window.TEUI?.StateManager) {
        return;
      }

      // ✅ DUAL-STATE: Listen for both target_ and ref_ prefixed dependencies
      const dependencies = [
        "j_19", // Climate zone from S03 (CRITICAL for window gains calculation)
        "i_71", // Internal gains from S09
        "i_97", // Loss factors from S11 for PH Method
        "i_103",
        "m_121",
        "i_98",
      ];

      dependencies.forEach((fieldId) => {
        // Listen for Target external dependencies
        window.TEUI.StateManager.addListener(fieldId, function () {
          console.log(
            `S10: Target listener triggered by ${fieldId}, recalculating all.`,
          );
          calculateAll();
          ModeManager.updateCalculatedDisplayValues(); // ✅ ADD: Update DOM after calculations
        });

        // ✅ ADD: Listen for Reference external dependencies
        window.TEUI.StateManager.addListener(`ref_${fieldId}`, function () {
          console.log(
            `S10: Reference listener triggered by ref_${fieldId}, recalculating all.`,
          );
          calculateAll();
          ModeManager.updateCalculatedDisplayValues(); // ✅ ADD: Update DOM after calculations
        });
      });

      // Special handling for utilization factor dependencies
      ["i_97", "i_103", "m_121", "i_98"].forEach((lossField) => {
        // Target utilization factor dependencies
        window.TEUI.StateManager.addListener(lossField, function () {
          console.log(
            `S10: Target utilization factor dependency ${lossField} changed.`,
          );
          calculateUtilizationFactors();
          ModeManager.updateCalculatedDisplayValues(); // ✅ ADD: Update DOM after calculations
        });

        // ✅ ADD: Reference utilization factor dependencies
        window.TEUI.StateManager.addListener(`ref_${lossField}`, function () {
          console.log(
            `S10: Reference utilization factor dependency ref_${lossField} changed.`,
          );
          calculateUtilizationFactors();
          ModeManager.updateCalculatedDisplayValues(); // ✅ ADD: Update DOM after calculations
        });
      });

      console.log("S10: Simplified global StateManager listeners added");
    } catch (_error) {
      console.error("S10: Error in addStateManagerListeners:", _error);
    }
  }

  /**
   * Register with the SectionIntegrator
   */
  function registerWithIntegrator() {
    try {
      // If the integrator exists, register dependencies
      if (window.TEUI?.SectionIntegrator) {
        // Example: window.TEUI.SectionIntegrator.addDependency('sect10_someOutput', 'sectXX_someInput');
      }
    } catch (_error) {
      // Error in registerWithIntegrator was previously logged here
    }
  }

  /**
   * Called when the section is rendered
   * This is a good place to initialize values and run initial calculations
   */
  function onSectionRendered() {
    console.log(
      "S10: Section rendered - initializing Self-Contained State Module.",
    );

    // 1. Initialize the ModeManager and its internal states
    ModeManager.initialize();

    // 2. Setup the section-specific toggle switch in the header
    injectHeaderControls();

    // 3. Initialize event handlers for this section
    initializeEventHandlers();

    // 4. Sync UI to the default (Target) state
    ModeManager.refreshUI();

    // Register this section with StateManager and add listeners
    registerWithStateManager();
    addStateManagerListeners();

    // Expose ModeManager globally for cross-section communication (e.g., global toggle)
    if (window.TEUI) {
      window.TEUI.sect10 = window.TEUI.sect10 || {};
      window.TEUI.sect10.ModeManager = ModeManager;
      console.log(
        "S10: ModeManager exposed globally for cross-section integration.",
      );
    }

    // 5. Perform initial calculations for this section
    calculateAll();
  }

  /**
   * Creates and injects the Target/Reference toggle and Reset button into the section header.
   */
  function injectHeaderControls() {
    const sectionHeader = document.querySelector(
      "#envelopeRadiantGains .section-header",
    );
    if (
      !sectionHeader ||
      sectionHeader.querySelector(".local-controls-container")
    ) {
      return; // Already setup or header not found
    }

    const controlsContainer = document.createElement("div");
    controlsContainer.className = "local-controls-container";
    controlsContainer.style.cssText =
      "display: flex; align-items: center; margin-left: auto; gap: 10px;";

    // --- Create Reset Button ---
    const resetButton = document.createElement("button");
    resetButton.innerHTML = "🔄 Reset"; // Using an icon for clarity
    resetButton.title = "Reset Section 10 to Defaults";
    resetButton.style.cssText =
      "padding: 4px 8px; font-size: 0.8em; background-color: #dc3545; color: white; border: none; border-radius: 4px; cursor: pointer;";

    resetButton.addEventListener("click", (event) => {
      event.stopPropagation();
      // Use a confirmation dialog to prevent accidental resets
      if (
        confirm(
          "Are you sure you want to reset all inputs in this section to their defaults? This will clear any saved data for Section 10.",
        )
      ) {
        ModeManager.resetState();
      }
    });

    // --- Create Toggle Switch ---
    const stateIndicator = document.createElement("span");
    stateIndicator.textContent = "TARGET";
    stateIndicator.style.cssText =
      "color: #fff; font-weight: bold; font-size: 0.8em; background-color: rgba(0, 123, 255, 0.5); padding: 2px 6px; border-radius: 4px;";

    const toggleSwitch = document.createElement("div");
    toggleSwitch.style.cssText =
      "position: relative; width: 40px; height: 20px; background-color: #ccc; border-radius: 10px; cursor: pointer;";

    const slider = document.createElement("div");
    slider.style.cssText =
      "position: absolute; top: 2px; left: 2px; width: 16px; height: 16px; background-color: white; border-radius: 50%; transition: transform 0.2s;";

    toggleSwitch.appendChild(slider);

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

    // Append all controls to the container, then the container to the header
    controlsContainer.appendChild(resetButton);
    controlsContainer.appendChild(stateIndicator);
    controlsContainer.appendChild(toggleSwitch);
    sectionHeader.appendChild(controlsContainer);
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

    calculateAll: calculateAll,
    calculateUtilizationFactors: calculateUtilizationFactors,
    setupDropdownDefaults: setupDropdownDefaults,
    registerWithStateManager: registerWithStateManager,
    addStateManagerListeners: addStateManagerListeners,
    registerWithIntegrator: registerWithIntegrator,

    calculateGainFactor: function (orientation, climateZone) {
      try {
        return calculateGainFactor(orientation, climateZone);
      } catch (_error) {
        // console.error('Error in Section10 calculateGainFactor:', _error);
        return 50.0; // Default value in case of error
      }
    },

    // ✅ CRITICAL FIX: Export ModeManager for dual-state field routing
    ModeManager: ModeManager,
  };
})();

// Export key functions to the global namespace for cross-section access
document.addEventListener("DOMContentLoaded", function () {
  // Create section namespace
  window.TEUI = window.TEUI || {};
  window.TEUI.sect10 = window.TEUI.sect10 || {};

  // Export critical functions
  const module = window.TEUI.SectionModules.sect10;
  window.TEUI.sect10.calculateAll = module.calculateAll;
  window.TEUI.sect10.calculateUtilizationFactors =
    module.calculateUtilizationFactors;

  // Create a safe global function for radiant gains recalculation
  window.recalculateRadiantGains = function () {
    if (window.recalculateRadiantGainsRunning) return;

    window.recalculateRadiantGainsRunning = true;
    try {
      if (window.TEUI?.SectionModules?.sect10?.calculateAll) {
        window.TEUI.SectionModules.sect10.calculateAll();
      } else if (window.TEUI?.sect10?.calculateAll) {
        window.TEUI.sect10.calculateAll();
      }
    } catch (_e) {
      // Error in global recalculateRadiantGains was previously logged here
    } finally {
      window.recalculateRadiantGainsRunning = false;
    }
  };
});
