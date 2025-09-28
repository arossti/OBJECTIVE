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

## 📊 **IMPLEMENTATION PROGRESS** _(Sept 27, 2025)_

### **✅ MAJOR ACHIEVEMENTS COMPLETED:**

#### **🏗️ Cooling.js Architecture Established:**
- ✅ **4012-Cooling.js created** with ARCHIVE chassis foundation
- ✅ **StateManager integration** complete (100% compliance with README.md)
- ✅ **Calculator.js integration** - Cooling.js added to calcOrder sequence
- ✅ **CHEATSHEET compliance** - eliminated duplicate defaults, single source of truth
- ✅ **S08 i_59 integration** - dynamic indoor RH% for latent load calculations

#### **🔧 S13 Cooling Function Migration (5/30+ functions):**
- ✅ **calculateDaysActiveCooling** → `getCoolingDaysActive()` (m_124)
- ✅ **calculateFreeCoolingLimit** → `getCoolingFreeCoolingLimit()` (h_124)
- ✅ **calculateWetBulbTemperature** → `getCoolingWetBulbTemperature()`
- ✅ **calculateAtmosphericValues** → `getCoolingAtmosphericValues()`
- ✅ **calculateHumidityRatios** → `getCoolingHumidityRatios()`

#### **🔄 Cross-Section Integration:**
- ✅ **S14 d_129/m_129** - Moved from S14/S13 to Cooling.js for tight integration
- ✅ **Competition elimination** - S13 cooling functions commented out
- ✅ **Excel formulas implemented** - d_117, d_129, m_129 calculations

### **🚨 CURRENT ISSUES REQUIRING RESOLUTION:**

#### **1. Cooling Calculations Producing 0s:**
- **Symptom**: All cooling values (h_124, m_124, d_129, m_129) show as 0
- **Impact**: h_10 = 90.9 (no cooling benefits), Row 124 all zeros
- **Logs show**: Cooling.js runs but calculations fail

#### **2. Free Cooling NaN Issue:**
- **Critical log**: `m_129=NaN = MAX(0, d129(53291.32) - h124(NaN) - d123(8673.69))`
- **Root cause**: h_124 (free cooling limit) calculating as NaN
- **Impact**: Breaks entire cooling calculation chain

#### **3. Formula Integration Issues:**
- **ARCHIVE chassis** has simplified approximations vs **S13 complex Excel formulas**
- **Need**: Port exact S13 calculations to replace ARCHIVE simplifications
- **Challenge**: Complex psychrometric formulas from S13 need careful extraction

### **🚨 CRITICAL ARCHITECTURAL PIVOT DECISION** _(Sept 27, 2025 - 11:45pm)_

**FUNDAMENTAL PROBLEM IDENTIFIED:**
- **4012-Cooling.js approach failing** - JavaScript errors, 0 calculations, complex debugging
- **Advanced dual-state S13 too complex** - 4,137 lines, calculateCoolingSystem breaking point
- **Months of work at risk** - Going in circles, not reaching stable solution

**ARCHITECTURAL PIVOT DECISION:**
1. **✅ ABANDON current advanced S13** - Too complex, unmaintainable
2. **✅ REVERT to May 2025 S13.js** - Simple, proven working foundation  
3. **✅ KEEP 4012-Cooling.js approach** - But rebuild S13 to work with it
4. **✅ SYSTEMATIC REBUILD PLAN** - Port all functionality from 4012-Section13-OFFLINE.js to simple S13

**WHAT THIS MEANS:**
- **Current 4012-Section13-OFFLINE.js** = Advanced dual-state with all features (BACKUP)
- **New working S13** = May 2025 simple chassis + all advanced features rebuilt methodically
- **4012-Cooling.js** = Continue extraction approach but with simpler S13 integration
- **Rebuild strategy** = Small, testable chunks, commit each working piece

**NEXT SESSION PRIORITIES:**
1. **Complete S13 rebuild** - Port advanced features to simple S13 chassis
2. **Fix 4012-Cooling.js integration** - Ensure it works with rebuilt S13
3. **Systematic validation** - Test each feature as it's ported
4. **Preserve dual-state architecture** - But in simpler, maintainable form

**Strategic Goal**: **Build maintainable dual-state S13 that works with extracted cooling engine** - No more going in circles.

---

## 📊 **STATEMANAGER INTEGRATION: STANDARD SECTION PATTERN**

### **🎯 CONSISTENT ARCHITECTURE (SINGLE SOURCE OF TRUTH)**

**Cooling.js as Standard Module:**
- **Input**: Reads cross-section dependencies from StateManager (h_15, d_105, i_59, etc.)
- **Processing**: Performs calculations using Excel formulas in isolation
- **Output**: Publishes results to StateManager for S13 consumption

```javascript
// Cooling.js reads inputs from StateManager (like any section)
const coolingSetTemp = StateManager.getValue("h_24");  // From S03
const buildingVolume = StateManager.getValue("d_105"); // From S12  
const indoorRH = StateManager.getValue("i_59");        // From S08

// Cooling.js publishes results to StateManager (like any section)
StateManager.setValue("cooling_m_124", daysActiveCooling, "calculated");
StateManager.setValue("cooling_h_124", freeCoolingLimit, "calculated");

// S13 reads from StateManager (standard pattern)
const m_124 = ModeManager.getValue("cooling_m_124"); // Automatic Target/Reference
setFieldValue("m_124", m_124, "number-2dp");
```

### **✅ STATEMANAGER BENEFITS:**
- **Architectural consistency** (README.md compliance)
- **Single source of truth** (all values flow through StateManager)
- **Automatic dual-state** (ref_ prefixes work automatically for Reference model)
- **Clear maintenance** (one pattern across all modules)
- **AI agent friendly** (consistent patterns, smaller S13 file)
