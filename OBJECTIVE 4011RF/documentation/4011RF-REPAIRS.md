# S01 & S02 State-Mixing Repairs - Completed (August 2025)

This document tracks the successful resolution of state-mixing anti-patterns identified in S01 and S02 sections.

---

## ✅ **S01 TEUI Denominator Fix - COMPLETED**

### **Problem**: 
S01's `updateTEUIDisplay` function incorrectly used the same `area` variable (from global `h_15`) as the denominator for calculating **both** Target TEUI and Reference TEUI. This caused Reference calculations to be contaminated by Target area changes.

### **Solution Implemented**:
**Fixed the Reference calculations to use proper state isolation:**

```javascript
// ❌ BEFORE (State contamination):
const area = getGlobalNumericValue("h_15") || 1427.2;
const e_10 = area > 0 ? Math.round((refEnergy / area) * 10) / 10 : 0;  // Wrong!

// ✅ AFTER (Proper state isolation):
const targetArea = getGlobalNumericValue("h_15") || 1427.2;
const referenceArea = getGlobalNumericValue("ref_h_15") || targetArea;
const e_10 = referenceArea > 0 ? Math.round((refEnergy / referenceArea) * 10) / 10 : 0;  // Correct!
```

### **Specific Changes Made**:
1. **Separate Target and Reference areas**: `targetArea` vs `referenceArea` 
2. **Updated Reference Column E calculations**: All use `referenceArea` and `refServiceLife`
   - `e_10 = ref_j_32 / ref_h_15` (Reference TEUI)
   - `e_8 = ref_k_32 / ref_h_15` (Reference Annual Carbon)  
   - `e_6 = ref_i_39 / ref_h_13 + e_8` (Reference Lifetime Carbon)
3. **Updated Target Column H calculations**: All use `targetArea`
4. **Updated Actual Column K calculations**: All use `targetArea` (shares Target building parameters)
5. **Added missing listeners**: `ref_h_15` and `ref_h_13` for Reference building changes
6. **Fixed gauge and warning functions**: Use correct area variables

### **Result**: 
S01 Reference column (`e_10`, `e_8`, `e_6`) now correctly uses Reference building parameters and will NOT be contaminated when Target area (`h_15`) changes.

---

## ✅ **S02 Area Slider State-Mixing Fix - COMPLETED**

### **Problem**: 
The S02 conditioned area slider (`h_15`) was not fully mode-aware. The slider's event handlers read the original area value from the global `StateManager` instead of the current mode's state, causing incorrect calculations in Reference mode.

### **Solution Implemented**:

**Made slider functions fully mode-aware:**

```javascript
// ❌ BEFORE (Pattern B contamination):
const originalAreaStr = window.TEUI.StateManager?.getValue("h_15");

// ✅ AFTER (Mode-aware):
const originalAreaStr = ModeManager.getValue("h_15");
```

### **Specific Changes Made**:
1. **Fixed `handleAreaSliderInput()`**: Now reads from `ModeManager.getValue("h_15")` instead of global StateManager
2. **Fixed `handleAreaSliderChange()`**: Uses mode-aware state reading for fallback values  
3. **Added default area values**: Both `TargetState` and `ReferenceState` now have `h_15: "1427.20"` defaults
4. **Preserved existing mode-aware saving**: `ModeManager.setValue()` was already correct

### **Result**: 
S02 area slider now properly maintains separate Target and Reference area values. When switching between modes, each state retains its own area value without contamination.

---

## 🎯 **Testing Validation**

These fixes should resolve the specific issues identified in the original testing:

1. **Target Mode occupancy changes** → Should no longer affect Reference TEUI calculations
2. **Mode switching** → Area values should remain isolated between Target and Reference states  
3. **Reference Standard changes** → Should now properly trigger recalculations in S01 using correct Reference areas

Both S01 and S02 now fully comply with dual-state architecture and maintain proper state isolation.

---

## 🚨 **NEXT PHASE: Service Life & Reporting Year State Mixing**

### **Problem Identified**: 
Despite the area fixes above, S01's Reference Column E values still update when changes are made to S02's **Target mode** reporting year (`h_12`) and service life (`h_13`) sliders. This indicates **continued state contamination** in the calculation chain.

### **Root Cause Analysis**:

Based on code investigation, the issue stems from **critical dependencies between emissions factors and building parameters**:

**🔍 KEY INSIGHT**: S04 emissions factors depend on **both province (S03 `d_19`) AND reporting year (S02 `h_12`)** via Excel XLOOKUP logic. This creates a complex calculation chain:

```
S02 (h_12 reporting year) + S03 (d_19 province) → S04 (emissions factors) → S13/S07 (heating/cooling) → S15 (totals) → S01 (TEUI display)
```

**Contamination Vectors Identified**:

1. **S02 State Writing**: `storeReferenceResults()` includes `h_12` ✅ BUT missing `h_13` (service life)
2. **S04 Emissions Calculation**: Has proper mode-aware `getElectricityEmissionFactor()` ✅ 
3. **S04 Listeners**: Has `ref_h_12` listener ✅ BUT may not trigger on S02 Reference slider changes
4. **S13 Emissions Reading**: Uses NON-mode-aware `getGlobalNumericValue("l_30")` ❌ (state contamination!)
5. **S01 Service Life**: May still read Target `h_13` instead of Reference `ref_h_13` for lifetime calculations

### **Investigation Strategy**:

#### **Phase 1: Verify S02 State Storage & Triggering**
**Objective**: Confirm S02 properly stores AND triggers downstream updates

**Critical Issue Found**: `storeReferenceResults()` includes `h_12` but missing `h_13`

**Check Points**:
1. **Add Missing Service Life**: Add `h_13` to `storeReferenceResults()` function
2. **Verify Trigger Chain**: Confirm Reference slider changes trigger `storeReferenceResults()`
3. **Test State Storage**: Verify `ref_h_12` and `ref_h_13` appear in StateManager on Reference changes

#### **Phase 2: Fix S04→S13→S07 Emissions Factor Chain**
**Objective**: Ensure emissions factors maintain Target/Reference isolation

**Critical Issue Found**: S13 and S07 read emissions factors without mode awareness

**Check Points**:
1. **S13 Space Heating Emissions (lines 2502-2503)**: 
   ```javascript
   // ❌ CURRENT - NOT mode-aware:
   const oilEmissionsFactor = getGlobalNumericValue("l_30") || 2753;
   const gasEmissionsFactor = getGlobalNumericValue("l_28") || 1921;
   
   // ✅ SHOULD BE - Mode-aware:
   const oilEmissionsFactor = isReferenceCalculation 
     ? (getGlobalNumericValue("ref_l_30") || getGlobalNumericValue("l_30") || 2753)
     : (getGlobalNumericValue("l_30") || 2753);
   ```

2. **S07 DHW Emissions**: Already has mode-aware emissions reading ✅

3. **S04 Listener Chain**: Verify `ref_h_12` changes trigger emissions recalculation → S13 → S15 → S01

#### **Phase 3: Audit S01 Service Life Dependencies** 
**Objective**: Ensure S01 uses Reference service life for Reference calculations

**Check Points**:
1. **Service Life Reading**: Verify S01 uses `ref_h_13` for Reference lifetime calculations  
2. **Listener Setup**: Confirm S01 listens to `ref_h_13` changes (already added ✅)
3. **Calculation Chain**: Verify Reference service life affects Reference Column E properly

### **Repair Implementation Plan**:

#### **Step 1: Fix S02 State Storage**
**Priority: HIGH** - Missing service life in Reference state storage

```javascript
// Add h_13 to storeReferenceResults() function (line 788):
const referenceResults = {
  h_12: ReferenceState.getValue("h_12"), // ✅ Already present
  h_13: ReferenceState.getValue("h_13"), // ❌ MISSING - ADD THIS
  d_13: ReferenceState.getValue("d_13"),
  // ... rest unchanged
};
```

#### **Step 2: Fix S13 Emissions Factor Reading**
**Priority: CRITICAL** - Direct state contamination in heating calculations

```javascript
// Fix calculateSpaceHeatingEmissions() in S13 (lines 2502-2503):
// ❌ CURRENT - contaminated:
const oilEmissionsFactor = getGlobalNumericValue("l_30") || 2753;
const gasEmissionsFactor = getGlobalNumericValue("l_28") || 1921;

// ✅ FIXED - mode-aware (like S07 pattern):
const oilEmissionsFactor = isReferenceCalculation 
  ? (getGlobalNumericValue("ref_l_30") || getGlobalNumericValue("l_30") || 2753)
  : (getGlobalNumericValue("l_30") || 2753);
const gasEmissionsFactor = isReferenceCalculation
  ? (getGlobalNumericValue("ref_l_28") || getGlobalNumericValue("l_28") || 1921)
  : (getGlobalNumericValue("l_28") || 1921);
```

#### **Step 3: Verify S04 Listener Triggering**
**Priority: MEDIUM** - Ensure Reference changes propagate correctly

- Test that S02 Reference slider changes trigger S04's `ref_h_12` listener
- Verify S04 `calculateReferenceModel()` updates emissions factors  
- Confirm cascade: S04 → S13 → S15 → S01 for Reference calculations

#### **Step 4: Audit S01 Service Life Usage**
**Priority: LOW** - Verify no remaining Target contamination

- Check if S01 Reference calculations use `ref_h_13` correctly (likely already fixed)
- Verify service life affects Reference lifetime carbon calculations properly

### **Testing Protocol**:

1. **Baseline Test**: Record current Reference Column E values in S01
2. **Target Mode Change**: Switch S02 to Target mode, change reporting year and service life
3. **Verification**: Confirm Reference Column E values in S01 remain unchanged
4. **Reference Mode Test**: Switch S02 to Reference mode, change parameters  
5. **Validation**: Confirm Reference Column E values update appropriately

### **Success Criteria**:
- ✅ Target mode parameter changes do NOT affect Reference calculations
- ✅ Reference mode parameter changes DO affect Reference calculations appropriately
- ✅ Complete state isolation between Target and Reference building parameters
- ✅ All downstream sections respect Reference parameter independence 