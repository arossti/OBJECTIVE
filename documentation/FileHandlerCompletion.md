# File Handler Strategy (Excel/CSV Import & CSV Export)

This document outlines the strategy for implementing data import (from Excel `.xlsx` and `.csv`) and data export (to `.csv`) functionalities within the TEUI Calculator v4.011. The primary goal is to allow users to transfer data from previous Excel versions and save/load project scenarios locally via CSV.

## 1. UI Integration (`4011-Index.html`)

-   Modify the existing "Download Report" button (currently a simple button) into a Bootstrap dropdown button group.
-   Add the following items to the dropdown menu:
    -   "Import Data (Excel/CSV)": Triggers a file input element (`<input type="file" accept=".xlsx, .xls, .csv">`).
    -   "Export Data (CSV)": Triggers the `exportToCSV` JavaScript function.
    -   "Download Report (PDF)": (Existing/future functionality)

## 2. File Handling Logic (`4011-FileHandler.js`)

### 2.1. Import Process

-   **`handleFileSelect(event)`:**
    -   Activated by the file input triggered by the "Import Data" menu item.
    -   Accepts `.xlsx`, `.xls`, and `.csv` files.
    -   Reads the selected file using `FileReader`.
    -   **Detect File Type:** Determines if the file is Excel (`.xlsx`, `.xls`) or CSV (`.csv`) based on file extension or MIME type.
    -   **Dispatch:**
        -   If Excel: Parses the workbook using `XLSX.read(data, { type: 'array' })` and calls `processImportedExcel(workbook)`.
        -   If CSV: Reads the file content as text and calls `processImportedCSV(csvString)`.
    -   Provides user feedback via `showStatus()`.

-   **`processImportedExcel(workbook)`:** (Handles `.xlsx`/`.xls` imports)
    -   **Focus:** Imports data for *user-editable* fields mapped from the `REPORT!` sheet of the legacy Excel file.
    -   Verifies the `REPORT!` sheet exists in the `workbook`. Shows error if not.
    -   Calls `TEUI.ExcelMapper.mapExcelToReportModel(workbook)` (passing `workbook` and expecting it to use the specific `excelReportInputMapping`) to get an `importedData = { fieldId: excelValue }` object.
    -   Calls the shared `updateStateFromImportData(importedData)` function.
    -   Updates UI feedback.

-   **`processImportedCSV(csvString)`:** (Handles `.csv` imports)
    -   **Focus:** Imports data based on `fieldId` and `value` columns from a CSV previously exported by this application.
    -   Parses the `csvString` (using a simple robust parser or a lightweight library). Expects a header row and columns: `fieldId`, `domSelector`, `description`, `value`, `units`.
    -   Validates required columns (`fieldId`, `value`) exist. Shows error if not.
    -   Iterates through data rows:
        -   Extracts `fieldId` and `value`.
        -   Creates an `importedData = { fieldId: value, ... }` object (accumulating all rows).
    -   Calls the shared `updateStateFromImportData(importedData)` function.
    -   Updates UI feedback.

-   **`updateStateFromImportData(importedData)`:** (New Shared Function for Excel & CSV)
    -   Iterates through the `importedData` object (`{ fieldId: value }`).
    -   For each `fieldId` and `value`:
        -   **Get Field Type:** Retrieves the field definition using `TEUI.FieldManager.getField(fieldId)`. If no field definition exists, logs a warning and skips.
        -   **Parse & Validate:**
            -   Based on `field.type`:
                -   'editable' (numeric like costs, area): Use `window.TEUI.parseNumeric(value)` to get a number. Handle potential errors (NaN). Store the *raw numeric string*.
                -   'dropdown': Check if `value` is a valid option for this `fieldId`'s dropdown. If not, log a warning and skip (or potentially use default?). Store the validated `value`.
                -   'year_slider', 'percentage', 'coefficient': Use `window.TEUI.parseNumeric(value)`. Validate against min/max if defined. Store the *raw numeric string* (e.g., "2025", "0.9").
                -   'editable' (text like project name): Use the `value` string directly, perhaps after trimming. Store the string.
        -   **Update StateManager:** If parsing/validation succeeds, call `window.TEUI.StateManager.setValue(fieldId, parsedValueString, 'imported')`. Using the `'imported'` state allows differentiation from user edits or defaults.
    -   **Trigger Recalculation:** After processing all valid fields, call `window.TEUI.Calculator.calculateAll()` to update the entire model based on the imported data.
    -   Provides final success/error summary via `showStatus()`.

### 2.2. Export Process

-   **`exportToCSV()`:**
    -   **Focus:** Exports the *current values* of all *user-editable* fields into a CSV format.
    -   Initializes CSV content string with header: `"fieldId","domSelector","description","value","units"\n`.
    -   Gets all field definitions: `const allFields = TEUI.FieldManager.getAllFields();`.
    -   Filters for user-editable fields: `const editableFields = Object.entries(allFields).filter(([id, def]) => def.type === 'editable');`.
    -   Iterates through `editableFields`:
        -   For each `[fieldId, fieldDef]`:
            -   Get current value: `const currentValue = window.TEUI.StateManager.getValue(fieldId);`.
            -   Get description: Look up the corresponding row/cell in the owning section's `sectionRows` definition to find the 'label' in the 'C' column. (Requires mapping `fieldId` back to its section and layout position).
            *   Get units: Similarly, find the content of the cell immediately following the value cell in the layout (typically E, I, M based on the column of `fieldId`).
            *   Generate DOM selector: `const domSelector = \`td[data-field-id="${fieldId}"]\`;` (or similar representative selector).
            *   Format CSV row: Ensure values (especially description and value) containing commas or quotes are properly escaped/quoted.
            *   Append the formatted row string to the main CSV content string.
        -   Create Blob: `const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });`.
        -   Trigger Download: Create a temporary download link (`<a>`), set its `href` using `URL.createObjectURL(blob)`, set the `download` attribute (e.g., `TEUI_Data_Export.csv`), click the link, and remove it.
    -   Updates UI feedback via `showStatus()`.

## 3. Mapping Logic (`4011-ExcelMapper.js`)

-   **`excelReportInputMapping`:** (New Object)
    -   Define this constant mapping object.
    -   Keys: Excel cell references from the `REPORT!` sheet corresponding to user inputs (e.g., `"B10"`, `"D13"`).
    -   Values: Corresponding web application `fieldId`s (e.g., `"d_12"`, `"h_15"`).
    -   Populate based on TEUI v3.037 Excel structure for user-editable fields ONLY.
    -   **Exclude:** Fields managed by other systems (e.g., climate data `l_22`, `l_24` from weather import).
-   **`mapExcelToReportModel(workbook)`:** (New Function or Modified `mapExcelToModel`)
    -   Takes the `workbook` as input.
    -   Accesses the `REPORT!` sheet specifically: `const worksheet = workbook.Sheets['REPORT!'];`. Handles error if sheet not found.
    -   Iterates through the `excelReportInputMapping`:
        -   For each `[cellRef, fieldId]` pair:
            -   Reads the value from `worksheet[cellRef]` using `extractCellValue`.
            -   Adds the `{ [fieldId]: value }` pair to the result object.
    -   Returns the resulting `importedData` object.
-   **`extractCellValue(cell)`:** (Existing helper) Remains unchanged.
-   **`reverseMapping`, `createWorkbook`:** Not strictly needed for the initial import/export scope focusing on user inputs via CSV, but can be kept for potential future full Excel export functionality.

## 4. Field & Layout Definitions (`sections/4011-SectionXX.js`)

-   **Consistency Check:** Review all section modules (`4011-Section01.js` to `4011-Section15.js`).
    -   Ensure all fields intended for user input have `type: 'editable'`.
    -   Ensure layout definitions (`sectionRows`) accurately contain:
        -   The descriptive label in the 'C' column cell for each row containing user inputs.
        -   The correct unit string in the cell immediately following the value cell (e.g., Column E for a value in D, Column I for H, Column M for L).

## 5. Key Considerations & Decisions

-   **User-Editable Field Identification (Export):** Using `FieldManager.getAllFields()` and filtering by `type: 'editable'` is the proposed method.
-   **DOM Selector (Export):** The purpose is primarily informational/mapping reference. Using `td[data-field-id="${fieldId}"]` is sufficient.
-   **Units/Description Source (Export):** Relying on data structured within `sectionRows` requires diligent setup across all section files but keeps data definitions co-located.
-   **Invalid Dropdown Values (Import):** Recommended approach: Log a warning to the console detailing the invalid field and value, and **skip** importing that specific field, leaving its current value unchanged. Do not default, as this might silently overwrite user intent.
-   **CSV Parsing:** Implement a simple, robust parser within `FileHandler.js` that handles basic CSV rules (comma delimiters, quote escaping). Avoid adding external libraries if possible.
-   **Error Handling:** Provide clear user feedback via `showStatus()` for file read errors, sheet not found errors, CSV parsing errors, and potentially a summary of skipped fields due to validation issues. 