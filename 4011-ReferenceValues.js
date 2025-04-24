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
            "T.1": { section: "Key Values", value: "0" },
            "T.2": { section: "Key Values", value: "15" },
            "T.3": { section: "Key Values", value: "226.9" },
            
            // SECTION 2. Building Information
            "S.1": { section: "Building Information", value: "OBC Prescriptive Path for HP" },
            
            // SECTION 3. Climate Calculations
            "L.3.1": { section: "Climate Calculations", value: "22" },
            "L.3.2": { section: "Climate Calculations", value: "26" },
            
            // SECTION 4. Actual vs. Target Energy & Carbon
            "T.3.1": { section: "Energy & Carbon", value: "=XLOOKUP(REPORT!D12, OccType, SCHEDULES!F13:F20, \"Not Found\")" },
            "T.3.8": { section: "Energy & Carbon", value: "0" },
            
            // SECTION 5. CO2e Emissions
            "E.1.2": { section: "CO2e Emissions", value: "-" },
            "E.3.1": { section: "CO2e Emissions", value: "500" },
            
            // SECTION 7. Water Use
            "W.1.0": { section: "Water Use", value: "275" },
            "W.1.2": { section: "Water Use", value: "110" },
            "W.4": { section: "Water Use", value: "0.9" },
            "W.5.1": { section: "Water Use", value: "0.42" },
            
            // SECTION 8. Indoor Air Quality
            "A.2": { section: "Indoor Air Quality", value: "150" },
            "A.3": { section: "Indoor Air Quality", value: "1000" },
            "A.4": { section: "Indoor Air Quality", value: "150" },
            "A.5": { section: "Indoor Air Quality", value: "30-50 ideal" },
            
            // SECTION 9. Occupant Internal Gains
            "P.1": { section: "Occupant Internal Gains", value: "5" },
            "P.2": { section: "Occupant Internal Gains", value: "2" },
            "P.3.1": { section: "Occupant Internal Gains", value: "5" },
            
            // SECTION 11. Transmission Losses
            "B.4": { section: "Transmission Losses", value: "4.87" },
            "B.5": { section: "Transmission Losses", value: "4.21" },
            "B.6": { section: "Transmission Losses", value: "5.64" },
            "B.7.0": { section: "Transmission Losses", value: "1.6" },
            "B.8.1": { section: "Transmission Losses", value: "1.6" },
            "B.8.2": { section: "Transmission Losses", value: "1.6" },
            "B.8.3": { section: "Transmission Losses", value: "1.6" },
            "B.8.4": { section: "Transmission Losses", value: "1.6" },
            "B.8.5": { section: "Transmission Losses", value: "1.6" },
            "B.9": { section: "Transmission Losses", value: "3.72" },
            "B.10": { section: "Transmission Losses", value: "1.96" },
            
            // SECTION 12. Volume and Surface Metrics
            "B.15": { section: "Volume and Surface Metrics", value: "0.22" },
            "B.18.1": { section: "Volume and Surface Metrics", value: "0.538" },
            "B.18.2": { section: "Volume and Surface Metrics", value: "1.5" },
            "B.18.4": { section: "Volume and Surface Metrics", value: "5" },
            "T.4": { section: "Volume and Surface Metrics", value: "-" },
            
            // SECTION 13. Mechanical Loads
            "M.1.0": { section: "Mechanical Loads", value: "7.1" },
            "M.2.5": { section: "Mechanical Loads", value: "0.9" },
            "M.3.0": { section: "Mechanical Loads", value: "3.3" },
            "M.3.5": { section: "Mechanical Loads", value: "50" },
            "V.1.1": { section: "Mechanical Loads", value: "0.55" },
            "V.1.4": { section: "Mechanical Loads", value: "12.5" },
            "V.1.6": { section: "Mechanical Loads", value: "0.45" },
            
            // SECTION 14. TEDI & TELI
            "T.4.0": { section: "TEDI & TELI", value: "50" },
            
            // SECTION 15. TEUI Targeted
            "T.6.8": { section: "TEUI Targeted", value: "50" }
        },
        
        // Standard: OBC SB12 3.1.1.2.C1
        "OBC SB12 3.1.1.2.C1": {
            // SECTION 1. Key Values
            "T.1": { section: "Key Values", value: "0" },
            "T.2": { section: "Key Values", value: "15" },
            
            // SECTION 2. Building Information
            "S.1": { section: "Building Information", value: "OBC Prescriptive Path for Elect." },
            
            // SECTION 3. Climate Calculations
            "L.3.1": { section: "Climate Calculations", value: "22" },
            "L.3.2": { section: "Climate Calculations", value: "26" },
            
            // SECTION 4. Actual vs. Target Energy & Carbon
            "T.3.1": { section: "Energy & Carbon", value: "=XLOOKUP(REPORT!C12, OccType, SCHEDULES!E13:E20, \"Not Found\")" },
            "T.3.8": { section: "Energy & Carbon", value: "0" },
            
            // SECTION 11. Transmission Losses
            "B.4": { section: "Transmission Losses", value: "4.87" },
            "B.5": { section: "Transmission Losses", value: "4.46" },
            "B.6": { section: "Transmission Losses", value: "5.25" },
            "B.7.0": { section: "Transmission Losses", value: "1.4" },
            "B.8.1": { section: "Transmission Losses", value: "1.4" },
            "B.8.2": { section: "Transmission Losses", value: "1.4" },
            "B.8.3": { section: "Transmission Losses", value: "1.4" },
            "B.8.4": { section: "Transmission Losses", value: "1.4" },
            "B.8.5": { section: "Transmission Losses", value: "1.4" },
            "B.9": { section: "Transmission Losses", value: "3.72" },
            "B.10": { section: "Transmission Losses", value: "1.96" }
        },
        
        // Standard: OBC SB10 5.5-6 Z6
        "OBC SB10 5.5-6 Z6": {
            // SECTION 1. Key Values
            "T.1": { section: "Key Values", value: "0" },
            "T.2": { section: "Key Values", value: "15" },
            
            // SECTION 2. Building Information
            "S.1": { section: "Building Information", value: "OBC Prescriptive Path Part 3" },
            
            // SECTION 3. Climate Calculations
            "L.3.1": { section: "Climate Calculations", value: "22" },
            "L.3.2": { section: "Climate Calculations", value: "26" },
            
            // SECTION 11. Transmission Losses
            "B.4": { section: "Transmission Losses", value: "5.3" },
            "B.5": { section: "Transmission Losses", value: "4.1" },
            "B.6": { section: "Transmission Losses", value: "6.6" },
            "B.7.0": { section: "Transmission Losses", value: "1.99" },
            "B.8.1": { section: "Transmission Losses", value: "1.42" },
            "B.8.2": { section: "Transmission Losses", value: "1.42" },
            "B.8.3": { section: "Transmission Losses", value: "1.42" },
            "B.8.4": { section: "Transmission Losses", value: "1.42" },
            "B.8.5": { section: "Transmission Losses", value: "1.42" },
            "B.9": { section: "Transmission Losses", value: "1.8" },
            "B.10": { section: "Transmission Losses", value: "3.5" }
        },
        
        // Standard: NBC T1
        "NBC T1": {
            // SECTION 1. Key Values
            "T.1": { section: "Key Values", value: "0" },
            "T.2": { section: "Key Values", value: "15" },
            
            // SECTION 2. Building Information
            "S.1": { section: "Building Information", value: "NBC 9.36 Prescriptive Path" },
            
            // SECTION 3. Climate Calculations
            "L.3.1": { section: "Climate Calculations", value: "22" },
            "L.3.2": { section: "Climate Calculations", value: "24" },
            
            // SECTION 4. Actual vs. Target Energy & Carbon
            "T.3.1": { section: "Energy & Carbon", value: "=XLOOKUP(REPORT!D12, OccType, SCHEDULES!F13:F20, \"Not Found\")" },
            
            // SECTION 11. Transmission Losses
            "B.4": { section: "Transmission Losses", value: "6.41" },
            "B.5": { section: "Transmission Losses", value: "2.97" },
            "B.6": { section: "Transmission Losses", value: "5.64" },
            "B.7.0": { section: "Transmission Losses", value: "1.8" },
            "B.8.1": { section: "Transmission Losses", value: "1.8" },
            "B.8.2": { section: "Transmission Losses", value: "1.8" },
            "B.8.3": { section: "Transmission Losses", value: "1.8" },
            "B.8.4": { section: "Transmission Losses", value: "1.8" },
            "B.8.5": { section: "Transmission Losses", value: "1.8" },
            "B.9": { section: "Transmission Losses", value: "2.98" },
            "B.10": { section: "Transmission Losses", value: "1.96" }
        },
        
        // Standard: NECB T1 (Z6)
        "NECB T1 (Z6)": {
            // SECTION 1. Key Values
            "T.1": { section: "Key Values", value: "0" },
            "T.2": { section: "Key Values", value: "15" },
            
            // SECTION 2. Building Information
            "S.1": { section: "Building Information", value: "Replacing SB10" },
            
            // SECTION 3. Climate Calculations
            "L.3.1": { section: "Climate Calculations", value: "22" },
            "L.3.2": { section: "Climate Calculations", value: "24" },
            
            // SECTION 11. Transmission Losses
            "B.4": { section: "Transmission Losses", value: "7.246" },
            "B.5": { section: "Transmission Losses", value: "4.166" },
            "B.6": { section: "Transmission Losses", value: "6.41" },
            "B.7.0": { section: "Transmission Losses", value: "1.9" },
            "B.8.1": { section: "Transmission Losses", value: "1.73" },
            "B.8.2": { section: "Transmission Losses", value: "1.73" },
            "B.8.3": { section: "Transmission Losses", value: "1.73" },
            "B.8.4": { section: "Transmission Losses", value: "1.73" },
            "B.8.5": { section: "Transmission Losses", value: "1.73" },
            "B.9": { section: "Transmission Losses", value: "3.52" },
            "B.10": { section: "Transmission Losses", value: "1.32" }
        },
        
        // Standard: PH Classic
        "PH Classic": {
            // SECTION 1. Key Values
            "T.1": { section: "Key Values", value: "0" },
            "T.2": { section: "Key Values", value: "15" },
            
            // SECTION 2. Building Information
            "S.1": { section: "Building Information", value: "90% less than NBC" },
            
            // SECTION 3. Climate Calculations
            "L.3.1": { section: "Climate Calculations", value: "18" },
            "L.3.2": { section: "Climate Calculations", value: "26" },
            
            // SECTION 4. Actual vs. Target Energy & Carbon
            "T.3.1": { section: "Energy & Carbon", value: "60" },
            "T.3.8": { section: "Energy & Carbon", value: "60" },
            
            // SECTION 7. Water Use
            "W.1.0": { section: "Water Use", value: "220" },
            "W.1.2": { section: "Water Use", value: "88" },
            
            // SECTION 9. Occupant Internal Gains
            "P.1": { section: "Occupant Internal Gains", value: "2.1" },
            "P.2": { section: "Occupant Internal Gains", value: "1.1" },
            
            // SECTION 11. Transmission Losses
            "B.4": { section: "Transmission Losses", value: "4.87" },
            "B.5": { section: "Transmission Losses", value: "4.21" },
            "B.6": { section: "Transmission Losses", value: "5.64" },
            "B.7.0": { section: "Transmission Losses", value: "1.6" },
            "B.8.1": { section: "Transmission Losses", value: "1.6" },
            "B.8.2": { section: "Transmission Losses", value: "1.6" },
            "B.8.3": { section: "Transmission Losses", value: "1.6" },
            "B.8.4": { section: "Transmission Losses", value: "1.6" },
            "B.8.5": { section: "Transmission Losses", value: "1.6" },
            "B.9": { section: "Transmission Losses", value: "3.72" },
            "B.10": { section: "Transmission Losses", value: "1.96" },
            
            // SECTION 12. Volume and Surface Metrics
            "B.15": { section: "Volume and Surface Metrics", value: "0.22" },
            "B.18.1": { section: "Volume and Surface Metrics", value: "0.17" },
            "B.18.2": { section: "Volume and Surface Metrics", value: "0.6" },
            "T.4": { section: "Volume and Surface Metrics", value: "0.15" },
            
            // SECTION 13. Mechanical Loads
            "M.3.5": { section: "Mechanical Loads", value: "10" },
            "V.1.1": { section: "Mechanical Loads", value: "0.75" },
            
            // SECTION 14. TEDI & TELI
            "T.4.0": { section: "TEDI & TELI", value: "15" },
            
            // SECTION 15. TEUI Targeted
            "T.6.8": { section: "TEUI Targeted", value: "10" }
        },
        
        // Standard: PH Plus
        "PH Plus": {
            // SECTION 1. Key Values
            "T.1": { section: "Key Values", value: "0" },
            "T.2": { section: "Key Values", value: "15" },
            
            // SECTION 2. Building Information
            "S.1": { section: "Building Information", value: "90% less than NBC" },
            
            // SECTION 3. Climate Calculations
            "L.3.1": { section: "Climate Calculations", value: "18" },
            "L.3.2": { section: "Climate Calculations", value: "26" },
            
            // SECTION 4. Actual vs. Target Energy & Carbon
            "T.3.1": { section: "Energy & Carbon", value: "60" },
            "T.3.8": { section: "Energy & Carbon", value: "45" },
            
            // SECTION 11. Transmission Losses
            "B.4": { section: "Transmission Losses", value: "4.87" },
            "B.5": { section: "Transmission Losses", value: "4.21" },
            "B.6": { section: "Transmission Losses", value: "5.64" },
            "B.7.0": { section: "Transmission Losses", value: "1.6" },
            "B.8.1": { section: "Transmission Losses", value: "1.6" },
            "B.8.2": { section: "Transmission Losses", value: "1.6" },
            "B.8.3": { section: "Transmission Losses", value: "1.6" },
            "B.8.4": { section: "Transmission Losses", value: "1.6" },
            "B.8.5": { section: "Transmission Losses", value: "1.6" },
            "B.9": { section: "Transmission Losses", value: "3.72" },
            "B.10": { section: "Transmission Losses", value: "1.96" },
            
            // SECTION 14. TEDI & TELI
            "T.4.0": { section: "TEDI & TELI", value: "15" },
            
            // SECTION 15. TEUI Targeted
            "T.6.8": { section: "TEUI Targeted", value: "10" }
        },
        
        // Standard: EnerPHit
        "EnerPHit": {
            // SECTION 1. Key Values
            "T.1": { section: "Key Values", value: "0" },
            "T.2": { section: "Key Values", value: "15" },
            
            // SECTION 2. Building Information
            "S.1": { section: "Building Information", value: "PH Renovations" },
            
            // SECTION 3. Climate Calculations
            "L.3.1": { section: "Climate Calculations", value: "18" },
            "L.3.2": { section: "Climate Calculations", value: "26" },
            
            // SECTION 4. Actual vs. Target Energy & Carbon
            "T.3.1": { section: "Energy & Carbon", value: "100" },
            "T.3.8": { section: "Energy & Carbon", value: "60" },
            
            // SECTION 7. Water Use
            "W.1.0": { section: "Water Use", value: "62.5" },
            "W.1.2": { section: "Water Use", value: "25" },
            
            // SECTION 11. Transmission Losses
            "B.4": { section: "Transmission Losses", value: "6.67" },
            "B.5": { section: "Transmission Losses", value: "6.67" },
            "B.6": { section: "Transmission Losses", value: "6.67" },
            "B.7.0": { section: "Transmission Losses", value: "0.85" },
            "B.8.1": { section: "Transmission Losses", value: "0.85" },
            "B.8.2": { section: "Transmission Losses", value: "0.85" },
            "B.8.3": { section: "Transmission Losses", value: "0.85" },
            "B.8.4": { section: "Transmission Losses", value: "0.85" },
            "B.8.5": { section: "Transmission Losses", value: "0.85" },
            "B.9": { section: "Transmission Losses", value: "3.72" },
            "B.10": { section: "Transmission Losses", value: "1.96" },
            
            // SECTION 14. TEDI & TELI
            "T.4.0": { section: "TEDI & TELI", value: "15" },
            
            // SECTION 15. TEUI Targeted
            "T.6.8": { section: "TEUI Targeted", value: "25" }
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
                result[fieldId] = data.value;
            }
        });
        
        return result;
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
        getStandardFields,
        getStandards,
        getSectionFields,
        hasValue,
        // Expose the raw data for debugging or direct access
        _data: referenceStandards
    };
})(); 