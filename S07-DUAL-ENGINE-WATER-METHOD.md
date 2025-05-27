# Section 07 Dual-Engine Water Method Implementation

## Overview

This implementation establishes a truly independent water method dropdown (d_49) and user defined water use field (e_49) in Reference Mode for Section 07. This is the foundation for the dual-engine architecture where Reference and Target calculations run independently.

## Key Features Implemented

### 1. Independent Reference Mode Operation

- **d_49 (Water Method Dropdown)**: Now operates independently in Reference Mode
  - In Design Mode: Updates Application state and runs Target calculations
  - In Reference Mode: Updates Reference state and runs Reference calculations
  - Supports all water methods: User Defined, By Engineer, PHPP Method, NBC Method, OBC Method, Luxury

- **e_49 (User Defined Water Use)**: Enhanced with Reference Mode support
  - In Design Mode: Updates Application state
  - In Reference Mode: Updates Reference state with `ref_` prefix
  - Only editable when d_49 = "User Defined" in current mode

### 2. Dual-Engine Calculation Architecture

#### Reference Model Engine
- `calculateReferenceModel()`: Main Reference calculation orchestrator
- `calculateReferenceWaterUse()`: Uses Reference state values exclusively
- `calculateReferenceHeatingSystem()`: Reference heating calculations
- `calculateReferenceEmissions()`: Reference emissions calculations

#### Target Model Engine  
- `calculateTargetModel()`: Main Target calculation orchestrator
- `calculateTargetWaterUse()`: Uses Application state values exclusively
- `calculateTargetHeatingSystem()`: Target heating calculations
- Existing emissions calculations (unchanged)

### 3. State Management

#### Reference State Storage
Reference calculations are stored with `ref_` prefix for downstream consumption:
- `ref_h_49`: Reference water use (lpppd)
- `ref_i_49`: Reference annual water use (litres/yr)
- `ref_j_50`: Reference DHW energy demand (kWh/yr)
- `ref_k_49`: Reference DHW emissions (kgCO2e/yr)
- `ref_k_51`: Reference electrical demand (kWh/yr)
- `ref_h_69`: Reference system losses (kWh/yr)

#### Application State Storage
Target calculations update visible fields and Application state:
- `h_49`, `i_49`, `j_50`, `k_49`, etc. (standard field IDs)

### 4. UI Behavior

#### Reference Mode
- d_49 dropdown remains editable (per AppendixE configuration)
- e_49 becomes editable when d_49 = "User Defined"
- Display shows Reference calculation results
- Changes trigger Reference Model calculations only

#### Design Mode
- Normal operation - all fields editable as configured
- Display shows Target calculation results  
- Changes trigger Target Model calculations only

### 5. Helper Functions

#### State Access Functions
- `getRefFieldValue(fieldId)`: Get field value from Reference state
- `getRefNumericValue(fieldId, defaultValue)`: Get numeric value from Reference state
- `getAppFieldValue(fieldId)`: Get field value from Application state
- `getAppNumericValue(fieldId, defaultValue)`: Get numeric value from Application state

#### UI Update Functions
- `updateReferenceDisplayValues()`: Update UI with Reference calculation results
- `updateSection7VisibilityForMode(isReferenceMode)`: Update field visibility for current mode

## Testing

### Test File: `test-s07-dual-water-method.html`

The test file provides:
- Reference/Design mode toggle
- Real-time display of current and reference values
- Test controls for water method and user defined values
- Debug console for monitoring state changes

### Test Scenarios

1. **Basic Independence Test**:
   - Set Design Mode: d_49="User Defined", e_49="40"
   - Switch to Reference Mode
   - Change d_49="PHPP Method" 
   - Verify: Design values unchanged, Reference values updated

2. **User Defined Test**:
   - In Reference Mode: Set d_49="User Defined", e_49="50"
   - Switch to Design Mode
   - Verify: Design mode still shows original values
   - Switch back to Reference Mode
   - Verify: Reference mode shows updated values

3. **Downstream Consumption Test**:
   - Verify `ref_j_50` and `ref_k_49` values are stored
   - These will be consumed by Section 01 Reference calculations

## Integration Points

### AppendixE Configuration
Fields configured as "Independently User-Editable in Reference Mode":
- `d_49`: Water Use Method
- `e_49`: User Defined Water Use  
- `d_53`: DWHR Efficiency

### StateManager Integration
- Uses `setValueInReferenceMode()` when available
- Fallback to `ref_` prefix storage
- Proper state isolation between Reference and Application

### Section 01 Integration
Reference values stored with `ref_` prefix will be consumed by Section 01's Reference Model calculations for proper dual-engine TEUI calculation.

## Next Steps

1. **Equipment Selection (d_51)**: Implement independent Reference Mode operation for DHW energy source
2. **Efficiency Values (d_52, k_52)**: Implement independent Reference Mode operation for efficiency factors
3. **DWHR Efficiency (d_53)**: Already configured in AppendixE, needs implementation
4. **Section 01 Integration**: Ensure Section 01 consumes Reference values properly
5. **Testing**: Comprehensive testing of all water methods and edge cases

## Files Modified

- `sections/4011-Section07.js`: Main implementation
- `4011-AppendixE.js`: Field behavior configuration (already had d_49, e_49)
- `test-s07-dual-water-method.html`: Test file (new)

## Architecture Benefits

This implementation establishes the pattern for dual-engine operation:
- **State Isolation**: Reference and Application states are completely independent
- **Calculation Independence**: Reference and Target calculations use separate engines
- **UI Responsiveness**: Immediate feedback in current mode
- **Downstream Integration**: Reference values properly stored for Section 01 consumption
- **Extensibility**: Pattern can be applied to other sections and fields

The foundation is now in place for a truly independent Reference Model that can calculate different scenarios without affecting the Design Model. 