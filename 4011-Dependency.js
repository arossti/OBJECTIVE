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
            nodeRadius: 10, // Increased node size further
            linkDistance: 120, // Increased link distance slightly
            chargeStrength: -400, // Slightly stronger repulsion
            colorScheme: {
                '1. Key Values': '#b07aa1', // Purple (Keep distinct)
                '2. Building Information': '#4e79a7', // Blue
                '3. Climate Calculations': '#f28e2c', // Orange
                '4. Actual vs. Target Energy': '#e15759', // Red (Energy Input/Target)
                '5. CO2e Emissions': '#59a14f', // Green
                '6. Renewable Energy': '#59a14f', // Green (Same as Emissions?)
                '7. Water Use': '#1170aa', // Dark Blue
                '8. Indoor Air Quality': '#66c2a5', // Teal
                '9. Occupant + Internal Gains': '#ff9d9a', // Light Orange/Peach (Gains)
                '10. Radiant Gains': '#ff9d9a', // Light Orange/Peach (Gains)
                '11. Transmission Losses': '#76b7b2', // Teal/Green (Losses)
                '12. Volume and Surface Metrics': '#9c755f', // Brown (Metrics)
                '13. Mechanical Loads': '#af7aa1', // Purple (Distinct)
                '14. TEDI & TELI': '#bab0ab', // Grey (Summary)
                '15. TEUI Summary': '#bab0ab', // Grey (Summary)
                'Other': '#8da0cb' // Light Blue/Grey Fallback
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
        const stateManager = window.TEUI?.StateManager;
        const fieldManager = window.TEUI?.FieldManager;
        
        if (!stateManager || !fieldManager) {
            console.error('[DependencyGraph] StateManager or FieldManager is required.');
            this.showErrorMessage('Initialization failed: Core modules not found.');
            return false; // Indicate failure
        }
        
        // Get dependency data FIRST
        try {
            if (typeof stateManager.exportDependencyGraph !== 'function') {
                throw new Error('StateManager does not have exportDependencyGraph method.');
            }
            this.data = stateManager.exportDependencyGraph();
            if (!this.data || !this.data.nodes || !this.data.links) {
                throw new Error('Invalid data format from exportDependencyGraph.');
            }
            console.log('[DependencyGraph] Data loaded:', this.data.nodes.length, 'nodes,', this.data.links.length, 'links');
            
            // Add group/type info to nodes
            this.enhanceNodeData(fieldManager);

        } catch (error) {
            console.error('[DependencyGraph] Failed to get or process dependency data:', error);
            this.showErrorMessage(`Data loading failed: ${error.message}`);
            return false; // Indicate failure
        }
        
        // Data is loaded, now safe to setup UI that might depend on it
        return true; // Indicate success
    }

    /** Helper to add group/type info */
    enhanceNodeData(fieldManager) {
         this.data.nodes.forEach(node => {
            const fieldDef = fieldManager.getField(node.id);
            node.type = fieldDef?.type || 'unknown';
            // Basic grouping (can be refined)
            if (!node.group) {
                node.group = this.getNodeGroup(node.id, fieldDef); // Use internal helper
            }
        });
    }

    /** Helper to determine node group */
    getNodeGroup(nodeId, fieldDef) {
        // Prioritize section info if available
        if (fieldDef?.section) {
            switch (fieldDef.section) {
                case 'keyValues': return 'Key';
                case 'buildingInfo': return 'Building';
                case 'climateCalculations': return 'Location';
                case 'actualTargetEnergy': return 'Target';
                case 'emissions': return 'Emissions';
                case 'onSiteEnergy': return 'Renewables';
                case 'waterUse': return 'Water';
                case 'indoorAirQuality': return 'Air';
                case 'occupantInternalGains':
                case 'envelopeRadiantGains': return 'Gains';
                case 'envelopeTransmissionLosses': return 'Transmission';
                case 'volumeSurfaceMetrics': return 'Metrics';
                case 'mechanicalLoads': return 'Mechanical'; 
                case 'tediSummary':
                case 'teuiSummary': return 'Summary';
                default: break; 
            }
        }
        // Fallback to prefix
        if (nodeId.includes('_11')) return 'Transmission';
        if (nodeId.includes('_13')) return 'Mechanical';
        return 'Other';
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
            .attr('refX', 20) // Increased again (10 + gap)
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
        
        // Group options will be populated AFTER data is loaded
        
        groupFilterContainer.appendChild(groupSelect);
        controlsContainer.appendChild(groupFilterContainer);
        
        // Add layout controls
        const layoutContainer = document.createElement('div');
        layoutContainer.style.display = 'flex';
        layoutContainer.style.gap = '5px';
        layoutContainer.style.alignItems = 'center';
        
        // Force directed button
        const forceButton = document.createElement('button');
        forceButton.textContent = 'Force Layout';
        forceButton.className = 'btn btn-outline-secondary btn-sm layout-button active'; // Start with force active
        forceButton.onclick = () => this.switchLayout('force');
        this.forceButton = forceButton; // Store ref

        // Dagre (hierarchical) button
        const dagreButton = document.createElement('button');
        dagreButton.textContent = 'Hierarchical';
        dagreButton.className = 'btn btn-outline-secondary btn-sm layout-button';
        dagreButton.onclick = () => this.switchLayout('dagre');
        this.dagreButton = dagreButton; // Store ref
        
        // Reset button
        const resetButton = document.createElement('button');
        resetButton.textContent = 'Reset View';
        resetButton.className = 'btn btn-outline-secondary btn-sm'; // Bootstrap button
        this.resetButton = resetButton; // Store reference

        // Fullscreen button
        const fullscreenButton = document.createElement('button');
        fullscreenButton.innerHTML = '<i class="bi bi-arrows-fullscreen"></i>'; // Bootstrap icon
        fullscreenButton.title = 'Toggle Fullscreen';
        fullscreenButton.className = 'btn btn-outline-secondary btn-sm'; 
        fullscreenButton.style.marginLeft = 'auto'; // Push to the right
        this.fullscreenButton = fullscreenButton; // Store ref

        layoutContainer.appendChild(forceButton);
        layoutContainer.appendChild(dagreButton);
        layoutContainer.appendChild(resetButton);
        layoutContainer.appendChild(fullscreenButton);
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

        // Fullscreen button event
        if (this.fullscreenButton) {
            this.fullscreenButton.onclick = () => this.toggleFullscreen();
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
             .style('fill', d => {
                const color = this.settings.colorScheme[d.group] || this.settings.colorScheme.Other;
                // console.log(`Node: ${d.id}, Group: ${d.group}, Color: ${color}`); // DEBUG LOG
                return color;
             });

        this.nodeGroups.select('text')
            .text(d => d.label || d.id);

        this.nodeGroups.select('title')
             .text(d => `${d.label || d.id} (${d.id})\nGroup: ${d.group}\nType: ${d.type}`);

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
        // Update button states
        document.querySelectorAll('.layout-button').forEach(button => button.classList.remove('active'));
        if (layout === 'force' && this.forceButton) this.forceButton.classList.add('active');
        if (layout === 'dagre' && this.dagreButton) this.dagreButton.classList.add('active');

        if (layout === 'force') {
            // Restore forces and restart simulation
            if (!this.simulation) return; // Should not happen if rendered
            this.simulation
                .force('link', d3.forceLink(this.data.links).id(d => d.id).distance(this.settings.linkDistance))
                .force('charge', d3.forceManyBody().strength(this.settings.chargeStrength))
                .force('center', d3.forceCenter(this.width / 2, this.height / 2))
                .force('collision', d3.forceCollide().radius(this.settings.nodeRadius * 2))
                .alpha(1) // Reheat the simulation
                .restart();
            console.log('[DependencyGraph] Switched to Force layout.');
        } else if (layout === 'dagre') {
            // Stop force simulation before applying Dagre
            if (this.simulation) this.simulation.stop();

            // Check if dagre library is loaded
            if (typeof dagre === 'undefined') {
                console.error('Dagre library not loaded. Cannot apply hierarchical layout.');
                alert('Hierarchical layout library (Dagre) is not loaded. Please ensure it is included.');
                this.switchLayout('force'); // Revert to force layout
                return;
            }
            this.applyDagreLayout();
            console.log('[DependencyGraph] Switched to Dagre layout.');
        }
    }

    /** Apply dagre hierarchical layout */
    applyDagreLayout() {
        if (!this.data || !this.nodeGroups || !this.links) return;
        
        // Create a new directed graph
        const g = new dagre.graphlib.Graph();

        // Set an object for the graph label
        g.setGraph({});

        // Default to assigning a new object as a label for each edge.
        g.setDefaultEdgeLabel(function() { return {}; });

        // Add nodes to the graph. The first argument is the node id.
        // We link the node object from our data to the graph node.
        this.data.nodes.forEach(node => {
            g.setNode(node.id, { label: node.id, width: 20, height: 20 }); // Give some basic dimensions
        });

        // Add edges to the graph.
        this.data.links.forEach(link => {
            // Ensure source and target are IDs
            const sourceId = link.source.id || link.source;
            const targetId = link.target.id || link.target;
            g.setEdge(sourceId, targetId);
        });

        // Run the layout algorithm
        dagre.layout(g);

        // Apply the calculated positions with a transition
        this.nodeGroups.transition().duration(750)
            .attr('transform', d => {
                const nodeInfo = g.node(d.id);
                if (nodeInfo) {
                    d.x = nodeInfo.x; // Update data positions
                    d.y = nodeInfo.y;
                    return `translate(${nodeInfo.x}, ${nodeInfo.y})`;
                } 
                return `translate(${d.x || 0}, ${d.y || 0})`; // Fallback
            });

        // Update link positions after transition (or immediately)
        // Using a delay might look smoother if nodes transition
        setTimeout(() => {
             this.links
                 .attr('x1', d => d.source.x)
                 .attr('y1', d => d.source.y)
                 .attr('x2', d => d.target.x)
                 .attr('y2', d => d.target.y);
        }, 750);
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
        
        title.textContent = `${node.label || node.id} (${node.id})`;
        
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

    /** Toggle fullscreen mode for the graph container */
    toggleFullscreen() {
        // Target the SVG wrapper directly for fullscreen
        const graphWrapper = document.querySelector('#dependencyDiagram .dependency-graph-svg-wrapper');
        if (!graphWrapper) return;

        if (!document.fullscreenElement) {
            // Enter fullscreen
            if (graphWrapper.requestFullscreen) {
                graphWrapper.requestFullscreen();
            } else if (graphWrapper.mozRequestFullScreen) { /* Firefox */
                graphWrapper.mozRequestFullScreen();
            } else if (graphWrapper.webkitRequestFullscreen) { /* Chrome, Safari & Opera */
                graphWrapper.webkitRequestFullscreen();
            } else if (graphWrapper.msRequestFullscreen) { /* IE/Edge */
                graphWrapper.msRequestFullscreen();
            }
            if(this.fullscreenButton) this.fullscreenButton.innerHTML = '<i class="bi bi-fullscreen-exit"></i>'; // Change icon

        } else {
            // Exit fullscreen
            if (document.exitFullscreen) {
                document.exitFullscreen();
            } else if (document.mozCancelFullScreen) { /* Firefox */
                document.mozCancelFullScreen();
            } else if (document.webkitExitFullscreen) { /* Chrome, Safari and Opera */
                document.webkitExitFullscreen();
            } else if (document.msExitFullscreen) { /* IE/Edge */
                document.msExitFullscreen();
            }
             if(this.fullscreenButton) this.fullscreenButton.innerHTML = '<i class="bi bi-arrows-fullscreen"></i>'; // Change icon back
        }
    }

    /** Populate the group filter dropdown based on node data */
    populateGroupFilter() {
        if (!this.groupSelect || !this.data?.nodes) return;

        // Clear existing options except 'All Groups'
        while (this.groupSelect.options.length > 1) {
            this.groupSelect.remove(1);
        }

        // Get unique, sorted groups from the enhanced node data
        const groupsInData = [...new Set(this.data.nodes.map(n => n.group).filter(g => g))].sort();
        groupsInData.forEach(group => {
            const option = document.createElement('option');
            option.value = group;
            option.text = group; // Use the full section name now
            this.groupSelect.appendChild(option);
        });
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
        // console.log('[DependencyGraph] Already initialized.');
        return;
    }

    // Assume D3 is loaded globally via index.html
    if (typeof d3 === 'undefined') {
        console.error('D3.js not found. Ensure it is included in index.html.');
        const container = document.querySelector('#dependencyDiagram .section-content');
        if (container) container.innerHTML = '<div class="alert alert-danger">Error: D3.js library not loaded.</div>';
        return;
    }
    
    // Proceed with initialization now that D3 is assumed available
    initializeGraphInstanceAndUI(); 
}

/**
 * Creates the graph instance, loads data, creates UI elements, and renders.
 */
function initializeGraphInstanceAndUI() {
    console.log('[DependencyGraph] Initializing graph instance and UI...');
    const graphContainer = document.querySelector('#dependencyDiagram .section-content .dependency-graph-container');
    const controlsContainer = document.querySelector('#dependencyDiagram .dependency-graph-controls-wrapper'); // Separate container for controls
    const infoPanelContainer = document.querySelector('#dependencyDiagram .dependency-graph-info-wrapper'); // Separate container for info

    if (!graphContainer || !controlsContainer || !infoPanelContainer) {
        console.warn('[DependencyGraph] Required containers not found. Initialization deferred.');
        return; 
    }

    // Create the graph instance
    teuiDependencyGraphInstance = new window.TEUI.DependencyGraph(); 
    
    // Call initialize which gets data
    if (teuiDependencyGraphInstance.initialize()) { // initialize now returns true on success
        // If data loaded successfully, THEN create UI and render
        teuiDependencyGraphInstance.createInfoPanel(infoPanelContainer);
        teuiDependencyGraphInstance.createFilterControls(controlsContainer); // Creates structure
        teuiDependencyGraphInstance.populateGroupFilter(); // Populate dropdown NOW
        teuiDependencyGraphInstance.setupSvg(); // Setup SVG container
        if (teuiDependencyGraphInstance.svg) {
            // Attempt Dagre layout first, then render
            if (typeof dagre !== 'undefined') {
                teuiDependencyGraphInstance.applyDagreLayout(); 
                // Update button state after applying layout
                if(teuiDependencyGraphInstance.dagreButton) teuiDependencyGraphInstance.dagreButton.classList.add('active');
                if(teuiDependencyGraphInstance.forceButton) teuiDependencyGraphInstance.forceButton.classList.remove('active');
                console.log('[DependencyGraph] Applied Dagre layout on init.');
                // Rendering happens implicitly via applyDagreLayout/ticked
                // Or explicitly call render if needed to ensure elements exist
                teuiDependencyGraphInstance.render(); 
            } else {
                // Fallback to force layout if Dagre not available
                console.warn('[DependencyGraph] Dagre not found on init, using force layout.');
                teuiDependencyGraphInstance.render(); 
            }
            teuiDependencyGraphInstance.setupEvents(); 
        } else {
            console.error('[DependencyGraph] SVG setup failed after data load.');
            teuiDependencyGraphInstance.showErrorMessage('Graph rendering failed (SVG setup).');
        }
    } else {
         console.error('[DependencyGraph] Initialization failed (data loading).');
         // Error message is shown within initialize()
    }
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