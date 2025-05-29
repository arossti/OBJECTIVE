# TEUI V2 Dual-Engine Architecture Debugging Guide

## Investigation Summary: Main vs SSv2 Branch Analysis

**Date**: December 2024  
**Investigation Focus**: Understanding why Target calculations work correctly in main but fail in SSv2

## Key Discovery: Main Branch Already Has Dual-Engine Architecture

### Surprising Finding
**Main branch ALREADY implements dual-engine architecture in Section 15:**
- ✅ Has `calculateReferenceModel()` function
- ✅ Has `calculateTargetModel()` function  
- ✅ `calculateAll()` runs BOTH engines simultaneously
- ✅ Uses `ref_` prefix for Reference values
- ✅ Has `setRefValueIfChanged` helper for Reference calculations

### Architecture Understanding Corrected

**Previous Assumption (WRONG)**: Main = single engine, SSv2 = dual engine  
**Reality**: Both main and SSv2 have dual engines, but SSv2 has calculation errors

## Critical Dual-Engine Concepts

### Two Completely Separate Applications
The user's clarification was essential:
> "I think of this like two completely separate apps"

1. **Reference Model**: 
   - Uses Reference standard values (from d_13 code selection)
   - Applies Reference efficiency ratings (f_113 = 7.1 HSPF)
   - Always calculates and reports to S01 for performance dashboard

2. **Target Model**:
   - Uses Target/Design values (user inputs)
   - Uses user-specified equipment efficiency
   - Calculates actual design performance

### UI Mode Behavior (Corrected Understanding)

**Reference Mode**: 
- Shows Reference calculations in UI reflecting Reference standard values
- User sees what Reference building would perform like
- NOT just overrides, but actual Reference calculations displayed

**Target Mode**:
- Shows ONLY Target calculations 
- Exception: S01 shows both as performance dashboard
- User sees their design performance vs Reference baseline

## Data Source Isolation Issues

### The Real Problem in SSv2
The calculation engines are **mixing data sources** instead of maintaining isolation:

**Should Be**:
- Reference Engine: Gets ALL values from Reference sources (standards + any overrides)
- Target Engine: Gets ALL values from Target sources (user design inputs)

**Currently Happening**:
- Engines are getting mixed data from both sources
- This causes incorrect calculations in SSv2

## Investigation Next Steps

### Compare Exact Data Source Methods
1. **Main Branch**: How does `getNumericValue()` work?
2. **SSv2**: How do `getRefValue()` and application getters work?
3. **Key Question**: Are Reference calculations truly isolated to Reference data?

### Specific Areas to Investigate
1. **Section 15 `getRefValue()` function**: Is it properly getting Reference standard values?
2. **StateManager APIs**: Differences between main and SSv2 in data retrieval
3. **Reference Standard Loading**: How does d_13 selection populate Reference values?
4. **Cross-Section Data Flow**: S04 → S15 → S01 Reference value propagation

## Working Hypothesis

**Main branch works because**:
- Target calculations use clean user input data
- Reference calculations may be simpler or use different data paths

**SSv2 fails because**:
- Dual-engine implementation has data source contamination
- Reference and Target engines are not properly isolated
- Complex helper functions may be mixing data sources

## Architecture Principles (Validated)

✅ **Both engines always run** - This is correct behavior  
✅ **S01 shows both columns** - Performance dashboard concept confirmed  
✅ **UI mode controls user interaction** - Not calculation scope  
❌ **Data source isolation** - This is where SSv2 is failing

## Next Investigation Phase

When returning to SSv2:
1. Compare `getNumericValue()` between main and SSv2
2. Trace a single calculation through both data paths
3. Verify Reference standard values are properly loaded and used
4. Ensure Target calculations use only user design inputs

The goal is **perfect data source isolation** where each engine operates as a completely separate application with its own data universe. 