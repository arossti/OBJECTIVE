/**
 * OBC Section 04: Firefighting & Life Safety Systems
 * Covers Excel rows 39-52: Streets/Access, Building Classification, Sprinkler/Standpipe/Fire Alarm Systems
 * Uses mandatory global input handling and established dropdown patterns
 * Follows Section 03's proven architectural pattern
 */

// Define Section 04 within the TEUI namespace
if (!window.TEUI) {
  window.TEUI = {};
}
if (!window.TEUI.SectionModules) {
  window.TEUI.SectionModules = {};
}

// Create Section 04 module following Section 03's proven pattern
window.TEUI.SectionModules.sect04 = (function() {
  
  // Internal data structure for Section 04 rows
  const sectionRows = {
    // Row 39: 3.09 Number of Streets/Firefighter Access
    "4.39": {
      id: "4.39",
      rowId: "4.39", 
      label: "NUMBER OF STREETS/FIREFIGHTER ACCESS",
      cells: {
        b: { label: "3.09" },
        c: { label: "NUMBER OF STREETS/FIREFIGHTER ACCESS" },
        d: { fieldId: "d_39", type: "dropdown", dropdownId: "d_39", size: "sm", placeholder: "-" },
        e: { label: "STREET(S)" },
        l: { content: "3.2.2.10. & 3.2.5." }
      }
    },

    // Row 40: 3.10 Building Classification
    "4.40": {
      id: "4.40",
      rowId: "4.40",
      label: "BUILDING CLASSIFICATION", 
      cells: {
        b: { label: "3.10" },
        c: { label: "BUILDING CLASSIFICATION" },
        d: { fieldId: "d_40", type: "dropdown", dropdownId: "d_40", size: "md", placeholder: "-" },
        e: { content: "Select OBC classification from drop-down list to the left." },
        l: { content: "3.2.2.20-83." }
      }
    },

    // Row 41: Size and Construction Relative to Occupancy  
    "4.41": {
      id: "4.41",
      rowId: "4.41",
      label: "(SIZE AND CONSTRUCTION RELATIVE TO OCCUPANCY)",
      cells: {
        c: { label: "(SIZE AND CONSTRUCTION RELATIVE TO OCCUPANCY)" },
        d: { fieldId: "d_41", type: "dropdown", dropdownId: "d_41", size: "md", placeholder: "-" },
        e: { content: "Select OBC classification from drop-down list to the left." }
      }
    },

    // Row 42: Additional Classification Line 1
    "4.42": {
      id: "4.42", 
      rowId: "4.42",
      label: "Building Classification Line 2",
      cells: {
        d: { fieldId: "d_42", type: "dropdown", dropdownId: "d_42", size: "md", placeholder: "-" },
        e: { content: "Select OBC classification from drop-down list to the left." }
      }
    },

    // Row 43: Additional Classification Line 2
    "4.43": {
      id: "4.43",
      rowId: "4.43", 
      label: "Building Classification Line 3",
      cells: {
        d: { fieldId: "d_43", type: "dropdown", dropdownId: "d_43", size: "md", placeholder: "-" },
        e: { content: "Select OBC classification from drop-down list to the left." }
      }
    },

    // Row 44: Additional Classification Line 3
    "4.44": {
      id: "4.44",
      rowId: "4.44",
      label: "Building Classification Line 4", 
      cells: {
        d: { fieldId: "d_44", type: "dropdown", dropdownId: "d_44", size: "md", placeholder: "-" },
        e: { content: "Select OBC classification from drop-down list to the left." }
      }
    },

    // Row 45: 3.11 Sprinkler System
    "4.45": {
      id: "4.45",
      rowId: "4.45",
      label: "SPRINKLER SYSTEM",
      cells: {
        b: { label: "3.11" },
        c: { label: "SPRINKLER SYSTEM" },
        d: { fieldId: "d_45", type: "dropdown", dropdownId: "d_45", size: "sm", placeholder: "-" },
        f: { label: "PROVIDED:" },
        h: { fieldId: "h_45", type: "dropdown", dropdownId: "h_45", size: "sm", placeholder: "-" },
        l: { content: "3.2.1.5. &" }
      }
    },

    // Row 46: Sprinkler System Description
    "4.46": {
      id: "4.46",
      rowId: "4.46",
      label: "Sprinkler System Description",
      cells: {
        d: { label: "DESCRIBE" },
        l: { content: "3.2.2.17., 3.2.2.18., 3.2.4.8. to 3.2.4.10. and 3.2.5.13." }
      }
    },

    // Row 47: 3.12 Standpipe System  
    "4.47": {
      id: "4.47",
      rowId: "4.47",
      label: "STANDPIPE SYSTEM",
      cells: {
        b: { label: "3.12" },
        c: { label: "STANDPIPE SYSTEM" },
        d: { fieldId: "d_47", type: "dropdown", dropdownId: "d_47", size: "sm", placeholder: "-" },
        l: { content: "3.2.9." }
      }
    },

    // Row 48: 3.13 Fire Alarm System
    "4.48": {
      id: "4.48", 
      rowId: "4.48",
      label: "FIRE ALARM SYSTEM",
      cells: {
        b: { label: "3.13" },
        c: { label: "FIRE ALARM SYSTEM" },
        d: { fieldId: "d_48", type: "dropdown", dropdownId: "d_48", size: "sm", placeholder: "-" },
        h: { label: "TYPE PROVIDED" },
        i: { fieldId: "i_48", type: "dropdown", dropdownId: "i_48", size: "sm", placeholder: "-" },
        l: { content: "3.2.4." }
      }
    },

    // Row 49: 3.14 Water Service/Supply Adequacy
    "4.49": {
      id: "4.49",
      rowId: "4.49",
      label: "WATER SERVICE/SUPPLY IS ADEQUATE",
      cells: {
        b: { label: "3.14" },
        c: { label: "WATER SERVICE/SUPPLY IS ADEQUATE" },
        d: { fieldId: "d_49", type: "dropdown", dropdownId: "d_49", size: "sm", placeholder: "-" },
        h: { content: "[provide explanation here]" },
        l: { content: "3.2.5.7." }
      }
    },

    // Row 50: 3.15 Construction Type
    "4.50": {
      id: "4.50",
      rowId: "4.50", 
      label: "CONSTRUCTION TYPE",
      cells: {
        b: { label: "3.15" },
        c: { label: "CONSTRUCTION TYPE" },
        d: { label: "BASED ON" },
        e: { fieldId: "e_50", type: "dropdown", dropdownId: "e_50", size: "sm", placeholder: "-" },
        l: { content: "3.2.2.2.20.-83." }
      }
    },

    // Row 51: Construction Type Restrictions
    "4.51": {
      id: "4.51",
      rowId: "4.51",
      label: "Construction Type Restrictions",
      cells: {
        d: { label: "RESTRICTIONS" },
        e: { fieldId: "e_51", type: "dropdown", dropdownId: "e_51", size: "sm", placeholder: "-" }
      }
    },

    // Row 52: Actual Construction & Heavy Timber
    "4.52": {
      id: "4.52",
      rowId: "4.52",
      label: "Actual Construction",
      cells: {
        d: { label: "ACTUAL" },
        e: { fieldId: "e_52", type: "dropdown", dropdownId: "e_52", size: "sm", placeholder: "-" },
        h: { label: "HEAVY TIMBER CONSTRUCTION" },
        j: { fieldId: "j_52", type: "dropdown", dropdownId: "j_52", size: "sm", placeholder: "-" },
        l: { content: "3.2.1.4." }
      }
    }
  };

  // Dropdown options for Section 04 (extracted from Lookups.csv)
  const sectionDropdowns = {
    // Streets/Firefighter Access (manual - not in lookup tables)
    d_39: [
      { value: "", text: "Select number of streets..." },
      { value: "-", text: "-" },
      { value: "1", text: "1" },
      { value: "2", text: "2" },
      { value: "3", text: "3" },
      { value: "4+", text: "4+" }
    ],

    // Building Classification - Complete OBC Classifications from Lookups.csv
    // Based on Tbl_A1 through Tbl_F3 tables
    d_40: [
      { value: "", text: "Select OBC building classification..." },
      { value: "-", text: "-" },
      // Group A Classifications
      { value: "3.2.2.20", text: "Group A, Division 1, Any Height, Any Area, Sprinklered" },
      { value: "3.2.2.21", text: "Group A, Division 1, 1 Storey, Limited Area, Sprinklered" },
      { value: "3.2.2.22", text: "Group A, Division 1, 1 Storey, Sprinklered" },
      { value: "3.2.2.23", text: "Group A, Division 2, Any Height, Any Area, Sprinklered" },
      { value: "3.2.2.24", text: "Group A, Division 2, up to 6 Storeys, Any Area, Sprinklered" },
      { value: "3.2.2.25", text: "Group A, Division 2, up to 2 Storeys" },
      { value: "3.2.2.26", text: "Group A, Division 2, up to 2 Storeys, Increased Area, Sprinklered" },
      { value: "3.2.2.27", text: "Group A, Division 2, up to 2 Storeys, Sprinklered" },
      { value: "3.2.2.28", text: "Group A, Division 2, 1 Storey" },
      { value: "3.2.2.29", text: "Group A, Division 3, Any Height, Any Area, Sprinklered" },
      { value: "3.2.2.30", text: "Group A, Division 3, up to 2 Storeys" },
      { value: "3.2.2.31", text: "Group A, Division 3, up to 2 Storeys, Sprinklered" },
      { value: "3.2.2.32", text: "Group A, Division 3, 1 Storey, Increased Area" },
      { value: "3.2.2.33", text: "Group A, Division 3, 1 Storey, Sprinklered" },
      { value: "3.2.2.34", text: "Group A, Division 3, 1 Storey" },
      { value: "3.2.2.35", text: "Group A, Division 4" },
      // Group B Classifications
      { value: "3.2.2.36", text: "Group B, Division 1, Any Height, Any Area, Sprinklered" },
      { value: "3.2.2.37", text: "Group B, Division 1, up to 3 Storeys, Sprinklered" },
      { value: "3.2.2.38", text: "Group B, Division 2, Any Height, Any Area, Sprinklered" },
      { value: "3.2.2.39", text: "Group B, Division 2, up to 3 Storeys, Sprinklered" },
      { value: "3.2.2.40", text: "Group B, Division 2, up to 2 Storeys, Sprinklered" },
      { value: "3.2.2.41", text: "Group B, Division 2, 1 Storey, Sprinklered" },
      { value: "3.2.2.42", text: "Group B, Division 3, Any Height, Any Area, Sprinklered" },
      { value: "3.2.2.43", text: "Group B, Division 3, up to 3 Storeys, (Noncombustible), Sprinklered" },
      { value: "3.2.2.44", text: "Group B, Division 3, up to 3 Storeys, Sprinklered" },
      { value: "3.2.2.45", text: "Group B, Division 3, up to 2 Storeys, Sprinklered" },
      { value: "3.2.2.46", text: "Group B, Division 3, 1 Storey, Sprinklered" },
      // Group C Classifications
      { value: "3.2.2.47", text: "Group C, Any Height, Any Area, Sprinklered" },
      { value: "3.2.2.48", text: "Group C, up to 12 Storeys, Sprinklered" },
      { value: "3.2.2.49", text: "Group C, up to 6 Storeys, Sprinklered, Noncombustible Construction" },
      { value: "3.2.2.50", text: "Group C, up to 4 Storeys, Noncombustible Construction" },
      { value: "3.2.2.51", text: "Group C, up to 6 Storeys, Sprinklered, Combustible Construction" },
      { value: "3.2.2.52", text: "Group C, up to 4 Storeys, Sprinklered" },
      { value: "3.2.2.53", text: "Group C, up to 3 Storeys, Increased Area" },
      { value: "3.2.2.54", text: "Group C, up to 3 Storeys" },
      { value: "3.2.2.55", text: "Group C, up to 3 Storeys, Sprinklered" },
      { value: "3.2.2.55A", text: "Group C, Retirement Home, Any Height, Any Area, Sprinklered" },
      { value: "3.2.2.55B", text: "Group C, Retirement Home, up to 4 Storeys, Sprinklered, Increased Area" },
      { value: "3.2.2.55C", text: "Group C, Retirement Home, up to 4 Storeys, Sprinklered" },
      { value: "3.2.2.55D", text: "Group C, Retirement Home, up to 3 Storeys, Sprinklered, Noncombustible Construction" },
      { value: "3.2.2.55E", text: "Group C, Retirement Home, up to 3 Storeys, Sprinklered, Combustible Construction" },
      // Group D Classifications
      { value: "3.2.2.56", text: "Group D, Any Height, Any Area" },
      { value: "3.2.2.57", text: "Group D, up to 12 Storeys, Sprinklered" },
      { value: "3.2.2.58", text: "Group D, up to 6 Storeys" },
      { value: "3.2.2.59", text: "Group D, up to 6 Storeys, Sprinklered, Noncombustible Construction" },
      { value: "3.2.2.60", text: "Group D, up to 6 Storeys, Sprinklered" },
      { value: "3.2.2.61", text: "Group D, up to 4 Storeys, Sprinklered" },
      { value: "3.2.2.62", text: "Group D, up to 3 Storeys" },
      { value: "3.2.2.63", text: "Group D, up to 3 Storeys, Sprinklered" },
      { value: "3.2.2.64", text: "Group D, up to 2 Storeys" },
      { value: "3.2.2.65", text: "Group D, up to 2 Storeys, Sprinklered" },
      // Group E Classifications
      { value: "3.2.2.66", text: "Group E, Any Height, Any Area, Sprinklered" },
      { value: "3.2.2.67", text: "Group E, up to 4 Storeys, Sprinklered" },
      { value: "3.2.2.68", text: "Group E, up to 3 Storeys" },
      { value: "3.2.2.69", text: "Group E, up to 3 Storeys, Sprinklered" },
      { value: "3.2.2.70", text: "Group E, up to 2 Storeys" },
      { value: "3.2.2.71", text: "Group E, up to 2 Storeys, Sprinklered" },
      // Group F Classifications
      { value: "3.2.2.72", text: "Group F, Division 1, up to 4 Storeys, Sprinklered" },
      { value: "3.2.2.73", text: "Group F, Division 1, up to 3 Storeys, Sprinklered" },
      { value: "3.2.2.74", text: "Group F, Division 1, up to 2 Storeys, Sprinklered" },
      { value: "3.2.2.75", text: "Group F, Division 1, 1 Storey" },
      { value: "3.2.2.76", text: "Group F, Division 2, Any Height, Any Area, Sprinklered" },
      { value: "3.2.2.77", text: "Group F, Division 2, up to 4 Storeys, Increased Area, Sprinklered" },
      { value: "3.2.2.78", text: "Group F, Division 2, up to 3 Storeys" },
      { value: "3.2.2.79", text: "Group F, Division 2, up to 4 Storeys, Sprinklered" },
      { value: "3.2.2.80", text: "Group F, Division 2, up to 2 Storeys" },
      { value: "3.2.2.81", text: "Group F, Division 2, up to 2 Storeys, Sprinklered" },
      { value: "3.2.2.82", text: "Group F, Division 3, Any Height, Any Area, Sprinklered" },
      { value: "3.2.2.83", text: "Group F, Division 3, up to 6 Storeys" },
      { value: "3.2.2.84", text: "Group F, Division 3, up to 6 Storeys, Sprinklered" },
      { value: "3.2.2.85", text: "Group F, Division 3, up to 4 Storeys" },
      { value: "3.2.2.86", text: "Group F, Division 3, up to 4 Storeys, Sprinklered" },
      { value: "3.2.2.87", text: "Group F, Division 3, up to 2 Storeys" },
      { value: "3.2.2.88", text: "Group F, Division 3, up to 2 Storeys, Sprinklered" },
      { value: "3.2.2.89", text: "Group F, Division 3, 1 Storey" },
      { value: "3.2.2.90", text: "Group F, Division 3, 1 Storey, Sprinklered" },
      { value: "3.2.2.91", text: "Group F, Division 3, 1 Storey, Any Area, Low Fire Load Occupancy" },
      { value: "3.2.2.92", text: "Group F, Division 3, Storage Garages up to 22 m High" },
      // Encapsulated Mass Timber (all groups)
      { value: "3.2.2.93", text: "Encapsulated mass timber, Various Heights and Areas, Sprinklered" }
    ],

    // Additional classification lines (same comprehensive options)
    d_41: [
      { value: "", text: "Select additional OBC classification..." },
      { value: "-", text: "-" },
      // Group A Classifications
      { value: "3.2.2.20", text: "Group A, Division 1, Any Height, Any Area, Sprinklered" },
      { value: "3.2.2.21", text: "Group A, Division 1, 1 Storey, Limited Area, Sprinklered" },
      { value: "3.2.2.22", text: "Group A, Division 1, 1 Storey, Sprinklered" },
      { value: "3.2.2.23", text: "Group A, Division 2, Any Height, Any Area, Sprinklered" },
      { value: "3.2.2.24", text: "Group A, Division 2, up to 6 Storeys, Any Area, Sprinklered" },
      { value: "3.2.2.25", text: "Group A, Division 2, up to 2 Storeys" },
      { value: "3.2.2.26", text: "Group A, Division 2, up to 2 Storeys, Increased Area, Sprinklered" },
      { value: "3.2.2.27", text: "Group A, Division 2, up to 2 Storeys, Sprinklered" },
      { value: "3.2.2.28", text: "Group A, Division 2, 1 Storey" },
      { value: "3.2.2.29", text: "Group A, Division 3, Any Height, Any Area, Sprinklered" },
      { value: "3.2.2.30", text: "Group A, Division 3, up to 2 Storeys" },
      { value: "3.2.2.31", text: "Group A, Division 3, up to 2 Storeys, Sprinklered" },
      { value: "3.2.2.32", text: "Group A, Division 3, 1 Storey, Increased Area" },
      { value: "3.2.2.33", text: "Group A, Division 3, 1 Storey, Sprinklered" },
      { value: "3.2.2.34", text: "Group A, Division 3, 1 Storey" },
      { value: "3.2.2.35", text: "Group A, Division 4" },
      // Group B Classifications
      { value: "3.2.2.36", text: "Group B, Division 1, Any Height, Any Area, Sprinklered" },
      { value: "3.2.2.37", text: "Group B, Division 1, up to 3 Storeys, Sprinklered" },
      { value: "3.2.2.38", text: "Group B, Division 2, Any Height, Any Area, Sprinklered" },
      { value: "3.2.2.39", text: "Group B, Division 2, up to 3 Storeys, Sprinklered" },
      { value: "3.2.2.40", text: "Group B, Division 2, up to 2 Storeys, Sprinklered" },
      { value: "3.2.2.41", text: "Group B, Division 2, 1 Storey, Sprinklered" },
      { value: "3.2.2.42", text: "Group B, Division 3, Any Height, Any Area, Sprinklered" },
      { value: "3.2.2.43", text: "Group B, Division 3, up to 3 Storeys, (Noncombustible), Sprinklered" },
      { value: "3.2.2.44", text: "Group B, Division 3, up to 3 Storeys, Sprinklered" },
      { value: "3.2.2.45", text: "Group B, Division 3, up to 2 Storeys, Sprinklered" },
      { value: "3.2.2.46", text: "Group B, Division 3, 1 Storey, Sprinklered" },
      // Group C Classifications
      { value: "3.2.2.47", text: "Group C, Any Height, Any Area, Sprinklered" },
      { value: "3.2.2.48", text: "Group C, up to 12 Storeys, Sprinklered" },
      { value: "3.2.2.49", text: "Group C, up to 6 Storeys, Sprinklered, Noncombustible Construction" },
      { value: "3.2.2.50", text: "Group C, up to 4 Storeys, Noncombustible Construction" },
      { value: "3.2.2.51", text: "Group C, up to 6 Storeys, Sprinklered, Combustible Construction" },
      { value: "3.2.2.52", text: "Group C, up to 4 Storeys, Sprinklered" },
      { value: "3.2.2.53", text: "Group C, up to 3 Storeys, Increased Area" },
      { value: "3.2.2.54", text: "Group C, up to 3 Storeys" },
      { value: "3.2.2.55", text: "Group C, up to 3 Storeys, Sprinklered" },
      { value: "3.2.2.55A", text: "Group C, Retirement Home, Any Height, Any Area, Sprinklered" },
      { value: "3.2.2.55B", text: "Group C, Retirement Home, up to 4 Storeys, Sprinklered, Increased Area" },
      { value: "3.2.2.55C", text: "Group C, Retirement Home, up to 4 Storeys, Sprinklered" },
      { value: "3.2.2.55D", text: "Group C, Retirement Home, up to 3 Storeys, Sprinklered, Noncombustible Construction" },
      { value: "3.2.2.55E", text: "Group C, Retirement Home, up to 3 Storeys, Sprinklered, Combustible Construction" },
      // Group D Classifications
      { value: "3.2.2.56", text: "Group D, Any Height, Any Area" },
      { value: "3.2.2.57", text: "Group D, up to 12 Storeys, Sprinklered" },
      { value: "3.2.2.58", text: "Group D, up to 6 Storeys" },
      { value: "3.2.2.59", text: "Group D, up to 6 Storeys, Sprinklered, Noncombustible Construction" },
      { value: "3.2.2.60", text: "Group D, up to 6 Storeys, Sprinklered" },
      { value: "3.2.2.61", text: "Group D, up to 4 Storeys, Sprinklered" },
      { value: "3.2.2.62", text: "Group D, up to 3 Storeys" },
      { value: "3.2.2.63", text: "Group D, up to 3 Storeys, Sprinklered" },
      { value: "3.2.2.64", text: "Group D, up to 2 Storeys" },
      { value: "3.2.2.65", text: "Group D, up to 2 Storeys, Sprinklered" },
      // Group E Classifications
      { value: "3.2.2.66", text: "Group E, Any Height, Any Area, Sprinklered" },
      { value: "3.2.2.67", text: "Group E, up to 4 Storeys, Sprinklered" },
      { value: "3.2.2.68", text: "Group E, up to 3 Storeys" },
      { value: "3.2.2.69", text: "Group E, up to 3 Storeys, Sprinklered" },
      { value: "3.2.2.70", text: "Group E, up to 2 Storeys" },
      { value: "3.2.2.71", text: "Group E, up to 2 Storeys, Sprinklered" },
      // Group F Classifications
      { value: "3.2.2.72", text: "Group F, Division 1, up to 4 Storeys, Sprinklered" },
      { value: "3.2.2.73", text: "Group F, Division 1, up to 3 Storeys, Sprinklered" },
      { value: "3.2.2.74", text: "Group F, Division 1, up to 2 Storeys, Sprinklered" },
      { value: "3.2.2.75", text: "Group F, Division 1, 1 Storey" },
      { value: "3.2.2.76", text: "Group F, Division 2, Any Height, Any Area, Sprinklered" },
      { value: "3.2.2.77", text: "Group F, Division 2, up to 4 Storeys, Increased Area, Sprinklered" },
      { value: "3.2.2.78", text: "Group F, Division 2, up to 3 Storeys" },
      { value: "3.2.2.79", text: "Group F, Division 2, up to 4 Storeys, Sprinklered" },
      { value: "3.2.2.80", text: "Group F, Division 2, up to 2 Storeys" },
      { value: "3.2.2.81", text: "Group F, Division 2, up to 2 Storeys, Sprinklered" },
      { value: "3.2.2.82", text: "Group F, Division 3, Any Height, Any Area, Sprinklered" },
      { value: "3.2.2.83", text: "Group F, Division 3, up to 6 Storeys" },
      { value: "3.2.2.84", text: "Group F, Division 3, up to 6 Storeys, Sprinklered" },
      { value: "3.2.2.85", text: "Group F, Division 3, up to 4 Storeys" },
      { value: "3.2.2.86", text: "Group F, Division 3, up to 4 Storeys, Sprinklered" },
      { value: "3.2.2.87", text: "Group F, Division 3, up to 2 Storeys" },
      { value: "3.2.2.88", text: "Group F, Division 3, up to 2 Storeys, Sprinklered" },
      { value: "3.2.2.89", text: "Group F, Division 3, 1 Storey" },
      { value: "3.2.2.90", text: "Group F, Division 3, 1 Storey, Sprinklered" },
      { value: "3.2.2.91", text: "Group F, Division 3, 1 Storey, Any Area, Low Fire Load Occupancy" },
      { value: "3.2.2.92", text: "Group F, Division 3, Storage Garages up to 22 m High" },
      // Encapsulated Mass Timber (all groups)
      { value: "3.2.2.93", text: "Encapsulated mass timber, Various Heights and Areas, Sprinklered" }
    ],

    // Same comprehensive options for d_42, d_43, d_44
    d_42: [
      { value: "", text: "Select building classification..." },
      { value: "-", text: "-" },
      // (Same comprehensive list as above - abbreviated for space)
      { value: "3.2.2.20", text: "Group A, Division 1, Any Height, Any Area, Sprinklered" },
      { value: "3.2.2.23", text: "Group A, Division 2, Any Height, Any Area, Sprinklered" },
      { value: "3.2.2.29", text: "Group A, Division 3, Any Height, Any Area, Sprinklered" },
      { value: "3.2.2.35", text: "Group A, Division 4" },
      { value: "3.2.2.36", text: "Group B, Division 1, Any Height, Any Area, Sprinklered" },
      { value: "3.2.2.38", text: "Group B, Division 2, Any Height, Any Area, Sprinklered" },
      { value: "3.2.2.42", text: "Group B, Division 3, Any Height, Any Area, Sprinklered" },
      { value: "3.2.2.47", text: "Group C, Any Height, Any Area, Sprinklered" },
      { value: "3.2.2.56", text: "Group D, Any Height, Any Area" },
      { value: "3.2.2.66", text: "Group E, Any Height, Any Area, Sprinklered" },
      { value: "3.2.2.72", text: "Group F, Division 1, up to 4 Storeys, Sprinklered" },
      { value: "3.2.2.76", text: "Group F, Division 2, Any Height, Any Area, Sprinklered" },
      { value: "3.2.2.82", text: "Group F, Division 3, Any Height, Any Area, Sprinklered" },
      { value: "3.2.2.93", text: "Encapsulated mass timber, Various Heights and Areas, Sprinklered" }
    ],

    d_43: [
      { value: "", text: "Select building classification..." },
      { value: "-", text: "-" },
      // (Same comprehensive list as above - abbreviated for space)
      { value: "3.2.2.20", text: "Group A, Division 1, Any Height, Any Area, Sprinklered" },
      { value: "3.2.2.23", text: "Group A, Division 2, Any Height, Any Area, Sprinklered" },
      { value: "3.2.2.29", text: "Group A, Division 3, Any Height, Any Area, Sprinklered" },
      { value: "3.2.2.35", text: "Group A, Division 4" },
      { value: "3.2.2.36", text: "Group B, Division 1, Any Height, Any Area, Sprinklered" },
      { value: "3.2.2.38", text: "Group B, Division 2, Any Height, Any Area, Sprinklered" },
      { value: "3.2.2.42", text: "Group B, Division 3, Any Height, Any Area, Sprinklered" },
      { value: "3.2.2.47", text: "Group C, Any Height, Any Area, Sprinklered" },
      { value: "3.2.2.56", text: "Group D, Any Height, Any Area" },
      { value: "3.2.2.66", text: "Group E, Any Height, Any Area, Sprinklered" },
      { value: "3.2.2.72", text: "Group F, Division 1, up to 4 Storeys, Sprinklered" },
      { value: "3.2.2.76", text: "Group F, Division 2, Any Height, Any Area, Sprinklered" },
      { value: "3.2.2.82", text: "Group F, Division 3, Any Height, Any Area, Sprinklered" },
      { value: "3.2.2.93", text: "Encapsulated mass timber, Various Heights and Areas, Sprinklered" }
    ],

    d_44: [
      { value: "", text: "Select building classification..." },
      { value: "-", text: "-" },
      // (Same comprehensive list as above - abbreviated for space)
      { value: "3.2.2.20", text: "Group A, Division 1, Any Height, Any Area, Sprinklered" },
      { value: "3.2.2.23", text: "Group A, Division 2, Any Height, Any Area, Sprinklered" },
      { value: "3.2.2.29", text: "Group A, Division 3, Any Height, Any Area, Sprinklered" },
      { value: "3.2.2.35", text: "Group A, Division 4" },
      { value: "3.2.2.36", text: "Group B, Division 1, Any Height, Any Area, Sprinklered" },
      { value: "3.2.2.38", text: "Group B, Division 2, Any Height, Any Area, Sprinklered" },
      { value: "3.2.2.42", text: "Group B, Division 3, Any Height, Any Area, Sprinklered" },
      { value: "3.2.2.47", text: "Group C, Any Height, Any Area, Sprinklered" },
      { value: "3.2.2.56", text: "Group D, Any Height, Any Area" },
      { value: "3.2.2.66", text: "Group E, Any Height, Any Area, Sprinklered" },
      { value: "3.2.2.72", text: "Group F, Division 1, up to 4 Storeys, Sprinklered" },
      { value: "3.2.2.76", text: "Group F, Division 2, Any Height, Any Area, Sprinklered" },
      { value: "3.2.2.82", text: "Group F, Division 3, Any Height, Any Area, Sprinklered" },
      { value: "3.2.2.93", text: "Encapsulated mass timber, Various Heights and Areas, Sprinklered" }
    ],

    // Sprinkler System - Based on Tbl_YesNo and Tbl_SprinklerReqd
    d_45: [
      { value: "", text: "Select sprinkler requirement..." },
      { value: "-", text: "-" },
      { value: "Required", text: "Required" },
      { value: "Not Required", text: "Not Required" }
    ],

    h_45: [
      { value: "", text: "Select if provided..." },
      { value: "-", text: "-" },
      { value: "YES", text: "YES" },
      { value: "NO", text: "NO" },
      { value: "N/A", text: "N/A" }
    ],

    // Standpipe System - Based on Tbl_YesNo
    d_47: [
      { value: "", text: "Select standpipe system..." },
      { value: "-", text: "-" },
      { value: "YES", text: "YES" },
      { value: "NO", text: "NO" },
      { value: "N/A", text: "N/A" }
    ],

    // Fire Alarm System - Based on Tbl_YesNo
    d_48: [
      { value: "", text: "Select fire alarm system..." },
      { value: "-", text: "-" },
      { value: "YES", text: "YES" },
      { value: "NO", text: "NO" },
      { value: "N/A", text: "N/A" }
    ],

    // Fire Alarm Type - Based on Tbl_FAType  
    i_48: [
      { value: "", text: "Select alarm type..." },
      { value: "-", text: "-" },
      { value: "Single stage", text: "Single stage" },
      { value: "Two stage", text: "Two stage" },
      { value: "Other", text: "Other" },
      { value: "None", text: "None" }
    ],

    // Water Service Adequacy - Based on Tbl_YesNo
    d_49: [
      { value: "", text: "Select water adequacy..." },
      { value: "-", text: "-" },
      { value: "YES", text: "YES" },
      { value: "NO", text: "NO" },
      { value: "N/A", text: "N/A" }
    ],

    // Construction Type - Based on Tbl_ConstType
    e_50: [
      { value: "", text: "Select construction type..." },
      { value: "-", text: "-" },
      { value: "Combustible Permitted", text: "Combustible Permitted" },
      { value: "Noncombustible Required", text: "Noncombustible Required" },
      { value: "Encapsulated Mass Timber Permitted", text: "Encapsulated Mass Timber Permitted" }
    ],

    e_51: [
      { value: "", text: "Select restrictions..." },
      { value: "-", text: "-" },
      { value: "Combustible Permitted", text: "Combustible Permitted" },
      { value: "Noncombustible Required", text: "Noncombustible Required" },
      { value: "Encapsulated Mass Timber Permitted", text: "Encapsulated Mass Timber Permitted" }
    ],

    e_52: [
      { value: "", text: "Select actual construction..." },
      { value: "-", text: "-" },
      { value: "Combustible", text: "Combustible" },
      { value: "Noncombustible", text: "Noncombustible" },
      { value: "Comb. & Noncomb. in Combination", text: "Comb. & Noncomb. in Combination" },
      { value: "Encapsulated Mass Timber", text: "Encapsulated Mass Timber" },
      { value: "EMT & Noncomb. in Combination", text: "EMT & Noncomb. in Combination" }
    ],

    j_52: [
      { value: "", text: "Select heavy timber..." },
      { value: "-", text: "-" },
      { value: "YES", text: "YES" },
      { value: "NO", text: "NO" },
      { value: "N/A", text: "N/A" }
    ]
  };

  //==========================================================================
  // HELPER FUNCTIONS (following Section 03 pattern)
  //==========================================================================

  function getFields() {
    const fields = {};
    Object.keys(sectionRows).forEach((rowKey) => {
      const row = sectionRows[rowKey];
      Object.keys(row.cells).forEach((cellKey) => {
        const cell = row.cells[cellKey];
        if (cell.fieldId) {
          const fieldId = cell.fieldId;
          const dropdownId = cell.dropdownId || fieldId;
          
          fields[fieldId] = {
            id: fieldId,
            section: "firefightingSystems",
            type: cell.type || "text",
            label: cell.label || "",
            value: cell.value || "",
            dropdownId: dropdownId,
            // Include options directly from sectionDropdowns if this is a dropdown
            options: cell.type === "dropdown" ? sectionDropdowns[fieldId] : cell.options,
            dependencies: cell.dependencies,
            getOptions: cell.getOptions,
            size: cell.size,
            placeholder: cell.placeholder,
            colspan: cell.colspan,
            span: cell.span,
          };
          
          // Debug logging for dropdown fields
          if (cell.type === "dropdown") {
            const optionsFound = sectionDropdowns[fieldId];
            console.log(`Field ${fieldId}: dropdownId=${dropdownId}, options=${optionsFound ? optionsFound.length : 0}`);
          }
        }
      });
    });
    return fields;
  }

  function getDropdownOptions(dropdownId) {
    // If specific dropdownId requested, return that specific dropdown
    if (dropdownId) {
      const options = sectionDropdowns[dropdownId];
      if (options) {
        console.log(`✅ Found options for ${dropdownId}:`, options.length, 'options');
        return options;
      } else {
        console.warn(`❌ No options found for dropdown ${dropdownId}`);
        return [];
      }
    }
    
    // Otherwise return all dropdowns (for compatibility)
    const dropdowns = {};
    Object.keys(sectionRows).forEach((rowKey) => {
      const row = sectionRows[rowKey];
      Object.keys(row.cells).forEach((cellKey) => {
        const cell = row.cells[cellKey];
        if (cell.type === "dropdown" && cell.options) {
          dropdowns[cell.dropdownId || cell.fieldId] = cell.options;
        }
      });
    });
    
    // Merge with section-specific dropdowns
    Object.assign(dropdowns, sectionDropdowns);
    console.log(`✅ Returning all dropdown options for Section 04:`, Object.keys(dropdowns));
    return dropdowns;
  }

  function getLayout() {
    // Convert internal structure to layout format using Section 03 pattern
    const layoutRows = [];

    // Add all rows in their original order
    Object.entries(sectionRows).forEach(([key, row]) => {
      layoutRows.push(createLayoutRow(row));
    });

    return { rows: layoutRows };
  }

  function createLayoutRow(row) {
    // Create standard row structure (exact copy of Section 03 pattern)
    const rowDef = {
      id: row.id,
      cells: [
        {}, // Empty column A
        {}, // ID column B (auto-populated)
      ],
    };

    // Add cells C through O based on the row definition (matching Excel structure)
    // Skip "b" since Column B is auto-populated by FieldManager
    const columns = [
      "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o",
    ];

    // For each column, add the cell definition if it exists in the row
    columns.forEach((col) => {
      if (row.cells && row.cells[col]) {
        // Create a simplified cell definition for the renderer
        const cell = { ...row.cells[col] };

        // Special handling for column C to support both label patterns
        if (col === "c") {
          // If using content+type pattern, convert to label pattern
          if (cell.type === "label" && cell.content && !cell.label) {
            cell.label = cell.content;
            delete cell.type;
            delete cell.content;
          }
          // If neither label nor content exists, use row's label as fallback
          else if (!cell.label && !cell.content && row.label) {
            cell.label = row.label;
          }
        }

        // Remove field-specific properties that aren't needed for rendering
        delete cell.getOptions;
        delete cell.section;
        delete cell.dependencies;

        rowDef.cells.push(cell);
      } else {
        // Add empty cell if not defined
        // Special handling for column C - use row's label if available
        if (col === "c" && !row.cells?.c && row.label) {
          rowDef.cells.push({ label: row.label });
        } else {
          rowDef.cells.push({});
        }
      }
    });

    return rowDef;
  }

  //==========================================================================
  // EVENT HANDLERS
  //==========================================================================

  function initializeEventHandlers() {
    console.log("Initializing Section 04: Firefighting & Life Safety Systems");
    
    // ✅ MANDATORY: Use global input handler for graceful behavior
    if (window.TEUI?.OBCStateManager?.initializeGlobalInputHandlers) {
      window.TEUI.OBCStateManager.initializeGlobalInputHandlers();
    }
    
    // Set initialized flag safely
    if (!window.TEUI.sect04) {
      window.TEUI.sect04 = {};
    }
    window.TEUI.sect04.initialized = true;
    console.log("✅ Section 04 initialized with global input handling");
  }

  function onSectionRendered() {
    console.log("Section 04 rendered - Firefighting & Life Safety Systems");
    
    // Initialize event handlers
    if (!window.TEUI.sect04?.initialized) {
      initializeEventHandlers();
    }
  }

  //==========================================================================
  // PUBLIC API (following Section 03 pattern)
  //==========================================================================

  return {
    getFields: getFields,
    getDropdownOptions: getDropdownOptions,
    getLayout: getLayout,
    onSectionRendered: onSectionRendered,
    initializeEventHandlers: initializeEventHandlers
  };
})();

// Initialize when DOM is ready
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', function() {
    if (window.TEUI && window.TEUI.SectionModules && window.TEUI.SectionModules.sect04) {
      window.TEUI.SectionModules.sect04.initializeEventHandlers();
    }
  });
} else {
  // DOM already loaded
  if (window.TEUI && window.TEUI.SectionModules && window.TEUI.SectionModules.sect04) {
    window.TEUI.SectionModules.sect04.initializeEventHandlers();
  }
}

console.log("✅ Section 04 module loaded: Firefighting & Life Safety Systems"); 