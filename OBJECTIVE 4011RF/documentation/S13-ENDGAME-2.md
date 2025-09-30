# S13-ENDGAME-2.md: The Final Modular Refactoring Plan

**Version**: 3.0 (REVISED)
**Date**: September 30, 2025
**Status**: REVISED STRATEGY - Simpler approach based on Excel worksheet pattern, eliminates context complexity

---

## 1. Executive Summary (REVISED)

**CRITICAL INSIGHT**: The original S13-ENDGAME-2 "context objects" approach is **over-engineered**. Heating and ventilation calculations work fine in S13 - the ONLY problematic area is cooling calculations.

**REVISED APPROACH**: Keep S13 simple, delegate ONLY cooling to external module(s):
- **S13 keeps**: Heating calculations (H113, D114, etc.) - WORKING
- **S13 keeps**: Ventilation calculations (D119-D123) - WORKING
- **S13 delegates**: Cooling physics ONLY (Cooling.js mirrors COOLING-TARGET.csv)
- **No context objects**: Modules read directly from StateManager when needed

This mirrors the Excel architecture: FORMULAE worksheet (S13) references COOLING-TARGET worksheet via cross-references.

## 2. The Revised Principle: Keep S13 Simple (REVISED)

**What Changed**: Original plan called for extracting ALL calculations (heating, ventilation, cooling) into separate modules. This is unnecessary complexity.

**New Principle**: Extract ONLY the problematic cooling calculations.

### **S13 Architecture (REVISED):**

-   **S13 Section File (`4012-Section13.js`)**: 
    - Manages dual-state UI (ModeManager, TargetState, ReferenceState)
    - Calculates heating (H113, J113, D114, L113, etc.) - STAYS in S13
    - Calculates ventilation (D119-D123) - STAYS in S13
    - **Delegates cooling physics** to Cooling.js module
    - Uses CHEATSHEET Pattern 1 (temporary mode switching) for automatic mode awareness

-   **Cooling Module (`4012-Cooling.js`)**:
    - Mirrors COOLING-TARGET.csv worksheet
    - Calculates ONLY cooling physics (A6, A33, E55, atmospheric)
    - Accepts `mode` parameter: `calculateAll(mode = "target")`
    - Reads mode-aware StateManager values (`${prefix}d_21`)
    - Publishes mode-aware results (`${prefix}cooling_latentLoadFactor`)
    - **No context objects** - reads directly from StateManager

### **Why This Works:**
- S13 heating/ventilation calculations already work - don't touch them
- Cooling complexity isolated to dedicated module
- Mode-aware via parameter, not complex context building
- Eliminates initialization timing errors (no upfront validation)

## 3. The REVISED Workplan (Sept 30, 2025)

**SIMPLIFIED STRATEGY**: Methodical, testable approach focusing on what's actually broken.

### **Phase 1: Fix S13 Core Calculations (Heating & Ventilation) ✅ IN PROGRESS**

**Status**: Architectural cleanup complete, now fixing calculation bugs

**Completed**:
- ✅ Removed 600+ lines of debug/commented code
- ✅ Eliminated duplicate functions between S13 and Cooling.js
- ✅ 9/9 CHEATSHEET compliance achieved
- ✅ Single source of truth (field definitions)
- ✅ Strict error handling (no silent fallbacks)

**Current Task**: 
- 🔧 Fix heating calculation bugs (H113, J113, D114, L113, F114, etc.)
- 🔧 Fix ventilation calculation bugs (D119-D123)
- 🔧 Achieve Excel parity for S13 rows 113-124 (excluding cooling integration)

**Goal**: S13 heating/ventilation calculations match FORMULAE-3039.csv exactly.

---

### **Phase 2: Fix Cooling.js (Target Model Only)**

**After** S13 heating/ventilation works perfectly:

1. **Simplify Cooling.js** - Remove context complexity
   - Delete `createIsolatedCoolingContext()` from S13
   - Delete `coolingState`, `coolingContext` shared objects
   - Delete `runIntegratedCoolingCalculations()`
   - Cooling.js reads directly from StateManager (no upfront validation)

2. **Make Cooling.js mode-aware** via parameter:
   ```javascript
   // Cooling.js
   calculateAll(mode = "target") {
     const prefix = mode === "reference" ? "ref_" : "";
     const cdd = StateManager.getValue(`${prefix}d_21`);
     // ... calculate using mode-aware reads
     StateManager.setValue(`${prefix}cooling_latentLoadFactor`, result, "calculated");
   }
   ```

3. **S13 calls Cooling.js** for Target model:
   ```javascript
   function calculateTargetModel() {
     // S13 calculations (heating, ventilation)
     calculateCOPValues();
     calculateHeatingSystem();
     calculateVentilationRates();
     
     // Delegate to Cooling.js for Target
     window.TEUI.Cooling.calculateAll("target");
     
     // Use cooling results
     const i_122 = StateManager.getValue("cooling_latentLoadFactor");
     calculateCoolingVentilation(i_122); // S13 owns D122/D123
   }
   ```

4. **Test Target cooling** against COOLING-TARGET.csv
   - Verify A6, A33, E55 calculations
   - Achieve Excel parity for Target model
   - Confirm Clock.js works (no initialization errors)

**Goal**: Target model cooling calculations match COOLING-TARGET.csv exactly.

---

### **Phase 3: Add Reference Model Support**

**After** Target model works perfectly:

1. **Option A (Preferred)**: Single file with mode parameter
   - Cooling.js already mode-aware from Phase 2
   - S13 Reference model calls: `Cooling.calculateAll("reference")`
   - Test Reference cooling calculations

2. **Option B (Fallback)**: Separate Reference file
   - Clone Cooling.js → Cooling-Ref.js
   - Change all reads: `d_21` → `ref_d_21`
   - Change all writes: `cooling_` → `ref_cooling_`
   - S13 calls appropriate file per model

**Goal**: Reference model cooling calculations match COOLING-REFERENCE.csv (when created).

---

### **Phase 4: Pattern 1 Migration (Optional Future Enhancement)**

**After** both models work perfectly:

Consider migrating S13 to CHEATSHEET Pattern 1 (temporary mode switching):
- Replace `isReferenceCalculation` parameters
- Use automatic mode awareness
- Simplify calculation functions

**Goal**: Cleaner code, easier maintenance (not required for functionality).

---

### **Phase 5: Final Cleanup**

1. **Remove obsolete code**:
   - Delete `createIsolatedCoolingContext()`
   - Delete `coolingState` object
   - Delete `updateCoolingInputs()` 
   - Delete `runIntegratedCoolingCalculations()`

2. **Confirm state isolation**: Target/Reference modes fully independent

3. **Document architecture**: Update diagrams, comments

## 4. Success Criteria (REVISED)

The refactor is complete when:

-   ✅ `4012-Section13.js` is maintainable (achieved: 3,666 lines, down from 4,259)
-   ✅ S13 heating/ventilation calculations match FORMULAE-3039.csv (rows 113-123)
-   ✅ Cooling.js calculations match COOLING-TARGET.csv (A6, A33, E55)
-   ✅ Target model: All calculations achieve Excel parity
-   ✅ Reference model: All calculations achieve Excel parity
-   ✅ State isolation: Target/Reference modes fully independent
-   ✅ Clock.js works: No initialization errors
-   ✅ 9/9 CHEATSHEET compliance maintained

**NOT REQUIRED** (over-engineering):
-   ❌ Extract heating to separate module (works fine in S13)
-   ❌ Extract ventilation to separate module (works fine in S13)
-   ❌ Context objects (timing errors, unnecessary complexity)

---

## 5. Implementation Status (Sept 30, 2025)

### **✅ COMPLETED: Architectural Foundation**

**Commits 1-14** (see 4012-COOLING.md for details):
- File size reduction: 4,259 → 3,666 lines (-13.9%)
- Debug logging removed: 218 statements
- Duplicate functions eliminated: S13 vs Cooling.js delineated
- CHEATSHEET compliance: 9/9 phases pass
- Documentation: 4012-COOLING.md (755 lines), S13-CHEATSHEET-AUDIT.md (316 lines)

### **🔧 CURRENT PHASE: S13 Heating/Ventilation Bug Fixes**

**Known Issues**:
- Clock.js not displaying (caused by strict l_128 errors in createIsolatedCoolingContext)
- Heating calculations may have bugs (need Excel row-by-row comparison)
- Ventilation calculations may have bugs (need Excel row-by-row comparison)

**Approach**:
1. Fix heating calculations first (rows 113-115)
2. Fix ventilation calculations (rows 118-121)
3. Test against Excel for each row
4. Once S13 core works, move to Cooling.js

### **📋 NEXT PHASE: Cooling.js Simplification**

**After** S13 heating/ventilation achieves Excel parity:

1. Remove context complexity from S13:
   - Delete `createIsolatedCoolingContext()`
   - Delete `coolingState`, `updateCoolingInputs()`
   - Delete `runIntegratedCoolingCalculations()`

2. Refactor Cooling.js to mode-aware pattern:
   ```javascript
   calculateAll(mode = "target") {
     const prefix = mode === "reference" ? "ref_" : "";
     // Read mode-aware values
     const cdd = StateManager.getValue(`${prefix}d_21`) || 0;
     // Publish mode-aware results
     StateManager.setValue(`${prefix}cooling_latentLoadFactor`, result, "calculated");
   }
   ```

3. S13 orchestrates:
   ```javascript
   calculateTargetModel() {
     // ... S13 heating/ventilation ...
     Cooling.calculateAll("target");
     // Use cooling_latentLoadFactor, cooling_m_124, etc.
   }
   
   calculateReferenceModel() {
     // ... S13 heating/ventilation ...
     Cooling.calculateAll("reference");
     // Use ref_cooling_latentLoadFactor, ref_cooling_m_124, etc.
   }
   ```

4. Test Target cooling against COOLING-TARGET.csv

**Fallback Plan**: If single-file mode parameter doesn't work cleanly, use separate Cooling-Ref.js file.

---

## 6. Key Architectural Decisions (REVISED)

### **✅ KEEP in S13.js:**
- Heating system calculations (rows 113-115) - WORKING BEFORE CLEANUP
- Ventilation calculations (rows 118-123) - WORKING BEFORE CLEANUP
- Cooling system integration (D117, L114) - S13 owns per FORMULAE
- Free cooling orchestration (H124) - S13 applies setback to Cooling.js A33

### **✅ DELEGATE to Cooling.js:**
- Latent load factor (COOLING-TARGET A6)
- Daily free cooling physics (COOLING-TARGET A28-A33)
- Days active cooling (COOLING-TARGET E55)
- Atmospheric/humidity calculations (COOLING-TARGET A56-A63)
- Wet bulb temperature (COOLING-TARGET E64-E66)
- CED calculations D129/M129 (timing exception - stays in Cooling.js)

### **❌ DO NOT extract:**
- Heating calculations (no benefit, adds complexity)
- Ventilation calculations (no benefit, adds complexity)

---

## 7. Lessons Learned

### **What Didn't Work:**
- ❌ Context objects (`createIsolatedCoolingContext`) - timing errors, over-complexity
- ❌ Upfront validation - causes initialization failures
- ❌ Extracting working code - heating/ventilation work fine in S13

### **What Works:**
- ✅ Excel worksheet pattern - each JS file = one Excel worksheet
- ✅ StateManager as cross-worksheet reference mechanism
- ✅ Mode parameter for dual-state awareness
- ✅ Keep working code where it is (don't extract for "purity")
- ✅ Fix what's actually broken (cooling), not what works (heating/vent)

---

## 8. Current Status Summary

**File Quality**: ✅ Production-ready architecture (9/9 CHEATSHEET compliance)  
**Calculation Status**: 🔧 Needs bug fixes (heating, ventilation, cooling)  
**Next Step**: Row-by-row Excel comparison for S13 heating/ventilation  
**Future Step**: Cooling.js mode-aware refactor (after S13 core works)
