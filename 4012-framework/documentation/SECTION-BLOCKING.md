# TEUI 4.012 Framework - Section Development Workplan

## Overview
This document provides a structured plan for completing the TEUI 4.012 framework, focusing on implementing all sections, their calculations, and the wiring between them.

## Current Status (as of December 2024)

### ✅ Completed
1. **Core Infrastructure**
   - `4012-DualState.js` - State management with target/reference separation
   - `4012-SectionRenderer.js` - Grid-based rendering system
   - `4012-app.js` - Main application controller
   - `4012-styles.css` - Modern CSS Grid layout

2. **Sections Implemented**
   - **Section 01** - Key Values (3-column Reference/Target/Actual)
   - **Section 02** - Building Information (with correct dropdowns)
   - **Section 03** - Climate Calculations (with climate data)

### 🚧 Sections Needing Implementation
The following sections need to be created following the established pattern:

#### Phase 1: Core Energy Sections (Priority High)
- [ ] **Section 04** - Actual vs. Target Energy
- [ ] **Section 05** - CO2e Emissions  
- [ ] **Section 06** - Renewable Energy
- [ ] **Section 07** - Water Use
- [ ] **Section 08** - Indoor Air Quality

#### Phase 2: Building Systems (Priority Medium)
- [ ] **Section 09** - Occupant Internal Gains
- [ ] **Section 10** - Envelope & Airtightness
- [ ] **Section 11** - Mechanical Systems
- [ ] **Section 12** - Electrical Systems

#### Phase 3: Advanced Features (Priority Low)
- [ ] **Section 13** - Appendix E
- [ ] **Section 14** - Summary & Reporting

## Implementation Pattern

### 1. Section Module Structure
Each section should follow this pattern:

```javascript
// 4012-S[XX].js
(function() {
    'use strict';
    
    window.TEUI = window.TEUI || {};
    window.TEUI.v4012 = window.TEUI.v4012 || {};
    window.TEUI.v4012.Sections = window.TEUI.v4012.Sections || {};
    
    const S[XX] = {
        config: {
            id: 'sectionId',
            name: 'Section Name',
            number: 'XX'
        },
        
        getLayout: function() {
            // Return grid layout definition
        },
        
        initialize: function() {
            // Render and setup
        },
        
        calculations: {
            // Calculation functions returning { target, reference }
        }
    };
    
    window.TEUI.v4012.Sections.S[XX] = S[XX];
})();
```

### 2. Key Implementation Tasks per Section

#### For Each Section:
1. **Extract from 4011 source**:
   - Field definitions (IDs, types, labels)
   - Dropdown options (exact strings)
   - Calculation formulas
   - Dependencies between fields

2. **Create layout definition**:
   - Header row with proper subheaders
   - Data rows with correct cell types
   - Proper colspan handling
   - Maintain Excel column mapping (A-N)

3. **Implement calculations**:
   - Pure functions returning `{ target, reference }`
   - Use tuple pattern for dual-engine
   - Handle unit conversions
   - Validate against Excel formulas

4. **Wire dependencies**:
   - Cross-section field dependencies
   - State change listeners
   - Calculation triggers

## Calculation Wiring Strategy

### 1. Dependency Graph
Create a clear dependency map:

```
Section 02 (Building Info)
├── d_12 (Occupancy) → Section 03 (h_23, h_24)
├── d_13 (Standard) → Section 01 (T1, T2, T3 values)
├── h_15 (Area) → Multiple sections
└── d_15 (Carbon Standard) → Section 05

Section 03 (Climate)
├── j_19 (Climate Zone) → Section 10, 11
├── d_20 (HDD) → Section 04
├── d_21 (CDD) → Section 04
└── h_23/h_24 (Setpoints) → Section 11
```

### 2. State Management Pattern
```javascript
// Register calculation
state.registerCalculation('fieldId', () => {
    const input1 = state.getValue('dependency1');
    const input2 = state.getValue('dependency2');
    return calculateResult(input1, input2);
});

// Listen for changes
state.addListener('dependency1', () => {
    state.recalculate('fieldId');
});
```

### 3. Cross-Section Communication
Use events for loose coupling:
```javascript
// Emit from source section
document.dispatchEvent(new CustomEvent('occupancy-changed', {
    detail: { value: occupancyType }
}));

// Listen in dependent section
document.addEventListener('occupancy-changed', (e) => {
    this.updateCalculations(e.detail.value);
});
```

## Testing Strategy

### 1. Unit Tests per Section
- Test each calculation function independently
- Verify tuple returns `{ target, reference }`
- Check edge cases and null handling

### 2. Integration Tests
- Test cross-section dependencies
- Verify state propagation
- Check calculation chains

### 3. Visual Regression Tests
- Compare layouts with 4011 screenshots
- Verify responsive behavior
- Check print layouts

## Migration Checklist

For each section migration from 4011 to 4012:

- [ ] Extract all field definitions
- [ ] Map Excel columns to grid layout
- [ ] Copy exact dropdown options
- [ ] Convert calculations to tuple pattern
- [ ] Remove Excel dependencies
- [ ] Implement state management
- [ ] Add event handlers
- [ ] Test calculations
- [ ] Verify UI matches 4011
- [ ] Document any deviations

## Next Steps for Agent

### Immediate Priority (Session 1)
1. Implement Section 04 - Actual vs. Target Energy
   - Critical for energy calculations
   - Dependencies: S02 (area), S03 (climate)
   - Contains key TEUI calculations

### Session 2
2. Implement Section 05 - CO2e Emissions
   - Dependencies: S04 (energy use)
   - Carbon intensity calculations

### Session 3
3. Implement Section 10 - Envelope
   - Complex calculations
   - Many sub-components
   - Dependencies: S03 (climate)

## Code Quality Guidelines

1. **Consistency**
   - Follow established patterns
   - Use same naming conventions
   - Maintain code style

2. **Documentation**
   - Comment complex calculations
   - Document Excel formula sources
   - Explain any deviations

3. **Performance**
   - Minimize recalculations
   - Cache expensive operations
   - Use requestAnimationFrame for UI updates

## Resources

### Reference Files
- `/sections/4011-Section[XX].js` - Original implementations
- `/sources of truth 3037/FORMULAE-3039.csv` - Excel formulas
- `/documentation/4011-*.md` - Technical documentation

### Key Patterns
- Tuple calculations: `return { target: X, reference: Y }`
- State management: `DualState.setValue(id, value)`
- Grid layout: 14 columns (A-N)
- No ES6 modules, use IIFE pattern

## Success Criteria

The framework is complete when:
1. All 14 sections are implemented
2. All calculations match Excel outputs
3. Cross-section dependencies work
4. UI matches 4011 design
5. No Excel file dependencies remain
6. Performance is acceptable (<100ms updates)

---

*This workplan provides a clear path forward for any agent (including future Claude instances) to continue the development work systematically.* 