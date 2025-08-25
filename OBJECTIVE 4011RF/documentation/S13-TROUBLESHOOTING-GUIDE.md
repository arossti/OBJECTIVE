# **S13 TROUBLESHOOTING GUIDE - DUAL-STATE REFERENCE MODE**

**Date**: December 29, 2024  
**Status**: **🔍 AUDIT PHASE - Ready for Implementation**  
**Section**: S13 (Space Heating & Cooling)  
**Success Template**: S11 Reference Value Persistence Pattern ✅

---

## **🎯 OBJECTIVE**

Fix S13 Reference mode "stuck values" issue using the proven S11 success pattern. S13 should respond to S03 climate changes in Reference mode and maintain complete state isolation between Target and Reference modes.

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

## **🧪 CURRENT STATUS ASSESSMENT**

### **What We Know From Earlier Testing**:
1. **✅ Target Mode**: S13 functions perfectly in Target mode
2. **❌ Reference Mode**: Known to be unresponsive to S03 climate changes
3. **✅ Some Reference Architecture**: Already has `ref_d_20`, `ref_d_21`, `ref_d_22`, `ref_h_22` listeners from earlier sessions
4. **⚠️ Complex Calculations**: More sophisticated than S11/S12, may have unique challenges

### **Expected Issues (Based on S11/S12 Pattern)**:
1. **Missing ModeManager Export**: FieldManager integration failures
2. **Pattern B Contamination**: Hardcoded `target_` prefixed reads in calculation functions
3. **Incomplete DOM Updates**: Missing fields in `updateCalculatedDisplayValues`
4. **Reference Value Overwrites**: Race conditions with downstream sections
5. **Complex Calculation Chains**: Multiple interdependent calculation functions

---

## **🔍 SYSTEMATIC AUDIT CHECKLIST**

### **📋 Phase 1: Foundation Architecture** 
**Expectation**: S13 likely has complete Pattern A architecture (like S11/S12)

#### **✅ Check 1.1: ModeManager Export**
```bash
grep -n "ModeManager:" sections/4011-Section13.js
```
**Expected**: Missing from return statement (consistent pattern)

#### **✅ Check 1.2: State Objects**
```bash
grep -n "ReferenceState\|TargetState\|ModeManager" sections/4011-Section13.js
```
**Expected**: Objects exist but ModeManager not exported

#### **✅ Check 1.3: Dual-Engine calculateAll**
```bash
grep -A 10 -B 5 "calculateAll.*function" sections/4011-Section13.js
```
**Expected**: Has `calculateReferenceModel()` and `calculateTargetModel()` calls

---

### **📋 Phase 2: Pattern B Contamination Detection**
**Critical**: S13 likely has extensive `target_` contamination due to complexity

#### **🚨 Check 2.1: target_ Climate Reads**
```bash
grep -n "target_d_2[0-2]\|target_h_22" sections/4011-Section13.js
```
**Expected**: Multiple instances found (S13 is complex)

#### **🚨 Check 2.2: target_ HVAC Parameters**
```bash
grep -n "target_.*COP\|target_.*efficiency" sections/4011-Section13.js
```
**Expected**: HVAC-specific contamination patterns

#### **🚨 Check 2.3: All getGlobalNumericValue Patterns**
```bash
grep -n "getGlobalNumericValue.*target_" sections/4011-Section13.js
```
**Expected**: Extensive anti-pattern usage

---

### **📋 Phase 3: DOM Update Coverage**
**Critical**: S13 has many calculated fields, likely incomplete coverage

#### **✅ Check 3.1: updateCalculatedDisplayValues Fields**
```bash
grep -A 30 "updateCalculatedDisplayValues" sections/4011-Section13.js
```
**Expected**: Limited field coverage compared to total calculated fields

#### **✅ Check 3.2: S13 Calculated Fields Inventory**
**Search for**: All `setCalculatedValue()` calls to identify complete field list
**Expected**: Many more fields than currently covered in `updateCalculatedDisplayValues`

---

### **📋 Phase 4: Reference External Listeners**
**Status**: Already added in earlier sessions, verify completeness

#### **✅ Check 4.1: Reference Climate Listeners**
```bash
grep -n "ref_d_2[0-2]\|ref_h_22.*addListener" sections/4011-Section13.js
```
**Expected**: Should be present from earlier work

#### **✅ Check 4.2: Reference Building Data Listeners**
```bash
grep -n "ref_.*addListener" sections/4011-Section13.js
```
**Expected**: May need additional S11/S12 Reference dependencies

---

### **📋 Phase 5: Complex Calculation Chain Analysis**
**S13-Specific**: Multiple calculation functions, sophisticated logic

#### **🚨 Check 5.1: Heating Calculation Functions**
```bash
grep -n "function.*heating\|function.*Heating" sections/4011-Section13.js
```
**Expected**: Multiple heating-related functions needing mode-awareness

#### **🚨 Check 5.2: Cooling Calculation Functions**
```bash
grep -n "function.*cooling\|function.*Cooling" sections/4011-Section13.js
```
**Expected**: Multiple cooling-related functions needing mode-awareness

#### **🚨 Check 5.3: Heat Pump / COP Functions**
```bash
grep -n "function.*COP\|function.*heatPump" sections/4011-Section13.js
```
**Expected**: Complex efficiency calculations needing mode-awareness

---

## **🛠️ IMPLEMENTATION WORKPLAN**

### **🎯 SUCCESS CRITERIA**
1. **S13 Reference mode responds to S03 climate changes** (no stuck values)
2. **All S13 calculated fields update** in Reference mode
3. **Complete state isolation** between Target and Reference modes
4. **Complex HVAC calculations work** correctly in both modes
5. **No race conditions** using Reference Value Persistence Pattern

---

### **🔧 PHASE 1: Foundation Fix (15 minutes)**
**Template**: Exactly like S11/S12 Phase 1

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

### **🔧 PHASE 2: Fix Pattern B Contamination (35 minutes)**
**Note**: S13 likely has more extensive contamination than S11/S12

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

#### **2.2 Fix HVAC-Specific Contamination**
```javascript
// ❌ PATTERN B (if found):
const target_cop_heating = getGlobalNumericValue("target_cop_h");
const target_efficiency = getGlobalNumericValue("target_sys_eff");

// ✅ PATTERN A:
// Make all HVAC parameter reads mode-aware
const cop_heating = isReferenceCalculation 
  ? getGlobalNumericValue("ref_cop_h") 
  : getGlobalNumericValue("cop_h");
```

#### **2.3 Update All Calculation Functions**
**Systematic approach**: Each heating/cooling function needs mode-awareness review
- `calculateHeatingEnergy()` functions
- `calculateCoolingEnergy()` functions  
- `calculateHeatPumpCOP()` functions
- Any function reading external climate/building data

---

### **🔧 PHASE 3: Complete DOM Update Coverage (25 minutes)**
**Note**: S13 has many calculated fields, comprehensive coverage needed

#### **3.1 Identify All S13 Calculated Fields**
```bash
# Find all setCalculatedValue calls to build complete field list
grep -n "setCalculatedValue" sections/4011-Section13.js
```

#### **3.2 Expand updateCalculatedDisplayValues**
```javascript
updateCalculatedDisplayValues: function() {
  if (!window.TEUI?.StateManager) return;
  
  const calculatedFields = [
    // ✅ ADD: ALL S13 calculated fields including:
    // Heating energy fields
    // Cooling energy fields  
    // Efficiency fields
    // Summary/total fields
    // Equipment sizing fields
    // ... (comprehensive list from audit)
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

### **🔧 PHASE 4: Enhanced Reference Listeners (10 minutes)**
**Template**: Verify and expand S13 Reference dependencies

#### **4.1 Verify Climate Listeners (Already Done)**
```javascript
// ✅ VERIFY: Should exist from earlier sessions
window.TEUI.StateManager.addListener("ref_d_20", () => calculateAll());
window.TEUI.StateManager.addListener("ref_d_21", () => calculateAll());  
window.TEUI.StateManager.addListener("ref_d_22", () => calculateAll());
window.TEUI.StateManager.addListener("ref_h_22", () => calculateAll());
```

#### **4.2 Add S11/S12 Reference Dependencies (If Needed)**
```javascript
// ✅ ADD IF S13 depends on S11/S12 Reference values:
window.TEUI.StateManager.addListener("ref_i_98", () => calculateAll());  // S11 totals
window.TEUI.StateManager.addListener("ref_g_101", () => calculateAll()); // S12 outputs
// ... other upstream Reference dependencies
```

---

### **🔧 PHASE 5: Reference Value Persistence Pattern (30 minutes)**
**Template**: S11's proven solution, adapted for S13 complexity

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
  
  // Store ALL Reference calculation results
  const referenceOutputs = {
    // Heating energy results
    heating_field_1: calculated_heating_value_1,
    heating_field_2: calculated_heating_value_2,
    
    // Cooling energy results  
    cooling_field_1: calculated_cooling_value_1,
    cooling_field_2: calculated_cooling_value_2,
    
    // Summary totals
    total_field_1: calculated_total_1,
    // ... all S13 Reference calculated fields
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
1. **✅ ModeManager Export**: No FieldManager warnings for S13
2. **✅ Mode Switching**: Toggle between Target/Reference works
3. **✅ Complex State**: S13 loads without errors despite complexity

### **Test Sequence B: Reference Responsiveness**
1. **✅ S03 Climate Changes**: Vancouver → Iqaluit in Reference mode
   - **Expected**: All S13 heating/cooling values update immediately
2. **✅ Internal Changes**: Modify S13 Reference mode fields
   - **Expected**: Complex calculations update immediately
3. **✅ HVAC Parameters**: Change efficiency settings in Reference mode
   - **Expected**: System calculations respond correctly

### **Test Sequence C: Calculation Complexity**
1. **✅ Heating Calculations**: Verify heating energy updates with climate
2. **✅ Cooling Calculations**: Verify cooling energy updates with climate  
3. **✅ Heat Pump COP**: Verify efficiency calculations work in Reference mode
4. **✅ System Integration**: Multiple calculation chains work together

### **Test Sequence D: State Isolation**
1. **✅ No Contamination**: Reference changes don't affect Target
2. **✅ Mode Switching**: Complex state values preserved for each mode
3. **✅ HVAC Independence**: Heating/cooling systems maintain separate states

---

## **⚠️ KNOWN RISKS & MITIGATION**

### **Risk 1: Calculation Complexity**
**Description**: S13 has multiple interdependent calculation functions
**Mitigation**: Apply Pattern B fixes systematically to each function, test incrementally

### **Risk 2: HVAC Parameter Interactions**
**Description**: Heat pump, heating, cooling calculations may interact in complex ways
**Mitigation**: Use Reference Value Persistence Pattern to ensure all results are preserved

### **Risk 3: Performance Impact**
**Description**: S13 calculations are computationally intensive
**Mitigation**: Reference Value Persistence adds minimal overhead, no setTimeout usage

### **Risk 4: Downstream Dependencies**
**Description**: S13 feeds many values to S14→S15, timing critical
**Mitigation**: Re-write pattern ensures final values available before UI refresh

---

## **📈 SUCCESS METRICS**

### **Immediate Success**:
- ✅ S13 Reference mode responds to S03 climate changes
- ✅ No FieldManager warnings for S13
- ✅ All heating/cooling calculations update in Reference mode

### **Complexity Success**:
- ✅ Heat pump COP calculations work in Reference mode
- ✅ Multiple calculation chains maintain state isolation
- ✅ System efficiency parameters respond correctly

### **Architecture Success**:
- ✅ Complete state isolation between Target/Reference modes  
- ✅ S13 matches S11/S12 Pattern A compliance
- ✅ No performance regressions despite complexity

---

## **🚀 NEXT STEPS**

### **Implementation Order**:
1. **✅ Complete S13 audit** using checklist above
2. **🔧 Apply fixes** following 5-phase workplan (allow extra time for complexity)
3. **🧪 Test systematically** using testing protocol
4. **📚 Document results** for remaining sections

### **Post-S13 Strategy**:
With S11, S12, S13 complete, the downstream flow S14→S15→S04→S01 should work correctly, resolving the S10 nGains propagation issue.

---

## **🎯 S13-SPECIFIC CONSIDERATIONS**

### **HVAC Calculation Functions**:
S13 has multiple specialized calculation functions that may need individual mode-awareness review:
- Heating system sizing and efficiency
- Cooling system sizing and efficiency  
- Heat pump COP calculations
- Auxiliary heating calculations
- Domestic hot water integration

### **Climate Sensitivity**:
S13 is heavily dependent on climate data, making Pattern B contamination particularly problematic:
- HDD drives heating calculations
- CDD drives cooling calculations
- Ground temperatures affect heat pump efficiency
- All must be mode-aware

### **Integration Complexity**:
S13 integrates data from multiple upstream sections:
- S11 transmission losses/gains
- S12 ventilation requirements
- S02 building characteristics
- S03 climate data
- All integration points need Reference mode support

---

**End of S13 Troubleshooting Guide**

**🎯 Ready for Implementation Using Proven S11 Success Pattern** ✅  
**⚠️ Allow Extra Time for HVAC Calculation Complexity** 🕒
