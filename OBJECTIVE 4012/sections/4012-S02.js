/**
 * 4012-S02.js
 * Section 02: Building Information
 * Grid-based layout implementation with correct dropdown options from 4011
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
                    // Header row with T.10 Cost of Energy by Source
                    {
                        id: 'header',
                        cells: {
                            b: { content: '02-ID' },
                            c: { content: 'Building Info Units', classes: ['section-subheader'] },
                            d: { content: '', classes: ['section-subheader'] },
                            e: { content: '', classes: ['section-subheader'] },
                            f: { content: '', classes: ['section-subheader'] },
                            g: { content: '', classes: ['section-subheader'] },
                            h: { content: '', classes: ['section-subheader'] },
                            i: { content: '', classes: ['section-subheader'] },
                            j: { content: '', classes: ['section-subheader'] },
                            k: { content: 'T.10 COST OF ENERGY BY SOURCE', classes: ['section-subheader', 'text-center'], colspan: 4 }
                        }
                    },
                    
                    // Row 1: Major Occupancy
                    {
                        id: '1',
                        rowNumber: '12',
                        cells: {
                            b: { content: 'B.1' },
                            c: { content: 'Major Occupancy' },
                            d: { 
                                type: 'dropdown',
                                fieldId: 'd_12',
                                dropdownId: 'dd_d_12',
                                value: 'A-Assembly',
                                options: [
                                    { value: 'A-Assembly', name: 'A-Assembly' },
                                    { value: 'B1-Detention', name: 'B1-Detention' },
                                    { value: 'B2-Care and Treatment', name: 'B2-Care and Treatment' },
                                    { value: 'B3-Detention Care & Treatment', name: 'B3-Detention Care & Treatment' },
                                    { value: 'C-Residential', name: 'C-Residential' },
                                    { value: 'D-Business & Personal Services', name: 'D-Business & Personal Services' },
                                    { value: 'E-Mercantile', name: 'E-Mercantile' },
                                    { value: 'F-Industrial', name: 'F-Industrial' }
                                ]
                            },
                            e: { content: '' },
                            f: { content: 'D.1', classes: ['label-prefix'] },
                            g: { content: 'Reporting Period' },
                            h: { 
                                type: 'editable',
                                fieldId: 'h_12',
                                value: '2022',
                                classes: ['user-input', 'editable']
                            },
                            i: { content: '' },
                            j: { content: '' },
                            k: { content: 'Electricity', classes: ['text-end'] },
                            l: { 
                                type: 'editable',
                                fieldId: 'l_12',
                                value: '0.1300',
                                classes: ['user-input', 'editable']
                            },
                            m: { content: '/kWh' }
                        }
                    },
                    
                    // Row 2: Reference Standard
                    {
                        id: '2',
                        rowNumber: '13',
                        cells: {
                            b: { content: 'S.1' },
                            c: { content: 'Reference Standard' },
                            d: { 
                                type: 'dropdown',
                                fieldId: 'd_13',
                                dropdownId: 'dd_d_13',
                                value: 'OBC SB10 5.5-6 Z6',
                                options: [
                                    { value: 'OBC SB12 3.1.1.2.C4', name: 'OBC SB12 3.1.1.2.C4' },
                                    { value: 'OBC SB12 3.1.1.2.C1', name: 'OBC SB12 3.1.1.2.C1' },
                                    { value: 'OBC SB12 3.1.1.2.A3', name: 'OBC SB12 3.1.1.2.A3' },
                                    { value: 'OBC SB10 5.5-6 Z6', name: 'OBC SB10 5.5-6 Z6' },
                                    { value: 'OBC SB10 5.5-6 Z5 (2010)', name: 'OBC SB10 5.5-6 Z5 (2010)' },
                                    { value: 'NBC T1', name: 'NBC T1' },
                                    { value: 'NECB T1 (Z6)', name: 'NECB T1 (Z6)' },
                                    { value: 'CaGBC ZCB', name: 'CaGBC ZCB' },
                                    { value: 'PH Classic', name: 'PH Classic' },
                                    { value: 'PH Plus', name: 'PH Plus' },
                                    { value: 'PH Premium', name: 'PH Premium' },
                                    { value: 'EnerPHit', name: 'EnerPHit' },
                                    { value: 'PH Low Energy', name: 'PH Low Energy' },
                                    { value: 'ADD YOUR OWN HERE', name: 'ADD YOUR OWN HERE' }
                                ]
                            },
                            e: { content: '' },
                            f: { content: 'D.2', classes: ['label-prefix'] },
                            g: { content: 'Service Life (yrs)' },
                            h: { 
                                type: 'slider',
                                fieldId: 'h_13',
                                value: '50',
                                min: 30,
                                max: 100,
                                step: 10
                            },
                            i: { content: '50' },
                            j: { content: '' },
                            k: { content: 'Gas', classes: ['text-end'] },
                            l: { 
                                type: 'editable',
                                fieldId: 'l_13',
                                value: '0.0507',
                                classes: ['user-input', 'editable']
                            },
                            m: { content: '/m³' }
                        }
                    },
                    
                    // Row 3: Actual/Target Use
                    {
                        id: '3',
                        rowNumber: '14',
                        cells: {
                            b: { content: 'S.2' },
                            c: { content: 'Actual (Bills) or Targeted (Design) Use' },
                            d: { 
                                type: 'dropdown',
                                fieldId: 'd_14',
                                dropdownId: 'dd_d_14',
                                value: 'Utility Bills',
                                options: [
                                    { value: 'Targeted Use', name: 'Targeted Use' },
                                    { value: 'Utility Bills', name: 'Utility Bills' }
                                ]
                            },
                            e: { content: '' },
                            f: { content: 'B.2', classes: ['label-prefix'] },
                            g: { content: 'Project Name' },
                            h: { 
                                type: 'editable',
                                fieldId: 'h_14',
                                value: 'Three Feathers Terrace',
                                classes: ['user-input', 'editable'],
                                colspan: 2
                            },
                            i: { content: '' },
                            j: { content: '' },
                            k: { content: 'Propane', classes: ['text-end'] },
                            l: { 
                                type: 'editable',
                                fieldId: 'l_14',
                                value: '1.6200',
                                classes: ['user-input', 'editable']
                            },
                            m: { content: '/kg' }
                        }
                    },
                    
                    // Row 4: Carbon Benchmarking Standard
                    {
                        id: '4',
                        rowNumber: '15',
                        cells: {
                            b: { content: 'S.3' },
                            c: { content: 'Carbon Benchmarking Standard' },
                            d: { 
                                type: 'dropdown',
                                fieldId: 'd_15',
                                dropdownId: 'dd_d_15',
                                value: 'Self Reported',
                                options: [
                                    { value: 'BR18 (Denmark)', name: 'BR18 (Denmark)' },
                                    { value: 'IPCC AR6 EPC', name: 'IPCC AR6 EPC' },
                                    { value: 'IPCC AR6 EA', name: 'IPCC AR6 EA' },
                                    { value: 'TGS4', name: 'TGS4' },
                                    { value: 'CaGBC ZCB D', name: 'CaGBC ZCB D' },
                                    { value: 'CaGBC ZCB P', name: 'CaGBC ZCB P' },
                                    { value: 'Self Reported', name: 'Self Reported' },
                                    { value: 'Not Reported', name: 'Not Reported' }
                                ]
                            },
                            e: { content: '' },
                            f: { content: 'B.3', classes: ['label-prefix'] },
                            g: { content: 'Conditioned Area' },
                            h: { 
                                type: 'editable',
                                fieldId: 'h_15',
                                value: '1,427.20',
                                classes: ['user-input', 'editable']
                            },
                            i: { 
                                type: 'slider',
                                fieldId: 'i_15_slider',
                                value: '1430',
                                min: 0,
                                max: 5000,
                                step: 10
                            },
                            j: { content: '1430' },
                            k: { content: 'Wood', classes: ['text-end'] },
                            l: { 
                                type: 'editable',
                                fieldId: 'l_15',
                                value: '180.00',
                                classes: ['user-input', 'editable']
                            },
                            m: { content: '/m³' }
                        }
                    },
                    
                    // Row 5: Embodied Carbon Target
                    {
                        id: '5',
                        rowNumber: '16',
                        cells: {
                            b: { content: 'S.4' },
                            c: { content: 'Embodied Carbon Target (kgCO₂e/m²)' },
                            d: { 
                                type: 'calculated',
                                fieldId: 'd_16',
                                value: '345.82',
                                classes: ['calculated-value']
                            },
                            e: { content: '' },
                            f: { content: 'A.1', classes: ['label-prefix'] },
                            g: { content: 'Certifier:' },
                            h: { 
                                type: 'editable',
                                fieldId: 'i_16',
                                value: 'Thomson Architecture, Inc.',
                                classes: ['user-input', 'editable'],
                                colspan: 3
                            },
                            i: { content: '' },
                            j: { content: '' },
                            k: { content: 'Oil', classes: ['text-end'] },
                            l: { 
                                type: 'editable',
                                fieldId: 'l_16',
                                value: '1.5000',
                                classes: ['user-input', 'editable']
                            },
                            m: { content: '/litre' }
                        }
                    },
                    
                    // Row 6: License Number
                    {
                        id: '6',
                        rowNumber: '17',
                        cells: {
                            b: { content: 'L' },
                            c: { content: '' },
                            d: { content: '' },
                            e: { content: '' },
                            f: { content: 'A.2', classes: ['label-prefix'] },
                            g: { content: 'Licence No:' },
                            h: { 
                                type: 'editable',
                                fieldId: 'i_17',
                                value: '8154',
                                classes: ['user-input', 'editable']
                            },
                            i: { content: '' },
                            j: { content: '' },
                            k: { content: '' },
                            l: { content: '' },
                            m: { content: '' }
                        }
                    }
                ]
            };
        },
        
        // Initialize section
        initialize: function() {
            console.log('Initializing Section 02: Building Information');
            
            // Get state manager
            const state = window.TEUI.v4012?.DualState;
            if (!state) {
                console.error('DualState not available');
                return;
            }
            
            // Render the section
            this.render();
            
            // Set up event handlers
            this.setupEventHandlers();
            
            // Initial calculations
            this.calculateEmbodiedCarbon();
        },
        
        // Render section using the grid renderer
        render: function() {
            const renderer = window.TEUI.v4012?.SectionRenderer;
            if (!renderer) {
                console.error('SectionRenderer not available');
                return;
            }
            
            // Render the section
            renderer.renderSection('buildingInfo', this.getLayout());
        },
        
        // Set up event handlers
        setupEventHandlers: function() {
            const section = document.getElementById('buildingInfo');
            if (!section) return;
            
            // Handle dropdown changes
            section.addEventListener('change', (e) => {
                if (e.target.matches('select')) {
                    const fieldId = e.target.getAttribute('data-field-id');
                    const value = e.target.value;
                    
                    // Update state
                    const state = window.TEUI.v4012?.DualState;
                    if (state) {
                        state.setValue(fieldId, value);
                    }
                    
                    // Trigger calculations if needed
                    if (fieldId === 'd_15') { // Carbon standard changed
                        this.calculateEmbodiedCarbon();
                    }
                }
            });
            
            // Handle editable field changes
            section.addEventListener('blur', (e) => {
                if (e.target.matches('.editable')) {
                    const fieldId = e.target.getAttribute('data-field-id');
                    const value = e.target.textContent.trim();
                    
                    // Update state
                    const state = window.TEUI.v4012?.DualState;
                    if (state) {
                        state.setValue(fieldId, value);
                    }
                    
                    // Trigger calculations if area changed
                    if (fieldId === 'h_15') {
                        this.calculateEmbodiedCarbon();
                    }
                }
            }, true);
            
            // Handle slider changes
            section.addEventListener('input', (e) => {
                if (e.target.matches('input[type="range"]')) {
                    const fieldId = e.target.getAttribute('data-field-id');
                    const value = e.target.value;
                    
                    // Update display
                    const valueDisplay = e.target.parentElement.querySelector('.slider-value');
                    if (valueDisplay) {
                        valueDisplay.textContent = value;
                    }
                    
                    // Update state
                    const state = window.TEUI.v4012?.DualState;
                    if (state) {
                        state.setValue(fieldId, value);
                    }
                    
                    // Special handling for area slider
                    if (fieldId === 'i_15_slider') {
                        const areaField = section.querySelector('[data-field-id="h_15"]');
                        if (areaField) {
                            areaField.textContent = value;
                            state.setValue('h_15', value);
                            this.calculateEmbodiedCarbon();
                        }
                    }
                }
            });
        },
        
        // Calculate embodied carbon target
        calculateEmbodiedCarbon: function() {
            const state = window.TEUI.v4012?.DualState;
            if (!state) return;
            
            const carbonStandard = state.getValue('d_15');
            const area = parseFloat(state.getValue('h_15')?.replace(/,/g, '') || 0);
            
            // Carbon intensity values by standard (kgCO2e/m²)
            const carbonIntensities = {
                'BR18 (Denmark)': 12,
                'IPCC AR6 EPC': 350,
                'IPCC AR6 EA': 400,
                'TGS4': 250,
                'CaGBC ZCB D': 300,
                'CaGBC ZCB P': 200,
                'Self Reported': 345.82,
                'Not Reported': 0
            };
            
            const intensity = carbonIntensities[carbonStandard] || 0;
            const totalCarbon = intensity; // This is already per m²
            
            // Update display
            const field = document.querySelector('[data-field-id="d_16"]');
            if (field) {
                field.textContent = totalCarbon.toFixed(2);
            }
            
            // Update state
            state.setValue('d_16', totalCarbon.toFixed(2));
        }
    };
    
    // Register section
    window.TEUI.v4012.Sections.S02 = S02;
})(); 