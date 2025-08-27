# Section 09 (Occupancy & Internal Gains) Troubleshooting Guide

## Current Status ❌

### **🚨 CRITICAL ISSUE: Missing Reference Occupancy Dependency**

**Problem**: S09 does not publish `ref_d_63` (occupancy) to StateManager, causing downstream sections (S07) to use Target fallbacks for Reference calculations.

**Impact**: 
- ✅ **S07 is now perfectly isolated** for its own user inputs (`d_49`, `d_51`)
- ❌ **S07 Reference calculations still contaminated** by missing `ref_d_63` from S09
- ❌ **State sovereignty violation**: Reference calculations use Target occupancy values

### **Evidence from S07 Logs:**
```
[S07] 🚨 FALLBACK USED: ref_d_63 missing, using d_63="126" for Reference calculation
```

---

## 🎯 **ROOT CAUSE ANALYSIS**

### **S09 Current Architecture Status**

**Need to investigate:**
1. **Does S09 have `setDefaults()` functions?** - For occupancy field initialization
2. **Does S09 have `ModeManager.setValue()` pattern?** - To publish Reference inputs  
3. **Does S09 have `storeReferenceResults()`?** - To publish calculated Reference results
4. **What fields does S09 manage?** - Identify all user inputs and calculated outputs

### **S09 Dependencies Analysis**

**S09 provides to downstream sections:**
- **`d_63`**: Occupancy (number of people) - **CRITICAL for S07 water use calculations**
- **Internal gains**: Equipment, lighting, people loads for thermal modeling
- **Schedules**: Occupancy patterns and internal gain schedules

**S09 receives from upstream sections:**
- Building areas from S01/S02
- Equipment data from other sections

---

## 📋 **PHASE 3B IMPLEMENTATION PLAN**

### **Step 1: S09 Architecture Audit (15 mins)**
1. Check if S09 has `TargetState.setDefaults()` and `ReferenceState.setDefaults()`
2. Check if S09 has proper `ModeManager.setValue()` with `ref_` prefix publication  
3. Identify all user input fields (especially `d_63` occupancy)
4. Check if S09 has `storeReferenceResults()` function

### **Step 2: Apply S07 Proven Pattern (20 mins)**
1. **If missing**: Add `setDefaults()` functions reading from FieldDefinitions
2. **If missing**: Fix `ModeManager.setValue()` to publish Reference inputs with `ref_` prefix
3. **If missing**: Add `storeReferenceResults()` to publish calculated Reference results
4. **Ensure**: `ref_d_63` is published to StateManager for downstream consumption

### **Step 3: Verification (10 mins)**
1. Test S09 Reference mode inputs (occupancy changes)
2. Verify `ref_d_63` appears in StateManager after S09 changes
3. Test S07 - should show NO MORE `ref_d_63 missing` warnings
4. Verify perfect S07 isolation: Target occupancy changes don't affect Reference `e_10`

---

## 🎯 **SUCCESS CRITERIA**

**S09 Phase 3B Complete When:**
- ✅ **No `ref_d_63 missing` warnings** in S07 logs
- ✅ **S09 Reference inputs published** to StateManager with `ref_` prefix
- ✅ **S07 perfect isolation** - Target occupancy changes don't affect Reference TEUI
- ✅ **S09 follows established patterns** - Same architecture as S02/S07

**Final System State:**
- ✅ **S07**: Perfect internal isolation (Phase 3A complete)
- ✅ **S09**: Proper dependency publication (Phase 3B complete)  
- ✅ **End-to-end**: Complete Target/Reference isolation achieved

---

## 📚 **REFERENCE IMPLEMENTATION PATTERNS**

### **From S07 Success (Phase 3A):**

**setDefaults() with StateManager Publication:**
```javascript
ReferenceState.setDefaults = function () {
  this.values.d_63 = ModeManager.getFieldDefault("d_63") || "126";
  
  // ✅ CRITICAL: Publish Reference defaults with ref_ prefix
  if (window.TEUI?.StateManager) {
    window.TEUI.StateManager.setValue("ref_d_63", this.values.d_63, "default");
  }
};
```

**ModeManager.setValue() with ref_ Publication:**
```javascript
setValue: function (fieldId, value, source = "user-modified") {
  const currentState = this.currentMode === "target" ? TargetState : ReferenceState;
  currentState.setValue(fieldId, value);

  if (this.currentMode === "target") {
    window.TEUI?.StateManager?.setValue(fieldId, value, source);
  }
  
  // ✅ CRITICAL: Reference inputs published with ref_ prefix
  if (this.currentMode === "reference" && window.TEUI?.StateManager) {
    window.TEUI.StateManager.setValue(`ref_${fieldId}`, value, source);
  }
}
```

**storeReferenceResults() Pattern (from S02):**
```javascript
function storeReferenceResults() {
  if (!window.TEUI?.StateManager) return;

  const referenceResults = {
    ref_d_63: ReferenceState.getValue("d_63"), // Occupancy
    // ... other calculated Reference outputs
  };

  Object.entries(referenceResults).forEach(([fieldId, value]) => {
    if (value !== null && value !== undefined) {
      window.TEUI.StateManager.setValue(fieldId, value, "calculated");
    }
  });
}
```

---

## 🔄 **TRANSITION STRATEGY**

### **From S07 Proven Approach:**
1. **Use strategic fallback logging** if needed to identify S09 issues
2. **Apply systematic dependency resolution** using established patterns
3. **Test incrementally** after each fix
4. **Verify end-to-end isolation** once S09 dependencies are resolved

### **Expected Timeline:**
- **S09 Architecture Audit**: 15 minutes
- **Pattern Implementation**: 20 minutes  
- **Testing & Verification**: 10 minutes
- **Total**: ~45 minutes for complete S07+S09 isolation

---

## 🎯 **NEXT SESSION GOALS**

1. **Complete S09 Phase 3B** using proven S07 patterns
2. **Achieve end-to-end isolation** for S07 water use calculations
3. **Verify perfect dual-state compliance** across S07+S09 system
4. **Document lessons learned** for future section dependencies

**S09 Phase 3B will complete the S07 isolation project and demonstrate the scalable pattern for all remaining sections.**

---

## 🎉 **S09 PHASE 3B: COMPLETE SUCCESS!**

### **✅ ACHIEVED: Perfect S09 State Publication**

**Status**: ✅ **COMPLETED** - S09 now publishes `ref_d_63` to StateManager, achieving complete S07+S09 isolation

**Implemented Fixes:**
- ✅ **ModeManager.setValue()**: Now publishes Reference inputs with `ref_` prefix to StateManager
- ✅ **ReferenceState.setDefaults()**: Now publishes `ref_d_63="126"` to StateManager on initialization
- ✅ **TargetState.setDefaults()**: Now publishes `d_63="126"` to StateManager for consistency

**Evidence of Success:**
- ✅ **Logs show**: `🔗 [S09] ReferenceState.setDefaults: Published ref_d_63="126" to StateManager`
- ✅ **S07 isolation**: Zero `ref_d_63 missing` fallback warnings in S07 calculations
- ✅ **End-to-end**: Perfect S07+S09 dual-state compliance achieved

### **🚨 CRITICAL ISSUE DISCOVERED & FIXED: switchMode() Calculation**

**Problem Found**: S09's `switchMode()` contained `calculateAll()` call, violating DUAL-STATE-CHEATSHEET.md principle

**Root Cause**: 
```javascript
// ❌ WRONG: Calculation in UI toggle (line 157)
calculateAll(); // Recalculate for the new mode
```

**Fix Applied**:
```javascript
// ✅ CORRECT: Display-only toggle (DUAL-STATE-CHEATSHEET.md compliant)
this.refreshUI(); // Values already calculated, just refresh display
```

**Impact**: This was causing Reference values to recalculate when toggling modes instead of showing pre-calculated values.

---
*Last Updated: Current session - S09 Perfect Isolation ACHIEVED! Both dependency publication AND switchMode compliance fixed! 🎉*


# **S09 DEPENDENCY ANALYSIS - COMPREHENSIVE DOWNSTREAM IMPACT**

**Date**: Aug 27, 2025  
**Status**: **🎯 COMPLETE ANALYSIS**  
**Scope**: All S09 → Downstream dependencies for Reference Model compliance

---

## **🎯 EXECUTIVE SUMMARY**

**✅ GOOD NEWS**: S09 is **already publishing most critical Reference values** correctly!

**❌ IDENTIFIED GAPS**: S09 missing **ref_ publication for some key fields** that S10 and S15 depend on.

**🔧 SOLUTION**: Add missing `ref_` prefixed publications for complete downstream Reference support.

---

## **📊 S09 DEPENDENCY MAP**

### **S09 → S10 Dependencies** 
**Critical for Solar Gains & Utilization Factors**

| S09 Field | S10 Usage | Current Status | Impact |
|-----------|-----------|----------------|---------|
| `i_71` | `e_80`, `e_81`, `g_81` calculations | ✅ **Publishing `ref_i_71`** | Working |
| `h_71` | Total gains for utilization | ✅ **Publishing `ref_h_71`** | Working |
| `k_71` | Cooling gains for utilization | ✅ **Publishing `ref_k_71`** | Working |

**S10 Code Evidence:**
```javascript
// Line 1894: S10 correctly reads S09 Reference values
const internalGains = getGlobalNumericValue("ref_i_71") || 0;

// Line 2126: S10 Target model reads S09 Target values  
const internalGains = getGlobalNumericValue("i_71") || 0;
```

### **S09 → S15 Dependencies**
**Critical for TEUI Summary Calculations (d_135, d_136)**

| S09 Field | S15 Usage | Current Status | Impact |
|-----------|-----------|----------------|---------|
| `h_70` | `d_135`, `d_136` formulas | ✅ **Publishing `ref_h_70`** | Working |
| `k_51` | N/A - S07 field | N/A | N/A |
| `m_43` | N/A - S06 field | N/A | N/A |

**S15 Formula Dependencies:**
```javascript
// d_135: =M43+K51+H70+D117+I104+M121-I80
// d_136: =IF(D113="Electricity",D135,IF(D113="Heatpump",(K51+D117+D114+M43+H70),...))
```

**S15 Code Evidence:**
```javascript
// Line 1420: S15 Reference model reads S09 values
const h70 = parseFloat(getRefValue("h_70")) || 0;

// Line 1714: S15 Target model reads S09 values
const h70 = getNumericValue("h_70"); // Plug/Light/Eqpt. Subtotals
```

---

## **✅ CURRENT S09 REFERENCE PUBLICATION STATUS**

### **Successfully Publishing:**

```javascript
// From S09 storeReferenceResults() function:
window.TEUI.StateManager.setValue("ref_h_70", refSubtotal.toString(), "calculated");
window.TEUI.StateManager.setValue("ref_i_70", (refSubtotal * refHeatingRatio).toString(), "calculated");
window.TEUI.StateManager.setValue("ref_k_70", (refSubtotal * refCoolingRatio).toString(), "calculated");
window.TEUI.StateManager.setValue("ref_h_71", refTotal.toString(), "calculated");
window.TEUI.StateManager.setValue("ref_i_71", (refTotal * refHeatingRatio).toString(), "calculated");
window.TEUI.StateManager.setValue("ref_k_71", (refTotal * refCoolingRatio).toString(), "calculated");
```

### **User Inputs Publishing (S07 Pattern):**

```javascript
// From ModeManager.setValue():
if (this.currentMode === "reference" && window.TEUI?.StateManager) {
  window.TEUI.StateManager.setValue(`ref_${fieldId}`, value, source);
}

// From ReferenceState.setDefaults():
window.TEUI.StateManager.setValue("ref_d_63", this.state.d_63, "default");
```

---

## **❌ IDENTIFIED GAPS & SOLUTIONS**

### **Gap 1: Missing Equipment/Lighting Details for S15**

**Problem**: S15 might need granular equipment data for detailed calculations.

**Current S09 Publication**: Only publishes totals (`ref_h_70`, `ref_h_71`)
**Potential Need**: Individual equipment components (`ref_h_65`, `ref_h_66`, `ref_h_67`)

**Solution**: Add to `storeReferenceResults()`:
```javascript
// Individual components for detailed S15 consumption
window.TEUI.StateManager.setValue("ref_h_65", refPlugLoads.toString(), "calculated");
window.TEUI.StateManager.setValue("ref_h_66", refLightingLoads.toString(), "calculated");  
window.TEUI.StateManager.setValue("ref_h_67", refEquipmentLoads.toString(), "calculated");
```

### **Gap 2: Missing Intermediate Values**

**Problem**: S10/S15 might need heating/cooling split details for Reference calculations.

**Current S09 Publication**: Publishing `ref_i_70`, `ref_k_70` correctly
**Assessment**: ✅ **Already covered**

---

## **🔍 ROOT CAUSE OF e_10 STUCK AT 234.3**

Based on our comprehensive analysis:

### **The Real Issue: NOT S09**

**✅ S09 is correctly publishing:**
- `ref_h_70` = S09 equipment subtotals
- `ref_h_71` = S09 total internal gains  
- `ref_i_71` = S09 heating internal gains
- `ref_k_71` = S09 cooling internal gains

**❌ The problem is downstream:**
1. **S04 Reference Model** not consuming S09's `ref_h_71`, `ref_i_71`, `ref_k_71`
2. **S04** not recalculating `ref_j_32` when S09 Reference values change
3. **S01** correctly calculates `e_10` from **stale `ref_j_32`**

### **Evidence from Logs:**
```
[S09] Publishing: ref_h_71 = "149087.2284"
[S09] Publishing: ref_i_71 = "100072.2492" 
[S09] Publishing: ref_k_71 = "49014.9792"
[S01] e_10 calc: ref_j_32=334368.22 ÷ ref_h_15=1427.2 = 234.3
```

**The `ref_j_32` value (334368.22) is stale** - S04 isn't updating it when S09 changes.

---

## **🎯 RECOMMENDED ACTIONS**

### **Priority 1: S04 Investigation (URGENT)**
1. **Check S04 Reference Model** - does it listen to S09 `ref_` values?
2. **Verify S04 calculation flow** - does Reference model recalculate `ref_j_32`?
3. **Fix S04 dependencies** - ensure S04 consumes S09 Reference internal gains

### **Priority 2: S09 Enhancement (OPTIONAL)**  
1. **Add granular Reference publication** for complete S15 support:
   ```javascript
   // In storeReferenceResults(), add:
   window.TEUI.StateManager.setValue("ref_h_65", refPlugLoads.toString(), "calculated");
   window.TEUI.StateManager.setValue("ref_h_66", refLightingLoads.toString(), "calculated");
   window.TEUI.StateManager.setValue("ref_h_67", refEquipmentLoads.toString(), "calculated");
   ```

### **Priority 3: Verification Testing**
1. **Test S10 Reference mode** - verify `ref_i_71` consumption working
2. **Test S15 Reference mode** - verify `ref_h_70` consumption working  
3. **Test e_10 responsiveness** - after S04 fix, verify S09 changes update `e_10`

---

## **✅ CONCLUSION**

**S09 is doing its job correctly** - publishing the right Reference values for downstream consumption.

**The e_10 stuck at 234.3 issue is NOT S09's fault** - it's S04 not responding to S09's Reference changes.

**Next step: Investigate S04 Reference Model** to understand why it's not recalculating `ref_j_32` when S09 Reference values change.
