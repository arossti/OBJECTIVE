# 4012-COOLING.md: Cooling Engine Simplification Workplan

**Date**: Sept 26, 2025 - 10:25pm  
**Status**: **CRITICAL ARCHITECTURAL SIMPLIFICATION** - Extract cooling engine from S13 beast  
**Goal**: Make cooling calculations **AI-agent friendly** and **maintainable** without breaking Excel validation

---

## 🚨 **PROBLEM STATEMENT: THE S13 COOLING BEAST**

### **Current Issues:**
- **S13 has become unmaintainable** (4,137 lines with internalized cooling engine)
- **30+ cooling parameters** in nested contexts and shared state objects
- **Weeks of AI agent explanation** required for every refactor attempt
- **Every S13 refactor hits cooling engine wall** (calculateCoolingSystem breaking point)
- **"Dark matter" complexity** blocks architectural improvements

### **✅ WHAT WORKS (PRESERVE AT ALL COSTS):**
- **Excel validation complete** ✅ (cooling calculations match COOLING-TARGET.csv)
- **Tight ventilation integration** ✅ (latent load factors, free cooling, etc.)
- **Psychrometric accuracy** ✅ (humidity ratios, wet bulb calculations)
- **Complex cooling system logic** ✅ (COP calculations, system type handling)

---

## 🎯 **SOLUTION: EXCEL PATTERN REPLICATION**

### **Excel Approach (What We Should Copy):**
- **COOLING-TARGET.csv**: Target model cooling calculations (isolated state)
- **COOLING-REFERENCE.csv**: Reference model cooling calculations (isolated state)  
- **Clean separation**: Each worksheet has its own variables, no state mixing
- **Simple integration**: S13 references appropriate worksheet based on model

### **JavaScript Implementation:**
```javascript
// 4012-CoolingTarget.js - Target model cooling calculations
const CoolingTarget = {
  // Clear variable names from COOLING-TARGET.csv
  nightTimeTemp: 20.43,        // A3
  coolingSeasonMeanRH: 0.5585, // A4  
  latentLoadFactor: 0,         // A6 (calculated)
  freeCoolingLimit: 0,         // A33 (calculated)
  
  calculateAll(inputs) {
    // Pure functions with clear Excel formula references
    this.latentLoadFactor = this.calculateLatentLoadFactor();     // A6
    this.freeCoolingLimit = this.calculateFreeCoolingLimit();     // A33
    this.daysActiveCooling = this.calculateDaysActiveCooling();   // E55
    return this.getResults();
  }
};

// 4012-CoolingReference.js - Reference model cooling calculations  
const CoolingReference = {
  // Same structure, different default values from building codes
  nightTimeTemp: 20.43,        // Same as Target
  coolingSeasonMeanRH: 0.5585, // Same as Target
  // ... Reference-specific overrides from building codes
};

// S13 Integration (SIMPLE):
const targetCooling = CoolingTarget.calculateAll(targetInputs);
const referenceCooling = CoolingReference.calculateAll(referenceInputs);
```

---

## 📋 **IMPLEMENTATION WORKPLAN**

### **Phase 1: Restore Proven Chassis (SMART APPROACH)**
1. **✅ Copy ARCHIVE 4011-Cooling.js** to current OBJECTIVE 4011RF as **4012-Cooling.js** ✅
   - **Proven working foundation** from 4 months ago
   - **Simple, clean architecture** before S13 internalization
   - **Excel validated calculations** already implemented
   - **Renamed to avoid confusion** with ARCHIVE original

2. **✅ Create S13 Backup** - **4012-Section13.js** ✅
   - **Preserve current working S13** with 9/33 Pattern 1 conversions
   - **Safe fallback** if cooling extraction goes wrong
   - **Working baseline** for comparison and validation

3. **CAREFULLY Extract S13 Improvements** to 4012-Cooling.js:
   - **User-editable COP** for Electricity/Gas/Oil heating systems (was fixed at 2.7)
   - **Complete m_124 calculation** (Days Active Cooling - now working in S13)
   - **Enhanced ventilation integration** (improvements from S13 development)

4. **🚨 CRITICAL: Avoid Duplicate Defaults (CHEATSHEET Compliance)**
   - **Building volume/area**: Should ONLY come from S02/S12, NOT cooling files
   - **Climate data**: Should ONLY come from S03, NOT cooling files  
   - **Single source of truth**: Cooling engine reads from StateManager, never hardcodes
   - **NO duplicate defaults** across files (violates CHEATSHEET Phase 5)

5. **Validate Hybrid Results**
   - **Test 4012-Cooling.js** against current S13 cooling engine
   - **Verify Excel parity** maintained with ported improvements
   - **Ensure no regression** from proven ARCHIVE baseline

### **Phase 2: Reference Model Creation**
1. **Create 4012-CoolingReference.js**
   - **Copy structure** from CoolingTarget.js
   - **Apply building code overrides** (different setpoints, efficiencies, etc.)
   - **Separate state isolation** - no contamination possible

### **Phase 3: S13 Integration**
1. **Replace complex cooling engine** in S13 with simple calls:
   ```javascript
   // OLD: 30+ parameters, nested contexts, shared state
   const results = runIntegratedCoolingCalculations(isReferenceCalculation, coolingContext);
   
   // NEW: Clean, simple, state-isolated
   const results = ModeManager.currentMode === "reference" 
     ? CoolingReference.calculateAll(referenceInputs)
     : CoolingTarget.calculateAll(targetInputs);
   ```

---

## 🎯 **STRATEGIC BENEFITS**

### **AI Agent Friendly:**
- ✅ **Clear variable names** (nightTimeTemp vs coolingContext.nightTimeTemp)
- ✅ **Documented equations** (every function has Excel cell reference)
- ✅ **Simple integration** (2 function calls vs 30+ parameter passing)
- ✅ **No weeks of explanation** needed for future agents

### **Architectural Benefits:**
- ✅ **State isolation by design** (separate files = impossible contamination)
- ✅ **Excel pattern compliance** (mirrors worksheet separation)
- ✅ **Maintainable complexity** (cooling logic in dedicated files)
- ✅ **S13 simplification** (removes 1000+ lines of cooling complexity)

### **Refactoring Benefits:**
- ✅ **No more cooling wall** (simple function calls easy to convert to Pattern 1)
- ✅ **Clear dual-state path** (Target vs Reference files)
- ✅ **Testable components** (cooling engine testable in isolation)

---

## 📚 **RESOURCES AVAILABLE**

### **Excel Source Material:**
- **COOLING-TARGET.csv** (ARCHIVE/sources of truth 3037/) - Complete formulas with row numbers
- **Original 4011-Cooling.js** (ARCHIVE/4011GS/) - Simpler standalone implementation
- **Excel validation data** - Known good values for testing

### **Current Working Implementation:**
- **S13 cooling engine** - Excel validated, complex but functional
- **Integration patterns** - Ventilation, latent load factors, system COP logic
- **State management** - How cooling values flow to/from StateManager

---

## 🔧 **IMPLEMENTATION NOTES**

### **DO NOT RE-ENGINEER:**
- ❌ **Psychrometric formulas** (regulatory approved)
- ❌ **Ventilation integration** (latent load factors)
- ❌ **Excel calculation parity** (months of validation)

### **DO SIMPLIFY:**
- ✅ **Variable names** (clear, Excel-referenced)
- ✅ **Function organization** (one function per Excel calculation)
- ✅ **State isolation** (separate Target/Reference files)
- ✅ **Documentation** (every equation documented with Excel reference)

### **TIGHT VENTILATION INTEGRATION PRESERVED:**
- **Latent Load Factor** (A6) - remains integrated with ventilation calculations
- **Free Cooling Limit** (A33) - remains connected to ventilation rates
- **Days Active Cooling** (E55) - remains part of cooling system sizing
- **Integration points** clearly documented and preserved

---

## 🎯 **SUCCESS CRITERIA**

1. **Excel Parity Maintained** ✅ (identical results to current S13 cooling engine)
2. **AI Agent Friendly** ✅ (clear variables, documented equations, simple integration)
3. **State Isolation** ✅ (separate Target/Reference files eliminate contamination)
4. **S13 Simplification** ✅ (removes cooling complexity, enables Pattern 1 completion)
5. **Maintainable Architecture** ✅ (no more weeks of explanation needed)

---

## 📋 **NEXT SESSION PRIORITIES**

**Tomorrow's Work:**
1. **Create 4012-CoolingTarget.js** - Extract from S13, clear variables, Excel documentation
2. **Validate against current** - Ensure identical results
3. **Create 4012-CoolingReference.js** - State-isolated Reference version
4. **Test S13 integration** - Simple function calls replace complex engine
5. **Complete S13-ENDGAME** - With cooling engine simplified, Pattern 1 conversions should be trivial

**Strategic Goal**: **Transform the cooling "dark matter" into transparent, maintainable components** that any AI agent can understand and modify safely.

**This approach solves the core problem**: Make cooling calculations **as simple as Excel worksheets** while preserving all working functionality and tight ventilation integration.
