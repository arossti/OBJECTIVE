# File Structure Mapping: main → mhp/prepare-public-release

## Overview
The `mhp/prepare-public-release` branch restructured the codebase from:
- `OBJECTIVE 4011RF/` (old structure)
to:
- `src/` (new structure)

Meanwhile, `main` branch has 41 commits with ongoing development on the old structure.

## Merge Base
Common ancestor: `9d05b74` (Merge pull request #11 from arossti/mhp/license)

## File Mapping

### Core Files (Root Level)
OLD PATH (main) → NEW PATH (prepare-public-release)
```
OBJECTIVE 4011RF/4011-AppendixE.js        → src/core/AppendixE.js
OBJECTIVE 4011RF/4011-Calculator.js       → src/core/Calculator.js
OBJECTIVE 4011RF/4011-ClimateValues.js    → src/core/ClimateValues.js
OBJECTIVE 4011RF/4011-Clock.js            → src/core/Clock.js
OBJECTIVE 4011RF/4011-ComponentBridge.js  → src/core/ComponentBridge.js
OBJECTIVE 4011RF/4011-Dependency.js       → src/core/Dependency.js
OBJECTIVE 4011RF/4011-ExcelMapper.js      → src/core/ExcelMapper.js  ⚠️ MODIFIED IN MAIN
OBJECTIVE 4011RF/4011-FieldManager.js     → src/core/FieldManager.js
OBJECTIVE 4011RF/4011-FileHandler.js      → src/core/FileHandler.js  ⚠️ MODIFIED IN MAIN
OBJECTIVE 4011RF/4011-MobileDetect.js     → src/core/MobileDetect.js
OBJECTIVE 4011RF/4011-QCMonitor.js        → src/core/QCMonitor.js
OBJECTIVE 4011RF/4011-ReferenceManager.js → src/core/ReferenceManager.js
OBJECTIVE 4011RF/4011-ReferenceToggle.js  → src/core/ReferenceToggle.js
OBJECTIVE 4011RF/4011-ReferenceValues.js  → src/core/ReferenceValues.js  ⚠️ MODIFIED IN MAIN
OBJECTIVE 4011RF/4011-SectionIntegrator.js → src/core/SectionIntegrator.js
OBJECTIVE 4011RF/4011-StateManager.js     → src/core/StateManager.js
OBJECTIVE 4011RF/4011-TooltipManager.js   → src/core/TooltipManager.js  ⚠️ HEAVILY MODIFIED IN MAIN
OBJECTIVE 4011RF/4011-init.js             → src/core/init.js
OBJECTIVE 4011RF/4012-Cooling.js          → src/core/Cooling.js
OBJECTIVE 4011RF/4012-Orchestrator.js     → src/core/Orchestrator.js
```

### Section Files
OLD PATH (main) → NEW PATH (prepare-public-release)
```
OBJECTIVE 4011RF/sections/4012-Section01.js → src/sections/Section01.js  ⚠️ MODIFIED IN MAIN
OBJECTIVE 4011RF/sections/4012-Section02.js → src/sections/Section02.js
OBJECTIVE 4011RF/sections/4012-Section03.js → src/sections/Section03.js  ⚠️ MODIFIED IN MAIN
OBJECTIVE 4011RF/sections/4012-Section04.js → src/sections/Section04.js
OBJECTIVE 4011RF/sections/4012-Section05.js → src/sections/Section05.js
OBJECTIVE 4011RF/sections/4012-Section06.js → src/sections/Section06.js
OBJECTIVE 4011RF/sections/4012-Section07.js → src/sections/Section07.js  ⚠️ MODIFIED IN MAIN
OBJECTIVE 4011RF/sections/4012-Section08.js → src/sections/Section08.js  ⚠️ MODIFIED IN MAIN
OBJECTIVE 4011RF/sections/4012-Section09.js → src/sections/Section09.js  ⚠️ MODIFIED IN MAIN
OBJECTIVE 4011RF/sections/4012-Section10.js → src/sections/Section10.js  ⚠️ HEAVILY MODIFIED IN MAIN
OBJECTIVE 4011RF/sections/4012-Section11.js → src/sections/Section11.js  ⚠️ HEAVILY MODIFIED IN MAIN
OBJECTIVE 4011RF/sections/4012-Section12.js → src/sections/Section12.js  ⚠️ HEAVILY MODIFIED IN MAIN
OBJECTIVE 4011RF/sections/4012-Section13-GS.js → src/sections/Section13-GS.js
OBJECTIVE 4011RF/sections/4012-Section13-OFFLINE.js → src/sections/Section13-OFFLINE.js
OBJECTIVE 4011RF/sections/4012-Section13.js → src/sections/Section13.js
OBJECTIVE 4011RF/sections/4012-Section14.js → src/sections/Section14.js
OBJECTIVE 4011RF/sections/4012-Section15.js → src/sections/Section15.js
OBJECTIVE 4011RF/sections/4012-Section16.js → src/sections/Section16.js
OBJECTIVE 4011RF/sections/4012-Section16C.js → src/sections/Section16C.js
OBJECTIVE 4011RF/sections/4012-Section17.js → src/sections/Section17.js
```

### OBC Files
OLD PATH (main) → NEW PATH (prepare-public-release)
```
OBJECTIVE 4011RF/obc/OBC-*.js        → src/obc/OBC-*.js (1:1 mapping)
OBJECTIVE 4011RF/obc/sections/*.js   → src/obc/sections/*.js (1:1 mapping)
OBJECTIVE 4011RF/obc/indexobc.html   → src/obc/indexobc.html
OBJECTIVE 4011RF/obc/tests/*.html    → src/obc/tests/*.html
```

### HTML & Config
```
OBJECTIVE 4011RF/index.html          → index.html (moved to root)  ⚠️ MODIFIED IN MAIN
OBJECTIVE 4011RF/4011-MobileStyles.css → src/4011-MobileStyles.css
                                      → src/MobileStyles.css
```

### Assets
```
(assets remain in same relative structure under src/)
```

### Documentation
```
OBJECTIVE 4011RF/documentation/ → (kept in old structure)
```

## Modified Files in main (need to be ported)

### Heavily Modified (Major Changes):
1. **4011-TooltipManager.js** → src/core/TooltipManager.js
   - 1256 line changes

2. **4012-Section10.js** → src/sections/Section10.js
   - 102 line changes
   - Features: Window/door area publishing, percentage calculations, Reference mode parity

3. **4012-Section11.js** → src/sections/Section11.js
   - 130 line changes
   - Features: RSI/U-value conversions, Anti-Pattern fixes, import handling

4. **4012-Section12.js** → src/sections/Section12.js
   - 157 line changes
   - Features: g_109 editability, fallback anti-pattern elimination, listener optimization

### Moderately Modified:
5. **4011-FileHandler.js** → src/core/FileHandler.js (90 lines)
6. **4011-ExcelMapper.js** → src/core/ExcelMapper.js (40 lines)
7. **4012-Section09.js** → src/sections/Section09.js (24 lines)
8. **index.html** → index.html (24 lines)

### Lightly Modified:
9. **4012-Section01.js** → src/sections/Section01.js (14 lines)
10. **4012-Section08.js** → src/sections/Section08.js (7 lines)
11. **4012-Section03.js** → src/sections/Section03.js (5 lines)
12. **4012-Section07.js** → src/sections/Section07.js (4 lines)
13. **4011-ReferenceValues.js** → src/core/ReferenceValues.js (2 lines)

## Summary Statistics
- **Total commits in main since divergence:** 41
- **Files modified in old structure:** 38 files
- **Net changes:** +6,280 lines added, -1,947 lines removed
- **Key change areas:**
  - Reference mode calculations (S10, S11, S12)
  - Tooltip system overhaul
  - CSV import parity
  - Anti-pattern elimination
  - Bug fixes and performance optimizations

## Recommended Integration Strategy

### Option 1: Cherry-pick commits (RECOMMENDED)
Since the changes are in the old structure, you could:
1. Checkout `mhp/prepare-public-release`
2. Cherry-pick commits from main that modify the old structure
3. Git will handle the rename detection automatically if similarity is high enough

### Option 2: Manual port
For each modified file in main:
1. Get the diff: `git diff 9d05b74..main -- OBJECTIVE\ 4011RF/path/to/file.js`
2. Apply to new location: `src/new/path/file.js`

### Option 3: Merge with rename hints
```bash
git checkout mhp/prepare-public-release
git merge main -X rename-threshold=50
```

## Testing Strategy
After integration, verify:
1. All 41 commits worth of bug fixes are present
2. Reference mode calculations work correctly
3. CSV import parity maintained
4. Tooltip system functional
5. All section calculations accurate

## Detailed Commit List (main since 9d05b74)

```
c84daa3 🔧 FIX: g_109 editability now updates immediately on mode switch
d002f0a 🔧 FIX: g_109 now editable in Reference mode when d_108 is MEASURED
745a594 📝 DOCS: Add fallback anti-pattern fix to G101-BUG.md
169eaff 🔒 SECURITY: Eliminate fallback anti-patterns in S12 calculations
e91085d 📝 DOCS: Update G101-BUG.md with complete fix documentation
d714537 ⚡ PERF: Optimize S12 listeners - remove redundant RSI listeners
0934120 🔧 FIX: S12 Reference g_101 now reads correct S11 state path
1867cc0 📝 DOCS: Add fallback elimination guidance to G101-BUG.md
b1f45b3 ✨ FEATURE: S10 publishes window/door areas with S11 field IDs
ccceb6d 🔧 FIX: Add missing percentage calculations for S10 Reference mode
d1826de 🔧 FIX: Complete Reference mode calculation parity for S10/S11
428efb6 🔧 FIX: Add RSI/U-value conversions for Reference mode in S11
ef28054 🔧 FIX: Add missing i_82 calculation in Reference mode
bb232fd 🎨 STYLE: Run ESLint and Prettier formatting on codebase
cd7b234 📚 DOCS: Add debug session log and reorganize documentation
1427347 🔧 FIX: Remove Anti-Pattern duplicate defaults in S11
abff4b1 🧹 CLEANUP: Remove verbose logging from S10, S12, and S01
2f00b37 📚 DOCS: Add Anti-Pattern 6 and debugging methodology to cheatsheet + cleanup
cc7f46b 🔧 FIX: Remove S09 dropdown listener for d_12 to prevent state mixing
571098a 🔍 DEBUG: Add call stack trace for d_12/ref_d_12 writes
```
(and 21 more commits)
