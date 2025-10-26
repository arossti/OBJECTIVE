# S12-S13 Purity Investigation

**Branch**: `S12-S13-PURITY`
**Parent Branch**: `S10-S11-PURITY` (COMPLETE ✅)
**Date Started**: 2025-10-25
**Goal**: Fix Reference model calculation flow S12→S13 and S12 air leakage bug

**Last Updated**: 2025-10-25 (Evening Session)

---

## 🎯 Mission Statement

Restore clean Reference model calculation flow from S12 (envelope) to S13 (heating loads) while maintaining CSV export completeness. Fix S12 air leakage calculation bug for 3+ storey buildings.

---

## ✅ Recent Victories (Oct 25 Evening)

### S12 N-Factor Lookup Table Extension
**Status**: ✅ COMPLETE (Commits: 9599324, c69a332)
- Extended n-Factor lookup from 3 stories to 6 stories
- Added values for 4, 5, 6 storey buildings across all zones/exposures
- Source: NRL50 Excel lookup table
- Fixes Issue #2: Air leakage calculations now work for all building heights

### S12→S10 Reference Flow FIXED
**Status**: ✅ COMPLETE (Commit: 1f46772)
- **Bug**: ref_g_81 would update ONCE, then freeze on subsequent S12 changes
- **Root Cause**: DUPLICATE LISTENERS in S10
  - Fields i_97, i_103, m_121, i_98 registered TWICE
  - First listener: called calculateAll() ✅ (dual-engine, correct)
  - Second listener: called calculateUtilizationFactors() ❌ (Target-only)
  - When in Reference mode, second listener contaminated ReferenceState with Target calculations
- **Fix**: Removed duplicate listener block entirely
- **Result**: S10's ref_g_81 now updates correctly every time S12 storeys change

---

## ✅ What We've Achieved (From S10-S11-PURITY)

### S12 Reference Field Publication
**Status**: ✅ COMPLETE
- All 5 S12 Reference user input fields export to CSV correctly
- Fields: ref_d_103, ref_g_103, ref_d_105, ref_d_108, ref_g_109
- Fix: Browser cache issue + safety net in calculateAll()
- Commit: 2befec9

### S13 File Status
**Current Setup**:
- `4012-Section13.js.backup.js` (3662 lines) - **BACKUP VERSION** - formerly Working calculation flow (but not anymore with completed S12)
- `4012-Section13.js` (3682 lines) - **CSV FIX VERSION** - Broken calculation flow ❌

**Test Results**:
- Backup S13: ✅ Reference flow works, ❌ e_10 initialization poor (287.0)
- CSV-fix S13: ✅ Better e_10 (192.9), ✅ CSV export complete, ❌ Flow blocked

---

## 🐛 Current Issues

### Issue 1: S13 CSV Export Block Causing State Mixing ⚠️ HIGH PRIORITY

**Problem**:
- S12 → S14 Reference flow: ✅ WORKING (d_127, d_128, d_131 update)
- S12 → S15 Reference flow: ✅ WORKING (ref_d_135 updates)
- S12 → S15 → S04 Reference flow: ✅ WORKING (ref_j_32 updates)
- **S12 → S13 → S01 Reference flow**: ❌ BLOCKED (e_10 doesn't update)
- **Current S13**: "significant state mixing when we make changes in other sections"
- **Backup S13**: "good state isolation" and working flow

**Observation** (User):
> "We have good state isolation among most Target and Reference models across all section files, but this current working S13 file, while it gives us near parity with excel's e_10 and h_10 values, still results in significant state mixing when we make changes in other sections that feed S13 with values it consumes."

**ROOT CAUSE IDENTIFIED** (Post-Dinner Analysis):

**Diff Analysis Results**:
- Total changes: 26 lines (20 line increase: 3662 → 3682)
- **Change #1** (Lines 226-236): CSV export block ⚠️ **THIS IS THE PROBLEM**
- **Change #2** (Lines 2940-2957): m_124 two-stage handling ✅ (good change, not the issue)

**The Smoking Gun - CSV Export Block**:
```javascript
// ✅ CSV EXPORT FIX: Publish ALL Reference defaults to StateManager
if (window.TEUI?.StateManager) {
  ["d_113", "f_113", "j_115", "d_116", "d_118", "g_118", "l_118", "d_119", "l_119", "k_120"].forEach((id) => {
    const refId = `ref_${id}`;
    const val = ReferenceState.getValue(id);
    if (!window.TEUI.StateManager.getValue(refId) && val != null && val !== "") {
      window.TEUI.StateManager.setValue(refId, val, "calculated"); // ❌ WRONG SOURCE!
    }
  });
}
```

**Why This Breaks Everything**:
1. **Wrong source type**: Uses `"calculated"` instead of `"default"`
2. **Wrong timing**: Runs during `ModeManager.initialize()` (before sections fully loaded)
3. **Cascade effect**: Publishing with `"calculated"` source triggers ALL downstream listeners
4. **State contamination**: Cascading calculations run before dual-engine architecture stabilizes
5. **Result**: Target calculations overwrite Reference state (same bug pattern as S10 duplicate listeners!)

**Backup file works because**: It has NO CSV export block at lines 226-236!

**Success Criteria**:
- ✅ S12 Reference changes propagate to S13 heating loads
- ✅ e_10 updates when S12 Reference envelope values change
- ✅ All S13 Reference fields still export to CSV
- ✅ Maintain good e_10 initialization (~192.9)

---

### Issue 2: S12 Air Leakage Bug (3+ Storeys) ⚠️ MEDIUM PRIORITY

**Problem**:
Changes to d_103 (number of storeys) only produce recalculations up to 3 storeys. Beyond 3 storeys, air leakage calculations don't update.

**Background**:
- S12 uses mini JSON table to map air leakage values based on storey height - check if this formula supports 4, 5, 6 storey parameters from d_103
- This functional recall appears broken beyond 3 storeys
- **Historical**: This has NEVER worked - predates dual-state refactors
- Separate from state isolation work

**Status**: Documented but deferred until S13 calculation flow is restored

**File**: [4012-Section12.js](../sections/4012-Section12.js)
**Related Calculation**: Air leakage heat loss (uses d_103 as input)

---

## 📋 Investigation Workplan

### Phase 1: S13 Diff Analysis (NEXT TASK)

**Objective**: Identify what in the 48-line diff breaks S13 consumption

**Steps**:
1. Generate detailed diff of backup vs CSV-fix S13:
   ```bash
   diff -u OBJECTIVE\ 4011RF/sections/4012-Section13.js \
           OBJECTIVE\ 4011RF/sections/4012-Section13.js.backup.js
   ```

2. Focus on these areas:
   - StateManager.addListener calls for S12 Reference fields
   - getExternalValue() or getValue() calls reading S12 data
   - ModeManager.initialize() and when CSV publication runs
   - Any code that might prevent listener registration

3. Look for timing issues:
   - Does CSV publication run before listeners are added?
   - Does it overwrite values S13 needs from S12?

**Key Questions**:
- Where does S13 consume S12 envelope data (d_103, g_103, etc.)?
- How does backup S13 trigger recalculation when S12 publishes?
- What's different in CSV-fix S13 that breaks this?

---

### Phase 2: Attempted Fix - S12 Safety Net Pattern ❌ FAILED

**Status**: REVERTED (Commit 0d1e817 → acd5755)

**The Attempted Solution**: Remove CSV export block from initialize(), use S12's safety net pattern in calculateAll()

**Why We Thought This Would Work**:
- S12 uses this pattern successfully (lines 2289-2301 in S12)
- Publishes Reference user input fields in `calculateAll()` AFTER both engines run
- Uses `"default"` source, not `"calculated"`
- Runs at the RIGHT time (after initialization, during normal calculation)
- No cascading listener triggers during initialization

**Implementation Tried**:
1. **Removed** lines 226-236 from current S13 (the CSV export block)
2. **Added** safety net in S13's `calculateAll()` function (after both engines run):
```javascript
// ✅ CSV EXPORT SAFETY NET: Ensure user input Reference fields are published
// (Moved from initialize() to prevent cascading listener triggers during startup)
// Uses "default" source to avoid triggering listeners, runs AFTER both engines complete
if (window.TEUI?.StateManager) {
  const userInputFields = ["d_113", "f_113", "j_115", "d_116", "d_118", "g_118", "l_118", "d_119", "l_119", "k_120"];
  userInputFields.forEach((fieldId) => {
    const value = ReferenceState.getValue(fieldId);
    if (value !== null && value !== undefined && value !== "") {
      window.TEUI.StateManager.setValue(`ref_${fieldId}`, value, "default");
    }
  });
}
```

**Test Results** (Oct 25, Late Evening):
- ❌ Nothing broke but nothing improved
- ❌ Still "significant state mixing across a number of sections"
- ❌ Changes in Target mode still affect Reference model values
- ❌ Pattern that worked perfectly in S12 did NOT work in S13

**Why It Failed**:
- **The CSV export block is NOT the root cause**
- State mixing persists even with block removed
- Problem is deeper in S13's architecture
- S13 is fundamentally different from S12 (heating loads vs envelope)

**Key Insight**:
> "Nothing broke but nothing improved either. Still significant state mixing across a number of sections (ie change made in Target only, values change in both Target and Reference models)."

**Decision**: Revert and take more careful approach tomorrow

**Lessons Learned**:
1. S13 state mixing is NOT solely caused by CSV export timing
2. S12 safety net pattern doesn't translate directly to S13
3. S13 is the last file to refactor in nearly 12-month cycle - can't afford to get it wrong
4. Need deeper architectural analysis of S13's listener setup
5. Must identify ALL places where Target/Reference states interact in S13

---

### Phase 3: Next Investigation Plan (TOMORROW)

**Current Understanding**:
- CSV export block removal did NOT fix state mixing
- Problem is deeper than initialization timing
- Current S13 has structural issues with Target/Reference isolation
- Backup S13 has better isolation but poor e_10 initialization

**Goals for Tomorrow**:
1. **Systematic Listener Audit**: Map EVERY listener in current S13
   - Identify which call Target-only functions
   - Find where Reference listeners might trigger Target code
   - Look for patterns like S10's duplicate listener bug

2. **State Contamination Points**: Find ALL places where Target state could overwrite Reference
   - Function calls that don't check ModeManager.currentMode
   - Shared calculation functions that write to both states
   - setValue() calls that might target wrong state object

3. **Backup vs Current Deep Dive**: Beyond the 26-line diff
   - Test backup S13 with current codebase (does it still have good isolation?)
   - Compare listener architecture between versions
   - Identify what changed in calculation flow, not just lines

4. **Conservative Approach**:
   - Make ONE small change at a time
   - Test state isolation after each change
   - If mixing appears, immediate revert
   - Document every observation

**Critical Context**:
- This is the LAST file to refactor in nearly 12-month development cycle
- S13 handles heating loads - most complex calculations in system
- Cannot afford to break this - production readiness depends on it
- User's observation: "S13 is complicated"

**Success Metric**:
Clean state isolation where Target changes do NOT affect Reference values (and vice versa)

---

## 🔍 Technical Context

### S12 → S13 Data Flow

**S12 Publishes** (to StateManager with `ref_` prefix):
- ref_d_103 (stories)
- ref_g_103 (exposure - Normal/Exposed)
- ref_d_105 (conditioned volume)
- ref_d_108 (blower door method)
- ref_g_109 (measured ACH50)
- ref_g_101, ref_d_101, ref_i_104 (calculated envelope values)

**S13 Should Consume**:
- Volume data for heating load calculations
- Envelope U-values and areas
- Air leakage values

**Mechanism** (in working backup):
- S13 likely has listeners for S12 calculated fields
- OR S13 reads S12 values during its own calculateAll()
- Changes in S12 Reference → trigger S13 Reference recalculation

---

## 📊 Current State

**Branch**: S12-S13-PURITY (fresh branch from S10-S11-PURITY)

**Active Files**:
- S12: 4012-Section12.js (CSV export working ✅)
- S13: 4012-Section13.js (backup version - flow works, CSV incomplete)
- S13 CSV-fix: 4012-Section13.js.backup.js (flow broken, CSV complete)

**Values**:
- e_10 with backup S13: 287.0 (too high)
- e_10 with CSV-fix S13: 192.9 (better, closer to Excel ~196.6)
- h_10: 93.7 (perfect ✅)

**Test Approach**:
Make changes to backup S13 (currently active) to add CSV export without breaking flow.

---

## 🎯 Success Criteria

### For S13 Calculation Flow Fix:
- ✅ S12 Reference changes propagate to S13
- ✅ e_10 updates when S12 Reference envelope changes
- ✅ All S13 Reference fields export to CSV
- ✅ e_10 initialization close to Excel (~192.9)
- ✅ h_10 remains perfect (93.7)
- ✅ Clean state isolation (Target/Reference independent)

### For S12 Air Leakage Fix:
- ✅ d_103 changes affect calculations for ALL storey counts (1-20+)
- ✅ Air leakage heat loss recalculates correctly
- ✅ No regression in other S12 calculations

---

## 📝 Key Learnings from S10-S11-PURITY

1. **Browser Cache**: Always hard refresh with DevTools cache disabled when testing JavaScript changes
2. **Debug Logging**: Comprehensive console.log statements are essential for tracing publication/consumption
3. **Safety Nets**: Re-publishing in calculateAll() prevents initialization timing issues
4. **File Comparison**: Small diffs (48 lines) can have major impacts - analyze carefully

---

## 🚀 Next Steps

1. **Immediate**: Generate detailed diff of S13 backup vs CSV-fix
2. **Analyze**: Identify consumption mechanism in backup S13
3. **Test**: Comment out CSV block in CSV-fix to verify hypothesis
4. **Fix**: Port CSV functionality to backup without breaking flow
5. **Then**: Address S12 air leakage bug for 3+ storeys
