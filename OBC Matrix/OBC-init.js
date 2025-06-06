/**
 * OBC-init.js - Initialization script for OBC Matrix
 * Sets up event handlers and basic functionality
 */

// Global namespace for OBC Matrix application
window.OBC = window.OBC || {};

// Initialize the application
(function() {
    'use strict';

    // Application state
    OBC.state = {
        currentPart: 'part3', // Default to Part 3
        formData: {}, // Store form data
        isDirty: false // Track if form has unsaved changes
    };

    // Simple utility functions
    OBC.utils = {
        // Format a cell value for display
        formatValue: function(value, format) {
            if (value === null || value === undefined || value === '') return '';
            
            switch(format) {
                case 'number':
                    return parseFloat(value).toFixed(2);
                case 'integer':
                    return parseInt(value, 10);
                case 'percentage':
                    return parseFloat(value).toFixed(1) + '%';
                default:
                    return value;
            }
        },
        
        // Parse a cell value from user input
        parseValue: function(value, format) {
            if (value === null || value === undefined || value === '') return '';
            
            switch(format) {
                case 'number':
                    return parseFloat(value);
                case 'integer':
                    return parseInt(value, 10);
                case 'percentage':
                    return parseFloat(value.replace('%', ''));
                default:
                    return value;
            }
        }
    };

    // Handle contenteditable fields
    function setupContentEditableFields() {
        document.querySelectorAll('[contenteditable="true"]').forEach(field => {
            // Skip if already initialized
            if (field.dataset.initialized) return;
            
            // Mark as initialized
            field.dataset.initialized = true;
            
            // Handle blur event
            field.addEventListener('blur', function() {
                // Store value in state
                const fieldId = this.id || this.dataset.fieldId;
                if (fieldId) {
                    OBC.state.formData[fieldId] = this.textContent.trim();
                    OBC.state.isDirty = true;
                }
            });
            
            // Handle enter key
            field.addEventListener('keydown', function(e) {
                if (e.key === 'Enter') {
                    e.preventDefault();
                    this.blur();
                }
            });
        });
    }

    // Handle dropdown fields
    function setupDropdowns() {
        document.querySelectorAll('select.form-select').forEach(dropdown => {
            // Skip if already initialized
            if (dropdown.dataset.initialized) return;
            
            // Mark as initialized
            dropdown.dataset.initialized = true;
            
            // Handle change event
            dropdown.addEventListener('change', function() {
                // Store value in state
                const fieldId = this.id || this.dataset.fieldId;
                if (fieldId) {
                    OBC.state.formData[fieldId] = this.value;
                    OBC.state.isDirty = true;
                }
            });
        });
    }

    // Function to convert CSV data to JSON
    function convertCsvToJson(csvData) {
        // This is a placeholder. In a real implementation, this would
        // parse the CSV and convert it to a structured JSON object
        console.log("Converting CSV to JSON:", csvData.slice(0, 100) + "...");
        
        // For now, return a dummy object
        return {
            part3: {
                // Placeholder data structure
                building: {
                    name: "Example Building",
                    address: "123 Main St"
                },
                sections: [
                    // Matrix data would go here
                ]
            }
        };
    }

    // Function to load OBC Matrix data from JSON
    function loadMatrixFromJson(jsonData, part) {
        console.log("Loading matrix data for part:", part);
        
        const matrixContent = document.getElementById('matrix-content');
        
        // Clear existing content
        matrixContent.innerHTML = '';
        
        // Check if we have valid data
        if (!jsonData || !jsonData.sections || jsonData.sections.length === 0) {
            matrixContent.innerHTML = `<div class="alert alert-info m-3">No data available for ${part.toUpperCase()}. This is a placeholder.</div>`;
            return;
        }
        
        // Iterate through sections and create tables
        jsonData.sections.forEach(section => {
            // Create section header
            const sectionHeader = document.createElement('div');
            sectionHeader.className = 'matrix-section-header';
            
            // Create span for section title
            const titleSpan = document.createElement('span');
            titleSpan.textContent = section.title;
            sectionHeader.appendChild(titleSpan);
            
            // Add OBC reference to section header if available
            if (section.obcReference) {
                const refSpan = document.createElement('span');
                refSpan.className = 'obc-reference';
                refSpan.textContent = section.obcReference;
                sectionHeader.appendChild(refSpan);
            }
            
            matrixContent.appendChild(sectionHeader);
            
            // Create table for this section
            const table = document.createElement('table');
            table.className = 'data-table';
            
            // Create columns
            const colgroup = document.createElement('colgroup');
            for (let i = 0; i < 13; i++) {
                const col = document.createElement('col');
                col.className = `col-${String.fromCharCode(97 + i)}`; // a, b, c, etc.
                colgroup.appendChild(col);
            }
            table.appendChild(colgroup);
            
            // Create fields as rows
            if (section.fields && section.fields.length > 0) {
                section.fields.forEach(field => {
                    const row = document.createElement('tr');
                    
                    // First column: Field ID (if available)
                    const idCell = document.createElement('td');
                    idCell.className = 'col-b field-id';
                    if (field.id) {
                        // Extract a short ID from the field.id (e.g., "B.1" from "p3_building_description")
                        const idMatch = field.id.match(/p\d+_([a-z]+)_?([a-z]+)?/);
                        if (idMatch) {
                            const shortId = idMatch[1].charAt(0).toUpperCase() + '.' + (idMatch[2] ? idMatch[2].charAt(0) : '1');
                            idCell.textContent = shortId;
                        } else {
                            idCell.textContent = field.id.split('_').pop().charAt(0).toUpperCase() + '.1';
                        }
                    }
                    row.appendChild(idCell);
                    
                    // Cell C: Label
                    const labelCell = document.createElement('td');
                    labelCell.className = 'col-c field-label';
                    labelCell.textContent = field.label || '';
                    row.appendChild(labelCell);
                    
                    // Cell D: Value or Input
                    const valueCell = document.createElement('td');
                    valueCell.className = 'col-d';
                    
                    if (field.type === 'dropdown') {
                        // Create select element
                        const select = document.createElement('select');
                        select.className = 'form-select';
                        select.id = field.id;
                        select.setAttribute('data-field-id', field.id);
                        
                        // Add empty option
                        const emptyOption = document.createElement('option');
                        emptyOption.value = '';
                        emptyOption.textContent = field.placeholder || '-- Select --';
                        select.appendChild(emptyOption);
                        
                        // Add options
                        if (field.options && field.options.length > 0) {
                            field.options.forEach(option => {
                                const optionElement = document.createElement('option');
                                optionElement.value = option;
                                optionElement.textContent = option;
                                if (field.value === option) {
                                    optionElement.selected = true;
                                }
                                select.appendChild(optionElement);
                            });
                        }
                        
                        valueCell.appendChild(select);
                    } else if (field.type === 'numeric') {
                        // Create numeric value display with blue text
                        valueCell.setAttribute('contenteditable', 'true');
                        valueCell.className = 'col-d user-input numeric-value value-text';
                        valueCell.setAttribute('data-field-id', field.id);
                        valueCell.setAttribute('data-type', 'numeric');
                        valueCell.setAttribute('data-placeholder', field.placeholder || 'Enter value');
                        valueCell.textContent = field.value || '10,000.00';
                    } else {
                        // Create contenteditable span
                        valueCell.setAttribute('contenteditable', 'true');
                        valueCell.className = 'col-d user-input';
                        valueCell.setAttribute('data-field-id', field.id);
                        valueCell.setAttribute('data-placeholder', field.placeholder || 'Enter value');
                        valueCell.textContent = field.value || '';
                    }
                    
                    row.appendChild(valueCell);
                    
                    // Empty cells for remaining columns
                    for (let i = 4; i < 13; i++) {
                        const emptyCell = document.createElement('td');
                        emptyCell.className = `col-${String.fromCharCode(97 + i)}`; // e, f, g, etc.
                        
                        // Add "Notes:" label to column M (index 12) for the first row
                        if (i === 12 && section.fields.indexOf(field) === 0) {
                            emptyCell.textContent = "Notes:";
                        }
                        
                        // Create contenteditable for notes in column M (index 12)
                        if (i === 12 && section.fields.indexOf(field) > 0) {
                            emptyCell.setAttribute('contenteditable', 'true');
                            emptyCell.className += ' user-input';
                            emptyCell.setAttribute('data-placeholder', 'Enter notes');
                        }
                        
                        // Add "Seal & Signature" for last row in column I (index 8)
                        // Only show in the Building Information section (first section)
                        if (i === 8 && section.fields.indexOf(field) === section.fields.length - 1 && 
                            section.title === "Building Information") {
                            emptyCell.textContent = "Seal & Signature";
                        }
                        
                        // Add values for other columns if available
                        if (i === 8 && field.columnI) { // Column I (index 8)
                            emptyCell.textContent = field.columnI;
                        }
                        
                        if (i === 9 && field.columnJ) { // Column J (index 9)
                            emptyCell.textContent = field.columnJ;
                        }
                        
                        row.appendChild(emptyCell);
                    }
                    
                    table.appendChild(row);
                });
            } else {
                // Add placeholder row if no fields
                const row = document.createElement('tr');
                const cell = document.createElement('td');
                cell.colSpan = 13;
                cell.textContent = 'No fields defined for this section';
                row.appendChild(cell);
                table.appendChild(row);
            }
            
            matrixContent.appendChild(table);
            
            // Add spacing between sections
            const spacer = document.createElement('div');
            spacer.className = 'section-spacer';
            matrixContent.appendChild(spacer);
        });
        
        // Initialize event handlers for newly created elements
        setupContentEditableFields();
        setupDropdowns();
    }

    // Handle toggle styling for active option
    function updateToggleLabels() {
        const toggleSwitch = document.getElementById('part-toggle');
        const part3Label = document.querySelector('.toggle-label.part3');
        const part9Label = document.querySelector('.toggle-label.part9');
        
        if (toggleSwitch.checked) {
            // Part 9 active
            part3Label.classList.remove('active');
            part9Label.classList.add('active');
        } else {
            // Part 3 active
            part3Label.classList.add('active');
            part9Label.classList.remove('active');
        }
    }

    // Function to load Matrix data
    function loadMatrix(part) {
        // Update current part
        OBC.state.currentPart = part;
        
        // Update toggle styling
        updateToggleLabels();
        
        // Update title for main OBC matrix section
        const matrixTitle = document.getElementById('matrix-title');
        if (part === 'part3') {
            matrixTitle.textContent = 'PART 3 - FIRE PROTECTION, OCCUPANT SAFETY AND ACCESSIBILITY';
        } else {
            matrixTitle.textContent = 'PART 9 - HOUSING AND SMALL BUILDINGS';
        }
        
        try {
            // Use embedded data instead of fetch
            // This can be loaded from a separate script tag that defines OBC.MatrixData
            let data;
            
            if (part === 'part3') {
                // Try to use pre-loaded data if available
                if (window.OBC.MatrixData && window.OBC.MatrixData.part3) {
                    // Filter out the redundant Building Information section
                    data = JSON.parse(JSON.stringify(window.OBC.MatrixData.part3));
                    data.sections = data.sections.filter(section => 
                        section.title !== "Building Information" || 
                        section === data.sections[0]
                    );
                    
                    // Add OBC references and column data
                    // This would ideally come from the CSV parsing, but we're adding it manually for demonstration
                    data.sections.forEach(section => {
                        if (section.title === "Major Occupancy Classification") {
                            section.obcReference = "3.1.2.";
                        }
                        if (section.title === "Superimposed Major Occupancies") {
                            section.obcReference = "3.2.2.7.";
                            if (section.fields && section.fields[0]) {
                                section.fields[0].columnI = "EXISTING";
                                section.fields[0].columnJ = "New";
                            }
                        }
                        if (section.title === "Building Area") {
                            section.obcReference = "[A] 1.4.1.2.";
                        }
                        if (section.title === "Building Height") {
                            section.obcReference = "[A] 1.4.1.2. & 3.2.1.1.";
                        }
                        if (section.title === "Building Classification") {
                            section.obcReference = "3.2.2.20-83.";
                        }
                        if (section.title === "Fire Resistance Rating") {
                            section.obcReference = "3.2.2.20-83., 3.2.1.2., 3.2.1.4., 3.2.2.15.";
                        }
                        if (section.title === "Occupant Load") {
                            section.obcReference = "3.1.17. and 3.1.17.1.(2)";
                        }
                    });
                    
                } else {
                    // Fallback to placeholder data
                    data = {
                        part: "part3",
                        title: "PART 3 - FIRE PROTECTION, OCCUPANT SAFETY AND ACCESSIBILITY",
                        sections: []
                    };
                    console.log('Matrix data for Part 3 not available. Using placeholder.');
                }
            } else {
                // Try to use pre-loaded data if available
                if (window.OBC.MatrixData && window.OBC.MatrixData.part9) {
                    // Filter out the redundant Building Information section
                    data = JSON.parse(JSON.stringify(window.OBC.MatrixData.part9));
                    data.sections = data.sections.filter(section => 
                        section.title !== "Building Information" || 
                        section === data.sections[0]
                    );
                    
                    // Add OBC references and column data for Part 9
                    data.sections.forEach(section => {
                        if (section.title === "Occupancy Classification") {
                            section.obcReference = "9.10.2.";
                        }
                        if (section.title === "Superimposed Major Occupancies") {
                            section.obcReference = "9.10.2.3.";
                            if (section.fields && section.fields[0]) {
                                section.fields[0].columnI = "EXISTING";
                                section.fields[0].columnJ = "New";
                            }
                        }
                        if (section.title === "Building Area") {
                            section.obcReference = "[A] 1.4.1.2.";
                        }
                        if (section.title === "Building Height") {
                            section.obcReference = "[A] 1.4.1.2. & 9.10.4.";
                        }
                        if (section.title === "Fire Resistance Rating") {
                            section.obcReference = "9.10.8. and 9.10.11.";
                        }
                        if (section.title === "Occupant Load") {
                            section.obcReference = "9.9.1.3., and Table 3.1.17.1.";
                        }
                    });
                } else {
                    // Fallback to placeholder data
                    data = {
                        part: "part9",
                        title: "PART 9 - HOUSING AND SMALL BUILDINGS",
                        sections: []
                    };
                    console.log('Matrix data for Part 9 not available. Using placeholder.');
                }
            }
            
            // Load matrix data
            loadMatrixFromJson(data, part);
        } catch (error) {
            console.error('Error loading matrix data:', error);
            document.getElementById('matrix-content').innerHTML = 
                '<div class="alert alert-danger m-3">Error loading matrix data. Please try again later.</div>';
        }
    }

    // Function to handle stamp image upload
    function setupStampUpload() {
        const stampBox = document.getElementById('stamp-box');
        const stampInput = document.getElementById('stamp-input');
        const signatureLabel = document.querySelector('.signature-label');
        
        if (stampBox && stampInput) {
            stampBox.addEventListener('click', function() {
                stampInput.click();
            });
            
            stampInput.addEventListener('change', function(e) {
                if (e.target.files && e.target.files[0]) {
                    const reader = new FileReader();
                    
                    reader.onload = function(event) {
                        const img = document.createElement('img');
                        img.src = event.target.result;
                        img.style.maxWidth = '100%';
                        img.style.maxHeight = '100%';
                        
                        // Hide the signature label
                        if (signatureLabel) {
                            signatureLabel.style.display = 'none';
                        }
                        
                        // Clear and append
                        stampBox.innerHTML = '';
                        stampBox.appendChild(img);
                        
                        // Update state
                        OBC.state.formData['stamp_image'] = event.target.result;
                        OBC.state.isDirty = true;
                    };
                    
                    reader.readAsDataURL(e.target.files[0]);
                }
            });
        }
    }

    // Initialize the application when DOM is loaded
    document.addEventListener('DOMContentLoaded', function() {
        // Set up toggle switch for part selection
        const partToggle = document.getElementById('part-toggle');
        
        partToggle.addEventListener('change', function() {
            // Check for unsaved changes
            if (OBC.state.isDirty) {
                if (confirm('You have unsaved changes. Are you sure you want to switch parts?')) {
                    loadMatrix(this.checked ? 'part9' : 'part3');
                } else {
                    // Revert toggle
                    this.checked = !this.checked;
                    updateToggleLabels();
                }
            } else {
                loadMatrix(this.checked ? 'part9' : 'part3');
            }
        });
        
        // Initialize the toggle labels
        updateToggleLabels();
        
        // Initialize the Building Information section
        setupContentEditableFields();
        
        // Set up stamp upload functionality
        setupStampUpload();
        
        // Set up reset button
        document.getElementById('reset-form-btn').addEventListener('click', function() {
            if(confirm('Are you sure you want to reset the form? All entered data will be lost.')) {
                // Clear form data
                OBC.state.formData = {};
                OBC.state.isDirty = false;
                
                // Clear all editable fields
                document.querySelectorAll('.user-input').forEach(field => {
                    field.textContent = '';
                });
                
                // Reset dropdowns
                document.querySelectorAll('select.form-select').forEach(select => {
                    select.selectedIndex = 0;
                });
                
                // Reset stamp box
                const stampBox = document.getElementById('stamp-box');
                if (stampBox) {
                    stampBox.innerHTML = '<div>Click to upload architect stamp</div>';
                }
                
                // Reload current matrix
                loadMatrix(OBC.state.currentPart);
            }
        });
        
        // Initialize import/export buttons
        document.getElementById('import-data-btn').addEventListener('click', function() {
            if (typeof OBC.FileHandler?.importData === 'function') {
                OBC.FileHandler.importData();
            } else {
                alert('Import functionality not yet implemented');
            }
        });
        
        document.getElementById('export-data-btn').addEventListener('click', function() {
            if (typeof OBC.FileHandler?.exportData === 'function') {
                OBC.FileHandler.exportData();
            } else {
                alert('Export functionality not yet implemented');
            }
        });
        
        // Initialize PDF download button
        document.getElementById('downloadPdf').addEventListener('click', function() {
            alert('PDF download functionality not yet implemented');
        });
        
        // Load the default matrix
        loadMatrix('part3');
        
        console.log('OBC Matrix initialized');
    });
})(); 