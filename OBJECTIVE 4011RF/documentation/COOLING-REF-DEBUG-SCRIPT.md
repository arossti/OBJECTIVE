// ============================================================================
// REFERENCE MODE COOLING DIAGNOSTIC
// ============================================================================
// Paste this entire script into the browser console to diagnose Reference mode
// cooling calculation issues with capacitance (h_21) and indoor RH% (i_59)
// ============================================================================

console.log("\n=== REFERENCE MODE COOLING DIAGNOSTIC ===\n");

const sm = window.TEUI?.StateManager;
const s03 = window.TEUI?.SectionModules?.sect03;
const s08 = window.TEUI?.SectionModules?.sect08;
const s11 = window.TEUI?.SectionModules?.sect11;
const s13 = window.TEUI?.SectionModules?.sect13;
const cooling = window.TEUI?.CoolingCalculations;

if (!sm) console.error("❌ StateManager not found!");
if (!s03) console.error("❌ S03 module not found!");
if (!s08) console.error("❌ S08 module not found!");
if (!s11) console.error("❌ S11 module not found!");
if (!s13) console.error("❌ S13 module not found!");
if (!cooling) console.error("❌ Cooling module not found!");

// ============================================================================
// PART 1: CAPACITANCE (h_21) DATA FLOW
// ============================================================================

console.log("\n📊 PART 1: CAPACITANCE (h_21) → Ground-Facing CDD (h_22) → Cooling\n");
console.log("Expected flow: h_21 (Static/Capacitance) → h_22 (Ground-Facing CDD) → k_94/k_95 (S11) → Cooling load\n");

// Step 1: Check h_21 input state
console.log("STEP 1: Capacitance Toggle (h_21) Input State");
console.log("─────────────────────────────────────────────────");

const h_21_target = sm?.getValue("h_21");
const h_21_ref = sm?.getValue("ref_h_21");
const h_21_s03_target = s03?.TargetState?.getValue("h_21");
const h_21_s03_ref = s03?.ReferenceState?.getValue("h_21");

console.log(`  Target h_21:              ${h_21_target} (StateManager)`);
console.log(`  Reference h_21:           ${h_21_ref} (StateManager)`);
console.log(`  Target h_21:              ${h_21_s03_target} (S03.TargetState)`);
console.log(`  Reference h_21:           ${h_21_s03_ref} (S03.ReferenceState)`);

if (h_21_ref === null || h_21_ref === undefined) {
  console.log(`  ⚠️  WARNING: ref_h_21 is NULL - capacitance not routed to Reference state!`);
}

// Step 2: Check h_22 calculated output (Ground-Facing CDD)
console.log("\nSTEP 2: Ground-Facing CDD (h_22) Calculated Output");
console.log("─────────────────────────────────────────────────");

const h_22_target = sm?.getValue("h_22");
const h_22_ref = sm?.getValue("ref_h_22");
const i_21_target = sm?.getValue("i_21"); // Capacitance slider
const i_21_ref = sm?.getValue("ref_i_21");

console.log(`  Target h_22:              ${h_22_target} CDD (StateManager)`);
console.log(`  Reference h_22:           ${h_22_ref} CDD (StateManager)`);
console.log(`  Target i_21:              ${i_21_target}% (Capacitance slider)`);
console.log(`  Reference i_21:           ${i_21_ref}% (Capacitance slider)`);

if (h_21_ref === "Capacitance" && h_22_ref === h_22_target) {
  console.log(`  ⚠️  WARNING: ref_h_22 equals target h_22 - capacitance may not be calculating for Reference!`);
}

// Step 3: Check S11 ground-facing heat gains (k_94, k_95)
console.log("\nSTEP 3: S11 Ground-Facing Heat Gains (k_94, k_95)");
console.log("─────────────────────────────────────────────────");

const k_94_target = sm?.getValue("k_94");
const k_94_ref = sm?.getValue("ref_k_94");
const k_95_target = sm?.getValue("k_95");
const k_95_ref = sm?.getValue("ref_k_95");

console.log(`  Target k_94:              ${k_94_target} kWh (Ground-facing heat gain)`);
console.log(`  Reference k_94:           ${k_94_ref} kWh (Ground-facing heat gain)`);
console.log(`  Target k_95:              ${k_95_target} kWh (Ground-facing cooling gain)`);
console.log(`  Reference k_95:           ${k_95_ref} kWh (Ground-facing cooling gain)`);

if (k_95_ref === k_95_target && h_21_ref === "Capacitance") {
  console.log(`  ⚠️  WARNING: ref_k_95 equals target k_95 - capacitance not affecting Reference cooling!`);
}

// ============================================================================
// PART 2: INDOOR RH% (i_59) DATA FLOW
// ============================================================================

console.log("\n\n📊 PART 2: INDOOR RH% (i_59) → Latent Load Factor → Cooling\n");
console.log("Expected flow: i_59 (RH%) → Cooling.js latent load → m_129 cooling demand\n");

// Step 1: Check i_59 input state
console.log("STEP 1: Indoor RH% (i_59) Input State");
console.log("─────────────────────────────────────────────────");

const i_59_target = sm?.getValue("i_59");
const i_59_ref = sm?.getValue("ref_i_59");
const i_59_s08_target = s08?.TargetState?.getValue("i_59");
const i_59_s08_ref = s08?.ReferenceState?.getValue("i_59");

console.log(`  Target i_59:              ${i_59_target}% (StateManager)`);
console.log(`  Reference i_59:           ${i_59_ref}% (StateManager)`);
console.log(`  Target i_59:              ${i_59_s08_target}% (S08.TargetState)`);
console.log(`  Reference i_59:           ${i_59_s08_ref}% (S08.ReferenceState)`);

if (i_59_ref === null || i_59_ref === undefined) {
  console.log(`  ⚠️  WARNING: ref_i_59 is NULL - RH% not routed to Reference state!`);
}

// Step 2: Check Cooling.js inputs
console.log("\nSTEP 2: Cooling.js Input Values (Mode-Aware Reads)");
console.log("─────────────────────────────────────────────────");

// Get cooling debug info if available
const coolingDebug = cooling?.getDebugInfo ? cooling.getDebugInfo() : null;

if (coolingDebug) {
  console.log(`  Current mode:             ${coolingDebug.currentMode}`);
  console.log(`  Indoor RH (state):        ${coolingDebug.indoorRH} (decimal)`);
  console.log(`  Cooling setpoint:         ${coolingDebug.coolingSetTemp}°C`);
  console.log(`  CDD:                      ${coolingDebug.coolingDegreeDays}`);
  console.log(`  Building volume:          ${coolingDebug.buildingVolume} m³`);
  console.log(`  Building area:            ${coolingDebug.buildingArea} m²`);
} else {
  console.log(`  ⚠️  WARNING: Cooling.js getDebugInfo() not available`);
}

// Step 3: Check Cooling.js outputs
console.log("\nSTEP 3: Cooling.js Calculated Outputs");
console.log("─────────────────────────────────────────────────");

const latent_target = sm?.getValue("cooling_latentLoadFactor");
const latent_ref = sm?.getValue("ref_cooling_latentLoadFactor");
const freeCool_target = sm?.getValue("cooling_h_124");
const freeCool_ref = sm?.getValue("ref_cooling_h_124");

console.log(`  Target latent load:       ${latent_target} (factor)`);
console.log(`  Reference latent load:    ${latent_ref} (factor)`);
console.log(`  Target free cooling:      ${freeCool_target} kWh`);
console.log(`  Reference free cooling:   ${freeCool_ref} kWh`);

if (latent_ref === latent_target && i_59_ref !== i_59_target) {
  console.log(`  ⚠️  WARNING: Latent load identical despite different RH% - Cooling.js may not be reading ref_i_59!`);
}

// ============================================================================
// PART 3: FINAL COOLING OUTPUTS (S13)
// ============================================================================

console.log("\n\n📊 PART 3: S13 Final Cooling Outputs\n");

console.log("STEP 1: S13 Cooling Demand (d_129, m_129)");
console.log("─────────────────────────────────────────────────");

const d_129_target = sm?.getValue("d_129");
const d_129_ref = sm?.getValue("ref_d_129");
const m_129_target = sm?.getValue("m_129");
const m_129_ref = sm?.getValue("ref_m_129");

console.log(`  Target d_129:             ${d_129_target} kWh (Unmitigated cooling)`);
console.log(`  Reference d_129:          ${d_129_ref} kWh (Unmitigated cooling)`);
console.log(`  Target m_129:             ${m_129_target} kWh (Mitigated cooling)`);
console.log(`  Reference m_129:          ${m_129_ref} kWh (Mitigated cooling)`);

if (m_129_ref === "0" || m_129_ref === 0) {
  console.log(`  ℹ️  Note: m_129=0 may be correct if free cooling provides 100% capacity`);
}

console.log("\nSTEP 2: S13 Cooling System (d_116, d_117)");
console.log("─────────────────────────────────────────────────");

const d_116_target = sm?.getValue("d_116");
const d_116_ref = sm?.getValue("ref_d_116");
const d_117_target = sm?.getValue("d_117");
const d_117_ref = sm?.getValue("ref_d_117");

console.log(`  Target d_116:             ${d_116_target} (Cooling system)`);
console.log(`  Reference d_116:          ${d_116_ref} (Cooling system)`);
console.log(`  Target d_117:             ${d_117_target} kWh (Cooling load)`);
console.log(`  Reference d_117:          ${d_117_ref} kWh (Cooling load)`);

// ============================================================================
// PART 4: DIAGNOSTIC SUMMARY
// ============================================================================

console.log("\n\n🔍 DIAGNOSTIC SUMMARY\n");
console.log("═══════════════════════════════════════════════════\n");

// Check 1: Capacitance routing
let capacitanceOK = true;
if (h_21_ref === null || h_21_ref === undefined) {
  console.log("❌ ISSUE 1: Capacitance (h_21) not in Reference state");
  console.log("   Fix: Check S03 input routing for Reference mode\n");
  capacitanceOK = false;
} else if (h_21_ref === "Capacitance" && h_22_ref === h_22_target) {
  console.log("❌ ISSUE 2: Capacitance selected but ref_h_22 = target h_22");
  console.log("   Fix: Check S03 capacitance calculation for Reference mode\n");
  capacitanceOK = false;
} else if (h_21_ref === "Capacitance" && k_95_ref === k_95_target) {
  console.log("❌ ISSUE 3: Capacitance not affecting S11 ground-facing cooling (k_95)");
  console.log("   Fix: Check S11 reads ref_h_22 in Reference calculation\n");
  capacitanceOK = false;
} else {
  console.log("✅ Capacitance: Input routing appears correct");
}

// Check 2: RH% routing
let rhOK = true;
if (i_59_ref === null || i_59_ref === undefined) {
  console.log("❌ ISSUE 4: Indoor RH% (i_59) not in Reference state");
  console.log("   Fix: Check S08 input routing for Reference mode\n");
  rhOK = false;
} else if (latent_ref === latent_target && i_59_ref !== i_59_target) {
  console.log("❌ ISSUE 5: Different RH% but identical latent load factor");
  console.log("   Fix: Check Cooling.js reads ref_i_59 in Reference mode\n");
  rhOK = false;
} else {
  console.log("✅ Indoor RH%: Input routing appears correct");
}

// Check 3: Cooling calculations
if (d_129_ref === d_129_target && (h_21_ref !== h_21_target || i_59_ref !== i_59_target)) {
  console.log("❌ ISSUE 6: Different inputs but identical cooling demand (d_129)");
  console.log("   Fix: Check cooling calculation chain reads Reference values\n");
}

console.log("\n═══════════════════════════════════════════════════");
console.log("\n=== END DIAGNOSTIC ===\n");

// ============================================================================
// INSTRUCTIONS FOR USER
// ============================================================================

console.log("\n📋 INSTRUCTIONS:\n");
console.log("1. Set up test scenario:");
console.log("   - Switch to Reference mode");
console.log("   - Heating: Electricity");
console.log("   - Cooling: Cooling (enabled)");
console.log("   - Ventilation: Volume by Schedule");
console.log("");
console.log("2. Run this diagnostic");
console.log("");
console.log("3. Change capacitance (h_21) from Static → Capacitance");
console.log("");
console.log("4. Run diagnostic again - look for changes in:");
console.log("   - ref_h_22 (should change)");
console.log("   - ref_k_95 (should change)");
console.log("   - ref_d_129 / ref_m_129 (should change if cooling load > 0)");
console.log("");
console.log("5. Change indoor RH% (i_59) slider");
console.log("");
console.log("6. Run diagnostic again - look for changes in:");
console.log("   - ref_cooling_latentLoadFactor (should change)");
console.log("   - ref_d_129 / ref_m_129 (should change if cooling load > 0)");
console.log("");
