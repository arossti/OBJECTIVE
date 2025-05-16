/**
 * 4011-ReferenceValues.js
 * 
 * A structured representation of the reference values from 3037DEEPSTATE.csv
 * This file serves as a faster lookup resource for reference standards values
 * used in the TEUI 4.011 Calculator's reference model implementation.
 * 
 * Each standard is organized as a top-level key, containing field identifiers
 * with their respective values. The structure allows for efficient lookups:
 * 
 * referenceValues["OBC SB12 3.1.1.2.C4"]["B.4"] -> Would return the Roof RSI value
 * 
 * Each entry now includes a targetCell that maps to its DOM element ID for display
 * in the reference model.
 */

// Create TEUI namespace if it doesn't exist
window.TEUI = window.TEUI || {};

// Create reference values container
TEUI.ReferenceValues = (function() {
    
    // Main reference data object - POPULATED FROM CODE-VALUES.CSV - ANDY TO MANUALLY CHECK PATTERN TO ENSURE DOM COMPLIANCE
    const referenceStandards = {
        "OBC SB12 3.1.1.2.C4": {
            "T.1": { section: "Key Values", value: "0", targetCell: "h_6" },
            "T.2": { section: "Key Values", value: "15", targetCell: "h_8" },
            "S.1": { section: "Building Information", value: "OBC Prescriptive Path for HP", targetCell: "h_13" },
            "L.3.1": { section: "Climate Calculations", value: "22", targetCell: "h_23" },
            "L.3.2": { section: "Climate Calculations", value: "26", targetCell: "h_24" },
            "T.3.1": { section: "Energy & Carbon", value: "276.50", targetCell: "j_27" }, // Note: Formula in CSV, using value example
            "T.3.8": { section: "Energy & Carbon", value: "0", targetCell: "j_35" },
            "E.1.2": { section: "CO2e Emissions", value: "-", targetCell: "h_38" },
            "E.3.1": { section: "CO2e Emissions", value: "500", targetCell: "h_40" },
            "W.1.0": { section: "Water Use", value: "275.00", targetCell: "h_49" },
            "W.1.2": { section: "Water Use", value: "110.00", targetCell: "h_50" },
            "W.4": { section: "Water Use", value: "0.9", targetCell: "h_52" }, // Note: Target cell is h_52, not d_52
            "W.5.1": { section: "Water Use", value: "0.42", targetCell: "h_53" }, // Note: Target cell is h_53, not d_53
            "A.2": { section: "Indoor Air Quality", value: "150", targetCell: "h_56" },
            "A.3": { section: "Indoor Air Quality", value: "1000", targetCell: "h_57" },
            "A.4": { section: "Indoor Air Quality", value: "150", targetCell: "h_58" },
            "A.5": { section: "Indoor Air Quality", value: "30-50 ideal", targetCell: "h_59" },
            "P.1": { section: "Occupant Internal Gains", value: "5", targetCell: "h_65" },
            "P.2": { section: "Occupant Internal Gains", value: "2", targetCell: "h_66" },
            "P.3.1": { section: "Occupant Internal Gains", value: "5", targetCell: "h_67" },
            "B.4": { section: "Transmission Losses", value: "4.87", targetCell: "f_85" },
            "B.5": { section: "Transmission Losses", value: "4.21", targetCell: "f_86" },
            "B.6": { section: "Transmission Losses", value: "5.64", targetCell: "f_87" },
            "B.7.0": { section: "Transmission Losses", value: "1.6", targetCell: "g_88" },
            "B.8.1": { section: "Transmission Losses", value: "1.6", targetCell: "g_89" },
            "B.8.2": { section: "Transmission Losses", value: "1.6", targetCell: "g_90" },
            "B.8.3": { section: "Transmission Losses", value: "1.6", targetCell: "g_91" },
            "B.8.4": { section: "Transmission Losses", value: "1.6", targetCell: "g_92" },
            "B.8.5": { section: "Transmission Losses", value: "1.6", targetCell: "g_93" },
            "B.9": { section: "Transmission Losses", value: "3.72", targetCell: "f_94" },
            "B.10": { section: "Transmission Losses", value: "1.96", targetCell: "f_95" },
            "B.12": { section: "Transmission Losses", value: "0.25", targetCell: "d_97" },
            "T.4": { section: "Volume and Surface Metrics", value: "-", targetCell: "h_104" },
            "B.15": { section: "Volume and Surface Metrics", value: "0.22", targetCell: "h_107" },
            "B.18.1": { section: "Volume and Surface Metrics", value: "0.538", targetCell: "h_108" },
            "B.18.2": { section: "Volume and Surface Metrics", value: "1.5", targetCell: "h_109" },
            "B.18.4": { section: "Volume and Surface Metrics", value: "5", targetCell: "h_110" },
            "M.1.0": { section: "Mechanical Loads", value: "7.1", targetCell: "f_113" }, // Target HSPF
            "M.2.5": { section: "Mechanical Loads", value: "0.9", targetCell: "j_115" }, // Target AFUE
            "M.3.0": { section: "Mechanical Loads", value: "3.3", targetCell: "j_116" }, // Target CEER/COP
            "M.3.5": { section: "Mechanical Loads", value: "50", targetCell: "f_117" }, // Target Cooling kWh/m2
            "V.1.1": { section: "Mechanical Loads", value: "0.55", targetCell: "d_118" }, // Target SRE
            "V.1.4": { section: "Mechanical Loads", value: "12.5", targetCell: "d_119" }, // Target Per Person Vent
            "V.1.6": { section: "Mechanical Loads", value: "0.45", targetCell: "h_120" }, // Target Volumetric Vent
            "T.4.0": { section: "TEDI & TELI", value: "50", targetCell: "h_127" },
            "T.6.8": { section: "TEUI Targeted", value: "50", targetCell: "h_140" }
        },
        "OBC SB12 3.1.1.2.C1": {
            "T.1": { section: "Key Values", value: "0", targetCell: "h_6" },
            "T.2": { section: "Key Values", value: "15", targetCell: "h_8" },
            "S.1": { section: "Building Information", value: "OBC Prescriptive Path for Elect.", targetCell: "h_13" },
            "L.3.1": { section: "Climate Calculations", value: "22", targetCell: "h_23" },
            "L.3.2": { section: "Climate Calculations", value: "26", targetCell: "h_24" },
            "T.3.1": { section: "Energy & Carbon", value: "Not Found", targetCell: "j_27" }, // From CSV
            "T.3.8": { section: "Energy & Carbon", value: "0", targetCell: "j_35" },
            "E.1.2": { section: "CO2e Emissions", value: "-", targetCell: "h_38" },
            "E.3.1": { section: "CO2e Emissions", value: "Use Your Own Value", targetCell: "h_40" },
            "W.1.0": { section: "Water Use", value: "275.00", targetCell: "h_49" },
            "W.1.2": { section: "Water Use", value: "110.00", targetCell: "h_50" },
            "W.4": { section: "Water Use", value: "0.9", targetCell: "h_52" },
            "W.5.1": { section: "Water Use", value: "0.42", targetCell: "h_53" },
            "A.2": { section: "Indoor Air Quality", value: "150", targetCell: "h_56" },
            "A.3": { section: "Indoor Air Quality", value: "1000", targetCell: "h_57" },
            "A.4": { section: "Indoor Air Quality", value: "150", targetCell: "h_58" },
            "A.5": { section: "Indoor Air Quality", value: "30-50 ideal", targetCell: "h_59" },
            "P.1": { section: "Occupant Internal Gains", value: "5", targetCell: "h_65" },
            "P.2": { section: "Occupant Internal Gains", value: "2", targetCell: "h_66" },
            "P.3.1": { section: "Occupant Internal Gains", value: "5", targetCell: "h_67" },
            "B.4": { section: "Transmission Losses", value: "4.87", targetCell: "f_85" },
            "B.5": { section: "Transmission Losses", value: "4.46", targetCell: "f_86" },
            "B.6": { section: "Transmission Losses", value: "5.25", targetCell: "f_87" },
            "B.7.0": { section: "Transmission Losses", value: "1.4", targetCell: "g_88" },
            "B.8.1": { section: "Transmission Losses", value: "1.4", targetCell: "g_89" },
            "B.8.2": { section: "Transmission Losses", value: "1.4", targetCell: "g_90" },
            "B.8.3": { section: "Transmission Losses", value: "1.4", targetCell: "g_91" },
            "B.8.4": { section: "Transmission Losses", value: "1.4", targetCell: "g_92" },
            "B.8.5": { section: "Transmission Losses", value: "1.4", targetCell: "g_93" },
            "B.9": { section: "Transmission Losses", value: "3.72", targetCell: "f_94" },
            "B.10": { section: "Transmission Losses", value: "1.96", targetCell: "f_95" },
            "B.12": { section: "Transmission Losses", value: "0.25", targetCell: "d_97" },
            "T.4": { section: "Volume and Surface Metrics", value: "-", targetCell: "h_104" },
            "B.15": { section: "Volume and Surface Metrics", value: "0.22", targetCell: "h_107" },
            "B.18.1": { section: "Volume and Surface Metrics", value: "0.538", targetCell: "h_108" },
            "B.18.2": { section: "Volume and Surface Metrics", value: "1.5", targetCell: "h_109" },
            "B.18.4": { section: "Volume and Surface Metrics", value: "5", targetCell: "h_110" },
            "M.1.0": { section: "Mechanical Loads", value: "7.1", targetCell: "f_113" },
            "M.2.5": { section: "Mechanical Loads", value: "0.9", targetCell: "j_115" },
            "M.3.0": { section: "Mechanical Loads", value: "3.3", targetCell: "j_116" },
            "M.3.5": { section: "Mechanical Loads", value: "50", targetCell: "f_117" },
            "V.1.1": { section: "Mechanical Loads", value: "0.81", targetCell: "d_118" },
            "V.1.4": { section: "Mechanical Loads", value: "12.5", targetCell: "d_119" },
            "V.1.6": { section: "Mechanical Loads", value: "0.45", targetCell: "h_120" },
            "T.4.0": { section: "TEDI & TELI", value: "0", targetCell: "h_127" },
            "T.6.8": { section: "TEUI Targeted", value: "50", targetCell: "h_140" }
        },
        "OBC SB12 3.1.1.2.A3": {
            "T.1": { section: "Key Values", value: "0", targetCell: "h_6" },
            "T.2": { section: "Key Values", value: "15", targetCell: "h_8" },
            "S.1": { section: "Building Information", value: "OBC Prescriptive Path for AFUE >92%", targetCell: "h_13" },
            "L.3.1": { section: "Climate Calculations", value: "22", targetCell: "h_23" },
            "L.3.2": { section: "Climate Calculations", value: "26", targetCell: "h_24" },
            "T.3.1": { section: "Energy & Carbon", value: "276.50", targetCell: "j_27" },
            "T.3.8": { section: "Energy & Carbon", value: "0", targetCell: "j_35" },
            "E.1.2": { section: "CO2e Emissions", value: "-", targetCell: "h_38" },
            "E.3.1": { section: "CO2e Emissions", value: "500", targetCell: "h_40" },
            "W.1.0": { section: "Water Use", value: "275.00", targetCell: "h_49" },
            "W.1.2": { section: "Water Use", value: "110.00", targetCell: "h_50" },
            "W.4": { section: "Water Use", value: "0.92", targetCell: "h_52" },
            "W.5.1": { section: "Water Use", value: "0.42", targetCell: "h_53" },
            "A.2": { section: "Indoor Air Quality", value: "150", targetCell: "h_56" },
            "A.3": { section: "Indoor Air Quality", value: "1000", targetCell: "h_57" },
            "A.4": { section: "Indoor Air Quality", value: "150", targetCell: "h_58" },
            "A.5": { section: "Indoor Air Quality", value: "30-50 ideal", targetCell: "h_59" },
            "P.1": { section: "Occupant Internal Gains", value: "5", targetCell: "h_65" },
            "P.2": { section: "Occupant Internal Gains", value: "2", targetCell: "h_66" },
            "P.3.1": { section: "Occupant Internal Gains", value: "5", targetCell: "h_67" },
            "B.4": { section: "Transmission Losses", value: "4.87", targetCell: "f_85" },
            "B.5": { section: "Transmission Losses", value: "3.77", targetCell: "f_86" },
            "B.6": { section: "Transmission Losses", value: "5.64", targetCell: "f_87" },
            "B.7.0": { section: "Transmission Losses", value: "1.4", targetCell: "g_88" },
            "B.8.1": { section: "Transmission Losses", value: "1.4", targetCell: "g_89" },
            "B.8.2": { section: "Transmission Losses", value: "1.4", targetCell: "g_90" },
            "B.8.3": { section: "Transmission Losses", value: "1.4", targetCell: "g_91" },
            "B.8.4": { section: "Transmission Losses", value: "1.4", targetCell: "g_92" },
            "B.8.5": { section: "Transmission Losses", value: "1.4", targetCell: "g_93" },
            "B.9": { section: "Transmission Losses", value: "3.72", targetCell: "f_94" },
            "B.10": { section: "Transmission Losses", value: "1.96", targetCell: "f_95" },
            "B.12": { section: "Transmission Losses", value: "0.3", targetCell: "d_97" },
            "T.4": { section: "Volume and Surface Metrics", value: "-", targetCell: "h_104" },
            "B.15": { section: "Volume and Surface Metrics", value: "0.22", targetCell: "h_107" },
            "B.18.1": { section: "Volume and Surface Metrics", value: "0.538", targetCell: "h_108" },
            "B.18.2": { section: "Volume and Surface Metrics", value: "1.5", targetCell: "h_109" },
            "B.18.4": { section: "Volume and Surface Metrics", value: "5", targetCell: "h_110" },
            "M.1.0": { section: "Mechanical Loads", value: "7.1", targetCell: "f_113" },
            "M.2.5": { section: "Mechanical Loads", value: "0.92", targetCell: "j_115" },
            "M.3.0": { section: "Mechanical Loads", value: "3.3", targetCell: "j_116" },
            "M.3.5": { section: "Mechanical Loads", value: "50", targetCell: "f_117" },
            "V.1.1": { section: "Mechanical Loads", value: "0.81", targetCell: "d_118" },
            "V.1.4": { section: "Mechanical Loads", value: "12.5", targetCell: "d_119" },
            "V.1.6": { section: "Mechanical Loads", value: "0.45", targetCell: "h_120" },
            "T.4.0": { section: "TEDI & TELI", value: "0", targetCell: "h_127" },
            "T.6.8": { section: "TEUI Targeted", value: "50", targetCell: "h_140" }
        },
        "OBC SB10 5.5-6 Z6": {
            "T.1": { section: "Key Values", value: "0", targetCell: "h_6" },
            "T.2": { section: "Key Values", value: "15", targetCell: "h_8" },
            "S.1": { section: "Building Information", value: "OBC Prescriptive Path Part 3", targetCell: "h_13" },
            "L.3.1": { section: "Climate Calculations", value: "22", targetCell: "h_23" },
            "L.3.2": { section: "Climate Calculations", value: "26", targetCell: "h_24" },
            "T.3.1": { section: "Energy & Carbon", value: "276.50", targetCell: "j_27" },
            "T.3.8": { section: "Energy & Carbon", value: "0", targetCell: "j_35" },
            "E.1.2": { section: "CO2e Emissions", value: "-", targetCell: "h_38" },
            "E.3.1": { section: "CO2e Emissions", value: "500", targetCell: "h_40" },
            "W.1.0": { section: "Water Use", value: "275.00", targetCell: "h_49" },
            "W.1.2": { section: "Water Use", value: "110.00", targetCell: "h_50" },
            "W.4": { section: "Water Use", value: "0.9", targetCell: "h_52" },
            "W.5.1": { section: "Water Use", value: "0", targetCell: "h_53" },
            "A.2": { section: "Indoor Air Quality", value: "150", targetCell: "h_56" },
            "A.3": { section: "Indoor Air Quality", value: "1000", targetCell: "h_57" },
            "A.4": { section: "Indoor Air Quality", value: "150", targetCell: "h_58" },
            "A.5": { section: "Indoor Air Quality", value: "30-50 ideal", targetCell: "h_59" },
            "P.1": { section: "Occupant Internal Gains", value: "7", targetCell: "h_65" },
            "P.2": { section: "Occupant Internal Gains", value: "2", targetCell: "h_66" },
            "P.3.1": { section: "Occupant Internal Gains", value: "5", targetCell: "h_67" },
            "B.4": { section: "Transmission Losses", value: "5.3", targetCell: "f_85" },
            "B.5": { section: "Transmission Losses", value: "4.1", targetCell: "f_86" },
            "B.6": { section: "Transmission Losses", value: "6.6", targetCell: "f_87" },
            "B.7.0": { section: "Transmission Losses", value: "1.99", targetCell: "g_88" },
            "B.8.1": { section: "Transmission Losses", value: "1.42", targetCell: "g_89" },
            "B.8.2": { section: "Transmission Losses", value: "1.42", targetCell: "g_90" },
            "B.8.3": { section: "Transmission Losses", value: "1.42", targetCell: "g_91" },
            "B.8.4": { section: "Transmission Losses", value: "1.42", targetCell: "g_92" },
            "B.8.5": { section: "Transmission Losses", value: "1.42", targetCell: "g_93" },
            "B.9": { section: "Transmission Losses", value: "1.8", targetCell: "f_94" },
            "B.10": { section: "Transmission Losses", value: "3.5", targetCell: "f_95" },
            "B.12": { section: "Transmission Losses", value: "0.3", targetCell: "d_97" },
            "T.4": { section: "Volume and Surface Metrics", value: "-", targetCell: "h_104" },
            "B.15": { section: "Volume and Surface Metrics", value: "0.4", targetCell: "h_107" },
            "B.18.1": { section: "Volume and Surface Metrics", value: "0.538", targetCell: "h_108" },
            "B.18.2": { section: "Volume and Surface Metrics", value: "2", targetCell: "h_109" },
            "B.18.4": { section: "Volume and Surface Metrics", value: "5", targetCell: "h_110" },
            "M.1.0": { section: "Mechanical Loads", value: "7.1", targetCell: "f_113" },
            "M.2.5": { section: "Mechanical Loads", value: "0.9", targetCell: "j_115" },
            "M.3.0": { section: "Mechanical Loads", value: "3.3", targetCell: "j_116" },
            "M.3.5": { section: "Mechanical Loads", value: "50", targetCell: "f_117" },
            "V.1.1": { section: "Mechanical Loads", value: "0.81", targetCell: "d_118" },
            "V.1.4": { section: "Mechanical Loads", value: "12.5", targetCell: "d_119" },
            "V.1.6": { section: "Mechanical Loads", value: "3.5", targetCell: "h_120" },
            "T.4.0": { section: "TEDI & TELI", value: "0", targetCell: "h_127" },
            "T.6.8": { section: "TEUI Targeted", value: "50", targetCell: "h_140" }
        },
        "OBC SB10 5.5-6 Z5 (2010)": {
            "T.1": { section: "Key Values", value: "0", targetCell: "h_6" },
            "T.2": { section: "Key Values", value: "15", targetCell: "h_8" },
            "S.1": { section: "Building Information", value: "OBC Prescriptive Path Part 3", targetCell: "h_13" },
            "L.3.1": { section: "Climate Calculations", value: "22", targetCell: "h_23" },
            "L.3.2": { section: "Climate Calculations", value: "26", targetCell: "h_24" },
            "T.3.1": { section: "Energy & Carbon", value: "276.50", targetCell: "j_27" },
            "T.3.8": { section: "Energy & Carbon", value: "0", targetCell: "j_35" },
            "E.1.2": { section: "CO2e Emissions", value: "-", targetCell: "h_38" },
            "E.3.1": { section: "CO2e Emissions", value: "500", targetCell: "h_40" },
            "W.1.0": { section: "Water Use", value: "275.00", targetCell: "h_49" },
            "W.1.2": { section: "Water Use", value: "110.00", targetCell: "h_50" },
            "W.4": { section: "Water Use", value: "0.9", targetCell: "h_52" },
            "W.5.1": { section: "Water Use", value: "0", targetCell: "h_53" },
            "A.2": { section: "Indoor Air Quality", value: "150", targetCell: "h_56" },
            "A.3": { section: "Indoor Air Quality", value: "1000", targetCell: "h_57" },
            "A.4": { section: "Indoor Air Quality", value: "150", targetCell: "h_58" },
            "A.5": { section: "Indoor Air Quality", value: "30-50 ideal", targetCell: "h_59" },
            "P.1": { section: "Occupant Internal Gains", value: "7", targetCell: "h_65" },
            "P.2": { section: "Occupant Internal Gains", value: "2", targetCell: "h_66" },
            "P.3.1": { section: "Occupant Internal Gains", value: "5", targetCell: "h_67" },
            "B.4": { section: "Transmission Losses", value: "5.3", targetCell: "f_85" },
            "B.5": { section: "Transmission Losses", value: "4.1", targetCell: "f_86" },
            "B.6": { section: "Transmission Losses", value: "6.6", targetCell: "f_87" },
            "B.7.0": { section: "Transmission Losses", value: "1.99", targetCell: "g_88" },
            "B.8.1": { section: "Transmission Losses", value: "2.56", targetCell: "g_89" }, // Changed U-value
            "B.8.2": { section: "Transmission Losses", value: "2.56", targetCell: "g_90" }, // Changed U-value
            "B.8.3": { section: "Transmission Losses", value: "2.56", targetCell: "g_91" }, // Changed U-value
            "B.8.4": { section: "Transmission Losses", value: "2.56", targetCell: "g_92" }, // Changed U-value
            "B.8.5": { section: "Transmission Losses", value: "2.56", targetCell: "g_93" }, // Changed U-value
            "B.9": { section: "Transmission Losses", value: "1.8", targetCell: "f_94" },
            "B.10": { section: "Transmission Losses", value: "3.5", targetCell: "f_95" },
            "B.12": { section: "Transmission Losses", value: "0.3", targetCell: "d_97" },
            "T.4": { section: "Volume and Surface Metrics", value: "-", targetCell: "h_104" },
            "B.15": { section: "Volume and Surface Metrics", value: "0.4", targetCell: "h_107" },
            "B.18.1": { section: "Volume and Surface Metrics", value: "0.538", targetCell: "h_108" },
            "B.18.2": { section: "Volume and Surface Metrics", value: "2", targetCell: "h_109" },
            "B.18.4": { section: "Volume and Surface Metrics", value: "5", targetCell: "h_110" },
            "M.1.0": { section: "Mechanical Loads", value: "7.1", targetCell: "f_113" },
            "M.2.5": { section: "Mechanical Loads", value: "0.9", targetCell: "j_115" },
            "M.3.0": { section: "Mechanical Loads", value: "3.3", targetCell: "j_116" },
            "M.3.5": { section: "Mechanical Loads", value: "50", targetCell: "f_117" },
            "V.1.1": { section: "Mechanical Loads", value: "0", targetCell: "d_118" }, // Changed SRE
            "V.1.4": { section: "Mechanical Loads", value: "12.5", targetCell: "d_119" },
            "V.1.6": { section: "Mechanical Loads", value: "3.5", targetCell: "h_120" },
            "T.4.0": { section: "TEDI & TELI", value: "0", targetCell: "h_127" },
            "T.6.8": { section: "TEUI Targeted", value: "50", targetCell: "h_140" }
        },
        "ADD YOUR OWN HERE": {
             "T.1": { section: "Key Values", value: "0", targetCell: "h_6" },
            "T.2": { section: "Key Values", value: "15", targetCell: "h_8" },
            "S.1": { section: "Building Information", value: "User Defined", targetCell: "h_13" },
            "L.3.1": { section: "Climate Calculations", value: "22", targetCell: "h_23" },
            "L.3.2": { section: "Climate Calculations", value: "26", targetCell: "h_24" },
            "T.3.1": { section: "Energy & Carbon", value: "276.50", targetCell: "j_27" },
            "T.3.8": { section: "Energy & Carbon", value: "0", targetCell: "j_35" },
            "E.1.2": { section: "CO2e Emissions", value: "30", targetCell: "h_38" },
            "E.3.1": { section: "CO2e Emissions", value: "500", targetCell: "h_40" },
            "W.1.0": { section: "Water Use", value: "275.00", targetCell: "h_49" },
            "W.1.2": { section: "Water Use", value: "110.00", targetCell: "h_50" },
            "W.4": { section: "Water Use", value: "0.9", targetCell: "h_52" },
            "W.5.1": { section: "Water Use", value: "0.75", targetCell: "h_53" },
            "A.2": { section: "Indoor Air Quality", value: "150", targetCell: "h_56" },
            "A.3": { section: "Indoor Air Quality", value: "1000", targetCell: "h_57" },
            "A.4": { section: "Indoor Air Quality", value: "150", targetCell: "h_58" },
            "A.5": { section: "Indoor Air Quality", value: "30-50 ideal", targetCell: "h_59" },
            "P.1": { section: "Occupant Internal Gains", value: "5", targetCell: "h_65" },
            "P.2": { section: "Occupant Internal Gains", value: "2", targetCell: "h_66" },
            "P.3.1": { section: "Occupant Internal Gains", value: "5", targetCell: "h_67" },
            "B.4": { section: "Transmission Losses", value: "5.3", targetCell: "f_85" },
            "B.5": { section: "Transmission Losses", value: "4.1", targetCell: "f_86" },
            "B.6": { section: "Transmission Losses", value: "6.6", targetCell: "f_87" },
            "B.7.0": { section: "Transmission Losses", value: "1.99", targetCell: "g_88" },
            "B.8.1": { section: "Transmission Losses", value: "1.42", targetCell: "g_89" },
            "B.8.2": { section: "Transmission Losses", value: "1.42", targetCell: "g_90" },
            "B.8.3": { section: "Transmission Losses", value: "1.42", targetCell: "g_91" },
            "B.8.4": { section: "Transmission Losses", value: "1.42", targetCell: "g_92" },
            "B.8.5": { section: "Transmission Losses", value: "1.42", targetCell: "g_93" },
            "B.9": { section: "Transmission Losses", value: "1.8", targetCell: "f_94" },
            "B.10": { section: "Transmission Losses", value: "3.5", targetCell: "f_95" },
            "B.12": { section: "Transmission Losses", value: "0.3", targetCell: "d_97" },
            "T.4": { section: "Volume and Surface Metrics", value: "-", targetCell: "h_104" },
            "B.15": { section: "Volume and Surface Metrics", value: "0.4", targetCell: "h_107" },
            "B.18.1": { section: "Volume and Surface Metrics", value: "0.538", targetCell: "h_108" },
            "B.18.2": { section: "Volume and Surface Metrics", value: "2", targetCell: "h_109" },
            "B.18.4": { section: "Volume and Surface Metrics", value: "5", targetCell: "h_110" },
            "M.1.0": { section: "Mechanical Loads", value: "7.1", targetCell: "f_113" },
            "M.2.5": { section: "Mechanical Loads", value: "0.9", targetCell: "j_115" },
            "M.3.0": { section: "Mechanical Loads", value: "3.3", targetCell: "j_116" },
            "M.3.5": { section: "Mechanical Loads", value: "50", targetCell: "f_117" },
            "V.1.1": { section: "Mechanical Loads", value: "0.81", targetCell: "d_118" },
            "V.1.4": { section: "Mechanical Loads", value: "12.5", targetCell: "d_119" },
            "V.1.6": { section: "Mechanical Loads", value: "3.5", targetCell: "h_120" },
            "T.4.0": { section: "TEDI & TELI", value: "0", targetCell: "h_127" },
            "T.6.8": { section: "TEUI Targeted", value: "50", targetCell: "h_140" }
        },
        "NBC T1": {
            "T.1": { section: "Key Values", value: "0", targetCell: "h_6" },
            "T.2": { section: "Key Values", value: "15", targetCell: "h_8" },
            "S.1": { section: "Building Information", value: "NBC 9.36 Prescriptive Path", targetCell: "h_13" },
            "L.3.1": { section: "Climate Calculations", value: "22", targetCell: "h_23" },
            "L.3.2": { section: "Climate Calculations", value: "24", targetCell: "h_24" },
            "T.3.1": { section: "Energy & Carbon", value: "276.50", targetCell: "j_27" },
            "T.3.8": { section: "Energy & Carbon", value: "0", targetCell: "j_35" },
            "E.1.2": { section: "CO2e Emissions", value: "60", targetCell: "h_38" },
            "E.3.1": { section: "CO2e Emissions", value: "500", targetCell: "h_40" },
            "W.1.0": { section: "Water Use", value: "220.00", targetCell: "h_49" },
            "W.1.2": { section: "Water Use", value: "88.00", targetCell: "h_50" },
            "W.4": { section: "Water Use", value: "0.9", targetCell: "h_52" },
            "W.5.1": { section: "Water Use", value: "0", targetCell: "h_53" },
            "A.2": { section: "Indoor Air Quality", value: "150", targetCell: "h_56" },
            "A.3": { section: "Indoor Air Quality", value: "1000", targetCell: "h_57" },
            "A.4": { section: "Indoor Air Quality", value: "150", targetCell: "h_58" },
            "A.5": { section: "Indoor Air Quality", value: "30-50 ideal", targetCell: "h_59" },
            "P.1": { section: "Occupant Internal Gains", value: "5", targetCell: "h_65" },
            "P.2": { section: "Occupant Internal Gains", value: "2", targetCell: "h_66" },
            "P.3.1": { section: "Occupant Internal Gains", value: "5", targetCell: "h_67" },
            "B.4": { section: "Transmission Losses", value: "6.41", targetCell: "f_85" },
            "B.5": { section: "Transmission Losses", value: "2.97", targetCell: "f_86" },
            "B.6": { section: "Transmission Losses", value: "5.64", targetCell: "f_87" },
            "B.7.0": { section: "Transmission Losses", value: "1.8", targetCell: "g_88" },
            "B.8.1": { section: "Transmission Losses", value: "1.8", targetCell: "g_89" },
            "B.8.2": { section: "Transmission Losses", value: "1.8", targetCell: "g_90" },
            "B.8.3": { section: "Transmission Losses", value: "1.8", targetCell: "g_91" },
            "B.8.4": { section: "Transmission Losses", value: "1.8", targetCell: "g_92" },
            "B.8.5": { section: "Transmission Losses", value: "1.8", targetCell: "g_93" },
            "B.9": { section: "Transmission Losses", value: "2.98", targetCell: "f_94" },
            "B.10": { section: "Transmission Losses", value: "1.96", targetCell: "f_95" },
            "B.12": { section: "Transmission Losses", value: "0.25", targetCell: "d_97" },
            "T.4": { section: "Volume and Surface Metrics", value: "0.5", targetCell: "h_104" },
            "B.15": { section: "Volume and Surface Metrics", value: "0.22", targetCell: "h_107" },
            "B.18.1": { section: "Volume and Surface Metrics", value: "0.538", targetCell: "h_108" },
            "B.18.2": { section: "Volume and Surface Metrics", value: "3.4", targetCell: "h_109" },
            "B.18.4": { section: "Volume and Surface Metrics", value: "5", targetCell: "h_110" },
            "M.1.0": { section: "Mechanical Loads", value: "7.1", targetCell: "f_113" },
            "M.2.5": { section: "Mechanical Loads", value: "0.9", targetCell: "j_115" },
            "M.3.0": { section: "Mechanical Loads", value: "3.3", targetCell: "j_116" },
            "M.3.5": { section: "Mechanical Loads", value: "50", targetCell: "f_117" },
            "V.1.1": { section: "Mechanical Loads", value: "0.6", targetCell: "d_118" },
            "V.1.4": { section: "Mechanical Loads", value: "12.5", targetCell: "d_119" },
            "V.1.6": { section: "Mechanical Loads", value: "0.45", targetCell: "h_120" },
            "T.4.0": { section: "TEDI & TELI", value: "0", targetCell: "h_127" },
            "T.6.8": { section: "TEUI Targeted", value: "50", targetCell: "h_140" }
        },
        "NBC T2": { 
            // ... Populate based on CSV ...
        },
        "NBC T3": {
             // ... Populate based on CSV ...
        },
        "NBC T4": {
             // ... Populate based on CSV ...
        },
        "NBC T5": {
             // ... Populate based on CSV ...
        },
        "CaGBC ZCB": {
             // ... Populate based on CSV ...
        },
        "NECB T1 (Z6)": {
            "T.1": { section: "Key Values", value: "0", targetCell: "h_6" },
            "T.2": { section: "Key Values", value: "15", targetCell: "h_8" },
            "S.1": { section: "Building Information", value: "Replacing SB10", targetCell: "h_13" },
            "L.3.1": { section: "Climate Calculations", value: "22", targetCell: "h_23" },
            "L.3.2": { section: "Climate Calculations", value: "24", targetCell: "h_24" },
            "T.3.1": { section: "Energy & Carbon", value: "172.81", targetCell: "j_27" },
            "T.3.8": { section: "Energy & Carbon", value: "0", targetCell: "j_35" },
            "E.1.2": { section: "CO2e Emissions", value: "60", targetCell: "h_38" },
            "E.3.1": { section: "CO2e Emissions", value: "500", targetCell: "h_40" },
            "W.1.0": { section: "Water Use", value: "220.00", targetCell: "h_49" },
            "W.1.2": { section: "Water Use", value: "88.00", targetCell: "h_50" },
            "W.4": { section: "Water Use", value: "0.9", targetCell: "h_52" },
            "W.5.1": { section: "Water Use", value: "0", targetCell: "h_53" },
            "A.2": { section: "Indoor Air Quality", value: "150", targetCell: "h_56" },
            "A.3": { section: "Indoor Air Quality", value: "1000", targetCell: "h_57" },
            "A.4": { section: "Indoor Air Quality", value: "150", targetCell: "h_58" },
            "A.5": { section: "Indoor Air Quality", value: "30-50 ideal", targetCell: "h_59" },
            "P.1": { section: "Occupant Internal Gains", value: "7", targetCell: "h_65" },
            "P.2": { section: "Occupant Internal Gains", value: "2", targetCell: "h_66" },
            "P.3.1": { section: "Occupant Internal Gains", value: "5", targetCell: "h_67" },
            "B.4": { section: "Transmission Losses", value: "7.246", targetCell: "f_85" },
            "B.5": { section: "Transmission Losses", value: "4.166", targetCell: "f_86" },
            "B.6": { section: "Transmission Losses", value: "6.41", targetCell: "f_87" },
            "B.7.0": { section: "Transmission Losses", value: "1.9", targetCell: "g_88" },
            "B.8.1": { section: "Transmission Losses", value: "1.73", targetCell: "g_89" },
            "B.8.2": { section: "Transmission Losses", value: "1.73", targetCell: "g_90" },
            "B.8.3": { section: "Transmission Losses", value: "1.73", targetCell: "g_91" },
            "B.8.4": { section: "Transmission Losses", value: "1.73", targetCell: "g_92" },
            "B.8.5": { section: "Transmission Losses", value: "1.73", targetCell: "g_93" },
            "B.9": { section: "Transmission Losses", value: "3.52", targetCell: "f_94" },
            "B.10": { section: "Transmission Losses", value: "1.32", targetCell: "f_95" },
            "B.12": { section: "Transmission Losses", value: "0.3", targetCell: "d_97" },
            "T.4": { section: "Volume and Surface Metrics", value: "0.5", targetCell: "h_104" },
            "B.15": { section: "Volume and Surface Metrics", value: "0.4", targetCell: "h_107" },
            "B.18.1": { section: "Volume and Surface Metrics", value: "0.538", targetCell: "h_108" },
            "B.18.2": { section: "Volume and Surface Metrics", value: "2.5", targetCell: "h_109" },
            "B.18.4": { section: "Volume and Surface Metrics", value: "7", targetCell: "h_110" },
            "M.1.0": { section: "Mechanical Loads", value: "6.4", targetCell: "f_113" },
            "M.2.5": { section: "Mechanical Loads", value: "0.9", targetCell: "j_115" },
            "M.3.0": { section: "Mechanical Loads", value: "3.3", targetCell: "j_116" },
            "M.3.5": { section: "Mechanical Loads", value: "50", targetCell: "f_117" },
            "V.1.1": { section: "Mechanical Loads", value: "0.65", targetCell: "d_118" },
            "V.1.4": { section: "Mechanical Loads", value: "12.5", targetCell: "d_119" },
            "V.1.6": { section: "Mechanical Loads", value: "3.5", targetCell: "h_120" },
            "T.4.0": { section: "TEDI & TELI", value: "0", targetCell: "h_127" },
            "T.6.8": { section: "TEUI Targeted", value: "50", targetCell: "h_140" }
        },
        "PH Classic": { 
            // ... Populate based on CSV ...
        },
        "PH Plus": {
            // ... Populate based on CSV ...
        },
        "PH Premium": {
            // ... Populate based on CSV ...
        },
        "EnerPHit": {
             // ... Populate based on CSV ...
        },
        "PH Low Energy": {
             // ... Populate based on CSV ...
        }
    };
    
    /**
     * Get a reference value
     * @param {string} standard - The reference standard (e.g., "OBC SB12 3.1.1.2.C4")
     * @param {string} fieldId - The field ID (e.g., "B.4")
     * @returns {string|null} The reference value or null if not found
     */
    function getValue(standard, fieldId) {
        if (!referenceStandards[standard] || !referenceStandards[standard][fieldId]) {
            return null;
        }
        
        return referenceStandards[standard][fieldId].value;
    }
    
    /**
     * Get the section for a field
     * @param {string} standard - The reference standard (e.g., "OBC SB12 3.1.1.2.C4")
     * @param {string} fieldId - The field ID (e.g., "B.4")
     * @returns {string|null} The section name or null if not found
     */
    function getSection(standard, fieldId) {
        if (!referenceStandards[standard] || !referenceStandards[standard][fieldId]) {
            return null;
        }
        
        return referenceStandards[standard][fieldId].section;
    }
    
    /**
     * Get the target DOM cell for a field
     * @param {string} standard - The reference standard (e.g., "OBC SB12 3.1.1.2.C4")
     * @param {string} fieldId - The field ID (e.g., "B.4")
     * @returns {string|null} The target DOM cell ID or null if not found
     */
    function getTargetCell(standard, fieldId) {
        if (!referenceStandards[standard] || !referenceStandards[standard][fieldId]) {
            return null;
        }
        
        return referenceStandards[standard][fieldId].targetCell;
    }
    
    /**
     * Get all fields for a standard
     * @param {string} standard - The reference standard
     * @returns {Object|null} Object with all fields for the standard or null if not found
     */
    function getStandardFields(standard) {
        return referenceStandards[standard] || null;
    }
    
    /**
     * Get all available standards
     * @returns {Array} Array of standard names
     */
    function getStandards() {
        return Object.keys(referenceStandards);
    }
    
    /**
     * Get all fields for a specific section in a standard
     * @param {string} standard - The reference standard
     * @param {string} section - The section name
     * @returns {Object} Object with fields in the specified section
     */
    function getSectionFields(standard, section) {
        if (!referenceStandards[standard]) {
            return {};
        }
        
        const result = {};
        
        Object.entries(referenceStandards[standard]).forEach(([fieldId, data]) => {
            if (data.section === section) {
                result[fieldId] = {
                    value: data.value,
                    targetCell: data.targetCell
                };
            }
        });
        
        return result;
    }
    
    /**
     * Get fields that apply to a specific DOM target cell
     * @param {string} standard - The reference standard
     * @param {string} targetCell - The DOM target cell ID (e.g., "h_49")
     * @returns {Object|null} Object with field info or null if not found
     */
    function getFieldByTargetCell(standard, targetCell) {
        if (!referenceStandards[standard]) {
            return null;
        }
        
        for (const [fieldId, data] of Object.entries(referenceStandards[standard])) {
            if (data.targetCell === targetCell) {
                return {
                    fieldId,
                    section: data.section,
                    value: data.value
                };
            }
        }
        
        return null;
    }
    
    /**
     * Check if a reference value exists
     * @param {string} standard - The reference standard
     * @param {string} fieldId - The field ID
     * @returns {boolean} True if the value exists
     */
    function hasValue(standard, fieldId) {
        return !!(referenceStandards[standard] && referenceStandards[standard][fieldId]);
    }
    
    // Public API
    return {
        getValue,
        getSection,
        getTargetCell,
        getStandardFields,
        getStandards,
        getSectionFields,
        getFieldByTargetCell,
        hasValue,
        // Expose the raw data for debugging or direct access
        _data: referenceStandards
    };
})(); 