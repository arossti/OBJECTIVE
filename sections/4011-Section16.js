// sections/4011-Section16.js
// Sankey Diagram Visualization Section

window.TEUI = window.TEUI || {};
window.TEUI.SectionModules = window.TEUI.SectionModules || {};

window.TEUI.sect16 = {}; // Section-specific namespace
window.TEUI.sect16.initialized = false; // Flag for idempotent initialization

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

    const TEUI_SankeyDiagram = {
        svg: null,
        tooltip: null,
        sankey: d3.sankey()
            .nodeWidth(20)
            .nodePadding(15)
            .extent([[1, 1], [1098, 698]]),
        _cleanDataInput: null, // Store the last clean data passed to render
        _currentD3Data: null, // Store the data structure after D3 processing (nodes, links with x0, y0 etc.)
        _showEmissions: false,
        _nodeWidthMultiplier: 1,
        _nodePadding: 15,
        _isGasHeating: false,
        initialize(svgId, tooltipId, initialExtent) {
            this.svg = d3.select(svgId);
            this.tooltip = d3.select(tooltipId);
            
            // Define a default left margin
            const defaultMarginLeft = 40; // Increased from 20 for more padding
            const defaultMarginOthers = 1; // Minimal top/right/bottom for extent

            let extentToUse = initialExtent;
            if (!initialExtent && this.svg && this.svg.node()) {
                const svgNode = this.svg.node();
                const w = svgNode.clientWidth || svgNode.parentNode.clientWidth || 1098;
                const h = svgNode.clientHeight || svgNode.parentNode.clientHeight || 698;
                extentToUse = [
                    [defaultMarginLeft, defaultMarginOthers],
                    [w - defaultMarginOthers, h - defaultMarginOthers]
                ];
            } else if (initialExtent) {
                 // If initialExtent is provided, adjust its left margin
                 extentToUse = [
                    [defaultMarginLeft, initialExtent[0][1]],
                    [initialExtent[1][0], initialExtent[1][1]]
                 ];
            }

            if (extentToUse) this.sankey.extent(extentToUse);
            // Size also needs to account for margins
            if (this.svg && this.svg.node()) {
                const svgNode = this.svg.node();
                const w = svgNode.clientWidth || svgNode.parentNode.clientWidth || 1100;
                const h = svgNode.clientHeight || svgNode.parentNode.clientHeight || 700;
                this.sankey.size([w - defaultMarginLeft - defaultMarginOthers, h - defaultMarginOthers*2]);
            }

            this.svg.selectAll("*").remove();
            this.linkGroup = this.svg.append("g").attr("class", "links");
            this.nodeGroup = this.svg.append("g").attr("class", "nodes");
            this.labelGroup = this.svg.append("g").attr("class", "labels");
            console.warn("S16 SANKEY LOG: TEUI_SankeyDiagram initialized. SVG:", svgId, "Extent used:", extentToUse);
        },
        updateSankeyConfig(config) {
            if (config.showEmissions !== undefined) this._showEmissions = config.showEmissions;
            if (config.nodeWidthMultiplier !== undefined) {
                this._nodeWidthMultiplier = config.nodeWidthMultiplier;
                this.sankey.nodeWidth(20 * this._nodeWidthMultiplier);
            }
            if (config.nodePadding !== undefined) {
                this._nodePadding = config.nodePadding;
                this.sankey.nodePadding(this._nodePadding);
            }
            if (config.isGasHeating !== undefined) this._isGasHeating = config.isGasHeating;
        },
        render(freshSankeyData, isInitialLoad = false) {
            // Store a deep copy of the fresh input data for potential re-use (e.g., by resize)
            // This data is pre-D3 processing.
            this._cleanDataInput = JSON.parse(JSON.stringify(freshSankeyData)); 

            if (!this._cleanDataInput.nodes || !this._cleanDataInput.links) {
                console.error("TEUI_SankeyDiagram Error: Invalid data structure for rendering.", this._cleanDataInput);
                return;
            }
            // Work with a copy for D3 processing to avoid modifying _cleanDataInput directly with D3 properties
            let dataForD3Processing = JSON.parse(JSON.stringify(this._cleanDataInput)); 

            dataForD3Processing.nodes.forEach((node, index) => { node.index = index; });

            if (this._showEmissions) {
                // updateEmissionsFlows should modify dataForD3Processing.links directly
                this.updateEmissionsFlows(dataForD3Processing); 
            }

            try {
                const visibleNodes = dataForD3Processing.nodes.filter(n => !n.hidden);
                const visibleNodeNameSet = new Set(visibleNodes.map(n => n.name));

                const workingDataForD3Layout = {
                    nodes: visibleNodes,
                    links: dataForD3Processing.links.map(l => ({
                        sourceOriginal: typeof l.source === 'object' ? l.source : dataForD3Processing.nodes[l.source],
                        targetOriginal: typeof l.target === 'object' ? l.target : dataForD3Processing.nodes[l.target],
                        value: Math.max(0.0001, l.value),
                        isEmissions: l.isEmissions
                    })).filter(l => 
                        l.sourceOriginal && visibleNodeNameSet.has(l.sourceOriginal.name) &&
                        l.targetOriginal && visibleNodeNameSet.has(l.targetOriginal.name) &&
                        l.value > 0
                    ).map(l => ({
                        source: visibleNodes.indexOf(l.sourceOriginal),
                        target: visibleNodes.indexOf(l.targetOriginal),
                        value: l.value,
                        isEmissions: l.isEmissions
                    })).filter(l => l.source !== -1 && l.target !== -1)
                };
                
                if(workingDataForD3Layout.nodes.length === 0) {
                    console.warn("TEUI_SankeyDiagram: No visible nodes to render.");
                    this.svg.selectAll("*").remove();
                    this.linkGroup = this.svg.append("g").attr("class", "links");
                    this.nodeGroup = this.svg.append("g").attr("class", "nodes");
                    this.labelGroup = this.svg.append("g").attr("class", "labels");
                    return;
                }

                // Perform the D3 Sankey layout
                this._currentD3Data = this.sankey(workingDataForD3Layout); 

                this._currentD3Data.nodes.forEach(node => { node.displayColor = d3.color(node.color).darker(0.3); });

                const svgWidth = parseFloat(this.svg.style("width")) || (this.sankey.extent()[1][0] - this.sankey.extent()[0][0]);
                const maxX = d3.max(this._currentD3Data.nodes, d => d.x0) || svgWidth;
                
                this.renderLinks(this._currentD3Data.links, isInitialLoad, maxX);
                this.renderNodes(this._currentD3Data.nodes, isInitialLoad, maxX);
                this.renderLabels(this._currentD3Data.nodes, isInitialLoad, maxX, svgWidth);

            } catch (error) {
                console.error("Error rendering Sankey chart:", error, "\nData for D3 layout:", workingDataForD3Layout, "\nOriginal input data:", this._cleanDataInput);
            }
        },
        renderLinks(links, isInitialLoad, maxX) {
            const link = this.linkGroup.selectAll(".link").data(links, d => `${d.source.index}-${d.target.index}-${d.value}-${d.isEmissions}`);
            link.exit().remove();
            const linkEnter = link.enter().append("path").attr("class", "link")
                .style("stroke-opacity", 0).attr("stroke-width", 0)
                .on("mouseover", (event, d) => this.showLinkTooltip(event, d))
                .on("mouseout", () => this.hideTooltip());
            const linkUpdate = link.merge(linkEnter).style("stroke", d => this.getLinkColor(d));
            if (isInitialLoad) {
                linkUpdate.attr("d", d3.sankeyLinkHorizontal())
                    .style("stroke-opacity", 0).attr("stroke-width", 0)
                    .transition().duration(750).delay(d => (d.source.x0 / maxX) * 1500)
                    .style("stroke-opacity", 0.7)
                    .transition().duration(500).attr("stroke-width", d => Math.max(1, d.width));
            } else {
                linkUpdate.transition().duration(750)
                    .attr("d", d3.sankeyLinkHorizontal())
                    .style("stroke-opacity", 0.7)
                    .attr("stroke-width", d => Math.max(1, d.width));
            }
        },
        renderNodes(nodes, isInitialLoad, maxX) {
            const node = this.nodeGroup.selectAll(".node").data(nodes, d => d.name);
            node.exit().transition().duration(500).attr("width", 0).remove();
            const nodeEnter = node.enter().append("rect").attr("class", "node")
                .style("fill", d => d.displayColor).style("fill-opacity", 1)
                .on("mouseover", (event, d) => this.showNodeTooltip(event, d))
                .on("mouseout", () => this.hideTooltip());
            const nodeUpdate = node.merge(nodeEnter);
            if (isInitialLoad) {
                nodeUpdate.attr("x", d => d.x0).attr("y", d => d.y0)
                    .attr("height", d => Math.max(0, d.y1 - d.y0))
                    .attr("width", 0).style("opacity", 0);
                nodeUpdate.transition().duration(750).delay(d => (d.x0 / maxX) * 1500)
                    .style("opacity", 1).transition().duration(500)
                    .attr("width", d => d.x1 - d.x0);
            } else {
                nodeUpdate.transition().duration(750)
                    .attr("x", d => d.x0).attr("y", d => d.y0)
                    .attr("height", d => Math.max(0, d.y1 - d.y0))
                    .attr("width", d => d.x1 - d.x0);
            }
        },
        renderLabels(nodes, isInitialLoad, maxX, svgWidth) {
            const label = this.labelGroup.selectAll(".node-label").data(nodes, d => d.name);
            label.exit().transition().duration(500).style("opacity", 0).remove();
            const labelEnter = label.enter().append("text").attr("class", "node-label").style("opacity", 0);
            const labelUpdate = label.merge(labelEnter)
                .attr("x", d => (d.x0 < svgWidth / 2 ? d.x1 + 5 : d.x0 - 5))
                .attr("y", d => (d.y0 + d.y1) / 2).attr("dy", "0.35em")
                .attr("text-anchor", d => (d.x0 < svgWidth / 2 ? "start" : "end"))
                .text(d => this.formatNodeLabel(d));
            if (isInitialLoad) {
                labelUpdate.transition().duration(750).delay(d => (d.x0 / maxX) * 1500 + 500).style("opacity", 1);
            } else {
                labelUpdate.transition().duration(750).style("opacity", 1);
            }
        },
        showNodeTooltip(event, d) {
            console.warn("S16 SANKEY LOG: showNodeTooltip triggered for node:", d ? d.name : 'undefined', "event:", event);
            const content = this.createNodeTooltip(d);
            this.showTooltip(content, event);
            d3.select(event.target).style("fill-opacity", 0.8);
        },
        showLinkTooltip(event, d) {
            console.warn("S16 SANKEY LOG: showLinkTooltip triggered for link:", d ? `${d.source.name} -> ${d.target.name}` : 'undefined', "event:", event);
            const content = this.createLinkTooltip(d);
            this.showTooltip(content, event);
            d3.select(event.target).style("stroke-opacity", 0.9);
        },
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
        },
        createLinkTooltip(d) {
            const sourceName = d.source.name;
            const targetName = d.target.name;
            const value = d.value;
            const isEmissionsLink = d.isEmissions || (targetName && targetName.includes("Emissions"));
            const formattedValue = typeof window.TEUI !== 'undefined' && window.TEUI.formatNumber ?
                window.TEUI.formatNumber(value, 'number-2dp') : value.toFixed(2);
            return `<div class="tooltip-title">Flow Details</div><div class="tooltip-flow"><span>From: ${sourceName}</span></div><div class="tooltip-flow"><span>To: ${targetName}</span></div><div class="tooltip-flow"><span>Value: ${isEmissionsLink ? `${formattedValue} grams CO2e` : `${formattedValue} kWh`}</span></div>`;
        },
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
        },
        formatNodeLabel(node) {
            if (node.name.includes("Emissions")) {
                const totalEmissions = node.targetLinks?.reduce((sum, link) => sum + link.value, 0) || 0;
                const mtValue = (totalEmissions / 1000000);
                const formattedMTValue = typeof window.TEUI !== 'undefined' && window.TEUI.formatNumber ?
                    window.TEUI.formatNumber(mtValue, 'number-2dp') : mtValue.toFixed(2);
                return `${node.name} (${formattedMTValue} MT)`;
            }
            return node.name;
        },
        showTooltip(content, event) {
            if (!this.tooltip || !this.svg) { // Also check for this.svg
                console.warn("S16 SANKEY LOG: showTooltip - Tooltip element or SVG not found!");
                return;
            }
            
            // Use d3.pointer to get coordinates relative to the SVG container
            const [pointerX, pointerY] = d3.pointer(event, this.svg.node());
            console.warn("S16 SANKEY LOG: showTooltip called. d3.pointer(event, svg) X:", pointerX, "Y:", pointerY, "Content:", content);

            const padding = 15; // Increased padding slightly
            let newLeft = pointerX + padding;
            let newTop = pointerY + padding;

            this.tooltip.style("display", "block")
                .html(content) // Set content first to get accurate dimensions for collision detection
                .style("left", `${newLeft}px`)
                .style("top", `${newTop}px`);
            
            // Boundary collision detection relative to the diagram wrapper
            const tooltipRect = this.tooltip.node().getBoundingClientRect();
            const wrapper = document.getElementById('sankeySection16ContainerWrapper');
            if (!wrapper) {
                console.warn("S16 SANKEY LOG: Tooltip wrapper not found for boundary check.");
                return;
            }
            const wrapperRect = wrapper.getBoundingClientRect();

            // Adjust if tooltip goes off the right edge of the wrapper
            if (newLeft + tooltipRect.width > wrapperRect.width) {
                newLeft = pointerX - tooltipRect.width - padding;
            }
            // Adjust if tooltip goes off the bottom edge of the wrapper
            if (newTop + tooltipRect.height > wrapperRect.height) {
                newTop = pointerY - tooltipRect.height - padding;
            }
            // Adjust if tooltip goes off the left edge of the wrapper (e.g. if padding pushes it left)
            if (newLeft < 0) {
                newLeft = padding;
            }
            // Adjust if tooltip goes off the top edge of the wrapper
            if (newTop < 0) {
                newTop = padding;
            }

            this.tooltip.style("left", `${newLeft}px`).style("top", `${newTop}px`);
            console.warn("S16 SANKEY LOG: Tooltip displayed at (adjusted for wrapper) Left:", newLeft, "Top:", newTop);
        },
        hideTooltip() { 
            console.warn("S16 SANKEY LOG: hideTooltip called.");
            if (this.tooltip) this.tooltip.style("display", "none"); 
        },
        getLinkColor(d) {
            if (d.target.name === "GasExhaust") return "#BE343D";
            if (d.source.name === "Building" || d.target.name === "Building") return d.source.name === "Building" ? d3.color(d.target.color).brighter(0.2) : d3.color(d.source.color);
            return d3.interpolateRgb(d.source.color, d.target.color)(0.5);
        },
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

            if (this._showEmissions && window.TEUI && window.TEUI.StateManager && window.TEUI.StateManager.getValue) {
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
        },
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
        },
        resize(newWidth, newHeight = 500) {
            if (!this.svg || !this.sankey || !this._cleanDataInput) {
                console.warn("S16 SANKEY LOG: Sankey not initialized or no data for resize"); 
                return; 
            }
            const defaultMarginLeft = 40; // Consistent left margin
            const defaultMarginOthers = 1; // Minimal top/right/bottom

            const innerWidth = Math.max(100, newWidth - defaultMarginLeft - defaultMarginOthers);
            const innerHeight = Math.max(50, newHeight - defaultMarginOthers*2);
            
            this.svg.attr("width", newWidth).attr("height", newHeight)
                .attr("viewBox", `0 0 ${newWidth} ${newHeight}`).style("overflow", "visible");
            
            this.sankey.extent([[defaultMarginLeft, defaultMarginOthers], [newWidth - defaultMarginOthers, newHeight - defaultMarginOthers]]);
            this.sankey.size([innerWidth, innerHeight]);
            console.warn("S16 SANKEY LOG: Resize called. New Width:", newWidth, "New Height:", newHeight, "Inner W/H:", innerWidth, innerHeight);
            
            if (this._cleanDataInput.nodes && this._cleanDataInput.nodes.length > 0) {
                 this.render(this._cleanDataInput, false);
            } else {
                console.warn("S16 SANKEY LOG: Sankey resize - No clean data to render.");
            }
        }
    };

    // --- Private Variables (Section16 specific) ---
    let sankeyInstance = TEUI_SankeyDiagram; 
    let isActive = false;
    let showEmissions = false;
    let nodeWidthMultiplier = 1;
    let nodePadding = 15;

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

    function setupSection16DOM() {
        const targetArea = document.getElementById('section16ContentTarget');
        if (!targetArea) {
            console.error("Section 16 Critical Error: The target div #section16ContentTarget was not found in index.html. Cannot setup DOM.");
            return false;
        }
        targetArea.innerHTML = ''; 
        const controlsContainer = document.createElement('div');
        controlsContainer.id = 's16ControlsContainer';
        controlsContainer.style.cssText = "padding: 10px 0; margin-bottom: 10px; border-bottom: 1px solid #eee; display: flex; align-items: center; gap: 10px;";
        const activateBtn = document.createElement('button');
        activateBtn.id = 's16ActivateBtn';
        activateBtn.className = 'teui-button'; 
        activateBtn.textContent = 'Activate/Refresh Sankey';
        controlsContainer.appendChild(activateBtn);
        const emissionsBtn = document.createElement('button');
        emissionsBtn.id = 's16ToggleEmissionsBtn';
        emissionsBtn.className = 'teui-button';
        emissionsBtn.textContent = 'Show Emissions';
        emissionsBtn.style.display = 'none';
        controlsContainer.appendChild(emissionsBtn);
        const spacingBtn = document.createElement('button');
        spacingBtn.id = 's16ToggleSpacingBtn';
        spacingBtn.className = 'teui-button';
        spacingBtn.textContent = 'Expand Nodes'; 
        spacingBtn.style.display = 'none';
        controlsContainer.appendChild(spacingBtn);
        const widthToggleContainer = document.createElement('div');
        widthToggleContainer.id = 's16WidthToggleContainer';
        widthToggleContainer.className = 's16-width-toggle'; 
        widthToggleContainer.style.cssText = 'display: none; align-items: center; gap: 5px; margin-left: 10px;';
        const widthLabel = document.createElement('label');
        widthLabel.htmlFor = 's16WidthMultiplierSlider';
        widthLabel.textContent = 'Node Width:';
        widthToggleContainer.appendChild(widthLabel);
        const widthSlider = document.createElement('input');
        widthSlider.type = 'range';
        widthSlider.id = 's16WidthMultiplierSlider';
        widthSlider.min = '50';
        widthSlider.max = '400';
        widthSlider.value = '100';
        widthSlider.step = '10';
        widthSlider.style.cssText = 'width: 100px; vertical-align: middle;';
        widthToggleContainer.appendChild(widthSlider);
        const widthValueText = document.createElement('span');
        widthValueText.id = 's16WidthValueText';
        widthValueText.style.cssText = 'margin-left: 5px; vertical-align: middle;';
        widthValueText.textContent = '100%';
        widthToggleContainer.appendChild(widthValueText);
        controlsContainer.appendChild(widthToggleContainer);
        targetArea.appendChild(controlsContainer);

        const diagramWrapper = document.createElement('div');
        diagramWrapper.id = 'sankeySection16ContainerWrapper';
        diagramWrapper.style.cssText = 'width: 100%; height: 500px; background: #f9f9f9; position: relative; border: 1px solid #ccc; overflow: hidden;';
        
        const svgElement = document.createElementNS("http://www.w3.org/2000/svg", "svg");
        svgElement.id = 'sankeySection16Container';
        svgElement.style.cssText = 'width: 100%; height: 100%; display: block;'; 
        diagramWrapper.appendChild(svgElement);

        const tooltipElement = document.createElement('div');
        tooltipElement.id = 'sankeySection16Tooltip';
        tooltipElement.className = 'tooltip'; 
        tooltipElement.style.display = 'none';
        tooltipElement.style.position = 'absolute'; 
        tooltipElement.style.zIndex = '1080';
        diagramWrapper.appendChild(tooltipElement);

        const placeholderElement = document.createElement('div');
        placeholderElement.id = 's16LoadingPlaceholder';
        placeholderElement.style.cssText = 'position: absolute; top: 50%; left: 50%; transform: translate(-50%, -50%); font-style: italic; color: #777; text-align: center;';
        placeholderElement.innerHTML = "Sankey diagram not active.<br>Click 'Activate/Refresh Sankey' to load.";
        diagramWrapper.appendChild(placeholderElement);

        targetArea.appendChild(diagramWrapper);
        console.log("Section 16: DOM setup complete. Diagram wrapper height set to 500px.");
        return true; 
    }

    // --- Event Handling & Initialization ---
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

        if (activateBtn) {
            activateBtn.addEventListener('click', function() {
                console.warn("S16 LOG: Activate button CLICKED.");
                console.warn("S16 LOG: In Activate click - sankeyInstance:", sankeyInstance, "sankeyInstance.svg:", sankeyInstance ? sankeyInstance.svg : 'N/A');

                if (!sankeyInstance) {
                    console.error("Section 16: TEUI_SankeyDiagram object (sankeyInstance) is not available. Cannot activate.");
                    if (loadingPlaceholder) loadingPlaceholder.textContent = "Error: Sankey Diagram component failed to load.";
                    return;
                }
                if (!sankeyInstance.svg) { 
                    const svgWrapper = document.getElementById('sankeySection16ContainerWrapper');
                    const svgContainer = document.getElementById('sankeySection16Container');
                    console.warn("S16 LOG: In Activate click, before initialize - svgWrapper:", svgWrapper, "svgContainer:", svgContainer);

                    if (svgWrapper && svgContainer) {
                        sankeyInstance.initialize(
                            '#sankeySection16Container', 
                            '#sankeySection16Tooltip', 
                            [[1,1], [svgWrapper.clientWidth > 50 ? svgWrapper.clientWidth - 2 : 1098, svgWrapper.clientHeight > 50 ? svgWrapper.clientHeight -2 : 698]]
                        );
                        console.warn("S16 LOG: TEUI_SankeyDiagram initialized on activation.");
                    } else {
                        console.error("Section 16: SVG wrapper or container not found during activation. Cannot initialize Sankey.");
                        if (loadingPlaceholder) loadingPlaceholder.textContent = "Error: Sankey container not found.";
                        return;
                    }
                }
                isActive = true;
                if (loadingPlaceholder) loadingPlaceholder.style.display = 'none';
                if (emissionsBtn) emissionsBtn.style.display = 'inline-flex';
                if (spacingBtn) spacingBtn.style.display = 'inline-flex';
                if (widthToggleContainer) widthToggleContainer.style.display = 'inline-flex';
                console.warn("S16 LOG: Calling fetchDataAndRenderSankey from Activate button.");
                fetchDataAndRenderSankey(false); 
            });
        } else {
            console.warn("S16 LOG: Activate button NOT FOUND when trying to attach listener in initializeEventHandlers."); 
        }

        if (emissionsBtn) {
            emissionsBtn.addEventListener('click', function() {
                showEmissions = !showEmissions;
                this.textContent = showEmissions ? 'Hide Emissions' : 'Show Emissions';
                if (isActive) fetchDataAndRenderSankey(false);
            });
        }
        if (spacingBtn) {
            spacingBtn.addEventListener('click', function() {
                nodePadding = (nodePadding === 15) ? 2 : 15;
                this.textContent = (nodePadding === 15) ? 'Compress Nodes' : 'Expand Nodes';
                if (isActive) fetchDataAndRenderSankey(false);
            });
        }
        if (widthSlider) {
            const widthValueText = document.getElementById('s16WidthValueText');
            widthSlider.addEventListener('input', function() {
                nodeWidthMultiplier = parseInt(this.value) / 100;
                if (widthValueText) widthValueText.textContent = `${this.value}%`;
                if (isActive) fetchDataAndRenderSankey(false);
            });
        }
        
        window.addEventListener('resize', function() {
            if (isActive && sankeyInstance && typeof sankeyInstance.resize === 'function' && sankeyInstance.svg) {
                const wrapper = document.getElementById('sankeySection16ContainerWrapper');
                if (wrapper) {
                    sankeyInstance.resize(wrapper.clientWidth, parseFloat(getComputedStyle(wrapper).height));
                }
            }
        });

        // window.TEUI.sect16.handlersInitialized = true; // This flag is now controlled by onSectionRendered's main initialized flag
        console.warn("S16 LOG: Event handler attachments attempted.");
    }

    function onSectionRendered() {
        console.warn("S16 LOG: onSectionRendered CALLED. Initialized flag:", window.TEUI.sect16.initialized);
        if (window.TEUI.sect16.initialized) {
            console.warn("S16 LOG: onSectionRendered - ALREADY INITIALIZED (idempotency check) - returning.");
            return;
        }
        
        console.warn("S16 LOG: Attempting to find #section16ContentTarget BEFORE setupSection16DOM:", document.getElementById('section16ContentTarget'));
        if (!setupSection16DOM()) { 
            console.error("Section 16: DOM setup FAILED in onSectionRendered. Aborting S16 setup.");
            return; 
        }
        console.warn("S16 LOG: setupSection16DOM returned. #section16ContentTarget now:", document.getElementById('section16ContentTarget'));
        console.warn("S16 LOG: #s16ActivateBtn after setupSection16DOM in onSectionRendered:", document.getElementById('s16ActivateBtn'));

        if (!sankeyInstance && typeof TEUI_SankeyDiagram !== 'undefined') {
            sankeyInstance = TEUI_SankeyDiagram; 
            console.warn("S16 LOG: sankeyInstance assigned.");
        } else if (!sankeyInstance) {
             console.error("S16 LOG: TEUI_SankeyDiagram object is undefined. Critical error.");
             return; 
        }
        
        // Call initializeEventHandlers AFTER setupSection16DOM has created the elements.
        // The initializeEventHandlers function itself should be idempotent if FieldManager might call it separately.
        // For now, we ensure it's called at least once here correctly.
        console.warn("S16 LOG: Calling initializeEventHandlers from onSectionRendered.");
        initializeEventHandlers(); 
        
        const loadingPlaceholder = document.getElementById('s16LoadingPlaceholder');
        if (loadingPlaceholder) {
            loadingPlaceholder.style.display = 'block'; 
            loadingPlaceholder.textContent = "Sankey diagram not active. Click 'Activate/Refresh Sankey' to load.";
        }
        
        window.TEUI.sect16.initialized = true; // Mark this entire first-time setup as complete.
        console.warn("S16 LOG: First time onSectionRendered setup complete.");
    }

    function handleStateChange(newValue) {
        if (isActive) {
            console.log("Section 16: Relevant state changed, refreshing Sankey.");
            fetchDataAndRenderSankey(false);
        }
    }

    function fetchDataAndRenderSankey(isInitialPageLoad = false) {
        if (!isActive || !sankeyInstance) {
            console.log("Section 16: Sankey is not active or instance not ready. Skipping render.");
            const loadingPlaceholder = document.getElementById('s16LoadingPlaceholder');
            if (loadingPlaceholder) loadingPlaceholder.style.display = 'block';
            return;
        }
        if (!document.getElementById('sankeySection16Container')) {
            console.warn("Section 16: Sankey SVG container not found. DOM might not be ready or setup failed.");
            return;
        }

        console.log("Section 16: Fetching data and rendering Sankey...");
        const loadingPlaceholder = document.getElementById('s16LoadingPlaceholder');
        if (loadingPlaceholder) loadingPlaceholder.style.display = 'none';

        let currentSankeyData = JSON.parse(JSON.stringify(SANKEY_STRUCTURE_TEMPLATE));

        // Declare system state variables at the top of the function scope
        let primaryHeatingSystem = null;
        let dhwSystem = null;
        let isPrimaryGasOrOil = false;
        let isDhwGasOrOil = false;
        let isPrimaryHeatPump = false;
        let teuiState = null; // Hold the StateManager instance

        if (window.TEUI && window.TEUI.StateManager && window.TEUI.StateManager.getValue) {
            teuiState = window.TEUI.StateManager; // Assign to function-scoped variable
            
            primaryHeatingSystem = teuiState.getValue('d_113');
            dhwSystem = teuiState.getValue('d_51');
            isPrimaryGasOrOil = primaryHeatingSystem === 'Gas' || primaryHeatingSystem === 'Oil';
            isDhwGasOrOil = dhwSystem === 'Gas' || dhwSystem === 'Oil';
            isPrimaryHeatPump = primaryHeatingSystem === 'Heatpump';

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
                "BuildingToVentLoss": "m_121",
                "BuildingToSHWWaste": "j_53",
                "BuildingToUnusableGains": "i_82",
                "BuildingToTEL": "d_131",
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
                "TEDToGasExhaust": "l_115",
                "SHWToGasExhaust": "j_54"
            };

            currentSankeyData.links.forEach(link => {
                let teuiFieldId = linkIdToTeuiField[link.id];
                let valueToAssign = 0.0001;
                let rawValueFromState = null; // For logging

                if (link.id === "HeatPumpSourceToTED") {
                    if (isPrimaryHeatPump) {
                        rawValueFromState = teuiState.getValue(linkIdToTeuiField[link.id]);
                        if (rawValueFromState !== null && rawValueFromState !== undefined && String(rawValueFromState).trim() !== "") {
                            const numericValue = parseFloat(String(rawValueFromState).replace(/,/g, ''));
                            valueToAssign = isNaN(numericValue) ? 0.0001 : Math.max(0.0001, numericValue);
                        }
                    } else {
                        valueToAssign = 0.0001;
                    }
                } else if (link.id === "HeatPumpElecToTED") {
                    if (isPrimaryGasOrOil) {
                        teuiFieldId = 'd_115';
                    } else {
                        teuiFieldId = 'd_114';
                    }
                    // rawValueFromState will be fetched in the common block below
                } else if (link.id === "BuildingToGasExhaust") {
                    valueToAssign = 0.0001;
                    teuiFieldId = null;
                }

                if (teuiFieldId) {
                    if (link.id === "TEDToGasExhaust") {
                        if (isPrimaryGasOrOil) {
                            rawValueFromState = teuiState.getValue(teuiFieldId); 
                            if (rawValueFromState !== null && rawValueFromState !== undefined && String(rawValueFromState).trim() !== "") {
                                const numericValue = parseFloat(String(rawValueFromState).replace(/,/g, ''));
                                valueToAssign = isNaN(numericValue) ? 0.0001 : Math.max(0.0001, numericValue);
                            }
                        } else {
                            valueToAssign = 0.0001;
                        }
                    } else if (link.id === "SHWToGasExhaust") {
                        if (isDhwGasOrOil) {
                            rawValueFromState = teuiState.getValue(teuiFieldId); 
                            if (rawValueFromState !== null && rawValueFromState !== undefined && String(rawValueFromState).trim() !== "") {
                                const numericValue = parseFloat(String(rawValueFromState).replace(/,/g, ''));
                                valueToAssign = isNaN(numericValue) ? 0.0001 : Math.max(0.0001, numericValue);
                            }
                        } else {
                            valueToAssign = 0.0001;
                        }
                    } else if (link.id !== "HeatPumpSourceToTED") { // Avoid re-fetching if already handled by HeatPumpSourceToTED
                        rawValueFromState = teuiState.getValue(teuiFieldId);
                        if (rawValueFromState !== null && rawValueFromState !== undefined && String(rawValueFromState).trim() !== "") {
                            const numericValue = parseFloat(String(rawValueFromState).replace(/,/g, ''));
                            valueToAssign = isNaN(numericValue) ? 0.0001 : Math.max(0.0001, numericValue);
                        }
                    } // Note: HeatPumpElecToTED will fall into the generic fetch if teuiFieldId was updated
                } 
                link.value = valueToAssign;
                if (link.id) { // Log only for links that have an ID we are trying to map
                    console.warn(`S16 LINK LOG: ID: ${link.id}, TEUI Field: ${teuiFieldId || 'N/A'}, Raw State Value: '${rawValueFromState}', Assigned Link Value: ${link.value}`);
                }
            });
            
            const gasExhaustNode = currentSankeyData.nodes.find(n => n.name === "GasExhaust");
            if (gasExhaustNode) gasExhaustNode.hidden = !(isPrimaryGasOrOil || isDhwGasOrOil);

        } else {
            console.warn("Section 16: TEUI.StateManager not available for data fetching. Sankey will show template defaults.");
            const gasExhaustNode = currentSankeyData.nodes.find(n => n.name === "GasExhaust");
            if (gasExhaustNode) gasExhaustNode.hidden = true;
        }

        sankeyInstance.updateSankeyConfig({
            showEmissions: showEmissions,
            nodeWidthMultiplier: nodeWidthMultiplier,
            nodePadding: nodePadding,
            isGasHeating: isPrimaryGasOrOil
        });

        const wrapper = document.getElementById('sankeySection16ContainerWrapper');
        if (wrapper && typeof sankeyInstance.resize === 'function') {
            sankeyInstance.resize(wrapper.clientWidth, parseFloat(getComputedStyle(wrapper).height));
        }
        sankeyInstance.render(currentSankeyData, isInitialPageLoad);
        console.log("Section 16: Sankey render call complete.");
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
            isActive = true;
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
        }
    };
})(); 

// Remove the custom teui-section-rendered listener for Section 16
// document.addEventListener('teui-section-rendered', function(event) { ... });

// The teui-rendering-complete listener is also likely not needed for S16 specific logic.
// document.addEventListener('teui-rendering-complete', function() { ... }); 