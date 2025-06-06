/**
 * OBC-init.js - Initialization script for OBC Matrix
 * Renders a static form structure using OBC.MatrixData.
 */

// Global namespace for OBC Matrix application
window.OBC = window.OBC || {};

// Initialize the application
(function(window) {
    'use strict';

    // Application state
    OBC.state = {
        currentPart: 'part3', // Default to Part 3
        isDirty: false
    };
    
    /**
     * Renders the matrix for a given part using the pre-defined data.
     * @param {string} part - 'part3' or 'part9'.
     */
    function renderMatrix(part) {
        const container = document.getElementById('obc-container');
        const matrixData = OBC.MatrixData[part];

        if (!container || !matrixData) {
            console.error('Container or matrix data not found for part:', part);
            container.innerHTML = '<div class="alert alert-danger">Matrix data could not be loaded.</div>';
            return;
        }
        container.innerHTML = '';

        const table = document.createElement('table');
        table.className = 'data-table';
        
        const colgroup = document.createElement('colgroup');
        const columnLetters = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N'];
        columnLetters.forEach(letter => {
            const col = document.createElement('col');
            col.className = `col-${letter.toLowerCase()}`;
            colgroup.appendChild(col);
        });
        table.appendChild(colgroup);

        const tbody = document.createElement('tbody');
        table.appendChild(tbody);

        matrixData.rows.forEach(rowData => {
            const tr = document.createElement('tr');
            tr.setAttribute('data-row-number', rowData.row);
            
            let currentColumnIndex = 0;
            const cellsForRow = rowData.cells;

            for (let i = 0; i < cellsForRow.length; i++) {
                const cellData = cellsForRow[i];
                const targetColIndex = columnLetters.indexOf(cellData.col.toUpperCase());

                // Add empty cells for any skipped columns
                while (currentColumnIndex < targetColIndex) {
                    tr.appendChild(document.createElement('td'));
                    currentColumnIndex++;
                }

                const td = document.createElement('td');
                td.className = `col-${cellData.col.toLowerCase()}`;

                if (cellData.colspan) td.colSpan = cellData.colspan;
                if (cellData.rowspan) td.rowSpan = cellData.rowspan;

                // Populate cell content based on type
                if (cellData.type === 'editable') {
                    td.setAttribute('contenteditable', 'true');
                    td.classList.add('user-input');
                    td.id = cellData.fieldId;
                    td.textContent = cellData.value || '';
                } else if (cellData.type === 'dropdown') {
                    const select = document.createElement('select');
                    select.className = 'form-select';
                    select.id = cellData.fieldId;
                    if (cellData.options) {
                        cellData.options.forEach(opt => {
                            const option = document.createElement('option');
                            option.value = opt;
                            option.textContent = opt;
                            select.appendChild(option);
                        });
                    }
                    td.appendChild(select);
                } else if (cellData.type === 'static') {
                    td.id = cellData.fieldId;
                    td.textContent = cellData.value || '';
                    td.classList.add('calculated-value');
                } else {
                    td.textContent = cellData.content || '';
                }
                tr.appendChild(td);
                currentColumnIndex += (cellData.colspan || 1);
            }

            // Fill remaining cells in the row if necessary
            while(currentColumnIndex < columnLetters.length) {
                tr.appendChild(document.createElement('td'));
                currentColumnIndex++;
            }

            tbody.appendChild(tr);
        });

        container.appendChild(table);
    }

    /**
     * Handles the toggling between Part 3 and Part 9.
     */
    function handleToggle() {
        const toggleSwitch = document.getElementById('part-toggle');
        const part3Label = document.querySelector('.toggle-label.part3');
        const part9Label = document.querySelector('.toggle-label.part9');

        if (!toggleSwitch || !part3Label || !part9Label) return;

        const isPart9 = toggleSwitch.checked;
        OBC.state.currentPart = isPart9 ? 'part9' : 'part3';
        
        if (isPart9) {
            part3Label.classList.remove('active');
            part9Label.classList.add('active');
        } else {
            part3Label.classList.add('active');
            part9Label.classList.remove('active');
        }
        
        renderMatrix(OBC.state.currentPart);
    }

    // Initialize the application when DOM is loaded
    document.addEventListener('DOMContentLoaded', function() {
        // Set up toggle switch for part selection
        const partToggle = document.getElementById('part-toggle');
        if (partToggle) {
            partToggle.addEventListener('change', handleToggle);
        }

        // Setup import/export buttons to talk to the FileHandler
        const importBtn = document.getElementById('import-data-btn');
        if (importBtn) {
            importBtn.addEventListener('click', (e) => {
                e.preventDefault();
                if (OBC.FileHandler && OBC.FileHandler.importData) {
                    OBC.FileHandler.importData();
                }
            });
        }
        
        // Initial render
        handleToggle();
        
        console.log('OBC Matrix initialized with static form structure.');
    });

})(window); 