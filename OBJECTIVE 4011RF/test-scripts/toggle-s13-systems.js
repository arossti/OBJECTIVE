/**
 * TEST SCRIPT: Toggle S13 Reference Systems to Trigger Recalculation
 *
 * Purpose: Simulates user changing S13 heating and cooling systems in Reference mode
 *          to force recalculation and achieve correct e_10 value (~195-200 kWh/m²/yr)
 *
 * Usage: Run in browser console after page loads
 *
 * What it does:
 * 1. Switches to Reference mode
 * 2. Changes d_113 (heating) from "Heatpump" → "Electric" → "Heatpump"
 * 3. Changes d_116 (cooling) from "Cooling" → "No Cooling" → "Cooling"
 * 4. Each change triggers ModeManager.setValue() which runs calculateAll()
 * 5. Final e_10 should be ~195-200 (Excel parity)
 */

(function toggleS13Systems() {
  console.log("═══════════════════════════════════════════════════════════════");
  console.log("🔧 TEST SCRIPT: Toggle S13 Reference Systems");
  console.log("═══════════════════════════════════════════════════════════════");

  // Check if S13 ModeManager exists
  if (!window.TEUI?.sect13?.ModeManager) {
    console.error("❌ ERROR: S13 ModeManager not found!");
    console.log("Make sure page is fully loaded and S13 is initialized.");
    return;
  }

  const ModeManager = window.TEUI.sect13.ModeManager;

  // Step 1: Switch to Reference mode
  console.log("\n📍 Step 1: Switching to Reference mode...");
  ModeManager.switchMode("reference");
  console.log("✅ Reference mode active");

  // Wait a moment for mode switch to complete
  setTimeout(() => {
    console.log("\n📍 Step 2: Reading initial e_10 value...");
    const e_10_initial = window.TEUI?.StateManager?.getValue("ref_e_10");
    console.log(`   Initial ref_e_10: ${e_10_initial}`);

    // Step 3: Toggle heating system
    console.log("\n📍 Step 3: Toggling heating system...");
    console.log("   d_113: Heatpump → Electric");
    ModeManager.setValue("d_113", "Electric", "user");

    setTimeout(() => {
      console.log("   d_113: Electric → Heatpump");
      ModeManager.setValue("d_113", "Heatpump", "user");

      setTimeout(() => {
        console.log("   ✅ Heating system toggled back to Heatpump");

        // Step 4: Toggle cooling system
        console.log("\n📍 Step 4: Toggling cooling system...");
        console.log("   d_116: Cooling → No Cooling");
        ModeManager.setValue("d_116", "No Cooling", "user");

        setTimeout(() => {
          console.log("   d_116: No Cooling → Cooling");
          ModeManager.setValue("d_116", "Cooling", "user");

          setTimeout(() => {
            console.log("   ✅ Cooling system toggled back to Cooling");

            // Step 5: Read final e_10 value
            setTimeout(() => {
              console.log("\n📍 Step 5: Reading final e_10 value...");
              const e_10_final = window.TEUI?.StateManager?.getValue("ref_e_10");
              console.log(`   Final ref_e_10: ${e_10_final}`);

              // Calculate difference
              if (e_10_initial && e_10_final) {
                const diff = (parseFloat(e_10_final) - parseFloat(e_10_initial)).toFixed(1);
                console.log(`   Change: ${diff} kWh/m²/yr`);

                if (parseFloat(e_10_final) >= 195 && parseFloat(e_10_final) <= 200) {
                  console.log("\n✅ SUCCESS: e_10 is now in Excel parity range (195-200)!");
                } else {
                  console.log("\n⚠️  e_10 is outside expected range (195-200)");
                }
              }

              console.log("\n═══════════════════════════════════════════════════════════════");
              console.log("🏁 TEST SCRIPT COMPLETE");
              console.log("═══════════════════════════════════════════════════════════════");
            }, 500); // Wait for final calculation
          }, 200); // Wait for cooling toggle
        }, 200);
      }, 200); // Wait for heating toggle back
    }, 200);
  }, 300); // Wait for mode switch
})();
