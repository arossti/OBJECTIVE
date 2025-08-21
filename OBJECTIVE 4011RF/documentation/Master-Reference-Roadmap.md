# Master Reference Toggle Roadmap
## Lightweight Implementation Plan for Global Reference System

> **Status**: Implementation-Ready Specification  
> **Current Issue**: "Show Reference" button crashes due to architecture mismatch  
> **Goal**: Minimal-code solution leveraging existing dual-state architecture and CSS system  
> **Key Principle**: Maximum reuse of existing patterns, zero architectural changes

---

## ⚠️ **CRITICAL: AI Agent Implementation Guidelines**

### **🚫 MANDATORY Anti-Patterns to Avoid**

**NEVER implement these patterns that have been explicitly rejected in the codebase:**

#### **1. setTimeout-Based Solutions**
- **❌ PROHIBITED**: Using `setTimeout()` to solve race conditions or timing issues
- **❌ PROHIBITED**: Any hack-based timing solutions
- **✅ REQUIRED**: Use `Dependency.js` for ordered calculations if timing is needed
- **Reference**: README.md lines 91-123 - StateManager integration patterns

#### **2. Direct DOM Manipulation**
- **❌ PROHIBITED**: Direct DOM updates in event handlers (`element.textContent = value`)
- **❌ PROHIBITED**: Custom calculation methods like `recalculateField()` or `updateValue()`
- **❌ PROHIBITED**: Bypassing StateManager for any value updates
- **✅ REQUIRED**: All updates must flow through `StateManager.setValue()` then `setCalculatedValue()`

#### **3. Calculation Modification**
- **❌ PROHIBITED**: Modifying any calculation functions or formulas
- **❌ PROHIBITED**: Adding new calculation triggers or dependencies
- **❌ PROHIBITED**: Interfering with existing dual-state calculation engines
- **✅ REQUIRED**: This is a **DISPLAY-ONLY** system that switches between pre-calculated values

#### **4. Global State Contamination**
- **❌ PROHIBITED**: Any Reference operations that affect Target values
- **❌ PROHIBITED**: Cross-mode state mixing or contamination
- **❌ PROHIBITED**: Global reference mode flags that affect calculations
- **✅ REQUIRED**: Perfect state isolation between Target and Reference

### **🎯 Core Architectural Requirements**

#### **1. Display-Only System**
- **Purpose**: Switch display between Target and Reference **calculated values only**
- **No Calculation Changes**: System must not modify, trigger, or interfere with calculations
- **Pre-Calculated Values**: Both Target and Reference values are already calculated by dual-state engines
- **UI Toggle Only**: Master toggle is purely a display/styling system

#### **2. Dual-State Architecture Compliance**
- **Section Structure**: Must work with `window.TEUI.sect03.ModeManager` pattern
- **State Objects**: Must respect `TargetState` and `ReferenceState` separation
- **ModeManager Interface**: Use existing `switchMode()` and `updateCalculatedDisplayValues()` methods
- **No Architecture Changes**: Do not modify existing dual-state patterns

#### **3. StateManager Integration**
- **Single Source of Truth**: StateManager is the only valid source for all values
- **Proper Value Reading**: Use `StateManager.getValue()` for all data access
- **No Direct Access**: Never read values directly from DOM or other sources
- **Reference Prefix**: Reference values stored with `ref_` prefix (e.g., `ref_j_32`)

#### **4. CSS-Only Styling**
- **Existing CSS System**: Use only the existing CSS classes in `4011-styles.css`
- **No New CSS**: Do not create new CSS rules or modify existing ones
- **Class Application**: Apply/remove existing CSS classes only
- **Global Styling**: Use body-level CSS classes for application-wide theming

### **🧪 Mandatory Testing & Validation**

#### **1. State Isolation Testing**
- **Test Scenario**: Switch to Reference mode, verify Target values in StateManager remain unchanged
- **Critical Check**: `StateManager.getValue('j_32')` must be identical before/after Reference toggle
- **Zero Tolerance**: Any Target value change indicates state contamination (implementation failure)

#### **2. Display-Only Validation**
- **Test Scenario**: Toggle between modes multiple times, verify no calculation triggers
- **Critical Check**: No `calculateAll()`, `calculateTargetModel()`, or `calculateReferenceModel()` calls
- **Monitoring**: Watch console for unexpected calculation logs

#### **3. CSS Consistency Testing**
- **Test Scenario**: Switch modes, verify all sections show consistent Reference/Target styling
- **Critical Check**: All section headers, borders, and field highlighting must be synchronized
- **Visual Validation**: No mixed-mode visual states allowed

#### **4. Performance Validation**
- **Test Scenario**: Rapid mode switching should be instantaneous
- **Critical Check**: No delays, freezing, or calculation bottlenecks
- **Benchmark**: Mode switch must complete in <100ms

### **📚 REQUIRED Reading for Implementation**

**Before starting implementation, the AI agent MUST thoroughly read these documents:**

#### **1. Core Architecture (MANDATORY)**
- **`README.md`** (Lines 15-200): Common pitfalls, StateManager patterns, anti-patterns
- **`DUAL-STATE-CHEATSHEET.md`**: Pattern A implementation, state isolation rules
- **`DUAL-STATE-IMPLEMENTATION-GUIDE.md`** (Lines 1638-1782): Reference setup modes

#### **2. Anti-Pattern Documentation (CRITICAL)**
- **README.md Lines 91-123**: StateManager integration patterns (NO direct DOM manipulation)
- **README.md Lines 169-200**: Calculation precision requirements (NO formula changes)
- **DUAL-STATE-CHEATSHEET.md**: State contamination prevention patterns

#### **3. CSS System Documentation**
- **`4011-styles.css`** (Lines 1398-1605): Existing Reference styling system
- **CSS Classes**: `viewing-reference-inputs`, `viewing-reference-values`, `reference-mode`

#### **4. Current State Analysis**
- **`S03-REPAIRS.md`**: Current dual-state implementation status and issues
- **`Master-Reference-Roadmap.md`**: This document (complete implementation plan)

**⚠️ Implementation without reading these documents will likely result in architectural violations and rejected code.**

---

## 🚨 **Root Cause Analysis**

### **Current Problem**
The existing "Show Reference" button (`runReferenceBtn`) crashes because:

1. **Missing Core Function**: Current `4011-ReferenceToggle.js` lacks `executeReferenceRunAndCache()` function that button expects
2. **Wrong Function Wired**: Button calls `toggleReferenceDisplay()` which tries to access non-existent section structure
3. **Architecture Mismatch**: Code assumes `window.TEUI.SectionModules[sectionId]` but sections are at `window.TEUI.sect03.ModeManager`

### **Legacy vs Current Architecture**

**Expected (Old System)**:
- Button calls `executeReferenceRunAndCache()`
- Uses `TEUI.StateManager.loadReferenceData()` and `activeReferenceDataSet`
- Sets global `referenceMode` flag
- Uses centralized reference system from `4011-ReferenceValues.js`

**Current (New Dual-State Architecture)**:
- Individual section `ModeManager`s with `TargetState`/`ReferenceState`
- Sections exposed as `window.TEUI.sect03.ModeManager`
- Per-section state isolation and parallel calculations
- No global reference mode flag

---

## 🎯 **Design Vision: Three Reference Setup Modes**

Based on comprehensive documentation analysis, the master Reference toggle should provide three distinct scenarios:

### **1. Mirror Target** 
- **Purpose**: Create 100% identical Target and Reference models for pure building code standard comparison
- **Behavior**: 
  - Copies ALL Target state values to Reference state (inputs, defaults, calculated values)
  - Results in identical Target/Reference totals initially
  - Subsequently allows user edits to Reference values
- **Use Case**: "What if I built this exact building to different code standards?"

### **2. Mirror Target + Overlay (Reference) [Default]**
- **Purpose**: Apply Target building design with Reference Standard building code values  
- **Behavior**:
  - Copies all Target user inputs (geometry, climate, energy costs) to Reference state
  - **Exception**: Reference Standard (`d_13`) drives `ReferenceValues.js` overrides
  - **Locks ReferenceValues-derived fields** to prevent user confusion
- **Use Case**: "How does my building design compare to code minimums?" (most common)

### **3. Independent Models**
- **Purpose**: Complete flexibility for custom Target vs Reference comparisons
- **Behavior**:
  - Unlocks all Reference values for user editing
  - No constraints or copying from Target state
  - Maintains complete state isolation
- **Use Case**: "Compare any two building scenarios" or custom what-if analysis

### **🔄 User Editing Workflow in Reference Mode**

#### **Setup → Edit → Persist Cycle**
1. **Setup Phase**: User clicks `runReferenceBtn` dropdown and selects setup mode (Mirror Target, Mirror + Reference, or Independent)
2. **Display Switch**: User switches to Reference display mode to see Reference values
3. **Edit Phase**: User makes edits to Reference fields while in Reference display mode
4. **Persistence**: All Reference edits are automatically saved to `ReferenceState` and localStorage
5. **State Isolation**: Reference edits never affect Target values or calculations

#### **Reference Mode Editing Behavior**
- **Editable Fields**: User can edit any unlocked Reference field when in Reference display mode
- **Automatic Storage**: Reference edits write to `ReferenceState.setValue(fieldId, value, "user-modified")`
- **Persistent Storage**: Reference state persists in localStorage (e.g., `S03_REFERENCE_STATE`)
- **State Isolation**: Reference edits trigger only Reference calculations, never Target
- **Visual Feedback**: Edited Reference fields show as user-modified in Reference styling

#### **Post-Setup User Control**
- **After Mirror Target**: User can edit any Reference field to customize the mirrored model
- **After Mirror + Reference**: User can edit unlocked fields (non-ReferenceValues fields remain locked)
- **After Independent**: User has complete editing freedom for all Reference fields
- **Persistence Guarantee**: All user Reference edits persist across sessions, just like Target edits

#### **"Mirror Target + Reference" Detailed Behavior**

**Initial Application:**
1. **Target Values Copied**: All Target user inputs copy to Reference state (geometry, climate, costs, etc.)
2. **ReferenceValues Subset Applied**: Fields from `ReferenceValues.js` based on `d_13` standard overlay the copied values
3. **Highlighting Applied**: ReferenceValues-derived fields get `reference-input-display-locked` class (red italic styling)
4. **Visual Result**: User sees Target inputs + highlighted code-derived values

**User Override Behavior:**
- **User Edits Highlighted Field**: When user changes a highlighted ReferenceValues field:
  - Field loses `reference-input-display-locked` class (highlighting disappears)
  - Field becomes regular user input with normal Reference styling
  - Value is stored as `"user-modified"` in ReferenceState
  - User override takes precedence over ReferenceValues

**Re-Application Behavior:**
- **Running "Mirror Target + Reference" Again**:
  - Target values re-copied to Reference state
  - ReferenceValues subset re-applied (overwrites ALL ReferenceValues fields)
  - **User overrides are lost** - ReferenceValues subset takes precedence
  - All ReferenceValues fields return to highlighted state
  - **Warning**: User should be notified that re-running will overwrite their Reference customizations

**Example Workflow:**
1. Apply "Mirror Target + Reference" → `f_85` shows as highlighted "4.87" (from ReferenceValues)
2. User edits `f_85` to "5.50" → highlighting disappears, becomes normal user input
3. Re-apply "Mirror Target + Reference" → `f_85` reverts to highlighted "4.87", user edit lost

#### **"Mirror Target" (No Subset) Detailed Behavior**

**Initial Application:**
1. **Target Values Copied**: ALL Target values (inputs, defaults, calculated) copy exactly to Reference state
2. **Perfect Synchronization**: Reference values initially identical to Target values
3. **No Highlighting**: No special highlighting applied (no ReferenceValues subset involved)
4. **Visual Result**: Reference mode shows identical values to Target mode

**User Diff Tracking:**
- **User Edits Reference Field**: When user changes any Reference field (e.g., `f_85` from "4.87" to "5.50"):
  - Field gets **yellow highlight** (`reference-diff-highlight` class) to show difference from Target
  - Value stored as `"user-modified"` in ReferenceState
  - **Persistent Diff Highlighting**: Yellow highlight persists across sessions and mode toggles
  - **Visual Benefit**: User can easily see all differences when toggling between Target/Reference modes

**Re-Application Behavior:**
- **Running "Mirror Target" Again**:
  - ALL Target values re-copied to Reference state (overwrites user edits)
  - **Diff highlights disappear** - Reference returns to perfect Target synchronization
  - **User customizations lost** - fresh mirror from current Target state

**Example Workflow:**
1. Apply "Mirror Target" → `f_85` shows as "4.87" (copied from Target, no highlighting)
2. User edits `f_85` to "5.50" → **yellow highlight** appears (diff from Target)
3. Toggle modes → yellow highlight persists, user can see difference
4. Re-apply "Mirror Target" → `f_85` reverts to "4.87", yellow highlight disappears

#### **"Independent Models" Behavior**

**No Highlighting System:**
- **No Mirroring**: Reference state completely independent from Target state
- **No Diff Tracking**: No relationship between Target and Reference values
- **No Special Highlighting**: Fields show normal Reference styling only
- **Complete Freedom**: User can edit any Reference field without visual indicators
- **Use Case**: Custom scenarios where Target/Reference comparison is not the goal

#### **Button Integration with index.html**
- **Current Button**: The existing `runReferenceBtn` in `index.html` dropdown will invoke these setup functions
- **Function Mapping**: 
  - "Mirror Target" → `TEUI.ReferenceToggle.mirrorTarget()`
  - "Mirror Target + Reference" → `TEUI.ReferenceToggle.mirrorTargetWithReference()`
  - "Reference Independence" → `TEUI.ReferenceToggle.enableReferenceIndependence()`
- **User Flow**: Setup function → Display toggle → Edit Reference values → Values persist in ReferenceState

---

## 🎮 **Updated Global Controls Architecture**

### **Primary Display Toggle** (Pure Display Switching)
- **"View Target State" / "View Reference State"**: Switches display between calculated values
- **Location**: Global header toggle  
- **Function**: Display switching only, no model setup
- **Visual**: Blue (Target) / Red (Reference) UI styling
- **Coordination**: Synchronizes all individual section header toggles
- **Styling**: Applies global Reference CSS classes when in Reference mode

### **Reference Setup Dropdown** (Model Configuration)
- **"Mirror Target"**: Setup function for identical model comparison
- **"Mirror Target + Reference"**: Setup function for building vs code comparison  
- **"Reference Independence"**: Setup function for custom scenarios
- **Location**: Reference setup dropdown (separate from display toggle)
- **Function**: Model configuration, not display switching
- **Button Integration**: These functions are invoked by the existing `runReferenceBtn` in `index.html`

---

## 🏗️ **Minimal Implementation Pattern**

### **REUSE EXISTING: Section Discovery Function**
```javascript
// Leverage existing dual-state architecture - NO changes needed to sections
function getAllDualStateSections() {
  const sectionIds = ["sect02", "sect03", "sect04", "sect08", "sect10", 
                     "sect11", "sect12", "sect13", "sect14", "sect15"];
  return sectionIds
    .map(id => ({ id, module: window.TEUI?.[id], modeManager: window.TEUI?.[id]?.ModeManager }))
    .filter(s => s.modeManager);
}
```

### **NEW: Three Setup Functions (Minimal Code)**
```javascript
// 1. Mirror Target: Copy all Target values to Reference
TEUI.ReferenceToggle.mirrorTarget = function() {
  getAllDualStateSections().forEach(section => {
    const targetData = section.modeManager.TargetState.data;
    Object.keys(targetData).forEach(fieldId => {
      section.modeManager.ReferenceState.setValue(fieldId, targetData[fieldId], "mirrored");
    });
    section.modeManager.refreshUI();
  });
};

// 2. Mirror + Reference: Copy Target + overlay ReferenceValues subset
TEUI.ReferenceToggle.mirrorTargetWithReference = function() {
  const standard = window.TEUI?.StateManager?.getValue('d_13') || 'OBC SB12 3.1.1.2.C1';
  const refValues = window.TEUI?.ReferenceValues?.[standard] || {};
  
  getAllDualStateSections().forEach(section => {
    const targetData = section.modeManager.TargetState.data;
    
    // Copy all Target values
    Object.keys(targetData).forEach(fieldId => {
      section.modeManager.ReferenceState.setValue(fieldId, targetData[fieldId], "mirrored");
    });
    
    // Overlay ReferenceValues subset
    Object.keys(refValues).forEach(fieldId => {
      section.modeManager.ReferenceState.setValue(fieldId, refValues[fieldId], "reference-standard");
    });
    
    section.modeManager.refreshUI();
  });
};

// 3. Independent: No setup needed - sections already independent by default
TEUI.ReferenceToggle.enableReferenceIndependence = function() {
  console.log("🔓 Reference Independence: No action needed - sections already independent");
};
```

### **REUSE EXISTING: Display Toggle (Leverage Current Patterns)**
```javascript
// Use existing ModeManager.switchMode() - NO new display logic needed
TEUI.ReferenceToggle.switchAllSectionsMode = function(mode) {
  getAllDualStateSections().forEach(section => {
    section.modeManager.switchMode(mode);
    section.modeManager.updateCalculatedDisplayValues();
  });
  
  // Apply existing CSS classes (already implemented)
  document.body.classList.toggle('viewing-reference-inputs', mode === 'reference');
  document.body.classList.toggle('viewing-reference-values', mode === 'reference');
  document.body.classList.toggle('reference-mode', mode === 'reference');
};
```

---

## 🎨 **UI Coordination & Styling System**

### **Master Toggle Coordination Behavior**

When the master Reference toggle is activated, it performs comprehensive UI coordination:

#### **1. Section Header Toggle Synchronization**
- **Behavior**: All individual section header Target/Reference toggles automatically switch to match master toggle
- **Implementation**: Updates toggle visual state without triggering individual section event handlers
- **Visual Feedback**: All section toggles show consistent Reference/Target state across application

#### **2. Global Reference Styling Application**
- **Legacy CSS Classes Applied** (from existing `4011-styles.css`):
  - `document.body.classList.add('viewing-reference-inputs')` - Primary reference mode class
  - `document.body.classList.add('viewing-reference-values')` - Reference values display
  - `document.body.classList.add('reference-mode')` - General reference mode indicator
  - `document.documentElement.classList.add('reference-mode')` - Root-level styling
- **Visual Changes** (using existing carefully crafted CSS):
  - **Section headers**: Background shifts to `--reference-value-color` (#8B0000 dark red)
  - **Section borders**: All section borders use reference red color
  - **Tab container**: Background and borders change to reference theme
  - **Key Values table**: Borders shift to reference red styling
  - **ReferenceValues highlighting**: Fields from `ReferenceValues.js` get distinctive styling
  - **Locked field styling**: Code-derived fields show as locked with red italics

#### **3. Master Toggle UI Updates**
- **Button Text**: Changes from "View Reference State" ↔ "View Target State"  
- **Button Styling**: Applies `reference-active` class for visual state indication
- **State Persistence**: Maintains toggle state across page interactions

### **Reverse Coordination (Target Mode)**

When switching back to Target mode:

#### **1. Section Toggle Reset**
- **Behavior**: All section header toggles automatically switch back to Target mode
- **Visual**: Blue Target theme restored across all sections
- **Consistency**: Ensures no sections remain "stuck" in Reference display

#### **2. Standard UI Styling Restoration** 
- **CSS Classes Removed**:
  - `document.body.classList.remove('reference-mode')`
  - `document.body.classList.remove('viewing-reference-values')`
  - `document.documentElement.classList.remove('reference-mode')`
- **Visual Restoration**:
  - Default blue/white Target theme restored
  - Standard input field styling
  - Normal calculated value display
  - Default section header appearance

#### **3. State Cleanup**
- **Master Toggle**: Returns to "View Reference State" text
- **Button Styling**: Removes `reference-active` class
- **Field Highlighting**: Returns to default field appearance

---

## 🎨 **User Experience Design**

### **Reference Differentiation Highlighting (Always Active)**
- **Visual**: Automatic highlighting of fields that differ between Target and Reference states
- **Replaces**: Previous "Highlight Reference Values" as separate command  
- **Benefit**: Users immediately see where models differ without manual activation

### **Smart Field Locking**
- **Mode 1 (Mirror Target)**: All fields editable after initial copying
- **Mode 2 (Mirror Target + Reference)**: ReferenceValues-derived fields locked, others editable
- **Mode 3 (Reference Independence)**: All fields editable
- **Visual Indication**: Locked fields clearly marked as "Code-Derived" with lock icon

### **Reference Standard (d_13) Separation**
- **Target d_13**: Only affects L/M/O comparison displays in Target mode
- **Reference d_13**: Drives actual ReferenceValues.js dataset for Reference calculations
- **Benefit**: Eliminates confusion about which standard affects which calculations

---

## 📋 **Streamlined Implementation Phases**

### **Phase 1: Emergency Fix (30 minutes)**
- **Task**: Fix section discovery in `getAllDualStateSections()` 
- **Code**: Change `window.TEUI.SectionModules[id]` to `window.TEUI[id]`
- **Result**: Button no longer crashes

### **Phase 2: Core Functions (2-3 hours)**
- **Task**: Add three setup functions to `4011-ReferenceToggle.js`
- **Code**: ~50 lines total (see Minimal Implementation Pattern above)
- **Result**: Working Mirror Target, Mirror + Reference, Independent modes

### **Phase 3: Display Toggle (1 hour)**  
- **Task**: Update display toggle to use existing CSS classes
- **Code**: ~10 lines (apply existing CSS classes to body)
- **Result**: Master toggle switches all sections with existing styling

### **Phase 4: Button Integration (30 minutes)**
- **Task**: Wire `runReferenceBtn` dropdown to call setup functions
- **Code**: ~15 lines (event handlers)
- **Result**: Complete working system

**Total Implementation Time: 4-5 hours maximum**

---

## 🎨 **LEVERAGE EXISTING: CSS System (No Changes Needed)**

### **Existing CSS Classes (Use As-Is)**
- **`viewing-reference-inputs`**: Primary Reference mode class ✅ **ALREADY IMPLEMENTED**
- **`viewing-reference-values`**: Reference display differentiation ✅ **ALREADY IMPLEMENTED**
- **`reference-mode`**: General Reference indicator ✅ **ALREADY IMPLEMENTED**
- **`reference-input-display-locked`**: ReferenceValues field styling ✅ **ALREADY IMPLEMENTED**

### **OPTIONAL: Single New CSS Class (If Diff Highlighting Desired)**
```css
/* Add to existing 4011-styles.css only if Mirror Target diff highlighting is implemented */
body.viewing-reference-inputs .reference-diff-highlight {
  background-color: rgba(255, 255, 0, 0.3) !important;
  border: 1px solid rgba(255, 193, 7, 0.6) !important;
  font-weight: 500 !important;
}
```

### **REUSE EXISTING: All Visual System Features**
- ✅ Section headers, borders, tabs already styled for Reference mode
- ✅ ReferenceValues highlighting (`reference-input-display-locked`) already working
- ✅ CSS variables (`--reference-value-color`) already defined
- ✅ Complete UI theme already implemented

**🎯 IMPLEMENTATION REQUIREMENT: Apply existing CSS classes only - NO new styling system needed**

---

### **Individual vs Master Toggle Coordination**

#### **Preventing Toggle Conflicts**
- **Master Override**: When master toggle is used, individual section toggles are synchronized automatically
- **Individual Override**: When individual section toggle is used, master toggle updates to reflect overall state
- **Mixed State Handling**: If sections have mixed Target/Reference states, master toggle shows "Mixed Mode" indicator
- **Event Isolation**: Individual toggle events use `bubbles: false` to prevent triggering master handlers

#### **State Consistency Rules**
- **Rule 1**: Master toggle always reflects the majority state of individual sections
- **Rule 2**: Using master toggle forces ALL sections to same mode (no mixed states)
- **Rule 3**: Individual toggles can create mixed states, master toggle adapts accordingly
- **Rule 4**: Reference styling applies globally when ANY section is in Reference mode

---

## 🔧 **MINIMAL Technical Requirements**

### **LEVERAGE EXISTING: Section Interface (Already Implemented)**
```javascript
// ✅ ALREADY EXISTS - Use existing ModeManager methods:
section.modeManager.TargetState.data          // Access Target values
section.modeManager.ReferenceState.setValue() // Set Reference values  
section.modeManager.refreshUI()               // Update display
section.modeManager.switchMode()              // Switch display mode
section.modeManager.updateCalculatedDisplayValues() // Refresh calculated fields
```

### **OPTIONAL: Advanced Features (Only If Desired)**
```javascript
// Only implement these if advanced highlighting features are wanted:
section.applyReferenceValueHighlighting?.(fieldIds)  // For ReferenceValues red highlighting
section.applyDiffHighlighting?.(fieldIds)            // For Mirror Target yellow highlighting
```

### **LEVERAGE EXISTING: ReferenceValues.js Integration**
- ✅ **ReferenceValues object already exists** - just read from `window.TEUI.ReferenceValues[standard]`
- ✅ **Standard selection already works** - read from `StateManager.getValue('d_13')`
- ✅ **State isolation already implemented** - dual-state architecture handles this

### **LEVERAGE EXISTING: State Management**
- ✅ **Perfect isolation already guaranteed** by dual-state architecture
- ✅ **Parallel calculations already running** in existing sections
- ✅ **Cross-section communication already working** via StateManager `ref_` prefixes

**🎯 IMPLEMENTATION REQUIREMENT: Use existing patterns - NO new architectural components needed**

---

## 📚 **Documentation References**

### **Key Documentation Sources**
- `DUAL-STATE-IMPLEMENTATION-GUIDE.md` (Lines 1638-1782): Complete implementation patterns
- `DUAL-STATE-CHEATSHEET.md` (Lines 64-118): Reference standard overlay patterns  
- `COMPREHENSIVE-WORKPLAN.md` (Lines 113-173): Mirror Target functionality details
- `STATE-MIXING-DEBUG-GUIDE.md` (Lines 164-204): State isolation requirements

### **Architecture Patterns**
- **Pattern A Dual-State**: Three core objects (TargetState, ReferenceState, ModeManager)
- **Consumer Section Pattern**: S01 reads final calculated totals, doesn't listen to raw inputs
- **State Sovereignty**: Each section manages its own dual-state objects
- **ref_ Prefix Convention**: Reference results stored with `ref_` prefix in StateManager

---

## 🎯 **Success Criteria**

### **Functional Requirements**
- ✅ **No Crashes**: Button works without throwing errors
- ✅ **State Isolation**: Reference operations don't affect Target values  
- ✅ **Three Setup Modes**: Mirror Target, Mirror Target + Reference, Independent Models
- ✅ **Display Toggle**: Switch between Target and Reference calculated values
- ✅ **Visual Differentiation**: Clear indication of current mode and field differences
- ✅ **UI Coordination**: Master toggle synchronizes all section header toggles
- ✅ **Global Styling**: Reference CSS classes applied/removed consistently
- ✅ **Bidirectional Sync**: Individual section toggles update master toggle state
- ✅ **CSS Preservation**: Existing reference styling system maintained and leveraged
- ✅ **ReferenceValues Highlighting**: Code-derived fields show distinctive locked styling
- ✅ **Reference Editing**: User can edit Reference fields and changes persist in ReferenceState
- ✅ **Setup Functions**: Mirror Target, Mirror + Reference, and Independent modes accessible via runReferenceBtn
- ✅ **Dynamic Highlighting**: ReferenceValues fields show highlighting that disappears when user edits them
- ✅ **Re-Application Behavior**: Re-running setup functions overwrites user customizations with fresh ReferenceValues
- ✅ **Target Diff Highlighting**: Mirror Target mode shows yellow highlights for fields that differ from Target
- ✅ **Persistent Diff Tracking**: Yellow diff highlights persist across sessions and mode toggles
- ✅ **Mode-Specific Highlighting**: Independent mode shows no special highlighting (no mirroring relationship)

### **Technical Requirements**  
- ✅ **Architecture Compliance**: Works with current dual-state section structure
- ✅ **Performance**: No significant delay when switching modes or setting up references
- ✅ **Maintainability**: Clean, documented code following established patterns
- ✅ **Extensibility**: Easy to add new sections or modify reference behavior

---

## 🚀 **Next Steps**

1. **Review & Approval**: Confirm approach aligns with project vision
2. **Phase 1 Implementation**: Emergency fix to prevent crashes
3. **Incremental Development**: Implement phases 2-4 based on priority and testing
4. **Documentation Updates**: Update DUAL-STATE-CHEATSHEET with new patterns
5. **Testing Protocol**: Comprehensive testing across all dual-state sections

### **✅ Simplified Acceptance Criteria**

**Core Requirements (Must Have):**
1. **No Crashes**: Button works without throwing errors
2. **State Isolation**: Reference operations don't contaminate Target values  
3. **Uses Existing Patterns**: Leverages current ModeManager and CSS classes
4. **Three Setup Modes**: Mirror Target, Mirror + Reference, Independent functions work

**Advanced Features (Nice to Have):**
5. **ReferenceValues Highlighting**: Red italic styling for code-derived fields
6. **Target Diff Highlighting**: Yellow highlighting for Mirror Target differences
7. **UI Coordination**: Master toggle synchronizes individual section toggles

**Performance:**
- Mode switching should be instantaneous (existing ModeManager already handles this)

---

## 🎯 **Implementation Summary: Maximum Reuse, Minimal Code**

### **What Already Exists (Leverage 100%)**
- ✅ Dual-state architecture with ModeManager in all sections
- ✅ Complete CSS system for Reference styling (`viewing-reference-inputs`, etc.)
- ✅ ReferenceValues.js with building code standards
- ✅ StateManager with perfect state isolation
- ✅ Display toggle functionality in individual sections

### **What Needs to be Added (Minimal)**
- 🔧 **~75 lines of code total**:
  - Fix section discovery function (5 lines)
  - Three setup functions (50 lines)
  - Display toggle coordination (10 lines)  
  - Button event handlers (10 lines)

### **What NOT to Build (Avoid Duplication)**
- ❌ New CSS styling system (use existing classes)
- ❌ New state management (use existing ModeManager)
- ❌ New calculation triggers (display-only system)
- ❌ New section interfaces (use existing methods)
- ❌ New architectural patterns (leverage dual-state)

### **Result: Lightweight, High-Impact Solution**
- **4-5 hours implementation time**
- **Maximum reuse of existing architecture**  
- **Zero performance impact** (uses existing patterns)
- **Complete feature set** (three reference modes + display toggle)
- **Perfect integration** with current dual-state system

*This roadmap ensures maximum leverage of existing code while providing the complete master Reference toggle functionality with minimal development effort.*
