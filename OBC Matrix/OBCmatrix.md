# OBC Matrix - Interactive Web Form Implementation Plan

## Project Overview

The OBC Matrix is an interactive web form that replicates the Ontario Association of Architects' standardized Building Code Data Matrix. This tool enables architects to complete building permit applications digitally while maintaining the exact structure and field mapping of the original Excel template for seamless data import/export.

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

### ✅ Phase 3: Section Restructuring Analysis (COMPLETED)
**Objective**: Understand CSV structure and plan section reorganization

**Completed Work**:
- Analyzed OBC_2024_PART3.csv structure showing sections 3.01, 3.02, etc.
- Identified Notes fields in column O requiring 3-column span
- Planned removal of energy-specific fields (reporting year, service life, energy costs)
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

### 🔄 Phase 5: Section Fine-Tuning (IN PROGRESS)
**Objective**: Refine S01 layout, styling, and field behavior

**Next Steps**:
- Adjust field widths and responsive behavior
- Implement dropdown option population from CSV data
- Fine-tune Notes field styling and behavior
- Optimize stamp upload UX and file handling
- Add field validation and error states

### 📋 Phase 6: Additional Sections Implementation (PLANNED)
**Objective**: Build out remaining OBC Matrix sections based on CSV structure

**Planned Sections**:
- **Section 3.03+**: Additional classification sections as defined in Part 3 CSV
- **Part 9 Toggle**: Implement Part 3/Part 9 switching with different field sets
- **Notes Section**: Dedicated notes area for project-specific information
- **Summary Section**: Overview of completed fields and validation status

### 📋 Phase 7: Data Import/Export Engine (PLANNED)
**Objective**: Enable seamless data exchange with Excel/CSV files

**Key Features**:
- **CSV Parser**: Read OBC_2024_PART3.csv and OBC_2024_PART9.csv structures
- **Field Mapping**: Map CSV cells to DOM elements using coordinate system
- **Import Function**: Populate form fields from uploaded Excel/CSV files
- **Export Function**: Generate Excel-compatible CSV from form data
- **Validation**: Ensure data integrity during import/export

### 📋 Phase 8: User Experience Enhancements (PLANNED)
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

## Risk Mitigation

- **Version Control**: Git tracking with branch-based development
- **Backup Strategy**: Maintain copies of working TEUI 4011 components
- **Testing Protocol**: Cross-browser testing on IE11+, Chrome, Firefox, Safari
- **Data Validation**: Multiple layers of validation before import/export
- **Fallback Options**: Excel template download if web form fails

## Development Notes

### Excel-to-DOM Mapping Strategy
The application maintains 1:1 correspondence with Excel cells to enable reliable import/export:

```javascript
// Example field mapping
const field = {
  id: "d_12",              // DOM element ID
  excelRef: "D12",         // Original Excel cell reference
  label: "Project Type",   // User-facing label
  section: "buildingInfo", // Section grouping
  type: "dropdown",        // Field type
  required: true           // Validation rule
};
```

### CSV Processing Approach
1. **Structure Analysis**: Parse CSV to understand section headers, field locations, and data types
2. **Field Extraction**: Map each input field to its Excel coordinate
3. **Data Validation**: Ensure imported data matches expected field types
4. **DOM Population**: Update form fields using coordinate-based element IDs

### Current Implementation Status
- **Foundation**: Stable base with cleaned UI and proper script references
- **Section 01**: Fully functional with practice info, project details, and classification dropdowns
- **Field Mapping**: Basic coordinate system established (d_3 through d_12, o_3 through o_12)
- **File Structure**: Organized with clear separation of concerns
- **User Interface**: Responsive design with modern styling matching TEUI 4011

### Known Issues & Technical Debt
- Some dropdown options need population from CSV data
- Stamp upload functionality needs file size/type validation
- Notes fields could benefit from auto-resize behavior
- Need to implement Part 3/Part 9 toggle switching
- Import/export functionality not yet connected to form fields 