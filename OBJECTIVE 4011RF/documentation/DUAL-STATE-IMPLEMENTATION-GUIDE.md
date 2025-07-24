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

## 🏛️ **ARCHITECTURAL MANDATE: The Self-Contained State Module (FINAL STANDARD)**

**⚠️ CRITICAL DECREE**: As of July 2025, **Pattern A (Self-Contained State Objects)** is the **SOLE APPROVED APPROACH** for dual-state implementation. All previous patterns using global prefixed state (target_, ref_) are **DEPRECATED** and should be migrated to this standard.

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

### **Benefits of Consistent Architecture**

When all sections use Pattern A:

- **🎯 State Isolation**: Complete independence between Target and Reference
- **🔄 Predictable Behavior**: All sections work the same way
- **🛠️ Easier Maintenance**: Consistent patterns across codebase
- **🚀 Performance**: Optimized state management and calculations
- **🎨 Better UX**: Consistent controls and visual feedback
- **📈 Scalability**: Easy to add new sections or features

--- 