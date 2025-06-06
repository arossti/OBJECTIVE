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
  - Private methods: \_prefixed
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

### 3.3 Global Input Handling System (Proven in OBC Matrix)

**Status: PROTOTYPED and Working - Ready for Integration**

The OBC Matrix project successfully implemented a global input handling system that eliminates code duplication across sections and provides consistent input behavior. This should be integrated as part of the 4.012 refactor.

#### ✅ **Proven Benefits:**

1. **Enter/Return Key Fix**: Prevents newlines in text entry across ALL sections automatically
2. **Auto-blur on Enter**: Pressing Enter properly finishes field editing and triggers calculations  
3. **Visual Feedback**: Fields show "editing" state with CSS classes
4. **Centralized Logic**: No code duplication - one handler for all sections
5. **Consistent Formatting**: Uses global `window.TEUI.formatNumber` for consistent display
6. **State Integration**: Automatic integration with StateManager for user-modified values

#### 🔧 **Implementation Tasks:**

- [ ] Add `initializeGlobalInputHandlers()` to StateManager or create dedicated InputHandler module
- [ ] Remove individual `handleEditableBlur` functions from all 18 sections
- [ ] Standardize CSS classes (`.editing`) across all sections for visual feedback
- [ ] Initialize once after all sections render, eliminating per-section initialization
- [ ] Extend pattern to handle all field types (currency, percentages, RSI, U-values)
- [ ] Test across all sections to ensure no regression in input behavior

#### 📋 **Integration Pattern:**

```javascript
// In StateManager or dedicated InputHandler module
function initializeGlobalInputHandlers() {
  const editableFields = document.querySelectorAll('.editable[data-field-id]');
  
  editableFields.forEach((field) => {
    if (!field.hasGlobalListeners) {
      // Prevent enter key from creating newlines
      field.addEventListener("keydown", (e) => {
        if (e.key === "Enter") {
          e.preventDefault();
          field.blur();
        }
      });
      
      // Handle field blur (when user finishes editing)
      field.addEventListener("blur", handleFieldBlur);
      
      // Visual feedback for editing state
      field.addEventListener("focus", () => field.classList.add("editing"));
      field.addEventListener("focusout", () => field.classList.remove("editing"));
      
      field.hasGlobalListeners = true;
    }
  });
}

function handleFieldBlur(event) {
  const fieldElement = event.target;
  const fieldId = fieldElement.getAttribute("data-field-id");
  if (!fieldId) return;
  
  let valueStr = fieldElement.textContent.trim();
  let numValue = window.TEUI.parseNumeric(valueStr, NaN);
  
  // Apply appropriate formatting based on field type
  if (!isNaN(numValue)) {
    if (fieldId.includes('area') || fieldId.includes('dimension')) {
      valueStr = window.TEUI.formatNumber(numValue, "number-2dp");
    } else if (fieldId.includes('percent')) {
      valueStr = window.TEUI.formatNumber(numValue, "percent");
    } else {
      valueStr = window.TEUI.formatNumber(numValue, "number");
    }
  }
  
  // Update display and state
  fieldElement.textContent = valueStr;
  window.TEUI.StateManager.setValue(fieldId, valueStr, "user-modified");
}
```

#### 🎯 **Expected Benefits:**

- **Code Reduction**: ~50-100 lines removed per section (18 sections = significant reduction)
- **Consistency**: Identical input behavior across entire application
- **Maintainability**: One place to fix input issues or add features
- **User Experience**: Consistent, predictable input handling everywhere

This represents exactly the kind of "radical simplification" that v4.012 aims to achieve.

### 3.4 Smart State-Aware Visual Feedback Integration (BREAKTHROUGH ACHIEVEMENT)

**Status: PERFECTED in OBC Matrix - Ready for Direct Integration**

A revolutionary UX breakthrough has been achieved in the OBC Matrix project that provides the perfect balance of instant visual feedback with intelligent state management. This must be integrated as a high-priority enhancement.

#### ✨ **The Perfect UX Pattern:**

1. **Default State**: Grey italic placeholder text
2. **Focus (Click In)**: Instantly switches to blue confident text
3. **No Changes + Blur**: Automatically reverts to grey placeholder (forgiving UX)
4. **Changes Made + Blur**: Permanently commits to blue confident text

#### 🏆 **Why This Is Game-Changing:**

- **Instant Gratification**: Users get immediate visual feedback when they click
- **Forgiving Interface**: Accidental clicks have no permanent consequences
- **Clear Visual Hierarchy**: Obvious distinction between placeholder and user-entered content
- **Zero Mental Load**: Users intuitively understand the states without training
- **State Integrity**: Visual feedback perfectly separated from actual data state

#### 📋 **Integration Tasks:**

- [ ] **Extract CSS Classes**: Copy `.editing-intent`, `.user-modified`, state transition CSS from OBC Matrix
- [ ] **Integrate Global Handler**: Adapt OBC StateManager's `initializeGlobalInputHandlers()` for 4011 StateManager
- [ ] **Apply to All Sections**: Replace individual section input handlers with global system
- [ ] **Update State Classes**: Ensure all 4011 sections use consistent state class management
- [ ] **Test Across Browsers**: Verify the experience works consistently in Safari, Chrome, Firefox
- [ ] **Performance Check**: Ensure no impact on calculation performance

#### 🔧 **Implementation Notes:**

```javascript
// Core pattern to implement in 4011 StateManager
function initializeSmartInputFeedback() {
  const editableFields = document.querySelectorAll('.user-input[contenteditable]');
  
  editableFields.forEach(field => {
    field.addEventListener("focus", () => {
      field.classList.add("editing-intent");
      field.dataset.originalValue = field.textContent.trim();
    });
    
    field.addEventListener("blur", () => {
      const hasChanges = field.textContent.trim() !== field.dataset.originalValue;
      field.classList.remove("editing-intent");
      
      if (hasChanges) {
        StateManager.setValue(fieldId, newValue, "user-modified");
        // This automatically adds .user-modified class via updateUI()
      }
    });
  });
}
```

#### 🎯 **Success Metrics:**

- [ ] All 18 sections use consistent smart visual feedback
- [ ] Zero duplication of input handling code
- [ ] Users can immediately distinguish placeholder vs. user-entered content
- [ ] Accidental clicks cause no permanent state changes
- [ ] Smooth visual transitions between all states

**Priority**: HIGH - This breakthrough represents the exact kind of user experience excellence that v4.012 aims to achieve across the entire application.

### 3.5 Architecture Improvements

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

_Last Updated: December 19, 2024_
_Status: Planning Phase_
