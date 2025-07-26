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

**⚠️ CRITICAL DECREE**: As of July 2025, **Pattern A (Self-Contained State Objects)** is the **SOLE APPROVED APPROACH** for dual-state implementation. All previous patterns using global prefixed state (target_, ref_) are **DEPRECATED** and should be migrated to this standard.

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
const optionExists = Array.from(dropdown.options).some(option => option.value === stateValue);
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
} else if (element.hasAttribute('contenteditable')) {
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

### **✅ KEEP ref_ Prefixes: Cross-Section Communication**

**Purpose**: Downstream sections need access to "what would the reference values be?" for comparison and reporting.

```javascript
// ✅ CORRECT: Store calculated RESULTS for other sections to use
// In S11 (Pattern A) - calculateReferenceModel()
window.TEUI.StateManager.setValue("ref_d_98", totals.areaD.toString(), "calculated");
window.TEUI.StateManager.setValue("ref_i_98", totals.loss.toString(), "calculated");

// ✅ CORRECT: Store calculated RESULTS for downstream consumption  
// In S09 (Pattern A) - calculateReferenceModel()
window.TEUI.StateManager.setValue("ref_i_71", (refTotal * refHeatingRatio).toString(), "calculated");
window.TEUI.StateManager.setValue("ref_h_71", refTotal.toString(), "calculated");
```

**Why This Works**: Other sections (S14, S15, S01) need to access reference calculation results for summary reports and compliance comparisons.

### **❌ ELIMINATE target_/ref_ Prefixes: External Dependencies**

**Problem**: Sections try to read prefixed external values, but upstream sections manage Target/Reference internally.

```javascript
// ❌ WRONG: Pattern B contamination - trying to read external prefixed values
const refArea = window.TEUI?.StateManager?.getValue("ref_h_15") || window.TEUI?.StateManager?.getValue("h_15");
const refClimate = parseFloat(getNumericValue("ref_d_20") || getNumericValue("d_20"));

// ✅ CORRECT: Pattern A clean access - upstream section handles Target/Reference
const area = getGlobalNumericValue("h_15");  // S02 manages Target vs Reference internally
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
  getValue: function(fieldId) {
    return this.currentMode === "target" 
      ? TargetState.getValue(fieldId)
      : ReferenceState.getValue(fieldId);
  }
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
  window.TEUI.StateManager.setValue("ref_i_98", heatloss.toString(), "calculated");
} else {
  // Store target results (unprefixed)
  window.TEUI.StateManager.setValue("i_98", heatloss.toString(), "calculated");
}
```

### **📋 Prefixed Values Decision Matrix**

| **Scenario** | **Use Prefixes?** | **Pattern** |
|--------------|-------------------|-------------|
| **Reading from other sections** | ❌ NO | `getGlobalNumericValue("d_20")` |
| **Reading within own section** | ❌ NO | `ModeManager.getValue("d_105")` |
| **Storing calculated results for others** | ✅ YES | `setValue("ref_i_98", value)` |
| **Internal calculations** | ❌ NO | Use state objects directly |

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
    
    initialize: function() {
      const savedState = localStorage.getItem('SXX_REFERENCE_STATE');
      if (savedState) {
        this.state = JSON.parse(savedState);
      } else {
        this.setDefaults();
      }
    },
    
    setDefaults: function() {
      // ✅ DYNAMIC LOADING: Get current reference standard from dropdown d_13
      const currentStandard = window.TEUI?.StateManager?.getValue?.("d_13") || "OBC SB10 5.5-6 Z6";
      const referenceValues = window.TEUI?.ReferenceValues?.[currentStandard] || {};
      
      // Apply reference values to this section's fields, with fallbacks for missing values
      this.state = {
        'd_85': referenceValues.d_85 || '1411.52',  // Area (inherited from Target, not in ReferenceValues)
        'f_85': referenceValues.f_85 || '5.30',     // RSI values from ReferenceValues
        'f_86': referenceValues.f_86 || '4.10',
        'f_87': referenceValues.f_87 || '6.60',
        'g_88': referenceValues.g_88 || '1.990',    // U-values from ReferenceValues
        'g_89': referenceValues.g_89 || '1.420',
        'g_90': referenceValues.g_90 || '1.420',
        'g_91': referenceValues.g_91 || '1.420',
        'g_92': referenceValues.g_92 || '1.420',
        'g_93': referenceValues.g_93 || '1.420',
        'f_94': referenceValues.f_94 || '1.80',
        'f_95': referenceValues.f_95 || '3.50',
        'd_96': '29.70',  // Interior floors (not typically in building codes)
        'd_97': referenceValues.d_97 || '50',       // Thermal bridge penalty
        // ... add all section-specific fields
      };
      
      console.log(`SXX: Reference defaults loaded from standard: ${currentStandard}`);
    },

    // Listen for changes to the reference standard and reload defaults
    onReferenceStandardChange: function() {
      console.log('SXX: Reference standard changed, reloading defaults');
      this.setDefaults();
      this.saveState();
      // Only refresh UI if currently in reference mode
      if (ModeManager.currentMode === 'reference') {
        ModeManager.refreshUI();
        calculateAll();
      }
    },

    saveState: function() {
      localStorage.setItem('SXX_REFERENCE_STATE', JSON.stringify(this.state));
    },
    
    setValue: function(fieldId, value, source = "user") { 
      this.state[fieldId] = value; 
      this.saveState();
      
      // Mark field as user-modified for visual feedback
      if (source === "user" || source === "user-modified") {
        this.markAsUserModified(fieldId);
      }
    },
    
    getValue: function(fieldId) { 
      return this.state[fieldId]; 
    },
    
    markAsUserModified: function(fieldId) {
      // Apply visual styling to indicate user modification
      const element = document.querySelector(`[data-field-id="${fieldId}"]`);
      if (element && ModeManager.currentMode === 'reference') {
        element.classList.remove('reference-default');
        element.classList.add('reference-modified');
      }
    }
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
        window.TEUI.StateManager.addListener('d_13', () => {
          ReferenceState.onReferenceStandardChange();
        });
      }
    },
    
    resetState: function() {
        console.log("SXX: Resetting state and clearing localStorage.");
        
        // Reset both states to their current dynamic defaults
        TargetState.setDefaults();
        TargetState.saveState();
        ReferenceState.setDefaults();  // This will reload from current d_13 selection
        ReferenceState.saveState();
        
        // Clear all user-modified visual indicators
        this.clearUserModifiedIndicators();
        
        console.log("SXX: States have been reset to defaults.");
        
        // After resetting, refresh the UI and recalculate
        this.refreshUI();
        calculateAll();
    },
    
    clearUserModifiedIndicators: function() {
      const sectionElement = document.getElementById("sectionElementId");
      if (!sectionElement) return;
      
      const modifiedElements = sectionElement.querySelectorAll('.reference-modified, .target-modified');
      modifiedElements.forEach(element => {
        element.classList.remove('reference-modified', 'target-modified');
        element.classList.add(this.currentMode === 'reference' ? 'reference-default' : 'target-default');
      });
    },

    refreshUI: function() {
      // Standard UI refresh logic + visual state indicators
      const sectionElement = document.getElementById("sectionElementId");
      if (!sectionElement) return;

      const currentState = this.getCurrentState();
      const fieldsToSync = ['field1', 'field2']; // Define per section

      fieldsToSync.forEach(fieldId => {
          const stateValue = currentState.getValue(fieldId);
          if (stateValue === undefined || stateValue === null) return;

          const element = sectionElement.querySelector(`[data-field-id="${fieldId}"]`);
          if (!element) return;
          
          // Update element value (standard logic)
          // ... element update code ...
          
          // Apply visual state indicators
          this.applyVisualStateIndicators(element, fieldId);
      });
    },
    
    applyVisualStateIndicators: function(element, fieldId) {
      // Remove all state classes
      element.classList.remove('reference-default', 'reference-modified', 'target-default', 'target-modified');
      
      if (this.currentMode === 'reference') {
        // Check if this field has been user-modified vs. default
        const isUserModified = this.isFieldUserModified(fieldId);
        element.classList.add(isUserModified ? 'reference-modified' : 'reference-default');
      } else {
        // Target mode: check for user modifications
        const isUserModified = this.isFieldUserModified(fieldId);
        element.classList.add(isUserModified ? 'target-modified' : 'target-default');
      }
    },
    
    isFieldUserModified: function(fieldId) {
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
if (ModeManager.currentMode === 'reference') {
  referencePercent = 100;  // Always 100% in reference mode
  isGood = true;           // Always pass in reference mode
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

#### **Dynamic Reference Values**
The comparison must use **dynamic reference values** from the current ReferenceState, not static baselines:

```javascript
function updateReferenceIndicators(rowId) {
  // ✅ CORRECT: Use dynamic reference values
  const referenceValue = ModeManager.currentMode === 'reference' 
    ? ModeManager.getValue(fieldId)  // Use current reference state
    : ReferenceState.getValue(fieldId); // Use reference state for comparison
    
  // ❌ WRONG: Use static baseline values
  // const referenceValue = baselineValues[rowId]?.value;
}
```

#### **Area Field Preservation**
When d_13 (reference standard) changes:

- **Must Update**: RSI values (f_*), U-values (g_*) from ReferenceValues.js
- **Must Preserve**: User-modified area values (d_*) - these are design choices, not code requirements

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

**1. Section 09 (Internal Gains)** ← *Start Here*
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

**6. Section 04 (Energy Summary - Emissions & Fuels)** ← *CRITICAL*
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

**10. Section 01 (Key Values)** ← *Final Target*
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
2. **Implement Header Controls**: Toggle switch + Reset button  
3. **Add State Persistence**: localStorage with section-specific keys
4. **Update Helper Functions**: Route all data through ModeManager
5. **Test & Validate**: Reference mode, Target mode, cross-section flow

#### **Post-Refactoring Validation**
- [ ] Reference mode shows 100%/✓ for all comparisons
- [ ] Target mode calculations are accurate
- [ ] Cross-section dependencies work correctly
- [ ] UI state synchronization functions properly
- [ ] Reset functionality works as expected

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

**⚠️ WARNING**: The Section 12 refactor has proven **exceptionally challenging** and is **NOT YET COMPLETE**. This section documents hard-learned lessons from **7+ refactor attempts** over **3 days** to help future implementers avoid the same pitfalls.

### **🎯 Current Status: Partially Functional but Unstable**

**✅ Progress Made:**
- ✅ **Dropdown Blanking Fixed**: Identified root cause as incomplete refactoring (dead function reference in cleanup code)
- ✅ **Event Listeners Working**: Dropdowns now fire events and trigger calculations  
- ✅ **Calculation Chain Active**: `calculateAll()` executes when dropdowns change
- ✅ **Basic State Structure**: TargetState/ReferenceState/ModeManager in place

**❌ Outstanding Issues (As of July 25, 2025):**
- ❌ **Dropdown Blanking Persists**: After 1-2 edits, dropdowns still go blank
- ❌ **Reset Button Non-Functional**: Does nothing when clicked
- ❌ **One-Way State Persistence**: Target→Reference works, Reference→Target fails
- ❌ **State Corruption**: User changes don't persist across mode toggles

### **🔍 Critical Debugging Patterns That Saved Time**

#### **1. Systematic Console Logging**
```javascript
// Add to dropdown handlers to track event firing
console.log(`S12: Dropdown ${fieldId} changed to: ${this.value}`);

// Add to ModeManager.setValue to track state changes  
console.log(`S12: ModeManager.setValue(${fieldId}, ${value}) in ${this.currentMode} mode`);

// Add to refreshUI to track state persistence
console.log(`S12: refreshUI - ${fieldId} = ${stateValue}`);
```

**Lesson**: Without logging, "dead dropdowns" appeared to be a Pattern A issue when it was actually an initialization crash.

#### **2. Error Log Analysis**
```bash
grep -A5 -B5 "Error.*initializeEventHandlers" Logs.md
```

**Breakthrough**: Found `ReferenceError: handleDropdownChange is not defined` - 3 days of debugging solved in 5 minutes.

#### **3. Function Reference Auditing** 
```bash
grep -n "handleDropdownChange\|handleFieldBlur\|removeEventListener" targetFile.js
```

**Lesson**: Incomplete refactoring leaves dead function references that crash initialization silently.

### **🚨 Specific S12 Anti-Patterns Discovered**

#### **❌ Anti-Pattern 1: Incomplete Function Removal**
```javascript
// WRONG: Removed function but left cleanup reference
// dropdown.removeEventListener("change", handleDropdownChange); // ← CRASHES
// function handleDropdownChange() { ... } // ← DELETED
```

#### **❌ Anti-Pattern 2: Mixed Event Handler Patterns**
- S12 tried to use both `handleDropdownChange()` AND inline handlers
- This created conflicts and state management confusion
- **Solution**: Pick ONE pattern (S10's inline) and implement completely

#### **❌ Anti-Pattern 3: Over-Engineering refreshUI**
- S12's `refreshUI` included safety checks that other sections don't need
- These checks actually broke dropdown value setting
- **Solution**: Copy S10's simple `dropdown.value = stateValue` exactly

### **🎯 Comparison: Why S10/S11 Work vs S12 Struggles**

| **Aspect** | **S10/S11 (Working)** | **S12 (Problematic)** |
|------------|------------------------|------------------------|
| **Event Pattern** | Pure inline handlers | Mixed/conflicting patterns |
| **refreshUI** | Simple, direct | Over-engineered with safety checks |
| **Function Cleanup** | Complete removal | Incomplete, dead references |
| **State Management** | Clean, consistent | Mixed with legacy patterns |
| **Field Count** | 8-12 fields | 5 fields (simpler but buggier) |

### **🔧 Debugging Sequence for Future S12 Work**

1. **Verify Initialization**: Check for `initializeEventHandlers` errors in console
2. **Test Event Firing**: Add logging to verify dropdown events trigger
3. **Track State Changes**: Log `ModeManager.setValue()` calls
4. **Verify State Persistence**: Log `refreshUI()` reads from state
5. **Test Reset Functionality**: Log reset button event handlers
6. **Check DOM Updates**: Verify `refreshUI()` actually updates dropdowns

### **🚫 Resource Drain Warning**

**Time Investment**: S12 has consumed **3+ days** of development time across **multiple AI agents**
**Complexity**: Disproportionately complex for a **5-field section**
**Recommendation**: Consider **full rewrite** from S10/S11 working patterns rather than continued incremental fixes

### **📋 Next Steps for S12 Completion**

**Immediate Priorities** (in order):
1. Fix dropdown blanking after edits (likely refreshUI issue)
2. Fix reset button functionality (check event listener attachment)
3. Fix bidirectional state persistence (TargetState/ReferenceState corruption)
4. Simplify refreshUI to match S10's exact pattern
5. Remove any remaining Pattern B contamination

**Alternative Approach**: 
- Start fresh with S10's working code as template
- Copy dropdown structure exactly  
- Copy ModeManager pattern exactly
- Copy refreshUI pattern exactly
- **Stop trying to fix the current broken implementation**

---

**⚠️ IMPORTANT**: This section is a **work in progress** and should be updated as S12 issues are resolved. Future implementers should consider the **cost/benefit** of continuing to debug S12 vs starting fresh with proven patterns.

--- 