# GEMINI-FINDINGS.md: Analysis of State Contamination in Section 04

## 1. Executive Summary

This document analyzes the root cause of the critical state-mixing bug observed in `4011-Section01.js` after modifications to `4011-Section04.js`. The core issue is an architectural conflict between Section 04's unique **"function override" pattern** and the application's standard **`StateManager` listener mechanism**.

When a `ref_` prefixed value that S04 is listening to changes (e.g., `ref_h_12` from S02), the listener in S04 triggers a calculation. However, because this trigger happens outside of S04's Reference Mode context, the calculation incorrectly writes its results to the **Target state**, causing state mixing where `e_10` and `h_10` display identical values.

The proposed solution is a minimal, targeted refactor of S04 to eliminate the brittle "function override" pattern and replace it with the proven **"mode-aware function" pattern** used successfully in S07, S15, and other compliant sections. This will ensure perfect state isolation and protect the critical calculation chain that feeds the S01 dashboard.

---

## 2. The Proven Architecture vs. The Anomaly

You are correct: the architecture to handle this correctly already exists and is working successfully across the application. Section 04 is an anomaly that deviates from these proven patterns.

### ✅ **The Standard, Working Pattern (S07, S15)**

Sections like S07 and S15 use explicit, mode-aware functions to read and write state. This pattern is robust and has no unintended side effects.

**How Section 07 (Water Use) Correctly Writes `ref_` Values:**
The `ModeManager.setValue` function explicitly checks the current mode and applies the `ref_` prefix when in "reference" mode.

```javascript
// OBJECTIVE 4011RF/sections/4011-Section07.js - The Correct Pattern

// ... inside ModeManager.setValue ...
if (this.currentMode === "reference" && window.TEUI?.StateManager) {
  console.log(
    `🔗 [S07] ModeManager.setValue: Storing to global StateManager: ref_${fieldId} = "${value}"`,
  );
  // ✅ EXPLICIT & CORRECT: The ref_ prefix is added before publishing.
  window.TEUI.StateManager.setValue(`ref_${fieldId}`, value, source);
}
```

**How Section 15 (TEUI Summary) Correctly Writes `ref_` Values:**
We implemented the same clear pattern in S15 with the `setReferenceValue` helper function. It is unambiguous.

```javascript
// OBJECTIVE 4011RF/sections/4011-Section15.js - The Correct Pattern

function setReferenceValue(fieldId, rawValue) {
  // ...
  if (window.TEUI?.StateManager) {
    // ✅ EXPLICIT & CORRECT: The ref_ prefix is added before publishing.
    const refFieldId = `ref_${fieldId}`;
    window.TEUI.StateManager.setValue(refFieldId, valueToStore, "calculated");
  }
}
```

### ❌ **The Anomaly (S04)**

Section 04 does **not** follow this pattern. It uses a unique and brittle "function override" trick that no other section uses. This is the source of the bug.

```javascript
// OBJECTIVE 4011RF/sections/4011-Section04.js - The Anomalous Pattern

function calculateReferenceModel() {
    // Temporarily re-wires the GLOBAL setCalculatedValue function
    const originalSetCalculatedValue = setCalculatedValue;
    setCalculatedValue = setReferenceCalculatedValue; // 🚨 THE ANOMALY

    try {
        calculateAll(); // Runs calculations that now use the hijacked function
    } finally {
        // Restores the global function
        setCalculatedValue = originalSetCalculatedValue;
    }
}
```

As detailed in the next section, this pattern fails when calculations are triggered by `StateManager` listeners, leading directly to state contamination.

---

## 3. Root Cause Analysis: The Architectural Conflict

The state contamination occurs at the intersection of S04's anomalous pattern and the standard listener mechanism.

1.  A `ref_` value changes in S02 (e.g., `ref_h_12`).
2.  The `StateManager` listener in S04 fires its callback.
3.  The callback directly calls `calculateAll()`.
4.  Crucially, this entire chain is happening **outside the scope** of S04's `calculateReferenceModel`. The `setCalculatedValue` function has **not** been overridden.
5.  As a result, the calculations run using Reference inputs (correctly), but they call the *default* `setCalculatedValue` function, which writes its results to the **Target state** (e.g., `j_32`, `k_32`).
6.  This pollutes the Target state with Reference values, causing the state mixing observed in S01.

---

## 4. Impact on S01 and Architectural Violations

This bug has a critical downstream impact on Section 01, which is our final dashboard. It's essential to respect its strict architectural role.

### S01's Role: A Pure Consumer Dashboard

-   **Column E is 100% Reference State**: Values in this column, like `e_6`, `e_8`, and `e_10`, are exclusively derived from `ref_` prefixed values from upstream sections.
    -   `e_10` (Reference TEUI) correctly calculates its value as `ref_j_32 / ref_h_15`.
-   **Column H is 100% Target State**: Values in this column, like `h_8` and `h_10`, are exclusively derived from unprefixed values.
    -   `h_10` (Target TEUI) correctly calculates its value as `j_32 / h_15`.

When S04 incorrectly writes Reference calculations to Target state fields (like `j_32`), it directly breaks S01's logic, causing `h_10` to erroneously display the same value as `e_10`.

### Architectural Violations (per `4012-CHEATSHEET.md`)

-   **Anti-Pattern 1: State Contamination**: A Reference-initiated change directly causes writes to the Target state.
-   **Phase 6: Mode-Aware State Reading**: The calculations implicitly rely on context, which fails when a background Reference update occurs while the UI is in Target mode.

---

## 5. Proposed Solution: The "Mode-Aware Function" Pattern

The goal is to refactor S04 to align it with the proven patterns that work everywhere else, thereby protecting the S01 calculation chain.

The most robust, minimal, and architecturally compliant solution is to refactor S04 to use the **"mode-aware function" pattern** successfully implemented in Sections 07 and 15.

This involves a targeted change:

1.  **Eliminate the `function override` pattern** from `calculateReferenceModel`.
2.  Create a shared `runCalculations(isReferenceCalculation)` function.
3.  Modify `calculateTargetModel` to call `runCalculations(false)`.
4.  Modify `calculateReferenceModel` to call `runCalculations(true)`.
5.  Pass the `isReferenceCalculation` flag and the correct setter function (`setCalculatedValue` or `setReferenceCalculatedValue`) down through the `calculateRowXX` functions.

This ensures that every calculation function explicitly knows which state it is operating on, completely independent of the global UI mode. This will fix the background update propagation without introducing state mixing, finally aligning Section 04 with our best practices.
