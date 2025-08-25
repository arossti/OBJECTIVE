# **S12 TROUBLESHOOTING GUIDE - DUAL-STATE REFERENCE MODE**

**Date**: December 29, 2024  
**Status**: **🔍 AUDIT PHASE - Ready for Implementation**  
**Section**: S12 (Ventilation & DHW)  
**Success Template**: S11 Reference Value Persistence Pattern ✅

---

## **🎯 OBJECTIVE**

Fix S12 Reference mode "stuck values" issue using the proven S11 success pattern. S12 should respond to S03 climate changes in Reference mode and maintain complete state isolation between Target and Reference modes.

---

## **📊 S12 SECTION OVERVIEW**

### **Function**: Ventilation & Domestic Hot Water (DHW) calculations
### **Key Calculations**:
- **Ventilation Heat Recovery**: Based on climate data (HDD/CDD)
- **DHW Energy**: Hot water heating requirements
- **Key Outputs**: `g_101`, `d_101`, `i_104` (required by S15)

### **External Dependencies**:
- **S03 Climate**: `d_20` (HDD), `d_21` (CDD), `d_22` (GF HDD), `h_22` (GF CDD)
- **S02 Building**: Area and occupancy data
- **Upstream Flow**: Receives values, provides to S13→S14→S15

### **Critical S15 Dependencies**:
From logs: S15 reports "Missing critical upstream Reference values: `ref_g_101`, `ref_d_101`, `ref_i_104`"
- **These are S12's PRIMARY outputs to downstream sections**

---

## **🧪 CURRENT STATUS ASSESSMENT**

### **What We Know From Symptoms**:
1. **✅ Target Mode**: S12 functions perfectly in Target mode
2. **❌ Reference Mode**: Likely suffers from "stuck values" similar to S11
3. **⚠️ S15 Missing Values**: S12 may not be writing `ref_g_101`, `ref_d_101`, `ref_i_104` correctly
4. **⚠️ Race Condition Risk**: Same pattern as S11 - Reference values potentially overwritten

### **Expected Issues (Based on S11 Pattern)**:
1. **Missing ModeManager Export**: FieldManager integration failures
2. **Pattern B Contamination**: Hardcoded `target_` prefixed reads
3. **Incomplete DOM Updates**: Missing fields in `updateCalculatedDisplayValues`
4. **Reference Value Overwrites**: Downstream sections overwriting before UI refresh

---

## **🔍 SYSTEMATIC AUDIT CHECKLIST**

### **📋 Phase 1: Foundation Architecture** 
**Expectation**: S12 likely has complete Pattern A architecture (like S11 did)

#### **✅ Check 1.1: ModeManager Export**
```bash
grep -n "ModeManager:" sections/4011-Section12.js
```
**Expected**: Missing from return statement (like S10/S11)

#### **✅ Check 1.2: State Objects**
```bash
grep -n "ReferenceState\|TargetState\|ModeManager" sections/4011-Section12.js
```
**Expected**: Objects exist but ModeManager not exported

#### **✅ Check 1.3: Dual-Engine calculateAll**
```bash
grep -A 10 -B 5 "calculateAll.*function" sections/4011-Section12.js
```
**Expected**: Has `calculateReferenceModel()` and `calculateTargetModel()` calls

---

### **📋 Phase 2: Pattern B Contamination Detection**
**Critical**: Find hardcoded `target_` prefixed reads (S11's key issue)

#### **🚨 Check 2.1: target_ Climate Reads**
```bash
grep -n "target_d_2[0-2]\|target_h_22" sections/4011-Section12.js
```
**Expected**: Found (causing stuck values in Reference mode)

#### **🚨 Check 2.2: getGlobalNumericValue Patterns**
```bash
grep -n "getGlobalNumericValue.*target_" sections/4011-Section12.js
```
**Expected**: Anti-pattern usage found

---

### **📋 Phase 3: DOM Update Coverage**
**Critical**: Verify all calculated fields covered

#### **✅ Check 3.1: updateCalculatedDisplayValues Fields**
```bash
grep -A 20 "updateCalculatedDisplayValues" sections/4011-Section12.js
```
**Expected**: Limited field coverage (like S11 originally had)

#### **✅ Check 3.2: Key Output Fields**
**Must include**: `g_101`, `d_101`, `i_104` (required by S15)
**Search for**: Complete list of all S12 calculated fields

---

### **📋 Phase 4: Reference External Listeners**
**Critical**: S03 climate change propagation

#### **✅ Check 4.1: Reference Climate Listeners**
```bash
grep -n "ref_d_2[0-2]\|ref_h_22.*addListener" sections/4011-Section12.js
```
**Expected**: May be missing (causing S03 → S12 propagation failure)

---

### **📋 Phase 5: Critical Output Values**
**S15 Integration**: The missing `ref_g_101`, `ref_d_101`, `ref_i_104` issue

#### **🚨 Check 5.1: Reference Output Storage**
```bash
grep -n "ref_g_101\|ref_d_101\|ref_i_104" sections/4011-Section12.js
```
**Expected**: Missing or incorrectly implemented

#### **🚨 Check 5.2: calculateReferenceModel Output**
**Look for**: How Reference calculations store their results
**Expected**: May not be storing the critical S15 dependency values

---

## **🛠️ IMPLEMENTATION WORKPLAN**

### **🎯 SUCCESS CRITERIA**
1. **S12 Reference mode responds to S03 climate changes** (no stuck values)
2. **S15 receives all required Reference values** (`ref_g_101`, `ref_d_101`, `ref_i_104`)
3. **Complete state isolation** between Target and Reference modes
4. **No race conditions** using Reference Value Persistence Pattern

---

### **🔧 PHASE 1: Foundation Fix (15 minutes)**
**Template**: Exactly like S11 Phase 1

#### **1.1 Add ModeManager Export**
```javascript
return {
  // ... existing exports ...
  ModeManager: ModeManager,  // ✅ CRITICAL FIX
};
```

#### **1.2 Verify State Architecture** 
- ✅ Confirm `ReferenceState` and `ModeManager` objects exist
- ✅ Test basic mode switching functionality

---

### **🔧 PHASE 2: Fix Pattern B Contamination (20 minutes)**
**Template**: Exactly like S11 Phase 2

#### **2.1 Replace target_ Climate Reads**
```javascript
// ❌ CURRENT (Pattern B anti-pattern):
const target_hdd = getGlobalNumericValue("target_d_20");
const target_cdd = getGlobalNumericValue("target_d_21");

// ✅ CORRECT (Pattern A):
// In Target calculations:
const hdd = getGlobalNumericValue("d_20");
const cdd = getGlobalNumericValue("d_21");

// In Reference calculations:
const ref_hdd = getGlobalNumericValue("ref_d_20");
const ref_cdd = getGlobalNumericValue("ref_d_21");
```

---

### **🔧 PHASE 3: Complete DOM Update Coverage (15 minutes)**
**Template**: S11 pattern + S12-specific fields

#### **3.1 Expand updateCalculatedDisplayValues**
```javascript
updateCalculatedDisplayValues: function() {
  if (!window.TEUI?.StateManager) return;
  
  const calculatedFields = [
    // ✅ ADD: All S12 calculated fields including:
    "g_101", "d_101", "i_104",  // ← CRITICAL: S15 dependencies
    // ... plus all other S12 calculated fields
  ];
  
  calculatedFields.forEach((fieldId) => {
    const valueToDisplay = this.currentMode === "reference" 
      ? window.TEUI.StateManager.getValue(`ref_${fieldId}`)
      : window.TEUI.StateManager.getValue(fieldId);
    
    if (valueToDisplay !== null) {
      const element = document.querySelector(`[data-field-id="${fieldId}"]`);
      if (element) {
        const num = window.TEUI.parseNumeric(valueToDisplay, 0);
        element.textContent = formatNumber(num, "number");
      }
    }
  });
},
```

---

### **🔧 PHASE 4: Reference External Listeners (10 minutes)**
**Template**: S11 pattern for S12 climate dependencies

#### **4.1 Add Reference Climate Listeners**
```javascript
// ✅ ADD: Listeners for Reference climate data
window.TEUI.StateManager.addListener("ref_d_20", () => calculateAll());
window.TEUI.StateManager.addListener("ref_d_21", () => calculateAll());  
window.TEUI.StateManager.addListener("ref_d_22", () => calculateAll());
window.TEUI.StateManager.addListener("ref_h_22", () => calculateAll());
```

---

### **🔧 PHASE 5: Reference Value Persistence Pattern (25 minutes)**
**Template**: S11's proven solution for race conditions

#### **5.1 Module-Level Storage**
```javascript
// At module level (like S11):
let lastReferenceResults = {};
```

#### **5.2 Store Reference Results**
```javascript
// In calculateReferenceModel():
function calculateReferenceModel() {
  // ... existing calculations ...
  
  // Store critical S15 dependency values
  const referenceOutputs = {
    g_101: calculated_g_101_value,
    d_101: calculated_d_101_value, 
    i_104: calculated_i_104_value,
    // ... other Reference results
  };
  
  // Store at module level for later re-writing
  lastReferenceResults = referenceOutputs;
  
  return referenceOutputs;
}
```

#### **5.3 Re-Write After All Calculations**
```javascript
// In calculateAll() (like S11):
function calculateAll() {
  calculateReferenceModel();  // Populates lastReferenceResults
  calculateTargetModel();
  
  // ✅ FIX: Re-write Reference values after all calculations to prevent overwrites
  if (window.TEUI?.StateManager && lastReferenceResults) {
    Object.entries(lastReferenceResults).forEach(([fieldId, value]) => {
      window.TEUI.StateManager.setValue(`ref_${fieldId}`, value.toString(), "calculated");
    });
  }
  
  // THEN update DOM with preserved values
  if (typeof ModeManager.updateCalculatedDisplayValues === "function") {
    ModeManager.updateCalculatedDisplayValues();
  }
}
```

---

## **🧪 TESTING PROTOCOL**

### **Test Sequence A: Foundation**
1. **✅ ModeManager Export**: No FieldManager warnings for S12
2. **✅ Mode Switching**: Toggle between Target/Reference works
3. **✅ Basic State**: S12 loads without errors

### **Test Sequence B: Reference Responsiveness**
1. **✅ S03 Climate Changes**: Vancouver → Iqaluit in Reference mode
   - **Expected**: S12 Reference values update immediately
2. **✅ Internal Changes**: Modify S12 Reference mode fields
   - **Expected**: Calculations update immediately

### **Test Sequence C: S15 Integration** 
1. **✅ Reference Value Availability**: Check logs for S15 warnings
   - **Expected**: No more "Missing critical upstream Reference values"
2. **✅ Value Propagation**: S12 Reference → S15 Reference flow
   - **Expected**: Complete dependency chain working

### **Test Sequence D: State Isolation**
1. **✅ No Contamination**: Reference changes don't affect Target
2. **✅ Mode Switching**: Preserved state values for each mode

---

## **⚠️ KNOWN RISKS & MITIGATION**

### **Risk 1: S15 Timing Issue**
**Description**: S15 may read S12 values before S12 calculations complete
**Mitigation**: Reference Value Persistence Pattern ensures values are final before UI refresh

### **Risk 2: Complex Calculation Dependencies**
**Description**: S12 may have more complex calculation chains than S11
**Mitigation**: Apply changes incrementally, test after each phase

### **Risk 3: DHW Calculation Specifics**
**Description**: S12 DHW calculations may have unique mode-awareness requirements  
**Mitigation**: Follow S11 pattern but verify S12-specific calculation functions

---

## **📈 SUCCESS METRICS**

### **Immediate Success**:
- ✅ S12 Reference mode responds to S03 climate changes
- ✅ No FieldManager warnings for S12

### **Integration Success**:
- ✅ S15 logs no missing S12 Reference value warnings
- ✅ Complete S03→S12→S15 Reference data flow

### **Architecture Success**:
- ✅ Complete state isolation between Target/Reference modes  
- ✅ S12 matches S11 Pattern A compliance

---

## **🚀 NEXT STEPS**

### **Implementation Order**:
1. **✅ Complete S12 audit** using checklist above
2. **🔧 Apply fixes** following 5-phase workplan
3. **🧪 Test systematically** using testing protocol
4. **📚 Document results** for S13 template

### **S13 Preparation**:
Once S12 is complete, apply identical pattern to S13 with section-specific adaptations.

---

**End of S12 Troubleshooting Guide**

**🎯 Ready for Implementation Using Proven S11 Success Pattern** ✅
