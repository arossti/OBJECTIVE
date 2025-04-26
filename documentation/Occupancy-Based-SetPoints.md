# Architectural Pattern: Occupancy-Based Temperature Setpoints

This document outlines the correct architectural approach for handling calculations that depend on the **Major Occupancy** setting (`d_12` in Section 02), specifically focusing on the **Heating Setpoint** (`h_23`) and **Cooling Setpoint** (`h_24`) in Section 03 (Climate Calculations).

**Adherence to this pattern is crucial to avoid breaking StateManager logic and ensure reliable cross-section updates.**

## Core Principles (KISS & KWW)

1.  **Single Source of Truth**: `StateManager` holds the current value for *all* fields, including `d_12`, `h_23`, and `h_24`.
2.  **Clear Ownership**:
    *   Section 02 owns the *input* for Major Occupancy (`d_12`).
    *   Section 03 owns the *calculation logic* for the derived setpoints (`h_23`, `h_24`).
3.  **Dependency-Driven Updates**: `StateManager` is responsible for triggering recalculations based on registered dependencies. **Manual triggers or direct cross-section calls should be avoided.**
4.  **Keep It Simple, Stupid (KISS)**: The interaction should rely solely on the established `StateManager` mechanisms (`setValue`, `getValue`, `registerDependency`).
5.  **Keep What Works (KWW)**: Respect the existing, stable patterns demonstrated in other functioning sections and documented in `README.md`.

## Correct Implementation Steps

1.  **Field Definition (Section 03 - `4011-Section03.js`)**:
    *   Define `h_23` and `h_24` in `sectionRows` with `type: "calculated"`.
    *   Crucially, **list `d_12` in their `dependencies` array**:
      ```javascript
      // Inside sectionRows for Row 23
      h: {
          fieldId: "h_23",
          type: "calculated", // Correct type
          // value: "18", // NO default value here
          section: "climateCalculations",
          dependencies: ["d_12"] // CRITICAL DEPENDENCY
      },
      // Inside sectionRows for Row 24
      h: {
          fieldId: "h_24",
          type: "calculated", // Correct type
          // value: "24", // NO default value here
          section: "climateCalculations",
          dependencies: ["d_12"] // CRITICAL DEPENDENCY
      },
      ```

2.  **Calculation Functions (Section 03 - `4011-Section03.js`)**:
    *   Create simple, dedicated functions within Section 03 to calculate *only* the setpoint value based on the occupancy.
    *   These functions **must read the `d_12` value from `StateManager`** using `getFieldValue` (or directly `window.TEUI.StateManager.getValue('d_12')`).
      ```javascript
      /**
       * Calculate Heating Setpoint (h_23) based on Occupancy Type (d_12)
       */
      function calculateHeatingSetpoint() {
          const occupancyType = getFieldValue("d_12") || ""; // Read from StateManager via helper
          let heatingSetpoint = 22; // Default
          // Use centralized logic if available (e.g., window.TEUI.getTemperaturesForOccupancy)
          // or implement simple logic directly:
          if (occupancyType === "C-Residential" || occupancyType.startsWith("B")) {
              heatingSetpoint = 18;
          }
          console.log(`Calculated h_23: ${heatingSetpoint} based on d_12: ${occupancyType}`); // DEBUG
          return heatingSetpoint;
      }

      /**
       * Calculate Cooling Setpoint (h_24) based on Occupancy Type (d_12)
       */
      function calculateCoolingSetpoint() {
          const occupancyType = getFieldValue("d_12") || ""; // Read from StateManager via helper
          let coolingSetpoint = 24; // Default
          // Add specific logic if needed
          console.log(`Calculated h_24: ${coolingSetpoint} based on d_12: ${occupancyType}`); // DEBUG
          return coolingSetpoint;
      }
      ```

3.  **Calculation Registration (Section 03 - `registerCalculations` function or similar initialization step)**:
    *   **Only register dependencies**. Do not attempt to use `StateManager.registerCalculation`.
    *   Keep the `StateManager.registerDependency` calls. This is how `StateManager` knows to potentially mark `h_23`/`h_24` as dirty when `d_12` (a user input) changes.
      ```javascript
      function registerDependencies() { // Renamed for clarity
          if (!window.TEUI?.StateManager) return;
          try {
              // Register dependencies (source -> target)
              // StateManager's internal mechanism should handle triggering calculations
              // for targets when their direct user-input dependencies change.
              window.TEUI.StateManager.registerDependency("d_12", "h_23");
              window.TEUI.StateManager.registerDependency("d_12", "h_24");
              // ... other dependencies originating from user inputs ...
          } catch (error) {
              console.error("Error registering dependencies in Section 03:", error);
          }
      }
      ```
      *(Note: If a calculation in Section 3 depended on a *calculated* value from another section, a `StateManager.addListener` would be needed here, similar to the `i_39` -> `d_16` example in the main README).* 

4.  **Triggering the Calculation**:
    *   **User Change**: When the user changes the dropdown `dd_d_12` in Section 02, the corresponding event handler in `4011-Section02.js` **must** call `window.TEUI.StateManager.setValue('d_12', newValue, 'user-modified')`.
    *   **StateManager Action**: `StateManager`, upon receiving the `setValue` call for `d_12`, sees the registered dependency for `h_23` and `h_24`. It marks them as "dirty".
    *   **Recalculation**: The application's calculation engine (e.g., within `StateManager` itself, `SectionIntegrator`, or a dedicated `Calculator` module) should detect the dirty state of `h_23` and `h_24` and invoke their respective calculation functions (`calculateHeatingSetpoint`, `calculateCoolingSetpoint`) which reside *within Section 03*. The exact triggering mechanism needs verification in the current `StateManager`/`Calculator` implementation, but the principle is dependency-based triggering.
    *   **Value Update**: The calculation function runs, reads the *new* `d_12` value from `StateManager`, calculates the result, and this result is stored back into `StateManager` for `h_23`/`h_24` using a helper like `setCalculatedValue` within Section 03.

5.  **Initial Calculation**:
    *   During `onSectionRendered` or a slightly delayed trigger (`triggerInitialSect03Calculations`), Section 03 should directly call its *own* calculation functions (`calculateHeatingSetpoint`, `calculateCoolingSetpoint`) and use `setCalculatedValue` to populate the initial values for `h_23` and `h_24`. This ensures they have a value on load, based on the initial state of `d_12`.

## What NOT To Do (Common Mistakes)

*   **DO NOT** have Section 02's event handler directly call functions in Section 03.
*   **DO NOT** have calculation functions read directly from the DOM (`e.target.value` or `document.querySelector(...)`). Always read dependency values from `StateManager`.
*   **DO NOT** manually call `calculateHeatingSetpoint` or `calculateCoolingSetpoint` from *outside* Section 03's initialization or its own internal logic (like `calculateAll` or listener callbacks). Rely on the `StateManager` dependency and notification mechanisms.
*   **DO NOT** try to register calculation functions with `StateManager` using `registerCalculation`. Focus only on registering *dependencies* and using *listeners* where appropriate.

By strictly following this pattern, the occupancy-based setpoints will update reliably whenever the Major Occupancy changes, respecting the `StateManager` architecture and minimizing the risk of errors or race conditions. 