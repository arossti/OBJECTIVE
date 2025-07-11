# OBJECTIVE

Objective TEUI 4.012 Framework - Next Generation Architecture

> **🚀 ACTIVE DEVELOPMENT BRANCH: 4012-FRAMEWORK**
>
> This branch represents a complete architectural revolution of the TEUI calculator, implementing:
>
> - **Tuple-based dual calculations** - Single logic serving both Target and Reference models
> - **Pure functional architecture** - No side effects, 100% testable
> - **Modern UI with CSS Grid/Flexbox** - Replacing rigid table structures
> - **50% code reduction target** - Through radical simplification
> - **Sub-100ms recalculation** - Through efficient dependency graphs

---

## 🏗️ v4.012 FRAMEWORK ARCHITECTURE

### Core Principles

1. **Single Logic, Dual Output**

   ```javascript
   // Every calculation returns both Target and Reference values
   function calculateHeatLoss(inputs) {
     const calc = (area, rsi, hdd) => (area * hdd * 24) / (rsi * 1000);

     return {
       target: calc(inputs.geometry.area, inputs.target.rsi, inputs.target.hdd),
       reference: calc(
         inputs.geometry.area,
         inputs.reference.rsi,
         inputs.reference.hdd,
       ),
     };
   }
   ```

2. **Explicit State Structure**

   ```javascript
   state = {
     inputs: {
       geometry: {}, // Shared between models
       target: {}, // User design values
       reference: {}, // Code minimum values
     },
     outputs: {
       target: {}, // Calculated target results
       reference: {}, // Calculated reference results
     },
   };
   ```

3. **File Naming Convention**
   - All new framework files prefixed with `4012-`
   - Legacy files remain unprefixed for clear distinction
   - Example: `4012-S03.js` (new) vs `4011-Section03.js` (legacy)

### Development Guidelines

- **Least Verbose**: Every line of code must justify its existence
- **Robust**: Pure functions with explicit error handling
- **Strict**: No implicit dependencies or hidden state
- **Performant**: Target sub-100ms full recalculation

### Migration Status

- ✅ **Proof of Concept**: `4012-S11.js` demonstrates envelope calculations
- ✅ **State Manager**: `4012-SM.js` shows simplified state management
- 🔄 **Section 03**: First full section for migration (climate calculations)
- 📋 **Section 04**: Marked "in transition" in IT-DEPENDS branch

---

## 🏢 **OBC MATRIX PROJECT** (PARALLEL DEVELOPMENT)

### Current Status: Phase 5 Complete ✅

A specialized adaptation of the TEUI 4011 codebase to create the **2024 Ontario Building Code Data Matrix** - an interactive web form that replicates the Ontario Association of Architects' standardized Building Code Excel template.

#### **Completed Phases**:
- ✅ **Phase 1**: Infrastructure setup and TEUI-specific removals
- ✅ **Phase 2**: OBC Matrix branding and disclaimer modal  
- ✅ **Phase 3**: CSV structure analysis and field mapping
- ✅ **Phase 4**: Section 01 implementation with practice info, dropdowns, stamp upload
- ✅ **Phase 5**: 15-column Excel structure compliance and Notes column toggle

#### **Phase 5 Achievements**:
- **Perfect Excel Structure Match**: Extended table from 14 to 15 columns (A-O)
- **Column Alignment Fixed**: Labels in Column B, User inputs in Column C, Notes in Column O
- **Notes Toggle System**: Column-level show/hide functionality (Excel column O equivalent)
- **Floating Stamp Upload**: Professional seal upload positioned outside table structure
- **Column B Width Control**: 320px restriction for optimal spacing
- **OAA Compliance**: Exact structural correspondence with official Excel template

#### **Technical Architecture**:
- **Excel Cell Mapping**: DOM elements use Excel coordinates (e.g., `id="c_3"` for cell C3)
- **Section-Based Modules**: `4011-Section01.js` handles building information forms
- **Field Management**: Centralized state through FieldManager system
- **CSS Grid Layout**: Clean responsive design matching Excel visual structure

#### **Next Development Phases**:
- **Phase 6**: Additional OBC sections (3.03, 3.04, etc.)
- **Phase 7**: Form validation and data export
- **Phase 8**: Import/export compatibility with Excel template

---

## 📜 PROJECT HISTORY

### The Journey to v4.012

The TEUI calculator has undergone significant architectural evolution:

1. **v4.011 Original** - Simple, functional calculator mirroring Excel workflows

   - Direct calculations from user inputs
   - Clear state management
   - Currently deployed on GitHub Pages (stable demo)

2. **Traffic Cop Pattern** - Added orchestration to prevent calculation loops

   - Introduced explicit coordination between sections
   - Added state flags and recursion protection
   - Increased complexity but improved stability

3. **Dual-Engine Architecture** - Separated Reference and Target models

   - Split calculations into Application and Reference hemispheres
   - Required complex state isolation mechanisms
   - Achieved compliance calculations but at significant complexity cost

4. **IT-DEPENDS Branch** - Attempted dependency-ordered calculations

   - Promised performance improvements through smart dependency tracking
   - Eliminated race conditions and calculation storms
   - Ultimately created an unmaintainable web of interdependencies
   - **Abandoned June 2024** due to overwhelming complexity

5. **v4.012 Framework** - Complete architectural reset
   - Tuple-based calculations: Single logic returning both Target and Reference values
   - Pure functional approach with no side effects
   - Dramatic simplification while preserving dual-model capabilities
   - Foundation for future hourly analysis (8760x current calculations)

### Why the Reset?

As captured in `OBJECTIVE 4011/documentation/SOUL-SEARCH.md`, the v4.011 codebase had accumulated multiple overlapping architectural patterns, making it increasingly difficult to maintain and extend. The IT-DEPENDS branch represented the breaking point where additional complexity yielded diminishing returns.

The v4.012 framework represents a return to first principles:

- **Simplicity**: Every calculation is a pure function
- **Performance**: Sub-100ms full recalculation target
- **Maintainability**: 50% code reduction goal
- **Scalability**: Architecture ready for hourly analysis

### Legacy Support

The v4.011 codebase remains as:

- A working reference implementation
- Source of business logic and calculations
- Stable fallback during v4.012 development

For the GitHub Pages demo, consider using a commit from the **SSv2 branch** before the IT-DEPENDS complexity was introduced - this represents the most stable, production-ready version of v4.011.

---

## 📖 LEGACY DOCUMENTATION (v4.011)

The following documentation describes the current production system (v4.011) which will remain operational during the v4.012 migration.

---

## 📖 **TEUI TECH BIBLE - ARCHITECTURAL FOUNDATION**

_Essential guidance for all future development and AI assistance_

### **🎯 WHAT WE'RE BUILDING: The Simple Truth**

This is a **static energy modeller** equivalent to our Excel worksheets that runs two parallel building models:

- **🟢 REPORT Model**: User's design values (equipment efficiency, envelope performance, etc.)
- **🔵 REFERENCE Model**: Code minimum values (from building standard selected at `d_13`)

**Same geometry, different performance values. That's it.**

#### **Core Requirements**

1. **Dual-Engine Calculations**: Both models run simultaneously without interference
2. **State Isolation**: Reference values never contaminate Application values (and vice versa)
3. **Single Source of Truth**: StateManager holds all values, DOM displays them
4. **Code Compliance**: Reference model uses ReferenceValues.js based on `d_13` selection

---

### **🏛️ PROVEN ARCHITECTURE: "Traffic Cop" + Dual-Engine**

#### **StateManager as Single Source of Truth**

```javascript
// ✅ CORRECT: All values go through StateManager
function setCalculatedValue(fieldId, value) {
  window.TEUI.StateManager.setValue(fieldId, value.toString(), "calculated");
  // DOM updates happen via StateManager listeners - NOT direct manipulation
}

// ❌ WRONG: Direct DOM manipulation breaks state truth
function setCalculatedValue(fieldId, value) {
  element.textContent = value; // ARCHITECTURAL VIOLATION
}
```

#### **State Hemisphere Separation**

```javascript
// 🔵 REFERENCE HEMISPHERE: Pure code minimum values
function calculateReferenceModel() {
  const hspf = getRefStateValue("f_113"); // Always 7.1 (code minimum)
  const uValue = getRefStateValue("g_85"); // Always from ReferenceValues.js
  // Calculations using ONLY Reference values
}

// 🟢 APPLICATION HEMISPHERE: Pure user design values
function calculateApplicationModel() {
  const hspf = getAppStateValue("f_113"); // User's equipment (could be 12.5)
  const uValue = getAppStateValue("g_85"); // User's envelope design
  // Calculations using ONLY Application values
}
```

---

### **🚨 ANTI-PATTERNS THAT FAILED (AVOID AT ALL COSTS)**

#### **❌ Direct DOM Manipulation**

**What Broke**: State inconsistency, lost single source of truth, debugging nightmares
**Lesson**: ALL calculated values must go through StateManager ONLY

#### **❌ Cross-State Contamination**

**What Broke**: Reference model showed Application values, defeating dual-engine purpose
**Lesson**: Reference and Application states must NEVER mix

#### **❌ Multiple Calculation Triggers**

**What Broke**: Competing triggers, calculation storms, recursion loops
**Lesson**: Single Traffic Cop coordination pattern ONLY

---

### **🔧 IT-DEPENDS MIGRATION ARCHITECTURE**

We're migrating from Traffic Cop pattern to **HYBRID IT-DEPENDS** (dependency-ordered calculations for cross-section integration) while preserving section-internal calculation efficiency. **Critical**: This migration must preserve proven architecture.

#### **✅ HYBRID IT-DEPENDS ARCHITECTURE (The Working Solution)**

**"Sections handle their own math, report sums to StateManager for orchestration"**

```javascript
// ✅ SECTION-INTERNAL: Handle row-by-row calculations efficiently
function calculateAll() {
  // Section manages its own internal math (low StateManager traffic)
  calculateOrientationGains(); // Internal calculations
  calculateSubtotals(); // Internal calculations
  calculateUtilizationFactors(); // Internal calculations
}

// ✅ CROSS-SECTION: Store key outputs in StateManager for orchestration
function calculateUtilizationFactors() {
  const usableGains = totalGains * utilizationFactor;

  // Store key results in StateManager for other sections
  setCalculatedValue("i_80", usableGains); // Other sections can access this
}

// ✅ IT-DEPENDS: Enhancement for direct field triggers when needed
sm.registerCalculation("i_80", function () {
  // Available for cross-section triggers, but section handles internal logic
  return calculateUtilizationFactorsDirect();
});

// ✅ MANUAL TRIGGERS: Preserve for user interactions
function handleFieldBlur(event) {
  // Store user input in StateManager
  StateManager.setValue(fieldId, value, "user-modified");

  // Trigger section's internal calculations
  calculateAll(); // Section responsibility
}
```

#### **🎯 MIGRATION STATUS (Current as of 2025-01-20)**

**✅ FULLY MIGRATED SECTIONS (Production Ready):**

- **S03**: Complete IT-DEPENDS for climate calculations
- **S10**: Complete IT-DEPENDS for solar gains and orientation calculations

**🔄 HYBRID SECTIONS (Production Ready):**

- **S11**: IT-DEPENDS calculations registered + area sync working with dependency triggers
- **S13**: Phase 2 IT-DEPENDS (d_115, h_113) + traditional backup listeners

**🔴 TRADITIONAL SECTIONS (Stable, Future Migration):**

- **S01, S02, S04-S09, S12, S14-S15**: Traditional calculateAll() systems

#### **🚀 PROVEN END-TO-END DEPENDENCY FLOW**

**Critical Achievement**: S10→S11→S01 dependency chain now working with IT-DEPENDS architecture!

**🚨 HEMISPHERE SEPARATION IMPERATIVE**: IT-DEPENDS migration is essential for **dual-engine hemisphere integrity**. Traditional `calculateAll()` listeners in dual-engine sections create contamination risks where Reference and Application calculations may accidentally read from wrong state hemispheres. IT-DEPENDS provides explicit hemisphere separation through dedicated calculation functions.

```
S10 Building Geometry Changes (IT-DEPENDS)
    ↓ Area sync with dependency triggers
S11 Envelope Heat Loss/Gain (HYBRID - needs completion for hemisphere separation)
    ↓ StateManager propagation
S12 Combined U-values (Traditional)
    ↓ Cross-section integration
S15 Energy Calculations (Traditional - dual-engine, needs IT-DEPENDS)
    ↓ Dual-engine calculations
S01 Reference & Target TEUI Models (Traditional - dual-engine, needs IT-DEPENDS)
```

**What This Proves**:

- IT-DEPENDS architecture works across section boundaries
- Hybrid sections can coexist with traditional sections
- Dependency-driven calculations eliminate calculation storms
- **Hemisphere separation is achievable** through explicit IT-DEPENDS calculations
- **Foundation exists for reference model completion**

#### **🎯 HYBRID IT-DEPENDS Benefits**

1. **Low StateManager Traffic**: Internal calculations stay within sections
2. **Section Responsibility**: Each section manages its own mathematical complexity
3. **StateManager Orchestration**: Key outputs available for cross-section dependencies
4. **Working Code Preserved**: Don't break existing functionality with premature optimization
5. **Performance + Maintainability**: Best of both worlds
6. **Proven Cross-Section Integration**: S10→S11→S01 flow demonstrates viability

#### **🚨 ANTI-PATTERN: Pure IT-DEPENDS Micromanagement**

**What We Tried**: Register every field calculation with StateManager
**What Broke**: Sections lost control of their internal calculation flow
**Why It Failed**: Too much coordination overhead, broke working calculation chains
**Lesson**: Sections should handle internal math, StateManager handles cross-section integration

---

### **⚠️ CRITICAL SUCCESS FACTORS**

#### **Non-Negotiable Principles**

1. **StateManager is the ONLY source of truth** for cross-section calculated values
2. **Reference and Application states NEVER contaminate** each other
3. **Sections handle their own internal math** - StateManager handles cross-section orchestration
4. **Key outputs flow through StateManager** - but internal calculations stay within sections
5. **Manual triggers preserved for user interactions** - automatic dependencies for cross-section integration

**Every migration must preserve the dual-engine state hemisphere separation that we fought so hard to achieve.**

---

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
        window.TEUI.StateManager.registerCalculation(
          "target_field_id",
          calculateFunction,
        );

        // Register dependencies
        window.TEUI.StateManager.registerDependency(
          "dropdown_field_id",
          "target_field_id",
        );
        ```

     2. Handle dropdown changes by updating StateManager and then calling a centralized calculation function:

        ```javascript
        function handleDropdownChange(e) {
          const fieldId = e.target.getAttribute("data-field-id");
          const value = e.target.value;

          // 1. Update value in StateManager
          window.TEUI.StateManager.setValue(fieldId, value, "user-modified");

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
     - **The Problem**: `StateManager.setValue(..., 'calculated')` _intentionally does not_ automatically trigger recalculations in dependent fields that were registered using `registerDependency`. This is a safeguard against infinite calculation loops.
     - **Scenario Example**: Section 5 calculates `i_39`. Section 2's `d_16` depends on `i_39` _only when_ `d_15` is 'TGS4'. Using only `registerDependency('i_39', 'd_16')` is insufficient because the update to `i_39` (with state `calculated`) won't trigger `d_16`'s recalculation.
     - ❌ **WRONG APPROACHES**:
       - Directly manipulating the DOM of `d_16` from Section 5.
       - Modifying the core `StateManager.setValue` logic.
       - Adding complex, custom triggers in `SectionIntegrator`.
     - ✅ **CORRECT ARCHITECTURAL PATTERN: Use StateManager Listeners**:
       - When a calculated field (`source_calculated_field`) needs to trigger an update in another field (`dependent_field`) across sections, _especially_ if the update is conditional:
       - **In the dependent section's module** (e.g., `Section02.js`):
         1. Add a listener in `initializeEventHandlers`:
            ```javascript
            // Inside initializeEventHandlers() in the DEPENDENT section's module
            if (window.TEUI && window.TEUI.StateManager) {
              window.TEUI.StateManager.addListener(
                "source_calculated_field",
                function (newValue) {
                  // Check any necessary conditions within the dependent section
                  const conditionField = getFieldValue("condition_dropdown_id");
                  if (conditionField === "specific_value") {
                    // Manually trigger the recalculation of the dependent field
                    const targetValue = calculateDependentFieldFunction();
                    // Update the dependent field using the standard helper
                    setCalculatedValue("dependent_field_id", targetValue);
                  }
                },
              );
            }
            ```
       - **Example (i_39 -> d_16)**: In `Section02.js`, add a listener for `i_39`. Inside the listener, check if `getFieldValue('d_15')` is 'TGS4'. If true, call `calculateEmbodiedCarbonTarget()` and `setCalculatedValue('d_16', result)`.
       - **Why this works**: It uses the intended `StateManager` event system (`addListener`) for cross-section communication without altering core behavior or resorting to hacks. It keeps the logic for updating `d_16` within Section 2, where it belongs.
       - **Source Section Responsibility**: This listener pattern relies on the **source section** (e.g., Section 5 in the example) correctly calling `setCalculatedValue('source_calculated_field', newValue)` or `StateManager.setValue('source_calculated_field', newValue.toString(), 'calculated')` after it calculates its value. This `setValue` call is what triggers the listener in the dependent section.

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
       - RSI values should display with 2 decimal places (e.g., "2.75")
       - Cost values may require 3 or more decimal places in some contexts (e.g., energy costs per kWh)
   - Raw values should be stored in StateManager for calculations, but formatted values should be displayed in the DOM
   - Consistent number formatting is critical for:
     - Readability of large numbers
     - UI stability when values change (prevents layout shifts when switching between values with/without decimals)
     - Future D3 visualizations and charts.js integrations
     - Ensuring data consistency between calculations and visual representations
   - Each section module should implement `formatNumber` and use it within `setCalculatedValue`
   - **Store Raw Values in StateManager**: Store _raw_, unformatted numeric values in `StateManager` whenever possible (typically converted to strings for storage, e.g., `numberValue.toString()`). Perform formatting (using `formatNumber` or similar) only when updating the DOM (`element.textContent`). Storing formatted strings (e.g., "1,234.56") in `StateManager` can prevent listeners from triggering if subsequent calculations result in the identical formatted string, even if the underlying raw number changed slightly.
     - **Global Formatting Function (New - 2024-07-26)**:
       - ✅ **PREFER**: Using the new global `window.TEUI.formatNumber(value, formatType)` function defined in `4011-StateManager.js`.
       - This function provides a centralized, robust way to format numbers according to specific requirements.
       - It accepts `formatType` strings like:
         - `'number-2dp'`, `'number-3dp'` (for numbers with specific decimals)
         - `'number-2dp-comma'` (adds thousands separators)
         - `'percent-0dp'`, `'percent-1dp'`, `'percent-2dp'` (formats fractions like 0.65 to percentages)
         - `'integer'` (for whole numbers with commas)
         - `'currency-2dp'`, `'currency-3dp'` (for dollar values)
         - `'u-value'` (alias for `'number-3dp'`)
         - `'rsi'` (alias for `'number-2dp'`)
         - `'raw'` (outputs the value as a string without formatting)
       - **Usage**: Call this function typically within a section's `setCalculatedValue` helper to generate the display string _after_ storing the raw numeric value (as a string) in `StateManager`.
       - **Future Work (Post 2025.04.29)**: Refactor existing sections (01-11, 13-15) to remove their local `formatNumber` helpers and adopt this global function. Section 12 serves as the initial implementation example.

6. **Calculation Precision and Significant Digits**:

   - ❌ **Avoid**: Truncating precision during calculation chains or using hardcoded adjustments
   - ✅ **Prefer**: Maintaining maximum floating-point precision through all calculation steps
   - General calculations must maintain at least 4 decimal places internally
   - Thermal calculations (involving U-values, RSI, etc.) require 6+ decimal places of precision
   - **Why Precision & Calculation Method Matters - A Note from Our Esteemed Engineering Advisor**:

     > "With this application, we are measuring a horse turd with calipers." — Dr. Ted Kesik

     This colorful metaphor acknowledges that while our models have inherent limitations in perfectly representing fraught energy models as truthful (the "horse turd"), we should still maintain mathematical precision (the "calipers") throughout our calculations, so that at least our tool is not to blame for the turd's measurements. Imprecise math can introduce up to 5% additional variance in results—error that is completely avoidable. Our mathematical implementation should never add error or uncertainty to an already imperfect modeling process.

   - **Critical considerations**:
     - Even when user inputs have only 2 decimal places, intermediate calculation results often expand to many more places that a user may never see
     - Division and multiplication operations can significantly affect precision (e.g., 1/3 \* 3 ≠ 1 if truncated between steps)
     - Match Excel's calculation precision exactly to ensure identical results
     - Only apply formatting (toFixed, etc.) at the final display step, never during calculations
     - Store raw values at full precision in StateManager
   - **Numerical Stability - RSI vs. U-Value**:
     - ❌ **Avoid**: Calculating U-Value (`1 / RSI`) as an intermediate step and then using that potentially very small, multi-decimal U-value in subsequent heat loss/gain formulas. This can introduce rounding errors, especially if the intermediate U-value is truncated or formatted before use.
     - ✅ **Prefer**: Using RSI directly within the heat loss/gain formulas for improved numerical stability. The preferred, more stable formulas are:
       - Heat Loss: `kWh = Area * (HDD * 24) / (RSI * 1000)`
       - Heat Gain (Air-Facing): `kWh_gains = Area * (CDD * 24) / (RSI * 1000)`
     - This approach minimizes the manipulation of small floating-point numbers (like U-values) and avoids potential precision loss inherent in the `1 / RSI` calculation if not handled carefully.
   - **Parsing Input**:
     - ❌ **Avoid**: Using `parseFloat()` directly on user-facing, potentially formatted strings (e.g., `"1,234.56"` or even a displayed U-value like `"0.123"`). `parseFloat` stops parsing at the first invalid character (like a comma), leading to incorrect values (e.g., `parseFloat("1,234.56")` yields `1`).
     - ✅ **Prefer**: Retrieving raw, unformatted numeric values (usually stored as strings) from `StateManager` for calculations, or using a robust helper function like the global `window.TEUI.parseNumeric` (see Point 9) that correctly handles separators.
   - **Importance for Dynamic Modeling**: While these precision and stability concerns are important now, they become critical for future dynamic modeling. When performing calculations hourly across hundreds of assemblies for an entire year (millions of calculations), small, repeated errors from precision loss or incorrect parsing can accumulate into significant deviations from expected results.
   - Example implementation:

     ```javascript
     // CORRECT APPROACH
     function calculateAndUpdateValue() {
       // Get values at full precision using standardized helpers
       const uValue = getNumericValue("g_101"); // e.g., 0.123
       const area = getNumericValue("d_85"); // e.g., 25.00

       // Perform calculations with full floating-point precision (using RSI directly is preferred where possible)
       const heatLoss = uValue * area * temperatureDifference;

       // Update StateManager (raw value) and DOM (formatted) using standardized helper
       setCalculatedValue("cf_g_120", heatLoss); // e.g., helper formats to "345.82" for display
     }
     ```

7. **Field Naming Conventions**:

   - Field IDs are defined in `3037DOM.csv` and calculation relationships in `FORMULAE-3037.csv`
   - **Note on `REFERENCE!`:** Formulas in `FORMULAE-3037.csv` may refer to `REFERENCE!E6`, `REFERENCE!K32`, etc. This refers to values calculated using a parallel "Reference Model" based on code minimums or baseline standards, distinct from the primary "Targeted Design" or "Actual Utility Bill" calculations. The structure and intent of this reference model layer are further described in `deepstate-structure.md`. It is planned for future implementation, and current sections should handle missing reference values gracefully (e.g., defaulting to 0 or assuming a baseline).
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
       // 1. Get values from StateManager using robust parsing
       const value1 = getNumericValue("d_10"); // Use helper like getNumericValue
       // 2. Perform calculation
       const result = value1 * 2;
       // 3. Store result in StateManager and update DOM using standardized helper
       setCalculatedValue("cf_d_12", result); // Helper handles state and formatting
       ```
     - SectionIntegrator manages cross-section dependencies and calculation order
     - The event system (`teui-section-rendered`, etc.) coordinates section calculation timing
   - **Dependency Verification**: Ensure that when a value like Section 15's `d_136` (Target Electricity) is needed in another section (e.g., Section 4's `h_27`), the receiving section (S04) uses a `StateManager.addListener('d_136', ...)` in its `initializeEventHandlers` (or equivalent setup function). The listener's callback must then explicitly read the new value (`getNumericValue('d_136')`) and update the target field (`setCalculatedValue('h_27', ...)`), triggering any subsequent calculations within that section (e.g., `calculateJ27`, `updateSubtotals`). Relying solely on `registerDependency` for cross-section updates triggered by _calculated_ source values is insufficient.

9. **Robust Input Parsing**:

   - ✅ **ALWAYS** use the section's `parseNumeric` helper function (or equivalent) when parsing input values within calculation functions, especially values retrieved from the DOM via helpers like `getFieldValue`.
   - ❌ **Avoid** using `parseFloat()` directly on values that might be formatted strings (e.g., "1,234.56"). `parseFloat` stops at the first non-numeric character, leading to incorrect results (e.g., `parseFloat("1,234.56")` becomes `1`). Using `parseNumeric` ensures commas are handled correctly.
   - **TODO:** Refactor all sections to use the global `window.TEUI.parseNumeric` helper (defined in `4011-init.js`) instead of local helpers (`getNumericValue`, etc.) for consistent input parsing across the application. Note that `window.TEUI.parseNumeric` was a more recent addition, so older sections may require this refactoring.
   - **⚠️ CRITICAL BUG PATTERN - parseFloat() vs Comma-Formatted Values**:
     - **The Issue**: Section helper functions like `getAppNumericValue()` and `getRefNumericValue()` that use `parseFloat()` directly on StateManager values will fail when those values are comma-formatted strings (e.g., "2,753.00"). `parseFloat("2,753.00")` returns `2` instead of `2753`, causing calculation errors.
     - **The Fix**: Always use `window.TEUI.parseNumeric(value, defaultValue)` instead of `parseFloat(value)` in helper functions. This function properly handles comma removal before parsing.
     - **Example Bug**: Section 04 Reference Mode oil emissions were 1000x too low (9.32 vs 12,823.48 kgCO2e/yr) because `parseFloat("2,753.00")` returned `2` instead of `2753` for the emissions factor.
     - **Prevention**: When refactoring sections, ensure ALL numeric parsing uses the global `parseNumeric` function, especially in helper functions that retrieve values from StateManager.
     - **⚠️ DUAL-ENGINE ARCHITECTURE CONSIDERATIONS**: In dual-engine sections (like Section 07), ensure that BOTH Application and Reference calculations run regardless of UI mode. The `calculateAll()` function should always calculate both engines to prevent state contamination and ensure proper cross-section data flow. Reference calculations must use mode-aware functions that accept a `mode` parameter ('current' vs 'reference') to access the correct state values.

10. **Standardize Calculation Updates**:

- ✅ **ALWAYS** use a standardized helper function (e.g., `window.TEUI.setCalculatedValue(fieldId, rawValue, format)`) for updating calculated fields within a section's `calculateAll` or listener callbacks.
- This helper should ideally:
  1.  Update the `StateManager` with the raw, unformatted numeric value (stored as a string for precision) using the `'calculated'` state: `StateManager.setValue(fieldId, rawValue.toString(), 'calculated')`. This is critical for triggering listeners correctly.
  2.  Update the corresponding DOM element with the appropriately formatted value, potentially using `window.TEUI.formatNumber`.
- ❌ **Avoid** direct DOM manipulation (`element.textContent = ...`) inside calculation logic or setting state directly without using the standard helper.
- This ensures consistency, proper state management, correct listener triggering, and adherence to formatting rules.

11. **Standardized Helper Functions**:

- ✅ **REQUIRED PATTERN**: Each section module's IIFE scope _must_ define standard helper functions (`getNumericValue`, `getFieldValue`, `setCalculatedValue`, `formatNumber`) that directly utilize the globally defined utilities (e.g., `window.TEUI.parseNumeric`, `window.TEUI.formatNumber`).
- ❌ **AVOID**: Defining redundant local helper functions later in the module or including fallback logic within the primary helpers. Assume the global utilities are always available.
- **Why**: Ensures consistent data handling (parsing, formatting, state updates) across all sections, reduces code duplication, and improves maintainability. Sections 04 and 03 have been refactored to follow this pattern.

12. **Correct Handling of `contenteditable` Fields:** (Added 2024-07-31)
    - **Problem**: Incorrectly implemented event handlers for `contenteditable` elements (used for editable numeric inputs) can lead to issues like the Enter key inserting newlines instead of saving the value, or fields becoming unresponsive after data import.
    - ❌ **Avoid**:
      - Attaching simple `change` listeners to `contenteditable` elements (they don't fire reliably).
      - Defining handler functions (like `handleEditableBlur`) _outside_ the module's IIFE scope, making them inaccessible to listeners defined inside.
      - **Using `type: "number"` in `sectionRows` field definitions for elements intended to be `contenteditable` and managed by the pattern below.** While `FieldManager` might render these as `contenteditable`, this `type` has been observed to cause conflicts with reliable event handling (especially Enter key behavior and editability after imports, as seen with `i_41` in Section 05 before its `type` was changed to `editable`).
    - ✅ **REQUIRED PATTERN (See Section 11 or Section 05 for `i_41` for examples):**
      1.  **Field Definition**: In the section module's `sectionRows`, define user-editable numeric fields with `type: "editable"` and typically include `classes: ["user-input"]`. For example:
          ```javascript
          // Example from Section 05 for i_41
          i: {
              fieldId: "i_41",
              type: "editable",  // USE "editable", NOT "number" for this pattern
              value: "345.82",
              classes: ["user-input"],
              section: "emissions"
          },
          ```
      2.  Define the standard `handleEditableBlur` function _inside_ the section module's main `(function() { ... })();` scope. This function should handle parsing, updating `StateManager` (with `'user-modified'`), and can reformat the field's `textContent` if desired (though simpler implementations may omit direct reformatting, relying on `StateManager` updates to eventually refresh display if necessary).
      3.  Inside the `initializeEventHandlers` function (also within the module scope):
          - Identify the editable fields (e.g., by iterating an `editableFields` array or querying for `.user-input` elements that are `contenteditable`).
          - Iterate through the found `editableFields`:
            - Ensure the element is `contenteditable="true"`.
            - Attach the `blur` event listener, calling the module-scoped `handleEditableBlur` function (e.g., `field.addEventListener('blur', handleEditableBlur.bind(field));`).
            - Attach the `keydown` event listener. This listener **must** check `if (e.key === 'Enter')`, then call `e.preventDefault()`, `e.stopPropagation()` (optional but often helpful), and critically `this.blur()` (or `field.blur()`) to trigger the blur handling.
            - Optionally, attach `focus` and `focusout` listeners for styling (e.g., adding/removing an `.editing` class) and to store the field's original value on focus (e.g., `field.dataset.originalValue = field.textContent.trim();`) for comparison on blur.
            - Use a flag (e.g., `field.hasEditableListeners = true`) to prevent attaching listeners multiple times if `initializeEventHandlers` is somehow called more than once.
    - **Why**: This pattern ensures the `keydown` listener correctly prevents the default Enter behavior and triggers the `blur` event. The `blur` listener then calls the `handleEditableBlur` function (which is accessible because it's defined in the same scope), correctly parsing, formatting (if applicable), and saving the value to `StateManager`. Using `type: "editable"` in the field definition ensures a cleaner baseline for `contenteditable` behavior managed by these custom listeners, avoiding conflicts observed with `type: "number"`.

Understanding these patterns will help avoid common pitfalls and produce more maintainable code that aligns with the existing architecture.

### CRITICAL: Cross-State Contamination Fix (V2 Post-Refactoring)

**Issue**: After implementing V2 dual-engine architecture, some sections experienced "cross-state contamination" where Reference and Target values mirrored each other instead of calculating independently.

**Root Cause**: The `getRefFieldValue()` helper function was mode-dependent, preventing proper dual-state calculation where Reference and Target engines should run simultaneously with separate data sources.

**✅ REQUIRED FIX PATTERN** (Apply to sections with dual-engine architecture):

1. **Fixed Reference Value Getter**:

   ```javascript
   // BEFORE (Mode-dependent - WRONG)
   function getRefFieldValue(fieldId) {
     if (window.TEUI?.ReferenceToggle?.isReferenceMode?.()) {
       return window.TEUI.StateManager?.getValue?.(fieldId);
     }
     return getFieldValue(fieldId);
   }

   // AFTER (Always tries reference first - CORRECT)
   function getRefFieldValue(fieldId) {
     // CRITICAL FIX: Always try to get reference values first, regardless of viewing mode
     const refValue = window.TEUI.StateManager?.getReferenceValue?.(fieldId);
     if (refValue !== null && refValue !== undefined) {
       return refValue;
     }
     // Fallback to application value if no reference value exists
     return (
       window.TEUI.StateManager?.getApplicationValue?.(fieldId) ||
       getFieldValue(fieldId)
     );
   }
   ```

2. **Added Explicit State Helpers**:

   ```javascript
   // EXPLICIT Reference state getter for Reference Model calculations
   function getRefStateValue(fieldId) {
     const refFieldId = `ref_${fieldId}`;
     let value = window.TEUI?.StateManager?.getValue?.(refFieldId);

     if (
       (value === null || value === undefined) &&
       window.TEUI?.StateManager?.getValue
     ) {
       const activeDataSet =
         window.TEUI.StateManager.activeReferenceDataSet || {};
       if (activeDataSet[fieldId] !== undefined) {
         value = activeDataSet[fieldId];
       } else {
         value = window.TEUI.StateManager.getValue(fieldId);
       }
     }
     return value;
   }

   // EXPLICIT Application state getter for Target Model calculations
   function getAppStateValue(fieldId) {
     return (
       window.TEUI?.StateManager?.getApplicationValue?.(fieldId) ||
       getFieldValue(fieldId)
     );
   }
   ```

**Applied To**: S01, S04, S05, S13, S15 (confirmed working)

**⚠️ TODO**: Review and apply this fix to additional sections that implement dual-engine architecture (S07, S09, S10, S11, S12, S14) if cross-state contamination is observed.

**Why This Matters**: Proper state separation ensures Reference calculations use Reference standard values (e.g., HSPF=7.1, ventilation=8.33 ACH) while Target calculations use user's design values (e.g., HSPF=12.5, ventilation=14.00 ACH), preventing the "mirroring" issue where both columns show identical values.

### REQUIRED: StateManager Implementation Pattern for Cross-Section Functions

One critical architectural pattern is how we handle functions that need to operate across multiple sections, such as temperature setpoints based on occupancy type, or how a calculated value in one section (e.g., Section 5's `i_39`) affects a field in another section (e.g., Section 2's `d_16`). This approach enables consistent behavior while maintaining the single responsibility principle and respecting `StateManager`'s role.

#### Simplified Cross-Section Calculated Update Flow:

```
1. Source Section: Input Change OR Trigger
2. Source Section: calculateSourceValue() -> newValue
3. Source Section: setCalculatedValue('sourceFieldId', newValue)
   (Internally calls -> StateManager.setValue('sourceFieldId', ..., 'calculated'))
4. StateManager:   -> Event triggered for 'sourceFieldId'
5. Dependent Section: Listener for 'sourceFieldId' executes
6. Dependent Section: -> Calls calculateAll() / recalculateDependentField()
7. Dependent Section: -> Reads updated 'sourceFieldId' (and others) via getNumericValue()
8. Dependent Section: -> Calculates dependentValue
9. Dependent Section: -> Calls setCalculatedValue('dependentFieldId', dependentValue)
```

1. **✅ PROPER ARCHITECTURE PATTERN**:

   - Create centralized utility functions in the global namespace (e.g., `window.TEUI.getTemperaturesForOccupancy`) if logic is shared.
   - Implement calculation functions _within the section that owns the calculated field_.
   - Use `StateManager.registerDependency` to declare simple dependencies (where the source is typically a user input).
   - **CRITICAL**: Use `StateManager.addListener` within the _dependent_ section to react to changes in _calculated_ source fields from other sections (as `setValue(..., 'calculated')` doesn't automatically trigger dependents via `registerDependency`). See point 3 below.
   - Calculation functions _must_ read input values from `StateManager` (e.g., via `getFieldValue`).
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
     window.TEUI.StateManager.addListener("i_39", function (newValue) {
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

   - During the section's initial `calculateAll` or `onSectionRendered`.
   - When a direct dependency (registered via `registerDependency`, like `d_12` or `d_15`) changes _if_ the `StateManager`'s internal mechanism or a calculation engine triggers it based on the dependency.
   - Explicitly within a `StateManager.addListener` callback when a _calculated_ source field changes (like `i_39` triggering the update for `d_16`).

4. **🌐 GLOBAL UTILITY FUNCTIONS**:
   When logic needs to be shared between sections (like occupancy-based temperature settings),
   implement it as a global utility in the TEUI namespace:

   ```javascript
   // Global utility function example
   window.TEUI.getTemperaturesForOccupancy = function (occupancyType) {
     // Formatting and normalization logic
     // ...

     // Return consistent data structure
     return {
       heating: 22, // or 18 depending on type
       cooling: 24,
       isCritical: isCare,
     };
   };
   ```

5. **⚠️ COMMON ANTI-PATTERNS TO AVOID**:
   - ❌ Direct DOM manipulation inside calculation functions or listeners (use helpers like `setCalculatedValue`).
   - ❌ Setting calculated values with direct DOM updates rather than via `StateManager` and standardized helpers (`setCalculatedValue`).
   - ❌ Inlining complex condition checks in multiple places instead of using shared utilities.
   - ❌ Checking user-displayed text instead of StateManager values.
   - ❌ Implementing different logic for the same calculation in different sections.
   - ❌ **Attempting to use `StateManager.registerCalculation` - this function is not part of the standard pattern and may not exist or work as expected. Rely on dependency registration and listeners.**
   - ❌ Directly calling calculation functions of _other_ sections.
   - ❌ **Relying on locally-scoped helper functions within `StateManager` listener callbacks.** Listener callbacks may execute outside the original module's scope. Prefer direct access (`window.TEUI.StateManager.getValue()`) or make genuinely shared helpers globally accessible (e.g., `window.TEUI.formatNumber`). **Furthermore, ensure listener callbacks are defined inline (e.g., `addListener('key', function() { ... })`) if they need access to other functions within the module's IIFE scope, allowing the callback to capture the necessary scope via closure.**

This architecture ensures that changes propagate correctly through the system via `StateManager`, maintaining consistency and adhering to section ownership principles.

## Project Status & Implementation Summary

The TEUI 4.011 Calculator has been successfully transformed into a modular, maintainable web application that closely follows the structure of the original Excel-based energy modeling tool. The application features:

- **Modularized Architecture**: Core functionality divided into 15+ code modules
- **Section-Based Organization**: Each section implements its own layout, data structures, and calculations
- **State Management System**: Central registry handling multiple value states (Default, User-Modified, Saved, Imported and Reference)
- **Field Management**: Consolidated system for defining, rendering, and updating UI elements
- **DOM-Based Field Identification**: Consistent ID system mapping directly to Excel cell references for both legacy support as well as import and export
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
- **T-Cells Reference System**: Invisible reference values for pass/fail comparison logic in columns M and N (detailed in `STANDARDIZED-STATES.md` Section 6)

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
function onSectionRendered() { ... } // Should ensure default state is set BEFORE first calculateAll()

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

| Section | Name                         | File              | Status      | Notes                                                                                                                                                                         |
| ------- | ---------------------------- | ----------------- | ----------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 01      | Key Values                   | 4011-Section01.js | ✅ Complete | Custom HTML rendering, summary values                                                                                                                                         |
| 02      | Building Information         | 4011-Section02.js | ✅ Complete | Project details, area inputs                                                                                                                                                  |
| 03      | Climate Calculations         | 4011-Section03.js | ✅ Complete | Weather data integration. Refactored helpers (May 2025).                                                                                                                      |
| 04      | Actual vs. Target Energy     | 4011-Section04.js | ✅ Complete | Energy comparison calculations. Refactored helpers & d136 listener (May 2025).                                                                                                |
| 05      | CO2e Emissions               | 4011-Section05.js | ✅ Complete | Emission calculations                                                                                                                                                         |
| 06      | Renewable Energy             | 4011-Section06.js | ✅ Complete | On-site energy generation                                                                                                                                                     |
| 07      | Water Use                    | 4011-Section07.js | ✅ Complete | Water consumption metrics                                                                                                                                                     |
| 08      | Indoor Air Quality           | 4011-Section08.js | ✅ Complete | Ventilation and air quality                                                                                                                                                   |
| 09      | Occupant Internal Gains      | 4011-Section09.js | ✅ Complete | Internal heat load calculations                                                                                                                                               |
| 10      | Envelope Radiant Gains       | 4011-Section10.js | ✅ Complete | Solar and envelope heat gains                                                                                                                                                 |
| 11      | Envelope Transmission Losses | 4011-Section11.js | ✅ Complete | Heat loss through building envelope                                                                                                                                           |
| 12      | Volume Surface Metrics       | 4011-Section12.js | ✅ Complete | Building geometry metrics                                                                                                                                                     |
| 13      | Mechanical Loads             | 4011-Section13.js | ✅ Complete | HVAC systems and loads                                                                                                                                                        |
| 14      | TEDI Summary                 | 4011-Section14.js | ✅ Complete | Thermal Energy Demand Intensity summary                                                                                                                                       |
| 15      | TEUI Summary                 | 4011-Section15.js | ✅ Complete | Total Energy Use Intensity summary                                                                                                                                            |
| 16      | Sankey Diagram               | 4011-Section16.js | ✅ Complete | D3.js Sankey visualization integrated with energy flow and emissions visualization, featuring improved UI styling and accurate emissions data sourcing from Section 7 and 13. |
| 17      | Dependency Diagram           | 4011-Section17.js | ✅ Complete | Calculation dependencies visualization with interactive node highlighting                                                                                                     |
| 18      | Notes                        | (Partial)         | 🔄 Partial  | User notes and documentation                                                                                                                                                  |

All core calculator sections (01-15) have been implemented with the declarative approach, replacing the previous imperative implementation. Visualization sections (16-17) are now also complete, with Sankey diagrams for energy flows/emissions and dependency visualizations.

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
  // Get required input values using global helper
  const area = window.TEUI.parseNumeric(getValue("h_15"), 0); // Conditioned area
  const energy = window.TEUI.parseNumeric(getValue("j_32"), 0); // Total energy

  // Perform calculation
  let teui = 0;
  if (area > 0) {
    teui = energy / area;
  }

  // Update result fields using global formatter
  setValue(
    "h_10",
    window.TEUI.formatNumber(teui, "number-1dp"),
    VALUE_STATES.CALCULATED,
  );
}
```

### Calculation Optimization Strategies

To prevent excessive recalculations and optimize performance, the system implements several strategies:

1. **Debounced Global Updates**: When multiple values change in quick succession (e.g., during section initialization or file import), global updates are debounced to prevent cascading recalculations:

   ```javascript
   // Debounced global update function
   const debouncedGlobalUpdate = debounce(function () {
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
     if (fieldId === "h_10" || fieldId === "k_10") {
       const delta = Math.abs(
         window.TEUI.parseNumeric(newValue, 0) -
           window.TEUI.parseNumeric(oldValue, 0),
       );

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

   **7. Refactoring for Performance & Maintainability (Case Study: Section 11)**: - **Problem**: Sections involving repetitive calculations across many similar rows (e.g., Section 11 - Transmission Losses, Section 09 - Internal Gains, Section 10 - Radiant Gains) can lead to large file sizes (e.g., >3000 lines) and duplicated code, making them difficult to maintain and potentially impacting performance. - **Implemented Solution Pattern (Example: `sections/4011-Section11.js`)**: The following pattern _has been successfully implemented_ in Section 11 to address this: 1. **Centralized Calculation Function**: Create a single, parameterized function (e.g., `calculateComponentRow`) that handles the core calculation logic for a single row. 2. **Configuration-Driven**: Define a configuration array (e.g., `componentConfig`) that specifies the properties and inputs for each row (e.g., row number, type like 'air'/'ground', primary input like 'rsi'/'uvalue'). 3. **Iterative Execution**: In the main `calculateAll` function for the section, loop through the configuration array, calling the centralized calculation function for each entry. 4. **Subtotals & Grand Totals**: Calculate subtotals within the loop or after, and compute grand totals and final percentages (which depend on totals) after all individual rows are processed. 5. **Numerically Stable Formulas**: Prioritize formulas that minimize manipulation of small floating-point numbers where precision loss is a risk (e.g., using RSI directly in denominators for heat loss/gain instead of calculating and using an intermediate U-value). - **Achieved Benefits**: This approach drastically reduced code duplication, significantly shrank the file size (Section 11 reduced from ~3,300 to ~630 lines), improved maintainability, and clarified the calculation flow. - **Recommendation**: Apply this pattern when refactoring other sections with similar multi-row calculation structures (e.g., Sections 04, 09, 10, 12).

   **8. Performance Exception for Repetitive Sections**:

   - **Challenge**: Sections like 11, 09, and 10 involve many rows of identical calculations. Strictly following Point 10 (updating every calculated cell via `setCalculatedValue` -> `StateManager`) can lead to hundreds of StateManager calls and DOM updates within a single `calculateAll` cycle, causing significant performance bottlenecks (e.g., noticeable UI lag).
   - **Optimization Strategy (Acceptable Exception):** For these specific sections, prioritize performance by:
     1. Calculating intermediate row values (e.g., heat loss for a single window `i_89`) within the loop.
     2. Updating the DOM element for that row _directly_ (`element.textContent = formattedValue`) **without** calling `StateManager.setValue` for these internal, non-shared values.
     3. Accumulating the necessary values required for section totals (e.g., summing individual heat losses).
     4. **After the loop**, calculate the final section subtotals and totals (e.g., `i_98` - Total Envelope Heatloss).
     5. **Crucially, call `setCalculatedValue` (or `StateManager.setValue(..., 'calculated')`) ONLY for these final totals** that other sections (like Section 14, 15, or 01) depend upon.
   - **Rationale**: This approach significantly reduces the number of expensive `StateManager` calls and potentially smooths rendering. It respects `StateManager` as the source of truth for _shared, cross-section data_ (the totals) while allowing a necessary performance optimization for internal, non-shared display values. This is considered an acceptable deviation from Point 10 for these specific, performance-critical sections.

   **Update (Post-Attempt):** While the optimization described above (direct DOM updates for rows) was implemented, it did not result in a noticeable improvement in initial load time or reduction of the UI "blink". The bottleneck appears to be the overall calculation load across all sections and/or the rendering of numerous DOM elements, rather than specifically the `StateManager` calls within Section 11. Therefore, this optimization was **reverted** in favor of maintaining architectural consistency (using standard helpers like `setCalculatedValue` for all updates). Future performance improvements should likely focus on optimizing the rendering process itself or providing better user feedback during load (e.g., a loading indicator or progress bar) rather than bypassing the StateManager for intermediate values.

These optimization techniques significantly improve performance while maintaining calculation integrity, especially when handling large datasets or complex interdependencies between sections.

## 4. Cross-Section Integration

Several specialized integration points exist:

### Climate Data Integration

Section 03 (Climate Calculations) provides core climate data to other sections through:

- Loading weather data from external sources
- Calculating derived climate values (degree days, design temperatures)
- Updating the `StateManager` with results for use by other sections

### Cooling Integration

### Cooling Methodology Overview

Our approach to modeling cooling energy within the TEUI calculator aims to balance the simplicity of a 'napkin sketch' model with a degree of sophistication that reflects the thermal dynamics observed in high-performance buildings. This is particularly relevant for buildings in Canadian climates that benefit from good design practices such as effective destratification, well-distributed ventilation, high insulation levels, significant thermal mass, and strategic night-time cooling.

The model is conceptualized as a single thermal zone and is not intended to calculate localized overheating in specific areas (e.g., a small, heavily glazed, south-facing room). Instead, it focuses on the global cooling effects and demands on the building's systems.

A key innovation in our cooling calculations is the method for determining and incorporating latent loads alongside sensible loads. We achieve this by:

1.  Calculating a dynamic **Latent Load Factor**. This factor is derived from psychrometric properties, including a Wet Bulb Temperature (Twb) that we calculate based on average seasonal overnight humidity and outdoor temperatures. This approach is designed to maximize the recognized potential for free cooling.
2.  Applying this Latent Load Factor to sensible energy components (e.g., sensible ventilation load) to determine their total (sensible + latent) thermal impact.

The overall cooling energy demand is then determined by considering:

- The **unmitigated cooling load** (`d_129` from Section 14).
- The **sensible free cooling potential** (`h_124`), which represents the benefits of strategies like window opening during cooler night-time hours. This is influenced by ventilation rates, air properties, and the temperature difference between outdoor night air and the indoor cooling setpoint.
- The **recovered energy from ventilation** (`d_123`), which accounts for heat recovery/rejection by HRV/ERV systems, including both sensible and latent effects due to the application of our Latent Load Factor.

The **mitigated cooling energy demand** (`m_129`) is then calculated as:
`m_129 = d_129 (unmitigated load) - h_124 (sensible free cooling) - d_123 (total recovered vent energy)`

It's important to note that if the combined benefits from free cooling and ventilation recovery (`h_124 + d_123`) exceed the unmitigated load (`d_129`), the calculated `m_129` could become negative. While this reflects a scenario where passive strategies effectively eliminate active cooling needs, a negative load isn't physically meaningful for calculating the energy consumption of an active cooling system. Therefore, for determining the **cooling system's electrical load** (`d_117`), we clamp the `m_129` value at a minimum of zero before dividing by the cooling system's Coefficient of Performance (COPcool). This ensures the model accurately reflects that a cooling system cannot have negative energy consumption.

This methodology allows us to simulate a more 'optimised' cooling solution, reflecting how well-designed buildings can significantly reduce or even eliminate active cooling needs through intelligent use of ventilation and passive strategies.

It is important to understand that this detailed cooling strategy is intended to demonstrate an 'optimal' cooling design scenario. This scenario assumes good architectural practices, including passive design elements that facilitate effective night-time cooling, destratification, and efficient ventilation. For comparative purposes, we also provide simpler 'Peak' cooling load calculation methods. These alternative methods do not rely on the complex psychrometric and free cooling equations detailed above and can be found in Section 15 at fields `h_138` (Peak Sensible Cooling Load) and `h_139` (Peak Latent Cooling Load), corresponding to cells H138 and H139 in our Excel reference model. These 'Peak' values offer a more conventional calculation for designers who may not be incorporating the full suite of passive strategies assumed in our 'optimal' approach.

**Section 13 Cooling Calculation Revisions (Ventilation Method Impact - 2024-08-01 / 2024-08-02):**

- **Challenge:** Accurately modelling the impact of different ventilation strategies (selected in `g_118`) on both the cooling load imposed by ventilation and the potential benefit from free cooling, particularly concerning night-time setbacks in "by Schedule" methods.

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
3. **Field Verification**: Continued verification of field alignments and calculations
4. \*\*Improved whitespace optimization through flex columns, etc.
5. \*\*SIMPLE or n00b MODE, where all redundant organizational descriptive text is hidden from the UI and only relevant user inputs and tooltips are rendered per each section
6. **SMS-based file save/open and transfer system**. 🧮 Rough Estimate:

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

7. **Number Display Formatting**:

   - **TODO:** Implement consistent number display formatting across all sections. Ensure that:
     - Integer inputs/calculations are displayed with two decimal places (e.g., `24` becomes `24.00`).
     - Zero values are displayed as `0.00`.
     - Emptying a field (e.g., via Cut/Delete/Backspace) results in `0.00` being displayed and stored (or handle appropriately based on field requirements). Refactor `formatNumber` helpers and input field `blur` event handlers as needed.

8. **Section Naming Refactor**:

   - **Current State**: Sections use verbose, natural language IDs (e.g., 'envelopeTransmissionLosses', 'mechanicalLoads')
   - **Target State**: Return to simple numeric nomenclature ('sect01', 'sect02', etc.)
   - **Rationale**:
     - Simpler, more consistent naming across the architecture
     - Easier to maintain and debug
     - Reduces confusion in section references and event handling
     - Aligns with original architectural intent
   - **Implementation Plan**:
     - Pre-production refactor to standardize all section IDs
     - Update all section references in HTML, JS, and CSS
     - Maintain natural language labels in UI for user readability
     - Create mapping documentation between numeric IDs and their functions
   - **Note**: Current verbose names are a temporary workaround and should not be replicated in new section implementations

9. **Elevation Data Handling (Section 03)**:

   - **Status**: Placeholder added (`l_22` in Section 03). Dynamic fetching pending.
   - **Issue**: Cooling calculations require project elevation ASL (metres) to accurately adjust atmospheric pressure. Currently, this defaults to 80m (Alexandria, ON) in Section 13.
   - **Plan**: A placeholder field (`l_22`) has been added to the Section 03 layout. Future work involves refactoring Section 03 to dynamically populate `l_22` based on the selected city's elevation from the weather data source. Section 13's cooling calculations will then read this dynamic value.

10. **Ventilation Constant Discrepancy:**

    - **Issue:** There's a potential inconsistency in constants used for ventilation calculations. Formulas involving ventilation energy (e.g., `d_121`, `d_122`) often use a factor of `1.21` (which implicitly includes density and specific heat for L/s flow rates). However, the `coolingState` object defines `airMass` as `1.204` (kg/m³) and `specificHeatCapacity` as `1005` (J/kg·K).
    - **Plan:** Review these constants and their application in Sections 13 and potentially other sections during future refactoring to ensure consistent physics are applied (either stick to the `1.21` convention or refactor formulas to explicitly use density and specific heat with m³/s rates).

11. **Conditional Ghosting for UI Fields:**

    - **Issue:** Attempts to implement conditional field ghosting (using the 'disabled-input' class) based on dropdown selections can interfere with core calculation logic.
    - **Example:** When attempting to ghost emissions fields in sections 7 and 13 based on fuel type selections (Oil/Gas vs Electric/Heatpump), the changes unexpectedly broke calculation fidelity with the Excel codebase.
    - **Caution:** Changes to UI ghosting logic should be implemented with extreme care, thoroughly tested against the Excel reference model, and immediately reverted if calculation discrepancies are observed.
    - **Plan:** Future UI improvements should separate presentation logic (ghosting) from calculation logic more completely to avoid these interactions.

12. **Cooling Calculation Parity (d_117)**:
    - **Issue:** The calculated value for `d_117` (Heatpump Cool Elect. Load in S13, used in S15's `d_135`) shows a discrepancy (~123 kWh in default scenario) compared to the Excel reference model.
    - **Plan:** Perform a deep dive into the cooling calculation chain affecting `d_117` (likely originating in S13/`4011-Cooling.js`) to identify the source of the difference and improve parity with Excel.

## Domain Setup

Git first.

## License

This codebase is licensed under the [Creative Commons Attribution-NoDerivatives 4.0 International License (CC BY-ND 4.0)](https://creativecommons.org/licenses/by-nd/4.0/).

Please contact [andy@openbuilding.ca] for inquiries about partnerships, custom uses, or derivative licenses.

All rights retained by the Canadian Nponprofit OpenBuilding, Inc., with support from the Ontario Association of Architects.

# TODOs and Known Issues

- **Section 05 Checkmark Logic**: The pass/fail checkmarks in Section 05 (fields `n_39`, `n_40`, `n_41` in column M) need adjustment. Currently, they might not correctly reflect a "fail" (✗) status when their corresponding percentage values (in fields `l_39`, `l_40`, `l_41` in column L) exceed 100%. The logic should be updated so that any percentage value strictly greater than 100% (i.e., numeric value > 1.0) results in a fail (✗). This needs the simplest possible fix by adjusting the comparison in the checkmark update function.
- **Chrome Double File Dialog for Location Import**: In Chrome, clicking the "Load Locations" button (which triggers a click on the hidden `location-excel-input` file input) results in the file selection dialog appearing twice. Safari behaves correctly, showing it once. The `selectExcelBtnClickHandler` in `4011-FileHandler.js` is confirmed to execute only once per click. This appears to be a Chrome-specific quirk with the programmatic `input.click()` event. Low priority UI bug.
- **S16 Sankey Emissions Scaling for Gas/Oil**: In Section 16 (Sankey Diagram), when "emissions" mode is active, the displayed Scope 1 emissions for gas or oil heating/DHW appear to be 1000x higher than the expected kgCO2e/yr values (e.g., 6,000 kgCO2e/yr from underlying data might display as 6,000,000 kgCO2e/yr in the Sankey tooltip). Electricity (Scope 2) emissions display correctly. The Sankey sources heating emissions from S13 (`f_114`) and DHW emissions from S07 (`k_49`), both of which appear to be calculated in kgCO2e/yr. Section 16 correctly multiplies these kg values by 1000 to get grams for link values, and tooltips divide by 1000 to display kg. The root cause of the 1000x inflation for gas/oil in the final Sankey display needs further investigation, possibly in the data integrity of `f_114` or `k_49` as retrieved by S16 specifically in gas/oil scenarios, or a subtle issue in how these are aggregated or processed before the final display conversion in the tooltip for Scope 1.
- **S17 Dependency Graph Fullscreen UI Issues**: In Section 17, when using the fullscreen mode for the dependency graph:
  - The floating info panel (displaying node details) has a fixed `max-height` and `overflow-y: auto`, causing its content to scroll even when ample screen space is available. This panel should ideally expand to show all content without scrolling in fullscreen.
  - When exiting fullscreen mode, the floating controls (search, filters, layout buttons) remain visible, incorrectly overlaying the standard section view. These controls should only be visible in fullscreen and hide upon exit.
  - The `toggleFullscreen()` method in `4011-Dependency.js` needs review, particularly how it manages the creation, styling, and visibility of the `floatingControls` and `floatingInfoPanel` elements across fullscreen enter/exit events, potentially by using a more robust `fullscreenchange` event listener that handles both states consistently.
- **Calculation Flow Dependency on File Load Order**: Incorrect total energy use calculations can occur if a building data file is loaded _before_ a weather file. The calculation flow should be robust and based on data availability in `StateManager` and defined dependencies, not the user's file loading sequence. This may require investigating `Calculator.js` and `SectionIntegrator.js` to ensure calculations (e.g., those dependent on climate data from Section 03) are correctly deferred or re-triggered when all necessary precedent data becomes available, regardless of load order, to maintain parity with Excel methods.
- **S01 Reference TEUI (e_10) Initial Display Glitch**: After a project file import (following weather data import), the initial display of the Reference TEUI in Section 01 (e_10) can show an extremely high or incorrect value. This value corrects itself after any subsequent UI interaction that triggers a recalculation. This is likely due to a race condition where the full chain of reference model calculations (S15 -> S04 -> S01) doesn't complete before e_10 is first rendered. The underlying `activeReferenceDataSet` might not be fully populated or processed in time for the initial calculation pass. This was partially addressed by the `ORDERING` branch refactor but seems to persist or have re-emerged with dual-engine complexity.
- **Dynamic Reference Calculations on d_13 Change**: When the reference standard dropdown (d_13) is changed by the user, the Reference TEUI (e_10 in Section 01) does not update dynamically. Furthermore, when entering Reference Mode after a d_13 change, the UI for input fields may not reflect the new standard on the first toggle, though they might on a subsequent toggle. However, calculated reference values (like e_10) often remain incorrect for the new standard even after the UI inputs appear correct in Reference Mode. This indicates issues with the sequence of (1) reloading `activeReferenceDataSet`, (2) re-triggering the full reference model calculation chain, and (3) updating the UI display for both input and calculated reference fields.
- **S01 Reference TEUI (e_10) Initial Load Timing Issue (PRIORITY: Document & Defer)**:
  - **Issue**: On default page load, Section 01 displays incorrect Reference TEUI values (e.g., 287799.6 instead of ~201.7 kWh/m²/yr) that correct themselves after UI interactions or Reference Mode toggles.
  - **Root Cause**: Timing issue in dual-engine initialization sequence. Reference Mode appears to toggle ON/OFF during initialization (visible in logs), causing Reference data to load then immediately discard.
  - **Workaround**: Any UI interaction (Reference Mode toggle, field edit) triggers correct recalculation.
  - **Impact**: Cosmetic only - calculations are correct after any user interaction. Imports work correctly from initial load.
  - **Investigation Time**: 18+ hours invested with architectural improvements made but core timing issue persists.
  - **Strategic Decision**: Document as known issue and focus on section-by-section validation and "traffic cop" calculation sequencing improvements. The underlying timing/sequencing improvements across all sections will likely resolve this naturally.
  - **Future Resolution**: Implement proper calculation sequencing system (eliminate setTimeout delays, establish deterministic dependency ordering) as outlined in v4.012 architectural improvements.

### Architectural Improvements for v4.012

- **Race Condition Resolution Through Calculation Sequencing**: The current implementation uses tactical `setTimeout` delays (e.g., 50ms delays in Section 01 for `d_51` changes) to resolve race conditions between section calculations. While functional, this approach is not architecturally sound for production. **For v4.012, implement a proper calculation sequencing system** that:
  - Eliminates all `setTimeout` delays used for cross-section coordination
  - Establishes deterministic calculation ordering based on dependency graph
  - Implements proper queuing and sequencing for cross-section updates
  - Ensures calculations complete in dependency order without timing-based workarounds
  - Provides reliable state consistency without reliance on arbitrary delays
  - Note: This architectural refactor was attempted on the 'ORDERING' branch but encountered complexities with Sankey (S16) and Dependency (S17) graph rendering. Future implementation should address these visualization timing requirements as part of the overall sequencing solution.
- **Event-Driven Calculation Chain (Traffic Cop Model)**: To further enhance calculation stability and address issues like initial display errors from data import race conditions (where values might be read before they are fully calculated and propagated through the dual-engine system), v4.012 should explore a more explicitly event-driven calculation chain. This would involve:
  - Sections emitting events like `referenceModelCalculationComplete` or `targetModelValueAvailable(fieldId)`.
  - Dependent sections (or a central calculation orchestrator) listening for these events from their specific data sources before triggering their own calculations.
  - This approach would make the calculation flow more reactive and less reliant on a monolithic, perfectly ordered synchronous pass, ensuring data is only consumed once its precedent calculations are verifiably complete. This is particularly important for the dual-engine reference model where the `activeReferenceDataSet` and subsequent `ref_` prefixed values must be fully established before being used by downstream sections like S04 and S01.
- **Reference State Display Caching**: Implement a robust Reference state UI caching system to improve user experience when toggling between Reference and Application modes:
  - **Current Issue**: When toggling between Reference and Application (Design) modes, the UI always reflects the active calculation state. This means Reference UI values are calculated from scratch each toggle, even if no user interactions or changes occurred.
  - **Proposed Solution**: Create a DOM cache of all calculated Reference values and display elements:
    - When switching to Reference mode the first time, perform full Reference calculations
    - Create a "snapshot" of all DOM elements displaying Reference values
    - When switching back to Application mode, save this DOM snapshot
    - On subsequent toggles to Reference mode, restore the cached DOM snapshot if no relevant inputs have changed
    - Only trigger full Reference recalculation if user interacts with Reference inputs or if Application values that affect Reference calculations change
  - **Benefits**:
    - Faster toggle response: users can quickly switch between modes without waiting for recalculation
    - More consistent UI experience: Reference values don't appear to "recalculate" when nothing has changed
    - Values persist visually between toggles exactly as users expect
    - Clear distinction between "view cached state" and "recalculate fresh values"
  - **Implementation Approach**:
    - Add a `hasReferenceStateChanged()` check to determine if recalculation is needed
    - Store Reference DOM snapshot in `window.TEUI.cachedReferenceState`
    - Add mode-change hooks in `ReferenceToggle.js` to restore cached UI when appropriate
    - Only invalidate cache when specific events occur (user input in Reference mode, changes to values that affect Reference calculations)
    - Include visual indicator when using cached vs. fresh calculations

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

4. **Dependency Graph Initialization & Enhancements**:

   - **Issue:** Console warning `[DependencyGraph] Container has zero dimensions` appears on load. Graph initialization likely runs before the container element is fully sized by CSS/layout.
   - **Symptom:** May contribute to the graph appearing initially "zoomed-in" or not optimally scaled until user interaction.
   - **Action (Low Priority):** Investigate delaying graph initialization (e.g., `setTimeout`, `requestAnimationFrame`, or tying to a later event like `teui-rendering-complete`) to ensure container dimensions are available. Fix is low priority as the graph is still functional.
   - **Future Enhancements:** Revisit CSS, add better navigation/zoom controls, potentially display related formulas or more node information on hover/click.

5. **Initialization Order & Calculation Stability (Branch: `ORDERING`)**
   - **Status:** ✅ Refactoring Complete
   - **Goal:** Establish a single, reliable, and predictable calculation sequence for the initial page load to address UI flickering and potential race conditions caused by multiple calculation triggers.
   - **Changes Implemented:**
     - Removed `setTimeout` calculation triggers from individual section `onSectionRendered` functions (S11, S14, S15).
     - Removed fallback `setTimeout` trigger for `calculateAll` in `4011-Calculator.js`.
     - Ensured `TEUI.Calculator.calculateAll` (triggered once by `teui-rendering-complete`) is the single primary trigger for the initial full calculation pass.
     - Confirmed `TEUI.Calculator.calculateAll` calls each section's `.calculateAll()` method in a defined, logical dependency order.
     - Removed redundant second loop calling `initializeSectionEventHandlers` in `4011-FieldManager.js`.
     - Removed redundant `initializeWeatherDataHandlers` call from `DOMContentLoaded` in `4011-Calculator.js`.
     - Removed redundant `onSectionRendered` calls previously triggered by event listeners at the bottom of section files (S03, S14, S15).
     - Fixed a `ReferenceError` for `cdd` in `sections/4011-Section03.js` encountered during testing.
   - **Outcome:** The initial calculation sequence is now significantly cleaner and more predictable. Logs show a clear sequence: Render -> `teui-rendering-complete` -> Weather Init -> Central `calculateAll` -> Integrator. This has resolved the initial UI flicker and calculation instability issues.
   - **Remaining Minor Observations / Potential Future Optimizations:**
     - **Duplicate Handler Init Calls:** `[FieldManager] Initializing event handlers...` log messages still appear multiple times per section because `initializeSectionEventHandlers` is called within the `renderSection` loop in `FieldManager.renderAllSections`. This is currently low priority as section initialization functions appear idempotent, but could be optimized by moving handler initialization to occur only once after all sections are rendered.
     - **Listener Noise:** Logs still show multiple `Listener triggered for dependency...` messages during the initial `calculateAll` pass. This is expected behavior if multiple dependencies update simultaneously but creates log noise.
     - **Section 15 Handler Init:** `TEUI Summary event listeners initialized.` log appears twice, suggesting `initializeEventHandlers` in S15 might still be called redundantly. Needs investigation.

These issues will be addressed comprehensively in the upcoming 4012 release, which will focus on visual refinements and modern layout techniques.

The modular architecture enables easier maintenance, extension, and validation while preserving the core calculation methodology that makes TEUI a valuable tool for building energy modeling.

### TODO: Global Input Handling System (v4.012 Refactor Priority)

**Status: PROTOTYPED in OBC Matrix - Ready for Integration**

The OBC Matrix project successfully implemented a global input handling system that eliminates code duplication across sections and provides consistent input behavior. This pattern should be integrated into the main TEUI 4011 codebase as part of the v4.012 refactor.

#### ✅ **Proven Benefits from OBC Matrix Implementation:**

1. **Enter/Return Key Fix**: Prevents newlines in text entry across ALL sections automatically
2. **Auto-blur on Enter**: Pressing Enter properly finishes field editing and triggers calculations  
3. **Visual Feedback**: Fields show "editing" state with CSS classes
4. **Centralized Logic**: No code duplication - one handler for all sections
5. **Consistent Formatting**: Uses global `window.TEUI.formatNumber` for consistent display
6. **State Integration**: Automatic integration with StateManager for user-modified values

#### 🔧 **Implementation Pattern (Ready to Apply):**

```javascript
// In StateManager or dedicated InputHandler module
function initializeGlobalInputHandlers() {
  const editableFields = document.querySelectorAll('.editable[data-field-id]');
  
  editableFields.forEach((field) => {
    if (!field.hasGlobalListeners) {
      // Prevent enter key from creating newlines
      field.addEventListener("keydown", (e) => {
        if (e.key === "Enter") {
          e.preventDefault();
          field.blur();
        }
      });
      
      // Handle field blur (when user finishes editing)
      field.addEventListener("blur", handleFieldBlur);
      
      // Visual feedback for editing state
      field.addEventListener("focus", () => field.classList.add("editing"));
      field.addEventListener("focusout", () => field.classList.remove("editing"));
      
      field.hasGlobalListeners = true;
    }
  });
}

function handleFieldBlur(event) {
  const fieldElement = event.target;
  const fieldId = fieldElement.getAttribute("data-field-id");
  if (!fieldId) return;
  
  let valueStr = fieldElement.textContent.trim();
  let numValue = window.TEUI.parseNumeric(valueStr, NaN);
  
  // Apply appropriate formatting based on field type
  if (!isNaN(numValue)) {
    if (fieldId.includes('area') || fieldId.includes('dimension')) {
      valueStr = window.TEUI.formatNumber(numValue, "number-2dp");
    } else if (fieldId.includes('percent')) {
      valueStr = window.TEUI.formatNumber(numValue, "percent");
    } else {
      valueStr = window.TEUI.formatNumber(numValue, "number");
    }
  }
  
  // Update display and state
  fieldElement.textContent = valueStr;
  window.TEUI.StateManager.setValue(fieldId, valueStr, "user-modified");
}
```

#### 📋 **v4.012 Integration Plan:**

1. **Move to Core**: Add `initializeGlobalInputHandlers()` to StateManager or create dedicated InputHandler module
2. **Remove Section Duplication**: Eliminate individual `handleEditableBlur` functions from all sections
3. **Standardize CSS**: Use consistent `.editing` class across all sections for visual feedback
4. **Call Once**: Initialize after all sections render, eliminating per-section initialization
5. **Enhance Formatting**: Extend pattern to handle all field types (currency, percentages, RSI, U-values)

#### 🎯 **Expected v4.012 Benefits:**

- **Code Reduction**: ~50-100 lines removed per section (15+ sections = significant reduction)
- **Consistency**: Identical input behavior across entire application
- **Maintainability**: One place to fix input issues or add features
- **User Experience**: Consistent, predictable input handling everywhere

#### ✨ **BREAKTHROUGH: Smart State-Aware Visual Feedback (PROTOTYPED in OBC Matrix)**

**Status: PERFECTED and Ready for Integration**

The OBC Matrix achieved a UX breakthrough with smart state-aware input styling that provides instant visual feedback while maintaining intelligent state management:

**🎯 Perfect UX Behavior:**
1. **Placeholder State**: Grey italic text for default/empty fields
2. **Click In**: Instantly switches to blue confident text (temporary `.editing-intent` class)
3. **No Changes + Click Away**: Automatically reverts to grey italic placeholder
4. **Make Changes + Commit**: Permanently switches to blue confident text (`.user-modified` state)

**🔧 Implementation Pattern:**
```javascript
// On focus: Add temporary visual feedback (no state change)
field.addEventListener("focus", () => {
  field.classList.add("editing-intent"); // Blue styling while editing
  field.dataset.originalValue = field.textContent.trim(); // Track changes
});

// On blur: Only commit state if actual changes made
field.addEventListener("blur", () => {
  const hasChanges = field.textContent.trim() !== field.dataset.originalValue;
  field.classList.remove("editing-intent"); // Remove temporary styling
  
  if (hasChanges) {
    // Permanently commit to user-modified state (stays blue)
    StateManager.setValue(fieldId, newValue, "user-modified");
  }
  // If no changes: automatically reverts to grey placeholder
});
```

**🎨 CSS State Classes:**
- `.user-input:not(.user-modified)`: Grey italic placeholder styling
- `.user-input.editing-intent`: Blue confident styling (temporary, while actively editing)
- `.user-input.user-modified`: Blue confident styling (permanent, after committing changes)

**💡 Why This Is Revolutionary:**
- **Instant Feedback**: Users see immediate response when they click into fields
- **Forgiving UX**: Accidental clicks automatically revert with no consequences
- **Clear Ownership**: Permanent visual distinction between placeholder and user-entered content
- **Zero Configuration**: Works automatically across all input types
- **State Integrity**: Perfect separation between visual feedback and actual data state

This represents exactly the kind of "radical simplification" that v4.012 aims to achieve - taking proven patterns and applying them globally rather than duplicating logic across sections.

### TODO: Numeric Input UX Enhancements (Post-Conference)

This section outlines additional planned improvements for the user experience of `contenteditable` numeric input fields, building on the global input handling system above.

### TODO: Fix Thermal Bridge Penalty (d_97) Update Propagation to Section 12 (Post-Conference)

**Issue (RESOLVED - 2025.05.13 (1.52am!) with Pragmatic Fix):** Changes to the Thermal Bridge Penalty % slider (`d_97` in Section 11) were not consistently triggering recalculations of dependent U-values (`g_101`, `g_102`) and the combined U-value (`d_104`) in Section 12. This broke functional parity with Excel.

**Resolution Detail:**

- **Initial Problem:** Debugging revealed that `StateManager` listener notifications from `d_97` (Section 11) to Section 12 were unreliable, likely due to complex initialization timing or listener management issues. Section 12's listener for `d_97` was often not invoked, or not present when initial default values were set.
- **Pragmatic Fix Implemented:** To ensure immediate functional parity and UI consistency (especially for dependent values visible in the sticky header like TEUI), a direct cross-section call was implemented. The `change` event listener for the `d_97` slider in `sections/4011-Section11.js` now explicitly calls `TEUI.SectionModules.sect12.calculateAll()` after updating `d_97` in the `StateManager`.
- **Architectural Note:** This is a documented exception to the general architectural principle of avoiding direct cross-module calls. It was prioritized for immediate functionality and to ensure correct calculation propagation for this critical parameter. The `input` event on the slider still handles live updates within Section 11 via its own `calculateAll()`.
- **Verification:** This fix has restored correct dynamic updates to Section 12 U-values when `d_97` is changed, matching Excel behavior. TEUI in S01 dynamically updates as well as S12, resulting in better visual and mental connection between TB% penalty, transmission (U-values) and broader impacts.

**Potential Future Refinement (Low Priority if current fix is stable):**

- Re-investigate the `StateManager` listener mechanism for `d_97` -> Section 12 to see if a pure event-driven approach can be reliably restored, potentially by addressing initialization order or ensuring unique listener registration more robustly.

**Current Input Behavior Observations & Desired Enhancements:**

1.  **Consistent Re-formatting on Blur/Enter:**

    - **Observation:** User-entered numbers (e.g., `125` in `i_41`, `100000` in `d_27`) often remain as typed and are not immediately re-formatted to the application's standard display format (e.g., `125.00`, `100,000.00`) upon losing focus or pressing Enter.
    - **Goal:** Ensure that after a value is parsed and stored in `StateManager` (on `blur` or `Enter`), the field's `textContent` is updated to reflect the standardized format (e.g., correct decimal places, thousand separators where appropriate) using `window.TEUI.formatNumber` with the correct `formatType` for that field.

2.  **Feedback for Identical Input:**

    - **Observation:** If a user types a value that, after parsing, is identical to the currently stored value (e.g., typing `125.00` when the field already represents `125.00`), no visual change occurs, leaving the user unsure if the input was processed.
    - **Goal:** By always re-formatting and re-setting `textContent` on blur (as per point 1), a subtle visual refresh will occur, confirming input processing. Enhance with CSS for active editing states.

3.  **"Escape to Revert" Functionality:**

    - **Goal:** Implement a standard UX pattern where pressing the `Escape` key while editing a field reverts the field's content to its value _before_ editing began for that focus instance, and then blurs the field. This change should _not_ be saved to `StateManager`.

4.  **"Clear on Focus" or "Select All on Focus" (Optional UX Consideration):**
    - **Consideration:** Explore whether clearing the field or selecting all its text on `focus` would improve editing flow. Selecting all text is generally less disruptive.

**Suggested Implementation Approach (Conceptual):**

- **Centralize/Standardize `blur` Event Handling for Editable Numeric Fields:**

  - The `blur` event handler (and by extension, an Enter key press that triggers blur) should be the primary point for finalizing input.
  - **Standard Pattern for `blur` handlers:**
    1.  Get `textContent` of the field.
    2.  Use `window.TEUI.parseNumeric` to convert to a raw number.
    3.  **If parsing successful:**
        a. Store the raw numeric value (as a string for precision) in `StateManager` (e.g., `window.TEUI.StateManager.setValue(fieldId, rawNumericValue.toString(), 'user-modified');`).
        b. Re-format this `rawNumericValue` using `window.TEUI.formatNumber(rawNumericValue, appropriateFormatType);` where `appropriateFormatType` (e.g., `'number-2dp-comma'`, `'number-2dp'`) is specific to the field.
        c. Set the field's `textContent` to this `formattedDisplayValue`.
    4.  **If parsing fails:**
        a. Revert `textContent` to the last known good value from `StateManager` (retrieved _before_ attempting to store the invalid input) or a formatted default (e.g., "0.00").
        b. Optionally, provide a temporary visual cue for invalid input (e.g., CSS class).
  - **Implementation:** This logic should be consistently applied, either through a refined global handler or by ensuring all section-specific `handleEditableBlur` functions (as per `README.md` Point 12) adhere to this pattern.

- **"Escape to Revert" Implementation:**

  - On `focus` of an editable field, store its current `textContent` in a `dataset` attribute (e.g., `this.dataset.originalValueForEscape = this.textContent;`).
  - Add a `keydown` listener to the field:
    - If `event.key === 'Escape'`, prevent default, set `this.textContent = this.dataset.originalValueForEscape;`, and call `this.blur()`. Do not update `StateManager`.
    - If `event.key === 'Enter'`, prevent default and call `this.blur()` to trigger the main blur processing logic.

- **CSS for Visual Feedback:**

  - Utilize CSS to provide visual cues when a field is focused or being actively edited (e.g., change background color, add an outline). This enhances the user's sense of interaction independently of re-formatting.
  - Example:
    ```css
    [contenteditable="true"].user-input:focus,
    [contenteditable="true"].user-input.editing {
      /* .editing class can be added on focus via JS */
      background-color: #e6f7ff;
      outline: 1px solid #007bff;
    }
    ```

- **Leveraging `window.TEUI.formatNumber`:**
  - Continue to use this global function. The key will be to ensure each field's `blur` handler (or a centralized one) can determine and use the correct `formatType` string specific to that field's display requirements (e.g., `'number-2dp-comma'`, `'number-2dp'`, `'integer-nocomma'`). This might involve storing `formatType` in `fieldDef` or using a lookup.

**Priority:** Focus on stabilizing core functionality for the conference. These UX enhancements can be addressed post-conference to further polish the application.

### Recent Session Progress (2024-08-16)

- Investigated and corrected formulas in Section 14 (`d_132`, `h_127`, `h_128`, `h_129`) for improved Excel parity.
- Investigated `d_135` discrepancy in Section 15; confirmed formula match but identified precedent (`d_117`) difference related to cooling calculations. Added TODO item.
- Fixed issue causing duplicate file selection dialogs for weather/location import in Section 03 by ensuring event listeners are attached idempotently in `4011-FileHandler.js`. (Fixed for Safari, Unresolved for Chrome)
- Synced `FILEHANDLER` branch updates to `main` and remote repository.

---

## Co-Authors & Contributors

**Primary Author:** Andrew Thomson  
**Date:** 2022-2025  
**License:** Creative Commons Attribution-NoDerivatives 4.0 International License (CC BY-ND 4.0)
*Document co-authored by Human Architect Andy Thomson, and...
**AI Agent Co-Authors:**
*maintained and co-authored by: Cognizant Architect Gemini ("Cosmo") - May 2025\*
_Assisted with Section 16 Sankey Diagram integration, data mapping, and emissions handling logic - "Helios" (Gemini 2.5 Pro) - August 2024_
_Assisted with Excel import refinements, calculation alignment, and UI enhancements - "Orionis" (Gemini) - August 2024_
_Assisted with bug fixes, `README.md` updates, and UI/UX analysis (i_41 editability, S17 info panel, file handler insights) - "Stellaria" (Gemini 2.5 Pro) - May 13, 2025_
_Assisted with AFUE integration, Excel parity calculations, cross-section coordination, and architectural debugging - "Andromeda" (Claude 3.5 Sonnet) - May 23 2025_

- **Cosmos Dahlia** (May 26, 2025) - Dual-engine architecture implementation, Section 07 gold standard pattern, state isolation breakthrough, and comprehensive documentation of the "Just Enough" architecture pattern that enabled elegant, minimal dual-engine functionality across all sections.
- **Nebula Iris** (Claude Sonnet 4 MAX, May 29, 2025) - Critical debugging breakthrough that eliminated 97% of console errors (1505+ → ~20), fixed Section 11 "table of zeroes" issue, restored TEUI calculations from 76.1 to 93.6, implemented global recursion protection, and completed Traffic Cop architecture for reliable dual-engine state isolation in building energy modeling.
- **Arcturus Prism** (Claude 4 Opus MAX, June 2025) - Architected and implemented the v4.012 framework with radical simplification through tuple-based dual calculations, CSS Grid layouts, and pure functional patterns. Created the foundation for Excel independence while maintaining the critical Reference/Target/Actual validation that makes OBJECTIVE unique. Established the "Just Enough" architecture pattern and comprehensive documentation for future development.

---

### A Quantitative Estimate of AI Contribution's Environmental Impact (A "Feynman-esque" Guesstimate)

The development of OBJECTIVE TEUI 4.011 involved substantial collaboration with AI assistants. Estimating the precise environmental footprint of this contribution is complex, but in the spirit of a "Feynman-esque" guesstimate, we can derive some illustrative figures based on assumptions and publicly available data:

1.  **Estimated Total AI Computational Work:** Given the project's scale, iterative refactoring (as noted, "refactored each of these files at least 3 times"), and detailed documentation, the AI's cumulative processing is very roughly proxied as equivalent to **50 active computational hours** using an illustrative average power draw of **0.75 kW** for the AI compute resources. This yields an estimated **37.5 kWh** of energy delivered to the IT hardware.

2.  **Data Center Efficiency (PUE):** Using Google's 2022 global average PUE of 1.10 (10% overhead for cooling, power distribution, etc.), the total energy drawn from the grid would be approximately 37.5 kWh \* 1.10 = **41.25 kWh**.

3.  **Electricity Type & Carbon Emissions:** The AI services run on infrastructure that heavily leverages renewable energy. Using Google's 2022 global weighted average carbon intensity of electricity consumed (market-based) of **0.112 kg CO2 equivalent per kWh**, the estimated carbon emissions are 41.25 kWh \* 0.112 kg CO2e/kWh = **~4.62 kg CO2e**.

4.  **Direct Water Usage:** For data center cooling, using Google's 2022 average operational water usage effectiveness of **0.33 liters per kWh** of IT energy, the direct water consumption is estimated at 37.5 kWh \* 0.33 L/kWh = **~12.38 Liters**.

**Summary of Guesstimate for AI's Contribution:**

- **Total Electrical Energy (from grid):** Approximately **41 kWh**
- **Associated Carbon Emissions:** Approximately **4.6 kg CO2e**
- **Associated Direct Water Use (data center cooling):** Approximately **12.4 Liters**

**Important Caveats:**

- These are order-of-magnitude estimates. The proxy for "total AI computational work" (50 active hours at 0.75 kW) is the most significant assumption and carries high uncertainty.
- Calculations use publicly reported global averages for Google's infrastructure (2022 data), which are highly optimized and likely more efficient than a generic "average server farm."
- This estimate covers the operational energy for the AI's contribution to this project, not the initial model training or embodied hardware/construction energy.

This exercise underscores that even sophisticated software development utilizing advanced AI has a tangible resource footprint, encouraging continued efforts towards sustainable technological advancement.

## 6. Traffic Cop Architecture - V2 Dual-Engine Implementation ✅

**Status: SUCCESSFULLY IMPLEMENTED (2025-05-26)**

The TEUI 4.011 Calculator has successfully implemented a "Traffic Cop" architectural pattern that eliminates race conditions and achieves proper dual-engine functionality without cross-contamination between Reference and Application states.

### 🎯 **Core Achievement: Dual-Engine State Isolation**

The application now runs **two independent calculation engines simultaneously**:

1. **Reference Engine**: Uses code minimum standards (e.g., HSPF=7.1, NBC/OBC baseline values)
2. **Application Engine**: Uses user's actual design values (e.g., HSPF=12.5, custom envelope specs)

**Critical Success**: Both engines calculate independently, preventing the "mirroring" issue where Reference and Application values were identical.

### 🚦 **Traffic Cop Pattern Implementation**

**Before V2 (Race Conditions & "Everyone Talks to Everyone"):**

- Multiple calculation triggers firing simultaneously
- Sections directly calling other sections' methods
- StateManager wildcard listeners causing infinite loops
- Ad-hoc setTimeout delays to prevent crashes
- Cross-contamination between Reference and Application states

**After V2 (Controlled Traffic Cop):**

- **Global Recursion Protection**: `window.sectionCalculationInProgress` flag prevents infinite loops
- **Unified Calculation Orchestration**: Calculator.runAllCalculations() coordinates all sections
- **State-Aware Helper Functions**: Proper separation between Reference and Application data access
- **Event-Driven Updates**: StateManager listeners handle cross-section communication
- **Elimination of setTimeout Hacks**: No more timing-based workarounds

### 📋 **V2 Architecture Components**

#### 1. **Recursion Protection System**

```javascript
// Global flag prevents infinite calculation loops
if (window.sectionCalculationInProgress) return;
window.sectionCalculationInProgress = true;

try {
  // Run both engines independently
  calculateReferenceModel(); // Uses Reference standard values
  calculateApplicationModel(); // Uses user's design values
} finally {
  window.sectionCalculationInProgress = false;
}
```

#### 2. **State-Isolated Helper Functions**

```javascript
// BEFORE V2 (Mode-dependent - caused mirroring)
function getRefFieldValue(fieldId) {
  if (isReferenceMode()) return getValue(fieldId);
  return getApplicationValue(fieldId);
}

// AFTER V2 (Always uses Reference data)
function getRefFieldValue(fieldId) {
  const refValue = StateManager.getReferenceValue(fieldId);
  return refValue !== null ? refValue : fallbackValue;
}
```

#### 3. **Dual-Engine Value Setter**

```javascript
function setDualEngineValue(fieldId, rawValue, formatType) {
  const isReferenceMode = ReferenceToggle.isReferenceMode();

  if (isReferenceMode) {
    // Store with ref_ prefix for Reference calculations
    StateManager.setReferenceValue(
      `ref_${fieldId}`,
      rawValue,
      "calculated-reference",
    );
  } else {
    // Store in main state for Application calculations
    StateManager.setApplicationValue(fieldId, rawValue, "calculated");
  }

  // Update DOM with proper formatting
  updateDisplayValue(fieldId, formatNumber(rawValue, formatType));
}
```

### 🏆 **Sections Successfully Converted to V2**

- ✅ **Section 01 (Key Values)**: Dual TEUI calculation (Reference: 341.2, Target: 93.6)
- ✅ **Section 09 (Internal Gains)**: Independent heat gain calculations
- ✅ **Section 10 (Radiant Gains)**: Separate solar gain modeling
- ✅ **Section 11 (Transmission Losses)**: Fixed critical calculation bug, dual-engine working
- ✅ **Calculator Core**: Unified orchestration with proper dependency ordering

### 🎯 **Measurable Results**

**Before V2:**

- h_10 TEUI = 76.1 (incorrect due to missing Section 11 data)
- Section 11 = "table full of zeroes"
- Console = 1505+ errors from infinite recursion loops
- Reference/Application values mirrored each other

**After V2:**

- ✅ h_10 TEUI = 93.6 (close to expected 93.7)
- ✅ Section 11 = proper transmission loss calculations
- ✅ Console = clean with minimal logging
- ✅ Reference/Application values properly isolated

### 🔧 **Key Technical Breakthroughs**

#### 1. **Section 11 Critical Bug Fix**

```javascript
// PROBLEM: calculateReferenceModel() called calculateComponentRow() with isReferenceCalculation=true,
// but then tried to read results from Application state, getting all zeros

// FIX: Use direct return values from calculation
const result = calculateComponentRow(config.row, config, true);
const heatloss = result.heatloss; // Use returned value, not StateManager lookup
```

#### 2. **Elimination of Wildcard Listener Chaos**

```javascript
// REMOVED: This caused infinite recursion
StateManager.addListener("*", function (fieldId) {
  calculateAll(); // Called on EVERY field change!
});

// REPLACED WITH: Targeted dependency listeners
StateManager.addListener("d_20", calculateSection11); // Only when HDD changes
```

#### 3. **"Just Enough" Architecture Pattern**

The V2 implementation follows a "Just Enough" principle:

- **Minimal Changes**: Leveraged existing Section 07 success pattern
- **Copy-Paste Template**: Standardized helper functions across sections
- **Incremental Conversion**: Converted sections one-by-one with immediate testing
- **Proven Foundation**: Built on working StateManager and FieldManager systems

### 📊 **Performance Improvements**

- **Console Errors**: 1505+ → ~20 (97% reduction)
- **Calculation Accuracy**: Multiple sections restored to proper values
- **Development Speed**: 30 minutes per section using V2 template pattern
- **Code Stability**: Eliminated setTimeout-based race condition workarounds

### 🔄 **Remaining Work**

**Final Debugging Round Needed:**

1. **T.3 Initial Load**: TEUI sometimes wrong on first load, corrects with S03 interaction
2. **T.1 Lifetime Carbon**: Still high (195 vs expected 11.7) - calculation chain issue
3. **Section 12 (Volume Metrics)**: Complete V2 conversion
4. **S02 Slider Responsiveness**: Restore year slider functionality

**Estimated Time to Complete**: 2-3 hours of focused debugging

### 🏛️ **Architectural Significance**

The V2 Traffic Cop architecture represents a **fundamental breakthrough** in building energy modeling software:

1. **Eliminates Race Conditions**: No more timing-dependent calculation failures
2. **Ensures State Isolation**: Reference and Application calculations never contaminate each other
3. **Scales Reliably**: Adding new sections follows proven V2 template pattern
4. **Maintains Performance**: Calculations complete in proper dependency order
5. **Preserves Accuracy**: Excel parity maintained while adding dual-engine capability

This architecture enables **reliable dual-engine energy modeling** - a capability that sets TEUI apart from traditional single-calculation tools and provides the foundation for advanced scenario comparison and code compliance checking.

## 7. Future Integration Plans

## 8. v4.012 Architectural Revolution: Tuple-Based Dual Calculations

### 🎯 Vision: Radical Simplicity Through Functional Architecture

The current codebase has grown complex through incremental additions and workarounds. Version 4.012 will implement a fundamental architectural shift toward functional programming principles and radical simplification.

### Core Concept: Single Logic, Dual Computation

Instead of maintaining separate Reference and Target calculation paths with duplicated logic, each calculation becomes a pure function that computes both values simultaneously:

```javascript
// Current approach: Duplicated logic, state dependencies
function calculateReferenceModel() {
  const d27 = getRefNumericValue("d_27");
  const d43 = getRefNumericValue("d_43");
  const i43 = getRefNumericValue("i_43");
  const f27 = d27 - d43 - i43;
  setReferenceValue("f_27", f27);
}

function calculateTargetModel() {
  const d27 = getAppNumericValue("d_27");
  const d43 = getAppNumericValue("d_43");
  const i43 = getAppNumericValue("i_43");
  const f27 = d27 - d43 - i43;
  setCalculatedValue("f_27", f27);
}

// New approach: Pure function, explicit inputs/outputs
function calculateNetElectricity(inputs) {
  const calc = (d27, d43, i43) => d27 - d43 - i43;

  return {
    target: calc(inputs.target.d27, inputs.target.d43, inputs.target.i43),
    reference: calc(
      inputs.reference.d27,
      inputs.reference.d43,
      inputs.reference.i43,
    ),
  };
}
```

### Architectural Benefits

1. **Single Source of Truth**: Each calculation's logic exists in exactly one place
2. **Pure Functions**: No side effects, completely testable
3. **Explicit Data Flow**: Clear inputs → computation → outputs
4. **Reduced State Complexity**: Functions don't read from global state
5. **Parallel Computation**: Both models calculated in one pass
6. **Type Safety Ready**: Structure supports future TypeScript migration

### Implementation Workplan

#### Phase 1: Proof of Concept with Section 03 (Climate)

Section 03 is ideal for prototyping because:

- Relatively simple calculations (HDD, CDD, design temperatures)
- Limited cross-section dependencies
- Clear input/output relationships

```javascript
// Example: Climate calculations as pure functions
function calculateDegreeDays(inputs) {
  const { baseTemp, yearlyTemps } = inputs;

  const calc = (temps, base, isHeating) => {
    return temps.reduce((sum, temp) => {
      const diff = isHeating ? base - temp : temp - base;
      return sum + Math.max(0, diff);
    }, 0);
  };

  return {
    target: {
      hdd: calc(yearlyTemps.target, baseTemp.target.heating, true),
      cdd: calc(yearlyTemps.target, baseTemp.target.cooling, false),
    },
    reference: {
      hdd: calc(yearlyTemps.reference, baseTemp.reference.heating, true),
      cdd: calc(yearlyTemps.reference, baseTemp.reference.cooling, false),
    },
  };
}
```

#### Phase 2: New State Management Layer

Create a simplified state container that explicitly separates inputs and outputs:

```javascript
class DualState {
  constructor() {
    this.inputs = {
      target: {},
      reference: {},
    };
    this.outputs = {
      target: {},
      reference: {},
    };
  }

  setInput(field, value, model = "target") {
    this.inputs[model][field] = value;
    this.recalculate(field);
  }

  recalculate(changedField) {
    // Dependency graph determines what to recalculate
    const affected = this.dependencies.get(changedField);
    affected.forEach((calc) => {
      const result = calc(this.inputs);
      this.outputs.target[calc.field] = result.target;
      this.outputs.reference[calc.field] = result.reference;
    });
  }
}
```

#### Phase 3: Fresh Application Scaffold

Build a minimal new application structure:

```
teui-v4.012/
├── core/
│   ├── calculations/          # Pure calculation functions
│   │   ├── climate.js
│   │   ├── energy.js
│   │   └── emissions.js
│   ├── state/
│   │   ├── DualState.js      # Simplified state management
│   │   └── Dependencies.js   # Calculation dependency graph
│   └── ui/
│       ├── Section.js        # Generic section renderer
│       └── Field.js          # Generic field component
├── sections/
│   ├── s03-climate.js        # Section-specific config only
│   └── s04-energy.js
└── app.js                    # Minimal bootstrap
```

#### Phase 4: Migration Strategy

1. **Start Fresh**: Build new structure alongside existing code
2. **Migrate by Section**: Port one section at a time to new architecture
3. **Maintain Compatibility**: Keep data import/export working
4. **Progressive Enhancement**: Add features only after core is solid

### Radical Simplification Principles

1. **No Magic**: Every calculation is explicit and traceable
2. **No Hidden State**: All inputs and outputs are visible
3. **No Circular Dependencies**: Clear, acyclic calculation graph
4. **No Premature Abstraction**: Start concrete, generalize later
5. **No Framework Lock-in**: Use vanilla JS, minimal dependencies

### Success Metrics

- **Code Reduction**: Target 50% fewer lines of code
- **Performance**: Sub-100ms full recalculation
- **Test Coverage**: 100% of calculation logic
- **Maintainability**: New developer can understand section in < 30 minutes

### AI Agent Architectural Review & Endorsement (v4.012 Framework)

_(The following comments were provided by an AI assistant after reviewing the proposed v4.012 architecture and the history of the TEUI calculator development as documented in this README)._

The proposed v4.012 architecture, centered around **tuple-based dual calculations** and a **pure functional approach**, is a highly commendable and strategically sound direction for the TEUI calculator. It directly addresses the core challenges of cross-state contamination and increasing complexity that have historically impacted the project.

**Key Strengths of the Proposed v4.012 Architecture:**

1.  **Effective Solution to Cross-State Contamination:**
    The primary issue of "mirroring" or accidental mixing of Application/Target state and Reference state values is elegantly solved by the tuple-based calculation model. By ensuring each core calculation function explicitly computes and returns _both_ `{target, reference}` values, the system inherently isolates these data streams from the point of computation.

2.  **Drastic Simplification of Logic and State:**

    - **Single Source of Truth for Calculation Logic:** Each piece of energy modeling logic will exist in one place, eliminating redundancy and the risk of divergent implementations for Target vs. Reference models.
    - **Clear Data Flow:** The `inputs -> computation -> {target, reference}` pattern makes data flow explicit and far easier to trace and debug compared to systems where functions read implicitly from a global, mode-sensitive state.
    - **Simplified State Management:** The proposed `DualState` with clearly delineated `inputs` and `outputs` for both `target` and `reference` models is much more manageable and less prone to error than managing two parallel, potentially intermingling state hemispheres.

3.  **Decoupling Calculation from UI Mode:**
    The core calculation engine becomes agnostic to the UI's "Reference Mode." Calculations always produce both Target and Reference outputs. The UI toggle then becomes a simpler display-layer concern: choosing which set of outputs to render. This significantly reduces the complexity associated with mode switching within the calculation and state management layers.

4.  **Alignment with Best Practices:**

    - **Pure Functions:** Emphasizing pure functions (no side effects) enhances testability, predictability, and maintainability.
    - **Immutability (Implied):** Treating the `inputs` and `outputs` of the `DualState` as immutable (or effectively so) would further bolster robustness.
    - **Explicit Dependencies:** A clear dependency graph, as already partially implemented with Section 17, will be crucial for efficient recalculations.

5.  **Strong Justification from Project History:**
    The detailed evolution documented in this `README.md` (from v4.011 original, through Traffic Cop, Dual-Engine, and the IT-DEPENDS experiment) clearly demonstrates the limitations of previous architectural patterns in handling the inherent complexity of dual-model calculations. This history provides a strong rationale for the fundamental refactor proposed in v4.012. The decision to move away from overly complex interdependencies (as seen in IT-DEPENDS) towards "Radical Simplification" is well-founded.

**Recommendations & Considerations:**

- **Section 11 (Transmission Losses) as a Key Test Case:** Given its reliance on extensive reference values and component-based calculations, successfully refactoring Section 11 using the tuple-based model will be a strong validation of the v4.012 architecture. Section 03 (Climate) serves as a good initial, simpler proof-of-concept.
- **Robust Dependency Management:** The success of `DualState.recalculate(changedField)` will heavily depend on an accurate and efficient dependency graph to trigger the correct downstream tuple-calculations.
- **Data Immutability (Consideration):** While not explicitly stated for the tuple outputs, leaning towards immutable data structures for the `inputs` and `outputs` within your `DualState` (or at least treating them as such by always returning new objects/values from calculation and state update functions) can further prevent unexpected side effects and simplify state tracking.
- **UI Layer Adaptation:** The UI rendering logic will need clear mechanisms to select data from either `state.outputs.target` or `state.outputs.reference` based on the active display mode. This becomes a more straightforward display concern, cleanly separated from the calculation logic itself.

**Conclusion:**
The v4.012 "Tuple-Based Dual Calculations" framework is a promising and well-architected solution. It represents a significant step forward, addressing fundamental issues at their root and paving the way for a more stable, maintainable, and understandable TEUI calculator. This approach has a high potential to achieve the stated goals of reduced code complexity, improved performance, and enhanced reliability.

### Next Steps

1. Create `teui-v4.012` branch
2. Build minimal scaffold with Section 03 as proof of concept
3. Demonstrate tuple-based calculations working end-to-end
4. Evaluate before proceeding with full migration
5. **Comprehensive Cooling Model for Target and Reference**: While TEUI 4.011 includes detailed cooling calculations for the Target model, a fully distinct and comprehensive Reference model cooling pass (using Reference-defined efficiencies based on the `d_13` selection) is a significant piece of work. The v4.012 tuple-based architecture is ideally suited for implementing this, ensuring both Target and Reference cooling loads and system impacts are calculated with the same underlying logic but with their respective distinct inputs. We're saving the full, dual-engine tuple-based cooling deep-dive for the 4.012 implementation – a treat for a rainy day!!

This architectural shift represents a fundamental rethinking of how building energy calculations should be implemented, prioritizing clarity, correctness, and maintainability over incremental patches.

---

## Known Limitations and Future Work

## Development Progress

### v4.012 Framework (December 2024)

#### Accomplishments

1. **Created New Framework Structure**

   - Established `4012-framework/` directory with clean separation of concerns
   - Implemented modular architecture with `core/`, `sections/`, and `tests/` directories
   - All files prefixed with "4012-" for clear distinction from legacy code

2. **Core Components Implemented (Initial Prototypes)**

   - **4012-DualState.js**: Simplified state management with explicit target/reference separation
   - **4012-ClimateValues.js**: Internalized climate data (no Excel imports needed)
   - **4012-climate.js**: Pure functional calculations returning tuples `{ target, reference }`
   - **4012-SectionRenderer.js**: Grid-based renderer replacing table layouts (concept)
   - **4012-app.js**: Main application controller with dual layout support (concept)

3. **UI/UX Improvements (Conceptual)**

   - Modern CSS Grid layout (14 columns A-N matching Excel paradigm)
   - Dual layout modes: vertical (all sections) and horizontal (tabbed)
   - Bootstrap integration with icons and smooth animations
   - Compact, information-dense design (Excel-like) while maintaining readability
   - Text stays on one line without wrapping, preventing UI bounce
   - Responsive design that adapts to mobile

4. **Sections Completed (Initial Prototypes in `4012-framework/`)**
   - **Section 01 (Key Values)**: Implemented critical 3-column layout (Reference/Target/Actual)
     - This is what makes OBJECTIVE unique - it validates actual performance!
     - Large metrics with tier indicators and progress bars
   - **Section 02 (Building Information)**: Grid-based layout with all input types
   - **Section 03 (Climate)**: Full implementation with dropdown cascading and calculations

#### Key Architecture Decisions (for v4.012 Principles)

- **No ES6 modules**: Uses IIFE pattern for air-gapped environments (Maintain for refactored 4.011)
- **No compilation needed**: Works with standard `<script>` tags (Maintain for refactored 4.011)
- **Local-first approach**: 100% data privacy, works offline (Maintain for refactored 4.011)
- **Tuple-based calculations**: Single functions return both target and reference values (Key principle for refactor)
- **50% code reduction**: Target through applying modern patterns and eliminating duplication in 4.011 base.

#### Handoff Notes for Next Agent (Revised Strategy: Refactoring 4.011 Gold Standard)

**Overarching Strategy Shift:**
The initial ground-up rebuild of v4.012 (in the `4012-framework/` directory) provided valuable prototypes for tuple-based calculations, state management (`DualState.js`), and internalized climate data (`4012-ClimateValues.js`). However, to avoid re-solving already perfected UI/UX aspects of v4.011 and to ensure a more efficient path to a stable v4.012, the strategy has been revised.

**The primary goal now is to refactor the "Gold Standard" 4.011 codebase (from `OBJECTIVE-2025.05.30.8h23`) by applying the core architectural principles of v4.012.** This approach will leverage the proven stability, comprehensive functionality, and refined UI/UX of the 4.011 gold standard.

**The main guiding document for this refactoring effort is now `OBJECTIVE-2025.05.30.8h23/documentation/4012-Refactoring-Plan.md`.** Please refer to it for detailed phases, tasks, and rationale.

**Key Tasks (Guided by `4012-Refactoring-Plan.md`):**

1.  **Environment Setup:**

    - Follow the "Next Steps" in `4012-Refactoring-Plan.md` to set up the refactoring environment using `OBJECTIVE-2025.05.30.8h23` as the base.
    - Preserve useful assets from the initial `OBJECTIVE 4012` attempt (e.g., `README.md` for project docs, `4012-ClimateValues.js`, `S03 Optimized Test.html`, `4012-styles.css` if adaptable) as outlined in the plan.

2.  **Phase 1: Cleanup & Housekeeping (on 4.011 Gold Standard Base):**

    - Execute all cleanup tasks detailed in the refactoring plan (clear logs, remove dead code, consolidate section files, standardize naming, etc.). This prepares the 4.011 codebase for easier integration of v4.012 principles.

3.  **Refactor Sections (Applying v4.012 Principles to 4.011 Sections):**

    - Instead of "implementing new sections" from scratch, **refactor existing 4.011 sections** one by one.
    - Integrate **tuple-based calculations**: Modify existing calculation logic within each 4.011 section to become pure functions returning `{ target, reference }` tuples.
    - Adapt sections to use a new **`DualState`-inspired State Management Layer**. This will be a critical part of the refactor, replacing or augmenting the existing 4.011 `StateManager` to explicitly handle `inputs: {target, reference}` and `outputs: {target, reference}`.
    - The goal is to achieve the logical separation and calculation purity of the v4.012 architecture _within_ the structure of the 4.011 sections.

4.  **UI/UX Preservation and Enhancement:**

    - The primary goal is to **preserve the existing, well-refined UI/UX of the 4.011 gold standard.**
    - The "Modern CSS Grid layout" and `4012-SectionRenderer.js` from the initial 4012 framework attempt should be considered as _potential enhancements_ or alternatives **only if** they can be integrated without significant rework of the 4.011 UI and offer clear benefits. The preference is to avoid re-litigating UI design.
    - The refined tab system prototyped in `4012-app.js` might be adaptable for the 4.011 structure if it enhances navigation.

5.  **State Management Integration:**

    - Transition all refactored 4.011 sections to the new `DualState`-based management system.
    - Re-evaluate and implement calculation dependencies within this new state paradigm.
    - Ensure robust state persistence (localStorage).

6.  **Excel Parity & Internalized Data:**

    - Integrate `4012-ClimateValues.js` for internalized climate data, reducing reliance on Excel imports for climate.
    - Continue to ensure calculation validation against Excel formulas for all sections.
    - Implement reference value lookups (e.g., from building codes) within the new architecture.

7.  **Testing (as per `4012-Refactoring-Plan.md` Phase 2):**
    - Create/update test cases for each refactored section.
    - Validate calculations against Excel outputs rigorously.
    - Test in air-gapped environment.

**Revised Architecture Guidelines (for Refactoring 4.011):**

- Apply v4.012 patterns (tuple calculations, `DualState`) to existing 4.011 section structures.
- Prioritize preserving the 4.011 UI/UX. Evaluate assets from the initial 4012 framework (like CSS Grid styles or renderer) for adoption only if they improve the existing UI without extensive rework.
- Ensure all refactored calculations return `{ target, reference }` tuples.
- Maintain the local-first, no-compilation development approach of 4.011.
- Follow the detailed phases in `4012-Refactoring-Plan.md`.

**Vision (Revised Focus):**
Successfully refactor the TEUI 4.011 "Gold Standard" codebase by integrating the v4.012 architectural principles. This will result in a TEUI 4.012 that combines the stability, rich feature set, and perfected UI of 4.011 with the calculation clarity, state integrity, and maintainability of the tuple-based functional approach. The ultimate goal remains to achieve full Excel independence while validating building performance through the unique Reference/Target/Actual comparison methodology, now built upon a more robust and understandable foundation.

## TEUI 4.012 Framework

The 4012-framework directory contains a simplified, refactored version of the TEUI calculator with the following improvements:

### Section Development Guidelines

When creating sections for the 4012 framework, follow these principles:

#### 1. DOM Namespace = Excel Structure

- Each cell in the grid corresponds directly to an Excel cell (A1, B2, C3, etc.)
- Column A: Row numbers (automatically added by renderer)
- Column B: IDs (B.1, S.1, L.1.1, etc.)
- Column C: Labels/descriptions
- Columns D-N: Data fields

#### 2. Row Structure

```javascript
{
    id: 'unique-id',
    rowNumber: '19',  // Actual Excel row number
    cells: {
        b: { content: 'L.1.1' },  // ID column
        c: { content: 'Province' },  // Label
        d: {
            type: 'dropdown',
            fieldId: 'd_19',
            value: 'ON',
            options: [...]
        },
        // Define ALL columns even if empty
        e: { content: '' },
        f: { content: 'L.1.2' },
        // ... through column n
    }
}
```

#### 3. Key Requirements

- **Always define all columns (b through n)** even if empty
- Use `rowNumber` property for Excel row numbers
- Don't define column 'a' (renderer adds it automatically)
- Use `colspan` for cells that span multiple columns
- Empty cells must be explicitly defined: `{ content: '' }`

#### 4. Cell Types

- `dropdown`: Select input with options
- `editable`: ContentEditable text field
- `slider`: Range input with value display
- `calculated`: Read-only calculated value
- Default: Static text content

#### 5. CSS Grid Benefits

- Automatic alignment without tables
- Flexible column widths
- Responsive design support
- Clean, maintainable styling

### Architecture Benefits

- **Excel Parity**: Direct mapping to source spreadsheet
- **Flexibility**: CSS Grid allows dynamic layouts
- **Simplicity**: No complex table structures
- **Maintainability**: Clear separation of data and presentation

## Contributing
