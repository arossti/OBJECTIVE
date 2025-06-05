# Architecture Comparison: Current vs. v4.012

## Code Complexity Comparison

### Current Section 11 Implementation

- **File**: `sections/4011-Section11.js`
- **Lines of Code**: ~630 (after refactoring from 3,300!)
- **Architecture Issues**:
  - Separate Reference and Application calculation paths
  - Complex state management with multiple helper functions
  - Recursion protection flags scattered throughout
  - Difficult to test individual calculations
  - State contamination risks

### Proposed v4.012 Implementation

- **File**: `proof-of-concept/4012-S11.js`
- **Lines of Code**: ~240
- **Improvements**:
  - Single calculation logic for both models
  - Pure functions with no side effects
  - Clear input/output structure
  - Easily testable
  - No state contamination possible

## Key Architectural Differences

### 1. Calculation Pattern

**Current (Duplicated Logic)**:

```javascript
// Reference calculation
function calculateReferenceWallLoss() {
  const area = getRefNumericValue("d_85");
  const rsi = getRefNumericValue("f_85");
  const hdd = getRefNumericValue("d_20");
  const loss = (area * hdd * 24) / (rsi * 1000);
  setReferenceValue("ref_i_85", loss);
}

// Application calculation (same logic, different state access)
function calculateApplicationWallLoss() {
  const area = getAppNumericValue("d_85");
  const rsi = getAppNumericValue("f_85");
  const hdd = getAppNumericValue("d_20");
  const loss = (area * hdd * 24) / (rsi * 1000);
  setCalculatedValue("i_85", loss);
}
```

**v4.012 (Single Logic, Tuple Return)**:

```javascript
function calculateWallLoss(inputs) {
  const calc = (area, rsi, hdd) => (area * hdd * 24) / (rsi * 1000);

  return {
    target: calc(inputs.geometry.d_85, inputs.target.f_85, inputs.target.hdd),
    reference: calc(
      inputs.geometry.d_85,
      inputs.reference.f_85,
      inputs.reference.hdd,
    ),
  };
}
```

### 2. State Management

**Current (Complex, Scattered)**:

- Multiple state sources (StateManager, SessionReferenceState, activeReferenceDataSet)
- Helper functions with fallback chains
- Mode-dependent value retrieval
- Recursion protection flags

**v4.012 (Simple, Explicit)**:

```javascript
// All state in one place
state = {
  inputs: {
    geometry: { d_85: "100" }, // Shared
    target: { f_85: "4.5" }, // User values
    reference: { f_85: "2.97" }, // Code minimums
  },
  outputs: {
    target: { i_85: 1000 },
    reference: { i_85: 1500 },
  },
};
```

### 3. Dependency Management

**Current (Implicit, Error-Prone)**:

- Dependencies scattered across listeners
- Manual calculation triggering
- Race conditions possible

**v4.012 (Explicit, Automatic)**:

```javascript
// Register once
stateManager.registerCalculation("wallLoss", {
  inputs: ["d_85", "f_85", "hdd"],
  outputs: ["i_85"],
  calculate: calculateWallLoss,
});

// Automatic recalculation on input change
stateManager.setInput("f_85", "5.0", "target");
// wallLoss automatically recalculates
```

## Benefits Summary

### Developer Experience

- **Current**: New developer needs hours to understand section flow
- **v4.012**: New developer productive in < 30 minutes

### Testing

- **Current**: Complex mocking required, state dependencies
- **v4.012**: Pure functions testable with simple inputs/outputs

### Performance

- **Current**: Multiple passes, redundant calculations
- **v4.012**: Single pass, both models calculated together

### Maintainability

- **Current**: Changes risk breaking Reference or Application model
- **v4.012**: Single logic ensures both models stay in sync

### Code Size

- **Current**: ~15,000 lines across all sections
- **v4.012**: Target ~7,500 lines (50% reduction)

## Migration Path

1. **Proof of Concept**: Complete Section 11 implementation
2. **Validation**: Ensure calculation parity with current system
3. **Incremental Migration**: Port sections one at a time
4. **Parallel Operation**: Run both systems side-by-side initially
5. **Cutover**: Switch to v4.012 when all sections complete

## Conclusion

The v4.012 architecture represents a fundamental simplification that:

- Eliminates code duplication
- Reduces complexity by >50%
- Makes the dual-engine nature explicit and elegant
- Creates a maintainable foundation for future development

This is not just refactoring - it's a complete architectural revolution that addresses the core issues that have made the current codebase difficult to maintain and extend.
