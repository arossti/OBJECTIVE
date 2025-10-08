// sections/4012-Section16C.js
// Cooling Season Sankey Diagram Module
// Modular file to keep S16.js manageable

window.TEUI = window.TEUI || {};
window.TEUI.CoolingSankey = (function () {
  "use strict";

  // Cooling Season Sankey Structure Template
  const COOLING_SANKEY_STRUCTURE_TEMPLATE = {
    nodes: [
      // Center node
      { name: "Building", color: "#4A96BA" }, // [0]

      // LEFT SIDE - ENERGY GAINED (Red/Orange Hues)
      { name: "B.4 Roof", color: "#FFB6A3" }, // [1] - Envelope transmission gains
      { name: "B.5 Walls Ae", color: "#FFB6A3" }, // [2] - Above grade wall gains
      { name: "B.7.0 Doors", color: "#FFB6A3" }, // [3] - Door transmission gains
      { name: "B.8.1 Window Area North", color: "#FFCC99" }, // [4] - North window transmission
      { name: "B.8.2 Window Area East", color: "#FFCC99" }, // [5] - East window transmission
      { name: "B.8.3 Window Area South", color: "#FFCC99" }, // [6] - South window transmission
      { name: "B.8.4 Window Area West", color: "#FFCC99" }, // [7] - West window transmission
      { name: "Skylights", color: "#FFCC99" }, // [8] - Skylight transmission
      { name: "B.9 Walls BG", color: "#FFB6A3" }, // [9] - Below grade walls (conditional)
      { name: "B.10 Floor Slab", color: "#FFB6A3" }, // [10] - Floor slab (conditional)
      { name: "G.7 Doors", color: "#FFCC99" }, // [11] - Door solar gains
      { name: "G.8.1 Windows N", color: "#FFCC99" }, // [12] - North window solar
      { name: "G.8.2 Windows E", color: "#FFCC99" }, // [13] - East window solar
      { name: "G.8.3 Windows S", color: "#FFCC99" }, // [14] - South window solar
      { name: "G.8.4 Windows W", color: "#FFCC99" }, // [15] - West window solar
      { name: "B.19.6 Air Leakage", color: "#FFA07A" }, // [16] - Air infiltration gains
      { name: "V.4.1 Incoming Ventil. Energy", color: "#FFDAB9" }, // [17] - Incoming ventilation
      { name: "B.12 TB Penalty", color: "#FFB6A3" }, // [18] - Thermal bridge penalty (conditional)
      { name: "G.1.2 Occupant Gains", color: "#FF8C69" }, // [19] - Internal gains from people
      { name: "Plug/Light/Eqpt. Subtotals", color: "#FFB6A3" }, // [20] - Equipment gains
      { name: "DHW System Losses", color: "#FFB6A3" }, // [21] - Hot water system losses

      // RIGHT SIDE - ENERGY REMOVED (Blue Hues)
      { name: "T.5.2 CED less Free Cool - VX", color: "#A5D3ED" }, // [22] - Cooling energy demand
      { name: "B.9 Walls BG (Removal)", color: "#A5D3ED" }, // [23] - Below grade cooling benefit
      { name: "B.10 Floor Slab (Removal)", color: "#A5D3ED" }, // [24] - Floor slab cooling benefit
      { name: "Ventilation Free Cooling/Vent Capacity", color: "#B0E0E6" }, // [25] - Free cooling
      { name: "V.3.3 Ventilation Exhaust", color: "#B0E0E6" }, // [26] - Exhaust ventilation
      { name: "B.12 TB Penalty (Removal)", color: "#A5D3ED" }, // [27] - TB penalty removal
    ],

    links: [
      // Energy Gained → Building (will be populated with actual values)
      { source: 1, target: 0, value: 0.0001, id: "RoofGain" },
      { source: 2, target: 0, value: 0.0001, id: "WallsAeGain" },
      { source: 3, target: 0, value: 0.0001, id: "DoorsGain" },
      { source: 4, target: 0, value: 0.0001, id: "WinNorthGain" },
      { source: 5, target: 0, value: 0.0001, id: "WinEastGain" },
      { source: 6, target: 0, value: 0.0001, id: "WinSouthGain" },
      { source: 7, target: 0, value: 0.0001, id: "WinWestGain" },
      { source: 8, target: 0, value: 0.0001, id: "SkylightsGain" },
      { source: 9, target: 0, value: 0.0001, id: "WallsBGGain" },
      { source: 10, target: 0, value: 0.0001, id: "FloorSlabGain" },
      { source: 11, target: 0, value: 0.0001, id: "DoorSolarGain" },
      { source: 12, target: 0, value: 0.0001, id: "WinNSolarGain" },
      { source: 13, target: 0, value: 0.0001, id: "WinESolarGain" },
      { source: 14, target: 0, value: 0.0001, id: "WinSSolarGain" },
      { source: 15, target: 0, value: 0.0001, id: "WinWSolarGain" },
      { source: 16, target: 0, value: 0.0001, id: "AirLeakageGain" },
      { source: 17, target: 0, value: 0.0001, id: "IncomingVentGain" },
      { source: 18, target: 0, value: 0.0001, id: "TBPenaltyGain" },
      { source: 19, target: 0, value: 0.0001, id: "OccupantGains" },
      { source: 20, target: 0, value: 0.0001, id: "EquipmentGains" },
      { source: 21, target: 0, value: 0.0001, id: "DHWLosses" },

      // Building → Energy Removed
      { source: 0, target: 22, value: 0.0001, id: "BuildingToCED" },
      { source: 0, target: 23, value: 0.0001, id: "BuildingToWallsBGRemoval" },
      { source: 0, target: 24, value: 0.0001, id: "BuildingToSlabRemoval" },
      { source: 0, target: 25, value: 0.0001, id: "BuildingToFreeCool" },
      { source: 0, target: 26, value: 0.0001, id: "BuildingToVentExhaust" },
      { source: 0, target: 27, value: 0.0001, id: "BuildingToTBRemoval" },
    ],
  };

  /**
   * Get cooling Sankey data from Calculator state
   * Maps values from BALANCE.csv rows 44-69 to existing Calculator state variables
   */
  function getCoolingSankeyData() {
    const state = window.TEUI.Calculator.state;

    if (!state) {
      console.error("CoolingSankey: Calculator state not available");
      return {
        nodes: JSON.parse(
          JSON.stringify(COOLING_SANKEY_STRUCTURE_TEMPLATE.nodes),
        ),
        links: [],
      };
    }

    // Deep copy the template
    const sankeyData = {
      nodes: JSON.parse(
        JSON.stringify(COOLING_SANKEY_STRUCTURE_TEMPLATE.nodes),
      ),
      links: [],
    };

    // Helper function to safely get state value
    const getStateValue = (key) => {
      const value = state[key];
      return typeof value === "number" && !isNaN(value) ? value : 0;
    };

    // Minimum threshold for link visibility (same as heating Sankey)
    const MIN_VALUE = 0.0001;

    // Map cooling season values from Calculator state
    // Reference: BALANCE.csv rows 46-68, columns D (gained) and F (removed)

    // ENERGY GAINED (Left Side) → Building
    const energyGainedLinks = [
      {
        source: 1,
        target: 0,
        value: getStateValue("k_85"),
        id: "RoofGain",
      }, // B.4 Roof
      {
        source: 2,
        target: 0,
        value: getStateValue("k_86"),
        id: "WallsAeGain",
      }, // B.5 Walls Ae
      {
        source: 3,
        target: 0,
        value: getStateValue("k_88"),
        id: "DoorsGain",
      }, // B.7.0 Doors
      {
        source: 4,
        target: 0,
        value: getStateValue("k_89"),
        id: "WinNorthGain",
      }, // B.8.1 Window North
      {
        source: 5,
        target: 0,
        value: getStateValue("k_90"),
        id: "WinEastGain",
      }, // B.8.2 Window East
      {
        source: 6,
        target: 0,
        value: getStateValue("k_91"),
        id: "WinSouthGain",
      }, // B.8.3 Window South
      {
        source: 7,
        target: 0,
        value: getStateValue("k_92"),
        id: "WinWestGain",
      }, // B.8.4 Window West
      {
        source: 8,
        target: 0,
        value: getStateValue("k_93"),
        id: "SkylightsGain",
      }, // Skylights
      {
        source: 11,
        target: 0,
        value: getStateValue("k_73"),
        id: "DoorSolarGain",
      }, // G.7 Doors
      {
        source: 12,
        target: 0,
        value: getStateValue("k_74"),
        id: "WinNSolarGain",
      }, // G.8.1 Windows N
      {
        source: 13,
        target: 0,
        value: getStateValue("k_75"),
        id: "WinESolarGain",
      }, // G.8.2 Windows E
      {
        source: 14,
        target: 0,
        value: getStateValue("k_76"),
        id: "WinSSolarGain",
      }, // G.8.3 Windows S
      {
        source: 15,
        target: 0,
        value: getStateValue("k_77"),
        id: "WinWSolarGain",
      }, // G.8.4 Windows W
      {
        source: 16,
        target: 0,
        value: getStateValue("k_103"),
        id: "AirLeakageGain",
      }, // B.19.6 Air Leakage
      {
        source: 17,
        target: 0,
        value: getStateValue("d_122"),
        id: "IncomingVentGain",
      }, // V.4.1 Incoming Ventilation
      {
        source: 19,
        target: 0,
        value: getStateValue("k_64"),
        id: "OccupantGains",
      }, // G.1.2 Occupant Gains
      {
        source: 20,
        target: 0,
        value: getStateValue("k_70"),
        id: "EquipmentGains",
      }, // Plug/Light/Eqpt
      {
        source: 21,
        target: 0,
        value: getStateValue("k_69"),
        id: "DHWLosses",
      }, // DHW System Losses
    ];

    // Handle conditional nodes: B.9 Walls BG, B.10 Floor Slab, B.12 TB Penalty
    // These can be either gains (positive) or removals (negative)
    const k_94 = getStateValue("k_94"); // B.9 Walls BG
    const k_95 = getStateValue("k_95"); // B.10 Floor Slab
    const k_97 = getStateValue("k_97"); // B.12 TB Penalty

    // If positive, add to gained side; if negative, add to removed side
    if (k_94 > MIN_VALUE) {
      energyGainedLinks.push({
        source: 9,
        target: 0,
        value: k_94,
        id: "WallsBGGain",
      });
    }

    if (k_95 > MIN_VALUE) {
      energyGainedLinks.push({
        source: 10,
        target: 0,
        value: k_95,
        id: "FloorSlabGain",
      });
    }

    if (k_97 > MIN_VALUE) {
      energyGainedLinks.push({
        source: 18,
        target: 0,
        value: k_97,
        id: "TBPenaltyGain",
      });
    }

    // ENERGY REMOVED (Right Side) ← Building
    const energyRemovedLinks = [
      {
        source: 0,
        target: 22,
        value: getStateValue("m_129"),
        id: "BuildingToCED",
      }, // T.5.2 CED less Free Cool
      {
        source: 0,
        target: 26,
        value: getStateValue("d_123"),
        id: "BuildingToVentExhaust",
      }, // V.3.3 Ventilation Exhaust
    ];

    // Handle negative values for conditional nodes (cooling benefits)
    if (k_94 < -MIN_VALUE) {
      energyRemovedLinks.push({
        source: 0,
        target: 23,
        value: Math.abs(k_94),
        id: "BuildingToWallsBGRemoval",
      });
    }

    if (k_95 < -MIN_VALUE) {
      energyRemovedLinks.push({
        source: 0,
        target: 24,
        value: Math.abs(k_95),
        id: "BuildingToSlabRemoval",
      });
    }

    if (k_97 < -MIN_VALUE) {
      energyRemovedLinks.push({
        source: 0,
        target: 27,
        value: Math.abs(k_97),
        id: "BuildingToTBRemoval",
      });
    }

    // Ventilation Free Cooling (c_124 or h_124)
    const freeCooling = Math.max(
      getStateValue("c_124"),
      getStateValue("h_124"),
    );
    if (freeCooling > MIN_VALUE) {
      energyRemovedLinks.push({
        source: 0,
        target: 25,
        value: freeCooling,
        id: "BuildingToFreeCool",
      });
    }

    // Combine all links and filter out zero/tiny values
    const allLinks = [...energyGainedLinks, ...energyRemovedLinks].filter(
      (link) => link.value > MIN_VALUE,
    );

    sankeyData.links = allLinks;

    console.log(
      "CoolingSankey: Generated data with",
      allLinks.length,
      "links",
    );
    return sankeyData;
  }

  // Public API
  return {
    getCoolingSankeyData: getCoolingSankeyData,
    COOLING_SANKEY_STRUCTURE_TEMPLATE: COOLING_SANKEY_STRUCTURE_TEMPLATE,
  };
})();
