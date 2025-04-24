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
    
    // Main reference data object
    const referenceStandards = {
        // Standard: OBC SB12 3.1.1.2.C4
        "OBC SB12 3.1.1.2.C4": {
            // SECTION 1. Key Values
            "T.1": { section: "Key Values", value: "0", targetCell: "h_6" },
            "T.2": { section: "Key Values", value: "15", targetCell: "h_8" },
            "T.3": { section: "Key Values", value: "226.9", targetCell: "h_10" },
            
            // SECTION 2. Building Information
            "S.1": { section: "Building Information", value: "OBC Prescriptive Path for HP", targetCell: "h_13" },
            
            // SECTION 3. Climate Calculations
            "L.3.1": { section: "Climate Calculations", value: "22", targetCell: "h_23" },
            "L.3.2": { section: "Climate Calculations", value: "26", targetCell: "h_24" },
            
            // SECTION 4. Actual vs. Target Energy & Carbon
            "T.3.1": { section: "Energy & Carbon", value: "=XLOOKUP(REPORT!D12, OccType, SCHEDULES!F13:F20, \"Not Found\")", targetCell: "j_27" },
            "T.3.8": { section: "Energy & Carbon", value: "0", targetCell: "j_35" },
            
            // SECTION 5. CO2e Emissions
            "E.1.2": { section: "CO2e Emissions", value: "-", targetCell: "h_38" },
            "E.3.1": { section: "CO2e Emissions", value: "500", targetCell: "h_40" },
            
            // SECTION 7. Water Use
            "W.1.0": { section: "Water Use", value: "275", targetCell: "h_49" },
            "W.1.2": { section: "Water Use", value: "110", targetCell: "h_50" },
            "W.4": { section: "Water Use", value: "0.9", targetCell: "h_52" },
            "W.5.1": { section: "Water Use", value: "0.42", targetCell: "h_53" },
            
            // SECTION 8. Indoor Air Quality
            "A.2": { section: "Indoor Air Quality", value: "150", targetCell: "h_56" },
            "A.3": { section: "Indoor Air Quality", value: "1000", targetCell: "h_57" },
            "A.4": { section: "Indoor Air Quality", value: "150", targetCell: "h_58" },
            "A.5": { section: "Indoor Air Quality", value: "30-50 ideal", targetCell: "h_59" },
            
            // SECTION 9. Occupant Internal Gains
            "P.1": { section: "Occupant Internal Gains", value: "5", targetCell: "h_65" },
            "P.2": { section: "Occupant Internal Gains", value: "2", targetCell: "h_66" },
            "P.3.1": { section: "Occupant Internal Gains", value: "5", targetCell: "h_67" },
            
            // SECTION 11. Transmission Losses
            "B.4": { section: "Transmission Losses", value: "4.87", targetCell: "h_85" },
            "B.5": { section: "Transmission Losses", value: "4.21", targetCell: "h_86" },
            "B.6": { section: "Transmission Losses", value: "5.64", targetCell: "h_87" },
            "B.7.0": { section: "Transmission Losses", value: "1.6", targetCell: "h_88" },
            "B.8.1": { section: "Transmission Losses", value: "1.6", targetCell: "h_89" },
            "B.8.2": { section: "Transmission Losses", value: "1.6", targetCell: "h_90" },
            "B.8.3": { section: "Transmission Losses", value: "1.6", targetCell: "h_91" },
            "B.8.4": { section: "Transmission Losses", value: "1.6", targetCell: "h_92" },
            "B.8.5": { section: "Transmission Losses", value: "1.6", targetCell: "h_93" },
            "B.9": { section: "Transmission Losses", value: "3.72", targetCell: "h_94" },
            "B.10": { section: "Transmission Losses", value: "1.96", targetCell: "h_95" },
            
            // SECTION 12. Volume and Surface Metrics
            "B.15": { section: "Volume and Surface Metrics", value: "0.22", targetCell: "h_107" },
            "B.18.1": { section: "Volume and Surface Metrics", value: "0.538", targetCell: "h_108" },
            "B.18.2": { section: "Volume and Surface Metrics", value: "1.5", targetCell: "h_109" },
            "B.18.4": { section: "Volume and Surface Metrics", value: "5", targetCell: "h_110" },
            "T.4": { section: "Volume and Surface Metrics", value: "-", targetCell: "h_104" },
            
            // SECTION 13. Mechanical Loads
            "M.1.0": { section: "Mechanical Loads", value: "7.1", targetCell: "h_113" },
            "M.2.5": { section: "Mechanical Loads", value: "0.9", targetCell: "h_115" },
            "M.3.0": { section: "Mechanical Loads", value: "3.3", targetCell: "h_116" },
            "M.3.5": { section: "Mechanical Loads", value: "50", targetCell: "h_117" },
            "V.1.1": { section: "Mechanical Loads", value: "0.55", targetCell: "h_118" },
            "V.1.4": { section: "Mechanical Loads", value: "12.5", targetCell: "h_119" },
            "V.1.6": { section: "Mechanical Loads", value: "0.45", targetCell: "h_120" },
            
            // SECTION 14. TEDI & TELI
            "T.4.0": { section: "TEDI & TELI", value: "50", targetCell: "h_127" },
            
            // SECTION 15. TEUI Targeted
            "T.6.8": { section: "TEUI Targeted", value: "50", targetCell: "h_140" }
        },
        
        // Standard: OBC SB12 3.1.1.2.C1
        "OBC SB12 3.1.1.2.C1": {
            // SECTION 1. Key Values
            "T.1": { section: "Key Values", value: "0", targetCell: "h_6" },
            "T.2": { section: "Key Values", value: "15", targetCell: "h_8" },
            
            // SECTION 2. Building Information
            "S.1": { section: "Building Information", value: "OBC Prescriptive Path for Elect.", targetCell: "h_13" },
            
            // SECTION 3. Climate Calculations
            "L.3.1": { section: "Climate Calculations", value: "22", targetCell: "h_23" },
            "L.3.2": { section: "Climate Calculations", value: "26", targetCell: "h_24" },
            
            // SECTION 4. Actual vs. Target Energy & Carbon
            "T.3.1": { section: "Energy & Carbon", value: "=XLOOKUP(REPORT!C12, OccType, SCHEDULES!E13:E20, \"Not Found\")", targetCell: "j_27" },
            "T.3.8": { section: "Energy & Carbon", value: "0", targetCell: "j_35" },
            
            // SECTION 11. Transmission Losses
            "B.4": { section: "Transmission Losses", value: "4.87", targetCell: "h_85" },
            "B.5": { section: "Transmission Losses", value: "4.46", targetCell: "h_86" },
            "B.6": { section: "Transmission Losses", value: "5.25", targetCell: "h_87" },
            "B.7.0": { section: "Transmission Losses", value: "1.4", targetCell: "h_88" },
            "B.8.1": { section: "Transmission Losses", value: "1.4", targetCell: "h_89" },
            "B.8.2": { section: "Transmission Losses", value: "1.4", targetCell: "h_90" },
            "B.8.3": { section: "Transmission Losses", value: "1.4", targetCell: "h_91" },
            "B.8.4": { section: "Transmission Losses", value: "1.4", targetCell: "h_92" },
            "B.8.5": { section: "Transmission Losses", value: "1.4", targetCell: "h_93" },
            "B.9": { section: "Transmission Losses", value: "3.72", targetCell: "h_94" },
            "B.10": { section: "Transmission Losses", value: "1.96", targetCell: "h_95" }
        },
        
        // Standard: OBC SB10 5.5-6 Z6
        "OBC SB10 5.5-6 Z6": {
            // SECTION 1. Key Values
            "T.1": { section: "Key Values", value: "0", targetCell: "h_6" },
            "T.2": { section: "Key Values", value: "15", targetCell: "h_8" },
            
            // SECTION 2. Building Information
            "S.1": { section: "Building Information", value: "OBC Prescriptive Path Part 3", targetCell: "h_13" },
            
            // SECTION 3. Climate Calculations
            "L.3.1": { section: "Climate Calculations", value: "22", targetCell: "h_23" },
            "L.3.2": { section: "Climate Calculations", value: "26", targetCell: "h_24" },
            
            // SECTION 11. Transmission Losses
            "B.4": { section: "Transmission Losses", value: "5.3", targetCell: "h_85" },
            "B.5": { section: "Transmission Losses", value: "4.1", targetCell: "h_86" },
            "B.6": { section: "Transmission Losses", value: "6.6", targetCell: "h_87" },
            "B.7.0": { section: "Transmission Losses", value: "1.99", targetCell: "h_88" },
            "B.8.1": { section: "Transmission Losses", value: "1.42", targetCell: "h_89" },
            "B.8.2": { section: "Transmission Losses", value: "1.42", targetCell: "h_90" },
            "B.8.3": { section: "Transmission Losses", value: "1.42", targetCell: "h_91" },
            "B.8.4": { section: "Transmission Losses", value: "1.42", targetCell: "h_92" },
            "B.8.5": { section: "Transmission Losses", value: "1.42", targetCell: "h_93" },
            "B.9": { section: "Transmission Losses", value: "1.8", targetCell: "h_94" },
            "B.10": { section: "Transmission Losses", value: "3.5", targetCell: "h_95" }
        },
        
        // Standard: NBC T1
        "NBC T1": {
            // SECTION 1. Key Values
            "T.1": { section: "Key Values", value: "0", targetCell: "h_6" },
            "T.2": { section: "Key Values", value: "15", targetCell: "h_8" },
            
            // SECTION 2. Building Information
            "S.1": { section: "Building Information", value: "NBC 9.36 Prescriptive Path", targetCell: "h_13" },
            
            // SECTION 3. Climate Calculations
            "L.3.1": { section: "Climate Calculations", value: "22", targetCell: "h_23" },
            "L.3.2": { section: "Climate Calculations", value: "24", targetCell: "h_24" },
            
            // SECTION 4. Actual vs. Target Energy & Carbon
            "T.3.1": { section: "Energy & Carbon", value: "=XLOOKUP(REPORT!D12, OccType, SCHEDULES!F13:F20, \"Not Found\")", targetCell: "j_27" },
            
            // SECTION 11. Transmission Losses
            "B.4": { section: "Transmission Losses", value: "6.41", targetCell: "h_85" },
            "B.5": { section: "Transmission Losses", value: "2.97", targetCell: "h_86" },
            "B.6": { section: "Transmission Losses", value: "5.64", targetCell: "h_87" },
            "B.7.0": { section: "Transmission Losses", value: "1.8", targetCell: "h_88" },
            "B.8.1": { section: "Transmission Losses", value: "1.8", targetCell: "h_89" },
            "B.8.2": { section: "Transmission Losses", value: "1.8", targetCell: "h_90" },
            "B.8.3": { section: "Transmission Losses", value: "1.8", targetCell: "h_91" },
            "B.8.4": { section: "Transmission Losses", value: "1.8", targetCell: "h_92" },
            "B.8.5": { section: "Transmission Losses", value: "1.8", targetCell: "h_93" },
            "B.9": { section: "Transmission Losses", value: "2.98", targetCell: "h_94" },
            "B.10": { section: "Transmission Losses", value: "1.96", targetCell: "h_95" }
        },
        
        // Standard: NECB T1 (Z6)
        "NECB T1 (Z6)": {
            // SECTION 1. Key Values
            "T.1": { section: "Key Values", value: "0", targetCell: "h_6" },
            "T.2": { section: "Key Values", value: "15", targetCell: "h_8" },
            
            // SECTION 2. Building Information
            "S.1": { section: "Building Information", value: "Replacing SB10", targetCell: "h_13" },
            
            // SECTION 3. Climate Calculations
            "L.3.1": { section: "Climate Calculations", value: "22", targetCell: "h_23" },
            "L.3.2": { section: "Climate Calculations", value: "24", targetCell: "h_24" },
            
            // SECTION 11. Transmission Losses
            "B.4": { section: "Transmission Losses", value: "7.246", targetCell: "h_85" },
            "B.5": { section: "Transmission Losses", value: "4.166", targetCell: "h_86" },
            "B.6": { section: "Transmission Losses", value: "6.41", targetCell: "h_87" },
            "B.7.0": { section: "Transmission Losses", value: "1.9", targetCell: "h_88" },
            "B.8.1": { section: "Transmission Losses", value: "1.73", targetCell: "h_89" },
            "B.8.2": { section: "Transmission Losses", value: "1.73", targetCell: "h_90" },
            "B.8.3": { section: "Transmission Losses", value: "1.73", targetCell: "h_91" },
            "B.8.4": { section: "Transmission Losses", value: "1.73", targetCell: "h_92" },
            "B.8.5": { section: "Transmission Losses", value: "1.73", targetCell: "h_93" },
            "B.9": { section: "Transmission Losses", value: "3.52", targetCell: "h_94" },
            "B.10": { section: "Transmission Losses", value: "1.32", targetCell: "h_95" }
        },
        
        // Standard: PH Classic
        "PH Classic": {
            // SECTION 1. Key Values
            "T.1": { section: "Key Values", value: "0", targetCell: "h_6" },
            "T.2": { section: "Key Values", value: "15", targetCell: "h_8" },
            
            // SECTION 2. Building Information
            "S.1": { section: "Building Information", value: "90% less than NBC", targetCell: "h_13" },
            
            // SECTION 3. Climate Calculations
            "L.3.1": { section: "Climate Calculations", value: "18", targetCell: "h_23" },
            "L.3.2": { section: "Climate Calculations", value: "26", targetCell: "h_24" },
            
            // SECTION 4. Actual vs. Target Energy & Carbon
            "T.3.1": { section: "Energy & Carbon", value: "60", targetCell: "j_27" },
            "T.3.8": { section: "Energy & Carbon", value: "60", targetCell: "j_35" },
            
            // SECTION 7. Water Use
            "W.1.0": { section: "Water Use", value: "220", targetCell: "h_49" },
            "W.1.2": { section: "Water Use", value: "88", targetCell: "h_50" },
            
            // SECTION 9. Occupant Internal Gains
            "P.1": { section: "Occupant Internal Gains", value: "2.1", targetCell: "h_65" },
            "P.2": { section: "Occupant Internal Gains", value: "1.1", targetCell: "h_66" },
            
            // SECTION 11. Transmission Losses
            "B.4": { section: "Transmission Losses", value: "4.87", targetCell: "h_85" },
            "B.5": { section: "Transmission Losses", value: "4.21", targetCell: "h_86" },
            "B.6": { section: "Transmission Losses", value: "5.64", targetCell: "h_87" },
            "B.7.0": { section: "Transmission Losses", value: "1.6", targetCell: "h_88" },
            "B.8.1": { section: "Transmission Losses", value: "1.6", targetCell: "h_89" },
            "B.8.2": { section: "Transmission Losses", value: "1.6", targetCell: "h_90" },
            "B.8.3": { section: "Transmission Losses", value: "1.6", targetCell: "h_91" },
            "B.8.4": { section: "Transmission Losses", value: "1.6", targetCell: "h_92" },
            "B.8.5": { section: "Transmission Losses", value: "1.6", targetCell: "h_93" },
            "B.9": { section: "Transmission Losses", value: "3.72", targetCell: "h_94" },
            "B.10": { section: "Transmission Losses", value: "1.96", targetCell: "h_95" },
            
            // SECTION 12. Volume and Surface Metrics
            "B.15": { section: "Volume and Surface Metrics", value: "0.22", targetCell: "h_107" },
            "B.18.1": { section: "Volume and Surface Metrics", value: "0.17", targetCell: "h_108" },
            "B.18.2": { section: "Volume and Surface Metrics", value: "0.6", targetCell: "h_109" },
            "T.4": { section: "Volume and Surface Metrics", value: "0.15", targetCell: "h_104" },
            
            // SECTION 13. Mechanical Loads
            "M.3.5": { section: "Mechanical Loads", value: "10", targetCell: "h_117" },
            "V.1.1": { section: "Mechanical Loads", value: "0.75", targetCell: "h_118" },
            
            // SECTION 14. TEDI & TELI
            "T.4.0": { section: "TEDI & TELI", value: "15", targetCell: "h_127" },
            
            // SECTION 15. TEUI Targeted
            "T.6.8": { section: "TEUI Targeted", value: "10", targetCell: "h_140" }
        },
        
        // Standard: PH Plus
        "PH Plus": {
            // SECTION 1. Key Values
            "T.1": { section: "Key Values", value: "0", targetCell: "h_6" },
            "T.2": { section: "Key Values", value: "15", targetCell: "h_8" },
            
            // SECTION 2. Building Information
            "S.1": { section: "Building Information", value: "90% less than NBC", targetCell: "h_13" },
            
            // SECTION 3. Climate Calculations
            "L.3.1": { section: "Climate Calculations", value: "18", targetCell: "h_23" },
            "L.3.2": { section: "Climate Calculations", value: "26", targetCell: "h_24" },
            
            // SECTION 4. Actual vs. Target Energy & Carbon
            "T.3.1": { section: "Energy & Carbon", value: "60", targetCell: "j_27" },
            "T.3.8": { section: "Energy & Carbon", value: "45", targetCell: "j_35" },
            
            // SECTION 11. Transmission Losses
            "B.4": { section: "Transmission Losses", value: "4.87", targetCell: "h_85" },
            "B.5": { section: "Transmission Losses", value: "4.21", targetCell: "h_86" },
            "B.6": { section: "Transmission Losses", value: "5.64", targetCell: "h_87" },
            "B.7.0": { section: "Transmission Losses", value: "1.6", targetCell: "h_88" },
            "B.8.1": { section: "Transmission Losses", value: "1.6", targetCell: "h_89" },
            "B.8.2": { section: "Transmission Losses", value: "1.6", targetCell: "h_90" },
            "B.8.3": { section: "Transmission Losses", value: "1.6", targetCell: "h_91" },
            "B.8.4": { section: "Transmission Losses", value: "1.6", targetCell: "h_92" },
            "B.8.5": { section: "Transmission Losses", value: "1.6", targetCell: "h_93" },
            "B.9": { section: "Transmission Losses", value: "3.72", targetCell: "h_94" },
            "B.10": { section: "Transmission Losses", value: "1.96", targetCell: "h_95" },
            
            // SECTION 14. TEDI & TELI
            "T.4.0": { section: "TEDI & TELI", value: "15", targetCell: "h_127" },
            
            // SECTION 15. TEUI Targeted
            "T.6.8": { section: "TEUI Targeted", value: "10", targetCell: "h_140" }
        },
        
        // Standard: EnerPHit
        "EnerPHit": {
            // SECTION 1. Key Values
            "T.1": { section: "Key Values", value: "0", targetCell: "h_6" },
            "T.2": { section: "Key Values", value: "15", targetCell: "h_8" },
            
            // SECTION 2. Building Information
            "S.1": { section: "Building Information", value: "PH Renovations", targetCell: "h_13" },
            
            // SECTION 3. Climate Calculations
            "L.3.1": { section: "Climate Calculations", value: "18", targetCell: "h_23" },
            "L.3.2": { section: "Climate Calculations", value: "26", targetCell: "h_24" },
            
            // SECTION 4. Actual vs. Target Energy & Carbon
            "T.3.1": { section: "Energy & Carbon", value: "100", targetCell: "j_27" },
            "T.3.8": { section: "Energy & Carbon", value: "60", targetCell: "j_35" },
            
            // SECTION 7. Water Use
            "W.1.0": { section: "Water Use", value: "62.5", targetCell: "h_49" },
            "W.1.2": { section: "Water Use", value: "25", targetCell: "h_50" },
            
            // SECTION 11. Transmission Losses
            "B.4": { section: "Transmission Losses", value: "6.67", targetCell: "h_85" },
            "B.5": { section: "Transmission Losses", value: "6.67", targetCell: "h_86" },
            "B.6": { section: "Transmission Losses", value: "6.67", targetCell: "h_87" },
            "B.7.0": { section: "Transmission Losses", value: "0.85", targetCell: "h_88" },
            "B.8.1": { section: "Transmission Losses", value: "0.85", targetCell: "h_89" },
            "B.8.2": { section: "Transmission Losses", value: "0.85", targetCell: "h_90" },
            "B.8.3": { section: "Transmission Losses", value: "0.85", targetCell: "h_91" },
            "B.8.4": { section: "Transmission Losses", value: "0.85", targetCell: "h_92" },
            "B.8.5": { section: "Transmission Losses", value: "0.85", targetCell: "h_93" },
            "B.9": { section: "Transmission Losses", value: "3.72", targetCell: "h_94" },
            "B.10": { section: "Transmission Losses", value: "1.96", targetCell: "h_95" },
            
            // SECTION 14. TEDI & TELI
            "T.4.0": { section: "TEDI & TELI", value: "15", targetCell: "h_127" },
            
            // SECTION 15. TEUI Targeted
            "T.6.8": { section: "TEUI Targeted", value: "25", targetCell: "h_140" }
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