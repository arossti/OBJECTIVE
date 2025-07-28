# 🏆 TEUI 4.011RF - DUAL-STATE ARCHITECTURE GUIDE (v3)

**Status**: ✅ **Gold Standard** | **Updated**: July 24, 2025  
**Mandate**: This document outlines the **sole approved pattern** for implementing dual-state (Target/Reference) functionality. It is based on the successful, self-contained architecture proven in Section 03, 08, 10, and 11. Includes Sequential Refactoring Strategy for complete Pattern A migration. All previous guides are superseded.

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

## 🏛️ **ARCHITECTURAL MANDATE: The Self-Contained State Module (FINAL STANDARD)**

**⚠️ CRITICAL DECREE**: As of July 2025, **Pattern A (Self-Contained State Objects)** is the **SOLE APPROVED APPROACH** for dual-state implementation. All previous patterns using global prefixed state (target*, ref*) are **DEPRECATED** and should be migrated to this standard.

---

## 🚨 **CRITICAL: PATTERN B CONTAMINATION DETECTION & ELIMINATION**

**⚠️ URGENT WARNING**: Pattern B contamination has caused **multiple refactor failures** (S12 attempts 1-7). This section is **MANDATORY** reading before any dual-state implementation.

### **🔍 Pattern B Contamination Symptoms**

- **Dropdown Blanking**: Dropdowns go blank after user edits
- **State Persistence Issues**: Values don't persist across mode toggles
- **ComponentBridge Conflicts**: `target_` prefixed values created but not accessible
- **Mixed Architecture**: Some functions use Pattern A, others use Pattern B

### **🔍 How to Detect Pattern B Contamination**

**MANDATORY PRE-REFACTOR SCAN**:

```bash
# Search for Pattern B contamination in target section
grep -n "target_\|ref_" sections/4011-SectionXX.js

# Look for these TOXIC PATTERNS:
```

#### **❌ TOXIC PATTERN 1: Prefixed External Dependencies**

```javascript
// ❌ WRONG: Pattern B contamination
d20_hdd = parseFloat(getNumericValue("target_d_20") || getNumericValue("d_20"));
d21_cdd = parseFloat(getNumericValue("ref_d_21") || getNumericValue("d_21"));
```

#### **❌ TOXIC PATTERN 2: Prefixed Cross-Section Storage**

```javascript
// ❌ WRONG: Pattern B contamination
window.TEUI.StateManager.setValue("ref_i_103", value, "calculated");
window.TEUI.StateManager.setValue("target_d_105", value, "user-modified");
```

#### **❌ TOXIC PATTERN 3: Over-Engineered refreshUI Safety Checks**

```javascript
// ❌ WRONG: Causes dropdown blanking
const optionExists = Array.from(dropdown.options).some(
  (option) => option.value === stateValue,
);
if (optionExists && dropdown.value !== stateValue) {
  dropdown.value = stateValue;
}
```

### **✅ Pattern A Purification (MANDATORY)**

#### **✅ CORRECT PATTERN 1: Clean External Dependencies**

```javascript
// ✅ CORRECT: Pattern A clean access
function getGlobalNumericValue(fieldId) {
  const rawValue = window.TEUI?.StateManager?.getValue(fieldId);
  return window.TEUI.parseNumeric(rawValue) || 0;
}

// Usage: Clean climate data access
d20_hdd = getGlobalNumericValue("d_20");
d21_cdd = getGlobalNumericValue("d_21");
```

#### **✅ CORRECT PATTERN 2: No Prefixed Storage**

```javascript
// ✅ CORRECT: Pattern A doesn't need prefixed cross-section storage
// Reference calculations are internal only, not stored globally
calculateReferenceModel(); // Internal calculations only
```

#### **✅ CORRECT PATTERN 3: Simple refreshUI**

```javascript
// ✅ CORRECT: Simple dropdown updates (copy S10/S11 pattern)
if (dropdown) {
  dropdown.value = stateValue; // Simple and direct
} else if (element.hasAttribute("contenteditable")) {
  element.textContent = stateValue;
}
```

### **🔧 ComponentBridge Integration**

**CRITICAL**: Ensure ComponentBridge sync works with Pattern A:

```javascript
// In ModeManager.setValue():
setValue: function (fieldId, value, source = "user") {
  this.getCurrentState().setValue(fieldId, value, source);

  // BRIDGE: Sync Target changes to StateManager (NO PREFIX)
  if (this.currentMode === "target") {
    window.TEUI.StateManager.setValue(fieldId, value, "user-modified");
  }
}
```

### **📋 Pattern B Elimination Checklist**

**MANDATORY BEFORE ANY DUAL-STATE REFACTOR**:

- [ ] **Scan for Contamination**: `grep -n "target_\|ref_" targetFile.js`
- [ ] **Remove Prefixed Dependencies**: Replace with `getGlobalNumericValue()`
- [ ] **Remove Prefixed Storage**: Pattern A doesn't need `ref_` storage
- [ ] **Simplify refreshUI**: Use S10/S11 working pattern, no safety checks
- [ ] **Test ComponentBridge**: Ensure unprefixed sync to StateManager
- [ ] **Validate External Dependencies**: All external reads via `getGlobalNumericValue()`

### **⚠️ Why This Matters**

**Pattern B contamination has caused**:

- **7 failed S12 refactor attempts** over 3 days
- **Multiple AI agents** unable to identify root cause
- **Hundreds of hours** of debugging time wasted
- **Complete section functionality breakdown**

**This section prevents future failures and ensures first-attempt success.**

---

## 🏗️ **ARCHITECTURAL CLARITY: When to Use Prefixed Values**

**⚠️ CRITICAL DISTINCTION**: Not all prefixed values are contamination. Understanding **when to keep** vs **when to eliminate** prefixed values is essential for successful Pattern A implementation.

### **✅ KEEP ref\_ Prefixes: Cross-Section Communication**

**Purpose**: Downstream sections need access to "what would the reference values be?" for comparison and reporting.

```javascript
// ✅ CORRECT: Store calculated RESULTS for other sections to use
// In S11 (Pattern A) - calculateReferenceModel()
window.TEUI.StateManager.setValue(
  "ref_d_98",
  totals.areaD.toString(),
  "calculated",
);
window.TEUI.StateManager.setValue(
  "ref_i_98",
  totals.loss.toString(),
  "calculated",
);

// ✅ CORRECT: Store calculated RESULTS for downstream consumption
// In S09 (Pattern A) - calculateReferenceModel()
window.TEUI.StateManager.setValue(
  "ref_i_71",
  (refTotal * refHeatingRatio).toString(),
  "calculated",
);
window.TEUI.StateManager.setValue(
  "ref_h_71",
  refTotal.toString(),
  "calculated",
);
```

**Why This Works**: Other sections (S14, S15, S01) need to access reference calculation results for summary reports and compliance comparisons.

### **❌ ELIMINATE target*/ref* Prefixes: External Dependencies**

**Problem**: Sections try to read prefixed external values, but upstream sections manage Target/Reference internally.

```javascript
// ❌ WRONG: Pattern B contamination - trying to read external prefixed values
const refArea =
  window.TEUI?.StateManager?.getValue("ref_h_15") ||
  window.TEUI?.StateManager?.getValue("h_15");
const refClimate = parseFloat(
  getNumericValue("ref_d_20") || getNumericValue("d_20"),
);

// ✅ CORRECT: Pattern A clean access - upstream section handles Target/Reference
const area = getGlobalNumericValue("h_15"); // S02 manages Target vs Reference internally
const climate = getGlobalNumericValue("d_20"); // S03 manages Target vs Reference internally
```

**Why This Works**: S02 and S03 (Pattern A) internally manage Target vs Reference and provide the correct value based on current context.

### **🎯 The "State Sovereignty" Principle**

**Pattern A Architecture Rule**: Each section has **complete sovereignty** over its internal state management.

#### **Internal State Management (Self-Contained)**

```javascript
// Each section manages its own Target/Reference internally
const ModeManager = {
  currentMode: "target", // or "reference"
  getValue: function (fieldId) {
    return this.currentMode === "target"
      ? TargetState.getValue(fieldId)
      : ReferenceState.getValue(fieldId);
  },
};
```

#### **External Dependencies (Clean Interface)**

```javascript
// External reads are always clean - no prefixes
function getGlobalNumericValue(fieldId) {
  const rawValue = window.TEUI?.StateManager?.getValue(fieldId);
  return window.TEUI.parseNumeric(rawValue) || 0;
}

// Usage: Read climate data from S03
const hdd = getGlobalNumericValue("d_20"); // S03 provides correct value based on its mode
```

#### **Cross-Section Results (Prefixed for Clarity)**

```javascript
// Outbound results use prefixes for downstream consumption
if (isReferenceCalculation) {
  // Store reference results for other sections
  window.TEUI.StateManager.setValue(
    "ref_i_98",
    heatloss.toString(),
    "calculated",
  );
} else {
  // Store target results (unprefixed)
  window.TEUI.StateManager.setValue("i_98", heatloss.toString(), "calculated");
}
```

### **📋 Prefixed Values Decision Matrix**

| **Scenario**                              | **Use Prefixes?** | **Pattern**                     |
| ----------------------------------------- | ----------------- | ------------------------------- |
| **Reading from other sections**           | ❌ NO             | `getGlobalNumericValue("d_20")` |
| **Reading within own section**            | ❌ NO             | `ModeManager.getValue("d_105")` |
| **Storing calculated results for others** | ✅ YES            | `setValue("ref_i_98", value)`   |
| **Internal calculations**                 | ❌ NO             | Use state objects directly      |

### **🚨 Common Contamination Patterns**

#### **❌ TOXIC: External Dependency Contamination**

```javascript
// Reading prefixed values from other sections
const climate = getNumericValue("target_d_20") || getNumericValue("ref_d_20");
const area = window.TEUI?.StateManager?.getValue("ref_h_15");
```

#### **✅ CLEAN: External Dependency Pattern A**

```javascript
// Reading clean values - upstream section manages Target/Reference
const climate = getGlobalNumericValue("d_20");
const area = getGlobalNumericValue("h_15");
```

### **🎯 Why This Architecture Works**

1. **No Cross-Contamination**: Each section's state is completely isolated
2. **Simple Interfaces**: External dependencies use clean, unprefixed field names
3. **Clear Separation**: Internal state management vs external communication
4. **Downstream Compatibility**: Reference results available for reporting/comparison
5. **Mode Awareness**: Each section handles Target vs Reference internally

### **⚠️ Migration Strategy**

When purifying Pattern B contamination:

1. **Keep**: `ref_` prefixed STORAGE of calculated results (`setValue("ref_i_71", ...)`)
2. **Remove**: `target_`/`ref_` prefixed READING of external dependencies (`getValue("ref_d_20")`)
3. **Replace**: External reads with `getGlobalNumericValue(fieldId)`
4. **Preserve**: Cross-section communication patterns for downstream sections

This ensures **clean internal state management** while maintaining **cross-section compatibility**.

---

Each dual-state section must have its own `TargetState` and `ReferenceState` objects, managed by a `ModeManager` facade. This ensures that:

1.  **State Isolation:** Each section's state is completely independent, preventing cross-section interference.
2.  **Persistence:** States are saved to and loaded from `localStorage` using section-specific keys.
3.  **Default Values:** Default values are set using `setDefaults()` and can be overridden by user inputs.
4.  **Value Retrieval:** Values are retrieved using `getValue()` and updated using `setValue()`.
5.  **Dynamic Reference Loading:** Reference defaults are dynamically loaded from ReferenceValues.js based on dropdown d_13.
6.  **Visual State Feedback:** Clear visual indicators distinguish between default and user-modified values.

---

## 🎯 **PATTERN A: Dynamic Reference Loading & Visual State Management**

### Dynamic Reference Defaults Integration

Reference state defaults must be dynamically loaded from the ReferenceValues.js system based on the user's selection in dropdown d_13 (Reference Standard). This ensures all reference values stay synchronized with the selected building code standard.

```javascript
// Reference State Management (with dynamic defaults)
const ReferenceState = {
  state: {},
  listeners: {},

  initialize: function () {
    const savedState = localStorage.getItem("SXX_REFERENCE_STATE");
    if (savedState) {
      this.state = JSON.parse(savedState);
    } else {
      this.setDefaults();
    }
  },

  setDefaults: function () {
    // ✅ DYNAMIC LOADING: Get current reference standard from dropdown d_13
    const currentStandard =
      window.TEUI?.StateManager?.getValue?.("d_13") || "OBC SB10 5.5-6 Z6";
    const referenceValues =
      window.TEUI?.ReferenceValues?.[currentStandard] || {};

    // Apply reference values to this section's fields, with fallbacks for missing values
    this.state = {
      d_85: referenceValues.d_85 || "1411.52", // Area (inherited from Target, not in ReferenceValues)
      f_85: referenceValues.f_85 || "5.30", // RSI values from ReferenceValues
      f_86: referenceValues.f_86 || "4.10",
      f_87: referenceValues.f_87 || "6.60",
      g_88: referenceValues.g_88 || "1.990", // U-values from ReferenceValues
      g_89: referenceValues.g_89 || "1.420",
      g_90: referenceValues.g_90 || "1.420",
      g_91: referenceValues.g_91 || "1.420",
      g_92: referenceValues.g_92 || "1.420",
      g_93: referenceValues.g_93 || "1.420",
      f_94: referenceValues.f_94 || "1.80",
      f_95: referenceValues.f_95 || "3.50",
      d_96: "29.70", // Interior floors (not typically in building codes)
      d_97: referenceValues.d_97 || "50", // Thermal bridge penalty
      // ... add all section-specific fields
    };

    console.log(
      `SXX: Reference defaults loaded from standard: ${currentStandard}`,
    );
  },

  // Listen for changes to the reference standard and reload defaults
  onReferenceStandardChange: function () {
    console.log("SXX: Reference standard changed, reloading defaults");
    this.setDefaults();
    this.saveState();
    // Only refresh UI if currently in reference mode
    if (ModeManager.currentMode === "reference") {
      ModeManager.refreshUI();
      calculateAll();
    }
  },

  saveState: function () {
    localStorage.setItem("SXX_REFERENCE_STATE", JSON.stringify(this.state));
  },

  setValue: function (fieldId, value, source = "user") {
    this.state[fieldId] = value;
    this.saveState();

    // Mark field as user-modified for visual feedback
    if (source === "user" || source === "user-modified") {
      this.markAsUserModified(fieldId);
    }
  },

  getValue: function (fieldId) {
    return this.state[fieldId];
  },

  markAsUserModified: function (fieldId) {
    // Apply visual styling to indicate user modification
    const element = document.querySelector(`[data-field-id="${fieldId}"]`);
    if (element && ModeManager.currentMode === "reference") {
      element.classList.remove("reference-default");
      element.classList.add("reference-modified");
    }
  },
};
```

### Enhanced ModeManager with Visual Feedback

```javascript
const ModeManager = {
  currentMode: "target",

  initialize: function () {
    TargetState.initialize();
    ReferenceState.initialize();

    // Listen for reference standard changes
    if (window.TEUI?.StateManager?.addListener) {
      window.TEUI.StateManager.addListener("d_13", () => {
        ReferenceState.onReferenceStandardChange();
      });
    }
  },

  resetState: function () {
    console.log("SXX: Resetting state and clearing localStorage.");

    // Reset both states to their current dynamic defaults
    TargetState.setDefaults();
    TargetState.saveState();
    ReferenceState.setDefaults(); // This will reload from current d_13 selection
    ReferenceState.saveState();

    // Clear all user-modified visual indicators
    this.clearUserModifiedIndicators();

    console.log("SXX: States have been reset to defaults.");

    // After resetting, refresh the UI and recalculate
    this.refreshUI();
    calculateAll();
  },

  clearUserModifiedIndicators: function () {
    const sectionElement = document.getElementById("sectionElementId");
    if (!sectionElement) return;

    const modifiedElements = sectionElement.querySelectorAll(
      ".reference-modified, .target-modified",
    );
    modifiedElements.forEach((element) => {
      element.classList.remove("reference-modified", "target-modified");
      element.classList.add(
        this.currentMode === "reference"
          ? "reference-default"
          : "target-default",
      );
    });
  },

  refreshUI: function () {
    // Standard UI refresh logic + visual state indicators
    const sectionElement = document.getElementById("sectionElementId");
    if (!sectionElement) return;

    const currentState = this.getCurrentState();
    const fieldsToSync = ["field1", "field2"]; // Define per section

    fieldsToSync.forEach((fieldId) => {
      const stateValue = currentState.getValue(fieldId);
      if (stateValue === undefined || stateValue === null) return;

      const element = sectionElement.querySelector(
        `[data-field-id="${fieldId}"]`,
      );
      if (!element) return;

      // Update element value (standard logic)
      // ... element update code ...

      // Apply visual state indicators
      this.applyVisualStateIndicators(element, fieldId);
    });
  },

  applyVisualStateIndicators: function (element, fieldId) {
    // Remove all state classes
    element.classList.remove(
      "reference-default",
      "reference-modified",
      "target-default",
      "target-modified",
    );

    if (this.currentMode === "reference") {
      // Check if this field has been user-modified vs. default
      const isUserModified = this.isFieldUserModified(fieldId);
      element.classList.add(
        isUserModified ? "reference-modified" : "reference-default",
      );
    } else {
      // Target mode: check for user modifications
      const isUserModified = this.isFieldUserModified(fieldId);
      element.classList.add(
        isUserModified ? "target-modified" : "target-default",
      );
    }
  },

  isFieldUserModified: function (fieldId) {
    // Implementation depends on how you track modifications
    // Could be based on comparing current value to default value
    // Or maintaining a separate "modified" flag in state
    return false; // Placeholder - implement based on section needs
  },

  // ... rest of standard ModeManager methods ...
};
```

### Required CSS for Visual State Feedback

```css
/* Default state styling - grey italic to indicate defaults */
.reference-default {
  color: #6c757d !important;
  font-style: italic !important;
  font-weight: normal !important;
}

.target-default {
  color: #495057 !important;
  font-style: normal !important;
  font-weight: normal !important;
}

/* User-modified state styling - bold blue to indicate user changes */
.reference-modified {
  color: #007bff !important;
  font-style: normal !important;
  font-weight: bold !important;
}

.target-modified {
  color: #0056b3 !important;
  font-style: normal !important;
  font-weight: bold !important;
}
```

### Naming Conventions (MANDATORY)

All dual-state implementations MUST follow these naming conventions:

- **State Objects**: `TargetState`, `ReferenceState` (PascalCase)
- **ModeManager**: Always named `ModeManager` (never `DualState` or other aliases)
- **localStorage Keys**: `"SXX_TARGET_STATE"`, `"SXX_REFERENCE_STATE"` (where XX is section number)
- **Methods**: `initialize()`, `setDefaults()`, `setValue()`, `getValue()`, `saveState()`, `resetState()`, `refreshUI()`
- **Mode Values**: `"target"`, `"reference"` (lowercase strings)
- **Global Exposure**: `window.TEUI.sectXX.ModeManager` (where XX is section number)

**⚠️ CRITICAL**: Future developers and AI agents must follow these exact naming conventions to prevent architectural regression.

---

## 🎯 **REFERENCE COMPARISON SYSTEM (M/N/O Columns)**

### **System Design Philosophy**

The Reference Comparison System provides real-time feedback on how the current design compares to building code requirements. This system must work differently in Target vs Reference modes to provide meaningful feedback.

### **Column Definitions**

- **Column M**: Reference percentage (current value ÷ reference value × 100%)
- **Column N**: Status indicator (✓ = pass, ✗ = fail)
- **Column O**: Additional reference metrics (varies by section)

### **Mode-Specific Behavior**

#### **🟢 Reference Mode: Perfect Compliance**

When in Reference mode, the system is displaying the **exact building code minimums**:

- **Column M**: Should ALWAYS show **100%**
- **Column N**: Should ALWAYS show **✓** (pass)
- **Logic**: Reference values meeting reference values = perfect compliance
- **Purpose**: Validates that ReferenceValues.js data is loading correctly

```javascript
// Reference Mode Logic
if (ModeManager.currentMode === "reference") {
  referencePercent = 100; // Always 100% in reference mode
  isGood = true; // Always pass in reference mode
}
```

#### **🔵 Target Mode: Performance Comparison**

When in Target mode, the system compares user design against building code requirements:

- **Column M**: Shows actual performance ratio
  - **110%** = 10% better than code minimum (exceeds requirement)
  - **90%** = 10% worse than code minimum (fails requirement)
- **Column N**: Shows pass/fail based on meeting minimum requirements
  - **✓** = meets or exceeds code minimum
  - **✗** = fails to meet code minimum

```javascript
// Target Mode Logic Examples
// RSI comparison (higher is better)
if (baseline.type === "rsi") {
  referencePercent = (currentValue / referenceValue) * 100;
  isGood = currentValue >= referenceValue;
}

// U-value comparison (lower is better)
if (baseline.type === "uvalue") {
  referencePercent = (referenceValue / currentValue) * 100;
  isGood = currentValue <= referenceValue;
}
```

### **Implementation Requirements**

#### **🚨 MANDATORY: d_13 Standard Change Integration**

**Only sections with ReferenceValues.js dependencies MUST implement this pattern:**

⚠️ **Exception**: Sections without building code minimums (S01, S04, S06, etc.) do NOT need this pattern. Only sections with entries in `ReferenceValues.js` require d_13 standard change integration.

```javascript
// 1. MANDATORY: Listen for d_13 changes in ModeManager.initialize()
window.TEUI.StateManager.addListener("d_13", () => {
  ReferenceState.onReferenceStandardChange();
});

// 2. MANDATORY: Implement onReferenceStandardChange in ReferenceState
onReferenceStandardChange: function () {
  console.log("SXX: Reference standard changed, reloading defaults");
  this.setDefaults(); // Reload from ReferenceValues.js[newStandard]
  this.saveState();
  // Only refresh UI if currently in reference mode
  if (ModeManager.currentMode === "reference") {
    ModeManager.refreshUI();
    calculateAll();
  }
}
```

**Why This is Critical:**
- User changes `d_13` in S02 → All sections must reload building code minimums
- Ensures Reference mode always reflects current building standard
- Maintains regulatory compliance across standard changes

#### **Dynamic Reference Values**

The comparison must use **dynamic reference values** from the current ReferenceState, not static baselines:

```javascript
function updateReferenceIndicators(rowId) {
  // ✅ CORRECT: Use dynamic reference values
  const referenceValue =
    ModeManager.currentMode === "reference"
      ? ModeManager.getValue(fieldId) // Use current reference state
      : ReferenceState.getValue(fieldId); // Use reference state for comparison

  // ❌ WRONG: Use static baseline values
  // const referenceValue = baselineValues[rowId]?.value;
}
```

#### **Area Field Preservation**

When d_13 (reference standard) changes:

- **Must Update**: RSI values (f*\*), U-values (g*\*) from ReferenceValues.js
- **Must Preserve**: User-modified area values (d\_\*) - these are design choices, not code requirements

```javascript
onReferenceStandardChange: function() {
  // Update only performance values, preserve area values
  const preservedAreas = {};

  // Preserve user-modified areas
  ['d_85', 'd_86', 'd_87', 'd_94', 'd_95', 'd_96'].forEach(fieldId => {
    if (this.isUserModified(fieldId)) {
      preservedAreas[fieldId] = this.state[fieldId];
    }
  });

  // Load new reference values
  this.setDefaults();

  // Restore preserved areas
  Object.assign(this.state, preservedAreas);
  this.saveState();
}
```

### **Cross-Section Consistency**

This Reference Comparison System should be implemented consistently across all sections with building code requirements:

- **Section 11**: Insulation values (RSI), thermal performance (U-values), thermal bridging
- **Section 10**: Solar heat gain coefficients, shading requirements
- **Section 08**: Ventilation rates, air quality standards
- **Future Sections**: Equipment efficiency, energy targets

### **Visual Feedback Standards**

#### **Status Indicators**

- **✓ (Green)**: Meets or exceeds requirements
- **✗ (Red)**: Fails to meet requirements
- **? (Yellow)**: Calculation error or missing data

#### **Percentage Colors**

- **Green**: ≥100% (meets/exceeds)
- **Yellow**: 90-99% (close but failing)
- **Red**: <90% (significantly failing)

### **Testing Validation**

To verify correct implementation:

1. **Reference Mode Test**: Switch to Reference mode → All M columns should show 100%, all N columns should show ✓
2. **Target Superior Test**: In Target mode with better values → Should show >100% with ✓
3. **Target Inferior Test**: In Target mode with worse values → Should show <100% with ✗
4. **d_13 Change Test**: Change reference standard → Reference percentages update, areas preserve user modifications

---

## 🚀 **REFACTORING PRIORITIES & ARCHITECTURAL MIGRATION**

### **Current Architecture Status**

**✅ Fully Refactored (Dual-State Pattern A):**

- **Section 03**: Climate data and reference standards ✅ **VERIFIED 2025-07-24**
  - ✅ Province→City sequential selection preserved
  - ✅ ClimateValues.js integration preserved
  - ✅ Future/Present timeframe logic preserved
  - ✅ Occupancy dependency from S02 preserved
  - ✅ Climate zone reporting to S10 (j_19) preserved
  - ✅ Self-contained state module with complete Pattern A compliance
- **Section 08**: Ventilation rates and air quality
- **Section 10**: Solar radiant gains and utilization factors
- **Section 11**: Transmission losses and thermal performance

**🎯 Next Priority (Critical for Architecture Consistency):**

- **Section 01**: Building geometry and foundation data
- **Section 02**: Energy targets and performance metrics

**🔄 Future Migration:**

- **Section 04-07**: Equipment and systems
- **Section 09**: Internal gains
- **Section 12+**: Advanced calculations and reporting

### **S03 Migration Completed ✅**

Section 03 migration to Pattern A has been successfully completed and verified:

- **✅ Prefixed State Contamination Eliminated**: Clean `d_20`, `j_19` reads via ModeManager
- **✅ Cross-Section Dependencies Preserved**: S10, S11 continue to access climate data seamlessly
- **✅ Code Complexity Reduced**: Standardized helper functions and state management
- **✅ Maintenance Burden Eliminated**: Consistent patterns with S08, S10, S11

### **Migration Sequence Strategy**

#### **Phase 1: Core Foundation (Priority 1)**

**Target**: Complete by Q3 2025

1. **Section 01**: Building areas, geometry, foundation data

   - **Impact**: All area calculations depend on S01 data
   - **Dependencies**: S02, S11, S10 read building areas from S01

2. **Section 02**: Energy targets, performance benchmarks
   - **Impact**: Performance comparisons and compliance checks
   - **Dependencies**: S11, S12+ compare against S02 targets

#### **Phase 2: Systems Integration (Priority 2)**

**Target**: Complete by Q4 2025

3. **Section 04-07**: HVAC equipment, domestic hot water, lighting

   - **Impact**: Equipment efficiency and capacity calculations
   - **Dependencies**: Equipment selections affect overall energy performance

4. **Section 09**: Internal gains (people, equipment, lighting)
   - **Impact**: Gains calculations for thermal modeling
   - **Dependencies**: Works with S10 (radiant gains) and S11 (transmission)

#### **Phase 3: Advanced Features (Priority 3)**

**Target**: Complete by Q1 2026

5. **Section 12+**: Advanced calculations, reporting, compliance
   - **Impact**: Final performance metrics and code compliance
   - **Dependencies**: Integrates all previous sections

### **Migration Implementation Guide**

Each section migration should follow this standardized process:

1. **Pre-Migration Assessment**

   - Identify all dependencies (which sections read this section's data)
   - Document current state structure and field naming
   - Create backup of working version

2. **Pattern A Implementation**

   - Add TargetState and ReferenceState objects
   - Implement ModeManager facade
   - Add header controls (toggle + reset)
   - Update helper functions to use ModeManager

3. **Dependency Resolution**

   - Update dependent sections to read from new state structure
   - Test cross-section data flow
   - Verify calculations remain accurate

4. **Validation & Testing**

   - **Reference Mode Test**: All comparisons show 100%/✓
   - **Target Mode Test**: Performance comparisons work correctly
   - **Cross-Section Test**: Dependencies function properly
   - **Reset Test**: State management works as expected

5. **Documentation Update**
   - Update this GUIDE.md with lessons learned
   - Document any section-specific patterns or challenges
   - Update README.md status

## 🚀 **SEQUENTIAL REFACTORING STRATEGY (July 2025)**

**Status**: ✅ **Recommended Implementation Plan**  
**Context**: Based on dependency analysis and successful S03/S08/S10/S11 refactoring

### **🔄 Complete Dependency Flow Map**

```
S05 (Emissions) ──→ S04 (Energy/Emissions) ──→ S15 → S01
S06 (Renewable) ──→ S04 (Energy/Emissions) ──→ S15 → S01
S07 (Water) ──────→ S04 (Energy/Emissions) ──→ S15 → S01
                           ↑
S09 (Internal Gains) → S10 ✅ → S13 → S14 → S15 → S01
    ↓                    ↓      ↓      ↓      ↓      ↓
S12 (Volume/Surface) ────────→ S13 → S14 → S15 → S01
    ↓                           ↓      ↓      ↓      ↓
S11 ✅ (Envelope) ─────────────→ S14 → S15 → S01
    ↓                                  ↓      ↓
S03 ✅ (Climate) ──────────────────────→ S15 → S01
```

**🎯 Critical Insight**: S04 provides `ref_j_32` and `ref_k_32` that cause S01's oscillating bug, making S04-07 essential for the sequential refactoring plan.

**Key Insight**: Working **upstream-first** prevents timing issues and mixed architecture dependencies that cause calculation instability.

### **🎯 Implementation Sequence (Updated with S04-07)**

#### **Phase 1: Core Foundation**

**1. Section 09 (Internal Gains)** ← _Start Here_

- **Priority**: HIGH - Eliminates S10's last external dependency
- **Dependencies**: S02 ✅, S01 (floor area), S03 ✅ (climate)
- **Benefit**: Provides clean `i_71` feed to S10 (already Pattern A)
- **Scope**: Internal gains calculations, equipment loads, occupancy
- **Expected Duration**: 2-3 hours

**2. Section 12 (Volume/Surface Metrics)**

- **Dependencies**: S11 ✅ (envelope data), S03 ✅ (climate)
- **Benefit**: Provides envelope metrics to S13
- **Scope**: Building geometry calculations, surface areas, U-values

#### **Phase 2: Energy & Emissions Chain (Critical for S01 Bug)**

**3. Section 05 (CO2e Emissions)**

- **Dependencies**: S02 ✅ (building info), embodied carbon calculations
- **Benefit**: Feeds emissions calculations to S04
- **Scope**: Carbon emissions, embodied carbon targets

**4. Section 06 (Renewable Energy)**

- **Dependencies**: S02 ✅ (building info), renewable energy systems
- **Benefit**: Provides renewable energy offsets to S04
- **Scope**: Solar PV, wind, green gas, renewable energy credits

**5. Section 07 (Water Use)**

- **Dependencies**: S02 ✅ (building info), S03 ✅ (climate)
- **Benefit**: Provides domestic hot water energy to S04
- **Scope**: Water consumption, DHW heating systems

**6. Section 04 (Energy Summary - Emissions & Fuels)** ← _CRITICAL_

- **Priority**: CRITICAL - Provides `ref_j_32` and `ref_k_32` for S01's oscillating bug
- **Dependencies**: S05, S06, S07 (all energy sources)
- **Benefit**: **Resolves S01's primary dependency issue**
- **Scope**: Total energy calculations, fuel consumption, emissions totals

#### **Phase 3: Mechanical & Performance Summary**

**7. Section 13 (Mechanical Loads)**

- **Critical**: Uses elevation from S03 fix (cooling calculations)
- **Dependencies**: S09 (internal gains), S12 (envelope metrics)
- **Benefit**: Mechanical systems calculations for S14
- **Scope**: HVAC loads, ventilation, free cooling

**8. Section 14 (TEDI Summary)**

- **Dependencies**: S11 ✅, S10 ✅, S12, S13 (all clean by this point)
- **Benefit**: Building envelope performance metrics
- **Scope**: TEDI/TELI calculations, envelope performance

**9. Section 15 (TEUI Summary)**

- **Critical**: Provides `ref_h_136` that causes S01's oscillating bug
- **Dependencies**: S04, S14 and all other sections using Pattern A
- **Benefit**: Final energy performance metrics
- **Scope**: TEUI calculations, energy totals

#### **Phase 4: Final Integration**

**10. Section 01 (Key Values)** ← _Final Target_

- **Complexity**: HIGH - Partially integrated with index.html
- **Expected Result**: Oscillating calculation bug **disappears naturally**
- **Benefit**: Clean completion of Pattern A migration
- **Dependencies**: S04 (`ref_j_32`, `ref_k_32`) + S15 (`ref_h_136`) = **both resolved**
- **Scope**: Key performance indicators, summary displays

### **🎯 Why This Sequence is Optimal**

#### **1. Dependency Resolution**

- Each section's inputs are already Pattern A when we refactor it
- No more mixed architecture timing issues
- Clean, predictable state flow

#### **2. S01 Bug Resolution**

- By the time we reach S01, all upstream dependencies (S04/S14/S15) will be Pattern A
- The oscillating calculation bug will likely **self-resolve**
- No defensive patches needed

#### **3. Progressive Validation**

- Each refactor has clean upstream dependencies
- Easier to isolate and verify functionality
- Less complex debugging at each step

#### **4. Risk Mitigation**

- Most complex section (S01) tackled last when all dependencies are stable
- Can revert easily if issues arise
- Clear rollback points at each phase

### **🛠️ Implementation Guidelines for Each Section**

#### **Pre-Refactoring Checklist**

- [ ] Create backup file with `-BACKUP` suffix
- [ ] Document current dependencies and cross-section communications
- [ ] Verify all upstream dependencies are Pattern A compliant
- [ ] Test current functionality as baseline

#### **Pattern A Implementation Steps**

1. **Add Dual-State Structure**: TargetState + ReferenceState + ModeManager
2. **🚨 MANDATORY: Add d_13 Standard Change Integration**: `addListener("d_13")` + `onReferenceStandardChange()`
3. **Implement Header Controls**: Toggle switch + Reset button  
4. **Add State Persistence**: localStorage with section-specific keys
5. **Update Helper Functions**: Route all data through ModeManager
6. **Test & Validate**: Reference mode, Target mode, cross-section flow, d_13 standard changes

#### **Post-Refactoring Validation**

- [ ] Reference mode shows 100%/✓ for all comparisons
- [ ] Target mode calculations are accurate
- [ ] Cross-section dependencies work correctly
- [ ] UI state synchronization functions properly
- [ ] Reset functionality works as expected
- [ ] **🚨 d_13 standard changes reload Reference defaults correctly**

### **🎉 Expected Outcomes**

#### **Immediate Benefits (After S09-S12)**

- ✅ S10 has clean internal gains dependency
- ✅ Envelope calculations use consistent Pattern A
- ✅ Foundation laid for energy chain refactoring

#### **Critical Benefits (After S04-S07)**

- ✅ **S01 oscillating bug 80% resolved** - `ref_j_32` and `ref_k_32` dependencies clean
- ✅ Complete energy calculation chain uses Pattern A
- ✅ All fuel sources, emissions, and renewable energy consistently managed
- ✅ Major calculation stability improvements

#### **Integration Benefits (After S13-S15)**

- ✅ All summary sections use consistent Pattern A
- ✅ Mechanical loads and performance metrics reliable
- ✅ **S01 oscillating bug 100% resolved** - `ref_h_136` dependency clean
- ✅ Predictable, reliable state management across entire application

#### **Final Benefits (After S01)**

- ✅ Complete Pattern A architecture across entire application
- ✅ S01 oscillating bug **permanently eliminated**
- ✅ Clean, maintainable codebase with consistent patterns
- ✅ Optimal performance and user experience
- ✅ **No more mixed architecture timing issues anywhere**

---

### **Benefits of Consistent Architecture**

When all sections use Pattern A:

- **🎯 State Isolation**: Complete independence between Target and Reference
- **🔄 Predictable Behavior**: All sections work the same way
- **🛠️ Easier Maintenance**: Consistent patterns across codebase
- **🚀 Performance**: Optimized state management and calculations
- **🎨 Better UX**: Consistent controls and visual feedback
- **📈 Scalability**: Easy to add new sections or features

---

## 🚨 **S12 REFACTOR BATTLEFIELD REPORT (July 2025)**

**⚠️ WARNING**: The Section 12 refactor has proven **exceptionally challenging** and is **NOW STABLE**. This section documents hard-learned lessons from **7+ refactor attempts** over **3 days** to help future implementers avoid the same pitfalls. The root cause was a combination of faulty initialization logic creating corrupt `localStorage` entries, compounded by minor deviations from the proven S10/S11 Pattern A implementation.

### **🎯 Current Status: ✅ STABLE AND FUNCTIONAL**

**✅ Progress Made:**

- ✅ **Dropdown Blanking Fixed**: Root cause was identified as corrupt `localStorage` state being loaded on initialization, which caused `refreshUI` to set dropdown values to `undefined`.
- ✅ **State Persistence Issues Fixed**: The "one-way" trip to Reference mode was a symptom of the corrupt `TargetState` being reloaded. Once the state initialization was fixed, bidirectional toggling and value persistence now work correctly.
- ✅ **Reset Button Functional**: The `resetState` function is now confirmed to be working as expected.
- ✅ **Event Listeners Corrected**: Event handlers were simplified to match the robust pattern in S10/S11, preventing duplicate listeners and ensuring reliable firing.
- ✅ **Default Value Logic Corrected**: The `TargetState.setDefaults()` function was updated to set `d_108` to `"MEASURED"` by default, preventing the `handleConditionalEditability` function from immediately overwriting `g_109` to `0` and creating the corrupt state.

### **🔍 Critical Lesson: The `localStorage` Trap**

The primary villain of the S12 bug was a subtle interaction between a logical flaw in the code and the persistence of `localStorage`.

1.  **The Flaw**: The initial `setDefaults` in `TargetState` set `d_108` to `"AL-1B"`. Immediately after, `handleConditionalEditability()` would run.
2.  **The Action**: Because `d_108` was not `"MEASURED"`, the function would correctly set the state for `g_109` to `"0"`.
3.  **The Trap**: This incomplete, corrupted state (`{"g_109":"0"}`) was then saved to `localStorage`.
4.  **The Loop**: On every subsequent page load, the `TargetState.initialize()` function would find the corrupt `S12_TARGET_STATE` in `localStorage` and load it, skipping the `setDefaults()` call entirely. This is why the bug was so persistent.

**The Fix**:
- **Manually deleting the `S12_TARGET_STATE` key** from the browser's developer tools was the essential first step to break the cycle.
- **Correcting the `setDefaults` logic** for `d_108` to `"MEASURED"` prevented the corrupt state from being created in the first place.
- **Aligning the module with the S10 pattern** (adding `listeners: {}`, simplifying event handlers) made the entire component more robust and less prone to such errors.

### **🎯 Comparison: Why S10/S11 Work vs S12 Struggled**

| **Aspect** | **S10/S11 (Working)** | **S12 (Problematic)** | **Resolution** |
| --- | --- | --- | --- |
| **State Objects** | Contains `listeners: {}` | Missing `listeners: {}` | Added to match standard |
| **Initialization** | Cleanly loads defaults | Loaded corrupt `localStorage` | Corrected default logic |
| **Event Pattern** | Pure inline handlers | Mixed/conflicting patterns | Simplified to match S10 |
| **UI Refresh** | Reads valid state | Read `undefined` from corrupt state | Now reads valid state |

### **🔧 Debugging Sequence for Future Refactors**

1.  **ALWAYS SUSPECT `localStorage`**: If a component misbehaves on load, **first clear its state from `localStorage`** in the Application tab of dev tools and hard-refresh.
2.  **Verify Initialization**: Check the console for errors during `initializeEventHandlers` and `onSectionRendered`.
3.  **Log `setDefaults` vs `initialize`**: Add logs to see if a component is loading from storage or setting defaults.
4.  **Trace Conditional Logic**: Be wary of functions like `handleConditionalEditability` that run during initialization and can modify the state before the user has a chance to interact.

### **✅ CORRECTED: Dual-Engine Calculation Architecture**

**⚠️ CRITICAL CORRECTION**: The previous interpretation of "mode-aware calculations" was fundamentally wrong and caused months of state mixing issues. The correct dual-state architecture follows the working pattern established in S03, S08, S09, S10, S11.

### **🎯 The True Dual-State Architecture**

The application implements a **three-column performance display** in S01:

1. **Reference Column (Red)**: Building code minimum performance ← `ref_` prefixed values
2. **Target Column (Center)**: Optimized design performance ← unprefixed values  
3. **Actual Column**: Real utility bill data ← S04 inputs

### **🔧 Correct Calculation Pattern (from working S11)**

```javascript
function calculateAll() {
  console.log("[Section] Running dual-engine calculations...");
  
  // ✅ ALWAYS run BOTH engines in parallel
  calculateReferenceModel(); // Reads ReferenceState → stores ref_ prefixed
  calculateTargetModel();    // Reads TargetState → stores unprefixed
  
  console.log("[Section] Dual-engine calculations complete");
}

function calculateReferenceModel() {
  // Use Reference state inputs to calculate Reference performance
  // Store results with ref_ prefix for downstream sections
  window.TEUI.StateManager.setValue("ref_i_104", value, "calculated");
}

function calculateTargetModel() {
  // Use Target state inputs to calculate Target performance  
  // Store results unprefixed for downstream sections
  setCalculatedValue("i_104", value);
}
```

### **🚨 What Mode Switching Actually Controls**

**Mode switching is a UI filter, NOT a calculation trigger:**

- **Target Mode**: User edits Target input values, sees Target calculated outputs
- **Reference Mode**: User edits Reference input values, sees Reference calculated outputs
- **Calculations**: ALWAYS run both engines to maintain both data streams

### **📋 S12 & S13 Correction Workplan**

Both S12 and S13 were incorrectly implemented with "mode-aware calculations" that broke the dual-stream architecture. They need correction to follow the working S11 pattern.

#### **Phase 1: S12 Correction** 

**Issues to Fix:**
- `calculateAll()` only runs one engine based on mode
- No `ref_` prefixed output storage for downstream sections
- Mode switching affects calculation streams instead of just UI

**Correction Steps:**
1. **Restore dual-engine `calculateAll()`**:
   ```javascript
   function calculateAll() {
     calculateReferenceModel(); // Always → ref_ prefixed
     calculateTargetModel();    // Always → unprefixed
   }
   ```

2. **Update calculation functions** to accept `isReferenceCalculation` parameter like S11
3. **Add Reference output storage** with `ref_` prefixes for S14/S15 consumption
4. **Test**: Verify Reference column updates in S01, Target column stable

#### **Phase 2: S13 Correction**

**Issues to Fix:**
- Same calculation engine problems as S12
- Complex cooling calculations need dual-stream outputs
- Missing `ref_` storage for mechanical load results

**Correction Steps:**
1. **Apply same dual-engine pattern** as S12 correction
2. **Ensure cooling calculations** run for both Target and Reference states
3. **Add Reference mechanical load outputs** with `ref_` prefixes
4. **Test**: Verify both heating and cooling systems populate correct columns

#### **Phase 3: Validation**

**Success Criteria:**
- ✅ Reference toggle updates **Reference column** (red values) in S01
- ✅ Target edits update **Target column** (center values) in S01  
- ✅ No cross-contamination between streams
- ✅ Downstream sections (S14, S15, S04) receive both data streams

### **📊 Current Implementation Status (July 27, 6.48pm 2025)**

#### **✅ Completed Sections - 100% Operational**
- **S03, S08, S09, S10, S11**: Gold standard dual-state implementations
- **S12 (Volume & Surface Metrics)**: ✅ **COMPLETED** - Full dual-engine architecture working perfectly
  - Both Target and Reference calculations run in parallel
  - Complete state isolation achieved
  - Proper `ref_` prefixed output storage
  - Mode switching only affects UI display, not calculations
  - All calculated values update immediately when switching modes

#### **🚧 In Progress**
- **S13 (Mechanical Loads)**: ⚠️ **75% COMPLETE** - Partial dual-engine implementation
  - ✅ Fixed: Dual-engine `calculateAll()` structure implemented  
  - ✅ Fixed: Reference calculations no longer contaminate Target state
  - ✅ Fixed: Upstream flow from S10/S11 now working (timing issue resolved)
  - ✅ Fixed: Cooling system toggle now affects calculations
  - ⚠️ **Issue**: Reference mode shows zeros instead of calculated values
  - ⚠️ **Issue**: Reference TED (`ref_d_127`) may not be available from S14
  - ⚠️ **Issue**: Gas system calculations need validation in Reference mode

#### **📋 Pending Sections**
- **S14, S15, S04**: Need dual-state Pattern A implementation
- **S01**: Reference column shows 0.0 - likely due to missing upstream Reference data

#### **🔍 Root Cause Analysis**
The S13 zeros issue suggests **missing upstream Reference data flow**:
1. S13 correctly reads `ref_d_127` for Reference calculations
2. But `ref_d_127` may not exist or equals 0 from S14
3. S14/S15 refactoring should provide proper Reference TED values
4. This will cascade to fix S13 Reference calculations and S01 Reference TEUI

### **📚 Key Lessons Learned**

1. **Never break the dual-stream architecture** - both engines must always run
2. **Mode switching = UI filter only** - not a calculation trigger
3. **Follow working section patterns** (S11) rather than inventing new approaches
4. **Test with S01 three-column display** to verify correct data flow
5. **Debug timing/logging can resolve mysterious calculation flow issues**
6. **Upstream dependencies must be established before fixing downstream sections**
7. **SIMPLIFICATION**: Pattern 2 (separate functions + helpers) is cleaner than Pattern 1 (boolean parameters)

### **🔧 Pattern Simplification Recommendation**

Two valid dual-state patterns have emerged in the codebase:

**Pattern 1: Boolean Parameters (S11, S12)**
```javascript
function calculateValues(isReferenceCalculation = false) {
  if (isReferenceCalculation) {
    // Reference logic
  } else {
    // Target logic  
  }
}
```

**Pattern 2: Separate Functions + Helpers (S14, S15, S01, S13)**
```javascript
function calculateReferenceModel() {
  const getRefValue = (fieldId) => {
    return window.TEUI.StateManager.getValue(`ref_${fieldId}`) || fallback;
  };
  // Use getRefValue throughout
}

function calculateTargetModel() {
  // Use getFieldValue throughout - naturally reads correct values
}
```

**Recommendation**: **Pattern 2 is preferred** for new implementations and future refactoring:
- Cleaner code without boolean parameters throughout
- Natural separation of concerns
- Easier to debug and maintain
- Follows S14/S15 proven approach

**Action**: Consider simplifying S11/S12 to Pattern 2 in future refactoring sessions.

This correction process has successfully restored the intended architecture in S12 and significantly advanced S13 implementation.

### **🔧 Planned Investigation & Audit (Evening Session)**

#### **Immediate S13 Investigation**
1. **Verify upstream Reference data**: Check if `ref_d_127` exists in StateManager from S14
2. **Debug Reference TED flow**: Track why Reference calculations result in zeros
3. **Validate Reference state object**: Ensure Reference defaults are being read correctly
4. **Test gas system calculations**: Verify AFUE, emissions, and exhaust calculations in Reference mode

#### **Comprehensive Section Audit Plan**
Once S13 is stabilized, conduct systematic audit of all Pattern A sections:

**Target Mode Validation:**
- S03, S08, S09, S10, S11, S12, S13: Verify Target calculations use Target state
- Confirm no Reference contamination in Target calculations
- Validate Target TEUI stability (93.6) across all section interactions

**Reference Mode Validation:**  
- S03, S08, S09, S10, S11, S12, S13: Verify Reference calculations use Reference state
- Confirm Reference values display immediately upon mode switch
- Validate Reference defaults match expected building code baselines
- Ensure Reference calculations flow to S01 Reference column (red values)

**Cross-Section Data Flow:**
- Verify `ref_` prefixed values flow correctly between sections
- Confirm Target values flow correctly without `ref_` prefix
- Test edge cases and complex interactions (thermal bridges, cooling systems, etc.)

**Success Criteria:**
- S01 displays three distinct columns with appropriate values
- Reference TEUI appears in red column (not 0.0)
- No state mixing or cross-contamination between Target/Reference streams
- All sections follow identical dual-state patterns from the GUIDE

### **📋 Next Steps for S12 Completion & 'Robot Fingers'**

**Note**: This section addresses thermal bridge penalty communication between S11 and S12, which is a separate issue from the dual-state calculation architecture above. These options should be considered **after** completing the dual-engine correction.

With the core state corruption and UI bugs resolved, the final challenge is to implement a performant and architecturally sound connection between the Section 11 Thermal Bridge Penalty slider (`d_97`) and the U-value calculations in Section 12. The original "fence-jumping" direct call, while functional, is architecturally risky. The event-listener approach has proven unreliable due to complex timing issues.

Here are three potential paths forward:

#### **Option 1: The "Pragmatic Fence-Jump" (Refined Direct Call)**

This approach acknowledges that the direct call worked and focuses on making it safer and more explicit.

*   **How:** Restore the direct call from S11 to a function in S12, but instead of calling `calculateCombinedUValue` directly, call a new, dedicated function like `TEUI.SectionModules.sect12.updateUValuesFromSlider(newValue)`.
*   **Inside S12:** This new function would be very lightweight. It would *only* calculate the two affected U-values (`g_101`, `g_102`) and update their DOM elements. It would **not** trigger a full `calculateAll()` in S12, preventing calculation storms.
*   **The Final Update:** The `change` event on the slider (when the user lets go) would still fire a standard `StateManager` event to trigger the full, proper calculation chain for all dependent values.
*   **Pros:** High likelihood of success, excellent performance. Explicitly naming the function makes the architectural exception clear.
*   **Cons:** Still technically violates the principle of section sovereignty.

#### **Option 2: The "Direct State Injection" (A Better Listener)**

This is a more architecturally pure approach that aims to fix the flaws in our previous listener attempt.

*   **How:** Use the `StateManager` listener in S12, but make the callback function much smarter and more direct.
*   **Inside the S12 Listener:** When the `d_97` or `ref_d_97` event is received, the callback function will *immediately* and *directly* call a lightweight calculation for only the affected U-values, just as in Option 1. It will read the new slider value directly from the event payload.
*   **Why It Might Work Now:** Our previous attempt tried to trigger a full `calculateAll`, which caused instability. By making the listener's action very small and targeted, we may get the same performance benefit as the direct call but keep the communication flowing through the proper channels.
*   **Pros:** Architecturally pure; all communication is decoupled.
*   **Cons:** Requires careful implementation to avoid the timing issues and instability we've already encountered.

#### **Option 3: Merge U-Value Calculations into Section 11 (User Preferred)**

This is the most robust solution, as it solves the communication problem by eliminating it entirely. Given the persistent difficulties in linking S11 and S12, this is the recommended path forward.

*   **How:** Move the relevant rows (101, 102, and the total row 104) and their corresponding calculation logic (`calculateCombinedUValue`) from `4011-Section12.js` directly into `4011-Section11.js`.
*   **Rationale:** Section 11 is fundamentally about the building envelope's transmission losses. The aggregate U-values are a direct summation and weighted average of the components defined in S11, making them a logical "total" for that section.
*   **Impact:**
    *   **Section 11:** Becomes the sole owner of all transmission-related data, from individual components to the final weighted average U-values. The `d_97` slider and its effects are now entirely local to the section, eliminating all cross-section communication issues for this feature.
    *   **Section 12:** Becomes a leaner, more focused module dedicated purely to volume, surface area ratios, and airtightness metrics (`d_103` through `d_110`). Its complexity is significantly reduced.
    *   **DOM/Import/Export:** The DOM structure and field IDs (`d_101`, `g_101`, etc.) remain unchanged, ensuring that import/export functionality and Excel parity are completely unaffected.
*   **Pros:** Permanently eliminates the "robot fingers" problem. Architecturally clean and logical. Reduces the complexity of S12, making it easier to maintain.
*   **Cons:** Requires a more significant, albeit straightforward, refactoring effort than the other options.

---

**⚠️ IMPORTANT**: This section is a **work in progress** and should be updated as S12 issues are resolved. Future implementers should consider the **cost/benefit** of continuing to debug S12 vs starting fresh with proven patterns.

---

## 🚧 **CURRENT IMPLEMENTATION STATUS & TEMPORARY MEASURES (July 2025)**

### **S12 Refactor Progress Update**

**Status**: Partially functional but ongoing challenges with state persistence and dropdown behavior.

**Recent Progress**:

- ✅ **Critical Function Scoping Fixed**: S09 `formatBuildingTypeForLookup` error resolved
- ✅ **Console Noise Eliminated**: S05 recursion bug fixed, S03 verbose logging cleaned
- ✅ **ComponentBridge Spam Reduced**: Sync logging commented out for cleaner debugging
- ✅ **Global Toggle Disabled**: Preventing retry warning spam during development

**S12 Specific Issues Resolved**:

- ✅ Dropdown event listeners now attach correctly
- ✅ Calculations fire when dropdowns change
- ✅ Basic Pattern A structure in place

**S12 Outstanding Issues**:

- ❌ Dropdown blanking after 1-2 edits persists
- ❌ Reset button non-functional
- ❌ State persistence only works one-way (Target→Reference)

### **Temporary Architecture Decisions**

#### **1. Global Toggle Temporarily Disabled**

```javascript
// ⏸️ DISABLED: Global toggle failing with 10 retries - causing console spam
// setTimeout(setupGlobalToggleUI, 1500);
// TODO: Re-enable when migrating to unified global toggle for all Pattern A sections
```

**Rationale**:

- Individual section toggles are functional and preferred for development
- Global toggle was looking for `window.TEUI.ModeManager` but S03 exposes `window.TEUI.sect03.ModeManager`
- Better to have clean console now, re-enable when architecture is ready

**Future Plan**:

- Complete Pattern A migration for all sections
- Implement unified global toggle that works with section-specific ModeManager exposure pattern
- Retire individual section toggles in favor of application-wide mode switching

#### **2. ComponentBridge Scheduled for Retirement**

**Current State**: ComponentBridge sync logging commented out but functionality preserved.

**Future Architecture Plan**:

- **Replace** ComponentBridge pattern with **direct state object reading**
- **Eliminate** `target_`/`ref_` prefixed sync mechanisms
- **Implement** clean Pattern A data flow: `StateManager` reads directly from section ModeManagers
- **Preserve** cross-section communication via section-specific APIs

**Migration Strategy**:

```javascript
// Current Pattern B (ComponentBridge dependent):
const value = window.TEUI.StateManager.getValue("target_d_103");

// Future Pattern A (direct state access):
const value = window.TEUI.sect12.ModeManager.getValue("d_103");
```

**Benefits**:

- Eliminates prefix-based state contamination
- Removes ComponentBridge as potential interference point
- Simplifies data flow with clear section sovereignty
- Reduces complexity and maintenance burden

### **Code Quality Improvements Completed**

#### **Console Noise Elimination (July 26, 2025)**

**Major Issues Resolved**:

- **S05 Recursion Catastrophe**: Eliminated hundreds of mode switches causing performance issues
- **S09 Function Scoping**: Fixed `ReferenceError` breaking Reference Model calculations
- **S03 Verbose Logging**: Commented out 11 debug logs firing on every state change
- **ComponentBridge Spam**: Reduced sync operation logging for cleaner debugging
- **Global Toggle Retries**: Stopped 10 consecutive warning messages on page load

**Impact**: Console dramatically quieter, actual debugging issues now visible.

#### **Next Phase: Code Formatting & Standards**

**Planned**: ESLint and Prettier cleanup for consistent code style and error detection.

---

**📋 TODO: Update this section as S12 completion and ComponentBridge retirement progress.**

---

## 🎯 **Implementation Status**

**COMPLETED SECTIONS (Pattern A Architecture Implemented):**
- ✅ **S03**: Climate & Location → COMPLETE (Full functionality verified)
- ✅ **S04**: Energy Use Summary → COMPLETE  
- ✅ **S11**: Building Envelope → COMPLETE (Full functionality verified)
- ✅ **S12**: Air Leakage & Volume → COMPLETE (Full functionality verified)
- ✅ **S13**: HVAC Systems → COMPLETE (Full functionality verified)
- ✅ **S14**: Heating & Cooling Demand → COMPLETE (Full functionality verified)
- ✅ **S15**: TEUI Summary → COMPLETE (Full functionality verified)

**PARTIAL COMPLETION (Architecture Done, Functional Issues):**
- ⚠️ **S02**: Building Information → Pattern A implemented, **state contamination detected**
- ⚠️ **S08**: Capacity & Efficiency → Pattern A implemented, **global toggle not responding**  
- ⚠️ **S09**: Internal Gains → Pattern A implemented, **global toggle not responding**
- ⚠️ **S10**: Solar Gains → Pattern A implemented, **global toggle not responding**

**GLOBAL ARCHITECTURE (Pattern A Compatible):**
- ✅ **ReferenceToggle.js**: Modernized for Pattern A → COMPLETE
- ⚠️ **Global "Show Reference" Toggle**: UI styling works, **value switching partially failing**
- ✅ **Reference Standard (d_13) Changes**: Auto-updates ReferenceValues.js → COMPLETE
- ❌ **Zero State Contamination**: **Critical gaps discovered in S02, S01**

**PENDING SECTIONS:**
- 🔄 **S01**: Summary (Final consumer section - special structure, may not need refactoring)
- 🔄 **S05, S06, S07**: Additional sections

**ADVANCED FEATURES (Planned):**
- 🔄 **"Show Reference Differentiation"**: Highlight Target vs Reference input differences
- 🔄 **"Match Target Building Inputs"**: Copy Target inputs to Reference (except d_13 values)
- 🔄 **Component Bridge Retirement**: Remove Pattern B target_ prefix translations

**PATTERN ANALYSIS:**
- **Pattern 1 (Boolean Parameters)**: S11, S12 - Working but could be simplified
- **Pattern 2 (Separate Functions)**: S13, S14, S15 - Cleaner architecture, **RECOMMENDED**

**🔍 Pattern exceptions noted for sections without ReferenceValues.js dependencies**

---

## 🎮 **Reference Model Toggling & Global Controls**

### 🎯 **Core Reference Toggle Functionality**

**Primary Global Toggle: "Show Reference" / "Show Target"**
- **Purpose**: Switch ALL dual-state sections simultaneously between Target and Reference calculated values
- **Architecture**: Leverages Pattern A `ModeManager.switchMode()` across all sections
- **Button Location**: Global dropdown in header (`index.html`)
- **Functionality**: 
  - ✅ **"Show Reference"**: Displays Reference calculated values (stored with `ref_` prefix) across all sections
  - ✅ **"Show Target"**: Displays Target calculated values (default application state) across all sections
  - ✅ **State Isolation**: No cross-contamination between Target and Reference calculations
  - ✅ **Real-time Updates**: Both Target and Reference calculations run in parallel always

**Reference Standard Selection (d_13)**
- **Purpose**: Selects which building code standard to use for Reference calculations
- **Location**: Section 02 (Building Information)
- **Functionality**: Changes ReferenceValues.js dataset loaded across all sections
- **Auto-Update**: Triggers `onReferenceStandardChange()` in sections with ReferenceValues.js dependencies

### 🔍 **Advanced Reference Analysis Features**

**1. "Show Reference Inputs" (Implemented)**
- **Purpose**: Highlights actual Reference input fields applied from ReferenceValues.js
- **Visual**: Distinguishes between Reference inputs vs Reference calculated values
- **Use Case**: Understand which fields are controlled by building code standards vs calculated results

**2. "Show Reference Differentiation" (Planned)**
- **Purpose**: Highlight input fields that differ between Target and Reference models
- **Visual**: Show only fields where Reference differs from Target (excludes d_13 applied values)
- **Use Case**: Troubleshoot when attempting identical building models, identify unintended differences

**3. "Match Target Building Inputs" (Planned)**
- **Purpose**: Copy all Target input values to Reference model, except d_13 ReferenceValues.js overrides
- **Logic**: 
  - Copy Target user inputs → Reference state
  - Preserve d_13 standard-driven ReferenceValues.js inputs  
  - Maintain calculation isolation
- **Use Case**: Create identical building model with only code-minimum differences

### 🏗️ **Implementation Pattern for Global Controls**

```javascript
// Pattern A Compatible Global Toggle
TEUI.ReferenceToggle.switchAllSectionsMode("reference");

// Sections with Pattern A architecture automatically respond
sections.forEach(section => {
  section.modeManager.switchMode("reference");
  section.modeManager.updateCalculatedDisplayValues();
});

// Reference Standard Changes
section.ReferenceState.onReferenceStandardChange(newStandard);
```

### 🎨 **UI/UX Design Patterns**

**Global Reference Controls Location**: Header dropdown in `index.html`
- **"Show Reference"** / **"Show Target"**: Primary toggle
- **"Show Reference Inputs"**: Advanced analysis tool
- **"Show Reference Differentiation"**: Troubleshooting tool (planned)
- **"Match Target Building Inputs"**: Model setup tool (planned)

**Visual Indicators**:
- **Body Classes**: `viewing-reference-values`, `viewing-reference-inputs` for global styling
- **Field Highlighting**: Reference inputs, calculated values, differences
- **Button States**: Clear indication of current view mode

**No Individual Section Controls**: Pattern A uses global toggle only, no individual section header controls

---

## 🧪 **TESTING RESULTS & COMPLETION ROADMAP (July 24, 2025)**

### 🎯 **Global Reference Toggle Testing Results**

**✅ RED UI STYLING**: Global "Show Reference" button successfully triggers red Reference UI across all sections

**⚠️ CRITICAL ISSUES DISCOVERED**:

#### **1. Partial Section Mode Switching**
- **S10, S9, S8**: Still showing **Target values** when global Reference toggle is active
- **Expected**: Should show Reference calculated values when global toggle is "Show Reference"
- **Root Cause**: These sections may not be responding to `ModeManager.switchMode()` calls from `ReferenceToggle.js`

#### **2. S02 State Contamination** 
- **Issue**: Reference year changes appear in **both Target and Reference states**
- **Symptom**: No state isolation - last edited value "bleeds through" to other mode
- **Impact**: Violates core dual-state architecture principle

#### **3. S01 State Mixing**
- **Issue**: When reporting year modified, **Target TEUI appears in Reference state S01 column**
- **Symptom**: S01 still showing cross-contamination despite all refactoring work
- **Impact**: Final consumer section not properly displaying Reference vs Target values

### 📋 **COMPLETION ROADMAP**

#### **Phase 1: Fix Global Toggle Response (High Priority)**

**Immediate Actions Needed**:
```bash
# Test sections that don't respond to global toggle
- S08 (IAQ): Check ModeManager.switchMode() implementation
- S09 (Internal Gains): Verify Pattern A compliance  
- S10 (Solar Gains): Ensure global toggle integration
```

**Technical Investigation**:
- Verify `getAllDualStateSections()` in `ReferenceToggle.js` detects all refactored sections
- Check `ModeManager.switchMode()` exists and functions in S08, S09, S10
- Ensure `updateCalculatedDisplayValues()` updates DOM with `ref_` prefixed values

#### **Phase 2: Fix State Contamination (Critical)**

**S02 Building Information**:
- **Problem**: Reference year bleeding into Target state
- **Solution**: Verify `TargetState` and `ReferenceState` isolation in S02
- **Test**: Change Reference year → Target year should remain unchanged

**S01 Key Values Summary**:
- **Problem**: Target TEUI appearing in Reference column 
- **Solution**: Ensure S01 reads correct `ref_` prefixed values for Reference column
- **Test**: Reference mode should show Reference TEUI (138.3), not Target (93.6)

#### **Phase 3: Individual Header Toggle Strategy**

**For Testing & Troubleshooting**:
- **Rationale**: Global toggle may miss some sections; individual toggles needed for debugging
- **Sections**: S08, S09, S10 (and others showing issues)
- **Temporary**: Use for testing, can remove once global toggle works perfectly

```javascript
// Re-inject header controls for problematic sections
if (ModeManager && typeof ModeManager.injectHeaderControls === 'function') {
  ModeManager.injectHeaderControls();
}
```

### 🎯 **CURRENT COMPLETION STATUS**

#### **✅ ARCHITECTURE COMPLETE (10/13 sections)**
- **S02, S03, S04, S08, S10, S11, S12, S13, S14, S15**: Pattern A implemented
- **Global Toggle UI**: Red styling working ✅
- **ReferenceToggle.js**: Modernized for Pattern A ✅

#### **⚠️ FUNCTIONAL GAPS DISCOVERED**
- **S08, S09, S10**: Not responding to global Reference toggle
- **S02**: State contamination (Reference year bleeding)
- **S01**: Still mixing Target/Reference values in columns

#### **🔄 REMAINING WORK**
- **S05, S06, S07**: Pattern A refactoring (3 sections)
- **Fix global toggle response**: Ensure all sections switch properly
- **Fix state contamination**: Complete isolation in S02, S01
- **Comprehensive testing**: All 13 sections working with global toggle

### 🧪 **TESTING VALIDATION CHECKLIST**

**Global Toggle Test**:
- [ ] "Show Reference" → All sections show red UI ✅
- [ ] "Show Reference" → All sections show Reference **values** ⚠️ (S08, S09, S10 failing)
- [ ] "Show Target" → All sections show normal UI ✅
- [ ] "Show Target" → All sections show Target **values** ✅

**State Isolation Test**:
- [ ] S02 Reference year change → Target year unchanged ❌
- [ ] S01 Reference mode → Shows Reference TEUI (138.3) ❌  
- [ ] S01 Target mode → Shows Target TEUI (93.6) ✅

**Cross-Section Integration Test**:
- [ ] Reference calculations flow properly S10→S11→S12→S13→S14→S15→S01 ⚠️
- [ ] Target calculations flow properly (working baseline) ✅

### 🎯 **SUCCESS CRITERIA FOR COMPLETION**

1. **Global Toggle Works 100%**: All 13 sections respond to global Reference/Target toggle
2. **Zero State Contamination**: Changes in one mode never affect the other mode
3. **S01 Three-Column Accuracy**: Reference/Target/Actual columns show distinct, correct values
4. **Cross-Section Data Flow**: Reference calculations cascade properly through dependency chain

---
