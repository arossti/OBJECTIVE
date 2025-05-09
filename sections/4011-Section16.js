// sections/4011-Section16.js
// Sankey Diagram Visualization Section

window.TEUI = window.TEUI || {};
window.TEUI.SectionModules = window.TEUI.SectionModules || {};

window.TEUI.sect16 = {}; // Section-specific namespace

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
            { name: "B.9 Walls Below Grade", color: "#8FAFA6" },// [20]
            { name: "B.10 Floor Slab", color: "#8FAFA6" },     // [21]
            { name: "B.12 TB Penalty", color: "#8FAFA6" },     // [22]
            { name: "B.18.3 Air Leakage", color: "#A4D3ED" },  // [23]
            { name: "V.2.3 Unrecovered Ventilation", color: "#A5D3ED" },// [24]
            { name: "W.2.W SHW Wasted", color: "#BE343D" },    // [25] // Note: Original HTML had W.2.2 - DOM has W.2.W - check mapping
            { name: "G.5 Unusable Gains", color: "#FFA500" },  // [26]
            { name: "GasExhaust", color: "#BE343D", hidden: true }, // [27]
            { name: "Total Envelope Losses", color: "#8FAFA6" },// [28]
            { name: "E1 Scope 1 Emissions", color: "#808080" },// [29]
            { name: "E2 Scope 2 Emissions", color: "#808080" },// [30]
            { name: "B.8.5 Skylights", color: "#F9DF4B" },    // [31]
            { name: "G.8.5 Skylights", color: "#F9DF4B" }     // [32]
        ],
        links: [
            { source: 1, target: 0, value: 0.001, id: "OccupantGains" },
            { source: 2, target: 0, value: 0.001, id: "EquipmentGains" },
            { source: 3, target: 0, value: 0.001, id: "SHWNetDemand" },
            { source: 4, target: 0, value: 0.001, id: "WinNorthGains" },
            { source: 5, target: 0, value: 0.001, id: "WinEastGains" },
            { source: 6, target: 0, value: 0.001, id: "WinSouthGains" },
            { source: 7, target: 0, value: 0.001, id: "WinWestGains" },
            { source: 8, target: 0, value: 0.001, id: "DoorGains" },
            { source: 32, target: 0, value: 0.001, id: "SkylightGains" },
            { source: 9, target: 11, value: 0.001, id: "HeatPumpSourceToTED" },
            { source: 10, target: 11, value: 0.001, id: "HeatPumpElecToTED" },
            { source: 11, target: 0, value: 0.001, id: "TEDToBuilding" },
            { source: 28, target: 12, value: 0.001, id: "TELToRoof" },
            { source: 28, target: 13, value: 0.001, id: "TELToWallAG" },
            { source: 28, target: 14, value: 0.001, id: "TELToFloorExp" },
            { source: 28, target: 15, value: 0.001, id: "TELToDoor" },
            { source: 28, target: 16, value: 0.001, id: "TELToWinN" },
            { source: 28, target: 17, value: 0.001, id: "TELToWinE" },
            { source: 28, target: 18, value: 0.001, id: "TELToWinS" },
            { source: 28, target: 19, value: 0.001, id: "TELToWinW" },
            { source: 28, target: 31, value: 0.001, id: "TELToSkylight" },
            { source: 28, target: 20, value: 0.001, id: "TELToWallBG" },
            { source: 28, target: 21, value: 0.001, id: "TELToSlab" },
            { source: 28, target: 22, value: 0.001, id: "TELToTB" },
            { source: 28, target: 23, value: 0.001, id: "TELToAirLeak" },
            { source: 0, target: 24, value: 0.001, id: "BuildingToVentLoss" },
            { source: 0, target: 25, value: 0.001, id: "BuildingToSHWWaste" },
            { source: 0, target: 26, value: 0.001, id: "BuildingToUnusableGains" },
            { source: 0, target: 27, value: 0.001, id: "BuildingToGasExhaust" }, // Conditional
            { source: 0, target: 28, value: 0.001, id: "BuildingToTEL" },
            { source: 11, target: 27, value: 0.001, id: "TEDToGasExhaust" },    // Conditional
            { source: 3, target: 27, value: 0.001, id: "SHWToGasExhaust" }       // Conditional
        ]
    };

    const TEUI_SankeyDiagram = {
        svg: null,
        tooltip: null,
        sankey: d3.sankey()
            .nodeWidth(20)
            .nodePadding(15)
            .extent([[1, 1], [1098, 698]]),

        _data: { nodes: [], links: [] },
        _showEmissions: false,
        _nodeWidthMultiplier: 1,
        _nodePadding: 15,
        _isGasHeating: false,
        _gridIntensity: 0,
        _gasIntensity: 1921, // Default, can be updated from TEUI state if available
        _gasEnergyDensity: 10.36, // Default, can be updated from TEUI state if available

        initialize(svgId, tooltipId, initialExtent) {
            this.svg = d3.select(svgId);
            this.tooltip = d3.select(tooltipId);
            if (initialExtent) this.sankey.extent(initialExtent);
            
            // Clear any previous elements
            this.svg.selectAll("*").remove();

            this.linkGroup = this.svg.append("g").attr("class", "links");
            this.nodeGroup = this.svg.append("g").attr("class", "nodes");
            this.labelGroup = this.svg.append("g").attr("class", "labels");
            console.log("TEUI_SankeyDiagram initialized with SVG:", svgId);
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
            if (config.gridIntensity !== undefined) this._gridIntensity = config.gridIntensity;
            if (config.gasIntensity !== undefined) this._gasIntensity = config.gasIntensity;
            if (config.gasEnergyDensity !== undefined) this._gasEnergyDensity = config.gasEnergyDensity;
        },

        render(sankeyData, isInitialLoad = false) {
            this._data = JSON.parse(JSON.stringify(sankeyData));

            if (!this._data.nodes || !this._data.links) {
                console.error("TEUI_SankeyDiagram Error: Invalid data structure for rendering.", this._data);
                return;
            }
            this._data.nodes.forEach((node, index) => { node.index = index; });

            if (this._showEmissions) {
                this.updateEmissionsFlows();
            }

            try {
                const visibleNodes = this._data.nodes.filter(n => !n.hidden);
                const visibleNodeNameSet = new Set(visibleNodes.map(n => n.name));

                const workingDataForD3 = {
                    nodes: visibleNodes,
                    links: this._data.links.map(l => ({
                        sourceOriginal: typeof l.source === 'object' ? l.source : this._data.nodes[l.source],
                        targetOriginal: typeof l.target === 'object' ? l.target : this._data.nodes[l.target],
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
                    })).filter(l => l.source !== -1 && l.target !== -1) // Ensure indices are valid for visibleNodes
                };
                
                if(workingDataForD3.nodes.length === 0) {
                    console.warn("TEUI_SankeyDiagram: No visible nodes to render.");
                    this.svg.selectAll("*").remove(); // Clear SVG if nothing to render
                    this.linkGroup = this.svg.append("g").attr("class", "links"); // Re-append groups
                    this.nodeGroup = this.svg.append("g").attr("class", "nodes");
                    this.labelGroup = this.svg.append("g").attr("class", "labels");
                    return;
                }

                const { nodes, links } = this.sankey(workingDataForD3);

                nodes.forEach(node => { node.displayColor = d3.color(node.color).darker(0.3); });

                const svgWidth = parseFloat(this.svg.style("width")) || (this.sankey.extent()[1][0] - this.sankey.extent()[0][0]);
                const maxX = d3.max(nodes, d => d.x0) || svgWidth;
                
                this.renderLinks(links, isInitialLoad, maxX);
                this.renderNodes(nodes, isInitialLoad, maxX);
                this.renderLabels(nodes, isInitialLoad, maxX, svgWidth);

            } catch (error) {
                console.error("Error rendering Sankey chart:", error, "\nData for D3:", workingDataForD3, "\nOriginal data:", this._data);
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
            const content = this.createNodeTooltip(d);
            this.showTooltip(content, event);
            d3.select(event.target).style("fill-opacity", 0.8);
        },

        showLinkTooltip(event, d) {
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
                    (isD3Node ? flow.source.name : (typeof flow.source === 'number' ? this._data.nodes[flow.source].name : flow.source.name)) :
                    (isD3Node ? flow.target.name : (typeof flow.target === 'number' ? this._data.nodes[flow.target].name : flow.target.name));
                const value = flow.value;
                const targetNodeForEmissionCheck = isD3Node ? flow.target.name : (typeof flow.target === 'number' ? this._data.nodes[flow.target].name : flow.target.name);
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
            if (!this.tooltip) return;
            const padding = 10;
            this.tooltip.style("display", "block")
                .style("left", `${event.pageX + padding}px`).style("top", `${event.pageY + padding}px`)
                .html(content);
            const tooltipRect = this.tooltip.node().getBoundingClientRect();
            if (tooltipRect.right > window.innerWidth) this.tooltip.style("left", `${event.pageX - tooltipRect.width - padding}px`);
            if (tooltipRect.bottom > window.innerHeight) this.tooltip.style("top", `${event.pageY - tooltipRect.height - padding}px`);
        },

        hideTooltip() { if (this.tooltip) this.tooltip.style("display", "none"); },

        getLinkColor(d) {
            if (d.target.name === "GasExhaust") return "#BE343D";
            if (d.source.name === "Building" || d.target.name === "Building") return d.source.name === "Building" ? d3.color(d.target.color).brighter(0.2) : d3.color(d.source.color);
            return d3.interpolateRgb(d.source.color, d.target.color)(0.5);
        },

        updateEmissionsFlows() {
            const scope1Node = this._data.nodes.find(n => n.name === "E1 Scope 1 Emissions");
            const scope2Node = this._data.nodes.find(n => n.name === "E2 Scope 2 Emissions");
            if (!scope1Node || !scope2Node) { console.warn("Emission nodes not found in S16 data."); return; }
            const scope1NodeIndex = this._data.nodes.indexOf(scope1Node);
            const scope2NodeIndex = this._data.nodes.indexOf(scope2Node);

            this._data.links = this._data.links.filter(link => {
                const targetIdx = typeof link.target === 'number' ? link.target : this._data.nodes.indexOf(link.target);
                return targetIdx !== scope1NodeIndex && targetIdx !== scope2NodeIndex;
            });

            if (this._showEmissions) {
                this.calculateElectricalEmissions(this._gridIntensity, scope2NodeIndex);
                this.calculateHeatingEmissions(this._gridIntensity, scope1NodeIndex, scope2NodeIndex); 
            }
        },

        _getLinkValueByName(sourceName, targetName) {
            const sourceNode = this._data.nodes.find(n => n.name === sourceName);
            const targetNode = this._data.nodes.find(n => n.name === targetName);
            if (!sourceNode || !targetNode) return 0;
            const sourceIdx = this._data.nodes.indexOf(sourceNode);
            const targetIdx = this._data.nodes.indexOf(targetNode);
            const link = this._data.links.find(l => {
                const lSourceIdx = typeof l.source === 'number' ? l.source : this._data.nodes.indexOf(l.source);
                const lTargetIdx = typeof l.target === 'number' ? l.target : this._data.nodes.indexOf(l.target);
                return lSourceIdx === sourceIdx && lTargetIdx === targetIdx && !l.isEmissions;
            });
            return link ? link.value : 0;
        },

        calculateElectricalEmissions(gridIntensity, scope2NodeIndex) {
            const g2Value = this._getLinkValueByName("G.2 Plug Light Equipment", "Building");
            if (g2Value > 0.1) {
                const g2Emissions = Math.round(g2Value * gridIntensity);
                if (g2Emissions > 0.1) this._data.links.push({ source: this._data.nodes.findIndex(n => n.name === "G.2 Plug Light Equipment"), target: scope2NodeIndex, value: g2Emissions, isEmissions: true });
            }
            if (!this._isGasHeating) {
                const m21dValue = this._getLinkValueByName("M.2.1.D Energy Input", "Thermal Energy Demand");
                if (m21dValue > 0.1) {
                    const m21dEmissions = Math.round(m21dValue * gridIntensity);
                    if (m21dEmissions > 0.1) this._data.links.push({ source: this._data.nodes.findIndex(n => n.name === "M.2.1.D Energy Input"), target: scope2NodeIndex, value: m21dEmissions, isEmissions: true });
                }
                const shwValue = this._getLinkValueByName("W.5.2 SHW Net Demand", "Building");
                if (shwValue > 0.1) {
                    const shwEmissions = Math.round(shwValue * gridIntensity);
                    if (shwEmissions > 0.1) this._data.links.push({ source: this._data.nodes.findIndex(n => n.name === "W.5.2 SHW Net Demand"), target: scope2NodeIndex, value: shwEmissions, isEmissions: true });
                }
            }
        },

        calculateHeatingEmissions(gridIntensity, scope1NodeIndex, scope2NodeIndex) {
            if (!this._isGasHeating) return;
            const heatingNodesToProcess = [
                { name: "Thermal Energy Demand", energyInputLinkSource: "M.2.1.D Energy Input" }, 
                { name: "W.5.2 SHW Net Demand", energyInputLinkSource: null } // SHW gas input needs TEUI state mapping
            ];
            const gasIntensity = this._gasIntensity;
            const gasEnergyDensity = this._gasEnergyDensity;

            heatingNodesToProcess.forEach(item => {
                const nodeIndex = this._data.nodes.findIndex(n => n.name === item.name);
                if (nodeIndex === -1) return;

                let gasEnergyKwh = 0;
                if (item.name === "Thermal Energy Demand" && item.energyInputLinkSource) {
                    // If it's TED and gas, M21D represents gas energy input in kWh_e - needs conversion based on efficiency if M21D is primary fuel kWh
                    // OR, if M21D is *already* the raw gas energy in kWh, this is fine.
                    // Current SANKEY3035 assumes M21D is the energy input (electric or gas). We need clarity from TEUI data model.
                    // For now, assume the value M21D is the gas energy equivalent needing conversion to volume.
                    gasEnergyKwh = this._getLinkValueByName(item.energyInputLinkSource, "Thermal Energy Demand");
                }
                else if (item.name === "W.5.2 SHW Net Demand") {
                     // Here, we need to get the GAS energy supplied for SHW. 
                     // The link "W.5.2 SHW Net Demand" -> "Building" is thermal demand.
                     // The actual gas input for SHW needs to be sourced from TEUI StateManager, similar to how heatingSystem gas input is handled.
                     // Placeholder - This value needs to be correctly mapped from TEUI state.
                     // For now, assuming the SHWNetDemand value itself is the gas energy if in gas mode.
                    gasEnergyKwh = this._getLinkValueByName("W.5.2 SHW Net Demand", "Building"); 
                }

                if (gasEnergyKwh > 0.1) {
                    const gasVolume = gasEnergyKwh / gasEnergyDensity; // m3
                    const emissionsValue = Math.round(gasVolume * gasIntensity); // gCO2e
                    if (emissionsValue > 0.1) {
                        this._data.links.push({ source: nodeIndex, target: scope1NodeIndex, value: emissionsValue, isEmissions: true });
                    }
                }
            });
        },

        resize(newWidth, newHeight = 700) {
            if (!this.svg || !this.sankey) { console.warn("Sankey not initialized for resize"); return; }
            const margin = { left: 20, right: 20, top: 1, bottom: 1 };
            const innerWidth = Math.max(100, newWidth - margin.left - margin.right); // Ensure positive width
            const innerHeight = Math.max(50, newHeight - margin.top - margin.bottom); // Ensure positive height
            
            this.svg.attr("width", newWidth).attr("height", newHeight)
                .attr("viewBox", `0 0 ${newWidth} ${newHeight}`).style("overflow", "visible");
            
            this.sankey.extent([[margin.left, margin.top], [innerWidth, innerHeight]]);
            this.sankey.size([innerWidth, innerHeight]);
            
            if (this._data.nodes && this._data.nodes.length > 0 && this._data.links) {
                 this.render(this._data, false);
            } else {
                console.log("Sankey resize: No data to render.");
            }
        }
    };

    // --- Private Variables (Section16 specific) ---
    let sankeyInstance = TEUI_SankeyDiagram; // Use the adapted object
    let isActive = false;
    // currentSankeyData will be built by fetchDataAndRenderSankey
    let showEmissions = false;
    let nodeWidthMultiplier = 1;
    let nodePadding = 15;

    // --- Section Structure & Layout (already defined from previous step) ---
    function getFields() {
        return {};
    }

    function getDropdownOptions() {
        return {};
    }

    function getLayout() {
        const sectionId = "section16";
        let layout = {
            id: sectionId,
            rows: [
                {
                    id: "S16-Header-Row",
                    cells: [
                        {},
                        {},
                        {
                            content: `<h3>Energy Flow Sankey Diagram (Section 16)</h3>
                                      <p>Visualizing energy balance and flows. Activate to load and render.</p>`,
                            colspan: 10
                        }
                    ]
                },
                {
                    id: "S16-Controls-Row",
                    cells: [
                        {},
                        {},
                        {
                            content: `
                                <div id="s16ControlsContainer" style="padding: 10px 0; margin-bottom: 10px; border-bottom: 1px solid #eee; display: flex; align-items: center; gap: 10px;">
                                    <button id="s16ActivateBtn" class="teui-button">Activate/Refresh Sankey</button>
                                    <button id="s16ToggleEmissionsBtn" class="teui-button" style="display: none;">Show Emissions</button>
                                    <button id="s16ToggleSpacingBtn" class="teui-button" style="display: none;">Expand Nodes</button>
                                    <div id="s16WidthToggleContainer" class="s16-width-toggle" style="display: none; align-items: center; gap: 5px;">
                                        <label for="s16WidthMultiplierSlider">Node Width:</label>
                                        <input type="range" id="s16WidthMultiplierSlider" min="50" max="400" value="100" step="10" style="width: 100px; vertical-align: middle;">
                                        <span id="s16WidthValueText" style="margin-left: 5px; vertical-align: middle;">100%</span>
                                    </div>
                                </div>
                            `,
                            colspan: 10
                        }
                    ]
                },
                {
                    id: "S16-Diagram-Row",
                    cells: [
                        {},
                        {},
                        {
                            content: `
                                <div id="sankeySection16ContainerWrapper" style="width: 100%; min-height: 700px; background: #f9f9f9; position: relative; border: 1px solid #ccc;">
                                    <svg id="sankeySection16Container" style="width: 100%; height: 100%; display: block;"></svg>
                                    <div id="sankeySection16Tooltip" class="tooltip" style="display: none; position: absolute;"></div>
                                    <div id="s16LoadingPlaceholder" style="position: absolute; top: 50%; left: 50%; transform: translate(-50%, -50%); font-style: italic; color: #777; text-align: center;">Sankey diagram not active.<br>Click 'Activate/Refresh Sankey' to load.</div>
                                </div>
                            `,
                            colspan: 10
                        }
                    ]
                }
            ]
        };
        return { rows: layout.rows };
    }

    // --- Event Handling & Initialization ---
    function initializeEventHandlers() {
        console.log("Section 16: Initializing event handlers.");
        const activateBtn = document.getElementById('s16ActivateBtn');
        const emissionsBtn = document.getElementById('s16ToggleEmissionsBtn');
        const spacingBtn = document.getElementById('s16ToggleSpacingBtn');
        const widthSlider = document.getElementById('s16WidthMultiplierSlider');
        const widthToggleContainer = document.getElementById('s16WidthToggleContainer');
        const loadingPlaceholder = document.getElementById('s16LoadingPlaceholder');

        if (activateBtn) {
            activateBtn.addEventListener('click', function() {
                isActive = true;
                if (loadingPlaceholder) loadingPlaceholder.style.display = 'none';
                if (emissionsBtn) emissionsBtn.style.display = 'inline-flex';
                if (spacingBtn) spacingBtn.style.display = 'inline-flex';
                if (widthToggleContainer) widthToggleContainer.style.display = 'inline-flex';
                console.log("Section 16: Activate button clicked.");
                fetchDataAndRenderSankey(false);
            });
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
            if (isActive && sankeyInstance && typeof sankeyInstance.resize === 'function') {
                const wrapper = document.getElementById('sankeySection16ContainerWrapper');
                if (wrapper) {
                    sankeyInstance.resize(wrapper.clientWidth, parseFloat(getComputedStyle(wrapper).height));
                }
            }
        });
    }

    function onSectionRendered() {
        console.log("Section 16: Rendered.");
        
        const emissionsBtn = document.getElementById('s16ToggleEmissionsBtn');
        const spacingBtn = document.getElementById('s16ToggleSpacingBtn');
        const widthToggleContainer = document.getElementById('s16WidthToggleContainer');
        if (emissionsBtn) emissionsBtn.style.display = 'none';
        if (spacingBtn) spacingBtn.style.display = 'none';
        if (widthToggleContainer) widthToggleContainer.style.display = 'none';
        
        const svgWrapper = document.getElementById('sankeySection16ContainerWrapper');
        if (sankeyInstance && svgWrapper) {
            sankeyInstance.initialize(
                '#sankeySection16Container', 
                '#sankeySection16Tooltip', 
                [[1,1], [svgWrapper.clientWidth > 50 ? svgWrapper.clientWidth - 2 : 1098, svgWrapper.clientHeight > 50 ? svgWrapper.clientHeight -2 : 698]]
            );
            console.log("Section 16: TEUI_SankeyDiagram object re-initialized for section render.");
        } else {
            console.error("Section 16: Sankey instance or SVG wrapper not found for initialization.");
        }

        // Add StateManager listeners for dynamic updates when active.
        // Example: if (window.TEUI && window.TEUI.StateManager) {
        //     window.TEUI.StateManager.addListener('d_27', handleStateChange); // Electricity use
        //     // ... add more listeners for relevant fields ...
        // }
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
        console.log("Section 16: Fetching data and rendering Sankey...");
        const loadingPlaceholder = document.getElementById('s16LoadingPlaceholder');
        if (loadingPlaceholder) loadingPlaceholder.style.display = 'none';

        let currentSankeyData = JSON.parse(JSON.stringify(SANKEY_STRUCTURE_TEMPLATE));

        // TODO: Full data mapping implementation needed here.
        // For now, we'll try to map a few key known values if StateManager is available.
        if (window.TEUI && window.TEUI.StateManager && window.TEUI.StateManager.getValue) {
            const teuiState = window.TEUI.StateManager;
            
            // Example Mapping (illustrative - needs full implementation)
            const linkIdToTeuiField = {
                // Gains to Building
                "OccupantGains": "i_64",          // G.1.2 Occupant Gains -> REPORT!I64
                "EquipmentGains": "i_70",         // G.2 Plug Light Equipment -> REPORT!I70
                "SHWNetDemand": "j_52",           // W.5.2 SHW Net Demand -> REPORT!J52 (Net Demand AFTER DWHR)
                "WinNorthGains": "i_74",          // G.8.1 Windows N -> REPORT!I74
                "WinEastGains": "i_75",           // G.8.2 Windows E -> REPORT!I75
                "WinSouthGains": "i_76",          // G.8.3 Windows S -> REPORT!I76
                "WinWestGains": "i_77",           // G.8.4 Windows W -> REPORT!I77
                "DoorGains": "i_73",              // G.7.0 Doors -> REPORT!I73
                "SkylightGains": "i_78",          // G.8.5 Skylights -> REPORT!I78
                
                // Heat Pump / TED System
                "HeatPumpSourceToTED": "l_113",   // M.2.1.S Sink (Air/Ground) -> REPORT!L113 (M.1.4 in DOM)
                "HeatPumpElecToTED": "d_114",   // M.2.1.D Energy Input -> REPORT!D114
                "TEDToBuilding": "d_127",         // Thermal Energy Demand -> REPORT!D127

                // Losses from Building
                "BuildingToVentLoss": "m_121",       // V.2.3 Unrecovered Ventilation -> REPORT!M121
                "BuildingToSHWWaste": "j_53",       // W.2.W SHW Wasted -> REPORT!J53
                "BuildingToUnusableGains": "i_82",  // G.5 Unusable Gains -> REPORT!I82
                "BuildingToTEL": "d_131",           // Total Envelope Losses -> REPORT!D131 (T.5.1)

                // TEL Components (Source: Total Envelope Losses)
                "TELToRoof": "i_85",                // B.4 Roof -> REPORT!I85
                "TELToWallAG": "i_86",            // B.5 Walls Above Grade -> REPORT!I86
                "TELToFloorExp": "i_87",          // B.6 Floor Exposed -> REPORT!I87
                "TELToDoor": "i_88",                // B.7.0 Doors -> REPORT!I88
                "TELToWinN": "i_89",                // B.8.1 Windows N -> REPORT!I89
                "TELToWinE": "i_90",                // B.8.2 Windows E -> REPORT!I90
                "TELToWinS": "i_91",                // B.8.3 Windows S -> REPORT!I91
                "TELToWinW": "i_92",                // B.8.4 Windows W -> REPORT!I92
                "TELToSkylight": "i_93",          // B.8.5 Skylights -> REPORT!I93
                "TELToWallBG": "i_94",            // B.9 Walls Below Grade -> REPORT!I94
                "TELToSlab": "i_95",                // B.10 Floor Slab -> REPORT!I95
                "TELToTB": "i_97",                  // B.12 TB Penalty -> REPORT!I97
                "TELToAirLeak": "i_103"             // B.18.3 Air Leakage -> REPORT!I103
            };

            currentSankeyData.links.forEach(link => {
                const teuiFieldId = linkIdToTeuiField[link.id];
                if (teuiFieldId) {
                    const rawValue = teuiState.getValue(teuiFieldId);
                    if (rawValue !== null && rawValue !== undefined && rawValue !== "") {
                        link.value = parseFloat(String(rawValue).replace(/,/g, '')) || 0.001;
                    } else {
                        link.value = 0.001; // Default if TEUI value is missing/null
                    }
                } else if (!link.id.includes("GasExhaust")) { // GasExhaust is conditional, handle separately
                    console.warn(`Section 16: No TEUI mapping found for Sankey link ID: ${link.id}`);
                }
            });

            // Conditional GasExhaust flows - CONSULT ARCHITECT FOR CORRECT LOGIC
            const isGas = teuiState.getValue('heatingSystem') === 'Gas'; // Example
            const gasExhaustLinks = [
                currentSankeyData.links.find(l => l.id === "BuildingToGasExhaust"),
                currentSankeyData.links.find(l => l.id === "TEDToGasExhaust"),
                currentSankeyData.links.find(l => l.id === "SHWToGasExhaust")
            ].filter(Boolean);

            if (isGas) {
                // TODO: Determine correct values for these gas exhaust flows from TEUI StateManager
                // For example, for TEDToGasExhaust, it might be: GasInputToTED - TEDToBuilding
                // This is highly dependent on TEUI's energy balance calculations.
                // Placeholder: keep them minimal or map if specific fields exist.
                const tedToBuildingVal = parseFloat(teuiState.getValue(linkIdToTeuiField["TEDToBuilding"])) || 0;
                const heatPumpElecToTEDVal = parseFloat(teuiState.getValue(linkIdToTeuiField["HeatPumpElecToTED"])) || 0;
                const shwNetDemandVal = parseFloat(teuiState.getValue(linkIdToTeuiField["SHWNetDemand"])) || 0;
                // This is a simplified example for gas exhaust calculation, actual logic may differ.
                // const gasSystemEfficiency = parseFloat(teuiState.getValue('m_1_2_copHeat_or_AFUE')) || 0.9; // example hypothetical field
                
                const tedExhaustLink = currentSankeyData.links.find(l => l.id === "TEDToGasExhaust");
                if (tedExhaustLink) {
                     // Example: (Total Gas Input for Heating) - (Useful Heat Delivered)
                     // tedExhaustLink.value = (heatPumpElecToTEDVal / gasSystemEfficiency) - tedToBuildingVal;
                     // THIS NEEDS VERIFICATION!
                    tedExhaustLink.value = Math.max(0.001, (heatPumpElecToTEDVal * (1/0.90)) - tedToBuildingVal); // Simplified assumption
                }
                // Similar logic for SHWToGasExhaust
                 console.warn("Section 16: GasExhaust flow value mapping requires architect confirmation.");

            } else {
                gasExhaustLinks.forEach(link => { link.value = 0.001; }); // Hide if not gas
                const gasExhaustNode = currentSankeyData.nodes.find(n => n.name === "GasExhaust");
                if (gasExhaustNode) gasExhaustNode.hidden = true;
            }
             const gasExhaustNode = currentSankeyData.nodes.find(n => n.name === "GasExhaust");
             if(gasExhaustNode) gasExhaustNode.hidden = !isGas;


        } else {
            console.warn("Section 16: TEUI.StateManager not available for data fetching.");
        }

        sankeyInstance.updateSankeyConfig({
            showEmissions: showEmissions,
            nodeWidthMultiplier: nodeWidthMultiplier,
            nodePadding: nodePadding,
            isGasHeating: window.TEUI && window.TEUI.StateManager ? (window.TEUI.StateManager.getValue('heatingSystem') === 'Gas') : false,
            gridIntensity: window.TEUI && window.TEUI.StateManager ? (parseFloat(window.TEUI.StateManager.getValue('l_27')) || 0) : 0,
            gasIntensity: window.TEUI && window.TEUI.StateManager ? (parseFloat(window.TEUI.StateManager.getValue('gas_intensity_gCO2e_m3')) || 1921) : 1921, // Hypothetical global value
            gasEnergyDensity: window.TEUI && window.TEUI.StateManager ? (parseFloat(window.TEUI.StateManager.getValue('gas_energy_density_ekWh_m3')) || 10.36) : 10.36 // Hypothetical global value
        });

        const wrapper = document.getElementById('sankeySection16ContainerWrapper');
        if (wrapper && typeof sankeyInstance.resize === 'function') {
            sankeyInstance.resize(wrapper.clientWidth, parseFloat(getComputedStyle(wrapper).height));
        }
        sankeyInstance.render(currentSankeyData, isInitialPageLoad);
        console.log("Section 16: Sankey render call complete.");
    }

    function calculateAll() {}

    return {
        getFields: getFields,
        getDropdownOptions: getDropdownOptions,
        getLayout: getLayout,
        initializeEventHandlers: initializeEventHandlers,
        onSectionRendered: onSectionRendered,
        calculateAll: calculateAll,
        activateAndRender: function() {
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

document.addEventListener('teui-section-rendered', function(event) {
    if (event.detail && event.detail.sectionId === 'section16') {
        console.log("Section 16 received teui-section-rendered event.");
        if (window.TEUI.SectionModules.sect16 && typeof window.TEUI.SectionModules.sect16.onSectionRendered === 'function') {
            window.TEUI.SectionModules.sect16.onSectionRendered();
        }
    }
});

document.addEventListener('teui-rendering-complete', function() {
    // This might be too early if sect16 specific DOM isn't ready.
    // onSectionRendered is preferred for section-specific init.
}); 