/**
 * 4011-Section04-RF.js (REFACTOR)
 * Actual vs. Target Energy & Carbon (Section 4) - EXCEL-COMPLIANT SIMPLIFICATION
 * 
 * REFACTOR GOAL: Replace 2,800-line over-engineered S04 with Excel-compliant 10-row simplicity
 * 
 * ================================================================================
 * INSTRUCTIONS FOR COMPLETION (Sept 25, 2025 Evening Session):
 * ================================================================================
 * 
 * 🎯 **EXCEL SOURCE REFERENCE**: FORMULAE-3039.csv lines 26-36
 * 
 * **Excel Reality**: S04 should be 10 simple rows with clean formulas:
 * - Row 27 (T.3.1): Total Electricity Use
 * - Row 28 (T.3.2): Total Fossil Gas Use  
 * - Row 29 (T.3.3): Total Propane Use
 * - Row 30 (T.3.4): Total Oil Use
 * - Row 31 (T.3.5): Total Wood Use
 * - Row 32 (E.1.1): Operational GHG & Energy Subtotals
 * - Row 33 (T.3.6): Total Net Energy
 * - Row 34 (T.3.7): Annual Percapita Energy
 * - Row 35 (T.3.8): Primary Energy
 * 
 * 🚨 **CRITICAL DEPENDENCIES** (from Excel analysis):
 * 
 * **UPSTREAM SECTIONS (Read-Only Dependencies):**
 * - **S02**: d_19 (province), h_12 (reporting year), h_15 (area), d_14 (actual/target)
 * - **S06**: d_43 (onsite renewables), i_43 (offsite renewables)  
 * - **S07**: d_51 (water fuel), e_51 (water gas), k_54 (water oil)
 * - **S08**: d_60 (forestry offset) - CRITICAL for wood emissions calculation
 * - **S09**: d_63 (occupants) - for per-capita calculations
 * - **S13**: d_113 (space fuel), h_115 (space gas), f_115 (space oil)
 * - **S15**: d_136 (target electricity total)
 * 
 * **USER INPUT FIELDS (Only 6!):**
 * - **D27**: Electricity kWh/yr (from utility bills)
 * - **D28**: Gas m³/yr (from utility bills)  
 * - **D29**: Propane kg/yr (from utility bills)
 * - **D30**: Oil litres/yr (from utility bills)
 * - **D31**: Wood m³/yr (from utility bills)
 * - **H35**: PER Factor (default 1.0)
 * 
 * 🔧 **EMISSION FACTORS** (Excel XLOOKUP logic):
 * 
 * **Electricity (L27)**: Complex Ontario XLOOKUP by year:
 * ```
 * =IF(D19="ON",XLOOKUP(H12,AEFYear,AEFvalues),IF(D19="AB",650,...))
 * ```
 * Ontario years: 2022=51, 2023=67, 2024=71, 2025=138, etc.
 * Other provinces: AB=650, QC=1, BC=12, SK=720, etc.
 * 
 * **Static Factors**:
 * - Gas (L28): 1921 gCO2e/m³
 * - Propane (L29): 2970 gCO2e/kg  
 * - Oil (L30): 2753 gCO2e/litre
 * - Wood (L31): 150 kgCO2e/m³
 * 
 * 🌲 **WOOD EMISSIONS OFFSET** (Critical S08 Integration):
 * ```
 * Excel G32: =SUM(G27:G31)-(D60*1000)  // Actual emissions with wood offset
 * Excel K32: =SUM(K27:K31)-(D60*1000)  // Target emissions with wood offset  
 * ```
 * D60 from S08 represents forestry carbon sequestration in MT/yr
 * 
 * ⚡ **RENEWABLE ENERGY OFFSET** (S06 Integration):
 * ```
 * Excel F27: =D27-D43-I43  // Actual electricity minus renewables
 * Excel J27: =H27-D43-I43  // Target electricity minus renewables
 * ```
 * 
 * 🏠 **DUAL FUEL SYSTEMS** (S07/S13 Integration):
 * ```
 * Excel H28: =IF(AND(D113="Gas", D51="Gas"), E51+H115, IF(D51="Gas", E51, IF(D113="Gas", H115, 0)))
 * ```
 * Handles cases where both space (S13) and water (S07) heating use same fuel
 * 
 * 🎯 **IMPLEMENTATION STRATEGY**:
 * 
 * 1. **Start with Pattern A dual-state architecture** (proven in S02/S03)
 * 2. **6 user input fields only** in TargetState/ReferenceState defaults
 * 3. **Simple calculation functions** matching Excel formulas exactly
 * 4. **NO fallback patterns** - fail fast if upstream dependencies missing
 * 5. **Dual-engine calculateAll()** - always run both Target and Reference
 * 6. **Clean StateManager listeners** - only for direct dependencies
 * 
 * 🚫 **ANTI-PATTERNS TO AVOID**:
 * 
 * - ❌ **100+ fallback patterns** masking missing dependencies
 * - ❌ **Complex listener infrastructure** for every possible change  
 * - ❌ **Hardcoded defaults** duplicating field definitions
 * - ❌ **Over-engineered state management** beyond Excel's simplicity
 * - ❌ **Function override patterns** - use direct calculation routing instead
 * 
 * 📊 **VALIDATION CRITERIA**:
 * 
 * - **Excel Parity**: All calculations must match FORMULAE-3039.csv exactly
 * - **State Isolation**: Reference changes don't affect Target calculations  
 * - **Dependency Detection**: Missing upstream values cause clear errors (no silent fallbacks)
 * - **Code Simplicity**: Target <500 lines total (vs current 2,800+)
 * - **Performance**: Sub-100ms calculation time for all 10 rows
 * 
 * 🔄 **MIGRATION PLAN**:
 * 
 * 1. **Build clean S04-RF.js** with Excel-compliant architecture
 * 2. **Test against known values** from current S04 for parity
 * 3. **Verify dual-state isolation** works correctly
 * 4. **Replace current S04.js** once validation complete
 * 5. **Update index.html** to load S04-RF.js instead of S04.js
 * 
 * ================================================================================
 * READY FOR IMPLEMENTATION - EXCEL SIMPLICITY OVER ARCHITECTURAL COMPLEXITY
 * ================================================================================
 */

// Ensure namespace exists
window.TEUI = window.TEUI || {};
window.TEUI.SectionModules = window.TEUI.SectionModules || {};

// Section 4: Actual vs. Target Energy & Carbon Module (Excel-Compliant Refactor)
window.TEUI.SectionModules.sect04 = (function () {
  
  //==========================================================================
  // EXCEL-COMPLIANT FIELD DEFINITIONS (FORMULAE-3039.csv lines 26-36)
  //==========================================================================
  
  const sectionRows = {
    // Unit Subheader
    header: {
      id: "04-ID",
      rowId: "04-ID", 
      label: "Actual vs. Target Energy & Carbon",
      cells: {
        c: { content: "SECTION 4. Actual vs. Target Energy & Carbon", classes: ["section-header"] },
        d: { content: "ACTUAL ENERGY", classes: ["section-subheader"] },
        e: { content: "UNITS", classes: ["section-subheader"] },
        f: { content: "ACTUAL NET", classes: ["section-subheader"] },
        g: { content: "E.1 EMISSIONS\nkgCO2e/yr", classes: ["section-subheader"] },
        h: { content: "TARGET ENERGY", classes: ["section-subheader"] },
        i: { content: "UNITS", classes: ["section-subheader"] },
        j: { content: "TARGET NET", classes: ["section-subheader"] },
        k: { content: "E.1 EMISSIONS\nkgCO2e/yr", classes: ["section-subheader"] },
        l: { content: "EMISSION FACTORS", classes: ["section-subheader"] },
        m: { content: "UNITS", classes: ["section-subheader"] },
        n: { content: "", classes: ["section-subheader"] },
      },
    },

    // Row 27: T.3.1 Total Electricity Use
    27: {
      id: "T.3.1",
      rowId: "T.3.1",
      label: "Total Electricity Use",
      cells: {
        c: { label: "T.3.1 Total Electricity Use" },
        d: {
          fieldId: "d_27",
          type: "editable",
          value: "132938", // Excel default (utility bill input)
          classes: ["user-input", "editable"],
          section: "actualTargetEnergy",
        },
        e: { content: "kWh/yr" },
        f: {
          fieldId: "f_27", 
          type: "calculated",
          value: "0",
          section: "actualTargetEnergy",
          // Excel: =D27-D43-I43 (actual minus renewables)
        },
        g: {
          fieldId: "g_27",
          type: "calculated", 
          value: "0",
          section: "actualTargetEnergy",
          // Excel: =F27*L27/1000 (actual emissions)
        },
        h: {
          fieldId: "h_27",
          type: "calculated",
          value: "0", 
          section: "actualTargetEnergy",
          // Excel: =D136 (from S15 target electricity)
        },
        i: { content: "kWh/yr" },
        j: {
          fieldId: "j_27",
          type: "calculated",
          value: "0",
          section: "actualTargetEnergy", 
          // Excel: =H27-D43-I43 (target minus renewables)
        },
        k: {
          fieldId: "k_27",
          type: "calculated",
          value: "0",
          section: "actualTargetEnergy",
          // Excel: =J27*L27/1000 (target emissions)
        },
        l: {
          fieldId: "l_27",
          type: "calculated",
          value: "51",
          section: "actualTargetEnergy",
          // Excel: XLOOKUP Ontario emission factor by year
        },
        m: { content: "gCO2e/kWh" },
        n: {},
      },
    },

    // Row 28: T.3.2 Total Fossil Gas Use  
    28: {
      id: "T.3.2",
      rowId: "T.3.2",
      label: "Total Fossil Gas Use",
      cells: {
        c: { label: "T.3.2 Total Fossil Gas Use" },
        d: {
          fieldId: "d_28",
          type: "editable",
          value: "0", // User utility bill input
          classes: ["user-input", "editable"],
          section: "actualTargetEnergy",
        },
        e: { content: "m³/yr" },
        f: {
          fieldId: "f_28",
          type: "calculated", 
          value: "0",
          section: "actualTargetEnergy",
          // Excel: =D28*0.0373*277.7778 (gas to ekWh)
        },
        g: {
          fieldId: "g_28",
          type: "calculated",
          value: "0", 
          section: "actualTargetEnergy",
          // Excel: =D28*L28/1000 (gas emissions)
        },
        h: {
          fieldId: "h_28",
          type: "calculated",
          value: "0",
          section: "actualTargetEnergy", 
          // Excel: Complex dual-fuel logic from S07/S13
        },
        i: { content: "m³/yr" },
        j: {
          fieldId: "j_28",
          type: "calculated",
          value: "0",
          section: "actualTargetEnergy",
          // Excel: =H28*0.0373*277.7778 (target gas to ekWh)
        },
        k: {
          fieldId: "k_28", 
          type: "calculated",
          value: "0",
          section: "actualTargetEnergy",
          // Excel: =H28*L28/1000 (target gas emissions)
        },
        l: { content: "1921" }, // Static gas emission factor
        m: { content: "gCO2e/m³" },
        n: {},
      },
    },

    // Row 29: T.3.3 Total Propane Use
    29: {
      id: "T.3.3", 
      rowId: "T.3.3",
      label: "Total Propane Use",
      cells: {
        c: { label: "T.3.3 Total Propane Use" },
        d: {
          fieldId: "d_29",
          type: "editable",
          value: "0", // User utility bill input
          classes: ["user-input", "editable"],
          section: "actualTargetEnergy",
        },
        e: { content: "kg/yr" },
        f: {
          fieldId: "f_29",
          type: "calculated",
          value: "0",
          section: "actualTargetEnergy",
          // Excel: =D29*14.019 (propane to ekWh)
        },
        g: {
          fieldId: "g_29", 
          type: "calculated",
          value: "0",
          section: "actualTargetEnergy",
          // Excel: =D29*L29/1000 (propane emissions)
        },
        h: {
          fieldId: "h_29",
          type: "calculated", 
          value: "0",
          section: "actualTargetEnergy",
          // Excel: =D29 (target mirrors actual for user-controlled fuel)
        },
        i: { content: "kg/yr" },
        j: {
          fieldId: "j_29",
          type: "calculated",
          value: "0", 
          section: "actualTargetEnergy",
          // Excel: =H29*14.019 (target propane to ekWh)
        },
        k: {
          fieldId: "k_29",
          type: "calculated",
          value: "0",
          section: "actualTargetEnergy", 
          // Excel: =H29*L29/1000 (target propane emissions)
        },
        l: { content: "2970" }, // Static propane emission factor
        m: { content: "gCO2e/kg" },
        n: {},
      },
    },

    // Row 30: T.3.4 Total Oil Use
    30: {
      id: "T.3.4",
      rowId: "T.3.4", 
      label: "Total Oil Use",
      cells: {
        c: { label: "T.3.4 Total Oil Use" },
        d: {
          fieldId: "d_30",
          type: "editable",
          value: "0", // User utility bill input
          classes: ["user-input", "editable"], 
          section: "actualTargetEnergy",
        },
        e: { content: "litres/yr" },
        f: {
          fieldId: "f_30",
          type: "calculated",
          value: "0",
          section: "actualTargetEnergy",
          // Excel: =D30*36.72*0.2777778 (oil to ekWh)
        },
        g: {
          fieldId: "g_30",
          type: "calculated", 
          value: "0",
          section: "actualTargetEnergy",
          // Excel: =D30*L30/1000 (oil emissions)
        },
        h: {
          fieldId: "h_30",
          type: "calculated",
          value: "0",
          section: "actualTargetEnergy",
          // Excel: Complex dual-fuel logic from S07/S13  
        },
        i: { content: "litres/yr" },
        j: {
          fieldId: "j_30",
          type: "calculated",
          value: "0",
          section: "actualTargetEnergy",
          // Excel: =H30*36.72*0.2777778 (target oil to ekWh)
        },
        k: {
          fieldId: "k_30",
          type: "calculated", 
          value: "0",
          section: "actualTargetEnergy",
          // Excel: =H30*L30/1000 (target oil emissions)
        },
        l: { content: "2753" }, // Static oil emission factor
        m: { content: "gCO2e/litre" },
        n: {},
      },
    },

    // Row 31: T.3.5 Total Wood Use
    31: {
      id: "T.3.5",
      rowId: "T.3.5",
      label: "Total Wood Use", 
      cells: {
        c: { label: "T.3.5 Total Wood Use" },
        d: {
          fieldId: "d_31",
          type: "editable",
          value: "0", // User utility bill input
          classes: ["user-input", "editable"],
          section: "actualTargetEnergy",
        },
        e: { content: "m³/yr" },
        f: {
          fieldId: "f_31",
          type: "calculated",
          value: "0", 
          section: "actualTargetEnergy",
          // Excel: =D31*1000 (wood to ekWh)
        },
        g: {
          fieldId: "g_31",
          type: "calculated",
          value: "0",
          section: "actualTargetEnergy",
          // Excel: =H31*L31 (wood emissions - already kgCO2e)
        },
        h: {
          fieldId: "h_31",
          type: "calculated",
          value: "0",
          section: "actualTargetEnergy", 
          // Excel: =D31 (target mirrors actual for user-controlled fuel)
        },
        i: { content: "m³/yr" },
        j: {
          fieldId: "j_31",
          type: "calculated",
          value: "0",
          section: "actualTargetEnergy",
          // Excel: =H31*1000 (target wood to ekWh)
        },
        k: {
          fieldId: "k_31",
          type: "calculated", 
          value: "0",
          section: "actualTargetEnergy",
          // Excel: =H31*L31 (target wood emissions)
        },
        l: { content: "150" }, // Static wood emission factor
        m: { content: "kgCO2e/m³" },
        n: {},
      },
    },

    // Row 32: E.1.1 Operational GHG & Energy Subtotals
    32: {
      id: "E.1.1",
      rowId: "E.1.1", 
      label: "Operational GHG & Energy Subtotals",
      cells: {
        c: { label: "E.1.1 Operational GHG & Energy Subtotals" },
        d: { content: "" },
        e: { content: "" },
        f: {
          fieldId: "f_32",
          type: "calculated",
          value: "0",
          section: "actualTargetEnergy",
          // Excel: =SUM(F27:F31) (actual energy subtotal)
        },
        g: {
          fieldId: "g_32", 
          type: "calculated",
          value: "0",
          section: "actualTargetEnergy",
          // Excel: =SUM(G27:G31)-(D60*1000) (actual emissions minus wood offset)
        },
        h: { content: "" },
        i: { content: "" },
        j: {
          fieldId: "j_32",
          type: "calculated",
          value: "0", 
          section: "actualTargetEnergy",
          // Excel: =SUM(J27:J31) (target energy subtotal)
        },
        k: {
          fieldId: "k_32",
          type: "calculated",
          value: "0",
          section: "actualTargetEnergy",
          // Excel: =SUM(K27:K31)-(D60*1000) (target emissions minus wood offset)
        },
        l: { content: "" },
        m: { content: "" },
        n: {},
      },
    },

    // Row 33: T.3.6 Total Net Energy
    33: {
      id: "T.3.6",
      rowId: "T.3.6",
      label: "Total Net Energy",
      cells: {
        c: { label: "T.3.6 Total Net Energy" },
        d: {
          fieldId: "d_33", 
          type: "calculated",
          value: "0",
          section: "actualTargetEnergy",
          // Excel: =(SUM(F27:F31)-D43-I43)/277.7777 (actual to GJ)
        },
        e: { content: "GJ/yr" },
        f: { content: "" },
        g: { content: "" },
        h: {
          fieldId: "h_33",
          type: "calculated",
          value: "0",
          section: "actualTargetEnergy",
          // Excel: =(SUM(J27:J31)-I43-D43)/277.7777 (target to GJ)
        },
        i: { content: "GJ/yr" },
        j: { content: "" },
        k: { content: "" },
        l: { content: "" },
        m: { content: "" },
        n: {},
      },
    },

    // Row 34: T.3.7 Annual Percapita Energy
    34: {
      id: "T.3.7",
      rowId: "T.3.7",
      label: "Annual Percapita Energy", 
      cells: {
        c: { label: "T.3.7 Annual Percapita Energy" },
        d: {
          fieldId: "d_34",
          type: "calculated",
          value: "0",
          section: "actualTargetEnergy",
          // Excel: =F32/D63 (actual energy per person)
        },
        e: { content: "kWh Actual" },
        f: {
          fieldId: "f_34",
          type: "calculated", 
          value: "0",
          section: "actualTargetEnergy",
          // Excel: =D33/D63 (actual GJ per person)
        },
        g: { content: "GJ Actual" },
        h: {
          fieldId: "h_34",
          type: "calculated",
          value: "0",
          section: "actualTargetEnergy",
          // Excel: =J32/D63 (target energy per person)
        },
        i: { content: "kWh Target" },
        j: {
          fieldId: "j_34", 
          type: "calculated",
          value: "0",
          section: "actualTargetEnergy",
          // Excel: =H33/D63 (target GJ per person)
        },
        k: { content: "GJ Target" },
        l: { content: "" },
        m: { content: "" },
        n: {},
      },
    },

    // Row 35: T.3.8 Primary Energy
    35: {
      id: "T.3.8",
      rowId: "T.3.8",
      label: "Primary Energy",
      cells: {
        c: { label: "T.3.8 Primary Energy" },
        d: {
          fieldId: "d_35",
          type: "calculated", 
          value: "0",
          section: "actualTargetEnergy",
          // Excel: =IF(D14="Targeted Use", J27*H35, F27*H35)
        },
        e: { content: "kWh/yr" },
        f: {
          fieldId: "f_35",
          type: "calculated",
          value: "0",
          section: "actualTargetEnergy",
          // Excel: =D35/H15 (primary energy intensity)
        },
        g: { content: "kWh/m²/yr" },
        h: {
          fieldId: "h_35",
          type: "editable",
          value: "1.0", // User input: PER Factor
          classes: ["user-input", "editable"],
          section: "actualTargetEnergy",
        },
        i: { content: "PER Factor" },
        j: { content: "" },
        k: { content: "" },
        l: { content: "" },
        m: { content: "" },
        n: {},
      },
    },
  };

  //==========================================================================
  // TODO: IMPLEMENTATION CHECKLIST FOR TONIGHT
  //==========================================================================
  
  /**
   * 1. ✅ DUAL-STATE ARCHITECTURE (Pattern A - proven in S02/S03):
   *    - TargetState with 6 user input defaults only (d_27, d_28, d_29, d_30, d_31, h_35)
   *    - ReferenceState with same defaults (utility bills are "ground truth")  
   *    - ModeManager facade with switchMode, refreshUI, updateCalculatedDisplayValues
   * 
   * 2. ✅ EXCEL-COMPLIANT CALCULATIONS:
   *    - calculateRow27() through calculateRow35() matching Excel formulas exactly
   *    - getElectricityEmissionFactor() with Ontario XLOOKUP logic
   *    - Dual fuel system logic for gas/oil (S07+S13 integration)
   *    - Wood emissions offset integration (S08 d_60)
   * 
   * 3. ✅ CLEAN DEPENDENCY MANAGEMENT:
   *    - NO fallback patterns (fail fast if dependencies missing)
   *    - StateManager listeners for direct dependencies only
   *    - Mode-aware external dependency reading (ref_ vs unprefixed)
   * 
   * 4. ✅ DUAL-ENGINE PATTERN:
   *    - calculateAll() runs both calculateTargetModel() and calculateReferenceModel()
   *    - Target calculations store unprefixed values for S01 consumption
   *    - Reference calculations store ref_ prefixed values for S01 consumption
   * 
   * 5. ✅ VALIDATION TARGETS:
   *    - Excel parity: All formulas match FORMULAE-3039.csv exactly
   *    - State isolation: Reference changes don't affect Target calculations
   *    - Code simplicity: <500 lines total (vs current 2,800+)
   *    - Performance: Sub-100ms calculation time
   */

  //==========================================================================
  // PLACEHOLDER IMPLEMENTATION (TO BE COMPLETED TONIGHT)
  //==========================================================================
  
  // TODO: Add Pattern A dual-state architecture
  // TODO: Add Excel-compliant calculation functions  
  // TODO: Add clean StateManager listeners
  // TODO: Add proper field extraction methods

  //==========================================================================
  // PUBLIC API (MINIMAL INTERFACE)
  //==========================================================================
  
  return {
    // Standard section interface
    getFields: function() { /* TODO */ },
    getDropdownOptions: function() { /* TODO */ },
    getLayout: function() { /* TODO */ },
    
    // Initialization 
    onSectionRendered: function() { /* TODO */ },
    initializeEventHandlers: function() { /* TODO */ },
    
    // Calculations
    calculateAll: function() { /* TODO */ },
    
    // Dual-state management
    ModeManager: null, // TODO: Implement
  };
})();