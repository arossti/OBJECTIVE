/**
 * 4012-S03.js
 * Section 03: Climate Calculations
 * Grid-based layout implementation for v4.012
 */

(function() {
    'use strict';
    
    // Ensure namespace exists
    window.TEUI = window.TEUI || {};
    window.TEUI.v4012 = window.TEUI.v4012 || {};
    window.TEUI.v4012.Sections = window.TEUI.v4012.Sections || {};
    
    // Section 03 Module
    const S03 = {
        // Section configuration
        config: {
            id: 'climateCalculations',
            name: 'Climate Calculations',
            number: '03'
        },
        
        // Get layout definition for grid renderer
        getLayout: function() {
            const self = this; // Capture the context
            return {
                rows: [
                    // Header row
                    {
                        id: 'header',
                        cells: {
                            b: { content: '03-ID', classes: ['section-subheader'] },
                            c: { content: 'Climate Units', classes: ['section-subheader'] },
                            d: { content: '°C', classes: ['section-subheader'] },
                            e: { content: '°F', classes: ['section-subheader'] },
                            f: { content: 'F', classes: ['section-subheader'] },
                            g: { content: 'G', classes: ['section-subheader'] },
                            h: { content: '°C', classes: ['section-subheader'] },
                            i: { content: '°F', classes: ['section-subheader'] },
                            j: { content: 'J', classes: ['section-subheader'] },
                            k: { content: 'K', classes: ['section-subheader'] },
                            l: { content: 'L', classes: ['section-subheader'] },
                            m: { content: 'M', classes: ['section-subheader'] },
                            n: { content: 'N', classes: ['section-subheader'] }
                        }
                    },
                    
                    // Row 2: Province and City
                    {
                        id: '2',
                        rowNumber: '14',
                        cells: {
                            b: { content: 'C.2' },
                            c: { content: 'Province' },
                            d: { 
                                type: 'dropdown',
                                fieldId: 'd_14',
                                dropdownId: 'dd_d_14',
                                value: '',
                                options: self.getProvinceOptions()
                            },
                            e: { content: '' },
                            f: { content: 'C.3', classes: ['label-prefix'] },
                            g: { content: 'City' },
                            h: { 
                                type: 'dropdown',
                                fieldId: 'h_14',
                                dropdownId: 'dd_h_14',
                                value: '',
                                options: [{ value: '', name: 'Select City' }]
                            },
                            i: { content: '' },
                            j: { content: '' },
                            k: { content: '' },
                            l: { content: '' },
                            m: { content: '' }
                        }
                    },
                    
                    // Row 3: Elevation and Capacitance
                    {
                        id: '3',
                        rowNumber: '15',
                        cells: {
                            b: { content: 'C.4' },
                            c: { content: 'Elevation (m)' },
                            d: { 
                                type: 'calculated',
                                fieldId: 'd_15',
                                value: '0',
                                classes: ['calculated-value']
                            },
                            e: { content: '' },
                            f: { content: 'C.5', classes: ['label-prefix'] },
                            g: { content: 'Capacitance' },
                            h: { 
                                type: 'slider',
                                fieldId: 'h_15',
                                value: '50',
                                min: 0,
                                max: 100,
                                step: 5
                            },
                            i: { content: '%' },
                            j: { content: '' },
                            k: { content: '' },
                            l: { content: '' },
                            m: { content: '' }
                        }
                    },
                    
                    // Row 4: Temperature Setpoints
                    {
                        id: '4',
                        rowNumber: '16',
                        cells: {
                            b: { content: 'C.6' },
                            c: { content: 'Tset Heating (°C)' },
                            d: { 
                                type: 'calculated',
                                fieldId: 'd_16',
                                value: '21',
                                classes: ['calculated-value']
                            },
                            e: { content: '' },
                            f: { content: 'C.7', classes: ['label-prefix'] },
                            g: { content: 'Tset Cooling (°C)' },
                            h: { 
                                type: 'calculated',
                                fieldId: 'h_16',
                                value: '24',
                                classes: ['calculated-value']
                            },
                            i: { content: '' },
                            j: { content: '' },
                            k: { content: '' },
                            l: { content: '' },
                            m: { content: '' }
                        }
                    },
                    
                    // Row 5: Climate Data Headers
                    {
                        id: '5',
                        rowNumber: '17',
                        cells: {
                            b: { content: '' },
                            c: { content: 'Climate Data', classes: ['section-subheader'] },
                            d: { content: 'Current', classes: ['section-subheader'] },
                            e: { content: 'Future', classes: ['section-subheader'] },
                            f: { content: '', classes: ['section-subheader'] },
                            g: { content: 'Climate Data', classes: ['section-subheader'] },
                            h: { content: 'Current', classes: ['section-subheader'] },
                            i: { content: 'Future', classes: ['section-subheader'] },
                            j: { content: '', classes: ['section-subheader'] },
                            k: { content: 'Climate Data', classes: ['section-subheader'] },
                            l: { content: 'Current', classes: ['section-subheader'] },
                            m: { content: 'Future', classes: ['section-subheader'] }
                        }
                    },
                    
                    // Row 6: HDD18
                    {
                        id: '6',
                        rowNumber: '18',
                        cells: {
                            b: { content: 'C.8' },
                            c: { content: 'HDD18' },
                            d: { 
                                type: 'calculated',
                                fieldId: 'd_18',
                                value: '0',
                                classes: ['calculated-value']
                            },
                            e: { 
                                type: 'calculated',
                                fieldId: 'e_18',
                                value: '0',
                                classes: ['calculated-value']
                            },
                            f: { content: 'C.11', classes: ['label-prefix'] },
                            g: { content: 'CDD24' },
                            h: { 
                                type: 'calculated',
                                fieldId: 'h_18',
                                value: '0',
                                classes: ['calculated-value']
                            },
                            i: { 
                                type: 'calculated',
                                fieldId: 'i_18',
                                value: '0',
                                classes: ['calculated-value']
                            },
                            j: { content: 'C.14', classes: ['label-prefix'] },
                            k: { content: 'January 2.5%' },
                            l: { 
                                type: 'calculated',
                                fieldId: 'l_18',
                                value: '0',
                                classes: ['calculated-value']
                            },
                            m: { content: '°C' }
                        }
                    },
                    
                    // Row 7: HDD15
                    {
                        id: '7',
                        rowNumber: '19',
                        cells: {
                            b: { content: 'C.9' },
                            c: { content: 'HDD15' },
                            d: { 
                                type: 'calculated',
                                fieldId: 'd_19',
                                value: '0',
                                classes: ['calculated-value']
                            },
                            e: { content: '' },
                            f: { content: 'C.12', classes: ['label-prefix'] },
                            g: { content: 'July 2.5% Tdb' },
                            h: { 
                                type: 'calculated',
                                fieldId: 'h_19',
                                value: '0',
                                classes: ['calculated-value']
                            },
                            i: { 
                                type: 'calculated',
                                fieldId: 'i_19',
                                value: '0',
                                classes: ['calculated-value']
                            },
                            j: { content: 'C.15', classes: ['label-prefix'] },
                            k: { content: 'January 1%' },
                            l: { 
                                type: 'calculated',
                                fieldId: 'l_19',
                                value: '0',
                                classes: ['calculated-value']
                            },
                            m: { content: '°C' }
                        }
                    },
                    
                    // Row 8: Rain Annual
                    {
                        id: '8',
                        rowNumber: '20',
                        cells: {
                            b: { content: 'C.10' },
                            c: { content: 'Rain Annual (mm)' },
                            d: { 
                                type: 'calculated',
                                fieldId: 'd_20',
                                value: '0',
                                classes: ['calculated-value']
                            },
                            e: { 
                                type: 'calculated',
                                fieldId: 'e_20',
                                value: '0',
                                classes: ['calculated-value']
                            },
                            f: { content: 'C.13', classes: ['label-prefix'] },
                            g: { content: 'July 2.5% Twb' },
                            h: { 
                                type: 'calculated',
                                fieldId: 'h_20',
                                value: '0',
                                classes: ['calculated-value']
                            },
                            i: { 
                                type: 'calculated',
                                fieldId: 'i_20',
                                value: '0',
                                classes: ['calculated-value']
                            },
                            j: { content: '' },
                            k: { content: '' },
                            l: { content: '' },
                            m: { content: '' }
                        }
                    }
                ]
            };
        },
        
        // Get province options
        getProvinceOptions: function() {
            const climateData = window.TEUI.ClimateData || {};
            const provinces = Object.keys(climateData);
            const options = [{ value: '', name: 'Select Province' }];
            
            provinces.forEach(prov => {
                options.push({
                    value: prov,
                    name: this.getProvinceName(prov)
                });
            });
            
            return options;
        },
        
        // Get full province name
        getProvinceName: function(abbr) {
            const names = {
                'AB': 'Alberta',
                'BC': 'British Columbia',
                'MB': 'Manitoba',
                'NB': 'New Brunswick',
                'NL': 'Newfoundland and Labrador',
                'NS': 'Nova Scotia',
                'NT': 'Northwest Territories',
                'NU': 'Nunavut',
                'ON': 'Ontario',
                'PE': 'Prince Edward Island',
                'QC': 'Québec',
                'SK': 'Saskatchewan',
                'YT': 'Yukon'
            };
            return names[abbr] || abbr;
        },
        
        // Initialize section
        initialize: function() {
            console.log('Initializing Section 03: Climate Calculations');
            
            // Render the section using the grid renderer
            if (window.TEUI.v4012.SectionRenderer) {
                window.TEUI.v4012.SectionRenderer.renderSection(
                    this.config.id,
                    this.getLayout()
                );
            }
            
            // Set up event handlers
            this.setupEventHandlers();
            
            // Load initial data
            this.loadInitialData();
        },
        
        // Set up event handlers
        setupEventHandlers: function() {
            const section = document.getElementById('climateCalculations');
            if (!section) return;
            
            // Handle dropdown changes
            section.addEventListener('change', (e) => {
                if (e.target.matches('select')) {
                    const dropdownId = e.target.getAttribute('data-dropdown-id');
                    
                    if (dropdownId === 'dd_d_14') {
                        this.handleProvinceChange(e);
                    } else if (dropdownId === 'dd_h_14') {
                        this.handleCityChange(e);
                    }
                }
            });
            
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
                }
            });
            
            // Listen for occupancy changes from S02
            const state = window.TEUI.v4012?.DualState;
            if (state) {
                state.subscribe('d_12', () => {
                    this.updateTemperatureSetpoints();
                });
            }
        },
        
        // Handle province change
        handleProvinceChange: function(e) {
            const province = e.target.value;
            const cityDropdown = document.querySelector('[data-dropdown-id="dd_h_14"]');
            
            if (!cityDropdown) return;
            
            // Clear cities
            cityDropdown.innerHTML = '<option value="">Select City</option>';
            
            const climateData = window.TEUI.ClimateData;
            if (province && climateData && climateData[province]) {
                const cities = Object.keys(climateData[province]);
                cities.forEach(city => {
                    const option = document.createElement('option');
                    option.value = city;
                    option.textContent = city;
                    cityDropdown.appendChild(option);
                });
                
                // Select first city if available
                if (cities.length > 0) {
                    cityDropdown.value = cities[0];
                    this.handleCityChange({ target: cityDropdown });
                }
            }
        },
        
        // Handle city change
        handleCityChange: function(e) {
            const city = e.target.value;
            const province = document.querySelector('[data-field-id="d_14"]')?.value;
            
            if (city && province) {
                const climateData = window.TEUI.ClimateData || {};
                const cityData = climateData[province]?.[city];
                
                if (cityData) {
                    // Update elevation (derived field)
                    this.updateField('d_15', cityData['Elev ASL (m)'] || 0);
                    
                    // Update climate values
                    this.updateField('d_18', cityData.HDD18 || 0);
                    this.updateField('e_18', cityData.HDD18_2021_2050 || 0);
                    this.updateField('d_19', cityData.HDD15 || 0);
                    this.updateField('h_18', cityData.CDD24 || 0);
                    this.updateField('i_18', cityData.CDD24_2021_2050 || 0);
                    this.updateField('h_19', cityData.July_2_5_Tdb || 0);
                    this.updateField('i_19', cityData.Future_July_2_5_Tdb || 0);
                    this.updateField('h_20', cityData.July_2_5_Twb || 0);
                    this.updateField('i_20', cityData.Future_July_2_5_Twb || 0);
                    this.updateField('l_18', cityData.January_2_5 || 0);
                    this.updateField('l_19', cityData.January_1 || 0);
                    this.updateField('d_20', cityData.Rain_Annual_mm || 0);
                    this.updateField('e_20', cityData.Rain_Annual_mm_New || 0);
                }
            }
            
            // Update state
            const state = window.TEUI.v4012?.DualState;
            if (state) {
                state.setValue('h_14', city);
            }
        },
        
        // Update temperature setpoints based on occupancy type
        updateTemperatureSetpoints: function() {
            const state = window.TEUI.v4012?.DualState;
            if (!state) return;
            
            // Get occupancy type from S02
            const occupancy = state.getValue('d_12') || 'D-Business & Personal Services';
            
            // Temperature setpoints by occupancy type
            const setpoints = {
                'A-Assembly': { heating: 20, cooling: 25 },
                'B1-Detention': { heating: 21, cooling: 24 },
                'B2-Care and Treatment': { heating: 22, cooling: 24 },
                'B3-Detention Care & Treatment': { heating: 22, cooling: 24 },
                'C-Residential': { heating: 21, cooling: 24 },
                'D-Business & Personal Services': { heating: 21, cooling: 24 },
                'E-Mercantile': { heating: 20, cooling: 25 },
                'F-Industrial': { heating: 18, cooling: 26 }
            };
            
            const temps = setpoints[occupancy] || { heating: 21, cooling: 24 };
            
            // Update display
            this.updateField('d_16', temps.heating);
            this.updateField('h_16', temps.cooling);
            
            // Update state
            state.setValue('d_16', temps.heating);
            state.setValue('h_16', temps.cooling);
        },
        
        // Helper function to update field values in the DOM
        updateField: function(fieldId, value) {
            const element = document.querySelector(`[data-field-id="${fieldId}"]`);
            if (element) {
                if (element.tagName === 'INPUT' || element.tagName === 'SELECT') {
                    element.value = value;
                } else {
                    element.textContent = value;
                }
            }
        },
        
        // Load initial data
        loadInitialData: function() {
            // Set default province and city
            const provinceDropdown = document.querySelector('[data-dropdown-id="dd_d_14"]');
            if (provinceDropdown) {
                provinceDropdown.value = 'ON';
                this.handleProvinceChange({ target: provinceDropdown });
                
                // After province is set, set default city
                setTimeout(() => {
                    const cityDropdown = document.querySelector('[data-dropdown-id="dd_h_14"]');
                    if (cityDropdown && cityDropdown.options.length > 1) {
                        cityDropdown.value = 'Toronto';
                        this.handleCityChange({ target: cityDropdown });
                    }
                }, 100);
            }
            
            // Update temperature setpoints based on current occupancy
            this.updateTemperatureSetpoints();
        }
    };
    
    // Expose the module
    window.TEUI.v4012.Sections.S03 = S03;
})(); 