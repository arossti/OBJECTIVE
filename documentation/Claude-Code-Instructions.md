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
│   │   │   └── Logs.md                    ← Debug logs
│   │   ├── 4011-StateManager.js           ← Central state management
│   │   ├── 4011-Calculator.js             ← Main calculation engine
│   │   └── index.html                     ← Entry point
│   ├── ARCHIVE/                           ← Legacy code resources
│   └── gh-pages-local/                    ← Deployment files
```

## 🎯 Key Facts

- **Project**: Dual-model building energy calculator (Target vs Reference models)
- **Current Branch**: `4012-S13` (local git branch)
- **Priority**: Section 13 "cooling bump" elimination while preserving 100% Excel parity
- **Excel Parity Achieved**: h_10 = 93.7 ✅ (major breakthrough Sept 23, 2025)
- **Issue**: Manual "cooling bump" required (d_116 toggle) to achieve 93.7 from initial 93.4

## 📋 Essential Documents

1. **README.md** (166KB) - Complete project history & architecture
2. **S13-ENDGAME.md** - Current workplan with strategic approach
3. **Logs.md** - Console logs for forensic analysis (manually updated by human)
4. **4012-CHEATSHEET.md** - Architectural patterns (if exists)

### 🔍 Logs.md Workflow

- **Manual Process**: Human copies/pastes console logs from browser into `Logs.md`
- **Not Automatic**: Agents cannot access browser console directly
- **Agent Action**: Request logs from human, then analyze `Logs.md` content
- **Use Case**: Forensic debugging, calculation sequence analysis, error tracking

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

### Do NOT Touch

- Avoid major refactoring (graveyard of failed S13 attempts exists)
- Preserve working state isolation architecture
- Don't break h_10 = 93.7 Excel parity

### Focus Areas

- **Timing/sequencing fixes** over architectural changes
- **Surgical precision** - minimal code changes
- **Deep debugging** before any modifications

## 🔍 Quick Orientation Commands

```bash
# List main codebase
ls -la "OBJECTIVE 4011RF"

# Check current S13 variants
ls -la "OBJECTIVE 4011RF/sections/"*Section13*

# Read current workplan
head -50 "OBJECTIVE 4011RF/documentation/S13-ENDGAME.md"

# Check recent commits
git log --oneline -10
```

## 🎯 Session Workflow

1. **Start**: Review S13-ENDGAME.md workplan
2. **Analyze**: Read current Section13.js state
3. **Debug**: Investigate "cooling bump" mechanism (93.4 → 93.7)
4. **Fix**: Implement minimal change to eliminate manual trigger
5. **Test**: Verify Excel parity & state isolation maintained
6. **Commit**: Document changes with detailed commit message

## 💡 Pro Tips

- **Path Issues**: Use quotes for paths with spaces: `"OBJECTIVE 4011RF/file.js"`
- **Context Loading**: Read key files in parallel for efficiency
- **Excel Coordinates**: DOM uses Excel cell references (b_18 = B18)
- **State Isolation**: Target/Reference models must remain 100% isolated
- **Conservative Approach**: This is the final push after 12 months - preserve what works!

---

_Created: Sept 24, 2025 - For efficient Claude Code sessions on OBJECTIVE TEUI project_
