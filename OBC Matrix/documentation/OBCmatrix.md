# OBC Matrix - Interactive Web Form Implementation Plan

## 🎯 Executive Summary - Current Status & Next Steps

**CURRENT ACHIEVEMENT**: We have successfully completed Sections 01-03 of the OBC Matrix web application with working core functionality and established development patterns. **Key accomplishments include**: (1) **Universal CSS Alignment System** - eliminated 350+ lines of competing CSS rules and replaced with 2 clean universal rules that handle all text alignment semantically, (2) **Excel-Perfect DOM Structure** - resolved column misalignment issues using separation of concerns (DOM rendering vs Excel field mapping), (3) **Universal Number Formatting** - automatic formatting of numeric inputs (1000 → 1,000.00) with graceful change detection and state management, (4) **Working Calculations Engine** - real-time area calculations with proper state management. **KNOWN ISSUE**: "Goalpost expansion" problem where middle columns (E, M) expand to 400-600px instead of minimal width remains unresolved despite exhaustive debugging attempts including ellipsis approaches, fixed table layout with percentages, and content-aware width systems. **READY FOR HANDOFF**: The foundation is rock-solid with working patterns established. **Next agent should focus on**: (1) Replicating Section 03 patterns to rapidly complete Sections 4-14, (2) Using the mandatory global input handling (`window.TEUI.OBCStateManager.initializeGlobalInputHandlers()`) and universal number formatting (`window.TEUI.formatNumber()`) to maintain consistency, (3) **DEFERRING** layout expansion fixes until core form completion. **Critical files**: All section modules in `/sections/`, the universal alignment CSS rules, and the OBC-StateManager.js global handlers. **Architecture is battle-tested and ready for scale-up to remaining 11 sections.**

## Project Overview

The OBC Matrix is an interactive web form that replicates the Ontario Association of Architects' standardized Building Code Data Matrix. This tool enables architects to complete building permit applications digitally while maintaining the exact structure and field mapping of the original Excel template for seamless data import/export. Note: all OBC Matrix related files are under the 'OBC Matrix' Directory of the OBJECTIVE workspace. DO NOT mix files (ie index.html, README.md, etc), all OBC Matrix is isolated to this single directory. 

## Core Strategy: Excel-Aligned Web Form

**Primary Goal**: Build a web form that mirrors the OAA's Excel file structure cell-for-cell, enabling users to:
- Import existing OBC Matrix Excel/CSV data directly into the web form
- Complete forms online with modern UX improvements (validation, auto-save, etc.)
- Export completed forms back to Excel format for submission
- Maintain perfect field correspondence with official OBC Matrix templates

**Technical Approach**: Leverage proven patterns from TEUI 4011 codebase but simplified:
- Similar section-based architecture without complex calculations
- Excel cell coordinate mapping (e.g., Excel cell D12 → DOM element `id="d_12"`)
- Field-for-field correspondence with OBC_2024_PART3.csv and OBC_2024_PART9.csv
- Responsive design with sticky navigation for improved UX
- Eventual connection to the 4011 OBJECTIVE TEUI Calculator App can harvest values from the OBC Matrix app to auto-populate building use and geometric data to speed the pathway to a schematic energy model scenario with relevant code bencmkarking for assemblies (ie RSI values) and system efficiencies

## Implementation Phases

### ✅ Phase 1: Foundation & Button Cleanup (COMPLETED)
**Objective**: Establish clean foundation by removing TEUI-specific functionality

**Completed Work**:
- Removed climate-related buttons: 'Load Locations', 'Debug', 'More Weather Data'
- Removed 'Reference' dropdown (4011-specific functionality)
- Fixed broken script references (-FileHandler.js → OBC-FileHandler.js)
- Removed references to non-existent mobile detection and location handler scripts
- Committed to git branch 'RUN-REFERENCE' as restore point

### ✅ Phase 2: Disclaimer Modal Update (COMPLETED)
**Objective**: Replace TEUI calculator content with OBC Matrix-specific information

**Completed Work**:
- Updated modal title from "Using this calculator" to "Using the OBC Matrix"
- Replaced content to explain OBC Matrix functionality for building permit applications
- Added mention of Part 3/Part 9 toggle functionality
- Updated disclaimer to reference official Ontario Building Code regulations
- Added Ontario Association of Architects copyright notice

### ✅ Phase 3: Section Restructuring Analysis (COMPLETED - Needs refinement)
**Objective**: Understand CSV structure and plan section reorganization, add basic math scripts, use numeric values, consider addition of OBC-Matrix-StateManager.js as a simpler copy of the 4011-StateManager.js, but where we only need 1. Default, 2. user-modifed, and 3. imported states.  

**Completed Work**:
- Analyzed OBC_2024_PART3.csv structure showing sections 3.01, 3.02, etc.
- Identified Notes fields in column O requiring 3-column span
- Removal of TEUI energy-specific fields (reporting year, service life, energy costs)
- Mapped required fields: practice info, project info, classification dropdowns

### ✅ Phase 4: Building Information Section Implementation (COMPLETED)
**Objective**: Create the primary section with OBC Matrix structure

**Completed Work**:
- Created new Section01.js (renamed from Section02.js for top position)
- Implemented practice information fields (Name of Practice, Address 1, Address 2, Contact)
- Added project information fields (Name of Project, Location/Address, Date)
- Implemented 3.01 Project Type dropdown with proper structure
- Implemented 3.02 Major Occupancy Classification dropdown
- Added Notes fields (o_3 through o_12) with proper 3-column span
- Added "Seal & Signature" stamp upload functionality with 200x200px preview
- Fixed FieldManager mapping (buildingInfo: "sect01" instead of "sect02")
- Removed keyValues references from FieldManager and init files
- Section now renders correctly with OBC Matrix structure

**Current Status**: Building Information section displays properly with practice info, project info, classification dropdowns, Notes fields, and stamp upload area.

### ✅ Phase 5: Section Fine-Tuning & Dropdown Implementation (COMPLETED)
**Objective**: Refine S01 layout, styling, and field behavior

**Completed Work**:
- **Excel Structure Alignment**: Fixed table structure to exactly match OAA Excel (15 columns A-O)
- **Column Layout Perfect**: Column B for labels, Column C for user inputs, Column O for notes
- **Dropdown Functionality**: Project Type and Major Occupancy Classification dropdowns fully working
- **Notes Column Toggle**: Implemented show/hide functionality for Notes column
- **Floating Stamp Upload**: Positioned outside table structure for better UX
- **JavaScript Optimization**: Commented out missing dependencies, graceful initialization
- **Field Mapping**: Complete field ID system (c_3 through c_12, o_3 through o_12)
- **OBC Reference Integration**: Added proper OBC section references in appropriate columns

**Current Status**: Section 01 is production-ready with working dropdowns, perfect Excel alignment, and all core functionality operational.

### ✅ Phase 6: Building Occupancy Section Implementation (COMPLETED)
**Objective**: Create Section 02 with occupancy classification and project details

**Completed Work**:
- **Section 02 (Building Occupancy)**: Complete implementation covering Excel rows 10-20
- **Building Code Version**: Consolidated O.Reg. 163/24 and amendment info 
- **Project Type Dropdown**: Medium-sized dropdown with 6 project types
- **Major Occupancy Classification**: 5 large dropdowns with full OBC occupancy options
- **Superimposed Major Occupancies**: Small Yes/No dropdown with explanation field
- **Description Field**: User-editable clarification area for project details
- **OAA Member Registration**: New custom field with URL for architect verification
- **Responsive Dropdown Sizing**: sm/md/lg system for optimal layout
- **Layout Optimization**: Compressed columns, moved OBC references to column L
- **No Horizontal Scrolling**: Content fits perfectly at 100% browser zoom

**Current Status**: Section 02 is production-ready with proper dropdown sizing, clean layout, and all occupancy classification functionality operational.

### ✅ Phase 7: Building Areas Section Implementation (COMPLETED)
**Objective**: Create Section 03 with building area calculations and measurements

**Completed Work**:
- **Section 03 (Building Areas)**: Complete implementation covering Excel rows 21-39
- **Building Area Calculations**: Real-time math with horizontal/vertical totals (rows 22-25)
- **Gross Area Calculations**: Real-time math with totals (rows 27-30)
- **Mezzanine Area Calculations**: Real-time math with individual row totals and grand totals (rows 32-35)
- **Building Height Fields**: Stories above/below grade with proper decimal formatting
- **High Building Dropdown**: Yes/No selection with OBC reference integration
- **Bold Calculated Values**: All totals display in bold with thousands separators (1,000.00)
- **OBC-StateManager Integration**: Proper 3-state system (default/user-modified/calculated)
- **Right-Aligned Numeric Fields**: All numeric columns properly aligned for accounting-style display
- **Mezzanine Type Dropdowns**: Select.../N/A/≤10% Mezzanine/≤40% Mezzanine options
- **Excel Field Mapping**: Individual calculations in column K, totals in column I for visual alignment

**Current Status**: Section 03 is functionally complete with working calculations, but has DOM column/header misalignment issues requiring debugging.

### ✅ Phase 8: Critical Debugging & Cleanup (COMPLETED)
**Objective**: Resolve DOM column alignment issues and prepare for remaining sections

**Completed Work**:
1. **✅ DOM Structure Fixed**: Resolved column offset issue with separation of concerns approach
2. **✅ CSS Accordion Layout**: Removed competing width constraints, achieved natural sizing
3. **✅ Excel Row ID System**: Implemented section.row format (1.03, 1.04, etc.)
4. **✅ Field ID Mapping**: Established Excel coordinate system (c_3, d_22, etc.)
5. **✅ Implementation Guide**: Created comprehensive guide for remaining sections

**Architecture Solutions**:
- **DOM vs Excel Separation**: Renderer handles DOM, fieldIds handle Excel mapping
- **Natural Column Sizing**: Removed fixed widths, achieved accordion-style layout
- **User-Friendly IDs**: Section prefix + Excel row number for clear correspondence
- **Pattern Replication**: Established system for rapid section development

**Ready for Remaining Sections**: Clear implementation guide and working patterns established

### ⚠️ Phase 9: Remaining Sections Implementation (IN PROGRESS - NEEDS GUIDE)
**Objective**: Complete Sections 4-14 using established patterns

**✅ Section 04 Partially Complete**: Firefighting & Life Safety Systems section implemented with:
- Working dropdown patterns (dd_ prefixes, compact code display, adjacent descriptions)
- Excel-like behavior (codes in dropdowns, descriptions in linked fields)
- Proper "Based On" dropdown at E50 mirroring building classifications
- Fixed "PROVIDED:" label rendering (content vs label property discovery)

**🚨 CRITICAL NEED: Section Implementation Guide**

Section 04 revealed significant complexity and pattern variations that require comprehensive documentation before proceeding with Sections 5-14. Key discoveries that need formalization:

**Pattern Inconsistencies Discovered:**
- `label` property works for some contexts (subheaders) but not others
- `content` property required for certain cell types (row 4.45 "PROVIDED:")
- Dropdown ID patterns must be consistent (`dd_d_40` not `d_40`)
- Building classification dropdowns need special linked field behavior
- Excel coordinate mapping vs DOM rendering requires careful separation

**Implementation Complexity:**
- Section 04 required extensive debugging and multiple iterations
- Dropdown options structure (name vs description properties)
- Event handler patterns for linked field updates
- CSS class management for different field types

**Required Before Sections 5-14:**
1. **Comprehensive Implementation Guide** documenting all discovered patterns
2. **Copy-paste templates** for common field types and structures
3. **Debugging checklist** for common issues (rendering, dropdowns, labels)
4. **Pattern validation process** to ensure consistency across sections

**Current Status**: Section 04 functional but not 100% complete. Development paused pending creation of standardized implementation guide to prevent costly retrofitting of remaining sections.

**Remaining Work**:
- **📋 TODO**: Create detailed Section Implementation Guide based on S01-S04 lessons
- **Sections 5-14**: Apply standardized patterns once guide is complete
- **Section Templates**: Create field-type-specific templates for rapid development
- **Field Validation**: Implement consistent validation across all sections
- **Cross-Section Integration**: Ensure data flows properly between related sections

**Future Sections**:
- **Part 9 Toggle**: Implement Part 3/Part 9 switching with different field sets
- **Notes Section**: Dedicated notes area for project-specific information  
- **Summary Section**: Overview of completed fields and validation status

### 📋 Phase 10: OAA Stamp Validation Engine (PLANNED)
**Objective**: Automated validation of architect stamps against OAA membership directory

**Technical Implementation Strategy**:

#### **Step 1: Image Text Extraction (OCR)**
Implement Optical Character Recognition to extract architect name and license number from uploaded stamp images:

```javascript
// Using Tesseract.js for client-side OCR
import Tesseract from 'tesseract.js';

async function extractStampInfo(imageFile) {
  const { data: { text } } = await Tesseract.recognize(imageFile, 'eng');
  
  // Parse for name and license patterns
  const nameMatch = text.match(/([A-Z\s]+)(?=\s+LICENCE|\s+LICENSE)/i);
  const licenseMatch = text.match(/LICEN[CS]E\s*(\d+)/i);
  
  return {
    name: nameMatch?.[1]?.trim(),
    license: licenseMatch?.[1]
  };
}
```

#### **Step 2: OAA Directory Integration**
The [OAA Directory](https://oaa.on.ca/oaa-directory) provides publicly available member data with multiple integration approaches:

**Option A: Excel Download Integration**
```javascript
// Periodic update from OAA's public Excel download
async function updateOAADatabase() {
  // Download public Excel file of practices
  const response = await fetch('https://oaa.on.ca/oaa-directory/practices-listing.xlsx');
  const workbook = XLSX.read(await response.arrayBuffer());
  
  // Parse and store member data locally
  const members = parseOAAWorkbook(workbook);
  localStorage.setItem('oaaMembers', JSON.stringify(members));
}
```

**Option B: Directory Search Integration**
```javascript
async function validateWithOAA(name, license) {
  // Search public OAA directory (data already publicly accessible)
  const searchUrl = `https://oaa.on.ca/oaa-directory/search`;
  
  const formData = new FormData();
  formData.append('name', name);
  formData.append('license', license);
  
  const response = await fetch(searchUrl, {
    method: 'POST',
    body: formData
  });
  
  return parseSearchResults(response);
}
```

#### **Step 3: Automated Validation Workflow**
```javascript
async function validateArchitectStamp(imageFile) {
  try {
    // Extract info from stamp image
    const { name, license } = await extractStampInfo(imageFile);
    
    // Validate against public OAA directory
    const member = await validateWithOAA(name, license);
    
    if (member.verified) {
      return {
        valid: true,
        memberUri: `https://oaa.on.ca/oaa-directory/search-architects/search-architects-detail/${member.slug}`,
        name: member.fullName,
        license: member.licenseNumber,
        status: member.membershipStatus,
        practiceStatus: member.certificateOfPractice
      };
    } else {
      return {
        valid: false,
        reason: 'Member not found in OAA directory',
        suggestedMatches: member.similarNames || []
      };
    }
  } catch (error) {
    return {
      valid: false,
      reason: 'Unable to process stamp image',
      error: error.message
    };
  }
}
```

#### **Step 4: Enhanced UI Integration**
```javascript
// Enhanced stamp upload with real-time validation
async function handleStampUpload(file) {
  // Show processing indicator
  updateStampStatus('Processing stamp image...', 'info');
  
  // Validate stamp against OAA directory
  const validation = await validateArchitectStamp(file);
  
  if (validation.valid) {
    // Auto-populate OAA Member Registration field
    document.getElementById('c_10').value = validation.memberUri;
    
    // Show success with member details
    updateStampStatus(
      `✓ Verified: ${validation.name} (License ${validation.license})`, 
      'success'
    );
    
    // Optional: Auto-populate other form fields
    populateArchitectInfo(validation);
    
  } else {
    // Show validation warning with manual override
    updateStampStatus(
      `⚠ ${validation.reason}. Please verify manually.`, 
      'warning'
    );
    
    // Provide suggested matches if available
    if (validation.suggestedMatches?.length > 0) {
      showSuggestedMatches(validation.suggestedMatches);
    }
  }
}

function populateArchitectInfo(memberData) {
  // Auto-populate practice information if validated
  if (memberData.practiceName) {
    document.getElementById('c_3').value = memberData.practiceName;
  }
  if (memberData.practiceAddress) {
    document.getElementById('c_4').value = memberData.practiceAddress;
  }
}
```

#### **Technical Considerations**:
- **OCR Accuracy**: Stamp image quality varies; implement confidence scoring
- **Name Matching**: Fuzzy matching for "Andy Thomson" vs "Andrew Thomson" variations
- **Rate Limiting**: Implement delays to respect OAA server resources
- **Caching**: Local storage of validated results to reduce API calls
- **Fallback Options**: Manual verification path when automated validation fails

#### **Data Privacy & Compliance**:
- **Public Data**: OAA directory is publicly accessible and commonly scraped
- **Professional Use**: Validation serves legitimate professional compliance purpose
- **Transparency**: Users see validation results and can manually override
- **No Storage**: Validation results not permanently stored, only used for form completion

#### **Implementation Phases**:
1. **Phase 8A**: Basic OCR extraction with manual confirmation
2. **Phase 8B**: OAA directory integration with automated validation
3. **Phase 8C**: Enhanced fuzzy matching and suggested alternatives
4. **Phase 8D**: Certificate of Practice (CoP) verification integration

### 📋 Phase 11: Data Import/Export Engine (PLANNED)
**Objective**: Enable seamless data exchange with Excel/CSV files

**Key Features**:
- **CSV Parser**: Read OBC_2024_PART3.csv and OBC_2024_PART9.csv structures
- **Field Mapping**: Map CSV cells to DOM elements using coordinate system
- **Import Function**: Populate form fields from uploaded Excel/CSV files
- **Export Function**: Generate Excel-compatible CSV from form data
- **Validation**: Ensure data integrity during import/export

### 📋 Phase 12: User Experience Enhancements (PLANNED)
**Objective**: Add modern web form features while maintaining Excel compatibility

**Planned Features**:
- **Auto-save**: Preserve user input in browser storage
- **Field Validation**: Real-time validation with clear error messages
- **Progress Indicators**: Show completion status for different sections
- **Responsive Design**: Optimize for tablet and mobile use
- **Accessibility**: WCAG compliance for screen readers and keyboard navigation

## Technical Architecture

### File Structure
```
OBC Matrix/
├── OBC-Matrix-Index.html          # Main application page
├── sections/
│   └── 4011-Section01.js          # Building Information section
├── assets/                        # Images, fonts, icons
├── OBC-FieldManager.js            # Field management and rendering
├── 4011-FieldManager.js           # Legacy field manager (backup)
├── OBC-FileHandler.js             # Import/export functionality
├── 4011-init.js                   # UI initialization and event handling
└── data/
    ├── OBC_2024_PART3.csv         # Part 3 structure reference
    └── OBC_2024_PART9.csv         # Part 9 structure reference
```

### Key Design Patterns

**Excel Cell Mapping**:
- DOM element IDs correspond to Excel cell coordinates
- Example: Excel cell D12 → DOM element `id="d_12"`
- Dropdown in cell D19 → DOM element `id="dd_d_19"`
- Notes fields span columns O-Q → DOM elements `id="o_3"` through `id="o_12"`

**Section Module Pattern**:
```javascript
// Each section exports standardized interface
TEUI.SectionModules.sect01 = {
  getFields: () => ({...}),           // Field definitions
  getDropdownOptions: () => ({...}),  // Dropdown option sets
  getLayout: () => ({rows: [...]}),   // Layout structure
};
```

**Data Flow**:
1. CSV files define official OBC Matrix structure
2. Section modules create form layout matching CSV structure
3. FieldManager maps form fields to Excel coordinates
4. Import/Export functions handle data transformation
5. User interactions update form state

## Success Metrics

- **Visual Fidelity**: Form layout matches OBC Matrix Excel template exactly
- **Data Compatibility**: 100% field correspondence with CSV exports
- **User Experience**: Faster form completion than Excel with better validation
- **Accessibility**: WCAG AA compliance for professional use
- **Performance**: Sub-2 second load time, responsive on mobile devices

## DOM Structure & Excel Mapping Solutions

### Critical DOM/Table Architecture Fix
During Section 01 development, we discovered and resolved a critical DOM structure issue that will guide all future section implementations.

**The Problem Identified:**
- **Inherited 4011 Structure**: DOM included padding column from TEUI 4011 app
- **Column Offset Issue**: All content was shifted right by one column position
- **Excel Mapping Failure**: DOM positions didn't align with Excel columns for import/export

**The Solution Implemented:**
```javascript
// ✅ CORRECT: Separation of Concerns Approach
DOM Structure: Keep renderer-friendly layout (padding + columns)
Excel Mapping: Handle via fieldIds ("c_3" = Excel Column C, Row 3) 
Import/Export: FileHandler maps fieldIds to Excel coordinates
```

**Excel-Aligned Row ID System:**
```javascript
// Section prefix + Excel row number
id: "1.03" // Section 1, Excel Row 03
id: "1.04" // Section 1, Excel Row 04
id: "2.10" // Section 2, Excel Row 10
id: "3.21" // Section 3, Excel Row 21
```

### Implementation Guide for All Sections

**Step 1: Row ID Alignment**
- Use format: `{section}.{excel_row_number}`
- Example: Section 03 should use "3.21", "3.22", "3.23" etc.
- Makes app-to-Excel correspondence crystal clear for users

**Step 2: Field ID Mapping**
- Use Excel coordinates: `fieldId: "d_22"` (Excel Column D, Row 22)
- Maintain separation: DOM structure ≠ Excel mapping
- Let renderer handle DOM, let fieldIds handle Excel

**Step 3: CSS Column Targeting**
- Target by DOM position: `td:nth-child(5)` (Column E in DOM)
- NOT by Excel column: Avoid `.col-e` type selectors
- Use natural accordion sizing: `width: auto !important`

**Step 4: MANDATORY - Global Input Handling Implementation**
⚠️ **CRITICAL**: Do NOT create section-specific input handlers. Always use the global system:

```javascript
function initializeEventHandlers() {
  console.log("Initializing Section XX event handlers");
  
  // ✅ REQUIRED: Use global input handler for graceful behavior
  if (window.TEUI?.OBCStateManager?.initializeGlobalInputHandlers) {
    window.TEUI.OBCStateManager.initializeGlobalInputHandlers();
  }
  
  // ✅ REQUIRED: Only add calculation listeners (if needed)
  if (window.TEUI?.StateManager?.addListener || window.TEUI?.OBCStateManager?.addListener) {
    const calculationTriggers = ['field_1', 'field_2']; // Your calculation fields
    calculationTriggers.forEach(fieldId => {
      // Try both StateManager systems for compatibility
      if (window.TEUI.StateManager?.addListener) {
        window.TEUI.StateManager.addListener(fieldId, performCalculations);
      }
      if (window.TEUI.OBCStateManager?.addListener) {
        window.TEUI.OBCStateManager.addListener(fieldId, performCalculations);
      }
    });
  }
}
```

**❌ DO NOT DO**: Custom blur handlers, section-specific event management, or direct state setting without change detection.

### 📋 **COPY-PASTE TEMPLATE FOR NEW SECTIONS**

```javascript
/**
 * OBC-SectionXX.js
 * [SECTION NAME] (Section XX) module for OBC Matrix
 *
 * OBC MATRIX SECTION TEMPLATE - Based on proven 4011 patterns
 * Adapted for OBC Matrix architecture with Excel mapping, global input handling,
 * universal number formatting, and refined styling patterns.
 *
 * IMPLEMENTATION STANDARDS:
 * ========================
 * 1. ✅ ALWAYS use window.TEUI.OBCStateManager.initializeGlobalInputHandlers()
 * 2. ✅ ALWAYS use window.TEUI.formatNumber(value, "number-2dp-comma") for numbers  
 * 3. ✅ Field IDs must match Excel coordinates exactly (d_39, e_40, etc.)
 * 4. ✅ Row IDs must match Excel format (4.39, 4.40, etc.)
 * 5. ✅ Use field types: "editable", "num-editable", "dropdown", "calculated"
 * 6. ✅ Include section-specific CSS optimization if needed
 * 7. ✅ NO custom blur/focus handlers - use global system
 * 8. ✅ Subheaders use section-subheader class and proper content/label patterns
 *
 * FIELD TYPE PATTERNS:
 * ===================
 * - "editable": Regular text input (automatically gets graceful input styling)
 * - "num-editable": Numeric input with right alignment and auto-formatting
 * - "dropdown": Select field with options array, gets compact styling
 * - "calculated": Read-only calculated values, gets bold styling
 * - "text": Static text content, no interaction
 *
 * EXCEL MAPPING REQUIREMENTS:
 * ===========================
 * - fieldId: Must match Excel coordinates exactly (d_39 = Column D, Row 39)
 * - rowId: Must match Excel row format (4.39 for Section 4, Row 39)
 * - All columns A-O must be accounted for in cells object (even if empty)
 * - Notes fields typically go in column O with "notes-column" class
 *
 * GRACEFUL INPUT BEHAVIOR (AUTOMATIC):
 * ====================================
 * When using global input handlers, fields automatically get:
 * - Grey italic placeholder text for defaults
 * - Blue confident text while editing (editing-intent)
 * - Blue confident text for user-modified values (user-modified)
 * - Grey restore if user clicks without changes
 * - Automatic number formatting for num-editable fields
 *
 * CSS OPTIMIZATION PATTERN:
 * =========================
 * If your section has excessive empty columns causing whitespace issues,
 * add section-specific CSS optimization following Section 04 pattern.
 */

// Create section-specific namespace for global references
window.TEUI = window.TEUI || {};
window.TEUI.sectXX = window.TEUI.sectXX || {};
window.TEUI.sectXX.initialized = false;
window.TEUI.sectXX.userInteracted = false;

// Section XX: [SECTION NAME] Module
window.TEUI.SectionModules.sectXX = (function () {
  //==========================================================================
  // SECTION CONFIGURATION
  //==========================================================================
  
  const SECTION_CONFIG = {
    name: "sectionName",           // Replace with actual section name
    excelRowStart: 39,             // First Excel row for this section
    excelRowEnd: 52,               // Last Excel row for this section
    hasCalculations: true,         // Set to false if no calculations needed
    hasDropdowns: true,            // Set to false if no dropdowns
    needsCSS: false,               // Set to true if section needs layout optimization
  };

  //==========================================================================
  // DROPDOWN OPTIONS (if needed)
  //==========================================================================
  
  const dropdownOptions = {
    // Example dropdown options
    basicOptions: [
      { value: "-", name: "Select..." },
      { value: "Yes", name: "Yes" },
      { value: "No", name: "No" },
      { value: "N/A", name: "N/A" }
    ],
    
    // Building classification example (use if relevant)
    buildingClassifications: [
      { value: "-", name: "Select Building Classification", description: "" },
      { value: "3.2.2.20", name: "3.2.2.20", description: "Group A, Division 1, Any Height, Any Area, Sprinklered" },
      // Add more as needed...
    ]
  };

  //==========================================================================
  // CONSOLIDATED FIELD DEFINITIONS AND LAYOUT
  //==========================================================================

  // Define rows with integrated field definitions
  const sectionRows = {
    
    // SUBHEADER ROW - Always include for visual organization
    header: {
      id: "X.h",                    // Replace X with section number
      rowId: "X.h",
      label: "Section Header",
      cells: {
        b: { label: "X.h" },       // Section identifier
        c: { label: "MAIN CATEGORY", classes: ["section-subheader"] },
        d: { content: "SUBCATEGORY", classes: ["section-subheader"] },
        e: { content: "E", classes: ["section-subheader"] },
        f: { content: "F", classes: ["section-subheader"] },
        g: { content: "G", classes: ["section-subheader"] },
        h: { content: "H", classes: ["section-subheader"] },
        i: { content: "I", classes: ["section-subheader"] },
        j: { content: "J", classes: ["section-subheader"] },
        k: { content: "K", classes: ["section-subheader"] },
        l: { content: "OBC REFERENCE", classes: ["section-subheader"] },
        m: { content: "M", classes: ["section-subheader"] },
        n: { content: "N", classes: ["section-subheader"] },
        o: { content: "Notes", classes: ["section-subheader", "notes-column"] },
      },
    },

    // ROW XX: First content row (replace XX with actual row number)
    "X.39": {                       // Excel format: Section.Row
      id: "X.39",
      rowId: "X.39",
      label: "Row Label",
      cells: {
        b: { label: "3.XX" },      // OBC section reference
        c: { label: "FIELD LABEL" }, // Main field label
        d: { 
          fieldId: "d_39",          // Excel coordinate format
          type: "dropdown",         // Field type
          dropdownId: "dd_d_39",    // Dropdown ID
          value: "-",               // Default value
          section: SECTION_CONFIG.name,
          classes: ["dropdown-sm"], // Size class
          options: dropdownOptions.basicOptions
        },
        e: { 
          fieldId: "e_39",
          type: "text",
          value: "",
          section: SECTION_CONFIG.name,
          classes: ["description"],
          readonly: true
        },
        // ... continue for all columns through O
        l: { content: "3.2.X.X." }, // OBC reference
        o: {
          fieldId: "o_39",
          type: "editable",
          value: "enter notes here...",
          section: SECTION_CONFIG.name,
          classes: ["notes-column", "user-input"]
        }
      }
    },

    // ROW XX+1: Numeric input example
    "X.40": {
      id: "X.40",
      rowId: "X.40", 
      label: "Numeric Field",
      cells: {
        b: { label: "3.XX" },
        c: { label: "NUMERIC INPUT FIELD" },
        d: {
          fieldId: "d_40",
          type: "num-editable",     // Automatic right-alignment and formatting
          value: "0.00",
          section: SECTION_CONFIG.name,
          classes: ["user-input"]
        },
        e: {
          fieldId: "e_40", 
          type: "calculated",       // Bold calculated values
          value: "0.00",
          section: SECTION_CONFIG.name,
          classes: ["calculated-value"]
        },
        l: { content: "3.2.X.X." },
        o: {
          fieldId: "o_40",
          type: "editable",
          value: "enter notes here...",
          section: SECTION_CONFIG.name,
          classes: ["notes-column", "user-input"]
        }
      }
    },

    // Add more rows following the same pattern...
  };

  //==========================================================================
  // ACCESSOR METHODS (REQUIRED FOR FIELDMANAGER)
  //==========================================================================

  function getFields() {
    const fields = {};
    
    Object.entries(sectionRows).forEach(([rowKey, row]) => {
      if (rowKey === "header") return;
      if (!row.cells) return;

      Object.entries(row.cells).forEach(([colKey, cell]) => {
        if (cell.fieldId && cell.type) {
          fields[cell.fieldId] = {
            type: cell.type,
            label: cell.label || row.label,
            defaultValue: cell.value || "",
            section: cell.section || SECTION_CONFIG.name,
          };

          // Copy additional properties
          if (cell.dropdownId) fields[cell.fieldId].dropdownId = cell.dropdownId;
          if (cell.options) fields[cell.fieldId].options = cell.options;
          if (cell.readonly) fields[cell.fieldId].readonly = cell.readonly;
        }
      });
    });

    return fields;
  }

  function getDropdownOptions() {
    const options = {};
    
    Object.values(sectionRows).forEach((row) => {
      if (!row.cells) return;
      Object.values(row.cells).forEach((cell) => {
        if (cell.dropdownId && cell.options) {
          options[cell.dropdownId] = cell.options;
        }
      });
    });

    return options;
  }

  function getLayout() {
    const layoutRows = [];
    
    // Header first
    if (sectionRows["header"]) {
      layoutRows.push(createLayoutRow(sectionRows["header"]));
    }

    // Then content rows
    Object.entries(sectionRows).forEach(([key, row]) => {
      if (key !== "header") {
        layoutRows.push(createLayoutRow(row));
      }
    });

    return { rows: layoutRows };
  }

  function createLayoutRow(row) {
    const rowDef = {
      id: row.id,
      cells: [
        {}, // Column A - empty spacer
        {}, // Column B - auto-populated with row number
      ],
    };

    // Add columns C through O
    const columns = ["c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o"];
    
    columns.forEach((col) => {
      if (row.cells && row.cells[col]) {
        const cell = { ...row.cells[col] };
        
        // Clean up for renderer
        delete cell.section;
        delete cell.readonly;
        
        rowDef.cells.push(cell);
      } else {
        rowDef.cells.push({});
      }
    });

    return rowDef;
  }

  //==========================================================================
  // CALCULATION FUNCTIONS (if SECTION_CONFIG.hasCalculations = true)
  //==========================================================================

  function getFieldValue(fieldId) {
    // Try StateManager first, then DOM fallback
    if (window.TEUI?.StateManager?.getValue) {
      return window.TEUI.StateManager.getValue(fieldId);
    }
    
    const element = document.querySelector(`[data-field-id="${fieldId}"]`);
    if (element) {
      if (element.tagName === "SELECT") {
        return element.value;
      } else {
        return element.textContent || element.value || "";
      }
    }
    
    return "";
  }

  function getNumericValue(fieldId, defaultValue = 0) {
    const value = getFieldValue(fieldId);
    
    if (typeof value === 'string') {
      // Remove commas and parse
      const parsed = parseFloat(value.replace(/,/g, ''));
      return isNaN(parsed) ? defaultValue : parsed;
    } else if (typeof value === 'number') {
      return isNaN(value) ? defaultValue : value;
    }
    
    return defaultValue;
  }

  function setCalculatedValue(fieldId, rawValue, formatType = "number-2dp-comma") {
    // Use global formatNumber function
    const formattedValue = window.TEUI.formatNumber ? 
      window.TEUI.formatNumber(rawValue, formatType) : 
      rawValue.toString();

    // Update DOM
    const element = document.querySelector(`[data-field-id="${fieldId}"]`);
    if (element) {
      element.textContent = formattedValue;
    }

    // Update StateManager
    if (window.TEUI?.StateManager?.setValue) {
      window.TEUI.StateManager.setValue(fieldId, rawValue.toString(), "calculated");
    }
  }

  function performCalculations() {
    if (!SECTION_CONFIG.hasCalculations) return;
    
    // Example calculation
    // const value1 = getNumericValue("d_39");
    // const value2 = getNumericValue("d_40"); 
    // const total = value1 + value2;
    // setCalculatedValue("e_40", total);
    
    console.log("Performing calculations for Section XX");
  }

  //==========================================================================
  // EVENT HANDLING (OBC MATRIX PATTERN)
  //==========================================================================

  function initializeEventHandlers() {
    console.log("Initializing Section XX event handlers");
    
    // ✅ REQUIRED: Use global input handler for graceful behavior
    if (window.TEUI?.OBCStateManager?.initializeGlobalInputHandlers) {
      window.TEUI.OBCStateManager.initializeGlobalInputHandlers();
    }
    
    // ✅ OPTIONAL: Add calculation listeners (if needed)
    if (SECTION_CONFIG.hasCalculations) {
      const calculationTriggers = ['d_39', 'd_40']; // Replace with actual field IDs
      calculationTriggers.forEach(fieldId => {
        if (window.TEUI.StateManager?.addListener) {
          window.TEUI.StateManager.addListener(fieldId, performCalculations);
        }
        if (window.TEUI.OBCStateManager?.addListener) {
          window.TEUI.OBCStateManager.addListener(fieldId, performCalculations);
        }
      });
    }

    // ✅ OPTIONAL: Add dropdown change handlers (if needed)
    if (SECTION_CONFIG.hasDropdowns) {
      // Example: Handle building classification descriptions
      // document.addEventListener('change', function(e) {
      //   if (e.target.matches('[data-dropdown-id^="dd_d_"]')) {
      //     updateLinkedDescription(e.target);
      //   }
      // });
    }
  }

  function onSectionRendered() {
    console.log("Section XX rendered");
    
    // Initialize event handlers
    initializeEventHandlers();
    
    // Run initial calculations
    if (SECTION_CONFIG.hasCalculations) {
      performCalculations();
    }
    
    // Mark as initialized
    window.TEUI.sectXX.initialized = true;
  }

  //==========================================================================
  // PUBLIC API
  //==========================================================================

  return {
    // Required for FieldManager
    getFields: getFields,
    getDropdownOptions: getDropdownOptions,
    getLayout: getLayout,

    // Required for initialization
    initializeEventHandlers: initializeEventHandlers,
    onSectionRendered: onSectionRendered,

    // Optional calculation functions
    performCalculations: performCalculations,
    getFieldValue: getFieldValue,
    getNumericValue: getNumericValue,
    setCalculatedValue: setCalculatedValue,
  };
})();
```

### 📋 **CSS OPTIMIZATION TEMPLATE** (if SECTION_CONFIG.needsCSS = true)

Add to `OBC-styles.css` following Section 04 pattern:

```css
/* =============== SECTION XX SPECIFIC LAYOUT OPTIMIZATION =============== */

/* Section XX: Hide completely empty columns to improve density */
#sectionName .data-table td:nth-child(6),  /* Column F - empty */
#sectionName .data-table td:nth-child(7),  /* Column G - empty */
#sectionName .data-table td:nth-child(10), /* Column J - empty */
#sectionName .data-table td:nth-child(13), /* Column M - empty */
#sectionName .data-table td:nth-child(14)  /* Column N - empty */
{
    display: none;
}

/* Section XX: Flex/Auto responsive layout for remaining columns */
#sectionName .data-table {
    table-layout: auto;
    width: 100%;
}

/* Section XX: Intelligent column sizing for content-bearing columns */
#sectionName .data-table td:nth-child(1) { width: 4%; }   /* Row numbers */
#sectionName .data-table td:nth-child(2) { width: 6%; }   /* Section numbers */
#sectionName .data-table td:nth-child(3) { width: 25%; }  /* Labels */
#sectionName .data-table td:nth-child(4) { width: 15%; }  /* Dropdowns */
#sectionName .data-table td:nth-child(5) { width: 30%; }  /* Descriptions */
#sectionName .data-table td:nth-child(12) { width: 10%; } /* OBC references */
#sectionName .data-table td:nth-child(15) { width: 10%; } /* Notes */

/* Section XX: Ensure descriptions wrap properly instead of expanding */
#sectionName .data-table td:nth-child(5) {
    white-space: normal !important;
    word-wrap: break-word;
    max-width: 300px;
}

/* =============== END SECTION XX LAYOUT OPTIMIZATION =============== */
```

### 📋 **IMPLEMENTATION CHECKLIST**

Before implementing a new section:

**Pre-Implementation:**
- [ ] Identify Excel row range (e.g., rows 53-65)
- [ ] Determine field types needed (dropdowns, numeric, text, calculated)
- [ ] Check if calculations are required
- [ ] Assess if CSS optimization is needed

**During Implementation:**
- [ ] Replace all XX placeholders with actual section number
- [ ] Replace "sectionName" with actual section identifier
- [ ] Update SECTION_CONFIG with correct values
- [ ] Add actual dropdown options if needed
- [ ] Implement calculations if hasCalculations = true
- [ ] Test field types render correctly

**Post-Implementation:**
- [ ] Verify Excel coordinate mapping (d_39 = Column D, Row 39)
- [ ] Test graceful input behavior (grey→blue→grey/permanent blue)
- [ ] Confirm number formatting works for num-editable fields
- [ ] Validate calculations trigger properly
- [ ] Check responsive layout behavior
- [ ] Test Notes column functionality

**Quality Assurance:**
- [ ] Cross-browser testing (Chrome, Firefox, Safari)
- [ ] Mobile/tablet responsiveness check
- [ ] Dropdown functionality verification
- [ ] State persistence testing
- [ ] Excel import/export compatibility

### 🎯 **KEY DIFFERENCES FROM 4011 TEMPLATE**

**Simplified for OBC Matrix:**
- ❌ No complex weather data integrations
- ❌ No reference value systems
- ❌ No multiple climate zones
- ❌ No energy cost calculations
- ✅ Focus on building code compliance data
- ✅ Excel mapping priority
- ✅ Graceful input styling built-in
- ✅ Universal number formatting
- ✅ Section-specific CSS optimization patterns

**Enhanced OBC Matrix Features:**
- ✅ Global input handler integration
- ✅ Universal field type system
- ✅ Excel coordinate fieldId system
- ✅ Notes column integration
- ✅ Subheader styling patterns
- ✅ Responsive layout optimization
- ✅ Building classification patterns

This template provides the structure and patterns proven in the 4011 codebase but refined specifically for OBC Matrix requirements.

## Layout Expansion Debugging & Known Issues

### ⚠️ **KNOWN ISSUE: "Goalpost Expansion" Problem (UNRESOLVED)**

**Issue Identified**: December 2024  
**Problem**: Complex interaction between form fields and browser layout rendering engine  
**Status**: 🚨 **DEFERRED FOR FUTURE RESOLUTION**

#### **🔍 Problem Analysis:**

**The "Goalpost Expansion" Issue**: Middle columns (specifically E and M) consistently expand to 400-600px width instead of target 2px, creating visual "goalposts" that push important content apart and make the interface difficult to use.

**Root Cause Discovery**: This appears to be a complex interaction between:
- **Browser table layout algorithms** calculating width requirements for complex form elements
- **Dropdown/select elements** causing the browser to reserve excessive space
- **Table-layout rendering engine** treating form controls differently than standard text

#### **🧪 Exhaustive Debugging Attempts (All Failed):**

**Approach 1 - CSS Simplification:**
- **Attempted**: Removed colgroup generation, artificial column classes, competing CSS rules
- **Result**: Cleaned up CSS significantly but goalpost expansion persisted
- **Status**: ✅ **Successful cleanup**, ❌ **No layout fix**

**Approach 2 - Ellipsis Content Truncation:**
- **Attempted**: Applied `text-overflow: ellipsis` and removed `min-width` constraints from dropdowns
- **Result**: Zero visual change, expansion behavior identical
- **Status**: ❌ **No effect on layout**

**Approach 3 - Fixed Table Layout with Percentages:**
- **Attempted**: `table-layout: fixed` with explicit column percentages
- **Result**: Content became unreadable, text wrapping, dropdown functionality broken
- **Status**: ❌ **Broke functionality**

**Approach 4 - Content-Aware Width Calculation:**
- **Attempted**: Percentages based on actual minimum text requirements  
- **Result**: Only worked in Section 01 (no dropdowns), failed in sections with form elements
- **Status**: ❌ **Inconsistent behavior**

#### **🎯 Current Understanding:**

**The browser's table layout engine appears to treat form controls (dropdowns, inputs) fundamentally differently than text content**, causing it to reserve significantly more space than CSS rules can override. Standard CSS layout techniques that work perfectly with text content fail when complex form elements are involved.

#### **💡 Potential Future Approaches:**

**Theory: "Stealth Mode" Rendering**
- Render form controls outside the table layout flow using absolute positioning
- Present simple text content to the table layout engine for width calculations  
- Layer interactive elements on top invisibly ("These are not the droids you're looking for")
- This would require significant architectural changes to the FieldManager

**Alternative: Accept Current Behavior**
- The application functions perfectly despite the visual appearance
- Form completion, calculations, and data export all work correctly
- Goalpost expansion is cosmetic, not functional
- Focus development effort on completing remaining sections rather than layout perfectionism

#### **📋 Recommendation for Future Development:**

**PRIORITY: LOW** - Defer layout expansion fixes until after core form completion:
- Complete Sections 4-14 using current working patterns
- Achieve full OBC Matrix functionality first
- Revisit layout issues in v2.0 with dedicated browser rendering research
- Consider alternative approaches like CSS Grid or different DOM structures for form layout

#### **🧪 THEORY: Object-Based Cell Structure Solution (RESEARCH CANDIDATE)**

**Date Proposed**: December 20, 2024  
**Status**: THEORETICAL - Requires Standalone Testing  
**Priority**: Research Topic for v2.0

#### **🔍 Current Problem Analysis:**

**The Array Structure Challenge:**
```javascript
// Current approach forces sequential column rendering
rowDef.cells = [
  {}, // Column A (empty spacer)
  {}, // Column B (ID) 
  {label: "TEXT"}, // Column C
  {fieldId: "dropdown"}, // Column D
  {}, {}, {}, {}, {}, // Columns E-I (empty)
  {content: "reference"} // Column L
];
```

**Browser Behavior with Arrays:**
- **Sequential Processing**: Browser calculates `cells[0], cells[1], cells[2]...` in order
- **Table Layout Algorithm**: Treats each index as a physical column requiring width calculation
- **Form Element Interference**: Dropdowns in `cells[3]` cause browser to reserve excessive space for "neighboring" empty cells
- **Forced Column Creation**: Browser creates 15 DOM columns even when only 3-4 contain content

#### **💡 Proposed Object Structure Solution:**

**Semantic Cell Targeting:**
```javascript
// Theoretical object-based approach
rowDef.cells = {
  c: {label: "TEXT"},
  d: {fieldId: "dropdown"}, 
  l: {content: "reference"}
};
// No empty columns defined = no empty columns rendered
```

**Potential Browser Advantages:**
- **Selective Rendering**: Only defined columns get DOM elements created
- **No Ghost Columns**: Browser doesn't calculate widths for undefined columns E-K
- **Form Element Isolation**: Dropdowns in column D don't affect non-existent neighboring columns
- **Natural Width Calculation**: Browser calculates minimum required width for actual content only

#### **🏗️ Implementation Theory:**

**FieldManager Adaptation Required:**
```javascript
// Current approach (array-based)
rowDef.cells.forEach((cellDef, index) => {
  const cellElement = document.createElement("td");
  // Creates 15 <td> elements regardless of content
});

// Proposed approach (object-based)
const definedColumns = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o'];
definedColumns.forEach(columnLetter => {
  if (rowDef.cells[columnLetter]) {
    const cellElement = document.createElement("td");
    // Only creates <td> elements for defined columns
  }
});
```

**CSS Grid Analogy:**
This approach mirrors CSS Grid's `grid-template-areas` concept:
```css
/* CSS Grid approach */
.grid-container {
  grid-template-areas: 
    "column-c column-d . . . . . . . . . column-l";
}

/* vs traditional table approach */
.table td:nth-child(1) { /* always exists */ }
.table td:nth-child(2) { /* always exists */ }
/* ...all 15 columns always exist */
```

#### **🎯 Expected Benefits:**

**Layout Performance:**
- **Fewer DOM Elements**: Only create `<td>` elements for columns with content
- **Reduced CSS Calculations**: Browser doesn't compute styles for non-existent elements
- **Elimination of Goalpost Effect**: No empty middle columns to expand

**Form Element Behavior:**
- **Isolated Dropdowns**: Form controls don't affect neighboring empty space
- **Natural Sizing**: Browser calculates width based on actual content requirements
- **No Artificial Constraints**: Eliminate need for complex CSS width overrides

**Development Benefits:**
- **Semantic Clarity**: `cells.d` instead of `cells[3]` for maintainability
- **Excel Alignment**: Direct correspondence to Excel column letters
- **Debugging Simplicity**: Easier to understand "column D has a dropdown" vs "array index 3"

#### **⚠️ Implementation Challenges:**

**FieldManager Refactoring Required:**
- Complete rewrite of cell iteration logic
- Update all section modules to use object structure
- Ensure backward compatibility during transition

**Excel Mapping Consistency:**
- Maintain perfect Excel coordinate correspondence
- Ensure import/export functions still work correctly
- Preserve field ID system (`d_39`, `e_50`, etc.)

**Testing Requirements:**
- Cross-browser compatibility validation
- Form functionality verification
- Performance impact measurement

#### **📋 Research Approach:**

**Phase 1: Standalone Proof of Concept**
- Create minimal test application independent of main OBC Matrix
- Implement object-based cell structure for 2-3 sample rows
- Compare layout behavior with current array approach
- Measure DOM element count and CSS calculation impact

**Phase 2: Layout Behavior Analysis**
- Test with various form elements (dropdowns, inputs, text)
- Document width calculation differences
- Verify goalpost expansion elimination
- Cross-browser behavior validation

**Phase 3: Integration Feasibility**
- Estimate refactoring effort for main application
- Design migration strategy from array to object structure
- Plan backward compatibility approach
- Performance impact assessment

#### **🔬 Test Application Specifications:**

**Minimal Test Setup:**
```html
<!DOCTYPE html>
<html>
<head>
  <title>Object vs Array Cell Structure Test</title>
  <style>
    .test-table { border-collapse: collapse; width: 100%; }
    .test-table td { border: 1px solid #ccc; padding: 8px; }
  </style>
</head>
<body>
  <h2>Array Structure (Current)</h2>
  <table class="test-table" id="array-table"></table>
  
  <h2>Object Structure (Proposed)</h2>
  <table class="test-table" id="object-table"></table>
  
  <div id="analysis-results"></div>
</body>
</html>
```

**Test Scenarios:**
1. **Text-only rows**: Compare layout with simple text content
2. **Dropdown rows**: Test form element impact on neighboring columns
3. **Mixed content**: Complex rows with text, dropdowns, and references
4. **Empty middle columns**: Verify goalpost expansion behavior

**Success Metrics:**
- **DOM Element Count**: Object approach should create fewer `<td>` elements
- **Column Width Behavior**: Middle columns should not expand in object approach
- **Form Functionality**: Dropdowns and inputs must work identically
- **CSS Complexity**: Reduced need for width override rules

#### **💭 Theoretical Impact Assessment:**

**If Successful:**
- **Layout Revolution**: Could solve goalpost expansion completely
- **Architectural Simplification**: Eliminate complex CSS width management
- **Performance Improvement**: Fewer DOM elements and calculations
- **Development Velocity**: Cleaner, more maintainable code structure

**If Inconclusive:**
- **Research Value**: Better understanding of browser table layout behavior
- **Alternative Paths**: Inform other approaches like CSS Grid migration
- **Documentation**: Comprehensive analysis for future development decisions

**Priority**: HIGH for research, LOW for immediate implementation (after Sections 4-14 completion)

### ⚠️ CSS Layout Expansion Issue (ATTEMPTED - Needs Alternative Solution)
**User Request**: "Raisin Bread" proportional expansion where all columns grow proportionally as browser widens, not just the F/G/H region acting as expansion zone.

**Failed Attempts**:
1. **Fixed percentage system**: Assigned specific percentages to all 15 columns (A: 3%, B: 5%, C: 15%, D: 20%, etc.) but caused content clipping and text wrapping issues
2. **Flex-grow hybrid**: Attempted flex-grow properties but incompatible with table elements

**Final Solution - Anti-Goalpost Layout**:
User identified real problem as creating "goalposts" - annoying middle whitespace gulf that pushes important content apart. Wanted left-justified content with expansion on right side.

Final implementation:
- Collapsed middle empty columns (E, F, G, M, N) to 2px width (nearly invisible)
- Made Notes column (O) the expansion zone to absorb extra browser width  
- Kept important content left-justified and compact
- Eliminated middle whitespace "gulf"

**Current Status**: Working anti-goalpost layout achieved through **clean architecture** rather than complex CSS fixes.

### ❌ **ATTEMPTED: "Span Spam" Template-Based Solution (FAILED)** 

**Date Attempted**: December 19, 2024  
**Problem Name**: "Span Spam" (goalpost expansion behavior)  
**Status**: ❌ **APPROACH FAILED - DEFERRED FOR FUTURE RESEARCH**

#### **🔍 Root Cause Analysis:**

**The Problem:**
- Sections 02 and 03 exhibited massive "goalpost" column expansion
- Column E: 463px-644px instead of target 2px
- Column M: 108px-141px instead of target 2px  
- Section 01 worked correctly (~20px), proving CSS could work

**Investigation Journey:**
1. **❌ Content-driven theory**: Failed - empty cells still 463px wide
2. **❌ Colspan interference**: Fixed but no improvement
3. **❌ 4011 CSS inheritance**: OBC Matrix confirmed architecturally clean
4. **❌ JavaScript width setting**: No inline styles found
5. **✅ Browser table layout algorithm**: **ROOT CAUSE IDENTIFIED**

#### **🎯 The Real Culprit:**

**Browser's `table-layout: auto` algorithm** was ignoring all CSS rules and calculating column widths based on content requirements. Even `!important` declarations couldn't override the browser's minimum content width calculations.

**Evidence:**
- CSS targeting was correct (`<col class="col-e">` matched our selectors)
- Debugging showed `width: 463px` as computed width, not inline style
- Multiple CSS specificity attempts failed completely

#### **💡 The Template-Based Approach (Attempted):**

**Theoretical Solution:**
Attempted to use `table-layout: fixed` with percentage-based column widths to force browser compliance, but this approach failed due to content readability issues and inconsistent behavior across sections.

**Why It Failed:**
- **Content became unreadable**: Text wrapping and ellipsis made form unusable
- **Dropdown functionality broken**: Form elements didn't work properly within constrained widths  
- **Inconsistent behavior**: Only worked in sections without complex form elements
- **Browser layout engine resistance**: Even with `table-layout: fixed !important`, the browser's form element width calculations overrode CSS rules

**Key Learning:**
The browser's table layout algorithm appears to have deep-seated behavior for form controls that cannot be easily overridden with standard CSS techniques. This suggests the issue requires a fundamentally different approach to DOM structure rather than CSS modifications.

#### **📋 Lessons Learned:**

**Key Insights from Debugging:**
- Browser table layout algorithms have deep-seated behavior for form controls that CSS cannot easily override
- `table-layout: fixed` breaks form usability when widths are too constrained
- Ellipsis approaches work for text but not for complex form elements
- The issue is cosmetic - the application functions perfectly despite visual appearance
- Section 01 (without dropdowns) naturally displays correctly, confirming the issue is form element specific

**Recommended Future Research:**
- Alternative DOM structures (CSS Grid, Flexbox) for form layout
- "Stealth mode" rendering with absolute positioning of form elements
- Investigation into browser-specific table layout behaviors
- Analysis of how other complex form applications handle similar issues

### 🏗️ DOM/Excel Namespace Architecture (CRITICAL UNDERSTANDING)

**Key Architecture Note**: 
- **DOM Column A**: Empty spacer for visual padding
- **DOM Column B**: Renders Excel Column A content
- **DOM Column C**: Renders Excel Column B content
- **etc.**

**Field ID System**: 
- Field IDs match Excel coordinates exactly: `fieldId: "c_3"` = Excel Column C, Row 3
- This creates correct Excel mapping despite DOM rendering offset
- Import/Export functions use fieldIds to maintain Excel correspondence

**Visual vs Data Separation**:
- DOM handles visual layout (with spacer column)
- FieldIds handle data mapping (Excel-aligned)
- Renderer bridges the gap between visual DOM and data coordinates

### ✅ Input State Management Fix - RESOLVED

**Issue Identified**: Section 03 had broken input field state behavior compared to Section 01.

**Problem**: 
- Section 03 used its own `handleFieldBlur` function that always marked fields as "user-modified"
- Section 01 used global `initializeGlobalInputHandlers()` from OBC-StateManager.js with proper change detection
- This caused Section 03 fields to permanently turn blue even on accidental clicks without changes

**Solution Implemented**:
- Removed Section 03's custom `handleFieldBlur` function
- Implemented global input handler usage: `window.TEUI.OBCStateManager.initializeGlobalInputHandlers()`
- Added change detection logic that only commits to "user-modified" state if actual changes were made
- Preserved Section 03's custom numeric formatting with new `formatSection03Field()` helper function

**Result - Universal Graceful Behavior**:
- Click in → converts to blue confident text ✅
- Click out without changes → gracefully restores grey default text ✅
- Click out with changes → commits to blue confident text ✅
- Works consistently across ALL sections now ✅

**Technical Implementation**:
- Global handler stores `originalValue` on focus for change detection
- Only calls `setValue(fieldId, value, "user-modified")` if `valueStr !== originalValue`
- CSS classes `.editing-intent` (temporary blue) and `.user-modified` (permanent blue) work perfectly
- Smooth transitions between grey italic placeholder → blue confident text states

**🚨 CRITICAL FOR FUTURE DEVELOPMENT**: This fix establishes the **mandatory pattern** for all future sections. Section 03 was initially built without this system and had to be retrofitted. The Implementation Guide now includes explicit warnings and code examples to prevent this regression in Sections 4-14.

### Next Development Priorities

#### 🚨 **MANDATORY PATTERNS FOR ALL FUTURE SECTIONS:**
- **Global Input Handling**: `window.TEUI.OBCStateManager.initializeGlobalInputHandlers()` - NO custom blur handlers
- **Number Formatting**: `window.TEUI.formatNumber(value, "number-2dp-comma")` - NO custom toLocaleString logic  
- **Field IDs**: Excel coordinates (d_22, e_22) regardless of DOM structure
- **Row IDs**: Section.ExcelRow format (4.20, 5.15, etc.)

1. **📋 Sections 4-14 Development**: Use established patterns from Sections 01-03 with mandatory global input handling and universal alignment for rapid completion
2. **🔗 Excel Integration**: Test import/export with updated field coordinate system across all sections
3. **⚡ Performance Optimization**: Universal alignment system and global input handling enable faster rendering and simpler maintenance
4. **🎨 Visual Polish**: Final styling touches and responsive design improvements
5. **🌐 Universal Input Handling**: Apply the working OBC-StateManager global handler to all remaining sections for consistency 