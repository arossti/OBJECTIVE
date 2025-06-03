# Contributing to OBJECTIVE TEUI

## Project Structure

This workspace contains two main codebases:

### OBJECTIVE 4011 (Legacy/Stable)
- **Status**: Production-ready, feature-complete
- **Purpose**: Current working calculator with proven dual-engine architecture
- **Location**: `/OBJECTIVE 4011/`
- **When to modify**: Only for critical bug fixes or reference when implementing 4012

### OBJECTIVE 4012 (Active Development)
- **Status**: Under active development
- **Purpose**: Next-generation framework with tuple-based calculations
- **Location**: `/OBJECTIVE 4012/`
- **When to modify**: All new feature development and architectural improvements

### Shared Resources
- **experimental/**: Proof-of-concept code and experiments
- **documentation/**: Project-wide documentation
- **README.md**: Main project documentation (covers both 4011 and 4012)
- **LICENSE**: MIT License applying to entire project

## Development Focus

**Primary development should happen in OBJECTIVE 4012** as we work toward the new architecture goals:
- Tuple-based dual calculations
- Pure functional architecture
- 50% code reduction
- Sub-100ms recalculation performance

## File Naming Conventions

- **4011 files**: Legacy naming (e.g., `4011-Section03.js`)
- **4012 files**: New framework naming (e.g., `4012-S03.js`)
- Always use the appropriate prefix to maintain clear separation

## Before You Commit

1. Ensure all changes are in the correct directory (4011 vs 4012)
2. Update relevant documentation if you've changed architecture
3. Test both Application and Reference model calculations
4. Verify no cross-contamination between state hemispheres 