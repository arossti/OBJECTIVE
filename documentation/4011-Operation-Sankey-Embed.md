# Workplan: Embedding Sankey Diagram into TEUI 4.0.11 - Section 16

## 0. Progress Update (November 2023)

**The Sankey diagram integration is now substantially complete!** The diagram is functional and integrated within the TEUI application as Section 16, displaying energy flows sourced directly from the TEUI StateManager.

**Core Accomplishments:**
* Successful embedding of the D3.js Sankey diagram within the Section 16 framework
* Dynamic data sourcing from TEUI StateManager
* Functional UI controls for activating/refreshing the diagram, toggling emissions, adjusting node spacing and width
* Proper event handling and diagram updates that work with the TEUI lifecycle
* Resolution of most critical rendering issues, with visible nodes, links, and labels

**Remaining Technical Challenges:**

1. **Style vs. Attr D3 Issues:** 
   * We identified a critical distinction in D3 between `.style("stroke-width", ...)` and `.attr("stroke-width", ...)` methods
   * In SVG, width properties for paths must be set using the `style()` method for proper rendering
   * Using `attr()` for certain properties like stroke width causes links to disappear or have zero width
   * This explains why links would sometimes render as hairlines or disappear entirely despite having valid flow values

2. **Object vs. Numeric References:**
   * D3 Sankey requires careful handling of data references between nodes and links
   * Links need consistent handling of whether `source` and `target` are numeric indices or object references
   * When transitioning between these formats (which happens during data updates), issues arise with links disappearing
   * The issue is compounded when `style()` vs `attr()` problems occur simultaneously

3. **Activate vs. Refresh Button Behavior:**
   * The "Activate Sankey" button creates the initial diagram with default structure but sometimes fails to populate link values
   * The "Refresh Sankey" button updates existing elements but sometimes causes links to momentarily flash or blink before settling
   * Different code paths through the rendering logic explain these differences
   * Activate creates nodes first then links, while Refresh attempts to update all elements simultaneously
   * This difference impacts animation timing and flow

4. **Animation Refinements Needed:**
   * The original SANKEY3035ORIGINAL.html had beautiful left-to-right flow animations
   * Our current implementation has more basic transitions without the coordinated sequencing
   * The issue stems from how transitions, delays, and duration are managed
   * We need to properly sequence animations so nodes appear first, then links flow from left to right

5. **StateManager Integration:**
   * When TEUI data changes, the Sankey needs explicit manual refresh
   * We don't currently have StateManager listeners to detect and propagate relevant changes
   * Improvements to the refresh logic would make this more seamless

**Next Steps:**

1. **Animation Refinement:**
   * Study and implement the animation timing from SANKEY3035ORIGINAL.html
   * Add proper sequencing with appropriately timed delays for the left-to-right flow effect
   * Ensure animations work consistently for both initial load and refresh operations

2. **Claude.ai Professional Integration:**
   * We plan to bring this project to a professional Claude.ai Sonnet 3.7 agent on the web
   * Since the original file was generated there, it may be better positioned to help with:
     * Comprehensive code reduction for improved maintainability
     * Animation refinements based on the original implementation
     * Performance optimization for faster rendering and smoother transitions
     * Improvements to the way D3 style vs attribute setting is handled

3. **UI Consistency:**
   * Align Section 16 button styling with the more modern approach in Section 17
   * Add fullscreen functionality similar to Section 17
   * Improve overall visual consistency between visualization sections

This project demonstrates successful integration of a complex D3 visualization into the TEUI framework. The remaining refinements will primarily focus on visual polish and animation quality, rather than core functionality.

## 1. Objective

Integrate the D3.js Sankey diagram, previously a standalone application (`SANKEY3035.html`), into `Section16` of the TEUI 4.011 Calculator application. The integrated Sankey diagram will visualize energy flows based on data sourced directly from the TEUI application's central `StateManager`.

## 2. Key Requirements

*   **Rendering Context:** The Sankey diagram must render within the designated view area of `Section16`.
*   **Data Sourcing:** All data required for the Sankey diagram (nodes, links, and their values) must be fetched from `window.TEUI.StateManager`. The standalone Sankey's internal data structures (`INITIAL_DATA`), file import mechanisms, and its own `StateManager` will be removed or bypassed.
*   **UI Controls:**
    *   The complex control panel from `SANKEY3035.html` (including system efficiency sliders, detailed input tables for energy supplied/lost) will **not** be replicated. This data will be derived from the TEUI `StateManager`.
    *   The following UI controls from the standalone Sankey will be retained and adapted:
        1.  "Show/Hide Emissions" toggle button.
        2.  "Energy Balance" button (to toggle Sankey node padding, possibly re-labeled e.g., "Toggle Node Spacing").
        3.  "Node Width" slider.
        4.  An "Activate Sankey / Update Sankey" button to control rendering.
    *   **TODO (Future):** A display for energy costs can be added later, once cost calculation methods are fully implemented and integrated into the TEUI core application.
*   **Core Logic Adaptation:** The D3.js rendering logic, tooltip functionality, and basic UI interactions for the retained controls from `SANKEY3035.html` should be preserved and adapted to the new context.
*   **Section Structure:** `sections/4011-Section16.js` must adhere to the TEUI application's standard section module structure (as defined in `sections/4011-SectionXX.js` template), implementing methods such as `getFields()`, `getLayout()`, `initializeEventHandlers()`, `onSectionRendered()`, and a primary rendering/update function (analogous to `calculateAll()` or a new `renderSankey()` method).
*   **Conditional Rendering:** The Sankey diagram should not update continuously with every minor change in the TEUI application. Its rendering and data updates will be primarily controlled by the "Activate Sankey / Update Sankey" button or when the section becomes visibly active.

## 3. Integration Steps

### A. Scaffolding `sections/4011-Section16.js`

1.  **Module Setup:** Update `sections/4011-Section16.js` based on the `SectionXX.js` template.
2.  **Layout Definition (`getLayout()`):**
    *   Define a primary `div` or `svg` container for the Sankey diagram (e.g., `<svg id="sankeySection16Container" height="700" width="100%"></svg>`). The height might need adjustment (taller than Section 17's graph).
    *   Define a `div` to house the retained UI controls (Emissions toggle, Node Spacing, Node Width, and the new "Activate Sankey / Update Sankey" button).
    *   Define a `div` for the Sankey tooltip (e.g., `<div id="sankeySection16Tooltip" class="tooltip" style="display: none;"></div>`).
    *   Ensure all IDs are unique to `Section16`.

### B. Adapting Sankey Core Logic

1.  **Code Extraction:** Identify and extract the core D3.js visualization and Sankey-specific JavaScript logic from `SANKEY3035.html`. This will primarily come from "Script Block 5: D3 Visualization System" and potentially parts of "Script Block 1" for the initial node/link structure definition (as a template).
2.  **Encapsulation:** Move this core rendering logic into `Section16.js`. It might be beneficial to encapsulate it within an object (e.g., `SankeyDiagramS16`) similar to the structure in `SANKEY3035.html`.
3.  **Context Adaptation:**
    *   Modify the Sankey logic to target the new SVG container (`#sankeySection16Container`) and tooltip div (`#sankeySection16Tooltip`) defined in the `Section16` layout.
    *   Remove or adapt all references to the standalone Sankey's global variables (e.g., `data`, `originalData`, `COPh`, `isGasHeating`, `showEmissions`, `widthMultiplier`). These will now be managed by or sourced from the TEUI `StateManager` or the internal state of `Section16.js`.
    *   **Note on `SANKEY3035.html`:** As part of this process, the original `SANKEY3035.html` file can be stripped down to its essential D3.js visualization script blocks and CSS, removing its standalone application shell (HTML body, file inputs, full control panel, etc.) to prepare it as a reference for porting. This aids in future-proofing by isolating the core reusable visualization logic.
    *   **Number Formatting:** Ensure any numerical values displayed by the Sankey (e.g., in tooltips or labels) use the global `window.TEUI.formatNumber()` function for consistency with the main application.

### C. Data Sourcing from TEUI `StateManager`

1.  **Data Fetching Function:** Implement a function within `Section16.js` (e.g., to be called from `onSectionRendered` and when updates are needed *if the section is active*) that:
    *   Retrieves all necessary energy values, parameters, and flags from `window.TEUI.StateManager.getValue()`.
2.  **Data Structure Mapping:**
    *   The `INITIAL_DATA` structure (nodes and links) from `SANKEY3035.html` will serve as the *structural template* for the Sankey diagram.
    *   The *values* for these links must be dynamically populated using data from the TEUI `StateManager`.
    *   **Mapping Process:**
        *   Iterate through the predefined Sankey links (from the adapted `INITIAL_DATA` template).
        *   For each link, identify its conceptual meaning (e.g., "Occupant Gains to Building").
        *   Use the `EXCEL_MAPPING.NODE_VALUES` from `SANKEY3035.html` to find the original Excel cell reference (e.g., "REPORT!I64" for "G.1.2 Occupant Gains").
        *   Cross-reference this cell (e.g., "I64") with `sources of truth 3037/3037DOM.csv` to determine the corresponding TEUI field ID (e.g., `i_64`).
        *   Fetch the live value using `window.TEUI.StateManager.getValue('i_64')`.
        *   Update the `.value` property of the current link in the Sankey data structure.
    *   This mapping will need to be robust, handling potential discrepancies or missing data gracefully (e.g., by using default values of `0.001` for flows if a TEUI value is not found, to maintain diagram integrity).
    *   **D3.js Data References:** The Sankey diagram requires careful handling of data references for D3.js. Data fetched from `StateManager` (often raw strings or numbers) must be processed into the correct format (nodes as objects, links with source/target potentially as indices or objects) that the D3 Sankey layout engine expects. The original `SANKEY3035.html` logic for converting between numeric indices and object references (e.g., `NodeReferenceHandler`) should be adapted and rigorously tested. Ensure that the distinction between object references and numeric indices is maintained as per D3's requirements.
3.  **Node Visibility:** Some nodes in the original Sankey (like `GasExhaust`) had conditional visibility. This logic should be retained and driven by TEUI state (e.g., `StateManager.getValue('heatingSystem')`).
    *   **Exhaust Node Mapping:** The mapping of exhaust flows is critical. The original `SANKEY3035.html` had its own calculation for `GasExhaust`. The TEUI application has different sources for exhaust depending on the selected heating system (e.g., gas, oil). **Consult with the human Architect to determine the correct TEUI `StateManager` fields to use for each exhaust-related node and link in the Sankey diagram. Do not assume mappings. This includes identifying sources for oil and other fuel types if applicable.**

### D. UI Controls Adaptation & Event Handling (`initializeEventHandlers()`)

1.  **Re-implementation:** Add the HTML for the "Show/Hide Emissions" toggle, "Energy Balance" (Node Spacing) button, "Node Width" slider, and a new **"Activate Sankey / Update Sankey"** button to the `Section16` layout.
2.  **Event Listeners:** In `initializeEventHandlers()`:
    *   Connect listeners for these controls.
    *   These listeners should update local state variables within `Section16.js` (e.g., `this.showEmissionsFlag`, `this.nodePaddingSetting`, `this.nodeWidthMultiplier`, `this.isSankeyActive`).
    *   Crucially, they must trigger a re-render of the Sankey diagram using the updated local state and fresh data from `StateManager` *only if the Sankey is active*.
    *   The "Activate Sankey / Update Sankey" button will control whether the Sankey diagram performs its data fetching and rendering, helping to manage performance.
    *   The `showEmissions` state will toggle the visibility and calculation of emission-related flows.
    *   The "Energy Balance" button will modify the `nodePadding` parameter of the D3 Sankey layout.
    *   The "Node Width" slider will adjust the `nodeWidth` parameter of the D3 Sankey layout.

### E. Emissions Handling Logic Adaptation

1.  **Core Functions:** The functions `updateEmissionsFlows()`, `calculateElectricalEmissions()`, and `calculateHeatingEmissions()` from `SANKEY3035.html` contain the logic for adding emissions-related links to the diagram. This logic needs to be adapted.
2.  **Data Source:**
    *   Instead of using its own `CONFIG.EMISSIONS` or a local `gridIntensity` input field, the adapted functions must fetch these parameters (e.g., gas intensity, electricity grid intensity) from the TEUI `StateManager` (e.g., `StateManager.getValue('l_27')` for grid intensity, as per `3037DOM.csv`).
    *   The energy values used in these emission calculations (e.g., "G.2 Plug Light Equipment", "M.2.1.D Energy Input") must also be fetched from the TEUI `StateManager` using the mapping process described in Step C.
    *   **Exhaust Emissions:** Pay close attention to how exhaust emissions are calculated, linking them to the correctly mapped exhaust flows determined in Step C.3.

### F. Styling

1.  **CSS Extraction:** Identify and extract relevant CSS rules from the `<style>` block in `SANKEY3035.html`. Focus on styles for:
    *   `.node`
    *   `.link`
    *   `.node-label`
    *   `.tooltip`
    *   Any styles for the retained UI controls.
2.  **Integration:** Add these styles to `4011-styles.css`. It is recommended to create a dedicated subsection within `4011-styles.css` (e.g., commented `/* --- Section 16 Sankey Styles --- */`) to maintain the specific look, feel, and color scheme of the original Sankey application. This ensures that the careful design work is preserved.
3.  **Scoping:** Ensure CSS rules are appropriately scoped to `Section16` to prevent conflicts with global styles or other sections (e.g., by prefixing selectors like `#sankeySection16Container .node`).

### G. Integration with TEUI Application Lifecycle

1.  **Registration:** Ensure `Section16.js` is correctly registered with the TEUI `FieldManager` and `SectionIntegrator` so it appears in the application.
2.  **Initial Render (`onSectionRendered()`):** This method should be the primary entry point to:
    *   Initialize the Sankey diagram instance (D3 setup).
    *   Set up the event listener for the "Activate Sankey / Update Sankey" button.
    *   Initially, the Sankey may not render fully until activated by the user. A placeholder message or a static image could be displayed.
3.  **Dynamic Updates & Conditional Rendering:**
    *   The Sankey diagram should **not** re-render on every minor change in the TEUI application to conserve resources. This is a key difference from the standalone app's behavior.
    *   Rendering and data updates should primarily be triggered by:
        *   The user clicking the "Activate Sankey / Update Sankey" button.
        *   The section becoming active (e.g., selected in a tabbed view or scrolled into view in vertical mode), if the "Activate" mechanism is designed to respond to section visibility.
    *   If a more dynamic update is desired *while active*, listeners (`window.TEUI.StateManager.addListener()`) can be conditionally attached/detached based on the Sankey's active state for key summary fields that would significantly alter the diagram.
    *   The `calculateAll()` method (or a new `renderSankey()` method) of `Section16` will be responsible for fetching data from `StateManager` and re-rendering the D3 diagram when triggered appropriately (not necessarily on every `calculateAll` call from the main app).

## 4. Data Mapping Strategy (Elaboration)

*   The `INITIAL_DATA` (nodes and links array) from `SANKEY3035.html` will serve as the foundational structure for the Sankey diagram in `Section16`. This structure defines the nodes and their connections.
*   The `EXCEL_MAPPING.NODE_VALUES` object from `SANKEY3035.html` provides the link between human-readable flow names (e.g., "G.1.2 Occupant Gains") and their original Excel cell locations (e.g., "REPORT!I64").
*   The `sources of truth 3037/3037DOM.csv` file maps these TEUI-wide Excel cell references (e.g., "I64" from "REPORT!I64") to specific TEUI field IDs (e.g., `i_64`).
*   **Implementation in `Section16.js`:**
    1.  Maintain a copy of the `INITIAL_DATA.nodes` and `INITIAL_DATA.links` (or a streamlined version) as the base structure for the Sankey data.
    2.  Create a mapping function (e.g., `updateSankeyLinkValuesFromStateManager()`).
    3.  This function will iterate through its local copy of the links array.
    4.  For each link that represents a dynamic energy flow:
        *   Identify the `source.name` and `target.name` of the link.
        *   Look up the corresponding Excel cell reference using the `SANKEY3035.html`'s `EXCEL_MAPPING` (e.g., if `source.name` is "G.1.2 Occupant Gains", the mapping might point to "REPORT!I64" which represents the *value* of this flow). Some flows are direct (source to target), others are aggregations or splits which will need careful handling based on the original Sankey logic.
        *   Extract the cell identifier (e.g., "I64").
        *   Consult `3037DOM.csv` to find the TEUI field ID associated with this cell (e.g., `i_64`).
        *   Fetch the current value using `window.TEUI.StateManager.getValue('i_64')`.
        *   Update the `value` property of the link in the local Sankey data structure. Ensure a minimum flow value (e.g., 0.001) if the TEUI value is zero or null, to prevent D3 Sankey errors with zero-value links.
    5.  After updating all relevant link values, pass the modified nodes and links data to the D3 Sankey rendering function.
    *   **Exhaust Node Data Mapping:** As mentioned in Step C.3, the source of truth for exhaust flows (e.g., from gas or oil heating systems) must come from the TEUI `StateManager`. This requires careful identification of the correct TEUI field IDs for `M.2.5 Exhaust` (cell I115 in `3037DOM.csv` for gas, potentially other fields for oil/propane if applicable) and any other relevant values that constitute exhaust heat not delivered to the building. The original Sankey's `GasExhaust` node logic will need to be adapted to sum these values appropriately. **Architect consultation is mandatory for this mapping.**

## 5. Considerations & Potential Challenges

*   **Performance:** Fetching numerous values from `StateManager` and re-rendering the D3 Sankey diagram, even on demand, should be efficient. The "Activate Sankey / Update Sankey" button strategy is key to managing this.
*   **Sankey Dimensions & Responsiveness:** Ensure the Sankey diagram scales correctly within the `Section16` container and handles window resizing gracefully. The D3 Sankey `resize()` method from `SANKEY3035.html` should be adapted and potentially only called when the section is visible/active.
*   **Error Handling:** Implement robust error handling for cases where expected data is not found in `StateManager` or if data types are mismatched, especially during the data mapping phase.
*   **Code Cleanup:** Thoroughly remove all unused JavaScript code from `SANKEY3035.html` that pertains to its standalone operation (file handling, its own state management, full control panel logic, etc.). The `SANKEY3035.html` file itself can be archived or kept as a simplified reference for the D3 logic.
*   **Direct DOM vs. TEUI `FieldManager`:** The UI controls (buttons, slider) should ideally be defined and managed via the TEUI `FieldManager` if they fit that paradigm, or created directly in the `getLayout()` HTML if they are highly custom to the Sankey visualization. Given their interactive nature tied closely to the D3 visualization, direct creation in `getLayout()` and event handling in `initializeEventHandlers()` might be more straightforward for this specialized section.
*   **CSS Conflicts:** Diligently test for and resolve any CSS conflicts between the Sankey-specific styles and the main TEUI application styles.
*   **Initial State & Activation:** Determine the initial state of the Sankey diagram (e.g., blank, placeholder, or rendered with default data if activated by default). The "Activate Sankey / Update Sankey" button provides user control over when the potentially resource-intensive rendering occurs.

This workplan provides a comprehensive roadmap for integrating the Sankey diagram. The primary focus will be on adapting the existing D3 logic to source data from the TEUI `StateManager` and operate within the TEUI section lifecycle. 