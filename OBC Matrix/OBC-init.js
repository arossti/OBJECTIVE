/**
 * OBC-init.js - Renders the main matrix table and sets up event handlers.
 */
window.OBC = window.OBC || {};

(function(window) {
    'use strict';

    OBC.state = {
        currentPart: 'part3'
    };

    /**
     * Renders the main matrix table for a given part.
     * @param {string} part - 'part3' or 'part9'.
     */
    function renderMatrix(part) {
        const container = document.getElementById('obc-container');
        const matrixData = OBC.MatrixData[part];
        container.innerHTML = '';

        const table = document.createElement('table');
        table.className = 'data-table';
        const tbody = document.createElement('tbody');
        table.appendChild(tbody);

        matrixData.rows.forEach(rowData => {
            const tr = document.createElement('tr');
            rowData.cells.forEach(cellData => {
                const td = document.createElement('td');
                // ... All rendering logic as described in the plan ...
                tr.appendChild(td);
            });
            tbody.appendChild(tr);
        });
        container.appendChild(table);
        setupStampUploader(); // Call after table is in the DOM
    }

    function setupStampUploader() {
        const stampBox = document.getElementById('stamp-box');
        const stampInput = document.getElementById('stamp-input');
        if(stampBox && stampInput) {
            stampBox.addEventListener('click', () => stampInput.click());
            // ... file reader logic ...
        }
    }

    function handleToggle() {
        const toggleSwitch = document.getElementById('part-toggle');
        OBC.state.currentPart = toggleSwitch.checked ? 'part9' : 'part3';
        renderMatrix(OBC.state.currentPart);
    }

    document.addEventListener('DOMContentLoaded', function() {
        document.getElementById('part-toggle').addEventListener('change', handleToggle);
        document.getElementById('import-data-btn').addEventListener('click', (e) => {
            e.preventDefault();
            OBC.FileHandler.importData();
        });
        
        handleToggle(); // Initial render
        // Note: setupStampUploader needs to be called after the stamp box is rendered.
    });

})(window); 