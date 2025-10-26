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

### S13 File Status ⚠️ FILES SWAPPED (Oct 25 Evening)

**ACTIVE FILE** (In calculation flow):
- `4012-Section13.js` (3662 lines) - **BACKUP VERSION NOW ACTIVE**
  - ✅ GOOD state isolation (Target/Reference independent)
  - ❌ Missing CSV export for Reference fields
  - ❌ e_10 initialization needs improvement (~287.0, target ~192.9)
  - 📋 Tomorrow: Add CSV export using S12 safety net pattern

**OFFLINE FILE** (Taken out of calculation flow):
- `4012-Section13.js.oct25` (3682 lines) - **STATE MIXING VERSION**
  - ❌ BROKEN state isolation (significant state mixing across sections)
  - ❌ Target changes contaminate Reference values
  - ✅ Good e_10 initialization (192.9)
  - ✅ Has CSV export
  - 📋 Kept for reference to understand e_10 calculation differences

**Why We Swapped**:
User chose Option B: "Carefully add CSV export improvements to the backup S13 file"
- Starting from known-good state isolation
- Conservative, testable approach
- Lower risk than fixing broken architecture

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

### Phase 3: Tomorrow's Plan (Option B - Build on Backup) ✅ APPROVED

**Strategy**: Add CSV export to backup S13 (now active) without breaking state isolation

**Phase 1: Baseline Test** (15 min) ✅ COMPLETE (Oct 25 Evening)
- ✅ Load backup S13 with current codebase (DONE - now active file)
- ✅ Test state isolation still works (hard refresh required)
- ✅ **STATE ISOLATION CONFIRMED EXCELLENT** (User test)
  - Reference changes apply to Reference model ONLY
  - Target changes apply to Target model ONLY
  - NO state mixing across nearly EVERY section
  - Tested wide sampling of key user edit fields
- ❌ Missing CSV export functionality for Reference fields
- ⚠️ **Values on Fresh Initialization**:
  - **e_10**: 277.8 (Current) vs ~196.6 (Excel parity target) - **NEEDS IMPROVEMENT**
  - **h_10**: 93.6 (Current) vs 93.7 (Excel parity target) - **VERY CLOSE** ✅
  - Note: .oct25 file achieved e_10 ~196.6 but with broken state isolation
  - Goal: Achieve Excel parity (196.6) WITHOUT breaking state isolation

**Phase 2: Add Missing Reference Listeners** (CRITICAL - Must do FIRST!) ⚠️
- **Goal**: Enable automatic propagation of Reference changes to S13
- **Current State**: Reference calcs work when triggered manually, but don't auto-update
- **Add listeners** for (around line 2335 in registerWithStateManager):
  - `ref_d_127` (TED from S14) - **HIGHEST PRIORITY**
  - `ref_l_128` (from S14)
  - `ref_i_71` (Total Occ Gains from S09)
  - `ref_i_79` (Total App Gains from S10)
  - `ref_k_104` (Total Ground Loss from S12)
  - `ref_i_104`, `ref_g_101`, `ref_d_101` (S12 envelope values)
- **Pattern**: Each listener should call `calculateAndRefresh()` (like existing Target listeners)
- **Test after each listener added**:
  - Change upstream Reference value (e.g., S09 d_64 in Reference mode)
  - Does S13 e_10 update AUTOMATICALLY without manual interaction?
  - Does state isolation remain clean?

**Phase 2b: Fix DOM/StateManager Initialization Sync** (Related issue)
- **Problem**: DOM shows "Heatpump"/"Cooling" but StateManager has different defaults
- **Investigate**: ReferenceState.initialize() vs DOM display vs CSV export values
- **Fix**: Ensure refreshUI() properly syncs DOM with ReferenceState on mode switch
- **Test**: After initialization, does DOM match what CSV exports?

**Phase 3: CSV Export Safety Net** (AFTER listeners fixed)
- Add safety net to S13's `calculateAll()`
- Use S12 pattern with `source="default"` (lines 2289-2301 in S12 as reference)
- Fields to publish: d_113, f_113, j_115, d_116, d_118, g_118, l_118, d_119, l_119, k_120
- Test after addition:
  - Does state isolation break?
  - Do Reference fields export to CSV?
  - Does S12→S13 flow still work?

**Phase 4: E_10 Investigation** (if Phase 2+3 succeed)
- After listeners fixed, check if e_10 improves automatically
- If still not at 196.6 target, compare backup vs .oct25 calculation logic
- Look at differences in lines 2940-2957 (m_124 two-stage handling)
- Key question: Is better e_10 from safe calculation logic or contamination side-effect?

**⚠️ CRITICAL DISCOVERY - Missing Reference Listeners** (Oct 26 Early AM)

**The Problem**: S13 is missing Reference listeners for ALL upstream dependencies!

**What S13 Has** (Lines 2311-2335):
- ✅ `ref_d_20`, `ref_d_21`, `ref_d_22`, `ref_h_22` (climate data)
- ✅ `ref_i_59` (indoor RH%)

**What S13 is MISSING**:
- ❌ `ref_d_127` (TED from S14) - **SMOKING GUN!**
- ❌ `ref_l_128` (from S14)
- ❌ `ref_i_71` (Total Occ Gains from S09)
- ❌ `ref_i_79` (Total App Gains from S10)
- ❌ `ref_k_104` (Total Ground Loss from S12)
- ❌ `ref_i_104`, `ref_g_101`, `ref_d_101` (S12 envelope values)

**User's Detective Work**:
Testing revealed "dud" sections in Reference mode:
1. S09: d_64 (activity level) → affects gains → no e_10 change
2. S10: d_80 and ALL S10 values → no effect on Reference totals
3. S11: d_97 (TB% penalty) → flows to S12 and S14, but NOT to S13

**The Pattern**:
- Changes flow correctly: S09 → S10 → S11 → S12 → S14 ✅
- S14 DOES update with Reference values ✅
- S13 READS `ref_d_127` in calculations (lines 3022, 3324) ✅
- But S13 doesn't LISTEN for `ref_d_127` changes ❌
- **Result**: S13 never recalculates when upstream Reference values change!

**Why This Wasn't Obviously Broken**:
- S13 reads correct values during initialization (when calculateAll() runs)
- But doesn't respond to upstream changes after initialization
- This explains both the poor e_10 AND why Reference flow seems "blocked"

**NOT a Red Herring Anymore**:
- Originally thought missing listeners weren't the cause (both files missing same)
- But BOTH files have the SAME problem - incomplete Reference architecture
- This is THE root cause of poor e_10 and broken Reference flow

**How the d_113 Test Revealed This** (Oct 26 Early AM):
- Added single-field CSV export: `ref_d_113` with `source="default"`
- **Result**: e_10 dropped from 277.8 to 185.5 (massive improvement!)
- BUT: Reference flow broke for S09, S10, S11 → S13 chain
- Changes to upstream sections became "duds" (no effect on e_10)
- **Why**: Publishing `ref_d_113` somehow interfered with existing fragile flow
- **Reverted**: Need to fix missing listeners FIRST, then retry CSV export

**The Real Issue**:
- S13's Reference flow was ALREADY broken (missing listeners)
- It just wasn't obvious because initialization ran calculateAll()
- The d_113 test exposed the fragility by changing initialization timing
- Can't add CSV export until Reference listener architecture is complete

**IMPORTANT CLARIFICATION** (Oct 26 AM):
User observations reveal the situation is more nuanced:

1. **Why Reference Flow "Works" Sometimes**:
   - S13 uses `registerDependency()` for Target fields (lines 2275-2288)
   - These create dependency graph but NOT explicit listeners
   - When user toggles through systems in Reference mode, manual interaction triggers `calculateAll()`
   - So Reference calculations DO run, they just don't run AUTOMATICALLY on upstream changes
   - Example: Toggling to "Heatpump" in Reference → triggers calculate → e_10 goes from 277.8 to 185.5

2. **DOM vs StateManager Mismatch**:
   - User noted: DOM shows "Heatpump" and "Cooling" on initialization
   - But CSV export shows "No Cooling" is what system calculates with
   - **Problem**: DOM display doesn't match StateManager/ReferenceState truth
   - `refreshUI()` and mode-switching may not be syncing correctly

3. **What's Actually Broken**:
   - **Automatic propagation**: Upstream Reference changes don't auto-trigger S13 recalc
   - **Initialization state**: ReferenceState defaults may not match DOM defaults
   - **UI sync**: DOM doesn't reflect actual calculation state

4. **What's NOT Broken**:
   - Reference calculations themselves work correctly when triggered
   - State isolation is clean (Target/Reference don't contaminate each other)
   - Manual interaction triggers proper recalculation

**Revised Understanding**:
The missing Reference listeners don't break calculations, they break **automatic propagation**.
User must manually interact with S13 to trigger recalc after upstream Reference changes.
This is why toggling systems "fixes" the e_10 value - it forces a recalculation.

---

## 🔬 CSV Export Mechanism Analysis (Late Evening Investigation)

**Question**: How are d_116 and g_118 getting published to StateManager for CSV export in backup S13?

**Discovery** (Lines 368-378 in backup S13):

### The Working Pattern - ModeManager.setValue()

When user changes a dropdown (d_116, g_118, etc.), the flow is:

1. **Dropdown change** → `handleDropdownChange()` (line 2196)
2. **Calls** → `ModeManager.setValue(fieldId, newValue, "user-modified")` (line 2204)
3. **ModeManager.setValue()** does TWO things (lines 368-378):
   ```javascript
   setValue: function (fieldId, value, source = "user") {
     this.getCurrentState().setValue(fieldId, value, source); // Store in Target/ReferenceState

     // ✅ S10 SUCCESS PATTERN: Mode-aware StateManager publication
     if (this.currentMode === "target") {
       // Target mode: Store unprefixed for downstream consumption
       window.TEUI.StateManager.setValue(fieldId, value, "user-modified");
     } else if (this.currentMode === "reference") {
       // Reference mode writes with ref_ prefix
       window.TEUI.StateManager.setValue(`ref_${fieldId}`, value, source);
     }
   }
   ```

**Key Insight**:
- User input fields (d_116, g_118, d_113, f_113, j_115, d_118, d_119, l_118, l_119, k_120) get published to StateManager **automatically** when user edits them
- Publication happens via `ModeManager.setValue()` with mode-aware prefixing
- Uses `source="user-modified"` (NOT "calculated"!)
- This is why d_116 and g_118 appear in CSV export - they're user input fields

**Why Some Fields Missing from CSV** (d_113, f_113, j_115):
- Screenshot shows yellow cells (missing): d_113, f_113, j_115, l_118, d_119, l_119, k_120
- These ARE user input fields that should publish via ModeManager.setValue()
- Likely NOT being edited in Reference mode before export, so no ref_ value exists in StateManager
- d_116 and g_118 WERE edited, so they have ref_ values

**Implication for Tomorrow's Work**:
The .oct25 file's CSV export block (lines 226-236) was trying to solve this by publishing defaults for fields that hadn't been edited yet. But it used:
- `source="calculated"` ❌ (triggers cascading listeners)
- During `initialize()` ❌ (wrong timing)

**The Safe Solution** (for Phase 2 tomorrow):
Add safety net in `calculateAll()` that publishes user input Reference fields with:
- `source="default"` ✅ (doesn't trigger listeners)
- After both engines complete ✅ (right timing)
- Only if value exists in ReferenceState ✅ (respects user data)

**Phase 5: Final Integration** (if all phases succeed)
- Verify all success metrics achieved:
  - ✅ Clean state isolation
  - ✅ Reference flow works for ALL sections
  - ✅ CSV export complete
  - ✅ e_10 at or near 196.6 target
  - ✅ h_10 at or near 93.7 target

**Critical Context**:
- LAST file to refactor in nearly 12-month development cycle
- S13 handles heating loads - most complex calculations in system
- Cannot afford to break this - production readiness depends on it
- Conservative approach: ONE change at a time with testing

**Success Metrics**:
1. ✅ Clean state isolation (Target changes don't affect Reference)
2. ✅ CSV export works for all Reference fields
3. ✅ S12→S13→S01 Reference flow works
4. ✅ Good e_10 initialization (~192.9)
5. ✅ Good h_10 value maintained (~93.7)

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
