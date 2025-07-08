# 🎯 **TEUI 4.011RF - DUAL-STATE IMPLEMENTATION GUIDE**

*Consolidated strategy based on proven patterns from successful S10 test environment*

**Updated**: July 08, 2025  
**Status**: ✅ **Proven Method - S10 Test Environment Successful**  
**Strategy**: **Standalone Testing + Clean Dual-State Patterns**

---

## 🚨 **CRITICAL MANDATE FOR AI AGENTS - READ FIRST**

### **🔥 ABSOLUTE REQUIREMENTS - NO EXCEPTIONS**

**1. STUDY THE SUCCESSFUL TEST FILE FIRST**
- **MANDATORY**: Examine `test-s10-isolation.html` line by line before ANY implementation work
- **This file proves dual-state works perfectly** - understand WHY and HOW it achieves isolation
- **Extract the exact patterns** that create perfect Target ≠ Reference separation

**2. FOLLOW THE METHODOLOGY EXACTLY**  
- **Complex sections (S10, S13, S15)**: Use standalone testing approach - NO DIRECT INTEGRATION
- **Simple sections (S11, S12, S14)**: Apply patterns directly but verify isolation immediately
- **DO NOT skip phases** - each step validates the previous one

**3. UNDERSTAND THE ARCHITECTURE CONFLICT**
- **OLD SYSTEM**: Automatic ReferenceValues loading on mode switch (CAUSES CONTAMINATION)
- **NEW SYSTEM**: "Free-float" Reference state - user defines their own values independently
- **FUTURE SYSTEM**: "Mirror Target" command - one-time import + selective ReferenceValues application

### **🏗️ ARCHITECTURAL TRANSITION STRATEGY**

#### **Current Problem: Legacy ReferenceValues Auto-Loading**
The existing system automatically applies ReferenceValues from `ReferenceValues.js` when switching to Reference mode, **contaminating our clean dual-state isolation**. This must be **completely disabled** for dual-state to work.

#### **New "Free-Float" Reference Architecture**
- **Target Mode**: User-defined values (Toronto building, user design preferences)
- **Reference Mode**: Independent user-defined values (could be identical, could be completely different)
- **No automatic standard loading** - user creates their own reference scenario

#### **Future "Mirror Target" Command (NOT YET IMPLEMENTED)**
A future enhancement will provide a "Mirror Target" button that:
1. **One-time import**: Copies all current Target values to Reference state
2. **Selective standard application**: Applies specific ReferenceValues subset based on `d_13` dropdown selection in REFERENCE mode
3. **User control**: Only happens when explicitly requested, never automatic
4. **Implementation note**: Can repurpose existing reference toggle functions but remove auto-trigger

### **🎯 IMPLEMENTATION IMPERATIVES**

#### **For S10 Implementation:**
1. **Study `test-s10-isolation.html`** - This shows perfect dual-state isolation working
2. **Identify the exact patterns** that prevent contamination in the test environment
3. **Apply those patterns systematically** to the main S10 section
4. **Verify isolation at each step** - Target ≠ Reference values must persist separately
5. **DO NOT integrate until test environment patterns are fully understood**

#### **For All Dual-State Work:**
- **Disable automatic ReferenceValues loading** in ReferenceManager, ReferenceToggle, Section03
- **Implement prefixed state isolation** (`target_` and `ref_` prefixes)
- **Never fallback to global state** - use field defaults instead
- **Verify isolation continuously** - different values in different modes

### **⚠️ FORBIDDEN ACTIONS**
- ❌ **Applying patterns directly to main sections without standalone testing** (for complex sections)
- ❌ **Enabling automatic ReferenceValues loading during dual-state implementation**
- ❌ **Falling back to global state when prefixed state is missing**
- ❌ **Skipping isolation verification between implementation steps**

**IF YOU IGNORE THIS GUIDE AND REPEAT THE MISTAKES IN THE POST-MORTEM, YOU WILL WASTE HOURS OF WORK AND ACHIEVE 100% STATE CONTAMINATION.**

**STUDY THE TEST FILE. FOLLOW THE METHODOLOGY. VERIFY ISOLATION.**

---

## 🏆 **PROVEN SUCCESS PATTERN**

After 2+ days of debugging, we achieved **perfect dual-state isolation** using the standalone test environment approach. This guide documents the exact patterns that work.

### **🔍 What We Proved:**
- ✅ **Complete State Isolation**: Target ≠ Reference values persist correctly
- ✅ **Working Calculations**: All formulas respond to input changes  
- ✅ **Clean Architecture**: No ComponentBridge needed - simple patterns work
- ✅ **Systematic Debugging**: Standalone testing enables rapid iteration

---

## 🧪 **PHASE 1: STANDALONE TESTING (RECOMMENDED FOR COMPLEX SECTIONS)**

### **When to Use Standalone Testing:**
- ✅ Complex sections (S10, S13, S15)
- ✅ When section has calculation dependencies
- ✅ When main app complexity makes debugging difficult
- ✅ When state isolation needs verification

### **Standalone Test Environment Structure:**
```html
<!DOCTYPE html>
<html>
<head>
    <title>Section XX Dual-State Test</title>
    <link rel="stylesheet" href="4011-styles.css">
</head>
<body>
    <!-- Test Header with Mode Toggle -->
    <div class="test-header">
        <h1>Section XX Dual-State Test</h1>
        <div class="mode-toggle">
            <button id="target-mode" class="active">🎯 Target Mode</button>
            <button id="reference-mode">📋 Reference Mode</button>
        </div>
        <div class="test-actions">
            <button onclick="runIsolationTest()">🔍 Run Isolation Test</button>
            <button onclick="resetAllValues()">🔄 Reset Values</button>
        </div>
    </div>

    <!-- Section Content (simplified version) -->
    <div id="section-content">
        <!-- Key inputs and calculated fields only -->
    </div>

    <!-- Debug Panel -->
    <div class="debug-panel">
        <h3>🔍 State Debug Panel</h3>
        <div id="debug-content"></div>
    </div>

    <!-- Dependencies -->
    <script src="4011-StateManager.js"></script>
    <script src="sections/4011-SectionXX.js"></script>
    
    <!-- Test Controller -->
    <script>
        // Custom test controller with simplified calculations
    </script>
</body>
</html>
```

### **Standalone Testing Benefits:**
- ✅ **Rapid Iteration**: 30-second test cycles vs 2-minute full app loads
- ✅ **Isolated Debugging**: No interference from other sections
- ✅ **Clear Success Criteria**: Visual isolation check with ✅/❌ indicators
- ✅ **Simplified Implementation**: Custom calculations without complex dependencies

---

## 🔧 **PHASE 2: PROVEN DUAL-STATE PATTERNS**

Based on successful S10 test environment implementation:

### **Pattern 1: ModeManager**
```javascript
// Add to each dual-state section
const ModeManager = {
  currentMode: "target",
  switchMode: function (mode) {
    if (mode !== "target" && mode !== "reference") return;
    this.currentMode = mode;
    console.log(`SXX: Switched to ${mode.toUpperCase()} mode`);
  },
};

// Expose globally for cross-section communication
window.TEUI.sectXX = window.TEUI.sectXX || {};
window.TEUI.sectXX.ModeManager = ModeManager;
```

### **Pattern 2: Mode-Aware Reading Helpers**
```javascript
function getFieldValue(fieldId) {
  const prefix = ModeManager.currentMode === "target" ? "target_" : "ref_";
  let stateValue = window.TEUI?.StateManager?.getValue(`${prefix}${fieldId}`);
  
  // Fallback for transition period
  if (stateValue === null || stateValue === undefined) {
    stateValue = window.TEUI?.StateManager?.getValue(fieldId);
  }
  
  if (stateValue != null) return stateValue;
  
  const element = document.querySelector(`[data-field-id="${fieldId}"]`);
  return element ? (element.value ?? element.textContent?.trim()) : null;
}

function getNumericValue(fieldId) {
  const prefix = ModeManager.currentMode === "target" ? "target_" : "ref_";
  let rawValue = window.TEUI?.StateManager?.getValue(`${prefix}${fieldId}`);
  
  // Fallback for transition period
  if (rawValue === null || rawValue === undefined) {
    rawValue = window.TEUI?.StateManager?.getValue(fieldId);
  }
  
  return window.TEUI.parseNumeric(rawValue) || 0;
}
```

### **Pattern 3: Dual-State Event Handlers**

**Architectural Note:** The section module is ONLY responsible for writing to the correct prefixed state (`target_` or `ref_`). It should **NEVER** write to the global (unprefixed) state. The `ComponentBridge` module is responsible for the legacy task of syncing `target_` values to the global state for backward compatibility.

The following pattern demonstrates a robust handler that works for both simple `contenteditable` inputs and complex wrapped inputs like sliders generated by `FieldManager`.

```javascript
function handleUserInput(event) {
    const target = event.target;
    // Robustly find the element with the data-field-id, which could be the target or a parent wrapper.
    const fieldElement = target.closest('[data-field-id]');
    if (!fieldElement) return;

    const fieldId = fieldElement.getAttribute('data-field-id');

    // Get the value from the actual element the user interacted with (the event.target).
    const value = target.matches('input[type="range"]') ? target.value : target.textContent.trim();
    
    console.log(`🖱️ User input: ${fieldId} = ${value} in ${ModeManager.currentMode.toUpperCase()} mode`);
    
    // Store to prefixed state for the current mode.
    const prefix = ModeManager.currentMode === 'target' ? 'target_' : 'ref_';
    window.TEUI.StateManager.setValue(`${prefix}${fieldId}`, value, "user-modified");
    
    // Live update for slider display text (if applicable).
    if (target.matches('input[type="range"]')) {
      // Find the display element using DOM traversal (e.g., as the next sibling).
      // This is more robust than attribute selectors for dynamically generated elements.
      const display = target.nextElementSibling;
      if (display) {
        display.textContent = `${value}%`;
      }
    }
    
    // Trigger section-specific calculations.
    calculateAll();
}
```

### **Pattern 4: Dual-State Calculated Value Setting**
```javascript
function setCalculatedValue(fieldId, rawValue, format = "number") {
  // Handle N/A for non-finite numbers
  if (!isFinite(rawValue) || rawValue === null || rawValue === undefined) {
    const prefix = ModeManager.currentMode === "target" ? "target_" : "ref_";
    window.TEUI.StateManager?.setValue(`${prefix}${fieldId}`, "N/A", "calculated");
    
    // Update DOM only in Target mode
    if (ModeManager.currentMode === "target") {
      const elementNA = document.querySelector(`[data-field-id="${fieldId}"]`);
      if (elementNA) elementNA.textContent = "N/A";
    }
    return;
  }

  const formattedValue = formatNumber(rawValue, format);

  // Write to prefixed state for isolation, global state for backward compatibility
  const prefix = ModeManager.currentMode === "target" ? "target_" : "ref_";
  window.TEUI.StateManager.setValue(`${prefix}${fieldId}`, rawValue.toString(), "calculated");
  
  // Also write to global state in Target mode for backward compatibility
  if (ModeManager.currentMode === "target") {
    window.TEUI.StateManager.setValue(fieldId, rawValue.toString(), "calculated");
    
    // Update DOM only in Target mode
    const element = document.querySelector(`[data-field-id="${fieldId}"]`);
    if (element) {
      element.textContent = formattedValue;
      element.classList.toggle("negative-value", rawValue < 0);
    }
  }
}
```

### **Pattern 5: Cross-Section Dependency Listeners**
```javascript
function addStateManagerListeners() {
  if (!window.TEUI?.StateManager) return;

  const dependencies = ["j_19", "i_71", "i_97"]; // Example dependencies
  
  dependencies.forEach((fieldId) => {
    // Listen for target_ changes
    window.TEUI.StateManager.addListener(`target_${fieldId}`, function () {
      if (ModeManager.currentMode === "target") {
        calculateAll();
      }
    });

    // Listen for ref_ changes
    window.TEUI.StateManager.addListener(`ref_${fieldId}`, function () {
      if (ModeManager.currentMode === "reference") {
        calculateAll();
      }
    });

    // Listen for global listeners for backward compatibility
    window.TEUI.StateManager.addListener(fieldId, calculateAll);
  });
}
```

### **Pattern 6: Robust UI Synchronization on Mode Switch (NEW ✅)**

**Problem**: The UI must accurately reflect the correct state (`target_` or `ref_`) when switching modes. Simple selectors used in standalone test files (like `test-s10-isolation.html`) often fail in the main application because the `FieldManager` renders complex elements (e.g., sliders inside wrappers).

**Solution**: A robust `updateUIForMode` function that accounts for the application's actual DOM structure. This pattern is **architecturally preferred** over the simpler DOM structure in the S10 test file.

```javascript
// In each section module, within the ModeManager
updateUIForMode: function() {
    const sectionElement = document.getElementById("mySectionId"); // Use the section's root ID
    if (!sectionElement) return;

    const prefix = this.currentMode === 'target' ? 'target_' : 'ref_';
    
    // Define all user input fields to sync for this section
    const fieldsToSync = ['d_56_editable', 'd_59_slider', 'i_59_slider'];

    fieldsToSync.forEach(fieldId => {
        const fieldWrapper = sectionElement.querySelector(`[data-field-id="${fieldId}"]`);
        if (!fieldWrapper) return;

        const stateValue = window.TEUI.StateManager.getValue(`${prefix}${fieldId}`);
        
        if (stateValue !== undefined && stateValue !== null) {
            // Attempt to find a slider within the wrapper element
            const slider = fieldWrapper.querySelector('input[type="range"]');

            if (slider) {
                slider.value = stateValue;
                // Find the display element as the NEXT SIBLING of the input, which is more robust
                const display = slider.nextElementSibling;
                if (display) {
                  display.textContent = `${stateValue}%`;
                }
            } else if (fieldWrapper.isContentEditable) {
                // Handle non-slider inputs like editable divs
                fieldWrapper.textContent = stateValue;
            }
        }
    });
}
```

---

## 📋 **PHASE 3: MECHANICAL IMPLEMENTATION CHECKLIST**

For each section that needs dual-state capability:

### **Step 1: Decide Implementation Approach**
- **✅ Complex Section** (S10, S13, S15): Use standalone testing approach
- **✅ Simple Section** (S11, S12, S14): Apply patterns directly to main section

### **Step 2: Standalone Testing (If Complex)**
1. **Create test-sXX-isolation.html** based on proven template
2. **Implement simplified section logic** with custom calculations
3. **Add comprehensive debugging** with state monitoring
4. **Test until perfect isolation** is achieved
5. **Document working patterns** from test environment

### **Step 3: Apply Patterns to Main Section**
1. **□ Add ModeManager** (Pattern 1)
2. **□ Add Mode-Aware Helpers** (Pattern 2)
3. **□ Update Event Handlers** (Pattern 3)
4. **□ Update setCalculatedValue** (Pattern 4)
5. **□ Add Cross-Section Listeners** (Pattern 5)
6. **□ Expose ModeManager Globally**
7. **□ Test Target Mode** (should work exactly as before)
8. **□ Test Reference Mode** (should show isolation)
9. **□ Test Mode Switching** (values should persist separately)

### **Step 4: Integration Testing**
1. **□ Test in Full App** context
2. **□ Verify Cross-Section Dependencies** work correctly
3. **□ Test with Global Toggle** integration
4. **□ Performance verification** (no slowdowns)

---

## 🎯 **SECTION IMPLEMENTATION PRIORITY**

Based on complexity and dependencies:

| Section | Priority | Approach | Estimated Time | Dependencies |
|---------|----------|----------|----------------|--------------|
| **S10** | ✅ DONE | Standalone → Integration | Complete | Climate data |
| **S11** | 🔥 HIGH | Direct patterns | 2-3 hours | S10 results |
| **S15** | 🔥 HIGH | Standalone testing | 4-6 hours | All sections |
| **S13** | 🔄 MEDIUM | Standalone testing | 6-8 hours | Complex mechanics |
| **S12** | 🔄 MEDIUM | Direct patterns | 2-3 hours | Basic calculations |
| **S14** | 🔄 LOW | Direct patterns | 1-2 hours | Summary only |

### **Recommended Order:**
1. **S11** (builds on S10, simpler logic)
2. **S12** (independent calculations)  
3. **S14** (summary section, fewer inputs)
4. **S13** (most complex, use standalone testing)
5. **S15** (final summary, depends on all others)

---

## 🧪 **PROVEN SUCCESS METRICS**

### **Isolation Verification:**
Use debug panel with automatic isolation check:
```javascript
// Real-time isolation verification
function checkIsolation() {
  const testFields = ['e_73', 'f_73', 'g_73', 'h_73'];
  testFields.forEach(fieldId => {
    const targetVal = window.TEUI.StateManager.getValue(`target_${fieldId}`);
    const refVal = window.TEUI.StateManager.getValue(`ref_${fieldId}`);
    const isolated = targetVal !== refVal && targetVal && refVal;
    console.log(`${fieldId}: T=${targetVal} R=${refVal} ${isolated ? '✅' : '❌'}`);
  });
}
```

### **Success Criteria:**
- ✅ **State Isolation**: Different values in Target vs Reference modes
- ✅ **Persistence**: Values remain separate when switching modes
- ✅ **Calculations**: All formulas work correctly in both modes
- ✅ **No Contamination**: Changes in one mode don't affect the other

---

## 🚀 **FINAL IMPLEMENTATION STRATEGY**

### **Phase 1: Complete Section Implementation (1-2 weeks)**
- Apply proven patterns to remaining sections
- Use standalone testing for complex sections (S13, S15)
- Verify isolation for each section individually

### **Phase 2: Integration & Polish (3-5 days)**  
- Test full application with all sections dual-state
- Verify cross-section dependencies work correctly
- Performance optimization if needed

### **Phase 3: Enhanced Reference Features (1 week)**
- Implement "Mirror Target to Reference" functionality
- Enhanced reference standard management
- Final UI polish and testing

---

## 📖 **AI AGENT GUIDELINES**

### **When Implementing Dual-State:**

1. **🧪 For Complex Sections**: Always start with standalone testing
2. **📋 Follow Patterns Exactly**: Don't deviate from proven patterns
3. **✅ Test After Each Change**: Verify isolation immediately
4. **💾 Commit Frequently**: Save progress after each successful step
5. **🔄 Use Debug Tools**: Leverage real-time state monitoring

### **Forbidden Actions:**
- ❌ Skipping standalone testing for complex sections
- ❌ Modifying proven patterns without testing
- ❌ Implementing dual-state without isolation verification
- ❌ Removing debug/monitoring capabilities

### **Required Actions:**
- ✅ Create test environment for complex sections
- ✅ Verify complete state isolation before integration
- ✅ Maintain backward compatibility with Target mode
- ✅ Document any deviations or issues encountered

---

## 🏁 **DELIVERY TIMELINE**

**Target Completion: 2-3 weeks total**

- **Week 1**: S11, S12, S14 implementation (direct patterns)
- **Week 2**: S13, S15 implementation (standalone testing approach)  
- **Week 3**: Integration, testing, and enhanced features

**This approach transforms dual-state from "impossibly complex" to "systematically achievable" by using proven patterns and standalone testing for validation.** 🎯

---

## 📚 **REFERENCE DOCUMENTS (SUPERSEDED)**

This document consolidates and replaces:
- ❌ `COMPREHENSIVE-WORKPLAN.md`
- ❌ `COMPREHENSIVE-WORKPLAN 2.md`
- ❌ `S10-ISOLATION-STRATEGY.md`
- ❌ `AI-FRIENDLY-PATTERNS.md`
- ❌ `AI-FRIENDLY-PATTERNS-CORRECTED.md`

**Use only this document for future dual-state implementation work.** 

---

## 🚨 **POST-MORTEM: JULY 4, 2025 REFACTOR FAILURE**

**Date**: July 04, 2025  
**Status**: ❌ **COMPLETE FAILURE - REVERTED TO STABLE STATE**  
**Lesson**: **ALWAYS FOLLOW THE PROVEN METHODOLOGY**

### **🔍 What Went Wrong:**

#### **1. IGNORED THE PROVEN METHODOLOGY** ❌
- **Guide clearly stated**: Use standalone testing for complex sections (S10)
- **What I did**: Tried to apply patterns directly to main S10 section
- **Result**: 100% state contamination, complete breakdown

#### **2. RUSHED PAST STANDALONE TESTING PHASE** ❌  
- **Guide Phase 1**: "Create test-sXX-isolation.html" for complex sections
- **What I did**: Skipped directly to Phase 3 "Apply Patterns to Main Section"
- **Result**: No isolation verification before integration

#### **3. OVERCOMPLICATED THE SOLUTION** ❌
- **Working test environment**: Simple, isolated, perfect dual-state
- **What I did**: Added complex debugging, global fixes, architectural changes
- **Result**: Introduced new contamination sources instead of eliminating them

#### **4. DIDN'T FOLLOW MY OWN SUCCESS CRITERIA** ❌
- **Guide stated**: "Verify complete state isolation before integration"
- **What I did**: Applied changes without isolation verification
- **Result**: Never achieved the prerequisite success before moving forward

### **🎯 Root Cause Analysis:**

#### **The Fatal Mistake: Premature Integration**
```
✅ CORRECT PATH (per guide):
1. Create standalone test → 2. Achieve perfect isolation → 3. Apply to main section

❌ ACTUAL PATH (what I did):
1. Apply patterns directly to main section → 2. Debug contamination → 3. More fixes → 4. Complete failure
```

#### **Why This Failed:**
- **Main app has interference**: ComponentBridge, ReferenceToggle, cross-section communication
- **Test environment was isolated**: No interference, perfect control, clear success metrics
- **Complex debugging obscured root issues**: Added more variables instead of eliminating them

### **🔬 Technical Analysis:**

#### **The Working Test Environment Had:**
- ✅ **Simple StateManager stub** - no interference from complex global state management
- ✅ **Custom event handlers** - no ComponentBridge or cross-section contamination  
- ✅ **Isolated calculations** - no dependencies on other sections
- ✅ **Real-time debug panel** - instant visual feedback on isolation status
- ✅ **Minimal complexity** - only the essential dual-state patterns

#### **The Main App Integration Had:**
- ❌ **Complex StateManager** - with ComponentBridge, ReferenceToggle, automatic loading
- ❌ **Cross-section dependencies** - S03 mode propagation, reference loading
- ❌ **Global state fallbacks** - contamination from existing single-state architecture
- ❌ **Hidden interference** - browser cache, multiple initialization paths
- ❌ **Too many variables** - impossible to isolate what was causing contamination

### **📚 Lessons Learned:**

#### **1. The Guide Was Right** ✅
- **Standalone testing is MANDATORY** for complex sections
- **Perfect isolation must be achieved** before any integration attempt
- **Working patterns must be documented** from the controlled environment

#### **2. Don't Rush Success** ✅
- **30-second test cycles** in standalone environment vs **2-minute full app loads**
- **Clear visual feedback** (✅/❌) vs **buried console logs**
- **Controlled variables** vs **unlimited interference sources**

#### **3. Integration Is The Hard Part** ✅
- **Test environment success ≠ main app success**
- **Architecture conflicts** are the real challenge, not the patterns themselves
- **Methodical approach** is required to identify and eliminate interference

### **🛠️ Correct Implementation Strategy:**

#### **Step 1: Perfect The Test Environment (DONE ✅)**
- Working S10 test file with perfect dual-state isolation
- Proven patterns documented and verified
- Clear success metrics established

#### **Step 2: Create Integration Strategy (NEXT)**
- **Systematic interference elimination**: Identify and disable each contamination source
- **Piece-by-piece integration**: One pattern at a time, verify isolation after each
- **Rollback capability**: Keep test environment as reference

#### **Step 3: Main App Integration (FUTURE)**
- **Only when Step 2 is complete** and all interference sources eliminated
- **With continuous monitoring** comparing test vs main app behavior
- **With immediate rollback** if any contamination appears

### **🎯 Immediate Next Steps:**

1. **✅ DONE**: Revert to stable July 3, 2025 state
2. **NEXT**: Analyze the working test environment patterns
3. **THEN**: Create systematic interference elimination plan  
4. **FINALLY**: Methodical integration following the proven guide

### **💡 Key Insight:**

> **"Working dual-state in a test environment proves the patterns work.  
> Failure in the main app proves the integration approach was wrong,  
> NOT that the patterns are broken."**

The test environment **PROVES** dual-state is achievable. The main app failure **PROVES** systematic interference elimination is required before integration.

### **📋 Updated AI Agent Guidelines:**

#### **MANDATORY Rules:**
1. **🚫 NEVER skip standalone testing** for sections marked as complex
2. **🚫 NEVER apply patterns without isolation verification** 
3. **🚫 NEVER integrate without understanding interference sources**
4. **✅ ALWAYS follow the guide methodology exactly**
5. **✅ ALWAYS verify each step before proceeding**

#### **Success Mantra:**
> **"Standalone Success → Interference Analysis → Systematic Integration"**

**The guide methodology works. Trust it. Follow it. Don't deviate.** 

---

## 🔧 **PHASE 2.5: SAFELY DISABLING GLOBAL INTERFERENCE & ENABLING SECTION-LEVEL TESTING**

This phase is critical for bridging the gap between standalone testing and full integration. The goal is to disable the legacy global reference system that causes state contamination, while enabling a section-by-section development workflow.

### **Strategy: Local Toggles First, Global Toggle Last**

As a core part of the refactoring process, we will adopt the following sequence:

1.  **Disable the Global Reference Toggle:** Prevent the existing global UI from triggering any mode switches.
2.  **Neuter the `ReferenceManager`:** Deactivate the automatic loading of reference values. The logic will be preserved for future explicit use.
3.  **Implement Section-Local Toggles:** For each section being refactored (e.g., S11, S12), add a temporary "Target/Reference" toggle directly within its UI in the main application. This toggle will *only* affect that specific section's `ModeManager`.
4.  **Refactor Section by Section:** Use the local toggle to test and verify dual-state functionality for each section *in situ*.
5.  **Reinstate the Global Toggle:** Once all sections are converted, remove the temporary local toggles and implement a new global toggle that acts as an orchestrator, calling the `switchMode` function on every section's `ModeManager`.

### **Example: Taking Legacy Functions Offline**

Here is how to modify the key interfering files to safely disable their automatic behavior without deleting valuable code.

#### **1. Disabling `4011-ReferenceToggle.js`**

The goal here is to prevent the global button from doing anything. The simplest way is to prevent its event listener from ever being attached and to hide the button to avoid confusion.

```javascript
// In 4011-ReferenceToggle.js

// The existing init function might look something like this:
/*
function init() {
    const globalToggleButton = document.getElementById('global-reference-toggle');
    globalToggleButton.addEventListener('click', () => {
        // ... complex logic that triggers the ReferenceManager ...
        TEUI.ReferenceManager.switchModeTo('reference'); 
    });
}
*/

// MODIFIED and SAFELY DISABLED init() function:
function init() {
    console.warn("DUAL-STATE-REFACTOR: The global ReferenceToggle is temporarily disabled.");
    const globalToggleButton = document.getElementById('global-reference-toggle');
    if (globalToggleButton) {
        // Hide the button to prevent user confusion during the refactor
        globalToggleButton.style.display = 'none';
        
        // You can also add a disabled state for extra safety
        globalToggleButton.disabled = true;
        
        // By NOT adding the event listener, this entire file is now inert.
    }
}

// Ensure the init() is still called so the warning appears and the button is hidden.
// document.addEventListener('DOMContentLoaded', init); 
```

#### **2. Neutering `4011-ReferenceManager.js`**

This is the most critical step. We want to stop the automatic application of reference values, which causes state contamination. We will rename the old function to make it clear it's disabled and preserve its logic within a new, explicitly-called function for future use.

```javascript
// In 4011-ReferenceManager.js

// Let's assume there is a function that gets called automatically:
/*
function applyReferenceValues() {
    const referenceData = TEUI.ReferenceValues.getValues(); // Gets ALL values
    for (const [fieldId, value] of Object.entries(referenceData)) {
        // THIS IS THE CONTAMINATION SOURCE: it overwrites the global state
        window.TEUI.StateManager.setValue(fieldId, value, 'reference-loaded');
    }
    // ... logic to trigger recalculations globally ...
}
*/

// --- MODIFIED AND SAFELY DISABLED VERSION ---

// 1. Rename the old function to make it clear it's offline. It does nothing now.
function applyReferenceValues_AUTOMATIC_DISABLED() {
    console.warn("DUAL-STATE-REFACTOR: Automatic application of reference values is disabled to prevent state contamination.");
    // This function is now inert and is not called by anything.
}

// 2. Create a NEW function that preserves the core logic for explicit, future use.
// This function will NOT be called automatically. It will be used for the
// "Mirror Target" or "Apply Standard" feature later.
function applyReferenceStandardExplicitly(standardKey, targetModeState) {
    console.log(`Explicitly applying reference standard: ${standardKey}`);
    
    // Step A: Copy all current target values to the reference state
    for (const [key, value] of Object.entries(targetModeState)) {
        if (key.startsWith('target_')) {
            const refKey = key.replace('target_', 'ref_');
            window.TEUI.StateManager.setValue(refKey, value, 'ref-mirrored');
        }
    }

    // Step B: Get the specific override values for the chosen standard
    const standardOverrides = TEUI.ReferenceValues.getValuesForStandard(standardKey); // Assumes a function that gets specific values

    // Step C: Selectively apply the standard's overrides to the reference state
    for (const [fieldId, value] of Object.entries(standardOverrides)) {
        // IMPORTANT: Writes ONLY to the 'ref_' prefixed state to ensure isolation.
        window.TEUI.StateManager.setValue(`ref_${fieldId}`, value, 'ref-standard-override');
    }
    
    console.log("Explicit application of reference standard complete.");
    // This would then trigger a recalculation event for reference mode.
}
```

---