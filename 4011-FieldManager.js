/**
 * 4011-FieldManager.js
 * 
 * V3 of a Lightweight field management system that coordinates section modules
 * which are pre-loaded via script tags in the HTML.
 * 
 * This approach avoids dynamic script loading security restrictions
 * while maintaining modularity.
 */

window.TEUI = window.TEUI || {};

// Ensure section modules namespace exists
window.TEUI.SectionModules = window.TEUI.SectionModules || {};

// FieldManager Module
TEUI.FieldManager = (function() {
    
    // Section mapping from UI IDs to internal section module IDs
    const sections = {
        "keyValues": "sect01",
        "buildingInfo": "sect02",  
        "climateCalculations": "sect03",
        "actualTargetEnergy": "sect04",
        "emissions": "sect05",
        "onSiteEnergy": "sect06",
        "waterUse": "sect07",
        "indoorAirQuality": "sect08",
        "occupantInternalGains": "sect09",
        "envelopeRadiantGains": "sect10",
        "envelopeTransmissionLosses": "sect11",
        "volumeSurfaceMetrics": "sect12",
        "mechanicalLoads": "sect13",
        "tediSummary": "sect14",
        "teuiSummary": "sect15",
        "sankeyDiagram": "sect16",
        "dependencyDiagram": "sect17",
        "notes": "sect18"
    };
    
    // Combined field registry (populated from section modules)
    let allFields = {};
    
    // Dropdown options registry (populated from section modules)
    let dropdownOptions = {};
    
    // Track initialization state
    let isInitialized = false;
    
    /**
     * Create an empty module for sections without implementations
     * @param {string} sectionId - Section identifier
     * @returns {Object} - Empty module with required methods
     */
    function createEmptyModule(sectionId) {
        // console.log(`Creating empty module for ${sectionId}`);
        return {
            getFields: function() { return {}; },
            getDropdownOptions: function() { return {}; },
            getLayout: function() { 
                return { 
                    rows: [
                        {
                            id: `${sectionId} Empty`,
                            cells: [
                                {}, // Empty column A
                                {}, // ID column B
                                { content: "This section is currently empty." }, // C
                                {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {} // Empty columns D through N
                            ]
                        }
                    ] 
                }; 
            }
        };
    }
    
    /**
     * Initialize all section modules
     * Uses modules pre-loaded by script tags in the HTML
     */
    function initializeSections() {
        // console.log('Initializing section modules...');
        
        // Process each section, using the already loaded module or creating a fallback
        Object.entries(sections).forEach(([uiSectionId, moduleSectionId]) => {
            // Check if the module exists in the global namespace
            if (TEUI.SectionModules[moduleSectionId]) {
                // console.log(`Using pre-loaded module for ${moduleSectionId}`);
                
                // Collect fields from this section
                try {
                    if (TEUI.SectionModules[moduleSectionId].getFields) {
                        const sectionFields = TEUI.SectionModules[moduleSectionId].getFields();
                        Object.assign(allFields, sectionFields);
                        // console.log(`Added ${Object.keys(sectionFields).length} fields from ${moduleSectionId}`);
                    }
                    
                    // Collect dropdown options from this section
                    if (TEUI.SectionModules[moduleSectionId].getDropdownOptions) {
                        const sectionOptions = TEUI.SectionModules[moduleSectionId].getDropdownOptions();
                        Object.assign(dropdownOptions, sectionOptions);
                    }
                } catch (e) {
                    console.error(`Error processing module ${moduleSectionId}:`, e);
                }
            } else {
                // Create fallback empty module
                console.warn(`Module ${moduleSectionId} not found, using fallback`);
                TEUI.SectionModules[moduleSectionId] = createEmptyModule(moduleSectionId);
            }
        });
        
        // console.log('All section modules initialized');
        isInitialized = true;
        
        // Make fields available globally for backward compatibility
        window.TEUI.fields = allFields;
    }
    
    /**
     * Get all field definitions
     * @returns {Object} - All field definitions
     */
    function getAllFields() {
        return allFields;
    }
    
    /**
     * Get fields for a specific section
     * @param {string} sectionId - Section ID (original name, e.g., "buildingInfo")
     * @returns {Object} - Field definitions for the section
     */
    function getFieldsBySection(sectionId) {
        const internalSectionId = sections[sectionId];
        if (!internalSectionId || !TEUI.SectionModules[internalSectionId]) {
            return {};
        }
        
        try {
            return TEUI.SectionModules[internalSectionId].getFields() || {};
        } catch (e) {
            console.error(`Error getting fields for section ${sectionId}:`, e);
            return {};
        }
    }
    
    /**
     * Get a specific field definition
     * @param {string} fieldId - Field ID (e.g., "d_12")
     * @returns {Object|null} - Field definition or null if not found
     */
    function getField(fieldId) {
        return allFields[fieldId] || null;
    }
    
    /**
     * Get dropdown options for a specific dropdown
     * @param {string} dropdownId - Dropdown ID (e.g., "dd_d_12")
     * @param {Object} context - Context for dynamic options
     * @returns {Array} - Dropdown options
     */
    function getDropdownOptions(dropdownId, context = {}) {
        // First check if there's a field with this dropdown ID
        const fieldId = Object.keys(allFields).find(id => 
            allFields[id].dropdownId === dropdownId
        );
        
        // If field found and it has options, use those first
        if (fieldId && allFields[fieldId].options) {
            return allFields[fieldId].options;
        }
        
        // If field has getOptions function, use that
        if (fieldId && allFields[fieldId].getOptions) {
            const parentValue = context.parentValue || 
                (allFields[fieldId].dependencies && allFields[fieldId].dependencies.length > 0 ? 
                TEUI.StateManager?.getValue(allFields[fieldId].dependencies[0]) : null);
                
            try {
                return allFields[fieldId].getOptions(parentValue);
            } catch (e) {
                console.error(`Error getting options for field ${fieldId}:`, e);
                return [];
            }
        }
        
        // Otherwise fall back to the central registry
        const options = dropdownOptions[dropdownId];
        
        // Handle nested dropdown options
        if (typeof options === 'object' && !Array.isArray(options) && context.parentValue) {
            return options[context.parentValue] || [];
        }
        
        return options || [];
    }
    
    /**
     * Get layout definition for a section
     * @param {string} sectionId - Section ID (original name, e.g., "buildingInfo")
     * @returns {Object|null} - Layout definition or null if not found
     */
    function getLayoutForSection(sectionId) {
        const internalSectionId = sections[sectionId];
        if (!internalSectionId || !TEUI.SectionModules[internalSectionId]) {
            return null;
        }
        
        try {
            return TEUI.SectionModules[internalSectionId].getLayout();
        } catch (error) {
            console.error(`Error getting layout for section ${sectionId}:`, error);
            return {
                rows: [
                    {
                        id: `${sectionId} Error`,
                        cells: [
                            {}, // Empty column A
                            {}, // ID column B
                            { content: `Error loading section: ${error.message}` }, // C
                            {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {} // Empty columns D through N
                        ]
                    }
                ]
            };
        }
    }
    
    /**
     * Initialize event handlers for a specific section
     * @param {string} sectionId - Section ID
     */
    function initializeSectionEventHandlers(sectionId) {
        // console.log(`[FieldManager] Initializing event handlers for section: ${sectionId}`);
        const internalSectionId = sections[sectionId];
        if (!internalSectionId || !TEUI.SectionModules[internalSectionId]) {
            console.warn(`Module not found for section ${sectionId}`);
            return;
        }
        
        const sectionModule = TEUI.SectionModules[internalSectionId];
        
        // Call module-specific event handler initialization if it exists
        if (sectionModule.initializeEventHandlers) {
            // console.log(`Initializing module-specific event handlers for section ${sectionId}`);
            try {
                sectionModule.initializeEventHandlers();
            } catch (error) {
                 console.error(`Error in ${sectionId} module initializeEventHandlers:`, error);
            }
        }
        
        // Also call onSectionRendered if it exists (often used for initialization)
        if (sectionModule.onSectionRendered) {
            // console.log(`Calling onSectionRendered for section ${sectionId}`);
             try {
                sectionModule.onSectionRendered();
            } catch (error) {
                 console.error(`Error in ${sectionId} module onSectionRendered:`, error);
            }
        }

        // console.log(`[FieldManager] Finished initializing event handlers for section: ${sectionId}`);
    }

    /**
     * Render a specific section
     * @param {string} sectionId - Section ID (original name, e.g., "buildingInfo")
     * @returns {boolean} - True if section was rendered successfully
     */
    function renderSection(sectionId) {
        // Make sure initialization is complete
        if (!isInitialized) {
            // console.log(`Initializing before rendering section ${sectionId}`);
            initializeSections();
        }
        
        const internalSectionId = sections[sectionId];
        if (!internalSectionId) {
            console.error(`Unknown section ID: ${sectionId}`);
            return false;
        }
        
        if (!TEUI.SectionModules[internalSectionId]) {
            console.error(`Module not found for section ${sectionId} (${internalSectionId})`);
            return false;
        }
        
        // console.log(`Rendering section: ${sectionId} using module ${internalSectionId}`);
        
        try {
            const layout = getLayoutForSection(sectionId);
            if (!layout) {
                console.error(`No layout available for section ${sectionId}`);
                return false;
            }
            
            generateSectionContent(sectionId, layout);
            
            // Initialize dropdowns and sliders
            initializeDropdownsFromFields(sectionId);
            initializeSliders(sectionId);
            
            // Initialize section-specific event handlers
            initializeSectionEventHandlers(sectionId);
            
            // Dispatch section-specific rendering complete event
            document.dispatchEvent(new CustomEvent(`teui-section-rendered`, { 
                detail: { sectionId: sectionId } 
            }));
            
            return true;
        } catch (error) {
            console.error(`Error rendering section ${sectionId}:`, error);
            return false;
        }
    }
    
    /**
     * Render all sections
     */
    function renderAllSections() {
        // console.log('Rendering all sections...');
        
        // Make sure initialization is complete
        if (!isInitialized) {
            initializeSections();
        }
        
        // Render each section
        Object.keys(sections).forEach(sectionId => {
            renderSection(sectionId);
        });
        
        // Dispatch event to notify other components that rendering is complete
        document.dispatchEvent(new CustomEvent('teui-rendering-complete', { 
            detail: { message: 'All sections rendered successfully' } 
        }));
        
        return true;
    }
    
    /**
     * Generate content for a section using the layout definition
     * @param {string} sectionId - Section ID
     * @param {Object} layoutDefinition - Layout definition
     */
    function generateSectionContent(sectionId, layoutDefinition) {
        const sectionElement = document.getElementById(sectionId);
        
        if (!sectionElement) {
            // console.warn(`Section element with ID '${sectionId}' not found in DOM`);
            return;
        }
        
        const contentContainer = sectionElement.querySelector('.section-content');
        if (!contentContainer) {
            // console.warn(`Content container not found in section '${sectionId}'`);
            return;
        }
        
        // If there's a render hook, use it instead of creating a new table
        const renderHook = contentContainer.querySelector(`[data-render-section="${sectionId}"]`);
        const containerElement = renderHook || contentContainer;
        
        // Create table if it doesn't exist
        let tableElement = containerElement.querySelector('.data-table');
        if (!tableElement) {
            tableElement = document.createElement('table');
            tableElement.className = 'data-table';
            tableElement.innerHTML = `
                <colgroup>
                    <col class="col-a">
                    <col class="col-b">
                    <col class="col-c">
                    <col class="col-d">
                    <col class="col-e">
                    <col class="col-f">
                    <col class="col-g">
                    <col class="col-h">
                    <col class="col-i">
                    <col class="col-j">
                    <col class="col-k">
                    <col class="col-l">
                    <col class="col-m">
                    <col class="col-n">
                </colgroup>
                <tbody></tbody>
            `;
            
            containerElement.appendChild(tableElement);
        }
        
        // Use the layout definition if provided, otherwise generate one
        const layout = layoutDefinition || generateLayoutDefinition(sectionId, getFieldsBySection(sectionId));
        
        if (layout && layout.rows) {
            const tbody = tableElement.querySelector('tbody');
            
            // Clear existing content
            tbody.innerHTML = '';
            
            // Generate rows based on layout definition
            layout.rows.forEach(rowDef => {
                const rowElement = document.createElement('tr');
                rowElement.setAttribute('data-id', rowDef.id);
                
                // Generate cells based on layout definition
                rowDef.cells.forEach((cellDef, index) => {
                    // Check if this is column C (description column) with content but no label
                    if (index === 2 && cellDef.content && cellDef.type === 'label' && !cellDef.label) {
                        // Convert to label format
                        cellDef.label = cellDef.content;
                        delete cellDef.content;
                        delete cellDef.type;
                    }
                    
                    const cellElement = document.createElement('td');
                    
                    // Apply column class
                    const colLetter = String.fromCharCode(97 + index); // a, b, c, etc.
                    cellElement.className = `col-${colLetter}`;
                    
                    // Add specific classes
                    if (index === 0) {
                        // Empty first column
                    } else if (index === 1) {
                        // ID column
                        cellElement.classList.add('id-cell');
                        cellElement.textContent = rowDef.id;
                    } else if (index === 2) {
                        // Description column
                        cellElement.classList.add('description-cell');
                        cellElement.textContent = cellDef.label || '';
                    } else {
                        // Value columns with enhanced dropdown handling
                        if (cellDef.fieldId) {
                            const fieldId = cellDef.fieldId;
                            cellElement.setAttribute('data-field-id', fieldId);
                            
                            if (cellDef.type === 'dropdown' || cellDef.dropdownId) {
                                // Create a select element
                                const selectElement = document.createElement('select');
                                selectElement.className = 'form-select form-select-sm';
                                selectElement.setAttribute('data-field-id', fieldId);
                                
                                if (cellDef.dropdownId) {
                                    selectElement.setAttribute('data-dropdown-id', cellDef.dropdownId);
                                }
                                
                                cellElement.appendChild(selectElement);
                                cellElement.classList.add('dropdown-cell');
                                
                            } else if (cellDef.type === 'year_slider' || cellDef.type === 'percentage' || cellDef.type === 'coefficient') {
                                // For sliders, just create a placeholder that will be replaced by initializeSliders
                                cellElement.classList.add('slider-cell');
                                cellElement.textContent = cellDef.value || '0';
                                
                                // Preserve attributes for slider initialization
                                if (cellDef.min) cellElement.setAttribute('data-min', cellDef.min);
                                if (cellDef.max) cellElement.setAttribute('data-max', cellDef.max);
                                if (cellDef.step) cellElement.setAttribute('data-step', cellDef.step);
                                cellElement.setAttribute('data-type', cellDef.type);
                            } else if (cellDef.type === 'generic_slider') { 
                                // Generic slider - similar setup but no value display needed here
                                cellElement.classList.add('slider-cell');
                                // Render just the slider input placeholder
                                cellElement.innerHTML = `<input type="range" class="form-range area-adjust-slider" data-field-id="${fieldId}">`; // Use class from Section02 definition
                                // Preserve attributes for slider initialization
                                if (cellDef.min !== undefined) cellElement.setAttribute('data-min', cellDef.min);
                                if (cellDef.max !== undefined) cellElement.setAttribute('data-max', cellDef.max);
                                if (cellDef.step !== undefined) cellElement.setAttribute('data-step', cellDef.step);
                                if (cellDef.value !== undefined) cellElement.setAttribute('data-value', cellDef.value); // Store default value
                                cellElement.setAttribute('data-type', cellDef.type);
                            } else if (cellDef.type === 'calculated' || cellDef.fieldId.startsWith('cf_')) {
                                cellElement.classList.add('calculated-value');
                                cellElement.textContent = cellDef.value || '0';
                                
                            } else if (cellDef.type === 'derived' || cellDef.fieldId.startsWith('dv_')) {
                                cellElement.classList.add('derived-value');
                                cellElement.textContent = cellDef.value || '0';
                                
                            } else if (cellDef.type === 'editable') {
                                cellElement.classList.add('editable', 'user-input');
                                cellElement.textContent = cellDef.value || '0';
                                cellElement.setAttribute('contenteditable', 'true');
                            } else if (cellDef.type === 'number') {
                                // Create a number input element
                                const inputElement = document.createElement('input');
                                inputElement.type = 'number';
                                inputElement.className = 'form-control form-control-sm user-input'; // Keep the styling for blue cursor
                                inputElement.setAttribute('data-field-id', fieldId);
                                inputElement.value = cellDef.value || '0.00';

                                // Add step attribute if defined in cellDef (optional)
                                if (cellDef.step !== undefined) {
                                    inputElement.step = cellDef.step;
                                }
                                // Add min/max attributes if defined (optional)
                                if (cellDef.min !== undefined) {
                                    inputElement.min = cellDef.min;
                                }
                                if (cellDef.max !== undefined) {
                                    inputElement.max = cellDef.max;
                                }

                                // Simple change handler to update state manager
                                inputElement.addEventListener('change', function() {
                                    if (window.TEUI && window.TEUI.StateManager) {
                                        window.TEUI.StateManager.setValue(fieldId, this.value, 'user');
                                    }
                                });

                                cellElement.appendChild(inputElement);
                                cellElement.classList.add('number-input-cell');
                            }
                            
                            // Handle other data attributes
                            if (cellDef.type === 'percentage' || cellDef.type === 'coefficient' || cellDef.type === 'year_slider') {
                                cellElement.setAttribute('data-type', cellDef.type);
                            }
                            
                            // Apply any custom classes to this cell
                            if (cellDef.classes && Array.isArray(cellDef.classes)) {
                                cellDef.classes.forEach(className => {
                                    cellElement.classList.add(className);
                                });
                            }
                        } else if (cellDef.content) {
                            cellElement.textContent = cellDef.content;
                            
                            // --- ADDED DEBUG LOG for initial textContent --- 
                            if (cellDef.fieldId === 'd_119' || cellDef.fieldId === 'j_115') {
                                console.log(`[FieldManager] Setting initial textContent for ${cellDef.fieldId} to: "${cellElement.textContent}"`);
                            }
                            // --- END DEBUG LOG ---
                            
                            // Add calculated-value class if this is a calculated cell
                            if (cellDef.isCalculated) {
                                cellElement.classList.add('calculated-value');
                            }
                            
                            // Add reference-value class if this is a reference value
                            if (cellDef.isReference) {
                                cellElement.classList.add('reference-value');
                            }
                            
                            // Apply any custom classes to this cell
                            if (cellDef.classes && Array.isArray(cellDef.classes)) {
                                cellDef.classes.forEach(className => {
                                    cellElement.classList.add(className);
                                });
                            }
                        }
                        
                        // Handle colSpan
                        if (cellDef.span && cellDef.span > 1) {
                            cellElement.colSpan = cellDef.span;
                        }
                        
                        // Handle additional attributes
                        if (cellDef.attributes && typeof cellDef.attributes === 'object') {
                            Object.entries(cellDef.attributes).forEach(([key, value]) => {
                                cellElement.setAttribute(key, value);
                            });
                        }
                    }
                    
                    rowElement.appendChild(cellElement);
                });
                
                tbody.appendChild(rowElement);
            });
        }
        
        // Add event listeners for dropdowns with dependencies
        const fields = getFieldsBySection(sectionId);
        Object.values(fields).forEach(field => {
            if (field.type === 'dropdown' && field.dropdownId) {
                const dropdown = document.querySelector(`[data-dropdown-id="${field.dropdownId}"]`);
                if (dropdown) {
                    dropdown.addEventListener('change', () => {
                        const fieldId = Object.keys(fields).find(key => fields[key] === field);
                        if (fieldId) {
                            updateDependentDropdowns(fieldId);
                        }
                    });
                }
            }
        });
    }
    
    /**
     * Generate a layout definition based on field definitions if none provided
     * @param {string} sectionId - Section ID
     * @param {Object} fields - Field definitions
     * @returns {Object} - Layout definition
     */
    function generateLayoutDefinition(sectionId, fields) {
        // Group fields by row ID
        const rowGroups = {};
        
        Object.entries(fields).forEach(([fieldId, field]) => {
            // Extract row ID (e.g., "d_12" -> "12")
            const rowId = field.rowId || fieldId.split('_')[1];
            
            if (!rowGroups[rowId]) {
                rowGroups[rowId] = [];
            }
            
            rowGroups[rowId].push({
                fieldId,
                field
            });
        });
        
        // Convert groups to layout definition
        const rows = Object.entries(rowGroups).map(([rowId, fieldEntries]) => {
            // Sort field entries by column index
            fieldEntries.sort((a, b) => {
                const colA = a.fieldId.split('_')[0].charCodeAt(0); // 'd' -> 100
                const colB = b.fieldId.split('_')[0].charCodeAt(0); // 'g' -> 103
                return colA - colB;
            });
            
            // Create cells
            const cells = [
                {}, // Empty column A
                {}, // ID column B (auto-populated)
                { label: rowId } // Description column C
            ];
            
            // Add value cells
            fieldEntries.forEach(entry => {
                cells.push({
                    fieldId: entry.fieldId,
                    label: entry.field.label,
                    type: entry.field.type,
                    value: entry.field.defaultValue,
                    dropdownId: entry.field.dropdownId
                });
            });
            
            return {
                id: rowId,
                cells
            };
        });
        
        return {
            rows
        };
    }
    
    /**
     * Initialize sliders for a section
     * Includes explicit cleanup and MutationObserver to prevent incorrect editable state.
     * @param {string} sectionId - Section ID
     */
    function initializeSliders(sectionId) {
        const fields = getFieldsBySection(sectionId);
        
        Object.entries(fields).forEach(([fieldId, field]) => {
            if (field.type === 'year_slider' || field.type === 'percentage' || field.type === 'coefficient') {
                const element = document.querySelector(`[data-field-id="${fieldId}"]`);
                if (!element) return;
                
                // CRITICAL FIX: Explicitly remove any contenteditable attributes or classes
                // that might have been incorrectly applied to slider cells
                element.removeAttribute('contenteditable');
                element.classList.remove('editable', 'user-input');
                
                // Create range input element
                const rangeInput = document.createElement('input');
                rangeInput.type = 'range';
                rangeInput.className = 'form-range';
                rangeInput.setAttribute('data-field-id', fieldId);
                
                // Set range attributes
                rangeInput.min = field.min || (field.type === 'percentage' ? 0 : 0);
                rangeInput.max = field.max || (field.type === 'percentage' ? 100 : 100);
                rangeInput.step = field.step || (field.type === 'percentage' ? 5 : 5);
                // Use parseFloat to handle potential decimal default values correctly
                rangeInput.value = field.defaultValue !== undefined ? parseFloat(field.defaultValue) : (field.min || 0);
                
                // Create display element
                const displaySpan = document.createElement('span');
                displaySpan.className = 'slider-value ms-2';
                
                // Create container for slider and value
                const sliderContainer = document.createElement('div');
                sliderContainer.className = 'slider-container d-flex align-items-center';
                
                // Update display when slider changes
                rangeInput.addEventListener('input', function() {
                    const value = this.value;
                    let displayValue = value;
                    
                    if (field.type === 'percentage') {
                        displayValue = value + '%';
                    }
                    
                    displaySpan.textContent = displayValue;
                    
                    // Update state manager
                    if (TEUI.StateManager && TEUI.StateManager.setValue) {
                        TEUI.StateManager.setValue(fieldId, value);
                    }
                });
                
                // Set initial display value
                let displayValue = rangeInput.value;
                if (field.type === 'percentage') {
                    displayValue += '%';
                }
                displaySpan.textContent = displayValue;
                
                // Replace original content with slider
                sliderContainer.appendChild(rangeInput);
                sliderContainer.appendChild(displaySpan);
                element.innerHTML = '';
                element.appendChild(sliderContainer);
                
                // CRITICAL PROTECTION: Apply a mutation observer to ensure the slider cell
                // never gets the contenteditable attribute applied after initialization
                const observer = new MutationObserver(mutations => {
                    mutations.forEach(mutation => {
                        if (mutation.type === 'attributes' && 
                            (mutation.attributeName === 'contenteditable' || 
                             mutation.attributeName === 'class')) {
                            // If contenteditable is being added, remove it
                            if (element.hasAttribute('contenteditable')) {
                                element.removeAttribute('contenteditable');
                            }
                            // If editable class is being added, remove it
                            if (element.classList.contains('editable') || 
                                element.classList.contains('user-input')) {
                                element.classList.remove('editable', 'user-input');
                            }
                        }
                    });
                });
                
                // Start observing the slider cell for attribute changes
                observer.observe(element, { attributes: true });
            } else if (field.type === 'generic_slider') {
                 // Existing logic for generic_slider - ensure it also gets protected if needed
                 const element = document.querySelector(`[data-field-id="${fieldId}"]`);
                 if (!element) return;
                 
                 // Explicit cleanup for generic sliders too
                 element.removeAttribute('contenteditable');
                 element.classList.remove('editable', 'user-input');
 
                 // Create range input element
                 const rangeInput = document.createElement('input');
                 rangeInput.type = 'range';
                 rangeInput.className = 'form-range area-adjust-slider'; // Use class from Section02 definition
                 rangeInput.setAttribute('data-field-id', fieldId);
 
                 // Set range attributes from field definition
                 rangeInput.min = field.min !== undefined ? field.min : -100;
                 rangeInput.max = field.max !== undefined ? field.max : 100;
                 rangeInput.step = field.step !== undefined ? field.step : 1;
                 rangeInput.value = field.defaultValue !== undefined ? field.defaultValue : 0; // Default to 0 adjustment
 
                 // Generic slider doesn't need a separate display span
                 // Replace original content with just the slider
                 element.innerHTML = '';
                 element.appendChild(rangeInput);
                 
                 // Add event listener (defined in Section02.js)
                 // Note: The actual event handling logic resides in the section module (Section02.js)
                 // This ensures the FieldManager remains generic.
                 
                 // Add MutationObserver protection here too if generic sliders face similar issues
                 // const genericObserver = new MutationObserver(...);
                 // genericObserver.observe(element, { attributes: true });
            }
        });
    }
    
    /**
     * Initialize dropdowns from field definitions
     * @param {string} sectionId - Section ID
     */
    function initializeDropdownsFromFields(sectionId) {
        const fields = getFieldsBySection(sectionId);
        
        Object.entries(fields).forEach(([fieldId, field]) => {
            if (field.type === 'dropdown' && field.dropdownId) {
                const selectElement = document.querySelector(`[data-dropdown-id="${field.dropdownId}"]`);
                if (!selectElement) return;
                
                // Clear existing options
                selectElement.innerHTML = '';
                
                // Get options from field definition or dropdown registry
                let options = [];
                if (field.options) {
                    options = field.options;
                } else if (field.getOptions) {
                    try {
                        options = field.getOptions();
                    } catch (error) {
                        console.error(`Error getting options for field ${fieldId}:`, error);
                        options = [];
                    }
                } else {
                    options = getDropdownOptions(field.dropdownId);
                }
                
                if (!options || options.length === 0) {
                    // console.warn(`No options found for dropdown ${field.dropdownId}`);
                    
                    // Add a placeholder option
                    const placeholderOption = document.createElement('option');
                    placeholderOption.value = '';
                    placeholderOption.textContent = 'No options available';
                    selectElement.appendChild(placeholderOption);
                    return;
                }
                
                // Add options to select element
                options.forEach(option => {
                    const optionEl = document.createElement('option');
                    
                    // Handle both object and primitive options
                    const value = typeof option === 'object' ? option.value : option;
                    const text = typeof option === 'object' ? (option.name || option.value) : option;
                    
                    optionEl.value = value;
                    optionEl.textContent = text;
                    
                    // Select default value if it matches
                    if (value === field.defaultValue) {
                        optionEl.selected = true;
                    }
                    
                    selectElement.appendChild(optionEl);
                });
                
                // Add change listener to update state
                selectElement.addEventListener('change', function() {
                    if (TEUI.StateManager && TEUI.StateManager.setValue) {
                        TEUI.StateManager.setValue(fieldId, this.value);
                    }
                    
                    // Update dependent dropdowns if needed
                    updateDependentDropdowns(fieldId);
                });
            }
        });
    }
    
    /**
     * Update dropdowns that depend on another field
     * @param {string} fieldId - Field ID that changed
     */
    function updateDependentDropdowns(fieldId) {
        // Find all fields that depend on this field
        const dependentFields = Object.values(allFields).filter(f => 
            f.type === 'dropdown' && 
            f.dependencies && 
            f.dependencies.includes(fieldId)
        );

        dependentFields.forEach(depField => {
            const dependentId = Object.keys(allFields).find(id => allFields[id] === depField);
            if (!dependentId) return;
            
            const dropdown = document.querySelector(`[data-field-id="${dependentId}"]`);
            if (!dropdown) return;

            // Get the value of the field this dropdown depends on
            const dependencyValue = TEUI.StateManager?.getValue(fieldId) || 
                document.querySelector(`[data-field-id="${fieldId}"]`)?.value;
            
            // Get new options using the getOptions function
            let options = [];
            if (depField.getOptions) {
                try {
                    options = depField.getOptions(dependencyValue);
                } catch (error) {
                    console.error(`Error getting dependent options for ${dependentId}:`, error);
                }
            }
            
            // Clear existing options
            dropdown.innerHTML = '';
            
            // Add new options
            if (options && options.length > 0) {
                options.forEach(option => {
                    const optionEl = document.createElement('option');
                    const value = typeof option === 'object' ? option.value : option;
                    const text = typeof option === 'object' ? (option.name || option.value) : option;
                    
                    optionEl.value = value;
                    optionEl.textContent = text;
                    dropdown.appendChild(optionEl);
                });
            } else {
                // Add a placeholder if no options available
                const placeholderOption = document.createElement('option');
                placeholderOption.value = '';
                placeholderOption.textContent = 'No options available';
                dropdown.appendChild(placeholderOption);
            }
        });
    }
    
    /**
     * Initialize a dropdown with options
     * @param {HTMLElement} dropdownEl - Dropdown element
     * @param {Object} config - Dropdown configuration
     * @param {Array} options - Options for the dropdown
     */
    function initializeDropdown(dropdownEl, config, options) {
        if (!dropdownEl || !config) return;
        
        // Clear existing options
        dropdownEl.innerHTML = '';
        
        // Add default empty option unless this is a special dropdown
        const isCurrentFutureToggle = dropdownEl.getAttribute('data-dropdown-id') === 'dd_h_20';
        
        if (!isCurrentFutureToggle) {
            const defaultOption = document.createElement('option');
            defaultOption.value = '';
            defaultOption.textContent = `Select ${config.tooltip || ''}`;
            dropdownEl.appendChild(defaultOption);
        }
        
        // Add options from the options list
        if (options && options.length > 0) {
            options.forEach(option => {
                const optionEl = document.createElement('option');
                // Support both { value, name } and simple string options
                const value = typeof option === 'object' ? option.value : option;
                const text = typeof option === 'object' ? (option.name || option.value) : option;
                
                optionEl.value = value;
                optionEl.textContent = text;
                dropdownEl.appendChild(optionEl);
                
                // If this is the present/future toggle, select "Present" by default
                if (isCurrentFutureToggle && value === 'Present') {
                    optionEl.selected = true;
                }
            });
        } else {
            // Add a placeholder if no options available
            const placeholderOption = document.createElement('option');
            placeholderOption.value = '';
            placeholderOption.textContent = 'No options available';
            dropdownEl.appendChild(placeholderOption);
        }
    }
    
    // Public API
    return {
        // Initialization
        initialize: function() {
            // Make sure section modules namespace exists
            window.TEUI.SectionModules = window.TEUI.SectionModules || {};
            
            // Initialize all sections
            initializeSections();
            
            // Make fields available to other modules
            window.TEUI.fields = getAllFields();
            
            return this;
        },
        
        // Field definitions access
        getAllFields,
        getFieldsBySection,
        getField,
        getDropdownOptions,
        
        // Section handling
        getSections: function() {
            return sections;
        },
        getLayoutForSection,
        
        // Rendering
        generateSectionContent,
        renderSection,
        renderAllSections,
        
        // UI Initialization
        initializeDropdownsFromFields,
        initializeSliders,
        initializeDropdown,
        updateDependentDropdowns,
        initializeSectionEventHandlers,

        /**
         * NEW FUNCTION: Updates the visual display of a single field element.
         * @param {string} fieldId - The ID of the field to update.
         * @param {string} newValue - The new value to display.
         * @param {object} fieldDefFromCaller - The field definition object.
         */
        updateFieldDisplay: function(fieldId, newValue, fieldDefFromCaller) { 
            // /* KWW DEBUG ENTRY */ console.log(`[FieldManager.updateFieldDisplay ENTRY] Called for fieldId: ${fieldId} with newValue: ${newValue}`, {
            //     fieldDefFromCaller: fieldDefFromCaller ? {type: fieldDefFromCaller.type, label: fieldDefFromCaller.label, defaultValue: fieldDefFromCaller.defaultValue, sectionId: fieldDefFromCaller.sectionId} : null
            // });

            // Attempt to get the element more reliably, preferring data-field-id, then direct id.
            // Many interactive elements are nested and might not have the fieldId as their direct HTML id.
            let element = document.querySelector(`[data-field-id="${fieldId}"]`);
            if (!element) {
                element = document.getElementById(fieldId); // Fallback to direct ID if data-field-id not found
            }
            
            // Prioritize fieldDef passed from caller, then try to get it internally.
            const fieldDef = fieldDefFromCaller || this.getField(fieldId); 

            if (!element) {
                // if (fieldId === 'd_74' || fieldId === 'g_89' || fieldId === 'd_113' || fieldId === 'e_74' || fieldId === 'f_74') { // Log for critical test cases
                //     console.error(`[FieldManager.updateFieldDisplay] CRITICAL: Element for fieldId "${fieldId}" NOT FOUND.`);
                // }
                return;
            }
            // Log the found element for critical fields
            // if (fieldId === 'd_74' || fieldId === 'g_89' || fieldId === 'd_113' || fieldId === 'e_74' || fieldId === 'f_74') {
            //      console.log(`[FieldManager.updateFieldDisplay] Found element for ${fieldId}:`, element);
            // }

            if (!fieldDef) {
                // if (fieldId === 'd_74' || fieldId === 'g_89' || fieldId === 'd_113' || fieldId === 'e_74' || fieldId === 'f_74') { // Log if critical fieldDef is missing
                //     console.error(`[FieldManager.updateFieldDisplay] CRITICAL: Field definition for ${fieldId} is missing/null. Cannot determine type. Element:`, element);
                // }
                // Attempt generic update if no fieldDef but element exists (e.g. simple span)
                if (element.tagName === 'SPAN' || element.tagName === 'DIV') {
                    element.textContent = newValue;
                } else if (typeof element.value !== 'undefined') {
                    element.value = newValue;
                }
                return;
            }
            
            // Log the confirmed fieldDef.type for critical fields
            // if (fieldId === 'd_74' || fieldId === 'g_89' || fieldId === 'd_113' || fieldId === 'e_74' || fieldId === 'f_74') {
            //      console.log(`[FieldManager.updateFieldDisplay] Processing ${fieldId} with fieldDef.type = ${fieldDef.type}`);
            // }

            // Handle different field types
            switch (fieldDef.type) {
                case 'editable':
                case 'number': 
                    if (typeof element.value !== 'undefined') {
                        element.value = newValue;
                        // console.log(`[FieldManager.updateFieldDisplay] Set INPUT value for ${fieldId} to: ${newValue}`, element); 
                    } else {
                        // Fallback for elements that don't have a .value property but are editable (e.g. contenteditable divs/spans)
                        element.textContent = newValue;
                        // console.log(`[FieldManager.updateFieldDisplay] Set TEXTCONTENT for ${fieldId} (type: ${fieldDef.type}) to: ${newValue}`, element); 
                        // For contenteditable elements, dispatching 'blur' can help trigger validation/save logic
                        element.dispatchEvent(new Event('blur', { bubbles: true }));
                        // console.log(`[FieldManager.updateFieldDisplay] Dispatched BLUR for ${fieldId}`);
                    }
                    break;
                case 'year_slider': 
                case 'percentage':
                case 'coefficient':
                    // Slider types - the 'element' is the parent TD.
                    // We need to find the actual <input type="range"> and the display span inside it.
                    const rangeInput = element.querySelector('input[type="range"]');
                    const displaySpan = element.querySelector('.slider-value'); // Assumes initializeSliders adds this class

                    if (rangeInput) {
                        const numericValue = window.TEUI.parseNumeric(newValue, NaN);
                        if (!isNaN(numericValue)) {
                            rangeInput.value = numericValue;
                            if (displaySpan) {
                                let formattedDisplay = numericValue.toString();
                                if (typeof window.TEUI?.formatNumber === 'function') {
                                    if (fieldDef.type === 'percentage') {
                                        formattedDisplay = window.TEUI.formatNumber(numericValue, 'percent-0dp'); 
                                    } else if (fieldDef.type === 'coefficient') {
                                        formattedDisplay = window.TEUI.formatNumber(numericValue, 'number-2dp'); 
                                    } else { // year_slider
                                        formattedDisplay = window.TEUI.formatNumber(numericValue, 'integer');
                                    }
                                } else {
                                    // Fallback if global formatter isn't ready (should ideally not happen with correct load order)
                                    console.warn(`[FieldManager.updateFieldDisplay] window.TEUI.formatNumber not available for ${fieldId}. Using basic toString().`);
                                    if (fieldDef.type === 'percentage') formattedDisplay = numericValue + '%'; // Basic fallback
                                }
                                displaySpan.textContent = formattedDisplay;
                                console.log(`[FieldManager.updateFieldDisplay] SLIDER UI updated for ${fieldId}: range set to ${numericValue}, display to "${formattedDisplay}"`);
                            }
                            rangeInput.dispatchEvent(new Event('input', { bubbles: true }));
                            // console.log(`[FieldManager.updateFieldDisplay] Dispatched INPUT event for slider ${fieldId}`);
                        } else {
                            console.warn(`[FieldManager.updateFieldDisplay] Invalid numeric value "${newValue}" for slider ${fieldId}`);
                        }
                    } else {
                        console.warn(`[FieldManager.updateFieldDisplay] Could not find range input for slider ${fieldId}. Initial textContent was: "${element.textContent}". Setting textContent as fallback.`);
                        // Fallback if structure isn't as expected (e.g. if initializeSliders hasn't run or was cleared)
                        element.textContent = newValue; 
                    }
                    break;
                case 'dropdown':
                    // Ensure we target the actual <select> element
                    const selectElement = element.tagName === 'SELECT' ? element : element.querySelector(`select[data-field-id='${fieldId}']`); // Template literal for querySelector
                    if (selectElement) {
                        // selectElement.value = newValue; // Setting .value should ideally be enough, but browsers can be tricky with visual updates
                        // console.log(`[FieldManager.updateFieldDisplay] Set SELECT value for ${fieldId} to: ${newValue}`, selectElement);

                        let optionFoundAndSelected = false;
                        for (let i = 0; i < selectElement.options.length; i++) {
                            if (selectElement.options[i].value === newValue) {
                                selectElement.options[i].selected = true;
                                optionFoundAndSelected = true;
                            } else {
                                selectElement.options[i].selected = false;
                            }
                        }

                        // Fallback to setting .value directly if the option wasn't found OR as a belt-and-suspenders for visual update.
                        // This ensures the select's internal value is correct even if no specific <option> tag matched.
                        selectElement.value = newValue;
                        
                        // if (optionFoundAndSelected) { // Keep this more general log for now
                        //     console.log(`[FieldManager.updateFieldDisplay] Option for value "${newValue}" SELECTED for dropdown ${fieldId}.`);
                        // } else {
                        //     console.warn(`[FieldManager.updateFieldDisplay] Value "${newValue}" for dropdown ${fieldId} not explicitly found among its <option>s. Set .value directly.`);
                        // }

                        // Dispatch a change event to trigger any dependent logic or UI updates
                        selectElement.dispatchEvent(new Event('change', { bubbles: true }));
                    } else {
                        console.warn(`[FieldManager.updateFieldDisplay] Could not find SELECT element for dropdown ${fieldId}`);
                    }
                    break;
                case 'calculated':
                case 'derived':
                    element.textContent = newValue; // These are usually display-only
                    break;
                // TODO: Add specific handling for 'generic_slider' if its UI update needs are different
                default:
                    // console.warn(`[FieldManager.updateFieldDisplay] Unhandled field type: ${fieldDef.type} for field ${fieldId}. Attempting generic value set.`);
                    if (typeof element.value !== 'undefined') {
                        element.value = newValue;
                    } else {
                        element.textContent = newValue;
                    }
                    break;
            }

            if (fieldId === 'f_113' || fieldId === 'd_118' || fieldId === 'k_120') {
                console.log(`[FieldManager DEBUG] For ${fieldId}, about to call window.TEUI.formatNumber. Is it available?`, typeof window.TEUI.formatNumber, window.TEUI);
            }
        }
    };
})();

// Initialize when the document is ready
document.addEventListener('DOMContentLoaded', function() {
    // console.log('TEUI FieldManager initializing...');
    
    // Initialize and load all section modules
    TEUI.FieldManager.initialize();
    
    // Render all sections
    TEUI.FieldManager.renderAllSections();
});