# 🏆 DUAL-STATE PATTERN A - CHEATSHEET

**Mandate**: This is the concise guide to the **sole approved pattern** for implementing dual-state (Target/Reference) functionality. All sections must adhere to this standard.

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
  this.refreshUI();
  this.updateCalculatedDisplayValues(); 
  
  // ❌ NEVER CALL calculateAll() HERE
}
```

### 4. Handling Dependencies

```javascript
// ✅ Reading from other sections (clean, no prefixes)
const hdd = getGlobalNumericValue("d_20");

// ✅ Reading from within your own section
const area = ModeManager.getValue("d_85");

// ✅ Storing Reference results for other sections to use
window.TEUI.StateManager.setValue("ref_i_98", heatloss.toString(), "calculated");
```

---

## 🚨 Pattern B Contamination Quick Scan

Use this to detect anti-patterns in legacy code.

1.  **Scan for prefixes**: `grep -n "target_\|ref_" sections/4011-SectionXX.js`
2.  **Look for Toxic Patterns**:
    *   Reading external dependencies with prefixes: `getValue("target_d_20")`. **FIX**: Use `getGlobalNumericValue("d_20")`.
    *   `calculateAll()` inside `switchMode()`. **FIX**: Remove it.
    *   Calculations that only run one model based on `currentMode`. **FIX**: Ensure both models always run in `calculateAll()`.
