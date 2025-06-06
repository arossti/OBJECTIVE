# OBC Matrix - Implementation Plan

## 1. Core Objective

To create a simple, static web form that is a high-fidelity replica of the OBC Data Matrix Excel spreadsheet. The final application must:

-   Visually match the layout, structure, and style of the TEUI 4.011 core application.
-   Be rendered from a static, pre-defined data structure, not dynamically from a CSV.
-   Support data import/export to populate the form fields from user-provided Excel or CSV files.
-   Use a DOM namespace that mirrors Excel cell coordinates (e.g., cell D12 becomes an element with `id="d_12"`).

## 2. Architecture: "Copy and Simplify"

We will leverage the mature assets from the "gold standard" TEUI 4.011 application (`OBJECTIVE-2025.05.30.8h23/`) to ensure consistency and speed up development.

-   **HTML (`index.html`):** A simple shell providing the header, footer, and a main container div (`#obc-container`) where the matrix will be rendered.
-   **Styling (`OBC-styles.css`):** This will be a direct copy of `4011-styles.css` from the core app to ensure identical visual appearance.
-   **Data Model (`OBC-MatrixData.js`):** This is the heart of the application. It will contain a hand-crafted JavaScript object that defines the entire structure of the Part 3 and Part 9 forms, row by row, and cell by cell, including `colspan` and `rowspan` attributes to match the Excel layout.
-   **Rendering (`OBC-init.js`):** This script will read from `OBC-MatrixData.js` on page load and use a `renderMatrix` function to dynamically build the `<table>` element and inject it into the main container. It is responsible for translating the data model into HTML.
-   **File Operations:**
    -   `OBC-FileHandler.js`: Manages the user interaction for importing and exporting data.
    -   `OBC-ExcelMapper.js`: A copy of the core app's mapper, responsible for translating data between an imported Excel file and the application's field IDs.

This architecture intentionally avoids the complexity of the core TEUI app (e.g., no `StateManager`, no complex calculation engine) and focuses on being a simple, elegant, and robust web form.

## 3. Implementation Steps

The following steps will be taken to refactor the application to meet the objective.

### Step 1: Asset Alignment
1.  **Copy Stylesheet:** Copy `4011-styles.css` from `OBJECTIVE-2025.05.30.8h23/` to `OBC Matrix/` and rename it to `OBC-styles.css`.
2.  **Update HTML:** Modify `OBC Matrix/index.html` to reference the new `OBC-styles.css`. Ensure the basic structure (header, buttons, main container) is clean.

### Step 2: Data Structure Overhaul
1.  **Define High-Fidelity Model:** Manually transcribe the complete layout for Part 3 from the Excel screenshots into the `OBC.MatrixData.part3.rows` array in `OBC-MatrixData.js`.
2.  **Data Specificity:** Each entry in the `rows` array will be an object representing a `<tr>`. Each row object will contain a `cells` array, where each cell object specifies its content, type (`editable`, `dropdown`, `static`), column (`A`-`N`), `fieldId` (e.g., `d_12`), and any `colspan` or `rowspan` attributes.

### Step 3: Rendering Engine Rewrite
1.  **Rebuild `renderMatrix`:** Completely rewrite the `renderMatrix` function in `OBC-init.js`.
2.  **Logic:** The function will:
    -   Accept a `part` ('part3' or 'part9') as an argument.
    -   Select the corresponding data from `OBC.MatrixData`.
    -   Create a `<table>` and `<tbody>` element.
    -   Iterate through the `rows` array from the data model.
    -   For each `row` object, create a `<tr>`.
    -   For each `cell` object in the row's `cells` array, create the corresponding `<td>`, applying all properties (`colspan`, `rowspan`, content, and classes for styling).
    -   Correctly handle empty columns to maintain the grid structure.
    -   Inject the final table into the `#obc-container`.
3.  **Event Handlers:** Re-attach event listeners for the Part 3/9 toggle and import/export buttons after rendering.

### Step 4: Final Verification
1.  **Visual Match:** Confirm that the rendered form is a pixel-perfect match of the Excel screenshot.
2.  **Functionality:** Verify that the Part 3/9 toggle works correctly and that the import/export buttons trigger the `FileHandler`.
3.  **DOM Namespace:** Inspect the rendered HTML to ensure all input elements have the correct positional `id` (e.g., `d_12`).

## Completed Features

- Basic matrix structure with Part 3 and Part 9 toggle
- Building Information section with text inputs
- Form toggle between Part 3 and Part 9
- Responsive layout with Bootstrap
- OBJECTIVE logo implemented using OBJECTIVElateral.png
- Dropdown menus for selection fields
- Import/Export buttons (UI only)
- Reset button
- OBC references displayed in section headers
- Column I and J values displayed where available

## DOM-Excel Cell Mapping (Important Implementation Note)

The current implementation uses descriptive IDs like `p3_occupancy_classification`, but to properly match TEUI 4.011 architecture and enable reliable CSV import/export, the application should be refactored to use position-based IDs that directly correspond to Excel cells.

### Proper DOM ID Structure

Following the TEUI 4.011 model (per README.md), the DOM IDs should be structured as follows:

1. **Cell-Based Naming**: Each DOM element should have an ID based on its Excel cell coordinates:
   - Excel cell D27 → DOM ID `d_27`
   - Excel cell G15 → DOM ID `g_15`
   
2. **Prefixed Element Types**: Different UI elements get prefixes:
   - Dropdown in cell D19: `dd_d_19`
   - Calculated field in cell G20: `cf_g_20`
   - Editable text field in cell D20: `d_20` (no prefix for standard editable cells)

3. **Matrix Mapping**: When parsing CSV files, the application should:
   - Read values from the specific cells in the CSV
   - Map directly to the corresponding DOM elements by position
   - Preserve OBC references (Column L), column values (I/J), and other data
   
### Implementation Steps

To implement proper Excel cell reference mapping:

1. **Update Data Model**:
   ```javascript
   // Current approach (descriptive IDs)
   const field = {
     id: "p3_occupancy_classification",
     label: "Major Occupancy Classification",
     // ...
   };
   
   // New approach (position-based IDs)
   const field = {
     id: "d_14", // Based on Excel cell coordinate
     excelRef: "D14", // Store the original Excel reference
     label: "Major Occupancy Classification",
     // ...
   };
   ```

2. **CSV Parsing Logic**:
   ```javascript
   function parseCSV(csvData) {
     // Parse CSV into rows and columns
     const rows = csvData.split('\n');
     const matrix = rows.map(row => row.split(','));
     
     // Process cell by cell
     const data = { sections: [] };
     let currentSection = null;
     
     // Iterate through rows
     for (let rowIdx = 0; rowIdx < matrix.length; rowIdx++) {
       const row = matrix[rowIdx];
       
       // Check if this row defines a section
       if (row[0] && row[0].trim().match(/^\d+\.\d+/) && row[1] && row[2]) {
         // This is a section header row (e.g., "3.02, MAJOR OCCUPANCY CLASSIFICATION")
         currentSection = {
           title: row[1],
           obcReference: row[11] || "", // OBC reference from column L
           fields: []
         };
         data.sections.push(currentSection);
       }
       
       // Process input fields (typically in column D)
       if (currentSection && row[3] && row[3].trim()) {
         const field = {
           id: `d_${rowIdx + 1}`, // Create position-based ID
           excelRef: `D${rowIdx + 1}`, // Store Excel reference
           label: row[2] || "",
           value: row[3] || "",
           columnI: row[8] || "",
           columnJ: row[9] || ""
         };
         currentSection.fields.push(field);
       }
     }
     
     return data;
   }
   ```

3. **Rendering Logic**:
   ```javascript
   function renderField(field, row) {
     // Extract coordinates from the ID
     const cellCoords = field.id.split('_');
     const col = cellCoords[0]; // e.g., 'd'
     const rowNum = cellCoords[1]; // e.g., '14'
     
     const input = document.createElement('div');
     input.setAttribute('contenteditable', 'true');
     input.className = 'user-input';
     input.id = field.id; // position-based ID
     input.dataset.excelRef = field.excelRef; // Store Excel reference
     input.textContent = field.value || '';
     
     return input;
   }
   ```

4. **Import/Export Functions**:
   ```javascript
   function importFromCSV(csvData) {
     const parsedData = parseCSV(csvData);
     
     // For each field in the parsed data
     parsedData.sections.forEach(section => {
       section.fields.forEach(field => {
         // Find the corresponding DOM element by position-based ID
         const element = document.getElementById(field.id);
         if (element) {
           // Update the element with the CSV value
           element.textContent = field.value;
         }
       });
     });
   }
   
   function exportToCSV() {
     // Get all input elements
     const inputs = document.querySelectorAll('[id^="d_"], [id^="dd_"], [id^="cf_"]');
     
     // Create a sparse matrix to represent the Excel structure
     const matrix = [];
     
     // Fill in the matrix with values
     inputs.forEach(input => {
       const parts = input.id.replace(/^[a-z]+_/, '').split('_'); // Remove prefix if any
       const col = parts[0].charCodeAt(0) - 97; // Convert 'a' to 0, 'b' to 1, etc.
       const row = parseInt(parts[1]) - 1; // Convert to 0-based index
       
       // Ensure the row exists in the matrix
       if (!matrix[row]) matrix[row] = [];
       
       // Set the value in the matrix
       matrix[row][col] = input.textContent || input.value || '';
     });
     
     // Convert matrix to CSV
     return matrix.map(row => row.join(',')).join('\n');
   }
   ```

### Handling Excel Formulas and Calculated Fields

When implementing the Excel-to-DOM mapping, it's crucial to handle Excel formulas properly:

1. **Identify Formula Cells**: In the CSV, cells with Excel formulas start with `=`. These should be mapped to calculated fields in the DOM.

2. **Cell Dependencies**: When a formula references other cells, those dependencies need to be tracked.

3. **Real-time Calculation**: When a dependency cell changes, all formulas that depend on it should be recalculated.

Example implementation for calculated fields:

```javascript
// Track formula cells and their dependencies
const formulaCells = {};
const cellDependencies = {};

function parseFormula(formula, rowIdx) {
  // Extract cell references from the formula (e.g., "=SUM(D14:D16)" -> ["D14", "D15", "D16"])
  const cellRefs = formula.match(/[A-Z]+\d+/g) || [];
  
  // Register dependencies
  cellRefs.forEach(ref => {
    const domId = ref.toLowerCase().replace(/([a-z])(\d+)/, '$1_$2');
    if (!cellDependencies[domId]) cellDependencies[domId] = [];
    cellDependencies[domId].push(`cf_${rowIdx}`);
  });
  
  return {
    formula,
    cellRefs
  };
}

// When user inputs change, recalculate dependent fields
function updateCalculatedFields(changedCellId) {
  if (cellDependencies[changedCellId]) {
    cellDependencies[changedCellId].forEach(dependentCellId => {
      // Recalculate the formula result
      // This would require a proper formula parser in a real implementation
      const result = evaluateFormula(formulaCells[dependentCellId].formula);
      
      // Update the DOM
      const element = document.getElementById(dependentCellId);
      if (element) element.textContent = result;
    });
  }
}
```

## TODO Items

1. **DOM-Excel Cell Mapping**
   - Implement proper mapping between Excel cells and DOM IDs (e.g., Excel D27 → DOM ID d_27)
   - Update the data model to use position-based IDs instead of descriptive IDs
   - Ensure proper CSV import/export with this mapping
   - Implement real-time calculation for Excel formula equivalents

2. **UI Improvements**
   - Fix dropdown text visibility ✅
   - Add 20px padding to the right side of the container ✅
   - Move OBC references to section headers ✅

3. **CSV Data Integration**
   - Implement full parsing of OBC_2024_PART3.csv and OBC_2024_PART9.csv
   - Map Excel row/column positions to DOM elements
   - Support all formula cells and calculated fields
   - Preserve all metadata from CSV (OBC references, existing/new values, etc.)

4. **Data and Validation**
   - Add data validation for numeric fields
   - Implement proper value formatting based on field types
   - Add support for conditional visibility based on other field values

5. **Performance and UX**
   - Optimize rendering for large matrices
   - Add loading indicators for data operations
   - Improve error handling and validation feedback

## Reference Information

The structure in TEUI 4.011 uses a direct mapping between Excel cells and DOM IDs:
- Cell D27 in Excel → d_27 in DOM
- This allows direct mapping between Excel formulas and web app calculations
- Future implementation should adopt this approach for consistency across OBJECTIVE tools 