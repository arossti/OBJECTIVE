# File Handler Strategy & Implementation Status (Excel/CSV Import & CSV Export)

This document outlines the strategy and current implementation status for data import/export functionalities within the TEUI Calculator v4.011.

**Goal:** Allow users to import data from legacy Excel files (`.xlsx`/`.xls`) focusing on user inputs from the `REPORT!` sheet, and enable users to save/load scenarios locally via CSV export/import of user-editable fields, maintaining parity with the Excel row structure.

## 1. UI Integration (`4011-Index.html`) - *To Be Implemented*

-   [ ] Modify the existing "Download Report" button into a Bootstrap dropdown button group.
-   [ ] Add menu item: "Import Data (Excel/CSV)" linked to trigger the hidden file input (`id="excel-file-input"`). Assign `id="import-data-btn"` to this menu item.
-   [ ] Add menu item: "Export Data (CSV)" linked to trigger the `TEUI.FileHandler.exportToCSV()` function. Assign `id="export-data-btn"` to this menu item.
-   [ ] Keep/Update "Download Report (PDF)" menu item.
-   [ ] Hide or remove the old standalone `import-excel` and `export-excel` buttons if they exist.

## 2. File Handling Logic (`4011-FileHandler.js`) - *Partially Implemented*

### 2.1. Import Process

-   **`handleFileSelect(event)`:** *Implemented*
    -   Accepts `.xlsx`, `.xls`, `.csv`.
    -   Reads file using `FileReader` (`readAsArrayBuffer`).
    -   Detects file type based on extension.
    -   Dispatches to `processImportedExcel` or `processImportedCSV`.
    -   Resets file input value after processing.

-   **`processImportedExcel(workbook)`:** *Implemented*
    -   Requires `TEUI.ExcelMapper`.
    -   Calls `TEUI.ExcelMapper.mapExcelToReportModel(workbook)` to get user-editable data from `REPORT!` sheet.
    -   Handles null return (sheet not found error).
    -   Handles empty data scenario.
    -   Calls `updateStateFromImportData(importedData)`.

-   **`processImportedCSV(csvString)`:** *Implemented (Basic Parser)*
    -   Parses CSV string (simple split, assumes no complex quoting/escaping - **TODO:** Enhance parser if needed).
    -   Expects `fieldId` and `value` columns (validates header).
    -   Builds `importedData` object.
    -   Calls `updateStateFromImportData(importedData)`.

-   **`updateStateFromImportData(importedData, csvSkippedCount)`:** *Implemented*
    -   Requires `TEUI.StateManager` and `TEUI.FieldManager`.
    -   Iterates through imported `{ fieldId: value }` pairs.
    -   Uses `FieldManager.getField(fieldId)` to check existence and type.
    -   Parses/validates `value` based on `fieldDef.type` (using `window.TEUI.parseNumeric` for numbers/sliders, checking dropdown options).
    -   Handles invalid/unknown fields by logging warnings and skipping.
    -   Updates `StateManager` using `setValue(fieldId, parsedValueString, 'imported')` for valid data.
    -   Triggers `TEUI.Calculator.calculateAll()` after processing.
    -   Provides summary feedback via `showStatus()`.

### 2.2. Export Process

-   **`exportToCSV()`:** *Implemented (Basic)*
    -   **Focus:** Exports the *current values* of all *user-editable* fields into a CSV format that mirrors the structure of reference files like `FORMULAE-3037.csv` and `3037DOM.csv`.
    -   Initializes CSV content string with header: `"ExcelRow","RowID","Description","FieldID","Value","Units"\n`.
    -   Gets all field definitions: `const allFields = TEUI.FieldManager.getAllFields();`.
    -   Filters for user-editable fields: `const editableFields = Object.entries(allFields).filter(([id, def]) => def.type === 'editable');`.
    -   Iterates through `editableFields`:
        -   For each `[fieldId, fieldDef]`:
            -   **Determine Layout Info:** Requires logic to map `fieldId` (e.g., `d_15`) back to its section, Excel row number (`15`), column letter (`d`), Row ID (`S.3`), Description (`Carbon Benchmarking Standard`), and Units (`/kWh`). This likely involves searching through the `sectionRows` definitions loaded by `FieldManager`.
            -   Get current value: `const currentValue = window.TEUI.StateManager.getValue(fieldId);`.
            -   Format CSV row: `excelRow,rowId,description,fieldId,value,units`. Ensure proper CSV escaping.
            -   Append the formatted row string.
        -   Create Blob and trigger download as `TEUI_Data_Export.csv`.
    -   Updates UI feedback via `showStatus()`.
    -   **Note:** Implementing the lookup for `ExcelRow`, `RowID`, `Description`, and `Units` based on `fieldId` adds complexity compared to only exporting `fieldId` and `value`. This requires careful implementation in `exportToCSV`.

### 2.3. Event Listeners & Helpers

-   **`setupEventListeners()`:** *Implemented*
    -   Connects UI buttons (`import-data-btn`, `export-data-btn`) to corresponding handler functions.
    -   Hides old buttons.
    -   Keeps climate-related button listeners (potentially for `ExcelLocationHandler`).
-   **`showStatus()`:** *Implemented* (Provides UI feedback).
-   **`applyImportedData()`:** *Retained* (May be redundant now, was tied to old climate import flow).
-   **Legacy Methods:** `exportToExcel`, `fallbackCreateWorkbook`, `binaryStringToBlob` retained for potential future use but are not part of the primary CSV workflow.

## 3. Mapping Logic (`4011-ExcelMapper.js`) - *Partially Implemented*

-   **Syntax Errors:** *Fixed*.
-   **`excelReportInputMapping`:** *Defined (Needs Population)*
    -   Object structure is in place.
    -   **Requires:** Populating with all correct `REPORT!CellRef` -> `fieldId` mappings for user-editable fields based on v3.037.
-   **`mapExcelToReportModel(workbook)`:** *Implemented*
    -   Correctly targets the `REPORT!` sheet.
    -   Uses `excelReportInputMapping`.
    -   Returns `{ fieldId: value }` object or `null` on error.
-   **Helper Functions:** `extractCellValue`, `cellRefToColRow` retained and functional.
-   **Units/Description Source (Export):** Relying on data structured within `sectionRows` requires diligent setup across all section files but keeps data definitions co-located.
-   **Invalid Dropdown Values (Import):** Strategy is to **skip** invalid fields and log a console warning.
-   **CSV Parsing (Import):** Implement a simple parser focusing on extracting the `FieldID` and `Value` columns. Robustness for complex CSVs might need future enhancement.
-   **CSV Export Format:** The target format (`ExcelRow,RowID,Description,FieldID,Value,Units`) provides user context but requires mapping logic during export generation.
-   **Error Handling:** Provide clear user feedback via `showStatus()` for file read errors, sheet not found errors, CSV parsing errors, and potentially a summary of skipped fields due to validation issues.

## 4. Field & Layout Definitions (`sections/4011-SectionXX.js`) - *Requires Review*

-   [ ] Review all core sections (01-15).
-   [ ] Ensure all user-editable fields have `type: 'editable'`. (Most seem correct, but requires systematic check).
-   [ ] Ensure `sectionRows` contain accurate description labels (Column C) and unit strings (Column E/I/M) for all editable fields to support CSV export fully.

## 5. Key Decisions & Considerations (Confirmations)

-   **Import State:** Using `'imported'` state in `StateManager` is confirmed.
-   **Invalid Dropdown Values (Import):** Strategy is to **skip** invalid fields and log a console warning.
-   **CSV Parsing:** Using a simple built-in parser. Robustness for complex CSVs might need future enhancement.
-   **CSV Export Scope:** Currently exports only `type: 'editable'` fields.
-   **CSV Export Units/Description:** Currently limited; full implementation requires enhancing `exportToCSV` to map `fieldId` back to section layout data.

## 6. Implementation Progress & Next Steps

-   **DONE:** Strategy defined.
-   **DONE:** Syntax errors in `ExcelMapper.js` fixed.
-   **DONE:** Core import/export functions (`handleFileSelect`, `processImportedExcel`, `processImportedCSV`, `updateStateFromImportData`, `exportToCSV`) implemented in `FileHandler.js`.
-   **DONE:** Specific Excel mapping function (`mapExcelToReportModel`) created in `ExcelMapper.js`.
-   **NEXT:** Populate `excelReportInputMapping` in `ExcelMapper.js` with correct cell references.
-   **NEXT:** Update `index.html` to add the Import/Export menu items.
-   **NEXT:** Test Excel Import.
-   **NEXT:** Test CSV Export.
-   **NEXT:** Test CSV Import.
-   **FUTURE:** Enhance `exportToCSV` to include accurate units and descriptions.
-   **FUTURE:** Implement the necessary lookup logic in `exportToCSV` to retrieve `ExcelRow`, `RowID`, `Description`, and `Units` based on `fieldId` by referencing `sectionRows` data.
-   **FUTURE:** Review/Refactor `applyImportedData` and climate-related button handlers if needed.
-   **FUTURE:** Review field definitions and layouts across all sections for export completeness. 