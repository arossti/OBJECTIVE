// Excel mapper for TEUI Calculator - Need to update for DOM-based Field-Name-Mappings
// Maps between Excel file structure and the calculator's data model

// Script Block 1: Core Configuration and Initial Data Structure
const CONFIG = {
    // System Value Limits and Defaults
    EMISSIONS: {
        GAS_INTENSITY: 1921,  // gCO2e/m3
        GAS_ENERGY_DENSITY: 10.36,  // ekWh/m3
        DEFAULT_GAS_COST: 0.507,  // $/m3
        DEFAULT_ELECTRICITY_COST: 0.13  // $/kWh
    },
    // Excel cell mapping configuration
    EXCEL_MAPPING: {
        SHEETS: {
            ENERGY_BALANCE: "ENERGY BALANCE",
            REPORT: "REPORT",
            NBC2025C2: "NBC-2025-C2",
        },
        // Placeholder for the old/combined mapping structure
        // We will define a specific mapping for Report sheet import later
        NODE_VALUES: { 
            // Example mappings from previous structure (to be replaced/refined)
            'e-6': 'REPORT!E6', // Adjusted sheet assumption
            'T.1_target': 'REPORT!C5',
            'T.1_actual': 'REPORT!D5',
            // ... other mappings ...
            'a-5':   'NBC-2025-C2!A5', // Climate Data mappings remain separate
            'a-115': 'NBC-2025-C2!A115',
            // ... rest of climate mappings ...
            'a-683': 'NBC-2025-C2!A683'
        }
    }
};

// Placeholder for the old mapping (referenced by existing code) - will be deprecated
const excelMapping = CONFIG.EXCEL_MAPPING.NODE_VALUES || {}; 

// Reverse mapping for export (based on the old mapping for now)
const reverseMapping = Object.fromEntries(
    Object.entries(excelMapping).map(([key, value]) => [value, key])
);

class ExcelMapper {
    constructor() {
        this.mapping = excelMapping; // Keep old mapping for now if needed by existing export
        this.reverseMapping = reverseMapping;
        // Define the NEW specific mapping for user input import
        this.excelReportInputMapping = {
            // Populate this based on TEUI v3.037 REPORT sheet for USER-EDITABLE fields
            // Example: Cell B10 (Major Occupancy) -> field d_12
            'B10': 'd_12', 
            // Example: Cell D12 (Project Name) -> field h_14
            'D12': 'h_14',
            // Example: Cell D13 (Conditioned Area) -> field h_15
            'D13': 'h_15',
            // Add other user-editable fields from Section 2 (REPORT! sheet)
            'D10': 'd_13', // Reference Standard (Dropdown)
            'D11': 'd_14', // Actual/Target Use (Dropdown) 
            'B15': 'd_15', // Carbon Standard (Dropdown) 
            'D15': 'h_13', // Service Life (Slider -> Number)
            'H15': 'i_16', // Certifier (Text)
            'H16': 'i_17', // License No (Text)
            'L10': 'l_12', // Elec Cost
            'L11': 'l_13', // Gas Cost
            'L12': 'l_14', // Propane Cost
            'L13': 'l_15', // Wood Cost
            'L14': 'l_16', // Oil Cost 
            // Example: Section 4 Inputs (Actuals only, from REPORT sheet)
            'B19': 'd_27', // Actual Elec Use
            'B20': 'd_28', // Actual Gas Use
            'B21': 'd_29', // Actual Propane Use
            'B22': 'd_30', // Actual Oil Use
            'B23': 'd_31', // Actual Wood Use
            'K19': 'l_27', // Elec Emission Factor
            'K20': 'l_28', // Gas Emission Factor
            'K21': 'l_29', // Propane Emission Factor
            'K22': 'l_30', // Oil Emission Factor
            'K23': 'l_31', // Wood Emission Factor
            // Section 13 AFUE (Assuming it's editable)
            'F28': 'j_115' // AFUE - Assuming F28 based on formula, needs verification
            // ADD OTHER USER-EDITABLE FIELDS FROM OTHER SECTIONS AS IDENTIFIED
            // e.g., Section 6 renewables, Section 11 RSI/U-values, Section 13 costs/efficiencies?
            // Placeholder for k_120 if mapped: 'SomeCell': 'k_120'
            // Placeholder for d_142 if mapped: 'SomeCell': 'd_142'
        };
    }
    
    /**
     * NEW function specifically for importing user data from REPORT sheet.
     */
    mapExcelToReportModel(workbook) {
        const importedData = {};
        const sheetName = CONFIG.EXCEL_MAPPING.SHEETS.REPORT;
        const worksheet = workbook.Sheets[sheetName];

        if (!worksheet) {
            console.error(`Sheet named '${sheetName}' not found in the workbook.`);
            return null; // Indicate error
        }

        console.log(`Mapping data from sheet: ${sheetName}`);

        Object.entries(this.excelReportInputMapping).forEach(([cellRef, fieldId]) => {
            // Construct the full cell reference with the sheet name for clarity if needed
            // const fullCellRef = `${sheetName}!${cellRef}`;
            const cell = worksheet[cellRef]; // Directly access using cell ref on the correct sheet
            if (cell !== undefined) {
                importedData[fieldId] = this.extractCellValue(cell);
                // console.log(`Mapped ${sheetName}!${cellRef} -> ${fieldId}: ${importedData[fieldId]}`);
            } else {
                // console.warn(`Cell ${sheetName}!${cellRef} (for ${fieldId}) not found.`);
            }
        });
        
        console.log("Finished mapping. Imported data keys:", Object.keys(importedData));
        return importedData;
    }

    // --- Existing methods (potentially keep for backward compat or full export) ---
    mapExcelToModel(workbook) {
        const result = {};
        const worksheet = workbook.Sheets[workbook.SheetNames[0]]; // Uses first sheet
        Object.entries(this.mapping).forEach(([fieldId, cellRef]) => {
            const cell = worksheet[cellRef];
            if (cell !== undefined) {
                result[fieldId] = this.extractCellValue(cell);
            }
        });
        return result;
    }

    createWorkbook(data) {
        const workbook = XLSX.utils.book_new();
        const worksheet = XLSX.utils.aoa_to_sheet([]);
        Object.entries(this.mapping).forEach(([fieldId, cellRef]) => {
            if (data[fieldId] !== undefined) {
                const colRow = this.cellRefToColRow(cellRef);
                 if (colRow) { // Check if conversion was successful
                    const value = data[fieldId];
                    XLSX.utils.sheet_add_aoa(worksheet, [[value]], { origin: colRow });
                }
            }
        });
        XLSX.utils.book_append_sheet(workbook, worksheet, "TEUI Calculator");
        return workbook;
    }
    
    extractCellValue(cell) {
        if (!cell) return null; // Handle cases where cell might be null/undefined
        if (cell.t === 'n') return cell.v; // Number
        if (cell.t === 's') return cell.v; // String
        if (cell.t === 'b') return cell.v; // Boolean
        if (cell.t === 'd') return cell.v; // Date
        return cell.v; // Default
    }
    
    cellRefToColRow(cellRef) {
        const match = cellRef.match(/([A-Z]+)(\d+)/);
        if (!match) return null;
        const [, colLetters, rowStr] = match;
        let col = 0;
        for (let i = 0; i < colLetters.length; i++) {
            col = col * 26 + (colLetters.charCodeAt(i) - 'A'.charCodeAt(0) + 1);
        }
        col--; 
        const row = parseInt(rowStr, 10) - 1;
        return { c: col, r: row };
    }
}

// Create and export instance
window.TEUI = window.TEUI || {};
window.TEUI.ExcelMapper = new ExcelMapper();