# File Handler Strategy & Implementation Status (Excel/CSV Import & CSV Export)

This document outlines the strategy and current implementation status for data import/export functionalities within the TEUI Calculator v4.011.

**Goal:** Allow users to import data from legacy Excel files (`.xlsx`/`.xls`) focusing on user inputs from the `REPORT!` sheet, and enable users to save/load scenarios locally via CSV export/import of user-editable fields.

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
    -   Requires `TEUI.StateManager` and `TEUI.FieldManager`.
    -   Generates CSV header: `"fieldId","domSelector","description","value","units"`.
    -   Filters `FieldManager.getAllFields()` for `type: 'editable'`.
    -   Iterates through editable fields:
        -   Gets current value from `StateManager`.
        -   Generates basic `domSelector`.
        -   Uses `fieldDef.label` or `fieldId` as description (placeholder).
        -   **Limitation:** Currently exports empty string for units.
        -   **Limitation:** Does not currently retrieve descriptions/units by looking up layout info in `sectionRows`. (Marked with `console.warn`).
        -   Formats row using basic CSV escaping.
    -   Creates Blob and triggers download.
    -   Provides feedback via `showStatus()`.

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
-   **FUTURE:** Review/Refactor `applyImportedData` and climate-related button handlers if needed.
-   **FUTURE:** Review field definitions and layouts across all sections for export completeness. 