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
            return {
                rows: [
                    // Header row
                    {
                        id: 'header',
                        cells: {
                            a: { content: '' },
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
                    // Row 19: Province, City, Climate Zone
                    {
                        id: 'L.1.1',
                        label: 'Province',
                        cells: {
                            c: { content: 'Province' },
                            d: {
                                fieldId: 'd_19',
                                type: 'dropdown',
                                dropdownId: 'dd_d_19',
                                value: 'ON',
                                options: this.getProvinceOptions(),
                                colspan: 2
                            },
                            f: { content: 'L.1.2', classes: ['label-prefix'] },
                            g: { content: 'City', classes: ['label-main'] },
                            h: {
                                fieldId: 'h_19',
                                type: 'dropdown',
                                dropdownId: 'dd_h_19',
                                value: '',
                                options: [{ value: '', name: 'Select City' }]
                            },
                            i: { content: 'Climate Zone' },
                            j: {
                                fieldId: 'j_19',
                                type: 'calculated',
                                value: '6.0',
                                classes: ['calculated-value']
                            },
                            k: { content: 'L.3.3', classes: ['label-prefix'] },
                            l: { content: 'Days Cooling', classes: ['label-main'] },
                            m: {
                                fieldId: 'm_19',
                                type: 'editable',
                                value: '120',
                                classes: ['user-input', 'editable']
                            }
                        }
                    },
                    // Row 20: Heating Degree Days
                    {
                        id: 'L.2.1',
                        label: 'Heating Degree Days (HDD)',
                        cells: {
                            c: { content: 'Heating Degree Days (HDD)' },
                            d: {
                                fieldId: 'd_20',
                                type: 'calculated',
                                value: '4600',
                                classes: ['calculated-value']
                            },
                            f: { content: 'L.2.2', classes: ['label-prefix'] },
                            g: { content: 'Current or Future Values', classes: ['label-main'] },
                            h: {
                                fieldId: 'h_20',
                                type: 'dropdown',
                                dropdownId: 'dd_h_20',
                                value: 'Present',
                                options: [
                                    { value: 'Present', name: 'Present (1991-2020)' },
                                    { value: 'Future', name: 'Future (2021-2050)' }
                                ]
                            },
                            j: {
                                fieldId: 'j_20',
                                type: 'calculated',
                                value: 'HDD Ref Lookup',
                                classes: ['reference-value']
                            },
                            k: { content: 'HDD - Energy Star', classes: ['reference-label'] }
                        }
                    },
                    // Row 21: Cooling Degree Days
                    {
                        id: 'L.2.3',
                        label: 'Cooling Degree Days (CDD)',
                        cells: {
                            c: { content: 'Cooling Degree Days (CDD)' },
                            d: {
                                fieldId: 'd_21',
                                type: 'calculated',
                                value: '196',
                                classes: ['calculated-value']
                            },
                            f: { content: 'G.4.2', classes: ['label-prefix'] },
                            g: { content: 'Capacitance', classes: ['label-main'] },
                            h: {
                                fieldId: 'h_21',
                                type: 'dropdown',
                                dropdownId: 'dd_h_21',
                                value: 'Capacitance',
                                options: [
                                    { value: 'Static', name: 'Static' },
                                    { value: 'Capacitance', name: 'Capacitance' }
                                ]
                            },
                            i: {
                                fieldId: 'i_21',
                                type: 'percentage',
                                value: '50',
                                min: 0,
                                max: 100,
                                step: 5
                            },
                            j: {
                                fieldId: 'j_21',
                                type: 'calculated',
                                value: 'CDD Ref Lookup',
                                classes: ['reference-value']
                            },
                            k: { content: 'CDD - Energy Star', classes: ['reference-label'] }
                        }
                    },
                    // Row 22: Ground Facing HDD/CDD, Elevation
                    {
                        id: 'L.2.4',
                        label: 'Ground Facing GF HDD',
                        cells: {
                            c: { content: 'Ground Facing GF HDD' },
                            d: {
                                fieldId: 'd_22',
                                type: 'calculated',
                                value: '1960',
                                classes: ['calculated-value']
                            },
                            e: { content: '°C•days', classes: ['unit-label'] },
                            f: { content: 'L.2.5', classes: ['label-prefix'] },
                            g: { content: 'GF CDD', classes: ['label-main'] },
                            h: {
                                fieldId: 'h_22',
                                type: 'calculated',
                                value: '-1680',
                                classes: ['calculated-value']
                            },
                            i: { content: '°C•days', classes: ['unit-label'] },
                            j: { content: 'L.1.3', classes: ['label-prefix'] },
                            k: { content: 'Elevation (ASL)', classes: ['label-main'] },
                            l: {
                                fieldId: 'l_22',
                                type: 'editable',
                                value: '80',
                                classes: ['user-input', 'editable']
                            },
                            m: { content: 'm', classes: ['unit-label'] }
                        }
                    },
                    // Row 23: Coldest Days, Heating Setpoint
                    {
                        id: 'L.3.1',
                        label: 'Coldest Days (Location Specific)',
                        cells: {
                            c: { content: 'Coldest Days (Location Specific)' },
                            d: {
                                fieldId: 'd_23',
                                type: 'calculated',
                                value: '-24',
                                classes: ['calculated-value']
                            },
                            e: {
                                fieldId: 'e_23',
                                type: 'calculated',
                                value: '-11',
                                classes: ['calculated-value']
                            },
                            f: { content: 'B.1.2', classes: ['label-prefix'] },
                            g: { content: 'Tset Heating', classes: ['label-main'] },
                            h: {
                                fieldId: 'h_23',
                                type: 'calculated',
                                value: '18',
                                classes: ['calculated-value']
                            },
                            i: {
                                fieldId: 'i_23',
                                type: 'calculated',
                                value: '64',
                                classes: ['calculated-value']
                            },
                            m: {
                                fieldId: 'm_23',
                                type: 'calculated',
                                value: '0%',
                                classes: ['calculated-value']
                            }
                        }
                    },
                    // Row 24: Hottest Days, Cooling Setpoint
                    {
                        id: 'L.3.2',
                        label: 'Hottest Days (Location Specific)',
                        cells: {
                            c: { content: 'Hottest Days (Location Specific)' },
                            d: {
                                fieldId: 'd_24',
                                type: 'calculated',
                                value: '30',
                                classes: ['calculated-value']
                            },
                            e: {
                                fieldId: 'e_24',
                                type: 'calculated',
                                value: '86',
                                classes: ['calculated-value']
                            },
                            f: { content: 'B.1.3', classes: ['label-prefix'] },
                            g: { content: 'Tset Cooling', classes: ['label-main'] },
                            h: {
                                fieldId: 'h_24',
                                type: 'calculated',
                                value: '24',
                                classes: ['calculated-value']
                            },
                            i: {
                                fieldId: 'i_24',
                                type: 'calculated',
                                value: '75',
                                classes: ['calculated-value']
                            },
                            j: { content: 'B.1.4', classes: ['label-prefix'] },
                            k: { content: 'Cooling Override', classes: ['label-main'] },
                            l: {
                                fieldId: 'l_24',
                                type: 'editable',
                                value: '24',
                                classes: ['user-input', 'editable']
                            },
                            m: {
                                fieldId: 'm_24',
                                type: 'calculated',
                                value: '109%',
                                classes: ['calculated-value']
                            }
                        }
                    }
                ]
            };
        },
        
        // Get province options
        getProvinceOptions: function() {
            const provinces = Object.keys(window.TEUI.ClimateData || {});
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
            // Province dropdown change
            const provinceDropdown = document.querySelector('[data-dropdown-id="dd_d_19"]');
            if (provinceDropdown) {
                provinceDropdown.addEventListener('change', (e) => this.handleProvinceChange(e));
            }
            
            // City dropdown change
            const cityDropdown = document.querySelector('[data-dropdown-id="dd_h_19"]');
            if (cityDropdown) {
                cityDropdown.addEventListener('change', (e) => this.handleCityChange(e));
            }
            
            // Timeframe dropdown change
            const timeframeDropdown = document.querySelector('[data-dropdown-id="dd_h_20"]');
            if (timeframeDropdown) {
                timeframeDropdown.addEventListener('change', (e) => this.updateClimateData());
            }
            
            // Capacitance dropdown
            const capacitanceDropdown = document.querySelector('[data-dropdown-id="dd_h_21"]');
            if (capacitanceDropdown) {
                capacitanceDropdown.addEventListener('change', (e) => this.calculateAll());
            }
            
            // Capacitance slider
            const capacitanceSlider = document.querySelector('[data-field-id="i_21"]');
            if (capacitanceSlider) {
                capacitanceSlider.addEventListener('input', (e) => this.calculateAll());
            }
            
            // Editable fields
            document.querySelectorAll('#climateCalculations .editable').forEach(field => {
                field.addEventListener('blur', (e) => this.handleEditableChange(e));
                field.addEventListener('keydown', (e) => {
                    if (e.key === 'Enter') {
                        e.preventDefault();
                        e.target.blur();
                    }
                });
            });
            
            // Weather data button
            const weatherBtn = document.getElementById('showWeatherDataBtn');
            if (weatherBtn) {
                weatherBtn.addEventListener('click', () => this.showWeatherData());
            }
        },
        
        // Handle province change
        handleProvinceChange: function(e) {
            const province = e.target.value;
            const cityDropdown = document.querySelector('[data-dropdown-id="dd_h_19"]');
            
            if (!cityDropdown) return;
            
            // Clear cities
            cityDropdown.innerHTML = '<option value="">Select City</option>';
            
            if (province && window.TEUI.ClimateData && window.TEUI.ClimateData[province]) {
                const cities = Object.keys(window.TEUI.ClimateData[province]);
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
            this.updateClimateData();
        },
        
        // Handle editable field change
        handleEditableChange: function(e) {
            const fieldId = e.target.getAttribute('data-field-id');
            const value = e.target.textContent.trim();
            
            // Store in state if available
            if (window.TEUI.v4012.DualState) {
                window.TEUI.v4012.DualState.setValue(fieldId, value);
            }
            
            // Recalculate
            this.calculateAll();
        },
        
        // Update climate data based on selections
        updateClimateData: function() {
            const province = document.querySelector('[data-dropdown-id="dd_d_19"]')?.value;
            const city = document.querySelector('[data-dropdown-id="dd_h_19"]')?.value;
            const timeframe = document.querySelector('[data-dropdown-id="dd_h_20"]')?.value || 'Present';
            
            if (!province || !city || !window.TEUI.ClimateData) return;
            
            const cityData = window.TEUI.ClimateData[province]?.[city];
            if (!cityData) return;
            
            // Update HDD
            const hddValue = timeframe === 'Future' ? cityData.HDD18_2021_2050 : cityData.HDD18;
            this.updateField('d_20', hddValue || 0);
            
            // Update CDD
            const cddValue = timeframe === 'Future' ? cityData.CDD24_2021_2050 : cityData.CDD24;
            this.updateField('d_21', cddValue || 0);
            
            // Update temperatures
            this.updateField('d_23', cityData.January_2_5 || -24);
            const hottestTemp = timeframe === 'Future' ? cityData.Future_July_2_5_Tdb : cityData.July_2_5_Tdb;
            this.updateField('d_24', hottestTemp || 30);
            
            // Update elevation
            this.updateField('l_22', cityData['Elev ASL (m)'] || 80);
            
            // Update reference values
            this.updateField('j_20', cityData.HDD18 || 0);
            this.updateField('j_21', cityData.CDD24 || 0);
            
            // Recalculate
            this.calculateAll();
        },
        
        // Update field value
        updateField: function(fieldId, value) {
            const element = document.querySelector(`[data-field-id="${fieldId}"]`);
            if (element) {
                element.textContent = value;
            }
            
            // Update state
            if (window.TEUI.v4012.DualState) {
                window.TEUI.v4012.DualState.setValue(fieldId, value);
            }
        },
        
        // Calculate all derived values
        calculateAll: function() {
            // Climate zone based on HDD
            const hdd = parseFloat(document.querySelector('[data-field-id="d_20"]')?.textContent) || 0;
            let climateZone = '6.0';
            if (hdd < 3000) climateZone = '4.0';
            else if (hdd < 4000) climateZone = '5.0';
            else if (hdd < 5000) climateZone = '6.0';
            else if (hdd < 6000) climateZone = '7.1';
            else if (hdd < 7000) climateZone = '7.2';
            else climateZone = '8.0';
            this.updateField('j_19', climateZone);
            
            // Temperature conversions
            const coldestC = parseFloat(document.querySelector('[data-field-id="d_23"]')?.textContent) || 0;
            this.updateField('e_23', Math.round((coldestC * 9/5) + 32));
            
            const hottestC = parseFloat(document.querySelector('[data-field-id="d_24"]')?.textContent) || 0;
            this.updateField('e_24', Math.round((hottestC * 9/5) + 32));
            
            const heatingC = parseFloat(document.querySelector('[data-field-id="h_23"]')?.textContent) || 18;
            this.updateField('i_23', Math.round((heatingC * 9/5) + 32));
            
            const coolingC = parseFloat(document.querySelector('[data-field-id="h_24"]')?.textContent) || 24;
            this.updateField('i_24', Math.round((coolingC * 9/5) + 32));
            
            // Ground facing calculations
            const daysCooling = parseFloat(document.querySelector('[data-field-id="m_19"]')?.textContent) || 120;
            const heatingDays = 365 - daysCooling;
            const gfHdd = Math.round((heatingC - 10) * heatingDays);
            this.updateField('d_22', gfHdd);
            
            const capacitance = document.querySelector('[data-dropdown-id="dd_h_21"]')?.value || 'Capacitance';
            let gfCdd;
            if (capacitance === 'Static') {
                gfCdd = Math.max(0, (10 - coolingC) * daysCooling);
            } else {
                gfCdd = (10 - coolingC) * daysCooling;
            }
            this.updateField('h_22', Math.round(gfCdd));
            
            // Cooling percentage
            const coolingOverride = parseFloat(document.querySelector('[data-field-id="l_24"]')?.textContent) || 24;
            const coolingPercent = Math.round((coolingOverride / 22) * 100);
            this.updateField('m_24', coolingPercent + '%');
        },
        
        // Show weather data modal
        showWeatherData: function() {
            const province = document.querySelector('[data-dropdown-id="dd_d_19"]')?.value;
            const city = document.querySelector('[data-dropdown-id="dd_h_19"]')?.value;
            
            if (!province || !city) {
                alert('Please select a province and city first.');
                return;
            }
            
            const cityData = window.TEUI.ClimateData?.[province]?.[city];
            if (!cityData) {
                alert('No weather data available for the selected location.');
                return;
            }
            
            // Update modal content
            const modalTitle = document.getElementById('weatherDataModalLabel');
            const modalContent = document.getElementById('weatherDataContent');
            
            if (modalTitle) {
                modalTitle.textContent = `Weather Data for ${city}, ${this.getProvinceName(province)}`;
            }
            
            if (modalContent) {
                let content = '';
                Object.entries(cityData).forEach(([key, value]) => {
                    content += `${key}: ${value}\n`;
                });
                modalContent.textContent = content;
            }
            
            // Show modal using Bootstrap
            const modal = new bootstrap.Modal(document.getElementById('weatherDataModal'));
            modal.show();
        },
        
        // Load initial data
        loadInitialData: function() {
            // Set default province
            const provinceDropdown = document.querySelector('[data-dropdown-id="dd_d_19"]');
            if (provinceDropdown && provinceDropdown.value) {
                this.handleProvinceChange({ target: provinceDropdown });
            }
        }
    };
    
    // Expose the module
    window.TEUI.v4012.Sections.S03 = S03;
})(); 