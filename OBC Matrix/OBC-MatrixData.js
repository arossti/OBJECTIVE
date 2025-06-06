/**
 * OBC-MatrixData.js - Embedded JSON data for OBC Matrix
 * Contains the data for both Part 3 and Part 9 matrices
 */

// Ensure OBC namespace exists
window.OBC = window.OBC || {};

// Define the MatrixData object with embedded JSON
OBC.MatrixData = {
    // Part 3 Matrix Data
    part3: {
        part: "part3",
        title: "PART 3 - FIRE PROTECTION, OCCUPANT SAFETY AND ACCESSIBILITY",
        rows: [
            // Row 1 & 2 are headers, handled by static HTML or a dedicated header template.
            // Row 3-8: Project Info
            { row: 3, cells: [ { content: "Name of Practice", col: 'C' }, { fieldId: "d_3", type: "editable", colspan: 5, col: 'D' }, { content: "Seal & Signature", rowspan: 6, col: 'L' } ] },
            { row: 4, cells: [ { content: "Address 1", col: 'C' }, { fieldId: "d_4", type: "editable", colspan: 5, col: 'D' } ] },
            { row: 5, cells: [ { content: "Address 2", col: 'C' }, { fieldId: "d_5", type: "editable", colspan: 5, col: 'D' } ] },
            { row: 6, cells: [ { content: "Name of Project", col: 'C' }, { fieldId: "d_6", type: "editable", colspan: 5, col: 'D' } ] },
            { row: 7, cells: [ { content: "Location/Address", col: 'C' }, { fieldId: "d_7", type: "editable", colspan: 5, col: 'D' } ] },
            { row: 8, cells: [ { content: "Date", col: 'C' }, { fieldId: "d_8", type: "editable", colspan: 5, col: 'D' } ] },
            { row: 10, cells: [ { content: "3.00", col: 'A' }, { content: "BUILDING CODE VERSION", col: 'B' }, { fieldId: "d_10", type: "static", value: "O.Reg. 163/24", col: 'D' }, { content: "LAST CODE AMENDMENT", col: 'H' }, { fieldId: "i_10", type: "static", value: "O.Reg. 447/24", col: 'I' } ] },
            { row: 11, cells: [ { content: "3.01", col: 'A' }, { content: "PROJECT TYPE", col: 'B' }, { fieldId: "d_11", type: "dropdown", options: ["-", "New", "Addition", "Alteration", "Change of Use"], col: 'D' }, { fieldId: 'l_11', content: "[A] 1.3.3.2.", col: 'L' } ] },
            { row: 12, cells: [ { content: "3.02", col: 'A' }, { content: "MAJOR OCCUPANCY CLASSIFICATION", col: 'B', rowspan: 6 }, { content: "OCCUPANCY", col: 'D'}, { content: "USE", col: 'H'}, { fieldId: 'l_12', content: "3.1.2.", col: 'L' } ] },
            { row: 13, cells: [ { fieldId: "d_13", type: "dropdown", options: ["-", "Group A Division 1", "Group A Division 2"], col: 'D' }, { fieldId: "h_13", type: "editable", col: 'H' } ] },
            { row: 14, cells: [ { fieldId: "d_14", type: "dropdown", options: ["-", "Group A Division 1", "Group A Division 2"], col: 'D' }, { fieldId: "h_14", type: "editable", col: 'H' } ] },
            { row: 15, cells: [ { fieldId: "d_15", type: "dropdown", options: ["-", "Group A Division 1", "Group A Division 2"], col: 'D' }, { fieldId: "h_15", type: "editable", col: 'H' } ] },
            { row: 16, cells: [ { fieldId: "d_16", type: "dropdown", options: ["-", "Group A Division 1", "Group A Division 2"], col: 'D' }, { fieldId: "h_16", type: "editable", col: 'H' } ] },
            { row: 17, cells: [ { fieldId: "d_17", type: "dropdown", options: ["-", "Group A Division 1", "Group A Division 2"], col: 'D' }, { fieldId: "h_17", type: "editable", col: 'H' } ] },
            // ... Continue for all 96 rows
        ]
    },
    
    // Part 9 Matrix Data (Simplified for now)
    part9: {
        part: "part9",
        title: "PART 9 - HOUSING AND SMALL BUILDINGS",
        rows: [
            { "rowNumber": 1, "cells": [{ "content": "Part 9 content will go here...", "colspan": 12 }] }
        ]
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