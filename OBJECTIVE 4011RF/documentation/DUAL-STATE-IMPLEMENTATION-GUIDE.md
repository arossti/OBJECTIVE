# 🏆 TEUI 4.011RF - DUAL-STATE ARCHITECTURE GUIDE (v3)

**Status**: ✅ **Gold Standard** | **Updated**: July 23, 2025  
**Mandate**: This document outlines the **sole approved pattern** for implementing dual-state (Target/Reference) functionality. It is based on the successful, self-contained architecture proven in Section 03, 08, and 10. All previous guides are superseded.

Refactor workplan for July 24, 2025, Section11:

Work Plan: Refactor 4011-Section11.js to Dual-State Architecture
Objective: Migrate Section 11 to the self-contained dual-state module pattern, ensuring complete state isolation between Target and Reference modes, consistent with the patterns in the DUAL-STATE-IMPLEMENTATION-GUIDE.md.
Task 1: Project Documentation
[ ] Update README.md to reflect the successful refactoring of S03, S08, and S10.
Task 2: File Preparation
[ ] Create a backup of the existing OBJECTIVE 4011RF/sections/4011-Section11.js file, naming it 4011-Section11-BACKUP.js.
[ ] Create a clean working copy named 4011-Section11.js to begin the refactor.
Task 3: Implement Core Dual-State Structure
[ ] Add the TargetState and ReferenceState objects to the top of the file.
[ ] Define the setDefaults() values for both states. TargetState defaults should match the current value properties in the sectionRows object. ReferenceState defaults will need to be defined based on code minimums or appropriate baseline values.
[ ] Implement the ModeManager facade, including the initialize, switchMode, getCurrentState, getValue, setValue, and resetState functions.
Task 4: Integrate Header Controls
[ ] Add the injectHeaderControls function to dynamically create and insert the Target/Reference toggle switch and the Reset button into the section header.
[ ] Ensure the controls are correctly styled and call the appropriate ModeManager.switchMode() and ModeManager.resetState() functions.
Task 5: Adapt UI Synchronization Logic
[ ] Implement the refreshUI function within the ModeManager.
[ ] Create the fieldsToSync array, listing the fieldId of every user-editable input in Section 11 (e.g., editable text fields, dropdowns, sliders).
[ ] Crucially, use the proven nextElementSibling pattern for updating the text labels of any sliders.
Task 6: Refactor Calculation and Event Handlers
[ ] Modify the initializeEventHandlers function to use ModeManager.setValue() when a user changes an input.
[ ] Audit all calculation helper functions (e.g., getNumericValue, setCalculatedValue) to ensure they read from and write to the state via the ModeManager facade.
Task 7: Final Integration and Cleanup
[ ] Update the onSectionRendered function to orchestrate the new initialization sequence: ModeManager.initialize(), injectHeaderControls(), initializeEventHandlers(), ModeManager.refreshUI(), and calculateAll().
[ ] Expose the ModeManager on the global window.TEUI.sect11 object for potential cross-section communication.
This plan covers all the necessary steps and incorporates the key lessons learned from our work on Section 10. Does this look like a solid plan for tomorrow?

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
      // These defaults MUST match the 'value' properties in the section's layout definition
      this.state = {
        'input_field_1': 'default_text_value',
        'dropdown_field_1': 'option_a',
        'slider_field_1': '50', // Sliders are often stored as strings
        // ... add all other user-modifiable fields for this section
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
      // These defaults should represent the code-minimum or baseline values for the Reference model.
      this.state = {
        'input_field_1': 'reference_text_value',
        'dropdown_field_1': 'option_b',
        'slider_field_1': '25',
        // ... add all other user-modifiable fields for this section
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
      const sectionElement = document.getElementById("mySectionId"); // Replace with actual section ID
      if (!sectionElement) return;

      const currentState = this.getCurrentState();
      // List ALL user-modifiable fields in this section
      const fieldsToSync = ['input_field_1', 'dropdown_field_1', 'slider_field_1']; 

      fieldsToSync.forEach(fieldId => {
          const stateValue = currentState.getValue(fieldId);
          if (stateValue === undefined || stateValue === null) return;

          // (Refer to Pattern 7 for the full Gold Standard implementation of the update logic)
          const element = sectionElement.querySelector(`[data-field-id="${fieldId}"]`);
          if (!element) return;
          
          if (element.hasAttribute('contenteditable')) {
              element.textContent = stateValue;
          } else if (element.tagName === 'SELECT') {
              element.value = stateValue;
          }
          // ... etc. for sliders and other inputs
      });
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

A common and critical failure point is an incomplete `refreshUI` function. This leads to a visual mismatch where slider thumbs or dropdowns do not update when toggling modes. The root cause is often a fragile DOM query that fails to find the correct UI element to update.

**CRITICAL:** The query logic must be robust. Previous attempts using class-based queries (`.closest('.slider-container')`) have proven unreliable due to inconsistencies in how different sections are defined in their `sectionRows` objects.

**The architecturally sound and proven pattern, taken directly from the working Section 08, is to use the `nextElementSibling` property.** This relies on the simple, consistent assumption that the `FieldManager` renders the slider's text display element immediately after its `<input type="range">` element.

**Key Architectural Principles for `refreshUI`:**

1.  **Scope All Queries**: Always search for elements *within* the section's container (e.g., `sectionElement.querySelector(...)`).
2.  **Handle Wrapped Elements**: Robustly find the `input` or `select` element, which may be the element with the `data-field-id` or a child of it.
3.  **Use `nextElementSibling` for Sliders**: This is the most reliable method for finding a slider's associated text label, avoiding fragile class-based dependencies.

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
          
          // 3. Robustly find the actual input control.
          const slider = element.matches('input[type="range"]') ? element : element.querySelector('input[type="range"]');
          const dropdown = element.matches('select') ? element : element.querySelector('select');
          
          if (slider) {
              const numericValue = window.TEUI.parseNumeric(stateValue, 0);
              slider.value = numericValue;
              
              // 4. CRITICAL: Use `nextElementSibling` to find the display element. This is the most robust pattern.
              const display = slider.nextElementSibling;
              if (display) {
                  const displayValue = window.TEUI.parseNumeric(stateValue, 0);
                  if (fieldId.startsWith('g_') || fieldId.startsWith('h_')) { // Example for % sliders
                      display.textContent = `${displayValue}%`;
                  } else { // Example for coefficient sliders
                      display.textContent = parseFloat(displayValue).toFixed(2);
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