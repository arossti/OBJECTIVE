# 🏆 DUAL-STATE PATTERN A - CHEATSHEET

🛑🛑🛑 **CRITICAL - READ BEFORE TOUCHING ANY CODE** 🛑🛑🛑
========================================================

**FOR AI AGENTS: MANDATORY ACTIONS BEFORE REFACTORING:**
1. **READ FULL IMPLEMENTATION GUIDE FIRST** - `DUAL-STATE-IMPLEMENTATION-GUIDE.md`
2. **RUN QA/QC CHECKLIST BELOW** - Every single check, no exceptions
3. **DO NOT COPY S11 PATTERNS** - S11 has wrong patterns, use documented examples instead
4. **DO NOT THROW OUT WORKING CALCULATIONS** - Add dual-state to existing working code
5. **FOLLOW DOCUMENTED PATTERNS EXACTLY** - Don't reinvent, patterns are already perfected

🚨 **AGENT FAILURE MODES TO AVOID:**
- Citing S11 as "gold standard" (it has wrong patterns documented in guide)
- Throwing out working calculation functions from BACKUP files
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

##  STATUS: Refactoring Nearing Completion (August 2025)

The Pattern A refactoring initiative is substantially complete.

-   ✅ **Completed Sections**: S01, S02, S03, S08, S09, S10, S11, S12, S13, S14, S15.
-   ✅ **S04 (Energy Summary)**: Has been completely rebuilt from scratch as a pure **Consumer Section**, resolving previous architectural issues. It now correctly reads upstream values from S13/S15.
-   🚧 **Pending Refactor**: S05, S06, S07 are the final sections to be migrated to Pattern A.

---

## 📋 Pattern A Implementation Checklist

### 1. The Three Core Objects

Every dual-state section **MUST** have these three objects.

```javascript
// Manages user's design values
const TargetState = { /* ... */ };

// Manages building code minimums
const ReferenceState = { /* ... */ };

// Facade to switch between states
const ModeManager = { /* ... */ };
```

### 2. The Correct `calculateAll()` Pattern

```javascript
function calculateAll() {
  // ALWAYS run BOTH engines in parallel
  calculateTargetModel();    // Reads TargetState -> stores unprefixed values in StateManager
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
dependencies.forEach(depId => {
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
window.TEUI.StateManager.setValue("ref_i_98", heatloss.toString(), "calculated");
```

---

## 🚨 MANDATORY QA/QC Checklist

**⚠️ CRITICAL**: Run ALL checks before declaring Pattern A complete.

### **Phase 1: Pattern B Contamination Scan**
1.  **Scan for prefixes**: `grep -n "target_\|ref_" sections/4011-SectionXX.js`
2.  **Look for Toxic Patterns**:
    *   Reading external dependencies with prefixes: `getValue("target_d_20")`. **FIX**: Use explicit state access.
    *   `calculateAll()` inside `switchMode()`. **FIX**: Remove it immediately - this is state contamination.
    *   Calculations that only run one model based on `currentMode`. **FIX**: Ensure both models always run.
    *   Missing `updateCalculatedDisplayValues()` after `calculateAll()`. **FIX**: Add it everywhere.

### **Phase 2: "Current State" Anti-Pattern Elimination (CRITICAL)**
3.  **Scan for ambiguous reads**: `grep -n "getFieldValue\|getGlobalNumericValue" sections/4011-SectionXX.js`
4.  **Look for Current State Anti-Patterns**:
    *   `getFieldValue("d_113")` - **FIX**: Use explicit `TargetState.getValue("d_113")` or `ReferenceState.getValue("d_113")`
    *   `getGlobalNumericValue("g_32")` in calculations - **FIX**: Use mode-aware access:
        ```javascript
        // ❌ WRONG: Ambiguous current state
        const value = getGlobalNumericValue("g_32");
        
        // ✅ CORRECT: Always explicit
        const value = isReferenceCalculation 
          ? getGlobalNumericValue("ref_g_32")  
          : getGlobalNumericValue("g_32");
        ```

### **Phase 3: DOM Update & Function Preservation (CRITICAL)**
5.  **Check DOM updates**: Every `calculateAll()` call MUST be followed by `updateCalculatedDisplayValues()`
    *   Event handlers (dropdown changes, field edits)
    *   Initialization (`onSectionRendered`)
    *   External dependency listeners
    *   State resets
6.  **Verify working functions preserved**: Compare with BACKUP file - NO calculation functions should be deleted
    *   Calculate functions (like `calculateTypologyBasedCap`)
    *   Formula implementations (Excel compliance)
    *   Default values (like `i_41: "345.82"`)
7.  **Test basic functionality**: Dropdown changes MUST update calculated fields in DOM immediately

### **Phase 4: Pattern 2 Compliance**
8.  **External Dependencies**: ALL calculations must read explicit Target or Reference upstream values
9.  **Dual-Mode Listeners**: Listen to BOTH `"fieldId"` AND `"ref_fieldId"` for all external dependencies
10. **State Isolation**: Reference calculations NEVER read unprefixed values; Target calculations NEVER read ref_ values

---

🛑 **FINAL REMINDER FOR AI AGENTS** 🛑

**IF ANY STEP FAILS**: Go back to the DUAL-STATE-IMPLEMENTATION-GUIDE.md and follow the patterns exactly as documented. Do NOT improvise or "fix" things differently than shown.

**SUCCESS CRITERIA**: User can change dropdowns and see calculated fields update immediately in the DOM. Both Target and Reference modes work without state contamination.

**FAILURE MODES**: "DOM not updating", "values stuck at old values", "both engines running on mode switch" = You didn't follow the documented patterns.
