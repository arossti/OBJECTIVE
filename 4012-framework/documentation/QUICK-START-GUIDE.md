# TEUI 4.012 Framework - Quick Start Guide

## 🚀 For the Next Agent

Welcome! You're continuing work on the TEUI 4.012 framework. Here's what you need to know to get started immediately.

## Current State
- **Branch**: `4012-FRAMEWORK`
- **Location**: `/4012-framework/`
- **Sections Complete**: 01 (Key Values), 02 (Building Info), 03 (Climate)
- **Next Priority**: Section 04 (Actual vs. Target Energy)

## Key Architecture Decisions

### 1. No ES6 Modules
```javascript
// ❌ DON'T DO THIS
import { something } from './module.js';

// ✅ DO THIS
(function() {
    'use strict';
    window.TEUI = window.TEUI || {};
    // ... your code
})();
```

### 2. Tuple Pattern for Calculations
```javascript
// All calculations return both target and reference
function calculateSomething(inputs) {
    return {
        target: targetValue,
        reference: referenceValue
    };
}
```

### 3. Grid Layout (14 columns A-N)
```javascript
cells: {
    a: { content: '1' },           // Row number
    b: { content: 'B.1' },         // ID
    c: { content: 'Label' },       // Main label
    d: { type: 'dropdown', ... },  // Primary input
    // ... through to column n
}
```

## Quick Commands

```bash
# Navigate to framework
cd 4012-framework

# Test the app
open index.html

# Check existing sections
ls sections/

# Reference original code
ls ../sections/4011-Section*.js
```

## To Implement Section 04

1. **Copy the pattern**:
   ```bash
   cp sections/4012-S03.js sections/4012-S04.js
   ```

2. **Get field definitions from original**:
   ```bash
   grep -A 5 -B 5 "fieldId:" ../sections/4011-Section04.js
   ```

3. **Key fields to implement**:
   - Energy use by fuel type
   - TEUI calculations
   - Comparison charts
   - Monthly breakdowns

4. **Dependencies needed**:
   - `h_15` (area) from Section 02
   - `d_20`, `d_21` (HDD/CDD) from Section 03
   - Energy costs from Section 02

## Common Gotchas

1. **Dropdown IDs**: Use exact strings from 4011, don't improvise
2. **Field IDs**: Follow pattern `[column]_[row]` (e.g., `d_12`)
3. **State updates**: Always use `DualState.setValue()`
4. **Calculations**: Must handle null/undefined gracefully
5. **CSS classes**: Use existing ones from `4012-styles.css`

## Testing Your Work

1. **Visual check**: Compare with 4011 screenshots
2. **Calculations**: Verify against Excel formulas
3. **State**: Check DevTools for state updates
4. **Responsiveness**: Test mobile view

## Need Help?

- **Formulas**: Check `/sources of truth 3037/FORMULAE-3039.csv`
- **Patterns**: Look at completed sections (S01, S02, S03)
- **Original code**: Reference `/sections/4011-Section*.js`

## Your Mission

Implement Section 04 following the established patterns. Focus on:
1. Accurate field extraction
2. Proper grid layout
3. Calculation implementation
4. State management wiring

Good luck! The framework is well-structured and you have great examples to follow.

---

*Remember: When in doubt, check how S01, S02, or S03 did it!* 