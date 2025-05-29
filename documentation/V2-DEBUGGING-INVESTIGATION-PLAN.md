# V2 Debugging Investigation Plan
## Post-Refactor Calculation Regression Analysis

---

## **INVESTIGATION COMPLETED - December 2024** ✅

### **Key Discovery: Main Branch Already Has Dual-Engine Architecture**

**Surprising Finding**: Main branch ALREADY implements dual-engine architecture in Section 15:
- ✅ Has `calculateReferenceModel()` and `calculateTargetModel()` functions
- ✅ `calculateAll()` runs BOTH engines simultaneously  
- ✅ Uses `ref_` prefix for Reference values
- ✅ Has `setRefValueIfChanged` helper for Reference calculations

### **Architecture Understanding Corrected**

**Previous Assumption (WRONG)**: Main = single engine, SSv2 = dual engine  
**Reality**: Both main and SSv2 have dual engines, but SSv2 has calculation errors

### **Root Cause Identified: Data Source Isolation**

The calculation engines are **mixing data sources** instead of maintaining isolation:

**Should Be**:
- **Reference Engine**: Gets ALL values from Reference sources (standards + overrides)
- **Target Engine**: Gets ALL values from Target sources (user design inputs)

**Currently in SSv2**: Engines are cross-contaminating data between Reference and Target sources

### **Critical Dual-Engine Concepts Validated**

User's clarification: *"I think of this like two completely separate apps"*

1. **Reference Model**: Uses Reference standard values (from d_13 code selection), applies Reference efficiency ratings (f_113 = 7.1 HSPF), always calculates and reports to S01 for performance dashboard

2. **Target Model**: Uses Target/Design values (user inputs), uses user-specified equipment efficiency, calculates actual design performance

### **UI Mode Behavior (Corrected Understanding)**

**Reference Mode**: Shows Reference calculations in UI reflecting Reference standard values (NOT just overrides, but actual Reference calculations displayed)

**Target Mode**: Shows ONLY Target calculations (Exception: S01 shows both as performance dashboard)

### **Next Phase Focus**

1. Compare `getNumericValue()` methods between main and SSv2
2. Trace data flows to find contamination points  
3. Ensure **perfect data source isolation** where each engine operates as completely separate application

**Architecture Principles Validated**:
- ✅ Both engines always run (correct behavior)
- ✅ S01 shows both columns (performance dashboard concept)  
- ✅ UI mode controls user interaction (not calculation scope)
- ❌ Data source isolation (this is where SSv2 is failing)

---

## **PROBLEM STATEMENT**
After V2 refactor implementation, web app calculations no longer match Excel baseline. 
- **Pre-V2**: Web app TEUI ~93.6 (close to Excel parity)
- **Post-V2**: Significant deviation from Excel values
- **Suspected Cause**: Cross-state contamination despite V2 infrastructure

---

## **PHASE 1: BASELINE VALIDATION** ⏱️ *Est: 2-3 hours*

### **1.1 Excel Reference Verification**
- [ ] Confirm Excel calculations are using identical default data
- [ ] Document Excel values for all key metrics in both modes:
  - Reference Mode: TEUI, Annual Carbon, Lifetime Carbon
  - Target Mode: TEUI, Annual Carbon, Lifetime Carbon
- [ ] Screenshot/record Excel Section 1 results for comparison baseline

### **1.2 Initial Web App State Check**
- [ ] Fresh browser session (clear cache/storage)
- [ ] Load app with default data only
- [ ] **DO NOT CHANGE ANY VALUES** - test virgin state
- [ ] Record Section 1 results in both Reference and Target modes
- [ ] Compare against Excel baseline values

---

## **PHASE 2: SECTION-BY-SECTION VALIDATION** ⏱️ *Est: 4-6 hours*

### **2.1 Systematic Section Testing Protocol**

For **each section** (S07, S09, S10, S11), follow this exact sequence:

#### **Step A: Reference Mode Validation**
1. Switch to Reference Mode
2. Fresh browser reload
3. Navigate to section
4. Record all calculated values
5. Compare against Excel Reference Mode
6. ✅ **PASS CRITERIA**: Values match Excel within 1%

#### **Step B: Target Mode Validation** 
1. Switch to Target Mode (from Reference)
2. **DO NOT RELOAD** - test mode switching
3. Record all calculated values
4. Compare against Excel Target Mode
5. ✅ **PASS CRITERIA**: Values match Excel within 1%

#### **Step C: Cross-Contamination Test**
1. Switch back to Reference Mode
2. Record values again
3. ✅ **PASS CRITERIA**: Values identical to Step A

### **2.2 Section Priority Order**
1. **Section 07** (Known working baseline)
2. **Section 10** (Radiant Gains - recently modified)
3. **Section 09** (Internal Gains - recently modified)  
4. **Section 11** (Transmission Losses - recently modified)

---

## **PHASE 3: DIAGNOSTIC LOGGING IMPLEMENTATION** ⏱️ *Est: 2-3 hours*

### **3.1 StateManager Logging**
Add console logging to track state changes:

```javascript
// In StateManager.js
setApplicationValue(fieldId, value, skipEmit = false) {
    console.log(`🔵 APP SET: ${fieldId} = ${value}`);
    // ... existing code
}

setReferenceValue(fieldId, value, skipEmit = false) {
    console.log(`🔴 REF SET: ${fieldId} = ${value}`);
    // ... existing code
}

getValue(fieldId) {
    const value = // ... existing logic
    console.log(`📖 GET: ${fieldId} = ${value} (mode: ${this.referenceMode ? 'REF' : 'APP'})`);
    return value;
}
```

### **3.2 Section Calculation Logging**
For each section, add logging in calculation functions:

```javascript
// At start of calculateApplicationModel
console.log(`🧮 Starting APP calculations for Section XX`);

// At start of calculateReferenceModel  
console.log(`📊 Starting REF calculations for Section XX`);

// For each setDualEngineValue call
console.log(`💾 Setting dual value: ${fieldId} = APP:${appValue}, REF:${refValue}`);
```

### **3.3 ReferenceToggle Logging**
Track mode switching events:

```javascript
// In ReferenceToggle.js
console.log(`🔄 Mode Switch: ${this.referenceMode ? 'REF' : 'APP'} → ${!this.referenceMode ? 'REF' : 'APP'}`);
```

---

## **PHASE 4: SYSTEMATIC DEBUGGING** ⏱️ *Est: 3-4 hours*

### **4.1 Isolation Testing**
For each **FAILING** section:

1. **Single Section Load Test**
   - Comment out other section calculations in Calculator.js
   - Test isolated section against Excel
   - Identifies if issue is within-section or cross-section

2. **Value Flow Tracing**
   - Use console logs to trace specific failing values
   - Follow the path: input → calculation → state storage → retrieval
   - Identify where contamination occurs

3. **State Dump Comparison**
   - Add helper function to dump complete state:
   ```javascript
   dumpState() {
       console.log('📋 APPLICATION STATE:', this.applicationState);
       console.log('📋 REFERENCE STATE:', this.referenceState);
   }
   ```

### **4.2 Common Contamination Patterns**
Check for these specific issues:

- [ ] **Mode-unaware getValue() calls** in sections
- [ ] **Direct state access** bypassing StateManager APIs
- [ ] **Shared object references** between app/ref states
- [ ] **Event listeners** not using V2 APIs
- [ ] **Cross-section dependencies** using wrong getValue method

---

## **PHASE 5: VERIFICATION & CLEANUP** ⏱️ *Est: 1-2 hours*

### **5.1 Fix Validation**
After each fix:
1. Re-run full Section-by-Section Validation (Phase 2)
2. Confirm Excel parity restored
3. Verify no new regressions

### **5.2 Debug Cleanup**
Remove all console.log statements added during investigation:
1. StateManager.js logging
2. Section calculation logging  
3. ReferenceToggle logging
4. State dump functions

### **5.3 Final Acceptance Test**
- [ ] Fresh browser session
- [ ] Load with default data
- [ ] Test all modes and sections
- [ ] Confirm clean console (no debug noise)
- [ ] **SUCCESS CRITERIA**: Web app values match Excel within 1%

---

## **TOOLS & UTILITIES**

### **Browser Console Helpers**
```javascript
// Quick state inspection
window.debugState = () => {
    console.log('Current Mode:', window.stateManager.referenceMode ? 'Reference' : 'Application');
    console.log('App State:', window.stateManager.applicationState);
    console.log('Ref State:', window.stateManager.referenceState);
};

// Value comparison helper
window.compareValue = (fieldId) => {
    const app = window.stateManager.applicationState[fieldId];
    const ref = window.stateManager.referenceState[fieldId];
    console.log(`${fieldId}: APP=${app}, REF=${ref}, EQUAL=${app === ref}`);
};
```

### **Excel Comparison Template**
| Section | Metric | Excel Ref | Excel Target | Web Ref | Web Target | ✅/❌ |
|---------|--------|-----------|--------------|---------|------------|-------|
| S01 | TEUI | 253.2 | 165.6 | ? | ? | ? |
| S01 | Annual Carbon | 12.9 | 8.4 | ? | ? | ? |
| S01 | Lifetime Carbon | 19.8 | 15.3 | ? | ? | ? |

---

## **SUCCESS METRICS**
- ✅ All sections show Excel parity (within 1%)
- ✅ Reference Mode never contaminates Application State  
- ✅ Mode switching works bidirectionally
- ✅ Clean console output (no debug artifacts)
- ✅ Performance maintained (no calculation delays)

---

## **ESTIMATED TIMELINE**
- **Day 1**: Phases 1-3 (Setup, Testing, Logging) - 6-8 hours
- **Day 2**: Phases 4-5 (Debugging, Fixes, Cleanup) - 4-6 hours
- **Total**: 10-14 hours over 2 days

---

*Document created for systematic V2 debugging investigation*  
*Last updated: [Current Date]* 