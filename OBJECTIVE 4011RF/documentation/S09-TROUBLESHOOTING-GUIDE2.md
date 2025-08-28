# Section 09 (Occupant & Internal Gains) - Debugging Guide & Final Fix Plan

**Date**: August 28, 2025  
**Status**: `CRITICAL - In Progress`  
**Last Stable Commit**: `825b4a7` (post-S09 logic unification)

---

## 1. Executive Summary

This document outlines the final, targeted fix for a persistent bug in `4011-Section09.js` where the **'Occupant Activity' dropdown (`d_64`)** fails to trigger recalculations when in **Reference mode**. 

While all other user inputs in Section 09 correctly update the Reference model, `d_64` does not, causing the main dashboard's Reference TEUI (`e_10`) to remain stuck on a stale value.

This guide details the root cause and provides a minimal, precise, two-part code change that will resolve the issue without re-introducing the regressions encountered in previous fix attempts.

---

## 2. Root Cause Analysis

The core of the problem lies in two specific, related issues within `4011-Section09.js`:

1.  **Incorrect `ModeManager.setValue` Logic**: The function responsible for saving user input to the application's state does not correctly handle the `reference` case. It fails to write values to the global `StateManager` with the required `ref_` prefix. This is the primary reason why changes to `d_64` (and other inputs) in Reference mode are not being correctly propagated to downstream sections.

2.  **`ModeManager` Not Exposed to `FieldManager`**: The Section 09 module does not make its internal `ModeManager` object publicly available. The application's `FieldManager`—which handles input events—is designed to look for this specific object. When it can't find it, it logs a warning (`[FieldManager] Section sect09 has no ModeManager...`) and falls back to a direct, non-mode-aware write to the `StateManager`. This bypasses our dual-state logic entirely and is a major source of state contamination.

---

## 3. Actionable Fix Plan

To resolve this, two small, precise changes are required in `OBJECTIVE 4011RF/sections/4011-Section09.js`. 

### Step 1: Correct the `ModeManager.setValue` Function

This is the most critical fix. It ensures that any user input made in Reference mode is correctly saved with the `ref_` prefix.

-   **Location**: Inside the `ModeManager` object, around line `164`.
-   **Action**: Replace the entire `setValue` function with the following corrected version:

```javascript
    setValue: function (fieldId, value, source = "user") {
      const currentState = this.currentMode === "target" ? TargetState : ReferenceState;
      currentState.setValue(fieldId, value);

      // Bridge to global StateManager
      if (window.TEUI?.StateManager?.setValue) {
        if (this.currentMode === "target") {
          // Target changes go to StateManager for downstream sections
          window.TEUI.StateManager.setValue(fieldId, value, source);
        } else if (this.currentMode === "reference") {
          // Reference changes go to StateManager with ref_ prefix
          window.TEUI.StateManager.setValue(`ref_${fieldId}`, value, source);
        }
      }
    },
```

### Step 2: Expose the `ModeManager` to the `FieldManager`

This fix allows the `FieldManager` to find and correctly use our newly-fixed `setValue` function, preventing the state contamination fallback.

-   **Location**: Inside the `return` statement at the very end of the module, around line `2511`.
-   **Action**: Add a new line to expose the `ModeManager` object.

```javascript
// ... existing returned properties ...
    getInternalGainsCooling: function () {
      return getFieldValue("k_71");
    },
    // ✅ CRITICAL FIX: Expose ModeManager for FieldManager integration
    ModeManager: ModeManager,
  };
})();
```

---

## 4. Verification Protocol

After manually applying both changes:

1.  **Hard refresh** the application in your browser.
2.  Open the developer console to monitor for any new errors.
3.  Navigate to **Section 09** and switch to **Reference mode**.
4.  Change the **"Occupant Activity" (`d_64`)** dropdown from "Normal" to "Active".
5.  **Expected Result**: The **Reference TEUI (`e_10`)** in Section 01 should immediately and correctly update to reflect the new, higher internal gains.
6.  **Confirm No Regressions**:
    -   Verify that all calculations in **Target mode** still work correctly.
    -   Verify that all *other* user inputs in **Reference mode** (e.g., number of occupants `d_63`, occupied hours `g_63`) also continue to work correctly.

This targeted approach will resolve the final bug in Section 09 while preserving the stability we have fought to restore.
