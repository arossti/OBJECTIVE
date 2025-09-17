# S03 State Isolation Repair Guide

## 🚨 **CRITICAL ISSUE: S03 Target Mode State Contamination**

**Date**: September 17, 2025  
**Status**: UNRESOLVED - Multiple failed attempts  
**Severity**: CRITICAL - Prevents dual-state architecture compliance

---

## 📋 **ISSUE SUMMARY**

Section 03 (Climate Calculations) has **asymmetric state isolation**:

### ✅ **WORKING: Reference Mode** 
- **Reference location changes** → Only Reference pipeline affected
- **e_10 changes correctly** (211 → 244.6 for Alexandria → Attawapiskat)
- **h_10 remains stable** ✅ **Perfect isolation**

### ❌ **BROKEN: Target Mode**
- **Target location changes** → Both Target AND Reference pipelines affected  
- **h_10 changes** (expected)
- **e_10 also changes** (unexpected contamination) ❌

---

## 🔍 **DETAILED BEHAVIOR MATRIX**

| S03 Field | Target Mode | Reference Mode | Notes |
|-----------|-------------|----------------|-------|
| **h_19 (City)** | ❌ Contaminates both models | ✅ Isolates correctly | Climate data lookup issue |
| **h_20 (Present/Future)** | ❌ Contaminates both models | ❌ Does nothing | Missing StateManager sync |
| **h_21 (Capacitance)** | ✅ Isolates correctly | ❌ Does nothing | Missing StateManager sync |

---

## 🧪 **FAILED REPAIR ATTEMPTS**

### **Attempt 1: ModeManager.setValue() Source Parameter Fix**
**Theory**: Hardcoded "user-modified" source was causing contamination  
**Implementation**: Made source parameter dynamic  
**Result**: ❌ **INFINITE LOOP** - App became unresponsive  
**Lesson**: Original source handling was correct, don't modify core patterns

### **Attempt 2: Dedicated Engine Climate Data Lookup**
**Theory**: Target engine needed separate climate data like Reference engine  
**Implementation**: Added TargetState.getValue() climate lookup to calculateTargetModel()  
**Result**: ❌ **BROKE UI UPDATES** - HDD/CDD stopped updating in Target mode  
**Lesson**: updateWeatherData() is essential for UI updates

### **Attempt 3: Mode-Aware updateWeatherData()**
**Theory**: updateWeatherData() should only run appropriate engine  
**Implementation**: if/else to run calculateTargetModel() vs calculateReferenceModel()  
**Result**: ❌ **BROKE REFERENCE CALCULATIONS** - e_10 changes minimal (211→212 vs expected 211→245)  
**Lesson**: Both engines need to run for complete downstream data

### **Attempt 4: Unified Handler Pattern**
**Theory**: Match h_21 working pattern (calculateAll() vs updateWeatherData())  
**Implementation**: Replace updateWeatherData() with calculateAll() in h_19/h_20  
**Result**: ❌ **BROKE WEATHER DATA LOOKUP** - HDD/CDD stopped updating  
**Lesson**: Climate data lookup from ClimateValues.js is essential

### **Attempt 5: Hybrid Approach**
**Theory**: Keep updateWeatherData() but add missing StateManager sync  
**Implementation**: Restored updateWeatherData() + added StateManager publication to h_20/h_21  
**Result**: ❌ **CONTAMINATION PERSISTS** - Target changes still affect both models  
**Lesson**: The issue is deeper than event handler patterns

---

## 🎯 **ROOT CAUSE ANALYSIS**

### **Key Insights:**

1. **Reference Mode Works Perfectly** ✅
   - Proves the dual-state architecture is fundamentally sound
   - Reference calculations use Reference state correctly
   - No contamination vector in Reference direction

2. **Target Mode Has Hidden Contamination Vector** ❌
   - Target changes somehow affect Reference calculations
   - NOT an event handler issue (we've tried multiple patterns)
   - NOT a source parameter issue (that caused infinite loops)
   - Likely in `updateWeatherData()` function itself or calculation engine logic

3. **The `updateWeatherData()` Contamination Hypothesis**
   - This function is called from Target mode changes
   - It reads Target city data but applies to both engines
   - Even with mode-aware fixes, contamination persists
   - Suggests the issue is in how this function interacts with the calculation engines

---

## 🔬 **REQUIRED INVESTIGATION**

### **Next Steps for Fresh Agent:**

1. **Deep Trace `updateWeatherData()` Function**
   - Add logging to see exactly what data each engine receives
   - Verify Target engine gets Attawapiskat data, Reference gets Alexandria data
   - Check if shared variables contaminate between engines

2. **Compare Working vs Broken Patterns**
   - **h_21 (working)**: Direct calculateAll() - why does this isolate correctly?
   - **h_19/h_20 (broken)**: updateWeatherData() → calculateAll() - what's different?
   - **Reference mode (working)**: What makes Reference isolation perfect?

3. **Investigate Calculation Engine State Reading**
   - Verify calculateTargetModel() reads only from TargetState
   - Verify calculateReferenceModel() reads only from ReferenceState  
   - Check for shared objects or variables between engines

4. **Test Minimal Reproduction**
   - Isolate the exact contamination point
   - Create minimal test case that reproduces the issue
   - Verify fix doesn't break other functionality

---

## 📚 **ARCHITECTURAL CONTEXT**

### **What We Know Works:**
- ✅ **S13 d_113 state isolation** - Fixed with dual StateManager listeners
- ✅ **S13 g_118 state isolation** - Fixed with Pattern 1 architecture  
- ✅ **S03 Reference mode** - Perfect isolation already working
- ✅ **S03 h_21 Target mode** - Isolates correctly with calculateAll()

### **What Remains Broken:**
- ❌ **S03 h_19/h_20 Target mode** - Contaminates Reference calculations
- ❌ **S03 h_20/h_21 Reference mode** - Doesn't trigger downstream updates
- ❌ **S13 g_118 state isolation** - Still unresolved despite Pattern 1 refactor

### **Critical Success Pattern:**
The **h_21 Target mode pattern** is the only S03 dropdown that achieves perfect state isolation. Understanding why this works while h_19/h_20 don't is key to solving the contamination issue.

---

## 🎯 **RECOMMENDED APPROACH**

1. **Stop whack-a-mole fixes** - Each attempt breaks something else
2. **Deep dive into `updateWeatherData()` contamination mechanism**
3. **Create minimal test case** for isolated debugging
4. **Apply surgical fix** based on exact contamination point
5. **Test systematically** to ensure no regressions

**Success Criteria**: Target mode h_19 change (Alexandria → Attawapiskat) should:
- ✅ **Update S03 weather display** (HDD: 4600 → 7100)
- ✅ **Only affect h_10** (Target TEUI changes)  
- ✅ **Leave e_10 stable** (Reference TEUI unchanged)

---

## 📁 **BASELINE FILES**

- **4011-Section03-OFFLINE.js**: Known working baseline (Reference mode perfect, Target mode contaminated)
- **4011-Section03.js**: Current working file (reverted to OFFLINE after failed attempts)

**CRITICAL**: Always revert to OFFLINE baseline after failed attempts to prevent cumulative technical debt.
