# TEUI 4.011 - Section 10 Refactor Workplan

**Goal:** Refactor `sections/4011-Section10.js` (Radiant Gains) for improved performance, maintainability, and reduced file size by applying the centralized calculation pattern established during the Section 11 refactor.

**Current Status:**
*   Section 10 calculates solar gains for various orientations (Doors, Windows N/E/S/W, Skylights).
*   The current implementation (`~1759` lines) likely contains significant code duplication for calculating gains across similar rows (73-78).
*   Potential for performance improvements and enhanced readability.

**Proposed Refactoring Strategy (Leveraging Section 11 Pattern):**

1.  **Identify Core Logic:** Analyze the existing `calculateOrientationGains` function to confirm the core logic for calculating heating gains (`i_XX`) and cooling gains (`k_XX`) for a single row (e.g., Row 73 - Doors) based on Area, Orientation, SHGC, Winter Shading, Summer Shading, and Gain Factor.

2.  **Centralize Calculation Function:** Refine or ensure `calculateOrientationGains` is robust and parameterized to accept the `rowId` (or necessary field IDs) as input.

3.  **Configuration Array (Optional but Recommended):** Define a configuration array listing the rows (73-78) and any specific properties needed if variations exist (though Section 10 rows seem highly similar).
    ```javascript
    const orientationConfig = [
        { row: 73, /* any specific flags if needed */ },
        { row: 74, /* ... */ },
        // ... rows 75-78
    ];
    ```

4.  **Refactor `calculateSolarGains` / `calculateAll`:**
    *   Modify the main calculation trigger function (`calculateSolarGains` or equivalent) to loop through the configuration array (or simply iterate 73-78).
    *   Call the parameterized `calculateOrientationGains` function for each row.
    *   Keep the subsequent calls to `calculateSubtotals` and `calculateUtilizationFactors` after the loop.

5.  **Initial Implementation Focus:**
    *   Following the Section 11 method, consider starting the refactor by creating a *new temporary file* (`Section10-Refactor.js`).
    *   Implement the structure with *only* the header and Row 73 (Doors) initially.
    *   Perfect the centralized calculation function (`calculateOrientationGains`) and helper logic using only Row 73.
    *   Once Row 73 is working correctly in the refactored structure, incrementally add the configurations/definitions for Rows 74-78.

6.  **Helper Function Review:** Evaluate existing helpers (`getNumericValue`, `setCalculatedValue`, `formatNumber`, etc.) for potential consolidation or reliance on global utilities (`window.TEUI.*`) as per `README.md` guidelines.

7.  **Visual Indicators:** Ensure the recently added dot indicators and left-alignment for columns J and L are preserved or correctly re-implemented within the refactored structure, potentially by moving that logic into the `updateHeatingPercentages` and `updateCoolingPercentages` functions or similar post-calculation update steps.

**Benefits:**
*   Significant reduction in code duplication and file size (Target < 700 lines).
*   Improved code readability and maintainability.
*   Consistent calculation approach aligned with Section 11 refactor.

**Next Steps:**
*   Begin refactor in a separate branch, possibly starting with a minimal implementation (Header + Row 73).
*   Implement and test the parameterized `calculateOrientationGains` function.
*   Incrementally add remaining rows (74-78).
*   Refactor/consolidate helper functions.
*   Verify calculations and visual indicators against Excel baseline. 