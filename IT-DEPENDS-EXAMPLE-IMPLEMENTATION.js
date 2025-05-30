/**
 * IT-DEPENDS-EXAMPLE-IMPLEMENTATION.js
 * 
 * Example implementation showing how to use the new StateManager calculation orchestration
 * to replace manual calculateAll() calls with dependency-driven calculations.
 * 
 * This demonstrates the "IT-DEPENDS" optimization strategy from DEPENDENCY-OPTIMIZATION-STRATEGY.md
 * 
 * BEFORE: Manual calculateAll() calls that recalculate everything
 * AFTER: Smart dependency-driven calculations that only recalculate affected fields
 */

// Example: Registering TEUI calculation functions with StateManager
function setupTEUICalculations() {
    const stateManager = window.TEUI.StateManager;
    
    // Register calculation for actual TEUI (k_10)
    stateManager.registerCalculation('k_10', function() {
        const actualEnergy = window.TEUI.parseNumeric(stateManager.getValue('f_32'), 132938);
        const area = window.TEUI.parseNumeric(stateManager.getValue('h_15'), 1427.20);
        
        if (area <= 0) {
            console.warn('[TEUI Calc] Invalid area for k_10 calculation');
            return '0.0';
        }
        
        const actualTEUI = Math.round((actualEnergy / area) * 10) / 10;
        console.log(`[TEUI Calc] Calculated k_10 (Actual TEUI): ${actualTEUI}`);
        return actualTEUI.toString();
    }, 'Actual TEUI calculation (kWh/m²/year)');
    
    // Register calculation for target TEUI (h_10)
    stateManager.registerCalculation('h_10', function() {
        const targetEnergy = window.TEUI.parseNumeric(stateManager.getValue('j_32'), 132765.65);
        const area = window.TEUI.parseNumeric(stateManager.getValue('h_15'), 1427.20);
        
        if (area <= 0) {
            console.warn('[TEUI Calc] Invalid area for h_10 calculation');
            return '0.0';
        }
        
        const targetTEUI = Math.round((targetEnergy / area) * 10) / 10;
        console.log(`[TEUI Calc] Calculated h_10 (Target TEUI): ${targetTEUI}`);
        return targetTEUI.toString();
    }, 'Target TEUI calculation (kWh/m²/year)');
    
    // Register calculation for TEUI percentage (j_10)
    stateManager.registerCalculation('j_10', function() {
        const actualTEUI = window.TEUI.parseNumeric(stateManager.getValue('k_10'), 0);
        const targetTEUI = window.TEUI.parseNumeric(stateManager.getValue('h_10'), 0);
        
        if (targetTEUI <= 0) {
            console.warn('[TEUI Calc] Invalid target TEUI for j_10 percentage calculation');
            return '0%';
        }
        
        const percentage = Math.round((actualTEUI / targetTEUI) * 100);
        console.log(`[TEUI Calc] Calculated j_10 (TEUI %): ${percentage}%`);
        return `${percentage}%`;
    }, 'TEUI percentage calculation (actual/target * 100)');
}

// Example: Registering Ground Facing HDD calculation
function setupGroundFacingCalculations() {
    const stateManager = window.TEUI.StateManager;
    
    // Register calculation for Ground Facing HDD (d_22)
    stateManager.registerCalculation('d_22', function() {
        const heatingSetpoint = window.TEUI.parseNumeric(stateManager.getValue('h_23'), 21);
        const coolingSeason = window.TEUI.parseNumeric(stateManager.getValue('m_19'), 120);
        
        const groundFacingHDD = Math.round((heatingSetpoint - 10) * 365 - coolingSeason);
        console.log(`[GF Calc] Calculated d_22 (Ground Facing HDD): ${groundFacingHDD}`);
        return groundFacingHDD.toString();
    }, 'Ground Facing HDD calculation');
    
    // Register calculation for temperature conversions
    stateManager.registerCalculation('e_23a', function() {
        const celsiusValue = window.TEUI.parseNumeric(stateManager.getValue('d_23a'), 21);
        const fahrenheit = Math.round((celsiusValue * 9/5) + 32);
        console.log(`[Temp Calc] Calculated e_23a (C to F): ${fahrenheit}°F`);
        return fahrenheit.toString();
    }, 'Celsius to Fahrenheit conversion for heating setpoint');
}

// Example: Replace manual calculateAll() calls with smart listeners
function setupSmartListeners() {
    const stateManager = window.TEUI.StateManager;
    
    // BEFORE: Manual calculateAll() when energy values change
    // stateManager.addListener('f_32', () => {
    //     sect01.calculateAll();
    //     sect04.calculateAll();
    //     sect15.calculateAll();
    // });
    
    // AFTER: Smart dependency-driven calculation
    stateManager.addSmartListener('f_32', (newValue, oldValue, fieldId) => {
        console.log(`[Smart Listener] Actual energy changed: ${oldValue} → ${newValue}`);
        // The smart listener automatically triggers calculateDependencyChain()
        // Only fields that depend on f_32 will be recalculated
    });
    
    stateManager.addSmartListener('j_32', (newValue, oldValue, fieldId) => {
        console.log(`[Smart Listener] Target energy changed: ${oldValue} → ${newValue}`);
    });
    
    stateManager.addSmartListener('h_15', (newValue, oldValue, fieldId) => {
        console.log(`[Smart Listener] Building area changed: ${oldValue} → ${newValue}`);
    });
    
    // For complex calculations that need additional logic before dependency calculation
    stateManager.addSmartListener('h_23', (newValue, oldValue, fieldId) => {
        console.log(`[Smart Listener] Heating setpoint changed: ${oldValue} → ${newValue}`);
        
        // Additional validation or processing if needed
        if (newValue < 18 || newValue > 24) {
            console.warn('[Smart Listener] Heating setpoint outside typical range (18-24°C)');
        }
    });
}

// Example: Batch calculation for data imports
function demonstrateBatchCalculation() {
    const stateManager = window.TEUI.StateManager;
    
    // Simulate importing multiple values at once
    const importedData = {
        'f_32': '145000',  // New actual energy
        'j_32': '135000',  // New target energy  
        'h_15': '1500',    // New building area
        'h_23': '22'       // New heating setpoint
    };
    
    console.log('[Batch Demo] Starting batch import...');
    
    // Set all values (this marks dependents as dirty)
    const changedFields = [];
    Object.entries(importedData).forEach(([fieldId, value]) => {
        stateManager.setValue(fieldId, value, stateManager.VALUE_STATES.IMPORTED);
        changedFields.push(fieldId);
    });
    
    // Calculate all affected dependencies in one optimized pass
    const calculatedFields = stateManager.calculateBatchDependencies(changedFields);
    
    console.log(`[Batch Demo] Import complete. Recalculated ${calculatedFields.length} dependent fields:`, calculatedFields);
}

// Example: Manual dependency chain trigger for testing
function demonstrateManualDependencyCalculation() {
    const stateManager = window.TEUI.StateManager;
    
    console.log('[Manual Demo] Triggering dependency chain for f_32...');
    
    // Manually trigger calculation chain (useful for testing or special cases)
    const calculatedFields = stateManager.calculateDependencyChain('f_32');
    
    console.log(`[Manual Demo] Calculated ${calculatedFields.length} fields:`, calculatedFields);
}

// Example: Debugging and monitoring
function setupCalculationMonitoring() {
    const stateManager = window.TEUI.StateManager;
    
    // Add a global listener to monitor all calculation activity
    document.addEventListener('FieldValueChanged', function(event) {
        const { modelType, fieldId, newValue } = event.detail;
        console.log(`[Monitor] Field changed: ${fieldId} = ${newValue} (${modelType} model)`);
    });
    
    // Monitor StateManager performance
    window.monitorStateManager = function() {
        const debugInfo = stateManager.getDebugInfo();
        console.log('[Monitor] StateManager Status:', debugInfo);
        
        console.log('[Monitor] Registered calculations:', 
            Array.from(stateManager.fieldCalculations?.keys?.() || []));
    };
}

// Main initialization function
function initializeCalculationOrchestration() {
    console.log('[IT-DEPENDS] Initializing calculation orchestration...');
    
    // Set up all the example calculations
    setupTEUICalculations();
    setupGroundFacingCalculations();
    setupSmartListeners();
    setupCalculationMonitoring();
    
    console.log('[IT-DEPENDS] Calculation orchestration setup complete!');
    console.log('[IT-DEPENDS] Try these demo functions:');
    console.log('- demonstrateBatchCalculation()');
    console.log('- demonstrateManualDependencyCalculation()');
    console.log('- monitorStateManager()');
    
    // Make demo functions globally available
    window.demonstrateBatchCalculation = demonstrateBatchCalculation;
    window.demonstrateManualDependencyCalculation = demonstrateManualDependencyCalculation;
}

// Auto-initialize when document is ready
document.addEventListener('DOMContentLoaded', function() {
    // Wait for StateManager to be ready
    if (window.TEUI?.StateManager) {
        initializeCalculationOrchestration();
    } else {
        // Try again after a short delay
        setTimeout(() => {
            if (window.TEUI?.StateManager) {
                initializeCalculationOrchestration();
            } else {
                console.warn('[IT-DEPENDS] StateManager not available for calculation orchestration setup');
            }
        }, 1000);
    }
});

// Export for use in other modules
window.TEUI = window.TEUI || {};
window.TEUI.CalculationOrchestration = {
    initializeCalculationOrchestration,
    setupTEUICalculations,
    setupGroundFacingCalculations,
    setupSmartListeners,
    demonstrateBatchCalculation,
    demonstrateManualDependencyCalculation,
    setupCalculationMonitoring
};

console.log('[IT-DEPENDS-EXAMPLE-IMPLEMENTATION.js] Module loaded.'); 