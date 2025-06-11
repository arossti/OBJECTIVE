/**
 * OBC-ExpandableRows.js
 * Universal expandable rows utility for OBC Matrix
 * 
 * Allows any section to have expandable/collapsible rows using simple class names
 * and data attributes, with automatic data persistence and state management.
 */

window.OBC = window.OBC || {};

window.OBC.ExpandableRows = (function() {
  
  // Track all expandable row groups across the application
  const expandableGroups = new Map();
  
  /**
   * Initialize expandable rows for a section
   * Automatically detects rows with 'expandable-row-trigger' class
   */
  function initializeExpandableRows(sectionId) {
    const section = document.getElementById(sectionId);
    if (!section) return;
    
    // Find all expandable row triggers in this section
    const triggers = section.querySelectorAll('.expandable-row-trigger');
    
    triggers.forEach(trigger => {
      const row = trigger.closest('tr');
      if (!row) return;
      
      const groupId = trigger.dataset.expandableGroup;
      if (!groupId) {
        console.warn('Expandable row trigger missing data-expandable-group attribute:', trigger);
        return;
      }
      
      // Initialize this group if not already done
      if (!expandableGroups.has(groupId)) {
        initializeExpandableGroup(groupId, sectionId);
      }
    });
  }
  
  /**
   * Initialize a specific expandable group
   */
  function initializeExpandableGroup(groupId, sectionId) {
    // Get configuration from data attributes
    const triggerElement = document.querySelector(`[data-expandable-group="${groupId}"]`);
    if (!triggerElement) return;
    
    const config = {
      groupId: groupId,
      sectionId: sectionId,
      expandableRows: (triggerElement.dataset.expandableRows || '').split(',').filter(id => id.trim()),
      defaultVisible: parseInt(triggerElement.dataset.defaultVisible || '1', 10),
      maxRows: 0, // Will be calculated
      currentVisible: 0
    };
    
    // Calculate max rows (default + expandable)
    config.maxRows = config.defaultVisible + config.expandableRows.length;
    
    // Load saved state or use default
    config.currentVisible = loadGroupState(groupId) || config.defaultVisible;
    
    // Store configuration
    expandableGroups.set(groupId, config);
    
    // Create and insert controls
    createExpandableControls(triggerElement, groupId);
    
    // Initialize visibility
    initializeGroupVisibility(groupId);
    
    console.log(`Initialized expandable group: ${groupId}`, config);
  }
  
  /**
   * Create add/remove controls for an expandable group
   */
  function createExpandableControls(triggerElement, groupId) {
    const controlsHtml = `
      <div class="expandable-controls" data-group="${groupId}">
        <button class="btn btn-sm btn-outline-secondary expandable-add-btn" 
                onclick="window.OBC.ExpandableRows.addRow('${groupId}')" 
                title="Add additional row">
                +
        </button>
        <button class="btn btn-sm btn-outline-secondary expandable-remove-btn" 
                onclick="window.OBC.ExpandableRows.removeRow('${groupId}')" 
                title="Remove last row" 
                style="display: none;">
                −
        </button>
      </div>
    `;
    
    // Replace the trigger element content
    triggerElement.innerHTML = controlsHtml;
    
    // Add CSS if not already added
    addExpandableRowsCSS();
  }
  
  /**
   * Add CSS styles for expandable rows
   */
  function addExpandableRowsCSS() {
    if (!document.getElementById('expandable-rows-css')) {
      const style = document.createElement('style');
      style.id = 'expandable-rows-css';
      style.textContent = `
        /* Universal expandable rows styling */
        .expandable-row-trigger {
          text-align: center !important;
          vertical-align: middle !important;
          padding: 2px !important;
          width: 70px !important;
        }
        
        .expandable-controls {
          display: flex !important;
          gap: 2px !important;
          justify-content: center !important;
          align-items: center !important;
        }
        
        .expandable-add-btn,
        .expandable-remove-btn {
          border: 1px solid #6c757d !important;
          border-radius: 4px !important;
          padding: 2px 6px !important;
          font-size: 14px !important;
          font-weight: bold !important;
          min-width: 24px !important;
          height: 24px !important;
          display: inline-flex !important;
          align-items: center !important;
          justify-content: center !important;
          transition: all 0.2s ease !important;
          color: #6c757d !important;
          background-color: white !important;
          margin: 0 !important;
        }
        
        .expandable-add-btn:hover,
        .expandable-remove-btn:hover {
          background-color: #f8f9fa !important;
          border-color: #495057 !important;
          color: #495057 !important;
          transform: scale(1.05) !important;
        }
        
        .expandable-add-btn:active,
        .expandable-remove-btn:active {
          transform: scale(0.95) !important;
        }
        
        /* Color differentiation */
        .expandable-add-btn {
          border-color: #28a745 !important;
          color: #28a745 !important;
        }
        
        .expandable-add-btn:hover {
          background-color: #d4edda !important;
          border-color: #1e7e34 !important;
          color: #1e7e34 !important;
        }
        
        .expandable-remove-btn {
          border-color: #dc3545 !important;
          color: #dc3545 !important;
        }
        
        .expandable-remove-btn:hover {
          background-color: #f8d7da !important;
          border-color: #bd2130 !important;
          color: #bd2130 !important;
        }
        
        /* Expandable row cells that contain controls */
        .data-table .expandable-row-trigger {
          width: 70px !important;
          min-width: 70px !important;
          max-width: 70px !important;
        }
      `;
      document.head.appendChild(style);
    }
  }
  
  /**
   * Initialize visibility for a group based on saved state
   */
  function initializeGroupVisibility(groupId) {
    const config = expandableGroups.get(groupId);
    if (!config) return;
    
    // Hide all expandable rows initially
    config.expandableRows.forEach(rowId => {
      const rowElement = document.querySelector(`tr[data-id="${rowId}"]`);
      if (rowElement) {
        rowElement.style.display = 'none';
      }
    });
    
    // Show the appropriate number of rows
    const targetVisible = config.currentVisible;
    config.currentVisible = config.defaultVisible; // Reset to base
    
    for (let i = config.defaultVisible; i < targetVisible; i++) {
      const rowIndex = i - config.defaultVisible;
      if (rowIndex < config.expandableRows.length) {
        const rowId = config.expandableRows[rowIndex];
        const rowElement = document.querySelector(`tr[data-id="${rowId}"]`);
        if (rowElement) {
          rowElement.style.display = '';
          config.currentVisible++;
        }
      }
    }
    
    // Update button visibility
    updateButtonVisibility(groupId);
  }
  
  /**
   * Add one row to an expandable group
   */
  function addRow(groupId) {
    const config = expandableGroups.get(groupId);
    if (!config || config.currentVisible >= config.maxRows) return;
    
    // Show next hidden row
    const nextRowIndex = config.currentVisible - config.defaultVisible;
    const rowId = config.expandableRows[nextRowIndex];
    const rowElement = document.querySelector(`tr[data-id="${rowId}"]`);
    
    if (rowElement) {
      rowElement.style.display = '';
      config.currentVisible++;
      updateButtonVisibility(groupId);
      saveGroupState(groupId, config.currentVisible);
    }
  }
  
  /**
   * Remove one row from an expandable group
   */
  function removeRow(groupId) {
    const config = expandableGroups.get(groupId);
    if (!config || config.currentVisible <= config.defaultVisible) return;
    
    // Hide last visible row
    const lastRowIndex = config.currentVisible - config.defaultVisible - 1;
    const rowId = config.expandableRows[lastRowIndex];
    const rowElement = document.querySelector(`tr[data-id="${rowId}"]`);
    
    if (rowElement) {
      rowElement.style.display = 'none';
      config.currentVisible--;
      updateButtonVisibility(groupId);
      saveGroupState(groupId, config.currentVisible);
    }
  }
  
  /**
   * Update button visibility for a group
   */
  function updateButtonVisibility(groupId) {
    const config = expandableGroups.get(groupId);
    if (!config) return;
    
    const addBtn = document.querySelector(`.expandable-add-btn[onclick*="${groupId}"]`);
    const removeBtn = document.querySelector(`.expandable-remove-btn[onclick*="${groupId}"]`);
    
    if (addBtn) {
      addBtn.style.display = config.currentVisible < config.maxRows ? 'inline-flex' : 'none';
    }
    
    if (removeBtn) {
      removeBtn.style.display = config.currentVisible > config.defaultVisible ? 'inline-flex' : 'none';
    }
  }
  
  /**
   * Save group state to localStorage
   */
  function saveGroupState(groupId, visibleCount) {
    try {
      localStorage.setItem(`OBC_ExpandableRows_${groupId}`, visibleCount.toString());
    } catch (e) {
      console.warn(`Could not save state for expandable group ${groupId}:`, e);
    }
  }
  
  /**
   * Load group state from localStorage
   */
  function loadGroupState(groupId) {
    try {
      const saved = localStorage.getItem(`OBC_ExpandableRows_${groupId}`);
      return saved ? parseInt(saved, 10) : null;
    } catch (e) {
      console.warn(`Could not load state for expandable group ${groupId}:`, e);
      return null;
    }
  }
  
  /**
   * Get all expandable rows for a group (for calculations that need to include hidden rows)
   */
  function getAllRowsInGroup(groupId) {
    const config = expandableGroups.get(groupId);
    if (!config) return [];
    
    // Return IDs of all rows (default + expandable)
    const allRows = [];
    
    // Add default rows (these would need to be specified in config)
    // For now, return expandable rows - sections can extend this as needed
    return config.expandableRows;
  }
  
  /**
   * Check if a row is currently visible
   */
  function isRowVisible(rowId) {
    const rowElement = document.querySelector(`tr[data-id="${rowId}"]`);
    return rowElement ? rowElement.style.display !== 'none' : false;
  }
  
  // Public API
  return {
    initializeExpandableRows: initializeExpandableRows,
    addRow: addRow,
    removeRow: removeRow,
    getAllRowsInGroup: getAllRowsInGroup,
    isRowVisible: isRowVisible,
    
    // For debugging
    getGroupConfig: (groupId) => expandableGroups.get(groupId),
    getAllGroups: () => Array.from(expandableGroups.keys())
  };
})();

// Auto-initialize when DOM is ready
document.addEventListener('DOMContentLoaded', function() {
  // Wait for sections to render, then initialize expandable rows
  document.addEventListener('obc-rendering-complete', function() {
    console.log('Initializing expandable rows for all sections...');
    
    // Initialize for all sections that have expandable rows
    const allSections = ['buildingInfo', 'buildingOccupancy', 'buildingAreas', 'firefightingSystems', 
                         'structuralRequirements', 'occupantSafety', 'fireResistance', 'plumbingFixtures', 
                         'complianceDesign', 'notes'];
    
    allSections.forEach(sectionId => {
      window.OBC.ExpandableRows.initializeExpandableRows(sectionId);
    });
  });
}); 