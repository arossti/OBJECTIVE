/**
 * 4011-TooltipManager.js
 * Manages validation tooltips from Excel for TEUI Calculator fields
 *
 * Tooltip data extracted from TEUIv3042.xlsx REPORT sheet Data Validation
 * Last updated: Oct 8, 2025
 * Source: extract-validation.py script
 */

(function (window) {
  "use strict";

  // Validation tooltip data (extracted from Excel Data Validation input messages)
  const VALIDATION_TOOLTIPS = {
    "d_12": {
      "cell": "D12",
      "title": "Major Occupancy",
      "message": "Select a Major Occupancy from the Drop-Down_x000a_Affects: Tset Heating and Equipment Loads"
    },
    "d_13": {
      "cell": "D13",
      "title": "Reference Standards",
      "message": "Select a Building Code Prescriptive Path option, or NECB Base Tier, or any other noted or 'Use Your Own' baseline scenario. References values in the 'CODE VALUES' tab."
    },
    "d_14": {
      "cell": "D14",
      "title": "Select a Method",
      "message": "Targeted Use: All Design Phases_x000a_Utility Bills: Read from Meters, 12mos. Post-Occupancy"
    },
    "d_15": {
      "cell": "D15",
      "title": "Carbon Benchmark",
      "message": "Enter relevant standard otherwise 'Self Reported'. If no A1-3 Embodied carbon has been calculated using another tool, select 'Not Reported' to use default values (Upset Limits from TGS4)"
    },
    "h_12": {
      "cell": "H12",
      "title": "Year Data Entered",
      "message": "Select a Reporting Period. This will determine Annualized Emissions Factors and Forecasted Factors per the Toronto Atmospheric Fund. "
    },
    "h_13": {
      "cell": "H13",
      "title": "Select a period in Years",
      "message": "Period related to durability level of building. 30 = Stick Frame Residential. 50 = ICI buildings. 80 = Long-life buildings and 100 = legacy class buildings (Historic, Monumental, etc). Larger number = larger denominator for Lifetime Carbon. "
    },
    "h_14": {
      "cell": "H14",
      "title": "Project Name",
      "message": "You may anonymize any owner info here. Use a project number or location or secret code name. Useful also for naming variations of your OBJECTIVE models ie. Run 1, 2, 3, etc."
    },
    "h_15": {
      "cell": "H15",
      "title": "Net Conditioned Area",
      "message": "Net Conditioned Area is measured from the interior face of any construction assembly that separates the exterior interior conditioned volume from the exterior air or ground surfaces, this is required for consistency of all other area and volume calculatio"
    },
    "i_16": {
      "cell": "H16",
      "title": "Certifier",
      "message": "The name of the entity that holds a Certificate of Practice if Architect, or the Certificate of Authourization if Engineer. If the firm is a BCIN firm, enter the name of that entity. This is a prerequisite to be considered a 'Certifier' by OpenBuilding"
    },
    "i_17": {
      "cell": "H17",
      "title": "License or Authorization",
      "message": "Enter here the OAA CofP Number, or PEO issued Cert. of Auth here, or if BCIN the BCIN No. "
    },
    "l_12": {
      "cell": "L12",
      "title": "Assume $0.13/kwh",
      "message": "Delivery Charges, Debt Retirement, Rebates, TOU rates and Taxes May Vary. Enter Gross Value to closer approximate complete Utility Bill Costs"
    },
    "l_13": {
      "cell": "L13",
      "title": "Assume $0.507 (Ontario)",
      "message": "Adjust for Different Regions, be sure to add any fees, charges, tax & delivery to totals. "
    },
    "l_14": {
      "cell": "L14",
      "title": "Assume $1.62 (Ontario)",
      "message": "Adjust for Different Regions, be sure to add any fees, charges, tax & delivery to totals. "
    },
    "l_15": {
      "cell": "L15",
      "title": "Assume $180/m3 (Ontario)",
      "message": "Adjust for Different Regions, be sure to add any tax & delivery to totals. "
    },
    "l_16": {
      "cell": "L16",
      "title": "Assume $1.50 (Ontario)",
      "message": "Adjust for Different Regions, be sure to add any charges, fees, tax & delivery to totals. "
    },
    "d_16": {
      "cell": "D16",
      "title": "S4. Targets",
      "message": "IPCC AR6 EPC = Equal PerCapita method to limit to 1.5°C_x000a_IPCC AR6 EA = Equity-Adjusted method to limit to 1.5°C_x000a_(refer to Worksheet S.3 Carbon Standards)"
    },
    "d_19": {
      "cell": "D19",
      "title": "Select a Province",
      "message": "Enter the 2-digit Province abbreviation"
    },
    "h_19": {
      "cell": "H19",
      "title": "Municpality",
      "message": "Select a Muncipality from the Drop-Down"
    },
    "h_20": {
      "cell": "H20",
      "title": "Weather Data Range",
      "message": "Present: Historical to Current Values Used (2025)_x000a_Future: 2021-2050 Projected Values Used"
    },
    "h_21": {
      "cell": "H21",
      "title": "Select Calculation Method",
      "message": "Static: Conventional Thermal Transfer_x000a_Capacitance: Simulates Thermal Mass Transfer & Storage Characteristics (uses G.4.2) - 50% assumes equilibrium reached_x000a__x000a_Capacitance only if sub-grade surfaces form part of conditioned volume"
    },
    "i_21": {
      "cell": "I21",
      "title": "Capacitance Factor",
      "message": "Fakes a value (0-50% max.) for ground-facing elements, that absorb some excess thermal energy. Cooling season is short in Canada and mass-y elements eventually reach equilibrium/steady-state. Enter 0% when subgrade elements are not part of conditioned vol"
    },
    "m_19": {
      "cell": "M19",
      "title": "Cooling Days are Increasing",
      "message": "120 is Typical in Canada, but with warming climate, this can add 20-40 days. This will affect both cooling setpoints and occupant schedules. "
    },
    "d_27": {
      "cell": "D27",
      "title": "Electricity",
      "message": "Enter a number here only if you have Utility Bill data. If none are yet available, be sure to select 'S.2 Targeted Use' mode. "
    },
    "d_28": {
      "cell": "D28",
      "title": "Gas",
      "message": "Enter a number here only if you have Utility Bill data. If none are yet available, be sure to select 'S.2 Targeted Use' mode. "
    },
    "d_29": {
      "cell": "D29",
      "title": "Propane",
      "message": "Enter a number here only if you have Utility Bill data. If none are yet available, be sure to select 'S.2 Targeted Use' mode. "
    },
    "d_30": {
      "cell": "D30",
      "title": "Oil ",
      "message": "Enter a number here only if you have Utility Bill data. If none are yet available, be sure to select 'S.2 Targeted Use' mode. "
    },
    "d_31": {
      "cell": "D31",
      "title": "Wood",
      "message": "Enter a number here only if you have Utility Bill data. If none are yet available, be sure to select 'S.2 Targeted Use' mode. "
    },
    "h_35": {
      "cell": "H35",
      "title": "PER Factors",
      "message": "For 100% electric buildings in Canada, PHPP adds a PER of 1.5. 1.0 represents Site Energy or Site EUI. We would recommend entry of 1.0 UNLESS you are comparing your model to PHPP-generated results for side-by-side comparison."
    },
    "d_39": {
      "cell": "D39",
      "title": "Building Typology",
      "message": "Select a Building Typology_x000a_Or select 'Modelled Value' if you have calclated it with external software. "
    },
    "i_41": {
      "cell": "I41",
      "title": "Externally Defined Value",
      "message": "ONLY Select this option if Embodied Carbon must be calculated using an external tool. otherwise a guidance value will be calculated from the Building Construction Typology selected to the left. "
    },
    "m_43": {
      "cell": "M43",
      "title": "Default is 0",
      "message": "Only enter if planned outdoor loads are known, ie. Exterior Lighting, Pumps, Heat-Tracing, Snow-Melting, etc. "
    },
    "d_49": {
      "cell": "D49",
      "title": "DHW/SHW Use Method (lpppd)",
      "message": "PHPP Method: 62.5 Total, 25 DHW_x000a_NBC Method: 225 Total, 88 DHW_x000a_OBC Method: 275 Total, 110 DHW_x000a_Luxury: 400 Total, 160 DHW_x000a__x000a_By Engineer: Uses kWh value calculated externally"
    },
    "e_49": {
      "cell": "E49",
      "title": "Litres/Per-Person/Day",
      "message": "Enter a value for Total Water Per Day. If you are trying to match values from a water meter, divide the meter value by 365 and then again by #Occupants. "
    },
    "e_50": {
      "cell": "E50",
      "title": "Occupancy-Dependent Calculation",
      "message": "If non-Residential Occupancy Selected, this number will be used"
    },
    "d_51": {
      "cell": "D51",
      "title": "DHW/SHW Heating Source",
      "message": "Select DHW Energy Source"
    },
    "d_52": {
      "cell": "D52",
      "title": "If Heatpump Selected",
      "message": "EF can be greater than 100%, ie. COP 1.5 = 150%"
    },
    "d_53": {
      "cell": "D53",
      "title": "Range of DWHR Efficiency",
      "message": "0-75%, with 40% a common Residential Unit Efficiency"
    },
    "d_54": {
      "cell": "D54",
      "title": "Enter Percapita Metered Use",
      "message": "Assume 220 litres/pp/day per NBC 9.36. Assume 40% of this is DHW or 88 litres/pp/day DHW. "
    }
  };

  class TooltipManager {
    constructor() {
      this.tooltips = VALIDATION_TOOLTIPS;
      this.initialized = true;
      console.log(`✅ [TooltipManager] Loaded ${Object.keys(this.tooltips).length} validation tooltips`);
    }

    /**
     * Get tooltip data for a specific field
     * @param {string} fieldId - Field ID (e.g., "d_12", "h_14")
     * @returns {object|null} Tooltip data or null if not found
     */
    getTooltip(fieldId) {
      return this.tooltips?.[fieldId] || null;
    }

    /**
     * Apply tooltip to an HTML element
     * @param {HTMLElement} element - The input/select/button element
     * @param {string} fieldId - Field ID to look up tooltip
     * @param {object|boolean} config - True to use JSON data, or custom tooltip object
     */
    applyTooltip(element, fieldId, config = true) {
      if (!element) {
        console.warn(`[TooltipManager] No element provided for field: ${fieldId}`);
        return;
      }

      let tooltipData;

      // Use custom tooltip or load from JSON
      if (config === true) {
        tooltipData = this.getTooltip(fieldId);
      } else if (typeof config === 'object' && config !== null) {
        tooltipData = config;
      }

      if (!tooltipData) {
        console.log(`[TooltipManager] No tooltip data for field: ${fieldId}`);
        return;
      }

      // Clean Excel newlines (_x000a_ → <br>)
      const cleanMessage = (tooltipData.message || '')
        .replace(/_x000a_/g, '<br>')
        .trim();

      if (!cleanMessage) {
        console.warn(`[TooltipManager] Empty tooltip message for field: ${fieldId}`);
        return;
      }

      // Apply Bootstrap popover attributes
      element.setAttribute('data-bs-toggle', 'popover');
      element.setAttribute('data-bs-trigger', 'hover focus');
      element.setAttribute('data-bs-placement', 'top');
      element.setAttribute('data-bs-html', 'true');
      element.setAttribute('data-bs-title', tooltipData.title || 'Info');
      element.setAttribute('data-bs-content', cleanMessage);

      // Initialize Bootstrap popover
      try {
        new bootstrap.Popover(element, {
          delay: { show: 500, hide: 100 },
          container: 'body',
          sanitize: false, // Allow HTML content
        });
        console.log(`✅ [TooltipManager] Applied tooltip to ${fieldId}`);
      } catch (error) {
        console.error(`[TooltipManager] Error initializing popover for ${fieldId}:`, error);
      }
    }

    /**
     * Apply tooltips to all fields in a section based on field definitions
     * @param {object} sectionRows - Section row definitions with cells containing fieldId and tooltip properties
     */
    applyTooltipsToSection(sectionRows) {
      if (!this.initialized) {
        console.warn('[TooltipManager] Tooltips not loaded yet. Call loadTooltips() first.');
        return;
      }

      let appliedCount = 0;

      Object.entries(sectionRows).forEach(([rowKey, row]) => {
        if (rowKey === 'header' || !row.cells) return;

        Object.entries(row.cells).forEach(([colKey, cell]) => {
          if (cell.fieldId && cell.tooltip) {
            // Find the DOM element (fields use data-field-id attribute, not id)
            const element = document.querySelector(`[data-field-id="${cell.fieldId}"]`);

            if (element) {
              this.applyTooltip(element, cell.fieldId, cell.tooltip);
              appliedCount++;
            } else {
              console.warn(`[TooltipManager] Element not found for field: ${cell.fieldId}`);
            }
          }
        });
      });

      console.log(`✅ [TooltipManager] Applied ${appliedCount} tooltips to section`);
    }

    /**
     * Initialize all Bootstrap popovers on the page
     * Call this after DOM is fully rendered
     */
    initializeAllPopovers() {
      const popoverTriggerList = [].slice.call(
        document.querySelectorAll('[data-bs-toggle="popover"]')
      );

      const popoverList = popoverTriggerList.map(popoverTriggerEl => {
        return new bootstrap.Popover(popoverTriggerEl, {
          delay: { show: 500, hide: 100 },
          container: 'body',
          sanitize: false,
        });
      });

      console.log(`✅ [TooltipManager] Initialized ${popoverList.length} popovers`);
    }
  }

  // Create and export singleton instance
  window.TEUI = window.TEUI || {};
  window.TEUI.TooltipManager = new TooltipManager();
})(window);
