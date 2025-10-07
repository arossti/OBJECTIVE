# S10-11 Area Sync Implementation - Agent Handoff Document

**Branch:** `S10-11-AREA-SYNC`
**Priority:** Medium - Quality of Life Improvement
**Risk:** Medium - Previously broke app, needs careful implementation

---

## Problem Statement

**Current Behavior:**
- Users enter window/door areas in S10 (Building Enclosure)
- Users must ALSO enter the same areas in S11 (Transmission Losses)
- This creates duplicate data entry and potential inconsistencies

**Desired Behavior:**
- S10 is the "source of truth" for window/door areas (fields `d_73` through `d_78`)
- S11 should automatically "mirror" or "read" these values (fields `d_88` through `d_93`)
- This sync must work in BOTH Target mode AND Reference mode
- This sync must work after Excel import
- This sync must work after applying a Reference Standard (`d_13`)

---

## Field Mapping

S11 should read from S10 as follows:

| S11 Field (display) | S10 Field (source) | Description |
|---------------------|-------------------|-------------|
| `d_88` | `d_73` | Window Area North |
| `d_89` | `d_74` | Window Area East |
| `d_90` | `d_75` | Window Area South |
| `d_91` | `d_76` | Window Area West |
| `d_92` | `d_77` | Door Area |
| `d_93` | `d_78` | Skylight Area |

---

## Technical Context

### Dual-State Architecture
Both S10 and S11 use Pattern A architecture with:
- **TargetState**: User's design values
- **ReferenceState**: Code compliance baseline values
- **ModeManager**: Switches between modes

### State Prefixes
- Target mode: Read from `d_73`, `d_74`, etc.
- Reference mode: Read from `ref_d_73`, `ref_d_74`, etc.

---

## Previous Attempt (Failed)

**What Broke:**
- Syntax errors and recursion issues
- Likely caused listener loops between S10 and S11
- App became unstable

**Why It Failed:**
- Insufficient dual-state awareness in listeners
- May have triggered infinite recalculation loops
- Improper handling of import sequence

---

## Recommended Implementation Path

### 1. Update S11 Field Definitions
**File:** `sections/4012-Section11.js`

Change window/door area fields from `"editable"` to `"calculated"`:

```javascript
// BEFORE (current):
d_88: { fieldId: "d_88", type: "editable", value: "10.00", section: "transmission" },

// AFTER (proposed):
d_88: { fieldId: "d_88", type: "calculated", value: "0", section: "transmission" },
```

### 2. Create Area Source Map
**Location:** Inside S11 module

```javascript
const areaSourceMap = {
  d_88: "d_73", // North windows
  d_89: "d_74", // East windows
  d_90: "d_75", // South windows
  d_91: "d_76", // West windows
  d_92: "d_77", // Doors
  d_93: "d_78", // Skylights
};
```

### 3. Implement Sync Function (Mode-Aware)
**Location:** Inside S11 module

```javascript
/**
 * Sync window/door areas from S10 into S11
 * Respects current calculation mode (Target vs Reference)
 */
function syncAreasFromS10() {
  const currentMode = ModeManager.getCurrentMode(); // "target" or "reference"

  Object.entries(areaSourceMap).forEach(([s11Field, s10Field]) => {
    // Determine source field based on mode
    const sourceFieldId = currentMode === "reference" ? `ref_${s10Field}` : s10Field;

    // Read from S10 via global StateManager
    const areaValue = window.TEUI.StateManager.getValue(sourceFieldId);

    if (areaValue !== null && areaValue !== undefined) {
      // Write to appropriate S11 state
      if (currentMode === "target") {
        TargetState.setValue(s11Field, areaValue, "calculated");
      } else {
        ReferenceState.setValue(s11Field, areaValue, "calculated");
      }

      console.log(`[S11 Area Sync] ${s11Field} = ${areaValue} (from ${sourceFieldId})`);
    }
  });

  // Refresh S11 UI to show synced values
  refreshUI();
}
```

### 4. Setup S10 Area Listeners
**Location:** Inside S11's `initializeEventHandlers()` function

```javascript
/**
 * Listen for S10 area changes in both Target and Reference modes
 */
function setupS10AreaListeners() {
  const s10AreaFields = ["d_73", "d_74", "d_75", "d_76", "d_77", "d_78"];

  // Listen for Target mode changes
  s10AreaFields.forEach(fieldId => {
    window.TEUI.StateManager.addListener(fieldId, (newValue) => {
      const currentMode = ModeManager.getCurrentMode();
      if (currentMode === "target") {
        syncAreasFromS10();
      }
    });
  });

  // Listen for Reference mode changes
  s10AreaFields.forEach(fieldId => {
    window.TEUI.StateManager.addListener(`ref_${fieldId}`, (newValue) => {
      const currentMode = ModeManager.getCurrentMode();
      if (currentMode === "reference") {
        syncAreasFromS10();
      }
    });
  });

  console.log("[S11] S10 area listeners registered for both modes");
}
```

### 5. Hook into Import Sequence
**Location:** S11's `syncFromGlobalState()` method (should already exist)

Add call to `syncAreasFromS10()` after field sync:

```javascript
syncFromGlobalState: function(fieldIds) {
  // ... existing sync code ...

  // After syncing regular fields, sync areas from S10
  syncAreasFromS10();
}
```

### 6. Hook into Mode Switch
**Location:** S11's ModeManager switch handler

Ensure `syncAreasFromS10()` is called when switching between Target/Reference:

```javascript
ModeManager.onModeChange(() => {
  // ... existing mode switch code ...

  // Sync areas after mode switch
  syncAreasFromS10();
});
```

---

## Testing Checklist

### Test 1: User Input Flow (Target Mode)
- [ ] Change window area in S10 Target mode
- [ ] Verify S11 Target mode updates automatically
- [ ] Verify S11 calculations use updated area

### Test 2: User Input Flow (Reference Mode)
- [ ] Switch to Reference mode
- [ ] Change window area in S10 Reference mode
- [ ] Verify S11 Reference mode updates automatically
- [ ] Verify Reference calculations use updated area

### Test 3: Excel Import Flow
- [ ] Import Excel file with known window/door areas
- [ ] Verify S10 shows imported values
- [ ] Verify S11 mirrors S10 values (not Excel S11 values)
- [ ] Verify both Target and Reference modes sync correctly

### Test 4: Reference Standard Application
- [ ] Apply Reference Standard dropdown (`d_13`)
- [ ] Verify Reference mode updates
- [ ] Verify S11 Reference areas sync from S10 Reference areas
- [ ] Verify no cross-contamination with Target mode

### Test 5: No Infinite Loops
- [ ] Monitor console for excessive calculation triggers
- [ ] Verify app remains responsive
- [ ] Check that calculations settle within ~100ms

### Test 6: Edge Cases
- [ ] Test with zero area values
- [ ] Test with very large area values
- [ ] Test rapid mode switching
- [ ] Test rapid S10 value changes

---

## Files to Modify

1. **`sections/4012-Section11.js`**
   - Change field types for `d_88`-`d_93` from "editable" to "calculated"
   - Add `areaSourceMap` constant
   - Add `syncAreasFromS10()` function
   - Add `setupS10AreaListeners()` function
   - Call `setupS10AreaListeners()` from `initializeEventHandlers()`
   - Add `syncAreasFromS10()` call to mode switch handler
   - Add `syncAreasFromS10()` call to `syncFromGlobalState()`

2. **NO changes needed to S10** - it's already publishing values correctly

---

## Red Flags / Anti-Patterns to Avoid

❌ **DON'T:** Create listeners that trigger S10 calculations from S11
❌ **DON'T:** Use `setValue()` without specifying state ("calculated" vs "user-modified")
❌ **DON'T:** Mix Target and Reference field IDs in same listener
❌ **DON'T:** Call `syncAreasFromS10()` from within `calculateAll()` (infinite loop risk)
❌ **DON'T:** Assume S10 values exist before initialization

✅ **DO:** Only READ from S10, never WRITE back
✅ **DO:** Respect current mode when determining source field
✅ **DO:** Log sync operations for debugging
✅ **DO:** Call sync after major state changes (import, mode switch)
✅ **DO:** Test thoroughly in isolated environment first

---

## Rollback Plan

If implementation causes issues:

1. Revert field types back to "editable"
2. Remove listener setup from `initializeEventHandlers()`
3. Remove sync calls from mode switch and import
4. Users continue manual entry (current behavior)

---

## Documentation References

- **MAPPER.md line 977-1011:** Original problem documentation
- **AGENT.md:** Dual-state architecture overview
- **4012-Section02.js, 4012-Section03.js:** Pattern A examples with sync methods

---

## Success Criteria

✅ S11 window/door areas automatically mirror S10 values
✅ Works in both Target and Reference modes
✅ Works after Excel import
✅ Works after Reference Standard application
✅ No infinite calculation loops
✅ No performance degradation
✅ No cross-contamination between modes

---

## Notes for Agent

- This is a quality-of-life improvement, not a critical bug
- Take time to understand dual-state architecture before coding
- Test incrementally - add listeners first, verify they fire, then add sync logic
- Use console logging liberally during development
- If you encounter recursion, step back and review listener setup
- The pattern is proven in S02/S03 - use them as reference implementations

Good luck! 🚀
