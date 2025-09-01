 [Section13] Reference Model calculations complete
 [Section13] ✅ Reference Model complete
 [Section13] 🔄 Starting Target Model calculations...
 [Section13] Running Target Model calculations...
 [S13] TGT HEATING: system=Heatpump, ted=0, afue=1, cop=3.663540445486518
 S10: Target listener triggered by m_121, recalculating all.
 S10: Target utilization factor dependency m_121 changed.
 [Section13] 🧊 COOLING CALC: mode=TGT, coolingSystemType="Cooling", heatingType="Heatpump", isCoolingActive=true, coolingDemand=0
 [Section13] 🧊 COOLING RESULTS: d_117=0, j_116=2.7, l_116=0, l_114=0
 [Section13] 🧊 COOLING CALC: mode=TGT, coolingSystemType="Cooling", heatingType="Heatpump", isCoolingActive=true, coolingDemand=0
 [Section13] 🧊 COOLING RESULTS: d_117=0, j_116=2.7, l_116=0, l_114=0
 [Section13] 🧊 COOLING CALC: mode=TGT, coolingSystemType="Cooling", heatingType="Heatpump", isCoolingActive=true, coolingDemand=0
 [Section13] 🧊 COOLING RESULTS: d_117=0, j_116=2.7, l_116=0, l_114=0
 [S04] f_115 listener fired - S13 oil
 [S04] j_32 update: 0
 [S04] 🔄 Updating calculated display values for target mode
 [S04DB] displayContext mode=target j_32=0 ref_j_32=0 k_32=0 ref_k_32=0
 [S04 DEBUG] Target mode - j_32: 0
 [S04 DEBUG] Target mode - k_32: 0
 [S04 DEBUG] Target mode - l_27: 51
 [S04] Calculated display values updated for target mode
 [S04] S13 space gas volume changed: h_115
 [S04] j_32 update: 0
 [S04] 🔄 Updating calculated display values for target mode
 [S04DB] displayContext mode=target j_32=0 ref_j_32=0 k_32=0 ref_k_32=0
 [S04 DEBUG] Target mode - j_32: 0
 [S04 DEBUG] Target mode - k_32: 0
 [S04 DEBUG] Target mode - l_27: 51
 [S04] Calculated display values updated for target mode
 [Section13] Target Model calculations complete
 [Section13] ✅ Target Model complete
 [Section13] ⏭️ Skipping Reference value re-write - triggered in target mode
 [Section13] 🎉 DUAL-ENGINE CALCULATIONS COMPLETE
 [Section13] 🔄 Updating calculated display values for target mode
 [Section13] Calculated display values updated for target mode
 [S13] Set up dropdown event handlers for 4 dropdowns
 [Section13] 🔄 Updating calculated display values for target mode
 [Section13] Calculated display values updated for target mode
 S13: Pattern A initialization complete.
 S14: Section rendered - initializing Pattern A Dual-State Module.
 S14: Reference defaults loaded from standard: OBC SB10 5.5-6 Z6
 [S14 DEBUG] ✅ Converted to numbers - ref_d_127 calculation: 12677.97883758859 + 63389.89418794294 + 23178.39 + 84603.11539679999 - 120694.93352
 [S14 DEBUG] ✅ ref_d_127 = 63154.444902331525 (should be numeric, not NaN)
 [S14 DEBUG] ✅ Stored ref_d_127 = 63154.444902331525 in StateManager
 [S14 DEBUG] 🔄 Continuing with other Reference calculations...
 [S14 DEBUG] ref_d_128 calculation: 12677.97883758859 + 63389.89418794294 + 23178.39 - 120694.93352 = -21448.670494468475
 [Section13] 📡 🔥 d_127 (TED) listener triggered - S14 energy demand changed!
 [Section13] 🚀 CALCULATEALL TRIGGERED - Running dual-engine calculations...
 [Section13] 🎯 Mode captured at calculation start: target
 [Section13] 🔄 Starting Reference Model calculations...
 [Section13] Running Reference Model calculations...
 [S13 CONTAMINATION DEBUG] calculateReferenceModel: Using system type = Gas
 [S13] REF HEATING: system=Gas, ted=63154.444902331525, afue=0.9, cop=1
 [Section13] 🧊 COOLING CALC: mode=REF, coolingSystemType="Cooling", heatingType="Gas", isCoolingActive=true, coolingDemand=0
 [S13 CONTAMINATION DEBUG] storeReferenceResults called during target mode
 [S13 CONTAMINATION DEBUG] Reference heating system: Gas
 [S13 CONTAMINATION DEBUG] Target heating system: Heatpump
 [S13 CONTAMINATION DEBUG] Reference h_115 (gas volume): 6773.320989096045
 [S13 CONTAMINATION DEBUG] Reference f_115 (oil volume): 0
 [S13 CONTAMINATION DEBUG] Writing ref_f_115 = 0
 [S13 CONTAMINATION DEBUG] Writing ref_h_115 = 6773.320989096045
 [S04] S13 space gas volume changed (Reference): ref_h_115
 [S04] Row 32 Subtotals - F32: 132938, G32: 4785.768, J32: 0, K32: 0
 [S04] Reference model calculations complete
 [S04DB] storeReference: ref_j_32=0, ref_k_32=0 | current target j_32=0, k_32=0
 [S04] 🔄 Updating calculated display values for target mode
 [S04DB] displayContext mode=target j_32=0 ref_j_32=0 k_32=0 ref_k_32=0
 [S04 DEBUG] Target mode - j_32: 0
 [S04 DEBUG] Target mode - k_32: 0
 [S04 DEBUG] Target mode - l_27: 51
 [S04] Calculated display values updated for target mode
 S10: Reference listener triggered by ref_m_121, recalculating all.
 [S14 DEBUG] ✅ Converted to numbers - ref_d_127 calculation: 12677.97883758859 + 63389.89418794294 + 23178.39 + 84603.19999999995 - 120694.93352
 [S14 DEBUG] ✅ ref_d_127 = 63154.52950553149 (should be numeric, not NaN)
 [S14 DEBUG] ✅ Stored ref_d_127 = 63154.52950553149 in StateManager
 [S14 DEBUG] 🔄 Continuing with other Reference calculations...
 [S14 DEBUG] ref_d_128 calculation: 12677.97883758859 + 63389.89418794294 + 23178.39 - 120694.93352 = -21448.670494468475
 [Section13] 🧊 COOLING CALC: mode=TGT, coolingSystemType="Cooling", heatingType="Heatpump", isCoolingActive=true, coolingDemand=10192.893604542265
 [Section13] 🧊 COOLING RESULTS: d_117=3826.8214105081656, j_116=2.663540445486518, l_116=0, l_114=6366.0721940341
 [Section13] 🧊 COOLING CALC: mode=TGT, coolingSystemType="Cooling", heatingType="Heatpump", isCoolingActive=true, coolingDemand=10192.893604542265
 [Section13] 🧊 COOLING RESULTS: d_117=3826.8214105081656, j_116=2.663540445486518, l_116=0, l_114=6366.0721940341
 [S14 DEBUG] ✅ Converted to numbers - ref_d_127 calculation: 12677.97883758859 + 63389.89418794294 + 23178.39 + 84603.19999999995 - 120694.93352
 [S14 DEBUG] ✅ ref_d_127 = 63154.52950553149 (should be numeric, not NaN)
 [S14 DEBUG] ✅ Stored ref_d_127 = 63154.52950553149 in StateManager
 [S14 DEBUG] 🔄 Continuing with other Reference calculations...
 [S14 DEBUG] ref_d_128 calculation: 12677.97883758859 + 63389.89418794294 + 23178.39 - 120694.93352 = -21448.670494468475
 [S14 DEBUG] ✅ Converted to numbers - ref_d_127 calculation: 12677.97883758859 + 63389.89418794294 + 23178.39 + 84603.19999999995 - 120694.93352
 [S14 DEBUG] ✅ ref_d_127 = 63154.52950553149 (should be numeric, not NaN)
 [S14 DEBUG] ✅ Stored ref_d_127 = 63154.52950553149 in StateManager
 [S14 DEBUG] 🔄 Continuing with other Reference calculations...
 [S14 DEBUG] ref_d_128 calculation: 12677.97883758859 + 63389.89418794294 + 23178.39 - 120694.93352 = -21448.670494468475
 [S14 DEBUG] ✅ Converted to numbers - ref_d_127 calculation: 12677.97883758859 + 63389.89418794294 + 23178.39 + 84603.19999999995 - 120694.93352
 [S14 DEBUG] ✅ ref_d_127 = 63154.52950553149 (should be numeric, not NaN)
 [S14 DEBUG] ✅ Stored ref_d_127 = 63154.52950553149 in StateManager
 [S14 DEBUG] 🔄 Continuing with other Reference calculations...
 [S14 DEBUG] ref_d_128 calculation: 12677.97883758859 + 63389.89418794294 + 23178.39 - 120694.93352 = -21448.670494468475
 S10: Reference utilization factor dependency ref_m_121 changed.
 [S14 DEBUG] ✅ Converted to numbers - ref_d_127 calculation: 12677.97883758859 + 63389.89418794294 + 23178.39 + 84603.19999999995 - 120694.93352
 [S14 DEBUG] ✅ ref_d_127 = 63154.52950553149 (should be numeric, not NaN)
 [S14 DEBUG] ✅ Stored ref_d_127 = 63154.52950553149 in StateManager
 [S14 DEBUG] 🔄 Continuing with other Reference calculations...
 [S14 DEBUG] ref_d_128 calculation: 12677.97883758859 + 63389.89418794294 + 23178.39 - 120694.93352 = -21448.670494468475
 [S14 DEBUG] ✅ Converted to numbers - ref_d_127 calculation: 12677.97883758859 + 63389.89418794294 + 23178.39 + 84603.19999999995 - 120694.93352
 [S14 DEBUG] ✅ ref_d_127 = 63154.52950553149 (should be numeric, not NaN)
 [S14 DEBUG] ✅ Stored ref_d_127 = 63154.52950553149 in StateManager
 [S14 DEBUG] 🔄 Continuing with other Reference calculations...
 [S14 DEBUG] ref_d_128 calculation: 12677.97883758859 + 63389.89418794294 + 23178.39 - 120694.93352 = -21448.670494468475
 [S14 DEBUG] ✅ Converted to numbers - ref_d_127 calculation: 12677.97883758859 + 63389.89418794294 + 23178.39 + 84603.19999999995 - 120694.93352
 [S14 DEBUG] ✅ ref_d_127 = 63154.52950553149 (should be numeric, not NaN)
 [S14 DEBUG] ✅ Stored ref_d_127 = 63154.52950553149 in StateManager
 [S14 DEBUG] 🔄 Continuing with other Reference calculations...
 [S14 DEBUG] ref_d_128 calculation: 12677.97883758859 + 63389.89418794294 + 23178.39 - 120694.93352 = -21448.670494468475
 [S14 DEBUG] ✅ Converted to numbers - ref_d_127 calculation: 12677.97883758859 + 63389.89418794294 + 23178.39 + 84603.19999999995 - 120694.93352
 [S14 DEBUG] ✅ ref_d_127 = 63154.52950553149 (should be numeric, not NaN)
 [S14 DEBUG] ✅ Stored ref_d_127 = 63154.52950553149 in StateManager
 [S14 DEBUG] 🔄 Continuing with other Reference calculations...
 [S14 DEBUG] ref_d_128 calculation: 12677.97883758859 + 63389.89418794294 + 23178.39 - 120694.93352 = -21448.670494468475
 [S14 DEBUG] ✅ Converted to numbers - ref_d_127 calculation: 12677.97883758859 + 63389.89418794294 + 23178.39 + 84603.19999999995 - 120694.93352
 [S14 DEBUG] ✅ ref_d_127 = 63154.52950553149 (should be numeric, not NaN)
 [S14 DEBUG] ✅ Stored ref_d_127 = 63154.52950553149 in StateManager
 [S14 DEBUG] 🔄 Continuing with other Reference calculations...
 [S14 DEBUG] ref_d_128 calculation: 12677.97883758859 + 63389.89418794294 + 23178.39 - 120694.93352 = -21448.670494468475
 [S14 DEBUG] ✅ Converted to numbers - ref_d_127 calculation: 12677.97883758859 + 63389.89418794294 + 23178.39 + 84603.19999999995 - 120694.93352
 [S14 DEBUG] ✅ ref_d_127 = 63154.52950553149 (should be numeric, not NaN)
 [S14 DEBUG] ✅ Stored ref_d_127 = 63154.52950553149 in StateManager
 [S14 DEBUG] 🔄 Continuing with other Reference calculations...
 [S14 DEBUG] ref_d_128 calculation: 12677.97883758859 + 63389.89418794294 + 23178.39 - 120694.93352 = -21448.670494468475
 [Section13] Reference results stored with ref_ prefix for downstream sections
 [S13 DEBUG] Total Reference results stored: 34
 [Section13] Reference Model calculations complete
 [Section13] ✅ Reference Model complete
 [Section13] 🔄 Starting Target Model calculations...
 [Section13] Running Target Model calculations...
 [S13] TGT HEATING: system=Heatpump, ted=119171.54798887548, afue=1, cop=3.663540445486518
 [Section13] 🧊 COOLING CALC: mode=TGT, coolingSystemType="Cooling", heatingType="Heatpump", isCoolingActive=true, coolingDemand=10192.893604542265
 [Section13] 🧊 COOLING RESULTS: d_117=3826.8214105081656, j_116=2.663540445486518, l_116=0, l_114=6366.0721940341
 [Section13] Target Model calculations complete
 [Section13] ✅ Target Model complete
 [Section13] ⏭️ Skipping Reference value re-write - triggered in target mode
 [Section13] 🎉 DUAL-ENGINE CALCULATIONS COMPLETE
 [Section13] 🔄 Updating calculated display values for target mode
 [Section13] Calculated display values updated for target mode
 [Section13] 📡 🔥 d_127 (TED) listener triggered - S14 energy demand changed!
 [Section13] 🚀 CALCULATEALL TRIGGERED - Running dual-engine calculations...
 [Section13] 🎯 Mode captured at calculation start: target
 [Section13] 🔄 Starting Reference Model calculations...
 [Section13] Running Reference Model calculations...
 [S13 CONTAMINATION DEBUG] calculateReferenceModel: Using system type = Gas
 [S13] REF HEATING: system=Gas, ted=63154.52950553149, afue=0.9, cop=1
 [Section13] 🧊 COOLING CALC: mode=REF, coolingSystemType="Cooling", heatingType="Gas", isCoolingActive=true, coolingDemand=10192.893604542265
 [S13 CONTAMINATION DEBUG] storeReferenceResults called during target mode
 [S13 CONTAMINATION DEBUG] Reference heating system: Gas
 [S13 CONTAMINATION DEBUG] Target heating system: Heatpump
 [S13 CONTAMINATION DEBUG] Reference h_115 (gas volume): 6773.330062798315
 [S13 CONTAMINATION DEBUG] Reference f_115 (oil volume): 0
 [S13 CONTAMINATION DEBUG] Writing ref_f_115 = 0
 [S13 CONTAMINATION DEBUG] Writing ref_h_115 = 6773.330062798315
 [S04] S13 space gas volume changed (Reference): ref_h_115
 [S04] Row 32 Subtotals - F32: 132938, G32: 4785.768, J32: 0, K32: 0
 [S04] Reference model calculations complete
 [S04DB] storeReference: ref_j_32=0, ref_k_32=0 | current target j_32=0, k_32=0
 [S04] 🔄 Updating calculated display values for target mode
 [S04DB] displayContext mode=target j_32=0 ref_j_32=0 k_32=0 ref_k_32=0
 [S04 DEBUG] Target mode - j_32: 0
 [S04 DEBUG] Target mode - k_32: 0
 [S04 DEBUG] Target mode - l_27: 51
 [S04] Calculated display values updated for target mode
 [Section13] Reference results stored with ref_ prefix for downstream sections
 [S13 DEBUG] Total Reference results stored: 34
 [Section13] Reference Model calculations complete
 [Section13] ✅ Reference Model complete
 [Section13] 🔄 Starting Target Model calculations...
 [Section13] Running Target Model calculations...
 [S13] TGT HEATING: system=Heatpump, ted=119171.54798887548, afue=1, cop=3.663540445486518
 [Section13] 🧊 COOLING CALC: mode=TGT, coolingSystemType="Cooling", heatingType="Heatpump", isCoolingActive=true, coolingDemand=10192.893604542265
 [Section13] 🧊 COOLING RESULTS: d_117=3826.8214105081656, j_116=2.663540445486518, l_116=0, l_114=6366.0721940341
 [Section13] Target Model calculations complete
 [Section13] ✅ Target Model complete
 [Section13] ⏭️ Skipping Reference value re-write - triggered in target mode
 [Section13] 🎉 DUAL-ENGINE CALCULATIONS COMPLETE
 [Section13] 🔄 Updating calculated display values for target mode
 [Section13] Calculated display values updated for target mode
 S14: Pattern A initialization complete.
 [S15] Missing critical upstream Reference values: ref_g_101, ref_d_101, ref_i_104
calculateReferenceModel @ 4011-Section15.js:1389Understand this warningAI
 [S04] S15 reference electricity changed: ref_d_136
 [S04] Starting dual-engine Excel-compliant calculations
 [S04] Row 32 Subtotals - F32: 132938, G32: 6779.838, J32: 0, K32: 0
 [S04] j_32 update: 0
 [S04] Row 32 Subtotals - F32: 132938, G32: 4785.768, J32: 76754.58647999995, K32: 2763.1651132799984
2 🔄 [S05] updateCalculatedDisplayValues: mode=target
 [S15] Missing critical upstream Reference values: ref_g_101, ref_d_101, ref_i_104
calculateReferenceModel @ 4011-Section15.js:1389Understand this warningAI
 [S04] S15 target electricity changed: d_136
 [S04] Starting dual-engine Excel-compliant calculations
 [S04] Row 32 Subtotals - F32: 132938, G32: 6779.838, J32: 0, K32: 0
4 🔄 [S05] updateCalculatedDisplayValues: mode=target
2 [S15] Missing critical upstream Reference values: ref_g_101, ref_d_101, ref_i_104
calculateReferenceModel @ 4011-Section15.js:1389Understand this warningAI
 [S04] Row 32 Subtotals - F32: 132938, G32: 4785.768, J32: 76754.58647999995, K32: 2763.1651132799984
4 🔄 [S05] updateCalculatedDisplayValues: mode=target
2 [S15] Missing critical upstream Reference values: ref_g_101, ref_d_101, ref_i_104
calculateReferenceModel @ 4011-Section15.js:1389Understand this warningAI
 [S04] Reference model calculations complete
 [S04DB] storeReference: ref_j_32=76754.58647999995, ref_k_32=2763.1651132799984 | current target j_32=0, k_32=0
 [S04] 🔄 Updating calculated display values for reference mode
 [S04DB] displayContext mode=reference j_32=0 ref_j_32=76754.58647999995 k_32=0 ref_k_32=2763.1651132799984
 [S04 DEBUG] Reference mode - j_32: ref_j_32=76754.58647999995 (NO fallback to Target)
 [S04 DEBUG] Reference mode - k_32: ref_k_32=2763.1651132799984 (NO fallback to Target)
 [S04 DEBUG] Reference mode - l_27: ref_l_27=36 (NO fallback to Target)
 [S04] Calculated display values updated for reference mode
 [S04] Dual-engine calculations completed successfully
 [S04] 🔄 Updating calculated display values for reference mode
 [S04DB] displayContext mode=reference j_32=0 ref_j_32=76754.58647999995 k_32=0 ref_k_32=2763.1651132799984
 [S04 DEBUG] Reference mode - j_32: ref_j_32=76754.58647999995 (NO fallback to Target)
 [S04 DEBUG] Reference mode - k_32: ref_k_32=2763.1651132799984 (NO fallback to Target)
 [S04 DEBUG] Reference mode - l_27: ref_l_27=36 (NO fallback to Target)
 [S04] Calculated display values updated for reference mode
 [S15] Missing critical upstream Reference values: ref_g_101, ref_d_101, ref_i_104
calculateReferenceModel @ 4011-Section15.js:1389Understand this warningAI
 [S04] Reference model calculations complete
 [S04DB] storeReference: ref_j_32=76754.58647999995, ref_k_32=2763.1651132799984 | current target j_32=0, k_32=0
 [S04] 🔄 Updating calculated display values for target mode
 [S04DB] displayContext mode=target j_32=0 ref_j_32=76754.58647999995 k_32=0 ref_k_32=2763.1651132799984
 [S04 DEBUG] Target mode - j_32: 0
 [S04 DEBUG] Target mode - k_32: 0
 [S04 DEBUG] Target mode - l_27: 51
 [S04] Calculated display values updated for target mode
 [S04] Dual-engine calculations completed successfully
 [S04] 🔄 Updating calculated display values for target mode
 [S04DB] displayContext mode=target j_32=0 ref_j_32=76754.58647999995 k_32=0 ref_k_32=2763.1651132799984
 [S04 DEBUG] Target mode - j_32: 0
 [S04 DEBUG] Target mode - k_32: 0
 [S04 DEBUG] Target mode - l_27: 51
 [S04] Calculated display values updated for target mode
 [S15] Missing critical upstream Reference values: ref_g_101, ref_d_101, ref_i_104
calculateReferenceModel @ 4011-Section15.js:1389Understand this warningAI
 Section03: Province selected: ON
 S03: Synced province change "ON" to StateManager key "d_19"
 City dropdown updated for ON - selected: Alexandria
 [S15] Missing critical upstream Reference values: ref_g_101, ref_d_101, ref_i_104
calculateReferenceModel @ 4011-Section15.js:1389Understand this warningAI
 Section03: Province selected: ON
 S03: Synced province change "ON" to StateManager key "d_19"
 City dropdown updated for ON - selected: Alexandria
 [S15] Missing critical upstream Reference values: ref_g_101, ref_d_101, ref_i_104
calculateReferenceModel @ 4011-Section15.js:1389Understand this warningAI
 TEUI Calculator 4.011 initialization complete
 [S01DB] upstream snapshot Object
 🔍 [S01DB] updateTEUIDisplay START: e_10=341.2, h_10=93.0, useType=Utility Bills
 🔍 [S01DB] UPDATING h_10: 0.0 (from j_32=0, area=1427.2)
 ✅ [S01] CALCULATION CHAIN COMPLETE - All values finalized including h_10
 S12 ReferenceState: Saved state after user changed d_101 to 2476.6199999999994
4 [S15] Missing critical upstream Reference values: ref_g_101, ref_i_104
calculateReferenceModel @ 4011-Section15.js:1389Understand this warningAI
 S12 ReferenceState: Saved state after user changed d_102 to 1100.42
4 [S15] Missing critical upstream Reference values: ref_g_101, ref_i_104
calculateReferenceModel @ 4011-Section15.js:1389Understand this warningAI
 S12 ReferenceState: Saved state after user changed d_106 to 1130.1200000000001
2 🔄 [S05] updateCalculatedDisplayValues: mode=target
 S12 ReferenceState: Saved state after user changed g_105 to 3.3109641366055356
 S12 ReferenceState: Saved state after user changed i_105 to 0.3020268292682926
 [S12] U-agg REF: TB%=0 → g_101=0.231951, g_102=0.270270
 S12 ReferenceState: Saved state after user changed g_101 to 0.23195088553974055
4 [S15] Missing critical upstream Reference values: ref_i_104
calculateReferenceModel @ 4011-Section15.js:1389Understand this warningAI
 S12 ReferenceState: Saved state after user changed g_102 to 0.27027027027027023
4 [S15] Missing critical upstream Reference values: ref_i_104
calculateReferenceModel @ 4011-Section15.js:1389Understand this warningAI
 S12 ReferenceState: Saved state after user changed g_104 to 0.24373924053302254
4 [S15] Missing critical upstream Reference values: ref_i_104
calculateReferenceModel @ 4011-Section15.js:1389Understand this warningAI
 S12 ReferenceState: Saved state after user changed d_107 to 0.3306074546990893
 S12 ReferenceState: Saved state after user changed l_107 to 0.8265186367477232
 S12 ReferenceState: Saved state after user changed i_110 to 2
 S12 ReferenceState: Saved state after user changed g_110 to 16.7
 S12 ReferenceState: Saved state after user changed g_108 to 1.8394245203364086
 S12 ReferenceState: Saved state after user changed d_109 to 1.9999999999999998
 S12 ReferenceState: Saved state after user changed l_109 to 1.0000000000000002
 S12 ReferenceState: Saved state after user changed d_110 to 4.5555555555555545
 S12 ReferenceState: Saved state after user changed l_110 to 2.711640211640211
 S12 ReferenceState: Saved state after user changed i_103 to 36440.079840319355
 S10: Reference listener triggered by ref_i_103, recalculating all.
 [S14 DEBUG] ✅ Converted to numbers - ref_d_127 calculation: 12677.97883758859 + 63389.89418794294 + 36440.079840319355 + 84603.19999999995 - 120694.93352
 [S14 DEBUG] ✅ ref_d_127 = 76416.21934585083 (should be numeric, not NaN)
 [S14 DEBUG] ✅ Stored ref_d_127 = 76416.21934585083 in StateManager
 [S14 DEBUG] 🔄 Continuing with other Reference calculations...
 [S14 DEBUG] ref_d_128 calculation: 12677.97883758859 + 63389.89418794294 + 36440.079840319355 - 120694.93352 = -8186.980654149127
 [S14 DEBUG] ✅ Converted to numbers - ref_d_127 calculation: 12677.97883758859 + 63389.89418794294 + 36440.079840319355 + 84603.19999999995 - 120694.93352
 [S14 DEBUG] ✅ ref_d_127 = 76416.21934585083 (should be numeric, not NaN)
 [S14 DEBUG] ✅ Stored ref_d_127 = 76416.21934585083 in StateManager
 [S14 DEBUG] 🔄 Continuing with other Reference calculations...
 [S14 DEBUG] ref_d_128 calculation: 12677.97883758859 + 63389.89418794294 + 36440.079840319355 - 120694.93352 = -8186.980654149127
4 [S15] Missing critical upstream Reference values: ref_i_104
calculateReferenceModel @ 4011-Section15.js:1389Understand this warningAI
 [S14 DEBUG] ✅ Converted to numbers - ref_d_127 calculation: 12677.97883758859 + 63389.89418794294 + 36440.079840319355 + 84603.19999999995 - 120694.93352
 [S14 DEBUG] ✅ ref_d_127 = 76416.21934585083 (should be numeric, not NaN)
 [S14 DEBUG] ✅ Stored ref_d_127 = 76416.21934585083 in StateManager
 [S14 DEBUG] 🔄 Continuing with other Reference calculations...
 [S14 DEBUG] ref_d_128 calculation: 12677.97883758859 + 63389.89418794294 + 36440.079840319355 - 120694.93352 = -8186.980654149127
 [S14 DEBUG] ✅ Converted to numbers - ref_d_127 calculation: 12677.97883758859 + 63389.89418794294 + 36440.079840319355 + 84603.19999999995 - 120694.93352
 [S14 DEBUG] ✅ ref_d_127 = 76416.21934585083 (should be numeric, not NaN)
 [S14 DEBUG] ✅ Stored ref_d_127 = 76416.21934585083 in StateManager
 [S14 DEBUG] 🔄 Continuing with other Reference calculations...
 [S14 DEBUG] ref_d_128 calculation: 12677.97883758859 + 63389.89418794294 + 36440.079840319355 - 120694.93352 = -8186.980654149127
4 [S15] Missing critical upstream Reference values: ref_i_104
calculateReferenceModel @ 4011-Section15.js:1389Understand this warningAI
 S10: Reference utilization factor dependency ref_i_103 changed.
 [S14 DEBUG] ✅ Converted to numbers - ref_d_127 calculation: 12677.97883758859 + 63389.89418794294 + 36440.079840319355 + 84603.19999999995 - 120694.93352
 [S14 DEBUG] ✅ ref_d_127 = 76416.21934585083 (should be numeric, not NaN)
 [S14 DEBUG] ✅ Stored ref_d_127 = 76416.21934585083 in StateManager
 [S14 DEBUG] 🔄 Continuing with other Reference calculations...
 [S14 DEBUG] ref_d_128 calculation: 12677.97883758859 + 63389.89418794294 + 36440.079840319355 - 120694.93352 = -8186.980654149127
 [S14 DEBUG] ✅ Converted to numbers - ref_d_127 calculation: 12677.97883758859 + 63389.89418794294 + 36440.079840319355 + 84603.19999999995 - 120694.93352
 [S14 DEBUG] ✅ ref_d_127 = 76416.21934585083 (should be numeric, not NaN)
 [S14 DEBUG] ✅ Stored ref_d_127 = 76416.21934585083 in StateManager
 [S14 DEBUG] 🔄 Continuing with other Reference calculations...
 [S14 DEBUG] ref_d_128 calculation: 12677.97883758859 + 63389.89418794294 + 36440.079840319355 - 120694.93352 = -8186.980654149127
 S12 ReferenceState: Saved state after user changed k_103 to 1552.6642714570858
 [S14 DEBUG] ✅ Converted to numbers - ref_d_127 calculation: 12677.97883758859 + 63389.89418794294 + 36440.079840319355 + 84603.19999999995 - 120694.93352
 [S14 DEBUG] ✅ ref_d_127 = 76416.21934585083 (should be numeric, not NaN)
 [S14 DEBUG] ✅ Stored ref_d_127 = 76416.21934585083 in StateManager
 [S14 DEBUG] 🔄 Continuing with other Reference calculations...
 [S14 DEBUG] ref_d_128 calculation: 12677.97883758859 + 63389.89418794294 + 36440.079840319355 - 120694.93352 = -8186.980654149127
 [S14 DEBUG] ✅ Converted to numbers - ref_d_127 calculation: 12677.97883758859 + 63389.89418794294 + 36440.079840319355 + 84603.19999999995 - 120694.93352
 [S14 DEBUG] ✅ ref_d_127 = 76416.21934585083 (should be numeric, not NaN)
 [S14 DEBUG] ✅ Stored ref_d_127 = 76416.21934585083 in StateManager
 [S14 DEBUG] 🔄 Continuing with other Reference calculations...
 [S14 DEBUG] ref_d_128 calculation: 12677.97883758859 + 63389.89418794294 + 36440.079840319355 - 120694.93352 = -8186.980654149127
 [S12DB] REF CLIMATE: d_20=4600, d_21=196, d_22=1960, h_22=-1680
 [S12DB] REF h_101 calc: (4600*0.23195088553974055*24)/1000 = 25.607377763587355
 [S12DB] REF i_101 result: 25.607377763587355 * 2476.6199999999994 = 63419.7439168557
 S12 ReferenceState: Saved state after user changed h_101 to 25.607377763587355
 S12 ReferenceState: Saved state after user changed i_101 to 63419.7439168557
 S12 ReferenceState: Saved state after user changed j_101 to 1.0910969655789395
 S12 ReferenceState: Saved state after user changed k_101 to 2702.2325668921126
 S12 ReferenceState: Saved state after user changed h_102 to 12.713513513513513
 S12 ReferenceState: Saved state after user changed i_102 to 13990.20454054054
 S12 ReferenceState: Saved state after user changed j_102 to -10.897297297297296
 S12 ReferenceState: Saved state after user changed k_102 to -11991.603891891891
 [S12DB] REF g_104 calc: (0.23195088553974055*2476.6199999999994 + 0.27027027027027023*1100.42)/3577.0400009999994 = 0.24373924046488266
 [S12DB] REF ROW104: i_101=63419.7439168557, i_102=13990.20454054054, i_103=36440.079840319355 → i_104=113850.02829771559
 [S12DB] REF ROW104: h_21="Capacitance", k_98=-4267.625965209389 → k_104=-4267.625965209389
 S12 ReferenceState: Saved state after user changed g_104 to 0.24373924046488266
4 [S15] Missing critical upstream Reference values: ref_i_104
calculateReferenceModel @ 4011-Section15.js:1389Understand this warningAI
 S12 ReferenceState: Saved state after user changed i_104 to 113850.02829771559
 [S04] S15 reference electricity changed: ref_d_136
 [S04] Starting dual-engine Excel-compliant calculations
 [S04] Row 32 Subtotals - F32: 132938, G32: 6779.838, J32: 133574.3671495516, K32: 6812.292724627132
 [S04] j_32 update: 133574.3671495516
 [S01] j_32 listener: 0 → 133574.3671495516
 [S01] 🕐 j_32 listener timing: StateManager current j_32 = 133574.3671495516
2 🔄 [S05] updateCalculatedDisplayValues: mode=target
 [S04] Row 32 Subtotals - F32: 132938, G32: 4785.768, J32: 190604.61477771553, K32: 6861.766131997759
2 🔄 [S05] updateCalculatedDisplayValues: mode=target
 [S04] Reference model calculations complete
 [S04DB] storeReference: ref_j_32=190604.61477771553, ref_k_32=6861.766131997759 | current target j_32=133574.3671495516, k_32=6812.292724627132
 [S04] 🔄 Updating calculated display values for target mode
 [S04DB] displayContext mode=target j_32=133574.3671495516 ref_j_32=190604.61477771553 k_32=6812.292724627132 ref_k_32=6861.766131997759
 [S04 DEBUG] Target mode - j_32: 133574.3671495516
 [S04 DEBUG] Target mode - k_32: 6812.292724627132
 [S04 DEBUG] Target mode - l_27: 51
 [S04] Calculated display values updated for target mode
 [S04] Dual-engine calculations completed successfully
 [S04] 🔄 Updating calculated display values for target mode
 [S04DB] displayContext mode=target j_32=133574.3671495516 ref_j_32=190604.61477771553 k_32=6812.292724627132 ref_k_32=6861.766131997759
 [S04 DEBUG] Target mode - j_32: 133574.3671495516
 [S04 DEBUG] Target mode - k_32: 6812.292724627132
 [S04 DEBUG] Target mode - l_27: 51
 [S04] Calculated display values updated for target mode
 S12 ReferenceState: Saved state after user changed k_104 to -4267.625965209389
 S12 ReferenceState: Saved state after user changed l_101 to 0.5570463605947845
 S12 ReferenceState: Saved state after user changed l_102 to 0.12288274978690765
 S12 ReferenceState: Saved state after user changed l_103 to 0.3200708896183079
 S12 ReferenceState: Saved state after user changed l_104 to 1
 [S12DB] STORED for S15: ref_d_101=2476.6199999999994
 [S12DB] STORED for S15: ref_d_102=1100.42
 [S12DB] STORED for S15: ref_g_101=0.23195088553974055
 [S12DB] STORED for S15: ref_g_102=0.27027027027027023
 [S12DB] STORED for S15: ref_g_104=0.24373924046488266
 [S12DB] STORED for S15: ref_i_101=63419.7439168557
 [S12DB] STORED for S15: ref_i_102=13990.20454054054
 [S12DB] STORED for S15: ref_i_104=113850.02829771559
 [Section12] Reference results stored with ref_ prefix for downstream sections
 S12 ReferenceState: Saved state after user changed d_101 to 2476.6199999999994
 S12 ReferenceState: Saved state after user changed d_102 to 1100.42
 S12 ReferenceState: Saved state after user changed d_106 to 1130.1200000000001
 S12 ReferenceState: Saved state after user changed g_105 to 3.230208913761498
 S12 ReferenceState: Saved state after user changed i_105 to 0.30957749999999995
 [S12] U-agg TGT: TB%=20 → g_101=0.278341, g_102=0.324324
 S12 ReferenceState: Saved state after user changed g_101 to 0.27834106264768865
 S12 ReferenceState: Saved state after user changed g_102 to 0.3243243243243243
 S12 ReferenceState: Saved state after user changed g_104 to 0.2924870886396271
 S12 ReferenceState: Saved state after user changed d_107 to 0.3306074546990893
 S12 ReferenceState: Saved state after user changed l_107 to 0.8265186367477232
 S12 ReferenceState: Saved state after user changed i_110 to 2
 S12 ReferenceState: Saved state after user changed g_110 to 16.7
 S12 ReferenceState: Saved state after user changed g_108 to 1.17
 S12 ReferenceState: Saved state after user changed d_109 to 1.3039404299999997
 S12 ReferenceState: Saved state after user changed l_109 to 1
 S12 ReferenceState: Saved state after user changed d_110 to 2.897645399999999
 S12 ReferenceState: Saved state after user changed l_110 to 1.7247889285714282
 S12 ReferenceState: Saved state after user changed i_103 to 23178.387012790416
 S10: Reference listener triggered by ref_i_103, recalculating all.
 [S14 DEBUG] ✅ Converted to numbers - ref_d_127 calculation: 12677.97883758859 + 63389.89418794294 + 23178.387012790416 + 84603.19999999995 - 120694.93352
 [S14 DEBUG] ✅ ref_d_127 = 63154.5265183219 (should be numeric, not NaN)
 [S14 DEBUG] ✅ Stored ref_d_127 = 63154.5265183219 in StateManager
 [S14 DEBUG] 🔄 Continuing with other Reference calculations...
 [S14 DEBUG] ref_d_128 calculation: 12677.97883758859 + 63389.89418794294 + 23178.387012790416 - 120694.93352 = -21448.67348167805
 [S14 DEBUG] ✅ Converted to numbers - ref_d_127 calculation: 12677.97883758859 + 63389.89418794294 + 23178.387012790416 + 84603.19999999995 - 120694.93352
 [S14 DEBUG] ✅ ref_d_127 = 63154.5265183219 (should be numeric, not NaN)
 [S14 DEBUG] ✅ Stored ref_d_127 = 63154.5265183219 in StateManager
 [S14 DEBUG] 🔄 Continuing with other Reference calculations...
 [S14 DEBUG] ref_d_128 calculation: 12677.97883758859 + 63389.89418794294 + 23178.387012790416 - 120694.93352 = -21448.67348167805
 [S14 DEBUG] ✅ Converted to numbers - ref_d_127 calculation: 12677.97883758859 + 63389.89418794294 + 23178.387012790416 + 84603.19999999995 - 120694.93352
 [S14 DEBUG] ✅ ref_d_127 = 63154.5265183219 (should be numeric, not NaN)
 [S14 DEBUG] ✅ Stored ref_d_127 = 63154.5265183219 in StateManager
 [S14 DEBUG] 🔄 Continuing with other Reference calculations...
 [S14 DEBUG] ref_d_128 calculation: 12677.97883758859 + 63389.89418794294 + 23178.387012790416 - 120694.93352 = -21448.67348167805
 [S14 DEBUG] ✅ Converted to numbers - ref_d_127 calculation: 12677.97883758859 + 63389.89418794294 + 23178.387012790416 + 84603.19999999995 - 120694.93352
 [S14 DEBUG] ✅ ref_d_127 = 63154.5265183219 (should be numeric, not NaN)
 [S14 DEBUG] ✅ Stored ref_d_127 = 63154.5265183219 in StateManager
 [S14 DEBUG] 🔄 Continuing with other Reference calculations...
 [S14 DEBUG] ref_d_128 calculation: 12677.97883758859 + 63389.89418794294 + 23178.387012790416 - 120694.93352 = -21448.67348167805
 S10: Reference utilization factor dependency ref_i_103 changed.
 [S14 DEBUG] ✅ Converted to numbers - ref_d_127 calculation: 12677.97883758859 + 63389.89418794294 + 23178.387012790416 + 84603.19999999995 - 120694.93352
 [S14 DEBUG] ✅ ref_d_127 = 63154.5265183219 (should be numeric, not NaN)
 [S14 DEBUG] ✅ Stored ref_d_127 = 63154.5265183219 in StateManager
 [S14 DEBUG] 🔄 Continuing with other Reference calculations...
 [S14 DEBUG] ref_d_128 calculation: 12677.97883758859 + 63389.89418794294 + 23178.387012790416 - 120694.93352 = -21448.67348167805
 [S14 DEBUG] ✅ Converted to numbers - ref_d_127 calculation: 12677.97883758859 + 63389.89418794294 + 23178.387012790416 + 84603.19999999995 - 120694.93352
 [S14 DEBUG] ✅ ref_d_127 = 63154.5265183219 (should be numeric, not NaN)
 [S14 DEBUG] ✅ Stored ref_d_127 = 63154.5265183219 in StateManager
 [S14 DEBUG] 🔄 Continuing with other Reference calculations...
 [S14 DEBUG] ref_d_128 calculation: 12677.97883758859 + 63389.89418794294 + 23178.387012790416 - 120694.93352 = -21448.67348167805
 S12 ReferenceState: Saved state after user changed k_103 to 987.6008379362872
 [S14 DEBUG] ✅ Converted to numbers - ref_d_127 calculation: 12677.97883758859 + 63389.89418794294 + 23178.387012790416 + 84603.19999999995 - 120694.93352
 [S14 DEBUG] ✅ ref_d_127 = 63154.5265183219 (should be numeric, not NaN)
 [S14 DEBUG] ✅ Stored ref_d_127 = 63154.5265183219 in StateManager
 [S14 DEBUG] 🔄 Continuing with other Reference calculations...
 [S14 DEBUG] ref_d_128 calculation: 12677.97883758859 + 63389.89418794294 + 23178.387012790416 - 120694.93352 = -21448.67348167805
 [S14 DEBUG] ✅ Converted to numbers - ref_d_127 calculation: 12677.97883758859 + 63389.89418794294 + 23178.387012790416 + 84603.19999999995 - 120694.93352
 [S14 DEBUG] ✅ ref_d_127 = 63154.5265183219 (should be numeric, not NaN)
 [S14 DEBUG] ✅ Stored ref_d_127 = 63154.5265183219 in StateManager
 [S14 DEBUG] 🔄 Continuing with other Reference calculations...
 [S14 DEBUG] ref_d_128 calculation: 12677.97883758859 + 63389.89418794294 + 23178.387012790416 - 120694.93352 = -21448.67348167805
 [S12DB] TGT CLIMATE: d_20=4600, d_21=196, d_22=1960, h_22=-1680
 [S12DB] TGT h_101 calc: (4600*0.27834106264768865*24)/1000 = 30.72885331630483
 [S12DB] TGT i_101 result: 30.72885331630483 * 2476.6199999999994 = 76103.69270022685
 S12 ReferenceState: Saved state after user changed h_101 to 30.72885331630483
 S12 ReferenceState: Saved state after user changed i_101 to 76103.69270022685
 S12 ReferenceState: Saved state after user changed j_101 to 1.3093163586947276
 S12 ReferenceState: Saved state after user changed k_101 to 3242.6790802705355
 S12 ReferenceState: Saved state after user changed h_102 to 15.256216216216215
 S12 ReferenceState: Saved state after user changed i_102 to 16788.24544864865
 S12 ReferenceState: Saved state after user changed j_102 to -13.076756756756755
 S12 ReferenceState: Saved state after user changed k_102 to -14389.92467027027
 [S12DB] TGT g_104 calc: (0.27834106264768865*2476.6199999999994 + 0.3243243243243243*1100.42)/3577.0400009999994 = 0.29248708855785915
 [S12DB] TGT ROW104: i_101=76103.69270022685, i_102=16788.24544864865, i_103=23178.387012790416 → i_104=116070.32516166591
 [S12DB] TGT ROW104: h_21="Capacitance", k_98=-3293.5693790538335 → k_104=-3293.5693790538335
 S12 ReferenceState: Saved state after user changed g_104 to 0.29248708855785915
 S12 ReferenceState: Saved state after user changed i_104 to 116070.32516166591
 [S04] S15 reference electricity changed: ref_d_136
 [S04] Starting dual-engine Excel-compliant calculations
 [S04] Row 32 Subtotals - F32: 132938, G32: 6779.838, J32: 133574.3671495516, K32: 6812.292724627132
 [S04] j_32 update: 133574.3671495516
 [S04] Row 32 Subtotals - F32: 132938, G32: 4785.768, J32: 192824.91164166585, K32: 6941.6968190999705
2 🔄 [S05] updateCalculatedDisplayValues: mode=target
 [S04] Reference model calculations complete
 [S04DB] storeReference: ref_j_32=192824.91164166585, ref_k_32=6941.6968190999705 | current target j_32=133574.3671495516, k_32=6812.292724627132
 [S04] 🔄 Updating calculated display values for target mode
 [S04DB] displayContext mode=target j_32=133574.3671495516 ref_j_32=192824.91164166585 k_32=6812.292724627132 ref_k_32=6941.6968190999705
 [S04 DEBUG] Target mode - j_32: 133574.3671495516
 [S04 DEBUG] Target mode - k_32: 6812.292724627132
 [S04 DEBUG] Target mode - l_27: 51
 [S04] Calculated display values updated for target mode
 [S04] Dual-engine calculations completed successfully
 [S04] 🔄 Updating calculated display values for target mode
 [S04DB] displayContext mode=target j_32=133574.3671495516 ref_j_32=192824.91164166585 k_32=6812.292724627132 ref_k_32=6941.6968190999705
 [S04 DEBUG] Target mode - j_32: 133574.3671495516
 [S04 DEBUG] Target mode - k_32: 6812.292724627132
 [S04 DEBUG] Target mode - l_27: 51
 [S04] Calculated display values updated for target mode
 S12 ReferenceState: Saved state after user changed k_104 to -3293.5693790538335
 S12 ReferenceState: Saved state after user changed l_101 to 0.6556688162476287
 S12 ReferenceState: Saved state after user changed l_102 to 0.1446385665351202
 S12 ReferenceState: Saved state after user changed l_103 to 0.19969261721725107
 S12 ReferenceState: Saved state after user changed l_104 to 1
 S10: Reference listener triggered by ref_i_103, recalculating all.
 [S14 DEBUG] ✅ Converted to numbers - ref_d_127 calculation: 12677.97883758859 + 63389.89418794294 + 36440.079840319355 + 84603.19999999995 - 120694.93352
 [S14 DEBUG] ✅ ref_d_127 = 76416.21934585083 (should be numeric, not NaN)
 [S14 DEBUG] ✅ Stored ref_d_127 = 76416.21934585083 in StateManager
 [S14 DEBUG] 🔄 Continuing with other Reference calculations...
 [S14 DEBUG] ref_d_128 calculation: 12677.97883758859 + 63389.89418794294 + 36440.079840319355 - 120694.93352 = -8186.980654149127
 [S14 DEBUG] ✅ Converted to numbers - ref_d_127 calculation: 12677.97883758859 + 63389.89418794294 + 36440.079840319355 + 84603.19999999995 - 120694.93352
 [S14 DEBUG] ✅ ref_d_127 = 76416.21934585083 (should be numeric, not NaN)
 [S14 DEBUG] ✅ Stored ref_d_127 = 76416.21934585083 in StateManager
 [S14 DEBUG] 🔄 Continuing with other Reference calculations...
 [S14 DEBUG] ref_d_128 calculation: 12677.97883758859 + 63389.89418794294 + 36440.079840319355 - 120694.93352 = -8186.980654149127
 [S14 DEBUG] ✅ Converted to numbers - ref_d_127 calculation: 12677.97883758859 + 63389.89418794294 + 36440.079840319355 + 84603.19999999995 - 120694.93352
 [S14 DEBUG] ✅ ref_d_127 = 76416.21934585083 (should be numeric, not NaN)
 [S14 DEBUG] ✅ Stored ref_d_127 = 76416.21934585083 in StateManager
 [S14 DEBUG] 🔄 Continuing with other Reference calculations...
 [S14 DEBUG] ref_d_128 calculation: 12677.97883758859 + 63389.89418794294 + 36440.079840319355 - 120694.93352 = -8186.980654149127
 [S14 DEBUG] ✅ Converted to numbers - ref_d_127 calculation: 12677.97883758859 + 63389.89418794294 + 36440.079840319355 + 84603.19999999995 - 120694.93352
 [S14 DEBUG] ✅ ref_d_127 = 76416.21934585083 (should be numeric, not NaN)
 [S14 DEBUG] ✅ Stored ref_d_127 = 76416.21934585083 in StateManager
 [S14 DEBUG] 🔄 Continuing with other Reference calculations...
 [S14 DEBUG] ref_d_128 calculation: 12677.97883758859 + 63389.89418794294 + 36440.079840319355 - 120694.93352 = -8186.980654149127
 S10: Reference utilization factor dependency ref_i_103 changed.
 [S14 DEBUG] ✅ Converted to numbers - ref_d_127 calculation: 12677.97883758859 + 63389.89418794294 + 36440.079840319355 + 84603.19999999995 - 120694.93352
 [S14 DEBUG] ✅ ref_d_127 = 76416.21934585083 (should be numeric, not NaN)
 [S14 DEBUG] ✅ Stored ref_d_127 = 76416.21934585083 in StateManager
 [S14 DEBUG] 🔄 Continuing with other Reference calculations...
 [S14 DEBUG] ref_d_128 calculation: 12677.97883758859 + 63389.89418794294 + 36440.079840319355 - 120694.93352 = -8186.980654149127
 [S14 DEBUG] ✅ Converted to numbers - ref_d_127 calculation: 12677.97883758859 + 63389.89418794294 + 36440.079840319355 + 84603.19999999995 - 120694.93352
 [S14 DEBUG] ✅ ref_d_127 = 76416.21934585083 (should be numeric, not NaN)
 [S14 DEBUG] ✅ Stored ref_d_127 = 76416.21934585083 in StateManager
 [S14 DEBUG] 🔄 Continuing with other Reference calculations...
 [S14 DEBUG] ref_d_128 calculation: 12677.97883758859 + 63389.89418794294 + 36440.079840319355 - 120694.93352 = -8186.980654149127
 [S14 DEBUG] ✅ Converted to numbers - ref_d_127 calculation: 12677.97883758859 + 63389.89418794294 + 36440.079840319355 + 84603.19999999995 - 120694.93352
 [S14 DEBUG] ✅ ref_d_127 = 76416.21934585083 (should be numeric, not NaN)
 [S14 DEBUG] ✅ Stored ref_d_127 = 76416.21934585083 in StateManager
 [S14 DEBUG] 🔄 Continuing with other Reference calculations...
 [S14 DEBUG] ref_d_128 calculation: 12677.97883758859 + 63389.89418794294 + 36440.079840319355 - 120694.93352 = -8186.980654149127
 [S14 DEBUG] ✅ Converted to numbers - ref_d_127 calculation: 12677.97883758859 + 63389.89418794294 + 36440.079840319355 + 84603.19999999995 - 120694.93352
 [S14 DEBUG] ✅ ref_d_127 = 76416.21934585083 (should be numeric, not NaN)
 [S14 DEBUG] ✅ Stored ref_d_127 = 76416.21934585083 in StateManager
 [S14 DEBUG] 🔄 Continuing with other Reference calculations...
 [S14 DEBUG] ref_d_128 calculation: 12677.97883758859 + 63389.89418794294 + 36440.079840319355 - 120694.93352 = -8186.980654149127
 [S04] S15 reference electricity changed: ref_d_136
 [S04] Starting dual-engine Excel-compliant calculations
 [S04] Row 32 Subtotals - F32: 132938, G32: 6779.838, J32: 133574.3671495516, K32: 6812.292724627132
 [S04] j_32 update: 133574.3671495516
 [S04] Row 32 Subtotals - F32: 132938, G32: 4785.768, J32: 190604.61477771553, K32: 6861.766131997759
2 🔄 [S05] updateCalculatedDisplayValues: mode=target
 [S04] Reference model calculations complete
 [S04DB] storeReference: ref_j_32=190604.61477771553, ref_k_32=6861.766131997759 | current target j_32=133574.3671495516, k_32=6812.292724627132
 [S04] 🔄 Updating calculated display values for target mode
 [S04DB] displayContext mode=target j_32=133574.3671495516 ref_j_32=190604.61477771553 k_32=6812.292724627132 ref_k_32=6861.766131997759
 [S04 DEBUG] Target mode - j_32: 133574.3671495516
 [S04 DEBUG] Target mode - k_32: 6812.292724627132
 [S04 DEBUG] Target mode - l_27: 51
 [S04] Calculated display values updated for target mode
 [S04] Dual-engine calculations completed successfully
 [S04] 🔄 Updating calculated display values for target mode
 [S04DB] displayContext mode=target j_32=133574.3671495516 ref_j_32=190604.61477771553 k_32=6812.292724627132 ref_k_32=6861.766131997759
 [S04 DEBUG] Target mode - j_32: 133574.3671495516
 [S04 DEBUG] Target mode - k_32: 6812.292724627132
 [S04 DEBUG] Target mode - l_27: 51
 [S04] Calculated display values updated for target mode
 [S12DB] g_104 DISPLAY (target): 0.292
 [Section12] Calculated display values updated for target mode
 [DependencyGraph] Data loaded: 389 nodes, 663 links
 [DependencyGraph] Calculating node sizes...
 [CLOCK] Starting initial load timing
 [S13DEBUG] Reference GF HDD changed: ref_d_22=1960 → triggering Reference calculations
 [Section13] 🚀 CALCULATEALL TRIGGERED - Running dual-engine calculations...
 [Section13] 🎯 Mode captured at calculation start: target
 [Section13] 🔄 Starting Reference Model calculations...
 [Section13] Running Reference Model calculations...
 [S13 CONTAMINATION DEBUG] calculateReferenceModel: Using system type = Gas
 [S13] REF HEATING: system=Gas, ted=76416.21934585083, afue=0.9, cop=1
 [Section13] 🧊 COOLING CALC: mode=REF, coolingSystemType="Cooling", heatingType="Gas", isCoolingActive=true, coolingDemand=10192.893604542265
 [S13 CONTAMINATION DEBUG] storeReferenceResults called during target mode
 [S13 CONTAMINATION DEBUG] Reference heating system: Gas
 [S13 CONTAMINATION DEBUG] Target heating system: Heatpump
 [S13 CONTAMINATION DEBUG] Reference h_115 (gas volume): 8195.647720490222
 [S13 CONTAMINATION DEBUG] Reference f_115 (oil volume): 0
 [S13 CONTAMINATION DEBUG] Writing ref_f_115 = 0
 [S13 CONTAMINATION DEBUG] Writing ref_h_115 = 8195.647720490222
 [S04] S13 space gas volume changed (Reference): ref_h_115
 [S04] Row 32 Subtotals - F32: 132938, G32: 4785.768, J32: 190604.61477771553, K32: 6861.766131997759
 [S04] Reference model calculations complete
 [S04DB] storeReference: ref_j_32=190604.61477771553, ref_k_32=6861.766131997759 | current target j_32=133574.3671495516, k_32=6812.292724627132
 [S04] 🔄 Updating calculated display values for target mode
 [S04DB] displayContext mode=target j_32=133574.3671495516 ref_j_32=190604.61477771553 k_32=6812.292724627132 ref_k_32=6861.766131997759
 [S04 DEBUG] Target mode - j_32: 133574.3671495516
 [S04 DEBUG] Target mode - k_32: 6812.292724627132
 [S04 DEBUG] Target mode - l_27: 51
 [S04] Calculated display values updated for target mode
 [Section13] Reference results stored with ref_ prefix for downstream sections
 [S13 DEBUG] Total Reference results stored: 34
 [Section13] Reference Model calculations complete
 [Section13] ✅ Reference Model complete
 [Section13] 🔄 Starting Target Model calculations...
 [Section13] Running Target Model calculations...
 [S13] TGT HEATING: system=Heatpump, ted=119171.54798887548, afue=1, cop=3.663540445486518
 [Section13] 🧊 COOLING CALC: mode=TGT, coolingSystemType="Cooling", heatingType="Heatpump", isCoolingActive=true, coolingDemand=10192.893604542265
 [Section13] 🧊 COOLING RESULTS: d_117=3826.8214105081656, j_116=2.663540445486518, l_116=0, l_114=6366.0721940341
 [Section13] Target Model calculations complete
 [Section13] ✅ Target Model complete
 [Section13] ⏭️ Skipping Reference value re-write - triggered in target mode
 [Section13] 🎉 DUAL-ENGINE CALCULATIONS COMPLETE
 [S13DEBUG] Reference GF CDD changed: ref_h_22=-1680 → triggering Reference calculations
 [Section13] 🚀 CALCULATEALL TRIGGERED - Running dual-engine calculations...
 [Section13] 🎯 Mode captured at calculation start: target
 [Section13] 🔄 Starting Reference Model calculations...
 [Section13] Running Reference Model calculations...
 [S13 CONTAMINATION DEBUG] calculateReferenceModel: Using system type = Gas
 [S13] REF HEATING: system=Gas, ted=76416.21934585083, afue=0.9, cop=1
 [Section13] 🧊 COOLING CALC: mode=REF, coolingSystemType="Cooling", heatingType="Gas", isCoolingActive=true, coolingDemand=10192.893604542265
 [S13 CONTAMINATION DEBUG] storeReferenceResults called during target mode
 [S13 CONTAMINATION DEBUG] Reference heating system: Gas
 [S13 CONTAMINATION DEBUG] Target heating system: Heatpump
 [S13 CONTAMINATION DEBUG] Reference h_115 (gas volume): 8195.647720490222
 [S13 CONTAMINATION DEBUG] Reference f_115 (oil volume): 0
 [S13 CONTAMINATION DEBUG] Writing ref_f_115 = 0
 [S13 CONTAMINATION DEBUG] Writing ref_h_115 = 8195.647720490222
 [Section13] Reference results stored with ref_ prefix for downstream sections
 [S13 DEBUG] Total Reference results stored: 34
 [Section13] Reference Model calculations complete
 [Section13] ✅ Reference Model complete
 [Section13] 🔄 Starting Target Model calculations...
 [Section13] Running Target Model calculations...
 [S13] TGT HEATING: system=Heatpump, ted=119171.54798887548, afue=1, cop=3.663540445486518
 [Section13] 🧊 COOLING CALC: mode=TGT, coolingSystemType="Cooling", heatingType="Heatpump", isCoolingActive=true, coolingDemand=10192.893604542265
 [Section13] 🧊 COOLING RESULTS: d_117=3826.8214105081656, j_116=2.663540445486518, l_116=0, l_114=6366.0721940341
 [Section13] Target Model calculations complete
 [Section13] ✅ Target Model complete
 [Section13] ⏭️ Skipping Reference value re-write - triggered in target mode
 [Section13] 🎉 DUAL-ENGINE CALCULATIONS COMPLETE
 [S13DEBUG] Reference GF HDD changed: ref_d_22=1960 → triggering Reference calculations
 [Section13] 🚀 CALCULATEALL TRIGGERED - Running dual-engine calculations...
 [Section13] 🎯 Mode captured at calculation start: target
 [Section13] 🔄 Starting Reference Model calculations...
 [Section13] Running Reference Model calculations...
 [S13 CONTAMINATION DEBUG] calculateReferenceModel: Using system type = Gas
 [S13] REF HEATING: system=Gas, ted=76416.21934585083, afue=0.9, cop=1
 [Section13] 🧊 COOLING CALC: mode=REF, coolingSystemType="Cooling", heatingType="Gas", isCoolingActive=true, coolingDemand=10192.893604542265
 [S13 CONTAMINATION DEBUG] storeReferenceResults called during target mode
 [S13 CONTAMINATION DEBUG] Reference heating system: Gas
 [S13 CONTAMINATION DEBUG] Target heating system: Heatpump
 [S13 CONTAMINATION DEBUG] Reference h_115 (gas volume): 8195.647720490222
 [S13 CONTAMINATION DEBUG] Reference f_115 (oil volume): 0
 [S13 CONTAMINATION DEBUG] Writing ref_f_115 = 0
 [S13 CONTAMINATION DEBUG] Writing ref_h_115 = 8195.647720490222
 [Section13] Reference results stored with ref_ prefix for downstream sections
 [S13 DEBUG] Total Reference results stored: 34
 [Section13] Reference Model calculations complete
 [Section13] ✅ Reference Model complete
 [Section13] 🔄 Starting Target Model calculations...
 [Section13] Running Target Model calculations...
 [S13] TGT HEATING: system=Heatpump, ted=119171.54798887548, afue=1, cop=3.663540445486518
 [Section13] 🧊 COOLING CALC: mode=TGT, coolingSystemType="Cooling", heatingType="Heatpump", isCoolingActive=true, coolingDemand=10192.893604542265
 [Section13] 🧊 COOLING RESULTS: d_117=3826.8214105081656, j_116=2.663540445486518, l_116=0, l_114=6366.0721940341
 [Section13] Target Model calculations complete
 [Section13] ✅ Target Model complete
 [Section13] ⏭️ Skipping Reference value re-write - triggered in target mode
 [Section13] 🎉 DUAL-ENGINE CALCULATIONS COMPLETE
 [S13DEBUG] Reference GF CDD changed: ref_h_22=-1680 → triggering Reference calculations
 [Section13] 🚀 CALCULATEALL TRIGGERED - Running dual-engine calculations...
 [Section13] 🎯 Mode captured at calculation start: target
 [Section13] 🔄 Starting Reference Model calculations...
 [Section13] Running Reference Model calculations...
 [S13 CONTAMINATION DEBUG] calculateReferenceModel: Using system type = Gas
 [S13] REF HEATING: system=Gas, ted=76416.21934585083, afue=0.9, cop=1
 [Section13] 🧊 COOLING CALC: mode=REF, coolingSystemType="Cooling", heatingType="Gas", isCoolingActive=true, coolingDemand=10192.893604542265
 [S13 CONTAMINATION DEBUG] storeReferenceResults called during target mode
 [S13 CONTAMINATION DEBUG] Reference heating system: Gas
 [S13 CONTAMINATION DEBUG] Target heating system: Heatpump
 [S13 CONTAMINATION DEBUG] Reference h_115 (gas volume): 8195.647720490222
 [S13 CONTAMINATION DEBUG] Reference f_115 (oil volume): 0
 [S13 CONTAMINATION DEBUG] Writing ref_f_115 = 0
 [S13 CONTAMINATION DEBUG] Writing ref_h_115 = 8195.647720490222
 [Section13] Reference results stored with ref_ prefix for downstream sections
 [S13 DEBUG] Total Reference results stored: 34
 [Section13] Reference Model calculations complete
 [Section13] ✅ Reference Model complete
 [Section13] 🔄 Starting Target Model calculations...
 [Section13] Running Target Model calculations...
 [S13] TGT HEATING: system=Heatpump, ted=119171.54798887548, afue=1, cop=3.663540445486518
 [Section13] 🧊 COOLING CALC: mode=TGT, coolingSystemType="Cooling", heatingType="Heatpump", isCoolingActive=true, coolingDemand=10192.893604542265
 [Section13] 🧊 COOLING RESULTS: d_117=3826.8214105081656, j_116=2.663540445486518, l_116=0, l_114=6366.0721940341
 [Section13] Target Model calculations complete
 [Section13] ✅ Target Model complete
 [Section13] ⏭️ Skipping Reference value re-write - triggered in target mode
 [Section13] 🎉 DUAL-ENGINE CALCULATIONS COMPLETE
 S12 ReferenceState: Saved state after user changed d_101 to 2476.6199999999994
 S12 ReferenceState: Saved state after user changed d_102 to 1100.42
 S12 ReferenceState: Saved state after user changed d_106 to 1130.1200000000001
 S12 ReferenceState: Saved state after user changed g_105 to 3.3109641366055356
 S12 ReferenceState: Saved state after user changed i_105 to 0.3020268292682926
 [S12] U-agg REF: TB%=0 → g_101=0.231951, g_102=0.270270
 S12 ReferenceState: Saved state after user changed g_101 to 0.23195088553974055
 S12 ReferenceState: Saved state after user changed g_102 to 0.27027027027027023
 S12 ReferenceState: Saved state after user changed g_104 to 0.24373924053302254
 S12 ReferenceState: Saved state after user changed d_107 to 0.3306074546990893
 S12 ReferenceState: Saved state after user changed l_107 to 0.8265186367477232
 S12 ReferenceState: Saved state after user changed i_110 to 2
 S12 ReferenceState: Saved state after user changed g_110 to 16.7
 S12 ReferenceState: Saved state after user changed g_108 to 1.8394245203364086
 S12 ReferenceState: Saved state after user changed d_109 to 1.9999999999999998
 S12 ReferenceState: Saved state after user changed l_109 to 1.0000000000000002
 S12 ReferenceState: Saved state after user changed d_110 to 4.5555555555555545
 S12 ReferenceState: Saved state after user changed l_110 to 2.711640211640211
 S12 ReferenceState: Saved state after user changed i_103 to 36440.079840319355
 S12 ReferenceState: Saved state after user changed k_103 to 1552.6642714570858
 [S12DB] REF CLIMATE: d_20=4600, d_21=196, d_22=1960, h_22=-1680
 [S12DB] REF h_101 calc: (4600*0.23195088553974055*24)/1000 = 25.607377763587355
 [S12DB] REF i_101 result: 25.607377763587355 * 2476.6199999999994 = 63419.7439168557
 S12 ReferenceState: Saved state after user changed h_101 to 25.607377763587355
 S12 ReferenceState: Saved state after user changed i_101 to 63419.7439168557
 S12 ReferenceState: Saved state after user changed j_101 to 1.0910969655789395
 S12 ReferenceState: Saved state after user changed k_101 to 2702.2325668921126
 S12 ReferenceState: Saved state after user changed h_102 to 12.713513513513513
 S12 ReferenceState: Saved state after user changed i_102 to 13990.20454054054
 S12 ReferenceState: Saved state after user changed j_102 to -10.897297297297296
 S12 ReferenceState: Saved state after user changed k_102 to -11991.603891891891
 [S12DB] REF g_104 calc: (0.23195088553974055*2476.6199999999994 + 0.27027027027027023*1100.42)/3577.0400009999994 = 0.24373924046488266
 [S12DB] REF ROW104: i_101=63419.7439168557, i_102=13990.20454054054, i_103=36440.079840319355 → i_104=113850.02829771559
 [S12DB] REF ROW104: h_21="Capacitance", k_98=-4267.625965209389 → k_104=-4267.625965209389
 S12 ReferenceState: Saved state after user changed g_104 to 0.24373924046488266
 S12 ReferenceState: Saved state after user changed i_104 to 113850.02829771559
 S12 ReferenceState: Saved state after user changed k_104 to -4267.625965209389
 S12 ReferenceState: Saved state after user changed l_101 to 0.5570463605947845
 S12 ReferenceState: Saved state after user changed l_102 to 0.12288274978690765
 S12 ReferenceState: Saved state after user changed l_103 to 0.3200708896183079
 S12 ReferenceState: Saved state after user changed l_104 to 1
 [S12DB] STORED for S15: ref_d_101=2476.6199999999994
 [S12DB] STORED for S15: ref_d_102=1100.42
 [S12DB] STORED for S15: ref_g_101=0.23195088553974055
 [S12DB] STORED for S15: ref_g_102=0.27027027027027023
 [S12DB] STORED for S15: ref_g_104=0.24373924046488266
 [S12DB] STORED for S15: ref_i_101=63419.7439168557
 [S12DB] STORED for S15: ref_i_102=13990.20454054054
 [S12DB] STORED for S15: ref_i_104=113850.02829771559
 [Section12] Reference results stored with ref_ prefix for downstream sections
 S12 ReferenceState: Saved state after user changed d_101 to 2476.6199999999994
 S12 ReferenceState: Saved state after user changed d_102 to 1100.42
 S12 ReferenceState: Saved state after user changed d_106 to 1130.1200000000001
 S12 ReferenceState: Saved state after user changed g_105 to 3.230208913761498
 S12 ReferenceState: Saved state after user changed i_105 to 0.30957749999999995
 [S12] U-agg TGT: TB%=20 → g_101=0.278341, g_102=0.324324
 S12 ReferenceState: Saved state after user changed g_101 to 0.27834106264768865
 S12 ReferenceState: Saved state after user changed g_102 to 0.3243243243243243
 S12 ReferenceState: Saved state after user changed g_104 to 0.2924870886396271
 S12 ReferenceState: Saved state after user changed d_107 to 0.3306074546990893
 S12 ReferenceState: Saved state after user changed l_107 to 0.8265186367477232
 S12 ReferenceState: Saved state after user changed i_110 to 2
 S12 ReferenceState: Saved state after user changed g_110 to 16.7
 S12 ReferenceState: Saved state after user changed g_108 to 1.17
 S12 ReferenceState: Saved state after user changed d_109 to 1.3039404299999997
 S12 ReferenceState: Saved state after user changed l_109 to 1
 S12 ReferenceState: Saved state after user changed d_110 to 2.897645399999999
 S12 ReferenceState: Saved state after user changed l_110 to 1.7247889285714282
 S12 ReferenceState: Saved state after user changed i_103 to 23178.387012790416
 S10: Reference listener triggered by ref_i_103, recalculating all.
 [S14 DEBUG] ✅ Converted to numbers - ref_d_127 calculation: 12677.97883758859 + 63389.89418794294 + 23178.387012790416 + 84603.19999999995 - 120694.93352
 [S14 DEBUG] ✅ ref_d_127 = 63154.5265183219 (should be numeric, not NaN)
 [S14 DEBUG] ✅ Stored ref_d_127 = 63154.5265183219 in StateManager
 [S14 DEBUG] 🔄 Continuing with other Reference calculations...
 [S14 DEBUG] ref_d_128 calculation: 12677.97883758859 + 63389.89418794294 + 23178.387012790416 - 120694.93352 = -21448.67348167805
 [S14 DEBUG] ✅ Converted to numbers - ref_d_127 calculation: 12677.97883758859 + 63389.89418794294 + 23178.387012790416 + 84603.19999999995 - 120694.93352
 [S14 DEBUG] ✅ ref_d_127 = 63154.5265183219 (should be numeric, not NaN)
 [S14 DEBUG] ✅ Stored ref_d_127 = 63154.5265183219 in StateManager
 [S14 DEBUG] 🔄 Continuing with other Reference calculations...
 [S14 DEBUG] ref_d_128 calculation: 12677.97883758859 + 63389.89418794294 + 23178.387012790416 - 120694.93352 = -21448.67348167805
 [S14 DEBUG] ✅ Converted to numbers - ref_d_127 calculation: 12677.97883758859 + 63389.89418794294 + 23178.387012790416 + 84603.19999999995 - 120694.93352
 [S14 DEBUG] ✅ ref_d_127 = 63154.5265183219 (should be numeric, not NaN)
 [S14 DEBUG] ✅ Stored ref_d_127 = 63154.5265183219 in StateManager
 [S14 DEBUG] 🔄 Continuing with other Reference calculations...
 [S14 DEBUG] ref_d_128 calculation: 12677.97883758859 + 63389.89418794294 + 23178.387012790416 - 120694.93352 = -21448.67348167805
 [S14 DEBUG] ✅ Converted to numbers - ref_d_127 calculation: 12677.97883758859 + 63389.89418794294 + 23178.387012790416 + 84603.19999999995 - 120694.93352
 [S14 DEBUG] ✅ ref_d_127 = 63154.5265183219 (should be numeric, not NaN)
 [S14 DEBUG] ✅ Stored ref_d_127 = 63154.5265183219 in StateManager
 [S14 DEBUG] 🔄 Continuing with other Reference calculations...
 [S14 DEBUG] ref_d_128 calculation: 12677.97883758859 + 63389.89418794294 + 23178.387012790416 - 120694.93352 = -21448.67348167805
 S10: Reference utilization factor dependency ref_i_103 changed.
 [S14 DEBUG] ✅ Converted to numbers - ref_d_127 calculation: 12677.97883758859 + 63389.89418794294 + 23178.387012790416 + 84603.19999999995 - 120694.93352
 [S14 DEBUG] ✅ ref_d_127 = 63154.5265183219 (should be numeric, not NaN)
 [S14 DEBUG] ✅ Stored ref_d_127 = 63154.5265183219 in StateManager
 [S14 DEBUG] 🔄 Continuing with other Reference calculations...
 [S14 DEBUG] ref_d_128 calculation: 12677.97883758859 + 63389.89418794294 + 23178.387012790416 - 120694.93352 = -21448.67348167805
 [S14 DEBUG] ✅ Converted to numbers - ref_d_127 calculation: 12677.97883758859 + 63389.89418794294 + 23178.387012790416 + 84603.19999999995 - 120694.93352
 [S14 DEBUG] ✅ ref_d_127 = 63154.5265183219 (should be numeric, not NaN)
 [S14 DEBUG] ✅ Stored ref_d_127 = 63154.5265183219 in StateManager
 [S14 DEBUG] 🔄 Continuing with other Reference calculations...
 [S14 DEBUG] ref_d_128 calculation: 12677.97883758859 + 63389.89418794294 + 23178.387012790416 - 120694.93352 = -21448.67348167805
 S12 ReferenceState: Saved state after user changed k_103 to 987.6008379362872
 [S14 DEBUG] ✅ Converted to numbers - ref_d_127 calculation: 12677.97883758859 + 63389.89418794294 + 23178.387012790416 + 84603.19999999995 - 120694.93352
 [S14 DEBUG] ✅ ref_d_127 = 63154.5265183219 (should be numeric, not NaN)
 [S14 DEBUG] ✅ Stored ref_d_127 = 63154.5265183219 in StateManager
 [S14 DEBUG] 🔄 Continuing with other Reference calculations...
 [S14 DEBUG] ref_d_128 calculation: 12677.97883758859 + 63389.89418794294 + 23178.387012790416 - 120694.93352 = -21448.67348167805
 [S14 DEBUG] ✅ Converted to numbers - ref_d_127 calculation: 12677.97883758859 + 63389.89418794294 + 23178.387012790416 + 84603.19999999995 - 120694.93352
 [S14 DEBUG] ✅ ref_d_127 = 63154.5265183219 (should be numeric, not NaN)
 [S14 DEBUG] ✅ Stored ref_d_127 = 63154.5265183219 in StateManager
 [S14 DEBUG] 🔄 Continuing with other Reference calculations...
 [S14 DEBUG] ref_d_128 calculation: 12677.97883758859 + 63389.89418794294 + 23178.387012790416 - 120694.93352 = -21448.67348167805
 [S12DB] TGT CLIMATE: d_20=4600, d_21=196, d_22=1960, h_22=-1680
 [S12DB] TGT h_101 calc: (4600*0.27834106264768865*24)/1000 = 30.72885331630483
 [S12DB] TGT i_101 result: 30.72885331630483 * 2476.6199999999994 = 76103.69270022685
 S12 ReferenceState: Saved state after user changed h_101 to 30.72885331630483
 S12 ReferenceState: Saved state after user changed i_101 to 76103.69270022685
 S12 ReferenceState: Saved state after user changed j_101 to 1.3093163586947276
 S12 ReferenceState: Saved state after user changed k_101 to 3242.6790802705355
 S12 ReferenceState: Saved state after user changed h_102 to 15.256216216216215
 S12 ReferenceState: Saved state after user changed i_102 to 16788.24544864865
 S12 ReferenceState: Saved state after user changed j_102 to -13.076756756756755
 S12 ReferenceState: Saved state after user changed k_102 to -14389.92467027027
 [S12DB] TGT g_104 calc: (0.27834106264768865*2476.6199999999994 + 0.3243243243243243*1100.42)/3577.0400009999994 = 0.29248708855785915
 [S12DB] TGT ROW104: i_101=76103.69270022685, i_102=16788.24544864865, i_103=23178.387012790416 → i_104=116070.32516166591
 [S12DB] TGT ROW104: h_21="Capacitance", k_98=-3293.5693790538335 → k_104=-3293.5693790538335
 S12 ReferenceState: Saved state after user changed g_104 to 0.29248708855785915
 S12 ReferenceState: Saved state after user changed i_104 to 116070.32516166591
 [S04] S15 reference electricity changed: ref_d_136
 [S04] Starting dual-engine Excel-compliant calculations
 [S04] Row 32 Subtotals - F32: 132938, G32: 6779.838, J32: 133574.3671495516, K32: 6812.292724627132
 [S04] j_32 update: 133574.3671495516
 [S04] Row 32 Subtotals - F32: 132938, G32: 4785.768, J32: 192824.91164166585, K32: 6941.6968190999705
2 🔄 [S05] updateCalculatedDisplayValues: mode=target
 [S04] Reference model calculations complete
 [S04DB] storeReference: ref_j_32=192824.91164166585, ref_k_32=6941.6968190999705 | current target j_32=133574.3671495516, k_32=6812.292724627132
 [S04] 🔄 Updating calculated display values for target mode
 [S04DB] displayContext mode=target j_32=133574.3671495516 ref_j_32=192824.91164166585 k_32=6812.292724627132 ref_k_32=6941.6968190999705
 [S04 DEBUG] Target mode - j_32: 133574.3671495516
 [S04 DEBUG] Target mode - k_32: 6812.292724627132
 [S04 DEBUG] Target mode - l_27: 51
 [S04] Calculated display values updated for target mode
 [S04] Dual-engine calculations completed successfully
 [S04] 🔄 Updating calculated display values for target mode
 [S04DB] displayContext mode=target j_32=133574.3671495516 ref_j_32=192824.91164166585 k_32=6812.292724627132 ref_k_32=6941.6968190999705
 [S04 DEBUG] Target mode - j_32: 133574.3671495516
 [S04 DEBUG] Target mode - k_32: 6812.292724627132
 [S04 DEBUG] Target mode - l_27: 51
 [S04] Calculated display values updated for target mode
 S12 ReferenceState: Saved state after user changed k_104 to -3293.5693790538335
 S12 ReferenceState: Saved state after user changed l_101 to 0.6556688162476287
 S12 ReferenceState: Saved state after user changed l_102 to 0.1446385665351202
 S12 ReferenceState: Saved state after user changed l_103 to 0.19969261721725107
 S12 ReferenceState: Saved state after user changed l_104 to 1
 S10: Reference listener triggered by ref_i_103, recalculating all.
 [S14 DEBUG] ✅ Converted to numbers - ref_d_127 calculation: 12677.97883758859 + 63389.89418794294 + 36440.079840319355 + 84603.19999999995 - 120694.93352
 [S14 DEBUG] ✅ ref_d_127 = 76416.21934585083 (should be numeric, not NaN)
 [S14 DEBUG] ✅ Stored ref_d_127 = 76416.21934585083 in StateManager
 [S14 DEBUG] 🔄 Continuing with other Reference calculations...
 [S14 DEBUG] ref_d_128 calculation: 12677.97883758859 + 63389.89418794294 + 36440.079840319355 - 120694.93352 = -8186.980654149127
 [S14 DEBUG] ✅ Converted to numbers - ref_d_127 calculation: 12677.97883758859 + 63389.89418794294 + 36440.079840319355 + 84603.19999999995 - 120694.93352
 [S14 DEBUG] ✅ ref_d_127 = 76416.21934585083 (should be numeric, not NaN)
 [S14 DEBUG] ✅ Stored ref_d_127 = 76416.21934585083 in StateManager
 [S14 DEBUG] 🔄 Continuing with other Reference calculations...
 [S14 DEBUG] ref_d_128 calculation: 12677.97883758859 + 63389.89418794294 + 36440.079840319355 - 120694.93352 = -8186.980654149127
 [S14 DEBUG] ✅ Converted to numbers - ref_d_127 calculation: 12677.97883758859 + 63389.89418794294 + 36440.079840319355 + 84603.19999999995 - 120694.93352
 [S14 DEBUG] ✅ ref_d_127 = 76416.21934585083 (should be numeric, not NaN)
 [S14 DEBUG] ✅ Stored ref_d_127 = 76416.21934585083 in StateManager
 [S14 DEBUG] 🔄 Continuing with other Reference calculations...
 [S14 DEBUG] ref_d_128 calculation: 12677.97883758859 + 63389.89418794294 + 36440.079840319355 - 120694.93352 = -8186.980654149127
 [S14 DEBUG] ✅ Converted to numbers - ref_d_127 calculation: 12677.97883758859 + 63389.89418794294 + 36440.079840319355 + 84603.19999999995 - 120694.93352
 [S14 DEBUG] ✅ ref_d_127 = 76416.21934585083 (should be numeric, not NaN)
 [S14 DEBUG] ✅ Stored ref_d_127 = 76416.21934585083 in StateManager
 [S14 DEBUG] 🔄 Continuing with other Reference calculations...
 [S14 DEBUG] ref_d_128 calculation: 12677.97883758859 + 63389.89418794294 + 36440.079840319355 - 120694.93352 = -8186.980654149127
 S10: Reference utilization factor dependency ref_i_103 changed.
 [S14 DEBUG] ✅ Converted to numbers - ref_d_127 calculation: 12677.97883758859 + 63389.89418794294 + 36440.079840319355 + 84603.19999999995 - 120694.93352
 [S14 DEBUG] ✅ ref_d_127 = 76416.21934585083 (should be numeric, not NaN)
 [S14 DEBUG] ✅ Stored ref_d_127 = 76416.21934585083 in StateManager
 [S14 DEBUG] 🔄 Continuing with other Reference calculations...
 [S14 DEBUG] ref_d_128 calculation: 12677.97883758859 + 63389.89418794294 + 36440.079840319355 - 120694.93352 = -8186.980654149127
 [S14 DEBUG] ✅ Converted to numbers - ref_d_127 calculation: 12677.97883758859 + 63389.89418794294 + 36440.079840319355 + 84603.19999999995 - 120694.93352
 [S14 DEBUG] ✅ ref_d_127 = 76416.21934585083 (should be numeric, not NaN)
 [S14 DEBUG] ✅ Stored ref_d_127 = 76416.21934585083 in StateManager
 [S14 DEBUG] 🔄 Continuing with other Reference calculations...
 [S14 DEBUG] ref_d_128 calculation: 12677.97883758859 + 63389.89418794294 + 36440.079840319355 - 120694.93352 = -8186.980654149127
 [S14 DEBUG] ✅ Converted to numbers - ref_d_127 calculation: 12677.97883758859 + 63389.89418794294 + 36440.079840319355 + 84603.19999999995 - 120694.93352
 [S14 DEBUG] ✅ ref_d_127 = 76416.21934585083 (should be numeric, not NaN)
 [S14 DEBUG] ✅ Stored ref_d_127 = 76416.21934585083 in StateManager
 [S14 DEBUG] 🔄 Continuing with other Reference calculations...
 [S14 DEBUG] ref_d_128 calculation: 12677.97883758859 + 63389.89418794294 + 36440.079840319355 - 120694.93352 = -8186.980654149127
 [S14 DEBUG] ✅ Converted to numbers - ref_d_127 calculation: 12677.97883758859 + 63389.89418794294 + 36440.079840319355 + 84603.19999999995 - 120694.93352
 [S14 DEBUG] ✅ ref_d_127 = 76416.21934585083 (should be numeric, not NaN)
 [S14 DEBUG] ✅ Stored ref_d_127 = 76416.21934585083 in StateManager
 [S14 DEBUG] 🔄 Continuing with other Reference calculations...
 [S14 DEBUG] ref_d_128 calculation: 12677.97883758859 + 63389.89418794294 + 36440.079840319355 - 120694.93352 = -8186.980654149127
 [S04] S15 reference electricity changed: ref_d_136
 [S04] Starting dual-engine Excel-compliant calculations
 [S04] Row 32 Subtotals - F32: 132938, G32: 6779.838, J32: 133574.3671495516, K32: 6812.292724627132
 [S04] j_32 update: 133574.3671495516
 [S04] Row 32 Subtotals - F32: 132938, G32: 4785.768, J32: 190604.61477771553, K32: 6861.766131997759
2 🔄 [S05] updateCalculatedDisplayValues: mode=target
 [S04] Reference model calculations complete
 [S04DB] storeReference: ref_j_32=190604.61477771553, ref_k_32=6861.766131997759 | current target j_32=133574.3671495516, k_32=6812.292724627132
4011-Section04.js:450 [S04] 🔄 Updating calculated display values for target mode
4011-Section04.js:458 [S04DB] displayContext mode=target j_32=133574.3671495516 ref_j_32=190604.61477771553 k_32=6812.292724627132 ref_k_32=6861.766131997759
4011-Section04.js:539 [S04 DEBUG] Target mode - j_32: 133574.3671495516
4011-Section04.js:539 [S04 DEBUG] Target mode - k_32: 6812.292724627132
4011-Section04.js:539 [S04 DEBUG] Target mode - l_27: 51
4011-Section04.js:574 [S04] Calculated display values updated for target mode
4011-Section04.js:1556 [S04] Dual-engine calculations completed successfully
4011-Section04.js:450 [S04] 🔄 Updating calculated display values for target mode
4011-Section04.js:458 [S04DB] displayContext mode=target j_32=133574.3671495516 ref_j_32=190604.61477771553 k_32=6812.292724627132 ref_k_32=6861.766131997759
4011-Section04.js:539 [S04 DEBUG] Target mode - j_32: 133574.3671495516
4011-Section04.js:539 [S04 DEBUG] Target mode - k_32: 6812.292724627132
4011-Section04.js:539 [S04 DEBUG] Target mode - l_27: 51
4011-Section04.js:574 [S04] Calculated display values updated for target mode
4011-Section12.js:273 [S12DB] g_104 DISPLAY (target): 0.292
4011-Section12.js:277 [Section12] Calculated display values updated for target mode
4011-Section14.js:986 [S14 DEBUG] ✅ Converted to numbers - ref_d_127 calculation: 12677.97883758859 + 63389.89418794294 + 36440.079840319355 + 84603.19999999995 - 120694.93352
4011-Section14.js:993 [S14 DEBUG] ✅ ref_d_127 = 76416.21934585083 (should be numeric, not NaN)
4011-Section14.js:1003 [S14 DEBUG] ✅ Stored ref_d_127 = 76416.21934585083 in StateManager
4011-Section14.js:1006 [S14 DEBUG] 🔄 Continuing with other Reference calculations...
4011-Section14.js:1021 [S14 DEBUG] ref_d_128 calculation: 12677.97883758859 + 63389.89418794294 + 36440.079840319355 - 120694.93352 = -8186.980654149127
4011-Section14.js:986 [S14 DEBUG] ✅ Converted to numbers - ref_d_127 calculation: 12677.97883758859 + 63389.89418794294 + 36440.079840319355 + 84603.19999999995 - 120694.93352
4011-Section14.js:993 [S14 DEBUG] ✅ ref_d_127 = 76416.21934585083 (should be numeric, not NaN)
4011-Section14.js:1003 [S14 DEBUG] ✅ Stored ref_d_127 = 76416.21934585083 in StateManager
4011-Section14.js:1006 [S14 DEBUG] 🔄 Continuing with other Reference calculations...
4011-Section14.js:1021 [S14 DEBUG] ref_d_128 calculation: 12677.97883758859 + 63389.89418794294 + 36440.079840319355 - 120694.93352 = -8186.980654149127
4011-Section14.js:986 [S14 DEBUG] ✅ Converted to numbers - ref_d_127 calculation: 12677.97883758859 + 63389.89418794294 + 36440.079840319355 + 84603.19999999995 - 120694.93352
4011-Section14.js:993 [S14 DEBUG] ✅ ref_d_127 = 76416.21934585083 (should be numeric, not NaN)
4011-Section14.js:1003 [S14 DEBUG] ✅ Stored ref_d_127 = 76416.21934585083 in StateManager
4011-Section14.js:1006 [S14 DEBUG] 🔄 Continuing with other Reference calculations...
4011-Section14.js:1021 [S14 DEBUG] ref_d_128 calculation: 12677.97883758859 + 63389.89418794294 + 36440.079840319355 - 120694.93352 = -8186.980654149127
4011-Section14.js:986 [S14 DEBUG] ✅ Converted to numbers - ref_d_127 calculation: 12677.97883758859 + 63389.89418794294 + 36440.079840319355 + 84603.19999999995 - 120694.93352
4011-Section14.js:993 [S14 DEBUG] ✅ ref_d_127 = 76416.21934585083 (should be numeric, not NaN)
4011-Section14.js:1003 [S14 DEBUG] ✅ Stored ref_d_127 = 76416.21934585083 in StateManager
4011-Section14.js:1006 [S14 DEBUG] 🔄 Continuing with other Reference calculations...
4011-Section14.js:1021 [S14 DEBUG] ref_d_128 calculation: 12677.97883758859 + 63389.89418794294 + 36440.079840319355 - 120694.93352 = -8186.980654149127
4011-Section07.js:806 [S07] calculateEmissionsAndLosses: systemType="Heatpump" (TGT)
4011-Section07.js:841 [S07] ⚡ Non-fossil fuel: Heatpump → e_51=0, k_54=0 (both cleared)
4011-Section07.js:806 [S07] calculateEmissionsAndLosses: systemType="Heatpump" (REF)
4011-Section07.js:841 [S07] ⚡ Non-fossil fuel: Heatpump → e_51=0, k_54=0 (both cleared)
4011-Section13.js:2910 [Section13] 🚀 CALCULATEALL TRIGGERED - Running dual-engine calculations...
4011-Section13.js:2916 [Section13] 🎯 Mode captured at calculation start: target
4011-Section13.js:2922 [Section13] 🔄 Starting Reference Model calculations...
4011-Section13.js:2972 [Section13] Running Reference Model calculations...
4011-Section13.js:2986 [S13 CONTAMINATION DEBUG] calculateReferenceModel: Using system type = Gas
4011-Section13.js:2439 [S13] REF HEATING: system=Gas, ted=76416.21934585083, afue=0.9, cop=1
4011-Section13.js:2530 [Section13] 🧊 COOLING CALC: mode=REF, coolingSystemType="Cooling", heatingType="Gas", isCoolingActive=true, coolingDemand=10192.893604542265
4011-Section13.js:3234 [S13 CONTAMINATION DEBUG] storeReferenceResults called during target mode
4011-Section13.js:3237 [S13 CONTAMINATION DEBUG] Reference heating system: Gas
4011-Section13.js:3240 [S13 CONTAMINATION DEBUG] Target heating system: Heatpump
4011-Section13.js:3243 [S13 CONTAMINATION DEBUG] Reference h_115 (gas volume): 8195.647720490222
4011-Section13.js:3246 [S13 CONTAMINATION DEBUG] Reference f_115 (oil volume): 0
4011-Section13.js:3258 [S13 CONTAMINATION DEBUG] Writing ref_f_115 = 0
4011-Section13.js:3258 [S13 CONTAMINATION DEBUG] Writing ref_h_115 = 8195.647720490222
4011-Section13.js:3270 [Section13] Reference results stored with ref_ prefix for downstream sections
4011-Section13.js:3273 [S13 DEBUG] Total Reference results stored: 34
4011-Section13.js:3019 [Section13] Reference Model calculations complete
4011-Section13.js:2924 [Section13] ✅ Reference Model complete
4011-Section13.js:2926 [Section13] 🔄 Starting Target Model calculations...
4011-Section13.js:3033 [Section13] Running Target Model calculations...
4011-Section13.js:2439 [S13] TGT HEATING: system=Heatpump, ted=119171.54798887548, afue=1, cop=3.663540445486518
4011-Section13.js:2530 [Section13] 🧊 COOLING CALC: mode=TGT, coolingSystemType="Cooling", heatingType="Heatpump", isCoolingActive=true, coolingDemand=10192.893604542265
4011-Section13.js:2591 [Section13] 🧊 COOLING RESULTS: d_117=3826.8214105081656, j_116=2.663540445486518, l_116=0, l_114=6366.0721940341
4011-Section13.js:3072 [Section13] Target Model calculations complete
4011-Section13.js:2928 [Section13] ✅ Target Model complete
4011-Section13.js:2955 [Section13] ⏭️ Skipping Reference value re-write - triggered in target mode
4011-Section13.js:2961 [Section13] 🎉 DUAL-ENGINE CALCULATIONS COMPLETE
4011-Section06.js:513 🟢 [S06-TAR] Storing d_43 = 0 (from d_44=0, d_45=0, d_46=0)
4011-Section06.js:508 🔵 [S06-REF] Storing ref_d_43 = 0 (from d_44=0, d_45=0, d_46=0)
4011-Section14.js:986 [S14 DEBUG] ✅ Converted to numbers - ref_d_127 calculation: 12677.97883758859 + 63389.89418794294 + 36440.079840319355 + 84603.19999999995 - 120694.93352
4011-Section14.js:993 [S14 DEBUG] ✅ ref_d_127 = 76416.21934585083 (should be numeric, not NaN)
4011-Section14.js:1003 [S14 DEBUG] ✅ Stored ref_d_127 = 76416.21934585083 in StateManager
4011-Section14.js:1006 [S14 DEBUG] 🔄 Continuing with other Reference calculations...
4011-Section14.js:1021 [S14 DEBUG] ref_d_128 calculation: 12677.97883758859 + 63389.89418794294 + 36440.079840319355 - 120694.93352 = -8186.980654149127
4011-Section04.js:1534 [S04] Starting dual-engine Excel-compliant calculations
4011-Section04.js:975 [S04] Row 32 Subtotals - F32: 132938, G32: 6779.838, J32: 133574.3671495516, K32: 6812.292724627132
4011-Section04.js:94 [S04] j_32 update: 133574.3671495516
4011-Section04.js:975 [S04] Row 32 Subtotals - F32: 132938, G32: 4785.768, J32: 190604.61477771553, K32: 6861.766131997759
4011-Section04.js:1625 [S04] Reference model calculations complete
4011-Section04.js:1631 [S04DB] storeReference: ref_j_32=190604.61477771553, ref_k_32=6861.766131997759 | current target j_32=133574.3671495516, k_32=6812.292724627132
4011-Section04.js:450 [S04] 🔄 Updating calculated display values for target mode
4011-Section04.js:458 [S04DB] displayContext mode=target j_32=133574.3671495516 ref_j_32=190604.61477771553 k_32=6812.292724627132 ref_k_32=6861.766131997759
4011-Section04.js:539 [S04 DEBUG] Target mode - j_32: 133574.3671495516
4011-Section04.js:539 [S04 DEBUG] Target mode - k_32: 6812.292724627132
4011-Section04.js:539 [S04 DEBUG] Target mode - l_27: 51
4011-Section04.js:574 [S04] Calculated display values updated for target mode
4011-Section04.js:1556 [S04] Dual-engine calculations completed successfully
4011-Dependency.js:116 [DependencyGraph] Data loaded: 389 nodes, 663 links
4011-Dependency.js:718 [DependencyGraph] Calculating node sizes...
4011-Section01.js:1014 [S01DB] upstream snapshot Object
4011-Section01.js:574 🔍 [S01DB] updateTEUIDisplay START: e_10=341.2, h_10=93.0, useType=Utility Bills
4011-Section01.js:729 🔍 [S01DB] UPDATING h_10: 93.6 (from j_32=133574.3671495516, area=1427.2)
4011-Clock.js:59 🕐 [CLOCK] ⭐ INITIALIZATION COMPLETE: 655ms (all calculations finalized)
4011-Section01.js:1032 ✅ [S01] CALCULATION CHAIN COMPLETE - All values finalized including h_10