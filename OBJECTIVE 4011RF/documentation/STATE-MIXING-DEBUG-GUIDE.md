# 🚨 STATE MIXING DEBUG GUIDE

## **CRITICAL ISSUE IDENTIFIED**

**Problem**: Perfect state isolation is NOT achieved. Reference mode changes in S13 are contaminating Target values in S01.

**Evidence**: Target TEUI `h_10` changes from `93.6` (correct heatpump) to `154.3` (electricity) or `156` (gas) when ONLY Reference mode edits are made in S13.

## **DEBUGGING METHODOLOGY**

### **Phase 1: Establish Baseline Understanding**

**REQUIRED READING** (in order):
1. `README.md` - Architecture overview
2. `DUAL-STATE-IMPLEMENTATION-GUIDE.md` - Pattern A vs Pattern B, dual-engine principles
3. Current issue evidence in `Logs.md` (lines 1066, 1279, 1538, 1548)

### **Phase 2: Trace Contamination Flow**

**CRITICAL PRINCIPLE**: Both Target and Reference engines should run in parallel, but they must be **mode-aware** in their storage operations.

**Key Questions**:
1. Which section is writing to global `j_32` during Reference operations?
2. Why is S15's Target engine storing to global state during Reference calculations?
3. Are the `setCalculatedValue()` overrides in Reference functions working correctly?

### **Phase 3: Systematic Diagnostic Logging**

**Target Functions for Logging**:
- `S15.calculateValues()` (lines 1795-1799) - Direct `h_10` writes
- `S04.calculateRow32()` - Global `j_32`/`k_32` writes  
- Any `setCalculatedValue()` calls during Reference operations

**Logging Pattern**:
```javascript
console.log(`[DEBUG] ${sectionName} - Mode: ${currentMode}, Writing: ${field}=${value}`);
```

## **DUAL-ENGINE ARCHITECTURE FUNDAMENTALS**

### **S01 Dashboard/Consumer Pattern**:
S01 is a **pure data consumer** with **NO Target/Reference mode** because it displays all three building models simultaneously:
- **Column E (Reference)**: Reference Building Model values (`ref_j_32`, `ref_k_32`, etc.)
- **Column H (Target)**: Target Building Model values (`j_32`, `k_32`, etc.) 
- **Column K (Actual)**: Utility bill values (`f_32`, `g_32`, etc.)

S01 **never stores calculated values** - it only reads and displays upstream calculations.

### **Parallel Dual-Engine Flow**:

**CORE PRINCIPLE**: Both Target and Reference calculations **always run in parallel** when ANY data changes, regardless of UI mode. The calculations are **mode-aware in their STORAGE operations**.

#### **Correct Flow (Reference Mode Change)**:
1. **User changes S13 Reference mode** → Triggers dual-engine calculations
2. **S13 Target Engine**: Runs, stores to `j_32`, `k_32` (unchanged values) ✅
3. **S13 Reference Engine**: Runs, stores to `ref_j_32`, `ref_k_32` (updated values) ✅
4. **S15 Target Engine**: Runs, stores to `j_32`, `k_32` (unchanged values) ✅
5. **S15 Reference Engine**: Runs, stores to `ref_j_32`, `ref_k_32` (updated values) ✅
6. **S04 Target Engine**: Runs, stores to `j_32`, `k_32` (unchanged values) ✅
7. **S04 Reference Engine**: Runs, stores to `ref_j_32`, `ref_k_32` (updated values) ✅
8. **S01 reads and displays**:
   - Column E: `ref_j_32`, `ref_k_32` (shows Reference changes) ✅
   - Column H: `j_32`, `k_32` (stays at Target defaults) ✅
   - Column K: `f_32`, `g_32` (utility bills, unchanged) ✅

#### **Current Broken Flow**:
1. **S13 Reference change** → Correctly stores `ref_` values ✅
2. **Downstream engines** → Target engines incorrectly contaminate global state ❌
3. **S01 Column H** → Shows contaminated Target values ❌

### **Mode-Aware Storage Pattern**:

**Target Engine** should ALWAYS store to unprefixed fields (`j_32`, `k_32`)
**Reference Engine** should ALWAYS store to `ref_` prefixed fields (`ref_j_32`, `ref_k_32`)

**UI Mode Toggle** is just a **display filter** - it shows either Target or Reference values that are already calculated and stored in StateManager.

### **StateManager Registration Pattern**:

**CRITICAL**: Every calculation must be registered in StateManager with proper state isolation:

```javascript
// TARGET ENGINE - ALWAYS stores unprefixed
StateManager.setValue("j_32", targetValue);
StateManager.setValue("k_32", targetValue);
StateManager.setValue("h_10", targetTEUI);

// REFERENCE ENGINE - ALWAYS stores ref_ prefixed  
StateManager.setValue("ref_j_32", referenceValue);
StateManager.setValue("ref_k_32", referenceValue);
StateManager.setValue("ref_h_10", referenceTEUI);
```

**The Problem**: Some Target engines are incorrectly storing updated values during Reference operations instead of preserving existing Target defaults.

**Expected**: When user changes Reference mode, Target values in StateManager should remain **completely unchanged** from their defaults or previous Target calculations.

## **TEST SCENARIO: S13 Reference Mode Edits**

### **User Test Sequence**:
1. **Load app** with preset defaults
2. **Navigate to S13**, switch to **Reference UI mode**  
3. **Change primary heating fuel** (`d_113`) from Electricity → Heatpump → Oil → Gas
4. **Observe S01 columns** for contamination

### **EXPECTED BEHAVIOR**:
**✅ S01 Column E (Reference)**: Should update to show Reference building calculations  
**✅ S01 Column H (Target)**: Should remain at `h_10=93.6` (heatpump default) - **NO CHANGES**  
**✅ S01 Column K (Actual)**: Should remain unchanged (utility bills)  

### **ACTUAL BROKEN BEHAVIOR**:
**❌ S01 Column H (Target)**: Changes from `93.6` → `154.3` (electricity) → `156` (gas)  
**❌ Global j_32**: Changes during Reference operations  
**❌ State contamination**: Reference edits affecting Target model  

### **CONTAMINATION EVIDENCE FROM LOGS**:

```
Line 1066: h_10=93.6 (✅ CORRECT - Target at heatpump default before contamination)
Line 1269: j_32 changed from 133574... to 220216... (❌ CONTAMINATION - Target j_32 changing during Reference op)
Line 1279: h_10=154.3 (❌ CONTAMINATED - Target TEUI showing electricity values)
Line 1538: j_32 changed from 220165... to 222610... (❌ CONTINUED CONTAMINATION)
Line 1548: h_10=156 (❌ FURTHER CONTAMINATION - Target TEUI showing gas values)
```

**Critical Point**: The Target building model should maintain heatpump characteristics (`h_10=93.6`) regardless of Reference mode fuel changes. Any change to Target `j_32` or `h_10` during Reference operations indicates **mode-awareness failure** in upstream calculations.

## **DEBUGGING QUESTIONS FOR FRESH AGENT**

1. **Read the architecture guides** - Do you understand dual-engine principles?
2. **Examine the logs** - Can you see the exact contamination pattern?
3. **Identify the culprit** - Which section is writing global `j_32` during Reference ops?
4. **Propose focused fix** - How do we make that section mode-aware?

## **SUCCESS CRITERIA**

✅ **Perfect State Isolation**: Reference changes in S13 should NEVER affect Target values in S01  
✅ **Target column stability**: `h_10` stays at `93.6` during Reference operations  
✅ **Reference column functionality**: Values update correctly from `ref_` prefixed upstream data  

## **FILES TO FOCUS ON**

- `sections/4011-Section15.js` (suspected Target engine contamination)
- `sections/4011-Section04.js` (global j_32/k_32 writes)
- `4011-SectionIntegrator.js` (orchestration logic)
- `documentation/Logs.md` (contamination evidence)

## **NEXT STEPS**

1. **Fresh debugging session** with clean context
2. **Focused diagnostic logging** on suspected contamination points
3. **Targeted fix** once root cause identified
4. **Verification testing** to confirm perfect state isolation
5. **Resume S05-S07 refactoring** once debugging complete

---

**Remember**: The issue is NOT the SectionIntegrator calling both engines - that's correct. The issue is that one of the engines is incorrectly storing to global state during mode-aware operations.