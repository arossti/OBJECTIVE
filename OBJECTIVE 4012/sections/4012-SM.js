/**
 * 4012-SM.js
 * Simplified State Manager for v4.012 Architecture
 *
 * Core principles:
 * - Clear separation of inputs and outputs
 * - Explicit dependency graph
 * - Tuple-based calculations
 * - No hidden state or magic
 */

class StateManager4012 {
  constructor() {
    // Separate storage for inputs and outputs
    this.state = {
      inputs: {
        geometry: {}, // Shared between models
        target: {}, // Target-specific inputs
        reference: {}, // Reference-specific inputs
      },
      outputs: {
        target: {}, // Calculated target values
        reference: {}, // Calculated reference values
      },
    };

    // Calculation registry
    this.calculations = new Map();

    // Dependency graph
    this.dependencies = new Map();

    // Change listeners
    this.listeners = new Map();

    // Mode for UI display
    this.displayMode = "target";
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
      description: config.description || "",
    });

    // Build dependency graph
    config.inputs.forEach((input) => {
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
   * @param {string} category - 'geometry', 'target', or 'reference'
   */
  setInput(field, value, category = "target") {
    // Store the value
    if (category === "geometry") {
      this.state.inputs.geometry[field] = value;
    } else {
      this.state.inputs[category][field] = value;
    }

    // Find affected calculations
    const affected = this.dependencies.get(field) || new Set();

    // Run affected calculations
    this.runCalculations(affected);

    // Notify listeners
    this.notifyListeners(field, value, category);
  }

  /**
   * Run specified calculations
   * @param {Set} calculationNames - Names of calculations to run
   */
  runCalculations(calculationNames) {
    calculationNames.forEach((name) => {
      const calc = this.calculations.get(name);
      if (!calc) return;

      try {
        // Run the calculation with current inputs
        const result = calc.calculate(this.state.inputs);

        // Store outputs
        calc.outputs.forEach((outputField) => {
          if (result.target && result.target[outputField] !== undefined) {
            this.state.outputs.target[outputField] = result.target[outputField];
          }
          if (result.reference && result.reference[outputField] !== undefined) {
            this.state.outputs.reference[outputField] =
              result.reference[outputField];
          }
        });

        // Check for cascading calculations
        calc.outputs.forEach((output) => {
          const cascading = this.dependencies.get(output) || new Set();
          if (cascading.size > 0) {
            this.runCalculations(cascading);
          }
        });
      } catch (error) {
        console.error(`Error in calculation ${name}:`, error);
      }
    });
  }

  /**
   * Get a value from state
   * @param {string} field - Field identifier
   * @param {string} model - 'target' or 'reference'
   * @param {string} type - 'input' or 'output'
   */
  getValue(field, model = "target", type = "output") {
    if (type === "input") {
      // Check geometry first (shared)
      if (this.state.inputs.geometry[field] !== undefined) {
        return this.state.inputs.geometry[field];
      }
      return this.state.inputs[model][field];
    } else {
      return this.state.outputs[model][field];
    }
  }

  /**
   * Get current display value based on mode
   * @param {string} field - Field identifier
   */
  getDisplayValue(field) {
    return this.getValue(field, this.displayMode, "output");
  }

  /**
   * Switch display mode
   * @param {string} mode - 'target' or 'reference'
   */
  setDisplayMode(mode) {
    this.displayMode = mode;
    this.notifyListeners("displayMode", mode, "system");
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
   * Notify listeners of a change
   */
  notifyListeners(field, value, category) {
    // Specific field listeners
    const fieldListeners = this.listeners.get(field) || new Set();
    fieldListeners.forEach((callback) => {
      callback(value, field, category);
    });

    // Wildcard listeners
    const wildcardListeners = this.listeners.get("*") || new Set();
    wildcardListeners.forEach((callback) => {
      callback(value, field, category);
    });
  }

  /**
   * Run all calculations
   */
  calculateAll() {
    // Get all calculation names
    const allCalcs = new Set(this.calculations.keys());
    this.runCalculations(allCalcs);
  }

  /**
   * Export current state
   */
  exportState() {
    return {
      inputs: this.state.inputs,
      outputs: this.state.outputs,
      displayMode: this.displayMode,
    };
  }

  /**
   * Import state
   */
  importState(data) {
    if (data.inputs) {
      this.state.inputs = data.inputs;
    }
    if (data.outputs) {
      this.state.outputs = data.outputs;
    }
    if (data.displayMode) {
      this.displayMode = data.displayMode;
    }

    // Recalculate everything
    this.calculateAll();
  }
}

// Example usage with Section 11
function setupSection11(stateManager) {
  // Register wall heat loss calculation
  stateManager.registerCalculation("wallHeatLoss", {
    inputs: [
      "d_85",
      "d_86",
      "d_87",
      "d_88",
      "f_85",
      "f_86",
      "f_87",
      "f_88",
      "hdd",
    ],
    outputs: ["i_85", "i_86", "i_87", "i_88", "wallTotal"],
    description: "Calculate heat loss through walls",
    calculate: (inputs) => {
      // This would call EnvelopeCalculations.wallHeatLoss
      // Simplified example here
      const result = {
        target: { i_85: 1000, i_86: 1500, i_87: 0, i_88: 0, wallTotal: 2500 },
        reference: {
          i_85: 1500,
          i_86: 2250,
          i_87: 0,
          i_88: 0,
          wallTotal: 3750,
        },
      };
      return result;
    },
  });

  // Register window heat loss calculation
  stateManager.registerCalculation("windowHeatLoss", {
    inputs: [
      "d_89",
      "d_90",
      "d_91",
      "d_92",
      "f_89",
      "f_90",
      "f_91",
      "f_92",
      "hdd",
    ],
    outputs: ["i_89", "i_90", "i_91", "i_92", "windowTotal"],
    description: "Calculate heat loss through windows",
    calculate: (inputs) => {
      // Simplified example
      const result = {
        target: { i_89: 2000, i_90: 2400, i_91: 0, i_92: 0, windowTotal: 4400 },
        reference: {
          i_89: 2857,
          i_90: 3429,
          i_91: 0,
          i_92: 0,
          windowTotal: 6286,
        },
      };
      return result;
    },
  });

  // Register total envelope loss calculation
  stateManager.registerCalculation("totalEnvelopeLoss", {
    inputs: ["wallTotal", "windowTotal", "d_97"],
    outputs: ["i_104"],
    description:
      "Calculate total envelope transmission loss with thermal bridge penalty",
    calculate: (inputs) => {
      const wallTotal = {
        target: inputs.target.wallTotal || 0,
        reference: inputs.reference.wallTotal || 0,
      };
      const windowTotal = {
        target: inputs.target.windowTotal || 0,
        reference: inputs.reference.windowTotal || 0,
      };
      const tbPenalty = {
        target: parseFloat(inputs.target.d_97) || 0.1,
        reference: parseFloat(inputs.reference.d_97) || 0.1,
      };

      return {
        target: {
          i_104:
            (wallTotal.target + windowTotal.target) * (1 + tbPenalty.target),
        },
        reference: {
          i_104:
            (wallTotal.reference + windowTotal.reference) *
            (1 + tbPenalty.reference),
        },
      };
    },
  });
}

// Export
if (typeof module !== "undefined" && module.exports) {
  module.exports = {
    StateManager4012,
    setupSection11,
  };
}
