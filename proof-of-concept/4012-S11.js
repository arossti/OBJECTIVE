/**
 * 4012-S11.js
 * Section 11: Envelope Transmission Losses - v4.012 Architecture
 * 
 * Demonstrates tuple-based dual calculation with:
 * - Shared geometry between Target and Reference
 * - Different insulation values (user vs. code minimum)
 * - Pure functional calculations
 */

// Pure calculation functions for envelope components
const EnvelopeCalculations = {
    /**
     * Calculate heat loss for a single component
     * Uses RSI directly for numerical stability (avoiding 1/RSI conversions)
     * 
     * @param {Object} geometry - Area and perimeter (same for both models)
     * @param {Object} thermal - RSI values for target and reference
     * @param {Object} climate - HDD for both models
     * @returns {Object} Heat loss tuple (kWh/yr) for target and reference
     */
    componentHeatLoss(geometry, thermal, climate) {
        // Heat Loss Formula: kWh = Area * (HDD * 24) / (RSI * 1000)
        const calcLoss = (area, rsi, hdd) => {
            if (rsi <= 0) return 0;
            return (area * hdd * 24) / (rsi * 1000);
        };
        
        return {
            target: calcLoss(geometry.area, thermal.target.rsi, climate.target.hdd),
            reference: calcLoss(geometry.area, thermal.reference.rsi, climate.reference.hdd)
        };
    },
    
    /**
     * Calculate all wall components (above grade)
     * @param {Object} inputs - Contains geometry and thermal properties
     * @returns {Object} Tuple with individual and total wall heat losses
     */
    wallHeatLoss(inputs) {
        const components = [
            { row: 85, type: 'wall_ag_1' },
            { row: 86, type: 'wall_ag_2' },
            { row: 87, type: 'wall_ag_3' },
            { row: 88, type: 'wall_ag_4' }
        ];
        
        const results = {
            target: { total: 0, components: {} },
            reference: { total: 0, components: {} }
        };
        
        components.forEach(comp => {
            const geometry = {
                area: parseFloat(inputs.geometry[`d_${comp.row}`]) || 0
            };
            
            const thermal = {
                target: { rsi: parseFloat(inputs.target[`f_${comp.row}`]) || 2.97 },
                reference: { rsi: parseFloat(inputs.reference[`f_${comp.row}`]) || 2.97 }
            };
            
            const climate = {
                target: { hdd: inputs.target.hdd || 3520 },
                reference: { hdd: inputs.reference.hdd || 3520 }
            };
            
            const loss = this.componentHeatLoss(geometry, thermal, climate);
            
            results.target.components[`i_${comp.row}`] = loss.target;
            results.reference.components[`i_${comp.row}`] = loss.reference;
            
            results.target.total += loss.target;
            results.reference.total += loss.reference;
        });
        
        return results;
    },
    
    /**
     * Calculate window heat losses
     * @param {Object} inputs - Contains geometry and thermal properties
     * @returns {Object} Tuple with window heat losses
     */
    windowHeatLoss(inputs) {
        const components = [
            { row: 89, type: 'window_1' },
            { row: 90, type: 'window_2' },
            { row: 91, type: 'window_3' },
            { row: 92, type: 'window_4' }
        ];
        
        const results = {
            target: { total: 0, components: {} },
            reference: { total: 0, components: {} }
        };
        
        components.forEach(comp => {
            const geometry = {
                area: parseFloat(inputs.geometry[`d_${comp.row}`]) || 0
            };
            
            // Windows typically have lower RSI values
            const thermal = {
                target: { rsi: parseFloat(inputs.target[`f_${comp.row}`]) || 0.35 },
                reference: { rsi: parseFloat(inputs.reference[`f_${comp.row}`]) || 0.35 }
            };
            
            const climate = {
                target: { hdd: inputs.target.hdd || 3520 },
                reference: { hdd: inputs.reference.hdd || 3520 }
            };
            
            const loss = this.componentHeatLoss(geometry, thermal, climate);
            
            results.target.components[`i_${comp.row}`] = loss.target;
            results.reference.components[`i_${comp.row}`] = loss.reference;
            
            results.target.total += loss.target;
            results.reference.total += loss.reference;
        });
        
        return results;
    },
    
    /**
     * Calculate total envelope transmission losses
     * @param {Object} inputs - All envelope inputs
     * @returns {Object} Complete heat loss breakdown
     */
    totalEnvelopeLoss(inputs) {
        // Calculate all component categories
        const walls = this.wallHeatLoss(inputs);
        const windows = this.windowHeatLoss(inputs);
        // In full implementation: doors, basement, roof, etc.
        
        // Apply thermal bridge penalty
        const tbPenalty = {
            target: parseFloat(inputs.target.d_97) || 0.10,  // User-defined
            reference: parseFloat(inputs.reference.d_97) || 0.10  // Same as user
        };
        
        // Calculate base totals
        const baseTotal = {
            target: walls.target.total + windows.target.total,
            reference: walls.reference.total + windows.reference.total
        };
        
        // Apply thermal bridge penalty
        const finalTotal = {
            target: baseTotal.target * (1 + tbPenalty.target),
            reference: baseTotal.reference * (1 + tbPenalty.reference)
        };
        
        return {
            target: {
                walls: walls.target,
                windows: windows.target,
                baseTotal: baseTotal.target,
                thermalBridgeLoss: baseTotal.target * tbPenalty.target,
                i_104: finalTotal.target  // Total transmission loss
            },
            reference: {
                walls: walls.reference,
                windows: windows.reference,
                baseTotal: baseTotal.reference,
                thermalBridgeLoss: baseTotal.reference * tbPenalty.reference,
                i_104: finalTotal.reference  // Total transmission loss
            }
        };
    }
};

// Example of how inputs would be structured
const exampleInputs = {
    // Geometry is SHARED between target and reference
    geometry: {
        d_85: '100',  // Wall 1 area
        d_86: '150',  // Wall 2 area
        d_87: '0',    // Wall 3 area
        d_88: '0',    // Wall 4 area
        d_89: '25',   // Window 1 area
        d_90: '30',   // Window 2 area
        d_91: '0',    // Window 3 area
        d_92: '0'     // Window 4 area
    },
    
    // Target uses user-defined insulation values
    target: {
        f_85: '4.5',   // Wall 1 RSI (user's high-performance wall)
        f_86: '4.5',   // Wall 2 RSI
        f_87: '4.5',   // Wall 3 RSI
        f_88: '4.5',   // Wall 4 RSI
        f_89: '0.5',   // Window 1 RSI (user's triple-glazed)
        f_90: '0.5',   // Window 2 RSI
        f_91: '0.5',   // Window 3 RSI
        f_92: '0.5',   // Window 4 RSI
        d_97: '0.05',  // Thermal bridge penalty (5%)
        hdd: 3520      // Heating degree days
    },
    
    // Reference uses code minimum values
    reference: {
        f_85: '2.97',  // Wall 1 RSI (OBC minimum)
        f_86: '2.97',  // Wall 2 RSI
        f_87: '2.97',  // Wall 3 RSI
        f_88: '2.97',  // Wall 4 RSI
        f_89: '0.35',  // Window 1 RSI (OBC minimum)
        f_90: '0.35',  // Window 2 RSI
        f_91: '0.35',  // Window 3 RSI
        f_92: '0.35',  // Window 4 RSI
        d_97: '0.10',  // Thermal bridge penalty (10% - code default)
        hdd: 3520      // Same climate
    }
};

// Demonstrate the calculation
function demonstrateEnvelopeCalculation() {
    const result = EnvelopeCalculations.totalEnvelopeLoss(exampleInputs);
    
    console.log('Envelope Heat Loss Comparison:');
    console.log('Target Model (User Design):');
    console.log(`  Wall Loss: ${result.target.walls.total.toFixed(0)} kWh/yr`);
    console.log(`  Window Loss: ${result.target.windows.total.toFixed(0)} kWh/yr`);
    console.log(`  Thermal Bridge: ${result.target.thermalBridgeLoss.toFixed(0)} kWh/yr`);
    console.log(`  TOTAL: ${result.target.i_104.toFixed(0)} kWh/yr`);
    
    console.log('\nReference Model (Code Minimum):');
    console.log(`  Wall Loss: ${result.reference.walls.total.toFixed(0)} kWh/yr`);
    console.log(`  Window Loss: ${result.reference.windows.total.toFixed(0)} kWh/yr`);
    console.log(`  Thermal Bridge: ${result.reference.thermalBridgeLoss.toFixed(0)} kWh/yr`);
    console.log(`  TOTAL: ${result.reference.i_104.toFixed(0)} kWh/yr`);
    
    console.log(`\nImprovement: ${((1 - result.target.i_104/result.reference.i_104) * 100).toFixed(1)}%`);
    
    return result;
}

// Export for use
if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
        EnvelopeCalculations,
        demonstrateEnvelopeCalculation
    };
} 