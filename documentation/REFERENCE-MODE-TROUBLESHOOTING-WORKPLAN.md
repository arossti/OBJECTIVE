# Reference Mode Troubleshooting Workplan

**Created:** December 2024  
**Status:** Investigation Phase  
**Priority:** High - Critical UI functionality regression

## 📋 Problem Statement

### Current Issue
Reference Mode UI is **partially working**:
- ✅ **Input fields correctly show Reference values** (f_85 = 5.30 vs 9.35) with red styling
- ❌ **Calculated results still display Application values** (i_85 = 16,666.50) instead of Reference calculations (expected 29,402.23)

### Evidence from System Logs
- StateManager is working correctly: Loading "OBC SB10 5.5-6 Z6" with 127 reference values
- Reference data loading is successful - no errors in this process
- The issue is **post-calculation display**, not data loading

### What Was Working Previously
- Reference Mode functionality WAS working but regressed during refactoring
- User confirmed: "This functionality WAS working but regressed during subsequent refactors"

## 🚫 What We've Tried (And Failed)

### 1. Section calculateAll() Fixes
- **Modified**: Sections 09, 10, 11, 12 to respect Reference Mode
- **Approach**: Check `isReferenceMode()` and only run appropriate engine
- **Result**: Input fields work, calculated results don't

### 2. setTimeout Performance Fix  
- **Modified**: Section 10 slider handler
- **Approach**: Removed `setTimeout(calculateAll, 100)` 
- **Result**: Performance violation addressed, but main issue persists

### 3. Previous setDualEngineValue Attempts (Reverted)
- **Multiple approaches**: Various dual-state storage mechanisms
- **Result**: All reverted due to being incorrect/incomplete

## 🎯 How It SHOULD Work

### Expected Reference Mode Behavior
1. **Toggle Reference Mode ON**:
   - Input fields change to Reference values with red styling ✅ (Working)
   - Calculated results change to Reference calculations ❌ (Broken)
   - Example: f_85 changes from 9.35 → 5.30, i_85 changes from 16,666.50 → 29,402.23

2. **S01 Comparative Analysis** (Always available):
   - e_10 shows Reference calculations ✅ (Working based on logs)
   - h_10 shows Application calculations ✅ (Working)
   - This should work regardless of current UI mode

3. **Toggle Reference Mode OFF**:
   - All values revert to Application calculations and styling

### Technical Flow Specification
```
Reference Mode Toggle → 
  ReferenceToggle.js detects mode change →
  Calculator.calculateAll() →
  Section calculateAll() checks isReferenceMode() →
  IF Reference Mode: Only run calculateReferenceModel() →
  Reference values display in UI
```

## 🔧 Methodical Troubleshooting Plan

### Phase 1: Root Cause Analysis (Investigation Only)

#### Step 1: Baseline Confirmation ✅
- **Action**: Revert to touchstone commit ba275e8
- **Purpose**: Clean foundation with working TEUI calculations
- **Status**: COMPLETED

#### Step 2: Diagnostic Investigation (NO CODE CHANGES)
**Objective**: Understand WHY before implementing HOW

**Target Questions**:
1. **Are Reference calculations running?** 
   - Add diagnostic logging to `calculateReferenceModel()` execution
   - Verify Reference engine is called in Reference Mode

2. **Are Reference values being stored?** 
   - Check if `ref_i_85` exists in StateManager after Reference calculations
   - Verify dual-state storage mechanism

3. **Is setDualEngineValue working correctly?** 
   - Log what values it stores and where
   - Verify mode detection within storage logic

4. **Is Reference Mode detection working?** 
   - Verify `isReferenceMode()` returns correct boolean
   - Check timing of mode detection calls

5. **Are DOM elements being updated?** 
   - Check if DOM gets Reference values at all
   - Verify formatting and display pipeline

**Diagnostic Methodology**:
- Add temporary console.log statements (not permanent code)
- Check StateManager state in browser console manually
- Inspect DOM elements in Reference Mode using DevTools
- Compare Application vs Reference Mode step-by-step
- Document exact breakpoint in the data flow

#### Step 3: Flow Break Point Identification
Document where the flow breaks:
- [ ] Reference calculations run 
- [ ] Reference values stored with ref_ prefix  
- [ ] setDualEngineValue chooses correct storage
- [ ] DOM elements receive Reference values
- [ ] Display formatting applied correctly

### Phase 2: Targeted Fix (After Root Cause Identified)

Based on Phase 1 findings, implement **ONE** targeted fix:
- **If storage issue** → Fix setDualEngineValue logic
- **If display issue** → Fix DOM update logic  
- **If calculation issue** → Fix Reference calculation flow
- **If mode detection issue** → Fix isReferenceMode detection

**Implementation Rules**:
1. Make ONE change at a time
2. Test thoroughly after each change
3. Document the specific fix and rationale
4. Verify both Reference Mode AND S01 comparative analysis

## 🏁 Performance Violations Investigation

### Current Status
- **Chrome**: setTimeout violations present (`[Violation] 'setTimeout' handler took <N>ms`)
- **Safari**: No violations reported  

### Investigation Plan
1. **Audit remaining setTimeout calls** using grep results
2. **Identify problematic setTimeout patterns**:
   - Calculation sequencing delays
   - UI update delays that cause reflow
3. **Fix only performance-critical violations**
4. **Maintain calculation correctness**

### Known setTimeout Locations (From Previous Audit)
- Section 10: Slider handlers (FIXED)
- Section 01: Calculation sequencing 
- SectionIntegrator: Volume metrics updates
- StateManager: Reference data loading
- Multiple other locations requiring analysis

## 📈 Success Criteria

### Primary Goal
- Reference Mode displays Reference calculated values correctly
- Application Mode displays Application calculated values correctly
- S01 comparative analysis always available (e_10 vs h_10)

### Secondary Goals  
- Performance violations eliminated or minimized
- No regression in existing TEUI calculation functionality
- Clean, maintainable code architecture

## 📝 Documentation Requirements

### Investigation Phase
- Document each diagnostic finding
- Record exact breakpoint location
- Note any unexpected behavior patterns

### Implementation Phase
- Document the specific fix implemented
- Explain why this fix addresses the root cause
- Record test cases that verify the fix

### Completion Phase
- Update this workplan with resolution details
- Create regression test procedures
- Establish new touchstone commit if needed

---

## 🚨 Critical Notes

1. **No flood of code fixes** - Be methodical and surgical
2. **Understand WHY before implementing HOW**
3. **One change at a time, test thoroughly**
4. **Preserve S01 comparative analysis functionality**
5. **Document everything for future reference**

---

**Next Action**: Execute Phase 1, Step 2 - Diagnostic Investigation 