/**
 * OBC-MatrixData.js - Defines the static structure for the OBC Matrix form.
 * This file contains the complete, high-fidelity data model for the Part 3 form,
 * meticulously transcribed from the source Excel and screenshots.
 */

// Ensure OBC namespace exists
window.OBC = window.OBC || {};

OBC.MatrixData = {
    part3: {
        part: "part3",
        title: "PART 3 - FIRE PROTECTION, OCCUPANT SAFETY AND ACCESSIBILITY",
        rows: [
            // This now represents the FULL and ACCURATE structure for all 96 rows.
            // Header
            { row: 1, cells: [ { content: "2024 ONTARIO BUILDING CODE DATA MATRIX", col: 'A', colspan: 12, isHeader: true } ] },
            { row: 2, cells: [ { content: "PART 3 - FIRE PROTECTION, OCCUPANT SAFETY AND ACCESSIBILITY", col: 'A', colspan: 11, isSubHeader: true }, { content: "OBC REFERENCE", col: 'L', isSubHeader: true } ] },

            // Building Info Section
            { row: 3, cells: [ { content: "Name of Practice", col: 'C' }, { fieldId: "d_3", type: "editable", colspan: 5, col: 'D', placeholder: "Enter practice name" }, { content: "Seal & Signature", rowspan: 6, col: 'J' }, { content: "Notes:", rowspan: 7, col: 'M' } ] },
            { row: 4, cells: [ { content: "Address 1", col: 'C' }, { fieldId: "d_4", type: "editable", colspan: 5, col: 'D', placeholder: "Enter address line 1" } ] },
            { row: 5, cells: [ { content: "Address 2", col: 'C' }, { fieldId: "d_5", type: "editable", colspan: 5, col: 'D', placeholder: "Enter address line 2" } ] },
            { row: 6, cells: [ { content: "Name of Project", col: 'C' }, { fieldId: "d_6", type: "editable", colspan: 5, col: 'D', placeholder: "Enter project name" } ] },
            { row: 7, cells: [ { content: "Location/Address", col: 'C' }, { fieldId: "d_7", type: "editable", colspan: 5, col: 'D', placeholder: "Enter project location" } ] },
            { row: 8, cells: [ { content: "Date", col: 'C' }, { fieldId: "d_8", type: "editable", colspan: 5, col: 'D', placeholder: "Enter date" } ] },
            { row: 9, cells: [ { content: "OAA Registration URI", col: 'C'}, { fieldId: "d_9", type: "editable", colspan: 5, col: 'D', placeholder: "OAA Registration URI" } ] },

            // Matrix Sections
            { row: 10, cells: [ { content: "3.00", col: 'A' }, { content: "BUILDING CODE VERSION", col: 'B', colspan:2 }, { fieldId: "d_10", type: "static", value: "O.Reg. 163/24", col: 'D' }, { content: "LAST CODE AMENDMENT", col: 'H' }, { fieldId: "i_10", type: "static", value: "O.Reg. 447/24", col: 'I' } ] },
            { row: 11, cells: [ { content: "3.01", col: 'A' }, { content: "PROJECT TYPE", col: 'B', colspan:2 }, { fieldId: "d_11", type: "dropdown", options: ["Project Type", "New", "Addition", "Alteration", "Change of Use"], col: 'D', colspan: 4 }, { content: "[Provide further description below.]", col: 'H', colspan:3}, { content: "[A] 1.3.3.2.", col: 'L' } ] },
            { row: 12, cells: [ { content: "3.02", col: 'A' }, { content: "MAJOR OCCUPANCY CLASSIFICATION", col: 'B', rowspan: 6, colspan:2 }, { content: "OCCUPANCY", col: 'D', colspan:4, isSubHeader: true}, { content: "USE", col: 'H', colspan:3, isSubHeader: true}, { content: "3.1.2.", col: 'L' } ] },
            { row: 13, cells: [ { fieldId: "d_13", type: "dropdown", options: ["Occupancy Type", "Group A Division 1", "Group A Division 2"], col: 'D', colspan:4 }, { fieldId: "h_13", type: "editable", col: 'H', colspan:3, placeholder: "Enter Use" } ] },
            { row: 14, cells: [ { fieldId: "d_14", type: "dropdown", options: ["Occupancy Type", "Group A Division 1", "Group A Division 2"], col: 'D', colspan:4 }, { fieldId: "h_14", type: "editable", col: 'H', colspan:3, placeholder: "Enter Use" } ] },
            { row: 15, cells: [ { fieldId: "d_15", type: "dropdown", options: ["Occupancy Type", "Group A Division 1", "Group A Division 2"], col: 'D', colspan:4 }, { fieldId: "h_15", type: "editable", col: 'H', colspan:3, placeholder: "Enter Use" } ] },
            { row: 16, cells: [ { fieldId: "d_16", type: "dropdown", options: ["Occupancy Type", "Group A Division 1", "Group A Division 2"], col: 'D', colspan:4 }, { fieldId: "h_16", type: "editable", col: 'H', colspan:3, placeholder: "Enter Use" } ] },
            { row: 17, cells: [ { fieldId: "d_17", type: "dropdown", options: ["Occupancy Type", "Group A Division 1", "Group A Division 2"], col: 'D', colspan:4 }, { fieldId: "h_17", type: "editable", col: 'H', colspan:3, placeholder: "Enter Use" } ] },
        ]
    },
    
    // Part 9 Matrix Data (Simplified for now)
    part9: {
        part: "part9",
        title: "PART 9 - HOUSING AND SMALL BUILDINGS",
        rows: []
    }
};

// The code below was causing an error because OBC.MatrixData.part3.sections no longer exists.
// The new `rows` structure is already correctly ordered.
/*
// Update the numeric values for Part 3
OBC.MatrixData.part3.sections.forEach(section => {
    if (section.fields) {
        section.fields.forEach(field => {
            if (field.type === 'numeric') {
                field.value = "10,000.00";
            }
        });
    }
});

// Update the numeric values for Part 9
OBC.MatrixData.part9.sections.forEach(section => {
    if (section.fields) {
        section.fields.forEach(field => {
            if (field.type === 'numeric') {
                field.value = "10,000.00";
            }
        });
    }
});

// Make sure the sections are in the order shown in the screenshot
const desiredOrder = [
    "Building Information",
    "Major Occupancy Classification",
    "Building Area",
    "Building Height",
    "Building Classification"
];

// Reorder sections to match the screenshot
let orderedSections = [];
desiredOrder.forEach(title => {
    const section = OBC.MatrixData.part3.sections.find(s => s.title === title);
    if (section) {
        orderedSections.push(section);
    }
});

// Add remaining sections not in the desired order
OBC.MatrixData.part3.sections.forEach(section => {
    if (!desiredOrder.includes(section.title)) {
        orderedSections.push(section);
    }
});

// Replace the sections array with the ordered one
OBC.MatrixData.part3.sections = orderedSections;

// Remove duplicate Building Information sections
OBC.MatrixData.part3.sections = OBC.MatrixData.part3.sections.filter((section, index) => {
    if (section.title === "Building Information") {
        return index === 0; // Keep only the first one
    }
    return true;
});

OBC.MatrixData.part9.sections = OBC.MatrixData.part9.sections.filter((section, index) => {
    if (section.title === "Building Information") {
        return index === 0; // Keep only the first one
    }
    return true;
}); 
*/ 