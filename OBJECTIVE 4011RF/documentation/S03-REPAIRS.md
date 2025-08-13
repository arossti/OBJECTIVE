# Section 03 State-Mixing & Calculation Flow Repair Plan

This document outlines the investigation and repair plan for state contamination and broken calculation flows originating from `4011-Section03.js`.

---

## 🚨 Problem Definition

Testing has revealed two critical bugs related to Section 03's dual-state implementation:

1.  **State Mixing**: When S03 is in **Target Mode**, changing the location (e.g., Province or City dropdowns) correctly updates the Target calculations but **also incorrectly triggers updates in the Reference column (e_10) of Section 01**. This is a critical state contamination issue.

2.  **Broken Reference Calculation Flow**: When S03 is in **Reference Mode**, changing the location (e.g., to a cold climate like Attawapiskat) **fails to trigger any recalculation** of the Reference TEUI (`e_10`) in Section 01. The value remains stale, reflecting the default climate data.

---

## 🏛️ Architectural Principle

As per the project's established "Consumer Section" pattern, **Section 01 must NOT listen directly to Section 03**. S01's responsibility is to consume final calculated totals from sections like S04 and S15.

The failure of `e_10` to update indicates a break in the dependency chain for Reference values. The `ref_` prefixed climate values broadcast by S03 are not successfully propagating through the intermediate calculation sections (S10-S15) to reach the summary sections (S04) that S01 listens to.

This repair plan focuses on fixing the root causes of this broken flow, not on creating architecturally incorrect shortcuts.

---

## 🔧 Repair Plan

### Phase 1: Fix State-Mixing in Section 03 (Immediate Action)

The state-mixing is caused by event handlers in `4011-Section03.js` that write to the global `StateManager` without being mode-aware.

-   **Task 1.1**: Modify the `handleProvinceChange` function to be mode-aware. When in Reference mode, it must write to `ref_d_19` in the global `StateManager`, not the unprefixed `d_19`.

-   **Task 1.2**: Modify the `change` event listener for the city dropdown (`dd_h_19`) to be mode-aware. When in Reference mode, it must write to `ref_h_19` in the global `StateManager`.

### Phase 2: Trace and Repair the Reference Calculation Chain

This phase will systematically trace the flow of `ref_` prefixed data from S03 to identify where the chain is broken.

-   **Task 2.1: Confirm S03 Broadcast**: Add targeted logging to the `storeReferenceResults` function in `4011-Section03.js` to explicitly confirm that changing the location in Reference mode writes the correct, updated `ref_` prefixed climate data (e.g., `ref_d_20`) to the global `StateManager`.

-   **Task 2.2: Investigate Intermediate Sections (S10-S15)**: One by one, add targeted logging to the `initializeEventHandlers` and `calculateReferenceModel` functions of the key downstream sections (starting with S13, S14, and S15) to answer:
    -   Does the section have a listener for the relevant `ref_` prefixed climate data (e.g., `ref_d_20`)?
    -   Is that listener being successfully triggered when S03 broadcasts a change?
    -   Does the section's `calculateReferenceModel` correctly use the new `ref_` value in its calculations?
    -   Does the section correctly store its own `ref_` prefixed results for the next section in the chain?

-   **Task 2.3: Investigate S04**: Once the intermediate sections are confirmed to be working, verify that S04 is correctly listening to the final reference outputs from S15 (e.g., `ref_j_32`) and that its `calculateReferenceModel` is triggered as expected.

-   **Task 2.4: Validate Final S01 Update**: With the full chain repaired, confirm that S01's existing listeners for S04's reference outputs are triggered and that `e_10` updates correctly, without any new listeners being added to S01 itself.

---

### ✅ Success Criteria

1.  Changing the location in **Target Mode** ONLY affects Target columns (H and K). The Reference column (E) remains stable.
2.  Changing the location in **Reference Mode** ONLY affects the Reference column (E). The Target and Actual columns (H and K) remain stable.
3.  The global "Reset" button correctly reverts S03's location settings to their default values.

---

## Phase 3: Verify Upstream Reference Building Parameters (S02)

Observed in logs: S03 → S15 → S04 Reference chain is functioning (`ref_j_32`, `ref_k_32` stored and visible), but `S01` snapshots show missing Reference building parameters from S02 (e.g., `ref_h_15` empty, likely `ref_h_13` too). Since S01 computes Reference TEUI `e_10` as `ref_j_32 / ref_h_15`, missing S02 Reference values block visible updates in S01.

-  Task 3.1: Confirm S02 publishes Reference building parameters to StateManager
   - `ref_h_15` (Reference conditioned area)
   - `ref_h_13` (Reference service life)
   - `ref_h_12` (Reference reporting year – used by S04)

-  Task 3.2: Ensure dual-state aware writes in S02
   - In S02 `ModeManager.setValue(fieldId, value)`: when in Reference mode, write `StateManager.setValue('ref_' + fieldId, value, 'user-modified')`.
   - At the end of S02 `calculateReferenceModel()`: write `ref_h_15`, `ref_h_13`, `ref_h_12` from `ReferenceState` into StateManager.
   - On S02 initialization (after `ReferenceState.setDefaults()`): sync initial `ref_h_15`, `ref_h_13`, `ref_h_12` to StateManager so consumers have values before first edit.

-  Task 3.3: Validate consumer reads in S01
   - Use temporary logging to confirm S01 sees non-empty `ref_h_15`/`ref_h_13` alongside `ref_j_32`/`ref_k_32` before calculating `e_10`.

### Targeted Debug Logging (temporary)

-  S02: After writing each Reference key, log `[S02DB] set ref_h_15=…, ref_h_13=…, ref_h_12=…`.
-  S04: Already logs `[S04DB]` for `ref_j_32`/`ref_k_32` presence during display refresh and after reference calculations.
-  S01: Snapshot upstream inputs at the start of its display update to verify `ref_h_15`/`ref_h_13` are present when `ref_j_32`/`ref_k_32` update.

Remove all `[SxxDB]` logs after verification.
