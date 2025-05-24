# Workplan: Standardizing State Value Management & Dual-Engine Reference Model Integration (TEUI 4.011)

**Date:** 2025-05-22 12h15pm EST.
**Version:** 4.0 (Dependency Chain Mapping & Sequenced Dual-Engine Implementation)
**Inspired by:** `README.md`, Excel dual-worksheet methodology, CSV/Excel standardization requirements

## 1. Objective

To standardize the structure, handling, import, and export of all stateful values within the TEUI 4.011 application, and to implement a robust **dual-engine reference modeling system**. This includes:
*   Establishing a **unified data structure** for **values of user-editable fields** (inputs, dropdowns, sliders) to facilitate consistent CSV/Excel import/export.
*   Creating a **parallel calculation system** where Reference Model (Column E) and Target Model (Column H) calculations run simultaneously and continuously **across all sections in the dependency chain**.
*   Managing imported data, user-modified data, and values derived from reference standards (via `d_13`) that provide code-compliant baselines for comparison.
*   Creating a consistent and robust data management layer that simplifies development, enhances maintainability, ensures data integrity, and supports future expansion across multiple jurisdictions and building codes.
*   Allowing users to **inspect and optionally edit reference inputs** via a Reference Mode toggle, while maintaining continuous dual calculations.
*   Supporting scalable addition of reference standards for different provinces, countries, territories, and building codes.
*   **Implementing dual-engine architecture in proper dependency chain sequence** to ensure accurate cross-section value propagation.
*   **Purely calculated fields (e.g., results of formulas) are explicitly excluded from standardized state datasets; they are always derived from the current set of active input values using explicit state sources.**

## 2. Core Principles

### A. Unified Data Structure for User-Editable Fields
The cornerstone of this workplan is to establish a **unified key-value pair structure** for representing sets of field values. This structure enables consistent CSV/Excel import/export and standardized reference value application across all jurisdictions.

*   **Proposed Unified Structure:** A simple JSON object where keys are `fieldId` strings **of user-editable fields** and values are the corresponding raw string representations of the data.
    ```json
    {
        "h_14": "Three Feathers Terrace", // Example: User text input for Project Name (S02)
        "h_15": "1427.20",                // Example: User text input for Conditioned Floor Area (S02)
        "d_12": "A-Assembly",              // Example: User dropdown for Major Occupancy (S02)
        "h_13": "50"                       // Example: User slider for Service Life (S02)
        // ... other fieldId: value pairs for user-editable fields
    }
    ```
    This aligns with CSV/Excel export requirements and enables direct compatibility with import processes.

### B. Architectural Principles for Dual-Engine Reference Model Integration

The Reference Model integration uses a **dual calculation engine** approach that mirrors the proven Excel methodology, where separate worksheets handle Reference and Target calculations simultaneously:

1.  **`StateManager` as Dual-State Repository:** `StateManager` will maintain distinct data sources:
    *   `this.fields`: The primary store for **Application/Target State** (user-modified, imported, defaults for design work). Modified by standard `StateManager.setValue()`.
    *   `this.activeReferenceDataSet`: A separate store for **Reference Model State** (combination of reference standard values and carried-over application values like geometry). Constructed by `StateManager.loadReferenceData()` and modified by `StateManager.setValueInReferenceMode()` for editable reference fields.

2.  **Explicit State Getters (No Mode-Aware Calculations):** Calculation functions use explicit state sources:
    *   `StateManager.getApplicationValue(fieldId)`: Always returns Target/Design model values → drives Column H calculations
    *   `StateManager.getReferenceValue(fieldId)`: Always returns Reference model values → drives Column E calculations  
    *   `StateManager.getCurrentDisplayValue(fieldId)`: Mode-aware getter for UI display only (not used in calculations)

3.  **Dual Calculation Engines (Always Running):** Both models calculate continuously:
    *   **Reference Model Engine**: Uses `getReferenceValue()` exclusively → outputs to Column E fields (e_6, d_8, e_10, etc.)
    *   **Target Model Engine**: Uses `getApplicationValue()` exclusively → outputs to Column H fields (h_6, h_8, h_10, etc.)
    *   **Both engines triggered**: By any relevant value change in their respective data sources

4.  **Cross-Section Value Propagation**: **CRITICAL ARCHITECTURAL INSIGHT**
    *   **Calculated values from one section that feed other sections must exist in BOTH engines**
    *   Example: S15 calculates `d_136` which feeds S04's `h_27` calculation
    *   **Reference Engine**: S15 Reference Engine calculates `e_136` (Reference result) → feeds S04 Reference Engine
    *   **Target Engine**: S15 Target Engine calculates `h_136` (Target result) → feeds S04 Target Engine
    *   **Dependency Chain Requirement**: All sections in the calculation dependency chain need dual-engine treatment

5.  **Reference Mode Toggle (Inspection Tool):** The "Show Reference" button serves as an **inspection and editing interface**:
    *   **Purpose**: Display reference input values in UI fields for user inspection/editing
    *   **Scope**: Affects UI display only - does not change which calculation engine drives which columns
    *   **Behind the scenes**: Both calculation engines continue running using their respective data sources
    *   **Value inheritance**: Reference model inherits user geometry/areas but uses code values for performance parameters

6.  **Automatic Calculation & Display Engine (Dual Path):** 
    *   **All Sections in Dependency Chain**: Must run dual calculations to provide both Reference and Target calculated values
    *   **Section 01 Key Values**: Always displays Reference results in Column E and Target results in Column H, regardless of UI toggle state
    *   **UI Updates**: Via `FieldManager.updateFieldDisplay()` with measures to prevent Reference Mode display updates from overwriting Application State

### B.1 CRITICAL CLARIFICATION: Column E and Column H Display Behavior

**This is the most important functional requirement of the dual-engine architecture:**

1. **Column E (Reference Results) - ALWAYS Shows Reference Calculations:**
   - **Data Source**: ALWAYS uses Reference state inputs via `getReferenceValue()`
   - **Calculation Engine**: ALWAYS uses Reference calculation engine
   - **Display Behavior**: ALWAYS shows Reference-calculated results
   - **UI Mode Independence**: Shows Reference results regardless of whether UI is in "Target" or "Reference" mode
   - **Example**: In Section 01, `e_10` (Reference TEUI) always shows the TEUI calculated from Reference state values

2. **Column H (Target/Application Results) - ALWAYS Shows Application Calculations:**
   - **Data Source**: ALWAYS uses Application state inputs via `getApplicationValue()`
   - **Calculation Engine**: ALWAYS uses Target/Application calculation engine
   - **Display Behavior**: ALWAYS shows Application-calculated results
   - **UI Mode Independence**: Shows Application results regardless of whether UI is in "Target" or "Reference" mode
   - **Example**: In Section 01, `h_10` (Target TEUI) always shows the TEUI calculated from Application state values

3. **The "Show Reference" Toggle - UI Inspection Tool Only:**
   - **Purpose**: Allows users to inspect and edit Reference INPUT values in the UI fields
   - **Does NOT**: Change which calculation engine drives Column E vs Column H
   - **Does NOT**: Affect the display of calculated results in Columns E and H
   - **Does**: Switch editable field displays between Application and Reference input values
   - **Behind the scenes**: Both calculation engines continue running regardless of toggle state

4. **Continuous Dual Calculation Requirement:**
   - **Every `calculateAll()` call**: Must trigger BOTH `calculateReferenceModel()` AND `calculateTargetModel()`
   - **Every value change**: Must propagate through BOTH calculation engines
   - **Cross-section dependencies**: Must maintain separate Reference and Target calculation chains
   - **No mode checking**: Calculation functions should never check UI mode to decide whether to run

5. **Implementation Pattern for Section Modules:**
   ```javascript
   // CORRECT: Always run both engines
   function calculateAll() {
       // Calculate both models every time
       calculateReferenceModel(); // Updates Column E values
       calculateTargetModel();    // Updates Column H values
   }
   
   // INCORRECT: Mode-dependent calculations
   function calculateAll() {
       if (isInReferenceMode()) {
           calculateReferenceModel();
       } else {
           calculateTargetModel();
       }
   }
   ```

This architecture ensures users can always see the comparison between Reference (baseline/code) calculations in Column E and their Target (design) calculations in Column H, providing immediate feedback on performance relative to code requirements.

### C. Calculation Dependency Chain Mapping

**CRITICAL IMPLEMENTATION INSIGHT**: The dual-engine architecture must be implemented in **dependency chain order** to ensure accurate cross-section value propagation.

#### Primary Calculation Flow (Identified Dependencies)
```
S15 (TEUI) → S04 (Energy Totals) → S01 (Key Values Dashboard)
     ↓              ↓                    ↓
  d_136 → H27   j_32, k_32 → e_6,e_8,e_10 (Reference)
  (Target)      (Reference)    h_6,h_8,h_10 (Target)
```

#### Supporting Section Dependencies
```
S07 (Water) → S04 (via DHW energy calculations)
S11 (Envelope) → S12 (U-values) → S14 (TEDI) → S15 (TEUI)
S13 (Mechanical) → S14 (TEDI) → S15 (TEUI)
S09 (Internal Gains) → S14 (TEDI) → S15 (TEUI)
S10 (Solar Gains) → S14 (TEDI) → S15 (TEUI)
```

#### Implementation Sequence Priority
1. **Leaf Sections First**: S07, S09, S10, S11, S13 (sections that produce calculated values for others)
2. **Intermediate Sections**: S12, S14 (sections that consume from leaf sections and feed upstream)
3. **Primary Chain**: S15 → S04 → S01 (main calculation flow)

**Key Principle**: Each section in the dependency chain must provide **both Reference and Target calculated outputs** for consumption by upstream sections.

## 3. Key Components & Data Requirements

*   **`4011-ReferenceValues.js`:** Static data source for jurisdiction/code-specific values.
    *   **Scalable Structure**: Each standard becomes a direct JSON object of `{ "user_editable_fieldId": "value", ... }` for explicitly defined fields
    *   **Future Expansion**: Supports adding new provinces, countries, territories, and building codes
    *   **Sparse Definition**: Only contains fields that the standard explicitly overrides

*   **`4011-StateManager.js`:** Core dual-state management:
    *   `this.fields`: Application/Target state storage
    *   `this.activeReferenceDataSet`: Reference model state storage  
    *   `getApplicationValue(fieldId)`: Always returns Target state → Column H calculations
    *   `getReferenceValue(fieldId)`: Always returns Reference state → Column E calculations
    *   `getCurrentDisplayValue(fieldId)`: Mode-aware for UI display only
    *   `loadReferenceData(standardKey)`: Builds Reference state from standard overrides + application carry-overs
    *   `setValueInReferenceMode(fieldId, value)` for Reference state modifications

*   **`4011-ReferenceToggle.js`:** UI inspection interface:
    *   Toggles between displaying Application vs Reference values in input fields
    *   Does NOT affect calculation engine data sources
    *   Orchestrates UI refresh for inspection/editing without disrupting calculations

*   **`4011-FieldManager.js`:** Standardized field management and UI updates via `updateFieldDisplay()`

*   **`4011-FileHandler.js`:** CSV/Excel import/export standardization:
    *   Consistent 3-row CSV format supporting both Application and Reference state export
    *   Standardized import process that works across all jurisdictions

*   **Section Modules (`sections/4011-SectionXX.js`):**
    *   Use explicit state getters in calculation functions
    *   **All sections in dependency chain implement dual calculation engines**
    *   Section 01 serves as the final dashboard displaying results from both engines
    *   Sections must provide both Reference and Target calculated outputs

## 4. Phased Implementation Workplan

This workplan prioritizes CSV/Excel standardization and the dual-engine reference modeling system to support scalable expansion across jurisdictions and building codes. **UPDATED with dependency chain sequencing**.

### Prerequisite: Standardize Helper Functions
*   **Goal:** Ensure all section modules consistently use global `window.TEUI.parseNumeric` and `window.TEUI.formatNumber` for data parsing and display. This is essential for reliable CSV/Excel import/export and consistent reference value application.
*   **Status:** S02, S05, S08, S11, S12 completed. Remaining sections need review and refactoring.
*   **Action:** Systematically refactor remaining section modules to use these global helpers before proceeding with dual-engine implementation.

### Phase A: Foundational Data Structure and `4011-ReferenceValues.js` Refactor
*   **A1. Finalize Unified Data Structure (for User-Editable Fields):** (Completed)
*   **A2. Restructure `4011-ReferenceValues.js` for Scalability:** (Completed, ongoing validation)
    *   **Goal:** Simple, sparse `{ "fieldId": "value" }` objects for each jurisdiction/code
    *   **Benefit:** Enables easy addition of new provinces, countries, territories, and building codes
    *   **Structure:** Each standard contains only explicitly overridden fields

### Phase B: `StateManager` Enhancements for Dual-Engine Architecture
*   **B1. Implement Explicit State Getters (Replace Mode-Aware getValue):**
    *   **Remove:** Single `getValue(fieldId)` that switches based on mode
    *   **Add:** `getApplicationValue(fieldId)` - Always returns Target/Design state for Column H calculations
    *   **Add:** `getReferenceValue(fieldId)` - Always returns Reference state for Column E calculations
    *   **Add:** `getCurrentDisplayValue(fieldId)` - Mode-aware for UI display only (not used in calculations)
    *   **Benefit:** Eliminates mode-switching in calculations, enables true parallel execution

*   **B2. Dual State Repository Enhancement:**
    *   **Maintain:** `this.fields` for Application/Target state
    *   **Enhance:** `this.activeReferenceDataSet` construction and management
    *   **Add:** `loadReferenceData(standardKey)` builds Reference state from standard + carry-overs
    *   **Add:** `setValueInReferenceMode(fieldId, value)` for Reference state modifications

*   **B3. Cross-Section Value Management:**
    *   **Add:** Methods for managing calculated values that cross section boundaries
    *   **Ensure:** Both Reference and Target calculated values are available for downstream sections
    *   **Implement:** Proper triggering of downstream calculations when upstream values change

*   **B4. CSV/Excel Import/Export Integration:**
    *   **Enhance:** `setValues(dataSet, stateType)` for batch import compatibility
    *   **Add:** Support for 3-row CSV format (Application + Reference state export)
    *   **Ensure:** Import process correctly populates both state repositories

### Phase C: Dual Calculation Engine Implementation (Dependency Chain Sequence)

#### **C1. Leaf Section Implementation (S07, S09, S10, S11, S13)**
*   **Priority:** Sections that primarily consume inputs and produce calculated outputs for other sections
*   **Implementation Pattern:**
    *   **Reference Engine**: Uses `getReferenceValue()` for inputs → calculates Reference results
    *   **Target Engine**: Uses `getApplicationValue()` for inputs → calculates Target results  
    *   **Dual Output**: Provides both Reference and Target calculated values for upstream consumption
    *   **Cross-Section Values**: Register calculated outputs in StateManager for downstream access

*   **Section 07 (Water Use) - Immediate Priority:**
    *   **Reference Engine**: `calculateReferenceWaterUse()` → produces Reference DHW energy values
    *   **Target Engine**: `calculateTargetWaterUse()` → produces Target DHW energy values
    *   **Outputs**: Both engines provide energy values for S04 consumption

#### **C2. Intermediate Section Implementation (S12, S14)**
*   **Section 12 (Volume/Surface)**: Already largely dual-compatible
*   **Section 14 (TEDI)**: Consumes from S11, S13, S09, S10 → feeds S15
    *   **Dual Implementation**: Both Reference and Target TEDI calculations

#### **C3. Primary Chain Implementation (S15 → S04 → S01)**
*   **Section 15 (TEUI)**: 
    *   **Consumes**: Reference and Target values from S14, other sections
    *   **Produces**: Reference `e_136` and Target `d_136` for S04
    
*   **Section 04 (Energy Totals)**:
    *   **Consumes**: Reference `e_136` and Target `d_136` from S15
    *   **Produces**: Reference `e_32`, `f_32` and Target `j_32`, `k_32` for S01
    
*   **Section 01 (Key Values Dashboard)**:
    *   **Consumes**: Reference and Target values from S04
    *   **Displays**: Column E (Reference results) and Column H (Target results)

### Phase D: Reference Mode Toggle (Inspection Interface)
*   **D1. Redefine Reference Toggle Purpose:**
    *   **Purpose:** UI inspection/editing tool only - does NOT affect calculation data sources
    *   **Function:** Switches between displaying Application vs Reference values in input fields
    *   **Preserve:** Continuous dual calculations regardless of toggle state

*   **D2. UI Display Management:**
    *   **Implement:** Safe UI refresh that doesn't disrupt Application state
    *   **Add:** Proper muting during Reference display updates
    *   **Ensure:** Reference field editing updates Reference state only

### Phase E: CSV/Excel Standardization (3-Row Format)
*   **E1. Enhanced CSV Export Logic (`4011-FileHandler.js`):**
    *   **Row 1:** All user-editable `fieldId`s (header)
    *   **Row 2:** Current Application/Target state values
    *   **Row 3:** Active Reference standard key + resolved Reference state values
    *   **Goal:** Support export of both calculation engine states simultaneously

*   **E2. Enhanced CSV Import Logic:**
    *   **Process Row 2:** Update Application state (includes `d_13` for standard selection)
    *   **Process Row 3:** Validate Reference state reconstruction
    *   **Trigger:** Both calculation engines after import completion
    *   **Ensure:** Imported Reference state matches exported Reference state

### Phase F: Scalability and Expansion Support
*   **F1. Reference Standards Database Enhancement:**
    *   **Structure:** Standardized format for adding new jurisdictions
    *   **Documentation:** Clear process for adding provinces, countries, territories
    *   **Validation:** Automated checks for Reference value completeness

*   **F2. Multi-Jurisdiction Support:**
    *   **Interface:** Enhanced `d_13` dropdown for jurisdiction/code selection
    *   **Inheritance:** Proper value carry-over logic for geometry and user inputs
    *   **Testing:** Validation across multiple jurisdiction examples

### Phase G: End-to-End Testing, Validation, and Documentation
*   **G1. Dual Engine Testing:**
    *   **Verify:** Column E always shows Reference calculations across all sections
    *   **Verify:** Column H always shows Target calculations across all sections
    *   **Test:** Both engines respond correctly to their respective state changes
    *   **Validate:** Reference Toggle affects display only, not calculations
    *   **Test:** Cross-section value propagation works correctly in dependency chain

*   **G2. CSV/Excel Import/Export Validation:**
    *   **Test:** 3-row export captures both Application and Reference states
    *   **Test:** Import correctly reconstructs both states
    *   **Validate:** Cross-jurisdiction import/export compatibility

*   **G3. Scalability Testing:**
    *   **Test:** Adding new reference standards
    *   **Validate:** Proper value inheritance and override logic
    *   **Document:** Process for future jurisdiction expansion

### Phase H: T-Cells Reference Comparison System Implementation
*   **H1. T-Cell Value Infrastructure:**
    *   **Add:** `getTCellValue(fieldId)` method to StateManager
    *   **Add:** `getCorrespondingTCell(fieldId)` mapping logic
    *   **Enhance:** ReferenceValues.js with explicit T-cell values (t_XX pattern)
    *   **Create:** Centralized comparison type mapping for all field types

*   **H2. Directional Comparison Engine:**
    *   **Implement:** `calculateComparison(current, reference, type)` with directional logic
        *   Higher is Better: RSI, efficiency percentages, performance ratings
        *   Lower is Better: U-values, energy intensity, emissions, penalties
        *   Range/Threshold: Specific limits and acceptable ranges
    *   **Add:** Consistent percentage calculation across all comparison types
    *   **Ensure:** Pass/fail determination follows correct directional logic

*   **H3. Section Module Integration:**
    *   **Update:** All sections with L, M, N columns to use T-cell comparison system
    *   **Standardize:** Reference display updates (M = percentage, N = checkmark)
    *   **Map:** Multi-value rows to their specific comparison fields
    *   **Remove:** Hard-coded baseline values in favor of T-cell system

*   **H4. Cross-Section Coordination:**
    *   **Coordinate:** Section 01 overall pass/fail status with T-cell results
    *   **Validate:** Consistent comparison logic across all sections
    *   **Test:** T-cell values properly sourced from d_13 selection
    *   **Document:** Field-specific comparison type assignments

### Phase I: End-to-End Testing, Validation, and Documentation

## 5. Timeline & Priority

*   **Prerequisite (Standardize Helpers):** Highest immediate priority - enables reliable CSV/Excel processing
*   **Phase A (Data Structure):** Highest priority - foundation for scalability  
*   **Phase B (Dual State Management):** Critical priority - core architecture for dual engines
*   **Phase C1 (Leaf Section Dual Engines):** **IMMEDIATE PRIORITY** - S07 first, then S09, S10, S11, S13
*   **Phase C2 (Intermediate Sections):** High priority - S12, S14 dual implementations
*   **Phase C3 (Primary Chain):** High priority - S15 → S04 → S01 sequence
*   **Phase D (Reference Toggle Redefinition):** Medium priority - improves user experience
*   **Phase E (CSV/Excel Standardization):** High priority - enables data interchange and expansion
*   **Phase F (Scalability Support):** Medium priority - prepares for future growth
*   **Phase G (Testing & Documentation):** Ongoing throughout, with final validation phase
*   **Phase H (T-Cells):** Medium priority - implements T-cell comparison system
*   **Phase I (End-to-End Testing):** Ongoing throughout, with final validation phase

**Primary Focus**: Implement dual-engine architecture in **dependency chain sequence** starting with S07 (Water Use), then build up through the calculation flow to ensure accurate cross-section value propagation for both Reference and Target models.

## 6. Dependency Chain Analysis & Implementation Strategy

### Current Dependency Chain Understanding

**Primary Flow:**
```
S07 (Water) → S04 (Energy) → S01 (Dashboard)
S15 (TEUI) → S04 (Energy) → S01 (Dashboard)
S14 (TEDI) → S15 (TEUI) → S04 → S01
```

**Supporting Flows:**
```
S11 (Envelope) → S12 (U-values) → S14 (TEDI)
S13 (Mechanical) → S14 (TEDI)
S09 (Internal Gains) → S14 (TEDI)
S10 (Solar Gains) → S14 (TEDI)
```

### Implementation Strategy

1. **Start with S07 (Water Use)**: Already has good architecture, clear inputs/outputs
2. **Build S09, S10, S11, S13**: Provide calculated values to S14
3. **Implement S14 (TEDI)**: Consolidates energy demand calculations
4. **Implement S15 (TEUI)**: Provides final energy totals
5. **Implement S04**: Processes energy totals for dashboard
6. **Complete S01**: Final dashboard display

### Critical Success Factors

1. **Dual Output Pattern**: Each section must provide BOTH Reference and Target calculated values
2. **State Management**: Calculated values must be stored in StateManager for cross-section access
3. **Triggering Logic**: Changes in upstream sections must properly trigger downstream recalculations
4. **Value Mapping**: Clear mapping of which calculated values feed which sections

This approach ensures that when S01 needs accurate results from S04, both the Reference and Target calculation chains are complete and accurate.

## Appendix A: CSV Export Field Verification (vs. `4011-ExcelMapper.js`)

**Date of Analysis:** 2025-05-16

**Objective:** To verify if user-editable fields listed in `4011-ExcelMapper.js` (specifically in `this.excelReportInputMapping`), particularly those with slider-like behavior or percentage types, are correctly included in the CSV export functionality of `4011-FileHandler.js`.
This initial analysis was performed against the 2-row CSV export format. The findings remain relevant for the header row (Row 1) of the 3-row format.

**Methodology:**
Fields from `excelReportInputMapping` that appeared to be complex (e.g., described as sliders or percentages) were identified. Their definitions (specifically `type` and `sectionId`) were located within their respective `sections/4011-SectionXX.js` modules. This information was then checked against the export conditions in `4011-FileHandler.js`:

*   A field is exported if its `type` is one of: `'editable'`, `'dropdown'`, `'year_slider'`, `'percentage'`, `'coefficient'`, `'number'`.
*   OR if its `sectionId` is `'sect03'`.

**Key Fields Investigated & Findings:**

1.  **`h_12`** (Section 02: Reporting Period - "Slider -> Number")
    *   Definition: `type: "year_slider"`, `sectionId: "sect02"`
    *   Status: **EXPORTED** (due to `type: "year_slider"`)

2.  **`h_13`** (Section 02: Service Life - "Slider -> Number")
    *   Definition: `type: "year_slider"`, `sectionId: "sect02"`
    *   Status: **EXPORTED** (due to `type: "year_slider"`)

3.  **`d_97`** (Section 11: Thermal Bridge Penalty % - "Percentage")
    *   Definition: `type: "percentage"`, `sectionId: "sect11"`
    *   Status: **EXPORTED** (due to `type: "percentage"`)

4.  **`f_113`** (Section 13: HSPF - "Slider/Coefficient -> Number")
    *   Definition: `type: "coefficient"`, `sectionId: "sect13"`
    *   Status: **EXPORTED** (due to `type: "coefficient"`)

5.  **`d_118`** (Section 13: HRV/ERV SRE % - "Percentage Slider -> Number")
    *   Definition: `type: "percentage"`, `sectionId: "sect13"`
    *   Status: **EXPORTED** (due to `type: "percentage"`)

6.  **`k_120`** (Section 13: Unoccupied Setback % - "Percentage Dropdown/Slider")
    *   Definition: `type: "percentage"`, `sectionId: "sect13"`
    *   Status: **EXPORTED** (due to `type: "percentage"`)

**Conclusion:**
The targeted analysis of these potentially problematic fields indicates that their current definitions use `type` values (e.g., `year_slider`, `percentage`, `coefficient`) that are explicitly included in the export logic of `4011-FileHandler.js`. Therefore, for these specific fields, there appear to be no omissions from the CSV export based on their `type`.

This supports the general approach in Phase C1 of the workplan, which aims to ensure *all* user-editable fields are correctly identified and exported. While this check was not exhaustive for all 100+ fields in `excelReportInputMapping`, the higher-risk cases examined are correctly handled by the current export filters. A comprehensive review during Phase G (Testing) should confirm all user-editable fields are captured.

## Appendix B: Aligning CSV Export with `ReferenceValues.js` Structure (3-Row Format)

**Objective:** To define a CSV export format that is structurally consistent with the proposed unified data structure for `TEUI.ReferenceValues` and general application state, focusing on user-editable fields. This appendix details the enhanced 3-row CSV format.

**1. Background:**

The workplan (Phase A2) restructures `TEUI.ReferenceValues` so that each defined reference standard directly returns data **only for user-editable fields** in the Unified Data Structure *that the standard explicitly defines*:
```json
// Example: TEUI.ReferenceValues["OBC_SB10_2017_ClimateZone5"] might look like:
{
    "d_18": "Toronto",      // User-editable City/Location for Climate Data (S03)
    "f_85": "10.5",         // User-editable Roof RSI (S11)
    "h_13": "OBC SB10 2017 CZ5" // User-editable description field (S02)
    // ... other relevant *user-editable* fieldIds explicitly defined by this standard
}
```
The CSV export needs to represent:
1.  The list of all user-editable `fieldId`s (Header).
2.  The current application's state values for these `fieldId`s.
3.  The fully resolved Reference Mode state values for these `fieldId`s, which is a composite of application state carry-overs, Reference Mode defaults, explicit standard values (from the refactored `TEUI.ReferenceValues`), and any user edits made while in Reference Mode.

**2. Proposed 3-Row Aligned CSV Export/Import Format (from Phase C):**

*   **Row 1 (Header Row - User-Editable Field IDs):**
    *   A single, comma-separated string of `fieldId`s for ALL user-editable fields in the application. This list is comprehensive and ordered consistently. The `fieldId` for the reference standard selection (e.g., `d_13`) must be included.
    *   Example: `d_27,d_19,f_85,h_13,d_13,...`

*   **Row 2 (Current Application State Values):**
    *   A single, comma-separated string of the corresponding raw string values for the `fieldId`s in Row 1. This reflects the live state of the application at the time of export. The value for `d_13` here indicates the active reference standard for the application state.
    *   Example: `1500.75,app_state_d19_value,7.5,NBC 9.36 Prescriptive Path,NBC T1,...`

*   **Row 3 (Active Reference Standard Values):**
    *   **Cell 1:** The key/name of the active reference standard (this value will match the value of `d_13` in Row 2).
    *   **Subsequent Cells:** For each `fieldId` in Row 1 (from the *first* `fieldId`), this cell contains the value for that `fieldId` as it exists in the fully resolved Reference Mode state, managed by `StateManager` (e.g., via a conceptual `StateManager.getActiveReferenceModeValue(fieldId)`). This state is a result of:
        1.  Values carried over from the application state.
        2.  Specific Reference Mode defaults.
        3.  Explicit values from the selected reference standard (sourced from the refactored `TEUI.ReferenceValues`).
        4.  Any user modifications made to fields that are independently editable while in Reference Mode.
        (See Appendix E for detailed field-level behavior).
    *   Example (assuming Row 1 is `d_27,d_19,f_85,h_13,d_13` and active standard `NBC T1` from Row 2's `d_13` defines `f_85` and `h_13`, while `d_27` and `d_19` carry over from application state values `app_d27` and `app_d19` respectively):
        `NBC T1,app_d27,app_d19,6.41,NBC 9.36 Prescriptive Path,,...`
        (The cell for `d_13` in Row 3 is empty as the standard doesn't define a value for `d_13` itself).

**Benefits of this Alignment:**

*   **Comprehensive State Snapshot:** Captures all user-editable `fieldId`s, their application state values, and their fully resolved Reference Mode state values.
*   **Single Header Row:** Simplifies parsing and reduces redundancy.
*   **Clear State Separation:** Row 2 is pure application state; Row 3 is pure (resolved) Reference Mode state.
*   **Simplified Import Logic:**
    *   Row 2 directly updates the application state. Setting `d_13` from Row 2 correctly triggers `StateManager` to build the Reference Mode state internally.
    *   Row 3 serves as a record/checksum of the Reference Mode state at export. The import process relies on the `d_13` value from Row 2 to trigger the reconstruction of the Reference Mode state using `StateManager` logic and `TEUI.ReferenceValues`.

This 3-row format balances comprehensiveness with efficiency for data interchange.

## Appendix C: Updating `4011-FileHandler.js` for Standardized CSV Export (3-Row Format)

**Objective:** To outline the required modifications within `4011-FileHandler.js` (primarily the `exportToCSV` function and its helpers) to produce and parse CSV files in the standardized 3-row format. This ensures alignment with the `ReferenceValues.js` refactor (Phase A2), `StateManager` enhancements (Phase B), and CSV import expectations (Phase C2).

**Recap of Standardized 3-Row CSV Format:**

*   **Row 1 (Header Row):** Comma-separated `fieldId`s of all user-editable fields (including `d_13`).
    *   Example: `d_27,d_19,f_85,h_13,d_13,...`
*   **Row 2 (Current Application State Values):** Comma-separated raw string values corresponding to Row 1 `fieldId`s (application state).
    *   Example: `1500.75,app_state_d19_value,7.5,NBC 9.36 Prescriptive Path,NBC T1,...`
*   **Row 3 (Active Reference Standard Values):**
    *   Cell 1: Key of the active reference standard (from `d_13` in Row 2).
    *   Subsequent Cells: Values from `StateManager.getActiveReferenceModeValue(fieldId)` for each `fieldId` in Row 1, representing the fully resolved Reference Mode state.
    *   Example: `NBC T1,app_d27,app_d19,6.41,NBC 9.36 Prescriptive Path,,...`

**Key Modifications in `4011-FileHandler.js` - `exportToCSV()`:**

1.  **Identifying User-Editable Fields for Row 1 (Header):**
    *   Action: Use `TEUI.FieldManager.getAllFields()` and filter by user-editable types. This list of `fieldId`s becomes Row 1. Ensure a consistent order and inclusion of `d_13`.

2.  **Collecting Data for Row 2 (Application State):**
    *   Action: For each `fieldId` in Row 1, retrieve its current value using `window.TEUI.StateManager.getValue(fieldId)` (ensuring this call correctly reflects application state when not in reference mode, or by having a specific method like `StateManager.getApplicationStateValue(fieldId)` if `getValue` becomes strictly mode-aware). This forms Row 2.

3.  **Collecting Data for Row 3 (Reference Mode State):**
    *   **Prerequisite:** `StateManager` must have a method (e.g., `getActiveReferenceModeValue(fieldId)` or rely on `getValue(fieldId)` being correctly mode-aware when Reference Mode is active) that can return the value for any user-editable field as it currently exists in the active Reference Mode state (`activeReferenceDataSet`).
    *   Action:
        1.  Get the `activeStandardKey` from `window.TEUI.StateManager.getValue('d_13')` (from application state). This will be the first cell of Row 3.
        2.  Initialize an array for Row 3 values, starting with `activeStandardKey`.
        3.  Iterate through the ordered list of `fieldId`s from Row 1. For each `fieldId`:
            *   Append `window.TEUI.StateManager.getActiveReferenceModeValue(fieldId)` (or equivalent) to the Row 3 values array.
        4.  This array, when joined by commas, becomes the content for Row 3.

4.  **Constructing the CSV String:**
    *   Properly escape all values for CSV.
    *   `const headerRowString = fieldIdsRow1.join(',');`
    *   `const appStateRowString = valuesRow2.join(',');`
    *   `const refStateRowString = valuesRow3.join(',');`
    *   `const csvContent = headerRowString + "\n" + appStateRowString + "\n" + refStateRowString;`

5.  **Updating `exportToCSV()` Orchestration:**
    *   The function will perform steps 1-4 and then trigger the download.

**Key Modifications in `4011-FileHandler.js` - `processImportedCSV()` (or equivalent):**

1.  **Parsing the 3 Rows:**
    *   Split the CSV string into three rows. Validate that three rows exist.
    *   Parse Row 1 to get the `importedFieldIds` array.
    *   Parse Row 2 to get the `importedAppStateValues` array.
    *   Parse Row 3 to get the `importedRefStateValues` array.
    *   Validate column counts.

2.  **Processing Row 2 (Application State):**
    *   Create a `dataToImport = {}` object.
    *   Iterate `importedFieldIds` and `importedAppStateValues` to populate `dataToImport`.
    *   Call `window.TEUI.StateManager.setValues(dataToImport, 'imported')`. This updates the application state, including `d_13`. This change to `d_13` is the primary trigger for `StateManager` to correctly build the `activeReferenceDataSet`.

3.  **Processing Row 3 (Reference Standard State):**
    *   The first cell of `importedRefStateValues` contains the `standardKeyFromCsvRow3`.
    *   This row is primarily for data integrity checks or logging. For example, verify `standardKeyFromCsvRow3` matches the `d_13` value set from Row 2.
    *   **Important:** The system should *not* iterate through Row 3 and directly apply values to `StateManager.activeReferenceDataSet`. The `activeReferenceDataSet` is rebuilt by `StateManager.loadReferenceData()` based on the `d_13` value from Row 2 and the defined internal logic (carry-overs, defaults, standard values from `TEUI.ReferenceValues`).

By implementing these changes, `4011-FileHandler.js` will support the comprehensive 3-row CSV format, integrating with `StateManager`'s handling of both application and Reference Mode states.

## Appendix D: Architectural Alignment and Expected Benefits

**Objective:** To assess the proposed standardization plan's consistency with the existing architecture defined in `README.md` and to evaluate its potential impact on code performance, robustness, simplicity, and verbosity, especially concerning the integrated Reference Model.

**1. Consistency with `README.md` Architecture:**

The integrated plan in this document is designed to be highly consistent with and supportive of the core architectural principles:

*   **`StateManager` as Single Source of Truth:** Reinforced. `StateManager` manages both application state and the construction/storage of the `activeReferenceDataSet`.
*   **Modular Design (`SectionXX.js` files):** Respected. Section modules use `StateManager.getValue()` (which is mode-aware) and `FieldManager.updateFieldDisplay()`.
*   **Event-Driven Calculations:** Leveraged. `FieldManager.updateFieldDisplay()` dispatches events, triggering calculations that use mode-appropriate values from `StateManager`.
*   **Decoupling Data from Display:** Strengthened. The Unified Data Structure and `FieldManager` standardizes UI updates for both modes. Refactoring `TEUI.ReferenceValues` further decouples raw standard data.
*   **Avoiding Direct DOM Manipulation for State:** Explicitly planned for removal, crucial for Reference Mode stability.
*   **`FieldManager` Role:** Critical for UI consistency and event dispatch in both modes.
*   **Data-Centric Approach:** Prioritized for user inputs and reference data.

**2. Expected Benefits:**

*   **Performance:**
    *   **Overall Neutral to Potentially Positive:** Streamlined data handling in `StateManager` for both modes. Reduction in direct DOM manipulations. Efficient CSV processing. Core calculation speed largely unchanged but state management operations improved.

*   **Robustness:**
    *   **Significant Improvement:**
        *   Unified structure for user-editable state minimizes errors.
        *   Clear separation of application state, `TEUI.ReferenceValues` (explicit standard definitions), and the composite `activeReferenceDataSet` enhances data integrity.
        *   Reliable data interchange (3-row CSV).
        *   Fewer bugs due to centralized state updates via `StateManager` and UI updates via `FieldManager`.
        *   Predictable and robust Reference Model behavior due to clear logic for constructing `activeReferenceDataSet`.

*   **Simplicity (Code and Developer Understanding):**
    *   **Significant Improvement:**
        *   Unified `{fieldId: value}` model is simple.
        *   Refactored `TEUI.ReferenceValues` becomes cleaner.
        *   Streamlined 3-row CSV handling.
        *   Clearer `StateManager` API and role in managing both application and Reference Mode states.
        *   Consistent patterns for state management reduce cognitive load.

*   **Verbosity (Code):**
    *   **Reduced:**
        *   Less transformation code for different data formats.
        *   More concise refactored `TEUI.ReferenceValues`.
        *   Reduced DOM manipulation in section modules.
        *   Simplified `FileHandler.js` logic for CSV.

In summary, the integrated plan is expected to lead to a more robust, simpler, and less verbose codebase for managing both application state and the Reference Model, with neutral to potentially positive impacts on performance.

### Potential UI/UX Enhancements

*   **Dependency Graph Labeling:** Investigate updating the node labels in the Dependency Graph (Section 17). Currently, labels like "Field Name (declared): DefaultValue" show the original default. Consider modifying `StateManager.exportDependencyGraph()` to make these labels reflect the *current* value post-calculation/import, e.g., "Field Name (declared): CurrentValue", for better visual consistency, without altering Section 17's rendering logic.

## Appendix E: Field Behavior in Reference Mode

**Objective:** This appendix will provide a detailed specification for each relevant user-editable `fieldId` (or groups of fields by section), outlining its behavior when the application is in Reference Mode. This specification is crucial for the correct implementation of `StateManager` logic for constructing the `activeReferenceDataSet` (Phase B1) and for accurate CSV export of the Reference Mode state (Row 3).

For each field/group, the behavior will be categorized as follows:

1.  **Directly Set by Standard (Explicit Override):** The value is primarily determined by its definition in the refactored, sparse `TEUI.ReferenceValues` for the active standard. If the standard defines it, that value is used in `activeReferenceDataSet`, overriding any carried-over application state value or RefMode default for that specific field.
    *   *Examples from user input: RSI values (f_85, f_86), U-values (g_88-g_93), specific equipment efficiencies (f_113, j_116), S07 d_52/d_53 if standard specifies.*

2.  **Carry-Over from Application State (Default Behavior):** If not explicitly defined by the active reference standard in `TEUI.ReferenceValues` (and not subject to a specific Reference Mode Default or independent editability), the value is taken directly from the current application (design) state and used in `activeReferenceDataSet`. This is the default behavior for most fields.
    *   *Examples from user input: S02 fields (conditioned area, fuel costs), S03 climate data, S10 areas (Column D), S10 orientation (Column E), S10 shading % (Column G, H), S12 values.*

3.  **Reference Mode Default:** The field has a specific default value when entering Reference Mode, which is applied to `activeReferenceDataSet` *before* standard values are overlaid. This default is used if not overridden by the active standard or subsequent user interaction in Reference Mode.
    *   *Examples from user input: S10 D80 toggle (Net Useable Gains Method) defaults to 'NRC 50%'; S11 d_97 (Thermal Bridge Penalty %) defaults to 0.05 (5%) in Reference Mode, unless standard specifies otherwise or user edits it if allowed.*

4.  **Independently User-Editable in Reference Mode:** The user can modify this field's value *while in Reference Mode*. This modification directly updates `activeReferenceDataSet`. The initial value in `activeReferenceDataSet` (before user edit) would have come from carry-over, RefMode default, or standard definition.
    *   *Examples from user input: S05 d_39 (Building Typology), S07 (independent selection of d_49, d_51, while d_52/d_53 come from standard), S09 d_68/g_67, S11 d_97 (slider), S13 d_119/g_118/l_118/k_120.*

5.  **Matches Application State (Always):** Certain fields in `activeReferenceDataSet` will always mirror the Application State, regardless of the standard or other Reference Mode logic. These are effectively a direct carry-over.
    *   *Examples from user input: S04 utility bill inputs, S06 renewables, S08 IAQ targets.*

*(This appendix will be populated based on the detailed section-by-section analysis provided by the user and further refinement. The categories above provide a framework for classifying each field's behavior. **This appendix is now CRITICAL for implementing Phases B1 and E1 correctly.**)*

---

**Initial Content for Appendix E (from `future code/deepstate-structure.md` Section 5 - Requires Refactoring)**

**Crucial Disclaimer:** *The following list is taken from an older planning document (`future code/deepstate-structure.md`) and reflects a previous understanding of how `4011-ReferenceValues.js` was structured, using internal reference IDs (e.g., "T.1", "B.4") and direct `targetCell` mappings. This old structure and mapping system **will be obsolete** after `4011-ReferenceValues.js` is refactored (Phase A2) to a simple `{ "application_fieldId": "value", ... }` format for each standard.*

*This list is included **temporarily** as a starting point for identifying relevant application `fieldId`s that are affected by reference standards. It needs to be **completely refactored** to align with the new `ReferenceValues.js` structure and the behavioral categories (Directly Set by Standard, Carry-Over, Reference Mode Default, Independently User-Editable, Matches Application State Always) described above. The `targetCell` concept previously within `ReferenceValues.js` will no longer exist; the application `fieldId` will be the direct key.*

*   **Section 01 (Key Values):**
    *   `h_6` (Heating Degree Days - HDD) -> `T.1`
    *   `h_8` (Cooling Degree Days - CDD) -> `T.2`
*   **Section 02 (Building Information):**
    *   `h_13` (Code Standard for Report) -> `S.1`
*   **Section 03 (Climate Calculations):**
    *   `h_23` (Heating Setpoint T°C) -> `L.3.1`
    *   `h_24` (Cooling Setpoint T°C) -> `L.3.2`
*   **Section 07 (Water):**
    *   `h_49` (Total Water Use L/person/day - Target) -> `W.1`
    *   `h_50` (DHW Use L/person/day - Target) -> `W.2`
    *   `h_52` (DHW Efficiency % or UEF) -> `W.3`
    *   `h_53` (DWHR Efficiency %) -> `W.4`
*   **Section 08 (IAQ - Primarily informational or pass/fail, not direct energy inputs):**
    *   `h_56` (Radon Mitigation - Target) -> `Q.1`
    *   `h_57` (CO2 Control - Target) -> `Q.2`
    *   `h_58` (TVOC Control - Target) -> `Q.3`
    *   `h_59` (Indoor RH % - Target) -> `Q.4`
*   **Section 09 (Internal Gains):**
    *   `h_65` (Plug Load W/m2 - Target) -> `G.1`
    *   `h_66` (Lighting Load W/m2 - Target) -> `G.2`
*   **Section 11 (Transmission Losses):**
    *   `f_85` (Roof RSI) -> `B.4`
    *   `f_86` (Wall RSI) -> `B.5`
    *   `f_87` (Floor RSI) -> `B.6`
    *   `g_88` (Door U-value) -> `B.7.0`
    *   `g_89` (Window N U-value) -> `B.8.1`
    *   `g_90` (Window E U-value) -> `B.8.2`
    *   `g_91` (Window S U-value) -> `B.8.3`
    *   `g_92` (Window W U-value) -> `B.8.4`
    *   `g_93` (Skylight U-value) -> `B.8.5`
    *   `f_94` (Slab RSI) -> `B.9`
    *   `f_95` (Fdn Wall RSI) -> `B.10`
    *   `d_97` (Thermal Bridge Penalty %) -> `B.12`
*   **Section 12 (Air Leakage & HRV):**
    *   `g_104` (ACH50 Target) -> `V.1`
    *   `d_107` (HRV SRE @ 0°C) -> `V.2`
*   **Section 13 (Mechanical Loads & Vent):**
    *   `f_113` (Heating Eff. % or COP) -> `M.1`
    *   `j_116` (Cooling Eff. SEER or COP) -> `M.2`
    *   `l_118` (Ventilation Rate ACH) -> `M.3`
    *   `d_119` (Ventilation Rate L/s per person if applicable) -> `M.4`
*   **Section 14 (TEDI):**
    *   `h_127` (TEDI Target kWh/m2) -> `E.1`
*   **Section 15 (TEUI & GHG):**
    *   `d_140` (GHGI Target kgCO2e/m2) -> `C.1`

---
*(End of integrated content from `future code/deepstate-structure.md`)* 

## 6. T-Cells: Reference Value Comparison System

### Overview
The **T-cells concept** refers to invisible reference values that correspond to each row for pass/fail comparison logic. In Excel, these values exist in Column T (off-screen from users) but drive the visible pass/fail indicators in columns L, M, N.

### Architecture

#### A. T-Cell Value Sources
1. **Direct from ReferenceValues.js**: For fields explicitly defined in the active reference standard
2. **Calculated Reference Values**: For derived/calculated reference targets  
3. **Static Baseline Values**: For comparison thresholds not tied to specific standards

#### B. Directional Comparison Logic
Different field types require different comparison directions:

**Type 1: Higher is Better** (RSI values, efficiency percentages)
```javascript
referencePercent = (currentValue / referenceValue) * 100;
isGood = referencePercent >= 100; // Pass if current >= reference
```

**Type 2: Lower is Better** (U-values, energy intensity, emissions)
```javascript  
referencePercent = (referenceValue / currentValue) * 100;
isGood = currentValue <= referenceValue; // Pass if current <= reference
```

**Type 3: Range/Threshold** (penalty percentages, specific limits)
```javascript
isGood = currentValue <= maxThreshold; // Pass if within acceptable range
```

#### C. Multi-Value Row Mapping
Some rows contain multiple input values but reference comparison applies to only **one specific cell**:

**Examples:**
- **Row 85 (Roof)**: Area (d_85), Rimp (e_85), **RSI (f_85)** ← T-cell applies here, U-value (g_85)
- **Row 88 (Doors)**: Area (d_88), Rimp (e_88), RSI (f_88), **U-value (g_88)** ← T-cell applies here  
- **Row 113 (Heating)**: System (d_113), HSPF (f_113), COP (g_113), **Efficiency (h_113)** ← T-cell applies here

#### D. Column Responsibilities
- **Column L**: Contextual reference information (sometimes)
- **Column M**: Reference percentage comparison (actual/reference * 100%)  
- **Column N**: Pass/fail checkmark (✓/✗) based on directional logic
- **T-cells**: Hidden reference values for comparison (fieldId pattern: `t_XX`)

### Integration with Dual-Engine Architecture

#### A. Reference State Repository
```javascript
// StateManager.activeReferenceDataSet contains T-cell values
{
    "t_85": "5.30",    // Reference RSI for Roof (from OBC SB10)
    "t_88": "1.99",    // Reference U-value for Doors  
    "t_113": "7.1",    // Reference HSPF for Heating
    // ... other T-cell reference values
}
```

#### B. Comparison Engine
```javascript
// New method in StateManager
getTCellValue(fieldId) {
    // Map application fieldId to corresponding T-cell
    const tCellId = this.getCorrespondingTCell(fieldId);
    return this.getReferenceValue(tCellId);
}

// Section-level comparison logic
function updateReferenceComparison(applicationFieldId) {
    const currentValue = StateManager.getApplicationValue(applicationFieldId);
    const referenceValue = StateManager.getTCellValue(applicationFieldId);
    const comparisonType = getComparisonType(applicationFieldId);
    
    const { percentage, isGood } = calculateComparison(
        currentValue, 
        referenceValue, 
        comparisonType
    );
    
    // Update M and N columns
    updateReferenceDisplay(applicationFieldId, percentage, isGood);
}
```

#### C. Field Type Mapping
```javascript
const comparisonTypeMap = {
    // Higher is Better
    'f_85': 'rsi',     // Roof RSI
    'f_86': 'rsi',     // Wall RSI  
    'f_113': 'hspf',   // Heating efficiency
    'd_118': 'percentage', // HRV efficiency
    
    // Lower is Better  
    'g_88': 'uvalue',  // Door U-value
    'g_89': 'uvalue',  // Window U-values
    'h_127': 'energy', // TEDI target
    'k_49': 'emissions', // DHW emissions
    
    // Threshold/Range
    'd_97': 'penalty', // TB Penalty (≤ threshold)
    'd_56': 'limit'    // Radon limit (≤ threshold)
};
```

### Implementation Requirements

#### A. T-Cell Field ID Convention
- **Pattern**: `t_XX` where XX matches the row number
- **Example**: `t_85` = T-cell reference value for Row 85 (Roof)
- **Mapping**: Each application field maps to its corresponding T-cell

#### B. ReferenceValues.js Enhancement
```javascript
"OBC SB10 5.5-6 Z6": {
    // Current application field overrides
    "f_85": "5.30",  // Application field value
    
    // NEW: Explicit T-cell reference values  
    "t_85": "5.30",  // Reference comparison value for f_85
    "t_88": "1.99",  // Reference comparison value for g_88
    "t_113": "7.1",  // Reference comparison value for f_113
}
```

#### C. Section Module Updates
Each section needs:
1. **Comparison type definitions** for relevant fields
2. **T-cell mapping logic** for multi-value rows  
3. **Reference display updates** for M and N columns
4. **Integration with StateManager** T-cell methods

#### D. Cross-Section Coordination
- **Section 01**: May display overall pass/fail status based on T-cell comparisons
- **All Sections**: Must use consistent comparison logic and display patterns
- **StateManager**: Centralized T-cell value resolution and comparison engine

### Future Scalability
This T-cell architecture enables:
- **Easy addition** of new reference standards with jurisdiction-specific T-cell values
- **Consistent comparison logic** across all sections and field types  
- **Proper CSV export/import** of both application and reference comparison states
- **Visual feedback** that scales across multiple building codes and standards 

## Appendix F: T-Cell Field Mapping and Comparison Types

**Objective:** Define the explicit mapping between application fields and their corresponding T-cell reference values, including comparison type and directional logic for each field, based on analysis of FORMULAE-3039.csv.

### Section-by-Section T-Cell Mapping

#### **Section 07 (Water Use)**
| Application Field | T-Cell | Comparison Type | Direction | Description |
|------------------|---------|-----------------|-----------|-------------|
| `d_52` | `t_52` | percentage | Higher is Better | DHW System Efficiency % |
| `d_53` | `t_53` | percentage | Higher is Better | DWHR Efficiency % |
| `k_49` | `t_49` | emissions | Lower is Better | DHW Net Emissions kgCO2e/yr |

#### **Section 08 (Indoor Air Quality)**
| Application Field | T-Cell | Comparison Type | Direction | Description |
|------------------|---------|-----------------|-----------|-------------|
| `d_56` | `t_56` | limit | Lower is Better | Radon Bq/m³ (≤ limit) |
| `d_57` | `t_57` | limit | Lower is Better | CO2 ppm (≤ limit) |
| `d_58` | `t_58` | limit | Lower is Better | TVOC ppm (≤ limit) |
| `d_59` | `t_59` | percentage | Range | Indoor RH % (30-60% range) |

#### **Section 09 (Internal Gains)**
| Application Field | T-Cell | Comparison Type | Direction | Description |
|------------------|---------|-----------------|-----------|-------------|
| `d_65` | `t_65` | energy | Lower is Better | Plug Loads W/m² |
| `d_66` | `t_66` | energy | Lower is Better | Lighting Loads W/m² |
| `g_67` | `t_67` | efficiency | Higher is Better | Equipment Efficiency Spec |

#### **Section 10 (Radiant Gains)**
| Application Field | T-Cell | Comparison Type | Direction | Description |
|------------------|---------|-----------------|-----------|-------------|
| `f_73` | `t_73` | thermal | Lower is Better | SHGC Doors |
| `f_74` | `t_74` | thermal | Lower is Better | SHGC Window N |
| `f_75` | `t_75` | thermal | Lower is Better | SHGC Window E |
| `f_76` | `t_76` | thermal | Lower is Better | SHGC Window S |
| `f_77` | `t_77` | thermal | Lower is Better | SHGC Window W |
| `f_78` | `t_78` | thermal | Lower is Better | SHGC Skylights |
| `d_80` | `t_80` | method | Specific | Net Useable Gains Method |

#### **Section 11 (Transmission Losses)**
| Application Field | T-Cell | Comparison Type | Direction | Description |
|------------------|---------|-----------------|-----------|-------------|
| `f_85` | `t_85` | rsi | Higher is Better | Roof RSI K•m²/W |
| `f_86` | `t_86` | rsi | Higher is Better | Wall Above Grade RSI |
| `f_87` | `t_87` | rsi | Higher is Better | Floor Exposed RSI |
| `g_88` | `t_88` | uvalue | Lower is Better | Door U-value W/m²•K |
| `g_89` | `t_89` | uvalue | Lower is Better | Window N U-value |
| `g_90` | `t_90` | uvalue | Lower is Better | Window E U-value |
| `g_91` | `t_91` | uvalue | Lower is Better | Window S U-value |
| `g_92` | `t_92` | uvalue | Lower is Better | Window W U-value |
| `g_93` | `t_93` | uvalue | Lower is Better | Skylight U-value |
| `f_94` | `t_94` | rsi | Higher is Better | Wall Below Grade RSI |
| `f_95` | `t_95` | rsi | Higher is Better | Floor Slab RSI |
| `d_97` | `t_97` | penalty | Lower is Better | Thermal Bridge Penalty % |

#### **Section 12 (Volume & Surface Metrics)**
| Application Field | T-Cell | Comparison Type | Direction | Description |
|------------------|---------|-----------------|-----------|-------------|
| `d_104` | `t_104` | uvalue | Lower is Better | Building U-Value Combined |
| `d_107` | `t_107` | ratio | Lower is Better | Window:Wall Ratio |
| `g_109` | `t_109` | leakage | Lower is Better | ACH50 Measured |

#### **Section 13 (Mechanical Loads)**
| Application Field | T-Cell | Comparison Type | Direction | Description |
|------------------|---------|-----------------|-----------|-------------|
| `f_113` | `t_113` | hspf | Higher is Better | Heating HSPF |
| `j_115` | `t_115` | afue | Higher is Better | AFUE Gas/Oil |
| `j_116` | `t_116` | cop | Higher is Better | Cooling COP |
| `d_118` | `t_118` | percentage | Higher is Better | HRV/ERV SRE % |
| `d_119` | `t_119` | ventilation | Higher is Better | Vent Rate L/s per person |
| `l_118` | `t_118` | ventilation | Context | Volumetric Vent Rate |
| `k_120` | `t_120` | percentage | Context | Unoccupied Setback % |

#### **Section 14 (TEDI)**
| Application Field | T-Cell | Comparison Type | Direction | Description |
|------------------|---------|-----------------|-----------|-------------|
| `h_127` | `t_127` | energy | Lower is Better | TEDI Target kWh/m² |

#### **Section 15 (TEUI & GHG)**
| Application Field | T-Cell | Comparison Type | Direction | Description |
|------------------|---------|-----------------|-----------|-------------|
| `h_140` | `t_140` | emissions | Lower is Better | GHGI Target kgCO2e/m² |

### Comparison Type Definitions

#### **Higher is Better (≥ reference)**
```javascript
referencePercent = (currentValue / referenceValue) * 100;
isGood = currentValue >= referenceValue;
```
**Field Types:** RSI, HSPF, AFUE, COP, efficiency percentages, performance ratings

#### **Lower is Better (≤ reference)** 
```javascript
referencePercent = (referenceValue / currentValue) * 100;
isGood = currentValue <= referenceValue;
```
**Field Types:** U-values, energy intensity, emissions, air leakage, thermal bridging

#### **Range/Threshold (within acceptable bounds)**
```javascript
isGood = (currentValue >= minThreshold && currentValue <= maxThreshold);
referencePercent = calculateRangePercentage(currentValue, minThreshold, maxThreshold);
```
**Field Types:** Indoor humidity, specific operational ranges

#### **Context/Method (exact match or method-specific)**
```javascript
isGood = (currentValue === requiredValue) || checkMethodCompatibility(currentValue, referenceValue);
```
**Field Types:** Calculation methods, equipment specifications, operational modes

### Implementation Notes

1. **T-Cell Field ID Pattern**: `t_XX` where XX matches the application field row number
2. **Multi-Value Row Mapping**: Only one field per row has a T-cell comparison (the performance-critical field)
3. **Reference Value Source**: T-cell values come from `StateManager.activeReferenceDataSet` 
4. **Display Columns**: 
   - **Column M**: Shows percentage comparison
   - **Column N**: Shows pass/fail checkmark (✓/✗)
5. **Null Handling**: If T-cell value is undefined, comparison shows "N/A" 
6. **Standard Selection**: T-cell values update automatically when `d_13` changes

This mapping ensures consistent comparison logic across all sections while maintaining the flexibility to add new reference standards and field types.

### Concrete Implementation Example

#### **Enhanced ReferenceValues.js Structure**
```javascript
"OBC SB10 5.5-6 Z6": {
    // Application field overrides (for Reference Mode display)
    "f_85": "5.30",    // Reference RSI shown when in Reference Mode
    "g_88": "1.99",    // Reference U-value shown when in Reference Mode
    "d_118": "81",     // Reference HRV efficiency shown when in Reference Mode
    
    // T-cell comparison values (for pass/fail logic)
    "t_85": "5.30",    // Minimum acceptable RSI for Roof
    "t_88": "1.99",    // Maximum acceptable U-value for Doors  
    "t_118": "81",     // Minimum acceptable HRV efficiency %
    "t_97": "50",      // Maximum acceptable TB Penalty %
    
    // Method/contextual T-cells
    "t_80": "NRC 40%", // Required gains calculation method
}
```

#### **StateManager T-Cell Integration**
```javascript
// New StateManager methods
getTCellValue(applicationFieldId) {
    // Map application field to T-cell ID
    const tCellId = this.getCorrespondingTCell(applicationFieldId);
    return this.getReferenceValue(tCellId);
}

getCorrespondingTCell(fieldId) {
    // Extract row number from fieldId pattern
    const rowMatch = fieldId.match(/[a-z]_(\d+)/);
    if (rowMatch) {
        return `t_${rowMatch[1]}`;
    }
    // Special cases for non-standard patterns
    const specialMappings = {
        'h_127': 't_127', // TEDI
        'h_140': 't_140', // GHGI
        // ... other special cases
    };
    return specialMappings[fieldId] || null;
}
```

#### **Section Module Reference Display Pattern**
```javascript
// Standard pattern for updating M and N columns
function updateReferenceDisplay(applicationFieldId) {
    const currentValue = getNumericValue(applicationFieldId);
    const referenceValue = window.TEUI.StateManager.getTCellValue(applicationFieldId);
    const comparisonType = getComparisonType(applicationFieldId);
    
    if (!referenceValue) {
        // Handle missing T-cell reference
        setCalculatedValue(`m_${getRowNumber(applicationFieldId)}`, "N/A", 'raw');
        setCalculatedValue(`n_${getRowNumber(applicationFieldId)}`, "?", 'raw');
        return;
    }
    
    const { percentage, isGood } = calculateReferenceComparison(
        currentValue, 
        referenceValue, 
        comparisonType
    );
    
    // Update Column M (percentage)
    setCalculatedValue(`m_${getRowNumber(applicationFieldId)}`, percentage, 'percent');
    
    // Update Column N (checkmark)
    const checkmark = isGood ? "✓" : "✗";
    setCalculatedValue(`n_${getRowNumber(applicationFieldId)}`, checkmark, 'raw');
    setElementClass(`n_${getRowNumber(applicationFieldId)}`, isGood ? "checkmark" : "warning");
}
```

This concrete structure shows exactly how T-cells integrate with the existing dual-engine architecture while providing the pass/fail comparison logic that matches your Excel methodology.

## Appendix G: Reference Mode Field Event Handling Patterns (Session Discoveries 2025-05-23)

**Context:** During implementation of Section07 k_52 AFUE field to match Section13 j_115 behavior, critical patterns were discovered for proper Reference Mode field event handling that prevent sporadic behavior requiring "calculation bumps" to work consistently.

### Key Discovery: Proper Event Handler Pattern for Reference Mode Fields

**Problem Identified:** Reference Mode toggle works sporadically, requiring "bumps" (recalculating other values) before applying consistently. Some fields like k_52 (S07 AFUE) don't work like their counterparts in other sections (j_115 in S13).

**Root Cause:** Inconsistent event handling patterns across sections for editable fields, particularly those that need to work in Reference Mode.

### Correct Implementation Pattern

#### **A. Standard Editable Field Blur Handler**
```javascript
/**
 * Standard blur handler for editable fields.
 * Parses input, updates state, formats display.
 */
function handleEditableBlur(event) {
    const fieldElement = this; // `this` is the element that triggered the blur
    const fieldId = fieldElement.getAttribute('data-field-id');
    if (!fieldId) return;

    let rawTextValue = fieldElement.textContent.trim();
    let numericValue = window.TEUI.parseNumeric(rawTextValue, NaN);

    if (isNaN(numericValue)) {
        // Revert to previous value from StateManager
        const previousValue = getFieldValue(fieldId);
        numericValue = window.TEUI.parseNumeric(previousValue, 0);
    }
    
    // Field-specific formatting rules
    let formatType = 'number-2dp-comma'; // Default format
    
    // Special formatting for k_52 (AFUE) - use 2 decimal places without comma
    if (fieldId === 'k_52') { 
        formatType = 'number-2dp'; 
    }

    const valueToStore = numericValue.toString();
    const formattedDisplay = window.TEUI.formatNumber(numericValue, formatType);
    fieldElement.textContent = formattedDisplay;

    // Update StateManager only if the stored value differs
    if (window.TEUI?.StateManager) {
        const currentStateValue = window.TEUI.StateManager.getValue(fieldId);
        if (currentStateValue !== valueToStore) {
            window.TEUI.StateManager.setValue(fieldId, valueToStore, 'user-modified');
            calculateAll(); // Trigger dependent calculations
        }
    }
}
```

#### **B. Field Initialization in Event Handler Setup**
```javascript
function initializeEventHandlers() {
    const editableFieldIds = ['e_49', 'e_50', 'k_52', /* other editable fields */];
    
    editableFieldIds.forEach(fieldId => {
        const field = sectionElement.querySelector(`[data-field-id="${fieldId}"]`);
        if(field && field.classList.contains('editable')) {
            if (!field.hasEditableListeners) { 
                field.setAttribute('contenteditable', 'true');
                field.classList.add('user-input');
                
                // Critical: Proper event binding
                field.addEventListener('blur', handleEditableBlur);
                
                // Prevent Enter key from creating newlines
                field.addEventListener('keydown', function(e) {
                    if (e.key === 'Enter') { 
                        e.preventDefault(); 
                        this.blur(); 
                    }
                });
                
                field.hasEditableListeners = true; // Prevent duplicate listeners
            }
        }
    });
}
```

#### **C. StateManager Listener Registration Pattern**
```javascript
// Register dependencies with StateManager for proper triggering
if (window.TEUI && window.TEUI.StateManager) {
    const sm = window.TEUI.StateManager;
    
    // Register field listeners that trigger recalculation
    sm.addListener("k_52", calculateAll); // AFUE changes
    sm.addListener("d_51", calculateAll); // Energy source changes
    sm.addListener("d_52", calculateAll); // Efficiency changes
    sm.addListener("d_53", calculateAll); // DWHR changes
}
```

### Critical Pattern Elements

#### **1. Consistent Field Definition Structure**
```javascript
// In sectionRows definition:
k: { 
    fieldId: "k_52", 
    type: "editable", 
    value: "0.90", // default AFUE value
    section: "waterUse",
    classes: ["user-input", "editable"]
}
```

#### **2. Proper Format Type Mapping**
```javascript
// Field-specific formatting prevents display inconsistencies
const formatTypeMap = {
    'k_52': 'number-2dp',        // AFUE: 0.90 (no comma)
    'd_52': 'percentage',        // COP: 300% (percentage slider)
    'e_49': 'number-2dp-comma',  // Default: 40.00 (with comma for thousands)
    // ... other field mappings
};
```

#### **3. StateManager Integration Requirements**
- **Consistent Value Storage:** Always store as string representation of numeric value
- **State Change Detection:** Only trigger recalculation when value actually changes
- **Proper Event Priority:** Use 'user-modified' state type for manual edits
- **Cross-Section Triggers:** Register listeners for fields that affect other sections

### Section13 j_115 Reference Pattern

**Working Implementation in Section13:**
```javascript
// j_115 (AFUE) field works correctly because:
// 1. Proper contenteditable setup
// 2. Blur event handling with parseNumeric
// 3. Enter key preventDefault
// 4. StateManager setValue with state change detection
// 5. Consistent formatNumber usage
```

### Reference Mode Toggle Robustness Requirements

#### **A. UI State Isolation**
```javascript
// Reference Mode toggle should NOT affect calculation data sources
// Toggle affects DISPLAY only, calculations use explicit state getters:
// - getApplicationValue(fieldId) → Target calculations
// - getReferenceValue(fieldId) → Reference calculations
```

#### **B. Muting During Reference Display Updates**
```javascript
// Prevent Reference Mode display updates from triggering Application state changes
// Use proper muting mechanisms during toggle operations
```

#### **C. Calculation Engine Independence**
```javascript
// Both engines continue running regardless of toggle state
// Reference Engine: Uses getReferenceValue() exclusively
// Target Engine: Uses getApplicationValue() exclusively
```

### Implementation Priority for Remaining Sections

1. **Standardize Event Handlers:** Apply the handleEditableBlur pattern across all sections
2. **Field Format Mapping:** Define formatType rules for each field type
3. **StateManager Integration:** Ensure consistent setValue/getValue patterns
4. **Enter Key Handling:** Prevent newlines in all editable fields
5. **Listener Registration:** Proper dependency chain triggering

### Testing Requirements

- **Consistency Check:** All editable fields should behave like Section13's j_115
- **Reference Mode Robustness:** Toggle should work immediately without "bumps"
- **Cross-Section Propagation:** Value changes should trigger downstream calculations reliably
- **Format Consistency:** Display formatting should match field type requirements

**Implementation Note:** This pattern eliminates the sporadic behavior where Reference Mode toggle requires "calculation bumps" to work consistently. The key is proper event handling setup during field initialization and consistent StateManager integration patterns.

## 5.1 Current Implementation Status (November 2024)

### ✅ Completed Components:
- **Phase A1**: Unified data structure for user-editable fields
- **Phase A2**: ReferenceValues.js restructured for scalability (ongoing validation)
- **Prerequisites**: Global helper functions (`parseNumeric`, `formatNumber`) in many sections
- **Basic StateManager dual-state infrastructure**: Has both `fields` and `activeReferenceDataSet`
- **Reference Mode Toggle**: Basic functionality exists (though not properly decoupled from calculations)

### 🔧 Partially Implemented:
- **Section 07 (Water Use)**: Has dual-engine calculations (`calculateReferenceModel` and `calculateTargetModel`)
  - Successfully calculates different values for Reference vs Target
  - Stores Reference values with `ref_` prefix (e.g., `ref_j_50`, `ref_k_51`)
  - BUT: Only visible when UI is in Reference Mode

### ❌ Critical Gap Identified:
**Column E/H Display Issue**: The fundamental requirement that Column E ALWAYS shows Reference values and Column H ALWAYS shows Target values (regardless of UI mode) is not working because:

1. **Incomplete Dependency Chain**: Section 01 depends on Section 04 for energy totals (j_32, k_32)
2. **Section 04 lacks dual-engine support**: Only calculates using Application state values
3. **Without ref_j_32 and ref_k_32**: Section 01's Reference calculations use the same inputs as Target calculations
4. **Result**: Both columns show identical values in Target mode

### 📋 Immediate Implementation Plan:

#### Step 1: Implement Dual-Engine in Section 04
- Add `calculateReferenceModel()` and `calculateTargetModel()` functions
- Calculate `ref_j_32` and `ref_k_32` using Reference values from upstream sections
- Store Reference results with `ref_` prefix pattern

#### Step 2: Update Section 01 Display Logic  
- Modify `updateTEUIDisplay()` to always use `ref_` prefixed values for Column E
- Ensure Column H continues using Application state values
- Remove dependency on UI mode for value selection

#### Step 3: Propagate Pattern Through Dependency Chain
Following the dependency flow:
1. **S11 (Envelope)** → S12 (U-values) → S14 (TEDI)
2. **S13 (Mechanical)** → S14 (TEDI)  
3. **S09 (Internal Gains)** → S14 (TEDI)
4. **S10 (Solar Gains)** → S14 (TEDI)
5. **S14 (TEDI)** → S15 (TEUI)
6. **S15 (TEUI)** → S04 (Energy) → S01 (Dashboard)

### 🎯 Success Criteria:

1. **Visual Test**: 
   - In Target Mode: Column E shows Reference values (e.g., 180+ for TEUI with OBC SB10)
   - In Target Mode: Column H shows Target values (e.g., 94 for TEUI)
   - Values remain constant when toggling between modes

2. **Data Test**:
   - `StateManager.getApplicationValue('ref_e_10')` returns Reference TEUI
   - `StateManager.getApplicationValue('h_10')` returns Target TEUI
   - `ref_` values exist for all calculated fields in dual-engine sections

3. **Calculation Test**:
   - Changing reference standard (d_13) updates Column E values
   - Changing design inputs updates Column H values
   - No recursion or calculation loops

4. **Export Test**:
   - CSV Row 2 contains Target/Application values
   - CSV Row 3 contains Reference values
   - Import correctly restores both states

### 🚫 Current State Summary:
- **~10% Complete** on dual-engine implementation across all sections
- **Section 07** is the only section with working dual-engine calculations
- **Critical path blocked** at Section 04, preventing proper display in Section 01
- **Reference values only visible** when entering Reference Mode UI

### 5.1 Dual-Engine Calculation Implementation

**Implementation Status**: ~30% Complete  
**Current State**: Partial implementation with display issues

#### Sections with Dual-Engine Support:
- **Section 01** (Key Values) - Implemented but display issue persists
- **Section 04** (Energy & GHG) - Implemented and working
- **Section 07** (Cooling/TEDI) - Already had dual-engine support
- **Section 09** (Plug/Light/Equipment) - Implemented, stores ref_ prefixed values
- **Section 11** (Heat Loss/Gain) - Implemented, stores ref_ prefixed values

#### Key Findings:

1. **Storage Pattern**: Reference values must be stored with `ref_` prefix to keep them separate from Target values
   - Example: `ref_j_32`, `ref_k_32`, `ref_e_10`, `ref_d_8`, `ref_d_6`

2. **StateManager Mode-Awareness Issue**: 
   - `getValue()` is mode-aware and returns different values based on Reference/Target mode
   - Solution: Use `getApplicationValue()` for Target calculations
   - Use `getReferenceValue()` or retrieve `ref_` prefixed values for Reference calculations

3. **ReferenceToggle Integration**:
   - Successfully configured to skip Section 01 calculated fields
   - Prevents UI refresh from overwriting dual-engine calculated values

4. **Display Issue (Unresolved)**:
   - Reference values calculate correctly but don't display in Column E as intended
   - Values appear to show Target calculations in both columns
   - Root cause: Possible timing issue or additional UI refresh overwriting display

5. **Dependency Chain Requirements**:
   - Section 01 depends on Section 04's Reference calculations
   - Full dual-engine support needed across dependency chain for accurate Reference values
   - Without complete chain, Reference values may equal Target values

#### Next Steps:
1. Continue implementing dual-engine support section by section
2. Focus on sections in the dependency chain (S15, S11, etc.)
3. Return to Column E display issue after more sections are converted
4. Test with different reference standards to verify calculations

#### Implementation Pattern for New Sections:
```javascript
// 1. Add dual-engine architecture
function calculateReferenceModel() {
    // Use Reference state values for inputs
    // Store results with ref_ prefix
}

function calculateTargetModel() {
    // Use Application state values for inputs
    // Store results in regular fields
}

function calculateAll() {
    calculateReferenceModel();
    calculateTargetModel();
}

// 2. Update display functions to check for ref_ values
// 3. Ensure ReferenceToggle skips calculated fields
```

## 6. Dependency Chain Analysis & Implementation Strategy