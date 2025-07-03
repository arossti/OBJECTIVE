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
  // MODE MANAGER (Dual-State Support)
  //==========================================================================
  const ModeManager = {
    currentMode: "target",
    switchMode: function(mode) {
      if (mode !== "target" && mode !== "reference") return;
      if (this.currentMode === mode) return;
      
      this.currentMode = mode;
      console.log(`S10: Switched to ${mode.toUpperCase()} mode`);
      
      // ✅ CRITICAL: Set Reference defaults when switching to Reference mode
      if (mode === "reference") {
        this.setReferenceDefaults();
      }
      
      // ✅ CRITICAL: Refresh UI to show current mode's values
      this.refreshUI();
    },

    initializePrefixedState: function() {
      // ✅ CRITICAL: Initialize prefixed state from field definitions
      // This ensures both target_ and ref_ state are populated before calculations
      const fields = getFields();
      
      Object.keys(fields).forEach(rowId => {
        const row = fields[rowId];
        if (row.cells) {
          Object.keys(row.cells).forEach(cellKey => {
            const cell = row.cells[cellKey];
            if (cell.fieldId && cell.value !== undefined) {
              // Populate both target and reference state with default values
              window.TEUI.StateManager.setValue(`target_${cell.fieldId}`, cell.value, "default");
              window.TEUI.StateManager.setValue(`ref_${cell.fieldId}`, cell.value, "default");
            }
          });
        }
      });
      
      // ✅ CRITICAL: Set reasonable default loss factors for PHPP calculation
      // This ensures PHPP % shows correct value (94%+) on initial load
      const lossFactorDefaults = {
        i_97: "15000",   // Envelope losses (reasonable default)
        i_103: "8000",   // Ventilation losses (reasonable default)  
        m_121: "2000",   // Hot water losses (reasonable default)
        i_98: "1000"     // Other losses (reasonable default)
      };
      
      Object.entries(lossFactorDefaults).forEach(([fieldId, defaultValue]) => {
        // Only set if doesn't exist (don't override other sections)
        if (!window.TEUI.StateManager.getValue(fieldId)) {
          window.TEUI.StateManager.setValue(fieldId, defaultValue, "default");
        }
      });
      
      console.log("S10: Prefixed state initialized from field definitions");
    },

    setReferenceDefaults: function() {
      // ✅ Building defaults for Reference state (mirrored building approach)
      // Using actual building code defaults, not contrasting values
      const referenceDefaults = {
        // Window areas (code minimum WWR)
        ref_d_74: "20.00",    // North windows: Code minimum
        ref_d_75: "20.00",    // East windows: Code minimum  
        ref_d_76: "20.00",    // South windows: Code minimum
        ref_d_77: "20.00",    // West windows: Code minimum
        ref_d_78: "0.00",     // Skylights: None by default
        
        // Door area
        ref_d_73: "7.50",     // Standard door area
        
        // Orientations (code assumptions)
        ref_e_73: "Average",  // Door: Average orientation
        ref_e_74: "North",    // North windows
        ref_e_75: "East",     // East windows
        ref_e_76: "South",    // South windows
        ref_e_77: "West",     // West windows
        ref_e_78: "Skylight", // Skylights
        
        // SHGC (code maximum allowable)
        ref_f_73: "0.50",     // Door SHGC
        ref_f_74: "0.40",     // Window SHGC (code maximum)
        ref_f_75: "0.40",     // Window SHGC (code maximum)
        ref_f_76: "0.40",     // Window SHGC (code maximum)
        ref_f_77: "0.40",     // Window SHGC (code maximum)
        ref_f_78: "0.40",     // Skylight SHGC
        
        // Shading (code assumptions)
        ref_g_73: "0",        // Door: No winter shading
        ref_g_74: "0",        // Windows: No winter shading
        ref_g_75: "0",        
        ref_g_76: "0",
        ref_g_77: "0",
        ref_g_78: "0",
        
        ref_h_73: "50",       // Door: Moderate summer shading
        ref_h_74: "50",       // Windows: Moderate summer shading
        ref_h_75: "50",
        ref_h_76: "50", 
        ref_h_77: "50",
        ref_h_78: "50",
        
        // Gains Method (code standard)
        ref_d_80: "NRC 40%",  // Standard utilization method
      };

      Object.entries(referenceDefaults).forEach(([fieldId, defaultValue]) => {
        // Only set if doesn't exist (preserves user edits)
        if (!window.TEUI.StateManager.getValue(fieldId)) {
          window.TEUI.StateManager.setValue(fieldId, defaultValue, "default");
        }
      });

      console.log("S10: Reference defaults set");
    },

    refreshUI: function() {
      const prefix = this.currentMode === "target" ? "target_" : "ref_";
      const sectionElement = document.getElementById("envelopeRadiantGains");
      if (!sectionElement) return;
      
      // Update all interactive elements from current mode's state
      const editableFields = sectionElement.querySelectorAll("[data-field-id]");
      editableFields.forEach((field) => {
        const fieldId = field.getAttribute("data-field-id");
        const stateValue = window.TEUI.StateManager.getValue(`${prefix}${fieldId}`);
        
        if (stateValue !== null && stateValue !== undefined) {
          if (field.tagName === "SELECT") {
            field.value = stateValue;
          } else if (field.type === "range") {
            field.value = stateValue;
            // Update display
            const displayElement = document.querySelector(`[data-display-for="${fieldId}"]`);
            if (displayElement) {
              displayElement.textContent = `${stateValue}%`;
            }
          } else if (field.hasAttribute("contenteditable")) {
            field.textContent = stateValue;
          }
        }
      });
      
      // Recalculate with current mode's values
      setTimeout(() => calculateAll(), 50);
    }
  };

  // ✅ CRITICAL: Expose ModeManager globally for cross-section communication
  window.TEUI.sect10 = window.TEUI.sect10 || {};
  window.TEUI.sect10.ModeManager = ModeManager;

  //==========================================================================
  // HELPER FUNCTIONS (Standardized)
  //==========================================================================
  // Note: Using standardized helpers based on S11/S15
  function getNumericValue(fieldId) {
    // Directly use the global parser, assuming it's loaded correctly due to index.html order
    // Use || 0 as a fallback if parseNumeric returns null/undefined/NaN
    return window.TEUI.parseNumeric(getFieldValue(fieldId)) || 0;
  }

  function getFieldValue(fieldId) {
    // ✅ CORRECTED: Use mode-aware state reading with zero fallbacks
    const prefix = ModeManager.currentMode === "target" ? "target_" : "ref_";
    const stateValue = window.TEUI?.StateManager?.getValue(`${prefix}${fieldId}`);
    if (stateValue != null) return stateValue;
    const element = document.querySelector(`[data-field-id="${fieldId}"]`);
    return element ? (element.value ?? element.textContent?.trim()) : null;
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

  /**
   * Sets calculated value in StateManager and updates DOM using standard formatNumber.
   * @param {string} fieldId
   * @param {number} rawValue
   * @param {string} [format='number']
   */
  function setCalculatedValue(fieldId, rawValue, format = "number") {
    // Handle N/A for non-finite numbers
    if (!isFinite(rawValue) || rawValue === null || rawValue === undefined) {
      // ✅ CORRECTED: Write to current mode's prefixed state
      const prefix = ModeManager.currentMode === "target" ? "target_" : "ref_";
      window.TEUI.StateManager?.setValue(`${prefix}${fieldId}`, "N/A", "calculated");
      
      // ✅ CRITICAL: Also update global state in Target mode for cross-section integration
      if (ModeManager.currentMode === "target") {
        window.TEUI.StateManager?.setValue(fieldId, "N/A", "calculated");
      }
      
      // Update DOM only in Target mode (preserve calculation flow)
      if (ModeManager.currentMode === "target") {
        const elementNA = document.querySelector(`[data-field-id="${fieldId}"]`);
        if (elementNA) elementNA.textContent = "N/A";
      }
      return;
    }

    // Determine format if not specified
    if (format === "number") {
      if (/[jl]_[\d]{2,}/.test(fieldId) || /[jl]_79/.test(fieldId)) {
        format = "percent";
      } else if (fieldId.startsWith("p_")) {
        format = "currency";
      }
      // default is 'number' (2 decimals)
    }

    const formattedValue = formatNumber(rawValue, format);

    if (window.TEUI?.StateManager?.setValue) {
      // ✅ CORRECTED: Store in current mode's prefixed state
      const prefix = ModeManager.currentMode === "target" ? "target_" : "ref_";
      window.TEUI.StateManager.setValue(
        `${prefix}${fieldId}`,
        rawValue.toString(),
        "calculated",
      );
      
      // ✅ CRITICAL: Also update global state in Target mode for cross-section integration
      if (ModeManager.currentMode === "target") {
        window.TEUI.StateManager.setValue(
          fieldId,
          rawValue.toString(),
          "calculated",
        );
      }
    }

    // Update DOM only in Target mode (preserve calculation flow)
    if (ModeManager.currentMode === "target") {
      const element = document.querySelector(`[data-field-id="${fieldId}"]`);
      if (element) {
        element.textContent = formattedValue;
        element.classList.toggle("negative-value", rawValue < 0);
      }
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

    // ✅ CORRECTED: Store the validated value in current mode's prefixed state
    const prefix = ModeManager.currentMode === "target" ? "target_" : "ref_";
    if (window.TEUI?.StateManager?.setValue) {
      window.TEUI.StateManager.setValue(
        `${prefix}${currentFieldId}`,
        rawValueToStore,
        "user-modified",
      );
    }

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
    calculateReferenceModel();
    calculateTargetModel();
  }

  /**
   * REFERENCE MODEL ENGINE: Calculate all values using Reference state
   * Stores results with ref_ prefix to keep separate from Target values
   */
  function calculateReferenceModel() {
    try {
      // Calculate individual orientation rows using reference values
      const orientationResults = {};
      orientationConfig.forEach((rowId) => {
        orientationResults[rowId] = calculateOrientationGains(
          rowId.toString(),
          true,
        ); // true = isReferenceCalculation
      });

      // Calculate subtotals using reference results
      const subtotalResults = calculateSubtotals(true); // true = isReferenceCalculation

      // Calculate utilization factors using reference values
      calculateUtilizationFactors(true); // true = isReferenceCalculation

      // Store reference results with ref_ prefix
      if (window.TEUI?.StateManager) {
        // Store individual row reference values
        orientationConfig.forEach((rowId) => {
          const rowStr = rowId.toString();
          const results = orientationResults[rowId] || {
            heatingGains: 0,
            coolingGains: 0,
          };
          window.TEUI.StateManager.setValue(
            `ref_i_${rowStr}`,
            results.heatingGains.toString(),
            "calculated",
          );
          window.TEUI.StateManager.setValue(
            `ref_k_${rowStr}`,
            results.coolingGains.toString(),
            "calculated",
          );
        });

        // Store subtotal reference values
        window.TEUI.StateManager.setValue(
          "ref_i_79",
          subtotalResults.heatingGains.toString(),
          "calculated",
        );
        window.TEUI.StateManager.setValue(
          "ref_k_79",
          subtotalResults.coolingGains.toString(),
          "calculated",
        );

        // Note: Utilization factors are stored within calculateUtilizationFactors
      }
    } catch (_error) {
      // Error in Reference Model calculations was previously logged here
    }
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
   * Calculate solar gains for a specific orientation
   * @param {string} rowId - Row ID for the element (e.g., "73" for doors)
   * @param {boolean} isReferenceCalculation - Whether to use reference values
   */
  function calculateOrientationGains(rowId, isReferenceCalculation = false) {
    try {
      // Get relevant values using getFieldValue and the global parseNumeric
      const area = window.TEUI.parseNumeric(getFieldValue(`d_${rowId}`));
      const orientation = getFieldValue(`e_${rowId}`);

      // Get SHGC value based on calculation type
      let shgc;
      if (isReferenceCalculation) {
        // For Reference calculations, try to get reference SHGC value
        const refFieldId = `f_${rowId}`;
        shgc =
          window.TEUI?.StateManager?.getReferenceValue(refFieldId) ||
          window.TEUI.parseNumeric(getFieldValue(refFieldId));
      } else {
        // For Target calculations, use application value
        shgc = window.TEUI.parseNumeric(getFieldValue(`f_${rowId}`));
      }

      // Winter/Summer shading are percentages (0-100), convert to decimal (0-1) for calculation
      const winterShadingDecimal =
        window.TEUI.parseNumeric(getFieldValue(`g_${rowId}`), 0) / 100;
      const summerShadingDecimal =
        window.TEUI.parseNumeric(getFieldValue(`h_${rowId}`), 100) / 100;

      // ✅ CORRECTED: Climate zone should be mode-aware for different locations
      const climateZone = getNumericValue("j_19") || 6.0;

      const gainFactor = calculateGainFactor(orientation, climateZone); // This is M73 (Gain Factor based on SHGC=0.5)

      // Only update display for Target calculations
      if (!isReferenceCalculation) {
        setCalculatedValue(`m_${rowId}`, gainFactor); // Pass raw value, not formatted string
      }

      // SHGC Normalization Factor: Adjusts gains based on actual SHGC relative to the baseline SHGC of 0.5 used for M73 values.
      const shgcNormalizationFactor = shgc / 0.5;

      // Calculate heating season solar gains
      const heatingGains =
        area *
        gainFactor *
        shgcNormalizationFactor *
        (1 - winterShadingDecimal);

      // Calculate cooling season solar gains
      // The coolingModifierFactor accounts for different load factors in summer (e.g. skylights more, others less)
      const coolingModifierFactor = orientation === "Skylight" ? 1.25 : 0.5;
      const coolingGains =
        area *
        gainFactor *
        shgcNormalizationFactor *
        (1 - summerShadingDecimal) *
        coolingModifierFactor;

      const cost = getNumericValue("l_12") * (coolingGains - heatingGains);

      // For Reference calculations, return the calculated values
      if (isReferenceCalculation) {
        return {
          heatingGains,
          coolingGains,
          gainFactor,
        };
      }

      // For Target calculations, update the DOM
      setCalculatedValue(`i_${rowId}`, heatingGains);
      setCalculatedValue(`k_${rowId}`, coolingGains);
      setCalculatedValue(`p_${rowId}`, cost, "currency");

      return {
        heatingGains,
        coolingGains,
        gainFactor,
      };
    } catch (_error) {
      return { heatingGains: 0, coolingGains: 0, gainFactor: 0 };
    }
  }

  /**
   * Calculate subtotals for solar gains
   * @param {boolean} isReferenceCalculation - Whether to use reference values
   */
  function calculateSubtotals(isReferenceCalculation = false) {
    try {
      // Calculate total heating gains
      let heatingGains, coolingGains;

      if (isReferenceCalculation) {
        // For Reference calculations, use ref_ prefixed values
        heatingGains = [
          window.TEUI?.StateManager?.getValue("ref_i_73") || 0,
          window.TEUI?.StateManager?.getValue("ref_i_74") || 0,
          window.TEUI?.StateManager?.getValue("ref_i_75") || 0,
          window.TEUI?.StateManager?.getValue("ref_i_76") || 0,
          window.TEUI?.StateManager?.getValue("ref_i_77") || 0,
          window.TEUI?.StateManager?.getValue("ref_i_78") || 0,
        ].reduce((sum, val) => sum + parseFloat(val || 0), 0);

        coolingGains = [
          window.TEUI?.StateManager?.getValue("ref_k_73") || 0,
          window.TEUI?.StateManager?.getValue("ref_k_74") || 0,
          window.TEUI?.StateManager?.getValue("ref_k_75") || 0,
          window.TEUI?.StateManager?.getValue("ref_k_76") || 0,
          window.TEUI?.StateManager?.getValue("ref_k_77") || 0,
          window.TEUI?.StateManager?.getValue("ref_k_78") || 0,
        ].reduce((sum, val) => sum + parseFloat(val || 0), 0);
      } else {
        // For Target calculations, use regular values
        heatingGains = [
          getNumericValue("i_73"), // Doors
          getNumericValue("i_74"), // North
          getNumericValue("i_75"), // East
          getNumericValue("i_76"), // South
          getNumericValue("i_77"), // West
          getNumericValue("i_78"), // Skylights
        ].reduce((sum, val) => sum + val, 0);

        coolingGains = [
          getNumericValue("k_73"), // Doors
          getNumericValue("k_74"), // North
          getNumericValue("k_75"), // East
          getNumericValue("k_76"), // South
          getNumericValue("k_77"), // West
          getNumericValue("k_78"), // Skylights
        ].reduce((sum, val) => sum + val, 0);
      }

      // For Reference calculations, just return the values
      if (isReferenceCalculation) {
        return {
          heatingGains,
          coolingGains,
        };
      }

      // For Target calculations, update the DOM
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

      return {
        heatingGains,
        coolingGains,
      };
    } catch (_error) {
      return { heatingGains: 0, coolingGains: 0 };
    }
  }

  /**
   * Calculate utilization factors
   * @param {boolean} isReferenceCalculation - Whether to use reference values
   */
  function calculateUtilizationFactors(isReferenceCalculation = false) {
    try {
      // Get total solar gains
      let solarGains;
      if (isReferenceCalculation) {
        solarGains = parseFloat(
          window.TEUI?.StateManager?.getValue("ref_i_79") || 0,
        );
      } else {
        solarGains = getNumericValue("i_79");
      }

      // Get internal gains from Section 9 if available
      let internalGains;
      if (isReferenceCalculation) {
        internalGains = parseFloat(
          window.TEUI?.StateManager?.getValue("ref_i_71") || 0,
        );
      } else {
        // 🚧 TODO: Internal gains should be mode-aware when S09 is refactored
        // For now, read from global state until S09 has dual-state support
        internalGains = window.TEUI.parseNumeric(
          window.TEUI?.StateManager?.getValue("i_71")
        ) || 0;
      }

      // Calculate total gains (solar + internal)
      const totalGains = solarGains + internalGains;

      // For Reference calculations, don't update DOM for e_80/e_81
      if (!isReferenceCalculation) {
        setCalculatedValue("e_80", totalGains, "number");
        setCalculatedValue("e_81", totalGains, "number");
      }

      //=====================================================================
      // PART 1: Calculate utilization factor based on selected method in row 80
      //=====================================================================

      // Get utilization method
      let utilizationMethod;
      if (isReferenceCalculation) {
        // For Reference calculations, check if standard specifies a method
        utilizationMethod =
          window.TEUI?.StateManager?.getReferenceValue("d_80") || "NRC 40%";
      } else {
        utilizationMethod = getFieldValue("d_80") || "NRC 40%";
      }

      let utilizationFactor = 0.4; // Default to 40%

      // Implementation of the G80 formula based on dropdown selection
      // Options are: "NRC 0%", "NRC 40%", "NRC 50%", "NRC 60%", "PH Method"
      if (utilizationMethod === "NRC 0%") {
        utilizationFactor = 0;
      } else if (utilizationMethod === "NRC 40%") {
        utilizationFactor = 0.4;
      } else if (utilizationMethod === "NRC 50%") {
        utilizationFactor = 0.5;
      } else if (utilizationMethod === "NRC 60%") {
        utilizationFactor = 0.6;
      } else if (utilizationMethod === "PH Method") {
        // Formula: =(1-((i_79+i_71)/(i_97+i_103+m_121+i_98))^5)/(1-((i_79+i_71)/(i_97+i_103+m_121+i_98))^6)

        // Get loss values from other sections (with fallbacks)
        let i97, i103, m121, i98;
        if (isReferenceCalculation) {
          i97 = parseFloat(
            window.TEUI?.StateManager?.getValue("ref_i_97") || 0,
          );
          i103 = parseFloat(
            window.TEUI?.StateManager?.getValue("ref_i_103") || 0,
          );
          m121 = parseFloat(
            window.TEUI?.StateManager?.getValue("ref_m_121") || 0,
          );
          i98 = parseFloat(
            window.TEUI?.StateManager?.getValue("ref_i_98") || 0,
          );
        } else {
          // 🚧 TODO: Loss factors should be mode-aware when other sections are refactored  
          // For now, read from global state until S04/S05/S06/S08 have dual-state support
          i97 = window.TEUI.parseNumeric(window.TEUI?.StateManager?.getValue("i_97")) || 0;
          i103 = window.TEUI.parseNumeric(window.TEUI?.StateManager?.getValue("i_103")) || 0;
          m121 = window.TEUI.parseNumeric(window.TEUI?.StateManager?.getValue("m_121")) || 0;
          i98 = window.TEUI.parseNumeric(window.TEUI?.StateManager?.getValue("i_98")) || 0;
        }

        const numerator = totalGains; // i_79 + i_71
        const denominator = i97 + i103 + m121 + i98; // Total Losses

        if (denominator > 0) {
          const gamma = numerator / denominator;
          if (Math.abs(gamma - 1) < 1e-9) {
            // Handle gamma close to 1
            utilizationFactor = 5 / 6; // a/(a+1)
          } else {
            const a = 5;
            const gamma_a = Math.pow(gamma, a);
            const gamma_a_plus_1 = Math.pow(gamma, a + 1);
            utilizationFactor = (1 - gamma_a) / (1 - gamma_a_plus_1);
            utilizationFactor = Math.max(0, Math.min(1, utilizationFactor));
          }
        } else {
          utilizationFactor = numerator > 0 ? 1 : 0; // If no losses, use 100% gain or 0%
        }
      }

      // Calculate usable gains based on selected method (i_80)
      const usableGains = totalGains * utilizationFactor;

      // For Reference calculations, store values with ref_ prefix
      if (isReferenceCalculation) {
        if (window.TEUI?.StateManager) {
          window.TEUI.StateManager.setValue(
            "ref_e_80",
            totalGains.toString(),
            "calculated",
          );
          window.TEUI.StateManager.setValue(
            "ref_g_80",
            utilizationFactor.toString(),
            "calculated",
          );
          window.TEUI.StateManager.setValue(
            "ref_i_80",
            usableGains.toString(),
            "calculated",
          );
        }
        return;
      }

      // For Target calculations, update the DOM
      setCalculatedValue("g_80", utilizationFactor, "percent");
      setCalculatedValue("i_80", usableGains, "number");

      //=====================================================================
      // PART 2: Calculate PHPP method as reference in row 81 (always)
      //=====================================================================

      // Get loss values again for potentially different reference calc if needed (using same for now)
      // 🚧 TODO: Loss factors should be mode-aware when other sections are refactored
      // For now, read from global state until S04/S05/S06/S08 have dual-state support
      const i97Reference = window.TEUI.parseNumeric(window.TEUI?.StateManager?.getValue("i_97")) || 0;
      const i103Reference = window.TEUI.parseNumeric(window.TEUI?.StateManager?.getValue("i_103")) || 0;
      const m121Reference = window.TEUI.parseNumeric(window.TEUI?.StateManager?.getValue("m_121")) || 0;
      const i98Reference = window.TEUI.parseNumeric(window.TEUI?.StateManager?.getValue("i_98")) || 0;

      const numeratorReference = totalGains;
      const denominatorReference =
        i97Reference + i103Reference + m121Reference + i98Reference;

      let phUtilizationFactor = 0.9; // Default fallback if denom is 0

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

      // Update reference values in row 81 (always PHPP method)
      setCalculatedValue("g_81", phUtilizationFactor, "percent");
      const phReferenceGains = totalGains * phUtilizationFactor;
      setCalculatedValue("i_81", phReferenceGains, "number");

      //=====================================================================
      // PART 3: Calculate unusable gains based on selected method (row 80)
      //=====================================================================

      const unusedGains = totalGains - usableGains;
      setCalculatedValue("i_82", unusedGains, "number");
    } catch (_error) {
      // Set error values or defaults
      if (!isReferenceCalculation) {
        setCalculatedValue("e_80", 0);
        setCalculatedValue("g_80", 0, "percent");
        setCalculatedValue("i_80", 0);
        setCalculatedValue("e_81", 0);
        setCalculatedValue("g_81", 0, "percent");
        setCalculatedValue("i_81", 0);
        setCalculatedValue("i_82", 0);
      }
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

        // ✅ CORRECTED: Write to current mode's prefixed state
        const prefix = ModeManager.currentMode === "target" ? "target_" : "ref_";
        if (window.TEUI?.StateManager?.setValue) {
          window.TEUI.StateManager.setValue(
            `${prefix}${fieldId}`,
            this.value,
            "user-modified",
          );
        }

        // Recalculate
        calculateAll();
      });
    });

    // Add slider change handlers
    const sliders = sectionElement.querySelectorAll('input[type="range"]');
    sliders.forEach((slider) => {
      slider.addEventListener("input", function () {
        const fieldId = this.getAttribute("data-field-id");
        if (!fieldId) return;

        // ✅ CORRECTED: Write to current mode's prefixed state
        const prefix = ModeManager.currentMode === "target" ? "target_" : "ref_";
        if (window.TEUI?.StateManager?.setValue) {
          window.TEUI.StateManager.setValue(
            `${prefix}${fieldId}`,
            this.value,
            "user-modified",
          );
        }

        // Update the display value
        const displayElement = document.querySelector(
          `[data-display-for="${fieldId}"]`,
        );
        if (displayElement) {
          displayElement.textContent = `${this.value}%`;
        }

        // Recalculate with a slight delay to improve performance
        setTimeout(calculateAll, 100);
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
   * Add listeners for StateManager changes
   */
  function addStateManagerListeners() {
    try {
      if (!window.TEUI?.StateManager) {
        return;
      }

      // Add listeners for key fields that might change from other sections
      // Example: Listen for climate zone changes
      window.TEUI.StateManager.addListener("j_19", function () {
        // console.log('Climate zone changed, recalculating solar gains');
        calculateAll();
      });

      // Add listener for internal gains (i_71)
      window.TEUI.StateManager.addListener("i_71", calculateAll);
      // Add listeners for loss factors used in PH Method
      ["i_97", "i_103", "m_121", "i_98"].forEach((lossField) => {
        window.TEUI.StateManager.addListener(
          lossField,
          calculateUtilizationFactors,
        );
      });

      // console.log('Radiant Gains StateManager listeners added');
    } catch (_error) {
      // Error in addStateManagerListeners was previously logged here
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
    // Initialize event handlers
    initializeEventHandlers();

    // Setup default values for dropdowns
    setupDropdownDefaults();

    // Register this section with StateManager
    registerWithStateManager();

    // Register with SectionIntegrator if needed
    registerWithIntegrator();

    // Add StateManager listeners for this section
    addStateManagerListeners();

    // ✅ CRITICAL: Initialize prefixed state from field definitions FIRST
    ModeManager.initializePrefixedState();

    // ✅ CRITICAL: Set Reference-specific defaults (overrides ref_ values)
    ModeManager.setReferenceDefaults();

    // ✅ CRITICAL: Calculate with populated prefixed state
    calculateAll(); // Calculate directly as part of onSectionRendered
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
    ModeManager: ModeManager, // ✅ CRITICAL: Expose ModeManager for cross-section communication

    calculateGainFactor: function (orientation, climateZone) {
      try {
        return calculateGainFactor(orientation, climateZone);
      } catch (_error) {
        // console.error('Error in Section10 calculateGainFactor:', _error);
        return 50.0; // Default value in case of error
      }
    },
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
