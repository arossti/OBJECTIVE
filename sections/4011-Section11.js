/**
 * 4011-Section11.js
 * Transmission Losses (Section 11) module for TEUI Calculator 4.011
 * 
 * Uses the consolidated declarative approach where field definitions
 * are integrated directly into the layout structure.
 */

// Ensure namespace exists
window.TEUI = window.TEUI || {};
window.TEUI.SectionModules = window.TEUI.SectionModules || {};

// Create section-specific namespace for global references
window.TEUI.sect11 = window.TEUI.sect11 || {};
window.TEUI.sect11.initialized = false;
window.TEUI.sect11.userInteracted = false;

// Section 11: Transmission Losses Module
window.TEUI.SectionModules.sect11 = (function() {
    //==========================================================================
    // CONSOLIDATED FIELD DEFINITIONS AND LAYOUT
    //==========================================================================
    
    // Define rows with integrated field definitions
    const sectionRows = {
        // UNIT SUBHEADER - MUST COME FIRST
        "header": {
            id: "11-ID",
            rowId: "11-ID",
            label: "Transmission Losses Units",
            cells: {
                c: { content: "", classes: ["section-subheader"] }, // Empty column for row labels
                d: { content: "Areas m²", classes: ["section-subheader", "align-center"] },
                e: { content: "Rimp ft²F•hr/Btu", classes: ["section-subheader", "align-center"] },
                f: { content: "RSI K•m²/W", classes: ["section-subheader", "align-center"] },
                g: { content: "U-Value W/m²•K", classes: ["section-subheader", "align-center"] },
                h: { content: "% of Ae & Ag", classes: ["section-subheader", "align-center"] },
                i: { content: "Heatloss kWh/yr", classes: ["section-subheader", "align-center"] },
                j: { content: "Heatloss %", classes: ["section-subheader", "align-center"] },
                k: { content: "Heatgain kWh/Cool Season", classes: ["section-subheader", "align-center"] },
                l: { content: "Heatgain %", classes: ["section-subheader", "align-center"] },
                m: { content: "Reference", classes: ["section-subheader", "align-center"] },
                n: { content: "PASS/FAIL", classes: ["section-subheader", "align-center"] }
            }
        },
        
        // B.4 Roof
        "85": {
            id: "B.4",
            rowId: "B.4",
            label: "Roof",
            cells: {
                c: { label: "Roof" },
                d: { 
                    fieldId: "d_85", 
                    type: "editable", 
                    value: "1411.52",
                    section: "transmissionLosses"
                },
                e: { 
                    fieldId: "e_85", 
                    type: "calculated", 
                    value: "53.09",
                    section: "transmissionLosses",
                    dependencies: ["f_85"]
                },
                f: { 
                    fieldId: "f_85", 
                    type: "editable", 
                    value: "9.35",
                    section: "transmissionLosses"
                },
                g: { 
                    fieldId: "g_85", 
                    type: "calculated", 
                    value: "0.107",
                    section: "transmissionLosses",
                    dependencies: ["f_85"]
                },
                h: { 
                    fieldId: "h_85", 
                    type: "calculated", 
                    value: "56.99%",
                    section: "transmissionLosses",
                    dependencies: ["d_85", "d_101"]
                },
                i: { 
                    fieldId: "i_85", 
                    type: "calculated", 
                    value: "16,666.50",
                    section: "transmissionLosses",
                    dependencies: ["d_85", "d_20", "f_85"]
                },
                j: { 
                    fieldId: "j_85", 
                    type: "calculated", 
                    value: "21.53%",
                    section: "transmissionLosses",
                    dependencies: ["i_85", "i_98"]
                },
                k: { 
                    fieldId: "k_85", 
                    type: "calculated", 
                    value: "710.14",
                    section: "transmissionLosses",
                    dependencies: ["d_85", "d_21", "f_85"]
                },
                l: { 
                    fieldId: "l_85", 
                    type: "calculated", 
                    value: "21.56%",
                    section: "transmissionLosses",
                    dependencies: ["k_85", "k_98"]
                },
                m: { 
                    fieldId: "m_85", 
                    type: "calculated", 
                    value: "192%",
                    section: "transmissionLosses",
                    dependencies: ["f_85"]
                },
                n: { 
                    fieldId: "n_85", 
                    type: "calculated", 
                    value: "$2,166.65",
                    section: "transmissionLosses",
                    dependencies: ["i_85", "l_12"]
                }
            }
        },

        // B.5 Walls Above Grade
        "86": {
            id: "B.5",
            rowId: "B.5",
            label: "Walls Above Grade (Exclude Openings!)",
            cells: {
                c: { label: "Walls Above Grade (Exclude Openings!)" },
                d: { 
                    fieldId: "d_86", 
                    type: "editable", 
                    value: "712.97",
                    section: "transmissionLosses"
                },
                e: { 
                    fieldId: "e_86", 
                    type: "calculated", 
                    value: "37.99",
                    section: "transmissionLosses",
                    dependencies: ["f_86"]
                },
                f: { 
                    fieldId: "f_86", 
                    type: "editable", 
                    value: "6.69",
                    section: "transmissionLosses"
                },
                g: { 
                    fieldId: "g_86", 
                    type: "calculated", 
                    value: "0.149",
                    section: "transmissionLosses",
                    dependencies: ["f_86"]
                },
                h: { 
                    fieldId: "h_86", 
                    type: "calculated", 
                    value: "28.79%",
                    section: "transmissionLosses",
                    dependencies: ["d_86", "d_101"]
                },
                i: { 
                    fieldId: "i_86", 
                    type: "calculated", 
                    value: "11,765.60",
                    section: "transmissionLosses",
                    dependencies: ["d_86", "d_20", "f_86"]
                },
                j: { 
                    fieldId: "j_86", 
                    type: "calculated", 
                    value: "15.20%",
                    section: "transmissionLosses",
                    dependencies: ["i_86", "i_98"]
                },
                k: { 
                    fieldId: "k_86", 
                    type: "calculated", 
                    value: "501.32",
                    section: "transmissionLosses",
                    dependencies: ["d_86", "d_21", "f_86"]
                },
                l: { 
                    fieldId: "l_86", 
                    type: "calculated", 
                    value: "15.22%",
                    section: "transmissionLosses",
                    dependencies: ["k_86", "k_98"]
                },
                m: { 
                    fieldId: "m_86", 
                    type: "calculated", 
                    value: "159%",
                    section: "transmissionLosses",
                    dependencies: ["f_86"]
                },
                n: { 
                    fieldId: "n_86", 
                    type: "calculated", 
                    value: "$1,529.53",
                    section: "transmissionLosses",
                    dependencies: ["i_86", "l_12"]
                }
            }
        },

        // B.6 Floor Exposed
        "87": {
            id: "B.6",
            rowId: "B.6",
            label: "Floor Exposed",
            cells: {
                c: { label: "Floor Exposed" },
                d: { 
                    fieldId: "d_87", 
                    type: "editable", 
                    value: "0.00",
                    section: "transmissionLosses"
                },
                e: { 
                    fieldId: "e_87", 
                    type: "calculated", 
                    value: "54.05",
                    section: "transmissionLosses",
                    dependencies: ["f_87"]
                },
                f: { 
                    fieldId: "f_87", 
                    type: "editable", 
                    value: "9.52",
                    section: "transmissionLosses"
                },
                g: { 
                    fieldId: "g_87", 
                    type: "calculated", 
                    value: "0.105",
                    section: "transmissionLosses",
                    dependencies: ["f_87"]
                },
                h: { 
                    fieldId: "h_87", 
                    type: "calculated", 
                    value: "0.00%",
                    section: "transmissionLosses",
                    dependencies: ["d_87", "d_101"]
                },
                i: { 
                    fieldId: "i_87", 
                    type: "calculated", 
                    value: "0.00",
                    section: "transmissionLosses",
                    dependencies: ["d_87", "d_20", "f_87"]
                },
                j: { 
                    fieldId: "j_87", 
                    type: "calculated", 
                    value: "0.00%",
                    section: "transmissionLosses",
                    dependencies: ["i_87", "i_98"]
                },
                k: { 
                    fieldId: "k_87", 
                    type: "calculated", 
                    value: "0.00",
                    section: "transmissionLosses",
                    dependencies: ["d_87", "d_21", "f_87"]
                },
                l: { 
                    fieldId: "l_87", 
                    type: "calculated", 
                    value: "0.00%",
                    section: "transmissionLosses",
                    dependencies: ["k_87", "k_98"]
                },
                m: { 
                    fieldId: "m_87", 
                    type: "calculated", 
                    value: "169%",
                    section: "transmissionLosses",
                    dependencies: ["f_87"]
                },
                n: { 
                    fieldId: "n_87", 
                    type: "calculated", 
                    value: "$0.00",
                    section: "transmissionLosses",
                    dependencies: ["i_87", "l_12"]
                }
            }
        },

        // B.7.0 Doors
        "88": {
            id: "B.7.0",
            rowId: "B.7.0",
            label: "Doors",
            cells: {
                c: { label: "Doors" },
                d: { 
                    fieldId: "d_88", 
                    type: "editable", 
                    value: "7.50",
                    section: "transmissionLosses"
                },
                e: { 
                    fieldId: "e_88", 
                    type: "calculated", 
                    value: "6.31",
                    section: "transmissionLosses",
                    dependencies: ["f_88"]
                },
                f: { 
                    fieldId: "f_88", 
                    type: "calculated", 
                    value: "1.111",
                    section: "transmissionLosses",
                    dependencies: ["g_88"]
                },
                g: { 
                    fieldId: "g_88", 
                    type: "editable", 
                    value: "0.900",
                    section: "transmissionLosses"
                },
                h: { 
                    fieldId: "h_88", 
                    type: "calculated", 
                    value: "0.30%",
                    section: "transmissionLosses",
                    dependencies: ["d_88", "d_101"]
                },
                i: { 
                    fieldId: "i_88", 
                    type: "calculated", 
                    value: "745.20",
                    section: "transmissionLosses",
                    dependencies: ["d_88", "d_20", "f_88"]
                },
                j: { 
                    fieldId: "j_88", 
                    type: "calculated", 
                    value: "0.96%",
                    section: "transmissionLosses",
                    dependencies: ["i_88", "i_98"]
                },
                k: { 
                    fieldId: "k_88", 
                    type: "calculated", 
                    value: "31.75",
                    section: "transmissionLosses",
                    dependencies: ["d_88", "d_21", "f_88"]
                },
                l: { 
                    fieldId: "l_88", 
                    type: "calculated", 
                    value: "0.96%",
                    section: "transmissionLosses",
                    dependencies: ["k_88", "k_98"]
                },
                m: { 
                    fieldId: "m_88", 
                    type: "calculated", 
                    value: "178%",
                    section: "transmissionLosses",
                    dependencies: ["g_88"]
                },
                n: { 
                    fieldId: "n_88", 
                    type: "calculated", 
                    value: "$48.13",
                    section: "transmissionLosses",
                    dependencies: ["i_88", "i_73", "l_12"]
                }
            }
        },

        // B.8.1 Window Area North
        "89": {
            id: "B.8.1",
            rowId: "B.8.1",
            label: "Window Area North",
            cells: {
                c: { label: "Window Area North" },
                d: { 
                    fieldId: "d_89", 
                    type: "editable", 
                    value: "81.14",
                    section: "transmissionLosses"
                },
                e: { 
                    fieldId: "e_89", 
                    type: "calculated", 
                    value: "6.31",
                    section: "transmissionLosses",
                    dependencies: ["f_89"]
                },
                f: { 
                    fieldId: "f_89", 
                    type: "calculated", 
                    value: "1.111",
                    section: "transmissionLosses",
                    dependencies: ["g_89"]
                },
                g: { 
                    fieldId: "g_89", 
                    type: "editable", 
                    value: "0.900",
                    section: "transmissionLosses"
                },
                h: { 
                    fieldId: "h_89", 
                    type: "calculated", 
                    value: "3.28%",
                    section: "transmissionLosses",
                    dependencies: ["d_89", "d_101"]
                },
                i: { 
                    fieldId: "i_89", 
                    type: "calculated", 
                    value: "8,062.07",
                    section: "transmissionLosses",
                    dependencies: ["d_89", "d_20", "f_89"]
                },
                j: { 
                    fieldId: "j_89", 
                    type: "calculated", 
                    value: "10.41%",
                    section: "transmissionLosses",
                    dependencies: ["i_89", "i_98"]
                },
                k: { 
                    fieldId: "k_89", 
                    type: "calculated", 
                    value: "343.51",
                    section: "transmissionLosses",
                    dependencies: ["d_89", "d_21", "f_89"]
                },
                l: { 
                    fieldId: "l_89", 
                    type: "calculated", 
                    value: "10.43%",
                    section: "transmissionLosses",
                    dependencies: ["k_89", "k_98"]
                },
                m: { 
                    fieldId: "m_89", 
                    type: "calculated", 
                    value: "178%",
                    section: "transmissionLosses",
                    dependencies: ["g_89"]
                },
                n: { 
                    fieldId: "n_89", 
                    type: "calculated", 
                    value: "$1,034.25",
                    section: "transmissionLosses",
                    dependencies: ["i_89", "i_74", "l_12"]
                }
            }
        },

        // B.8.2 Window Area East
        "90": {
            id: "B.8.2",
            rowId: "B.8.2",
            label: "Window Area East",
            cells: {
                c: { label: "Window Area East" },
                d: { 
                    fieldId: "d_90", 
                    type: "editable", 
                    value: "3.83",
                    section: "transmissionLosses"
                },
                e: { 
                    fieldId: "e_90", 
                    type: "calculated", 
                    value: "6.31",
                    section: "transmissionLosses",
                    dependencies: ["f_90"]
                },
                f: { 
                    fieldId: "f_90", 
                    type: "calculated", 
                    value: "1.111",
                    section: "transmissionLosses",
                    dependencies: ["g_90"]
                },
                g: { 
                    fieldId: "g_90", 
                    type: "editable", 
                    value: "0.900",
                    section: "transmissionLosses"
                },
                h: { 
                    fieldId: "h_90", 
                    type: "calculated", 
                    value: "0.15%",
                    section: "transmissionLosses",
                    dependencies: ["d_90", "d_101"]
                },
                i: { 
                    fieldId: "i_90", 
                    type: "calculated", 
                    value: "380.55",
                    section: "transmissionLosses",
                    dependencies: ["d_90", "d_20", "f_90"]
                },
                j: { 
                    fieldId: "j_90", 
                    type: "calculated", 
                    value: "0.49%",
                    section: "transmissionLosses",
                    dependencies: ["i_90", "i_98"]
                },
                k: { 
                    fieldId: "k_90", 
                    type: "calculated", 
                    value: "16.21",
                    section: "transmissionLosses",
                    dependencies: ["d_90", "d_21", "f_90"]
                },
                l: { 
                    fieldId: "l_90", 
                    type: "calculated", 
                    value: "0.49%",
                    section: "transmissionLosses",
                    dependencies: ["k_90", "k_98"]
                },
                m: { 
                    fieldId: "m_90", 
                    type: "calculated", 
                    value: "178%",
                    section: "transmissionLosses",
                    dependencies: ["g_90"]
                },
                n: { 
                    fieldId: "n_90", 
                    type: "calculated", 
                    value: "$11.16",
                    section: "transmissionLosses",
                    dependencies: ["i_90", "i_75", "l_12"]
                }
            }
        },

        // B.8.3 Window Area South
        "91": {
            id: "B.8.3",
            rowId: "B.8.3",
            label: "Window Area South",
            cells: {
                c: { label: "Window Area South" },
                d: { 
                    fieldId: "d_91", 
                    type: "editable", 
                    value: "159.00",
                    section: "transmissionLosses"
                },
                e: { 
                    fieldId: "e_91", 
                    type: "calculated", 
                    value: "6.31",
                    section: "transmissionLosses",
                    dependencies: ["f_91"]
                },
                f: { 
                    fieldId: "f_91", 
                    type: "calculated", 
                    value: "1.111",
                    section: "transmissionLosses",
                    dependencies: ["g_91"]
                },
                g: { 
                    fieldId: "g_91", 
                    type: "editable", 
                    value: "0.900",
                    section: "transmissionLosses"
                },
                h: { 
                    fieldId: "h_91", 
                    type: "calculated", 
                    value: "6.42%",
                    section: "transmissionLosses",
                    dependencies: ["d_91", "d_101"]
                },
                i: { 
                    fieldId: "i_91", 
                    type: "calculated", 
                    value: "15,798.24",
                    section: "transmissionLosses",
                    dependencies: ["d_91", "d_20", "f_91"]
                },
                j: { 
                    fieldId: "j_91", 
                    type: "calculated", 
                    value: "20.41%",
                    section: "transmissionLosses",
                    dependencies: ["i_91", "i_98"]
                },
                k: { 
                    fieldId: "k_91", 
                    type: "calculated", 
                    value: "673.14",
                    section: "transmissionLosses",
                    dependencies: ["d_91", "d_21", "f_91"]
                },
                l: { 
                    fieldId: "l_91", 
                    type: "calculated", 
                    value: "20.44%",
                    section: "transmissionLosses",
                    dependencies: ["k_91", "k_98"]
                },
                m: { 
                    fieldId: "m_91", 
                    type: "calculated", 
                    value: "178%",
                    section: "transmissionLosses",
                    dependencies: ["g_91"]
                },
                n: { 
                    fieldId: "n_91", 
                    type: "calculated", 
                    value: "$591.58",
                    section: "transmissionLosses",
                    dependencies: ["i_91", "i_76", "l_12"]
                }
            }
        },

        // B.8.4 Window Area West
        "92": {
            id: "B.8.4",
            rowId: "B.8.4",
            label: "Window Area West",
            cells: {
                c: { label: "Window Area West" },
                d: { 
                    fieldId: "d_92", 
                    type: "editable", 
                    value: "100.66",
                    section: "transmissionLosses"
                },
                e: { 
                    fieldId: "e_92", 
                    type: "calculated", 
                    value: "6.31",
                    section: "transmissionLosses",
                    dependencies: ["f_92"]
                },
                f: { 
                    fieldId: "f_92", 
                    type: "calculated", 
                    value: "1.111",
                    section: "transmissionLosses",
                    dependencies: ["g_92"]
                },
                g: { 
                    fieldId: "g_92", 
                    type: "editable", 
                    value: "0.900",
                    section: "transmissionLosses"
                },
                h: { 
                    fieldId: "h_92", 
                    type: "calculated", 
                    value: "4.06%",
                    section: "transmissionLosses",
                    dependencies: ["d_92", "d_101"]
                },
                i: { 
                    fieldId: "i_92", 
                    type: "calculated", 
                    value: "10,001.58",
                    section: "transmissionLosses",
                    dependencies: ["d_92", "d_20", "f_92"]
                },
                j: { 
                    fieldId: "j_92", 
                    type: "calculated", 
                    value: "12.92%",
                    section: "transmissionLosses",
                    dependencies: ["i_92", "i_98"]
                },
                k: { 
                    fieldId: "k_92", 
                    type: "calculated", 
                    value: "426.15",
                    section: "transmissionLosses",
                    dependencies: ["d_92", "d_21", "f_92"]
                },
                l: { 
                    fieldId: "l_92", 
                    type: "calculated", 
                    value: "12.94%",
                    section: "transmissionLosses",
                    dependencies: ["k_92", "k_98"]
                },
                m: { 
                    fieldId: "m_92", 
                    type: "calculated", 
                    value: "178%",
                    section: "transmissionLosses",
                    dependencies: ["g_92"]
                },
                n: { 
                    fieldId: "n_92", 
                    type: "calculated", 
                    value: "$961.81",
                    section: "transmissionLosses",
                    dependencies: ["i_92", "i_77", "l_12"]
                }
            }
        },

        // B.8.5 Skylights
        "93": {
            id: "B.8.5",
            rowId: "B.8.5",
            label: "Skylights",
            cells: {
                c: { label: "Skylights" },
                d: { 
                    fieldId: "d_93", 
                    type: "editable", 
                    value: "0.00",
                    section: "transmissionLosses"
                },
                e: { 
                    fieldId: "e_93", 
                    type: "calculated", 
                    value: "6.31",
                    section: "transmissionLosses",
                    dependencies: ["f_93"]
                },
                f: { 
                    fieldId: "f_93", 
                    type: "calculated", 
                    value: "1.111",
                    section: "transmissionLosses",
                    dependencies: ["g_93"]
                },
                g: { 
                    fieldId: "g_93", 
                    type: "editable", 
                    value: "0.900",
                    section: "transmissionLosses"
                },
                h: { 
                    fieldId: "h_93", 
                    type: "calculated", 
                    value: "0.00%",
                    section: "transmissionLosses",
                    dependencies: ["d_93", "d_101"]
                },
                i: { 
                    fieldId: "i_93", 
                    type: "calculated", 
                    value: "0.00",
                    section: "transmissionLosses",
                    dependencies: ["d_93", "d_20", "f_93"]
                },
                j: { 
                    fieldId: "j_93", 
                    type: "calculated", 
                    value: "0.00%",
                    section: "transmissionLosses",
                    dependencies: ["i_93", "i_98"]
                },
                k: { 
                    fieldId: "k_93", 
                    type: "calculated", 
                    value: "0.00",
                    section: "transmissionLosses",
                    dependencies: ["d_93", "d_21", "f_93"]
                },
                l: { 
                    fieldId: "l_93", 
                    type: "calculated", 
                    value: "0.00%",
                    section: "transmissionLosses",
                    dependencies: ["k_93", "k_98"]
                },
                m: { 
                    fieldId: "m_93", 
                    type: "calculated", 
                    value: "178%",
                    section: "transmissionLosses",
                    dependencies: ["g_93"]
                },
                n: { 
                    fieldId: "n_93", 
                    type: "calculated", 
                    value: "$0.00",
                    section: "transmissionLosses",
                    dependencies: ["i_93", "i_78", "l_12"]
                }
            }
        },

        // B.9 Walls Below Grade
        "94": {
            id: "B.9",
            rowId: "B.9",
            label: "Walls Below Grade (Conditioned Space)",
            cells: {
                c: { label: "Walls Below Grade (Conditioned Space)" },
                d: { 
                    fieldId: "d_94", 
                    type: "editable", 
                    value: "0.00",
                    section: "transmissionLosses"
                },
                e: { 
                    fieldId: "e_94", 
                    type: "calculated", 
                    value: "22.71",
                    section: "transmissionLosses",
                    dependencies: ["f_94"]
                },
                f: { 
                    fieldId: "f_94", 
                    type: "editable", 
                    value: "4.00",
                    section: "transmissionLosses"
                },
                g: { 
                    fieldId: "g_94", 
                    type: "calculated", 
                    value: "0.250",
                    section: "transmissionLosses",
                    dependencies: ["f_94"]
                },
                h: { 
                    fieldId: "h_94", 
                    type: "calculated", 
                    value: "0.00%",
                    section: "transmissionLosses",
                    dependencies: ["d_94", "d_102"]
                },
                i: { 
                    fieldId: "i_94", 
                    type: "calculated", 
                    value: "0.00",
                    section: "transmissionLosses",
                    dependencies: ["d_94", "d_22", "f_94"]
                },
                j: { 
                    fieldId: "j_94", 
                    type: "calculated", 
                    value: "0.00%",
                    section: "transmissionLosses",
                    dependencies: ["i_94", "i_98"]
                },
                k: { 
                    fieldId: "k_94", 
                    type: "calculated", 
                    value: "0.00",
                    section: "transmissionLosses",
                    dependencies: ["i_21", "d_94", "h_22", "f_94"]
                },
                l: { 
                    fieldId: "l_94", 
                    type: "calculated", 
                    value: "0.00%",
                    section: "transmissionLosses",
                    dependencies: ["k_94", "k_98"]
                },
                m: { 
                    fieldId: "m_94", 
                    type: "calculated", 
                    value: "108%",
                    section: "transmissionLosses",
                    dependencies: ["f_94"]
                },
                n: { 
                    fieldId: "n_94", 
                    type: "calculated", 
                    value: "$0.00",
                    section: "transmissionLosses",
                    dependencies: ["i_94", "l_12"]
                }
            }
        },

        // B.10 Floor Slab
        "95": {
            id: "B.10",
            rowId: "B.10",
            label: "Floor Slab (Conditioned Space)",
            cells: {
                c: { label: "Floor Slab (Conditioned Space)" },
                d: { 
                    fieldId: "d_95", 
                    type: "editable", 
                    value: "1100.42",
                    section: "transmissionLosses"
                },
                e: { 
                    fieldId: "e_95", 
                    type: "calculated", 
                    value: "21.01",
                    section: "transmissionLosses",
                    dependencies: ["f_95"]
                },
                f: { 
                    fieldId: "f_95", 
                    type: "editable", 
                    value: "3.70",
                    section: "transmissionLosses"
                },
                g: { 
                    fieldId: "g_95", 
                    type: "calculated", 
                    value: "0.270",
                    section: "transmissionLosses",
                    dependencies: ["f_95"]
                },
                h: { 
                    fieldId: "h_95", 
                    type: "calculated", 
                    value: "100.00%",
                    section: "transmissionLosses",
                    dependencies: ["d_95", "d_102"]
                },
                i: { 
                    fieldId: "i_95", 
                    type: "calculated", 
                    value: "13,990.20",
                    section: "transmissionLosses",
                    dependencies: ["d_95", "d_22", "f_95"]
                },
                j: { 
                    fieldId: "j_95", 
                    type: "calculated", 
                    value: "18.07%",
                    section: "transmissionLosses",
                    dependencies: ["i_95", "i_98"]
                },
                k: { 
                    fieldId: "k_95", 
                    type: "calculated", 
                    value: "-5,995.80",
                    section: "transmissionLosses",
                    dependencies: ["i_21", "d_95", "h_22", "f_95"]
                },
                l: { 
                    fieldId: "l_95", 
                    type: "calculated", 
                    value: "-182.05%",
                    section: "transmissionLosses",
                    dependencies: ["k_95", "k_98"]
                },
                m: { 
                    fieldId: "m_95", 
                    type: "calculated", 
                    value: "189%",
                    section: "transmissionLosses",
                    dependencies: ["f_95"]
                },
                n: { 
                    fieldId: "n_95", 
                    type: "calculated", 
                    value: "$1,818.73",
                    section: "transmissionLosses",
                    dependencies: ["i_95", "l_12"]
                }
            }
        },

        // B.11 Interior Floors
        "96": {
            id: "B.11",
            rowId: "B.11",
            label: "B.11 Interior Floors (incl. garages)",
            cells: {
                c: { label: "B.11 Interior Floors (incl. garages)" },
                d: { 
                    fieldId: "d_96", 
                    type: "editable", 
                    value: "29.70",
                    section: "transmissionLosses"
                },
                e: { 
                    fieldId: "e_96", 
                    type: "calculated", 
                    value: "-",
                    section: "transmissionLosses"
                },
                f: { 
                    fieldId: "f_96", 
                    type: "calculated", 
                    value: "-",
                    section: "transmissionLosses"
                },
                g: { 
                    fieldId: "g_96", 
                    type: "calculated", 
                    value: "-",
                    section: "transmissionLosses"
                },
                h: { 
                    fieldId: "h_96", 
                    type: "calculated", 
                    value: "-",
                    section: "transmissionLosses"
                },
                i: { 
                    fieldId: "i_96", 
                    type: "calculated", 
                    value: "-",
                    section: "transmissionLosses"
                },
                j: { 
                    fieldId: "j_96", 
                    type: "calculated", 
                    value: "-",
                    section: "transmissionLosses"
                },
                k: { 
                    fieldId: "k_96", 
                    type: "calculated", 
                    value: "-",
                    section: "transmissionLosses"
                },
                l: { 
                    fieldId: "l_96", 
                    type: "calculated", 
                    value: "-",
                    section: "transmissionLosses"
                },
                m: {},
                n: {}
            }
        },

        // B.12 Thermal Bridge Penalty
        "97": {
            id: "B.12",
            rowId: "B.12",
            label: "Thermal Bridge Penalty (min. 5-70%)",
            cells: {
                c: { label: "Thermal Bridge Penalty (min. 5-70%)" },
                d: { 
                    fieldId: "d_97", 
                    type: "editable", 
                    value: "20%",
                    section: "transmissionLosses",
                    title: "Assume Code Minimum Construction at 50%, PassiveHouse at 5-10%"
                },
                e: { 
                    fieldId: "e_97", 
                    type: "calculated", 
                    value: "",
                    section: "transmissionLosses"
                },
                f: {},
                g: {},
                h: {},
                i: { 
                    fieldId: "i_97", 
                    type: "calculated", 
                    value: "15,481.99",
                    section: "transmissionLosses",
                    dependencies: ["i_98", "d_97"]
                },
                j: { 
                    fieldId: "j_97", 
                    type: "calculated", 
                    value: "20.00%",
                    section: "transmissionLosses",
                    dependencies: ["i_97", "i_98"]
                },
                k: { 
                    fieldId: "k_97", 
                    type: "calculated", 
                    value: "-658.71",
                    section: "transmissionLosses",
                    dependencies: ["h_21", "k_98", "d_97"]
                },
                l: { 
                    fieldId: "l_97", 
                    type: "calculated", 
                    value: "-20.00%",
                    section: "transmissionLosses",
                    dependencies: ["k_97", "k_98"]
                },
                m: {},
                n: { 
                    fieldId: "n_97", 
                    type: "calculated", 
                    value: "$1,927.03",
                    section: "transmissionLosses",
                    dependencies: ["i_97", "k_97", "l_12"]
                }
            }
        },

        // Envelope Totals
        "98": {
            id: "ET",
            rowId: "ET",
            label: "ET",
            cells: {
                c: { label: "Envelope Totals" },
                d: { 
                    fieldId: "d_98", 
                    type: "calculated", 
                    value: "3,577.04",
                    section: "transmissionLosses",
                    dependencies: ["d_85", "d_86", "d_87", "d_88", "d_89", "d_90", "d_91", "d_92", "d_93", "d_94", "d_95"]
                },
                e: { 
                    fieldId: "e_98", 
                    type: "calculated", 
                    value: "17.51",
                    section: "transmissionLosses",
                    dependencies: ["d_94", "d_95", "g_101", "g_102"]
                },
                f: {},
                g: {},
                h: { 
                    fieldId: "h_98", 
                    type: "calculated", 
                    value: "100%",
                    section: "transmissionLosses",
                    dependencies: ["h_85", "h_86", "h_87", "h_88", "h_89", "h_90", "h_91", "h_92", "h_93", "h_94", "h_95"]
                },
                i: { 
                    fieldId: "i_98", 
                    type: "calculated", 
                    value: "77,409.95",
                    section: "transmissionLosses",
                    dependencies: ["i_85", "i_86", "i_87", "i_88", "i_89", "i_90", "i_91", "i_92", "i_93", "i_94", "i_95"]
                },
                j: { 
                    fieldId: "j_98", 
                    type: "calculated", 
                    value: "100%",
                    section: "transmissionLosses",
                    dependencies: ["j_85", "j_86", "j_87", "j_88", "j_89", "j_90", "j_91", "j_92", "j_93", "j_94", "j_95"]
                },
                k: { 
                    fieldId: "k_98", 
                    type: "calculated", 
                    value: "-3,293.57",
                    section: "transmissionLosses",
                    dependencies: ["k_85", "k_86", "k_87", "k_88", "k_89", "k_90", "k_91", "k_92", "k_93", "k_94", "k_95"]
                },
                l: { 
                    fieldId: "l_98", 
                    type: "calculated", 
                    value: "100%",
                    section: "transmissionLosses",
                    dependencies: ["l_85", "l_86", "l_87", "l_88", "l_89", "l_90", "l_91", "l_92", "l_93", "l_94", "l_95"]
                },
                m: {},
                n: { 
                    fieldId: "n_98", 
                    type: "calculated", 
                    value: "$10,088.85",
                    section: "transmissionLosses",
                    dependencies: ["n_85", "n_86", "n_87", "n_88", "n_89", "n_90", "n_91", "n_92", "n_93", "n_94", "n_95", "n_97"]
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
                        section: cell.section || "transmissionLosses"
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
    }
    
    /**
     * Extract dropdown options from the integrated layout
     * Required for backward compatibility
     */
    function getDropdownOptions() {
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
    }
    
    /**
     * Generate layout from integrated row definitions
     * This converts our compact definition to the format expected by the renderer
     */
    function getLayout() {
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
     * Get the numeric value from a field
     * This function safely handles string and number values with proper formatting
     */
    function getNumericValue(fieldId) {
        const value = getFieldValue(fieldId);
        
        // Handle string values (with comma removal and % handling)
        if (typeof value === 'string') {
            // Handle percentage values
            if (value.endsWith('%')) {
                return parseFloat(value.replace(/,/g, '').replace('%', '')) / 100 || 0;
            }
            // Handle regular numeric values
            return parseFloat(value.replace(/,/g, '')) || 0;
        }
        // Handle number values directly
        else if (typeof value === 'number') {
            return value;
        }
        
        // Default fallback
        return 0;
    }

    /**
     * Get a field value from StateManager or DOM
     */
    function getFieldValue(fieldId) {
        // Try to get the value from StateManager first
        if (window.TEUI?.StateManager?.getValue) {
            const stateValue = window.TEUI.StateManager.getValue(fieldId);
            if (stateValue !== null && stateValue !== undefined) {
                return stateValue;
            }
        }
        
        // Fall back to DOM lookup if StateManager fails
        const element = document.querySelector(`[data-field-id="${fieldId}"]`);
        if (element) {
            if (element.tagName === 'SELECT') {
                return element.value;
            } else if (element.tagName === 'INPUT') {
                return element.value;
            } else {
                return element.textContent.trim();
            }
        }
        
        // Return null if the field is not found
        return null;
    }

    /**
     * Set a calculated value in both the DOM and StateManager
     */
    function setCalculatedValue(fieldId, value, skipFormat = false) {
        try {
            // If skipFormat is true, use value directly without formatting
            let displayValue = value;
            
            // For calculated values, apply appropriate formatting
            if (!skipFormat) {
                // Get the numeric value for formatting
                let numValue = value;
                if (typeof value === 'string') {
                    // Remove commas before parsing
                    numValue = parseFloat(value.replace(/,/g, ''));
                }
                
                // Format based on field type or pattern
                if (fieldId.startsWith('j_') || fieldId.startsWith('l_') || fieldId.startsWith('h_')) {
                    // Format as percentage for percentage columns
                    displayValue = formatPercentage(numValue);
                } else if (fieldId.startsWith('m_')) {
                    // Format as percentage for reference values
                    displayValue = formatPercentage(numValue);
                } else if (fieldId.startsWith('n_') && typeof value === 'string' && 
                          (value.includes('✓') || value.includes('✗'))) {
                    // For checkmark/X, skip formatting
                    displayValue = value; 
                } else if (fieldId.startsWith('n_')) {
                    // Format as currency for cost columns
                    displayValue = formatCurrency(numValue);
                } 
                // Format as regular number with commas
                else {
                    displayValue = formatNumber(numValue);
                }
            }
            
            // Update the value in StateManager
            if (window.TEUI?.StateManager?.setValue) {
                // Store the raw value without formatting
                const rawValue = typeof value === 'number' ? 
                    value.toString() : 
                    (typeof value === 'string' ? value.replace(/,/g, '') : value);
                    
                window.TEUI.StateManager.setValue(fieldId, rawValue, 'calculated');
            }
            
            // Update the DOM element
            const element = document.querySelector(`[data-field-id="${fieldId}"]`);
            if (element) {
                if (element.tagName === 'SELECT') {
                    element.value = displayValue;
                } else if (element.tagName === 'INPUT') {
                    element.value = displayValue;
                } else {
                    element.textContent = displayValue;
                }
            }
        } catch (error) {
            console.error(`Error setting calculated value for ${fieldId}:`, error);
        }
    }

    /**
     * Set the class of an element
     */
    function setElementClass(fieldId, className) {
        const element = document.querySelector(`[data-field-id="${fieldId}"]`);
        if (element) {
            // Remove existing status classes
            element.classList.remove('checkmark', 'warning', 'neutral');
            
            // Add the new class
            element.classList.add(className);
        }
    }

    /**
     * Format a number with commas and proper decimal places
     */
    function formatNumber(value) {
        if (typeof value !== 'number') {
            value = parseFloat(value);
        }
        
        // Return empty string for NaN
        if (isNaN(value)) {
            return "";
        }
        
        // Handle very small numbers
        if (Math.abs(value) < 0.01 && value !== 0) {
            return value.toFixed(2);
        }
        
        // Format integers without decimal places
        if (Number.isInteger(value)) {
            return value.toLocaleString(undefined, {
                minimumFractionDigits: 0,
                maximumFractionDigits: 0
            });
        }
        
        // Format with 2 decimal places
        return value.toLocaleString(undefined, {
            minimumFractionDigits: 2,
            maximumFractionDigits: 2
        });
    }
    
    /**
     * Format a currency value
     */
    function formatCurrency(value) {
        if (typeof value !== 'number') {
            value = parseFloat(value);
        }
        
        // Return empty string for NaN
        if (isNaN(value)) {
            return "";
        }
        
        // Format as currency with $ symbol
        if (value === 0) {
            return "$0.00";
        } else if (Math.abs(value) < 0.01) {
            return value < 0 ? "-$0.00" : "$0.00";
        } else {
            const absValue = Math.abs(value).toLocaleString(undefined, {
                minimumFractionDigits: 2,
                maximumFractionDigits: 2
            });
            return value < 0 ? `-$${absValue}` : `$${absValue}`;
        }
    }
    
    /**
     * Format a percentage value
     */
    function formatPercentage(value) {
        // Handle string percentages
        if (typeof value === 'string' && value.endsWith('%')) {
            value = parseFloat(value.replace('%', ''));
        }
        
        if (typeof value !== 'number') {
            value = parseFloat(value);
        }
        
        // Return empty string for NaN
        if (isNaN(value)) {
            return "";
        }
        
        // Format percentage - using 0 decimal places for a cleaner look
        // This matches what's in Sections 9 and 10
        return `${Math.round(value)}%`;
    }
    
    /**
     * Initialize all event handlers for this section
     */
    function initializeEventHandlers() {
        // console.log("Initializing event handlers for Section 11");
        
        try {
            // Call our comprehensive field initialization function
            // rather than duplicating the logic
            forceFieldInitialization();
            
            // Add tooltip styles to ensure proper display
            addTooltipStyles();
            addCheckmarkStyles();
            
            // console.log("Event handlers initialized for Section 11");
        } catch (error) {
            // console.error("Error initializing event handlers:", error);
        }
    }
    
    /**
     * Handle blur event on editable fields
     */
    function handleFieldBlur(event) {
        const fieldId = event.target.getAttribute('data-field-id');
        if (!fieldId) return;
        
        // Get the raw value from the field (remove commas, etc.)
        let value = event.target.textContent.trim().replace(/,/g, '');
        
        // For percentage fields, remove % and convert to decimal
        if (fieldId === 'd_97' && value.endsWith('%')) {
            value = parseFloat(value.replace('%', '')) / 100;
        } else if (isNaN(parseFloat(value))) {
            // Skip if value is not a number
            return;
        } else {
            value = parseFloat(value);
        }
        
        // Format the display value
        if (fieldId === 'd_97') {
            event.target.textContent = `${(value * 100).toFixed(0)}%`;
        } else {
            event.target.textContent = formatNumber(value);
        }
        
        // Save to StateManager
        if (window.TEUI?.StateManager?.setValue) {
            window.TEUI.StateManager.setValue(fieldId, value.toString(), 'user-modified');
        }
        
        // Recalculate all values
        calculateAll();
    }
    
    /**
     * Handle keydown event on editable fields
     */
    function handleFieldKeydown(event) {
        // Enter key should act like Tab
        if (event.key === 'Enter') {
            event.preventDefault();
            event.target.blur();
        }
    }

    /**
     * Called when the section is rendered
     * This is a good place to initialize values and run initial calculations
     */
    function onSectionRendered() {
        // console.log("Section 11 rendered");
        // ... existing code ...
        
        // Initialize editable fields with improved approach
        forceFieldInitialization();
        
        // Add styles for tooltips
        addTooltipStyles();
        addCheckmarkStyles();
        
        // Add class to editable cells to activate styling
        const editableCells = document.querySelectorAll('.editable, [contenteditable="true"]');
        editableCells.forEach(cell => {
            // Add event listener for focus to add 'editing' class
            cell.addEventListener('focus', function() {
                this.classList.add('editing');
            });
            // Remove 'editing' class on blur
            cell.addEventListener('blur', function() {
                this.classList.remove('editing');
            });
        });
        
        // Second initialization with delay to ensure DOM is fully loaded
        setTimeout(function() {
            forceFieldInitialization();
            // console.log("Section 11 re-initialized after timeout");
        }, 500);
    }
    
    /**
     * Force initialization of all editable fields
     * This is a more direct approach to ensure fields are properly set up
     */
    function forceFieldInitialization() {
        // Define editable field IDs
        const editableFields = [
            // Area columns
            'c_63', 'c_64', 'c_65', 'c_66', 'c_67', 'c_68', 'c_69', 'c_70',
            'c_71', 'c_72', 'c_73', 'c_74', 'c_75', 'c_76', 'c_77', 'c_78',
            // RSI columns
            'e_63', 'e_64', 'e_65', 'e_66', 'e_67', 'e_68', 'e_69', 'e_70',
            'e_71', 'e_72', 'e_73', 'e_74', 'e_75', 'e_76', 'e_77', 'e_78',
            // U-Value columns
            'g_63', 'g_64', 'g_65', 'g_66', 'g_67', 'g_68', 'g_69', 'g_70',
            'g_71', 'g_72', 'g_73', 'g_74', 'g_75', 'g_76', 'g_77', 'g_78',
            // Thermal bridge penalty
            'd_97'
        ];
        
        // Also include the editable fields from the original initializeEventHandlers function
        const additionalFields = [
            // Area columns
            "d_85", "d_86", "d_87", "d_88", "d_89", "d_90", "d_91", "d_92", "d_93", "d_94", "d_95", "d_96",
            // RSI columns
            "f_85", "f_86", "f_87", "f_94", "f_95",
            // U-Value columns
            "g_88", "g_89", "g_90", "g_91", "g_92", "g_93"
        ];
        
        // Combine the arrays and remove duplicates
        const allEditableFields = [...new Set([...editableFields, ...additionalFields])];
        
        let initializedCount = 0;
        let notFoundCount = 0;
        
        // Use a consistent tooltip text for d_97
        const d97TooltipText = "U-Value Reduction Factor from 5-50% with 5% for PH, 50% for Conventional Design";
        
        // Force all fields to be editable
        allEditableFields.forEach(fieldId => {
            // Try both selection methods to ensure field is found
            let field = document.getElementById(fieldId);
            if (!field) {
                field = document.querySelector(`[data-field-id="${fieldId}"]`);
            }
            
            if (field) {
                // Set contenteditable attribute directly
                field.setAttribute('contenteditable', 'true');
                field.classList.add('editable', 'user-input');
                
                // Special handling for thermal bridge penalty field
                if (fieldId === 'd_97') {
                    // Add tooltip to thermal bridge field
                    field.setAttribute('title', d97TooltipText);
                    field.setAttribute('data-tooltip', d97TooltipText);
                    field.classList.add('tooltip-cell');
                    
                    // Format the initial content as percentage if needed
                    if (!field.textContent.includes('%')) {
                        const value = parseFloat(field.textContent.replace(/,/g, ''));
                        if (!isNaN(value)) {
                            field.textContent = `${Math.round(value * 100)}%`;
                        }
                    }
                }
                
                // Add important event handlers
                field.onblur = function() {
                    // Format numbers when leaving field
                    let val = this.innerText.trim();
                    if (val && !isNaN(parseFloat(val))) {
                        let num = parseFloat(val);
                        let stateValue = num; // Value to store in StateManager
                        
                        // Apply appropriate formatting based on field type
                        if (fieldId === 'd_97') {
                            // For thermal bridge penalty, format as percentage and store as decimal
                            if (!val.includes('%')) {
                                this.innerText = `${Math.round(num)}%`;
                                stateValue = num / 100; // Convert to decimal for StateManager
                            } else {
                                stateValue = num / 100; // Already percentage, convert to decimal
                            }
                        }
                        // For RSI fields (e_xx) use 2 decimal places
                        else if (fieldId.startsWith('e_')) {
                            this.innerText = num.toFixed(2);
                        } 
                        // For U-Value fields (g_xx) use 3 decimal places
                        else if (fieldId.startsWith('g_')) {
                            this.innerText = num.toFixed(3);
                        }
                        // For all other numerical fields use 1 decimal place
                        else {
                            this.innerText = num.toFixed(1);
                        }
                        
                        // Always save the raw value to StateManager for all fields
                        if (window.TEUI?.StateManager?.setValue) {
                            window.TEUI.StateManager.setValue(fieldId, stateValue.toString(), 'user-modified');
                            // console.log(`Updated ${fieldId} to ${stateValue}`);
                        }
                        
                        // Force recalculation after edit
                        setTimeout(() => {
                            calculateAll();
                            // console.log("Calculation triggered after editing field:", fieldId);
                        }, 0);
                    }
                };
                
                field.onkeydown = function(e) {
                    if (e.key === 'Enter') {
                        e.preventDefault();
                        this.blur();
                    }
                };
                
                field.onfocus = function() {
                    this.classList.add('editing');
                    
                    // For percentage fields, remove % when editing
                    if (fieldId === "d_97" && this.textContent.includes('%')) {
                        this.textContent = this.textContent.replace('%', '').trim();
                    }
                };
                
                field.onfocusout = function() {
                    this.classList.remove('editing');
                };
                
                initializedCount++;
            } else {
                notFoundCount++;
                // console.warn(`Editable field #${fieldId} not found in DOM`);
            }
        });
        
        // console.log(`Initialized ${initializedCount} editable fields, ${notFoundCount} not found`);
    }
    
    /**
     * Add specific tooltip styles to ensure they display correctly
     */
    function addTooltipStyles() {
        let tooltipStyle = document.getElementById('tooltip-styles');
        if (!tooltipStyle) {
            tooltipStyle = document.createElement('style');
            tooltipStyle.id = 'tooltip-styles';
            tooltipStyle.textContent = `
                .tooltip-cell {
                    position: relative;
                    cursor: help;
                    border-bottom: 1px dotted #666;
                }
                
                .tooltip-cell:hover::after {
                    content: attr(data-tooltip);
                    position: absolute;
                    left: 0;
                    top: 100%;
                    z-index: 1000;
                    background: #333;
                    color: white;
                    padding: 8px 12px;
                    border-radius: 4px;
                    font-size: 0.85em;
                    white-space: normal;
                    max-width: 300px;
                    box-shadow: 0 3px 10px rgba(0,0,0,0.3);
                    pointer-events: none;
                    margin-top: 5px;
                    display: block;
                }
            `;
            document.head.appendChild(tooltipStyle);
        }
    }
    
    /**
     * Calculate all values for this section
     */
    function calculateAll() {
        // debugLog('Starting calculations for Section 11');
        
        try {
            // Calculate values for each row
            calculateRoofValues();
            calculateWallsAboveGradeValues();
            calculateFloorExposedValues();
            calculateDoorsValues();
            calculateWindowNorthValues();
            calculateWindowEastValues();
            calculateWindowSouthValues();
            calculateWindowWestValues();
            calculateSkylightsValues();
            calculateWallsBelowGradeValues();
            calculateFloorSlabValues();
            calculateThermalBridgePenalty();
            
            // Calculate totals last (after all individual rows)
            calculateEnvelopeTotals();
            
            // Update percentages and reference status
            updatePercentages();
            
            // Final UI cleanup to ensure formatting is correct
            updateUIAfterCalculation();
            
            // debugLog('Calculation complete for Section 11');
        } catch (error) {
            // console.error('Error calculating Section 11 values:', error);
        }
    }
    
    /**
     * Calculate values for Roof (row 85)
     */
    function calculateRoofValues() {
        try {
            // Get input values
            const area = getNumericValue('d_85');
            const rsiValue = getNumericValue('f_85');
            const heatingDegreeDays = getNumericValue('d_20');
            const coolingDegreeDays = getNumericValue('d_21');
            
            // Calculation: e_85 = f_85 * 5.678 (Rimp)
            const rimpValue = rsiValue * 5.678;
            setCalculatedValue('e_85', rimpValue);
            
            // Calculation: g_85 = 1 / f_85 (U-Value)
            const uValue = 1 / rsiValue;
            setCalculatedValue('g_85', uValue);
            
            // Get reference areas for percentage calculations (will be calculated in the totals)
            const totalAreaAe = getTotalAreaExposedToAir();
            
            // Calculation: h_85 = d_85 / d_101 (% of Ae)
            const percentageOfAe = (area / totalAreaAe) * 100;
            setCalculatedValue('h_85', formatPercentage(percentageOfAe));
            
            // Calculation: i_85 = d_85 * (d_20 * 24) / (f_85 * 1000) (Heatloss kWh/yr)
            const heatloss = (area * (heatingDegreeDays * 24)) / (rsiValue * 1000);
            setCalculatedValue('i_85', heatloss);
            
            // Totals will be calculated separately to get percentages
            
            // Calculation: k_85 = d_85 * (d_21 * 24) / (f_85 * 1000) (Heatgain kWh/Cool Season)
            const heatgain = (area * (coolingDegreeDays * 24)) / (rsiValue * 1000);
            setCalculatedValue('k_85', heatgain);
            
            // Reference percentages will be calculated after all rows
            
            // Calculation: m_85 = f_85 / baseline (Reference %)
            // For now, hardcoding the baseline, but should be retrieved from a code reference table
            const baseline = 4.87; // Baseline RSI value for row 85 (Roof)
            const referencePercent = (rsiValue / baseline) * 100;
            // IMPORTANT: Format this as a percentage string for column M
            setCalculatedValue('m_85', `${Math.round(referencePercent)}%`, true);
            
            // Set reference status indicator (checkmark/X)
            updateReferenceStatusForRow(85);
            
        } catch (error) {
            // console.error('Error calculating Roof values:', error);
        }
    }
    
    /**
     * Calculate values for Walls Above Grade (row 86)
     */
    function calculateWallsAboveGradeValues() {
        try {
            // Get input values
            const area = getNumericValue('d_86');
            const rsiValue = getNumericValue('f_86');
            const heatingDegreeDays = getNumericValue('d_20');
            const coolingDegreeDays = getNumericValue('d_21');
            
            // Calculation: e_86 = f_86 * 5.678 (Rimp)
            const rimpValue = rsiValue * 5.678;
            setCalculatedValue('e_86', rimpValue);
            
            // Calculation: g_86 = 1 / f_86 (U-Value)
            const uValue = 1 / rsiValue;
            setCalculatedValue('g_86', uValue);
            
            // Get reference areas for percentage calculations
            const totalAreaAe = getTotalAreaExposedToAir();
            
            // Calculation: h_86 = d_86 / d_101 (% of Ae)
            const percentageOfAe = (area / totalAreaAe) * 100;
            setCalculatedValue('h_86', formatPercentage(percentageOfAe));
            
            // Calculation: i_86 = d_86 * (d_20 * 24) / (f_86 * 1000) (Heatloss kWh/yr)
            const heatloss = (area * (heatingDegreeDays * 24)) / (rsiValue * 1000);
            setCalculatedValue('i_86', heatloss);
            
            // Totals will be calculated separately to get percentages
            
            // Calculation: k_86 = d_86 * (d_21 * 24) / (f_86 * 1000) (Heatgain kWh/Cool Season)
            const heatgain = (area * (coolingDegreeDays * 24)) / (rsiValue * 1000);
            setCalculatedValue('k_86', heatgain);
            
            // Reference percentages will be calculated after all rows
            
            // Calculation: m_86 = f_86 / baseline (Reference %)
            // For now, hardcoding the baseline, but should be retrieved from a code reference table
            const baseline = 4.21; // Baseline RSI value for row 86 (Walls Above Grade)
            const referencePercent = (rsiValue / baseline) * 100;
            setCalculatedValue('m_86', formatPercentage(referencePercent));
            
            // Set reference status indicator (checkmark/X)
            updateReferenceStatusForRow(86);
            
        } catch (error) {
            console.error('Error calculating Walls Above Grade values:', error);
        }
    }
    
    /**
     * Calculate values for Floor Exposed (row 87)
     */
    function calculateFloorExposedValues() {
        // Similar implementation to rows 85-86, following the same pattern
        try {
            // Get input values
            const area = getNumericValue('d_87');
            const rsiValue = getNumericValue('f_87');
            const heatingDegreeDays = getNumericValue('d_20');
            const coolingDegreeDays = getNumericValue('d_21');
            
            // Calculation: e_87 = f_87 * 5.678 (Rimp)
            const rimpValue = rsiValue * 5.678;
            setCalculatedValue('e_87', rimpValue);
            
            // Calculation: g_87 = 1 / f_87 (U-Value)
            const uValue = 1 / rsiValue;
            setCalculatedValue('g_87', uValue);
            
            // Get reference areas for percentage calculations
            const totalAreaAe = getTotalAreaExposedToAir();
            
            // Calculation: h_87 = d_87 / d_101 (% of Ae)
            const percentageOfAe = (area / totalAreaAe) * 100;
            setCalculatedValue('h_87', formatPercentage(percentageOfAe));
            
            // Calculation: i_87 = d_87 * (d_20 * 24) / (f_87 * 1000) (Heatloss kWh/yr)
            const heatloss = (area * (heatingDegreeDays * 24)) / (rsiValue * 1000);
            setCalculatedValue('i_87', heatloss);
            
            // Calculation: k_87 = d_87 * (d_21 * 24) / (f_87 * 1000) (Heatgain kWh/Cool Season)
            const heatgain = (area * (coolingDegreeDays * 24)) / (rsiValue * 1000);
            setCalculatedValue('k_87', heatgain);
            
            // Calculation: m_87 = f_87 / baseline (Reference %)
            const baseline = 5.64; // Baseline RSI value for row 87 (Floor Exposed)
            const referencePercent = (rsiValue / baseline) * 100;
            setCalculatedValue('m_87', formatPercentage(referencePercent));
            
            // Set reference status indicator (checkmark/X)
            updateReferenceStatusForRow(87);
            
        } catch (error) {
            console.error('Error calculating Floor Exposed values:', error);
        }
    }
    
    /**
     * Calculate values for Doors (row 88)
     */
    function calculateDoorsValues() {
        try {
            // Get input values
            const area = getNumericValue('d_88');
            const uValue = getNumericValue('g_88');
            const rsiValue = 1 / uValue; // Calculate RSI from U-Value
            const heatingDegreeDays = getNumericValue('d_20');
            const coolingDegreeDays = getNumericValue('d_21');
            
            // Calculation: f_88 = 1 / g_88 (RSI from U-Value)
            setCalculatedValue('f_88', rsiValue);
            
            // Calculation: e_88 = f_88 * 5.678 (Rimp)
            const rimpValue = rsiValue * 5.678;
            setCalculatedValue('e_88', rimpValue);
            
            // Get reference areas for percentage calculations
            const totalAreaAe = getTotalAreaExposedToAir();
            
            // Calculation: h_88 = d_88 / d_101 (% of Ae)
            const percentageOfAe = (area / totalAreaAe) * 100;
            setCalculatedValue('h_88', formatPercentage(percentageOfAe));
            
            // Calculation: i_88 = d_88 * (d_20 * 24) / (f_88 * 1000) (Heatloss kWh/yr)
            const heatloss = (area * (heatingDegreeDays * 24)) / (rsiValue * 1000);
            setCalculatedValue('i_88', heatloss);
            
            // Calculation: k_88 = d_88 * (d_21 * 24) / (f_88 * 1000) (Heatgain kWh/Cool Season)
            const heatgain = (area * (coolingDegreeDays * 24)) / (rsiValue * 1000);
            setCalculatedValue('k_88', heatgain);
            
            // Calculation: m_88 = baseline / g_88 (Reference %)
            const baseline = 1.6; // Baseline U-value for row 88 (Doors)
            const referencePercent = (baseline / uValue) * 100;
            setCalculatedValue('m_88', formatPercentage(referencePercent));
            
            // Set reference status indicator (checkmark/X)
            updateReferenceStatusForRow(88);
            
        } catch (error) {
            console.error('Error calculating Doors values:', error);
        }
    }
    
    /**
     * Helper function to get the total area exposed to air
     */
    function getTotalAreaExposedToAir() {
        // Sum of all areas exposed to air (rows 85-93)
        const areas = [
            getNumericValue('d_85'), // Roof
            getNumericValue('d_86'), // Walls Above Grade
            getNumericValue('d_87'), // Floor Exposed
            getNumericValue('d_88'), // Doors
            getNumericValue('d_89'), // Window Area North
            getNumericValue('d_90'), // Window Area East
            getNumericValue('d_91'), // Window Area South
            getNumericValue('d_92'), // Window Area West
            getNumericValue('d_93')  // Skylights
        ];
        
        return areas.reduce((sum, area) => sum + area, 0);
    }
    
    /**
     * Helper function to calculate the envelope totals
     */
    function calculateEnvelopeTotals() {
        try {
            // Sum of all areas (rows 85-95)
            const totalArea = [
                getNumericValue('d_85'), // Roof
                getNumericValue('d_86'), // Walls Above Grade
                getNumericValue('d_87'), // Floor Exposed
                getNumericValue('d_88'), // Doors
                getNumericValue('d_89'), // Window Area North
                getNumericValue('d_90'), // Window Area East
                getNumericValue('d_91'), // Window Area South
                getNumericValue('d_92'), // Window Area West
                getNumericValue('d_93'), // Skylights
                getNumericValue('d_94'), // Walls Below Grade
                getNumericValue('d_95')  // Floor Slab
            ].reduce((sum, area) => sum + area, 0);
            
            setCalculatedValue('d_98', totalArea);
            
            // Calculate the overall R-value
            // Using the formula from the spreadsheet: =IF(D94+D95=0, 1/G101*5.678, 1/G102*5.678)
            const areaExposedToGround = getNumericValue('d_94') + getNumericValue('d_95');
            let rimpValue;
            
            if (areaExposedToGround === 0) {
                const uValueAe = getNumericValue('g_101');
                // Prevent division by zero
                if (uValueAe !== 0) {
                    rimpValue = (1 / uValueAe) * 5.678;
                } else {
                    rimpValue = 0; // Default if denominator is zero
                }
            } else {
                const uValueAg = getNumericValue('g_102');
                // Prevent division by zero
                if (uValueAg !== 0) {
                    rimpValue = (1 / uValueAg) * 5.678;
                } else {
                    rimpValue = 0; // Default if denominator is zero
                }
            }
            
            // Special formatting for infinity or very large values
            if (!isFinite(rimpValue) || rimpValue > 1e10) {
                setCalculatedValue('e_98', "∞", true); // Use infinity symbol for display
            } else {
                setCalculatedValue('e_98', rimpValue);
            }
            
            // Sum of all heatloss (rows 85-95)
            const totalHeatloss = [
                getNumericValue('i_85'), // Roof
                getNumericValue('i_86'), // Walls Above Grade
                getNumericValue('i_87'), // Floor Exposed
                getNumericValue('i_88'), // Doors
                getNumericValue('i_89'), // Window Area North
                getNumericValue('i_90'), // Window Area East
                getNumericValue('i_91'), // Window Area South
                getNumericValue('i_92'), // Window Area West
                getNumericValue('i_93'), // Skylights
                getNumericValue('i_94'), // Walls Below Grade
                getNumericValue('i_95')  // Floor Slab
            ].reduce((sum, heatloss) => sum + heatloss, 0);
            
            setCalculatedValue('i_98', totalHeatloss);
            
            // Sum of all heatgain (rows 85-95)
            const totalHeatgain = [
                getNumericValue('k_85'), // Roof
                getNumericValue('k_86'), // Walls Above Grade
                getNumericValue('k_87'), // Floor Exposed
                getNumericValue('k_88'), // Doors
                getNumericValue('k_89'), // Window Area North
                getNumericValue('k_90'), // Window Area East
                getNumericValue('k_91'), // Window Area South
                getNumericValue('k_92'), // Window Area West
                getNumericValue('k_93'), // Skylights
                getNumericValue('k_94'), // Walls Below Grade
                getNumericValue('k_95')  // Floor Slab
            ].reduce((sum, heatgain) => sum + heatgain, 0);
            
            setCalculatedValue('k_98', totalHeatgain);
            
            // Update totals indicator
            setCalculatedValue('n_98', "✓", true);
            setElementClass('n_98', 'checkmark');
            
            // Set total percentages 
            setCalculatedValue('h_98', "100%", true);
            setCalculatedValue('j_98', "100%", true);
            setCalculatedValue('l_98', "100%", true);
        } catch (error) {
            console.error('Error calculating Envelope Totals:', error);
        }
    }
    
    /**
     * Update percentages for all rows based on totals
     */
    function updatePercentages() {
        // Get the totals
        const totalHeatloss = getNumericValue('i_98');
        const totalHeatgain = getNumericValue('k_98');
        
        // Update percentages for each row
        for (let i = 85; i <= 95; i++) {
            // Heatloss percentage
            const heatloss = getNumericValue(`i_${i}`);
            const heatlossPercent = (heatloss / totalHeatloss) * 100;
            setCalculatedValue(`j_${i}`, formatPercentage(heatlossPercent));
            
            // Heatgain percentage
            const heatgain = getNumericValue(`k_${i}`);
            const heatgainPercent = (heatgain / totalHeatgain) * 100;
            setCalculatedValue(`l_${i}`, formatPercentage(heatgainPercent));
            
            // Update reference indicator
            updateReferenceStatusForRow(i);
        }
        
        // Thermal Bridge Penalty percentages (row 97)
        const tbpHeatloss = getNumericValue('i_97');
        const tbpHeatlossPercent = (tbpHeatloss / totalHeatloss) * 100;
        setCalculatedValue('j_97', formatPercentage(tbpHeatlossPercent));
        
        const tbpHeatgain = getNumericValue('k_97');
        const tbpHeatgainPercent = (tbpHeatgain / totalHeatgain) * 100;
        setCalculatedValue('l_97', formatPercentage(tbpHeatgainPercent));
        
        // Update row 97 reference indicator
        updateReferenceStatusForRow(97);
        
        // Set total percentages for row 98 (Envelope Totals)
        setCalculatedValue('h_98', "100%", true);
        setCalculatedValue('j_98', "100%", true);
        setCalculatedValue('l_98', "100%", true);
    }
    
    /**
     * Update the reference status indicators for a specific row
     * This sets checkmarks/X based on whether values meet standards
     */
    function updateReferenceStatusForRow(rowId) {
        try {
            // Skip rows that don't have reference values
            if (rowId === 96 || rowId === 98) return;
            
            // Get the reference percentage value
            let refValue = getNumericValue(`m_${rowId}`);
            if (isNaN(refValue) || refValue === 0) return;
            
            // For column M, ensure it shows percentage
            setCalculatedValue(`m_${rowId}`, `${Math.round(refValue)}%`, true);
            
            // For column N, if reference value is > 100%, component is better than code
            const isGood = refValue >= 100;
            
            // Set checkmark or X in column N
            setCalculatedValue(`n_${rowId}`, isGood ? "✓" : "✗", true);
            setElementClass(`n_${rowId}`, isGood ? "checkmark" : "warning");
            
            // Add tooltip to the checkmark/warning cell
            const statusCell = document.querySelector(`[data-field-id="n_${rowId}"]`);
            if (statusCell) {
                statusCell.classList.add('tooltip-cell');
                statusCell.setAttribute('title', isGood ? 
                    'This component meets or exceeds the reference standard' : 
                    'This component does not meet the reference standard');
            }
        } catch (error) {
            console.error(`Error updating reference status for row ${rowId}:`, error);
        }
    }
    
    // Functions for calculating other rows follow the same pattern
    // Adding placeholder functions to be implemented as needed
    
    function calculateWindowNorthValues() {
        // Similar implementation to calculateDoorsValues
    }
    
    function calculateWindowEastValues() {
        // Similar implementation to calculateDoorsValues
    }
    
    function calculateWindowSouthValues() {
        // Similar implementation to calculateDoorsValues
    }
    
    function calculateWindowWestValues() {
        // Similar implementation to calculateDoorsValues
    }
    
    function calculateSkylightsValues() {
        // Similar implementation to calculateDoorsValues
    }
    
    function calculateWallsBelowGradeValues() {
        // Similar implementation to rows 85-86, but uses ground-facing HDD
    }
    
    function calculateFloorSlabValues() {
        // Similar implementation to walls below grade
    }
    
    /**
     * Calculate the thermal bridge penalty
     */
    function calculateThermalBridgePenalty() {
        debugLog('Calculating thermal bridge penalty');
        
        try {
            // Get the thermal bridge penalty percentage from state or DOM
            // StateManager should have the raw decimal value (0.2 for 20%)
            let penalty = 0;
            
            // First try to get from the StateManager (preferred method)
            if (window.TEUI?.StateManager?.getValue) {
                const stateValue = window.TEUI.StateManager.getValue('d_97');
                if (stateValue !== null && stateValue !== undefined) {
                    // Parse decimal value from state (should be 0.XX format)
                    penalty = parseFloat(stateValue);
                    debugLog(`Retrieved penalty from StateManager: ${penalty} (raw: ${stateValue})`);
                }
            }
            
            // Fallback to DOM if StateManager doesn't have the value
            if (penalty === 0 || isNaN(penalty)) {
                const penaltyField = document.querySelector('[data-field-id="d_97"]');
                if (penaltyField) {
                    let value = penaltyField.textContent.trim();
                    debugLog(`Reading penalty from DOM element: "${value}"`);
                    
                    // Handle percentage display format (e.g., "20%")
                    if (value.includes('%')) {
                        penalty = parseFloat(value.replace(/[%,]/g, '')) / 100;
                        debugLog(`Parsed percentage value: ${penalty}`);
                    } else {
                        // Handle direct decimal input (0.2) or number input (20)
                        penalty = parseFloat(value.replace(/,/g, ''));
                        // If number is > 1, assume it's a percentage and convert
                        if (penalty > 1) {
                            penalty = penalty / 100;
                            debugLog(`Converted large number to decimal: ${penalty}`);
                        }
                    }
                }
            }
            
            // Default to 20% if no valid value found
            if (isNaN(penalty) || penalty === 0) {
                penalty = 0.2; // 20% is the default
                debugLog('Using default penalty value (20%)');
                
                // Update the DOM display
                const penaltyField = document.querySelector('[data-field-id="d_97"]');
                if (penaltyField) {
                    penaltyField.textContent = '20%';
                }
                
                // Update StateManager with default
                if (window.TEUI?.StateManager?.setValue) {
                    window.TEUI.StateManager.setValue('d_97', '0.2', 'default');
                }
            }
            
            // Ensure the display shows the percentage format
            const penaltyField = document.querySelector('[data-field-id="d_97"]');
            if (penaltyField && !penaltyField.textContent.includes('%')) {
                const percentValue = Math.round(penalty * 100);
                penaltyField.textContent = `${percentValue}%`;
                debugLog(`Updated display to show percentage: ${percentValue}%`);
            }
            
            // Get the total heat loss/gain values
            const totalHeatloss = getNumericValue('i_98');
            const totalHeatgain = Math.abs(getNumericValue('k_98')); // Use absolute value for calculation
            
            debugLog('Calculation values:', {
                penalty: penalty,
                totalHeatloss: totalHeatloss,
                totalHeatgain: totalHeatgain
            });
            
            // Thermal bridge penalty is a percentage of total heatloss and heatgain
            const penaltyHeatloss = totalHeatloss * penalty;
            setCalculatedValue('i_97', penaltyHeatloss);
            
            // For cooling, penalize the heat gain
            const penaltyHeatgain = -totalHeatgain * penalty; // Negative for cooling gain direction
            setCalculatedValue('k_97', penaltyHeatgain);
            
            // Calculate heating costs using electricity cost
            const electricityCost = getNumericValue('l_12');
            const heatingCosts = penaltyHeatloss * electricityCost;
            setCalculatedValue('n_97', heatingCosts);
            
            debugLog('Penalty results:', {
                penaltyHeatloss: penaltyHeatloss,
                penaltyHeatgain: penaltyHeatgain,
                heatingCosts: heatingCosts
            });
            
            // Critical: Set values for columns j and l
            // Set percentage for column j (format as percentage value)
            const tbpHeatlossPercent = (penaltyHeatloss / totalHeatloss) * 100;
            setCalculatedValue('j_97', formatPercentage(tbpHeatlossPercent));
            
            // Set percentage for column l (format as percentage value)
            // Use total heat gain (absolute value) as the denominator
            const tbpHeatgainPercent = (-penaltyHeatgain / totalHeatgain) * 100;
            setCalculatedValue('l_97', formatPercentage(tbpHeatgainPercent));
            
            // Set m column display value (stored as % of reference)
            setCalculatedValue('m_97', formatPercentage(penalty * 100 * 2), true); // 2x for reference display
            
            debugLog('Percentage values:', {
                tbpHeatlossPercent: tbpHeatlossPercent,
                tbpHeatgainPercent: tbpHeatgainPercent,
                referencePercent: penalty * 100 * 2
            });
            
            // Set checkmark status in column n based on thermal bridge penalty
            // Rule: Lower thermal bridge penalty (<=20%) is better
            const isGood = penalty <= 0.2; // 20% or less is good
            updateReferenceStatusForRow(97);
            
            debugLog('Thermal bridge penalty calculation complete');
            
        } catch (error) {
            console.error("Error in calculateThermalBridgePenalty:", error);
        }
    }
    
    /**
     * Update the UI after calculations to ensure correct formatting
     */
    function updateUIAfterCalculation() {
        // Make sure all percentage cells use the right format
        const percentageCells = [
            // h column (% of A)
            "h_85", "h_86", "h_87", "h_88", "h_89", "h_90", "h_91", "h_92", "h_93", "h_94", "h_95", "h_98",
            // j column (Heatloss %)
            "j_85", "j_86", "j_87", "j_88", "j_89", "j_90", "j_91", "j_92", "j_93", "j_94", "j_95", "j_97", "j_98",
            // l column (Heatgain %)
            "l_85", "l_86", "l_87", "l_88", "l_89", "l_90", "l_91", "l_92", "l_93", "l_94", "l_95", "l_97", "l_98",
            // m column (Reference %)
            "m_85", "m_86", "m_87", "m_88", "m_89", "m_90", "m_91", "m_92", "m_93", "m_94", "m_95"
        ];
        
        percentageCells.forEach(cellId => {
            const cell = document.querySelector(`[data-field-id="${cellId}"]`);
            if (cell) {
                const value = cell.textContent.trim().replace(/,/g, '').replace(/%/g, '');
                if (!isNaN(parseFloat(value))) {
                    cell.textContent = `${Math.round(parseFloat(value))}%`;
                }
            }
        });
        
        // Make sure all checkmark cells use the right format
        const checkmarkCells = [
            "n_85", "n_86", "n_87", "n_88", "n_89", "n_90", "n_91", "n_92", "n_93", "n_94", "n_95", "n_97", "n_98"
        ];
        
        checkmarkCells.forEach(cellId => {
            const cell = document.querySelector(`[data-field-id="${cellId}"]`);
            if (cell) {
                const value = cell.textContent.trim();
                // If it's a checkmark or X, leave it
                if (value === "✓" || value === "✗") {
                    // Already correct
                } 
                // If it has a $ sign, it's a currency value that needs to be replaced
                else if (value.includes("$")) {
                    // Check if the reference value is good
                    const rowId = cellId.split("_")[1];
                    const refCell = document.querySelector(`[data-field-id="m_${rowId}"]`);
                    if (refCell) {
                        const refValue = parseFloat(refCell.textContent.replace(/,/g, '').replace(/%/g, ''));
                        const isGood = refValue >= 100;
                        cell.textContent = isGood ? "✓" : "✗";
                        setElementClass(cellId, isGood ? "checkmark" : "warning");
                    }
                }
            }
        });
    }
    
    //==========================================================================
    // PUBLIC API
    //==========================================================================
    
    // Create the public API that will be returned from the module
    const publicAPI = {
        // Field definitions and layout - REQUIRED
        getFields: getFields,
        getDropdownOptions: getDropdownOptions,
        getLayout: getLayout,
        
        // Event handling and initialization - REQUIRED
        initializeEventHandlers: initializeEventHandlers,
        onSectionRendered: onSectionRendered,
        
        // Section-specific utility functions
        calculateAll: calculateAll,
        calculateRoofValues: calculateRoofValues,
        calculateWallsAboveGradeValues: calculateWallsAboveGradeValues, 
        calculateFloorExposedValues: calculateFloorExposedValues,
        calculateDoorsValues: calculateDoorsValues,
        calculateWindowNorthValues: calculateWindowNorthValues,
        calculateWindowEastValues: calculateWindowEastValues,
        calculateWindowSouthValues: calculateWindowSouthValues,
        calculateWindowWestValues: calculateWindowWestValues,
        calculateSkylightsValues: calculateSkylightsValues,
        calculateWallsBelowGradeValues: calculateWallsBelowGradeValues,
        calculateFloorSlabValues: calculateFloorSlabValues,
        calculateThermalBridgePenalty: calculateThermalBridgePenalty,
        calculateEnvelopeTotals: calculateEnvelopeTotals,
        updatePercentages: updatePercentages,
        updateUIAfterCalculation: updateUIAfterCalculation,
        registerWithStateManager: registerWithStateManager,
        
        // Helper functions
        getNumericValue: getNumericValue,
        getFieldValue: getFieldValue,
        setCalculatedValue: setCalculatedValue,
        formatNumber: formatNumber,
        formatCurrency: formatCurrency,
        formatPercentage: formatPercentage
    };
    
    return publicAPI;
})();

// Export critical functions to the global namespace for cross-module access
document.addEventListener('DOMContentLoaded', function() {
    // Create section namespace for global references
    window.TEUI = window.TEUI || {};
    window.TEUI.sect11 = window.TEUI.sect11 || {};
    window.TEUI.sect11.initialized = false;
    
    // Extract the module
    const module = window.TEUI.SectionModules.sect11;
    
    // Expose critical functions to the global namespace
    window.TEUI.sect11.calculateAll = module.calculateAll;
    window.TEUI.sect11.calculateRoofValues = module.calculateRoofValues;
    window.TEUI.sect11.calculateWallsAboveGradeValues = module.calculateWallsAboveGradeValues;
    window.TEUI.sect11.calculateEnvelopeTotals = module.calculateEnvelopeTotals;
    window.TEUI.sect11.updatePercentages = module.updatePercentages;
    window.TEUI.sect11.updateUIAfterCalculation = module.updateUIAfterCalculation;
    window.TEUI.sect11.registerWithStateManager = module.registerWithStateManager;
    
    // Create a globally accessible calculating function with recursion protection
    window.calculateTransmissionLosses = function() {
        if (window.transmissionLossesRunning) {
            console.warn("Preventing recursive call to calculateTransmissionLosses");
            return;
        }
        
        window.transmissionLossesRunning = true;
        
        try {
            // Try multiple paths to find the actual implementation
            if (window.TEUI?.SectionModules?.sect11?.calculateAll) {
                window.TEUI.SectionModules.sect11.calculateAll();
                // Force update UI after calculations
                setTimeout(() => {
                    if (window.TEUI?.SectionModules?.sect11?.updateUIAfterCalculation) {
                        window.TEUI.SectionModules.sect11.updateUIAfterCalculation();
                    }
                }, 200);
            } 
            else if (window.TEUI?.sect11?.calculateAll) {
                window.TEUI.sect11.calculateAll();
                // Force update UI after calculations
                setTimeout(() => {
                    if (window.TEUI?.sect11?.updateUIAfterCalculation) {
                        window.TEUI.sect11.updateUIAfterCalculation();
                    }
                }, 200);
            }
            else {
                console.warn("Transmission Losses calculation function not found in any namespace");
            }
        } catch (e) {
            console.error("Error in calculateTransmissionLosses:", e);
        } finally {
            // ALWAYS clear recursion flag regardless of success/failure
            window.transmissionLossesRunning = false;
        }
        
        // Mark section as initialized after first calculation
        window.TEUI.sect11.initialized = true;
    };
});

// Initialize when the section is rendered
document.addEventListener('teui-section-rendered', function(event) {
    if (event.detail?.sectionId === 'transmissionLosses') {
        setTimeout(() => window.TEUI.SectionModules.sect11.onSectionRendered(), 100);
    }
});

// Fallback to rendering complete event
document.addEventListener('teui-rendering-complete', function() {
    setTimeout(() => {
        if (document.getElementById('transmissionLosses')) {
            window.TEUI.SectionModules.sect11.onSectionRendered();
        }
    }, 300);
}); 

/**
 * Add CSS styles for checkmarks and reference values
 */
function addCheckmarkStyles() {
    // Check if the styles already exist
    let styleElement = document.getElementById('section11-styles');
    if (!styleElement) {
        // Create style element
        styleElement = document.createElement('style');
        styleElement.id = 'section11-styles';
        styleElement.textContent = `
            .checkmark {
                color: green;
                font-weight: bold;
                text-align: center;
            }
            .warning {
                color: red;
                font-weight: bold;
                text-align: center;
            }
            [data-field-id^="m_"] {
                color: #A31515; /* Red color for reference values */
                font-weight: normal;
            }
            [data-field-id^="j_"], [data-field-id^="l_"], [data-field-id^="h_"] {
                font-weight: 500;
            }
            .user-input {
                background-color: rgba(255, 255, 255, 0.8);
                cursor: pointer;
                outline: 1px solid rgba(0, 0, 0, 0.1);
            }
            .user-input:hover {
                background-color: rgba(66, 133, 244, 0.1);
            }
            .user-input:focus {
                background-color: rgba(66, 133, 244, 0.15);
                box-shadow: 0 0 0 2px rgba(66, 133, 244, 0.5);
                outline: none;
            }
            .tooltip-cell {
                position: relative;
                cursor: help;
                border-bottom: 1px dotted #666;
            }
            /* Add explicit CSS for tooltips using title attribute */
            [title]:after {
                content: attr(title);
                position: absolute;
                bottom: 150%;
                left: 0;
                padding: 5px 10px;
                background: #333;
                color: white;
                border-radius: 3px;
                white-space: nowrap;
                visibility: hidden;
                opacity: 0;
                transition: opacity 0.3s;
                font-size: 12px;
                font-weight: normal;
                text-align: left;
                z-index: 9999;
                box-shadow: 0 2px 5px rgba(0,0,0,0.3);
                max-width: 200px;
            }
            [title]:hover:after {
                visibility: visible;
                opacity: 1;
            }
        `;
        document.head.appendChild(styleElement);
    }
} 

/**
 * Register important values with StateManager
 * Following cross-section data flow best practices
 */
function registerWithStateManager() {
    if (!window.TEUI?.StateManager) return;
    
    // Register our values with StateManager
    try {
        // Register thermal bridge penalty
        window.TEUI.StateManager.setValue('d_97', '0.2', 'default');
        
        // Register important output values that other sections might need
        window.TEUI.StateManager.setValue('i_98', '0', 'calculated');  // Total heatloss
        window.TEUI.StateManager.setValue('k_98', '0', 'calculated');  // Total heatgain
        
        // Register dependencies between sections if needed
        // Example: register that our totals depend on climate data
        window.TEUI.StateManager.registerDependency('d_20', 'i_98');  // HDD affects heatloss
        window.TEUI.StateManager.registerDependency('d_21', 'k_98');  // CDD affects heatgain
        
        console.log("Section 11 values registered with StateManager");
    } catch (error) {
        console.error("Error registering Section 11 values with StateManager:", error);
    }
}

/**
 * Debug logging helper with consistent formatting
 * @param {string} message - Message to log
 * @param {object} data - Optional data to display 
 */
function debugLog(message, data = null) {
    const DEBUG = true; // Set to false to disable debug logging
    if (!DEBUG) return;
    
    const timestamp = new Date().toISOString().split('T')[1].slice(0, -1);
    const formattedMessage = `[${timestamp}] 🔍 SECTION11: ${message}`;
    
    if (data) {
        console.log(formattedMessage, data);
    } else {
        console.log(formattedMessage);
    }
}