# Sankey Diagram Emissions Calculation Documentation

## Current Implementation

The Sankey diagram in Section 16 visualizes energy flows and their associated emissions when "Show Emissions" is toggled on. This document explains how emissions are calculated and displayed, along with known limitations and areas for improvement.

## Emissions Flow Implementation

When emissions are enabled, the diagram shows:

1. **Scope 1 Emissions** (direct emissions from on-site fuel combustion)
   - Colored in red/brown to indicate "dirtier" direct emissions
   - Shown flowing FROM the building TO the E1 Scope 1 Emissions node
   - Sources include gas/oil used for space heating and DHW/SHW

2. **Scope 2 Emissions** (indirect emissions from electricity use)
   - Colored in blue to indicate off-site generation
   - Shown flowing directly FROM energy inputs TO the E2 Scope 2 Emissions node
   - Sources include electricity used for all purposes

### Physical Flow Accuracy

The current implementation accurately represents the physical flow of emissions:

- For gas/oil heating (Scope 1): Fuel enters the building → combusts inside → emissions exit to atmosphere
- For electricity (Scope 2): Emissions are produced at the power plant, not in the building

## TODO: Known Issue - Double Counting DHW/SHW Emissions

**IMPORTANT:** There is a known issue with how emissions are calculated when the same fuel is used for both space heating and domestic hot water (DHW/SHW).

### Current Problem

When both space heating and DHW use the same fuel (e.g., oil or gas):
1. The core TEUI app calculates total emissions by adding fuel used for both purposes, then multiplying by the emissions factor
2. In the Sankey diagram, we're retrieving:
   - Space heating emissions from k_30
   - DHW emissions from j_54
   - Then adding these together

This results in double-counting the DHW emissions, causing a discrepancy between the Sankey diagram and the core TEUI calculations:
- Core TEUI calculates 105,319.71 kg CO2/yr (correct)  
- Our Sankey shows 123,029.98 kg CO2/yr (inflated due to double-counting)

### Proposed Solution

For a proper implementation, we need to handle emissions differently based on fuel type combinations:

1. **Option 1: Use Aggregated Emissions Value**
   - If both systems use the same fuel, pull only from the aggregate value in k_32
   - Split this value proportionally based on the relative energy use of each system

2. **Option 2: Create System-Specific Emissions Fields**
   - Add separate emissions calculation fields in S07 and S13 
   - Have each section calculate and store its own emissions total
   - Pull these separate values directly for the Sankey diagram

### Implementation Plan

The recommended approach is Option 2, as it provides clearer separation of concerns and better maintainability:

1. Add emission calculation cells to Section 7 (DHW) that only account for DHW emissions
2. Add emission calculation cells to Section 13 (Heating) that only account for space heating emissions 
3. Modify the Sankey's `updateEmissionsFlows` function to pull from these specific fields
4. Ensure proper visual representation of flows from each system through the building to the emissions nodes

## Background: Emissions Calculation in TEUI

For reference, here's how emissions are calculated in the core TEUI application:

1. **Space Heating**
   - Energy input is calculated based on demand and system efficiency
   - If gas/oil, emissions = energy input × fuel emissions factor

2. **DHW/SHW**
   - Energy input is calculated based on demand and system efficiency
   - If gas/oil, emissions = energy input × fuel emissions factor

3. **Combined Emissions**
   - When both systems use the same fuel, TEUI calculates a subtotal (k_32)
   - This is the correct total value that should be displayed

## Conclusion

Until this issue is resolved in the core TEUI application, the Sankey diagram may show inflated emissions values when both space heating and DHW use the same fuel. This is a design issue in the overall system structure rather than in the rendering logic of the Sankey diagram.

This should be addressed as part of future work to improve emissions calculation isolation and flow representation in the TEUI application.

---

Last updated: May 2025 