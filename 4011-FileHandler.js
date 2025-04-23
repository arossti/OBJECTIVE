// File handler module for TEUI Calculator
// Handles file operations like importing and exporting Excel files

(function(window) {
    'use strict';

    // Define FileHandler class
    class FileHandler {
        constructor() {
            this.stateManager = window.StateManager ? window.StateManager.getInstance() : null;
            this.workbook = null;
            this.locationData = null;
            this.buildingCodeData = null;
            this.scheduleData = null;
            this.setupEventListeners();
        }
        
        setupEventListeners() {
            // Import Excel button
            const importButton = document.getElementById('import-excel');
            if (importButton) {
                importButton.addEventListener('click', () => {
                    document.getElementById('excel-file-input').click();
                });
            }
            
            // Excel file input
            const fileInput = document.getElementById('excel-file-input');
            if (fileInput) {
                fileInput.addEventListener('change', (event) => {
                    this.handleFileSelect(event);
                });
            }
            
            // Export Excel button
            const exportButton = document.getElementById('export-excel');
            if (exportButton) {
                exportButton.addEventListener('click', () => {
                    this.exportToExcel();
                });
            }
            
            // Add event handlers for climate section Excel buttons
            const selectExcelBtn = document.getElementById('selectExcelBtn');
            if (selectExcelBtn) {
                selectExcelBtn.addEventListener('click', () => {
                    const input = document.createElement('input');
                    input.type = 'file';
                    input.accept = '.xlsx,.xlsm';
                    input.onchange = (event) => {
                        this.handleFileSelect(event);
                    };
                    input.click();
                });
            }
            
            const applyExcelBtn = document.getElementById('applyExcelBtn');
            if (applyExcelBtn) {
                applyExcelBtn.addEventListener('click', () => {
                    this.applyData();
                });
            }

            const debugExcelBtn = document.getElementById('debugExcelBtn');
            if (debugExcelBtn) {
                debugExcelBtn.addEventListener('click', () => {
                    console.log('=== DEBUG INFORMATION ===');
                    
                    // Check if location data exists
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
                    
                    // Check weather data fields
                    console.log('=== WEATHER DATA FIELDS ===');
                    const hddField = document.getElementById('in_l_2_1');
                    const cddField = document.getElementById('in_l_2_2');
                    const designTempField = document.getElementById('in_l_2_3');
                    console.log('HDD Field:', hddField ? `${hddField.value}` : 'Not found');
                    console.log('CDD Field:', cddField ? `${cddField.value}` : 'Not found');
                    console.log('Design Temp:', designTempField ? `${designTempField.value}` : 'Not found');
                    
                    // Check selected province and city
                    const provinceDropdown = document.querySelector('[data-dropdown-id="dd_d_19"]');
                    const cityDropdown = document.querySelector('[data-dropdown-id="dd_h_19"]');
                    const presentFutureDropdown = document.querySelector('[data-dropdown-id="dd_h_20"]');
                    
                    console.log('Selected Province:', provinceDropdown ? provinceDropdown.value : 'No dropdown');
                    console.log('Selected City:', cityDropdown ? cityDropdown.value : 'No dropdown');
                    console.log('Present/Future Setting:', presentFutureDropdown ? presentFutureDropdown.value : 'No dropdown');
                    
                    // Find dropdown elements
                    const provinceDropdowns = document.querySelectorAll('[data-dropdown-id="dd_d_19"]');
                    const cityDropdowns = document.querySelectorAll('[data-dropdown-id="dd_h_19"]');
                    
                    console.log(`Province dropdowns: ${provinceDropdowns.length} found`);
                    console.log(`City dropdowns: ${cityDropdowns.length} found`);
                    
                    // Check if climate section is rendered
                    const climateSection = document.getElementById('climateCalculations');
                    console.log(`Climate section: ${climateSection ? 'Found' : 'Not found'}`);
                    
                    if (climateSection) {
                        console.log('Climate section content:', climateSection.innerHTML.substring(0, 100) + '...');
                    }
                    
                    // Force re-rendering of dropdowns
                    if (window.TEUI && window.TEUI.ExcelLocationHandler) {
                        console.log('Forcing dropdown refresh...');
                        window.TEUI.ExcelLocationHandler.updateProvinceDropdowns();
                        
                        // If province is selected, also refresh cities
                        if (provinceDropdown && provinceDropdown.value) {
                            console.log(`Refreshing cities for province: ${provinceDropdown.value}`);
                            window.TEUI.ExcelLocationHandler.updateCityDropdowns(provinceDropdown.value);
                            
                            // If city is also selected, try to update weather data
                            if (cityDropdown && cityDropdown.value && window.TEUI.Calculator) {
                                console.log(`Forcing weather data update for ${cityDropdown.value}, ${provinceDropdown.value}`);
                                try {
                                    window.TEUI.Calculator.updateWeatherData(provinceDropdown.value, cityDropdown.value);
                                } catch (e) {
                                    console.error('Error updating weather data:', e);
                                }
                            }
                        }
                    }
                    
                    this.showStatus('Debug information logged to console', 'info');
                });
            }
        }
        
        // Handle file selection for import
        handleFileSelect(event) {
            const file = event.target.files[0];
            if (!file) {
                console.warn('No file selected');
                return;
            }
            
            console.log(`Selected file: ${file.name} (${file.size} bytes)`);
            this.showStatus('Reading file...', 'info');
            
            const reader = new FileReader();
            reader.onload = (e) => {
                try {
                    console.log('File loaded successfully, parsing Excel data...');
                    const data = new Uint8Array(e.target.result);
                    this.workbook = XLSX.read(data, { type: 'array' });
                    
                    console.log(`Excel sheets found: ${this.workbook.SheetNames.join(', ')}`);
                    
                    this.showStatus('Processing Excel data...', 'info');
                    
                    // First, immediately show the Apply button
                    const applyBtn = document.getElementById('applyExcelBtn');
                    if (applyBtn) {
                        applyBtn.classList.remove('d-none');
                        applyBtn.disabled = false;
                        console.log('Apply button is now visible');
                    }
                    
                    // Process location data first with a direct call to ExcelLocationHandler
                    if (window.TEUI.ExcelLocationHandler) {
                        // Process the data directly
                        const locationData = window.TEUI.ExcelLocationHandler.processLocationData(this.workbook);
                        
                        if (locationData) {
                            console.log('Location data processed successfully');
                            
                            // Update dropdown right away
                            window.TEUI.ExcelLocationHandler.updateProvinceDropdowns();
                            
                            // Notify any other components that may be listening
                            document.dispatchEvent(new CustomEvent('location-data-ready'));
                            
                            // Show success message
                            this.showStatus('Location data loaded successfully', 'success');
                        } else {
                            console.error('Failed to process location data');
                            this.showStatus('Failed to process location data', 'error');
                        }
                    }
                    
                    // Process other data types
                    this.processAllData();
                    
                } catch (error) {
                    console.error('Error processing Excel file:', error);
                    this.showStatus(`Error processing Excel file: ${error.message}`, 'error');
                }
            };
            
            reader.onerror = () => {
                console.error('Error reading file');
                this.showStatus('Error reading file', 'error');
            };
            
            reader.readAsArrayBuffer(file);
            
            // Reset the file input
            event.target.value = '';
        }
        
        processAllData() {
            try {
                console.log('Processing Excel data types...');
                
                // Process location data using ExcelLocationHandler
                if (window.TEUI && window.TEUI.ExcelLocationHandler) {
                    console.log('Processing location data with ExcelLocationHandler...');
                    this.locationData = window.TEUI.ExcelLocationHandler.processLocationData(this.workbook);
                    
                    if (this.locationData) {
                        console.log(`Location data processed: ${Object.keys(this.locationData).length} provinces found`);
                        document.dispatchEvent(new CustomEvent('location-data-ready'));
                        console.log('Dispatched location-data-ready event');
                    } else {
                        console.error('ExcelLocationHandler returned null location data');
                    }
                } else {
                    console.error('ExcelLocationHandler not available');
                }
                
                // Process building code data
                this.buildingCodeData = this.processBuildingCodeData(this.workbook);
                document.dispatchEvent(new CustomEvent('building-code-data-loaded'));
                
                // Process schedule data
                this.scheduleData = this.processScheduleData(this.workbook);
                document.dispatchEvent(new CustomEvent('schedule-data-loaded'));
                
                this.showStatus('All data processed successfully!', 'success');
                
                // Update state manager with processed data
                if (this.stateManager) {
                    this.stateManager.importValues({
                        locationData: this.locationData,
                        buildingCodeData: this.buildingCodeData,
                        scheduleData: this.scheduleData
                    });
                }
                
            } catch (error) {
                console.error('Error processing data:', error);
                this.showStatus(`Error processing data: ${error.message}`, 'error');
            }
        }
        
        processBuildingCodeData(workbook) {
            // Placeholder for future implementation
            console.log('Building code data processing not yet implemented');
            return null;
        }
        
        processScheduleData(workbook) {
            // Placeholder for future implementation
            console.log('Schedule data processing not yet implemented');
            return null;
        }
        
        // Export to Excel
        exportToExcel() {
            try {
                this.showStatus('Preparing Excel export...', 'info');
                
                // Get the current data from the state manager
                const currentData = this.stateManager.exportValues();
                
                // Create a workbook
                const workbook = window.excelMapper ? 
                    window.excelMapper.createWorkbook(currentData) : 
                    this.fallbackCreateWorkbook(currentData);
                
                // Write the workbook to a binary string
                const excelOutput = XLSX.write(workbook, { bookType: 'xlsx', type: 'binary' });
                
                // Convert binary string to Blob
                const blob = this.binaryStringToBlob(excelOutput);
                
                // Create download link
                const downloadUrl = URL.createObjectURL(blob);
                const downloadLink = document.createElement('a');
                downloadLink.href = downloadUrl;
                downloadLink.download = 'TEUI_Calculator_Export.xlsx';
                
                // Trigger download
                document.body.appendChild(downloadLink);
                downloadLink.click();
                document.body.removeChild(downloadLink);
                
                this.showStatus('Excel export completed', 'success');
            } catch (error) {
                console.error('Error exporting Excel:', error);
                this.showStatus(`Error exporting Excel: ${error.message}`, 'error');
            }
        }
        
        // Simple fallback for creating workbook if excelMapper is not available
        fallbackCreateWorkbook(data) {
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
        
        // Helper method to convert binary string to Blob
        binaryStringToBlob(binaryString) {
            const byteArray = new Uint8Array(binaryString.length);
            for (let i = 0; i < binaryString.length; i++) {
                byteArray[i] = binaryString.charCodeAt(i) & 0xff;
            }
            return new Blob([byteArray], { type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet' });
        }
        
        // Display status message
        showStatus(message, type) {
            console.log(`[FileHandler] ${message}`);
            
            // Get the feedback area
            const feedbackArea = document.getElementById('feedback-area');
            if (feedbackArea) {
                // Define colors for different message types
                const colors = {
                    'info': '#0dcaf0',    // light blue
                    'success': '#198754', // green
                    'warning': '#ffc107', // yellow
                    'error': '#dc3545'    // red
                };
                
                // Set the message with appropriate color
                feedbackArea.textContent = message;
                feedbackArea.style.color = colors[type] || '#0dcaf0';
                
                // Auto-clear success and info messages after a delay
                if (type === 'success' || type === 'info') {
                    setTimeout(() => {
                        if (feedbackArea.textContent === message) {
                            feedbackArea.textContent = '';
                        }
                    }, 5000);
                }
            } else {
                // Fallback if the feedback area doesn't exist
                const statusElement = document.createElement('div');
                statusElement.className = `status-message status-${type}`;
                statusElement.textContent = message;
                
                // Add to document
                document.body.appendChild(statusElement);
                
                // Remove after timeout
                setTimeout(() => {
                    statusElement.classList.add('status-fade');
                    setTimeout(() => {
                        if (document.body.contains(statusElement)) {
                            document.body.removeChild(statusElement);
                        }
                    }, 500);
                }, 3000);
            }
        }

        // New method to apply the data (also called from applyExcelBtn click handler)
        applyData() {
            if (!this.workbook) {
                this.showStatus('Please load an Excel file first', 'warning');
                return;
            }
            
            try {
                if (window.TEUI.ExcelLocationHandler) {
                    // Get existing location data or process it if not already done
                    let locationData = window.TEUI.ExcelLocationHandler.getLocationData();
                    if (!locationData) {
                        console.log('Location data not found, processing now...');
                        locationData = window.TEUI.ExcelLocationHandler.processLocationData(this.workbook);
                        
                        if (!locationData) {
                            this.showStatus('Failed to process location data', 'error');
                            return;
                        }
                    }
                    
                    console.log('Location data available, updating dropdowns directly');
                    
                    // Ensure dropdowns are updated with a slight delay to avoid timing issues
                    setTimeout(() => {
                        // Update province dropdowns
                        if (window.TEUI.ExcelLocationHandler.updateProvinceDropdowns) {
                            window.TEUI.ExcelLocationHandler.updateProvinceDropdowns();
                            console.log('Province dropdowns updated');
                        } else {
                            console.error('updateProvinceDropdowns function not available');
                        }
                        
                        // Notify any other components that may be listening
                        document.dispatchEvent(new CustomEvent('location-data-ready'));
                        
                        this.showStatus('Location data applied successfully', 'success');
                    }, 100);
                } else {
                    this.showStatus('ExcelLocationHandler not available', 'error');
                }
            } catch (error) {
                console.error('Error applying location data:', error);
                this.showStatus(`Error applying location data: ${error.message}`, 'error');
            }
        }
    }

    // Initialize when document is ready
    document.addEventListener('DOMContentLoaded', function() {
        window.fileHandler = new FileHandler();
    });

})(window);