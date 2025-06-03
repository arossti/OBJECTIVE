/**
 * 4012-app.js
 * Main application controller for TEUI 4.012
 * Handles UI interactions, layout management, and section rendering
 */

(function() {
    'use strict';
    
    // Ensure namespace exists
    window.TEUI = window.TEUI || {};
    window.TEUI.v4012 = window.TEUI.v4012 || {};
    
    // Application state
    const AppState = {
        currentLayout: 'vertical', // 'vertical' or 'horizontal'
        activeSection: 'climateCalculations',
        sections: [
            { id: 'buildingInfo', name: 'Building Information', shortName: 'Info', icon: 'bi-info-circle' },
            { id: 'climateCalculations', name: 'Climate Calculations', shortName: 'Climate', icon: 'bi-thermometer-half' },
            { id: 'actualTargetEnergy', name: 'Actual vs. Target Energy', shortName: 'Target', icon: 'bi-bullseye' },
            { id: 'emissions', name: 'CO2e Emissions', shortName: 'GHGI', icon: 'bi-cloud-upload' },
            { id: 'onSiteEnergy', name: 'Renewable Energy', shortName: 'WWS', icon: 'bi-sun' },
            { id: 'waterUse', name: 'Water Use', shortName: 'Water', icon: 'bi-droplet' },
            { id: 'indoorAirQuality', name: 'Indoor Air Quality', shortName: 'IAQ', icon: 'bi-lungs' },
            { id: 'occupantInternalGains', name: 'Occupant + Internal Gains', shortName: 'Internal G', icon: 'bi-cup-hot' },
            { id: 'envelopeRadiantGains', name: 'Radiant Gains', shortName: 'Envelope G', icon: 'bi-box-arrow-in-down-right' },
            { id: 'envelopeTransmissionLosses', name: 'Transmission Losses', shortName: 'Trans', icon: 'bi-box-arrow-up-right' },
            { id: 'volumeSurfaceMetrics', name: 'Volume and Surface Metrics', shortName: 'Vol', icon: 'bi-box' },
            { id: 'mechanicalLoads', name: 'Mechanical Loads', shortName: 'Mech', icon: 'bi-house-gear' },
            { id: 'tediSummary', name: 'TEDI & TELI', shortName: 'TEDI', icon: 'bi-fire' },
            { id: 'teuiSummary', name: 'TEUI', shortName: 'TEUI', icon: 'bi-outlet' },
            { id: 'sankeyDiagram', name: 'Sankey Diagram', shortName: 'Sankey', icon: 'bi-sliders2' },
            { id: 'dependencyDiagram', name: 'Dependency Graph', shortName: 'Depend', icon: 'bi-link-45deg' },
            { id: 'notes', name: 'Notes', shortName: 'Notes', icon: 'bi-info-square' }
        ]
    };
    
    // UI Controller
    const UIController = {
        // Initialize UI components
        initialize: function() {
            this.setupEventListeners();
            this.generateTabs();
            this.updateLayoutClasses();
            this.initializeSectionAnimations();
            this.updateTimestamp();
            
            // Initialize Section 1 if available
            if (window.TEUI.v4012?.Sections?.S01) {
                window.TEUI.v4012.Sections.S01.initialize();
            }
            
            // Initialize Section 2 if available
            if (window.TEUI.v4012?.Sections?.S02) {
                window.TEUI.v4012.Sections.S02.initialize();
            }
            
            // Initialize Section 3 if available
            if (window.TEUI.v4012?.Sections?.S03) {
                window.TEUI.v4012.Sections.S03.initialize();
            }
        },
        
        // Set up event listeners
        setupEventListeners: function() {
            // Layout toggle button
            const layoutToggleBtn = document.querySelector('.layout-toggle-btn');
            if (layoutToggleBtn) {
                layoutToggleBtn.addEventListener('click', () => this.toggleLayout());
            }
            
            // Expand/Collapse all button
            const expandCollapseBtn = document.getElementById('expand-collapse-all');
            if (expandCollapseBtn) {
                expandCollapseBtn.addEventListener('click', () => this.toggleAllSections());
            }
            
            // Section collapse buttons
            document.querySelectorAll('.btn-collapse').forEach(btn => {
                btn.addEventListener('click', (e) => {
                    const section = e.target.closest('.section');
                    if (section) {
                        this.toggleSection(section);
                    }
                });
            });
            
            // Reference toggle button
            const referenceToggleBtn = document.getElementById('toggleReferenceBtn');
            if (referenceToggleBtn) {
                referenceToggleBtn.addEventListener('click', () => this.toggleReferenceMode());
            }
            
            // Reset button
            const resetBtn = document.getElementById('reset-btn');
            if (resetBtn) {
                resetBtn.addEventListener('click', () => this.resetCalculator());
            }
            
            // Import/Export handlers
            this.setupImportExportHandlers();
        },
        
        // Toggle between vertical and horizontal layout
        toggleLayout: function() {
            AppState.currentLayout = AppState.currentLayout === 'vertical' ? 'horizontal' : 'vertical';
            this.updateLayoutClasses();
            
            // Update button icon
            const btn = document.querySelector('.layout-toggle-btn i');
            if (btn) {
                btn.className = AppState.currentLayout === 'vertical' 
                    ? 'bi bi-arrow-right-circle' 
                    : 'bi bi-arrow-down-circle';
            }
            
            // Show/hide tab container
            const tabContainer = document.querySelector('.tab-container');
            if (tabContainer) {
                tabContainer.style.display = AppState.currentLayout === 'horizontal' ? 'flex' : 'none';
            }
            
            // In horizontal mode, show only active section
            if (AppState.currentLayout === 'horizontal') {
                this.showSection(AppState.activeSection);
            } else {
                // In vertical mode, show all sections
                this.showAllSections();
            }
        },
        
        // Update layout classes on body
        updateLayoutClasses: function() {
            document.body.classList.remove('vertical-layout', 'horizontal-layout');
            document.body.classList.add(`${AppState.currentLayout}-layout`);
        },
        
        // Generate tabs for horizontal layout
        generateTabs: function() {
            const tabContainer = document.querySelector('.tab-container');
            if (!tabContainer) return;
            
            tabContainer.innerHTML = '';
            
            AppState.sections.forEach((section, index) => {
                const tab = document.createElement('button');
                tab.className = 'tab';
                tab.dataset.section = section.id;
                tab.innerHTML = `
                    <i class="bi ${section.icon} me-1"></i>
                    <span class="d-none d-lg-inline">${section.name}</span>
                    <span class="d-lg-none">${section.shortName || section.name}</span>
                `;
                
                if (section.id === AppState.activeSection) {
                    tab.classList.add('active');
                }
                
                tab.addEventListener('click', () => this.switchToSection(section.id));
                
                tabContainer.appendChild(tab);
            });
        },
        
        // Switch to a specific section (horizontal layout)
        switchToSection: function(sectionId) {
            if (AppState.currentLayout !== 'horizontal') return;
            
            AppState.activeSection = sectionId;
            
            // Update tab active states
            document.querySelectorAll('.tab').forEach(tab => {
                tab.classList.toggle('active', tab.dataset.section === sectionId);
            });
            
            // Show only the active section
            this.showSection(sectionId);
        },
        
        // Show only specified section (for horizontal layout)
        showSection: function(sectionId) {
            document.querySelectorAll('.section:not(#keyValues)').forEach(section => {
                if (section.id === sectionId) {
                    section.style.display = 'block';
                    // Animate in
                    section.style.opacity = '0';
                    section.offsetHeight; // Force reflow
                    section.style.transition = 'opacity 0.3s ease-in';
                    section.style.opacity = '1';
                } else {
                    section.style.display = 'none';
                }
            });
        },
        
        // Show all sections (for vertical layout)
        showAllSections: function() {
            document.querySelectorAll('.section:not(#keyValues)').forEach(section => {
                section.style.display = 'block';
                section.style.opacity = '1';
            });
        },
        
        // Toggle individual section collapse/expand
        toggleSection: function(section) {
            section.classList.toggle('collapsed');
            
            const btn = section.querySelector('.btn-collapse i');
            if (btn) {
                btn.className = section.classList.contains('collapsed') 
                    ? 'bi bi-chevron-right' 
                    : 'bi bi-chevron-down';
            }
            
            // Animate the content
            const content = section.querySelector('.section-content');
            if (content) {
                if (section.classList.contains('collapsed')) {
                    content.style.maxHeight = content.scrollHeight + 'px';
                    content.offsetHeight; // Force reflow
                    content.style.maxHeight = '0';
                } else {
                    content.style.maxHeight = content.scrollHeight + 'px';
                    // Remove max-height after animation completes
                    setTimeout(() => {
                        content.style.maxHeight = '';
                    }, 300);
                }
            }
        },
        
        // Toggle all sections expand/collapse
        toggleAllSections: function() {
            const sections = document.querySelectorAll('.section:not(#keyValues)');
            const allCollapsed = Array.from(sections).every(s => s.classList.contains('collapsed'));
            
            sections.forEach(section => {
                if (allCollapsed) {
                    section.classList.remove('collapsed');
                } else {
                    section.classList.add('collapsed');
                }
                this.updateSectionCollapseButton(section);
            });
            
            // Update button icon
            const btn = document.querySelector('#expand-collapse-all i');
            if (btn) {
                btn.className = allCollapsed ? 'bi bi-dash-circle' : 'bi bi-plus-circle';
            }
        },
        
        // Update section collapse button icon
        updateSectionCollapseButton: function(section) {
            const btn = section.querySelector('.btn-collapse i');
            if (btn) {
                btn.className = section.classList.contains('collapsed') 
                    ? 'bi bi-chevron-right' 
                    : 'bi bi-chevron-down';
            }
        },
        
        // Initialize section animations
        initializeSectionAnimations: function() {
            // Add smooth transitions to all section contents
            document.querySelectorAll('.section-content').forEach(content => {
                content.style.transition = 'max-height 0.3s ease-out';
            });
        },
        
        // Toggle reference mode
        toggleReferenceMode: function() {
            document.body.classList.toggle('reference-mode');
            
            const btn = document.getElementById('toggleReferenceBtn');
            if (btn) {
                const isReference = document.body.classList.contains('reference-mode');
                btn.textContent = isReference ? 'Show Target' : 'Show Reference';
                btn.classList.toggle('btn-danger', !isReference);
                btn.classList.toggle('btn-primary', isReference);
            }
            
            // Update feedback area
            this.updateFeedback(document.body.classList.contains('reference-mode') 
                ? 'Reference mode activated' 
                : 'Target mode activated');
        },
        
        // Reset calculator
        resetCalculator: function() {
            if (confirm('Are you sure you want to reset all values to defaults?')) {
                // Reset state
                if (window.TEUI.v4012?.DualState) {
                    window.TEUI.v4012.DualState.reset();
                }
                
                // Reload the page for a clean reset
                location.reload();
            }
        },
        
        // Setup import/export handlers
        setupImportExportHandlers: function() {
            // Import data
            const importBtn = document.getElementById('import-data-btn');
            const fileInput = document.getElementById('excel-file-input');
            
            if (importBtn && fileInput) {
                importBtn.addEventListener('click', (e) => {
                    e.preventDefault();
                    fileInput.click();
                });
                
                fileInput.addEventListener('change', (e) => {
                    const file = e.target.files[0];
                    if (file) {
                        this.handleFileImport(file);
                    }
                });
            }
            
            // Export data
            const exportBtn = document.getElementById('export-data-btn');
            if (exportBtn) {
                exportBtn.addEventListener('click', (e) => {
                    e.preventDefault();
                    this.exportData();
                });
            }
            
            // Other export options
            document.getElementById('export-excel')?.addEventListener('click', (e) => {
                e.preventDefault();
                this.exportToExcel();
            });
            
            // Report downloads
            document.getElementById('downloadReport')?.addEventListener('click', (e) => {
                e.preventDefault();
                alert('Report generation feature coming soon!');
            });
            
            document.getElementById('teui-factsheet')?.addEventListener('click', (e) => {
                e.preventDefault();
                alert('TEUI Factsheet download coming soon!');
            });
            
            document.getElementById('tedi-factsheet')?.addEventListener('click', (e) => {
                e.preventDefault();
                alert('TEDI Factsheet download coming soon!');
            });
        },
        
        // Handle file import
        handleFileImport: function(file) {
            this.updateFeedback('Importing data...');
            
            // Placeholder for import functionality
            setTimeout(() => {
                this.updateFeedback('Import feature coming soon!');
            }, 1000);
        },
        
        // Export data to CSV
        exportData: function() {
            this.updateFeedback('Exporting data...');
            
            // Placeholder for export functionality
            setTimeout(() => {
                this.updateFeedback('Export feature coming soon!');
            }, 1000);
        },
        
        // Export to Excel
        exportToExcel: function() {
            this.updateFeedback('Exporting to Excel...');
            
            // Placeholder for Excel export
            setTimeout(() => {
                this.updateFeedback('Excel export feature coming soon!');
            }, 1000);
        },
        
        // Update feedback area
        updateFeedback: function(message) {
            const feedbackArea = document.getElementById('feedback-area');
            if (feedbackArea) {
                feedbackArea.textContent = message;
                
                // Clear after 3 seconds
                setTimeout(() => {
                    feedbackArea.textContent = '';
                }, 3000);
            }
        },
        
        // Update timestamp
        updateTimestamp: function() {
            const timestampEl = document.getElementById('timestamp');
            if (timestampEl) {
                const now = new Date();
                timestampEl.textContent = now.toLocaleString();
            }
        }
    };
    
    // Initialize when DOM is ready
    function initialize() {
        UIController.initialize();
        
        // Set initial layout
        document.body.classList.add('vertical-layout');
        
        console.log('TEUI 4.012 Framework initialized');
    }
    
    // Check if DOM is already loaded
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', initialize);
    } else {
        initialize();
    }
    
    // Expose UI controller for external access
    window.TEUI.v4012.UIController = UIController;
})(); 