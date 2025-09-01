#  untangling the TEUI 4.011 Architecture

This document serves as a guide to identify and correct architectural anti-patterns that have been inadvertently introduced into the codebase during the dual-state refactoring process. The goal is to systematically align all sections with the core principles outlined in `README.md`, ensuring `StateManager` is the single source of truth and that state isolation is perfectly maintained.

## Anti-Pattern 1: State Contamination via Fallbacks

**Description:** This is a subtle but critical anti-pattern where calculation or display logic in `Reference` mode will use a `Target` value if the corresponding `Reference` value is not found. This directly violates state isolation and leads to incorrect Reference model calculations that are contaminated with Target data.

**How to find it:** Look for functions that get values and have a pattern like `getValue(ref_field) || getValue(target_field)`.

**Example from `4011-Section02.js` (The Anti-Pattern):**

```javascript
// From ModeManager.updateCalculatedDisplayValues
const value =
  this.currentMode === "reference"
    ? window.TEUI.StateManager.getValue(`ref_${fieldId}`) || // Attempts to get reference value
      window.TEUI.StateManager.getValue(fieldId) // ❌ FALLS BACK to target value
    : window.TEUI.StateManager.getValue(fieldId);
```

**Why it's wrong:** The Reference model is supposed to represent a specific, independent scenario (e.g., building code minimums). If it uses values from the Target model, its results are no longer valid and the comparison between the two models becomes meaningless. This can lead to bugs that are very difficult to track down.

**The Correct Pattern:** Logic must be strictly isolated. If a Reference value does not exist, it should use a defined default or show '0', but it must **never** use a Target value.

```javascript
// The corrected pattern with strict mode isolation
let valueToDisplay;
if (this.currentMode === "reference") {
  valueToDisplay = StateManager.getValue(`ref_${fieldId}`);
  // If Reference doesn't exist, use a safe default, NEVER the Target value.
  if (valueToDisplay === null || valueToDisplay === undefined) {
    valueToDisplay = 0; // Or a field definition default
  }
} else {
  valueToDisplay = StateManager.getValue(fieldId) || 0;
}
```

## Anti-Pattern 2: Direct DOM Writes from Calculation Logic

**Description:** Calculation functions (`calculateTargetModel`, `calculateReferenceModel`, or helpers called by them) should be pure and only concern themselves with computing values and updating the state via `StateManager`. This anti-pattern occurs when these functions also take on the responsibility of updating the DOM directly (e.g., setting `.textContent`).

**How to find it:** Look for `.textContent =`, `.innerHTML =`, or `.value =` assignments inside any function that is part of a calculation chain.

**Example from `4011-Section02.js` (The Anti-Pattern):**

The `calculateTargetModel` calls `setFieldValue`, which then directly manipulates the DOM.

```javascript
function calculateTargetModel() {
    // ... calculation logic ...
    setFieldValue("d_16", targetValue, "calculated"); // This helper performs a DOM write
}

// Helper function with the anti-pattern
function setFieldValue(fieldId, value, fieldType = "calculated") {
    // ... state update logic ...

    // ❌ DIRECT DOM WRITE inside a function called by calculation logic
    const element = document.querySelector(`[data-field-id="${fieldId}"]`);
    if (element) {
        element.textContent = formattedValue;
    }
}
```

**Why it's wrong:** This violates the "single source of truth" principle. The DOM and the `StateManager` can easily fall out of sync. It makes the code harder to reason about, as calculations now have side effects on the UI. All DOM updates should be handled by a single, dedicated rendering system that reads from the `StateManager` after all calculations are complete.

**The Correct Pattern:** Calculation functions should only update the state. A separate, dedicated UI update function (like `ModeManager.updateCalculatedDisplayValues`) should be the *only* thing that reads from the state to update the DOM.

```javascript
// CORRECT: Calculation function only updates state
function calculateTargetModel() {
    // ... calculation logic ...
    const targetValue = 123.45;

    // Only update the state, no DOM manipulation here.
    StateManager.setValue("d_16", targetValue.toString(), "calculated");
}


// CORRECT: A separate function reads state to update the UI
// This should be called AFTER all calculations are complete.
function updateCalculatedDisplayValues() {
    const calculatedFields = ["d_16"];
    calculatedFields.forEach(fieldId => {
        const element = document.querySelector(`[data-field-id="${fieldId}"]`);
        if (element) {
            const value = StateManager.getValue(fieldId) || 0;
            element.textContent = formatNumber(value); // Update DOM from state
        }
    });
}
```

## Anti-Pattern 3: Decentralized Event Handling

**Description:** Each section module defines its own `addEventListener` calls for user inputs like text fields, sliders, and dropdowns. While the logic inside these handlers might be correct, this approach leads to significant code duplication across the 15+ sections and makes it difficult to ensure consistent behavior.

**How to find it:** Look for `addEventListener` calls within section modules.

**Example from `4011-Section02.js` (The Anti-Pattern):**

```javascript
// In initializeEventHandlers()
const areaField = document.querySelector('[data-field-id="h_15"]');
if (areaField) {
  // ❌ This event handler is defined locally within Section 02.
  // This pattern would be repeated in every section with editable fields.
  areaField.addEventListener("blur", updateAreaValue);
}
```

**Why it's wrong:** It violates the DRY (Don't Repeat Yourself) principle. A bug fix or an enhancement to input handling (like adding "Escape to Revert" functionality) would need to be implemented in every single section. The `README.md` explicitly calls for a **Global Input Handling System** to solve this.

**The Correct Pattern:** A single, global input handler should be initialized once the application loads. This handler would use event delegation to manage all user inputs across all sections, ensuring consistent behavior and a single place for maintenance.

```javascript
// The correct pattern (conceptual, to be implemented in a core module)
function initializeGlobalInputHandlers() {
  // Use event delegation on a container element
  const mainContainer = document.getElementById("main-container");

  mainContainer.addEventListener("blur", (event) => {
    // Check if the target is an editable field
    const field = event.target;
    if (field.matches('.user-input[contenteditable="true"]')) {
        const fieldId = field.getAttribute("data-field-id");
        // Find the correct section's ModeManager to route the input
        const section = findSectionForField(fieldId);
        if (section && section.ModeManager) {
            // Centralized logic to update state, then trigger calculations
            section.ModeManager.setValue(fieldId, field.textContent, "user-modified");
            // Trigger calculations via a centralized system if needed
        }
    }
  }, true); // Use capture phase to handle events reliably
}
```

## Guiding Principle: The "Gold Standard" Archive

To ensure that our refactoring efforts do not accidentally break the complex, Excel-compliant calculation logic, we will use the `ARCHIVE` directory as the definitive source of truth for all mathematical operations.

**Path to the Gold Standard:** `ARCHIVE/4011GS/OBJECTIVE-4011GS-2025.06.21-SOLSTICE-BASELINE/sections/`

**The Principle:** The files in this directory represent a stable, pre-dual-state version of the application where the calculation logic was vetted and known to be correct. The core math within these files must be preserved exactly. Our task is not to rewrite this logic, but to wrap it correctly within the dual-state architecture.

### Refactoring Workflow Using the Archive

When refactoring a section (e.g., `sections/4011-Section02.js`), follow this process:

1.  **Open the Gold Standard File:** Open the corresponding file from the `ARCHIVE` directory (e.g., `ARCHIVE/.../sections/4011-Section02.js`).
2.  **Verify Calculation Logic:**
    *   The functions inside your `calculateTargetModel` must be functionally identical to, and produce the exact same results as, the calculation functions in the gold standard file.
    *   The functions inside your `calculateReferenceModel` must use an exact copy of that same logic.
3.  **Adapt for Dual-State:** The only difference is where the functions get their inputs.
    *   `calculateTargetModel` logic must be fed values exclusively from `TargetState`.
    *   `calculateReferenceModel` logic must be fed values exclusively from `ReferenceState`.
4.  **Confirm Outputs:** Both functions should report their results back to the `StateManager` (unprefixed for Target, `ref_` prefixed for Reference) and must not touch the DOM.

By adhering to this process, we separate the challenge of architectural refactoring from the risk of introducing calculation errors. We are preserving what works (the math) and fixing what is broken (the state management and UI interaction patterns).
