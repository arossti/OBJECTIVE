# S12-S13 Purity Investigation

**Branch**: `S12-S13-PURITY`
**Parent Branch**: `S10-S11-PURITY` (COMPLETE ✅)
**Date Started**: 2025-10-25
**Goal**: Fix Reference model calculation flow S12→S13 and S12 air leakage bug

---

## 🎯 Mission Statement

Restore clean Reference model calculation flow from S12 (envelope) to S13 (heating loads) while maintaining CSV export completeness. Fix S12 air leakage calculation bug for 3+ storey buildings.

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
- `4012-Section13.js` (3662 lines) - **BACKUP VERSION** - Working calculation flow ✅
- `4012-Section13.js.backup.js` (3682 lines) - **CSV FIX VERSION** - Broken calculation flow ❌

**Test Results**:
- Backup S13: ✅ Reference flow works, ❌ e_10 initialization poor (287.0)
- CSV-fix S13: ✅ Better e_10 (192.9), ✅ CSV export complete, ❌ Flow blocked

---

## 🐛 Current Issues

### Issue 1: S13 Not Consuming S12 Reference Values ⚠️ HIGH PRIORITY

**Problem**:
- S12 publishes all Reference values correctly to StateManager ✅
- S13 does NOT consume these values ❌
- When S12 Reference envelope values change (stories, exposure, volume), S13 heating loads don't recalculate
- Result: e_10 doesn't update when S12 Reference values change

**Evidence**:
1. Backup S13 (3662 lines): Calculation flow WORKS
2. CSV-fix S13 (3682 lines): Calculation flow BLOCKED
3. Difference: Only 48 lines (CSV export additions + m_124 handling)

**Root Cause Theory**:
The CSV export publication block in S13 (lines 226-235) is either:
- Overwriting values S13 needs to read from S12
- Running at wrong time (before listeners registered)
- Interfering with listener mechanism

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
- S12 uses mini JSON table to map air leakage values based on storey height
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

### Phase 2: Hypothesis Testing

**Hypothesis**: CSV publication block (lines 226-235) interferes with S13's consumption mechanism

**Test Approach**:
1. Comment out CSV publication block in CSV-fix S13
2. Test if calculation flow restores
3. If YES: Move CSV publication to different location/timing
4. If NO: Look for other differences (m_124 handling?)

---

### Phase 3: Targeted Fix

**Goal**: Port CSV export functionality to backup S13 WITHOUT breaking calculation flow

**Options**:
1. **Option A**: Move CSV publication to end of initialization (after listeners)
2. **Option B**: Use same pattern as S12 (publish in calculateAll() instead)
3. **Option C**: Identify minimal change needed in backup S13 for CSV export

**Implementation**:
- Start with working backup S13
- Add ONLY what's needed for CSV export
- Test calculation flow at each step
- Ensure no timing conflicts with listener registration

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
