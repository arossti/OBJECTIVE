# Claude Code Instructions for OBJECTIVE Project

**Quick Start Guide for Future Claude Code Sessions**

## 🏗️ Project Structure

```
TEUI 4.0/
├── OBJECTIVE WORKSPACE/                    ← YOU ARE HERE (git repo root)
│   ├── README.md                          ← 166KB main project documentation
│   ├── OBJECTIVE 4011RF/                  ← Active codebase (focus area)
│   │   ├── sections/                      ← 18 section files (S01-S18)
│   │   ├── documentation/                 ← Key docs & workplans
│   │   │   ├── S13-ENDGAME.md            ← Current priority workplan
│   │   │   └── Logs.md                    ← Debug logs/See Logs.md Workflow below
│   │   ├── 4011-StateManager.js           ← Central state management
│   │   ├── 4011-Calculator.js             ← Main calculation engine
│   │   └── index.html                     ← Entry point
│   ├── ARCHIVE/                           ← Legacy code resources
│   └── gh-pages-local/                    ← Deployment files
```

## 🎯 Key Facts

- **Project**: Dual-model building energy calculator (Target vs Reference models)
- **Current Branch**: `IRONING` (local git branch)
- **Priority**: ExcelMapper Import Completion, Clean Code
- **Excel Parity Goal**: h_10 = 93.7 ✅ (major breakthrough Sept 23, 2025, subsequently drifted to 93.0 - probably related to convergent code wrt ventilation calculation and/or h_10 easing animation race condition)

## 📋 Essential Documents

1. **README.md** (166KB) - Complete project history & architecture
2. **Logs.md** - Console logs for forensic analysis (manually updated by human)
3. **4012-CHEATSHEET.md** - Architectural patterns 

### 🔍 Logs.md Workflow
- **Manual Process**: Human copies/pastes console logs from browser into `Logs.md`
- **Not Automatic**: Agents cannot access browser console directly
- **Agent Action**: Request logs from human, then analyze `Logs.md` content
- **Use Case**: Forensic debugging, calculation sequence analysis, error tracking, QC Audit reports

## 🔧 Git Workflow

**Working Directory**: Already in git repo root (`OBJECTIVE WORKSPACE`)

```bash
# Check status
git status

# Stage specific file
git add "OBJECTIVE 4011RF/path/to/file.js"

# Commit with detailed message
git commit -m "$(cat <<'EOF'
🎯 SECTION: Brief description

Detailed explanation of changes made.

Key points:
- Point 1
- Point 2

🤖 Generated with [Claude Code](https://claude.ai/code)

Co-Authored-By: Claude <noreply@anthropic.com>
EOF
)"

# Check result
git status
```

## 🚨 Critical Guidelines

### Focus Areas
- **Timing/sequencing fixes** over architectural changes
- **Surgical precision** - minimal code changes
- **Deep debugging** before any modifications

## 🔍 Quick Orientation Commands

```bash
# List main codebase
ls -la "OBJECTIVE 4011RF"

# Check current Section variants
ls -la "OBJECTIVE 4011RF/sections/

# Read current workplan
head -50 "OBJECTIVE 4011RF/documentation/Master-Reference-Roadmap.md"

# Check recent commits
git log --oneline -10
```
# Git Note
When running terminal commands, especially git commands, if they fail, check if you are prepending the command with cd to the project's absolute root directory. This must be done for every command in a sequence, as the shell's working directory may not persist between commands.


## 🎯 Session Workflow

1. **Start**: Review Master-Reference-Roadmap.md workplan
2. **Analyze**: Read current ReferenceToggle/ReferenceValues/ReferenceManager files (are they working harmoniously or at cross purposes?)
3. **Debug**: Issue 1: After import of excel file values, inputs appear as if they are defaults, not user-modified (blue styling) making it difficult to determine if values were correctly imported. Issue 2: After valus import, calculations are stale, consider how re-calculation of all sections after import cycle can be best triggered to capture all changed/imported values in the correct sequence (Calculator.js)
4. **Fix**: Commit working code before mods to establish safe restore point. 
5. **Test**: Verify Excel import parity, state isolation, correct calcilations (excel calculation parity) all maintained
6. **Commit**: Document changes with uppdated documentation (.md files) and git message referring to document. 

## 💡 Pro Tips

- **Path Issues**: Use quotes for paths with spaces: `"OBJECTIVE 4011RF/file.js"`
- **Context Loading**: Read key files in parallel for efficiency
- **Excel Coordinates**: DOM uses Excel cell references (b_18 = B18)
- **State Isolation**: Target/Reference models must remain 100% isolated
- **Conservative Approach**: This is the final pre-production refactor/cleanup after 12 months of development - preserve what works!

---

*Updated: Oct 4, 2025 - For efficient Claude Code sessions on OBJECTIVE TEUI project*