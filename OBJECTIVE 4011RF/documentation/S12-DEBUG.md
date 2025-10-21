# S12 Reference Mode Display Bug - k_104 Field

## Bug Summary
S12's `k_104` field shows incorrect value `-4267.63` in Reference mode on initialization/import, even though S11's `ref_k_98` shows the correct value `-1895.40` in the DOM when S11 is switched to Reference mode.

## Symptoms
1. **Initial State (after hard refresh or file import)**:
   - Navigate to S12
   - Switch to Reference mode
   - Field `k_104` displays: `-4267.63` ❌ (WRONG)

2. **S11 shows correct value**:
   - Navigate to S11
   - Switch to Reference mode
   - Field `k_98` displays: `-1895.40` ✅ (CORRECT in DOM)

3. **Bug self-corrects after "priming"**:
   - Any change to S12 field (e.g., change Stories from 1 to 1.5 and back to 1)
   - OR change TB% slider in S11 while in Reference mode
   - Result: `k_104` now displays correct value `-1895.40` ✅

## Reproduction Steps
1. Hard refresh page (Cmd+Shift+R)
2. Click "Initialize" button
3. Navigate to Section 12
4. Switch to "Reference" mode using toggle
5. Observe `k_104` field → shows `-4267.63` (incorrect)
6. Navigate to Section 11, switch to Reference mode → observe `k_98` shows `-1895.40` (correct)
7. Return to S12, change any field (e.g., Stories slider)
8. Observe `k_104` field → now shows `-1895.40` (correct)

## Technical Context

### Excel Formula Reference
S12 cell K104: `=IF(H21="Capacitance", K98, SUM(K101:K102))`
- When `h_21 = "Capacitance"`, `k_104` should equal S11's `k_98` value

### Data Flow (Reference Mode)
```
S03 → publishes ref_i_21 (capacitance %)
  ↓
S11 → reads ref_i_21 → calculates ref_k_98 → publishes to StateManager
  ↓
S12 → reads ref_k_98 from StateManager → displays as k_104
```

### Code Location
- **S12 reads ref_k_98**: [4012-Section12.js:2109-2123](../sections/4012-Section12.js)
- **S11 publishes ref_k_98**: [4012-Section11.js:1718-1722](../sections/4012-Section11.js)
- **S03 publishes ref_i_21**: [4012-Section03.js:1864-1877](../sections/4012-Section03.js)
- **S12 DOM update**: [4012-Section12.js:210-301](../sections/4012-Section12.js) (`updateCalculatedDisplayValues`)

## Key Observations

1. **StateManager vs DOM Discrepancy**:
   - S11 DOM shows correct value `-1895.40` in Reference mode
   - But S12 reads `-4267.63` from StateManager initially
   - This suggests StateManager contains stale/wrong value on initialization

2. **"Priming" Behavior**:
   - Any user interaction in S12 OR S11 (Reference mode) fixes the display
   - Suggests the calculation CAN work correctly, but initialization order is wrong

3. **Value Analysis**:
   - Incorrect value `-4267.63` suggests S11 calculated with `ref_i_21 = 0` or missing
   - Correct value `-1895.40` suggests S11 calculated with `ref_i_21 = 50` (correct)
   - Formula difference implies ground heat gain calculation uses capacitance factor

4. **🚨 CRITICAL: Only k_104 is Affected!**:
   - **ALL OTHER S12 fields display correctly in Reference mode**
   - Many other S12 fields also read from S11 (e.g., envelope areas, heat losses)
   - Those fields work perfectly on initialization
   - **ONLY `k_104` shows wrong value initially**
   - This suggests the bug is NOT a general S11→S12 data flow issue
   - The bug is SPECIFIC to the `k_104` field calculation or display logic

## Previous Investigation Attempts

### Attempt 1: Listener-based Solution
- Added listener in S12 for `ref_k_98` changes
- Result: Listener never fired (wrong architectural approach)
- Reverted: Listener spaghetti doesn't solve initialization timing

### Attempt 2: Orchestrator Dependency Management
- Updated [4012-Orchestrator.js](../4012-Orchestrator.js) with S03 → S11 → S12 dependency chain
- Result: Orchestrator exists but isn't actively used by the application
- Reverted: Overengineered solution for simple display bug

### Attempt 3: DOM Update After Reference Calculation
- Added `ModeManager.updateCalculatedDisplayValues()` call at end of S12's `calculateReferenceModel()`
- Result: Still showing incorrect value on initialization
- Status: Current state in codebase

## Architectural Notes

### Dual-State Architecture
- **Target State**: User's design values
- **Reference State**: Building code compliance values
- Each section has `TargetState` and `ReferenceState` internal state
- StateManager stores global cross-section values with `ref_` prefix for Reference mode

### Pattern A (S12 follows this)
- Sections maintain sovereign state
- Publish calculated results to StateManager for downstream sections
- Read upstream values from StateManager

### StateManager Listener Behavior
- Line 546-566 in [4011-StateManager.js](../4011-StateManager.js)
- Only fires listeners if value OR state changed (line 418-419)
- If `ref_k_98` doesn't change, listeners won't fire

## Questions for Next Investigation

1. **Why ONLY k_104?**:
   - What's different about `k_104` vs other S12 fields that read from S11?
   - Does `k_104` use a different read/display mechanism?
   - Is there special handling for `k_104` in the code?

2. **k_104 Specific Logic**:
   - Check S12's `calculateEnvelopeTotals()` function - how is `k_104` calculated?
   - Is there a conditional formula: `IF(h_21="Capacitance", k_98, SUM(k_101:k_102))`?
   - Does this conditional cause different behavior vs other fields?

3. **Timing Questions**:
   - When does `h_21` get set to "Capacitance" in Reference mode?
   - Does `k_104` calculation run BEFORE `h_21` is set correctly?
   - Is there a race condition in the conditional logic?

4. **StateManager vs Internal State**:
   - Does S12 calculate `k_104` and store to internal state correctly?
   - Is the bug in calculating OR in reading from StateManager OR in displaying to DOM?
   - Why does S11's DOM show correct `k_98` but S12 reads wrong value from StateManager?

## Debugging Strategy for Next Agent

### Step 1: Add Diagnostic Logging
Add console logs at these critical points:
```javascript
// S03 - after publishing ref_i_21
console.log(`[S03] Published ref_i_21 = ${value}`);

// S11 - when reading ref_i_21
const ref_i_21 = getGlobalNumericValue("ref_i_21");
console.log(`[S11] Read ref_i_21 = ${ref_i_21} from StateManager`);

// S11 - when publishing ref_k_98
console.log(`[S11] Publishing ref_k_98 = ${totals.gain}`);

// S12 - when reading ref_k_98
const ref_k_98 = getGlobalNumericValue("ref_k_98");
console.log(`[S12] Read ref_k_98 = ${ref_k_98} from StateManager`);

// S12 - updateCalculatedDisplayValues
console.log(`[S12] Updating DOM: k_104 = ${valueToDisplay}`);
```

### Step 2: Check StateManager State
In browser console after initialization:
```javascript
// Check what StateManager contains
window.TEUI.StateManager.getValue("ref_i_21")  // Should be 50
window.TEUI.StateManager.getValue("ref_k_98")  // Should be -1895.40
window.TEUI.StateManager.getValue("ref_k_104") // Should be -1895.40
window.TEUI.StateManager.getValue("ref_h_21")  // Should be "Capacitance"

// Check S11's internal state
window.Section11?.ReferenceState?.getValue("k_98") // What does S11 think it calculated?

// Check S12's internal state
window.TEUI.SectionModules?.sect12?.ReferenceState?.getValue("k_104") // What did S12 calculate internally?
window.TEUI.SectionModules?.sect12?.ReferenceState?.getValue("h_21") // Is capacitance mode set?
```

### Step 2b: **CRITICAL - Check the k_104 Conditional Logic**
In S12's `calculateEnvelopeTotals()` function, the Excel formula is:
```
K104 = IF(H21="Capacitance", K98, SUM(K101:K102))
```

**Key Investigation**:
1. When does `h_21` get read during Reference calculation?
2. What value does `h_21` have at the moment `k_104` is calculated?
3. Is `k_104` reading `k_98` from the WRONG source (Target instead of Reference)?
4. Look at code around [4012-Section12.js:2109-2123](../sections/4012-Section12.js) - the conditional logic for `k_104`

### Step 3: Trace Initialization Sequence
Look at logs to determine:
1. When does S03 publish `ref_i_21`?
2. When does S11 read `ref_i_21` and calculate `ref_k_98`?
3. When does S12 read `ref_k_98` and display `k_104`?
4. Are they happening in the correct order?

## Hypothesis: The Bug is in k_104 Conditional Logic

Given that:
- ALL other S12 fields work correctly
- Many other fields also read from S11
- ONLY `k_104` shows wrong value
- `k_104` uses a conditional: `IF(h_21="Capacitance", read k_98 from S11, calculate sum)`

**Most Likely Cause**:
The conditional logic for `k_104` is reading `k_98` from the **wrong place**:
- It might be reading from Target state instead of Reference state
- OR it's reading from StateManager at the wrong time
- OR the conditional check for `h_21="Capacitance"` is evaluating incorrectly in Reference mode

**Where to Look**:
Search for `k_104` calculation in S12's `calculateEnvelopeTotals()` function and check:
1. Does it properly distinguish between Reference and Target reads?
2. Does it use `getGlobalNumericValue("ref_k_98")` vs `getNumericValue("k_98")`?
3. Is there a fallback that's using the wrong value?

## Success Criteria

Bug is fixed when:
1. Hard refresh → Initialize → Navigate to S12 → Switch to Reference mode
2. Field `k_104` immediately displays `-1895.40` (correct value)
3. No "priming" required
4. All other S12 fields continue to work correctly (regression test)

## Related Files
- [4012-Section12.js](../sections/4012-Section12.js) - Volume & Surface Metrics section
- [4012-Section11.js](../sections/4012-Section11.js) - Transmission Losses section
- [4012-Section03.js](../sections/4012-Section03.js) - Climate Calculations section
- [4011-StateManager.js](../4011-StateManager.js) - Global state management
- [4012-Orchestrator.js](../4012-Orchestrator.js) - Dependency ordering system (not actively used)
- [4012-CHEATSHEET.md](history%20(completed)/4012-CHEATSHEET.md) - Architectural patterns

## Time Invested
- Approximately 12 hours across multiple sessions
- 3 context flushes/resets
- Multiple architectural approaches attempted and reverted

---
**Status**: Open
**Priority**: Medium (works after priming, not blocking)
**Date Created**: 2025-01-21
**Last Updated**: 2025-01-21
**Clean Baseline Commit**: `e575b6c` - "📝 docs: Add S12-DEBUG.md - k_104 Reference mode display bug"
