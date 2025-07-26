# 🎯 **TEUI 4.011RF - COMPREHENSIVE WORKPLAN & ARCHITECTURE GUIDE**

**Date**: July 01, 2025, 14h28  
**Status**: 🔄 **PARTIAL DUAL-STATE IMPLEMENTATION** - Only S01-S09 refactored, S10-S15 need complete overhaul  
**Template**: `sections/4011-Section03.js` - Use as canonical pattern

---

## 🚨 **CRITICAL ARCHITECTURE REQUIREMENTS - NO COMPROMISES**

### **1. 100% STATE ISOLATION - ZERO TOLERANCE FOR CONTAMINATION**

**Target Mode Changes** → ONLY affect `target_` prefixed state  
**Reference Mode Changes** → ONLY affect `ref_` prefixed state  
**Complete Independence** → Two entirely different buildings/scenarios possible

**❌ ABSOLUTELY FORBIDDEN PATTERNS (Normal Mode):**

```javascript
// WRONG: Writing to both states from user input (normal mode)
StateManager.setValue(fieldId, value);
StateManager.setValue(`ref_${fieldId}`, value);

// WRONG: Fallback to global values
const value = getFieldValue(fieldId) || defaultValue;
const value =
  StateManager.getValue(fieldId) || StateManager.getValue(`target_${fieldId}`);

// WRONG: Reading unprefixed values in calculations
const area = StateManager.getValue("h_15"); // Should be target_h_15 or ref_h_15
```

**✅ EXCEPTION: "Mirror Target" Button Operation:**

```javascript
// ALLOWED: When Mirror Target button is explicitly clicked
function mirrorTargetToReference() {
  // One-time internal "import" operation
  Object.keys(targetState).forEach((fieldId) => {
    const targetValue = StateManager.getValue(`target_${fieldId}`);
    StateManager.setValue(`ref_${fieldId}`, targetValue, "mirrored");
  });

  // Apply reference standards to mirrored data
  const standard = StateManager.getValue("ref_d_13");
  applyReferenceMinimums(standard);
}

// After mirroring, Reference mode operates independently
// Only d_13 changes trigger reapplication of ReferenceValues.js minimums
```

**✅ REQUIRED PATTERNS:**

```javascript
// CORRECT: Mode-aware reading with NO fallbacks
function getModeValue(fieldId) {
  const prefix = currentMode === "target" ? "target_" : "ref_";
  return StateManager.getValue(`${prefix}${fieldId}`);
}

// CORRECT: User input only affects current mode
function handleUserInput(fieldId, value) {
  const prefix = currentMode === "target" ? "target_" : "ref_";
  StateManager.setValue(`${prefix}${fieldId}`, value, "user-modified");
}
```

### **2. NO FALLBACKS EVER - STRICT CODE ONLY**

**Why fallbacks are unnecessary:**

- Default state exists for ALL values (target* and ref* prefixed)
- Imported Excel data provides initial values
- User modifications override defaults
- If a value doesn't exist, it should be explicitly set to 0 or ""

**❌ FORBIDDEN:** Any `||` fallback logic  
**✅ REQUIRED:** Explicit error handling and default state management

### **3. MODE SWITCHING RULES**

**User Changes Target Mode** → Target state updated, Reference state UNCHANGED  
**User Changes Reference Mode** → Reference state updated, Target state UNCHANGED  
**Exception: "Lock Reference to Target" Mode** → Reference state mirrors Target geometry, then applies only ReferenceValues.js minimums based on dropdown d_13 selection

### **3a. REFERENCE MIRRORING SYSTEM (Future Feature)**

**"Mirror Target" Button Workflow:**

```javascript
// One-time copy operation when button is clicked
function mirrorTargetToReference() {
  // Step 1: Copy ALL Target state to Reference state
  Object.keys(targetState).forEach((fieldId) => {
    const targetValue = StateManager.getValue(`target_${fieldId}`);
    StateManager.setValue(`ref_${fieldId}`, targetValue, "mirrored");
  });

  // Step 2: Apply ReferenceValues.js minimums based on current d_13
  const standard = StateManager.getValue("ref_d_13"); // Use mirrored d_13
  applyReferenceMinimums(standard);

  // Step 3: Recalculate Reference model
  calculateReferenceModel();
}

// When d_13 changes in Reference mode, reapply minimums
function onReferenceStandardChange(newStandard) {
  StateManager.setValue("ref_d_13", newStandard, "user-modified");
  applyReferenceMinimums(newStandard); // Only update specific fields
  calculateReferenceModel();
}
```

**Workflow Logic:**

1. **Mirror Button Clicked** → Complete Target→Reference copy
2. **d_13 Changed in Reference Mode** → Reapply only ReferenceValues.js minimums
3. **Other Reference Edits** → Independent modifications allowed
4. **No Automatic Syncing** → Mirror is one-time operation, manual button press required

**Use Cases:**

- **"Start with my design, apply code minimums"** → Mirror + auto-apply standards
- **"Compare my design to different standards"** → Mirror once, toggle d_13 in Reference mode
- **"Custom Reference building"** → Don't use Mirror, build independently

---

## 📊 **ACTUAL CURRENT STATUS (CORRECTED)**

### **✅ PROPERLY REFACTORED (S01-S09)**

| Section | ModeManager     | Dual Calculations | State Isolation | Status                  |
| ------- | --------------- | ----------------- | --------------- | ----------------------- |
| **S01** | ❌ Missing      | ✅ Yes            | 🔶 Partial      | Needs ModeManager       |
| **S02** | ❌ Missing      | ❌ No             | ❌ No           | Needs complete refactor |
| **S03** | ✅ Complete     | ✅ Yes            | ✅ Clean        | **TEMPLATE MODEL**      |
| **S04** | ❌ Missing      | ✅ Yes            | 🔶 Partial      | Needs ModeManager       |
| **S05** | ✅ Complete     | ✅ Yes            | ✅ Clean        | Good                    |
| **S06** | ✅ Complete     | ✅ Yes            | ✅ Clean        | Good                    |
| **S07** | ❌ Missing      | ❌ No             | ❌ No           | Needs complete refactor |
| **S08** | ✅ Complete     | ✅ Yes            | ✅ Clean        | Good                    |
| **S09** | ❌ CONTAMINATED | ✅ Yes            | ❌ BROKEN       | **CRITICAL ISSUE**      |

### **❌ NOT REFACTORED (S10-S15)**

| Section | Status | Critical Issues                                          |
| ------- | ------ | -------------------------------------------------------- |
| **S10** | Legacy | No ModeManager, no state isolation, global contamination |
| **S11** | Legacy | No ModeManager, no state isolation, global contamination |
| **S12** | Legacy | No ModeManager, no state isolation, global contamination |
| **S13** | Legacy | No ModeManager, no state isolation, global contamination |
| **S14** | Legacy | No ModeManager, no state isolation, global contamination |
| **S15** | Legacy | No ModeManager, no state isolation, global contamination |

---

## 🚨 **CRITICAL S09 CONTAMINATION DETECTED**

**Current S09 Issues Found:**

```javascript
// Line 820: Global value access without prefix
const referenceStandard = getFieldValue("d_13") || "";
const buildingType = getFieldValue("d_12") || "";

// Line 785: Cross-section dependency without mode awareness
const coolingDays = window.TEUI.parseNumeric(getFieldValue("m_19")) || 120;

// Line 1280-1295: Helper function with fallback contamination
function getFieldValue(fieldId) {
  if (window.TEUI?.StateManager?.getValue) {
    const value = window.TEUI.StateManager.getValue(fieldId); // UNPREFIXED!
    if (value !== null && value !== undefined) {
      return value;
    }
  }
  // Falls back to DOM - CONTAMINATION!
}
```

---

## 🎯 **DEFINITIVE FINAL REFACTORING PLAN**

### **PHASE 1: Fix S09 IMMEDIATELY (Priority 1)**

- Replace ALL `getFieldValue()` calls with mode-aware reading
- Eliminate ALL fallback patterns
- Implement strict prefix-only access
- Fix contamination in calculatePlugLoads(), calculateEquipmentLoads()

### **PHASE 2: Complete Missing ModeManagers (S01, S02, S04, S07)**

- Add proper ModeManager objects
- Implement mode-aware helper functions
- Update event handlers for 100% state isolation

### **PHASE 3: Complete Legacy Sections (S10-S15)**

- Full dual-state architecture implementation
- Mode-aware calculations
- Prefix-only state access
- Zero fallback tolerance

---

## 📋 **SECTION-BY-SECTION REQUIREMENTS CHECKLIST**

### **Required for EVERY Section:**

**1. ModeManager Object:**

```javascript
const ModeManager = {
  currentMode: "target",
  switchMode: function (newMode) {
    this.currentMode = newMode;
  },
};
window.TEUI.sectXX.ModeManager = ModeManager;
```

**2. Mode-Aware Helper Functions (NO FALLBACKS):**

```javascript
function getNumericValue(fieldId) {
  const prefix = ModeManager.currentMode === "target" ? "target_" : "ref_";
  const value = StateManager.getValue(`${prefix}${fieldId}`);
  return window.TEUI.parseNumeric(value);
}

function setFieldValue(fieldId, value) {
  const prefix = ModeManager.currentMode === "target" ? "target_" : "ref_";
  StateManager.setValue(`${prefix}${fieldId}`, value, "calculated");
  if (ModeManager.currentMode === "target") {
    // Only update DOM in target mode
    updateDOMElement(fieldId, value);
  }
}
```

**3. Event Handlers with 100% State Isolation:**

```javascript
// User input ONLY affects current mode
field.addEventListener("change", function () {
  const prefix = ModeManager.currentMode === "target" ? "target_" : "ref_";
  StateManager.setValue(`${prefix}${fieldId}`, this.value, "user-modified");
  calculateAll();
});
```

**4. Dual Calculation Engines:**

```javascript
function calculateReferenceModel() {
  const originalMode = ModeManager.currentMode;
  ModeManager.switchMode("reference");
  // All calculations use ref_ prefixed values
  ModeManager.switchMode(originalMode);
}

function calculateTargetModel() {
  const originalMode = ModeManager.currentMode;
  ModeManager.switchMode("target");
  // All calculations use target_ prefixed values
  ModeManager.switchMode(originalMode);
}
```

---

## 🔥 **CONTAMINATION ELIMINATION PATTERNS**

### **Replace ALL instances of:**

**❌ WRONG:**

```javascript
getFieldValue("h_15") || 0;
StateManager.getValue("d_12") || "default";
const value = globalField || fallbackValue;
```

**✅ CORRECT:**

```javascript
getNumericValue("h_15"); // Uses mode-aware prefix
getModeValue("d_12"); // Strict prefix, no fallbacks
const value = getModeValue(fieldId); // Explicit mode awareness
```

---

## 🎯 **SUCCESS CRITERIA - ABSOLUTE REQUIREMENTS**

1. **✅ Zero global value access** - All values prefixed with target* or ref*
2. **✅ Zero fallback patterns** - No `||` logic anywhere in field access
3. **✅ 100% state isolation** - User changes only affect current mode
4. **✅ Mode switching works** - Can have completely different buildings in Target vs Reference
5. **✅ Cross-section dependencies** - All use prefixed values only
6. **✅ DOM updates controlled** - Only in target mode for global fields

---

## 🏁 **DELIVERY COMMITMENT**

**This is the FINAL refactoring iteration. Each section will be completed to 100% compliance with these requirements on the first pass. No partial implementations, no "we'll fix it later" - each section must fully meet ALL criteria before moving to the next.**

**Target Completion:** All 15 sections implementing perfect dual-state architecture with zero contamination tolerance.
