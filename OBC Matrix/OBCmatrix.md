# OBC Matrix Documentation

## Completed Features

- Basic matrix structure with Part 3 and Part 9 toggle
- Building Information section with text inputs
- Form toggle between Part 3 and Part 9
- Responsive layout with Bootstrap
- OBJECTIVE logo implemented using OBJECTIVElateral.png
- Dropdown menus for selection fields
- Import/Export buttons (UI only)
- Reset button
- OBC references displayed in column L
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
   
4. **Implementation Steps**:
   - Modify `OBC-MatrixData.js` to use Excel cell-based IDs
   - Update the rendering logic in `OBC-init.js` to create elements with position-based IDs
   - Modify the CSV parser in `OBC-FileHandler.js` to map cell values directly to DOM IDs
   - Ensure all fields from the CSV are captured in the rendering (OBC refs, column values, etc.)

### Example Structure

```javascript
// Example of proper DOM element creation with Excel-matching IDs
function createInputField(row, col, value) {
  const cell = document.createElement('td');
  const letter = String.fromCharCode(97 + col).toUpperCase(); // Convert 0 to 'A', 1 to 'B', etc.
  
  const input = document.createElement('div');
  input.setAttribute('contenteditable', 'true');
  input.className = 'user-input';
  input.id = `${letter.toLowerCase()}_${row}`;
  input.dataset.fieldId = `${letter.toLowerCase()}_${row}`;
  input.textContent = value || '';
  
  cell.appendChild(input);
  return cell;
}
```

This approach ensures that Excel formulas, CSV imports, and data validation can work consistently across the application, matching the proven architecture of TEUI 4.011.

## TODO Items

1. **DOM-Excel Cell Mapping**
   - Implement proper mapping between Excel cells and DOM IDs (e.g., Excel D27 → DOM ID d_27)
   - Update the data model to use position-based IDs instead of descriptive IDs
   - Ensure proper CSV import/export with this mapping

2. **UI Improvements**
   - Make input fields 600px wide
   - Left-justify all input fields
   - Make stamp field a square (200x200 pixels)
   - Remove duplicate "Seal & Signature" from lower sections
   - Make input fields fill available space and align left

3. **Functionality**
   - Implement full CSV parsing for all data from Part 3 and Part 9 CSVs
   - Complete PDF export functionality
   - Implement actual file saving/loading

4. **Data and Validation**
   - Add data validation for numeric fields
   - Implement Excel formula equivalents for calculation fields
   - Integrate all OBC references from the CSVs
   - Complete the dropdown options for all selection fields

5. **Performance**
   - Optimize rendering for large matrices
   - Add loading indicators for data operations

## Reference Information

The structure in TEUI 4.011 uses a direct mapping between Excel cells and DOM IDs:
- Cell D27 in Excel → d_27 in DOM
- This allows direct mapping between Excel formulas and web app calculations
- Future implementation should adopt this approach for consistency across OBJECTIVE tools 