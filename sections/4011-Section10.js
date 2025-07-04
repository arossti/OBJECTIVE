window.TEUI.SectionModules.sect10 = (function () {
  //==========================================================================
  // MODE MANAGER (Dual-State Support)
  //==========================================================================
  const ModeManager = {
    currentMode: "target",
    switchMode: function(mode) {
      if (mode !== "target" && mode !== "reference") return;
      if (this.currentMode === mode) return;
      
      this.currentMode = mode;
      console.log(`S10: Switched to ${mode.toUpperCase()} mode`);
      
      if (mode === "reference") {
        this.setReferenceDefaults();
      }
      
      this.refreshUI();
    },

    initializePrefixedState: function() {
      const fields = getFields();
      
      Object.entries(fields).forEach(([fieldId, field]) => {
        if (field.defaultValue !== undefined) {
          window.TEUI.StateManager.setValue(`target_${fieldId}`, field.defaultValue, "default");
          window.TEUI.StateManager.setValue(`ref_${fieldId}`, field.defaultValue, "default");
        }
      });
      
      console.log("S10: Prefixed state initialized from field definitions");
    },

    setReferenceDefaults: function() {
      // Section 10 Reference defaults (code minimums)
      const referenceDefaults = {
        ref_d_74: "20.00",    // North windows: Code minimum WWR
        ref_d_75: "20.00",    // East windows: Code minimum WWR  
        ref_d_76: "20.00",    // South windows: Code minimum WWR
        ref_d_77: "20.00",    // West windows: Code minimum WWR
        ref_d_78: "0.00",     // Skylights: None by default
        ref_e_73: "Average",  // Door: Average orientation
        ref_f_73: "0.40",     // Door SHGC: Code maximum
        ref_f_74: "0.40",     // Window SHGC: Code maximum
        ref_f_75: "0.40",
        ref_f_76: "0.40",
        ref_f_77: "0.40",
        ref_f_78: "0.40",
        ref_d_80: "NRC 40%",  // Standard utilization method
      };

      Object.entries(referenceDefaults).forEach(([fieldId, defaultValue]) => {
        if (!window.TEUI.StateManager.getValue(fieldId)) {
          window.TEUI.StateManager.setValue(fieldId, defaultValue, "default");
        }
      });
      
      console.log("S10: Reference defaults set");
    },

    refreshUI: function() {
      const prefix = this.currentMode === "target" ? "target_" : "ref_";
      const sectionElement = document.getElementById("envelopeRadiantGains");
      if (!sectionElement) return;
      
      const editableFields = sectionElement.querySelectorAll("[data-field-id]");
      editableFields.forEach((field) => {
        const fieldId = field.getAttribute("data-field-id");
        const stateValue = window.TEUI.StateManager.getValue(`${prefix}${fieldId}`);
        
        if (stateValue !== null && stateValue !== undefined) {
          if (field.tagName === "SELECT") {
            field.value = stateValue;
          } else if (field.type === "range") {
            field.value = stateValue;
            const displayElement = document.querySelector(`[data-display-for="${fieldId}"]`);
            if (displayElement) {
              displayElement.textContent = `${stateValue}%`;
            }
          } else if (field.hasAttribute("contenteditable")) {
            field.textContent = stateValue;
          }
        }
      });
      
      setTimeout(() => calculateAll(), 50);
    }
  };

  window.TEUI.sect10 = window.TEUI.sect10 || {};
  window.TEUI.sect10.ModeManager = ModeManager;
})(); 