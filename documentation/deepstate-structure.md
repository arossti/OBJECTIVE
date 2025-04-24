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

In Excel, this data is entirely separate from the main calculation sheet, preventing any circular references. We will convert this to a lightweight JSON format for efficient lookups.

## Implementation Components

### 1. Reference Manager

A lightweight service that provides access to reference values:

```javascript
// 4011-ReferenceManager.js
TEUI.ReferenceManager = (function() {
  let standardsData = null;
  let currentStandard = null;
  
  function initialize() {
    // Load data (initially hardcoded, can be enhanced to load from file)
    loadStandardsData();
    
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
  
  function loadStandardsData() {
    // This will load the actual data from your DEEPSTATE.csv
    standardsData = {
      "OBC SB12 3.1.1.2.C4": {
        "B.4": "4.87",       // Roof RSI
        "B.5": "3.34",       // Walls RSI
        "B.8.1": "0.578",    // Windows U-value
        "M.1.2": "1.88",     // COPheat
        // etc.
      },
      "NECB T1 (Z6)": {
        "B.4": "7.246",
        "B.5": "4.174", 
        "B.8.1": "0.578",
        "M.1.2": "2.25",
        // etc.
      }
      // Other standards...
    };
  }
  
  function getValue(fieldId) {
    if (!currentStandard || !standardsData || !standardsData[currentStandard]) {
      return null;
    }
    
    return standardsData[currentStandard][fieldId] || null;
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
  
  function setData(data) {
    standardsData = data;
  }
  
  return {
    initialize,
    getValue,
    isCodeDefinedField,
    isEditableInReferenceMode,
    getCurrentStandard: function() { return currentStandard; },
    setData
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
      
      // Since there is exact parity between Excel and DOM references,
      // these field mappings directly correspond to the Excel structure
      const fields = [
        { fieldId: 'h_85', refId: 'B.4' },  // Roof U-value
        { fieldId: 'h_86', refId: 'B.5' },  // Walls U-value
        { fieldId: 'h_89', refId: 'B.7.0' } // Doors U-value
        // etc.
      ];
      
      fields.forEach(field => {
        const element = sectionContainer.querySelector(`[data-field-id="${field.fieldId}"]`);
        if (element) {
          // Save original value for restoration
          if (!element.hasAttribute('data-original-value')) {
            element.setAttribute('data-original-value', element.textContent);
          }
          
          // Update with reference value
          const refValue = TEUI.ReferenceManager.getValue(field.refId);
          if (refValue !== null) {
            element.textContent = refValue;
            
            // Handle special case fields that should remain editable in reference mode
            if (TEUI.ReferenceManager.isEditableInReferenceMode(field.fieldId)) {
              // For editable fields, don't lock them
              element.removeAttribute('data-locked');
              if (element.tagName === 'INPUT' || element.tagName === 'SELECT') {
                element.disabled = false;
              }
            } 
            // Mark as locked if code-defined
            else if (TEUI.ReferenceManager.isCodeDefinedField(field.fieldId)) {
              element.setAttribute('data-locked', 'true');
              if (element.tagName === 'INPUT' || element.tagName === 'SELECT') {
                element.disabled = true;
              }
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

### 4. Reference Comparison Manager

A module for calculating comparisons between main and reference values:

```javascript
// 4011-ReferenceComparison.js
TEUI.ReferenceComparison = (function() {
  // Registry of fields that need comparison calculations
  // NOTE: These field mappings are examples only - replace with your actual field IDs
  const comparisonFields = [
    // Example mappings - replace with actual field mappings from your application
    { sourceField: 'h_10', targetField: 'm_10', refId: 'T.3', type: 'energy' },     // Example: TEUI comparison
    { sourceField: 'f_32', targetField: 'm_32', refId: 'T.3.1', type: 'energy' },   // Example: Total Energy comparison
    { sourceField: 'h_85', targetField: 'm_85', refId: 'B.4', type: 'insulation' }, // Example: Roof R-value comparison
    // Add your actual comparison field mappings based on your application structure...
  ];
  
  function initialize() {
    // No listeners needed - comparisons are updated when toggling reference view
  }
  
  function updateAllComparisons() {
    comparisonFields.forEach(field => {
      updateComparison(field.sourceField, field.targetField, field.refId, field.type);
    });
  }
  
  function updateComparison(sourceField, targetField, refId, fieldType) {
    // Get main value from your StateManager
    const mainValue = parseFloat(TEUI.StateManager.getValue(sourceField));
    
    // Get reference value from your ReferenceManager
    const refValue = parseFloat(TEUI.ReferenceManager.getValue(refId));
    
    if (!isNaN(mainValue) && !isNaN(refValue) && refValue !== 0) {
      // Calculate percentage based on field type
      let percentage;
      
      // These comparison rules should be adapted to your specific comparison logic
      switch (fieldType) {
        case 'insulation':
        case 'efficiency':
          // Higher is better (like R-values, COPs)
          percentage = (mainValue / refValue) * 100;
          break;
          
        case 'energy':
        case 'carbon':
          // Lower is better (TEUI, emissions)
          percentage = (refValue / mainValue) * 100;
          break;
          
        default:
          // Direct comparison (equal = 100%)
          percentage = (mainValue / refValue) * 100;
      }
      
      // Format and set the comparison value in column M
      const formattedValue = Math.round(percentage) + '%';
      
      // Update DOM using your application's DOM structure
      const comparisonElement = document.querySelector(`[data-field-id="${targetField}"]`);
      if (comparisonElement) {
        comparisonElement.textContent = formattedValue;
      }
    }
  }
  
  return {
    initialize,
    updateAllComparisons,
    updateComparison
  };
})();
```

### 5. CSS Styling for Reference Mode

```css
/* Add to 4011-styles.css */
/* Reference mode styles */
.reference-mode .section-content,
.reference-mode .data-table {
  background-color: #fff0f0; /* Light red background */
}

.reference-mode .column-header,
.reference-mode .section-header {
  background-color: #ffcece; /* Lighter red for headers */
  color: #800000; /* Darker red text for headers */
}

.reference-mode .calculated-value,
.reference-mode .data-table td:not(.user-input) {
  color: #8b0000; /* Deep red text */
}

.reference-mode .user-input {
  color: #c60000; /* Slightly lighter red for user inputs */
}

.reference-mode [data-locked="true"] {
  position: relative;
}

.reference-mode [data-locked="true"]::after {
  content: "🔒";
  position: absolute;
  top: 0;
  right: 5px;
  font-size: 10px;
  color: #800000;
  opacity: 0.7;
}

/* Reference toggle button */
.reference-toggle {
  position: fixed;
  bottom: 20px;
  right: 20px;
  z-index: 1000;
  background-color: #fff;
  border: 1px solid #ccc;
  padding: 8px 16px;
  border-radius: 4px;
  box-shadow: 0 2px 5px rgba(0,0,0,0.15);
  transition: all 0.3s ease;
}
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
   - Convert DEEPSTATE.csv to JSON format
   - Create getValue() function to retrieve reference values
   - Connect to standard selection dropdown (d_13)

2. **Add Hardcoded Initial Data**:
   - Start with a subset of key values for testing
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

6. **StateManager Independence**: StateManager intentionally plays no direct role in storing reference values. This is a deliberate design choice to maintain strict separation between models, prevent circular dependencies, avoid modifying existing StateManager code, and better match Excel's worksheet-based separation model. Reference values are stored in the ReferenceManager service and as DOM attributes rather than extending StateManager with a new state type.

7. **Excel-DOM Parity**: The implementation leverages the exact parity between Excel cell references and DOM field IDs, ensuring consistent naming and clear correspondence between the Excel model and the web application.

8. **Special Case Handling**: Certain fields (like Reporting Period in Section 2) remain editable even in Reference mode, as they may need to differ from the Design model for valid reasons. These exceptions are explicitly managed through the ReferenceManager.

## Advantages of This Approach

1. **Zero Risk to Existing Code**: The main calculation flow remains completely unchanged
2. **Gradual Implementation**: Can be built and tested section by section
3. **Clean Visual Separation**: Clear differentiation between main and reference models
4. **No Circular References**: Complete separation prevents circular dependencies
5. **Minimal Architecture Expansion**: Leverages existing section modules rather than duplicating them
6. **Progressive Enhancement**: Start with UI, then add functionality incrementally

## DEEPSTATE.csv Conversion

For converting the CSV to the optimized JSON format, a simple utility script would be created separately. The resulting format should be:

```javascript
{
  "OBC SB12 3.1.1.2.C4": {
    "B.4": "4.87",
    "B.5": "3.34",
    // More values...
  },
  "NECB T1 (Z6)": {
    "B.4": "7.246",
    "B.5": "4.174",
    // More values...
  },
  // More standards...
}
```

This flat structure optimizes lookup performance and minimizes memory usage. The conversion would be a one-time task, producing a static JSON file to be loaded by the ReferenceManager module.

## Conclusion

This approach provides a clean, gradual implementation path for adding reference model capabilities to the TEUI 4.011 Calculator. By starting with the UI layer and adding functionality section by section, we can maintain the integrity of the existing codebase while progressively enhancing it with reference model capabilities. The embedded section-based approach avoids duplication while maintaining clear boundaries between main and reference calculations.
