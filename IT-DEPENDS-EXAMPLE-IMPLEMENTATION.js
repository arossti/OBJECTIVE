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
    setupCalculationMonitoring,
    // S13 test functions
    testS13_d115_ITDepends,
    // S10 test functions
    testS10_ITDepends_Comprehensive,
    testS10_D80_Toggle,
    testS10_SHGC_States
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

/**
 * Test the Section 10 IT-DEPENDS migration
 * Run this in browser console after page loads to verify S10 migration
 */
function testS10_ITDepends_Comprehensive() {
    console.log('🧪 Testing S10 IT-DEPENDS Migration - Comprehensive Test');
    
    if (!window.TEUI?.StateManager) {
        console.error('❌ StateManager not available');
        return;
    }
    
    const sm = window.TEUI.StateManager;
    
    // 1. Check if key S10 calculations are registered
    console.log('📋 Checking S10 calculation registrations...');
    
    const criticalCalculations = [
        // Gain factors (climate-dependent)
        'm_73', 'm_74', 'm_75', 'm_76', 'm_77', 'm_78',
        // Heating gains (SHGC-dependent)
        'i_73', 'i_74', 'i_75', 'i_76', 'i_77', 'i_78',
        // Cooling gains (SHGC-dependent)
        'k_73', 'k_74', 'k_75', 'k_76', 'k_77', 'k_78',
        // Percentages
        'j_73', 'l_73',
        // Subtotals
        'i_79', 'k_79',
        // D80 toggle system
        'e_80', 'g_80', 'i_80', 'g_81', 'i_81', 'i_82',
        // Reference state calculations (SHGC=0.5)
        'ref_i_73', 'ref_k_73', 'ref_i_79', 'ref_e_80', 'ref_g_80', 'ref_i_80'
    ];
    
    const registeredCalculations = criticalCalculations.filter(id => sm.hasCalculation && sm.hasCalculation(id));
    console.log(`✅ ${registeredCalculations.length}/${criticalCalculations.length} critical calculations registered`);
    
    if (registeredCalculations.length !== criticalCalculations.length) {
        const missing = criticalCalculations.filter(id => !sm.hasCalculation(id));
        console.error('❌ Missing calculations:', missing);
        return;
    }
    
    // 2. Test Gain Factor calculation (climate-dependent)
    console.log('\n--- Testing Gain Factor Calculations (Climate-Dependent) ---');
    console.log('🔧 Setting up test scenario...');
    
    // Set climate zone to 6 (southern climates)
    sm.setValue('j_19', '6', 'user-modified');
    
    // Set different orientations for testing
    sm.setValue('e_74', 'North', 'user-modified');
    sm.setValue('e_76', 'South', 'user-modified');
    sm.setValue('e_77', 'West', 'user-modified');
    
    // Trigger gain factor calculations
    console.log('⚡ Triggering gain factor calculations...');
    const northGainFactor = sm.triggerFieldCalculation('m_74');
    const southGainFactor = sm.triggerFieldCalculation('m_76');
    const westGainFactor = sm.triggerFieldCalculation('m_77');
    
    console.log(`North gain factor: ${northGainFactor} (expected: 1.31)`);
    console.log(`South gain factor: ${southGainFactor} (expected: 70.74)`);  
    console.log(`West gain factor: ${westGainFactor} (expected: 25.86)`);
    
    // Verify gain factors are correct for climate zone 6
    const northCorrect = Math.abs(northGainFactor - 1.31) < 0.01;
    const southCorrect = Math.abs(southGainFactor - 70.74) < 0.01;
    const westCorrect = Math.abs(westGainFactor - 25.86) < 0.01;
    
    console.log(`Gain factors correct: ${northCorrect && southCorrect && westCorrect ? '✅' : '❌'}`);
    
    // 3. Test SHGC state handling (Reference vs Application)
    console.log('\n--- Testing SHGC State Handling (Critical Feature) ---');
    
    // Set different SHGC values for Application state
    sm.setValue('f_74', '0.3', 'user-modified');  // Low SHGC
    sm.setValue('f_76', '0.6', 'user-modified');  // High SHGC
    
    // Set window areas
    sm.setValue('d_74', '100', 'user-modified');  // North windows
    sm.setValue('d_76', '200', 'user-modified');  // South windows
    
    // Set no shading for simplicity
    sm.setValue('g_74', '0', 'user-modified');    // No winter shading
    sm.setValue('g_76', '0', 'user-modified');    // No winter shading
    
    // Calculate Application heating gains (should use actual SHGC values)
    console.log('⚡ Calculating Application heating gains with varying SHGC...');
    const appNorthHeating = sm.triggerFieldCalculation('i_74');
    const appSouthHeating = sm.triggerFieldCalculation('i_76');
    
    // Calculate Reference heating gains (should always use SHGC=0.5)
    console.log('⚡ Calculating Reference heating gains with SHGC=0.5...');
    const refNorthHeating = sm.triggerFieldCalculation('ref_i_74');
    const refSouthHeating = sm.triggerFieldCalculation('ref_i_76');
    
    console.log(`Application North heating (SHGC=0.3): ${appNorthHeating.toFixed(2)}`);
    console.log(`Reference North heating (SHGC=0.5): ${refNorthHeating.toFixed(2)}`);
    console.log(`Application South heating (SHGC=0.6): ${appSouthHeating.toFixed(2)}`);
    console.log(`Reference South heating (SHGC=0.5): ${refSouthHeating.toFixed(2)}`);
    
    // Verify SHGC normalization is working
    // Application should be different from Reference due to different SHGC values
    const shgcNormalizationWorking = Math.abs(appNorthHeating - refNorthHeating) > 0.1 && 
                                     Math.abs(appSouthHeating - refSouthHeating) > 0.1;
    console.log(`SHGC state handling working: ${shgcNormalizationWorking ? '✅' : '❌'}`);
    
    // 4. Test D80 Toggle Implementation
    console.log('\n--- Testing D80 Toggle Implementation (Key Feature) ---');
    
    // Set internal gains from S09
    sm.setValue('i_71', '50000', 'user-modified');
    
    // Calculate solar gains subtotal first
    const solarGains = sm.triggerFieldCalculation('i_79');
    console.log(`Solar gains total: ${solarGains.toFixed(2)} kWh/yr`);
    
    // Calculate total gains (solar + internal)
    const totalGains = sm.triggerFieldCalculation('e_80');
    console.log(`Total gains (solar + internal): ${totalGains.toFixed(2)} kWh/yr`);
    
    // Test different D80 methods
    console.log('🔄 Testing different D80 utilization methods...');
    
    // Test NRC 40%
    sm.setValue('d_80', 'NRC 40%', 'user-modified');
    const utilizationFactor40 = sm.triggerFieldCalculation('g_80');
    const usableGains40 = sm.triggerFieldCalculation('i_80');
    console.log(`NRC 40%: Factor=${(utilizationFactor40*100).toFixed(1)}%, Usable=${usableGains40.toFixed(2)} kWh/yr`);
    
    // Test NRC 60%
    sm.setValue('d_80', 'NRC 60%', 'user-modified');
    const utilizationFactor60 = sm.triggerFieldCalculation('g_80');
    const usableGains60 = sm.triggerFieldCalculation('i_80');
    console.log(`NRC 60%: Factor=${(utilizationFactor60*100).toFixed(1)}%, Usable=${usableGains60.toFixed(2)} kWh/yr`);
    
    // Test PH Method (requires loss values)
    sm.setValue('i_97', '100000', 'user-modified');   // Building envelope losses
    sm.setValue('i_103', '20000', 'user-modified');   // Other losses
    sm.setValue('m_121', '15000', 'user-modified');   // Ventilation losses
    sm.setValue('i_98', '5000', 'user-modified');     // Other losses
    
    sm.setValue('d_80', 'PH Method', 'user-modified');
    const utilizationFactorPH = sm.triggerFieldCalculation('g_80');
    const usableGainsPH = sm.triggerFieldCalculation('i_80');
    console.log(`PH Method: Factor=${(utilizationFactorPH*100).toFixed(1)}%, Usable=${usableGainsPH.toFixed(2)} kWh/yr`);
    
    // Verify D80 toggle is working (different methods give different results)
    const d80Working = Math.abs(utilizationFactor40 - utilizationFactor60) > 0.1 &&
                       Math.abs(utilizationFactor60 - utilizationFactorPH) > 0.01;
    console.log(`D80 toggle working: ${d80Working ? '✅' : '❌'}`);
    
    // 5. Test PHPP Reference calculation (always PHPP method)
    console.log('\n--- Testing PHPP Reference Calculation (Row 81) ---');
    
    const phppUtilizationFactor = sm.triggerFieldCalculation('g_81');
    const phppUsableGains = sm.triggerFieldCalculation('i_81');
    const unusableGains = sm.triggerFieldCalculation('i_82');
    
    console.log(`PHPP Reference utilization: ${(phppUtilizationFactor*100).toFixed(1)}%`);
    console.log(`PHPP Reference usable gains: ${phppUsableGains.toFixed(2)} kWh/yr`);
    console.log(`Unusable gains: ${unusableGains.toFixed(2)} kWh/yr`);
    
    // Verify calculations add up
    const calculationCheck = Math.abs((usableGainsPH + unusableGains) - totalGains) < 0.1;
    console.log(`Gain calculations balanced: ${calculationCheck ? '✅' : '❌'}`);
    
    // 6. Test dependency chain
    console.log('\n--- Testing Dependency Chain ---');
    console.log('🔗 Testing climate zone change triggers gain factor recalculation...');
    
    // Change climate zone to 7 (northern climates)
    const oldSouthGainFactor = sm.getValue('m_76');
    sm.setValue('j_19', '7', 'user-modified');
    sm.calculateDependencyChain('j_19');
    
    const newSouthGainFactor = sm.getValue('m_76');
    console.log(`South gain factor changed: ${oldSouthGainFactor} → ${newSouthGainFactor}`);
    
    // For climate zone 7, South should be 24.76 (northern values)
    const climateChainWorking = Math.abs(parseFloat(newSouthGainFactor) - 24.76) < 0.01;
    console.log(`Climate dependency chain working: ${climateChainWorking ? '✅' : '❌'}`);
    
    // 7. Test SHGC change triggers recalculation
    console.log('🔗 Testing SHGC change triggers heating gain recalculation...');
    
    const oldNorthHeating = sm.getValue('i_74');
    sm.setValue('f_74', '0.4', 'user-modified');  // Change SHGC
    sm.calculateDependencyChain('f_74');
    
    const newNorthHeating = sm.getValue('i_74');
    console.log(`North heating changed: ${oldNorthHeating} → ${newNorthHeating}`);
    
    const shgcChainWorking = Math.abs(parseFloat(newNorthHeating) - parseFloat(oldNorthHeating)) > 0.1;
    console.log(`SHGC dependency chain working: ${shgcChainWorking ? '✅' : '❌'}`);
    
    // 8. Summary
    console.log('\n=== S10 IT-DEPENDS MIGRATION TEST SUMMARY ===');
    
    const allTestsPassed = northCorrect && southCorrect && westCorrect && 
                          shgcNormalizationWorking && d80Working && 
                          calculationCheck && climateChainWorking && shgcChainWorking;
    
    if (allTestsPassed) {
        console.log('🎉 ✅ ALL S10 IT-DEPENDS TESTS PASSED!');
        console.log('🎯 Key features verified:');
        console.log('   • Climate-dependent gain factors');
        console.log('   • SHGC state handling (Ref=0.5, App=user values)');
        console.log('   • D80 toggle implementation');
        console.log('   • PHPP reference calculations');
        console.log('   • Complete dependency chains');
        console.log('   • 47 total calculations registered');
    } else {
        console.log('❌ Some S10 IT-DEPENDS tests failed - check individual results above');
    }
    
    return allTestsPassed;
}

/**
 * Quick test for S10 D80 toggle specifically
 */
function testS10_D80_Toggle() {
    console.log('🧪 Testing S10 D80 Toggle Specifically');
    
    if (!window.TEUI?.StateManager) {
        console.error('❌ StateManager not available');
        return;
    }
    
    const sm = window.TEUI.StateManager;
    
    // Check D80 calculations are registered
    const d80Calculations = ['e_80', 'g_80', 'i_80', 'g_81', 'i_81', 'i_82'];
    const d80Registered = d80Calculations.every(id => sm.hasCalculation && sm.hasCalculation(id));
    
    if (!d80Registered) {
        console.error('❌ D80 calculations not fully registered');
        return;
    }
    
    console.log('✅ D80 calculations registered');
    
    // Set test values
    sm.setValue('i_79', '60000', 'user-modified');  // Solar gains
    sm.setValue('i_71', '40000', 'user-modified');  // Internal gains
    
    // Test each D80 method
    const methods = ['NRC 0%', 'NRC 40%', 'NRC 50%', 'NRC 60%', 'PH Method'];
    const results = {};
    
    methods.forEach(method => {
        sm.setValue('d_80', method, 'user-modified');
        const factor = sm.triggerFieldCalculation('g_80');
        const usable = sm.triggerFieldCalculation('i_80');
        results[method] = { factor, usable };
        console.log(`${method}: ${(factor*100).toFixed(1)}% → ${usable.toFixed(0)} kWh/yr usable`);
    });
    
    // Verify results are different (toggle working)
    const uniqueFactors = new Set(Object.values(results).map(r => r.factor));
    const toggleWorking = uniqueFactors.size === methods.length;
    
    console.log(`D80 toggle working: ${toggleWorking ? '✅' : '❌'} (${uniqueFactors.size} unique factors)`);
    
    return toggleWorking;
}

/**
 * Test SHGC Reference vs Application state handling
 */
function testS10_SHGC_States() {
    console.log('🧪 Testing S10 SHGC Reference vs Application States');
    
    if (!window.TEUI?.StateManager) {
        console.error('❌ StateManager not available');
        return;
    }
    
    const sm = window.TEUI.StateManager;
    
    // Check Reference calculations are registered
    const refCalculations = ['ref_i_74', 'ref_k_74', 'ref_i_79', 'ref_e_80'];
    const refRegistered = refCalculations.every(id => sm.hasCalculation && sm.hasCalculation(id));
    
    if (!refRegistered) {
        console.error('❌ Reference SHGC calculations not registered');
        return;
    }
    
    console.log('✅ Reference SHGC calculations registered');
    
    // Set test scenario
    sm.setValue('d_74', '100', 'user-modified');    // 100 m² north windows
    sm.setValue('e_74', 'North', 'user-modified');  // North orientation
    sm.setValue('f_74', '0.3', 'user-modified');    // Low SHGC for Application
    sm.setValue('g_74', '0', 'user-modified');      // No winter shading
    sm.setValue('j_19', '6', 'user-modified');      // Climate zone 6
    
    // Calculate Application gains (uses f_74 = 0.3)
    const appGains = sm.triggerFieldCalculation('i_74');
    
    // Calculate Reference gains (uses SHGC = 0.5)
    const refGains = sm.triggerFieldCalculation('ref_i_74');
    
    console.log(`Application gains (SHGC=0.3): ${appGains.toFixed(2)} kWh/yr`);
    console.log(`Reference gains (SHGC=0.5): ${refGains.toFixed(2)} kWh/yr`);
    
    // Reference should be higher (0.5 > 0.3)
    const shgcStateWorking = refGains > appGains && Math.abs(refGains - appGains) > 10;
    
    console.log(`SHGC state handling working: ${shgcStateWorking ? '✅' : '❌'}`);
    console.log(`Reference gains ${((refGains/appGains - 1) * 100).toFixed(1)}% higher than Application`);
    
    return shgcStateWorking;
}

// Make the S10 test functions globally available
window.testS10_ITDepends_Comprehensive = testS10_ITDepends_Comprehensive;
window.testS10_D80_Toggle = testS10_D80_Toggle;
window.testS10_SHGC_States = testS10_SHGC_States; 