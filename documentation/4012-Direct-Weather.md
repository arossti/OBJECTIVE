# Plan for Direct Weather Data Loading (via JS Object) - TEUI 4.012+

**Objective:** Improve performance and user experience by loading essential climate data (HDD, CDD, Design Temps) from a pre-processed JavaScript object (`data/4011-Canada.js`) instead of requiring the user to load the full Excel file (`CANDA.csv`) via the FileHandler on startup.

**Attempt Summary (Branch `03CANADA`):**

1.  **Data Extraction:** Parsed Ontario data from `CANDA.csv` into a structured JavaScript object (`window.TEUI_PRELOADED_WEATHER`) stored in `data/4011-Canada.js`. Added a `name` property for province display.
2.  **Section Refactor:** Duplicated `sections/4011-Section03.js` to a temporary file, then renamed back to `sections/4011-Section03.js` after modifying it to:
    *   Read province/city lists and climate data directly from `window.TEUI_PRELOADED_WEATHER`.
    *   Use `getOptions` within the field definitions (`d_19`, `h_19`) for dynamic dropdown population by `FieldManager`.
    *   Remove internal functions (`populateProvinceDropdown`, `populateCityDropdown`) previously used for manual population.
    *   Internalize calculation logic (`determineClimateZone`, `calculateTemperatures`, `calculateGroundFacing`, etc.) previously potentially handled by `4011-Calculator.js`.
    *   Remove dependencies on `4011-ExcelLocationHandler.js` for initial data loading.
    *   Ensure initialization (`onSectionRendered`) correctly sequences event listener attachment and initial data population/calculation.
3.  **Core File Cleanup:**
    *   Removed (commented out or deleted) conflicting weather-related event handlers and functions (`initializeWeatherHandlers`, `updateWeatherData`, etc.) from `4011-Calculator.js`.
    *   Removed the `DOMContentLoaded` listener from `4011-Calculator.js` that called the old initialization.
4.  **Index File:** Added `<script src="data/4011-Canada.js"></script>` before other core/section scripts.

**Result:** The refactored `Section03.js` successfully renders, populates dropdowns for Ontario, and displays climate data for the default city (Alexandria) using the pre-loaded JS object.

**Required Architectural Changes & Considerations for Full Implementation:**

1.  **Complete `data/4011-Canada.js`:** The script currently only contains Ontario data. The full `CANDA.csv` needs to be parsed into the `window.TEUI_PRELOADED_WEATHER` object, ensuring all necessary columns (JavaScript notations from row 4) are included for all provinces/cities.
2.  **Refactor `4011-ExcelLocationHandler.js`:** This module *also* currently parses location data from the Excel file. A decision is needed:
    *   **Option A (Recommended):** Modify `ExcelLocationHandler` to *also* use `window.TEUI_PRELOADED_WEATHER` as its primary data source. This avoids redundancy and removes the implicit dependency on the Excel file for basic location functionality.
    *   **Option B:** Leave `ExcelLocationHandler` as is. This creates data duplication and potential conflicts if a user loads an Excel file with slightly different location/climate data than the pre-loaded version. Requires careful handling of data precedence (likely favoring user-loaded data via `StateManager` states).
3.  **Robust `Section03.js` Logic:** Ensure `updateWeatherData` and the `getOptions` functions gracefully handle cases where data for a selected province/city might be missing from the pre-loaded object (though ideally, the object should be complete).
4.  **Confirm `4011-Calculator.js` Cleanup:** Ensure no residual weather-related logic or listeners remain active in the calculator module.
5.  **Review `4011-init.js`:** Check if any initialization steps assume weather/location data comes exclusively from `ExcelLocationHandler` and adapt if necessary.
6.  **Data Precedence:** Define how the application should behave if a user *does* load an Excel project file containing a `CANDA` sheet after the application has initialized with the pre-loaded data. Should the pre-loaded data be overwritten? Should only specific project values be imported? Using `StateManager` value states (`default`, `imported`, `user-modified`) will be crucial here.

**Benefits:** This approach aligns with the offline-first, no-dependency architecture, improves startup performance, enhances user experience by removing a file loading step for core functionality, and respects browser security constraints. 