/**
 * 4012-SectionRenderer.js
 * Grid-based section renderer for TEUI 4.012
 * Replaces table layouts with CSS Grid
 */

(function() {
    'use strict';
    
    // Ensure namespace exists
    window.TEUI = window.TEUI || {};
    window.TEUI.v4012 = window.TEUI.v4012 || {};
    
    // Section Renderer Module
    const SectionRenderer = {
        // Render a section based on layout definition
        renderSection: function(sectionId, layout) {
            const sectionElement = document.getElementById(sectionId);
            if (!sectionElement) {
                console.error(`Section element not found: ${sectionId}`);
                return;
            }
            
            const contentElement = sectionElement.querySelector('.section-content');
            if (!contentElement) {
                console.error(`Section content element not found for: ${sectionId}`);
                return;
            }
            
            // Clear existing content
            contentElement.innerHTML = '';
            
            // Create grid container
            const gridContainer = document.createElement('div');
            gridContainer.className = 'section-grid';
            
            // Render each row
            if (layout.rows && Array.isArray(layout.rows)) {
                layout.rows.forEach((row, index) => {
                    const rowElement = this.renderRow(row, index);
                    if (rowElement) {
                        gridContainer.appendChild(rowElement);
                    }
                });
            }
            
            contentElement.appendChild(gridContainer);
        },
        
        // Render a single row
        renderRow: function(row, rowIndex) {
            const rowElement = document.createElement('div');
            rowElement.className = 'section-row';
            if (row.id) {
                rowElement.setAttribute('data-row-id', row.id);
            }
            
            // Add row number in column A
            const rowNumberCell = document.createElement('div');
            rowNumberCell.className = 'section-cell col-a';
            rowNumberCell.textContent = rowIndex > 0 ? rowIndex : '';
            rowElement.appendChild(rowNumberCell);
            
            // Add ID in column B
            const idCell = document.createElement('div');
            idCell.className = 'section-cell col-b';
            idCell.textContent = row.id || '';
            rowElement.appendChild(idCell);
            
            // Render cells for columns C through N
            const columns = ['c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n'];
            
            columns.forEach(col => {
                const cellDef = row.cells?.[col] || {};
                const cellElement = this.renderCell(cellDef, col);
                
                // Handle colspan
                if (cellDef.colspan && cellDef.colspan > 1) {
                    cellElement.classList.add(`colspan-${cellDef.colspan}`);
                }
                
                rowElement.appendChild(cellElement);
            });
            
            return rowElement;
        },
        
        // Render a single cell
        renderCell: function(cellDef, column) {
            const cellElement = document.createElement('div');
            cellElement.className = `section-cell col-${column}`;
            
            // Add custom classes
            if (cellDef.classes && Array.isArray(cellDef.classes)) {
                cellElement.classList.add(...cellDef.classes);
            }
            
            // Handle different cell types
            if (cellDef.type === 'dropdown') {
                const select = this.createDropdown(cellDef);
                cellElement.appendChild(select);
            } else if (cellDef.type === 'editable') {
                const editable = this.createEditable(cellDef);
                cellElement.appendChild(editable);
            } else if (cellDef.type === 'slider') {
                const slider = this.createSlider(cellDef);
                cellElement.appendChild(slider);
            } else if (cellDef.type === 'calculated' || cellDef.type === 'derived') {
                const calculated = this.createCalculated(cellDef);
                cellElement.appendChild(calculated);
            } else if (cellDef.content) {
                // Plain text content
                cellElement.textContent = cellDef.content;
            }
            
            return cellElement;
        },
        
        // Create dropdown element
        createDropdown: function(cellDef) {
            const select = document.createElement('select');
            select.className = 'form-select form-select-sm';
            
            if (cellDef.dropdownId) {
                select.setAttribute('data-dropdown-id', cellDef.dropdownId);
            }
            if (cellDef.fieldId) {
                select.setAttribute('data-field-id', cellDef.fieldId);
            }
            
            // Add options
            if (cellDef.options && Array.isArray(cellDef.options)) {
                cellDef.options.forEach(option => {
                    const optionElement = document.createElement('option');
                    optionElement.value = option.value;
                    optionElement.textContent = option.name || option.value;
                    
                    if (option.value === cellDef.value) {
                        optionElement.selected = true;
                    }
                    
                    select.appendChild(optionElement);
                });
            }
            
            return select;
        },
        
        // Create editable element
        createEditable: function(cellDef) {
            const span = document.createElement('span');
            span.className = 'editable';
            span.contentEditable = true;
            span.textContent = cellDef.value || '0';
            
            if (cellDef.fieldId) {
                span.setAttribute('data-field-id', cellDef.fieldId);
            }
            
            // Add custom classes
            if (cellDef.classes && Array.isArray(cellDef.classes)) {
                span.classList.add(...cellDef.classes);
            }
            
            return span;
        },
        
        // Create slider element
        createSlider: function(cellDef) {
            const container = document.createElement('div');
            container.className = 'slider-container';
            
            const slider = document.createElement('input');
            slider.type = 'range';
            slider.className = 'form-range';
            slider.min = cellDef.min || 0;
            slider.max = cellDef.max || 100;
            slider.step = cellDef.step || 1;
            slider.value = cellDef.value || 50;
            
            if (cellDef.fieldId) {
                slider.setAttribute('data-field-id', cellDef.fieldId);
            }
            
            const valueDisplay = document.createElement('span');
            valueDisplay.className = 'slider-value ms-2';
            valueDisplay.textContent = slider.value;
            
            // Update display on slider change
            slider.addEventListener('input', function() {
                valueDisplay.textContent = this.value;
            });
            
            container.appendChild(slider);
            container.appendChild(valueDisplay);
            
            return container;
        },
        
        // Create calculated/derived element
        createCalculated: function(cellDef) {
            const span = document.createElement('span');
            span.className = 'calculated-value';
            span.textContent = cellDef.value || '0';
            
            if (cellDef.fieldId) {
                span.setAttribute('data-field-id', cellDef.fieldId);
            }
            
            // Add custom classes
            if (cellDef.classes && Array.isArray(cellDef.classes)) {
                span.classList.add(...cellDef.classes);
            }
            
            return span;
        }
    };
    
    // Expose the module
    window.TEUI.v4012.SectionRenderer = SectionRenderer;
})(); 