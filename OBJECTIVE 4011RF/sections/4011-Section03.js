/**
 * 4011-Section03.js - CORRECTED STATEMANAGER ARCHITECTURE
 * Climate Calculations (Section 3) module for TEUI Calculator 4.011
 *
 * ARCHITECTURAL CORRECTION: Proper StateManager integration with target_/ref_ prefixes
 * Eliminates custom state objects and direct DOM manipulation antipatterns
 */

// Ensure namespace exists
window.TEUI = window.TEUI || {};
window.TEUI.SectionModules = window.TEUI.SectionModules || {};

// Section 3: Climate Calculations Module with CORRECTED StateManager Architecture
window.TEUI.SectionModules.sect03 = (function () {
  
  //==========================================================================
  // CORRECTED ARCHITECTURE - STATEMANAGER AS SINGLE SOURCE OF TRUTH
  //==========================================================================
  
  /**
   * Mode Manager - Handles switching between Target and Reference WITHOUT bypassing StateManager
   */
  const ModeManager = {
    currentMode: "target",

    switchMode: function(mode) {
      if (this.currentMode === mode) return;
      
      this.currentMode = mode;
      console.log(`S03: Switched to ${mode.toUpperCase()} mode`);
      
      // Update UI state indicator
      const indicator = document.querySelector("#climateCalculations .state-indicator");
      if (indicator) {
        indicator.textContent = mode.toUpperCase() + " MODE";
        indicator.className = `state-indicator ${mode}`;
      }
      
      // Update body class for CSS styling
      if (mode === "reference") {
        document.body.classList.add("viewing-reference-inputs");
      } else {
        document.body.classList.remove("viewing-reference-inputs");
      }
      
      // Refresh UI to show current mode's values from StateManager
      this.refreshUI();
    },

    refreshUI: function() {
      const prefix = this.currentMode === "target" ? "target_" : "ref_";
      
      // Update province dropdown from StateManager
      const provinceSelect = document.querySelector('[data-dropdown-id="dd_d_19"]');
      if (provinceSelect) {
        const provinceValue = window.TEUI.StateManager.getValue(`${prefix}d_19`);
        if (provinceValue) {
          provinceSelect.value = provinceValue;
          handleProvinceChange({ target: provinceSelect });
        }
      }
      
      // Update city dropdown from StateManager
      const citySelect = document.querySelector('[data-dropdown-id="dd_h_19"]');
      if (citySelect) {
        const cityValue = window.TEUI.StateManager.getValue(`${prefix}h_19`);
        if (cityValue) {
          citySelect.value = cityValue;
        }
      }
      
      // Update timeframe dropdown from StateManager
      const timeframeSelect = document.querySelector('[data-dropdown-id="dd_h_20"]');
      if (timeframeSelect) {
        const timeframeValue = window.TEUI.StateManager.getValue(`${prefix}h_20`);
        if (timeframeValue) {
          timeframeSelect.value = timeframeValue;
        }
      }
      
      // Update capacitance dropdown from StateManager
      const capacitanceSelect = document.querySelector('[data-dropdown-id="dd_h_21"]');
      if (capacitanceSelect) {
        const capacitanceValue = window.TEUI.StateManager.getValue(`${prefix}h_21`) || "Capacitance";
        capacitanceSelect.value = capacitanceValue;
      }
      
      // Update percentage slider from StateManager
      const percentageSlider = document.querySelector('input.form-range[data-field-id="i_21"]');
      if (percentageSlider) {
        const percentageValue = window.TEUI.StateManager.getValue(`${prefix}i_21`) || 50;
        percentageSlider.value = percentageValue;
        
        // Update display
        const sliderContainer = percentageSlider.parentElement;
        const display = sliderContainer?.querySelector('.slider-value');
        if (display) {
          display.textContent = percentageValue + "%";
        }
      }
      
      // Update all other fields from StateManager
      const editableFields = document.querySelectorAll("#climateCalculations [data-field-id]");
      editableFields.forEach(field => {
        const fieldId = field.getAttribute("data-field-id");
        const stateValue = window.TEUI.StateManager.getValue(`${prefix}${fieldId}`);
        if (stateValue !== undefined && stateValue !== null) {
          if (field.isContentEditable) {
            field.textContent = stateValue;
          } else if (field.tagName === "SELECT") {
            field.value = stateValue;
          } else if (field.tagName === "SPAN") {
            field.textContent = stateValue;
          }
        }
      });
      
      // Update climate data and calculations
      updateWeatherData();
      
      console.log(`S03: UI refreshed for ${this.currentMode} mode via StateManager`);
    },

    setValue: function(fieldId, value, source = "user-modified") {
      const prefix = this.currentMode === "target" ? "target_" : "ref_";
      window.TEUI.StateManager.setValue(`${prefix}${fieldId}`, value, source);
    },

    getValue: function(fieldId) {
      const prefix = this.currentMode === "target" ? "target_" : "ref_";
      return window.TEUI.StateManager.getValue(`${prefix}${fieldId}`);
    },

    resetAllStates: function() {
      // Clear target values
      const targetFields = ['d_19', 'h_19', 'h_20', 'h_21', 'h_23', 'h_24', 'm_19', 'l_22', 'l_24', 'i_21'];
      targetFields.forEach(fieldId => {
        window.TEUI.StateManager.setValue(`target_${fieldId}`, null);
      });
      
      // Clear reference values
      targetFields.forEach(fieldId => {
        window.TEUI.StateManager.setValue(`ref_${fieldId}`, null);
      });
      
      // Set defaults via StateManager
      this.setDefaults();
      
      console.log("S03: All states reset via StateManager");
      alert("Section 3 states have been reset to defaults!");
    },

    setDefaults: function() {
      // Set Target defaults only if not already set
      const targetDefaults = {
        "target_d_19": "ON",
        "target_h_19": "Alexandria", 
        "target_h_20": "Present",
        "target_h_21": "Capacitance",
        "target_h_23": "18",
        "target_h_24": "24",
        "target_m_19": "120",
        "target_l_22": "80",
        "target_l_24": "24",
        "target_i_21": "50"
      };

      Object.entries(targetDefaults).forEach(([fieldId, defaultValue]) => {
        if (!window.TEUI.StateManager.getValue(fieldId)) {
          window.TEUI.StateManager.setValue(fieldId, defaultValue, "default");
        }
      });
      
      // Set Reference defaults only if not already set (different for testing isolation)
      const referenceDefaults = {
        "ref_d_19": "BC",
        "ref_h_19": "100 Mile House", // Updated to match ClimateValues.js data
        "ref_h_20": "Present", 
        "ref_h_21": "Capacitance",
        "ref_h_23": "18",
        "ref_h_24": "24",
        "ref_m_19": "120",
        "ref_l_22": "80",
        "ref_l_24": "24",
        "ref_i_21": "75"
      };

      Object.entries(referenceDefaults).forEach(([fieldId, defaultValue]) => {
        if (!window.TEUI.StateManager.getValue(fieldId)) {
          window.TEUI.StateManager.setValue(fieldId, defaultValue, "default");
        }
      });
    }
  };

  // Compatibility alias
  const DualState = ModeManager;

  //==========================================================================
  // CLIMATE DATA SERVICE - Direct ClimateValues.js Access
  //==========================================================================

  const ClimateDataService = {
    ensureAvailable: function (callback, maxRetries = 10) {
      let attempts = 0;

      const checkData = () => {
        attempts++;
        console.log(`S03: Checking climate data availability (attempt ${attempts}/${maxRetries})`);

        if (
          window.TEUI?.ClimateData &&
          Object.keys(window.TEUI.ClimateData).length > 0
        ) {
          console.log("S03: Climate data available", Object.keys(window.TEUI.ClimateData));
          callback(window.TEUI.ClimateData);
          return;
        }

        if (attempts >= maxRetries) {
          console.error("S03: Error - Climate data not available after max retries");
          return;
        }

        const delay = Math.min(100 * Math.pow(2, attempts), 2000);
        console.log(`S03: Will retry in ${delay}ms`);
        setTimeout(checkData, delay);
      };

      checkData();
    },

    getProvinces: function () {
      if (!window.TEUI?.ClimateData) return [];
      return Object.keys(window.TEUI.ClimateData).sort();
    },

    getCitiesForProvince: function (province) {
      if (!window.TEUI?.ClimateData || !window.TEUI.ClimateData[province])
        return [];
      return Object.keys(window.TEUI.ClimateData[province]).sort();
    },

    getCityData: function (province, city) {
      if (
        !window.TEUI?.ClimateData ||
        !window.TEUI.ClimateData[province] ||
        !window.TEUI.ClimateData[province][city]
      ) {
        return null;
      }
      return window.TEUI.ClimateData[province][city];
    },

    getProvinceFullName: function (abbr) {
      const provinceNames = {
        AB: "Alberta",
        BC: "British Columbia",
        MB: "Manitoba",
        NB: "New Brunswick",
        NL: "Newfoundland and Labrador",
        NS: "Nova Scotia",
        NT: "Northwest Territories",
        NU: "Nunavut",
        ON: "Ontario",
        PE: "Prince Edward Island",
        QC: "Québec",
        SK: "Saskatchewan",
        YT: "Yukon",
      };
      return provinceNames[abbr] || abbr;
    },
  };

  //==========================================================================
  // CORRECTED HELPER FUNCTIONS - STATEMANAGER INTEGRATION
  //==========================================================================

  /**
   * CORRECTED: Get value from StateManager with proper prefix
   */
  function getNumericValue(fieldId) {
    const prefix = ModeManager.currentMode === "target" ? "target_" : "ref_";
    const rawValue = window.TEUI.StateManager.getValue(`${prefix}${fieldId}`);
    return window.TEUI.parseNumeric(rawValue) || 0;
  }

  /**
   * CORRECTED: Get field value from StateManager with proper prefix
   */
  function getFieldValue(fieldId) {
    const prefix = ModeManager.currentMode === "target" ? "target_" : "ref_";
    const value = window.TEUI.StateManager.getValue(`${prefix}${fieldId}`);
    if (value !== null && value !== undefined) {
      return value.toString();
    }
    
    // Fallback to DOM only if StateManager doesn't have the value
    const element = document.querySelector(
      `[data-field-id="${fieldId}"],[data-dropdown-id="dd_${fieldId}"]`,
    );
    if (element) {
      return element.value !== undefined ? element.value : element.textContent;
    }
    
    return null;
  }

  /**
   * CORRECTED: Set calculated value through StateManager AND update DOM
   */
  function setCalculatedValue(fieldId, value, formatType = "number-2dp") {
    const prefix = ModeManager.currentMode === "target" ? "target_" : "ref_";
    
    // Store raw value in StateManager with prefix (for DualState isolation)
    window.TEUI.StateManager.setValue(`${prefix}${fieldId}`, value.toString(), "calculated");
    
    // ✅ CRITICAL: ALSO update global unprefixed version for cross-section integration
    // Climate data must be available globally for other sections to listen
    if (fieldId === "d_20" || fieldId === "d_21" || fieldId === "d_22" || fieldId === "h_22" || fieldId === "j_19") {
      window.TEUI.StateManager.setValue(fieldId, value.toString(), "calculated");
      console.log(`S03: ✅ DUAL CALCULATED UPDATE - ${fieldId}: ${prefix}${fieldId}=${value} AND global ${fieldId}=${value}`);
    }
    
    // ALSO update DOM directly (until StateManager listeners are fully implemented)
    const element = document.querySelector(`[data-field-id="${fieldId}"]`);
    if (element) {
      let displayValue = value.toString();
      
      // Apply formatting if it's a number
      const numericValue = window.TEUI.parseNumeric(value, NaN);
      if (!isNaN(numericValue)) {
        displayValue = window.TEUI.formatNumber(numericValue, formatType);
      }
      
      // Update the DOM element
      if (element.tagName === 'SPAN' || element.hasAttribute('contenteditable')) {
        element.textContent = displayValue;
      } else if (element.tagName === 'INPUT') {
        element.value = displayValue;
      } else if (element.tagName === 'TD') {
        // Handle table cells (most common case for calculated values)
        element.textContent = displayValue;
      }
      
      console.log(`S03: Updated calculated DOM for ${fieldId} = ${displayValue}`);
    }
  }



  //==========================================================================
  // PART 1: CONSOLIDATED FIELD DEFINITIONS AND LAYOUT
  //==========================================================================

  // Define rows with integrated field definitions for a fully consolidated approach
  const sectionRows = {
    // Unit Subheader Row - MUST BE FIRST for proper rendering order
    header: {
      id: "03-ID",
      rowId: "03-ID",
      label: "Climate Units",
      cells: {
        c: { content: "C", classes: ["section-subheader"] },
        d: { content: "ºC", classes: ["section-subheader"] },
        e: { content: "ºF", classes: ["section-subheader"] },
        f: { content: "F", classes: ["section-subheader"] },
        g: { content: "G", classes: ["section-subheader"] },
        h: { content: "ºC", classes: ["section-subheader"] },
        i: { content: "ºF", classes: ["section-subheader"] },
        j: { content: "J", classes: ["section-subheader"] },
        k: { content: "K", classes: ["section-subheader"] },
        l: { content: "L", classes: ["section-subheader"] },
        m: { content: "M", classes: ["section-subheader"] },
        n: { content: "N", classes: ["section-subheader"] },
      },
    },

    // Row 19: Province, City, Climate Zone
    19: {
      id: "L.1.1",
      rowId: "L.1.1",
      label: "Province",
      cells: {
        c: { content: "Province", type: "label" },
        d: {
          fieldId: "d_19",
          type: "dropdown",
          dropdownId: "dd_d_19",
          value: "ON",
          section: "climateCalculations",
          options: [{ value: "", name: "Select Province" }],
          getOptions: function () {
            const provinces = ClimateDataService.getProvinces();
            return provinces.map((province) => ({
              value: province,
              name: ClimateDataService.getProvinceFullName(province),
            }));
          },
        },
        f: { content: "L.1.2", classes: ["label-prefix"] },
        g: { content: "City", classes: ["label-main"] },
        h: {
          fieldId: "h_19",
          type: "dropdown",
          dropdownId: "dd_h_19",
          value: "Alexandria",
          section: "climateCalculations",
          dependencies: ["d_19"],
          options: [{ value: "", name: "Select City" }],
          getOptions: function (provinceValue) {
            if (!provinceValue) {
              provinceValue =
                DualState.getValue("d_19") ||
                document.querySelector('[data-dropdown-id="dd_d_19"]')?.value;
            }

            const cities = ClimateDataService.getCitiesForProvince(provinceValue);
            return cities.map((city) => ({
              value: city,
              name: city,
            }));
          },
        },
        i: { content: "Climate Zone" },
        j: {
          fieldId: "j_19",
          type: "derived",
          value: "6.0",
          section: "climateCalculations",
          dependencies: ["d_20"],
        },
        k: { content: "L.3.3", classes: ["label-prefix"] },
        l: { content: "Days Cooling", classes: ["label-main"] },
        m: {
          fieldId: "m_19",
          type: "editable",
          value: "120",
          section: "climateCalculations",
          classes: ["user-input", "editable"],
        },
      },
    },

    // Row 20: Heating Degree Days
    20: {
      id: "L.2.1",
      rowId: "L.2.1",
      label: "Heating Degree Days (HDD)",
      cells: {
        c: { content: "Heating Degree Days (HDD)", type: "label" },
        d: {
          fieldId: "d_20",
          type: "derived",
          value: "4600",
          section: "climateCalculations",
          dependencies: ["d_19", "h_19"],
        },
        f: { content: "L.2.2", classes: ["label-prefix"] },
        g: { content: "Current or Future Values", classes: ["label-main"] },
        h: {
          fieldId: "h_20",
          type: "dropdown",
          dropdownId: "dd_h_20",
          value: "Present",
          section: "climateCalculations",
          options: [
            { value: "Present", name: "Present (1991-2020)" },
            { value: "Future", name: "Future (2021-2050)" },
          ],
        },
        j: {
          fieldId: "j_20",
          type: "calculated",
          value: "HDD Reference Lookup",
          classes: ["reference-value"],
          section: "climateCalculations",
        },
        k: { content: "HDD - Energy Star", classes: ["reference-label"] },
      },
    },

    // Row 21: Cooling Degree Days
    21: {
      id: "L.2.3",
      rowId: "L.2.3",
      label: "Cooling Degree Days (CDD)",
      cells: {
        c: { content: "Cooling Degree Days (CDD)", type: "label" },
        d: {
          fieldId: "d_21",
          type: "derived",
          value: "196",
          section: "climateCalculations",
          dependencies: ["d_19", "h_19"],
        },
        f: { content: "G.4.2", classes: ["label-prefix"] },
        g: { content: "Capacitance", classes: ["label-main"] },
        h: {
          fieldId: "h_21",
          type: "dropdown",
          dropdownId: "dd_h_21",
          value: "Capacitance",
          section: "climateCalculations",
          options: [
            { value: "Static", name: "Static" },
            { value: "Capacitance", name: "Capacitance" },
          ],
        },
        i: {
          fieldId: "i_21",
          type: "percentage",
          value: "50",
          min: 0,
          max: 100,
          step: 5,
          section: "climateCalculations",
          defaultValue: "50",
        },
        j: {
          fieldId: "j_21",
          type: "calculated",
          value: "CDD Reference Lookup",
          classes: ["reference-value"],
          section: "climateCalculations",
        },
        k: { content: "CDD - Energy Star", classes: ["reference-label"] },
      },
    },

    // Row 22: Ground Facing HDD, Ground Facing CDD, Elevation
    22: {
      id: "L.2.4",
      rowId: "L.2.4",
      label: "Ground Facing GF HDD",
      cells: {
        c: { content: "Ground Facing GF HDD", type: "label" },
        d: {
          fieldId: "d_22",
          type: "derived",
          value: "1960",
          section: "climateCalculations",
          dependencies: ["d_20"],
        },
        e: { content: "ºC•days", classes: ["unit-label"] },
        f: { content: "L.2.5", classes: ["label-prefix"] },
        g: { content: "GF CDD", classes: ["label-main"] },
        h: {
          fieldId: "h_22",
          type: "calculated",
          value: "-1680",
          section: "climateCalculations",
          dependencies: ["d_21"],
        },
        i: { content: "ºC•days", classes: ["unit-label"] },
        j: { content: "L.1.3", classes: ["label-prefix"] },
        k: { content: "Elevation (ASL)", classes: ["label-main"] },
        l: {
          fieldId: "l_22",
          type: "editable",
          value: "80",
          section: "climateCalculations",
          classes: ["user-input", "editable"],
        },
        m: { content: "m", classes: ["unit-label"] },
      },
    },

    // Row 23: Coldest Days, Heating Setpoint
    23: {
      id: "L.3.1",
      rowId: "L.3.1",
      label: "Coldest Days (Location Specific)",
      cells: {
        c: { content: "Coldest Days (Location Specific)", type: "label" },
        d: {
          fieldId: "d_23",
          type: "derived",
          value: "-24",
          section: "climateCalculations",
          dependencies: ["d_19", "h_19", "d_12"],
        },
        e: {
          fieldId: "e_23",
          type: "calculated",
          value: "-11",
          section: "climateCalculations",
          dependencies: ["d_23"],
        },
        f: { content: "B.1.2", classes: ["label-prefix"] },
        g: { content: "Tset Heating", classes: ["label-main"] },
        h: {
          fieldId: "h_23",
          type: "calculated",
          section: "climateCalculations",
          dependencies: ["d_12"],
        },
        i: {
          fieldId: "i_23",
          type: "calculated",
          value: "66",
          section: "climateCalculations",
          dependencies: ["h_23"],
        },
        m: {
          fieldId: "m_23",
          type: "calculated",
          value: "122%",
          section: "climateCalculations",
        },
      },
    },

    // Row 24: Hottest Days, Cooling Setpoint & Override
    24: {
      id: "L.3.2",
      rowId: "L.3.2",
      label: "Hottest Days (Location Specific)",
      cells: {
        c: { content: "Hottest Days (Location Specific)", type: "label" },
        d: {
          fieldId: "d_24",
          type: "derived",
          value: "34",
          section: "climateCalculations",
          dependencies: ["d_19", "h_19"],
        },
        e: {
          fieldId: "e_24",
          type: "calculated",
          value: "98",
          section: "climateCalculations",
          dependencies: ["d_24"],
        },
        f: { content: "B.1.3", classes: ["label-prefix"] },
        g: { content: "Tset Cooling", classes: ["label-main"] },
        h: {
          fieldId: "h_24",
          type: "calculated",
          section: "climateCalculations",
          dependencies: ["d_12"],
        },
        i: {
          fieldId: "i_24",
          type: "calculated",
          value: "78",
          section: "climateCalculations",
          dependencies: ["h_24", "l_24"],
        },
        j: { content: "B.1.4", classes: ["label-prefix"] },
        k: { content: "Cooling Override", classes: ["label-main"] },
        l: {
          fieldId: "l_24",
          type: "editable",
          value: "24",
          section: "climateCalculations",
          classes: ["user-input", "editable"],
        },
        m: {
          fieldId: "m_24",
          type: "calculated",
          value: "108%",
          section: "climateCalculations",
          dependencies: ["h_24", "l_24"],
        },
      },
    },
  };

  //==========================================================================
  // PART 2: ACCESSOR METHODS TO EXTRACT FIELDS AND LAYOUT
  //==========================================================================

  /**
   * Extract field definitions from the integrated layout
   * This separates the fields from the layout for compatibility with existing code
   */
  function getFields() {
    const fields = {};

    // Extract field definitions from layout rows
    Object.values(sectionRows).forEach((row) => {
      if (!row.cells) return;

      Object.values(row.cells).forEach((cell) => {
        if (cell.fieldId && cell.type) {
          // Create a field definition with relevant properties
          fields[cell.fieldId] = {
            type: cell.type,
            label: cell.content || row.label,
            defaultValue: cell.value || "",
            section: cell.section || "climateCalculations",
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
          if (cell.classes) fields[cell.fieldId].classes = cell.classes;
        }
      });
    });

    return fields;
  }

  /**
   * Extract dropdown options from the integrated layout
   */
  function getDropdownOptions() {
    const options = {};

    // Extract dropdown options from cells with dropdownId
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
   * FIXED: Now properly places the header row first
   */
  function getLayout() {
    // Create array with rows in the correct order
    const layoutRows = [];

    // STEP 1: First add the header row if it exists
    if (sectionRows["header"]) {
      layoutRows.push(createLayoutRow(sectionRows["header"]));
    }

    // STEP 2: Add all remaining rows in the proper order (excluding the header)
    Object.entries(sectionRows).forEach(([key, row]) => {
      if (key !== "header") {
        layoutRows.push(createLayoutRow(row));
      }
    });

    return { rows: layoutRows };
  }

  /**
   * Helper function to convert a row definition to the layout format expected by the renderer
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

        // Special handling for column C to ensure row labels work
        if (col === "c" && cell.type === "label" && cell.content) {
          // When we have a cell in column C with type "label", ensure it has a label property
          // which the renderer needs to display properly
          cell.label = cell.content;
        }

        // Remove field-specific properties that aren't needed for rendering
        delete cell.getOptions;
        delete cell.section;
        delete cell.dependencies;

        rowDef.cells.push(cell);
      } else {
        // Add empty cell if not defined
        // Special handling for column C - use row's label if column C is missing
        if (col === "c" && !row.cells?.c && row.label) {
          // If column C is missing but we have a row label, use that
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

  // All event handling and calculation functions remain unchanged

  /**
   * Helper: Get element by multiple possible selectors
   */
  function getElement(selectors) {
    for (const selector of selectors) {
      const el = document.querySelector(selector);
      if (el) return el;
    }
    return null;
  }

  /**
   * CORRECTED: Set field value through StateManager AND update DOM
   */
  function setFieldValue(fieldId, value, state = "calculated") {
    const rawValue = value !== null && value !== undefined ? value.toString() : null;
    const prefix = ModeManager.currentMode === "target" ? "target_" : "ref_";
    
    // Store in StateManager with prefix (for DualState isolation)
    window.TEUI.StateManager.setValue(`${prefix}${fieldId}`, rawValue, state);
    
    // ✅ CRITICAL: ALSO update global unprefixed version for cross-section integration
    // Climate data (d_20, d_21) must be available globally for other sections to listen
    if (fieldId === "d_20" || fieldId === "d_21" || fieldId === "d_22" || fieldId === "h_22" || fieldId === "j_19") {
      window.TEUI.StateManager.setValue(fieldId, rawValue, state);
      console.log(`S03: ✅ DUAL UPDATE - ${fieldId}: ${prefix}${fieldId}=${rawValue} AND global ${fieldId}=${rawValue}`);
    }
    
    // ALSO update DOM directly (until StateManager listeners are fully implemented)
    const element = document.querySelector(`[data-field-id="${fieldId}"]`);
    if (element) {
      // Format the value appropriately
      let displayValue = rawValue;
      
      // Apply number formatting for numeric fields
      const numericValue = window.TEUI.parseNumeric(rawValue, NaN);
      if (!isNaN(numericValue)) {
        if (fieldId.includes('_2')) { // Temperature fields
          displayValue = Math.round(numericValue).toString();
        } else if (fieldId === 'l_22') { // Elevation
          displayValue = Math.round(numericValue).toString();
        } else if (fieldId === 'j_19') { // Climate zone
          displayValue = numericValue.toString();
        } else {
          displayValue = Math.round(numericValue).toString();
        }
      }
      
          // Update the DOM element
    if (element.tagName === 'SPAN' || element.hasAttribute('contenteditable')) {
      element.textContent = displayValue;
    } else if (element.tagName === 'INPUT') {
      element.value = displayValue;
    } else if (element.tagName === 'TD') {
      // Handle table cells (most common case for calculated values)
      element.textContent = displayValue;
    }
    
    console.log(`S03: Updated DOM for ${fieldId} = ${displayValue}`);
    }
  }

  /**
   * Handle province selection change - CORRECTED to use StateManager
   */
  function handleProvinceChange(e) {
    const provinceValue = e?.target?.value;
    if (!provinceValue) return;

    console.log('Section03: Province selected:', provinceValue);

    // Set province value in StateManager with proper prefix
    const prefix = ModeManager.currentMode === "target" ? "target_" : "ref_";
    window.TEUI.StateManager.setValue(`${prefix}d_19`, provinceValue, "user-modified");

    // Update city dropdown for this province
    updateCityDropdown(provinceValue);
  }

  /**
   * Update city dropdown based on selected province - Using ClimateDataService
   */
  function updateCityDropdown(provinceValue) {
    const cityDropdown = getElement(['[data-dropdown-id="dd_h_19"]']);
    if (!cityDropdown) return;

    // Clear existing options
    cityDropdown.innerHTML = '<option value="">Select City</option>';

    if (!provinceValue) {
      cityDropdown.disabled = true;
      return;
    }

    // Get cities from ClimateDataService
    const cities = ClimateDataService.getCitiesForProvince(provinceValue);
    
    if (cities.length === 0) {
      console.log("No cities found for province:", provinceValue);
      cityDropdown.disabled = true;
      return;
    }

    // Add city options
    cities.forEach((city) => {
      const option = document.createElement("option");
      option.value = city;
      option.textContent = city;
      cityDropdown.appendChild(option);
    });

    cityDropdown.disabled = false;

    // Auto-select city from StateManager if it exists in this province
    const prefix = ModeManager.currentMode === "target" ? "target_" : "ref_";
    const currentCity = window.TEUI.StateManager.getValue(`${prefix}h_19`);
    if (currentCity && cities.includes(currentCity)) {
      cityDropdown.value = currentCity;
      window.TEUI.StateManager.setValue(`${prefix}h_19`, currentCity, "default");
    } else if (provinceValue === "ON" && cities.includes("Alexandria")) {
      // Default to Alexandria for Ontario
      cityDropdown.value = "Alexandria";
      window.TEUI.StateManager.setValue(`${prefix}h_19`, "Alexandria", "default");
    } else if (cities.length > 0) {
      // Default to first city
      cityDropdown.value = cities[0];
      window.TEUI.StateManager.setValue(`${prefix}h_19`, cities[0], "default");
    }

    console.log("City dropdown updated for", provinceValue, "- selected:", cityDropdown.value);
  }

  /**
   * Update weather data based on selected city/province - CORRECTED to use StateManager
   */
  function updateWeatherData() {
    // Get values from StateManager with proper prefix
    const prefix = ModeManager.currentMode === "target" ? "target_" : "ref_";
    const provinceValue = window.TEUI.StateManager.getValue(`${prefix}d_19`) ||
      getElement(['[data-dropdown-id="dd_d_19"]'])?.value;
    const cityValue = window.TEUI.StateManager.getValue(`${prefix}h_19`) ||
      getElement(['[data-dropdown-id="dd_h_19"]'])?.value;
    const timeframe = window.TEUI.StateManager.getValue(`${prefix}h_20`) ||
      getElement(['[data-dropdown-id="dd_h_20"]'])?.value || "Present";

    if (!provinceValue || !cityValue) {
      console.log("S03: Cannot update weather data - missing province or city");
      return;
    }

    // Get city data using ClimateDataService
    const cityData = ClimateDataService.getCityData(provinceValue, cityValue);

    if (!cityData) {
      console.warn(`S03: No climate data found for ${cityValue}, ${provinceValue}`);
      return;
    }

    // ✅ COMPREHENSIVE: Complete climate data mapping from ClimateValues.js
    console.log(`S03: ⭐ COMPREHENSIVE mapping of ALL available climate data for ${cityValue}, ${provinceValue} (${timeframe}):`, cityData);

    // === DEGREE DAYS MAPPING ===
    // Update HDD18 (Heating Degree Days below 18°C) - timeframe dependent
    const hddValue = timeframe === "Future" ? cityData.HDD18_2021_2050 : cityData.HDD18;
    if (hddValue !== null && hddValue !== undefined && hddValue !== 666) {
      setFieldValue("d_20", hddValue, "derived");
      console.log(`S03: ✓ Set HDD18 (d_20) = ${hddValue} for ${timeframe} timeframe`);
    } else {
      setFieldValue("d_20", "N/A", "derived");
      console.warn(`S03: ⚠️ HDD18 not available for ${timeframe} timeframe`);
    }

    // Update CDD24 (Cooling Degree Days above 24°C) - timeframe dependent
    const cddValue = timeframe === "Future" ? cityData.CDD24_2021_2050 : cityData.CDD24;
    if (cddValue !== null && cddValue !== undefined && cddValue !== 666) {
      setFieldValue("d_21", cddValue, "derived");
      console.log(`S03: ✓ Set CDD24 (d_21) = ${cddValue} for ${timeframe} timeframe`);
    } else {
      // For CDD, if Future not available, try Present as fallback
      if (timeframe === "Future" && cityData.CDD24 !== null && cityData.CDD24 !== undefined && cityData.CDD24 !== 666) {
        console.warn(`S03: ⚠️ Future CDD24 not available for ${cityValue}, ${provinceValue}. Using present value as fallback.`);
        setFieldValue("d_21", cityData.CDD24, "derived");
      } else {
        setFieldValue("d_21", 0, "derived"); // Default to 0 for CDD if no data
        console.warn(`S03: ⚠️ No CDD24 data available for ${cityValue}, ${provinceValue} - using default 0`);
      }
    }

    // Log alternative HDD15 data for reference
    if (cityData.HDD15 !== null && cityData.HDD15 !== undefined && cityData.HDD15 !== 666) {
      console.log(`S03: 📊 HDD15 available: ${cityData.HDD15} (below 15°C - informational only)`);
    }

    // === DESIGN TEMPERATURES MAPPING ===
    // Update January 2.5% design temperature (coldest day)
    const coldestTemp = cityData.January_2_5;
    if (coldestTemp !== null && coldestTemp !== undefined && coldestTemp !== 666) {
      setFieldValue("d_23", coldestTemp, "derived");
      console.log(`S03: ✓ Set January 2.5% design temp (d_23) = ${coldestTemp}°C`);
    } else {
      setFieldValue("d_23", -24, "derived"); // Default fallback
      console.warn(`S03: ⚠️ January_2_5 not available, using default -24°C`);
    }

    // Log January 1% extreme temperature for reference
    if (cityData.January_1 !== null && cityData.January_1 !== undefined && cityData.January_1 !== 666) {
      console.log(`S03: 📊 January 1% extreme temp available: ${cityData.January_1}°C (more extreme cold)`);
    }

    // Update July 2.5% dry bulb temperature (hottest day) - timeframe dependent
    const hottestTemp = timeframe === "Future" ? cityData.Future_July_2_5_Tdb : cityData.July_2_5_Tdb;
    if (hottestTemp !== null && hottestTemp !== undefined && hottestTemp !== 666) {
      setFieldValue("d_24", hottestTemp, "derived");
      console.log(`S03: ✓ Set July 2.5% dry bulb temp (d_24) = ${hottestTemp}°C for ${timeframe} timeframe`);
    } else {
      // Fallback to present if future not available
      if (timeframe === "Future" && cityData.July_2_5_Tdb !== null && cityData.July_2_5_Tdb !== undefined) {
        setFieldValue("d_24", cityData.July_2_5_Tdb, "derived");
        console.warn(`S03: ⚠️ Future July temp not available, using present value`);
      } else {
        setFieldValue("d_24", 30, "derived"); // Default fallback
        console.warn(`S03: ⚠️ July design temp not available, using default 30°C`);
      }
    }

    // Log July wet bulb temperatures for reference
    const hottestWetBulb = timeframe === "Future" ? cityData.Future_July_2_5_Twb : cityData.July_2_5_Twb;
    if (hottestWetBulb !== null && hottestWetBulb !== undefined && hottestWetBulb !== 666) {
      console.log(`S03: 📊 July 2.5% wet bulb temp available: ${hottestWetBulb}°C for ${timeframe} timeframe`);
    }

    // === SITE CONDITIONS MAPPING ===
    // Update elevation from ClimateValues.js structure
    const elevation = cityData["Elev ASL (m)"] || cityData.Elevation_ASL;
    if (elevation !== null && elevation !== undefined && elevation !== 666) {
      setFieldValue("l_22", elevation, "derived");
      console.log(`S03: ✓ Set Elevation (l_22) = ${elevation}m ASL`);
    } else {
      setFieldValue("l_22", 80, "derived"); // Default fallback
      console.warn(`S03: ⚠️ Elevation not available, using default 80m ASL`);
    }

    // === ADDITIONAL CLIMATE DATA FOR REFERENCE ===
    // Log future extreme weather data
    if (cityData.Over_30Tdb_2021_2050 !== null && cityData.Over_30Tdb_2021_2050 !== undefined && cityData.Over_30Tdb_2021_2050 !== 666) {
      console.log(`S03: 📊 Future days over 30°C (2021-2050): ${cityData.Over_30Tdb_2021_2050} days/year`);
    }

    if (cityData.Extreme_Hot_Tdb_1991_2020 !== null && cityData.Extreme_Hot_Tdb_1991_2020 !== undefined && cityData.Extreme_Hot_Tdb_1991_2020 !== 666) {
      console.log(`S03: 📊 Historical extreme max temp (1991-2020): ${cityData.Extreme_Hot_Tdb_1991_2020}°C`);
    }

    // Log precipitation data
    if (cityData.Rain_Annual_mm !== null && cityData.Rain_Annual_mm !== undefined && cityData.Rain_Annual_mm !== 666) {
      console.log(`S03: 📊 Annual rainfall: ${cityData.Rain_Annual_mm}mm`);
    }

    if (cityData.Rain_1_day_1_50mm !== null && cityData.Rain_1_day_1_50mm !== undefined && cityData.Rain_1_day_1_50mm !== 666) {
      console.log(`S03: 📊 1-day 1/50 year rain event: ${cityData.Rain_1_day_1_50mm}mm`);
    }

    if (cityData.Rain_15_min_mm !== null && cityData.Rain_15_min_mm !== undefined && cityData.Rain_15_min_mm !== 666) {
      console.log(`S03: 📊 15-minute rain intensity: ${cityData.Rain_15_min_mm}mm`);
    }

    // Log wind pressure data
    if (cityData.Wind_Hourly_kPa_1_10 !== null && cityData.Wind_Hourly_kPa_1_10 !== undefined && cityData.Wind_Hourly_kPa_1_10 !== 666) {
      console.log(`S03: 📊 Hourly wind pressure (1/10 year): ${cityData.Wind_Hourly_kPa_1_10} kPa`);
    }

    if (cityData.Wind_Hourly_kPa_1_50 !== null && cityData.Wind_Hourly_kPa_1_50 !== undefined && cityData.Wind_Hourly_kPa_1_50 !== 666) {
      console.log(`S03: 📊 Hourly wind pressure (1/50 year): ${cityData.Wind_Hourly_kPa_1_50} kPa`);
    }

    // Log snow load data
    if (cityData.Snow_kPa_1_50_Ss !== null && cityData.Snow_kPa_1_50_Ss !== undefined && cityData.Snow_kPa_1_50_Ss !== 666) {
      console.log(`S03: 📊 Snow load ground (1/50 year): ${cityData.Snow_kPa_1_50_Ss} kPa`);
    }

    if (cityData.Snow_kPa_1_50_Sr !== null && cityData.Snow_kPa_1_50_Sr !== undefined && cityData.Snow_kPa_1_50_Sr !== 666) {
      console.log(`S03: 📊 Snow load roof (1/50 year): ${cityData.Snow_kPa_1_50_Sr} kPa`);
    }

    // Log winter/summer averages if available
    if (cityData.Winter_Tdb_Avg !== null && cityData.Winter_Tdb_Avg !== undefined && cityData.Winter_Tdb_Avg !== 666) {
      console.log(`S03: 📊 Winter average temp: ${cityData.Winter_Tdb_Avg}°C`);
    }

    if (cityData.Summer_Tdb_Avg !== null && cityData.Summer_Tdb_Avg !== undefined && cityData.Summer_Tdb_Avg !== 666) {
      console.log(`S03: 📊 Summer average temp: ${cityData.Summer_Tdb_Avg}°C`);
    }

    if (cityData.Summer_RH_1500_LST !== null && cityData.Summer_RH_1500_LST !== undefined && cityData.Summer_RH_1500_LST !== 666) {
      console.log(`S03: 📊 Summer relative humidity (15:00 LST): ${cityData.Summer_RH_1500_LST}%`);
    }

    // Update climate zone based on HDD
    const climateZone = determineClimateZone(hddValue);
    setFieldValue("j_19", climateZone, "calculated");

    // Run all calculations after weather data update
    calculateAll();

    console.log(`S03: ✅ COMPREHENSIVE climate data mapping complete for ${cityValue}, ${provinceValue} (${timeframe})`);
    console.log(`S03: 🌡️ Applied: HDD=${hddValue}, CDD=${cddValue || 0}, Cold=${coldestTemp}°C, Hot=${hottestTemp}°C, Elevation=${elevation}m`);
  }

  /**
   * Determine climate zone based on HDD
   */
  function determineClimateZone(hdd) {
    // Excel Formula: =IF(D20<3000, 4, IF(D20<4000, 5, IF(D20<5000, 6, IF(D20<6000, 7.1, IF(D20<7000, 7.2, 8))))) )
    if (hdd === null || hdd === undefined || hdd === "") return "6.0"; // Default if HDD is missing

    const numericHdd = parseFloat(hdd);
    if (isNaN(numericHdd)) return "6.0"; // Default if HDD is not a number

    if (numericHdd < 3000) return "4.0";
    if (numericHdd < 4000) return "5.0";
    if (numericHdd < 5000) return "6.0";
    if (numericHdd < 6000) return "7.1"; // Corrected from 7.0
    if (numericHdd < 7000) return "7.2"; // Added missing check
    return "8.0"; // Correct: returns 8.0 only if HDD >= 7000
  }

  /**
   * Display weather data in modal - CORRECTED to use StateManager
   */
  function showWeatherData() {
    const prefix = ModeManager.currentMode === "target" ? "target_" : "ref_";
    const provinceValue = window.TEUI.StateManager.getValue(`${prefix}d_19`) ||
      getElement(['[data-dropdown-id="dd_d_19"]'])?.value;
    const cityValue = window.TEUI.StateManager.getValue(`${prefix}h_19`) ||
      getElement(['[data-dropdown-id="dd_h_19"]'])?.value;

    if (!provinceValue || !cityValue) {
      alert("Please select a province and city first.");
      return;
    }

    // Get city data using ClimateDataService
    const cityData = ClimateDataService.getCityData(provinceValue, cityValue);

    if (!cityData) {
      alert(`City data not found for ${cityValue}, ${provinceValue}`);
      return;
    }

    // Set modal title and content
    const modalTitle = document.getElementById("weatherDataModalLabel");
    const modalContent = document.getElementById("weatherDataContent");

    if (modalTitle) {
      modalTitle.textContent = `Weather Data for ${cityValue}, ${ClimateDataService.getProvinceFullName(provinceValue)}`;
    }
    
    if (modalContent) {
      // Format the climate data nicely
      let formattedData = "";
      Object.entries(cityData).forEach(([key, value]) => {
        formattedData += `<div style="display: flex; padding: 8px 0; border-bottom: 1px solid #eee;">
          <div style="flex: 1; font-weight: 500;">${key}</div>
          <div style="flex: 1; text-align: right;">${value}</div>
        </div>`;
      });
      modalContent.innerHTML = formattedData;
    }

    // Show modal
    const modal = document.getElementById("weatherDataModal");
    if (modal) new bootstrap.Modal(modal).show();
  }

  /**
   * Calculate Celsius to Fahrenheit conversions (Heating only now)
   */
  function calculateTemperatures() {
    // Coldest days conversion (d_23 -> e_23)
    const coldestC_str = window.TEUI.StateManager?.getValue("d_23");
    const coldestC = parseFloat(coldestC_str);
    if (!isNaN(coldestC)) {
      const coldestF = Math.round((coldestC * 9) / 5 + 32);
      setFieldValue("e_23", coldestF);
    }

    // Heating setpoint conversion (h_23 -> i_23)
    const heatingC_str = window.TEUI.StateManager?.getValue("h_23");
    const heatingC = parseFloat(heatingC_str);
    if (!isNaN(heatingC)) {
      const heatingF = Math.round((heatingC * 9) / 5 + 32);
      setFieldValue("i_23", heatingF);
    }

    // Hottest days conversion (d_24 -> e_24)
    const hottestC_str = window.TEUI.StateManager?.getValue("d_24");
    const hottestC = parseFloat(hottestC_str);
    if (!isNaN(hottestC)) {
      const hottestF = Math.round((hottestC * 9) / 5 + 32);
      setFieldValue("e_24", hottestF);
    }

    // Cooling setpoint conversion is now handled by updateCoolingDependents
  }

  /**
   * Calculate ground facing HDD and CDD
   * RESTORED from ARCHIVE/GOLD-STANDARDS/OBJECTIVE-4011GS-2025.06.21-SOLSTICE-BASELINE
   */
  function calculateGroundFacing() {
    // --- Ground facing HDD ---
    const heatingSetpoint = getNumericValue("h_23");
    const coolingDaysGFH = getNumericValue("m_19"); // Use a separate variable name to avoid confusion
    const heatingDays = 365 - coolingDaysGFH;

    // Formula: (TsetHeating - 10°C_ground) * HeatingDays
    const gfhdd = Math.round((heatingSetpoint - 10) * heatingDays);
    setFieldValue("d_22", gfhdd);

    // --- Ground facing CDD (h_22) --- ARCHIVE LOGIC RESTORED ---
    const capacitanceSetting = getFieldValue("h_21") || "Static"; // Default to Static if undefined
    const coolingSetpoint_h24 = getNumericValue("h_24"); // TsetCool
    const coolingDays_m19 = getNumericValue("m_19"); // DaysCooling
    let gfcdd;

    if (capacitanceSetting === "Static") {
      // Formula: MAX(0, (10 - TsetCool) * DaysCooling)
      gfcdd = Math.max(0, (10 - coolingSetpoint_h24) * coolingDays_m19);
    } else {
      // Assumes 'Capacitance' or any other value
      // Formula: (10 - TsetCool) * DaysCooling
      gfcdd = (10 - coolingSetpoint_h24) * coolingDays_m19;
    }

    // Update h_22 field with the newly calculated GF CDD value
    // Use Math.round as Excel likely rounds this
    setFieldValue("h_22", Math.round(gfcdd));
  }

  /**
   * Calculate all values
   */
  function calculateAll() {
    // Dependencies: d_19, h_19 -> d_23, d_24; h_20 -> future flag; d_12 -> critical flag

    // Calculate base setpoints (depend on d_12, which might be set by StateManager init or user)
    calculateHeatingSetpoint();
    calculateCoolingSetpoint_h24();

    // Calculate temperature conversions (depend on d_23, d_24, h_23)
    calculateTemperatures();

    // Calculate Ground Facing values (depend on d_20, d_21 from weather)
    calculateGroundFacing();

    // Calculate cooling dependents (depend on h_24, l_24)
    updateCoolingDependents();

    // Add calculation for m_23 here if needed

    // Update critical occupancy flag (depends on d_12)
    updateCriticalOccupancyFlag();
  }

  // --- New Calculation Functions ---

  /**
   * Calculate Heating Setpoint (h_23) based on Occupancy Type (d_12)
   */
  function calculateHeatingSetpoint() {
    const referenceStandard = window.TEUI.StateManager?.getValue("d_13") || ""; // Get from S02
    const occupancyType = window.TEUI.StateManager?.getValue("d_12") || ""; // Get from S02
    let heatingSetpoint;

    // Check if the reference standard indicates a Passive House related standard
    if (referenceStandard.toUpperCase().includes("PH")) {
      // Case-insensitive check for "PH"
      heatingSetpoint = 18;
    } else {
      // Original logic if not a PH standard: 22°C for Residential or Care occupancies, else 18°C
      // Ensuring the occupancyType strings match those defined in Section02 d_12 options
      if (
        occupancyType === "C-Residential" ||
        occupancyType === "B2-Care and Treatment" || // Exact match for B2
        occupancyType === "B3-Detention Care & Treatment" || // Exact match for B3
        occupancyType.includes("Care")
      ) {
        // Broader check for "Care" just in case of variations
        heatingSetpoint = 22;
      } else {
        heatingSetpoint = 18; // Default for other non-PH, non-Care/Residential occupancies
      }
    }

    setFieldValue("h_23", heatingSetpoint); // Update state and DOM via S03 local helper
    return heatingSetpoint; // Return value for potential chaining
  }

  /**
   * Calculate Base Cooling Setpoint (h_24) based on Occupancy Type (d_12)
   */
  function calculateCoolingSetpoint_h24() {
    const occupancyType = window.TEUI.StateManager?.getValue("d_12") || ""; // Direct StateManager access
    let coolingSetpoint = 24; // Default for all types currently

    // Add specific logic based on occupancy if needed in the future
    setFieldValue("h_24", coolingSetpoint); // Update state and DOM
    return coolingSetpoint; // Return value for potential chaining
  }

  /**
   * Determine the effective cooling setpoint considering the override
   */
  function determineEffectiveCoolingSetpoint() {
    const baseSetpoint_h24 =
      parseFloat(window.TEUI.StateManager?.getValue("h_24")) || 24; // Direct StateManager access
    const override_l24 =
      parseFloat(window.TEUI.StateManager?.getValue("l_24")) || 24; // Direct StateManager access

    // Use override only if it's a valid number and > 20
    if (!isNaN(override_l24) && override_l24 > 20) {
      return override_l24;
    } else {
      return baseSetpoint_h24;
    }
  }

  /**
   * Update fields dependent on the effective cooling setpoint (i_24, m_24)
   */
  function updateCoolingDependents() {
    const effectiveSetpointC = determineEffectiveCoolingSetpoint();

    // Update i_24 (Fahrenheit conversion)
    if (!isNaN(effectiveSetpointC)) {
      const effectiveSetpointF = Math.round((effectiveSetpointC * 9) / 5 + 32);
      setFieldValue("i_24", effectiveSetpointF);
    }

    // Update m_24 (Percentage calculation - Placeholder logic)
    // Add the actual calculation logic for m_24 here when known
    // Example placeholder:
    const someBaseValueForM24 = 100; // Replace with actual dependency value
    const m24Value = Math.round((effectiveSetpointC / 22) * 100); // Example calc
    setFieldValue("m_24", `${m24Value}%`);
  }

  /**
   * Update the critical occupancy flag display based on d_12
   */
  function updateCriticalOccupancyFlag() {
    const occupancyType = window.TEUI.StateManager?.getValue("d_12") || "";
    const sectionHeader = document.querySelector(
      "#climateCalculations .section-header",
    ); // Target the main header
    if (!sectionHeader) {
      console.warn("Section 3 header not found for critical flag.");
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
        if (sectionTitleText.includes("SECTION 3. Climate Calculations")) {
          // Find the text node or icon and insert after it
          const iconSpan = sectionHeader.querySelector('.section-icon');
          if (iconSpan && iconSpan.nextSibling) {
            // Insert after icon and title text
            iconSpan.parentNode.insertBefore(flagSpan, iconSpan.nextSibling.nextSibling || null);
        } else {
            // Fallback: insert at beginning
            sectionHeader.insertBefore(flagSpan, sectionHeader.firstChild.nextSibling);
          }
        }
      }
      flagSpan.textContent = "Critical Occupancy";
    } else {
      // If not critical, remove the span if it exists
      flagSpan?.remove();
    }

    // Store status on the header dataset for easier access by updateWeatherData
    sectionHeader.dataset.isCritical = isCritical;

    return isCritical; // Return the status for other functions
  }

  // --- End New Calculation Functions ---



  /**
   * Setup S03-specific weather data button
   */
  function setupS03WeatherButton() {
    const sectionHeader = document.querySelector("#climateCalculations .section-header");
    if (!sectionHeader) {
      console.warn("S03: Section header not found for weather button");
      return;
    }

    // Check if button already exists
    if (sectionHeader.querySelector("#s03WeatherDataBtn")) {
      return;
    }

    // Create Weather Data button container
    const buttonContainer = document.createElement("div");
    buttonContainer.style.cssText = "margin-left: auto;";

    // Create Weather Data button
    const weatherButton = document.createElement("button");
    weatherButton.textContent = "More Weather Data";
    weatherButton.id = "s03WeatherDataBtn";
    weatherButton.style.cssText = `
      padding: 6px 12px;
      background-color: #2196f3;
      color: white;
      border: none;
      border-radius: 4px;
      font-weight: 500;
      cursor: pointer;
      font-size: 12px;
    `;

    // Add weather data functionality
    weatherButton.addEventListener("click", function() {
      showWeatherData();
    });

    buttonContainer.appendChild(weatherButton);
    sectionHeader.appendChild(buttonContainer);

    console.log("S03: Weather data button setup complete");
  }

  /**
   * Initialize all event handlers
   */
  function initializeEventHandlers() {
    // Province dropdown change
    const provinceDropdown = getElement(['[data-dropdown-id="dd_d_19"]']);
    if (provinceDropdown) {
      // Remove any existing listeners
      const newProvinceDropdown = provinceDropdown.cloneNode(true);
      provinceDropdown.parentNode.replaceChild(
        newProvinceDropdown,
        provinceDropdown,
      );

      // Add new listener
      newProvinceDropdown.addEventListener("change", handleProvinceChange);
    }

    // City dropdown change
    const cityDropdown = getElement(['[data-dropdown-id="dd_h_19"]']);
    if (cityDropdown) {
      // Remove any existing listeners
      const newCityDropdown = cityDropdown.cloneNode(true);
      cityDropdown.parentNode.replaceChild(newCityDropdown, cityDropdown);

      // Add new listener
      newCityDropdown.addEventListener("change", function () {
        const selectedCity = this.value;
        console.log('Section03: City selected:', selectedCity);
        const prefix = ModeManager.currentMode === "target" ? "target_" : "ref_";
        window.TEUI.StateManager.setValue(`${prefix}h_19`, selectedCity, "user-modified");
        updateWeatherData();
      });
    }

    // Present/Future timeframe dropdown
    const timeframeDropdown = getElement(['[data-dropdown-id="dd_h_20"]']);
    if (timeframeDropdown) {
      // Remove any existing listeners
      const newTimeframeDropdown = timeframeDropdown.cloneNode(true);
      timeframeDropdown.parentNode.replaceChild(newTimeframeDropdown, timeframeDropdown);

      // Add new listener
      newTimeframeDropdown.addEventListener("change", function() {
        const selectedTimeframe = this.value;
        console.log('S03: Timeframe selected:', selectedTimeframe);
        const prefix = ModeManager.currentMode === "target" ? "target_" : "ref_";
        window.TEUI.StateManager.setValue(`${prefix}h_20`, selectedTimeframe, "user-modified");
        updateWeatherData(); // This will update HDD/CDD values based on Present/Future
      });
    }

    // ✅ CRITICAL: Capacitance dropdown (h_21) - AFFECTS GFCDD CALCULATION
    const capacitanceDropdown = getElement(['[data-dropdown-id="dd_h_21"]']);
    if (capacitanceDropdown) {
      // Remove any existing listeners
      const newCapacitanceDropdown = capacitanceDropdown.cloneNode(true);
      capacitanceDropdown.parentNode.replaceChild(newCapacitanceDropdown, capacitanceDropdown);

      // Add new listener
      newCapacitanceDropdown.addEventListener("change", function() {
        const selectedCapacitance = this.value;
        console.log('S03: Capacitance setting changed:', selectedCapacitance);
        const prefix = ModeManager.currentMode === "target" ? "target_" : "ref_";
        window.TEUI.StateManager.setValue(`${prefix}h_21`, selectedCapacitance, "user-modified");
        calculateAll(); // CRITICAL: Recalculate GFCDD when capacitance changes
      });
    }

    // Weather data buttons
    ["showWeatherDataBtn", "weatherDataBtn"].forEach((id) => {
      const btn = document.getElementById(id);
      if (btn) {
        btn.removeEventListener("click", showWeatherData);
        btn.addEventListener("click", showWeatherData);
      }
    });

    // Add handlers for ALL editable fields in this section (e.g., m_19, l_24)
    const sectionElement = document.getElementById("climateCalculations");
    if (sectionElement) {
      const editableFields = sectionElement.querySelectorAll(
        ".editable.user-input",
      );
      editableFields.forEach((field) => {
        if (!field.hasEditableListeners) {
          // Add a flag to prevent duplicate listeners
          field.setAttribute("contenteditable", "true");
          field.addEventListener("blur", handleEditableBlur); // Use the general blur handler
          // Add the general keydown handler to prevent Enter newlines
          field.addEventListener("keydown", function (e) {
            if (e.key === "Enter") {
              e.preventDefault();
              e.stopPropagation();
              this.blur();
            }
          });
          field.hasEditableListeners = true; // Set the flag
        }
      });
    }

    // ✅ INITIALIZE SLIDERS VIA FIELDMANAGER (Standard Architecture)
    if (window.TEUI?.FieldManager?.initializeSliders) {
      window.TEUI.FieldManager.initializeSliders("climateCalculations");
      console.log("S03: Sliders initialized via FieldManager");
    } else {
      console.warn("S03: FieldManager.initializeSliders not available");
    }

    // Initial update if province and city already selected
    if (provinceDropdown?.value && cityDropdown?.value) {
      updateWeatherData();
    }

    // --- StateManager Listeners ---
    if (window.TEUI && window.TEUI.StateManager) {
      // Listener for d_12 (Occupancy) changes
      window.TEUI.StateManager.addListener(
        "d_12",
        function (newOccupancyValue) {
          // When occupancy changes, re-evaluate the Jan Design Temp based on stored data
          const provinceValue = window.TEUI.StateManager?.getValue("d_19");
          const cityValue = window.TEUI.StateManager?.getValue("h_19");

          let isCritical = newOccupancyValue.includes("Care");

          // Update d_23 (January Design Temp) based on stored data - Using ClimateDataService
          if (provinceValue && cityValue) {
            const cityData = ClimateDataService.getCityData(provinceValue, cityValue);

            if (cityData) {
              // Use the stored 1% or 2.5% value based on isCritical
              const janTempKey = isCritical ? "January_1" : "January_2_5";
              const correctTemp =
                cityData[janTempKey] || cityData["January_2_5"] || "-24"; // Fallback
              setFieldValue("d_23", correctTemp, "derived"); // Update d_23 state and DOM
            } else {
              console.warn(
                `S03 d_12 listener: Could not find cityData for ${cityValue} to update Jan temp.`,
              );
              // If city data isn't loaded, maybe just update setpoints?
            }
          } else {
            console.warn(
              "S03 d_12 listener: Province or City not set, cannot update Jan temp.",
            );
            // Fallback: Update d_23 based on a default assumption if needed
            // setFieldValue("d_23", isCritical ? '-26' : '-24', 'derived');
          }

          // Always update setpoints and critical flag when occupancy changes
          calculateHeatingSetpoint();
          calculateCoolingSetpoint_h24();
          calculateTemperatures();
          updateCriticalOccupancyFlag();
          // NOTE: DO NOT call updateWeatherData() here. We only recalculate based on occupancy type change.
        },
      );

      // Listener for h_24 (Calculated Cooling Setpoint) changes
      window.TEUI.StateManager.addListener("h_24", function (newValue) {
        updateCoolingDependents();
        calculateGroundFacing(); // Re-add call needed for GF CDD
      });

      // Listener for l_24 (Cooling Override) changes
      window.TEUI.StateManager.addListener("l_24", function (newValue) {
        updateCoolingDependents();
        calculateGroundFacing(); // Re-add call needed for GF CDD
      });

      // Listener for d_20 (HDD) changes to update j_19 (Climate Zone)
      window.TEUI.StateManager.addListener("d_20", function (newHddValue) {
        const climateZone = determineClimateZone(newHddValue);
        setFieldValue("j_19", climateZone, "derived");
        // Also recalculate Ground Facing HDD (d_22) which depends on d_20
        calculateGroundFacing();
      });

      // Listener for m_19 (Cooling Days) changes
      window.TEUI.StateManager.addListener("m_19", function (newValue) {
        calculateAll(); // Recalculate everything as GF HDD and GF CDD change
      });

      // ✅ CORRECTED: Listen for both target and reference slider updates
      window.TEUI.StateManager.addListener("target_i_21", function (newValue) {
        if (ModeManager.currentMode === "target") {
          calculateAll(); // Recalculate everything as capacitance affects GF CDD
          console.log(`S03: Target capacitance slider updated: ${newValue}%`);
        }
      });

      window.TEUI.StateManager.addListener("ref_i_21", function (newValue) {
        if (ModeManager.currentMode === "reference") {
          calculateAll(); // Recalculate everything as capacitance affects GF CDD
          console.log(`S03: Reference capacitance slider updated: ${newValue}%`);
        }
      });

      // ✅ CORRECTED: Listen for both target and reference dropdown updates
      window.TEUI.StateManager.addListener("target_h_21", function (newValue) {
        if (ModeManager.currentMode === "target") {
          calculateAll(); // Recalculate GFCDD when capacitance setting changes
          console.log(`S03: Target capacitance dropdown updated: ${newValue}`);
        }
      });

      window.TEUI.StateManager.addListener("ref_h_21", function (newValue) {
        if (ModeManager.currentMode === "reference") {
          calculateAll(); // Recalculate GFCDD when capacitance setting changes
          console.log(`S03: Reference capacitance dropdown updated: ${newValue}`);
        }
      });


    } else {
      console.warn("Section 03: StateManager not found, listeners not added.");
    }
  }


  /**
   * Handle blur events on editable fields
   */
  function handleEditableBlur(event) {
    const fieldId = this.getAttribute("data-field-id");
    if (!fieldId) return;

    const newValue = this.textContent.trim();
    const numericValue = window.TEUI.parseNumeric(newValue, NaN); // Try parsing

    if (!isNaN(numericValue)) {
      // Format display for valid numbers
      const formatType = Number.isInteger(numericValue)
        ? "integer"
        : "number-2dp"; // Default format
      this.textContent = window.TEUI.formatNumber(numericValue, formatType);
      // Update StateManager
      if (window.TEUI.StateManager) {
        window.TEUI.StateManager.setValue(
          fieldId,
          numericValue.toString(),
          "user-modified",
        );
      }
      calculateAll(); // Recalculate after state update
    } else {
      // Revert to previous value if input is invalid
      const previousValue = window.TEUI.StateManager?.getValue(fieldId) || "0"; // Fallback to 0
      const prevNumericValue = window.TEUI.parseNumeric(previousValue, 0);
      const formatType = Number.isInteger(prevNumericValue)
        ? "integer"
        : "number-2dp";
      this.textContent = window.TEUI.formatNumber(prevNumericValue, formatType);
      console.warn(
        `Invalid input for ${fieldId}: ${newValue}. Reverted to ${this.textContent}.`,
      );
    }
  }

  /**
   * Populate province dropdown using ClimateDataService
   */
  function populateProvinceDropdown() {
    const provinceSelect = getElement(['[data-dropdown-id="dd_d_19"]']);
    if (!provinceSelect) return;

    // Clear existing options except the first one
    while (provinceSelect.options.length > 1) {
      provinceSelect.remove(1);
    }

    const provinces = ClimateDataService.getProvinces();
    provinces.forEach((province) => {
      const option = document.createElement("option");
      option.value = province;
      option.textContent = ClimateDataService.getProvinceFullName(province);
      provinceSelect.appendChild(option);
    });

    console.log("S03: Populated province dropdown with options:", provinces);

    // Set default province from StateManager
    const prefix = ModeManager.currentMode === "target" ? "target_" : "ref_";
    const defaultProvince = window.TEUI.StateManager.getValue(`${prefix}d_19`) || "ON";
    provinceSelect.value = defaultProvince;

    if (provinceSelect.value) {
      window.TEUI.StateManager.setValue(`${prefix}d_19`, provinceSelect.value, "default");
      // Trigger city dropdown update
      updateCityDropdown(provinceSelect.value);
    }
  }

  /**
   * Called when section is rendered - CORRECTED for StateManager architecture
   */
  function onSectionRendered() {
    console.log("S03: Section rendered - initializing corrected StateManager architecture");

    // Initialize defaults in StateManager if not already set
    ModeManager.setDefaults();

    // ✅ CRITICAL: Expose ModeManager globally for global toggle functionality
    if (window.TEUI) {
      window.TEUI.ModeManager = ModeManager;
      window.TEUI.DualState = DualState;
      console.log("S03: ModeManager exposed globally for global toggle");
    }

    // Setup S03-specific weather data button
    setupS03WeatherButton();

    // Ensure ClimateData is available before proceeding
    ClimateDataService.ensureAvailable(function() {
      console.log("S03: ClimateData available - initializing dropdowns");
      
      // Populate province dropdown
      populateProvinceDropdown();
      
      // Set up event handlers
      initializeEventHandlers();

      // Initial UI refresh from StateManager
      ModeManager.refreshUI();

      console.log("S03: StateManager architecture initialization complete");
    });
  }

  //==========================================================================
  // PART 5: PUBLIC API - Enhanced with DualState
  //==========================================================================

  return {
    // Field definitions and layout
    getFields: getFields,
    getDropdownOptions: getDropdownOptions,
    getLayout: getLayout,

    // Event handling and initialization
    initializeEventHandlers: initializeEventHandlers,
    onSectionRendered: onSectionRendered,

    // Utility functions
    updateWeatherData: updateWeatherData,
    showWeatherData: showWeatherData,
    calculateAll: calculateAll,

    // StateManager integration functionality
    DualState: DualState,
    ModeManager: ModeManager,
  };
})();
