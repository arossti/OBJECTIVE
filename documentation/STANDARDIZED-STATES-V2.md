# Standardized Dual-State Management Architecture (SSv2)

**Version:** 2.0 (Draft)
**Date:** 2025-05-24
**Objective:** To define a clear, robust, and maintainable architectural pattern for managing dual calculation states (Application/Target and Reference) within the TEUI application, prioritizing code honesty, clarity, and true state isolation.

## 1. Core Philosophy: "Honest Code"

This architecture is founded on the principle that code should be transparent and directly reflect its intent. 

- **Clarity over Cleverness:** Solutions should be straightforward and easy to understand, avoiding overly complex or opaque mechanisms.
- **Direct Representation:** The structure of the state and the flow of data should directly map to the conceptual model of two independent-yet-related calculation engines.
- **No Disguises:** Avoid CSS-only visual tricks or JavaScript hacks to simulate behavior that isn't genuinely supported by the underlying state logic. If two states are different, the system should manage them as distinct entities with clear rules for interaction and display.
- **Maintainability:** Prioritize designs that are easy to debug, modify, and extend by current and future developers, including those working in a FOSS collaborative environment.

This document aims to provide a practical guide for implementing and refactoring application sections to adhere to this philosophy, ensuring a reliable and understandable codebase.

## 2. Fundamental Dual-State Structure

The system will manage two primary, distinct state objects, globally accessible via the `StateManager`:

-   **`TEUI.StateManager.applicationState = {};`**
    -   This object holds all input values (user-modified, imported, defaults) and calculated values pertaining to the **Application Model** (also referred to as the Target or Design Model).
    -   It represents the user's primary design or analysis scenario.

-   **`TEUI.StateManager.referenceState = {};`**
    -   This object holds all input values (derived from standards, carried over from application state, or independently user-modified in Reference Mode) and calculated values pertaining to the **Reference Model**.
    -   It represents a baseline, code-compliant, or alternative scenario for comparison.

**Key Principles for State Objects:**

-   **Isolation:** These two state objects are fundamentally separate. Operations on one (e.g., calculating the Application Model) should not directly mutate the other, except through clearly defined carry-over mechanisms during Reference State initialization.
-   **Comprehensive:** Each state object should be capable of holding all necessary data (`fieldId: value` pairs) for its respective model to perform all its calculations.
-   **Single Source of Truth:** For any given calculation pass (Application or Reference), the corresponding state object is the definitive source for all input values for that pass.

## 3. State Accessors and Mutators (API)

All interactions with the `applicationState` and `referenceState` objects MUST occur through a well-defined API provided by the `StateManager`. Direct manipulation of these state objects from outside `StateManager` is prohibited.

Key functions include:

-   **`TEUI.StateManager.getApplicationValue(fieldId: string): any`**
    -   Retrieves the current value for the given `fieldId` from the `applicationState`.
    -   Returns the raw stored value (typically a string for user inputs, or a string representation of a calculated number).
    -   Returns `null` or `undefined` if the field is not found.

-   **`TEUI.StateManager.setApplicationValue(fieldId: string, value: any, source: string): void`**
    -   Sets the value for the given `fieldId` in the `applicationState`.
    -   `value` should be the raw value to store (e.g., string for inputs, `number.toString()` for calculated numbers).
    -   `source` is a string indicating the origin of the change (e.g., `'user-input'`, `'calculated'`, `'imported'`, `'default'`, `'carry-over'`). This is crucial for debugging and can be used for more advanced state logic if needed (e.g., preventing defaults from overriding user input).
    -   This function is responsible for any necessary type coercion (e.g., ensuring values are stored as strings if that's the convention).
    -   **Side Effect:** After successfully updating the state, this function (or a mechanism it triggers within `StateManager`) SHOULD emit an event: `FieldValueChanged('application', fieldId, newValue)`. (See Section 6: UI Update Mechanism).

-   **`TEUI.StateManager.getReferenceValue(fieldId: string): any`**
    -   Retrieves the current value for the given `fieldId` from the `referenceState`.
    -   Often used by the `calculateReferenceModel()` engine.
    -   Also used by the UI when in Reference Mode to display reference inputs or specific reference overrides.

-   **`TEUI.StateManager.setReferenceValue(fieldId: string, value: any, source: string): void`**
    -   Sets the value for the given `fieldId` in the `referenceState`.
    -   `source` examples: `'standard-override'`, `'carry-over'`, `'user-modified-reference'`, `'calculated-reference'`.
    -   **Side Effect:** After successfully updating the state, this function SHOULD emit an event: `FieldValueChanged('reference', fieldId, newValue)`.

-   **`TEUI.StateManager.getTCellValue(fieldId: string): any` (Existing for T-Cell Comparisons)**
    -   This existing function is compatible. It typically reads from a dedicated T-cell section within `referenceState` or `ReferenceValues.js`.
    -   It is used by the UI to display reference comparison indicators (Columns M, N).

**Naming Convention for Calculated Reference Values:**

-   While the `referenceState` object will hold values keyed by their normal `fieldId` (e.g., `referenceState['h_67']`), when these values need to be stored or accessed in a context where both application and reference values for the *same conceptual field* might coexist (e.g., for cross-section reporting in Section 01, or in older `StateManager` designs), the `ref_` prefix convention (e.g., `ref_h_67`) can still be useful for clarity if values are temporarily flattened or exported together. However, within their own calculation model and state object, they use the direct `fieldId`.

**Strict Usage:**

-   Section calculation logic (`calculateApplicationModel`, `calculateReferenceModel`) and UI event handlers for direct inputs MUST use these explicit getters and setters. This ensures that operations are always intentionally targeted at the correct state object and that state changes can be centrally managed and observed (e.g., for triggering UI updates or further calculations).

## 4. Calculation Engines and Logic (Per Section)

Each section module (e.g., `sections/4011-Section09.js`) is responsible for its own calculation logic, encapsulated within two primary functions corresponding to the dual-state model.

-   **`section.calculateApplicationModel(): void`**
    -   This function is responsible for all calculations pertaining to the Application/Target Model for that specific section.
    -   It MUST exclusively use `TEUI.StateManager.getApplicationValue(fieldId)` to retrieve any input values it needs (whether those inputs are user-entered fields within the same section or calculated values from upstream sections' Application Models).
    -   It MUST exclusively use `TEUI.StateManager.setApplicationValue(outputFieldId, resultValue, 'calculated')` to store any results it computes.
    -   It should not read from or write to `referenceState`.
    -   It should not directly manipulate the DOM. Updating the UI for these calculated values is handled by the UI Update Mechanism (Section 6) reacting to `FieldValueChanged('application', ...)` events.

-   **`section.calculateReferenceModel(): void`**
    -   This function is responsible for all calculations pertaining to the Reference Model for that specific section.
    -   It MUST exclusively use `TEUI.StateManager.getReferenceValue(fieldId)` to retrieve any input values. These inputs will be a mix of:
        -   Values carried over from the `applicationState` (e.g., building geometry).
        -   Values overridden by the active building standard (from `ReferenceValues.js` via `TEUI.StateManager.referenceState`).
        -   Values independently set by the user while in Reference Mode (for designated editable reference fields).
        -   Calculated reference values from upstream sections' Reference Models.
    -   It MUST exclusively use `TEUI.StateManager.setReferenceValue(outputFieldId, resultValue, 'calculated-reference')` to store any results it computes.
    -   It should not read from or write to `applicationState`.
    -   It should not directly manipulate the DOM. UI updates are handled by the UI Update Mechanism reacting to `FieldValueChanged('reference', ...)` events.

**Structure of `calculateAll()` within a section module:**

The primary calculation trigger within a section module, often called `calculateAll()` or similar, will orchestrate the execution of both model calculations. This function is typically called after a relevant input changes or when a full recalculation is needed.

```javascript
// Example within a section module (e.g., sections/4011-SectionXX.js)
function calculateAll() {
    // Always calculate both models to ensure both states are up-to-date.
    // The order might matter if one model can (rarely) influence inputs for the other
    // through immediate carry-over logic before a full reference state rebuild.
    // However, typically they are independent calculation passes.

    if (typeof this.calculateApplicationModel === 'function') {
        this.calculateApplicationModel();
    }
    if (typeof this.calculateReferenceModel === 'function') {
        this.calculateReferenceModel();
    }

    // Note: Direct UI updates are NOT done here. They are handled by 
    // the global UI Update Mechanism listening to StateManager events.
    // However, if a section needs to update internal non-state-managed UI elements
    // (e.g., dynamic helper text), it could do so here, carefully.
}
```

**Dependency Management:**

-   Dependencies between fields *within the same model and section* are handled by the order of operations within the respective `calculateApplicationModel()` or `calculateReferenceModel()` function.
-   Dependencies on values from *other sections* are managed by ensuring that `TEUI.Calculator.runAllCalculations(modelType)` (see Section 5) processes sections in the correct overall dependency order (e.g., leaf sections first). `StateManager` listeners can also be used for more complex cross-section reactive updates, ensuring that a section recalculates its appropriate model when an input `fieldId` from another section changes.

## 5. Orchestration of Calculations & State Initialization

A central calculation orchestrator, likely `TEUI.Calculator` (or a revised `SectionIntegrator`), manages the overall calculation flow and the initialization of the `referenceState`.

**A. Global Calculation Trigger:**

-   **`TEUI.Calculator.runAllCalculations(modelType?: string): void`**
    -   If `modelType` is `'application'`, it iterates through all section modules and calls their `calculateApplicationModel()` method, respecting the inter-section dependency order (e.g., Section 15 before Section 04 before Section 01).
    -   If `modelType` is `'reference'`, it iterates and calls `calculateReferenceModel()` for all sections, respecting dependency order.
    -   If `modelType` is undefined or `'both'`, it should intelligently run both. A robust sequence is:
        1.  Run application calculations: `runAllCalculations('application')`.
        2.  Rebuild reference state: `TEUI.StateManager.buildReferenceState(currentStandardKey)`.
        3.  Run reference calculations: `runAllCalculations('reference')`.
    -   This global trigger is invoked:
        -   After initial application load and default state setup.
        -   After a file import.
        -   When a user changes an input field in Target Mode.
        -   After `TEUI.StateManager.buildReferenceState()` completes (if not already part of the sequence above).
        -   When the UI mode is toggled.

**B. Building and Rebuilding `referenceState`:**

-   **`TEUI.StateManager.buildReferenceState(standardKey: string): void`**
    -   This crucial function is called when:
        1.  The application first initializes (after `applicationState` has its defaults).
        2.  The user changes the reference standard selection (e.g., `d_13`).
        3.  The user explicitly enters Reference Mode (to ensure it reflects the latest `applicationState` carry-overs).
    -   **Steps:**
        1.  **Clear/Reset:** `TEUI.StateManager.referenceState = {};` (or selectively clear if preserving user-modified reference values across standard changes is required and carefully managed).
        2.  **Carry-Over Application Values:** Iterate through a predefined list of `fieldId`s (e.g., from an "Appendix E" style configuration) that represent values always carried over from `applicationState` to `referenceState` (e.g., building geometry).
            ```javascript
            // Example:
            config.carryOverFields.forEach(fieldId => {
                const appValue = TEUI.StateManager.getApplicationValue(fieldId);
                if (appValue !== null && appValue !== undefined) {
                    TEUI.StateManager.setReferenceValue(fieldId, appValue, 'carry-over');
                }
            });
            ```
        3.  **Apply Standard Overrides:** Retrieve the selected standard's object from `TEUI.ReferenceValues[standardKey]`.
            ```javascript
            // Example:
            const standardData = TEUI.ReferenceValues[standardKey];
            if (standardData) {
                Object.keys(standardData).forEach(fieldId => {
                    // Only apply if the field is relevant to the reference model (e.g., not purely geometric if already carried over)
                    TEUI.StateManager.setReferenceValue(fieldId, standardData[fieldId], 'standard-override');
                });
            }
            ```
        4.  **Apply Persisted User Edits to Reference Fields (Optional Advanced Feature):** If the system supports users editing certain reference fields and these edits should persist, they would be reapplied here from a separate store.
        5.  **Completion:** After `referenceState` inputs are fully built, `TEUI.Calculator.runAllCalculations('reference')` MUST be called to populate all calculated fields within the `referenceState`.

**C. Handling User Input:**

-   When a user modifies an input field in **Target Mode**:
    1.  The field's event handler calls `TEUI.StateManager.setApplicationValue(fieldId, newValue, 'user-input')`.
    2.  The `setApplicationValue` function (or `StateManager` observing its own change) triggers the sequence: `runAllCalculations('application')`, then `buildReferenceState()`, then `runAllCalculations('reference')`. (Optimization: `buildReferenceState` and subsequent reference calcs might only be needed if a field relevant to carry-over was the one that changed).

-   When a user modifies an *independently editable* input field in **Reference Mode** (e.g., a hypothetical Reference Reporting Year, or `d_49` in Section 07):
    1.  The field's event handler calls `TEUI.StateManager.setReferenceValue(fieldId, newValue, 'user-modified-reference')`.
    2.  This triggers `TEUI.Calculator.runAllCalculations('reference')`.
    3.  `applicationState` is NOT affected.

**D. Mode Toggling (`TEUI.ReferenceToggle`):**

-   When the user toggles the UI mode:
    1.  Update the internal mode flag (e.g., `TEUI.ReferenceToggle.isReferenceModeActive`).
    2.  If switching *into* Reference Mode, call `TEUI.StateManager.buildReferenceState(currentStandardKey)` followed by `TEUI.Calculator.runAllCalculations('reference')`.
    3.  Trigger a full UI refresh to display values from the appropriate state for the new mode (see Section 6).
    4.  Ensure all calculations (`runAllCalculations('both')` or sequential app then ref) are run to have both states fully up-to-date before the UI refresh.

## 6. UI Update Mechanism

The UI Update Mechanism ensures the user interface accurately reflects the current state (`applicationState` or `referenceState`) based on the active UI mode. This mechanism must be robust and avoid race conditions.

**Preferred Approach: State-Change Driven Updates via Events & Targeted Listeners**

This approach minimizes direct DOM manipulation within calculation logic and centralizes UI updates.

**A. Event Emission:**
-   As defined in Section 3, `setApplicationValue` and `setReferenceValue` in `StateManager` should emit events upon successful state change:
    -   `FieldValueChanged(modelType: string, fieldId: string, newValue: any)`
    -   `modelType` would be `'application'` or `'reference'`.

**B. UI Element Responsibility / Targeted Updates:**
-   Each UI element (input field, dropdown, or `<span>` for calculated values) that needs to display a value from the state should be responsible for updating itself when the relevant state changes *and* the UI mode matches.
-   **Initialization (`initializeEventHandlers` or `onSectionRendered` for a section):**
    -   For each relevant DOM element, attach a listener (or a shared listener can be used) to the `FieldValueChanged` event, filtered for its `fieldId` and `modelType`.
    -   Alternatively, a more global `UIRefreshManager` could listen for all `FieldValueChanged` events and then dispatch targeted updates.

-   **Update Logic for a Single UI Element (e.g., `document.querySelector('[data-field-id="h_67"]')`):**
    ```javascript
    // Conceptual update logic for a DOM element
    function updateMyDisplay(eventDetail) { // eventDetail = { modelType, fieldId, newValue }
        const currentUIMode = TEUI.ReferenceToggle.isReferenceMode() ? 'reference' : 'application';
        
        if (eventDetail.modelType === currentUIMode && eventDetail.fieldId === this.dataset.fieldId) {
            this.textContent = TEUI.formatNumber(eventDetail.newValue, this.dataset.formatType || 'number');
        }
    }
    // Input fields would set .value instead of .textContent and handle .disabled state.
    ```

-   **Handling Mode Toggles:**
    -   When `TEUI.ReferenceToggle.toggleMode()` is called:
        1.  It flips the internal UI mode flag.
        2.  It ensures both `applicationState` and `referenceState` are fully calculated (as per Section 5.D).
        3.  It then needs to trigger a refresh of *all visible UI elements*. This could be done by:
            -   Iterating through all managed UI elements and calling a `refreshDisplay()` method on them, which would then read the correct value from `StateManager` based on the new mode.
            -   Emitting a general `UIModeChanged` event that all relevant UI elements listen to, prompting them to refresh themselves.

**C. Displaying Inputs vs. Assumptions (e.g., `g_67` in Section 09):**

-   **The "Honest Code" approach for shared UI controls like `g_67` (Equipment Spec):**
    1.  **Target Mode:** The `<select data-field-id="g_67">` is active. Its `change` event updates `TEUI.StateManager.setApplicationValue('g_67', ...)`. Its displayed value is set from `TEUI.StateManager.getApplicationValue('g_67')`.
    2.  **Reference Mode:**
        -   The `<select data-field-id="g_67">` should be hidden or disabled.
        -   A separate, read-only element (e.g., `<span data-ref-display-for="g_67">Regular</span>`) becomes visible, showing the Reference Model's *assumption* for this parameter (which is "Regular" for `g_67`'s equipment spec in `calculateReferenceModel`). This span does not need to read from `referenceState['g_67']` if `g_67` isn't a field that's actually *stored* with a value like "Regular" in `referenceState` but is rather an implicit assumption in `calculateReferenceModel`.
        -   This cleanly separates the Application input control from the display of the Reference model's fixed assumption.
    -   This avoids setting the `<select>` element's value to "Regular" in Reference Mode, which caused the issue of it not reverting correctly, because the Application State for `g_67` was never "Regular".

**Benefits of this UI Approach:**

-   **Clear Data Flow:** UI elements react to state changes, rather than calculation functions directly manipulating the DOM.
-   **Decoupling:** Calculation logic is decoupled from direct UI rendering details.
-   **Performance:** Updates can be targeted to only the elements that need to change.
-   **Honesty:** UI for shared inputs clearly distinguishes between interactive Application State control and the display of fixed Reference Model assumptions.

This event-driven or explicit refresh-on-mode-change mechanism for the UI, combined with the strict state separation, forms a more robust and understandable foundation. 

## 7. Phased Implementation & Refactoring Strategy

Adopting this SSv2 architecture across a mature codebase requires a phased approach to manage risk and allow for incremental progress. A "big bang" refactor is discouraged.

**Phase 1: Core Infrastructure Enhancements**

1.  **`StateManager` Refactor:** 
    *   Implement the distinct `applicationState` and `referenceState` internal objects.
    *   Introduce the explicit API functions: `getApplicationValue`, `setApplicationValue`, `getReferenceValue`, `setReferenceValue` (as per Section 3).
    *   Implement the core logic for `buildReferenceState(standardKey)` (as per Section 5.B), including carry-over and standard overrides.
    *   Implement the event emission mechanism (e.g., `FieldValueChanged`) within `setApplicationValue` and `setReferenceValue`.
2.  **`TEUI.Calculator` (or `SectionIntegrator`) Refactor:**
    *   Implement/update `runAllCalculations(modelType)` to iterate through sections and call the new `section.calculateApplicationModel()` or `section.calculateReferenceModel()` methods (as per Section 5.A). Ensure it respects a defined inter-section dependency order.
3.  **`TEUI.ReferenceToggle` Updates:**
    *   Modify the mode toggle logic to call `TEUI.StateManager.buildReferenceState()` when entering Reference Mode.
    *   Ensure `TEUI.Calculator.runAllCalculations('both')` (or the appropriate sequential calls) is invoked after a mode change.
    *   Implement the trigger for the global UI refresh mechanism (e.g., emit `UIModeChanged` event, as per Section 6.C).
4.  **Global UI Refresh Mechanism:**
    *   Implement the chosen strategy for refreshing UI elements upon mode changes or broad state updates (e.g., a `UIRefreshManager` or base component logic for UI elements to listen to `UIModeChanged` and `FieldValueChanged` events).

*During this phase, unrefactored sections will likely not function correctly, especially in Reference Mode. Communication about degraded functionality for these sections is important if the application is in active use.* 

**Phase 2: Section-by-Section Refactoring**

1.  **Selection Criteria:** Start with either:
    *   **Leaf sections:** Those with minimal dependencies on other sections that are not yet refactored.
    *   **A pilot section:** A moderately complex section (like S07 or S09) to serve as a concrete Gold Standard implementation of SSv2.
    *   **Critical path sections:** Sections along the primary calculation chain (e.g., S15 -> S04 -> S01) to demonstrate end-to-end dual-state calculations quickly.
2.  **Refactoring Steps for Each Section (Consult Detailed Guide - Appendix C):**
    *   Create `calculateApplicationModel()` and `calculateReferenceModel()` methods.
    *   Migrate existing calculation logic, strictly adhering to the new `StateManager` API for getting and setting values for the appropriate state.
    *   Update the section's main `calculateAll()` to call both new model calculation methods.
    *   Modify UI input event handlers (`initializeEventHandlers`) to use `setApplicationValue` (or `setReferenceValue` for independently editable reference fields).
    *   Adapt UI elements (inputs, dropdowns, calculated value displays) to correctly display data from either `applicationState` or `referenceState` based on the current UI mode, using the established UI Update Mechanism (Section 6). Pay special attention to shared controls (like `g_67`), implementing the "Honest Code" display approach (e.g., dual elements or disable/restyle for reference assumptions).
    *   Define its specific carry-over rules for `buildReferenceState` and any values it sources from `ReferenceValues.js`.
3.  **Testing:** Thoroughly test each refactored section for:
    *   Correct calculations in both Application and Reference models.
    *   Proper state isolation (changes in one mode do not incorrectly affect the other state's calculations).
    *   Accurate UI display updates when toggling modes and when values change.
    *   Correct interaction with `buildReferenceState` (carry-overs, standard overrides).
4.  **Iterate:** Proceed to the next section, prioritizing those that depend on already refactored sections where possible.

**Phase 3: System-Wide Testing & Optimization**

1.  Once all relevant sections are refactored, conduct comprehensive end-to-end testing with various scenarios, data imports, and reference standards.
2.  Address any remaining timing issues or performance bottlenecks.
3.  Finalize documentation.

**Impacted Core Files (Summary):**

*   `4011-StateManager.js` (Major)
*   `4011-Calculator.js` / `4011-SectionIntegrator.js` (Major)
*   `4011-ReferenceToggle.js` (Significant)
*   All Section Modules (`sections/4011-SectionXX.js`) (Major, per section)
*   Potentially `4011-FieldManager.js` (depending on UI update strategy for initial rendering vs. dynamic updates)
*   `4011-init.js` (Minor, for initialization sequence)

**Preserving Legacy Functionality During Transition:**

This is challenging with a deep architectural change. The cleanest approach involves accepting that unrefactored sections will have limited or no proper Reference Mode functionality until they are updated. Attempting to maintain full backward compatibility with a hybrid system can introduce significant complexity and defeat the purpose of the refactor.

Focus on getting the core infrastructure (Phase 1) stable. Then, for each section refactored (Phase 2), it fully comes online with the new dual-state capabilities. Users/testers would need to be aware of which sections are SSv2 compliant at any given time during the rollout.

## 8. Future Considerations & Appendices (Outline)

To make this document a comprehensive guide, the following appendices/sections would be beneficial:

*   **Appendix A: Field Behavior Rules:** Detailed specification for key fields, outlining their carry-over status, if they are overridden by standards, or if they are independently editable in Reference Mode.
*   **Appendix B: Event Definitions:** Precise naming and payload structure for `FieldValueChanged`, `UIModeChanged`, and any other relevant system events.
*   **Appendix C: Detailed Section Refactoring Guide:** A step-by-step checklist and code patterns for refactoring an individual section module to SSv2 compliance.
*   **Appendix D: Glossary of Terms:** Definitions for `applicationState`, `referenceState`, `carry-over`, `standard-override`, etc.
*   **Section X: Performance and Optimization Notes:** Discussion of potential performance considerations and best practices for the dual-state system.
*   **Section Y: Handling Asynchronous Operations:** (If applicable in the future, e.g., fetching dynamic reference data). 