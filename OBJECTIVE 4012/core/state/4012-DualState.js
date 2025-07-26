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

(function () {
  "use strict";

  // Ensure namespace exists
  window.TEUI = window.TEUI || {};
  window.TEUI.v4012 = window.TEUI.v4012 || {};

  class DualState {
    constructor() {
      // Separate storage for inputs and outputs
      this.state = {
        inputs: {
          geometry: {}, // Shared between models
          target: {}, // Target-specific inputs
          reference: {}, // Reference-specific inputs
          climate: {}, // Climate data (shared)
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
        section: config.section || "unknown",
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
     * @param {string} category - 'geometry', 'target', 'reference', or 'climate'
     */
    setInput(field, value, category = "target") {
      const oldValue = this.state.inputs[category]?.[field];

      // Only update if value actually changed
      if (oldValue === value) return;

      // Store the value
      this.state.inputs[category][field] = value;

      // Find affected calculations
      const affected = this.dependencies.get(field) || new Set();

      // Queue calculations for batch processing
      affected.forEach((calc) => this.calculationQueue.add(calc));

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
      const sortedCalcs = this.sortByDependencies(
        Array.from(this.calculationQueue),
      );
      this.calculationQueue.clear();

      // Execute calculations
      sortedCalcs.forEach((name) => {
        const calc = this.calculations.get(name);
        if (!calc) return;

        try {
          // Run the calculation with current inputs
          const result = calc.calculate(this.state.inputs);

          // Store outputs for both models
          calc.outputs.forEach((outputField) => {
            if (result.target?.[outputField] !== undefined) {
              this.state.outputs.target[outputField] =
                result.target[outputField];
            }
            if (result.reference?.[outputField] !== undefined) {
              this.state.outputs.reference[outputField] =
                result.reference[outputField];
            }
          });

          // Check for cascading calculations
          calc.outputs.forEach((output) => {
            const cascading = this.dependencies.get(output) || new Set();
            cascading.forEach((cascadeCalc) =>
              this.calculationQueue.add(cascadeCalc),
            );
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
          calc.inputs.forEach((input) => {
            const dependentCalcs = this.dependencies.get(input) || new Set();
            dependentCalcs.forEach((dep) => {
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

      calculations.forEach((calc) => visit(calc));
      return sorted;
    }

    /**
     * Get a value from state
     * @param {string} field - Field identifier
     * @param {string} model - 'target' or 'reference'
     * @param {string} type - 'input' or 'output'
     */
    getValueAdvanced(field, model = "target", type = "output") {
      if (type === "input") {
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
    getTuple(field, type = "output") {
      return {
        target: this.getValueAdvanced(field, "target", type),
        reference: this.getValueAdvanced(field, "reference", type),
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
      fieldListeners.forEach((callback) => {
        callback({ field, value, category });
      });

      // Wildcard listeners
      const wildcardListeners = this.listeners.get("*") || new Set();
      wildcardListeners.forEach((callback) => {
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
        version: "4.012",
      };
    }

    /**
     * Import state
     */
    importState(data) {
      if (data.version !== "4.012") {
        console.warn("Importing state from different version:", data.version);
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
          climate: {},
        },
        outputs: {
          target: {},
          reference: {},
        },
      };

      this.calculationQueue.clear();
      this.notifyListeners("*", null, "system");
    }

    // Add simplified methods for backwards compatibility
    setValue(field, value) {
      this.setInput(field, value, "target");
    }

    getValue(field) {
      return (
        this.state.outputs.target[field] || this.state.inputs.target[field]
      );
    }

    reset() {
      this.clear();
    }

    /**
     * Enhanced formatNumber function supporting all OBC Matrix and 4011RF formats
     * @param {*} value - Value to format
     * @param {string} formatType - Format type (e.g., 'number-2dp', 'percent', 'number-2dp-comma')
     * @returns {string} Formatted value
     */
    formatNumber(value, formatType = "number-2dp") {
      // Handle null, undefined, or empty values
      if (value === null || value === undefined || value === "") {
        return "";
      }

      // Convert to number
      let numValue;
      if (typeof value === "string") {
        // Remove commas and parse
        const cleanedValue = value.replace(/,/g, "").trim();
        if (cleanedValue === "" || cleanedValue.toUpperCase() === "N/A") {
          return value; // Return original for non-numeric strings
        }
        numValue = parseFloat(cleanedValue);
      } else if (typeof value === "number") {
        numValue = value;
      } else {
        return String(value); // Fallback for other types
      }

      // Handle NaN
      if (isNaN(numValue)) {
        return String(value);
      }

      try {
        // Handle aliases
        if (formatType === "u-value") formatType = "number-3dp";
        if (formatType === "rsi") formatType = "number-2dp";

        // Handle Integer types first
        if (formatType === "integer") {
          return numValue.toLocaleString(undefined, {
            minimumFractionDigits: 0,
            maximumFractionDigits: 0,
            useGrouping: true,
          }); // With commas
        }
        if (formatType === "integer-nocomma") {
          return numValue.toLocaleString(undefined, {
            minimumFractionDigits: 0,
            maximumFractionDigits: 0,
            useGrouping: false,
          }); // No commas
        }

        // Parsing complex format types
        const formatParts = formatType.split("-");
        let type = formatParts[0]; // 'number', 'percent', 'cad'
        const dpPart = formatParts[1] || ""; // e.g., '0dp', '2dp', '3dp', '4dp'

        let decimals = 2; // Default decimal places
        if (dpPart) {
          const match = dpPart.match(/(\d+)d/);
          if (match) decimals = parseInt(match[1], 10);
        }

        // Percentage Formatting
        if (type === "percent") {
          // OBC Matrix compatibility: basic "percent" defaults to 0dp
          const percentDecimals = dpPart ? decimals : 0;
          return numValue.toLocaleString(undefined, {
            style: "percent",
            minimumFractionDigits: percentDecimals,
            maximumFractionDigits: percentDecimals,
          });
        }
        // CAD Currency Formatting (using toFixed)
        else if (type === "cad") {
          if (isNaN(decimals) || decimals < 0) decimals = 2; // Safety check
          const fixedString = numValue.toFixed(decimals);
          // Basic comma insertion - might need refinement for edge cases
          let finalString = fixedString;
          const useCommas = formatParts.includes("comma");
          if (useCommas) {
            const parts = fixedString.split(".");
            parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",");
            finalString = parts.join(".");
          }
          return "$" + finalString;
        }
        // Number Formatting (Default)
        else {
          // OBC Matrix compatibility: default to no commas unless explicitly requested
          const shouldUseCommas = formatParts.includes("comma");
          return numValue.toLocaleString(undefined, {
            minimumFractionDigits: decimals,
            maximumFractionDigits: decimals,
            useGrouping: shouldUseCommas,
          });
        }
      } catch (e) {
        console.error(
          `Error formatting value ${value} with format ${formatType}:`,
          e,
        );
        return String(value); // Fallback to string representation on error
      }
    }

    /**
     * Parse numeric values from strings (with comma handling)
     * @param {string|number|null|undefined} value - The value to parse
     * @param {number} [defaultValue=0] - The value to return if parsing fails
     * @returns {number} The parsed number or the default value
     */
    parseNumeric(value, defaultValue = 0) {
      if (value === null || value === undefined) {
        return defaultValue;
      }
      let numericValue;
      if (typeof value === "string") {
        // Remove commas, trim whitespace
        const cleanedValue = value.replace(/,/g, "").trim();
        if (cleanedValue === "" || cleanedValue.toUpperCase() === "N/A") {
          return defaultValue;
        }
        numericValue = parseFloat(cleanedValue);
      } else if (typeof value === "number") {
        numericValue = value;
      } else {
        numericValue = NaN; // Handle other types if needed
      }
      // Return defaultValue if parsing resulted in NaN
      return isNaN(numericValue) ? defaultValue : numericValue;
    }
  }

  // Create singleton instance and expose it
  window.TEUI.v4012.DualState = new DualState();

  // Expose formatting functions globally for easy access
  window.TEUI.v4012.formatNumber = function (value, formatType = "number-2dp") {
    return window.TEUI.v4012.DualState.formatNumber(value, formatType);
  };

  window.TEUI.v4012.parseNumeric = function (value, defaultValue = 0) {
    return window.TEUI.v4012.DualState.parseNumeric(value, defaultValue);
  };
})();
