# Reference Model System - Implementation Workplan

> **Status**: Planning Phase
> **Goal**: Clean up and complete the Reference Model overlay system
> **Last Updated**: 2025-01-12

---

## Overview: What We Have

The TEUI calculator has a **legacy Reference Model system** that needs cleanup and completion. The bones are excellent - the dual calculation engine architecture is solid and working well. However, the documentation became confusing, and some visual feedback features were lost during refactoring.

### Core Architecture (Already Working ✓)

1. **Dual Calculation Engines**: Both Target and Reference models calculate in parallel, automatically, whenever ANY input changes. This works beautifully for:
   - User-modified input fields (numeric, text, dropdown, slider)
   - Imported values from external Excel files
   - **This performance must NOT regress**

2. **Perfect State Isolation**:
   - Target values stored in StateManager without prefix: `d_52`, `f_85`, `j_115`
   - Reference values stored with `ref_` prefix: `ref_d_52`, `ref_f_85`, `ref_j_115`
   - Target calculations NEVER affect Reference calculations and vice versa

3. **Sacred Calculation Formulas**:
   - All calculation formulas are Excel-vetted with 100% parity
   - **NEVER modify calculation logic or formulas**
   - We only SET input values; calculations always run automatically

---

## Understanding the Reference System

### Two Distinct Concepts (Source of Confusion)

The confusion in the old documentation came from mixing these two concepts:

#### 1. **Display Toggle** (View-Only)
- **Purpose**: Switch the UI to VIEW either Target or Reference calculated values
- **Action**: Changes which values are displayed in the UI
- **Does NOT**: Set, change, or calculate anything
- **Controls**:
  - Master toggle (index.html dropdown) - switches ALL sections at once
  - Section toggles (individual section headers) - switch one section at a time

#### 2. **Reference Value Setting** (Writes Data)
- **Purpose**: SET/WRITE input values into the Reference model
- **Action**: Populates Reference model inputs, then both engines recalculate
- **Methods**:
  - **A) User Manual Entry**: User edits fields while viewing Reference mode
  - **B) File Import**: Excel import populates both Target AND Reference from external file
  - **C) Reference Setup Modes**: Dropdown commands that copy/overlay values

### The Reference Setup Modes (Three Scenarios)

These are commands from the Reference dropdown in index.html:

#### **Mode 1: Mirror Target**
- **What it does**: Copies ALL Target input values → Reference input values
- **Then**: Both engines recalculate (Reference should match Target initially)
- **Use case**: "Start with identical building, then customize specific Reference values"
- **Example**:
  - Target: 1500m² Toronto heatpump building
  - Reference: 1500m² Toronto heatpump building (initially identical)
  - User can then edit specific Reference values to test variations

#### **Mode 2: Mirror Target + Reference Overlay** (Most Common)
- **What it does**:
  1. Copies ALL Target input values → Reference input values
  2. THEN overlays specific values from `ReferenceValues.js` based on `ref_d_13` setting
  3. THEN both engines recalculate
- **ReferenceValues.js subset includes**:
  - Building envelope U-values/RSI-values (walls, roofs, floors, windows)
  - HVAC system efficiencies (AFUE, HSPF, COP)
  - DHW system efficiencies
  - Internal gains (occupant loads, lighting loads)
  - SHGC values
  - Ventilation rates and efficiencies
- **ReferenceValues.js does NOT include**:
  - Building geometry (areas, volumes, WWR)
  - Location/climate data
  - Energy costs
  - Occupancy schedules
- **Use case**: "Compare my building design against code minimum requirements"
- **Example**:
  - Target: 1500m² Toronto heatpump building with high-performance envelope
  - Reference: Same building geometry/location, but with OBC minimum U-values and efficiencies
  - Visual comparison shows how much better design performs vs. code minimum

#### **Mode 3: Independent Models**
- **What it does**: Nothing - models remain completely independent
- **Use case**: "Compare any two completely different building scenarios"
- **Example**:
  - Target: 1500m² Toronto heatpump building in 2024
  - Reference: 2000m² Vancouver gas building in 2030
  - Complete freedom for custom comparisons

---

## How Values Flow Through the System

### When User Edits a Field in Reference Mode

1. User toggles to Reference view (sees red UI, sees ref_d_52 values)
2. User edits `d_52` field (DHW efficiency)
3. Edit writes to `ref_d_52` in StateManager
4. Both calculation engines run automatically (as they always do)
5. Target model unchanged (still using `d_52`)
6. Reference model recalculates using new `ref_d_52` value
7. UI updates to show new Reference calculated values

### When "Mirror Target + Reference Overlay" Runs

**Recommended Implementation Pattern** (using quarantine pattern from FileHandler):

```javascript
// 🔒 START QUARANTINE - Mute listeners to prevent premature calculations
window.TEUI.StateManager.muteListeners();

try {
    // PASS 1: Copy all Target inputs → Reference
    copyAllTargetInputsToReference();

    // PASS 2: Overlay ReferenceValues.js subset
    const standard = StateManager.getValue('ref_d_13') || 'OBC SB12 3.1.1.2.C1';
    const refValues = TEUI.ReferenceValues[standard] || {};
    applyReferenceValuesOverlay(refValues);

    // Sync all Pattern A sections
    syncPatternASections();

} finally {
    // 🔓 END QUARANTINE - Always unmute
    window.TEUI.StateManager.unmuteListeners();
}

// Trigger clean recalculation with all values loaded
calculator.calculateAll();

// Refresh all Pattern A section UIs
refreshAllPatternAUIs();
```

**Both approaches should yield identical results**. The quarantine pattern is cleaner and matches the proven FileHandler pattern.

---

## Current State vs Desired State

### What Works ✓

1. **Dual calculation engines**: Perfect parallel calculation of Target and Reference
2. **State isolation**: Target and Reference values never contaminate each other
3. **User input in Reference mode**: Editing ref_ fields works correctly
4. **File import**: Excel import populates both Target and Reference correctly
5. **CSS styling exists**: Red Reference theme CSS classes already defined in styles.css
6. **Section-level toggles**: Individual sections can switch to show Reference values

### What Needs Work 🔧

#### **Phase 1: Core Functionality** (Priority)

1. **Master Toggle Display Switching**
   - **Current**: Master toggle only changes CSS (red theme), but sections still show Target values
   - **Desired**: Master toggle calls `switchMode("reference")` on ALL sections simultaneously
   - **Result**: User sees red UI AND sees actual ref_ values in all sections at once

2. **Reference Setup Mode Functions**
   - **Current**: Functions exist but may have bugs (TargetState access issues noted in old docs)
   - **Desired**: Clean implementations of Mirror Target, Mirror + Overlay, Independent
   - **Use**: Quarantine pattern from FileHandler for clean value setting

3. **ReferenceValues.js Integration**
   - **Current**: ReferenceValues.js exists with all building code standards
   - **Desired**: "Mirror + Overlay" properly applies subset of ref_ values from selected standard
   - **Trigger**: Based on `ref_d_13` field value (Reference building code standard selector)

#### **Phase 2: Visual Feedback** (Secondary)

4. **Reference Overlay Highlighting**
   - **Purpose**: Show which fields came from ReferenceValues.js overlay
   - **Style**: Red italic bold font (CSS classes already exist)
   - **Behavior**:
     - Field shows red italic when value came from ReferenceValues.js
     - If user edits that field, style changes to blue bold (user-modified)
     - User override takes precedence over ReferenceValues.js

5. **Target/Reference Difference Highlighting**
   - **Purpose**: Show which fields differ between Target and Reference models
   - **Style**: Highlight fields where Target value ≠ Reference value
   - **Benefit**: User can quickly see where models diverge

---

## Implementation Questions to Resolve

Before implementing, we need to clarify:

### 1. Field Discovery Method
**Question**: How do we get the list of all input field IDs for each section?

**Options**:
- A) From FieldManager: `window.TEUI.FieldManager.getFieldsForSection(sectionId)`
- B) From section module: `window.TEUI[sectionId].getFields()`
- C) From StateManager: Filter all keys by section patterns
- D) From section definitions: Parse sectionRows for field IDs

**Need**: Your recommendation on which pattern matches current architecture

### 2. ReferenceValues Application Level
**Question**: Where should ReferenceValues overlay be applied?

**Options**:
- A) At field definition level in section files (modify defaults)
- B) At StateManager level (just set values, let render happen naturally)
- C) Hybrid approach

**Your preference**: "I suspect there is an elegance in using the methods we use on file imports... that gives us clean values, rendered, and calculated with no state mixing"

**Recommendation**: Use quarantine pattern (Option B) - matches FileHandler proven pattern

### 3. Highlighting Function Location
**Question**: Where does the highlighting logic currently live (or should live)?

**Options**:
- A) In ReferenceManager.js
- B) In ReferenceToggle.js
- C) In individual section files
- D) New dedicated module

**Need**: Your guidance on current/preferred location

### 4. Calculation Timing
**Question**: For "Mirror Target + Reference Overlay", when should calculations run?

**Options**:
- A) After Pass 1 (mirror), then again after Pass 2 (overlay)
- B) Only once after both passes complete (quarantine pattern)

**Your answer**: "Technically both should generate the same totals"

**Recommendation**: Option B (quarantine) - cleaner, matches FileHandler, avoids double calculation

---

## Success Criteria

### Phase 1 Complete When:

1. **Master toggle works**: Click master toggle → ALL sections switch to Reference mode, showing actual ref_ values
2. **Mirror Target works**: Click "Mirror Target" → Reference model inputs match Target model inputs exactly
3. **Mirror + Overlay works**: Click "Mirror + Overlay" → Reference gets Target values PLUS ReferenceValues.js subset
4. **No regressions**: User editing and file import still work perfectly
5. **No state mixing**: Target values never affected by Reference operations
6. **Calculations sacred**: No changes to any calculation formulas

### Phase 2 Complete When:

7. **Overlay highlighting works**: Fields from ReferenceValues.js show red italic styling
8. **User override styling works**: Editing overlaid field changes style to blue bold
9. **Difference highlighting works**: Fields that differ between Target/Reference are highlighted
10. **Persistent across toggles**: Highlighting persists when switching between Target/Reference views

---

## Implementation Approach

### Recommended Strategy

1. **Read existing code thoroughly** (avoid architectural violations):
   - README.md - Common pitfalls, StateManager patterns
   - DUAL-STATE-CHEATSHEET.md - Pattern A implementation
   - FileHandler.js - Quarantine pattern for value setting
   - Existing ReferenceToggle.js - Current implementation state

2. **Answer clarifying questions above** (avoid guessing)

3. **Implement Phase 1** (core functionality):
   - Fix master toggle to actually switch all section modes
   - Implement clean Mirror Target using quarantine pattern
   - Implement Mirror + Overlay with ReferenceValues.js integration
   - Test extensively (no regressions on user input or file import)

4. **Implement Phase 2** (visual feedback):
   - Restore/implement overlay highlighting
   - Restore/implement difference highlighting
   - Test visual consistency across all sections

5. **Documentation cleanup**:
   - Archive old Master-Reference-Roadmap.md
   - Update DUAL-STATE-CHEATSHEET.md with working Reference patterns
   - Add clear examples to README.md

---

## Anti-Patterns to Avoid

### Absolutely Forbidden:

1. **Never modify calculation formulas** - they are Excel-vetted and sacred
2. **Never use setTimeout** - use Dependency.js or StateManager patterns
3. **Never directly manipulate DOM** - all updates through StateManager.setValue()
4. **Never contaminate state** - Target and Reference must remain perfectly isolated
5. **Never bypass StateManager** - single source of truth for all values

### Required Patterns:

1. **Use ModeManager facade**: `section.ModeManager.getValue()` and `setValue()`
2. **Use quarantine pattern**: Mute listeners, set values, unmute, then calculate
3. **Use existing CSS classes**: Don't create new styling systems
4. **Use ref_ prefix pattern**: All Reference values stored with `ref_` prefix in StateManager
5. **Follow FileHandler patterns**: Proven approach for bulk value setting

---

## Next Steps

1. **Answer implementation questions above**
2. **Review and approve this workplan**
3. **Identify any missing concerns or requirements**
4. **Proceed with Phase 1 implementation** once alignment is confirmed

---

## Notes

- **Section toggles**: Keep for now (useful for debugging and selective viewing), may retire later
- **Performance critical**: Must not regress excellent current performance of dual calculation engines
- **Excel parity**: Must maintain 100% calculation accuracy
- **State isolation**: Perfect separation between Target and Reference is non-negotiable
