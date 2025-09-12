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

