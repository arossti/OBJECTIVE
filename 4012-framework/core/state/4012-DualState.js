/**
 * 4012-DualState.js
 * Core state management for v4.012 Framework
 * 
 * Principles:
 * - Explicit separation of inputs and outputs
 * - Single source of truth for both Target and Reference models
 * - Pure functional approach with no hidden state
 * - Automatic dependency-driven recalculation
 */

export class DualState {
    constructor() {
        // Separate storage for inputs and outputs
        this.state = {
            inputs: {
                geometry: {},      // Shared between models
                target: {},        // Target-specific inputs
                reference: {},     // Reference-specific inputs
                climate: {}        // Climate data (shared)
            },
            outputs: {
                target: {},        // Calculated target values
                reference: {}      // Calculated reference values
            }
        };
        
        // Calculation registry
        this.calculations = new Map();
        
        // Dependency graph
        this.dependencies = new Map();
        
        // Change listeners
        this.listeners = new Map();
        
        // Calculation queue for batching
        this.calculationQueue = new Set();
        this.isCalculating = false;
    }
    
    /**
     * Register a calculation function
     * @param {string} name - Unique calculation identifier
     * @param {Object} config - Calculation configuration
     */
    registerCalculation(name, config) {
        this.calculations.set(name, {
            name: name,
            inputs: config.inputs || [],
            outputs: config.outputs || [],
            calculate: config.calculate,
            section: config.section || 'unknown'
        });
        
        // Build dependency graph
        config.inputs.forEach(input => {
            if (!this.dependencies.has(input)) {
                this.dependencies.set(input, new Set());
            }
            this.dependencies.get(input).add(name);
        });
    }
    
    /**
     * Set an input value
     * @param {string} field - Field identifier
     * @param {*} value - New value
     * @param {string} category - 'geometry', 'target', 'reference', or 'climate'
     */
    setInput(field, value, category = 'target') {
        const oldValue = this.state.inputs[category]?.[field];
        
        // Only update if value actually changed
        if (oldValue === value) return;
        
        // Store the value
        this.state.inputs[category][field] = value;
        
        // Find affected calculations
        const affected = this.dependencies.get(field) || new Set();
        
        // Queue calculations for batch processing
        affected.forEach(calc => this.calculationQueue.add(calc));
        
        // Process queue
        this.processCalculationQueue();
        
        // Notify listeners
        this.notifyListeners(field, value, category);
    }
    
    /**
     * Process queued calculations efficiently
     */
    processCalculationQueue() {
        if (this.isCalculating || this.calculationQueue.size === 0) return;
        
        this.isCalculating = true;
        
        // Sort calculations by dependency order
        const sortedCalcs = this.sortByDependencies(Array.from(this.calculationQueue));
        this.calculationQueue.clear();
        
        // Execute calculations
        sortedCalcs.forEach(name => {
            const calc = this.calculations.get(name);
            if (!calc) return;
            
            try {
                // Run the calculation with current inputs
                const result = calc.calculate(this.state.inputs);
                
                // Store outputs for both models
                calc.outputs.forEach(outputField => {
                    if (result.target?.[outputField] !== undefined) {
                        this.state.outputs.target[outputField] = result.target[outputField];
                    }
                    if (result.reference?.[outputField] !== undefined) {
                        this.state.outputs.reference[outputField] = result.reference[outputField];
                    }
                });
                
                // Check for cascading calculations
                calc.outputs.forEach(output => {
                    const cascading = this.dependencies.get(output) || new Set();
                    cascading.forEach(cascadeCalc => this.calculationQueue.add(cascadeCalc));
                });
                
            } catch (error) {
                console.error(`Error in calculation ${name}:`, error);
            }
        });
        
        this.isCalculating = false;
        
        // Process any new calculations that were queued during execution
        if (this.calculationQueue.size > 0) {
            this.processCalculationQueue();
        }
    }
    
    /**
     * Sort calculations by dependency order
     */
    sortByDependencies(calculations) {
        // Simple topological sort
        const sorted = [];
        const visited = new Set();
        const visiting = new Set();
        
        const visit = (name) => {
            if (visited.has(name)) return;
            if (visiting.has(name)) {
                console.warn(`Circular dependency detected involving ${name}`);
                return;
            }
            
            visiting.add(name);
            
            // Visit dependencies first
            const calc = this.calculations.get(name);
            if (calc) {
                calc.inputs.forEach(input => {
                    const dependentCalcs = this.dependencies.get(input) || new Set();
                    dependentCalcs.forEach(dep => {
                        if (calculations.includes(dep) && dep !== name) {
                            visit(dep);
                        }
                    });
                });
            }
            
            visiting.delete(name);
            visited.add(name);
            sorted.push(name);
        };
        
        calculations.forEach(calc => visit(calc));
        return sorted;
    }
    
    /**
     * Get a value from state
     * @param {string} field - Field identifier
     * @param {string} model - 'target' or 'reference'
     * @param {string} type - 'input' or 'output'
     */
    getValue(field, model = 'target', type = 'output') {
        if (type === 'input') {
            // Check shared categories first
            if (this.state.inputs.geometry?.[field] !== undefined) {
                return this.state.inputs.geometry[field];
            }
            if (this.state.inputs.climate?.[field] !== undefined) {
                return this.state.inputs.climate[field];
            }
            return this.state.inputs[model]?.[field];
        } else {
            return this.state.outputs[model]?.[field];
        }
    }
    
    /**
     * Get both target and reference values as a tuple
     * @param {string} field - Field identifier
     * @param {string} type - 'input' or 'output'
     */
    getTuple(field, type = 'output') {
        return {
            target: this.getValue(field, 'target', type),
            reference: this.getValue(field, 'reference', type)
        };
    }
    
    /**
     * Add a change listener
     * @param {string} field - Field to watch (or '*' for all)
     * @param {Function} callback - Function to call on change
     */
    addListener(field, callback) {
        if (!this.listeners.has(field)) {
            this.listeners.set(field, new Set());
        }
        this.listeners.get(field).add(callback);
    }
    
    /**
     * Remove a change listener
     */
    removeListener(field, callback) {
        this.listeners.get(field)?.delete(callback);
    }
    
    /**
     * Notify listeners of a change
     */
    notifyListeners(field, value, category) {
        // Specific field listeners
        const fieldListeners = this.listeners.get(field) || new Set();
        fieldListeners.forEach(callback => {
            callback({ field, value, category });
        });
        
        // Wildcard listeners
        const wildcardListeners = this.listeners.get('*') || new Set();
        wildcardListeners.forEach(callback => {
            callback({ field, value, category });
        });
    }
    
    /**
     * Run all calculations
     */
    calculateAll() {
        // Queue all calculations
        this.calculations.forEach((calc, name) => {
            this.calculationQueue.add(name);
        });
        
        // Process the queue
        this.processCalculationQueue();
    }
    
    /**
     * Export current state
     */
    exportState() {
        return {
            inputs: this.state.inputs,
            outputs: this.state.outputs,
            version: '4.012'
        };
    }
    
    /**
     * Import state
     */
    importState(data) {
        if (data.version !== '4.012') {
            console.warn('Importing state from different version:', data.version);
        }
        
        if (data.inputs) {
            this.state.inputs = data.inputs;
        }
        
        // Recalculate everything based on imported inputs
        this.calculateAll();
    }
    
    /**
     * Clear all state
     */
    clear() {
        this.state = {
            inputs: {
                geometry: {},
                target: {},
                reference: {},
                climate: {}
            },
            outputs: {
                target: {},
                reference: {}
            }
        };
        
        this.calculationQueue.clear();
        this.notifyListeners('*', null, 'system');
    }
}

// Create singleton instance
export const dualState = new DualState();

// Export for backwards compatibility
export default dualState; 