# DEEPSTATE Reference Model Integration

## Overview

The `3037DEEPSTATE.csv` file (also referred to as `CODE-VALUES` in Excel formulas) contains reference standard values that define building code minimum requirements for different construction standards. This document describes how to integrate these reference values into the TEUI 4.011 Calculator while maintaining strict separation between the Design model and Reference model.

## Architectural Approach

In Excel, complete separation is achieved through separate worksheets. For our web implementation, we'll use an **embedded section-based approach** that:

1. **Maintains Separation**: Reference calculations remain independent from Design model calculations
2. **Leverages Existing Structure**: Embeds reference functionality within existing section modules rather than creating 15 duplicate modules
3. **Uses One-Way Synchronization**: Shares building dimensions and other core properties from Design to Reference, never the reverse
4. **Provides Visual Distinction**: Clearly differentiates between Design and Reference models through styling
5. **Preserves Field References**: Maintains the exact parity between Excel cell references and DOM field IDs (e.g., h_15 in the DOM directly corresponds to H15 in Excel)

## File Structure

The DEEPSTATE.csv file is structured as follows:

```
NECB Reference Values,,,,,,,,,,,,,,,,,,,,,,,,
,,OBC SB12 3.1.1.2.C4,OBC SB12 3.1.1.2.C1,OBC SB10 5.5-6 Z6,...,NECB T1 (Z6),...
SECTION 1. Key Values,,,,,,,,,,,,,,,,,,,,,,,,
T.1 Lifetime Carbon,,0,0,0,0,0,0,0,0,0,0,0,N/A,0,0,0,0,0,0,...
T.2 Annual Carbon,,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,...
SECTION 2. Building Information,,,,,,,,,,,,,,,,,,,,,,,,
...
```

In Excel, this data is entirely separate from the main calculation sheet, preventing any circular references. For our implementation, we've converted this to a JavaScript module with a JSON structure for efficient lookups.

## Reference Values JavaScript Module

To provide fast, efficient access to reference standard values, we've created a dedicated JavaScript module:

```javascript
// 4011-ReferenceValues.js
TEUI.ReferenceValues = (function() {
    // Main reference data object structured by standard and field ID
    const referenceStandards = {
        "OBC SB12 3.1.1.2.C4": {
            "B.4": { section: "Transmission Losses", value: "4.87", targetCell: "h_85" },
            "B.5": { section: "Transmission Losses", value: "4.21", targetCell: "h_86" },
            // More fields...
        },
        "NECB T1 (Z6)": {
            "B.4": { section: "Transmission Losses", value: "7.246", targetCell: "h_85" },
            // More fields...
        },
        // More standards...
    };
    
    // Public API with helper methods
    return {
        getValue: function(standard, fieldId) { /* Implementation */ },
        getSection: function(standard, fieldId) { /* Implementation */ },
        getTargetCell: function(standard, fieldId) { /* Implementation */ },
        getFieldByTargetCell: function(standard, targetCell) { /* Implementation */ },
        // More methods...
    };
})();
```

This module organizes reference values by standard and field ID, making lookups extremely efficient compared to parsing CSV files. The structure includes:

1. **Top-level standard organization**: Each building code standard is a top-level key
2. **Field-based value structure**: Values are organized by field IDs that match Excel row identifiers
3. **Section metadata**: Each value includes its section for better organization and filtering
4. **Target cell mapping**: Each value contains a `targetCell` property that maps directly to the DOM element ID where the reference value should be displayed
5. **Rich API**: Helper methods for accessing values, sections, target cells, and checking existence

The module is loaded once during initialization and provides static reference data throughout the application lifecycle. The addition of targetCell mappings simplifies the process of updating the DOM with reference values, eliminating the need for complex field mapping in individual section handlers.

## Implementation Components

### 1. Reference Manager

A lightweight service that provides access to reference values:

```javascript
// 4011-ReferenceManager.js
TEUI.ReferenceManager = (function() {
  let currentStandard = null;
  
  function initialize() {
    // Listen for standard selection
    // Since there is exact parity between Excel and DOM references, 
    // d_13 corresponds to cell D13 in Excel (Standard selection)
    TEUI.StateManager.addListener('d_13', function(newValue) {
      currentStandard = newValue;
      // Trigger update in reference mode
      if (TEUI.ReferenceToggle && TEUI.ReferenceToggle.isReferenceMode()) {
        TEUI.ReferenceToggle.refreshReferenceDisplay();
      }
    });
    
    // Initialize with current selection
    currentStandard = TEUI.StateManager.getValue('d_13');
  }
  
  function getValue(fieldId) {
    if (!currentStandard) {
      return null;
    }
    
    // Use the ReferenceValues module for efficient lookup
    return TEUI.ReferenceValues.getValue(currentStandard, fieldId);
  }
  
  function isCodeDefinedField(fieldId) {
    // Fields that are defined by code standards (not shared from Design model)
    const sharedFields = [
      'h_15',   // Conditioned Area
      'd_105',  // Volume
      'g_63'    // Occupants
      // Add other shared fields
    ]; 
    
    // Special case fields that should remain editable in reference mode
    const editableReferenceFields = [
      'h_12'    // Reporting Period (special case that can differ between Design and Reference)
      // Add any other reference fields that should remain editable
    ];
    
    return !sharedFields.includes(fieldId) && !editableReferenceFields.includes(fieldId);
  }
  
  // Check if a field should remain editable in reference mode
  function isEditableInReferenceMode(fieldId) {
    const editableReferenceFields = [
      'h_12'    // Reporting Period (special case that can differ between Design and Reference)
      // Add any other reference fields that should remain editable
    ];
    
    return editableReferenceFields.includes(fieldId);
  }
  
  return {
    initialize,
    getValue,
    isCodeDefinedField,
    isEditableInReferenceMode,
    getCurrentStandard: function() { return currentStandard; }
  };
})();
```

### 2. Reference UI Toggle

A dedicated module for toggling between main and reference views:

```javascript
// 4011-ReferenceToggle.js
TEUI.ReferenceToggle = (function() {
  let referenceMode = false;
  
  function initialize() {
    // Create toggle button
    const toggleBtn = document.createElement('button');
    toggleBtn.id = 'toggleReferenceBtn';
    toggleBtn.className = 'btn btn-outline-secondary reference-toggle';
    toggleBtn.textContent = 'Show Reference Model';
    
    // Add to appropriate container
    const controlsContainer = document.querySelector('.controls-container');
    if (controlsContainer) {
      controlsContainer.appendChild(toggleBtn);
      
      // Add event listener
      toggleBtn.addEventListener('click', toggleReferenceView);
    }
  }
  
  function toggleReferenceView() {
    referenceMode = !referenceMode;
    
    // Toggle body class for styling
    document.body.classList.toggle('reference-mode', referenceMode);
    
    // Update button text
    const toggleBtn = document.getElementById('toggleReferenceBtn');
    if (toggleBtn) {
      toggleBtn.textContent = referenceMode ? 'Show Design Model' : 'Show Reference Model';
    }
    
    // Update each section's display
    refreshReferenceDisplay();
  }
  
  function refreshReferenceDisplay() {
    // Notify each section to update its display
    Object.values(TEUI.SectionModules).forEach(module => {
      if (module.referenceHandler) {
        if (referenceMode) {
          module.referenceHandler.updateReferenceDisplay();
        } else {
          module.referenceHandler.restoreDisplay();
        }
      }
    });
    
    // Update comparison values if in reference mode
    if (referenceMode && TEUI.ReferenceComparison) {
      TEUI.ReferenceComparison.updateAllComparisons();
    }
  }
  
  function isReferenceMode() {
    return referenceMode;
  }
  
  return {
    initialize,
    toggleReferenceView,
    refreshReferenceDisplay,
    isReferenceMode
  };
})();
```

### 3. Section-Based Reference Handlers

Each section module is enhanced with reference handling capabilities:

```javascript
// Example: Enhancement to 4011-Section11.js (Envelope Transmission Losses)
TEUI.SectionModules.sect11 = (function() {
  // Existing section code...
  
  // Add reference handler to the section
  const referenceHandler = {
    initialize: function() {
      // Set up any section-specific reference handling
    },
    
    // Update display when in reference mode
    updateReferenceDisplay: function() {
      // Get section container to scope our selections
      const sectionContainer = document.getElementById('envelopeTransmissionLosses');
      if (!sectionContainer) return;
      
      // Get the current reference standard
      const currentStandard = TEUI.ReferenceManager.getCurrentStandard();
      if (!currentStandard) return;
      
      // Get all reference fields for this standard
      const standardFields = TEUI.ReferenceValues.getStandardFields(currentStandard);
      if (!standardFields) return;
      
      // Process each reference field that has a targetCell
      Object.entries(standardFields).forEach(([fieldId, fieldData]) => {
        // Skip if no targetCell defined
        if (!fieldData.targetCell) return;
        
        // Find the DOM element using the targetCell property
        const element = sectionContainer.querySelector(`[data-field-id="${fieldData.targetCell}"]`);
        if (element) {
          // Save original value for restoration
          if (!element.hasAttribute('data-original-value')) {
            element.setAttribute('data-original-value', element.textContent);
          }
          
          // Update the element with the reference value
          element.textContent = fieldData.value;
          
          // Handle special case fields that should remain editable in reference mode
          if (TEUI.ReferenceManager.isEditableInReferenceMode(fieldData.targetCell)) {
            // For editable fields, don't lock them
            element.removeAttribute('data-locked');
            if (element.tagName === 'INPUT' || element.tagName === 'SELECT') {
              element.disabled = false;
            }
          } 
          // Mark as locked if code-defined
          else if (TEUI.ReferenceManager.isCodeDefinedField(fieldData.targetCell)) {
            element.setAttribute('data-locked', 'true');
            if (element.tagName === 'INPUT' || element.tagName === 'SELECT') {
              element.disabled = true;
            }
          }
        }
      });
      
      // Calculate reference-specific values
      calculateReferenceValues();
    },
    
    // Restore original display
    restoreDisplay: function() {
      const sectionContainer = document.getElementById('envelopeTransmissionLosses');
      if (!sectionContainer) return;
      
      // Restore all elements with saved values
      const elements = sectionContainer.querySelectorAll('[data-original-value]');
      elements.forEach(element => {
        element.textContent = element.getAttribute('data-original-value');
        element.removeAttribute('data-original-value');
        element.removeAttribute('data-locked');
        
        // Re-enable any inputs or selects
        if (element.tagName === 'INPUT' || element.tagName === 'SELECT') {
          element.disabled = false;
        }
      });
    },
    
    // Reference-specific calculations
    calculateReferenceValues: function() {
      // Calculate reference envelope losses
      // These calculations remain separate from Design model calculations
      
      // Get reference values - direct correspondence to Excel cells
      const roofArea = parseFloat(TEUI.StateManager.getValue('d_85')); // Area from Design model
      
      // Use ReferenceManager to get reference values
      const roofRSI = parseFloat(TEUI.ReferenceManager.getValue('B.4')); // RSI from reference standard
      
      if (!isNaN(roofArea) && !isNaN(roofRSI) && roofRSI > 0) {
        // Calculate reference heat loss
        const heatLoss = (roofArea / roofRSI) * 4600; // HDD from Design model
        
        // Update reference-specific display element
        const heatlossElement = document.querySelector('[data-ref-id="i_85"]');
        if (heatlossElement) {
          heatlossElement.textContent = heatLoss.toFixed(2);
        }
      }
      
      // Additional calculations...
    }
  };
  
  // Add to section's public API
  return {
    // Existing methods...
    referenceHandler: referenceHandler
  };
})();
```

The targetCell property in the ReferenceValues module significantly simplifies the section handler implementation by:

1. **Eliminating Manual Field Mapping**: No need to maintain separate mappings between reference IDs and DOM elements in each section handler
2. **Centralizing DOM Targeting**: All DOM element targeting is defined in one place (ReferenceValues.js) rather than spread across section handlers
3. **Enabling Generic Processing**: Section handlers can process reference values generically without needing section-specific field mappings
4. **Reducing Code Duplication**: The same reference display logic can be reused across all sections
5. **Simplifying Maintenance**: Updates to field mappings only need to be made in the ReferenceValues.js file

This approach aligns with the principle of having a single source of truth for mapping between reference values and DOM elements.

## Loading and Initialization Sequence

The system follows this initialization sequence:

1. **Load Core Modules**:
   - Load `4011-ReferenceValues.js` to establish the static reference data
   - Load `4011-styles.css` which includes reference mode styling

2. **Initialize Reference Manager**:
   - Create the `ReferenceManager` which uses `ReferenceValues` for lookups
   - Connect to standard selection dropdown (d_13)

3. **Initialize UI Toggle**:
   - Create toggle button
   - Set up toggle functionality

4. **Initialize Section Handlers**:
   - Each section module creates its reference handler
   - Handlers connect to the ReferenceManager for value lookups
   - Each handler registers itself with its parent section module

## JSON Data Structure Benefits

Using a JavaScript module with a JSON-like structure for reference values offers several advantages:

1. **Performance**: Instant lookups via JavaScript object properties
2. **Memory Efficiency**: Only the values themselves are stored, not parsing overhead
3. **Type Safety**: Values are stored in their original format
4. **Maintainability**: Structured by section for easier updates
5. **No Network Requests**: Bundled with application code
6. **Direct DOM Mapping**: The targetCell property provides a direct link between reference values and DOM elements

The structure in `4011-ReferenceValues.js` allows for efficient lookups:

```javascript
// Example lookup patterns:
TEUI.ReferenceValues.getValue("OBC SB12 3.1.1.2.C4", "B.4") // Returns "4.87"
TEUI.ReferenceValues.getSection("OBC SB12 3.1.1.2.C4", "B.4") // Returns "Transmission Losses"
TEUI.ReferenceValues.getTargetCell("OBC SB12 3.1.1.2.C4", "B.4") // Returns "h_85"
TEUI.ReferenceValues.getFieldByTargetCell("OBC SB12 3.1.1.2.C4", "h_85") // Returns field info for B.4
TEUI.ReferenceValues.getSectionFields("OBC SB12 3.1.1.2.C4", "Transmission Losses") 
// Returns object with all fields in the Transmission Losses section
```

## Implementation Phases

We'll use a phased approach to incrementally introduce reference model functionality without disrupting the existing codebase:

### Phase 1: UI Layer Implementation

The first phase focuses on visual representation only:

1. **Add ReferenceToggle Module**:
   - Create toggle button
   - Implement CSS styling for reference mode
   - Set up basic toggle functionality (just CSS classes)

2. **Add CSS for Reference Mode**:
   - Style section backgrounds
   - Style header elements
   - Prepare locked field styling

This gives users a preview of the reference mode without any functional changes.

### Phase 2: Reference Manager Data Service

Next, add the data access layer:

1. **Create ReferenceManager Module**:
   - Load the `4011-ReferenceValues.js` module
   - Create getter functions to access reference values
   - Connect to standard selection dropdown (d_13)

2. **Add Hardcoded Initial Data**:
   - Ensure the `ReferenceValues` module contains key values
   - Implement `isCodeDefinedField()` helper function

This establishes the data foundation without affecting existing calculations.

### Phase 3: Section-by-Section Enhancement

Enhance each section module with reference handling capabilities:

1. **Start with Simpler Sections**:
   - Begin with Section 11 (Envelope Transmission Losses)
   - Add referenceHandler to the section module
   - Implement updateReferenceDisplay() and restoreDisplay() methods

2. **Progressively Enhance All Sections**:
   - Work through all 15 sections in priority order
   - Each section handles its own reference display

This section-by-section approach allows testing and validation as you go.

### Phase 4: Reference Calculations and Comparisons

Finally, add calculation capabilities:

1. **Add Section-Specific Reference Calculations**:
   - Implement calculateReferenceValues() in each section handler
   - Keep these calculations isolated from main calculations

2. **Create ReferenceComparison Module**:
   - Implement comparison logic for column M
   - Connect comparison calculations to toggle events

This completes the reference model functionality.

## Key Architectural Decisions

1. **Embedded vs. Duplicate Architecture**: Reference handlers are embedded within existing section modules rather than creating 15 separate modules. This maintains clearer organization, reduces duplication, and simplifies maintenance.

2. **Display-First Approach**: The implementation starts with UI changes before adding functional complexity, allowing for immediate user feedback and testing.

3. **One-Way Synchronization**: Only building dimensions and occupancy data are shared from Design to Reference model. Reference calculations never affect Design calculations.

4. **T-Cell Implementation**: Reference values act as "T-cells" from Excel but are implemented as data attributes on DOM elements or separate display elements, avoiding StateManager contamination.

5. **DOM-Based Storage**: Original values are preserved as data attributes on DOM elements, avoiding the need for a parallel state management system.

6. **StateManager Independence**: StateManager intentionally plays no direct role in storing reference values. This is a deliberate design choice to maintain strict separation between models, prevent circular dependencies, avoid modifying existing StateManager code, and better match Excel's worksheet-based separation model. Reference values are stored in the ReferenceValues module and as DOM attributes rather than extending StateManager with a new state type.

7. **Excel-DOM Parity**: The implementation leverages the exact parity between Excel cell references and DOM field IDs, ensuring consistent naming and clear correspondence between the Excel model and the web application.

8. **Special Case Handling**: Certain fields (like Reporting Period in Section 2) remain editable even in Reference mode, as they may need to differ from the Design model for valid reasons. These exceptions are explicitly managed through the ReferenceManager.

## Advantages of This Approach

1. **Zero Risk to Existing Code**: The main calculation flow remains completely unchanged
2. **Gradual Implementation**: Can be built and tested section by section
3. **Clean Visual Separation**: Clear differentiation between main and reference models
4. **No Circular References**: Complete separation prevents circular dependencies
5. **Minimal Architecture Expansion**: Leverages existing section modules rather than duplicating them
6. **Progressive Enhancement**: Start with UI, then add functionality incrementally
7. **Efficient Lookups**: Using the `ReferenceValues` module ensures fast, memory-efficient value access

## Conclusion

This approach provides a clean, gradual implementation path for adding reference model capabilities to the TEUI 4.011 Calculator. The combination of a dedicated reference values module (`4011-ReferenceValues.js`) with section-specific handlers allows for a controlled introduction of reference model functionality without disrupting the existing codebase. This structure maintains a clear separation of concerns, optimizes performance, and provides a maintainable solution for comparing design models against reference standards.
