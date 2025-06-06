# OBC Matrix - Interactive Web Form Implementation Plan

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

### 🔄 Phase 7: Building Areas Section Implementation (PARTIAL)
**Objective**: Create Section 03 with building area calculations and measurements

**Next Priority - Section 03**:
- **Building Areas (Rows 21-39)**: Area calculations and measurements
- **Construction Type**: Building construction specifications
- **Height Calculations**: Stories above/below grade measurements
- **Reference Integration**: Proper OBC section cross-references

**Future Sections**:
- **Part 9 Toggle**: Implement Part 3/Part 9 switching with different field sets
- **Notes Section**: Dedicated notes area for project-specific information  
- **Summary Section**: Overview of completed fields and validation status

### 📋 Phase 8: OAA Stamp Validation Engine (PLANNED)
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

### 📋 Phase 9: Data Import/Export Engine (PLANNED)
**Objective**: Enable seamless data exchange with Excel/CSV files

**Key Features**:
- **CSV Parser**: Read OBC_2024_PART3.csv and OBC_2024_PART9.csv structures
- **Field Mapping**: Map CSV cells to DOM elements using coordinate system
- **Import Function**: Populate form fields from uploaded Excel/CSV files
- **Export Function**: Generate Excel-compatible CSV from form data
- **Validation**: Ensure data integrity during import/export

### 📋 Phase 10: User Experience Enhancements (PLANNED)
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
- **Foundation**: Stable base with cleaned UI and proper script references ✅
- **Section 01**: Production-ready with all functionality working ✅
  - Practice & project information fields ✅
  - Working Project Type & Major Occupancy dropdowns ✅  
  - Notes column with show/hide toggle ✅
  - Floating stamp upload positioned correctly ✅
  - Perfect Excel structure alignment (15 columns A-O) ✅
- **Field Mapping**: Complete coordinate system (c_3 through c_12, o_3 through o_12) ✅
- **File Structure**: Organized with clear separation of concerns ✅
- **User Interface**: Responsive design with modern styling ✅

### Technical Architecture Status
- **✅ JavaScript Pipeline**: All core modules loading without errors
- **✅ Dropdown System**: Full initialization and population working
- **✅ Table Structure**: 15-column Excel-aligned layout confirmed
- **✅ Field Management**: Complete field registration and rendering
- **✅ Event Handling**: User input and state management operational

### Ready for Development
- **Section 02**: Template and patterns established, ready to implement
- **Import/Export**: Core file handling infrastructure in place
- **Additional Sections**: Modular architecture supports rapid expansion 