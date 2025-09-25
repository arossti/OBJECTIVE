# S13-ENDGAME.md: The Final, Architecturally-Compliant Refactor for Section 13

**Version**: 1.0
**Date**: September 12, 2025 (Updated Sept 23rd, 2025)
**Status**: This document outlines the definitive and final refactoring plan for Section 13 to achieve perfect dual-state compliance, building upon the critical insights gathered in `S13-MASTER-WORKPLAN.md`.

---

## 1. Executive Summary

This document details the official endgame for the Section 13 refactor. The extensive diagnostic work and iterative fixes documented in `S13-MASTER-WORKPLAN.md` were not in vain; they were essential in uncovering that the persistent state-mixing issues with the `g_118` dropdown are not due to a simple bug, but a fundamental architectural mismatch.

The previous refactor attempted a "Parameter-based" approach (Pattern 2), which the `4012-CHEATSHEET.md` correctly identifies as fragile and insufficient for a section with the complexity of S13's cooling engine.

The definitive solution is to upgrade Section 13 to the project's gold-standard, **"Pattern 1: Temporary Mode Switching"**. This plan outlines the precise, methodical steps to implement this robust architecture, ensuring Section 13 becomes fully compliant, stable, and free of state contamination. This is not another iterative fix; it is the implementation of the project's proven, correct architectural pattern.

## 2. The Root Cause: An Architectural Mismatch

The core issue can be summarized as follows:

- **The `g_118` Anomaly**: While simpler dropdowns (`d_113`, `d_116`) were successfully isolated, `g_118` triggers a deeply interconnected cooling calculation engine.
- **The Flawed Pattern**: The previous refactor attempted to isolate this engine by passing parameters and a context object down the calculation chain.
- **The Point of Failure**: This "Pattern 2" approach failed because the cooling engine still contained legacy code that could access shared state, creating a "back door" for data from the Target model to contaminate the Reference model, and vice-versa.

## 3. The Definitive Solution: Full Compliance with "Pattern 1"

As detailed in `4012-CHEATSHEET.md`, Pattern 1 is the most reliable architecture for complex sections. It makes state isolation implicit and automatic, even for shared modules like the cooling engine. We will now implement this pattern precisely.

### The Step-by-Step Implementation Plan

This plan will be executed methodically to ensure a successful and final resolution.

#### **Phase 1: Implement Temporary Mode Switching**

This is the foundational step of Pattern 1. It ensures that the entire execution context is unambiguously set for either a Target or Reference calculation.

1.  **Modify `calculateTargetModel()`**: Wrap the entire function body in a `try...finally` block.
    -   In the `try` block, the first line will be `ModeManager.currentMode = "target";`.
    -   In the `finally` block, the mode will be restored to its original state.
2.  **Modify `calculateReferenceModel()`**: Apply the exact same `try...finally` pattern, but set the mode to `ModeManager.currentMode = "reference";`.

#### **Phase 2: Purge Legacy Patterns & Simplify the Code**

With the mode now being set automatically, we can remove the now-redundant and fragile code from the previous "Pattern 2" attempt.

1.  **Remove `isReferenceCalculation` Parameter**: Go through the entire calculation chain (`calculateHeatingSystem`, `calculateCoolingSystem`, `runIntegratedCoolingCalculations`, etc.) and remove the `isReferenceCalculation` boolean parameter from all function signatures and calls.
2.  **Delete `createIsolatedCoolingContext` function**: This function's purpose is now obsolete. The temporary mode switch handles the context implicitly.

#### **Phase 3: Unify and Isolate State Access**

This phase ensures that all functions read from the correct, mode-aware data source automatically.

1.  **Refactor `updateCoolingInputs()`**: This function will be simplified. Its sole job is to populate the cooling engine's state object. It will no longer need to build a complex context.
2.  **Standardize All Data Reads**: All functions within the calculation chain will be updated to use `ModeManager.getValue("field_id")` for reading section-internal state and a mode-aware global reader (e.g., `getModeAwareGlobalValue('d_20')`) for reading upstream dependencies. These functions will automatically return the correct value based on the `currentMode` set in Phase 1.

## 4. Success Criteria

This refactor will be considered complete and successful when the following conditions are met:

1.  **Perfect State Isolation for `g_118`**:
    -   When in **Target mode**, changing `g_118` ONLY affects the Target TEUI (`h_10`). The Reference TEUI (`e_10`) remains completely stable.
    -   When in **Reference mode**, changing `g_118` ONLY affects the Reference TEUI (`e_10`). The Target TEUI (`h_10`) remains completely stable.
2.  **"Cooling Bump" Eliminated**: The `h_10` value settles on its correct final value after a single calculation pass. The need to trigger a second calculation (the "cooling bump") is permanently gone.
3.  **Full Architectural Compliance**: Section 13 is now a textbook implementation of "Pattern 1" as defined in the `4012-CHEATSHEET.md`, making it robust, maintainable, and consistent with the project's best practices.

## 5. Calculation Parity Workplan

**Status**: ✅ **MAJOR BREAKTHROUGH ACHIEVED - 100% EXCEL PARITY!** (Sept 23, 2025)  
**Achievement**: h_10 = 93.7 (perfect Excel match!)  
**Previous**: h_10 = 93.6 (months of near-miss)  
**Root Cause Fixed**: S13/S14 m_129 cross-section dependency issue resolved

### **Sept 23, 2025 Success Summary**

**The Breakthrough**: Fixed S13/S14 m_129 calculation architecture
- **Phase 1**: Added missing Reference listeners (ref_d_129, ref_h_124, ref_d_123) to S13
- **Phase 2**: Fixed calculateMitigatedCED to read Reference values properly  
- **Phase 3**: Removed S14's duplicate m_129 calculation, established hybrid ownership
- **Result**: 100% Excel parity achieved for the first time!

**Hybrid Architecture Established**:
- **S13**: Owns m_129 calculation (for immediate d_117 use, prevents circular dependencies)
- **S14**: Displays m_129 field (reads from S13 via StateManager)
- **Clean Flow**: S13 calculates → publishes → S14 displays

### **Remaining Known Issue: "Cooling Bump" Requirement**

**Current Behavior**: 
- Initial calculation: h_10 = 93.4 
- After "Cooling bump" (toggle d_116): h_10 = 93.7 (correct)
- **Issue**: Calculations need manual trigger to settle to correct values

**Next Priority**: Eliminate the need for manual "Cooling bump" to achieve immediate 93.7 result

**Approach**: Address S13 calculation sequencing/timing rather than major refactor
- Maintain current working architecture (100% Excel parity achieved)
- Focus on calculation ordering and dependency chain timing
- Preserve dual-state isolation and hybrid m_129 architecture

### **Known Technical Debt (Sept 23, 2025)**

**ESLint Errors to Address:**
- `calculateSpaceHeatingEmissions` function not defined (referenced in S13 files)
- Multiple S13 backup files have same undefined function reference - can be safely ignored as focus is on the 13.js working file. 
- 140+ unused variable warnings (code cleanup opportunity)

**Status**: Non-critical for functionality, but should be cleaned up for code quality

### **Phase 1: Diagnose Calculation Drift**

1. **Compare cooling load calculations** between S13-CONTEXT.js (working) and current S13
2. **Verify cooling state isolation** - ensure Target/Reference don't share coolingState object
3. **Check if DOM updates** are triggering properly through updateTargetModelDOMValues()
4. **Validate upstream dependencies** (d_127, m_129, l_128) are being read correctly

### **Phase 2: Restore Calculation Accuracy**

1. **Audit cooling physics functions** - ensure calculateAtmosphericValues, calculateLatentLoadFactor match CONTEXT
2. **Check coolingState vs isolated context** - Pattern 1 may need isolated cooling contexts per mode
3. **Verify ventilation method calculations** - g_118 method logic must match Excel exactly
4. **Test fuel impact calculations** - Oil/Gas emissions must trigger correctly on AFUE/volume changes

### **Phase 3: Validation & Testing**

1. **Excel baseline comparison** - All S13 calculations must match Excel codebase exactly
2. **Mode isolation verification** - Target/Reference calculations must remain independent
3. **Dependency chain testing** - Upstream changes must propagate correctly to S01 totals
4. **Performance optimization** - Remove any remaining calculation stickiness/delays

### **Success Criteria for Calculation Parity**

- ✅ **State isolation maintained** (already achieved)
- 🎯 **h_10 = 90.9** when d_116 = "No Cooling"  
- 🎯 **h_10 = 93.6** when d_116 = "Cooling" with default settings
- 🎯 **e_10 = 211** for Reference model baseline
- 🎯 **S01 totals match** expected Excel values
- 🎯 **All ventilation changes** trigger immediate recalculations

## 6. September 14, 2025 GOAL: Methodical Rebuild Strategy

**Assessment**: The Pattern 1 refactor successfully achieved state isolation but broke calculation parity by moving too fast. We need a more careful, progressive approach that maintains both architectural integrity AND calculation accuracy.

### **The New Path Forward**

**Philosophy**: Build the final S13 refactor on solid foundations with continuous validation, just as we carefully constructed the CONTEXT version step-by-step with Chunk A, B, C methodology.

### **Phase 1: Establish Known Calculation Baseline**

**Objective**: Calibrate all 4011RF sections to match Excel defaults in both Reference and Target modes.

1. **Section-by-Section Excel Alignment**:
   - Verify S14 and S15 Target calculations match Excel exactly
   - Ensure S04 and S01 downstream flow produces expected totals
   - Confirm Reference states across all sections match Excel baseline values
   - Rule out any unexpected values in Reference states

2. **Target Flow Validation**:
   - S14 → S15 → S04 → S01 calculation chain verification
   - Known good: S13 Target state isolation (current working file)
   - Known issue: S13 Target calculation accuracy needs work

3. **Reference Flow Validation**:
   - Ensure all Reference calculations use proper building code defaults
   - Verify Reference state isolation is maintained across all sections
   - Confirm no unexpected contamination in any Reference calculations

**Success Criteria Phase 1**: All sections except S13 show perfect Excel parity in both modes.

### **Phase 2: Progressive S13 Refactor with Continuous Validation**

**Selected Baseline**: **S13-CONTEXT (current Section13.js)** - CHOSEN as optimal starting point

**Why CONTEXT was selected**:
- ✅ **State isolation achieved** - g_118 contamination resolved with Pattern 1 architecture
- ✅ **"Cooling bump" eliminated** - Added A7 dual calculation triggers (h_10 = 93.4 vs target 93.6)
- ✅ **Functional baseline established** - Stable heating system switching with automatic convergence
- ✅ **Comprehensive architecture** - Full dual-state implementation with temporary mode switching
- ✅ **Known foundation** - Build upon proven state isolation rather than starting from scratch

**Alternative Options (preserved for reference)**:
- **Option A**: S13-OFFLINE - Pre-context with calculation accuracy in Target mode only
- **Option B**: S13-A7-TARGET-CORRECT - Legacy system with known calculation accuracy, good for comparison
- **Option C**: S13-AGGRESSIVE - Failed aggressive refactor documented as cautionary example

**Methodology**: Focus on calibration and fine-tuning rather than major refactor:

1. **Section-by-Section Excel Calibration (S02-S12)**:
   - Verify each section's Target defaults match Excel baseline values exactly
   - Ensure Reference defaults align with building code standards
   - Confirm calculation flow S14 → S15 → S04 → S01 produces expected totals
   - Rule out any upstream calculation drift affecting S13 inputs

2. **S13 Fine-Tuning (Current CONTEXT Baseline)**:
   - Current status: h_10 = 93.4 (target 93.6) - 99% accurate ✅
   - Focus on minor calculation precision rather than major refactor
   - Preserve working state isolation and cooling bump elimination
   - Address remaining 0.2 difference through targeted adjustments

3. **Continuous Validation**:
   - Test each section calibration for Excel parity
   - Verify S13 changes don't break state isolation
   - Maintain functional baseline while improving accuracy
   - Document any changes that affect calculation results

### **Phase 3: Final Integration & Validation**

1. **Complete S13 Integration**: Ensure final S13 has both perfect state isolation and Excel parity
2. **Full System Testing**: Verify entire 4011RF system works with new S13
3. **Performance Optimization**: Address any remaining calculation stickiness
4. **Documentation**: Update all documentation to reflect final architecture

### **Key Learnings Applied**

- ✅ **State isolation architecture** - we know this works from current S13
- ✅ **Calculation accuracy** - we know this works from OFFLINE/CONTEXT versions  
- ✅ **Progressive methodology** - build incrementally with continuous validation
- ✅ **Known baselines** - start from proven calculation foundations

**Target Completion**: September 14, 2025 - Final S13 with both perfect state isolation AND Excel calculation parity.

---

## 4. Reference Contamination Investigation (Sept 24, 2025)

### **BREAKTHROUGH: S13 Confirmed as Primary Contamination Source**

**Problem**: Target location changes (S03: Alexandria → Attawapiskat) cause Reference e_10 to jump from 211.6 → 243.8 when Reference should remain unchanged.

**CRITICAL DISCOVERY (Sept 24, 2025)**: Testing with S13-AGGRESSIVE file **completely resolved S03 state mixing** but broke cooling calculations. This proves **S13 is the primary contamination source**.

**Root Cause Confirmed**: S13's current Reference calculation logic contains contamination patterns that affect downstream S14/S15 calculations, causing Reference model to use Target-derived values.

### **Contamination Sources Identified & Status:**

#### **✅ S14 (TEDI Section) - FIXED**
**Issue**: `getRefValue()` function with fallback logic:
```javascript
// ❌ BEFORE: Contaminated fallback pattern
const i97 = parseFloat(getRefValue("i_97")) || 0; // Could fallback to Target!

// ✅ AFTER: Pure Reference reads
const i97 = parseFloat(window.TEUI?.StateManager?.getValue("ref_i_97")) || 0;
```
**Status**: ✅ Fixed - all S14 Reference calculations now use pure ref_ prefixed values

#### **✅ S15 (TEUI Section) - FIXED**  
**Issue**: Same `getRefValue()` fallback contamination pattern
**Status**: ✅ Fixed - eliminated all getRefValue calls, now uses direct ref_ reads

#### **✅ S04 (Energy Totals) - CLEARED AS CONTAMINATION SOURCE**
**Investigation Result**: S04 debug logging revealed NO S04 Reference calculations triggered by S03 Target location changes
**Analysis**: S04 Row 27 correctly reads external S15 values (`ref_d_136` vs `d_136`), Row 32 correctly sums j_27 values
**Root Cause**: S04 is correctly reading contaminated upstream values - contamination source is upstream in calculation chain
**Status**: ✅ Cleared - S04 architecture is correct, issue is upstream

#### **❓ UPSTREAM CONTAMINATION SOURCES - INVESTIGATION PRIORITIES**

**S12 (Volume Metrics) - i_104 Investigation:**
- **Issue**: S14 reads `ref_i_104` for Reference TED calculations
- **Investigation**: Verify S12 publishes clean `ref_i_104` values that don't change when Target location changes
- **Pattern**: Check if S12 Reference calculations use contaminated climate values

**S13 (Mechanical Loads) - PRIMARY CONTAMINATION SOURCE CONFIRMED:**
- **PROOF**: S13-AGGRESSIVE file test completely resolved state mixing when S13 was properly isolated
- **Issue**: Current S13 Reference calculations contaminate downstream S14/S15 via m_121, d_114 values
- **Critical Problems**:
  1. **getRefValue fallback patterns**: Similar to S14/S15 contamination patterns we fixed
  2. **Missing ref_ value publishing**: S13 likely not publishing clean ref_m_121, ref_d_114, etc.
  3. **Internal state contamination**: S13's Reference calculations using Target heating loads or climate data
  4. **Calculation accuracy vs state isolation**: Need S13 refactor that achieves BOTH (like S13-AGGRESSIVE had isolation but broke cooling)

**Investigation Strategy**:
- Check if S12/S13 publish clean ref_ values for S14/S15 consumption
- Verify S12/S13 Reference calculations don't use Target climate or heating values
- Look for fallback contamination patterns in S12/S13 Reference logic

### **Anti-Pattern Analysis for S13 Completion:**

**Key Anti-Patterns to Eliminate in S13:**
1. **Fallback Contamination**: Any `getRefValue()` or similar functions that fall back to Target values
2. **ModeManager Internal State**: Reference calculations reading from internal state that could be contaminated
3. **Missing ref_ Publishing**: Reference calculations not storing results with ref_ prefix for downstream consumption
4. **Cross-State Function Calls**: Reference calculations calling Target calculation functions

**Strategic Approach**: Complete S13-ENDGAME refactor to achieve both perfect state isolation (like S13-AGGRESSIVE) AND calculation accuracy (like current version). Apply same contamination elimination patterns used successfully in S14/S15, but with careful preservation of working cooling calculations.

### **S13 Completion Priority (Sept 24, 2025)**

**CONFIRMED**: S13 is the final piece needed for complete dual-state system stability. The S13-AGGRESSIVE test proves that proper S13 state isolation eliminates the Reference contamination issue entirely.

**Completion Strategy**:
1. **Apply S14/S15 contamination fixes to S13**: Eliminate getRefValue fallbacks, use direct ref_ reads
2. **Preserve cooling calculation accuracy**: Don't break working cooling physics from current S13
3. **Ensure proper ref_ publishing**: S13 must publish clean ref_m_121, ref_d_114 for downstream consumption
4. **Test systematically**: Verify both state isolation AND cooling calculation accuracy

**Success Criteria**: S13 refactor that achieves S13-AGGRESSIVE's state isolation without breaking cooling calculations.

---

## 7. Claude Code Strategic Additions (Sept 24, 2025 - 12:50am)

### **Assessment: Surgical Precision Required**

Given the 100% Excel parity achievement (h_10 = 93.7) and the graveyard of failed S13 refactors, this is now a **timing/sequencing issue**, not an architectural problem. The conservative approach is exactly right.

### **Phase 0: Deep Dive Debugging (Before Any Code Changes)**

**Objective**: Understand the exact mechanism of the "cooling bump" before touching any code.

1. **"Cooling Bump" Forensics**:
   - Log the precise calculation sequence difference between:
     - Initial run: h_10 = 93.4
     - Post-bump: h_10 = 93.7 (correct)
   - Capture which specific functions/calculations are triggered by the manual d_116 toggle
   - Document the dependency chain that gets re-executed

2. **Calculation Sequence Mapping**:
   - Trace the exact order of function calls in both scenarios
   - Identify which calculation is "missing" on first pass
   - Determine if it's a dependency timing issue or state update sequence problem

3. **Minimal Impact Analysis**:
   - Since calculations work perfectly with manual trigger, identify the smallest possible code change
   - Focus on replicating the bump effect automatically rather than refactoring

### **Phase 1.5: Ultra-Conservative Testing Framework**

**Objective**: Create a safety net before making any changes.

1. **Regression Safety Net**:
   - Automated verification that h_10 = 93.7 AND state isolation work before/after changes
   - Test both Target and Reference model independence
   - Quick rollback strategy if working state breaks

2. **Surgical Implementation Strategy**:
   - Preserve the cooling engine itself - avoid touching core calculations
   - Focus on dependency ordering or missing function calls
   - Make the minimum change that eliminates manual trigger requirement

### **Key Strategic Insights**

1. **Preserve What Works**: Current system achieves 100% Excel parity - this is gold
2. **Timing Over Architecture**: This feels like dependency sequencing, not a Pattern 1 refactor need
3. **Surgical Precision**: Given complexity and previous failures, minimal change approach is critical
4. **Trust the Process**: The methodical, conservative approach learned from failed attempts is wise

### **Critical Success Factors**

- **No breaking changes**: Maintain h_10 = 93.7 and state isolation at all costs
- **Minimal code impact**: Find the smallest change that replicates bump effect
- **Continuous validation**: Test after every small change
- **Quick rollback capability**: Be ready to revert if anything breaks

**Ready to execute with surgical precision on Sept 24, 2025** 🎯

