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