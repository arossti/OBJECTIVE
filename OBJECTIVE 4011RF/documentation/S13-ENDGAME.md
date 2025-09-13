# S13-ENDGAME.md: The Final, Architecturally-Compliant Refactor for Section 13

**Version**: 1.0
**Date**: September 12, 2025
**Status**: This document outlines the definitive and final refactoring plan for Section 13 to achieve perfect dual-state compliance, building upon the critical insights gathered in `S13-MASTER-WORKPLAN.md`.

---

## 1. Executive Summary

This document details the official endgame for the Section 13 refactor. The extensive diagnostic work and iterative fixes documented in `S13-MASTER-WORKPLAN.md` were not in vain; they were essential in uncovering that the persistent state-mixing issues with the `g_118` dropdown are not due to a simple bug, but a fundamental architectural mismatch.

The previous refactor attempted a "Parameter-based" approach (Pattern 2), which the `4012-CHEATSHEET.md` correctly identifies as fragile and insufficient for a section with the complexity of S13's cooling engine.

The definitive solution is to upgrade Section 13 to the project's gold-standard, **"Pattern 1: Temporary Mode Switching"**. This plan outlines the precise, methodical steps to implement this robust architecture, ensuring Section 13 becomes fully compliant, stable, and free of state contamination. This is not another iterative fix; it is the implementation of the project's proven, correct architectural pattern.

## 2. The Root Cause: An Architectural Mismatch

The core issue can be summarized as follows:

- **The `g_118` Anomaly**: While simpler dropdowns (`d_113`, `d_116`) were successfully isolated, `g_118` triggers a deeply interconnected cooling calculation engine.
- **The Flawed Pattern**: The previous refactor attempted to isolate this engine by passing parameters and a context object down the calculation chain.
- **The Point of Failure**: This "Pattern 2" approach failed because the cooling engine still contained legacy code that could access shared state, creating a "back door" for data from the Target model to contaminate the Reference model, and vice-versa.

## 3. The Definitive Solution: Full Compliance with "Pattern 1"

As detailed in `4012-CHEATSHEET.md`, Pattern 1 is the most reliable architecture for complex sections. It makes state isolation implicit and automatic, even for shared modules like the cooling engine. We will now implement this pattern precisely.

### The Step-by-Step Implementation Plan

This plan will be executed methodically to ensure a successful and final resolution.

#### **Phase 1: Implement Temporary Mode Switching**

This is the foundational step of Pattern 1. It ensures that the entire execution context is unambiguously set for either a Target or Reference calculation.

1.  **Modify `calculateTargetModel()`**: Wrap the entire function body in a `try...finally` block.
    -   In the `try` block, the first line will be `ModeManager.currentMode = "target";`.
    -   In the `finally` block, the mode will be restored to its original state.
2.  **Modify `calculateReferenceModel()`**: Apply the exact same `try...finally` pattern, but set the mode to `ModeManager.currentMode = "reference";`.

#### **Phase 2: Purge Legacy Patterns & Simplify the Code**

With the mode now being set automatically, we can remove the now-redundant and fragile code from the previous "Pattern 2" attempt.

1.  **Remove `isReferenceCalculation` Parameter**: Go through the entire calculation chain (`calculateHeatingSystem`, `calculateCoolingSystem`, `runIntegratedCoolingCalculations`, etc.) and remove the `isReferenceCalculation` boolean parameter from all function signatures and calls.
2.  **Delete `createIsolatedCoolingContext` function**: This function's purpose is now obsolete. The temporary mode switch handles the context implicitly.

#### **Phase 3: Unify and Isolate State Access**

This phase ensures that all functions read from the correct, mode-aware data source automatically.

1.  **Refactor `updateCoolingInputs()`**: This function will be simplified. Its sole job is to populate the cooling engine's state object. It will no longer need to build a complex context.
2.  **Standardize All Data Reads**: All functions within the calculation chain will be updated to use `ModeManager.getValue("field_id")` for reading section-internal state and a mode-aware global reader (e.g., `getModeAwareGlobalValue('d_20')`) for reading upstream dependencies. These functions will automatically return the correct value based on the `currentMode` set in Phase 1.

## 4. Success Criteria

This refactor will be considered complete and successful when the following conditions are met:

1.  **Perfect State Isolation for `g_118`**:
    -   When in **Target mode**, changing `g_118` ONLY affects the Target TEUI (`h_10`). The Reference TEUI (`e_10`) remains completely stable.
    -   When in **Reference mode**, changing `g_118` ONLY affects the Reference TEUI (`e_10`). The Target TEUI (`h_10`) remains completely stable.
2.  **"Cooling Bump" Eliminated**: The `h_10` value settles on its correct final value after a single calculation pass. The need to trigger a second calculation (the "cooling bump") is permanently gone.
3.  **Full Architectural Compliance**: Section 13 is now a textbook implementation of "Pattern 1" as defined in the `4012-CHEATSHEET.md`, making it robust, maintainable, and consistent with the project's best practices.

## 5. Calculation Parity Workplan

**Status**: Pattern 1 implementation complete - **state isolation achieved!** ✅  
**Issue**: Calculation values don't match expected Excel parity  
**Target**: h_10 = 90.9 (No Cooling), h_10 = 93.6 (Cooling ON)  
**Current**: h_10 = 103.3+ (calculations drift from expected values)

### **Phase 1: Diagnose Calculation Drift**

1. **Compare cooling load calculations** between S13-CONTEXT.js (working) and current S13
2. **Verify cooling state isolation** - ensure Target/Reference don't share coolingState object
3. **Check if DOM updates** are triggering properly through updateTargetModelDOMValues()
4. **Validate upstream dependencies** (d_127, m_129, l_128) are being read correctly

### **Phase 2: Restore Calculation Accuracy**

1. **Audit cooling physics functions** - ensure calculateAtmosphericValues, calculateLatentLoadFactor match CONTEXT
2. **Check coolingState vs isolated context** - Pattern 1 may need isolated cooling contexts per mode
3. **Verify ventilation method calculations** - g_118 method logic must match Excel exactly
4. **Test fuel impact calculations** - Oil/Gas emissions must trigger correctly on AFUE/volume changes

### **Phase 3: Validation & Testing**

1. **Excel baseline comparison** - All S13 calculations must match Excel codebase exactly
2. **Mode isolation verification** - Target/Reference calculations must remain independent
3. **Dependency chain testing** - Upstream changes must propagate correctly to S01 totals
4. **Performance optimization** - Remove any remaining calculation stickiness/delays

### **Success Criteria for Calculation Parity**

- ✅ **State isolation maintained** (already achieved)
- 🎯 **h_10 = 90.9** when d_116 = "No Cooling"  
- 🎯 **h_10 = 93.6** when d_116 = "Cooling" with default settings
- 🎯 **e_10 = 211** for Reference model baseline
- 🎯 **S01 totals match** expected Excel values
- 🎯 **All ventilation changes** trigger immediate recalculations

## 6. September 14, 2025 GOAL: Methodical Rebuild Strategy

**Assessment**: The Pattern 1 refactor successfully achieved state isolation but broke calculation parity by moving too fast. We need a more careful, progressive approach that maintains both architectural integrity AND calculation accuracy.

### **The New Path Forward**

**Philosophy**: Build the final S13 refactor on solid foundations with continuous validation, just as we carefully constructed the CONTEXT version step-by-step with Chunk A, B, C methodology.

### **Phase 1: Establish Known Calculation Baseline**

**Objective**: Calibrate all 4011RF sections to match Excel defaults in both Reference and Target modes.

1. **Section-by-Section Excel Alignment**:
   - Verify S14 and S15 Target calculations match Excel exactly
   - Ensure S04 and S01 downstream flow produces expected totals
   - Confirm Reference states across all sections match Excel baseline values
   - Rule out any unexpected values in Reference states

2. **Target Flow Validation**:
   - S14 → S15 → S04 → S01 calculation chain verification
   - Known good: S13 Target state isolation (current working file)
   - Known issue: S13 Target calculation accuracy needs work

3. **Reference Flow Validation**:
   - Ensure all Reference calculations use proper building code defaults
   - Verify Reference state isolation is maintained across all sections
   - Confirm no unexpected contamination in any Reference calculations

**Success Criteria Phase 1**: All sections except S13 show perfect Excel parity in both modes.

### **Phase 2: Progressive S13 Refactor with Continuous Validation**

**Starting Point Options**:
- **Option A**: Pre-context S13 (OFFLINE) - known calculation accuracy in Target mode
- **Option B**: S13-CONTEXT - partial state isolation + calculation accuracy with context-dependent state objects (still state mixing at g_118 however)
- **Option C**: S13.js - Our working file which demonstrates state isolation at the expense of cooling calculation accuracy and parity, and DOM stickiness and several other bugs... a good example of what we hope to acheive, but which was refactored too hastily and broke parity with excel calculations. Probably better to rename and reference only as needed per this ENDGAME strategy noted above. 

**Methodology**: Careful, incremental refactor with validation after each edit:

1. **Baseline Establishment**:
   - Start with chosen baseline file (OFFLINE or CONTEXT)
   - Verify initial calculation parity with Excel
   - Document exact h_10, e_10 values as reference points

2. **Incremental Architecture Updates**:
   - Apply Pattern 1 concepts ONE function at a time
   - Validate calculation parity after each function modification
   - Maintain UI and DOM update functionality throughout
   - Test S01 flow after each significant change

3. **Continuous Quality Assurance**:
   - Check calculation parity after each edit (like Chunk methodology)
   - Troubleshoot errors immediately as they appear
   - Never proceed to next change until current change is validated
   - Maintain both state isolation AND calculation accuracy

### **Phase 3: Final Integration & Validation**

1. **Complete S13 Integration**: Ensure final S13 has both perfect state isolation and Excel parity
2. **Full System Testing**: Verify entire 4011RF system works with new S13
3. **Performance Optimization**: Address any remaining calculation stickiness
4. **Documentation**: Update all documentation to reflect final architecture

### **Key Learnings Applied**

- ✅ **State isolation architecture** - we know this works from current S13
- ✅ **Calculation accuracy** - we know this works from OFFLINE/CONTEXT versions  
- ✅ **Progressive methodology** - build incrementally with continuous validation
- ✅ **Known baselines** - start from proven calculation foundations

**Target Completion**: September 14, 2025 - Final S13 with both perfect state isolation AND Excel calculation parity.

