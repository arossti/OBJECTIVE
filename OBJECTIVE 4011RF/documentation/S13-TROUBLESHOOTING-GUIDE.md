# **S13 TROUBLESHOOTING GUIDE - DUAL-STATE REFERENCE MODE**

**Date**: Aug 26, 2025.
**Status**: **🚨 ANALYSIS COMPLETE - REQUIRES FRESH APPROACH**
**Section**: S13 (Space Heating & Cooling)  
**Issue**: State contamination between Target and Reference modes **PERSISTS**

---

## **🎯 OBJECTIVE**

**ONGOING**: Fix S13 Reference mode "stuck values" and state mixing issues. Despite implementing S11 and S12 patterns, **state contamination persists** where Target mode changes incorrectly affect Reference values in downstream sections (S04→S15→S01).

---

## **📊 S13 SECTION OVERVIEW**

### **Function**: Space Heating & Cooling Energy Calculations
### **Key Calculations**:
- **Heating Energy**: Based on building loads and system efficiency
- **Cooling Energy**: Climate-dependent cooling requirements  
- **System Efficiency**: Heat pump COP, equipment performance
- **Key Outputs**: Multiple calculated fields feeding S14→S15→S04

### **External Dependencies**:
- **S03 Climate**: `d_20` (HDD), `d_21` (CDD), `d_22` (GF HDD), `h_22` (GF CDD)
- **S11 Transmission**: Building envelope losses and gains
- **S12 Ventilation**: Ventilation energy requirements
- **Upstream Flow**: Major consumer of S11/S12 values, provides to S14→S15

### **System Complexity**:
- **Most Complex Section**: S13 has the most sophisticated HVAC calculations
- **Multiple Calculation Engines**: Heating, cooling, heat pump, auxiliary systems
- **High Climate Sensitivity**: Heavily dependent on HDD/CDD climate data

---

## **🚨 ANALYSIS FINDINGS - AUG 26, 2025 (SESSION 2)**

### **🔍 Root Cause Confirmed: The "Current State Anti-Pattern"**

A detailed analysis of the fresh logs confirms the precise source of state contamination. The issue is a classic **"Current State Anti-Pattern"** as defined in the `DUAL-STATE-CHEATSHEET.md`.

**The Contamination Mechanism:**
1.  The `calculateReferenceModel()` function in S13 calls helper functions.
2.  Inside these helpers, critical input values (like `j_115` for AFUE) are read using the ambiguous helper `getFieldValue('j_115')`.
3.  `getFieldValue()` does not differentiate between modes; it reads whatever value is currently in the global `StateManager` or the DOM, which, during a Target mode operation, is the **Target value**.
4.  The Reference calculation then proceeds using contaminated Target inputs, leading to incorrect Reference results (`ref_h_115`, `ref_f_115`).
5.  These incorrect Reference results are written to the `StateManager`, triggering S04's listeners and causing the contaminated TEUI to appear downstream in S01.

**Why Electric/Heatpump Worked**: This specific contamination path affects Gas/Oil calculations because they depend on the `j_115` (AFUE) value. Electric and Heatpump systems do not, so they were not affected by this particular bug.

**Architectural Compliance**: This violates Core Principle #3: State Sovereignty. The Reference engine is not isolated and is incorrectly reading from the Target state hemisphere.

---

## **📋 RECOMMENDED FRESH APPROACH: The S12 Pattern**

The previous attempts failed because they did not address the root cause within the calculation logic. The next attempt must apply the proven, architecturally compliant solution from the successful S12 refactor.

### **🔧 The Workplan**

1.  **Refactor Calculation Functions**: All calculation helpers (`calculateHeatingSystem`, `calculateCoolingSystem`, `calculateCOPValues`, etc.) must be refactored to be pure and mode-aware.
    -   They must **not** use `getFieldValue()` or `getNumericValue()` for any section-specific inputs.
    -   All inputs must be read explicitly from the correct state object (`TargetState` or `ReferenceState`) using the `getSectionValue(fieldId, isReferenceCalculation)` helper.
    -   The functions must `return` their results as objects, not call `setCalculatedValue` directly (no side effects).
2.  **Create Explicit Data Flow**: The orchestrator functions (`calculateTargetModel` and `calculateReferenceModel`) must be updated to chain the pure functions together, passing the returned result objects as parameters to the next function in the sequence.
3.  **Handle DOM Updates Separately**: A dedicated function (`updateTargetModelDOMValues`) will be responsible for taking the final results from the `calculateTargetModel` chain and updating the UI. Reference values do not need a dedicated DOM update function as they are only written to the `StateManager`.

### **⚠️ CRITICAL CONSTRAINTS**
1. **NO AMBIGUOUS HELPERS**: `getFieldValue` and `getNumericValue` must be eliminated from the core calculation logic for section-specific values.
2. **MAINTAIN S12 PATTERN**: Adhere strictly to the explicit data flow pattern.
3. **START FRESH**: Begin with the clean, reverted `4011-Section13.js` file.

---

## **💾 RESET POINT** 

**Backup created**: `S13-RF.js` contains all attempted fixes from the previous session and has been removed from the load sequence.
**Clean state**: `S13.js` has been restored to its pre-debug state.
**Issue persists**: The contamination pattern exists in the clean version, confirming the issue is fundamental.

---

## **🚨 FAILED ATTEMPT DOCUMENTED - AUG 26, 2025 (SESSION 3)**

### **⏰ Full Day Investigation Summary**

**Date**: Aug 26, 2025  
**Duration**: Full working session  
**Approach**: S12 Explicit Data Flow Pattern implementation  
**Result**: **FAILED - Made contamination worse**  

### **🔍 What We Attempted**

1. **Fixed Current State Anti-Pattern**: Changed `getFieldValue("d_113")` and `getFieldValue("j_115")` to `TargetState.getValue()` calls
2. **Made Shared Functions Mode-Aware**: Updated all calculation helpers to use explicit state access instead of ambiguous helpers
3. **Applied Explicit Data Flow**: Converted all `getFieldValue()` calls in calculation logic to proper state isolation
4. **Added FieldManager Integration**: Exported ModeManager to prevent FieldManager bypass

### **🚨 Why It Failed**

**The contamination is DEEPER than calculation-level fixes can address:**

1. **Reference State Persistence Issue**: ReferenceState.getValue("d_113") ALWAYS returns "Gas" regardless of Reference mode changes
2. **State Object Corruption**: The dual-state objects themselves are not properly isolated 
3. **Excel Calculation Mismatch**: h_10 TEUI values no longer match Excel after our changes
4. **Complex Interdependencies**: S13 has too many moving parts to fix atomically

### **📊 Evidence from Logs**

```
Line 5017: [Section13] 🔥 REF HEATING: systemType="Gas" (STUCK!)
Line 5025: [S13] TGT HEATING: Oil, HSPF=12.5 (Target working)
```

**Key Finding**: Reference calculations are fundamentally stuck reading stale state values, suggesting the issue is in state object initialization/persistence, not calculation logic.

### **🎯 REVISED APPROACH REQUIRED**

**ABANDON the comprehensive fix approach. The contamination is too systemic.**

**NEW STRATEGY: Ultra-focused incremental fixes**

1. **Step 1**: Fix ONLY Target mode `d_113` → `f_115`/`h_115` propagation to S04
   - Ignore Reference mode completely for now
   - Focus solely on Excel compliance for Target calculations
   - Ensure h_10 TEUI matches Excel baseline

2. **Step 2**: Once Target mode is rock-solid, investigate Reference state persistence in isolation
   - Don't touch Target calculation logic
   - Focus only on why ReferenceState.getValue() returns stale data

3. **Step 3**: Only after both modes work independently, address cross-contamination

### **⚠️ CRITICAL LESSONS LEARNED**

- **Section 13 is too complex** for the dual-state patterns that worked on S11/S12
- **State mixing fixes require working backwards** from h_10 calculation accuracy
- **Excel compliance must be maintained** throughout any architectural changes
- **One problem at a time** - comprehensive fixes fail in complex sections

### **📋 IMMEDIATE NEXT STEPS**

1. ✅ **Revert S13 to stable state** (COMPLETED)
2. **Focus on Target mode only**: Ensure `d_113` changes properly update `f_115`/`h_115` for Gas/Oil systems
3. **Validate Excel compliance**: h_10 calculations must match gold standard
4. **Document narrow success** before attempting Reference mode

---

## **🔧 RECOMMENDED MICRO-FIX APPROACH**

**Next agent should ONLY focus on:**
- Target mode fuel type changes (d_113)  
- Correct f_115/h_115 propagation to S04
- Excel h_10 compliance
- IGNORE Reference mode completely
