# 🤖 **AI-FRIENDLY DUAL-STATE PATTERNS (CORRECTED)**

*Battle-tested patterns from Section 10 - mechanical checklist for flawless dual-state implementation*

## 🎯 **Core Principle: ALWAYS-DISPLAY + DUAL-LISTENERS + DUAL-WRITE**

After 8 hours refining Section 10, we discovered the **essential patterns** for dual-state success:

1. **ALWAYS-DISPLAY**: Critical fields show in both modes (nGains, PHPP, utilization results)
2. **DUAL-LISTENERS**: Cross-section dependencies need prefixed listeners (`target_*`, `ref_*`)
3. **DUAL-WRITE**: Event handlers write to prefixed + global (Target mode only)
4. **MODE-AWARE HELPERS**: Consistent reading with `getFieldValue()`, `getNumericValue()`

---

## ✅ **MECHANICAL CHECKLIST FOR DUAL-STATE IMPLEMENTATION**

*Follow this exact sequence. Check off each step. Zero interpretation required.*

### **□ STEP 1: Add ModeManager Structure**

**Find**: `window.TEUI.SectionModules.sectXX = (function () {`

**Add After**:
```javascript
  //==========================================================================
  // MODE MANAGER (Dual-State Support)
  //==========================================================================
  const ModeManager = {
    currentMode: "target",
    switchMode: function(mode) {
      if (mode !== "target" && mode !== "reference") return;
      if (this.currentMode === mode) return;
      
      this.currentMode = mode;
      console.log(`SXX: Switched to ${mode.toUpperCase()} mode`);
      
      if (mode === "reference") {
        this.setReferenceDefaults();
      }
      
      this.refreshUI();
    },

    initializePrefixedState: function() {
      const fields = getFields();
      
      Object.keys(fields).forEach(rowId => {
        const row = fields[rowId];
        if (row.cells) {
          Object.keys(row.cells).forEach(cellKey => {
            const cell = row.cells[cellKey];
            if (cell.fieldId && cell.value !== undefined) {
              window.TEUI.StateManager.setValue(`target_${cell.fieldId}`, cell.value, "default");
              window.TEUI.StateManager.setValue(`ref_${cell.fieldId}`, cell.value, "default");
            }
          });
        }
      });
      
      console.log("SXX: Prefixed state initialized from field definitions");
    },

    setReferenceDefaults: function() {
      // TODO: Define section-specific Reference defaults here
      const referenceDefaults = {
        // Example: ref_d_XX: "code_minimum_value",
      };

      Object.entries(referenceDefaults).forEach(([fieldId, defaultValue]) => {
        if (!window.TEUI.StateManager.getValue(fieldId)) {
          window.TEUI.StateManager.setValue(fieldId, defaultValue, "default");
        }
      });
      
      console.log("SXX: Reference defaults set");
    },

    refreshUI: function() {
      const prefix = this.currentMode === "target" ? "target_" : "ref_";
      const sectionElement = document.getElementById("sectionElementId"); // UPDATE THIS
      if (!sectionElement) return;
      
      const editableFields = sectionElement.querySelectorAll("[data-field-id]");
      editableFields.forEach((field) => {
        const fieldId = field.getAttribute("data-field-id");
        const stateValue = window.TEUI.StateManager.getValue(`${prefix}${fieldId}`);
        
        if (stateValue !== null && stateValue !== undefined) {
          if (field.tagName === "SELECT") {
            field.value = stateValue;
          } else if (field.type === "range") {
            field.value = stateValue;
            const displayElement = document.querySelector(`[data-display-for="${fieldId}"]`);
            if (displayElement) {
              displayElement.textContent = `${stateValue}%`;
            }
          } else if (field.hasAttribute("contenteditable")) {
            field.textContent = stateValue;
          }
        }
      });
      
      setTimeout(() => calculateAll(), 50);
    }
  };

  window.TEUI.sectXX = window.TEUI.sectXX || {};
  window.TEUI.sectXX.ModeManager = ModeManager;
```

### **□ STEP 2: Add Mode-Aware Helper Functions**

**Find**: Existing helper functions section OR add before field definitions

**Add**:
```javascript
  //==========================================================================
  // MODE-AWARE HELPERS (Dual-State Support)
  //==========================================================================
  function getNumericValue(fieldId, defaultValue = 0) {
    const prefix = ModeManager.currentMode === "target" ? "target_" : "ref_";
    let value = window.TEUI.StateManager.getValue(`${prefix}${fieldId}`);
    
    if (value === null || value === undefined) {
      value = window.TEUI.StateManager.getValue(fieldId);
    }
    
    return window.TEUI.parseNumeric(value, defaultValue);
  }

  function getFieldValue(fieldId, defaultValue = "") {
    const prefix = ModeManager.currentMode === "target" ? "target_" : "ref_";
    let value = window.TEUI.StateManager.getValue(`${prefix}${fieldId}`);
    
    if (value === null || value === undefined) {
      value = window.TEUI.StateManager.getValue(fieldId);
    }
    
    return value === null || value === undefined ? defaultValue : value;
  }
```

### **□ STEP 3: Update setCalculatedValue Function**

**Find**: `function setCalculatedValue(fieldId, rawValue, format = "number") {`

**Replace ENTIRE function with**:
```javascript
  function setCalculatedValue(fieldId, rawValue, format = "number") {
    // Handle N/A for non-finite numbers
    if (!isFinite(rawValue) || rawValue === null || rawValue === undefined) {
      const prefix = ModeManager.currentMode === "target" ? "target_" : "ref_";
      window.TEUI.StateManager?.setValue(`${prefix}${fieldId}`, "N/A", "calculated");
      
      if (ModeManager.currentMode === "target") {
        window.TEUI.StateManager?.setValue(fieldId, "N/A", "calculated");
      }
      
      // ✅ ALWAYS-DISPLAY: Critical fields show in both modes
      const alwaysDisplayFieldsNA = fieldId.startsWith("m_") || 
                                   fieldId === "e_80" ||
                                   fieldId === "e_81" ||
                                   fieldId === "g_80" ||
                                   fieldId === "i_80" ||
                                   fieldId === "g_81" || 
                                   fieldId === "i_81" ||
                                   fieldId === "i_82";
      const shouldUpdateDOMNA = ModeManager.currentMode === "target" || alwaysDisplayFieldsNA;
      
      if (shouldUpdateDOMNA) {
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
    }

    const formattedValue = formatNumber(rawValue, format);

    if (window.TEUI?.StateManager?.setValue) {
      const prefix = ModeManager.currentMode === "target" ? "target_" : "ref_";
      window.TEUI.StateManager.setValue(
        `${prefix}${fieldId}`,
        rawValue.toString(),
        "calculated",
      );
      
      if (ModeManager.currentMode === "target") {
        window.TEUI.StateManager.setValue(
          fieldId,
          rawValue.toString(),
          "calculated",
        );
      }
    }

    // ✅ ALWAYS-DISPLAY: Critical fields show in both modes
    const alwaysDisplayFields = fieldId.startsWith("m_") || 
                               fieldId === "e_80" ||
                               fieldId === "e_81" ||
                               fieldId === "g_80" ||
                               fieldId === "i_80" ||
                               fieldId === "g_81" || 
                               fieldId === "i_81" ||
                               fieldId === "i_82";
    const shouldUpdateDOM = ModeManager.currentMode === "target" || alwaysDisplayFields;
    
    if (shouldUpdateDOM) {
      const element = document.querySelector(`[data-field-id="${fieldId}"]`);
      if (element) {
        element.textContent = formattedValue;
        element.classList.toggle("negative-value", rawValue < 0);
      }
    }
  }
```

**Note**: Update the `alwaysDisplayFields` list with section-specific critical fields that should show in both modes.

### **□ STEP 4: Update Dropdown Event Handlers**

**Find**: 
```javascript
dropdown.addEventListener("change", function () {
  const fieldId = this.getAttribute("data-field-id");
  if (!fieldId) return;
  
  window.TEUI.StateManager.setValue(fieldId, this.value, "user-modified");
  calculateAll();
});
```

**Replace With**:
```javascript
dropdown.addEventListener("change", function () {
  const fieldId = this.getAttribute("data-field-id");
  if (!fieldId) return;

  // ✅ DUAL-WRITE: Write to prefixed state + global (Target mode only)
  const prefix = ModeManager.currentMode === "target" ? "target_" : "ref_";
  if (window.TEUI?.StateManager?.setValue) {
    window.TEUI.StateManager.setValue(
      `${prefix}${fieldId}`,
      this.value,
      "user-modified",
    );
    
    if (ModeManager.currentMode === "target") {
      window.TEUI.StateManager.setValue(
        fieldId,
        this.value,
        "user-modified",
      );
    }
  }

  calculateAll();
});
```

### **□ STEP 5: Update Slider Event Handlers**

**Find**: 
```javascript
slider.addEventListener("input", function () {
  const fieldId = this.getAttribute("data-field-id");
  if (!fieldId) return;
  
  window.TEUI.StateManager.setValue(fieldId, this.value, "user-modified");
  calculateAll();
});
```

**Replace With**:
```javascript
slider.addEventListener("input", function () {
  const fieldId = this.getAttribute("data-field-id");
  if (!fieldId) return;

  // ✅ DUAL-WRITE: Write to prefixed state + global (Target mode only)
  const prefix = ModeManager.currentMode === "target" ? "target_" : "ref_";
  if (window.TEUI?.StateManager?.setValue) {
    window.TEUI.StateManager.setValue(
      `${prefix}${fieldId}`,
      this.value,
      "user-modified",
    );
    
    if (ModeManager.currentMode === "target") {
      window.TEUI.StateManager.setValue(
        fieldId,
        this.value,
        "user-modified",
      );
    }
  }

  // Update display value
  const displayElement = document.querySelector(`[data-display-for="${fieldId}"]`);
  if (displayElement) {
    displayElement.textContent = `${this.value}%`;
  }

  setTimeout(calculateAll, 100);
});
```

### **□ STEP 6: Update Editable Field Blur Handlers**

**Find**:
```javascript
field.addEventListener("blur", function() {
  const fieldId = this.getAttribute("data-field-id");
  const value = this.textContent.trim();
  window.TEUI.StateManager.setValue(fieldId, value, "user-modified");
  calculateAll();
});
```

**Replace With**:
```javascript
field.addEventListener("blur", function() {
  const fieldId = this.getAttribute("data-field-id");
  const value = this.textContent.trim();

  // ✅ DUAL-WRITE: Write to prefixed state + global (Target mode only)
  const prefix = ModeManager.currentMode === "target" ? "target_" : "ref_";
  if (window.TEUI?.StateManager?.setValue) {
    window.TEUI.StateManager.setValue(
      `${prefix}${fieldId}`,
      value,
      "user-modified",
    );
    
    if (ModeManager.currentMode === "target") {
      window.TEUI.StateManager.setValue(
        fieldId,
        value,
        "user-modified",
      );
    }
  }

  calculateAll();
});
```

### **□ STEP 7: Add Dual Calculation Engines**

**Find**: `function calculateAll() {`

**Replace With**:
```javascript
  function calculateAll() {
    calculateTargetModel();
    calculateReferenceModel();
  }

  function calculateTargetModel() {
    const originalMode = ModeManager.currentMode;
    ModeManager.currentMode = "target";
    
    // Move existing calculation logic here
    // ... existing section calculations ...
    
    ModeManager.currentMode = originalMode;
  }

  function calculateReferenceModel() {
    const originalMode = ModeManager.currentMode;
    ModeManager.currentMode = "reference";
    
    // Copy of calculation logic for Reference mode
    // ... same logic as calculateTargetModel but in Reference mode ...
    
    ModeManager.currentMode = originalMode;
  }
```

### **□ STEP 8: Add Dual State Listeners for Cross-Section Dependencies**

**Find**: `addStateManagerListeners` function

**Update**: Add dual listeners for any field that comes from other sections:

```javascript
  function addStateManagerListeners() {
    if (!window.TEUI?.StateManager) return;

    // ✅ DUAL-LISTENERS: Critical for cross-section dependencies
    // Example: Climate zone from Section 03
    window.TEUI.StateManager.addListener("target_j_19", function () {
      if (ModeManager.currentMode === "target") {
        calculateAll();
      }
    });
    
    window.TEUI.StateManager.addListener("ref_j_19", function () {
      if (ModeManager.currentMode === "reference") {
        calculateAll();
      }
    });
    
    // Keep global listener for backward compatibility
    window.TEUI.StateManager.addListener("j_19", function () {
      calculateAll();
    });

    // Add more dual listeners for other cross-section dependencies...
  }
```

### **□ STEP 9: Update Initialization Sequence**

**Find**: `onSectionRendered` function

**Replace With**:
```javascript
  function onSectionRendered() {
    initializeEventHandlers();
    setupDropdownDefaults();
    registerWithStateManager();
    registerWithIntegrator();
    addStateManagerListeners();

    // ✅ CRITICAL SEQUENCE: Initialize prefixed state FIRST
    ModeManager.initializePrefixedState();
    
    // ✅ THEN: Set Reference-specific defaults
    ModeManager.setReferenceDefaults();
    
    // ✅ FINALLY: Calculate with populated state
    calculateAll();
  }
```

### **□ STEP 10: Expose ModeManager in Return Statement**

**Find**: Section's return statement

**Add**: `ModeManager: ModeManager,` to the returned object

### **□ STEP 11: Define Section-Specific Reference Defaults**

**In Step 1's `setReferenceDefaults` function**, replace the TODO with actual field defaults:

```javascript
const referenceDefaults = {
  // For Section 10 example:
  ref_d_73: "7.50",      // Door area (standard)
  ref_e_73: "Average",   // Door orientation (average)
  ref_f_73: "0.40",      // Door SHGC (code maximum)
  ref_g_73: "0",         // Winter shading (none)
  ref_h_73: "50",        // Summer shading (moderate)
  ref_d_80: "NRC 40%",   // Gains method (code standard)
  // ... add all section fields with appropriate Reference values
};
```

### **□ STEP 12: Update Always-Display Fields List**

**In Step 3's `setCalculatedValue` function**, update the `alwaysDisplayFields` list with section-specific fields that should show in both modes:

```javascript
// Section 10 example:
const alwaysDisplayFields = fieldId.startsWith("m_") ||    // nGains 
                           fieldId === "e_80" ||           // Total gains
                           fieldId === "e_81" ||           // Total gains
                           fieldId === "g_80" ||           // Utilization %
                           fieldId === "i_80" ||           // Usable gains
                           fieldId === "g_81" ||           // PHPP %
                           fieldId === "i_81" ||           // PHPP gains
                           fieldId === "i_82";             // Unusable gains
```

---

## ✅ **VERIFICATION CHECKLIST**

After implementing all 12 steps, verify:

- **□ Target Mode**: All existing functionality works exactly as before
- **□ Reference Mode**: User inputs write to `ref_*` state and trigger calculations
- **□ Mode Switching**: Toggling shows different values (proves isolation)
- **□ Cross-Section**: Changes in other sections trigger recalculation in both modes
- **□ Always-Display**: Critical fields show results in both Target and Reference modes
- **□ Error Handling**: Invalid inputs display properly in both modes

---

## 🎯 **SUCCESS CRITERIA**

**Section is complete when:**
1. ✅ All 12 checklist steps implemented
2. ✅ Target mode works exactly as before (no regression)
3. ✅ Reference mode shows different values from Target mode
4. ✅ Cross-section dependencies work in both modes
5. ✅ Critical calculation results display in both modes

**Time Target**: 2-3 hours per section (vs 8 hours for S10 discovery)

---

## 🚨 **CRITICAL SUCCESS FACTORS**

1. **Follow the checklist mechanically** - don't interpret or modify
2. **Test after each step** - catch issues early
3. **Always-display fields are section-specific** - identify calculation results that users need to see
4. **Reference defaults should be realistic** - use actual code minimums, not contrasting values
5. **Dual listeners for ALL cross-section dependencies** - any field from another section needs `target_*` and `ref_*` listeners

This checklist eliminates the hand-holding and ensures mechanical, reliable dual-state implementation for any section.