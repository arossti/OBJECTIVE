# 🏆 TEUI 4.011RF - DUAL-STATE ARCHITECTURE GUIDE (v3)

**Status**: ✅ **Gold Standard** | **Updated**: July 10, 2025  
**Mandate**: This document outlines the **sole approved pattern** for implementing dual-state (Target/Reference) functionality. It is based on the successful, self-contained architecture proven in Section 03, 08, and 10. All previous guides are superseded.

---

## 🏛️ **Architectural Mandate: The Self-Contained State Module**

Each dual-state section must have its own `TargetState` and `ReferenceState` objects, managed by a `ModeManager` facade. This ensures that:

1.  **State Isolation:** Each section's state is completely independent, preventing cross-section interference.
2.  **Persistence:** States are saved to and loaded from `localStorage` using section-specific keys.
3.  **Default Values:** Default values are set using `setDefaults()` and can be overridden by user inputs.
4.  **Value Retrieval:** Values are retrieved using `getValue()` and updated using `setValue()`.

### 1. `TargetState` and `ReferenceState` Objects

```javascript
  // Target State Management (isolated + persistent)
  const TargetState = {
    state: {},
    listeners: {}, // Add listener management if needed by the section

    initialize: function() {
      // Logic to load from localStorage or setDefaults
      const savedState = localStorage.getItem('SXX_TARGET_STATE'); // Use section-specific key
      if (savedState) {
        this.state = JSON.parse(savedState);
      } else {
        this.setDefaults();
      }
    },
    setDefaults: function() {
      // These defaults MUST match the 'value' properties in the sectionRows definition
      this.state = {
        d_73: "7.50", e_73: "Average", f_73: "0.50", g_73: "0", h_73: "100",
        d_74: "81.14", e_74: "North", f_74: "0.50", g_74: "0", h_74: "100",
        d_75: "3.83", e_75: "East", f_75: "0.50", g_75: "0", h_75: "100",
        d_76: "159.00", e_76: "South", f_76: "0.50", g_76: "0", h_76: "100",
        d_77: "100.66", e_77: "West", f_77: "0.50", g_77: "0", h_77: "90",
        d_78: "0.00", e_78: "Skylight", f_78: "0.50", g_78: "0", h_78: "80",
        d_80: "NRC 40%",
      };
    },
    saveState: function() {
      localStorage.setItem('SXX_TARGET_STATE', JSON.stringify(this.state));
    },
    setValue: function(fieldId, value) { 
      this.state[fieldId] = value; 
      this.saveState();
      // Optional: notify internal listeners
    },
    getValue: function(fieldId) { return this.state[fieldId]; }
  };

  // Reference State Management (isolated + persistent)
  const ReferenceState = {
    // ... (Identical structure to TargetState, but with different default values and localStorage key)
    initialize: function() {
        const savedState = localStorage.getItem('SXX_REFERENCE_STATE');
        // ...
    },
    setDefaults: function() {
      this.state = {
        d_73: "5.00", e_73: "South", f_73: "0.30", g_73: "25", h_73: "75",
        d_74: "60.00", e_74: "East", f_74: "0.35", g_74: "10", h_74: "90",
        d_75: "2.50", e_75: "West", f_75: "0.30", g_75: "20", h_75: "80",
        d_76: "159.00", e_76: "South", f_76: "0.50", g_76: "0", h_76: "100", // Placeholder
        d_77: "100.66", e_77: "West", f_77: "0.50", g_77: "0", h_77: "90", // Placeholder
        d_78: "0.00", e_78: "Skylight", f_78: "0.50", g_78: "0", h_78: "80", // Placeholder
        d_80: "NRC 40%", // Reference method
      };
    },
    saveState: function() {
      localStorage.setItem('SXX_REFERENCE_STATE', JSON.stringify(this.state));
    },
    // ... rest of the methods
  };
```

### 2. `ModeManager` Facade

```javascript
  // PATTERN 2: The ModeManager Facade
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
      console.log(`S10: Switched to ${mode.toUpperCase()} mode`);

      this.refreshUI();
      calculateAll(); // Recalculate for the new mode
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
    resetState: function() {
        console.log("SXX: Resetting state and clearing localStorage.");
        TargetState.setDefaults();
        TargetState.saveState();
        ReferenceState.setDefaults();
        ReferenceState.saveState();
        
        // After resetting, refresh the UI to reflect the defaults and recalculate.
        this.refreshUI();
        calculateAll();
    },

    refreshUI: function() {
      // 1. Get the section's root element to scope all queries.
      const sectionElement = document.getElementById("envelopeRadiantGains");
      if (!sectionElement) return;

      const currentState = this.getCurrentState();
      const fieldsToSync = [
          'd_73', 'e_73', 'f_73', 'g_73', 'h_73',
          'd_74', 'e_74', 'f_74', 'g_74', 'h_74',
          'd_75', 'e_75', 'f_75', 'g_75', 'h_75',
          'd_76', 'e_76', 'f_76', 'g_76', 'h_76',
          'd_77', 'e_77', 'f_77', 'g_77', 'h_77',
          'd_78', 'e_78', 'f_78', 'g_78', 'h_78',
          'd_80'
      ];

      fieldsToSync.forEach(fieldId => {
          const stateValue = currentState.getValue(fieldId);
          if (stateValue === undefined || stateValue === null) return;

          const element = sectionElement.querySelector(`[data-field-id="${fieldId}"]`);
          if (!element) return;
          
          if (element.type === 'range') { // Handle sliders specifically
              const numericValue = window.TEUI.parseNumeric(stateValue, 0);
              element.value = numericValue;
              // Sliders in this section have a separate display div
              const display = document.querySelector(`[data-display-for="${fieldId}"]`);
              if (display) {
                  if (fieldId.startsWith('g_') || fieldId.startsWith('h_')) {
                      display.textContent = `${stateValue}%`;
                  } else { // f_ sliders
                      display.textContent = parseFloat(stateValue).toFixed(2);
                  }
              }
          } else if (element.hasAttribute('contenteditable')) {
              element.textContent = stateValue;
          } else if (element.tagName === 'SELECT') {
              element.value = stateValue;
          }
      });
    },
  };
```

### 3. `sectionRows` Object

```javascript
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
        },
        p: {
            fieldId: "p_74",
            type: "calculated",
            dependencies: ["l_12", "k_74", "i_74"],
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
        },
        p: {
            fieldId: "p_75",
            type: "calculated",
            dependencies: ["l_12", "k_75", "i_75"],
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
        },
        p: {
            fieldId: "p_76",
            type: "calculated",
            dependencies: ["l_12", "k_76", "i_76"],
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
        },
        p: {
            fieldId: "p_77",
            type: "calculated",
            dependencies: ["l_12", "k_77", "i_77"],
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
        },
        p: {
            fieldId: "p_78",
            type: "calculated",
            dependencies: ["l_12", "k_78", "i_78"],
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
```

---

### **Pattern 3: Robust UI Event Handling**

To ensure smooth user interaction and state synchronization, event handlers must be carefully managed.

```javascript
  function initializeEventHandlers() {
    // Add event listeners for all editable fields
    document.querySelectorAll(".user-input").forEach(input => {
      input.addEventListener("input", (event) => {
        const fieldId = event.target.dataset.fieldId;
        if (fieldId) {
          const value = window.TEUI.parseNumeric(event.target.value, 0);
          ModeManager.setValue(fieldId, value);
        }
      });
    });

    // Add event listeners for all dropdowns
    document.querySelectorAll("select").forEach(select => {
      select.addEventListener("change", (event) => {
        const fieldId = event.target.dataset.fieldId;
        if (fieldId) {
          ModeManager.setValue(fieldId, event.target.value);
        }
      });
    });

    // Add event listeners for all sliders
    document.querySelectorAll(".slider-container").forEach(container => {
      const fieldId = container.dataset.fieldId;
      if (fieldId) {
        const slider = container.querySelector("input[type='range']");
        if (slider) {
          slider.addEventListener("input", (event) => {
            const value = window.TEUI.parseNumeric(event.target.value, 0);
            ModeManager.setValue(fieldId, value);
          });
        }
      }
    });

    // Add event listeners for all percentage sliders
    document.querySelectorAll(".slider-container[data-field-id^='g_'], .slider-container[data-field-id^='h_']").forEach(container => {
      const fieldId = container.dataset.fieldId;
      if (fieldId) {
        const slider = container.querySelector("input[type='range']");
        if (slider) {
          slider.addEventListener("input", (event) => {
            const value = parseFloat(event.target.value);
            ModeManager.setValue(fieldId, value);
          });
        }
      }
    });
  }
```

### **Pattern 4: Section Initialization (`onSectionRendered`)**

Each section must be initialized after it is rendered to the DOM. This ensures that:

1.  **State is loaded:** The `ModeManager` is initialized to load default values from `localStorage`.
2.  **Controls are injected:** The `injectHeaderControls` function is called to add the toggle switch and reset button.
3.  **Event handlers are set up:** `initializeEventHandlers` is called to add event listeners for user inputs.
4.  **UI is synced:** The `refreshUI` function is called to sync the UI to the default (Target) state.
5.  **Calculations are run:** `calculateAll()` is called to perform initial calculations based on the default state.

```javascript
  function onSectionRendered() {
    ModeManager.initialize();
    injectHeaderControls();        // 2. Inject the header controls (toggle & reset)
    initializeEventHandlers();     // 3. Set up event handlers
    ModeManager.refreshUI();       // 4. Sync UI to the default (Target) state
    calculateAll();                // 5. Run initial calculations
  }
```

### **Pattern 6: Section Header Controls (Toggle & Reset)**

To maintain a consistent user experience, each dual-state section must have its own toggle switch and reset button located in its header. The correct implementation uses styled `div` and `button` elements and must be dynamically injected into the section header after it renders.

**1. Create the `injectHeaderControls` function:** This function builds the controls.

```javascript
  function injectHeaderControls() {
    const sectionHeader = document.querySelector("#mySectionId .section-header");
    if (!sectionHeader || sectionHeader.querySelector(".local-controls-container")) return;

    const controlsContainer = document.createElement("div");
    controlsContainer.className = "local-controls-container";
    controlsContainer.style.cssText = "display: flex; align-items: center; margin-left: auto; gap: 10px;";

    // --- Create Reset Button ---
    const resetButton = document.createElement("button");
    resetButton.innerHTML = "🔄 Reset";
    resetButton.title = "Reset Section to Defaults";
    resetButton.style.cssText = "padding: 4px 8px; font-size: 0.8em; background-color: #dc3545; color: white; border: none; border-radius: 4px; cursor: pointer;";
    
    resetButton.addEventListener("click", (event) => {
        event.stopPropagation();
        if (confirm("Are you sure you want to reset all inputs in this section to their defaults?")) {
            ModeManager.resetState();
        }
    });

    // --- Create Toggle Switch ---
    const stateIndicator = document.createElement("span");
    stateIndicator.textContent = "TARGET";
    stateIndicator.style.cssText = "color: #fff; font-weight: bold; font-size: 0.8em; background-color: rgba(0, 123, 255, 0.5); padding: 2px 6px; border-radius: 4px;";

    const toggleSwitch = document.createElement("div");
    toggleSwitch.style.cssText = "position: relative; width: 40px; height: 20px; background-color: #ccc; border-radius: 10px; cursor: pointer;";
    
    const sliderThumb = document.createElement("div");
    sliderThumb.style.cssText = "position: absolute; top: 2px; left: 2px; width: 16px; height: 16px; background-color: white; border-radius: 50%; transition: transform 0.2s;";

    toggleSwitch.appendChild(sliderThumb);
    
    toggleSwitch.addEventListener("click", (event) => {
        event.stopPropagation();
        const isReference = toggleSwitch.classList.toggle('active');
        if (isReference) {
            sliderThumb.style.transform = "translateX(20px)";
            toggleSwitch.style.backgroundColor = "#28a745";
            stateIndicator.textContent = "REFERENCE";
            stateIndicator.style.backgroundColor = "rgba(40, 167, 69, 0.7)";
            ModeManager.switchMode("reference");
        } else {
            sliderThumb.style.transform = "translateX(0px)";
            toggleSwitch.style.backgroundColor = "#ccc";
            stateIndicator.textContent = "TARGET";
            stateIndicator.style.backgroundColor = "rgba(0, 123, 255, 0.5)";
            ModeManager.switchMode("target");
        }
    });

    controlsContainer.appendChild(resetButton);
    controlsContainer.appendChild(stateIndicator);
    controlsContainer.appendChild(toggleSwitch);
    sectionHeader.appendChild(controlsContainer);
  }
```

**2. Call from `onSectionRendered`:** Ensure this function is called after the `ModeManager` is initialized.

```javascript
  function onSectionRendered() {
    ModeManager.initialize();
    injectHeaderControls(); // This injects the controls into the DOM
    initializeEventHandlers();
    ModeManager.refreshUI();
    calculateAll();
  }
```

### **Pattern 7: Robust UI Synchronization (The `refreshUI` function) - GOLD STANDARD**

A common and critical failure point is an incomplete `refreshUI` function. This leads to a visual mismatch between the UI and the actual state, where slider thumbs or dropdown selections do not update when toggling modes, even though the underlying state is correct.

**CRITICAL:** The `refreshUI` function MUST be robust enough to handle the various ways the rendering engine creates form elements. It must not make assumptions about the DOM structure.

**Key Architectural Principles for `refreshUI`:**

1.  **Scope All Queries**: Always search for elements *within* the section's container (e.g., `sectionElement.querySelector(...)`). Never use `document.querySelector`, which can cause cross-section bugs.
2.  **Handle Wrapped Elements**: The rendering engine may place the `data-field-id` on a wrapper `div` rather than directly on the `<input>` or `<select>` element. The logic must look *inside* the found element to find the actual control.
3.  **Update All Visual Parts**: For complex controls like sliders, update both the slider's `value` (the thumb position) and the separate `textContent` of its text display.

**✅ Gold Standard Implementation (Derived from S08/S10 Fix):**

```javascript
    refreshUI: function() {
      // 1. Get the section's root element to scope all queries.
      const sectionElement = document.getElementById("mySectionId");
      if (!sectionElement) return;

      const currentState = this.getCurrentState();
      const fieldsToSync = ['input_1', 'my_slider', 'my_dropdown']; // List ALL user inputs

      fieldsToSync.forEach(fieldId => {
          const stateValue = currentState.getValue(fieldId);
          if (stateValue === undefined || stateValue === null) return;

          // 2. Find the container element using the scoped query.
          const element = sectionElement.querySelector(`[data-field-id="${fieldId}"]`);
          if (!element) return;
          
          // 3. Robustly find the actual input control, which may be the element itself or a child.
          const slider = element.matches('input[type="range"]') ? element : element.querySelector('input[type="range"]');
          const dropdown = element.matches('select') ? element : element.querySelector('select');
          
          // 4. Update the correct element based on what was found.
          if (slider) {
              const numericValue = window.TEUI.parseNumeric(stateValue, 0);
              slider.value = numericValue;
              
              // Also find and update the separate text display for the slider.
              const display = sectionElement.querySelector(`[data-display-for="${fieldId}"]`);
              if (display) {
                  // Read the value back from the slider itself to GUARANTEE visual sync
                  const sliderCurrentValue = slider.value;
                  if (fieldId.startsWith('g_') || fieldId.startsWith('h_')) { // Example for % sliders
                      display.textContent = `${sliderCurrentValue}%`;
                  } else { // Example for coefficient sliders
                      display.textContent = parseFloat(sliderCurrentValue).toFixed(2);
                  }
              }
          } else if (dropdown) {
              dropdown.value = stateValue;
          } else if (element.hasAttribute('contenteditable')) {
              element.textContent = stateValue;
          }
      });
    },
```

### **Note on Default State Values**

The values set in `TargetState.setDefaults()` and `ReferenceState.setDefaults()` are the foundation for all initial calculations.

-   **Requirement:** These default values **MUST** perfectly match the `value` property defined for each corresponding field in the section's `sectionRows` layout object.
-   **Impact of Mismatch:** If the default state and the layout definition are not aligned, the UI may display one value while the calculation engine uses another, leading to incorrect results on initial page load. Always verify this alignment. 