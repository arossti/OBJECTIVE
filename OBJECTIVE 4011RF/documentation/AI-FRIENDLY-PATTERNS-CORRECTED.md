# 🤖 **AI-FRIENDLY DUAL-STATE PATTERNS (CORRECTED)**

*Zero Fallback, Complete State Isolation Patterns*

## 🎯 **Core Principle: 100% State Isolation - Zero Fallbacks**

- **Eliminate**: All global state (`d_19`, `h_15`, etc.)
- **Use Only**: Prefixed state (`target_d_19`, `ref_d_19`)
- **No Fallbacks**: Never read unprefixed values in calculations
- **Complete Independence**: Target and Reference are two different buildings

### **State Model**
```javascript
// ❌ FORBIDDEN: Global state
d_19: "Toronto"

// ✅ REQUIRED: Only prefixed state
target_d_19: "Toronto"    // User's design building location
ref_d_19: "Attawapiskat"  // Reference standard building location
```

---

## 🎯 **User Experience Flow**

### **Target Mode User Action:**
```javascript
// User selects "Toronto" from climate dropdown in Target mode
ModeManager.currentMode = "target";
// Event handler writes to: target_d_19 = "Toronto"
// Calculations read from: target_d_19, target_h_15, etc.
// Result: Target building in Toronto
```

### **Reference Mode User Action:**
```javascript
// User selects "Attawapiskat" from climate dropdown in Reference mode  
ModeManager.currentMode = "reference";
// Event handler writes to: ref_d_19 = "Attawapiskat"
// Calculations read from: ref_d_19, ref_h_15, etc.
// Result: Reference building in Attawapiskat
```

### **Complete Independence:**
- **Target**: Toronto building with user's design (HSPF=12.5, custom envelope)
- **Reference**: Attawapiskat building with code minimums (HSPF=7.1, standard envelope)
- **No Contamination**: Changes in one mode never affect the other

---

## 🚀 **Benefits of Zero Fallback Approach**

1. **True Independence**: Target and Reference can be completely different buildings
2. **No Contamination**: Impossible for modes to accidentally share state
3. **Clear Architecture**: All state is explicitly prefixed
4. **Debugging Clarity**: Easy to trace which mode is being calculated
5. **Future-Proof**: Ready for advanced scenarios (different standards, locations, etc.)

This approach achieves your vision of **two completely independent building models** with **zero possibility of state contamination**.

## 📝 **Pattern 1: Add ModeManager (Same as before)**

### **Find** (at top of section, after namespace creation):
```javascript
window.TEUI.SectionModules.sectXX = (function () {
```

### **Replace With**:
```javascript
window.TEUI.SectionModules.sectXX = (function () {
  //==========================================================================
  // MODE MANAGER (Dual-State Support)
  //==========================================================================
  const ModeManager = {
    currentMode: "target",
    switchMode: function(mode) {
      if (mode !== "target" && mode !== "reference") return;
      this.currentMode = mode;
    }
  };
  window.TEUI.sectXX.ModeManager = ModeManager;
```

---

## 📝 **Pattern 2: User Input Event Handlers (CORRECTED - No Global Writes)**

### **Find** (dropdown change handlers):
```javascript
dropdown.addEventListener("change", function() {
  const fieldId = this.getAttribute("data-field-id");
  window.TEUI.StateManager.setValue(fieldId, this.value, "user-modified");
});
```

### **Replace With**:
```javascript
dropdown.addEventListener("change", function() {
  const fieldId = this.getAttribute("data-field-id");
  
  // Write ONLY to current mode's state (no global writes)
  const prefix = ModeManager.currentMode === "target" ? "target_" : "ref_";
  window.TEUI.StateManager.setValue(`${prefix}${fieldId}`, this.value, "user-modified");
  
  // Trigger recalculation
  calculateAll();
});
```

### **Find** (editable field blur handlers):
```javascript
field.addEventListener("blur", function() {
  const fieldId = this.getAttribute("data-field-id");
  const value = this.textContent.trim();
  window.TEUI.StateManager.setValue(fieldId, value, "user-modified");
});
```

### **Replace With**:
```javascript
field.addEventListener("blur", function() {
  const fieldId = this.getAttribute("data-field-id");
  const value = this.textContent.trim();
  
  // Write ONLY to current mode's state (no global writes)
  const prefix = ModeManager.currentMode === "target" ? "target_" : "ref_";
  window.TEUI.StateManager.setValue(`${prefix}${fieldId}`, value, "user-modified");
  
  // Trigger recalculation
  calculateAll();
});
```

---

## 📝 **Pattern 3: Mode-Aware Reading (CORRECTED - Zero Fallbacks)**

### **Find** (existing helper functions):
```javascript
function getNumericValue(fieldId, defaultValue = 0) {
  const value = window.TEUI.StateManager.getValue(fieldId);
  return window.TEUI.parseNumeric(value, defaultValue);
}
```

### **Replace With**:
```javascript
function getNumericValue(fieldId, defaultValue = 0) {
  // STRICT: Only read from prefixed state, never fallback to global
  const prefix = ModeManager.currentMode === "target" ? "target_" : "ref_";
  const value = window.TEUI.StateManager.getValue(`${prefix}${fieldId}`);
  return window.TEUI.parseNumeric(value, defaultValue);
}
```

### **If section doesn't have getNumericValue, add these helpers:**
```javascript
//==========================================================================
// MODE-AWARE HELPERS (Zero Fallback, Complete State Isolation)
//==========================================================================
function getNumericValue(fieldId, defaultValue = 0) {
  // STRICT: Only read from prefixed state, never fallback
  const prefix = ModeManager.currentMode === "target" ? "target_" : "ref_";
  const value = window.TEUI.StateManager.getValue(`${prefix}${fieldId}`);
  return window.TEUI.parseNumeric(value, defaultValue);
}

function getFieldValue(fieldId, defaultValue = "") {
  // STRICT: Only read from prefixed state, never fallback
  const prefix = ModeManager.currentMode === "target" ? "target_" : "ref_";
  const value = window.TEUI.StateManager.getValue(`${prefix}${fieldId}`);
  return value === null || value === undefined ? defaultValue : value;
}

function setFieldValue(fieldId, value) {
  // Write to current mode's prefixed state only
  const prefix = ModeManager.currentMode === "target" ? "target_" : "ref_";
  window.TEUI.StateManager.setValue(`${prefix}${fieldId}`, value, "calculated");
}
```

---

## 📝 **Pattern 4: Dual Calculation Engines (Same as before)**

### **Find** (main calculateAll function):
```javascript
function calculateAll() {
  // ... existing calculation logic ...
}
```

### **Replace With**:
```javascript
function calculateAll() {
  // Run Target calculations using target_ prefixed state
  calculateTargetModel();
  
  // Run Reference calculations using ref_ prefixed state
  calculateReferenceModel();
}

function calculateTargetModel() {
  const originalMode = ModeManager.currentMode;
  ModeManager.currentMode = "target";
  
  // ... existing calculation logic moves here ...
  
  ModeManager.currentMode = originalMode;
}

function calculateReferenceModel() {
  const originalMode = ModeManager.currentMode;
  ModeManager.currentMode = "reference";
  
  // Copy of calculation logic for Reference mode
  // ... same logic as calculateTargetModel but reads ref_ state ...
  
  ModeManager.currentMode = originalMode;
}
```

---

## 📝 **Pattern 5: Expose ModeManager (Same as before)**

### **Find** (return statement at end of section):
```javascript
return {
  getFields: getFields,
  getDropdownOptions: getDropdownOptions,
  getLayout: getLayout,
  // ... other exports ...
};
```

### **Replace With**:
```javascript
return {
  getFields: getFields,
  getDropdownOptions: getDropdownOptions,
  getLayout: getLayout,
  // ... other exports ...
  ModeManager: ModeManager,
};
```

---

## 📝 **Pattern 6A: Migrate Existing Global State (CRITICAL)**

### **Add to onSectionRendered - Run ONCE during migration:**
```javascript
function migrateGlobalToPrefix() {
  // Migrate existing global state to prefixed state (ONE-TIME OPERATION)
  const fieldsToMigrate = ["d_19", "h_15", "d_97"]; // Add all relevant fields
  
  fieldsToMigrate.forEach(fieldId => {
    const globalValue = window.TEUI.StateManager.getValue(fieldId);
    
    if (globalValue !== null && globalValue !== undefined) {
      // Copy global value to Target state (preserve existing user data)
      if (!window.TEUI.StateManager.getValue(`target_${fieldId}`)) {
        window.TEUI.StateManager.setValue(`target_${fieldId}`, globalValue, "migrated");
      }
      
      // Initialize Reference state with appropriate defaults or code values
      if (!window.TEUI.StateManager.getValue(`ref_${fieldId}`)) {
        const refDefault = getReferenceDefault(fieldId); // Helper function for ref defaults
        window.TEUI.StateManager.setValue(`ref_${fieldId}`, refDefault, "default");
      }
      
      // REMOVE global state after migration
      window.TEUI.StateManager.removeValue(fieldId);
    }
  });
}

function getReferenceDefault(fieldId) {
  // Define Reference defaults based on building standards
  const referenceDefaults = {
    "d_19": "Attawapiskat",  // Reference climate location
    "h_15": "200",           // Reference building area
    "d_97": "0.2",           // Reference thermal bridge penalty (20%)
    // Add more as needed
  };
  
  return referenceDefaults[fieldId] || "0";
}
```

---

## 📝 **Pattern 6: Initialize Default State (UPDATED)**

### **Add to onSectionRendered or registerWithStateManager:**
```javascript
function initializeDualState() {
  // STEP 1: Migrate existing global state (ONE-TIME)
  migrateGlobalToPrefix();
  
  // STEP 2: Ensure both Target and Reference state exist with defaults
  const defaultFields = {
    "d_19": "Toronto",    // Target default: Toronto
    "h_15": "200",        // Target default: 200m²
    // ... add other key fields ...
  };
  
  const referenceFields = {
    "d_19": "Attawapiskat",  // Reference default: Attawapiskat  
    "h_15": "150",           // Reference default: 150m² (smaller reference building)
    // ... add reference defaults ...
  };
  
  Object.entries(defaultFields).forEach(([fieldId, defaultValue]) => {
    // Initialize Target state if not exists
    if (!window.TEUI.StateManager.getValue(`target_${fieldId}`)) {
      window.TEUI.StateManager.setValue(`target_${fieldId}`, defaultValue, "default");
    }
  });
  
  Object.entries(referenceFields).forEach(([fieldId, defaultValue]) => {
    // Initialize Reference state if not exists
    if (!window.TEUI.StateManager.getValue(`ref_${fieldId}`)) {
      window.TEUI.StateManager.setValue(`ref_${fieldId}`, defaultValue, "default");
    }
  });
}
```

---

## 📝 **Pattern 6B: Mode Switching Must Preserve User Values (CRITICAL)**

### **Problem**: User inputs get overwritten when switching modes
**Example Bug**: User edits Reference mode field to 140, switches to Target mode and back, Reference field reverts to default 120.

### **Root Cause**: Mode switching calls setDefaults() that overwrites existing user values
```javascript
// ❌ WRONG: Overwrites user input every time
switchMode: function(mode) {
  if (mode === "reference") {
    this.setReferenceDefaults(); // Overwrites user values!
  }
  this.refreshUI();
}

setReferenceDefaults: function() {
  const defaults = { ref_m_19: "120" };
  // ❌ BAD: Force overwrites user's 140 with default 120
  Object.entries(defaults).forEach(([fieldId, defaultValue]) => {
    StateManager.setValue(fieldId, defaultValue, "default");
  });
}
```

### **✅ CORRECT PATTERN: Conditional Defaults Only**
```javascript
setReferenceDefaults: function() {
  const referenceDefaults = {
    ref_d_19: "ON",
    ref_h_19: "Attawapiskat", 
    ref_m_19: "120",  // Only set if user hasn't modified it
    ref_l_24: "24"
  };

  // ✅ CORRECT: Only set defaults where values don't exist
  Object.entries(referenceDefaults).forEach(([fieldId, defaultValue]) => {
    if (!window.TEUI.StateManager.getValue(fieldId)) {
      window.TEUI.StateManager.setValue(fieldId, defaultValue, "default");
    }
  });
}
```

### **✅ ALTERNATIVE PATTERN: Only Set Defaults Once During Initialization**
```javascript
switchMode: function(mode) {
  this.currentMode = mode;
  
  // ✅ GOOD: Only refresh UI, don't reset defaults
  this.refreshUI(); // Shows user's existing values for current mode
  
  // Optional: Only trigger calculations if needed
  if (mode === "reference") {
    this.loadReferenceDataAndCalculate();
  }
}
```

**Key Principle**: Mode switching = UI refresh, NOT data reset

---