 S09: UI refreshed for target mode
 S10: Section rendered - initializing Self-Contained State Module.
 S10: Simplified global StateManager listeners added
 S10: ModeManager exposed globally for cross-section integration.
 S11: Section rendered - initializing Self-Contained State Module.
 S11: ModeManager exposed globally for cross-section integration.
 [S11] calculateAll TRIGGERED. isReferenceMode: false
 S10: Global listener triggered by i_97, recalculating all.
 S10: Utilization factor dependency i_97 changed.
 S10: Global listener triggered by i_98, recalculating all.
 S10: Utilization factor dependency i_98 changed.
 [Section13] 🔗 Attaching StateManager listeners...
 [Section13] 🔗 Attaching CRITICAL upstream listeners...
 [Section13] ✅ ALL LISTENERS ATTACHED SUCCESSFULLY
 S13: Section rendered - initializing Pattern A Dual-State Module.
 [Section13] 🔗 Attaching StateManager listeners...
 [Section13] 🔗 Attaching CRITICAL upstream listeners...
 [Section13] ✅ ALL LISTENERS ATTACHED SUCCESSFULLY
 [Section13] 🚀 CALCULATEALL TRIGGERED - Running dual-engine calculations...
 [Section13] 🔄 Starting Reference Model calculations...
 [Section13] Running Reference Model calculations...
 [Section13] 🔥 REF HEATING: systemType="Gas", tedReference=0, hspf=7.1
 [Section13] 🧊 COOLING CALC: mode=REF, coolingSystemType="Cooling", heatingType="Gas", isCoolingActive=true, coolingDemand=0
 [S04] S13 space oil volume changed (Reference): ref_f_115
 [S04] calculateH28 DEBUG:
      Space heating fuel (d_113): 'Heatpump'
      Water heating fuel (d_51): 'Heatpump'
      Water gas volume (e_51): 0
      Space gas volume (h_115): 0
      Final H28 result: 0
 [S04] calculateH30 DEBUG:
      Space heating fuel (d_113): 'Heatpump'
      Water heating fuel (d_51): 'Heatpump'
      Water oil volume (k_54): 0
      Space oil volume (f_115): 0
      Final H30 result: 0
 [S04] Row 32 Subtotals - F32: 132938, G32: 4785.768, J32: 0, K32: 0
 [S04] Reference model calculations complete
 [S04] 🔄 Updating calculated display values for target mode
 [S04] Calculated display values updated for target mode
 [S04] S13 space gas volume changed (Reference): ref_h_115
 [S04] calculateH28 DEBUG:
      Space heating fuel (d_113): 'Heatpump'
      Water heating fuel (d_51): 'Heatpump'
      Water gas volume (e_51): 0
      Space gas volume (h_115): 0
      Final H28 result: 0
 [S04] calculateH30 DEBUG:
      Space heating fuel (d_113): 'Heatpump'
      Water heating fuel (d_51): 'Heatpump'
      Water oil volume (k_54): 0
      Space oil volume (f_115): 0
      Final H30 result: 0
 [S04] Row 32 Subtotals - F32: 132938, G32: 4785.768, J32: 0, K32: 0
 [S04] Reference model calculations complete
 [S04] 🔄 Updating calculated display values for target mode
 [S04] Calculated display values updated for target mode
 [Section13] Reference results stored with ref_ prefix for downstream sections
 [S13 DEBUG] Total Reference results stored: 34
 [Section13] Reference Model calculations complete
 [Section13] ✅ Reference Model complete
 [Section13] 🔄 Starting Target Model calculations...
 [Section13] Running Target Model calculations...
 [S13] TGT HEATING: Heatpump, HSPF=12.5
 [S13] TGT FUEL: Heatpump system
 [S04] S13 space oil volume changed: f_115
 [S04] calculateH30 DEBUG:
      Space heating fuel (d_113): 'Heatpump'
      Water heating fuel (d_51): 'Heatpump'
      Water oil volume (k_54): 0
      Space oil volume (f_115): 0
      Final H30 result: 0
 [S04] 🔄 Updating calculated display values for target mode
 [S04] Calculated display values updated for target mode
 [S04] S13 space gas volume changed: h_115
 [S04] calculateH28 DEBUG:
      Space heating fuel (d_113): 'Heatpump'
      Water heating fuel (d_51): 'Heatpump'
      Water gas volume (e_51): 0
      Space gas volume (h_115): 0
      Final H28 result: 0
 [S04] 🔄 Updating calculated display values for target mode
 [S04] Calculated display values updated for target mode
 [S13] FUEL STORED: Heatpump → Gas=0m³, Oil=0L
 [Section13] 🧊 COOLING CALC: mode=TGT, coolingSystemType="Cooling", heatingType="Heatpump", isCoolingActive=true, coolingDemand=0
 [Section13] 🧊 COOLING RESULTS: d_117=0, j_116=2.663540445486518, l_116=0, l_114=0
 S10: Global listener triggered by m_121, recalculating all.
 S10: Utilization factor dependency m_121 changed.
 [Section13] 🧊 COOLING CALC: mode=TGT, coolingSystemType="Cooling", heatingType="Heatpump", isCoolingActive=true, coolingDemand=0
 [Section13] 🧊 COOLING RESULTS: d_117=0, j_116=2.663540445486518, l_116=0, l_114=0
 [Section13] 🧊 COOLING CALC: mode=TGT, coolingSystemType="Cooling", heatingType="Heatpump", isCoolingActive=true, coolingDemand=0
 [Section13] 🧊 COOLING RESULTS: d_117=0, j_116=2.663540445486518, l_116=0, l_114=0
 [Section13] 🧊 COOLING CALC: mode=TGT, coolingSystemType="Cooling", heatingType="Heatpump", isCoolingActive=true, coolingDemand=0
 [Section13] 🧊 COOLING RESULTS: d_117=0, j_116=2.663540445486518, l_116=0, l_114=0
 [Section13] Target Model calculations complete
 [Section13] ✅ Target Model complete
 [Section13] 🎉 DUAL-ENGINE CALCULATIONS COMPLETE
 [Section13] 🔄 Updating calculated display values for target mode
 [Section13] Calculated display values updated for target mode
 [S13] Set up dropdown event handlers for 4 dropdowns
 [Section13] 🔄 Updating calculated display values for target mode
 [Section13] Calculated display values updated for target mode
 S13: Pattern A initialization complete.
 S14: Section rendered - initializing Pattern A Dual-State Module.
 [S14 DEBUG] 🔄 Running Reference Model calculations...
 [S14 DEBUG] ✅ Converted to numbers - ref_d_127 calculation: 59532.28501397147 + 119064.57002794294 + 23178.39 + 84594.73968 - 45879.580160000005
 [S14 DEBUG] ✅ ref_d_127 = 240490.4045619144 (should be numeric, not NaN)
 [S14 DEBUG] ✅ Stored ref_d_127 = 240490.4045619144 in StateManager
 [S14 DEBUG] 🔄 Continuing with other Reference calculations...
 [S14 DEBUG] ref_d_128 calculation: 59532.28501397147 + 119064.57002794294 + 23178.39 - 45879.580160000005 = 155895.6648819144
 [Section13] 📡 🔥 d_127 (TED) listener triggered - S14 energy demand changed!
 [Section13] 🚀 CALCULATEALL TRIGGERED - Running dual-engine calculations...
 [Section13] 🔄 Starting Reference Model calculations...
 [Section13] Running Reference Model calculations...
 [Section13] 🔥 REF HEATING: systemType="Gas", tedReference=240490.4045619144, hspf=7.1
 [Section13] 🧊 COOLING CALC: mode=REF, coolingSystemType="Cooling", heatingType="Gas", isCoolingActive=true, coolingDemand=0
 [S04] S13 space gas volume changed (Reference): ref_h_115
 [S04] calculateH28 DEBUG:
      Space heating fuel (d_113): 'Heatpump'
      Water heating fuel (d_51): 'Heatpump'
      Water gas volume (e_51): 0
      Space gas volume (h_115): 25792.621681887
      Final H28 result: 0
 [S04] calculateH30 DEBUG:
      Space heating fuel (d_113): 'Heatpump'
      Water heating fuel (d_51): 'Heatpump'
      Water oil volume (k_54): 0
      Space oil volume (f_115): 0
      Final H30 result: 0
 [S04] Row 32 Subtotals - F32: 132938, G32: 4785.768, J32: 0, K32: 0
 [S04] Reference model calculations complete
 [S04] 🔄 Updating calculated display values for target mode
 [S04] Calculated display values updated for target mode
 [Section13] Reference results stored with ref_ prefix for downstream sections
 [S13 DEBUG] Total Reference results stored: 34
 [Section13] Reference Model calculations complete
 [Section13] ✅ Reference Model complete
 [Section13] 🔄 Starting Target Model calculations...
 [Section13] Running Target Model calculations...
 [S13] TGT HEATING: Heatpump, HSPF=12.5
 [S13] TGT FUEL: Heatpump system
 [S13] FUEL STORED: Heatpump → Gas=0m³, Oil=0L
 [Section13] 🧊 COOLING CALC: mode=TGT, coolingSystemType="Cooling", heatingType="Heatpump", isCoolingActive=true, coolingDemand=0
 [Section13] 🧊 COOLING RESULTS: d_117=0, j_116=2.663540445486518, l_116=0, l_114=0
 [Section13] 🧊 COOLING CALC: mode=TGT, coolingSystemType="Cooling", heatingType="Heatpump", isCoolingActive=true, coolingDemand=0
 [Section13] 🧊 COOLING RESULTS: d_117=0, j_116=2.663540445486518, l_116=0, l_114=0
 [Section13] Target Model calculations complete
 [Section13] ✅ Target Model complete
 [Section13] 🎉 DUAL-ENGINE CALCULATIONS COMPLETE
 [Section13] 🔄 Updating calculated display values for target mode
 [Section13] Calculated display values updated for target mode
 [Section13] 📡 🔥 d_127 (TED) listener triggered - S14 energy demand changed!
 [Section13] 🚀 CALCULATEALL TRIGGERED - Running dual-engine calculations...
 [Section13] 🔄 Starting Reference Model calculations...
 [Section13] Running Reference Model calculations...
 [Section13] 🔥 REF HEATING: systemType="Gas", tedReference=240490.4045619144, hspf=7.1
 [Section13] 🧊 COOLING CALC: mode=REF, coolingSystemType="Cooling", heatingType="Gas", isCoolingActive=true, coolingDemand=0
 [Section13] Reference results stored with ref_ prefix for downstream sections
 [S13 DEBUG] Total Reference results stored: 34
 [Section13] Reference Model calculations complete
 [Section13] ✅ Reference Model complete
 [Section13] 🔄 Starting Target Model calculations...
 [Section13] Running Target Model calculations...
 [S13] TGT HEATING: Heatpump, HSPF=12.5
 [S13] TGT FUEL: Heatpump system
 [S13] FUEL STORED: Heatpump → Gas=0m³, Oil=0L
 [Section13] 🧊 COOLING CALC: mode=TGT, coolingSystemType="Cooling", heatingType="Heatpump", isCoolingActive=true, coolingDemand=0
 [Section13] 🧊 COOLING RESULTS: d_117=0, j_116=2.663540445486518, l_116=0, l_114=0
 [Section13] 🧊 COOLING CALC: mode=TGT, coolingSystemType="Cooling", heatingType="Heatpump", isCoolingActive=true, coolingDemand=0
 [Section13] 🧊 COOLING RESULTS: d_117=0, j_116=2.663540445486518, l_116=0, l_114=0
 [Section13] Target Model calculations complete
 [Section13] ✅ Target Model complete
 [Section13] 🎉 DUAL-ENGINE CALCULATIONS COMPLETE
 [Section13] 🔄 Updating calculated display values for target mode
 [Section13] Calculated display values updated for target mode
 [Section13] 🧊 COOLING CALC: mode=TGT, coolingSystemType="Cooling", heatingType="Heatpump", isCoolingActive=true, coolingDemand=10192.893604542265
 [Section13] 🧊 COOLING RESULTS: d_117=3826.8214105081656, j_116=2.663540445486518, l_116=0, l_114=6366.0721940341
 [Section13] 🧊 COOLING CALC: mode=TGT, coolingSystemType="Cooling", heatingType="Heatpump", isCoolingActive=true, coolingDemand=10192.893604542265
 [Section13] 🧊 COOLING RESULTS: d_117=3826.8214105081656, j_116=2.663540445486518, l_116=0, l_114=6366.0721940341
 S14: Pattern A initialization complete.
 [S15] Missing critical upstream Reference values: ref_g_101, ref_d_101, ref_i_104
calculateReferenceModel @ 4011-Section15.js:1448Understand this warningAI
 ✅ S15 Reference Model: All values converted to numbers for proper math
 ✅ S15 Reference Model: Additional fuel variables declared for cost calculations
 [S04] S15 reference electricity changed: ref_d_136
 [S04] Starting dual-engine Excel-compliant calculations
 [S04] Calculating Target model
 [S04] calculateH28 DEBUG:
      Space heating fuel (d_113): 'Heatpump'
      Water heating fuel (d_51): 'Heatpump'
      Water gas volume (e_51): 0
      Space gas volume (h_115): 0
      Final H28 result: 0
 [S04] calculateH30 DEBUG:
      Space heating fuel (d_113): 'Heatpump'
      Water heating fuel (d_51): 'Heatpump'
      Water oil volume (k_54): 0
      Space oil volume (f_115): 0
      Final H30 result: 0
 [S04] Row 32 Subtotals - F32: 132938, G32: 6779.838, J32: 0, K32: 0
 [S04] Target model calculations complete
 [S04] Calculating Reference model
 [S04] calculateH28 DEBUG:
      Space heating fuel (d_113): 'Heatpump'
      Water heating fuel (d_51): 'Heatpump'
      Water gas volume (e_51): 0
      Space gas volume (h_115): 25792.621681887
      Final H28 result: 0
 [S04] calculateH30 DEBUG:
      Space heating fuel (d_113): 'Heatpump'
      Water heating fuel (d_51): 'Heatpump'
      Water oil volume (k_54): 0
      Space oil volume (f_115): 0
      Final H30 result: 0
 [S04] Row 32 Subtotals - F32: 132938, G32: 4785.768, J32: 197441.05968, K32: 7107.87814848
 🔵 [S01] REFERENCE ENERGY LISTENER: ref_j_32 changed from 0 to 197441.05968 → will update REFERENCE COLUMN E
 🚀 [S01] =================================
 🚀 [S01] PURE DISPLAY CONSUMER TRIGGERED
 🚀 [S01] =================================
 🎯 [S01] PURE DISPLAY CONSUMER: Starting Excel-compliant calculations...
 🔵 [S01] Upstream Reference: refEnergy=197441.05968 (from ref_j_32), refEmissions=0, refEmbodiedCarbon=350
 🟢 [S01] Upstream Target: targetEnergy=0 (from j_32), targetEmissions=0, embodiedCarbon=345.82
 🟡 [S01] Upstream Actual: actualEnergy=132938, actualEmissions=6779.838
 🎯 [S01] Building: area=1427.2, serviceLife=50, useType=Utility Bills
 🔵 [S01] CALCULATED Reference COLUMN E: e_10=138.3, e_8=0, e_6=7
 🟢 [S01] CALCULATED Target COLUMN H: h_10=0, h_8=0, h_6=6.9
 🟡 [S01] CALCULATED Actual COLUMN K: k_10=93.1, k_8=4.8, k_6=11.7
 ✅ [S01] PURE DISPLAY CONSUMER: All values calculated and displayed
 ✅ [S01] PURE DISPLAY CONSUMER COMPLETE
 🚀 [S01] =================================
 📡 [S01] Listener triggered: ref_k_32 changed from 0 to 7107.87814848
 🚀 [S01] =================================
 🚀 [S01] PURE DISPLAY CONSUMER TRIGGERED
 🚀 [S01] =================================
 🎯 [S01] PURE DISPLAY CONSUMER: Starting Excel-compliant calculations...
 🔵 [S01] Upstream Reference: refEnergy=197441.05968 (from ref_j_32), refEmissions=7107.87814848, refEmbodiedCarbon=350
 🟢 [S01] Upstream Target: targetEnergy=0 (from j_32), targetEmissions=0, embodiedCarbon=345.82
 🟡 [S01] Upstream Actual: actualEnergy=132938, actualEmissions=6779.838
 🎯 [S01] Building: area=1427.2, serviceLife=50, useType=Utility Bills
 🔵 [S01] CALCULATED Reference COLUMN E: e_10=138.3, e_8=5, e_6=12
 🟢 [S01] CALCULATED Target COLUMN H: h_10=0, h_8=0, h_6=6.9
 🟡 [S01] CALCULATED Actual COLUMN K: k_10=93.1, k_8=4.8, k_6=11.7
 ✅ [S01] PURE DISPLAY CONSUMER: All values calculated and displayed
 ✅ [S01] PURE DISPLAY CONSUMER COMPLETE
 🚀 [S01] =================================
 [S05] Running dual-engine calculations...
 [S05] Target model calculations complete
 [S05] Reference model calculations complete
 [S05] Dual-engine calculations complete
 🔄 [S05] updateCalculatedDisplayValues: mode=target
 [S05] Running dual-engine calculations...
 [S05] Target model calculations complete
 [S05] Reference model calculations complete
 [S05] Dual-engine calculations complete
 🔄 [S05] updateCalculatedDisplayValues: mode=target
 [S15] Missing critical upstream Reference values: ref_g_101, ref_d_101, ref_i_104
calculateReferenceModel @ 4011-Section15.js:1448Understand this warningAI
 ✅ S15 Reference Model: All values converted to numbers for proper math
 ✅ S15 Reference Model: Additional fuel variables declared for cost calculations
 📡 [S01] Listener triggered: ref_h_136 changed from null to 138.34154966367714
 🚀 [S01] =================================
 🚀 [S01] PURE DISPLAY CONSUMER TRIGGERED
 🚀 [S01] =================================
 🎯 [S01] PURE DISPLAY CONSUMER: Starting Excel-compliant calculations...
 🔵 [S01] Upstream Reference: refEnergy=197441.05968 (from ref_j_32), refEmissions=7107.87814848, refEmbodiedCarbon=350
 🟢 [S01] Upstream Target: targetEnergy=0 (from j_32), targetEmissions=0, embodiedCarbon=345.82
 🟡 [S01] Upstream Actual: actualEnergy=132938, actualEmissions=6779.838
 🎯 [S01] Building: area=1427.2, serviceLife=50, useType=Utility Bills
 🔵 [S01] CALCULATED Reference COLUMN E: e_10=138.3, e_8=5, e_6=12
 🟢 [S01] CALCULATED Target COLUMN H: h_10=0, h_8=0, h_6=6.9
 🟡 [S01] CALCULATED Actual COLUMN K: k_10=93.1, k_8=4.8, k_6=11.7
 ✅ [S01] PURE DISPLAY CONSUMER: All values calculated and displayed
 ✅ [S01] PURE DISPLAY CONSUMER COMPLETE
 🚀 [S01] =================================
 [S15] Missing critical upstream Reference values: ref_g_101, ref_d_101, ref_i_104
calculateReferenceModel @ 4011-Section15.js:1448Understand this warningAI
 ✅ S15 Reference Model: All values converted to numbers for proper math
 ✅ S15 Reference Model: Additional fuel variables declared for cost calculations
 [S15] Missing critical upstream Reference values: ref_g_101, ref_d_101, ref_i_104
calculateReferenceModel @ 4011-Section15.js:1448Understand this warningAI
 ✅ S15 Reference Model: All values converted to numbers for proper math
 ✅ S15 Reference Model: Additional fuel variables declared for cost calculations
 [S04] S15 target electricity changed: d_136
 [S04] Starting dual-engine Excel-compliant calculations
 [S04] Calculating Target model
 [S04] calculateH28 DEBUG:
      Space heating fuel (d_113): 'Heatpump'
      Water heating fuel (d_51): 'Heatpump'
      Water gas volume (e_51): 0
      Space gas volume (h_115): 0
      Final H28 result: 0
 [S04] calculateH30 DEBUG:
      Space heating fuel (d_113): 'Heatpump'
      Water heating fuel (d_51): 'Heatpump'
      Water oil volume (k_54): 0
      Space oil volume (f_115): 0
      Final H30 result: 0
 [S04] Row 32 Subtotals - F32: 132938, G32: 6779.838, J32: 0, K32: 0
 [S05] Running dual-engine calculations...
 [S05] Target model calculations complete
 [S05] Reference model calculations complete
 [S05] Dual-engine calculations complete
 🔄 [S05] updateCalculatedDisplayValues: mode=target
 [S05] Running dual-engine calculations...
 [S05] Target model calculations complete
 [S05] Reference model calculations complete
 [S05] Dual-engine calculations complete
 🔄 [S05] updateCalculatedDisplayValues: mode=target
 🔵 [S01] REFERENCE ENERGY LISTENER: ref_j_32 changed from 197441.05968 to 0 → will update REFERENCE COLUMN E
 🚀 [S01] =================================
 🚀 [S01] PURE DISPLAY CONSUMER TRIGGERED
 🚀 [S01] =================================
 🎯 [S01] PURE DISPLAY CONSUMER: Starting Excel-compliant calculations...
 🔵 [S01] Upstream Reference: refEnergy=0 (from ref_j_32), refEmissions=7107.87814848, refEmbodiedCarbon=350
 🟢 [S01] Upstream Target: targetEnergy=0 (from j_32), targetEmissions=0, embodiedCarbon=345.82
 🟡 [S01] Upstream Actual: actualEnergy=132938, actualEmissions=6779.838
 🎯 [S01] Building: area=1427.2, serviceLife=50, useType=Utility Bills
 🔵 [S01] CALCULATED Reference COLUMN E: e_10=0, e_8=5, e_6=12
 🟢 [S01] CALCULATED Target COLUMN H: h_10=0, h_8=0, h_6=6.9
 🟡 [S01] CALCULATED Actual COLUMN K: k_10=93.1, k_8=4.8, k_6=11.7
 ✅ [S01] PURE DISPLAY CONSUMER: All values calculated and displayed
 ✅ [S01] PURE DISPLAY CONSUMER COMPLETE
 🚀 [S01] =================================
 📡 [S01] Listener triggered: ref_k_32 changed from 7107.87814848 to 0
 🚀 [S01] =================================
 🚀 [S01] PURE DISPLAY CONSUMER TRIGGERED
 🚀 [S01] =================================
 🎯 [S01] PURE DISPLAY CONSUMER: Starting Excel-compliant calculations...
 🔵 [S01] Upstream Reference: refEnergy=0 (from ref_j_32), refEmissions=0, refEmbodiedCarbon=350
 🟢 [S01] Upstream Target: targetEnergy=0 (from j_32), targetEmissions=0, embodiedCarbon=345.82
 🟡 [S01] Upstream Actual: actualEnergy=132938, actualEmissions=6779.838
 🎯 [S01] Building: area=1427.2, serviceLife=50, useType=Utility Bills
 🔵 [S01] CALCULATED Reference COLUMN E: e_10=0, e_8=0, e_6=7
 🟢 [S01] CALCULATED Target COLUMN H: h_10=0, h_8=0, h_6=6.9
 🟡 [S01] CALCULATED Actual COLUMN K: k_10=93.1, k_8=4.8, k_6=11.7
 ✅ [S01] PURE DISPLAY CONSUMER: All values calculated and displayed
 ✅ [S01] PURE DISPLAY CONSUMER COMPLETE
 🚀 [S01] =================================
 [S05] Running dual-engine calculations...
 [S05] Target model calculations complete
 [S05] Reference model calculations complete
 [S05] Dual-engine calculations complete
 🔄 [S05] updateCalculatedDisplayValues: mode=target
 [S05] Running dual-engine calculations...
 [S05] Target model calculations complete
 [S05] Reference model calculations complete
 [S05] Dual-engine calculations complete
 🔄 [S05] updateCalculatedDisplayValues: mode=target
 [S15] Missing critical upstream Reference values: ref_g_101, ref_d_101, ref_i_104
calculateReferenceModel @ 4011-Section15.js:1448Understand this warningAI
 ✅ S15 Reference Model: All values converted to numbers for proper math
 ✅ S15 Reference Model: Additional fuel variables declared for cost calculations
 [S15] Missing critical upstream Reference values: ref_g_101, ref_d_101, ref_i_104
calculateReferenceModel @ 4011-Section15.js:1448Understand this warningAI
 ✅ S15 Reference Model: All values converted to numbers for proper math
 ✅ S15 Reference Model: Additional fuel variables declared for cost calculations
 [S04] Target model calculations complete
 [S04] Calculating Reference model
 [S04] calculateH28 DEBUG:
      Space heating fuel (d_113): 'Heatpump'
      Water heating fuel (d_51): 'Heatpump'
      Water gas volume (e_51): 0
      Space gas volume (h_115): 25792.621681887
      Final H28 result: 0
 [S04] calculateH30 DEBUG:
      Space heating fuel (d_113): 'Heatpump'
      Water heating fuel (d_51): 'Heatpump'
      Water oil volume (k_54): 0
      Space oil volume (f_115): 0
      Final H30 result: 0
 [S04] Row 32 Subtotals - F32: 132938, G32: 4785.768, J32: 197441.05968, K32: 7107.87814848
 [S05] Running dual-engine calculations...
 [S05] Target model calculations complete
 [S05] Reference model calculations complete
 [S05] Dual-engine calculations complete
 🔄 [S05] updateCalculatedDisplayValues: mode=target
 [S05] Running dual-engine calculations...
 [S05] Target model calculations complete
 [S05] Reference model calculations complete
 [S05] Dual-engine calculations complete
 🔄 [S05] updateCalculatedDisplayValues: mode=target
 🔵 [S01] REFERENCE ENERGY LISTENER: ref_j_32 changed from 0 to 197441.05968 → will update REFERENCE COLUMN E
 🚀 [S01] =================================
 🚀 [S01] PURE DISPLAY CONSUMER TRIGGERED
 🚀 [S01] =================================
 🎯 [S01] PURE DISPLAY CONSUMER: Starting Excel-compliant calculations...
 🔵 [S01] Upstream Reference: refEnergy=197441.05968 (from ref_j_32), refEmissions=0, refEmbodiedCarbon=350
 🟢 [S01] Upstream Target: targetEnergy=0 (from j_32), targetEmissions=0, embodiedCarbon=345.82
 🟡 [S01] Upstream Actual: actualEnergy=132938, actualEmissions=6779.838
 🎯 [S01] Building: area=1427.2, serviceLife=50, useType=Utility Bills
 🔵 [S01] CALCULATED Reference COLUMN E: e_10=138.3, e_8=0, e_6=7
 🟢 [S01] CALCULATED Target COLUMN H: h_10=0, h_8=0, h_6=6.9
 🟡 [S01] CALCULATED Actual COLUMN K: k_10=93.1, k_8=4.8, k_6=11.7
 ✅ [S01] PURE DISPLAY CONSUMER: All values calculated and displayed
 ✅ [S01] PURE DISPLAY CONSUMER COMPLETE
 🚀 [S01] =================================
 📡 [S01] Listener triggered: ref_k_32 changed from 0 to 7107.87814848
 🚀 [S01] =================================
 🚀 [S01] PURE DISPLAY CONSUMER TRIGGERED
 🚀 [S01] =================================
 🎯 [S01] PURE DISPLAY CONSUMER: Starting Excel-compliant calculations...
 🔵 [S01] Upstream Reference: refEnergy=197441.05968 (from ref_j_32), refEmissions=7107.87814848, refEmbodiedCarbon=350
 🟢 [S01] Upstream Target: targetEnergy=0 (from j_32), targetEmissions=0, embodiedCarbon=345.82
 🟡 [S01] Upstream Actual: actualEnergy=132938, actualEmissions=6779.838
 🎯 [S01] Building: area=1427.2, serviceLife=50, useType=Utility Bills
 🔵 [S01] CALCULATED Reference COLUMN E: e_10=138.3, e_8=5, e_6=12
 🟢 [S01] CALCULATED Target COLUMN H: h_10=0, h_8=0, h_6=6.9
 🟡 [S01] CALCULATED Actual COLUMN K: k_10=93.1, k_8=4.8, k_6=11.7
 ✅ [S01] PURE DISPLAY CONSUMER: All values calculated and displayed
 ✅ [S01] PURE DISPLAY CONSUMER COMPLETE
 🚀 [S01] =================================
 [S05] Running dual-engine calculations...
 [S05] Target model calculations complete
 [S05] Reference model calculations complete
 [S05] Dual-engine calculations complete
 🔄 [S05] updateCalculatedDisplayValues: mode=target
 [S05] Running dual-engine calculations...
 [S05] Target model calculations complete
 [S05] Reference model calculations complete
 [S05] Dual-engine calculations complete
 🔄 [S05] updateCalculatedDisplayValues: mode=target
 [S15] Missing critical upstream Reference values: ref_g_101, ref_d_101, ref_i_104
calculateReferenceModel @ 4011-Section15.js:1448Understand this warningAI
 ✅ S15 Reference Model: All values converted to numbers for proper math
 ✅ S15 Reference Model: Additional fuel variables declared for cost calculations
 [S04] Reference model calculations complete
 [S04] Dual-engine calculations completed successfully
 [S04] Reference model calculations complete
 [S04] Dual-engine calculations completed successfully
 S15: Target defaults set
 S15: Reference defaults set
 S15: Pattern A initialization complete.
 [S15] Missing critical upstream Reference values: ref_g_101, ref_d_101, ref_i_104
calculateReferenceModel @ 4011-Section15.js:1448Understand this warningAI
 ✅ S15 Reference Model: All values converted to numbers for proper math
 ✅ S15 Reference Model: Additional fuel variables declared for cost calculations
 Section03: Province selected: ON
 S03: Synced province change "ON" to StateManager for S04 listeners
 City dropdown updated for ON - selected: Alexandria
 [S15] Missing critical upstream Reference values: ref_g_101, ref_d_101, ref_i_104
calculateReferenceModel @ 4011-Section15.js:1448Understand this warningAI
 ✅ S15 Reference Model: All values converted to numbers for proper math
 ✅ S15 Reference Model: Additional fuel variables declared for cost calculations
 Section03: Province selected: ON
 S03: Synced province change "ON" to StateManager for S04 listeners
 City dropdown updated for ON - selected: Alexandria
 [S15] Missing critical upstream Reference values: ref_g_101, ref_d_101, ref_i_104
calculateReferenceModel @ 4011-Section15.js:1448Understand this warningAI
 ✅ S15 Reference Model: All values converted to numbers for proper math
 ✅ S15 Reference Model: Additional fuel variables declared for cost calculations
 TEUI Calculator 4.011 initialization complete
 [S04] S08 forestry offset changed: d_60
 [S04] 🔄 Updating calculated display values for target mode
 [S04] Calculated display values updated for target mode
 [S04] S08 forestry offset changed: d_60
 [S04] 🔄 Updating calculated display values for target mode
 [S04] Calculated display values updated for target mode
 [S04] S08 forestry offset changed: d_60
 [S04] 🔄 Updating calculated display values for target mode
 [S04] Calculated display values updated for target mode
 [S04] S08 forestry offset changed: d_60
 [S04] 🔄 Updating calculated display values for target mode
 [S04] Calculated display values updated for target mode
 [S04] S08 forestry offset changed: d_60
 [S04] 🔄 Updating calculated display values for target mode
 [S04] Calculated display values updated for target mode
 [S04] S08 forestry offset changed: d_60
 [S04] 🔄 Updating calculated display values for target mode
 [S04] Calculated display values updated for target mode
 [Section12] Running dual-engine calculations...
 [Section12] Running Reference Model calculations...
 [S15] Missing critical upstream Reference values: ref_g_101, ref_i_104
calculateReferenceModel @ 4011-Section15.js:1448Understand this warningAI
 ✅ S15 Reference Model: All values converted to numbers for proper math
 ✅ S15 Reference Model: Additional fuel variables declared for cost calculations
 [S15] Missing critical upstream Reference values: ref_g_101, ref_i_104
calculateReferenceModel @ 4011-Section15.js:1448Understand this warningAI
 ✅ S15 Reference Model: All values converted to numbers for proper math
 ✅ S15 Reference Model: Additional fuel variables declared for cost calculations
 [S15] Missing critical upstream Reference values: ref_g_101, ref_i_104
calculateReferenceModel @ 4011-Section15.js:1448Understand this warningAI
 ✅ S15 Reference Model: All values converted to numbers for proper math
 ✅ S15 Reference Model: Additional fuel variables declared for cost calculations
 [S15] Missing critical upstream Reference values: ref_g_101, ref_i_104
calculateReferenceModel @ 4011-Section15.js:1448Understand this warningAI
 ✅ S15 Reference Model: All values converted to numbers for proper math
 ✅ S15 Reference Model: Additional fuel variables declared for cost calculations
 [S05] Running dual-engine calculations...
 [S05] Target model calculations complete
 [S05] Reference model calculations complete
 [S05] Dual-engine calculations complete
 🔄 [S05] updateCalculatedDisplayValues: mode=target
 [S05] Running dual-engine calculations...
 [S05] Target model calculations complete
 [S05] Reference model calculations complete
 [S05] Dual-engine calculations complete
 🔄 [S05] updateCalculatedDisplayValues: mode=target
 [S15] Missing critical upstream Reference values: ref_i_104
calculateReferenceModel @ 4011-Section15.js:1448Understand this warningAI
 ✅ S15 Reference Model: All values converted to numbers for proper math
 ✅ S15 Reference Model: Additional fuel variables declared for cost calculations
 [S15] Missing critical upstream Reference values: ref_i_104
calculateReferenceModel @ 4011-Section15.js:1448Understand this warningAI
 ✅ S15 Reference Model: All values converted to numbers for proper math
 ✅ S15 Reference Model: Additional fuel variables declared for cost calculations
 [S15] Missing critical upstream Reference values: ref_i_104
calculateReferenceModel @ 4011-Section15.js:1448Understand this warningAI
 ✅ S15 Reference Model: All values converted to numbers for proper math
 ✅ S15 Reference Model: Additional fuel variables declared for cost calculations
 [S15] Missing critical upstream Reference values: ref_i_104
calculateReferenceModel @ 4011-Section15.js:1448Understand this warningAI
 ✅ S15 Reference Model: All values converted to numbers for proper math
 ✅ S15 Reference Model: Additional fuel variables declared for cost calculations
 ✅ S15 Reference Model: All values converted to numbers for proper math
 ✅ S15 Reference Model: Additional fuel variables declared for cost calculations
 [S04] S15 reference electricity changed: ref_d_136
 [S04] Starting dual-engine Excel-compliant calculations
 [S04] Calculating Target model
 [S04] calculateH28 DEBUG:
      Space heating fuel (d_113): 'Heatpump'
      Water heating fuel (d_51): 'Heatpump'
      Water gas volume (e_51): 0
      Space gas volume (h_115): 0
      Final H28 result: 0
 [S04] calculateH30 DEBUG:
      Space heating fuel (d_113): 'Heatpump'
      Water heating fuel (d_51): 'Heatpump'
      Water oil volume (k_54): 0
      Space oil volume (f_115): 0
      Final H30 result: 0
 [S04] Row 32 Subtotals - F32: 132938, G32: 6779.838, J32: 133574.3671495516, K32: 6812.292724627132
 🟢 [S01] TARGET ENERGY LISTENER: j_32 changed from 0 to 133574.3671495516 → will update TARGET COLUMN H
 🚀 [S01] =================================
 🚀 [S01] PURE DISPLAY CONSUMER TRIGGERED
 🚀 [S01] =================================
 🎯 [S01] PURE DISPLAY CONSUMER: Starting Excel-compliant calculations...
 🔵 [S01] Upstream Reference: refEnergy=197441.05968 (from ref_j_32), refEmissions=7107.87814848, refEmbodiedCarbon=350
 🟢 [S01] Upstream Target: targetEnergy=133574.3671495516 (from j_32), targetEmissions=0, embodiedCarbon=345.82
 🟡 [S01] Upstream Actual: actualEnergy=132938, actualEmissions=6779.838
 🎯 [S01] Building: area=1427.2, serviceLife=50, useType=Utility Bills
 🔵 [S01] CALCULATED Reference COLUMN E: e_10=138.3, e_8=5, e_6=12
 🟢 [S01] CALCULATED Target COLUMN H: h_10=93.6, h_8=0, h_6=6.9
 🟡 [S01] CALCULATED Actual COLUMN K: k_10=93.1, k_8=4.8, k_6=11.7
 ✅ [S01] PURE DISPLAY CONSUMER: All values calculated and displayed
 ✅ [S01] PURE DISPLAY CONSUMER COMPLETE
 🚀 [S01] =================================
 📡 [S01] Listener triggered: k_32 changed from 0 to 6812.292724627132
 🚀 [S01] =================================
 🚀 [S01] PURE DISPLAY CONSUMER TRIGGERED
 🚀 [S01] =================================
 🎯 [S01] PURE DISPLAY CONSUMER: Starting Excel-compliant calculations...
 🔵 [S01] Upstream Reference: refEnergy=197441.05968 (from ref_j_32), refEmissions=7107.87814848, refEmbodiedCarbon=350
 🟢 [S01] Upstream Target: targetEnergy=133574.3671495516 (from j_32), targetEmissions=6812.292724627132, embodiedCarbon=345.82
 🟡 [S01] Upstream Actual: actualEnergy=132938, actualEmissions=6779.838
 🎯 [S01] Building: area=1427.2, serviceLife=50, useType=Utility Bills
 🔵 [S01] CALCULATED Reference COLUMN E: e_10=138.3, e_8=5, e_6=12
 🟢 [S01] CALCULATED Target COLUMN H: h_10=93.6, h_8=4.8, h_6=11.7
 🟡 [S01] CALCULATED Actual COLUMN K: k_10=93.1, k_8=4.8, k_6=11.7
 ✅ [S01] PURE DISPLAY CONSUMER: All values calculated and displayed
 ✅ [S01] PURE DISPLAY CONSUMER COMPLETE
 🚀 [S01] =================================
 [S05] Running dual-engine calculations...
 [S05] Target model calculations complete
 [S05] Reference model calculations complete
 [S05] Dual-engine calculations complete
 🔄 [S05] updateCalculatedDisplayValues: mode=target
 [S05] Running dual-engine calculations...
 [S05] Target model calculations complete
 [S05] Reference model calculations complete
 [S05] Dual-engine calculations complete
 🔄 [S05] updateCalculatedDisplayValues: mode=target
 ✅ S15 Reference Model: All values converted to numbers for proper math
 ✅ S15 Reference Model: Additional fuel variables declared for cost calculations
 📡 [S01] Listener triggered: ref_h_136 changed from 138.34154966367714 to 219.66885487668162
 🚀 [S01] =================================
 🚀 [S01] PURE DISPLAY CONSUMER TRIGGERED
 🚀 [S01] =================================
 🎯 [S01] PURE DISPLAY CONSUMER: Starting Excel-compliant calculations...
 🔵 [S01] Upstream Reference: refEnergy=197441.05968 (from ref_j_32), refEmissions=7107.87814848, refEmbodiedCarbon=350
 🟢 [S01] Upstream Target: targetEnergy=133574.3671495516 (from j_32), targetEmissions=6812.292724627132, embodiedCarbon=345.82
 🟡 [S01] Upstream Actual: actualEnergy=132938, actualEmissions=6779.838
 🎯 [S01] Building: area=1427.2, serviceLife=50, useType=Utility Bills
 🔵 [S01] CALCULATED Reference COLUMN E: e_10=138.3, e_8=5, e_6=12
 🟢 [S01] CALCULATED Target COLUMN H: h_10=93.6, h_8=4.8, h_6=11.7
 🟡 [S01] CALCULATED Actual COLUMN K: k_10=93.1, k_8=4.8, k_6=11.7
 ✅ [S01] PURE DISPLAY CONSUMER: All values calculated and displayed
 ✅ [S01] PURE DISPLAY CONSUMER COMPLETE
 🚀 [S01] =================================
 ✅ S15 Reference Model: All values converted to numbers for proper math
 ✅ S15 Reference Model: Additional fuel variables declared for cost calculations
 ✅ S15 Reference Model: All values converted to numbers for proper math
 ✅ S15 Reference Model: Additional fuel variables declared for cost calculations
 ✅ S15 Reference Model: All values converted to numbers for proper math
 ✅ S15 Reference Model: Additional fuel variables declared for cost calculations
 ✅ S15 Reference Model: All values converted to numbers for proper math
 ✅ S15 Reference Model: Additional fuel variables declared for cost calculations
 ✅ S15 Reference Model: All values converted to numbers for proper math
 ✅ S15 Reference Model: Additional fuel variables declared for cost calculations
 [S04] Target model calculations complete
 [S04] Calculating Reference model
 [S04] calculateH28 DEBUG:
      Space heating fuel (d_113): 'Heatpump'
      Water heating fuel (d_51): 'Heatpump'
      Water gas volume (e_51): 0
      Space gas volume (h_115): 25792.621681887
      Final H28 result: 0
 [S04] calculateH30 DEBUG:
      Space heating fuel (d_113): 'Heatpump'
      Water heating fuel (d_51): 'Heatpump'
      Water oil volume (k_54): 0
      Space oil volume (f_115): 0
      Final H30 result: 0
 [S04] Row 32 Subtotals - F32: 132938, G32: 4785.768, J32: 313511.38968, K32: 11286.41002848
 🔵 [S01] REFERENCE ENERGY LISTENER: ref_j_32 changed from 197441.05968 to 313511.38968 → will update REFERENCE COLUMN E
 🚀 [S01] =================================
 🚀 [S01] PURE DISPLAY CONSUMER TRIGGERED
 🚀 [S01] =================================
 🎯 [S01] PURE DISPLAY CONSUMER: Starting Excel-compliant calculations...
 🔵 [S01] Upstream Reference: refEnergy=313511.38968 (from ref_j_32), refEmissions=7107.87814848, refEmbodiedCarbon=350
 🟢 [S01] Upstream Target: targetEnergy=133574.3671495516 (from j_32), targetEmissions=6812.292724627132, embodiedCarbon=345.82
 🟡 [S01] Upstream Actual: actualEnergy=132938, actualEmissions=6779.838
 🎯 [S01] Building: area=1427.2, serviceLife=50, useType=Utility Bills
 🔵 [S01] CALCULATED Reference COLUMN E: e_10=219.7, e_8=5, e_6=12
 🟢 [S01] CALCULATED Target COLUMN H: h_10=93.6, h_8=4.8, h_6=11.7
 🟡 [S01] CALCULATED Actual COLUMN K: k_10=93.1, k_8=4.8, k_6=11.7
 ✅ [S01] PURE DISPLAY CONSUMER: All values calculated and displayed
 ✅ [S01] PURE DISPLAY CONSUMER COMPLETE
 🚀 [S01] =================================
 📡 [S01] Listener triggered: ref_k_32 changed from 7107.87814848 to 11286.41002848
 🚀 [S01] =================================
 🚀 [S01] PURE DISPLAY CONSUMER TRIGGERED
 🚀 [S01] =================================
 🎯 [S01] PURE DISPLAY CONSUMER: Starting Excel-compliant calculations...
 🔵 [S01] Upstream Reference: refEnergy=313511.38968 (from ref_j_32), refEmissions=11286.41002848, refEmbodiedCarbon=350
 🟢 [S01] Upstream Target: targetEnergy=133574.3671495516 (from j_32), targetEmissions=6812.292724627132, embodiedCarbon=345.82
 🟡 [S01] Upstream Actual: actualEnergy=132938, actualEmissions=6779.838
 🎯 [S01] Building: area=1427.2, serviceLife=50, useType=Utility Bills
 🔵 [S01] CALCULATED Reference COLUMN E: e_10=219.7, e_8=7.9, e_6=14.9
 🟢 [S01] CALCULATED Target COLUMN H: h_10=93.6, h_8=4.8, h_6=11.7
 🟡 [S01] CALCULATED Actual COLUMN K: k_10=93.1, k_8=4.8, k_6=11.7
 ✅ [S01] PURE DISPLAY CONSUMER: All values calculated and displayed
 ✅ [S01] PURE DISPLAY CONSUMER COMPLETE
 🚀 [S01] =================================
 [S05] Running dual-engine calculations...
 [S05] Target model calculations complete
 [S05] Reference model calculations complete
 [S05] Dual-engine calculations complete
 🔄 [S05] updateCalculatedDisplayValues: mode=target
 [S05] Running dual-engine calculations...
 [S05] Target model calculations complete
 [S05] Reference model calculations complete
 [S05] Dual-engine calculations complete
 🔄 [S05] updateCalculatedDisplayValues: mode=target
 ✅ S15 Reference Model: All values converted to numbers for proper math
 ✅ S15 Reference Model: Additional fuel variables declared for cost calculations
 ✅ S15 Reference Model: All values converted to numbers for proper math
 ✅ S15 Reference Model: Additional fuel variables declared for cost calculations
 [S04] Reference model calculations complete
 [S04] Dual-engine calculations completed successfully
 ✅ S15 Reference Model: All values converted to numbers for proper math
 ✅ S15 Reference Model: Additional fuel variables declared for cost calculations
 [Section12] Reference results stored with ref_ prefix for downstream sections
 [Section12] Reference Model calculations complete
 [Section12] Running Target Model calculations...
 ✅ S15 Reference Model: All values converted to numbers for proper math
 ✅ S15 Reference Model: Additional fuel variables declared for cost calculations
 ✅ S15 Reference Model: All values converted to numbers for proper math
 ✅ S15 Reference Model: Additional fuel variables declared for cost calculations
 ✅ S15 Reference Model: All values converted to numbers for proper math
 ✅ S15 Reference Model: Additional fuel variables declared for cost calculations
 ✅ S15 Reference Model: All values converted to numbers for proper math
 ✅ S15 Reference Model: Additional fuel variables declared for cost calculations
 [S05] Running dual-engine calculations...
 [S05] Target model calculations complete
 [S05] Reference model calculations complete
 [S05] Dual-engine calculations complete
 🔄 [S05] updateCalculatedDisplayValues: mode=target
 [S05] Running dual-engine calculations...
 [S05] Target model calculations complete
 [S05] Reference model calculations complete
 [S05] Dual-engine calculations complete
 🔄 [S05] updateCalculatedDisplayValues: mode=target
 ✅ S15 Reference Model: All values converted to numbers for proper math
 ✅ S15 Reference Model: Additional fuel variables declared for cost calculations
 ✅ S15 Reference Model: All values converted to numbers for proper math
 ✅ S15 Reference Model: Additional fuel variables declared for cost calculations
 ✅ S15 Reference Model: All values converted to numbers for proper math
 ✅ S15 Reference Model: Additional fuel variables declared for cost calculations
 ✅ S15 Reference Model: All values converted to numbers for proper math
 ✅ S15 Reference Model: Additional fuel variables declared for cost calculations
 S10: Global listener triggered by i_103, recalculating all.
 S10: Utilization factor dependency i_103 changed.
 [S14 DEBUG] 🔄 Running Reference Model calculations...
 [S14 DEBUG] ✅ Converted to numbers - ref_d_127 calculation: 59532.28501397147 + 119064.57002794294 + 36440.079840319355 + 84594.73968 - 45879.580160000005
 [S14 DEBUG] ✅ ref_d_127 = 253752.09440223372 (should be numeric, not NaN)
 [S14 DEBUG] ✅ Stored ref_d_127 = 253752.09440223372 in StateManager
 [S14 DEBUG] 🔄 Continuing with other Reference calculations...
 [S14 DEBUG] ref_d_128 calculation: 59532.28501397147 + 119064.57002794294 + 36440.079840319355 - 45879.580160000005 = 169157.35472223375
 [Section13] 📡 🔥 d_127 (TED) listener triggered - S14 energy demand changed!
 [Section13] 🚀 CALCULATEALL TRIGGERED - Running dual-engine calculations...
 [Section13] 🔄 Starting Reference Model calculations...
 [Section13] Running Reference Model calculations...
 [Section13] 🔥 REF HEATING: systemType="Gas", tedReference=253752.09440223372, hspf=7.1
 [Section13] 🧊 COOLING CALC: mode=REF, coolingSystemType="Cooling", heatingType="Gas", isCoolingActive=true, coolingDemand=10192.893604542265
 ✅ S15 Reference Model: All values converted to numbers for proper math
 ✅ S15 Reference Model: Additional fuel variables declared for cost calculations
 ✅ S15 Reference Model: All values converted to numbers for proper math
 ✅ S15 Reference Model: Additional fuel variables declared for cost calculations
 [S04] S13 space gas volume changed (Reference): ref_h_115
 [S04] calculateH28 DEBUG:
      Space heating fuel (d_113): 'Heatpump'
      Water heating fuel (d_51): 'Heatpump'
      Water gas volume (e_51): 0
      Space gas volume (h_115): 27214.939339578905
      Final H28 result: 0
 [S04] calculateH30 DEBUG:
      Space heating fuel (d_113): 'Heatpump'
      Water heating fuel (d_51): 'Heatpump'
      Water oil volume (k_54): 0
      Space oil volume (f_115): 0
      Final H30 result: 0
 [S04] Row 32 Subtotals - F32: 132938, G32: 4785.768, J32: 313511.38968, K32: 11286.41002848
 [S04] Reference model calculations complete
 [S04] 🔄 Updating calculated display values for target mode
 [S04] Calculated display values updated for target mode
 ✅ S15 Reference Model: All values converted to numbers for proper math
 ✅ S15 Reference Model: Additional fuel variables declared for cost calculations
 ✅ S15 Reference Model: All values converted to numbers for proper math
 ✅ S15 Reference Model: Additional fuel variables declared for cost calculations
 [Section13] Reference results stored with ref_ prefix for downstream sections
 [S13 DEBUG] Total Reference results stored: 34
 [Section13] Reference Model calculations complete
 [Section13] ✅ Reference Model complete
 [Section13] 🔄 Starting Target Model calculations...
 [Section13] Running Target Model calculations...
 [S13] TGT HEATING: Heatpump, HSPF=12.5
 ✅ S15 Reference Model: All values converted to numbers for proper math
 ✅ S15 Reference Model: Additional fuel variables declared for cost calculations
 [S04] S15 target electricity changed: d_136
 [S04] Starting dual-engine Excel-compliant calculations
 [S04] Calculating Target model
 [S04] calculateH28 DEBUG:
      Space heating fuel (d_113): 'Heatpump'
      Water heating fuel (d_51): 'Heatpump'
      Water gas volume (e_51): 0
      Space gas volume (h_115): 0
      Final H28 result: 0
 [S04] calculateH30 DEBUG:
      Space heating fuel (d_113): 'Heatpump'
      Water heating fuel (d_51): 'Heatpump'
      Water oil volume (k_54): 0
      Space oil volume (f_115): 0
      Final H30 result: 0
 [S04] Row 32 Subtotals - F32: 132938, G32: 6779.838, J32: 133574.36633416289, K32: 6812.2926830423075
 🟢 [S01] TARGET ENERGY LISTENER: j_32 changed from 133574.3671495516 to 133574.36633416289 → will update TARGET COLUMN H
 🚀 [S01] =================================
 🚀 [S01] PURE DISPLAY CONSUMER TRIGGERED
 🚀 [S01] =================================
 🎯 [S01] PURE DISPLAY CONSUMER: Starting Excel-compliant calculations...
 🔵 [S01] Upstream Reference: refEnergy=313511.38968 (from ref_j_32), refEmissions=11286.41002848, refEmbodiedCarbon=350
 🟢 [S01] Upstream Target: targetEnergy=133574.36633416289 (from j_32), targetEmissions=6812.292724627132, embodiedCarbon=345.82
 🟡 [S01] Upstream Actual: actualEnergy=132938, actualEmissions=6779.838
 🎯 [S01] Building: area=1427.2, serviceLife=50, useType=Utility Bills
 🔵 [S01] CALCULATED Reference COLUMN E: e_10=219.7, e_8=7.9, e_6=14.9
 🟢 [S01] CALCULATED Target COLUMN H: h_10=93.6, h_8=4.8, h_6=11.7
 🟡 [S01] CALCULATED Actual COLUMN K: k_10=93.1, k_8=4.8, k_6=11.7
 ✅ [S01] PURE DISPLAY CONSUMER: All values calculated and displayed
 ✅ [S01] PURE DISPLAY CONSUMER COMPLETE
 🚀 [S01] =================================
 📡 [S01] Listener triggered: k_32 changed from 6812.292724627132 to 6812.2926830423075
 🚀 [S01] =================================
 🚀 [S01] PURE DISPLAY CONSUMER TRIGGERED
 🚀 [S01] =================================
 🎯 [S01] PURE DISPLAY CONSUMER: Starting Excel-compliant calculations...
 🔵 [S01] Upstream Reference: refEnergy=313511.38968 (from ref_j_32), refEmissions=11286.41002848, refEmbodiedCarbon=350
 🟢 [S01] Upstream Target: targetEnergy=133574.36633416289 (from j_32), targetEmissions=6812.2926830423075, embodiedCarbon=345.82
 🟡 [S01] Upstream Actual: actualEnergy=132938, actualEmissions=6779.838
 🎯 [S01] Building: area=1427.2, serviceLife=50, useType=Utility Bills
 🔵 [S01] CALCULATED Reference COLUMN E: e_10=219.7, e_8=7.9, e_6=14.9
 🟢 [S01] CALCULATED Target COLUMN H: h_10=93.6, h_8=4.8, h_6=11.7
 🟡 [S01] CALCULATED Actual COLUMN K: k_10=93.1, k_8=4.8, k_6=11.7
 ✅ [S01] PURE DISPLAY CONSUMER: All values calculated and displayed
 ✅ [S01] PURE DISPLAY CONSUMER COMPLETE
 🚀 [S01] =================================
 [S05] Running dual-engine calculations...
 [S05] Target model calculations complete
 [S05] Reference model calculations complete
 [S05] Dual-engine calculations complete
 🔄 [S05] updateCalculatedDisplayValues: mode=target
 [S05] Running dual-engine calculations...
 [S05] Target model calculations complete
 [S05] Reference model calculations complete
 [S05] Dual-engine calculations complete
 🔄 [S05] updateCalculatedDisplayValues: mode=target
 ✅ S15 Reference Model: All values converted to numbers for proper math
 ✅ S15 Reference Model: Additional fuel variables declared for cost calculations
 ✅ S15 Reference Model: All values converted to numbers for proper math
 ✅ S15 Reference Model: Additional fuel variables declared for cost calculations
 ✅ S15 Reference Model: All values converted to numbers for proper math
 ✅ S15 Reference Model: Additional fuel variables declared for cost calculations
 ✅ S15 Reference Model: All values converted to numbers for proper math
 ✅ S15 Reference Model: Additional fuel variables declared for cost calculations
 [S04] Target model calculations complete
 [S04] Calculating Reference model
 [S04] calculateH28 DEBUG:
      Space heating fuel (d_113): 'Heatpump'
      Water heating fuel (d_51): 'Heatpump'
      Water gas volume (e_51): 0
      Space gas volume (h_115): 27214.939339578905
      Final H28 result: 0
 [S04] calculateH30 DEBUG:
      Space heating fuel (d_113): 'Heatpump'
      Water heating fuel (d_51): 'Heatpump'
      Water oil volume (k_54): 0
      Space oil volume (f_115): 0
      Final H30 result: 0
 [S04] Row 32 Subtotals - F32: 132938, G32: 4785.768, J32: 313511.38968, K32: 11286.41002848
 [S04] Reference model calculations complete
 [S04] Dual-engine calculations completed successfully
 ✅ S15 Reference Model: All values converted to numbers for proper math
 ✅ S15 Reference Model: Additional fuel variables declared for cost calculations
 [S13] TGT FUEL: Heatpump system
 [S13] FUEL STORED: Heatpump → Gas=0m³, Oil=0L
 [Section13] 🧊 COOLING CALC: mode=TGT, coolingSystemType="Cooling", heatingType="Heatpump", isCoolingActive=true, coolingDemand=10192.893604542265
 [Section13] 🧊 COOLING RESULTS: d_117=3826.8214105081656, j_116=2.663540445486518, l_116=0, l_114=6366.0721940341
 [Section13] 🧊 COOLING CALC: mode=TGT, coolingSystemType="Cooling", heatingType="Heatpump", isCoolingActive=true, coolingDemand=10192.893604542265
 [Section13] 🧊 COOLING RESULTS: d_117=3826.8214105081656, j_116=2.663540445486518, l_116=0, l_114=6366.0721940341
 [Section13] Target Model calculations complete
 [Section13] ✅ Target Model complete
 [Section13] 🎉 DUAL-ENGINE CALCULATIONS COMPLETE
 [Section13] 🔄 Updating calculated display values for target mode
 [Section13] Calculated display values updated for target mode
 [Section13] 📡 🔥 d_127 (TED) listener triggered - S14 energy demand changed!
 [Section13] 🚀 CALCULATEALL TRIGGERED - Running dual-engine calculations...
 [Section13] 🔄 Starting Reference Model calculations...
 [Section13] Running Reference Model calculations...
 [Section13] 🔥 REF HEATING: systemType="Gas", tedReference=253752.09440223372, hspf=7.1
 [Section13] 🧊 COOLING CALC: mode=REF, coolingSystemType="Cooling", heatingType="Gas", isCoolingActive=true, coolingDemand=10192.893604542265
 [Section13] Reference results stored with ref_ prefix for downstream sections
 [S13 DEBUG] Total Reference results stored: 34
 [Section13] Reference Model calculations complete
 [Section13] ✅ Reference Model complete
 [Section13] 🔄 Starting Target Model calculations...
 [Section13] Running Target Model calculations...
 [S13] TGT HEATING: Heatpump, HSPF=12.5
 [S13] TGT FUEL: Heatpump system
 [S13] FUEL STORED: Heatpump → Gas=0m³, Oil=0L
 [Section13] 🧊 COOLING CALC: mode=TGT, coolingSystemType="Cooling", heatingType="Heatpump", isCoolingActive=true, coolingDemand=10192.893604542265
 [Section13] 🧊 COOLING RESULTS: d_117=3826.8214105081656, j_116=2.663540445486518, l_116=0, l_114=6366.0721940341
 [Section13] 🧊 COOLING CALC: mode=TGT, coolingSystemType="Cooling", heatingType="Heatpump", isCoolingActive=true, coolingDemand=10192.893604542265
 [Section13] 🧊 COOLING RESULTS: d_117=3826.8214105081656, j_116=2.663540445486518, l_116=0, l_114=6366.0721940341
 [Section13] Target Model calculations complete
 [Section13] ✅ Target Model complete
 [Section13] 🎉 DUAL-ENGINE CALCULATIONS COMPLETE
 [Section13] 🔄 Updating calculated display values for target mode
 [Section13] Calculated display values updated for target mode
 [S14 DEBUG] 🔄 Running Reference Model calculations...
 [S14 DEBUG] ✅ Converted to numbers - ref_d_127 calculation: 59532.28501397147 + 119064.57002794294 + 36440.079840319355 + 84594.73968 - 45879.580160000005
 [S14 DEBUG] ✅ ref_d_127 = 253752.09440223372 (should be numeric, not NaN)
 [S14 DEBUG] ✅ Stored ref_d_127 = 253752.09440223372 in StateManager
 [S14 DEBUG] 🔄 Continuing with other Reference calculations...
 [S14 DEBUG] ref_d_128 calculation: 59532.28501397147 + 119064.57002794294 + 36440.079840319355 - 45879.580160000005 = 169157.35472223375
 [S14 DEBUG] 🔄 Running Reference Model calculations...
 [S14 DEBUG] ✅ Converted to numbers - ref_d_127 calculation: 59532.28501397147 + 119064.57002794294 + 36440.079840319355 + 84594.73968 - 45879.580160000005
 [S14 DEBUG] ✅ ref_d_127 = 253752.09440223372 (should be numeric, not NaN)
 [S14 DEBUG] ✅ Stored ref_d_127 = 253752.09440223372 in StateManager
 [S14 DEBUG] 🔄 Continuing with other Reference calculations...
 [S14 DEBUG] ref_d_128 calculation: 59532.28501397147 + 119064.57002794294 + 36440.079840319355 - 45879.580160000005 = 169157.35472223375
 [S14 DEBUG] 🔄 Running Reference Model calculations...
 [S14 DEBUG] ✅ Converted to numbers - ref_d_127 calculation: 59532.28501397147 + 119064.57002794294 + 36440.079840319355 + 84594.73968 - 45879.580160000005
 [S14 DEBUG] ✅ ref_d_127 = 253752.09440223372 (should be numeric, not NaN)
 [S14 DEBUG] ✅ Stored ref_d_127 = 253752.09440223372 in StateManager
 [S14 DEBUG] 🔄 Continuing with other Reference calculations...
 [S14 DEBUG] ref_d_128 calculation: 59532.28501397147 + 119064.57002794294 + 36440.079840319355 - 45879.580160000005 = 169157.35472223375
 [Section13] 📡 🔥 i_104 (TRANSMISSION LOSS) listener triggered - S11 thermal bridges changed!
 [Section13] 🚀 CALCULATEALL TRIGGERED - Running dual-engine calculations...
 [Section13] 🔄 Starting Reference Model calculations...
 [Section13] Running Reference Model calculations...
 [Section13] 🔥 REF HEATING: systemType="Gas", tedReference=253752.09440223372, hspf=7.1
 [Section13] 🧊 COOLING CALC: mode=REF, coolingSystemType="Cooling", heatingType="Gas", isCoolingActive=true, coolingDemand=10192.893604542265
 [Section13] Reference results stored with ref_ prefix for downstream sections
 [S13 DEBUG] Total Reference results stored: 34
 [Section13] Reference Model calculations complete
 [Section13] ✅ Reference Model complete
 [Section13] 🔄 Starting Target Model calculations...
 [Section13] Running Target Model calculations...
 [S13] TGT HEATING: Heatpump, HSPF=12.5
 [S13] TGT FUEL: Heatpump system
 [S13] FUEL STORED: Heatpump → Gas=0m³, Oil=0L
 [Section13] 🧊 COOLING CALC: mode=TGT, coolingSystemType="Cooling", heatingType="Heatpump", isCoolingActive=true, coolingDemand=10192.893604542265
 [Section13] 🧊 COOLING RESULTS: d_117=3826.8214105081656, j_116=2.663540445486518, l_116=0, l_114=6366.0721940341
 [Section13] 🧊 COOLING CALC: mode=TGT, coolingSystemType="Cooling", heatingType="Heatpump", isCoolingActive=true, coolingDemand=10192.893604542265
 [Section13] 🧊 COOLING RESULTS: d_117=3826.8214105081656, j_116=2.663540445486518, l_116=0, l_114=6366.0721940341
 [Section13] Target Model calculations complete
 [Section13] ✅ Target Model complete
 [Section13] 🎉 DUAL-ENGINE CALCULATIONS COMPLETE
 [Section13] 🔄 Updating calculated display values for target mode
 [Section13] Calculated display values updated for target mode
 [Section13] 📡 🔥 i_104 (TRANSMISSION LOSS) listener triggered - S11 thermal bridges changed!
 [Section13] 🚀 CALCULATEALL TRIGGERED - Running dual-engine calculations...
 [Section13] 🔄 Starting Reference Model calculations...
 [Section13] Running Reference Model calculations...
 [Section13] 🔥 REF HEATING: systemType="Gas", tedReference=253752.09440223372, hspf=7.1
 [Section13] 🧊 COOLING CALC: mode=REF, coolingSystemType="Cooling", heatingType="Gas", isCoolingActive=true, coolingDemand=10192.893604542265
 [Section13] Reference results stored with ref_ prefix for downstream sections
 [S13 DEBUG] Total Reference results stored: 34
 [Section13] Reference Model calculations complete
 [Section13] ✅ Reference Model complete
 [Section13] 🔄 Starting Target Model calculations...
 [Section13] Running Target Model calculations...
 [S13] TGT HEATING: Heatpump, HSPF=12.5
 [S13] TGT FUEL: Heatpump system
 [S13] FUEL STORED: Heatpump → Gas=0m³, Oil=0L
 [Section13] 🧊 COOLING CALC: mode=TGT, coolingSystemType="Cooling", heatingType="Heatpump", isCoolingActive=true, coolingDemand=10192.893604542265
 [Section13] 🧊 COOLING RESULTS: d_117=3826.8214105081656, j_116=2.663540445486518, l_116=0, l_114=6366.0721940341
 [Section13] 🧊 COOLING CALC: mode=TGT, coolingSystemType="Cooling", heatingType="Heatpump", isCoolingActive=true, coolingDemand=10192.893604542265
 [Section13] 🧊 COOLING RESULTS: d_117=3826.8214105081656, j_116=2.663540445486518, l_116=0, l_114=6366.0721940341
 [Section13] Target Model calculations complete
 [Section13] ✅ Target Model complete
 [Section13] 🎉 DUAL-ENGINE CALCULATIONS COMPLETE
 [Section13] 🔄 Updating calculated display values for target mode
 [Section13] Calculated display values updated for target mode
 ✅ S15 Reference Model: All values converted to numbers for proper math
 ✅ S15 Reference Model: Additional fuel variables declared for cost calculations
 ✅ S15 Reference Model: All values converted to numbers for proper math
 ✅ S15 Reference Model: Additional fuel variables declared for cost calculations
 [Section13] 🚀 CALCULATEALL TRIGGERED - Running dual-engine calculations...
 [Section13] 🔄 Starting Reference Model calculations...
 [Section13] Running Reference Model calculations...
 [Section13] 🔥 REF HEATING: systemType="Gas", tedReference=253752.09440223372, hspf=7.1
 [Section13] 🧊 COOLING CALC: mode=REF, coolingSystemType="Cooling", heatingType="Gas", isCoolingActive=true, coolingDemand=10192.893604542265
 [Section13] Reference results stored with ref_ prefix for downstream sections
 [S13 DEBUG] Total Reference results stored: 34
 [Section13] Reference Model calculations complete
 [Section13] ✅ Reference Model complete
 [Section13] 🔄 Starting Target Model calculations...
 [Section13] Running Target Model calculations...
 [S13] TGT HEATING: Heatpump, HSPF=12.5
 [S13] TGT FUEL: Heatpump system
 [S13] FUEL STORED: Heatpump → Gas=0m³, Oil=0L
 [Section13] 🧊 COOLING CALC: mode=TGT, coolingSystemType="Cooling", heatingType="Heatpump", isCoolingActive=true, coolingDemand=10192.893604542265
 [Section13] 🧊 COOLING RESULTS: d_117=3826.8214105081656, j_116=2.663540445486518, l_116=0, l_114=6366.0721940341
 [Section13] 🧊 COOLING CALC: mode=TGT, coolingSystemType="Cooling", heatingType="Heatpump", isCoolingActive=true, coolingDemand=10192.893604542265
 [Section13] 🧊 COOLING RESULTS: d_117=3826.8214105081656, j_116=2.663540445486518, l_116=0, l_114=6366.0721940341
 [Section13] Target Model calculations complete
 [Section13] ✅ Target Model complete
 [Section13] 🎉 DUAL-ENGINE CALCULATIONS COMPLETE
 [Section13] 🔄 Updating calculated display values for target mode
 [Section13] Calculated display values updated for target mode
 [Section13] 🚀 CALCULATEALL TRIGGERED - Running dual-engine calculations...
 [Section13] 🔄 Starting Reference Model calculations...
 [Section13] Running Reference Model calculations...
 [Section13] 🔥 REF HEATING: systemType="Gas", tedReference=253752.09440223372, hspf=7.1
 [Section13] 🧊 COOLING CALC: mode=REF, coolingSystemType="Cooling", heatingType="Gas", isCoolingActive=true, coolingDemand=10192.893604542265
 [Section13] Reference results stored with ref_ prefix for downstream sections
 [S13 DEBUG] Total Reference results stored: 34
 [Section13] Reference Model calculations complete
 [Section13] ✅ Reference Model complete
 [Section13] 🔄 Starting Target Model calculations...
 [Section13] Running Target Model calculations...
 [S13] TGT HEATING: Heatpump, HSPF=12.5
 [S13] TGT FUEL: Heatpump system
 [S13] FUEL STORED: Heatpump → Gas=0m³, Oil=0L
 [Section13] 🧊 COOLING CALC: mode=TGT, coolingSystemType="Cooling", heatingType="Heatpump", isCoolingActive=true, coolingDemand=10192.893604542265
 [Section13] 🧊 COOLING RESULTS: d_117=3826.8214105081656, j_116=2.663540445486518, l_116=0, l_114=6366.0721940341
 [Section13] 🧊 COOLING CALC: mode=TGT, coolingSystemType="Cooling", heatingType="Heatpump", isCoolingActive=true, coolingDemand=10192.893604542265
 [Section13] 🧊 COOLING RESULTS: d_117=3826.8214105081656, j_116=2.663540445486518, l_116=0, l_114=6366.0721940341
 [Section13] Target Model calculations complete
 [Section13] ✅ Target Model complete
 [Section13] 🎉 DUAL-ENGINE CALCULATIONS COMPLETE
 [Section13] 🔄 Updating calculated display values for target mode
 [Section13] Calculated display values updated for target mode
 [Section12] Target Model calculations complete
 [Section12] Dual-engine calculations complete
 ✅ S15 Reference Model: All values converted to numbers for proper math
 ✅ S15 Reference Model: Additional fuel variables declared for cost calculations
 [S04] S08 forestry offset changed: d_60
 [S04] 🔄 Updating calculated display values for target mode
 [S04] Calculated display values updated for target mode
 [S04] S08 forestry offset changed: d_60
 [S04] 🔄 Updating calculated display values for target mode
 [S04] Calculated display values updated for target mode
 [DependencyGraph] Data loaded: 377 nodes, 650 links
 [DependencyGraph] Calculating node sizes...
 [Section03] Running Reference Model calculations...
 [Section03] Reference results stored with ref_ prefix for downstream sections: Object
 [Section03] Reference Model calculations complete
 [S04] S08 forestry offset changed: d_60
 [S04] 🔄 Updating calculated display values for target mode
 [S04] Calculated display values updated for target mode
 [S04] S08 forestry offset changed: d_60
 [S04] 🔄 Updating calculated display values for target mode
 [S04] Calculated display values updated for target mode
 [Section12] Running dual-engine calculations...
 [Section12] Running Reference Model calculations...
 ✅ S15 Reference Model: All values converted to numbers for proper math
 ✅ S15 Reference Model: Additional fuel variables declared for cost calculations
 ✅ S15 Reference Model: All values converted to numbers for proper math
 ✅ S15 Reference Model: Additional fuel variables declared for cost calculations
 ✅ S15 Reference Model: All values converted to numbers for proper math
 ✅ S15 Reference Model: Additional fuel variables declared for cost calculations
 [S04] S15 reference electricity changed: ref_d_136
 [S04] Starting dual-engine Excel-compliant calculations
 [S04] Calculating Target model
 [S04] calculateH28 DEBUG:
      Space heating fuel (d_113): 'Heatpump'
      Water heating fuel (d_51): 'Heatpump'
      Water gas volume (e_51): 0
      Space gas volume (h_115): 0
      Final H28 result: 0
 [S04] calculateH30 DEBUG:
      Space heating fuel (d_113): 'Heatpump'
      Water heating fuel (d_51): 'Heatpump'
      Water oil volume (k_54): 0
      Space oil volume (f_115): 0
      Final H30 result: 0
 [S04] Row 32 Subtotals - F32: 132938, G32: 6779.838, J32: 133574.36633416289, K32: 6812.2926830423075
 [S04] Target model calculations complete
 [S04] Calculating Reference model
 [S04] calculateH28 DEBUG:
      Space heating fuel (d_113): 'Heatpump'
      Water heating fuel (d_51): 'Heatpump'
      Water gas volume (e_51): 0
      Space gas volume (h_115): 27214.939339578905
      Final H28 result: 0
 [S04] calculateH30 DEBUG:
      Space heating fuel (d_113): 'Heatpump'
      Water heating fuel (d_51): 'Heatpump'
      Water oil volume (k_54): 0
      Space oil volume (f_115): 0
      Final H30 result: 0
 [S04] Row 32 Subtotals - F32: 132938, G32: 4785.768, J32: 313511.384841666, K32: 11286.409854299976
 🔵 [S01] REFERENCE ENERGY LISTENER: ref_j_32 changed from 313511.38968 to 313511.384841666 → will update REFERENCE COLUMN E
 🚀 [S01] =================================
 🚀 [S01] PURE DISPLAY CONSUMER TRIGGERED
 🚀 [S01] =================================
 🎯 [S01] PURE DISPLAY CONSUMER: Starting Excel-compliant calculations...
 🔵 [S01] Upstream Reference: refEnergy=313511.384841666 (from ref_j_32), refEmissions=11286.41002848, refEmbodiedCarbon=350
 🟢 [S01] Upstream Target: targetEnergy=133574.36633416289 (from j_32), targetEmissions=6812.2926830423075, embodiedCarbon=345.82
 🟡 [S01] Upstream Actual: actualEnergy=132938, actualEmissions=6779.838
 🎯 [S01] Building: area=1427.2, serviceLife=50, useType=Utility Bills
 🔵 [S01] CALCULATED Reference COLUMN E: e_10=219.7, e_8=7.9, e_6=14.9
 🟢 [S01] CALCULATED Target COLUMN H: h_10=93.6, h_8=4.8, h_6=11.7
 🟡 [S01] CALCULATED Actual COLUMN K: k_10=93.1, k_8=4.8, k_6=11.7
 ✅ [S01] PURE DISPLAY CONSUMER: All values calculated and displayed
 ✅ [S01] PURE DISPLAY CONSUMER COMPLETE
 🚀 [S01] =================================
 📡 [S01] Listener triggered: ref_k_32 changed from 11286.41002848 to 11286.409854299976
 🚀 [S01] =================================
 🚀 [S01] PURE DISPLAY CONSUMER TRIGGERED
 🚀 [S01] =================================
 🎯 [S01] PURE DISPLAY CONSUMER: Starting Excel-compliant calculations...
 🔵 [S01] Upstream Reference: refEnergy=313511.384841666 (from ref_j_32), refEmissions=11286.409854299976, refEmbodiedCarbon=350
 🟢 [S01] Upstream Target: targetEnergy=133574.36633416289 (from j_32), targetEmissions=6812.2926830423075, embodiedCarbon=345.82
 🟡 [S01] Upstream Actual: actualEnergy=132938, actualEmissions=6779.838
 🎯 [S01] Building: area=1427.2, serviceLife=50, useType=Utility Bills
 🔵 [S01] CALCULATED Reference COLUMN E: e_10=219.7, e_8=7.9, e_6=14.9
 🟢 [S01] CALCULATED Target COLUMN H: h_10=93.6, h_8=4.8, h_6=11.7
 🟡 [S01] CALCULATED Actual COLUMN K: k_10=93.1, k_8=4.8, k_6=11.7
 ✅ [S01] PURE DISPLAY CONSUMER: All values calculated and displayed
 ✅ [S01] PURE DISPLAY CONSUMER COMPLETE
 🚀 [S01] =================================
 [S05] Running dual-engine calculations...
 [S05] Target model calculations complete
 [S05] Reference model calculations complete
 [S05] Dual-engine calculations complete
 🔄 [S05] updateCalculatedDisplayValues: mode=target
 [S05] Running dual-engine calculations...
 [S05] Target model calculations complete
 [S05] Reference model calculations complete
 [S05] Dual-engine calculations complete
 🔄 [S05] updateCalculatedDisplayValues: mode=target
 ✅ S15 Reference Model: All values converted to numbers for proper math
 ✅ S15 Reference Model: Additional fuel variables declared for cost calculations
 📡 [S01] Listener triggered: ref_h_136 changed from 219.66885487668162 to 219.6688514865933
 🚀 [S01] =================================
 🚀 [S01] PURE DISPLAY CONSUMER TRIGGERED
 🚀 [S01] =================================
 🎯 [S01] PURE DISPLAY CONSUMER: Starting Excel-compliant calculations...
 🔵 [S01] Upstream Reference: refEnergy=313511.384841666 (from ref_j_32), refEmissions=11286.409854299976, refEmbodiedCarbon=350
 🟢 [S01] Upstream Target: targetEnergy=133574.36633416289 (from j_32), targetEmissions=6812.2926830423075, embodiedCarbon=345.82
 🟡 [S01] Upstream Actual: actualEnergy=132938, actualEmissions=6779.838
 🎯 [S01] Building: area=1427.2, serviceLife=50, useType=Utility Bills
 🔵 [S01] CALCULATED Reference COLUMN E: e_10=219.7, e_8=7.9, e_6=14.9
 🟢 [S01] CALCULATED Target COLUMN H: h_10=93.6, h_8=4.8, h_6=11.7
 🟡 [S01] CALCULATED Actual COLUMN K: k_10=93.1, k_8=4.8, k_6=11.7
 ✅ [S01] PURE DISPLAY CONSUMER: All values calculated and displayed
 ✅ [S01] PURE DISPLAY CONSUMER COMPLETE
 🚀 [S01] =================================
 ✅ S15 Reference Model: All values converted to numbers for proper math
 ✅ S15 Reference Model: Additional fuel variables declared for cost calculations
 ✅ S15 Reference Model: All values converted to numbers for proper math
 ✅ S15 Reference Model: Additional fuel variables declared for cost calculations
 ✅ S15 Reference Model: All values converted to numbers for proper math
 ✅ S15 Reference Model: Additional fuel variables declared for cost calculations
 ✅ S15 Reference Model: All values converted to numbers for proper math
 ✅ S15 Reference Model: Additional fuel variables declared for cost calculations
 ✅ S15 Reference Model: All values converted to numbers for proper math
 ✅ S15 Reference Model: Additional fuel variables declared for cost calculations
 [S04] Reference model calculations complete
 [S04] Dual-engine calculations completed successfully
 ✅ S15 Reference Model: All values converted to numbers for proper math
 ✅ S15 Reference Model: Additional fuel variables declared for cost calculations
 [Section12] Reference results stored with ref_ prefix for downstream sections
 [Section12] Reference Model calculations complete
 [Section12] Running Target Model calculations...
 [Section12] Target Model calculations complete
 [Section12] Dual-engine calculations complete
 [S11] calculateAll TRIGGERED. isReferenceMode: false
 [Section13] 🚀 CALCULATEALL TRIGGERED - Running dual-engine calculations...
 [Section13] 🔄 Starting Reference Model calculations...
 [Section13] Running Reference Model calculations...
 [Section13] 🔥 REF HEATING: systemType="Gas", tedReference=253752.09440223372, hspf=7.1
 [Section13] 🧊 COOLING CALC: mode=REF, coolingSystemType="Cooling", heatingType="Gas", isCoolingActive=true, coolingDemand=10192.893604542265
 [Section13] Reference results stored with ref_ prefix for downstream sections
 [S13 DEBUG] Total Reference results stored: 34
 [Section13] Reference Model calculations complete
 [Section13] ✅ Reference Model complete
 [Section13] 🔄 Starting Target Model calculations...
 [Section13] Running Target Model calculations...
 [S13] TGT HEATING: Heatpump, HSPF=12.5
 [S13] TGT FUEL: Heatpump system
 [S13] FUEL STORED: Heatpump → Gas=0m³, Oil=0L
 [Section13] 🧊 COOLING CALC: mode=TGT, coolingSystemType="Cooling", heatingType="Heatpump", isCoolingActive=true, coolingDemand=10192.893604542265
 [Section13] 🧊 COOLING RESULTS: d_117=3826.8214105081656, j_116=2.663540445486518, l_116=0, l_114=6366.0721940341
 [Section13] 🧊 COOLING CALC: mode=TGT, coolingSystemType="Cooling", heatingType="Heatpump", isCoolingActive=true, coolingDemand=10192.893604542265
 [Section13] 🧊 COOLING RESULTS: d_117=3826.8214105081656, j_116=2.663540445486518, l_116=0, l_114=6366.0721940341
 [Section13] Target Model calculations complete
 [Section13] ✅ Target Model complete
 [Section13] 🎉 DUAL-ENGINE CALCULATIONS COMPLETE
 [S06] Running dual-engine calculations...
 🟢 [S06-TAR] Storing d_43 = 0 (from d_44=0, d_45=0, d_46=0)
 [S06] Target model calculations complete
 🔵 [S06-REF] Storing ref_d_43 = 0 (from d_44=0, d_45=0, d_46=0)
 [S06] Reference model calculations complete
 [S06] Dual-engine calculations complete
 [S14 DEBUG] 🔄 Running Reference Model calculations...
 [S14 DEBUG] ✅ Converted to numbers - ref_d_127 calculation: 59532.28501397147 + 119064.57002794294 + 36440.079840319355 + 84594.73968 - 45879.580160000005
 [S14 DEBUG] ✅ ref_d_127 = 253752.09440223372 (should be numeric, not NaN)
 [S14 DEBUG] ✅ Stored ref_d_127 = 253752.09440223372 in StateManager
 [S14 DEBUG] 🔄 Continuing with other Reference calculations...
4011-Section14.js:1078 [S14 DEBUG] ref_d_128 calculation: 59532.28501397147 + 119064.57002794294 + 36440.079840319355 - 45879.580160000005 = 169157.35472223375
4011-Section04.js:1506 [S04] Starting dual-engine Excel-compliant calculations
4011-Section04.js:1514 [S04] Calculating Target model
4011-Section04.js:1221 [S04] calculateH28 DEBUG:
      Space heating fuel (d_113): 'Heatpump'
      Water heating fuel (d_51): 'Heatpump'
      Water gas volume (e_51): 0
      Space gas volume (h_115): 0
      Final H28 result: 0
4011-Section04.js:1305 [S04] calculateH30 DEBUG:
      Space heating fuel (d_113): 'Heatpump'
      Water heating fuel (d_51): 'Heatpump'
      Water oil volume (k_54): 0
      Space oil volume (f_115): 0
      Final H30 result: 0
4011-Section04.js:939 [S04] Row 32 Subtotals - F32: 132938, G32: 6779.838, J32: 133574.36633416289, K32: 6812.2926830423075
4011-Section04.js:1546 [S04] Target model calculations complete
4011-Section04.js:1519 [S04] Calculating Reference model
4011-Section04.js:1221 [S04] calculateH28 DEBUG:
      Space heating fuel (d_113): 'Heatpump'
      Water heating fuel (d_51): 'Heatpump'
      Water gas volume (e_51): 0
      Space gas volume (h_115): 27214.939339578905
      Final H28 result: 0
4011-Section04.js:1305 [S04] calculateH30 DEBUG:
      Space heating fuel (d_113): 'Heatpump'
      Water heating fuel (d_51): 'Heatpump'
      Water oil volume (k_54): 0
      Space oil volume (f_115): 0
      Final H30 result: 0
4011-Section04.js:939 [S04] Row 32 Subtotals - F32: 132938, G32: 4785.768, J32: 313511.384841666, K32: 11286.409854299976
4011-Section04.js:1579 [S04] Reference model calculations complete
4011-Section04.js:1525 [S04] Dual-engine calculations completed successfully
4011-Section05.js:907 [S05] Running dual-engine calculations...
4011-Section05.js:897 [S05] Target model calculations complete
4011-Section05.js:873 [S05] Reference model calculations complete
4011-Section05.js:910 [S05] Dual-engine calculations complete
4011-Section15.js:1462 ✅ S15 Reference Model: All values converted to numbers for proper math
4011-Section15.js:1475 ✅ S15 Reference Model: Additional fuel variables declared for cost calculations
4011-Dependency.js:78 [DependencyGraph] Data loaded: 377 nodes, 650 links
4011-Dependency.js:712 [DependencyGraph] Calculating node sizes...
4011-Section04.js:2440 [S04] S08 forestry offset changed: d_60
4011-Section04.js:428 [S04] 🔄 Updating calculated display values for target mode
4011-Section04.js:532 [S04] Calculated display values updated for target mode
4011-Section04.js:2440 [S04] S08 forestry offset changed: d_60
4011-Section04.js:428 [S04] 🔄 Updating calculated display values for target mode
4011-Section04.js:532 [S04] Calculated display values updated for target mode
4011-Section02.js:1563 S02: Saved Target state to localStorage
4011-Section01.js:985 📡 [S01] Listener triggered: h_15 changed from 1427.2 to 2427.2
4011-Section01.js:899 🚀 [S01] =================================
4011-Section01.js:900 🚀 [S01] PURE DISPLAY CONSUMER TRIGGERED
4011-Section01.js:901 🚀 [S01] =================================
4011-Section01.js:563 🎯 [S01] PURE DISPLAY CONSUMER: Starting Excel-compliant calculations...
4011-Section01.js:587 🔵 [S01] Upstream Reference: refEnergy=313511.384841666 (from ref_j_32), refEmissions=11286.409854299976, refEmbodiedCarbon=350
4011-Section01.js:588 🟢 [S01] Upstream Target: targetEnergy=133574.36633416289 (from j_32), targetEmissions=6812.2926830423075, embodiedCarbon=345.82
4011-Section01.js:589 🟡 [S01] Upstream Actual: actualEnergy=132938, actualEmissions=6779.838
4011-Section01.js:590 🎯 [S01] Building: area=2427.2, serviceLife=50, useType=Utility Bills
4011-Section01.js:634 🔵 [S01] CALCULATED Reference COLUMN E: e_10=129.2, e_8=4.6, e_6=11.6
4011-Section01.js:635 🟢 [S01] CALCULATED Target COLUMN H: h_10=55, h_8=2.8, h_6=9.7
4011-Section01.js:636 🟡 [S01] CALCULATED Actual COLUMN K: k_10=54.8, k_8=2.8, k_6=9.7
4011-Section01.js:713 ✅ [S01] PURE DISPLAY CONSUMER: All values calculated and displayed
4011-Section01.js:908 ✅ [S01] PURE DISPLAY CONSUMER COMPLETE
4011-Section01.js:909 🚀 [S01] =================================
4011-Section04.js:2422 [S04] Conditioned area changed: h_15
4011-Section04.js:1506 [S04] Starting dual-engine Excel-compliant calculations
4011-Section04.js:1514 [S04] Calculating Target model
4011-Section04.js:1221 [S04] calculateH28 DEBUG:
      Space heating fuel (d_113): 'Heatpump'
      Water heating fuel (d_51): 'Heatpump'
      Water gas volume (e_51): 0
      Space gas volume (h_115): 0
      Final H28 result: 0
4011-Section04.js:1305 [S04] calculateH30 DEBUG:
      Space heating fuel (d_113): 'Heatpump'
      Water heating fuel (d_51): 'Heatpump'
      Water oil volume (k_54): 0
      Space oil volume (f_115): 0
      Final H30 result: 0
4011-Section04.js:939 [S04] Row 32 Subtotals - F32: 132938, G32: 6779.838, J32: 133574.36633416289, K32: 6812.2926830423075
 [S04] Target model calculations complete
 [S04] Calculating Reference model
 [S04] calculateH28 DEBUG:
      Space heating fuel (d_113): 'Heatpump'
      Water heating fuel (d_51): 'Heatpump'
      Water gas volume (e_51): 0
      Space gas volume (h_115): 27214.939339578905
      Final H28 result: 0
 [S04] calculateH30 DEBUG:
      Space heating fuel (d_113): 'Heatpump'
      Water heating fuel (d_51): 'Heatpump'
      Water oil volume (k_54): 0
      Space oil volume (f_115): 0
      Final H30 result: 0
 [S04] Row 32 Subtotals - F32: 132938, G32: 4785.768, J32: 313511.384841666, K32: 11286.409854299976
 [S04] Reference model calculations complete
 [S04] Dual-engine calculations completed successfully
 [S05] Running dual-engine calculations...
 [S05] Target model calculations complete
 [S05] Reference model calculations complete
 [S05] Dual-engine calculations complete
 🔄 [S05] updateCalculatedDisplayValues: mode=target
 [S05] Running dual-engine calculations...
 [S05] Target model calculations complete
 [S05] Reference model calculations complete
 [S05] Dual-engine calculations complete
 🔄 [S05] updateCalculatedDisplayValues: mode=target
 ✅ S15 Reference Model: All values converted to numbers for proper math
 ✅ S15 Reference Model: Additional fuel variables declared for cost calculations
 [S04] S15 target electricity changed: d_136
 [S04] Starting dual-engine Excel-compliant calculations
 [S04] Calculating Target model
 [S04] calculateH28 DEBUG:
      Space heating fuel (d_113): 'Heatpump'
      Water heating fuel (d_51): 'Heatpump'
      Water gas volume (e_51): 0
      Space gas volume (h_115): 0
      Final H28 result: 0
 [S04] calculateH30 DEBUG:
      Space heating fuel (d_113): 'Heatpump'
      Water heating fuel (d_51): 'Heatpump'
      Water oil volume (k_54): 0
      Space oil volume (f_115): 0
      Final H30 result: 0
 [S04] Row 32 Subtotals - F32: 132938, G32: 6779.838, J32: 192704.36633416289, K32: 9827.922683042307
 🟢 [S01] TARGET ENERGY LISTENER: j_32 changed from 133574.36633416289 to 192704.36633416289 → will update TARGET COLUMN H
 🚀 [S01] =================================
 🚀 [S01] PURE DISPLAY CONSUMER TRIGGERED
 🚀 [S01] =================================
 🎯 [S01] PURE DISPLAY CONSUMER: Starting Excel-compliant calculations...
 🔵 [S01] Upstream Reference: refEnergy=313511.384841666 (from ref_j_32), refEmissions=11286.409854299976, refEmbodiedCarbon=350
 🟢 [S01] Upstream Target: targetEnergy=192704.36633416289 (from j_32), targetEmissions=6812.2926830423075, embodiedCarbon=345.82
 🟡 [S01] Upstream Actual: actualEnergy=132938, actualEmissions=6779.838
 🎯 [S01] Building: area=2427.2, serviceLife=50, useType=Utility Bills
 🔵 [S01] CALCULATED Reference COLUMN E: e_10=129.2, e_8=4.6, e_6=11.6
 🟢 [S01] CALCULATED Target COLUMN H: h_10=79.4, h_8=2.8, h_6=9.7
 🟡 [S01] CALCULATED Actual COLUMN K: k_10=54.8, k_8=2.8, k_6=9.7
 ✅ [S01] PURE DISPLAY CONSUMER: All values calculated and displayed
 ✅ [S01] PURE DISPLAY CONSUMER COMPLETE
 🚀 [S01] =================================
 📡 [S01] Listener triggered: k_32 changed from 6812.2926830423075 to 9827.922683042307
 🚀 [S01] =================================
 🚀 [S01] PURE DISPLAY CONSUMER TRIGGERED
 🚀 [S01] =================================
 🎯 [S01] PURE DISPLAY CONSUMER: Starting Excel-compliant calculations...
 🔵 [S01] Upstream Reference: refEnergy=313511.384841666 (from ref_j_32), refEmissions=11286.409854299976, refEmbodiedCarbon=350
 🟢 [S01] Upstream Target: targetEnergy=192704.36633416289 (from j_32), targetEmissions=9827.922683042307, embodiedCarbon=345.82
 🟡 [S01] Upstream Actual: actualEnergy=132938, actualEmissions=6779.838
 🎯 [S01] Building: area=2427.2, serviceLife=50, useType=Utility Bills
 🔵 [S01] CALCULATED Reference COLUMN E: e_10=129.2, e_8=4.6, e_6=11.6
 🟢 [S01] CALCULATED Target COLUMN H: h_10=79.4, h_8=4, h_6=10.9
 🟡 [S01] CALCULATED Actual COLUMN K: k_10=54.8, k_8=2.8, k_6=9.7
 ✅ [S01] PURE DISPLAY CONSUMER: All values calculated and displayed
 ✅ [S01] PURE DISPLAY CONSUMER COMPLETE
 🚀 [S01] =================================
 [S05] Running dual-engine calculations...
 [S05] Target model calculations complete
 [S05] Reference model calculations complete
 [S05] Dual-engine calculations complete
 🔄 [S05] updateCalculatedDisplayValues: mode=target
 [S05] Running dual-engine calculations...
 [S05] Target model calculations complete
 [S05] Reference model calculations complete
 [S05] Dual-engine calculations complete
 🔄 [S05] updateCalculatedDisplayValues: mode=target
 ✅ S15 Reference Model: All values converted to numbers for proper math
 ✅ S15 Reference Model: Additional fuel variables declared for cost calculations
 ✅ S15 Reference Model: All values converted to numbers for proper math
 ✅ S15 Reference Model: Additional fuel variables declared for cost calculations
 ✅ S15 Reference Model: All values converted to numbers for proper math
 ✅ S15 Reference Model: Additional fuel variables declared for cost calculations
 ✅ S15 Reference Model: All values converted to numbers for proper math
 ✅ S15 Reference Model: Additional fuel variables declared for cost calculations
 [S04] Target model calculations complete
 [S04] Calculating Reference model
 [S04] calculateH28 DEBUG:
      Space heating fuel (d_113): 'Heatpump'
      Water heating fuel (d_51): 'Heatpump'
      Water gas volume (e_51): 0
      Space gas volume (h_115): 27214.939339578905
      Final H28 result: 0
 [S04] calculateH30 DEBUG:
      Space heating fuel (d_113): 'Heatpump'
      Water heating fuel (d_51): 'Heatpump'
      Water oil volume (k_54): 0
      Space oil volume (f_115): 0
      Final H30 result: 0
 [S04] Row 32 Subtotals - F32: 132938, G32: 4785.768, J32: 313511.384841666, K32: 11286.409854299976
 [S04] Reference model calculations complete
 [S04] Dual-engine calculations completed successfully
 ✅ S15 Reference Model: All values converted to numbers for proper math
 ✅ S15 Reference Model: Additional fuel variables declared for cost calculations
 S10: Global listener triggered by i_71, recalculating all.
 [S14 DEBUG] 🔄 Running Reference Model calculations...
 [S14 DEBUG] ✅ Converted to numbers - ref_d_127 calculation: 59532.28501397147 + 119064.57002794294 + 36440.079840319355 + 84594.73968 - 61755.58016000001
 [S14 DEBUG] ✅ ref_d_127 = 237876.09440223372 (should be numeric, not NaN)
 [S14 DEBUG] ✅ Stored ref_d_127 = 237876.09440223372 in StateManager
 [S14 DEBUG] 🔄 Continuing with other Reference calculations...
 [S14 DEBUG] ref_d_128 calculation: 59532.28501397147 + 119064.57002794294 + 36440.079840319355 - 61755.58016000001 = 153281.35472223375
 [Section13] 📡 🔥 d_127 (TED) listener triggered - S14 energy demand changed!
 [Section13] 🚀 CALCULATEALL TRIGGERED - Running dual-engine calculations...
 [Section13] 🔄 Starting Reference Model calculations...
 [Section13] Running Reference Model calculations...
 [Section13] 🔥 REF HEATING: systemType="Gas", tedReference=237876.09440223372, hspf=7.1
 [Section13] 🧊 COOLING CALC: mode=REF, coolingSystemType="Cooling", heatingType="Gas", isCoolingActive=true, coolingDemand=10192.893604542265
 ✅ S15 Reference Model: All values converted to numbers for proper math
 ✅ S15 Reference Model: Additional fuel variables declared for cost calculations
 ✅ S15 Reference Model: All values converted to numbers for proper math
 ✅ S15 Reference Model: Additional fuel variables declared for cost calculations
 [S04] S13 space gas volume changed (Reference): ref_h_115
 [S04] calculateH28 DEBUG:
      Space heating fuel (d_113): 'Heatpump'
      Water heating fuel (d_51): 'Heatpump'
      Water gas volume (e_51): 0
      Space gas volume (h_115): 25512.2366368762
      Final H28 result: 0
 [S04] calculateH30 DEBUG:
      Space heating fuel (d_113): 'Heatpump'
      Water heating fuel (d_51): 'Heatpump'
      Water oil volume (k_54): 0
      Space oil volume (f_115): 0
      Final H30 result: 0
 [S04] Row 32 Subtotals - F32: 132938, G32: 4785.768, J32: 313511.384841666, K32: 11286.409854299976
 [S04] Reference model calculations complete
 [S04] 🔄 Updating calculated display values for target mode
 [S04] Calculated display values updated for target mode
 [Section13] Reference results stored with ref_ prefix for downstream sections
 [S13 DEBUG] Total Reference results stored: 34
 [Section13] Reference Model calculations complete
 [Section13] ✅ Reference Model complete
 [Section13] 🔄 Starting Target Model calculations...
 [Section13] Running Target Model calculations...
 [S13] TGT HEATING: Heatpump, HSPF=12.5
 ✅ S15 Reference Model: All values converted to numbers for proper math
 ✅ S15 Reference Model: Additional fuel variables declared for cost calculations
 [S04] S15 target electricity changed: d_136
 [S04] Starting dual-engine Excel-compliant calculations
 [S04] Calculating Target model
 [S04] calculateH28 DEBUG:
      Space heating fuel (d_113): 'Heatpump'
      Water heating fuel (d_51): 'Heatpump'
      Water gas volume (e_51): 0
      Space gas volume (h_115): 0
      Final H28 result: 0
 [S04] calculateH30 DEBUG:
      Space heating fuel (d_113): 'Heatpump'
      Water heating fuel (d_51): 'Heatpump'
      Water oil volume (k_54): 0
      Space oil volume (f_115): 0
      Final H30 result: 0
 [S04] Row 32 Subtotals - F32: 132938, G32: 6779.838, J32: 188370.85337416286, K32: 9606.913522082306
 🟢 [S01] TARGET ENERGY LISTENER: j_32 changed from 192704.36633416289 to 188370.85337416286 → will update TARGET COLUMN H
 🚀 [S01] =================================
 🚀 [S01] PURE DISPLAY CONSUMER TRIGGERED
 🚀 [S01] =================================
 🎯 [S01] PURE DISPLAY CONSUMER: Starting Excel-compliant calculations...
 🔵 [S01] Upstream Reference: refEnergy=313511.384841666 (from ref_j_32), refEmissions=11286.409854299976, refEmbodiedCarbon=350
 🟢 [S01] Upstream Target: targetEnergy=188370.85337416286 (from j_32), targetEmissions=9827.922683042307, embodiedCarbon=345.82
 🟡 [S01] Upstream Actual: actualEnergy=132938, actualEmissions=6779.838
 🎯 [S01] Building: area=2427.2, serviceLife=50, useType=Utility Bills
 🔵 [S01] CALCULATED Reference COLUMN E: e_10=129.2, e_8=4.6, e_6=11.6
 🟢 [S01] CALCULATED Target COLUMN H: h_10=77.6, h_8=4, h_6=10.9
 🟡 [S01] CALCULATED Actual COLUMN K: k_10=54.8, k_8=2.8, k_6=9.7
 ✅ [S01] PURE DISPLAY CONSUMER: All values calculated and displayed
 ✅ [S01] PURE DISPLAY CONSUMER COMPLETE
 🚀 [S01] =================================
 📡 [S01] Listener triggered: k_32 changed from 9827.922683042307 to 9606.913522082306
 🚀 [S01] =================================
 🚀 [S01] PURE DISPLAY CONSUMER TRIGGERED
 🚀 [S01] =================================
 🎯 [S01] PURE DISPLAY CONSUMER: Starting Excel-compliant calculations...
 🔵 [S01] Upstream Reference: refEnergy=313511.384841666 (from ref_j_32), refEmissions=11286.409854299976, refEmbodiedCarbon=350
 🟢 [S01] Upstream Target: targetEnergy=188370.85337416286 (from j_32), targetEmissions=9606.913522082306, embodiedCarbon=345.82
 🟡 [S01] Upstream Actual: actualEnergy=132938, actualEmissions=6779.838
 🎯 [S01] Building: area=2427.2, serviceLife=50, useType=Utility Bills
 🔵 [S01] CALCULATED Reference COLUMN E: e_10=129.2, e_8=4.6, e_6=11.6
 🟢 [S01] CALCULATED Target COLUMN H: h_10=77.6, h_8=4, h_6=10.9
 🟡 [S01] CALCULATED Actual COLUMN K: k_10=54.8, k_8=2.8, k_6=9.7
4011-Section01.js:713 ✅ [S01] PURE DISPLAY CONSUMER: All values calculated and displayed
4011-Section01.js:908 ✅ [S01] PURE DISPLAY CONSUMER COMPLETE
4011-Section01.js:909 🚀 [S01] =================================
4011-Section05.js:907 [S05] Running dual-engine calculations...
4011-Section05.js:897 [S05] Target model calculations complete
4011-Section05.js:873 [S05] Reference model calculations complete
4011-Section05.js:910 [S05] Dual-engine calculations complete
4011-Section05.js:179 🔄 [S05] updateCalculatedDisplayValues: mode=target
4011-Section05.js:907 [S05] Running dual-engine calculations...
4011-Section05.js:897 [S05] Target model calculations complete
4011-Section05.js:873 [S05] Reference model calculations complete
4011-Section05.js:910 [S05] Dual-engine calculations complete
4011-Section05.js:179 🔄 [S05] updateCalculatedDisplayValues: mode=target
4011-Section15.js:1462 ✅ S15 Reference Model: All values converted to numbers for proper math
4011-Section15.js:1475 ✅ S15 Reference Model: Additional fuel variables declared for cost calculations
4011-Section15.js:1462 ✅ S15 Reference Model: All values converted to numbers for proper math
4011-Section15.js:1475 ✅ S15 Reference Model: Additional fuel variables declared for cost calculations
4011-Section15.js:1462 ✅ S15 Reference Model: All values converted to numbers for proper math
4011-Section15.js:1475 ✅ S15 Reference Model: Additional fuel variables declared for cost calculations
4011-Section15.js:1462 ✅ S15 Reference Model: All values converted to numbers for proper math
4011-Section15.js:1475 ✅ S15 Reference Model: Additional fuel variables declared for cost calculations
4011-Section04.js:1546 [S04] Target model calculations complete
4011-Section04.js:1519 [S04] Calculating Reference model
4011-Section04.js:1221 [S04] calculateH28 DEBUG:
      Space heating fuel (d_113): 'Heatpump'
      Water heating fuel (d_51): 'Heatpump'
      Water gas volume (e_51): 0
      Space gas volume (h_115): 25512.2366368762
      Final H28 result: 0
4011-Section04.js:1305 [S04] calculateH30 DEBUG:
      Space heating fuel (d_113): 'Heatpump'
      Water heating fuel (d_51): 'Heatpump'
      Water oil volume (k_54): 0
      Space oil volume (f_115): 0
      Final H30 result: 0
4011-Section04.js:939 [S04] Row 32 Subtotals - F32: 132938, G32: 4785.768, J32: 313511.384841666, K32: 11286.409854299976
4011-Section04.js:1579 [S04] Reference model calculations complete
 [S04] Dual-engine calculations completed successfully
 ✅ S15 Reference Model: All values converted to numbers for proper math
 ✅ S15 Reference Model: Additional fuel variables declared for cost calculations
 [S13] TGT FUEL: Heatpump system
 [S13] FUEL STORED: Heatpump → Gas=0m³, Oil=0L
 [Section13] 🧊 COOLING CALC: mode=TGT, coolingSystemType="Cooling", heatingType="Heatpump", isCoolingActive=true, coolingDemand=10192.893604542265
 [Section13] 🧊 COOLING RESULTS: d_117=3826.8214105081656, j_116=2.663540445486518, l_116=0, l_114=6366.0721940341
 [Section13] 🧊 COOLING CALC: mode=TGT, coolingSystemType="Cooling", heatingType="Heatpump", isCoolingActive=true, coolingDemand=10192.893604542265
 [Section13] 🧊 COOLING RESULTS: d_117=3826.8214105081656, j_116=2.663540445486518, l_116=0, l_114=6366.0721940341
 [Section13] Target Model calculations complete
 [Section13] ✅ Target Model complete
 [Section13] 🎉 DUAL-ENGINE CALCULATIONS COMPLETE
 [Section13] 🔄 Updating calculated display values for target mode
 [Section13] Calculated display values updated for target mode
 [Section13] 📡 🔥 d_127 (TED) listener triggered - S14 energy demand changed!
 [Section13] 🚀 CALCULATEALL TRIGGERED - Running dual-engine calculations...
 [Section13] 🔄 Starting Reference Model calculations...
 [Section13] Running Reference Model calculations...
 [Section13] 🔥 REF HEATING: systemType="Gas", tedReference=237876.09440223372, hspf=7.1
 [Section13] 🧊 COOLING CALC: mode=REF, coolingSystemType="Cooling", heatingType="Gas", isCoolingActive=true, coolingDemand=10192.893604542265
 [Section13] Reference results stored with ref_ prefix for downstream sections
 [S13 DEBUG] Total Reference results stored: 34
 [Section13] Reference Model calculations complete
 [Section13] ✅ Reference Model complete
 [Section13] 🔄 Starting Target Model calculations...
 [Section13] Running Target Model calculations...
 [S13] TGT HEATING: Heatpump, HSPF=12.5
 [S13] TGT FUEL: Heatpump system
 [S13] FUEL STORED: Heatpump → Gas=0m³, Oil=0L
 [Section13] 🧊 COOLING CALC: mode=TGT, coolingSystemType="Cooling", heatingType="Heatpump", isCoolingActive=true, coolingDemand=10192.893604542265
 [Section13] 🧊 COOLING RESULTS: d_117=3826.8214105081656, j_116=2.663540445486518, l_116=0, l_114=6366.0721940341
 [Section13] 🧊 COOLING CALC: mode=TGT, coolingSystemType="Cooling", heatingType="Heatpump", isCoolingActive=true, coolingDemand=10192.893604542265
 [Section13] 🧊 COOLING RESULTS: d_117=3826.8214105081656, j_116=2.663540445486518, l_116=0, l_114=6366.0721940341
 [Section13] Target Model calculations complete
 [Section13] ✅ Target Model complete
 [Section13] 🎉 DUAL-ENGINE CALCULATIONS COMPLETE
 [Section13] 🔄 Updating calculated display values for target mode
 [Section13] Calculated display values updated for target mode
 [S14 DEBUG] 🔄 Running Reference Model calculations...
 [S14 DEBUG] ✅ Converted to numbers - ref_d_127 calculation: 59532.28501397147 + 119064.57002794294 + 36440.079840319355 + 84594.73968 - 61755.58016000001
 [S14 DEBUG] ✅ ref_d_127 = 237876.09440223372 (should be numeric, not NaN)
 [S14 DEBUG] ✅ Stored ref_d_127 = 237876.09440223372 in StateManager
 [S14 DEBUG] 🔄 Continuing with other Reference calculations...
 [S14 DEBUG] ref_d_128 calculation: 59532.28501397147 + 119064.57002794294 + 36440.079840319355 - 61755.58016000001 = 153281.35472223375
 ✅ S15 Reference Model: All values converted to numbers for proper math
 ✅ S15 Reference Model: Additional fuel variables declared for cost calculations
 ✅ S15 Reference Model: All values converted to numbers for proper math
 ✅ S15 Reference Model: Additional fuel variables declared for cost calculations
 [Section13] 📡 🔥 i_71 (OCCUPANT GAINS) listener triggered - S10 gains factor changed!
 [Section13] 🚀 CALCULATEALL TRIGGERED - Running dual-engine calculations...
 [Section13] 🔄 Starting Reference Model calculations...
 [Section13] Running Reference Model calculations...
 [Section13] 🔥 REF HEATING: systemType="Gas", tedReference=237876.09440223372, hspf=7.1
 [Section13] 🧊 COOLING CALC: mode=REF, coolingSystemType="Cooling", heatingType="Gas", isCoolingActive=true, coolingDemand=10192.893604542265
 [Section13] Reference results stored with ref_ prefix for downstream sections
 [S13 DEBUG] Total Reference results stored: 34
 [Section13] Reference Model calculations complete
 [Section13] ✅ Reference Model complete
 [Section13] 🔄 Starting Target Model calculations...
 [Section13] Running Target Model calculations...
 [S13] TGT HEATING: Heatpump, HSPF=12.5
 [S13] TGT FUEL: Heatpump system
 [S13] FUEL STORED: Heatpump → Gas=0m³, Oil=0L
 [Section13] 🧊 COOLING CALC: mode=TGT, coolingSystemType="Cooling", heatingType="Heatpump", isCoolingActive=true, coolingDemand=10192.893604542265
 [Section13] 🧊 COOLING RESULTS: d_117=3826.8214105081656, j_116=2.663540445486518, l_116=0, l_114=6366.0721940341
 [Section13] 🧊 COOLING CALC: mode=TGT, coolingSystemType="Cooling", heatingType="Heatpump", isCoolingActive=true, coolingDemand=10192.893604542265
 [Section13] 🧊 COOLING RESULTS: d_117=3826.8214105081656, j_116=2.663540445486518, l_116=0, l_114=6366.0721940341
 [Section13] Target Model calculations complete
 [Section13] ✅ Target Model complete
 [Section13] 🎉 DUAL-ENGINE CALCULATIONS COMPLETE
 [Section13] 🔄 Updating calculated display values for target mode
 [Section13] Calculated display values updated for target mode
 [Section13] 📡 🔥 i_71 (OCCUPANT GAINS) listener triggered - S10 gains factor changed!
 [Section13] 🚀 CALCULATEALL TRIGGERED - Running dual-engine calculations...
 [Section13] 🔄 Starting Reference Model calculations...
 [Section13] Running Reference Model calculations...
 [Section13] 🔥 REF HEATING: systemType="Gas", tedReference=237876.09440223372, hspf=7.1
 [Section13] 🧊 COOLING CALC: mode=REF, coolingSystemType="Cooling", heatingType="Gas", isCoolingActive=true, coolingDemand=10192.893604542265
 [Section13] Reference results stored with ref_ prefix for downstream sections
 [S13 DEBUG] Total Reference results stored: 34
 [Section13] Reference Model calculations complete
 [Section13] ✅ Reference Model complete
 [Section13] 🔄 Starting Target Model calculations...
 [Section13] Running Target Model calculations...
 [S13] TGT HEATING: Heatpump, HSPF=12.5
 [S13] TGT FUEL: Heatpump system
 [S13] FUEL STORED: Heatpump → Gas=0m³, Oil=0L
 [Section13] 🧊 COOLING CALC: mode=TGT, coolingSystemType="Cooling", heatingType="Heatpump", isCoolingActive=true, coolingDemand=10192.893604542265
 [Section13] 🧊 COOLING RESULTS: d_117=3826.8214105081656, j_116=2.663540445486518, l_116=0, l_114=6366.0721940341
 [Section13] 🧊 COOLING CALC: mode=TGT, coolingSystemType="Cooling", heatingType="Heatpump", isCoolingActive=true, coolingDemand=10192.893604542265
 [Section13] 🧊 COOLING RESULTS: d_117=3826.8214105081656, j_116=2.663540445486518, l_116=0, l_114=6366.0721940341
 [Section13] Target Model calculations complete
 [Section13] ✅ Target Model complete
 [Section13] 🎉 DUAL-ENGINE CALCULATIONS COMPLETE
 [Section13] 🔄 Updating calculated display values for target mode
 [Section13] Calculated display values updated for target mode
 [S14 DEBUG] 🔄 Running Reference Model calculations...
 [S14 DEBUG] ✅ Converted to numbers - ref_d_127 calculation: 59532.28501397147 + 119064.57002794294 + 36440.079840319355 + 84594.73968 - 61755.58016000001
 [S14 DEBUG] ✅ ref_d_127 = 237876.09440223372 (should be numeric, not NaN)
 [S14 DEBUG] ✅ Stored ref_d_127 = 237876.09440223372 in StateManager
 [S14 DEBUG] 🔄 Continuing with other Reference calculations...
 [S14 DEBUG] ref_d_128 calculation: 59532.28501397147 + 119064.57002794294 + 36440.079840319355 - 61755.58016000001 = 153281.35472223375
 [Section13] 🧊 COOLING CALC: mode=TGT, coolingSystemType="Cooling", heatingType="Heatpump", isCoolingActive=true, coolingDemand=29632.893604542267
 ✅ S15 Reference Model: All values converted to numbers for proper math
 ✅ S15 Reference Model: Additional fuel variables declared for cost calculations
 [S04] S15 target electricity changed: d_136
 [S04] Starting dual-engine Excel-compliant calculations
 [S04] Calculating Target model
 [S04] calculateH28 DEBUG:
      Space heating fuel (d_113): 'Heatpump'
      Water heating fuel (d_51): 'Heatpump'
      Water gas volume (e_51): 0
      Space gas volume (h_115): 0
      Final H28 result: 0
 [S04] calculateH30 DEBUG:
      Space heating fuel (d_113): 'Heatpump'
      Water heating fuel (d_51): 'Heatpump'
      Water oil volume (k_54): 0
      Space oil volume (f_115): 0
      Final H30 result: 0
 [S04] Row 32 Subtotals - F32: 132938, G32: 6779.838, J32: 195669.40971219103, K32: 9979.139895321741
 🟢 [S01] TARGET ENERGY LISTENER: j_32 changed from 188370.85337416286 to 195669.40971219103 → will update TARGET COLUMN H
 🚀 [S01] =================================
 🚀 [S01] PURE DISPLAY CONSUMER TRIGGERED
 🚀 [S01] =================================
 🎯 [S01] PURE DISPLAY CONSUMER: Starting Excel-compliant calculations...
 🔵 [S01] Upstream Reference: refEnergy=313511.384841666 (from ref_j_32), refEmissions=11286.409854299976, refEmbodiedCarbon=350
 🟢 [S01] Upstream Target: targetEnergy=195669.40971219103 (from j_32), targetEmissions=9606.913522082306, embodiedCarbon=345.82
 🟡 [S01] Upstream Actual: actualEnergy=132938, actualEmissions=6779.838
 🎯 [S01] Building: area=2427.2, serviceLife=50, useType=Utility Bills
 🔵 [S01] CALCULATED Reference COLUMN E: e_10=129.2, e_8=4.6, e_6=11.6
 🟢 [S01] CALCULATED Target COLUMN H: h_10=80.6, h_8=4, h_6=10.9
 🟡 [S01] CALCULATED Actual COLUMN K: k_10=54.8, k_8=2.8, k_6=9.7
 ✅ [S01] PURE DISPLAY CONSUMER: All values calculated and displayed
 ✅ [S01] PURE DISPLAY CONSUMER COMPLETE
 🚀 [S01] =================================
 📡 [S01] Listener triggered: k_32 changed from 9606.913522082306 to 9979.139895321741
 🚀 [S01] =================================
 🚀 [S01] PURE DISPLAY CONSUMER TRIGGERED
 🚀 [S01] =================================
 🎯 [S01] PURE DISPLAY CONSUMER: Starting Excel-compliant calculations...
 🔵 [S01] Upstream Reference: refEnergy=313511.384841666 (from ref_j_32), refEmissions=11286.409854299976, refEmbodiedCarbon=350
 🟢 [S01] Upstream Target: targetEnergy=195669.40971219103 (from j_32), targetEmissions=9979.139895321741, embodiedCarbon=345.82
 🟡 [S01] Upstream Actual: actualEnergy=132938, actualEmissions=6779.838
 🎯 [S01] Building: area=2427.2, serviceLife=50, useType=Utility Bills
 🔵 [S01] CALCULATED Reference COLUMN E: e_10=129.2, e_8=4.6, e_6=11.6
 🟢 [S01] CALCULATED Target COLUMN H: h_10=80.6, h_8=4.1, h_6=11
 🟡 [S01] CALCULATED Actual COLUMN K: k_10=54.8, k_8=2.8, k_6=9.7
 ✅ [S01] PURE DISPLAY CONSUMER: All values calculated and displayed
 ✅ [S01] PURE DISPLAY CONSUMER COMPLETE
 🚀 [S01] =================================
 [S05] Running dual-engine calculations...
 [S05] Target model calculations complete
 [S05] Reference model calculations complete
 [S05] Dual-engine calculations complete
 🔄 [S05] updateCalculatedDisplayValues: mode=target
 [S05] Running dual-engine calculations...
 [S05] Target model calculations complete
 [S05] Reference model calculations complete
 [S05] Dual-engine calculations complete
 🔄 [S05] updateCalculatedDisplayValues: mode=target
 ✅ S15 Reference Model: All values converted to numbers for proper math
 ✅ S15 Reference Model: Additional fuel variables declared for cost calculations
 ✅ S15 Reference Model: All values converted to numbers for proper math
 ✅ S15 Reference Model: Additional fuel variables declared for cost calculations
 ✅ S15 Reference Model: All values converted to numbers for proper math
 ✅ S15 Reference Model: Additional fuel variables declared for cost calculations
 ✅ S15 Reference Model: All values converted to numbers for proper math
 ✅ S15 Reference Model: Additional fuel variables declared for cost calculations
 [S04] Target model calculations complete
 [S04] Calculating Reference model
 [S04] calculateH28 DEBUG:
      Space heating fuel (d_113): 'Heatpump'
      Water heating fuel (d_51): 'Heatpump'
      Water gas volume (e_51): 0
      Space gas volume (h_115): 25512.2366368762
      Final H28 result: 0
 [S04] calculateH30 DEBUG:
      Space heating fuel (d_113): 'Heatpump'
      Water heating fuel (d_51): 'Heatpump'
      Water oil volume (k_54): 0
      Space oil volume (f_115): 0
      Final H30 result: 0
 [S04] Row 32 Subtotals - F32: 132938, G32: 4785.768, J32: 313511.384841666, K32: 11286.409854299976
 [S04] Reference model calculations complete
 [S04] Dual-engine calculations completed successfully
 ✅ S15 Reference Model: All values converted to numbers for proper math
 ✅ S15 Reference Model: Additional fuel variables declared for cost calculations
 [Section13] 🧊 COOLING RESULTS: d_117=11125.377748536335, j_116=2.663540445486518, l_116=0, l_114=18507.51585600593
 [Section13] 🧊 COOLING CALC: mode=TGT, coolingSystemType="Cooling", heatingType="Heatpump", isCoolingActive=true, coolingDemand=29632.893604542267
4011-Section13.js:2603 [Section13] 🧊 COOLING RESULTS: d_117=11125.377748536335, j_116=2.663540445486518, l_116=0, l_114=18507.51585600593
4011-Section14.js:1000 [S14 DEBUG] 🔄 Running Reference Model calculations...
4011-Section14.js:1043 [S14 DEBUG] ✅ Converted to numbers - ref_d_127 calculation: 59532.28501397147 + 119064.57002794294 + 36440.079840319355 + 84594.73968 - 61755.58016000001
4011-Section14.js:1050 [S14 DEBUG] ✅ ref_d_127 = 237876.09440223372 (should be numeric, not NaN)
4011-Section14.js:1060 [S14 DEBUG] ✅ Stored ref_d_127 = 237876.09440223372 in StateManager
4011-Section14.js:1063 [S14 DEBUG] 🔄 Continuing with other Reference calculations...
4011-Section14.js:1078 [S14 DEBUG] ref_d_128 calculation: 59532.28501397147 + 119064.57002794294 + 36440.079840319355 - 61755.58016000001 = 153281.35472223375
4011-Section14.js:1000 [S14 DEBUG] 🔄 Running Reference Model calculations...
4011-Section14.js:1043 [S14 DEBUG] ✅ Converted to numbers - ref_d_127 calculation: 59532.28501397147 + 119064.57002794294 + 36440.079840319355 + 84594.73968 - 61755.58016000001
4011-Section14.js:1050 [S14 DEBUG] ✅ ref_d_127 = 237876.09440223372 (should be numeric, not NaN)
4011-Section14.js:1060 [S14 DEBUG] ✅ Stored ref_d_127 = 237876.09440223372 in StateManager
4011-Section14.js:1063 [S14 DEBUG] 🔄 Continuing with other Reference calculations...
4011-Section14.js:1078 [S14 DEBUG] ref_d_128 calculation: 59532.28501397147 + 119064.57002794294 + 36440.079840319355 - 61755.58016000001 = 153281.35472223375
4011-Section14.js:1000 [S14 DEBUG] 🔄 Running Reference Model calculations...
4011-Section14.js:1043 [S14 DEBUG] ✅ Converted to numbers - ref_d_127 calculation: 59532.28501397147 + 119064.57002794294 + 36440.079840319355 + 84594.73968 - 61755.58016000001
4011-Section14.js:1050 [S14 DEBUG] ✅ ref_d_127 = 237876.09440223372 (should be numeric, not NaN)
4011-Section14.js:1060 [S14 DEBUG] ✅ Stored ref_d_127 = 237876.09440223372 in StateManager
4011-Section14.js:1063 [S14 DEBUG] 🔄 Continuing with other Reference calculations...
4011-Section14.js:1078 [S14 DEBUG] ref_d_128 calculation: 59532.28501397147 + 119064.57002794294 + 36440.079840319355 - 61755.58016000001 = 153281.35472223375
4011-Section15.js:1462 ✅ S15 Reference Model: All values converted to numbers for proper math
4011-Section15.js:1475 ✅ S15 Reference Model: Additional fuel variables declared for cost calculations
4011-Section15.js:1462 ✅ S15 Reference Model: All values converted to numbers for proper math
4011-Section15.js:1475 ✅ S15 Reference Model: Additional fuel variables declared for cost calculations
4011-Section15.js:1462 ✅ S15 Reference Model: All values converted to numbers for proper math
4011-Section15.js:1475 ✅ S15 Reference Model: Additional fuel variables declared for cost calculations
4011-Section15.js:1462 ✅ S15 Reference Model: All values converted to numbers for proper math
4011-Section15.js:1475 ✅ S15 Reference Model: Additional fuel variables declared for cost calculations
4011-Section02.js:1563 S02: Saved Target state to localStorage
4011-Section01.js:985 📡 [S01] Listener triggered: h_15 changed from 2427.2 to 1427.2
4011-Section01.js:899 🚀 [S01] =================================
4011-Section01.js:900 🚀 [S01] PURE DISPLAY CONSUMER TRIGGERED
4011-Section01.js:901 🚀 [S01] =================================
4011-Section01.js:563 🎯 [S01] PURE DISPLAY CONSUMER: Starting Excel-compliant calculations...
4011-Section01.js:587 🔵 [S01] Upstream Reference: refEnergy=313511.384841666 (from ref_j_32), refEmissions=11286.409854299976, refEmbodiedCarbon=350
4011-Section01.js:588 🟢 [S01] Upstream Target: targetEnergy=195669.40971219103 (from j_32), targetEmissions=9979.139895321741, embodiedCarbon=345.82
4011-Section01.js:589 🟡 [S01] Upstream Actual: actualEnergy=132938, actualEmissions=6779.838
4011-Section01.js:590 🎯 [S01] Building: area=1427.2, serviceLife=50, useType=Utility Bills
4011-Section01.js:634 🔵 [S01] CALCULATED Reference COLUMN E: e_10=219.7, e_8=7.9, e_6=14.9
4011-Section01.js:635 🟢 [S01] CALCULATED Target COLUMN H: h_10=137.1, h_8=7, h_6=13.9
4011-Section01.js:636 🟡 [S01] CALCULATED Actual COLUMN K: k_10=93.1, k_8=4.8, k_6=11.7
4011-Section01.js:713 ✅ [S01] PURE DISPLAY CONSUMER: All values calculated and displayed
4011-Section01.js:908 ✅ [S01] PURE DISPLAY CONSUMER COMPLETE
4011-Section01.js:909 🚀 [S01] =================================
4011-Section04.js:2422 [S04] Conditioned area changed: h_15
4011-Section04.js:1506 [S04] Starting dual-engine Excel-compliant calculations
4011-Section04.js:1514 [S04] Calculating Target model
4011-Section04.js:1221 [S04] calculateH28 DEBUG:
      Space heating fuel (d_113): 'Heatpump'
      Water heating fuel (d_51): 'Heatpump'
      Water gas volume (e_51): 0
      Space gas volume (h_115): 0
      Final H28 result: 0
4011-Section04.js:1305 [S04] calculateH30 DEBUG:
      Space heating fuel (d_113): 'Heatpump'
      Water heating fuel (d_51): 'Heatpump'
      Water oil volume (k_54): 0
      Space oil volume (f_115): 0
      Final H30 result: 0
4011-Section04.js:939 [S04] Row 32 Subtotals - F32: 132938, G32: 6779.838, J32: 195669.40971219103, K32: 9979.139895321741
 [S04] Target model calculations complete
 [S04] Calculating Reference model
 [S04] calculateH28 DEBUG:
      Space heating fuel (d_113): 'Heatpump'
      Water heating fuel (d_51): 'Heatpump'
      Water gas volume (e_51): 0
      Space gas volume (h_115): 25512.2366368762
      Final H28 result: 0
 [S04] calculateH30 DEBUG:
      Space heating fuel (d_113): 'Heatpump'
      Water heating fuel (d_51): 'Heatpump'
      Water oil volume (k_54): 0
      Space oil volume (f_115): 0
      Final H30 result: 0
 [S04] Row 32 Subtotals - F32: 132938, G32: 4785.768, J32: 313511.384841666, K32: 11286.409854299976
 [S04] Reference model calculations complete
 [S04] Dual-engine calculations completed successfully
 [S05] Running dual-engine calculations...
 [S05] Target model calculations complete
 [S05] Reference model calculations complete
 [S05] Dual-engine calculations complete
 🔄 [S05] updateCalculatedDisplayValues: mode=target
 [S05] Running dual-engine calculations...
 [S05] Target model calculations complete
 [S05] Reference model calculations complete
 [S05] Dual-engine calculations complete
 🔄 [S05] updateCalculatedDisplayValues: mode=target
 ✅ S15 Reference Model: All values converted to numbers for proper math
 ✅ S15 Reference Model: Additional fuel variables declared for cost calculations
 [S04] S15 target electricity changed: d_136
 [S04] Starting dual-engine Excel-compliant calculations
 [S04] Calculating Target model
 [S04] calculateH28 DEBUG:
      Space heating fuel (d_113): 'Heatpump'
      Water heating fuel (d_51): 'Heatpump'
      Water gas volume (e_51): 0
      Space gas volume (h_115): 0
      Final H28 result: 0
 [S04] calculateH30 DEBUG:
      Space heating fuel (d_113): 'Heatpump'
      Water heating fuel (d_51): 'Heatpump'
      Water oil volume (k_54): 0
      Space oil volume (f_115): 0
      Final H30 result: 0
 [S04] Row 32 Subtotals - F32: 132938, G32: 6779.838, J32: 136539.40971219106, K32: 6963.509895321745
 🟢 [S01] TARGET ENERGY LISTENER: j_32 changed from 195669.40971219103 to 136539.40971219106 → will update TARGET COLUMN H
 🚀 [S01] =================================
 🚀 [S01] PURE DISPLAY CONSUMER TRIGGERED
 🚀 [S01] =================================
 🎯 [S01] PURE DISPLAY CONSUMER: Starting Excel-compliant calculations...
 🔵 [S01] Upstream Reference: refEnergy=313511.384841666 (from ref_j_32), refEmissions=11286.409854299976, refEmbodiedCarbon=350
 🟢 [S01] Upstream Target: targetEnergy=136539.40971219106 (from j_32), targetEmissions=9979.139895321741, embodiedCarbon=345.82
 🟡 [S01] Upstream Actual: actualEnergy=132938, actualEmissions=6779.838
 🎯 [S01] Building: area=1427.2, serviceLife=50, useType=Utility Bills
 🔵 [S01] CALCULATED Reference COLUMN E: e_10=219.7, e_8=7.9, e_6=14.9
 🟢 [S01] CALCULATED Target COLUMN H: h_10=95.7, h_8=7, h_6=13.9
 🟡 [S01] CALCULATED Actual COLUMN K: k_10=93.1, k_8=4.8, k_6=11.7
 ✅ [S01] PURE DISPLAY CONSUMER: All values calculated and displayed
 ✅ [S01] PURE DISPLAY CONSUMER COMPLETE
 🚀 [S01] =================================
 📡 [S01] Listener triggered: k_32 changed from 9979.139895321741 to 6963.509895321745
 🚀 [S01] =================================
 🚀 [S01] PURE DISPLAY CONSUMER TRIGGERED
 🚀 [S01] =================================
 🎯 [S01] PURE DISPLAY CONSUMER: Starting Excel-compliant calculations...
 🔵 [S01] Upstream Reference: refEnergy=313511.384841666 (from ref_j_32), refEmissions=11286.409854299976, refEmbodiedCarbon=350
 🟢 [S01] Upstream Target: targetEnergy=136539.40971219106 (from j_32), targetEmissions=6963.509895321745, embodiedCarbon=345.82
 🟡 [S01] Upstream Actual: actualEnergy=132938, actualEmissions=6779.838
 🎯 [S01] Building: area=1427.2, serviceLife=50, useType=Utility Bills
 🔵 [S01] CALCULATED Reference COLUMN E: e_10=219.7, e_8=7.9, e_6=14.9
 🟢 [S01] CALCULATED Target COLUMN H: h_10=95.7, h_8=4.9, h_6=11.8
 🟡 [S01] CALCULATED Actual COLUMN K: k_10=93.1, k_8=4.8, k_6=11.7
 ✅ [S01] PURE DISPLAY CONSUMER: All values calculated and displayed
 ✅ [S01] PURE DISPLAY CONSUMER COMPLETE
 🚀 [S01] =================================
 [S05] Running dual-engine calculations...
 [S05] Target model calculations complete
 [S05] Reference model calculations complete
 [S05] Dual-engine calculations complete
 🔄 [S05] updateCalculatedDisplayValues: mode=target
 [S05] Running dual-engine calculations...
 [S05] Target model calculations complete
 [S05] Reference model calculations complete
 [S05] Dual-engine calculations complete
 🔄 [S05] updateCalculatedDisplayValues: mode=target
 ✅ S15 Reference Model: All values converted to numbers for proper math
 ✅ S15 Reference Model: Additional fuel variables declared for cost calculations
 ✅ S15 Reference Model: All values converted to numbers for proper math
 ✅ S15 Reference Model: Additional fuel variables declared for cost calculations
 ✅ S15 Reference Model: All values converted to numbers for proper math
 ✅ S15 Reference Model: Additional fuel variables declared for cost calculations
 ✅ S15 Reference Model: All values converted to numbers for proper math
 ✅ S15 Reference Model: Additional fuel variables declared for cost calculations
 [S04] Target model calculations complete
 [S04] Calculating Reference model
 [S04] calculateH28 DEBUG:
      Space heating fuel (d_113): 'Heatpump'
      Water heating fuel (d_51): 'Heatpump'
      Water gas volume (e_51): 0
      Space gas volume (h_115): 25512.2366368762
      Final H28 result: 0
 [S04] calculateH30 DEBUG:
      Space heating fuel (d_113): 'Heatpump'
      Water heating fuel (d_51): 'Heatpump'
      Water oil volume (k_54): 0
      Space oil volume (f_115): 0
      Final H30 result: 0
 [S04] Row 32 Subtotals - F32: 132938, G32: 4785.768, J32: 313511.384841666, K32: 11286.409854299976
 [S04] Reference model calculations complete
 [S04] Dual-engine calculations completed successfully
 ✅ S15 Reference Model: All values converted to numbers for proper math
 ✅ S15 Reference Model: Additional fuel variables declared for cost calculations
 S10: Global listener triggered by i_71, recalculating all.
 [S14 DEBUG] 🔄 Running Reference Model calculations...
 [S14 DEBUG] ✅ Converted to numbers - ref_d_127 calculation: 59532.28501397147 + 119064.57002794294 + 36440.079840319355 + 84594.73968 - 45879.580160000005
 [S14 DEBUG] ✅ ref_d_127 = 253752.09440223372 (should be numeric, not NaN)
 [S14 DEBUG] ✅ Stored ref_d_127 = 253752.09440223372 in StateManager
 [S14 DEBUG] 🔄 Continuing with other Reference calculations...
 [S14 DEBUG] ref_d_128 calculation: 59532.28501397147 + 119064.57002794294 + 36440.079840319355 - 45879.580160000005 = 169157.35472223375
 [Section13] 📡 🔥 d_127 (TED) listener triggered - S14 energy demand changed!
 [Section13] 🚀 CALCULATEALL TRIGGERED - Running dual-engine calculations...
 [Section13] 🔄 Starting Reference Model calculations...
 [Section13] Running Reference Model calculations...
 [Section13] 🔥 REF HEATING: systemType="Gas", tedReference=253752.09440223372, hspf=7.1
 [Section13] 🧊 COOLING CALC: mode=REF, coolingSystemType="Cooling", heatingType="Gas", isCoolingActive=true, coolingDemand=29632.893604542267
 ✅ S15 Reference Model: All values converted to numbers for proper math
 ✅ S15 Reference Model: Additional fuel variables declared for cost calculations
 ✅ S15 Reference Model: All values converted to numbers for proper math
 ✅ S15 Reference Model: Additional fuel variables declared for cost calculations
 [S04] S13 space gas volume changed (Reference): ref_h_115
 [S04] calculateH28 DEBUG:
      Space heating fuel (d_113): 'Heatpump'
      Water heating fuel (d_51): 'Heatpump'
      Water gas volume (e_51): 0
      Space gas volume (h_115): 27214.939339578905
      Final H28 result: 0
 [S04] calculateH30 DEBUG:
      Space heating fuel (d_113): 'Heatpump'
      Water heating fuel (d_51): 'Heatpump'
      Water oil volume (k_54): 0
      Space oil volume (f_115): 0
      Final H30 result: 0
 [S04] Row 32 Subtotals - F32: 132938, G32: 4785.768, J32: 313511.384841666, K32: 11286.409854299976
 [S04] Reference model calculations complete
 [S04] 🔄 Updating calculated display values for target mode
 [S04] Calculated display values updated for target mode
 ✅ S15 Reference Model: All values converted to numbers for proper math
 ✅ S15 Reference Model: Additional fuel variables declared for cost calculations
 ✅ S15 Reference Model: All values converted to numbers for proper math
 ✅ S15 Reference Model: Additional fuel variables declared for cost calculations
 [Section13] Reference results stored with ref_ prefix for downstream sections
 [S13 DEBUG] Total Reference results stored: 34
 [Section13] Reference Model calculations complete
 [Section13] ✅ Reference Model complete
 [Section13] 🔄 Starting Target Model calculations...
 [Section13] Running Target Model calculations...
 [S13] TGT HEATING: Heatpump, HSPF=12.5
 ✅ S15 Reference Model: All values converted to numbers for proper math
 ✅ S15 Reference Model: Additional fuel variables declared for cost calculations
 [S04] S15 target electricity changed: d_136
 [S04] Starting dual-engine Excel-compliant calculations
 [S04] Calculating Target model
 [S04] calculateH28 DEBUG:
      Space heating fuel (d_113): 'Heatpump'
      Water heating fuel (d_51): 'Heatpump'
      Water gas volume (e_51): 0
      Space gas volume (h_115): 0
      Final H28 result: 0
 [S04] calculateH30 DEBUG:
      Space heating fuel (d_113): 'Heatpump'
      Water heating fuel (d_51): 'Heatpump'
      Water oil volume (k_54): 0
      Space oil volume (f_115): 0
      Final H30 result: 0
 [S04] Row 32 Subtotals - F32: 132938, G32: 6779.838, J32: 140872.92267219105, K32: 7184.519056281743
 🟢 [S01] TARGET ENERGY LISTENER: j_32 changed from 136539.40971219106 to 140872.92267219105 → will update TARGET COLUMN H
 🚀 [S01] =================================
 🚀 [S01] PURE DISPLAY CONSUMER TRIGGERED
 🚀 [S01] =================================
 🎯 [S01] PURE DISPLAY CONSUMER: Starting Excel-compliant calculations...
 🔵 [S01] Upstream Reference: refEnergy=313511.384841666 (from ref_j_32), refEmissions=11286.409854299976, refEmbodiedCarbon=350
 🟢 [S01] Upstream Target: targetEnergy=140872.92267219105 (from j_32), targetEmissions=6963.509895321745, embodiedCarbon=345.82
 🟡 [S01] Upstream Actual: actualEnergy=132938, actualEmissions=6779.838
 🎯 [S01] Building: area=1427.2, serviceLife=50, useType=Utility Bills
 🔵 [S01] CALCULATED Reference COLUMN E: e_10=219.7, e_8=7.9, e_6=14.9
 🟢 [S01] CALCULATED Target COLUMN H: h_10=98.7, h_8=4.9, h_6=11.8
 🟡 [S01] CALCULATED Actual COLUMN K: k_10=93.1, k_8=4.8, k_6=11.7
 ✅ [S01] PURE DISPLAY CONSUMER: All values calculated and displayed
 ✅ [S01] PURE DISPLAY CONSUMER COMPLETE
 🚀 [S01] =================================
 📡 [S01] Listener triggered: k_32 changed from 6963.509895321745 to 7184.519056281743
4011-Section01.js:899 🚀 [S01] =================================
4011-Section01.js:900 🚀 [S01] PURE DISPLAY CONSUMER TRIGGERED
4011-Section01.js:901 🚀 [S01] =================================
4011-Section01.js:563 🎯 [S01] PURE DISPLAY CONSUMER: Starting Excel-compliant calculations...
4011-Section01.js:587 🔵 [S01] Upstream Reference: refEnergy=313511.384841666 (from ref_j_32), refEmissions=11286.409854299976, refEmbodiedCarbon=350
4011-Section01.js:588 🟢 [S01] Upstream Target: targetEnergy=140872.92267219105 (from j_32), targetEmissions=7184.519056281743, embodiedCarbon=345.82
4011-Section01.js:589 🟡 [S01] Upstream Actual: actualEnergy=132938, actualEmissions=6779.838
4011-Section01.js:590 🎯 [S01] Building: area=1427.2, serviceLife=50, useType=Utility Bills
4011-Section01.js:634 🔵 [S01] CALCULATED Reference COLUMN E: e_10=219.7, e_8=7.9, e_6=14.9
4011-Section01.js:635 🟢 [S01] CALCULATED Target COLUMN H: h_10=98.7, h_8=5, h_6=11.9
4011-Section01.js:636 🟡 [S01] CALCULATED Actual COLUMN K: k_10=93.1, k_8=4.8, k_6=11.7
4011-Section01.js:713 ✅ [S01] PURE DISPLAY CONSUMER: All values calculated and displayed
4011-Section01.js:908 ✅ [S01] PURE DISPLAY CONSUMER COMPLETE
4011-Section01.js:909 🚀 [S01] =================================
4011-Section05.js:907 [S05] Running dual-engine calculations...
4011-Section05.js:897 [S05] Target model calculations complete
4011-Section05.js:873 [S05] Reference model calculations complete
4011-Section05.js:910 [S05] Dual-engine calculations complete
4011-Section05.js:179 🔄 [S05] updateCalculatedDisplayValues: mode=target
4011-Section05.js:907 [S05] Running dual-engine calculations...
4011-Section05.js:897 [S05] Target model calculations complete
4011-Section05.js:873 [S05] Reference model calculations complete
4011-Section05.js:910 [S05] Dual-engine calculations complete
4011-Section05.js:179 🔄 [S05] updateCalculatedDisplayValues: mode=target
4011-Section15.js:1462 ✅ S15 Reference Model: All values converted to numbers for proper math
4011-Section15.js:1475 ✅ S15 Reference Model: Additional fuel variables declared for cost calculations
4011-Section15.js:1462 ✅ S15 Reference Model: All values converted to numbers for proper math
 ✅ S15 Reference Model: Additional fuel variables declared for cost calculations
 ✅ S15 Reference Model: All values converted to numbers for proper math
 ✅ S15 Reference Model: Additional fuel variables declared for cost calculations
 ✅ S15 Reference Model: All values converted to numbers for proper math
 ✅ S15 Reference Model: Additional fuel variables declared for cost calculations
 [S04] Target model calculations complete
 [S04] Calculating Reference model
 [S04] calculateH28 DEBUG:
      Space heating fuel (d_113): 'Heatpump'
      Water heating fuel (d_51): 'Heatpump'
      Water gas volume (e_51): 0
      Space gas volume (h_115): 27214.939339578905
      Final H28 result: 0
 [S04] calculateH30 DEBUG:
      Space heating fuel (d_113): 'Heatpump'
      Water heating fuel (d_51): 'Heatpump'
      Water oil volume (k_54): 0
      Space oil volume (f_115): 0
      Final H30 result: 0
 [S04] Row 32 Subtotals - F32: 132938, G32: 4785.768, J32: 313511.384841666, K32: 11286.409854299976
 [S04] Reference model calculations complete
 [S04] Dual-engine calculations completed successfully
 ✅ S15 Reference Model: All values converted to numbers for proper math
 ✅ S15 Reference Model: Additional fuel variables declared for cost calculations
 [S13] TGT FUEL: Heatpump system
 [S13] FUEL STORED: Heatpump → Gas=0m³, Oil=0L
 [Section13] 🧊 COOLING CALC: mode=TGT, coolingSystemType="Cooling", heatingType="Heatpump", isCoolingActive=true, coolingDemand=29632.893604542267
 [Section13] 🧊 COOLING RESULTS: d_117=11125.377748536335, j_116=2.663540445486518, l_116=0, l_114=18507.51585600593
 [Section13] 🧊 COOLING CALC: mode=TGT, coolingSystemType="Cooling", heatingType="Heatpump", isCoolingActive=true, coolingDemand=29632.893604542267
 [Section13] 🧊 COOLING RESULTS: d_117=11125.377748536335, j_116=2.663540445486518, l_116=0, l_114=18507.51585600593
 [Section13] Target Model calculations complete
 [Section13] ✅ Target Model complete
 [Section13] 🎉 DUAL-ENGINE CALCULATIONS COMPLETE
 [Section13] 🔄 Updating calculated display values for target mode
 [Section13] Calculated display values updated for target mode
 [Section13] 📡 🔥 d_127 (TED) listener triggered - S14 energy demand changed!
 [Section13] 🚀 CALCULATEALL TRIGGERED - Running dual-engine calculations...
 [Section13] 🔄 Starting Reference Model calculations...
 [Section13] Running Reference Model calculations...
 [Section13] 🔥 REF HEATING: systemType="Gas", tedReference=253752.09440223372, hspf=7.1
 [Section13] 🧊 COOLING CALC: mode=REF, coolingSystemType="Cooling", heatingType="Gas", isCoolingActive=true, coolingDemand=29632.893604542267
 [Section13] Reference results stored with ref_ prefix for downstream sections
 [S13 DEBUG] Total Reference results stored: 34
 [Section13] Reference Model calculations complete
 [Section13] ✅ Reference Model complete
 [Section13] 🔄 Starting Target Model calculations...
 [Section13] Running Target Model calculations...
 [S13] TGT HEATING: Heatpump, HSPF=12.5
 [S13] TGT FUEL: Heatpump system
 [S13] FUEL STORED: Heatpump → Gas=0m³, Oil=0L
 [Section13] 🧊 COOLING CALC: mode=TGT, coolingSystemType="Cooling", heatingType="Heatpump", isCoolingActive=true, coolingDemand=29632.893604542267
 [Section13] 🧊 COOLING RESULTS: d_117=11125.377748536335, j_116=2.663540445486518, l_116=0, l_114=18507.51585600593
 [Section13] 🧊 COOLING CALC: mode=TGT, coolingSystemType="Cooling", heatingType="Heatpump", isCoolingActive=true, coolingDemand=29632.893604542267
 [Section13] 🧊 COOLING RESULTS: d_117=11125.377748536335, j_116=2.663540445486518, l_116=0, l_114=18507.51585600593
 [Section13] Target Model calculations complete
 [Section13] ✅ Target Model complete
 [Section13] 🎉 DUAL-ENGINE CALCULATIONS COMPLETE
 [Section13] 🔄 Updating calculated display values for target mode
 [Section13] Calculated display values updated for target mode
 [S14 DEBUG] 🔄 Running Reference Model calculations...
 [S14 DEBUG] ✅ Converted to numbers - ref_d_127 calculation: 59532.28501397147 + 119064.57002794294 + 36440.079840319355 + 84594.73968 - 45879.580160000005
 [S14 DEBUG] ✅ ref_d_127 = 253752.09440223372 (should be numeric, not NaN)
 [S14 DEBUG] ✅ Stored ref_d_127 = 253752.09440223372 in StateManager
 [S14 DEBUG] 🔄 Continuing with other Reference calculations...
 [S14 DEBUG] ref_d_128 calculation: 59532.28501397147 + 119064.57002794294 + 36440.079840319355 - 45879.580160000005 = 169157.35472223375
 ✅ S15 Reference Model: All values converted to numbers for proper math
 ✅ S15 Reference Model: Additional fuel variables declared for cost calculations
 ✅ S15 Reference Model: All values converted to numbers for proper math
 ✅ S15 Reference Model: Additional fuel variables declared for cost calculations
 [Section13] 📡 🔥 i_71 (OCCUPANT GAINS) listener triggered - S10 gains factor changed!
 [Section13] 🚀 CALCULATEALL TRIGGERED - Running dual-engine calculations...
 [Section13] 🔄 Starting Reference Model calculations...
 [Section13] Running Reference Model calculations...
 [Section13] 🔥 REF HEATING: systemType="Gas", tedReference=253752.09440223372, hspf=7.1
 [Section13] 🧊 COOLING CALC: mode=REF, coolingSystemType="Cooling", heatingType="Gas", isCoolingActive=true, coolingDemand=29632.893604542267
 [Section13] Reference results stored with ref_ prefix for downstream sections
 [S13 DEBUG] Total Reference results stored: 34
 [Section13] Reference Model calculations complete
 [Section13] ✅ Reference Model complete
 [Section13] 🔄 Starting Target Model calculations...
 [Section13] Running Target Model calculations...
 [S13] TGT HEATING: Heatpump, HSPF=12.5
 [S13] TGT FUEL: Heatpump system
 [S13] FUEL STORED: Heatpump → Gas=0m³, Oil=0L
 [Section13] 🧊 COOLING CALC: mode=TGT, coolingSystemType="Cooling", heatingType="Heatpump", isCoolingActive=true, coolingDemand=29632.893604542267
 [Section13] 🧊 COOLING RESULTS: d_117=11125.377748536335, j_116=2.663540445486518, l_116=0, l_114=18507.51585600593
 [Section13] 🧊 COOLING CALC: mode=TGT, coolingSystemType="Cooling", heatingType="Heatpump", isCoolingActive=true, coolingDemand=29632.893604542267
 [Section13] 🧊 COOLING RESULTS: d_117=11125.377748536335, j_116=2.663540445486518, l_116=0, l_114=18507.51585600593
 [Section13] Target Model calculations complete
 [Section13] ✅ Target Model complete
 [Section13] 🎉 DUAL-ENGINE CALCULATIONS COMPLETE
 [Section13] 🔄 Updating calculated display values for target mode
 [Section13] Calculated display values updated for target mode
 [Section13] 📡 🔥 i_71 (OCCUPANT GAINS) listener triggered - S10 gains factor changed!
 [Section13] 🚀 CALCULATEALL TRIGGERED - Running dual-engine calculations...
 [Section13] 🔄 Starting Reference Model calculations...
 [Section13] Running Reference Model calculations...
 [Section13] 🔥 REF HEATING: systemType="Gas", tedReference=253752.09440223372, hspf=7.1
 [Section13] 🧊 COOLING CALC: mode=REF, coolingSystemType="Cooling", heatingType="Gas", isCoolingActive=true, coolingDemand=29632.893604542267
 [Section13] Reference results stored with ref_ prefix for downstream sections
 [S13 DEBUG] Total Reference results stored: 34
 [Section13] Reference Model calculations complete
 [Section13] ✅ Reference Model complete
 [Section13] 🔄 Starting Target Model calculations...
 [Section13] Running Target Model calculations...
 [S13] TGT HEATING: Heatpump, HSPF=12.5
 [S13] TGT FUEL: Heatpump system
 [S13] FUEL STORED: Heatpump → Gas=0m³, Oil=0L
 [Section13] 🧊 COOLING CALC: mode=TGT, coolingSystemType="Cooling", heatingType="Heatpump", isCoolingActive=true, coolingDemand=29632.893604542267
 [Section13] 🧊 COOLING RESULTS: d_117=11125.377748536335, j_116=2.663540445486518, l_116=0, l_114=18507.51585600593
 [Section13] 🧊 COOLING CALC: mode=TGT, coolingSystemType="Cooling", heatingType="Heatpump", isCoolingActive=true, coolingDemand=29632.893604542267
 [Section13] 🧊 COOLING RESULTS: d_117=11125.377748536335, j_116=2.663540445486518, l_116=0, l_114=18507.51585600593
 [Section13] Target Model calculations complete
 [Section13] ✅ Target Model complete
 [Section13] 🎉 DUAL-ENGINE CALCULATIONS COMPLETE
 [Section13] 🔄 Updating calculated display values for target mode
 [Section13] Calculated display values updated for target mode
 [S14 DEBUG] 🔄 Running Reference Model calculations...
 [S14 DEBUG] ✅ Converted to numbers - ref_d_127 calculation: 59532.28501397147 + 119064.57002794294 + 36440.079840319355 + 84594.73968 - 45879.580160000005
 [S14 DEBUG] ✅ ref_d_127 = 253752.09440223372 (should be numeric, not NaN)
 [S14 DEBUG] ✅ Stored ref_d_127 = 253752.09440223372 in StateManager
 [S14 DEBUG] 🔄 Continuing with other Reference calculations...
 [S14 DEBUG] ref_d_128 calculation: 59532.28501397147 + 119064.57002794294 + 36440.079840319355 - 45879.580160000005 = 169157.35472223375
 [Section13] 🧊 COOLING CALC: mode=TGT, coolingSystemType="Cooling", heatingType="Heatpump", isCoolingActive=true, coolingDemand=10192.893604542265
 ✅ S15 Reference Model: All values converted to numbers for proper math
 ✅ S15 Reference Model: Additional fuel variables declared for cost calculations
 [S04] S15 target electricity changed: d_136
 [S04] Starting dual-engine Excel-compliant calculations
 [S04] Calculating Target model
 [S04] calculateH28 DEBUG:
      Space heating fuel (d_113): 'Heatpump'
      Water heating fuel (d_51): 'Heatpump'
      Water gas volume (e_51): 0
      Space gas volume (h_115): 0
      Final H28 result: 0
 [S04] calculateH30 DEBUG:
      Space heating fuel (d_113): 'Heatpump'
      Water heating fuel (d_51): 'Heatpump'
      Water oil volume (k_54): 0
      Space oil volume (f_115): 0
      Final H30 result: 0
 [S04] Row 32 Subtotals - F32: 132938, G32: 6779.838, J32: 133574.36633416289, K32: 6812.2926830423075
 🟢 [S01] TARGET ENERGY LISTENER: j_32 changed from 140872.92267219105 to 133574.36633416289 → will update TARGET COLUMN H
 🚀 [S01] =================================
 🚀 [S01] PURE DISPLAY CONSUMER TRIGGERED
 🚀 [S01] =================================
 🎯 [S01] PURE DISPLAY CONSUMER: Starting Excel-compliant calculations...
 🔵 [S01] Upstream Reference: refEnergy=313511.384841666 (from ref_j_32), refEmissions=11286.409854299976, refEmbodiedCarbon=350
 🟢 [S01] Upstream Target: targetEnergy=133574.36633416289 (from j_32), targetEmissions=7184.519056281743, embodiedCarbon=345.82
 🟡 [S01] Upstream Actual: actualEnergy=132938, actualEmissions=6779.838
 🎯 [S01] Building: area=1427.2, serviceLife=50, useType=Utility Bills
 🔵 [S01] CALCULATED Reference COLUMN E: e_10=219.7, e_8=7.9, e_6=14.9
 🟢 [S01] CALCULATED Target COLUMN H: h_10=93.6, h_8=5, h_6=11.9
 🟡 [S01] CALCULATED Actual COLUMN K: k_10=93.1, k_8=4.8, k_6=11.7
 ✅ [S01] PURE DISPLAY CONSUMER: All values calculated and displayed
 ✅ [S01] PURE DISPLAY CONSUMER COMPLETE
 🚀 [S01] =================================
 📡 [S01] Listener triggered: k_32 changed from 7184.519056281743 to 6812.2926830423075
 🚀 [S01] =================================
 🚀 [S01] PURE DISPLAY CONSUMER TRIGGERED
 🚀 [S01] =================================
 🎯 [S01] PURE DISPLAY CONSUMER: Starting Excel-compliant calculations...
 🔵 [S01] Upstream Reference: refEnergy=313511.384841666 (from ref_j_32), refEmissions=11286.409854299976, refEmbodiedCarbon=350
 🟢 [S01] Upstream Target: targetEnergy=133574.36633416289 (from j_32), targetEmissions=6812.2926830423075, embodiedCarbon=345.82
 🟡 [S01] Upstream Actual: actualEnergy=132938, actualEmissions=6779.838
 🎯 [S01] Building: area=1427.2, serviceLife=50, useType=Utility Bills
 🔵 [S01] CALCULATED Reference COLUMN E: e_10=219.7, e_8=7.9, e_6=14.9
 🟢 [S01] CALCULATED Target COLUMN H: h_10=93.6, h_8=4.8, h_6=11.7
 🟡 [S01] CALCULATED Actual COLUMN K: k_10=93.1, k_8=4.8, k_6=11.7
 ✅ [S01] PURE DISPLAY CONSUMER: All values calculated and displayed
 ✅ [S01] PURE DISPLAY CONSUMER COMPLETE
 🚀 [S01] =================================
 [S05] Running dual-engine calculations...
 [S05] Target model calculations complete
 [S05] Reference model calculations complete
 [S05] Dual-engine calculations complete
 🔄 [S05] updateCalculatedDisplayValues: mode=target
 [S05] Running dual-engine calculations...
 [S05] Target model calculations complete
 [S05] Reference model calculations complete
 [S05] Dual-engine calculations complete
4011-Section05.js:179 🔄 [S05] updateCalculatedDisplayValues: mode=target
4011-Section15.js:1462 ✅ S15 Reference Model: All values converted to numbers for proper math
4011-Section15.js:1475 ✅ S15 Reference Model: Additional fuel variables declared for cost calculations
4011-Section15.js:1462 ✅ S15 Reference Model: All values converted to numbers for proper math
4011-Section15.js:1475 ✅ S15 Reference Model: Additional fuel variables declared for cost calculations
4011-Section15.js:1462 ✅ S15 Reference Model: All values converted to numbers for proper math
4011-Section15.js:1475 ✅ S15 Reference Model: Additional fuel variables declared for cost calculations
4011-Section15.js:1462 ✅ S15 Reference Model: All values converted to numbers for proper math
4011-Section15.js:1475 ✅ S15 Reference Model: Additional fuel variables declared for cost calculations
4011-Section04.js:1546 [S04] Target model calculations complete
4011-Section04.js:1519 [S04] Calculating Reference model
4011-Section04.js:1221 [S04] calculateH28 DEBUG:
      Space heating fuel (d_113): 'Heatpump'
      Water heating fuel (d_51): 'Heatpump'
      Water gas volume (e_51): 0
      Space gas volume (h_115): 27214.939339578905
      Final H28 result: 0
4011-Section04.js:1305 [S04] calculateH30 DEBUG:
      Space heating fuel (d_113): 'Heatpump'
      Water heating fuel (d_51): 'Heatpump'
      Water oil volume (k_54): 0
      Space oil volume (f_115): 0
      Final H30 result: 0
4011-Section04.js:939 [S04] Row 32 Subtotals - F32: 132938, G32: 4785.768, J32: 313511.384841666, K32: 11286.409854299976
4011-Section04.js:1579 [S04] Reference model calculations complete
4011-Section04.js:1525 [S04] Dual-engine calculations completed successfully
4011-Section15.js:1462 ✅ S15 Reference Model: All values converted to numbers for proper math
4011-Section15.js:1475 ✅ S15 Reference Model: Additional fuel variables declared for cost calculations
4011-Section13.js:2603 [Section13] 🧊 COOLING RESULTS: d_117=3826.8214105081656, j_116=2.663540445486518, l_116=0, l_114=6366.0721940341
4011-Section13.js:2542 [Section13] 🧊 COOLING CALC: mode=TGT, coolingSystemType="Cooling", heatingType="Heatpump", isCoolingActive=true, coolingDemand=10192.893604542265
4011-Section13.js:2603 [Section13] 🧊 COOLING RESULTS: d_117=3826.8214105081656, j_116=2.663540445486518, l_116=0, l_114=6366.0721940341
4011-Section14.js:1000 [S14 DEBUG] 🔄 Running Reference Model calculations...
4011-Section14.js:1043 [S14 DEBUG] ✅ Converted to numbers - ref_d_127 calculation: 59532.28501397147 + 119064.57002794294 + 36440.079840319355 + 84594.73968 - 45879.580160000005
4011-Section14.js:1050 [S14 DEBUG] ✅ ref_d_127 = 253752.09440223372 (should be numeric, not NaN)
4011-Section14.js:1060 [S14 DEBUG] ✅ Stored ref_d_127 = 253752.09440223372 in StateManager
4011-Section14.js:1063 [S14 DEBUG] 🔄 Continuing with other Reference calculations...
4011-Section14.js:1078 [S14 DEBUG] ref_d_128 calculation: 59532.28501397147 + 119064.57002794294 + 36440.079840319355 - 45879.580160000005 = 169157.35472223375
4011-Section14.js:1000 [S14 DEBUG] 🔄 Running Reference Model calculations...
4011-Section14.js:1043 [S14 DEBUG] ✅ Converted to numbers - ref_d_127 calculation: 59532.28501397147 + 119064.57002794294 + 36440.079840319355 + 84594.73968 - 45879.580160000005
4011-Section14.js:1050 [S14 DEBUG] ✅ ref_d_127 = 253752.09440223372 (should be numeric, not NaN)
4011-Section14.js:1060 [S14 DEBUG] ✅ Stored ref_d_127 = 253752.09440223372 in StateManager
4011-Section14.js:1063 [S14 DEBUG] 🔄 Continuing with other Reference calculations...
4011-Section14.js:1078 [S14 DEBUG] ref_d_128 calculation: 59532.28501397147 + 119064.57002794294 + 36440.079840319355 - 45879.580160000005 = 169157.35472223375
4011-Section14.js:1000 [S14 DEBUG] 🔄 Running Reference Model calculations...
4011-Section14.js:1043 [S14 DEBUG] ✅ Converted to numbers - ref_d_127 calculation: 59532.28501397147 + 119064.57002794294 + 36440.079840319355 + 84594.73968 - 45879.580160000005
4011-Section14.js:1050 [S14 DEBUG] ✅ ref_d_127 = 253752.09440223372 (should be numeric, not NaN)
4011-Section14.js:1060 [S14 DEBUG] ✅ Stored ref_d_127 = 253752.09440223372 in StateManager
4011-Section14.js:1063 [S14 DEBUG] 🔄 Continuing with other Reference calculations...
4011-Section14.js:1078 [S14 DEBUG] ref_d_128 calculation: 59532.28501397147 + 119064.57002794294 + 36440.079840319355 - 45879.580160000005 = 169157.35472223375
4011-Section15.js:1462 ✅ S15 Reference Model: All values converted to numbers for proper math
4011-Section15.js:1475 ✅ S15 Reference Model: Additional fuel variables declared for cost calculations
4011-Section15.js:1462 ✅ S15 Reference Model: All values converted to numbers for proper math
4011-Section15.js:1475 ✅ S15 Reference Model: Additional fuel variables declared for cost calculations
4011-Section15.js:1462 ✅ S15 Reference Model: All values converted to numbers for proper math
4011-Section15.js:1475 ✅ S15 Reference Model: Additional fuel variables declared for cost calculations
4011-Section15.js:1462 ✅ S15 Reference Model: All values converted to numbers for proper math
4011-Section15.js:1475 ✅ S15 Reference Model: Additional fuel variables declared for cost calculations
4011-Section02.js:1563 S02: Saved Target state to localStorage
4011-Section01.js:985 📡 [S01] Listener triggered: h_15 changed from 1427.2 to 2427.2
4011-Section01.js:899 🚀 [S01] =================================
4011-Section01.js:900 🚀 [S01] PURE DISPLAY CONSUMER TRIGGERED
4011-Section01.js:901 🚀 [S01] =================================
4011-Section01.js:563 🎯 [S01] PURE DISPLAY CONSUMER: Starting Excel-compliant calculations...
4011-Section01.js:587 🔵 [S01] Upstream Reference: refEnergy=313511.384841666 (from ref_j_32), refEmissions=11286.409854299976, refEmbodiedCarbon=350
4011-Section01.js:588 🟢 [S01] Upstream Target: targetEnergy=133574.36633416289 (from j_32), targetEmissions=6812.2926830423075, embodiedCarbon=345.82
4011-Section01.js:589 🟡 [S01] Upstream Actual: actualEnergy=132938, actualEmissions=6779.838
4011-Section01.js:590 🎯 [S01] Building: area=2427.2, serviceLife=50, useType=Utility Bills
4011-Section01.js:634 🔵 [S01] CALCULATED Reference COLUMN E: e_10=129.2, e_8=4.6, e_6=11.6
4011-Section01.js:635 🟢 [S01] CALCULATED Target COLUMN H: h_10=55, h_8=2.8, h_6=9.7
4011-Section01.js:636 🟡 [S01] CALCULATED Actual COLUMN K: k_10=54.8, k_8=2.8, k_6=9.7
4011-Section01.js:713 ✅ [S01] PURE DISPLAY CONSUMER: All values calculated and displayed
4011-Section01.js:908 ✅ [S01] PURE DISPLAY CONSUMER COMPLETE
4011-Section01.js:909 🚀 [S01] =================================
4011-Section04.js:2422 [S04] Conditioned area changed: h_15
4011-Section04.js:1506 [S04] Starting dual-engine Excel-compliant calculations
4011-Section04.js:1514 [S04] Calculating Target model
4011-Section04.js:1221 [S04] calculateH28 DEBUG:
      Space heating fuel (d_113): 'Heatpump'
      Water heating fuel (d_51): 'Heatpump'
      Water gas volume (e_51): 0
      Space gas volume (h_115): 0
      Final H28 result: 0
4011-Section04.js:1305 [S04] calculateH30 DEBUG:
      Space heating fuel (d_113): 'Heatpump'
      Water heating fuel (d_51): 'Heatpump'
      Water oil volume (k_54): 0
      Space oil volume (f_115): 0
      Final H30 result: 0
4011-Section04.js:939 [S04] Row 32 Subtotals - F32: 132938, G32: 6779.838, J32: 133574.36633416289, K32: 6812.2926830423075
 [S04] Target model calculations complete
 [S04] Calculating Reference model
 [S04] calculateH28 DEBUG:
      Space heating fuel (d_113): 'Heatpump'
      Water heating fuel (d_51): 'Heatpump'
      Water gas volume (e_51): 0
      Space gas volume (h_115): 27214.939339578905
      Final H28 result: 0
 [S04] calculateH30 DEBUG:
      Space heating fuel (d_113): 'Heatpump'
      Water heating fuel (d_51): 'Heatpump'
      Water oil volume (k_54): 0
      Space oil volume (f_115): 0
      Final H30 result: 0
 [S04] Row 32 Subtotals - F32: 132938, G32: 4785.768, J32: 313511.384841666, K32: 11286.409854299976
 [S04] Reference model calculations complete
 [S04] Dual-engine calculations completed successfully
 [S05] Running dual-engine calculations...
 [S05] Target model calculations complete
 [S05] Reference model calculations complete
 [S05] Dual-engine calculations complete
 🔄 [S05] updateCalculatedDisplayValues: mode=target
 [S05] Running dual-engine calculations...
 [S05] Target model calculations complete
 [S05] Reference model calculations complete
 [S05] Dual-engine calculations complete
 🔄 [S05] updateCalculatedDisplayValues: mode=target
 ✅ S15 Reference Model: All values converted to numbers for proper math
 ✅ S15 Reference Model: Additional fuel variables declared for cost calculations
 [S04] S15 target electricity changed: d_136
 [S04] Starting dual-engine Excel-compliant calculations
 [S04] Calculating Target model
 [S04] calculateH28 DEBUG:
      Space heating fuel (d_113): 'Heatpump'
      Water heating fuel (d_51): 'Heatpump'
      Water gas volume (e_51): 0
      Space gas volume (h_115): 0
      Final H28 result: 0
 [S04] calculateH30 DEBUG:
      Space heating fuel (d_113): 'Heatpump'
      Water heating fuel (d_51): 'Heatpump'
      Water oil volume (k_54): 0
      Space oil volume (f_115): 0
      Final H30 result: 0
 [S04] Row 32 Subtotals - F32: 132938, G32: 6779.838, J32: 192704.36633416289, K32: 9827.922683042307
 🟢 [S01] TARGET ENERGY LISTENER: j_32 changed from 133574.36633416289 to 192704.36633416289 → will update TARGET COLUMN H
 🚀 [S01] =================================
 🚀 [S01] PURE DISPLAY CONSUMER TRIGGERED
 🚀 [S01] =================================
 🎯 [S01] PURE DISPLAY CONSUMER: Starting Excel-compliant calculations...
 🔵 [S01] Upstream Reference: refEnergy=313511.384841666 (from ref_j_32), refEmissions=11286.409854299976, refEmbodiedCarbon=350
 🟢 [S01] Upstream Target: targetEnergy=192704.36633416289 (from j_32), targetEmissions=6812.2926830423075, embodiedCarbon=345.82
 🟡 [S01] Upstream Actual: actualEnergy=132938, actualEmissions=6779.838
 🎯 [S01] Building: area=2427.2, serviceLife=50, useType=Utility Bills
 🔵 [S01] CALCULATED Reference COLUMN E: e_10=129.2, e_8=4.6, e_6=11.6
 🟢 [S01] CALCULATED Target COLUMN H: h_10=79.4, h_8=2.8, h_6=9.7
 🟡 [S01] CALCULATED Actual COLUMN K: k_10=54.8, k_8=2.8, k_6=9.7
 ✅ [S01] PURE DISPLAY CONSUMER: All values calculated and displayed
 ✅ [S01] PURE DISPLAY CONSUMER COMPLETE
 🚀 [S01] =================================
 📡 [S01] Listener triggered: k_32 changed from 6812.2926830423075 to 9827.922683042307
 🚀 [S01] =================================
 🚀 [S01] PURE DISPLAY CONSUMER TRIGGERED
 🚀 [S01] =================================
 🎯 [S01] PURE DISPLAY CONSUMER: Starting Excel-compliant calculations...
 🔵 [S01] Upstream Reference: refEnergy=313511.384841666 (from ref_j_32), refEmissions=11286.409854299976, refEmbodiedCarbon=350
 🟢 [S01] Upstream Target: targetEnergy=192704.36633416289 (from j_32), targetEmissions=9827.922683042307, embodiedCarbon=345.82
 🟡 [S01] Upstream Actual: actualEnergy=132938, actualEmissions=6779.838
 🎯 [S01] Building: area=2427.2, serviceLife=50, useType=Utility Bills
 🔵 [S01] CALCULATED Reference COLUMN E: e_10=129.2, e_8=4.6, e_6=11.6
 🟢 [S01] CALCULATED Target COLUMN H: h_10=79.4, h_8=4, h_6=10.9
 🟡 [S01] CALCULATED Actual COLUMN K: k_10=54.8, k_8=2.8, k_6=9.7
 ✅ [S01] PURE DISPLAY CONSUMER: All values calculated and displayed
 ✅ [S01] PURE DISPLAY CONSUMER COMPLETE
 🚀 [S01] =================================
 [S05] Running dual-engine calculations...
 [S05] Target model calculations complete
 [S05] Reference model calculations complete
 [S05] Dual-engine calculations complete
 🔄 [S05] updateCalculatedDisplayValues: mode=target
 [S05] Running dual-engine calculations...
 [S05] Target model calculations complete
 [S05] Reference model calculations complete
 [S05] Dual-engine calculations complete
 🔄 [S05] updateCalculatedDisplayValues: mode=target
 ✅ S15 Reference Model: All values converted to numbers for proper math
 ✅ S15 Reference Model: Additional fuel variables declared for cost calculations
 ✅ S15 Reference Model: All values converted to numbers for proper math
 ✅ S15 Reference Model: Additional fuel variables declared for cost calculations
 ✅ S15 Reference Model: All values converted to numbers for proper math
 ✅ S15 Reference Model: Additional fuel variables declared for cost calculations
 ✅ S15 Reference Model: All values converted to numbers for proper math
 ✅ S15 Reference Model: Additional fuel variables declared for cost calculations
 [S04] Target model calculations complete
 [S04] Calculating Reference model
 [S04] calculateH28 DEBUG:
      Space heating fuel (d_113): 'Heatpump'
      Water heating fuel (d_51): 'Heatpump'
      Water gas volume (e_51): 0
      Space gas volume (h_115): 27214.939339578905
      Final H28 result: 0
 [S04] calculateH30 DEBUG:
      Space heating fuel (d_113): 'Heatpump'
      Water heating fuel (d_51): 'Heatpump'
      Water oil volume (k_54): 0
      Space oil volume (f_115): 0
      Final H30 result: 0
 [S04] Row 32 Subtotals - F32: 132938, G32: 4785.768, J32: 313511.384841666, K32: 11286.409854299976
 [S04] Reference model calculations complete
 [S04] Dual-engine calculations completed successfully
 ✅ S15 Reference Model: All values converted to numbers for proper math
 ✅ S15 Reference Model: Additional fuel variables declared for cost calculations
 S10: Global listener triggered by i_71, recalculating all.
 [S14 DEBUG] 🔄 Running Reference Model calculations...
 [S14 DEBUG] ✅ Converted to numbers - ref_d_127 calculation: 59532.28501397147 + 119064.57002794294 + 36440.079840319355 + 84594.73968 - 61755.58016000001
 [S14 DEBUG] ✅ ref_d_127 = 237876.09440223372 (should be numeric, not NaN)
 [S14 DEBUG] ✅ Stored ref_d_127 = 237876.09440223372 in StateManager
 [S14 DEBUG] 🔄 Continuing with other Reference calculations...
 [S14 DEBUG] ref_d_128 calculation: 59532.28501397147 + 119064.57002794294 + 36440.079840319355 - 61755.58016000001 = 153281.35472223375
 [Section13] 📡 🔥 d_127 (TED) listener triggered - S14 energy demand changed!
 [Section13] 🚀 CALCULATEALL TRIGGERED - Running dual-engine calculations...
 [Section13] 🔄 Starting Reference Model calculations...
 [Section13] Running Reference Model calculations...
 [Section13] 🔥 REF HEATING: systemType="Gas", tedReference=237876.09440223372, hspf=7.1
 [Section13] 🧊 COOLING CALC: mode=REF, coolingSystemType="Cooling", heatingType="Gas", isCoolingActive=true, coolingDemand=10192.893604542265
 ✅ S15 Reference Model: All values converted to numbers for proper math
 ✅ S15 Reference Model: Additional fuel variables declared for cost calculations
 ✅ S15 Reference Model: All values converted to numbers for proper math
 ✅ S15 Reference Model: Additional fuel variables declared for cost calculations
 [S04] S13 space gas volume changed (Reference): ref_h_115
 [S04] calculateH28 DEBUG:
      Space heating fuel (d_113): 'Heatpump'
      Water heating fuel (d_51): 'Heatpump'
      Water gas volume (e_51): 0
      Space gas volume (h_115): 25512.2366368762
      Final H28 result: 0
 [S04] calculateH30 DEBUG:
      Space heating fuel (d_113): 'Heatpump'
      Water heating fuel (d_51): 'Heatpump'
      Water oil volume (k_54): 0
      Space oil volume (f_115): 0
      Final H30 result: 0
 [S04] Row 32 Subtotals - F32: 132938, G32: 4785.768, J32: 313511.384841666, K32: 11286.409854299976
 [S04] Reference model calculations complete
 [S04] 🔄 Updating calculated display values for target mode
 [S04] Calculated display values updated for target mode
 ✅ S15 Reference Model: All values converted to numbers for proper math
 ✅ S15 Reference Model: Additional fuel variables declared for cost calculations
 ✅ S15 Reference Model: All values converted to numbers for proper math
 ✅ S15 Reference Model: Additional fuel variables declared for cost calculations
 [Section13] Reference results stored with ref_ prefix for downstream sections
 [S13 DEBUG] Total Reference results stored: 34
 [Section13] Reference Model calculations complete
 [Section13] ✅ Reference Model complete
 [Section13] 🔄 Starting Target Model calculations...
 [Section13] Running Target Model calculations...
 [S13] TGT HEATING: Heatpump, HSPF=12.5
 ✅ S15 Reference Model: All values converted to numbers for proper math
 ✅ S15 Reference Model: Additional fuel variables declared for cost calculations
 [S04] S15 target electricity changed: d_136
 [S04] Starting dual-engine Excel-compliant calculations
 [S04] Calculating Target model
 [S04] calculateH28 DEBUG:
      Space heating fuel (d_113): 'Heatpump'
      Water heating fuel (d_51): 'Heatpump'
      Water gas volume (e_51): 0
      Space gas volume (h_115): 0
      Final H28 result: 0
 [S04] calculateH30 DEBUG:
      Space heating fuel (d_113): 'Heatpump'
      Water heating fuel (d_51): 'Heatpump'
      Water oil volume (k_54): 0
      Space oil volume (f_115): 0
      Final H30 result: 0
 [S04] Row 32 Subtotals - F32: 132938, G32: 6779.838, J32: 188370.85337416286, K32: 9606.913522082306
 🟢 [S01] TARGET ENERGY LISTENER: j_32 changed from 192704.36633416289 to 188370.85337416286 → will update TARGET COLUMN H
 🚀 [S01] =================================
 🚀 [S01] PURE DISPLAY CONSUMER TRIGGERED
 🚀 [S01] =================================
 🎯 [S01] PURE DISPLAY CONSUMER: Starting Excel-compliant calculations...
 🔵 [S01] Upstream Reference: refEnergy=313511.384841666 (from ref_j_32), refEmissions=11286.409854299976, refEmbodiedCarbon=350
 🟢 [S01] Upstream Target: targetEnergy=188370.85337416286 (from j_32), targetEmissions=9827.922683042307, embodiedCarbon=345.82
 🟡 [S01] Upstream Actual: actualEnergy=132938, actualEmissions=6779.838
 🎯 [S01] Building: area=2427.2, serviceLife=50, useType=Utility Bills
 🔵 [S01] CALCULATED Reference COLUMN E: e_10=129.2, e_8=4.6, e_6=11.6
 🟢 [S01] CALCULATED Target COLUMN H: h_10=77.6, h_8=4, h_6=10.9
 🟡 [S01] CALCULATED Actual COLUMN K: k_10=54.8, k_8=2.8, k_6=9.7
 ✅ [S01] PURE DISPLAY CONSUMER: All values calculated and displayed
 ✅ [S01] PURE DISPLAY CONSUMER COMPLETE
 🚀 [S01] =================================
 📡 [S01] Listener triggered: k_32 changed from 9827.922683042307 to 9606.913522082306
 🚀 [S01] =================================
 🚀 [S01] PURE DISPLAY CONSUMER TRIGGERED
 🚀 [S01] =================================
 🎯 [S01] PURE DISPLAY CONSUMER: Starting Excel-compliant calculations...
 🔵 [S01] Upstream Reference: refEnergy=313511.384841666 (from ref_j_32), refEmissions=11286.409854299976, refEmbodiedCarbon=350
4011-Section01.js:588 🟢 [S01] Upstream Target: targetEnergy=188370.85337416286 (from j_32), targetEmissions=9606.913522082306, embodiedCarbon=345.82
4011-Section01.js:589 🟡 [S01] Upstream Actual: actualEnergy=132938, actualEmissions=6779.838
4011-Section01.js:590 🎯 [S01] Building: area=2427.2, serviceLife=50, useType=Utility Bills
4011-Section01.js:634 🔵 [S01] CALCULATED Reference COLUMN E: e_10=129.2, e_8=4.6, e_6=11.6
4011-Section01.js:635 🟢 [S01] CALCULATED Target COLUMN H: h_10=77.6, h_8=4, h_6=10.9
4011-Section01.js:636 🟡 [S01] CALCULATED Actual COLUMN K: k_10=54.8, k_8=2.8, k_6=9.7
4011-Section01.js:713 ✅ [S01] PURE DISPLAY CONSUMER: All values calculated and displayed
4011-Section01.js:908 ✅ [S01] PURE DISPLAY CONSUMER COMPLETE
4011-Section01.js:909 🚀 [S01] =================================
4011-Section05.js:907 [S05] Running dual-engine calculations...
4011-Section05.js:897 [S05] Target model calculations complete
4011-Section05.js:873 [S05] Reference model calculations complete
4011-Section05.js:910 [S05] Dual-engine calculations complete
4011-Section05.js:179 🔄 [S05] updateCalculatedDisplayValues: mode=target
4011-Section05.js:907 [S05] Running dual-engine calculations...
4011-Section05.js:897 [S05] Target model calculations complete
4011-Section05.js:873 [S05] Reference model calculations complete
4011-Section05.js:910 [S05] Dual-engine calculations complete
4011-Section05.js:179 🔄 [S05] updateCalculatedDisplayValues: mode=target
4011-Section15.js:1462 ✅ S15 Reference Model: All values converted to numbers for proper math
4011-Section15.js:1475 ✅ S15 Reference Model: Additional fuel variables declared for cost calculations
4011-Section15.js:1462 ✅ S15 Reference Model: All values converted to numbers for proper math
4011-Section15.js:1475 ✅ S15 Reference Model: Additional fuel variables declared for cost calculations
4011-Section15.js:1462 ✅ S15 Reference Model: All values converted to numbers for proper math
4011-Section15.js:1475 ✅ S15 Reference Model: Additional fuel variables declared for cost calculations
4011-Section15.js:1462 ✅ S15 Reference Model: All values converted to numbers for proper math
4011-Section15.js:1475 ✅ S15 Reference Model: Additional fuel variables declared for cost calculations
 [S04] Target model calculations complete
 [S04] Calculating Reference model
 [S04] calculateH28 DEBUG:
      Space heating fuel (d_113): 'Heatpump'
      Water heating fuel (d_51): 'Heatpump'
      Water gas volume (e_51): 0
      Space gas volume (h_115): 25512.2366368762
      Final H28 result: 0
 [S04] calculateH30 DEBUG:
      Space heating fuel (d_113): 'Heatpump'
      Water heating fuel (d_51): 'Heatpump'
      Water oil volume (k_54): 0
      Space oil volume (f_115): 0
      Final H30 result: 0
 [S04] Row 32 Subtotals - F32: 132938, G32: 4785.768, J32: 313511.384841666, K32: 11286.409854299976
 [S04] Reference model calculations complete
 [S04] Dual-engine calculations completed successfully
 ✅ S15 Reference Model: All values converted to numbers for proper math
 ✅ S15 Reference Model: Additional fuel variables declared for cost calculations
 [S13] TGT FUEL: Heatpump system
 [S13] FUEL STORED: Heatpump → Gas=0m³, Oil=0L
 [Section13] 🧊 COOLING CALC: mode=TGT, coolingSystemType="Cooling", heatingType="Heatpump", isCoolingActive=true, coolingDemand=10192.893604542265
 [Section13] 🧊 COOLING RESULTS: d_117=3826.8214105081656, j_116=2.663540445486518, l_116=0, l_114=6366.0721940341
 [Section13] 🧊 COOLING CALC: mode=TGT, coolingSystemType="Cooling", heatingType="Heatpump", isCoolingActive=true, coolingDemand=10192.893604542265
 [Section13] 🧊 COOLING RESULTS: d_117=3826.8214105081656, j_116=2.663540445486518, l_116=0, l_114=6366.0721940341
 [Section13] Target Model calculations complete
 [Section13] ✅ Target Model complete
 [Section13] 🎉 DUAL-ENGINE CALCULATIONS COMPLETE
 [Section13] 🔄 Updating calculated display values for target mode
 [Section13] Calculated display values updated for target mode
 [Section13] 📡 🔥 d_127 (TED) listener triggered - S14 energy demand changed!
 [Section13] 🚀 CALCULATEALL TRIGGERED - Running dual-engine calculations...
 [Section13] 🔄 Starting Reference Model calculations...
 [Section13] Running Reference Model calculations...
 [Section13] 🔥 REF HEATING: systemType="Gas", tedReference=237876.09440223372, hspf=7.1
 [Section13] 🧊 COOLING CALC: mode=REF, coolingSystemType="Cooling", heatingType="Gas", isCoolingActive=true, coolingDemand=10192.893604542265
 [Section13] Reference results stored with ref_ prefix for downstream sections
 [S13 DEBUG] Total Reference results stored: 34
 [Section13] Reference Model calculations complete
 [Section13] ✅ Reference Model complete
 [Section13] 🔄 Starting Target Model calculations...
 [Section13] Running Target Model calculations...
 [S13] TGT HEATING: Heatpump, HSPF=12.5
 [S13] TGT FUEL: Heatpump system
 [S13] FUEL STORED: Heatpump → Gas=0m³, Oil=0L
 [Section13] 🧊 COOLING CALC: mode=TGT, coolingSystemType="Cooling", heatingType="Heatpump", isCoolingActive=true, coolingDemand=10192.893604542265
 [Section13] 🧊 COOLING RESULTS: d_117=3826.8214105081656, j_116=2.663540445486518, l_116=0, l_114=6366.0721940341
 [Section13] 🧊 COOLING CALC: mode=TGT, coolingSystemType="Cooling", heatingType="Heatpump", isCoolingActive=true, coolingDemand=10192.893604542265
 [Section13] 🧊 COOLING RESULTS: d_117=3826.8214105081656, j_116=2.663540445486518, l_116=0, l_114=6366.0721940341
 [Section13] Target Model calculations complete
 [Section13] ✅ Target Model complete
 [Section13] 🎉 DUAL-ENGINE CALCULATIONS COMPLETE
 [Section13] 🔄 Updating calculated display values for target mode
 [Section13] Calculated display values updated for target mode
 [S14 DEBUG] 🔄 Running Reference Model calculations...
 [S14 DEBUG] ✅ Converted to numbers - ref_d_127 calculation: 59532.28501397147 + 119064.57002794294 + 36440.079840319355 + 84594.73968 - 61755.58016000001
 [S14 DEBUG] ✅ ref_d_127 = 237876.09440223372 (should be numeric, not NaN)
 [S14 DEBUG] ✅ Stored ref_d_127 = 237876.09440223372 in StateManager
 [S14 DEBUG] 🔄 Continuing with other Reference calculations...
 [S14 DEBUG] ref_d_128 calculation: 59532.28501397147 + 119064.57002794294 + 36440.079840319355 - 61755.58016000001 = 153281.35472223375
 ✅ S15 Reference Model: All values converted to numbers for proper math
 ✅ S15 Reference Model: Additional fuel variables declared for cost calculations
 ✅ S15 Reference Model: All values converted to numbers for proper math
 ✅ S15 Reference Model: Additional fuel variables declared for cost calculations
 [Section13] 📡 🔥 i_71 (OCCUPANT GAINS) listener triggered - S10 gains factor changed!
 [Section13] 🚀 CALCULATEALL TRIGGERED - Running dual-engine calculations...
 [Section13] 🔄 Starting Reference Model calculations...
 [Section13] Running Reference Model calculations...
 [Section13] 🔥 REF HEATING: systemType="Gas", tedReference=237876.09440223372, hspf=7.1
 [Section13] 🧊 COOLING CALC: mode=REF, coolingSystemType="Cooling", heatingType="Gas", isCoolingActive=true, coolingDemand=10192.893604542265
 [Section13] Reference results stored with ref_ prefix for downstream sections
 [S13 DEBUG] Total Reference results stored: 34
 [Section13] Reference Model calculations complete
 [Section13] ✅ Reference Model complete
 [Section13] 🔄 Starting Target Model calculations...
 [Section13] Running Target Model calculations...
 [S13] TGT HEATING: Heatpump, HSPF=12.5
 [S13] TGT FUEL: Heatpump system
 [S13] FUEL STORED: Heatpump → Gas=0m³, Oil=0L
 [Section13] 🧊 COOLING CALC: mode=TGT, coolingSystemType="Cooling", heatingType="Heatpump", isCoolingActive=true, coolingDemand=10192.893604542265
 [Section13] 🧊 COOLING RESULTS: d_117=3826.8214105081656, j_116=2.663540445486518, l_116=0, l_114=6366.0721940341
 [Section13] 🧊 COOLING CALC: mode=TGT, coolingSystemType="Cooling", heatingType="Heatpump", isCoolingActive=true, coolingDemand=10192.893604542265
 [Section13] 🧊 COOLING RESULTS: d_117=3826.8214105081656, j_116=2.663540445486518, l_116=0, l_114=6366.0721940341
 [Section13] Target Model calculations complete
 [Section13] ✅ Target Model complete
 [Section13] 🎉 DUAL-ENGINE CALCULATIONS COMPLETE
 [Section13] 🔄 Updating calculated display values for target mode
 [Section13] Calculated display values updated for target mode
 [Section13] 📡 🔥 i_71 (OCCUPANT GAINS) listener triggered - S10 gains factor changed!
 [Section13] 🚀 CALCULATEALL TRIGGERED - Running dual-engine calculations...
 [Section13] 🔄 Starting Reference Model calculations...
 [Section13] Running Reference Model calculations...
 [Section13] 🔥 REF HEATING: systemType="Gas", tedReference=237876.09440223372, hspf=7.1
 [Section13] 🧊 COOLING CALC: mode=REF, coolingSystemType="Cooling", heatingType="Gas", isCoolingActive=true, coolingDemand=10192.893604542265
 [Section13] Reference results stored with ref_ prefix for downstream sections
 [S13 DEBUG] Total Reference results stored: 34
 [Section13] Reference Model calculations complete
 [Section13] ✅ Reference Model complete
 [Section13] 🔄 Starting Target Model calculations...
 [Section13] Running Target Model calculations...
 [S13] TGT HEATING: Heatpump, HSPF=12.5
 [S13] TGT FUEL: Heatpump system
 [S13] FUEL STORED: Heatpump → Gas=0m³, Oil=0L
 [Section13] 🧊 COOLING CALC: mode=TGT, coolingSystemType="Cooling", heatingType="Heatpump", isCoolingActive=true, coolingDemand=10192.893604542265
 [Section13] 🧊 COOLING RESULTS: d_117=3826.8214105081656, j_116=2.663540445486518, l_116=0, l_114=6366.0721940341
 [Section13] 🧊 COOLING CALC: mode=TGT, coolingSystemType="Cooling", heatingType="Heatpump", isCoolingActive=true, coolingDemand=10192.893604542265
 [Section13] 🧊 COOLING RESULTS: d_117=3826.8214105081656, j_116=2.663540445486518, l_116=0, l_114=6366.0721940341
 [Section13] Target Model calculations complete
 [Section13] ✅ Target Model complete
 [Section13] 🎉 DUAL-ENGINE CALCULATIONS COMPLETE
 [Section13] 🔄 Updating calculated display values for target mode
 [Section13] Calculated display values updated for target mode
 [S14 DEBUG] 🔄 Running Reference Model calculations...
 [S14 DEBUG] ✅ Converted to numbers - ref_d_127 calculation: 59532.28501397147 + 119064.57002794294 + 36440.079840319355 + 84594.73968 - 61755.58016000001
 [S14 DEBUG] ✅ ref_d_127 = 237876.09440223372 (should be numeric, not NaN)
 [S14 DEBUG] ✅ Stored ref_d_127 = 237876.09440223372 in StateManager
 [S14 DEBUG] 🔄 Continuing with other Reference calculations...
 [S14 DEBUG] ref_d_128 calculation: 59532.28501397147 + 119064.57002794294 + 36440.079840319355 - 61755.58016000001 = 153281.35472223375
 [Section13] 🧊 COOLING CALC: mode=TGT, coolingSystemType="Cooling", heatingType="Heatpump", isCoolingActive=true, coolingDemand=29632.893604542267
 ✅ S15 Reference Model: All values converted to numbers for proper math
 ✅ S15 Reference Model: Additional fuel variables declared for cost calculations
 [S04] S15 target electricity changed: d_136
 [S04] Starting dual-engine Excel-compliant calculations
 [S04] Calculating Target model
 [S04] calculateH28 DEBUG:
      Space heating fuel (d_113): 'Heatpump'
      Water heating fuel (d_51): 'Heatpump'
      Water gas volume (e_51): 0
      Space gas volume (h_115): 0
      Final H28 result: 0
 [S04] calculateH30 DEBUG:
      Space heating fuel (d_113): 'Heatpump'
      Water heating fuel (d_51): 'Heatpump'
      Water oil volume (k_54): 0
      Space oil volume (f_115): 0
      Final H30 result: 0
 [S04] Row 32 Subtotals - F32: 132938, G32: 6779.838, J32: 195669.40971219103, K32: 9979.139895321741
 🟢 [S01] TARGET ENERGY LISTENER: j_32 changed from 188370.85337416286 to 195669.40971219103 → will update TARGET COLUMN H
 🚀 [S01] =================================
 🚀 [S01] PURE DISPLAY CONSUMER TRIGGERED
 🚀 [S01] =================================
 🎯 [S01] PURE DISPLAY CONSUMER: Starting Excel-compliant calculations...
 🔵 [S01] Upstream Reference: refEnergy=313511.384841666 (from ref_j_32), refEmissions=11286.409854299976, refEmbodiedCarbon=350
 🟢 [S01] Upstream Target: targetEnergy=195669.40971219103 (from j_32), targetEmissions=9606.913522082306, embodiedCarbon=345.82
 🟡 [S01] Upstream Actual: actualEnergy=132938, actualEmissions=6779.838
 🎯 [S01] Building: area=2427.2, serviceLife=50, useType=Utility Bills
 🔵 [S01] CALCULATED Reference COLUMN E: e_10=129.2, e_8=4.6, e_6=11.6
 🟢 [S01] CALCULATED Target COLUMN H: h_10=80.6, h_8=4, h_6=10.9
 🟡 [S01] CALCULATED Actual COLUMN K: k_10=54.8, k_8=2.8, k_6=9.7
 ✅ [S01] PURE DISPLAY CONSUMER: All values calculated and displayed
 ✅ [S01] PURE DISPLAY CONSUMER COMPLETE
 🚀 [S01] =================================
 📡 [S01] Listener triggered: k_32 changed from 9606.913522082306 to 9979.139895321741
 🚀 [S01] =================================
 🚀 [S01] PURE DISPLAY CONSUMER TRIGGERED
 🚀 [S01] =================================
 🎯 [S01] PURE DISPLAY CONSUMER: Starting Excel-compliant calculations...
 🔵 [S01] Upstream Reference: refEnergy=313511.384841666 (from ref_j_32), refEmissions=11286.409854299976, refEmbodiedCarbon=350
 🟢 [S01] Upstream Target: targetEnergy=195669.40971219103 (from j_32), targetEmissions=9979.139895321741, embodiedCarbon=345.82
 🟡 [S01] Upstream Actual: actualEnergy=132938, actualEmissions=6779.838
 🎯 [S01] Building: area=2427.2, serviceLife=50, useType=Utility Bills
 🔵 [S01] CALCULATED Reference COLUMN E: e_10=129.2, e_8=4.6, e_6=11.6
 🟢 [S01] CALCULATED Target COLUMN H: h_10=80.6, h_8=4.1, h_6=11
 🟡 [S01] CALCULATED Actual COLUMN K: k_10=54.8, k_8=2.8, k_6=9.7
 ✅ [S01] PURE DISPLAY CONSUMER: All values calculated and displayed
 ✅ [S01] PURE DISPLAY CONSUMER COMPLETE
 🚀 [S01] =================================
 [S05] Running dual-engine calculations...
 [S05] Target model calculations complete
 [S05] Reference model calculations complete
 [S05] Dual-engine calculations complete
 🔄 [S05] updateCalculatedDisplayValues: mode=target
 [S05] Running dual-engine calculations...
 [S05] Target model calculations complete
 [S05] Reference model calculations complete
 [S05] Dual-engine calculations complete
 🔄 [S05] updateCalculatedDisplayValues: mode=target
 ✅ S15 Reference Model: All values converted to numbers for proper math
 ✅ S15 Reference Model: Additional fuel variables declared for cost calculations
 ✅ S15 Reference Model: All values converted to numbers for proper math
 ✅ S15 Reference Model: Additional fuel variables declared for cost calculations
 ✅ S15 Reference Model: All values converted to numbers for proper math
 ✅ S15 Reference Model: Additional fuel variables declared for cost calculations
 ✅ S15 Reference Model: All values converted to numbers for proper math
 ✅ S15 Reference Model: Additional fuel variables declared for cost calculations
 [S04] Target model calculations complete
 [S04] Calculating Reference model
 [S04] calculateH28 DEBUG:
      Space heating fuel (d_113): 'Heatpump'
      Water heating fuel (d_51): 'Heatpump'
      Water gas volume (e_51): 0
      Space gas volume (h_115): 25512.2366368762
      Final H28 result: 0
 [S04] calculateH30 DEBUG:
      Space heating fuel (d_113): 'Heatpump'
      Water heating fuel (d_51): 'Heatpump'
      Water oil volume (k_54): 0
      Space oil volume (f_115): 0
      Final H30 result: 0
4011-Section04.js:939 [S04] Row 32 Subtotals - F32: 132938, G32: 4785.768, J32: 313511.384841666, K32: 11286.409854299976
4011-Section04.js:1579 [S04] Reference model calculations complete
4011-Section04.js:1525 [S04] Dual-engine calculations completed successfully
4011-Section15.js:1462 ✅ S15 Reference Model: All values converted to numbers for proper math
4011-Section15.js:1475 ✅ S15 Reference Model: Additional fuel variables declared for cost calculations
4011-Section13.js:2603 [Section13] 🧊 COOLING RESULTS: d_117=11125.377748536335, j_116=2.663540445486518, l_116=0, l_114=18507.51585600593
4011-Section13.js:2542 [Section13] 🧊 COOLING CALC: mode=TGT, coolingSystemType="Cooling", heatingType="Heatpump", isCoolingActive=true, coolingDemand=29632.893604542267
4011-Section13.js:2603 [Section13] 🧊 COOLING RESULTS: d_117=11125.377748536335, j_116=2.663540445486518, l_116=0, l_114=18507.51585600593
4011-Section14.js:1000 [S14 DEBUG] 🔄 Running Reference Model calculations...
4011-Section14.js:1043 [S14 DEBUG] ✅ Converted to numbers - ref_d_127 calculation: 59532.28501397147 + 119064.57002794294 + 36440.079840319355 + 84594.73968 - 61755.58016000001
4011-Section14.js:1050 [S14 DEBUG] ✅ ref_d_127 = 237876.09440223372 (should be numeric, not NaN)
4011-Section14.js:1060 [S14 DEBUG] ✅ Stored ref_d_127 = 237876.09440223372 in StateManager
4011-Section14.js:1063 [S14 DEBUG] 🔄 Continuing with other Reference calculations...
4011-Section14.js:1078 [S14 DEBUG] ref_d_128 calculation: 59532.28501397147 + 119064.57002794294 + 36440.079840319355 - 61755.58016000001 = 153281.35472223375
4011-Section14.js:1000 [S14 DEBUG] 🔄 Running Reference Model calculations...
4011-Section14.js:1043 [S14 DEBUG] ✅ Converted to numbers - ref_d_127 calculation: 59532.28501397147 + 119064.57002794294 + 36440.079840319355 + 84594.73968 - 61755.58016000001
4011-Section14.js:1050 [S14 DEBUG] ✅ ref_d_127 = 237876.09440223372 (should be numeric, not NaN)
4011-Section14.js:1060 [S14 DEBUG] ✅ Stored ref_d_127 = 237876.09440223372 in StateManager
4011-Section14.js:1063 [S14 DEBUG] 🔄 Continuing with other Reference calculations...
4011-Section14.js:1078 [S14 DEBUG] ref_d_128 calculation: 59532.28501397147 + 119064.57002794294 + 36440.079840319355 - 61755.58016000001 = 153281.35472223375
4011-Section14.js:1000 [S14 DEBUG] 🔄 Running Reference Model calculations...
4011-Section14.js:1043 [S14 DEBUG] ✅ Converted to numbers - ref_d_127 calculation: 59532.28501397147 + 119064.57002794294 + 36440.079840319355 + 84594.73968 - 61755.58016000001
4011-Section14.js:1050 [S14 DEBUG] ✅ ref_d_127 = 237876.09440223372 (should be numeric, not NaN)
4011-Section14.js:1060 [S14 DEBUG] ✅ Stored ref_d_127 = 237876.09440223372 in StateManager
4011-Section14.js:1063 [S14 DEBUG] 🔄 Continuing with other Reference calculations...
4011-Section14.js:1078 [S14 DEBUG] ref_d_128 calculation: 59532.28501397147 + 119064.57002794294 + 36440.079840319355 - 61755.58016000001 = 153281.35472223375
4011-Section15.js:1462 ✅ S15 Reference Model: All values converted to numbers for proper math
4011-Section15.js:1475 ✅ S15 Reference Model: Additional fuel variables declared for cost calculations
4011-Section15.js:1462 ✅ S15 Reference Model: All values converted to numbers for proper math
4011-Section15.js:1475 ✅ S15 Reference Model: Additional fuel variables declared for cost calculations
4011-Section15.js:1462 ✅ S15 Reference Model: All values converted to numbers for proper math
4011-Section15.js:1475 ✅ S15 Reference Model: Additional fuel variables declared for cost calculations
4011-Section15.js:1462 ✅ S15 Reference Model: All values converted to numbers for proper math
4011-Section15.js:1475 ✅ S15 Reference Model: Additional fuel variables declared for cost calculations