# Section 13 Last Mile Workplan

## Problem Overview

We've identified a specific propagation issue where Section 14 appears to be using a stale value of `h_124` (Free Cooling Limit) when calculating `m_129` (CED Mitigated). The current symptoms:

- Section 13 calculates `h_124` correctly as ~37,322.83
- When Section 14 calculates `m_129`, it uses a stale value of `h_124` (~41,469.81)
- This results in an incorrect `m_129` calculation (~5,415.72 instead of the expected ~10,521.50)

This appears to be a timing/propagation issue rather than a calculation error. Previous attempts to fix this with direct cross-section function calls violated architectural principles and caused unintended consequences.

## Architectural Principles (README.md)

Before proposing solutions, let's review the critical architectural principles from README.md that must be maintained:

1. **StateManager as Single Source of Truth**: All values must be stored and retrieved through StateManager
2. **Cross-Section Communication**: Sections must communicate only through StateManager, not direct module references
3. **Proper State Types**: Values must use the correct state type ('calculated', 'user-modified', etc.)
4. **Listener Pattern for Calculated Fields**: As noted in README.md:
   
   > "CRITICAL NUANCE: Updates Triggered by CALCULATED Fields": `StateManager.setValue(..., 'calculated')` intentionally does not automatically trigger recalculations in dependent fields that were registered using `registerDependency`. This is a safeguard against infinite calculation loops.

5. **Correct Pattern for Calculated Dependencies**:
   ```javascript
   // In the dependent section's module (Section 14)
   window.TEUI.StateManager.addListener('source_calculated_field', function(newValue) {
       // Manually trigger the recalculation of the dependent field
       calculateValues(); // Or more specific handling
   });
   ```

## Potential Issues Identified

After reviewing the code, we've identified several potential issues that could be contributing to the propagation problem:

### 1. Improper StateManager Value Updates

In Section 13's `calculateFreeCooling` function, the way `h_124` is updated may not be correctly storing values in StateManager:

```javascript
setCalculatedValue('h_124', finalFreeCoolingLimit, 'number-2dp-comma');
```

Issues to check:
- Is `setCalculatedValue` properly calling `StateManager.setValue` with 'calculated' state?
- Is the numeric value being converted to a string before storing in StateManager?
- Is the format type affecting how the value is stored?

### 2. Dual Value Storage (StateManager + Local State)

Section 13 stores the free cooling limit in two places:

```javascript
// Update StateManager
setCalculatedValue('h_124', finalFreeCoolingLimit, 'number-2dp-comma');

// Store locally
coolingState.freeCoolingLimit = finalFreeCoolingLimit;
```

This could lead to inconsistencies if some functions use the local state while others use StateManager.

### 3. Missing or Incorrect Listeners in Section 14

Section 14 might not have the proper listener for `h_124` changes:

```javascript
// Is this listener correctly implemented in Section 14?
window.TEUI.StateManager.addListener('h_124', function(newValue) {
    calculateValues(); // Or similar function to recalculate m_129
});
```

### 4. Calculation Order and Dependencies

The order of calculations between sections might not be correct, or dependencies might not be properly registered.

### 5. Value Access Pattern in Section 14

How Section 14 retrieves the `h_124` value could be problematic:

```javascript
// Is this function retrieving the latest value from StateManager?
const h124 = getNumericValue('h_124');
```

## Step-by-Step Fix Strategy

### Phase 1: Diagnostics and Validation (Day 1)

1. **Add Temporary StateManager Debugging**
   
   ```javascript
   // Add at the beginning of your initialization code (after StateManager is loaded)
   if (window.TEUI && window.TEUI.StateManager) {
       // Store original functions
       const originalGetValue = window.TEUI.StateManager.getValue;
       const originalSetValue = window.TEUI.StateManager.setValue;
       
       // Override getValue with debug version
       window.TEUI.StateManager.getValue = function(fieldId) {
           const value = originalGetValue.call(this, fieldId);
           // Only log for our key fields of interest
           if (fieldId === 'h_124' || fieldId === 'd_123' || fieldId === 'd_129' || fieldId === 'm_129') {
               console.log(`[StateManager Debug] getValue('${fieldId}') = ${value}`);
           }
           return value;
       };
       
       // Override setValue with debug version
       window.TEUI.StateManager.setValue = function(fieldId, value, state) {
           // Only log for our key fields of interest
           if (fieldId === 'h_124' || fieldId === 'd_123' || fieldId === 'd_129' || fieldId === 'm_129') {
               console.log(`[StateManager Debug] setValue('${fieldId}', ${value}, '${state}')`);
           }
           return originalSetValue.call(this, fieldId, value, state);
       };
       
       console.log("[StateManager Debug] Debugging instrumentation installed.");
   }
   ```

2. **Add Function Execution Tracing**
   
   ```javascript
   // In Section 13's calculateFreeCooling function
   function calculateFreeCooling() {
       console.log("[S13] calculateFreeCooling START");
       // ... existing code ...
       console.log("[S13] calculateFreeCooling BEFORE setting h_124");
       console.log(`[S13] finalFreeCoolingLimit = ${finalFreeCoolingLimit}`);
       
       setCalculatedValue('h_124', finalFreeCoolingLimit, 'number-2dp-comma');
       
       console.log("[S13] calculateFreeCooling AFTER setting h_124");
       
       // ... rest of function ...
       console.log("[S13] calculateFreeCooling END");
   }
   
   // In Section 14's calculation function
   function calculateValues() {
       console.log("[S14] calculateValues START");
       
       // Log values retrieved for m_129 calculation
       const d129 = window.TEUI.parseNumeric(getFieldValue('d_129'));
       console.log(`[S14] d_129 = ${d129}`);
       
       const h124 = window.TEUI.parseNumeric(getFieldValue('h_124'));
       console.log(`[S14] h_124 = ${h124}`);
       
       const d123 = window.TEUI.parseNumeric(getFieldValue('d_123'));
       console.log(`[S14] d_123 = ${d123}`);
       
       const m129 = d129 - h124 - d123;
       console.log(`[S14] m_129 calculated as ${d129} - ${h124} - ${d123} = ${m129}`);
       
       setCalculatedValue('m_129', m129, 'number-2dp-comma');
       console.log("[S14] calculateValues END");
   }
   ```

3. **Verify Event Listener Registration**
   
   ```javascript
   // At the end of initializeEventHandlers in Section 14
   console.log("[S14] Registered event listeners:");
   if (window.TEUI && window.TEUI.StateManager && window.TEUI.StateManager._listeners) {
       console.log(JSON.stringify(Object.keys(window.TEUI.StateManager._listeners)));
       
       // Specifically check for h_124 listener
       if (window.TEUI.StateManager._listeners['h_124']) {
           console.log("[S14] h_124 listener is registered");
       } else {
           console.log("[S14] WARNING: h_124 listener is NOT registered");
       }
   }
   ```

### Phase 2: Implement Core Fixes (Day 2)

Based on diagnostics from Phase 1, implement these fixes one by one, testing after each change:

1. **Fix 1: Correct Section 14's `h_124` Listener**
   
   ```javascript
   // In Section 14's initializeEventHandlers function
   function initializeEventHandlers() {
       // ... existing code ...
       
       // Ensure proper h_124 listener implementation
       if (window.TEUI && window.TEUI.StateManager) {
           // Remove any existing listener if present (to avoid duplicates)
           window.TEUI.StateManager.removeListener('h_124');
           
           // Add fresh listener with correct implementation
           window.TEUI.StateManager.addListener('h_124', function(newValue) {
               console.log(`[S14] h_124 listener triggered with value: ${newValue}`);
               
               // Force recalculation of m_129
               calculateValues();
           });
           
           console.log("[S14] h_124 listener properly registered");
       }
   }
   ```

2. **Fix 2: Standardize `setCalculatedValue` Implementation**
   
   Check and update the `setCalculatedValue` function in Section 13:
   
   ```javascript
   // Ensure setCalculatedValue follows this pattern in Section 13
   function setCalculatedValue(fieldId, rawValue, formatType = 'number-2dp') {
       // Handle non-numeric or invalid rawValues
       if (rawValue === null || rawValue === undefined || isNaN(Number(rawValue))) {
           // Handle invalid values appropriately
           return;
       }
       
       const numericValue = Number(rawValue);
       
       // 1. Store raw value as string in StateManager for precision
       if (window.TEUI && window.TEUI.StateManager) {
           // CRITICAL: Store as string with 'calculated' state
           window.TEUI.StateManager.setValue(fieldId, numericValue.toString(), 'calculated');
       }
       
       // 2. Format for display only
       if (window.TEUI && window.TEUI.formatNumber) {
           const formattedValue = window.TEUI.formatNumber(numericValue, formatType);
           
           // Update DOM display
           const element = document.querySelector(`[data-field-id="${fieldId}"]`);
           if (element) {
               element.textContent = formattedValue;
               element.classList.toggle('negative-value', numericValue < 0);
           }
       }
   }
   ```

3. **Fix 3: Ensure Proper Dependency Registration**
   
   In Section 14's `registerDependencies` function, verify these are correctly registered:
   
   ```javascript
   // In Section 14
   function registerDependencies() {
       if (!window.TEUI || !window.TEUI.StateManager) return;
       
       const sm = window.TEUI.StateManager;
       
       // Ensure these dependencies are registered
       sm.registerDependency('d_129', 'm_129'); // CED Unmitigated affects CED Mitigated
       sm.registerDependency('h_124', 'm_129'); // Free Cooling affects CED Mitigated
       sm.registerDependency('d_123', 'm_129'); // Ventilation Recovery affects CED Mitigated
       
       console.log("[S14] Dependencies properly registered");
   }
   ```

4. **Fix 4: Update Field Value Retrieval in Section 14**
   
   Make sure Section 14's `getFieldValue` and `getNumericValue` functions are correctly retrieving from StateManager:
   
   ```javascript
   // In Section 14
   function getFieldValue(fieldId) {
       // CORRECT: Only get from StateManager, no DOM fallback
       return window.TEUI?.StateManager?.getValue(fieldId) || "";
   }
   
   function getNumericValue(fieldId) {
       // Use the global parseNumeric if available
       if (typeof window.TEUI?.parseNumeric === 'function') {
           return window.TEUI.parseNumeric(getFieldValue(fieldId)) || 0;
       } else {
           // Fallback parsing if needed
           const value = getFieldValue(fieldId);
           if (typeof value === 'number') return value;
           if (typeof value === 'string') {
               // Handle string parsing with comma removal
               return parseFloat(value.replace(/[$,%]/g, '').trim()) || 0;
           }
           return 0;
       }
   }
   ```

### Phase 3: Advanced Architectural Fixes (Day 3)

These fixes address more complex architectural issues while maintaining compliance with README.md:

1. **Fix 5: Calculation Order Enforcement**
   
   Ensure the `calculateAll` functions in both sections execute in the proper order:
   
   ```javascript
   // In Section 13's calculateAll function
   function calculateAll() {
       console.log("[S13] calculateAll START");
       
       // Perform calculations in correct order
       runIntegratedCoolingCalculations();
       calculateFreeCooling(); // This sets h_124
       calculateCoolingVentilation(); // This sets d_122, d_123
       calculateCoolingSystem(); // This uses m_129
       
       console.log("[S13] calculateAll END");
   }
   
   // In Section 14's calculateAll function
   function calculateAll() {
       console.log("[S14] calculateAll START");
       
       // Read latest values from StateManager
       const d129 = window.TEUI.parseNumeric(getFieldValue('d_129'));
       const h124 = window.TEUI.parseNumeric(getFieldValue('h_124'));
       const d123 = window.TEUI.parseNumeric(getFieldValue('d_123'));
       
       // Calculate m_129 with fresh values
       const m129 = d129 - h124 - d123;
       
       // Update StateManager and DOM
       setCalculatedValue('m_129', m129, 'number-2dp-comma');
       
       // Calculate other values...
       
       console.log("[S14] calculateAll END");
   }
   ```

2. **Fix 6: Consistency Between Local State and StateManager**
   
   In Section 13, ensure consistency between `coolingState` and StateManager:
   
   ```javascript
   // In Section 13's updateCoolingInputs function
   function updateCoolingInputs() {
       // Always read from StateManager first
       const freeCoolingLimitFromState = window.TEUI.parseNumeric(getFieldValue('h_124'));
       
       // If StateManager has a value, update local state to match
       if (freeCoolingLimitFromState > 0) {
           coolingState.freeCoolingLimit = freeCoolingLimitFromState;
           console.log(`[S13] Synced coolingState.freeCoolingLimit from StateManager: ${coolingState.freeCoolingLimit}`);
       }
       
       // Same for other values that might be in both places
       // ...
   }
   ```

3. **Fix 7: Enhanced StateManager Interface**
   
   If needed, create a more robust interface for StateManager operations:
   
   ```javascript
   // In your initialization code
   window.TEUI.safeSetCalculatedValue = function(fieldId, rawValue, formatType) {
       // Skip if nothing to update
       if (rawValue === null || rawValue === undefined || isNaN(Number(rawValue))) return;
       
       const numericValue = Number(rawValue);
       const rawValueString = numericValue.toString();
       
       // 1. First update StateManager
       if (window.TEUI.StateManager) {
           window.TEUI.StateManager.setValue(fieldId, rawValueString, 'calculated');
       }
       
       // 2. Then update display
       if (window.TEUI.formatNumber) {
           const formattedValue = window.TEUI.formatNumber(numericValue, formatType || 'number-2dp-comma');
           const element = document.querySelector(`[data-field-id="${fieldId}"]`);
           if (element) {
               element.textContent = formattedValue;
               element.classList.toggle('negative-value', numericValue < 0);
           }
       }
       
       return rawValueString;
   };
   ```

### Phase 4: Verification and Cleanup (Day 4)

1. **Verify Calculation Results**
   
   ```javascript
   // Add this to a button or initialize after everything else loads
   function verifyCalculations() {
       console.log("======= CALCULATION VERIFICATION =======");
       
       // Check key values
       const d129 = window.TEUI.parseNumeric(window.TEUI.StateManager.getValue('d_129'));
       const h124 = window.TEUI.parseNumeric(window.TEUI.StateManager.getValue('h_124'));
       const d123 = window.TEUI.parseNumeric(window.TEUI.StateManager.getValue('d_123'));
       const m129 = window.TEUI.parseNumeric(window.TEUI.StateManager.getValue('m_129'));
       
       console.log(`d_129 (CED Unmitigated): ${d129}`);
       console.log(`h_124 (Free Cooling Limit): ${h124}`);
       console.log(`d_123 (Outgoing Ventil. Energy): ${d123}`);
       console.log(`m_129 (CED Mitigated): ${m129}`);
       
       // Verify calculation
       const expectedM129 = d129 - h124 - d123;
       console.log(`Expected m_129: ${expectedM129}`);
       console.log(`Actual m_129: ${m129}`);
       console.log(`Match: ${Math.abs(expectedM129 - m129) < 0.01 ? 'YES' : 'NO'}`);
       
       console.log("========================================");
   }
   ```

2. **Remove Debugging Code**
   
   Once calculations are verified, remove all the debugging code added in Phase 1.

3. **Document Any Remaining Issues**
   
   Create a list of any issues that weren't fully resolved for future iterations.

## Expected Outcomes

After implementing these fixes, we expect:

1. Section 13 to correctly calculate and store `h_124` (~37,322.83) in StateManager
2. Section 14's listener to be notified when `h_124` changes
3. Section 14 to use the latest `h_124` value when calculating `m_129`
4. `m_129` to be calculated correctly as ~10,521.50

All of this should happen within the architectural constraints of README.md, using StateManager as the single source of truth and proper listener patterns for cross-section communication.

## Testing Strategy

For each phase, test by:

1. Adding the diagnostic code
2. Making a simple change that affects the cooling calculations (e.g., changing ventilation method, summer boost, or other input values)
3. Observing the flow of values through the system using console logs
4. Verifying the final values match the expected outputs

## Note on Architectural Compliance

This approach strictly adheres to the architectural principles in README.md by:

1. Using StateManager as the single source of truth
2. Implementing proper listener patterns for cross-section communication  
3. Using correct state types and value formats
4. Respecting dependency registration
5. Avoiding direct cross-section function calls

The focus is on ensuring proper data flow and timing within the existing architecture rather than bypassing or modifying it.
