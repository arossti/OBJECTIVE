/**
 * 4011-Section09.js
 * Occupant + Internal Gains (Section 9) module for TEUI Calculator 4.011
 *
 * Uses the consolidated declarative approach where field definitions
 * are integrated directly into the layout structure.
 */

// Ensure namespace exists
window.TEUI = window.TEUI || {};
window.TEUI.SectionModules = window.TEUI.SectionModules || {};

// Section 9: Occupant + Internal Gains Module
window.TEUI.SectionModules.sect09 = (function () {
  //==========================================================================
  // DUAL-STATE ARCHITECTURE (Self-Contained State Module)
  //==========================================================================

  // PATTERN A: Internal State Objects (Self-Contained + Persistent)
  const TargetState = {
    state: {},
    listeners: {},
    initialize: function () {
      const savedState = localStorage.getItem("S09_TARGET_STATE");
      if (savedState) {
        this.state = JSON.parse(savedState);
      } else {
        this.setDefaults();
      }
    },
    setDefaults: function () {
      // These defaults MUST match the 'value' properties in the sectionRows definition
      this.state = {
        d_63: "126",        // Occupants per building
        g_63: "12",         // Occupied hours/day
        d_64: "Normal",     // Occupant activity
        f_64: "117",        // Activity watts (calculated)
        i_63: "4380",       // Annual occupied hours (calculated)
        d_65: "7",          // Plug loads density
        d_66: "1.5",        // Lighting density
        g_67: "Efficient",  // Equipment efficiency
        d_67: "5.00",       // Equipment density (calculated)
        d_68: "No Elevators", // Elevator status
        // Calculated values initialized to defaults
        h_64: "0", i_64: "0", j_64: "0", k_64: "0", l_64: "0",
        h_65: "0", i_65: "0", j_65: "0", k_65: "0", l_65: "0", m_65: "100", n_65: "✓",
        h_66: "0", i_66: "0", j_66: "0", k_66: "0", l_66: "0", m_66: "100", n_66: "✓",
        h_67: "0", i_67: "0", j_67: "0", k_67: "0", l_67: "0", m_67: "100", n_67: "✓",
        h_69: "0", i_69: "0", j_69: "0", k_69: "0", l_69: "0",
        h_70: "0", i_70: "0", k_70: "0",
        h_71: "0", i_71: "0", j_71: "100", k_71: "0", l_71: "100"
      };
    },
    saveState: function () {
      localStorage.setItem("S09_TARGET_STATE", JSON.stringify(this.state));
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
      const savedState = localStorage.getItem("S09_REFERENCE_STATE");
      if (savedState) {
        this.state = JSON.parse(savedState);
      } else {
        this.setDefaults();
      }
    },
    setDefaults: function () {
      // Reference defaults for comparison - based on efficient/standard practices
      this.state = {
        d_63: "100",        // Standard occupancy (lower)
        g_63: "8",          // Standard business hours
        d_64: "Normal",     // Normal activity
        f_64: "117",        // Activity watts (same)
        i_63: "2920",       // Annual occupied hours (8*365)
        d_65: "5",          // Reference plug loads (lower)
        d_66: "1.13",       // Reference lighting (code minimum)
        g_67: "Efficient",  // Always efficient for reference
        d_67: "3.00",       // Reference equipment density (efficient, no elevators)
        d_68: "No Elevators", // Reference doesn't include elevators
        // Calculated values initialized to defaults  
        h_64: "0", i_64: "0", j_64: "0", k_64: "0", l_64: "0",
        h_65: "0", i_65: "0", j_65: "0", k_65: "0", l_65: "0", m_65: "100", n_65: "✓",
        h_66: "0", i_66: "0", j_66: "0", k_66: "0", l_66: "0", m_66: "100", n_66: "✓",
        h_67: "0", i_67: "0", j_67: "0", k_67: "0", l_67: "0", m_67: "100", n_67: "✓",
        h_69: "0", i_69: "0", j_69: "0", k_69: "0", l_69: "0",
        h_70: "0", i_70: "0", k_70: "0",
        h_71: "0", i_71: "0", j_71: "100", k_71: "0", l_71: "100"
      };
      console.log("S09: Reference defaults set for comparison model");
    },
    saveState: function () {
      localStorage.setItem("S09_REFERENCE_STATE", JSON.stringify(this.state));
    },
    setValue: function (fieldId, value) {
      this.state[fieldId] = value;
      this.saveState();
    },
    getValue: function (fieldId) {
      return this.state[fieldId];
    },
  };

  // PATTERN A: The ModeManager Facade
  const ModeManager = {
    currentMode: "target",
    initialize: function () {
      TargetState.initialize();
      ReferenceState.initialize();
    },
    switchMode: function (mode) {
      if (this.currentMode === mode || (mode !== "target" && mode !== "reference"))
        return;
      this.currentMode = mode;
      console.log(`S09: Switched to ${mode.toUpperCase()} mode`);

      this.refreshUI();
      calculateAll(); // Recalculate for the new mode
    },
    resetState: function() {
        console.log("S09: Resetting state and clearing localStorage for Section 09.");
        TargetState.setDefaults();
        TargetState.saveState();
        ReferenceState.setDefaults();
        ReferenceState.saveState();
        console.log("S09: States have been reset to defaults.");

        // After resetting, refresh the UI and recalculate.
        this.refreshUI();
        calculateAll();
    },
    getCurrentState: function () {
      return this.currentMode === "target" ? TargetState : ReferenceState;
    },
    getValue: function (fieldId) {
      return this.getCurrentState().getValue(fieldId);
    },
    setValue: function (fieldId, value, source = "user") {
      this.getCurrentState().setValue(fieldId, value, source);

      // BRIDGE: For backward compatibility, sync Target changes to global StateManager.
      if (this.currentMode === "target") {
        window.TEUI.StateManager.setValue(fieldId, value, "user-modified");
      }
    },
    refreshUI: function () {
      const sectionElement = document.getElementById("occupantInternalGains");
      if (!sectionElement) return;

      const currentState = this.getCurrentState();
      
      const fieldsToSync = [
        'd_63', 'g_63', 'd_64', 'f_64', 'i_63',
        'd_65', 'd_66', 'g_67', 'd_67', 'd_68',
        'h_64', 'i_64', 'j_64', 'k_64', 'l_64',
        'h_65', 'i_65', 'j_65', 'k_65', 'l_65', 'm_65', 'n_65',
        'h_66', 'i_66', 'j_66', 'k_66', 'l_66', 'm_66', 'n_66',
        'h_67', 'i_67', 'j_67', 'k_67', 'l_67', 'm_67', 'n_67',
        'h_69', 'i_69', 'j_69', 'k_69', 'l_69',
        'h_70', 'i_70', 'k_70',
        'h_71', 'i_71', 'j_71', 'k_71', 'l_71'
      ];

      fieldsToSync.forEach(fieldId => {
          const stateValue = currentState.getValue(fieldId);
          if (stateValue === undefined || stateValue === null) return;

          const element = sectionElement.querySelector(`[data-field-id="${fieldId}"]`);
          if (!element) return;
          
          if (element.matches('select')) {
              element.value = stateValue;
          } else if (element.hasAttribute('contenteditable')) {
              element.textContent = stateValue;
          } else {
              element.textContent = stateValue;
          }
      });
    },
  };
  
  // Expose globally for cross-section communication
  window.TEUI.sect09 = window.TEUI.sect09 || {};
  window.TEUI.sect09.ModeManager = ModeManager;

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

  function getFieldValue(fieldId) {
    // First try to get from internal state
    const stateValue = ModeManager.getValue(fieldId);
    if (stateValue != null) return stateValue;
    
    // Then try global StateManager for external dependencies
    const globalValue = window.TEUI?.StateManager?.getValue(fieldId);
    if (globalValue != null) return globalValue;
    
    // Fallback for non-state values (e.g., legacy DOM elements)
    const element = document.querySelector(`[data-field-id="${fieldId}"]`);
    return element ? (element.value ?? element.textContent?.trim()) : null;
  }

  function setCalculatedValue(fieldId, rawValue, formatType = "number") {
    // Set state using ModeManager before updating DOM
    ModeManager.setValue(fieldId, rawValue.toString(), "calculated");

    // Upgrade format for specific field patterns
    if (formatType === "number" && (fieldId.startsWith("h_") || fieldId.startsWith("i_") || fieldId.startsWith("k_"))) {
      if (fieldId !== "i_63") { // i_63 is annual hours, should be integer
        formatType = "number-2dp-comma";
      }
    }

    // Format the value for display using the global formatter
    const formattedValue = window.TEUI.formatNumber(rawValue, formatType);

    // Update the corresponding DOM element
    const element = document.querySelector(`[data-field-id="${fieldId}"]`);
    if (element) {
      if (element.tagName === "SELECT" || element.tagName === "INPUT") {
        element.value = formattedValue;
      } else {
        element.textContent = formattedValue;
      }
    }
  }


  //==========================================================================
  // EQUIPMENT LOADS LOOKUP TABLE
  //==========================================================================

  // Equipment loads by occupancy type, efficiency and elevator presence (W/m²)
  const equipmentLoadsTable = {
    "A-Assembly": {
      Regular: { Elevators: 9.0, "No Elevators": 7.0 },
      Efficient: { Elevators: 7.0, "No Elevators": 5.0 },
    },
    "B1-Detention": {
      Regular: { Elevators: 10.0, "No Elevators": 8.0 },
      Efficient: { Elevators: 8.0, "No Elevators": 6.0 },
    },
    "B2-Care": {
      Regular: { Elevators: 25.0, "No Elevators": 20.0 },
      Efficient: { Elevators: 18.0, "No Elevators": 15.0 },
    },
    "B3-DetentionCare": {
      Regular: { Elevators: 20.0, "No Elevators": 18.0 },
      Efficient: { Elevators: 14.0, "No Elevators": 12.0 },
    },
    "C-Residential": {
      Regular: { Elevators: 6.0, "No Elevators": 5.0 },
      Efficient: { Elevators: 4.0, "No Elevators": 3.0 },
    },
    "D-Business": {
      Regular: { Elevators: 10.0, "No Elevators": 7.0 },
      Efficient: { Elevators: 7.0, "No Elevators": 5.0 },
    },
    "E-Mercantile": {
      Regular: { Elevators: 15.0, "No Elevators": 12.0 },
      Efficient: { Elevators: 12.0, "No Elevators": 10.0 },
    },
    "F-Industrial": {
      Regular: { Elevators: 17.0, "No Elevators": 15.0 },
      Efficient: { Elevators: 10.0, "No Elevators": 8.0 },
    },
    Hotels: {
      Regular: { "No Elevators": 10, Elevators: 12 },
      Efficient: { "No Elevators": 7, Elevators: 9 },
    },
    Warehouses: {
      Regular: { "No Elevators": 4, Elevators: 6 },
      Efficient: { "No Elevators": 3, Elevators: 4 },
    },
    Restaurants: {
      Regular: { "No Elevators": 18, Elevators: 20 },
      Efficient: { "No Elevators": 15, Elevators: 18 },
    },
  };

  // Default value if lookup fails
  const defaultEquipmentLoad = 5; // W/m²

  //==========================================================================
  // CONSOLIDATED FIELD DEFINITIONS AND LAYOUT
  //==========================================================================

  // Define rows with integrated field definitions
  const sectionRows = {
    // UNIT SUBHEADER - MUST COME FIRST
    header: {
      id: "09-ID",
      rowId: "09-ID",
      label: "Internal Gains Units",
      cells: {
        c: { content: "C", classes: ["section-subheader"] },
        d: { content: "Unit Qty", classes: ["section-subheader"] },
        e: { content: "E", classes: ["section-subheader"] },
        f: { content: "F", classes: ["section-subheader"] },
        g: { content: "G", classes: ["section-subheader"] },
        h: { content: "Annual\nkWh/yr", classes: ["section-subheader"] },
        i: {
          content: "Htg Gain\nkWh/yr",
          classes: ["section-subheader", "text-right"],
        },
        j: { content: "Htg Gain\n%", classes: ["section-subheader"] },
        k: { content: "Cooling Gain\nkWh/yr", classes: ["section-subheader"] },
        l: { content: "Htg Gain\n%", classes: ["section-subheader"] },
        m: { content: "Reference", classes: ["section-subheader"] },
        n: { content: "N", classes: ["section-subheader"] },
      },
    },

    // Row 63: G.1.1 Occupants per Building (declared)
    63: {
      id: "G.1.1",
      rowId: "G.1.1",
      label: "Occupants per Building (declared)",
      cells: {
        c: { label: "Occupants per Building (declared)" },
        d: {
          fieldId: "d_63",
          type: "editable",
          value: "126",
          section: "occupantInternalGains",
          classes: ["user-input"],
        },
        e: { content: "G.1.3", classes: ["label-prefix"] },
        f: { content: "Occupied Hrs/Day", classes: ["label-main"] },
        g: {
          fieldId: "g_63",
          type: "dropdown",
          dropdownId: "dd_g_63",
          value: "12",
          section: "occupantInternalGains",
          options: [
            { value: "0", name: "0" },
            { value: "8", name: "8" },
            { value: "10", name: "10" },
            { value: "12", name: "12" },
            { value: "16", name: "16" },
            { value: "24", name: "24" },
          ],
        },
        i: {
          fieldId: "i_63",
          type: "calculated",
          value: "4380",
          section: "occupantInternalGains",
          dependencies: ["g_63"],
          classes: ["text-right"],
        },
        j: { content: "/ 8760", classes: ["text-left"] },
      },
    },

    // Row 64: G.1.2 Occupant Activity
    64: {
      id: "G.1.2",
      rowId: "G.1.2",
      label: "Occupant Activity",
      cells: {
        c: { label: "Occupant Activity" },
        d: {
          fieldId: "d_64",
          type: "dropdown",
          dropdownId: "dd_d_64",
          value: "Normal",
          section: "occupantInternalGains",
          options: [
            { value: "Relaxed", name: "Relaxed" },
            { value: "Normal", name: "Normal" },
            { value: "Active", name: "Active" },
            { value: "Hyperactive", name: "Hyperactive" },
          ],
        },
        e: { content: "G.1.4", classes: ["label-prefix"] },
        f: { content: "Watts/pp (S+L)", classes: ["label-main"] },
        g: {
          fieldId: "f_64",
          type: "calculated",
          value: "117",
          section: "occupantInternalGains",
          dependencies: ["d_64"],
        },
        h: {
          fieldId: "h_64",
          type: "calculated",
          value: "64,696.02",
          section: "occupantInternalGains",
          dependencies: ["f_64", "d_63", "g_63"],
        },
        i: {
          fieldId: "i_64",
          type: "calculated",
          value: "43,426.10",
          section: "occupantInternalGains",
          dependencies: ["h_64"],
        },
        j: {
          fieldId: "j_64",
          type: "calculated",
          value: "43.39%",
          section: "occupantInternalGains",
          dependencies: ["i_64", "i_71"],
        },
        k: {
          fieldId: "k_64",
          type: "calculated",
          value: "21,269.93",
          section: "occupantInternalGains",
          dependencies: ["h_64"],
        },
        l: {
          fieldId: "l_64",
          type: "calculated",
          value: "43.39%",
          section: "occupantInternalGains",
          dependencies: ["k_64", "k_71"],
        },
      },
    },

    // Row 65: P.1 Plug Loads
    65: {
      id: "P.1",
      rowId: "P.1",
      label: "Plug Loads",
      cells: {
        c: { label: "Plug Loads" },
        d: {
          fieldId: "d_65",
          type: "calculated",
          value: "7",
          section: "occupantInternalGains",
        },
        h: {
          fieldId: "h_65",
          type: "calculated",
          value: "43,757.95",
          section: "occupantInternalGains",
          dependencies: ["d_65", "h_15"],
        },
        i: {
          fieldId: "i_65",
          type: "calculated",
          value: "29,371.78",
          section: "occupantInternalGains",
          dependencies: ["h_65"],
        },
        j: {
          fieldId: "j_65",
          type: "calculated",
          value: "29.35%",
          section: "occupantInternalGains",
          dependencies: ["i_65", "i_71"],
        },
        k: {
          fieldId: "k_65",
          type: "calculated",
          value: "14,386.18",
          section: "occupantInternalGains",
          dependencies: ["h_65"],
        },
        l: {
          fieldId: "l_65",
          type: "calculated",
          value: "29.35%",
          section: "occupantInternalGains",
          dependencies: ["k_65", "k_71"],
        },
        m: {
          fieldId: "m_65",
          type: "calculated",
          value: "100%",
          section: "occupantInternalGains",
        },
        n: {
          fieldId: "n_65",
          type: "calculated",
          value: "✓",
          section: "occupantInternalGains",
          classes: ["checkmark"],
        },
      },
    },

    // Row 66: P.2 Lighting Loads
    66: {
      id: "P.2",
      rowId: "P.2",
      label: "Lighting Loads",
      cells: {
        c: { label: "Lighting Loads" },
        d: {
          fieldId: "d_66",
          type: "editable",
          value: "1.5",
          section: "occupantInternalGains",
          classes: ["user-input"],
        },
        h: {
          fieldId: "h_66",
          type: "calculated",
          value: "9,376.70",
          section: "occupantInternalGains",
          dependencies: ["d_66", "h_15"],
        },
        i: {
          fieldId: "i_66",
          type: "calculated",
          value: "6,293.95",
          section: "occupantInternalGains",
          dependencies: ["h_66"],
        },
        j: {
          fieldId: "j_66",
          type: "calculated",
          value: "6.29%",
          section: "occupantInternalGains",
          dependencies: ["i_66", "i_71"],
        },
        k: {
          fieldId: "k_66",
          type: "calculated",
          value: "3,082.75",
          section: "occupantInternalGains",
          dependencies: ["h_66"],
        },
        l: {
          fieldId: "l_66",
          type: "calculated",
          value: "6.29%",
          section: "occupantInternalGains",
          dependencies: ["k_66", "k_71"],
        },
        m: {
          fieldId: "m_66",
          type: "calculated",
          value: "133%",
          section: "occupantInternalGains",
        },
        n: {
          fieldId: "n_66",
          type: "calculated",
          value: "✓",
          section: "occupantInternalGains",
          classes: ["checkmark"],
        },
      },
    },

    // Row 67: P.3.1 Equipment Loads
    67: {
      id: "P.3.1",
      rowId: "P.3.1",
      label: "Equipment Loads",
      cells: {
        c: { label: "Equipment Loads" },
        d: {
          fieldId: "d_67",
          type: "calculated",
          value: "5.00",
          section: "occupantInternalGains",
        },
        e: { content: "P.3.3", classes: ["label-prefix"] },
        f: { content: "Equipment Spec", classes: ["label-main"] },
        g: {
          fieldId: "g_67",
          type: "dropdown",
          dropdownId: "dd_g_67",
          value: "Efficient",
          section: "occupantInternalGains",
          options: [
            { value: "Regular", name: "Regular" },
            { value: "Efficient", name: "Efficient" },
          ],
        },
        h: {
          fieldId: "h_67",
          type: "calculated",
          value: "31,255.68",
          section: "occupantInternalGains",
          dependencies: ["d_67", "g_67", "h_15"],
        },
        i: {
          fieldId: "i_67",
          type: "calculated",
          value: "20,979.84",
          section: "occupantInternalGains",
          dependencies: ["h_67"],
        },
        j: {
          fieldId: "j_67",
          type: "calculated",
          value: "20.96%",
          section: "occupantInternalGains",
          dependencies: ["i_67", "i_71"],
        },
        k: {
          fieldId: "k_67",
          type: "calculated",
          value: "10,275.84",
          section: "occupantInternalGains",
          dependencies: ["h_67"],
        },
        l: {
          fieldId: "l_67",
          type: "calculated",
          value: "20.96%",
          section: "occupantInternalGains",
          dependencies: ["k_67", "k_71"],
        },
        m: {
          fieldId: "m_67",
          type: "calculated",
          value: "100%",
          section: "occupantInternalGains",
        },
        n: {
          fieldId: "n_67",
          type: "calculated",
          value: "✓",
          section: "occupantInternalGains",
          classes: ["checkmark"],
        },
      },
    },

    // Row 68: P.3.2 Elevator Loads
    68: {
      id: "P.3.2",
      rowId: "P.3.2",
      label: "Elevator Loads (W/m² → Eqpt Gains)",
      cells: {
        c: { label: "Elevator Loads (W/m² → Eqpt Gains)" },
        d: {
          fieldId: "d_68",
          type: "dropdown",
          dropdownId: "dd_d_68",
          value: "No Elevators",
          section: "occupantInternalGains",
          options: [
            { value: "Elevators", name: "Elevators" },
            { value: "No Elevators", name: "No Elevators" },
          ],
        },
      },
    },

    // Row 69: W.1.3 DHW System Losses
    69: {
      id: "W.1.3",
      rowId: "W.1.3",
      label: "DHW System Losses",
      cells: {
        c: { label: "DHW System Losses" },
        h: {
          fieldId: "h_69",
          type: "calculated",
          value: "0.00",
          section: "occupantInternalGains",
          dependencies: ["d_54"],
        },
        i: {
          fieldId: "i_69",
          type: "calculated",
          value: "0.00",
          section: "occupantInternalGains",
          dependencies: ["h_69"],
        },
        j: {
          fieldId: "j_69",
          type: "calculated",
          value: "0.00%",
          section: "occupantInternalGains",
          dependencies: ["i_69", "i_71"],
        },
        k: {
          fieldId: "k_69",
          type: "calculated",
          value: "0.00",
          section: "occupantInternalGains",
          dependencies: ["h_69"],
        },
        l: {
          fieldId: "l_69",
          type: "calculated",
          value: "0.00%",
          section: "occupantInternalGains",
          dependencies: ["k_69", "k_71"],
        },
      },
    },

    // Row 70: G.2 Plug/Light/Eqpt. Subtotals
    70: {
      id: "G.2",
      rowId: "G.2",
      label: "Plug/Light/Eqpt. Subtotals",
      cells: {
        c: { label: "Plug/Light/Eqpt. Subtotals" },
        h: {
          fieldId: "h_70",
          type: "calculated",
          value: "84,390.34",
          section: "occupantInternalGains",
          dependencies: ["h_65", "h_66", "h_67", "h_69"],
        },
        i: {
          fieldId: "i_70",
          type: "calculated",
          value: "56,645.57",
          section: "occupantInternalGains",
          dependencies: ["i_65", "i_66", "i_67", "i_69"],
        },
        k: {
          fieldId: "k_70",
          type: "calculated",
          value: "27,744.77",
          section: "occupantInternalGains",
          dependencies: ["k_65", "k_66", "k_67", "k_69"],
        },
      },
    },

    // Row 71: Internal Gains Totals
    71: {
      id: "Totals",
      rowId: "Totals",
      label: "Internal Gains Totals",
      cells: {
        c: { label: "Internal Gains Totals" },
        h: {
          fieldId: "h_71",
          type: "calculated",
          value: "149,086.36",
          section: "occupantInternalGains",
          dependencies: ["h_64", "h_70"],
        },
        i: {
          fieldId: "i_71",
          type: "calculated",
          value: "100,071.67",
          section: "occupantInternalGains",
          dependencies: ["i_64", "i_70"],
        },
        j: {
          fieldId: "j_71",
          type: "calculated",
          value: "100%",
          section: "occupantInternalGains",
        },
        k: {
          fieldId: "k_71",
          type: "calculated",
          value: "49,014.69",
          section: "occupantInternalGains",
          dependencies: ["k_64", "k_70"],
        },
        l: {
          fieldId: "l_71",
          type: "calculated",
          value: "100%",
          section: "occupantInternalGains",
        },
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
            section: cell.section || "occupantInternalGains",
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
   * Calculate Occupant Activity watts based on activity level
   */
  function calculateActivityWatts(activityLevel) {
    // Use precise values derived from SCHEDULES-3037.csv G32:G43
    const activityWatts = {
      Relaxed: 96.71, // Was 97
      Normal: 117.23, // Was 117
      Active: 219.8, // Was 220
      Hyperactive: 424.95, // Was 425
    };

    return activityWatts[activityLevel] || 117.23; // Default to Normal (precise value)
  }

  /**
   * Calculate Occupied Hours based on daily hours
   */
  function calculateOccupiedHoursRatio(dailyHours) {
    const hours = parseInt(dailyHours, 10) || 0;

    // Handle special case of 0 hours
    if (hours === 0) {
      return "0"; // Unoccupied building like cold storage
    }

    const annualHours = hours * 365;
    return annualHours.toString(); // Just return the annual hours, not the ratio
  }



  /**
   * Calculate Annual kWh/yr for occupants
   */
  function calculateOccupantEnergy() {
    // Get values using new helper functions
    const occupants = getNumericValue("d_63");
    const dailyHours = getNumericValue("g_63");
    const watts = getNumericValue("f_64");

    // Calculate annual energy
    const annualHours = dailyHours * 365;
    const energy = (occupants * watts * annualHours) / 1000; // Convert W to kW

    // Get heating/cooling split from external dependency
    const coolingDays = getGlobalNumericValue("m_19") || 120;
    const heatingDays = 365 - coolingDays;
    const heatingRatio = heatingDays / 365;
    const coolingRatio = coolingDays / 365;

    // Update fields using ModeManager-aware helper
    setCalculatedValue("h_64", energy, "number");
    setCalculatedValue("i_64", energy * heatingRatio, "number"); // Heating portion
    setCalculatedValue("k_64", energy * coolingRatio, "number"); // Cooling portion

    return energy;
  }

  /**
   * Calculate Annual kWh/yr for plug loads
   */
  function calculatePlugLoads() {
    // Get reference values from external dependencies
    const referenceStandard = getGlobalNumericValue("d_13") ? 
      window.TEUI.StateManager.getValue("d_13") : "";
    const buildingType = getGlobalNumericValue("d_12") ? 
      window.TEUI.StateManager.getValue("d_12") : "";

    // Determine plug load density
    let plugLoadDensity;

    const isPassivhaus = referenceStandard.includes("PH");
    const isResidentialOrCare =
      buildingType === "C - Residential" ||
      buildingType === "B1 - Detention" ||
      buildingType === "B2 - Care and Treatment" ||
      buildingType === "B3 - Detention Care & Treatment";

    if (isPassivhaus) {
      plugLoadDensity = 2.1;
    } else if (isResidentialOrCare) {
      plugLoadDensity = 5;
    } else {
      plugLoadDensity = 7;
    }

    // Update density field using ModeManager-aware helper
    setCalculatedValue("d_65", plugLoadDensity, "number");

    // Calculate annual energy based on OCCUPIED HOURS from internal state
    const conditionedArea = getGlobalNumericValue("h_15");
    const occupiedHours = getNumericValue("i_63"); // Use internal annual occupied hours
    const energy = (plugLoadDensity * conditionedArea * occupiedHours) / 1000; // W/m² to kWh/yr using occupied hours

    // Get heating/cooling split from external dependency
    const coolingDays = getGlobalNumericValue("m_19") || 120;
    const heatingDays = 365 - coolingDays;
    const heatingRatio = heatingDays / 365;
    const coolingRatio = coolingDays / 365;

    // Update energy fields using ModeManager-aware helper
    setCalculatedValue("h_65", energy, "number");
    setCalculatedValue("i_65", energy * heatingRatio, "number"); // Use dynamic heating ratio
    setCalculatedValue("k_65", energy * coolingRatio, "number"); // Use dynamic cooling ratio

    // Calculate percentage against reference value
    // Reference is 5 W/m² for residential/care or 7 W/m² for others
    const referencePlugLoad = isResidentialOrCare ? 5 : 7;

    // If using PH standard, then reference is higher (5 or 7) than actual (2.1)
    // so percentage will be lower (which is good)
    const percentOfReference = (plugLoadDensity / referencePlugLoad) * 100;
    setCalculatedValue("m_65", percentOfReference, "percent-auto");

    // Set checkmark or X based on whether it's below reference
    if (plugLoadDensity <= referencePlugLoad) {
      setCalculatedValue("n_65", "✓", "raw"); // Store raw checkmark
      setElementClass("n_65", "checkmark");
    } else {
      setCalculatedValue("n_65", "✗", "raw"); // Store raw X
      setElementClass("n_65", "warning");
    }

    return energy;
  }

  /**
   * Calculate Annual kWh/yr for lighting loads
   */
  function calculateLightingLoads() {
    // Get values using new helper functions
    const lightingDensity = getNumericValue("d_66");
    const conditionedArea = getGlobalNumericValue("h_15");

    // Calculate annual energy based on OCCUPIED HOURS from internal state
    const occupiedHours = getNumericValue("i_63"); // Use internal annual occupied hours
    const energy = (lightingDensity * conditionedArea * occupiedHours) / 1000; // W/m² to kWh/yr using occupied hours

    // Get heating/cooling split from external dependency
    const coolingDays = getGlobalNumericValue("m_19") || 120;
    const heatingDays = 365 - coolingDays;
    const heatingRatio = heatingDays / 365;
    const coolingRatio = coolingDays / 365;

    // Update fields using ModeManager-aware helper
    setCalculatedValue("h_66", energy, "number");
    setCalculatedValue("i_66", energy * heatingRatio, "number"); // Use dynamic heating ratio
    setCalculatedValue("k_66", energy * coolingRatio, "number"); // Use dynamic cooling ratio

    // Calculate percentage against reference value
    // Based on CSV data, reference appears to be around 1.13 W/m²
    const referenceLightingLoad = 1.13;
    const percentOfReference = (lightingDensity / referenceLightingLoad) * 100;
    setCalculatedValue("m_66", percentOfReference, "percent-auto");

    // Set checkmark or X based on standard comparison
    // In this case, we're checking if it exceeds 133% of reference
    if (percentOfReference <= 133) {
      setCalculatedValue("n_66", "✓", "raw");
      setElementClass("n_66", "checkmark");
    } else {
      setCalculatedValue("n_66", "✗", "raw");
      setElementClass("n_66", "warning");
    }

    return energy;
  }

  /**
   * Calculate Annual kWh/yr for equipment loads
   */
  function calculateEquipmentLoads() {
    try {
      // Get values from dropdowns using external dependencies
      let buildingType = "A-Assembly"; // Default
      let efficiencyType = "Efficient"; // Default to Efficient
      let elevatorStatus = "No Elevators"; // Default

      // Get building type from external dependency
      const buildingTypeValue = window.TEUI.StateManager.getValue("d_12");
      if (buildingTypeValue) {
        buildingType = buildingTypeValue;
      }

      // Get efficiency setting from internal state
      efficiencyType = getFieldValue("g_67") || "Efficient";

      // Get elevator setting from internal state  
      elevatorStatus = getFieldValue("d_68") || "No Elevators";

      // Format building type to match lookup table
      buildingType = formatBuildingTypeForLookup(buildingType);

      // Lookup the equipment density value with fallbacks
      let densityValue = 5.0; // Default

      if (equipmentLoadsTable[buildingType]) {
        if (equipmentLoadsTable[buildingType][efficiencyType]) {
          if (
            equipmentLoadsTable[buildingType][efficiencyType][
              elevatorStatus
            ] !== undefined
          ) {
            densityValue =
              equipmentLoadsTable[buildingType][efficiencyType][elevatorStatus];
          } else {
            const firstElevatorStatus = Object.keys(
              equipmentLoadsTable[buildingType][efficiencyType],
            )[0];
            densityValue =
              equipmentLoadsTable[buildingType][efficiencyType][
                firstElevatorStatus
              ];
          }
        } else {
          const firstEfficiencyType = Object.keys(
            equipmentLoadsTable[buildingType],
          )[0];
          if (
            equipmentLoadsTable[buildingType][firstEfficiencyType][
              elevatorStatus
            ] !== undefined
          ) {
            densityValue =
              equipmentLoadsTable[buildingType][firstEfficiencyType][
                elevatorStatus
              ];
          } else {
            const firstElevatorStatus = Object.keys(
              equipmentLoadsTable[buildingType][firstEfficiencyType],
            )[0];
            densityValue =
              equipmentLoadsTable[buildingType][firstEfficiencyType][
                firstElevatorStatus
              ];
          }
        }
      }

      // Update the equipment density field using ModeManager-aware helper
      setCalculatedValue("d_67", densityValue, "number");

      // Calculate annual energy based on OCCUPIED HOURS from internal state
      const floorArea = getGlobalNumericValue("h_15");
      const occupiedHours = getNumericValue("i_63"); // Use internal annual occupied hours

      const annualEnergy =
        (densityValue * floorArea * occupiedHours) / 1000 || 0; // W/m² to kWh/yr using occupied hours

      // Get heating/cooling split from external dependency
      const coolingDays = getGlobalNumericValue("m_19") || 120;
      const heatingDays = 365 - coolingDays;
      const heatingRatio = heatingDays / 365;
      const coolingRatio = coolingDays / 365;

      const heatingPortion = annualEnergy * heatingRatio; // Use dynamic heating ratio
      const coolingPortion = annualEnergy * coolingRatio; // Use dynamic cooling ratio

      // Update fields using ModeManager-aware helper
      setCalculatedValue("h_67", annualEnergy, "number");
      setCalculatedValue("i_67", heatingPortion, "number");
      setCalculatedValue("k_67", coolingPortion, "number");

      // Calculate percentage against reference value
      // Reference is 100% - equipment loads are already based on lookup tables with occupancy-specific values
      setCalculatedValue("m_67", 100, "percent-auto");

      // Set checkmark for equipment loads
      setCalculatedValue("n_67", "✓", "raw");
      setElementClass("n_67", "checkmark");

      // Update percentages and totals
      calculateTotals();
    } catch (error) {
      // Error handling could be added here if needed
    }

    // Helper function to format building type
    function formatBuildingTypeForLookup(rawType) {
      // If it's already in the right format, return it
      if (
        typeof equipmentLoadsTable !== "undefined" &&
        Object.keys(equipmentLoadsTable).includes(rawType)
      ) {
        return rawType;
      }

      try {
        // Extract the category (e.g., "A - Assembly" -> "A")
        const categoryMatch = rawType.match(/^([A-F][0-9]?)\s*[-–]\s*/);
        if (categoryMatch) {
          const category = categoryMatch[1].trim();

          // Map category to lookup key
          if (category === "A") return "A-Assembly";
          if (category === "B1") return "B1-Detention";
          if (category === "B2") return "B2-Care";
          if (category === "B3") return "B3-DetentionCare";
          if (category === "C") return "C-Residential";
          if (category === "D") return "D-Business";
          if (category === "E") return "E-Mercantile";
          if (category === "F") return "F-Industrial";
        }

        // Try extracting just the first character as fallback
        if (rawType.length > 0) {
          const firstChar = rawType.charAt(0);
          if (firstChar === "A") return "A-Assembly";
          if (firstChar === "C") return "C-Residential";
          if (firstChar === "D") return "D-Business";
          if (firstChar === "E") return "E-Mercantile";
          if (firstChar === "F") return "F-Industrial";

          // Special case for B categories
          if (firstChar === "B") {
            if (rawType.includes("1") || rawType.includes("Detention")) {
              return "B1-Detention";
            } else if (
              rawType.includes("2") ||
              (rawType.includes("Care") && !rawType.includes("Detention"))
            ) {
              return "B2-Care";
            } else if (
              rawType.includes("3") ||
              (rawType.includes("Care") && rawType.includes("Detention"))
            ) {
              return "B3-DetentionCare";
            }
            return "B3-DetentionCare"; // Default B case
          }
        }
      } catch (e) {
        // Error handling could be added here if needed
      }

      return "A-Assembly"; // Default fallback
    }
  }

  /**
   * Calculate subtotals and totals
   */
  function calculateTotals() {
    // Get values for components using new helper functions
    const dhwLosses = getGlobalNumericValue("d_54");
    
    // Split DHW losses using external cooling days dependency
    const coolingDays = getGlobalNumericValue("m_19") || 120;
    const heatingDays = 365 - coolingDays;
    const dhwHeatingRatio = heatingDays / 365;
    const dhwCoolingRatio = coolingDays / 365;
    
    const dhwHeating = dhwLosses * dhwHeatingRatio;
    const dhwCooling = dhwLosses * dhwCoolingRatio;
    
    // Update DHW fields using ModeManager-aware helper
    setCalculatedValue("h_69", dhwLosses, "number");
    setCalculatedValue("i_69", dhwHeating, "number");
    setCalculatedValue("k_69", dhwCooling, "number");

    // Energy values using new helper functions
    const plugEnergy = getNumericValue("h_65");
    const lightingEnergy = getNumericValue("h_66");
    const equipmentEnergy = getNumericValue("h_67");
    const occupantEnergy = getNumericValue("h_64");

    // Heating values using new helper functions
    const plugHeating = getNumericValue("i_65");
    const lightingHeating = getNumericValue("i_66");
    const equipmentHeating = getNumericValue("i_67");
    const occupantHeating = getNumericValue("i_64");

    // Cooling values using new helper functions
    const plugCooling = getNumericValue("k_65");
    const lightingCooling = getNumericValue("k_66");
    const equipmentCooling = getNumericValue("k_67");
    const occupantCooling = getNumericValue("k_64");

    // Calculate subtotals for H70 (Plug/Light/Eqpt. Subtotals - EXCLUDING DHW losses h_69)
    const pleTotalEnergy = plugEnergy + lightingEnergy + equipmentEnergy; // EXCLUDES dhwLosses (h_69)
    const pleHeatingTotal = plugHeating + lightingHeating + equipmentHeating; // EXCLUDES dhwHeating (i_69)
    const pleCoolingTotal = plugCooling + lightingCooling + equipmentCooling; // EXCLUDES dhwCooling (k_69)

    // Update subtotal fields using ModeManager-aware helper
    setCalculatedValue("h_70", pleTotalEnergy, "number");
    setCalculatedValue("i_70", pleHeatingTotal, "number");
    setCalculatedValue("k_70", pleCoolingTotal, "number");

    // Calculate grand totals (H71, I71, K71 - THESE DO include DHW system losses and occupant energy)
    const totalEnergy = pleTotalEnergy + occupantEnergy + dhwLosses; // Add back dhwLosses for grand total
    const totalHeating = pleHeatingTotal + occupantHeating + dhwHeating; // Add back dhwHeating for grand total
    const totalCooling = pleCoolingTotal + occupantCooling + dhwCooling; // Add back dhwCooling for grand total

    // Update total fields using ModeManager-aware helper
    setCalculatedValue("h_71", totalEnergy, "number");
    setCalculatedValue("i_71", totalHeating, "number");
    setCalculatedValue("k_71", totalCooling, "number");

    // Update percentage fields
    updatePercentages(totalHeating, totalCooling);
  }

  /**
   * Updates the percentage columns (J and L) based on calculated totals.
   */
  function updatePercentages(totalHeating, totalCooling) {
    const gainIndicatorClasses = ["gain-high", "gain-medium", "gain-low"];

    const setPercentage = (
      valueFieldId,
      percentageFieldId,
      total,
      isCooling = false,
    ) => {
      const value = window.TEUI.parseNumeric(getFieldValue(valueFieldId));
      const percentageDecimal = total > 0 ? value / total : 0;
      setCalculatedValue(percentageFieldId, percentageDecimal, "percent-auto");

      let gainClass = "";
      const absPercentageValue = Math.abs(percentageDecimal * 100); // Work with 0-100 scale for thresholds

      if (isCooling) {
        // For Cooling: Low percentage is good (Green)
        if (absPercentageValue <= 5) {
          gainClass = "gain-high";
        } // Green (Low is good)
        else if (absPercentageValue <= 15) {
          gainClass = "gain-medium";
        } // Yellow
        else {
          gainClass = "gain-low";
        } // Red (High is bad)
      } else {
        // For Heating: High percentage is good (Green)
        if (absPercentageValue >= 30) {
          gainClass = "gain-high";
        } // Green (High is good)
        else if (absPercentageValue >= 10) {
          gainClass = "gain-medium";
        } // Yellow
        else {
          gainClass = "gain-low";
        } // Red (Low is bad)
      }
      setIndicatorClass(percentageFieldId, gainClass, gainIndicatorClasses);

      const element = document.querySelector(
        `[data-field-id="${percentageFieldId}"]`,
      );
      if (element) element.classList.add("text-left-indicator");
    };

    setPercentage("i_64", "j_64", totalHeating);
    setPercentage("k_64", "l_64", totalCooling, true);
    setPercentage("i_65", "j_65", totalHeating);
    setPercentage("k_65", "l_65", totalCooling, true);
    setPercentage("i_66", "j_66", totalHeating);
    setPercentage("k_66", "l_66", totalCooling, true);
    setPercentage("i_67", "j_67", totalHeating);
    setPercentage("k_67", "l_67", totalCooling, true);
    setPercentage("i_69", "j_69", totalHeating);
    setPercentage("k_69", "l_69", totalCooling, true);

    setCalculatedValue("j_71", 1.0, "percent-auto");
    setCalculatedValue("l_71", 1.0, "percent-auto");
  }

  /**
   * Helper function to get a field value
   */
  function getFieldValue(fieldId) {
    // Try to get from StateManager first
    if (window.TEUI?.StateManager?.getValue) {
      const value = window.TEUI.StateManager.getValue(fieldId);
      if (value !== null && value !== undefined) {
        return value;
      }
    }

    // Fall back to DOM
    const element = document.querySelector(`[data-field-id="${fieldId}"]`);
    if (element) {
      if (element.tagName === "SELECT" || element.tagName === "INPUT") {
        return element.value;
      } else {
        return element.textContent;
      }
    }

    return "";
  }

  /**
   * Helper function to set a calculated field value in StateManager and update the DOM.
   * Uses the global window.TEUI.formatNumber for formatting.
   * @param {string} fieldId - The ID of the field to update.
   * @param {*} rawValue - The raw, unformatted value to store in StateManager.
   * @param {string} formatType - The format type for display (e.g., 'number', 'percent-auto', 'integer', 'raw').
   */
  function setCalculatedValue(fieldId, rawValue, formatType = "number") {
    // If formatType is the default 'number', upgrade to 'number-2dp-comma' for kWh fields in this section
    if (
      formatType === "number" &&
      (fieldId.startsWith("h_") ||
        fieldId.startsWith("i_") ||
        fieldId.startsWith("k_"))
    ) {
      if (fieldId !== "i_63") {
        // i_63 is annual hours, should be integer
        formatType = "number-2dp-comma";
      }
    }

    if (window.TEUI?.StateManager?.setValue) {
      // Ensure rawValue is stored as a string for consistency, especially numbers
      window.TEUI.StateManager.setValue(
        fieldId,
        String(rawValue),
        "calculated",
      );
    }

    // Format the value for display using the global formatter
    const formattedValue = window.TEUI.formatNumber(rawValue, formatType);

    // Update the corresponding DOM element
    const element = document.querySelector(`[data-field-id="${fieldId}"]`);
    if (element) {
      if (element.tagName === "SELECT" || element.tagName === "INPUT") {
        element.value = formattedValue; // Update input/select value
      } else {
        element.textContent = formattedValue; // Update other element text content
      }
    }
  }

  /**
   * Calculate all values for this section using Pattern A architecture
   */
  function calculateAll() {
    console.log("S09: Running Pattern A calculations");

    // Calculate individual components in sequence
    const activityLevel = getFieldValue("d_64");
    const activityWatts = calculateActivityWatts(activityLevel);
    setCalculatedValue("f_64", activityWatts, "number-2dp-comma");

    const dailyHours = getFieldValue("g_63");
    const annualHours = calculateOccupiedHoursRatio(dailyHours);
    setCalculatedValue("i_63", annualHours, "raw"); // i_63 is raw hours, no comma/decimal

    // Calculate energy usage for each component
    calculateOccupantEnergy();
    calculatePlugLoads();
    calculateLightingLoads();
    calculateEquipmentLoads();

    // Calculate subtotals and totals
    calculateTotals();

    // Update reference indicators
    updateAllReferenceIndicators();

    console.log("S09: Pattern A calculations complete");
  }

  /**
   * Initialize all event handlers for this section
   */
  function initializeEventHandlers() {
    const sectionElement = document.getElementById("occupantInternalGains");
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
      field.addEventListener("blur", function () {
        const fieldId = this.getAttribute("data-field-id");
        if (!fieldId) return;

        // Handle numeric values
        if (this.getAttribute("contenteditable") === "true") {
          // Get and clean the value
          const newValue = this.textContent.trim();

          // Store the raw value using ModeManager
          ModeManager.setValue(fieldId, newValue, "user-modified");

          // Format the display using global helper if it's a valid number
          const numericValue = window.TEUI.parseNumeric(newValue);
          if (!isNaN(numericValue)) {
            // Use 'integer' format if it's a whole number, otherwise 'number'
            const formatType = Number.isInteger(numericValue)
              ? "integer"
              : "number";
            this.textContent = window.TEUI.formatNumber(
              numericValue,
              formatType,
            );
          } else {
            // Handle non-numeric input if necessary (e.g., clear or show error)
            this.textContent = window.TEUI.formatNumber(0, "number"); // Default display format
            ModeManager.setValue(fieldId, "0", "user-modified");
          }

          // Recalculate
          calculateAll();
        }
      });

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

        // Store the value using ModeManager
        ModeManager.setValue(fieldId, this.value, "user-modified");

        // Recalculate
        calculateAll();
      });
    });

    // Add special handling for equipment dropdowns
    setupEquipmentDropdownListeners();

    // Add cross-section dependency updates
    addStateManagerListeners();
  }

  /**
   * Creates and injects the Target/Reference toggle and Reset button into the section header.
   */
  function injectHeaderControls() {
      const sectionHeader = document.querySelector("#occupantInternalGains .section-header");
      if (!sectionHeader || sectionHeader.querySelector(".local-controls-container")) {
          return; // Already setup or header not found
      }

      const controlsContainer = document.createElement("div");
      controlsContainer.className = "local-controls-container";
      controlsContainer.style.cssText = "display: flex; align-items: center; margin-left: auto; gap: 10px;";

      // --- Create Reset Button ---
      const resetButton = document.createElement("button");
      resetButton.innerHTML = "🔄 Reset"; // Using an icon for clarity
      resetButton.title = "Reset Section 09 to Defaults";
      resetButton.style.cssText = "padding: 4px 8px; font-size: 0.8em; background-color: #dc3545; color: white; border: none; border-radius: 4px; cursor: pointer;";
      
      resetButton.addEventListener("click", (event) => {
          event.stopPropagation();
          // Use a confirmation dialog to prevent accidental resets
          if (confirm("Are you sure you want to reset all inputs in this section to their defaults? This will clear any saved data for Section 09.")) {
              ModeManager.resetState();
          }
      });

      // --- Create Toggle Switch ---
      const stateIndicator = document.createElement("span");
      stateIndicator.textContent = "TARGET";
      stateIndicator.style.cssText = "color: #fff; font-weight: bold; font-size: 0.8em; background-color: rgba(0, 123, 255, 0.5); padding: 2px 6px; border-radius: 4px;";

      const toggleSwitch = document.createElement("div");
      toggleSwitch.style.cssText = "position: relative; width: 40px; height: 20px; background-color: #ccc; border-radius: 10px; cursor: pointer;";
      
      const slider = document.createElement("div");
      slider.style.cssText = "position: absolute; top: 2px; left: 2px; width: 16px; height: 16px; background-color: white; border-radius: 50%; transition: transform 0.2s;";

      toggleSwitch.appendChild(slider);
      
      toggleSwitch.addEventListener("click", (event) => {
          event.stopPropagation();
          const isReference = toggleSwitch.classList.toggle('active');
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

  /**
   * Add listeners for cross-section dependencies
   */
  function addStateManagerListeners() {
    if (!window.TEUI?.StateManager) return;

    // Define dependencies
    const dependencies = [
      {
        source: "h_15",
        handler: calculateAll,
        description: "Update when conditioned area changes",
      },
      {
        source: "d_54",
        handler: function () {
          // Get DHW system losses using parseNumeric
          const dhwLosses =
            window.TEUI.parseNumeric(getFieldValue("d_54")) || 0;
          // Use local helper
          setCalculatedValue("h_69", dhwLosses, "number");
          calculateTotals();
        },
        description: "Update when DHW system losses change",
      },
      {
        source: "d_12",
        handler: function () {
          calculatePlugLoads(); // These internally use getFieldValue -> parseNumeric
          calculateEquipmentLoads();
          calculateTotals();
        },
        description: "Update when building type changes",
      },
      {
        source: "d_13",
        handler: function () {
          calculatePlugLoads();
          calculateTotals();
          // CRITICAL: Also update reference indicators when d_13 changes
          console.log(
            "[Section09] d_13 changed - updating reference indicators",
          );
          updateAllReferenceIndicators();
        },
        description: "Update when reference standard changes",
      },
      {
        source: "m_19",
        handler: function () {
          // Recalculate all loads when cooling days change
          calculateOccupantEnergy();
          calculatePlugLoads();
          calculateLightingLoads();
          calculateEquipmentLoads();
          calculateTotals();
        },
        description: "Update when cooling days change",
      },
    ];

    // Register each dependency
    dependencies.forEach((dep) => {
      window.TEUI.StateManager.addListener(dep.source, dep.handler);
    });
  }

  /**
   * Register with StateManager for backward compatibility and cross-section communication
   */
  function registerWithStateManager() {
    if (!window.TEUI?.StateManager) return;

    // Register key fields that other sections might depend on (Target values only for global compatibility)
    const keysToRegister = [
      // Total internal gains values
      { id: "h_71", value: "0", state: "calculated" }, // Total internal gains
      { id: "i_71", value: "0", state: "calculated" }, // Heating internal gains
      { id: "k_71", value: "0", state: "calculated" }, // Cooling internal gains

      // Individual loads
      { id: "h_64", value: "0", state: "calculated" }, // Occupant energy
      { id: "h_65", value: "0", state: "calculated" }, // Plug loads
      { id: "h_66", value: "0", state: "calculated" }, // Lighting loads
      { id: "h_67", value: "0", state: "calculated" }, // Equipment loads
      { id: "h_69", value: "0", state: "calculated" }, // DHW system losses
    ];

    // Register each key
    keysToRegister.forEach((key) => {
      window.TEUI.StateManager.setValue(key.id, key.value, key.state);
    });
  }

  /**
   * Called when the section is rendered
   */
  function onSectionRendered() {
    console.log("S09: Section rendered - initializing Pattern A Self-Contained State Module.");

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
      window.TEUI.sect09 = window.TEUI.sect09 || {};
      window.TEUI.sect09.ModeManager = ModeManager;
      console.log("S09: ModeManager exposed globally for cross-section integration.");
    }

    // 5. Perform initial calculations for this section
    calculateAll();
  }

  /**
   * Register with SectionIntegrator
   */
  function registerWithSectionIntegrator() {
    if (!window.TEUI?.SectionIntegrator) return;

    // Create the integration registration
    const internalGainsIntegration = {
      name: "Internal Gains",
      sections: ["sect09", "sect11", "sect14"],
      description: "Internal heat gains for TEDI and energy calculations",
      values: [
        {
          fieldId: "h_71",
          name: "Total Internal Gains",
          unit: "kWh/yr",
          type: "energy-internal",
        },
        {
          fieldId: "i_71",
          name: "Heating Internal Gains",
          unit: "kWh/yr",
          type: "energy-heating",
        },
        {
          fieldId: "k_71",
          name: "Cooling Internal Gains",
          unit: "kWh/yr",
          type: "energy-cooling",
        },
      ],
      initialize: function () {
        // Initial calculation when integration is initialized
        calculateAll();
      },
    };

    // Register with SectionIntegrator if it has a registry
    if (
      typeof window.TEUI.SectionIntegrator.getRegisteredIntegrations ===
      "function"
    ) {
      const integrations =
        window.TEUI.SectionIntegrator.getRegisteredIntegrations();
      if (!integrations.internalGains) {
        // If the SectionIntegrator has a registeredIntegrations property
        if (window.TEUI.SectionIntegrator.registeredIntegrations) {
          window.TEUI.SectionIntegrator.registeredIntegrations.internalGains =
            internalGainsIntegration;
        }
      }
    }
  }

  /**
   * Set up direct event listeners for equipment-related dropdowns
   * This ensures they trigger equipment load calculations immediately
   */
  function setupEquipmentDropdownListeners() {
    // Map of fieldIds to their descriptions for more generic handling
    const dropdownFields = [
      { fieldId: "g_67", description: "Equipment efficiency" },
      { fieldId: "d_68", description: "Elevator status" },
      { fieldId: "d_12", description: "Building type" },
    ];

    // Set up listeners for all relevant dropdowns
    dropdownFields.forEach((field) => {
      const dropdown = document.querySelector(
        `select[data-field-id="${field.fieldId}"]`,
      );
      if (!dropdown) return;

      // Remove existing listeners by cloning
      const newDropdown = dropdown.cloneNode(true);
      if (dropdown.parentNode) {
        dropdown.parentNode.replaceChild(newDropdown, dropdown);
      }

      // Add change listener
      newDropdown.addEventListener("change", function (e) {
        const fieldId = this.getAttribute("data-field-id"); // Get fieldId here
        if (!fieldId) return; // Exit if no fieldId

        // Store value using ModeManager
        const state = e.isTrusted ? "user-modified" : "calculated";
        ModeManager.setValue(field.fieldId, this.value, state);

        // Trigger calculation - Ensure dependent calculations run
        calculateAll();
      });
    });
  }

  /**
   * Helper function to set class on an element
   */
  function setElementClass(fieldId, className) {
    const element = document.querySelector(`[data-field-id="${fieldId}"]`);
    if (element) {
      // Remove existing style classes
      element.classList.remove("checkmark", "warning");
      // Add new class
      element.classList.add(className);
    }
  }

  // Add CSS styles for checkmarks and X marks
  function addCheckmarkStyles() {
    // Check if the styles already exist
    let styleElement = document.getElementById("checkmark-styles");
    if (!styleElement) {
      // Create style element
      styleElement = document.createElement("style");
      styleElement.id = "checkmark-styles";
      styleElement.textContent = `
                .checkmark {
                    color: green;
                    font-weight: bold;
                }
                .warning {
                    color: red;
                    font-weight: bold;
                }
            `;
      document.head.appendChild(styleElement);
    }
  }

  /**
   * Sets indicator classes (e.g., gain-high, gain-medium, gain-low) for a cell.
   * Removes existing indicator classes before adding the new one.
   * @param {string} fieldId - The data-field-id of the cell element.
   * @param {string} newClass - The new indicator class to add (or empty string to remove all).
   * @param {string[]} potentialClasses - An array of all possible indicator classes for this type.
   */
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
  // REFERENCE INDICATOR CONFIGURATION
  //==========================================================================

  // T-cell comparison configuration for Section 09
  const referenceComparisons = {
    d_65: {
      type: "lower-is-better",
      tCell: "t_65",
      description: "Plug Loads W/m²",
    },
    d_66: {
      type: "lower-is-better",
      tCell: "t_66",
      description: "Lighting Loads W/m²",
    },
    g_67: {
      type: "higher-is-better",
      tCell: "t_67",
      description: "Equipment Efficiency Spec",
    },
  };

  /**
   * Update reference indicators for all configured fields
   */
  function updateAllReferenceIndicators() {
    try {
      Object.keys(referenceComparisons).forEach((fieldId) => {
        updateReferenceIndicator(fieldId);
      });
    } catch (error) {
      console.error("Error updating reference indicators:", error);
    }
  }

  /**
   * Update reference indicator (M and N columns) for a specific field
   * @param {string} fieldId - The application field ID to update
   */
  function updateReferenceIndicator(fieldId) {
    const config = referenceComparisons[fieldId];
    if (!config) return;

    const currentValue = getNumericValue(fieldId);
    const referenceValue =
      TEUI.StateManager.getTCellValue(fieldId) ||
      TEUI.StateManager.getReferenceValue(config.tCell);
    const rowId = fieldId.match(/\d+$/)?.[0];
    if (!rowId) return;

    const mFieldId = `m_${rowId}`;
    const nFieldId = `n_${rowId}`;

    if (!referenceValue && referenceValue !== 0) {
      // Allow 0 as a valid reference
      // console.warn(`No reference value found for ${fieldId} - showing 100%`); // Comment out this specific warning
      setCalculatedValue(mFieldId, 1, "percent-0dp");
      const nElement = document.querySelector(`[data-field-id="${nFieldId}"]`);
      if (nElement) {
        nElement.textContent = "✓";
        setElementClass(nFieldId, "checkmark");
      }
      return;
    }

    try {
      let referencePercent = 1;
      let isGood = true;

      if (fieldId === "g_67") {
        // For equipment efficiency spec (text comparison)
        isGood = currentValue === referenceValue;
        referencePercent = isGood ? 1 : 0;
      } else {
        // For numeric comparisons
        const refValueNum = parseFloat(referenceValue);
        const currentValueNum = parseFloat(currentValue);

        if (config.type === "lower-is-better") {
          // For values where lower is better (e.g., plug loads, lighting loads)
          referencePercent =
            currentValueNum > 0 ? refValueNum / currentValueNum : 0;
          isGood = currentValueNum <= refValueNum;
        } else if (config.type === "higher-is-better") {
          // For values where higher is better
          referencePercent =
            refValueNum > 0 ? currentValueNum / refValueNum : 0;
          isGood = currentValueNum >= refValueNum;
        }
      }

      // Update Column M (Reference %)
      setCalculatedValue(mFieldId, referencePercent, "percent-0dp");

      // Update Column N (Pass/Fail checkmark)
      const nElement = document.querySelector(`[data-field-id="${nFieldId}"]`);
      if (nElement) {
        nElement.textContent = isGood ? "✓" : "✗";
        setElementClass(nFieldId, isGood ? "checkmark" : "warning");
      }
    } catch (error) {
      console.error(
        `Error updating reference indicators for ${fieldId}:`,
        error,
      );
    }
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
    calculateOccupantEnergy: calculateOccupantEnergy,
    calculatePlugLoads: calculatePlugLoads,
    calculateLightingLoads: calculateLightingLoads,
    calculateEquipmentLoads: calculateEquipmentLoads,
    calculateTotals: calculateTotals,
    setupEquipmentDropdownListeners: setupEquipmentDropdownListeners,

    // Registration functions
    registerWithStateManager: registerWithStateManager,
    registerWithSectionIntegrator: registerWithSectionIntegrator,

    // Public values needed by other sections
    getInternalGainsTotal: function () {
      return getFieldValue("h_71");
    },
    getInternalGainsHeating: function () {
      return getFieldValue("i_71");
    },
    getInternalGainsCooling: function () {
      return getFieldValue("k_71");
    },
  };
})();

// Initialize when the section is rendered - THIS IS THE PRIMARY INITIALIZATION POINT
document.addEventListener("teui-section-rendered", function (event) {
  if (event.detail?.sectionId === "occupantInternalGains") {
    // PERFORMANCE FIX: Execute initialization immediately to avoid requestAnimationFrame violations
    // Heavy initialization work should not be in animation frames (causes 99-116ms violations)
      if (window.TEUI?.SectionModules?.sect09?.onSectionRendered) {
        window.TEUI.SectionModules.sect09.onSectionRendered();
      }
  }
});

// Export key functions to the global namespace for cross-section access
document.addEventListener("DOMContentLoaded", function () {
  // Create section namespace
  window.TEUI = window.TEUI || {};
  window.TEUI.sect09 = window.TEUI.sect09 || {};

  // Export critical functions
  const module = window.TEUI.SectionModules.sect09;
  window.TEUI.sect09.calculateAll = module.calculateAll;

  // Create a safe global function for internal gains recalculation
  window.recalculateInternalGains = function () {
    if (window.recalculateInternalGainsRunning) return;

    window.recalculateInternalGainsRunning = true;
    try {
      if (window.TEUI?.SectionModules?.sect09?.calculateAll) {
        window.TEUI.SectionModules.sect09.calculateAll();
      } else if (window.TEUI?.sect09?.calculateAll) {
        window.TEUI.sect09.calculateAll();
      }
    } catch (_e) {
      // Error in global recalculateInternalGains
    } finally {
      window.recalculateInternalGainsRunning = false;
    }
  };
});

// Make sure we have the calculateTEUI function
if (
  typeof window.calculateTEUI !== "function" &&
  window.TEUI?.StateManager?.updateTEUICalculations
) {
  window.calculateTEUI = function () {
    window.TEUI.StateManager.updateTEUICalculations("global-fallback");
  };
}
