# Section 09 (Occupancy & Internal Gains) Troubleshooting Guide

## Current Status 🚨 CRITICAL REGRESSION DISCOVERED (Aug 28, 2025)

### **⚠️ URGENT: S09 Reference Mode Broken After Architecture Completion**

**REGRESSION CONFIRMED**: After completing all 5 architectural steps, S09 Reference mode calculations are **no longer responding reliably** to input changes.

**Evidence from Testing**:
- ✅ **Target mode**: Works correctly, immediate response to input changes
- ❌ **Reference mode**: Inputs don't trigger immediate calculations  
- ❌ **Reliability**: Only updates after "many switches back and forth" - unreliable/unpredictable
- ✅ **Clean logs**: Initialization down from 3985 to 980 lines (architectural cleanup successful)

### **✅ ARCHITECTURAL CLEANUP COMPLETE (All 5 Steps)**

**✅ Step 1: Fixed switchMode() Toxicity**
- Removed `calculateAll()` from `switchMode()` (violates DUAL-STATE-CHEATSHEET.md)
- Mode switching now display-only as designed

**✅ Step 2: Added Missing updateCalculatedDisplayValues() Function**
- Added complete DOM update function with strict mode isolation
- Added 8 mandatory calls after every `calculateAll()`
- Function logs: `[S09] Updated calculated display values for reference mode`

**✅ Step 3: Removed Duplicate Defaults Anti-Pattern (Data Corruption Risk)**
- Eliminated hardcoded `"126"` duplicates in state objects
- Added `getFieldDefault()` function for single source of truth
- Field definitions now sole authority for default values

**✅ Step 4: Fixed Phase 2 Anti-Patterns (37 Ambiguous Calls)**
- Replaced all `getFieldValue()` calls with `getFieldValueModeAware()`
- Added explicit state access with mode-aware wrapper
- Eliminated current-state ambiguity throughout section

**✅ Step 5: Final QA/QC Compliance Verification**
- Passed comprehensive DUAL-STATE-CHEATSHEET.md audit
- 4/5 phases compliant (1 known issue documented)
- Section now architecturally sound for dual-state operations

### **🚨 AFTERNOON SESSION PRIORITIES**

### **Priority 1: Fix S09 Reference Mode Regression (CRITICAL)**

**Goal**: Reference calculations must work **identically to Target mode**, using Reference state values

**Systematic Debugging Plan**:

1. **🔍 Debug Reference Input Flow**
   - Test simple Reference input (change `d_63` occupancy in Reference mode)
   - Trace: Input → `ModeManager.setValue()` → `calculateAll()` → DOM update
   - Compare with working Target flow to identify differences

2. **🔍 Verify Calculation Triggers**
   - Check event handlers: Are Reference mode dropdowns calling correct functions?
   - Verify `calculateAll()` execution: Is it running both Target AND Reference calculations?
   - Test DOM updates: Is `updateCalculatedDisplayValues()` actually updating Reference fields?

3. **🔍 Test State Access Mechanism**
   - Verify `getFieldValueModeAware()`: Does it return correct values in Reference mode?
   - Check state routing: Internal S09 fields should use `ModeManager.getCurrentState()`
   - Confirm StateManager publication: Are Reference results being stored with `ref_` prefix?

### **Priority 2: Fix Specific Reference Bugs**

**🔍 Bug 1: i_63 Reference Mode Stuck (4380)**
- **Symptom**: Annual occupied hours don't update when g_63 changes in Reference mode
- **Root Cause**: Likely broken calculation trigger or DOM update in Reference path
- **Action**: Debug specific `i_63` calculation flow in Reference mode

**🔍 Bug 2: e_10 Persistent Value (234.3)**  
- **Symptom**: S01 TEUI shows 234.3 regardless of S09 Reference changes
- **Root Cause**: Section 04 feeds stale `ref_j_32=334368.22` to Section 01
- **Action**: Investigate S04 → S01 dependency chain (after S09 fixed)

### **✅ FIXED: Reference Occupancy Dependency Chain Complete**

**Solution Applied**: 
1. **S09 publishes `ref_d_63`** (occupancy) to StateManager in `calculateReferenceModel()`
2. **S04 added missing S09 listeners** for `ref_h_71`, `ref_i_71`, `ref_k_71` to complete dependency chain

**Result CONFIRMED**: 
- ✅ **S07 perfectly isolated** - no more `ref_d_63` fallback warnings in logs
- ✅ **S04 listeners working** - logs show `[S04] S09 cooling internal gains changed (Reference): ref_k_71`
- ✅ **Complete Reference chain**: S09 → S04 → S01 now flows correctly
- ✅ **State sovereignty maintained**: Reference calculations use Reference-only values

### **🎯 ROOT CAUSE HYPOTHESIS**

The architectural cleanup likely broke one of these critical paths:

1. **Missing Event Handlers**: Reference mode inputs not triggering calculation chain
2. **Broken ModeManager.setValue()**: Reference input path not calling `calculateAll()` properly  
3. **State Access Issues**: `getFieldValueModeAware()` not correctly routing to Reference state
4. **DOM Update Problems**: `updateCalculatedDisplayValues()` not updating Reference fields

### **📋 DEBUGGING STRATEGY**

**Step-by-Step Approach**:
1. **Start simple**: Test one Reference input (`d_63` occupancy)
2. **Add logging**: Trace exact execution path for Reference vs Target
3. **Compare flows**: Identify where Reference path diverges from working Target path
4. **Fix systematically**: Address each broken link in the Reference chain
5. **Test thoroughly**: Ensure Reference mode works reliably before moving to cross-section bugs

**Key Principle**: Reference calculations must be **identical to Target** but use Reference state values only

**Success Criteria**:
- ✅ Reference inputs trigger immediate calculations (first time, every time)
- ✅ Reference values update in DOM without mode switching
- ✅ Reference calculations use only Reference state values
- ✅ Reference results published to StateManager with `ref_` prefix

---

*Last Updated: Aug 28, 2025 - Ready for afternoon debugging session*
