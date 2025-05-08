# Workplan: Section 03 Climate Calculations Refactor (CANADA2 Branch)

**Goal:** Refactor Section 03 (Climate Calculations) to eliminate the dependency on external Excel file imports for weather data. Replace this with an internal JavaScript data source (`4011-ClimateValues.js`) containing climate data for Canadian locations. The refactored section should be functionally identical to the original (regarding displayed values and calculations) but faster, lighter, and provide a frictionless user experience for selecting locations, while adhering fully to the application's architecture.

**Branch:** `CANADA2` (Created from latest `main` as of 2024-08-02)

**Key Files:**
*   `sections/4011-Section03.js` (The refactored module)
*   `4011-ClimateValues.js` (New file holding climate data in JSON format)
*   `index.html` (Minor adjustments for button removal/restoration)

---

**Current Status (as of start of workplan):**

1.  **Branch:** `CANADA2` is checked out and based on the latest stable `main`.
2.  **Climate Data File:** `4011-ClimateValues.js` created and populated with initial data for 3 Ontario cities.
3.  **Section 03 Refactor (Initial):**
    *   `sections/4011-Section03.js` created (copied from original S03).
    *   Excel import logic and related internal functions removed.
    *   References to `window.TEUI.ClimateData` added.
    *   Module namespace corrected to `sect03`.
    *   Redundant initialization listeners removed.
4.  **UI Adjustments:**
    *   Excel loader buttons removed from Section 3 header in `index.html`.
    *   "More Weather Data" button restored in `index.html`.
5.  **Known Issues:**
    *   City dropdown (`dd_h_19`) does not populate correctly based on the selected province.
    *   Selecting a city does not trigger the loading of climate data into the section's fields.
    *   Initial default selection ("ON" / "Alexandria") and data load is not functioning correctly.

---

**Workplan Tasks:**

**Phase 1: Core Functionality & Data Integration**

1.  **Fix Dropdown Logic & Data Loading:**
    *   **Investigate `handleProvinceChange`:**
        *   Verify it correctly accesses `window.TEUI.ClimateData`.
        *   Ensure it filters cities based **only** on the selected `provinceValue`.
        *   Confirm it correctly populates the city dropdown (`dd_h_19`) with sorted city names.
        *   Ensure it correctly sets the default city to "Alexandria" if province is "ON", otherwise selects the first alphabetical city.
        *   Confirm it triggers `handleCityChange` or `updateWeatherData` after setting the default city.
    *   **Investigate `handleCityChange`:**
        *   Ensure it correctly updates `StateManager` for `h_19`.
        *   Confirm it correctly triggers `updateWeatherData`.
    *   **Investigate `updateWeatherData`:**
        *   Verify it correctly reads `provinceValue` and `cityValue`.
        *   Ensure it correctly accesses the nested city data within `window.TEUI.ClimateData`.
        *   Confirm it uses the correct keys (matching `ClimateData`) to retrieve values (HDD, CDD, Temps, Elevation, etc.).
        *   Verify it correctly handles the "Present" vs "Future" toggle (`h_20`) when selecting data keys.
        *   Ensure it uses `setCalculatedValue` **correctly** for *all* derived climate fields (`d_20`, `d_21`, `l_22`, `d_23`, `e_23`, `d_24`, `e_24`, `j_19`, `d_22`, `h_22`, `i_23`, `i_24`, `m_23`, `m_24`).
        *   Confirm `calculateAll` is triggered at the end to update dependent calculations (like GF HDD/CDD, Climate Zone).
    *   **Fix Initial Load:**
        *   Modify `onSectionRendered` or `initializeEventHandlers` to ensure that on page load:
            *   Province dropdown (`dd_d_19`) defaults to "ON".
            *   `handleProvinceChange` is triggered to populate cities and select "Alexandria".
            *   `updateWeatherData` is triggered to load Alexandria's data.

**Phase 2: Standardization & Refinement**

2.  **Standardize Helper Functions:**
    *   Review `getNumericValue`, `getFieldValue`, and `setCalculatedValue` within `Section03.js`.
    *   Ensure they strictly follow the standard pattern: use only the global `window.TEUI.parseNumeric` and `window.TEUI.formatNumber` utilities without local fallbacks.
    *   Verify that `setCalculatedValue` stores the raw numeric value (as string) in `StateManager` and the formatted value in the DOM.

3.  **Verify Formatting:**
    *   Test the display of all climate-related fields (`d_20` to `m_24`, `j_19`).
    *   Ensure correct `formatType` strings (`integer`, `number-1dp`, etc.) are used in `setCalculatedValue` calls to match the original Excel appearance.

4.  **"More Weather Data" Modal:**
    *   Test the "More Weather Data" button (`#showWeatherDataBtn`).
    *   Verify the `showWeatherData` function reads the correct city data from `window.TEUI.ClimateData` and displays all key-value pairs clearly in the modal (`#weatherDataModal`).

**Phase 3: Full Data Population & Cleanup**

5.  **Populate `4011-ClimateValues.js`:**
    *   Write/use a script or manually parse the full `sources of truth 3037/CANDA.csv`.
    *   Populate `window.TEUI.ClimateData` with entries for *all* provinces/territories and their respective cities.
    *   Ensure data keys in the JS object exactly match the relevant column headers/JavaScript notations expected by `Section03.js`. Double-check units and values.

6.  **Cleanup & Final Testing:**
    *   Remove all temporary `console.log` statements added during debugging.
    *   Comment out or remove any unused functions or variables remaining from the original S03 or the refactoring process.
    *   Perform comprehensive testing:
        *   Select various provinces and cities.
        *   Toggle "Present" / "Future" data.
        *   Edit user inputs (`m_19`, `l_24`).
        *   Verify calculations within Section 03 are correct.
        *   Verify that changes in Section 03 correctly propagate to dependent fields in other sections (e.g., temperature setpoints, HDD/CDD values used elsewhere).
        *   Compare key outputs with the original (Excel-based) Section 03 to ensure functional parity.

---

**Completion Criteria:**

*   Section 03 loads default "ON" / "Alexandria" data correctly on page initialization.
*   Province dropdown selection correctly populates the city dropdown.
*   City dropdown selection correctly loads and displays all associated climate data fields with correct formatting.
*   "Present" / "Future" toggle works correctly.
*   User-editable fields (`m_19`, `l_24`) function correctly.
*   Internal calculations (GF HDD/CDD, Climate Zone, F temps) update correctly.
*   "More Weather Data" modal displays correct data for the selected city.
*   Section 03 helpers are standardized.
*   No errors in the console related to Section 03 operation.
*   Changes successfully propagate to dependent sections.
*   All temporary code/logs removed.
*   `4011-ClimateValues.js` contains data for all Canadian locations from the source CSV.
*   Branch `CANADA2` ready for merge into `main`.

---

## Troubleshooting Journey: Province/City Dropdown Issues

### Problem Statement
The province and city dropdown relationship in Section 03 (Climate Calculations) has been persistently problematic. When changing the province value, the city dropdown would disappear entirely from the DOM instead of being populated with cities for the selected province. This issue only occurs within the architecture of the TEUI application but works correctly in standalone testing environments.

### Architecture Constraints & Challenges
The TEUI application follows a specific architectural pattern:
1. **Module Encapsulation**: Each section is defined using an IIFE (Immediately Invoked Function Expression) that creates a closure, limiting the scope of internal functions.
2. **StateManager**: Values should be set and retrieved through `window.TEUI.StateManager` rather than direct DOM manipulation.
3. **Event Handling**: Event handlers must be properly bound and accessible in the correct scope to maintain interactivity.
4. **Rendering Lifecycle**: The application has a specific rendering cycle that must be respected when modifying component visibility.

### Attempted Solutions

#### 1. Demo File Approach
We created standalone test files (`weather.html` and `weather-demo.html`) that correctly implemented the province/city relationship pattern:

- **Successful Pattern**: In these demos, we accomplished:
  - Proper preservation of the city dropdown container during province changes
  - Correct population of city options based on data from 4011-ClimateValues.js
  - Reliable visibility of the dropdown elements at all times
  - Proper event handler binding and scope management

- **Key Implementation Details**:
  - Used a cache for DOM elements to avoid repeated lookups
  - Implemented proper dropdown option management (removing/adding options rather than innerHTML replacement)
  - Preserved parent container references to ensure elements stayed in the DOM
  - Added verification steps to ensure dropdowns remained visible

#### 2. Function Scope Resolution
A critical issue was function scoping - functions defined inside the IIFE weren't accessible to event handlers:

- **Diagnosis**: Event handlers were losing reference to key functions:
  - `handleProvinceChange`, `handleCityChange`, and `updateWeatherData` were defined inside the IIFE
  - Event listeners bound to dropdowns couldn't access these functions when events fired
  - Console logs revealed these functions were `undefined` in the event handler context

- **Solution Approach**: We exported critical functions to the global namespace:
  ```javascript
  // Export critical functions to global namespace for event handlers
  window.TEUI.sect03.handleProvinceChange = handleProvinceChange;
  window.TEUI.sect03.handleCityChange = handleCityChange;
  window.TEUI.sect03.updateWeatherData = updateWeatherData;
  window.TEUI.sect03.ensureCityDropdownVisible = ensureCityDropdownVisible;
  ```

#### 3. DOM Preservation Strategy
We implemented a more defensive approach to DOM manipulation:

- **Dropdown Preservation**: Instead of clearing containers which would destroy the dropdown:
  - Preserved references to parent containers
  - Carefully managed options rather than replacing entire elements
  - Added an explicit `ensureCityDropdownVisible()` function to verify and fix visibility
  - Added scheduled checks to ensure dropdowns remained visible after asynchronous operations

- **Verification Steps**: Added robust checking and diagnostic functions:
  ```javascript
  window.TEUI.sect03.debug = {
    logScope: function() { /* Check function availability */ },
    checkDropdowns: function() { /* Verify DOM elements exist */ },
    ensureCityDropdownVisible: function() { /* Maintain dropdown visibility */ }
  };
  ```

#### 4. StateManager Integration
We aligned the implementation with the application's state management patterns:

- **Proper State Updates**: Used StateManager for all value changes:
  ```javascript
  if (window.TEUI?.StateManager) {
      window.TEUI.StateManager.setValue('d_19', provinceValue, 'user-modified');
  }
  ```

- **Initialization Sequence**: Implemented a proper initialization flow respecting the app's lifecycle:
  ```javascript
  function initializeDefaultClimateValues() {
      // Set values through StateManager with correct timing
      window.TEUI.StateManager.setValue('d_19', defaultProvince, 'initial');
      // Then update DOM with proper delays
      // ...
  }
  ```

### Persistent Challenges

Despite these efforts, several issues remained persistent:

1. **Timing Issues**: The asynchronous nature of the application's rendering cycle causes race conditions where elements may exist at one moment and disappear the next.

2. **Architectural Limitations**: The IIFE pattern creates scoping challenges that require complex workarounds to ensure functions remain accessible across contexts.

3. **StateManager vs. DOM**: Finding the right balance between StateManager updates and necessary DOM manipulations proved challenging. Some DOM operations are needed for dropdown management but must be minimized to respect the architecture.

4. **Event Handler Binding**: Ensuring event handlers correctly reference their functions across module boundaries required careful management of the global namespace.

### Lessons Learned

1. **Architecture Understanding**: A deep understanding of the application's architecture pattern is critical before attempting to modify components.

2. **Function Accessibility**: When using IIFE modules, functions that need to be accessed by event handlers must be explicitly exposed to the global namespace.

3. **DOM Reference Preservation**: Always maintain references to parent containers when manipulating child elements to prevent accidental element removal.

4. **Defensive Programming**: Implement extensive validation and recovery mechanisms for DOM operations in complex applications.

5. **Diagnostic Tools**: Create comprehensive debugging utilities early in the troubleshooting process to provide visibility into the application's state.

### Next Steps

The troubleshooting journey continues with the following approaches:

1. Consider refactoring Section 03 to align more closely with other successfully functioning sections in the application.

2. Implement a MutationObserver to monitor and restore dropdown elements that might be removed during the application's rendering cycle.

3. Explore whether a more substantial architectural change might be needed to resolve the persistent issues.

4. Review application logs to identify potential interference from other modules or components. 