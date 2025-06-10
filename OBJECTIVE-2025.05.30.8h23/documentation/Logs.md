4011-MobileDetect.js:113 Desktop device detected
4011-Dependency.js:2001 [4011-Dependency.js] Module loaded.
4011-Section18.js:6 Section 18 (Notes) placeholder loaded.
4011-Section02.js:847 [Section02] Set default reference standard: OBC SB10 5.5-6 Z6
4011-FileHandler.js:62 [SAFARI DEBUG] Setting up S03 Excel import buttons. selectExcelBtn and locationFileInput FOUND.
index.html:741 🔍 DEBUG: StateManager functions available: {saveState: 'function', loadState: 'function', clear: 'function'}
index.html:749 🔍 DEBUG: localStorage content before initialize: State found
index.html:753 🔍 DEBUG: Saved state details: {fieldCount: 8, sampleFields: Array(5), sampleValues: Array(3)}
index.html:765 🔍 DEBUG: StateManager field count after initialize: 560
index.html:786 🔍 DEBUG: Field states after initialize: {user-modified: 8, imported: 0, default: 549, calculated: 3, total: 560}
index.html:797 🔍 DEBUG: About to render all sections
index.html:799 🔍 DEBUG: After renderAllSections, field count: 650
index.html:809 🔍 DEBUG: About to initialize Calculator
index.html:811 🔍 DEBUG: After Calculator.initialize, field count: 650
index.html:821 TEUI Calculator 4.011 initialization complete
4011-Dependency.js:1968 [DependencyGraph] DOMContentLoaded, attempting initialization...
4011-Dependency.js:1887 [DependencyGraph] Initializing graph instance and UI...
4011-StateManager.js:931 [StateManager] Exporting dependency graph data...
4011-StateManager.js:970 [StateManager] Exported 425 nodes and 744 links.
4011-Dependency.js:78 [DependencyGraph] Data loaded: 425 nodes, 744 links
4011-Dependency.js:695 [DependencyGraph] Calculating node sizes...
4011-Dependency.js:1935 [DependencyGraph] Applied Dagre layout on init.
index.html:815 🔍 DEBUG: About to run calculateAll
4011-Section17.js:67 [sect17] Could not find initializeGraphInstanceAndUI or initializeDependencyGraph function in window.TEUI to refresh a D3 graph. Graph may be stale.
calculateAll @ 4011-Section17.js:67
(anonymous) @ 4011-Calculator.js:505
calculateAll @ 4011-Calculator.js:501
(anonymous) @ index.html:816
setTimeout
(anonymous) @ index.html:814Understand this warningAI
index.html:817 🔍 DEBUG: After calculateAll, field count: 690
4011-Dependency.js:1736 [DependencyGraph] Fitted graph to container with scale 0.09809888951989876
// See what's actually saved
const saved = JSON.parse(localStorage.getItem('TEUI_Calculator_State'));
console.log("Actual saved data:", saved);

// Check the specific fields you changed (S02 project/firm name)
// Try these field IDs:
console.log("d_10:", TEUI.StateManager.getValue("d_10")); // Project name maybe?
console.log("d_11:", TEUI.StateManager.getValue("d_11")); // Firm name maybe?
console.log("c_3:", TEUI.StateManager.getValue("c_3"));   // Another possibility
VM2178:3 Actual saved data: {h_15: {…}, h_13: {…}, h_12: {…}, i_16: {…}, i_17: {…}, …}
VM2178:7 d_10: null
VM2178:8 d_11: null
VM2178:9 c_3: null
undefined
// Check the ACTUAL saved fields
const saved = JSON.parse(localStorage.getItem('TEUI_Calculator_State'));
Object.entries(saved).forEach(([fieldId, data]) => {
  console.log(`${fieldId}: "${data.value}" (${data.state})`);
  console.log(`StateManager has: "${TEUI.StateManager.getValue(fieldId)}"`);
});
VM2182:4 h_15: "1427.2" (user-modified)
VM2182:5 StateManager has: "1427.2"
VM2182:4 h_13: "100" (user-modified)
VM2182:5 StateManager has: "100"
VM2182:4 h_12: "2030" (user-modified)
VM2182:5 StateManager has: "2030"
VM2182:4 i_16: "Changed" (user-modified)
VM2182:5 StateManager has: "Changed"
VM2182:4 i_17: "Changed" (user-modified)
VM2182:5 StateManager has: "Changed"
VM2182:4 h_14: "Change Name" (user-modified)
VM2182:5 StateManager has: "Change Name"
VM2182:4 d_12: "B1-Detention" (user-modified)
VM2182:5 StateManager has: "B1-Detention"
VM2182:4 l_16: "$1.5000" (user-modified)
VM2182:5 StateManager has: "$1.5000"
undefined