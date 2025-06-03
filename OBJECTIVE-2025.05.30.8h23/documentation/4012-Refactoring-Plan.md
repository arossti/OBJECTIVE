# 4.012 Refactoring Plan

## Overview
This document outlines the structured approach for refactoring the gold standard 4.011 (from May 30, 2025 backup, in directory OBJECTIVE-2025.05.30.8h23) into 4.012. This version achieved calculation parity with Excel and predates the complex issues that caused calculation errors.

## Current Workspace State
The workspace contains three versions of the codebase:

### 1. OBJECTIVE 4011 (Current Production)
- **Status**: Functional but has recursion errors (see Logs.md)
- **Purpose**: Reference for current production features
- **Action**: Keep for comparison but DO NOT use as refactoring base

### 2. OBJECTIVE-2025.05.30.8h23 (Gold Standard)
- **Status**: Most stable version with Excel calculation parity
- **Purpose**: PRIMARY SOURCE for 4.012 refactoring
- **Action**: Use this as the base for all refactoring work

### 3. OBJECTIVE 4012 (Initial Rebuild Attempt)
- **Status**: Incomplete ground-up rebuild (only S03 partially working)
- **Useful Assets**:
  - Updated README.md with local-first principles
  - 4012-ClimateValues.js (internalized climate data)
  - S03 Optimized Test.html (working reference implementation)
  - 4012-styles.css (copy of 4011-styles.css)
- **Action**: Extract useful components, then archive or remove

### README.md Files
- **Issue**: Multiple README.md files causing confusion
- **Resolution**: 
  - Use OBJECTIVE 4012/README.md as the primary project README
  - Archive older README.md files with version suffixes
  - Ensure single source of truth for project documentation

## Rationale for Refactoring vs Rebuild
- 12+ hours spent on 4012-S03.js alone in ground-up rebuild approach
- 4.011 has proven stability and Excel calculation parity
- Cross-browser compatibility and styling already solved
- Regulator-approved UI/UX and calculation methods
- All 18 sections already functional

## Phase 1: Cleanup & Housekeeping

### 1.1 Clear Logs and Debugging Artifacts
- [ ] Remove all console.log statements except critical errors
- [ ] Clean up development/debugging code
- [ ] Clear any temporary testing variables (but not defaults)
- [ ] Remove performance timing code

### 1.2 Remove Dead Code
- [ ] Identify unused functions across all files
- [ ] Remove commented-out code blocks
- [ ] Clean up experimental features that weren't implemented
- [ ] Remove duplicate function definitions
- [ ] Clean up unused event listeners

### 1.3 Consolidate Section Files
- [ ] Analyze all 18 section files for common patterns
- [ ] Extract repeated code into shared utilities:
  - Field initialization patterns
  - Calculation triggers
  - State management interactions
  - Validation functions
- [ ] Create an imporoved standard section template (4011-SectionXX.js)
- [ ] Ensure consistent structure across all sections

### 1.4 Code Organization
- [ ] Standardize naming conventions:
  - Functions: camelCase
  - Constants: UPPER_SNAKE_CASE
  - Classes: PascalCase
  - Private methods: _prefixed
- [ ] Organize file dependencies clearly
- [ ] Add JSDoc comments to all public functions
- [ ] Create clear module boundaries

## Phase 2: Testing & Validation

### 2.1 Create Test Suite
- [ ] Document current Excel calculation results for test data
- [ ] Create automated tests for:
  - All calculation functions
  - State management operations
  - UI interactions
  - Reference Mode toggle behavior
- [ ] Verify dropdown population and dependencies
- [ ] Test file import/export functionality

### 2.2 Cross-Browser Testing
- [ ] Test in Safari, Chrome, Firefox, Edge
- [ ] Verify dropdown styling (especially Safari)
- [ ] Test slider functionality across browsers
- [ ] Confirm mobile responsiveness
- [ ] Document any browser-specific fixes needed

### 2.3 Performance Baseline
- [ ] Measure current load times
- [ ] Document calculation performance
- [ ] Identify any performance bottlenecks
- [ ] Create benchmarks for comparison

## Phase 3: Modular Enhancements

### 3.1 S03 Climate Module Integration
- [ ] Replace Excel-based climate import with internalized data
- [ ] Use S03 Optimized Test.html as template
- [ ] Integrate with existing state management:
  - Connect to window.TEUI.state
  - Maintain backward compatibility
  - Preserve calculation chains
- [ ] Implement Reference Mode for climate data
- [ ] Test with all Canadian locations

### 3.2 S11 Tuple Calculations
- [ ] Implement dual-state architecture:
  - Target state calculations
  - Reference state calculations
  - State isolation mechanisms
- [ ] Create calculation comparison views
- [ ] Ensure proper state switching
- [ ] Test calculation accuracy against Excel

### 3.3 Architecture Improvements
- [ ] Implement proper module system (ES6 modules)
- [ ] Create clear API boundaries
- [ ] Improve error handling and recovery
- [ ] Add calculation result caching where appropriate

## Phase 4: Integration & Deployment

### 4.1 Integration Testing
- [ ] Test all sections with new S03 module
- [ ] Verify calculation chains remain intact
- [ ] Test Reference Mode across all sections
- [ ] Confirm file import/export still works

### 4.2 Documentation
- [ ] Update technical documentation
- [ ] Create migration guide from 4.011
- [ ] Document new features and changes
- [ ] Update API documentation

### 4.3 Final Validation
- [ ] Complete Excel parity testing
- [ ] User acceptance testing
- [ ] Performance comparison with 4.011
- [ ] Cross-browser final check

## Success Criteria
1. All calculations match Excel results
2. No regression in functionality from 4.011
3. Improved code maintainability
4. Successful integration of S03 internalized climate data
5. Working Tuple calculations for Target/Reference states
6. Performance equal or better than 4.011
7. Cross-browser compatibility maintained

## Risk Mitigation
- Keep 4.011 gold standard as reference
- Test incrementally at each phase
- Maintain calculation test suite
- Document all changes thoroughly
- Create rollback plan for each phase

## Timeline Estimate
- Phase 1: 2-3 days
- Phase 2: 2-3 days  
- Phase 3: 4-5 days
- Phase 4: 2-3 days
- **Total: 10-14 days**

## Next Steps
1. Create a new branch from 4012-FRAMEWORK for refactoring work
2. Copy OBJECTIVE-2025.05.30.8h23 to replace current OBJECTIVE 4012 contents
3. Preserve useful assets from current OBJECTIVE 4012:
   - README.md (as primary project documentation)
   - 4012-ClimateValues.js
   - S03 Optimized Test.html
   - 4012-styles.css
4. Begin Phase 1 cleanup tasks
5. Set up testing framework early
6. Document progress daily

---
*Last Updated: December 19, 2024*
*Status: Planning Phase* 