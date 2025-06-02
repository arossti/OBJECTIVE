# e_10 (Reference TEUI) Contamination Debugging Plan

## Problem Description

We've observed an issue where the `e_10` field (Reference TEUI) gets contaminated with application state values when toggling between Reference and Design modes, especially after making UI changes in Design mode.

## Reproduction Steps

1. Load the application
2. Observe the initial `e_10` value in Design mode
3. Toggle to Reference mode using "Show Reference" button
4. Verify `e_10` shows the correct Reference TEUI value
5. Toggle back to Design mode
6. Make some UI changes in Design mode (e.g., adjust area slider or reporting year)
7. Toggle back to Reference mode
8. **ISSUE**: `e_10` now shows the Application state value instead of preserving the Reference value

## Debugging Tools Added

We've added comprehensive logging to track this issue. The debugging focuses on three key areas:

1. **Section01.js**: Detailed logging in the `e_10` calculation to track data sources and values
2. **StateManager.js**: 
   - Logs all `getValue` and `setValue` calls for `e_10`
   - Tracks access to Reference vs. Application state
   - Logs the stack traces to identify where contamination occurs
   - Shows available values in all storage locations
3. **ReferenceToggle.js**: Logs before/after values when toggling between modes

## How to Use the Debug Logs

1. Open the browser console (F12 or Command+Option+I)
2. Look for logs with these prefixes:
   - `[S01 DEBUG] 🔍` - Section 01 calculation logs
   - `[StateManager DEBUG] 📊` - State access logs
   - `[StateManager DEBUG] ⚠️` - Critical state changes
   - `[ReferenceToggle DEBUG] 🔄` - Mode switch logs
   
3. Follow these specific logging patterns:
   - `e_10 calculation triggered` - Shows when and why e_10 is recalculated
   - `CRITICAL: e_10 being SET` - Shows when e_10 is changed and by what
   - `MODE SWITCH` - Shows the before/after values during mode toggle

## Investigation Strategy

1. Follow the value of `e_10` through multiple mode toggles in the console
2. Check if `e_10` is being unexpectedly recalculated after mode toggle
3. Look for places where Application state is leaking into Reference state
4. Identify any missing state isolation in the code

## Potential Fix Approaches

Based on our initial investigation, these are likely areas to fix:

1. Ensure `getReferenceValue` properly prioritizes session-stored reference values
2. Add a specialized value storage for critical dual-engine fields like `e_10`
3. Intercept setValue calls in Reference mode to prevent contamination
4. Force recalculation of `e_10` from Reference state values when toggling to Reference mode

## How to Remove Debugging

Once the issue is fixed, the debugging code can be removed or commented out by reverting the recent commit:
```
git revert d99d11b
```

Or by manually removing the console.log statements from:
- sections/4011-Section01.js
- 4011-ReferenceToggle.js
- 4011-StateManager.js 