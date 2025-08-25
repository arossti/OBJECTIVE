# 🏆 DUAL-STATE PATTERN A - CHEATSHEET

# 🛑🛑🛑 **CRITICAL - READ BEFORE TOUCHING ANY CODE** 🛑🛑🛑

**FOR AI AGENTS: MANDATORY ACTIONS BEFORE REFACTORING:**

1. **READ FULL IMPLEMENTATION GUIDE FIRST** - `DUAL-STATE-IMPLEMENTATION-GUIDE.md`
2. **RUN QA/QC CHECKLIST BELOW** - Every single check, no exceptions
3. **DO NOT COPY S11 PATTERNS** - S11 has wrong patterns, use documented examples instead
4. **DO NOT THROW OUT WORKING CALCULATIONS** - Add dual-state to existing working code
5. **🚨 PRESERVE ALL EXCEL FORMULAS EXACTLY** - Focus on dual-state support, NOT formula changes
6. **FOLLOW DOCUMENTED PATTERNS EXACTLY** - Don't reinvent, patterns are already perfected

🚨 **AGENT FAILURE MODES TO AVOID:**

- Citing S11 as "gold standard" (it has wrong patterns documented in guide)
- Throwing out working calculation functions from BACKUP files
- **🚨 CHANGING EXCEL FORMULAS** - Focus on dual-state support, NOT formula modifications
- **"Improving" or "optimizing" calculations** - Formulas are regulatory-approved, don't alter them
- **Modifying mathematical operations** - Keep Excel formulas exactly as they work in BACKUP files
- **🚨 DUPLICATE DEFAULTS** - Hardcoding defaults in state objects that duplicate field definitions (DATA CORRUPTION RISK)
- Not running the QA/QC checklist (causes architectural failures)
- Speed-reading instead of following patterns exactly
- Adding `calculateAll()` to `switchMode()` (major anti-pattern)
- Not implementing `updateCalculatedDisplayValues()` for DOM updates
- Forgetting to call `updateCalculatedDisplayValues()` AFTER `calculateAll()`

========================================================

**Mandate**: This is the concise guide to the **sole approved pattern** for implementing dual-state (Target/Reference) functionality. All sections must adhere to this standard.

**⚠️ CRITICAL**: Before implementing ANY Pattern A section, review the **MANDATORY QA/QC Checklist** at the bottom.

---

## 🏛️ Core Principles

1.  **Dual-Engine Calculations**: `calculateAll()` **MUST** run both `calculateTargetModel()` and `calculateReferenceModel()` in parallel on every data change. The system must always have both states ready.
2.  **UI Toggle is Display-Only**: The `switchMode()` function **MUST NOT** trigger calculations. It is a UI filter that only changes which pre-calculated state is displayed.
3.  **State Sovereignty**: Each section manages its own `TargetState` and `ReferenceState`. It does not read `target_` or `ref_` prefixed values from other sections for its internal calculations.
4.  **Reference Results are Shared**: To communicate with downstream sections (like S01), a section's `calculateReferenceModel()` **MUST** store its results in the global `StateManager` with a `ref_` prefix (e.g., `StateManager.setValue('ref_i_98', ...)`).

---

## Reference Standard Application (Clarified)

**Defaults single source of truth**:
- Field definitions in each section are the ONLY place defaults live. Do not hardcode the same defaults in state objects.

**How to apply building-code subsets (from `ReferenceValues.js`)**:
- Treat code minimums as a runtime overlay applied to `ReferenceState` only.
- Do NOT write ReferenceValues into FieldDefinitions.
- Recommended pattern inside each section:

```javascript
// 1) Initialize from FieldDefinitions (no hardcoded duplicates)
TargetState.setDefaults = function () {
  // Read defaults from sectionRows field definitions only
};
ReferenceState.setDefaults = function () {
  // Same: initialize from sectionRows defaults only
};

// 2) Apply selected standard as an overlay (d_13)
ReferenceState.applyReferenceStandardOverlay = function (standardKey) {
  const ref = window.TEUI.ReferenceValues?.[standardKey] || {};
  // Overwrite ONLY fields governed by code minimums (e.g., f_85, g_88, j_115, d_118, l_118, d_119, ...)
  Object.assign(this.state, pick(ref, ["f_85","f_86","f_87","g_88","g_89","g_90","g_91","g_92","g_93","f_94","f_95","j_115","j_116","f_113","d_118","l_118","d_119"]));
  this.saveState?.();
};

// 3) On d_13 change
StateManager.addListener("d_13", () => {
  ReferenceState.applyReferenceStandardOverlay(StateManager.getValue("d_13"));
  // Optional: ModeManager.refreshUI(); calculateAll(); ModeManager.updateCalculatedDisplayValues();
});
```

This keeps defaults in field definitions and applies code minimums only into `ReferenceState`.

**Reference model setup modes (for `ReferenceToggle.js`)**:
- Mirror Target: Copy Target inputs into Reference once (no overlay). Good for A/B sanity checks.
- Mirror Target + Overlay (Recommended): Copy Target inputs, then apply `ReferenceValues` overlay for d_13-governed fields. Most common compliance scenario.
- Independent Models: No copying. Reference and Target can diverge completely (useful for isolation testing and advanced scenarios).

---

## STATUS: Refactoring Nearing Completion (August 2025)

The Pattern A refactoring initiative is substantially complete.

- ✅ **Completed Sections**: S01, S02, S03, S05, S06, S07, S08, S09, S10, S11, S12, S13, S14, S15.
- ✅ **S04 (Energy Summary)**: Has been completely rebuilt from scratch as a pure **Consumer Section**, resolving previous architectural issues. It now SHOULD correctly read upstream values from S13/S15.

---

## 📋 Pattern A Implementation Checklist

### 1. The Three Core Objects

Every dual-state section **MUST** have these three objects.

```javascript
// Manages user's design values
const TargetState = {
  /* ... */
};

// Manages building code minimums
const ReferenceState = {
  /* ... */
};

// Facade to switch between states
const ModeManager = {
  /* ... */
};
```

### 2. The Correct `calculateAll()` Pattern

```javascript
function calculateAll() {
  // ALWAYS run BOTH engines in parallel
  calculateTargetModel(); // Reads TargetState -> stores unprefixed values in StateManager
  calculateReferenceModel(); // Reads ReferenceState -> stores 'ref_' prefixed values in StateManager
}
```

### 3. The Correct `switchMode()` Pattern

```javascript
// UI toggle is for DISPLAY ONLY
switchMode: function (mode) {
  if (this.currentMode === mode) return;
  this.currentMode = mode;

  // ONLY update the display. Values are already calculated.
  this.refreshUI();                     // Update input fields
  this.updateCalculatedDisplayValues(); // Update calculated fields from StateManager

  // ❌ NEVER CALL calculateAll() HERE - it's a UI action, not a data change
}
```

### 4. The MANDATORY DOM Update Pattern

```javascript
// ✅ ALWAYS call updateCalculatedDisplayValues() after calculateAll()
function onDropdownChange() {
  ModeManager.setValue("fieldId", value, "user-modified");
  calculateAll(); // Recalculate both engines
  ModeManager.updateCalculatedDisplayValues(); // Update DOM with new values
}

// ✅ ALWAYS in initialization
function onSectionRendered() {
  calculateAll(); // Initial calculations
  ModeManager.updateCalculatedDisplayValues(); // Show calculated values in DOM
}

// ✅ ALWAYS for external dependencies
const calculateAndRefresh = () => {
  calculateAll();
  ModeManager.updateCalculatedDisplayValues();
};
dependencies.forEach((depId) => {
  StateManager.addListener(depId, calculateAndRefresh);
});
```

### 5. Handling Dependencies

```javascript
// ✅ Reading from other sections (clean, no prefixes)
const hdd = getGlobalNumericValue("d_20");

// ✅ Reading from within your own section
const area = ModeManager.getValue("d_85");

// ✅ Storing Reference results for other sections to use
window.TEUI.StateManager.setValue(
  "ref_i_98",
  heatloss.toString(),
  "calculated",
);
```

---

## 🚨 MANDATORY QA/QC Checklist

**⚠️ CRITICAL**: Run ALL checks before declaring Pattern A complete.

### **Phase 1: Pattern B Contamination Scan**

1.  **Scan for prefixes**: `grep -n "target_\|ref_" sections/4011-SectionXX.js`
2.  **Look for Toxic Patterns**:
    - Reading external dependencies with prefixes: `getValue("target_d_20")`. **FIX**: Use explicit state access.
    - `calculateAll()` inside `switchMode()`. **FIX**: Remove it immediately - this is state contamination.
    - Calculations that only run one model based on `currentMode`. **FIX**: Ensure both models always run.
    - Missing `updateCalculatedDisplayValues()` after `calculateAll()`. **FIX**: Add it everywhere.

### **Phase 2: "Current State" Anti-Pattern Elimination (CRITICAL)**

3.  **Scan for ambiguous reads**: `grep -n "getFieldValue\|getGlobalNumericValue" sections/4011-SectionXX.js`
4.  **Look for Current State Anti-Patterns**:
    - `getFieldValue("d_113")` - **FIX**: Use explicit `TargetState.getValue("d_113")` or `ReferenceState.getValue("d_113")`
    - `getGlobalNumericValue("g_32")` in calculations - **FIX**: Use mode-aware access:

      ```javascript
      // ❌ WRONG: Ambiguous current state
      const value = getGlobalNumericValue("g_32");

      // ✅ CORRECT: Always explicit
      const value = isReferenceCalculation
        ? getGlobalNumericValue("ref_g_32")
        : getGlobalNumericValue("g_32");
      ```

    - **calculateRowXX() Bypass Anti-Pattern**: Row functions bypassing individual Excel formula functions

      ```javascript
      // ❌ WRONG: Direct assignment missing renewable offsets
      setCalculatedValue("j_27", targetElectricity);

      // ✅ CORRECT: Use proper Excel formula function
      calculateJ27(); // J27 = H27 - D43 - I43 (includes renewable offsets)
      ```

      **📋 S06→S04 CASE STUDY**: S04's `calculateRow27()` was bypassing `calculateJ27()`, causing Reference renewable offsets from S06 to be ignored. Fixed by ensuring `calculateRow27()` calls `calculateJ27()` for proper Excel formula compliance.

### **Phase 3: DOM Update & Function Preservation (CRITICAL)**

5.  **Check DOM updates**: Every `calculateAll()` call MUST be followed by `updateCalculatedDisplayValues()`
    - Event handlers (dropdown changes, field edits)
    - Initialization (`onSectionRendered`)
    - External dependency listeners
    - State resets

### **🚨 CRITICAL DOM UPDATE PATTERN (Newly Discovered)**

**Component-Level DOM Updates**: Reference calculations MUST call `setCalculatedValue()` just like Target calculations

```javascript
// ❌ WRONG PATTERN (S11 bug): Reference calculations skip DOM updates
if (!isReferenceCalculation) {
  setCalculatedValue(fieldId, value, format); // Only Target updates DOM!
}

// ✅ CORRECT PATTERN: Both Target and Reference update DOM
setCalculatedValue(fieldId, value, format); // Mode-aware via ModeManager
```

**Why This Works**:
- `setCalculatedValue()` is already mode-aware via `ModeManager.setValue()`
- Automatically writes to correct state (Target/Reference) based on `currentMode`
- Automatically updates DOM with formatted values
- **No special Reference handling needed** - emulate Target mode exactly

**Common Failure**: Reference calculations store values but never update DOM, causing stale displays
6.  **Verify working functions preserved**: Compare with BACKUP file - NO calculation functions should be deleted
    - Calculate functions (like `calculateTypologyBasedCap`)
    - Formula implementations (Excel compliance)
    - Default values (like `i_41: "345.82"`)
7.  **Test basic functionality**: Dropdown changes MUST update calculated fields in DOM immediately

### **Phase 4: Excel Formula Preservation (URGENT)**

8.  **🚨 FORMULA AUDIT**: Compare ALL calculation functions with BACKUP file to ensure no changes
    - **Mathematical operations**: Addition, subtraction, multiplication, division - keep identical
    - **Conditional logic**: IF statements, case structures - preserve Excel logic exactly
    - **Constants and factors**: Any hard-coded numbers or conversion factors - don't change
    - **Function signatures**: Input parameters and return values - maintain compatibility
9.  **NO FORMULA "IMPROVEMENTS"**: Resist urge to "optimize" or "clean up" calculations
    - Excel formulas are **regulatory-approved** - changing them invalidates compliance
    - Focus ONLY on adding dual-state support to existing working formulas

### **Phase 5: Default Values Anti-Pattern (DATA CORRUPTION RISK)**

10. **🚨 DUPLICATE DEFAULTS AUDIT**: Scan for hardcoded defaults that duplicate field definitions
    - **Search Pattern**: `grep -n "defaultValue\|value.*:" sections/4011-SectionXX.js | grep -E "[0-9]+\.[0-9]+|[0-9]+"`
    - **Critical Anti-Pattern**: Setting defaults in BOTH field definitions AND state objects
    
    ```javascript
    // ❌ CORRUPTION RISK: Duplicate defaults in multiple places
    // Field definition:
    { fieldId: "h_15", value: "1,427.20", type: "editable" }
    // State object (WRONG):
    TargetState.setDefaults() { this.data = { h_15: "1427.20" }; }
    
    // ✅ CORRECT: Single source of truth
    // Field definition (ONLY place for defaults):
    { fieldId: "h_15", value: "1,427.20", type: "editable" }
    // State object (correct):
    TargetState.setDefaults() { this.data = { /* h_15 comes from field definition */ }; }
    ```

11. **🚨 MISSING TARGET DEFAULTS AUDIT**: Check for user input fields missing from TargetState.setDefaults()
    - **Search Pattern**: `grep -n "data-field-id.*h_" sections/4011-SectionXX.js` then verify each field has Target defaults
    - **Critical Bug Pattern**: User input fields (sliders, editable) missing from TargetState but present in ReferenceState
    - **Symptom**: "First mode switch shows wrong value" - Reference values carry over to Target mode
    - **S02 Case Study**: `h_13` missing from TargetState caused service life slider to show Reference value (70) when switching to Target mode
    
    ```javascript
    // ❌ MISSING TARGET DEFAULT: Only Reference has the field
    ReferenceState.setDefaults() { this.data = { h_13: "50" }; }  // ✅ Present
    TargetState.setDefaults() { this.data = { /* h_13 missing! */ }; }  // ❌ Missing
    
    // ✅ CORRECT: Both states must have ALL user input fields
    ReferenceState.setDefaults() { this.data = { h_13: "50" }; }  // ✅ Present  
    TargetState.setDefaults() { this.data = { h_13: "50" }; }  // ✅ Added
    ```
    
    **Detection Pattern**:
    ```bash
    # Find all user input fields in section
    grep -o 'data-field-id="[^"]*"' sections/4011-SectionXX.js | sort -u
    # Verify each field exists in BOTH TargetState.setDefaults() AND ReferenceState.setDefaults()
    ```

12. **MANDATORY FIXES**: Remove ALL hardcoded defaults from state objects that duplicate field definitions
    - **WHY CRITICAL**: Creates version drift, maintenance nightmare, and data corruption
    - **Field definitions are the SINGLE SOURCE OF TRUTH** for all default values
    - **State objects should ONLY contain mode-specific overrides** (like different reporting years)
    - **Apply ReferenceValues overlays to ReferenceState only**; never mutate FieldDefinitions
    - **Add fallback logic** in getValue functions to handle missing state values

### **Phase 6: Mode Display Isolation (CRITICAL BLEEDING PREVENTION)**

12. **🚨 NO FALLBACK CONTAMINATION**: `updateCalculatedDisplayValues()` must NEVER use fallback patterns
    ```javascript
    // ❌ WRONG: Reference bleeding into Target
    const refValue = StateManager.getValue(`ref_${fieldId}`);
    const targetValue = StateManager.getValue(fieldId);
    valueToDisplay = refValue || targetValue; // CONTAMINATION!
    
    // ✅ CORRECT: Strict mode isolation
    let valueToDisplay;
    if (this.currentMode === "reference") {
      valueToDisplay = StateManager.getValue(`ref_${fieldId}`);
      // If Reference doesn't exist, show 0 or field default - NEVER Target value
      if (valueToDisplay === null || valueToDisplay === undefined) {
        valueToDisplay = 0; // or field definition default
      }
    } else {
      valueToDisplay = StateManager.getValue(fieldId) || 0;
    }
    ```

13. **INITIALIZATION ORDER**: `ModeManager.initialize()` MUST be called before any calculations
    - Set defaults → Load state → Store defaults to StateManager → Calculate

### **Phase 7: Pattern 2 Compliance**

14. **External Dependencies**: ALL calculations must read explicit Target or Reference upstream values
15. **Dual-Mode Listeners**: Listen to BOTH `"fieldId"` AND `"ref_fieldId"` for all external dependencies

### **🚨 CRITICAL: Dual External Dependency Listeners**

**Common Missing Pattern**: Sections listen for Target external dependencies but **NOT** Reference external dependencies

```javascript
// ❌ INCOMPLETE: Only Target external listeners
const dependencies = ["j_19", "i_71", "i_97"];
dependencies.forEach((fieldId) => {
  StateManager.addListener(fieldId, calculateAll); // Only Target triggers
});

// ✅ COMPLETE: Both Target AND Reference external listeners  
const dependencies = ["j_19", "i_71", "i_97"];
dependencies.forEach((fieldId) => {
  // Target external dependency
  StateManager.addListener(fieldId, calculateAll);
  
  // Reference external dependency
  StateManager.addListener(`ref_${fieldId}`, calculateAll);
});
```

**Excel Formula Compliance Example (S09→S10)**:
- **Target**: `e_80 = i_71 + i_79` (listens for `i_71`)
- **Reference**: `ref_e_80 = ref_i_71 + ref_i_79` (must listen for `ref_i_71`)

**Test Failure**: Reference mode changes in upstream sections don't trigger downstream recalculations

16. **State Isolation**: Reference calculations NEVER read unprefixed values; Target calculations NEVER read ref\_ values

---

## 🏛️ Post-ComponentBridge Architecture (Current Standard)

With the retirement of `ComponentBridge`, all sections now use direct `StateManager` registration for cross-section communication, ensuring perfect state isolation.

### **Direct StateManager Registration** (No Bridge Layer)

```javascript
// Each Pattern A section stores BOTH states directly:
function calculateTargetModel() {
  const result = calculations_using_TargetState();
  StateManager.setValue("fieldId", result, "calculated"); // Target → unprefixed
}

function calculateReferenceModel() {
  const result = calculations_using_ReferenceState();
  StateManager.setValue("ref_fieldId", result, "calculated"); // Reference → ref_ prefixed
}
```

### **Clean Listener Network** (No Contamination)

```javascript
// Perfect state isolation - each mode flows separately:
StateManager.addListener("d_43", calculateTargetModel); // Target → Target
StateManager.addListener("ref_d_43", calculateReferenceModel); // Reference → Reference
```

### **Benefits of This Architecture**:

- **🔥 Performance**: No bridge layer overhead
- **🛡️ Reliability**: Eliminates all contamination vectors
- **🔍 Debuggability**: Direct listener traces
- **⚡ Simplicity**: Fewer moving parts
- **🧪 Testability**: Isolated state testing

---

🛑 **CRITICAL ANTI-PATTERN PREVENTION** 🛑

**NEVER** make Target and Reference models read the same user input values.
Target and Reference must have **completely independent input states**.

❌ **WRONG**: `const systemType = getFieldValue("d_113"); // Same for both models`
✅ **CORRECT**: 
- Target: `const systemType = TargetState.getValue("d_113");`
- Reference: `const systemType = ReferenceState.getValue("d_113");`

This independence allows comparing different systems, locations, and even geometry scenarios (e.g., Gas vs Electric heating, Attawapiskat vs. Alexandria, ON, Future vs. Present Weather values, etc.).

**🎯 CALCULATION vs INPUT BEHAVIOR**:
- **Input Changes**: Only affect the current mode (Target changes only in Target mode, Reference changes only in Reference mode)
- **Calculation Execution**: BOTH Target and Reference calculations run after ANY input change (efficient - keeps both models current)

🛑 **CRITICAL DROPDOWN EVENT HANDLER REQUIREMENT** 🛑

**MANDATORY FOR ALL DUAL-STATE SECTIONS**: Every section MUST set up its own dropdown event handlers in `onSectionRendered()`. FieldManager does NOT handle dropdown value storage.

**Required Pattern (S09/S07/S02/S13):**
```javascript
function setupDropdownEventHandlers() {
  const sectionElement = document.getElementById("sectionId");
  if (!sectionElement) return;

  const dropdowns = sectionElement.querySelectorAll("select");
  dropdowns.forEach((dropdown) => {
    dropdown.addEventListener("change", function () {
      const fieldId = this.getAttribute("data-field-id");
      if (!fieldId) return;
      
      // Store via ModeManager (dual-state aware)
      if (ModeManager && typeof ModeManager.setValue === "function") {
        ModeManager.setValue(fieldId, this.value, "user-modified");
      }
      
      // Recalculate
      calculateAll();
      ModeManager.updateCalculatedDisplayValues();
    });
  });
}
```

**Call in onSectionRendered():** `setupDropdownEventHandlers();`

**FAILURE MODE**: Missing dropdown handlers = "dropdown changes not saved", "values stuck", "Target/Reference stuck on old values"

---

## 🔧 **SYSTEMATIC QA/QC FRAMEWORK**

### **🚨 COMMON FAILURE PATTERNS (Post-Refactoring Bugs)**

**These issues stem from incomplete Pattern A implementation and require systematic detection:**

#### **1. State Bleeding (Reference → Target)**
- **Symptom**: Reference mode changes affect Target mode display
- **Root Cause**: Fallback logic in `updateCalculatedDisplayValues()`
- **Detection**: `grep -r "|| targetValue" sections/` 
- **Fix**: Remove ALL fallbacks, use strict mode isolation

#### **2. Initial Load Contamination** 
- **Symptom**: Target changes affect Reference on first page load
- **Root Cause**: Missing `ModeManager.initialize()` call before calculations
- **Detection**: Check `onSectionRendered()` call order
- **Fix**: Ensure `ModeManager.initialize()` → `calculateAll()` → `updateCalculatedDisplayValues()`

#### **3. Missing State Storage**
- **Symptom**: Mode changes don't trigger downstream updates
- **Root Cause**: Missing fields in `storeReferenceResults()`
- **Detection**: Check if Reference sliders trigger `ref_` prefixed storage
- **Fix**: Add missing fields to `storeReferenceResults()`

#### **4. Missing Event Handlers**
- **Symptom**: Slider changes don't save to state
- **Root Cause**: No event handlers for key sliders (h_12, h_13, h_15)
- **Detection**: Check if section has handlers for ALL user input fields
- **Fix**: Add complete event handlers that call `ModeManager.setValue()`

### **🎯 SYSTEMATIC QA/QC PROTOCOL**

#### **Phase A: Pre-Implementation Audit**
1. **Read DUAL-STATE-CHEATSHEET.md completely**
2. **Identify ALL user input fields** (dropdowns, sliders, editable fields)
3. **Identify ALL calculated output fields** 
4. **Map dependency chain** (which sections read this section's outputs)

#### **Phase B: Implementation Checklist**
1. **✅ Dual-State Objects**: `TargetState`, `ReferenceState`, `ModeManager`
2. **✅ Dual-Engine Functions**: `calculateTargetModel()`, `calculateReferenceModel()`, `calculateAll()`
3. **✅ Proper `switchMode()`**: UI-only, no calculations, calls `updateCalculatedDisplayValues()`
4. **✅ State Storage**: `storeReferenceResults()` includes ALL relevant fields
5. **✅ Event Handlers**: ALL user inputs call `ModeManager.setValue()` → `calculateAll()` → `updateCalculatedDisplayValues()`
6. **✅ DOM Updates**: `updateCalculatedDisplayValues()` with strict mode isolation (NO fallbacks)

#### **Phase C: Post-Implementation Testing**
1. **Test Initial Load**: Verify no cross-contamination on page load
2. **Test Target Mode**: Changes affect Target only
3. **Test Reference Mode**: Changes affect Reference only  
4. **Test Mode Switching**: No bleeding between modes
5. **Test Downstream Propagation**: Verify `ref_` prefixed values reach dependent sections

#### **Phase D: Systematic Bug Detection**
```bash
# State bleeding detection
grep -r "|| targetValue" sections/
grep -r "refValue || target" sections/

# Missing initialization detection  
grep -r "onSectionRendered" sections/ | grep -v "ModeManager.initialize"

# Missing event handlers detection
grep -r "data-field-id.*h_12\|h_13\|h_15" sections/ 
# Then verify each has corresponding addEventListener

# Missing Reference storage detection
grep -r "storeReferenceResults" sections/
# Then verify all slider fields are included
```

### **🛠️ STANDARDIZED FIX PATTERNS**

#### **Fix 1: State Bleeding** 
```javascript
// ❌ WRONG:
valueToDisplay = refValue || targetValue;

// ✅ CORRECT:
if (this.currentMode === "reference") {
  valueToDisplay = StateManager.getValue(`ref_${fieldId}`) || 0;
} else {
  valueToDisplay = StateManager.getValue(fieldId) || 0;
}
```

#### **Fix 2: Missing Event Handler**
```javascript
// Add to initializeEventHandlers():
const slider = document.querySelector('input[data-field-id="fieldId"]');
if (slider) {
  slider.addEventListener("change", function(e) {
    ModeManager.setValue("fieldId", e.target.value, "user-modified");
    calculateAll();
    ModeManager.updateCalculatedDisplayValues();
  });
}
```

#### **Fix 3: Missing Reference Storage**
```javascript
// Add to storeReferenceResults():
const referenceResults = {
  // ... existing fields
  h_12: ReferenceState.getValue("h_12"), // Add missing field
  h_13: ReferenceState.getValue("h_13"), // Add missing field
};
```

---

---

## 🚨 **PHASE E: STATE MIXING DIAGNOSIS & REPAIR**

### **CRITICAL ISSUE: State Contamination**

**Problem**: Perfect state isolation is NOT achieved. Reference mode changes contaminate Target values, and Target mode changes incorrectly trigger Reference updates.

**Evidence**: Target TEUI `h_10` changes from `93.6` (correct heatpump) to `154.3` (electricity) when ONLY Reference mode edits are made.

### **Live Contamination Detection Tools**

```bash
# State bleeding detection
grep -r "|| targetValue\|refValue || target" sections/

# Missing mode-aware calculations
grep -r "getNumericValue.*d_113\|getValue.*d_113" sections/
# Should be: TargetState.getValue() vs ReferenceState.getValue()

# Cross-contamination in storage
grep -r "StateManager.setValue.*j_32\|StateManager.setValue.*k_32" sections/
# Verify: Target engines write unprefixed, Reference engines write ref_ prefixed

# Legacy ComponentBridge detection (should find nothing - it's retired)
grep -r "ComponentBridge\|initDualStateSync" *.js *.html
```

### **Known State Mixing Patterns**

#### **Pattern 1: Target Contamination During Reference Operations**
**Evidence from Logs:**
```
h_10=93.6 (✅ CORRECT - Target at heatpump default)
j_32 changed from 133574... to 220216... (❌ CONTAMINATION - Target changing during Reference op)  
h_10=154.3 (❌ CONTAMINATED - Target TEUI showing electricity values)
```

**Root Cause**: Target calculation engines reading UI mode instead of their dedicated state objects.

**Fix Pattern**:
```javascript
// ❌ WRONG - Mode-contaminated reading:
const fuelType = getNumericValue("d_113"); // Uses UI mode

// ✅ CORRECT - Dedicated state reading:
const fuelType = TargetState.getValue("d_113");    // Target engine
const refFuelType = ReferenceState.getValue("d_113"); // Reference engine
```

#### **Pattern 2: Missing Mode-Aware Storage**
**Evidence**: Reference calculations work but don't store `ref_` prefixed results for downstream sections.

**Detection**: 
```bash
# Check if Reference engines store ref_ values
grep -A 10 "calculateReferenceModel" sections/Section*.js | grep "ref_"
```

**Fix Pattern**:
```javascript
// Add to calculateReferenceModel():
function storeReferenceResults() {
  const referenceResults = {
    ref_j_32: ReferenceState.getValue("j_32") || 0,
    ref_k_32: ReferenceState.getValue("k_32") || 0,
    ref_h_10: /* calculated Reference TEUI */
  };
  
  Object.entries(referenceResults).forEach(([key, value]) => {
    window.TEUI.StateManager.setValue(key, value.toString(), "calculated");
  });
}
```

### **Component Architecture Issues**

#### **ComponentBridge Status: RETIRED** 
**✅ RESOLVED**: ComponentBridge.js has been fully retired from the architecture
**Status**: No longer loaded in index.html or referenced in Calculator.js
**Current Architecture**: All sections write `ref_` prefixed values directly to StateManager for cross-section communication

#### **Calculation Storm Prevention**
**Problem**: Recursive listener loops causing performance issues
**Solution**: Global calculation lock implemented in Calculator.js:
```javascript
window.TEUI.isCalculating = false; // Traffic cop flag
```

### **Systematic State Mixing Repair Protocol**

#### **Step 1: Identify Contaminated Section**
1. Run live detection tools above
2. Check logs for `j_32`, `k_32`, `h_10` changes during Reference operations
3. Focus on sections that write these global summary values (S04, S15)

#### **Step 2: Make Calculations Mode-Aware**
1. **Target engines**: Use `TargetState.getValue()` for inputs
2. **Reference engines**: Use `ReferenceState.getValue()` for inputs  
3. **Never use**: `getNumericValue()` or `ModeManager.getValue()` in calculation engines

#### **Step 3: Fix Storage Operations**
1. **Target engines**: Write to unprefixed StateManager keys (`j_32`, `k_32`)
2. **Reference engines**: Write to `ref_` prefixed keys (`ref_j_32`, `ref_k_32`)
3. **Add missing**: `storeReferenceResults()` function if section affects downstream calculations

#### **Step 4: Validate State Isolation**
**Test Sequence**:
1. Load app with defaults → Note Target TEUI (`h_10`)
2. Switch to Reference mode → Change fuel type in S13
3. **Expected**: Target TEUI stays unchanged, Reference TEUI updates
4. **Failure**: Target TEUI changes = contamination still exists

### **Success Criteria for State Isolation**
✅ **Perfect State Isolation**: Reference changes NEVER affect Target values  
✅ **Target Stability**: `h_10` stays at defaults during Reference operations  
✅ **Reference Functionality**: Values update correctly from `ref_` prefixed data  
✅ **ComponentBridge Retired**: Modern `ref_` prefixed StateManager architecture
✅ **Performance**: No calculation storms or excessive logging

---

## 🚨 **PHASE F: SYSTEMIC FIELDMANAGER CONTAMINATION (CRITICAL)**

### **CRITICAL DISCOVERY: Legacy FieldManager Direct StateManager Writes**

**Date Discovered**: December 2024  
**Severity**: CRITICAL - Affects entire dual-state architecture  
**Root Cause**: FieldManager.js bypasses dual-state architecture with direct StateManager writes  

### **🔍 The Problem**

During S02 Reference mode testing, systematic cross-state contamination was discovered:

**Symptoms:**
- Reference mode slider changes correctly update Reference columns (e_6, e_8) ✅
- BUT also incorrectly contaminate Target columns (h_6, h_8, k_6, k_8) ❌
- S05 triggered in Target mode during Reference operations ❌
- Perfect state isolation violated across entire system ❌

**Root Cause Identified:**
```
🚨 [DEBUG] CONTAMINATION! Something wrote h_13=value, source=undefined
Stack trace: (anonymous) @ 4011-FieldManager.js:861
```

### **🎯 Architectural Impact**

**FieldManager Legacy Pattern B Contamination:**
- FieldManager directly writes user input to `StateManager.setValue(fieldId, value)`
- This bypasses ModeManager dual-state architecture entirely
- Creates **systematic cross-state bleeding** affecting all dual-state sections
- Violates Core Principle #3: State Sovereignty

**Evidence:**
```javascript
// ❌ WRONG: FieldManager direct StateManager write (Pattern B contamination)
StateManager.setValue("h_13", userInputValue, "user-modified");

// ✅ CORRECT: Dual-state aware write (Pattern A compliant)  
ModeManager.setValue("h_13", userInputValue, "user-modified");
```

### **🔧 Investigation Results**

**Testing Protocol Used:**
1. **Clean logging environment** (removed 23,000+ log lines)
2. **Focused h_13 contamination detection** with StateManager interceptor
3. **ModeManager exonerated** - correctly writes only to `ref_h_13` 
4. **storeReferenceResults() exonerated** - correctly stores only ref_ prefixed values
5. **FieldManager.js:861 identified** as systematic contamination source

**Detection Pattern:**
```
🔍 [DEBUG] ModeManager.setValue: field=h_13, value=70, mode=reference  
🔍 [DEBUG] Writing REFERENCE: ref_h_13=70                              ✅ CORRECT
🔍 [DEBUG] storeReferenceResults BEFORE: h_13=undefined, ref_h_13=70   ✅ CORRECT  
🚨 [DEBUG] CONTAMINATION! Something wrote h_13=70, source=undefined    ❌ FIELDMANAGER!
Stack trace: (anonymous) @ 4011-FieldManager.js:861
```

### **🛠️ Required Fix (Future Implementation)**

**FieldManager Must Be Made Dual-State Aware:**

1. **Remove direct StateManager writes** from FieldManager
2. **Route all user inputs through section ModeManagers** 
3. **Respect dual-state architecture** for all slider/input events
4. **Test across all sections** for systematic contamination elimination

**Pattern Fix:**
```javascript
// ❌ CURRENT (Pattern B contamination):
window.TEUI.StateManager.setValue(fieldId, value, "user-modified");

// ✅ REQUIRED (Pattern A compliant):
const section = findSectionForField(fieldId);
section.ModeManager.setValue(fieldId, value, "user-modified");
```

### **🚨 Codebase Impact Assessment**

**This affects ALL dual-state sections:**
- Any section with sliders, dropdowns, or editable fields
- Any user input that goes through FieldManager
- Cross-section contamination during Reference mode operations
- State isolation violations throughout the system

**Priority**: **CRITICAL** - Must be fixed before dual-state architecture can be considered stable.

### **🛠️ FieldManager Fix Implemented (December 2024)**

**Status**: ✅ **COMPLETED** - Systematic contamination architecture fixed

**Solution Implemented:**
1. **`findSectionForField(fieldId)`**: Added reverse field-to-section mapping
2. **`routeToSectionModeManager(fieldId, value, source)`**: Routes user input through appropriate section's ModeManager
3. **Dual-State Aware Input Handling**: Replaced 3 direct `StateManager.setValue()` calls with ModeManager routing:
   - **Sliders** (line 922): `h_12`, `h_13`, and all slider inputs now respect UI mode
   - **Dropdowns** (line 1105): Province, city, and all dropdown selections dual-state aware  
   - **Input Fields** (line 662): Manual numeric inputs respect dual-state architecture

**Graceful Fallbacks:**
- Sections without ModeManager fall back to direct StateManager writes (with warning)
- Unknown fields fall back to legacy direct writes (with warning)
- Maintains backward compatibility during incremental section upgrades

**Impact**: Eliminates systematic cross-state contamination for ALL user inputs across the application.

---

🛑 **FINAL REMINDER FOR AI AGENTS** 🛑

**MANDATORY ORDER**: 
1. **Preventative QA/QC** (Phases A-D above) for new refactors
2. **Diagnostic Repair** (Phase E above) for existing contamination issues

**IF ANY STEP FAILS**: Go back to the longer, more complete DUAL-STATE-IMPLEMENTATION-GUIDE.md and follow the patterns exactly as documented. Do NOT improvise or "fix" things differently than shown.

**SUCCESS CRITERIA**: User can change dropdowns and see calculated fields update immediately in the DOM. Both Target and Reference modes work without state contamination.

**FAILURE MODES**: "DOM not updating", "values stuck at old values", "both engines running on mode switch", "state contamination" = You didn't follow the documented patterns.

**STATE MIXING PRIORITY**: If state contamination exists, fix that FIRST before any new features or refactors.

---

## **🚀 SECTION-BY-SECTION IMPLEMENTATION STATUS**

### **✅ COMPLETED SECTIONS (Pattern A Compliant)**:
- **S01**: ✅ Consumer dashboard - displays Reference/Target/Actual
- **S02**: ✅ Building parameters - complete dual-state architecture  
- **S03**: ✅ Climate data - feeds Reference values to all downstream sections
- **S10**: ✅ Radiant gains - Reference mode fully functional, nGains working
- **S11**: ✅ Transmission losses - **TEMPLATE SUCCESS** using Reference Value Persistence Pattern

### **🔧 READY FOR IMPLEMENTATION**:
- **S12**: 📋 Audit complete, workplan ready (Ventilation & DHW)
- **S13**: 📋 Audit complete, workplan ready (Space Heating & Cooling)

### **📋 PENDING SECTIONS**:
- **S04-S09**: Core calculation sections
- **S14-S15**: Summary and integration (may resolve S10 downstream flow)
- **S16**: Sankey diagram integration

### **🎯 PROVEN SUCCESS PATTERN (S11 Template)**:

#### **Phase 1: Foundation Fix** (15 minutes)
```javascript
// Fix missing ModeManager export
return {
  // ... existing exports ...
  ModeManager: ModeManager,  // ✅ CRITICAL FIX
};
```

#### **Phase 2: Pattern B Contamination** (20 minutes)
```javascript
// ❌ ANTI-PATTERN:
const target_hdd = getGlobalNumericValue("target_d_20");

// ✅ CORRECT:
const hdd = getGlobalNumericValue("d_20");  // Target
const ref_hdd = getGlobalNumericValue("ref_d_20");  // Reference
```

#### **Phase 3: DOM Update Coverage** (15 minutes)
```javascript
// Expand updateCalculatedDisplayValues to cover ALL calculated fields
const calculatedFields = [
  // ✅ Include ALL section-specific calculated fields
];
```

#### **Phase 4: Reference External Listeners** (10 minutes)
```javascript
// Add Reference climate listeners
window.TEUI.StateManager.addListener("ref_d_20", () => calculateAll());
window.TEUI.StateManager.addListener("ref_d_21", () => calculateAll());
// ... all Reference dependencies
```

#### **Phase 5: Reference Value Persistence Pattern** (25 minutes)
```javascript
// Store Reference results at module level
let lastReferenceResults = {};

// In calculateReferenceModel(): Store results
lastReferenceResults = { ...calculatedResults };

// In calculateAll(): Re-write after all calculations
if (lastReferenceResults) {
  Object.entries(lastReferenceResults).forEach(([field, value]) => {
    window.TEUI.StateManager.setValue(`ref_${field}`, value, "calculated");
  });
}
// THEN update DOM
ModeManager.updateCalculatedDisplayValues();
```

### **🏆 S11 Success Metrics**:
- ✅ **Stuck Values Fixed**: Reference mode responds to S03 climate changes
- ✅ **Race Conditions Resolved**: Reference Value Persistence prevents overwrites  
- ✅ **Complete State Isolation**: Target/Reference modes fully independent
- ✅ **Excel Compliance Maintained**: All calculation formulas preserved
- ✅ **CTO Architecture Compliance**: No setTimeout usage

### **📚 Implementation Guides**:
- **S11-TROUBLESHOOTING-GUIDE.md**: Complete success story and template
- **S12-TROUBLESHOOTING-GUIDE.md**: Ready-to-implement audit and workplan
- **S13-TROUBLESHOOTING-GUIDE.md**: Complex HVAC calculation patterns
- **S10-DOWNSTREAM-FLOW-ISSUE.md**: System integration dependencies
