/**
 * 4012-S01.js
 * Section 01: Key Values
 * The heart of OBJECTIVE - comparing Reference (code), Target (design), and Actual (measured) performance
 */

(function() {
    'use strict';
    
    // Ensure namespace exists
    window.TEUI = window.TEUI || {};
    window.TEUI.v4012 = window.TEUI.v4012 || {};
    window.TEUI.v4012.Sections = window.TEUI.v4012.Sections || {};
    
    // Section 01 Module
    const S01 = {
        // Section configuration
        config: {
            id: 'keyValues',
            name: 'Key Values',
            number: '01'
        },
        
        // Initialize section
        initialize: function() {
            console.log('Initializing Section 01: Key Values');
            
            // Render the section
            this.render();
            
            // Set up event handlers
            this.setupEventHandlers();
            
            // Load initial values
            this.updateValues();
        },
        
        // Render the section content
        render: function() {
            const contentElement = document.querySelector('#keyValues .section-content');
            if (!contentElement) return;
            
            contentElement.innerHTML = `
                <div class="key-values-table">
                    <!-- Header Row -->
                    <div class="key-values-header">
                        <div>Key Values</div>
                        <div>Reference</div>
                        <div>Target</div>
                        <div>Actual</div>
                        <div>%</div>
                    </div>
                    
                    <!-- T.1 Lifetime Carbon -->
                    <div class="key-values-row" data-metric="T1">
                        <div>
                            <div class="key-value-label">T.1 Lifetime Carbon</div>
                            <div class="key-value-sublabel">Lifetime Emissions Intensity kgCO2e/m²/Service Life (Yrs)</div>
                            <div class="progress-bar-container">
                                <div class="progress-bar tier3" style="width: 30%"></div>
                            </div>
                        </div>
                        <div>
                            <div class="key-value-sublabel">Reference 100% (Baseline)</div>
                            <div class="key-value-metric reference" data-field-id="t1_reference">4.9</div>
                        </div>
                        <div>
                            <div class="key-value-sublabel">Targeted (Design) -98% Reduction</div>
                            <div class="key-value-metric target" data-field-id="t1_target">9.7</div>
                        </div>
                        <div>
                            <div class="key-value-sublabel">Actual (Utility Bills)</div>
                            <div class="key-value-metric actual" data-field-id="t1_actual">9.7</div>
                        </div>
                        <div>
                            <div class="key-value-percentage" data-field-id="t1_percentage">N/A</div>
                        </div>
                    </div>
                    
                    <!-- T.2 Annual Carbon -->
                    <div class="key-values-row" data-metric="T2">
                        <div>
                            <div class="key-value-label">T.2 Annual Carbon</div>
                            <div class="key-value-sublabel">Annual Operational Emissions Intensity kgCO2e/m²</div>
                            <div class="progress-bar-container">
                                <div class="progress-bar tier2" style="width: 60%"></div>
                            </div>
                        </div>
                        <div>
                            <div class="key-value-sublabel">Reference 100% (Baseline)</div>
                            <div class="key-value-metric reference" data-field-id="t2_reference">4.9</div>
                        </div>
                        <div>
                            <div class="key-value-sublabel">Targeted (Design) 43% Reduction</div>
                            <div class="key-value-metric target" data-field-id="t2_target">2.8</div>
                        </div>
                        <div>
                            <div class="key-value-sublabel">Actual (Utility Bills)</div>
                            <div class="key-value-metric actual" data-field-id="t2_actual">2.8</div>
                        </div>
                        <div>
                            <div class="key-value-percentage positive" data-field-id="t2_percentage">
                                <i class="bi bi-check-circle"></i> 14%
                            </div>
                        </div>
                    </div>
                    
                    <!-- T.3 TEUI -->
                    <div class="key-values-row" data-metric="T3">
                        <div>
                            <div class="key-value-label">T.3 TEUI</div>
                            <div class="key-value-sublabel">Total Annual Operational Energy Use Intensity kWh/m²/yr</div>
                            <div class="progress-bar-container">
                                <div class="progress-bar tier5" style="width: 40%"></div>
                            </div>
                        </div>
                        <div>
                            <div class="key-value-sublabel">Reference 100% (Baseline)</div>
                            <div class="key-value-metric reference" data-field-id="t3_reference">
                                <span class="tier-indicator tier1">tier1</span> 136.9
                            </div>
                        </div>
                        <div>
                            <div class="key-value-sublabel">Targeted (Design) 39% Reduction</div>
                            <div class="key-value-metric target" data-field-id="t3_target">
                                <span class="tier-indicator tier3">tier3</span> 84.0
                            </div>
                        </div>
                        <div>
                            <div class="key-value-sublabel">Actual (Utility Bills)</div>
                            <div class="key-value-metric actual" data-field-id="t3_actual">54.8</div>
                        </div>
                        <div>
                            <div class="key-value-percentage positive" data-field-id="t3_percentage">
                                <i class="bi bi-check-circle"></i> 41%
                            </div>
                        </div>
                    </div>
                </div>
            `;
        },
        
        // Set up event handlers
        setupEventHandlers: function() {
            // Listen for state changes that affect key values
            if (window.TEUI.v4012.DualState) {
                // Add listeners for fields that affect key values
                const dependencies = [
                    'd_12', // Occupancy type
                    'd_13', // Reference standard
                    'd_14', // Building area
                    'd_20', // HDD
                    'd_21', // CDD
                    // Add more dependencies as needed
                ];
                
                dependencies.forEach(fieldId => {
                    window.TEUI.v4012.DualState.addListener(fieldId, () => {
                        this.updateValues();
                    });
                });
            }
        },
        
        // Update all key values based on calculations
        updateValues: function() {
            // Get current state values
            const state = window.TEUI.v4012.DualState;
            if (!state) return;
            
            // Calculate T1: Lifetime Carbon
            this.calculateT1();
            
            // Calculate T2: Annual Carbon
            this.calculateT2();
            
            // Calculate T3: TEUI
            this.calculateT3();
        },
        
        // Calculate T1: Lifetime Carbon
        calculateT1: function() {
            // Reference value (from building code/standard)
            const t1Reference = 4.9; // This would come from reference tables based on d_13
            this.updateField('t1_reference', t1Reference);
            
            // Target value (design intent)
            const t1Target = 9.7; // This would be calculated based on design parameters
            this.updateField('t1_target', t1Target);
            
            // Actual value (from utility bills if available)
            const t1Actual = 9.7; // This would come from actual measurements
            this.updateField('t1_actual', t1Actual);
            
            // Percentage (comparison)
            this.updateField('t1_percentage', 'N/A');
            
            // Update progress bar
            const progressBar = document.querySelector('[data-metric="T1"] .progress-bar');
            if (progressBar) {
                // Calculate progress based on target vs reference
                const progress = Math.max(0, Math.min(100, (t1Target / t1Reference) * 100));
                progressBar.style.width = `${progress}%`;
                
                // Update tier class based on value
                progressBar.className = 'progress-bar tier3'; // You can add logic to determine tier
            }
        },
        
        // Calculate T2: Annual Carbon
        calculateT2: function() {
            // Reference value
            const t2Reference = 4.9;
            this.updateField('t2_reference', t2Reference);
            
            // Target value
            const t2Target = 2.8;
            this.updateField('t2_target', t2Target);
            
            // Actual value
            const t2Actual = 2.8;
            this.updateField('t2_actual', t2Actual);
            
            // Percentage improvement
            const t2Percentage = Math.round(((t2Reference - t2Actual) / t2Reference) * 100);
            this.updateField('t2_percentage', `<i class="bi bi-check-circle"></i> ${t2Percentage}%`);
            
            // Update progress bar
            const progressBar = document.querySelector('[data-metric="T2"] .progress-bar');
            if (progressBar) {
                progressBar.style.width = `${100 - t2Percentage}%`;
            }
        },
        
        // Calculate T3: TEUI
        calculateT3: function() {
            // Reference value with tier
            const t3Reference = 136.9;
            const t3ReferenceTier = this.getTEUITier(t3Reference);
            this.updateField('t3_reference', 
                `<span class="tier-indicator ${t3ReferenceTier}">${t3ReferenceTier}</span> ${t3Reference}`
            );
            
            // Target value with tier
            const t3Target = 84.0;
            const t3TargetTier = this.getTEUITier(t3Target);
            this.updateField('t3_target', 
                `<span class="tier-indicator ${t3TargetTier}">${t3TargetTier}</span> ${t3Target}`
            );
            
            // Actual value
            const t3Actual = 54.8;
            this.updateField('t3_actual', t3Actual);
            
            // Percentage improvement
            const t3Percentage = Math.round(((t3Reference - t3Actual) / t3Reference) * 100);
            this.updateField('t3_percentage', `<i class="bi bi-check-circle"></i> ${t3Percentage}%`);
            
            // Update progress bar
            const progressBar = document.querySelector('[data-metric="T3"] .progress-bar');
            if (progressBar) {
                progressBar.style.width = `${100 - t3Percentage}%`;
                progressBar.className = `progress-bar ${this.getTEUITier(t3Actual)}`;
            }
        },
        
        // Get TEUI tier based on value
        getTEUITier: function(value) {
            if (value <= 50) return 'tier5';
            if (value <= 75) return 'tier4';
            if (value <= 100) return 'tier3';
            if (value <= 125) return 'tier2';
            return 'tier1';
        },
        
        // Update field in DOM
        updateField: function(fieldId, value) {
            const element = document.querySelector(`[data-field-id="${fieldId}"]`);
            if (element) {
                if (typeof value === 'string' && value.includes('<')) {
                    element.innerHTML = value;
                } else {
                    element.textContent = value;
                }
            }
            
            // Update state if numeric
            if (window.TEUI.v4012.DualState && typeof value === 'number') {
                window.TEUI.v4012.DualState.setValue(fieldId, value);
            }
        }
    };
    
    // Expose the module
    window.TEUI.v4012.Sections.S01 = S01;
})(); 