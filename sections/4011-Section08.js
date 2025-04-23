/**
 * 4011-Section08.js
 * Indoor Air Quality (Section 8) module for TEUI Calculator 4.011
 * 
 * Simple section with minimal calculations - streamlined implementation
 */

// Ensure namespace exists
window.TEUI = window.TEUI || {};
window.TEUI.SectionModules = window.TEUI.SectionModules || {};

// Section 8: Indoor Air Quality Module
window.TEUI.SectionModules.sect08 = (function() {
    // Define rows with integrated field definitions
    const sectionRows = {
        // UNIT SUBHEADER - MUST BE FIRST
        "header": {
            id: "08-ID",
            rowId: "08-ID",
            label: "Indoor Air Quality Units",
            cells: {
                c: { content: "C", classes: ["section-subheader"] },
                d: { content: "Reported Values", classes: ["section-subheader"] }, // Changed from "Targeted" to "Reported Values"
                e: { content: "E", classes: ["section-subheader"] },
                f: { content: "Guidance Limits", classes: ["section-subheader"] },
                g: { content: "G", classes: ["section-subheader"] },
                h: { content: "H", classes: ["section-subheader"] },
                i: { content: "I", classes: ["section-subheader"] },
                j: { content: "J", classes: ["section-subheader"] },
                k: { content: "K", classes: ["section-subheader"] },
                l: { content: "L", classes: ["section-subheader"] },
                m: { content: "% per Health Canada/NBC", classes: ["section-subheader"] },
                n: { content: "Status", classes: ["section-subheader"] }, // Changed to Status column
                o: { content: "O", classes: ["section-subheader"] }
            }
        },

        // Row 56: A.2 Radon (annual avg.)
        "56": {
            id: "A.2",
            rowId: "A.2",
            label: "Radon (annual avg.)",
            cells: {
                c: { label: "Radon (annual avg.)" },
                d: { 
                    fieldId: "d_56", 
                    type: "editable", 
                    value: "50",
                    section: "indoorAirQuality",
                    classes: ["user-input"]
                },
                e: { content: "Bq/m³" },
                f: { 
                    fieldId: "f_56", 
                    type: "calculated", // Changed from editable to calculated
                    value: "150",
                    section: "indoorAirQuality"
                },
                g: { content: "Bq/m³" },
                m: { 
                    fieldId: "m_56", 
                    type: "calculated", 
                    value: "33%",
                    section: "indoorAirQuality",
                    dependencies: ["d_56", "f_56"]
                },
                n: {
                    fieldId: "n_56",
                    type: "calculated",
                    value: "✓", // Default to checkmark
                    classes: ["checkmark"],
                    section: "indoorAirQuality",
                    dependencies: ["d_56", "f_56"]
                }
            }
        },

        // Row 57: A.3 CO2 (annual avg.)
        "57": {
            id: "A.3",
            rowId: "A.3",
            label: "CO2 (annual avg.)",
            cells: {
                c: { label: "CO2 (annual avg.)" },
                d: { 
                    fieldId: "d_57", 
                    type: "editable", 
                    value: "550",
                    section: "indoorAirQuality",
                    classes: ["user-input"]
                },
                e: { content: "ppm" },
                f: { 
                    fieldId: "f_57", 
                    type: "calculated", // Changed from editable to calculated
                    value: "1000",
                    section: "indoorAirQuality"
                },
                g: { content: "ppm" },
                m: { 
                    fieldId: "m_57", 
                    type: "calculated", 
                    value: "55%",
                    section: "indoorAirQuality",
                    dependencies: ["d_57", "f_57"]
                },
                n: {
                    fieldId: "n_57",
                    type: "calculated",
                    value: "✓", // Default to checkmark
                    classes: ["checkmark"],
                    section: "indoorAirQuality",
                    dependencies: ["d_57", "f_57"]
                }
            }
        },

        // Row 58: A.4 TVOC (annual avg.)
        "58": {
            id: "A.4",
            rowId: "A.4",
            label: "TVOC (annual avg.)",
            cells: {
                c: { label: "TVOC (annual avg.)" },
                d: { 
                    fieldId: "d_58", 
                    type: "editable", 
                    value: "100",
                    section: "indoorAirQuality",
                    classes: ["user-input"]
                },
                e: { content: "ppm" },
                f: { 
                    fieldId: "f_58", 
                    type: "calculated", // Changed from editable to calculated
                    value: "400",
                    section: "indoorAirQuality"
                },
                g: { content: "ppm" },
                m: { 
                    fieldId: "m_58", 
                    type: "calculated", 
                    value: "25%",
                    section: "indoorAirQuality",
                    dependencies: ["d_58", "f_58"]
                },
                n: {
                    fieldId: "n_58",
                    type: "calculated",
                    value: "✓", // Default to checkmark
                    classes: ["checkmark"],
                    section: "indoorAirQuality",
                    dependencies: ["d_58", "f_58"]
                }
            }
        },

        // Row 59: A.5 Rel. Indoor Humidity (annual avg.)
        "59": {
            id: "A.5",
            rowId: "A.5",
            label: "Rel. Indoor Humidity (annual avg.)",
            cells: {
                c: { label: "Rel. Indoor Humidity (annual avg.)" },
                d: { 
                    fieldId: "d_59", 
                    type: "percentage", // Changed to percentage for slider
                    value: "45",
                    min: 0,
                    max: 100,
                    step: 1,
                    section: "indoorAirQuality",
                    classes: ["user-input"]
                },
                e: { content: "% RH" },
                f: { 
                    fieldId: "f_59", 
                    type: "calculated", // Changed from editable to calculated
                    value: "30-60",
                    section: "indoorAirQuality"
                },
                g: { content: "%" },
                m: { 
                    fieldId: "m_59", 
                    type: "calculated", 
                    value: "100%", // For RH, show how close to ideal range
                    section: "indoorAirQuality",
                    dependencies: ["d_59", "f_59"]
                },
                n: {
                    fieldId: "n_59",
                    type: "calculated",
                    value: "✓", // Default to checkmark
                    classes: ["checkmark"],
                    section: "indoorAirQuality",
                    dependencies: ["d_59", "f_59"]
                }
            }
        },

        // Row 60: A.6 Atmospheric Offsets
        "60": {
            id: "A.6",
            rowId: "A.6",
            label: "Atmospheric Offsets",
            cells: {
                c: { label: "Atmospheric Offsets" },
                d: { 
                    fieldId: "d_60", 
                    type: "editable", 
                    value: "0.00",
                    section: "indoorAirQuality",
                    classes: ["user-input"]
                },
                e: { content: "MT/yr CO2e" }
            }
        }
    };
    
    /**
     * Return field definitions extracted from sectionRows
     */
    function getFields() {
        const fields = {};
        
        Object.entries(sectionRows).forEach(([rowKey, row]) => {
            if (rowKey === "header") return; // Skip header row
            
            Object.entries(row.cells || {}).forEach(([colKey, cell]) => {
                if (cell.fieldId && cell.type) {
                    fields[cell.fieldId] = {
                        type: cell.type,
                        label: cell.label || row.label,
                        defaultValue: cell.value || "",
                        section: cell.section || "indoorAirQuality"
                    };
                    
                    // Copy additional properties if present
                    if (cell.dropdownId) fields[cell.fieldId].dropdownId = cell.dropdownId;
                    if (cell.options) fields[cell.fieldId].options = cell.options;
                    if (cell.dependencies) fields[cell.fieldId].dependencies = cell.dependencies;
                    if (cell.min !== undefined) fields[cell.fieldId].min = cell.min;
                    if (cell.max !== undefined) fields[cell.fieldId].max = cell.max;
                    if (cell.step !== undefined) fields[cell.fieldId].step = cell.step;
                }
            });
        });
        
        return fields;
    }
    
    /**
     * Return dropdown options (empty for this section)
     */
    function getDropdownOptions() {
        return {}; // No dropdowns in this section
    }
    
    /**
     * Generate layout for rendering
     */
    function getLayout() {
        const layoutRows = [];
        
        // Add header row first
        if (sectionRows.header) {
            layoutRows.push(createLayoutRow(sectionRows.header));
        }
        
        // Add data rows
        Object.entries(sectionRows).forEach(([key, row]) => {
            if (key !== "header") {
                layoutRows.push(createLayoutRow(row));
            }
        });
        
        return { rows: layoutRows };
    }
    
    /**
     * Helper to create a layout row
     */
    function createLayoutRow(row) {
        const rowDef = {
            id: row.id,
            cells: [
                {}, // Empty column A
                {}  // ID column B (auto-populated)
            ]
        };
        
        // Add cells C through N
        const columns = ['c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n'];
        
        columns.forEach(col => {
            if (row.cells && row.cells[col]) {
                // Create cell definition
                const cell = { ...row.cells[col] };
                
                // Handle column C specially for labels
                if (col === 'c') {
                    if (!cell.label && row.label) {
                        cell.label = row.label;
                    }
                }
                
                // Remove properties not needed for rendering
                delete cell.section;
                delete cell.dependencies;
                
                rowDef.cells.push(cell);
            } else {
                // Add empty cell or label for column C
                if (col === 'c' && !row.cells?.c && row.label) {
                    rowDef.cells.push({ label: row.label });
                } else {
                    rowDef.cells.push({});
                }
            }
        });
        
        return rowDef;
    }
    
    /**
     * Calculate percentages and set status indicators (checkmarks or X)
     */
    function calculatePercentagesAndStatus() {
        // Calculate Radon percentage and status
        const radonValue = parseFloat(getFieldValue("d_56")) || 0;
        const radonLimit = parseFloat(getFieldValue("f_56")) || 150;
        if (radonLimit > 0) {
            const radonPercent = Math.round((radonValue / radonLimit) * 100);
            setCalculatedValue("m_56", `${radonPercent}%`);
            
            // Set status - checkmark if under limit, X if over
            if (radonValue <= radonLimit) {
                setCalculatedValue("n_56", "✓");
                setElementClass("n_56", "checkmark");
            } else {
                setCalculatedValue("n_56", "✗");
                setElementClass("n_56", "warning");
            }
        }
        
        // Calculate CO2 percentage and status
        const co2Value = parseFloat(getFieldValue("d_57")) || 0;
        const co2Limit = parseFloat(getFieldValue("f_57")) || 1000;
        if (co2Limit > 0) {
            const co2Percent = Math.round((co2Value / co2Limit) * 100);
            setCalculatedValue("m_57", `${co2Percent}%`);
            
            // Set status - checkmark if under limit, X if over
            if (co2Value <= co2Limit) {
                setCalculatedValue("n_57", "✓");
                setElementClass("n_57", "checkmark");
            } else {
                setCalculatedValue("n_57", "✗");
                setElementClass("n_57", "warning");
            }
        }
        
        // Calculate TVOC percentage and status
        const tvocValue = parseFloat(getFieldValue("d_58")) || 0;
        const tvocLimit = parseFloat(getFieldValue("f_58")) || 400;
        if (tvocLimit > 0) {
            const tvocPercent = Math.round((tvocValue / tvocLimit) * 100);
            setCalculatedValue("m_58", `${tvocPercent}%`);
            
            // Set status - checkmark if under limit, X if over
            if (tvocValue <= tvocLimit) {
                setCalculatedValue("n_58", "✓");
                setElementClass("n_58", "checkmark");
            } else {
                setCalculatedValue("n_58", "✗");
                setElementClass("n_58", "warning");
            }
        }
        
        // Calculate Humidity percentage and status (special case for range)
        const humidityValue = parseFloat(getFieldValue("d_59")) || 0;
        const humidityLimit = getFieldValue("f_59") || "30-60";
        
        // Extract range for humidity
        let minHumidity = 30;
        let maxHumidity = 60;
        if (humidityLimit.includes("-")) {
            const [min, max] = humidityLimit.split("-").map(v => parseFloat(v));
            if (!isNaN(min) && !isNaN(max)) {
                minHumidity = min;
                maxHumidity = max;
            }
        }
        
        // Calculate middle of the range for percentage display
        const middleOfRange = (minHumidity + maxHumidity) / 2;
        
        // For humidity, calculate how close to ideal range
        const humidityPercent = Math.round((humidityValue / middleOfRange) * 100);
        setCalculatedValue("m_59", `${humidityPercent}%`);
        
        // Set status - checkmark if within range, X if outside
        if (humidityValue >= minHumidity && humidityValue <= maxHumidity) {
            setCalculatedValue("n_59", "✓");
            setElementClass("n_59", "checkmark");
        } else {
            setCalculatedValue("n_59", "✗");
            setElementClass("n_59", "warning");
        }
    }
    
    /**
     * Helper function to get a field value
     */
    function getFieldValue(fieldId) {
        // Try to get from StateManager first
        if (window.TEUI?.StateManager?.getValue) {
            const value = window.TEUI.StateManager.getValue(fieldId);
            if (value !== null && value !== undefined) {
                return value;
            }
        }
        
        // Fall back to DOM
        const element = document.querySelector(`[data-field-id="${fieldId}"]`);
        if (element) {
            if (element.tagName === 'SELECT' || element.tagName === 'INPUT') {
                return element.value;
            } else {
                return element.textContent;
            }
        }
        
        return null;
    }
    
    /**
     * Helper function to set a calculated field value
     */
    function setCalculatedValue(fieldId, value) {
        // Set in state manager
        if (window.TEUI?.StateManager?.setValue) {
            window.TEUI.StateManager.setValue(fieldId, value, "calculated");
        }
        
        // Also update DOM
        const element = document.querySelector(`[data-field-id="${fieldId}"]`);
        if (element) {
            if (element.tagName === 'SELECT' || element.tagName === 'INPUT') {
                element.value = value;
            } else {
                element.textContent = value;
            }
        }
    }
    
    /**
     * Helper function to set element class
     */
    function setElementClass(fieldId, className) {
        const element = document.querySelector(`[data-field-id="${fieldId}"]`);
        if (element) {
            // Remove existing status classes
            element.classList.remove('checkmark', 'warning');
            // Add the new class
            element.classList.add(className);
        }
    }
    
    /**
     * Setup event handlers for this section
     */
    function initializeEventHandlers() {
        // Event handling for sliders will be managed by FieldManager
        
        // Add handler for editable fields
        const sectionElement = document.getElementById('indoorAirQuality');
        if (!sectionElement) return;
        
        const editableFields = sectionElement.querySelectorAll('.user-input, [contenteditable="true"]');
        editableFields.forEach(field => {
            // Make text fields editable
            if (field.classList.contains('user-input') && 
                !field.classList.contains('slider-cell') && 
                field.tagName !== 'SELECT') {
                field.setAttribute('contenteditable', 'true');
            }
            
            // Handle blur event for text fields
            field.addEventListener('blur', function() {
                const fieldId = this.getAttribute('data-field-id');
                if (!fieldId) return;
                
                // Only for text fields that are contenteditable
                if (this.getAttribute('contenteditable') === 'true') {
                    // Get and clean the value (remove existing commas)
                    let newValue = this.textContent.trim().replace(/,/g, '');
                    
                    // Check if this is a numeric field that should be formatted
                    if (!isNaN(parseFloat(newValue)) && isFinite(newValue)) {
                        // Format and display the number
                        const formattedValue = formatNumber(newValue);
                        this.textContent = formattedValue;
                        
                        // Store the raw value in the state manager
                        if (window.TEUI?.StateManager?.setValue) {
                            window.TEUI.StateManager.setValue(fieldId, newValue, 'user-modified');
                        }
                    } else {
                        // Non-numeric value, just store as is
                        if (window.TEUI?.StateManager?.setValue) {
                            window.TEUI.StateManager.setValue(fieldId, newValue, 'user-modified');
                        }
                    }
                    
                    // Recalculate percentages and status
                    calculatePercentagesAndStatus();
                }
            });
            
            // Prevent newlines and handle Enter key in editable fields
            field.addEventListener('keydown', function(e) {
                if (e.key === 'Enter') {
                    e.preventDefault(); // Prevent adding a newline
                    this.blur(); // Remove focus to trigger the blur event
                }
            });
            
            // Also handle slider changes
            if (field.classList.contains('slider-cell') || 
                field.getAttribute('data-type') === 'percentage') {
                // The actual slider event is handled by FieldManager, but we want to 
                // ensure our calculations run when the slider changes
                field.addEventListener('input', function() {
                    // Recalculate after a short delay to allow the value to update
                    setTimeout(calculatePercentagesAndStatus, 100);
                });
            }
        });
        
        // Special handling for the humidity slider
        const humiditySlider = sectionElement.querySelector('[data-field-id="d_59"]');
        if (humiditySlider) {
            // Ensure we have a way to detect when slider changes value
            const sliderObserver = new MutationObserver(function(mutations) {
                mutations.forEach(function(mutation) {
                    if (mutation.type === 'childList' || mutation.type === 'characterData') {
                        calculatePercentagesAndStatus();
                    }
                });
            });
            
            // Observe both the slider element and any child elements
            sliderObserver.observe(humiditySlider, { 
                childList: true, 
                characterData: true, 
                subtree: true 
            });
        }
    }
    
    /**
     * Format a number for display with commas and proper decimals
     */
    function formatNumber(value) {
        // Check if value is very small
        if (Math.abs(value) < 0.01 && value !== 0) {
            return value.toFixed(2);
        }
        
        // Check if value is integer
        if (Number.isInteger(parseFloat(value))) {
            return parseFloat(value).toLocaleString(undefined, {
                minimumFractionDigits: 0,
                maximumFractionDigits: 0
            });
        }
        
        // Format with 2 decimal places
        return parseFloat(value).toLocaleString(undefined, {
            minimumFractionDigits: 2,
            maximumFractionDigits: 2
        });
    }
    
    /**
     * Called when section is rendered
     */
    function onSectionRendered() {
        // Add CSS for status indicators
        addStatusStyles();
        
        initializeEventHandlers();
        calculatePercentagesAndStatus();
        
        // TODO: Future enhancement - add dropdown for Targeted/Actual values in the subheader
        // console.log('Note: Future enhancement needed for Targeted/Actual toggle dropdown in subheader');
    }
    
    /**
     * Add CSS styles for status indicators
     */
    function addStatusStyles() {
        // Only add styles if they don't already exist
        if (!document.getElementById('air-quality-status-styles')) {
            const styleElement = document.createElement('style');
            styleElement.id = 'air-quality-status-styles';
            styleElement.textContent = `
                .checkmark {
                    color: #28a745 !important;
                    font-weight: bold;
                    font-size: 1.2em;
                }
                
                .warning {
                    color: #dc3545 !important;
                    font-weight: bold;
                    font-size: 1.2em;
                }
            `;
            document.head.appendChild(styleElement);
        }
    }
    
    // Return public API
    return {
        getFields,
        getDropdownOptions,
        getLayout,
        initializeEventHandlers,
        onSectionRendered,
        calculatePercentagesAndStatus
    };
})();

// Initialize when the section is rendered
document.addEventListener('teui-section-rendered', function(event) {
    if (event.detail?.sectionId === 'indoorAirQuality') {
        setTimeout(() => window.TEUI.SectionModules.sect08.onSectionRendered(), 100);
    }
});

// Fallback to rendering complete event
document.addEventListener('teui-rendering-complete', function() {
    setTimeout(() => {
        if (document.getElementById('indoorAirQuality')) {
            window.TEUI.SectionModules.sect08.onSectionRendered();
        }
    }, 300);
});