# Calculation Ordering and Stability Guidelines

This document outlines critical considerations for calculation sequencing and stability within the TEUI Calculator application, particularly to address issues related to race conditions and ensuring dependent calculations use settled values.

## Core Principle: Ensure Precedent Stability

Downstream calculations, especially in summary sections like Section 14 (TEDI Summary) and Section 15 (TEUI Summary), must only execute *after* all their precedent values from other sections (01-13) have been fully calculated and have settled in the `StateManager`.

This is crucial during:
1.  **Initial Page Load:** When `TEUI.Calculator.calculateAll()` is first invoked.
2.  **File Import:** After `TEUI.FileHandler.updateStateFromImportData()` completes and triggers `TEUI.Calculator.calculateAll()`.
3.  **User Interactions:** When changes in one section trigger recalculations that cascade to others.

Failure to ensure precedent stability can lead to summary sections using stale or intermediate values, resulting in incorrect final outputs until a subsequent, potentially unrelated event, triggers a correcting recalculation.

## CTO Advisory on `setTimeout` Usage

Our CTO has advised:

> "All the timeout function calls are problematic. There are a bunch of wait 500ms before performing some action...this will not 'Avoid' race conditions."

**Implications:**
Reliance on `setTimeout` or arbitrary delays to manage calculation order is fragile and an anti-pattern. It does not guarantee that prerequisite calculations will have completed, especially on slower devices or under heavy load. Such practices mask underlying ordering issues and should be eliminated.

## Recommended Approach: Robust Dependency Management and Sequential Execution

1.  **`TEUI.Calculator.calculateAll()` Ordering:**
    *   The primary `TEUI.Calculator.calculateAll()` function must invoke the `calculateAll()` methods of individual section modules in a **strict, logically dependent order**.
    *   Sections that produce foundational values (e.g., Section 03 Climate, Section 12 Geometries, Section 10 Gains, Section 11 Losses, Section 13 Mechanical Loads) must be calculated *before* sections that consume these values (e.g., Section 14 TEDI, Section 15 TEUI).
    *   A clear, documented order of execution for section modules within `TEUI.Calculator.calculateAll()` needs to be established and enforced.

2.  **`StateManager` Listeners and Event-Driven Updates:**
    *   Leverage `StateManager.addListener()` for cross-section dependencies as outlined in `README.md`.
    *   Ensure that a listener in a dependent section only proceeds with its calculation *after confirming* that all its specific input values from `StateManager` are indeed the final, intended values from the source sections.
    *   Avoid overly broad `calculateAll()` calls from every minor listener if a more targeted recalculation within the section (or a specific dependent section) is sufficient.

3.  **File Import Recalculation (`TEUI.FileHandler.js`):**
    *   The single call to `this.calculator.calculateAll()` at the end of `updateStateFromImportData` is correct in principle.
    *   The internal logic of `TEUI.Calculator.calculateAll()` must be robust enough to handle the state changes from the import and calculate all sections in the correct dependency order without race conditions.

4.  **Eliminate `setTimeout` for Calculation Sequencing:**
    *   Actively identify and remove any `setTimeout` calls used as a mechanism to "wait" for other calculations to finish.
    *   Replace these with proper dependency declarations, event-driven triggers via `StateManager`, or a strictly ordered calculation flow within a central orchestrator like `TEUI.Calculator.calculateAll()`.

By adhering to these principles, we can build a more predictable and reliable calculation engine, ensuring that values are accurate and reflect the true state of dependencies at all times. 

## Critical: Excel Import Data Mapping and DOM Field ID Alignment (Discovered 2024-08-XX)

**Issue:** Console warnings during file import like "Skipping import for unknown fieldId: f_103" or "Skipping import for field d_103: Invalid value ... for type dropdown" indicate a misalignment between the Excel data mapping (`4011-ExcelMapper.js`) and the actual DOM field IDs or field types defined in section modules.

**Example:** An import attempting to map to `f_103` (expecting a simple input) when the correct field is `g_103` (a dropdown) will fail or lead to incorrect data handling.

**Impact:** This can cause:
*   Incomplete data import.
*   Default values being used instead of imported values.
*   Downstream calculation errors due to missing or incorrect precedent data.
*   Apparent discrepancies between Excel and application results that are due to mapping errors, not calculation logic errors.

**Action Required (High Priority):**
1.  **Thoroughly review `4011-ExcelMapper.js`** against the field definitions in all section modules (e.g., `sections/4011-SectionXX.js`) and the `3037DOM.csv` specification.
2.  **Correct all identified misalignments** in `4011-ExcelMapper.js` to ensure it targets the correct DOM `data-field-id` for each piece of Excel data AND respects the field's type (input, dropdown, etc.).
3.  Pay special attention to fields that have been moved or had their type changed during development (e.g., an input becoming a dropdown).
4.  Test imports rigorously with multiple TEUIv3036/3037/3038 Excel files after corrections to ensure all relevant data is imported correctly and warnings are eliminated or understood.

Addressing these mapping issues is crucial for data integrity and reliable calculation outcomes. It should be prioritized before or alongside further `setTimeout` refactoring, as unstable data inputs will make ordering fixes difficult to verify. 