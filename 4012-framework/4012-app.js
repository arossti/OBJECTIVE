/**
 * 4012-app.js
 * Main application entry point for TEUI 4.012
 * 
 * Principles:
 * - UI functionality works even if calculations fail
 * - Clear separation between UI and business logic
 * - Minimal dependencies
 * - No ES6 modules - works in air-gapped environments
 */

// Create namespace
window.TEUI = window.TEUI || {};
window.TEUI.v4012 = window.TEUI.v4012 || {};

(function() {
    'use strict';
    
    // UI Controller - handles all UI interactions
    const UIController = {
        elements: {},
        mode: 'target', // 'target' or 'reference'
        
        init: function() {
            this.cacheElements();
            this.attachEventListeners();
            this.updateTimestamp();
            this.setStatus('Ready');
        },
        
        cacheElements: function() {
            // Cache commonly used elements
            this.elements.modeToggle = document.getElementById('modeToggle');
            this.elements.modeLabel = document.querySelector('.mode-label');
            this.elements.saveBtn = document.getElementById('saveBtn');
            this.elements.loadBtn = document.getElementById('loadBtn');
            this.elements.statusText = document.getElementById('statusText');
            this.elements.timestamp = document.getElementById('timestamp');
            this.elements.sectionsContainer = document.getElementById('sectionsContainer');
            
            // Cache all collapsible sections
            this.elements.collapseButtons = document.querySelectorAll('.btn-collapse');
        },
        
        attachEventListeners: function() {
            // Mode toggle
            if (this.elements.modeToggle) {
                this.elements.modeToggle.addEventListener('click', () => this.toggleMode());
            }
            
            // Save/Load buttons
            if (this.elements.saveBtn) {
                this.elements.saveBtn.addEventListener('click', () => this.saveData());
            }
            
            if (this.elements.loadBtn) {
                this.elements.loadBtn.addEventListener('click', () => this.loadData());
            }
            
            // Section collapse buttons
            this.elements.collapseButtons.forEach(btn => {
                btn.addEventListener('click', (e) => this.toggleSection(e));
            });
            
            // Keyboard shortcuts
            document.addEventListener('keydown', (e) => this.handleKeyboard(e));
        },
        
        toggleMode: function() {
            this.mode = this.mode === 'target' ? 'reference' : 'target';
            
            // Update UI
            if (this.elements.modeLabel) {
                this.elements.modeLabel.textContent = this.mode === 'target' ? 'Target' : 'Reference';
            }
            
            // Update body class for styling
            document.body.classList.toggle('reference-mode', this.mode === 'reference');
            
            // Notify state manager if available
            if (window.TEUI.v4012.DualState) {
                window.TEUI.v4012.DualState.setMode(this.mode);
            }
            
            this.setStatus(`Switched to ${this.mode} mode`);
        },
        
        toggleSection: function(e) {
            const btn = e.target;
            const sectionId = btn.getAttribute('data-section');
            const section = document.getElementById(sectionId);
            
            if (!section) return;
            
            // Toggle collapsed state
            section.classList.toggle('collapsed');
            
            // Update button text
            btn.textContent = section.classList.contains('collapsed') ? '+' : '−';
            
            // Save collapsed state to localStorage
            const collapsedSections = this.getCollapsedSections();
            if (section.classList.contains('collapsed')) {
                collapsedSections.add(sectionId);
            } else {
                collapsedSections.delete(sectionId);
            }
            localStorage.setItem('teui-collapsed-sections', JSON.stringify([...collapsedSections]));
        },
        
        getCollapsedSections: function() {
            try {
                const stored = localStorage.getItem('teui-collapsed-sections');
                return new Set(stored ? JSON.parse(stored) : []);
            } catch (e) {
                return new Set();
            }
        },
        
        restoreCollapsedState: function() {
            const collapsedSections = this.getCollapsedSections();
            
            collapsedSections.forEach(sectionId => {
                const section = document.getElementById(sectionId);
                const btn = document.querySelector(`[data-section="${sectionId}"]`);
                
                if (section && btn) {
                    section.classList.add('collapsed');
                    btn.textContent = '+';
                }
            });
        },
        
        saveData: function() {
            try {
                // Get data from state manager
                const data = window.TEUI.v4012.DualState ? 
                    window.TEUI.v4012.DualState.exportData() : 
                    { message: 'No data to save' };
                
                // Create blob and download
                const blob = new Blob([JSON.stringify(data, null, 2)], { type: 'application/json' });
                const url = URL.createObjectURL(blob);
                const a = document.createElement('a');
                a.href = url;
                a.download = `teui-4012-${new Date().toISOString().split('T')[0]}.json`;
                document.body.appendChild(a);
                a.click();
                document.body.removeChild(a);
                URL.revokeObjectURL(url);
                
                this.setStatus('Data saved successfully');
            } catch (error) {
                console.error('Save error:', error);
                this.setStatus('Error saving data', 'error');
            }
        },
        
        loadData: function() {
            const input = document.createElement('input');
            input.type = 'file';
            input.accept = '.json';
            
            input.addEventListener('change', (e) => {
                const file = e.target.files[0];
                if (!file) return;
                
                const reader = new FileReader();
                reader.onload = (e) => {
                    try {
                        const data = JSON.parse(e.target.result);
                        
                        // Load data into state manager
                        if (window.TEUI.v4012.DualState) {
                            window.TEUI.v4012.DualState.importData(data);
                        }
                        
                        // Refresh UI
                        if (window.TEUI.v4012.Sections && window.TEUI.v4012.Sections.S03) {
                            window.TEUI.v4012.Sections.S03.calculateAll();
                        }
                        
                        this.setStatus('Data loaded successfully');
                    } catch (error) {
                        console.error('Load error:', error);
                        this.setStatus('Error loading data', 'error');
                    }
                };
                
                reader.readAsText(file);
            });
            
            input.click();
        },
        
        handleKeyboard: function(e) {
            // Ctrl/Cmd + S to save
            if ((e.ctrlKey || e.metaKey) && e.key === 's') {
                e.preventDefault();
                this.saveData();
            }
            
            // Ctrl/Cmd + O to load
            if ((e.ctrlKey || e.metaKey) && e.key === 'o') {
                e.preventDefault();
                this.loadData();
            }
            
            // Ctrl/Cmd + M to toggle mode
            if ((e.ctrlKey || e.metaKey) && e.key === 'm') {
                e.preventDefault();
                this.toggleMode();
            }
        },
        
        setStatus: function(message, type = 'info') {
            if (this.elements.statusText) {
                this.elements.statusText.textContent = message;
                this.elements.statusText.className = `status-text status-${type}`;
                
                // Clear status after 3 seconds
                setTimeout(() => {
                    if (this.elements.statusText.textContent === message) {
                        this.elements.statusText.textContent = 'Ready';
                        this.elements.statusText.className = 'status-text';
                    }
                }, 3000);
            }
        },
        
        updateTimestamp: function() {
            const updateTime = () => {
                if (this.elements.timestamp) {
                    const now = new Date();
                    this.elements.timestamp.textContent = now.toLocaleTimeString();
                }
            };
            
            updateTime();
            setInterval(updateTime, 1000);
        }
    };
    
    // Initialize when DOM is ready
    function initialize() {
        if (document.readyState === 'loading') {
            document.addEventListener('DOMContentLoaded', initialize);
            return;
        }
        
        // Initialize UI Controller
        UIController.init();
        
        // Restore collapsed sections
        UIController.restoreCollapsedState();
        
        // Initialize state manager if available
        if (window.TEUI.v4012.DualState) {
            window.TEUI.v4012.DualState.initialize();
        }
        
        console.log('TEUI 4.012 initialized');
    }
    
    // Start initialization
    initialize();
    
    // Export UI controller for external access
    window.TEUI.v4012.UIController = UIController;
    
})(); 