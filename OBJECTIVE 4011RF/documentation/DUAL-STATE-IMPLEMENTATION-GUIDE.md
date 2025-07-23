# 🏆 TEUI 4.011RF - DUAL-STATE ARCHITECTURE GUIDE (v3)

**Status**: ✅ **Gold Standard** | **Updated**: July 10, 2025  
**Mandate**: This document outlines the **sole approved pattern** for implementing dual-state (Target/Reference) functionality. It is based on the successful, self-contained architecture proven in Section 03. All previous guides are superseded.

---

### URGENT: Instructions to Repair `4011-Section10.js`

The `4011-Section10.js` file has been corrupted, leading to syntax errors and UI synchronization failures. To restore functionality, the following components must be replaced with their corrected versions:

1.  **`TargetState` and `ReferenceState` Defaults:** The default values were misaligned with the UI component definitions.
2.  **`ModeManager` Object:** The existing manager needs to be replaced with a version containing a robust `refreshUI` function that correctly handles all input types (editable divs, dropdowns, and sliders) to ensure the UI visually matches the underlying state after a mode switch.
3.  **`sectionRows` Object:** The entire layout definition object is syntactically broken and must be replaced.

**Action:** Replace the corresponding code blocks in `OBJECTIVE 4011RF/sections/4011-Section10.js` with the code provided below.

---

#### 1. Corrected `TargetState` and `ReferenceState` Default Blocks

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

#### 2. Corrected `ModeManager` Object

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
    refreshUI: function () {
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
              element.value = stateValue;
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

#### 3. Corrected `sectionRows` Object

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

## 🏛️ **Architectural Mandate: The Self-Contained State Module**

The TEUI calculator must support multiple, isolated calculation states (e.g., Target Design, Reference Building) that can be expanded in the future without complex refactoring.

To achieve this, each section requiring dual-state functionality **MUST** be implemented as a **Self-Contained State Module**.

### **Core Principles:**

1.  **Encapsulation**: Each section manages its own `TargetState` and `ReferenceState` internally. It does not know or care about the implementation details of other sections.
2.  **State Isolation**: The `TargetState` and `ReferenceState` are separate JavaScript objects. It is architecturally impossible for one to contaminate the other.
3.  **Persistence**: Each internal state (`TargetState`, `ReferenceState`) is responsible for its own `localStorage` persistence, ensuring user inputs are saved independently for each mode.
4.  **Clear Facade**: A `ModeManager` object acts as the single, clean public interface for the section. All interactions (getting/setting values, switching modes) go through it.
5.  **Legacy Bridge**: The `ModeManager`'s `setValue` function acts as a "bridge" to the old global `StateManager` for backward compatibility, but only when in Target mode. This is a temporary measure until all sections are refactored.

### **Visual Diagram**

```mermaid
graph TD
    subgraph Section Module (e.g., sect03)
        UI -- "ModeManager.setValue('i_21', 35)" --> ModeManager
        
        subgraph ModeManager
            direction LR
            A[setValue]
            B[getValue]
            C[switchMode]
        end

        ModeManager -- "If currentMode is 'target'" --> TargetState["🎯 TargetState Object<br>(values, listeners, localStorage)"]
        ModeManager -- "If currentMode is 'reference'" --> ReferenceState["📋 ReferenceState Object<br>(values, listeners, localStorage)"]
    end

    ModeManager -- "Bridge for legacy compatibility<br>(Target mode ONLY)" --> GlobalStateManager["Global window.TEUI.StateManager"]

```
This diagram illustrates how the `ModeManager` abstracts away the complexity of the dual-state system, providing a simple API while ensuring perfect state isolation internally.

---

## 🔧 **The Gold Standard Implementation Pattern**

The following patterns, derived from the working `4011-Section03.js`, are to be precisely replicated for all dual-state sections.

### **Pattern 1: Internal State Objects**

At the top of the section's IIFE, define two distinct objects to manage the state for each mode. They must include methods for getting, setting, initializing, and persisting their own state.

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
      // Define the default values for ALL user inputs in this section for Target mode
      this.state = {
        'input_1': 'default_value_A',
        'input_2': '50' 
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
        'input_1': 'default_value_B', // Different defaults for reference
        'input_2': '75' 
      };
    },
    saveState: function() {
      localStorage.setItem('SXX_REFERENCE_STATE', JSON.stringify(this.state));
    },
    // ... rest of the methods
  };
```

### **Pattern 2: The ModeManager Facade**

This object is the public API for your section. It's responsible for managing the active state and ensuring the UI is in sync.

```javascript
  const ModeManager = {
    currentMode: "target",

    initialize: function() {
      TargetState.initialize();
      ReferenceState.initialize();
    },

    switchMode: function(mode) {
      if (this.currentMode === mode || (mode !== 'target' && mode !== 'reference')) return;
      this.currentMode = mode;
      console.log(`SXX: Switched to ${mode.toUpperCase()} mode`);
      
      this.refreshUI();
      calculateAll(); // Trigger a recalculation for the new mode
    },

    getCurrentState: function() {
      return this.currentMode === "target" ? TargetState : ReferenceState;
    },
    
    // Public method for getting the active state's value
    getValue: function(fieldId) {
      return this.getCurrentState().getValue(fieldId);
    },

    // Public method for setting the active state's value
    setValue: function(fieldId, value, source = "user") {
      this.getCurrentState().setValue(fieldId, value, source);
      
      // BRIDGE: For backward compatibility, sync Target changes to the global StateManager.
      if (this.currentMode === 'target') {
        window.TEUI.StateManager.setValue(fieldId, value, 'user-modified');
      }
    },

    refreshUI: function() {
      // ... (See Pattern 4) ...
    }
  };
```

### **Pattern 3: Robust UI Event Handling**

Use a single, delegated event handler for each event type (`change`, `input`, `blur`). The handler should robustly identify the `data-field-id` and call the `ModeManager.setValue` method.

```javascript
  function handleUserInput(event) {
    const target = event.target;
    // Robustly find the element with the data-field-id, which could be the target or a parent.
    const fieldElement = target.closest('[data-field-id]');
    if (!fieldElement) return;

    const fieldId = fieldElement.getAttribute('data-field-id');
    const value = target.matches('input[type="range"]') ? target.value : target.textContent.trim();
    
    // ALWAYS use the facade to set the value.
    ModeManager.setValue(fieldId, value);
    
    // Update slider text display live if needed.
    if (target.matches('input[type="range"]')) {
      const display = target.nextElementSibling; // Robustly find display as sibling
      if (display) {
        display.textContent = `${value}%`;
      }
    }
    
    calculateAll();
  }

  function initializeEventHandlers() {
    const sectionElement = document.getElementById("mySectionId");
    if (!sectionElement) return;
    
    sectionElement.addEventListener('change', handleUserInput);
    sectionElement.addEventListener('input', handleUserInput);
    sectionElement.addEventListener('blur', handleUserInput, true);
    // ... etc. ...
  }
```

### **Pattern 4: UI Synchronization on Mode Switch**

The `refreshUI` function is critical. It must read from the **current state object** and update all inputs, including complex ones like sliders.

```javascript
    refreshUI: function() {
      const sectionElement = document.getElementById("mySectionId");
      const currentState = this.getCurrentState();
      
      const fieldsToSync = ['input_1', 'input_2_slider']; // List of all inputs

      fieldsToSync.forEach(fieldId => {
          const fieldWrapper = sectionElement.querySelector(`[data-field-id="${fieldId}"]`);
          if (!fieldWrapper) return;

          const stateValue = currentState.getValue(fieldId);
          
          if (stateValue !== undefined && stateValue !== null) {
              const slider = fieldWrapper.querySelector('input[type="range"]');

              if (slider) {
                  slider.value = stateValue;
                  const display = slider.nextElementSibling;
                  if (display) display.textContent = `${stateValue}%`;
              } else if (fieldWrapper.isContentEditable) {
                  fieldWrapper.textContent = stateValue;
              } else if (fieldWrapper.tagName === 'SELECT') {
                  fieldWrapper.value = stateValue;
              }
          }
      });
    }
```

### **Pattern 5: Section Initialization (`onSectionRendered`)**

This function ties everything together.

```javascript
  function onSectionRendered() {
    ModeManager.initialize();      // 1. Initialize the internal states
    initializeEventHandlers();     // 2. Set up event handlers
    ModeManager.refreshUI();       // 3. Sync UI to the default (Target) state
    calculateAll();                // 4. Run initial calculations
  }
```

By following these five patterns, each section becomes a robust, scalable, and maintainable component that perfectly isolates its states while remaining compatible with the legacy parts of the application. 

---
### **Pattern 6: The Section-Local Toggle (Gold Standard UI)**

To maintain a consistent user experience, each dual-state section should have its own toggle switch located in its header. Do not use standard HTML buttons. The correct implementation uses styled `div` elements and must be dynamically injected into the section header after it renders.

**1. Create the `injectLocalToggle` function:** This function builds the switch element by element.

```javascript
  function injectLocalToggle() {
    const sectionHeader = document.querySelector("#mySectionId .section-header");
    if (!sectionHeader || sectionHeader.querySelector(".local-toggle-container")) return;

    const toggleContainer = document.createElement("div");
    toggleContainer.className = "local-toggle-container";
    toggleContainer.style.cssText = "display: flex; align-items: center; margin-left: auto; gap: 10px;";

    const stateIndicator = document.createElement("span");
    stateIndicator.textContent = "TARGET";
    stateIndicator.style.cssText = "color: #fff; font-weight: bold; font-size: 0.8em; background-color: rgba(0, 123, 255, 0.5); padding: 2px 6px; border-radius: 4px;";

    const toggleSwitch = document.createElement("div");
    toggleSwitch.style.cssText = "position: relative; width: 40px; height: 20px; background-color: #ccc; border-radius: 10px; cursor: pointer;";
    
    const slider = document.createElement("div");
    slider.style.cssText = "position: absolute; top: 2px; left: 2px; width: 16px; height: 16px; background-color: white; border-radius: 50%; transition: transform 0.2s;";

    toggleSwitch.appendChild(slider);
    
    // 2. Add the click event listener to handle mode switching and UI updates
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

    toggleContainer.appendChild(stateIndicator);
    toggleContainer.appendChild(toggleSwitch);
    sectionHeader.appendChild(toggleContainer);
  }
```

**3. Call from `onSectionRendered`:** Ensure this function is called after the `ModeManager` is initialized.

```javascript
  function onSectionRendered() {
    ModeManager.initialize();
    injectLocalToggle(); // This injects the switch into the DOM
    initializeEventHandlers();
    ModeManager.refreshUI();
    calculateAll();
  }
```

### **Pattern 7: Robust UI Synchronization (The `refreshUI` function)**

A common failure point is an incomplete `refreshUI` function that doesn't account for all input types, especially sliders with separate text displays. This leads to a mismatch between the UI and the actual state, causing incorrect calculations on load.

**CRITICAL:** The `refreshUI` function MUST explicitly find and update the `value` of sliders and the `textContent` of their associated display elements.

```javascript
    refreshUI: function() {
      const sectionElement = document.getElementById("mySectionId");
      if (!sectionElement) return;

      const currentState = this.getCurrentState();
      const fieldsToSync = ['input_1', 'my_slider', 'my_dropdown']; // List ALL user inputs

      fieldsToSync.forEach(fieldId => {
          const stateValue = currentState.getValue(fieldId);
          if (stateValue === undefined || stateValue === null) return;

          const element = sectionElement.querySelector(`[data-field-id="${fieldId}"]`);
          if (!element) return;
          
          // 1. Handle Sliders and their text displays explicitly
          if (element.type === 'range') {
              element.value = stateValue;
              const display = document.querySelector(`[data-display-for="${fieldId}"]`);
              if (display) {
                  // Add logic for different formats, e.g., percentages vs. decimals
                  if (fieldId.includes('percent')) {
                      display.textContent = `${stateValue}%`;
                  } else {
                      display.textContent = parseFloat(stateValue).toFixed(2);
                  }
              }
          // 2. Handle contenteditables
          } else if (element.hasAttribute('contenteditable')) {
              element.textContent = stateValue;
          // 3. Handle dropdowns
          } else if (element.tagName === 'SELECT') {
              element.value = stateValue;
          }
      });
    },
```

### **Note on Default State Values**

The values set in `TargetState.setDefaults()` and `ReferenceState.setDefaults()` are the foundation for all initial calculations.

-   **Requirement:** These default values **MUST** perfectly match the `value` property defined for each corresponding field in the section's `sectionRows` layout object.
-   **Impact of Mismatch:** If the default state and the layout definition are not aligned, the UI may display one value while the calculation engine uses another, leading to incorrect results on initial page load. Always verify this alignment. 