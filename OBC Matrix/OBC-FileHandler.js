/**
 * OBC-FileHandler.js - Handles file import/export for OBC Matrix
 */

// Add to global OBC namespace
window.OBC = window.OBC || {};

// File Handler Module
OBC.FileHandler = (function() {
    'use strict';

    // CSV parsing and generation
    function parseCSV(csvString) {
        // Simple CSV parser
        const lines = csvString.split('\n');
        const headers = lines[0].split(',').map(header => header.trim());
        const result = [];

        for (let i = 1; i < lines.length; i++) {
            if (lines[i].trim() === '') continue;
            
            const values = lines[i].split(',');
            const entry = {};
            
            for (let j = 0; j < headers.length; j++) {
                entry[headers[j]] = values[j] ? values[j].trim() : '';
            }
            
            result.push(entry);
        }

        return {
            headers: headers,
            data: result
        };
    }

    function generateCSV(formData) {
        // Convert form data to CSV format
        const fields = Object.keys(formData);
        const headers = ['field_id', 'value'];
        const rows = fields.map(field => `${field},${formData[field]}`);
        
        return headers.join(',') + '\n' + rows.join('\n');
    }

    // Import data from file
    function importData() {
        const fileInput = document.getElementById('excel-file-input');
        
        // Reset file input
        fileInput.value = '';
        
        // Set up event handler
        fileInput.onchange = function(e) {
            const file = e.target.files[0];
            if (!file) return;
            
            const reader = new FileReader();
            
            reader.onload = function(e) {
                const contents = e.target.result;
                
                try {
                    // Check file type
                    if (file.name.endsWith('.csv')) {
                        // Parse CSV
                        const parsedData = parseCSV(contents);
                        processImportedData(parsedData);
                    } else if (file.name.endsWith('.xlsx') || file.name.endsWith('.xls')) {
                        // Parse Excel with xlsx.js
                        const workbook = XLSX.read(contents, {type: 'binary'});
                        const sheetName = workbook.SheetNames[0];
                        const worksheet = workbook.Sheets[sheetName];
                        const jsonData = XLSX.utils.sheet_to_json(worksheet);
                        processImportedData({data: jsonData});
                    } else {
                        alert('Unsupported file format. Please use CSV or Excel file.');
                    }
                } catch (error) {
                    console.error('Error parsing file:', error);
                    alert('Error parsing file. Please check the file format.');
                }
            };
            
            if (file.name.endsWith('.csv')) {
                reader.readAsText(file);
            } else {
                reader.readAsBinaryString(file);
            }
        };
        
        // Trigger file selection
        fileInput.click();
    }
    
    // Process imported data
    function processImportedData(parsedData) {
        console.log('Imported data:', parsedData);
        
        // Simple implementation for demonstration
        if (!parsedData || !parsedData.data || !parsedData.data.length) {
            alert('No data found in the imported file.');
            return;
        }
        
        // Convert data to form data format
        const formData = {};
        
        // Check if data is in field_id,value format
        if (parsedData.data[0].field_id && parsedData.data[0].value) {
            // Field-value pairs
            parsedData.data.forEach(item => {
                formData[item.field_id] = item.value;
            });
        } else {
            // Data keyed by field names
            // For each item in data, extract its properties
            parsedData.data.forEach(item => {
                Object.keys(item).forEach(key => {
                    formData[key] = item[key];
                });
            });
        }
        
        // Update OBC state
        OBC.state.formData = formData;
        OBC.state.isDirty = true;
        
        // Populate form fields
        populateFormFields(formData);
        
        alert('Data imported successfully.');
    }
    
    // Populate form fields with imported data
    function populateFormFields(formData) {
        // Iterate through form data
        Object.keys(formData).forEach(fieldId => {
            const value = formData[fieldId];
            const field = document.querySelector(`[data-field-id="${fieldId}"], #${fieldId}`);
            
            if (!field) return;
            
            if (field.tagName === 'SELECT') {
                // Handle dropdown
                field.value = value;
            } else if (field.hasAttribute('contenteditable')) {
                // Handle contenteditable
                field.textContent = value;
            } else if (field.tagName === 'INPUT') {
                // Handle input fields
                field.value = value;
            }
        });
    }

    // Export data to file
    function exportData() {
        // Generate CSV data
        const csvData = generateCSV(OBC.state.formData);
        
        // Create download link
        const blob = new Blob([csvData], { type: 'text/csv' });
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = `OBC_Matrix_${OBC.state.currentPart.toUpperCase()}_${new Date().toISOString().slice(0,10)}.csv`;
        
        // Trigger download
        document.body.appendChild(a);
        a.click();
        
        // Clean up
        document.body.removeChild(a);
        URL.revokeObjectURL(url);
        
        // Reset dirty flag
        OBC.state.isDirty = false;
        
        console.log('Data exported successfully');
    }

    // Public API
    return {
        importData: importData,
        exportData: exportData
    };
})();
