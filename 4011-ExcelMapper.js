// Excel mapper for TEUI Calculator - Need to update for DOM-based Field-Name-Mappings
// Maps between Excel file structure and the calculator's data model
// Script Block 1: Core Configuration and Initial Data Structure
const CONFIG = {		
  // System Value Limits and Defaults
  // Emissions and Cost Factors
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
  NODE_VALUES: {
const excelMapping = {
    // Key Values
    'e-6': 'E6', // Reference T.1 Lifetime Carbon
    'T.1_target': 'REPORT!C5',
    'T.1_actual': 'D5',
    'T.2_value': 'B6',
    'T.2_target': 'C6',
    'T.2_actual': 'D6',
    'T.3_value': 'B7',
    'T.3_target': 'C7',
    'T.3_actual': 'D7',
    
    // Building Information
    'B.1_value': 'B10',
    'L.1_province': 'D10',
    'B.2_name': 'D12',
    'B.3_area': 'D13',
    'S.4_target': 'B16',
    
    // Energy Section
    'T.3.1_actual': 'B19',
    'T.3.1_target': 'E19',
    'T.3.2_actual': 'B20',
    'T.3.2_target': 'E20',
    'T.3.3_actual': 'B21',
    'T.3.3_target': 'E21',
    'T.3.4_actual': 'B22',
    'T.3.4_target': 'E22',
    'T.3.5_actual': 'B23',
    'T.3.5_target': 'E23',
    
    // Water Use Section
    'W.1.0_value': 'B38',
    'W.1.1_method': 'B39',
    'W.1.2_dhw': 'B40',
	
	
	// Climate Data
	// Province Index Options List
	'a-5':   'NBC-2025-C2!A5',			// British Columbia Rows A6:A114
	'a-115': 'NBC-2025-C2!A115',		// Alberta Rows A116:170
	'a-171': 'NBC-2025-C2!A171',		// Saskatchewan Rows A172:A202
	'a-203': 'NBC-2025-C2!A203',		// Manitoba Rows A204:A227
	'a-228': 'NBC-2025-C2!A228',		// Ontario Rows A229:A458
	'a-459': 'NBC-2025-C2!A459',		// Quebec Rows A460:A584
	'a-585': 'NBC-2025-C2!A585',		// New Brunswick Rows A586:A603
	'a-604': 'NBC-2025-C2!A604',		// Nova Scotia Rows A605:A630
	'a-631': 'NBC-2025-C2!A631',		// Prince Edward Island Rows A632:A635
	'a-636': 'NBC-2025-C2!A636',		// Newfoundland and Labrador Rows A637:A654
	'a-655': 'NBC-2025-C2!A655',		// Yukon Rows A656:A664
	'a-665': 'NBC-2025-C2!A665',		// Northwest Territory Rows A666:A682
	'a-683': 'NBC-2025-C2!A683'			// Nunavut Rows A684:A699
    
    // Additional mappings would continue for all fields
};

// Reverse mapping for export
const reverseMapping = Object.fromEntries(
    Object.entries(excelMapping).map(([key, value]) => [value, key])
);

class ExcelMapper {
    constructor() {
        this.mapping = excelMapping;
        this.reverseMapping = reverseMapping;
    }
    
    // Map Excel data to our internal data model
    mapExcelToModel(workbook) {
        const result = {};
        
        // Get main worksheet
        const worksheet = workbook.Sheets[workbook.SheetNames[0]];
        
        // Process each mapping
        Object.entries(this.mapping).forEach(([fieldId, cellRef]) => {
            const cell = worksheet[cellRef];
            if (cell !== undefined) {
                result[fieldId] = this.extractCellValue(cell);
            }
        });
        
        return result;
    }
    
    // Create a workbook from our data model
    createWorkbook(data) {
        // Create a new workbook
        const workbook = XLSX.utils.book_new();
        
        // Create a worksheet
        const worksheet = XLSX.utils.aoa_to_sheet([]);
        
        // Populate worksheet with data
        Object.entries(this.mapping).forEach(([fieldId, cellRef]) => {
            if (data[fieldId] !== undefined) {
                const colRow = this.cellRefToColRow(cellRef);
                const value = data[fieldId];
                
                // Set cell value
                XLSX.utils.sheet_add_aoa(worksheet, [[value]], { origin: colRow });
            }
        });
        
        // Add worksheet to workbook
        XLSX.utils.book_append_sheet(workbook, worksheet, "TEUI Calculator");
        
        return workbook;
    }
    
    // Extract cell value based on type
    extractCellValue(cell) {
        if (cell.t === 'n') {
            return cell.v; // Number
        } else if (cell.t === 's') {
            return cell.v; // String
        } else if (cell.t === 'b') {
            return cell.v; // Boolean
        } else if (cell.t === 'd') {
            return cell.v; // Date
        } else {
            return cell.v; // Default - just return the value
        }
    }
    
    // Convert Excel cell reference (A1) to { c, r } format
    cellRefToColRow(cellRef) {
        // Extract column letters and row number
        const match = cellRef.match(/([A-Z]+)(\d+)/);
        if (!match) return null;
        
        const [, colLetters, rowStr] = match;
        
        // Convert column letters to 0-based index
        let col = 0;
        for (let i = 0; i < colLetters.length; i++) {
            col = col * 26 + (colLetters.charCodeAt(i) - 'A'.charCodeAt(0) + 1);
        }
        col--; // 0-based index
        
        // Convert row to 0-based index
        const row = parseInt(rowStr, 10) - 1;
        
        return { c: col, r: row };
    }
}

// Create and export instance
const excelMapper = new ExcelMapper();
window.excelMapper = excelMapper;