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
- Not running the QA/QC checklist (causes architectural failures)
- Speed-reading instead of following patterns exactly
- Adding `calculateAll()` to `switchMode()` (major anti-pattern)
- Not implementing `updateCalculatedDisplayValues()` for DOM updates
- Forgetting to call `updateCalculatedDisplayValues()` after `calculateAll()`

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

## STATUS: Refactoring Nearing Completion (August 2025)

The Pattern A refactoring initiative is substantially complete.

- ✅ **Completed Sections**: S01, S02, S03, S08, S09, S10, S11, S12, S13, S14, S15.
- ✅ **S04 (Energy Summary)**: Has been completely rebuilt from scratch as a pure **Consumer Section**, resolving previous architectural issues. It now correctly reads upstream values from S13/S15.
- 🚧 **Pending Refactor**: S05, S06, S07 are the final sections to be migrated to Pattern A.

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

### **Phase 5: Pattern 2 Compliance**

10. **External Dependencies**: ALL calculations must read explicit Target or Reference upstream values
11. **Dual-Mode Listeners**: Listen to BOTH `"fieldId"` AND `"ref_fieldId"` for all external dependencies
12. **State Isolation**: Reference calculations NEVER read unprefixed values; Target calculations NEVER read ref\_ values

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

### **🎉 READY FOR COMPONENTBRIDGE RETIREMENT (August 4, 2025)**

**Status: ALL SECTIONS NOW PATTERN A COMPLIANT**

✅ **S01**: Consumer section pattern (reads from upstream)  
✅ **S02-S06**: Pattern A dual-state architecture  
✅ **S07**: **COMPLETED August 4** - Pattern A with mode-aware calculations  
✅ **S08-S18**: Pattern A dual-state architecture  

**ComponentBridge can now be safely retired** - all sections use direct StateManager registration and proper state isolation.

---

🛑 **CRITICAL ANTI-PATTERN PREVENTION** 🛑

**NEVER** make Target and Reference models read the same user input values.
Target and Reference must have **completely independent input states**.

❌ **WRONG**: `const systemType = getFieldValue("d_113"); // Same for both models`
✅ **CORRECT**: 
- Target: `const systemType = TargetState.getValue("d_113");`
- Reference: `const systemType = ReferenceState.getValue("d_113");`

This independence allows comparing different systems (e.g., Gas vs Electric heating).

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

🛑 **FINAL REMINDER FOR AI AGENTS** 🛑

**IF ANY STEP FAILS**: Go back to the DUAL-STATE-IMPLEMENTATION-GUIDE.md and follow the patterns exactly as documented. Do NOT improvise or "fix" things differently than shown.

**SUCCESS CRITERIA**: User can change dropdowns and see calculated fields update immediately in the DOM. Both Target and Reference modes work without state contamination.

**FAILURE MODES**: "DOM not updating", "values stuck at old values", "both engines running on mode switch" = You didn't follow the documented patterns.
