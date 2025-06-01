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
    
    // DISABLED: This global listener was causing recursion and spam
    // Add a global listener to monitor all calculation activity
    // document.addEventListener('FieldValueChanged', function(event) {
    //     const { modelType, fieldId, newValue } = event.detail;
    //     console.log(`[Monitor] Field changed: ${fieldId} = ${newValue} (${modelType} model)`);
    // });
    
    // Monitor StateManager performance
    window.monitorStateManager = function() {
        const debugInfo = stateManager.getDebugInfo();
        console.log('[Monitor] StateManager Status:', debugInfo);
        
        console.log('[Monitor] Registered calculations:', 
            Array.from(stateManager.fieldCalculations?.keys?.() || []));
            
        console.log('[Monitor] Current dirty fields:', stateManager.getDirtyFields());
        console.log('[Monitor] Total dependencies registered:', debugInfo.dependencyCount);
    };
}

// Main initialization function
function initializeCalculationOrchestration() {
    // console.log('[IT-DEPENDS] Initializing calculation orchestration...');
    
    // Set up all the example calculations
    setupTEUICalculations();
    setupGroundFacingCalculations();
    
    // DISABLED: Smart listeners auto-setup to prevent conflicts with existing traffic cop systems
    // setupSmartListeners();
    
    setupCalculationMonitoring();
    
    // console.log('[IT-DEPENDS] Calculation orchestration setup complete!');
    // console.log('[IT-DEPENDS] Available demo functions:');
    // console.log('- demonstrateBatchCalculation()');
    // console.log('- demonstrateManualDependencyCalculation()');
    // console.log('- monitorStateManager() - Monitor system status and metrics');
    // console.log('- setupSmartListeners() // Manual setup when ready to replace existing listeners');
    
    // Make demo functions globally available
    window.demonstrateBatchCalculation = demonstrateBatchCalculation;
    window.demonstrateManualDependencyCalculation = demonstrateManualDependencyCalculation;
    window.setupSmartListeners = setupSmartListeners; // Available for manual testing
}

// =============================================================================
// AUTO-INITIALIZATION
// =============================================================================

// Automatically initialize when the script loads (after a short delay to ensure dependencies)
document.addEventListener('DOMContentLoaded', function() {
    setTimeout(() => {
        if (window.TEUI && window.TEUI.StateManager) {
            // console.log('[IT-DEPENDS] Auto-initializing calculation orchestration...');
            initializeCalculationOrchestration();
        } else {
            console.warn('[IT-DEPENDS] StateManager not available for auto-initialization');
        }
    }, 100);
});

// Fallback: Try immediate initialization if DOMContentLoaded already fired
if (document.readyState === 'loading') {
    // DOMContentLoaded will fire, use that
} else {
    // DOMContentLoaded already fired, initialize immediately
    setTimeout(() => {
        if (window.TEUI && window.TEUI.StateManager) {
            // console.log('[IT-DEPENDS] Auto-initializing calculation orchestration (immediate)...');
            initializeCalculationOrchestration();
        }
    }, 100);
}

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

/**
 * Test the Section 13 d_115 IT-DEPENDS registration
 * Run this in browser console after page loads
 */
function testS13_d115_ITDepends() {
    console.log('🧪 Testing S13 d_115 IT-DEPENDS Registration');
    
    if (!window.TEUI?.StateManager) {
        console.error('❌ StateManager not available');
        return;
    }
    
    const sm = window.TEUI.StateManager;
    
    // 1. Check if d_115 calculation is registered (FIXED: use public method)
    console.log('📋 Checking d_115 registration...');
    const hasRegistration = sm.hasCalculation && sm.hasCalculation('d_115');
    console.log(`d_115 registered: ${hasRegistration ? '✅' : '❌'}`);
    
    if (!hasRegistration) {
        console.error('❌ d_115 calculation not registered');
        console.log('Available registered calculations:', sm.getRegisteredCalculations ? sm.getRegisteredCalculations() : 'getRegisteredCalculations not found');
        return;
    }
    
    // 2. Set up test scenario - Gas system with specific values
    console.log('🔧 Setting up test scenario...');
    sm.setValue('d_113', 'Gas', 'user-modified');     // Gas heating system
    sm.setValue('d_127', '10000', 'user-modified');   // 10,000 kWh TEDI
    sm.setValue('j_115', '0.9', 'user-modified');     // 90% AFUE
    
    // 3. Trigger the IT-DEPENDS calculation for d_115
    console.log('⚡ Triggering IT-DEPENDS calculation...');
    const result = sm.triggerFieldCalculation('d_115');
    console.log(`Calculation result: ${result}`);
    
    // 4. Verify the calculation is correct
    // Expected: 10,000 / 0.9 = 11,111.11
    const expected = 10000 / 0.9;
    const isCorrect = Math.abs(result - expected) < 0.01;
    console.log(`Expected: ${expected.toFixed(2)}, Got: ${result}, Correct: ${isCorrect ? '✅' : '❌'}`);
    
    // 5. Check if StateManager value was updated
    const stateValue = sm.getValue('d_115');
    console.log(`StateManager d_115 value: ${stateValue}`);
    
    // 6. Test dependency chain calculation
    console.log('🔗 Testing dependency chain...');
    try {
        sm.calculateDependencyChain('j_115'); // AFUE change should trigger d_115
        console.log('✅ Dependency chain calculation completed');
    } catch (error) {
        console.error('❌ Dependency chain failed:', error);
    }
    
    console.log('🎯 S13 d_115 IT-DEPENDS test complete');
}

// Make the test function globally available
window.testS13_d115_ITDepends = testS13_d115_ITDepends; 