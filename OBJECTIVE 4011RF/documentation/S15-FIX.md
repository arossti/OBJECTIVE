# Work Plan: Refactoring `4011-Section15.js` for Architectural Compliance

**Objective:** To refactor `4011-Section15-PARTIAL.js` to bring it into full architectural compliance with the successful dual-state pattern established in `4011-Section11.js`. This will resolve the initial rendering bug where Target mode shows zeros and Reference mode shows "N/A" values.

## 1. Problem Analysis

The core issue is a disconnect between the calculation engines and the UI display logic. The `calculateTargetModel` and `calculateReferenceModel` functions correctly compute values and save them to the global `StateManager`. However, they **fail to update the section's internal, local state objects** (`TargetState` and `ReferenceState`).

The UI rendering function, `updateCalculatedDisplayValues`, reads data *only* from these local state objects. Because they are not being populated during the initial calculation, the UI displays default empty values ("0.00" or "N/A").

## 2. The Solution: Mirroring the `Section11.js` Pattern

The fix is to ensure that the calculation engines write their results to the correct local state object *in addition* to the global `StateManager`. This synchronizes the data layer with the presentation layer.

## 3. Step-by-Step Refactoring Guide

### Step 1: Add New State-Setting Helper Functions

First, add two new helper functions. These functions will be responsible for updating both the local state and the global `StateManager`, ensuring data consistency.

**Action:** Add the following two functions inside the main IIFE of the Section 15 module, directly after the `formatNumber` function.

```javascript
  /**
   * Sets a calculated value for the Target model.
   * Updates the local TargetState and the global StateManager.
   * @param {string} fieldId - The ID of the field.
   * @param {number} rawValue - The raw numeric value.
   */
  function setTargetValue(fieldId, rawValue) {
    const valueToStore =
      !isFinite(rawValue) || rawValue === null || rawValue === undefined
        ? "N/A"
        : rawValue.toString();
    TargetState.setValue(fieldId, valueToStore);
    if (window.TEUI?.StateManager) {
      window.TEUI.StateManager.setValue(fieldId, valueToStore, "calculated");
    }
  }

  /**
   * Sets a calculated value for the Reference model.
   * Updates the local ReferenceState and the global StateManager (with ref_ prefix).
   * @param {string} fieldId - The ID of the field.
   * @param {number} rawValue - The raw numeric value.
   */
  function setReferenceValue(fieldId, rawValue) {
    const valueToStore =
      !isFinite(rawValue) || rawValue === null || rawValue === undefined
        ? "N/A"
        : rawValue.toString();
    ReferenceState.setValue(fieldId, valueToStore);
    if (window.TEUI?.StateManager) {
      const refFieldId = `ref_${fieldId}`;
      window.TEUI.StateManager.setValue(refFieldId, valueToStore, "calculated");
    }
  }
```

### Step 2: Refactor the `calculateTargetModel` Engine

Next, update the `calculateValues` function (which is called by `calculateTargetModel`) to use the new `setTargetValue` helper.

**Action:** In the `calculateValues` function, find every instance of `setCalculatedValue(...)` and replace it with `setTargetValue(...)`. The arguments will be the same.

**Example:**

*   **Before:**
    ```javascript
    setCalculatedValue("d_135", teuTargetTotal);
    ```
*   **After:**
    ```javascript
    setTargetValue("d_135", teuTargetTotal);
    ```

Repeat this replacement for all calculated fields within the `calculateValues` function.

### Step 3: Refactor the `calculateReferenceModel` Engine

Now, update the `calculateReferenceModel` function to use the new `setReferenceValue` helper. This is the most critical step for fixing the Reference mode UI.

**Action:** In the `calculateReferenceModel` function, find every instance of `setRefValueIfChanged(...)` and replace it with `setReferenceValue(...)`.

**Important:** The old function took a prefixed field ID (e.g., `"ref_d_135"`). The new function takes the **unprefixed** field ID (e.g., `"d_135"`).

**Example:**

*   **Before:**
    ```javascript
    setRefValueIfChanged("ref_d_135", ref_teuTargetTotal);
    ```
*   **After:**
    ```javascript
    setReferenceValue("d_135", ref_teuTargetTotal);
    ```

Repeat this replacement for all calculated fields within the `calculateReferenceModel` function.

### Step 4: Final Cleanup

With all references updated, you can now safely remove the old, unused helper functions.

**Action:** Delete the entire `setCalculatedValue` function and the entire `setRefValueIfChanged` helper function (which is inside `calculateReferenceModel`).

## 4. Verification

After completing these steps, the initial load of Section 15 should display the correct calculated values in both Target and Reference modes, as the `updateCalculatedDisplayValues` function will now be reading from correctly populated local state objects.
