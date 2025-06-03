// File handler module for TEUI Calculator
// Handles file operations like importing and exporting Excel/CSV files
//
// Recent changes:
// 2025-05-10: Fixed CSV export to remove commas from numeric values (like "132,938.00" -> "132938.00") 
//             to prevent import issues where commas in values were treated as column separators

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
                console.log('[SAFARI DEBUG] Setting up S03 Excel import buttons. selectExcelBtn and locationFileInput FOUND.'); // New Log A

                // Simplify: Remove cloning for selectExcelBtn, just ensure one listener
                const selectBtnClickHandler = () => {
                    console.log('[SAFARI DEBUG] selectExcelBtn CLICKED.'); // New Log B
                    if(locationFileInput) locationFileInput.value = null; 
                    locationFileInput.click(); 
                };
                selectExcelBtn.removeEventListener('click', selectBtnClickHandler); // Remove if any previous (less likely needed with IIFE)
                selectExcelBtn.addEventListener('click', selectBtnClickHandler);
                
                // Simplify: Attach listener directly to the original locationFileInput, ensure it's fresh
                const locationChangeEventHandler = async (event) => {
                    console.log('[SAFARI DEBUG] location-excel-input change event FIRED'); // Log 1
                    const file = event.target.files[0];
                    console.log('[SAFARI DEBUG] Selected file:', file); // Log 2

                    if (file) {
                        console.log('[SAFARI DEBUG] File object is present. Name:', file.name);
                        if (window.TEUI && window.TEUI.ExcelLocationHandler && typeof window.TEUI.ExcelLocationHandler.loadExcelFile === 'function') {
                            console.log('[SAFARI DEBUG] ExcelLocationHandler.loadExcelFile IS available. Attempting to call...'); // Log 3
                            try {
                                await window.TEUI.ExcelLocationHandler.loadExcelFile(file);
                                console.log('[SAFARI DEBUG] ExcelLocationHandler.loadExcelFile call COMPLETED (awaited).'); // Log 4
                            } catch (error) {
                                console.error('[SAFARI DEBUG][FileHandler] Error calling ExcelLocationHandler.loadExcelFile:', error); // Log 5
                                // Access showStatus via this.showStatus if FileHandler is correctly scoped or make showStatus a static/global helper
                                if (this && this.showStatus) this.showStatus(`Error loading location file: ${error.message}`, 'error');
                                else console.error(`Status Update Failed: Error loading location file: ${error.message}`);
                            }
                        } else {
                            console.error('[SAFARI DEBUG][FileHandler] ExcelLocationHandler.loadExcelFile is not available.'); // Log 6
                            if (this && this.showStatus) this.showStatus('Location handler module is not available.', 'error');
                            else console.error('Status Update Failed: Location handler module is not available.');
                        }
                    } else {
                        console.warn('[SAFARI DEBUG] No file object found in event.target.files.'); // Log 7
                    }
                };
                // Remove any old listener from the original element before adding
                locationFileInput.removeEventListener('change', locationChangeEventHandler); 
                locationFileInput.addEventListener('change', locationChangeEventHandler);

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
            this.showStatus('Parsing standardized CSV data...', 'info');
            const importedData = {};
            let message = '';

            try {
                const rows = csvString.split(/\r?\n/).filter(row => row.trim() !== ''); // Split lines and remove empty ones
                
                if (rows.length !== 2) {
                    throw new Error(`Expected 2 data rows (headers and values), but found ${rows.length}.`);
                }

                const headerRow = rows[0];
                const valueRow = rows[1];

                // Basic parsing for CSV row, handles quoted fields from our escapeCSV output
                const parseCSVRow = (rowString) => {
                    const values = [];
                    let currentVal = '';
                    let inQuotes = false;
                    for (let i = 0; i < rowString.length; i++) {
                        const char = rowString[i];
                        if (char === '"') {
                            if (inQuotes && i + 1 < rowString.length && rowString[i+1] === '"') {
                                currentVal += '"'; // Escaped quote
                                i++; // Skip next quote
                            } else {
                                inQuotes = !inQuotes;
                            }
                        } else if (char === ',' && !inQuotes) {
                            values.push(currentVal.trim());
                            currentVal = '';
                        } else {
                            currentVal += char;
                        }
                    }
                    values.push(currentVal.trim()); // Add the last value
                    return values;
                };

                const fieldIds = parseCSVRow(headerRow);
                const values = parseCSVRow(valueRow);

                if (fieldIds.length !== values.length) {
                    throw new Error(`Header count (${fieldIds.length}) does not match value count (${values.length}). CSV may be malformed.`);
                }

                for (let i = 0; i < fieldIds.length; i++) {
                    const fieldId = fieldIds[i];
                    const value = values[i];
                    if (fieldId && value !== undefined) { // Ensure fieldId is not empty
                        importedData[fieldId] = value;
                    }
                }

                if (Object.keys(importedData).length === 0) {
                    this.showStatus('No valid data found in standardized CSV.', 'warning');
                    return;
                }
                
                message = `Standardized CSV parsed successfully. ${Object.keys(importedData).length} fields found.`;
                this.showStatus(message, 'info');
                this.updateStateFromImportData(importedData); // No skippedCount for this format

            } catch (error) {
                console.error("Error parsing standardized CSV:", error);
                this.showStatus(`Error parsing standardized CSV: ${error.message}`, 'error');
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
                const fieldDef = this.fieldManager.getField(fieldId);
                if (!fieldDef) {
                    console.warn(`Skipping import for unknown fieldId: ${fieldId}`);
                    skippedValidationCount++;
                    return; // Use return to continue to next iteration of forEach
                }

                let parsedValue = value; 
                let isValid = true;

                try {
                    if (fieldDef.type === 'editable' || fieldDef.type === 'year_slider' || fieldDef.type === 'percentage' || fieldDef.type === 'coefficient') {
                        const numericValue = window.TEUI.parseNumeric(value, NaN);
                        if (!isNaN(numericValue)) {
                            parsedValue = numericValue.toString(); 
                        } else if (fieldDef.type !== 'editable') { 
                            isValid = false;
                        } 
                    } else if (fieldDef.type === 'dropdown') {
                        const options = this.fieldManager.getDropdownOptions(fieldDef.dropdownId, { parentValue: null });
                        const validValues = options.map(opt => typeof opt === 'object' ? String(opt.value) : String(opt));
                        if (!validValues.includes(String(value))) { 
                            isValid = false;
                        }
                    }
                    
                    if (isValid) {
                        this.stateManager.setValue(fieldId, parsedValue, 'imported');
                        updatedCount++;
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
            });

            // AFTER all imported values have been set into StateManager.fields:
            if (this.stateManager && typeof this.stateManager.loadReferenceData === 'function' && typeof this.stateManager.getApplicationValue === 'function') {
                const finalD13 = this.stateManager.getApplicationValue('d_13');
                if (finalD13) {
                    console.log(`[FileHandler] All imported values set. Explicitly calling loadReferenceData for standard: ${finalD13}`);
                    this.stateManager.loadReferenceData(finalD13);
                    console.log(`[FileHandler] loadReferenceData finished after import.`);
                } else {
                    console.warn("[FileHandler] d_13 not found in imported data or state after import; cannot explicitly load reference data.");
                }
            }

            // Trigger recalculation after all updates AND after reference data is loaded
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
             this.showStatus('Generating CSV export (standardized format)...', 'info');

             try {
                // Basic CSV escaping (handles commas, quotes, newlines)
                const escapeCSV = (val) => {
                    // Ensure string conversion, handle null/undefined
                    let strVal = String(val ?? '');
                    
                    // Remove thousands separators (commas) from numeric values before export
                    if (/^-?[\d,]+\.?\d*$/.test(strVal)) {
                        strVal = strVal.replace(/,/g, '');
                    }
                    
                    if (strVal.includes(',') || strVal.includes('"') || strVal.includes('\n')) {
                        return `"${strVal.replace(/"/g, '""')}"`;
                    }
                    return strVal;
                };

                const allFields = this.fieldManager.getAllFields();
                const userEditableFieldIds = [];
                const userEditableFieldValues = [];

                // Filter for fields explicitly marked as user-editable by type
                // Order of fields will be based on their definition order in fieldManager.getAllFields()
                Object.entries(allFields).forEach(([id, def]) => {
                    if (
                        def.type === 'editable' || 
                        def.type === 'dropdown' || 
                        def.type === 'year_slider' || 
                        def.type === 'percentage' || 
                        def.type === 'coefficient' ||
                        def.type === 'coefficient_slider' ||
                        def.type === 'number'
                        // Add any other custom types considered user-editable here
                    ) {
                        userEditableFieldIds.push(id);
                        const currentValue = this.stateManager.getValue(id) ?? def.defaultValue ?? '';
                        userEditableFieldValues.push(escapeCSV(currentValue));
                    }
                });
                
                if (userEditableFieldIds.length === 0) {
                    this.showStatus('No user-editable fields found to export.', 'warning');
                    return;
                }

                // Construct CSV content: Row 1 for fieldIds, Row 2 for values
                const headerRow = userEditableFieldIds.join(',');
                const dataRow = userEditableFieldValues.join(',');
                const csvContent = headerRow + "\n" + dataRow;
                
                // Get project name for filename
                const projectName = this.stateManager.getValue('h_14') || 'Project';
                // Sanitize project name for filename
                const safeProjectName = projectName.replace(/[^a-z0-9_\-\.]/gi, '_');
                const filename = `TEUIv4011-Standardized-${safeProjectName}.csv`; 
 
                console.log(`[CSV Export] Generated filename: ${filename}`);
                
                // Trigger Download
                const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
                const url = URL.createObjectURL(blob);
                const link = document.createElement("a");
                link.setAttribute("href", url);
                link.setAttribute("download", filename);
                link.style.visibility = 'hidden';
                document.body.appendChild(link);
                link.click();
                document.body.removeChild(link);

                this.showStatus('Standardized CSV export complete.', 'success');
                
            } catch (error) {
                 console.error("Error generating standardized CSV export:", error);
                 this.showStatus(`Error during standardized CSV export: ${error.message}`, 'error');
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