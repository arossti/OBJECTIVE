# IT-DEPENDS Pattern Implementation: Section 04 as a Model

This document outlines the refactored approach to Section 04 as a model for IT-DEPENDS implementation in the TEUI Calculator. This approach eliminates the problematic Traffic Cop pattern while preserving dual-engine architecture and proper state isolation.

## Core Principles

1. **StateManager as Single Source of Truth**: All values flow through StateManager, never directly manipulate the DOM
2. **Dependency-Driven Calculations**: Calculations are triggered by dependencies, not by events
3. **State Isolation**: Reference and Application state remain completely isolated
4. **Recursion Protection**: Global protection against infinite loops
5. **Clean Architecture**: No cross-section listeners or direct module calls

## Implementation Components

### 1. Calculation Registration

Every calculated field should be registered with StateManager using `registerCalculation`:

```javascript
sm.registerCalculation(
  "f_27",
  function () {
    const d27 = getAppNumericValue("d_27");
    const d43 = getAppNumericValue("d_43");
    const i43 = getAppNumericValue("i_43");
    return d27 - d43 - i43;
  },
  "Actual Net Electricity (kWh/yr)",
);
```

These registrations should include:

- The field ID to be calculated
- A pure function that returns the calculated value
- A description of the calculation

### 2. Dependency Registration

Dependencies must be explicitly registered using `registerDependency`:

```javascript
// Row 27: Electricity
sm.registerDependency("d_27", "f_27");
sm.registerDependency("d_43", "f_27");
sm.registerDependency("i_43", "f_27");
sm.registerDependency("f_27", "g_27");
sm.registerDependency("l_27", "g_27");
```

This tells StateManager that when `d_27` changes, `f_27` should be recalculated, and when `f_27` changes, `g_27` should be recalculated.

### 3. Cross-Section Dependencies

For cross-section dependencies, use `setupCrossSectionDependencies` to register them:

```javascript
function setupCrossSectionDependencies() {
  if (!window.TEUI?.StateManager) return;

  const sm = window.TEUI.StateManager;

  // Target electricity dependencies (h_27 from S15 d_136)
  sm.registerDependency("d_136", "h_27");

  // Emissions factor dependencies (l_27)
  sm.registerDependency("d_19", "l_27"); // Province
  sm.registerDependency("h_12", "l_27"); // Year
}
```

### 4. Dual-Engine Architecture

Section 04 maintains a clear dual-engine architecture with:

1. **Separate Calculation Functions**:

   ```javascript
   function calculateReferenceModel() {
     /* Reference calculations */
   }
   function calculateApplicationModel() {
     /* Application calculations */
   }
   ```

2. **State-Isolated Helper Functions**:

   ```javascript
   function getAppNumericValue(fieldId, defaultValue = 0) {
     const value =
       window.TEUI?.StateManager?.getApplicationValue?.(fieldId) ||
       window.TEUI?.StateManager?.getValue?.(fieldId);
     return parseFloat(value) || defaultValue;
   }

   function getRefNumericValue(fieldId, defaultValue = 0) {
     // Try multiple methods to get reference value, in order of preference
     if (window.TEUI?.StateManager?.getReferenceValue) {
       const refValue = window.TEUI.StateManager.getReferenceValue(fieldId);
       if (refValue !== null && refValue !== undefined) {
         return parseFloat(refValue) || defaultValue;
       }
     }

     // Try ref_ prefixed value in normal state
     const prefixedFieldId = `ref_${fieldId}`;
     const prefixedValue =
       window.TEUI?.StateManager?.getValue?.(prefixedFieldId);
     return parseFloat(prefixedValue) || defaultValue;
   }
   ```

3. **Combined Execution in `calculateAll`**:

   ```javascript
   function calculateAll() {
     if (window.TEUI.sect04.calculationInProgress) return;

     window.TEUI.sect04.calculationInProgress = true;

     try {
       calculateReferenceModel(); // Calculates Reference values
       calculateApplicationModel(); // Calculates Application values
     } finally {
       window.TEUI.sect04.calculationInProgress = false;
     }
   }
   ```

### 5. Recursion Protection

Section 04 uses a global protection flag to prevent infinite calculation loops:

```javascript
function calculateAll() {
  // Prevent recursion
  if (window.TEUI.sect04.calculationInProgress) return;

  // Set recursion protection flag
  window.TEUI.sect04.calculationInProgress = true;

  try {
    // Calculations here
  } finally {
    // Clear recursion protection flag even if an error occurs
    window.TEUI.sect04.calculationInProgress = false;
  }
}
```

This ensures that even if an error occurs during calculation, the protection flag is cleared.

## Improved Event Handling

Editable field handling is streamlined with clean functions:

```javascript
function handleFieldBlur(field) {
  if (!field) return;

  const fieldId = field.getAttribute("data-field-id");
  if (!fieldId) return;

  // Get the new value and clean it (remove commas)
  const newValue = field.textContent.trim().replace(/,/g, "");

  // Only update if value has changed
  if (field.dataset.originalValue !== field.textContent.trim()) {
    // Update StateManager with the new value
    if (window.TEUI?.StateManager) {
      window.TEUI.StateManager.setValue(fieldId, newValue, "user-modified");
    }

    // Format the displayed value
    const numericValue = window.TEUI?.parseNumeric?.(newValue, 0);
    if (!isNaN(numericValue)) {
      field.textContent =
        window.TEUI?.formatNumber?.(numericValue, "number-2dp-comma") ||
        numericValue.toFixed(2);
    }
  }
}
```

## Testing Capability

Section 04 includes a test function to verify correct calculations:

```javascript
function testITDependsCalculations() {
  // Set test values
  const testData = {
    d_27: "100000", // Electricity
    d_28: "1000", // Gas
    // ...
  };

  // Set values and verify results
  Object.entries(testData).forEach(([fieldId, value]) => {
    window.TEUI.StateManager.setValue(fieldId, value, "test");
  });

  // Wait for StateManager to process values
  setTimeout(() => {
    // Verify calculations
    const f27 = window.TEUI.parseNumeric(
      window.TEUI.StateManager.getValue("f_27"),
      0,
    );
    console.log(
      `[S04 Test] f_27 (Actual Net Electricity): ${f27.toFixed(2)} kWh/yr`,
    );
    const expected_f27 = 100000 - 10000 - 5000; // Electricity - Onsite - Offsite
    console.log(`[S04 Test] Expected f_27: ${expected_f27.toFixed(2)} kWh/yr`);

    // More verification...
  }, 100);
}
```

## Key Benefits Over Traffic Cop Pattern

1. **No Race Conditions**: Dependencies are clearly defined and calculations happen in the correct order
2. **No Direct Cross-Section Calls**: Sections never directly call each other's methods
3. **Clean Event Flow**: User inputs update StateManager, which triggers calculations via dependencies
4. **Debuggability**: Clean calculation functions with clear inputs and outputs
5. **Testability**: Pure calculation functions can be easily tested

## Implementation Steps for Other Sections

When migrating other sections to this pattern:

1. **Register Calculations**: Define all calculated fields with `sm.registerCalculation`
2. **Register Dependencies**: Define all dependencies with `sm.registerDependency`
3. **Implement Dual-Engine Functions**: Create separate `calculateReferenceModel` and `calculateApplicationModel`
4. **Add Recursion Protection**: Use a global flag in `calculateAll`
5. **Implement Helper Functions**: Create state-isolated helpers like `getAppNumericValue` and `getRefNumericValue`
6. **Add Testing Function**: Implement a `testITDependsCalculations` function

## Conclusion

The IT-DEPENDS pattern implemented in Section 04 provides a clean, maintainable approach to calculations that eliminates race conditions and ensures proper state isolation. This pattern should be followed for all future section refactoring to achieve a consistent, reliable codebase.
