/**
 * 4011-Section10.js
 * Radiant Gains (Section 10) module for TEUI Calculator 4.011
 * 
 * Uses the consolidated declarative approach where field definitions
 * are integrated directly into the layout structure.
 */

// Ensure namespace exists
window.TEUI = window.TEUI || {};
window.TEUI.SectionModules = window.TEUI.SectionModules || {};

// Section 10: Radiant Gains Module
window.TEUI.SectionModules.sect10 = (function() {
    //==========================================================================
    // CONSOLIDATED FIELD DEFINITIONS AND LAYOUT
    //==========================================================================
    
    // Define rows with integrated field definitions
    const sectionRows = {
        // UNIT SUBHEADER - MUST COME FIRST
        "header": {
            id: "10-ID",
            rowId: "10-ID",
            label: "RG-Unts",
            cells: {
                c: { content: "" }, // Empty column for row labels
                d: { content: "AREA m² " }, // Empty column for row labels
                e: { content: "ORIENTATION", classes: ["section-subheader", "align-center"], style: "white-space: pre-line;" },
                f: { content: "SHGC", classes: ["section-subheader", "align-center"], style: "white-space: pre-line;" },
                g: { content: "WINTER SHADING+++++++", classes: ["section-subheader", "align-center"], style: "white-space: pre-line;" },
                h: { content: "SUMMER SHADING+++++++", classes: ["section-subheader", "align-center"], style: "white-space: pre-line;" },
                i: { content: "HTG GAIN kWh/yr", classes: ["section-subheader", "align-center"], style: "white-space: pre-line;" },
                j: { content: "HTG GAIN %", classes: ["section-subheader", "align-center"], style: "white-space: pre-line;" },
                k: { content: "COOL GAIN kWh/yr", classes: ["section-subheader", "align-center"], style: "white-space: pre-line;" },
                l: { content: "COOL GAIN %", classes: ["section-subheader", "align-center"], style: "white-space: pre-line;" },
                m: { content: "G-FACTOR kWh/m²/yr", classes: ["section-subheader", "align-center"], style: "white-space: pre-line;" }
            }
        },
        
        // Row 73: G.7 Doors
        "73": {
            id: "G.7",
            rowId: "G.7",
            label: "Doors",
            cells: {
                c: { label: "Doors" },
                d: { 
                    fieldId: "d_73", 
                    type: "editable", 
                    value: "7.50",
                    section: "envelopeRadiantGains",
                    classes: ["user-input", "col-medium"]
                },
                e: { 
                    fieldId: "e_73", 
                    type: "dropdown", 
                    dropdownId: "dd_e_73", 
                    value: "Average",
                    section: "envelopeRadiantGains",
                    options: [
                        { value: "North", name: "North" },
                        { value: "NorthEast", name: "NorthEast" },
                        { value: "East", name: "East" },
                        { value: "SouthEast", name: "SouthEast" },
                        { value: "South", name: "South" },
                        { value: "SouthWest", name: "SouthWest" },
                        { value: "West", name: "West" },
                        { value: "NorthWest", name: "NorthWest" },
                        { value: "Average", name: "Average" },
                        { value: "Skylight", name: "Skylight" }
                    ],
                    classes: ["col-medium"]
                },
                f: { 
                    fieldId: "f_73", 
                    type: "dropdown", 
                    dropdownId: "dd_f_73", 
                    value: "0.30",
                    section: "envelopeRadiantGains",
                    options: [
                        { value: "0.20", name: "0.20" },
                        { value: "0.25", name: "0.25" },
                        { value: "0.30", name: "0.30" },
                        { value: "0.35", name: "0.35" },
                        { value: "0.40", name: "0.40" },
                        { value: "0.45", name: "0.45" },
                        { value: "0.50", name: "0.50" },
                        { value: "0.55", name: "0.55" },
                        { value: "0.60", name: "0.60" },
                        { value: "0.65", name: "0.65" }
                    ],
                    classes: ["col-small"]
                },
                g: { 
                    fieldId: "g_73", 
                    type: "percentage", 
                    value: "0", 
                    min: 0, 
                    max: 100, 
                    step: 1,
                    section: "envelopeRadiantGains",
                    classes: ["col-large", "slider-container"]
                },
                h: { 
                    fieldId: "h_73", 
                    type: "percentage", 
                    value: "100", 
                    min: 0, 
                    max: 100, 
                    step: 1,
                    section: "envelopeRadiantGains",
                    classes: ["col-large", "slider-container"]
                },
                i: { 
                    fieldId: "i_73", 
                    type: "calculated", 
                    value: "225.00",
                    section: "envelopeRadiantGains",
                    dependencies: ["d_73", "e_73", "f_73", "g_73"]
                },
                j: { 
                    fieldId: "j_73", 
                    type: "calculated", 
                    value: "1.55%",
                    section: "envelopeRadiantGains",
                    dependencies: ["i_73", "h_79"]
                },
                k: { 
                    fieldId: "k_73", 
                    type: "calculated", 
                    value: "0.00",
                    section: "envelopeRadiantGains",
                    dependencies: ["d_73", "e_73", "f_73", "h_73"]
                },
                l: { 
                    fieldId: "l_73", 
                    type: "calculated", 
                    value: "0.00%",
                    section: "envelopeRadiantGains",
                    dependencies: ["k_73", "j_79"]
                },
                m: { 
                    fieldId: "m_73", 
                    type: "calculated", 
                    value: "50",
                    section: "envelopeRadiantGains",
                    dependencies: ["e_73"],
                    classes: ["reference-value"]
                }
            }
        },
        
        // Row 74: G.8.1 Window Area North
        "74": {
            id: "G.8.1",
            rowId: "G.8.1",
            label: "Window Area North",
            cells: {
                c: { label: "Window Area North" },
                d: { 
                    fieldId: "d_74", 
                    type: "editable", 
                    value: "81.14",
                    section: "envelopeRadiantGains",
                    classes: ["user-input", "col-medium"]
                },
                e: { 
                    fieldId: "e_74", 
                    type: "dropdown", 
                    dropdownId: "dd_e_74", 
                    value: "North",
                    section: "envelopeRadiantGains",
                    options: [
                        { value: "North", name: "North" },
                        { value: "NorthEast", name: "NorthEast" },
                        { value: "East", name: "East" },
                        { value: "SouthEast", name: "SouthEast" },
                        { value: "South", name: "South" },
                        { value: "SouthWest", name: "SouthWest" },
                        { value: "West", name: "West" },
                        { value: "NorthWest", name: "NorthWest" },
                        { value: "Average", name: "Average" },
                        { value: "Skylight", name: "Skylight" }
                    ],
                    classes: ["col-medium"]
                },
                f: { 
                    fieldId: "f_74", 
                    type: "dropdown", 
                    dropdownId: "dd_f_74", 
                    value: "0.50",
                    section: "envelopeRadiantGains",
                    options: [
                        { value: "0.20", name: "0.20" },
                        { value: "0.25", name: "0.25" },
                        { value: "0.30", name: "0.30" },
                        { value: "0.35", name: "0.35" },
                        { value: "0.40", name: "0.40" },
                        { value: "0.45", name: "0.45" },
                        { value: "0.50", name: "0.50" },
                        { value: "0.55", name: "0.55" },
                        { value: "0.60", name: "0.60" },
                        { value: "0.65", name: "0.65" }
                    ],
                    classes: ["col-small"]
                },
                g: { 
                    fieldId: "g_74", 
                    type: "percentage", 
                    value: "0", 
                    min: 0, 
                    max: 100, 
                    step: 1,
                    section: "envelopeRadiantGains",
                    classes: ["col-large", "slider-container"]
                },
                h: { 
                    fieldId: "h_74", 
                    type: "percentage", 
                    value: "100", 
                    min: 0, 
                    max: 100, 
                    step: 1,
                    section: "envelopeRadiantGains",
                    classes: ["col-large", "slider-container"]
                },
                i: { 
                    fieldId: "i_74", 
                    type: "calculated", 
                    value: "106.29",
                    section: "envelopeRadiantGains",
                    dependencies: ["d_74", "e_74", "f_74", "g_74"]
                },
                j: { 
                    fieldId: "j_74", 
                    type: "calculated", 
                    value: "0.73%",
                    section: "envelopeRadiantGains",
                    dependencies: ["i_74", "h_79"]
                },
                k: { 
                    fieldId: "k_74", 
                    type: "calculated", 
                    value: "0.00",
                    section: "envelopeRadiantGains",
                    dependencies: ["d_74", "e_74", "f_74", "h_74"]
                },
                l: { 
                    fieldId: "l_74", 
                    type: "calculated", 
                    value: "0.00%",
                    section: "envelopeRadiantGains",
                    dependencies: ["k_74", "j_79"]
                },
                m: { 
                    fieldId: "m_74", 
                    type: "calculated", 
                    value: "1.31",
                    section: "envelopeRadiantGains",
                    dependencies: ["e_74"],
                    classes: ["reference-value"]
                }
            }
        },
        
        // Row 75: G.8.2 Window Area East
        "75": {
            id: "G.8.2",
            rowId: "G.8.2",
            label: "Window Area East",
            cells: {
                c: { label: "Window Area East" },
                d: { 
                    fieldId: "d_75", 
                    type: "editable", 
                    value: "3.83",
                    section: "envelopeRadiantGains",
                    classes: ["user-input"]
                },
                e: { 
                    fieldId: "e_75", 
                    type: "dropdown", 
                    dropdownId: "dd_e_75", 
                    value: "East",
                    section: "envelopeRadiantGains",
                    options: [
                        { value: "North", name: "North" },
                        { value: "NorthEast", name: "NorthEast" },
                        { value: "East", name: "East" },
                        { value: "SouthEast", name: "SouthEast" },
                        { value: "South", name: "South" },
                        { value: "SouthWest", name: "SouthWest" },
                        { value: "West", name: "West" },
                        { value: "NorthWest", name: "NorthWest" },
                        { value: "Average", name: "Average" },
                        { value: "Skylight", name: "Skylight" }
                    ]
                },
                f: { 
                    fieldId: "f_75", 
                    type: "dropdown", 
                    dropdownId: "dd_f_75", 
                    value: "0.50",
                    section: "envelopeRadiantGains",
                    options: [
                        { value: "0.20", name: "0.20" },
                        { value: "0.25", name: "0.25" },
                        { value: "0.30", name: "0.30" },
                        { value: "0.35", name: "0.35" },
                        { value: "0.40", name: "0.40" },
                        { value: "0.45", name: "0.45" },
                        { value: "0.50", name: "0.50" },
                        { value: "0.55", name: "0.55" },
                        { value: "0.60", name: "0.60" },
                        { value: "0.65", name: "0.65" }
                    ]
                },
                g: { 
                    fieldId: "g_75", 
                    type: "percentage", 
                    value: "0", 
                    min: 0, 
                    max: 100, 
                    step: 1,
                    section: "envelopeRadiantGains"
                },
                h: { 
                    fieldId: "h_75", 
                    type: "percentage", 
                    value: "100", 
                    min: 0, 
                    max: 100, 
                    step: 1,
                    section: "envelopeRadiantGains"
                },
                i: { 
                    fieldId: "i_75", 
                    type: "calculated", 
                    value: "294.68",
                    section: "envelopeRadiantGains",
                    dependencies: ["d_75", "e_75", "f_75", "g_75"]
                },
                j: { 
                    fieldId: "j_75", 
                    type: "calculated", 
                    value: "2.04%",
                    section: "envelopeRadiantGains",
                    dependencies: ["i_75", "h_79"]
                },
                k: { 
                    fieldId: "k_75", 
                    type: "calculated", 
                    value: "0.00",
                    section: "envelopeRadiantGains",
                    dependencies: ["d_75", "e_75", "f_75", "h_75"]
                },
                l: { 
                    fieldId: "l_75", 
                    type: "calculated", 
                    value: "0.00%",
                    section: "envelopeRadiantGains",
                    dependencies: ["k_75", "j_79"]
                },
                m: { 
                    fieldId: "m_75", 
                    type: "calculated", 
                    value: "76.94",
                    section: "envelopeRadiantGains",
                    dependencies: ["e_75"],
                    classes: ["reference-value"]
                }
            }
        },
        
        // Row 76: G.8.3 Window Area South
        "76": {
            id: "G.8.3",
            rowId: "G.8.3",
            label: "Window Area South",
            cells: {
                c: { label: "Window Area South" },
                d: { 
                    fieldId: "d_76", 
                    type: "editable", 
                    value: "159.00",
                    section: "envelopeRadiantGains",
                    classes: ["user-input"]
                },
                e: { 
                    fieldId: "e_76", 
                    type: "dropdown", 
                    dropdownId: "dd_e_76", 
                    value: "South",
                    section: "envelopeRadiantGains",
                    options: [
                        { value: "North", name: "North" },
                        { value: "NorthEast", name: "NorthEast" },
                        { value: "East", name: "East" },
                        { value: "SouthEast", name: "SouthEast" },
                        { value: "South", name: "South" },
                        { value: "SouthWest", name: "SouthWest" },
                        { value: "West", name: "West" },
                        { value: "NorthWest", name: "NorthWest" },
                        { value: "Average", name: "Average" },
                        { value: "Skylight", name: "Skylight" }
                    ]
                },
                f: { 
                    fieldId: "f_76", 
                    type: "dropdown", 
                    dropdownId: "dd_f_76", 
                    value: "0.50",
                    section: "envelopeRadiantGains",
                    options: [
                        { value: "0.20", name: "0.20" },
                        { value: "0.25", name: "0.25" },
                        { value: "0.30", name: "0.30" },
                        { value: "0.35", name: "0.35" },
                        { value: "0.40", name: "0.40" },
                        { value: "0.45", name: "0.45" },
                        { value: "0.50", name: "0.50" },
                        { value: "0.55", name: "0.55" },
                        { value: "0.60", name: "0.60" },
                        { value: "0.65", name: "0.65" }
                    ]
                },
                g: { 
                    fieldId: "g_76", 
                    type: "percentage", 
                    value: "0", 
                    min: 0, 
                    max: 100, 
                    step: 1,
                    section: "envelopeRadiantGains"
                },
                h: { 
                    fieldId: "h_76", 
                    type: "percentage", 
                    value: "100", 
                    min: 0, 
                    max: 100, 
                    step: 1,
                    section: "envelopeRadiantGains"
                },
                i: { 
                    fieldId: "i_76", 
                    type: "calculated", 
                    value: "11,247.66",
                    section: "envelopeRadiantGains",
                    dependencies: ["d_76", "e_76", "f_76", "g_76"]
                },
                j: { 
                    fieldId: "j_76", 
                    type: "calculated", 
                    value: "77.69%",
                    section: "envelopeRadiantGains",
                    dependencies: ["i_76", "h_79"]
                },
                k: { 
                    fieldId: "k_76", 
                    type: "calculated", 
                    value: "0.00",
                    section: "envelopeRadiantGains",
                    dependencies: ["d_76", "e_76", "f_76", "h_76"]
                },
                l: { 
                    fieldId: "l_76", 
                    type: "calculated", 
                    value: "0.00%",
                    section: "envelopeRadiantGains",
                    dependencies: ["k_76", "j_79"]
                },
                m: { 
                    fieldId: "m_76", 
                    type: "calculated", 
                    value: "70.74",
                    section: "envelopeRadiantGains",
                    dependencies: ["e_76"],
                    classes: ["reference-value"]
                }
            }
        },
        
        // Row 77: G.8.4 Window Area West
        "77": {
            id: "G.8.4",
            rowId: "G.8.4",
            label: "Window Area West",
            cells: {
                c: { label: "Window Area West" },
                d: { 
                    fieldId: "d_77", 
                    type: "editable", 
                    value: "100.66",
                    section: "envelopeRadiantGains",
                    classes: ["user-input"]
                },
                e: { 
                    fieldId: "e_77", 
                    type: "dropdown", 
                    dropdownId: "dd_e_77", 
                    value: "West",
                    section: "envelopeRadiantGains",
                    options: [
                        { value: "North", name: "North" },
                        { value: "NorthEast", name: "NorthEast" },
                        { value: "East", name: "East" },
                        { value: "SouthEast", name: "SouthEast" },
                        { value: "South", name: "South" },
                        { value: "SouthWest", name: "SouthWest" },
                        { value: "West", name: "West" },
                        { value: "NorthWest", name: "NorthWest" },
                        { value: "Average", name: "Average" },
                        { value: "Skylight", name: "Skylight" }
                    ]
                },
                f: { 
                    fieldId: "f_77", 
                    type: "dropdown", 
                    dropdownId: "dd_f_77", 
                    value: "0.50",
                    section: "envelopeRadiantGains",
                    options: [
                        { value: "0.20", name: "0.20" },
                        { value: "0.25", name: "0.25" },
                        { value: "0.30", name: "0.30" },
                        { value: "0.35", name: "0.35" },
                        { value: "0.40", name: "0.40" },
                        { value: "0.45", name: "0.45" },
                        { value: "0.50", name: "0.50" },
                        { value: "0.55", name: "0.55" },
                        { value: "0.60", name: "0.60" },
                        { value: "0.65", name: "0.65" }
                    ]
                },
                g: { 
                    fieldId: "g_77", 
                    type: "percentage", 
                    value: "0", 
                    min: 0, 
                    max: 100, 
                    step: 1,
                    section: "envelopeRadiantGains"
                },
                h: { 
                    fieldId: "h_77", 
                    type: "percentage", 
                    value: "90", 
                    min: 0, 
                    max: 100, 
                    step: 1,
                    section: "envelopeRadiantGains"
                },
                i: { 
                    fieldId: "i_77", 
                    type: "calculated", 
                    value: "2,603.07",
                    section: "envelopeRadiantGains",
                    dependencies: ["d_77", "e_77", "f_77", "g_77"]
                },
                j: { 
                    fieldId: "j_77", 
                    type: "calculated", 
                    value: "17.98%",
                    section: "envelopeRadiantGains",
                    dependencies: ["i_77", "h_79"]
                },
                k: { 
                    fieldId: "k_77", 
                    type: "calculated", 
                    value: "130.15",
                    section: "envelopeRadiantGains",
                    dependencies: ["d_77", "e_77", "f_77", "h_77"]
                },
                l: { 
                    fieldId: "l_77", 
                    type: "calculated", 
                    value: "100.00%",
                    section: "envelopeRadiantGains",
                    dependencies: ["k_77", "j_79"]
                },
                m: { 
                    fieldId: "m_77", 
                    type: "calculated", 
                    value: "25.86",
                    section: "envelopeRadiantGains",
                    dependencies: ["e_77"],
                    classes: ["reference-value"]
                }
            }
        },
        
        // Row 78: G.8.5 Skylights
        "78": {
            id: "G.8.5",
            rowId: "G.8.5",
            label: "Skylights",
            cells: {
                c: { label: "Skylights" },
                d: { 
                    fieldId: "d_78", 
                    type: "editable", 
                    value: "0.00",
                    section: "envelopeRadiantGains",
                    classes: ["user-input"]
                },
                e: { 
                    fieldId: "e_78", 
                    type: "dropdown", 
                    dropdownId: "dd_e_78", 
                    value: "Skylight",
                    section: "envelopeRadiantGains",
                    options: [
                        { value: "North", name: "North" },
                        { value: "NorthEast", name: "NorthEast" },
                        { value: "East", name: "East" },
                        { value: "SouthEast", name: "SouthEast" },
                        { value: "South", name: "South" },
                        { value: "SouthWest", name: "SouthWest" },
                        { value: "West", name: "West" },
                        { value: "NorthWest", name: "NorthWest" },
                        { value: "Average", name: "Average" },
                        { value: "Skylight", name: "Skylight" }
                    ]
                },
                f: { 
                    fieldId: "f_78", 
                    type: "dropdown", 
                    dropdownId: "dd_f_78", 
                    value: "0.50",
                    section: "envelopeRadiantGains",
                    options: [
                        { value: "0.20", name: "0.20" },
                        { value: "0.25", name: "0.25" },
                        { value: "0.30", name: "0.30" },
                        { value: "0.35", name: "0.35" },
                        { value: "0.40", name: "0.40" },
                        { value: "0.45", name: "0.45" },
                        { value: "0.50", name: "0.50" },
                        { value: "0.55", name: "0.55" },
                        { value: "0.60", name: "0.60" },
                        { value: "0.65", name: "0.65" }
                    ]
                },
                g: { 
                    fieldId: "g_78", 
                    type: "percentage", 
                    value: "0", 
                    min: 0, 
                    max: 100, 
                    step: 1,
                    section: "envelopeRadiantGains"
                },
                h: { 
                    fieldId: "h_78", 
                    type: "percentage", 
                    value: "80", 
                    min: 0, 
                    max: 100, 
                    step: 1,
                    section: "envelopeRadiantGains"
                },
                i: { 
                    fieldId: "i_78", 
                    type: "calculated", 
                    value: "0.00",
                    section: "envelopeRadiantGains",
                    dependencies: ["d_78", "e_78", "f_78", "g_78"]
                },
                j: { 
                    fieldId: "j_78", 
                    type: "calculated", 
                    value: "0.00%",
                    section: "envelopeRadiantGains",
                    dependencies: ["i_78", "h_79"]
                },
                k: { 
                    fieldId: "k_78", 
                    type: "calculated", 
                    value: "0.00",
                    section: "envelopeRadiantGains",
                    dependencies: ["d_78", "e_78", "f_78", "h_78"]
                },
                l: { 
                    fieldId: "l_78", 
                    type: "calculated", 
                    value: "0.00%",
                    section: "envelopeRadiantGains",
                    dependencies: ["k_78", "j_79"]
                },
                m: { 
                    fieldId: "m_78", 
                    type: "calculated", 
                    value: "75",
                    section: "envelopeRadiantGains",
                    dependencies: ["e_78"],
                    classes: ["reference-value"]
                }
            }
        },
        
        // Row 79: G.1 Subtotal Solar Gains
        "79": {
            id: "G.1",
            rowId: "G.1",
            label: "Subtotal Solar Gains",
            cells: {
                c: { label: "Subtotal Solar Gains" },
                d: { content: "" }, // Empty cell
                e: { content: "" }, // Empty cell
                f: { content: "" }, // Empty cell
                g: { content: "" }, // Empty cell
                h: { content: "" }, // Empty cell
                i: { 
                    fieldId: "h_79", 
                    type: "calculated", 
                    value: "14,626.70",
                    section: "radiantGains",
                    dependencies: ["h_73", "h_74", "h_75", "h_76", "h_77", "h_78"]
                },
                j: { 
                    fieldId: "i_79", 
                    type: "calculated", 
                    value: "100%",
                    section: "radiantGains"
                },
                k: { 
                    fieldId: "j_79", 
                    type: "calculated", 
                    value: "130.15",
                    section: "radiantGains",
                    dependencies: ["j_73", "j_74", "j_75", "j_76", "j_77", "j_78"]
                },
                l: { 
                    fieldId: "k_79", 
                    type: "calculated", 
                    value: "100%",
                    section: "radiantGains"
                }
            }
        },
        
        // Row 80: G.2 Gains Utilization Factor (n-Factor)
        "80": {
            id: "G.2",
            rowId: "G.2",
            label: "Gains Utilization Factor (n-Factor)",
            cells: {
                c: { label: "Gains Utilization Factor (n-Factor)" },
                d: { 
                    fieldId: "d_80", 
                    type: "dropdown", 
                    dropdownId: "dd_d_80", 
                    value: "NRC 40%",
                    section: "radiantGains",
                    options: [
                        { value: "NRC 0%", name: "NRC 0%" },
                        { value: "NRC 40%", name: "NRC 40%" },
                        { value: "NRC 50%", name: "NRC 50%" },
                        { value: "NRC 60%", name: "NRC 60%" },
                        { value: "PH Method", name: "PH Method" }
                    ]
                },
                e: { 
                    fieldId: "e_80", 
                    type: "calculated", 
                    value: "114,698.37",
                    section: "radiantGains",
                    dependencies: ["h_79", "i_71"]
                },
                f: { content: "Total Gains" },
                g: { 
                    fieldId: "g_80", 
                    type: "calculated", 
                    value: "40.00%",
                    section: "radiantGains",
                    dependencies: ["d_80"]
                },
                h: { content: "" }, // Empty cell
                i: { 
                    fieldId: "i_80", 
                    type: "calculated", 
                    value: "45,879.35",
                    section: "radiantGains",
                    dependencies: ["e_80", "g_80"]
                },
                j: { 
                    content: "G.3 nGains", 
                    classes: ["tooltip-cell"],
                    "data-tooltip": "G.3 Net Usable Gains by Method Selected"
                }
            }
        },
        
        // Row 81: G.4 Net Usable Heating Season Gains
        "81": {
            id: "G.4",
            rowId: "G.4",
            label: "Net Usable Heating Season Gains",
            cells: {
                c: { label: "Net Usable Heating Season Gains" },
                d: { 
                    content: "PH Method",
                    classes: ["reference-value"] // Use reference style (typically red text in the Excel)
                },
                e: { 
                    fieldId: "e_81", 
                    type: "calculated", 
                    value: "114,698.37",
                    section: "radiantGains",
                    dependencies: ["e_80"],
                    classes: ["reference-value"] // Apply reference styling
                },
                f: { 
                    content: "Total Gains", 
                    classes: ["reference-value"]
                },
                g: { 
                    fieldId: "g_81", 
                    type: "calculated", 
                    value: "94.43%",
                    section: "radiantGains",
                    classes: ["reference-value"] // Apply reference styling
                },
                h: { content: "", classes: ["reference-value"] }, // Empty cell
                i: { 
                    fieldId: "i_81", 
                    type: "calculated", 
                    value: "108,307.67",
                    section: "radiantGains",
                    dependencies: ["e_81", "g_81"],
                    classes: ["reference-value"] // Apply reference styling
                },
                j: { 
                    content: "G.4 nGains", 
                    classes: ["reference-value", "tooltip-cell"],
                    "data-tooltip": "Net Usable Gains by PHPP Method (Reference)"
                }
            }
        },
        
        // Row 82: G.5 Net UN-usable Htg. Gains
        "82": {
            id: "G.5",
            rowId: "G.5",
            label: "Net UN-usable Htg. Gains",
            cells: {
                c: { label: "Net UN-usable Htg. Gains" },
                i: { 
                    fieldId: "i_82", 
                    type: "calculated", 
                    value: "68,819.02",
                    section: "radiantGains",
                    dependencies: ["h_80", "k_80"]
                }
            }
        }
    };
    
    //==========================================================================
    // ACCESSOR METHODS TO EXTRACT FIELDS AND LAYOUT
    //==========================================================================
    
    /**
     * Extract field definitions from the integrated layout
     * This method is required for compatibility with the FieldManager
     */
    function getFields() {
        try {
            const fields = {};
            
            // Extract field definitions from all rows except the header
            Object.entries(sectionRows).forEach(([rowKey, row]) => {
                if (rowKey === "header") return; // Skip the header row
                if (!row.cells) return;
                
                // Process each cell in the row
                Object.entries(row.cells).forEach(([colKey, cell]) => {
                    if (cell.fieldId && cell.type) {
                        // Create field definition with all relevant properties
                        fields[cell.fieldId] = {
                            type: cell.type,
                            label: cell.label || row.label,
                            defaultValue: cell.value || "",
                            section: cell.section || "radiantGains"
                        };
                        
                        // Copy additional field properties if they exist
                        if (cell.dropdownId) fields[cell.fieldId].dropdownId = cell.dropdownId;
                        if (cell.options) fields[cell.fieldId].options = cell.options;
                        if (cell.getOptions) fields[cell.fieldId].getOptions = cell.getOptions;
                        if (cell.dependencies) fields[cell.fieldId].dependencies = cell.dependencies;
                        if (cell.min !== undefined) fields[cell.fieldId].min = cell.min;
                        if (cell.max !== undefined) fields[cell.fieldId].max = cell.max;
                        if (cell.step !== undefined) fields[cell.fieldId].step = cell.step;
                    }
                });
            });
            
            return fields;
        } catch (error) {
            // console.error("Error in getFields:", error);
            return {}; // Return empty object to avoid breaking the application
        }
    }
    
    /**
     * Extract dropdown options from the integrated layout
     * Required for backward compatibility
     */
    function getDropdownOptions() {
        try {
            const options = {};
            
            // Extract dropdown options from all cells with dropdownId
            Object.values(sectionRows).forEach(row => {
                if (!row.cells) return;
                
                Object.values(row.cells).forEach(cell => {
                    if (cell.dropdownId && cell.options) {
                        options[cell.dropdownId] = cell.options;
                    }
                });
            });
            
            return options;
        } catch (error) {
            // console.error("Error in getDropdownOptions:", error);
            return {}; // Return empty object to avoid breaking the application
        }
    }
    
    /**
     * Generate layout from integrated row definitions
     * This converts our compact definition to the format expected by the renderer
     */
    function getLayout() {
        try {
            // IMPORTANT: To ensure the header appears first, we process the rows in 
            // a specific order: header first, then all other rows
            
            // Start with an empty array for rows
            const layoutRows = [];
            
            // First add the header row if it exists
            if (sectionRows["header"]) {
                layoutRows.push(createLayoutRow(sectionRows["header"]));
            }
            
            // Then add all other rows in their original order, excluding the header
            Object.entries(sectionRows).forEach(([key, row]) => {
                if (key !== "header") {
                    layoutRows.push(createLayoutRow(row));
                }
            });
            
            return { rows: layoutRows };
        } catch (error) {
            // console.error("Error in getLayout:", error);
            return { rows: [] }; // Return empty rows to avoid breaking the application
        }
    }
    
    /**
     * Helper function to convert a row definition to the layout format
     * This function handles the conversion of column C cells for proper row labels
     */
    function createLayoutRow(row) {
        // Create standard row structure
        const rowDef = {
            id: row.id,
            cells: [
                {}, // Empty column A
                {}  // ID column B (auto-populated)
            ]
        };
        
        // Add cells C through N based on the row definition
        const columns = ['c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n'];
        
        // For each column, add the cell definition if it exists in the row
        columns.forEach(col => {
            if (row.cells && row.cells[col]) {
                // Create a simplified cell definition for the renderer
                // without the extra field properties
                const cell = { ...row.cells[col] };
                
                // Special handling for column C to support both label patterns
                if (col === 'c') {
                    // If using content+type pattern, convert to label pattern
                    if (cell.type === 'label' && cell.content && !cell.label) {
                        cell.label = cell.content;
                        delete cell.type;    // Not needed for rendering
                        delete cell.content; // Not needed once we have label
                    }
                    // If neither label nor content exists, use row's label as fallback
                    else if (!cell.label && !cell.content && row.label) {
                        cell.label = row.label;
                    }
                }
                
                // Remove field-specific properties that aren't needed for rendering
                // BUT preserve the classes property which is critical for styling
                delete cell.getOptions;
                delete cell.section;
                delete cell.dependencies;
                
                rowDef.cells.push(cell);
            } else {
                // Add empty cell if not defined
                // Special handling for column C - use row's label if available
                if (col === 'c' && !row.cells?.c && row.label) {
                    rowDef.cells.push({ label: row.label });
                } else {
                    // Otherwise add empty cell
                    rowDef.cells.push({});
                }
            }
        });
        
        return rowDef;
    }
    
    //==========================================================================
    // EVENT HANDLING AND CALCULATIONS
    //==========================================================================
    
    /**
     * Calculate solar gains for windows and doors based on area, SHGC, and shading
     */
    function calculateSolarGains() {
        try {
            // Calculate solar gains for each orientation
            calculateOrientationGains("73");    // Doors (uses average gain factor)
            calculateOrientationGains("74");    // North Windows
            calculateOrientationGains("75");    // East Windows
            calculateOrientationGains("76");    // South Windows
            calculateOrientationGains("77");    // West Windows
            calculateOrientationGains("78");    // Skylights
            
            // Calculate subtotals
            calculateSubtotals();
            
            // Calculate utilization factors
            calculateUtilizationFactors();
        } catch (error) {
            // console.error('Error calculating solar gains:', error);
        }
    }
    
    /**
     * Calculate solar gains for a specific orientation
     * @param {string} rowId - Row ID for the element (e.g., "73" for doors)
     */
    function calculateOrientationGains(rowId) {
        try {
            // Get relevant values
            const area = getNumericValue(`d_${rowId}`);
            const orientation = getFieldValue(`e_${rowId}`);
            const shgc = getNumericValue(`f_${rowId}`);
            const winterShading = getNumericValue(`g_${rowId}`) / 100; // Convert to decimal
            const summerShading = getNumericValue(`h_${rowId}`) / 100; // Convert to decimal
            
            // Get climate zone from section 3 if available
            const climateZone = getNumericValue("j_19") || 6.0; // Default to zone 6 if not available
            
            // Calculate gain factor based on orientation and climate zone
            const gainFactor = calculateGainFactor(orientation, climateZone);
            
            // Store the gain factor in column m
            setCalculatedValue(`m_${rowId}`, formatNumber(gainFactor));
            
            // Calculate heating season solar gains
            // Original formula: Area * SHGC * GainFactor * (1 - WinterShading)
            // Corrected formula based on reference SHGC of 0.5: 
            // Area * GainFactor * (SHGC/0.5) * (1 - WinterShading)
            const heatingGains = area * gainFactor * (shgc / 0.5) * (1 - winterShading);
            
            // Calculate cooling season solar gains
            // Corrected formula with reference SHGC adjustment:
            // Area * GainFactor * (SHGC/0.5) * 0.1 * (1 - SummerShading)
            const coolingGains = area * gainFactor * (shgc / 0.5) * 0.1 * (1 - summerShading);
            
            // Update calculated fields
            setCalculatedValue(`i_${rowId}`, formatNumber(heatingGains));
            setCalculatedValue(`k_${rowId}`, formatNumber(coolingGains));
            
            return {
                heatingGains,
                coolingGains,
                gainFactor
            };
        } catch (error) {
            // console.error(`Error calculating orientation gains for row ${rowId}:`, error);
            return { heatingGains: 0, coolingGains: 0, gainFactor: 0 };
        }
    }
    
    /**
     * Calculate subtotals for solar gains
     */
    function calculateSubtotals() {
        try {
            // Calculate total heating gains
            const heatingGains = [
                getNumericValue("i_73"), // Doors
                getNumericValue("i_74"), // North
                getNumericValue("i_75"), // East
                getNumericValue("i_76"), // South
                getNumericValue("i_77"), // West
                getNumericValue("i_78")  // Skylights
            ].reduce((sum, val) => sum + val, 0);
            
            // Calculate total cooling gains
            const coolingGains = [
                getNumericValue("k_73"), // Doors
                getNumericValue("k_74"), // North
                getNumericValue("k_75"), // East
                getNumericValue("k_76"), // South
                getNumericValue("k_77"), // West
                getNumericValue("k_78")  // Skylights
            ].reduce((sum, val) => sum + val, 0);
            
            // Update subtotal fields
            setCalculatedValue("h_79", formatNumber(heatingGains));
            setCalculatedValue("j_79", formatNumber(coolingGains));
            
            // Update percentage fields for each element
            updateHeatingPercentages(heatingGains);
            updateCoolingPercentages(coolingGains);
            
            return {
                heatingGains,
                coolingGains
            };
        } catch (error) {
            // console.error('Error calculating subtotals:', error);
            return { heatingGains: 0, coolingGains: 0 };
        }
    }
    
    /**
     * Update heating gain percentages for each element
     */
    function updateHeatingPercentages(totalHeatingGains) {
        if (totalHeatingGains <= 0) return;
        
        // Calculate and update percentage for each element
        ["73", "74", "75", "76", "77", "78"].forEach(rowId => {
            const elementGains = getNumericValue(`i_${rowId}`);
            const percentage = (elementGains / totalHeatingGains) * 100;
            setCalculatedValue(`j_${rowId}`, `${percentage.toFixed(2)}%`);
        });
    }
    
    /**
     * Update cooling gain percentages for each element
     */
    function updateCoolingPercentages(totalCoolingGains) {
        if (totalCoolingGains <= 0) return;
        
        // Calculate and update percentage for each element
        ["73", "74", "75", "76", "77", "78"].forEach(rowId => {
            const elementGains = getNumericValue(`k_${rowId}`);
            const percentage = (elementGains / totalCoolingGains) * 100;
            setCalculatedValue(`l_${rowId}`, `${percentage.toFixed(2)}%`);
        });
    }
    
    /**
     * Calculate utilization factors
     */
    function calculateUtilizationFactors() {
        try {
            // Get total solar gains
            const solarGains = getNumericValue("h_79");
            
            // Get internal gains from Section 9 if available
            const internalGains = getNumericValue("i_71") || 100071.67; // Default if not available
            
            // Calculate total gains (solar + internal)
            const totalGains = solarGains + internalGains;
            setCalculatedValue("e_80", formatNumber(totalGains));
            
            // Set the same value for PH Method reference in row 81
            setCalculatedValue("e_81", formatNumber(totalGains));
            
            //=====================================================================
            // PART 1: Calculate utilization factor based on selected method in row 80
            //=====================================================================
            
            // Get utilization method and factor
            const utilizationMethod = getFieldValue("d_80") || "NRC 40%"; // Default to NRC 40%
            let utilizationFactor = 0.4; // Default to 40%
            
            // Implementation of the G80 formula based on dropdown selection
            // Options are: "NRC 0%", "NRC 40%", "NRC 50%", "NRC 60%", "PH Method"
            if (utilizationMethod === "NRC 0%") {
                utilizationFactor = 0;
            } else if (utilizationMethod === "NRC 40%") {
                utilizationFactor = 0.4;
            } else if (utilizationMethod === "NRC 50%") {
                utilizationFactor = 0.5;
            } else if (utilizationMethod === "NRC 60%") {
                utilizationFactor = 0.6;
            } else if (utilizationMethod === "PH Method") {
                // IMPLEMENT FULL PHPP CALCULATION
                // Formula: =(1-((I79+I71)/(I97+I103+M121+I98))^5)/(1-((I79+I71)/(I97+I103+M121+I98))^6)
                
                // Get values for the calculation with reasonable fallbacks
                // Note: These fields come from other sections, and some may not exist yet
                // I79 = Solar gains (h_79)
                // I71 = Internal gains (i_71)
                // I97 = Heating energy from distribution system
                const i97 = getNumericValue("i_97") || 500000; // Conservative fallback
                
                // I103 = Heating energy from distribution losses
                const i103 = getNumericValue("i_103") || 20000; // Conservative fallback
                
                // M121 = Energy from domestic hot water
                const m121 = getNumericValue("m_121") || 15000; // Conservative fallback
                
                // I98 = Heat energy from HRV/ventilation
                const i98 = getNumericValue("i_98") || 30000; // Conservative fallback
                
                // Get gain and loss values
                const numerator = solarGains + internalGains; // Total heat gains
                const denominator = i97 + i103 + m121 + i98; // Total heat demand
                
                // Calculate gamma (heat gains / heat losses ratio)
                // Avoid division by zero
                if (denominator > 0) {
                    const gamma = numerator / denominator;
                    
                    // Apply PHPP utilization factor formula
                    if (gamma !== 1) { // Handle special case of gamma = 1
                        // For gamma != 1: η = (1-γª)/(1-γᵃ⁺¹)
                        // Where a is the numerical parameter (5 in this case)
                        const a = 5; // Numerical parameter 
                        
                        // Calculate (1-γᵃ) / (1-γᵃ⁺¹)
                        const gamma_a = Math.pow(gamma, a);
                        const gamma_a_plus_1 = Math.pow(gamma, a + 1);
                        
                        utilizationFactor = (1 - gamma_a) / (1 - gamma_a_plus_1);
                        
                        // Constrain result between 0 and 1
                        utilizationFactor = Math.max(0, Math.min(1, utilizationFactor));
                    } else {
                        // For gamma = 1: η = a/(a+1)
                        utilizationFactor = 5 / 6; // a/(a+1) = 5/6 = 0.8333
                    }
                } else {
                    // Safe fallback
                    utilizationFactor = 0.94;
                }
            }
            
            // Update utilization percentage for selected method
            setCalculatedValue("g_80", `${(utilizationFactor * 100).toFixed(2)}%`);
            
            // Calculate usable gains based on selected method
            const usableGains = totalGains * utilizationFactor;
            setCalculatedValue("i_80", formatNumber(usableGains));
            
            //=====================================================================
            // PART 2: Calculate PHPP method as reference in row 81 (always)
            //=====================================================================
            
            // Always calculate PHPP method for row 81 as reference, regardless of selection
            
            // Get values for the PHPP calculation with reasonable fallbacks
            const i97Reference = getNumericValue("i_97") || 500000;
            const i103Reference = getNumericValue("i_103") || 20000;
            const m121Reference = getNumericValue("m_121") || 15000;
            const i98Reference = getNumericValue("i_98") || 30000;
            
            // Calculate gamma for PHPP reference calculation
            const numeratorReference = solarGains + internalGains;
            const denominatorReference = i97Reference + i103Reference + m121Reference + i98Reference;
            
            let phUtilizationFactor = 0.9445; // Default reference value
            
            if (denominatorReference > 0) {
                const gammaReference = numeratorReference / denominatorReference;
                if (gammaReference !== 1) {
                    const a = 5;
                    const gamma_a = Math.pow(gammaReference, a);
                    const gamma_a_plus_1 = Math.pow(gammaReference, a + 1);
                    phUtilizationFactor = (1 - gamma_a) / (1 - gamma_a_plus_1);
                    phUtilizationFactor = Math.max(0, Math.min(1, phUtilizationFactor));
                } else {
                    phUtilizationFactor = 5 / 6; // a/(a+1) = 5/6 = 0.8333
                }
            }
            
            // Update reference values in row 81 (always PHPP method)
            setCalculatedValue("g_81", `${(phUtilizationFactor * 100).toFixed(2)}%`);
            
            const phReferenceGains = totalGains * phUtilizationFactor;
            setCalculatedValue("i_81", formatNumber(phReferenceGains));
            
            //=====================================================================
            // PART 3: Calculate unusable gains based on selected method (row 80)
            //=====================================================================
            
            // Calculate unused gains using the selected method (row 80)
            const unusedGains = totalGains - usableGains;
            setCalculatedValue("i_82", formatNumber(unusedGains));
        } catch (error) {
            // console.error('Error calculating utilization factors:', error);
        }
    }
    
    /**
     * Calculate gain factor based on orientation and climate zone
     * @param {string} orientation - Window orientation (North, South, etc.)
     * @param {number} climateZone - Climate zone number (default 6)
     * @returns {number} Gain factor in kWh/m²/yr
     */
    function calculateGainFactor(orientation, climateZone = 6) {
        try {
            // Implementation of the formula:
            // =IF($J$19>6,
            //     CHOOSE(MATCH(E73, {"North","NorthEast","East","SouthEast","South","SouthWest","West","NorthWest"}, 0), 0.19, 0.89, 2.09, 6.01, 24.76, 82.25, 64.37, 18.14, 24.84),
            //     CHOOSE(MATCH(E73, {"North","NorthEast","East","SouthEast","South","SouthWest","West","NorthWest"}, 0), 1.31, 34.69, 76.94, 86.59, 70.74, 60.4, 25.86, 2.88, 50)
            // )
            
            // Define the orientation options and their indices
            const orientations = ["North", "NorthEast", "East", "SouthEast", "South", "SouthWest", "West", "NorthWest"];
            let orientationIndex = orientations.indexOf(orientation);
            
            // If orientation is not in the list, use default (Average)
            if (orientationIndex === -1) {
                return 50.0; // Default value for Average
            }
            
            // Values for northern latitudes (Climate Zone > 6)
            const northernValues = [0.19, 0.89, 2.09, 6.01, 24.76, 82.25, 64.37, 18.14];
            
            // Values for southern latitudes (Climate Zone <= 6)
            const southernValues = [1.31, 34.69, 76.94, 86.59, 70.74, 60.4, 25.86, 2.88];
            
            // Choose the appropriate set of values based on climate zone
            const values = climateZone > 6 ? northernValues : southernValues;
            
            // Return the gain factor for this orientation
            return values[orientationIndex];
        } catch (error) {
            // console.error('Error calculating gain factor:', error);
            return 50.0; // Return default value in case of error
        }
    }
    
    /**
     * Helper function to get a numeric value from a field
     */
    function getNumericValue(fieldId) {
        try {
            const value = getFieldValue(fieldId);
            
            // Handle string values (with comma removal)
            if (typeof value === 'string') {
                // Remove percentage symbol and commas
                const cleanedValue = value.replace(/[%,]/g, '');
                return parseFloat(cleanedValue) || 0;
            }
            // Handle number values directly
            else if (typeof value === 'number') {
                return value;
            }
            // Default fallback
            return 0;
        } catch (error) {
            // console.error(`Error getting numeric value for ${fieldId}:`, error);
            return 0;
        }
    }
    
    /**
     * Helper function to get a field value
     */
    function getFieldValue(fieldId) {
        try {
            // Try to get from StateManager first
            if (window.TEUI?.StateManager?.getValue) {
                const value = window.TEUI.StateManager.getValue(fieldId);
                if (value !== null && value !== undefined) {
                    return value;
                }
            }
            
            // Fall back to DOM
            const element = document.querySelector(`[data-field-id="${fieldId}"]`);
            if (element) {
                if (element.tagName === 'SELECT' || element.tagName === 'INPUT') {
                    return element.value;
                } else {
                    return element.textContent;
                }
            }
            
            return null;
        } catch (error) {
            // console.error(`Error getting field value for ${fieldId}:`, error);
            return null;
        }
    }
    
    /**
     * Helper function to set a calculated field value
     */
    function setCalculatedValue(fieldId, value) {
        try {
            // Set in state manager if available
            if (window.TEUI?.StateManager?.setValue) {
                window.TEUI.StateManager.setValue(fieldId, value, "calculated");
            }
            
            // Also update DOM
            const element = document.querySelector(`[data-field-id="${fieldId}"]`);
            if (element) {
                if (element.tagName === 'SELECT' || element.tagName === 'INPUT') {
                    element.value = value;
                } else {
                    element.textContent = value;
                }
            }
        } catch (error) {
            // console.error(`Error setting calculated value for ${fieldId}:`, error);
        }
    }
    
    /**
     * Format a number for display with commas and proper decimals
     */
    function formatNumber(value) {
        try {
            // Check if value is very small
            if (Math.abs(value) < 0.01 && value !== 0) {
                return value.toFixed(2);
            }
            
            // Check if value is integer
            if (Number.isInteger(parseFloat(value))) {
                return parseFloat(value).toLocaleString(undefined, {
                    minimumFractionDigits: 0,
                    maximumFractionDigits: 0
                });
            }
            
            // Format with 2 decimal places
            return parseFloat(value).toLocaleString(undefined, {
                minimumFractionDigits: 2,
                maximumFractionDigits: 2
            });
        } catch (error) {
            // console.error('Error formatting number:', error);
            return value.toString();
        }
    }
    
    /**
     * Set element class for visual indicators
     */
    function setElementClass(fieldId, className) {
        const element = document.querySelector(`[data-field-id="${fieldId}"]`);
        if (element) {
            // Remove existing status classes
            element.classList.remove('checkmark', 'warning');
            // Add the new class
            element.classList.add(className);
        }
    }
    
    /**
     * Initialize event handlers for this section
     */
    function initializeEventHandlers() {
        const sectionElement = document.getElementById('envelopeRadiantGains');
        if (!sectionElement) return;
        
        // Add handlers for editable fields
        const editableFields = sectionElement.querySelectorAll('.user-input, [contenteditable="true"]');
        editableFields.forEach(field => {
            // Make text fields editable
            if (field.classList.contains('user-input')) {
                field.setAttribute('contenteditable', 'true');
            }
            
            // Handle blur event for text fields
            field.addEventListener('blur', function() {
                const fieldId = this.getAttribute('data-field-id');
                if (!fieldId) return;
                
                // Handle numeric values
                if (this.getAttribute('contenteditable') === 'true') {
                    // Get and clean the value
                    const newValue = this.textContent.trim().replace(/,/g, '');
                    
                    // Format the display
                    if (!isNaN(parseFloat(newValue))) {
                        this.textContent = formatNumber(newValue);
                    }
                    
                    // Store the value in StateManager
                    if (window.TEUI?.StateManager?.setValue) {
                        window.TEUI.StateManager.setValue(fieldId, newValue, 'user-modified');
                    }
                    
                    // Recalculate
                    calculateSolarGains();
                }
            });
            
            // Handle Enter key
            field.addEventListener('keydown', function(e) {
                if (e.key === 'Enter') {
                    e.preventDefault(); // Prevent adding a newline
                    this.blur(); // Remove focus to trigger the blur event
                }
            });
        });
        
        // Add dropdown change event handlers
        const dropdowns = sectionElement.querySelectorAll('select');
        dropdowns.forEach(dropdown => {
            dropdown.addEventListener('change', function() {
                const fieldId = this.getAttribute('data-field-id');
                if (!fieldId) return;
                
                // Store the value in StateManager
                if (window.TEUI?.StateManager?.setValue) {
                    window.TEUI.StateManager.setValue(fieldId, this.value, 'user-modified');
                }
                
                // Recalculate
                calculateSolarGains();
            });
        });
        
        // Add slider change handlers
        const sliders = sectionElement.querySelectorAll('input[type="range"]');
        sliders.forEach(slider => {
            slider.addEventListener('input', function() {
                const fieldId = this.getAttribute('data-field-id');
                if (!fieldId) return;
                
                // Store the value in StateManager
                if (window.TEUI?.StateManager?.setValue) {
                    window.TEUI.StateManager.setValue(fieldId, this.value, 'user-modified');
                }
                
                // Update the display value
                const displayElement = document.querySelector(`[data-display-for="${fieldId}"]`);
                if (displayElement) {
                    displayElement.textContent = `${this.value}%`;
                }
                
                // Recalculate with a slight delay to improve performance
                setTimeout(calculateSolarGains, 100);
            });
        });
    }
    
    /**
     * Set up default values for dropdowns in this section
     */
    function setupDropdownDefaults() {
        try {
            // Find all dropdowns in this section
            const dropdowns = document.querySelectorAll('[data-section="envelopeRadiantGains"] select');
            
            // For each dropdown, set default value based on the field definition
            dropdowns.forEach(dropdown => {
                const fieldId = dropdown.getAttribute('data-field-id');
                if (!fieldId) return;
                
                // Get default value from state manager if available
                const defaultValue = window.TEUI?.StateManager?.getValue(fieldId);
                if (defaultValue) {
                    dropdown.value = defaultValue;
                }
            });
            
            // console.log('Radiant Gains dropdown defaults initialized');
        } catch (error) {
            // console.error('Error in setupDropdownDefaults:', error);
        }
    }
    
    /**
     * Register values with the StateManager
     */
    function registerWithStateManager() {
        try {
            if (!window.TEUI?.StateManager) {
                // console.warn('StateManager not available for Radiant Gains registration');
                return;
            }
            
            // Register key values with the state manager
            // This ensures they're available to other sections
            const orientations = ['Average', 'North', 'East', 'South', 'West', 'Skylight'];
            orientations.forEach(orientation => {
                // Register orientation-specific fields if needed
            });
            
            // console.log('Radiant Gains values registered with StateManager');
        } catch (error) {
            // console.error('Error in registerWithStateManager:', error);
        }
    }
    
    /**
     * Add listeners for StateManager changes
     */
    function addStateManagerListeners() {
        try {
            if (!window.TEUI?.StateManager) {
                // console.warn('StateManager not available for Radiant Gains listeners');
                return;
            }
            
            // Add listeners for key fields that might change from other sections
            // Example: Listen for climate zone changes
            window.TEUI.StateManager.addListener('j_19', function() {
                // console.log('Climate zone changed, recalculating solar gains');
                calculateSolarGains();
            });
            
            // console.log('Radiant Gains StateManager listeners added');
        } catch (error) {
            // console.error('Error in addStateManagerListeners:', error);
        }
    }
    
    /**
     * Register with the SectionIntegrator
     */
    function registerWithIntegrator() {
        try {
            // If the integrator exists, register dependencies
            if (window.TEUI?.SectionIntegrator) {
                // console.log('Registering with SectionIntegrator');
                // Add any required integrations
            }
        } catch (error) {
            // console.error('Error in registerWithIntegrator:', error);
        }
    }
    
    //==========================================================================
    // PUBLIC API
    //==========================================================================
    
    return {
        // Field definitions and layout - REQUIRED
        getFields: getFields,
        getDropdownOptions: getDropdownOptions,
        getLayout: getLayout,
        
        // Event handling and initialization - REQUIRED
        initializeEventHandlers: initializeEventHandlers,
        
        onSectionRendered: function() {
            try {
                initializeEventHandlers();
                setupDropdownDefaults();
                registerWithStateManager();
                addStateManagerListeners();
                registerWithIntegrator();
                calculateSolarGains();
            } catch (error) {
                // console.error('Error in Section10 onSectionRendered:', error);
            }
        },
        
        // Calculation functions
        calculateAll: function() {
            try {
                calculateSolarGains();
            } catch (error) {
                // console.error('Error in Section10 calculateAll:', error);
            }
        },
        
        calculateSolarGains: calculateSolarGains,
        calculateUtilizationFactors: calculateUtilizationFactors,
        setupDropdownDefaults: setupDropdownDefaults,
        registerWithStateManager: registerWithStateManager,
        addStateManagerListeners: addStateManagerListeners,
        registerWithIntegrator: registerWithIntegrator,
        
        calculateGainFactor: function(orientation, climateZone) {
            try {
                return calculateGainFactor(orientation, climateZone);
            } catch (error) {
                // console.error('Error in Section10 calculateGainFactor:', error);
                return 50.0; // Default value in case of error
            }
        }
    };
})();

// Initialize when the section is rendered - use a safer approach with try/catch
document.addEventListener('teui-section-rendered', function(event) {
    try {
        if (event.detail?.sectionId === 'envelopeRadiantGains') {
            setTimeout(() => {
                if (window.TEUI?.SectionModules?.sect10?.onSectionRendered) {
                    window.TEUI.SectionModules.sect10.onSectionRendered();
                }
            }, 100);
        }
    } catch (error) {
        // console.error('Error in Section10 teui-section-rendered handler:', error);
    }
});

// Fallback to rendering complete event with try/catch
document.addEventListener('teui-rendering-complete', function() {
    try {
        setTimeout(() => {
            if (document.getElementById('envelopeRadiantGains') && window.TEUI?.SectionModules?.sect10?.onSectionRendered) {
                window.TEUI.SectionModules.sect10.onSectionRendered();
            }
        }, 300);
    } catch (error) {
        // console.error('Error in Section10 teui-rendering-complete handler:', error);
    }
});

// Export key functions to the global namespace for cross-section access
document.addEventListener('DOMContentLoaded', function() {
    // Create section namespace
    window.TEUI = window.TEUI || {};
    window.TEUI.sect10 = window.TEUI.sect10 || {};
    
    // Export critical functions
    const module = window.TEUI.SectionModules.sect10;
    window.TEUI.sect10.calculateAll = module.calculateAll;
    window.TEUI.sect10.calculateUtilizationFactors = module.calculateUtilizationFactors;
    
    // Create a safe global function for radiant gains recalculation
    window.recalculateRadiantGains = function() {
        if (window.recalculateRadiantGainsRunning) return;
        
        window.recalculateRadiantGainsRunning = true;
        try {
            if (window.TEUI?.SectionModules?.sect10?.calculateAll) {
                window.TEUI.SectionModules.sect10.calculateAll();
            } else if (window.TEUI?.sect10?.calculateAll) {
                window.TEUI.sect10.calculateAll();
            }
        } catch (e) {
            // console.error('Error in global recalculateRadiantGains:', e);
        } finally {
            window.recalculateRadiantGainsRunning = false;
        }
    };
});