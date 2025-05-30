// File handler module for TEUI Calculator
// Handles file operations like importing and exporting Excel/CSV files

(function(window) {
    'use strict';

    // Define FileHandler class
    class FileHandler {
        constructor() {
            // Ensure references to other modules are robust
            this.stateManager = window.TEUI?.StateManager;
            this.fieldManager = window.TEUI?.FieldManager;
            this.calculator = window.TEUI?.Calculator;
            this.excelMapper = window.TEUI?.ExcelMapper;
            this.excelLocationHandler = window.TEUI?.ExcelLocationHandler; // Keep reference if needed
            this.workbook = null; // Store the last loaded workbook if needed

            this.setupEventListeners();
        }
        
        setupEventListeners() {
            // --- Import/Export Button Wiring --- 
            const importBtn = document.getElementById('import-data-btn'); // Assuming new ID for import menu item
            const exportBtn = document.getElementById('export-data-btn'); // Assuming new ID for export menu item
            const fileInput = document.getElementById('excel-file-input'); // Keep existing hidden input

            if (importBtn && fileInput) {
                importBtn.addEventListener('click', () => {
                    fileInput.value = null; // Reset file input
                    fileInput.click();
                });
                fileInput.addEventListener('change', (event) => {
                    this.handleFileSelect(event);
                });
            }

            if (exportBtn) {
                exportBtn.addEventListener('click', () => {
                    this.exportToCSV(); 
                });
            }
            
            // Remove or repurpose old button listeners if they are redundant
            const oldImportButton = document.getElementById('import-excel');
            if (oldImportButton) oldImportButton.style.display = 'none'; // Hide old button
            const oldExportButton = document.getElementById('export-excel');
            if (oldExportButton) oldExportButton.style.display = 'none'; // Hide old button

            // Keep Climate section Excel button handlers if still needed by ExcelLocationHandler
            // Or integrate them fully into this FileHandler if appropriate.
            const selectExcelBtn = document.getElementById('selectExcelBtn');
            const applyExcelBtn = document.getElementById('applyExcelBtn');
            const debugExcelBtn = document.getElementById('debugExcelBtn');
            // Get the new dedicated file input for location/weather Excel files
            const locationFileInput = document.getElementById('location-excel-input');

            if (selectExcelBtn && locationFileInput) {
                selectExcelBtn.addEventListener('click', () => {
                    locationFileInput.value = null; // Reset file input
                    locationFileInput.click(); 
                });
                locationFileInput.addEventListener('change', async (event) => {
                    const file = event.target.files[0];
                    if (file) {
                        if (window.TEUI && window.TEUI.ExcelLocationHandler && typeof window.TEUI.ExcelLocationHandler.loadExcelFile === 'function') {
                            try {
                                await window.TEUI.ExcelLocationHandler.loadExcelFile(file);
                                // ExcelLocationHandler.loadExcelFile now handles its own status updates and dispatches 'location-data-ready'
                            } catch (error) {
                                console.error('[FileHandler] Error calling ExcelLocationHandler.loadExcelFile:', error);
                                this.showStatus(`Error loading location file: ${error.message}`, 'error');
                            }
                        } else {
                            console.error('[FileHandler] ExcelLocationHandler.loadExcelFile is not available.');
                            this.showStatus('Location handler module is not available.', 'error');
                        }
                    }
                    event.target.value = null; // Reset this specific file input
                });
            } else {
                if (!selectExcelBtn) console.warn('[FileHandler] \'selectExcelBtn\' not found.');
                if (!locationFileInput) console.warn('[FileHandler] \'location-excel-input\' not found.');
            }
            
             if (applyExcelBtn) {
                 // This button might become redundant if import happens automatically
                 // Keeping for now, but consider removing if processImportedExcel handles updates.
                 applyExcelBtn.addEventListener('click', () => {
                     this.applyImportedData(); // Renamed for clarity
                 });
             }
             if (debugExcelBtn) { /* Keep existing debug logic */ 
                 debugExcelBtn.addEventListener('click', () => {
                     console.log('=== DEBUG INFORMATION ===');
                     if (window.TEUI && window.TEUI.ExcelLocationHandler) {
                         const locationData = window.TEUI.ExcelLocationHandler.getLocationData();
                         console.log('ExcelLocationHandler exists');
                         console.log('Location data:', locationData ? 'Available' : 'Not available');
                         if (locationData) {
                             console.log(`Provinces: ${Object.keys(locationData).join(', ')}`);
                             const sampleProvince = Object.keys(locationData)[0];
                             if (sampleProvince) {
                                 console.log(`Sample province ${sampleProvince} has ${locationData[sampleProvince].cities.length} cities`);
                             }
                         }
                     } else {
                         console.log('ExcelLocationHandler not available');
                     }
                     // ... rest of debug code ...
                     this.showStatus('Debug information logged to console', 'info');
                 });
            }
        }
        
        // --- IMPORT LOGIC --- 

        handleFileSelect(event) {
            const file = event.target.files[0];
            if (!file) {
                console.warn('No file selected');
                return;
            }
            
            this.showStatus(`Reading file: ${file.name}...`, 'info');
            const reader = new FileReader();

            reader.onload = (e) => {
                try {
                    const fileExtension = file.name.split('.').pop().toLowerCase();
                    
                    if (fileExtension === 'csv') {
                        console.log('Detected CSV file.');
                        const csvString = new TextDecoder("utf-8").decode(new Uint8Array(e.target.result));
                        this.processImportedCSV(csvString);
                    } else if (fileExtension === 'xlsx' || fileExtension === 'xls') {
                        console.log('Detected Excel file.');
                        const data = new Uint8Array(e.target.result);
                        this.workbook = XLSX.read(data, { type: 'array' });
                        this.processImportedExcel(this.workbook);
                    } else {
                        throw new Error(`Unsupported file type: .${fileExtension}`);
                    }
                } catch (error) {
                    console.error('Error processing file:', error);
                    this.showStatus(`Error processing file: ${error.message}`, 'error');
                }
            };

            reader.onerror = () => {
                console.error('Error reading file');
                this.showStatus('Error reading file', 'error');
            };

            if (file.name.toLowerCase().endsWith('.csv')) {
                 reader.readAsArrayBuffer(file); // Read as buffer for TextDecoder
            } else {
                 reader.readAsArrayBuffer(file); // readAsArrayBuffer works for XLSX too
            }

            event.target.value = null; // Reset file input
        }
        
        processImportedExcel(workbook) {
             if (!this.excelMapper) {
                 this.showStatus('Excel Mapper module is not available.', 'error');
                 return;
             }
             this.showStatus('Mapping data from Excel REPORT! sheet...', 'info');
             const importedData = this.excelMapper.mapExcelToReportModel(workbook);

             if (importedData === null) { // mapExcelToReportModel returns null on sheet error
                  this.showStatus('Error: REPORT! sheet not found in Excel file.', 'error');
                 return;
             }
             
             if (Object.keys(importedData).length === 0) {
                 this.showStatus('No mappable data found on REPORT! sheet.', 'warning');
                 return;
             }
             
             this.updateStateFromImportData(importedData);
        }

        processImportedCSV(csvString) {
            this.showStatus('Parsing CSV data...', 'info');
            const importedData = {};
            let skippedCount = 0;

            try {
                const rows = csvString.split(/\r?\n/); // Split lines
                if (rows.length < 2) throw new Error("CSV has no data rows.");

                // Robust header processing
                const headers = rows[0].split(',').map(h => h.trim().replace(/^"|"$/g, ''));
                const fieldIdIndex = headers.indexOf('FieldID'); // Case-sensitive match to our export
                const valueIndex = headers.indexOf('Value');     // Case-sensitive match to our export

                if (fieldIdIndex === -1) {
                    throw new Error("CSV header missing required column: 'FieldID'");
                }
                if (valueIndex === -1) {
                    throw new Error("CSV header missing required column: 'Value'");
                }

                for (let i = 1; i < rows.length; i++) {
                    if (!rows[i].trim()) continue; // Skip empty lines
                    // Simple split, assumes no commas within quoted values for now
                    // TODO: Implement a more robust CSV parser if needed
                    const cols = rows[i].split(',').map(c => c.trim().replace(/^"|"$/g, '')); 

                    // Ensure row has enough columns before trying to access indices
                    if (cols.length > Math.max(fieldIdIndex, valueIndex)) {
                        const fieldId = cols[fieldIdIndex];
                        const value = cols[valueIndex];

                        // --- REINSTATE: Skip Section 03 Fields ---
                        const fieldDefForSkipCheck = this.fieldManager?.getField(fieldId); // Use optional chaining
                        if (fieldDefForSkipCheck && fieldDefForSkipCheck.sectionId === 'sect03') {
                            // console.log(`[CSV Import] Skipping Section 03 field: ${fieldId} as per current strategy.`);
                            skippedCount++;
                            continue; // Move to the next row
                        }
                        // --- END REINSTATE ---

                        // Only add if fieldId is not empty (skip placeholder rows)
                        if (fieldId && value !== undefined) {
                            importedData[fieldId] = value;
                        } else {
                            // Don't count placeholders as skipped, just ignore them for import
                            // skippedCount++; 
                        }
                    } else {
                        // This row doesn't have enough columns, likely malformed or placeholder
                        console.warn(`Skipping malformed CSV row ${i + 1}: Not enough columns.`);
                        skippedCount++;
                    }
                }

                if (Object.keys(importedData).length === 0) {
                    this.showStatus('No valid data rows found in CSV.', 'warning');
                    return;
                }
                
                 this.updateStateFromImportData(importedData, skippedCount);

            } catch (error) {
                console.error("Error parsing CSV:", error);
                this.showStatus(`Error parsing CSV: ${error.message}`, 'error');
            }
        }
        
        updateStateFromImportData(importedData, csvSkippedCount = 0) {
            if (!this.stateManager || !this.fieldManager) {
                this.showStatus('StateManager or FieldManager not available.', 'error');
                return;
            }
            this.showStatus('Updating application state...', 'info');
            let updatedCount = 0;
            let skippedValidationCount = 0;

            Object.entries(importedData).forEach(([fieldId, value]) => {
                // DEBUG: Log entry for each field being processed - REMOVE/COMMENT OUT
                // if (fieldId === 'd_74' || fieldId === 'g_89' || fieldId === 'd_113') {
                //     console.log(`[FileHandler DEBUG] Processing imported: fieldId=${fieldId}, value=${value}`);
                // }

                const fieldDef = this.fieldManager.getField(fieldId);
                if (!fieldDef) {
                    console.warn(`Skipping import for unknown fieldId: ${fieldId}`);
                    skippedValidationCount++;
                    return; // Use return to continue to next iteration of forEach
                }

                // DEBUG: Log fieldDef type - REMOVE/COMMENT OUT
                // if (fieldId === 'd_74' || fieldId === 'g_89' || fieldId === 'd_113') {
                //     console.log(`[FileHandler DEBUG] fieldId=${fieldId}, fieldDef.type=${fieldDef.type}`);
                // }

                let parsedValue = value; 
                let isValid = true;

                try {
                    if (fieldDef.type === 'editable' || fieldDef.type === 'year_slider' || fieldDef.type === 'percentage' || fieldDef.type === 'coefficient') {
                        // Try parsing numbers, allow text fallbacks for generic editable
                        const numericValue = window.TEUI.parseNumeric(value, NaN);
                        if (!isNaN(numericValue)) {
                            parsedValue = numericValue.toString(); 
                        } else if (fieldDef.type !== 'editable') { 
                            isValid = false;
                            // if (fieldId === 'd_74' || fieldId === 'g_89' || fieldId === 'd_113') {
                            //     console.log(`[FileHandler DEBUG] fieldId=${fieldId} marked isValid=false because non-editable and not a number.`);
                            // }
                        } 
                    } else if (fieldDef.type === 'dropdown') {
                         // Basic validation: Check if value exists in options (case-sensitive)
                        const options = this.fieldManager.getDropdownOptions(fieldDef.dropdownId, { parentValue: null }); // Get base options
                        const validValues = options.map(opt => typeof opt === 'object' ? opt.value : opt);
                        if (!validValues.includes(value)) {
                            isValid = false;
                            // if (fieldId === 'd_74' || fieldId === 'g_89' || fieldId === 'd_113') {
                            //     console.log(`[FileHandler DEBUG] fieldId=${fieldId} marked isValid=false because dropdown value not in options. Options:`, validValues, `Value: ${value}`);
                            // }
                        }
                        // Keep original string value if valid
                    }
                    
                    if (isValid) {
                        this.stateManager.setValue(fieldId, parsedValue, 'imported');
                        updatedCount++;
                        // if (fieldId === 'd_74' || fieldId === 'g_89' || fieldId === 'd_113') { // REMOVE/COMMENT OUT
                        //     console.log(`[FileHandler DEBUG] fieldId=${fieldId} passed isValid. StateManager updated. Preparing to call FieldManager.updateFieldDisplay.`);
                        //     console.log(`[FileHandler DEBUG] Args for updateFieldDisplay: fieldId=${fieldId}, parsedValue=${parsedValue}, fieldDef type=${fieldDef?.type}, fieldDef label=${fieldDef?.label}`);
                        // }
                        // NEW: Call FieldManager to update the visual display of the field
                        if (window.TEUI && window.TEUI.FieldManager && typeof window.TEUI.FieldManager.updateFieldDisplay === 'function') {
                            try {
                                window.TEUI.FieldManager.updateFieldDisplay(fieldId, parsedValue, fieldDef); 
                            } catch (e) {
                                console.error(`[FileHandler] Error calling FieldManager.updateFieldDisplay for ${fieldId}:`, e);
                            }
                        } else {
                            console.warn(`[FileHandler] TEUI.FieldManager.updateFieldDisplay is not available. UI for ${fieldId} may not update visually.`);
                        }
                    } else {
                        console.warn(`Skipping import for field ${fieldId}: Invalid value "${value}" for type ${fieldDef.type}.`);
                        skippedValidationCount++;
                    }
                } catch (error) {
                     console.error(`Error processing field ${fieldId} with value "${value}":`, error);
                     skippedValidationCount++;
                     isValid = false; // Ensure isValid is false on error
                }

                // DEBUG: Log isValid status before the conditional update - REMOVE/COMMENT OUT
                // if (fieldId === 'd_74' || fieldId === 'g_89' || fieldId === 'd_113') {
                //     console.log(`[FileHandler DEBUG] fieldId=${fieldId}, isValid=${isValid}, parsedValue=${parsedValue}`);
                // }
            });

            // Trigger recalculation after all updates
            if (this.calculator && typeof this.calculator.calculateAll === 'function') {
                this.calculator.calculateAll();
                this.showStatus(`Import complete. ${updatedCount} fields updated. ${csvSkippedCount + skippedValidationCount} rows/fields skipped.`, 'success');
            } else {
                 this.showStatus('Import finished, but could not trigger recalculation.', 'warning');
            }
        }
        
        // --- EXPORT LOGIC --- 

        exportToCSV() {
             if (!this.stateManager || !this.fieldManager) {
                this.showStatus('StateManager or FieldManager not available for export.', 'error');
                return;
             }
             this.showStatus('Generating CSV export...', 'info');

             try {
                // 1. Build a lookup map for layout details
                const layoutLookup = {};
                const sections = this.fieldManager.getSections(); // Get { uiSectionId: moduleSectionId }
                Object.keys(sections).forEach(uiSectionId => {
                    const layout = this.fieldManager.getLayoutForSection(uiSectionId);
                    if (layout && layout.rows) {
                        layout.rows.forEach(rowDef => {
                            const excelRow = rowDef.id; // Assuming rowDef.id is the Excel row number
                            let rowId = ''; // Column B
                            let description = ''; // Column C

                            rowDef.cells.forEach((cellDef, index) => {
                                if (index === 1) { // Column B - RowID
                                    rowId = cellDef.content || excelRow; // Use content if exists, else excelRow
                                } else if (index === 2) { // Column C - Description
                                    description = cellDef.label || cellDef.content || '';
                                } else if (cellDef.fieldId) {
                                    // Store layout info against fieldId
                                    layoutLookup[cellDef.fieldId] = {
                                        excelRow: excelRow,
                                        rowId: rowId, // Use the ID found in col B
                                        description: description, // Use the label found in col C
                                        units: cellDef.units || '' // Get units if defined in cellDef
                                    };
                                }
                            });
                        });
                    }
                });
                
                // 2. Generate CSV rows for editable fields
                const header = ["ExcelRow", "RowID", "Description", "FieldID", "Value", "Units"];
                const rows = [header];
                const allFields = this.fieldManager.getAllFields();
                 // Filter for fields explicitly marked as editable OR belonging to Section 03 (Climate)
                const fieldsToExportEntries = Object.entries(allFields).filter(([id, def]) => 
                    (
                        def.type === 'editable' || 
                        def.type === 'dropdown' || 
                        def.type === 'year_slider' || 
                        def.type === 'percentage' || 
                        def.type === 'coefficient' ||
                        def.type === 'number'
                    ) || (def.sectionId === 'sect03') // Include all fields from sect03
                );

                // Basic CSV escaping (handles commas, quotes, newlines)
                const escapeCSV = (val) => {
                    const strVal = String(val ?? ''); // Ensure string conversion, handle null/undefined
                    if (strVal.includes(',') || strVal.includes('"') || strVal.includes('\n')) {
                        // Escape quotes by doubling them and wrap in quotes
                        return `"${strVal.replace(/"/g, '""')}"`;
                    }
                    return strVal;
                };

                fieldsToExportEntries.forEach(([fieldId, fieldDef]) => {
                    const layoutInfo = layoutLookup[fieldId] || {}; // Get layout details
                    const currentValue = this.stateManager.getValue(fieldId) ?? fieldDef.defaultValue ?? '';

                    rows.push([
                        escapeCSV(layoutInfo.excelRow || ''), // Excel Row from layout
                        escapeCSV(layoutInfo.rowId || ''),     // Row ID from layout (Col B)
                        escapeCSV(layoutInfo.description || fieldDef.label || fieldId), // Description from layout (Col C) or fallback
                        escapeCSV(fieldId),                  // Field ID (Col D)
                        escapeCSV(currentValue),             // Current Value (Col E)
                        escapeCSV(layoutInfo.units || '')      // Units from layout
                    ]);
                });
                
                // Sort rows numerically by the ExcelRow (first column)
                // Skip header row (index 0) for sorting
                rows.slice(1).sort((a, b) => {
                    const rowA = parseInt(a[0].replace(/"/g, ''), 10) || 0;
                    const rowB = parseInt(b[0].replace(/"/g, ''), 10) || 0;
                    return rowA - rowB;
                });

                // Reconstruct CSV content with sorted rows (header + sorted data)
                const csvContent = rows.map(row => row.join(',')).join('\n');
                
                // Get project name for filename
                const projectName = this.stateManager.getValue('h_14') || 'Project';
                // Sanitize project name for filename
                const safeProjectName = projectName.replace(/[^a-z0-9_\-\.]/gi, '_');
                const filename = `TEUIv4011-${safeProjectName}.csv`; // Constructs filename
 
                console.log(`[CSV Export] Generated filename: ${filename}`); // DEBUG LOG
                
                // 3. Trigger Download
                const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
                const url = URL.createObjectURL(blob);
                const link = document.createElement("a");
                link.setAttribute("href", url);
                link.setAttribute("download", filename);
                link.style.visibility = 'hidden';
                document.body.appendChild(link);
                link.click();
                document.body.removeChild(link);

                this.showStatus('CSV export complete.', 'success');
                
            } catch (error) {
                 console.error("Error generating CSV export:", error);
                 this.showStatus(`Error during CSV export: ${error.message}`, 'error');
            }
        }

        // --- OLD / OTHER METHODS --- 

        processBuildingCodeData(workbook) {
            // Placeholder 
            // console.log('Building code data processing not yet implemented');
            return null;
        }

        processScheduleData(workbook) {
            // Placeholder
            // console.log('Schedule data processing not yet implemented');
            return null;
        }

        exportToExcel() { // Keep old method for potential full state export?
            try {
                this.showStatus('Preparing full Excel export (legacy method)...', 'info');
                const currentData = this.stateManager ? this.stateManager.exportValues() : {}; // Export all values
                const workbook = this.excelMapper ? this.excelMapper.createWorkbook(currentData) : this.fallbackCreateWorkbook(currentData);
                const excelOutput = XLSX.write(workbook, { bookType: 'xlsx', type: 'binary' });
                const blob = this.binaryStringToBlob(excelOutput);
                const downloadUrl = URL.createObjectURL(blob);
                const downloadLink = document.createElement('a');
                downloadLink.href = downloadUrl;
                downloadLink.download = 'TEUI_Full_Export.xlsx';
                document.body.appendChild(downloadLink);
                downloadLink.click();
                document.body.removeChild(downloadLink);
                this.showStatus('Full Excel export completed', 'success');
            } catch (error) {
                console.error('Error exporting full Excel:', error);
                this.showStatus(`Error exporting full Excel: ${error.message}`, 'error');
            }
        }

        fallbackCreateWorkbook(data) { // Used by legacy export
             console.warn('Using fallback Excel creation - limited functionality');
             const workbook = XLSX.utils.book_new();
             const worksheet = XLSX.utils.aoa_to_sheet([['Field ID', 'Value']]);
             let row = 1;
             Object.entries(data).forEach(([id, value]) => {
                 XLSX.utils.sheet_add_aoa(worksheet, [[id, value]], { origin: { r: row++, c: 0 }});
             });
             XLSX.utils.book_append_sheet(workbook, worksheet, "TEUI Calculator Data");
             return workbook;
         }

        binaryStringToBlob(binaryString) { // Used by legacy export
             const byteArray = new Uint8Array(binaryString.length);
             for (let i = 0; i < binaryString.length; i++) {
                 byteArray[i] = binaryString.charCodeAt(i) & 0xff;
             }
             return new Blob([byteArray], { type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet' });
         }
        
        showStatus(message, type) {
            // console.log(`[FileHandler] ${message}`); // Keep logs minimal
            const feedbackArea = document.getElementById('feedback-area');
            if (feedbackArea) {
                const colors = {
                    'info': '#0dcaf0',
                    'success': '#198754',
                    'warning': '#ffc107',
                    'error': '#dc3545' 
                };
                feedbackArea.textContent = message;
                feedbackArea.style.color = colors[type] || '#0dcaf0';
                if (type === 'success' || type === 'info') {
                    setTimeout(() => { if (feedbackArea.textContent === message) { feedbackArea.textContent = ''; } }, 5000);
                }
            } 
        }

        applyImportedData() { // Potentially redundant if import is automatic
             if (!this.workbook) {
                 this.showStatus('Please load an Excel file first', 'warning');
                 return;
             }
             // Logic here might need refinement - currently focused on location data
             if (window.TEUI.ExcelLocationHandler?.updateProvinceDropdowns) { 
                 window.TEUI.ExcelLocationHandler.updateProvinceDropdowns(); 
                 this.showStatus('Data applied (focused on locations).', 'info');
             }
        }
    }

    // Initialize when document is ready
    document.addEventListener('DOMContentLoaded', function() {
        window.TEUI = window.TEUI || {}; // Ensure namespace
        window.TEUI.FileHandler = new FileHandler();
    });

})(window);