# 🔥 S12-BATTLE.md - Section 12 Refactor Battle Plan (Attempt #6)

**Status**: ⚔️ **BATTLE READY** | **Date**: July 25, 2025  
**Context**: 6th refactor attempt. Previous attempts: FAIL-CLAUDE, FAIL-GEMINI, FAIL3, current FAIL4  
**Mandate**: Follow DUAL-STATE-IMPLEMENTATION-GUIDE.md **TO THE LETTER**. No deviations, no shortcuts.

---

## 🎯 **MISSION OBJECTIVE: Complete Pattern A Dual-State Implementation**

**🔥 CRITICAL LEARNING**: S11 is more complex than S12 and was successfully refactored. The pattern WORKS when implemented correctly. Our failures stem from incomplete implementation, not architectural flaws.

**⚠️ NON-NEGOTIABLES**:
1. **Follow the Guide Exactly**: No improvisation, no "improvements"
2. **Verify Each Step**: Test functionality before proceeding  
3. **Preserve Robot Fingers**: S11→S12 TB penalty direct connection MUST work
4. **Complete Implementation**: 100% of Pattern A, not 30%

---

## 📋 **PRE-BATTLE ASSESSMENT**

### **Working Reference (S11) - Our Gold Standard**
- ✅ **Complete Pattern A**: TargetState + ReferenceState + ModeManager
- ✅ **Dynamic Reference Loading**: From ReferenceValues.js based on d_13
- ✅ **Visual State Feedback**: User modification indicators
- ✅ **Robot Fingers**: TB penalty slider updates S12 immediately
- ✅ **State Isolation**: Perfect Target/Reference separation
- ✅ **Header Controls**: Working toggle + reset

### **Failed Attempts Analysis**
- **FAIL-CLAUDE**: Good header controls, broken state reading
- **FAIL-GEMINI**: Good mode-aware getGlobalNumericValue, incomplete dual-state
- **FAIL3**: Complete revert
- **FAIL4**: Partial Pattern A facade, missing core functionality

### **S12 Complexity Assessment**
- **5 User Editable Fields**: d_103, g_103, d_105, d_108, g_109
- **Conditional Logic**: g_109 enabled only when d_108 = "MEASURED"
- **External Dependencies**: Climate data (S03), envelope data (S11), areas (S01)
- **Robot Fingers Target**: calculateCombinedUValue() for g_101, g_102 updates

---

## 🚀 **BATTLE PLAN: Step-by-Step Implementation**

### **Phase 0: Battlefield Preparation**

#### **Step 0.1: Restore Working Baseline**
```bash
# Copy working backup as starting point
cp sections/4011-Section12-BACKUP.js sections/4011-Section12.js
git add sections/4011-Section12.js
git commit -m "🔄 S12 Battle Plan: Restore working baseline from backup"
```

#### **Step 0.2: Baseline Functionality Test**
- [ ] Test user edits trigger calculations (dropdowns, d_105, g_109)
- [ ] Test S11 TB penalty slider updates S12 U-values (g_101, g_102)
- [ ] Test conditional g_109 enable/disable based on d_108
- [ ] Document current working state as BASELINE

**⚠️ STOP CONDITION**: If baseline doesn't work, fix it before proceeding.

---

### **Phase 1: Core Dual-State Infrastructure** 

**📖 Reference**: DUAL-STATE-IMPLEMENTATION-GUIDE.md lines 55-120

#### **Step 1.1: Add State Objects (Exact Pattern)**
```javascript
// MANDATORY: Follow guide naming conventions exactly
const TargetState = {
  state: {},
  initialize: function() {
    const savedState = localStorage.getItem('S12_TARGET_STATE');
    if (savedState) {
      this.state = JSON.parse(savedState);
    } else {
      this.setDefaults();
    }
  },
  setDefaults: function() {
    // S12-specific defaults - MUST match sectionRows values
    this.state = {
      'd_103': '2',           // Number of stories (dropdown)
      'g_103': 'Normal',      // Exposure (dropdown)  
      'd_105': '0.00',        // Conditioned volume (editable)
      'd_108': 'TARGET',      // Blower door method (dropdown)
      'g_109': '0.00'         // Measured value (conditional editable)
    };
  },
  saveState: function() {
    localStorage.setItem('S12_TARGET_STATE', JSON.stringify(this.state));
  },
  setValue: function(fieldId, value, source = "user") {
    this.state[fieldId] = value;
    this.saveState();
  },
  getValue: function(fieldId) {
    return this.state[fieldId];
  }
};

const ReferenceState = {
  state: {},
  initialize: function() {
    const savedState = localStorage.getItem('S12_REFERENCE_STATE');
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
    
    // Apply reference values to S12 fields with fallbacks
    this.state = {
      'd_103': referenceValues.d_103 || '2',        // Stories - likely not in codes
      'g_103': referenceValues.g_103 || 'Normal',   // Exposure - may be in codes  
      'd_105': '0.00',                              // Volume - design choice
      'd_108': referenceValues.d_108 || 'TARGET',   // Blower door method - code requirement
      'g_109': referenceValues.g_109 || '0.00'     // Measured - conditional value
    };
    
    console.log(`S12: Reference defaults loaded from standard: ${currentStandard}`);
  },
  // MANDATORY: Include onReferenceStandardChange for d_13 changes
  onReferenceStandardChange: function() {
    console.log('S12: Reference standard changed, reloading defaults');
    this.setDefaults();
    this.saveState();
    // Only refresh UI if currently in reference mode
    if (ModeManager.currentMode === 'reference') {
      ModeManager.refreshUI();
      calculateAll();
    }
  },
  saveState: function() {
    localStorage.setItem('S12_REFERENCE_STATE', JSON.stringify(this.state));
  },
  setValue: function(fieldId, value, source = "user") {
    this.state[fieldId] = value;
    this.saveState();
  },
  getValue: function(fieldId) {
    return this.state[fieldId];
  }
};
```

**✅ Verification Checkpoint 1.1**:
- [ ] TargetState.initialize() works without errors
- [ ] ReferenceState.initialize() works without errors  
- [ ] localStorage keys created: S12_TARGET_STATE, S12_REFERENCE_STATE
- [ ] State values can be set/retrieved: `TargetState.setValue('d_105', '100')`, `TargetState.getValue('d_105')`

#### **Step 1.2: Add ModeManager (Exact Pattern)**
```javascript
const ModeManager = {
  currentMode: "target",
  initialize: function () {
    TargetState.initialize();
    ReferenceState.initialize();
    
    // MANDATORY: Listen for reference standard changes
    if (window.TEUI?.StateManager?.addListener) {
      window.TEUI.StateManager.addListener('d_13', () => {
        ReferenceState.onReferenceStandardChange();
      });
    }
  },
  switchMode: function (mode) {
    if (this.currentMode === mode || (mode !== "target" && mode !== "reference"))
      return;
    this.currentMode = mode;
    console.log(`S12: Switched to ${mode.toUpperCase()} mode`);

    this.refreshUI();
    calculateAll();
  },
  resetState: function() {
    console.log("S12: Resetting state and clearing localStorage.");
    TargetState.setDefaults();
    TargetState.saveState();
    ReferenceState.setDefaults();
    ReferenceState.saveState();
    console.log("S12: States have been reset to defaults.");

    this.refreshUI();
    calculateAll();
  },
  getCurrentState: function () {
    return this.currentMode === "target" ? TargetState : ReferenceState;
  },
  getValue: function (fieldId) {
    return this.getCurrentState().getValue(fieldId);
  },
  setValue: function (fieldId, value, source = "user") {
    this.getCurrentState().setValue(fieldId, value, source);

    // BRIDGE: For backward compatibility, sync Target changes to global StateManager
    if (this.currentMode === "target") {
      window.TEUI.StateManager.setValue(fieldId, value, "user-modified");
    }
  },
  refreshUI: function () {
    const sectionElement = document.getElementById("volumeSurfaceMetrics");
    if (!sectionElement) return;

    const currentState = this.getCurrentState();
    
    // S12-specific fields to sync
    const fieldsToSync = ['d_103', 'g_103', 'd_105', 'd_108', 'g_109'];

    fieldsToSync.forEach(fieldId => {
      const stateValue = currentState.getValue(fieldId);
      if (stateValue === undefined || stateValue === null) return;

      const element = sectionElement.querySelector(`[data-field-id="${fieldId}"]`);
      if (!element) return;
      
      if (element.tagName === 'SELECT') {
        // Handle dropdown
        element.value = stateValue;
      } else if (element.hasAttribute('contenteditable')) {
        // Handle editable field
        element.textContent = stateValue;
      }
    });
  }
};

// MANDATORY: Global exposure
window.TEUI.sect12 = window.TEUI.sect12 || {};
window.TEUI.sect12.ModeManager = ModeManager;
```

**✅ Verification Checkpoint 1.2**:
- [ ] ModeManager.initialize() works without errors
- [ ] ModeManager.switchMode("reference") changes currentMode
- [ ] ModeManager.getValue("d_105") returns correct state value
- [ ] ModeManager.setValue("d_105", "200") updates state and localStorage
- [ ] window.TEUI.sect12.ModeManager exists globally

---

### **Phase 2: Header Controls Integration**

**📖 Reference**: DUAL-STATE-IMPLEMENTATION-GUIDE.md + S11 working example

#### **Step 2.1: Add Header Controls (Copy from S11)**
```javascript
function injectHeaderControls() {
  const sectionHeader = document.querySelector("#volumeSurfaceMetrics .section-header");
  if (!sectionHeader || sectionHeader.querySelector(".local-controls-container")) {
    return; // Already setup or header not found
  }

  const controlsContainer = document.createElement("div");
  controlsContainer.className = "local-controls-container";
  controlsContainer.style.cssText = "display: flex; align-items: center; margin-left: auto; gap: 10px;";

  // Reset Button
  const resetButton = document.createElement("button");
  resetButton.innerHTML = "🔄 Reset";
  resetButton.title = "Reset Section 12 to Defaults";
  resetButton.style.cssText = "padding: 4px 8px; font-size: 0.8em; background-color: #dc3545; color: white; border: none; border-radius: 4px; cursor: pointer;";
  
  resetButton.addEventListener("click", (event) => {
    event.stopPropagation();
    if (confirm("Are you sure you want to reset all inputs in this section to their defaults? This will clear any saved data for Section 12.")) {
      ModeManager.resetState();
    }
  });

  // Toggle Switch (exact copy from S11)
  const stateIndicator = document.createElement("span");
  stateIndicator.textContent = "TARGET";
  stateIndicator.style.cssText = "color: #fff; font-weight: bold; font-size: 0.8em; background-color: rgba(0, 123, 255, 0.5); padding: 2px 6px; border-radius: 4px;";

  const toggleSwitch = document.createElement("div");
  toggleSwitch.style.cssText = "position: relative; width: 40px; height: 20px; background-color: #ccc; border-radius: 10px; cursor: pointer;";
  
  const slider = document.createElement("div");
  slider.style.cssText = "position: absolute; top: 2px; left: 2px; width: 16px; height: 16px; background-color: white; border-radius: 50%; transition: transform 0.2s;";

  toggleSwitch.appendChild(slider);
  
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

  controlsContainer.appendChild(resetButton);
  controlsContainer.appendChild(stateIndicator);
  controlsContainer.appendChild(toggleSwitch);
  sectionHeader.appendChild(controlsContainer);
}
```

**✅ Verification Checkpoint 2.1**:
- [ ] Header controls appear in section header
- [ ] Toggle switch changes visual state (TARGET ↔ REFERENCE)
- [ ] Toggle calls ModeManager.switchMode() correctly
- [ ] Reset button shows confirmation and calls ModeManager.resetState()

---

### **Phase 3: Event Handler Integration**

#### **Step 3.1: Update Event Handlers to Use ModeManager**
```javascript
// Replace existing handleDropdownChange
function handleDropdownChange(event) {
  const dropdown = event.target;
  const fieldId = dropdown.getAttribute("data-field-id");
  if (fieldId) {
    console.log(`S12: Dropdown ${fieldId} changed to: ${dropdown.value}`);
    
    // ✅ DUAL-STATE: Store value using ModeManager
    ModeManager.setValue(fieldId, dropdown.value, "user-modified");
    
    // Handle conditional g_109 logic
    if (fieldId === "d_108") {
      handleConditionalEditability();
    }
    
    calculateAll();
  }
}

// Replace existing handleFieldBlur  
function handleFieldBlur(event) {
  const field = event.target;
  const fieldId = field.getAttribute("data-field-id");
  if (!fieldId) return;
  
  const numValue = window.TEUI.parseNumeric(field.textContent);
  if (!isNaN(numValue) && isFinite(numValue)) {
    const formattedValue = window.TEUI.formatNumber(numValue, "number-2dp");
    field.textContent = formattedValue;
    
    // ✅ DUAL-STATE: Store value using ModeManager
    ModeManager.setValue(fieldId, String(numValue), "user-modified");
    calculateAll();
  }
}

// Update conditional editability to use ModeManager
function handleConditionalEditability() {
  const d108Dropdown = document.querySelector('select[data-field-id="d_108"]');
  const g109Cell = document.querySelector('[data-field-id="g_109"]');
  
  if (!d108Dropdown || !g109Cell) return;
  
  // ✅ DUAL-STATE: Use ModeManager to get current value
  const currentD108Value = ModeManager.getValue("d_108") || d108Dropdown.value;
  const isMeasured = currentD108Value === "MEASURED";
  
  if (isMeasured) {
    g109Cell.setAttribute("contenteditable", "true");
    g109Cell.classList.add("user-input", "editable");
    g109Cell.classList.remove("disabled-input", "ghosted");
    g109Cell.style.backgroundColor = "#f0f8ff";
    g109Cell.style.color = "#000";
  } else {
    g109Cell.setAttribute("contenteditable", "false");
    g109Cell.classList.remove("user-input", "editable");
    g109Cell.classList.add("disabled-input", "ghosted");
    g109Cell.style.backgroundColor = "#f8f9fa";
    g109Cell.style.color = "#6c757d";
    g109Cell.textContent = "N/A";
    ModeManager.setValue("g_109", "0", "calculated");
  }
}
```

**✅ Verification Checkpoint 3.1**:
- [ ] Dropdown changes call ModeManager.setValue()
- [ ] Field blur events call ModeManager.setValue()
- [ ] Conditional g_109 logic uses ModeManager.getValue()
- [ ] All user interactions trigger calculateAll()

---

### **Phase 4: Robot Fingers Integration** 

#### **Step 4.1: Preserve Robot Fingers Connection**
```javascript
// CRITICAL: This is the connection that took days to perfect - DO NOT BREAK IT

// In S11 (thermal bridge penalty slider event):
d97Slider.addEventListener("input", function () {
  // ... existing S11 logic ...
  
  // Robot fingers: Direct call to S12 for immediate U-value updates
  if (window.TEUI?.SectionModules?.sect12?.calculateCombinedUValue) {
    window.TEUI.SectionModules.sect12.calculateCombinedUValue();
  }
});

// In S12: Ensure calculateCombinedUValue uses S11's Pattern A dual-state
function calculateCombinedUValue() {
  // ... existing calculation logic ...
  
  // ✅ CRITICAL: Read TB penalty from S11's Pattern A system
  let d97_tbPenaltyPercent;
  if (window.TEUI?.sect11?.ModeManager) {
    const s11Mode = window.TEUI.sect11.ModeManager.currentMode;
    
    if (s11Mode === 'reference') {
      // Use S11's ReferenceState TB penalty
      d97_tbPenaltyPercent = window.TEUI.parseNumeric(
        window.TEUI.sect11.ReferenceState.getValue("d_97")
      ) || 50;
    } else {
      // Use S11's TargetState TB penalty  
      d97_tbPenaltyPercent = window.TEUI.parseNumeric(
        window.TEUI.sect11.TargetState.getValue("d_97")
      ) || 50;
    }
  } else {
    // Fallback to StateManager
    d97_tbPenaltyPercent = parseFloat(getGlobalNumericValue("d_97")) || 50;
  }
  
  // ... rest of calculation with tbFactor = 1 + d97_tbPenaltyPercent / 100 ...
}

// MANDATORY: Expose in public API
return {
  // ... other exports ...
  calculateCombinedUValue: calculateCombinedUValue,
};
```

**✅ Verification Checkpoint 4.1**:
- [ ] S11 TB penalty slider changes immediately update S12 g_101, g_102
- [ ] calculateCombinedUValue reads from S11's dual-state system
- [ ] Robot fingers works in both Target and Reference modes
- [ ] No delay in U-value updates during slider drag

---

### **Phase 5: Initialization Sequence**

#### **Step 5.1: Update onSectionRendered (Follow S11 Pattern)**
```javascript
function onSectionRendered() {
  if (isInitialized) return;

  console.log("S12: Section rendered - initializing Pattern A Dual-State Module.");

  // 1. Initialize the ModeManager and its internal states
  ModeManager.initialize();

  // 2. Setup the section-specific toggle switch in the header
  injectHeaderControls();

  // 3. Initialize event handlers for this section
  initializeEventHandlers();

  // 4. Sync UI to the default (Target) state
  ModeManager.refreshUI();

  // 5. Add StateManager listeners (including robot fingers)
  addStateManagerListeners();

  // 6. Perform initial calculations
  calculateAll();

  // 7. Initialize conditional field state
  handleConditionalEditability();

  isInitialized = true;
  console.log("S12: Pattern A initialization complete.");
}

function addStateManagerListeners() {
  if (!window.TEUI?.StateManager?.addListener) return;

  // CRITICAL: Robot fingers connection
  window.TEUI.StateManager.addListener("d_97", (newValue) => {
    console.log(`[S12] TB penalty changed to: ${newValue}% - updating U-values`);
    calculateCombinedUValue();
  });

  // Climate and dependency listeners
  window.TEUI.StateManager.addListener("d_20", calculateAll);
  window.TEUI.StateManager.addListener("d_21", calculateAll);
  window.TEUI.StateManager.addListener("d_22", calculateAll);
  window.TEUI.StateManager.addListener("h_22", calculateAll);

  console.log("S12: StateManager listeners added successfully");
}
```

**✅ Verification Checkpoint 5.1**:
- [ ] onSectionRendered follows S11 initialization sequence
- [ ] All components initialize in correct order
- [ ] StateManager listeners added for robot fingers and dependencies
- [ ] Initial UI shows Target mode by default

---

## 🧪 **FINAL INTEGRATION TESTING**

### **Test Suite A: Basic Dual-State Functionality**
1. [ ] **Mode Toggle**: Switch between Target/Reference modes
2. [ ] **State Persistence**: Values persist across browser refresh
3. [ ] **Reset Function**: Reset button clears localStorage and resets defaults
4. [ ] **UI Synchronization**: Values update in DOM when switching modes

### **Test Suite B: User Interaction**
1. [ ] **Dropdown Changes**: d_103, g_103, d_108 dropdowns trigger calculations
2. [ ] **Field Edits**: d_105 building volume changes trigger calculations
3. [ ] **Conditional Logic**: g_109 enables/disables based on d_108 selection
4. [ ] **Measured Values**: g_109 edits trigger calculations when enabled

### **Test Suite C: Robot Fingers** 
1. [ ] **S11 Slider → S12 U-values**: TB penalty slider immediately updates g_101, g_102
2. [ ] **Target Mode**: Robot fingers uses S11 TargetState d_97 value
3. [ ] **Reference Mode**: Robot fingers uses S11 ReferenceState d_97 value
4. [ ] **Performance**: No delay during slider drag

### **Test Suite D: Reference System**
1. [ ] **d_13 Changes**: Changing reference standard updates S12 reference values  
2. [ ] **Reference Mode**: All fields show reference defaults from building codes
3. [ ] **Area Preservation**: User-modified areas preserved during d_13 changes
4. [ ] **Calculation Accuracy**: Reference calculations use ref_ prefixed climate data

---

## 🚨 **FAILURE RECOVERY PROCEDURES**

### **If Test Suite A Fails (Basic Dual-State)**
- **Rollback**: `git checkout HEAD~1 sections/4011-Section12.js`
- **Root Cause**: State objects or ModeManager implementation
- **Action**: Re-implement Phase 1 following S11 exactly

### **If Test Suite B Fails (User Interaction)**  
- **Root Cause**: Event handlers not calling ModeManager.setValue()
- **Action**: Check all handleDropdownChange, handleFieldBlur use ModeManager

### **If Test Suite C Fails (Robot Fingers)**
- **Root Cause**: calculateCombinedUValue not reading S11 dual-state correctly
- **Action**: Copy working logic from FAIL-GEMINI's getGlobalNumericValue approach

### **If Test Suite D Fails (Reference System)**
- **Root Cause**: ReferenceState.setDefaults() not loading from ReferenceValues.js
- **Action**: Copy working pattern from S11's onReferenceStandardChange()

---

## 🎯 **SUCCESS CRITERIA**

**✅ VICTORY CONDITIONS**:
1. **100% Test Suite Pass**: All A, B, C, D test suites pass
2. **Feature Parity**: S12 works exactly like original backup + dual-state
3. **Robot Fingers Preserved**: S11 slider → S12 U-values works perfectly
4. **State Isolation**: Target/Reference modes completely independent
5. **Reference Integration**: Dynamic loading from building codes via d_13

**📊 BATTLE METRICS**:
- **Attempt #**: 6 (previous: FAIL-CLAUDE, FAIL-GEMINI, FAIL3, FAIL4)
- **Complexity**: Medium (5 user fields vs S11's 17 fields)
- **Dependencies**: Climate (S03), Envelope (S11), Areas (S01)
- **Critical Path**: Robot fingers TB penalty connection

---

## 💪 **BATTLE MINDSET**

**S11 was more complex and we nailed it.** S12 has:
- **Fewer user fields** (5 vs 17)
- **Simpler calculations** (no dual-engine architecture)
- **Working reference** (S11 Pattern A implementation)
- **Known requirements** (preserve robot fingers)

**We WILL succeed on attempt #6.** The pattern works. The guide works. S11 proves it.

**🔥 NO SHORTCUTS. NO IMPROVISATION. FOLLOW THE GUIDE TO THE LETTER.**

---

*End of Battle Plan* 