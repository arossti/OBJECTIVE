# Section 07 (Water Use) Troubleshooting Guide

## Current Status ✅❌

### ✅ **RESOLVED ISSUES**
1. **Electric COP Slider Display**: Fixed nextElementSibling DOM update issue
2. **AFUE Field Updates**: k_52 now correctly updates to 0.90 for Gas/Oil (was 0)
3. **Fuel Type Reading**: S07 calculations now read d_51 from StateManager (eliminates "primer" issue)
4. **Fuel Volume Clearing**: Non-selected fuel volumes properly zeroed (e_51=0 when Oil, k_54=0 when Gas)
5. **State Management**: Proper separation of k_52 (AFUE) vs d_52 (efficiency slider)

### ❌ **REMAINING ISSUES**

#### **CRITICAL: Oil vs Gas h_10 TEUI Discrepancy**
- **Expected**: Oil and Gas should yield identical h_10 TEUI values (118 per Excel)
- **Observed**: Different TEUI values between Oil/Gas selections
- **Suspected**: Potential double-counting in j_32 calculation despite fuel clearing fixes

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
