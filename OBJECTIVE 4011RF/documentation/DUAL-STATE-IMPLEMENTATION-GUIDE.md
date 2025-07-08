# 🏆 TEUI 4.011RF - DUAL-STATE ARCHITECTURE GUIDE (v3)

**Status**: ✅ **Gold Standard** | **Updated**: July 10, 2025  
**Mandate**: This document outlines the **sole approved pattern** for implementing dual-state (Target/Reference) functionality. It is based on the successful, self-contained architecture proven in Section 03. All previous guides are superseded.

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