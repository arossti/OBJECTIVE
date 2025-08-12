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

11. **MANDATORY FIXES**: Remove ALL hardcoded defaults from state objects that duplicate field definitions
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
16. **State Isolation**: Reference calculations NEVER read unprefixed values; Target calculations NEVER read ref\_ values

---

## 🚀 COMPONENTBRIDGE RETIREMENT (After S07 Refactor)

**STATUS**: All sections Pattern A except S07. ComponentBridge can be retired after S07 refactor.

### **🎯 ComponentBridge Retirement Checklist**

**ONLY proceed after S07 is fully refactored to Pattern A**

1. **✅ Verify All Sections Pattern A**:

   - S01: ✅ Consumer (reads from S04)
   - S02-S06: ✅ Pattern A dual-state
   - S07: ❌ **MUST BE REFACTORED FIRST**
   - S08-S15: ✅ Pattern A dual-state

2. **🔥 Remove ComponentBridge**:

   ```javascript
   // DELETE these files entirely:
   // - 4011-ComponentBridge.js
   // - Any ComponentBridge.initAll() calls in main initialization
   ```

3. **🧪 Test Post-Retirement Flow**:
   ```javascript
   // Expected clean flow (example):
   // S06 Reference d_44 input → ReferenceState → ref_d_43 →
   // S04 ref_d_43 listener → calculateReferenceModel() → ref_j_32 →
   // S01 ref_j_32 listener → Reference column display
   ```

### **🏛️ Clean Post-ComponentBridge Architecture**

#### **Direct StateManager Registration** (No Bridge Layer)

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

#### **Clean Listener Network** (No Contamination)

```javascript
// Perfect state isolation - each mode flows separately:
StateManager.addListener("d_43", calculateTargetModel); // Target → Target
StateManager.addListener("ref_d_43", calculateReferenceModel); // Reference → Reference
```

#### **Benefits of Retirement**:

- **🔥 Performance**: No bridge layer overhead
- **🛡️ Reliability**: Eliminates all contamination vectors
- **🔍 Debuggability**: Direct listener traces
- **⚡ Simplicity**: Fewer moving parts
- **🧪 Testability**: Isolated state testing

### **🎉 COMPLETED COMPONENTBRIDGE RETIREMENT (August 5, 2025)**

**Status: ALL SECTIONS NOW PATTERN A COMPLIANT**

✅ **S01**: Consumer section pattern (reads from upstream)  
✅ **S02-S06**: Pattern A dual-state architecture  
✅ **S07**: **COMPLETED August 4** - Pattern A with mode-aware calculations  
✅ **S08-S18**: Pattern A dual-state architecture  

**ComponentBridge now be safely retired** - all sections use direct StateManager registration and proper state isolation.

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

🛑 **FINAL REMINDER FOR AI AGENTS** 🛑

**MANDATORY ORDER**: 
1. **Preventative QA/QC** (Phases A-D above) for new refactors
2. **Diagnostic Repair** (Phase E above) for existing contamination issues

**IF ANY STEP FAILS**: Go back to the longer, more complete DUAL-STATE-IMPLEMENTATION-GUIDE.md and follow the patterns exactly as documented. Do NOT improvise or "fix" things differently than shown.

**SUCCESS CRITERIA**: User can change dropdowns and see calculated fields update immediately in the DOM. Both Target and Reference modes work without state contamination.

**FAILURE MODES**: "DOM not updating", "values stuck at old values", "both engines running on mode switch", "state contamination" = You didn't follow the documented patterns.

**STATE MIXING PRIORITY**: If state contamination exists, fix that FIRST before any new features or refactors.
