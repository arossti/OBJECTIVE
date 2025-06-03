/**
 * 4012-S03.js
 * Section 03: Climate - v4.012 Implementation
 * 
 * Internalized climate data, no Excel imports needed
 * Pure functional calculations with dual-engine support
 * No ES6 modules - works in air-gapped environments
 */

// Create namespace
window.TEUI = window.TEUI || {};
window.TEUI.v4012 = window.TEUI.v4012 || {};
window.TEUI.v4012.Sections = window.TEUI.v4012.Sections || {};

window.TEUI.v4012.Sections.S03 = (function() {
    'use strict';
    
    // Helper functions
    function getNumericValue(fieldId) {
        const value = window.TEUI.v4012.DualState?.getValue(fieldId, 'target', 'input');
        return window.TEUI.parseNumeric(value) || 0;
    }
    
    function setCalculatedValue(fieldId, value, formatType) {
        // Store raw value in state
        if (window.TEUI.v4012.DualState) {
            window.TEUI.v4012.DualState.setValue(fieldId, value, 'target', 'output');
        }
        
        // Update DOM with formatted value
        const element = document.querySelector(`[data-field-id="${fieldId}"]`);
        if (element) {
            const formattedValue = window.TEUI.formatNumber(value, formatType);
            element.textContent = formattedValue;
        }
    }
    
    // Province names mapping
    const provinceNames = {
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
    
    // Initialize dropdowns
    function initializeDropdowns() {
        const provinceDropdown = document.querySelector('[data-field-id="d_19"]');
        const cityDropdown = document.querySelector('[data-field-id="h_19"]');
        
        if (!provinceDropdown || !cityDropdown) return;
        
        // Populate provinces
        const climateData = window.TEUI.v4012.ClimateData;
        if (!climateData) return;
        
        // Clear and populate province dropdown
        provinceDropdown.innerHTML = '<option value="">Select Province</option>';
        Object.keys(climateData).sort().forEach(prov => {
            const option = document.createElement('option');
            option.value = prov;
            option.textContent = provinceNames[prov] || prov;
            provinceDropdown.appendChild(option);
        });
        
        // Set default to Ontario
        provinceDropdown.value = 'ON';
        updateCityDropdown('ON');
    }
    
    // Update city dropdown based on province
    function updateCityDropdown(province) {
        const cityDropdown = document.querySelector('[data-field-id="h_19"]');
        if (!cityDropdown) return;
        
        const climateData = window.TEUI.v4012.ClimateData;
        if (!climateData || !climateData[province]) return;
        
        // Clear and populate city dropdown
        cityDropdown.innerHTML = '<option value="">Select City</option>';
        Object.keys(climateData[province]).sort().forEach(city => {
            const option = document.createElement('option');
            option.value = city;
            option.textContent = city;
            cityDropdown.appendChild(option);
        });
        
        // Select first city or Alexandria for Ontario
        if (province === 'ON' && climateData[province]['Alexandria']) {
            cityDropdown.value = 'Alexandria';
        } else {
            const firstCity = Object.keys(climateData[province])[0];
            if (firstCity) cityDropdown.value = firstCity;
        }
        
        // Update climate data
        updateClimateData();
    }
    
    // Update climate data based on selections
    function updateClimateData() {
        const province = document.querySelector('[data-field-id="d_19"]')?.value;
        const city = document.querySelector('[data-field-id="h_19"]')?.value;
        const timeframe = document.querySelector('[data-field-id="h_20"]')?.value || 'Present';
        
        if (!province || !city) return;
        
        // Get climate data using the climate module
        const data = window.TEUI.v4012.Climate.getClimateData(province, city, timeframe);
        
        // Update state with climate values
        if (window.TEUI.v4012.DualState) {
            window.TEUI.v4012.DualState.setValue('d_20', data.hdd, 'climate', 'input');
            window.TEUI.v4012.DualState.setValue('d_21', data.cdd, 'climate', 'input');
            window.TEUI.v4012.DualState.setValue('d_23', data.coldestTemp, 'climate', 'input');
            window.TEUI.v4012.DualState.setValue('d_24', data.hottestTemp, 'climate', 'input');
            window.TEUI.v4012.DualState.setValue('l_22', data.elevation, 'climate', 'input');
        }
        
        // Update display
        setCalculatedValue('d_20', data.hdd, 'integer-comma');
        setCalculatedValue('d_21', data.cdd, 'integer-comma');
        setCalculatedValue('d_23', data.coldestTemp, 'integer-nocomma');
        setCalculatedValue('d_24', data.hottestTemp, 'integer-nocomma');
        setCalculatedValue('l_22', data.elevation, 'integer-nocomma');
        
        // Trigger calculations
        calculateAll();
    }
    
    // Calculate all climate-dependent values
    function calculateAll() {
        // Get current inputs
        const inputs = {
            target: {},
            reference: {}
        };
        
        // Gather all input values
        const fieldIds = ['d_12', 'd_13', 'd_20', 'd_21', 'd_23', 'd_24', 
                         'h_21', 'h_23', 'h_24', 'l_24', 'm_19'];
        
        fieldIds.forEach(fieldId => {
            if (window.TEUI.v4012.DualState) {
                inputs.target[fieldId] = window.TEUI.v4012.DualState.getValue(fieldId, 'target', 'input');
                inputs.reference[fieldId] = window.TEUI.v4012.DualState.getValue(fieldId, 'reference', 'input');
            }
        });
        
        // Run all climate calculations
        const results = window.TEUI.v4012.Climate.calculateAllClimate(inputs);
        
        // Update all calculated fields
        Object.entries(results).forEach(([fieldId, values]) => {
            // Determine format type
            let formatType = 'number-1dp';
            if (fieldId === 'j_19') {
                formatType = 'number-1dp';
            } else if (fieldId.includes('_22') || fieldId.includes('_23') || fieldId.includes('_24')) {
                formatType = 'integer-nocomma';
            } else if (fieldId === 'm_24') {
                formatType = 'percent-0dp';
            }
            
            // Update target value
            setCalculatedValue(fieldId, values.target, formatType);
            
            // Store reference value if available
            if (window.TEUI.v4012.DualState && values.reference !== undefined) {
                window.TEUI.v4012.DualState.setValue(fieldId, values.reference, 'reference', 'output');
            }
        });
    }
    
    // Initialize event handlers
    function initializeEventHandlers() {
        // Province dropdown
        const provinceDropdown = document.querySelector('[data-field-id="d_19"]');
        if (provinceDropdown) {
            provinceDropdown.addEventListener('change', function(e) {
                updateCityDropdown(e.target.value);
            });
        }
        
        // City dropdown
        const cityDropdown = document.querySelector('[data-field-id="h_19"]');
        if (cityDropdown) {
            cityDropdown.addEventListener('change', updateClimateData);
        }
        
        // Timeframe dropdown
        const timeframeDropdown = document.querySelector('[data-field-id="h_20"]');
        if (timeframeDropdown) {
            timeframeDropdown.addEventListener('change', updateClimateData);
        }
        
        // Capacitance dropdown
        const capacitanceDropdown = document.querySelector('[data-field-id="h_21"]');
        if (capacitanceDropdown) {
            capacitanceDropdown.addEventListener('change', calculateAll);
        }
        
        // Capacitance slider
        const capacitanceSlider = document.querySelector('[data-field-id="i_21"]');
        if (capacitanceSlider) {
            capacitanceSlider.addEventListener('input', function(e) {
                const value = e.target.value;
                // Update display
                const valueDisplay = document.querySelector('[data-field-id="i_21_display"]');
                if (valueDisplay) {
                    valueDisplay.textContent = value + '%';
                }
                // Store value
                if (window.TEUI.v4012.DualState) {
                    window.TEUI.v4012.DualState.setValue('i_21', value, 'target', 'input');
                }
                calculateAll();
            });
        }
        
        // Editable fields
        const editableFields = ['m_19', 'l_24'];
        editableFields.forEach(fieldId => {
            const field = document.querySelector(`[data-field-id="${fieldId}"]`);
            if (field && field.getAttribute('contenteditable') === 'true') {
                field.addEventListener('blur', handleEditableBlur);
                field.addEventListener('keydown', function(e) {
                    if (e.key === 'Enter') {
                        e.preventDefault();
                        e.stopPropagation();
                        this.blur();
                    }
                });
            }
        });
        
        // More Weather Data button
        const weatherDataBtn = document.getElementById('showWeatherDataBtn');
        if (weatherDataBtn) {
            weatherDataBtn.addEventListener('click', showWeatherData);
        }
    }
    
    // Handle editable field blur
    function handleEditableBlur(e) {
        const fieldId = e.target.getAttribute('data-field-id');
        if (!fieldId) return;
        
        const value = window.TEUI.parseNumeric(e.target.textContent.trim()) || 0;
        
        // Store value
        if (window.TEUI.v4012.DualState) {
            window.TEUI.v4012.DualState.setValue(fieldId, value, 'target', 'input');
        }
        
        // Format display
        e.target.textContent = window.TEUI.formatNumber(value, 'integer-nocomma');
        
        // Recalculate
        calculateAll();
    }
    
    // Show weather data modal
    function showWeatherData() {
        const province = document.querySelector('[data-field-id="d_19"]')?.value;
        const city = document.querySelector('[data-field-id="h_19"]')?.value;
        
        if (!province || !city) {
            alert('Please select a province and city first.');
            return;
        }
        
        const climateData = window.TEUI.v4012.ClimateData;
        if (!climateData || !climateData[province] || !climateData[province][city]) {
            alert('No climate data found for selected location.');
            return;
        }
        
        const cityData = climateData[province][city];
        
        // Create modal content
        let content = `<h3>Climate Data for ${city}, ${provinceNames[province] || province}</h3>`;
        content += '<div style="max-height: 400px; overflow-y: auto;">';
        
        Object.entries(cityData).forEach(([key, value]) => {
            if (key !== 'Location') {
                content += `<div style="display: flex; padding: 8px 0; border-bottom: 1px solid #eee;">`;
                content += `<div style="flex: 1; font-weight: 500;">${key}</div>`;
                content += `<div style="flex: 1; text-align: right;">${value !== null ? value : 'N/A'}</div>`;
                content += `</div>`;
            }
        });
        
        content += '</div>';
        
        // Show in modal (assuming modal exists in DOM)
        const modal = document.getElementById('weatherDataModal');
        const modalContent = document.getElementById('weatherDataContent');
        
        if (modal && modalContent) {
            modalContent.innerHTML = content;
            modal.style.display = 'block';
        } else {
            // Fallback to alert if modal not found
            alert('Weather data modal not found in DOM.');
        }
    }
    
    // Initialize section
    function initialize() {
        // Wait for DOM and dependencies
        if (document.readyState === 'loading') {
            document.addEventListener('DOMContentLoaded', initialize);
            return;
        }
        
        // Check dependencies
        if (!window.TEUI.v4012.Climate || !window.TEUI.v4012.ClimateData) {
            console.warn('S03: Waiting for dependencies...');
            setTimeout(initialize, 100);
            return;
        }
        
        // Initialize dropdowns and handlers
        initializeDropdowns();
        initializeEventHandlers();
        
        // Initial calculation
        calculateAll();
    }
    
    // Public API
    return {
        initialize: initialize,
        calculateAll: calculateAll,
        updateClimateData: updateClimateData
    };
    
})(); 