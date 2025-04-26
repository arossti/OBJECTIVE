# OBJECTIVE
Objective TEUI 4.011 Codebase

NOTICE: This codebase is licensed under the [Creative Commons Attribution-NoDerivatives 4.0 International License (CC BY-ND 4.0)](https://creativecommons.org/licenses/by-nd/4.0/).(see footnote, LICENSE file in root)

# TEUI 4.011 Calculator - Modular Architecture Overview

> **Note for Devs and AI Agents**: This document serves as a comprehensive reference for understanding the TEUI 4.011 Calculator architecture. It contains the critical design patterns, implementation details, and technical decisions needed to assist with continued development of the application.

### Common Pitfalls for AI Assistance

When working with this codebase, previous AI assistants have encountered several recurring challenges:

1. **Prioritize Root Causes Over Quick Fixes**: 
   - ❌ **Avoid**: Adding patches, hacks, or bandaids when code is failing
   - ✅ **Prefer**: Taking time to understand the underlying architecture and addressing root causes
   - Quick fixes accumulate technical debt, making the codebase harder to maintain over time
   - Understanding root causes often reveals simpler solutions that maintain architectural integrity

2. **D3 Visualization References**:
   - ❌ **Avoid**: Creating new references to existing objects in D3 visualizations
   - ✅ **Prefer**: Preserving distinct Object/Numeric references throughout D3 operations
   - Failure to maintain reference consistency has routinely broken visualizations
   - D3 selections and data binding depend on stable object references

3. **StateManager & Calculation Integration**:
   - ⚠️ **CRITICAL**: StateManager is the single source of truth for all calculations
   - ❌ **AVOID**: 
     - Direct DOM manipulation in event handlers or calculation functions
     - Creating custom calculation methods like `recalculateField()` or `updateValue()` that bypass StateManager
     - Checking for calculation existence with non-existent methods like `getCalculation()`
   - ✅ **REQUIRED PATTERN FOR DROPDOWN EVENTS**:
     1. Register the calculation function with StateManager during initialization:
        ```javascript
        // Register calculation once during initialization
        window.TEUI.StateManager.registerCalculation("target_field_id", calculateFunction);
        
        // Register dependencies
        window.TEUI.StateManager.registerDependency("dropdown_field_id", "target_field_id");
        ```
     2. Handle dropdown changes by updating StateManager and then calling a centralized calculation function:
        ```javascript
        function handleDropdownChange(e) {
            const fieldId = e.target.getAttribute('data-field-id');
            const value = e.target.value;
            
            // 1. Update value in StateManager
            window.TEUI.StateManager.setValue(fieldId, value, 'user-modified');
            
            // 2. Call centralized calculation function
            calculateAll(); // Or a more specific calculation trigger if appropriate
        }
        ```
     3. Implement a direct calculation approach in your calculation function:
        ```javascript
        function calculateAll() {
            // Get necessary values using getFieldValue (which checks StateManager)
            const inputValue = getFieldValue("dropdown_field_id"); 
            
            // Calculate values directly
            const calculatedValue = calculateTargetFieldBasedOnInput(inputValue); 
            
            // Update both StateManager and DOM using setCalculatedValue
            setCalculatedValue("target_field_id", calculatedValue);
        }
        ```
   - This pattern ensures:
     - Proper StateManager integration
     - Reliable calculation updates when dropdown values change
     - Consistent state management across the application
     - No reliance on non-existent methods like `getCalculation()` or `recalculateField()`

   - **⚠️ CRITICAL NUANCE: Updates Triggered by CALCULATED Fields**:
     - **The Problem**: `StateManager.setValue(..., 'calculated')` *intentionally does not* automatically trigger recalculations in dependent fields that were registered using `registerDependency`. This is a safeguard against infinite calculation loops.
     - **Scenario Example**: Section 5 calculates `i_39`. Section 2's `d_16` depends on `i_39` *only when* `d_15` is 'TGS4'. Using only `registerDependency('i_39', 'd_16')` is insufficient because the update to `i_39` (with state `calculated`) won't trigger `d_16`'s recalculation.
     - ❌ **WRONG APPROACHES**:
       - Directly manipulating the DOM of `d_16` from Section 5.
       - Modifying the core `StateManager.setValue` logic.
       - Adding complex, custom triggers in `SectionIntegrator`.
     - ✅ **CORRECT ARCHITECTURAL PATTERN: Use StateManager Listeners**:
       - When a calculated field (`source_calculated_field`) needs to trigger an update in another field (`dependent_field`) across sections, *especially* if the update is conditional:
       - **In the dependent section's module** (e.g., `Section02.js`):
         1. Add a listener in `initializeEventHandlers`:
            ```javascript
            // Inside initializeEventHandlers() in the DEPENDENT section's module
            if (window.TEUI && window.TEUI.StateManager) {
                window.TEUI.StateManager.addListener('source_calculated_field', function(newValue) {
                    // Check any necessary conditions within the dependent section
                    const conditionField = getFieldValue("condition_dropdown_id"); 
                    if (conditionField === "specific_value") {
                        // Manually trigger the recalculation of the dependent field
                        const targetValue = calculateDependentFieldFunction(); 
                        // Update the dependent field using the standard helper
                        setCalculatedValue("dependent_field_id", targetValue);
                    }
                });
            }
            ```
       - **Example (i_39 -> d_16)**: In `Section02.js`, add a listener for `i_39`. Inside the listener, check if `getFieldValue('d_15')` is 'TGS4'. If true, call `calculateEmbodiedCarbonTarget()` and `setCalculatedValue('d_16', result)`.
       - **Why this works**: It uses the intended `StateManager` event system (`addListener`) for cross-section communication without altering core behavior or resorting to hacks. It keeps the logic for updating `d_16` within Section 2, where it belongs.

4. **DOM Simplicity**:
   - ❌ **Avoid**: Over-engineering or overthinking DOM operations
   - ✅ **Prefer**: Working with the straightforward DOM naming conventions
   - Our DOM structure intentionally mirrors Excel's cell structure for clarity
   - The application uses a simple, consistent naming convention:
     - `d_19` = Value in cell D19
     - `dd_d_19` = Dropdown for cell D19
     - `cf_d_19` = Calculated field for cell D19
     - `dv_d_19` = Derived value from cell D19

5. **Number Formatting Consistency**:
   - ❌ **Avoid**: Inconsistent formatting of numerical values across sections
   - ✅ **Prefer**: Using the standardized `formatNumber` function in each section module
   - All numerical values displayed to users should have:
     - Thousands separators (commas)
     - Exactly 2 decimal places (e.g., "2,057.00" not "2,057"), even for integers or whole numbers
     - **Exceptions**: 
       - U-values must display with 3 decimal places (e.g., "0.123")
       - Cost values may require 4 decimal places in some contexts
   - Raw values should be stored in StateManager for calculations, but formatted values should be displayed in the DOM
   - Consistent number formatting is critical for:
     - Readability of large numbers
     - UI stability when values change (prevents layout shifts when switching between values with/without decimals)
     - Future D3 visualizations and charts.js integrations
     - Ensuring data consistency between calculations and visual representations
   - Each section module should implement `formatNumber` and use it within `setCalculatedValue`
   - **Store Raw Values in StateManager**: Store *raw*, unformatted numeric values in `StateManager` whenever possible (typically converted to strings for storage, e.g., `numberValue.toString()`). Perform formatting (using `formatNumber` or similar) only when updating the DOM (`element.textContent`). Storing formatted strings (e.g., "1,234.56") in `StateManager` can prevent listeners from triggering if subsequent calculations result in the identical formatted string, even if the underlying raw number changed slightly.

6. **Calculation Precision and Significant Digits**:
   - ❌ **Avoid**: Truncating precision during calculation chains or using hardcoded adjustments
   - ✅ **Prefer**: Maintaining maximum floating-point precision through all calculation steps
   - General calculations must maintain at least 4 decimal places internally
   - Thermal calculations (involving U-values, RSI, etc.) require 6+ decimal places of precision
   - **Why Precision Matters - A Note from Our Scientific Advisor**:
     > "With this application, we are measuring a horse turd with calipers." — Dr. Ted Kesik
     
     This colorful metaphor acknowledges that while our models have inherent limitations in perfectly representing reality (the "horse turd"), we must still maintain mathematical precision (the "calipers") throughout our calculations. Imprecise math can introduce up to 5% additional variance in results—error that is completely avoidable. Our mathematical implementation should never add error or uncertainty to an already imperfect modeling process.
   - **Critical considerations**:
     - Even when user inputs have only 2 decimal places, intermediate calculation results often expand to many more places
     - Division and multiplication operations can significantly affect precision (e.g., 1/3 * 3 ≠ 1 if truncated between steps)
     - Match Excel's calculation precision exactly to ensure identical results
     - Only apply formatting (toFixed, etc.) at the final display step, never during calculations
     - Store raw values at full precision in StateManager
   - Example implementation:
     ```javascript
     // CORRECT APPROACH
     function calculateValue() {
       // Get values at full precision
       const uValue = parseFloat(getFieldValue("g_101")); // e.g., 0.123
       const area = parseFloat(getFieldValue("d_85"));    // e.g., 25.00
       
       // Perform calculations with full floating-point precision
       const heatLoss = uValue * area * temperatureDifference;
       
       // Store raw result in StateManager (full precision)
       StateManager.setValue("cf_g_120", heatLoss);
       
       // Format ONLY for display
       displayElement.textContent = formatNumber(heatLoss); // e.g., "345.82"
     }
     ```

7. **Field Naming Conventions**:
   - Field IDs are defined in `3037DOM.csv` and calculation relationships in `FORMULAE-3037.csv`
   - Special prefixes indicate field types:
     - `dd_` = Dropdown field
     - `cf_` = Calculated field (formula result)
     - `dv_` = Derived value (intermediate calculation)
     - `sl_` = Slider control
   - For example, a dropdown in cell D19 is referenced as `dd_d_19` throughout the codebase

8. **Calculation Sequencing and Dependency Management**:
   - ❌ **Avoid**: Creating circular dependencies or breaking existing calculation chains
   - ✅ **Prefer**: Following the established dependency order in SectionIntegrator.js
   - **Load Order Matters**:
     - Script loading sequence is defined in index.html (Current version 4.011)
     - Core modules (StateManager, FieldManager) must initialize before section modules
     - Section modules register with the system during initialization
   - **Section Module Structure**:
     - Follow the template in 4011-SectionXX.js for all new section implementations
     - Each section must implement standard methods: getFields(), getLayout(), etc.
     - Sections communicate through StateManager, not through direct module references
   - **Calculation Dependencies**:
     - Dependencies must be explicitly registered in StateManager
     - Always register dependency sources before dependent values
     - When implementing calculations, follow the pattern:
       ```javascript
       // 1. Get values from StateManager
       const value1 = parseFloat(TEUI.StateManager.getValue('d_10'));
       // 2. Perform calculation
       const result = value1 * 2;
       // 3. Store result in StateManager
       TEUI.StateManager.setValue('cf_d_12', result, TEUI.StateManager.VALUE_STATES.CALCULATED);
       ```
     - SectionIntegrator manages cross-section dependencies and calculation order
     - The event system (`teui-section-rendered`, etc.) coordinates section calculation timing

9. **Robust Input Parsing**:
   - ✅ **ALWAYS** use the section's `parseNumeric` helper function (or equivalent) when parsing input values within calculation functions, especially values retrieved from the DOM via helpers like `getFieldValue`. 
   - ❌ **Avoid** using `parseFloat()` directly on values that might be formatted strings (e.g., "1,234.56"). `parseFloat` stops at the first non-numeric character, leading to incorrect results (e.g., `parseFloat("1,234.56")` becomes `1`). Using `parseNumeric` ensures commas are handled correctly.

Understanding these patterns will help avoid common pitfalls and produce more maintainable code that aligns with the existing architecture.

### REQUIRED: StateManager Implementation Pattern for Cross-Section Functions

One critical architectural pattern is how we handle functions that need to operate across multiple sections, such as temperature setpoints based on occupancy type, or how a calculated value in one section (e.g., Section 5's `i_39`) affects a field in another section (e.g., Section 2's `d_16`). This approach enables consistent behavior while maintaining the single responsibility principle and respecting `StateManager`'s role.

1. **✅ PROPER ARCHITECTURE PATTERN**:
   - Create centralized utility functions in the global namespace (e.g., `window.TEUI.getTemperaturesForOccupancy`) if logic is shared.
   - Implement calculation functions *within the section that owns the calculated field*.
   - Use `StateManager.registerDependency` to declare simple dependencies (where the source is typically a user input).
   - **CRITICAL**: Use `StateManager.addListener` within the *dependent* section to react to changes in *calculated* source fields from other sections (as `setValue(..., 'calculated')` doesn't automatically trigger dependents via `registerDependency`). See point 3 below.
   - Calculation functions *must* read input values from `StateManager` (e.g., via `getFieldValue`).
   - Respect `StateManager` as the single source of truth.

2. **🔄 DEPENDENCY & LISTENER REGISTRATION**:
   - Dependencies should be registered (e.g., during initialization):
     ```javascript
     // Register dependencies where 'd_12' (user input) affects 'h_23' (calculated)
     window.TEUI.StateManager.registerDependency("d_12", "h_23");
     window.TEUI.StateManager.registerDependency("d_12", "h_24");
     
     // If 'd_16' calculation depends on 'd_15' (dropdown) and 'i_41' (calculated, Section 5)
     window.TEUI.StateManager.registerDependency("d_15", "d_16"); // Direct dependency
     // NO direct dependency registration for i_41 needed if listener is used.
     ```
   - Listeners are added in the dependent section's initialization for calculated sources:
     ```javascript
     // In Section 2's initializeEventHandlers:
     // Listen for changes in i_39 (calculated in Section 5) to update d_16
     window.TEUI.StateManager.addListener('i_39', function(newValue) {
         const carbonStandard = getFieldValue("d_15");
         if (carbonStandard === "TGS4") {
             // Trigger the calculation owned by Section 2
             const targetValue = calculateEmbodiedCarbonTarget(); // Assumes this fn exists in Section 2
             setCalculatedValue("d_16", targetValue); // Use helper to update state+DOM
         }
     });
     ```

3. **📋 CALCULATION FUNCTION PATTERN (within the owning section)**:
   ```javascript
   // Example: In Section 3, calculating h_23 based on d_12
   function calculateHeatingSetpoint() {
       // Get input value(s) from StateManager
       const occupancyType = getFieldValue("d_12"); // Helper reads from StateManager
       
       // Perform calculation (potentially using global utility)
       const temps = window.TEUI.getTemperaturesForOccupancy(occupancyType);
       const heatingSetpoint = temps.heating;
       
       // Return the calculated value. The section's update logic
       // (e.g., within calculateAll or a listener callback) will call
       // setCalculatedValue("h_23", heatingSetpoint);
       return heatingSetpoint; 
   }

   // Example: In Section 2, calculating d_16 based on d_15 and potentially i_41/i_39
   function calculateEmbodiedCarbonTarget() {
        const carbonStandard = getFieldValue("d_15") || "Self Reported";
        // ... logic to read i_41 or use value from listener (for i_39)...
        let targetValue;
        // ... calculation logic ...
        return targetValue; // Return raw calculated value
   }
   ```
   **Triggering**: The calculation function (`calculateHeatingSetpoint`, `calculateEmbodiedCarbonTarget`, etc.) is typically called:
    *   During the section's initial `calculateAll` or `onSectionRendered`.
    *   When a direct dependency (registered via `registerDependency`, like `d_12` or `d_15`) changes *if* the `StateManager`'s internal mechanism or a calculation engine triggers it based on the dependency.
    *   Explicitly within a `StateManager.addListener` callback when a *calculated* source field changes (like `i_39` triggering the update for `d_16`).

4. **🌐 GLOBAL UTILITY FUNCTIONS**:
   When logic needs to be shared between sections (like occupancy-based temperature settings), 
   implement it as a global utility in the TEUI namespace:
   
   ```javascript
   // Global utility function for consistent behavior across sections
   window.TEUI.getTemperaturesForOccupancy = function(occupancyType) {
       // Formatting and normalization logic
       // ...
       
       // Return consistent data structure
       return {
           heating: 22, // or 18 depending on type
           cooling: 24,
           isCritical: isCare
       };
   };
   ```

5. **⚠️ COMMON ANTI-PATTERNS TO AVOID**:
   - ❌ Direct DOM manipulation inside calculation functions (use helpers like `setCalculatedValue`).
   - ❌ Setting calculated values with direct DOM updates rather than via StateManager helpers.
   - ❌ Inlining complex condition checks in multiple places instead of using shared utilities.
   - ❌ Checking user-displayed text instead of StateManager values.
   - ❌ Implementing different logic for the same calculation in different sections.
   - ❌ **Attempting to use `StateManager.registerCalculation` - this function is not part of the standard pattern and may not exist or work as expected. Rely on dependency registration and listeners.**
   - ❌ Directly calling calculation functions of *other* sections.
   - ❌ **Relying on locally-scoped helper functions within `StateManager` listener callbacks.** Listener callbacks may execute outside the original module's scope. Prefer direct access (`window.TEUI.StateManager.getValue()`) or make genuinely shared helpers globally accessible (e.g., `window.TEUI.formatNumber`). **Furthermore, ensure listener callbacks are defined inline (e.g., `addListener('key', function() { ... })`) if they need access to other functions within the module's IIFE scope, allowing the callback to capture the necessary scope via closure.**

This architecture ensures that changes propagate correctly through the system via `StateManager`, maintaining consistency and adhering to section ownership principles.

## Project Status & Implementation Summary

The TEUI 4.011 Calculator has been successfully transformed into a modular, maintainable web application that closely follows the structure of the original Excel-based energy modeling tool. The application features:

- **Modularized Architecture**: Core functionality divided into 15+ code modules
- **Section-Based Organization**: Each section implements its own layout, data structures, and calculations
- **State Management System**: Central registry handling multiple value states (Default, User-Modified, Saved, Imported)
- **Field Management**: Consolidated system for defining, rendering, and updating UI elements
- **DOM-Based Field Identification**: Consistent ID system mapping directly to Excel cell references
- **Component Bridge**: Integration system for connecting sections and calculations

## 1. Core Architectural Components

### Modular Structure
The application's functionality is divided into discrete modules:

```
TEUI 4011/
├── 4011-Index.html                # Main entry point with section structure
├── 4011-styles.css                # Global styling
├── 4011-init.js                   # Initialization and UI controls
├── 4011-FieldManager.js           # Field definition and rendering system
├── 4011-StateManager.js           # State persistence and calculation management
├── 4011-SectionIntegrator.js      # Section coordination and linking
├── 4011-Calculator.js             # Core calculation engine
├── 4011-ComponentBridge.js        # Cross-section communication
├── 4011-Cooling.js                # Specialized cooling load calculations
├── 4011-ExcelLocationHandler.js   # Excel mapping for DOM positions
├── 4011-FileHandler.js            # Import/export functionality
├── 4011-ExcelMapper.js            # Excel format compatibility
├── sections/                      # Individual section modules
│   ├── 4011-Section01.js          # Key Values
│   ├── 4011-Section02.js          # Building Information
│   ├── 4011-Section03.js          # Climate Calculations
│   └── ...                        # Additional sections
└── data/                          # Reference data files
```

### State Management System

The `StateManager` provides a central repository for all calculator values with features for:

- **Multiple Value States**: Tracks whether values are default, user-modified (Saved/Exported), imported, or calculated
- **Dependency Tracking**: Maintains relationships between interdependent fields
- **Change Notification**: Event system for propagating value changes
- **Persistence**: Save/load functionality for user sessions
- **Import/Export**: Data transfer with external systems

### Field Management System

The `FieldManager` coordinates section-specific field definitions and rendering:

- **Field Registry**: Consolidates field definitions from all sections
- **Layout Generation**: Creates DOM elements based on field definitions
- **Dropdown Integration**: Manages dropdown options and dependencies
- **Event Handling**: Coordinates section-specific event handlers

## 2. Section-Based Implementation

Each section is implemented as a standalone module with consistent structure:

```javascript
// Example structure of a section module
const sectionRows = {
    // Unit subheader row (always first)
    "header": {
        id: "SECTXX-ID",
        label: "Units Header",
        cells: { ... }
    },
    
    // Content rows organized by Excel row number
    "27": {
        id: "T.3.1",
        label: "Total Electricity Use",
        cells: { ... }
    },
    // Additional rows...
};

// Helper methods for integration
function getFields() { ... }
function getDropdownOptions() { ... }
function getLayout() { ... }
function initializeEventHandlers() { ... }
function onSectionRendered() { ... }

// Calculation methods specific to this section
function calculateDerivedValues() { ... }

// Event listeners
document.addEventListener('teui-section-rendered', function(event) { ... });
```

### Section Integration

Sections communicate through the `StateManager` and trigger recalculations through:

1. **Value Change Events**: When input values change
2. **Section Rendering Events**: When sections are initially rendered
3. **Explicit Calculation Requests**: When triggered by user actions

## 2.1 Section Implementation Status

The following table provides the current implementation status of all calculator sections:

| Section | Name | File | Status | Notes |
|---------|------|------|--------|-------|
| 01 | Key Values | 4011-Section01.js | ✅ Complete | Custom HTML rendering, summary values |
| 02 | Building Information | 4011-Section02.js | ✅ Complete | Project details, area inputs |
| 03 | Climate Calculations | 4011-Section03.js | ✅ Complete | Weather data integration |
| 04 | Actual vs. Target Energy | 4011-Section04.js | ✅ Complete | Energy comparison calculations |
| 05 | CO2e Emissions | 4011-Section05.js | ✅ Complete | Emission calculations |
| 06 | Renewable Energy | 4011-Section06.js | ✅ Complete | On-site energy generation |
| 07 | Water Use | 4011-Section07.js | ✅ Complete | Water consumption metrics |
| 08 | Indoor Air Quality | 4011-Section08.js | ✅ Complete | Ventilation and air quality |
| 09 | Occupant Internal Gains | 4011-Section09.js | ✅ Complete | Internal heat load calculations |
| 10 | Envelope Radiant Gains | 4011-Section10.js | ✅ Complete | Solar and envelope heat gains |
| 11 | Envelope Transmission Losses | 4011-Section11.js | ✅ Complete | Heat loss through building envelope |
| 12 | Volume Surface Metrics | 4011-Section12.js | ✅ Complete | Building geometry metrics |
| 13 | Mechanical Loads | 4011-Section13.js | ✅ Complete | HVAC systems and loads |
| 14 | TEDI Summary | 4011-Section14.js | ✅ Complete | Thermal Energy Demand Intensity summary |
| 15 | TEUI Summary | 4011-Section15.js | ✅ Complete | Total Energy Use Intensity summary |
| 16 | Sankey Diagram | (Pending) | 🔄 Pending | Energy flow visualization |
| 17 | Dependency Diagram | (Pending) | 🔄 Pending | Calculation dependencies visualization |
| 18 | Notes | (Partial) | 🔄 Partial | User notes and documentation |

All core calculator sections (01-15) have been implemented with the declarative approach, replacing the previous imperative implementation. Each section follows the standard pattern with field definitions, layouts, and calculation methods. Dev team must verify compliance with DOM standards and correct mapping of all cells with dependencies and calculations. 

The visualization sections (16-17) are currently pending implementation, with planned features for interactive energy flow diagrams and calculation dependency visualization - or possibly a unified graphics panel where stacked bar-graph energy-balance diagrams and cooling balance diagrams are integrated with the sankey (as they have been in the standalone sankey app).

## 3. Calculation Implementation

Calculations follow these key principles:

1. **DOM-Based Field References**: Calculations reference fields using Excel-like IDs (`d_27` = cell D27)
2. **Dependency Chains**: Calculations are organized in dependency order - to be mapped in dependency graph later
3. **Incremental Updates**: Only affected calculations are performed when inputs change
4. **Formula Conversion**: Excel formulas are converted to JavaScript using consistent patterns

### Calculation Flow Example

```javascript
// Example TEUI calculation (Total Energy Use Intensity)
function calculateTEUI(sourceField) {
    // Get required input values
    const area = parseFloat(getValue('h_15')); // Conditioned area
    const energy = parseFloat(getValue('j_32')); // Total energy

    // Perform calculation
    let teui = 0;
    if (area > 0) {
        teui = energy / area;
    }

    // Update result fields
    setValue('h_10', teui.toFixed(1), VALUE_STATES.CALCULATED);
}
```

### Calculation Optimization Strategies

To prevent excessive recalculations and optimize performance, the system implements several strategies:

1. **Debounced Global Updates**: When multiple values change in quick succession (e.g., during section initialization or file import), global updates are debounced to prevent cascading recalculations:
   ```javascript
   // Debounced global update function
   const debouncedGlobalUpdate = debounce(function() {
       updateAllCalculations();
   }, 250);
   
   // When a section value changes
   function onSectionValueChanged(fieldId, value) {
       // Update local section values immediately
       updateSectionCalculations(fieldId);
       
       // Schedule global update with debounce
       debouncedGlobalUpdate();
   }
   ```

2. **Calculation Batching**: Section updates are batched to complete before triggering cross-section dependencies:
   - When a section is rendered, all internal calculations complete first
   - Only when the section is fully initialized are cross-section dependencies notified
   - This prevents intermediate inconsistent states during sequential updates

3. **Update Prioritization**: Calculations are prioritized based on visibility and importance:
   - Visible section calculations execute immediately
   - Updates to collapsed sections are deferred until they become visible
   - Key Values (Section 01) always updates promptly for consistent dashboard metrics

4. **Dependency-Based Throttling**: Changes to fields with many dependents use throttling to prevent UI freezing:
   ```javascript
   // Check if this field has many dependents
   if (getDependentCount(fieldId) > 10) {
       // Use throttled update for high-impact fields
       throttledUpdate(fieldId);
   } else {
       // Immediate update for simpler dependencies
       immediateUpdate(fieldId);
   }
   ```

5. **Section Isolation**: Each section maintains internal calculation consistency even if global propagation is delayed:
   - Local section calculations happen immediately for responsive UI
   - Cross-section effects are coordinated through the StateManager with appropriate timing
   - This creates an optimal balance between responsiveness and calculation correctness

6. **Materiality Thresholds**: Key summary values only update when changes exceed significance thresholds:
   ```javascript
   // Implementation of materiality-based updates
   function updateKeyValues(newValue, oldValue, fieldId) {
       // For TEUI updates, check if change is significant
       if (fieldId === 'h_10' || fieldId === 'k_10') {
           const delta = Math.abs(parseFloat(newValue) - parseFloat(oldValue));
           
           // Only update UI if change is ≥ 1.0 unit
           if (delta >= 1.0) {
               updateKeyValueDisplay(fieldId, newValue);
               logSignificantChange(fieldId, oldValue, newValue);
           } else {
               // Queue minor change, will be applied when section session completes
               queueMinorChange(fieldId, newValue);
           }
       }
   }
   
   // When section update session completes
   function onSectionSessionComplete() {
       // Apply all accumulated minor changes
       applyQueuedChanges();
       
       // Force final update of key values
       updateAllKeyValues();
   }
   ```

   This materiality threshold approach:
   - Prevents UI flicker from insignificant decimal-level changes
   - Avoids distracting users with minor fluctuations during input sessions
   - Ensures key metrics like TEUI only update when meaningful changes occur (≥1 unit in kWh/yr of TEUI)
   - Accumulates minor changes until a logical break point (section session completion, defined as move to fields in next section or tab into another section)
   - Still guarantees final accuracy when the user completes their input session
   
   **Important**: Materiality thresholds are only applied to cross-section updates and Key Values summary metrics, not to calculations within the active section:
   ```javascript
   function handleValueChange(fieldId, newValue, sectionId) {
       // Get the currently active section
       const activeSection = getCurrentActiveSection();
       
       // For changes in the active section, always update immediately
       if (sectionId === activeSection) {
           // Update all calculations within this section immediately
           // regardless of the significance of the change
           updateSectionCalculations(sectionId, fieldId, newValue);
       }
       
       // For cross-section effects, apply materiality thresholds
       updateCrossSectionValuesWithThresholds(fieldId, newValue);
   }
   ```
   
   This approach ensures users get immediate, precise feedback on all changes within the section they're working on, while still preventing unnecessary updates to summary values from minor changes.

These optimization techniques significantly improve performance while maintaining calculation integrity, especially when handling large datasets or complex interdependencies between sections.

## 4. Cross-Section Integration

Several specialized integration points exist:

### Climate Data Integration

Section 03 (Climate Calculations) provides core climate data to other sections through:
- Loading weather data from external sources
- Calculating derived climate values (degree days, design temperatures)
- Updating the `StateManager` with results for use by other sections

### Cooling Integration

The cooling calculations bridge between Sections 03 and 13:
- Climate data affects cooling loads and capacity
- Free cooling limits are calculated based on weather data
- Results feed into Mechanical Loads calculations

## 5. UI Implementation

The UI follows these key principles:

1. **Excel-Like Layout**: Matches the original Excel reference sheets
2. **Direct Cell Mapping**: Each DOM element maps to specific Excel cells
3. **Interactive Elements**: Dropdowns, sliders, and input fields for user interaction
4. **Visual Feedback**: Color coding for different value types (user input, calculated, etc.)
5. **Section Organization**: Collapsible sections with consistent header/subheader structure

### Key UI Elements

- **Section Headers**: Black background with white text
- **Unit Subheaders**: Grey subheaders showing units and column descriptions
- **User Input Fields**: Blue text indicating user-editable values
- **Calculated Fields**: Black text showing derived values
- **Tabbed Navigation**: Switch between layout modes (vertical/horizontal)

## 6. Future Integration Plans

### Sankey Diagram Integration (Section 16)

The planned Sankey diagram will:
- Visualize energy flows between building systems
- Update dynamically based on calculator values
- Provide interactive elements for exploring relationships
- Connect to the StateManager for real-time updates
- Implement using D3.js visualization library

### Dependency Diagram (Section 17)

The dependency visualization will:
- Show relationships between fields across sections
- Highlight calculation paths and dependencies
- Aid in understanding the model's structure
- Provide interactive filtering of dependency chains
- Visualize the impact of changing specific inputs
- Visual summary of key formulas used (including novel ones unique to OBJECTIVE ie. Twb from RH%13h00 LST & Tdb)

Both visualization sections are currently in the planning phase and will be implemented after verification of the core calculation sections is complete.

## 7. Verification and Testing Process

A comprehensive verification process ensures accuracy:

1. **Cell-by-Cell Verification**: Matching DOM structure to Excel reference
2. **Calculation Parity**: Testing calculations against Excel results
3. **Case Study Validation**: Testing with 20 reference buildings
4. **Edge Case Testing**: Validating behavior with extreme inputs
5. **Cross-Browser Compatibility**: Testing across modern browsers

## 8. Known Limitations and Future Work

1. **Mobile Responsiveness**: Additional work needed for small screens - sticky header needs to either collapse/minify or roll with other sections if iOS or Android detected
2. **Performance Optimization**: Further optimization for large datasets
3. **Advanced Visualizations**: Implementation of Sankey and dependency diagrams
4. **Field Verification**: Continued verification of field alignments and calculations
5. **Improved whitespace optimization through flex columns, etc.
6. **SIMPLE or n00b MODE, where all redundant organizational descriptive text is hidden from the UI and only relevant user inputs and tooltips are rendered per each section
7. **SMS-based file save/open and transfer system. 🧮 Rough Estimate:

If each field has max value 999999, we need:

~20 bits per field
50 × 20 = 1000 bits
Base91 packs ~6.5 bits per character
1000 bits / 6.5 ≈ 154 characters
🎯 Fits in an SMS!

It will be unreadable (like a blob of gibberish auto-pasted to Notes section), but the app can:

Encode the data
Show it as a message
Let the user copy/send it to themselves
Decode it later from SMS by pasting it back in

8. **Number Display Formatting**: 
   - **TODO:** Implement consistent number display formatting across all sections. Ensure that:
       - Integer inputs/calculations are displayed with two decimal places (e.g., `24` becomes `24.00`).
       - Zero values are displayed as `0.00`.
       - Emptying a field (e.g., via Cut/Delete/Backspace) results in `0.00` being displayed and stored (or handle appropriately based on field requirements). Refactor `formatNumber` helpers and input field `blur` event handlers as needed.

## 9. Technical Compatibility Considerations

The TEUI 4.011 Calculator has been deliberately designed with specific technical choices to maximize compatibility, accessibility, and usability across diverse environments:

### No-Dependencies Architecture

The application is built with a "no external dependencies" philosophy:

1. **Vanilla JavaScript**: Uses standard JavaScript without requiring modern frameworks like React, Vue, or Angular
2. **No ES Modules**: Avoids ES module syntax (`import`/`export`) to ensure compatibility with older browsers (and older devs ;)
3. **No Bundling Required**: No need for webpack, Rollup, or other build tools to deploy the application
4. **Script Tag Loading**: All code is loaded via traditional `<script>` tags in a controlled sequence

### Offline-First Approach

The application is designed to function fully in offline and (optionally thru inclusion of libraries, bootstrap, chart.js, xlsx.js) air-gapped environments:

1. **Local File Access**: Uses FileReader API for loading files from the local system
2. **No CDN Dependencies**: All required resources are packaged with the application
3. **Local Storage**: User data can be saved to the browser's localStorage or exported to files
4. **Zero External API Calls**: No reliance on external web services or APIs

### Global Accessibility

Technical choices were made to ensure the broadest possible accessibility:

1. **Cross-Browser Compatibility**: Tested and supported on major browsers (Chrome, Safari)
2. **Low-Bandwidth Friendly**: Minimal asset sizes and no large libraries
3. **Low-Resource Requirements**: Functions well on older hardware with limited resources - or poor/rural/copper internet
4. **Degradation Grace**: Provides fallbacks when advanced features aren't available (even when styles unloaded)

### Developer Accessibility

The codebase is structured to be accessible to a diverse range of developers:

1. **Clear Code Organization**: Straightforward directory structure and naming conventions
2. **Self-Documenting Patterns**: Consistent patterns that are easy to understand and extend
3. **Minimal Learning Curve**: Does not require knowledge of specific frameworks or build systems
4. **Academic & Volunteer Friendly**: Designed to be approachable for non-professional developers

### Implementation Examples

```javascript
// Example of file loading without external dependencies
function loadFile(file) {
    return new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.onload = (e) => resolve(e.target.result);
        reader.onerror = (e) => reject(e);
        reader.readAsText(file);
    });
}

// Traditional script loading with controlled sequence
function loadScripts(scripts) {
    return scripts.reduce((promise, script) => {
        return promise.then(() => {
            return new Promise((resolve) => {
                const scriptEl = document.createElement('script');
                scriptEl.src = script;
                scriptEl.onload = resolve;
                document.head.appendChild(scriptEl);
            });
        });
    }, Promise.resolve());
}
```

These technical choices ensure the TEUI 4.011 Calculator can be used by energy modelers in various working environments, including those with limited connectivity, strict security requirements, or technology constraints. The application remains accessible to a broad community of developers, academics, practitioners, and volunteers who can contribute to its continued development and application in building energy modeling.

## 10. Documentation & Privacy Approach

### Planned Documentation Features

The TEUI 4.011 Calculator has several documentation features planned for implementation:

1. **Comprehensive Tooltips System**:
   - Every user-input field will have contextual tooltips
   - Tooltips will explain default values, acceptable ranges, and impact on calculations
   - Implementation planned as a progressive enhancement to the existing UI

2. **Reference Blogs and Help Content**:
   - Detailed explanations of energy modeling concepts
   - Methodology documentation for key calculations
   - Best practices for different building types
   - Tutorial content for new users

3. **Field References**:
   - Cross-references to relevant standards and regulations
   - Unit conversion explanations where applicable
   - Interactive guidance for complex inputs

These documentation features will be implemented as an overlay to the existing UI, maintaining the application's performance and compatibility while enhancing usability.

### Zero-Server Storage Privacy Model

A fundamental design principle of the TEUI 4.011 Calculator is complete privacy through zero server-side data storage:

1. **Client-Side Only Operation**:
   - All calculation and data processing occurs entirely on the user's device
   - No user data is ever transmitted to or stored on remote servers
   - "Like a ball bouncing off a wall" - data interacts with the application but never persists on the server

2. **Local Data Management**:
   - Project data can be saved locally to the user's device
   - Import/export functionality using standard file formats
   - Browser's localStorage used only for temporary session persistence

3. **No Account Requirements**:
   - No user accounts, logins, or identity tracking
   - No usage analytics collection
   - No remote logging of calculation results

This zero-storage approach ensures maximum privacy and data security for users working with potentially sensitive building design information, while still providing full functionality through local file operations.

### Technical Confirmation of Data Isolation

After reviewing the application architecture, we can definitively confirm:

1. **Zero Data Transmission**:
   - **No** data is ever transmitted to any cloud service or webserver
   - **No** remote storage, even temporarily, of any user calculations
   - **No** API calls that include user project data

2. **Excel File Operations**:
   - Loading Excel files is performed using JavaScript's FileReader API, which operates entirely on the client side
   - Importing Excel variant data into the app occurs exclusively in the user's browser memory
   - Saving/exporting data to files happens locally on the user's device without any server intermediation
   - All file parsing and generation is handled by client-side JavaScript with no server involvement

3. **Technical Implementation**:
   - The application uses pure frontend JavaScript for all operations
   - Web-hosted components (HTML, CSS, JavaScript) are delivered to the browser once and then operate independently
   - Network activity ceases after initial page load (except for explicitly user-requested resources like documentation)
   - No background processes transmit data outside the local browser context

4. **Validation Method**:
   - This isolation can be verified by using browser developer tools to monitor network traffic
   - After the initial application load, no further network requests should occur during normal calculation operations
   - This can be independently confirmed by running the application with network connectivity disabled

The application's JavaScript code runs entirely within the user's browser, making it functionally equivalent to a desktop application in terms of data privacy, with the added benefit of cross-platform compatibility.

## 11. Versioning, Open Source & Business Model

### Versioning Strategy

The TEUI Calculator follows a clear versioning approach to manage the transition from Excel to web:

1. **Version Naming Convention**:
   - **TEUI 3.x**: Excel-based versions (3.037 is the final maintained Excel version)
   - **TEUI 4.x**: Web-based versions (4.011 is the launch edition)
   - **TEUI 5.x**: Reserved for future major enhancements

2. **Excel to Web Transition Plan**:
   - 2-year transition period until 2027
   - Web version maintains backward compatibility with Excel files
   - Users can import existing Excel models during transition
   - Excel codebase will be officially retired in 2027

3. **Version Display**:
   - Current version number prominently displayed in the application header
   - Version history maintained in documentation

### Open Source Development

The TEUI 4.011 Calculator is developed as an open source project:

1. **Source Code Management**:
   - Complete codebase hosted on Git repository
   - Open for public review and community contributions
   - Issue tracking and feature requests managed through Git

2. **Development Transparency**:
   - Design decisions documented in repository
   - Roadmap publicly available
   - Community input welcomed for feature prioritization

3. **License Model**:
   - See LICENSE (This codebase is licensed under the [Creative Commons Attribution-NoDerivatives 4.0 International License (CC BY-ND 4.0)](https://creativecommons.org/licenses/by-nd/4.0/).

### Verification and Validation

To ensure calculation accuracy and reliability:

1. **Excel Parity**:
   - 100% calculation parity with Excel version targeted
   - All formulas directly converted without methodology changes
   - Each section verified against Excel reference implementation

2. **Case Study Validation**:
   - Testing against 20+ real-world building case studies
   - Verification across different building types and climate zones
   - Edge case testing with extreme inputs

3. **Continuous Verification**:
   - Automated testing for core calculations
   - Regression testing for compatibility with saved files and against more granular climate data (we use static annual but LR model maps monthly by common % values for Ontario climate)
   - Community-reported verification results tracked and addressed

### Environmental Impact & Purpose

The TEUI Calculator supports sustainable building design:

1. **Early Design Integration**:
   - Makes carbon, energy, and cost intensity of design decisions obvious from earliest design stages
   - Usable by professionals without specialized energy modeling expertise
   - Facilitates integration between architects and engineers

2. **Tangible Outcomes**:
   - Reduces operational energy costs and carbon emissions
   - Lowers capital costs through early-stage design team integration
   - Simplifies compliance with energy codes and standards

3. **Educational Value**:
   - Helps designers understand energy and carbon implications
   - Creates common language between disciplines
   - Supports building science education

### Business Model & Integrations

As a project of OpenBuilding.ca (a Canadian nonprofit), the business model balances open access with sustainability:

1. **Core Calculator**:
   - Free and open source
   - No usage restrictions for the basic application (no derivs)
   - Community-supported development

2. **API Strategy**:
   - BIM software integrations encouraged
   - API access is a planned revenue stream
   - Developer documentation for integrations

3. **Premium Features**:
   - Economics engine planned as premium/monetized feature
   - Extended functionalities may be offered as paid services
   - Enterprise support available for commercial applications

4. **Nonprofit Mission**:
   - Revenue supports continued development and maintenance
   - Aligns with OpenBuilding.ca's mission to advance sustainable construction
   - Provides free tools while maintaining financial sustainability

## 12. Acknowledgments & Professional Responsibility

### Funding & Support

The TEUI 4.011 Calculator has been developed with generous support:

1. **Ontario Association of Architects (OAA)**:
   - Primary funding support for development
   - Collaboration on professional requirements
   - Support for industry adoption in Ontario

2. **Future Expansion Plans**:
   - National stage rollout planned for late 2025
   - Engagement with provincial/territorial architectural associations
   - Expansion of climate data and regional compliance verification

### Regulatory & Standards Compliance

The calculator is designed to work with multiple regulatory frameworks:

1. **Code Compliance Verification**:
   - Provincial and national building energy codes
   - Municipal green building standards
   - Energy step code requirements

2. **Green Building Certification**:
   - Integration with major third-party green standards
   - Performance verification for certification pathways
   - Documentation support for submission requirements

### Professional Usage Disclaimer

Important considerations for professional users:

1. **Duty of Care Reminder**:
   - This tool is a design aid, not a replacement for professional judgment
   - Users must exercise their professional duty of care
   - Results should be reviewed and validated by qualified professionals

2. **Performance Claims Limitations**:
   - Users should NEVER make unsupported claims of "predicted performance"
   - The tool defines a reference case and relative performance improvements
   - Absolute performance predictions require additional post-occupamcy validation (utility bills, BAS, Commissioning Reports)

3. **Closing the Performance Gap**:
   - The tool sets TARGET values, it does not predict ACTUAL performance (although our case studies show how to align these)
   - True validation requires collection and analysis of utility bills
   - Post-occupancy verification is essential to close the performance gap
   - This circular validation process improves future modeling accuracy, so that user-definitions can rely more on precedent than gut feel, and variables become constants

4. **Documentation Requirements**:
   - Professional submissions should include methodology explanations (the reason the printout format = REPORT = the entire set of app settings)
   - Assumptions must be clearly documented
   - Sensitivity analysis recommended for critical parameters

The TEUI Calculator represents a significant advancement in making energy modeling accessible, but it remains a tool whose results must be interpreted and applied with professional care and judgment.

## Conclusion

The TEUI 4.011 Calculator represents a significant evolution from its Excel origins into a modular, maintainable web application. The architecture balances fidelity to the original Excel model with modern web development practices, creating a foundation for future enhancements and extensions.

The modular architecture enables easier maintenance, extension, and validation while preserving the core calculation methodology that makes TEUI a valuable tool for building energy modeling. 

## Domain Setup

Git first. 

## License

This codebase is licensed under the [Creative Commons Attribution-NoDerivatives 4.0 International License (CC BY-ND 4.0)](https://creativecommons.org/licenses/by-nd/4.0/).

Please contact [andy@openbuilding.ca] for inquiries about partnerships, custom uses, or derivative licenses.

All rights retained by the Canadian Nponprofit OpenBuilding, Inc., with support from the Ontario Association of Architects.

# TODOs and Known Issues

### UI/UX Improvements Needed

1. **Numeric Input Field Behavior**:
   - Current Issue: Browser's native handling of `<input type="number">` elements allows empty states, which can be confusing for users
   - Potential Solutions to Explore:
     - Consider using regular text inputs with numeric validation
     - Evaluate numeric input libraries/components that handle edge cases
     - Implement state-level validation and formatting
   - To be addressed as part of the 4012 Visual Refactor

2. **CSS Styling Conflicts**:
   - Current Issue: Competing styles between table cells, number inputs, Bootstrap defaults, and custom styles
   - Areas of Conflict:
     - Input field borders and padding
     - Table cell spacing and alignment
     - Bootstrap form control overrides
   - To be revisited during implementation of `4012-Visual-Refactor-Workplan.md`
   - Consider moving from table-based layout to CSS Grid or Flexbox for better control

3. **Mobile/Tablet Optimization**:
   - Current Issue: Poor usability on mobile devices and tablets
   - Specific Problems:
     - Sticky header takes up too much screen space
     - Difficult to view and scroll through sections on smaller screens
     - Table layout not optimized for narrow viewports
   - Potential Solutions:
     - Implement collapsible/minimizable header for mobile
     - Create responsive layout for different screen sizes
     - Consider alternative navigation patterns for mobile users
     - Optimize touch interactions for tablet users
   - To be addressed as part of the 4012 Visual Refactor

These issues will be addressed comprehensively in the upcoming 4012 release, which will focus on visual refinements and modern layout techniques.

