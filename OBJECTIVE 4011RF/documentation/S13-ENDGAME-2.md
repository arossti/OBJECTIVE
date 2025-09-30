# S13-ENDGAME-2.md: The Final Modular Refactoring Plan

**Version**: 2.0
**Date**: September 28, 2025
**Status**: This document outlines the definitive refactoring of Section 13 into a lean orchestrator, guided by the "Single Engine, Two Data Sources" principle.

---

## 1. Executive Summary

This plan moves beyond iterative fixes to address the root cause of Section 13's complexity and size: monolithic design. We will refactor `4012-Section13.js` from a single, oversized file into a slim **Orchestrator** and a set of small, dedicated, and pure **Calculation Modules**.

This will drastically reduce the line count of the main file, improve maintainability, and align Section 13 with the project's core architectural principles, making it easier for both human and AI developers to manage.

## 2. The Core Principle: One Engine, Two Data Sources

This architecture is the key to achieving both state isolation and maintainability.

-   **The Orchestrator (`4012-Section13.js`):** Its only job is to manage the dual-state UI (`ModeManager`), read the correct state (`TargetState` or `ReferenceState`), build a `context` object containing the necessary inputs, and call the appropriate calculation module. It knows about "Target" and "Reference", but it doesn't do the math.

-   **The Calculation Modules (`4012-Cooling.js`, `4012-Heating.js`, etc.):** These files contain only pure calculation functions. They are "dumb" — they know nothing of "Target" or "Reference". They simply accept a `context` object, perform their calculations based on the values in that object, and return a result.

This ensures calculation logic is written once and tested once, but can be used for both models.

## 3. The Refactoring Workplan

### Phase 1: Verification & Simplification

The goal of this phase is to immediately reduce the line count of `4012-Section13.js` by removing already-migrated code.

1.  **Verify `4012-Cooling.js`:** Before deleting anything, rigorously test the existing `4012-Cooling.js` module. Ensure it correctly calculates all required cooling values when called by `4012-Section13.js`.
2.  **Delete Obsolete Cooling Code:** Once `4012-Cooling.js` is confirmed to be working correctly, delete the large, commented-out cooling functions from `4012-Section13.js`. This provides an immediate and significant reduction in file size.

### Phase 2: Modularize All Calculation Logic

The goal of this phase is to extract all remaining business logic out of `4012-Section13.js`.

1.  **Create `4012-Heating.js`:**
    *   Create a new file for heating calculations.
    *   Move all core heating logic (e.g., `calculateHeatingSystem`, `calculateCOPValues`) from `4012-Section13.js` into this new module.
    *   Refactor these functions to be "pure". They should not read from the `StateManager` or the DOM. Instead, they must accept a `context` object containing all required inputs (e.g., `tedValue`, `hspf`, `systemType`).

2.  **Create `4012-Ventilation.js`:**
    *   Create a new file for ventilation calculations.
    *   Move all core ventilation logic (e.g., `calculateVentilationRates`, `calculateVentilationEnergy`) into this new module.
    *   Refactor these functions into pure, context-based calculators, just like the heating and cooling modules.

### Phase 3: Transform `4012-Section13.js` into a Pure Orchestrator

With the calculation logic removed, we can now simplify the main file.

1.  **Rewrite `calculateTargetModel`:** This function will now be very simple:
    *   It will build a `targetContext` object by reading all necessary values from `TargetState` and the global `StateManager`.
    *   It will call the new, external functions (e.g., `Heating.calculate(...)`, `Cooling.calculate(...)`, `Ventilation.calculate(...)`), passing the `targetContext` to each.
    *   It will take the results and use its `setFieldValue` helper to update the DOM and the `StateManager`.

2.  **Rewrite `calculateReferenceModel`:** This function will do the exact same thing as the Target version, but it will build its `referenceContext` by reading from `ReferenceState` and `ref_` prefixed values in the `StateManager`. It will call the *exact same* calculation functions as the Target model.

3.  **Delete Legacy Code:** Remove the now-obsolete `createIsolatedCoolingContext` function and any other remaining logic related to the old "Pattern 2" approach.

### Phase 4: Final Validation

1.  **Confirm State Isolation:** Rigorously test that changing inputs in Target mode has zero impact on the Reference TEUI, and vice-versa.
2.  **Confirm Calculation Parity:** Validate that the outputs for both the Target and Reference models still match the Excel source files exactly.
3.  **Confirm Final Experience:** Ensure the "cooling bump" is gone and all calculations settle correctly in a single, predictable sequence.

## 4. Success Criteria

The refactor is complete when:

-   `4012-Section13.js` is significantly smaller (target: under 3,000 lines) and acts only as an orchestrator.
-   All complex calculation logic lives in small, separate, single-responsibility modules (`4012-Cooling.js`, `4012-Heating.js`, `4012-Ventilation.js`).
-   The system is 100% compliant with the "Single Engine, Two Data Sources" architecture.
-   All validation checks in Phase 4 pass.
