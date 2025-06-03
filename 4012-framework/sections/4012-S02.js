/**
 * 4012-S02.js
 * Section 02: Building Information
 * Grid-based layout implementation
 */

(function() {
    'use strict';
    
    // Ensure namespace exists
    window.TEUI = window.TEUI || {};
    window.TEUI.v4012 = window.TEUI.v4012 || {};
    window.TEUI.v4012.Sections = window.TEUI.v4012.Sections || {};
    
    // Section 02 Module
    const S02 = {
        // Section configuration
        config: {
            id: 'buildingInfo',
            name: 'Building Information',
            number: '02'
        },
        
        // Get layout definition for grid renderer
        getLayout: function() {
            return {
                rows: [
                    // Header row
                    {
                        id: 'header',
                        cells: {
                            a: { content: '' },
                            b: { content: '02-ID', classes: ['section-subheader'] },
                            c: { content: '', classes: ['section-subheader'] },
                            d: { content: '', classes: ['section-subheader'] },
                            e: { content: '', classes: ['section-subheader'] },
                            f: { content: '', classes: ['section-subheader'] },
                            g: { content: '', classes: ['section-subheader'] },
                            h: { content: '', classes: ['section-subheader'] },
                            i: { content: '', classes: ['section-subheader'] },
                            j: { content: '', classes: ['section-subheader'] },
                            k: { content: 'T.10 Cost of Energy by Source', classes: ['section-subheader'], colspan: 4 }
                        }
                    },
                    // Row B.1: Major Occupancy
                    {
                        id: 'B.1',
                        cells: {
                            c: { content: 'Major Occupancy' },
                            d: {
                                fieldId: 'd_12',
                                type: 'dropdown',
                                dropdownId: 'dd_d_12',
                                value: 'A-Assembly',
                                options: [
                                    { value: 'A-Assembly', name: 'A-Assembly' },
                                    { value: 'B1-Care or Detention', name: 'B1-Care or Detention' },
                                    { value: 'B2-Care and Treatment', name: 'B2-Care and Treatment' },
                                    { value: 'B3-Detention Care & Treatment', name: 'B3-Detention Care & Treatment' },
                                    { value: 'C-Residential', name: 'C-Residential' },
                                    { value: 'D-Business and Personal Services', name: 'D-Business and Personal Services' },
                                    { value: 'E-Mercantile', name: 'E-Mercantile' },
                                    { value: 'F1-High-hazard Industrial', name: 'F1-High-hazard Industrial' },
                                    { value: 'F2-Medium-hazard Industrial', name: 'F2-Medium-hazard Industrial' },
                                    { value: 'F3-Low-hazard Industrial', name: 'F3-Low-hazard Industrial' }
                                ],
                                colspan: 3
                            },
                            g: { content: 'D.1', classes: ['label-prefix'] },
                            h: { content: 'Reporting Period' },
                            i: {
                                fieldId: 'i_12',
                                type: 'slider',
                                value: '2022',
                                min: 2020,
                                max: 2030,
                                step: 1,
                                colspan: 2
                            },
                            k: { content: 'Electricity' },
                            l: {
                                fieldId: 'l_12',
                                type: 'editable',
                                value: '0.1300',
                                classes: ['user-input', 'editable']
                            },
                            m: { content: '/kWh', classes: ['unit-label'] }
                        }
                    },
                    // Row S.1: Reference Standard
                    {
                        id: 'S.1',
                        cells: {
                            c: { content: 'Reference Standard' },
                            d: {
                                fieldId: 'd_13',
                                type: 'dropdown',
                                dropdownId: 'dd_d_13',
                                value: 'OBC SB10 5.5-6 Z6',
                                options: [
                                    { value: 'OBC SB10 5.5-6 Z6', name: 'OBC SB10 5.5-6 Z6' },
                                    { value: 'NECB 2020', name: 'NECB 2020' },
                                    { value: 'ASHRAE 90.1-2019', name: 'ASHRAE 90.1-2019' },
                                    { value: 'Passive House', name: 'Passive House' }
                                ],
                                colspan: 3
                            },
                            g: { content: 'D.2', classes: ['label-prefix'] },
                            h: { content: 'Service Life (yrs)' },
                            i: {
                                fieldId: 'i_13',
                                type: 'slider',
                                value: '50',
                                min: 25,
                                max: 100,
                                step: 5,
                                colspan: 2
                            },
                            k: { content: 'Gas' },
                            l: {
                                fieldId: 'l_13',
                                type: 'editable',
                                value: '0.0507',
                                classes: ['user-input', 'editable']
                            },
                            m: { content: '/m³', classes: ['unit-label'] }
                        }
                    },
                    // Row S.2: Actual/Target Use
                    {
                        id: 'S.2',
                        cells: {
                            c: { content: 'Actual (Bills) or Targeted (Design) Use' },
                            d: {
                                fieldId: 'd_14',
                                type: 'dropdown',
                                dropdownId: 'dd_d_14',
                                value: 'Utility Bills',
                                options: [
                                    { value: 'Utility Bills', name: 'Utility Bills' },
                                    { value: 'Design Target', name: 'Design Target' }
                                ],
                                colspan: 3
                            },
                            g: { content: 'B.2', classes: ['label-prefix'] },
                            h: { content: 'Project Name' },
                            i: {
                                fieldId: 'i_14',
                                type: 'editable',
                                value: 'Three Feathers Terrace',
                                classes: ['user-input', 'editable'],
                                colspan: 2
                            },
                            k: { content: 'Propane' },
                            l: {
                                fieldId: 'l_14',
                                type: 'editable',
                                value: '1.6200',
                                classes: ['user-input', 'editable']
                            },
                            m: { content: '/kg', classes: ['unit-label'] }
                        }
                    },
                    // Row S.3: Carbon Benchmarking
                    {
                        id: 'S.3',
                        cells: {
                            c: { content: 'Carbon Benchmarking Standard' },
                            d: {
                                fieldId: 'd_15',
                                type: 'dropdown',
                                dropdownId: 'dd_d_15',
                                value: 'Self Reported',
                                options: [
                                    { value: 'Self Reported', name: 'Self Reported' },
                                    { value: 'LEED v4', name: 'LEED v4' },
                                    { value: 'Zero Carbon Building', name: 'Zero Carbon Building' }
                                ],
                                colspan: 3
                            },
                            g: { content: 'B.3', classes: ['label-prefix'] },
                            h: { content: 'Conditioned Area' },
                            i: {
                                fieldId: 'i_15',
                                type: 'editable',
                                value: '1,427.20',
                                classes: ['user-input', 'editable']
                            },
                            j: {
                                fieldId: 'j_15',
                                type: 'slider',
                                value: '1427',
                                min: 100,
                                max: 10000,
                                step: 10
                            },
                            k: { content: 'Wood' },
                            l: {
                                fieldId: 'l_15',
                                type: 'editable',
                                value: '180.00',
                                classes: ['user-input', 'editable']
                            },
                            m: { content: '/m³', classes: ['unit-label'] }
                        }
                    },
                    // Row S.4: Embodied Carbon
                    {
                        id: 'S.4',
                        cells: {
                            c: { content: 'Embodied Carbon Target (kgCO₂e/m²)' },
                            d: {
                                fieldId: 'd_16',
                                type: 'editable',
                                value: '345.82',
                                classes: ['user-input', 'editable'],
                                colspan: 3
                            },
                            g: { content: 'A.1', classes: ['label-prefix'] },
                            h: { content: 'Certifier:' },
                            i: {
                                fieldId: 'i_16',
                                type: 'editable',
                                value: 'Thomson Architecture, Inc.',
                                classes: ['user-input', 'editable'],
                                colspan: 2
                            },
                            k: { content: 'Oil' },
                            l: {
                                fieldId: 'l_16',
                                type: 'editable',
                                value: '1.5000',
                                classes: ['user-input', 'editable']
                            },
                            m: { content: '/litre', classes: ['unit-label'] }
                        }
                    },
                    // Row L: License
                    {
                        id: 'L',
                        cells: {
                            c: { content: '' },
                            g: { content: 'A.2', classes: ['label-prefix'] },
                            h: { content: 'Licence No:' },
                            i: {
                                fieldId: 'i_17',
                                type: 'editable',
                                value: '8154',
                                classes: ['user-input', 'editable'],
                                colspan: 2
                            }
                        }
                    }
                ]
            };
        },
        
        // Initialize section
        initialize: function() {
            console.log('Initializing Section 02: Building Information');
            
            // Render the section using the grid renderer
            if (window.TEUI.v4012.SectionRenderer) {
                window.TEUI.v4012.SectionRenderer.renderSection(
                    this.config.id,
                    this.getLayout()
                );
            }
            
            // Set up event handlers
            this.setupEventHandlers();
        },
        
        // Set up event handlers
        setupEventHandlers: function() {
            // Occupancy dropdown - critical for many calculations
            const occupancyDropdown = document.querySelector('[data-dropdown-id="dd_d_12"]');
            if (occupancyDropdown) {
                occupancyDropdown.addEventListener('change', (e) => {
                    if (window.TEUI.v4012.DualState) {
                        window.TEUI.v4012.DualState.setValue('d_12', e.target.value);
                    }
                    // Trigger recalculations in other sections
                    this.notifyOccupancyChange(e.target.value);
                });
            }
            
            // Reference standard dropdown
            const referenceDropdown = document.querySelector('[data-dropdown-id="dd_d_13"]');
            if (referenceDropdown) {
                referenceDropdown.addEventListener('change', (e) => {
                    if (window.TEUI.v4012.DualState) {
                        window.TEUI.v4012.DualState.setValue('d_13', e.target.value);
                    }
                });
            }
            
            // Editable fields
            document.querySelectorAll('#buildingInfo .editable').forEach(field => {
                field.addEventListener('blur', (e) => this.handleEditableChange(e));
                field.addEventListener('keydown', (e) => {
                    if (e.key === 'Enter') {
                        e.preventDefault();
                        e.target.blur();
                    }
                });
            });
            
            // Sliders
            document.querySelectorAll('#buildingInfo input[type="range"]').forEach(slider => {
                slider.addEventListener('input', (e) => this.handleSliderChange(e));
            });
        },
        
        // Handle editable field change
        handleEditableChange: function(e) {
            const fieldId = e.target.getAttribute('data-field-id');
            const value = e.target.textContent.trim();
            
            // Store in state
            if (window.TEUI.v4012.DualState) {
                window.TEUI.v4012.DualState.setValue(fieldId, value);
            }
        },
        
        // Handle slider change
        handleSliderChange: function(e) {
            const fieldId = e.target.getAttribute('data-field-id');
            const value = e.target.value;
            
            // Store in state
            if (window.TEUI.v4012.DualState) {
                window.TEUI.v4012.DualState.setValue(fieldId, value);
            }
        },
        
        // Notify other sections of occupancy change
        notifyOccupancyChange: function(occupancyType) {
            // This is a critical field that affects many calculations
            console.log('Occupancy changed to:', occupancyType);
            
            // Dispatch custom event for other sections to listen to
            document.dispatchEvent(new CustomEvent('occupancy-changed', {
                detail: { occupancyType: occupancyType }
            }));
        }
    };
    
    // Expose the module
    window.TEUI.v4012.Sections.S02 = S02;
})(); 