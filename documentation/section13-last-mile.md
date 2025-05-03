# Section 13 Last Mile Workplan v.1.3 2025.05.04 (Updated)

## Problem Overview (Revised)

Initial investigations suggested StateManager propagation issues, but further analysis revealed the root cause of incorrect cooling calculations in Section 13 stemmed from the calculation logic itself:

1.  **Incorrect Outdoor Humidity Ratio:** The `calculateHumidityRatios` function was using the general `coolingSeasonMeanRH` (55.85%) when calculating the average outdoor humidity ratio (`coolingState.humidityRatioAvg`, equivalent to Excel's `A62`). The corresponding Excel formula for `A62` specifically uses a different, hardcoded 70% RH value (`A57`) via an intermediate step (`A58`) for this particular calculation. This discrepancy resulted in an incorrect `humidityRatioDifference` (`A63`).
2.  **Incorrect Free Cooling Limit (`h_124`):** Due to the incorrect humidity difference, the latent adjustment term in the free cooling calculation was wrong. More significantly (see Root Cause Analysis), the JS calculation was based on the total building air mass instead of the ventilation flow rate, leading to `h_124` being calculated far lower (~16.53 kWh/yr) than the expected Excel value (~37,322 kWh/yr).
3.  **Incorrect Mitigated CED (`m_129`):** Consequently, `m_129`, which depends on `h_124`, was calculated incorrectly (~46,840 kWh/yr instead of ~10,521 kWh/yr).
4.  **Recursive Function Calls:** Separately, the `calculateFreeCoolingLimit` and `calculateFreeCooling` functions were observed to be calling each other or themselves recursively, leading to console flooding and potential performance issues.

## Architectural Principles (README.md)

These principles from `README.md` remain critical:

1.  **StateManager as Single Source of Truth**: All values must be stored and retrieved through StateManager.
2.  **Cross-Section Communication**: Sections communicate only through StateManager.
3.  **Proper State Types**: Use correct state types ('calculated', 'user-modified', etc.).
4.  **Listener Pattern for Calculated Fields**: Use `StateManager.addListener` in the *dependent* section for changes in *calculated* source fields from other sections.

## Root Cause Analysis (Revised)

Two primary issues were identified:

1.  **Humidity Ratio RH Discrepancy:** The core calculation issue for the *humidity difference* was traced to the difference between Excel's method for `A62` and the initial JavaScript implementation:
    -   **Excel (`A62`)**: Uses `A58` (Outdoor Partial Pressure calculated with **70%** RH) in the numerator.
        - `A58 = A56 * A57` (where `A56` is Psat@AvgTemp and `A57` is 70%)
        - `A62 = 0.62198 * A58 / (E15 - A56)`
    -   **Initial JS (`humidityRatioAvg`)**: Used `coolingState.partialPressure` (Outdoor Partial Pressure calculated with **55.85%** RH) in the numerator.
        - `coolingState.partialPressure = coolingState.pSatAvg * coolingState.coolingSeasonMeanRH` (where `coolingSeasonMeanRH` was 55.85%)
        - `coolingState.humidityRatioAvg = 0.62198 * coolingState.partialPressure / (atmPressure - pSatAvgOutdoor)`
    This was corrected in Commit `92bbc76`.

2.  **Free Cooling Basis (Volume vs. Flow Rate):** The primary reason for the large magnitude difference in the calculated `h_124` value was identified:
    -   **JavaScript (`calculateFreeCoolingLimit`)**: Was calculating potential based on the total building air mass (derived from Building Volume `d_105`).
    -   **Excel (Formulas for `A55`, `A64`)**: Calculates potential based on the energy exchange possible via the ventilation *flow rate* (`h_120`), calculating power (Watts) first.
    Free cooling relies on the rate of air exchange, making the ventilation flow rate the correct physical basis.

## Implemented Fixes (Commit `92bbc76`)

The following targeted fixes were implemented in `sections/4011-Section13.js`:

1.  **Corrected Humidity Ratio Calculation:**
    - The `calculateHumidityRatios` function was modified to use the required **70% RH** when calculating the outdoor component (`coolingState.humidityRatioAvg`), aligning with Excel's `A62` logic.
    ```javascript
    // In calculateHumidityRatios():
    const outdoorRH_forA62 = 0.70; 
    const pPartialOutdoor_forA62 = pSatAvgOutdoor * outdoorRH_forA62;
    // ...
    coolingState.humidityRatioAvg = 0.62198 * pPartialOutdoor_forA62 / (atmPressure - pSatAvgOutdoor); 
    ```

2.  **Recursion Protection:**
    - Global flags and checks were added to `calculateFreeCoolingLimit` and `calculateFreeCooling` to prevent infinite loops.

## Current Status & Next Steps

-   **Status:**
    - The recursion issue is resolved.
    - The outdoor humidity ratio calculation step now uses the correct 70% RH.
    - The `h_124` (Free Cooling Limit) value is updating dynamically (~16.53 kWh/yr) but is significantly lower than the Excel target (~37,322 kWh/yr).
    - The primary reason for this remaining discrepancy is identified as the JS code using building volume instead of ventilation flow rate for the free cooling calculation basis.
    - **Historical Note:** The correct target value for `h_124` (37,322.83 kWh/yr) *was* observed transiently during previous debugging phases (ref: `Section13-troubleshooting.md`, line 195) before the 70% RH fix, but was overwritten. This suggests the volume vs. flow rate issue is the primary blocker preventing the correct value from being calculated and persisting now.
    - Basic functionality (dropdowns, sliders triggering calculations) appears intact.
-   **Next Steps:**
    1.  **Code Cleanup:** Refactor `sections/4011-Section13.js` to remove excessive console logs, commented-out code blocks, and potentially redundant helper functions.
    2.  **Refactor `calculateFreeCoolingLimit`:** Modify this function to base its calculation on the **ventilation flow rate (`h_120`)** instead of the building volume (`d_105`), following the methodology derived from the Excel formulas (`A55`, `A64`). The goal is to achieve the target `h_124` value of **~37,322.83 kWh/yr**.
    3.  **Detailed Calculation Verification:** Once `h_124` matches the target, systematically compare other related calculations (e.g., `m_129`, `i_122`, `m_124`) against the Excel formulas to ensure full parity.
    4.  **Implement Corrections:** Apply any further minor corrections identified during verification.
    5.  **Final Verification:** Test thoroughly under various input conditions.

This approach prioritizes correcting the core calculation methodology for free cooling to align with the Excel model and achieve the target value for `h_124`.
