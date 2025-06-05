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
        sections: [
            {
                title: "Building Information",
                fields: [
                    { 
                        id: "p3_name_of_practice",
                        label: "Name of Practice",
                        type: "text",
                        value: "",
                        placeholder: "Enter practice name"
                    },
                    {
                        id: "p3_address_1",
                        label: "Address 1",
                        type: "text",
                        value: "",
                        placeholder: "Enter address line 1"
                    },
                    {
                        id: "p3_address_2",
                        label: "Address 2",
                        type: "text",
                        value: "",
                        placeholder: "Enter address line 2"
                    },
                    {
                        id: "p3_contact",
                        label: "Contact",
                        type: "text",
                        value: "",
                        placeholder: "Enter contact name"
                    },
                    {
                        id: "p3_project_name",
                        label: "Name of Project",
                        type: "text",
                        value: "",
                        placeholder: "Enter project name"
                    },
                    {
                        id: "p3_location_address",
                        label: "Location/Address",
                        type: "text",
                        value: "",
                        placeholder: "Enter project location"
                    },
                    {
                        id: "p3_date",
                        label: "Date",
                        type: "text",
                        value: "",
                        placeholder: "Enter date"
                    }
                ]
            },
            {
                title: "Building Information",
                fields: [
                    {
                        id: "p3_building_description",
                        label: "Description",
                        type: "text",
                        value: "",
                        placeholder: "Enter building description"
                    },
                    {
                        id: "p3_project_location",
                        label: "Project Location",
                        type: "text",
                        value: "",
                        placeholder: "Enter project location"
                    }
                ]
            },
            {
                title: "Major Occupancy Classification",
                fields: [
                    {
                        id: "p3_occupancy_classification",
                        label: "Major Occupancy Classification",
                        type: "dropdown",
                        options: [
                            "Group A, Division 1 - Assembly (performing arts)",
                            "Group A, Division 2 - Assembly (not elsewhere classified)",
                            "Group A, Division 3 - Assembly (arena type)",
                            "Group A, Division 4 - Assembly (open air)",
                            "Group B, Division 1 - Detention occupancies",
                            "Group B, Division 2 - Treatment occupancies",
                            "Group B, Division 3 - Care occupancies",
                            "Group C - Residential occupancies",
                            "Group D - Business and personal services",
                            "Group E - Mercantile occupancies",
                            "Group F, Division 1 - High-hazard industrial",
                            "Group F, Division 2 - Medium-hazard industrial",
                            "Group F, Division 3 - Low-hazard industrial"
                        ],
                        value: "",
                        placeholder: "-- Select Occupancy --",
                        obcReference: "3.1.2."
                    }
                ]
            },
            {
                title: "Building Area",
                fields: [
                    {
                        id: "p3_building_area",
                        label: "Building Area (m²)",
                        type: "numeric",
                        value: "1427.20",
                        placeholder: "Enter area in m²"
                    },
                    {
                        id: "p3_existing_area",
                        label: "Existing Building Area (m²)",
                        type: "numeric",
                        value: "0.00",
                        placeholder: "Enter existing area"
                    },
                    {
                        id: "p3_proposed_addition",
                        label: "Proposed Addition (m²)",
                        type: "numeric",
                        value: "0.00",
                        placeholder: "Enter proposed addition"
                    }
                ]
            },
            {
                title: "Building Height",
                fields: [
                    {
                        id: "p3_existing_storeys",
                        label: "Existing: Number of Storeys",
                        type: "numeric",
                        value: "3",
                        placeholder: "Enter number of storeys"
                    },
                    {
                        id: "p3_proposed_storeys",
                        label: "Proposed: Number of Storeys",
                        type: "numeric",
                        value: "3",
                        placeholder: "Enter number of storeys"
                    },
                    {
                        id: "p3_building_height",
                        label: "Building Height (m)",
                        type: "numeric",
                        value: "12.8",
                        placeholder: "Enter height in meters"
                    },
                    {
                        id: "p3_mezzanines",
                        label: "Number of Mezzanines",
                        type: "numeric",
                        value: "0",
                        placeholder: "Enter number of mezzanines"
                    }
                ]
            },
            {
                title: "Building Classification",
                fields: [
                    {
                        id: "p3_building_classification",
                        label: "Building Classification",
                        type: "dropdown",
                        options: [
                            "Group A, Division 1 - Any Height, Any Area",
                            "Group A, Division 2 - Any Height, Any Area",
                            "Group A, Division 3 - Any Height, Any Area",
                            "Group A, Division 4 - Any Height, Any Area",
                            "Group B, Division 1 - Any Height, Any Area",
                            "Group B, Division 2 - Any Height, Any Area",
                            "Group B, Division 3 - Any Height, Any Area",
                            "Group C - Any Height, Any Area",
                            "Group D - Up to 6 Storeys, Any Area",
                            "Group D - Any Height, Any Area",
                            "Group E - Up to 4 Storeys, Any Area",
                            "Group E - Any Height, Any Area",
                            "Group F, Division 1 - Up to 4 Storeys, Any Area",
                            "Group F, Division 2 - Up to 6 Storeys, Any Area",
                            "Group F, Division 3 - Up to 6 Storeys, Any Area"
                        ],
                        value: "",
                        placeholder: "-- Select Classification --"
                    },
                    {
                        id: "p3_sprinklered",
                        label: "Is Building Sprinklered",
                        type: "dropdown",
                        options: [
                            "Yes - Throughout",
                            "Yes - Partial",
                            "No"
                        ],
                        value: "Yes - Throughout",
                        placeholder: "-- Select --"
                    }
                ]
            },
            {
                title: "Fire Resistance Rating",
                fields: [
                    {
                        id: "p3_floor_fire_resistance",
                        label: "Floor Assemblies (hours)",
                        type: "numeric",
                        value: "2",
                        placeholder: "Enter hours"
                    },
                    {
                        id: "p3_mezzanine_fire_resistance",
                        label: "Mezzanine Assemblies (hours)",
                        type: "numeric",
                        value: "1",
                        placeholder: "Enter hours"
                    },
                    {
                        id: "p3_roof_fire_resistance",
                        label: "Roof Assemblies (hours)",
                        type: "numeric",
                        value: "1",
                        placeholder: "Enter hours"
                    },
                    {
                        id: "p3_loadbearing_fire_resistance",
                        label: "Loadbearing Walls, Columns, Arches (hours)",
                        type: "numeric",
                        value: "2",
                        placeholder: "Enter hours"
                    }
                ]
            },
            {
                title: "Fire Separation Requirements",
                fields: [
                    {
                        id: "p3_exit_fire_separation",
                        label: "Exits (hours)",
                        type: "numeric",
                        value: "1",
                        placeholder: "Enter hours"
                    },
                    {
                        id: "p3_public_corridor_fire_separation",
                        label: "Public Corridors (hours)",
                        type: "numeric",
                        value: "1",
                        placeholder: "Enter hours"
                    },
                    {
                        id: "p3_suites_fire_separation",
                        label: "Suites (hours)",
                        type: "numeric",
                        value: "1",
                        placeholder: "Enter hours"
                    }
                ]
            },
            {
                title: "Occupant Load",
                fields: [
                    {
                        id: "p3_basement_occupants",
                        label: "Basement",
                        type: "numeric",
                        value: "0",
                        placeholder: "Enter number"
                    },
                    {
                        id: "p3_first_floor_occupants",
                        label: "First Floor",
                        type: "numeric",
                        value: "120",
                        placeholder: "Enter number"
                    },
                    {
                        id: "p3_second_floor_occupants",
                        label: "Second Floor",
                        type: "numeric",
                        value: "80",
                        placeholder: "Enter number"
                    },
                    {
                        id: "p3_third_floor_occupants",
                        label: "Third Floor",
                        type: "numeric",
                        value: "80",
                        placeholder: "Enter number"
                    },
                    {
                        id: "p3_total_occupants",
                        label: "Total Number of Occupants",
                        type: "numeric",
                        value: "280",
                        placeholder: "Enter total"
                    }
                ]
            },
            {
                title: "Plumbing Facilities",
                fields: [
                    {
                        id: "p3_male_water_closets",
                        label: "Male Water Closets Required",
                        type: "numeric",
                        value: "2",
                        placeholder: "Enter number"
                    },
                    {
                        id: "p3_female_water_closets",
                        label: "Female Water Closets Required",
                        type: "numeric",
                        value: "3",
                        placeholder: "Enter number"
                    },
                    {
                        id: "p3_male_lavatories",
                        label: "Male Lavatories Required",
                        type: "numeric",
                        value: "1",
                        placeholder: "Enter number"
                    },
                    {
                        id: "p3_female_lavatories",
                        label: "Female Lavatories Required",
                        type: "numeric",
                        value: "1",
                        placeholder: "Enter number"
                    },
                    {
                        id: "p3_universal_washrooms",
                        label: "Universal Washrooms Required",
                        type: "numeric",
                        value: "1",
                        placeholder: "Enter number"
                    },
                    {
                        id: "p3_drinking_fountains",
                        label: "Drinking Fountains Required",
                        type: "numeric",
                        value: "1",
                        placeholder: "Enter number"
                    }
                ]
            },
            {
                title: "Barrier-Free Design Requirements",
                fields: [
                    {
                        id: "p3_barrier_free_entrance",
                        label: "Barrier-Free Entrance Required",
                        type: "dropdown",
                        options: [
                            "Yes",
                            "No",
                            "N/A"
                        ],
                        value: "Yes",
                        placeholder: "-- Select --"
                    },
                    {
                        id: "p3_barrier_free_washrooms",
                        label: "Barrier-Free Washrooms Required",
                        type: "dropdown",
                        options: [
                            "Yes",
                            "No",
                            "N/A"
                        ],
                        value: "Yes",
                        placeholder: "-- Select --"
                    },
                    {
                        id: "p3_barrier_free_path",
                        label: "Barrier-Free Path of Travel Required",
                        type: "dropdown",
                        options: [
                            "Yes",
                            "No",
                            "N/A"
                        ],
                        value: "Yes",
                        placeholder: "-- Select --"
                    }
                ]
            },
            {
                title: "Superimposed Major Occupancies",
                fields: [
                    {
                        id: "p3_superimposed_occupancies",
                        label: "Superimposed Major Occupancies",
                        type: "dropdown",
                        options: [
                            "Yes",
                            "No"
                        ],
                        value: "",
                        placeholder: "-- Select --",
                        obcReference: "3.2.2.7.",
                        columnI: "EXISTING",
                        columnJ: "New"
                    }
                ]
            }
        ]
    },
    
    // Part 9 Matrix Data
    part9: {
        part: "part9",
        title: "PART 9 - HOUSING AND SMALL BUILDINGS",
        sections: [
            {
                title: "Building Information",
                fields: [
                    { 
                        id: "p9_name_of_practice",
                        label: "Name of Practice",
                        type: "text",
                        value: "",
                        placeholder: "Enter practice name"
                    },
                    {
                        id: "p9_address_1",
                        label: "Address 1",
                        type: "text",
                        value: "",
                        placeholder: "Enter address line 1"
                    },
                    {
                        id: "p9_address_2",
                        label: "Address 2",
                        type: "text",
                        value: "",
                        placeholder: "Enter address line 2"
                    },
                    {
                        id: "p9_contact",
                        label: "Contact",
                        type: "text",
                        value: "",
                        placeholder: "Enter contact name"
                    },
                    {
                        id: "p9_project_name",
                        label: "Name of Project",
                        type: "text",
                        value: "",
                        placeholder: "Enter project name"
                    },
                    {
                        id: "p9_location_address",
                        label: "Location/Address",
                        type: "text",
                        value: "",
                        placeholder: "Enter project location"
                    },
                    {
                        id: "p9_date",
                        label: "Date",
                        type: "text",
                        value: "",
                        placeholder: "Enter date"
                    }
                ]
            },
            {
                title: "Building Classification",
                fields: [
                    {
                        id: "p9_building_classification",
                        label: "Building Classification",
                        type: "dropdown",
                        options: [
                            "Single Dwelling",
                            "Semi-Detached Dwelling",
                            "Townhouse",
                            "Multi-Unit Residential (≤600m²)",
                            "Business & Personal Services (≤600m²)",
                            "Mercantile (≤600m²)",
                            "Medium-Hazard Industrial (≤600m²)",
                            "Low-Hazard Industrial (≤600m²)"
                        ],
                        value: "",
                        placeholder: "-- Select Classification --"
                    }
                ]
            },
            {
                title: "Building Area",
                fields: [
                    {
                        id: "p9_building_area",
                        label: "Building Area (m²)",
                        type: "numeric",
                        value: "245.50",
                        placeholder: "Enter area in m²"
                    },
                    {
                        id: "p9_existing_area",
                        label: "Existing Building Area (m²)",
                        type: "numeric",
                        value: "0.00",
                        placeholder: "Enter existing area"
                    },
                    {
                        id: "p9_proposed_addition",
                        label: "Proposed Addition (m²)",
                        type: "numeric",
                        value: "0.00",
                        placeholder: "Enter proposed addition"
                    }
                ]
            },
            {
                title: "Building Height",
                fields: [
                    {
                        id: "p9_existing_storeys",
                        label: "Existing: Number of Storeys",
                        type: "numeric",
                        value: "2",
                        placeholder: "Enter number of storeys"
                    },
                    {
                        id: "p9_proposed_storeys",
                        label: "Proposed: Number of Storeys",
                        type: "numeric",
                        value: "2",
                        placeholder: "Enter number of storeys"
                    },
                    {
                        id: "p9_building_height",
                        label: "Building Height (m)",
                        type: "numeric",
                        value: "8.2",
                        placeholder: "Enter height in meters"
                    }
                ]
            },
            {
                title: "Fire Protection Requirements",
                fields: [
                    {
                        id: "p9_sprinklered",
                        label: "Is Building Sprinklered",
                        type: "dropdown",
                        options: [
                            "Yes",
                            "No"
                        ],
                        value: "No",
                        placeholder: "-- Select --"
                    },
                    {
                        id: "p9_fire_resistance_rating",
                        label: "Fire Resistance Rating (minutes)",
                        type: "numeric",
                        value: "45",
                        placeholder: "Enter minutes"
                    },
                    {
                        id: "p9_fire_separations",
                        label: "Fire Separations Required",
                        type: "dropdown",
                        options: [
                            "Yes",
                            "No"
                        ],
                        value: "Yes",
                        placeholder: "-- Select --"
                    }
                ]
            },
            {
                title: "Spatial Separation",
                fields: [
                    {
                        id: "p9_limiting_distance_north",
                        label: "Limiting Distance - North (m)",
                        type: "numeric",
                        value: "3.0",
                        placeholder: "Enter distance"
                    },
                    {
                        id: "p9_limiting_distance_south",
                        label: "Limiting Distance - South (m)",
                        type: "numeric",
                        value: "7.5",
                        placeholder: "Enter distance"
                    },
                    {
                        id: "p9_limiting_distance_east",
                        label: "Limiting Distance - East (m)",
                        type: "numeric",
                        value: "6.0",
                        placeholder: "Enter distance"
                    },
                    {
                        id: "p9_limiting_distance_west",
                        label: "Limiting Distance - West (m)",
                        type: "numeric",
                        value: "5.0",
                        placeholder: "Enter distance"
                    }
                ]
            },
            {
                title: "Required Openings",
                fields: [
                    {
                        id: "p9_openings_north",
                        label: "Maximum Allowable Openings - North (%)",
                        type: "numeric",
                        value: "8",
                        placeholder: "Enter percentage"
                    },
                    {
                        id: "p9_openings_south",
                        label: "Maximum Allowable Openings - South (%)",
                        type: "numeric",
                        value: "35",
                        placeholder: "Enter percentage"
                    },
                    {
                        id: "p9_openings_east",
                        label: "Maximum Allowable Openings - East (%)",
                        type: "numeric",
                        value: "20",
                        placeholder: "Enter percentage"
                    },
                    {
                        id: "p9_openings_west",
                        label: "Maximum Allowable Openings - West (%)",
                        type: "numeric",
                        value: "15",
                        placeholder: "Enter percentage"
                    }
                ]
            },
            {
                title: "Occupant Load",
                fields: [
                    {
                        id: "p9_basement_occupants",
                        label: "Basement",
                        type: "numeric",
                        value: "2",
                        placeholder: "Enter number"
                    },
                    {
                        id: "p9_first_floor_occupants",
                        label: "First Floor",
                        type: "numeric",
                        value: "4",
                        placeholder: "Enter number"
                    },
                    {
                        id: "p9_second_floor_occupants",
                        label: "Second Floor",
                        type: "numeric",
                        value: "4",
                        placeholder: "Enter number"
                    },
                    {
                        id: "p9_total_occupants",
                        label: "Total Number of Occupants",
                        type: "numeric",
                        value: "10",
                        placeholder: "Enter total"
                    }
                ]
            },
            {
                title: "Required Exits",
                fields: [
                    {
                        id: "p9_number_of_exits",
                        label: "Number of Exits Required",
                        type: "numeric",
                        value: "2",
                        placeholder: "Enter number"
                    },
                    {
                        id: "p9_exit_width",
                        label: "Exit Width (mm)",
                        type: "numeric",
                        value: "900",
                        placeholder: "Enter width"
                    }
                ]
            }
        ]
    }
};

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