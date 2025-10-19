 🔧 [S07] TargetState.setDefaults: Initializing from FieldDefinitions
 🔍 [S07] getFieldDefault: Looking for default for fieldId=d_49
 ✅ [S07] getFieldDefault: Found default for d_49 = "User Defined"
 🔍 [S07] getFieldDefault: Looking for default for fieldId=d_51
 ✅ [S07] getFieldDefault: Found default for d_51 = "Heatpump"
 ✅ [S07] TargetState.setDefaults: d_49="User Defined", d_51="Heatpump"
 🌐 [S07] TargetState.setDefaults: Published to StateManager
 🔧 [S07] ReferenceState.setDefaults: Initializing Reference-specific defaults
 🔍 [S07] getFieldDefault: Looking for default for fieldId=d_49
 ✅ [S07] getFieldDefault: Found default for d_49 = "User Defined"
 ✅ [S07] ReferenceState.setDefaults: d_49="User Defined", d_51="Electric", d_52="90"
 🔗 [S07] ReferenceState.setDefaults: Published d_49, d_51="Electric", d_52="90%" with ref_ prefix
 🔍 [S07] getFieldDefault: Looking for default for fieldId=d_49
 ✅ [S07] getFieldDefault: Found default for d_49 = "User Defined"
 🔍 [S07] getFieldDefault: Looking for default for fieldId=d_51
 ✅ [S07] getFieldDefault: Found default for d_51 = "Heatpump"
 [S07] calculateEmissionsAndLosses: systemType="Heatpump" (TGT)
 [S07] ⚡ Non-fossil fuel: Heatpump → e_51=0, k_54=0 (both cleared)
 [S07] 🚨 CRITICAL: ref_d_63 missing, using default 0 for Reference calculation
calculateWaterUse @ 4012-Section07.js:739Understand this warningAI
 [S07] calculateEmissionsAndLosses: systemType="Electric" (REF)
 [S07] ⚡ Non-fossil fuel: Electric → e_51=0, k_54=0 (both cleared)
 [S08] S04 listeners setup complete
 [S09] ✅ Pattern A dual-engine listeners registered (5 Target/Reference pairs)
 [S07] calculateEmissionsAndLosses: systemType="Heatpump" (TGT)
 [S07] ⚡ Non-fossil fuel: Heatpump → e_51=0, k_54=0 (both cleared)
 [S07] calculateEmissionsAndLosses: systemType="Electric" (REF)
 [S07] ⚡ Non-fossil fuel: Electric → e_51=0, k_54=0 (both cleared)
 [S07] calculateEmissionsAndLosses: systemType="Heatpump" (TGT)
 [S07] ⚡ Non-fossil fuel: Heatpump → e_51=0, k_54=0 (both cleared)
 [S07] calculateEmissionsAndLosses: systemType="Electric" (REF)
 [S07] ⚡ Non-fossil fuel: Electric → e_51=0, k_54=0 (both cleared)
 [S09] Updated calculated display values for target mode
 [S09] 🔗 Published initial ref_d_63=126 for S07
 [S09] ✅ Pattern A dual-engine listeners registered (5 Target/Reference pairs)
 S09: UI refreshed for target mode
 [S09] Updated calculated display values for target mode
 [S09] Updated calculated display values for target mode
 [S07] calculateEmissionsAndLosses: systemType="Heatpump" (TGT)
 [S07] ⚡ Non-fossil fuel: Heatpump → e_51=0, k_54=0 (both cleared)
 [S07] calculateEmissionsAndLosses: systemType="Electric" (REF)
 [S07] ⚡ Non-fossil fuel: Electric → e_51=0, k_54=0 (both cleared)
 [S09] 🔗 Published initial ref_d_63=126 for S07
 [S09] ✅ Pattern A dual-engine listeners registered (5 Target/Reference pairs)
 S09: UI refreshed for target mode
 [S07] calculateEmissionsAndLosses: systemType="Heatpump" (TGT)
 [S07] ⚡ Non-fossil fuel: Heatpump → e_51=0, k_54=0 (both cleared)
 [S07] calculateEmissionsAndLosses: systemType="Electric" (REF)
 [S07] ⚡ Non-fossil fuel: Electric → e_51=0, k_54=0 (both cleared)
 [S09] Updated calculated display values for target mode
 [S09] Updated calculated display values for target mode
 S10: Section rendered - initializing Self-Contained State Module.
 S10: Simplified global StateManager listeners added
 S10: ModeManager exposed globally for cross-section integration.
 [S10 DEBUG] calculateAll() triggered in target mode - running both engines
 [S10 DEBUG] Dual-engine calculations complete in target mode
 [S11] Setting up S10 area listeners...
 [S11] ✅ S10 area listeners registered for both modes
 S11: Section rendered - initializing Self-Contained State Module.
 [S11] Setting up S10 area listeners...
 [S11] ✅ S10 area listeners registered for both modes
 S11: ModeManager exposed globally for cross-section integration.
 [S11] calculateAll TRIGGERED. isReferenceMode: false
 [S11] 🔵 REF CLIMATE READ: h_22=-1680
 [S11] 🔵 REF CLIMATE READ: h_22=-1680
 [S11] REF TB%=50% → ref_i_97=31694.95, ref_k_97=-2133.81
 S10: Reference listener triggered by ref_i_98, recalculating all.
 [S10 DEBUG] calculateAll() triggered in target mode - running both engines
 [S10 DEBUG] Dual-engine calculations complete in target mode
 S10: Reference utilization factor dependency ref_i_98 changed.
 [S11] Writing ref penalty: ref_i_97=31694.95, ref_k_97=-2133.81
 S10: Reference listener triggered by ref_i_97, recalculating all.
 [S10 DEBUG] calculateAll() triggered in target mode - running both engines
 [S10 DEBUG] Dual-engine calculations complete in target mode
 S10: Reference utilization factor dependency ref_i_97 changed.
 [S11] Listener: ref_d_97 changed → recalculating (src=calculated)
 [S11] calculateAll TRIGGERED. isReferenceMode: false
 [S11] 🔵 REF CLIMATE READ: h_22=-1680
 [S11] 🔵 REF CLIMATE READ: h_22=-1680
 [S11] REF TB%=50% → ref_i_97=31694.95, ref_k_97=-2133.81
 [S11] Writing ref penalty: ref_i_97=31694.95, ref_k_97=-2133.81
 [S11] 🎯 TGT CLIMATE READ: h_22=-1680
 [S11] 🎯 TGT CLIMATE READ: h_22=-1680
 S10: Target listener triggered by i_97, recalculating all.
 [S10 DEBUG] calculateAll() triggered in target mode - running both engines
 [S10 DEBUG] Dual-engine calculations complete in target mode
 S10: Target utilization factor dependency i_97 changed.
 S10: Target listener triggered by i_98, recalculating all.
 [S10 DEBUG] calculateAll() triggered in target mode - running both engines
 [S10 DEBUG] Dual-engine calculations complete in target mode
 S10: Target utilization factor dependency i_98 changed.
 [S11] Listener: ref_d_97 changed → recalculating (src=calculated)
 [S11] calculateAll TRIGGERED. isReferenceMode: false
 [S11] 🔵 REF CLIMATE READ: h_22=-1680
 [S11] 🔵 REF CLIMATE READ: h_22=-1680
 [S11] REF TB%=50% → ref_i_97=31694.95, ref_k_97=-2133.81
 [S11] Writing ref penalty: ref_i_97=31694.95, ref_k_97=-2133.81
 [S11] 🎯 TGT CLIMATE READ: h_22=-1680
 [S11] 🎯 TGT CLIMATE READ: h_22=-1680
 [S11] 🎯 TGT CLIMATE READ: h_22=-1680
 [S11] 🎯 TGT CLIMATE READ: h_22=-1680
 [S11 Area Sync] S11 initialization complete - sync functions now enabled
 [S11 Area Sync] Starting sync in target mode
 [S11 Area Sync] d_88 = 7.50 (from d_73)
 [S11 Area Sync] d_89 = 81.14 (from d_74)
 [S11 Area Sync] d_90 = 3.83 (from d_75)
 [S11 Area Sync] d_91 = 159.00 (from d_76)
 [S11 Area Sync] d_92 = 100.66 (from d_77)
 [S11 Area Sync] d_93 = 0.00 (from d_78)
 [S11 Area Sync] Refreshing UI...
 [S11 Area Sync] Triggering recalculation...
 [S11] calculateAll TRIGGERED. isReferenceMode: false
 [S11] 🔵 REF CLIMATE READ: h_22=-1680
 [S11] 🔵 REF CLIMATE READ: h_22=-1680
 [S11] REF TB%=50% → ref_i_97=31694.95, ref_k_97=-2133.81
 [S11] Writing ref penalty: ref_i_97=31694.95, ref_k_97=-2133.81
 [S11] 🎯 TGT CLIMATE READ: h_22=-1680
 [S11] 🎯 TGT CLIMATE READ: h_22=-1680
 [S11 Area Sync] Sync completed successfully
 [Cooling] 🚀 Starting cooling calculations (mode=reference)...
 [Cooling] Free cooling calc: massFlow=0.000 kg/s, ΔT=3.6°C → 0.00 kWh/day → 0.00 kWh/yr
 [Cooling A33 PHYSICS] d_120=3333.33, l_119=None, A28=3333.33, A29=3.33333, A30=4.01332932, A16=3.5700000000000003, A31=14399.223600762003, A32=1244092919.105837, A33=345.5813664182881
 [Cooling m_124 COOLING-TARGET] m_129_annual=0, E37_daily=0, E45(d_21)=196, E50=0, E51=67733.94781798447, E52=-67733.94781798447, E54(m_19)=120, E55(result)=-23.51873188124461
 [Cooling] 📊 Publishing results with prefix="ref_" (mode=reference)
 S10: Reference listener triggered by ref_m_121, recalculating all.
 [S10 DEBUG] calculateAll() triggered in target mode - running both engines
 [S10 DEBUG] Dual-engine calculations complete in target mode
 S10: Reference utilization factor dependency ref_m_121 changed.
 S10: Target listener triggered by m_121, recalculating all.
 [S10 DEBUG] calculateAll() triggered in target mode - running both engines
 [S10 DEBUG] Dual-engine calculations complete in target mode
 S10: Target utilization factor dependency m_121 changed.
 [Cooling] 🚀 Starting cooling calculations (mode=target)...
 [Cooling] Free cooling calc: massFlow=4.013 kg/s, ΔT=3.6°C → 345.58 kWh/day → 41469.81 kWh/yr
 [Cooling A33 PHYSICS] d_120=3333.333333333333, l_119=None, A28=3333.333333333333, A29=3.333333333333333, A30=4.013333333333333, A16=3.5700000000000003, A31=14399.238, A32=1244094163.2, A33=345.58171200000004
 [Cooling m_124 COOLING-TARGET] m_129_annual=0, E37_daily=0, E45(d_21)=196, E50=0, E51=67734.01555200001, E52=-67734.01555200001, E54(m_19)=120, E55(result)=-23.518755400000003
 [Cooling] 📊 Publishing results with prefix="" (mode=target)
 [Cooling] ⚠️ Already calculating (mode=reference) - skipping to prevent recursion
 [Cooling] ⚠️ Already calculating (mode=target) - skipping to prevent recursion
 [Cooling] ⚠️ Already calculating (mode=reference) - skipping to prevent recursion
 [Cooling] ⚠️ Already calculating (mode=target) - skipping to prevent recursion
 [Cooling] ⚠️ Already calculating (mode=reference) - skipping to prevent recursion
 [Cooling] ⚠️ Already calculating (mode=target) - skipping to prevent recursion
 [Section14] ✅ Added comprehensive listeners for 26 dependencies + 8 climate fields
 S14: Section rendered - initializing Pattern A Dual-State Module.
 S14: Reference defaults loaded from standard: OBC SB10 5.5-6 Z6
 [Section14] ✅ Added comprehensive listeners for 26 dependencies + 8 climate fields
 [Cooling] 🚀 Starting cooling calculations (mode=reference)...
 [Cooling] Free cooling calc: massFlow=0.000 kg/s, ΔT=3.6°C → 0.00 kWh/day → 0.00 kWh/yr
 [Cooling A33 PHYSICS] d_120=3333.333333333333, l_119=None, A28=3333.333333333333, A29=3.333333333333333, A30=4.013333333333333, A16=3.5700000000000003, A31=14399.238, A32=1244094163.2, A33=345.58171200000004
 [Cooling m_124 COOLING-TARGET] m_129_annual=67890.0732373953, E37_daily=346.3779246805883, E45(d_21)=196, E50=67890.0732373953, E51=67734.01555200001, E52=156.05768539529527, E54(m_19)=120, E55(result)=0.054186696317810853
 [Cooling] 📊 Publishing results with prefix="ref_" (mode=reference)
 [Cooling] 🚀 Starting cooling calculations (mode=target)...
 [Cooling] Free cooling calc: massFlow=4.013 kg/s, ΔT=3.6°C → 345.58 kWh/day → 41469.81 kWh/yr
 [Cooling A33 PHYSICS] d_120=3333.333333333333, l_119=None, A28=3333.333333333333, A29=3.333333333333333, A30=4.013333333333333, A16=3.5700000000000003, A31=14399.238, A32=1244094163.2, A33=345.58171200000004
 [Cooling m_124 COOLING-TARGET] m_129_annual=13833.103227384398, E37_daily=70.57705728257346, E45(d_21)=196, E50=13833.1032273844, E51=67734.01555200001, E52=-53900.91232461561, E54(m_19)=120, E55(result)=-18.715594557158198
 [Cooling] 📊 Publishing results with prefix="" (mode=target)
 [Cooling] ⚠️ Already calculating (mode=reference) - skipping to prevent recursion
 [Cooling] ⚠️ Already calculating (mode=target) - skipping to prevent recursion
 [Cooling] 🚀 Starting cooling calculations (mode=reference)...
 [Cooling] Free cooling calc: massFlow=0.000 kg/s, ΔT=3.6°C → 0.00 kWh/day → 0.00 kWh/yr
 [Cooling A33 PHYSICS] d_120=3333.333333333333, l_119=None, A28=3333.333333333333, A29=3.333333333333333, A30=4.013333333333333, A16=3.5700000000000003, A31=14399.238, A32=1244094163.2, A33=345.58171200000004
 [Cooling m_124 COOLING-TARGET] m_129_annual=74970.2853340133, E37_daily=382.5014557857821, E45(d_21)=196, E50=74970.2853340133, E51=67734.01555200001, E52=7236.269782013289, E54(m_19)=120, E55(result)=2.5125936743101698
 [Cooling] 📊 Publishing results with prefix="ref_" (mode=reference)
 [Cooling] 🚀 Starting cooling calculations (mode=target)...
 [Cooling] Free cooling calc: massFlow=4.013 kg/s, ΔT=3.6°C → 345.58 kWh/day → 41469.81 kWh/yr
 [Cooling A33 PHYSICS] d_120=3333.333333333333, l_119=None, A28=3333.333333333333, A29=3.333333333333333, A30=4.013333333333333, A16=3.5700000000000003, A31=14399.238, A32=1244094163.2, A33=345.58171200000004
 [Cooling m_124 COOLING-TARGET] m_129_annual=13833.103227384398, E37_daily=70.57705728257346, E45(d_21)=196, E50=13833.1032273844, E51=67734.01555200001, E52=-53900.91232461561, E54(m_19)=120, E55(result)=-18.715594557158198
 [Cooling] 📊 Publishing results with prefix="" (mode=target)
 S14: Pattern A initialization complete.
 [S15] Missing critical upstream Reference values: ref_g_101, ref_d_101, ref_i_104
calculateReferenceModel @ 4012-Section15.js:1411Understand this warningAI
 [S15] Using fallback values for missing upstream dependencies (initialization timing)
 🔄 [S05] updateCalculatedDisplayValues: mode=target
 🔄 [S05] updateCalculatedDisplayValues: mode=target
 [S15] Missing critical upstream Reference values: ref_g_101, ref_d_101, ref_i_104
calculateReferenceModel @ 4012-Section15.js:1411Understand this warningAI
 [S15] Using fallback values for missing upstream dependencies (initialization timing)
 🔄 [S05] updateCalculatedDisplayValues: mode=target
 🔄 [S05] updateCalculatedDisplayValues: mode=target
 [S15] Missing critical upstream Reference values: ref_g_101, ref_d_101, ref_i_104
calculateReferenceModel @ 4012-Section15.js:1411Understand this warningAI
 [S15] Using fallback values for missing upstream dependencies (initialization timing)
 [S15] Missing critical upstream Reference values: ref_g_101, ref_d_101, ref_i_104
calculateReferenceModel @ 4012-Section15.js:1411Understand this warningAI
 [S15] Using fallback values for missing upstream dependencies (initialization timing)
 [S15] Missing critical upstream Reference values: ref_g_101, ref_d_101, ref_i_104
calculateReferenceModel @ 4012-Section15.js:1411Understand this warningAI
 [S15] Using fallback values for missing upstream dependencies (initialization timing)
 [S15] Missing critical upstream Reference values: ref_g_101, ref_d_101, ref_i_104
calculateReferenceModel @ 4012-Section15.js:1411Understand this warningAI
 [S15] Using fallback values for missing upstream dependencies (initialization timing)
 [S18] Notes section rendered
 [S18] Notes & QC Monitor section loaded
 Section03: Province selected: ON
 City dropdown updated for ON - selected: Alexandria
 [S15] Missing critical upstream Reference values: ref_g_101, ref_d_101, ref_i_104
calculateReferenceModel @ 4012-Section15.js:1411Understand this warningAI
 [S15] Using fallback values for missing upstream dependencies (initialization timing)
 Section03: Province selected: ON
 City dropdown updated for ON - selected: Alexandria
 [S15] Missing critical upstream Reference values: ref_g_101, ref_d_101, ref_i_104
calculateReferenceModel @ 4012-Section15.js:1411Understand this warningAI
 [S15] Using fallback values for missing upstream dependencies (initialization timing)
 TEUI Calculator 4.011 initialization complete
 [CLOCK] Performance monitoring initialized
 [TooltipManager] Empty tooltip message for field: l_104
applyTooltip @ 4011-TooltipManager.js:698Understand this warningAI
 [TooltipManager] Empty tooltip message for field: j_98
applyTooltip @ 4011-TooltipManager.js:698Understand this warningAI
 [TooltipManager] Empty tooltip message for field: l_98
applyTooltip @ 4011-TooltipManager.js:698Understand this warningAI
 [QCMonitor] QC monitoring disabled. Add ?qc=true to URL to activate.
 [TooltipManager] Empty tooltip message for field: j_98
applyTooltip @ 4011-TooltipManager.js:698Understand this warningAI
 [TooltipManager] Empty tooltip message for field: l_98
applyTooltip @ 4011-TooltipManager.js:698Understand this warningAI
 [TooltipManager] Empty tooltip message for field: j_98
applyTooltip @ 4011-TooltipManager.js:698Understand this warningAI
 [TooltipManager] Empty tooltip message for field: l_98
applyTooltip @ 4011-TooltipManager.js:698Understand this warningAI
 [TooltipManager] Empty tooltip message for field: j_98
applyTooltip @ 4011-TooltipManager.js:698Understand this warningAI
 [TooltipManager] Empty tooltip message for field: l_98
applyTooltip @ 4011-TooltipManager.js:698Understand this warningAI
 🔍 [S01DB] updateTEUIDisplay START: e_10=341.2, h_10=93.91920962886925, useType=Utility Bills
 🔍 [S01] T.1 Calculation: e_6=16.3 (ref), h_6=11.7 (target) → reduction should be 28%
 🔍 [S01DB] UPDATING h_10: 93.9 (from j_32=134041.4959823222, area=1427.2)
 🔍 [S01] h_6 explanation: target=11.7, ref=16.3, reduction=0.28220858895705525, percent=28%
 ✅ [S01] CALCULATION CHAIN COMPLETE - All values finalized including h_10
 [S15] Missing critical upstream Reference values: ref_g_101, ref_i_104
calculateReferenceModel @ 4012-Section15.js:1411Understand this warningAI
 [S15] Using fallback values for missing upstream dependencies (initialization timing)
 [S15] Missing critical upstream Reference values: ref_g_101, ref_i_104
calculateReferenceModel @ 4012-Section15.js:1411Understand this warningAI
 [S15] Using fallback values for missing upstream dependencies (initialization timing)
 [S15] Missing critical upstream Reference values: ref_g_101, ref_i_104
calculateReferenceModel @ 4012-Section15.js:1411Understand this warningAI
 [S15] Using fallback values for missing upstream dependencies (initialization timing)
 [S15] Missing critical upstream Reference values: ref_g_101, ref_i_104
calculateReferenceModel @ 4012-Section15.js:1411Understand this warningAI
 [S15] Using fallback values for missing upstream dependencies (initialization timing)
 [S15] Missing critical upstream Reference values: ref_g_101, ref_i_104
calculateReferenceModel @ 4012-Section15.js:1411Understand this warningAI
 [S15] Using fallback values for missing upstream dependencies (initialization timing)
 [S15] Missing critical upstream Reference values: ref_g_101, ref_i_104
calculateReferenceModel @ 4012-Section15.js:1411Understand this warningAI
 [S15] Using fallback values for missing upstream dependencies (initialization timing)
 [S15] Missing critical upstream Reference values: ref_g_101, ref_i_104
calculateReferenceModel @ 4012-Section15.js:1411Understand this warningAI
 [S15] Using fallback values for missing upstream dependencies (initialization timing)
 [S15] Missing critical upstream Reference values: ref_g_101, ref_i_104
calculateReferenceModel @ 4012-Section15.js:1411Understand this warningAI
 [S15] Using fallback values for missing upstream dependencies (initialization timing)
 🔄 [S05] updateCalculatedDisplayValues: mode=target
 🔄 [S05] updateCalculatedDisplayValues: mode=target
 [S12] U-agg REF: TB%=50 → g_101=0.666880, g_102=0.428571
 [S15] Missing critical upstream Reference values: ref_i_104
calculateReferenceModel @ 4012-Section15.js:1411Understand this warningAI
 [S15] Using fallback values for missing upstream dependencies (initialization timing)
 [S15] Missing critical upstream Reference values: ref_i_104
calculateReferenceModel @ 4012-Section15.js:1411Understand this warningAI
 [S15] Using fallback values for missing upstream dependencies (initialization timing)
 [S15] Missing critical upstream Reference values: ref_i_104
calculateReferenceModel @ 4012-Section15.js:1411Understand this warningAI
 [S15] Using fallback values for missing upstream dependencies (initialization timing)
 [S15] Missing critical upstream Reference values: ref_i_104
calculateReferenceModel @ 4012-Section15.js:1411Understand this warningAI
 [S15] Using fallback values for missing upstream dependencies (initialization timing)
 [S15] Missing critical upstream Reference values: ref_i_104
calculateReferenceModel @ 4012-Section15.js:1411Understand this warningAI
 [S15] Using fallback values for missing upstream dependencies (initialization timing)
 [S15] Missing critical upstream Reference values: ref_i_104
calculateReferenceModel @ 4012-Section15.js:1411Understand this warningAI
 [S15] Using fallback values for missing upstream dependencies (initialization timing)
 [S15] Missing critical upstream Reference values: ref_i_104
calculateReferenceModel @ 4012-Section15.js:1411Understand this warningAI
 [S15] Using fallback values for missing upstream dependencies (initialization timing)
 [S15] Missing critical upstream Reference values: ref_i_104
calculateReferenceModel @ 4012-Section15.js:1411Understand this warningAI
 [S15] Using fallback values for missing upstream dependencies (initialization timing)
 [S15] Missing critical upstream Reference values: ref_i_104
calculateReferenceModel @ 4012-Section15.js:1411Understand this warningAI
 [S15] Using fallback values for missing upstream dependencies (initialization timing)
 [S15] Missing critical upstream Reference values: ref_i_104
calculateReferenceModel @ 4012-Section15.js:1411Understand this warningAI
 [S15] Using fallback values for missing upstream dependencies (initialization timing)
 [S15] Missing critical upstream Reference values: ref_i_104
calculateReferenceModel @ 4012-Section15.js:1411Understand this warningAI
 [S15] Using fallback values for missing upstream dependencies (initialization timing)
 [S15] Missing critical upstream Reference values: ref_i_104
calculateReferenceModel @ 4012-Section15.js:1411Understand this warningAI
 [S15] Using fallback values for missing upstream dependencies (initialization timing)
 [S12] 🔵 REF CLIMATE READ: d_20=4600, d_21=196
 S10: Reference listener triggered by ref_i_103, recalculating all.
 [S10 DEBUG] calculateAll() triggered in target mode - running both engines
 [S10 DEBUG] Dual-engine calculations complete in target mode
 S10: Reference utilization factor dependency ref_i_103 changed.
 [S12DB] REF CLIMATE: d_20=4600, d_21=196, d_22=1960, h_22=-1680
 [S12DB] REF h_101 calc: (4600*0.6668795218521432*24)/1000 = 73.62349921247662
 [S12DB] REF i_101 result: 73.62349921247662 * 2476.6199999999994 = 182337.4306196038
 [S12DB] REF g_104 calc: (0.6668795218521432*2476.6199999999994 + 0.42857142857142855*1100.42)/3577.0400009999994 = 0.5935677913147346
 [S12DB] REF ROW104: i_101=182337.4306196038, i_102=22184.467200000003, i_103=36440.079840319355 → i_104=240961.97765992317
 [S12DB] REF ROW104: h_21="Capacitance", k_98=-4267.625965209389 → k_104=-4267.625965209389
 [S15] Missing critical upstream Reference values: ref_i_104
calculateReferenceModel @ 4012-Section15.js:1411Understand this warningAI
 [S15] Using fallback values for missing upstream dependencies (initialization timing)
 [S15] Missing critical upstream Reference values: ref_i_104
calculateReferenceModel @ 4012-Section15.js:1411Understand this warningAI
 [S15] Using fallback values for missing upstream dependencies (initialization timing)
 [S15] Missing critical upstream Reference values: ref_i_104
calculateReferenceModel @ 4012-Section15.js:1411Understand this warningAI
 [S15] Using fallback values for missing upstream dependencies (initialization timing)
 [S15] Missing critical upstream Reference values: ref_i_104
calculateReferenceModel @ 4012-Section15.js:1411Understand this warningAI
 [S15] Using fallback values for missing upstream dependencies (initialization timing)
 🔄 [S05] updateCalculatedDisplayValues: mode=target
 🔄 [S05] updateCalculatedDisplayValues: mode=target
 [Section12] Reference results stored with ref_ prefix for downstream sections
 [S12] U-agg TGT: TB%=20 → g_101=0.278341, g_102=0.324324
 [S12] 🎯 TGT CLIMATE READ: d_20=4600, d_21=196
 S10: Target listener triggered by i_103, recalculating all.
 [S10 DEBUG] calculateAll() triggered in target mode - running both engines
 [S10 DEBUG] Dual-engine calculations complete in target mode
 S10: Target utilization factor dependency i_103 changed.
 [Cooling] 🚀 Starting cooling calculations (mode=reference)...
 [Cooling] Free cooling calc: massFlow=0.000 kg/s, ΔT=3.6°C → 0.00 kWh/day → 0.00 kWh/yr
 [Cooling A33 PHYSICS] d_120=3333.333333333333, l_119=None, A28=3333.333333333333, A29=3.333333333333333, A30=4.013333333333333, A16=3.5700000000000003, A31=14399.238, A32=1244094163.2, A33=345.58171200000004
 [Cooling m_124 COOLING-TARGET] m_129_annual=74970.2853340133, E37_daily=382.5014557857821, E45(d_21)=196, E50=74970.2853340133, E51=67734.01555200001, E52=7236.269782013289, E54(m_19)=120, E55(result)=2.5125936743101698
 [Cooling] 📊 Publishing results with prefix="ref_" (mode=reference)
 S10: Reference listener triggered by ref_m_121, recalculating all.
 [S10 DEBUG] calculateAll() triggered in target mode - running both engines
 [S10 DEBUG] Dual-engine calculations complete in target mode
 S10: Reference utilization factor dependency ref_m_121 changed.
 🔄 [S05] updateCalculatedDisplayValues: mode=target
 🔄 [S05] updateCalculatedDisplayValues: mode=target
 [S14 LISTENER] 🔥 ref_d_122 changed - triggering calculateAll() + UI update
 [S14 LISTENER] 🔥 ref_d_122 changed - triggering calculateAll() + UI update
 [Cooling] 🚀 Starting cooling calculations (mode=target)...
 [Cooling] Free cooling calc: massFlow=4.013 kg/s, ΔT=3.6°C → 345.58 kWh/day → 41469.81 kWh/yr
 [Cooling A33 PHYSICS] d_120=3333.333333333333, l_119=None, A28=3333.333333333333, A29=3.333333333333333, A30=4.013333333333333, A16=3.5700000000000003, A31=14399.238, A32=1244094163.2, A33=345.58171200000004
 [Cooling m_124 COOLING-TARGET] m_129_annual=13833.103227384398, E37_daily=70.57705728257346, E45(d_21)=196, E50=13833.1032273844, E51=67734.01555200001, E52=-53900.91232461561, E54(m_19)=120, E55(result)=-18.715594557158198
 [Cooling] 📊 Publishing results with prefix="" (mode=target)
 🔄 [S05] updateCalculatedDisplayValues: mode=target
 🔄 [S05] updateCalculatedDisplayValues: mode=target
 [Cooling] 🚀 Starting cooling calculations (mode=reference)...
 [Cooling] Free cooling calc: massFlow=9.599 kg/s, ΔT=3.6°C → 826.52 kWh/day → 99181.95 kWh/yr
 [Cooling A33 PHYSICS] d_120=3333.333333333333, l_119=None, A28=3333.333333333333, A29=3.333333333333333, A30=4.013333333333333, A16=3.5700000000000003, A31=14399.238, A32=1244094163.2, A33=345.58171200000004
 [Cooling m_124 COOLING-TARGET] m_129_annual=56269.86025479061, E37_daily=287.0911237489317, E45(d_21)=196, E50=56269.86025479061, E51=67734.01555200001, E52=-11464.1552972094, E54(m_19)=120, E55(result)=-3.9806094781977084
 [Cooling] 📊 Publishing results with prefix="ref_" (mode=reference)
 [Cooling] 🚀 Starting cooling calculations (mode=target)...
 [Cooling] Free cooling calc: massFlow=4.013 kg/s, ΔT=3.6°C → 345.58 kWh/day → 41469.81 kWh/yr
 [Cooling A33 PHYSICS] d_120=3333.333333333333, l_119=None, A28=3333.333333333333, A29=3.333333333333333, A30=4.013333333333333, A16=3.5700000000000003, A31=14399.238, A32=1244094163.2, A33=345.58171200000004
 [Cooling m_124 COOLING-TARGET] m_129_annual=13833.103227384398, E37_daily=70.57705728257346, E45(d_21)=196, E50=13833.1032273844, E51=67734.01555200001, E52=-53900.91232461561, E54(m_19)=120, E55(result)=-18.715594557158198
 [Cooling] 📊 Publishing results with prefix="" (mode=target)
 [S12DB] TGT CLIMATE: d_20=4600, d_21=196, d_22=1960, h_22=-1680
 [S12DB] TGT h_101 calc: (4600*0.2783410626476887*24)/1000 = 30.728853316304836
 [S12DB] TGT i_101 result: 30.728853316304836 * 2476.6199999999994 = 76103.69270022686
 [S12DB] TGT g_104 calc: (0.2783410626476887*2476.6199999999994 + 0.3243243243243243*1100.42)/3577.0400009999994 = 0.2924870885578592
 [S12DB] TGT ROW104: i_101=76103.69270022686, i_102=16788.24544864865, i_103=23178.387012790416 → i_104=116070.32516166594
 [S12DB] TGT ROW104: h_21="Capacitance", k_98=-3293.5693790538335 → k_104=-3293.5693790538335
 [Cooling] 🚀 Starting cooling calculations (mode=reference)...
 [Cooling] Free cooling calc: massFlow=9.599 kg/s, ΔT=3.6°C → 826.52 kWh/day → 99181.95 kWh/yr
 [Cooling A33 PHYSICS] d_120=3333.333333333333, l_119=None, A28=3333.333333333333, A29=3.333333333333333, A30=4.013333333333333, A16=3.5700000000000003, A31=14399.238, A32=1244094163.2, A33=345.58171200000004
 [Cooling m_124 COOLING-TARGET] m_129_annual=0, E37_daily=0, E45(d_21)=196, E50=0, E51=67734.01555200001, E52=-67734.01555200001, E54(m_19)=120, E55(result)=-23.518755400000003
 [Cooling] 📊 Publishing results with prefix="ref_" (mode=reference)
 [Cooling] 🚀 Starting cooling calculations (mode=target)...
 [Cooling] Free cooling calc: massFlow=4.013 kg/s, ΔT=3.6°C → 345.58 kWh/day → 41469.81 kWh/yr
 [Cooling A33 PHYSICS] d_120=3333.333333333333, l_119=None, A28=3333.333333333333, A29=3.333333333333333, A30=4.013333333333333, A16=3.5700000000000003, A31=14399.238, A32=1244094163.2, A33=345.58171200000004
 [Cooling m_124 COOLING-TARGET] m_129_annual=13833.103227384398, E37_daily=70.57705728257346, E45(d_21)=196, E50=13833.1032273844, E51=67734.01555200001, E52=-53900.91232461561, E54(m_19)=120, E55(result)=-18.715594557158198
 [Cooling] 📊 Publishing results with prefix="" (mode=target)
 🔄 [S05] updateCalculatedDisplayValues: mode=target
 🔄 [S05] updateCalculatedDisplayValues: mode=target
 [Cooling] 🚀 Starting cooling calculations (mode=reference)...
 [Cooling] Free cooling calc: massFlow=9.599 kg/s, ΔT=3.6°C → 826.52 kWh/day → 99181.95 kWh/yr
 [Cooling A33 PHYSICS] d_120=3333.333333333333, l_119=None, A28=3333.333333333333, A29=3.333333333333333, A30=4.013333333333333, A16=3.5700000000000003, A31=14399.238, A32=1244094163.2, A33=345.58171200000004
 [Cooling m_124 COOLING-TARGET] m_129_annual=0, E37_daily=0, E45(d_21)=196, E50=0, E51=67734.01555200001, E52=-67734.01555200001, E54(m_19)=120, E55(result)=-23.518755400000003
 [Cooling] 📊 Publishing results with prefix="ref_" (mode=reference)
 [Cooling] 🚀 Starting cooling calculations (mode=target)...
 [Cooling] Free cooling calc: massFlow=4.013 kg/s, ΔT=3.6°C → 345.58 kWh/day → 41469.81 kWh/yr
 [Cooling A33 PHYSICS] d_120=3333.333333333333, l_119=None, A28=3333.333333333333, A29=3.333333333333333, A30=4.013333333333333, A16=3.5700000000000003, A31=14399.238, A32=1244094163.2, A33=345.58171200000004
 [Cooling m_124 COOLING-TARGET] m_129_annual=13973.521976753496, E37_daily=71.29347947323213, E45(d_21)=196, E50=13973.521976753496, E51=67734.01555200001, E52=-53760.49357524652, E54(m_19)=120, E55(result)=-18.666838046960596
 [Cooling] 📊 Publishing results with prefix="" (mode=target)
 [Cooling] ⚠️ Already calculating (mode=reference) - skipping to prevent recursion
 [Cooling] ⚠️ Already calculating (mode=target) - skipping to prevent recursion
 [Cooling] 🚀 Starting cooling calculations (mode=reference)...
 [Cooling] Free cooling calc: massFlow=9.599 kg/s, ΔT=3.6°C → 826.52 kWh/day → 99181.95 kWh/yr
 [Cooling A33 PHYSICS] d_120=3333.333333333333, l_119=None, A28=3333.333333333333, A29=3.333333333333333, A30=4.013333333333333, A16=3.5700000000000003, A31=14399.238, A32=1244094163.2, A33=345.58171200000004
 [Cooling m_124 COOLING-TARGET] m_129_annual=0, E37_daily=0, E45(d_21)=196, E50=0, E51=67734.01555200001, E52=-67734.01555200001, E54(m_19)=120, E55(result)=-23.518755400000003
 [Cooling] 📊 Publishing results with prefix="ref_" (mode=reference)
 [Cooling] 🚀 Starting cooling calculations (mode=target)...
 [Cooling] Free cooling calc: massFlow=4.013 kg/s, ΔT=3.6°C → 345.58 kWh/day → 41469.81 kWh/yr
 [Cooling A33 PHYSICS] d_120=3333.333333333333, l_119=None, A28=3333.333333333333, A29=3.333333333333333, A30=4.013333333333333, A16=3.5700000000000003, A31=14399.238, A32=1244094163.2, A33=345.58171200000004
 [Cooling m_124 COOLING-TARGET] m_129_annual=13973.521976753496, E37_daily=71.29347947323213, E45(d_21)=196, E50=13973.521976753496, E51=67734.01555200001, E52=-53760.49357524652, E54(m_19)=120, E55(result)=-18.666838046960596
 [Cooling] 📊 Publishing results with prefix="" (mode=target)
 🔄 [S05] updateCalculatedDisplayValues: mode=target
 🔄 [S05] updateCalculatedDisplayValues: mode=target
 [Cooling] 🚀 Starting cooling calculations (mode=reference)...
 [Cooling] Free cooling calc: massFlow=9.599 kg/s, ΔT=3.6°C → 826.52 kWh/day → 99181.95 kWh/yr
 [Cooling A33 PHYSICS] d_120=3333.333333333333, l_119=None, A28=3333.333333333333, A29=3.333333333333333, A30=4.013333333333333, A16=3.5700000000000003, A31=14399.238, A32=1244094163.2, A33=345.58171200000004
 [Cooling m_124 COOLING-TARGET] m_129_annual=0, E37_daily=0, E45(d_21)=196, E50=0, E51=67734.01555200001, E52=-67734.01555200001, E54(m_19)=120, E55(result)=-23.518755400000003
 [Cooling] 📊 Publishing results with prefix="ref_" (mode=reference)
 [Cooling] 🚀 Starting cooling calculations (mode=target)...
 [Cooling] Free cooling calc: massFlow=4.013 kg/s, ΔT=3.6°C → 345.58 kWh/day → 41469.81 kWh/yr
 [Cooling A33 PHYSICS] d_120=3333.333333333333, l_119=None, A28=3333.333333333333, A29=3.333333333333333, A30=4.013333333333333, A16=3.5700000000000003, A31=14399.238, A32=1244094163.2, A33=345.58171200000004
 [Cooling m_124 COOLING-TARGET] m_129_annual=10679.952597699661, E37_daily=54.48955406989623, E45(d_21)=196, E50=10679.952597699661, E51=67734.01555200001, E52=-57054.06295430035, E54(m_19)=120, E55(result)=-19.810438525798734
 [Cooling] 📊 Publishing results with prefix="" (mode=target)
 [Cooling] ⚠️ Already calculating (mode=reference) - skipping to prevent recursion
 [Cooling] ⚠️ Already calculating (mode=target) - skipping to prevent recursion
 [Section12] Calculated display values updated for target mode
 [DependencyGraph] Data loaded: 349 nodes, 588 links
 [DependencyGraph] Calculating node sizes...
 [TooltipManager] Empty tooltip message for field: j_98
applyTooltip @ 4011-TooltipManager.js:698Understand this warningAI
 [TooltipManager] Empty tooltip message for field: l_98
applyTooltip @ 4011-TooltipManager.js:698Understand this warningAI
 [CLOCK] Starting initial load timing
 [S11] calculateAll TRIGGERED. isReferenceMode: false
 [S11] 🔵 REF CLIMATE READ: h_22=-1680
 [S11] 🔵 REF CLIMATE READ: h_22=-1680
 [S11] REF TB%=50% → ref_i_97=31694.95, ref_k_97=-2133.81
 [S11] Writing ref penalty: ref_i_97=31694.95, ref_k_97=-2133.81
 [S11] 🎯 TGT CLIMATE READ: h_22=-1680
 [S11] 🎯 TGT CLIMATE READ: h_22=-1680
 [S11] calculateAll TRIGGERED. isReferenceMode: false
 [S11] 🔵 REF CLIMATE READ: h_22=-1680
 [S11] 🔵 REF CLIMATE READ: h_22=-1680
 [S11] REF TB%=50% → ref_i_97=31694.95, ref_k_97=-2133.81
 [S11] Writing ref penalty: ref_i_97=31694.95, ref_k_97=-2133.81
 [S11] 🎯 TGT CLIMATE READ: h_22=-1680
 [S11] 🎯 TGT CLIMATE READ: h_22=-1680
 [S11] calculateAll TRIGGERED. isReferenceMode: false
 [S11] 🔵 REF CLIMATE READ: h_22=-1680
 [S11] 🔵 REF CLIMATE READ: h_22=-1680
 [S11] REF TB%=50% → ref_i_97=31694.95, ref_k_97=-2133.81
 [S11] Writing ref penalty: ref_i_97=31694.95, ref_k_97=-2133.81
 [S11] 🎯 TGT CLIMATE READ: h_22=-1680
 [S11] 🎯 TGT CLIMATE READ: h_22=-1680
 [S11] calculateAll TRIGGERED. isReferenceMode: false
 [S11] 🔵 REF CLIMATE READ: h_22=-1680
 [S11] 🔵 REF CLIMATE READ: h_22=-1680
 [S11] REF TB%=50% → ref_i_97=31694.95, ref_k_97=-2133.81
 [S11] Writing ref penalty: ref_i_97=31694.95, ref_k_97=-2133.81
 [S11] 🎯 TGT CLIMATE READ: h_22=-1680
 [S11] 🎯 TGT CLIMATE READ: h_22=-1680
 [S03] Target CALCULATED results stored (setpoints + derived values only - climate data already published)
 [S12] U-agg TGT: TB%=20 → g_101=0.278341, g_102=0.324324
 [S12] 🎯 TGT CLIMATE READ: d_20=4600, d_21=196
 [S12DB] TGT CLIMATE: d_20=4600, d_21=196, d_22=1960, h_22=-1680
 [S12DB] TGT h_101 calc: (4600*0.2783410626476887*24)/1000 = 30.728853316304836
 [S12DB] TGT i_101 result: 30.728853316304836 * 2476.6199999999994 = 76103.69270022686
 [S12DB] TGT g_104 calc: (0.2783410626476887*2476.6199999999994 + 0.3243243243243243*1100.42)/3577.0400009999994 = 0.2924870885578592
 [S12DB] TGT ROW104: i_101=76103.69270022686, i_102=16788.24544864865, i_103=23178.387012790416 → i_104=116070.32516166594
 [S12DB] TGT ROW104: h_21="Capacitance", k_98=-3293.5693790538335 → k_104=-3293.5693790538335
 [Section12] Calculated display values updated for target mode
 [S11] calculateAll TRIGGERED. isReferenceMode: false
 [S11] 🔵 REF CLIMATE READ: h_22=-1680
 [S11] 🔵 REF CLIMATE READ: h_22=-1680
 [S11] REF TB%=50% → ref_i_97=31694.95, ref_k_97=-2133.81
 [S11] Writing ref penalty: ref_i_97=31694.95, ref_k_97=-2133.81
 [S11] 🎯 TGT CLIMATE READ: h_22=-1680
 [S11] 🎯 TGT CLIMATE READ: h_22=-1680
 [S11] calculateAll TRIGGERED. isReferenceMode: false
 [S11] 🔵 REF CLIMATE READ: h_22=-1680
 [S11] 🔵 REF CLIMATE READ: h_22=-1680
 [S11] REF TB%=50% → ref_i_97=31694.95, ref_k_97=-2133.81
 [S11] Writing ref penalty: ref_i_97=31694.95, ref_k_97=-2133.81
 [S11] 🎯 TGT CLIMATE READ: h_22=-1680
 [S11] 🎯 TGT CLIMATE READ: h_22=-1680
 [Cooling] 🚀 Starting cooling calculations (mode=reference)...
 [Cooling] Free cooling calc: massFlow=9.599 kg/s, ΔT=3.6°C → 826.52 kWh/day → 99181.95 kWh/yr
 [Cooling A33 PHYSICS] d_120=3333.333333333333, l_119=None, A28=3333.333333333333, A29=3.333333333333333, A30=4.013333333333333, A16=3.5700000000000003, A31=14399.238, A32=1244094163.2, A33=345.58171200000004
 [Cooling m_124 COOLING-TARGET] m_129_annual=0, E37_daily=0, E45(d_21)=196, E50=0, E51=67734.01555200001, E52=-67734.01555200001, E54(m_19)=120, E55(result)=-23.518755400000003
 [Cooling] 📊 Publishing results with prefix="ref_" (mode=reference)
 [Cooling] 🚀 Starting cooling calculations (mode=target)...
 [Cooling] Free cooling calc: massFlow=4.013 kg/s, ΔT=3.6°C → 345.58 kWh/day → 41469.81 kWh/yr
 [Cooling A33 PHYSICS] d_120=3333.333333333333, l_119=None, A28=3333.333333333333, A29=3.333333333333333, A30=4.013333333333333, A16=3.5700000000000003, A31=14399.238, A32=1244094163.2, A33=345.58171200000004
 [Cooling m_124 COOLING-TARGET] m_129_annual=10679.952597699661, E37_daily=54.48955406989623, E45(d_21)=196, E50=10679.952597699661, E51=67734.01555200001, E52=-57054.06295430035, E54(m_19)=120, E55(result)=-19.810438525798734
 [Cooling] 📊 Publishing results with prefix="" (mode=target)
 [S11] calculateAll TRIGGERED. isReferenceMode: false
 [S11] 🔵 REF CLIMATE READ: h_22=-1680
 [S11] 🔵 REF CLIMATE READ: h_22=-1680
 [S11] REF TB%=50% → ref_i_97=31694.95, ref_k_97=-2133.81
 [S11] Writing ref penalty: ref_i_97=31694.95, ref_k_97=-2133.81
 [S11] 🎯 TGT CLIMATE READ: h_22=-1680
 [S11] 🎯 TGT CLIMATE READ: h_22=-1680
 [S11] calculateAll TRIGGERED. isReferenceMode: false
 [S11] 🔵 REF CLIMATE READ: h_22=-1680
 [S11] 🔵 REF CLIMATE READ: h_22=-1680
 [S11] REF TB%=50% → ref_i_97=31694.95, ref_k_97=-2133.81
 [S11] Writing ref penalty: ref_i_97=31694.95, ref_k_97=-2133.81
 [S11] 🎯 TGT CLIMATE READ: h_22=-1680
 [S11] 🎯 TGT CLIMATE READ: h_22=-1680
 [Cooling] 🚀 Starting cooling calculations (mode=reference)...
 [Cooling] Free cooling calc: massFlow=9.599 kg/s, ΔT=3.6°C → 826.52 kWh/day → 99181.95 kWh/yr
 [Cooling A33 PHYSICS] d_120=3333.333333333333, l_119=None, A28=3333.333333333333, A29=3.333333333333333, A30=4.013333333333333, A16=3.5700000000000003, A31=14399.238, A32=1244094163.2, A33=345.58171200000004
 [Cooling m_124 COOLING-TARGET] m_129_annual=0, E37_daily=0, E45(d_21)=196, E50=0, E51=67734.01555200001, E52=-67734.01555200001, E54(m_19)=120, E55(result)=-23.518755400000003
 [Cooling] 📊 Publishing results with prefix="ref_" (mode=reference)
 [Cooling] 🚀 Starting cooling calculations (mode=target)...
 [Cooling] Free cooling calc: massFlow=4.013 kg/s, ΔT=3.6°C → 345.58 kWh/day → 41469.81 kWh/yr
 [Cooling A33 PHYSICS] d_120=3333.333333333333, l_119=None, A28=3333.333333333333, A29=3.333333333333333, A30=4.013333333333333, A16=3.5700000000000003, A31=14399.238, A32=1244094163.2, A33=345.58171200000004
 [Cooling m_124 COOLING-TARGET] m_129_annual=10679.952597699661, E37_daily=54.48955406989623, E45(d_21)=196, E50=10679.952597699661, E51=67734.01555200001, E52=-57054.06295430035, E54(m_19)=120, E55(result)=-19.810438525798734
 [Cooling] 📊 Publishing results with prefix="" (mode=target)
 [S11] calculateAll TRIGGERED. isReferenceMode: false
 [S11] 🔵 REF CLIMATE READ: h_22=-1680
 [S11] 🔵 REF CLIMATE READ: h_22=-1680
 [S11] REF TB%=50% → ref_i_97=31694.95, ref_k_97=-2133.81
 [S11] Writing ref penalty: ref_i_97=31694.95, ref_k_97=-2133.81
 [S11] 🎯 TGT CLIMATE READ: h_22=-1680
 [S11] 🎯 TGT CLIMATE READ: h_22=-1680
 [S11] calculateAll TRIGGERED. isReferenceMode: false
 [S11] 🔵 REF CLIMATE READ: h_22=-1680
 [S11] 🔵 REF CLIMATE READ: h_22=-1680
 [S11] REF TB%=50% → ref_i_97=31694.95, ref_k_97=-2133.81
 [S11] Writing ref penalty: ref_i_97=31694.95, ref_k_97=-2133.81
 [S11] 🎯 TGT CLIMATE READ: h_22=-1680
 [S11] 🎯 TGT CLIMATE READ: h_22=-1680
 [Cooling] 🚀 Starting cooling calculations (mode=reference)...
 [Cooling] Free cooling calc: massFlow=9.599 kg/s, ΔT=3.6°C → 826.52 kWh/day → 99181.95 kWh/yr
 [Cooling A33 PHYSICS] d_120=3333.333333333333, l_119=None, A28=3333.333333333333, A29=3.333333333333333, A30=4.013333333333333, A16=3.5700000000000003, A31=14399.238, A32=1244094163.2, A33=345.58171200000004
 [Cooling m_124 COOLING-TARGET] m_129_annual=0, E37_daily=0, E45(d_21)=196, E50=0, E51=67734.01555200001, E52=-67734.01555200001, E54(m_19)=120, E55(result)=-23.518755400000003
 [Cooling] 📊 Publishing results with prefix="ref_" (mode=reference)
 [Cooling] 🚀 Starting cooling calculations (mode=target)...
 [Cooling] Free cooling calc: massFlow=4.013 kg/s, ΔT=3.6°C → 345.58 kWh/day → 41469.81 kWh/yr
 [Cooling A33 PHYSICS] d_120=3333.333333333333, l_119=None, A28=3333.333333333333, A29=3.333333333333333, A30=4.013333333333333, A16=3.5700000000000003, A31=14399.238, A32=1244094163.2, A33=345.58171200000004
 [Cooling m_124 COOLING-TARGET] m_129_annual=10679.952597699661, E37_daily=54.48955406989623, E45(d_21)=196, E50=10679.952597699661, E51=67734.01555200001, E52=-57054.06295430035, E54(m_19)=120, E55(result)=-19.810438525798734
 [Cooling] 📊 Publishing results with prefix="" (mode=target)
 [S11] calculateAll TRIGGERED. isReferenceMode: false
 [S11] 🔵 REF CLIMATE READ: h_22=-1680
 [S11] 🔵 REF CLIMATE READ: h_22=-1680
 [S11] REF TB%=50% → ref_i_97=31694.95, ref_k_97=-2133.81
 [S11] Writing ref penalty: ref_i_97=31694.95, ref_k_97=-2133.81
 [S11] 🎯 TGT CLIMATE READ: h_22=-1680
 [S11] 🎯 TGT CLIMATE READ: h_22=-1680
 [S11] calculateAll TRIGGERED. isReferenceMode: false
 [S11] 🔵 REF CLIMATE READ: h_22=-1680
 [S11] 🔵 REF CLIMATE READ: h_22=-1680
 [S11] REF TB%=50% → ref_i_97=31694.95, ref_k_97=-2133.81
 [S11] Writing ref penalty: ref_i_97=31694.95, ref_k_97=-2133.81
 [S11] 🎯 TGT CLIMATE READ: h_22=-1680
 [S11] 🎯 TGT CLIMATE READ: h_22=-1680
 [Cooling] 🚀 Starting cooling calculations (mode=reference)...
 [Cooling] Free cooling calc: massFlow=9.599 kg/s, ΔT=3.6°C → 826.52 kWh/day → 99181.95 kWh/yr
 [Cooling A33 PHYSICS] d_120=3333.333333333333, l_119=None, A28=3333.333333333333, A29=3.333333333333333, A30=4.013333333333333, A16=3.5700000000000003, A31=14399.238, A32=1244094163.2, A33=345.58171200000004
 [Cooling m_124 COOLING-TARGET] m_129_annual=0, E37_daily=0, E45(d_21)=196, E50=0, E51=67734.01555200001, E52=-67734.01555200001, E54(m_19)=120, E55(result)=-23.518755400000003
 [Cooling] 📊 Publishing results with prefix="ref_" (mode=reference)
 [Cooling] 🚀 Starting cooling calculations (mode=target)...
 [Cooling] Free cooling calc: massFlow=4.013 kg/s, ΔT=3.6°C → 345.58 kWh/day → 41469.81 kWh/yr
 [Cooling A33 PHYSICS] d_120=3333.333333333333, l_119=None, A28=3333.333333333333, A29=3.333333333333333, A30=4.013333333333333, A16=3.5700000000000003, A31=14399.238, A32=1244094163.2, A33=345.58171200000004
 [Cooling m_124 COOLING-TARGET] m_129_annual=10679.952597699661, E37_daily=54.48955406989623, E45(d_21)=196, E50=10679.952597699661, E51=67734.01555200001, E52=-57054.06295430035, E54(m_19)=120, E55(result)=-19.810438525798734
 [Cooling] 📊 Publishing results with prefix="" (mode=target)
 [S03] Reference CALCULATED results stored (climate data + setpoints - INPUT fields excluded)
 [S12] U-agg REF: TB%=50 → g_101=0.572061, g_102=0.428571
 [S12] 🔵 REF CLIMATE READ: d_20=4600, d_21=196
 [S12DB] REF CLIMATE: d_20=4600, d_21=196, d_22=1960, h_22=-1680
 [S12DB] REF h_101 calc: (4600*0.5720614690100458*24)/1000 = 63.15558617870907
 [S12DB] REF i_101 result: 63.15558617870907 * 2476.6199999999994 = 156412.38784191443
 [S12DB] REF g_104 calc: (0.5720614690100458*2476.6199999999994 + 0.42857142857142855*1100.42)/3577.0400009999994 = 0.5279190185964686
 [S12DB] REF ROW104: i_101=156412.38784191443, i_102=22184.467200000003, i_103=36440.079840319355 → i_104=215036.9348822338
 [S12DB] REF ROW104: h_21="Capacitance", k_98=-4267.625965209389 → k_104=-4267.625965209389
 🔄 [S05] updateCalculatedDisplayValues: mode=target
 🔄 [S05] updateCalculatedDisplayValues: mode=target
 [Section12] Reference results stored with ref_ prefix for downstream sections
 [S12] U-agg TGT: TB%=20 → g_101=0.278341, g_102=0.324324
 [S12] 🎯 TGT CLIMATE READ: d_20=4600, d_21=196
 [S12DB] TGT CLIMATE: d_20=4600, d_21=196, d_22=1960, h_22=-1680
 [S12DB] TGT h_101 calc: (4600*0.2783410626476887*24)/1000 = 30.728853316304836
 [S12DB] TGT i_101 result: 30.728853316304836 * 2476.6199999999994 = 76103.69270022686
 [S12DB] TGT g_104 calc: (0.2783410626476887*2476.6199999999994 + 0.3243243243243243*1100.42)/3577.0400009999994 = 0.2924870885578592
 [S12DB] TGT ROW104: i_101=76103.69270022686, i_102=16788.24544864865, i_103=23178.387012790416 → i_104=116070.32516166594
 [S12DB] TGT ROW104: h_21="Capacitance", k_98=-3293.5693790538335 → k_104=-3293.5693790538335
 [Section12] Calculated display values updated for target mode
 [S10 DEBUG] calculateAll() triggered in target mode - running both engines
 [S10 DEBUG] Dual-engine calculations complete in target mode
 [S11] calculateAll TRIGGERED. isReferenceMode: false
 [S11] 🔵 REF CLIMATE READ: h_22=-1680
 [S11] 🔵 REF CLIMATE READ: h_22=-1680
 [S11] REF TB%=50% → ref_i_97=31694.95, ref_k_97=-2133.81
 [S11] Writing ref penalty: ref_i_97=31694.95, ref_k_97=-2133.81
 [S11] 🎯 TGT CLIMATE READ: h_22=-1680
 [S11] 🎯 TGT CLIMATE READ: h_22=-1680
 [S07] calculateEmissionsAndLosses: systemType="Heatpump" (TGT)
 [S07] ⚡ Non-fossil fuel: Heatpump → e_51=0, k_54=0 (both cleared)
 [S07] calculateEmissionsAndLosses: systemType="Electric" (REF)
 [S07] ⚡ Non-fossil fuel: Electric → e_51=0, k_54=0 (both cleared)
 [Cooling] 🚀 Starting cooling calculations (mode=reference)...
 [Cooling] Free cooling calc: massFlow=9.599 kg/s, ΔT=3.6°C → 826.52 kWh/day → 99181.95 kWh/yr
 [Cooling A33 PHYSICS] d_120=3333.333333333333, l_119=None, A28=3333.333333333333, A29=3.333333333333333, A30=4.013333333333333, A16=3.5700000000000003, A31=14399.238, A32=1244094163.2, A33=345.58171200000004
 [Cooling m_124 COOLING-TARGET] m_129_annual=0, E37_daily=0, E45(d_21)=196, E50=0, E51=67734.01555200001, E52=-67734.01555200001, E54(m_19)=120, E55(result)=-23.518755400000003
 [Cooling] 📊 Publishing results with prefix="ref_" (mode=reference)
 [Cooling] 🚀 Starting cooling calculations (mode=target)...
 [Cooling] Free cooling calc: massFlow=4.013 kg/s, ΔT=3.6°C → 345.58 kWh/day → 41469.81 kWh/yr
 [Cooling A33 PHYSICS] d_120=3333.333333333333, l_119=None, A28=3333.333333333333, A29=3.333333333333333, A30=4.013333333333333, A16=3.5700000000000003, A31=14399.238, A32=1244094163.2, A33=345.58171200000004
 [Cooling m_124 COOLING-TARGET] m_129_annual=10679.952597699661, E37_daily=54.48955406989623, E45(d_21)=196, E50=10679.952597699661, E51=67734.01555200001, E52=-57054.06295430035, E54(m_19)=120, E55(result)=-19.810438525798734
 [Cooling] 📊 Publishing results with prefix="" (mode=target)
 🟢 [S06-TAR] Storing d_43 = 0 (from d_44=0, d_45=0, d_46=0)
 🔵 [S06-REF] Storing ref_d_43 = 0 (from d_44=0, d_45=0, d_46=0)
 [DependencyGraph] Data loaded: 349 nodes, 588 links
 [DependencyGraph] Calculating node sizes...
 🔍 [S01DB] updateTEUIDisplay START: e_10=341.2, h_10=93.72003071129046, useType=Utility Bills
 🔍 [S01] T.1 Calculation: e_6=31.3 (ref), h_6=11.7 (target) → reduction should be 63%
 🔍 [S01DB] UPDATING h_10: 93.7 (from j_32=133757.22783115375, area=1427.2)
 🔍 [S01] h_6 explanation: target=11.7, ref=31.3, reduction=0.6261980830670927, percent=63%
 🕐 [CLOCK] ⭐ INITIALIZATION COMPLETE: 551ms (all calculations finalized)
 ✅ [S01] CALCULATION CHAIN COMPLETE - All values finalized including h_10
 [S02] Switched to REFERENCE mode
 [S02] Refreshing UI for REFERENCE mode
 [S02] Updated h_12 (reporting year) slider = "2022" (reference mode)
 [S02] Updated h_13 (service life) slider = "50" (reference mode)
 [S02] Updated h_15 = "1,427.20" (reference mode)
 [S02] Updated i_17 = "8154" (reference mode)
 [S02] Updated l_12 = "$0.1300" (reference mode)
 [S02] Updated l_13 = "$0.5070" (reference mode)
 [S02] Updated l_14 = "$1.6200" (reference mode)
 [S02] Updated l_15 = "$180.00" (reference mode)
 [S02] Updated l_16 = "$1.5000" (reference mode)
 Section03: Province selected: ON
 [CLOCK] 🎯 User interaction started - timing to h_10 settlement
 [CLOCK] 🎯 User interaction started - timing to h_10 settlement
 City dropdown updated for ON - selected: Alexandria
 S11: Switched to REFERENCE mode
 [S11 Area Sync] Starting sync in reference mode
 [S11 Area Sync] d_88 = 7.50 (from ref_d_73)
 [S11 Area Sync] d_89 = 81.14 (from ref_d_74)
 [S11 Area Sync] d_90 = 3.83 (from ref_d_75)
 [S11 Area Sync] d_91 = 159.00 (from ref_d_76)
 [S11 Area Sync] d_92 = 100.66 (from ref_d_77)
 [S11 Area Sync] d_93 = 0.00 (from ref_d_78)
 [S11 Area Sync] Refreshing UI...
 [S11 Area Sync] Triggering recalculation...
 [S11] calculateAll TRIGGERED. isReferenceMode: false
 [S11] 🔵 REF CLIMATE READ: h_22=-1680
 [S11] 🔵 REF CLIMATE READ: h_22=-1680
 [S11] REF TB%=50% → ref_i_97=59532.29, ref_k_97=-947.70
 S10: Reference listener triggered by ref_i_98, recalculating all.
 [S10 DEBUG] calculateAll() triggered in target mode - running both engines
 [S10 DEBUG] Dual-engine calculations complete in target mode
 S10: Reference utilization factor dependency ref_i_98 changed.
 [S11] Writing ref penalty: ref_i_97=59532.29, ref_k_97=-947.70
 S10: Reference listener triggered by ref_i_97, recalculating all.
 [S10 DEBUG] calculateAll() triggered in target mode - running both engines
 [S10 DEBUG] Dual-engine calculations complete in target mode
 S10: Reference utilization factor dependency ref_i_97 changed.
 [S11] 🎯 TGT CLIMATE READ: h_22=-1680
 [S11] 🎯 TGT CLIMATE READ: h_22=-1680
 [S11 Area Sync] Sync completed successfully
 [S11] calculateAll TRIGGERED. isReferenceMode: false
 [S11] 🔵 REF CLIMATE READ: h_22=-1680
 [S11] 🔵 REF CLIMATE READ: h_22=-1680
 [S11] REF TB%=50% → ref_i_97=59532.29, ref_k_97=-947.70
 [S11] Writing ref penalty: ref_i_97=59532.29, ref_k_97=-947.70
 [S11] 🎯 TGT CLIMATE READ: h_22=-1680
 [S11] 🎯 TGT CLIMATE READ: h_22=-1680
 S12: Switched to REFERENCE mode
 [Section12] Calculated display values updated for reference mode
 [CLOCK] 🎯 User interaction started - timing to h_10 settlement
 [FieldManager] Routed g_118=Volume by Schedule through sect13 ModeManager
 [CLOCK] 🎯 User interaction started - timing to h_10 settlement
 [Cooling] 🚀 Starting cooling calculations (mode=reference)...
 [Cooling] Free cooling calc: massFlow=9.599 kg/s, ΔT=3.6°C → 826.52 kWh/day → 99181.95 kWh/yr
 [Cooling A33 PHYSICS] d_120=3333.333333333333, l_119=None, A28=3333.333333333333, A29=3.333333333333333, A30=4.013333333333333, A16=3.5700000000000003, A31=14399.238, A32=1244094163.2, A33=345.58171200000004
 [Cooling m_124 COOLING-TARGET] m_129_annual=0, E37_daily=0, E45(d_21)=196, E50=0, E51=67734.01555200001, E52=-67734.01555200001, E54(m_19)=120, E55(result)=-23.518755400000003
 [Cooling] 📊 Publishing results with prefix="ref_" (mode=reference)
 S10: Reference listener triggered by ref_m_121, recalculating all.
 [S10 DEBUG] calculateAll() triggered in target mode - running both engines
 [S10 DEBUG] Dual-engine calculations complete in target mode
 S10: Reference utilization factor dependency ref_m_121 changed.
 🔄 [S05] updateCalculatedDisplayValues: mode=target
 🔄 [S05] updateCalculatedDisplayValues: mode=target
 [S14 LISTENER] 🔥 ref_d_122 changed - triggering calculateAll() + UI update
 [S14 LISTENER] 🔥 ref_d_122 changed - triggering calculateAll() + UI update
 [Cooling] 🚀 Starting cooling calculations (mode=target)...
 [Cooling] Free cooling calc: massFlow=4.013 kg/s, ΔT=3.6°C → 345.58 kWh/day → 41469.81 kWh/yr
 [Cooling A33 PHYSICS] d_120=3333.333333333333, l_119=None, A28=3333.333333333333, A29=3.333333333333333, A30=4.013333333333333, A16=3.5700000000000003, A31=14399.238, A32=1244094163.2, A33=345.58171200000004
 [Cooling m_124 COOLING-TARGET] m_129_annual=10679.952597699661, E37_daily=54.48955406989623, E45(d_21)=196, E50=10679.952597699661, E51=67734.01555200001, E52=-57054.06295430035, E54(m_19)=120, E55(result)=-19.810438525798734
 [Cooling] 📊 Publishing results with prefix="" (mode=target)
 S10: Reference listener triggered by ref_m_121, recalculating all.
 [S10 DEBUG] calculateAll() triggered in target mode - running both engines
 [S10 DEBUG] Dual-engine calculations complete in target mode
 S10: Reference utilization factor dependency ref_m_121 changed.
 [S14 LISTENER] 🔥 ref_d_122 changed - triggering calculateAll() + UI update
 [S14 LISTENER] 🔥 ref_d_122 changed - triggering calculateAll() + UI update
 🔍 [S01DB] updateTEUIDisplay START: e_10=341.2, h_10=93.72003071129046, useType=Utility Bills
 🔍 [S01] T.1 Calculation: e_6=27.6 (ref), h_6=11.7 (target) → reduction should be 58%
 🔍 [S01DB] UPDATING h_10: 93.7 (from j_32=133757.22783115375, area=1427.2)
 🔍 [S01] h_6 explanation: target=11.7, ref=27.6, reduction=0.5760869565217392, percent=58%
 🕐 [CLOCK] ⚡ CALCULATION COMPLETE: 98ms (subsequent update)
 🕐 [CLOCK] ⚡ USER INTERACTION COMPLETE: 98ms (interaction → h_10 settlement)
 ✅ [S01] CALCULATION CHAIN COMPLETE - All values finalized including h_10
 [CLOCK] Starting current calculation timing
 [CLOCK] 🎯 User interaction started - timing to h_10 settlement
 [CLOCK] 🎯 User interaction started - timing to h_10 settlement
 [CLOCK] 🎯 User interaction started - timing to h_10 settlement
 [CLOCK] 🎯 User interaction started - timing to h_10 settlement
 [CLOCK] 🎯 User interaction started - timing to h_10 settlement
 [CLOCK] 🎯 User interaction started - timing to h_10 settlement
 [S11] calculateAll TRIGGERED. isReferenceMode: false
 [S11] 🔵 REF CLIMATE READ: h_22=-1680
 [S11] 🔵 REF CLIMATE READ: h_22=-1680
 [S11] REF TB%=50% → ref_i_97=59532.29, ref_k_97=-947.70
 [S11] Writing ref penalty: ref_i_97=59532.29, ref_k_97=-947.70
 [S11] 🎯 TGT CLIMATE READ: h_22=-1680
 [S11] 🎯 TGT CLIMATE READ: h_22=-1680
 [CLOCK] 🎯 User interaction started - timing to h_10 settlement
 [S11] calculateAll TRIGGERED. isReferenceMode: false
 [S11] 🔵 REF CLIMATE READ: h_22=-1680
 [S11] 🔵 REF CLIMATE READ: h_22=-1680
 [S11] REF TB%=50% → ref_i_97=59532.29, ref_k_97=-947.70
 [S11] Writing ref penalty: ref_i_97=59532.29, ref_k_97=-947.70
 [S11] 🎯 TGT CLIMATE READ: h_22=-1680
 [S11] 🎯 TGT CLIMATE READ: h_22=-1680
 [CLOCK] 🎯 User interaction started - timing to h_10 settlement
 [CLOCK] 🎯 User interaction started - timing to h_10 settlement
 [S11] calculateAll TRIGGERED. isReferenceMode: false
 [S11] 🔵 REF CLIMATE READ: h_22=-1680
 [S11] 🔵 REF CLIMATE READ: h_22=-1680
 [S11] REF TB%=50% → ref_i_97=59532.29, ref_k_97=-947.70
 [S11] Writing ref penalty: ref_i_97=59532.29, ref_k_97=-947.70
 [S11] 🎯 TGT CLIMATE READ: h_22=-1680
 [S11] 🎯 TGT CLIMATE READ: h_22=-1680
 [S11] calculateAll TRIGGERED. isReferenceMode: false
 [S11] 🔵 REF CLIMATE READ: h_22=-1680
 [S11] 🔵 REF CLIMATE READ: h_22=-1680
 [S11] REF TB%=50% → ref_i_97=59532.29, ref_k_97=-947.70
 [S11] Writing ref penalty: ref_i_97=59532.29, ref_k_97=-947.70
 [S11] 🎯 TGT CLIMATE READ: h_22=-1680
 [S11] 🎯 TGT CLIMATE READ: h_22=-1680
 [S03] Target CALCULATED results stored (setpoints + derived values only - climate data already published)
 [S12] U-agg TGT: TB%=20 → g_101=0.278341, g_102=0.324324
 [S12] 🎯 TGT CLIMATE READ: d_20=4600, d_21=196
 [S12DB] TGT CLIMATE: d_20=4600, d_21=196, d_22=1960, h_22=-1680
 [S12DB] TGT h_101 calc: (4600*0.2783410626476887*24)/1000 = 30.728853316304836
 [S12DB] TGT i_101 result: 30.728853316304836 * 2476.6199999999994 = 76103.69270022686
 [S12DB] TGT g_104 calc: (0.2783410626476887*2476.6199999999994 + 0.3243243243243243*1100.42)/3577.0400009999994 = 0.2924870885578592
 [S12DB] TGT ROW104: i_101=76103.69270022686, i_102=16788.24544864865, i_103=23178.387012790416 → i_104=116070.32516166594
 [S12DB] TGT ROW104: h_21="Capacitance", k_98=-3293.5693790538335 → k_104=-3293.5693790538335
 [Section12] Calculated display values updated for reference mode
 [CLOCK] 🎯 User interaction started - timing to h_10 settlement
 [CLOCK] 🎯 User interaction started - timing to h_10 settlement
 [CLOCK] 🎯 User interaction started - timing to h_10 settlement
 [CLOCK] 🎯 User interaction started - timing to h_10 settlement
 [CLOCK] 🎯 User interaction started - timing to h_10 settlement
 [CLOCK] 🎯 User interaction started - timing to h_10 settlement
 [S11] calculateAll TRIGGERED. isReferenceMode: false
 [S11] 🔵 REF CLIMATE READ: h_22=-1680
 [S11] 🔵 REF CLIMATE READ: h_22=-1680
 [S11] REF TB%=50% → ref_i_97=59532.29, ref_k_97=-947.70
 [S11] Writing ref penalty: ref_i_97=59532.29, ref_k_97=-947.70
 [S11] 🎯 TGT CLIMATE READ: h_22=-1680
 [S11] 🎯 TGT CLIMATE READ: h_22=-1680
 [S11] calculateAll TRIGGERED. isReferenceMode: false
 [S11] 🔵 REF CLIMATE READ: h_22=-1680
 [S11] 🔵 REF CLIMATE READ: h_22=-1680
 [S11] REF TB%=50% → ref_i_97=59532.29, ref_k_97=-947.70
 [S11] Writing ref penalty: ref_i_97=59532.29, ref_k_97=-947.70
 [S11] 🎯 TGT CLIMATE READ: h_22=-1680
 [S11] 🎯 TGT CLIMATE READ: h_22=-1680
 [Cooling] 🚀 Starting cooling calculations (mode=reference)...
 [Cooling] Free cooling calc: massFlow=4.799 kg/s, ΔT=3.6°C → 413.26 kWh/day → 49590.98 kWh/yr
 [Cooling A33 PHYSICS] d_120=3333.333333333333, l_119=None, A28=3333.333333333333, A29=3.333333333333333, A30=4.013333333333333, A16=3.5700000000000003, A31=14399.238, A32=1244094163.2, A33=345.58171200000004
 [Cooling m_124 COOLING-TARGET] m_129_annual=0, E37_daily=0, E45(d_21)=196, E50=0, E51=67734.01555200001, E52=-67734.01555200001, E54(m_19)=120, E55(result)=-23.518755400000003
 [Cooling] 📊 Publishing results with prefix="ref_" (mode=reference)
 S10: Reference listener triggered by ref_m_121, recalculating all.
 [S10 DEBUG] calculateAll() triggered in target mode - running both engines
 [S10 DEBUG] Dual-engine calculations complete in target mode
 S10: Reference utilization factor dependency ref_m_121 changed.
 [S14 LISTENER] 🔥 ref_d_122 changed - triggering calculateAll() + UI update
 [S14 LISTENER] 🔥 ref_d_122 changed - triggering calculateAll() + UI update
 [Cooling] 🚀 Starting cooling calculations (mode=target)...
 [Cooling] Free cooling calc: massFlow=4.013 kg/s, ΔT=3.6°C → 345.58 kWh/day → 41469.81 kWh/yr
 [Cooling A33 PHYSICS] d_120=3333.333333333333, l_119=None, A28=3333.333333333333, A29=3.333333333333333, A30=4.013333333333333, A16=3.5700000000000003, A31=14399.238, A32=1244094163.2, A33=345.58171200000004
 [Cooling m_124 COOLING-TARGET] m_129_annual=10679.952597699661, E37_daily=54.48955406989623, E45(d_21)=196, E50=10679.952597699661, E51=67734.01555200001, E52=-57054.06295430035, E54(m_19)=120, E55(result)=-19.810438525798734
 [Cooling] 📊 Publishing results with prefix="" (mode=target)
 S10: Reference listener triggered by ref_m_121, recalculating all.
 [S10 DEBUG] calculateAll() triggered in target mode - running both engines
 [S10 DEBUG] Dual-engine calculations complete in target mode
 S10: Reference utilization factor dependency ref_m_121 changed.
 [S14 LISTENER] 🔥 ref_d_122 changed - triggering calculateAll() + UI update
 [S14 LISTENER] 🔥 ref_d_122 changed - triggering calculateAll() + UI update
 [CLOCK] 🎯 User interaction started - timing to h_10 settlement
 [S11] calculateAll TRIGGERED. isReferenceMode: false
 [S11] 🔵 REF CLIMATE READ: h_22=-1680
 [S11] 🔵 REF CLIMATE READ: h_22=-1680
 [S11] REF TB%=50% → ref_i_97=59532.29, ref_k_97=-947.70
 [S11] Writing ref penalty: ref_i_97=59532.29, ref_k_97=-947.70
 [S11] 🎯 TGT CLIMATE READ: h_22=-1680
 [S11] 🎯 TGT CLIMATE READ: h_22=-1680
 [S11] calculateAll TRIGGERED. isReferenceMode: false
 [S11] 🔵 REF CLIMATE READ: h_22=-1680
 [S11] 🔵 REF CLIMATE READ: h_22=-1680
 [S11] REF TB%=50% → ref_i_97=59532.29, ref_k_97=-947.70
 [S11] Writing ref penalty: ref_i_97=59532.29, ref_k_97=-947.70
 [S11] 🎯 TGT CLIMATE READ: h_22=-1680
 [S11] 🎯 TGT CLIMATE READ: h_22=-1680
 [Cooling] 🚀 Starting cooling calculations (mode=reference)...
 [Cooling] Free cooling calc: massFlow=4.799 kg/s, ΔT=3.6°C → 413.26 kWh/day → 49590.98 kWh/yr
 [Cooling A33 PHYSICS] d_120=3333.333333333333, l_119=None, A28=3333.333333333333, A29=3.333333333333333, A30=4.013333333333333, A16=3.5700000000000003, A31=14399.238, A32=1244094163.2, A33=345.58171200000004
 [Cooling m_124 COOLING-TARGET] m_129_annual=21538.35211529543, E37_daily=109.88955160865015, E45(d_21)=196, E50=21538.35211529543, E51=67734.01555200001, E52=-46195.66343670458, E54(m_19)=120, E55(result)=-16.040160915522424
 [Cooling] 📊 Publishing results with prefix="ref_" (mode=reference)
 S10: Reference listener triggered by ref_m_121, recalculating all.
 [S10 DEBUG] calculateAll() triggered in target mode - running both engines
 [S10 DEBUG] Dual-engine calculations complete in target mode
 S10: Reference utilization factor dependency ref_m_121 changed.
 [S14 LISTENER] 🔥 ref_d_122 changed - triggering calculateAll() + UI update
 [S14 LISTENER] 🔥 ref_d_122 changed - triggering calculateAll() + UI update
 [Cooling] 🚀 Starting cooling calculations (mode=target)...
 [Cooling] Free cooling calc: massFlow=4.013 kg/s, ΔT=3.6°C → 345.58 kWh/day → 41469.81 kWh/yr
 [Cooling A33 PHYSICS] d_120=3333.333333333333, l_119=None, A28=3333.333333333333, A29=3.333333333333333, A30=4.013333333333333, A16=3.5700000000000003, A31=14399.238, A32=1244094163.2, A33=345.58171200000004
 [Cooling m_124 COOLING-TARGET] m_129_annual=10679.952597699661, E37_daily=54.48955406989623, E45(d_21)=196, E50=10679.952597699661, E51=67734.01555200001, E52=-57054.06295430035, E54(m_19)=120, E55(result)=-19.810438525798734
 [Cooling] 📊 Publishing results with prefix="" (mode=target)
 S10: Reference listener triggered by ref_m_121, recalculating all.
 [S10 DEBUG] calculateAll() triggered in target mode - running both engines
 [S10 DEBUG] Dual-engine calculations complete in target mode
 S10: Reference utilization factor dependency ref_m_121 changed.
 [S14 LISTENER] 🔥 ref_d_122 changed - triggering calculateAll() + UI update
 [S14 LISTENER] 🔥 ref_d_122 changed - triggering calculateAll() + UI update
 [CLOCK] 🎯 User interaction started - timing to h_10 settlement
 [CLOCK] 🎯 User interaction started - timing to h_10 settlement
 [S11] calculateAll TRIGGERED. isReferenceMode: false
 [S11] 🔵 REF CLIMATE READ: h_22=-1680
 [S11] 🔵 REF CLIMATE READ: h_22=-1680
 [S11] REF TB%=50% → ref_i_97=59532.29, ref_k_97=-947.70
 [S11] Writing ref penalty: ref_i_97=59532.29, ref_k_97=-947.70
 [S11] 🎯 TGT CLIMATE READ: h_22=-1680
 [S11] 🎯 TGT CLIMATE READ: h_22=-1680
 [S11] calculateAll TRIGGERED. isReferenceMode: false
 [S11] 🔵 REF CLIMATE READ: h_22=-1680
 [S11] 🔵 REF CLIMATE READ: h_22=-1680
 [S11] REF TB%=50% → ref_i_97=59532.29, ref_k_97=-947.70
 [S11] Writing ref penalty: ref_i_97=59532.29, ref_k_97=-947.70
 [S11] 🎯 TGT CLIMATE READ: h_22=-1680
 [S11] 🎯 TGT CLIMATE READ: h_22=-1680
 [Cooling] 🚀 Starting cooling calculations (mode=reference)...
 [Cooling] Free cooling calc: massFlow=4.799 kg/s, ΔT=3.6°C → 413.26 kWh/day → 49590.98 kWh/yr
 [Cooling A33 PHYSICS] d_120=3333.333333333333, l_119=None, A28=3333.333333333333, A29=3.333333333333333, A30=4.013333333333333, A16=3.5700000000000003, A31=14399.238, A32=1244094163.2, A33=345.58171200000004
 [Cooling m_124 COOLING-TARGET] m_129_annual=21538.35211529543, E37_daily=109.88955160865015, E45(d_21)=196, E50=21538.35211529543, E51=67734.01555200001, E52=-46195.66343670458, E54(m_19)=120, E55(result)=-16.040160915522424
 [Cooling] 📊 Publishing results with prefix="ref_" (mode=reference)
 S10: Reference listener triggered by ref_m_121, recalculating all.
 [S10 DEBUG] calculateAll() triggered in target mode - running both engines
 [S10 DEBUG] Dual-engine calculations complete in target mode
 S10: Reference utilization factor dependency ref_m_121 changed.
 [S14 LISTENER] 🔥 ref_d_122 changed - triggering calculateAll() + UI update
 [S14 LISTENER] 🔥 ref_d_122 changed - triggering calculateAll() + UI update
 [Cooling] 🚀 Starting cooling calculations (mode=target)...
 [Cooling] Free cooling calc: massFlow=4.013 kg/s, ΔT=3.6°C → 345.58 kWh/day → 41469.81 kWh/yr
 [Cooling A33 PHYSICS] d_120=3333.333333333333, l_119=None, A28=3333.333333333333, A29=3.333333333333333, A30=4.013333333333333, A16=3.5700000000000003, A31=14399.238, A32=1244094163.2, A33=345.58171200000004
 [Cooling m_124 COOLING-TARGET] m_129_annual=10679.952597699661, E37_daily=54.48955406989623, E45(d_21)=196, E50=10679.952597699661, E51=67734.01555200001, E52=-57054.06295430035, E54(m_19)=120, E55(result)=-19.810438525798734
 [Cooling] 📊 Publishing results with prefix="" (mode=target)
 S10: Reference listener triggered by ref_m_121, recalculating all.
 [S10 DEBUG] calculateAll() triggered in target mode - running both engines
 [S10 DEBUG] Dual-engine calculations complete in target mode
 S10: Reference utilization factor dependency ref_m_121 changed.
 [S14 LISTENER] 🔥 ref_d_122 changed - triggering calculateAll() + UI update
 [S14 LISTENER] 🔥 ref_d_122 changed - triggering calculateAll() + UI update
 [S11] calculateAll TRIGGERED. isReferenceMode: false
 [S11] 🔵 REF CLIMATE READ: h_22=-1680
 [S11] 🔵 REF CLIMATE READ: h_22=-1680
 [S11] REF TB%=50% → ref_i_97=59532.29, ref_k_97=-947.70
 [S11] Writing ref penalty: ref_i_97=59532.29, ref_k_97=-947.70
 [S11] 🎯 TGT CLIMATE READ: h_22=-1680
 [S11] 🎯 TGT CLIMATE READ: h_22=-1680
 [S11] calculateAll TRIGGERED. isReferenceMode: false
 [S11] 🔵 REF CLIMATE READ: h_22=-1680
 [S11] 🔵 REF CLIMATE READ: h_22=-1680
 [S11] REF TB%=50% → ref_i_97=59532.29, ref_k_97=-947.70
 [S11] Writing ref penalty: ref_i_97=59532.29, ref_k_97=-947.70
 [S11] 🎯 TGT CLIMATE READ: h_22=-1680
 [S11] 🎯 TGT CLIMATE READ: h_22=-1680
 [Cooling] 🚀 Starting cooling calculations (mode=reference)...
 [Cooling] Free cooling calc: massFlow=4.799 kg/s, ΔT=3.6°C → 413.26 kWh/day → 49590.98 kWh/yr
 [Cooling A33 PHYSICS] d_120=3333.333333333333, l_119=None, A28=3333.333333333333, A29=3.333333333333333, A30=4.013333333333333, A16=3.5700000000000003, A31=14399.238, A32=1244094163.2, A33=345.58171200000004
 [Cooling m_124 COOLING-TARGET] m_129_annual=21538.35211529543, E37_daily=109.88955160865015, E45(d_21)=196, E50=21538.35211529543, E51=67734.01555200001, E52=-46195.66343670458, E54(m_19)=120, E55(result)=-16.040160915522424
 [Cooling] 📊 Publishing results with prefix="ref_" (mode=reference)
 S10: Reference listener triggered by ref_m_121, recalculating all.
 [S10 DEBUG] calculateAll() triggered in target mode - running both engines
 [S10 DEBUG] Dual-engine calculations complete in target mode
 S10: Reference utilization factor dependency ref_m_121 changed.
 [S14 LISTENER] 🔥 ref_d_122 changed - triggering calculateAll() + UI update
 [S14 LISTENER] 🔥 ref_d_122 changed - triggering calculateAll() + UI update
 [Cooling] 🚀 Starting cooling calculations (mode=target)...
 [Cooling] Free cooling calc: massFlow=4.013 kg/s, ΔT=3.6°C → 345.58 kWh/day → 41469.81 kWh/yr
 [Cooling A33 PHYSICS] d_120=3333.333333333333, l_119=None, A28=3333.333333333333, A29=3.333333333333333, A30=4.013333333333333, A16=3.5700000000000003, A31=14399.238, A32=1244094163.2, A33=345.58171200000004
 [Cooling m_124 COOLING-TARGET] m_129_annual=10679.952597699661, E37_daily=54.48955406989623, E45(d_21)=196, E50=10679.952597699661, E51=67734.01555200001, E52=-57054.06295430035, E54(m_19)=120, E55(result)=-19.810438525798734
 [Cooling] 📊 Publishing results with prefix="" (mode=target)
 S10: Reference listener triggered by ref_m_121, recalculating all.
 [S10 DEBUG] calculateAll() triggered in target mode - running both engines
 [S10 DEBUG] Dual-engine calculations complete in target mode
 S10: Reference utilization factor dependency ref_m_121 changed.
 [S14 LISTENER] 🔥 ref_d_122 changed - triggering calculateAll() + UI update
 [S14 LISTENER] 🔥 ref_d_122 changed - triggering calculateAll() + UI update
 [S03] Reference CALCULATED results stored (climate data + setpoints - INPUT fields excluded)
 [S12] U-agg REF: TB%=50 → g_101=0.572061, g_102=0.428571
 [S12] 🔵 REF CLIMATE READ: d_20=4600, d_21=196
 [S12DB] REF CLIMATE: d_20=4600, d_21=196, d_22=1960, h_22=-1680
 [S12DB] REF h_101 calc: (4600*0.5720614690100458*24)/1000 = 63.15558617870907
 [S12DB] REF i_101 result: 63.15558617870907 * 2476.6199999999994 = 156412.38784191443
 [S12DB] REF g_104 calc: (0.5720614690100458*2476.6199999999994 + 0.42857142857142855*1100.42)/3577.0400009999994 = 0.5279190185964686
 [S12DB] REF ROW104: i_101=156412.38784191443, i_102=22184.467200000003, i_103=36440.079840319355 → i_104=215036.9348822338
 [S12DB] REF ROW104: h_21="Capacitance", k_98=-1895.4006468093894 → k_104=-1895.4006468093894
 [Section12] Reference results stored with ref_ prefix for downstream sections
 [S12] U-agg TGT: TB%=20 → g_101=0.278341, g_102=0.324324
 [S12] 🎯 TGT CLIMATE READ: d_20=4600, d_21=196
 [S12DB] TGT CLIMATE: d_20=4600, d_21=196, d_22=1960, h_22=-1680
 [S12DB] TGT h_101 calc: (4600*0.2783410626476887*24)/1000 = 30.728853316304836
 [S12DB] TGT i_101 result: 30.728853316304836 * 2476.6199999999994 = 76103.69270022686
 [S12DB] TGT g_104 calc: (0.2783410626476887*2476.6199999999994 + 0.3243243243243243*1100.42)/3577.0400009999994 = 0.2924870885578592
 [S12DB] TGT ROW104: i_101=76103.69270022686, i_102=16788.24544864865, i_103=23178.387012790416 → i_104=116070.32516166594
 [S12DB] TGT ROW104: h_21="Capacitance", k_98=-3293.5693790538335 → k_104=-3293.5693790538335
 [Section12] Calculated display values updated for reference mode
 [S10 DEBUG] calculateAll() triggered in target mode - running both engines
 [S10 DEBUG] Dual-engine calculations complete in target mode
 [S11] calculateAll TRIGGERED. isReferenceMode: false
 [S11] 🔵 REF CLIMATE READ: h_22=-1680
 [S11] 🔵 REF CLIMATE READ: h_22=-1680
 [S11] REF TB%=50% → ref_i_97=59532.29, ref_k_97=-947.70
 [S11] Writing ref penalty: ref_i_97=59532.29, ref_k_97=-947.70
 [S11] 🎯 TGT CLIMATE READ: h_22=-1680
 [S11] 🎯 TGT CLIMATE READ: h_22=-1680
 [S07] calculateEmissionsAndLosses: systemType="Heatpump" (TGT)
 [S07] ⚡ Non-fossil fuel: Heatpump → e_51=0, k_54=0 (both cleared)
 [S07] calculateEmissionsAndLosses: systemType="Electric" (REF)
 [S07] ⚡ Non-fossil fuel: Electric → e_51=0, k_54=0 (both cleared)
 [Cooling] 🚀 Starting cooling calculations (mode=reference)...
 [Cooling] Free cooling calc: massFlow=4.799 kg/s, ΔT=3.6°C → 413.26 kWh/day → 49590.98 kWh/yr
 [Cooling A33 PHYSICS] d_120=3333.333333333333, l_119=None, A28=3333.333333333333, A29=3.333333333333333, A30=4.013333333333333, A16=3.5700000000000003, A31=14399.238, A32=1244094163.2, A33=345.58171200000004
 [Cooling m_124 COOLING-TARGET] m_129_annual=21538.35211529543, E37_daily=109.88955160865015, E45(d_21)=196, E50=21538.35211529543, E51=67734.01555200001, E52=-46195.66343670458, E54(m_19)=120, E55(result)=-16.040160915522424
 [Cooling] 📊 Publishing results with prefix="ref_" (mode=reference)
 S10: Reference listener triggered by ref_m_121, recalculating all.
 [S10 DEBUG] calculateAll() triggered in target mode - running both engines
 [S10 DEBUG] Dual-engine calculations complete in target mode
 S10: Reference utilization factor dependency ref_m_121 changed.
 [S14 LISTENER] 🔥 ref_d_122 changed - triggering calculateAll() + UI update
 [S14 LISTENER] 🔥 ref_d_122 changed - triggering calculateAll() + UI update
 [Cooling] 🚀 Starting cooling calculations (mode=target)...
 [Cooling] Free cooling calc: massFlow=4.013 kg/s, ΔT=3.6°C → 345.58 kWh/day → 41469.81 kWh/yr
 [Cooling A33 PHYSICS] d_120=3333.333333333333, l_119=None, A28=3333.333333333333, A29=3.333333333333333, A30=4.013333333333333, A16=3.5700000000000003, A31=14399.238, A32=1244094163.2, A33=345.58171200000004
 [Cooling m_124 COOLING-TARGET] m_129_annual=10679.952597699661, E37_daily=54.48955406989623, E45(d_21)=196, E50=10679.952597699661, E51=67734.01555200001, E52=-57054.06295430035, E54(m_19)=120, E55(result)=-19.810438525798734
 [Cooling] 📊 Publishing results with prefix="" (mode=target)
 S10: Reference listener triggered by ref_m_121, recalculating all.
 [S10 DEBUG] calculateAll() triggered in target mode - running both engines
 [S10 DEBUG] Dual-engine calculations complete in target mode
 S10: Reference utilization factor dependency ref_m_121 changed.
 [S14 LISTENER] 🔥 ref_d_122 changed - triggering calculateAll() + UI update
 [S14 LISTENER] 🔥 ref_d_122 changed - triggering calculateAll() + UI update
 🟢 [S06-TAR] Storing d_43 = 0 (from d_44=0, d_45=0, d_46=0)
 🔵 [S06-REF] Storing ref_d_43 = 0 (from d_44=0, d_45=0, d_46=0)
 [DependencyGraph] Data loaded: 349 nodes, 588 links
 [DependencyGraph] Calculating node sizes...
 [Cooling] 🚀 Starting cooling calculations (mode=reference)...
 [Cooling] Free cooling calc: massFlow=4.799 kg/s, ΔT=3.6°C → 413.26 kWh/day → 49590.98 kWh/yr
 [Cooling A33 PHYSICS] d_120=3333.333333333333, l_119=None, A28=3333.333333333333, A29=3.333333333333333, A30=4.013333333333333, A16=3.5700000000000003, A31=14399.238, A32=1244094163.2, A33=345.58171200000004
 [Cooling m_124 COOLING-TARGET] m_129_annual=21538.35211529543, E37_daily=109.88955160865015, E45(d_21)=196, E50=21538.35211529543, E51=67734.01555200001, E52=-46195.66343670458, E54(m_19)=120, E55(result)=-16.040160915522424
 [Cooling] 📊 Publishing results with prefix="ref_" (mode=reference)
 S10: Reference listener triggered by ref_m_121, recalculating all.
 [S10 DEBUG] calculateAll() triggered in target mode - running both engines
 [S10 DEBUG] Dual-engine calculations complete in target mode
 S10: Reference utilization factor dependency ref_m_121 changed.
 [S14 LISTENER] 🔥 ref_d_122 changed - triggering calculateAll() + UI update
 [S14 LISTENER] 🔥 ref_d_122 changed - triggering calculateAll() + UI update
 [Cooling] 🚀 Starting cooling calculations (mode=target)...
 [Cooling] Free cooling calc: massFlow=4.013 kg/s, ΔT=3.6°C → 345.58 kWh/day → 41469.81 kWh/yr
 [Cooling A33 PHYSICS] d_120=3333.333333333333, l_119=None, A28=3333.333333333333, A29=3.333333333333333, A30=4.013333333333333, A16=3.5700000000000003, A31=14399.238, A32=1244094163.2, A33=345.58171200000004
 [Cooling m_124 COOLING-TARGET] m_129_annual=10679.952597699661, E37_daily=54.48955406989623, E45(d_21)=196, E50=10679.952597699661, E51=67734.01555200001, E52=-57054.06295430035, E54(m_19)=120, E55(result)=-19.810438525798734
 [Cooling] 📊 Publishing results with prefix="" (mode=target)
 S10: Reference listener triggered by ref_m_121, recalculating all.
 [S10 DEBUG] calculateAll() triggered in target mode - running both engines
 [S10 DEBUG] Dual-engine calculations complete in target mode
 S10: Reference utilization factor dependency ref_m_121 changed.
 [S14 LISTENER] 🔥 ref_d_122 changed - triggering calculateAll() + UI update
 [S14 LISTENER] 🔥 ref_d_122 changed - triggering calculateAll() + UI update
 [CLOCK] 🎯 User interaction started - timing to h_10 settlement
 [FieldManager] Routed d_116=Cooling through sect13 ModeManager
 [Cooling] 🚀 Starting cooling calculations (mode=reference)...
 [Cooling] Free cooling calc: massFlow=4.799 kg/s, ΔT=3.6°C → 413.26 kWh/day → 49590.98 kWh/yr
 [Cooling A33 PHYSICS] d_120=3333.333333333333, l_119=None, A28=3333.333333333333, A29=3.333333333333333, A30=4.013333333333333, A16=3.5700000000000003, A31=14399.238, A32=1244094163.2, A33=345.58171200000004
 [Cooling m_124 COOLING-TARGET] m_129_annual=21538.35211529543, E37_daily=109.88955160865015, E45(d_21)=196, E50=21538.35211529543, E51=67734.01555200001, E52=-46195.66343670458, E54(m_19)=120, E55(result)=-16.040160915522424
 [Cooling] 📊 Publishing results with prefix="ref_" (mode=reference)
 🔄 [S05] updateCalculatedDisplayValues: mode=target
 🔄 [S05] updateCalculatedDisplayValues: mode=target
 🔄 [S05] updateCalculatedDisplayValues: mode=target
 🔄 [S05] updateCalculatedDisplayValues: mode=target
 S10: Reference listener triggered by ref_m_121, recalculating all.
 [S10 DEBUG] calculateAll() triggered in target mode - running both engines
 [S10 DEBUG] Dual-engine calculations complete in target mode
 S10: Reference utilization factor dependency ref_m_121 changed.
 [S14 LISTENER] 🔥 ref_d_122 changed - triggering calculateAll() + UI update
 [S14 LISTENER] 🔥 ref_d_122 changed - triggering calculateAll() + UI update
 [Cooling] 🚀 Starting cooling calculations (mode=target)...
 [Cooling] Free cooling calc: massFlow=4.013 kg/s, ΔT=3.6°C → 345.58 kWh/day → 41469.81 kWh/yr
 [Cooling A33 PHYSICS] d_120=3333.333333333333, l_119=None, A28=3333.333333333333, A29=3.333333333333333, A30=4.013333333333333, A16=3.5700000000000003, A31=14399.238, A32=1244094163.2, A33=345.58171200000004
 [Cooling m_124 COOLING-TARGET] m_129_annual=10679.952597699661, E37_daily=54.48955406989623, E45(d_21)=196, E50=10679.952597699661, E51=67734.01555200001, E52=-57054.06295430035, E54(m_19)=120, E55(result)=-19.810438525798734
 [Cooling] 📊 Publishing results with prefix="" (mode=target)
 S10: Reference listener triggered by ref_m_121, recalculating all.
 [S10 DEBUG] calculateAll() triggered in target mode - running both engines
 [S10 DEBUG] Dual-engine calculations complete in target mode
 S10: Reference utilization factor dependency ref_m_121 changed.
 [S14 LISTENER] 🔥 ref_d_122 changed - triggering calculateAll() + UI update
 [S14 LISTENER] 🔥 ref_d_122 changed - triggering calculateAll() + UI update
 [CLOCK] 🎯 User interaction started - timing to h_10 settlement
 [Cooling] 🚀 Starting cooling calculations (mode=reference)...
 [Cooling] Free cooling calc: massFlow=4.799 kg/s, ΔT=3.6°C → 413.26 kWh/day → 49590.98 kWh/yr
 [Cooling A33 PHYSICS] d_120=3333.333333333333, l_119=None, A28=3333.333333333333, A29=3.333333333333333, A30=4.013333333333333, A16=3.5700000000000003, A31=14399.238, A32=1244094163.2, A33=345.58171200000004
 [Cooling m_124 COOLING-TARGET] m_129_annual=17774.279791843022, E37_daily=90.68510097879093, E45(d_21)=196, E50=17774.279791843022, E51=67734.01555200001, E52=-49959.73576015699, E54(m_19)=120, E55(result)=-17.34713047227673
 [Cooling] 📊 Publishing results with prefix="ref_" (mode=reference)
 S10: Reference listener triggered by ref_m_121, recalculating all.
 [S10 DEBUG] calculateAll() triggered in target mode - running both engines
 [S10 DEBUG] Dual-engine calculations complete in target mode
 S10: Reference utilization factor dependency ref_m_121 changed.
 [S14 LISTENER] 🔥 ref_d_122 changed - triggering calculateAll() + UI update
 [S14 LISTENER] 🔥 ref_d_122 changed - triggering calculateAll() + UI update
 [Cooling] 🚀 Starting cooling calculations (mode=target)...
4012-Cooling.js:293 [Cooling] Free cooling calc: massFlow=4.013 kg/s, ΔT=3.6°C → 345.58 kWh/day → 41469.81 kWh/yr
4012-Cooling.js:408 [Cooling A33 PHYSICS] d_120=3333.333333333333, l_119=None, A28=3333.333333333333, A29=3.333333333333333, A30=4.013333333333333, A16=3.5700000000000003, A31=14399.238, A32=1244094163.2, A33=345.58171200000004
4012-Cooling.js:362 [Cooling m_124 COOLING-TARGET] m_129_annual=10679.952597699661, E37_daily=54.48955406989623, E45(d_21)=196, E50=10679.952597699661, E51=67734.01555200001, E52=-57054.06295430035, E54(m_19)=120, E55(result)=-19.810438525798734
4012-Cooling.js:535 [Cooling] 📊 Publishing results with prefix="" (mode=target)
4012-Section10.js:2812 S10: Reference listener triggered by ref_m_121, recalculating all.
4012-Section10.js:1902 [S10 DEBUG] calculateAll() triggered in target mode - running both engines
4012-Section10.js:1910 [S10 DEBUG] Dual-engine calculations complete in target mode
4012-Section10.js:2833 S10: Reference utilization factor dependency ref_m_121 changed.
4012-Section14.js:1428 [S14 LISTENER] 🔥 ref_d_122 changed - triggering calculateAll() + UI update
4012-Section14.js:1428 [S14 LISTENER] 🔥 ref_d_122 changed - triggering calculateAll() + UI update
4012-Section01.js:755 🔍 [S01DB] updateTEUIDisplay START: e_10=341.2, h_10=93.72003071129046, useType=Utility Bills
4012-Section01.js:825 🔍 [S01] T.1 Calculation: e_6=27.8 (ref), h_6=11.7 (target) → reduction should be 58%
4012-Section01.js:917 🔍 [S01DB] UPDATING h_10: 93.7 (from j_32=133757.22783115375, area=1427.2)
4012-Section01.js:511 🔍 [S01] h_6 explanation: target=11.7, ref=27.8, reduction=0.5791366906474821, percent=58%
4011-Clock.js:65 🕐 [CLOCK] ⚡ CALCULATION COMPLETE: 78ms (subsequent update)
4011-Clock.js:161 🕐 [CLOCK] ⚡ USER INTERACTION COMPLETE: 78ms (interaction → h_10 settlement)
4012-Section01.js:1221 ✅ [S01] CALCULATION CHAIN COMPLETE - All values finalized including h_10
4011-Clock.js:146 [CLOCK] 🎯 User interaction started - timing to h_10 settlement
4011-FieldManager.js:208 [FieldManager] Routed i_21=55 through sect03 ModeManager
4011-Clock.js:146 [CLOCK] 🎯 User interaction started - timing to h_10 settlement
4011-FieldManager.js:208 [FieldManager] Routed i_21=60 through sect03 ModeManager
4011-Clock.js:146 [CLOCK] 🎯 User interaction started - timing to h_10 settlement
4011-FieldManager.js:208 [FieldManager] Routed i_21=65 through sect03 ModeManager
4011-Clock.js:146 [CLOCK] 🎯 User interaction started - timing to h_10 settlement
4011-FieldManager.js:208 [FieldManager] Routed i_21=70 through sect03 ModeManager
4011-Clock.js:146 [CLOCK] 🎯 User interaction started - timing to h_10 settlement
4011-FieldManager.js:208 [FieldManager] Routed i_21=75 through sect03 ModeManager
4011-Clock.js:146 [CLOCK] 🎯 User interaction started - timing to h_10 settlement
4011-FieldManager.js:208 [FieldManager] Routed i_21=80 through sect03 ModeManager
4011-Clock.js:146 [CLOCK] 🎯 User interaction started - timing to h_10 settlement
4011-FieldManager.js:208 [FieldManager] Routed i_21=85 through sect03 ModeManager
4011-Clock.js:146 [CLOCK] 🎯 User interaction started - timing to h_10 settlement
4011-FieldManager.js:208 [FieldManager] Routed i_21=90 through sect03 ModeManager
// Paste into browser console to diagnose Reference mode cooling issues
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

console.log("\n🎯 MODE MANAGER STATUS\n");
console.log(`S03 ModeManager.currentMode: ${s03?.ModeManager?.currentMode}`);
console.log(`S08 ModeManager.currentMode: ${s08?.ModeManager?.currentMode}`);
console.log(`Global reference mode active: ${document.body.classList.contains('reference-mode')}`);

console.log("\n🔬 CAPACITANCE DATA FLOW SNAPSHOT\n");
console.log("ref_h_21 (capacitance toggle):", sm?.getValue("ref_h_21"));
console.log("ref_i_21 (capacitance %):", sm?.getValue("ref_i_21"));
console.log("ref_h_22 (Ground-Facing CDD - S03 output):", sm?.getValue("ref_h_22"));
console.log("ref_k_94 (S11 ground heat gain):", sm?.getValue("ref_k_94"));
console.log("ref_k_95 (S11 ground cooling gain):", sm?.getValue("ref_k_95"));
console.log("\nNOW CHANGE THE CAPACITANCE SLIDER AND RUN AGAIN TO SEE IF THESE VALUES UPDATE");

console.log("\n📊 PART 1: CAPACITANCE (h_21) DATA FLOW\n");
const h_21_target = sm?.getValue("h_21");
const h_21_ref = sm?.getValue("ref_h_21");
const h_21_s03_target = s03?.TargetState?.getValue("h_21");
const h_21_s03_ref = s03?.ReferenceState?.getValue("h_21");
const h_22_target = sm?.getValue("h_22");
const h_22_ref = sm?.getValue("ref_h_22");
const i_21_target = sm?.getValue("i_21");
const i_21_ref = sm?.getValue("ref_i_21");

console.log(`Target h_21:              ${h_21_target} (StateManager)`);
console.log(`Reference h_21:           ${h_21_ref} (StateManager)`);
console.log(`Target h_21:              ${h_21_s03_target} (S03.TargetState)`);
console.log(`Reference h_21:           ${h_21_s03_ref} (S03.ReferenceState)`);
console.log(`Target h_22:              ${h_22_target} CDD`);
console.log(`Reference h_22:           ${h_22_ref} CDD`);
console.log(`Target i_21:              ${i_21_target}%`);
console.log(`Reference i_21:           ${i_21_ref}%`);

const k_94_target = sm?.getValue("k_94");
const k_94_ref = sm?.getValue("ref_k_94");
const k_95_target = sm?.getValue("k_95");
const k_95_ref = sm?.getValue("ref_k_95");

console.log(`Target k_94:              ${k_94_target} kWh (Ground heat gain)`);
console.log(`Reference k_94:           ${k_94_ref} kWh (Ground heat gain)`);
console.log(`Target k_95:              ${k_95_target} kWh (Ground cooling gain)`);
console.log(`Reference k_95:           ${k_95_ref} kWh (Ground cooling gain)`);

console.log("\n📊 PART 2: INDOOR RH% (i_59) DATA FLOW\n");
const i_59_target = sm?.getValue("i_59");
const i_59_ref = sm?.getValue("ref_i_59");
const i_59_s08_target = s08?.TargetState?.getValue("i_59");
const i_59_s08_ref = s08?.ReferenceState?.getValue("i_59");

console.log(`Target i_59:              ${i_59_target}% (StateManager)`);
console.log(`Reference i_59:           ${i_59_ref}% (StateManager)`);
console.log(`Target i_59:              ${i_59_s08_target}% (S08.TargetState)`);
console.log(`Reference i_59:           ${i_59_s08_ref}% (S08.ReferenceState)`);

const latent_target = sm?.getValue("cooling_latentLoadFactor");
const latent_ref = sm?.getValue("ref_cooling_latentLoadFactor");

console.log(`Target latent load:       ${latent_target} (factor)`);
console.log(`Reference latent load:    ${latent_ref} (factor)`);

console.log("\n📊 PART 3: FINAL COOLING OUTPUTS\n");
const d_129_target = sm?.getValue("d_129");
const d_129_ref = sm?.getValue("ref_d_129");
const m_129_target = sm?.getValue("m_129");
const m_129_ref = sm?.getValue("ref_m_129");
const d_117_target = sm?.getValue("d_117");
const d_117_ref = sm?.getValue("ref_d_117");

console.log(`Target d_129:             ${d_129_target} kWh (Unmitigated)`);
console.log(`Reference d_129:          ${d_129_ref} kWh (Unmitigated)`);
console.log(`Target m_129:             ${m_129_target} kWh (Mitigated)`);
console.log(`Reference m_129:          ${m_129_ref} kWh (Mitigated)`);
console.log(`Target d_117:             ${d_117_target} kWh (Cooling load)`);
console.log(`Reference d_117:          ${d_117_ref} kWh (Cooling load)`);

console.log("\n🔍 DIAGNOSTIC SUMMARY\n");
if (h_21_ref === null || h_21_ref === undefined) {
  console.log("❌ ISSUE: ref_h_21 not in StateManager");
}
if (i_21_ref === null || i_21_ref === undefined) {
  console.log("❌ ISSUE: ref_i_21 not in StateManager");
}
if (i_59_ref === null || i_59_ref === undefined) {
  console.log("❌ ISSUE: ref_i_59 not in StateManager");
}
if (latent_ref === latent_target && i_59_ref !== i_59_target) {
  console.log("❌ ISSUE: Different RH% but identical latent load");
}

console.log("\n=== END DIAGNOSTIC ===\n");

 
=== REFERENCE MODE COOLING DIAGNOSTIC ===

 
🎯 MODE MANAGER STATUS

 S03 ModeManager.currentMode: reference
 S08 ModeManager.currentMode: target
 Global reference mode active: false
 
🔬 CAPACITANCE DATA FLOW SNAPSHOT

 ref_h_21 (capacitance toggle): null
 ref_i_21 (capacitance %): 90
 ref_h_22 (Ground-Facing CDD - S03 output): -1680
 ref_k_94 (S11 ground heat gain): 0
 ref_k_95 (S11 ground cooling gain): -6338.419200000001
 
NOW CHANGE THE CAPACITANCE SLIDER AND RUN AGAIN TO SEE IF THESE VALUES UPDATE
VM117:31 
📊 PART 1: CAPACITANCE (h_21) DATA FLOW

VM117:41 Target h_21:              Capacitance (StateManager)
VM117:42 Reference h_21:           null (StateManager)
VM117:43 Target h_21:              Capacitance (S03.TargetState)
VM117:44 Reference h_21:           Capacitance (S03.ReferenceState)
VM117:45 Target h_22:              -1680 CDD
VM117:46 Reference h_22:           -1680 CDD
VM117:47 Target i_21:              50%
VM117:48 Reference i_21:           90%
VM117:55 Target k_94:              0 kWh (Ground heat gain)
VM117:56 Reference k_94:           0 kWh (Ground heat gain)
VM117:57 Target k_95:              -5995.8019459459465 kWh (Ground cooling gain)
VM117:58 Reference k_95:           -6338.419200000001 kWh (Ground cooling gain)
VM117:60 
📊 PART 2: INDOOR RH% (i_59) DATA FLOW

VM117:66 Target i_59:              45% (StateManager)
VM117:67 Reference i_59:           null% (StateManager)
VM117:68 Target i_59:              45% (S08.TargetState)
VM117:69 Reference i_59:           50% (S08.ReferenceState)
VM117:74 Target latent load:       1.746353948454419 (factor)
VM117:75 Reference latent load:    1.746353948454419 (factor)
VM117:77 
📊 PART 3: FINAL COOLING OUTPUTS

VM117:85 Target d_129:             62418.17529756417 kWh (Unmitigated)
VM117:86 Reference d_129:          78452.99253872964 kWh (Unmitigated)
VM117:87 Target m_129:             10679.952597699661 kWh (Mitigated)
VM117:88 Reference m_129:          17774.279791843022 kWh (Mitigated)
VM117:89 Target d_117:             4009.6829074990364 kWh (Cooling load)
VM117:90 Reference d_117:          5386.145391467583 kWh (Cooling load)
VM117:92 
🔍 DIAGNOSTIC SUMMARY

VM117:94 ❌ ISSUE: ref_h_21 not in StateManager
VM117:100 ❌ ISSUE: ref_i_59 not in StateManager
VM117:103 ❌ ISSUE: Different RH% but identical latent load
VM117:106 
=== END DIAGNOSTIC ===

undefined
4011-Clock.js:146 [CLOCK] 🎯 User interaction started - timing to h_10 settlement
4011-FieldManager.js:208 [FieldManager] Routed i_21=80 through sect03 ModeManager
4011-Clock.js:146 [CLOCK] 🎯 User interaction started - timing to h_10 settlement
4011-FieldManager.js:208 [FieldManager] Routed i_21=75 through sect03 ModeManager
4011-Clock.js:146 [CLOCK] 🎯 User interaction started - timing to h_10 settlement
4011-FieldManager.js:208 [FieldManager] Routed i_21=65 through sect03 ModeManager
4011-Clock.js:146 [CLOCK] 🎯 User interaction started - timing to h_10 settlement
4011-FieldManager.js:208 [FieldManager] Routed i_21=60 through sect03 ModeManager
4011-Clock.js:146 [CLOCK] 🎯 User interaction started - timing to h_10 settlement
4011-FieldManager.js:208 [FieldManager] Routed i_21=50 through sect03 ModeManager
4011-Clock.js:146 [CLOCK] 🎯 User interaction started - timing to h_10 settlement
4011-FieldManager.js:208 [FieldManager] Routed i_21=45 through sect03 ModeManager
4011-Clock.js:146 [CLOCK] 🎯 User interaction started - timing to h_10 settlement
4011-FieldManager.js:208 [FieldManager] Routed i_21=35 through sect03 ModeManager
4011-Clock.js:146 [CLOCK] 🎯 User interaction started - timing to h_10 settlement
4011-FieldManager.js:208 [FieldManager] Routed i_21=25 through sect03 ModeManager
4011-Clock.js:146 [CLOCK] 🎯 User interaction started - timing to h_10 settlement
4011-FieldManager.js:208 [FieldManager] Routed i_21=20 through sect03 ModeManager
4011-Clock.js:146 [CLOCK] 🎯 User interaction started - timing to h_10 settlement
4011-FieldManager.js:208 [FieldManager] Routed i_21=5 through sect03 ModeManager
4011-Clock.js:146 [CLOCK] 🎯 User interaction started - timing to h_10 settlement
4011-FieldManager.js:208 [FieldManager] Routed i_21=0 through sect03 ModeManager
// Paste into browser console to diagnose Reference mode cooling issues
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

console.log("\n🎯 MODE MANAGER STATUS\n");
console.log(`S03 ModeManager.currentMode: ${s03?.ModeManager?.currentMode}`);
console.log(`S08 ModeManager.currentMode: ${s08?.ModeManager?.currentMode}`);
console.log(`Global reference mode active: ${document.body.classList.contains('reference-mode')}`);

console.log("\n🔬 CAPACITANCE DATA FLOW SNAPSHOT\n");
console.log("ref_h_21 (capacitance toggle):", sm?.getValue("ref_h_21"));
console.log("ref_i_21 (capacitance %):", sm?.getValue("ref_i_21"));
console.log("ref_h_22 (Ground-Facing CDD - S03 output):", sm?.getValue("ref_h_22"));
console.log("ref_k_94 (S11 ground heat gain):", sm?.getValue("ref_k_94"));
console.log("ref_k_95 (S11 ground cooling gain):", sm?.getValue("ref_k_95"));
console.log("\nNOW CHANGE THE CAPACITANCE SLIDER AND RUN AGAIN TO SEE IF THESE VALUES UPDATE");

console.log("\n📊 PART 1: CAPACITANCE (h_21) DATA FLOW\n");
const h_21_target = sm?.getValue("h_21");
const h_21_ref = sm?.getValue("ref_h_21");
const h_21_s03_target = s03?.TargetState?.getValue("h_21");
const h_21_s03_ref = s03?.ReferenceState?.getValue("h_21");
const h_22_target = sm?.getValue("h_22");
const h_22_ref = sm?.getValue("ref_h_22");
const i_21_target = sm?.getValue("i_21");
const i_21_ref = sm?.getValue("ref_i_21");

console.log(`Target h_21:              ${h_21_target} (StateManager)`);
console.log(`Reference h_21:           ${h_21_ref} (StateManager)`);
console.log(`Target h_21:              ${h_21_s03_target} (S03.TargetState)`);
console.log(`Reference h_21:           ${h_21_s03_ref} (S03.ReferenceState)`);
console.log(`Target h_22:              ${h_22_target} CDD`);
console.log(`Reference h_22:           ${h_22_ref} CDD`);
console.log(`Target i_21:              ${i_21_target}%`);
console.log(`Reference i_21:           ${i_21_ref}%`);

const k_94_target = sm?.getValue("k_94");
const k_94_ref = sm?.getValue("ref_k_94");
const k_95_target = sm?.getValue("k_95");
const k_95_ref = sm?.getValue("ref_k_95");

console.log(`Target k_94:              ${k_94_target} kWh (Ground heat gain)`);
console.log(`Reference k_94:           ${k_94_ref} kWh (Ground heat gain)`);
console.log(`Target k_95:              ${k_95_target} kWh (Ground cooling gain)`);
console.log(`Reference k_95:           ${k_95_ref} kWh (Ground cooling gain)`);

console.log("\n📊 PART 2: INDOOR RH% (i_59) DATA FLOW\n");
const i_59_target = sm?.getValue("i_59");
const i_59_ref = sm?.getValue("ref_i_59");
const i_59_s08_target = s08?.TargetState?.getValue("i_59");
const i_59_s08_ref = s08?.ReferenceState?.getValue("i_59");

console.log(`Target i_59:              ${i_59_target}% (StateManager)`);
console.log(`Reference i_59:           ${i_59_ref}% (StateManager)`);
console.log(`Target i_59:              ${i_59_s08_target}% (S08.TargetState)`);
console.log(`Reference i_59:           ${i_59_s08_ref}% (S08.ReferenceState)`);

const latent_target = sm?.getValue("cooling_latentLoadFactor");
const latent_ref = sm?.getValue("ref_cooling_latentLoadFactor");

console.log(`Target latent load:       ${latent_target} (factor)`);
console.log(`Reference latent load:    ${latent_ref} (factor)`);

console.log("\n📊 PART 3: FINAL COOLING OUTPUTS\n");
const d_129_target = sm?.getValue("d_129");
const d_129_ref = sm?.getValue("ref_d_129");
const m_129_target = sm?.getValue("m_129");
const m_129_ref = sm?.getValue("ref_m_129");
const d_117_target = sm?.getValue("d_117");
const d_117_ref = sm?.getValue("ref_d_117");

console.log(`Target d_129:             ${d_129_target} kWh (Unmitigated)`);
console.log(`Reference d_129:          ${d_129_ref} kWh (Unmitigated)`);
console.log(`Target m_129:             ${m_129_target} kWh (Mitigated)`);
console.log(`Reference m_129:          ${m_129_ref} kWh (Mitigated)`);
console.log(`Target d_117:             ${d_117_target} kWh (Cooling load)`);
console.log(`Reference d_117:          ${d_117_ref} kWh (Cooling load)`);

console.log("\n🔍 DIAGNOSTIC SUMMARY\n");
if (h_21_ref === null || h_21_ref === undefined) {
  console.log("❌ ISSUE: ref_h_21 not in StateManager");
}
if (i_21_ref === null || i_21_ref === undefined) {
  console.log("❌ ISSUE: ref_i_21 not in StateManager");
}
if (i_59_ref === null || i_59_ref === undefined) {
  console.log("❌ ISSUE: ref_i_59 not in StateManager");
}
if (latent_ref === latent_target && i_59_ref !== i_59_target) {
  console.log("❌ ISSUE: Different RH% but identical latent load");
}

console.log("\n=== END DIAGNOSTIC ===\n");

 
=== REFERENCE MODE COOLING DIAGNOSTIC ===

 
🎯 MODE MANAGER STATUS

 S03 ModeManager.currentMode: reference
 S08 ModeManager.currentMode: target
 Global reference mode active: false
 
🔬 CAPACITANCE DATA FLOW SNAPSHOT

 ref_h_21 (capacitance toggle): null
 ref_i_21 (capacitance %): 0
 ref_h_22 (Ground-Facing CDD - S03 output): -1680
 ref_k_94 (S11 ground heat gain): 0
 ref_k_95 (S11 ground cooling gain): -6338.419200000001
 
NOW CHANGE THE CAPACITANCE SLIDER AND RUN AGAIN TO SEE IF THESE VALUES UPDATE
VM123:31 
📊 PART 1: CAPACITANCE (h_21) DATA FLOW

VM123:41 Target h_21:              Capacitance (StateManager)
VM123:42 Reference h_21:           null (StateManager)
VM123:43 Target h_21:              Capacitance (S03.TargetState)
VM123:44 Reference h_21:           Capacitance (S03.ReferenceState)
VM123:45 Target h_22:              -1680 CDD
VM123:46 Reference h_22:           -1680 CDD
VM123:47 Target i_21:              50%
VM123:48 Reference i_21:           0%
VM123:55 Target k_94:              0 kWh (Ground heat gain)
VM123:56 Reference k_94:           0 kWh (Ground heat gain)
VM123:57 Target k_95:              -5995.8019459459465 kWh (Ground cooling gain)
VM123:58 Reference k_95:           -6338.419200000001 kWh (Ground cooling gain)
VM123:60 
📊 PART 2: INDOOR RH% (i_59) DATA FLOW

VM123:66 Target i_59:              45% (StateManager)
VM123:67 Reference i_59:           null% (StateManager)
VM123:68 Target i_59:              45% (S08.TargetState)
VM123:69 Reference i_59:           50% (S08.ReferenceState)
VM123:74 Target latent load:       1.746353948454419 (factor)
VM123:75 Reference latent load:    1.746353948454419 (factor)
VM123:77 
📊 PART 3: FINAL COOLING OUTPUTS

VM123:85 Target d_129:             62418.17529756417 kWh (Unmitigated)
VM123:86 Reference d_129:          78452.99253872964 kWh (Unmitigated)
VM123:87 Target m_129:             10679.952597699661 kWh (Mitigated)
VM123:88 Reference m_129:          17774.279791843022 kWh (Mitigated)
VM123:89 Target d_117:             4009.6829074990364 kWh (Cooling load)
VM123:90 Reference d_117:          5386.145391467583 kWh (Cooling load)
VM123:92 
🔍 DIAGNOSTIC SUMMARY

VM123:94 ❌ ISSUE: ref_h_21 not in StateManager
VM123:100 ❌ ISSUE: ref_i_59 not in StateManager
VM123:103 ❌ ISSUE: Different RH% but identical latent load
VM123:106 
=== END DIAGNOSTIC ===

undefined