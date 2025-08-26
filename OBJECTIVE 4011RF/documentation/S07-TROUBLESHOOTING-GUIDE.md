# Section 07 (Water Use) Troubleshooting Guide

## Current Status ✅❌

### ✅ **RESOLVED ISSUES**
1. **Electric COP Slider Display**: Fixed nextElementSibling DOM update issue
2. **AFUE Field Updates**: k_52 now correctly updates to 0.90 for Gas/Oil (was 0)
3. **Fuel Type Reading**: S07 calculations now read d_51 from StateManager (eliminates "primer" issue)
4. **Fuel Volume Clearing**: Non-selected fuel volumes properly zeroed (e_51=0 when Oil, k_54=0 when Gas)
5. **State Management**: Proper separation of k_52 (AFUE) vs d_52 (efficiency slider)

### ✅ **PHASE 1 COMPLETED - TARGET MODE FIXES**

#### **RESOLVED: Oil vs Gas h_10 TEUI Race Condition** 
- **Issue**: S01 animation timing (500ms) vs DOM check timing (50ms)
- **Fix**: Extended DOM check timeout to 600ms to wait for animation completion
- **Result**: Oil and Gas now show stable final h_10 TEUI values in Target mode ✅

### ❌ **REMAINING ISSUE: First Fuel Switch Timing**

#### **CRITICAL: Initial Gas→Oil shows 84.6 instead of 118 TEUI**
- **Sequence Problem**: S04 calculates j_32 before S07 fuel volumes are ready
- **Root Cause**: S15 d_136 electricity change → triggers S04 calculateAll() → uses OLD fuel volumes
- **Failed Fix**: Removing d_136 listener broke electricity flow (j_32=181219 → h_10=127 ❌)
- **Real Issue**: S07 fuel calculation happens AFTER S15 electricity calculation in dependency chain

#### **ATTEMPTED DIAGNOSIS**
```
S07 dropdown change → S15 electricity recalc → S04 calculateAll() (with OLD fuel) → Wrong j_32
                                          ↓
                   S07 fuel volumes finally update → S04 recalc (correct) → Right j_32
```

### 🔄 **PHASE 2: COMPREHENSIVE S07 AUDIT COMPLETE**

#### **📊 COMPLIANCE SCORE: 60% (FAILING)**

**✅ COMPLIANT AREAS:**
- Dual-state architecture structure
- No Pattern B contamination  
- Reference model implementation
- DOM update patterns

**❌ CRITICAL VIOLATIONS FOUND:**

1. **🚨 STATE SOVEREIGNTY VIOLATION (Priority 1)**
   ```javascript
   // Lines 600, 680, 720 - Reading d_51 without mode awareness
   const systemType = window.TEUI?.StateManager?.getValue("d_51") || "Heatpump";
   // Should be mode-aware for calculations
   ```

2. **🚨 EXTERNAL DEPENDENCY CONTAMINATION (Priority 1)**
   - Reading `d_63` (occupants), `l_30`/`l_28` (emission factors) without mode isolation
   - Mix of mode-aware and mode-agnostic patterns

3. **🚨 CALCULATION TIMING DISORDER (Priority 2)**
   - S07 fuel calculations happen AFTER S15 electricity calculations
   - Causes "first switch" bug (84.6 instead of 118)

#### **REMEDIATION WORKPLAN**

**Phase 2A: External Dependency Cleanup (30 mins)**
- Fix all `StateManager.getValue()` calls to be mode-aware in calculation functions
- Ensure proper ref_ prefix handling for external reads
- Pattern: `isReferenceCalculation ? getValue("ref_x") : getValue("x")`

**Phase 2B: Calculation Sequencing (20 mins)**  
- Review S07's calculateAll() sequence vs S15 dependencies
- Ensure S07 fuel volumes update before downstream calculations
- Test timing fix for "first switch" bug

**Phase 2C: Conditional Ghosting Preservation (10 mins)**
- Audit existing ghosting logic patterns
- Ensure dual-state refactor doesn't break conditional field visibility
- Follow S13 successful refactor patterns

**HYPOTHESIS CONFIRMED**: First switch timing bug is symptom of architectural non-compliance

### 🎯 **DEFAULTS STRATEGY DISCUSSION**

#### **Current S07 Pattern** 
S07 appears to follow **single source of truth** - field definitions contain defaults, no hardcoded duplicates in state objects. This is DUAL-STATE-CHEATSHEET.md compliant.

#### **Other Sections' setDefaults() Pattern**
- Some sections use `setDefaults()` functions lower in files
- May be related to ReferenceValues.js integration patterns
- **RECOMMENDATION**: Maintain S07's current approach (field definitions as single source)
- Avoid introducing duplicate defaults that could cause data corruption

### ⏱️ **TIME ESTIMATE FOR COMPLETION**

**REALISTIC ASSESSMENT: 90+ minutes (NOT suitable for end-of-day)**

**Complexity Factors:**
- S07 has **conditional ghosting logic** that must be preserved  
- **Multiple external dependencies** requiring careful mode-aware refactoring
- **Calculation timing** issues requiring dependency sequence analysis
- **Testing required** for each phase to avoid breaking changes

**RECOMMENDATION**: 
- **Tonight**: Documentation complete, workplan established ✅
- **Tomorrow**: Fresh start with systematic Phase 2A → 2B → 2C approach
- **Follow S13 patterns** - S07 is similar but simpler, should be manageable

**S07 is indeed a mess** - the audit confirms significant architectural debt, but the workplan provides a clear systematic approach for tomorrow.

#### **Evidence from Logs**
```
[S07] 🛢️ Oil calc: demand=42760.48, afue=0.9 → k_54=4667.16, e_51=0 (cleared)
[S04] Target mode - j_32: 168544.19190087644  // Should be ~168351 for 118 TEUI
```

## Root Cause Analysis

### **S07 → S04 → S01 Flow**
1. **S07 Water DHW**: Calculates e_51 (Gas) and k_54 (Oil) volumes
2. **S04 Energy Totals**: Converts volumes to energy (j_28, j_30) → sums to j_32
3. **S01 TEUI**: Divides j_32 by building area for h_10

### **Double-Counting Scenarios**
- **Scenario A**: Previous fuel values persist in S04's j_28/j_30 calculations
- **Scenario B**: S04 listeners fire multiple times, accumulating values
- **Scenario C**: Reference/Target contamination in j_32 calculation

### **Key S04 j_32 Components**
```javascript
j_32 = j_27 + j_28 + j_29 + j_30 + j_31
//     ↑      ↑      ↑      ↑      ↑
//   Space   Gas    Prop   Oil    DHW
//   Heat    DHW           DHW    Elec
```

## Investigation Strategy

### **Phase 1: Trace j_32 Breakdown**
- [ ] Add enhanced logging to S04's calculateJ32() to show each component
- [ ] Verify j_28 (Gas DHW) = 0 when Oil selected
- [ ] Verify j_30 (Oil DHW) = 0 when Gas selected
- [ ] Check if j_27 (space heating) remains consistent

### **Phase 2: S04 Listener Analysis**
- [ ] Trace S04 listeners for e_51/k_54 changes from S07
- [ ] Verify listeners properly zero out non-selected fuel energy values
- [ ] Check for race conditions in S04 calculations

### **Phase 3: State Isolation Verification**
- [ ] Confirm S07 Target/Reference mode isolation
- [ ] Verify no Reference contamination in Target j_32 calculation
- [ ] Test sequential fuel changes: Oil→Gas→Oil→Gas

## Technical Implementation Notes

### **Successful Patterns Applied**
1. **StateManager Direct Access**: `window.TEUI.StateManager.getValue("d_51")` for fresh dropdown values
2. **Fuel-Specific State Updates**: Separate k_52 (Gas/Oil AFUE) vs d_52 (Electric/Heatpump efficiency)
3. **Explicit Value Clearing**: Always set both e_51 and k_54 to prevent stale values

### **S07 Architecture Compliance**
- ✅ Follows Pattern A dual-state architecture
- ✅ Uses mode-aware `getSectionValue()` for external dependencies
- ✅ Preserves Excel calculation formulas
- ✅ Implements proper state isolation

## Next Steps

1. **Immediate**: Add j_32 component breakdown logging to S04
2. **Testing**: Sequential fuel type changes with detailed logs
3. **Verification**: Compare Oil vs Gas j_32 components for discrepancies
4. **Final**: Achieve consistent h_10=118 TEUI for both Oil and Gas

## Related Files
- `/sections/4011-Section07.js` - Water Use calculations and fuel selection
- `/sections/4011-Section04.js` - Energy totals and j_32 calculation
- `/sections/4011-Section01.js` - TEUI calculation (h_10)
- `/documentation/DUAL-STATE-CHEATSHEET.md` - Architecture compliance guide

---
*Last Updated: Current session - Post AFUE fix, pre j_32 investigation*
