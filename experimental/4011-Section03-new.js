/**
 * 4011-Section03.js (Formerly 03C - Modified for ClimateData)
 * Climate Calculations (Section 3) module for TEUI Calculator 4.011
 *
 * MODIFIED: Uses internal ClimateData object instead of Excel import.
 */

// Ensure namespace exists
window.TEUI = window.TEUI || {};
window.TEUI.SectionModules = window.TEUI.SectionModules || {};

// Create section-specific namespace for global references
window.TEUI.sect03 = window.TEUI.sect03 || {}; // Changed from sect03C

// Global variable to track initialization state
window.TEUI.sect03.initialized = false; // Changed from sect03C
// window.TEUI.sect03.userInteracted = false; // User interaction flag might not be needed now

// Add at the top of the file, after the window.TEUI namespace definition
window.TEUI.sect03.debugLog = function (message) {
  console.log(`[S03 DIAGNOSTIC] ${message}`);
};

// Add global debugging helpers
window.TEUI.sect03 = window.TEUI.sect03 || {};
window.TEUI.sect03.debug = {
  logScope: function () {
    console.log("[S03 DIAGNOSTIC] Checking function scope...");
    console.log("[S03 DIAGNOSTIC] Inside IIFE functions:");
    // These will likely show false now as they are truly private to the IIFE
    // console.log("[S03 DIAGNOSTIC] - handleProvinceChange available: " + (typeof handleProvinceChange === 'function'));
    // console.log("[S03 DIAGNOSTIC] - updateWeatherData available: " + (typeof updateWeatherData === 'function'));
    // console.log("[S03 DIAGNOSTIC] - initializeEventHandlers available: " + (typeof initializeEventHandlers === 'function'));
    console.log("[S03 DIAGNOSTIC] Global scope functions:");
    console.log(
      "[S03 DIAGNOSTIC] - window.TEUI.sect03.handleProvinceChange available: " +
        (typeof window.TEUI.sect03.handleProvinceChange === "function"),
    );
    console.log(
      "[S03 DIAGNOSTIC] - window.TEUI.sect03.updateWeatherData available: " +
        (typeof window.TEUI.sect03.updateWeatherData === "function"),
    );
  },
  checkDropdowns: function () {
    const provinceDropdown = document.querySelector(
      '[data-dropdown-id="dd_d_19"]',
    );
    const cityDropdown = document.querySelector('[data-dropdown-id="dd_h_19"]');

    console.log(
      "[S03 DIAGNOSTIC] DOM CHECK: Province dropdown=" +
        (provinceDropdown ? "exists" : "missing") +
        ", value=" +
        (provinceDropdown?.value || "none"),
    );
    console.log(
      "[S03 DIAGNOSTIC] DOM CHECK: City dropdown=" +
        (cityDropdown ? "exists" : "missing") +
        ", value=" +
        (cityDropdown?.value || "none"),
    );
    console.log(
      "[S03 DIAGNOSTIC] DOM CHECK: Parent element of city dropdown=" +
        (cityDropdown?.parentElement ? "exists" : "missing"),
    );

    // List all dropdowns for reference
    const allDropdowns = document.querySelectorAll("[data-dropdown-id]");
    console.log(
      "[S03 DIAGNOSTIC] All dropdowns found:",
      Array.from(allDropdowns).map((d) => d.getAttribute("data-dropdown-id")),
    );

    return {
      provinceExists: !!provinceDropdown,
      cityExists: !!cityDropdown,
      provinceValue: provinceDropdown?.value,
      cityValue: cityDropdown?.value,
    };
  },
  // New helper to ensure city dropdown visibility
  ensureCityDropdownVisible: function () {
    // Check if the function is actually defined globally before calling
    if (typeof window.TEUI.sect03.ensureCityDropdownVisible === "function") {
      return window.TEUI.sect03.ensureCityDropdownVisible();
    } else {
      console.error(
        "[S03 DEBUG] window.TEUI.sect03.ensureCityDropdownVisible is not defined globally!",
      );
      return false;
    }
  },
};

// Sample call to log scope immediately
setTimeout(function () {
  console.log("[S03 DIAGNOSTIC] Running immediate scope check");
  window.TEUI.sect03.debug.logScope();
  window.TEUI.sect03.debug.checkDropdowns();
}, 1000);

// --- Global Utility Functions (Can be removed if defined elsewhere reliably) ---
window.TEUI.formatNumber =
  window.TEUI.formatNumber ||
  function (value) {
    // Ensure value is a number
    const numValue = parseFloat(value);

    // Handle invalid values
    if (isNaN(numValue)) {
      // Return the original value if it's not parseable as a number (e.g., "N/A")
      return value?.toString() || "0.00";
    }

    // Check if value is very small
    if (Math.abs(numValue) < 0.01 && numValue !== 0) {
      return numValue.toFixed(2);
    }

    // Always use 2 decimal places for all numbers, including integers
    return numValue.toLocaleString(undefined, {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    });
  };

// Section 3: Climate Calculations Module (Modified Copy)
// Main Module IIFE starts here
window.TEUI.SectionModules.sect03 = (function () {
  // >>> ADDED: Local store for city data <<<
  let provinceCityMap = {};
  // >>> END ADDED <<<

  //==========================================================================
  // ADDED: HELPER FUNCTIONS (Standard Implementation like S04)
  //==========================================================================

  /**
   * Safely parses a numeric value from StateManager, using the global parseNumeric.
   * @param {string} fieldId - The ID of the field to retrieve the value for.
   * @returns {number} The parsed numeric value, or 0 if parsing fails.
   */
  function getNumericValue(fieldId, defaultValue = 0) {
    // Added default value parameter
    // Always use global parseNumeric and StateManager
    const rawValue = window.TEUI?.StateManager?.getValue(fieldId);
    return window.TEUI?.parseNumeric?.(rawValue, defaultValue) || defaultValue;
  }

  /**
   * Helper to get field value, preferring StateManager but falling back to DOM.
   * More robust implementation with better error handling.
   * @param {string} fieldId
   * @returns {string | null} Value as string or null if not found.
   */
  function getFieldValue(fieldId) {
    // Try to get value from StateManager first
    if (window.TEUI?.StateManager?.getValue) {
      try {
        const value = window.TEUI.StateManager.getValue(fieldId);
        if (value !== null && value !== undefined) {
          return value.toString();
        }
      } catch (e) {
        console.warn(
          `[S03 DEBUG] Error getting value from StateManager for ${fieldId}:`,
          e,
        );
      }
    }

    // Fall back to DOM if StateManager didn't have the value
    try {
      // Try dropdown first by data-dropdown-id
      const dropdownElementDD = document.querySelector(
        `[data-dropdown-id="${fieldId}"]`,
      );
      if (dropdownElementDD && dropdownElementDD.value !== undefined) {
        return dropdownElementDD.value;
      }
      // Try dropdown first by data-field-id
      const dropdownElement = document.querySelector(
        `select[data-field-id="${fieldId}"]`,
      );
      if (dropdownElement && dropdownElement.value !== undefined) {
        return dropdownElement.value;
      }

      // Then try regular field by data-field-id
      const element = document.querySelector(`[data-field-id="${fieldId}"]`);
      if (element) {
        if (element.value !== undefined) {
          return element.value;
        } else if (element.textContent) {
          return element.textContent.trim();
        }
      }
    } catch (e) {
      console.warn(
        `[S03 DEBUG] Error getting value from DOM for ${fieldId}:`,
        e,
      );
    }

    // console.warn(`[S03 DEBUG] Field value not found for ${fieldId}`); // Reduce noise
    return null;
  }

  /**
   * Sets a calculated value in the StateManager and updates the corresponding DOM element.
   * Uses the global window.TEUI.formatNumber for formatting.
   * @param {string} fieldId - The ID of the field to update.
   * @param {number} rawValue - The raw calculated numeric value.
   * @param {string} [formatType='number'] - The format type string.
   */
  function setCalculatedValue(fieldId, rawValue, formatType = "number") {
    // console.log(`[S03 DEBUG] Setting ${fieldId} to ${rawValue} with format ${formatType}`); // Reduce noise

    // Handle potential N/A cases first
    if (isNaN(rawValue) || rawValue === null || rawValue === undefined) {
      if (window.TEUI?.StateManager?.setValue) {
        window.TEUI.StateManager.setValue(fieldId, "N/A", "calculated");
      }
      const elementNA = document.querySelector(`[data-field-id="${fieldId}"]`);
      if (elementNA) elementNA.textContent = "N/A";
      return; // Stop processing if value is not a valid number
    }

    // Format the value according to format type
    let formattedValue;
    if (formatType === "integer-nocomma") {
      formattedValue = window.TEUI?.formatNumber
        ? window.TEUI.formatNumber(rawValue, formatType)
        : Math.round(rawValue).toString();
    } else if (formatType === "number-1dp") {
      formattedValue = window.TEUI?.formatNumber
        ? window.TEUI.formatNumber(rawValue, formatType)
        : parseFloat(rawValue).toFixed(1);
    } else if (formatType === "raw") {
      formattedValue = rawValue.toString();
    } else if (formatType === "percent-0dp") {
      formattedValue = window.TEUI?.formatNumber
        ? window.TEUI.formatNumber(rawValue, formatType)
        : Math.round(rawValue * 100) + "%";
    } else {
      // Use default TEUI formatter if available, or basic formatting
      formattedValue = window.TEUI?.formatNumber
        ? window.TEUI.formatNumber(rawValue, formatType)
        : parseFloat(rawValue).toFixed(2);
    }

    // Store raw value as string in StateManager for precision
    if (window.TEUI?.StateManager?.setValue) {
      // Store raw number converted to string
      window.TEUI.StateManager.setValue(
        fieldId,
        rawValue.toString(),
        "calculated",
      );
    }

    // Update DOM
    const element = document.querySelector(`[data-field-id="${fieldId}"]`);
    if (element) {
      element.textContent = formattedValue;
      element.classList.toggle("negative-value", rawValue < 0);
    } else {
      // console.warn(`[S03 DEBUG] setCalculatedValue: Element not found for ${fieldId}`); // Reduce noise
    }
  }

  /**
   * Ensures that the city dropdown element is properly visible in the DOM
   * This function can be called at multiple points to prevent dropdown disappearance
   * @returns {boolean} True if dropdown was found and verified, false otherwise
   */
  function ensureCityDropdownVisible() {
    // console.log("[S03 DEBUG] Running dropdown visibility check"); // Reduce noise

    // First find the dropdown
    const cityDropdown = document.querySelector('[data-dropdown-id="dd_h_19"]');
    if (!cityDropdown) {
      console.error("[S03 DEBUG] City dropdown element not found in DOM");
      return false;
    }

    // Check and fix parent container
    const container = cityDropdown.parentElement;
    if (!container) {
      console.error("[S03 DEBUG] City dropdown has no parent element!");
      return false;
    }

    // Ensure container is visible
    if (container.style.display === "none") {
      console.log(
        "[S03 DEBUG] City dropdown container was hidden, making visible",
      );
      container.style.display = "";
    }

    // Ensure the dropdown itself is enabled if there are options
    if (cityDropdown.options.length > 1) {
      cityDropdown.disabled = false;
    }

    return true;
  }

  //==========================================================================
  // ADDED: HELPER FUNCTIONS (Standard Implementation like S04)
  //==========================================================================

  /**
   * Update the weather data modal with detailed climate information
   * Useful for debugging and showing users the full climate data
   */
  function updateWeatherDataModal() {
    console.log("[S03 DIAGNOSTIC] updateWeatherDataModal called");

    const provinceValue = getFieldValue("d_19");
    const cityValue = getFieldValue("h_19");
    const modalContent = document.getElementById("weatherDataContent");

    if (!modalContent) {
      console.error("[S03 DEBUG] Weather data modal content element not found");
      return;
    }

    // If no province or city is selected, show a message
    if (!provinceValue || !cityValue) {
      modalContent.textContent =
        "Please select a province and city to view weather data.";
      return;
    }

    // Check if ClimateData is available
    if (
      !window.TEUI?.ClimateData ||
      !window.TEUI.ClimateData[provinceValue] ||
      !window.TEUI.ClimateData[provinceValue][cityValue]
    ) {
      modalContent.textContent = `No climate data available for ${cityValue}, ${provinceValue}`;
      return;
    }

    // Get city data
    const cityData = window.TEUI.ClimateData[provinceValue][cityValue];

    // Format as a table with keys and values
    let formattedData = `
<h4>${cityValue}, ${provinceValue}</h4>
<p>Elevation: ${cityData["Elev ASL (m)"]} m ASL</p>

<h5>Current Climate</h5>
<table class="table table-sm table-striped">
    <thead>
        <tr>
            <th>Parameter</th>
            <th>Value</th>
        </tr>
    </thead>
    <tbody>
        <tr><td>HDD18 (°C·days)</td><td>${cityData.HDD18}</td></tr>
        <tr><td>CDD24 (°C·days)</td><td>${cityData.CDD24}</td></tr>
        <tr><td>January 2.5% Design Temperature</td><td>${cityData.January_2_5} °C</td></tr>
        <tr><td>January 1% Design Temperature</td><td>${cityData.January_1} °C</td></tr>
        <tr><td>July 2.5% Dry-bulb Temperature</td><td>${cityData.July_2_5_Tdb} °C</td></tr>
        <tr><td>July 2.5% Wet-bulb Temperature</td><td>${cityData.July_2_5_Twb} °C</td></tr>
    </tbody>
</table>

<h5>Future Climate (2021-2050)</h5>
<table class="table table-sm table-striped">
    <tbody>
        <tr><td>HDD18 (°C·days)</td><td>${cityData.HDD18_2021_2050}</td></tr>
        <tr><td>CDD24 (°C·days)</td><td>${cityData.CDD24_2021_2050}</td></tr>
        <tr><td>July 2.5% Dry-bulb Temperature</td><td>${cityData.Future_July_2_5_Tdb} °C</td></tr>
        <tr><td>July 2.5% Wet-bulb Temperature</td><td>${cityData.Future_July_2_5_Twb} °C</td></tr>
    </tbody>
</table>
`;

    // Add debug info about data
    formattedData += `
<details>
    <summary>Debug Information</summary>
    <pre style="font-size: 11px;">
Province dropdown ID: dd_d_19
City dropdown ID: dd_h_19
Available cities for ${provinceValue}: ${Object.keys(window.TEUI.ClimateData[provinceValue]).join(", ")}
All dropdowns: ${Array.from(document.querySelectorAll("[data-dropdown-id]"))
      .map((d) => d.getAttribute("data-dropdown-id"))
      .join(", ")}
City cell exists: ${!!document.querySelector('[data-field-id="h_19"]')?.parentElement}
    </pre>
</details>
`;

    // Set the content
    modalContent.innerHTML = formattedData;
  }

  /**
   * Initialize the weather data modal event handler
   */
  function initializeWeatherDataModal() {
    // Get the modal element
    const weatherModal = document.getElementById("weatherDataModal");
    if (!weatherModal) {
      console.error("[S03 DEBUG] Weather data modal element not found");
      return;
    }

    // Set up the modal show event listener
    weatherModal.addEventListener("show.bs.modal", function () {
      updateWeatherDataModal();
    });

    // Also set up the button click handler
    const showWeatherDataBtn = document.getElementById("showWeatherDataBtn");
    if (showWeatherDataBtn) {
      showWeatherDataBtn.addEventListener("click", function () {
        // Directly show the modal using Bootstrap API
        const modalInstance =
          bootstrap.Modal.getInstance(weatherModal) ||
          new bootstrap.Modal(weatherModal);
        modalInstance.show();
        // updateWeatherDataModal will be called by the 'show.bs.modal' listener above
      });
    }
  }

  //==========================================================================
  // PART 1: CONSOLIDATED FIELD DEFINITIONS AND LAYOUT (Modified for ClimateData)
  //==========================================================================

  const canadianProvinces = [
    { value: "", name: "Select Province" },
    { value: "AB", name: "Alberta" },
    { value: "BC", name: "British Columbia" },
    { value: "MB", name: "Manitoba" },
    { value: "NB", name: "New Brunswick" },
    { value: "NL", name: "Newfoundland and Labrador" },
    { value: "NS", name: "Nova Scotia" },
    { value: "NT", name: "Northwest Territories" },
    { value: "NU", name: "Nunavut" },
    { value: "ON", name: "Ontario" },
    { value: "PE", name: "Prince Edward Island" },
    { value: "QC", name: "Québec" },
    { value: "SK", name: "Saskatchewan" },
    { value: "YT", name: "Yukon" },
  ];

  const sectionRows = {
    header: {
      id: "03-ID",
      rowId: "03-ID",
      label: "Climate Units",
      cells: {
        c: { content: "C", classes: ["section-subheader"] },
        d: { content: "ºC", classes: ["section-subheader"] },
        e: { content: "ºF", classes: ["section-subheader"] },
        f: { content: "F", classes: ["section-subheader"] },
        g: { content: "G", classes: ["section-subheader"] },
        h: { content: "ºC", classes: ["section-subheader"] },
        i: { content: "ºF", classes: ["section-subheader"] },
        j: { content: "J", classes: ["section-subheader"] },
        k: { content: "K", classes: ["section-subheader"] },
        l: { content: "L", classes: ["section-subheader"] },
        m: { content: "M", classes: ["section-subheader"] },
        n: { content: "N", classes: ["section-subheader"] },
      },
    },
    19: {
      id: "L.1.1",
      rowId: "L.1.1",
      label: "Province",
      cells: {
        c: { content: "Province", type: "label" },
        d: {
          fieldId: "d_19",
          type: "dropdown",
          dropdownId: "dd_d_19",
          value: "ON",
          section: "climateCalculations",
          options: canadianProvinces, // Directly use the province list
        },
        f: { content: "L.1.2", classes: ["label-prefix"] },
        g: { content: "City", classes: ["label-main"] },
        h: {
          fieldId: "h_19",
          type: "dropdown",
          dropdownId: "dd_h_19",
          value: "Alexandria",
          section: "climateCalculations",
          dependencies: ["d_19"],
          options: [{ value: "", name: "Select City" }], // Initial placeholder
          // getOptions is now handled by the event listener
        },
        i: { content: "Climate Zone" },
        j: {
          fieldId: "j_19",
          type: "derived",
          value: "6.0",
          section: "climateCalculations",
        },
        k: { content: "L.3.3", classes: ["label-prefix"] },
        l: { content: "Days Cooling", classes: ["label-main"] },
        m: {
          fieldId: "m_19",
          type: "editable",
          value: "120",
          section: "climateCalculations",
          classes: ["user-input", "editable"],
        },
      },
    },
    20: {
      id: "L.2.1",
      rowId: "L.2.1",
      label: "Heating Degree Days (HDD)",
      cells: {
        c: { content: "Heating Degree Days (HDD)", type: "label" },
        d: {
          fieldId: "d_20",
          type: "derived",
          value: "0",
          section: "climateCalculations",
        },
        f: { content: "L.2.2", classes: ["label-prefix"] },
        g: { content: "Current or Future Values", classes: ["label-main"] },
        h: {
          fieldId: "h_20",
          type: "dropdown",
          dropdownId: "dd_h_20",
          value: "Present",
          section: "climateCalculations",
          options: [
            { value: "Present", name: "Present (1991-2020)" },
            { value: "Future", name: "Future (2021-2050)" },
          ],
        },
        j: {
          fieldId: "j_20",
          type: "calculated",
          value: "HDD Ref Lookup",
          classes: ["reference-value"],
        },
        k: { content: "HDD - Energy Star", classes: ["reference-label"] },
      },
    },
    21: {
      id: "L.2.3",
      rowId: "L.2.3",
      label: "Cooling Degree Days (CDD)",
      cells: {
        c: { content: "Cooling Degree Days (CDD)", type: "label" },
        d: {
          fieldId: "d_21",
          type: "derived",
          value: "0",
          section: "climateCalculations",
        },
        f: { content: "G.4.2", classes: ["label-prefix"] },
        g: { content: "Capacitance", classes: ["label-main"] },
        h: {
          fieldId: "h_21",
          type: "dropdown",
          dropdownId: "dd_h_21",
          value: "Capacitance",
          section: "climateCalculations",
          options: [
            { value: "Static", name: "Static" },
            { value: "Capacitance", name: "Capacitance" },
          ],
        },
        i: {
          fieldId: "i_21",
          type: "percentage",
          value: "50",
          min: 0,
          max: 100,
          step: 5,
        },
        j: {
          fieldId: "j_21",
          type: "calculated",
          value: "CDD Ref Lookup",
          classes: ["reference-value"],
        },
        k: { content: "CDD - Energy Star", classes: ["reference-label"] },
      },
    },
    22: {
      id: "L.2.4",
      rowId: "L.2.4",
      label: "Ground Facing GF HDD",
      cells: {
        c: { content: "Ground Facing GF HDD", type: "label" },
        d: {
          fieldId: "d_22",
          type: "derived",
          value: "0",
          section: "climateCalculations",
        },
        e: { content: "ºC•days", classes: ["unit-label"] },
        f: { content: "L.2.5", classes: ["label-prefix"] },
        g: { content: "GF CDD", classes: ["label-main"] },
        h: {
          fieldId: "h_22",
          type: "calculated",
          value: "0",
          section: "climateCalculations",
        },
        i: { content: "ºC•days", classes: ["unit-label"] },
        j: { content: "L.1.3", classes: ["label-prefix"] },
        k: { content: "Elevation (ASL)", classes: ["label-main"] },
        l: {
          fieldId: "l_22",
          type: "derived",
          value: "0",
          section: "climateCalculations",
        }, // Elevation will be derived
        m: { content: "m", classes: ["unit-label"] },
      },
    },
    23: {
      id: "L.3.1",
      rowId: "L.3.1",
      label: "Coldest Days (Location Specific)",
      cells: {
        c: { content: "Coldest Days (Location Specific)", type: "label" },
        d: {
          fieldId: "d_23",
          type: "derived",
          value: "0",
          section: "climateCalculations",
        },
        e: {
          fieldId: "e_23",
          type: "calculated",
          value: "0",
          section: "climateCalculations",
        },
        f: { content: "B.1.2", classes: ["label-prefix"] },
        g: { content: "Tset Heating", classes: ["label-main"] },
        h: {
          fieldId: "h_23",
          type: "calculated",
          section: "climateCalculations",
          dependencies: ["d_12"],
        },
        i: {
          fieldId: "i_23",
          type: "calculated",
          value: "0",
          section: "climateCalculations",
        },
        m: { fieldId: "m_23", type: "calculated", value: "0%" },
      },
    },
    24: {
      id: "L.3.2",
      rowId: "L.3.2",
      label: "Hottest Days (Location Specific)",
      cells: {
        c: { content: "Hottest Days (Location Specific)", type: "label" },
        d: {
          fieldId: "d_24",
          type: "derived",
          value: "0",
          section: "climateCalculations",
        },
        e: {
          fieldId: "e_24",
          type: "calculated",
          value: "0",
          section: "climateCalculations",
        },
        f: { content: "B.1.3", classes: ["label-prefix"] },
        g: { content: "Tset Cooling", classes: ["label-main"] },
        h: {
          fieldId: "h_24",
          type: "calculated",
          section: "climateCalculations",
          dependencies: ["d_12"],
        },
        i: { fieldId: "i_24", type: "calculated", value: "0" },
        j: { content: "B.1.4", classes: ["label-prefix"] },
        k: { content: "Cooling Override", classes: ["label-main"] },
        l: {
          fieldId: "l_24",
          type: "editable",
          value: "24",
          section: "climateCalculations",
          classes: ["user-input", "editable"],
        },
        m: { fieldId: "m_24", type: "calculated", value: "0%" },
      },
    },
  };

  //==========================================================================
  // ACCESSOR METHODS TO EXTRACT FIELDS AND LAYOUT (Keep these)
  //==========================================================================

  /**
   * Extract field definitions from the integrated layout
   */
  function getFields() {
    const fields = {};
    Object.entries(sectionRows).forEach(([rowKey, row]) => {
      if (rowKey === "header") return;
      if (!row.cells) return;
      Object.entries(row.cells).forEach(([colKey, cell]) => {
        if (cell.fieldId && cell.type) {
          fields[cell.fieldId] = {
            ...cell,
            defaultValue: cell.value, // Ensure defaultValue is set
          };
          // delete fields[cell.fieldId].value; // Remove original value key
        }
      });
    });
    return fields;
  }

  /**
   * Extract dropdown options from the integrated layout
   */
  function getDropdownOptions() {
    const options = {};
    Object.values(sectionRows).forEach((row) => {
      if (!row.cells) return;
      Object.values(row.cells).forEach((cell) => {
        if (cell.dropdownId && cell.options) {
          options[cell.dropdownId] = cell.options;
        }
      });
    });
    return options;
  }

  /**
   * Generate layout from integrated row definitions
   */
  function getLayout() {
    const layoutRows = [];
    if (sectionRows["header"]) {
      layoutRows.push(createLayoutRow(sectionRows["header"]));
    }
    Object.entries(sectionRows).forEach(([key, row]) => {
      if (key !== "header") {
        layoutRows.push(createLayoutRow(row));
      }
    });
    return { rows: layoutRows };
  }

  /**
   * Helper function to convert a row definition to the layout format
   */
  function createLayoutRow(row) {
    const rowDef = { id: row.id, cells: [{}, {}] };
    const columns = [
      "c",
      "d",
      "e",
      "f",
      "g",
      "h",
      "i",
      "j",
      "k",
      "l",
      "m",
      "n",
    ];
    columns.forEach((col) => {
      const cell = row.cells?.[col] ? { ...row.cells[col] } : {};
      if (col === "c") {
        if (cell.type === "label" && cell.content && !cell.label) {
          cell.label = cell.content;
          delete cell.type;
          delete cell.content;
        } else if (!cell.label && !cell.content && row.label) {
          cell.label = row.label;
        }
      }
      delete cell.getOptions;
      delete cell.section;
      delete cell.dependencies;
      // Keep 'value' only if type is 'editable' or 'calculated' for default display
      if (
        cell.type !== "editable" &&
        cell.type !== "calculated" &&
        cell.type !== "derived"
      ) {
        delete cell.value;
      }
      rowDef.cells.push(cell);
    });
    return rowDef;
  }

  //==========================================================================
  // CALCULATIONS AND DEPENDENCIES (Keep existing calculation logic)
  //==========================================================================

  /**
   * Determine climate zone based on HDD
   */
  function determineClimateZone(hdd) {
    const numericHdd = parseFloat(hdd);
    if (isNaN(numericHdd)) return "6.0"; // Default
    if (numericHdd < 3000) return "4.0";
    if (numericHdd < 4000) return "5.0";
    if (numericHdd < 5000) return "6.0";
    if (numericHdd < 6000) return "7.1";
    if (numericHdd < 7000) return "7.2";
    return "8.0";
  }

  /**
   * Calculate Celsius to Fahrenheit conversions (Heating only now)
   */
  function calculateTemperatures() {
    const coldestC = getNumericValue("d_23");
    setCalculatedValue("e_23", (coldestC * 9) / 5 + 32, "integer-nocomma");
    const heatingC = getNumericValue("h_23");
    setCalculatedValue("i_23", (heatingC * 9) / 5 + 32, "integer-nocomma");
    const hottestC = getNumericValue("d_24");
    setCalculatedValue("e_24", (hottestC * 9) / 5 + 32, "integer-nocomma");
    updateCoolingDependents(); // Update cooling F and % too
  }

  /**
   * Calculate ground facing HDD and CDD
   */
  function calculateGroundFacing() {
    const heatingSetpoint = getNumericValue("h_23");
    const coolingDaysGFH = getNumericValue("m_19");
    const heatingDays = 365 - coolingDaysGFH;
    const gfhdd = Math.round((heatingSetpoint - 10) * heatingDays);
    setCalculatedValue("d_22", gfhdd, "integer-nocomma");

    const capacitanceSetting = getFieldValue("h_21");
    const coolingSetpoint_h24 = getNumericValue("h_24");
    const coolingDays_m19 = getNumericValue("m_19");
    let gfcdd;
    if (capacitanceSetting === "Static") {
      gfcdd = Math.max(0, (10 - coolingSetpoint_h24) * coolingDays_m19);
    } else {
      gfcdd = (10 - coolingSetpoint_h24) * coolingDays_m19;
    }
    setCalculatedValue("h_22", Math.round(gfcdd), "integer-nocomma");
  }

  /**
   * Calculate Heating Setpoint (h_23) based on Occupancy Type (d_12)
   */
  function calculateHeatingSetpoint() {
    const occupancyType = window.TEUI.StateManager?.getValue("d_12") || "";
    let heatingSetpoint = 18;
    if (occupancyType === "C-Residential" || occupancyType.includes("Care")) {
      heatingSetpoint = 22;
    }
    setCalculatedValue("h_23", heatingSetpoint, "integer-nocomma");
    return heatingSetpoint;
  }

  /**
   * Calculate Base Cooling Setpoint (h_24) based on Occupancy Type (d_12)
   */
  function calculateCoolingSetpoint_h24() {
    let coolingSetpoint = 24;
    setCalculatedValue("h_24", coolingSetpoint, "integer-nocomma");
    return coolingSetpoint;
  }

  /**
   * Determine the effective cooling setpoint considering the override
   */
  function determineEffectiveCoolingSetpoint() {
    const baseSetpoint_h24 = getNumericValue("h_24", 24);
    const override_l24 = getNumericValue("l_24", baseSetpoint_h24); // Default override to base
    return override_l24 > 20 ? override_l24 : baseSetpoint_h24;
  }

  /**
   * Update fields dependent on the effective cooling setpoint (i_24, m_24)
   */
  function updateCoolingDependents() {
    const effectiveSetpointC = determineEffectiveCoolingSetpoint();
    setCalculatedValue(
      "i_24",
      (effectiveSetpointC * 9) / 5 + 32,
      "integer-nocomma",
    );
    const m24Value = Math.round((effectiveSetpointC / 22) * 100); // Example calc
    setCalculatedValue("m_24", m24Value / 100, "percent-0dp"); // Pass raw decimal for percent formatting
  }

  /**
   * Update the critical occupancy flag display based on d_12
   */
  function updateCriticalOccupancyFlag() {
    const occupancyType = window.TEUI.StateManager?.getValue("d_12") || "";
    const sectionHeader = document.querySelector(
      "#climateCalculations .section-header",
    );
    if (!sectionHeader) return false;

    let flagSpan = sectionHeader.querySelector(
      ".critical-occupancy-header-flag",
    );
    let isCritical = occupancyType.includes("Care");

    if (isCritical) {
      if (!flagSpan) {
        flagSpan = document.createElement("span");
        flagSpan.className = "critical-occupancy-header-flag";
        flagSpan.style.color = "red";
        flagSpan.style.marginLeft = "15px";
        const statusMsg = sectionHeader.querySelector(
          ".section-status-message",
        );
        if (statusMsg && statusMsg.parentNode === sectionHeader) {
          statusMsg.parentNode.insertBefore(flagSpan, statusMsg.nextSibling);
        } else {
          sectionHeader.appendChild(flagSpan);
        }
      }
      flagSpan.textContent = "Critical Occupancy";
    } else {
      flagSpan?.remove();
    }
    sectionHeader.dataset.isCritical = isCritical;
    return isCritical;
  }

  /**
   * Main calculation function that updates all derived values
   */
  function calculateAll() {
    try {
      // ADDED: Make sure city dropdown is visible before calculations
      ensureCityDropdownVisible();

      // console.log("[S03 DEBUG] Calculating all derived values"); // Reduce noise

      // Original calculations
      calculateHeatingSetpoint();
      calculateCoolingSetpoint_h24();
      calculateTemperatures();
      calculateGroundFacing();
      updateCoolingDependents();
      updateCriticalOccupancyFlag();

      // Recalculate Climate Zone based on updated HDD
      const hdd = getNumericValue("d_20");
      const climateZone = determineClimateZone(hdd);
      setCalculatedValue("j_19", climateZone, "number-1dp");

      // Additional calculations for climate values - These seem like fallback logic now, might not be needed
      // const hdd18 = parseFloat(getFieldValue("d_20")) || 0;
      // const cdd24 = parseFloat(getFieldValue("d_21")) || 0;

      // Reference lookups (if not already set by other functions)
      // if (!getFieldValue("e_23")) {
      //     setCalculatedValue("e_23", hdd18 > 0 ? Math.round(hdd18 * 0.85) : 0, 'integer-nocomma');
      // }

      // if (!getFieldValue("e_24")) {
      //     setCalculatedValue("e_24", cdd24 > 0 ? Math.round(cdd24 * 0.75) : 0, 'integer-nocomma');
      // }

      // Calculate additional degree days if not set
      // if (!getFieldValue("d_22")) {
      //     const hdd15 = hdd18 > 0 ? Math.round(hdd18 * 0.8) : 0;
      //     setCalculatedValue("d_22", hdd15, 'integer-nocomma');
      // }

      // Calculate delta values if not set
      // const delta1 = parseFloat(getFieldValue("e_23")) || 0;
      // const delta2 = parseFloat(getFieldValue("e_24")) || 0;

      // if (!getFieldValue("i_23")) {
      //     setCalculatedValue("i_23", delta1 > 0 ? hdd18 - delta1 : 0, 'integer-nocomma');
      // }

      // if (!getFieldValue("i_24")) {
      //     setCalculatedValue("i_24", delta2 > 0 ? cdd24 - delta2 : 0, 'integer-nocomma');
      // }

      // ADDED: Final check for dropdown visibility
      ensureCityDropdownVisible();

      // console.log("[S03 DEBUG] All calculations complete"); // Reduce noise
    } catch (error) {
      console.error(`[S03 DEBUG] Error in calculateAll: ${error.message}`);
    }
  }

  //==========================================================================
  // EVENT HANDLING AND INITIALIZATION (Modified)
  //==========================================================================

  /**
   * Handle province selection change - MODIFIED FOR ClimateData & Local List
   */
  function handleProvinceChange(e) {
    const provinceValue =
      e?.target?.value || (typeof e === "string" ? e : null);
    console.log(
      `[S03 DEBUG] handleProvinceChange triggered. Province: ${provinceValue}`,
    );

    // >>> DIAGNOSTIC: Check city dropdown BEFORE state update <<<
    let cityDropdownBefore = document.querySelector(
      '[data-dropdown-id="dd_h_19"]',
    );
    console.log(
      `[S03 TRACE] BEFORE StateManager.setValue('d_19'). City dropdown exists? ${!!cityDropdownBefore}`,
    );
    // >>> END DIAGNOSTIC <<<

    if (!provinceValue) {
      resetClimateFields();
      const cityDropdown = document.querySelector(
        '[data-dropdown-id="dd_h_19"]',
      );
      if (cityDropdown) {
        cityDropdown.innerHTML = '<option value="">Select City</option>';
        cityDropdown.disabled = true;
      }
      // Update StateManager even if province is empty
      if (window.TEUI?.StateManager) {
        window.TEUI.StateManager.setValue("d_19", "", "user-modified");
      }
      return;
    }

    // 1. Update StateManager for the selected province
    if (window.TEUI?.StateManager) {
      window.TEUI.StateManager.setValue("d_19", provinceValue, "user-modified");
    }

    // 2. Get cities directly from our local map
    const cities = provinceCityMap[provinceValue] || [];
    console.log(
      `[S03 DEBUG] Cities found locally for ${provinceValue}:`,
      cities,
    );

    // 3. Find the city dropdown element
    const cityDropdown = document.querySelector('[data-dropdown-id="dd_h_19"]');
    if (!cityDropdown) {
      console.error(
        "[S03 DEBUG] City dropdown element not found! Cannot populate cities.",
      );
      return; // Stop if element doesn't exist
    }

    // IMPORTANT FIX: Keep a reference to the parent container
    const dropdownContainer = cityDropdown.parentElement;

    // 4. Clear existing options (more carefully)
    while (cityDropdown.options.length > 0) {
      // Clear ALL options
      cityDropdown.remove(0);
    }

    // 5. Add placeholder option
    const placeholderOption = document.createElement("option");
    placeholderOption.value = "";
    placeholderOption.textContent = "Select City";
    cityDropdown.appendChild(placeholderOption);

    // 6. Populate with new cities
    if (cities.length > 0) {
      cities.forEach((cityName) => {
        const option = document.createElement("option");
        option.value = cityName;
        option.textContent = cityName;
        cityDropdown.appendChild(option);
      });

      cityDropdown.disabled = false;

      // 7. Select default city (Alexandria for ON, else first)
      const defaultCity = "Alexandria"; // Target default
      let cityToSelect = cities[0]; // Fallback to first
      if (provinceValue === "ON" && cities.includes(defaultCity)) {
        cityToSelect = defaultCity;
      }
      console.log(`[S03 DEBUG] Default city visual selection: ${cityToSelect}`);

      // Set dropdown visual state
      cityDropdown.value = cityToSelect;

      // 8. IMPORTANT: DO NOT set h_19 in StateManager here.
      // Let handleCityChange do that when the user interacts or if we explicitly call it.

      // 9. Trigger initial weather data load *only* if a default city was successfully set.
      if (cityToSelect) {
        console.log(
          "[S03 DEBUG] Triggering initial updateWeatherData after setting default city.",
        );
        updateWeatherData(); // Load data for the default selection
      }
    } else {
      console.warn(
        `[S03 DEBUG] No cities found locally for province: ${provinceValue}`,
      );
      cityDropdown.disabled = true;
      resetClimateFields(); // Reset if no cities
    }

    // 10. Final visibility check
    ensureCityDropdownVisible();
    setTimeout(ensureCityDropdownVisible, 100); // And again after a short delay

    // >>> DIAGNOSTIC: Check city dropdown AFTER state update <<<
    let cityDropdownAfter = document.querySelector(
      '[data-dropdown-id="dd_h_19"]',
    );
    console.log(
      `[S03 TRACE] AFTER StateManager.setValue('d_19'). City dropdown exists? ${!!cityDropdownAfter}`,
    );
    // >>> END DIAGNOSTIC <<<
  }

  /**
   * Update weather data based on selected city/province - MODIFIED FOR ClimateData
   */
  function updateWeatherData() {
    const provinceValue = getFieldValue("d_19");
    const cityValue = getFieldValue("h_19"); // This should now reflect the visual selection
    const isFuture = getFieldValue("h_20") === "Future";

    // console.log(`[S03 DEBUG] updateWeatherData called. Province: ${provinceValue}, City: ${cityValue}, Future: ${isFuture}`); // Reduce noise

    // Always ensure our dropdown is visible
    ensureCityDropdownVisible();

    if (!provinceValue || !cityValue) {
      // console.warn(`[S03 DEBUG] Missing province or city values. Province: ${provinceValue}, City: ${cityValue}`); // Reduce noise
      resetClimateFields(); // Reset if data not found
      return;
    }

    // Check if ClimateData is available, and if not, retry after a short delay
    if (
      !window.TEUI?.ClimateData ||
      Object.keys(window.TEUI.ClimateData).length === 0
    ) {
      console.warn(
        "[S03 DEBUG] Climate data not yet initialized when updateWeatherData was called. Retrying in 500ms.",
      );
      setTimeout(updateWeatherData, 500);
      return;
    }

    // Check if province data exists
    if (!window.TEUI.ClimateData[provinceValue]) {
      console.error(
        `[S03 DEBUG] No climate data found for province: ${provinceValue}`,
      );
      resetClimateFields();
      return;
    }

    // Check if city data exists
    if (!window.TEUI.ClimateData[provinceValue][cityValue]) {
      console.error(
        `[S03 DEBUG] No climate data found for city: ${cityValue} in province: ${provinceValue}`,
      );
      resetClimateFields();
      return;
    }

    // Get city data from ClimateValues.js
    const cityData = window.TEUI.ClimateData[provinceValue][cityValue];

    // Check if we have all the required fields
    const requiredKeys = [
      "HDD18",
      "HDD18_2021_2050",
      "CDD24",
      "CDD24_2021_2050",
      "Elev ASL (m)",
      "January_1",
      "January_2_5",
      "July_2_5_Tdb",
      "Future_July_2_5_Tdb",
    ];

    let missingKey = false;
    for (const key of requiredKeys) {
      if (cityData[key] === undefined || cityData[key] === null) {
        console.warn(
          `[S03 DEBUG] Missing data key "${key}" for ${cityValue}, ${provinceValue}`,
        );
        // Don't mark as missing if placeholder 666 is used
        if (cityData[key] !== 666) {
          missingKey = true;
        }
      }
    }
    if (missingKey) {
      // Optionally reset fields or show error if critical data missing
      // resetClimateFields();
      // return;
    }

    // console.log(`[S03 DEBUG] Retrieved city data for ${cityValue}, ${provinceValue}`, cityData); // Reduce noise

    const isCritical = updateCriticalOccupancyFlag(); // Check criticality

    try {
      // Update derived climate data fields using keys from ClimateData
      // Use getNumericValue with default 0 for safety, though keys should exist now
      setCalculatedValue(
        "d_20",
        isFuture
          ? getNumericValue(cityData.HDD18_2021_2050, 0)
          : getNumericValue(cityData.HDD18, 0),
        "integer-nocomma",
      );

      setCalculatedValue(
        "d_21",
        isFuture
          ? getNumericValue(cityData.CDD24_2021_2050, 0)
          : getNumericValue(cityData.CDD24, 0),
        "integer-nocomma",
      );

      setCalculatedValue(
        "l_22",
        getNumericValue(cityData["Elev ASL (m)"], 0),
        "integer-nocomma",
      );

      // Select temp based on criticality
      const coldestTemp = isCritical
        ? getNumericValue(cityData.January_1, 0)
        : getNumericValue(cityData.January_2_5, 0);
      setCalculatedValue("d_23", coldestTemp, "integer-nocomma");

      // Select hottest temp (use future if selected, otherwise present)
      const hottestTemp = isFuture
        ? getNumericValue(cityData.Future_July_2_5_Tdb, 0)
        : getNumericValue(cityData.July_2_5_Tdb, 0);
      setCalculatedValue("d_24", hottestTemp, "integer-nocomma");

      // Reference lookups for Energy Star (using present data as ref)
      setCalculatedValue(
        "j_20",
        getNumericValue(cityData.HDD18, 0),
        "integer-nocomma",
      );
      setCalculatedValue(
        "j_21",
        getNumericValue(cityData.CDD24, 0),
        "integer-nocomma",
      );

      // console.log("[S03 DEBUG] Climate data successfully applied"); // Reduce noise

      // Do a final check to ensure the dropdown is still visible
      ensureCityDropdownVisible();

      calculateAll(); // Recalculate dependent fields
    } catch (error) {
      console.error(
        `[S03 DEBUG] Error updating weather data: ${error.message}`,
      );
      resetClimateFields();
    }
  }

  /**
   * Reset climate fields when no city is selected or data is missing
   */
  function resetClimateFields() {
    // console.log("[S03 DEBUG] Resetting climate fields"); // Reduce noise

    const fieldsToReset = [
      "d_20",
      "d_21",
      "l_22",
      "d_23",
      "d_24",
      "e_23",
      "e_24",
      "j_19",
      "d_22",
      "h_22",
      "i_23",
      "i_24",
      "m_23",
      "m_24",
      "j_20",
      "j_21",
    ];

    fieldsToReset.forEach((fieldId) => {
      // Reset to 0 or appropriate default
      setCalculatedValue(fieldId, 0, "integer-nocomma");
    });

    // Maintain user-editable fields unless they should be reset too
    // Example: reset l_24 only if needed
    // if (getFieldValue("l_24") === null) { // Check if it needs reset
    //    setCalculatedValue("l_24", 24, 'integer-nocomma');
    // }
    // Reset m_19 if needed
    // if (getFieldValue("m_19") === null) {
    //     setCalculatedValue("m_19", 120, 'integer-nocomma');
    // }

    // Remove critical occupancy flag if present
    const sectionHeader = document.querySelector(
      "#climateCalculations .section-header",
    );
    if (sectionHeader) {
      const flagSpan = sectionHeader.querySelector(
        ".critical-occupancy-header-flag",
      );
      flagSpan?.remove();
      sectionHeader.dataset.isCritical = "false";
    }
  }

  /**
   * Display weather data in modal - RESTORED AND MODIFIED FOR ClimateData
   */
  function showWeatherData() {
    const provinceValue = getFieldValue("d_19");
    const cityValue = getFieldValue("h_19");

    if (!provinceValue || !cityValue) {
      alert("Please select a province and city first.");
      return;
    }

    // Get city data from the new structure
    const cityData = window.TEUI.ClimateData?.[provinceValue]?.[cityValue];

    if (!cityData) {
      alert(`Climate data not found for ${cityValue}, ${provinceValue}`);
      return;
    }

    // Set modal title and content
    const modalTitle = document.getElementById("weatherDataModalLabel");
    const modalContent = document.getElementById("weatherDataContent");

    if (modalTitle)
      modalTitle.textContent = `Weather Data for ${cityValue}, ${provinceValue}`;
    if (modalContent) {
      // Format the data nicely for the modal
      let formattedContent = "<pre>"; // Use pre for better formatting
      for (const [key, value] of Object.entries(cityData)) {
        formattedContent += `${key.padEnd(40)}: ${value}\n`; // Pad keys for alignment
      }
      formattedContent += "</pre>";
      modalContent.innerHTML = formattedContent; // Use innerHTML for pre tag
    }

    // Show modal using Bootstrap API
    const modalElement = document.getElementById("weatherDataModal");
    if (modalElement) {
      const modal =
        bootstrap.Modal.getInstance(modalElement) ||
        new bootstrap.Modal(modalElement);
      modal.show();
    }
  }

  /**
   * Initialize event handlers for this section - Uses Event Delegation
   */
  function initializeEventHandlers() {
    const sectionElement = document.getElementById("climateCalculations");
    if (!sectionElement) {
      console.error(
        "[S03 DEBUG] Section element 'climateCalculations' not found!",
      );
      return;
    }

    // Remove previous direct listeners if they somehow still exist (belt-and-suspenders)
    const provinceDropdownOld = sectionElement.querySelector(
      '[data-dropdown-id="dd_d_19"]',
    );
    if (provinceDropdownOld)
      provinceDropdownOld.removeEventListener(
        "change",
        window.TEUI.sect03.handleProvinceChange,
      );
    const cityDropdownOld = sectionElement.querySelector(
      '[data-dropdown-id="dd_h_19"]',
    );
    if (cityDropdownOld)
      cityDropdownOld.removeEventListener(
        "change",
        window.TEUI.sect03.handleCityChange,
      );
    const timeframeDropdownOld = sectionElement.querySelector(
      '[data-dropdown-id="dd_h_20"]',
    );
    if (timeframeDropdownOld)
      timeframeDropdownOld.removeEventListener(
        "change",
        window.TEUI.sect03.handleTimeframeChange,
      );
    // Note: We don't have a global handleCriticalChange exposed, so we don't remove it here

    // --- EVENT DELEGATION ---
    // Add ONE listener to the section container
    if (!sectionElement.hasS03DelegatedListener) {
      // Prevent adding multiple container listeners
      sectionElement.addEventListener("change", function (event) {
        const target = event.target;
        const dropdownId = target.getAttribute("data-dropdown-id");
        const fieldId = target.getAttribute("data-field-id");

        // Delegate based on the dropdown ID
        if (dropdownId === "dd_d_19") {
          // console.log("[S03 Delegated] Province change detected"); // Reduce noise
          // >>> ADDED DIAGNOSTIC LOG <<<
          console.log(
            "[S03 Delegated] Change listener fired for dd_d_19. Checking for city dropdown NOW...",
          );
          // >>> END DIAGNOSTIC LOG <<<
          const cityDropdownExists = !!document.querySelector(
            '[data-dropdown-id="dd_h_19"]',
          );
          // console.log(`[S03 Delegated] Just before calling handleProvinceChange. City dropdown exists? ${cityDropdownExists}`); // Reduce noise
          if (typeof window.TEUI.sect03.handleProvinceChange === "function") {
            // Pass the event object itself, the handler can get the value
            window.TEUI.sect03.handleProvinceChange(event);
          } else {
            console.error(
              "[S03 Delegated] handleProvinceChange function not found!",
            );
          }
        } else if (dropdownId === "dd_h_19") {
          // console.log("[S03 Delegated] City change detected"); // Reduce noise
          if (typeof window.TEUI.sect03.handleCityChange === "function") {
            // Pass the event object itself
            window.TEUI.sect03.handleCityChange(event);
          } else {
            console.error(
              "[S03 Delegated] handleCityChange function not found!",
            );
          }
        } else if (dropdownId === "dd_h_20") {
          // console.log("[S03 Delegated] Timeframe change detected"); // Reduce noise
          if (typeof window.TEUI.sect03.handleTimeframeChange === "function") {
            // Pass the event object itself
            window.TEUI.sect03.handleTimeframeChange(event);
          } else {
            console.error(
              "[S03 Delegated] handleTimeframeChange function not found!",
            );
          }
        } else if (fieldId === "l_23") {
          // Checkbox field ID
          // console.log("[S03 Delegated] Criticality change detected"); // Reduce noise
          if (typeof window.TEUI.sect03.handleCriticalChange === "function") {
            // Pass the event object itself
            window.TEUI.sect03.handleCriticalChange(event);
          } else {
            console.error(
              "[S03 Delegated] handleCriticalChange function not found!",
            );
          }
        }
      });
      sectionElement.hasS03DelegatedListener = true;
      console.log(
        "[S03 DEBUG] Delegated change listener attached to #climateCalculations",
      );
    } else {
      // console.log("[S03 DEBUG] Delegated listener already attached to #climateCalculations."); // Reduce noise
    }
    // --- END EVENT DELEGATION ---

    // Add handlers for editable fields (m_19, l_24) - Keep these direct
    const editableFields = sectionElement.querySelectorAll(
      ".editable.user-input",
    );
    editableFields.forEach((field) => {
      if (!field.hasEditableListeners) {
        field.setAttribute("contenteditable", "true");
        field.addEventListener("blur", handleEditableBlur);
        field.addEventListener("keydown", function (e) {
          if (e.key === "Enter") {
            e.preventDefault();
            e.stopPropagation();
            this.blur();
          }
        });
        field.addEventListener("focus", () => field.classList.add("editing"));
        field.addEventListener("focusout", () =>
          field.classList.remove("editing"),
        );
        field.hasEditableListeners = true;
      }
    });

    // StateManager Listeners (mostly unchanged, but ensure calculateAll covers dependencies)
    if (window.TEUI && window.TEUI.StateManager) {
      const sm = window.TEUI.StateManager;
      // REMOVE existing listeners before adding new ones to prevent duplicates if this runs multiple times
      // (Ideally it shouldn't, but this adds robustness)
      // Note: StateManager doesn't have removeListenerAll for a key, requires tracking callbacks
      // For simplicity, we assume the listeners added here are idempotent or managed by StateManager internally
      // If issues persist, explicit listener removal might be needed.
      sm.addListener("d_12", calculateAll); // Occupancy affects setpoints
      sm.addListener("h_24", calculateAll); // Base Cooling Setpoint
      sm.addListener("l_24", calculateAll); // Cooling Override
      sm.addListener("d_20", calculateAll); // HDD affects Zone & GF HDD
      sm.addListener("h_21", calculateAll); // Capacitance affects GF CDD
      sm.addListener("m_19", calculateAll); // Cooling Days affects GF HDD/CDD
    }

    // Initialize weather data modal (NOW CALLABLE)
    initializeWeatherDataModal();

    console.log("[S03 DEBUG] Event handlers initialized");
  }

  /**
   * Handle City dropdown change - MODIFIED FOR ClimateData
   */
  function handleCityChange(e) {
    const cityValue = e?.target?.value;
    // console.log(`[S03 DEBUG] handleCityChange triggered. City: ${cityValue}`); // Reduce noise

    // Ensure the dropdown is still visible
    ensureCityDropdownVisible();

    if (!cityValue) {
      resetClimateFields();
      return;
    }

    // 1. NOW update StateManager for the user's selected city
    if (window.TEUI?.StateManager) {
      window.TEUI.StateManager.setValue("h_19", cityValue, "user-modified");
    }

    // 2. Trigger weather data update for the selected city
    updateWeatherData();

    // Final check to ensure dropdown remains visible
    setTimeout(ensureCityDropdownVisible, 100);
  }

  /**
   * Handle blur events on editable fields - Copied from S09, adjusted slightly
   */
  function handleEditableBlur(event) {
    const fieldId = this.getAttribute("data-field-id");
    if (!fieldId) return;

    if (this.getAttribute("contenteditable") === "true") {
      const newValueStr = this.textContent.trim();
      const numericValue = window.TEUI.parseNumeric(newValueStr, NaN); // Parse the NEW text

      // Store the parsed value (or default 0) in StateManager
      const valueToStore = isNaN(numericValue) ? "0" : numericValue.toString();
      if (window.TEUI?.StateManager?.setValue) {
        window.TEUI.StateManager.setValue(
          fieldId,
          valueToStore,
          "user-modified",
        );
      }

      // Format the display using the NEW parsed value
      const formatType =
        fieldId === "m_19" ||
        fieldId === "l_22" ||
        fieldId === "d_23" ||
        fieldId === "d_24" ||
        fieldId === "e_23" ||
        fieldId === "e_24" ||
        fieldId === "h_23" ||
        fieldId === "i_23"
          ? "integer-nocomma"
          : "number-2dp";
      this.textContent = window.TEUI.formatNumber(
        isNaN(numericValue) ? 0 : numericValue,
        formatType,
      );

      // Recalculate (will use updated StateManager value)
      calculateAll();
    }
  }

  /**
   * Handle timeframe (Present/Future) dropdown change
   */
  function handleTimeframeChange(e) {
    // console.log(`[S03 DEBUG] Timeframe changed to: ${e.target.value}`); // Reduce noise

    // Update the weather data based on the changed timeframe
    updateWeatherData();
  }

  /**
   * Handle critical occupancy checkbox change
   */
  function handleCriticalChange(e) {
    const isChecked = e.target.checked;
    // console.log(`[S03 DEBUG] Critical occupancy changed to: ${isChecked}`); // Reduce noise

    // Update state manager
    if (window.TEUI?.StateManager) {
      window.TEUI.StateManager.setValue(
        "l_23",
        isChecked ? "true" : "false",
        "user-modified",
      );
    }

    // Update values that depend on criticality
    updateWeatherData();
  }

  /**
   * Called when the section is rendered in the DOM
   * This is the entry point for section initialization
   */
  function onSectionRendered() {
    // console.log("[S03 DEBUG] Section03 onSectionRendered called"); // Reduce noise

    // Ensure city dropdown visibility immediately
    ensureCityDropdownVisible();

    if (!window.TEUI.sect03.initialized) {
      console.log("[S03 DEBUG] First-time initialization");

      // Initialize event handlers
      initializeEventHandlers();

      // Set up dropdown monitoring with MutationObserver
      setupDropdownMonitoring();

      // Populate local city map ONLY ONCE during first init
      if (window.TEUI?.ClimateData) {
        provinceCityMap = {}; // Clear first
        for (const provinceKey in window.TEUI.ClimateData) {
          if (window.TEUI.ClimateData.hasOwnProperty(provinceKey)) {
            provinceCityMap[provinceKey] = Object.keys(
              window.TEUI.ClimateData[provinceKey],
            ).sort();
          }
        }
        console.log(
          "[S03 DEBUG] Local provinceCityMap populated:",
          Object.keys(provinceCityMap),
        );
      } else {
        console.error(
          "[S03 DEBUG] Cannot populate local city map - ClimateData not found.",
        );
      }

      // Initialize province/city values
      const storedProvince = window.TEUI?.StateManager?.getValue("d_19");
      if (storedProvince) {
        // Use stored value if available
        const provinceDropdown = document.querySelector(
          '[data-dropdown-id="dd_d_19"]',
        );
        if (provinceDropdown) {
          provinceDropdown.value = storedProvince;
          // Use setTimeout to ensure DOM update before triggering handler
          setTimeout(
            () => window.TEUI.sect03.handleProvinceChange(storedProvince),
            0,
          );
        }
      } else {
        // Use default (Ontario)
        const provinceDropdown = document.querySelector(
          '[data-dropdown-id="dd_d_19"]',
        );
        if (provinceDropdown) {
          provinceDropdown.value = "ON";
          // Use setTimeout to ensure DOM update before triggering handler
          setTimeout(() => window.TEUI.sect03.handleProvinceChange("ON"), 0);
        } else {
          resetClimateFields();
        }
      }

      // Mark as initialized
      window.TEUI.sect03.initialized = true;
    } else {
      // console.log("[S03 DEBUG] Re-initialization - section already initialized"); // Reduce noise

      // Just ensure important elements are visible
      ensureCityDropdownVisible();

      // Check if our observer is still active, if not restart it
      if (
        !window.TEUI.sect03.dropdownObserver ||
        typeof window.TEUI.sect03.dropdownObserver.disconnect !== "function"
      ) {
        console.log("[S03 DEBUG] Restarting dropdown monitoring");
        setupDropdownMonitoring();
      }
    }
  }

  /**
   * Sets up a persistent monitoring solution to ensure the city dropdown remains visible
   */
  function setupDropdownMonitoring() {
    // console.log("[S03 DEBUG] Setting up dropdown monitoring"); // Reduce noise

    // Use MutationObserver to watch for DOM changes that might affect our dropdown
    if (window.MutationObserver) {
      // Target the container that wraps the climate section
      const sectionElement = document.getElementById("climateCalculations");
      if (!sectionElement) {
        console.error(
          "[S03 DEBUG] Climate calculations section element not found for monitoring",
        );
        return;
      }

      // Create observer instance
      const observer = new MutationObserver(function (mutations) {
        mutations.forEach(function (mutation) {
          // If nodes were added or removed or attributes changed
          if (mutation.type === "childList" || mutation.type === "attributes") {
            // Check our dropdown
            const cityDropdown = document.querySelector(
              '[data-dropdown-id="dd_h_19"]',
            );
            if (cityDropdown) {
              // If dropdown exists but might be hidden, make it visible
              if (
                cityDropdown.parentElement &&
                (cityDropdown.parentElement.style.display === "none" ||
                  cityDropdown.style.display === "none")
              ) {
                console.log(
                  "[S03 DEBUG] DOM mutation observer detected hidden dropdown, restoring",
                );
                ensureCityDropdownVisible();
              }
            }
          }
        });
      });

      // Observer configuration: watch for attribute changes and child changes
      const config = {
        attributes: true,
        childList: true,
        subtree: true,
        attributeFilter: ["style", "class"],
      };

      // Start observing
      observer.observe(sectionElement, config);
      // console.log("[S03 DEBUG] DOM mutation observer started"); // Reduce noise

      // Store the observer in the sect03 namespace so it persists
      window.TEUI.sect03.dropdownObserver = observer;
    } else {
      // Fallback for browsers without MutationObserver
      console.warn(
        "[S03 DEBUG] MutationObserver not supported, using polling instead",
      );

      // Use polling as a fallback
      const intervalId = setInterval(ensureCityDropdownVisible, 1000);
      window.TEUI.sect03.dropdownMonitorInterval = intervalId;
    }
  }

  //==========================================================================
  // PUBLIC API
  //==========================================================================

  // Export module functions
  const publicModule = {
    getFields: getFields,
    getDropdownOptions: getDropdownOptions,
    getLayout: getLayout,
    initializeEventHandlers: initializeEventHandlers,
    onSectionRendered: onSectionRendered,
    calculateAll: calculateAll,
    handleProvinceChange: handleProvinceChange,
    updateWeatherData: updateWeatherData,
    showWeatherData: showWeatherData,
    resetClimateFields: resetClimateFields,
    ensureCityDropdownVisible: ensureCityDropdownVisible,
    getFieldValue: getFieldValue,
    setCalculatedValue: setCalculatedValue,
    // We are letting the application lifecycle handle initialization via onSectionRendered
    // No separate init needed here.
  };

  // CRITICAL FIX: Expose important functions to the global TEUI.sect03 namespace
  // This makes them accessible for event handlers outside the IIFE
  window.TEUI.sect03.handleProvinceChange = handleProvinceChange;
  window.TEUI.sect03.handleCityChange = handleCityChange;
  window.TEUI.sect03.handleTimeframeChange = handleTimeframeChange;
  window.TEUI.sect03.handleCriticalChange = handleCriticalChange;
  window.TEUI.sect03.updateWeatherData = updateWeatherData;
  window.TEUI.sect03.showWeatherData = showWeatherData;
  window.TEUI.sect03.calculateAll = calculateAll;
  window.TEUI.sect03.ensureCityDropdownVisible = ensureCityDropdownVisible;

  return publicModule;
})(); // Correct closing for the main module IIFE

/**
 * DIAGNOSTIC FUNCTION - Called when changing provinces to check city dropdown
 */
window.TEUI.sect03.diagnoseDropdownIssue = function () {
  // ... (Existing logic) ...
};
