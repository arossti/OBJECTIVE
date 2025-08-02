/**
 * 4011-Section12.js
 * Volume and Surface Metrics (Section 12) module for TEUI Calculator 4.011
 */

window.TEUI = window.TEUI || {};
window.TEUI.SectionModules = window.TEUI.SectionModules || {};

window.TEUI.SectionModules.sect12 = (function () {
  let isInitialized = false;
  let s12ListenersAdded = false; // Track if StateManager listeners have been added

  //==========================================================================
  // DUAL-STATE ARCHITECTURE (Self-Contained State Module)
  //==========================================================================

  // PATTERN A: Internal State Objects (Self-Contained + Persistent)
  const TargetState = {
    state: {},
    listeners: {},
    initialize: function () {
      const savedState = localStorage.getItem("S12_TARGET_STATE");
      if (savedState) {
        this.state = JSON.parse(savedState);
      } else {
        this.setDefaults();
      }
    },
    setDefaults: function () {
      // S12-specific defaults - MUST match sectionRows values
      this.state = {
        d_103: "1.5", // Number of stories (dropdown)
        g_103: "Normal", // Exposure (dropdown)
        d_105: "8000.00", // Conditioned volume (editable)
        d_108: "AL-1B", // ✅ FIXED: Use AL-1B method (was MEASURED) to get proper 93.6 TEUI
        g_109: "1.50", // Measured value (conditional editable, N/A when not MEASURED)
      };
    },
    saveState: function () {
      localStorage.setItem("S12_TARGET_STATE", JSON.stringify(this.state));
    },
    setValue: function (fieldId, value, source = "user") {
      this.state[fieldId] = value;
      // ✅ FIXED: Save state for any user action (user or user-modified)
      if (source === "user" || source === "user-modified") {
        this.saveState();
        console.log(
          `S12 TargetState: Saved state after ${source} changed ${fieldId} to ${value}`,
        );
      }
    },
    getValue: function (fieldId) {
      return this.state[fieldId];
    },
  };

  const ReferenceState = {
    state: {},
    listeners: {},
    initialize: function () {
      const savedState = localStorage.getItem("S12_REFERENCE_STATE");
      if (savedState) {
        this.state = JSON.parse(savedState);
      } else {
        this.setDefaults();
      }
    },
    setDefaults: function () {
      // ✅ DYNAMIC LOADING: Get current reference standard from dropdown d_13
      const currentStandard =
        window.TEUI?.StateManager?.getValue?.("d_13") || "OBC SB10 5.5-6 Z6";
      const referenceValues =
        window.TEUI?.ReferenceValues?.[currentStandard] || {};

      // Apply reference values to S12 fields with fallbacks
      this.state = {
        d_103: referenceValues.d_103 || "1", // Stories - DIFFERENT: 1 vs Target 1.5
        g_103: referenceValues.g_103 || "Exposed", // Exposure - DIFFERENT: Exposed vs Target Normal
        d_105: "8200.00", // Volume - DIFFERENT: 8200 vs Target 8000
        d_108: referenceValues.d_108 || "MEASURED", // Blower door method - DIFFERENT: Reference uses MEASURED vs Target AL-1B
        g_109: referenceValues.g_109 || "2.00", // Measured - DIFFERENT: 2.00 vs Target 1.50
      };

      console.log(
        `S12: Reference defaults loaded from standard: ${currentStandard}`,
      );
    },
    // MANDATORY: Include onReferenceStandardChange for d_13 changes
    onReferenceStandardChange: function () {
      console.log("S12: Reference standard changed, reloading defaults");
      this.setDefaults();
      this.saveState();
      // Only refresh UI if currently in reference mode
      if (ModeManager.currentMode === "reference") {
        ModeManager.refreshUI();
        calculateAll();
      }
    },
    saveState: function () {
      localStorage.setItem("S12_REFERENCE_STATE", JSON.stringify(this.state));
    },
    setValue: function (fieldId, value, source = "user") {
      this.state[fieldId] = value;
      // ✅ FIXED: Save state for any user action (user or user-modified)
      if (source === "user" || source === "user-modified") {
        this.saveState();
        console.log(
          `S12 ReferenceState: Saved state after ${source} changed ${fieldId} to ${value}`,
        );
      }
    },
    getValue: function (fieldId) {
      return this.state[fieldId];
    },
  };

  // PATTERN 2: The ModeManager Facade
  const ModeManager = {
    currentMode: "target",
    initialize: function () {
      TargetState.initialize();
      ReferenceState.initialize();

      // MANDATORY: Listen for reference standard changes
      if (window.TEUI?.StateManager?.addListener) {
        window.TEUI.StateManager.addListener("d_13", () => {
          ReferenceState.onReferenceStandardChange();
        });
      }
    },
    switchMode: function (mode) {
      if (
        this.currentMode === mode ||
        (mode !== "target" && mode !== "reference")
      )
        return;
      this.currentMode = mode;
      console.log(`S12: Switched to ${mode.toUpperCase()} mode`);

      this.refreshUI();
      calculateAll();
      // ✅ FIX: Update displayed calculated values based on new mode
      this.updateCalculatedDisplayValues();
    },

    // Update displayed calculated values based on current mode
    updateCalculatedDisplayValues: function () {
      if (!window.TEUI?.StateManager) return;

      const calculatedFields = [
        "d_101",
        "d_102",
        "d_104",
        "d_105",
        "d_106",
        "d_107",
        "g_101",
        "g_102",
        "g_105",
        "g_108",
        "g_109",
        "g_110",
        "h_101",
        "h_102",
        "i_101",
        "i_102",
        "i_103",
        "i_104",
        "i_105",
        "i_110",
        "j_101",
        "j_102",
        "k_101",
        "k_102",
        "k_103",
        "k_104",
        "l_101",
        "l_102",
        "l_103",
        "l_104",
        "l_107",
        "l_109",
        "l_110",
        "d_109",
        "d_110",
      ];

      calculatedFields.forEach((fieldId) => {
        let valueToDisplay;

        if (this.currentMode === "reference") {
          // In Reference mode, try to show ref_ values, fallback to regular values
          valueToDisplay =
            window.TEUI.StateManager.getValue(`ref_${fieldId}`) ||
            window.TEUI.StateManager.getValue(fieldId);
        } else {
          // In Target mode, show regular values
          valueToDisplay = window.TEUI.StateManager.getValue(fieldId);
        }

        if (valueToDisplay !== null && valueToDisplay !== undefined) {
          const element = document.querySelector(
            `[data-field-id="${fieldId}"]`,
          );
          if (element && !element.hasAttribute("contenteditable")) {
            // Only update calculated fields, not user-editable ones
            const numericValue = window.TEUI.parseNumeric(valueToDisplay);
            if (!isNaN(numericValue)) {
              let formattedValue;
              // Use appropriate formatting based on field type
              if (
                fieldId.startsWith("g_") &&
                (fieldId.includes("101") ||
                  fieldId.includes("102") ||
                  fieldId === "d_104")
              ) {
                formattedValue = formatNumber(numericValue, "W/m2");
              } else if (fieldId.startsWith("l_")) {
                formattedValue = window.TEUI.formatNumber(
                  numericValue,
                  "percent-0dp",
                );
              } else {
                formattedValue = window.TEUI.formatNumber(
                  numericValue,
                  "number-2dp",
                );
              }
              element.textContent = formattedValue;
            }
          }
        }
      });

      console.log(
        `[Section12] Calculated display values updated for ${this.currentMode} mode`,
      );
    },
    resetState: function () {
      console.log("S12: Resetting state and clearing localStorage.");
      TargetState.setDefaults();
      TargetState.saveState();
      ReferenceState.setDefaults();
      ReferenceState.saveState();
      console.log("S12: States have been reset to defaults.");

      this.refreshUI();
      calculateAll();
    },
    getCurrentState: function () {
      return this.currentMode === "target" ? TargetState : ReferenceState;
    },
    getValue: function (fieldId) {
      return this.getCurrentState().getValue(fieldId);
    },
    setValue: function (fieldId, value, source = "user") {
      this.getCurrentState().setValue(fieldId, value, source);

      // BRIDGE: For backward compatibility, sync Target changes to global StateManager
      if (this.currentMode === "target") {
        window.TEUI.StateManager.setValue(fieldId, value, "user-modified");
      }
    },
    refreshUI: function () {
      const sectionElement = document.getElementById("volumeSurfaceMetrics");
      if (!sectionElement) return;

      const currentState = this.getCurrentState();

      // S12-specific fields to sync
      const fieldsToSync = ["d_103", "g_103", "d_105", "d_108", "g_109"];

      fieldsToSync.forEach((fieldId) => {
        const stateValue = currentState.getValue(fieldId);
        if (stateValue === undefined || stateValue === null) return;

        const element = sectionElement.querySelector(
          `[data-field-id="${fieldId}"]`,
        );
        if (!element) return;

        // ✅ PATTERN A: Simple dropdown pattern (like S10) - NO SAFETY CHECKS
        const dropdown = element.matches("select")
          ? element
          : element.querySelector("select");

        if (dropdown) {
          dropdown.value = stateValue; // Simple and direct - like working sections
        } else if (element.hasAttribute("contenteditable")) {
          element.textContent = stateValue;
        }
      });
    },
  };

  // MANDATORY: Global exposure
  window.TEUI.sect12 = window.TEUI.sect12 || {};
  window.TEUI.sect12.ModeManager = ModeManager;
  window.TEUI.sect12.TargetState = TargetState;
  window.TEUI.sect12.ReferenceState = ReferenceState;

  //==========================================================================
  // FIELD DEFINITIONS AND LAYOUT
  //==========================================================================

  const sectionRows = {
    header: {
      id: "12-ID",
      rowId: "12-ID",
      label: "Volume and Surface Metrics Units",
      cells: {
        c: {
          content: "SECTION 12. Volume and Surface Metrics",
          classes: ["section-header"],
          colspan: 4,
        },
        d: { content: "", classes: ["section-subheader"] },
        e: { content: "", classes: ["section-subheader"] },
        f: { content: "", classes: ["section-subheader"] },
        g: {
          content: "U-Value\nW/m²·K",
          classes: ["section-subheader", "align-center"],
        },
        h: {
          content: "Loss Rate\nkWh/m²",
          classes: ["section-subheader", "align-center"],
        },
        i: {
          content: "Heatloss\nHtg Season\nkWh/yr",
          classes: ["section-subheader", "align-center"],
        },
        j: {
          content: "Gain Rate\nkWh/m²",
          classes: ["section-subheader", "align-center"],
        },
        k: {
          content: "Heatgain\nCool Season\nkWh/yr",
          classes: ["section-subheader", "align-center"],
        },
        l: {
          content: "Heatloss %",
          classes: ["section-subheader", "align-center"],
        },
        m: {
          content: "Reference",
          classes: ["section-subheader", "align-center"],
        },
        n: { content: "N", classes: ["section-subheader", "align-center"] },
      },
    },
    101: {
      id: "B.16",
      rowId: "B.16",
      label: "Total Area Exposed to Air (Ae)",
      cells: {
        c: { label: "Total Area Exposed to Air (Ae)" },
        d: {
          fieldId: "d_101",
          type: "calculated",
          value: "2476.62",
          section: "volumeSurfaceMetrics",
          dependencies: [
            "d_85",
            "d_86",
            "d_87",
            "d_88",
            "d_89",
            "d_90",
            "d_91",
            "d_92",
            "d_93",
          ],
          classes: ["text-air-facing"],
        },
        e: { content: "m²", classes: ["unit-label"] },
        f: { content: "U-Val. for Ae", classes: ["label-main"] },
        g: {
          fieldId: "g_101",
          type: "calculated",
          value: "0.278",
          section: "volumeSurfaceMetrics",
          dependencies: [
            "d_85",
            "h_85",
            "d_86",
            "h_86",
            "d_87",
            "h_87",
            "d_88",
            "h_88",
            "d_89",
            "h_89",
            "d_90",
            "h_90",
            "d_91",
            "h_91",
            "d_92",
            "h_92",
            "d_93",
            "h_93",
            "d_101",
            "d_97",
          ],
          classes: ["text-air-facing"],
        },
        h: {
          fieldId: "h_101",
          type: "calculated",
          value: "30.73",
          section: "volumeSurfaceMetrics",
          dependencies: ["g_101", "d_20"],
        },
        i: {
          fieldId: "i_101",
          type: "calculated",
          value: "76,103.69",
          section: "volumeSurfaceMetrics",
          dependencies: ["h_101", "d_101"],
        },
        j: {
          fieldId: "j_101",
          type: "calculated",
          value: "1.31",
          section: "volumeSurfaceMetrics",
          dependencies: ["g_101", "d_21"],
        },
        k: {
          fieldId: "k_101",
          type: "calculated",
          value: "3,242.68",
          section: "volumeSurfaceMetrics",
          dependencies: ["j_101", "d_101"],
        },
        l: {
          fieldId: "l_101",
          type: "calculated",
          value: "65.57%",
          section: "volumeSurfaceMetrics",
          dependencies: ["i_101", "i_104"],
          classes: ["percentage-value"],
        },
        m: { content: "", classes: ["reference-value"] },
        n: { content: "" },
      },
    },
    102: {
      id: "B.17",
      rowId: "B.17",
      label: "Total Area Exposed to Ground (Ag)",
      cells: {
        c: { label: "Total Area Exposed to Ground (Ag)" },
        d: {
          fieldId: "d_102",
          type: "calculated",
          value: "1100.42",
          section: "volumeSurfaceMetrics",
          dependencies: ["d_94", "d_95"],
          classes: ["text-ground-facing"],
        },
        e: { content: "m²", classes: ["unit-label"] },
        f: { content: "U-Val. for Ag", classes: ["label-main"] },
        g: {
          fieldId: "g_102",
          type: "calculated",
          value: "0.324",
          section: "volumeSurfaceMetrics",
          dependencies: ["d_94", "h_94", "d_95", "h_95", "d_102", "d_97"],
          classes: ["text-ground-facing"],
        },
        h: {
          fieldId: "h_102",
          type: "calculated",
          value: "15.26",
          section: "volumeSurfaceMetrics",
          dependencies: ["g_102", "d_22"],
        },
        i: {
          fieldId: "i_102",
          type: "calculated",
          value: "16,788.25",
          section: "volumeSurfaceMetrics",
          dependencies: ["h_102", "d_102"],
        },
        j: {
          fieldId: "j_102",
          type: "calculated",
          value: "-13.08",
          section: "volumeSurfaceMetrics",
          dependencies: ["g_102", "h_22"],
        },
        k: {
          fieldId: "k_102",
          type: "calculated",
          value: "-14,389.92",
          section: "volumeSurfaceMetrics",
          dependencies: ["j_102", "d_102"],
        },
        l: {
          fieldId: "l_102",
          type: "calculated",
          value: "14.46%",
          section: "volumeSurfaceMetrics",
          dependencies: ["i_102", "i_104"],
          classes: ["percentage-value"],
        },
        m: { content: "", classes: ["reference-value"] },
        n: { content: "" },
      },
    },
    103: {
      id: "B.18.3",
      rowId: "B.18.3",
      label: "Heating Natural Air Leakage Heatloss",
      cells: {
        c: { label: "Heating Natural Air Leakage Heatloss" },
        d: {
          fieldId: "d_103",
          type: "dropdown",
          dropdownId: "dd_d_103",
          value: "1.5",
          section: "volumeSurfaceMetrics",
          options: [
            { value: "1", name: "1" },
            { value: "1.5", name: "1.5" },
            { value: "2", name: "2" },
            { value: "3", name: "3" },
            { value: "4", name: "4" },
            { value: "5", name: "5" },
            { value: "6", name: "6" },
          ],
        },
        e: { content: "Stories", classes: ["unit-label"] },
        f: { content: "B.18.3 Shielding", classes: ["label-main"] },
        g: {
          fieldId: "g_103",
          type: "dropdown",
          dropdownId: "dd_g_103",
          value: "Normal",
          section: "volumeSurfaceMetrics",
          options: [
            { value: "Shielded", name: "Shielded" },
            { value: "Normal", name: "Normal" },
            { value: "Exposed", name: "Exposed" },
          ],
        },
        h: {},
        i: {
          fieldId: "i_103",
          type: "calculated",
          value: "23,178.39",
          section: "volumeSurfaceMetrics",
          dependencies: ["g_109", "g_110", "d_105", "d_20"],
        },
        j: {},
        k: {
          fieldId: "k_103",
          type: "calculated",
          value: "987.60",
          section: "volumeSurfaceMetrics",
          dependencies: ["g_109", "g_110", "d_105", "d_21"],
        },
        l: {
          fieldId: "l_103",
          type: "calculated",
          value: "19.97%",
          section: "volumeSurfaceMetrics",
          dependencies: ["i_103", "i_104"],
          classes: ["percentage-value"],
        },
        m: { content: "", classes: ["reference-value"] },
        n: { content: "" },
      },
    },
    104: {
      id: "T.4",
      rowId: "T.4",
      label: "Building U-Value Combined Total & Transmission Losses & Gains",
      cells: {
        c: {
          label:
            "Building U-Value Combined Total & Transmission Losses & Gains",
          classes: ["total-row-text"],
        },
        d: {},
        e: { content: "", classes: ["unit-label"] },
        f: {},
        g: {
          fieldId: "d_104",
          type: "calculated",
          value: "0.292",
          section: "volumeSurfaceMetrics",
          dependencies: ["g_101", "d_101", "g_102", "d_102"],
          classes: ["total-row-text"],
        },
        h: {},
        i: {
          fieldId: "i_104",
          type: "calculated",
          value: "116,070.33",
          section: "volumeSurfaceMetrics",
          dependencies: ["i_101", "i_102", "i_103"],
          classes: ["total-row-text"],
        },
        j: {},
        k: {
          fieldId: "k_104",
          type: "calculated",
          value: "-10,160.19",
          section: "volumeSurfaceMetrics",
          dependencies: ["k_101", "k_102", "k_103"],
          classes: ["total-row-text"],
        },
        l: {
          fieldId: "l_104",
          type: "calculated",
          value: "100%",
          section: "volumeSurfaceMetrics",
          classes: ["percentage-value", "total-row-text"],
          dependencies: ["l_101", "l_102", "l_103"],
        },
        m: { content: "N/A", classes: ["reference-value", "total-row-text"] },
        n: { content: "" },
      },
    },
    105: {
      id: "B.13",
      rowId: "B.13",
      label: "Total Conditioned Volume",
      cells: {
        c: { label: "Total Conditioned Volume" },
        d: {
          fieldId: "d_105",
          type: "editable",
          value: "8000.00",
          section: "volumeSurfaceMetrics",
          classes: ["user-input"],
        },
        e: { content: "m³", classes: ["unit-label"] },
        f: { content: "Volume/Area", classes: ["label-main"] },
        g: {
          fieldId: "g_105",
          type: "calculated",
          value: "3.23",
          section: "volumeSurfaceMetrics",
          dependencies: ["d_105", "d_101"],
        },
        h: { content: "Area/Volume", classes: ["text-center"] },
        i: {
          fieldId: "i_105",
          type: "calculated",
          value: "0.31",
          section: "volumeSurfaceMetrics",
          dependencies: ["d_101", "d_105"],
        },
        j: {},
        k: {},
        l: {},
        m: {},
        n: {},
      },
    },
    106: {
      id: "B.14",
      rowId: "B.14",
      label: "Total Floor Area (Cond. + Uncond.)",
      cells: {
        c: { label: "Total Floor Area (Cond. + Uncond.)" },
        d: {
          fieldId: "d_106",
          type: "calculated",
          value: "1130.12",
          section: "volumeSurfaceMetrics",
          dependencies: ["d_87", "d_95", "d_96"],
        },
        e: { content: "m²", classes: ["unit-label"] },
        f: { content: "- Only used in E.3.2", classes: ["note-text"] },
        g: {},
        h: {},
        i: {},
        j: {},
        k: {},
        l: {},
        m: {},
        n: {},
      },
    },
    107: {
      id: "B.15",
      rowId: "B.15",
      label: "Window:Wall Ratio (WWR)",
      cells: {
        c: { label: "Window:Wall Ratio (WWR)" },
        d: {
          fieldId: "d_107",
          type: "calculated",
          value: "0.33",
          section: "volumeSurfaceMetrics",
          dependencies: [
            "d_88",
            "d_89",
            "d_90",
            "d_91",
            "d_92",
            "d_93",
            "d_86",
          ],
        },
        e: { content: "%", classes: ["unit-label"] },
        f: {},
        g: {},
        h: {},
        i: {},
        j: {},
        k: {},
        l: {
          fieldId: "l_107",
          type: "calculated",
          value: "61%",
          section: "volumeSurfaceMetrics",
          classes: ["percentage-value"],
          dependencies: ["d_107"],
        },
        m: {},
        n: {},
      },
    },
    108: {
      id: "B.18.1",
      rowId: "B.18.1",
      label: "NRL₅₀ Target Method",
      cells: {
        c: { label: "NRL₅₀ Target Method" },
        d: {
          fieldId: "d_108",
          type: "dropdown",
          dropdownId: "dd_d_108",
          value: "AL-1B",
          section: "volumeSurfaceMetrics",
          options: [
            { value: "MEASURED", name: "Measured" },
            { value: "PH_CLASSIC", name: "PH Classic" },
            { value: "PH_LOW", name: "PH Low" },
            { value: "PH_PLUS", name: "PH+" },
            { value: "AL-1A", name: "AL-1A" },
            { value: "AL-2A", name: "AL-2A" },
            { value: "AL-3A", name: "AL-3A" },
            { value: "AL-4A", name: "AL-4A" },
            { value: "AL-5A", name: "AL-5A" },
            { value: "AL-1B", name: "AL-1B" },
            { value: "AL-2B", name: "AL-2B" },
            { value: "AL-3B", name: "AL-3B" },
            { value: "AL-4B", name: "AL-4B" },
            { value: "AL-5B", name: "AL-5B" },
            { value: "AL-6B", name: "AL-6B" },
          ],
        },
        e: { content: "", classes: ["unit-label"] },
        f: { content: "B.18.1 Target", classes: ["label-main"] },
        g: {
          fieldId: "g_108",
          type: "calculated",
          value: "1.17",
          section: "volumeSurfaceMetrics",
          dependencies: ["d_108", "g_109", "d_105", "d_101"],
        },
        h: { content: "L/s•m²", classes: ["unit-label"] },
        i: {},
        j: {},
        k: {},
        l: {},
        m: {},
        n: {},
      },
    },
    109: {
      id: "B.18.2",
      rowId: "B.18.2",
      label: "ACH₅₀ Target (Converts B.18.1)",
      cells: {
        c: { label: "ACH₅₀ Target (Converts B.18.1)" },
        d: {
          fieldId: "d_109",
          type: "calculated",
          value: "1.30",
          section: "volumeSurfaceMetrics",
          dependencies: ["g_108", "d_101", "d_105"],
        },
        e: { content: "ACH", classes: ["unit-label"] },
        f: { content: "B.18.2 Measured", classes: ["label-main"] },
        g: {
          fieldId: "g_109",
          type: "editable",
          value: "1.50",
          section: "volumeSurfaceMetrics",
          classes: ["user-input"],
        },
        h: {},
        i: {},
        j: {},
        k: {},
        l: {
          fieldId: "l_109",
          type: "calculated",
          value: "115%",
          section: "volumeSurfaceMetrics",
          classes: ["percentage-value"],
          dependencies: ["g_109", "d_109"],
        },
        m: {},
        n: {},
      },
    },
    110: {
      id: "B.18.4",
      rowId: "B.18.4",
      label: "Ae₁₀ or ELA₁₀ (m²)",
      cells: {
        c: { label: "Ae₁₀ or ELA₁₀ (m²)" },
        d: {
          fieldId: "d_110",
          type: "calculated",
          value: "2.898",
          section: "volumeSurfaceMetrics",
          dependencies: ["d_109", "d_105"],
        },
        e: { content: "m²", classes: ["unit-label"] },
        f: { content: "B.18.5.1 n-Factor", classes: ["label-main"] },
        g: {
          fieldId: "g_110",
          type: "calculated",
          value: "16.7",
          section: "volumeSurfaceMetrics",
          dependencies: ["j_19", "d_103", "g_103"],
        },
        h: { content: "B.18.3 Ae₁₀ Zone", classes: ["text-center"] },
        i: {
          fieldId: "i_110",
          type: "calculated",
          value: "2",
          section: "volumeSurfaceMetrics",
          dependencies: ["j_19"],
        },
        j: {},
        k: {},
        l: {
          fieldId: "l_110",
          type: "calculated",
          value: "173%",
          section: "volumeSurfaceMetrics",
          classes: ["percentage-value"],
          dependencies: ["d_110"],
        },
        m: {},
        n: {},
      },
    },
  };

  //==========================================================================
  // ACCESSOR METHODS
  //==========================================================================

  function getFields() {
    const fields = {};
    Object.entries(sectionRows).forEach(([rowKey, row]) => {
      if (rowKey === "header" || rowKey === "subheader") return;
      if (!row.cells) return;
      Object.entries(row.cells).forEach(([colKey, cell]) => {
        if (cell.fieldId && cell.type) {
          fields[cell.fieldId] = {
            type: cell.type,
            label: cell.label || row.label,
            defaultValue: cell.value || "",
            section: cell.section || "volumeSurfaceMetrics",
            dependencies: cell.dependencies || [],
          };
          if (cell.dropdownId)
            fields[cell.fieldId].dropdownId = cell.dropdownId;
          if (cell.options) fields[cell.fieldId].options = cell.options;
          if (cell.getOptions)
            fields[cell.fieldId].getOptions = cell.getOptions;
          if (cell.min !== undefined) fields[cell.fieldId].min = cell.min;
          if (cell.max !== undefined) fields[cell.fieldId].max = cell.max;
          if (cell.step !== undefined) fields[cell.fieldId].step = cell.step;
        }
      });
    });
    return fields;
  }

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

  function getLayout() {
    const layoutRows = [];
    if (sectionRows["header"]) {
      layoutRows.push(createLayoutRow(sectionRows["header"]));
    }
    if (sectionRows["subheader"]) {
      layoutRows.push(createLayoutRow(sectionRows["subheader"]));
    }
    Object.entries(sectionRows).forEach(([key, row]) => {
      if (key !== "header" && key !== "subheader") {
        layoutRows.push(createLayoutRow(row));
      }
    });
    return { rows: layoutRows };
  }

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
      if (row.cells && row.cells[col]) {
        const cell = { ...row.cells[col] };
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
        rowDef.cells.push(cell);
      } else {
        if (col === "c" && !row.cells?.c && row.label) {
          rowDef.cells.push({ label: row.label });
        } else {
          rowDef.cells.push({});
        }
      }
    });
    return rowDef;
  }

  //==========================================================================
  // HELPER FUNCTIONS
  //==========================================================================

  function getNumericValue(fieldId) {
    // Use global parseNumeric, retrieving value via getFieldValue
    return window.TEUI.parseNumeric(getFieldValue(fieldId)) || 0;
  }

  function getGlobalNumericValue(fieldId) {
    // ✅ PATTERN A: For values EXTERNAL to this section (from global StateManager)
    const rawValue = window.TEUI?.StateManager?.getValue(fieldId);
    return window.TEUI.parseNumeric(rawValue) || 0;
  }

  function getSectionValue(fieldId, isReferenceCalculation = false) {
    // ✅ DUAL-ENGINE PATTERN: Get section-local values based on calculation context
    if (isReferenceCalculation) {
      return ReferenceState.getValue(fieldId);
    } else {
      return TargetState.getValue(fieldId);
    }
  }

  function getFieldValue(fieldId) {
    if (window.TEUI?.StateManager?.getValue) {
      const stateValue = window.TEUI.StateManager.getValue(fieldId);
      if (stateValue !== null && stateValue !== undefined) {
        return stateValue;
      }
    }
    const element = document.querySelector(`[data-field-id="${fieldId}"]`);
    if (element) {
      if (element.tagName === "SELECT") {
        return element.value;
      }
      return element.textContent.trim();
    }
    return null;
  }

  /**
   * Formats a number according to the project's display rules.
   * Handles specific formats like percentages, W/m2, etc.
   * @param {number} value - The number to format.
   * @param {string} [format='number'] - The type of format ('number', 'percent', 'W/m2').
   * @returns {string} The formatted number as a string.
   */
  function formatNumber(value, format = "number") {
    // Handle null or undefined values
    if (value === null || value === undefined || isNaN(value)) {
      // Return appropriate default based on format
      return format === "percent" ? "0%" : format === "W/m2" ? "0.000" : "0.00";
    }

    const num = Number(value);

    // Handle percentage format
    if (format === "percent") {
      // Convert decimal to percentage with 2 decimal places
      return (
        (num * 100).toLocaleString(undefined, {
          minimumFractionDigits: 2,
          maximumFractionDigits: 2,
        }) + "%"
      );
    }
    // Handle U-Value format - 3 decimal places
    else if (format === "W/m2") {
      return num.toLocaleString("en-US", {
        minimumFractionDigits: 3,
        maximumFractionDigits: 3,
      });
    }
    // Default format - 2 decimal places
    else {
      return num.toLocaleString("en-US", {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2,
      });
    }
  }

  /**
   * Helper function to set a calculated field value in StateManager and update the DOM.
   * Uses the global window.TEUI.formatNumber for formatting.
   * @param {string} fieldId - The ID of the field to update.
   * @param {*} rawValue - The raw, unformatted value to store in StateManager.
   * @param {string} formatType - The format type for display (e.g., 'number', 'percent-auto', 'integer', 'raw', 'number-3dp').
   */
  function setCalculatedValue(fieldId, rawValue, formatType = "number") {
    // Ensure rawValue is numeric for calculations where appropriate
    const numericValue =
      typeof rawValue === "string"
        ? window.TEUI.parseNumeric(rawValue)
        : rawValue;

    // Set raw value in state manager with 'calculated' state
    if (window.TEUI?.StateManager?.setValue) {
      // Ensure rawValue is stored as a string for consistency with FULL precision
      window.TEUI.StateManager.setValue(
        fieldId,
        String(numericValue),
        "calculated",
      ); // Store the cleaned numeric value as string with full precision
    } else {
      console.error("StateManager not available to set value for", fieldId);
      return;
    }

    // Determine the correct format type based on field ID conventions
    let determinedFormatType;

    // Determine format based on fieldId for precision matching Excel
    if (fieldId === "g_101" || fieldId === "g_102" || fieldId === "d_104") {
      determinedFormatType = "W/m2"; // Use W/m2 format for U-values (3dp) - matches Section 11
    } else if (fieldId === "d_110") {
      determinedFormatType = "number-3dp"; // ELA
    } else if (fieldId === "g_110") {
      determinedFormatType = "number-1dp"; // N-Factor
    } else if (fieldId === "i_110") {
      determinedFormatType = "integer"; // Zone number
    } else if (fieldId === "d_107") {
      determinedFormatType = "percent-2dp"; // WWR % with 2dp
    } else if (
      fieldId === "l_101" ||
      fieldId === "l_102" ||
      fieldId === "l_103"
    ) {
      determinedFormatType = "percent-2dp"; // Heatloss component %
    } else if (
      fieldId === "l_104" ||
      fieldId === "l_107" ||
      fieldId === "l_109" ||
      fieldId === "l_110"
    ) {
      determinedFormatType = "percent-0dp"; // Total or reference % (no decimals)
    } else if (
      [
        "d_101",
        "d_102",
        "d_106",
        "i_101",
        "i_102",
        "i_103",
        "i_104",
        "k_101",
        "k_102",
        "k_103",
        "k_104",
      ].includes(fieldId)
    ) {
      determinedFormatType = "number-2dp-comma"; // Areas and kWh values with commas
    } else {
      // Default for other calculated numbers (rates, ratios, ACH50 etc.)
      determinedFormatType = "number-2dp";
    }

    // Override if a specific format was passed and it's not the default 'number'
    if (formatType !== "number") {
      determinedFormatType = formatType;
    }

    // For 'W/m2' format, use local formatNumber function
    let formattedValue;
    if (determinedFormatType === "W/m2") {
      formattedValue = formatNumber(numericValue, "W/m2");
    } else {
      // For other formats, use the global formatter
      formattedValue = window.TEUI.formatNumber(
        numericValue,
        determinedFormatType,
      );
    }

    // Update the corresponding DOM element
    const element = document.querySelector(`[data-field-id="${fieldId}"]`);
    if (element) {
      if (element.tagName === "SELECT" || element.tagName === "INPUT") {
        element.value = formattedValue; // Update input/select value
      } else {
        element.textContent = formattedValue; // Update other element text content
      }
      element.classList.add("calculated-value");
      element.classList.remove("user-input", "editable", "PendingValue");
      element.removeAttribute("contenteditable");
    } else {
      console.warn("DOM element not found for calculated field:", fieldId);
    }
  }

  function setElementClass(fieldId, className, removeClasses = []) {
    const element = document.querySelector(`[data-field-id="${fieldId}"]`);
    if (element) {
      removeClasses.forEach((cls) => element.classList.remove(cls));
      if (className) element.classList.add(className);
    }
  }

  //==========================================================================
  // REFERENCE INDICATOR CONFIGURATION
  //==========================================================================

  // T-cell comparison configuration for Section 12
  const referenceComparisons = {
    d_107: {
      type: "lower-is-better",
      tCell: "t_107",
      description: "Window:Wall Ratio",
    },
    g_109: {
      type: "lower-is-better",
      tCell: "t_109",
      description: "ACH50 Measured",
    },
  };

  /**
   * Update reference indicators for all configured fields
   */
  function updateAllReferenceIndicators() {
    try {
      Object.keys(referenceComparisons).forEach((fieldId) => {
        updateReferenceIndicator(fieldId);
      });
    } catch (error) {
      console.error("[Section12] Error updating reference indicators:", error);
    }
  }

  /**
   * Update reference indicator (M and N columns) for a specific field
   * @param {string} fieldId - The application field ID to update
   */
  function updateReferenceIndicator(fieldId) {
    const config = referenceComparisons[fieldId];
    if (!config) return;

    // Get current value
    const currentValue =
      window.TEUI?.parseNumeric?.(getFieldValue(fieldId)) || 0;

    // Get reference value
    const referenceValue =
      window.TEUI?.StateManager?.getTCellValue?.(fieldId) ||
      window.TEUI?.StateManager?.getReferenceValue?.(config.tCell);

    const rowId = fieldId.match(/\d+$/)?.[0]; // Extract row number from field ID
    if (!rowId) return;

    const mFieldId = `m_${rowId}`;
    const nFieldId = `n_${rowId}`;

    // Check if M and N column elements exist before trying to update them
    const mElement = document.querySelector(`[data-field-id="${mFieldId}"]`);
    const nElement = document.querySelector(`[data-field-id="${nFieldId}"]`);

    if (!mElement || !nElement) {
      // Skip reference indicators for rows that don't have M/N columns
      return;
    }

    // If no reference value found, show N/A
    if (!referenceValue || referenceValue === 0) {
      setCalculatedValue(mFieldId, "N/A", "raw");
      if (nElement) {
        nElement.textContent = "";
        nElement.classList.remove("checkmark", "warning");
      }
      return;
    }

    // Calculate percentage based on comparison type
    let percentage = 100;
    let isGood = true;

    if (config.type === "lower-is-better") {
      // For lower-is-better, reference/current gives percentage
      percentage = (referenceValue / currentValue) * 100;
      isGood = currentValue <= referenceValue;
    } else if (config.type === "higher-is-better") {
      // For higher-is-better, current/reference gives percentage
      percentage = (currentValue / referenceValue) * 100;
      isGood = currentValue >= referenceValue;
    }

    // Cap percentage at reasonable bounds
    if (percentage > 999) percentage = 999;
    if (percentage < 0) percentage = 0;

    // Update M column with percentage
    setCalculatedValue(mFieldId, percentage / 100, "percent");

    // Update N column with checkmark/warning (nElement already declared above)
    if (nElement) {
      nElement.textContent = isGood ? "✓" : "✗";
      setElementClass(nFieldId, isGood ? "checkmark" : "warning", [
        "checkmark",
        "warning",
      ]);
    }
  }

  //==========================================================================
  // CALCULATION FUNCTIONS
  //==========================================================================

  function calculateVolumeMetrics(isReferenceCalculation = false) {
    // Get all values with full precision using parseFloat
    const d85 = parseFloat(getGlobalNumericValue("d_85"));
    const d86 = parseFloat(getGlobalNumericValue("d_86"));
    const d87 = parseFloat(getGlobalNumericValue("d_87"));
    const d88 = parseFloat(getGlobalNumericValue("d_88"));
    const d89 = parseFloat(getGlobalNumericValue("d_89"));
    const d90 = parseFloat(getGlobalNumericValue("d_90"));
    const d91 = parseFloat(getGlobalNumericValue("d_91"));
    const d92 = parseFloat(getGlobalNumericValue("d_92"));
    const d93 = parseFloat(getGlobalNumericValue("d_93"));
    const d94 = parseFloat(getGlobalNumericValue("d_94"));
    const d95 = parseFloat(getGlobalNumericValue("d_95"));
    const d96 = parseFloat(getGlobalNumericValue("d_96"));
    // ✅ DUAL-ENGINE: Use correct state based on calculation context
    const d105_vol = parseFloat(
      window.TEUI.parseNumeric(
        getSectionValue("d_105", isReferenceCalculation),
      ) || 0,
    );

    // Calculate with full precision
    const d101_areaAir = d85 + d86 + d87 + d88 + d89 + d90 + d91 + d92 + d93;
    const d102_areaGround = d94 + d95 === 0 ? 0.0000001 : d94 + d95;
    const d106_floorArea = d87 + d95 + d96;

    // Calculate ratios with full precision
    const g105_volAreaRatio = d101_areaAir > 0 ? d105_vol / d101_areaAir : 0;
    const i105_areaVolRatio = d105_vol > 0 ? d101_areaAir / d105_vol : 0;

    // Only update DOM for Target calculations (like S11 pattern)
    if (!isReferenceCalculation) {
      setCalculatedValue("d_101", d101_areaAir, "number-2dp-comma");
      setCalculatedValue("d_102", d102_areaGround, "number-2dp-comma");
      setCalculatedValue("d_106", d106_floorArea, "number-2dp-comma");
      setCalculatedValue("g_105", g105_volAreaRatio, "number-2dp");
      setCalculatedValue("i_105", i105_areaVolRatio, "number-2dp");
    }

    // Return calculated values for Reference engine storage
    return {
      d_101: d101_areaAir,
      d_102: d102_areaGround,
      d_106: d106_floorArea,
      g_105: g105_volAreaRatio,
      i_105: i105_areaVolRatio,
    };
  }

  function calculateCombinedUValue(isReferenceCalculation = false) {
    const d101_areaAir = parseFloat(getNumericValue("d_101"));
    const d102_areaGround = parseFloat(getNumericValue("d_102"));
    // Get u-values directly where available, otherwise calculate from RSI (1/RSI)
    // Use parseFloat to maintain full floating point precision
    const g85 =
      parseFloat(getGlobalNumericValue("g_85")) ||
      1 / parseFloat(getGlobalNumericValue("f_85") || 1);
    const g86 =
      parseFloat(getGlobalNumericValue("g_86")) ||
      1 / parseFloat(getGlobalNumericValue("f_86") || 1);
    const g87 =
      parseFloat(getGlobalNumericValue("g_87")) ||
      1 / parseFloat(getGlobalNumericValue("f_87") || 1);
    const g88 =
      parseFloat(getGlobalNumericValue("g_88")) ||
      1 / parseFloat(getGlobalNumericValue("f_88") || 1);
    const g89 =
      parseFloat(getGlobalNumericValue("g_89")) ||
      1 / parseFloat(getGlobalNumericValue("f_89") || 1);
    const g90 =
      parseFloat(getGlobalNumericValue("g_90")) ||
      1 / parseFloat(getGlobalNumericValue("f_90") || 1);
    const g91 =
      parseFloat(getGlobalNumericValue("g_91")) ||
      1 / parseFloat(getGlobalNumericValue("f_91") || 1);
    const g92 =
      parseFloat(getGlobalNumericValue("g_92")) ||
      1 / parseFloat(getGlobalNumericValue("f_92") || 1);
    const g93 =
      parseFloat(getGlobalNumericValue("g_93")) ||
      1 / parseFloat(getGlobalNumericValue("f_93") || 1);
    const g94 =
      parseFloat(getGlobalNumericValue("g_94")) ||
      1 / parseFloat(getGlobalNumericValue("f_94") || 1);
    const g95 =
      parseFloat(getGlobalNumericValue("g_95")) ||
      1 / parseFloat(getGlobalNumericValue("f_95") || 1);

    const d85 = parseFloat(getGlobalNumericValue("d_85"));
    const d86 = parseFloat(getGlobalNumericValue("d_86"));
    const d87 = parseFloat(getGlobalNumericValue("d_87"));
    const d88 = parseFloat(getGlobalNumericValue("d_88"));
    const d89 = parseFloat(getGlobalNumericValue("d_89"));
    const d90 = parseFloat(getGlobalNumericValue("d_90"));
    const d91 = parseFloat(getGlobalNumericValue("d_91"));
    const d92 = parseFloat(getGlobalNumericValue("d_92"));
    const d93 = parseFloat(getGlobalNumericValue("d_93"));
    const d94 = parseFloat(getGlobalNumericValue("d_94"));
    const d95 = parseFloat(getGlobalNumericValue("d_95"));

    // ✅ CRITICAL: Read TB penalty from S11's Pattern A system with safety checks
    // 🚨 PERFORMANCE NOTE: Robot fingers connection is working but laggy.
    // TODO: Optimize for production - consider direct event binding vs StateManager cascade
    let d97_tbPenaltyPercent;
    if (
      window.TEUI?.sect11?.ModeManager &&
      window.TEUI?.sect11?.TargetState &&
      window.TEUI?.sect11?.ReferenceState
    ) {
      const s11Mode = window.TEUI.sect11.ModeManager.currentMode;

      if (
        s11Mode === "reference" &&
        window.TEUI.sect11.ReferenceState.getValue
      ) {
        // Use S11's ReferenceState TB penalty
        d97_tbPenaltyPercent =
          window.TEUI.parseNumeric(
            window.TEUI.sect11.ReferenceState.getValue("d_97"),
          ) || 50;
      } else if (window.TEUI.sect11.TargetState.getValue) {
        // Use S11's TargetState TB penalty
        d97_tbPenaltyPercent =
          window.TEUI.parseNumeric(
            window.TEUI.sect11.TargetState.getValue("d_97"),
          ) || 50;
      } else {
        // Safety fallback if state methods not available
        d97_tbPenaltyPercent = parseFloat(getNumericValue("d_97")) || 50;
      }
    } else {
      // Fallback to StateManager for compatibility
      d97_tbPenaltyPercent = parseFloat(getNumericValue("d_97")) || 50;
    }

    // IMPORTANT: d_97 comes from Section 11's slider which stores percentage as a whole number (e.g., 20 for 20%)
    // We must divide by 100 to get the decimal factor (0.2) before using in calculations
    const tbFactor = 1 + d97_tbPenaltyPercent / 100; // Convert percentage to decimal before adding 1

    // Calculate with maximum precision
    const sumProductAir =
      d85 * g85 +
      d86 * g86 +
      d87 * g87 +
      d88 * g88 +
      d89 * g89 +
      d90 * g90 +
      d91 * g91 +
      d92 * g92 +
      d93 * g93;

    // Maintain at least 6 decimal places throughout calculation
    const g101_uAir =
      d101_areaAir > 0 ? (sumProductAir / d101_areaAir) * tbFactor : 0;

    const sumProductGround = d94 * g94 + d95 * g95;
    const g102_uGround =
      d102_areaGround > 0 ? (sumProductGround / d102_areaGround) * tbFactor : 0;

    const totalArea = parseFloat(d101_areaAir) + parseFloat(d102_areaGround);
    const d104_uCombined =
      totalArea > 0
        ? (g101_uAir * d101_areaAir + g102_uGround * d102_areaGround) /
          totalArea
        : 0;

    // Only update DOM for Target calculations (like S11 pattern)
    if (!isReferenceCalculation) {
      setCalculatedValue("g_101", g101_uAir, "W/m2");
      setCalculatedValue("g_102", g102_uGround, "W/m2");
      setCalculatedValue("d_104", d104_uCombined, "W/m2");
    }

    // Return calculated values for Reference engine storage
    return {
      g_101: g101_uAir,
      g_102: g102_uGround,
      d_104: d104_uCombined,
    };
  }

  function calculateWWR(isReferenceCalculation = false) {
    // Get values with full precision
    const d86 = parseFloat(getGlobalNumericValue("d_86"));
    const d88 = parseFloat(getGlobalNumericValue("d_88"));
    const d89 = parseFloat(getGlobalNumericValue("d_89"));
    const d90 = parseFloat(getGlobalNumericValue("d_90"));
    const d91 = parseFloat(getGlobalNumericValue("d_91"));
    const d92 = parseFloat(getGlobalNumericValue("d_92"));
    const d93 = parseFloat(getGlobalNumericValue("d_93"));

    // Calculate with full precision
    const windowDoorArea = d88 + d89 + d90 + d91 + d92 + d93;
    const totalWallArea = d86 + windowDoorArea;
    const wwr = totalWallArea > 0 ? windowDoorArea / totalWallArea : 0;

    // Update WWR value with standard formatter
    setCalculatedValue("d_107", wwr, "percent-2dp");

    // Calculate ratio to reference WWR with full precision
    const refWWR = 0.4; // Placeholder for reference value T107/T108
    const l107 = refWWR > 0 ? wwr / refWWR : 0;

    // Update ratio value with standard formatter
    setCalculatedValue("l_107", l107, "percent-0dp");
  }

  function calculateACH50Target(isReferenceCalculation = false) {
    // ✅ DUAL-ENGINE: Use correct state based on calculation context
    const d108_method = getSectionValue("d_108", isReferenceCalculation);

    // Get numeric values with full precision
    const g109_measured = parseFloat(
      window.TEUI.parseNumeric(
        getSectionValue("g_109", isReferenceCalculation),
      ) || 0,
    );
    const d101_areaAir = parseFloat(getNumericValue("d_101"));
    const d105_vol = parseFloat(
      window.TEUI.parseNumeric(
        getSectionValue("d_105", isReferenceCalculation),
      ) || 0,
    );

    // Target values for different methods
    let g108_nrl50Target = 0;
    const nrlTargets = {
      "AL-1A": 0.89,
      "AL-2A": 0.71,
      "AL-3A": 0.53,
      "AL-4A": 0.35,
      "AL-5A": 0.21,
      "AL-1B": 1.17,
      "AL-2B": 0.98,
      "AL-3B": 0.78,
      "AL-4B": 0.59,
      "AL-5B": 0.39,
      "AL-6B": 0.23,
    };

    // Convert ACH to NRL with full precision
    const achToNrl = (ach) =>
      d101_areaAir > 0 && d105_vol > 0
        ? (ach * d105_vol) / (d101_areaAir * 3.6)
        : 0;

    if (d108_method === "MEASURED") {
      g108_nrl50Target = achToNrl(g109_measured);
    } else if (d108_method === "PH_CLASSIC") {
      g108_nrl50Target = achToNrl(0.6);
    } else if (d108_method === "PH_LOW") {
      g108_nrl50Target = achToNrl(1.0);
    } else if (d108_method === "PH_PLUS") {
      g108_nrl50Target = 0.1;
    } else {
      g108_nrl50Target = nrlTargets[d108_method] || 0;
    }

    // Update NRL50 target with standard formatter
    setCalculatedValue("g_108", g108_nrl50Target, "number-2dp");

    // Calculate ACH50 target with full precision
    const ach50Target =
      d105_vol > 0 && d101_areaAir > 0
        ? g108_nrl50Target * (d101_areaAir / d105_vol) * 3.6
        : 0;

    // Update ACH50 target with standard formatter
    setCalculatedValue("d_109", ach50Target, "number-2dp");

    // Calculate ratio with full precision
    const targetACH = parseFloat(getNumericValue("d_109"));
    const measuredACH =
      d108_method === "MEASURED" ? g109_measured : ach50Target;
    const l109 = targetACH > 0 ? measuredACH / targetACH : 0;

    // Update ratio with standard formatter
    setCalculatedValue("l_109", l109, "percent-0dp");
  }

  function calculateAe10(isReferenceCalculation = false) {
    // Get values with full precision
    const ach50Target = parseFloat(getNumericValue("d_109"));
    // ✅ DUAL-ENGINE: Use correct state based on calculation context
    const volume = parseFloat(
      window.TEUI.parseNumeric(
        getSectionValue("d_105", isReferenceCalculation),
      ) || 0,
    );

    // Calculate with full precision
    const ae10 = volume > 0 ? (ach50Target * volume) / 3600 : 0;

    // Update with standard formatter
    setCalculatedValue("d_110", ae10, "number-3dp");

    // Calculate ratio with full precision
    const refAe10 = 1.68; // Placeholder reference T110
    const l110 = refAe10 > 0 ? ae10 / refAe10 : 0;

    // Update ratio with standard formatter
    setCalculatedValue("l_110", l110, "percent-0dp");
  }

  function calculateNFactor(isReferenceCalculation = false) {
    // Get values with full precision
    const climateZone = parseFloat(getGlobalNumericValue("j_19")) || 6;
    // ✅ DUAL-ENGINE: Use correct state based on calculation context
    const stories =
      parseFloat(
        window.TEUI.parseNumeric(
          getSectionValue("d_103", isReferenceCalculation),
        ) || 0,
      ) || 1.5;
    const shielding =
      getSectionValue("g_103", isReferenceCalculation) || "Normal";

    // Determine zone number
    let zoneNum = 2;
    if (climateZone <= 4) zoneNum = 1;
    else if (climateZone >= 7) zoneNum = 3;

    // Update zone number with integer formatter
    setCalculatedValue("i_110", zoneNum.toString(), "integer");

    // Determine shielding key
    const shieldingKey =
      shielding === "Shielded"
        ? "Shielded"
        : shielding === "Exposed"
          ? "Exposed"
          : "Normal";

    // N-factor lookup table with precise values
    const nFactorTable = {
      1: {
        Shielded: { 1: 18.6, 1.5: 16.7, 2: 14.8, 3: 13.0 },
        Normal: { 1: 15.5, 1.5: 14.0, 2: 12.4, 3: 10.9 },
        Exposed: { 1: 14.0, 1.5: 12.6, 2: 11.2, 3: 9.8 },
      },
      2: {
        Shielded: { 1: 22.2, 1.5: 20.0, 2: 17.8, 3: 15.5 },
        Normal: { 1: 18.5, 1.5: 16.7, 2: 14.8, 3: 13.0 },
        Exposed: { 1: 16.7, 1.5: 15.0, 2: 13.3, 3: 11.7 },
      },
      3: {
        Shielded: { 1: 25.8, 1.5: 23.1, 2: 20.6, 3: 18.1 },
        Normal: { 1: 21.5, 1.5: 19.4, 2: 17.2, 3: 15.1 },
        Exposed: { 1: 19.4, 1.5: 17.4, 2: 15.5, 3: 13.5 },
      },
    };

    // Determine story key with full precision
    let storyKey = 1.5;
    if (stories <= 1) storyKey = 1;
    else if (stories > 1 && stories <= 1.75) storyKey = 1.5;
    else if (stories > 1.75 && stories <= 2.5) storyKey = 2;
    else storyKey = 3;

    // Get n-factor with full precision
    let nFactor = nFactorTable[2]["Normal"][1.5];
    if (nFactorTable[zoneNum]?.[shieldingKey]?.[storyKey]) {
      nFactor = nFactorTable[zoneNum][shieldingKey][storyKey];
    }

    // Update n-factor with standard formatter
    setCalculatedValue("g_110", nFactor, "number-1dp");
  }

  function calculateAirLeakageHeatLoss(isReferenceCalculation = false) {
    // Get necessary values with full precision using parseFloat
    const g108_nrl50Target = parseFloat(getNumericValue("g_108")); // NRL50 Target (L/s*m2)
    const g110_nFactor = parseFloat(getNumericValue("g_110"));

    // ✅ FIX: Read climate data based on calculation type (S03 canonical pattern)
    let d20_hdd, d21_cdd;
    if (isReferenceCalculation) {
      // ✅ PATTERN A: Clean external dependencies via getGlobalNumericValue
      d20_hdd = getGlobalNumericValue("d_20");
      d21_cdd = getGlobalNumericValue("d_21");
    } else {
      // ✅ PATTERN A: Clean external dependencies via getGlobalNumericValue
      d20_hdd = getGlobalNumericValue("d_20");
      d21_cdd = getGlobalNumericValue("d_21");
    }

    const d101_areaAir = parseFloat(getNumericValue("d_101"));
    const h15_conditionedArea = parseFloat(getGlobalNumericValue("h_15")); // Get Conditioned Floor Area from S2

    // Constants from Excel formula structure
    const leakageFactor = 1.21; // Factor representing conversion and heat capacity (Ws/m³K?)
    const hoursPerDay = 24;
    const wattsToKw = 1000;

    // Base calculation factor with full precision
    const baseLeakageCoefficient =
      g110_nFactor > 0
        ? (leakageFactor * g108_nrl50Target * d101_areaAir) / g110_nFactor
        : 0;

    // Calculate with full precision
    const i103_heatloss =
      (baseLeakageCoefficient * d20_hdd * hoursPerDay) / wattsToKw;
    const k103_heatgain =
      (baseLeakageCoefficient * d21_cdd * hoursPerDay) / wattsToKw;

    // Only update DOM for Target calculations (like S11 pattern)
    if (!isReferenceCalculation) {
      setCalculatedValue("i_103", i103_heatloss, "number-2dp-comma");
      setCalculatedValue("k_103", k103_heatgain, "number-2dp-comma");
    }

    // Return calculated values for Reference engine storage
    return {
      i_103: i103_heatloss,
      k_103: k103_heatgain,
    };
  }

  function calculateEnvelopeHeatLossGain(isReferenceCalculation = false) {
    // Get values with full precision using parseFloat
    const d101_areaAir = parseFloat(getNumericValue("d_101"));
    const d102_areaGround = parseFloat(getNumericValue("d_102"));
    const g101_uAir = parseFloat(getNumericValue("g_101"));
    const g102_uGround = parseFloat(getNumericValue("g_102"));

    // ✅ FIX: Read climate data based on calculation type (S03 canonical pattern)
    let d20_hdd, d21_cdd, d22_gfHDD, h22_gfCDD;
    if (isReferenceCalculation) {
      // ✅ PATTERN A: Clean external dependencies via getGlobalNumericValue
      d20_hdd = getGlobalNumericValue("d_20");
      d21_cdd = getGlobalNumericValue("d_21");
      d22_gfHDD = getGlobalNumericValue("d_22");
      h22_gfCDD = getGlobalNumericValue("h_22");
    } else {
      // ✅ PATTERN A: Clean external dependencies via getGlobalNumericValue
      d20_hdd = getGlobalNumericValue("d_20");
      d21_cdd = getGlobalNumericValue("d_21");
      d22_gfHDD = getGlobalNumericValue("d_22");
      h22_gfCDD = getGlobalNumericValue("h_22");
    }

    // Constants
    const hoursPerDay = 24;
    const wattsToKw = 1000;

    // Air-facing envelope calculations (maintain full precision)
    const h101_lossRateAir = (g101_uAir * d20_hdd * hoursPerDay) / wattsToKw;
    const i101_heatlossAir = h101_lossRateAir * d101_areaAir;
    const j101_gainRateAir = (g101_uAir * d21_cdd * hoursPerDay) / wattsToKw;
    const k101_heatgainAir = j101_gainRateAir * d101_areaAir;

    // Ground-facing envelope calculations (maintain full precision)
    const h102_lossRateGround =
      (g102_uGround * d22_gfHDD * hoursPerDay) / wattsToKw;
    const i102_heatlossGround = h102_lossRateGround * d102_areaGround;
    const j102_gainRateGround =
      (g102_uGround * h22_gfCDD * hoursPerDay) / wattsToKw;
    const k102_heatgainGround = j102_gainRateGround * d102_areaGround;

    // Only update DOM for Target calculations (like S11 pattern)
    if (!isReferenceCalculation) {
      setCalculatedValue("h_101", h101_lossRateAir, "number-2dp");
      setCalculatedValue("i_101", i101_heatlossAir, "number-2dp-comma");
      setCalculatedValue("j_101", j101_gainRateAir, "number-2dp");
      setCalculatedValue("k_101", k101_heatgainAir, "number-2dp-comma");
      setCalculatedValue("h_102", h102_lossRateGround, "number-2dp");
      setCalculatedValue("i_102", i102_heatlossGround, "number-2dp-comma");
      setCalculatedValue("j_102", j102_gainRateGround, "number-2dp");
      setCalculatedValue("k_102", k102_heatgainGround, "number-2dp-comma");
    }

    // Return calculated values for Reference engine storage
    return {
      h_101: h101_lossRateAir,
      i_101: i101_heatlossAir,
      j_101: j101_gainRateAir,
      k_101: k101_heatgainAir,
      h_102: h102_lossRateGround,
      i_102: i102_heatlossGround,
      j_102: j102_gainRateGround,
      k_102: k102_heatgainGround,
    };
  }

  function calculateEnvelopeTotals(isReferenceCalculation = false) {
    // Get values with full precision using parseFloat
    const i101 = parseFloat(getNumericValue("i_101"));
    const i102 = parseFloat(getNumericValue("i_102"));
    const i103 = parseFloat(getNumericValue("i_103"));
    const k101 = parseFloat(getNumericValue("k_101"));
    const k102 = parseFloat(getNumericValue("k_102"));
    const k103 = parseFloat(getNumericValue("k_103")); // Air leakage gain
    const h21_capacitanceSetting = getFieldValue("h_21"); // Get Capacitance/Static setting
    const k98_totalEnvelopeGainS11 = parseFloat(getNumericValue("k_98")); // Get S11 total gain

    // Calculate total loss with full precision
    const i104_totalLoss = i101 + i102 + i103;

    // Conditional calculation for k_104 based on Capacitance setting (h_21)
    let k104_totalGain;
    if (h21_capacitanceSetting === "Capacitance") {
      // Use Section 11's total envelope gain (includes solar etc.)
      k104_totalGain = k98_totalEnvelopeGainS11;
    } else {
      // Use SUM(K101:K102) - Air + Ground transmission gain only (exclude leakage k_103)
      k104_totalGain = k101 + k102;
    }

    // Only update DOM for Target calculations (like S11 pattern)
    if (!isReferenceCalculation) {
      setCalculatedValue("i_104", i104_totalLoss, "number-2dp-comma");
      setCalculatedValue("k_104", k104_totalGain, "number-2dp-comma");
    }

    // Calculate percentages with full precision
    const l101 = i104_totalLoss > 0 ? i101 / i104_totalLoss : 0;
    const l102 = i104_totalLoss > 0 ? i102 / i104_totalLoss : 0;
    const l103 = i104_totalLoss > 0 ? i103 / i104_totalLoss : 0;
    const l104 = l101 + l102 + l103;

    // Update percentage values using standard formatters
    if (!isReferenceCalculation) {
      setCalculatedValue("l_101", l101, "percent-2dp");
      setCalculatedValue("l_102", l102, "percent-2dp");
      setCalculatedValue("l_103", l103, "percent-2dp");
      setCalculatedValue("l_104", l104, "percent-0dp");
    }

    // ✅ FIX: Return calculated values for Reference engine storage
    return {
      i_104: i104_totalLoss,
      k_104: k104_totalGain,
      l_101: l101,
      l_102: l102,
      l_103: l103,
      l_104: l104,
    };
  }

  function calculateAll() {
    console.log("[Section12] Running dual-engine calculations...");

    // ✅ ALWAYS run BOTH engines in parallel (corrected from wrong mode-aware approach)
    calculateReferenceModel(); // Reads ReferenceState → stores ref_ prefixed
    calculateTargetModel(); // Reads TargetState → stores unprefixed

    console.log("[Section12] Dual-engine calculations complete");
  }

  /**
   * REFERENCE MODEL ENGINE: Calculate all values using Reference state
   * Uses Reference state values for section-local inputs
   */
  function calculateReferenceModel() {
    console.log("[Section12] Running Reference Model calculations...");

    try {
      // ✅ DUAL-ENGINE: Calculate all metrics using Reference state values
      const volumeResults = calculateVolumeMetrics(true); // true = isReferenceCalculation
      const uValueResults = calculateCombinedUValue(true);
      calculateWWR(true);
      calculateNFactor(true);
      calculateACH50Target(true);
      calculateAe10(true);
      const airLeakageResults = calculateAirLeakageHeatLoss(true);
      const envelopeResults = calculateEnvelopeHeatLossGain(true);
      const envelopeTotalsResults = calculateEnvelopeTotals(true); // ✅ FIX: Capture return value

      // Store Reference Model results with ref_ prefix for downstream sections
      storeReferenceResults(
        volumeResults,
        uValueResults,
        airLeakageResults,
        envelopeResults,
        envelopeTotalsResults,
      );

      // Update reference indicators after all calculations
      updateAllReferenceIndicators();
    } catch (error) {
      console.error("Error during Section 12 calculateReferenceModel:", error);
    }

    console.log("[Section12] Reference Model calculations complete");
  }

  /**
   * Store Reference Model calculation results with ref_ prefix for downstream sections (S14, S15, S04, S01)
   */
  function storeReferenceResults(
    volumeResults,
    uValueResults,
    airLeakageResults,
    envelopeResults,
    envelopeTotalsResults,
  ) {
    if (!window.TEUI?.StateManager) return;

    // Store Reference calculation results with ref_ prefix
    const allResults = {
      ...volumeResults,
      ...uValueResults,
      ...airLeakageResults,
      ...envelopeResults,
      ...envelopeTotalsResults, // ✅ FIX: Include envelope totals (i_104, k_104, etc.)
    };

    Object.entries(allResults).forEach(([fieldId, value]) => {
      if (value !== null && value !== undefined) {
        window.TEUI.StateManager.setValue(
          `ref_${fieldId}`,
          String(value),
          "calculated",
        );
      }
    });

    console.log(
      "[Section12] Reference results stored with ref_ prefix for downstream sections",
    );
  }

  /**
   * TARGET MODEL ENGINE: Calculate all values using Target state
   * Uses Target state values for section-local inputs
   */
  function calculateTargetModel() {
    console.log("[Section12] Running Target Model calculations...");

    try {
      // ✅ DUAL-ENGINE: Calculate all metrics using Target state values
      calculateVolumeMetrics(false); // false = Target calculation
      calculateCombinedUValue(false);
      calculateWWR(false);
      calculateNFactor(false);
      calculateACH50Target(false);
      calculateAe10(false);
      calculateAirLeakageHeatLoss(false);
      calculateEnvelopeHeatLossGain(false);
      calculateEnvelopeTotals(false);

      // Update reference indicators after all calculations
      updateAllReferenceIndicators();
    } catch (error) {
      console.error("Error during Section 12 calculateTargetModel:", error);
    }

    console.log("[Section12] Target Model calculations complete");
  }

  //==========================================================================
  // EVENT HANDLING AND INITIALIZATION
  //==========================================================================

  function registerDependencies() {
    if (!window.TEUI?.StateManager) {
      return;
    }
    const fields = getFields();
    let count = 0;
    Object.entries(fields).forEach(([fieldId, fieldDef]) => {
      if (fieldDef.dependencies && Array.isArray(fieldDef.dependencies)) {
        fieldDef.dependencies.forEach((depId) => {
          if (
            window.TEUI.StateManager.getValue(depId) !== null ||
            document.querySelector(`[data-field-id="${depId}"]`)
          ) {
            window.TEUI.StateManager.registerDependency(depId, fieldId);
            count++;
          }
        });
      }
    });
  }

  function initializeEventHandlers() {
    const sectionElement = document.getElementById("volumeSurfaceMetrics");
    if (!sectionElement) return;

    // ✅ S10 PROVEN PATTERN: Inline dropdown handlers (like working sections)
    const dropdowns = sectionElement.querySelectorAll("select");
    dropdowns.forEach((dropdown) => {
      // Prevent attaching listeners multiple times
      if (dropdown.hasS12Listener) return;

      dropdown.addEventListener("change", function () {
        const fieldId = this.getAttribute("data-field-id");
        if (!fieldId) return;

        ModeManager.setValue(fieldId, this.value, "user-modified");

        // Handle conditional g_109 logic for d_108
        if (fieldId === "d_108") {
          handleConditionalEditability();
        }

        calculateAll();
      });
      dropdown.hasS12Listener = true;
    });

    const editableFields = sectionElement.querySelectorAll(
      '[contenteditable="true"].user-input',
    );
    editableFields.forEach((field) => {
      // Prevent attaching listeners multiple times
      if (field.hasS12Listener) return;

      field.addEventListener("focus", handleFieldFocus);
      field.addEventListener("focusout", handleFieldFocusOut);
      // Blur and Keydown are attached globally now, but keeping local pattern for robustness
      field.addEventListener("blur", handleFieldBlur, true);
      field.addEventListener("keydown", handleFieldKeydown, true);
      field.hasS12Listener = true;
    });

    // Initialize conditional editability state
    handleConditionalEditability();
  }

  // ✅ REMOVED: Now using S10's inline dropdown handler pattern

  function handleFieldFocus(event) {
    event.target.classList.add("editing");
  }

  function handleFieldFocusOut(event) {
    event.target.classList.remove("editing");
  }

  function handleFieldBlur(event) {
    const field = event.target;
    const fieldId = field.getAttribute("data-field-id");
    if (!fieldId) return;

    const numValue = window.TEUI.parseNumeric(field.textContent);
    if (!isNaN(numValue) && isFinite(numValue)) {
      const formattedValue = window.TEUI.formatNumber(numValue, "number-2dp");
      field.textContent = formattedValue;

      // ✅ DUAL-STATE: Store value using ModeManager
      ModeManager.setValue(fieldId, String(numValue), "user-modified");
      calculateAll();
    }
  }

  function handleFieldKeydown(event) {
    const field = event.target;
    if (
      field.hasAttribute("contenteditable") &&
      field.getAttribute("contenteditable") === "true"
    ) {
      if (event.key === "Enter") {
        event.preventDefault();
        field.blur();
      }
    }
  }

  function handleConditionalEditability() {
    const d108Dropdown = document.querySelector(
      'select[data-field-id="d_108"]',
    );
    const g109Cell = document.querySelector('[data-field-id="g_109"]');

    if (!d108Dropdown || !g109Cell) return;

    // ✅ DUAL-STATE: Use ModeManager to get current value
    const currentD108Value =
      ModeManager.getValue("d_108") || d108Dropdown.value;
    const isMeasured = currentD108Value === "MEASURED";

    if (isMeasured) {
      g109Cell.setAttribute("contenteditable", "true");
      g109Cell.classList.add("user-input", "editable");
      g109Cell.classList.remove("disabled-input", "ghosted");
      g109Cell.style.backgroundColor = "#f0f8ff";
      g109Cell.style.color = "#000";
      // If the cell is empty or N/A when switching to Measured, set it to a sensible default.
      if (
        !g109Cell.textContent.trim() ||
        g109Cell.textContent.trim() === "N/A"
      ) {
        g109Cell.textContent = "1.50";
        ModeManager.setValue("g_109", "1.50", "calculated");
      }
    } else {
      g109Cell.setAttribute("contenteditable", "false");
      g109Cell.classList.remove("user-input", "editable");
      g109Cell.classList.add("disabled-input", "ghosted");
      g109Cell.style.backgroundColor = "#f8f9fa";
      g109Cell.style.color = "#6c757d";
      g109Cell.textContent = "N/A";
      ModeManager.setValue("g_109", "0", "calculated");
    }
  }

  function onSectionRendered() {
    if (isInitialized) return;

    console.log(
      "S12: Section rendered - initializing Pattern A Dual-State Module.",
    );

    // 1. Initialize the ModeManager and its internal states
    ModeManager.initialize();

    // 2. Setup the section-specific toggle switch in the header
    injectHeaderControls();

    // 3. Initialize event handlers for this section
    initializeEventHandlers();

    // 4. Sync UI to the default (Target) state
    ModeManager.refreshUI();

    // 5. Add StateManager listeners (including robot fingers)
    addStateManagerListeners();

    // 6. Register with StateManager and dependencies
    registerWithStateManager();
    registerDependencies();

    // 7. Perform initial calculations
    calculateAll();

    // 8. Initialize conditional field state
    handleConditionalEditability();

    // 9. Add section-specific styles
    addCheckmarkStyles();

    isInitialized = true;
    console.log("S12: Pattern A initialization complete.");
  }

  function registerWithStateManager() {
    if (!window.TEUI?.StateManager) return;
    const fields = getFields();
    Object.entries(fields).forEach(([fieldId, fieldDef]) => {
      const currentValue = window.TEUI.StateManager.getValue(fieldId);
      if (
        currentValue === null ||
        currentValue === undefined ||
        window.TEUI.StateManager.getDebugInfo(fieldId)?.state === "default"
      ) {
        if (
          fieldDef.defaultValue !== undefined &&
          fieldDef.defaultValue !== null &&
          fieldDef.defaultValue !== ""
        ) {
          window.TEUI.StateManager.setValue(
            fieldId,
            fieldDef.defaultValue,
            "default",
          );
        }
      }
    });
  }

  function addStateManagerListeners() {
    if (!window.TEUI?.StateManager) return;
    const externalDependencies = [
      // Section 11 Inputs influencing U-Values (g_101, g_102) and Areas (d_101, d_102)
      "d_85",
      "f_85",
      "g_85", // Roof
      "d_86",
      "f_86",
      "g_86", // Walls AG
      "d_87",
      "f_87",
      "g_87", // Floor Exp
      "d_88",
      "g_88", // Doors (Area d_88 comes from S10, listen to g_88 U-Value)
      "d_89",
      "g_89", // Win N (Area d_89 comes from S10, listen to g_89 U-Value)
      "d_90",
      "g_90", // Win E (Area d_90 comes from S10, listen to g_90 U-Value)
      "d_91",
      "g_91", // Win S (Area d_91 comes from S10, listen to g_91 U-Value)
      "d_92",
      "g_92", // Win W (Area d_92 comes from S10, listen to g_92 U-Value)
      "d_93",
      "g_93", // Skylights (Area d_93 comes from S10, listen to g_93 U-Value)
      "d_94",
      "f_94",
      "g_94", // Walls BG
      "d_95",
      "f_95",
      "g_95", // Floor Slab
      "d_96", // Interior Floor Area (Used for d_106)
      // Section 11 Thermal Bridge Penalty
      "d_97",
      // Section 3 Climate Data
      "d_20", // HDD
      "d_21", // CDD
      "d_22", // GF HDD
      "h_22", // GF CDD
      "j_19", // Climate Zone (for N-Factor)
      "h_21", // Capacitance Setting (for k_104)
    ];
    // CRITICAL: Robot fingers connection - MUST run dual-engine for proper Reference storage
    // 📋 WORKPLAN: Consider moving aggregate U-value calculations (g_101, g_102) to S11
    // This would eliminate Robot Fingers bypass issues and better align responsibilities:
    // - S11: All transmission calculations (areas, U-values, thermal bridges)
    // - S12: Air leakage, volume, exposures only
    window.TEUI.StateManager.addListener("d_97", (newValue) => {
      // console.log(`[S12] TB penalty changed to: ${newValue}% - updating U-values`);
      calculateAll(); // ✅ FIX: Run dual-engine instead of Target-only
    });

    // Add other external dependency listeners
    const otherDeps = externalDependencies.filter((dep) => dep !== "d_97");
    otherDeps.forEach((depId) => {
      window.TEUI.StateManager.addListener(
        depId,
        (newValue, oldValue, eventFieldId, state) => {
          if (eventFieldId === depId) {
            calculateAll();
          }
        },
      );
    });

    // CRITICAL: Listen for d_13 changes to update reference indicators
    window.TEUI.StateManager.addListener("d_13", () => {
      console.log("[Section12] d_13 changed - updating reference indicators");
      updateAllReferenceIndicators();
    });

    s12ListenersAdded = true;
    // console.log("[S12 DEBUG] StateManager listeners HAVE BEEN ADDED."); // REMOVE DEBUG LOG
  }

  /**
   * Creates and injects the Target/Reference toggle and Reset button into the section header.
   */
  function injectHeaderControls() {
    const sectionHeader = document.querySelector(
      "#volumeSurfaceMetrics .section-header",
    );
    if (
      !sectionHeader ||
      sectionHeader.querySelector(".local-controls-container")
    ) {
      return; // Already setup or header not found
    }

    const controlsContainer = document.createElement("div");
    controlsContainer.className = "local-controls-container";
    controlsContainer.style.cssText =
      "display: flex; align-items: center; margin-left: auto; gap: 10px;";

    // Reset Button
    const resetButton = document.createElement("button");
    resetButton.innerHTML = "🔄 Reset";
    resetButton.title = "Reset Section 12 to Defaults";
    resetButton.style.cssText =
      "padding: 4px 8px; font-size: 0.8em; background-color: #dc3545; color: white; border: none; border-radius: 4px; cursor: pointer;";

    resetButton.addEventListener("click", (event) => {
      event.stopPropagation();
      if (
        confirm(
          "Are you sure you want to reset all inputs in this section to their defaults? This will clear any saved data for Section 12.",
        )
      ) {
        ModeManager.resetState();
      }
    });

    // Toggle Switch (exact copy from S11)
    const stateIndicator = document.createElement("span");
    stateIndicator.textContent = "TARGET";
    stateIndicator.style.cssText =
      "color: #fff; font-weight: bold; font-size: 0.8em; background-color: rgba(0, 123, 255, 0.5); padding: 2px 6px; border-radius: 4px;";

    const toggleSwitch = document.createElement("div");
    toggleSwitch.style.cssText =
      "position: relative; width: 40px; height: 20px; background-color: #ccc; border-radius: 10px; cursor: pointer;";

    const slider = document.createElement("div");
    slider.style.cssText =
      "position: absolute; top: 2px; left: 2px; width: 16px; height: 16px; background-color: white; border-radius: 50%; transition: transform 0.2s;";

    toggleSwitch.appendChild(slider);

    toggleSwitch.addEventListener("click", (event) => {
      event.stopPropagation();
      const isReference = toggleSwitch.classList.toggle("active");
      if (isReference) {
        slider.style.transform = "translateX(20px)";
        toggleSwitch.style.backgroundColor = "#28a745";
        stateIndicator.textContent = "REFERENCE";
        stateIndicator.style.backgroundColor = "rgba(40, 167, 69, 0.7)";
        ModeManager.switchMode("reference");
      } else {
        slider.style.transform = "translateX(0px)";
        toggleSwitch.style.backgroundColor = "#ccc";
        stateIndicator.textContent = "TARGET";
        stateIndicator.style.backgroundColor = "rgba(0, 123, 255, 0.5)";
        ModeManager.switchMode("target");
      }
    });

    controlsContainer.appendChild(resetButton);
    controlsContainer.appendChild(stateIndicator);
    controlsContainer.appendChild(toggleSwitch);
    sectionHeader.appendChild(controlsContainer);
  }

  function addCheckmarkStyles() {
    let styleElement = document.getElementById("sect12-styles");
    if (!styleElement) {
      styleElement = document.createElement("style");
      styleElement.id = "sect12-styles";
      styleElement.textContent = `
                .checkmark { color: green; font-weight: bold; }
                .warning { color: red; font-weight: bold; }
                .editable { background-color: #f0f8ff; cursor: text; }
                .editing { outline: 1px solid blue; background-color: #e6f2ff; }
                /* .calculated-value { background-color: #f8f9fa; } REMOVED - Style handled globally */
                .highlighted-result { font-weight: bold; background-color: #fff3cd; }
            `;
      document.head.appendChild(styleElement);
    }
  }

  //==========================================================================
  // PUBLIC API
  //==========================================================================

  return {
    getFields: getFields,
    getDropdownOptions: getDropdownOptions,
    getLayout: getLayout,
    initializeEventHandlers: initializeEventHandlers,
    onSectionRendered: onSectionRendered,
    calculateAll: calculateAll,
    calculateCombinedUValue: calculateCombinedUValue,
  };
})();
