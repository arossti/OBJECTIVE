// sections/4011-Section16.js
// Sankey Diagram Visualization Section

window.TEUI = window.TEUI || {};
window.TEUI.SectionModules = window.TEUI.SectionModules || {};

// Initialize section-specific namespace with better defaults
window.TEUI.sect16 = {
    sankeyInstance: null, // Will hold the main Sankey instance
    fullscreenSankeyInstance: null, // Will hold the fullscreen Sankey instance
    defaultNodeWidth: 20,
    nodeWidthMultiplier: 1,
    nodePadding: 15,
    showEmissions: false,
    initialized: false, // Flag for idempotent initialization
    isActive: false
};

window.TEUI.SectionModules.sect16 = (function() {
    "use strict";

    // --- Ported from SANKEY3035.html --- 
    const NodeReferenceHandler = {
        convertToIndices(links, nodes) {
            return links.map(link => ({
                source: typeof link.source === 'object' ? nodes.indexOf(link.source) : link.source,
                target: typeof link.target === 'object' ? nodes.indexOf(link.target) : link.target,
                value: link.value,
                isEmissions: link.isEmissions
            }));
        },
        convertToObjects(links, nodes) {
            return links.map(link => ({
                source: typeof link.source === 'number' ? nodes[link.source] : link.source,
                target: typeof link.target === 'number' ? nodes[link.target] : link.target,
                value: link.value,
                isEmissions: link.isEmissions
            }));
        },
        validateNodeReferences(links, nodes) {
            return links.every(link => {
                const sourceValid = typeof link.source === 'number' ?
                    (link.source >= 0 && link.source < nodes.length) :
                    nodes.includes(link.source);
                const targetValid = typeof link.target === 'number' ?
                    (link.target >= 0 && link.target < nodes.length) :
                    nodes.includes(link.target);
                return sourceValid && targetValid;
            });
        }
    };

    const SANKEY_STRUCTURE_TEMPLATE = {
        nodes: [
            { name: "Building", color: "#4A96BA" },      // [0]
            { name: "G.1.2 Occupant Gains", color: "#FF8C00" }, // [1]
            { name: "G.2 Plug Light Equipment", color: "#A5D3ED" }, // [2]
            { name: "W.5.2 SHW Net Demand", color: "#BE343D" },  // [3]
            { name: "G.8.1 Windows N", color: "#F9DF4B" },     // [4]
            { name: "G.8.2 Windows E", color: "#F9DF4B" },     // [5]
            { name: "G.8.3 Windows S", color: "#F9DF4B" },     // [6]
            { name: "G.8.4 Windows W", color: "#F9DF4B" },     // [7]
            { name: "G.7.0 Doors", color: "#F9DF4B" },       // [8]
            { name: "M.2.1.S Sink (Air/Ground)", color: "#D4B26F" }, // [9]
            { name: "M.2.1.D Energy Input", color: "#A9D7F2" },// [10]
            { name: "Thermal Energy Demand", color: "#BFA586" },// [11]
            { name: "B.4 Roof", color: "#8FAFA6" },          // [12]
            { name: "B.5 Walls Above Grade", color: "#8FAFA6" },// [13]
            { name: "B.6 Floor Exposed", color: "#8FAFA6" },   // [14]
            { name: "B.7.0 Doors", color: "#8FAFA6" },       // [15]
            { name: "B.8.1 Windows N", color: "#F9DF4B" },   // [16]
            { name: "B.8.2 Windows E", color: "#F9DF4B" },   // [17]
            { name: "B.8.3 Windows S", color: "#F9DF4B" },   // [18]
            { name: "B.8.4 Windows W", color: "#F9DF4B" },   // [19]
            { name: "B.9 Walls Below Grade", color: "#8FAFA6" },// [20] // i_94, for future cooling mode, value might be negative from K column
            { name: "B.10 Floor Slab", color: "#8FAFA6" },     // [21] // i_95, for future cooling mode, value might be negative from K column
            { name: "B.12 TB Penalty", color: "#8FAFA6" },     // [22]
            { name: "B.18.3 Air Leakage", color: "#A4D3ED" },  // [23]
            { name: "V.2.3 Unrecovered Ventilation", color: "#A5D3ED" },// [24]
            { name: "W.2.W SHW Wasted", color: "#BE343D" },    // [25] 
            { name: "G.5 Unusable Gains", color: "#FFA500" },  // [26]
            { name: "GasExhaust", color: "#BE343D", hidden: true }, // [27]
            { name: "Total Envelope Losses", color: "#8FAFA6" },// [28]
            { name: "E1 Scope 1 Emissions", color: "#808080" },// [29]
            { name: "E2 Scope 2 Emissions", color: "#808080" },// [30]
            { name: "B.8.5 Skylights", color: "#F9DF4B" },    // [31]
            { name: "G.8.5 Skylights", color: "#F9DF4B" }     // [32]
        ],
        links: [
            { source: 1, target: 0, value: 0.0001, id: "OccupantGains" },
            { source: 2, target: 0, value: 0.0001, id: "EquipmentGains" },
            { source: 3, target: 0, value: 0.0001, id: "SHWNetDemand" },
            { source: 4, target: 0, value: 0.0001, id: "WinNorthGains" },
            { source: 5, target: 0, value: 0.0001, id: "WinEastGains" },
            { source: 6, target: 0, value: 0.0001, id: "WinSouthGains" },
            { source: 7, target: 0, value: 0.0001, id: "WinWestGains" },
            { source: 8, target: 0, value: 0.0001, id: "DoorGains" },
            { source: 32, target: 0, value: 0.0001, id: "SkylightGains" },
            { source: 9, target: 11, value: 0.0001, id: "HeatPumpSourceToTED" },
            { source: 10, target: 11, value: 0.0001, id: "HeatPumpElecToTED" },
            { source: 11, target: 0, value: 0.0001, id: "TEDToBuilding" },
            { source: 28, target: 12, value: 0.0001, id: "TELToRoof" },
            { source: 28, target: 13, value: 0.0001, id: "TELToWallAG" },
            { source: 28, target: 14, value: 0.0001, id: "TELToFloorExp" },
            { source: 28, target: 15, value: 0.0001, id: "TELToDoor" },
            { source: 28, target: 16, value: 0.0001, id: "TELToWinN" },
            { source: 28, target: 17, value: 0.0001, id: "TELToWinE" },
            { source: 28, target: 18, value: 0.0001, id: "TELToWinS" },
            { source: 28, target: 19, value: 0.0001, id: "TELToWinW" },
            { source: 28, target: 31, value: 0.0001, id: "TELToSkylight" },
            { source: 28, target: 20, value: 0.0001, id: "TELToWallBG" },
            { source: 28, target: 21, value: 0.0001, id: "TELToSlab" },
            { source: 28, target: 22, value: 0.0001, id: "TELToTB" },
            { source: 28, target: 23, value: 0.0001, id: "TELToAirLeak" },
            { source: 0, target: 24, value: 0.0001, id: "BuildingToVentLoss" },
            { source: 0, target: 25, value: 0.0001, id: "BuildingToSHWWaste" },
            { source: 0, target: 26, value: 0.0001, id: "BuildingToUnusableGains" },
            { source: 0, target: 27, value: 0.0001, id: "BuildingToGasExhaust" }, 
            { source: 0, target: 28, value: 0.0001, id: "BuildingToTEL" },
            { source: 11, target: 27, value: 0.0001, id: "TEDToGasExhaust" },    
            { source: 3, target: 27, value: 0.0001, id: "SHWToGasExhaust" }      
        ]
    };

    class TEUI_SankeyDiagram {
        constructor(options) {
            this.containerId = options.containerId;
            this.width = options.width || 1600;
            this.height = options.height || 500;
            this.svg = null;
            this.tooltip = null;
            this.sankey = null;
            this.nodeWidth = options.nodeWidth || 20;
            this.nodePadding = options.nodePadding || 10;
            this.showEmissions = options.showEmissions || false;
            this.nodeGroup = null;
            this.linkGroup = null;
            this.labelGroup = null;
            this._cleanDataInput = null;
            this.widthMultiplier = 1;
            this.isFullscreen = options.isFullscreen || false;
        }

        init() {
            try {
                // Clear any existing content
                const containerEl = document.getElementById(this.containerId);
                if (!containerEl) {
                    console.error("TEUI_SankeyDiagram Error: Container element not found", this.containerId);
                    return false;
                }
                
                // Set up D3 elements
                this.svg = d3.select(`#${this.containerId}`);
                
                // Make sure tooltip exists and is attached to body
                let tooltipEl = document.getElementById('sankeySection16Tooltip');
                if (!tooltipEl) {
                    tooltipEl = document.createElement('div');
                    tooltipEl.id = 'sankeySection16Tooltip';
                    document.body.appendChild(tooltipEl);
                }
                this.tooltip = d3.select('#sankeySection16Tooltip');
                
                if (!this.svg) {
                    console.error("TEUI_SankeyDiagram Error: SVG element not initialized");
                    return false;
                }
                
                // Log for debugging
                console.warn("S16 SANKEY LOG: SVG and tooltip initialized");
                console.warn("S16 SANKEY LOG: SVG dimensions", this.width, this.height);
                
                // Define margins for the SVG
                this.margin = {
                    top: 20,
                    right: 30,
                    bottom: 20,
                    left: 30
                };
                
                // Set SVG dimensions
                this.svg.attr("width", this.width)
                    .attr("height", this.height);
                
                // Create main group with margin offset
                const g = this.svg.append("g")
                    .attr("transform", `translate(${this.margin.left},${this.margin.top})`);
                
                // Create layers for different parts of the diagram
                this.linkGroup = g.append("g").attr("class", "links");
                this.nodeGroup = g.append("g").attr("class", "nodes");
                this.labelGroup = g.append("g").attr("class", "labels");
                
                // Initialize D3 Sankey layout
                this.sankey = d3.sankey()
                    .nodeWidth(this.nodeWidth)
                    .nodePadding(this.nodePadding)
                    .extent([
                        [0, 0],
                        [this.width - this.margin.left - this.margin.right, this.height - this.margin.top - this.margin.bottom]
                    ]);
                
                // Define element resize observer
                if (typeof ResizeObserver !== 'undefined') {
                    const ro = new ResizeObserver(entries => {
                        if (entries.length > 0 && entries[0].target === containerEl) {
                            const { width, height } = entries[0].contentRect;
                            if (width > 0 && height > 0) {
                                this.resize(width, height);
                            }
                        }
                    });
                    ro.observe(containerEl);
                }
                
                return true;
            } catch (error) {
                console.error("TEUI_SankeyDiagram Error: Initialization failed", error);
                return false;
            }
        }

        render(freshSankeyData, isInitialLoad = false) {
            if (!freshSankeyData || !freshSankeyData.nodes || !freshSankeyData.links) {
                console.error("TEUI_SankeyDiagram Error: Invalid data structure for rendering", freshSankeyData);
                return;
            }
            
            console.warn("S16 SANKEY LOG: Rendering with data:", {
                nodes: freshSankeyData.nodes.length,
                links: freshSankeyData.links.length,
                widthMultiplier: this.widthMultiplier
            });
            
            // Store a deep copy of the fresh input data
            this._cleanDataInput = JSON.parse(JSON.stringify(freshSankeyData));
            
            // Create new objects for D3 to modify (prevents issues with object references)
            const d3Data = {
                nodes: JSON.parse(JSON.stringify(freshSankeyData.nodes)),
                links: JSON.parse(JSON.stringify(freshSankeyData.links))
            };
            
            // Apply node width to the sankey layout based on multiplier
            if (this.widthMultiplier) {
                // Set the base node width (multiplied by slider value)
                this.sankey.nodeWidth(this.nodeWidth * this.widthMultiplier);
            }
            
            // Compute the sankey diagram: assign coordinates to nodes, calculate link paths
            this.sankey(d3Data);
            
            // Ensure we have height & width for calculations
            const innerWidth = this.width - this.margin.left - this.margin.right;
            const innerHeight = this.height - this.margin.top - this.margin.bottom;
            
            // Render all the elements
            this.renderNodes(d3Data.nodes, isInitialLoad);
            this.renderLinks(d3Data.links, isInitialLoad);
            this.renderLabels(d3Data.nodes, isInitialLoad);
            
            console.log("Section 16: Sankey render call complete.");
        }

        renderLinks(links, isInitialLoad) {
            console.warn("S16 SANKEY LOG: Rendering links, count:", links.length);
            
            // Debug the link data
            if (links.length > 0) {
                console.warn("S16 SANKEY LOG: Sample link data:", {
                    source: links[0].source.name,
                    target: links[0].target.name,
                    value: links[0].value,
                    width: links[0].width
                });
            }
            
            // Generate link paths
            const linkGenerator = d3.sankeyLinkHorizontal();
            
            // Select and bind links
            const link = this.linkGroup.selectAll(".link")
                .data(links, d => `${d.source.index}-${d.target.index}`);
            
            // Remove old links
            link.exit().remove();
            
            // Create new links
            const linkEnter = link.enter().append("path")
                .attr("class", "link")
                .attr("d", linkGenerator)
                .style("stroke", d => this.getLinkColor(d))
                .style("stroke-width", d => Math.max(1, d.width || 1))
                .style("stroke-opacity", 0)
                .on("mouseover", (event, d) => {
                    d3.select(event.target).style("stroke-opacity", 0.9);
                    this.showLinkTooltip(event, d);
                })
                .on("mouseout", (event) => {
                    d3.select(event.target).style("stroke-opacity", 0.6);
                    this.hideTooltip();
                });
            
            // Update all links (both new and existing)
            const linkUpdate = link.merge(linkEnter)
                .attr("d", linkGenerator)
                .style("stroke-width", d => Math.max(1, d.width || 1));
            
            // Animate links on initial load
            if (isInitialLoad) {
                linkEnter
                    .style("stroke-opacity", 0)
                    .transition()
                    .duration(500)
                    .delay(d => (d.source.index + d.target.index) * 10)
                    .style("stroke-opacity", 0.6);
            } else {
                linkUpdate
                    .style("stroke-opacity", 0.6);
            }
            
            return linkUpdate;
        }

        renderNodes(nodes, isInitialLoad) {
            console.warn("S16 SANKEY LOG: Rendering nodes, count:", nodes.length);
            
            // Debug node data
            if (nodes.length > 0) {
                console.warn("S16 SANKEY LOG: Sample node data:", {
                    name: nodes[0].name,
                    x0: nodes[0].x0,
                    y0: nodes[0].y0,
                    width: nodes[0].x1 - nodes[0].x0,
                    height: nodes[0].y1 - nodes[0].y0
                });
            }
            
            // Select all existing nodes and bind data
            const node = this.nodeGroup.selectAll(".node")
                .data(nodes, d => d.name);
            
            // Remove any old nodes that are no longer in the data
            node.exit().remove();
            
            // Create new nodes
            const nodeEnter = node.enter().append("rect")
                .attr("class", "node s16-sankey-node")
                .style("fill", d => d.color || "#999")
                .style("stroke", d => d3.color(d.color || "#999").darker(0.5))
                .style("fill-opacity", 1)
                .on("mouseover", (event, d) => {
                    d3.select(event.target).style("fill-opacity", 0.8);
                    this.showNodeTooltip(event, d);
                })
                .on("mouseout", (event) => {
                    d3.select(event.target).style("fill-opacity", 1);
                    this.hideTooltip();
                });
            
            // Update all nodes (both new and existing)
            const nodeUpdate = node.merge(nodeEnter)
                .attr("x", d => d.x0)
                .attr("y", d => d.y0)
                .attr("width", d => (d.x1 - d.x0) * this.widthMultiplier)
                .attr("height", d => Math.max(1, d.y1 - d.y0));
            
            // Animate nodes on initial load
            if (isInitialLoad) {
                nodeEnter
                    .style("opacity", 0)
                    .transition()
                    .duration(500)
                    .delay(d => d.index * 20)
                    .style("opacity", 1);
            }
            
            return nodeUpdate;
        }

        renderLabels(nodes, isInitialLoad) {
            console.warn("S16 SANKEY LOG: Rendering labels, count:", nodes.length);
            
            // Select and bind labels
            const text = this.labelGroup.selectAll(".node-label")
                .data(nodes, d => d.name);
            
            // Remove old labels
            text.exit().remove();
            
            // Create new labels
            const textEnter = text.enter().append("text")
                .attr("class", "node-label")
                .attr("text-anchor", d => d.x0 < this.width / 2 ? "start" : "end")
                .attr("x", d => d.x0 < this.width / 2 ? d.x1 + 6 : d.x0 - 6)
                .attr("y", d => (d.y1 + d.y0) / 2)
                .attr("dy", "0.35em")
                .text(d => d.name);
            
            // Update all labels (both new and existing)
            const textUpdate = text.merge(textEnter)
                .attr("text-anchor", d => d.x0 < this.width / 2 ? "start" : "end")
                .attr("x", d => d.x0 < this.width / 2 ? d.x1 + 6 : d.x0 - 6)
                .attr("y", d => (d.y1 + d.y0) / 2);
            
            // Animate labels on initial load
            if (isInitialLoad) {
                textEnter
                    .style("opacity", 0)
                    .transition()
                    .duration(500)
                    .delay(d => d.index * 20)
                    .style("opacity", 1);
            }
            
            return textUpdate;
        }

        showNodeTooltip(event, d) {
            // Create a simple formatter function as fallback
            const formatNumber = value => {
                // Check if window.TEUI.formatNumber exists
                if (window.TEUI && typeof window.TEUI.formatNumber === 'function') {
                    return window.TEUI.formatNumber(value, 'number-2dp');
                }
                else {
                    return parseFloat(value).toLocaleString(undefined, {
                        minimumFractionDigits: 2,
                        maximumFractionDigits: 2
                    });
                }
            };
            
            // Create tooltip content
            const nodeName = d.name;
            const incoming = d.targetLinks || [];
            const outgoing = d.sourceLinks || [];
            const totalValue = d.value || incoming.reduce((sum, link) => sum + link.value, 0);
            
            let content = `<div class="tooltip-title">${nodeName}</div>`;
            content += `<div>Total Flow: ${formatNumber(totalValue)} kWh</div>`;
            
            if (incoming.length > 0) {
                content += `<div style="margin-top:8px;"><strong>Incoming:</strong></div>`;
                incoming.forEach(link => {
                    const sourceName = typeof link.source === 'object' ? link.source.name : 'Unknown';
                    content += `<div>From ${sourceName}: ${formatNumber(link.value)} kWh</div>`;
                });
            }
            
            if (outgoing.length > 0) {
                content += `<div style="margin-top:8px;"><strong>Outgoing:</strong></div>`;
                outgoing.forEach(link => {
                    const targetName = typeof link.target === 'object' ? link.target.name : 'Unknown';
                    content += `<div>To ${targetName}: ${formatNumber(link.value)} kWh</div>`;
                });
            }
            
            this.showTooltip(content, event);
        }

        showLinkTooltip(event, d) {
            // Create a simple formatter function as fallback
            const formatNumber = value => {
                // Check if window.TEUI.formatNumber exists
                if (window.TEUI && typeof window.TEUI.formatNumber === 'function') {
                    return window.TEUI.formatNumber(value, 'number-2dp');
                }
                // If StateManager exists but no getNumberFormat
                else if (window.TEUI && window.TEUI.StateManager) {
                    return parseFloat(value).toLocaleString(undefined, {
                        minimumFractionDigits: 2,
                        maximumFractionDigits: 2
                    });
                }
                // Fallback to basic formatting
                return parseFloat(value).toLocaleString(undefined, {
                    minimumFractionDigits: 2,
                    maximumFractionDigits: 2
                });
            };
            
            // Determine source and target names
            const sourceName = typeof d.source === 'object' ? d.source.name : 'Unknown';
            const targetName = typeof d.target === 'object' ? d.target.name : 'Unknown';
            
            // Create tooltip content
            const value = d.value;
            const formattedValue = formatNumber(value);
            
            const content = `
                <div class="tooltip-title">${sourceName} → ${targetName}</div>
                <div>Energy Flow: ${formattedValue} kWh</div>
            `;
            
            this.showTooltip(content, event);
        }

        createNodeTooltip(d) {
            const originalNodeName = d.name;
            let html = `<div class="tooltip-title">${originalNodeName}</div>`;
            let totalNodeValue = d.value;
            const incoming = d.targetLinks || [];
            const outgoing = d.sourceLinks || [];
            if (originalNodeName.includes("Emissions")) {
                const totalEmissions = incoming.reduce((sum, link) => sum + link.value, 0);
                const mtValue = (totalEmissions / 1000000);
                const formattedMTValue = typeof window.TEUI !== 'undefined' && window.TEUI.formatNumber ?
                    window.TEUI.formatNumber(mtValue, 'number-2dp') : mtValue.toFixed(2);
                const scope = originalNodeName.includes("1") ? "Direct emissions from gas combustion" : "Indirect emissions from electricity use";
                html += `<div class="tooltip-value">Total: ${formattedMTValue} MT CO2e<br><small>${scope}</small></div>`;
            } else {
                const formattedNodeValue = typeof window.TEUI !== 'undefined' && window.TEUI.formatNumber ?
                    window.TEUI.formatNumber(totalNodeValue, 'number-2dp') : totalNodeValue.toFixed(2);
                html += `<div class="tooltip-value">Total Value: ${formattedNodeValue} kWh</div>`;
            }
            if (incoming.length > 0) html += this.buildFlowSectionTooltip("Incoming", incoming, true, true);
            if (outgoing.length > 0) html += this.buildFlowSectionTooltip("Outgoing", outgoing, false, true);
            return html;
        }

        createLinkTooltip(d) {
            const sourceName = d.source.name;
            const targetName = d.target.name;
            const value = d.value;
            const isEmissionsLink = d.isEmissions || (targetName && targetName.includes("Emissions"));
            const formattedValue = typeof window.TEUI !== 'undefined' && window.TEUI.formatNumber ?
                window.TEUI.formatNumber(value, 'number-2dp') : value.toFixed(2);
            return `<div class="tooltip-title">Flow Details</div><div class="tooltip-flow"><span>From: ${sourceName}</span></div><div class="tooltip-flow"><span>To: ${targetName}</span></div><div class="tooltip-flow"><span>Value: ${isEmissionsLink ? `${formattedValue} grams CO2e` : `${formattedValue} kWh`}</span></div>`;
        }

        buildFlowSectionTooltip(title, flows, isIncoming, isD3Node = false) {
            let html = `<div style="margin-top: 8px;"><strong>${title}:</strong></div>`;
            flows.forEach(flow => {
                const nodeName = isIncoming ?
                    (isD3Node ? flow.source.name : (typeof flow.source === 'number' ? this._cleanDataInput.nodes[flow.source].name : flow.source.name)) :
                    (isD3Node ? flow.target.name : (typeof flow.target === 'number' ? this._cleanDataInput.nodes[flow.target].name : flow.target.name));
                const value = flow.value;
                const targetNodeForEmissionCheck = isD3Node ? flow.target.name : (typeof flow.target === 'number' ? this._cleanDataInput.nodes[flow.target].name : flow.target.name);
                const isEmissionsLink = flow.isEmissions || (targetNodeForEmissionCheck && targetNodeForEmissionCheck.includes("Emissions"));
                const formattedValue = typeof window.TEUI !== 'undefined' && window.TEUI.formatNumber ? window.TEUI.formatNumber(value, 'number-2dp') : value.toFixed(2);
                const formattedKgValue = typeof window.TEUI !== 'undefined' && window.TEUI.formatNumber ? window.TEUI.formatNumber(value / 1000, 'number-2dp') : (value / 1000).toFixed(2);
                html += `<div class="tooltip-flow"><span style="width: 160px;">${nodeName}</span><span>${isEmissionsLink ? `${formattedKgValue} kg CO2e` : `${formattedValue} kWh`}</span></div>`;
            });
            return html;
        }

        formatNodeLabel(node) {
            if (node.name.includes("Emissions")) {
                const totalEmissions = node.targetLinks?.reduce((sum, link) => sum + link.value, 0) || 0;
                const mtValue = (totalEmissions / 1000000);
                const formattedMTValue = typeof window.TEUI !== 'undefined' && window.TEUI.formatNumber ?
                    window.TEUI.formatNumber(mtValue, 'number-2dp') : mtValue.toFixed(2);
                return `${node.name} (${formattedMTValue} MT)`;
            }
            return node.name;
        }

        showTooltip(content, event) {
            if (!this.tooltip || this.tooltip.empty()) {
                console.error("TEUI_SankeyDiagram Error: Tooltip element not found");
                return;
            }
            
            // First, make sure tooltip is part of document body
            if (this.tooltip.node().parentNode !== document.body) {
                d3.select(this.tooltip.node()).remove();
                this.tooltip = d3.select("body")
                    .append("div")
                    .attr("id", "sankeySection16Tooltip");
            }
            
            // Get mouse coordinates relative to viewport
            const mouseX = event.clientX || event.pageX - window.scrollX;
            const mouseY = event.clientY || event.pageY - window.scrollY;
            
            // Debug log
            console.warn("S16 SANKEY LOG: Showing tooltip at", mouseX, mouseY, "with content:", content.substring(0, 50) + "...");

            // Set tooltip content and make it visible
            this.tooltip
                .html(content)
                .style("display", "block")
                .style("left", (mouseX + 15) + "px")
                .style("top", (mouseY + 15) + "px")
                .style("opacity", 0)
                .style("z-index", "10000")
                .transition()
                .duration(200)
                .style("opacity", 1);
            
            // Get tooltip dimensions
            const tooltipWidth = this.tooltip.node().offsetWidth;
            const tooltipHeight = this.tooltip.node().offsetHeight;
            
            // Check if tooltip goes off screen and adjust if needed
            const viewportWidth = window.innerWidth || document.documentElement.clientWidth;
            const viewportHeight = window.innerHeight || document.documentElement.clientHeight;
            
            let left = mouseX + 15;
            let top = mouseY + 15;
            
            if (left + tooltipWidth > viewportWidth - 10) {
                left = mouseX - tooltipWidth - 15;
            }
            
            if (top + tooltipHeight > viewportHeight - 10) {
                top = mouseY - tooltipHeight - 15;
            }
            
            // Update position if needed
            this.tooltip
                .style("left", left + "px")
                .style("top", top + "px");
        }

        hideTooltip() {
            if (this.tooltip && !this.tooltip.empty()) {
                this.tooltip
                    .transition()
                    .duration(200)
                    .style("opacity", 0)
                    .on("end", function() {
                        d3.select(this).style("display", "none");
                    });
            }
        }

        getLinkColor(d) {
            if (d.target.name === "GasExhaust") return "#BE343D";
            if (d.source.name === "Building" || d.target.name === "Building") return d.source.name === "Building" ? d3.color(d.target.color).brighter(0.2) : d3.color(d.source.color);
            return d3.interpolateRgb(d.source.color, d.target.color)(0.5);
        }

        updateEmissionsFlows(dataObjectToModify) {
            const scope1NodeIndex = dataObjectToModify.nodes.findIndex(n => n.name === "E1 Scope 1 Emissions");
            const scope2NodeIndex = dataObjectToModify.nodes.findIndex(n => n.name === "E2 Scope 2 Emissions");

            if (scope1NodeIndex === -1 || scope2NodeIndex === -1) {
                console.warn("Section 16: Emission sink nodes (E1/E2) not found in Sankey data.");
                return;
            }

            dataObjectToModify.links = dataObjectToModify.links.filter(link => {
                // Check target based on original node reference or index if already processed
                let targetNodeToCheck = typeof link.target === 'object' ? link.target : dataObjectToModify.nodes[link.target];
                if (!targetNodeToCheck) return true; // Should not happen if data is consistent
                const targetIdx = dataObjectToModify.nodes.indexOf(targetNodeToCheck);
                return !(targetIdx === scope1NodeIndex || targetIdx === scope2NodeIndex);
            });

            if (this.showEmissions && window.TEUI && window.TEUI.StateManager && window.TEUI.StateManager.getValue) {
                const teuiState = window.TEUI.StateManager;
                const energyInputNodeIndex = dataObjectToModify.nodes.findIndex(n => n.name === "M.2.1.D Energy Input");
                if (energyInputNodeIndex === -1) {
                    console.warn("S16: 'M.2.1.D Energy Input' node not found for emissions linking.");
                    return;
                }
                const elecEmissionsKg = parseFloat(teuiState.getValue('k_27') || 0);
                if (elecEmissionsKg > 0) {
                    const elecEmissionsGrams = elecEmissionsKg * 1000;
                    if (elecEmissionsGrams > 0.0001) {
                        dataObjectToModify.links.push({
                            source: energyInputNodeIndex, 
                            target: scope2NodeIndex,
                            value: elecEmissionsGrams,
                            isEmissions: true
                        });
                    }
                }
                const gasEmissionsKg = parseFloat(teuiState.getValue('k_28') || 0);
                if (gasEmissionsKg > 0) {
                    const gasEmissionsGrams = gasEmissionsKg * 1000;
                    if (gasEmissionsGrams > 0.0001) {
                        dataObjectToModify.links.push({
                            source: energyInputNodeIndex, 
                            target: scope1NodeIndex,
                            value: gasEmissionsGrams,
                            isEmissions: true
                        });
                    }
                }
                const oilEmissionsKg = parseFloat(teuiState.getValue('k_30') || 0);
                if (oilEmissionsKg > 0) {
                    const oilEmissionsGrams = oilEmissionsKg * 1000;
                    if (oilEmissionsGrams > 0.0001) {
                        dataObjectToModify.links.push({
                            source: energyInputNodeIndex, 
                            target: scope1NodeIndex,
                            value: oilEmissionsGrams,
                            isEmissions: true
                        });
                    }
                }
            }
        }

        _getLinkValueByName(sourceName, targetName) {
            // This function now searches within this._cleanDataInput if it needs pre-D3 values,
            // or it can search within the D3 processed data if appropriate for its use case.
            // For now, assuming it's used by emissions calculation *before* D3 processing, so check dataForD3Processing if available.
            // However, the emissions calculation was simplified to not need this for energy values.
            // If other parts need it, they should operate on this._cleanDataInput.
            if (!this._cleanDataInput) return 0;
            const sourceNode = this._cleanDataInput.nodes.find(n => n.name === sourceName);
            const targetNode = this._cleanDataInput.nodes.find(n => n.name === targetName);
            if (!sourceNode || !targetNode) return 0;
            const sourceIdx = this._cleanDataInput.nodes.indexOf(sourceNode);
            const targetIdx = this._cleanDataInput.nodes.indexOf(targetNode);
            const link = this._cleanDataInput.links.find(l => {
                const lSourceIdx = typeof l.source === 'number' ? l.source : this._cleanDataInput.nodes.indexOf(l.source);
                const lTargetIdx = typeof l.target === 'number' ? l.target : this._cleanDataInput.nodes.indexOf(l.target);
                return lSourceIdx === sourceIdx && lTargetIdx === targetIdx && !l.isEmissions;
            });
            return link ? link.value : 0;
        }

        resize(newWidth, newHeight) {
            console.warn("S16 SANKEY LOG: Resize called. New Width:", newWidth, "New Height:", newHeight);
            
            // Update dimensions
            if (newWidth && newHeight) {
                this.width = newWidth;
                this.height = newHeight;
            }
            
            // Calculate inner dimensions (accounting for margins)
            const innerWidth = this.width - this.margin.left - this.margin.right;
            const innerHeight = this.height - this.margin.top - this.margin.bottom;
            
            console.warn("S16 SANKEY LOG: Resize called. New Width:", newWidth, "New Height:", newHeight, "Inner W/H:", innerWidth, innerHeight);
            
            // Update SVG dimensions
            this.svg.attr("width", this.width)
                    .attr("height", this.height);
            
            // Update the sankey layout extent
            this.sankey.extent([
                [0, 0],
                [innerWidth, innerHeight]
            ]);
            
            // Re-render with existing data if available
            if (this._cleanDataInput) {
                this.render(this._cleanDataInput, false);
            }
        }

        debugLinks(links) {
            if (!links || links.length === 0) {
                console.warn("S16 SANKEY DEBUG: No links to debug");
                return;
            }
            
            // Log some sample links with their values and paths
            console.warn("S16 SANKEY DEBUG: Examining D3 link rendering...");
            
            // Take at most 5 links to examine
            const samplesToExamine = Math.min(5, links.length);
            for (let i = 0; i < samplesToExamine; i++) {
                const link = links[i];
                
                console.warn(`S16 SANKEY DEBUG: Link ${i+1}/${samplesToExamine}:`, {
                    source: link.source.name,
                    target: link.target.name,
                    value: link.value,
                    width: link.width, // D3 sankey sets this during layout
                    y0: link.y0, // Source y-position
                    y1: link.y1, // Target y-position
                    path: d3.sankeyLinkHorizontal()(link) // The actual SVG path 
                });
            }
        }
    }

    // --- Private Variables (Section16 specific) ---
    let sankeyInstance = TEUI_SankeyDiagram; 

    // --- Section Structure & Layout ---
    function getFields() {
        return {};
    }

    function getDropdownOptions() {
        return {};
    }

    function getLayout() {
        return {
            rows: [
                {
                    id: "S16-PlaceholderRow", 
                    cells: [
                        {},
                        {},
                        { 
                            content: "",
                            colspan: 12
                        }
                    ]
                }
            ]
        };
    }

    function getFullscreenWidthValueText() {
        return document.querySelector('#s16FullscreenWidthToggle span');
    }

    function setupSection16DOM() {
        const targetArea = document.getElementById('section16ContentTarget');
        if (!targetArea) {
            console.error("Section 16 Critical Error: The target div #section16ContentTarget was not found in index.html. Cannot setup DOM.");
            return false;
        }
        
        // Clear the target area
        targetArea.innerHTML = '';
        
        // Create the controls container
        const controlsContainer = document.createElement('div');
        controlsContainer.id = 's16ControlsContainer';
        controlsContainer.style.cssText = 'padding: 10px; margin-bottom: 10px; border-bottom: 1px solid #eee; display: flex; align-items: center; gap: 10px;';
        
        // Create the activate button
        const activateBtn = document.createElement('button');
        activateBtn.id = 's16ActivateBtn';
        activateBtn.className = 'teui-button';
        activateBtn.innerHTML = '<i class="bi bi-arrow-clockwise"></i> Activate Sankey';
        controlsContainer.appendChild(activateBtn);
        
        // Create emissions toggle button (initially hidden)
        const emissionsBtn = document.createElement('button');
        emissionsBtn.id = 's16ToggleEmissionsBtn';
        emissionsBtn.className = 'teui-button';
        emissionsBtn.innerHTML = '<i class="bi bi-cloud"></i> Show Emissions';
        emissionsBtn.style.display = 'none';
        controlsContainer.appendChild(emissionsBtn);
        
        // Create spacing toggle button (initially hidden)
        const spacingBtn = document.createElement('button');
        spacingBtn.id = 's16ToggleSpacingBtn';
        spacingBtn.className = 'teui-button';
        spacingBtn.innerHTML = '<i class="bi bi-arrows-angle-contract"></i> Compress Nodes';
        spacingBtn.style.display = 'none';
        controlsContainer.appendChild(spacingBtn);
        
        // Create fullscreen button (initially hidden)
        const fullscreenBtn = document.createElement('button');
        fullscreenBtn.id = 's16FullscreenBtn';
        fullscreenBtn.className = 'teui-button';
        fullscreenBtn.innerHTML = '<i class="bi bi-arrows-fullscreen"></i> Fullscreen';
        fullscreenBtn.style.display = 'none';
        controlsContainer.appendChild(fullscreenBtn);
        
        // Create width multiplier slider container (initially hidden)
        const widthToggleContainer = document.createElement('div');
        widthToggleContainer.id = 's16WidthToggleContainer';
        widthToggleContainer.style.display = 'none';
        widthToggleContainer.innerHTML = `
            <label for="s16WidthMultiplierSlider">Width:</label>
            <input type="range" id="s16WidthMultiplierSlider" min="25" max="400" value="100" step="5">
            <span>100%</span>
        `;
        controlsContainer.appendChild(widthToggleContainer);
        
        // Add the controls to the target area
        targetArea.appendChild(controlsContainer);
        
        // Create the diagram wrapper div
        const diagramWrapper = document.createElement('div');
        diagramWrapper.id = 's16DiagramWrapper';
        diagramWrapper.style.cssText = 'width: 100%; height: 600px; position: relative; display: none;';
        
        // Create the SVG element for the Sankey diagram
        const svgElement = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
        svgElement.id = 'sankeySection16Svg';
        svgElement.style.cssText = 'width: 100%; height: 100%; display: block;';
        diagramWrapper.appendChild(svgElement);
        
        // Create loading placeholder
        const loadingPlaceholder = document.createElement('div');
        loadingPlaceholder.id = 's16LoadingPlaceholder';
        loadingPlaceholder.className = 'teui-loading-placeholder';
        loadingPlaceholder.innerHTML = '<p>Activate the Sankey diagram to visualize energy flows.</p>';
        loadingPlaceholder.style.cssText = 'padding: 20px; text-align: center; background: #f9f9f9; border-radius: 4px;';
        
        // Add diagram wrapper and loading placeholder to target area
        targetArea.appendChild(diagramWrapper);
        targetArea.appendChild(loadingPlaceholder);
        
        // Create the fullscreen container
        const fullscreenContainer = document.createElement('div');
        fullscreenContainer.id = 's16FullscreenContainer';
        fullscreenContainer.style.cssText = 'display: none;';
        
        // Create fullscreen controls
        const fullscreenControlsContainer = document.createElement('div');
        fullscreenControlsContainer.style.cssText = 'display: flex; justify-content: space-between; align-items: center; margin-bottom: 15px;';
        
        // Create fullscreen title
        const fullscreenTitle = document.createElement('h2');
        fullscreenTitle.textContent = 'Energy Flow Diagram (Sankey)';
        fullscreenTitle.style.cssText = 'margin: 0;';
        fullscreenControlsContainer.appendChild(fullscreenTitle);
        
        // Create fullscreen controls right side
        const fullscreenControlsRight = document.createElement('div');
        fullscreenControlsRight.style.cssText = 'display: flex; align-items: center; gap: 10px;';
        
        // Create fullscreen width slider
        const fullscreenWidthToggle = document.createElement('div');
        fullscreenWidthToggle.id = 's16FullscreenWidthToggle';
        fullscreenWidthToggle.style.cssText = 'display: flex; align-items: center; gap: 5px;';
        fullscreenWidthToggle.innerHTML = `
            <label for="s16FullscreenWidthSlider">Width:</label>
            <input type="range" id="s16FullscreenWidthSlider" min="25" max="400" value="100" step="5">
            <span>100%</span>
        `;
        fullscreenControlsRight.appendChild(fullscreenWidthToggle);
        
        // Create fullscreen close button
        const fullscreenCloseBtn = document.createElement('button');
        fullscreenCloseBtn.id = 's16FullscreenCloseBtn';
        fullscreenCloseBtn.className = 'teui-button';
        fullscreenCloseBtn.innerHTML = '<i class="bi bi-x-lg"></i> Close';
        fullscreenControlsRight.appendChild(fullscreenCloseBtn);
        
        fullscreenControlsContainer.appendChild(fullscreenControlsRight);
        fullscreenContainer.appendChild(fullscreenControlsContainer);
        
        // Create the fullscreen SVG
        const fullscreenSvg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
        fullscreenSvg.id = 'sankeySection16FullscreenSvg';
        fullscreenSvg.style.cssText = 'width: 100%; height: calc(100% - 50px); display: block;';
        fullscreenContainer.appendChild(fullscreenSvg);
        
        // Add the fullscreen container to the body
        document.body.appendChild(fullscreenContainer);
        
        // Make sure tooltip container exists
        if (!document.getElementById('sankeySection16Tooltip')) {
            const tooltipDiv = document.createElement('div');
            tooltipDiv.id = 'sankeySection16Tooltip';
            document.body.appendChild(tooltipDiv);
        }
        
        console.log("Section 16: DOM setup complete");
        return true;
    }

    function initializeEventHandlers() {
        // This function now assumes setupSection16DOM() has been called and elements exist.
        // The idempotency is handled by onSectionRendered.
        console.warn("S16 LOG: initializeEventHandlers CALLED.");
        
        const activateBtn = document.getElementById('s16ActivateBtn');
        console.warn("S16 LOG: #s16ActivateBtn in initializeEventHandlers (result of getElementById):", activateBtn);

        const emissionsBtn = document.getElementById('s16ToggleEmissionsBtn');
        const spacingBtn = document.getElementById('s16ToggleSpacingBtn');
        const widthSlider = document.getElementById('s16WidthMultiplierSlider');
        const widthToggleContainer = document.getElementById('s16WidthToggleContainer');
        const loadingPlaceholder = document.getElementById('s16LoadingPlaceholder');
        const fullscreenBtn = document.getElementById('s16FullscreenBtn');

        if (activateBtn) {
            activateBtn.addEventListener('click', function() {
                console.warn("S16 LOG: Activate button CLICKED.");
                // Simply call the activateSankey function
                activateSankey();
            });
        } else {
            console.warn("S16 LOG: Activate button NOT FOUND when trying to attach listener in initializeEventHandlers."); 
        }

        if (emissionsBtn) {
            emissionsBtn.addEventListener('click', function() {
                window.TEUI.sect16.showEmissions = !window.TEUI.sect16.showEmissions;
                this.textContent = window.TEUI.sect16.showEmissions ? 'Hide Emissions' : 'Show Emissions';
                if (window.TEUI.sect16.isActive) fetchDataAndRenderSankey(false);
            });
        }
        if (spacingBtn) {
            spacingBtn.addEventListener('click', function() {
                window.TEUI.sect16.nodePadding = (window.TEUI.sect16.nodePadding === 15) ? 2 : 15;
                this.textContent = (window.TEUI.sect16.nodePadding === 15) ? 'Compress Nodes' : 'Expand Nodes';
                if (window.TEUI.sect16.isActive) fetchDataAndRenderSankey(false);
            });
        }
        if (widthSlider) {
            const widthValueText = document.querySelector('#s16WidthToggleContainer span');
            
            widthSlider.addEventListener('input', function() {
                const value = parseFloat(this.value) / 100;
                if (widthValueText) {
                    widthValueText.textContent = `${Math.round(value * 100)}%`;
                }
                
                // Update the node width multiplier
                window.TEUI.sect16.nodeWidthMultiplier = value;
                
                // Apply to the active instance
                if (window.TEUI.sect16.sankeyInstance) {
                    window.TEUI.sect16.sankeyInstance.widthMultiplier = value;
                    
                    // Trigger re-render with the current data
                    if (window.TEUI.sect16.sankeyInstance._cleanDataInput) {
                        window.TEUI.sect16.sankeyInstance.render(
                            window.TEUI.sect16.sankeyInstance._cleanDataInput, 
                            false
                        );
                    }
                }
            });
        }
        
        // Add fullscreen functionality
        if (fullscreenBtn) {
            const fullscreenContainer = document.getElementById('s16FullscreenContainer');
            const fullscreenCloseBtn = document.getElementById('s16FullscreenCloseBtn');
            
            // Fullscreen Sankey instance
            window.TEUI.sect16.fullscreenSankeyInstance = null;
            
            fullscreenBtn.addEventListener('click', function() {
                if (!fullscreenContainer) return;
                
                fullscreenContainer.style.display = 'block';
                document.body.style.overflow = 'hidden'; // Prevent scrolling behind fullscreen
                
                const fullscreenSvg = document.getElementById('sankeySection16FullscreenSvg');
                if (!fullscreenSvg) return;
                
                // Create a separate Sankey instance for fullscreen
                if (!window.TEUI.sect16.fullscreenSankeyInstance) {
                    window.TEUI.sect16.fullscreenSankeyInstance = new TEUI_SankeyDiagram({
                        containerId: 'sankeySection16FullscreenSvg',
                        width: fullscreenContainer.clientWidth - 40, // account for padding
                        height: fullscreenContainer.clientHeight - 100, // account for controls and padding
                        nodeWidth: window.TEUI.sect16.defaultNodeWidth,
                        nodePadding: window.TEUI.sect16.nodePadding,
                        showEmissions: window.TEUI.sect16.showEmissions,
                        isFullscreen: true
                    });
                    
                    window.TEUI.sect16.fullscreenSankeyInstance.widthMultiplier = 
                        window.TEUI.sect16.nodeWidthMultiplier;
                        
                    window.TEUI.sect16.fullscreenSankeyInstance.init();
                }
                
                // Get current data from main instance if available
                if (window.TEUI.sect16.sankeyInstance && 
                    window.TEUI.sect16.sankeyInstance._cleanDataInput) {
                    
                    // Render with the same data as the main view
                    window.TEUI.sect16.fullscreenSankeyInstance.render(
                        window.TEUI.sect16.sankeyInstance._cleanDataInput, 
                        true
                    );
                } else {
                    // Fallback to fetch new data
                    const sankeyData = buildSankeyDataFromStateManager();
                    window.TEUI.sect16.fullscreenSankeyInstance.render(sankeyData, true);
                }
                
                // Create an update timer to handle window resize
                let resizeTimer;
                const handleResize = function() {
                    if (window.TEUI.sect16.fullscreenSankeyInstance) {
                        window.TEUI.sect16.fullscreenSankeyInstance.resize(
                            fullscreenContainer.clientWidth - 40,
                            fullscreenContainer.clientHeight - 100
                        );
                    }
                };
                
                // Handle window resize events
                window.addEventListener('resize', function() {
                    clearTimeout(resizeTimer);
                    resizeTimer = setTimeout(handleResize, 100);
                });
                
                // Add fullscreen width slider functionality
                const fullscreenWidthSlider = document.getElementById('s16FullscreenWidthSlider');
                if (fullscreenWidthSlider) {
                    const fullscreenWidthValueText = document.querySelector('#s16FullscreenWidthToggle span');
                    
                    // Set initial value
                    fullscreenWidthSlider.value = window.TEUI.sect16.nodeWidthMultiplier * 100;
                    if (fullscreenWidthValueText) {
                        fullscreenWidthValueText.textContent = `${Math.round(window.TEUI.sect16.nodeWidthMultiplier * 100)}%`;
                    }
                    
                    fullscreenWidthSlider.addEventListener('input', function() {
                        const value = parseFloat(this.value) / 100;
                        if (fullscreenWidthValueText) {
                            fullscreenWidthValueText.textContent = `${Math.round(value * 100)}%`;
                        }
                        
                        if (window.TEUI.sect16.fullscreenSankeyInstance) {
                            window.TEUI.sect16.fullscreenSankeyInstance.widthMultiplier = value;
                            
                            // Trigger re-render with current data
                            if (window.TEUI.sect16.fullscreenSankeyInstance._cleanDataInput) {
                                window.TEUI.sect16.fullscreenSankeyInstance.render(
                                    window.TEUI.sect16.fullscreenSankeyInstance._cleanDataInput,
                                    false
                                );
                            }
                        }
                    });
                }
            });
            
            // Add close button functionality
            if (fullscreenCloseBtn) {
                fullscreenCloseBtn.addEventListener('click', function() {
                    if (fullscreenContainer) {
                        fullscreenContainer.style.display = 'none';
                        document.body.style.overflow = '';
                    }
                });
            }
        }
        
        window.addEventListener('resize', function() {
            if (window.TEUI.sect16.isActive && window.TEUI.sect16.sankeyInstance) {
                // Get the current diagram wrapper
                const wrapper = document.getElementById('s16DiagramWrapper');
                if (wrapper && window.TEUI.sect16.sankeyInstance.resize) {
                    window.TEUI.sect16.sankeyInstance.resize(
                        wrapper.clientWidth, 
                        wrapper.clientHeight
                    );
                }
                
                // Also update fullscreen if active
                const fullscreenContainer = document.getElementById('s16FullscreenContainer');
                if (fullscreenContainer && fullscreenContainer.style.display !== 'none' && 
                    window.TEUI.sect16.fullscreenSankeyInstance && window.TEUI.sect16.fullscreenSankeyInstance.resize) {
                    const fullscreenWidth = fullscreenContainer.clientWidth - 40;
                    const fullscreenHeight = fullscreenContainer.clientHeight - 70;
                    window.TEUI.sect16.fullscreenSankeyInstance.resize(fullscreenWidth, fullscreenHeight);
                }
            }
        });

        console.warn("S16 LOG: Event handler attachments attempted.");
    }

    function activateSankey() {
        console.log("Section 16: Activating Sankey diagram");
        
        // Get DOM elements
        const diagramWrapper = document.getElementById('s16DiagramWrapper');
        const loadingPlaceholder = document.getElementById('s16LoadingPlaceholder');
        
        if (!diagramWrapper) {
            console.error("Section 16 Error: Diagram wrapper not found. Cannot activate Sankey.");
            return;
        }
        
        // Show diagram, hide placeholder
        diagramWrapper.style.display = 'block';
        if (loadingPlaceholder) loadingPlaceholder.style.display = 'none';
        
        // Update button text
        const activateBtn = document.getElementById('s16ActivateBtn');
        if (activateBtn) activateBtn.textContent = 'Refresh Sankey';
        
        // Show other controls
        const controls = ['s16ToggleEmissionsBtn', 's16ToggleSpacingBtn', 's16WidthToggleContainer', 's16FullscreenBtn'];
        controls.forEach(id => {
            const el = document.getElementById(id);
            if (el) el.style.display = id === 's16WidthToggleContainer' ? 'flex' : 'inline-flex';
        });
        
        // Initialize Sankey diagram
        if (!window.TEUI.sect16.sankeyInstance) {
            window.TEUI.sect16.sankeyInstance = new TEUI_SankeyDiagram({
                containerId: 'sankeySection16Svg',
                width: diagramWrapper.clientWidth,
                height: diagramWrapper.clientHeight,
                nodeWidth: window.TEUI.sect16.defaultNodeWidth,
                nodePadding: window.TEUI.sect16.nodePadding
            });
            
            if (!window.TEUI.sect16.sankeyInstance.init()) {
                console.error("Section 16 Error: Failed to initialize Sankey diagram.");
                return;
            }
        }
        
        // Set active flag
        window.TEUI.sect16.isActive = true;
        
        // Render the Sankey diagram with data from StateManager
        fetchDataAndRenderSankey(true);
    }

    function onSectionRendered() {
        console.log("Section 16: onSectionRendered called. Initialized flag:", window.TEUI.sect16.initialized);
        
        if (window.TEUI.sect16.initialized) {
            console.log("Section 16: Already initialized, skipping setup.");
            return;
        }
        
        // Setup DOM first
        if (!setupSection16DOM()) { 
            console.error("Section 16: DOM setup failed in onSectionRendered. Aborting setup.");
            return; 
        }
        console.log("Section 16: DOM setup complete");
        
        // Setup event handlers after DOM is ready
        initializeEventHandlers();
        
        // Set the placeholder text
        const loadingPlaceholder = document.getElementById('s16LoadingPlaceholder');
        if (loadingPlaceholder) {
            loadingPlaceholder.style.display = 'flex';
            loadingPlaceholder.textContent = "Click 'Activate Sankey' to load the diagram";
        }
        
        // Mark as initialized to prevent duplicate setup
        window.TEUI.sect16.initialized = true;
    }

    function handleStateChange(newValue) {
        if (window.TEUI.sect16.isActive) {
            console.log("Section 16: Relevant state changed, refreshing Sankey.");
            fetchDataAndRenderSankey(false);
        }
    }

    // Add this function before fetchDataAndRenderSankey
    function debugSankeyLinkValues() {
        console.warn("S16 DEBUG: Validating all link values...");
        
        if (!sankeyInstance || !sankeyInstance._cleanDataInput) {
            console.warn("S16 DEBUG: No Sankey data available to validate.");
            return;
        }
        
        // Log all link values from the current data
        sankeyInstance._cleanDataInput.links.forEach(link => {
            let linkId = link.id || "Unknown";
            let sourceNode = typeof link.source === 'object' ? 
                link.source.name : 
                (sankeyInstance._cleanDataInput.nodes[link.source]?.name || "Unknown");
            let targetNode = typeof link.target === 'object' ? 
                link.target.name : 
                (sankeyInstance._cleanDataInput.nodes[link.target]?.name || "Unknown");
            
            console.warn(`S16 DEBUG: Link "${linkId}" (${sourceNode} → ${targetNode}) Value: ${link.value}`);
        });
        
        // Check specific envelope losses (TEL components) directly from StateManager
        if (window.TEUI && window.TEUI.StateManager) {
            const teuiState = window.TEUI.StateManager;
            console.warn("S16 DEBUG: Checking TEL component values from StateManager:");
            
            const telFields = ["i_85", "i_86", "i_87", "i_88", "i_89", "i_90", "i_91", "i_92", 
                              "i_93", "i_94", "i_95", "i_97", "i_103"];
            telFields.forEach(fieldId => {
                const value = teuiState.getValue(fieldId);
                console.warn(`S16 DEBUG: TEL Field: ${fieldId}, StateManager Value: ${value}`);
            });
            
            // Check Energy Interface fields
            console.warn("S16 DEBUG: Checking Energy Interface fields:");
            ["d_114", "d_115", "d_127", "d_131", "l_113", "l_115"].forEach(fieldId => {
                const value = teuiState.getValue(fieldId);
                console.warn(`S16 DEBUG: Energy Interface Field: ${fieldId}, StateManager Value: ${value}`);
            });
        }
    }

    function buildSankeyDataFromStateManager() {
        // Start with the template structure
        let sankeyData = JSON.parse(JSON.stringify(SANKEY_STRUCTURE_TEMPLATE));

        // Get StateManager instance
        const teuiState = window.TEUI.StateManager;
        if (!teuiState || typeof teuiState.getValue !== 'function') {
            console.warn("Section 16: TEUI.StateManager not available for data fetching. Using template defaults.");
            return sankeyData;
        }

        // Get system configurations
        const primaryHeatingSystem = teuiState.getValue('d_113');
        const dhwSystem = teuiState.getValue('d_51');
        const isPrimaryGasOrOil = primaryHeatingSystem === 'Gas' || primaryHeatingSystem === 'Oil';
        const isDhwGasOrOil = dhwSystem === 'Gas' || dhwSystem === 'Oil';

        // Configure the GasExhaust node visibility
        const gasExhaustNode = sankeyData.nodes.find(n => n.name === "GasExhaust");
        if (gasExhaustNode) {
            gasExhaustNode.hidden = !(isPrimaryGasOrOil || isDhwGasOrOil);
        }

        // Map link IDs to TEUI StateManager field IDs
        const linkIdToTeuiField = {
            "OccupantGains": "i_64",
            "EquipmentGains": "i_70",
            "SHWNetDemand": "j_52",
            "WinNorthGains": "i_74",
            "WinEastGains": "i_75",
            "WinSouthGains": "i_76",
            "WinWestGains": "i_77",
            "DoorGains": "i_73",
            "SkylightGains": "i_78",
            "HeatPumpSourceToTED": "l_113",
            "HeatPumpElecToTED": "d_114",
            "TEDToBuilding": "d_127",
            "TELToRoof": "i_85",
            "TELToWallAG": "i_86",
            "TELToFloorExp": "i_87",
            "TELToDoor": "i_88",
            "TELToWinN": "i_89",
            "TELToWinE": "i_90",
            "TELToWinS": "i_91",
            "TELToWinW": "i_92",
            "TELToSkylight": "i_93",
            "TELToWallBG": "i_94",
            "TELToSlab": "i_95",
            "TELToTB": "i_97",
            "TELToAirLeak": "i_103",
            "BuildingToVentLoss": "m_121",
            "BuildingToSHWWaste": "j_53",
            "BuildingToUnusableGains": "i_82",
            "BuildingToTEL": "d_131",
            "TEDToGasExhaust": "l_115",
            "SHWToGasExhaust": "j_54",
            "BuildingToGasExhaust": null
        };

        // Process each link to get values from StateManager
        sankeyData.links.forEach(link => {
            if (!link.id) return; // Skip links without IDs

            let teuiFieldId = linkIdToTeuiField[link.id];
            let valueToAssign = 0.0001; // Default minimum value
            let rawValueFromState = null; // For logging

            // Special case handling for specific links
            if (link.id === "HeatPumpSourceToTED") {
                if (isPrimaryGasOrOil) {
                    valueToAssign = 0.0001; // Minimal value in gas mode
                } else {
                    rawValueFromState = teuiState.getValue(teuiFieldId);
                    valueToAssign = parseFloat(rawValueFromState) || 0.0001;
                }
            } else if (link.id === "HeatPumpElecToTED") {
                if (isPrimaryGasOrOil) {
                    teuiFieldId = 'd_115'; // Use gas input instead
                }
                rawValueFromState = teuiState.getValue(teuiFieldId);
                valueToAssign = parseFloat(rawValueFromState) || 0.0001;
            } else if (link.id === "TEDToGasExhaust") {
                if (isPrimaryGasOrOil) {
                    rawValueFromState = teuiState.getValue(teuiFieldId);
                    valueToAssign = parseFloat(rawValueFromState) || 0.0001;
                } else {
                    valueToAssign = 0.0001; // Minimal value in non-gas mode
                }
            } else if (link.id === "SHWToGasExhaust") {
                if (isDhwGasOrOil) {
                    rawValueFromState = teuiState.getValue(teuiFieldId);
                    valueToAssign = parseFloat(rawValueFromState) || 0.0001;
                } else {
                    valueToAssign = 0.0001; // Minimal value in non-gas mode
                }
            } else if (link.id === "BuildingToGasExhaust") {
                valueToAssign = 0.0001; // Always minimal for this link
            } else if (teuiFieldId) {
                // Standard processing for most links
                rawValueFromState = teuiState.getValue(teuiFieldId);
                if (rawValueFromState !== null && rawValueFromState !== undefined) {
                    valueToAssign = parseFloat(rawValueFromState) || 0.0001;
                }
            }

            // Set the link value
            link.value = Math.max(0.0001, valueToAssign);
            
            // Log for debugging
            console.warn(`S16 LINK LOG: ID: ${link.id}, TEUI Field: ${teuiFieldId || 'N/A'}, Raw State Value: '${rawValueFromState}', Assigned Link Value: ${link.value}`);
        });

        // Now ensure all nodes and links have the correct structure
        // This converts node references to indexes for D3 to process properly
        sankeyData.links = sankeyData.links.map(link => {
            if (typeof link.source === 'number' && typeof link.target === 'number') {
                // Keep direct numeric indices
                return link;
            } else {
                // Convert node references to indices
                return {
                    source: typeof link.source === 'number' ? link.source : sankeyData.nodes.findIndex(n => n.name === link.source.name),
                    target: typeof link.target === 'number' ? link.target : sankeyData.nodes.findIndex(n => n.name === link.target.name),
                    value: link.value,
                    id: link.id,
                    isEmissions: link.isEmissions
                };
            }
        });

        return sankeyData;
    }

    function fetchDataAndRenderSankey(isInitialLoad = true) {
        console.log("Section 16: Fetching data and rendering Sankey...");
        
        // Make sure the Sankey instance exists
        if (!window.TEUI.sect16.sankeyInstance) {
            console.error("Section 16: Sankey instance not found. Cannot render.");
            return;
        }
        
        // Get data from StateManager
        const sankeyData = buildSankeyDataFromStateManager();
        
        // Update emissions if enabled
        if (window.TEUI.sect16.showEmissions) {
            window.TEUI.sect16.sankeyInstance.showEmissions = true;
            window.TEUI.sect16.sankeyInstance.updateEmissionsFlows(sankeyData);
        } else {
            window.TEUI.sect16.sankeyInstance.showEmissions = false;
        }
        
        // Apply any custom options
        const nodePadding = window.TEUI.sect16.nodePadding || 15;
        const nodeWidthMultiplier = window.TEUI.sect16.nodeWidthMultiplier || 1;
        
        // Set options directly on sankey instance
        if (window.TEUI.sect16.sankeyInstance.sankey) {
            window.TEUI.sect16.sankeyInstance.sankey.nodePadding(nodePadding);
            window.TEUI.sect16.sankeyInstance.nodeWidth = 20 * nodeWidthMultiplier;
            window.TEUI.sect16.sankeyInstance.widthMultiplier = nodeWidthMultiplier;
        }
        
        // Debug the data
        debugSankeyData(sankeyData);
        
        // Render the Sankey diagram
        window.TEUI.sect16.sankeyInstance.render(sankeyData, isInitialLoad);
        
        console.log("Section 16: Sankey render call complete.");
    }

    // Debug helper for Sankey data
    function debugSankeyData(sankeyData) {
        if (!sankeyData || !sankeyData.links || !sankeyData.nodes) {
            console.warn("S16 DEBUG: No valid Sankey data to debug");
            return;
        }
        
        console.warn("S16 DEBUG: Checking link values in Sankey data");
        
        // Log important links for debugging
        for (let i = 0; i < Math.min(5, sankeyData.links.length); i++) {
            const link = sankeyData.links[i];
            if (!link || !link.id) continue;
            
            // Get source and target node names
            const sourceNodeIdx = typeof link.source === 'number' ? link.source : sankeyData.nodes.indexOf(link.source);
            const targetNodeIdx = typeof link.target === 'number' ? link.target : sankeyData.nodes.indexOf(link.target);
            
            const sourceName = sourceNodeIdx >= 0 && sourceNodeIdx < sankeyData.nodes.length ? 
                sankeyData.nodes[sourceNodeIdx].name : "Unknown";
            const targetName = targetNodeIdx >= 0 && targetNodeIdx < sankeyData.nodes.length ? 
                sankeyData.nodes[targetNodeIdx].name : "Unknown";
            
            console.warn(`S16 DEBUG: Link "${link.id}" (${sourceName} → ${targetName}) Value: ${link.value}`);
        }
    }

    function calculateAll() {}

    // --- Public API ---
    return { 
        getFields: getFields,
        getDropdownOptions: getDropdownOptions,
        getLayout: getLayout,
        initializeEventHandlers: initializeEventHandlers,
        onSectionRendered: onSectionRendered,
        calculateAll: calculateAll,
        activateAndRender: function() {
            if (!document.getElementById('s16ControlsContainer')) {
                if (!setupSection16DOM()) return;
                if (!window.TEUI.sect16.handlersInitialized) {
                    initializeEventHandlers();
                }
            }
            window.TEUI.sect16.isActive = true;
            const activateBtn = document.getElementById('s16ActivateBtn');
            const emissionsBtn = document.getElementById('s16ToggleEmissionsBtn');
            const spacingBtn = document.getElementById('s16ToggleSpacingBtn');
            const widthToggleContainer = document.getElementById('s16WidthToggleContainer');
            const loadingPlaceholder = document.getElementById('s16LoadingPlaceholder');
            if (loadingPlaceholder) loadingPlaceholder.style.display = 'none';
            if (emissionsBtn) emissionsBtn.style.display = 'inline-flex';
            if (spacingBtn) spacingBtn.style.display = 'inline-flex';
            if (widthToggleContainer) widthToggleContainer.style.display = 'inline-flex';
            fetchDataAndRenderSankey(false);
        },
        activateSankey: activateSankey
    };
})(); 

// Remove the custom teui-section-rendered listener for Section 16
// document.addEventListener('teui-section-rendered', function(event) { ... });

// The teui-rendering-complete listener is also likely not needed for S16 specific logic.
// document.addEventListener('teui-rendering-complete', function() { ... }); 