# S13 REFACTOR WORKPLAN - 4012-S13 Branch

**Date**: September 1, 2025  
**Branch**: 4012-S13  
**Status**: ANALYSIS COMPLETE - READY FOR IMPLEMENTATION  
**Priority**: HIGH - S13 is the most complex section with persistent state mixing issues

---

## 🎯 **OBJECTIVE**

Complete the dual-state refactor of Section 13 (Mechanical Loads) to eliminate state contamination and achieve perfect Target/Reference isolation while preserving the complex HVAC calculation logic that works correctly in Target mode.

---

## 🚨 **CRITICAL FINDINGS FROM ANALYSIS**

### **Current S13 Status:**
- ✅ **Target calculations**: Work reliably and correctly
- ❌ **Reference calculations**: Suffer from "Current State Anti-Pattern" contamination
- ⚠️ **Architecture**: Has dual-state framework but contaminated helper functions
- 🔥 **Complexity**: Most complex section (3000+ lines) with multiple calculation engines

### **Root Cause Identified:**
**Multiple architectural gaps causing state mixing:**

1. **"Current State Anti-Pattern" in helper functions:**
```javascript
// ❌ CONTAMINATION SOURCE in S13:
const afue = getFieldValue('j_115'); // Reads whatever is "current" - Target or Reference

// ✅ REQUIRED FIX:
const afue = isReferenceCalculation 
  ? ReferenceState.getValue('j_115') 
  : TargetState.getValue('j_115');
```

2. **Missing Mode-Aware Publishing:**
```javascript
// ❌ CURRENT: Always publishes unprefixed, even for Reference calculations
function setCalculatedValue(fieldId, rawValue) {
  window.TEUI.StateManager.setValue(fieldId, stateValue, "calculated"); // Always unprefixed
}

// ✅ REQUIRED: Mode-aware publishing for downstream sections
function setCalculatedValue(fieldId, rawValue, formatType, isReferenceCalculation) {
  const stateManagerKey = isReferenceCalculation ? `ref_${fieldId}` : fieldId;
  window.TEUI.StateManager.setValue(stateManagerKey, stateValue, "calculated");
}
```

3. **Slider Position State Mixing:**
```javascript
// ❌ ISSUE: Slider position not restored correctly when switching modes
// Target f_113 = 12.5, Reference f_113 = 7.1
// After Reference mode, Target slider shows 7.1 instead of 12.5
```

**⚠️ CRITICAL**: Architectural changes must be implemented incrementally to avoid recursion and calculation storms.

---

## 📋 **IMPLEMENTATION PHASES** (Based on S13-FIXES.md Analysis)

### **Phase 1A: Minimal UI Fixes (Priority 1)**
**Goal**: Fix ONLY the slider position state mixing issue

**CRITICAL**: One tiny fix at a time to avoid recursion/calculation storms
- **Issue**: HSPF slider position doesn't restore correctly when switching modes
- **Test**: Target f_113=12.5, Reference f_113=7.1, switch back → should show 12.5
- **Approach**: Fix slider position restoration in refreshUI() only
- **No calculation changes**: Keep all calculation logic unchanged

### **Phase 1B: Target Mode Validation**
**Goal**: Ensure current S13 Target mode still matches baseline (h_10 = 93.6)

**Validation Tests:**
- **Electricity**: h_10 = 154.4 ✅
- **Gas**: h_10 = 163.7 ✅  
- **Oil**: h_10 = 163.7 ✅
- **Heatpump**: h_10 = 93.6 ✅
- **HSPF slider**: Should trigger calculations in Target mode
- **Gold Standard comparison**: Compare with S13-GS.js behavior

**From S13-FIXES.md Analysis:**
- **Current Status**: Working 13.js has functional Target calculations
- **Comparison Standard**: S13-GS.js (Gold Standard from ARCHIVE)
- **Known Issues**: 19 getFieldValue() violations causing state contamination

### **Phase 2: Current State Anti-Pattern Elimination (Priority 2)**
**Systematic fix of 19 getFieldValue() violations identified in S13-FIXES.md:**

| **Function** | **Lines** | **Contamination** | **Fix Type** |
|---|---|---|---|
| calculateHeatingSystem() | 2426-2505 | External deps via getGlobalNumericValue | Mode-aware external reading |
| calculateCoolingSystem() | 2510-2609 | getFieldValue("d_116", "m_129", "j_113") | TargetState/ReferenceState |
| calculateVentilationEnergy() | 2704-2730 | getFieldValue("d_120"), external deps | Mode-aware patterns |
| calculateCoolingVentilation() | 2735-2819 | Multiple getFieldValue() calls | TargetState/ReferenceState |
| calculateFreeCooling() | 2824-3305 | getFieldValue("d_59") + others | Mode-aware external reading |

**Fix Patterns:**
```javascript
// ❌ CONTAMINATED (19 instances):
const value = getFieldValue("d_113");

// ✅ SECTION FIELDS:
const value = isReferenceCalculation 
  ? ReferenceState.getValue("d_113") 
  : TargetState.getValue("d_113");

// ✅ EXTERNAL DEPENDENCIES:
const value = window.TEUI.parseNumeric(
  isReferenceCalculation 
    ? getGlobalNumericValue("ref_d_59") 
    : getGlobalNumericValue("d_59")
) || 0;
```

### **Phase 3: External Dependency Listener Pairs**
**Complete dual-engine listener implementation:**

**Missing Pairs Identified:**
- `d_63/ref_d_63` (occupancy)
- `i_63/ref_i_63` (occupied hours)  
- `j_63/ref_j_63` (total hours)
- `d_105/ref_d_105` (volume)
- `h_15/ref_h_15` (area)
- `ref_d_127` (Reference TED from S14)

### **Phase 4: State Isolation Testing**
**Verify perfect Target/Reference separation:**
1. **Target pathway testing**: Match Excel exactly
2. **Reference pathway testing**: No Target contamination
3. **Cross-section testing**: S13→S14→S15→S04→S01 chain working
4. **UI testing**: Sliders, dropdowns work in both modes

### **Phase 5: Performance & Documentation**
1. **Remove debug logging**: Clean console output
2. **Update documentation**: Mark S13 as dual-state compliant
3. **Excel validation**: Final parity check
4. **Performance testing**: No calculation slowdowns

---

## 🚨 **HIGH-RISK AREAS**

### **Complex Calculation Functions:**
- `calculateFreeCooling()`: Has recursion protection, very complex
- `calculateCOPValues()`: Critical for heat pump calculations
- `calculateHeatingSystem()`: Core heating calculations
- `calculateCoolingSystem()`: Complex cooling logic

### **Integration Points:**
- **S14 TED dependency**: `d_127` values from S14
- **S11/S12 dependencies**: Building loads and envelope data
- **S04 downstream**: Critical energy totals (`h_115`, `f_115`, `d_114`)

---

## 🎯 **SUCCESS CRITERIA**

1. **✅ Reference calculations isolated**: No Target value contamination
2. **✅ Target calculations preserved**: No regression in working logic
3. **✅ State isolation perfect**: Target changes don't affect Reference results
4. **✅ Downstream flow working**: S13→S14→S15→S04→S01 chain functional
5. **✅ Performance maintained**: No significant calculation slowdowns

---

## ⚠️ **RISK MITIGATION**

### **High-Risk Refactor Strategy:**
1. **Work incrementally**: Fix one helper function at a time
2. **Test after each change**: Verify no regression before proceeding
3. **Backup frequently**: Commit working states regularly
4. **Monitor downstream**: Watch S04→S15→S01 for contamination
5. **Ready to revert**: Keep working backup available

### **Fallback Plan:**
If refactor becomes too complex or breaks critical functionality:
1. **Revert to working S13**: Use section-BACKUPS version
2. **Document lessons learned**: What patterns to avoid
3. **Consider alternative approaches**: Maybe S13 needs consumer section architecture?

---

## 📚 **REFERENCE DOCUMENTATION**

- **Primary Guide**: `4012-CHEATSHEET.md` - Consumer section patterns and QA/QC checklist
- **Troubleshooting**: `S13-TROUBLESHOOTING-GUIDE.md` - Detailed analysis of current issues
- **Success Patterns**: S11, S12 successful refactors for template patterns
- **Anti-Patterns**: S04-GEMINI-FINDINGS.md - What NOT to do

---

## 🎯 **EXPECTED OUTCOME**

**S13 becomes the final major section to achieve perfect dual-state architecture compliance**, completing the application's transformation to mature dual-state energy modeling capability.

**Timeline**: 4-6 hours of focused work with incremental testing and validation.

**Impact**: Eliminates the last major source of state contamination in the TEUI calculator.

---

## 📚 **DOCUMENTATION CONSOLIDATION**

**This workplan consolidates insights from:**
- **S13-FIXES.md**: Detailed surgical approach with specific line-by-line fixes
- **S13-TROUBLESHOOTING-GUIDE.md**: Root cause analysis and contamination patterns
- **4012-CHEATSHEET.md**: QA/QC checklist and proven patterns

**Next Steps:**
1. **Address UI issues** identified through user walkthrough
2. **Apply S13-FIXES.md surgical approach** for getFieldValue() violations
3. **Use S13-GS.js** as Gold Standard reference for Target mode functionality
4. **Follow proven patterns** from successful S11/S12 refactors

**The combined approach ensures both immediate UI functionality and long-term architectural compliance.**
