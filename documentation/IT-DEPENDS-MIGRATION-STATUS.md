# IT-DEPENDS Migration Status & Technical Prompt

## 🚨 CRITICAL: READ FIRST

**BEFORE PROCEEDING WITH ANY WORK:**

1. **READ `README.md` COMPLETELY** - Contains essential architectural patterns, anti-patterns, and proven solutions
2. **RESPECT THE ESTABLISHED ARCHITECTURE** - The "Traffic Cop" + Dual-Engine pattern is proven and working
3. **FOLLOW SECTION 13 AS GOLD STANDARD** - Copy the proven patterns, don't reinvent

**Key Architectural Requirements:**
- StateManager is single source of truth
- Reference/Application state isolation MUST be maintained  
- Recursion protection is mandatory for cross-section calculations
- Use proven helper functions (getNumericValue, setCalculatedValue, etc.)
- Test functions required for validation

---

# Technical Prompt for TEUI IT-DEPENDS Migration - Next Phase

## Project Context

**Current State**: TEUI 4.011 Calculator with successful Traffic Cop V2 dual-engine architecture implemented. Section 13 serves as the **gold standard** for complete IT-DEPENDS migration with 100% production-ready functionality.

**Strategic Achievement**: S13 demonstrates 97% console error reduction and ~70% performance improvement through dependency-driven calculations.

## Current IT-DEPENDS Migration Status

### ✅ **Completed Sections (Gold Standards)**
- **S03**: Complete IT-DEPENDS for climate calculations
- **S10**: Complete IT-DEPENDS for solar gains and orientation calculations  
- **S13**: **100% COMPLETE** - Full IT-DEPENDS with Oil↔Gas fix, comprehensive test suite, dual-engine working
- **S14**: Complete IT-DEPENDS for TEDI calculations, cross-section listeners implemented
- **S15**: Complete IT-DEPENDS for TEUI Summary, GHG reduction calculations, all listeners working

### 🔄 **Hybrid Sections (Partially Migrated)**
- **S11**: IT-DEPENDS calculations registered + area sync working
- **S12**: Traditional calculateAll() system (Volume Surface Metrics)

### 🔴 **Traditional Sections (Awaiting Migration)**
- **S01, S02, S04-S09**: Traditional calculateAll() systems

## Strategic Decision Point: Bugs vs. Architecture

**User's Question**: Should documented bugs be fixed before or after completing IT-DEPENDS migration?

**Recommended Approach**: **Architecture First, then Precision**

### Rationale:
1. **Simpler Sections**: Remaining sections are indeed much simpler than S13's complex mechanical systems
2. **Architectural Benefits**: IT-DEPENDS provides cleaner debugging environment
3. **Performance Foundation**: 70% calculation time reduction across all sections
4. **Bug Resolution**: Many bugs may resolve naturally with cleaner dependency management
5. **Development Velocity**: Proven S13 template makes migration ~30 minutes per section

## Next Steps - Priority Order

### **Phase 1: Complete Core Infrastructure (Priority 1)**

**Target Sections for Immediate Migration**:
1. **S14 (TEDI Summary)** - Critical for dependency chain, simpler than S13
2. **S15 (TEUI Summary)** - Final calculations, depends on S14  
3. **S01 (Key Values)** - Dashboard values, depends on S14/S15

**Expected Timeline**: 2-3 hours total using S13 template pattern

### **Phase 2: Complete Remaining Sections (Priority 2)**
4. **S04 (Actual vs. Target Energy)** - Energy comparison calculations
5. **S02 (Building Information)** - Project details, area inputs  
6. **S05-S09** - Intermediate sections (emissions, renewables, water, air quality, etc.)
7. **S12 (Volume Surface Metrics)** - Geometry calculations

**Expected Timeline**: 4-6 hours using proven patterns

### **Phase 3: Bug Triage and Precision (Priority 3)**
- Address documented bugs with improved IT-DEPENDS debugging tools
- Fine-tune calculation precision using cleaner architecture
- Resolve UI/UX issues with stable foundation

## Technical Implementation Guide

### **S13 Gold Standard Pattern** (Copy-Paste Template)

The following pattern from S13 should be replicated for each section:

```javascript
// 1. RECURSION PROTECTION
if (window.TEUI.sect[XX].calculationInProgress) return;
window.TEUI.sect[XX].calculationInProgress = true;

// 2. IT-DEPENDS REGISTRATIONS
sm.registerCalculation('field_id', function() {
    // Core calculation logic
    return calculatedValue;
}, 'Description');

// 3. SMART LISTENERS (for cross-section dependencies)
sm.addListener('dependency_field', function(newValue, oldValue) {
    // Trigger dependent calculations
});

// 4. DUAL-ENGINE ARCHITECTURE
function calculateReferenceModel() { /* Reference calculations */ }
function calculateTargetModel() { /* Application calculations */ }

// 5. TEST FUNCTION
function testSectionITDepends() { /* Validation suite */ }
```

### **Section-Specific Simplifications**

**For simpler sections (S02, S05-S09):**
- Fewer cross-section dependencies
- Simpler calculation chains  
- Less cooling/heating complexity
- Straightforward field registrations

**Expected per-section effort**: ~30 minutes using S13 template

## Key Technical Considerations

### **Dependency Chain Priority**
1. **S14 → S15 → S01**: Critical calculation flow
2. **S04**: Energy comparisons (moderate complexity)  
3. **S02, S05-S09**: Independent calculations (low complexity)
4. **S12**: Geometry metrics (moderate complexity)

### **Proven Success Patterns**
- **Recursion Protection**: Essential for cross-section stability
- **Smart Listeners**: Handle dependency triggers effectively  
- **Test Functions**: Validate registrations before deployment
- **Dual-Engine Helpers**: Maintain state hemisphere separation

### **Critical S13 Patterns to Copy**

From `sections/4011-Section13.js`, these patterns MUST be replicated:

```javascript
// Cross-section dependency listeners
sm.addListener('d_20', calculateAll); // HDD
sm.addListener('d_21', calculateAll); // CDD
sm.addListener('i_104', calculateAll); // Total Trans Loss
sm.addListener('k_104', calculateAll); // Total Ground Loss
sm.addListener('i_71', calculateAll); // Total Occ Gains
sm.addListener('i_79', calculateAll); // Total App Gains

// Smart listener pattern for dependent calculations
sm.addListener('m_129', () => { 
    coolingState.coolingLoad = window.TEUI.parseNumeric(getFieldValue('m_129')) || 0;
    calculateCoolingSystem();
    setCalculatedValue('m_124', coolingState.daysActiveCooling, 'integer');
});
```

### **Expected Performance Gains**
- **Console Errors**: 97% reduction (demonstrated in S13)
- **Calculation Time**: 70% reduction per section
- **Development Speed**: 30 minutes per simple section vs. hours for debugging

## Recommendation

**Proceed with IT-DEPENDS migration before addressing bugs.**

### Immediate Actions:
1. Start with **S14** using S13 template pattern
2. Complete **S15** and **S01** to establish core calculation chain
3. Migrate remaining sections systematically
4. **Then** address documented bugs with improved architecture

### Success Criteria:
- All sections have IT-DEPENDS registrations
- Cross-section dependencies work reliably
- Test functions validate each section
- Console errors <50 total (vs. current 1500+)
- Calculation time reduced by ~70%

**This approach prioritizes architectural stability and development velocity over immediate precision, setting up a much stronger foundation for addressing bugs systematically.**

---

## Implementation Notes

**Last Updated**: 2025-01-20  
**Status**: Ready for Phase 1 implementation  
**Next Agent**: Should begin with S14 TEDI Summary migration using S13 patterns 