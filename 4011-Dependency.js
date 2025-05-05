// 4011-Dependency.js
// Dependency graph visualization using D3.js for TEUI Calculator v4.011
// Based on structure from 4007-dependency-graph.js

// Ensure TEUI namespace exists
window.TEUI = window.TEUI || {};

// DependencyGraph class for rendering dependency visualizations
window.TEUI.DependencyGraph = class DependencyGraph {
    constructor(containerSelector = '#dependencyDiagram .section-content .dependency-graph-container') { // Target specific container
        this.containerSelector = containerSelector;
        this.data = null;
        this.svg = null;
        this.simulation = null;
        this.width = 0;
        this.height = 0;
        
        // Visualization settings (Copied from 4007, may need adjustments)
        this.settings = {
            nodeRadius: 6,
            linkDistance: 100,
            chargeStrength: -300,
            colorScheme: {
                Building: '#4e79a7', // Section 02
                Location: '#f28e2c', // Section 03 (Climate)
                Target: '#e15759', // Section 04 (Actual/Target)
                Emissions: '#59a14f', // Section 05
                Gains: '#76b7b2', // Section 09, 10 (Internal/Radiant)
                Ventilation: '#edc949', // Section 13 (Ventilation part)
                Mechanical: '#af7aa1', // Section 13 (HVAC part)
                Water: '#1170aa', // Section 07
                Air: '#66c2a5', // Section 08
                Transmission: '#ff9da7', // Section 11
                Metrics: '#9c755f', // Section 12
                Summary: '#bab0ab', // Section 14, 15
                Key: '#b07aa1', // Section 01
                Renewables: '#59a14f', // Section 06 (Group with Emissions?)
                Other: '#8da0cb' // Fallback
            },
            labelFontSize: 10,
            tooltipDelay: 500
        };

        // TODO: Consider moving colorScheme to a shared config?
    }
    
    /**
     * Initialize the graph from state manager data
     */
    initialize() {
        // TODO: Ensure StateManager and FieldManager are available
        const stateManager = window.TEUI?.StateManager;
        const fieldManager = window.TEUI?.FieldManager;
        
        if (!stateManager || !fieldManager) {
            console.error('StateManager or FieldManager is required to initialize dependency graph');
            this.showErrorMessage('Initialization failed: Core modules not found.');
            return;
        }
        
        // Get dependency data
        try {
            // TODO: Implement stateManager.exportDependencyGraph()
            if (typeof stateManager.exportDependencyGraph !== 'function') {
                throw new Error('StateManager does not have exportDependencyGraph method.');
            }
            this.data = stateManager.exportDependencyGraph();
            if (!this.data || !this.data.nodes || !this.data.links) {
                throw new Error('Invalid data format from exportDependencyGraph.');
            }
            console.log('[DependencyGraph] Data loaded:', this.data.nodes.length, 'nodes,', this.data.links.length, 'links');
            
            // Add group/type info to nodes using FieldManager (more reliable)
            this.data.nodes.forEach(node => {
                const fieldDef = fieldManager.getField(node.id);
                node.type = fieldDef?.type || 'unknown';
                // Basic grouping by prefix (can be refined)
                if (!node.group) {
                    if (node.id.startsWith('d_')) node.group = 'Building'; // Example
                    else if (node.id.includes('_11')) node.group = 'Transmission'; // Example
                    // Add more grouping rules based on field IDs or sections
                    else node.group = 'Other';
                }
            });

        } catch (error) {
            console.error('[DependencyGraph] Failed to get or process dependency data:', error);
            this.showErrorMessage(`Data loading failed: ${error.message}`);
            return;
        }
        
        // Set up the SVG container
        this.setupSvg();
        
        // Render the graph only if SVG setup was successful
        if (this.svg) {
            this.render();
            this.setupEvents();
            console.log('[DependencyGraph] Initialized successfully.');
        } else {
            this.showErrorMessage('SVG container setup failed.');
        }
    }
    
    /**
     * Setup the SVG container
     */
    setupSvg() {
        const container = document.querySelector(this.containerSelector);
        if (!container) {
            console.error(`[DependencyGraph] Container not found: ${this.containerSelector}`);
            return;
        }
        
        // Clear any existing content (e.g., previous error message)
        container.innerHTML = ''; 
        
        // Create main container for the graph itself (ensure it's added)
        const graphContainer = document.createElement('div');
        graphContainer.className = 'dependency-graph-svg-wrapper'; // More specific class
        graphContainer.style.width = '100%';
        graphContainer.style.height = '600px'; // Increased height
        graphContainer.style.border = '1px solid #ccc';
        graphContainer.style.position = 'relative'; // Needed for absolute positioning of legend/tooltip
        container.appendChild(graphContainer);

        // Check dimensions AFTER adding to DOM
        this.width = graphContainer.clientWidth;
        this.height = graphContainer.clientHeight;

        if (this.width === 0 || this.height === 0) {
             console.warn('[DependencyGraph] Container has zero dimensions. Graph might not be visible.');
             // Provide a fallback size if needed, though ideally CSS should handle this.
             this.width = container.clientWidth || 800; 
             this.height = 600;
        }
        
        // Create SVG
        this.svg = d3.select(graphContainer)
            .append('svg')
            .attr('width', '100%')
            .attr('height', '100%')
            .attr('viewBox', `0 0 ${this.width} ${this.height}`) // Use calculated dimensions
            .attr('preserveAspectRatio', 'xMidYMid meet');
        
        // Add zoom behavior
        const zoom = d3.zoom()
            .scaleExtent([0.1, 4])
            .on('zoom', (event) => {
                this.svg.select('g.graph-content') // Target the correct group
                    .attr('transform', event.transform);
            });
        
        this.svg.call(zoom);
        
        // Create a group for the graph content (nodes and links)
        this.svg.append('g')
            .attr('class', 'graph-content');
        
        // Add arrow marker definition for the links
        this.svg.append('defs').append('marker')
            .attr('id', 'arrowhead')
            .attr('viewBox', '0 -5 10 10')
            .attr('refX', 15) // Adjust refX based on node radius + desired gap
            .attr('refY', 0)
            .attr('orient', 'auto')
            .attr('markerWidth', 6) // Smaller arrowhead
            .attr('markerHeight', 6)
            .attr('xoverflow', 'visible')
            .append('svg:path')
            .attr('d', 'M 0,-5 L 10,0 L 0,5')
            .attr('fill', '#999')
            .style('stroke', 'none');
    }

    // --- Methods copied from 4007 (render, createFilterControls, etc.) --- 
    // --- Need review and potential adaptation for TEUI 4.011 --- 

    /**
     * Create filter controls (Adapted from 4007)
     * @param {Element} container - The parent container element (outside the SVG wrapper)
     */
    createFilterControls(parentElement) {
        const controlsContainer = document.createElement('div');
        controlsContainer.className = 'dependency-graph-controls';
        controlsContainer.style.display = 'flex';
        controlsContainer.style.flexWrap = 'wrap';
        controlsContainer.style.gap = '10px';
        controlsContainer.style.marginBottom = '10px';
        controlsContainer.style.padding = '10px';
        controlsContainer.style.borderBottom = '1px solid #eee';
        
        // Create a search box
        const searchContainer = document.createElement('div');
        searchContainer.style.flex = '1';
        searchContainer.style.minWidth = '200px';
        
        const searchInput = document.createElement('input');
        searchInput.type = 'text';
        searchInput.placeholder = 'Search fields (e.g., d_119)';
        searchInput.className = 'form-control form-control-sm'; // Use Bootstrap classes
        searchInput.style.width = '100%';
        this.searchInput = searchInput; // Store reference
        
        searchContainer.appendChild(searchInput);
        controlsContainer.appendChild(searchContainer);
        
        // Create group filter
        const groupFilterContainer = document.createElement('div');
        groupFilterContainer.style.flex = '1';
        groupFilterContainer.style.minWidth = '200px';
        
        const groupSelect = document.createElement('select');
        groupSelect.className = 'form-select form-select-sm'; // Use Bootstrap classes
        groupSelect.style.width = '100%';
        this.groupSelect = groupSelect; // Store reference
        
        // Add "All Groups" option
        const allOption = document.createElement('option');
        allOption.value = 'all';
        allOption.text = 'All Groups';
        groupSelect.appendChild(allOption);
        
        // Add group options based on detected groups in data
        const groupsInData = new Set(this.data.nodes.map(n => n.group).filter(g => g));
        groupsInData.forEach(group => {
            const option = document.createElement('option');
            option.value = group;
            option.text = group;
            groupSelect.appendChild(option);
        });
        
        groupFilterContainer.appendChild(groupSelect);
        controlsContainer.appendChild(groupFilterContainer);
        
        // Add layout controls
        const layoutContainer = document.createElement('div');
        layoutContainer.style.display = 'flex';
        layoutContainer.style.gap = '5px';
        layoutContainer.style.alignItems = 'center';
        
        // TODO: Add Force/Dagre layout buttons later if needed
        // Force directed button
        // const forceButton = document.createElement('button'); ...
        
        // Reset button
        const resetButton = document.createElement('button');
        resetButton.textContent = 'Reset View';
        resetButton.className = 'btn btn-outline-secondary btn-sm'; // Bootstrap button
        this.resetButton = resetButton; // Store reference

        layoutContainer.appendChild(resetButton);
        controlsContainer.appendChild(layoutContainer);
        
        // Prepend controls to the parent element
        parentElement.prepend(controlsContainer);
    }

    /**
     * Create info panel for node details (Adapted from 4007)
     * @param {Element} container - The parent container element
     */
    createInfoPanel(parentElement) {
        const infoPanel = document.createElement('div');
        infoPanel.className = 'dependency-info-panel alert alert-secondary'; // Use Bootstrap alert
        infoPanel.style.marginBottom = '10px';
        infoPanel.style.display = 'none';
        infoPanel.setAttribute('role', 'alert');
        
        const title = document.createElement('h6'); // Use h6 for less emphasis
        title.className = 'info-title alert-heading';
        title.style.marginBottom = '0.5rem';
        title.textContent = 'Field Information';
        
        const value = document.createElement('p');
        value.className = 'info-value mb-1';
        
        const dependencies = document.createElement('p');
        dependencies.className = 'info-dependencies mb-1';
        
        const dependents = document.createElement('p');
        dependents.className = 'info-dependents mb-0'; // No margin bottom on last item
        
        infoPanel.appendChild(title);
        infoPanel.appendChild(value);
        infoPanel.appendChild(dependencies);
        infoPanel.appendChild(dependents);
        
        // Prepend info panel
        parentElement.prepend(infoPanel);
        this.infoPanel = infoPanel; // Store reference
    }

     /**
     * Setup event listeners for controls and graph elements (Adapted from 4007)
     */
    setupEvents() {
        // Filter events
        if (this.searchInput) {
            this.searchInput.addEventListener('input', () => {
                this.filterGraph(this.searchInput.value, this.groupSelect?.value || 'all');
            });
        }
        if (this.groupSelect) {
            this.groupSelect.addEventListener('change', () => {
                this.filterGraph(this.searchInput?.value || '', this.groupSelect.value);
            });
        }
        
        // Reset button event
        if (this.resetButton) {
            this.resetButton.onclick = () => this.resetView();
        }

        // Node hover/click events (add after nodes are created in render)
        if (this.nodeGroups) {
            this.nodeGroups
                .on('mouseover', (event, d) => {
                    d3.select(event.currentTarget).select('text').style('display', null);
                    // Optional: Add tooltip display logic here if needed
                })
                .on('mouseout', (event, d) => {
                    // Hide label only if not the currently selected node
                    if (!this.selectedNode || this.selectedNode.id !== d.id) {
                        d3.select(event.currentTarget).select('text').style('display', 'none');
                    }
                    // Optional: Hide tooltip here
                })
                .on('click', (event, d) => {
                    this.selectedNode = d; // Track selected node
                    this.showNodeInfo(d);
                    event.stopPropagation(); // Prevent background click
                });
        }
        
        // Click on SVG background to clear selection
        if (this.svg) {
            this.svg.on('click', () => {
                this.selectedNode = null; // Clear selection
                this.hideNodeInfo();
                this.resetHighlighting();
            });
        }
    }

    /**
     * Render the graph (Adapted from 4007)
     */
    render() {
        if (!this.data || !this.svg) return;

        // Check if container exists
        const graphContent = this.svg.select('g.graph-content');
        if (graphContent.empty()) {
            console.error('[DependencyGraph] Graph content group not found.');
            return;
        }
        
        const { nodes, links } = this.data;
        
        // Create a force simulation
        this.simulation = d3.forceSimulation(nodes)
            .force('link', d3.forceLink(links).id(d => d.id).distance(this.settings.linkDistance))
            .force('charge', d3.forceManyBody().strength(this.settings.chargeStrength))
            .force('center', d3.forceCenter(this.width / 2, this.height / 2))
            .force('collision', d3.forceCollide().radius(this.settings.nodeRadius * 2))
            .on('tick', () => this.ticked());
        
        // --- Links --- 
        this.links = graphContent.selectAll('line.link')
            .data(links, d => `${d.source.id || d.source}-${d.target.id || d.target}`) // Key function for object constancy
            .join(
                enter => enter.append('line')
                    .attr('class', 'link')
                    .style('stroke', '#999')
                    .style('stroke-opacity', 0.6)
                    .style('stroke-width', 1)
                    .attr('marker-end', 'url(#arrowhead)'),
                update => update, // No update needed for static properties
                exit => exit.remove()
            );
        
        // --- Nodes --- 
        this.nodeGroups = graphContent.selectAll('g.node')
            .data(nodes, d => d.id) // Key function for object constancy
            .join(
                enter => {
                    const g = enter.append('g').attr('class', 'node');
                    
                    g.append('circle')
                        .attr('r', this.settings.nodeRadius)
                        .style('stroke', '#fff')
                        .style('stroke-width', 1.5)
                        .style('cursor', 'pointer');
                    
                    g.append('text')
                        .attr('dx', 12)
                        .attr('dy', '.35em')
                        .style('font-size', `${this.settings.labelFontSize}px`)
                        .style('pointer-events', 'none') // Labels don't block clicks on circle
                        .style('display', 'none'); // Hide labels initially
                    
                    g.append('title'); // For native browser tooltip
                    
                    g.call(d3.drag()
                        .on('start', (event, d) => this.dragstarted(event, d))
                        .on('drag', (event, d) => this.dragged(event, d))
                        .on('end', (event, d) => this.dragended(event, d)));
                        
                    return g;
                },
                update => update, // Handled below
                exit => exit.remove()
            );

        // --- Update Node Appearance (for enter and update selections) ---
        this.nodeGroups.select('circle')
             .style('fill', d => this.settings.colorScheme[d.group] || this.settings.colorScheme.Other);

        this.nodeGroups.select('text')
            .text(d => d.id); 

        this.nodeGroups.select('title')
             .text(d => `${d.id}\nGroup: ${d.group}\nType: ${d.type}`);

        // Re-attach event handlers after join operation
        // (D3's .join() handles this automatically if listeners are on the joined selection)
        // If issues arise, explicitly re-call this.setupEvents() or re-bind listeners here.
    }

    // --- Other methods copied from 4007 (ticked, drag handlers, filtering, layout, info panel, highlighting) ---
    // --- Review for adaptation needed --- 

    ticked() {
        if (!this.links || !this.nodeGroups) return;
        this.links
            .attr('x1', d => d.source.x)
            .attr('y1', d => d.source.y)
            .attr('x2', d => d.target.x)
            .attr('y2', d => d.target.y);
        
        this.nodeGroups
            .attr('transform', d => `translate(${d.x}, ${d.y})`);
    }
    
    dragstarted(event, d) {
        if (!event.active) this.simulation.alphaTarget(0.3).restart();
        d.fx = d.x;
        d.fy = d.y;
    }
    
    dragged(event, d) {
        d.fx = event.x;
        d.fy = event.y;
    }
    
    dragended(event, d) {
        if (!event.active) this.simulation.alphaTarget(0);
        // Keep node fixed after dragging? Optional.
        // d.fx = null;
        // d.fy = null;
    }
    
    filterGraph(searchText, group) {
        if (!this.nodeGroups || !this.links) return;
        
        const searchLower = searchText.toLowerCase();
        
        this.nodeGroups.style('opacity', d => {
            const matchesSearch = searchLower === '' || d.id.toLowerCase().includes(searchLower);
            const matchesGroup = group === 'all' || d.group === group;
            return (matchesSearch && matchesGroup) ? 1 : 0.1;
        });
        
        this.links.style('opacity', d => {
            const sourceVisible = this.isNodeVisible(d.source, searchLower, group);
            const targetVisible = this.isNodeVisible(d.target, searchLower, group);
            return (sourceVisible && targetVisible) ? 0.6 : 0.05;
        });

        // Hide info panel if current selection is filtered out
        if (this.selectedNode && !this.isNodeVisible(this.selectedNode, searchLower, group)) {
            this.hideNodeInfo();
        }
    }
    
    isNodeVisible(node, searchLower, group) {
        // Need to handle cases where source/target might just be IDs during filtering
        const nodeId = typeof node === 'object' ? node.id : node;
        const nodeObj = this.getNodeById(nodeId);
        if (!nodeObj) return false; 

        const matchesSearch = searchLower === '' || nodeObj.id.toLowerCase().includes(searchLower);
        const matchesGroup = group === 'all' || nodeObj.group === group;
        return matchesSearch && matchesGroup;
    }
    
    // TODO: Implement switchLayout and applyDagreLayout if hierarchical view is desired.
    switchLayout(layout) {
        alert(`Layout switching to ${layout} is not yet implemented in v4.011.`);
    }

    applyDagreLayout() {
        alert('Dagre layout not implemented yet.');
    }

    resetView() {
        if (!this.svg) return;
        // Also reset filters
        if(this.searchInput) this.searchInput.value = '';
        if(this.groupSelect) this.groupSelect.value = 'all';
        this.filterGraph('', 'all');

        // Reset zoom/pan
        this.svg.transition()
            .duration(750)
            .call(d3.zoom().transform, d3.zoomIdentity);
    }
    
    showNodeInfo(node) {
        if (!this.infoPanel || !node) return;
        
        const stateManager = window.TEUI?.StateManager;
        if (!stateManager) return;
        
        this.highlightNode(node);
        
        const title = this.infoPanel.querySelector('.info-title');
        const value = this.infoPanel.querySelector('.info-value');
        const dependencies = this.infoPanel.querySelector('.info-dependencies');
        const dependents = this.infoPanel.querySelector('.info-dependents');
        
        title.textContent = `Field: ${node.id}`;
        
        const currentValue = stateManager.getValue(node.id);
        value.innerHTML = `<strong>Current Value:</strong> ${currentValue !== null && currentValue !== undefined ? currentValue : 'N/A'}`;
        
        // Use the already processed links data for connections
        const fieldDependencies = this.data.links
            .filter(link => (link.target.id || link.target) === node.id)
            .map(link => link.source.id || link.source);
            
        dependencies.innerHTML = `<strong>Depends on:</strong> ${fieldDependencies.length > 0 ? fieldDependencies.join(', ') : 'None'}`;
        
        const fieldDependents = this.data.links
            .filter(link => (link.source.id || link.source) === node.id)
            .map(link => link.target.id || link.target);
            
        dependents.innerHTML = `<strong>Influences:</strong> ${fieldDependents.length > 0 ? fieldDependents.join(', ') : 'None'}`;
        
        this.infoPanel.style.display = 'block';
    }
    
    hideNodeInfo() {
        if (this.infoPanel) {
            this.infoPanel.style.display = 'none';
        }
        // Don't reset highlighting here, only on background click or new selection
    }
    
    highlightNode(node) {
        if (!this.nodeGroups || !this.links || !node) return;

        this.resetHighlighting(); // Clear previous highlights
        
        this.nodeGroups.style('opacity', 0.1);
        this.links.style('opacity', 0.05);
        
        const connectedLinks = this.data.links.filter(l => 
            (l.source.id || l.source) === node.id || 
            (l.target.id || l.target) === node.id
        );
        
        const connectedNodeIds = new Set([node.id]);
        connectedLinks.forEach(l => {
            connectedNodeIds.add(l.source.id || l.source);
            connectedNodeIds.add(l.target.id || l.target);
        });

        // Highlight connected nodes
        this.nodeGroups
            .filter(d => connectedNodeIds.has(d.id))
            .style('opacity', 1)
            .select('text').style('display', null); // Show labels for highlighted
            
        // Bold stroke for the selected node
         this.nodeGroups.filter(d => d.id === node.id)
             .select('circle')
             .style('stroke', '#333')
             .style('stroke-width', 2.5);

        // Highlight connected links
        this.links
            .filter(l => 
                (l.source.id || l.source) === node.id || 
                (l.target.id || l.target) === node.id
            )
            .style('opacity', 0.8)
            .style('stroke-width', 1.5)
            .style('stroke', l => (l.source.id || l.source) === node.id ? '#cc0000' : '#0077cc'); // Red outgoing, Blue incoming
    }
    
    resetHighlighting() {
        if (!this.nodeGroups || !this.links) return;
        this.nodeGroups.style('opacity', 1)
            .select('circle')
            .style('stroke', '#fff')
            .style('stroke-width', 1.5);
            
        this.nodeGroups.select('text').style('display', 'none'); // Hide all labels
            
        this.links.style('opacity', 0.6)
            .style('stroke', '#999')
            .style('stroke-width', 1);
            
        this.selectedNode = null; // Clear selected node reference
    }
    
    getNodeById(id) {
        return this.data?.nodes.find(node => node.id === id);
    }
    
    focusOnNode(nodeId) {
        // TODO: Implement focus logic if needed
        console.warn('focusOnNode not fully implemented');
        const node = this.getNodeById(nodeId);
        if (node) {
            this.showNodeInfo(node);
        }
    }

    showErrorMessage(message) {
        const container = document.querySelector(this.containerSelector);
        if (container) {
            container.innerHTML = `<div class="alert alert-danger">${message}</div>`;
        }
    }
}

// --- Initialization Logic (Adapted from 4007) --- 

// Global instance variable
let teuiDependencyGraphInstance = null;

/**
 * Initialize the dependency graph visualization
 */
function initializeDependencyGraph() {
    // Prevent double initialization
    if (teuiDependencyGraphInstance) {
        console.log('[DependencyGraph] Already initialized.');
        return;
    }

    // Check if D3 is available
    if (typeof d3 === 'undefined') {
        console.error('D3.js is required. Attempting to load...');
        const script = document.createElement('script');
        script.src = 'https://d3js.org/d3.v7.min.js';
        script.onload = initializeAfterD3Load;
        script.onerror = () => {
            console.error('Failed to load D3.js');
            const container = document.querySelector('#dependencyDiagram .section-content');
            if (container) container.innerHTML = '<div class="alert alert-danger">Error: D3.js library could not be loaded.</div>';
        };
        document.head.appendChild(script);
    } else {
        initializeAfterD3Load();
    }
}

/**
 * Contains the core initialization logic after D3 is confirmed loaded.
 */
function initializeAfterD3Load() {
    console.log('[DependencyGraph] D3 loaded. Initializing graph...');
    const graphContainer = document.querySelector('#dependencyDiagram .section-content');
    const controlsContainer = document.querySelector('#dependencyDiagram .dependency-graph-controls-wrapper'); // Separate container for controls
    const infoPanelContainer = document.querySelector('#dependencyDiagram .dependency-graph-info-wrapper'); // Separate container for info

    if (!graphContainer || !controlsContainer || !infoPanelContainer) {
        console.warn('[DependencyGraph] Required containers (#dependencyDiagram .section-content / controls-wrapper / info-wrapper) not found. Initialization deferred.');
        return; 
    }

    // Get the state manager
    const stateManager = window.TEUI?.StateManager;
    if (!stateManager) {
        console.error('[DependencyGraph] StateManager not available.');
        graphContainer.innerHTML = '<div class="alert alert-danger">Error: StateManager not found.</div>';
        return;
    }
    
    // TODO: Ensure registerInitialDependencies runs if needed, maybe triggered elsewhere?
    // registerInitialDependencies(stateManager); 

    // Create and initialize the graph instance
    teuiDependencyGraphInstance = new window.TEUI.DependencyGraph('#dependencyDiagram .dependency-graph-svg-wrapper'); // Point to SVG wrapper
    
    // Create controls and info panel *outside* the SVG wrapper
    teuiDependencyGraphInstance.createInfoPanel(infoPanelContainer);
    teuiDependencyGraphInstance.createFilterControls(controlsContainer);

    // Call initialize which gets data and renders
    teuiDependencyGraphInstance.initialize(); 
}

// --- Trigger Initialization --- 

// Attempt initialization when the DOM is ready
document.addEventListener('DOMContentLoaded', () => {
    // Use a small delay to ensure other modules might have initialized
    setTimeout(() => {
         console.log('[DependencyGraph] DOMContentLoaded, attempting initialization...');
         // Check if the specific container exists, which implies the tab might be visible
         if (document.querySelector('#dependencyDiagram .section-content')) {
              initializeDependencyGraph();
         }
    }, 500); 
});

// Also listen for tab visibility changes (assuming Bootstrap tabs)
document.addEventListener('shown.bs.tab', function (event) {
  if (event.target.getAttribute('data-bs-target') === '#dependencyDiagram') {
    console.log('[DependencyGraph] Tab shown, ensuring initialization...');
    if (!teuiDependencyGraphInstance) {
        // Initialize if not already done
        initializeDependencyGraph();
    } else {
        // Optional: Refresh or resize graph if needed when tab becomes visible
        // teuiDependencyGraphInstance.resize(); 
    }
  }
});

// Export utility functions for global access if needed
window.TEUI.DependencyGraphUtils = {
    initialize: initializeDependencyGraph,
    focusOnNode: (nodeId) => {
        teuiDependencyGraphInstance?.focusOnNode(nodeId);
    },
    getInstance: () => teuiDependencyGraphInstance
};

console.log('[4011-Dependency.js] Module loaded.'); 