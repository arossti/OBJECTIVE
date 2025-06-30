# 🚨 **DOCUMENTATION MOVED**

## **Current Documentation Location**

This file has been replaced with clean, actionable documentation:

- **Primary Guide**: `4012-CLEAN-REFACTOR-GUIDE.md` - Complete implementation guide
- **Quick Reference**: `4012-QUICK-PATTERNS.md` - Essential patterns for daily use
- **Architecture**: `../OBJECTIVE 4012/documentation/ARCHITECTURE-COMPARISON.md` - Design principles

## **Why This Change**

The original document was too verbose and repetitive for practical use. The new documentation is:
- ✅ **Concise** - Essential information only
- ✅ **Actionable** - Clear patterns and examples  
- ✅ **Up-to-date** - Reflects completed dual-state architecture
- ✅ **Agent-friendly** - Easy for future agents to understand

---

## 📋 **Architecture Summary**

**Status**: ✅ **MILESTONE COMPLETE** - All 15 calculation sections (S01-S15) converted to dual-state tuples-based system with complete state isolation.

**Template**: Use `sections/4011-Section03.js` as the canonical pattern for any future development.

**Key Achievement**: Target h_10 remains stable at 93.6 regardless of Reference toggle changes - no more state contamination.

**Critical Pattern**: Sections that read other sections' outputs (like S15) must use mode-aware reading with prefixed values.

---

**For Implementation Details**: See `4012-CLEAN-REFACTOR-GUIDE.md`  
**For Quick Patterns**: See `4012-QUICK-PATTERNS.md`

---

## 🚨 **Architectural Debt & Documentation Cleanup Plan**

**Objective**: Eliminate legacy patterns from the codebase and documentation that conflict with the pure dual-state architecture. The project's stability depends on fully committing to the prefixed-value system (`ref_` and `target_`) and removing all reliance on shared, unprefixed "global" states.

### **1. Identify and Deprecate Flawed Documentation in `README.md`**

The main `README.md` file contains several outdated architectural patterns that are now considered harmful. The following sections must be reviewed and refactored or removed to align with the `4012-CLEAN-REFACTOR-GUIDE.md`:

-   **❌ Flawed Pattern: "StateManager as Single Source of Truth"**
    -   **Legacy Advice**: The code example shows `window.TEUI.StateManager.setValue(fieldId, ...)` which writes only to the global state.
    -   **Conflict**: This directly causes state contamination.
    -   **Action**: Replace this example with the new mode-aware `setCalculatedValue` pattern that correctly writes to `ref_` or `target_` prefixed states based on the current UI mode.

-   **❌ Flawed Pattern: "Cross-State Contamination Fix (V2)"**
    -   **Legacy Advice**: Introduces complex helper functions like `getRefFieldValue` that contain layered fallback logic (e.g., "try reference, then try application").
    -   **Conflict**: This is a transitional pattern that obscures the simple purity of the new architecture. The new pattern is to read the exact prefixed value needed (`StateManager.getValue('ref_d_22')`) without ambiguity.
    -   **Action**: Deprecate these complex helpers in favor of direct, explicit prefixed state access.

-   **❌ Flawed Pattern: "HYBRID IT-DEPENDS ARCHITECTURE"**
    -   **Legacy Advice**: Shows examples of writing to global state (`setCalculatedValue("i_80", ...)`) and suggests a hybrid model.
    -   **Conflict**: The "hybrid" approach is the source of our technical debt. The project's direction is to eliminate this middle ground.
    -   **Action**: Remove this section or heavily revise it to explain why this pattern has been superseded by the pure dual-state model.

### **2. The Correct Path for `d_13` Reference Standard Logic**

When refactoring the logic for the `d_13` dropdown (Reference Standard selection), we must adhere to the following strict pattern to avoid repeating past mistakes:

1.  **Listen**: The event listener for the `d_13` dropdown triggers a single function.
2.  **Fetch**: This function gets the reference dataset from `ReferenceValues.js`.
3.  **Write to `ref_` ONLY**: The function iterates through the dataset and writes every value **exclusively to its `ref_` prefixed state** in the `StateManager` (e.g., `StateManager.setValue('ref_h_115', ...)`).
4.  **NEVER Write to Globals**: At no point should this process write to an unprefixed field ID. This is non-negotiable.
5.  **Trigger Reference Calculation**: After setting all the `ref_` values, the function should explicitly trigger **only** the `calculateReferenceModel()` chain. This ensures the Target model is never affected. 