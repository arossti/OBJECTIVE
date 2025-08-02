4011-MobileDetect.js:113 Desktop device detected
4011-Section18.js:6 Section 18 (Notes) placeholder loaded.
 S02: Saved Target state to localStorage
 [S02] Reference results stored with ref_ prefix for downstream sections
 S02: Target defaults set (2022 reporting year) - overriding any localStorage empties
 S02: Reference defaults set (2020 reporting year) - overriding any localStorage empties
 S02: Loaded and merged Target state from localStorage
 [S02] Stored default energy costs in StateManager: {l_12: '0.1300', l_13: '0.5070', l_14: '1.6200', l_15: '180.00', l_16: '1.5000'}
 S02: Pattern A initialization complete.
 S02: Saved Target state to localStorage
 [S02] Reference results stored with ref_ prefix for downstream sections
 ✅ S02: Header controls injected successfully
 [S02] Reference results stored with ref_ prefix for downstream sections
 [S02] Refreshing UI for TARGET mode
 [S02] Updated d_13 dropdown = "OBC SB10 5.5-6 Z6" (target mode)
 [S02] Updated d_15 dropdown = "Self Reported" (target mode)
 [S02] Updated h_12 (reporting year) slider = "2022" (target mode)
 [S02] Updated h_15 = "1427.2" (target mode)
 [S02] Updated i_17 = "" (target mode)
 [S02] Updated l_12 = "$0.1300" (target mode)
 [S02] Updated l_13 = "$0.5070" (target mode)
 [S02] Updated l_14 = "$1.6200" (target mode)
 [S02] Updated l_15 = "$180.00" (target mode)
 [S02] Updated l_16 = "$1.5000" (target mode)
 S03: Sliders initialized via FieldManager
 S03: Section rendered - initializing Self-Contained State Module.
 S03: Header controls setup complete
 S03: ModeManager exposed globally for cross-section integration.
 S03: Checking climate data availability (attempt 1/10)
 S03: Climate data available (8) ['BC', 'AB', 'SK', 'MB', 'ON', 'QC', 'NU', 'NT']
 S03: ClimateData available - initializing dropdowns
 S03: Populated province dropdown with options: (8) ['AB', 'BC', 'MB', 'NT', 'NU', 'ON', 'QC', 'SK']
 S03: Synced province "ON" to StateManager for cross-section communication
 City dropdown updated for ON - selected: Alexandria
 S03: Sliders initialized via FieldManager
 [Section03] Running Reference Model calculations...
 [Section03] Reference results stored with ref_ prefix for downstream sections: {h_23: '18', d_23: undefined, d_24: undefined, h_24: '24', d_20: undefined, …}
 [Section03] Reference Model calculations complete
 S03: Weather data updated for Alexandria, ON (Present)
 Section03: Province selected: ON
 S03: Synced province change "ON" to StateManager for S04 listeners
 City dropdown updated for ON - selected: Alexandria
 [Section03] Running Reference Model calculations...
 [Section03] Reference results stored with ref_ prefix for downstream sections: {h_23: '18', d_23: undefined, d_24: undefined, h_24: '24', d_20: undefined, …}
 [Section03] Reference Model calculations complete
 S03: Weather data updated for Alexandria, ON (Present)
 [Section03] Running Reference Model calculations...
 [Section03] Reference results stored with ref_ prefix for downstream sections: {h_23: '18', d_23: undefined, d_24: undefined, h_24: '24', d_20: undefined, …}
4011-Section03.js:1318 [Section03] Reference Model calculations complete
4011-Section03.js:1934 S03: Self-Contained State Module initialization complete
4011-Section04.js:1583 [S04] Pattern A S04 section rendered
4011-Section04.js:199 S04: Initializing Pattern A ModeManager
4011-Section04.js:85 S04: TargetState defaults set
4011-Section04.js:103 S04: TargetState loaded from localStorage
4011-Section04.js:156 S04: ReferenceState defaults set
4011-Section04.js:202 S04: Pattern A initialization complete
4011-Section04.js:385 ✅ S04: Header controls injected successfully
4011-Section04.js:771 [S04] Starting dual-engine Excel-compliant calculations
4011-Section04.js:779 [S04] Calculating Target model
4011-Section04.js:679 [S04] Row 32 Subtotals - F32: 0, G32: 0, J32: 0, K32: 0
4011-Section04.js:792 [S04] Calculation error: ReferenceError: DualState is not defined
    at calculateRow35 (4011-Section04.js:747:18)
    at calculateTargetModel (4011-Section04.js:809:5)
    at calculateAll (4011-Section04.js:780:7)
    at Object.onSectionRendered (4011-Section04.js:1595:7)
    at initializeSectionEventHandlers (4011-FieldManager.js:322:23)
    at renderSection (4011-FieldManager.js:367:7)
    at 4011-FieldManager.js:394:7
    at Array.forEach (<anonymous>)
    at Object.renderAllSections (4011-FieldManager.js:393:27)
    at HTMLDocument.<anonymous> (4011-FieldManager.js:1389:21)
calculateAll @ 4011-Section04.js:792
onSectionRendered @ 4011-Section04.js:1595
initializeSectionEventHandlers @ 4011-FieldManager.js:322
renderSection @ 4011-FieldManager.js:367
(anonymous) @ 4011-FieldManager.js:394
renderAllSections @ 4011-FieldManager.js:393
(anonymous) @ 4011-FieldManager.js:1389Understand this errorAI
4011-Section02.js:799 [S02] Reference results stored with ref_ prefix for downstream sections
4011-Section09.js:99 S09: Reference defaults loaded from standard: OBC SB10 5.5-6 Z6, lighting: 2.0
4011-Section09.js:369 S09: Header controls injected successfully
4011-Section09.js:280 S09: UI refreshed for target mode
4011-Section09.js:99 S09: Reference defaults loaded from standard: OBC SB10 5.5-6 Z6, lighting: 2.0
4011-Section09.js:280 S09: UI refreshed for target mode
 S10: Section rendered - initializing Self-Contained State Module.
 S10: Simplified global StateManager listeners added
 S10: ModeManager exposed globally for cross-section integration.
 S11: Section rendered - initializing Self-Contained State Module.
 S11: Reference defaults loaded from standard: OBC SB10 5.5-6 Z6
 S11: ModeManager exposed globally for cross-section integration.
 [S11] calculateAll TRIGGERED. isReferenceMode: false
 S10: Global listener triggered by i_97, recalculating all.
 S10: Utilization factor dependency i_97 changed.
 S10: Global listener triggered by i_98, recalculating all.
 S10: Utilization factor dependency i_98 changed.
 S12: Section rendered - initializing Pattern A Dual-State Module.
 S12: Reference defaults loaded from standard: OBC SB10 5.5-6 Z6
 S10: Global listener triggered by i_103, recalculating all.
4011-Section10.js:2121 S10: Utilization factor dependency i_103 changed.
4011-Section12.js:1742 [Section12] Running dual-engine calculations...
4011-Section12.js:1756 [Section12] Running Reference Model calculations...
4011-Section12.js:1803 [Section12] Reference results stored with ref_ prefix for downstream sections
4011-Section12.js:1779 [Section12] Reference Model calculations complete
4011-Section12.js:1811 [Section12] Running Target Model calculations...
4011-Section10.js:2111 S10: Global listener triggered by i_103, recalculating all.
4011-Section10.js:2121 S10: Utilization factor dependency i_103 changed.
4011-Section12.js:1831 [Section12] Target Model calculations complete
4011-Section12.js:1748 [Section12] Dual-engine calculations complete
4011-Section12.js:2014 S12: Pattern A initialization complete.
4011-Section13.js:1895 [Section13] 🔗 Attaching StateManager listeners...
4011-Section13.js:1946 [Section13] 🔗 Attaching CRITICAL upstream listeners...
4011-Section13.js:1978 [Section13] ✅ ALL LISTENERS ATTACHED SUCCESSFULLY
4011-Section13.js:2119 S13: Section rendered - initializing Pattern A Dual-State Module.
4011-Section13.js:88 [S13 DEBUG] Loading reference standard: "OBC SB10 5.5-6 Z6"
4011-Section13.js:89 [S13 DEBUG] Found reference values: {f_113: '7.1', j_115: '0.90', d_118: '81', d_119: '8.33'}
4011-Section13.js:118 S13: Reference defaults loaded from standard: OBC SB10 5.5-6 Z6 {f_113: '7.1', j_115: '0.90', d_118: '81', d_119: '8.33', j_116: '3.3', …}
4011-Section13.js:1895 [Section13] 🔗 Attaching StateManager listeners...
 [Section13] 🔗 Attaching CRITICAL upstream listeners...
 [Section13] ✅ ALL LISTENERS ATTACHED SUCCESSFULLY
 [Section13] 🚀 CALCULATEALL TRIGGERED - Running dual-engine calculations...
 [Section13] 🔄 Starting Reference Model calculations...
 [Section13] Running Reference Model calculations...
 [S13 DEBUG] Reading ref_d_127: direct="null", fallback="null", dom="0", final="0"
 [Section13] 🔥 REF HEATING: systemType="Gas", tedReference=0, hspf=7.1
 [Section13] 🧊 COOLING CALC: mode=REF, coolingSystemType="Cooling", heatingType="Gas", isCoolingActive=true, coolingDemand=0
 [S13 DEBUG] Storing ref_d_114 = 0
 [S13 DEBUG] Storing ref_d_115 = 0
 [S13 DEBUG] Storing ref_f_115 = 0
 [S13 DEBUG] Storing ref_h_115 = 0
 [S13 DEBUG] Storing ref_l_115 = 0
 [Section13] Reference results stored with ref_ prefix for downstream sections
 [S13 DEBUG] Total Reference results stored: 33
 [Section13] Reference Model calculations complete
 [Section13] ✅ Reference Model complete
 [Section13] 🔄 Starting Target Model calculations...
 [Section13] Running Target Model calculations...
 [Section13] 🔥 HEATING CALC: mode=TGT, systemType="HeatpumpElectricityGasOil", tedTarget=0, source=d_127
 [Section13] 🧊 COOLING CALC: mode=TGT, coolingSystemType="CoolingNo Cooling", heatingType="HeatpumpElectricityGasOil", isCoolingActive=false, coolingDemand=0
 [Section13] 🧊 COOLING RESULTS: d_117=0, j_116=0, l_116=0, l_114=0
 [Section13] 🔥 TGT HEATING: systemType="HeatpumpElectricityGasOil", tedTarget=0, hspf=12.5
 [Section13] 🧊 COOLING CALC: mode=TGT, coolingSystemType="CoolingNo Cooling", heatingType="HeatpumpElectricityGasOil", isCoolingActive=false, coolingDemand=0
 [Section13] 🧊 COOLING RESULTS: d_117=0, j_116=0, l_116=0, l_114=0
 S10: Global listener triggered by m_121, recalculating all.
 S10: Utilization factor dependency m_121 changed.
 [Section13] 🧊 COOLING CALC: mode=TGT, coolingSystemType="CoolingNo Cooling", heatingType="HeatpumpElectricityGasOil", isCoolingActive=false, coolingDemand=0
 [Section13] 🧊 COOLING RESULTS: d_117=0, j_116=0, l_116=0, l_114=0
 [Section13] 🧊 COOLING CALC: mode=TGT, coolingSystemType="CoolingNo Cooling", heatingType="HeatpumpElectricityGasOil", isCoolingActive=false, coolingDemand=0
 [Section13] 🧊 COOLING RESULTS: d_117=0, j_116=0, l_116=0, l_114=0
 [Section13] 🧊 COOLING CALC: mode=TGT, coolingSystemType="CoolingNo Cooling", heatingType="HeatpumpElectricityGasOil", isCoolingActive=false, coolingDemand=0
 [Section13] 🧊 COOLING RESULTS: d_117=0, j_116=0, l_116=0, l_114=0
 [Section13] Target Model calculations complete
 [Section13] ✅ Target Model complete
 [Section13] 🎉 DUAL-ENGINE CALCULATIONS COMPLETE
 S13: Pattern A initialization complete.
 S14: Section rendered - initializing Pattern A Dual-State Module.
 S14: Reference defaults loaded from standard: OBC SB10 5.5-6 Z6
 [S14 DEBUG] 🔄 Running Reference Model calculations...
 [S14 DEBUG] ✅ Converted to numbers - ref_d_127 calculation: 31694.94709397147 + 63389.89418794294 + 36440.079840319355 + 84594.73968 - 45879.580160000005
 [S14 DEBUG] ✅ ref_d_127 = 170240.08064223375 (should be numeric, not NaN)
 [S14 DEBUG] ✅ Stored ref_d_127 = 170240.08064223375 in StateManager
 [S14 DEBUG] 🔄 Continuing with other Reference calculations...
 [S14 DEBUG] ref_d_128 calculation: 31694.94709397147 + 63389.89418794294 + 36440.079840319355 - 45879.580160000005 = 85645.34096223375
 [Section13] 📡 🔥 d_127 (TED) listener triggered - S14 energy demand changed!
 [Section13] 🔥 HEATING CALC: mode=TGT, systemType="HeatpumpElectricityGasOil", tedTarget=102988.79382887547, source=d_127
 [Section13] 🧊 COOLING CALC: mode=TGT, coolingSystemType="CoolingNo Cooling", heatingType="HeatpumpElectricityGasOil", isCoolingActive=false, coolingDemand=0
 [Section13] 🧊 COOLING RESULTS: d_117=0, j_116=0, l_116=0, l_114=0
 [Section13] 📡 🔥 d_127 (TED) listener triggered - S14 energy demand changed!
 [Section13] 🔥 HEATING CALC: mode=TGT, systemType="HeatpumpElectricityGasOil", tedTarget=102988.79382887547, source=d_127
 [Section13] 🧊 COOLING CALC: mode=TGT, coolingSystemType="CoolingNo Cooling", heatingType="HeatpumpElectricityGasOil", isCoolingActive=false, coolingDemand=0
 [Section13] 🧊 COOLING RESULTS: d_117=0, j_116=0, l_116=0, l_114=0
 [Section13] 🧊 COOLING CALC: mode=TGT, coolingSystemType="CoolingNo Cooling", heatingType="HeatpumpElectricityGasOil", isCoolingActive=false, coolingDemand=-31922.204048669453
 [Section13] 🧊 COOLING RESULTS: d_117=0, j_116=0, l_116=0, l_114=0
 [Section13] 🧊 COOLING CALC: mode=TGT, coolingSystemType="CoolingNo Cooling", heatingType="HeatpumpElectricityGasOil", isCoolingActive=false, coolingDemand=-31922.204048669453
 [Section13] 🧊 COOLING RESULTS: d_117=0, j_116=0, l_116=0, l_114=0
 S14: Pattern A initialization complete.
 🔍 S15 REFERENCE UPSTREAM: ref_i_104=116070.33, ref_m_121=84594.73968, ref_i_80=0
 ✅ S15 Reference Model: All values converted to numbers for proper math
 ✅ S15 Reference Model: Additional fuel variables declared for cost calculations
 🔍 S15 REFERENCE UPSTREAM: ref_i_104=116070.33, ref_m_121=84594.73968, ref_i_80=0
 ✅ S15 Reference Model: All values converted to numbers for proper math
 ✅ S15 Reference Model: Additional fuel variables declared for cost calculations
 🔍 S15 REFERENCE UPSTREAM: ref_i_104=116070.33, ref_m_121=84594.73968, ref_i_80=0
 ✅ S15 Reference Model: All values converted to numbers for proper math
 ✅ S15 Reference Model: Additional fuel variables declared for cost calculations
 [S15 DEBUG] 💰 Electricity price from S04: $0.13/kWh
 🔍 S15 TARGET UPSTREAM: target_i_104=0, target_m_121=97961.59999999998, target_i_80=45879.580160000005
 [S04] S15 target electricity changed: d_136
 [S04] Starting dual-engine Excel-compliant calculations
 [S04] Calculating Target model
 [S04] Row 32 Subtotals - F32: 0, G32: 0, J32: 84390.336, K32: 4303.907136
 🔍 S15 REFERENCE UPSTREAM: ref_i_104=116070.33, ref_m_121=84594.73968, ref_i_80=0
 ✅ S15 Reference Model: All values converted to numbers for proper math
 ✅ S15 Reference Model: Additional fuel variables declared for cost calculations
 [S15 DEBUG] 💰 Electricity price from S04: $0.13/kWh
 🔍 S15 TARGET UPSTREAM: target_i_104=0, target_m_121=97961.59999999998, target_i_80=45879.580160000005
 🔍 S15 REFERENCE UPSTREAM: ref_i_104=116070.33, ref_m_121=84594.73968, ref_i_80=0
 ✅ S15 Reference Model: All values converted to numbers for proper math
 ✅ S15 Reference Model: Additional fuel variables declared for cost calculations
 [S15 DEBUG] 💰 Electricity price from S04: $0.13/kWh
 🔍 S15 TARGET UPSTREAM: target_i_104=0, target_m_121=97961.59999999998, target_i_80=45879.580160000005
 [S15 DEBUG] 🧮 D141 calculation: 136472.35583999997 kWh/m²/yr × $0.13/kWh = $17741.41
 [S15 DEBUG] 🧮 D141 calculation: 136472.35583999997 kWh/m²/yr × $0.13/kWh = $17741.41
 [S04] Calculation error: 
calculateAll @ 4011-Section04.js:792
(anonymous) @ 4011-Section04.js:1529
(anonymous) @ 4011-StateManager.js:486
notifyListeners @ 4011-StateManager.js:484
setValue @ 4011-StateManager.js:344
setCalculatedValue @ 4011-Section15.js:122
calculateValues @ 4011-Section15.js:1690
calculateTargetModel @ 4011-Section15.js:1564
calculateAll @ 4011-Section15.js:1287
(anonymous) @ 4011-Section15.js:1942
(anonymous) @ 4011-StateManager.js:486
notifyListeners @ 4011-StateManager.js:484
setValue @ 4011-StateManager.js:362
calculateReferenceModel @ 4011-Section15.js:1516
calculateAll @ 4011-Section15.js:1286
(anonymous) @ 4011-Section15.js:1942
(anonymous) @ 4011-StateManager.js:486
notifyListeners @ 4011-StateManager.js:484
setValue @ 4011-StateManager.js:362
setCalculatedValue @ 4011-Section01.js:376
calculateReferenceModel @ 4011-Section01.js:478
runAllCalculations @ 4011-Section01.js:1254
(anonymous) @ 4011-Section01.js:1327
(anonymous) @ 4011-StateManager.js:486
notifyListeners @ 4011-StateManager.js:484
setValue @ 4011-StateManager.js:344
setRefValueIfChanged @ 4011-Section15.js:1315
calculateReferenceModel @ 4011-Section15.js:1422
calculateAll @ 4011-Section15.js:1286
initializeEventHandlers @ 4011-Section15.js:2004
initializeSectionEventHandlers @ 4011-FieldManager.js:310
renderSection @ 4011-FieldManager.js:367
(anonymous) @ 4011-FieldManager.js:394
renderAllSections @ 4011-FieldManager.js:393
(anonymous) @ 4011-FieldManager.js:1389Understand this errorAI
 [S15 DEBUG] 🧮 D141 calculation: 136472.35583999997 kWh/m²/yr × $0.13/kWh = $17741.41
 [S15 DEBUG] 💰 Electricity price from S04: $0.13/kWh
 🔍 S15 TARGET UPSTREAM: target_i_104=0, target_m_121=97961.59999999998, target_i_80=45879.580160000005
 [S15 DEBUG] 🧮 D141 calculation: 136472.35583999997 kWh/m²/yr × $0.13/kWh = $17741.41
 🔍 S15 REFERENCE UPSTREAM: ref_i_104=116070.33, ref_m_121=84594.73968, ref_i_80=0
 ✅ S15 Reference Model: All values converted to numbers for proper math
 ✅ S15 Reference Model: Additional fuel variables declared for cost calculations
 [S15 DEBUG] 💰 Electricity price from S04: $0.13/kWh
 🔍 S15 TARGET UPSTREAM: target_i_104=0, target_m_121=97961.59999999998, target_i_80=45879.580160000005
 [S15 DEBUG] 🧮 D141 calculation: 136472.35583999997 kWh/m²/yr × $0.13/kWh = $17741.41
 🔍 S15 REFERENCE UPSTREAM: ref_i_104=116070.33, ref_m_121=84594.73968, ref_i_80=0
 ✅ S15 Reference Model: All values converted to numbers for proper math
 ✅ S15 Reference Model: Additional fuel variables declared for cost calculations
 [S15 DEBUG] 💰 Electricity price from S04: $0.13/kWh
 🔍 S15 TARGET UPSTREAM: target_i_104=0, target_m_121=97961.59999999998, target_i_80=45879.580160000005
 🔍 S15 REFERENCE UPSTREAM: ref_i_104=116070.33, ref_m_121=84594.73968, ref_i_80=0
 ✅ S15 Reference Model: All values converted to numbers for proper math
 ✅ S15 Reference Model: Additional fuel variables declared for cost calculations
4011-Section15.js:1591 [S15 DEBUG] 💰 Electricity price from S04: $0.13/kWh
4011-Section15.js:1610 🔍 S15 TARGET UPSTREAM: target_i_104=0, target_m_121=97961.59999999998, target_i_80=45879.580160000005
4011-Section15.js:1779 [S15 DEBUG] 🧮 D141 calculation: 136472.35583999997 kWh/m²/yr × $0.13/kWh = $17741.41
4011-Section15.js:1779 [S15 DEBUG] 🧮 D141 calculation: 136472.35583999997 kWh/m²/yr × $0.13/kWh = $17741.41
4011-Section15.js:1591 [S15 DEBUG] 💰 Electricity price from S04: $0.13/kWh
4011-Section15.js:1610 🔍 S15 TARGET UPSTREAM: target_i_104=0, target_m_121=97961.59999999998, target_i_80=45879.580160000005
4011-Section15.js:1779 [S15 DEBUG] 🧮 D141 calculation: 136472.35583999997 kWh/m²/yr × $0.13/kWh = $17741.41
4011-Section15.js:189 S15: Target defaults set
4011-Section15.js:240 S15: Reference defaults set
4011-Section15.js:257 S15: Pattern A initialization complete.
4011-Section15.js:495 ✅ S15: Header controls injected successfully
4011-Section15.js:1338 🔍 S15 REFERENCE UPSTREAM: ref_i_104=116070.33, ref_m_121=84594.73968, ref_i_80=0
4011-Section15.js:1379 ✅ S15 Reference Model: All values converted to numbers for proper math
4011-Section15.js:1390 ✅ S15 Reference Model: Additional fuel variables declared for cost calculations
4011-Section15.js:1591 [S15 DEBUG] 💰 Electricity price from S04: $0.13/kWh
4011-Section15.js:1610 🔍 S15 TARGET UPSTREAM: target_i_104=0, target_m_121=97961.59999999998, target_i_80=45879.580160000005
4011-Section15.js:1779 [S15 DEBUG] 🧮 D141 calculation: 136472.35583999997 kWh/m²/yr × $0.13/kWh = $17741.41
4011-Section02.js:1445 S02: Saved Target state to localStorage
4011-Section02.js:799 [S02] Reference results stored with ref_ prefix for downstream sections
 S02: Target defaults set (2022 reporting year) - overriding any localStorage empties
 S02: Reference defaults set (2020 reporting year) - overriding any localStorage empties
 S02: Loaded and merged Target state from localStorage
 [S02] Stored default energy costs in StateManager: {l_12: '0.1300', l_13: '0.5070', l_14: '1.6200', l_15: '180.00', l_16: '1.5000'}
 S02: Pattern A initialization complete.
 S02: Saved Target state to localStorage
 [S02] Reference results stored with ref_ prefix for downstream sections
 [S02] Reference results stored with ref_ prefix for downstream sections
 [S02] Refreshing UI for TARGET mode
 [S02] Updated d_13 dropdown = "OBC SB10 5.5-6 Z6" (target mode)
 [S02] Updated d_15 dropdown = "Self Reported" (target mode)
 [S02] Updated h_12 (reporting year) slider = "2022" (target mode)
 [S02] Updated h_15 = "1427.2" (target mode)
 [S02] Updated i_17 = "" (target mode)
 [S02] Updated l_12 = "$0.1300" (target mode)
 [S02] Updated l_13 = "$0.5070" (target mode)
 [S02] Updated l_14 = "$1.6200" (target mode)
 [S02] Updated l_15 = "$180.00" (target mode)
 [S02] Updated l_16 = "$1.5000" (target mode)
 S03: Sliders initialized via FieldManager
 S03: Section rendered - initializing Self-Contained State Module.
 S03: ModeManager exposed globally for cross-section integration.
 S03: Checking climate data availability (attempt 1/10)
 S03: Climate data available (8) ['BC', 'AB', 'SK', 'MB', 'ON', 'QC', 'NU', 'NT']
 S03: ClimateData available - initializing dropdowns
 S03: Populated province dropdown with options: (8) ['AB', 'BC', 'MB', 'NT', 'NU', 'ON', 'QC', 'SK']
 S03: Synced province "ON" to StateManager for cross-section communication
 City dropdown updated for ON - selected: Alexandria
 S03: Sliders initialized via FieldManager
 [Section03] Running Reference Model calculations...
 [Section03] Reference results stored with ref_ prefix for downstream sections: {h_23: '18', d_23: undefined, d_24: undefined, h_24: '24', d_20: undefined, …}
 [Section03] Reference Model calculations complete
 S03: Weather data updated for Alexandria, ON (Present)
 Section03: Province selected: ON
 S03: Synced province change "ON" to StateManager for S04 listeners
 City dropdown updated for ON - selected: Alexandria
 [Section03] Running Reference Model calculations...
 [Section03] Reference results stored with ref_ prefix for downstream sections: {h_23: '18', d_23: undefined, d_24: undefined, h_24: '24', d_20: undefined, …}
 [Section03] Reference Model calculations complete
 S03: Weather data updated for Alexandria, ON (Present)
 [Section03] Running Reference Model calculations...
 [Section03] Reference results stored with ref_ prefix for downstream sections: {h_23: '18', d_23: undefined, d_24: undefined, h_24: '24', d_20: undefined, …}
4011-Section03.js:1318 [Section03] Reference Model calculations complete
4011-Section03.js:1934 S03: Self-Contained State Module initialization complete
4011-Section04.js:1583 [S04] Pattern A S04 section rendered
4011-Section04.js:199 S04: Initializing Pattern A ModeManager
4011-Section04.js:85 S04: TargetState defaults set
4011-Section04.js:103 S04: TargetState loaded from localStorage
4011-Section04.js:156 S04: ReferenceState defaults set
4011-Section04.js:202 S04: Pattern A initialization complete
4011-Section04.js:771 [S04] Starting dual-engine Excel-compliant calculations
4011-Section04.js:779 [S04] Calculating Target model
4011-Section04.js:679 [S04] Row 32 Subtotals - F32: 132938, G32: 6779.838, J32: 0, K32: 0
4011-Section04.js:792 [S04] Calculation error: ReferenceError: DualState is not defined
    at calculateRow35 (4011-Section04.js:747:18)
    at calculateTargetModel (4011-Section04.js:809:5)
    at calculateAll (4011-Section04.js:780:7)
    at Object.onSectionRendered (4011-Section04.js:1595:7)
    at initializeSectionEventHandlers (4011-FieldManager.js:322:23)
    at renderSection (4011-FieldManager.js:367:7)
    at 4011-FieldManager.js:394:7
    at Array.forEach (<anonymous>)
    at Object.renderAllSections (4011-FieldManager.js:393:27)
    at Object.initialize (4011-Calculator.js:66:25)
calculateAll @ 4011-Section04.js:792
onSectionRendered @ 4011-Section04.js:1595
initializeSectionEventHandlers @ 4011-FieldManager.js:322
renderSection @ 4011-FieldManager.js:367
(anonymous) @ 4011-FieldManager.js:394
renderAllSections @ 4011-FieldManager.js:393
initialize @ 4011-Calculator.js:66
(anonymous) @ 4011-Calculator.js:965Understand this errorAI
4011-Section02.js:799 [S02] Reference results stored with ref_ prefix for downstream sections
4011-Section02.js:799 [S02] Reference results stored with ref_ prefix for downstream sections
4011-Section09.js:99 S09: Reference defaults loaded from standard: OBC SB10 5.5-6 Z6, lighting: 2.0
4011-Section09.js:280 S09: UI refreshed for target mode
4011-Section09.js:99 S09: Reference defaults loaded from standard: OBC SB10 5.5-6 Z6, lighting: 2.0
4011-Section09.js:280 S09: UI refreshed for target mode
4011-Section10.js:2153 S10: Section rendered - initializing Self-Contained State Module.
 S10: Simplified global StateManager listeners added
 S10: ModeManager exposed globally for cross-section integration.
 S11: Section rendered - initializing Self-Contained State Module.
 S11: Reference defaults loaded from standard: OBC SB10 5.5-6 Z6
 S11: ModeManager exposed globally for cross-section integration.
 [S11] calculateAll TRIGGERED. isReferenceMode: false
 [Section13] 🔗 Attaching StateManager listeners...
 [Section13] 🔗 Attaching CRITICAL upstream listeners...
 [Section13] ✅ ALL LISTENERS ATTACHED SUCCESSFULLY
 S13: Section rendered - initializing Pattern A Dual-State Module.
 [S13 DEBUG] Loading reference standard: "OBC SB10 5.5-6 Z6"
 [S13 DEBUG] Found reference values: {f_113: '7.1', j_115: '0.90', d_118: '81', d_119: '8.33'}
 S13: Reference defaults loaded from standard: OBC SB10 5.5-6 Z6 {f_113: '7.1', j_115: '0.90', d_118: '81', d_119: '8.33', j_116: '3.3', …}
 [Section13] 🔗 Attaching StateManager listeners...
 [Section13] 🔗 Attaching CRITICAL upstream listeners...
 [Section13] ✅ ALL LISTENERS ATTACHED SUCCESSFULLY
 [Section13] 🚀 CALCULATEALL TRIGGERED - Running dual-engine calculations...
 [Section13] 🔄 Starting Reference Model calculations...
 [Section13] Running Reference Model calculations...
 [S13 DEBUG] Reading ref_d_127: direct="null", fallback="null", dom="0", final="0"
 [Section13] 🔥 REF HEATING: systemType="Gas", tedReference=0, hspf=7.1
 [Section13] 🧊 COOLING CALC: mode=REF, coolingSystemType="Cooling", heatingType="Gas", isCoolingActive=true, coolingDemand=0
 [S13 DEBUG] Storing ref_d_114 = 0
 [S13 DEBUG] Storing ref_d_115 = 0
 [S13 DEBUG] Storing ref_f_115 = 0
 [S13 DEBUG] Storing ref_h_115 = 0
 [S13 DEBUG] Storing ref_l_115 = 0
 [Section13] Reference results stored with ref_ prefix for downstream sections
 [S13 DEBUG] Total Reference results stored: 33
 [Section13] Reference Model calculations complete
 [Section13] ✅ Reference Model complete
 [Section13] 🔄 Starting Target Model calculations...
 [Section13] Running Target Model calculations...
 [Section13] 🔥 HEATING CALC: mode=TGT, systemType="Heatpump", tedTarget=0, source=d_127
 [Section13] 🧊 COOLING CALC: mode=TGT, coolingSystemType="Cooling", heatingType="Heatpump", isCoolingActive=true, coolingDemand=0
 [Section13] 🧊 COOLING RESULTS: d_117=0, j_116=2.663540445486518, l_116=0, l_114=0
 [Section13] 🔥 TGT HEATING: systemType="Heatpump", tedTarget=0, hspf=12.5
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
 S13: Pattern A initialization complete.
 S14: Section rendered - initializing Pattern A Dual-State Module.
 S14: Reference defaults loaded from standard: OBC SB10 5.5-6 Z6
 [S14 DEBUG] 🔄 Running Reference Model calculations...
 [S14 DEBUG] ✅ Converted to numbers - ref_d_127 calculation: 59532.28501397147 + 119064.57002794294 + 23178.39 + 84594.73968 - 45879.580160000005
 [S14 DEBUG] ✅ ref_d_127 = 240490.4045619144 (should be numeric, not NaN)
 [S14 DEBUG] ✅ Stored ref_d_127 = 240490.4045619144 in StateManager
 [S14 DEBUG] 🔄 Continuing with other Reference calculations...
 [S14 DEBUG] ref_d_128 calculation: 59532.28501397147 + 119064.57002794294 + 23178.39 - 45879.580160000005 = 155895.6648819144
 [Section13] 📡 🔥 d_127 (TED) listener triggered - S14 energy demand changed!
 [Section13] 🔥 HEATING CALC: mode=TGT, systemType="Heatpump", tedTarget=119171.54798887548, source=d_127
 [Section13] 🧊 COOLING CALC: mode=TGT, coolingSystemType="Cooling", heatingType="Heatpump", isCoolingActive=true, coolingDemand=0
 [Section13] 🧊 COOLING RESULTS: d_117=0, j_116=2.663540445486518, l_116=0, l_114=0
 [Section13] 📡 🔥 d_127 (TED) listener triggered - S14 energy demand changed!
 [Section13] 🔥 HEATING CALC: mode=TGT, systemType="Heatpump", tedTarget=119171.54798887548, source=d_127
 [Section13] 🧊 COOLING CALC: mode=TGT, coolingSystemType="Cooling", heatingType="Heatpump", isCoolingActive=true, coolingDemand=0
 [Section13] 🧊 COOLING RESULTS: d_117=0, j_116=2.663540445486518, l_116=0, l_114=0
 [Section13] 🧊 COOLING CALC: mode=TGT, coolingSystemType="Cooling", heatingType="Heatpump", isCoolingActive=true, coolingDemand=10192.893604542265
 [Section13] 🧊 COOLING RESULTS: d_117=3826.8214105081656, j_116=2.663540445486518, l_116=0, l_114=6366.0721940341
 [Section13] 🧊 COOLING CALC: mode=TGT, coolingSystemType="Cooling", heatingType="Heatpump", isCoolingActive=true, coolingDemand=10192.893604542265
 [Section13] 🧊 COOLING RESULTS: d_117=3826.8214105081656, j_116=2.663540445486518, l_116=0, l_114=6366.0721940341
 S14: Pattern A initialization complete.
 🔍 S15 REFERENCE UPSTREAM: ref_i_104=0, ref_m_121=84594.73968, ref_i_80=0
 [S15] Missing critical upstream Reference values: ref_g_101, ref_d_101, ref_i_104
calculateReferenceModel @ 4011-Section15.js:1367
calculateAll @ 4011-Section15.js:1286
initializeEventHandlers @ 4011-Section15.js:2004
initializeSectionEventHandlers @ 4011-FieldManager.js:310
renderSection @ 4011-FieldManager.js:367
(anonymous) @ 4011-FieldManager.js:394
renderAllSections @ 4011-FieldManager.js:393
initialize @ 4011-Calculator.js:66
(anonymous) @ 4011-Calculator.js:965Understand this warningAI
 ✅ S15 Reference Model: All values converted to numbers for proper math
 ✅ S15 Reference Model: Additional fuel variables declared for cost calculations
 🔍 S15 REFERENCE UPSTREAM: ref_i_104=0, ref_m_121=84594.73968, ref_i_80=0
 [S15] Missing critical upstream Reference values: ref_g_101, ref_d_101, ref_i_104
calculateReferenceModel @ 4011-Section15.js:1367
calculateAll @ 4011-Section15.js:1286
(anonymous) @ 4011-Section15.js:1942
(anonymous) @ 4011-StateManager.js:486
notifyListeners @ 4011-StateManager.js:484
setValue @ 4011-StateManager.js:362
setCalculatedValue @ 4011-Section01.js:376
calculateReferenceModel @ 4011-Section01.js:478
runAllCalculations @ 4011-Section01.js:1254
(anonymous) @ 4011-Section01.js:1327
(anonymous) @ 4011-StateManager.js:486
notifyListeners @ 4011-StateManager.js:484
setValue @ 4011-StateManager.js:344
setRefValueIfChanged @ 4011-Section15.js:1315
calculateReferenceModel @ 4011-Section15.js:1422
calculateAll @ 4011-Section15.js:1286
initializeEventHandlers @ 4011-Section15.js:2004
initializeSectionEventHandlers @ 4011-FieldManager.js:310
renderSection @ 4011-FieldManager.js:367
(anonymous) @ 4011-FieldManager.js:394
renderAllSections @ 4011-FieldManager.js:393
initialize @ 4011-Calculator.js:66
(anonymous) @ 4011-Calculator.js:965Understand this warningAI
 ✅ S15 Reference Model: All values converted to numbers for proper math
 ✅ S15 Reference Model: Additional fuel variables declared for cost calculations
 🔍 S15 REFERENCE UPSTREAM: ref_i_104=0, ref_m_121=84594.73968, ref_i_80=0
 [S15] Missing critical upstream Reference values: ref_g_101, ref_d_101, ref_i_104
calculateReferenceModel @ 4011-Section15.js:1367
calculateAll @ 4011-Section15.js:1286
(anonymous) @ 4011-Section15.js:1942
(anonymous) @ 4011-StateManager.js:486
notifyListeners @ 4011-StateManager.js:484
setValue @ 4011-StateManager.js:362
calculateReferenceModel @ 4011-Section15.js:1516
calculateAll @ 4011-Section15.js:1286
(anonymous) @ 4011-Section15.js:1942
(anonymous) @ 4011-StateManager.js:486
notifyListeners @ 4011-StateManager.js:484
setValue @ 4011-StateManager.js:362
setCalculatedValue @ 4011-Section01.js:376
calculateReferenceModel @ 4011-Section01.js:478
runAllCalculations @ 4011-Section01.js:1254
(anonymous) @ 4011-Section01.js:1327
(anonymous) @ 4011-StateManager.js:486
notifyListeners @ 4011-StateManager.js:484
setValue @ 4011-StateManager.js:344
setRefValueIfChanged @ 4011-Section15.js:1315
calculateReferenceModel @ 4011-Section15.js:1422
calculateAll @ 4011-Section15.js:1286
initializeEventHandlers @ 4011-Section15.js:2004
initializeSectionEventHandlers @ 4011-FieldManager.js:310
renderSection @ 4011-FieldManager.js:367
(anonymous) @ 4011-FieldManager.js:394
renderAllSections @ 4011-FieldManager.js:393
initialize @ 4011-Calculator.js:66
(anonymous) @ 4011-Calculator.js:965Understand this warningAI
 ✅ S15 Reference Model: All values converted to numbers for proper math
 ✅ S15 Reference Model: Additional fuel variables declared for cost calculations
 [S15 DEBUG] 💰 Electricity price from S04: $0.13/kWh
 🔍 S15 TARGET UPSTREAM: target_i_104=116070.33, target_m_121=48980.79999999999, target_i_80=45879.580160000005
 [S04] S15 target electricity changed: d_136
 [S04] Starting dual-engine Excel-compliant calculations
 [S04] Calculating Target model
 [S04] Row 32 Subtotals - F32: 132938, G32: 6779.838, J32: 133574.3671495516, K32: 6812.292724627132
 🔍 S15 REFERENCE UPSTREAM: ref_i_104=0, ref_m_121=84594.73968, ref_i_80=0
 [S15] Missing critical upstream Reference values: ref_g_101, ref_d_101, ref_i_104
calculateReferenceModel @ 4011-Section15.js:1367
calculateAll @ 4011-Section15.js:1286
(anonymous) @ 4011-Section15.js:1942
(anonymous) @ 4011-StateManager.js:486
notifyListeners @ 4011-StateManager.js:484
setValue @ 4011-StateManager.js:362
updateTEUICalculations @ 4011-StateManager.js:929
(anonymous) @ 4011-StateManager.js:199
(anonymous) @ 4011-StateManager.js:486
notifyListeners @ 4011-StateManager.js:484
setValue @ 4011-StateManager.js:362
setValue @ 4011-Section04.js:232
setCalculatedValue @ 4011-Section04.js:38
calculateRow32 @ 4011-Section04.js:684
calculateTargetModel @ 4011-Section04.js:806
calculateAll @ 4011-Section04.js:780
(anonymous) @ 4011-Section04.js:1529
(anonymous) @ 4011-StateManager.js:486
notifyListeners @ 4011-StateManager.js:484
setValue @ 4011-StateManager.js:362
setCalculatedValue @ 4011-Section15.js:122
calculateValues @ 4011-Section15.js:1690
calculateTargetModel @ 4011-Section15.js:1564
calculateAll @ 4011-Section15.js:1287
(anonymous) @ 4011-Section15.js:1942
(anonymous) @ 4011-StateManager.js:486
notifyListeners @ 4011-StateManager.js:484
setValue @ 4011-StateManager.js:362
calculateReferenceModel @ 4011-Section15.js:1516
calculateAll @ 4011-Section15.js:1286
(anonymous) @ 4011-Section15.js:1942
(anonymous) @ 4011-StateManager.js:486
notifyListeners @ 4011-StateManager.js:484
setValue @ 4011-StateManager.js:362
setCalculatedValue @ 4011-Section01.js:376
calculateReferenceModel @ 4011-Section01.js:478
runAllCalculations @ 4011-Section01.js:1254
(anonymous) @ 4011-Section01.js:1327
(anonymous) @ 4011-StateManager.js:486
notifyListeners @ 4011-StateManager.js:484
setValue @ 4011-StateManager.js:344
setRefValueIfChanged @ 4011-Section15.js:1315
calculateReferenceModel @ 4011-Section15.js:1422
calculateAll @ 4011-Section15.js:1286
initializeEventHandlers @ 4011-Section15.js:2004
initializeSectionEventHandlers @ 4011-FieldManager.js:310
renderSection @ 4011-FieldManager.js:367
(anonymous) @ 4011-FieldManager.js:394
renderAllSections @ 4011-FieldManager.js:393
initialize @ 4011-Calculator.js:66
(anonymous) @ 4011-Calculator.js:965Understand this warningAI
 ✅ S15 Reference Model: All values converted to numbers for proper math
 ✅ S15 Reference Model: Additional fuel variables declared for cost calculations
 [S15 DEBUG] 💰 Electricity price from S04: $0.13/kWh
 🔍 S15 TARGET UPSTREAM: target_i_104=116070.33, target_m_121=48980.79999999999, target_i_80=45879.580160000005
4011-Section15.js:1338 🔍 S15 REFERENCE UPSTREAM: ref_i_104=0, ref_m_121=84594.73968, ref_i_80=0
4011-Section15.js:1367 [S15] Missing critical upstream Reference values: ref_g_101, ref_d_101, ref_i_104
calculateReferenceModel @ 4011-Section15.js:1367
calculateAll @ 4011-Section15.js:1286
(anonymous) @ 4011-Section15.js:1942
(anonymous) @ 4011-StateManager.js:486
notifyListeners @ 4011-StateManager.js:484
setValue @ 4011-StateManager.js:362
calculateValues @ 4011-Section15.js:1702
calculateTargetModel @ 4011-Section15.js:1564
calculateAll @ 4011-Section15.js:1287
(anonymous) @ 4011-Section15.js:1942
(anonymous) @ 4011-StateManager.js:486
notifyListeners @ 4011-StateManager.js:484
setValue @ 4011-StateManager.js:362
updateTEUICalculations @ 4011-StateManager.js:929
(anonymous) @ 4011-StateManager.js:199
(anonymous) @ 4011-StateManager.js:486
notifyListeners @ 4011-StateManager.js:484
setValue @ 4011-StateManager.js:362
setValue @ 4011-Section04.js:232
setCalculatedValue @ 4011-Section04.js:38
calculateRow32 @ 4011-Section04.js:684
calculateTargetModel @ 4011-Section04.js:806
calculateAll @ 4011-Section04.js:780
(anonymous) @ 4011-Section04.js:1529
(anonymous) @ 4011-StateManager.js:486
notifyListeners @ 4011-StateManager.js:484
setValue @ 4011-StateManager.js:362
setCalculatedValue @ 4011-Section15.js:122
calculateValues @ 4011-Section15.js:1690
calculateTargetModel @ 4011-Section15.js:1564
calculateAll @ 4011-Section15.js:1287
(anonymous) @ 4011-Section15.js:1942
(anonymous) @ 4011-StateManager.js:486
notifyListeners @ 4011-StateManager.js:484
setValue @ 4011-StateManager.js:362
calculateReferenceModel @ 4011-Section15.js:1516
calculateAll @ 4011-Section15.js:1286
(anonymous) @ 4011-Section15.js:1942
(anonymous) @ 4011-StateManager.js:486
notifyListeners @ 4011-StateManager.js:484
setValue @ 4011-StateManager.js:362
setCalculatedValue @ 4011-Section01.js:376
calculateReferenceModel @ 4011-Section01.js:478
runAllCalculations @ 4011-Section01.js:1254
(anonymous) @ 4011-Section01.js:1327
(anonymous) @ 4011-StateManager.js:486
notifyListeners @ 4011-StateManager.js:484
setValue @ 4011-StateManager.js:344
setRefValueIfChanged @ 4011-Section15.js:1315
calculateReferenceModel @ 4011-Section15.js:1422
calculateAll @ 4011-Section15.js:1286
initializeEventHandlers @ 4011-Section15.js:2004
initializeSectionEventHandlers @ 4011-FieldManager.js:310
renderSection @ 4011-FieldManager.js:367
(anonymous) @ 4011-FieldManager.js:394
renderAllSections @ 4011-FieldManager.js:393
initialize @ 4011-Calculator.js:66
(anonymous) @ 4011-Calculator.js:965Understand this warningAI
4011-Section15.js:1379 ✅ S15 Reference Model: All values converted to numbers for proper math
4011-Section15.js:1390 ✅ S15 Reference Model: Additional fuel variables declared for cost calculations
4011-Section15.js:1591 [S15 DEBUG] 💰 Electricity price from S04: $0.13/kWh
4011-Section15.js:1610 🔍 S15 TARGET UPSTREAM: target_i_104=116070.33, target_m_121=48980.79999999999, target_i_80=45879.580160000005
4011-Section15.js:1779 [S15 DEBUG] 🧮 D141 calculation: 220216.85125050816 kWh/m²/yr × $0.13/kWh = $28628.19
4011-Section15.js:1779 [S15 DEBUG] 🧮 D141 calculation: 220216.85125050816 kWh/m²/yr × $0.13/kWh = $28628.19
4011-Section02.js:799 [S02] Reference results stored with ref_ prefix for downstream sections
4011-Section02.js:799 [S02] Reference results stored with ref_ prefix for downstream sections
4011-Section15.js:1338 🔍 S15 REFERENCE UPSTREAM: ref_i_104=0, ref_m_121=84594.73968, ref_i_80=0
4011-Section15.js:1367 [S15] Missing critical upstream Reference values: ref_g_101, ref_d_101, ref_i_104
calculateReferenceModel @ 4011-Section15.js:1367
calculateAll @ 4011-Section15.js:1286
(anonymous) @ 4011-Section15.js:1942
(anonymous) @ 4011-StateManager.js:486
notifyListeners @ 4011-StateManager.js:484
setValue @ 4011-StateManager.js:362
setValue @ 4011-Section04.js:232
setCalculatedValue @ 4011-Section04.js:38
calculateRow32 @ 4011-Section04.js:685
calculateTargetModel @ 4011-Section04.js:806
calculateAll @ 4011-Section04.js:780
(anonymous) @ 4011-Section04.js:1529
(anonymous) @ 4011-StateManager.js:486
notifyListeners @ 4011-StateManager.js:484
setValue @ 4011-StateManager.js:362
setCalculatedValue @ 4011-Section15.js:122
calculateValues @ 4011-Section15.js:1690
calculateTargetModel @ 4011-Section15.js:1564
calculateAll @ 4011-Section15.js:1287
(anonymous) @ 4011-Section15.js:1942
(anonymous) @ 4011-StateManager.js:486
notifyListeners @ 4011-StateManager.js:484
setValue @ 4011-StateManager.js:362
calculateReferenceModel @ 4011-Section15.js:1516
calculateAll @ 4011-Section15.js:1286
(anonymous) @ 4011-Section15.js:1942
(anonymous) @ 4011-StateManager.js:486
notifyListeners @ 4011-StateManager.js:484
setValue @ 4011-StateManager.js:362
setCalculatedValue @ 4011-Section01.js:376
calculateReferenceModel @ 4011-Section01.js:478
runAllCalculations @ 4011-Section01.js:1254
(anonymous) @ 4011-Section01.js:1327
(anonymous) @ 4011-StateManager.js:486
notifyListeners @ 4011-StateManager.js:484
setValue @ 4011-StateManager.js:344
setRefValueIfChanged @ 4011-Section15.js:1315
calculateReferenceModel @ 4011-Section15.js:1422
calculateAll @ 4011-Section15.js:1286
initializeEventHandlers @ 4011-Section15.js:2004
initializeSectionEventHandlers @ 4011-FieldManager.js:310
renderSection @ 4011-FieldManager.js:367
(anonymous) @ 4011-FieldManager.js:394
renderAllSections @ 4011-FieldManager.js:393
initialize @ 4011-Calculator.js:66
(anonymous) @ 4011-Calculator.js:965Understand this warningAI
4011-Section15.js:1379 ✅ S15 Reference Model: All values converted to numbers for proper math
4011-Section15.js:1390 ✅ S15 Reference Model: Additional fuel variables declared for cost calculations
4011-Section15.js:1591 [S15 DEBUG] 💰 Electricity price from S04: $0.13/kWh
4011-Section15.js:1610 🔍 S15 TARGET UPSTREAM: target_i_104=116070.33, target_m_121=48980.79999999999, target_i_80=45879.580160000005
4011-Section15.js:1779 [S15 DEBUG] 🧮 D141 calculation: 220216.85125050816 kWh/m²/yr × $0.13/kWh = $28628.19
4011-Section04.js:792 [S04] Calculation error: ReferenceError: DualState is not defined
    at calculateRow35 (4011-Section04.js:747:18)
    at calculateTargetModel (4011-Section04.js:809:5)
    at calculateAll (4011-Section04.js:780:7)
    at 4011-Section04.js:1529:9
    at 4011-StateManager.js:486:9
    at Set.forEach (<anonymous>)
    at notifyListeners (4011-StateManager.js:484:28)
    at Object.setValue (4011-StateManager.js:362:5)
    at setCalculatedValue (4011-Section15.js:122:33)
    at calculateValues (4011-Section15.js:1690:7)
calculateAll @ 4011-Section04.js:792
(anonymous) @ 4011-Section04.js:1529
(anonymous) @ 4011-StateManager.js:486
notifyListeners @ 4011-StateManager.js:484
setValue @ 4011-StateManager.js:362
setCalculatedValue @ 4011-Section15.js:122
calculateValues @ 4011-Section15.js:1690
calculateTargetModel @ 4011-Section15.js:1564
calculateAll @ 4011-Section15.js:1287
(anonymous) @ 4011-Section15.js:1942
(anonymous) @ 4011-StateManager.js:486
notifyListeners @ 4011-StateManager.js:484
setValue @ 4011-StateManager.js:362
calculateReferenceModel @ 4011-Section15.js:1516
calculateAll @ 4011-Section15.js:1286
(anonymous) @ 4011-Section15.js:1942
(anonymous) @ 4011-StateManager.js:486
notifyListeners @ 4011-StateManager.js:484
setValue @ 4011-StateManager.js:362
setCalculatedValue @ 4011-Section01.js:376
calculateReferenceModel @ 4011-Section01.js:478
runAllCalculations @ 4011-Section01.js:1254
(anonymous) @ 4011-Section01.js:1327
(anonymous) @ 4011-StateManager.js:486
notifyListeners @ 4011-StateManager.js:484
setValue @ 4011-StateManager.js:344
setRefValueIfChanged @ 4011-Section15.js:1315
calculateReferenceModel @ 4011-Section15.js:1422
calculateAll @ 4011-Section15.js:1286
initializeEventHandlers @ 4011-Section15.js:2004
initializeSectionEventHandlers @ 4011-FieldManager.js:310
renderSection @ 4011-FieldManager.js:367
(anonymous) @ 4011-FieldManager.js:394
renderAllSections @ 4011-FieldManager.js:393
initialize @ 4011-Calculator.js:66
(anonymous) @ 4011-Calculator.js:965Understand this errorAI
4011-Section15.js:1779 [S15 DEBUG] 🧮 D141 calculation: 220216.85125050816 kWh/m²/yr × $0.13/kWh = $28628.19
 [S15 DEBUG] 💰 Electricity price from S04: $0.13/kWh
 🔍 S15 TARGET UPSTREAM: target_i_104=116070.33, target_m_121=48980.79999999999, target_i_80=45879.580160000005
 [S15 DEBUG] 🧮 D141 calculation: 220216.85125050816 kWh/m²/yr × $0.13/kWh = $28628.19
 🔍 S15 REFERENCE UPSTREAM: ref_i_104=0, ref_m_121=84594.73968, ref_i_80=0
 [S15] Missing critical upstream Reference values: ref_g_101, ref_d_101, ref_i_104
calculateReferenceModel @ 4011-Section15.js:1367
calculateAll @ 4011-Section15.js:1286
(anonymous) @ 4011-Section15.js:1942
(anonymous) @ 4011-StateManager.js:486
notifyListeners @ 4011-StateManager.js:484
setValue @ 4011-StateManager.js:362
setCalculatedValue @ 4011-Section01.js:376
calculateTargetModel @ 4011-Section01.js:598
runAllCalculations @ 4011-Section01.js:1255
(anonymous) @ 4011-Section01.js:1327
(anonymous) @ 4011-StateManager.js:486
notifyListeners @ 4011-StateManager.js:484
setValue @ 4011-StateManager.js:344
setRefValueIfChanged @ 4011-Section15.js:1315
calculateReferenceModel @ 4011-Section15.js:1422
calculateAll @ 4011-Section15.js:1286
initializeEventHandlers @ 4011-Section15.js:2004
initializeSectionEventHandlers @ 4011-FieldManager.js:310
renderSection @ 4011-FieldManager.js:367
(anonymous) @ 4011-FieldManager.js:394
renderAllSections @ 4011-FieldManager.js:393
initialize @ 4011-Calculator.js:66
(anonymous) @ 4011-Calculator.js:965Understand this warningAI
 ✅ S15 Reference Model: All values converted to numbers for proper math
 ✅ S15 Reference Model: Additional fuel variables declared for cost calculations
 [S15 DEBUG] 💰 Electricity price from S04: $0.13/kWh
 🔍 S15 TARGET UPSTREAM: target_i_104=116070.33, target_m_121=48980.79999999999, target_i_80=45879.580160000005
 [S15 DEBUG] 🧮 D141 calculation: 220216.85125050816 kWh/m²/yr × $0.13/kWh = $28628.19
 🔍 S15 REFERENCE UPSTREAM: ref_i_104=0, ref_m_121=84594.73968, ref_i_80=0
 [S15] Missing critical upstream Reference values: ref_g_101, ref_d_101, ref_i_104
calculateReferenceModel @ 4011-Section15.js:1367
calculateAll @ 4011-Section15.js:1286
(anonymous) @ 4011-Section15.js:1942
(anonymous) @ 4011-StateManager.js:486
notifyListeners @ 4011-StateManager.js:484
setValue @ 4011-StateManager.js:362
setCalculatedValue @ 4011-Section01.js:383
calculateTargetModel @ 4011-Section01.js:598
runAllCalculations @ 4011-Section01.js:1255
(anonymous) @ 4011-Section01.js:1327
(anonymous) @ 4011-StateManager.js:486
notifyListeners @ 4011-StateManager.js:484
setValue @ 4011-StateManager.js:344
setRefValueIfChanged @ 4011-Section15.js:1315
calculateReferenceModel @ 4011-Section15.js:1422
calculateAll @ 4011-Section15.js:1286
initializeEventHandlers @ 4011-Section15.js:2004
initializeSectionEventHandlers @ 4011-FieldManager.js:310
renderSection @ 4011-FieldManager.js:367
(anonymous) @ 4011-FieldManager.js:394
renderAllSections @ 4011-FieldManager.js:393
initialize @ 4011-Calculator.js:66
(anonymous) @ 4011-Calculator.js:965Understand this warningAI
 ✅ S15 Reference Model: All values converted to numbers for proper math
 ✅ S15 Reference Model: Additional fuel variables declared for cost calculations
 [S15 DEBUG] 💰 Electricity price from S04: $0.13/kWh
 🔍 S15 TARGET UPSTREAM: target_i_104=116070.33, target_m_121=48980.79999999999, target_i_80=45879.580160000005
 🔍 S15 REFERENCE UPSTREAM: ref_i_104=0, ref_m_121=84594.73968, ref_i_80=0
 [S15] Missing critical upstream Reference values: ref_g_101, ref_d_101, ref_i_104
calculateReferenceModel @ 4011-Section15.js:1367
calculateAll @ 4011-Section15.js:1286
(anonymous) @ 4011-Section15.js:1942
(anonymous) @ 4011-StateManager.js:486
notifyListeners @ 4011-StateManager.js:484
setValue @ 4011-StateManager.js:362
calculateValues @ 4011-Section15.js:1702
calculateTargetModel @ 4011-Section15.js:1564
calculateAll @ 4011-Section15.js:1287
(anonymous) @ 4011-Section15.js:1942
(anonymous) @ 4011-StateManager.js:486
notifyListeners @ 4011-StateManager.js:484
setValue @ 4011-StateManager.js:362
setCalculatedValue @ 4011-Section01.js:383
calculateTargetModel @ 4011-Section01.js:598
runAllCalculations @ 4011-Section01.js:1255
(anonymous) @ 4011-Section01.js:1327
(anonymous) @ 4011-StateManager.js:486
notifyListeners @ 4011-StateManager.js:484
setValue @ 4011-StateManager.js:344
setRefValueIfChanged @ 4011-Section15.js:1315
calculateReferenceModel @ 4011-Section15.js:1422
calculateAll @ 4011-Section15.js:1286
initializeEventHandlers @ 4011-Section15.js:2004
initializeSectionEventHandlers @ 4011-FieldManager.js:310
renderSection @ 4011-FieldManager.js:367
(anonymous) @ 4011-FieldManager.js:394
renderAllSections @ 4011-FieldManager.js:393
initialize @ 4011-Calculator.js:66
(anonymous) @ 4011-Calculator.js:965Understand this warningAI
 ✅ S15 Reference Model: All values converted to numbers for proper math
 ✅ S15 Reference Model: Additional fuel variables declared for cost calculations
 [S15 DEBUG] 💰 Electricity price from S04: $0.13/kWh
 🔍 S15 TARGET UPSTREAM: target_i_104=116070.33, target_m_121=48980.79999999999, target_i_80=45879.580160000005
 [S15 DEBUG] 🧮 D141 calculation: 220216.85125050816 kWh/m²/yr × $0.13/kWh = $28628.19
 [S15 DEBUG] 🧮 D141 calculation: 220216.85125050816 kWh/m²/yr × $0.13/kWh = $28628.19
 [S15 DEBUG] 💰 Electricity price from S04: $0.13/kWh
 🔍 S15 TARGET UPSTREAM: target_i_104=116070.33, target_m_121=48980.79999999999, target_i_80=45879.580160000005
 [S15 DEBUG] 🧮 D141 calculation: 220216.85125050816 kWh/m²/yr × $0.13/kWh = $28628.19
 S15: Target defaults set
 S15: Reference defaults set
 S15: Pattern A initialization complete.
 🔍 S15 REFERENCE UPSTREAM: ref_i_104=0, ref_m_121=84594.73968, ref_i_80=0
4011-Section15.js:1367 [S15] Missing critical upstream Reference values: ref_g_101, ref_d_101, ref_i_104
calculateReferenceModel @ 4011-Section15.js:1367
calculateAll @ 4011-Section15.js:1286
initializeEventHandlers @ 4011-Section15.js:2004
onSectionRendered @ 4011-Section15.js:2029
initializeSectionEventHandlers @ 4011-FieldManager.js:322
renderSection @ 4011-FieldManager.js:367
(anonymous) @ 4011-FieldManager.js:394
renderAllSections @ 4011-FieldManager.js:393
initialize @ 4011-Calculator.js:66
(anonymous) @ 4011-Calculator.js:965Understand this warningAI
4011-Section15.js:1379 ✅ S15 Reference Model: All values converted to numbers for proper math
4011-Section15.js:1390 ✅ S15 Reference Model: Additional fuel variables declared for cost calculations
4011-Section15.js:1591 [S15 DEBUG] 💰 Electricity price from S04: $0.13/kWh
4011-Section15.js:1610 🔍 S15 TARGET UPSTREAM: target_i_104=116070.33, target_m_121=48980.79999999999, target_i_80=45879.580160000005
4011-Section15.js:1779 [S15 DEBUG] 🧮 D141 calculation: 220216.85125050816 kWh/m²/yr × $0.13/kWh = $28628.19
4011-Section03.js:957 Section03: Province selected: ON
4011-Section03.js:966 S03: Synced province change "ON" to StateManager for S04 listeners
4011-Section03.js:1022 City dropdown updated for ON - selected: Alexandria
4011-Section15.js:1338 🔍 S15 REFERENCE UPSTREAM: ref_i_104=0, ref_m_121=84594.73968, ref_i_80=0
4011-Section15.js:1367 [S15] Missing critical upstream Reference values: ref_g_101, ref_d_101, ref_i_104
calculateReferenceModel @ 4011-Section15.js:1367
calculateAll @ 4011-Section15.js:1286
forceTEDITELIUpdate @ 4011-SectionIntegrator.js:305
initializeTEDITELIIntegration @ 4011-SectionIntegrator.js:241
(anonymous) @ 4011-SectionIntegrator.js:187
initializeAllIntegrations @ 4011-SectionIntegrator.js:184
(anonymous) @ 4011-SectionIntegrator.js:106
renderAllSections @ 4011-FieldManager.js:398
initialize @ 4011-Calculator.js:66
(anonymous) @ 4011-Calculator.js:965Understand this warningAI
4011-Section15.js:1379 ✅ S15 Reference Model: All values converted to numbers for proper math
4011-Section15.js:1390 ✅ S15 Reference Model: Additional fuel variables declared for cost calculations
4011-Section15.js:1591 [S15 DEBUG] 💰 Electricity price from S04: $0.13/kWh
4011-Section15.js:1610 🔍 S15 TARGET UPSTREAM: target_i_104=116070.33, target_m_121=48980.79999999999, target_i_80=45879.580160000005
4011-Section15.js:1779 [S15 DEBUG] 🧮 D141 calculation: 220216.85125050816 kWh/m²/yr × $0.13/kWh = $28628.19
4011-FileHandler.js:62 [SAFARI DEBUG] Setting up S03 Excel import buttons. selectExcelBtn and locationFileInput FOUND.
4011-Section02.js:1445 S02: Saved Target state to localStorage
4011-Section02.js:799 [S02] Reference results stored with ref_ prefix for downstream sections
 S02: Target defaults set (2022 reporting year) - overriding any localStorage empties
 S02: Reference defaults set (2020 reporting year) - overriding any localStorage empties
 S02: Loaded and merged Target state from localStorage
 [S02] Stored default energy costs in StateManager: {l_12: '0.1300', l_13: '0.5070', l_14: '1.6200', l_15: '180.00', l_16: '1.5000'}
 S02: Pattern A initialization complete.
 S02: Saved Target state to localStorage
 [S02] Reference results stored with ref_ prefix for downstream sections
 [S02] Reference results stored with ref_ prefix for downstream sections
 [S02] Refreshing UI for TARGET mode
 [S02] Updated d_13 dropdown = "OBC SB10 5.5-6 Z6" (target mode)
 [S02] Updated d_15 dropdown = "Self Reported" (target mode)
 [S02] Updated h_12 (reporting year) slider = "2022" (target mode)
 [S02] Updated h_15 = "1427.2" (target mode)
 [S02] Updated i_17 = "" (target mode)
 [S02] Updated l_12 = "$0.1300" (target mode)
 [S02] Updated l_13 = "$0.5070" (target mode)
 [S02] Updated l_14 = "$1.6200" (target mode)
 [S02] Updated l_15 = "$180.00" (target mode)
 [S02] Updated l_16 = "$1.5000" (target mode)
 S03: Sliders initialized via FieldManager
 S03: Section rendered - initializing Self-Contained State Module.
 S03: ModeManager exposed globally for cross-section integration.
 S03: Checking climate data availability (attempt 1/10)
 S03: Climate data available (8) ['BC', 'AB', 'SK', 'MB', 'ON', 'QC', 'NU', 'NT']
 S03: ClimateData available - initializing dropdowns
 S03: Populated province dropdown with options: (8) ['AB', 'BC', 'MB', 'NT', 'NU', 'ON', 'QC', 'SK']
 S03: Synced province "ON" to StateManager for cross-section communication
 City dropdown updated for ON - selected: Alexandria
 S03: Sliders initialized via FieldManager
 [Section03] Running Reference Model calculations...
 [Section03] Reference results stored with ref_ prefix for downstream sections: {h_23: '18', d_23: undefined, d_24: undefined, h_24: '24', d_20: undefined, …}
 [Section03] Reference Model calculations complete
 S03: Weather data updated for Alexandria, ON (Present)
 Section03: Province selected: ON
 S03: Synced province change "ON" to StateManager for S04 listeners
 City dropdown updated for ON - selected: Alexandria
 [Section03] Running Reference Model calculations...
 [Section03] Reference results stored with ref_ prefix for downstream sections: {h_23: '18', d_23: undefined, d_24: undefined, h_24: '24', d_20: undefined, …}
 [Section03] Reference Model calculations complete
 S03: Weather data updated for Alexandria, ON (Present)
 [Section03] Running Reference Model calculations...
4011-Section03.js:1347 [Section03] Reference results stored with ref_ prefix for downstream sections: {h_23: '18', d_23: undefined, d_24: undefined, h_24: '24', d_20: undefined, …}
4011-Section03.js:1318 [Section03] Reference Model calculations complete
4011-Section03.js:1934 S03: Self-Contained State Module initialization complete
4011-Section04.js:1583 [S04] Pattern A S04 section rendered
4011-Section04.js:199 S04: Initializing Pattern A ModeManager
4011-Section04.js:85 S04: TargetState defaults set
4011-Section04.js:103 S04: TargetState loaded from localStorage
4011-Section04.js:156 S04: ReferenceState defaults set
4011-Section04.js:202 S04: Pattern A initialization complete
4011-Section04.js:771 [S04] Starting dual-engine Excel-compliant calculations
4011-Section04.js:779 [S04] Calculating Target model
4011-Section04.js:679 [S04] Row 32 Subtotals - F32: 132938, G32: 6779.838, J32: 0, K32: 0
4011-Section04.js:792 [S04] Calculation error: ReferenceError: DualState is not defined
    at calculateRow35 (4011-Section04.js:747:18)
    at calculateTargetModel (4011-Section04.js:809:5)
    at calculateAll (4011-Section04.js:780:7)
    at Object.onSectionRendered (4011-Section04.js:1595:7)
    at initializeSectionEventHandlers (4011-FieldManager.js:322:23)
    at renderSection (4011-FieldManager.js:367:7)
    at 4011-FieldManager.js:394:7
    at Array.forEach (<anonymous>)
    at Object.renderAllSections (4011-FieldManager.js:393:27)
    at HTMLDocument.<anonymous> (4011-init.js:858:30)
calculateAll @ 4011-Section04.js:792
onSectionRendered @ 4011-Section04.js:1595
initializeSectionEventHandlers @ 4011-FieldManager.js:322
renderSection @ 4011-FieldManager.js:367
(anonymous) @ 4011-FieldManager.js:394
renderAllSections @ 4011-FieldManager.js:393
(anonymous) @ 4011-init.js:858Understand this errorAI
4011-Section02.js:799 [S02] Reference results stored with ref_ prefix for downstream sections
4011-Section02.js:799 [S02] Reference results stored with ref_ prefix for downstream sections
4011-Section09.js:99 S09: Reference defaults loaded from standard: OBC SB10 5.5-6 Z6, lighting: 2.0
4011-Section09.js:280 S09: UI refreshed for target mode
4011-Section09.js:99 S09: Reference defaults loaded from standard: OBC SB10 5.5-6 Z6, lighting: 2.0
4011-Section09.js:280 S09: UI refreshed for target mode
 S10: Section rendered - initializing Self-Contained State Module.
 S10: Simplified global StateManager listeners added
 S10: ModeManager exposed globally for cross-section integration.
 S11: Section rendered - initializing Self-Contained State Module.
 S11: Reference defaults loaded from standard: OBC SB10 5.5-6 Z6
 S11: ModeManager exposed globally for cross-section integration.
 [S11] calculateAll TRIGGERED. isReferenceMode: false
 [Section13] 🔗 Attaching StateManager listeners...
 [Section13] 🔗 Attaching CRITICAL upstream listeners...
 [Section13] ✅ ALL LISTENERS ATTACHED SUCCESSFULLY
 S13: Section rendered - initializing Pattern A Dual-State Module.
 [S13 DEBUG] Loading reference standard: "OBC SB10 5.5-6 Z6"
 [S13 DEBUG] Found reference values: {f_113: '7.1', j_115: '0.90', d_118: '81', d_119: '8.33'}
 S13: Reference defaults loaded from standard: OBC SB10 5.5-6 Z6 {f_113: '7.1', j_115: '0.90', d_118: '81', d_119: '8.33', j_116: '3.3', …}
 [Section13] 🔗 Attaching StateManager listeners...
 [Section13] 🔗 Attaching CRITICAL upstream listeners...
 [Section13] ✅ ALL LISTENERS ATTACHED SUCCESSFULLY
 [Section13] 🚀 CALCULATEALL TRIGGERED - Running dual-engine calculations...
 [Section13] 🔄 Starting Reference Model calculations...
 [Section13] Running Reference Model calculations...
 [S13 DEBUG] Reading ref_d_127: direct="null", fallback="null", dom="0", final="0"
 [Section13] 🔥 REF HEATING: systemType="Gas", tedReference=0, hspf=7.1
 [Section13] 🧊 COOLING CALC: mode=REF, coolingSystemType="Cooling", heatingType="Gas", isCoolingActive=true, coolingDemand=0
 [S13 DEBUG] Storing ref_d_114 = 0
 [S13 DEBUG] Storing ref_d_115 = 0
 [S13 DEBUG] Storing ref_f_115 = 0
 [S13 DEBUG] Storing ref_h_115 = 0
 [S13 DEBUG] Storing ref_l_115 = 0
 [Section13] Reference results stored with ref_ prefix for downstream sections
 [S13 DEBUG] Total Reference results stored: 33
 [Section13] Reference Model calculations complete
 [Section13] ✅ Reference Model complete
 [Section13] 🔄 Starting Target Model calculations...
 [Section13] Running Target Model calculations...
 [Section13] 🔥 HEATING CALC: mode=TGT, systemType="Heatpump", tedTarget=0, source=d_127
 [Section13] 🧊 COOLING CALC: mode=TGT, coolingSystemType="Cooling", heatingType="Heatpump", isCoolingActive=true, coolingDemand=0
 [Section13] 🧊 COOLING RESULTS: d_117=0, j_116=2.663540445486518, l_116=0, l_114=0
 [Section13] 🔥 TGT HEATING: systemType="Heatpump", tedTarget=0, hspf=12.5
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
 S13: Pattern A initialization complete.
 S14: Section rendered - initializing Pattern A Dual-State Module.
 S14: Reference defaults loaded from standard: OBC SB10 5.5-6 Z6
 [S14 DEBUG] 🔄 Running Reference Model calculations...
 [S14 DEBUG] ✅ Converted to numbers - ref_d_127 calculation: 59532.28501397147 + 119064.57002794294 + 23178.39 + 84594.73968 - 45879.580160000005
 [S14 DEBUG] ✅ ref_d_127 = 240490.4045619144 (should be numeric, not NaN)
 [S14 DEBUG] ✅ Stored ref_d_127 = 240490.4045619144 in StateManager
 [S14 DEBUG] 🔄 Continuing with other Reference calculations...
 [S14 DEBUG] ref_d_128 calculation: 59532.28501397147 + 119064.57002794294 + 23178.39 - 45879.580160000005 = 155895.6648819144
 [Section13] 📡 🔥 d_127 (TED) listener triggered - S14 energy demand changed!
 [Section13] 🔥 HEATING CALC: mode=TGT, systemType="Heatpump", tedTarget=119171.54798887548, source=d_127
 [Section13] 🧊 COOLING CALC: mode=TGT, coolingSystemType="Cooling", heatingType="Heatpump", isCoolingActive=true, coolingDemand=0
 [Section13] 🧊 COOLING RESULTS: d_117=0, j_116=2.663540445486518, l_116=0, l_114=0
 [Section13] 📡 🔥 d_127 (TED) listener triggered - S14 energy demand changed!
 [Section13] 🔥 HEATING CALC: mode=TGT, systemType="Heatpump", tedTarget=119171.54798887548, source=d_127
 [Section13] 🧊 COOLING CALC: mode=TGT, coolingSystemType="Cooling", heatingType="Heatpump", isCoolingActive=true, coolingDemand=0
 [Section13] 🧊 COOLING RESULTS: d_117=0, j_116=2.663540445486518, l_116=0, l_114=0
 [Section13] 🧊 COOLING CALC: mode=TGT, coolingSystemType="Cooling", heatingType="Heatpump", isCoolingActive=true, coolingDemand=10192.893604542265
 [Section13] 🧊 COOLING RESULTS: d_117=3826.8214105081656, j_116=2.663540445486518, l_116=0, l_114=6366.0721940341
 [Section13] 🧊 COOLING CALC: mode=TGT, coolingSystemType="Cooling", heatingType="Heatpump", isCoolingActive=true, coolingDemand=10192.893604542265
 [Section13] 🧊 COOLING RESULTS: d_117=3826.8214105081656, j_116=2.663540445486518, l_116=0, l_114=6366.0721940341
 S14: Pattern A initialization complete.
 🔍 S15 REFERENCE UPSTREAM: ref_i_104=0, ref_m_121=84594.73968, ref_i_80=0
 [S15] Missing critical upstream Reference values: ref_g_101, ref_d_101, ref_i_104
calculateReferenceModel @ 4011-Section15.js:1367
calculateAll @ 4011-Section15.js:1286
initializeEventHandlers @ 4011-Section15.js:2004
initializeSectionEventHandlers @ 4011-FieldManager.js:310
renderSection @ 4011-FieldManager.js:367
(anonymous) @ 4011-FieldManager.js:394
renderAllSections @ 4011-FieldManager.js:393
(anonymous) @ 4011-init.js:858Understand this warningAI
 ✅ S15 Reference Model: All values converted to numbers for proper math
 ✅ S15 Reference Model: Additional fuel variables declared for cost calculations
 🔍 S15 REFERENCE UPSTREAM: ref_i_104=0, ref_m_121=84594.73968, ref_i_80=0
 [S15] Missing critical upstream Reference values: ref_g_101, ref_d_101, ref_i_104
calculateReferenceModel @ 4011-Section15.js:1367
calculateAll @ 4011-Section15.js:1286
(anonymous) @ 4011-Section15.js:1942
(anonymous) @ 4011-StateManager.js:486
notifyListeners @ 4011-StateManager.js:484
setValue @ 4011-StateManager.js:362
window.TEUI.StateManager.setValue @ 4011-ComponentBridge.js:429
setCalculatedValue @ 4011-Section01.js:376
calculateReferenceModel @ 4011-Section01.js:478
runAllCalculations @ 4011-Section01.js:1254
(anonymous) @ 4011-Section01.js:1327
(anonymous) @ 4011-StateManager.js:486
notifyListeners @ 4011-StateManager.js:484
setValue @ 4011-StateManager.js:344
window.TEUI.StateManager.setValue @ 4011-ComponentBridge.js:429
setRefValueIfChanged @ 4011-Section15.js:1315
calculateReferenceModel @ 4011-Section15.js:1422
calculateAll @ 4011-Section15.js:1286
initializeEventHandlers @ 4011-Section15.js:2004
initializeSectionEventHandlers @ 4011-FieldManager.js:310
renderSection @ 4011-FieldManager.js:367
(anonymous) @ 4011-FieldManager.js:394
renderAllSections @ 4011-FieldManager.js:393
(anonymous) @ 4011-init.js:858Understand this warningAI
 ✅ S15 Reference Model: All values converted to numbers for proper math
 ✅ S15 Reference Model: Additional fuel variables declared for cost calculations
 🔍 S15 REFERENCE UPSTREAM: ref_i_104=0, ref_m_121=84594.73968, ref_i_80=0
 [S15] Missing critical upstream Reference values: ref_g_101, ref_d_101, ref_i_104
calculateReferenceModel @ 4011-Section15.js:1367
calculateAll @ 4011-Section15.js:1286
(anonymous) @ 4011-Section15.js:1942
(anonymous) @ 4011-StateManager.js:486
notifyListeners @ 4011-StateManager.js:484
setValue @ 4011-StateManager.js:362
window.TEUI.StateManager.setValue @ 4011-ComponentBridge.js:429
calculateReferenceModel @ 4011-Section15.js:1516
calculateAll @ 4011-Section15.js:1286
(anonymous) @ 4011-Section15.js:1942
(anonymous) @ 4011-StateManager.js:486
notifyListeners @ 4011-StateManager.js:484
setValue @ 4011-StateManager.js:362
window.TEUI.StateManager.setValue @ 4011-ComponentBridge.js:429
setCalculatedValue @ 4011-Section01.js:376
calculateReferenceModel @ 4011-Section01.js:478
runAllCalculations @ 4011-Section01.js:1254
(anonymous) @ 4011-Section01.js:1327
(anonymous) @ 4011-StateManager.js:486
notifyListeners @ 4011-StateManager.js:484
setValue @ 4011-StateManager.js:344
window.TEUI.StateManager.setValue @ 4011-ComponentBridge.js:429
setRefValueIfChanged @ 4011-Section15.js:1315
calculateReferenceModel @ 4011-Section15.js:1422
calculateAll @ 4011-Section15.js:1286
initializeEventHandlers @ 4011-Section15.js:2004
initializeSectionEventHandlers @ 4011-FieldManager.js:310
renderSection @ 4011-FieldManager.js:367
(anonymous) @ 4011-FieldManager.js:394
renderAllSections @ 4011-FieldManager.js:393
(anonymous) @ 4011-init.js:858Understand this warningAI
 ✅ S15 Reference Model: All values converted to numbers for proper math
 ✅ S15 Reference Model: Additional fuel variables declared for cost calculations
 [S15 DEBUG] 💰 Electricity price from S04: $0.13/kWh
 🔍 S15 TARGET UPSTREAM: target_i_104=116070.33, target_m_121=48980.79999999999, target_i_80=45879.580160000005
 [S04] S15 target electricity changed: d_136
 [S04] Starting dual-engine Excel-compliant calculations
4011-Section04.js:779 [S04] Calculating Target model
4011-Section04.js:679 [S04] Row 32 Subtotals - F32: 132938, G32: 6779.838, J32: 133574.3671495516, K32: 6812.292724627132
4011-Section15.js:1338 🔍 S15 REFERENCE UPSTREAM: ref_i_104=0, ref_m_121=84594.73968, ref_i_80=0
4011-Section15.js:1367 [S15] Missing critical upstream Reference values: ref_g_101, ref_d_101, ref_i_104
calculateReferenceModel @ 4011-Section15.js:1367
calculateAll @ 4011-Section15.js:1286
(anonymous) @ 4011-Section15.js:1942
(anonymous) @ 4011-StateManager.js:486
notifyListeners @ 4011-StateManager.js:484
setValue @ 4011-StateManager.js:362
updateTEUICalculations @ 4011-StateManager.js:929
(anonymous) @ 4011-StateManager.js:199
(anonymous) @ 4011-StateManager.js:486
notifyListeners @ 4011-StateManager.js:484
setValue @ 4011-StateManager.js:362
window.TEUI.StateManager.setValue @ 4011-ComponentBridge.js:429
setValue @ 4011-Section04.js:232
setCalculatedValue @ 4011-Section04.js:38
calculateRow32 @ 4011-Section04.js:684
calculateTargetModel @ 4011-Section04.js:806
calculateAll @ 4011-Section04.js:780
(anonymous) @ 4011-Section04.js:1529
(anonymous) @ 4011-StateManager.js:486
notifyListeners @ 4011-StateManager.js:484
setValue @ 4011-StateManager.js:362
window.TEUI.StateManager.setValue @ 4011-ComponentBridge.js:429
setCalculatedValue @ 4011-Section15.js:122
calculateValues @ 4011-Section15.js:1690
calculateTargetModel @ 4011-Section15.js:1564
calculateAll @ 4011-Section15.js:1287
(anonymous) @ 4011-Section15.js:1942
(anonymous) @ 4011-StateManager.js:486
notifyListeners @ 4011-StateManager.js:484
setValue @ 4011-StateManager.js:362
window.TEUI.StateManager.setValue @ 4011-ComponentBridge.js:429
calculateReferenceModel @ 4011-Section15.js:1516
calculateAll @ 4011-Section15.js:1286
(anonymous) @ 4011-Section15.js:1942
(anonymous) @ 4011-StateManager.js:486
notifyListeners @ 4011-StateManager.js:484
setValue @ 4011-StateManager.js:362
window.TEUI.StateManager.setValue @ 4011-ComponentBridge.js:429
setCalculatedValue @ 4011-Section01.js:376
calculateReferenceModel @ 4011-Section01.js:478
runAllCalculations @ 4011-Section01.js:1254
(anonymous) @ 4011-Section01.js:1327
(anonymous) @ 4011-StateManager.js:486
notifyListeners @ 4011-StateManager.js:484
setValue @ 4011-StateManager.js:344
window.TEUI.StateManager.setValue @ 4011-ComponentBridge.js:429
setRefValueIfChanged @ 4011-Section15.js:1315
calculateReferenceModel @ 4011-Section15.js:1422
calculateAll @ 4011-Section15.js:1286
initializeEventHandlers @ 4011-Section15.js:2004
initializeSectionEventHandlers @ 4011-FieldManager.js:310
renderSection @ 4011-FieldManager.js:367
(anonymous) @ 4011-FieldManager.js:394
renderAllSections @ 4011-FieldManager.js:393
(anonymous) @ 4011-init.js:858Understand this warningAI
4011-Section15.js:1379 ✅ S15 Reference Model: All values converted to numbers for proper math
4011-Section15.js:1390 ✅ S15 Reference Model: Additional fuel variables declared for cost calculations
4011-Section15.js:1591 [S15 DEBUG] 💰 Electricity price from S04: $0.13/kWh
4011-Section15.js:1610 🔍 S15 TARGET UPSTREAM: target_i_104=116070.33, target_m_121=48980.79999999999, target_i_80=45879.580160000005
4011-Section15.js:1338 🔍 S15 REFERENCE UPSTREAM: ref_i_104=0, ref_m_121=84594.73968, ref_i_80=0
4011-Section15.js:1367 [S15] Missing critical upstream Reference values: ref_g_101, ref_d_101, ref_i_104
calculateReferenceModel @ 4011-Section15.js:1367
calculateAll @ 4011-Section15.js:1286
(anonymous) @ 4011-Section15.js:1942
(anonymous) @ 4011-StateManager.js:486
notifyListeners @ 4011-StateManager.js:484
setValue @ 4011-StateManager.js:362
window.TEUI.StateManager.setValue @ 4011-ComponentBridge.js:429
calculateValues @ 4011-Section15.js:1702
calculateTargetModel @ 4011-Section15.js:1564
calculateAll @ 4011-Section15.js:1287
(anonymous) @ 4011-Section15.js:1942
(anonymous) @ 4011-StateManager.js:486
notifyListeners @ 4011-StateManager.js:484
setValue @ 4011-StateManager.js:362
updateTEUICalculations @ 4011-StateManager.js:929
(anonymous) @ 4011-StateManager.js:199
(anonymous) @ 4011-StateManager.js:486
notifyListeners @ 4011-StateManager.js:484
setValue @ 4011-StateManager.js:362
window.TEUI.StateManager.setValue @ 4011-ComponentBridge.js:429
setValue @ 4011-Section04.js:232
setCalculatedValue @ 4011-Section04.js:38
calculateRow32 @ 4011-Section04.js:684
calculateTargetModel @ 4011-Section04.js:806
calculateAll @ 4011-Section04.js:780
(anonymous) @ 4011-Section04.js:1529
(anonymous) @ 4011-StateManager.js:486
notifyListeners @ 4011-StateManager.js:484
setValue @ 4011-StateManager.js:362
window.TEUI.StateManager.setValue @ 4011-ComponentBridge.js:429
setCalculatedValue @ 4011-Section15.js:122
calculateValues @ 4011-Section15.js:1690
calculateTargetModel @ 4011-Section15.js:1564
calculateAll @ 4011-Section15.js:1287
(anonymous) @ 4011-Section15.js:1942
(anonymous) @ 4011-StateManager.js:486
notifyListeners @ 4011-StateManager.js:484
setValue @ 4011-StateManager.js:362
window.TEUI.StateManager.setValue @ 4011-ComponentBridge.js:429
calculateReferenceModel @ 4011-Section15.js:1516
calculateAll @ 4011-Section15.js:1286
(anonymous) @ 4011-Section15.js:1942
(anonymous) @ 4011-StateManager.js:486
notifyListeners @ 4011-StateManager.js:484
setValue @ 4011-StateManager.js:362
window.TEUI.StateManager.setValue @ 4011-ComponentBridge.js:429
setCalculatedValue @ 4011-Section01.js:376
calculateReferenceModel @ 4011-Section01.js:478
runAllCalculations @ 4011-Section01.js:1254
(anonymous) @ 4011-Section01.js:1327
(anonymous) @ 4011-StateManager.js:486
notifyListeners @ 4011-StateManager.js:484
setValue @ 4011-StateManager.js:344
window.TEUI.StateManager.setValue @ 4011-ComponentBridge.js:429
setRefValueIfChanged @ 4011-Section15.js:1315
calculateReferenceModel @ 4011-Section15.js:1422
calculateAll @ 4011-Section15.js:1286
initializeEventHandlers @ 4011-Section15.js:2004
initializeSectionEventHandlers @ 4011-FieldManager.js:310
renderSection @ 4011-FieldManager.js:367
(anonymous) @ 4011-FieldManager.js:394
renderAllSections @ 4011-FieldManager.js:393
(anonymous) @ 4011-init.js:858Understand this warningAI
4011-Section15.js:1379 ✅ S15 Reference Model: All values converted to numbers for proper math
4011-Section15.js:1390 ✅ S15 Reference Model: Additional fuel variables declared for cost calculations
4011-Section15.js:1591 [S15 DEBUG] 💰 Electricity price from S04: $0.13/kWh
4011-Section15.js:1610 🔍 S15 TARGET UPSTREAM: target_i_104=116070.33, target_m_121=48980.79999999999, target_i_80=45879.580160000005
4011-Section15.js:1779 [S15 DEBUG] 🧮 D141 calculation: 220216.85125050816 kWh/m²/yr × $0.13/kWh = $28628.19
4011-Section15.js:1779 [S15 DEBUG] 🧮 D141 calculation: 220216.85125050816 kWh/m²/yr × $0.13/kWh = $28628.19
4011-Section02.js:799 [S02] Reference results stored with ref_ prefix for downstream sections
4011-Section02.js:799 [S02] Reference results stored with ref_ prefix for downstream sections
4011-Section15.js:1338 🔍 S15 REFERENCE UPSTREAM: ref_i_104=0, ref_m_121=84594.73968, ref_i_80=0
 [S15] Missing critical upstream Reference values: ref_g_101, ref_d_101, ref_i_104
calculateReferenceModel @ 4011-Section15.js:1367
calculateAll @ 4011-Section15.js:1286
(anonymous) @ 4011-Section15.js:1942
(anonymous) @ 4011-StateManager.js:486
notifyListeners @ 4011-StateManager.js:484
setValue @ 4011-StateManager.js:362
window.TEUI.StateManager.setValue @ 4011-ComponentBridge.js:429
setValue @ 4011-Section04.js:232
setCalculatedValue @ 4011-Section04.js:38
calculateRow32 @ 4011-Section04.js:685
calculateTargetModel @ 4011-Section04.js:806
calculateAll @ 4011-Section04.js:780
(anonymous) @ 4011-Section04.js:1529
(anonymous) @ 4011-StateManager.js:486
notifyListeners @ 4011-StateManager.js:484
setValue @ 4011-StateManager.js:362
window.TEUI.StateManager.setValue @ 4011-ComponentBridge.js:429
setCalculatedValue @ 4011-Section15.js:122
calculateValues @ 4011-Section15.js:1690
calculateTargetModel @ 4011-Section15.js:1564
calculateAll @ 4011-Section15.js:1287
(anonymous) @ 4011-Section15.js:1942
(anonymous) @ 4011-StateManager.js:486
notifyListeners @ 4011-StateManager.js:484
setValue @ 4011-StateManager.js:362
window.TEUI.StateManager.setValue @ 4011-ComponentBridge.js:429
calculateReferenceModel @ 4011-Section15.js:1516
calculateAll @ 4011-Section15.js:1286
(anonymous) @ 4011-Section15.js:1942
(anonymous) @ 4011-StateManager.js:486
notifyListeners @ 4011-StateManager.js:484
setValue @ 4011-StateManager.js:362
window.TEUI.StateManager.setValue @ 4011-ComponentBridge.js:429
setCalculatedValue @ 4011-Section01.js:376
calculateReferenceModel @ 4011-Section01.js:478
runAllCalculations @ 4011-Section01.js:1254
(anonymous) @ 4011-Section01.js:1327
(anonymous) @ 4011-StateManager.js:486
notifyListeners @ 4011-StateManager.js:484
setValue @ 4011-StateManager.js:344
window.TEUI.StateManager.setValue @ 4011-ComponentBridge.js:429
setRefValueIfChanged @ 4011-Section15.js:1315
calculateReferenceModel @ 4011-Section15.js:1422
calculateAll @ 4011-Section15.js:1286
initializeEventHandlers @ 4011-Section15.js:2004
initializeSectionEventHandlers @ 4011-FieldManager.js:310
renderSection @ 4011-FieldManager.js:367
(anonymous) @ 4011-FieldManager.js:394
renderAllSections @ 4011-FieldManager.js:393
(anonymous) @ 4011-init.js:858Understand this warningAI
 ✅ S15 Reference Model: All values converted to numbers for proper math
 ✅ S15 Reference Model: Additional fuel variables declared for cost calculations
 [S15 DEBUG] 💰 Electricity price from S04: $0.13/kWh
 🔍 S15 TARGET UPSTREAM: target_i_104=116070.33, target_m_121=48980.79999999999, target_i_80=45879.580160000005
 [S15 DEBUG] 🧮 D141 calculation: 220216.85125050816 kWh/m²/yr × $0.13/kWh = $28628.19
 [S04] Calculation error: 
calculateAll @ 4011-Section04.js:792
(anonymous) @ 4011-Section04.js:1529
(anonymous) @ 4011-StateManager.js:486
notifyListeners @ 4011-StateManager.js:484
setValue @ 4011-StateManager.js:362
window.TEUI.StateManager.setValue @ 4011-ComponentBridge.js:429
setCalculatedValue @ 4011-Section15.js:122
calculateValues @ 4011-Section15.js:1690
calculateTargetModel @ 4011-Section15.js:1564
calculateAll @ 4011-Section15.js:1287
(anonymous) @ 4011-Section15.js:1942
(anonymous) @ 4011-StateManager.js:486
notifyListeners @ 4011-StateManager.js:484
setValue @ 4011-StateManager.js:362
window.TEUI.StateManager.setValue @ 4011-ComponentBridge.js:429
calculateReferenceModel @ 4011-Section15.js:1516
calculateAll @ 4011-Section15.js:1286
(anonymous) @ 4011-Section15.js:1942
(anonymous) @ 4011-StateManager.js:486
notifyListeners @ 4011-StateManager.js:484
setValue @ 4011-StateManager.js:362
window.TEUI.StateManager.setValue @ 4011-ComponentBridge.js:429
setCalculatedValue @ 4011-Section01.js:376
calculateReferenceModel @ 4011-Section01.js:478
runAllCalculations @ 4011-Section01.js:1254
(anonymous) @ 4011-Section01.js:1327
(anonymous) @ 4011-StateManager.js:486
notifyListeners @ 4011-StateManager.js:484
setValue @ 4011-StateManager.js:344
window.TEUI.StateManager.setValue @ 4011-ComponentBridge.js:429
setRefValueIfChanged @ 4011-Section15.js:1315
calculateReferenceModel @ 4011-Section15.js:1422
calculateAll @ 4011-Section15.js:1286
initializeEventHandlers @ 4011-Section15.js:2004
initializeSectionEventHandlers @ 4011-FieldManager.js:310
renderSection @ 4011-FieldManager.js:367
(anonymous) @ 4011-FieldManager.js:394
renderAllSections @ 4011-FieldManager.js:393
(anonymous) @ 4011-init.js:858Understand this errorAI
 [S15 DEBUG] 🧮 D141 calculation: 220216.85125050816 kWh/m²/yr × $0.13/kWh = $28628.19
 [S15 DEBUG] 💰 Electricity price from S04: $0.13/kWh
 🔍 S15 TARGET UPSTREAM: target_i_104=116070.33, target_m_121=48980.79999999999, target_i_80=45879.580160000005
 [S15 DEBUG] 🧮 D141 calculation: 220216.85125050816 kWh/m²/yr × $0.13/kWh = $28628.19
 🔍 S15 REFERENCE UPSTREAM: ref_i_104=0, ref_m_121=84594.73968, ref_i_80=0
 [S15] Missing critical upstream Reference values: ref_g_101, ref_d_101, ref_i_104
calculateReferenceModel @ 4011-Section15.js:1367
calculateAll @ 4011-Section15.js:1286
(anonymous) @ 4011-Section15.js:1942
(anonymous) @ 4011-StateManager.js:486
notifyListeners @ 4011-StateManager.js:484
setValue @ 4011-StateManager.js:362
window.TEUI.StateManager.setValue @ 4011-ComponentBridge.js:429
setCalculatedValue @ 4011-Section01.js:376
calculateTargetModel @ 4011-Section01.js:598
runAllCalculations @ 4011-Section01.js:1255
(anonymous) @ 4011-Section01.js:1327
(anonymous) @ 4011-StateManager.js:486
notifyListeners @ 4011-StateManager.js:484
setValue @ 4011-StateManager.js:344
window.TEUI.StateManager.setValue @ 4011-ComponentBridge.js:429
setRefValueIfChanged @ 4011-Section15.js:1315
calculateReferenceModel @ 4011-Section15.js:1422
calculateAll @ 4011-Section15.js:1286
initializeEventHandlers @ 4011-Section15.js:2004
initializeSectionEventHandlers @ 4011-FieldManager.js:310
renderSection @ 4011-FieldManager.js:367
(anonymous) @ 4011-FieldManager.js:394
renderAllSections @ 4011-FieldManager.js:393
(anonymous) @ 4011-init.js:858Understand this warningAI
 ✅ S15 Reference Model: All values converted to numbers for proper math
 ✅ S15 Reference Model: Additional fuel variables declared for cost calculations
 [S15 DEBUG] 💰 Electricity price from S04: $0.13/kWh
 🔍 S15 TARGET UPSTREAM: target_i_104=116070.33, target_m_121=48980.79999999999, target_i_80=45879.580160000005
 [S15 DEBUG] 🧮 D141 calculation: 220216.85125050816 kWh/m²/yr × $0.13/kWh = $28628.19
 🔍 S15 REFERENCE UPSTREAM: ref_i_104=0, ref_m_121=84594.73968, ref_i_80=0
 [S15] Missing critical upstream Reference values: ref_g_101, ref_d_101, ref_i_104
calculateReferenceModel @ 4011-Section15.js:1367
calculateAll @ 4011-Section15.js:1286
(anonymous) @ 4011-Section15.js:1942
(anonymous) @ 4011-StateManager.js:486
notifyListeners @ 4011-StateManager.js:484
setValue @ 4011-StateManager.js:362
window.TEUI.StateManager.setValue @ 4011-ComponentBridge.js:429
setCalculatedValue @ 4011-Section01.js:383
calculateTargetModel @ 4011-Section01.js:598
runAllCalculations @ 4011-Section01.js:1255
(anonymous) @ 4011-Section01.js:1327
(anonymous) @ 4011-StateManager.js:486
notifyListeners @ 4011-StateManager.js:484
setValue @ 4011-StateManager.js:344
window.TEUI.StateManager.setValue @ 4011-ComponentBridge.js:429
setRefValueIfChanged @ 4011-Section15.js:1315
calculateReferenceModel @ 4011-Section15.js:1422
calculateAll @ 4011-Section15.js:1286
initializeEventHandlers @ 4011-Section15.js:2004
initializeSectionEventHandlers @ 4011-FieldManager.js:310
renderSection @ 4011-FieldManager.js:367
(anonymous) @ 4011-FieldManager.js:394
renderAllSections @ 4011-FieldManager.js:393
(anonymous) @ 4011-init.js:858Understand this warningAI
 ✅ S15 Reference Model: All values converted to numbers for proper math
 ✅ S15 Reference Model: Additional fuel variables declared for cost calculations
 [S15 DEBUG] 💰 Electricity price from S04: $0.13/kWh
 🔍 S15 TARGET UPSTREAM: target_i_104=116070.33, target_m_121=48980.79999999999, target_i_80=45879.580160000005
 🔍 S15 REFERENCE UPSTREAM: ref_i_104=0, ref_m_121=84594.73968, ref_i_80=0
 [S15] Missing critical upstream Reference values: ref_g_101, ref_d_101, ref_i_104
calculateReferenceModel @ 4011-Section15.js:1367
calculateAll @ 4011-Section15.js:1286
(anonymous) @ 4011-Section15.js:1942
(anonymous) @ 4011-StateManager.js:486
notifyListeners @ 4011-StateManager.js:484
setValue @ 4011-StateManager.js:362
window.TEUI.StateManager.setValue @ 4011-ComponentBridge.js:429
calculateValues @ 4011-Section15.js:1702
calculateTargetModel @ 4011-Section15.js:1564
calculateAll @ 4011-Section15.js:1287
(anonymous) @ 4011-Section15.js:1942
(anonymous) @ 4011-StateManager.js:486
notifyListeners @ 4011-StateManager.js:484
setValue @ 4011-StateManager.js:362
window.TEUI.StateManager.setValue @ 4011-ComponentBridge.js:429
setCalculatedValue @ 4011-Section01.js:383
calculateTargetModel @ 4011-Section01.js:598
runAllCalculations @ 4011-Section01.js:1255
(anonymous) @ 4011-Section01.js:1327
(anonymous) @ 4011-StateManager.js:486
notifyListeners @ 4011-StateManager.js:484
setValue @ 4011-StateManager.js:344
window.TEUI.StateManager.setValue @ 4011-ComponentBridge.js:429
setRefValueIfChanged @ 4011-Section15.js:1315
calculateReferenceModel @ 4011-Section15.js:1422
calculateAll @ 4011-Section15.js:1286
initializeEventHandlers @ 4011-Section15.js:2004
initializeSectionEventHandlers @ 4011-FieldManager.js:310
renderSection @ 4011-FieldManager.js:367
(anonymous) @ 4011-FieldManager.js:394
renderAllSections @ 4011-FieldManager.js:393
(anonymous) @ 4011-init.js:858Understand this warningAI
 ✅ S15 Reference Model: All values converted to numbers for proper math
 ✅ S15 Reference Model: Additional fuel variables declared for cost calculations
 [S15 DEBUG] 💰 Electricity price from S04: $0.13/kWh
 🔍 S15 TARGET UPSTREAM: target_i_104=116070.33, target_m_121=48980.79999999999, target_i_80=45879.580160000005
 [S15 DEBUG] 🧮 D141 calculation: 220216.85125050816 kWh/m²/yr × $0.13/kWh = $28628.19
 [S15 DEBUG] 🧮 D141 calculation: 220216.85125050816 kWh/m²/yr × $0.13/kWh = $28628.19
 [S15 DEBUG] 💰 Electricity price from S04: $0.13/kWh
 🔍 S15 TARGET UPSTREAM: target_i_104=116070.33, target_m_121=48980.79999999999, target_i_80=45879.580160000005
 [S15 DEBUG] 🧮 D141 calculation: 220216.85125050816 kWh/m²/yr × $0.13/kWh = $28628.19
 S15: Target defaults set
 S15: Reference defaults set
 S15: Pattern A initialization complete.
 🔍 S15 REFERENCE UPSTREAM: ref_i_104=0, ref_m_121=84594.73968, ref_i_80=0
 [S15] Missing critical upstream Reference values: ref_g_101, ref_d_101, ref_i_104
calculateReferenceModel @ 4011-Section15.js:1367
calculateAll @ 4011-Section15.js:1286
initializeEventHandlers @ 4011-Section15.js:2004
onSectionRendered @ 4011-Section15.js:2029
initializeSectionEventHandlers @ 4011-FieldManager.js:322
renderSection @ 4011-FieldManager.js:367
(anonymous) @ 4011-FieldManager.js:394
renderAllSections @ 4011-FieldManager.js:393
(anonymous) @ 4011-init.js:858Understand this warningAI
 ✅ S15 Reference Model: All values converted to numbers for proper math
 ✅ S15 Reference Model: Additional fuel variables declared for cost calculations
 [S15 DEBUG] 💰 Electricity price from S04: $0.13/kWh
 🔍 S15 TARGET UPSTREAM: target_i_104=116070.33, target_m_121=48980.79999999999, target_i_80=45879.580160000005
 [S15 DEBUG] 🧮 D141 calculation: 220216.85125050816 kWh/m²/yr × $0.13/kWh = $28628.19
 Section03: Province selected: ON
 S03: Synced province change "ON" to StateManager for S04 listeners
 City dropdown updated for ON - selected: Alexandria
 🔍 S15 REFERENCE UPSTREAM: ref_i_104=0, ref_m_121=84594.73968, ref_i_80=0
 [S15] Missing critical upstream Reference values: ref_g_101, ref_d_101, ref_i_104
calculateReferenceModel @ 4011-Section15.js:1367
calculateAll @ 4011-Section15.js:1286
forceTEDITELIUpdate @ 4011-SectionIntegrator.js:305
initializeTEDITELIIntegration @ 4011-SectionIntegrator.js:241
(anonymous) @ 4011-SectionIntegrator.js:187
initializeAllIntegrations @ 4011-SectionIntegrator.js:184
(anonymous) @ 4011-SectionIntegrator.js:106
renderAllSections @ 4011-FieldManager.js:398
(anonymous) @ 4011-init.js:858Understand this warningAI
 ✅ S15 Reference Model: All values converted to numbers for proper math
 ✅ S15 Reference Model: Additional fuel variables declared for cost calculations
 [S15 DEBUG] 💰 Electricity price from S04: $0.13/kWh
 🔍 S15 TARGET UPSTREAM: target_i_104=116070.33, target_m_121=48980.79999999999, target_i_80=45879.580160000005
 [S15 DEBUG] 🧮 D141 calculation: 220216.85125050816 kWh/m²/yr × $0.13/kWh = $28628.19
 [ReferenceToggle] Pattern A initialization complete
 S02: Saved Target state to localStorage
 [S02] Reference results stored with ref_ prefix for downstream sections
 S02: Target defaults set (2022 reporting year) - overriding any localStorage empties
 S02: Reference defaults set (2020 reporting year) - overriding any localStorage empties
 S02: Loaded and merged Target state from localStorage
 [S02] Stored default energy costs in StateManager: {l_12: '0.1300', l_13: '0.5070', l_14: '1.6200', l_15: '180.00', l_16: '1.5000'}
 S02: Pattern A initialization complete.
 S02: Saved Target state to localStorage
 [S02] Reference results stored with ref_ prefix for downstream sections
 [S02] Reference results stored with ref_ prefix for downstream sections
 [S02] Refreshing UI for TARGET mode
 [S02] Updated d_13 dropdown = "OBC SB10 5.5-6 Z6" (target mode)
 [S02] Updated d_15 dropdown = "Self Reported" (target mode)
 [S02] Updated h_12 (reporting year) slider = "2022" (target mode)
 [S02] Updated h_15 = "1427.2" (target mode)
 [S02] Updated i_17 = "" (target mode)
 [S02] Updated l_12 = "$0.1300" (target mode)
 [S02] Updated l_13 = "$0.5070" (target mode)
 [S02] Updated l_14 = "$1.6200" (target mode)
 [S02] Updated l_15 = "$180.00" (target mode)
 [S02] Updated l_16 = "$1.5000" (target mode)
 S03: Sliders initialized via FieldManager
 S03: Section rendered - initializing Self-Contained State Module.
 S03: ModeManager exposed globally for cross-section integration.
 S03: Checking climate data availability (attempt 1/10)
 S03: Climate data available (8) ['BC', 'AB', 'SK', 'MB', 'ON', 'QC', 'NU', 'NT']
 S03: ClimateData available - initializing dropdowns
 S03: Populated province dropdown with options: (8) ['AB', 'BC', 'MB', 'NT', 'NU', 'ON', 'QC', 'SK']
 S03: Synced province "ON" to StateManager for cross-section communication
 City dropdown updated for ON - selected: Alexandria
 S03: Sliders initialized via FieldManager
 [Section03] Running Reference Model calculations...
 [Section03] Reference results stored with ref_ prefix for downstream sections: {h_23: '18', d_23: undefined, d_24: undefined, h_24: '24', d_20: undefined, …}
 [Section03] Reference Model calculations complete
 S03: Weather data updated for Alexandria, ON (Present)
 Section03: Province selected: ON
 S03: Synced province change "ON" to StateManager for S04 listeners
 City dropdown updated for ON - selected: Alexandria
 [Section03] Running Reference Model calculations...
4011-Section03.js:1347 [Section03] Reference results stored with ref_ prefix for downstream sections: {h_23: '18', d_23: undefined, d_24: undefined, h_24: '24', d_20: undefined, …}
4011-Section03.js:1318 [Section03] Reference Model calculations complete
4011-Section03.js:1118 S03: Weather data updated for Alexandria, ON (Present)
4011-Section03.js:1294 [Section03] Running Reference Model calculations...
4011-Section03.js:1347 [Section03] Reference results stored with ref_ prefix for downstream sections: {h_23: '18', d_23: undefined, d_24: undefined, h_24: '24', d_20: undefined, …}
4011-Section03.js:1318 [Section03] Reference Model calculations complete
4011-Section03.js:1934 S03: Self-Contained State Module initialization complete
4011-Section04.js:1583 [S04] Pattern A S04 section rendered
4011-Section04.js:199 S04: Initializing Pattern A ModeManager
4011-Section04.js:85 S04: TargetState defaults set
4011-Section04.js:103 S04: TargetState loaded from localStorage
4011-Section04.js:156 S04: ReferenceState defaults set
4011-Section04.js:202 S04: Pattern A initialization complete
4011-Section04.js:771 [S04] Starting dual-engine Excel-compliant calculations
4011-Section04.js:779 [S04] Calculating Target model
4011-Section04.js:679 [S04] Row 32 Subtotals - F32: 132938, G32: 6779.838, J32: 0, K32: 0
4011-Section04.js:792 [S04] Calculation error: ReferenceError: DualState is not defined
    at calculateRow35 (4011-Section04.js:747:18)
    at calculateTargetModel (4011-Section04.js:809:5)
    at calculateAll (4011-Section04.js:780:7)
    at Object.onSectionRendered (4011-Section04.js:1595:7)
    at initializeSectionEventHandlers (4011-FieldManager.js:322:23)
    at renderSection (4011-FieldManager.js:367:7)
    at 4011-FieldManager.js:394:7
    at Array.forEach (<anonymous>)
    at Object.renderAllSections (4011-FieldManager.js:393:27)
    at HTMLDocument.<anonymous> (index.html:1009:29)
calculateAll @ 4011-Section04.js:792
onSectionRendered @ 4011-Section04.js:1595
initializeSectionEventHandlers @ 4011-FieldManager.js:322
renderSection @ 4011-FieldManager.js:367
(anonymous) @ 4011-FieldManager.js:394
renderAllSections @ 4011-FieldManager.js:393
(anonymous) @ index.html:1009Understand this errorAI
4011-Section02.js:799 [S02] Reference results stored with ref_ prefix for downstream sections
4011-Section02.js:799 [S02] Reference results stored with ref_ prefix for downstream sections
 S09: Reference defaults loaded from standard: OBC SB10 5.5-6 Z6, lighting: 2.0
 S09: UI refreshed for target mode
 S09: Reference defaults loaded from standard: OBC SB10 5.5-6 Z6, lighting: 2.0
 S09: UI refreshed for target mode
 S10: Section rendered - initializing Self-Contained State Module.
 S10: Simplified global StateManager listeners added
 S10: ModeManager exposed globally for cross-section integration.
 S11: Section rendered - initializing Self-Contained State Module.
 S11: Reference defaults loaded from standard: OBC SB10 5.5-6 Z6
 S11: ModeManager exposed globally for cross-section integration.
 [S11] calculateAll TRIGGERED. isReferenceMode: false
 [Section13] 🔗 Attaching StateManager listeners...
 [Section13] 🔗 Attaching CRITICAL upstream listeners...
 [Section13] ✅ ALL LISTENERS ATTACHED SUCCESSFULLY
 S13: Section rendered - initializing Pattern A Dual-State Module.
 [S13 DEBUG] Loading reference standard: "OBC SB10 5.5-6 Z6"
 [S13 DEBUG] Found reference values: {f_113: '7.1', j_115: '0.90', d_118: '81', d_119: '8.33'}
 S13: Reference defaults loaded from standard: OBC SB10 5.5-6 Z6 {f_113: '7.1', j_115: '0.90', d_118: '81', d_119: '8.33', j_116: '3.3', …}
 [Section13] 🔗 Attaching StateManager listeners...
 [Section13] 🔗 Attaching CRITICAL upstream listeners...
 [Section13] ✅ ALL LISTENERS ATTACHED SUCCESSFULLY
 [Section13] 🚀 CALCULATEALL TRIGGERED - Running dual-engine calculations...
 [Section13] 🔄 Starting Reference Model calculations...
 [Section13] Running Reference Model calculations...
 [S13 DEBUG] Reading ref_d_127: direct="null", fallback="null", dom="0", final="0"
 [Section13] 🔥 REF HEATING: systemType="Gas", tedReference=0, hspf=7.1
4011-Section13.js:2509 [Section13] 🧊 COOLING CALC: mode=REF, coolingSystemType="Cooling", heatingType="Gas", isCoolingActive=true, coolingDemand=0
4011-Section13.js:2994 [S13 DEBUG] Storing ref_d_114 = 0
4011-Section13.js:2994 [S13 DEBUG] Storing ref_d_115 = 0
4011-Section13.js:2994 [S13 DEBUG] Storing ref_f_115 = 0
4011-Section13.js:2994 [S13 DEBUG] Storing ref_h_115 = 0
4011-Section13.js:2994 [S13 DEBUG] Storing ref_l_115 = 0
4011-Section13.js:2999 [Section13] Reference results stored with ref_ prefix for downstream sections
4011-Section13.js:3000 [S13 DEBUG] Total Reference results stored: 33
4011-Section13.js:2933 [Section13] Reference Model calculations complete
4011-Section13.js:2881 [Section13] ✅ Reference Model complete
4011-Section13.js:2883 [Section13] 🔄 Starting Target Model calculations...
4011-Section13.js:2947 [Section13] Running Target Model calculations...
4011-Section13.js:2317 [Section13] 🔥 HEATING CALC: mode=TGT, systemType="Heatpump", tedTarget=0, source=d_127
4011-Section13.js:2509 [Section13] 🧊 COOLING CALC: mode=TGT, coolingSystemType="Cooling", heatingType="Heatpump", isCoolingActive=true, coolingDemand=0
4011-Section13.js:2568 [Section13] 🧊 COOLING RESULTS: d_117=0, j_116=2.663540445486518, l_116=0, l_114=0
4011-Section13.js:3124 [Section13] 🔥 TGT HEATING: systemType="Heatpump", tedTarget=0, hspf=12.5
4011-Section13.js:2509 [Section13] 🧊 COOLING CALC: mode=TGT, coolingSystemType="Cooling", heatingType="Heatpump", isCoolingActive=true, coolingDemand=0
4011-Section13.js:2568 [Section13] 🧊 COOLING RESULTS: d_117=0, j_116=2.663540445486518, l_116=0, l_114=0
4011-Section10.js:2111 S10: Global listener triggered by m_121, recalculating all.
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
 S13: Pattern A initialization complete.
 S14: Section rendered - initializing Pattern A Dual-State Module.
 S14: Reference defaults loaded from standard: OBC SB10 5.5-6 Z6
 [S14 DEBUG] 🔄 Running Reference Model calculations...
 [S14 DEBUG] ✅ Converted to numbers - ref_d_127 calculation: 59532.28501397147 + 119064.57002794294 + 23178.39 + 84594.73968 - 45879.580160000005
 [S14 DEBUG] ✅ ref_d_127 = 240490.4045619144 (should be numeric, not NaN)
 [S14 DEBUG] ✅ Stored ref_d_127 = 240490.4045619144 in StateManager
 [S14 DEBUG] 🔄 Continuing with other Reference calculations...
 [S14 DEBUG] ref_d_128 calculation: 59532.28501397147 + 119064.57002794294 + 23178.39 - 45879.580160000005 = 155895.6648819144
 [Section13] 📡 🔥 d_127 (TED) listener triggered - S14 energy demand changed!
 [Section13] 🔥 HEATING CALC: mode=TGT, systemType="Heatpump", tedTarget=119171.54798887548, source=d_127
 [Section13] 🧊 COOLING CALC: mode=TGT, coolingSystemType="Cooling", heatingType="Heatpump", isCoolingActive=true, coolingDemand=0
 [Section13] 🧊 COOLING RESULTS: d_117=0, j_116=2.663540445486518, l_116=0, l_114=0
 [Section13] 📡 🔥 d_127 (TED) listener triggered - S14 energy demand changed!
 [Section13] 🔥 HEATING CALC: mode=TGT, systemType="Heatpump", tedTarget=119171.54798887548, source=d_127
 [Section13] 🧊 COOLING CALC: mode=TGT, coolingSystemType="Cooling", heatingType="Heatpump", isCoolingActive=true, coolingDemand=0
 [Section13] 🧊 COOLING RESULTS: d_117=0, j_116=2.663540445486518, l_116=0, l_114=0
 [Section13] 🧊 COOLING CALC: mode=TGT, coolingSystemType="Cooling", heatingType="Heatpump", isCoolingActive=true, coolingDemand=10192.893604542265
 [Section13] 🧊 COOLING RESULTS: d_117=3826.8214105081656, j_116=2.663540445486518, l_116=0, l_114=6366.0721940341
 [Section13] 🧊 COOLING CALC: mode=TGT, coolingSystemType="Cooling", heatingType="Heatpump", isCoolingActive=true, coolingDemand=10192.893604542265
 [Section13] 🧊 COOLING RESULTS: d_117=3826.8214105081656, j_116=2.663540445486518, l_116=0, l_114=6366.0721940341
 S14: Pattern A initialization complete.
 🔍 S15 REFERENCE UPSTREAM: ref_i_104=0, ref_m_121=84594.73968, ref_i_80=0
 [S15] Missing critical upstream Reference values: ref_g_101, ref_d_101, ref_i_104
calculateReferenceModel @ 4011-Section15.js:1367
calculateAll @ 4011-Section15.js:1286
initializeEventHandlers @ 4011-Section15.js:2004
initializeSectionEventHandlers @ 4011-FieldManager.js:310
renderSection @ 4011-FieldManager.js:367
(anonymous) @ 4011-FieldManager.js:394
renderAllSections @ 4011-FieldManager.js:393
(anonymous) @ index.html:1009Understand this warningAI
 ✅ S15 Reference Model: All values converted to numbers for proper math
 ✅ S15 Reference Model: Additional fuel variables declared for cost calculations
 🔍 S15 REFERENCE UPSTREAM: ref_i_104=0, ref_m_121=84594.73968, ref_i_80=0
 [S15] Missing critical upstream Reference values: ref_g_101, ref_d_101, ref_i_104
calculateReferenceModel @ 4011-Section15.js:1367
calculateAll @ 4011-Section15.js:1286
(anonymous) @ 4011-Section15.js:1942
(anonymous) @ 4011-StateManager.js:486
notifyListeners @ 4011-StateManager.js:484
setValue @ 4011-StateManager.js:362
window.TEUI.StateManager.setValue @ 4011-ComponentBridge.js:429
setCalculatedValue @ 4011-Section01.js:376
calculateReferenceModel @ 4011-Section01.js:478
runAllCalculations @ 4011-Section01.js:1254
(anonymous) @ 4011-Section01.js:1327
(anonymous) @ 4011-StateManager.js:486
notifyListeners @ 4011-StateManager.js:484
setValue @ 4011-StateManager.js:344
window.TEUI.StateManager.setValue @ 4011-ComponentBridge.js:429
setRefValueIfChanged @ 4011-Section15.js:1315
calculateReferenceModel @ 4011-Section15.js:1422
calculateAll @ 4011-Section15.js:1286
initializeEventHandlers @ 4011-Section15.js:2004
initializeSectionEventHandlers @ 4011-FieldManager.js:310
renderSection @ 4011-FieldManager.js:367
(anonymous) @ 4011-FieldManager.js:394
renderAllSections @ 4011-FieldManager.js:393
(anonymous) @ index.html:1009Understand this warningAI
 ✅ S15 Reference Model: All values converted to numbers for proper math
 ✅ S15 Reference Model: Additional fuel variables declared for cost calculations
 🔍 S15 REFERENCE UPSTREAM: ref_i_104=0, ref_m_121=84594.73968, ref_i_80=0
 [S15] Missing critical upstream Reference values: ref_g_101, ref_d_101, ref_i_104
calculateReferenceModel @ 4011-Section15.js:1367
calculateAll @ 4011-Section15.js:1286
(anonymous) @ 4011-Section15.js:1942
(anonymous) @ 4011-StateManager.js:486
notifyListeners @ 4011-StateManager.js:484
setValue @ 4011-StateManager.js:362
window.TEUI.StateManager.setValue @ 4011-ComponentBridge.js:429
calculateReferenceModel @ 4011-Section15.js:1516
calculateAll @ 4011-Section15.js:1286
(anonymous) @ 4011-Section15.js:1942
(anonymous) @ 4011-StateManager.js:486
notifyListeners @ 4011-StateManager.js:484
setValue @ 4011-StateManager.js:362
window.TEUI.StateManager.setValue @ 4011-ComponentBridge.js:429
setCalculatedValue @ 4011-Section01.js:376
calculateReferenceModel @ 4011-Section01.js:478
runAllCalculations @ 4011-Section01.js:1254
(anonymous) @ 4011-Section01.js:1327
(anonymous) @ 4011-StateManager.js:486
notifyListeners @ 4011-StateManager.js:484
setValue @ 4011-StateManager.js:344
window.TEUI.StateManager.setValue @ 4011-ComponentBridge.js:429
setRefValueIfChanged @ 4011-Section15.js:1315
calculateReferenceModel @ 4011-Section15.js:1422
calculateAll @ 4011-Section15.js:1286
initializeEventHandlers @ 4011-Section15.js:2004
initializeSectionEventHandlers @ 4011-FieldManager.js:310
renderSection @ 4011-FieldManager.js:367
(anonymous) @ 4011-FieldManager.js:394
renderAllSections @ 4011-FieldManager.js:393
(anonymous) @ index.html:1009Understand this warningAI
 ✅ S15 Reference Model: All values converted to numbers for proper math
 ✅ S15 Reference Model: Additional fuel variables declared for cost calculations
 [S15 DEBUG] 💰 Electricity price from S04: $0.13/kWh
 🔍 S15 TARGET UPSTREAM: target_i_104=116070.33, target_m_121=48980.79999999999, target_i_80=45879.580160000005
 [S04] S15 target electricity changed: d_136
 [S04] Starting dual-engine Excel-compliant calculations
 [S04] Calculating Target model
 [S04] Row 32 Subtotals - F32: 132938, G32: 6779.838, J32: 133574.3671495516, K32: 6812.292724627132
 🔍 S15 REFERENCE UPSTREAM: ref_i_104=0, ref_m_121=84594.73968, ref_i_80=0
 [S15] Missing critical upstream Reference values: ref_g_101, ref_d_101, ref_i_104
calculateReferenceModel @ 4011-Section15.js:1367
calculateAll @ 4011-Section15.js:1286
(anonymous) @ 4011-Section15.js:1942
(anonymous) @ 4011-StateManager.js:486
notifyListeners @ 4011-StateManager.js:484
setValue @ 4011-StateManager.js:362
updateTEUICalculations @ 4011-StateManager.js:929
(anonymous) @ 4011-StateManager.js:199
(anonymous) @ 4011-StateManager.js:486
notifyListeners @ 4011-StateManager.js:484
setValue @ 4011-StateManager.js:362
window.TEUI.StateManager.setValue @ 4011-ComponentBridge.js:429
setValue @ 4011-Section04.js:232
setCalculatedValue @ 4011-Section04.js:38
calculateRow32 @ 4011-Section04.js:684
calculateTargetModel @ 4011-Section04.js:806
calculateAll @ 4011-Section04.js:780
(anonymous) @ 4011-Section04.js:1529
(anonymous) @ 4011-StateManager.js:486
notifyListeners @ 4011-StateManager.js:484
setValue @ 4011-StateManager.js:362
window.TEUI.StateManager.setValue @ 4011-ComponentBridge.js:429
setCalculatedValue @ 4011-Section15.js:122
calculateValues @ 4011-Section15.js:1690
calculateTargetModel @ 4011-Section15.js:1564
calculateAll @ 4011-Section15.js:1287
(anonymous) @ 4011-Section15.js:1942
(anonymous) @ 4011-StateManager.js:486
notifyListeners @ 4011-StateManager.js:484
setValue @ 4011-StateManager.js:362
window.TEUI.StateManager.setValue @ 4011-ComponentBridge.js:429
calculateReferenceModel @ 4011-Section15.js:1516
calculateAll @ 4011-Section15.js:1286
(anonymous) @ 4011-Section15.js:1942
(anonymous) @ 4011-StateManager.js:486
notifyListeners @ 4011-StateManager.js:484
setValue @ 4011-StateManager.js:362
window.TEUI.StateManager.setValue @ 4011-ComponentBridge.js:429
setCalculatedValue @ 4011-Section01.js:376
calculateReferenceModel @ 4011-Section01.js:478
runAllCalculations @ 4011-Section01.js:1254
(anonymous) @ 4011-Section01.js:1327
(anonymous) @ 4011-StateManager.js:486
notifyListeners @ 4011-StateManager.js:484
setValue @ 4011-StateManager.js:344
window.TEUI.StateManager.setValue @ 4011-ComponentBridge.js:429
setRefValueIfChanged @ 4011-Section15.js:1315
calculateReferenceModel @ 4011-Section15.js:1422
calculateAll @ 4011-Section15.js:1286
initializeEventHandlers @ 4011-Section15.js:2004
initializeSectionEventHandlers @ 4011-FieldManager.js:310
renderSection @ 4011-FieldManager.js:367
(anonymous) @ 4011-FieldManager.js:394
renderAllSections @ 4011-FieldManager.js:393
(anonymous) @ index.html:1009Understand this warningAI
 ✅ S15 Reference Model: All values converted to numbers for proper math
 ✅ S15 Reference Model: Additional fuel variables declared for cost calculations
 [S15 DEBUG] 💰 Electricity price from S04: $0.13/kWh
 🔍 S15 TARGET UPSTREAM: target_i_104=116070.33, target_m_121=48980.79999999999, target_i_80=45879.580160000005
 🔍 S15 REFERENCE UPSTREAM: ref_i_104=0, ref_m_121=84594.73968, ref_i_80=0
 [S15] Missing critical upstream Reference values: ref_g_101, ref_d_101, ref_i_104
calculateReferenceModel @ 4011-Section15.js:1367
calculateAll @ 4011-Section15.js:1286
(anonymous) @ 4011-Section15.js:1942
(anonymous) @ 4011-StateManager.js:486
notifyListeners @ 4011-StateManager.js:484
setValue @ 4011-StateManager.js:362
window.TEUI.StateManager.setValue @ 4011-ComponentBridge.js:429
calculateValues @ 4011-Section15.js:1702
calculateTargetModel @ 4011-Section15.js:1564
calculateAll @ 4011-Section15.js:1287
(anonymous) @ 4011-Section15.js:1942
(anonymous) @ 4011-StateManager.js:486
notifyListeners @ 4011-StateManager.js:484
setValue @ 4011-StateManager.js:362
updateTEUICalculations @ 4011-StateManager.js:929
(anonymous) @ 4011-StateManager.js:199
(anonymous) @ 4011-StateManager.js:486
notifyListeners @ 4011-StateManager.js:484
setValue @ 4011-StateManager.js:362
window.TEUI.StateManager.setValue @ 4011-ComponentBridge.js:429
setValue @ 4011-Section04.js:232
setCalculatedValue @ 4011-Section04.js:38
calculateRow32 @ 4011-Section04.js:684
calculateTargetModel @ 4011-Section04.js:806
calculateAll @ 4011-Section04.js:780
(anonymous) @ 4011-Section04.js:1529
(anonymous) @ 4011-StateManager.js:486
notifyListeners @ 4011-StateManager.js:484
setValue @ 4011-StateManager.js:362
window.TEUI.StateManager.setValue @ 4011-ComponentBridge.js:429
setCalculatedValue @ 4011-Section15.js:122
calculateValues @ 4011-Section15.js:1690
calculateTargetModel @ 4011-Section15.js:1564
calculateAll @ 4011-Section15.js:1287
(anonymous) @ 4011-Section15.js:1942
(anonymous) @ 4011-StateManager.js:486
notifyListeners @ 4011-StateManager.js:484
setValue @ 4011-StateManager.js:362
window.TEUI.StateManager.setValue @ 4011-ComponentBridge.js:429
calculateReferenceModel @ 4011-Section15.js:1516
calculateAll @ 4011-Section15.js:1286
(anonymous) @ 4011-Section15.js:1942
(anonymous) @ 4011-StateManager.js:486
notifyListeners @ 4011-StateManager.js:484
setValue @ 4011-StateManager.js:362
window.TEUI.StateManager.setValue @ 4011-ComponentBridge.js:429
setCalculatedValue @ 4011-Section01.js:376
calculateReferenceModel @ 4011-Section01.js:478
runAllCalculations @ 4011-Section01.js:1254
(anonymous) @ 4011-Section01.js:1327
(anonymous) @ 4011-StateManager.js:486
notifyListeners @ 4011-StateManager.js:484
setValue @ 4011-StateManager.js:344
window.TEUI.StateManager.setValue @ 4011-ComponentBridge.js:429
setRefValueIfChanged @ 4011-Section15.js:1315
calculateReferenceModel @ 4011-Section15.js:1422
calculateAll @ 4011-Section15.js:1286
initializeEventHandlers @ 4011-Section15.js:2004
initializeSectionEventHandlers @ 4011-FieldManager.js:310
renderSection @ 4011-FieldManager.js:367
(anonymous) @ 4011-FieldManager.js:394
renderAllSections @ 4011-FieldManager.js:393
(anonymous) @ index.html:1009Understand this warningAI
 ✅ S15 Reference Model: All values converted to numbers for proper math
 ✅ S15 Reference Model: Additional fuel variables declared for cost calculations
 [S15 DEBUG] 💰 Electricity price from S04: $0.13/kWh
 🔍 S15 TARGET UPSTREAM: target_i_104=116070.33, target_m_121=48980.79999999999, target_i_80=45879.580160000005
 [S15 DEBUG] 🧮 D141 calculation: 220216.85125050816 kWh/m²/yr × $0.13/kWh = $28628.19
 [S15 DEBUG] 🧮 D141 calculation: 220216.85125050816 kWh/m²/yr × $0.13/kWh = $28628.19
 [S02] Reference results stored with ref_ prefix for downstream sections
 [S02] Reference results stored with ref_ prefix for downstream sections
 🔍 S15 REFERENCE UPSTREAM: ref_i_104=0, ref_m_121=84594.73968, ref_i_80=0
 [S15] Missing critical upstream Reference values: ref_g_101, ref_d_101, ref_i_104
calculateReferenceModel @ 4011-Section15.js:1367
calculateAll @ 4011-Section15.js:1286
(anonymous) @ 4011-Section15.js:1942
(anonymous) @ 4011-StateManager.js:486
notifyListeners @ 4011-StateManager.js:484
setValue @ 4011-StateManager.js:362
window.TEUI.StateManager.setValue @ 4011-ComponentBridge.js:429
setValue @ 4011-Section04.js:232
setCalculatedValue @ 4011-Section04.js:38
calculateRow32 @ 4011-Section04.js:685
calculateTargetModel @ 4011-Section04.js:806
calculateAll @ 4011-Section04.js:780
(anonymous) @ 4011-Section04.js:1529
(anonymous) @ 4011-StateManager.js:486
notifyListeners @ 4011-StateManager.js:484
setValue @ 4011-StateManager.js:362
window.TEUI.StateManager.setValue @ 4011-ComponentBridge.js:429
setCalculatedValue @ 4011-Section15.js:122
calculateValues @ 4011-Section15.js:1690
calculateTargetModel @ 4011-Section15.js:1564
calculateAll @ 4011-Section15.js:1287
(anonymous) @ 4011-Section15.js:1942
(anonymous) @ 4011-StateManager.js:486
notifyListeners @ 4011-StateManager.js:484
setValue @ 4011-StateManager.js:362
window.TEUI.StateManager.setValue @ 4011-ComponentBridge.js:429
calculateReferenceModel @ 4011-Section15.js:1516
calculateAll @ 4011-Section15.js:1286
(anonymous) @ 4011-Section15.js:1942
(anonymous) @ 4011-StateManager.js:486
notifyListeners @ 4011-StateManager.js:484
setValue @ 4011-StateManager.js:362
window.TEUI.StateManager.setValue @ 4011-ComponentBridge.js:429
setCalculatedValue @ 4011-Section01.js:376
calculateReferenceModel @ 4011-Section01.js:478
runAllCalculations @ 4011-Section01.js:1254
(anonymous) @ 4011-Section01.js:1327
(anonymous) @ 4011-StateManager.js:486
notifyListeners @ 4011-StateManager.js:484
setValue @ 4011-StateManager.js:344
window.TEUI.StateManager.setValue @ 4011-ComponentBridge.js:429
setRefValueIfChanged @ 4011-Section15.js:1315
calculateReferenceModel @ 4011-Section15.js:1422
calculateAll @ 4011-Section15.js:1286
initializeEventHandlers @ 4011-Section15.js:2004
initializeSectionEventHandlers @ 4011-FieldManager.js:310
renderSection @ 4011-FieldManager.js:367
(anonymous) @ 4011-FieldManager.js:394
renderAllSections @ 4011-FieldManager.js:393
(anonymous) @ index.html:1009Understand this warningAI
 ✅ S15 Reference Model: All values converted to numbers for proper math
 ✅ S15 Reference Model: Additional fuel variables declared for cost calculations
 [S15 DEBUG] 💰 Electricity price from S04: $0.13/kWh
 🔍 S15 TARGET UPSTREAM: target_i_104=116070.33, target_m_121=48980.79999999999, target_i_80=45879.580160000005
 [S15 DEBUG] 🧮 D141 calculation: 220216.85125050816 kWh/m²/yr × $0.13/kWh = $28628.19
 [S04] Calculation error: 
calculateAll @ 4011-Section04.js:792
(anonymous) @ 4011-Section04.js:1529
(anonymous) @ 4011-StateManager.js:486
notifyListeners @ 4011-StateManager.js:484
setValue @ 4011-StateManager.js:362
window.TEUI.StateManager.setValue @ 4011-ComponentBridge.js:429
setCalculatedValue @ 4011-Section15.js:122
calculateValues @ 4011-Section15.js:1690
calculateTargetModel @ 4011-Section15.js:1564
calculateAll @ 4011-Section15.js:1287
(anonymous) @ 4011-Section15.js:1942
(anonymous) @ 4011-StateManager.js:486
notifyListeners @ 4011-StateManager.js:484
setValue @ 4011-StateManager.js:362
window.TEUI.StateManager.setValue @ 4011-ComponentBridge.js:429
calculateReferenceModel @ 4011-Section15.js:1516
calculateAll @ 4011-Section15.js:1286
(anonymous) @ 4011-Section15.js:1942
(anonymous) @ 4011-StateManager.js:486
notifyListeners @ 4011-StateManager.js:484
setValue @ 4011-StateManager.js:362
window.TEUI.StateManager.setValue @ 4011-ComponentBridge.js:429
setCalculatedValue @ 4011-Section01.js:376
calculateReferenceModel @ 4011-Section01.js:478
runAllCalculations @ 4011-Section01.js:1254
(anonymous) @ 4011-Section01.js:1327
(anonymous) @ 4011-StateManager.js:486
notifyListeners @ 4011-StateManager.js:484
setValue @ 4011-StateManager.js:344
window.TEUI.StateManager.setValue @ 4011-ComponentBridge.js:429
setRefValueIfChanged @ 4011-Section15.js:1315
calculateReferenceModel @ 4011-Section15.js:1422
calculateAll @ 4011-Section15.js:1286
initializeEventHandlers @ 4011-Section15.js:2004
initializeSectionEventHandlers @ 4011-FieldManager.js:310
renderSection @ 4011-FieldManager.js:367
(anonymous) @ 4011-FieldManager.js:394
renderAllSections @ 4011-FieldManager.js:393
(anonymous) @ index.html:1009Understand this errorAI
 [S15 DEBUG] 🧮 D141 calculation: 220216.85125050816 kWh/m²/yr × $0.13/kWh = $28628.19
 [S15 DEBUG] 💰 Electricity price from S04: $0.13/kWh
 🔍 S15 TARGET UPSTREAM: target_i_104=116070.33, target_m_121=48980.79999999999, target_i_80=45879.580160000005
 [S15 DEBUG] 🧮 D141 calculation: 220216.85125050816 kWh/m²/yr × $0.13/kWh = $28628.19
 🔍 S15 REFERENCE UPSTREAM: ref_i_104=0, ref_m_121=84594.73968, ref_i_80=0
 [S15] Missing critical upstream Reference values: ref_g_101, ref_d_101, ref_i_104
calculateReferenceModel @ 4011-Section15.js:1367
calculateAll @ 4011-Section15.js:1286
(anonymous) @ 4011-Section15.js:1942
(anonymous) @ 4011-StateManager.js:486
notifyListeners @ 4011-StateManager.js:484
setValue @ 4011-StateManager.js:362
window.TEUI.StateManager.setValue @ 4011-ComponentBridge.js:429
setCalculatedValue @ 4011-Section01.js:376
calculateTargetModel @ 4011-Section01.js:598
runAllCalculations @ 4011-Section01.js:1255
(anonymous) @ 4011-Section01.js:1327
(anonymous) @ 4011-StateManager.js:486
notifyListeners @ 4011-StateManager.js:484
setValue @ 4011-StateManager.js:344
window.TEUI.StateManager.setValue @ 4011-ComponentBridge.js:429
setRefValueIfChanged @ 4011-Section15.js:1315
calculateReferenceModel @ 4011-Section15.js:1422
calculateAll @ 4011-Section15.js:1286
initializeEventHandlers @ 4011-Section15.js:2004
initializeSectionEventHandlers @ 4011-FieldManager.js:310
renderSection @ 4011-FieldManager.js:367
(anonymous) @ 4011-FieldManager.js:394
renderAllSections @ 4011-FieldManager.js:393
(anonymous) @ index.html:1009Understand this warningAI
 ✅ S15 Reference Model: All values converted to numbers for proper math
 ✅ S15 Reference Model: Additional fuel variables declared for cost calculations
 [S15 DEBUG] 💰 Electricity price from S04: $0.13/kWh
 🔍 S15 TARGET UPSTREAM: target_i_104=116070.33, target_m_121=48980.79999999999, target_i_80=45879.580160000005
 [S15 DEBUG] 🧮 D141 calculation: 220216.85125050816 kWh/m²/yr × $0.13/kWh = $28628.19
 🔍 S15 REFERENCE UPSTREAM: ref_i_104=0, ref_m_121=84594.73968, ref_i_80=0
 [S15] Missing critical upstream Reference values: ref_g_101, ref_d_101, ref_i_104
calculateReferenceModel @ 4011-Section15.js:1367
calculateAll @ 4011-Section15.js:1286
(anonymous) @ 4011-Section15.js:1942
(anonymous) @ 4011-StateManager.js:486
notifyListeners @ 4011-StateManager.js:484
setValue @ 4011-StateManager.js:362
window.TEUI.StateManager.setValue @ 4011-ComponentBridge.js:429
setCalculatedValue @ 4011-Section01.js:383
calculateTargetModel @ 4011-Section01.js:598
runAllCalculations @ 4011-Section01.js:1255
(anonymous) @ 4011-Section01.js:1327
(anonymous) @ 4011-StateManager.js:486
notifyListeners @ 4011-StateManager.js:484
setValue @ 4011-StateManager.js:344
window.TEUI.StateManager.setValue @ 4011-ComponentBridge.js:429
setRefValueIfChanged @ 4011-Section15.js:1315
calculateReferenceModel @ 4011-Section15.js:1422
calculateAll @ 4011-Section15.js:1286
initializeEventHandlers @ 4011-Section15.js:2004
initializeSectionEventHandlers @ 4011-FieldManager.js:310
renderSection @ 4011-FieldManager.js:367
(anonymous) @ 4011-FieldManager.js:394
renderAllSections @ 4011-FieldManager.js:393
(anonymous) @ index.html:1009Understand this warningAI
 ✅ S15 Reference Model: All values converted to numbers for proper math
 ✅ S15 Reference Model: Additional fuel variables declared for cost calculations
 [S15 DEBUG] 💰 Electricity price from S04: $0.13/kWh
 🔍 S15 TARGET UPSTREAM: target_i_104=116070.33, target_m_121=48980.79999999999, target_i_80=45879.580160000005
 🔍 S15 REFERENCE UPSTREAM: ref_i_104=0, ref_m_121=84594.73968, ref_i_80=0
 [S15] Missing critical upstream Reference values: ref_g_101, ref_d_101, ref_i_104
calculateReferenceModel @ 4011-Section15.js:1367
calculateAll @ 4011-Section15.js:1286
(anonymous) @ 4011-Section15.js:1942
(anonymous) @ 4011-StateManager.js:486
notifyListeners @ 4011-StateManager.js:484
setValue @ 4011-StateManager.js:362
window.TEUI.StateManager.setValue @ 4011-ComponentBridge.js:429
calculateValues @ 4011-Section15.js:1702
calculateTargetModel @ 4011-Section15.js:1564
calculateAll @ 4011-Section15.js:1287
(anonymous) @ 4011-Section15.js:1942
(anonymous) @ 4011-StateManager.js:486
notifyListeners @ 4011-StateManager.js:484
setValue @ 4011-StateManager.js:362
window.TEUI.StateManager.setValue @ 4011-ComponentBridge.js:429
setCalculatedValue @ 4011-Section01.js:383
calculateTargetModel @ 4011-Section01.js:598
runAllCalculations @ 4011-Section01.js:1255
(anonymous) @ 4011-Section01.js:1327
(anonymous) @ 4011-StateManager.js:486
notifyListeners @ 4011-StateManager.js:484
setValue @ 4011-StateManager.js:344
window.TEUI.StateManager.setValue @ 4011-ComponentBridge.js:429
setRefValueIfChanged @ 4011-Section15.js:1315
calculateReferenceModel @ 4011-Section15.js:1422
calculateAll @ 4011-Section15.js:1286
initializeEventHandlers @ 4011-Section15.js:2004
initializeSectionEventHandlers @ 4011-FieldManager.js:310
renderSection @ 4011-FieldManager.js:367
(anonymous) @ 4011-FieldManager.js:394
renderAllSections @ 4011-FieldManager.js:393
(anonymous) @ index.html:1009Understand this warningAI
 ✅ S15 Reference Model: All values converted to numbers for proper math
 ✅ S15 Reference Model: Additional fuel variables declared for cost calculations
 [S15 DEBUG] 💰 Electricity price from S04: $0.13/kWh
 🔍 S15 TARGET UPSTREAM: target_i_104=116070.33, target_m_121=48980.79999999999, target_i_80=45879.580160000005
 [S15 DEBUG] 🧮 D141 calculation: 220216.85125050816 kWh/m²/yr × $0.13/kWh = $28628.19
 [S15 DEBUG] 🧮 D141 calculation: 220216.85125050816 kWh/m²/yr × $0.13/kWh = $28628.19
 [S15 DEBUG] 💰 Electricity price from S04: $0.13/kWh
 🔍 S15 TARGET UPSTREAM: target_i_104=116070.33, target_m_121=48980.79999999999, target_i_80=45879.580160000005
 [S15 DEBUG] 🧮 D141 calculation: 220216.85125050816 kWh/m²/yr × $0.13/kWh = $28628.19
 S15: Target defaults set
 S15: Reference defaults set
 S15: Pattern A initialization complete.
 🔍 S15 REFERENCE UPSTREAM: ref_i_104=0, ref_m_121=84594.73968, ref_i_80=0
 [S15] Missing critical upstream Reference values: ref_g_101, ref_d_101, ref_i_104
calculateReferenceModel @ 4011-Section15.js:1367
calculateAll @ 4011-Section15.js:1286
initializeEventHandlers @ 4011-Section15.js:2004
onSectionRendered @ 4011-Section15.js:2029
initializeSectionEventHandlers @ 4011-FieldManager.js:322
renderSection @ 4011-FieldManager.js:367
(anonymous) @ 4011-FieldManager.js:394
renderAllSections @ 4011-FieldManager.js:393
(anonymous) @ index.html:1009Understand this warningAI
 ✅ S15 Reference Model: All values converted to numbers for proper math
 ✅ S15 Reference Model: Additional fuel variables declared for cost calculations
 [S15 DEBUG] 💰 Electricity price from S04: $0.13/kWh
 🔍 S15 TARGET UPSTREAM: target_i_104=116070.33, target_m_121=48980.79999999999, target_i_80=45879.580160000005
 [S15 DEBUG] 🧮 D141 calculation: 220216.85125050816 kWh/m²/yr × $0.13/kWh = $28628.19
 Section03: Province selected: ON
 S03: Synced province change "ON" to StateManager for S04 listeners
 City dropdown updated for ON - selected: Alexandria
 🔍 S15 REFERENCE UPSTREAM: ref_i_104=0, ref_m_121=84594.73968, ref_i_80=0
4011-Section15.js:1367 [S15] Missing critical upstream Reference values: ref_g_101, ref_d_101, ref_i_104
calculateReferenceModel @ 4011-Section15.js:1367
calculateAll @ 4011-Section15.js:1286
forceTEDITELIUpdate @ 4011-SectionIntegrator.js:305
initializeTEDITELIIntegration @ 4011-SectionIntegrator.js:241
(anonymous) @ 4011-SectionIntegrator.js:187
initializeAllIntegrations @ 4011-SectionIntegrator.js:184
(anonymous) @ 4011-SectionIntegrator.js:106
renderAllSections @ 4011-FieldManager.js:398
(anonymous) @ index.html:1009Understand this warningAI
4011-Section15.js:1379 ✅ S15 Reference Model: All values converted to numbers for proper math
4011-Section15.js:1390 ✅ S15 Reference Model: Additional fuel variables declared for cost calculations
4011-Section15.js:1591 [S15 DEBUG] 💰 Electricity price from S04: $0.13/kWh
4011-Section15.js:1610 🔍 S15 TARGET UPSTREAM: target_i_104=116070.33, target_m_121=48980.79999999999, target_i_80=45879.580160000005
4011-Section15.js:1779 [S15 DEBUG] 🧮 D141 calculation: 220216.85125050816 kWh/m²/yr × $0.13/kWh = $28628.19
4011-Section03.js:957 Section03: Province selected: ON
4011-Section03.js:966 S03: Synced province change "ON" to StateManager for S04 listeners
4011-Section03.js:1022 City dropdown updated for ON - selected: Alexandria
4011-Section15.js:1338 🔍 S15 REFERENCE UPSTREAM: ref_i_104=0, ref_m_121=84594.73968, ref_i_80=0
4011-Section15.js:1367 [S15] Missing critical upstream Reference values: ref_g_101, ref_d_101, ref_i_104
calculateReferenceModel @ 4011-Section15.js:1367
calculateAll @ 4011-Section15.js:1286
forceTEDITELIUpdate @ 4011-SectionIntegrator.js:305
initializeTEDITELIIntegration @ 4011-SectionIntegrator.js:241
(anonymous) @ 4011-SectionIntegrator.js:187
initializeAllIntegrations @ 4011-SectionIntegrator.js:184
(anonymous) @ 4011-SectionIntegrator.js:106
renderAllSections @ 4011-FieldManager.js:398
(anonymous) @ index.html:1009Understand this warningAI
4011-Section15.js:1379 ✅ S15 Reference Model: All values converted to numbers for proper math
4011-Section15.js:1390 ✅ S15 Reference Model: Additional fuel variables declared for cost calculations
4011-Section15.js:1591 [S15 DEBUG] 💰 Electricity price from S04: $0.13/kWh
4011-Section15.js:1610 🔍 S15 TARGET UPSTREAM: target_i_104=116070.33, target_m_121=48980.79999999999, target_i_80=45879.580160000005
4011-Section15.js:1779 [S15 DEBUG] 🧮 D141 calculation: 220216.85125050816 kWh/m²/yr × $0.13/kWh = $28628.19
4011-ComponentBridge.js:408 🔄 ComponentBridge: Dual-state sync already initialized
4011-Section02.js:1445 S02: Saved Target state to localStorage
4011-Section02.js:799 [S02] Reference results stored with ref_ prefix for downstream sections
 S02: Target defaults set (2022 reporting year) - overriding any localStorage empties
 S02: Reference defaults set (2020 reporting year) - overriding any localStorage empties
 S02: Loaded and merged Target state from localStorage
 [S02] Stored default energy costs in StateManager: {l_12: '0.1300', l_13: '0.5070', l_14: '1.6200', l_15: '180.00', l_16: '1.5000'}
 S02: Pattern A initialization complete.
 S02: Saved Target state to localStorage
 [S02] Reference results stored with ref_ prefix for downstream sections
 [S02] Reference results stored with ref_ prefix for downstream sections
 [S02] Refreshing UI for TARGET mode
 [S02] Updated d_13 dropdown = "OBC SB10 5.5-6 Z6" (target mode)
 [S02] Updated d_15 dropdown = "Self Reported" (target mode)
 [S02] Updated h_12 (reporting year) slider = "2022" (target mode)
 [S02] Updated h_15 = "1427.2" (target mode)
 [S02] Updated i_17 = "" (target mode)
 [S02] Updated l_12 = "$0.1300" (target mode)
 [S02] Updated l_13 = "$0.5070" (target mode)
 [S02] Updated l_14 = "$1.6200" (target mode)
 [S02] Updated l_15 = "$180.00" (target mode)
 [S02] Updated l_16 = "$1.5000" (target mode)
 S03: Sliders initialized via FieldManager
 S03: Section rendered - initializing Self-Contained State Module.
 S03: ModeManager exposed globally for cross-section integration.
 S03: Checking climate data availability (attempt 1/10)
 S03: Climate data available (8) ['BC', 'AB', 'SK', 'MB', 'ON', 'QC', 'NU', 'NT']
 S03: ClimateData available - initializing dropdowns
 S03: Populated province dropdown with options: (8) ['AB', 'BC', 'MB', 'NT', 'NU', 'ON', 'QC', 'SK']
 S03: Synced province "ON" to StateManager for cross-section communication
 City dropdown updated for ON - selected: Alexandria
 S03: Sliders initialized via FieldManager
 [Section03] Running Reference Model calculations...
 [Section03] Reference results stored with ref_ prefix for downstream sections: {h_23: '18', d_23: undefined, d_24: undefined, h_24: '24', d_20: undefined, …}
 [Section03] Reference Model calculations complete
 S03: Weather data updated for Alexandria, ON (Present)
 Section03: Province selected: ON
 S03: Synced province change "ON" to StateManager for S04 listeners
 City dropdown updated for ON - selected: Alexandria
 [Section03] Running Reference Model calculations...
 [Section03] Reference results stored with ref_ prefix for downstream sections: {h_23: '18', d_23: undefined, d_24: undefined, h_24: '24', d_20: undefined, …}
 [Section03] Reference Model calculations complete
 S03: Weather data updated for Alexandria, ON (Present)
 [Section03] Running Reference Model calculations...
4011-Section03.js:1347 [Section03] Reference results stored with ref_ prefix for downstream sections: {h_23: '18', d_23: undefined, d_24: undefined, h_24: '24', d_20: undefined, …}
4011-Section03.js:1318 [Section03] Reference Model calculations complete
4011-Section03.js:1934 S03: Self-Contained State Module initialization complete
4011-Section04.js:1583 [S04] Pattern A S04 section rendered
4011-Section04.js:199 S04: Initializing Pattern A ModeManager
4011-Section04.js:85 S04: TargetState defaults set
4011-Section04.js:103 S04: TargetState loaded from localStorage
4011-Section04.js:156 S04: ReferenceState defaults set
4011-Section04.js:202 S04: Pattern A initialization complete
4011-Section04.js:771 [S04] Starting dual-engine Excel-compliant calculations
4011-Section04.js:779 [S04] Calculating Target model
4011-Section04.js:679 [S04] Row 32 Subtotals - F32: 132938, G32: 6779.838, J32: 0, K32: 0
4011-Section04.js:792 [S04] Calculation error: ReferenceError: DualState is not defined
    at calculateRow35 (4011-Section04.js:747:18)
    at calculateTargetModel (4011-Section04.js:809:5)
    at calculateAll (4011-Section04.js:780:7)
    at Object.onSectionRendered (4011-Section04.js:1595:7)
    at initializeSectionEventHandlers (4011-FieldManager.js:322:23)
    at renderSection (4011-FieldManager.js:367:7)
    at 4011-FieldManager.js:394:7
    at Array.forEach (<anonymous>)
    at Object.renderAllSections (4011-FieldManager.js:393:27)
    at Object.initialize (4011-Calculator.js:66:25)
calculateAll @ 4011-Section04.js:792
onSectionRendered @ 4011-Section04.js:1595
initializeSectionEventHandlers @ 4011-FieldManager.js:322
renderSection @ 4011-FieldManager.js:367
(anonymous) @ 4011-FieldManager.js:394
renderAllSections @ 4011-FieldManager.js:393
initialize @ 4011-Calculator.js:66
(anonymous) @ index.html:1029Understand this errorAI
4011-Section02.js:799 [S02] Reference results stored with ref_ prefix for downstream sections
4011-Section02.js:799 [S02] Reference results stored with ref_ prefix for downstream sections
4011-Section09.js:99 S09: Reference defaults loaded from standard: OBC SB10 5.5-6 Z6, lighting: 2.0
4011-Section09.js:280 S09: UI refreshed for target mode
4011-Section09.js:99 S09: Reference defaults loaded from standard: OBC SB10 5.5-6 Z6, lighting: 2.0
4011-Section09.js:280 S09: UI refreshed for target mode
 S10: Section rendered - initializing Self-Contained State Module.
 S10: Simplified global StateManager listeners added
 S10: ModeManager exposed globally for cross-section integration.
 S11: Section rendered - initializing Self-Contained State Module.
 S11: Reference defaults loaded from standard: OBC SB10 5.5-6 Z6
 S11: ModeManager exposed globally for cross-section integration.
 [S11] calculateAll TRIGGERED. isReferenceMode: false
 [Section13] 🔗 Attaching StateManager listeners...
 [Section13] 🔗 Attaching CRITICAL upstream listeners...
 [Section13] ✅ ALL LISTENERS ATTACHED SUCCESSFULLY
 S13: Section rendered - initializing Pattern A Dual-State Module.
 [S13 DEBUG] Loading reference standard: "OBC SB10 5.5-6 Z6"
 [S13 DEBUG] Found reference values: {f_113: '7.1', j_115: '0.90', d_118: '81', d_119: '8.33'}
 S13: Reference defaults loaded from standard: OBC SB10 5.5-6 Z6 {f_113: '7.1', j_115: '0.90', d_118: '81', d_119: '8.33', j_116: '3.3', …}
 [Section13] 🔗 Attaching StateManager listeners...
 [Section13] 🔗 Attaching CRITICAL upstream listeners...
 [Section13] ✅ ALL LISTENERS ATTACHED SUCCESSFULLY
 [Section13] 🚀 CALCULATEALL TRIGGERED - Running dual-engine calculations...
 [Section13] 🔄 Starting Reference Model calculations...
 [Section13] Running Reference Model calculations...
 [S13 DEBUG] Reading ref_d_127: direct="null", fallback="null", dom="0", final="0"
 [Section13] 🔥 REF HEATING: systemType="Gas", tedReference=0, hspf=7.1
 [Section13] 🧊 COOLING CALC: mode=REF, coolingSystemType="Cooling", heatingType="Gas", isCoolingActive=true, coolingDemand=0
 [S13 DEBUG] Storing ref_d_114 = 0
 [S13 DEBUG] Storing ref_d_115 = 0
 [S13 DEBUG] Storing ref_f_115 = 0
 [S13 DEBUG] Storing ref_h_115 = 0
 [S13 DEBUG] Storing ref_l_115 = 0
 [Section13] Reference results stored with ref_ prefix for downstream sections
 [S13 DEBUG] Total Reference results stored: 33
 [Section13] Reference Model calculations complete
 [Section13] ✅ Reference Model complete
 [Section13] 🔄 Starting Target Model calculations...
4011-Section13.js:2947 [Section13] Running Target Model calculations...
4011-Section13.js:2317 [Section13] 🔥 HEATING CALC: mode=TGT, systemType="Heatpump", tedTarget=0, source=d_127
4011-Section13.js:2509 [Section13] 🧊 COOLING CALC: mode=TGT, coolingSystemType="Cooling", heatingType="Heatpump", isCoolingActive=true, coolingDemand=0
4011-Section13.js:2568 [Section13] 🧊 COOLING RESULTS: d_117=0, j_116=2.663540445486518, l_116=0, l_114=0
4011-Section13.js:3124 [Section13] 🔥 TGT HEATING: systemType="Heatpump", tedTarget=0, hspf=12.5
4011-Section13.js:2509 [Section13] 🧊 COOLING CALC: mode=TGT, coolingSystemType="Cooling", heatingType="Heatpump", isCoolingActive=true, coolingDemand=0
4011-Section13.js:2568 [Section13] 🧊 COOLING RESULTS: d_117=0, j_116=2.663540445486518, l_116=0, l_114=0
4011-Section10.js:2111 S10: Global listener triggered by m_121, recalculating all.
4011-Section10.js:2121 S10: Utilization factor dependency m_121 changed.
4011-Section13.js:2509 [Section13] 🧊 COOLING CALC: mode=TGT, coolingSystemType="Cooling", heatingType="Heatpump", isCoolingActive=true, coolingDemand=0
4011-Section13.js:2568 [Section13] 🧊 COOLING RESULTS: d_117=0, j_116=2.663540445486518, l_116=0, l_114=0
4011-Section13.js:2509 [Section13] 🧊 COOLING CALC: mode=TGT, coolingSystemType="Cooling", heatingType="Heatpump", isCoolingActive=true, coolingDemand=0
4011-Section13.js:2568 [Section13] 🧊 COOLING RESULTS: d_117=0, j_116=2.663540445486518, l_116=0, l_114=0
4011-Section13.js:2509 [Section13] 🧊 COOLING CALC: mode=TGT, coolingSystemType="Cooling", heatingType="Heatpump", isCoolingActive=true, coolingDemand=0
4011-Section13.js:2568 [Section13] 🧊 COOLING RESULTS: d_117=0, j_116=2.663540445486518, l_116=0, l_114=0
4011-Section13.js:2967 [Section13] Target Model calculations complete
4011-Section13.js:2885 [Section13] ✅ Target Model complete
4011-Section13.js:2887 [Section13] 🎉 DUAL-ENGINE CALCULATIONS COMPLETE
4011-Section13.js:2215 S13: Pattern A initialization complete.
 S14: Section rendered - initializing Pattern A Dual-State Module.
 S14: Reference defaults loaded from standard: OBC SB10 5.5-6 Z6
 [S14 DEBUG] 🔄 Running Reference Model calculations...
 [S14 DEBUG] ✅ Converted to numbers - ref_d_127 calculation: 59532.28501397147 + 119064.57002794294 + 23178.39 + 84594.73968 - 45879.580160000005
 [S14 DEBUG] ✅ ref_d_127 = 240490.4045619144 (should be numeric, not NaN)
 [S14 DEBUG] ✅ Stored ref_d_127 = 240490.4045619144 in StateManager
 [S14 DEBUG] 🔄 Continuing with other Reference calculations...
 [S14 DEBUG] ref_d_128 calculation: 59532.28501397147 + 119064.57002794294 + 23178.39 - 45879.580160000005 = 155895.6648819144
 [Section13] 📡 🔥 d_127 (TED) listener triggered - S14 energy demand changed!
 [Section13] 🔥 HEATING CALC: mode=TGT, systemType="Heatpump", tedTarget=119171.54798887548, source=d_127
 [Section13] 🧊 COOLING CALC: mode=TGT, coolingSystemType="Cooling", heatingType="Heatpump", isCoolingActive=true, coolingDemand=0
 [Section13] 🧊 COOLING RESULTS: d_117=0, j_116=2.663540445486518, l_116=0, l_114=0
 [Section13] 📡 🔥 d_127 (TED) listener triggered - S14 energy demand changed!
 [Section13] 🔥 HEATING CALC: mode=TGT, systemType="Heatpump", tedTarget=119171.54798887548, source=d_127
 [Section13] 🧊 COOLING CALC: mode=TGT, coolingSystemType="Cooling", heatingType="Heatpump", isCoolingActive=true, coolingDemand=0
 [Section13] 🧊 COOLING RESULTS: d_117=0, j_116=2.663540445486518, l_116=0, l_114=0
 [Section13] 🧊 COOLING CALC: mode=TGT, coolingSystemType="Cooling", heatingType="Heatpump", isCoolingActive=true, coolingDemand=10192.893604542265
 [Section13] 🧊 COOLING RESULTS: d_117=3826.8214105081656, j_116=2.663540445486518, l_116=0, l_114=6366.0721940341
 [Section13] 🧊 COOLING CALC: mode=TGT, coolingSystemType="Cooling", heatingType="Heatpump", isCoolingActive=true, coolingDemand=10192.893604542265
 [Section13] 🧊 COOLING RESULTS: d_117=3826.8214105081656, j_116=2.663540445486518, l_116=0, l_114=6366.0721940341
 S14: Pattern A initialization complete.
 🔍 S15 REFERENCE UPSTREAM: ref_i_104=0, ref_m_121=84594.73968, ref_i_80=0
 [S15] Missing critical upstream Reference values: ref_g_101, ref_d_101, ref_i_104
calculateReferenceModel @ 4011-Section15.js:1367
calculateAll @ 4011-Section15.js:1286
initializeEventHandlers @ 4011-Section15.js:2004
initializeSectionEventHandlers @ 4011-FieldManager.js:310
renderSection @ 4011-FieldManager.js:367
(anonymous) @ 4011-FieldManager.js:394
renderAllSections @ 4011-FieldManager.js:393
initialize @ 4011-Calculator.js:66
(anonymous) @ index.html:1029Understand this warningAI
 ✅ S15 Reference Model: All values converted to numbers for proper math
 ✅ S15 Reference Model: Additional fuel variables declared for cost calculations
 🔍 S15 REFERENCE UPSTREAM: ref_i_104=0, ref_m_121=84594.73968, ref_i_80=0
 [S15] Missing critical upstream Reference values: ref_g_101, ref_d_101, ref_i_104
calculateReferenceModel @ 4011-Section15.js:1367
calculateAll @ 4011-Section15.js:1286
(anonymous) @ 4011-Section15.js:1942
(anonymous) @ 4011-StateManager.js:486
notifyListeners @ 4011-StateManager.js:484
setValue @ 4011-StateManager.js:362
window.TEUI.StateManager.setValue @ 4011-ComponentBridge.js:429
setCalculatedValue @ 4011-Section01.js:376
calculateReferenceModel @ 4011-Section01.js:478
runAllCalculations @ 4011-Section01.js:1254
(anonymous) @ 4011-Section01.js:1327
(anonymous) @ 4011-StateManager.js:486
notifyListeners @ 4011-StateManager.js:484
setValue @ 4011-StateManager.js:344
window.TEUI.StateManager.setValue @ 4011-ComponentBridge.js:429
setRefValueIfChanged @ 4011-Section15.js:1315
calculateReferenceModel @ 4011-Section15.js:1422
calculateAll @ 4011-Section15.js:1286
initializeEventHandlers @ 4011-Section15.js:2004
initializeSectionEventHandlers @ 4011-FieldManager.js:310
renderSection @ 4011-FieldManager.js:367
(anonymous) @ 4011-FieldManager.js:394
renderAllSections @ 4011-FieldManager.js:393
initialize @ 4011-Calculator.js:66
(anonymous) @ index.html:1029Understand this warningAI
 ✅ S15 Reference Model: All values converted to numbers for proper math
 ✅ S15 Reference Model: Additional fuel variables declared for cost calculations
 🔍 S15 REFERENCE UPSTREAM: ref_i_104=0, ref_m_121=84594.73968, ref_i_80=0
 [S15] Missing critical upstream Reference values: ref_g_101, ref_d_101, ref_i_104
calculateReferenceModel @ 4011-Section15.js:1367
calculateAll @ 4011-Section15.js:1286
(anonymous) @ 4011-Section15.js:1942
(anonymous) @ 4011-StateManager.js:486
notifyListeners @ 4011-StateManager.js:484
setValue @ 4011-StateManager.js:362
window.TEUI.StateManager.setValue @ 4011-ComponentBridge.js:429
calculateReferenceModel @ 4011-Section15.js:1516
calculateAll @ 4011-Section15.js:1286
(anonymous) @ 4011-Section15.js:1942
(anonymous) @ 4011-StateManager.js:486
notifyListeners @ 4011-StateManager.js:484
setValue @ 4011-StateManager.js:362
window.TEUI.StateManager.setValue @ 4011-ComponentBridge.js:429
setCalculatedValue @ 4011-Section01.js:376
calculateReferenceModel @ 4011-Section01.js:478
runAllCalculations @ 4011-Section01.js:1254
(anonymous) @ 4011-Section01.js:1327
(anonymous) @ 4011-StateManager.js:486
notifyListeners @ 4011-StateManager.js:484
setValue @ 4011-StateManager.js:344
window.TEUI.StateManager.setValue @ 4011-ComponentBridge.js:429
setRefValueIfChanged @ 4011-Section15.js:1315
calculateReferenceModel @ 4011-Section15.js:1422
calculateAll @ 4011-Section15.js:1286
initializeEventHandlers @ 4011-Section15.js:2004
initializeSectionEventHandlers @ 4011-FieldManager.js:310
renderSection @ 4011-FieldManager.js:367
(anonymous) @ 4011-FieldManager.js:394
renderAllSections @ 4011-FieldManager.js:393
initialize @ 4011-Calculator.js:66
(anonymous) @ index.html:1029Understand this warningAI
 ✅ S15 Reference Model: All values converted to numbers for proper math
 ✅ S15 Reference Model: Additional fuel variables declared for cost calculations
 [S15 DEBUG] 💰 Electricity price from S04: $0.13/kWh
 🔍 S15 TARGET UPSTREAM: target_i_104=116070.33, target_m_121=48980.79999999999, target_i_80=45879.580160000005
 [S04] S15 target electricity changed: d_136
 [S04] Starting dual-engine Excel-compliant calculations
 [S04] Calculating Target model
 [S04] Row 32 Subtotals - F32: 132938, G32: 6779.838, J32: 133574.3671495516, K32: 6812.292724627132
 🔍 S15 REFERENCE UPSTREAM: ref_i_104=0, ref_m_121=84594.73968, ref_i_80=0
 [S15] Missing critical upstream Reference values: ref_g_101, ref_d_101, ref_i_104
calculateReferenceModel @ 4011-Section15.js:1367
calculateAll @ 4011-Section15.js:1286
(anonymous) @ 4011-Section15.js:1942
(anonymous) @ 4011-StateManager.js:486
notifyListeners @ 4011-StateManager.js:484
setValue @ 4011-StateManager.js:362
updateTEUICalculations @ 4011-StateManager.js:929
(anonymous) @ 4011-StateManager.js:199
(anonymous) @ 4011-StateManager.js:486
notifyListeners @ 4011-StateManager.js:484
setValue @ 4011-StateManager.js:362
window.TEUI.StateManager.setValue @ 4011-ComponentBridge.js:429
setValue @ 4011-Section04.js:232
setCalculatedValue @ 4011-Section04.js:38
calculateRow32 @ 4011-Section04.js:684
calculateTargetModel @ 4011-Section04.js:806
calculateAll @ 4011-Section04.js:780
(anonymous) @ 4011-Section04.js:1529
(anonymous) @ 4011-StateManager.js:486
notifyListeners @ 4011-StateManager.js:484
setValue @ 4011-StateManager.js:362
window.TEUI.StateManager.setValue @ 4011-ComponentBridge.js:429
setCalculatedValue @ 4011-Section15.js:122
calculateValues @ 4011-Section15.js:1690
calculateTargetModel @ 4011-Section15.js:1564
calculateAll @ 4011-Section15.js:1287
(anonymous) @ 4011-Section15.js:1942
(anonymous) @ 4011-StateManager.js:486
notifyListeners @ 4011-StateManager.js:484
setValue @ 4011-StateManager.js:362
window.TEUI.StateManager.setValue @ 4011-ComponentBridge.js:429
calculateReferenceModel @ 4011-Section15.js:1516
calculateAll @ 4011-Section15.js:1286
(anonymous) @ 4011-Section15.js:1942
(anonymous) @ 4011-StateManager.js:486
notifyListeners @ 4011-StateManager.js:484
setValue @ 4011-StateManager.js:362
window.TEUI.StateManager.setValue @ 4011-ComponentBridge.js:429
setCalculatedValue @ 4011-Section01.js:376
calculateReferenceModel @ 4011-Section01.js:478
runAllCalculations @ 4011-Section01.js:1254
(anonymous) @ 4011-Section01.js:1327
(anonymous) @ 4011-StateManager.js:486
notifyListeners @ 4011-StateManager.js:484
setValue @ 4011-StateManager.js:344
window.TEUI.StateManager.setValue @ 4011-ComponentBridge.js:429
setRefValueIfChanged @ 4011-Section15.js:1315
calculateReferenceModel @ 4011-Section15.js:1422
calculateAll @ 4011-Section15.js:1286
initializeEventHandlers @ 4011-Section15.js:2004
initializeSectionEventHandlers @ 4011-FieldManager.js:310
renderSection @ 4011-FieldManager.js:367
(anonymous) @ 4011-FieldManager.js:394
renderAllSections @ 4011-FieldManager.js:393
initialize @ 4011-Calculator.js:66
(anonymous) @ index.html:1029Understand this warningAI
 ✅ S15 Reference Model: All values converted to numbers for proper math
 ✅ S15 Reference Model: Additional fuel variables declared for cost calculations
 [S15 DEBUG] 💰 Electricity price from S04: $0.13/kWh
 🔍 S15 TARGET UPSTREAM: target_i_104=116070.33, target_m_121=48980.79999999999, target_i_80=45879.580160000005
 🔍 S15 REFERENCE UPSTREAM: ref_i_104=0, ref_m_121=84594.73968, ref_i_80=0
 [S15] Missing critical upstream Reference values: ref_g_101, ref_d_101, ref_i_104
calculateReferenceModel @ 4011-Section15.js:1367
calculateAll @ 4011-Section15.js:1286
(anonymous) @ 4011-Section15.js:1942
(anonymous) @ 4011-StateManager.js:486
notifyListeners @ 4011-StateManager.js:484
setValue @ 4011-StateManager.js:362
window.TEUI.StateManager.setValue @ 4011-ComponentBridge.js:429
calculateValues @ 4011-Section15.js:1702
calculateTargetModel @ 4011-Section15.js:1564
calculateAll @ 4011-Section15.js:1287
(anonymous) @ 4011-Section15.js:1942
(anonymous) @ 4011-StateManager.js:486
notifyListeners @ 4011-StateManager.js:484
setValue @ 4011-StateManager.js:362
updateTEUICalculations @ 4011-StateManager.js:929
(anonymous) @ 4011-StateManager.js:199
(anonymous) @ 4011-StateManager.js:486
notifyListeners @ 4011-StateManager.js:484
setValue @ 4011-StateManager.js:362
window.TEUI.StateManager.setValue @ 4011-ComponentBridge.js:429
setValue @ 4011-Section04.js:232
setCalculatedValue @ 4011-Section04.js:38
calculateRow32 @ 4011-Section04.js:684
calculateTargetModel @ 4011-Section04.js:806
calculateAll @ 4011-Section04.js:780
(anonymous) @ 4011-Section04.js:1529
(anonymous) @ 4011-StateManager.js:486
notifyListeners @ 4011-StateManager.js:484
setValue @ 4011-StateManager.js:362
window.TEUI.StateManager.setValue @ 4011-ComponentBridge.js:429
setCalculatedValue @ 4011-Section15.js:122
calculateValues @ 4011-Section15.js:1690
calculateTargetModel @ 4011-Section15.js:1564
calculateAll @ 4011-Section15.js:1287
(anonymous) @ 4011-Section15.js:1942
(anonymous) @ 4011-StateManager.js:486
notifyListeners @ 4011-StateManager.js:484
setValue @ 4011-StateManager.js:362
window.TEUI.StateManager.setValue @ 4011-ComponentBridge.js:429
calculateReferenceModel @ 4011-Section15.js:1516
calculateAll @ 4011-Section15.js:1286
(anonymous) @ 4011-Section15.js:1942
(anonymous) @ 4011-StateManager.js:486
notifyListeners @ 4011-StateManager.js:484
setValue @ 4011-StateManager.js:362
window.TEUI.StateManager.setValue @ 4011-ComponentBridge.js:429
setCalculatedValue @ 4011-Section01.js:376
calculateReferenceModel @ 4011-Section01.js:478
runAllCalculations @ 4011-Section01.js:1254
(anonymous) @ 4011-Section01.js:1327
(anonymous) @ 4011-StateManager.js:486
notifyListeners @ 4011-StateManager.js:484
setValue @ 4011-StateManager.js:344
window.TEUI.StateManager.setValue @ 4011-ComponentBridge.js:429
setRefValueIfChanged @ 4011-Section15.js:1315
calculateReferenceModel @ 4011-Section15.js:1422
calculateAll @ 4011-Section15.js:1286
initializeEventHandlers @ 4011-Section15.js:2004
initializeSectionEventHandlers @ 4011-FieldManager.js:310
renderSection @ 4011-FieldManager.js:367
(anonymous) @ 4011-FieldManager.js:394
renderAllSections @ 4011-FieldManager.js:393
initialize @ 4011-Calculator.js:66
(anonymous) @ index.html:1029Understand this warningAI
 ✅ S15 Reference Model: All values converted to numbers for proper math
 ✅ S15 Reference Model: Additional fuel variables declared for cost calculations
 [S15 DEBUG] 💰 Electricity price from S04: $0.13/kWh
 🔍 S15 TARGET UPSTREAM: target_i_104=116070.33, target_m_121=48980.79999999999, target_i_80=45879.580160000005
 [S15 DEBUG] 🧮 D141 calculation: 220216.85125050816 kWh/m²/yr × $0.13/kWh = $28628.19
 [S15 DEBUG] 🧮 D141 calculation: 220216.85125050816 kWh/m²/yr × $0.13/kWh = $28628.19
 [S02] Reference results stored with ref_ prefix for downstream sections
 [S02] Reference results stored with ref_ prefix for downstream sections
 🔍 S15 REFERENCE UPSTREAM: ref_i_104=0, ref_m_121=84594.73968, ref_i_80=0
 [S15] Missing critical upstream Reference values: ref_g_101, ref_d_101, ref_i_104
calculateReferenceModel @ 4011-Section15.js:1367
calculateAll @ 4011-Section15.js:1286
(anonymous) @ 4011-Section15.js:1942
(anonymous) @ 4011-StateManager.js:486
notifyListeners @ 4011-StateManager.js:484
setValue @ 4011-StateManager.js:362
window.TEUI.StateManager.setValue @ 4011-ComponentBridge.js:429
setValue @ 4011-Section04.js:232
setCalculatedValue @ 4011-Section04.js:38
calculateRow32 @ 4011-Section04.js:685
calculateTargetModel @ 4011-Section04.js:806
calculateAll @ 4011-Section04.js:780
(anonymous) @ 4011-Section04.js:1529
(anonymous) @ 4011-StateManager.js:486
notifyListeners @ 4011-StateManager.js:484
setValue @ 4011-StateManager.js:362
window.TEUI.StateManager.setValue @ 4011-ComponentBridge.js:429
setCalculatedValue @ 4011-Section15.js:122
calculateValues @ 4011-Section15.js:1690
calculateTargetModel @ 4011-Section15.js:1564
calculateAll @ 4011-Section15.js:1287
(anonymous) @ 4011-Section15.js:1942
(anonymous) @ 4011-StateManager.js:486
notifyListeners @ 4011-StateManager.js:484
setValue @ 4011-StateManager.js:362
window.TEUI.StateManager.setValue @ 4011-ComponentBridge.js:429
calculateReferenceModel @ 4011-Section15.js:1516
calculateAll @ 4011-Section15.js:1286
(anonymous) @ 4011-Section15.js:1942
(anonymous) @ 4011-StateManager.js:486
notifyListeners @ 4011-StateManager.js:484
setValue @ 4011-StateManager.js:362
window.TEUI.StateManager.setValue @ 4011-ComponentBridge.js:429
setCalculatedValue @ 4011-Section01.js:376
calculateReferenceModel @ 4011-Section01.js:478
runAllCalculations @ 4011-Section01.js:1254
(anonymous) @ 4011-Section01.js:1327
(anonymous) @ 4011-StateManager.js:486
notifyListeners @ 4011-StateManager.js:484
setValue @ 4011-StateManager.js:344
window.TEUI.StateManager.setValue @ 4011-ComponentBridge.js:429
setRefValueIfChanged @ 4011-Section15.js:1315
calculateReferenceModel @ 4011-Section15.js:1422
calculateAll @ 4011-Section15.js:1286
initializeEventHandlers @ 4011-Section15.js:2004
initializeSectionEventHandlers @ 4011-FieldManager.js:310
renderSection @ 4011-FieldManager.js:367
(anonymous) @ 4011-FieldManager.js:394
renderAllSections @ 4011-FieldManager.js:393
initialize @ 4011-Calculator.js:66
(anonymous) @ index.html:1029Understand this warningAI
 ✅ S15 Reference Model: All values converted to numbers for proper math
 ✅ S15 Reference Model: Additional fuel variables declared for cost calculations
 [S15 DEBUG] 💰 Electricity price from S04: $0.13/kWh
 🔍 S15 TARGET UPSTREAM: target_i_104=116070.33, target_m_121=48980.79999999999, target_i_80=45879.580160000005
 [S15 DEBUG] 🧮 D141 calculation: 220216.85125050816 kWh/m²/yr × $0.13/kWh = $28628.19
 [S04] Calculation error: 
calculateAll @ 4011-Section04.js:792
(anonymous) @ 4011-Section04.js:1529
(anonymous) @ 4011-StateManager.js:486
notifyListeners @ 4011-StateManager.js:484
setValue @ 4011-StateManager.js:362
window.TEUI.StateManager.setValue @ 4011-ComponentBridge.js:429
setCalculatedValue @ 4011-Section15.js:122
calculateValues @ 4011-Section15.js:1690
calculateTargetModel @ 4011-Section15.js:1564
calculateAll @ 4011-Section15.js:1287
(anonymous) @ 4011-Section15.js:1942
(anonymous) @ 4011-StateManager.js:486
notifyListeners @ 4011-StateManager.js:484
setValue @ 4011-StateManager.js:362
window.TEUI.StateManager.setValue @ 4011-ComponentBridge.js:429
calculateReferenceModel @ 4011-Section15.js:1516
calculateAll @ 4011-Section15.js:1286
(anonymous) @ 4011-Section15.js:1942
(anonymous) @ 4011-StateManager.js:486
notifyListeners @ 4011-StateManager.js:484
setValue @ 4011-StateManager.js:362
window.TEUI.StateManager.setValue @ 4011-ComponentBridge.js:429
setCalculatedValue @ 4011-Section01.js:376
calculateReferenceModel @ 4011-Section01.js:478
runAllCalculations @ 4011-Section01.js:1254
(anonymous) @ 4011-Section01.js:1327
(anonymous) @ 4011-StateManager.js:486
notifyListeners @ 4011-StateManager.js:484
setValue @ 4011-StateManager.js:344
window.TEUI.StateManager.setValue @ 4011-ComponentBridge.js:429
setRefValueIfChanged @ 4011-Section15.js:1315
calculateReferenceModel @ 4011-Section15.js:1422
calculateAll @ 4011-Section15.js:1286
initializeEventHandlers @ 4011-Section15.js:2004
initializeSectionEventHandlers @ 4011-FieldManager.js:310
renderSection @ 4011-FieldManager.js:367
(anonymous) @ 4011-FieldManager.js:394
renderAllSections @ 4011-FieldManager.js:393
initialize @ 4011-Calculator.js:66
(anonymous) @ index.html:1029Understand this errorAI
 [S15 DEBUG] 🧮 D141 calculation: 220216.85125050816 kWh/m²/yr × $0.13/kWh = $28628.19
 [S15 DEBUG] 💰 Electricity price from S04: $0.13/kWh
 🔍 S15 TARGET UPSTREAM: target_i_104=116070.33, target_m_121=48980.79999999999, target_i_80=45879.580160000005
 [S15 DEBUG] 🧮 D141 calculation: 220216.85125050816 kWh/m²/yr × $0.13/kWh = $28628.19
 🔍 S15 REFERENCE UPSTREAM: ref_i_104=0, ref_m_121=84594.73968, ref_i_80=0
 [S15] Missing critical upstream Reference values: ref_g_101, ref_d_101, ref_i_104
calculateReferenceModel @ 4011-Section15.js:1367
calculateAll @ 4011-Section15.js:1286
(anonymous) @ 4011-Section15.js:1942
(anonymous) @ 4011-StateManager.js:486
notifyListeners @ 4011-StateManager.js:484
setValue @ 4011-StateManager.js:362
window.TEUI.StateManager.setValue @ 4011-ComponentBridge.js:429
setCalculatedValue @ 4011-Section01.js:376
calculateTargetModel @ 4011-Section01.js:598
runAllCalculations @ 4011-Section01.js:1255
(anonymous) @ 4011-Section01.js:1327
(anonymous) @ 4011-StateManager.js:486
notifyListeners @ 4011-StateManager.js:484
setValue @ 4011-StateManager.js:344
window.TEUI.StateManager.setValue @ 4011-ComponentBridge.js:429
setRefValueIfChanged @ 4011-Section15.js:1315
calculateReferenceModel @ 4011-Section15.js:1422
calculateAll @ 4011-Section15.js:1286
initializeEventHandlers @ 4011-Section15.js:2004
initializeSectionEventHandlers @ 4011-FieldManager.js:310
renderSection @ 4011-FieldManager.js:367
(anonymous) @ 4011-FieldManager.js:394
renderAllSections @ 4011-FieldManager.js:393
initialize @ 4011-Calculator.js:66
(anonymous) @ index.html:1029Understand this warningAI
 ✅ S15 Reference Model: All values converted to numbers for proper math
 ✅ S15 Reference Model: Additional fuel variables declared for cost calculations
 [S15 DEBUG] 💰 Electricity price from S04: $0.13/kWh
 🔍 S15 TARGET UPSTREAM: target_i_104=116070.33, target_m_121=48980.79999999999, target_i_80=45879.580160000005
 [S15 DEBUG] 🧮 D141 calculation: 220216.85125050816 kWh/m²/yr × $0.13/kWh = $28628.19
 🔍 S15 REFERENCE UPSTREAM: ref_i_104=0, ref_m_121=84594.73968, ref_i_80=0
 [S15] Missing critical upstream Reference values: ref_g_101, ref_d_101, ref_i_104
calculateReferenceModel @ 4011-Section15.js:1367
calculateAll @ 4011-Section15.js:1286
(anonymous) @ 4011-Section15.js:1942
(anonymous) @ 4011-StateManager.js:486
notifyListeners @ 4011-StateManager.js:484
setValue @ 4011-StateManager.js:362
window.TEUI.StateManager.setValue @ 4011-ComponentBridge.js:429
setCalculatedValue @ 4011-Section01.js:383
calculateTargetModel @ 4011-Section01.js:598
runAllCalculations @ 4011-Section01.js:1255
(anonymous) @ 4011-Section01.js:1327
(anonymous) @ 4011-StateManager.js:486
notifyListeners @ 4011-StateManager.js:484
setValue @ 4011-StateManager.js:344
window.TEUI.StateManager.setValue @ 4011-ComponentBridge.js:429
setRefValueIfChanged @ 4011-Section15.js:1315
calculateReferenceModel @ 4011-Section15.js:1422
calculateAll @ 4011-Section15.js:1286
initializeEventHandlers @ 4011-Section15.js:2004
initializeSectionEventHandlers @ 4011-FieldManager.js:310
renderSection @ 4011-FieldManager.js:367
(anonymous) @ 4011-FieldManager.js:394
renderAllSections @ 4011-FieldManager.js:393
initialize @ 4011-Calculator.js:66
(anonymous) @ index.html:1029Understand this warningAI
 ✅ S15 Reference Model: All values converted to numbers for proper math
 ✅ S15 Reference Model: Additional fuel variables declared for cost calculations
 [S15 DEBUG] 💰 Electricity price from S04: $0.13/kWh
 🔍 S15 TARGET UPSTREAM: target_i_104=116070.33, target_m_121=48980.79999999999, target_i_80=45879.580160000005
 🔍 S15 REFERENCE UPSTREAM: ref_i_104=0, ref_m_121=84594.73968, ref_i_80=0
 [S15] Missing critical upstream Reference values: ref_g_101, ref_d_101, ref_i_104
calculateReferenceModel @ 4011-Section15.js:1367
calculateAll @ 4011-Section15.js:1286
(anonymous) @ 4011-Section15.js:1942
(anonymous) @ 4011-StateManager.js:486
notifyListeners @ 4011-StateManager.js:484
setValue @ 4011-StateManager.js:362
window.TEUI.StateManager.setValue @ 4011-ComponentBridge.js:429
calculateValues @ 4011-Section15.js:1702
calculateTargetModel @ 4011-Section15.js:1564
calculateAll @ 4011-Section15.js:1287
(anonymous) @ 4011-Section15.js:1942
(anonymous) @ 4011-StateManager.js:486
notifyListeners @ 4011-StateManager.js:484
setValue @ 4011-StateManager.js:362
window.TEUI.StateManager.setValue @ 4011-ComponentBridge.js:429
setCalculatedValue @ 4011-Section01.js:383
calculateTargetModel @ 4011-Section01.js:598
runAllCalculations @ 4011-Section01.js:1255
(anonymous) @ 4011-Section01.js:1327
(anonymous) @ 4011-StateManager.js:486
notifyListeners @ 4011-StateManager.js:484
setValue @ 4011-StateManager.js:344
window.TEUI.StateManager.setValue @ 4011-ComponentBridge.js:429
setRefValueIfChanged @ 4011-Section15.js:1315
calculateReferenceModel @ 4011-Section15.js:1422
calculateAll @ 4011-Section15.js:1286
initializeEventHandlers @ 4011-Section15.js:2004
initializeSectionEventHandlers @ 4011-FieldManager.js:310
renderSection @ 4011-FieldManager.js:367
(anonymous) @ 4011-FieldManager.js:394
renderAllSections @ 4011-FieldManager.js:393
initialize @ 4011-Calculator.js:66
(anonymous) @ index.html:1029Understand this warningAI
 ✅ S15 Reference Model: All values converted to numbers for proper math
 ✅ S15 Reference Model: Additional fuel variables declared for cost calculations
 [S15 DEBUG] 💰 Electricity price from S04: $0.13/kWh
 🔍 S15 TARGET UPSTREAM: target_i_104=116070.33, target_m_121=48980.79999999999, target_i_80=45879.580160000005
 [S15 DEBUG] 🧮 D141 calculation: 220216.85125050816 kWh/m²/yr × $0.13/kWh = $28628.19
 [S15 DEBUG] 🧮 D141 calculation: 220216.85125050816 kWh/m²/yr × $0.13/kWh = $28628.19
 [S15 DEBUG] 💰 Electricity price from S04: $0.13/kWh
 🔍 S15 TARGET UPSTREAM: target_i_104=116070.33, target_m_121=48980.79999999999, target_i_80=45879.580160000005
 [S15 DEBUG] 🧮 D141 calculation: 220216.85125050816 kWh/m²/yr × $0.13/kWh = $28628.19
 S15: Target defaults set
 S15: Reference defaults set
 S15: Pattern A initialization complete.
 🔍 S15 REFERENCE UPSTREAM: ref_i_104=0, ref_m_121=84594.73968, ref_i_80=0
 [S15] Missing critical upstream Reference values: ref_g_101, ref_d_101, ref_i_104
calculateReferenceModel @ 4011-Section15.js:1367
calculateAll @ 4011-Section15.js:1286
initializeEventHandlers @ 4011-Section15.js:2004
onSectionRendered @ 4011-Section15.js:2029
initializeSectionEventHandlers @ 4011-FieldManager.js:322
renderSection @ 4011-FieldManager.js:367
(anonymous) @ 4011-FieldManager.js:394
renderAllSections @ 4011-FieldManager.js:393
initialize @ 4011-Calculator.js:66
(anonymous) @ index.html:1029Understand this warningAI
 ✅ S15 Reference Model: All values converted to numbers for proper math
 ✅ S15 Reference Model: Additional fuel variables declared for cost calculations
 [S15 DEBUG] 💰 Electricity price from S04: $0.13/kWh
 🔍 S15 TARGET UPSTREAM: target_i_104=116070.33, target_m_121=48980.79999999999, target_i_80=45879.580160000005
 [S15 DEBUG] 🧮 D141 calculation: 220216.85125050816 kWh/m²/yr × $0.13/kWh = $28628.19
 Section03: Province selected: ON
 S03: Synced province change "ON" to StateManager for S04 listeners
 City dropdown updated for ON - selected: Alexandria
4011-Section15.js:1338 🔍 S15 REFERENCE UPSTREAM: ref_i_104=0, ref_m_121=84594.73968, ref_i_80=0
4011-Section15.js:1367 [S15] Missing critical upstream Reference values: ref_g_101, ref_d_101, ref_i_104
calculateReferenceModel @ 4011-Section15.js:1367
calculateAll @ 4011-Section15.js:1286
forceTEDITELIUpdate @ 4011-SectionIntegrator.js:305
initializeTEDITELIIntegration @ 4011-SectionIntegrator.js:241
(anonymous) @ 4011-SectionIntegrator.js:187
initializeAllIntegrations @ 4011-SectionIntegrator.js:184
(anonymous) @ 4011-SectionIntegrator.js:106
renderAllSections @ 4011-FieldManager.js:398
initialize @ 4011-Calculator.js:66
(anonymous) @ index.html:1029Understand this warningAI
4011-Section15.js:1379 ✅ S15 Reference Model: All values converted to numbers for proper math
4011-Section15.js:1390 ✅ S15 Reference Model: Additional fuel variables declared for cost calculations
4011-Section15.js:1591 [S15 DEBUG] 💰 Electricity price from S04: $0.13/kWh
4011-Section15.js:1610 🔍 S15 TARGET UPSTREAM: target_i_104=116070.33, target_m_121=48980.79999999999, target_i_80=45879.580160000005
4011-Section15.js:1779 [S15 DEBUG] 🧮 D141 calculation: 220216.85125050816 kWh/m²/yr × $0.13/kWh = $28628.19
4011-Section03.js:957 Section03: Province selected: ON
4011-Section03.js:966 S03: Synced province change "ON" to StateManager for S04 listeners
4011-Section03.js:1022 City dropdown updated for ON - selected: Alexandria
4011-Section15.js:1338 🔍 S15 REFERENCE UPSTREAM: ref_i_104=0, ref_m_121=84594.73968, ref_i_80=0
4011-Section15.js:1367 [S15] Missing critical upstream Reference values: ref_g_101, ref_d_101, ref_i_104
calculateReferenceModel @ 4011-Section15.js:1367
calculateAll @ 4011-Section15.js:1286
forceTEDITELIUpdate @ 4011-SectionIntegrator.js:305
initializeTEDITELIIntegration @ 4011-SectionIntegrator.js:241
(anonymous) @ 4011-SectionIntegrator.js:187
initializeAllIntegrations @ 4011-SectionIntegrator.js:184
(anonymous) @ 4011-SectionIntegrator.js:106
renderAllSections @ 4011-FieldManager.js:398
initialize @ 4011-Calculator.js:66
(anonymous) @ index.html:1029Understand this warningAI
4011-Section15.js:1379 ✅ S15 Reference Model: All values converted to numbers for proper math
4011-Section15.js:1390 ✅ S15 Reference Model: Additional fuel variables declared for cost calculations
4011-Section15.js:1591 [S15 DEBUG] 💰 Electricity price from S04: $0.13/kWh
4011-Section15.js:1610 🔍 S15 TARGET UPSTREAM: target_i_104=116070.33, target_m_121=48980.79999999999, target_i_80=45879.580160000005
4011-Section15.js:1779 [S15 DEBUG] 🧮 D141 calculation: 220216.85125050816 kWh/m²/yr × $0.13/kWh = $28628.19
4011-ComponentBridge.js:408 🔄 ComponentBridge: Dual-state sync already initialized
index.html:1041 TEUI Calculator 4.011 initialization complete
4011-Section12.js:1742 [Section12] Running dual-engine calculations...
4011-Section12.js:1756 [Section12] Running Reference Model calculations...
 🔍 S15 REFERENCE UPSTREAM: ref_i_104=0, ref_m_121=84594.73968, ref_i_80=0
 [S15] Missing critical upstream Reference values: ref_g_101, ref_i_104
calculateReferenceModel @ 4011-Section15.js:1367
calculateAll @ 4011-Section15.js:1286
(anonymous) @ 4011-Section15.js:1942
(anonymous) @ 4011-StateManager.js:486
notifyListeners @ 4011-StateManager.js:484
setValue @ 4011-StateManager.js:344
window.TEUI.StateManager.setValue @ 4011-ComponentBridge.js:429
(anonymous) @ 4011-Section12.js:1799
storeReferenceResults @ 4011-Section12.js:1797
calculateReferenceModel @ 4011-Section12.js:1771
calculateAll @ 4011-Section12.js:1745
(anonymous) @ 4011-SectionIntegrator.js:656
setTimeout
forceVolumeMetricsUpdate @ 4011-SectionIntegrator.js:650
initializeVolumeMetricsIntegration @ 4011-SectionIntegrator.js:589
(anonymous) @ 4011-SectionIntegrator.js:187
initializeAllIntegrations @ 4011-SectionIntegrator.js:184
(anonymous) @ 4011-SectionIntegrator.js:106
renderAllSections @ 4011-FieldManager.js:398
initialize @ 4011-Calculator.js:66
(anonymous) @ index.html:1029Understand this warningAI
 ✅ S15 Reference Model: All values converted to numbers for proper math
 ✅ S15 Reference Model: Additional fuel variables declared for cost calculations
 [S15 DEBUG] 💰 Electricity price from S04: $0.13/kWh
 🔍 S15 TARGET UPSTREAM: target_i_104=116070.33, target_m_121=48980.79999999999, target_i_80=45879.580160000005
 [S15 DEBUG] 🧮 D141 calculation: 220216.85125050816 kWh/m²/yr × $0.13/kWh = $28628.19
 🔍 S15 REFERENCE UPSTREAM: ref_i_104=0, ref_m_121=84594.73968, ref_i_80=0
 [S15] Missing critical upstream Reference values: ref_g_101, ref_i_104
calculateReferenceModel @ 4011-Section15.js:1367
calculateAll @ 4011-Section15.js:1286
(anonymous) @ 4011-Section15.js:1942
(anonymous) @ 4011-StateManager.js:486
notifyListeners @ 4011-StateManager.js:484
setValue @ 4011-StateManager.js:344
window.TEUI.StateManager.setValue @ 4011-ComponentBridge.js:429
(anonymous) @ 4011-Section12.js:1799
storeReferenceResults @ 4011-Section12.js:1797
calculateReferenceModel @ 4011-Section12.js:1771
calculateAll @ 4011-Section12.js:1745
(anonymous) @ 4011-SectionIntegrator.js:656
setTimeout
forceVolumeMetricsUpdate @ 4011-SectionIntegrator.js:650
initializeVolumeMetricsIntegration @ 4011-SectionIntegrator.js:589
(anonymous) @ 4011-SectionIntegrator.js:187
initializeAllIntegrations @ 4011-SectionIntegrator.js:184
(anonymous) @ 4011-SectionIntegrator.js:106
renderAllSections @ 4011-FieldManager.js:398
initialize @ 4011-Calculator.js:66
(anonymous) @ index.html:1029Understand this warningAI
 ✅ S15 Reference Model: All values converted to numbers for proper math
 ✅ S15 Reference Model: Additional fuel variables declared for cost calculations
 [S15 DEBUG] 💰 Electricity price from S04: $0.13/kWh
 🔍 S15 TARGET UPSTREAM: target_i_104=116070.33, target_m_121=48980.79999999999, target_i_80=45879.580160000005
 [S15 DEBUG] 🧮 D141 calculation: 220216.85125050816 kWh/m²/yr × $0.13/kWh = $28628.19
 🔍 S15 REFERENCE UPSTREAM: ref_i_104=0, ref_m_121=84594.73968, ref_i_80=0
 [S15] Missing critical upstream Reference values: ref_g_101, ref_i_104
calculateReferenceModel @ 4011-Section15.js:1367
calculateAll @ 4011-Section15.js:1286
(anonymous) @ 4011-Section15.js:1942
(anonymous) @ 4011-StateManager.js:486
notifyListeners @ 4011-StateManager.js:484
setValue @ 4011-StateManager.js:344
window.TEUI.StateManager.setValue @ 4011-ComponentBridge.js:429
(anonymous) @ 4011-Section12.js:1799
storeReferenceResults @ 4011-Section12.js:1797
calculateReferenceModel @ 4011-Section12.js:1771
calculateAll @ 4011-Section12.js:1745
(anonymous) @ 4011-SectionIntegrator.js:656
setTimeout
forceVolumeMetricsUpdate @ 4011-SectionIntegrator.js:650
initializeVolumeMetricsIntegration @ 4011-SectionIntegrator.js:589
(anonymous) @ 4011-SectionIntegrator.js:187
initializeAllIntegrations @ 4011-SectionIntegrator.js:184
(anonymous) @ 4011-SectionIntegrator.js:106
renderAllSections @ 4011-FieldManager.js:398
initialize @ 4011-Calculator.js:66
(anonymous) @ index.html:1029Understand this warningAI
 ✅ S15 Reference Model: All values converted to numbers for proper math
 ✅ S15 Reference Model: Additional fuel variables declared for cost calculations
 [S15 DEBUG] 💰 Electricity price from S04: $0.13/kWh
 🔍 S15 TARGET UPSTREAM: target_i_104=116070.33, target_m_121=48980.79999999999, target_i_80=45879.580160000005
 [S15 DEBUG] 🧮 D141 calculation: 220216.85125050816 kWh/m²/yr × $0.13/kWh = $28628.19
 🔍 S15 REFERENCE UPSTREAM: ref_i_104=0, ref_m_121=84594.73968, ref_i_80=0
 [S15] Missing critical upstream Reference values: ref_g_101, ref_i_104
calculateReferenceModel @ 4011-Section15.js:1367
calculateAll @ 4011-Section15.js:1286
(anonymous) @ 4011-Section15.js:1942
(anonymous) @ 4011-StateManager.js:486
notifyListeners @ 4011-StateManager.js:484
setValue @ 4011-StateManager.js:344
window.TEUI.StateManager.setValue @ 4011-ComponentBridge.js:429
(anonymous) @ 4011-Section12.js:1799
storeReferenceResults @ 4011-Section12.js:1797
calculateReferenceModel @ 4011-Section12.js:1771
calculateAll @ 4011-Section12.js:1745
(anonymous) @ 4011-SectionIntegrator.js:656
setTimeout
forceVolumeMetricsUpdate @ 4011-SectionIntegrator.js:650
initializeVolumeMetricsIntegration @ 4011-SectionIntegrator.js:589
(anonymous) @ 4011-SectionIntegrator.js:187
initializeAllIntegrations @ 4011-SectionIntegrator.js:184
(anonymous) @ 4011-SectionIntegrator.js:106
renderAllSections @ 4011-FieldManager.js:398
initialize @ 4011-Calculator.js:66
(anonymous) @ index.html:1029Understand this warningAI
 ✅ S15 Reference Model: All values converted to numbers for proper math
 ✅ S15 Reference Model: Additional fuel variables declared for cost calculations
 [S15 DEBUG] 💰 Electricity price from S04: $0.13/kWh
 🔍 S15 TARGET UPSTREAM: target_i_104=116070.33, target_m_121=48980.79999999999, target_i_80=45879.580160000005
 [S15 DEBUG] 🧮 D141 calculation: 220216.85125050816 kWh/m²/yr × $0.13/kWh = $28628.19
 [S02] Reference results stored with ref_ prefix for downstream sections
 [S02] Reference results stored with ref_ prefix for downstream sections
 🔍 S15 REFERENCE UPSTREAM: ref_i_104=0, ref_m_121=84594.73968, ref_i_80=0
 [S15] Missing critical upstream Reference values: ref_i_104
calculateReferenceModel @ 4011-Section15.js:1367
calculateAll @ 4011-Section15.js:1286
(anonymous) @ 4011-Section15.js:1942
(anonymous) @ 4011-StateManager.js:486
notifyListeners @ 4011-StateManager.js:484
setValue @ 4011-StateManager.js:344
window.TEUI.StateManager.setValue @ 4011-ComponentBridge.js:429
(anonymous) @ 4011-Section12.js:1799
storeReferenceResults @ 4011-Section12.js:1797
calculateReferenceModel @ 4011-Section12.js:1771
calculateAll @ 4011-Section12.js:1745
(anonymous) @ 4011-SectionIntegrator.js:656
setTimeout
forceVolumeMetricsUpdate @ 4011-SectionIntegrator.js:650
initializeVolumeMetricsIntegration @ 4011-SectionIntegrator.js:589
(anonymous) @ 4011-SectionIntegrator.js:187
initializeAllIntegrations @ 4011-SectionIntegrator.js:184
(anonymous) @ 4011-SectionIntegrator.js:106
renderAllSections @ 4011-FieldManager.js:398
initialize @ 4011-Calculator.js:66
(anonymous) @ index.html:1029Understand this warningAI
 ✅ S15 Reference Model: All values converted to numbers for proper math
 ✅ S15 Reference Model: Additional fuel variables declared for cost calculations
 [S15 DEBUG] 💰 Electricity price from S04: $0.13/kWh
 🔍 S15 TARGET UPSTREAM: target_i_104=116070.33, target_m_121=48980.79999999999, target_i_80=45879.580160000005
 [S15 DEBUG] 🧮 D141 calculation: 220216.85125050816 kWh/m²/yr × $0.13/kWh = $28628.19
 🔍 S15 REFERENCE UPSTREAM: ref_i_104=0, ref_m_121=84594.73968, ref_i_80=0
 [S15] Missing critical upstream Reference values: ref_i_104
calculateReferenceModel @ 4011-Section15.js:1367
calculateAll @ 4011-Section15.js:1286
(anonymous) @ 4011-Section15.js:1942
(anonymous) @ 4011-StateManager.js:486
notifyListeners @ 4011-StateManager.js:484
setValue @ 4011-StateManager.js:344
window.TEUI.StateManager.setValue @ 4011-ComponentBridge.js:429
(anonymous) @ 4011-Section12.js:1799
storeReferenceResults @ 4011-Section12.js:1797
calculateReferenceModel @ 4011-Section12.js:1771
calculateAll @ 4011-Section12.js:1745
(anonymous) @ 4011-SectionIntegrator.js:656
setTimeout
forceVolumeMetricsUpdate @ 4011-SectionIntegrator.js:650
initializeVolumeMetricsIntegration @ 4011-SectionIntegrator.js:589
(anonymous) @ 4011-SectionIntegrator.js:187
initializeAllIntegrations @ 4011-SectionIntegrator.js:184
(anonymous) @ 4011-SectionIntegrator.js:106
renderAllSections @ 4011-FieldManager.js:398
initialize @ 4011-Calculator.js:66
(anonymous) @ index.html:1029Understand this warningAI
 ✅ S15 Reference Model: All values converted to numbers for proper math
 ✅ S15 Reference Model: Additional fuel variables declared for cost calculations
 [S15 DEBUG] 💰 Electricity price from S04: $0.13/kWh
 🔍 S15 TARGET UPSTREAM: target_i_104=116070.33, target_m_121=48980.79999999999, target_i_80=45879.580160000005
 [S15 DEBUG] 🧮 D141 calculation: 220216.85125050816 kWh/m²/yr × $0.13/kWh = $28628.19
 🔍 S15 REFERENCE UPSTREAM: ref_i_104=0, ref_m_121=84594.73968, ref_i_80=0
 [S15] Missing critical upstream Reference values: ref_i_104
calculateReferenceModel @ 4011-Section15.js:1367
calculateAll @ 4011-Section15.js:1286
(anonymous) @ 4011-Section15.js:1942
(anonymous) @ 4011-StateManager.js:486
notifyListeners @ 4011-StateManager.js:484
setValue @ 4011-StateManager.js:344
window.TEUI.StateManager.setValue @ 4011-ComponentBridge.js:429
(anonymous) @ 4011-Section12.js:1799
storeReferenceResults @ 4011-Section12.js:1797
calculateReferenceModel @ 4011-Section12.js:1771
calculateAll @ 4011-Section12.js:1745
(anonymous) @ 4011-SectionIntegrator.js:656
setTimeout
forceVolumeMetricsUpdate @ 4011-SectionIntegrator.js:650
initializeVolumeMetricsIntegration @ 4011-SectionIntegrator.js:589
(anonymous) @ 4011-SectionIntegrator.js:187
initializeAllIntegrations @ 4011-SectionIntegrator.js:184
(anonymous) @ 4011-SectionIntegrator.js:106
renderAllSections @ 4011-FieldManager.js:398
initialize @ 4011-Calculator.js:66
(anonymous) @ index.html:1029Understand this warningAI
 ✅ S15 Reference Model: All values converted to numbers for proper math
 ✅ S15 Reference Model: Additional fuel variables declared for cost calculations
 [S15 DEBUG] 💰 Electricity price from S04: $0.13/kWh
 🔍 S15 TARGET UPSTREAM: target_i_104=116070.33, target_m_121=48980.79999999999, target_i_80=45879.580160000005
 [S15 DEBUG] 🧮 D141 calculation: 220216.85125050816 kWh/m²/yr × $0.13/kWh = $28628.19
 🔍 S15 REFERENCE UPSTREAM: ref_i_104=0, ref_m_121=84594.73968, ref_i_80=0
 [S15] Missing critical upstream Reference values: ref_i_104
calculateReferenceModel @ 4011-Section15.js:1367
calculateAll @ 4011-Section15.js:1286
(anonymous) @ 4011-Section15.js:1942
(anonymous) @ 4011-StateManager.js:486
notifyListeners @ 4011-StateManager.js:484
setValue @ 4011-StateManager.js:344
window.TEUI.StateManager.setValue @ 4011-ComponentBridge.js:429
(anonymous) @ 4011-Section12.js:1799
storeReferenceResults @ 4011-Section12.js:1797
calculateReferenceModel @ 4011-Section12.js:1771
calculateAll @ 4011-Section12.js:1745
(anonymous) @ 4011-SectionIntegrator.js:656
setTimeout
forceVolumeMetricsUpdate @ 4011-SectionIntegrator.js:650
initializeVolumeMetricsIntegration @ 4011-SectionIntegrator.js:589
(anonymous) @ 4011-SectionIntegrator.js:187
initializeAllIntegrations @ 4011-SectionIntegrator.js:184
(anonymous) @ 4011-SectionIntegrator.js:106
renderAllSections @ 4011-FieldManager.js:398
initialize @ 4011-Calculator.js:66
(anonymous) @ index.html:1029Understand this warningAI
 ✅ S15 Reference Model: All values converted to numbers for proper math
 ✅ S15 Reference Model: Additional fuel variables declared for cost calculations
 [S15 DEBUG] 💰 Electricity price from S04: $0.13/kWh
 🔍 S15 TARGET UPSTREAM: target_i_104=116070.33, target_m_121=48980.79999999999, target_i_80=45879.580160000005
 [S15 DEBUG] 🧮 D141 calculation: 220216.85125050816 kWh/m²/yr × $0.13/kWh = $28628.19
 🔍 S15 REFERENCE UPSTREAM: ref_i_104=116070.33, ref_m_121=84594.73968, ref_i_80=0
 ✅ S15 Reference Model: All values converted to numbers for proper math
 ✅ S15 Reference Model: Additional fuel variables declared for cost calculations
 🔍 S15 REFERENCE UPSTREAM: ref_i_104=116070.33, ref_m_121=84594.73968, ref_i_80=0
 ✅ S15 Reference Model: All values converted to numbers for proper math
 ✅ S15 Reference Model: Additional fuel variables declared for cost calculations
 🔍 S15 REFERENCE UPSTREAM: ref_i_104=116070.33, ref_m_121=84594.73968, ref_i_80=0
 ✅ S15 Reference Model: All values converted to numbers for proper math
 ✅ S15 Reference Model: Additional fuel variables declared for cost calculations
 [S15 DEBUG] 💰 Electricity price from S04: $0.13/kWh
 🔍 S15 TARGET UPSTREAM: target_i_104=116070.33, target_m_121=48980.79999999999, target_i_80=45879.580160000005
 [S15 DEBUG] 🧮 D141 calculation: 220216.85125050816 kWh/m²/yr × $0.13/kWh = $28628.19
 🔍 S15 REFERENCE UPSTREAM: ref_i_104=116070.33, ref_m_121=84594.73968, ref_i_80=0
 ✅ S15 Reference Model: All values converted to numbers for proper math
 ✅ S15 Reference Model: Additional fuel variables declared for cost calculations
 [S15 DEBUG] 💰 Electricity price from S04: $0.13/kWh
 🔍 S15 TARGET UPSTREAM: target_i_104=116070.33, target_m_121=48980.79999999999, target_i_80=45879.580160000005
 [S15 DEBUG] 🧮 D141 calculation: 220216.85125050816 kWh/m²/yr × $0.13/kWh = $28628.19
 [S15 DEBUG] 💰 Electricity price from S04: $0.13/kWh
 🔍 S15 TARGET UPSTREAM: target_i_104=116070.33, target_m_121=48980.79999999999, target_i_80=45879.580160000005
 [S15 DEBUG] 🧮 D141 calculation: 220216.85125050816 kWh/m²/yr × $0.13/kWh = $28628.19
 🔍 S15 REFERENCE UPSTREAM: ref_i_104=116070.33, ref_m_121=84594.73968, ref_i_80=0
 ✅ S15 Reference Model: All values converted to numbers for proper math
 ✅ S15 Reference Model: Additional fuel variables declared for cost calculations
 [S15 DEBUG] 💰 Electricity price from S04: $0.13/kWh
 🔍 S15 TARGET UPSTREAM: target_i_104=116070.33, target_m_121=48980.79999999999, target_i_80=45879.580160000005
 [S15 DEBUG] 🧮 D141 calculation: 220216.85125050816 kWh/m²/yr × $0.13/kWh = $28628.19
 🔍 S15 REFERENCE UPSTREAM: ref_i_104=116070.33, ref_m_121=84594.73968, ref_i_80=0
 ✅ S15 Reference Model: All values converted to numbers for proper math
 ✅ S15 Reference Model: Additional fuel variables declared for cost calculations
 [S15 DEBUG] 💰 Electricity price from S04: $0.13/kWh
 🔍 S15 TARGET UPSTREAM: target_i_104=116070.33, target_m_121=48980.79999999999, target_i_80=45879.580160000005
 🔍 S15 REFERENCE UPSTREAM: ref_i_104=116070.33, ref_m_121=84594.73968, ref_i_80=0
 ✅ S15 Reference Model: All values converted to numbers for proper math
 ✅ S15 Reference Model: Additional fuel variables declared for cost calculations
 [S15 DEBUG] 💰 Electricity price from S04: $0.13/kWh
 🔍 S15 TARGET UPSTREAM: target_i_104=116070.33, target_m_121=48980.79999999999, target_i_80=45879.580160000005
 [S15 DEBUG] 🧮 D141 calculation: 220216.85125050816 kWh/m²/yr × $0.13/kWh = $28628.19
 🔍 S15 REFERENCE UPSTREAM: ref_i_104=116070.33, ref_m_121=84594.73968, ref_i_80=0
 ✅ S15 Reference Model: All values converted to numbers for proper math
 ✅ S15 Reference Model: Additional fuel variables declared for cost calculations
 [S15 DEBUG] 💰 Electricity price from S04: $0.13/kWh
 🔍 S15 TARGET UPSTREAM: target_i_104=116070.33, target_m_121=48980.79999999999, target_i_80=45879.580160000005
 [S15 DEBUG] 🧮 D141 calculation: 220216.85125050816 kWh/m²/yr × $0.13/kWh = $28628.19
 [S15 DEBUG] 🧮 D141 calculation: 220216.85125050816 kWh/m²/yr × $0.13/kWh = $28628.19
 🔍 S15 REFERENCE UPSTREAM: ref_i_104=116070.33, ref_m_121=84594.73968, ref_i_80=0
 ✅ S15 Reference Model: All values converted to numbers for proper math
 ✅ S15 Reference Model: Additional fuel variables declared for cost calculations
 [S15 DEBUG] 💰 Electricity price from S04: $0.13/kWh
 🔍 S15 TARGET UPSTREAM: target_i_104=116070.33, target_m_121=48980.79999999999, target_i_80=45879.580160000005
 [S15 DEBUG] 🧮 D141 calculation: 220216.85125050816 kWh/m²/yr × $0.13/kWh = $28628.19
 [S15 DEBUG] 💰 Electricity price from S04: $0.13/kWh
 🔍 S15 TARGET UPSTREAM: target_i_104=116070.33, target_m_121=48980.79999999999, target_i_80=45879.580160000005
 [S15 DEBUG] 🧮 D141 calculation: 220216.85125050816 kWh/m²/yr × $0.13/kWh = $28628.19
 🔍 S15 REFERENCE UPSTREAM: ref_i_104=116070.33, ref_m_121=84594.73968, ref_i_80=0
 ✅ S15 Reference Model: All values converted to numbers for proper math
 ✅ S15 Reference Model: Additional fuel variables declared for cost calculations
 [S15 DEBUG] 💰 Electricity price from S04: $0.13/kWh
 🔍 S15 TARGET UPSTREAM: target_i_104=116070.33, target_m_121=48980.79999999999, target_i_80=45879.580160000005
 [S15 DEBUG] 🧮 D141 calculation: 220216.85125050816 kWh/m²/yr × $0.13/kWh = $28628.19
 [Section12] Reference results stored with ref_ prefix for downstream sections
 [Section12] Reference Model calculations complete
 [Section12] Running Target Model calculations...
 🔍 S15 REFERENCE UPSTREAM: ref_i_104=116070.33, ref_m_121=84594.73968, ref_i_80=0
 ✅ S15 Reference Model: All values converted to numbers for proper math
 ✅ S15 Reference Model: Additional fuel variables declared for cost calculations
 [S15 DEBUG] 💰 Electricity price from S04: $0.13/kWh
 🔍 S15 TARGET UPSTREAM: target_i_104=116070.33, target_m_121=48980.79999999999, target_i_80=45879.580160000005
 [S15 DEBUG] 🧮 D141 calculation: 220216.85125050816 kWh/m²/yr × $0.13/kWh = $28628.19
 🔍 S15 REFERENCE UPSTREAM: ref_i_104=116070.33, ref_m_121=84594.73968, ref_i_80=0
 ✅ S15 Reference Model: All values converted to numbers for proper math
 ✅ S15 Reference Model: Additional fuel variables declared for cost calculations
 [S15 DEBUG] 💰 Electricity price from S04: $0.13/kWh
 🔍 S15 TARGET UPSTREAM: target_i_104=116070.33, target_m_121=48980.79999999999, target_i_80=45879.580160000005
 [S15 DEBUG] 🧮 D141 calculation: 220216.85125050816 kWh/m²/yr × $0.13/kWh = $28628.19
 🔍 S15 REFERENCE UPSTREAM: ref_i_104=116070.33, ref_m_121=84594.73968, ref_i_80=0
 ✅ S15 Reference Model: All values converted to numbers for proper math
 ✅ S15 Reference Model: Additional fuel variables declared for cost calculations
 [S15 DEBUG] 💰 Electricity price from S04: $0.13/kWh
 🔍 S15 TARGET UPSTREAM: target_i_104=116070.33, target_m_121=48980.79999999999, target_i_80=45879.580160000005
 [S15 DEBUG] 🧮 D141 calculation: 220216.85125050816 kWh/m²/yr × $0.13/kWh = $28628.19
 🔍 S15 REFERENCE UPSTREAM: ref_i_104=116070.33, ref_m_121=84594.73968, ref_i_80=0
 ✅ S15 Reference Model: All values converted to numbers for proper math
 ✅ S15 Reference Model: Additional fuel variables declared for cost calculations
 [S15 DEBUG] 💰 Electricity price from S04: $0.13/kWh
 🔍 S15 TARGET UPSTREAM: target_i_104=116070.33, target_m_121=48980.79999999999, target_i_80=45879.580160000005
 [S15 DEBUG] 🧮 D141 calculation: 220216.85125050816 kWh/m²/yr × $0.13/kWh = $28628.19
 [S02] Reference results stored with ref_ prefix for downstream sections
 [S02] Reference results stored with ref_ prefix for downstream sections
 🔍 S15 REFERENCE UPSTREAM: ref_i_104=116070.33, ref_m_121=84594.73968, ref_i_80=0
 ✅ S15 Reference Model: All values converted to numbers for proper math
 ✅ S15 Reference Model: Additional fuel variables declared for cost calculations
 [S15 DEBUG] 💰 Electricity price from S04: $0.13/kWh
 🔍 S15 TARGET UPSTREAM: target_i_104=116070.33, target_m_121=48980.79999999999, target_i_80=45879.580160000005
 [S15 DEBUG] 🧮 D141 calculation: 220216.85125050816 kWh/m²/yr × $0.13/kWh = $28628.19
 🔍 S15 REFERENCE UPSTREAM: ref_i_104=116070.33, ref_m_121=84594.73968, ref_i_80=0
 ✅ S15 Reference Model: All values converted to numbers for proper math
 ✅ S15 Reference Model: Additional fuel variables declared for cost calculations
 [S15 DEBUG] 💰 Electricity price from S04: $0.13/kWh
 🔍 S15 TARGET UPSTREAM: target_i_104=116070.33, target_m_121=48980.79999999999, target_i_80=45879.580160000005
 [S15 DEBUG] 🧮 D141 calculation: 220216.85125050816 kWh/m²/yr × $0.13/kWh = $28628.19
 🔍 S15 REFERENCE UPSTREAM: ref_i_104=116070.33, ref_m_121=84594.73968, ref_i_80=0
 ✅ S15 Reference Model: All values converted to numbers for proper math
 ✅ S15 Reference Model: Additional fuel variables declared for cost calculations
 [S15 DEBUG] 💰 Electricity price from S04: $0.13/kWh
 🔍 S15 TARGET UPSTREAM: target_i_104=116070.33, target_m_121=48980.79999999999, target_i_80=45879.580160000005
 [S15 DEBUG] 🧮 D141 calculation: 220216.85125050816 kWh/m²/yr × $0.13/kWh = $28628.19
 🔍 S15 REFERENCE UPSTREAM: ref_i_104=116070.33, ref_m_121=84594.73968, ref_i_80=0
 ✅ S15 Reference Model: All values converted to numbers for proper math
 ✅ S15 Reference Model: Additional fuel variables declared for cost calculations
 [S15 DEBUG] 💰 Electricity price from S04: $0.13/kWh
 🔍 S15 TARGET UPSTREAM: target_i_104=116070.33, target_m_121=48980.79999999999, target_i_80=45879.580160000005
 [S15 DEBUG] 🧮 D141 calculation: 220216.85125050816 kWh/m²/yr × $0.13/kWh = $28628.19
 S10: Global listener triggered by i_103, recalculating all.
 S10: Utilization factor dependency i_103 changed.
 [S14 DEBUG] 🔄 Running Reference Model calculations...
 [S14 DEBUG] ✅ Converted to numbers - ref_d_127 calculation: 59532.28501397147 + 119064.57002794294 + 36440.079840319355 + 84594.73968 - 45879.580160000005
 [S14 DEBUG] ✅ ref_d_127 = 253752.09440223372 (should be numeric, not NaN)
 [S14 DEBUG] ✅ Stored ref_d_127 = 253752.09440223372 in StateManager
 [S14 DEBUG] 🔄 Continuing with other Reference calculations...
 [S14 DEBUG] ref_d_128 calculation: 59532.28501397147 + 119064.57002794294 + 36440.079840319355 - 45879.580160000005 = 169157.35472223375
 [Section13] 📡 🔥 d_127 (TED) listener triggered - S14 energy demand changed!
 [Section13] 🔥 HEATING CALC: mode=TGT, systemType="Heatpump", tedTarget=119171.54500166589, source=d_127
 🔍 S15 REFERENCE UPSTREAM: ref_i_104=116070.33, ref_m_121=84594.73968, ref_i_80=0
 ✅ S15 Reference Model: All values converted to numbers for proper math
 ✅ S15 Reference Model: Additional fuel variables declared for cost calculations
 [S15 DEBUG] 💰 Electricity price from S04: $0.13/kWh
 🔍 S15 TARGET UPSTREAM: target_i_104=116070.33, target_m_121=48980.79999999999, target_i_80=45879.580160000005
 [S04] S15 target electricity changed: d_136
 [S04] Starting dual-engine Excel-compliant calculations
 [S04] Calculating Target model
4011-Section04.js:679 [S04] Row 32 Subtotals - F32: 132938, G32: 6779.838, J32: 133574.36633416289, K32: 6812.2926830423075
4011-Section15.js:1338 🔍 S15 REFERENCE UPSTREAM: ref_i_104=116070.33, ref_m_121=84594.73968, ref_i_80=0
4011-Section15.js:1379 ✅ S15 Reference Model: All values converted to numbers for proper math
4011-Section15.js:1390 ✅ S15 Reference Model: Additional fuel variables declared for cost calculations
4011-Section15.js:1591 [S15 DEBUG] 💰 Electricity price from S04: $0.13/kWh
4011-Section15.js:1610 🔍 S15 TARGET UPSTREAM: target_i_104=116070.33, target_m_121=48980.79999999999, target_i_80=45879.580160000005
4011-Section15.js:1338 🔍 S15 REFERENCE UPSTREAM: ref_i_104=116070.33, ref_m_121=84594.73968, ref_i_80=0
4011-Section15.js:1379 ✅ S15 Reference Model: All values converted to numbers for proper math
4011-Section15.js:1390 ✅ S15 Reference Model: Additional fuel variables declared for cost calculations
4011-Section15.js:1591 [S15 DEBUG] 💰 Electricity price from S04: $0.13/kWh
4011-Section15.js:1610 🔍 S15 TARGET UPSTREAM: target_i_104=116070.33, target_m_121=48980.79999999999, target_i_80=45879.580160000005
4011-Section15.js:1779 [S15 DEBUG] 🧮 D141 calculation: 220216.85125050816 kWh/m²/yr × $0.13/kWh = $28628.19
4011-Section15.js:1338 🔍 S15 REFERENCE UPSTREAM: ref_i_104=116070.33, ref_m_121=84594.73968, ref_i_80=0
4011-Section15.js:1379 ✅ S15 Reference Model: All values converted to numbers for proper math
4011-Section15.js:1390 ✅ S15 Reference Model: Additional fuel variables declared for cost calculations
4011-Section15.js:1591 [S15 DEBUG] 💰 Electricity price from S04: $0.13/kWh
4011-Section15.js:1610 🔍 S15 TARGET UPSTREAM: target_i_104=116070.33, target_m_121=48980.79999999999, target_i_80=45879.580160000005
4011-Section15.js:1779 [S15 DEBUG] 🧮 D141 calculation: 220216.85125050816 kWh/m²/yr × $0.13/kWh = $28628.19
4011-Section15.js:1779 [S15 DEBUG] 🧮 D141 calculation: 220216.85125050816 kWh/m²/yr × $0.13/kWh = $28628.19
 🔍 S15 REFERENCE UPSTREAM: ref_i_104=116070.33, ref_m_121=84594.73968, ref_i_80=0
 ✅ S15 Reference Model: All values converted to numbers for proper math
 ✅ S15 Reference Model: Additional fuel variables declared for cost calculations
 [S15 DEBUG] 💰 Electricity price from S04: $0.13/kWh
 🔍 S15 TARGET UPSTREAM: target_i_104=116070.33, target_m_121=48980.79999999999, target_i_80=45879.580160000005
 [S15 DEBUG] 🧮 D141 calculation: 220216.85125050816 kWh/m²/yr × $0.13/kWh = $28628.19
 🔍 S15 REFERENCE UPSTREAM: ref_i_104=116070.33, ref_m_121=84594.73968, ref_i_80=0
 ✅ S15 Reference Model: All values converted to numbers for proper math
 ✅ S15 Reference Model: Additional fuel variables declared for cost calculations
 [S15 DEBUG] 💰 Electricity price from S04: $0.13/kWh
 🔍 S15 TARGET UPSTREAM: target_i_104=116070.33, target_m_121=48980.79999999999, target_i_80=45879.580160000005
 🔍 S15 REFERENCE UPSTREAM: ref_i_104=116070.33, ref_m_121=84594.73968, ref_i_80=0
 ✅ S15 Reference Model: All values converted to numbers for proper math
 ✅ S15 Reference Model: Additional fuel variables declared for cost calculations
 [S15 DEBUG] 💰 Electricity price from S04: $0.13/kWh
 🔍 S15 TARGET UPSTREAM: target_i_104=116070.33, target_m_121=48980.79999999999, target_i_80=45879.580160000005
 [S15 DEBUG] 🧮 D141 calculation: 220216.85125050816 kWh/m²/yr × $0.13/kWh = $28628.19
 🔍 S15 REFERENCE UPSTREAM: ref_i_104=116070.33, ref_m_121=84594.73968, ref_i_80=0
 ✅ S15 Reference Model: All values converted to numbers for proper math
 ✅ S15 Reference Model: Additional fuel variables declared for cost calculations
 [S15 DEBUG] 💰 Electricity price from S04: $0.13/kWh
 🔍 S15 TARGET UPSTREAM: target_i_104=116070.33, target_m_121=48980.79999999999, target_i_80=45879.580160000005
 [S15 DEBUG] 🧮 D141 calculation: 220216.85125050816 kWh/m²/yr × $0.13/kWh = $28628.19
 [S15 DEBUG] 🧮 D141 calculation: 220216.85125050816 kWh/m²/yr × $0.13/kWh = $28628.19
 🔍 S15 REFERENCE UPSTREAM: ref_i_104=116070.33, ref_m_121=84594.73968, ref_i_80=0
 ✅ S15 Reference Model: All values converted to numbers for proper math
 ✅ S15 Reference Model: Additional fuel variables declared for cost calculations
 [S15 DEBUG] 💰 Electricity price from S04: $0.13/kWh
 🔍 S15 TARGET UPSTREAM: target_i_104=116070.33, target_m_121=48980.79999999999, target_i_80=45879.580160000005
 [S15 DEBUG] 🧮 D141 calculation: 220216.85125050816 kWh/m²/yr × $0.13/kWh = $28628.19
 🔍 S15 REFERENCE UPSTREAM: ref_i_104=116070.33, ref_m_121=84594.73968, ref_i_80=0
 ✅ S15 Reference Model: All values converted to numbers for proper math
 ✅ S15 Reference Model: Additional fuel variables declared for cost calculations
 [S15 DEBUG] 💰 Electricity price from S04: $0.13/kWh
 🔍 S15 TARGET UPSTREAM: target_i_104=116070.33, target_m_121=48980.79999999999, target_i_80=45879.580160000005
 🔍 S15 REFERENCE UPSTREAM: ref_i_104=116070.33, ref_m_121=84594.73968, ref_i_80=0
 ✅ S15 Reference Model: All values converted to numbers for proper math
 ✅ S15 Reference Model: Additional fuel variables declared for cost calculations
 [S15 DEBUG] 💰 Electricity price from S04: $0.13/kWh
 🔍 S15 TARGET UPSTREAM: target_i_104=116070.33, target_m_121=48980.79999999999, target_i_80=45879.580160000005
 [S15 DEBUG] 🧮 D141 calculation: 220216.85125050816 kWh/m²/yr × $0.13/kWh = $28628.19
 🔍 S15 REFERENCE UPSTREAM: ref_i_104=116070.33, ref_m_121=84594.73968, ref_i_80=0
 ✅ S15 Reference Model: All values converted to numbers for proper math
 ✅ S15 Reference Model: Additional fuel variables declared for cost calculations
 [S15 DEBUG] 💰 Electricity price from S04: $0.13/kWh
 🔍 S15 TARGET UPSTREAM: target_i_104=116070.33, target_m_121=48980.79999999999, target_i_80=45879.580160000005
 [S15 DEBUG] 🧮 D141 calculation: 220216.85125050816 kWh/m²/yr × $0.13/kWh = $28628.19
 [S15 DEBUG] 🧮 D141 calculation: 220216.85125050816 kWh/m²/yr × $0.13/kWh = $28628.19
 🔍 S15 REFERENCE UPSTREAM: ref_i_104=116070.33, ref_m_121=84594.73968, ref_i_80=0
 ✅ S15 Reference Model: All values converted to numbers for proper math
 ✅ S15 Reference Model: Additional fuel variables declared for cost calculations
 [S15 DEBUG] 💰 Electricity price from S04: $0.13/kWh
 🔍 S15 TARGET UPSTREAM: target_i_104=116070.33, target_m_121=48980.79999999999, target_i_80=45879.580160000005
 [S15 DEBUG] 🧮 D141 calculation: 220216.85125050816 kWh/m²/yr × $0.13/kWh = $28628.19
 [S02] Reference results stored with ref_ prefix for downstream sections
 [S02] Reference results stored with ref_ prefix for downstream sections
 🔍 S15 REFERENCE UPSTREAM: ref_i_104=116070.33, ref_m_121=84594.73968, ref_i_80=0
 ✅ S15 Reference Model: All values converted to numbers for proper math
 ✅ S15 Reference Model: Additional fuel variables declared for cost calculations
 [S15 DEBUG] 💰 Electricity price from S04: $0.13/kWh
 🔍 S15 TARGET UPSTREAM: target_i_104=116070.33, target_m_121=48980.79999999999, target_i_80=45879.580160000005
 [S15 DEBUG] 🧮 D141 calculation: 220216.85125050816 kWh/m²/yr × $0.13/kWh = $28628.19
 🔍 S15 REFERENCE UPSTREAM: ref_i_104=116070.33, ref_m_121=84594.73968, ref_i_80=0
 ✅ S15 Reference Model: All values converted to numbers for proper math
 ✅ S15 Reference Model: Additional fuel variables declared for cost calculations
 [S15 DEBUG] 💰 Electricity price from S04: $0.13/kWh
 🔍 S15 TARGET UPSTREAM: target_i_104=116070.33, target_m_121=48980.79999999999, target_i_80=45879.580160000005
 [S15 DEBUG] 🧮 D141 calculation: 220216.85125050816 kWh/m²/yr × $0.13/kWh = $28628.19
 [S04] Calculation error: 
calculateAll @ 4011-Section04.js:792
(anonymous) @ 4011-Section04.js:1529
(anonymous) @ 4011-StateManager.js:486
notifyListeners @ 4011-StateManager.js:484
setValue @ 4011-StateManager.js:362
window.TEUI.StateManager.setValue @ 4011-ComponentBridge.js:429
setCalculatedValue @ 4011-Section15.js:122
calculateValues @ 4011-Section15.js:1690
calculateTargetModel @ 4011-Section15.js:1564
calculateAll @ 4011-Section15.js:1287
(anonymous) @ 4011-Section15.js:1942
(anonymous) @ 4011-StateManager.js:486
notifyListeners @ 4011-StateManager.js:484
setValue @ 4011-StateManager.js:362
window.TEUI.StateManager.setValue @ 4011-ComponentBridge.js:429
setCalculatedValue @ 4011-Section13.js:525
calculateHeatingSystem @ 4011-Section13.js:2374
(anonymous) @ 4011-Section13.js:1965
(anonymous) @ 4011-StateManager.js:486
notifyListeners @ 4011-StateManager.js:484
setValue @ 4011-StateManager.js:362
window.TEUI.StateManager.setValue @ 4011-ComponentBridge.js:429
setCalculatedValue @ 4011-Section14.js:431
calculateValues @ 4011-Section14.js:1191
calculateTargetModel @ 4011-Section14.js:1149
calculateAll @ 4011-Section14.js:963
(anonymous) @ 4011-Section14.js:1407
(anonymous) @ 4011-StateManager.js:486
notifyListeners @ 4011-StateManager.js:484
setValue @ 4011-StateManager.js:362
window.TEUI.StateManager.setValue @ 4011-ComponentBridge.js:429
setCalculatedValue @ 4011-Section12.js:1016
calculateAirLeakageHeatLoss @ 4011-Section12.js:1609
calculateTargetModel @ 4011-Section12.js:1821
calculateAll @ 4011-Section12.js:1746
(anonymous) @ 4011-SectionIntegrator.js:656
setTimeout
forceVolumeMetricsUpdate @ 4011-SectionIntegrator.js:650
initializeVolumeMetricsIntegration @ 4011-SectionIntegrator.js:589
(anonymous) @ 4011-SectionIntegrator.js:187
initializeAllIntegrations @ 4011-SectionIntegrator.js:184
(anonymous) @ 4011-SectionIntegrator.js:106
renderAllSections @ 4011-FieldManager.js:398
initialize @ 4011-Calculator.js:66
(anonymous) @ index.html:1029Understand this errorAI
 [S15 DEBUG] 🧮 D141 calculation: 220216.85125050816 kWh/m²/yr × $0.13/kWh = $28628.19
 🔍 S15 REFERENCE UPSTREAM: ref_i_104=116070.33, ref_m_121=84594.73968, ref_i_80=0
 ✅ S15 Reference Model: All values converted to numbers for proper math
 ✅ S15 Reference Model: Additional fuel variables declared for cost calculations
 [S15 DEBUG] 💰 Electricity price from S04: $0.13/kWh
 🔍 S15 TARGET UPSTREAM: target_i_104=116070.33, target_m_121=48980.79999999999, target_i_80=45879.580160000005
 [S15 DEBUG] 🧮 D141 calculation: 220216.85125050816 kWh/m²/yr × $0.13/kWh = $28628.19
 [Section13] 🧊 COOLING CALC: mode=TGT, coolingSystemType="Cooling", heatingType="Heatpump", isCoolingActive=true, coolingDemand=10192.893604542265
 [Section13] 🧊 COOLING RESULTS: d_117=3826.8214105081656, j_116=2.663540445486518, l_116=0, l_114=6366.0721940341
 [Section13] 📡 🔥 d_127 (TED) listener triggered - S14 energy demand changed!
 [Section13] 🔥 HEATING CALC: mode=TGT, systemType="Heatpump", tedTarget=119171.54500166589, source=d_127
 [Section13] 🧊 COOLING CALC: mode=TGT, coolingSystemType="Cooling", heatingType="Heatpump", isCoolingActive=true, coolingDemand=10192.893604542265
 [Section13] 🧊 COOLING RESULTS: d_117=3826.8214105081656, j_116=2.663540445486518, l_116=0, l_114=6366.0721940341
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
 [S13 DEBUG] Reading ref_d_127: direct="253752.09440223372", fallback="null", dom="0", final="253752.09440223372"
 [Section13] 🔥 REF HEATING: systemType="Gas", tedReference=253752.09440223372, hspf=7.1
 [Section13] 🧊 COOLING CALC: mode=REF, coolingSystemType="Cooling", heatingType="Gas", isCoolingActive=true, coolingDemand=10192.893604542265
 🔍 S15 REFERENCE UPSTREAM: ref_i_104=116070.33, ref_m_121=84594.73968, ref_i_80=0
 ✅ S15 Reference Model: All values converted to numbers for proper math
 ✅ S15 Reference Model: Additional fuel variables declared for cost calculations
 [S15 DEBUG] 💰 Electricity price from S04: $0.13/kWh
 🔍 S15 TARGET UPSTREAM: target_i_104=116070.32516166594, target_m_121=48980.79999999999, target_i_80=45879.580160000005
 [S15 DEBUG] 🧮 D141 calculation: 220216.84641217405 kWh/m²/yr × $0.13/kWh = $28628.19
 🔍 S15 REFERENCE UPSTREAM: ref_i_104=116070.33, ref_m_121=84594.73968, ref_i_80=0
 ✅ S15 Reference Model: All values converted to numbers for proper math
 ✅ S15 Reference Model: Additional fuel variables declared for cost calculations
 [S15 DEBUG] 💰 Electricity price from S04: $0.13/kWh
 🔍 S15 TARGET UPSTREAM: target_i_104=116070.32516166594, target_m_121=48980.79999999999, target_i_80=45879.580160000005
 [S15 DEBUG] 🧮 D141 calculation: 220216.84641217405 kWh/m²/yr × $0.13/kWh = $28628.19
 [S13 DEBUG] Storing ref_d_114 = 253752.09440223372
 [S13 DEBUG] Storing ref_d_115 = 281946.77155803744
 [S13 DEBUG] Storing ref_f_115 = 0
 [S13 DEBUG] Storing ref_h_115 = 27214.939339578905
 [S13 DEBUG] Storing ref_l_115 = 28194.677155803714
 🔍 S15 REFERENCE UPSTREAM: ref_i_104=116070.33, ref_m_121=84594.73968, ref_i_80=0
 ✅ S15 Reference Model: All values converted to numbers for proper math
 ✅ S15 Reference Model: Additional fuel variables declared for cost calculations
 [S15 DEBUG] 💰 Electricity price from S04: $0.13/kWh
 🔍 S15 TARGET UPSTREAM: target_i_104=116070.32516166594, target_m_121=48980.79999999999, target_i_80=45879.580160000005
 [S15 DEBUG] 🧮 D141 calculation: 220216.84641217405 kWh/m²/yr × $0.13/kWh = $28628.19
 🔍 S15 REFERENCE UPSTREAM: ref_i_104=116070.33, ref_m_121=84594.73968, ref_i_80=0
 ✅ S15 Reference Model: All values converted to numbers for proper math
 ✅ S15 Reference Model: Additional fuel variables declared for cost calculations
 [S15 DEBUG] 💰 Electricity price from S04: $0.13/kWh
 🔍 S15 TARGET UPSTREAM: target_i_104=116070.32516166594, target_m_121=48980.79999999999, target_i_80=45879.580160000005
 [S15 DEBUG] 🧮 D141 calculation: 220216.84641217405 kWh/m²/yr × $0.13/kWh = $28628.19
 🔍 S15 REFERENCE UPSTREAM: ref_i_104=116070.33, ref_m_121=84594.73968, ref_i_80=0
 ✅ S15 Reference Model: All values converted to numbers for proper math
 ✅ S15 Reference Model: Additional fuel variables declared for cost calculations
 [S15 DEBUG] 💰 Electricity price from S04: $0.13/kWh
 🔍 S15 TARGET UPSTREAM: target_i_104=116070.32516166594, target_m_121=48980.79999999999, target_i_80=45879.580160000005
 [S15 DEBUG] 🧮 D141 calculation: 220216.84641217405 kWh/m²/yr × $0.13/kWh = $28628.19
 🔍 S15 REFERENCE UPSTREAM: ref_i_104=116070.33, ref_m_121=84594.73968, ref_i_80=0
 ✅ S15 Reference Model: All values converted to numbers for proper math
 ✅ S15 Reference Model: Additional fuel variables declared for cost calculations
 [S15 DEBUG] 💰 Electricity price from S04: $0.13/kWh
 🔍 S15 TARGET UPSTREAM: target_i_104=116070.32516166594, target_m_121=48980.79999999999, target_i_80=45879.580160000005
 [S15 DEBUG] 🧮 D141 calculation: 220216.84641217405 kWh/m²/yr × $0.13/kWh = $28628.19
 [Section13] Reference results stored with ref_ prefix for downstream sections
 [S13 DEBUG] Total Reference results stored: 33
 [Section13] Reference Model calculations complete
 [Section13] ✅ Reference Model complete
 [Section13] 🔄 Starting Target Model calculations...
 [Section13] Running Target Model calculations...
 [Section13] 🔥 HEATING CALC: mode=TGT, systemType="Heatpump", tedTarget=119171.54500166589, source=d_127
 [Section13] 🧊 COOLING CALC: mode=TGT, coolingSystemType="Cooling", heatingType="Heatpump", isCoolingActive=true, coolingDemand=10192.893604542265
 [Section13] 🧊 COOLING RESULTS: d_117=3826.8214105081656, j_116=2.663540445486518, l_116=0, l_114=6366.0721940341
 [Section13] 🔥 TGT HEATING: systemType="Heatpump", tedTarget=119171.54500166589, hspf=12.5
 [Section13] 🧊 COOLING CALC: mode=TGT, coolingSystemType="Cooling", heatingType="Heatpump", isCoolingActive=true, coolingDemand=10192.893604542265
 [Section13] 🧊 COOLING RESULTS: d_117=3826.8214105081656, j_116=2.663540445486518, l_116=0, l_114=6366.0721940341
 [Section13] 🧊 COOLING CALC: mode=TGT, coolingSystemType="Cooling", heatingType="Heatpump", isCoolingActive=true, coolingDemand=10192.893604542265
 [Section13] 🧊 COOLING RESULTS: d_117=3826.8214105081656, j_116=2.663540445486518, l_116=0, l_114=6366.0721940341
 [Section13] Target Model calculations complete
 [Section13] ✅ Target Model complete
 [Section13] 🎉 DUAL-ENGINE CALCULATIONS COMPLETE
 [Section13] 📡 🔥 i_104 (TRANSMISSION LOSS) listener triggered - S11 thermal bridges changed!
 [Section13] 🚀 CALCULATEALL TRIGGERED - Running dual-engine calculations...
 [Section13] 🔄 Starting Reference Model calculations...
 [Section13] Running Reference Model calculations...
 [S13 DEBUG] Reading ref_d_127: direct="253752.09440223372", fallback="null", dom="0", final="253752.09440223372"
 [Section13] 🔥 REF HEATING: systemType="Gas", tedReference=253752.09440223372, hspf=7.1
 [Section13] 🧊 COOLING CALC: mode=REF, coolingSystemType="Cooling", heatingType="Gas", isCoolingActive=true, coolingDemand=10192.893604542265
 [S13 DEBUG] Storing ref_d_114 = 253752.09440223372
 [S13 DEBUG] Storing ref_d_115 = 281946.77155803744
 [S13 DEBUG] Storing ref_f_115 = 0
 [S13 DEBUG] Storing ref_h_115 = 27214.939339578905
 [S13 DEBUG] Storing ref_l_115 = 28194.677155803714
 [Section13] Reference results stored with ref_ prefix for downstream sections
 [S13 DEBUG] Total Reference results stored: 33
 [Section13] Reference Model calculations complete
 [Section13] ✅ Reference Model complete
 [Section13] 🔄 Starting Target Model calculations...
 [Section13] Running Target Model calculations...
 [Section13] 🔥 HEATING CALC: mode=TGT, systemType="Heatpump", tedTarget=119171.54500166589, source=d_127
 [Section13] 🧊 COOLING CALC: mode=TGT, coolingSystemType="Cooling", heatingType="Heatpump", isCoolingActive=true, coolingDemand=10192.893604542265
 [Section13] 🧊 COOLING RESULTS: d_117=3826.8214105081656, j_116=2.663540445486518, l_116=0, l_114=6366.0721940341
 [Section13] 🔥 TGT HEATING: systemType="Heatpump", tedTarget=119171.54500166589, hspf=12.5
 [Section13] 🧊 COOLING CALC: mode=TGT, coolingSystemType="Cooling", heatingType="Heatpump", isCoolingActive=true, coolingDemand=10192.893604542265
 [Section13] 🧊 COOLING RESULTS: d_117=3826.8214105081656, j_116=2.663540445486518, l_116=0, l_114=6366.0721940341
 [Section13] 🧊 COOLING CALC: mode=TGT, coolingSystemType="Cooling", heatingType="Heatpump", isCoolingActive=true, coolingDemand=10192.893604542265
 [Section13] 🧊 COOLING RESULTS: d_117=3826.8214105081656, j_116=2.663540445486518, l_116=0, l_114=6366.0721940341
 [Section13] Target Model calculations complete
 [Section13] ✅ Target Model complete
 [Section13] 🎉 DUAL-ENGINE CALCULATIONS COMPLETE
 🔍 S15 REFERENCE UPSTREAM: ref_i_104=116070.33, ref_m_121=84594.73968, ref_i_80=0
 ✅ S15 Reference Model: All values converted to numbers for proper math
 ✅ S15 Reference Model: Additional fuel variables declared for cost calculations
 [S15 DEBUG] 💰 Electricity price from S04: $0.13/kWh
 🔍 S15 TARGET UPSTREAM: target_i_104=116070.32516166594, target_m_121=48980.79999999999, target_i_80=45879.580160000005
 [S15 DEBUG] 🧮 D141 calculation: 220216.84641217405 kWh/m²/yr × $0.13/kWh = $28628.19
 🔍 S15 REFERENCE UPSTREAM: ref_i_104=116070.33, ref_m_121=84594.73968, ref_i_80=0
 ✅ S15 Reference Model: All values converted to numbers for proper math
 ✅ S15 Reference Model: Additional fuel variables declared for cost calculations
 [S15 DEBUG] 💰 Electricity price from S04: $0.13/kWh
 🔍 S15 TARGET UPSTREAM: target_i_104=116070.32516166594, target_m_121=48980.79999999999, target_i_80=45879.580160000005
 [S15 DEBUG] 🧮 D141 calculation: 220216.84641217405 kWh/m²/yr × $0.13/kWh = $28628.19
4011-Section13.js:2875 [Section13] 🚀 CALCULATEALL TRIGGERED - Running dual-engine calculations...
4011-Section13.js:2879 [Section13] 🔄 Starting Reference Model calculations...
4011-Section13.js:2899 [Section13] Running Reference Model calculations...
4011-Section13.js:3051 [S13 DEBUG] Reading ref_d_127: direct="253752.09440223372", fallback="null", dom="0", final="253752.09440223372"
4011-Section13.js:3052 [Section13] 🔥 REF HEATING: systemType="Gas", tedReference=253752.09440223372, hspf=7.1
4011-Section13.js:2509 [Section13] 🧊 COOLING CALC: mode=REF, coolingSystemType="Cooling", heatingType="Gas", isCoolingActive=true, coolingDemand=10192.893604542265
4011-Section13.js:2994 [S13 DEBUG] Storing ref_d_114 = 253752.09440223372
4011-Section13.js:2994 [S13 DEBUG] Storing ref_d_115 = 281946.77155803744
4011-Section13.js:2994 [S13 DEBUG] Storing ref_f_115 = 0
4011-Section13.js:2994 [S13 DEBUG] Storing ref_h_115 = 27214.939339578905
4011-Section13.js:2994 [S13 DEBUG] Storing ref_l_115 = 28194.677155803714
4011-Section13.js:2999 [Section13] Reference results stored with ref_ prefix for downstream sections
4011-Section13.js:3000 [S13 DEBUG] Total Reference results stored: 33
4011-Section13.js:2933 [Section13] Reference Model calculations complete
4011-Section13.js:2881 [Section13] ✅ Reference Model complete
4011-Section13.js:2883 [Section13] 🔄 Starting Target Model calculations...
4011-Section13.js:2947 [Section13] Running Target Model calculations...
4011-Section13.js:2317 [Section13] 🔥 HEATING CALC: mode=TGT, systemType="Heatpump", tedTarget=119171.54500166589, source=d_127
4011-Section13.js:2509 [Section13] 🧊 COOLING CALC: mode=TGT, coolingSystemType="Cooling", heatingType="Heatpump", isCoolingActive=true, coolingDemand=10192.893604542265
 [Section13] 🧊 COOLING RESULTS: d_117=3826.8214105081656, j_116=2.663540445486518, l_116=0, l_114=6366.0721940341
 [Section13] 🔥 TGT HEATING: systemType="Heatpump", tedTarget=119171.54500166589, hspf=12.5
 [Section13] 🧊 COOLING CALC: mode=TGT, coolingSystemType="Cooling", heatingType="Heatpump", isCoolingActive=true, coolingDemand=10192.893604542265
 [Section13] 🧊 COOLING RESULTS: d_117=3826.8214105081656, j_116=2.663540445486518, l_116=0, l_114=6366.0721940341
 [Section13] 🧊 COOLING CALC: mode=TGT, coolingSystemType="Cooling", heatingType="Heatpump", isCoolingActive=true, coolingDemand=10192.893604542265
 [Section13] 🧊 COOLING RESULTS: d_117=3826.8214105081656, j_116=2.663540445486518, l_116=0, l_114=6366.0721940341
 [Section13] Target Model calculations complete
 [Section13] ✅ Target Model complete
 [Section13] 🎉 DUAL-ENGINE CALCULATIONS COMPLETE
 [Section12] Target Model calculations complete
 [Section12] Dual-engine calculations complete
 🔍 S15 REFERENCE UPSTREAM: ref_i_104=116070.33, ref_m_121=84594.73968, ref_i_80=0
 ✅ S15 Reference Model: All values converted to numbers for proper math
 ✅ S15 Reference Model: Additional fuel variables declared for cost calculations
 [S15 DEBUG] 💰 Electricity price from S04: $0.13/kWh
 🔍 S15 TARGET UPSTREAM: target_i_104=116070.32516166594, target_m_121=48980.79999999999, target_i_80=45879.580160000005
 [S15 DEBUG] 🧮 D141 calculation: 220216.84641217405 kWh/m²/yr × $0.13/kWh = $28628.19
 [Section03] Running Reference Model calculations...
 [Section03] Reference results stored with ref_ prefix for downstream sections: {h_23: '18', d_23: undefined, d_24: undefined, h_24: '24', d_20: undefined, …}
 [Section03] Reference Model calculations complete
 [Section12] Running dual-engine calculations...
 [Section12] Running Reference Model calculations...
 🔍 S15 REFERENCE UPSTREAM: ref_i_104=116070.33, ref_m_121=84594.73968, ref_i_80=0
 ✅ S15 Reference Model: All values converted to numbers for proper math
 ✅ S15 Reference Model: Additional fuel variables declared for cost calculations
 [S15 DEBUG] 💰 Electricity price from S04: $0.13/kWh
 🔍 S15 TARGET UPSTREAM: target_i_104=116070.32516166594, target_m_121=48980.79999999999, target_i_80=45879.580160000005
 [S15 DEBUG] 🧮 D141 calculation: 220216.84641217405 kWh/m²/yr × $0.13/kWh = $28628.19
 🔍 S15 REFERENCE UPSTREAM: ref_i_104=116070.33, ref_m_121=84594.73968, ref_i_80=0
 ✅ S15 Reference Model: All values converted to numbers for proper math
 ✅ S15 Reference Model: Additional fuel variables declared for cost calculations
 [S15 DEBUG] 💰 Electricity price from S04: $0.13/kWh
 🔍 S15 TARGET UPSTREAM: target_i_104=116070.32516166594, target_m_121=48980.79999999999, target_i_80=45879.580160000005
 [S15 DEBUG] 🧮 D141 calculation: 220216.84641217405 kWh/m²/yr × $0.13/kWh = $28628.19
 🔍 S15 REFERENCE UPSTREAM: ref_i_104=116070.32516166594, ref_m_121=84594.73968, ref_i_80=0
 ✅ S15 Reference Model: All values converted to numbers for proper math
 ✅ S15 Reference Model: Additional fuel variables declared for cost calculations
 🔍 S15 REFERENCE UPSTREAM: ref_i_104=116070.32516166594, ref_m_121=84594.73968, ref_i_80=0
 ✅ S15 Reference Model: All values converted to numbers for proper math
 ✅ S15 Reference Model: Additional fuel variables declared for cost calculations
 🔍 S15 REFERENCE UPSTREAM: ref_i_104=116070.32516166594, ref_m_121=84594.73968, ref_i_80=0
 ✅ S15 Reference Model: All values converted to numbers for proper math
 ✅ S15 Reference Model: Additional fuel variables declared for cost calculations
 [S15 DEBUG] 💰 Electricity price from S04: $0.13/kWh
 🔍 S15 TARGET UPSTREAM: target_i_104=116070.32516166594, target_m_121=48980.79999999999, target_i_80=45879.580160000005
 [S15 DEBUG] 🧮 D141 calculation: 220216.84641217405 kWh/m²/yr × $0.13/kWh = $28628.19
 🔍 S15 REFERENCE UPSTREAM: ref_i_104=116070.32516166594, ref_m_121=84594.73968, ref_i_80=0
 ✅ S15 Reference Model: All values converted to numbers for proper math
 ✅ S15 Reference Model: Additional fuel variables declared for cost calculations
 [S15 DEBUG] 💰 Electricity price from S04: $0.13/kWh
 🔍 S15 TARGET UPSTREAM: target_i_104=116070.32516166594, target_m_121=48980.79999999999, target_i_80=45879.580160000005
 [S15 DEBUG] 🧮 D141 calculation: 220216.84641217405 kWh/m²/yr × $0.13/kWh = $28628.19
 [S15 DEBUG] 💰 Electricity price from S04: $0.13/kWh
 🔍 S15 TARGET UPSTREAM: target_i_104=116070.32516166594, target_m_121=48980.79999999999, target_i_80=45879.580160000005
 [S15 DEBUG] 🧮 D141 calculation: 220216.84641217405 kWh/m²/yr × $0.13/kWh = $28628.19
 🔍 S15 REFERENCE UPSTREAM: ref_i_104=116070.32516166594, ref_m_121=84594.73968, ref_i_80=0
 ✅ S15 Reference Model: All values converted to numbers for proper math
 ✅ S15 Reference Model: Additional fuel variables declared for cost calculations
 [S15 DEBUG] 💰 Electricity price from S04: $0.13/kWh
 🔍 S15 TARGET UPSTREAM: target_i_104=116070.32516166594, target_m_121=48980.79999999999, target_i_80=45879.580160000005
 [S15 DEBUG] 🧮 D141 calculation: 220216.84641217405 kWh/m²/yr × $0.13/kWh = $28628.19
 🔍 S15 REFERENCE UPSTREAM: ref_i_104=116070.32516166594, ref_m_121=84594.73968, ref_i_80=0
 ✅ S15 Reference Model: All values converted to numbers for proper math
 ✅ S15 Reference Model: Additional fuel variables declared for cost calculations
 [S15 DEBUG] 💰 Electricity price from S04: $0.13/kWh
 🔍 S15 TARGET UPSTREAM: target_i_104=116070.32516166594, target_m_121=48980.79999999999, target_i_80=45879.580160000005
 🔍 S15 REFERENCE UPSTREAM: ref_i_104=116070.32516166594, ref_m_121=84594.73968, ref_i_80=0
 ✅ S15 Reference Model: All values converted to numbers for proper math
 ✅ S15 Reference Model: Additional fuel variables declared for cost calculations
 [S15 DEBUG] 💰 Electricity price from S04: $0.13/kWh
 🔍 S15 TARGET UPSTREAM: target_i_104=116070.32516166594, target_m_121=48980.79999999999, target_i_80=45879.580160000005
 [S15 DEBUG] 🧮 D141 calculation: 220216.84641217405 kWh/m²/yr × $0.13/kWh = $28628.19
 🔍 S15 REFERENCE UPSTREAM: ref_i_104=116070.32516166594, ref_m_121=84594.73968, ref_i_80=0
 ✅ S15 Reference Model: All values converted to numbers for proper math
 ✅ S15 Reference Model: Additional fuel variables declared for cost calculations
 [S15 DEBUG] 💰 Electricity price from S04: $0.13/kWh
 🔍 S15 TARGET UPSTREAM: target_i_104=116070.32516166594, target_m_121=48980.79999999999, target_i_80=45879.580160000005
 [S15 DEBUG] 🧮 D141 calculation: 220216.84641217405 kWh/m²/yr × $0.13/kWh = $28628.19
 [S15 DEBUG] 🧮 D141 calculation: 220216.84641217405 kWh/m²/yr × $0.13/kWh = $28628.19
 🔍 S15 REFERENCE UPSTREAM: ref_i_104=116070.32516166594, ref_m_121=84594.73968, ref_i_80=0
 ✅ S15 Reference Model: All values converted to numbers for proper math
 ✅ S15 Reference Model: Additional fuel variables declared for cost calculations
 [S15 DEBUG] 💰 Electricity price from S04: $0.13/kWh
 🔍 S15 TARGET UPSTREAM: target_i_104=116070.32516166594, target_m_121=48980.79999999999, target_i_80=45879.580160000005
 [S15 DEBUG] 🧮 D141 calculation: 220216.84641217405 kWh/m²/yr × $0.13/kWh = $28628.19
 [S15 DEBUG] 💰 Electricity price from S04: $0.13/kWh
 🔍 S15 TARGET UPSTREAM: target_i_104=116070.32516166594, target_m_121=48980.79999999999, target_i_80=45879.580160000005
 [S15 DEBUG] 🧮 D141 calculation: 220216.84641217405 kWh/m²/yr × $0.13/kWh = $28628.19
 🔍 S15 REFERENCE UPSTREAM: ref_i_104=116070.32516166594, ref_m_121=84594.73968, ref_i_80=0
 ✅ S15 Reference Model: All values converted to numbers for proper math
 ✅ S15 Reference Model: Additional fuel variables declared for cost calculations
 [S15 DEBUG] 💰 Electricity price from S04: $0.13/kWh
 🔍 S15 TARGET UPSTREAM: target_i_104=116070.32516166594, target_m_121=48980.79999999999, target_i_80=45879.580160000005
 [S15 DEBUG] 🧮 D141 calculation: 220216.84641217405 kWh/m²/yr × $0.13/kWh = $28628.19
 [Section12] Reference results stored with ref_ prefix for downstream sections
 [Section12] Reference Model calculations complete
 [Section12] Running Target Model calculations...
 [Section12] Target Model calculations complete
 [Section12] Dual-engine calculations complete
 [S11] calculateAll TRIGGERED. isReferenceMode: false
 [Section13] 🚀 CALCULATEALL TRIGGERED - Running dual-engine calculations...
 [Section13] 🔄 Starting Reference Model calculations...
 [Section13] Running Reference Model calculations...
 [S13 DEBUG] Reading ref_d_127: direct="253752.09440223372", fallback="null", dom="0", final="253752.09440223372"
 [Section13] 🔥 REF HEATING: systemType="Gas", tedReference=253752.09440223372, hspf=7.1
 [Section13] 🧊 COOLING CALC: mode=REF, coolingSystemType="Cooling", heatingType="Gas", isCoolingActive=true, coolingDemand=10192.893604542265
4011-Section13.js:2994 [S13 DEBUG] Storing ref_d_114 = 253752.09440223372
4011-Section13.js:2994 [S13 DEBUG] Storing ref_d_115 = 281946.77155803744
4011-Section13.js:2994 [S13 DEBUG] Storing ref_f_115 = 0
4011-Section13.js:2994 [S13 DEBUG] Storing ref_h_115 = 27214.939339578905
4011-Section13.js:2994 [S13 DEBUG] Storing ref_l_115 = 28194.677155803714
4011-Section13.js:2999 [Section13] Reference results stored with ref_ prefix for downstream sections
4011-Section13.js:3000 [S13 DEBUG] Total Reference results stored: 33
4011-Section13.js:2933 [Section13] Reference Model calculations complete
4011-Section13.js:2881 [Section13] ✅ Reference Model complete
4011-Section13.js:2883 [Section13] 🔄 Starting Target Model calculations...
4011-Section13.js:2947 [Section13] Running Target Model calculations...
4011-Section13.js:2317 [Section13] 🔥 HEATING CALC: mode=TGT, systemType="Heatpump", tedTarget=119171.54500166589, source=d_127
4011-Section13.js:2509 [Section13] 🧊 COOLING CALC: mode=TGT, coolingSystemType="Cooling", heatingType="Heatpump", isCoolingActive=true, coolingDemand=10192.893604542265
4011-Section13.js:2568 [Section13] 🧊 COOLING RESULTS: d_117=3826.8214105081656, j_116=2.663540445486518, l_116=0, l_114=6366.0721940341
4011-Section13.js:3124 [Section13] 🔥 TGT HEATING: systemType="Heatpump", tedTarget=119171.54500166589, hspf=12.5
4011-Section13.js:2509 [Section13] 🧊 COOLING CALC: mode=TGT, coolingSystemType="Cooling", heatingType="Heatpump", isCoolingActive=true, coolingDemand=10192.893604542265
4011-Section13.js:2568 [Section13] 🧊 COOLING RESULTS: d_117=3826.8214105081656, j_116=2.663540445486518, l_116=0, l_114=6366.0721940341
4011-Section13.js:2509 [Section13] 🧊 COOLING CALC: mode=TGT, coolingSystemType="Cooling", heatingType="Heatpump", isCoolingActive=true, coolingDemand=10192.893604542265
4011-Section13.js:2568 [Section13] 🧊 COOLING RESULTS: d_117=3826.8214105081656, j_116=2.663540445486518, l_116=0, l_114=6366.0721940341
 [Section13] Target Model calculations complete
 [Section13] ✅ Target Model complete
 [Section13] 🎉 DUAL-ENGINE CALCULATIONS COMPLETE
 [S14 DEBUG] 🔄 Running Reference Model calculations...
4011-Section14.js:1013 [S14 DEBUG] ✅ Converted to numbers - ref_d_127 calculation: 59532.28501397147 + 119064.57002794294 + 36440.079840319355 + 84594.73968 - 45879.580160000005
4011-Section14.js:1018 [S14 DEBUG] ✅ ref_d_127 = 253752.09440223372 (should be numeric, not NaN)
4011-Section14.js:1026 [S14 DEBUG] ✅ Stored ref_d_127 = 253752.09440223372 in StateManager
4011-Section14.js:1027 [S14 DEBUG] 🔄 Continuing with other Reference calculations...
4011-Section14.js:1040 [S14 DEBUG] ref_d_128 calculation: 59532.28501397147 + 119064.57002794294 + 36440.079840319355 - 45879.580160000005 = 169157.35472223375
4011-Section04.js:771 [S04] Starting dual-engine Excel-compliant calculations
4011-Section04.js:779 [S04] Calculating Target model
4011-Section04.js:679 [S04] Row 32 Subtotals - F32: 132938, G32: 6779.838, J32: 133574.36633416289, K32: 6812.2926830423075
4011-Section04.js:792 [S04] Calculation error: ReferenceError: DualState is not defined
    at calculateRow35 (4011-Section04.js:747:18)
    at calculateTargetModel (4011-Section04.js:809:5)
    at Object.calculateAll (4011-Section04.js:780:7)
    at 4011-Calculator.js:508:25
    at Array.forEach (<anonymous>)
    at Object.calculateAll (4011-Calculator.js:504:15)
    at index.html:1036:29
calculateAll @ 4011-Section04.js:792
(anonymous) @ 4011-Calculator.js:508
calculateAll @ 4011-Calculator.js:504
(anonymous) @ index.html:1036
setTimeout
(anonymous) @ index.html:1034Understand this errorAI
4011-Section02.js:799 [S02] Reference results stored with ref_ prefix for downstream sections
4011-Section02.js:799 [S02] Reference results stored with ref_ prefix for downstream sections
4011-Section15.js:1338 🔍 S15 REFERENCE UPSTREAM: ref_i_104=116070.32516166594, ref_m_121=84594.73968, ref_i_80=0
4011-Section15.js:1379 ✅ S15 Reference Model: All values converted to numbers for proper math
4011-Section15.js:1390 ✅ S15 Reference Model: Additional fuel variables declared for cost calculations
4011-Section15.js:1591 [S15 DEBUG] 💰 Electricity price from S04: $0.13/kWh
4011-Section15.js:1610 🔍 S15 TARGET UPSTREAM: target_i_104=116070.32516166594, target_m_121=48980.79999999999, target_i_80=45879.580160000005
4011-Section15.js:1779 [S15 DEBUG] 🧮 D141 calculation: 220216.84641217405 kWh/m²/yr × $0.13/kWh = $28628.19
4011-Dependency.js:78 [DependencyGraph] Data loaded: 376 nodes, 648 links
4011-Dependency.js:712 [DependencyGraph] Calculating node sizes...
4011-Section15.js:268 S15: Switched to REFERENCE mode
4011-Section15.js:310 [S15 DEBUG] 🔄 Updating calculated display values for reference mode
4011-Section15.js:318 [S15 DEBUG] Sample Reference values in StateManager: {ref_d_135: '313511.384841666', ref_h_135: '219.6688514865933', ref_d_136: '313511.384841666'}
4011-Section15.js:342 [S15] d_135: REF=313511.384841666 vs TGT=220216.84641217405 (showing REF)
4011-Section15.js:342 [S15] h_135: REF=219.6688514865933 vs TGT=154.29992041211747 (showing REF)
4011-Section15.js:375 [Section15] Calculated display values updated for reference mode
4011-Section15.js:303 S15: UI refreshed for reference mode
4011-Section15.js:1338 🔍 S15 REFERENCE UPSTREAM: ref_i_104=116070.32516166594, ref_m_121=84594.73968, ref_i_80=0
4011-Section15.js:1379 ✅ S15 Reference Model: All values converted to numbers for proper math
4011-Section15.js:1390 ✅ S15 Reference Model: Additional fuel variables declared for cost calculations
4011-Section15.js:1591 [S15 DEBUG] 💰 Electricity price from S04: $0.13/kWh
4011-Section15.js:1610 🔍 S15 TARGET UPSTREAM: target_i_104=116070.32516166594, target_m_121=48980.79999999999, target_i_80=45879.580160000005
4011-Section15.js:1779 [S15 DEBUG] 🧮 D141 calculation: 220216.84641217405 kWh/m²/yr × $0.13/kWh = $28628.19
4011-Section15.js:310 [S15 DEBUG] 🔄 Updating calculated display values for reference mode
4011-Section15.js:318 [S15 DEBUG] Sample Reference values in StateManager: {ref_d_135: '313511.384841666', ref_h_135: '219.6688514865933', ref_d_136: '313511.384841666'}
4011-Section15.js:342 [S15] d_135: REF=313511.384841666 vs TGT=220216.84641217405 (showing REF)
4011-Section15.js:342 [S15] h_135: REF=219.6688514865933 vs TGT=154.29992041211747 (showing REF)
4011-Section15.js:375 [Section15] Calculated display values updated for reference mode
4011-Section15.js:268 S15: Switched to TARGET mode
4011-Section15.js:310 [S15 DEBUG] 🔄 Updating calculated display values for target mode
4011-Section15.js:318 [S15 DEBUG] Sample Reference values in StateManager: {ref_d_135: '313511.384841666', ref_h_135: '219.6688514865933', ref_d_136: '313511.384841666'}
4011-Section15.js:375 [Section15] Calculated display values updated for target mode
4011-Section15.js:303 S15: UI refreshed for target mode
4011-Section15.js:1338 🔍 S15 REFERENCE UPSTREAM: ref_i_104=116070.32516166594, ref_m_121=84594.73968, ref_i_80=0
4011-Section15.js:1379 ✅ S15 Reference Model: All values converted to numbers for proper math
4011-Section15.js:1390 ✅ S15 Reference Model: Additional fuel variables declared for cost calculations
4011-Section15.js:1591 [S15 DEBUG] 💰 Electricity price from S04: $0.13/kWh
4011-Section15.js:1610 🔍 S15 TARGET UPSTREAM: target_i_104=116070.32516166594, target_m_121=48980.79999999999, target_i_80=45879.580160000005
4011-Section15.js:1779 [S15 DEBUG] 🧮 D141 calculation: 220216.84641217405 kWh/m²/yr × $0.13/kWh = $28628.19
4011-Section15.js:310 [S15 DEBUG] 🔄 Updating calculated display values for target mode
4011-Section15.js:318 [S15 DEBUG] Sample Reference values in StateManager: {ref_d_135: '313511.384841666', ref_h_135: '219.6688514865933', ref_d_136: '313511.384841666'}
4011-Section15.js:375 [Section15] Calculated display values updated for target mode
4011-Section04.js:211 S04: Switched to REFERENCE mode
4011-Section04.js:276 S04: UI refreshed for reference mode
4011-Section04.js:771 [S04] Starting dual-engine Excel-compliant calculations
4011-Section04.js:779 [S04] Calculating Target model
4011-Section04.js:679 [S04] Row 32 Subtotals - F32: 132938, G32: 6779.838, J32: 133574.36633416289, K32: 6812.2926830423075
4011-Section04.js:792 [S04] Calculation error: ReferenceError: DualState is not defined
    at calculateRow35 (4011-Section04.js:747:18)
    at calculateTargetModel (4011-Section04.js:809:5)
    at calculateAll (4011-Section04.js:780:7)
    at Object.switchMode (4011-Section04.js:215:7)
    at HTMLDivElement.<anonymous> (4011-Section04.js:369:21)
calculateAll @ 4011-Section04.js:792
switchMode @ 4011-Section04.js:215
(anonymous) @ 4011-Section04.js:369Understand this errorAI
4011-Section04.js:315 S04: Calculated display values updated for target mode
4011-Section04.js:211 S04: Switched to TARGET mode
4011-Section04.js:276 S04: UI refreshed for target mode
4011-Section04.js:771 [S04] Starting dual-engine Excel-compliant calculations
4011-Section04.js:779 [S04] Calculating Target model
4011-Section04.js:679 [S04] Row 32 Subtotals - F32: 132938, G32: 6779.838, J32: 133574.36633416289, K32: 6812.2926830423075
4011-Section04.js:792 [S04] Calculation error: ReferenceError: DualState is not defined
    at calculateRow35 (4011-Section04.js:747:18)
    at calculateTargetModel (4011-Section04.js:809:5)
    at calculateAll (4011-Section04.js:780:7)
    at Object.switchMode (4011-Section04.js:215:7)
    at HTMLDivElement.<anonymous> (4011-Section04.js:375:21)
calculateAll @ 4011-Section04.js:792
switchMode @ 4011-Section04.js:215
(anonymous) @ 4011-Section04.js:375Understand this errorAI
4011-Section04.js:315 S04: Calculated display values updated for target mode
4011-Section04.js:211 S04: Switched to REFERENCE mode
4011-Section04.js:276 S04: UI refreshed for reference mode
4011-Section04.js:771 [S04] Starting dual-engine Excel-compliant calculations
4011-Section04.js:779 [S04] Calculating Target model
4011-Section04.js:679 [S04] Row 32 Subtotals - F32: 132938, G32: 6779.838, J32: 133574.36633416289, K32: 6812.2926830423075
4011-Section04.js:792 [S04] Calculation error: ReferenceError: DualState is not defined
    at calculateRow35 (4011-Section04.js:747:18)
    at calculateTargetModel (4011-Section04.js:809:5)
    at calculateAll (4011-Section04.js:780:7)
    at Object.switchMode (4011-Section04.js:215:7)
    at HTMLDivElement.<anonymous> (4011-Section04.js:369:21)
calculateAll @ 4011-Section04.js:792
switchMode @ 4011-Section04.js:215
(anonymous) @ 4011-Section04.js:369Understand this errorAI
4011-Section04.js:315 S04: Calculated display values updated for target mode