 Desktop device detected
 Section 18 (Notes) placeholder loaded.
 S02: Target defaults set
 S02: Reference defaults set
 S02: Pattern A initialization complete.
 [S02] Switched to REFERENCE mode
 [S02] Switched to TARGET mode
 [S02] Switched to TARGET mode
 [S02] Switched to TARGET mode
 S03: Sliders initialized via FieldManager
 S03: Section rendered - initializing Self-Contained State Module.
 S03: Header controls setup complete
 S03: ModeManager exposed globally for cross-section integration.
 S03: Checking climate data availability (attempt 1/10)
 S03: Climate data available (8) ['BC', 'AB', 'SK', 'MB', 'ON', 'QC', 'NU', 'NT']
 S03: ClimateData available - initializing dropdowns
 S03: Populated province dropdown with options: (8) ['AB', 'BC', 'MB', 'NT', 'NU', 'ON', 'QC', 'SK']
 City dropdown updated for ON - selected: Alexandria
 S03: Sliders initialized via FieldManager
 [Section03] Running Reference Model calculations...
 [Section03] Reference results stored with ref_ prefix for downstream sections: {h_23: '18', d_23: undefined, d_24: undefined, h_24: '24', d_20: undefined, …}
 [Section03] Reference Model calculations complete
 S03: Weather data updated for Alexandria, ON (Present)
 Section03: Province selected: ON
 City dropdown updated for ON - selected: Alexandria
 [Section03] Running Reference Model calculations...
 [Section03] Reference results stored with ref_ prefix for downstream sections: {h_23: '18', d_23: undefined, d_24: undefined, h_24: '24', d_20: undefined, …}
 [Section03] Reference Model calculations complete
 S03: Weather data updated for Alexandria, ON (Present)
 [Section03] Running Reference Model calculations...
 [Section03] Reference results stored with ref_ prefix for downstream sections: {h_23: '18', d_23: undefined, d_24: undefined, h_24: '24', d_20: undefined, …}
 [Section03] Reference Model calculations complete
 S03: Self-Contained State Module initialization complete
 S04: Target defaults set
 S04: Reference defaults set
 S04: Pattern A initialization complete.
 [S02] Switched to REFERENCE mode
 [S02] Switched to TARGET mode
 [S02] Switched to TARGET mode
 [S02] Switched to TARGET mode
2 S04 REFERENCE MODEL: ref_j_32=0, ref_k_32=0
2 S04 REFERENCE MODEL: ref_j_32=0, ref_k_32=0
 S09: Reference defaults loaded from standard: OBC SB10 5.5-6 Z6, lighting: 2.0
 S09: Header controls injected successfully
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
 S10: Global listener triggered by i_97, recalculating all.
 S10: Utilization factor dependency i_97 changed.
 S10: Global listener triggered by i_98, recalculating all.
 S10: Utilization factor dependency i_98 changed.
 S12: Section rendered - initializing Pattern A Dual-State Module.
 S12: Reference defaults loaded from standard: OBC SB10 5.5-6 Z6
 S10: Global listener triggered by i_103, recalculating all.
 S10: Utilization factor dependency i_103 changed.
 [Section12] Running dual-engine calculations...
 [Section12] Running Reference Model calculations...
 [Section12] Reference results stored with ref_ prefix for downstream sections
 [Section12] Reference Model calculations complete
 [Section12] Running Target Model calculations...
 S10: Global listener triggered by i_103, recalculating all.
 S10: Utilization factor dependency i_103 changed.
 [Section12] Target Model calculations complete
 [Section12] Dual-engine calculations complete
 S12: Pattern A initialization complete.
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
2 S04 REFERENCE MODEL: ref_j_32=0, ref_k_32=0
 🔍 S15 REFERENCE UPSTREAM: ref_i_104=116070.33, ref_m_121=84594.73968, ref_i_80=0
 ✅ S15 Reference Model: All values converted to numbers for proper math
 ✅ S15 Reference Model: Additional fuel variables declared for cost calculations
 🔍 S15 REFERENCE UPSTREAM: ref_i_104=116070.33, ref_m_121=84594.73968, ref_i_80=0
 ✅ S15 Reference Model: All values converted to numbers for proper math
 ✅ S15 Reference Model: Additional fuel variables declared for cost calculations
 [S15 DEBUG] 💰 Electricity price from S04: raw="null" → parsed=$0/kWh
 🔍 S15 TARGET UPSTREAM: target_i_104=0, target_m_121=97961.59999999998, target_i_80=45879.580160000005
 [S15 DEBUG] 💰 All energy prices from S04: elec=$0, gas=$0, propane=$0, oil=$0, wood=$0
 🔍 S15 REFERENCE UPSTREAM: ref_i_104=116070.33, ref_m_121=84594.73968, ref_i_80=0
 ✅ S15 Reference Model: All values converted to numbers for proper math
 ✅ S15 Reference Model: Additional fuel variables declared for cost calculations
 [S15 DEBUG] 💰 Electricity price from S04: raw="null" → parsed=$0/kWh
 🔍 S15 TARGET UPSTREAM: target_i_104=0, target_m_121=97961.59999999998, target_i_80=45879.580160000005
 [S15 DEBUG] 💰 All energy prices from S04: elec=$0, gas=$0, propane=$0, oil=$0, wood=$0
 [S15 DEBUG] 🧮 D141 calculation: 136472.35583999997 kWh/m²/yr × $0/kWh = $0.00
 [S15 DEBUG] 🧮 D141 calculation: 136472.35583999997 kWh/m²/yr × $0/kWh = $0.00
 [S15 DEBUG] 💰 Electricity price from S04: raw="null" → parsed=$0/kWh
 🔍 S15 TARGET UPSTREAM: target_i_104=0, target_m_121=97961.59999999998, target_i_80=45879.580160000005
 [S15 DEBUG] 💰 All energy prices from S04: elec=$0, gas=$0, propane=$0, oil=$0, wood=$0
 [S15 DEBUG] 🧮 D141 calculation: 136472.35583999997 kWh/m²/yr × $0/kWh = $0.00
 🔍 S15 REFERENCE UPSTREAM: ref_i_104=116070.33, ref_m_121=84594.73968, ref_i_80=0
 ✅ S15 Reference Model: All values converted to numbers for proper math
 ✅ S15 Reference Model: Additional fuel variables declared for cost calculations
 [S15 DEBUG] 💰 Electricity price from S04: raw="null" → parsed=$0/kWh
 🔍 S15 TARGET UPSTREAM: target_i_104=0, target_m_121=97961.59999999998, target_i_80=45879.580160000005
 [S15 DEBUG] 💰 All energy prices from S04: elec=$0, gas=$0, propane=$0, oil=$0, wood=$0
 [S15 DEBUG] 🧮 D141 calculation: 136472.35583999997 kWh/m²/yr × $0/kWh = $0.00
 🔍 S15 REFERENCE UPSTREAM: ref_i_104=116070.33, ref_m_121=84594.73968, ref_i_80=0
 ✅ S15 Reference Model: All values converted to numbers for proper math
 ✅ S15 Reference Model: Additional fuel variables declared for cost calculations
 [S15 DEBUG] 💰 Electricity price from S04: raw="null" → parsed=$0/kWh
 🔍 S15 TARGET UPSTREAM: target_i_104=0, target_m_121=97961.59999999998, target_i_80=45879.580160000005
 [S15 DEBUG] 💰 All energy prices from S04: elec=$0, gas=$0, propane=$0, oil=$0, wood=$0
 🔍 S15 REFERENCE UPSTREAM: ref_i_104=116070.33, ref_m_121=84594.73968, ref_i_80=0
 ✅ S15 Reference Model: All values converted to numbers for proper math
 ✅ S15 Reference Model: Additional fuel variables declared for cost calculations
 [S15 DEBUG] 💰 Electricity price from S04: raw="null" → parsed=$0/kWh
 🔍 S15 TARGET UPSTREAM: target_i_104=0, target_m_121=97961.59999999998, target_i_80=45879.580160000005
 [S15 DEBUG] 💰 All energy prices from S04: elec=$0, gas=$0, propane=$0, oil=$0, wood=$0
 [S15 DEBUG] 🧮 D141 calculation: 136472.35583999997 kWh/m²/yr × $0/kWh = $0.00
 [S15 DEBUG] 🧮 D141 calculation: 136472.35583999997 kWh/m²/yr × $0/kWh = $0.00
 [S15 DEBUG] 💰 Electricity price from S04: raw="null" → parsed=$0/kWh
 🔍 S15 TARGET UPSTREAM: target_i_104=0, target_m_121=97961.59999999998, target_i_80=45879.580160000005
 [S15 DEBUG] 💰 All energy prices from S04: elec=$0, gas=$0, propane=$0, oil=$0, wood=$0
 [S15 DEBUG] 🧮 D141 calculation: 136472.35583999997 kWh/m²/yr × $0/kWh = $0.00
 S15: Target defaults set
 S15: Reference defaults set
 S15: Pattern A initialization complete.
 ✅ S15: Header controls injected successfully
 🔍 S15 REFERENCE UPSTREAM: ref_i_104=116070.33, ref_m_121=84594.73968, ref_i_80=0
 ✅ S15 Reference Model: All values converted to numbers for proper math
 ✅ S15 Reference Model: Additional fuel variables declared for cost calculations
 [S15 DEBUG] 💰 Electricity price from S04: raw="null" → parsed=$0/kWh
 🔍 S15 TARGET UPSTREAM: target_i_104=0, target_m_121=97961.59999999998, target_i_80=45879.580160000005
 [S15 DEBUG] 💰 All energy prices from S04: elec=$0, gas=$0, propane=$0, oil=$0, wood=$0
 [S15 DEBUG] 🧮 D141 calculation: 136472.35583999997 kWh/m²/yr × $0/kWh = $0.00
 S02: Target defaults set
 S02: Reference defaults set
 S02: Pattern A initialization complete.
 [S02] Switched to REFERENCE mode
 [S02] Switched to TARGET mode
 [S02] Switched to TARGET mode
 [S02] Switched to TARGET mode
 S03: Sliders initialized via FieldManager
 S03: Section rendered - initializing Self-Contained State Module.
 S03: ModeManager exposed globally for cross-section integration.
 S03: Checking climate data availability (attempt 1/10)
 S03: Climate data available (8) ['BC', 'AB', 'SK', 'MB', 'ON', 'QC', 'NU', 'NT']
 S03: ClimateData available - initializing dropdowns
 S03: Populated province dropdown with options: (8) ['AB', 'BC', 'MB', 'NT', 'NU', 'ON', 'QC', 'SK']
 City dropdown updated for ON - selected: Alexandria
 S03: Sliders initialized via FieldManager
 [Section03] Running Reference Model calculations...
 [Section03] Reference results stored with ref_ prefix for downstream sections: {h_23: '18', d_23: undefined, d_24: undefined, h_24: '24', d_20: undefined, …}
 [Section03] Reference Model calculations complete
 S03: Weather data updated for Alexandria, ON (Present)
 Section03: Province selected: ON
 City dropdown updated for ON - selected: Alexandria
 [Section03] Running Reference Model calculations...
 [Section03] Reference results stored with ref_ prefix for downstream sections: {h_23: '18', d_23: undefined, d_24: undefined, h_24: '24', d_20: undefined, …}
 [Section03] Reference Model calculations complete
 S03: Weather data updated for Alexandria, ON (Present)
 [Section03] Running Reference Model calculations...
 [Section03] Reference results stored with ref_ prefix for downstream sections: {h_23: '18', d_23: undefined, d_24: undefined, h_24: '24', d_20: undefined, …}
 [Section03] Reference Model calculations complete
 S03: Self-Contained State Module initialization complete
 S04: Target defaults set
 S04: Reference defaults set
 S04: Pattern A initialization complete.
 [S02] Switched to REFERENCE mode
 [S02] Switched to TARGET mode
 [S02] Switched to TARGET mode
 [S02] Switched to TARGET mode
 [S02] Switched to REFERENCE mode
 [S02] Switched to TARGET mode
 [S02] Switched to TARGET mode
 [S02] Switched to TARGET mode
 [S02] Switched to REFERENCE mode
 [S02] Switched to TARGET mode
 [S02] Switched to TARGET mode
 [S02] Switched to TARGET mode
 [S02] Switched to REFERENCE mode
 [S02] Switched to TARGET mode
 [S02] Switched to TARGET mode
 [S02] Switched to TARGET mode
 [S02] Switched to REFERENCE mode
 [S02] Switched to TARGET mode
 [S02] Switched to TARGET mode
 [S02] Switched to TARGET mode
 [S02] Switched to REFERENCE mode
 [S02] Switched to TARGET mode
 [S02] Switched to TARGET mode
 [S02] Switched to TARGET mode
 [S02] Switched to REFERENCE mode
 [S02] Switched to TARGET mode
 [S02] Switched to TARGET mode
 [S02] Switched to TARGET mode
 [S02] Switched to REFERENCE mode
 [S02] Switched to TARGET mode
 [S02] Switched to TARGET mode
 [S02] Switched to TARGET mode
2 S04 REFERENCE MODEL: ref_j_32=132765.65, ref_k_32=6771.04815
2 S04 REFERENCE MODEL: ref_j_32=132765.65, ref_k_32=6771.04815
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
 S10: Global listener triggered by i_97, recalculating all.
 S10: Utilization factor dependency i_97 changed.
 S10: Global listener triggered by i_98, recalculating all.
 S10: Utilization factor dependency i_98 changed.
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
calculateReferenceModel @ 4011-Section15.js:1366
calculateAll @ 4011-Section15.js:1286
initializeEventHandlers @ 4011-Section15.js:2007
initializeSectionEventHandlers @ 4011-FieldManager.js:310
renderSection @ 4011-FieldManager.js:367
(anonymous) @ 4011-FieldManager.js:394
renderAllSections @ 4011-FieldManager.js:393
initialize @ 4011-Calculator.js:66
(anonymous) @ 4011-Calculator.js:965Understand this warningAI
 ✅ S15 Reference Model: All values converted to numbers for proper math
 ✅ S15 Reference Model: Additional fuel variables declared for cost calculations
2 S04 REFERENCE MODEL: ref_j_32=132765.65, ref_k_32=6771.04815
 🔍 S15 REFERENCE UPSTREAM: ref_i_104=0, ref_m_121=84594.73968, ref_i_80=0
 [S15] Missing critical upstream Reference values: ref_g_101, ref_d_101, ref_i_104
calculateReferenceModel @ 4011-Section15.js:1366
calculateAll @ 4011-Section15.js:1286
(anonymous) @ 4011-Section15.js:1945
(anonymous) @ 4011-StateManager.js:486
notifyListeners @ 4011-StateManager.js:484
setValue @ 4011-StateManager.js:362
setCalculatedValue @ 4011-Section01.js:376
calculateReferenceModel @ 4011-Section01.js:478
runAllCalculations @ 4011-Section01.js:1233
(anonymous) @ 4011-Section01.js:1306
(anonymous) @ 4011-StateManager.js:486
notifyListeners @ 4011-StateManager.js:484
setValue @ 4011-StateManager.js:344
setRefValueIfChanged @ 4011-Section15.js:1315
calculateReferenceModel @ 4011-Section15.js:1421
calculateAll @ 4011-Section15.js:1286
initializeEventHandlers @ 4011-Section15.js:2007
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
calculateReferenceModel @ 4011-Section15.js:1366
calculateAll @ 4011-Section15.js:1286
(anonymous) @ 4011-Section15.js:1945
(anonymous) @ 4011-StateManager.js:486
notifyListeners @ 4011-StateManager.js:484
setValue @ 4011-StateManager.js:362
calculateReferenceModel @ 4011-Section15.js:1515
calculateAll @ 4011-Section15.js:1286
(anonymous) @ 4011-Section15.js:1945
(anonymous) @ 4011-StateManager.js:486
notifyListeners @ 4011-StateManager.js:484
setValue @ 4011-StateManager.js:362
setCalculatedValue @ 4011-Section01.js:376
calculateReferenceModel @ 4011-Section01.js:478
runAllCalculations @ 4011-Section01.js:1233
(anonymous) @ 4011-Section01.js:1306
(anonymous) @ 4011-StateManager.js:486
notifyListeners @ 4011-StateManager.js:484
setValue @ 4011-StateManager.js:344
setRefValueIfChanged @ 4011-Section15.js:1315
calculateReferenceModel @ 4011-Section15.js:1421
calculateAll @ 4011-Section15.js:1286
initializeEventHandlers @ 4011-Section15.js:2007
initializeSectionEventHandlers @ 4011-FieldManager.js:310
renderSection @ 4011-FieldManager.js:367
(anonymous) @ 4011-FieldManager.js:394
renderAllSections @ 4011-FieldManager.js:393
initialize @ 4011-Calculator.js:66
(anonymous) @ 4011-Calculator.js:965Understand this warningAI
 ✅ S15 Reference Model: All values converted to numbers for proper math
 ✅ S15 Reference Model: Additional fuel variables declared for cost calculations
 [S15 DEBUG] 💰 Electricity price from S04: raw="$0.1300" → parsed=$0/kWh
 🔍 S15 TARGET UPSTREAM: target_i_104=116070.33, target_m_121=48980.79999999999, target_i_80=45879.580160000005
 [S15 DEBUG] 💰 All energy prices from S04: elec=$0, gas=$0, propane=$0, oil=$0, wood=$0
 🔍 S15 REFERENCE UPSTREAM: ref_i_104=0, ref_m_121=84594.73968, ref_i_80=0
 [S15] Missing critical upstream Reference values: ref_g_101, ref_d_101, ref_i_104
calculateReferenceModel @ 4011-Section15.js:1366
calculateAll @ 4011-Section15.js:1286
(anonymous) @ 4011-Section15.js:1945
(anonymous) @ 4011-StateManager.js:486
notifyListeners @ 4011-StateManager.js:484
setValue @ 4011-StateManager.js:362
updateTEUICalculations @ 4011-StateManager.js:929
(anonymous) @ 4011-StateManager.js:199
(anonymous) @ 4011-StateManager.js:486
notifyListeners @ 4011-StateManager.js:484
setValue @ 4011-StateManager.js:362
setCalculatedValue @ 4011-Section04.js:82
updateSubtotals @ 4011-Section04.js:1687
handleD136Update @ 4011-Section04.js:1180
(anonymous) @ 4011-StateManager.js:486
notifyListeners @ 4011-StateManager.js:484
setValue @ 4011-StateManager.js:362
setCalculatedValue @ 4011-Section15.js:122
calculateValues @ 4011-Section15.js:1693
calculateTargetModel @ 4011-Section15.js:1563
calculateAll @ 4011-Section15.js:1287
(anonymous) @ 4011-Section15.js:1945
(anonymous) @ 4011-StateManager.js:486
notifyListeners @ 4011-StateManager.js:484
setValue @ 4011-StateManager.js:362
calculateReferenceModel @ 4011-Section15.js:1515
calculateAll @ 4011-Section15.js:1286
(anonymous) @ 4011-Section15.js:1945
(anonymous) @ 4011-StateManager.js:486
notifyListeners @ 4011-StateManager.js:484
setValue @ 4011-StateManager.js:362
setCalculatedValue @ 4011-Section01.js:376
calculateReferenceModel @ 4011-Section01.js:478
runAllCalculations @ 4011-Section01.js:1233
(anonymous) @ 4011-Section01.js:1306
(anonymous) @ 4011-StateManager.js:486
notifyListeners @ 4011-StateManager.js:484
setValue @ 4011-StateManager.js:344
setRefValueIfChanged @ 4011-Section15.js:1315
calculateReferenceModel @ 4011-Section15.js:1421
calculateAll @ 4011-Section15.js:1286
initializeEventHandlers @ 4011-Section15.js:2007
initializeSectionEventHandlers @ 4011-FieldManager.js:310
renderSection @ 4011-FieldManager.js:367
(anonymous) @ 4011-FieldManager.js:394
renderAllSections @ 4011-FieldManager.js:393
initialize @ 4011-Calculator.js:66
(anonymous) @ 4011-Calculator.js:965Understand this warningAI
 ✅ S15 Reference Model: All values converted to numbers for proper math
 ✅ S15 Reference Model: Additional fuel variables declared for cost calculations
 [S15 DEBUG] 💰 Electricity price from S04: raw="$0.1300" → parsed=$0/kWh
 🔍 S15 TARGET UPSTREAM: target_i_104=116070.33, target_m_121=48980.79999999999, target_i_80=45879.580160000005
 [S15 DEBUG] 💰 All energy prices from S04: elec=$0, gas=$0, propane=$0, oil=$0, wood=$0
 🔍 S15 REFERENCE UPSTREAM: ref_i_104=0, ref_m_121=84594.73968, ref_i_80=0
 [S15] Missing critical upstream Reference values: ref_g_101, ref_d_101, ref_i_104
calculateReferenceModel @ 4011-Section15.js:1366
calculateAll @ 4011-Section15.js:1286
(anonymous) @ 4011-Section15.js:1945
(anonymous) @ 4011-StateManager.js:486
notifyListeners @ 4011-StateManager.js:484
setValue @ 4011-StateManager.js:362
calculateValues @ 4011-Section15.js:1705
calculateTargetModel @ 4011-Section15.js:1563
calculateAll @ 4011-Section15.js:1287
(anonymous) @ 4011-Section15.js:1945
(anonymous) @ 4011-StateManager.js:486
notifyListeners @ 4011-StateManager.js:484
setValue @ 4011-StateManager.js:362
updateTEUICalculations @ 4011-StateManager.js:929
(anonymous) @ 4011-StateManager.js:199
(anonymous) @ 4011-StateManager.js:486
notifyListeners @ 4011-StateManager.js:484
setValue @ 4011-StateManager.js:362
setCalculatedValue @ 4011-Section04.js:82
updateSubtotals @ 4011-Section04.js:1687
handleD136Update @ 4011-Section04.js:1180
(anonymous) @ 4011-StateManager.js:486
notifyListeners @ 4011-StateManager.js:484
setValue @ 4011-StateManager.js:362
setCalculatedValue @ 4011-Section15.js:122
calculateValues @ 4011-Section15.js:1693
calculateTargetModel @ 4011-Section15.js:1563
calculateAll @ 4011-Section15.js:1287
(anonymous) @ 4011-Section15.js:1945
(anonymous) @ 4011-StateManager.js:486
notifyListeners @ 4011-StateManager.js:484
setValue @ 4011-StateManager.js:362
calculateReferenceModel @ 4011-Section15.js:1515
calculateAll @ 4011-Section15.js:1286
(anonymous) @ 4011-Section15.js:1945
(anonymous) @ 4011-StateManager.js:486
notifyListeners @ 4011-StateManager.js:484
setValue @ 4011-StateManager.js:362
setCalculatedValue @ 4011-Section01.js:376
calculateReferenceModel @ 4011-Section01.js:478
runAllCalculations @ 4011-Section01.js:1233
(anonymous) @ 4011-Section01.js:1306
(anonymous) @ 4011-StateManager.js:486
notifyListeners @ 4011-StateManager.js:484
setValue @ 4011-StateManager.js:344
setRefValueIfChanged @ 4011-Section15.js:1315
calculateReferenceModel @ 4011-Section15.js:1421
calculateAll @ 4011-Section15.js:1286
initializeEventHandlers @ 4011-Section15.js:2007
initializeSectionEventHandlers @ 4011-FieldManager.js:310
renderSection @ 4011-FieldManager.js:367
(anonymous) @ 4011-FieldManager.js:394
renderAllSections @ 4011-FieldManager.js:393
initialize @ 4011-Calculator.js:66
(anonymous) @ 4011-Calculator.js:965Understand this warningAI
 ✅ S15 Reference Model: All values converted to numbers for proper math
 ✅ S15 Reference Model: Additional fuel variables declared for cost calculations
 [S15 DEBUG] 💰 Electricity price from S04: raw="$0.1300" → parsed=$0/kWh
 🔍 S15 TARGET UPSTREAM: target_i_104=116070.33, target_m_121=48980.79999999999, target_i_80=45879.580160000005
 [S15 DEBUG] 💰 All energy prices from S04: elec=$0, gas=$0, propane=$0, oil=$0, wood=$0
 [S15 DEBUG] 🧮 D141 calculation: 220216.85125050816 kWh/m²/yr × $0/kWh = $0.00
 [S15 DEBUG] 🧮 D141 calculation: 220216.85125050816 kWh/m²/yr × $0/kWh = $0.00
 [S02] Switched to REFERENCE mode
 [S02] Switched to TARGET mode
 [S02] Switched to TARGET mode
 [S02] Switched to TARGET mode
 [S02] Switched to REFERENCE mode
 [S02] Switched to TARGET mode
 [S02] Switched to TARGET mode
 [S02] Switched to TARGET mode
 🔍 S15 REFERENCE UPSTREAM: ref_i_104=0, ref_m_121=84594.73968, ref_i_80=0
 [S15] Missing critical upstream Reference values: ref_g_101, ref_d_101, ref_i_104
calculateReferenceModel @ 4011-Section15.js:1366
calculateAll @ 4011-Section15.js:1286
(anonymous) @ 4011-Section15.js:1945
(anonymous) @ 4011-StateManager.js:486
notifyListeners @ 4011-StateManager.js:484
setValue @ 4011-StateManager.js:362
setCalculatedValue @ 4011-Section04.js:82
updateSubtotals @ 4011-Section04.js:1698
handleD136Update @ 4011-Section04.js:1180
(anonymous) @ 4011-StateManager.js:486
notifyListeners @ 4011-StateManager.js:484
setValue @ 4011-StateManager.js:362
setCalculatedValue @ 4011-Section15.js:122
calculateValues @ 4011-Section15.js:1693
calculateTargetModel @ 4011-Section15.js:1563
calculateAll @ 4011-Section15.js:1287
(anonymous) @ 4011-Section15.js:1945
(anonymous) @ 4011-StateManager.js:486
notifyListeners @ 4011-StateManager.js:484
setValue @ 4011-StateManager.js:362
calculateReferenceModel @ 4011-Section15.js:1515
calculateAll @ 4011-Section15.js:1286
(anonymous) @ 4011-Section15.js:1945
(anonymous) @ 4011-StateManager.js:486
notifyListeners @ 4011-StateManager.js:484
setValue @ 4011-StateManager.js:362
setCalculatedValue @ 4011-Section01.js:376
calculateReferenceModel @ 4011-Section01.js:478
runAllCalculations @ 4011-Section01.js:1233
(anonymous) @ 4011-Section01.js:1306
(anonymous) @ 4011-StateManager.js:486
notifyListeners @ 4011-StateManager.js:484
setValue @ 4011-StateManager.js:344
setRefValueIfChanged @ 4011-Section15.js:1315
calculateReferenceModel @ 4011-Section15.js:1421
calculateAll @ 4011-Section15.js:1286
initializeEventHandlers @ 4011-Section15.js:2007
initializeSectionEventHandlers @ 4011-FieldManager.js:310
renderSection @ 4011-FieldManager.js:367
(anonymous) @ 4011-FieldManager.js:394
renderAllSections @ 4011-FieldManager.js:393
initialize @ 4011-Calculator.js:66
(anonymous) @ 4011-Calculator.js:965Understand this warningAI
 ✅ S15 Reference Model: All values converted to numbers for proper math
 ✅ S15 Reference Model: Additional fuel variables declared for cost calculations
 [S15 DEBUG] 💰 Electricity price from S04: raw="$0.1300" → parsed=$0/kWh
 🔍 S15 TARGET UPSTREAM: target_i_104=116070.33, target_m_121=48980.79999999999, target_i_80=45879.580160000005
 [S15 DEBUG] 💰 All energy prices from S04: elec=$0, gas=$0, propane=$0, oil=$0, wood=$0
 [S15 DEBUG] 🧮 D141 calculation: 220216.85125050816 kWh/m²/yr × $0/kWh = $0.00
 [S15 DEBUG] 🧮 D141 calculation: 220216.85125050816 kWh/m²/yr × $0/kWh = $0.00
 [S15 DEBUG] 💰 Electricity price from S04: raw="$0.1300" → parsed=$0/kWh
 🔍 S15 TARGET UPSTREAM: target_i_104=116070.33, target_m_121=48980.79999999999, target_i_80=45879.580160000005
 [S15 DEBUG] 💰 All energy prices from S04: elec=$0, gas=$0, propane=$0, oil=$0, wood=$0
 [S15 DEBUG] 🧮 D141 calculation: 220216.85125050816 kWh/m²/yr × $0/kWh = $0.00
 🔍 S15 REFERENCE UPSTREAM: ref_i_104=0, ref_m_121=84594.73968, ref_i_80=0
 [S15] Missing critical upstream Reference values: ref_g_101, ref_d_101, ref_i_104
calculateReferenceModel @ 4011-Section15.js:1366
calculateAll @ 4011-Section15.js:1286
(anonymous) @ 4011-Section15.js:1945
(anonymous) @ 4011-StateManager.js:486
notifyListeners @ 4011-StateManager.js:484
setValue @ 4011-StateManager.js:362
setCalculatedValue @ 4011-Section01.js:376
calculateTargetModel @ 4011-Section01.js:577
runAllCalculations @ 4011-Section01.js:1234
(anonymous) @ 4011-Section01.js:1306
(anonymous) @ 4011-StateManager.js:486
notifyListeners @ 4011-StateManager.js:484
setValue @ 4011-StateManager.js:344
setRefValueIfChanged @ 4011-Section15.js:1315
calculateReferenceModel @ 4011-Section15.js:1421
calculateAll @ 4011-Section15.js:1286
initializeEventHandlers @ 4011-Section15.js:2007
initializeSectionEventHandlers @ 4011-FieldManager.js:310
renderSection @ 4011-FieldManager.js:367
(anonymous) @ 4011-FieldManager.js:394
renderAllSections @ 4011-FieldManager.js:393
initialize @ 4011-Calculator.js:66
(anonymous) @ 4011-Calculator.js:965Understand this warningAI
 ✅ S15 Reference Model: All values converted to numbers for proper math
 ✅ S15 Reference Model: Additional fuel variables declared for cost calculations
 [S15 DEBUG] 💰 Electricity price from S04: raw="$0.1300" → parsed=$0/kWh
 🔍 S15 TARGET UPSTREAM: target_i_104=116070.33, target_m_121=48980.79999999999, target_i_80=45879.580160000005
 [S15 DEBUG] 💰 All energy prices from S04: elec=$0, gas=$0, propane=$0, oil=$0, wood=$0
 [S15 DEBUG] 🧮 D141 calculation: 220216.85125050816 kWh/m²/yr × $0/kWh = $0.00
 🔍 S15 REFERENCE UPSTREAM: ref_i_104=0, ref_m_121=84594.73968, ref_i_80=0
 [S15] Missing critical upstream Reference values: ref_g_101, ref_d_101, ref_i_104
calculateReferenceModel @ 4011-Section15.js:1366
calculateAll @ 4011-Section15.js:1286
(anonymous) @ 4011-Section15.js:1945
(anonymous) @ 4011-StateManager.js:486
notifyListeners @ 4011-StateManager.js:484
setValue @ 4011-StateManager.js:362
setCalculatedValue @ 4011-Section01.js:383
calculateTargetModel @ 4011-Section01.js:577
runAllCalculations @ 4011-Section01.js:1234
(anonymous) @ 4011-Section01.js:1306
(anonymous) @ 4011-StateManager.js:486
notifyListeners @ 4011-StateManager.js:484
setValue @ 4011-StateManager.js:344
setRefValueIfChanged @ 4011-Section15.js:1315
calculateReferenceModel @ 4011-Section15.js:1421
calculateAll @ 4011-Section15.js:1286
initializeEventHandlers @ 4011-Section15.js:2007
initializeSectionEventHandlers @ 4011-FieldManager.js:310
renderSection @ 4011-FieldManager.js:367
(anonymous) @ 4011-FieldManager.js:394
renderAllSections @ 4011-FieldManager.js:393
initialize @ 4011-Calculator.js:66
(anonymous) @ 4011-Calculator.js:965Understand this warningAI
 ✅ S15 Reference Model: All values converted to numbers for proper math
 ✅ S15 Reference Model: Additional fuel variables declared for cost calculations
 [S15 DEBUG] 💰 Electricity price from S04: raw="$0.1300" → parsed=$0/kWh
 🔍 S15 TARGET UPSTREAM: target_i_104=116070.33, target_m_121=48980.79999999999, target_i_80=45879.580160000005
 [S15 DEBUG] 💰 All energy prices from S04: elec=$0, gas=$0, propane=$0, oil=$0, wood=$0
 🔍 S15 REFERENCE UPSTREAM: ref_i_104=0, ref_m_121=84594.73968, ref_i_80=0
 [S15] Missing critical upstream Reference values: ref_g_101, ref_d_101, ref_i_104
calculateReferenceModel @ 4011-Section15.js:1366
calculateAll @ 4011-Section15.js:1286
(anonymous) @ 4011-Section15.js:1945
(anonymous) @ 4011-StateManager.js:486
notifyListeners @ 4011-StateManager.js:484
setValue @ 4011-StateManager.js:362
calculateValues @ 4011-Section15.js:1705
calculateTargetModel @ 4011-Section15.js:1563
calculateAll @ 4011-Section15.js:1287
(anonymous) @ 4011-Section15.js:1945
(anonymous) @ 4011-StateManager.js:486
notifyListeners @ 4011-StateManager.js:484
setValue @ 4011-StateManager.js:362
setCalculatedValue @ 4011-Section01.js:383
calculateTargetModel @ 4011-Section01.js:577
runAllCalculations @ 4011-Section01.js:1234
(anonymous) @ 4011-Section01.js:1306
(anonymous) @ 4011-StateManager.js:486
notifyListeners @ 4011-StateManager.js:484
setValue @ 4011-StateManager.js:344
setRefValueIfChanged @ 4011-Section15.js:1315
calculateReferenceModel @ 4011-Section15.js:1421
calculateAll @ 4011-Section15.js:1286
initializeEventHandlers @ 4011-Section15.js:2007
initializeSectionEventHandlers @ 4011-FieldManager.js:310
renderSection @ 4011-FieldManager.js:367
(anonymous) @ 4011-FieldManager.js:394
renderAllSections @ 4011-FieldManager.js:393
initialize @ 4011-Calculator.js:66
(anonymous) @ 4011-Calculator.js:965Understand this warningAI
 ✅ S15 Reference Model: All values converted to numbers for proper math
 ✅ S15 Reference Model: Additional fuel variables declared for cost calculations
 [S15 DEBUG] 💰 Electricity price from S04: raw="$0.1300" → parsed=$0/kWh
 🔍 S15 TARGET UPSTREAM: target_i_104=116070.33, target_m_121=48980.79999999999, target_i_80=45879.580160000005
 [S15 DEBUG] 💰 All energy prices from S04: elec=$0, gas=$0, propane=$0, oil=$0, wood=$0
 [S15 DEBUG] 🧮 D141 calculation: 220216.85125050816 kWh/m²/yr × $0/kWh = $0.00
 [S15 DEBUG] 🧮 D141 calculation: 220216.85125050816 kWh/m²/yr × $0/kWh = $0.00
 [S15 DEBUG] 💰 Electricity price from S04: raw="$0.1300" → parsed=$0/kWh
 🔍 S15 TARGET UPSTREAM: target_i_104=116070.33, target_m_121=48980.79999999999, target_i_80=45879.580160000005
 [S15 DEBUG] 💰 All energy prices from S04: elec=$0, gas=$0, propane=$0, oil=$0, wood=$0
 [S15 DEBUG] 🧮 D141 calculation: 220216.85125050816 kWh/m²/yr × $0/kWh = $0.00
 S15: Target defaults set
 S15: Reference defaults set
 S15: Pattern A initialization complete.
 🔍 S15 REFERENCE UPSTREAM: ref_i_104=0, ref_m_121=84594.73968, ref_i_80=0
 [S15] Missing critical upstream Reference values: ref_g_101, ref_d_101, ref_i_104
calculateReferenceModel @ 4011-Section15.js:1366
calculateAll @ 4011-Section15.js:1286
initializeEventHandlers @ 4011-Section15.js:2007
onSectionRendered @ 4011-Section15.js:2032
initializeSectionEventHandlers @ 4011-FieldManager.js:322
renderSection @ 4011-FieldManager.js:367
(anonymous) @ 4011-FieldManager.js:394
renderAllSections @ 4011-FieldManager.js:393
initialize @ 4011-Calculator.js:66
(anonymous) @ 4011-Calculator.js:965Understand this warningAI
 ✅ S15 Reference Model: All values converted to numbers for proper math
 ✅ S15 Reference Model: Additional fuel variables declared for cost calculations
 [S15 DEBUG] 💰 Electricity price from S04: raw="$0.1300" → parsed=$0/kWh
 🔍 S15 TARGET UPSTREAM: target_i_104=116070.33, target_m_121=48980.79999999999, target_i_80=45879.580160000005
 [S15 DEBUG] 💰 All energy prices from S04: elec=$0, gas=$0, propane=$0, oil=$0, wood=$0
 [S15 DEBUG] 🧮 D141 calculation: 220216.85125050816 kWh/m²/yr × $0/kWh = $0.00
 🔍 S15 REFERENCE UPSTREAM: ref_i_104=0, ref_m_121=84594.73968, ref_i_80=0
 [S15] Missing critical upstream Reference values: ref_g_101, ref_d_101, ref_i_104
calculateReferenceModel @ 4011-Section15.js:1366
calculateAll @ 4011-Section15.js:1286
(anonymous) @ 4011-Section15.js:1945
(anonymous) @ 4011-StateManager.js:486
notifyListeners @ 4011-StateManager.js:484
setValue @ 4011-StateManager.js:362
setCalculatedValue @ 4011-Section01.js:383
calculateTargetModel @ 4011-Section01.js:577
runAllCalculations @ 4011-Section01.js:1234
updateSubtotals @ 4011-Section04.js:1663
updateGridIntensityForMode @ 4011-Section04.js:1456
updateElectricityEmissionFactor @ 4011-Section04.js:1345
forceEmissionsFactorUpdate @ 4011-SectionIntegrator.js:516
initializeEmissionsFactorIntegration @ 4011-SectionIntegrator.js:497
(anonymous) @ 4011-SectionIntegrator.js:187
initializeAllIntegrations @ 4011-SectionIntegrator.js:184
(anonymous) @ 4011-SectionIntegrator.js:106
renderAllSections @ 4011-FieldManager.js:398
initialize @ 4011-Calculator.js:66
(anonymous) @ 4011-Calculator.js:965Understand this warningAI
 ✅ S15 Reference Model: All values converted to numbers for proper math
 ✅ S15 Reference Model: Additional fuel variables declared for cost calculations
 [S15 DEBUG] 💰 Electricity price from S04: raw="$0.1300" → parsed=$0/kWh
 🔍 S15 TARGET UPSTREAM: target_i_104=116070.33, target_m_121=48980.79999999999, target_i_80=45879.580160000005
 [S15 DEBUG] 💰 All energy prices from S04: elec=$0, gas=$0, propane=$0, oil=$0, wood=$0
 🔍 S15 REFERENCE UPSTREAM: ref_i_104=0, ref_m_121=84594.73968, ref_i_80=0
 [S15] Missing critical upstream Reference values: ref_g_101, ref_d_101, ref_i_104
calculateReferenceModel @ 4011-Section15.js:1366
calculateAll @ 4011-Section15.js:1286
(anonymous) @ 4011-Section15.js:1945
(anonymous) @ 4011-StateManager.js:486
notifyListeners @ 4011-StateManager.js:484
setValue @ 4011-StateManager.js:362
calculateValues @ 4011-Section15.js:1705
calculateTargetModel @ 4011-Section15.js:1563
calculateAll @ 4011-Section15.js:1287
(anonymous) @ 4011-Section15.js:1945
(anonymous) @ 4011-StateManager.js:486
notifyListeners @ 4011-StateManager.js:484
setValue @ 4011-StateManager.js:362
setCalculatedValue @ 4011-Section01.js:383
calculateTargetModel @ 4011-Section01.js:577
runAllCalculations @ 4011-Section01.js:1234
updateSubtotals @ 4011-Section04.js:1663
updateGridIntensityForMode @ 4011-Section04.js:1456
updateElectricityEmissionFactor @ 4011-Section04.js:1345
forceEmissionsFactorUpdate @ 4011-SectionIntegrator.js:516
initializeEmissionsFactorIntegration @ 4011-SectionIntegrator.js:497
(anonymous) @ 4011-SectionIntegrator.js:187
initializeAllIntegrations @ 4011-SectionIntegrator.js:184
(anonymous) @ 4011-SectionIntegrator.js:106
renderAllSections @ 4011-FieldManager.js:398
initialize @ 4011-Calculator.js:66
(anonymous) @ 4011-Calculator.js:965Understand this warningAI
 ✅ S15 Reference Model: All values converted to numbers for proper math
 ✅ S15 Reference Model: Additional fuel variables declared for cost calculations
 [S15 DEBUG] 💰 Electricity price from S04: raw="$0.1300" → parsed=$0/kWh
 🔍 S15 TARGET UPSTREAM: target_i_104=116070.33, target_m_121=48980.79999999999, target_i_80=45879.580160000005
 [S15 DEBUG] 💰 All energy prices from S04: elec=$0, gas=$0, propane=$0, oil=$0, wood=$0
 [S15 DEBUG] 🧮 D141 calculation: 220216.85125050816 kWh/m²/yr × $0/kWh = $0.00
 🔍 S15 REFERENCE UPSTREAM: ref_i_104=0, ref_m_121=84594.73968, ref_i_80=0
 [S15] Missing critical upstream Reference values: ref_g_101, ref_d_101, ref_i_104
calculateReferenceModel @ 4011-Section15.js:1366
calculateAll @ 4011-Section15.js:1286
(anonymous) @ 4011-Section15.js:1945
(anonymous) @ 4011-StateManager.js:486
notifyListeners @ 4011-StateManager.js:484
setValue @ 4011-StateManager.js:362
calculateValues @ 4011-Section15.js:1705
calculateTargetModel @ 4011-Section15.js:1563
calculateAll @ 4011-Section15.js:1287
(anonymous) @ 4011-Section15.js:1945
(anonymous) @ 4011-StateManager.js:486
notifyListeners @ 4011-StateManager.js:484
setValue @ 4011-StateManager.js:362
setCalculatedValue @ 4011-Section01.js:383
calculateTargetModel @ 4011-Section01.js:577
runAllCalculations @ 4011-Section01.js:1234
updateSubtotals @ 4011-Section04.js:1663
updateGridIntensityForMode @ 4011-Section04.js:1456
updateElectricityEmissionFactor @ 4011-Section04.js:1345
forceEmissionsFactorUpdate @ 4011-SectionIntegrator.js:516
initializeEmissionsFactorIntegration @ 4011-SectionIntegrator.js:497
(anonymous) @ 4011-SectionIntegrator.js:187
initializeAllIntegrations @ 4011-SectionIntegrator.js:184
(anonymous) @ 4011-SectionIntegrator.js:106
renderAllSections @ 4011-FieldManager.js:398
initialize @ 4011-Calculator.js:66
(anonymous) @ 4011-Calculator.js:965Understand this warningAI
 ✅ S15 Reference Model: All values converted to numbers for proper math
 ✅ S15 Reference Model: Additional fuel variables declared for cost calculations
 [S15 DEBUG] 💰 Electricity price from S04: raw="$0.1300" → parsed=$0/kWh
 🔍 S15 TARGET UPSTREAM: target_i_104=116070.33, target_m_121=48980.79999999999, target_i_80=45879.580160000005
 [S15 DEBUG] 💰 All energy prices from S04: elec=$0, gas=$0, propane=$0, oil=$0, wood=$0
 [S15 DEBUG] 🧮 D141 calculation: 220216.85125050816 kWh/m²/yr × $0/kWh = $0.00
 [S15 DEBUG] 🧮 D141 calculation: 220216.85125050816 kWh/m²/yr × $0/kWh = $0.00
 🔍 S15 REFERENCE UPSTREAM: ref_i_104=0, ref_m_121=84594.73968, ref_i_80=0
 [S15] Missing critical upstream Reference values: ref_g_101, ref_d_101, ref_i_104
calculateReferenceModel @ 4011-Section15.js:1366
calculateAll @ 4011-Section15.js:1286
(anonymous) @ 4011-Section15.js:1945
(anonymous) @ 4011-StateManager.js:486
notifyListeners @ 4011-StateManager.js:484
setValue @ 4011-StateManager.js:362
setCalculatedValue @ 4011-Section01.js:383
calculateTargetModel @ 4011-Section01.js:577
runAllCalculations @ 4011-Section01.js:1234
updateSubtotals @ 4011-Section04.js:1663
updateGridIntensityForMode @ 4011-Section04.js:1456
updateElectricityEmissionFactor @ 4011-Section04.js:1345
forceEmissionsFactorUpdate @ 4011-SectionIntegrator.js:516
initializeEmissionsFactorIntegration @ 4011-SectionIntegrator.js:497
(anonymous) @ 4011-SectionIntegrator.js:187
initializeAllIntegrations @ 4011-SectionIntegrator.js:184
(anonymous) @ 4011-SectionIntegrator.js:106
renderAllSections @ 4011-FieldManager.js:398
initialize @ 4011-Calculator.js:66
(anonymous) @ 4011-Calculator.js:965Understand this warningAI
 ✅ S15 Reference Model: All values converted to numbers for proper math
 ✅ S15 Reference Model: Additional fuel variables declared for cost calculations
 [S15 DEBUG] 💰 Electricity price from S04: raw="$0.1300" → parsed=$0/kWh
 🔍 S15 TARGET UPSTREAM: target_i_104=116070.33, target_m_121=48980.79999999999, target_i_80=45879.580160000005
 [S15 DEBUG] 💰 All energy prices from S04: elec=$0, gas=$0, propane=$0, oil=$0, wood=$0
 [S15 DEBUG] 🧮 D141 calculation: 220216.85125050816 kWh/m²/yr × $0/kWh = $0.00
 🔍 S15 REFERENCE UPSTREAM: ref_i_104=0, ref_m_121=84594.73968, ref_i_80=0
 [S15] Missing critical upstream Reference values: ref_g_101, ref_d_101, ref_i_104
calculateReferenceModel @ 4011-Section15.js:1366
calculateAll @ 4011-Section15.js:1286
forceTEDITELIUpdate @ 4011-SectionIntegrator.js:305
initializeTEDITELIIntegration @ 4011-SectionIntegrator.js:241
(anonymous) @ 4011-SectionIntegrator.js:187
initializeAllIntegrations @ 4011-SectionIntegrator.js:184
(anonymous) @ 4011-SectionIntegrator.js:106
renderAllSections @ 4011-FieldManager.js:398
initialize @ 4011-Calculator.js:66
(anonymous) @ 4011-Calculator.js:965Understand this warningAI
 ✅ S15 Reference Model: All values converted to numbers for proper math
 ✅ S15 Reference Model: Additional fuel variables declared for cost calculations
 [S15 DEBUG] 💰 Electricity price from S04: raw="$0.1300" → parsed=$0/kWh
 🔍 S15 TARGET UPSTREAM: target_i_104=116070.33, target_m_121=48980.79999999999, target_i_80=45879.580160000005
 [S15 DEBUG] 💰 All energy prices from S04: elec=$0, gas=$0, propane=$0, oil=$0, wood=$0
 [S15 DEBUG] 🧮 D141 calculation: 220216.85125050816 kWh/m²/yr × $0/kWh = $0.00
 [SAFARI DEBUG] Setting up S03 Excel import buttons. selectExcelBtn and locationFileInput FOUND.
 S02: Target defaults set
 S02: Reference defaults set
 S02: Pattern A initialization complete.
 [S02] Switched to REFERENCE mode
 [S02] Switched to TARGET mode
 [S02] Switched to TARGET mode
 [S02] Switched to TARGET mode
 S03: Sliders initialized via FieldManager
 S03: Section rendered - initializing Self-Contained State Module.
 S03: ModeManager exposed globally for cross-section integration.
 S03: Checking climate data availability (attempt 1/10)
 S03: Climate data available (8) ['BC', 'AB', 'SK', 'MB', 'ON', 'QC', 'NU', 'NT']
 S03: ClimateData available - initializing dropdowns
 S03: Populated province dropdown with options: (8) ['AB', 'BC', 'MB', 'NT', 'NU', 'ON', 'QC', 'SK']
 City dropdown updated for ON - selected: Alexandria
 S03: Sliders initialized via FieldManager
 [Section03] Running Reference Model calculations...
 [Section03] Reference results stored with ref_ prefix for downstream sections: {h_23: '18', d_23: undefined, d_24: undefined, h_24: '24', d_20: undefined, …}
 [Section03] Reference Model calculations complete
 S03: Weather data updated for Alexandria, ON (Present)
 Section03: Province selected: ON
 City dropdown updated for ON - selected: Alexandria
 [Section03] Running Reference Model calculations...
 [Section03] Reference results stored with ref_ prefix for downstream sections: {h_23: '18', d_23: undefined, d_24: undefined, h_24: '24', d_20: undefined, …}
 [Section03] Reference Model calculations complete
 S03: Weather data updated for Alexandria, ON (Present)
 [Section03] Running Reference Model calculations...
 [Section03] Reference results stored with ref_ prefix for downstream sections: {h_23: '18', d_23: undefined, d_24: undefined, h_24: '24', d_20: undefined, …}
 [Section03] Reference Model calculations complete
 S03: Self-Contained State Module initialization complete
 S04: Target defaults set
 S04: Reference defaults set
 S04: Pattern A initialization complete.
 [S02] Switched to REFERENCE mode
 [S02] Switched to TARGET mode
 [S02] Switched to TARGET mode
 [S02] Switched to TARGET mode
 [S02] Switched to REFERENCE mode
 [S02] Switched to TARGET mode
 [S02] Switched to TARGET mode
 [S02] Switched to TARGET mode
 [S02] Switched to REFERENCE mode
 [S02] Switched to TARGET mode
 [S02] Switched to TARGET mode
 [S02] Switched to TARGET mode
 [S02] Switched to REFERENCE mode
 [S02] Switched to TARGET mode
 [S02] Switched to TARGET mode
 [S02] Switched to TARGET mode
 [S02] Switched to REFERENCE mode
 [S02] Switched to TARGET mode
 [S02] Switched to TARGET mode
 [S02] Switched to TARGET mode
 [S02] Switched to REFERENCE mode
 [S02] Switched to TARGET mode
 [S02] Switched to TARGET mode
 [S02] Switched to TARGET mode
 [S02] Switched to REFERENCE mode
 [S02] Switched to TARGET mode
 [S02] Switched to TARGET mode
 [S02] Switched to TARGET mode
 [S02] Switched to REFERENCE mode
 [S02] Switched to TARGET mode
 [S02] Switched to TARGET mode
 [S02] Switched to TARGET mode
2 S04 REFERENCE MODEL: ref_j_32=132765.65, ref_k_32=6771.04815
2 S04 REFERENCE MODEL: ref_j_32=132765.65, ref_k_32=6771.04815
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
 S10: Global listener triggered by i_97, recalculating all.
 S10: Utilization factor dependency i_97 changed.
 S10: Global listener triggered by i_98, recalculating all.
 S10: Utilization factor dependency i_98 changed.
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
calculateReferenceModel @ 4011-Section15.js:1366
calculateAll @ 4011-Section15.js:1286
initializeEventHandlers @ 4011-Section15.js:2007
initializeSectionEventHandlers @ 4011-FieldManager.js:310
renderSection @ 4011-FieldManager.js:367
(anonymous) @ 4011-FieldManager.js:394
renderAllSections @ 4011-FieldManager.js:393
(anonymous) @ 4011-init.js:858Understand this warningAI
 ✅ S15 Reference Model: All values converted to numbers for proper math
 ✅ S15 Reference Model: Additional fuel variables declared for cost calculations
2 S04 REFERENCE MODEL: ref_j_32=132765.65, ref_k_32=6771.04815
 🔍 S15 REFERENCE UPSTREAM: ref_i_104=0, ref_m_121=84594.73968, ref_i_80=0
 [S15] Missing critical upstream Reference values: ref_g_101, ref_d_101, ref_i_104
calculateReferenceModel @ 4011-Section15.js:1366
calculateAll @ 4011-Section15.js:1286
(anonymous) @ 4011-Section15.js:1945
(anonymous) @ 4011-StateManager.js:486
notifyListeners @ 4011-StateManager.js:484
setValue @ 4011-StateManager.js:362
window.TEUI.StateManager.setValue @ 4011-ComponentBridge.js:429
setCalculatedValue @ 4011-Section01.js:376
calculateReferenceModel @ 4011-Section01.js:478
runAllCalculations @ 4011-Section01.js:1233
(anonymous) @ 4011-Section01.js:1306
(anonymous) @ 4011-StateManager.js:486
notifyListeners @ 4011-StateManager.js:484
setValue @ 4011-StateManager.js:344
window.TEUI.StateManager.setValue @ 4011-ComponentBridge.js:429
setRefValueIfChanged @ 4011-Section15.js:1315
calculateReferenceModel @ 4011-Section15.js:1421
calculateAll @ 4011-Section15.js:1286
initializeEventHandlers @ 4011-Section15.js:2007
initializeSectionEventHandlers @ 4011-FieldManager.js:310
renderSection @ 4011-FieldManager.js:367
(anonymous) @ 4011-FieldManager.js:394
renderAllSections @ 4011-FieldManager.js:393
(anonymous) @ 4011-init.js:858Understand this warningAI
 ✅ S15 Reference Model: All values converted to numbers for proper math
 ✅ S15 Reference Model: Additional fuel variables declared for cost calculations
 🔍 S15 REFERENCE UPSTREAM: ref_i_104=0, ref_m_121=84594.73968, ref_i_80=0
 [S15] Missing critical upstream Reference values: ref_g_101, ref_d_101, ref_i_104
calculateReferenceModel @ 4011-Section15.js:1366
calculateAll @ 4011-Section15.js:1286
(anonymous) @ 4011-Section15.js:1945
(anonymous) @ 4011-StateManager.js:486
notifyListeners @ 4011-StateManager.js:484
setValue @ 4011-StateManager.js:362
window.TEUI.StateManager.setValue @ 4011-ComponentBridge.js:429
calculateReferenceModel @ 4011-Section15.js:1515
calculateAll @ 4011-Section15.js:1286
(anonymous) @ 4011-Section15.js:1945
(anonymous) @ 4011-StateManager.js:486
notifyListeners @ 4011-StateManager.js:484
setValue @ 4011-StateManager.js:362
window.TEUI.StateManager.setValue @ 4011-ComponentBridge.js:429
setCalculatedValue @ 4011-Section01.js:376
calculateReferenceModel @ 4011-Section01.js:478
runAllCalculations @ 4011-Section01.js:1233
(anonymous) @ 4011-Section01.js:1306
(anonymous) @ 4011-StateManager.js:486
notifyListeners @ 4011-StateManager.js:484
setValue @ 4011-StateManager.js:344
window.TEUI.StateManager.setValue @ 4011-ComponentBridge.js:429
setRefValueIfChanged @ 4011-Section15.js:1315
calculateReferenceModel @ 4011-Section15.js:1421
calculateAll @ 4011-Section15.js:1286
initializeEventHandlers @ 4011-Section15.js:2007
initializeSectionEventHandlers @ 4011-FieldManager.js:310
renderSection @ 4011-FieldManager.js:367
(anonymous) @ 4011-FieldManager.js:394
renderAllSections @ 4011-FieldManager.js:393
(anonymous) @ 4011-init.js:858Understand this warningAI
 ✅ S15 Reference Model: All values converted to numbers for proper math
 ✅ S15 Reference Model: Additional fuel variables declared for cost calculations
 [S15 DEBUG] 💰 Electricity price from S04: raw="$0.1300" → parsed=$0/kWh
 🔍 S15 TARGET UPSTREAM: target_i_104=116070.33, target_m_121=48980.79999999999, target_i_80=45879.580160000005
 [S15 DEBUG] 💰 All energy prices from S04: elec=$0, gas=$0, propane=$0, oil=$0, wood=$0
 🔍 S15 REFERENCE UPSTREAM: ref_i_104=0, ref_m_121=84594.73968, ref_i_80=0
 [S15] Missing critical upstream Reference values: ref_g_101, ref_d_101, ref_i_104
calculateReferenceModel @ 4011-Section15.js:1366
calculateAll @ 4011-Section15.js:1286
(anonymous) @ 4011-Section15.js:1945
(anonymous) @ 4011-StateManager.js:486
notifyListeners @ 4011-StateManager.js:484
setValue @ 4011-StateManager.js:362
updateTEUICalculations @ 4011-StateManager.js:929
(anonymous) @ 4011-StateManager.js:199
(anonymous) @ 4011-StateManager.js:486
notifyListeners @ 4011-StateManager.js:484
setValue @ 4011-StateManager.js:362
window.TEUI.StateManager.setValue @ 4011-ComponentBridge.js:429
setCalculatedValue @ 4011-Section04.js:82
updateSubtotals @ 4011-Section04.js:1687
handleD136Update @ 4011-Section04.js:1180
(anonymous) @ 4011-StateManager.js:486
notifyListeners @ 4011-StateManager.js:484
setValue @ 4011-StateManager.js:362
window.TEUI.StateManager.setValue @ 4011-ComponentBridge.js:429
setCalculatedValue @ 4011-Section15.js:122
calculateValues @ 4011-Section15.js:1693
calculateTargetModel @ 4011-Section15.js:1563
calculateAll @ 4011-Section15.js:1287
(anonymous) @ 4011-Section15.js:1945
(anonymous) @ 4011-StateManager.js:486
notifyListeners @ 4011-StateManager.js:484
setValue @ 4011-StateManager.js:362
window.TEUI.StateManager.setValue @ 4011-ComponentBridge.js:429
calculateReferenceModel @ 4011-Section15.js:1515
calculateAll @ 4011-Section15.js:1286
(anonymous) @ 4011-Section15.js:1945
(anonymous) @ 4011-StateManager.js:486
notifyListeners @ 4011-StateManager.js:484
setValue @ 4011-StateManager.js:362
window.TEUI.StateManager.setValue @ 4011-ComponentBridge.js:429
setCalculatedValue @ 4011-Section01.js:376
calculateReferenceModel @ 4011-Section01.js:478
runAllCalculations @ 4011-Section01.js:1233
(anonymous) @ 4011-Section01.js:1306
(anonymous) @ 4011-StateManager.js:486
notifyListeners @ 4011-StateManager.js:484
setValue @ 4011-StateManager.js:344
window.TEUI.StateManager.setValue @ 4011-ComponentBridge.js:429
setRefValueIfChanged @ 4011-Section15.js:1315
calculateReferenceModel @ 4011-Section15.js:1421
calculateAll @ 4011-Section15.js:1286
initializeEventHandlers @ 4011-Section15.js:2007
initializeSectionEventHandlers @ 4011-FieldManager.js:310
renderSection @ 4011-FieldManager.js:367
(anonymous) @ 4011-FieldManager.js:394
renderAllSections @ 4011-FieldManager.js:393
(anonymous) @ 4011-init.js:858Understand this warningAI
 ✅ S15 Reference Model: All values converted to numbers for proper math
 ✅ S15 Reference Model: Additional fuel variables declared for cost calculations
 [S15 DEBUG] 💰 Electricity price from S04: raw="$0.1300" → parsed=$0/kWh
 🔍 S15 TARGET UPSTREAM: target_i_104=116070.33, target_m_121=48980.79999999999, target_i_80=45879.580160000005
 [S15 DEBUG] 💰 All energy prices from S04: elec=$0, gas=$0, propane=$0, oil=$0, wood=$0
 🔍 S15 REFERENCE UPSTREAM: ref_i_104=0, ref_m_121=84594.73968, ref_i_80=0
 [S15] Missing critical upstream Reference values: ref_g_101, ref_d_101, ref_i_104
calculateReferenceModel @ 4011-Section15.js:1366
calculateAll @ 4011-Section15.js:1286
(anonymous) @ 4011-Section15.js:1945
(anonymous) @ 4011-StateManager.js:486
notifyListeners @ 4011-StateManager.js:484
setValue @ 4011-StateManager.js:362
window.TEUI.StateManager.setValue @ 4011-ComponentBridge.js:429
calculateValues @ 4011-Section15.js:1705
calculateTargetModel @ 4011-Section15.js:1563
calculateAll @ 4011-Section15.js:1287
(anonymous) @ 4011-Section15.js:1945
(anonymous) @ 4011-StateManager.js:486
notifyListeners @ 4011-StateManager.js:484
setValue @ 4011-StateManager.js:362
updateTEUICalculations @ 4011-StateManager.js:929
(anonymous) @ 4011-StateManager.js:199
(anonymous) @ 4011-StateManager.js:486
notifyListeners @ 4011-StateManager.js:484
setValue @ 4011-StateManager.js:362
window.TEUI.StateManager.setValue @ 4011-ComponentBridge.js:429
setCalculatedValue @ 4011-Section04.js:82
updateSubtotals @ 4011-Section04.js:1687
handleD136Update @ 4011-Section04.js:1180
(anonymous) @ 4011-StateManager.js:486
notifyListeners @ 4011-StateManager.js:484
setValue @ 4011-StateManager.js:362
window.TEUI.StateManager.setValue @ 4011-ComponentBridge.js:429
setCalculatedValue @ 4011-Section15.js:122
calculateValues @ 4011-Section15.js:1693
calculateTargetModel @ 4011-Section15.js:1563
calculateAll @ 4011-Section15.js:1287
(anonymous) @ 4011-Section15.js:1945
(anonymous) @ 4011-StateManager.js:486
notifyListeners @ 4011-StateManager.js:484
setValue @ 4011-StateManager.js:362
window.TEUI.StateManager.setValue @ 4011-ComponentBridge.js:429
calculateReferenceModel @ 4011-Section15.js:1515
calculateAll @ 4011-Section15.js:1286
(anonymous) @ 4011-Section15.js:1945
(anonymous) @ 4011-StateManager.js:486
notifyListeners @ 4011-StateManager.js:484
setValue @ 4011-StateManager.js:362
window.TEUI.StateManager.setValue @ 4011-ComponentBridge.js:429
setCalculatedValue @ 4011-Section01.js:376
calculateReferenceModel @ 4011-Section01.js:478
runAllCalculations @ 4011-Section01.js:1233
(anonymous) @ 4011-Section01.js:1306
(anonymous) @ 4011-StateManager.js:486
notifyListeners @ 4011-StateManager.js:484
setValue @ 4011-StateManager.js:344
window.TEUI.StateManager.setValue @ 4011-ComponentBridge.js:429
setRefValueIfChanged @ 4011-Section15.js:1315
calculateReferenceModel @ 4011-Section15.js:1421
calculateAll @ 4011-Section15.js:1286
initializeEventHandlers @ 4011-Section15.js:2007
initializeSectionEventHandlers @ 4011-FieldManager.js:310
renderSection @ 4011-FieldManager.js:367
(anonymous) @ 4011-FieldManager.js:394
renderAllSections @ 4011-FieldManager.js:393
(anonymous) @ 4011-init.js:858Understand this warningAI
 ✅ S15 Reference Model: All values converted to numbers for proper math
 ✅ S15 Reference Model: Additional fuel variables declared for cost calculations
 [S15 DEBUG] 💰 Electricity price from S04: raw="$0.1300" → parsed=$0/kWh
 🔍 S15 TARGET UPSTREAM: target_i_104=116070.33, target_m_121=48980.79999999999, target_i_80=45879.580160000005
 [S15 DEBUG] 💰 All energy prices from S04: elec=$0, gas=$0, propane=$0, oil=$0, wood=$0
 [S15 DEBUG] 🧮 D141 calculation: 220216.85125050816 kWh/m²/yr × $0/kWh = $0.00
 [S15 DEBUG] 🧮 D141 calculation: 220216.85125050816 kWh/m²/yr × $0/kWh = $0.00
 [S02] Switched to REFERENCE mode
 [S02] Switched to TARGET mode
 [S02] Switched to TARGET mode
 [S02] Switched to TARGET mode
 [S02] Switched to REFERENCE mode
 [S02] Switched to TARGET mode
 [S02] Switched to TARGET mode
 [S02] Switched to TARGET mode
 🔍 S15 REFERENCE UPSTREAM: ref_i_104=0, ref_m_121=84594.73968, ref_i_80=0
 [S15] Missing critical upstream Reference values: ref_g_101, ref_d_101, ref_i_104
calculateReferenceModel @ 4011-Section15.js:1366
calculateAll @ 4011-Section15.js:1286
(anonymous) @ 4011-Section15.js:1945
(anonymous) @ 4011-StateManager.js:486
notifyListeners @ 4011-StateManager.js:484
setValue @ 4011-StateManager.js:362
window.TEUI.StateManager.setValue @ 4011-ComponentBridge.js:429
setCalculatedValue @ 4011-Section04.js:82
updateSubtotals @ 4011-Section04.js:1698
handleD136Update @ 4011-Section04.js:1180
(anonymous) @ 4011-StateManager.js:486
notifyListeners @ 4011-StateManager.js:484
setValue @ 4011-StateManager.js:362
window.TEUI.StateManager.setValue @ 4011-ComponentBridge.js:429
setCalculatedValue @ 4011-Section15.js:122
calculateValues @ 4011-Section15.js:1693
calculateTargetModel @ 4011-Section15.js:1563
calculateAll @ 4011-Section15.js:1287
(anonymous) @ 4011-Section15.js:1945
(anonymous) @ 4011-StateManager.js:486
notifyListeners @ 4011-StateManager.js:484
setValue @ 4011-StateManager.js:362
window.TEUI.StateManager.setValue @ 4011-ComponentBridge.js:429
calculateReferenceModel @ 4011-Section15.js:1515
calculateAll @ 4011-Section15.js:1286
(anonymous) @ 4011-Section15.js:1945
(anonymous) @ 4011-StateManager.js:486
notifyListeners @ 4011-StateManager.js:484
setValue @ 4011-StateManager.js:362
window.TEUI.StateManager.setValue @ 4011-ComponentBridge.js:429
setCalculatedValue @ 4011-Section01.js:376
calculateReferenceModel @ 4011-Section01.js:478
runAllCalculations @ 4011-Section01.js:1233
(anonymous) @ 4011-Section01.js:1306
(anonymous) @ 4011-StateManager.js:486
notifyListeners @ 4011-StateManager.js:484
setValue @ 4011-StateManager.js:344
window.TEUI.StateManager.setValue @ 4011-ComponentBridge.js:429
setRefValueIfChanged @ 4011-Section15.js:1315
calculateReferenceModel @ 4011-Section15.js:1421
calculateAll @ 4011-Section15.js:1286
initializeEventHandlers @ 4011-Section15.js:2007
initializeSectionEventHandlers @ 4011-FieldManager.js:310
renderSection @ 4011-FieldManager.js:367
(anonymous) @ 4011-FieldManager.js:394
renderAllSections @ 4011-FieldManager.js:393
(anonymous) @ 4011-init.js:858Understand this warningAI
 ✅ S15 Reference Model: All values converted to numbers for proper math
 ✅ S15 Reference Model: Additional fuel variables declared for cost calculations
 [S15 DEBUG] 💰 Electricity price from S04: raw="$0.1300" → parsed=$0/kWh
 🔍 S15 TARGET UPSTREAM: target_i_104=116070.33, target_m_121=48980.79999999999, target_i_80=45879.580160000005
 [S15 DEBUG] 💰 All energy prices from S04: elec=$0, gas=$0, propane=$0, oil=$0, wood=$0
 [S15 DEBUG] 🧮 D141 calculation: 220216.85125050816 kWh/m²/yr × $0/kWh = $0.00
 [S15 DEBUG] 🧮 D141 calculation: 220216.85125050816 kWh/m²/yr × $0/kWh = $0.00
 [S15 DEBUG] 💰 Electricity price from S04: raw="$0.1300" → parsed=$0/kWh
 🔍 S15 TARGET UPSTREAM: target_i_104=116070.33, target_m_121=48980.79999999999, target_i_80=45879.580160000005
 [S15 DEBUG] 💰 All energy prices from S04: elec=$0, gas=$0, propane=$0, oil=$0, wood=$0
 [S15 DEBUG] 🧮 D141 calculation: 220216.85125050816 kWh/m²/yr × $0/kWh = $0.00
 🔍 S15 REFERENCE UPSTREAM: ref_i_104=0, ref_m_121=84594.73968, ref_i_80=0
 [S15] Missing critical upstream Reference values: ref_g_101, ref_d_101, ref_i_104
calculateReferenceModel @ 4011-Section15.js:1366
calculateAll @ 4011-Section15.js:1286
(anonymous) @ 4011-Section15.js:1945
(anonymous) @ 4011-StateManager.js:486
notifyListeners @ 4011-StateManager.js:484
setValue @ 4011-StateManager.js:362
window.TEUI.StateManager.setValue @ 4011-ComponentBridge.js:429
setCalculatedValue @ 4011-Section01.js:376
calculateTargetModel @ 4011-Section01.js:577
runAllCalculations @ 4011-Section01.js:1234
(anonymous) @ 4011-Section01.js:1306
(anonymous) @ 4011-StateManager.js:486
notifyListeners @ 4011-StateManager.js:484
setValue @ 4011-StateManager.js:344
window.TEUI.StateManager.setValue @ 4011-ComponentBridge.js:429
setRefValueIfChanged @ 4011-Section15.js:1315
calculateReferenceModel @ 4011-Section15.js:1421
calculateAll @ 4011-Section15.js:1286
initializeEventHandlers @ 4011-Section15.js:2007
initializeSectionEventHandlers @ 4011-FieldManager.js:310
renderSection @ 4011-FieldManager.js:367
(anonymous) @ 4011-FieldManager.js:394
renderAllSections @ 4011-FieldManager.js:393
(anonymous) @ 4011-init.js:858Understand this warningAI
 ✅ S15 Reference Model: All values converted to numbers for proper math
 ✅ S15 Reference Model: Additional fuel variables declared for cost calculations
 [S15 DEBUG] 💰 Electricity price from S04: raw="$0.1300" → parsed=$0/kWh
 🔍 S15 TARGET UPSTREAM: target_i_104=116070.33, target_m_121=48980.79999999999, target_i_80=45879.580160000005
 [S15 DEBUG] 💰 All energy prices from S04: elec=$0, gas=$0, propane=$0, oil=$0, wood=$0
 [S15 DEBUG] 🧮 D141 calculation: 220216.85125050816 kWh/m²/yr × $0/kWh = $0.00
 🔍 S15 REFERENCE UPSTREAM: ref_i_104=0, ref_m_121=84594.73968, ref_i_80=0
 [S15] Missing critical upstream Reference values: ref_g_101, ref_d_101, ref_i_104
calculateReferenceModel @ 4011-Section15.js:1366
calculateAll @ 4011-Section15.js:1286
(anonymous) @ 4011-Section15.js:1945
(anonymous) @ 4011-StateManager.js:486
notifyListeners @ 4011-StateManager.js:484
setValue @ 4011-StateManager.js:362
window.TEUI.StateManager.setValue @ 4011-ComponentBridge.js:429
setCalculatedValue @ 4011-Section01.js:383
calculateTargetModel @ 4011-Section01.js:577
runAllCalculations @ 4011-Section01.js:1234
(anonymous) @ 4011-Section01.js:1306
(anonymous) @ 4011-StateManager.js:486
notifyListeners @ 4011-StateManager.js:484
setValue @ 4011-StateManager.js:344
window.TEUI.StateManager.setValue @ 4011-ComponentBridge.js:429
setRefValueIfChanged @ 4011-Section15.js:1315
calculateReferenceModel @ 4011-Section15.js:1421
calculateAll @ 4011-Section15.js:1286
initializeEventHandlers @ 4011-Section15.js:2007
initializeSectionEventHandlers @ 4011-FieldManager.js:310
renderSection @ 4011-FieldManager.js:367
(anonymous) @ 4011-FieldManager.js:394
renderAllSections @ 4011-FieldManager.js:393
(anonymous) @ 4011-init.js:858Understand this warningAI
 ✅ S15 Reference Model: All values converted to numbers for proper math
 ✅ S15 Reference Model: Additional fuel variables declared for cost calculations
 [S15 DEBUG] 💰 Electricity price from S04: raw="$0.1300" → parsed=$0/kWh
 🔍 S15 TARGET UPSTREAM: target_i_104=116070.33, target_m_121=48980.79999999999, target_i_80=45879.580160000005
 [S15 DEBUG] 💰 All energy prices from S04: elec=$0, gas=$0, propane=$0, oil=$0, wood=$0
 🔍 S15 REFERENCE UPSTREAM: ref_i_104=0, ref_m_121=84594.73968, ref_i_80=0
 [S15] Missing critical upstream Reference values: ref_g_101, ref_d_101, ref_i_104
calculateReferenceModel @ 4011-Section15.js:1366
calculateAll @ 4011-Section15.js:1286
(anonymous) @ 4011-Section15.js:1945
(anonymous) @ 4011-StateManager.js:486
notifyListeners @ 4011-StateManager.js:484
setValue @ 4011-StateManager.js:362
window.TEUI.StateManager.setValue @ 4011-ComponentBridge.js:429
calculateValues @ 4011-Section15.js:1705
calculateTargetModel @ 4011-Section15.js:1563
calculateAll @ 4011-Section15.js:1287
(anonymous) @ 4011-Section15.js:1945
(anonymous) @ 4011-StateManager.js:486
notifyListeners @ 4011-StateManager.js:484
setValue @ 4011-StateManager.js:362
window.TEUI.StateManager.setValue @ 4011-ComponentBridge.js:429
setCalculatedValue @ 4011-Section01.js:383
calculateTargetModel @ 4011-Section01.js:577
runAllCalculations @ 4011-Section01.js:1234
(anonymous) @ 4011-Section01.js:1306
(anonymous) @ 4011-StateManager.js:486
notifyListeners @ 4011-StateManager.js:484
setValue @ 4011-StateManager.js:344
window.TEUI.StateManager.setValue @ 4011-ComponentBridge.js:429
setRefValueIfChanged @ 4011-Section15.js:1315
calculateReferenceModel @ 4011-Section15.js:1421
calculateAll @ 4011-Section15.js:1286
initializeEventHandlers @ 4011-Section15.js:2007
initializeSectionEventHandlers @ 4011-FieldManager.js:310
renderSection @ 4011-FieldManager.js:367
(anonymous) @ 4011-FieldManager.js:394
renderAllSections @ 4011-FieldManager.js:393
(anonymous) @ 4011-init.js:858Understand this warningAI
 ✅ S15 Reference Model: All values converted to numbers for proper math
 ✅ S15 Reference Model: Additional fuel variables declared for cost calculations
 [S15 DEBUG] 💰 Electricity price from S04: raw="$0.1300" → parsed=$0/kWh
 🔍 S15 TARGET UPSTREAM: target_i_104=116070.33, target_m_121=48980.79999999999, target_i_80=45879.580160000005
 [S15 DEBUG] 💰 All energy prices from S04: elec=$0, gas=$0, propane=$0, oil=$0, wood=$0
 [S15 DEBUG] 🧮 D141 calculation: 220216.85125050816 kWh/m²/yr × $0/kWh = $0.00
 [S15 DEBUG] 🧮 D141 calculation: 220216.85125050816 kWh/m²/yr × $0/kWh = $0.00
 [S15 DEBUG] 💰 Electricity price from S04: raw="$0.1300" → parsed=$0/kWh
 🔍 S15 TARGET UPSTREAM: target_i_104=116070.33, target_m_121=48980.79999999999, target_i_80=45879.580160000005
 [S15 DEBUG] 💰 All energy prices from S04: elec=$0, gas=$0, propane=$0, oil=$0, wood=$0
 [S15 DEBUG] 🧮 D141 calculation: 220216.85125050816 kWh/m²/yr × $0/kWh = $0.00
 S15: Target defaults set
 S15: Reference defaults set
 S15: Pattern A initialization complete.
 🔍 S15 REFERENCE UPSTREAM: ref_i_104=0, ref_m_121=84594.73968, ref_i_80=0
 [S15] Missing critical upstream Reference values: ref_g_101, ref_d_101, ref_i_104
calculateReferenceModel @ 4011-Section15.js:1366
calculateAll @ 4011-Section15.js:1286
initializeEventHandlers @ 4011-Section15.js:2007
onSectionRendered @ 4011-Section15.js:2032
initializeSectionEventHandlers @ 4011-FieldManager.js:322
renderSection @ 4011-FieldManager.js:367
(anonymous) @ 4011-FieldManager.js:394
renderAllSections @ 4011-FieldManager.js:393
(anonymous) @ 4011-init.js:858Understand this warningAI
 ✅ S15 Reference Model: All values converted to numbers for proper math
 ✅ S15 Reference Model: Additional fuel variables declared for cost calculations
 [S15 DEBUG] 💰 Electricity price from S04: raw="$0.1300" → parsed=$0/kWh
 🔍 S15 TARGET UPSTREAM: target_i_104=116070.33, target_m_121=48980.79999999999, target_i_80=45879.580160000005
 [S15 DEBUG] 💰 All energy prices from S04: elec=$0, gas=$0, propane=$0, oil=$0, wood=$0
 [S15 DEBUG] 🧮 D141 calculation: 220216.85125050816 kWh/m²/yr × $0/kWh = $0.00
 🔍 S15 REFERENCE UPSTREAM: ref_i_104=0, ref_m_121=84594.73968, ref_i_80=0
 [S15] Missing critical upstream Reference values: ref_g_101, ref_d_101, ref_i_104
calculateReferenceModel @ 4011-Section15.js:1366
calculateAll @ 4011-Section15.js:1286
(anonymous) @ 4011-Section15.js:1945
(anonymous) @ 4011-StateManager.js:486
notifyListeners @ 4011-StateManager.js:484
setValue @ 4011-StateManager.js:362
window.TEUI.StateManager.setValue @ 4011-ComponentBridge.js:429
setCalculatedValue @ 4011-Section01.js:383
calculateTargetModel @ 4011-Section01.js:577
runAllCalculations @ 4011-Section01.js:1234
updateSubtotals @ 4011-Section04.js:1663
updateGridIntensityForMode @ 4011-Section04.js:1456
updateElectricityEmissionFactor @ 4011-Section04.js:1345
forceEmissionsFactorUpdate @ 4011-SectionIntegrator.js:516
initializeEmissionsFactorIntegration @ 4011-SectionIntegrator.js:497
(anonymous) @ 4011-SectionIntegrator.js:187
initializeAllIntegrations @ 4011-SectionIntegrator.js:184
(anonymous) @ 4011-SectionIntegrator.js:106
renderAllSections @ 4011-FieldManager.js:398
(anonymous) @ 4011-init.js:858Understand this warningAI
 ✅ S15 Reference Model: All values converted to numbers for proper math
 ✅ S15 Reference Model: Additional fuel variables declared for cost calculations
 [S15 DEBUG] 💰 Electricity price from S04: raw="$0.1300" → parsed=$0/kWh
 🔍 S15 TARGET UPSTREAM: target_i_104=116070.33, target_m_121=48980.79999999999, target_i_80=45879.580160000005
 [S15 DEBUG] 💰 All energy prices from S04: elec=$0, gas=$0, propane=$0, oil=$0, wood=$0
 🔍 S15 REFERENCE UPSTREAM: ref_i_104=0, ref_m_121=84594.73968, ref_i_80=0
 [S15] Missing critical upstream Reference values: ref_g_101, ref_d_101, ref_i_104
calculateReferenceModel @ 4011-Section15.js:1366
calculateAll @ 4011-Section15.js:1286
(anonymous) @ 4011-Section15.js:1945
(anonymous) @ 4011-StateManager.js:486
notifyListeners @ 4011-StateManager.js:484
setValue @ 4011-StateManager.js:362
window.TEUI.StateManager.setValue @ 4011-ComponentBridge.js:429
calculateValues @ 4011-Section15.js:1705
calculateTargetModel @ 4011-Section15.js:1563
calculateAll @ 4011-Section15.js:1287
(anonymous) @ 4011-Section15.js:1945
(anonymous) @ 4011-StateManager.js:486
notifyListeners @ 4011-StateManager.js:484
setValue @ 4011-StateManager.js:362
window.TEUI.StateManager.setValue @ 4011-ComponentBridge.js:429
setCalculatedValue @ 4011-Section01.js:383
calculateTargetModel @ 4011-Section01.js:577
runAllCalculations @ 4011-Section01.js:1234
updateSubtotals @ 4011-Section04.js:1663
updateGridIntensityForMode @ 4011-Section04.js:1456
updateElectricityEmissionFactor @ 4011-Section04.js:1345
forceEmissionsFactorUpdate @ 4011-SectionIntegrator.js:516
initializeEmissionsFactorIntegration @ 4011-SectionIntegrator.js:497
(anonymous) @ 4011-SectionIntegrator.js:187
initializeAllIntegrations @ 4011-SectionIntegrator.js:184
(anonymous) @ 4011-SectionIntegrator.js:106
renderAllSections @ 4011-FieldManager.js:398
(anonymous) @ 4011-init.js:858Understand this warningAI
 ✅ S15 Reference Model: All values converted to numbers for proper math
 ✅ S15 Reference Model: Additional fuel variables declared for cost calculations
 [S15 DEBUG] 💰 Electricity price from S04: raw="$0.1300" → parsed=$0/kWh
 🔍 S15 TARGET UPSTREAM: target_i_104=116070.33, target_m_121=48980.79999999999, target_i_80=45879.580160000005
 [S15 DEBUG] 💰 All energy prices from S04: elec=$0, gas=$0, propane=$0, oil=$0, wood=$0
 [S15 DEBUG] 🧮 D141 calculation: 220216.85125050816 kWh/m²/yr × $0/kWh = $0.00
 🔍 S15 REFERENCE UPSTREAM: ref_i_104=0, ref_m_121=84594.73968, ref_i_80=0
 [S15] Missing critical upstream Reference values: ref_g_101, ref_d_101, ref_i_104
calculateReferenceModel @ 4011-Section15.js:1366
calculateAll @ 4011-Section15.js:1286
(anonymous) @ 4011-Section15.js:1945
(anonymous) @ 4011-StateManager.js:486
notifyListeners @ 4011-StateManager.js:484
setValue @ 4011-StateManager.js:362
window.TEUI.StateManager.setValue @ 4011-ComponentBridge.js:429
calculateValues @ 4011-Section15.js:1705
calculateTargetModel @ 4011-Section15.js:1563
calculateAll @ 4011-Section15.js:1287
(anonymous) @ 4011-Section15.js:1945
(anonymous) @ 4011-StateManager.js:486
notifyListeners @ 4011-StateManager.js:484
setValue @ 4011-StateManager.js:362
window.TEUI.StateManager.setValue @ 4011-ComponentBridge.js:429
setCalculatedValue @ 4011-Section01.js:383
calculateTargetModel @ 4011-Section01.js:577
runAllCalculations @ 4011-Section01.js:1234
updateSubtotals @ 4011-Section04.js:1663
updateGridIntensityForMode @ 4011-Section04.js:1456
updateElectricityEmissionFactor @ 4011-Section04.js:1345
forceEmissionsFactorUpdate @ 4011-SectionIntegrator.js:516
initializeEmissionsFactorIntegration @ 4011-SectionIntegrator.js:497
(anonymous) @ 4011-SectionIntegrator.js:187
initializeAllIntegrations @ 4011-SectionIntegrator.js:184
(anonymous) @ 4011-SectionIntegrator.js:106
renderAllSections @ 4011-FieldManager.js:398
(anonymous) @ 4011-init.js:858Understand this warningAI
 ✅ S15 Reference Model: All values converted to numbers for proper math
 ✅ S15 Reference Model: Additional fuel variables declared for cost calculations
 [S15 DEBUG] 💰 Electricity price from S04: raw="$0.1300" → parsed=$0/kWh
 🔍 S15 TARGET UPSTREAM: target_i_104=116070.33, target_m_121=48980.79999999999, target_i_80=45879.580160000005
 [S15 DEBUG] 💰 All energy prices from S04: elec=$0, gas=$0, propane=$0, oil=$0, wood=$0
 [S15 DEBUG] 🧮 D141 calculation: 220216.85125050816 kWh/m²/yr × $0/kWh = $0.00
 [S15 DEBUG] 🧮 D141 calculation: 220216.85125050816 kWh/m²/yr × $0/kWh = $0.00
 🔍 S15 REFERENCE UPSTREAM: ref_i_104=0, ref_m_121=84594.73968, ref_i_80=0
 [S15] Missing critical upstream Reference values: ref_g_101, ref_d_101, ref_i_104
calculateReferenceModel @ 4011-Section15.js:1366
calculateAll @ 4011-Section15.js:1286
(anonymous) @ 4011-Section15.js:1945
(anonymous) @ 4011-StateManager.js:486
notifyListeners @ 4011-StateManager.js:484
setValue @ 4011-StateManager.js:362
window.TEUI.StateManager.setValue @ 4011-ComponentBridge.js:429
setCalculatedValue @ 4011-Section01.js:383
calculateTargetModel @ 4011-Section01.js:577
runAllCalculations @ 4011-Section01.js:1234
updateSubtotals @ 4011-Section04.js:1663
updateGridIntensityForMode @ 4011-Section04.js:1456
updateElectricityEmissionFactor @ 4011-Section04.js:1345
forceEmissionsFactorUpdate @ 4011-SectionIntegrator.js:516
initializeEmissionsFactorIntegration @ 4011-SectionIntegrator.js:497
(anonymous) @ 4011-SectionIntegrator.js:187
initializeAllIntegrations @ 4011-SectionIntegrator.js:184
(anonymous) @ 4011-SectionIntegrator.js:106
renderAllSections @ 4011-FieldManager.js:398
(anonymous) @ 4011-init.js:858Understand this warningAI
 ✅ S15 Reference Model: All values converted to numbers for proper math
 ✅ S15 Reference Model: Additional fuel variables declared for cost calculations
 [S15 DEBUG] 💰 Electricity price from S04: raw="$0.1300" → parsed=$0/kWh
 🔍 S15 TARGET UPSTREAM: target_i_104=116070.33, target_m_121=48980.79999999999, target_i_80=45879.580160000005
 [S15 DEBUG] 💰 All energy prices from S04: elec=$0, gas=$0, propane=$0, oil=$0, wood=$0
 [S15 DEBUG] 🧮 D141 calculation: 220216.85125050816 kWh/m²/yr × $0/kWh = $0.00
 🔍 S15 REFERENCE UPSTREAM: ref_i_104=0, ref_m_121=84594.73968, ref_i_80=0
 [S15] Missing critical upstream Reference values: ref_g_101, ref_d_101, ref_i_104
calculateReferenceModel @ 4011-Section15.js:1366
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
 [S15 DEBUG] 💰 Electricity price from S04: raw="$0.1300" → parsed=$0/kWh
 🔍 S15 TARGET UPSTREAM: target_i_104=116070.33, target_m_121=48980.79999999999, target_i_80=45879.580160000005
 [S15 DEBUG] 💰 All energy prices from S04: elec=$0, gas=$0, propane=$0, oil=$0, wood=$0
 [S15 DEBUG] 🧮 D141 calculation: 220216.85125050816 kWh/m²/yr × $0/kWh = $0.00
 [ReferenceToggle] Pattern A initialization complete
 S02: Target defaults set
 S02: Reference defaults set
 S02: Pattern A initialization complete.
 [S02] Switched to REFERENCE mode
 [S02] Switched to TARGET mode
 [S02] Switched to TARGET mode
 [S02] Switched to TARGET mode
 S03: Sliders initialized via FieldManager
 S03: Section rendered - initializing Self-Contained State Module.
 S03: ModeManager exposed globally for cross-section integration.
 S03: Checking climate data availability (attempt 1/10)
 S03: Climate data available (8) ['BC', 'AB', 'SK', 'MB', 'ON', 'QC', 'NU', 'NT']
 S03: ClimateData available - initializing dropdowns
 S03: Populated province dropdown with options: (8) ['AB', 'BC', 'MB', 'NT', 'NU', 'ON', 'QC', 'SK']
 City dropdown updated for ON - selected: Alexandria
 S03: Sliders initialized via FieldManager
 [Section03] Running Reference Model calculations...
 [Section03] Reference results stored with ref_ prefix for downstream sections: {h_23: '18', d_23: undefined, d_24: undefined, h_24: '24', d_20: undefined, …}
 [Section03] Reference Model calculations complete
 S03: Weather data updated for Alexandria, ON (Present)
 Section03: Province selected: ON
 City dropdown updated for ON - selected: Alexandria
 [Section03] Running Reference Model calculations...
 [Section03] Reference results stored with ref_ prefix for downstream sections: {h_23: '18', d_23: undefined, d_24: undefined, h_24: '24', d_20: undefined, …}
 [Section03] Reference Model calculations complete
 S03: Weather data updated for Alexandria, ON (Present)
 [Section03] Running Reference Model calculations...
 [Section03] Reference results stored with ref_ prefix for downstream sections: {h_23: '18', d_23: undefined, d_24: undefined, h_24: '24', d_20: undefined, …}
 [Section03] Reference Model calculations complete
 S03: Self-Contained State Module initialization complete
 S04: Target defaults set
 S04: Reference defaults set
 S04: Pattern A initialization complete.
 [S02] Switched to REFERENCE mode
 [S02] Switched to TARGET mode
 [S02] Switched to TARGET mode
 [S02] Switched to TARGET mode
 [S02] Switched to REFERENCE mode
 [S02] Switched to TARGET mode
 [S02] Switched to TARGET mode
 [S02] Switched to TARGET mode
 [S02] Switched to REFERENCE mode
 [S02] Switched to TARGET mode
 [S02] Switched to TARGET mode
 [S02] Switched to TARGET mode
 [S02] Switched to REFERENCE mode
 [S02] Switched to TARGET mode
 [S02] Switched to TARGET mode
 [S02] Switched to TARGET mode
 [S02] Switched to REFERENCE mode
 [S02] Switched to TARGET mode
 [S02] Switched to TARGET mode
 [S02] Switched to TARGET mode
 [S02] Switched to REFERENCE mode
 [S02] Switched to TARGET mode
 [S02] Switched to TARGET mode
 [S02] Switched to TARGET mode
 [S02] Switched to REFERENCE mode
 [S02] Switched to TARGET mode
 [S02] Switched to TARGET mode
 [S02] Switched to TARGET mode
 [S02] Switched to REFERENCE mode
 [S02] Switched to TARGET mode
 [S02] Switched to TARGET mode
 [S02] Switched to TARGET mode
2 S04 REFERENCE MODEL: ref_j_32=132765.65, ref_k_32=6771.04815
2 S04 REFERENCE MODEL: ref_j_32=132765.65, ref_k_32=6771.04815
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
 S10: Global listener triggered by i_97, recalculating all.
 S10: Utilization factor dependency i_97 changed.
 S10: Global listener triggered by i_98, recalculating all.
 S10: Utilization factor dependency i_98 changed.
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
calculateReferenceModel @ 4011-Section15.js:1366
calculateAll @ 4011-Section15.js:1286
initializeEventHandlers @ 4011-Section15.js:2007
initializeSectionEventHandlers @ 4011-FieldManager.js:310
renderSection @ 4011-FieldManager.js:367
(anonymous) @ 4011-FieldManager.js:394
renderAllSections @ 4011-FieldManager.js:393
(anonymous) @ index.html:1009Understand this warningAI
 ✅ S15 Reference Model: All values converted to numbers for proper math
 ✅ S15 Reference Model: Additional fuel variables declared for cost calculations
2 S04 REFERENCE MODEL: ref_j_32=132765.65, ref_k_32=6771.04815
 🔍 S15 REFERENCE UPSTREAM: ref_i_104=0, ref_m_121=84594.73968, ref_i_80=0
 [S15] Missing critical upstream Reference values: ref_g_101, ref_d_101, ref_i_104
calculateReferenceModel @ 4011-Section15.js:1366
calculateAll @ 4011-Section15.js:1286
(anonymous) @ 4011-Section15.js:1945
(anonymous) @ 4011-StateManager.js:486
notifyListeners @ 4011-StateManager.js:484
setValue @ 4011-StateManager.js:362
window.TEUI.StateManager.setValue @ 4011-ComponentBridge.js:429
setCalculatedValue @ 4011-Section01.js:376
calculateReferenceModel @ 4011-Section01.js:478
runAllCalculations @ 4011-Section01.js:1233
(anonymous) @ 4011-Section01.js:1306
(anonymous) @ 4011-StateManager.js:486
notifyListeners @ 4011-StateManager.js:484
setValue @ 4011-StateManager.js:344
window.TEUI.StateManager.setValue @ 4011-ComponentBridge.js:429
setRefValueIfChanged @ 4011-Section15.js:1315
calculateReferenceModel @ 4011-Section15.js:1421
calculateAll @ 4011-Section15.js:1286
initializeEventHandlers @ 4011-Section15.js:2007
initializeSectionEventHandlers @ 4011-FieldManager.js:310
renderSection @ 4011-FieldManager.js:367
(anonymous) @ 4011-FieldManager.js:394
renderAllSections @ 4011-FieldManager.js:393
(anonymous) @ index.html:1009Understand this warningAI
 ✅ S15 Reference Model: All values converted to numbers for proper math
 ✅ S15 Reference Model: Additional fuel variables declared for cost calculations
 🔍 S15 REFERENCE UPSTREAM: ref_i_104=0, ref_m_121=84594.73968, ref_i_80=0
 [S15] Missing critical upstream Reference values: ref_g_101, ref_d_101, ref_i_104
calculateReferenceModel @ 4011-Section15.js:1366
calculateAll @ 4011-Section15.js:1286
(anonymous) @ 4011-Section15.js:1945
(anonymous) @ 4011-StateManager.js:486
notifyListeners @ 4011-StateManager.js:484
setValue @ 4011-StateManager.js:362
window.TEUI.StateManager.setValue @ 4011-ComponentBridge.js:429
calculateReferenceModel @ 4011-Section15.js:1515
calculateAll @ 4011-Section15.js:1286
(anonymous) @ 4011-Section15.js:1945
(anonymous) @ 4011-StateManager.js:486
notifyListeners @ 4011-StateManager.js:484
setValue @ 4011-StateManager.js:362
window.TEUI.StateManager.setValue @ 4011-ComponentBridge.js:429
setCalculatedValue @ 4011-Section01.js:376
calculateReferenceModel @ 4011-Section01.js:478
runAllCalculations @ 4011-Section01.js:1233
(anonymous) @ 4011-Section01.js:1306
(anonymous) @ 4011-StateManager.js:486
notifyListeners @ 4011-StateManager.js:484
setValue @ 4011-StateManager.js:344
window.TEUI.StateManager.setValue @ 4011-ComponentBridge.js:429
setRefValueIfChanged @ 4011-Section15.js:1315
calculateReferenceModel @ 4011-Section15.js:1421
calculateAll @ 4011-Section15.js:1286
initializeEventHandlers @ 4011-Section15.js:2007
initializeSectionEventHandlers @ 4011-FieldManager.js:310
renderSection @ 4011-FieldManager.js:367
(anonymous) @ 4011-FieldManager.js:394
renderAllSections @ 4011-FieldManager.js:393
(anonymous) @ index.html:1009Understand this warningAI
 ✅ S15 Reference Model: All values converted to numbers for proper math
 ✅ S15 Reference Model: Additional fuel variables declared for cost calculations
 [S15 DEBUG] 💰 Electricity price from S04: raw="$0.1300" → parsed=$0/kWh
 🔍 S15 TARGET UPSTREAM: target_i_104=116070.33, target_m_121=48980.79999999999, target_i_80=45879.580160000005
 [S15 DEBUG] 💰 All energy prices from S04: elec=$0, gas=$0, propane=$0, oil=$0, wood=$0
 🔍 S15 REFERENCE UPSTREAM: ref_i_104=0, ref_m_121=84594.73968, ref_i_80=0
 [S15] Missing critical upstream Reference values: ref_g_101, ref_d_101, ref_i_104
calculateReferenceModel @ 4011-Section15.js:1366
calculateAll @ 4011-Section15.js:1286
(anonymous) @ 4011-Section15.js:1945
(anonymous) @ 4011-StateManager.js:486
notifyListeners @ 4011-StateManager.js:484
setValue @ 4011-StateManager.js:362
updateTEUICalculations @ 4011-StateManager.js:929
(anonymous) @ 4011-StateManager.js:199
(anonymous) @ 4011-StateManager.js:486
notifyListeners @ 4011-StateManager.js:484
setValue @ 4011-StateManager.js:362
window.TEUI.StateManager.setValue @ 4011-ComponentBridge.js:429
setCalculatedValue @ 4011-Section04.js:82
updateSubtotals @ 4011-Section04.js:1687
handleD136Update @ 4011-Section04.js:1180
(anonymous) @ 4011-StateManager.js:486
notifyListeners @ 4011-StateManager.js:484
setValue @ 4011-StateManager.js:362
window.TEUI.StateManager.setValue @ 4011-ComponentBridge.js:429
setCalculatedValue @ 4011-Section15.js:122
calculateValues @ 4011-Section15.js:1693
calculateTargetModel @ 4011-Section15.js:1563
calculateAll @ 4011-Section15.js:1287
(anonymous) @ 4011-Section15.js:1945
(anonymous) @ 4011-StateManager.js:486
notifyListeners @ 4011-StateManager.js:484
setValue @ 4011-StateManager.js:362
window.TEUI.StateManager.setValue @ 4011-ComponentBridge.js:429
calculateReferenceModel @ 4011-Section15.js:1515
calculateAll @ 4011-Section15.js:1286
(anonymous) @ 4011-Section15.js:1945
(anonymous) @ 4011-StateManager.js:486
notifyListeners @ 4011-StateManager.js:484
setValue @ 4011-StateManager.js:362
window.TEUI.StateManager.setValue @ 4011-ComponentBridge.js:429
setCalculatedValue @ 4011-Section01.js:376
calculateReferenceModel @ 4011-Section01.js:478
runAllCalculations @ 4011-Section01.js:1233
(anonymous) @ 4011-Section01.js:1306
(anonymous) @ 4011-StateManager.js:486
notifyListeners @ 4011-StateManager.js:484
setValue @ 4011-StateManager.js:344
window.TEUI.StateManager.setValue @ 4011-ComponentBridge.js:429
setRefValueIfChanged @ 4011-Section15.js:1315
calculateReferenceModel @ 4011-Section15.js:1421
calculateAll @ 4011-Section15.js:1286
initializeEventHandlers @ 4011-Section15.js:2007
initializeSectionEventHandlers @ 4011-FieldManager.js:310
renderSection @ 4011-FieldManager.js:367
(anonymous) @ 4011-FieldManager.js:394
renderAllSections @ 4011-FieldManager.js:393
(anonymous) @ index.html:1009Understand this warningAI
 ✅ S15 Reference Model: All values converted to numbers for proper math
 ✅ S15 Reference Model: Additional fuel variables declared for cost calculations
 [S15 DEBUG] 💰 Electricity price from S04: raw="$0.1300" → parsed=$0/kWh
 🔍 S15 TARGET UPSTREAM: target_i_104=116070.33, target_m_121=48980.79999999999, target_i_80=45879.580160000005
 [S15 DEBUG] 💰 All energy prices from S04: elec=$0, gas=$0, propane=$0, oil=$0, wood=$0
 🔍 S15 REFERENCE UPSTREAM: ref_i_104=0, ref_m_121=84594.73968, ref_i_80=0
 [S15] Missing critical upstream Reference values: ref_g_101, ref_d_101, ref_i_104
calculateReferenceModel @ 4011-Section15.js:1366
calculateAll @ 4011-Section15.js:1286
(anonymous) @ 4011-Section15.js:1945
(anonymous) @ 4011-StateManager.js:486
notifyListeners @ 4011-StateManager.js:484
setValue @ 4011-StateManager.js:362
window.TEUI.StateManager.setValue @ 4011-ComponentBridge.js:429
calculateValues @ 4011-Section15.js:1705
calculateTargetModel @ 4011-Section15.js:1563
calculateAll @ 4011-Section15.js:1287
(anonymous) @ 4011-Section15.js:1945
(anonymous) @ 4011-StateManager.js:486
notifyListeners @ 4011-StateManager.js:484
setValue @ 4011-StateManager.js:362
updateTEUICalculations @ 4011-StateManager.js:929
(anonymous) @ 4011-StateManager.js:199
(anonymous) @ 4011-StateManager.js:486
notifyListeners @ 4011-StateManager.js:484
setValue @ 4011-StateManager.js:362
window.TEUI.StateManager.setValue @ 4011-ComponentBridge.js:429
setCalculatedValue @ 4011-Section04.js:82
updateSubtotals @ 4011-Section04.js:1687
handleD136Update @ 4011-Section04.js:1180
(anonymous) @ 4011-StateManager.js:486
notifyListeners @ 4011-StateManager.js:484
setValue @ 4011-StateManager.js:362
window.TEUI.StateManager.setValue @ 4011-ComponentBridge.js:429
setCalculatedValue @ 4011-Section15.js:122
calculateValues @ 4011-Section15.js:1693
calculateTargetModel @ 4011-Section15.js:1563
calculateAll @ 4011-Section15.js:1287
(anonymous) @ 4011-Section15.js:1945
(anonymous) @ 4011-StateManager.js:486
notifyListeners @ 4011-StateManager.js:484
setValue @ 4011-StateManager.js:362
window.TEUI.StateManager.setValue @ 4011-ComponentBridge.js:429
calculateReferenceModel @ 4011-Section15.js:1515
calculateAll @ 4011-Section15.js:1286
(anonymous) @ 4011-Section15.js:1945
(anonymous) @ 4011-StateManager.js:486
notifyListeners @ 4011-StateManager.js:484
setValue @ 4011-StateManager.js:362
window.TEUI.StateManager.setValue @ 4011-ComponentBridge.js:429
setCalculatedValue @ 4011-Section01.js:376
calculateReferenceModel @ 4011-Section01.js:478
runAllCalculations @ 4011-Section01.js:1233
(anonymous) @ 4011-Section01.js:1306
(anonymous) @ 4011-StateManager.js:486
notifyListeners @ 4011-StateManager.js:484
setValue @ 4011-StateManager.js:344
window.TEUI.StateManager.setValue @ 4011-ComponentBridge.js:429
setRefValueIfChanged @ 4011-Section15.js:1315
calculateReferenceModel @ 4011-Section15.js:1421
calculateAll @ 4011-Section15.js:1286
initializeEventHandlers @ 4011-Section15.js:2007
initializeSectionEventHandlers @ 4011-FieldManager.js:310
renderSection @ 4011-FieldManager.js:367
(anonymous) @ 4011-FieldManager.js:394
renderAllSections @ 4011-FieldManager.js:393
(anonymous) @ index.html:1009Understand this warningAI
 ✅ S15 Reference Model: All values converted to numbers for proper math
 ✅ S15 Reference Model: Additional fuel variables declared for cost calculations
 [S15 DEBUG] 💰 Electricity price from S04: raw="$0.1300" → parsed=$0/kWh
 🔍 S15 TARGET UPSTREAM: target_i_104=116070.33, target_m_121=48980.79999999999, target_i_80=45879.580160000005
 [S15 DEBUG] 💰 All energy prices from S04: elec=$0, gas=$0, propane=$0, oil=$0, wood=$0
 [S15 DEBUG] 🧮 D141 calculation: 220216.85125050816 kWh/m²/yr × $0/kWh = $0.00
 [S15 DEBUG] 🧮 D141 calculation: 220216.85125050816 kWh/m²/yr × $0/kWh = $0.00
 [S02] Switched to REFERENCE mode
 [S02] Switched to TARGET mode
 [S02] Switched to TARGET mode
 [S02] Switched to TARGET mode
 [S02] Switched to REFERENCE mode
 [S02] Switched to TARGET mode
 [S02] Switched to TARGET mode
 [S02] Switched to TARGET mode
 🔍 S15 REFERENCE UPSTREAM: ref_i_104=0, ref_m_121=84594.73968, ref_i_80=0
 [S15] Missing critical upstream Reference values: ref_g_101, ref_d_101, ref_i_104
calculateReferenceModel @ 4011-Section15.js:1366
calculateAll @ 4011-Section15.js:1286
(anonymous) @ 4011-Section15.js:1945
(anonymous) @ 4011-StateManager.js:486
notifyListeners @ 4011-StateManager.js:484
setValue @ 4011-StateManager.js:362
window.TEUI.StateManager.setValue @ 4011-ComponentBridge.js:429
setCalculatedValue @ 4011-Section04.js:82
updateSubtotals @ 4011-Section04.js:1698
handleD136Update @ 4011-Section04.js:1180
(anonymous) @ 4011-StateManager.js:486
notifyListeners @ 4011-StateManager.js:484
setValue @ 4011-StateManager.js:362
window.TEUI.StateManager.setValue @ 4011-ComponentBridge.js:429
setCalculatedValue @ 4011-Section15.js:122
calculateValues @ 4011-Section15.js:1693
calculateTargetModel @ 4011-Section15.js:1563
calculateAll @ 4011-Section15.js:1287
(anonymous) @ 4011-Section15.js:1945
(anonymous) @ 4011-StateManager.js:486
notifyListeners @ 4011-StateManager.js:484
setValue @ 4011-StateManager.js:362
window.TEUI.StateManager.setValue @ 4011-ComponentBridge.js:429
calculateReferenceModel @ 4011-Section15.js:1515
calculateAll @ 4011-Section15.js:1286
(anonymous) @ 4011-Section15.js:1945
(anonymous) @ 4011-StateManager.js:486
notifyListeners @ 4011-StateManager.js:484
setValue @ 4011-StateManager.js:362
window.TEUI.StateManager.setValue @ 4011-ComponentBridge.js:429
setCalculatedValue @ 4011-Section01.js:376
calculateReferenceModel @ 4011-Section01.js:478
runAllCalculations @ 4011-Section01.js:1233
(anonymous) @ 4011-Section01.js:1306
(anonymous) @ 4011-StateManager.js:486
notifyListeners @ 4011-StateManager.js:484
setValue @ 4011-StateManager.js:344
window.TEUI.StateManager.setValue @ 4011-ComponentBridge.js:429
setRefValueIfChanged @ 4011-Section15.js:1315
calculateReferenceModel @ 4011-Section15.js:1421
calculateAll @ 4011-Section15.js:1286
initializeEventHandlers @ 4011-Section15.js:2007
initializeSectionEventHandlers @ 4011-FieldManager.js:310
renderSection @ 4011-FieldManager.js:367
(anonymous) @ 4011-FieldManager.js:394
renderAllSections @ 4011-FieldManager.js:393
(anonymous) @ index.html:1009Understand this warningAI
 ✅ S15 Reference Model: All values converted to numbers for proper math
 ✅ S15 Reference Model: Additional fuel variables declared for cost calculations
 [S15 DEBUG] 💰 Electricity price from S04: raw="$0.1300" → parsed=$0/kWh
 🔍 S15 TARGET UPSTREAM: target_i_104=116070.33, target_m_121=48980.79999999999, target_i_80=45879.580160000005
 [S15 DEBUG] 💰 All energy prices from S04: elec=$0, gas=$0, propane=$0, oil=$0, wood=$0
 [S15 DEBUG] 🧮 D141 calculation: 220216.85125050816 kWh/m²/yr × $0/kWh = $0.00
 [S15 DEBUG] 🧮 D141 calculation: 220216.85125050816 kWh/m²/yr × $0/kWh = $0.00
 [S15 DEBUG] 💰 Electricity price from S04: raw="$0.1300" → parsed=$0/kWh
 🔍 S15 TARGET UPSTREAM: target_i_104=116070.33, target_m_121=48980.79999999999, target_i_80=45879.580160000005
 [S15 DEBUG] 💰 All energy prices from S04: elec=$0, gas=$0, propane=$0, oil=$0, wood=$0
 [S15 DEBUG] 🧮 D141 calculation: 220216.85125050816 kWh/m²/yr × $0/kWh = $0.00
 🔍 S15 REFERENCE UPSTREAM: ref_i_104=0, ref_m_121=84594.73968, ref_i_80=0
 [S15] Missing critical upstream Reference values: ref_g_101, ref_d_101, ref_i_104
calculateReferenceModel @ 4011-Section15.js:1366
calculateAll @ 4011-Section15.js:1286
(anonymous) @ 4011-Section15.js:1945
(anonymous) @ 4011-StateManager.js:486
notifyListeners @ 4011-StateManager.js:484
setValue @ 4011-StateManager.js:362
window.TEUI.StateManager.setValue @ 4011-ComponentBridge.js:429
setCalculatedValue @ 4011-Section01.js:376
calculateTargetModel @ 4011-Section01.js:577
runAllCalculations @ 4011-Section01.js:1234
(anonymous) @ 4011-Section01.js:1306
(anonymous) @ 4011-StateManager.js:486
notifyListeners @ 4011-StateManager.js:484
setValue @ 4011-StateManager.js:344
window.TEUI.StateManager.setValue @ 4011-ComponentBridge.js:429
setRefValueIfChanged @ 4011-Section15.js:1315
calculateReferenceModel @ 4011-Section15.js:1421
calculateAll @ 4011-Section15.js:1286
initializeEventHandlers @ 4011-Section15.js:2007
initializeSectionEventHandlers @ 4011-FieldManager.js:310
renderSection @ 4011-FieldManager.js:367
(anonymous) @ 4011-FieldManager.js:394
renderAllSections @ 4011-FieldManager.js:393
(anonymous) @ index.html:1009Understand this warningAI
 ✅ S15 Reference Model: All values converted to numbers for proper math
 ✅ S15 Reference Model: Additional fuel variables declared for cost calculations
 [S15 DEBUG] 💰 Electricity price from S04: raw="$0.1300" → parsed=$0/kWh
 🔍 S15 TARGET UPSTREAM: target_i_104=116070.33, target_m_121=48980.79999999999, target_i_80=45879.580160000005
 [S15 DEBUG] 💰 All energy prices from S04: elec=$0, gas=$0, propane=$0, oil=$0, wood=$0
 [S15 DEBUG] 🧮 D141 calculation: 220216.85125050816 kWh/m²/yr × $0/kWh = $0.00
 🔍 S15 REFERENCE UPSTREAM: ref_i_104=0, ref_m_121=84594.73968, ref_i_80=0
 [S15] Missing critical upstream Reference values: ref_g_101, ref_d_101, ref_i_104
calculateReferenceModel @ 4011-Section15.js:1366
calculateAll @ 4011-Section15.js:1286
(anonymous) @ 4011-Section15.js:1945
(anonymous) @ 4011-StateManager.js:486
notifyListeners @ 4011-StateManager.js:484
setValue @ 4011-StateManager.js:362
window.TEUI.StateManager.setValue @ 4011-ComponentBridge.js:429
setCalculatedValue @ 4011-Section01.js:383
calculateTargetModel @ 4011-Section01.js:577
runAllCalculations @ 4011-Section01.js:1234
(anonymous) @ 4011-Section01.js:1306
(anonymous) @ 4011-StateManager.js:486
notifyListeners @ 4011-StateManager.js:484
setValue @ 4011-StateManager.js:344
window.TEUI.StateManager.setValue @ 4011-ComponentBridge.js:429
setRefValueIfChanged @ 4011-Section15.js:1315
calculateReferenceModel @ 4011-Section15.js:1421
calculateAll @ 4011-Section15.js:1286
initializeEventHandlers @ 4011-Section15.js:2007
initializeSectionEventHandlers @ 4011-FieldManager.js:310
renderSection @ 4011-FieldManager.js:367
(anonymous) @ 4011-FieldManager.js:394
renderAllSections @ 4011-FieldManager.js:393
(anonymous) @ index.html:1009Understand this warningAI
 ✅ S15 Reference Model: All values converted to numbers for proper math
 ✅ S15 Reference Model: Additional fuel variables declared for cost calculations
 [S15 DEBUG] 💰 Electricity price from S04: raw="$0.1300" → parsed=$0/kWh
 🔍 S15 TARGET UPSTREAM: target_i_104=116070.33, target_m_121=48980.79999999999, target_i_80=45879.580160000005
 [S15 DEBUG] 💰 All energy prices from S04: elec=$0, gas=$0, propane=$0, oil=$0, wood=$0
 🔍 S15 REFERENCE UPSTREAM: ref_i_104=0, ref_m_121=84594.73968, ref_i_80=0
 [S15] Missing critical upstream Reference values: ref_g_101, ref_d_101, ref_i_104
calculateReferenceModel @ 4011-Section15.js:1366
calculateAll @ 4011-Section15.js:1286
(anonymous) @ 4011-Section15.js:1945
(anonymous) @ 4011-StateManager.js:486
notifyListeners @ 4011-StateManager.js:484
setValue @ 4011-StateManager.js:362
window.TEUI.StateManager.setValue @ 4011-ComponentBridge.js:429
calculateValues @ 4011-Section15.js:1705
calculateTargetModel @ 4011-Section15.js:1563
calculateAll @ 4011-Section15.js:1287
(anonymous) @ 4011-Section15.js:1945
(anonymous) @ 4011-StateManager.js:486
notifyListeners @ 4011-StateManager.js:484
setValue @ 4011-StateManager.js:362
window.TEUI.StateManager.setValue @ 4011-ComponentBridge.js:429
setCalculatedValue @ 4011-Section01.js:383
calculateTargetModel @ 4011-Section01.js:577
runAllCalculations @ 4011-Section01.js:1234
(anonymous) @ 4011-Section01.js:1306
(anonymous) @ 4011-StateManager.js:486
notifyListeners @ 4011-StateManager.js:484
setValue @ 4011-StateManager.js:344
window.TEUI.StateManager.setValue @ 4011-ComponentBridge.js:429
setRefValueIfChanged @ 4011-Section15.js:1315
calculateReferenceModel @ 4011-Section15.js:1421
calculateAll @ 4011-Section15.js:1286
initializeEventHandlers @ 4011-Section15.js:2007
initializeSectionEventHandlers @ 4011-FieldManager.js:310
renderSection @ 4011-FieldManager.js:367
(anonymous) @ 4011-FieldManager.js:394
renderAllSections @ 4011-FieldManager.js:393
(anonymous) @ index.html:1009Understand this warningAI
 ✅ S15 Reference Model: All values converted to numbers for proper math
 ✅ S15 Reference Model: Additional fuel variables declared for cost calculations
 [S15 DEBUG] 💰 Electricity price from S04: raw="$0.1300" → parsed=$0/kWh
 🔍 S15 TARGET UPSTREAM: target_i_104=116070.33, target_m_121=48980.79999999999, target_i_80=45879.580160000005
 [S15 DEBUG] 💰 All energy prices from S04: elec=$0, gas=$0, propane=$0, oil=$0, wood=$0
 [S15 DEBUG] 🧮 D141 calculation: 220216.85125050816 kWh/m²/yr × $0/kWh = $0.00
 [S15 DEBUG] 🧮 D141 calculation: 220216.85125050816 kWh/m²/yr × $0/kWh = $0.00
 [S15 DEBUG] 💰 Electricity price from S04: raw="$0.1300" → parsed=$0/kWh
 🔍 S15 TARGET UPSTREAM: target_i_104=116070.33, target_m_121=48980.79999999999, target_i_80=45879.580160000005
 [S15 DEBUG] 💰 All energy prices from S04: elec=$0, gas=$0, propane=$0, oil=$0, wood=$0
 [S15 DEBUG] 🧮 D141 calculation: 220216.85125050816 kWh/m²/yr × $0/kWh = $0.00
 S15: Target defaults set
 S15: Reference defaults set
 S15: Pattern A initialization complete.
 🔍 S15 REFERENCE UPSTREAM: ref_i_104=0, ref_m_121=84594.73968, ref_i_80=0
 [S15] Missing critical upstream Reference values: ref_g_101, ref_d_101, ref_i_104
calculateReferenceModel @ 4011-Section15.js:1366
calculateAll @ 4011-Section15.js:1286
initializeEventHandlers @ 4011-Section15.js:2007
onSectionRendered @ 4011-Section15.js:2032
initializeSectionEventHandlers @ 4011-FieldManager.js:322
renderSection @ 4011-FieldManager.js:367
(anonymous) @ 4011-FieldManager.js:394
renderAllSections @ 4011-FieldManager.js:393
(anonymous) @ index.html:1009Understand this warningAI
 ✅ S15 Reference Model: All values converted to numbers for proper math
 ✅ S15 Reference Model: Additional fuel variables declared for cost calculations
 [S15 DEBUG] 💰 Electricity price from S04: raw="$0.1300" → parsed=$0/kWh
 🔍 S15 TARGET UPSTREAM: target_i_104=116070.33, target_m_121=48980.79999999999, target_i_80=45879.580160000005
 [S15 DEBUG] 💰 All energy prices from S04: elec=$0, gas=$0, propane=$0, oil=$0, wood=$0
 [S15 DEBUG] 🧮 D141 calculation: 220216.85125050816 kWh/m²/yr × $0/kWh = $0.00
 🔍 S15 REFERENCE UPSTREAM: ref_i_104=0, ref_m_121=84594.73968, ref_i_80=0
 [S15] Missing critical upstream Reference values: ref_g_101, ref_d_101, ref_i_104
calculateReferenceModel @ 4011-Section15.js:1366
calculateAll @ 4011-Section15.js:1286
(anonymous) @ 4011-Section15.js:1945
(anonymous) @ 4011-StateManager.js:486
notifyListeners @ 4011-StateManager.js:484
setValue @ 4011-StateManager.js:362
window.TEUI.StateManager.setValue @ 4011-ComponentBridge.js:429
setCalculatedValue @ 4011-Section01.js:383
calculateTargetModel @ 4011-Section01.js:577
runAllCalculations @ 4011-Section01.js:1234
updateSubtotals @ 4011-Section04.js:1663
updateGridIntensityForMode @ 4011-Section04.js:1456
updateElectricityEmissionFactor @ 4011-Section04.js:1345
forceEmissionsFactorUpdate @ 4011-SectionIntegrator.js:516
initializeEmissionsFactorIntegration @ 4011-SectionIntegrator.js:497
(anonymous) @ 4011-SectionIntegrator.js:187
initializeAllIntegrations @ 4011-SectionIntegrator.js:184
(anonymous) @ 4011-SectionIntegrator.js:106
renderAllSections @ 4011-FieldManager.js:398
(anonymous) @ index.html:1009Understand this warningAI
 ✅ S15 Reference Model: All values converted to numbers for proper math
 ✅ S15 Reference Model: Additional fuel variables declared for cost calculations
 [S15 DEBUG] 💰 Electricity price from S04: raw="$0.1300" → parsed=$0/kWh
 🔍 S15 TARGET UPSTREAM: target_i_104=116070.33, target_m_121=48980.79999999999, target_i_80=45879.580160000005
 [S15 DEBUG] 💰 All energy prices from S04: elec=$0, gas=$0, propane=$0, oil=$0, wood=$0
 🔍 S15 REFERENCE UPSTREAM: ref_i_104=0, ref_m_121=84594.73968, ref_i_80=0
 [S15] Missing critical upstream Reference values: ref_g_101, ref_d_101, ref_i_104
calculateReferenceModel @ 4011-Section15.js:1366
calculateAll @ 4011-Section15.js:1286
(anonymous) @ 4011-Section15.js:1945
(anonymous) @ 4011-StateManager.js:486
notifyListeners @ 4011-StateManager.js:484
setValue @ 4011-StateManager.js:362
window.TEUI.StateManager.setValue @ 4011-ComponentBridge.js:429
calculateValues @ 4011-Section15.js:1705
calculateTargetModel @ 4011-Section15.js:1563
calculateAll @ 4011-Section15.js:1287
(anonymous) @ 4011-Section15.js:1945
(anonymous) @ 4011-StateManager.js:486
notifyListeners @ 4011-StateManager.js:484
setValue @ 4011-StateManager.js:362
window.TEUI.StateManager.setValue @ 4011-ComponentBridge.js:429
setCalculatedValue @ 4011-Section01.js:383
calculateTargetModel @ 4011-Section01.js:577
runAllCalculations @ 4011-Section01.js:1234
updateSubtotals @ 4011-Section04.js:1663
updateGridIntensityForMode @ 4011-Section04.js:1456
updateElectricityEmissionFactor @ 4011-Section04.js:1345
forceEmissionsFactorUpdate @ 4011-SectionIntegrator.js:516
initializeEmissionsFactorIntegration @ 4011-SectionIntegrator.js:497
(anonymous) @ 4011-SectionIntegrator.js:187
initializeAllIntegrations @ 4011-SectionIntegrator.js:184
(anonymous) @ 4011-SectionIntegrator.js:106
renderAllSections @ 4011-FieldManager.js:398
(anonymous) @ index.html:1009Understand this warningAI
 ✅ S15 Reference Model: All values converted to numbers for proper math
 ✅ S15 Reference Model: Additional fuel variables declared for cost calculations
 [S15 DEBUG] 💰 Electricity price from S04: raw="$0.1300" → parsed=$0/kWh
 🔍 S15 TARGET UPSTREAM: target_i_104=116070.33, target_m_121=48980.79999999999, target_i_80=45879.580160000005
 [S15 DEBUG] 💰 All energy prices from S04: elec=$0, gas=$0, propane=$0, oil=$0, wood=$0
 [S15 DEBUG] 🧮 D141 calculation: 220216.85125050816 kWh/m²/yr × $0/kWh = $0.00
 🔍 S15 REFERENCE UPSTREAM: ref_i_104=0, ref_m_121=84594.73968, ref_i_80=0
 [S15] Missing critical upstream Reference values: ref_g_101, ref_d_101, ref_i_104
calculateReferenceModel @ 4011-Section15.js:1366
calculateAll @ 4011-Section15.js:1286
(anonymous) @ 4011-Section15.js:1945
(anonymous) @ 4011-StateManager.js:486
notifyListeners @ 4011-StateManager.js:484
setValue @ 4011-StateManager.js:362
window.TEUI.StateManager.setValue @ 4011-ComponentBridge.js:429
calculateValues @ 4011-Section15.js:1705
calculateTargetModel @ 4011-Section15.js:1563
calculateAll @ 4011-Section15.js:1287
(anonymous) @ 4011-Section15.js:1945
(anonymous) @ 4011-StateManager.js:486
notifyListeners @ 4011-StateManager.js:484
setValue @ 4011-StateManager.js:362
window.TEUI.StateManager.setValue @ 4011-ComponentBridge.js:429
setCalculatedValue @ 4011-Section01.js:383
calculateTargetModel @ 4011-Section01.js:577
runAllCalculations @ 4011-Section01.js:1234
updateSubtotals @ 4011-Section04.js:1663
updateGridIntensityForMode @ 4011-Section04.js:1456
updateElectricityEmissionFactor @ 4011-Section04.js:1345
forceEmissionsFactorUpdate @ 4011-SectionIntegrator.js:516
initializeEmissionsFactorIntegration @ 4011-SectionIntegrator.js:497
(anonymous) @ 4011-SectionIntegrator.js:187
initializeAllIntegrations @ 4011-SectionIntegrator.js:184
(anonymous) @ 4011-SectionIntegrator.js:106
renderAllSections @ 4011-FieldManager.js:398
(anonymous) @ index.html:1009Understand this warningAI
 ✅ S15 Reference Model: All values converted to numbers for proper math
 ✅ S15 Reference Model: Additional fuel variables declared for cost calculations
 [S15 DEBUG] 💰 Electricity price from S04: raw="$0.1300" → parsed=$0/kWh
 🔍 S15 TARGET UPSTREAM: target_i_104=116070.33, target_m_121=48980.79999999999, target_i_80=45879.580160000005
 [S15 DEBUG] 💰 All energy prices from S04: elec=$0, gas=$0, propane=$0, oil=$0, wood=$0
 [S15 DEBUG] 🧮 D141 calculation: 220216.85125050816 kWh/m²/yr × $0/kWh = $0.00
 [S15 DEBUG] 🧮 D141 calculation: 220216.85125050816 kWh/m²/yr × $0/kWh = $0.00
 🔍 S15 REFERENCE UPSTREAM: ref_i_104=0, ref_m_121=84594.73968, ref_i_80=0
 [S15] Missing critical upstream Reference values: ref_g_101, ref_d_101, ref_i_104
calculateReferenceModel @ 4011-Section15.js:1366
calculateAll @ 4011-Section15.js:1286
(anonymous) @ 4011-Section15.js:1945
(anonymous) @ 4011-StateManager.js:486
notifyListeners @ 4011-StateManager.js:484
setValue @ 4011-StateManager.js:362
window.TEUI.StateManager.setValue @ 4011-ComponentBridge.js:429
setCalculatedValue @ 4011-Section01.js:383
calculateTargetModel @ 4011-Section01.js:577
runAllCalculations @ 4011-Section01.js:1234
updateSubtotals @ 4011-Section04.js:1663
updateGridIntensityForMode @ 4011-Section04.js:1456
updateElectricityEmissionFactor @ 4011-Section04.js:1345
forceEmissionsFactorUpdate @ 4011-SectionIntegrator.js:516
initializeEmissionsFactorIntegration @ 4011-SectionIntegrator.js:497
(anonymous) @ 4011-SectionIntegrator.js:187
initializeAllIntegrations @ 4011-SectionIntegrator.js:184
(anonymous) @ 4011-SectionIntegrator.js:106
renderAllSections @ 4011-FieldManager.js:398
(anonymous) @ index.html:1009Understand this warningAI
 ✅ S15 Reference Model: All values converted to numbers for proper math
 ✅ S15 Reference Model: Additional fuel variables declared for cost calculations
 [S15 DEBUG] 💰 Electricity price from S04: raw="$0.1300" → parsed=$0/kWh
 🔍 S15 TARGET UPSTREAM: target_i_104=116070.33, target_m_121=48980.79999999999, target_i_80=45879.580160000005
 [S15 DEBUG] 💰 All energy prices from S04: elec=$0, gas=$0, propane=$0, oil=$0, wood=$0
 [S15 DEBUG] 🧮 D141 calculation: 220216.85125050816 kWh/m²/yr × $0/kWh = $0.00
 🔍 S15 REFERENCE UPSTREAM: ref_i_104=0, ref_m_121=84594.73968, ref_i_80=0
 [S15] Missing critical upstream Reference values: ref_g_101, ref_d_101, ref_i_104
calculateReferenceModel @ 4011-Section15.js:1366
calculateAll @ 4011-Section15.js:1286
forceTEDITELIUpdate @ 4011-SectionIntegrator.js:305
initializeTEDITELIIntegration @ 4011-SectionIntegrator.js:241
(anonymous) @ 4011-SectionIntegrator.js:187
initializeAllIntegrations @ 4011-SectionIntegrator.js:184
(anonymous) @ 4011-SectionIntegrator.js:106
renderAllSections @ 4011-FieldManager.js:398
(anonymous) @ index.html:1009Understand this warningAI
 ✅ S15 Reference Model: All values converted to numbers for proper math
 ✅ S15 Reference Model: Additional fuel variables declared for cost calculations
 [S15 DEBUG] 💰 Electricity price from S04: raw="$0.1300" → parsed=$0/kWh
 🔍 S15 TARGET UPSTREAM: target_i_104=116070.33, target_m_121=48980.79999999999, target_i_80=45879.580160000005
 [S15 DEBUG] 💰 All energy prices from S04: elec=$0, gas=$0, propane=$0, oil=$0, wood=$0
 [S15 DEBUG] 🧮 D141 calculation: 220216.85125050816 kWh/m²/yr × $0/kWh = $0.00
 🔍 S15 REFERENCE UPSTREAM: ref_i_104=0, ref_m_121=84594.73968, ref_i_80=0
 [S15] Missing critical upstream Reference values: ref_g_101, ref_d_101, ref_i_104
calculateReferenceModel @ 4011-Section15.js:1366
calculateAll @ 4011-Section15.js:1286
(anonymous) @ 4011-Section15.js:1945
(anonymous) @ 4011-StateManager.js:486
notifyListeners @ 4011-StateManager.js:484
setValue @ 4011-StateManager.js:362
window.TEUI.StateManager.setValue @ 4011-ComponentBridge.js:429
setCalculatedValue @ 4011-Section01.js:383
calculateTargetModel @ 4011-Section01.js:577
runAllCalculations @ 4011-Section01.js:1234
updateSubtotals @ 4011-Section04.js:1663
updateGridIntensityForMode @ 4011-Section04.js:1456
updateElectricityEmissionFactor @ 4011-Section04.js:1345
forceEmissionsFactorUpdate @ 4011-SectionIntegrator.js:516
initializeEmissionsFactorIntegration @ 4011-SectionIntegrator.js:497
(anonymous) @ 4011-SectionIntegrator.js:187
initializeAllIntegrations @ 4011-SectionIntegrator.js:184
(anonymous) @ 4011-SectionIntegrator.js:106
renderAllSections @ 4011-FieldManager.js:398
(anonymous) @ index.html:1009Understand this warningAI
 ✅ S15 Reference Model: All values converted to numbers for proper math
 ✅ S15 Reference Model: Additional fuel variables declared for cost calculations
 [S15 DEBUG] 💰 Electricity price from S04: raw="$0.1300" → parsed=$0/kWh
 🔍 S15 TARGET UPSTREAM: target_i_104=116070.33, target_m_121=48980.79999999999, target_i_80=45879.580160000005
 [S15 DEBUG] 💰 All energy prices from S04: elec=$0, gas=$0, propane=$0, oil=$0, wood=$0
 🔍 S15 REFERENCE UPSTREAM: ref_i_104=0, ref_m_121=84594.73968, ref_i_80=0
 [S15] Missing critical upstream Reference values: ref_g_101, ref_d_101, ref_i_104
calculateReferenceModel @ 4011-Section15.js:1366
calculateAll @ 4011-Section15.js:1286
(anonymous) @ 4011-Section15.js:1945
(anonymous) @ 4011-StateManager.js:486
notifyListeners @ 4011-StateManager.js:484
setValue @ 4011-StateManager.js:362
window.TEUI.StateManager.setValue @ 4011-ComponentBridge.js:429
calculateValues @ 4011-Section15.js:1705
calculateTargetModel @ 4011-Section15.js:1563
calculateAll @ 4011-Section15.js:1287
(anonymous) @ 4011-Section15.js:1945
(anonymous) @ 4011-StateManager.js:486
notifyListeners @ 4011-StateManager.js:484
setValue @ 4011-StateManager.js:362
window.TEUI.StateManager.setValue @ 4011-ComponentBridge.js:429
setCalculatedValue @ 4011-Section01.js:383
calculateTargetModel @ 4011-Section01.js:577
runAllCalculations @ 4011-Section01.js:1234
updateSubtotals @ 4011-Section04.js:1663
updateGridIntensityForMode @ 4011-Section04.js:1456
updateElectricityEmissionFactor @ 4011-Section04.js:1345
forceEmissionsFactorUpdate @ 4011-SectionIntegrator.js:516
initializeEmissionsFactorIntegration @ 4011-SectionIntegrator.js:497
(anonymous) @ 4011-SectionIntegrator.js:187
initializeAllIntegrations @ 4011-SectionIntegrator.js:184
(anonymous) @ 4011-SectionIntegrator.js:106
renderAllSections @ 4011-FieldManager.js:398
(anonymous) @ index.html:1009Understand this warningAI
 ✅ S15 Reference Model: All values converted to numbers for proper math
 ✅ S15 Reference Model: Additional fuel variables declared for cost calculations
 [S15 DEBUG] 💰 Electricity price from S04: raw="$0.1300" → parsed=$0/kWh
 🔍 S15 TARGET UPSTREAM: target_i_104=116070.33, target_m_121=48980.79999999999, target_i_80=45879.580160000005
 [S15 DEBUG] 💰 All energy prices from S04: elec=$0, gas=$0, propane=$0, oil=$0, wood=$0
 [S15 DEBUG] 🧮 D141 calculation: 220216.85125050816 kWh/m²/yr × $0/kWh = $0.00
 🔍 S15 REFERENCE UPSTREAM: ref_i_104=0, ref_m_121=84594.73968, ref_i_80=0
 [S15] Missing critical upstream Reference values: ref_g_101, ref_d_101, ref_i_104
calculateReferenceModel @ 4011-Section15.js:1366
calculateAll @ 4011-Section15.js:1286
(anonymous) @ 4011-Section15.js:1945
(anonymous) @ 4011-StateManager.js:486
notifyListeners @ 4011-StateManager.js:484
setValue @ 4011-StateManager.js:362
window.TEUI.StateManager.setValue @ 4011-ComponentBridge.js:429
calculateValues @ 4011-Section15.js:1705
calculateTargetModel @ 4011-Section15.js:1563
calculateAll @ 4011-Section15.js:1287
(anonymous) @ 4011-Section15.js:1945
(anonymous) @ 4011-StateManager.js:486
notifyListeners @ 4011-StateManager.js:484
setValue @ 4011-StateManager.js:362
window.TEUI.StateManager.setValue @ 4011-ComponentBridge.js:429
setCalculatedValue @ 4011-Section01.js:383
calculateTargetModel @ 4011-Section01.js:577
runAllCalculations @ 4011-Section01.js:1234
updateSubtotals @ 4011-Section04.js:1663
updateGridIntensityForMode @ 4011-Section04.js:1456
updateElectricityEmissionFactor @ 4011-Section04.js:1345
forceEmissionsFactorUpdate @ 4011-SectionIntegrator.js:516
initializeEmissionsFactorIntegration @ 4011-SectionIntegrator.js:497
(anonymous) @ 4011-SectionIntegrator.js:187
initializeAllIntegrations @ 4011-SectionIntegrator.js:184
(anonymous) @ 4011-SectionIntegrator.js:106
renderAllSections @ 4011-FieldManager.js:398
(anonymous) @ index.html:1009Understand this warningAI
 ✅ S15 Reference Model: All values converted to numbers for proper math
 ✅ S15 Reference Model: Additional fuel variables declared for cost calculations
 [S15 DEBUG] 💰 Electricity price from S04: raw="$0.1300" → parsed=$0/kWh
 🔍 S15 TARGET UPSTREAM: target_i_104=116070.33, target_m_121=48980.79999999999, target_i_80=45879.580160000005
 [S15 DEBUG] 💰 All energy prices from S04: elec=$0, gas=$0, propane=$0, oil=$0, wood=$0
 [S15 DEBUG] 🧮 D141 calculation: 220216.85125050816 kWh/m²/yr × $0/kWh = $0.00
 [S15 DEBUG] 🧮 D141 calculation: 220216.85125050816 kWh/m²/yr × $0/kWh = $0.00
 🔍 S15 REFERENCE UPSTREAM: ref_i_104=0, ref_m_121=84594.73968, ref_i_80=0
 [S15] Missing critical upstream Reference values: ref_g_101, ref_d_101, ref_i_104
calculateReferenceModel @ 4011-Section15.js:1366
calculateAll @ 4011-Section15.js:1286
(anonymous) @ 4011-Section15.js:1945
(anonymous) @ 4011-StateManager.js:486
notifyListeners @ 4011-StateManager.js:484
setValue @ 4011-StateManager.js:362
window.TEUI.StateManager.setValue @ 4011-ComponentBridge.js:429
setCalculatedValue @ 4011-Section01.js:383
calculateTargetModel @ 4011-Section01.js:577
runAllCalculations @ 4011-Section01.js:1234
updateSubtotals @ 4011-Section04.js:1663
updateGridIntensityForMode @ 4011-Section04.js:1456
updateElectricityEmissionFactor @ 4011-Section04.js:1345
forceEmissionsFactorUpdate @ 4011-SectionIntegrator.js:516
initializeEmissionsFactorIntegration @ 4011-SectionIntegrator.js:497
(anonymous) @ 4011-SectionIntegrator.js:187
initializeAllIntegrations @ 4011-SectionIntegrator.js:184
(anonymous) @ 4011-SectionIntegrator.js:106
renderAllSections @ 4011-FieldManager.js:398
(anonymous) @ index.html:1009Understand this warningAI
 ✅ S15 Reference Model: All values converted to numbers for proper math
 ✅ S15 Reference Model: Additional fuel variables declared for cost calculations
 [S15 DEBUG] 💰 Electricity price from S04: raw="$0.1300" → parsed=$0/kWh
 🔍 S15 TARGET UPSTREAM: target_i_104=116070.33, target_m_121=48980.79999999999, target_i_80=45879.580160000005
 [S15 DEBUG] 💰 All energy prices from S04: elec=$0, gas=$0, propane=$0, oil=$0, wood=$0
 [S15 DEBUG] 🧮 D141 calculation: 220216.85125050816 kWh/m²/yr × $0/kWh = $0.00
 🔍 S15 REFERENCE UPSTREAM: ref_i_104=0, ref_m_121=84594.73968, ref_i_80=0
 [S15] Missing critical upstream Reference values: ref_g_101, ref_d_101, ref_i_104
calculateReferenceModel @ 4011-Section15.js:1366
calculateAll @ 4011-Section15.js:1286
forceTEDITELIUpdate @ 4011-SectionIntegrator.js:305
initializeTEDITELIIntegration @ 4011-SectionIntegrator.js:241
(anonymous) @ 4011-SectionIntegrator.js:187
initializeAllIntegrations @ 4011-SectionIntegrator.js:184
(anonymous) @ 4011-SectionIntegrator.js:106
renderAllSections @ 4011-FieldManager.js:398
(anonymous) @ index.html:1009Understand this warningAI
 ✅ S15 Reference Model: All values converted to numbers for proper math
 ✅ S15 Reference Model: Additional fuel variables declared for cost calculations
 [S15 DEBUG] 💰 Electricity price from S04: raw="$0.1300" → parsed=$0/kWh
 🔍 S15 TARGET UPSTREAM: target_i_104=116070.33, target_m_121=48980.79999999999, target_i_80=45879.580160000005
 [S15 DEBUG] 💰 All energy prices from S04: elec=$0, gas=$0, propane=$0, oil=$0, wood=$0
 [S15 DEBUG] 🧮 D141 calculation: 220216.85125050816 kWh/m²/yr × $0/kWh = $0.00
 🔄 ComponentBridge: Dual-state sync already initialized
 S02: Target defaults set
 S02: Reference defaults set
 S02: Pattern A initialization complete.
 [S02] Switched to REFERENCE mode
 [S02] Switched to TARGET mode
 [S02] Switched to TARGET mode
 [S02] Switched to TARGET mode
 S03: Sliders initialized via FieldManager
 S03: Section rendered - initializing Self-Contained State Module.
 S03: ModeManager exposed globally for cross-section integration.
 S03: Checking climate data availability (attempt 1/10)
 S03: Climate data available (8) ['BC', 'AB', 'SK', 'MB', 'ON', 'QC', 'NU', 'NT']
 S03: ClimateData available - initializing dropdowns
 S03: Populated province dropdown with options: (8) ['AB', 'BC', 'MB', 'NT', 'NU', 'ON', 'QC', 'SK']
 City dropdown updated for ON - selected: Alexandria
 S03: Sliders initialized via FieldManager
 [Section03] Running Reference Model calculations...
 [Section03] Reference results stored with ref_ prefix for downstream sections: {h_23: '18', d_23: undefined, d_24: undefined, h_24: '24', d_20: undefined, …}
 [Section03] Reference Model calculations complete
 S03: Weather data updated for Alexandria, ON (Present)
 Section03: Province selected: ON
 City dropdown updated for ON - selected: Alexandria
 [Section03] Running Reference Model calculations...
 [Section03] Reference results stored with ref_ prefix for downstream sections: {h_23: '18', d_23: undefined, d_24: undefined, h_24: '24', d_20: undefined, …}
 [Section03] Reference Model calculations complete
 S03: Weather data updated for Alexandria, ON (Present)
 [Section03] Running Reference Model calculations...
 [Section03] Reference results stored with ref_ prefix for downstream sections: {h_23: '18', d_23: undefined, d_24: undefined, h_24: '24', d_20: undefined, …}
 [Section03] Reference Model calculations complete
 S03: Self-Contained State Module initialization complete
 S04: Target defaults set
 S04: Reference defaults set
 S04: Pattern A initialization complete.
 [S02] Switched to REFERENCE mode
 [S02] Switched to TARGET mode
 [S02] Switched to TARGET mode
 [S02] Switched to TARGET mode
 [S02] Switched to REFERENCE mode
 [S02] Switched to TARGET mode
 [S02] Switched to TARGET mode
 [S02] Switched to TARGET mode
 [S02] Switched to REFERENCE mode
 [S02] Switched to TARGET mode
 [S02] Switched to TARGET mode
 [S02] Switched to TARGET mode
 [S02] Switched to REFERENCE mode
 [S02] Switched to TARGET mode
 [S02] Switched to TARGET mode
 [S02] Switched to TARGET mode
 [S02] Switched to REFERENCE mode
 [S02] Switched to TARGET mode
 [S02] Switched to TARGET mode
 [S02] Switched to TARGET mode
 [S02] Switched to REFERENCE mode
 [S02] Switched to TARGET mode
 [S02] Switched to TARGET mode
 [S02] Switched to TARGET mode
 [S02] Switched to REFERENCE mode
 [S02] Switched to TARGET mode
 [S02] Switched to TARGET mode
 [S02] Switched to TARGET mode
 [S02] Switched to REFERENCE mode
 [S02] Switched to TARGET mode
 [S02] Switched to TARGET mode
 [S02] Switched to TARGET mode
2 S04 REFERENCE MODEL: ref_j_32=132765.65, ref_k_32=6771.04815
2 S04 REFERENCE MODEL: ref_j_32=132765.65, ref_k_32=6771.04815
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
 S10: Global listener triggered by i_97, recalculating all.
 S10: Utilization factor dependency i_97 changed.
 S10: Global listener triggered by i_98, recalculating all.
 S10: Utilization factor dependency i_98 changed.
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
calculateReferenceModel @ 4011-Section15.js:1366
calculateAll @ 4011-Section15.js:1286
initializeEventHandlers @ 4011-Section15.js:2007
initializeSectionEventHandlers @ 4011-FieldManager.js:310
renderSection @ 4011-FieldManager.js:367
(anonymous) @ 4011-FieldManager.js:394
renderAllSections @ 4011-FieldManager.js:393
initialize @ 4011-Calculator.js:66
(anonymous) @ index.html:1029Understand this warningAI
 ✅ S15 Reference Model: All values converted to numbers for proper math
 ✅ S15 Reference Model: Additional fuel variables declared for cost calculations
2 S04 REFERENCE MODEL: ref_j_32=132765.65, ref_k_32=6771.04815
 🔍 S15 REFERENCE UPSTREAM: ref_i_104=0, ref_m_121=84594.73968, ref_i_80=0
 [S15] Missing critical upstream Reference values: ref_g_101, ref_d_101, ref_i_104
calculateReferenceModel @ 4011-Section15.js:1366
calculateAll @ 4011-Section15.js:1286
(anonymous) @ 4011-Section15.js:1945
(anonymous) @ 4011-StateManager.js:486
notifyListeners @ 4011-StateManager.js:484
setValue @ 4011-StateManager.js:362
window.TEUI.StateManager.setValue @ 4011-ComponentBridge.js:429
setCalculatedValue @ 4011-Section01.js:376
calculateReferenceModel @ 4011-Section01.js:478
runAllCalculations @ 4011-Section01.js:1233
(anonymous) @ 4011-Section01.js:1306
(anonymous) @ 4011-StateManager.js:486
notifyListeners @ 4011-StateManager.js:484
setValue @ 4011-StateManager.js:344
window.TEUI.StateManager.setValue @ 4011-ComponentBridge.js:429
setRefValueIfChanged @ 4011-Section15.js:1315
calculateReferenceModel @ 4011-Section15.js:1421
calculateAll @ 4011-Section15.js:1286
initializeEventHandlers @ 4011-Section15.js:2007
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
calculateReferenceModel @ 4011-Section15.js:1366
calculateAll @ 4011-Section15.js:1286
(anonymous) @ 4011-Section15.js:1945
(anonymous) @ 4011-StateManager.js:486
notifyListeners @ 4011-StateManager.js:484
setValue @ 4011-StateManager.js:362
window.TEUI.StateManager.setValue @ 4011-ComponentBridge.js:429
calculateReferenceModel @ 4011-Section15.js:1515
calculateAll @ 4011-Section15.js:1286
(anonymous) @ 4011-Section15.js:1945
(anonymous) @ 4011-StateManager.js:486
notifyListeners @ 4011-StateManager.js:484
setValue @ 4011-StateManager.js:362
window.TEUI.StateManager.setValue @ 4011-ComponentBridge.js:429
setCalculatedValue @ 4011-Section01.js:376
calculateReferenceModel @ 4011-Section01.js:478
runAllCalculations @ 4011-Section01.js:1233
(anonymous) @ 4011-Section01.js:1306
(anonymous) @ 4011-StateManager.js:486
notifyListeners @ 4011-StateManager.js:484
setValue @ 4011-StateManager.js:344
window.TEUI.StateManager.setValue @ 4011-ComponentBridge.js:429
setRefValueIfChanged @ 4011-Section15.js:1315
calculateReferenceModel @ 4011-Section15.js:1421
calculateAll @ 4011-Section15.js:1286
initializeEventHandlers @ 4011-Section15.js:2007
initializeSectionEventHandlers @ 4011-FieldManager.js:310
renderSection @ 4011-FieldManager.js:367
(anonymous) @ 4011-FieldManager.js:394
renderAllSections @ 4011-FieldManager.js:393
initialize @ 4011-Calculator.js:66
(anonymous) @ index.html:1029Understand this warningAI
 ✅ S15 Reference Model: All values converted to numbers for proper math
 ✅ S15 Reference Model: Additional fuel variables declared for cost calculations
 [S15 DEBUG] 💰 Electricity price from S04: raw="$0.1300" → parsed=$0/kWh
 🔍 S15 TARGET UPSTREAM: target_i_104=116070.33, target_m_121=48980.79999999999, target_i_80=45879.580160000005
 [S15 DEBUG] 💰 All energy prices from S04: elec=$0, gas=$0, propane=$0, oil=$0, wood=$0
 🔍 S15 REFERENCE UPSTREAM: ref_i_104=0, ref_m_121=84594.73968, ref_i_80=0
 [S15] Missing critical upstream Reference values: ref_g_101, ref_d_101, ref_i_104
calculateReferenceModel @ 4011-Section15.js:1366
calculateAll @ 4011-Section15.js:1286
(anonymous) @ 4011-Section15.js:1945
(anonymous) @ 4011-StateManager.js:486
notifyListeners @ 4011-StateManager.js:484
setValue @ 4011-StateManager.js:362
updateTEUICalculations @ 4011-StateManager.js:929
(anonymous) @ 4011-StateManager.js:199
(anonymous) @ 4011-StateManager.js:486
notifyListeners @ 4011-StateManager.js:484
setValue @ 4011-StateManager.js:362
window.TEUI.StateManager.setValue @ 4011-ComponentBridge.js:429
setCalculatedValue @ 4011-Section04.js:82
updateSubtotals @ 4011-Section04.js:1687
handleD136Update @ 4011-Section04.js:1180
(anonymous) @ 4011-StateManager.js:486
notifyListeners @ 4011-StateManager.js:484
setValue @ 4011-StateManager.js:362
window.TEUI.StateManager.setValue @ 4011-ComponentBridge.js:429
setCalculatedValue @ 4011-Section15.js:122
calculateValues @ 4011-Section15.js:1693
calculateTargetModel @ 4011-Section15.js:1563
calculateAll @ 4011-Section15.js:1287
(anonymous) @ 4011-Section15.js:1945
(anonymous) @ 4011-StateManager.js:486
notifyListeners @ 4011-StateManager.js:484
setValue @ 4011-StateManager.js:362
window.TEUI.StateManager.setValue @ 4011-ComponentBridge.js:429
calculateReferenceModel @ 4011-Section15.js:1515
calculateAll @ 4011-Section15.js:1286
(anonymous) @ 4011-Section15.js:1945
(anonymous) @ 4011-StateManager.js:486
notifyListeners @ 4011-StateManager.js:484
setValue @ 4011-StateManager.js:362
window.TEUI.StateManager.setValue @ 4011-ComponentBridge.js:429
setCalculatedValue @ 4011-Section01.js:376
calculateReferenceModel @ 4011-Section01.js:478
runAllCalculations @ 4011-Section01.js:1233
(anonymous) @ 4011-Section01.js:1306
(anonymous) @ 4011-StateManager.js:486
notifyListeners @ 4011-StateManager.js:484
setValue @ 4011-StateManager.js:344
window.TEUI.StateManager.setValue @ 4011-ComponentBridge.js:429
setRefValueIfChanged @ 4011-Section15.js:1315
calculateReferenceModel @ 4011-Section15.js:1421
calculateAll @ 4011-Section15.js:1286
initializeEventHandlers @ 4011-Section15.js:2007
initializeSectionEventHandlers @ 4011-FieldManager.js:310
renderSection @ 4011-FieldManager.js:367
(anonymous) @ 4011-FieldManager.js:394
renderAllSections @ 4011-FieldManager.js:393
initialize @ 4011-Calculator.js:66
(anonymous) @ index.html:1029Understand this warningAI
 ✅ S15 Reference Model: All values converted to numbers for proper math
 ✅ S15 Reference Model: Additional fuel variables declared for cost calculations
 [S15 DEBUG] 💰 Electricity price from S04: raw="$0.1300" → parsed=$0/kWh
 🔍 S15 TARGET UPSTREAM: target_i_104=116070.33, target_m_121=48980.79999999999, target_i_80=45879.580160000005
 [S15 DEBUG] 💰 All energy prices from S04: elec=$0, gas=$0, propane=$0, oil=$0, wood=$0
 🔍 S15 REFERENCE UPSTREAM: ref_i_104=0, ref_m_121=84594.73968, ref_i_80=0
 [S15] Missing critical upstream Reference values: ref_g_101, ref_d_101, ref_i_104
calculateReferenceModel @ 4011-Section15.js:1366
calculateAll @ 4011-Section15.js:1286
(anonymous) @ 4011-Section15.js:1945
(anonymous) @ 4011-StateManager.js:486
notifyListeners @ 4011-StateManager.js:484
setValue @ 4011-StateManager.js:362
window.TEUI.StateManager.setValue @ 4011-ComponentBridge.js:429
calculateValues @ 4011-Section15.js:1705
calculateTargetModel @ 4011-Section15.js:1563
calculateAll @ 4011-Section15.js:1287
(anonymous) @ 4011-Section15.js:1945
(anonymous) @ 4011-StateManager.js:486
notifyListeners @ 4011-StateManager.js:484
setValue @ 4011-StateManager.js:362
updateTEUICalculations @ 4011-StateManager.js:929
(anonymous) @ 4011-StateManager.js:199
(anonymous) @ 4011-StateManager.js:486
notifyListeners @ 4011-StateManager.js:484
setValue @ 4011-StateManager.js:362
window.TEUI.StateManager.setValue @ 4011-ComponentBridge.js:429
setCalculatedValue @ 4011-Section04.js:82
updateSubtotals @ 4011-Section04.js:1687
handleD136Update @ 4011-Section04.js:1180
(anonymous) @ 4011-StateManager.js:486
notifyListeners @ 4011-StateManager.js:484
setValue @ 4011-StateManager.js:362
window.TEUI.StateManager.setValue @ 4011-ComponentBridge.js:429
setCalculatedValue @ 4011-Section15.js:122
calculateValues @ 4011-Section15.js:1693
calculateTargetModel @ 4011-Section15.js:1563
calculateAll @ 4011-Section15.js:1287
(anonymous) @ 4011-Section15.js:1945
(anonymous) @ 4011-StateManager.js:486
notifyListeners @ 4011-StateManager.js:484
setValue @ 4011-StateManager.js:362
window.TEUI.StateManager.setValue @ 4011-ComponentBridge.js:429
calculateReferenceModel @ 4011-Section15.js:1515
calculateAll @ 4011-Section15.js:1286
(anonymous) @ 4011-Section15.js:1945
(anonymous) @ 4011-StateManager.js:486
notifyListeners @ 4011-StateManager.js:484
setValue @ 4011-StateManager.js:362
window.TEUI.StateManager.setValue @ 4011-ComponentBridge.js:429
setCalculatedValue @ 4011-Section01.js:376
calculateReferenceModel @ 4011-Section01.js:478
runAllCalculations @ 4011-Section01.js:1233
(anonymous) @ 4011-Section01.js:1306
(anonymous) @ 4011-StateManager.js:486
notifyListeners @ 4011-StateManager.js:484
setValue @ 4011-StateManager.js:344
window.TEUI.StateManager.setValue @ 4011-ComponentBridge.js:429
setRefValueIfChanged @ 4011-Section15.js:1315
calculateReferenceModel @ 4011-Section15.js:1421
calculateAll @ 4011-Section15.js:1286
initializeEventHandlers @ 4011-Section15.js:2007
initializeSectionEventHandlers @ 4011-FieldManager.js:310
renderSection @ 4011-FieldManager.js:367
(anonymous) @ 4011-FieldManager.js:394
renderAllSections @ 4011-FieldManager.js:393
initialize @ 4011-Calculator.js:66
(anonymous) @ index.html:1029Understand this warningAI
 ✅ S15 Reference Model: All values converted to numbers for proper math
 ✅ S15 Reference Model: Additional fuel variables declared for cost calculations
 [S15 DEBUG] 💰 Electricity price from S04: raw="$0.1300" → parsed=$0/kWh
 🔍 S15 TARGET UPSTREAM: target_i_104=116070.33, target_m_121=48980.79999999999, target_i_80=45879.580160000005
 [S15 DEBUG] 💰 All energy prices from S04: elec=$0, gas=$0, propane=$0, oil=$0, wood=$0
 [S15 DEBUG] 🧮 D141 calculation: 220216.85125050816 kWh/m²/yr × $0/kWh = $0.00
 [S15 DEBUG] 🧮 D141 calculation: 220216.85125050816 kWh/m²/yr × $0/kWh = $0.00
 [S02] Switched to REFERENCE mode
 [S02] Switched to TARGET mode
 [S02] Switched to TARGET mode
 [S02] Switched to TARGET mode
 [S02] Switched to REFERENCE mode
 [S02] Switched to TARGET mode
 [S02] Switched to TARGET mode
 [S02] Switched to TARGET mode
 🔍 S15 REFERENCE UPSTREAM: ref_i_104=0, ref_m_121=84594.73968, ref_i_80=0
 [S15] Missing critical upstream Reference values: ref_g_101, ref_d_101, ref_i_104
calculateReferenceModel @ 4011-Section15.js:1366
calculateAll @ 4011-Section15.js:1286
(anonymous) @ 4011-Section15.js:1945
(anonymous) @ 4011-StateManager.js:486
notifyListeners @ 4011-StateManager.js:484
setValue @ 4011-StateManager.js:362
window.TEUI.StateManager.setValue @ 4011-ComponentBridge.js:429
setCalculatedValue @ 4011-Section04.js:82
updateSubtotals @ 4011-Section04.js:1698
handleD136Update @ 4011-Section04.js:1180
(anonymous) @ 4011-StateManager.js:486
notifyListeners @ 4011-StateManager.js:484
setValue @ 4011-StateManager.js:362
window.TEUI.StateManager.setValue @ 4011-ComponentBridge.js:429
setCalculatedValue @ 4011-Section15.js:122
calculateValues @ 4011-Section15.js:1693
calculateTargetModel @ 4011-Section15.js:1563
calculateAll @ 4011-Section15.js:1287
(anonymous) @ 4011-Section15.js:1945
(anonymous) @ 4011-StateManager.js:486
notifyListeners @ 4011-StateManager.js:484
setValue @ 4011-StateManager.js:362
window.TEUI.StateManager.setValue @ 4011-ComponentBridge.js:429
calculateReferenceModel @ 4011-Section15.js:1515
calculateAll @ 4011-Section15.js:1286
(anonymous) @ 4011-Section15.js:1945
(anonymous) @ 4011-StateManager.js:486
notifyListeners @ 4011-StateManager.js:484
setValue @ 4011-StateManager.js:362
window.TEUI.StateManager.setValue @ 4011-ComponentBridge.js:429
setCalculatedValue @ 4011-Section01.js:376
calculateReferenceModel @ 4011-Section01.js:478
runAllCalculations @ 4011-Section01.js:1233
(anonymous) @ 4011-Section01.js:1306
(anonymous) @ 4011-StateManager.js:486
notifyListeners @ 4011-StateManager.js:484
setValue @ 4011-StateManager.js:344
window.TEUI.StateManager.setValue @ 4011-ComponentBridge.js:429
setRefValueIfChanged @ 4011-Section15.js:1315
calculateReferenceModel @ 4011-Section15.js:1421
calculateAll @ 4011-Section15.js:1286
initializeEventHandlers @ 4011-Section15.js:2007
initializeSectionEventHandlers @ 4011-FieldManager.js:310
renderSection @ 4011-FieldManager.js:367
(anonymous) @ 4011-FieldManager.js:394
renderAllSections @ 4011-FieldManager.js:393
initialize @ 4011-Calculator.js:66
(anonymous) @ index.html:1029Understand this warningAI
 ✅ S15 Reference Model: All values converted to numbers for proper math
 ✅ S15 Reference Model: Additional fuel variables declared for cost calculations
 [S15 DEBUG] 💰 Electricity price from S04: raw="$0.1300" → parsed=$0/kWh
 🔍 S15 TARGET UPSTREAM: target_i_104=116070.33, target_m_121=48980.79999999999, target_i_80=45879.580160000005
 [S15 DEBUG] 💰 All energy prices from S04: elec=$0, gas=$0, propane=$0, oil=$0, wood=$0
 [S15 DEBUG] 🧮 D141 calculation: 220216.85125050816 kWh/m²/yr × $0/kWh = $0.00
 [S15 DEBUG] 🧮 D141 calculation: 220216.85125050816 kWh/m²/yr × $0/kWh = $0.00
 [S15 DEBUG] 💰 Electricity price from S04: raw="$0.1300" → parsed=$0/kWh
 🔍 S15 TARGET UPSTREAM: target_i_104=116070.33, target_m_121=48980.79999999999, target_i_80=45879.580160000005
 [S15 DEBUG] 💰 All energy prices from S04: elec=$0, gas=$0, propane=$0, oil=$0, wood=$0
 [S15 DEBUG] 🧮 D141 calculation: 220216.85125050816 kWh/m²/yr × $0/kWh = $0.00
 🔍 S15 REFERENCE UPSTREAM: ref_i_104=0, ref_m_121=84594.73968, ref_i_80=0
 [S15] Missing critical upstream Reference values: ref_g_101, ref_d_101, ref_i_104
calculateReferenceModel @ 4011-Section15.js:1366
calculateAll @ 4011-Section15.js:1286
(anonymous) @ 4011-Section15.js:1945
(anonymous) @ 4011-StateManager.js:486
notifyListeners @ 4011-StateManager.js:484
setValue @ 4011-StateManager.js:362
window.TEUI.StateManager.setValue @ 4011-ComponentBridge.js:429
setCalculatedValue @ 4011-Section01.js:376
calculateTargetModel @ 4011-Section01.js:577
runAllCalculations @ 4011-Section01.js:1234
(anonymous) @ 4011-Section01.js:1306
(anonymous) @ 4011-StateManager.js:486
notifyListeners @ 4011-StateManager.js:484
setValue @ 4011-StateManager.js:344
window.TEUI.StateManager.setValue @ 4011-ComponentBridge.js:429
setRefValueIfChanged @ 4011-Section15.js:1315
calculateReferenceModel @ 4011-Section15.js:1421
calculateAll @ 4011-Section15.js:1286
initializeEventHandlers @ 4011-Section15.js:2007
initializeSectionEventHandlers @ 4011-FieldManager.js:310
renderSection @ 4011-FieldManager.js:367
(anonymous) @ 4011-FieldManager.js:394
renderAllSections @ 4011-FieldManager.js:393
initialize @ 4011-Calculator.js:66
(anonymous) @ index.html:1029Understand this warningAI
 ✅ S15 Reference Model: All values converted to numbers for proper math
 ✅ S15 Reference Model: Additional fuel variables declared for cost calculations
 [S15 DEBUG] 💰 Electricity price from S04: raw="$0.1300" → parsed=$0/kWh
 🔍 S15 TARGET UPSTREAM: target_i_104=116070.33, target_m_121=48980.79999999999, target_i_80=45879.580160000005
 [S15 DEBUG] 💰 All energy prices from S04: elec=$0, gas=$0, propane=$0, oil=$0, wood=$0
 [S15 DEBUG] 🧮 D141 calculation: 220216.85125050816 kWh/m²/yr × $0/kWh = $0.00
 🔍 S15 REFERENCE UPSTREAM: ref_i_104=0, ref_m_121=84594.73968, ref_i_80=0
 [S15] Missing critical upstream Reference values: ref_g_101, ref_d_101, ref_i_104
calculateReferenceModel @ 4011-Section15.js:1366
calculateAll @ 4011-Section15.js:1286
(anonymous) @ 4011-Section15.js:1945
(anonymous) @ 4011-StateManager.js:486
notifyListeners @ 4011-StateManager.js:484
setValue @ 4011-StateManager.js:362
window.TEUI.StateManager.setValue @ 4011-ComponentBridge.js:429
setCalculatedValue @ 4011-Section01.js:383
calculateTargetModel @ 4011-Section01.js:577
runAllCalculations @ 4011-Section01.js:1234
(anonymous) @ 4011-Section01.js:1306
(anonymous) @ 4011-StateManager.js:486
notifyListeners @ 4011-StateManager.js:484
setValue @ 4011-StateManager.js:344
window.TEUI.StateManager.setValue @ 4011-ComponentBridge.js:429
setRefValueIfChanged @ 4011-Section15.js:1315
calculateReferenceModel @ 4011-Section15.js:1421
calculateAll @ 4011-Section15.js:1286
initializeEventHandlers @ 4011-Section15.js:2007
initializeSectionEventHandlers @ 4011-FieldManager.js:310
renderSection @ 4011-FieldManager.js:367
(anonymous) @ 4011-FieldManager.js:394
renderAllSections @ 4011-FieldManager.js:393
initialize @ 4011-Calculator.js:66
(anonymous) @ index.html:1029Understand this warningAI
 ✅ S15 Reference Model: All values converted to numbers for proper math
 ✅ S15 Reference Model: Additional fuel variables declared for cost calculations
 [S15 DEBUG] 💰 Electricity price from S04: raw="$0.1300" → parsed=$0/kWh
 🔍 S15 TARGET UPSTREAM: target_i_104=116070.33, target_m_121=48980.79999999999, target_i_80=45879.580160000005
 [S15 DEBUG] 💰 All energy prices from S04: elec=$0, gas=$0, propane=$0, oil=$0, wood=$0
 🔍 S15 REFERENCE UPSTREAM: ref_i_104=0, ref_m_121=84594.73968, ref_i_80=0
 [S15] Missing critical upstream Reference values: ref_g_101, ref_d_101, ref_i_104
calculateReferenceModel @ 4011-Section15.js:1366
calculateAll @ 4011-Section15.js:1286
(anonymous) @ 4011-Section15.js:1945
(anonymous) @ 4011-StateManager.js:486
notifyListeners @ 4011-StateManager.js:484
setValue @ 4011-StateManager.js:362
window.TEUI.StateManager.setValue @ 4011-ComponentBridge.js:429
calculateValues @ 4011-Section15.js:1705
calculateTargetModel @ 4011-Section15.js:1563
calculateAll @ 4011-Section15.js:1287
(anonymous) @ 4011-Section15.js:1945
(anonymous) @ 4011-StateManager.js:486
notifyListeners @ 4011-StateManager.js:484
setValue @ 4011-StateManager.js:362
window.TEUI.StateManager.setValue @ 4011-ComponentBridge.js:429
setCalculatedValue @ 4011-Section01.js:383
calculateTargetModel @ 4011-Section01.js:577
runAllCalculations @ 4011-Section01.js:1234
(anonymous) @ 4011-Section01.js:1306
(anonymous) @ 4011-StateManager.js:486
notifyListeners @ 4011-StateManager.js:484
setValue @ 4011-StateManager.js:344
window.TEUI.StateManager.setValue @ 4011-ComponentBridge.js:429
setRefValueIfChanged @ 4011-Section15.js:1315
calculateReferenceModel @ 4011-Section15.js:1421
calculateAll @ 4011-Section15.js:1286
initializeEventHandlers @ 4011-Section15.js:2007
initializeSectionEventHandlers @ 4011-FieldManager.js:310
renderSection @ 4011-FieldManager.js:367
(anonymous) @ 4011-FieldManager.js:394
renderAllSections @ 4011-FieldManager.js:393
initialize @ 4011-Calculator.js:66
(anonymous) @ index.html:1029Understand this warningAI
 ✅ S15 Reference Model: All values converted to numbers for proper math
 ✅ S15 Reference Model: Additional fuel variables declared for cost calculations
 [S15 DEBUG] 💰 Electricity price from S04: raw="$0.1300" → parsed=$0/kWh
 🔍 S15 TARGET UPSTREAM: target_i_104=116070.33, target_m_121=48980.79999999999, target_i_80=45879.580160000005
 [S15 DEBUG] 💰 All energy prices from S04: elec=$0, gas=$0, propane=$0, oil=$0, wood=$0
 [S15 DEBUG] 🧮 D141 calculation: 220216.85125050816 kWh/m²/yr × $0/kWh = $0.00
 [S15 DEBUG] 🧮 D141 calculation: 220216.85125050816 kWh/m²/yr × $0/kWh = $0.00
 [S15 DEBUG] 💰 Electricity price from S04: raw="$0.1300" → parsed=$0/kWh
 🔍 S15 TARGET UPSTREAM: target_i_104=116070.33, target_m_121=48980.79999999999, target_i_80=45879.580160000005
 [S15 DEBUG] 💰 All energy prices from S04: elec=$0, gas=$0, propane=$0, oil=$0, wood=$0
 [S15 DEBUG] 🧮 D141 calculation: 220216.85125050816 kWh/m²/yr × $0/kWh = $0.00
 S15: Target defaults set
 S15: Reference defaults set
 S15: Pattern A initialization complete.
 🔍 S15 REFERENCE UPSTREAM: ref_i_104=0, ref_m_121=84594.73968, ref_i_80=0
 [S15] Missing critical upstream Reference values: ref_g_101, ref_d_101, ref_i_104
calculateReferenceModel @ 4011-Section15.js:1366
calculateAll @ 4011-Section15.js:1286
initializeEventHandlers @ 4011-Section15.js:2007
onSectionRendered @ 4011-Section15.js:2032
initializeSectionEventHandlers @ 4011-FieldManager.js:322
renderSection @ 4011-FieldManager.js:367
(anonymous) @ 4011-FieldManager.js:394
renderAllSections @ 4011-FieldManager.js:393
initialize @ 4011-Calculator.js:66
(anonymous) @ index.html:1029Understand this warningAI
 ✅ S15 Reference Model: All values converted to numbers for proper math
 ✅ S15 Reference Model: Additional fuel variables declared for cost calculations
 [S15 DEBUG] 💰 Electricity price from S04: raw="$0.1300" → parsed=$0/kWh
 🔍 S15 TARGET UPSTREAM: target_i_104=116070.33, target_m_121=48980.79999999999, target_i_80=45879.580160000005
 [S15 DEBUG] 💰 All energy prices from S04: elec=$0, gas=$0, propane=$0, oil=$0, wood=$0
 [S15 DEBUG] 🧮 D141 calculation: 220216.85125050816 kWh/m²/yr × $0/kWh = $0.00
 🔍 S15 REFERENCE UPSTREAM: ref_i_104=0, ref_m_121=84594.73968, ref_i_80=0
 [S15] Missing critical upstream Reference values: ref_g_101, ref_d_101, ref_i_104
calculateReferenceModel @ 4011-Section15.js:1366
calculateAll @ 4011-Section15.js:1286
(anonymous) @ 4011-Section15.js:1945
(anonymous) @ 4011-StateManager.js:486
notifyListeners @ 4011-StateManager.js:484
setValue @ 4011-StateManager.js:362
window.TEUI.StateManager.setValue @ 4011-ComponentBridge.js:429
setCalculatedValue @ 4011-Section01.js:383
calculateTargetModel @ 4011-Section01.js:577
runAllCalculations @ 4011-Section01.js:1234
updateSubtotals @ 4011-Section04.js:1663
updateGridIntensityForMode @ 4011-Section04.js:1456
updateElectricityEmissionFactor @ 4011-Section04.js:1345
forceEmissionsFactorUpdate @ 4011-SectionIntegrator.js:516
initializeEmissionsFactorIntegration @ 4011-SectionIntegrator.js:497
(anonymous) @ 4011-SectionIntegrator.js:187
initializeAllIntegrations @ 4011-SectionIntegrator.js:184
(anonymous) @ 4011-SectionIntegrator.js:106
renderAllSections @ 4011-FieldManager.js:398
initialize @ 4011-Calculator.js:66
(anonymous) @ index.html:1029Understand this warningAI
 ✅ S15 Reference Model: All values converted to numbers for proper math
 ✅ S15 Reference Model: Additional fuel variables declared for cost calculations
 [S15 DEBUG] 💰 Electricity price from S04: raw="$0.1300" → parsed=$0/kWh
 🔍 S15 TARGET UPSTREAM: target_i_104=116070.33, target_m_121=48980.79999999999, target_i_80=45879.580160000005
 [S15 DEBUG] 💰 All energy prices from S04: elec=$0, gas=$0, propane=$0, oil=$0, wood=$0
 🔍 S15 REFERENCE UPSTREAM: ref_i_104=0, ref_m_121=84594.73968, ref_i_80=0
 [S15] Missing critical upstream Reference values: ref_g_101, ref_d_101, ref_i_104
calculateReferenceModel @ 4011-Section15.js:1366
calculateAll @ 4011-Section15.js:1286
(anonymous) @ 4011-Section15.js:1945
(anonymous) @ 4011-StateManager.js:486
notifyListeners @ 4011-StateManager.js:484
setValue @ 4011-StateManager.js:362
window.TEUI.StateManager.setValue @ 4011-ComponentBridge.js:429
calculateValues @ 4011-Section15.js:1705
calculateTargetModel @ 4011-Section15.js:1563
calculateAll @ 4011-Section15.js:1287
(anonymous) @ 4011-Section15.js:1945
(anonymous) @ 4011-StateManager.js:486
notifyListeners @ 4011-StateManager.js:484
setValue @ 4011-StateManager.js:362
window.TEUI.StateManager.setValue @ 4011-ComponentBridge.js:429
setCalculatedValue @ 4011-Section01.js:383
calculateTargetModel @ 4011-Section01.js:577
runAllCalculations @ 4011-Section01.js:1234
updateSubtotals @ 4011-Section04.js:1663
updateGridIntensityForMode @ 4011-Section04.js:1456
updateElectricityEmissionFactor @ 4011-Section04.js:1345
forceEmissionsFactorUpdate @ 4011-SectionIntegrator.js:516
initializeEmissionsFactorIntegration @ 4011-SectionIntegrator.js:497
(anonymous) @ 4011-SectionIntegrator.js:187
initializeAllIntegrations @ 4011-SectionIntegrator.js:184
(anonymous) @ 4011-SectionIntegrator.js:106
renderAllSections @ 4011-FieldManager.js:398
initialize @ 4011-Calculator.js:66
(anonymous) @ index.html:1029Understand this warningAI
 ✅ S15 Reference Model: All values converted to numbers for proper math
 ✅ S15 Reference Model: Additional fuel variables declared for cost calculations
 [S15 DEBUG] 💰 Electricity price from S04: raw="$0.1300" → parsed=$0/kWh
 🔍 S15 TARGET UPSTREAM: target_i_104=116070.33, target_m_121=48980.79999999999, target_i_80=45879.580160000005
 [S15 DEBUG] 💰 All energy prices from S04: elec=$0, gas=$0, propane=$0, oil=$0, wood=$0
 [S15 DEBUG] 🧮 D141 calculation: 220216.85125050816 kWh/m²/yr × $0/kWh = $0.00
 🔍 S15 REFERENCE UPSTREAM: ref_i_104=0, ref_m_121=84594.73968, ref_i_80=0
 [S15] Missing critical upstream Reference values: ref_g_101, ref_d_101, ref_i_104
calculateReferenceModel @ 4011-Section15.js:1366
calculateAll @ 4011-Section15.js:1286
(anonymous) @ 4011-Section15.js:1945
(anonymous) @ 4011-StateManager.js:486
notifyListeners @ 4011-StateManager.js:484
setValue @ 4011-StateManager.js:362
window.TEUI.StateManager.setValue @ 4011-ComponentBridge.js:429
calculateValues @ 4011-Section15.js:1705
calculateTargetModel @ 4011-Section15.js:1563
calculateAll @ 4011-Section15.js:1287
(anonymous) @ 4011-Section15.js:1945
(anonymous) @ 4011-StateManager.js:486
notifyListeners @ 4011-StateManager.js:484
setValue @ 4011-StateManager.js:362
window.TEUI.StateManager.setValue @ 4011-ComponentBridge.js:429
setCalculatedValue @ 4011-Section01.js:383
calculateTargetModel @ 4011-Section01.js:577
runAllCalculations @ 4011-Section01.js:1234
updateSubtotals @ 4011-Section04.js:1663
updateGridIntensityForMode @ 4011-Section04.js:1456
updateElectricityEmissionFactor @ 4011-Section04.js:1345
forceEmissionsFactorUpdate @ 4011-SectionIntegrator.js:516
initializeEmissionsFactorIntegration @ 4011-SectionIntegrator.js:497
(anonymous) @ 4011-SectionIntegrator.js:187
initializeAllIntegrations @ 4011-SectionIntegrator.js:184
(anonymous) @ 4011-SectionIntegrator.js:106
renderAllSections @ 4011-FieldManager.js:398
initialize @ 4011-Calculator.js:66
(anonymous) @ index.html:1029Understand this warningAI
 ✅ S15 Reference Model: All values converted to numbers for proper math
 ✅ S15 Reference Model: Additional fuel variables declared for cost calculations
 [S15 DEBUG] 💰 Electricity price from S04: raw="$0.1300" → parsed=$0/kWh
 🔍 S15 TARGET UPSTREAM: target_i_104=116070.33, target_m_121=48980.79999999999, target_i_80=45879.580160000005
 [S15 DEBUG] 💰 All energy prices from S04: elec=$0, gas=$0, propane=$0, oil=$0, wood=$0
 [S15 DEBUG] 🧮 D141 calculation: 220216.85125050816 kWh/m²/yr × $0/kWh = $0.00
 [S15 DEBUG] 🧮 D141 calculation: 220216.85125050816 kWh/m²/yr × $0/kWh = $0.00
 🔍 S15 REFERENCE UPSTREAM: ref_i_104=0, ref_m_121=84594.73968, ref_i_80=0
 [S15] Missing critical upstream Reference values: ref_g_101, ref_d_101, ref_i_104
calculateReferenceModel @ 4011-Section15.js:1366
calculateAll @ 4011-Section15.js:1286
(anonymous) @ 4011-Section15.js:1945
(anonymous) @ 4011-StateManager.js:486
notifyListeners @ 4011-StateManager.js:484
setValue @ 4011-StateManager.js:362
window.TEUI.StateManager.setValue @ 4011-ComponentBridge.js:429
setCalculatedValue @ 4011-Section01.js:383
calculateTargetModel @ 4011-Section01.js:577
runAllCalculations @ 4011-Section01.js:1234
updateSubtotals @ 4011-Section04.js:1663
updateGridIntensityForMode @ 4011-Section04.js:1456
updateElectricityEmissionFactor @ 4011-Section04.js:1345
forceEmissionsFactorUpdate @ 4011-SectionIntegrator.js:516
initializeEmissionsFactorIntegration @ 4011-SectionIntegrator.js:497
(anonymous) @ 4011-SectionIntegrator.js:187
initializeAllIntegrations @ 4011-SectionIntegrator.js:184
(anonymous) @ 4011-SectionIntegrator.js:106
renderAllSections @ 4011-FieldManager.js:398
initialize @ 4011-Calculator.js:66
(anonymous) @ index.html:1029Understand this warningAI
 ✅ S15 Reference Model: All values converted to numbers for proper math
 ✅ S15 Reference Model: Additional fuel variables declared for cost calculations
 [S15 DEBUG] 💰 Electricity price from S04: raw="$0.1300" → parsed=$0/kWh
 🔍 S15 TARGET UPSTREAM: target_i_104=116070.33, target_m_121=48980.79999999999, target_i_80=45879.580160000005
 [S15 DEBUG] 💰 All energy prices from S04: elec=$0, gas=$0, propane=$0, oil=$0, wood=$0
 [S15 DEBUG] 🧮 D141 calculation: 220216.85125050816 kWh/m²/yr × $0/kWh = $0.00
 🔍 S15 REFERENCE UPSTREAM: ref_i_104=0, ref_m_121=84594.73968, ref_i_80=0
 [S15] Missing critical upstream Reference values: ref_g_101, ref_d_101, ref_i_104
calculateReferenceModel @ 4011-Section15.js:1366
calculateAll @ 4011-Section15.js:1286
forceTEDITELIUpdate @ 4011-SectionIntegrator.js:305
initializeTEDITELIIntegration @ 4011-SectionIntegrator.js:241
(anonymous) @ 4011-SectionIntegrator.js:187
initializeAllIntegrations @ 4011-SectionIntegrator.js:184
(anonymous) @ 4011-SectionIntegrator.js:106
renderAllSections @ 4011-FieldManager.js:398
initialize @ 4011-Calculator.js:66
(anonymous) @ index.html:1029Understand this warningAI
 ✅ S15 Reference Model: All values converted to numbers for proper math
 ✅ S15 Reference Model: Additional fuel variables declared for cost calculations
 [S15 DEBUG] 💰 Electricity price from S04: raw="$0.1300" → parsed=$0/kWh
 🔍 S15 TARGET UPSTREAM: target_i_104=116070.33, target_m_121=48980.79999999999, target_i_80=45879.580160000005
 [S15 DEBUG] 💰 All energy prices from S04: elec=$0, gas=$0, propane=$0, oil=$0, wood=$0
 [S15 DEBUG] 🧮 D141 calculation: 220216.85125050816 kWh/m²/yr × $0/kWh = $0.00
 🔍 S15 REFERENCE UPSTREAM: ref_i_104=0, ref_m_121=84594.73968, ref_i_80=0
 [S15] Missing critical upstream Reference values: ref_g_101, ref_d_101, ref_i_104
calculateReferenceModel @ 4011-Section15.js:1366
calculateAll @ 4011-Section15.js:1286
(anonymous) @ 4011-Section15.js:1945
(anonymous) @ 4011-StateManager.js:486
notifyListeners @ 4011-StateManager.js:484
setValue @ 4011-StateManager.js:362
window.TEUI.StateManager.setValue @ 4011-ComponentBridge.js:429
setCalculatedValue @ 4011-Section01.js:383
calculateTargetModel @ 4011-Section01.js:577
runAllCalculations @ 4011-Section01.js:1234
updateSubtotals @ 4011-Section04.js:1663
updateGridIntensityForMode @ 4011-Section04.js:1456
updateElectricityEmissionFactor @ 4011-Section04.js:1345
forceEmissionsFactorUpdate @ 4011-SectionIntegrator.js:516
initializeEmissionsFactorIntegration @ 4011-SectionIntegrator.js:497
(anonymous) @ 4011-SectionIntegrator.js:187
initializeAllIntegrations @ 4011-SectionIntegrator.js:184
(anonymous) @ 4011-SectionIntegrator.js:106
renderAllSections @ 4011-FieldManager.js:398
initialize @ 4011-Calculator.js:66
(anonymous) @ index.html:1029Understand this warningAI
 ✅ S15 Reference Model: All values converted to numbers for proper math
 ✅ S15 Reference Model: Additional fuel variables declared for cost calculations
 [S15 DEBUG] 💰 Electricity price from S04: raw="$0.1300" → parsed=$0/kWh
 🔍 S15 TARGET UPSTREAM: target_i_104=116070.33, target_m_121=48980.79999999999, target_i_80=45879.580160000005
 [S15 DEBUG] 💰 All energy prices from S04: elec=$0, gas=$0, propane=$0, oil=$0, wood=$0
 🔍 S15 REFERENCE UPSTREAM: ref_i_104=0, ref_m_121=84594.73968, ref_i_80=0
 [S15] Missing critical upstream Reference values: ref_g_101, ref_d_101, ref_i_104
calculateReferenceModel @ 4011-Section15.js:1366
calculateAll @ 4011-Section15.js:1286
(anonymous) @ 4011-Section15.js:1945
(anonymous) @ 4011-StateManager.js:486
notifyListeners @ 4011-StateManager.js:484
setValue @ 4011-StateManager.js:362
window.TEUI.StateManager.setValue @ 4011-ComponentBridge.js:429
calculateValues @ 4011-Section15.js:1705
calculateTargetModel @ 4011-Section15.js:1563
calculateAll @ 4011-Section15.js:1287
(anonymous) @ 4011-Section15.js:1945
(anonymous) @ 4011-StateManager.js:486
notifyListeners @ 4011-StateManager.js:484
setValue @ 4011-StateManager.js:362
window.TEUI.StateManager.setValue @ 4011-ComponentBridge.js:429
setCalculatedValue @ 4011-Section01.js:383
calculateTargetModel @ 4011-Section01.js:577
runAllCalculations @ 4011-Section01.js:1234
updateSubtotals @ 4011-Section04.js:1663
updateGridIntensityForMode @ 4011-Section04.js:1456
updateElectricityEmissionFactor @ 4011-Section04.js:1345
forceEmissionsFactorUpdate @ 4011-SectionIntegrator.js:516
initializeEmissionsFactorIntegration @ 4011-SectionIntegrator.js:497
(anonymous) @ 4011-SectionIntegrator.js:187
initializeAllIntegrations @ 4011-SectionIntegrator.js:184
(anonymous) @ 4011-SectionIntegrator.js:106
renderAllSections @ 4011-FieldManager.js:398
initialize @ 4011-Calculator.js:66
(anonymous) @ index.html:1029Understand this warningAI
 ✅ S15 Reference Model: All values converted to numbers for proper math
 ✅ S15 Reference Model: Additional fuel variables declared for cost calculations
 [S15 DEBUG] 💰 Electricity price from S04: raw="$0.1300" → parsed=$0/kWh
 🔍 S15 TARGET UPSTREAM: target_i_104=116070.33, target_m_121=48980.79999999999, target_i_80=45879.580160000005
 [S15 DEBUG] 💰 All energy prices from S04: elec=$0, gas=$0, propane=$0, oil=$0, wood=$0
 [S15 DEBUG] 🧮 D141 calculation: 220216.85125050816 kWh/m²/yr × $0/kWh = $0.00
 🔍 S15 REFERENCE UPSTREAM: ref_i_104=0, ref_m_121=84594.73968, ref_i_80=0
 [S15] Missing critical upstream Reference values: ref_g_101, ref_d_101, ref_i_104
calculateReferenceModel @ 4011-Section15.js:1366
calculateAll @ 4011-Section15.js:1286
(anonymous) @ 4011-Section15.js:1945
(anonymous) @ 4011-StateManager.js:486
notifyListeners @ 4011-StateManager.js:484
setValue @ 4011-StateManager.js:362
window.TEUI.StateManager.setValue @ 4011-ComponentBridge.js:429
calculateValues @ 4011-Section15.js:1705
calculateTargetModel @ 4011-Section15.js:1563
calculateAll @ 4011-Section15.js:1287
(anonymous) @ 4011-Section15.js:1945
(anonymous) @ 4011-StateManager.js:486
notifyListeners @ 4011-StateManager.js:484
setValue @ 4011-StateManager.js:362
window.TEUI.StateManager.setValue @ 4011-ComponentBridge.js:429
setCalculatedValue @ 4011-Section01.js:383
calculateTargetModel @ 4011-Section01.js:577
runAllCalculations @ 4011-Section01.js:1234
updateSubtotals @ 4011-Section04.js:1663
updateGridIntensityForMode @ 4011-Section04.js:1456
updateElectricityEmissionFactor @ 4011-Section04.js:1345
forceEmissionsFactorUpdate @ 4011-SectionIntegrator.js:516
initializeEmissionsFactorIntegration @ 4011-SectionIntegrator.js:497
(anonymous) @ 4011-SectionIntegrator.js:187
initializeAllIntegrations @ 4011-SectionIntegrator.js:184
(anonymous) @ 4011-SectionIntegrator.js:106
renderAllSections @ 4011-FieldManager.js:398
initialize @ 4011-Calculator.js:66
(anonymous) @ index.html:1029Understand this warningAI
 ✅ S15 Reference Model: All values converted to numbers for proper math
 ✅ S15 Reference Model: Additional fuel variables declared for cost calculations
 [S15 DEBUG] 💰 Electricity price from S04: raw="$0.1300" → parsed=$0/kWh
 🔍 S15 TARGET UPSTREAM: target_i_104=116070.33, target_m_121=48980.79999999999, target_i_80=45879.580160000005
 [S15 DEBUG] 💰 All energy prices from S04: elec=$0, gas=$0, propane=$0, oil=$0, wood=$0
 [S15 DEBUG] 🧮 D141 calculation: 220216.85125050816 kWh/m²/yr × $0/kWh = $0.00
 [S15 DEBUG] 🧮 D141 calculation: 220216.85125050816 kWh/m²/yr × $0/kWh = $0.00
 🔍 S15 REFERENCE UPSTREAM: ref_i_104=0, ref_m_121=84594.73968, ref_i_80=0
 [S15] Missing critical upstream Reference values: ref_g_101, ref_d_101, ref_i_104
calculateReferenceModel @ 4011-Section15.js:1366
calculateAll @ 4011-Section15.js:1286
(anonymous) @ 4011-Section15.js:1945
(anonymous) @ 4011-StateManager.js:486
notifyListeners @ 4011-StateManager.js:484
setValue @ 4011-StateManager.js:362
window.TEUI.StateManager.setValue @ 4011-ComponentBridge.js:429
setCalculatedValue @ 4011-Section01.js:383
calculateTargetModel @ 4011-Section01.js:577
runAllCalculations @ 4011-Section01.js:1234
updateSubtotals @ 4011-Section04.js:1663
updateGridIntensityForMode @ 4011-Section04.js:1456
updateElectricityEmissionFactor @ 4011-Section04.js:1345
forceEmissionsFactorUpdate @ 4011-SectionIntegrator.js:516
initializeEmissionsFactorIntegration @ 4011-SectionIntegrator.js:497
(anonymous) @ 4011-SectionIntegrator.js:187
initializeAllIntegrations @ 4011-SectionIntegrator.js:184
(anonymous) @ 4011-SectionIntegrator.js:106
renderAllSections @ 4011-FieldManager.js:398
initialize @ 4011-Calculator.js:66
(anonymous) @ index.html:1029Understand this warningAI
 ✅ S15 Reference Model: All values converted to numbers for proper math
 ✅ S15 Reference Model: Additional fuel variables declared for cost calculations
 [S15 DEBUG] 💰 Electricity price from S04: raw="$0.1300" → parsed=$0/kWh
 🔍 S15 TARGET UPSTREAM: target_i_104=116070.33, target_m_121=48980.79999999999, target_i_80=45879.580160000005
 [S15 DEBUG] 💰 All energy prices from S04: elec=$0, gas=$0, propane=$0, oil=$0, wood=$0
 [S15 DEBUG] 🧮 D141 calculation: 220216.85125050816 kWh/m²/yr × $0/kWh = $0.00
 🔍 S15 REFERENCE UPSTREAM: ref_i_104=0, ref_m_121=84594.73968, ref_i_80=0
 [S15] Missing critical upstream Reference values: ref_g_101, ref_d_101, ref_i_104
calculateReferenceModel @ 4011-Section15.js:1366
calculateAll @ 4011-Section15.js:1286
forceTEDITELIUpdate @ 4011-SectionIntegrator.js:305
initializeTEDITELIIntegration @ 4011-SectionIntegrator.js:241
(anonymous) @ 4011-SectionIntegrator.js:187
initializeAllIntegrations @ 4011-SectionIntegrator.js:184
(anonymous) @ 4011-SectionIntegrator.js:106
renderAllSections @ 4011-FieldManager.js:398
initialize @ 4011-Calculator.js:66
(anonymous) @ index.html:1029Understand this warningAI
 ✅ S15 Reference Model: All values converted to numbers for proper math
 ✅ S15 Reference Model: Additional fuel variables declared for cost calculations
 [S15 DEBUG] 💰 Electricity price from S04: raw="$0.1300" → parsed=$0/kWh
 🔍 S15 TARGET UPSTREAM: target_i_104=116070.33, target_m_121=48980.79999999999, target_i_80=45879.580160000005
 [S15 DEBUG] 💰 All energy prices from S04: elec=$0, gas=$0, propane=$0, oil=$0, wood=$0
 [S15 DEBUG] 🧮 D141 calculation: 220216.85125050816 kWh/m²/yr × $0/kWh = $0.00
 🔄 ComponentBridge: Dual-state sync already initialized
 TEUI Calculator 4.011 initialization complete
 🔍 S15 REFERENCE UPSTREAM: ref_i_104=0, ref_m_121=84594.73968, ref_i_80=0
 [S15] Missing critical upstream Reference values: ref_g_101, ref_d_101, ref_i_104
calculateReferenceModel @ 4011-Section15.js:1366
calculateAll @ 4011-Section15.js:1286
(anonymous) @ 4011-Section15.js:1945
(anonymous) @ 4011-StateManager.js:486
notifyListeners @ 4011-StateManager.js:484
setValue @ 4011-StateManager.js:362
window.TEUI.StateManager.setValue @ 4011-ComponentBridge.js:429
setCalculatedValue @ 4011-Section01.js:383
calculateTargetModel @ 4011-Section01.js:577
runAllCalculations @ 4011-Section01.js:1234
updateSubtotals @ 4011-Section04.js:1663
updateGridIntensityForMode @ 4011-Section04.js:1456
updateElectricityEmissionFactor @ 4011-Section04.js:1345
(anonymous) @ 4011-Section04.js:2196
setTimeout
onSectionRendered @ 4011-Section04.js:2195
initializeSectionEventHandlers @ 4011-FieldManager.js:322
renderSection @ 4011-FieldManager.js:367
(anonymous) @ 4011-FieldManager.js:394
renderAllSections @ 4011-FieldManager.js:393
(anonymous) @ 4011-FieldManager.js:1389Understand this warningAI
 ✅ S15 Reference Model: All values converted to numbers for proper math
 ✅ S15 Reference Model: Additional fuel variables declared for cost calculations
 [S15 DEBUG] 💰 Electricity price from S04: raw="$0.1300" → parsed=$0/kWh
 🔍 S15 TARGET UPSTREAM: target_i_104=116070.33, target_m_121=48980.79999999999, target_i_80=45879.580160000005
 [S15 DEBUG] 💰 All energy prices from S04: elec=$0, gas=$0, propane=$0, oil=$0, wood=$0
 🔍 S15 REFERENCE UPSTREAM: ref_i_104=0, ref_m_121=84594.73968, ref_i_80=0
 [S15] Missing critical upstream Reference values: ref_g_101, ref_d_101, ref_i_104
calculateReferenceModel @ 4011-Section15.js:1366
calculateAll @ 4011-Section15.js:1286
(anonymous) @ 4011-Section15.js:1945
(anonymous) @ 4011-StateManager.js:486
notifyListeners @ 4011-StateManager.js:484
setValue @ 4011-StateManager.js:362
window.TEUI.StateManager.setValue @ 4011-ComponentBridge.js:429
calculateValues @ 4011-Section15.js:1705
calculateTargetModel @ 4011-Section15.js:1563
calculateAll @ 4011-Section15.js:1287
(anonymous) @ 4011-Section15.js:1945
(anonymous) @ 4011-StateManager.js:486
notifyListeners @ 4011-StateManager.js:484
setValue @ 4011-StateManager.js:362
window.TEUI.StateManager.setValue @ 4011-ComponentBridge.js:429
setCalculatedValue @ 4011-Section01.js:383
calculateTargetModel @ 4011-Section01.js:577
runAllCalculations @ 4011-Section01.js:1234
updateSubtotals @ 4011-Section04.js:1663
updateGridIntensityForMode @ 4011-Section04.js:1456
updateElectricityEmissionFactor @ 4011-Section04.js:1345
(anonymous) @ 4011-Section04.js:2196
setTimeout
onSectionRendered @ 4011-Section04.js:2195
initializeSectionEventHandlers @ 4011-FieldManager.js:322
renderSection @ 4011-FieldManager.js:367
(anonymous) @ 4011-FieldManager.js:394
renderAllSections @ 4011-FieldManager.js:393
(anonymous) @ 4011-FieldManager.js:1389Understand this warningAI
 ✅ S15 Reference Model: All values converted to numbers for proper math
 ✅ S15 Reference Model: Additional fuel variables declared for cost calculations
 [S15 DEBUG] 💰 Electricity price from S04: raw="$0.1300" → parsed=$0/kWh
 🔍 S15 TARGET UPSTREAM: target_i_104=116070.33, target_m_121=48980.79999999999, target_i_80=45879.580160000005
 [S15 DEBUG] 💰 All energy prices from S04: elec=$0, gas=$0, propane=$0, oil=$0, wood=$0
 [S15 DEBUG] 🧮 D141 calculation: 220216.85125050816 kWh/m²/yr × $0/kWh = $0.00
 🔍 S15 REFERENCE UPSTREAM: ref_i_104=0, ref_m_121=84594.73968, ref_i_80=0
 [S15] Missing critical upstream Reference values: ref_g_101, ref_d_101, ref_i_104
calculateReferenceModel @ 4011-Section15.js:1366
calculateAll @ 4011-Section15.js:1286
(anonymous) @ 4011-Section15.js:1945
(anonymous) @ 4011-StateManager.js:486
notifyListeners @ 4011-StateManager.js:484
setValue @ 4011-StateManager.js:362
window.TEUI.StateManager.setValue @ 4011-ComponentBridge.js:429
calculateValues @ 4011-Section15.js:1705
calculateTargetModel @ 4011-Section15.js:1563
calculateAll @ 4011-Section15.js:1287
(anonymous) @ 4011-Section15.js:1945
(anonymous) @ 4011-StateManager.js:486
notifyListeners @ 4011-StateManager.js:484
setValue @ 4011-StateManager.js:362
window.TEUI.StateManager.setValue @ 4011-ComponentBridge.js:429
setCalculatedValue @ 4011-Section01.js:383
calculateTargetModel @ 4011-Section01.js:577
runAllCalculations @ 4011-Section01.js:1234
updateSubtotals @ 4011-Section04.js:1663
updateGridIntensityForMode @ 4011-Section04.js:1456
updateElectricityEmissionFactor @ 4011-Section04.js:1345
(anonymous) @ 4011-Section04.js:2196
setTimeout
onSectionRendered @ 4011-Section04.js:2195
initializeSectionEventHandlers @ 4011-FieldManager.js:322
renderSection @ 4011-FieldManager.js:367
(anonymous) @ 4011-FieldManager.js:394
renderAllSections @ 4011-FieldManager.js:393
(anonymous) @ 4011-FieldManager.js:1389Understand this warningAI
 ✅ S15 Reference Model: All values converted to numbers for proper math
 ✅ S15 Reference Model: Additional fuel variables declared for cost calculations
 [S15 DEBUG] 💰 Electricity price from S04: raw="$0.1300" → parsed=$0/kWh
 🔍 S15 TARGET UPSTREAM: target_i_104=116070.33, target_m_121=48980.79999999999, target_i_80=45879.580160000005
 [S15 DEBUG] 💰 All energy prices from S04: elec=$0, gas=$0, propane=$0, oil=$0, wood=$0
 [S15 DEBUG] 🧮 D141 calculation: 220216.85125050816 kWh/m²/yr × $0/kWh = $0.00
 [S15 DEBUG] 🧮 D141 calculation: 220216.85125050816 kWh/m²/yr × $0/kWh = $0.00
 🔍 S15 REFERENCE UPSTREAM: ref_i_104=0, ref_m_121=84594.73968, ref_i_80=0
 [S15] Missing critical upstream Reference values: ref_g_101, ref_d_101, ref_i_104
calculateReferenceModel @ 4011-Section15.js:1366
calculateAll @ 4011-Section15.js:1286
(anonymous) @ 4011-Section15.js:1945
(anonymous) @ 4011-StateManager.js:486
notifyListeners @ 4011-StateManager.js:484
setValue @ 4011-StateManager.js:362
window.TEUI.StateManager.setValue @ 4011-ComponentBridge.js:429
setCalculatedValue @ 4011-Section01.js:383
calculateTargetModel @ 4011-Section01.js:577
runAllCalculations @ 4011-Section01.js:1234
updateSubtotals @ 4011-Section04.js:1663
updateGridIntensityForMode @ 4011-Section04.js:1456
updateElectricityEmissionFactor @ 4011-Section04.js:1345
(anonymous) @ 4011-Section04.js:2196
setTimeout
onSectionRendered @ 4011-Section04.js:2195
initializeSectionEventHandlers @ 4011-FieldManager.js:322
renderSection @ 4011-FieldManager.js:367
(anonymous) @ 4011-FieldManager.js:394
renderAllSections @ 4011-FieldManager.js:393
(anonymous) @ 4011-FieldManager.js:1389Understand this warningAI
 ✅ S15 Reference Model: All values converted to numbers for proper math
 ✅ S15 Reference Model: Additional fuel variables declared for cost calculations
 [S15 DEBUG] 💰 Electricity price from S04: raw="$0.1300" → parsed=$0/kWh
 🔍 S15 TARGET UPSTREAM: target_i_104=116070.33, target_m_121=48980.79999999999, target_i_80=45879.580160000005
 [S15 DEBUG] 💰 All energy prices from S04: elec=$0, gas=$0, propane=$0, oil=$0, wood=$0
 [S15 DEBUG] 🧮 D141 calculation: 220216.85125050816 kWh/m²/yr × $0/kWh = $0.00
 🔍 S15 REFERENCE UPSTREAM: ref_i_104=0, ref_m_121=84594.73968, ref_i_80=0
 [S15] Missing critical upstream Reference values: ref_g_101, ref_d_101, ref_i_104
calculateReferenceModel @ 4011-Section15.js:1366
calculateAll @ 4011-Section15.js:1286
(anonymous) @ 4011-Section15.js:1945
(anonymous) @ 4011-StateManager.js:486
notifyListeners @ 4011-StateManager.js:484
setValue @ 4011-StateManager.js:362
window.TEUI.StateManager.setValue @ 4011-ComponentBridge.js:429
setCalculatedValue @ 4011-Section01.js:383
calculateTargetModel @ 4011-Section01.js:577
runAllCalculations @ 4011-Section01.js:1234
(anonymous) @ 4011-Section01.js:1306
(anonymous) @ 4011-StateManager.js:486
notifyListeners @ 4011-StateManager.js:484
setValue @ 4011-StateManager.js:362
window.TEUI.StateManager.setValue @ 4011-ComponentBridge.js:429
setValueIfChanged @ 4011-Section04.js:2256
calculateReferenceModel @ 4011-Section04.js:2292
calculateAll @ 4011-Section04.js:2401
(anonymous) @ 4011-Section04.js:2198
setTimeout
onSectionRendered @ 4011-Section04.js:2195
initializeSectionEventHandlers @ 4011-FieldManager.js:322
renderSection @ 4011-FieldManager.js:367
(anonymous) @ 4011-FieldManager.js:394
renderAllSections @ 4011-FieldManager.js:393
(anonymous) @ 4011-FieldManager.js:1389Understand this warningAI
 ✅ S15 Reference Model: All values converted to numbers for proper math
 ✅ S15 Reference Model: Additional fuel variables declared for cost calculations
 [S15 DEBUG] 💰 Electricity price from S04: raw="$0.1300" → parsed=$0/kWh
 🔍 S15 TARGET UPSTREAM: target_i_104=116070.33, target_m_121=48980.79999999999, target_i_80=45879.580160000005
 [S15 DEBUG] 💰 All energy prices from S04: elec=$0, gas=$0, propane=$0, oil=$0, wood=$0
 🔍 S15 REFERENCE UPSTREAM: ref_i_104=0, ref_m_121=84594.73968, ref_i_80=0
 [S15] Missing critical upstream Reference values: ref_g_101, ref_d_101, ref_i_104
calculateReferenceModel @ 4011-Section15.js:1366
calculateAll @ 4011-Section15.js:1286
(anonymous) @ 4011-Section15.js:1945
(anonymous) @ 4011-StateManager.js:486
notifyListeners @ 4011-StateManager.js:484
setValue @ 4011-StateManager.js:362
window.TEUI.StateManager.setValue @ 4011-ComponentBridge.js:429
calculateValues @ 4011-Section15.js:1705
calculateTargetModel @ 4011-Section15.js:1563
calculateAll @ 4011-Section15.js:1287
(anonymous) @ 4011-Section15.js:1945
(anonymous) @ 4011-StateManager.js:486
notifyListeners @ 4011-StateManager.js:484
setValue @ 4011-StateManager.js:362
window.TEUI.StateManager.setValue @ 4011-ComponentBridge.js:429
setCalculatedValue @ 4011-Section01.js:383
calculateTargetModel @ 4011-Section01.js:577
runAllCalculations @ 4011-Section01.js:1234
(anonymous) @ 4011-Section01.js:1306
(anonymous) @ 4011-StateManager.js:486
notifyListeners @ 4011-StateManager.js:484
setValue @ 4011-StateManager.js:362
window.TEUI.StateManager.setValue @ 4011-ComponentBridge.js:429
setValueIfChanged @ 4011-Section04.js:2256
calculateReferenceModel @ 4011-Section04.js:2292
calculateAll @ 4011-Section04.js:2401
(anonymous) @ 4011-Section04.js:2198
setTimeout
onSectionRendered @ 4011-Section04.js:2195
initializeSectionEventHandlers @ 4011-FieldManager.js:322
renderSection @ 4011-FieldManager.js:367
(anonymous) @ 4011-FieldManager.js:394
renderAllSections @ 4011-FieldManager.js:393
(anonymous) @ 4011-FieldManager.js:1389Understand this warningAI
 ✅ S15 Reference Model: All values converted to numbers for proper math
 ✅ S15 Reference Model: Additional fuel variables declared for cost calculations
 [S15 DEBUG] 💰 Electricity price from S04: raw="$0.1300" → parsed=$0/kWh
 🔍 S15 TARGET UPSTREAM: target_i_104=116070.33, target_m_121=48980.79999999999, target_i_80=45879.580160000005
 [S15 DEBUG] 💰 All energy prices from S04: elec=$0, gas=$0, propane=$0, oil=$0, wood=$0
 [S15 DEBUG] 🧮 D141 calculation: 220216.85125050816 kWh/m²/yr × $0/kWh = $0.00
 🔍 S15 REFERENCE UPSTREAM: ref_i_104=0, ref_m_121=84594.73968, ref_i_80=0
 [S15] Missing critical upstream Reference values: ref_g_101, ref_d_101, ref_i_104
calculateReferenceModel @ 4011-Section15.js:1366
calculateAll @ 4011-Section15.js:1286
(anonymous) @ 4011-Section15.js:1945
(anonymous) @ 4011-StateManager.js:486
notifyListeners @ 4011-StateManager.js:484
setValue @ 4011-StateManager.js:362
window.TEUI.StateManager.setValue @ 4011-ComponentBridge.js:429
calculateValues @ 4011-Section15.js:1705
calculateTargetModel @ 4011-Section15.js:1563
calculateAll @ 4011-Section15.js:1287
(anonymous) @ 4011-Section15.js:1945
(anonymous) @ 4011-StateManager.js:486
notifyListeners @ 4011-StateManager.js:484
setValue @ 4011-StateManager.js:362
window.TEUI.StateManager.setValue @ 4011-ComponentBridge.js:429
setCalculatedValue @ 4011-Section01.js:383
calculateTargetModel @ 4011-Section01.js:577
runAllCalculations @ 4011-Section01.js:1234
(anonymous) @ 4011-Section01.js:1306
(anonymous) @ 4011-StateManager.js:486
notifyListeners @ 4011-StateManager.js:484
setValue @ 4011-StateManager.js:362
window.TEUI.StateManager.setValue @ 4011-ComponentBridge.js:429
setValueIfChanged @ 4011-Section04.js:2256
calculateReferenceModel @ 4011-Section04.js:2292
calculateAll @ 4011-Section04.js:2401
(anonymous) @ 4011-Section04.js:2198
setTimeout
onSectionRendered @ 4011-Section04.js:2195
initializeSectionEventHandlers @ 4011-FieldManager.js:322
renderSection @ 4011-FieldManager.js:367
(anonymous) @ 4011-FieldManager.js:394
renderAllSections @ 4011-FieldManager.js:393
(anonymous) @ 4011-FieldManager.js:1389Understand this warningAI
 ✅ S15 Reference Model: All values converted to numbers for proper math
 ✅ S15 Reference Model: Additional fuel variables declared for cost calculations
 [S15 DEBUG] 💰 Electricity price from S04: raw="$0.1300" → parsed=$0/kWh
 🔍 S15 TARGET UPSTREAM: target_i_104=116070.33, target_m_121=48980.79999999999, target_i_80=45879.580160000005
 [S15 DEBUG] 💰 All energy prices from S04: elec=$0, gas=$0, propane=$0, oil=$0, wood=$0
 [S15 DEBUG] 🧮 D141 calculation: 220216.85125050816 kWh/m²/yr × $0/kWh = $0.00
 [S15 DEBUG] 🧮 D141 calculation: 220216.85125050816 kWh/m²/yr × $0/kWh = $0.00
 🔍 S15 REFERENCE UPSTREAM: ref_i_104=0, ref_m_121=84594.73968, ref_i_80=0
 [S15] Missing critical upstream Reference values: ref_g_101, ref_d_101, ref_i_104
calculateReferenceModel @ 4011-Section15.js:1366
calculateAll @ 4011-Section15.js:1286
(anonymous) @ 4011-Section15.js:1945
(anonymous) @ 4011-StateManager.js:486
notifyListeners @ 4011-StateManager.js:484
setValue @ 4011-StateManager.js:362
window.TEUI.StateManager.setValue @ 4011-ComponentBridge.js:429
setCalculatedValue @ 4011-Section01.js:383
calculateTargetModel @ 4011-Section01.js:577
runAllCalculations @ 4011-Section01.js:1234
(anonymous) @ 4011-Section01.js:1306
(anonymous) @ 4011-StateManager.js:486
notifyListeners @ 4011-StateManager.js:484
setValue @ 4011-StateManager.js:362
window.TEUI.StateManager.setValue @ 4011-ComponentBridge.js:429
setValueIfChanged @ 4011-Section04.js:2256
calculateReferenceModel @ 4011-Section04.js:2292
calculateAll @ 4011-Section04.js:2401
(anonymous) @ 4011-Section04.js:2198
setTimeout
onSectionRendered @ 4011-Section04.js:2195
initializeSectionEventHandlers @ 4011-FieldManager.js:322
renderSection @ 4011-FieldManager.js:367
(anonymous) @ 4011-FieldManager.js:394
renderAllSections @ 4011-FieldManager.js:393
(anonymous) @ 4011-FieldManager.js:1389Understand this warningAI
 ✅ S15 Reference Model: All values converted to numbers for proper math
 ✅ S15 Reference Model: Additional fuel variables declared for cost calculations
 [S15 DEBUG] 💰 Electricity price from S04: raw="$0.1300" → parsed=$0/kWh
 🔍 S15 TARGET UPSTREAM: target_i_104=116070.33, target_m_121=48980.79999999999, target_i_80=45879.580160000005
 [S15 DEBUG] 💰 All energy prices from S04: elec=$0, gas=$0, propane=$0, oil=$0, wood=$0
 [S15 DEBUG] 🧮 D141 calculation: 220216.85125050816 kWh/m²/yr × $0/kWh = $0.00
 🔍 S15 REFERENCE UPSTREAM: ref_i_104=0, ref_m_121=84594.73968, ref_i_80=0
 [S15] Missing critical upstream Reference values: ref_g_101, ref_d_101, ref_i_104
calculateReferenceModel @ 4011-Section15.js:1366
calculateAll @ 4011-Section15.js:1286
(anonymous) @ 4011-Section15.js:1945
(anonymous) @ 4011-StateManager.js:486
notifyListeners @ 4011-StateManager.js:484
setValue @ 4011-StateManager.js:362
window.TEUI.StateManager.setValue @ 4011-ComponentBridge.js:429
setCalculatedValue @ 4011-Section01.js:383
calculateTargetModel @ 4011-Section01.js:577
runAllCalculations @ 4011-Section01.js:1234
(anonymous) @ 4011-Section01.js:1306
(anonymous) @ 4011-StateManager.js:486
notifyListeners @ 4011-StateManager.js:484
setValue @ 4011-StateManager.js:362
window.TEUI.StateManager.setValue @ 4011-ComponentBridge.js:429
setValueIfChanged @ 4011-Section04.js:2256
calculateReferenceModel @ 4011-Section04.js:2293
calculateAll @ 4011-Section04.js:2401
(anonymous) @ 4011-Section04.js:2198
setTimeout
onSectionRendered @ 4011-Section04.js:2195
initializeSectionEventHandlers @ 4011-FieldManager.js:322
renderSection @ 4011-FieldManager.js:367
(anonymous) @ 4011-FieldManager.js:394
renderAllSections @ 4011-FieldManager.js:393
(anonymous) @ 4011-FieldManager.js:1389Understand this warningAI
 ✅ S15 Reference Model: All values converted to numbers for proper math
 ✅ S15 Reference Model: Additional fuel variables declared for cost calculations
 [S15 DEBUG] 💰 Electricity price from S04: raw="$0.1300" → parsed=$0/kWh
 🔍 S15 TARGET UPSTREAM: target_i_104=116070.33, target_m_121=48980.79999999999, target_i_80=45879.580160000005
 [S15 DEBUG] 💰 All energy prices from S04: elec=$0, gas=$0, propane=$0, oil=$0, wood=$0
 🔍 S15 REFERENCE UPSTREAM: ref_i_104=0, ref_m_121=84594.73968, ref_i_80=0
 [S15] Missing critical upstream Reference values: ref_g_101, ref_d_101, ref_i_104
calculateReferenceModel @ 4011-Section15.js:1366
calculateAll @ 4011-Section15.js:1286
(anonymous) @ 4011-Section15.js:1945
(anonymous) @ 4011-StateManager.js:486
notifyListeners @ 4011-StateManager.js:484
setValue @ 4011-StateManager.js:362
window.TEUI.StateManager.setValue @ 4011-ComponentBridge.js:429
calculateValues @ 4011-Section15.js:1705
calculateTargetModel @ 4011-Section15.js:1563
calculateAll @ 4011-Section15.js:1287
(anonymous) @ 4011-Section15.js:1945
(anonymous) @ 4011-StateManager.js:486
notifyListeners @ 4011-StateManager.js:484
setValue @ 4011-StateManager.js:362
window.TEUI.StateManager.setValue @ 4011-ComponentBridge.js:429
setCalculatedValue @ 4011-Section01.js:383
calculateTargetModel @ 4011-Section01.js:577
runAllCalculations @ 4011-Section01.js:1234
(anonymous) @ 4011-Section01.js:1306
(anonymous) @ 4011-StateManager.js:486
notifyListeners @ 4011-StateManager.js:484
setValue @ 4011-StateManager.js:362
window.TEUI.StateManager.setValue @ 4011-ComponentBridge.js:429
setValueIfChanged @ 4011-Section04.js:2256
calculateReferenceModel @ 4011-Section04.js:2293
calculateAll @ 4011-Section04.js:2401
(anonymous) @ 4011-Section04.js:2198
setTimeout
onSectionRendered @ 4011-Section04.js:2195
initializeSectionEventHandlers @ 4011-FieldManager.js:322
renderSection @ 4011-FieldManager.js:367
(anonymous) @ 4011-FieldManager.js:394
renderAllSections @ 4011-FieldManager.js:393
(anonymous) @ 4011-FieldManager.js:1389Understand this warningAI
 ✅ S15 Reference Model: All values converted to numbers for proper math
 ✅ S15 Reference Model: Additional fuel variables declared for cost calculations
 [S15 DEBUG] 💰 Electricity price from S04: raw="$0.1300" → parsed=$0/kWh
 🔍 S15 TARGET UPSTREAM: target_i_104=116070.33, target_m_121=48980.79999999999, target_i_80=45879.580160000005
 [S15 DEBUG] 💰 All energy prices from S04: elec=$0, gas=$0, propane=$0, oil=$0, wood=$0
 [S15 DEBUG] 🧮 D141 calculation: 220216.85125050816 kWh/m²/yr × $0/kWh = $0.00
 🔍 S15 REFERENCE UPSTREAM: ref_i_104=0, ref_m_121=84594.73968, ref_i_80=0
 [S15] Missing critical upstream Reference values: ref_g_101, ref_d_101, ref_i_104
calculateReferenceModel @ 4011-Section15.js:1366
calculateAll @ 4011-Section15.js:1286
(anonymous) @ 4011-Section15.js:1945
(anonymous) @ 4011-StateManager.js:486
notifyListeners @ 4011-StateManager.js:484
setValue @ 4011-StateManager.js:362
window.TEUI.StateManager.setValue @ 4011-ComponentBridge.js:429
calculateValues @ 4011-Section15.js:1705
calculateTargetModel @ 4011-Section15.js:1563
calculateAll @ 4011-Section15.js:1287
(anonymous) @ 4011-Section15.js:1945
(anonymous) @ 4011-StateManager.js:486
notifyListeners @ 4011-StateManager.js:484
setValue @ 4011-StateManager.js:362
window.TEUI.StateManager.setValue @ 4011-ComponentBridge.js:429
setCalculatedValue @ 4011-Section01.js:383
calculateTargetModel @ 4011-Section01.js:577
runAllCalculations @ 4011-Section01.js:1234
(anonymous) @ 4011-Section01.js:1306
(anonymous) @ 4011-StateManager.js:486
notifyListeners @ 4011-StateManager.js:484
setValue @ 4011-StateManager.js:362
window.TEUI.StateManager.setValue @ 4011-ComponentBridge.js:429
setValueIfChanged @ 4011-Section04.js:2256
calculateReferenceModel @ 4011-Section04.js:2293
calculateAll @ 4011-Section04.js:2401
(anonymous) @ 4011-Section04.js:2198
setTimeout
onSectionRendered @ 4011-Section04.js:2195
initializeSectionEventHandlers @ 4011-FieldManager.js:322
renderSection @ 4011-FieldManager.js:367
(anonymous) @ 4011-FieldManager.js:394
renderAllSections @ 4011-FieldManager.js:393
(anonymous) @ 4011-FieldManager.js:1389Understand this warningAI
 ✅ S15 Reference Model: All values converted to numbers for proper math
 ✅ S15 Reference Model: Additional fuel variables declared for cost calculations
 [S15 DEBUG] 💰 Electricity price from S04: raw="$0.1300" → parsed=$0/kWh
 🔍 S15 TARGET UPSTREAM: target_i_104=116070.33, target_m_121=48980.79999999999, target_i_80=45879.580160000005
 [S15 DEBUG] 💰 All energy prices from S04: elec=$0, gas=$0, propane=$0, oil=$0, wood=$0
 [S15 DEBUG] 🧮 D141 calculation: 220216.85125050816 kWh/m²/yr × $0/kWh = $0.00
 [S15 DEBUG] 🧮 D141 calculation: 220216.85125050816 kWh/m²/yr × $0/kWh = $0.00
 🔍 S15 REFERENCE UPSTREAM: ref_i_104=0, ref_m_121=84594.73968, ref_i_80=0
 [S15] Missing critical upstream Reference values: ref_g_101, ref_d_101, ref_i_104
calculateReferenceModel @ 4011-Section15.js:1366
calculateAll @ 4011-Section15.js:1286
(anonymous) @ 4011-Section15.js:1945
(anonymous) @ 4011-StateManager.js:486
notifyListeners @ 4011-StateManager.js:484
setValue @ 4011-StateManager.js:362
window.TEUI.StateManager.setValue @ 4011-ComponentBridge.js:429
setCalculatedValue @ 4011-Section01.js:383
calculateTargetModel @ 4011-Section01.js:577
runAllCalculations @ 4011-Section01.js:1234
(anonymous) @ 4011-Section01.js:1306
(anonymous) @ 4011-StateManager.js:486
notifyListeners @ 4011-StateManager.js:484
setValue @ 4011-StateManager.js:362
window.TEUI.StateManager.setValue @ 4011-ComponentBridge.js:429
setValueIfChanged @ 4011-Section04.js:2256
calculateReferenceModel @ 4011-Section04.js:2293
calculateAll @ 4011-Section04.js:2401
(anonymous) @ 4011-Section04.js:2198
setTimeout
onSectionRendered @ 4011-Section04.js:2195
initializeSectionEventHandlers @ 4011-FieldManager.js:322
renderSection @ 4011-FieldManager.js:367
(anonymous) @ 4011-FieldManager.js:394
renderAllSections @ 4011-FieldManager.js:393
(anonymous) @ 4011-FieldManager.js:1389Understand this warningAI
 ✅ S15 Reference Model: All values converted to numbers for proper math
 ✅ S15 Reference Model: Additional fuel variables declared for cost calculations
 [S15 DEBUG] 💰 Electricity price from S04: raw="$0.1300" → parsed=$0/kWh
 🔍 S15 TARGET UPSTREAM: target_i_104=116070.33, target_m_121=48980.79999999999, target_i_80=45879.580160000005
 [S15 DEBUG] 💰 All energy prices from S04: elec=$0, gas=$0, propane=$0, oil=$0, wood=$0
 [S15 DEBUG] 🧮 D141 calculation: 220216.85125050816 kWh/m²/yr × $0/kWh = $0.00
 [S02] Switched to REFERENCE mode
 [S02] Switched to TARGET mode
 [S02] Switched to TARGET mode
 [S02] Switched to TARGET mode
 [S02] Switched to REFERENCE mode
 [S02] Switched to TARGET mode
 [S02] Switched to TARGET mode
 [S02] Switched to TARGET mode
 🔍 S15 REFERENCE UPSTREAM: ref_i_104=0, ref_m_121=84594.73968, ref_i_80=0
 [S15] Missing critical upstream Reference values: ref_g_101, ref_d_101, ref_i_104
calculateReferenceModel @ 4011-Section15.js:1366
calculateAll @ 4011-Section15.js:1286
(anonymous) @ 4011-Section15.js:1945
(anonymous) @ 4011-StateManager.js:486
notifyListeners @ 4011-StateManager.js:484
setValue @ 4011-StateManager.js:362
window.TEUI.StateManager.setValue @ 4011-ComponentBridge.js:429
setValueIfChanged @ 4011-Section04.js:2256
calculateReferenceModel @ 4011-Section04.js:2293
calculateAll @ 4011-Section04.js:2401
(anonymous) @ 4011-Section04.js:2198
setTimeout
onSectionRendered @ 4011-Section04.js:2195
initializeSectionEventHandlers @ 4011-FieldManager.js:322
renderSection @ 4011-FieldManager.js:367
(anonymous) @ 4011-FieldManager.js:394
renderAllSections @ 4011-FieldManager.js:393
(anonymous) @ 4011-FieldManager.js:1389Understand this warningAI
 ✅ S15 Reference Model: All values converted to numbers for proper math
 ✅ S15 Reference Model: Additional fuel variables declared for cost calculations
 [S15 DEBUG] 💰 Electricity price from S04: raw="$0.1300" → parsed=$0/kWh
 🔍 S15 TARGET UPSTREAM: target_i_104=116070.33, target_m_121=48980.79999999999, target_i_80=45879.580160000005
 [S15 DEBUG] 💰 All energy prices from S04: elec=$0, gas=$0, propane=$0, oil=$0, wood=$0
 [S15 DEBUG] 🧮 D141 calculation: 220216.85125050816 kWh/m²/yr × $0/kWh = $0.00
 🔍 S15 REFERENCE UPSTREAM: ref_i_104=0, ref_m_121=84594.73968, ref_i_80=0
 [S15] Missing critical upstream Reference values: ref_g_101, ref_d_101, ref_i_104
calculateReferenceModel @ 4011-Section15.js:1366
calculateAll @ 4011-Section15.js:1286
(anonymous) @ 4011-Section15.js:1945
(anonymous) @ 4011-StateManager.js:486
notifyListeners @ 4011-StateManager.js:484
setValue @ 4011-StateManager.js:362
window.TEUI.StateManager.setValue @ 4011-ComponentBridge.js:429
setValueIfChanged @ 4011-Section04.js:2256
calculateReferenceModel @ 4011-Section04.js:2293
calculateAll @ 4011-Section04.js:2401
(anonymous) @ 4011-Section04.js:2198
setTimeout
onSectionRendered @ 4011-Section04.js:2195
initializeSectionEventHandlers @ 4011-FieldManager.js:322
renderSection @ 4011-FieldManager.js:367
(anonymous) @ 4011-FieldManager.js:394
renderAllSections @ 4011-FieldManager.js:393
(anonymous) @ 4011-FieldManager.js:1389Understand this warningAI
 ✅ S15 Reference Model: All values converted to numbers for proper math
 ✅ S15 Reference Model: Additional fuel variables declared for cost calculations
 [S15 DEBUG] 💰 Electricity price from S04: raw="$0.1300" → parsed=$0/kWh
 🔍 S15 TARGET UPSTREAM: target_i_104=116070.33, target_m_121=48980.79999999999, target_i_80=45879.580160000005
 [S15 DEBUG] 💰 All energy prices from S04: elec=$0, gas=$0, propane=$0, oil=$0, wood=$0
 [S15 DEBUG] 🧮 D141 calculation: 220216.85125050816 kWh/m²/yr × $0/kWh = $0.00
 S04 REFERENCE MODEL: ref_j_32=133574.3671495516, ref_k_32=6812.292724627132
 🔍 S15 REFERENCE UPSTREAM: ref_i_104=0, ref_m_121=84594.73968, ref_i_80=0
 [S15] Missing critical upstream Reference values: ref_g_101, ref_d_101, ref_i_104
calculateReferenceModel @ 4011-Section15.js:1366
calculateAll @ 4011-Section15.js:1286
(anonymous) @ 4011-Section15.js:1945
(anonymous) @ 4011-StateManager.js:486
notifyListeners @ 4011-StateManager.js:484
setValue @ 4011-StateManager.js:362
window.TEUI.StateManager.setValue @ 4011-ComponentBridge.js:429
setCalculatedValue @ 4011-Section01.js:383
calculateTargetModel @ 4011-Section01.js:577
runAllCalculations @ 4011-Section01.js:1234
updateSubtotals @ 4011-Section04.js:1663
calculateTargetModel @ 4011-Section04.js:2386
calculateAll @ 4011-Section04.js:2402
(anonymous) @ 4011-Section04.js:2198
setTimeout
onSectionRendered @ 4011-Section04.js:2195
initializeSectionEventHandlers @ 4011-FieldManager.js:322
renderSection @ 4011-FieldManager.js:367
(anonymous) @ 4011-FieldManager.js:394
renderAllSections @ 4011-FieldManager.js:393
(anonymous) @ 4011-FieldManager.js:1389Understand this warningAI
 ✅ S15 Reference Model: All values converted to numbers for proper math
 ✅ S15 Reference Model: Additional fuel variables declared for cost calculations
 [S15 DEBUG] 💰 Electricity price from S04: raw="$0.1300" → parsed=$0/kWh
 🔍 S15 TARGET UPSTREAM: target_i_104=116070.33, target_m_121=48980.79999999999, target_i_80=45879.580160000005
 [S15 DEBUG] 💰 All energy prices from S04: elec=$0, gas=$0, propane=$0, oil=$0, wood=$0
 🔍 S15 REFERENCE UPSTREAM: ref_i_104=0, ref_m_121=84594.73968, ref_i_80=0
 [S15] Missing critical upstream Reference values: ref_g_101, ref_d_101, ref_i_104
calculateReferenceModel @ 4011-Section15.js:1366
calculateAll @ 4011-Section15.js:1286
(anonymous) @ 4011-Section15.js:1945
(anonymous) @ 4011-StateManager.js:486
notifyListeners @ 4011-StateManager.js:484
setValue @ 4011-StateManager.js:362
window.TEUI.StateManager.setValue @ 4011-ComponentBridge.js:429
calculateValues @ 4011-Section15.js:1705
calculateTargetModel @ 4011-Section15.js:1563
calculateAll @ 4011-Section15.js:1287
(anonymous) @ 4011-Section15.js:1945
(anonymous) @ 4011-StateManager.js:486
notifyListeners @ 4011-StateManager.js:484
setValue @ 4011-StateManager.js:362
window.TEUI.StateManager.setValue @ 4011-ComponentBridge.js:429
setCalculatedValue @ 4011-Section01.js:383
calculateTargetModel @ 4011-Section01.js:577
runAllCalculations @ 4011-Section01.js:1234
updateSubtotals @ 4011-Section04.js:1663
calculateTargetModel @ 4011-Section04.js:2386
calculateAll @ 4011-Section04.js:2402
(anonymous) @ 4011-Section04.js:2198
setTimeout
onSectionRendered @ 4011-Section04.js:2195
initializeSectionEventHandlers @ 4011-FieldManager.js:322
renderSection @ 4011-FieldManager.js:367
(anonymous) @ 4011-FieldManager.js:394
renderAllSections @ 4011-FieldManager.js:393
(anonymous) @ 4011-FieldManager.js:1389Understand this warningAI
 ✅ S15 Reference Model: All values converted to numbers for proper math
 ✅ S15 Reference Model: Additional fuel variables declared for cost calculations
 [S15 DEBUG] 💰 Electricity price from S04: raw="$0.1300" → parsed=$0/kWh
 🔍 S15 TARGET UPSTREAM: target_i_104=116070.33, target_m_121=48980.79999999999, target_i_80=45879.580160000005
 [S15 DEBUG] 💰 All energy prices from S04: elec=$0, gas=$0, propane=$0, oil=$0, wood=$0
 [S15 DEBUG] 🧮 D141 calculation: 220216.85125050816 kWh/m²/yr × $0/kWh = $0.00
 🔍 S15 REFERENCE UPSTREAM: ref_i_104=0, ref_m_121=84594.73968, ref_i_80=0
 [S15] Missing critical upstream Reference values: ref_g_101, ref_d_101, ref_i_104
calculateReferenceModel @ 4011-Section15.js:1366
calculateAll @ 4011-Section15.js:1286
(anonymous) @ 4011-Section15.js:1945
(anonymous) @ 4011-StateManager.js:486
notifyListeners @ 4011-StateManager.js:484
setValue @ 4011-StateManager.js:362
window.TEUI.StateManager.setValue @ 4011-ComponentBridge.js:429
calculateValues @ 4011-Section15.js:1705
calculateTargetModel @ 4011-Section15.js:1563
calculateAll @ 4011-Section15.js:1287
(anonymous) @ 4011-Section15.js:1945
(anonymous) @ 4011-StateManager.js:486
notifyListeners @ 4011-StateManager.js:484
setValue @ 4011-StateManager.js:362
window.TEUI.StateManager.setValue @ 4011-ComponentBridge.js:429
setCalculatedValue @ 4011-Section01.js:383
calculateTargetModel @ 4011-Section01.js:577
runAllCalculations @ 4011-Section01.js:1234
updateSubtotals @ 4011-Section04.js:1663
calculateTargetModel @ 4011-Section04.js:2386
calculateAll @ 4011-Section04.js:2402
(anonymous) @ 4011-Section04.js:2198
setTimeout
onSectionRendered @ 4011-Section04.js:2195
initializeSectionEventHandlers @ 4011-FieldManager.js:322
renderSection @ 4011-FieldManager.js:367
(anonymous) @ 4011-FieldManager.js:394
renderAllSections @ 4011-FieldManager.js:393
(anonymous) @ 4011-FieldManager.js:1389Understand this warningAI
 ✅ S15 Reference Model: All values converted to numbers for proper math
 ✅ S15 Reference Model: Additional fuel variables declared for cost calculations
 [S15 DEBUG] 💰 Electricity price from S04: raw="$0.1300" → parsed=$0/kWh
 🔍 S15 TARGET UPSTREAM: target_i_104=116070.33, target_m_121=48980.79999999999, target_i_80=45879.580160000005
 [S15 DEBUG] 💰 All energy prices from S04: elec=$0, gas=$0, propane=$0, oil=$0, wood=$0
 [S15 DEBUG] 🧮 D141 calculation: 220216.85125050816 kWh/m²/yr × $0/kWh = $0.00
 [S15 DEBUG] 🧮 D141 calculation: 220216.85125050816 kWh/m²/yr × $0/kWh = $0.00
 🔍 S15 REFERENCE UPSTREAM: ref_i_104=0, ref_m_121=84594.73968, ref_i_80=0
 [S15] Missing critical upstream Reference values: ref_g_101, ref_d_101, ref_i_104
calculateReferenceModel @ 4011-Section15.js:1366
calculateAll @ 4011-Section15.js:1286
(anonymous) @ 4011-Section15.js:1945
(anonymous) @ 4011-StateManager.js:486
notifyListeners @ 4011-StateManager.js:484
setValue @ 4011-StateManager.js:362
window.TEUI.StateManager.setValue @ 4011-ComponentBridge.js:429
setCalculatedValue @ 4011-Section01.js:383
calculateTargetModel @ 4011-Section01.js:577
runAllCalculations @ 4011-Section01.js:1234
updateSubtotals @ 4011-Section04.js:1663
calculateTargetModel @ 4011-Section04.js:2386
calculateAll @ 4011-Section04.js:2402
(anonymous) @ 4011-Section04.js:2198
setTimeout
onSectionRendered @ 4011-Section04.js:2195
initializeSectionEventHandlers @ 4011-FieldManager.js:322
renderSection @ 4011-FieldManager.js:367
(anonymous) @ 4011-FieldManager.js:394
renderAllSections @ 4011-FieldManager.js:393
(anonymous) @ 4011-FieldManager.js:1389Understand this warningAI
 ✅ S15 Reference Model: All values converted to numbers for proper math
 ✅ S15 Reference Model: Additional fuel variables declared for cost calculations
 [S15 DEBUG] 💰 Electricity price from S04: raw="$0.1300" → parsed=$0/kWh
 🔍 S15 TARGET UPSTREAM: target_i_104=116070.33, target_m_121=48980.79999999999, target_i_80=45879.580160000005
 [S15 DEBUG] 💰 All energy prices from S04: elec=$0, gas=$0, propane=$0, oil=$0, wood=$0
 [S15 DEBUG] 🧮 D141 calculation: 220216.85125050816 kWh/m²/yr × $0/kWh = $0.00
 🔍 S15 REFERENCE UPSTREAM: ref_i_104=0, ref_m_121=84594.73968, ref_i_80=0
 [S15] Missing critical upstream Reference values: ref_g_101, ref_d_101, ref_i_104
calculateReferenceModel @ 4011-Section15.js:1366
calculateAll @ 4011-Section15.js:1286
(anonymous) @ 4011-Section15.js:1945
(anonymous) @ 4011-StateManager.js:486
notifyListeners @ 4011-StateManager.js:484
setValue @ 4011-StateManager.js:362
window.TEUI.StateManager.setValue @ 4011-ComponentBridge.js:429
setCalculatedValue @ 4011-Section01.js:383
calculateTargetModel @ 4011-Section01.js:577
runAllCalculations @ 4011-Section01.js:1234
updateSubtotals @ 4011-Section04.js:1663
updateGridIntensityForMode @ 4011-Section04.js:1456
updateElectricityEmissionFactor @ 4011-Section04.js:1345
(anonymous) @ 4011-Section04.js:2196
setTimeout
onSectionRendered @ 4011-Section04.js:2195
initializeSectionEventHandlers @ 4011-FieldManager.js:322
renderSection @ 4011-FieldManager.js:367
(anonymous) @ 4011-FieldManager.js:394
renderAllSections @ 4011-FieldManager.js:393
initialize @ 4011-Calculator.js:66
(anonymous) @ 4011-Calculator.js:965Understand this warningAI
 ✅ S15 Reference Model: All values converted to numbers for proper math
 ✅ S15 Reference Model: Additional fuel variables declared for cost calculations
 [S15 DEBUG] 💰 Electricity price from S04: raw="$0.1300" → parsed=$0/kWh
 🔍 S15 TARGET UPSTREAM: target_i_104=116070.33, target_m_121=48980.79999999999, target_i_80=45879.580160000005
 [S15 DEBUG] 💰 All energy prices from S04: elec=$0, gas=$0, propane=$0, oil=$0, wood=$0
 🔍 S15 REFERENCE UPSTREAM: ref_i_104=0, ref_m_121=84594.73968, ref_i_80=0
 [S15] Missing critical upstream Reference values: ref_g_101, ref_d_101, ref_i_104
calculateReferenceModel @ 4011-Section15.js:1366
calculateAll @ 4011-Section15.js:1286
(anonymous) @ 4011-Section15.js:1945
(anonymous) @ 4011-StateManager.js:486
notifyListeners @ 4011-StateManager.js:484
setValue @ 4011-StateManager.js:362
window.TEUI.StateManager.setValue @ 4011-ComponentBridge.js:429
calculateValues @ 4011-Section15.js:1705
calculateTargetModel @ 4011-Section15.js:1563
calculateAll @ 4011-Section15.js:1287
(anonymous) @ 4011-Section15.js:1945
(anonymous) @ 4011-StateManager.js:486
notifyListeners @ 4011-StateManager.js:484
setValue @ 4011-StateManager.js:362
window.TEUI.StateManager.setValue @ 4011-ComponentBridge.js:429
setCalculatedValue @ 4011-Section01.js:383
calculateTargetModel @ 4011-Section01.js:577
runAllCalculations @ 4011-Section01.js:1234
updateSubtotals @ 4011-Section04.js:1663
updateGridIntensityForMode @ 4011-Section04.js:1456
updateElectricityEmissionFactor @ 4011-Section04.js:1345
(anonymous) @ 4011-Section04.js:2196
setTimeout
onSectionRendered @ 4011-Section04.js:2195
initializeSectionEventHandlers @ 4011-FieldManager.js:322
renderSection @ 4011-FieldManager.js:367
(anonymous) @ 4011-FieldManager.js:394
renderAllSections @ 4011-FieldManager.js:393
initialize @ 4011-Calculator.js:66
(anonymous) @ 4011-Calculator.js:965Understand this warningAI
 ✅ S15 Reference Model: All values converted to numbers for proper math
 ✅ S15 Reference Model: Additional fuel variables declared for cost calculations
 [S15 DEBUG] 💰 Electricity price from S04: raw="$0.1300" → parsed=$0/kWh
 🔍 S15 TARGET UPSTREAM: target_i_104=116070.33, target_m_121=48980.79999999999, target_i_80=45879.580160000005
 [S15 DEBUG] 💰 All energy prices from S04: elec=$0, gas=$0, propane=$0, oil=$0, wood=$0
 [S15 DEBUG] 🧮 D141 calculation: 220216.85125050816 kWh/m²/yr × $0/kWh = $0.00
 🔍 S15 REFERENCE UPSTREAM: ref_i_104=0, ref_m_121=84594.73968, ref_i_80=0
 [S15] Missing critical upstream Reference values: ref_g_101, ref_d_101, ref_i_104
calculateReferenceModel @ 4011-Section15.js:1366
calculateAll @ 4011-Section15.js:1286
(anonymous) @ 4011-Section15.js:1945
(anonymous) @ 4011-StateManager.js:486
notifyListeners @ 4011-StateManager.js:484
setValue @ 4011-StateManager.js:362
window.TEUI.StateManager.setValue @ 4011-ComponentBridge.js:429
calculateValues @ 4011-Section15.js:1705
calculateTargetModel @ 4011-Section15.js:1563
calculateAll @ 4011-Section15.js:1287
(anonymous) @ 4011-Section15.js:1945
(anonymous) @ 4011-StateManager.js:486
notifyListeners @ 4011-StateManager.js:484
setValue @ 4011-StateManager.js:362
window.TEUI.StateManager.setValue @ 4011-ComponentBridge.js:429
setCalculatedValue @ 4011-Section01.js:383
calculateTargetModel @ 4011-Section01.js:577
runAllCalculations @ 4011-Section01.js:1234
updateSubtotals @ 4011-Section04.js:1663
updateGridIntensityForMode @ 4011-Section04.js:1456
updateElectricityEmissionFactor @ 4011-Section04.js:1345
(anonymous) @ 4011-Section04.js:2196
setTimeout
onSectionRendered @ 4011-Section04.js:2195
initializeSectionEventHandlers @ 4011-FieldManager.js:322
renderSection @ 4011-FieldManager.js:367
(anonymous) @ 4011-FieldManager.js:394
renderAllSections @ 4011-FieldManager.js:393
initialize @ 4011-Calculator.js:66
(anonymous) @ 4011-Calculator.js:965Understand this warningAI
 ✅ S15 Reference Model: All values converted to numbers for proper math
 ✅ S15 Reference Model: Additional fuel variables declared for cost calculations
 [S15 DEBUG] 💰 Electricity price from S04: raw="$0.1300" → parsed=$0/kWh
 🔍 S15 TARGET UPSTREAM: target_i_104=116070.33, target_m_121=48980.79999999999, target_i_80=45879.580160000005
 [S15 DEBUG] 💰 All energy prices from S04: elec=$0, gas=$0, propane=$0, oil=$0, wood=$0
 [S15 DEBUG] 🧮 D141 calculation: 220216.85125050816 kWh/m²/yr × $0/kWh = $0.00
 [S15 DEBUG] 🧮 D141 calculation: 220216.85125050816 kWh/m²/yr × $0/kWh = $0.00
 🔍 S15 REFERENCE UPSTREAM: ref_i_104=0, ref_m_121=84594.73968, ref_i_80=0
 [S15] Missing critical upstream Reference values: ref_g_101, ref_d_101, ref_i_104
calculateReferenceModel @ 4011-Section15.js:1366
calculateAll @ 4011-Section15.js:1286
(anonymous) @ 4011-Section15.js:1945
(anonymous) @ 4011-StateManager.js:486
notifyListeners @ 4011-StateManager.js:484
setValue @ 4011-StateManager.js:362
window.TEUI.StateManager.setValue @ 4011-ComponentBridge.js:429
setCalculatedValue @ 4011-Section01.js:383
calculateTargetModel @ 4011-Section01.js:577
runAllCalculations @ 4011-Section01.js:1234
updateSubtotals @ 4011-Section04.js:1663
updateGridIntensityForMode @ 4011-Section04.js:1456
updateElectricityEmissionFactor @ 4011-Section04.js:1345
(anonymous) @ 4011-Section04.js:2196
setTimeout
onSectionRendered @ 4011-Section04.js:2195
initializeSectionEventHandlers @ 4011-FieldManager.js:322
renderSection @ 4011-FieldManager.js:367
(anonymous) @ 4011-FieldManager.js:394
renderAllSections @ 4011-FieldManager.js:393
initialize @ 4011-Calculator.js:66
(anonymous) @ 4011-Calculator.js:965Understand this warningAI
 ✅ S15 Reference Model: All values converted to numbers for proper math
 ✅ S15 Reference Model: Additional fuel variables declared for cost calculations
 [S15 DEBUG] 💰 Electricity price from S04: raw="$0.1300" → parsed=$0/kWh
 🔍 S15 TARGET UPSTREAM: target_i_104=116070.33, target_m_121=48980.79999999999, target_i_80=45879.580160000005
 [S15 DEBUG] 💰 All energy prices from S04: elec=$0, gas=$0, propane=$0, oil=$0, wood=$0
 [S15 DEBUG] 🧮 D141 calculation: 220216.85125050816 kWh/m²/yr × $0/kWh = $0.00
 S04 REFERENCE MODEL: ref_j_32=133574.3671495516, ref_k_32=6812.292724627132
 🔍 S15 REFERENCE UPSTREAM: ref_i_104=0, ref_m_121=84594.73968, ref_i_80=0
 [S15] Missing critical upstream Reference values: ref_g_101, ref_d_101, ref_i_104
calculateReferenceModel @ 4011-Section15.js:1366
calculateAll @ 4011-Section15.js:1286
(anonymous) @ 4011-Section15.js:1945
(anonymous) @ 4011-StateManager.js:486
notifyListeners @ 4011-StateManager.js:484
setValue @ 4011-StateManager.js:362
window.TEUI.StateManager.setValue @ 4011-ComponentBridge.js:429
setCalculatedValue @ 4011-Section01.js:383
calculateTargetModel @ 4011-Section01.js:577
runAllCalculations @ 4011-Section01.js:1234
updateSubtotals @ 4011-Section04.js:1663
calculateTargetModel @ 4011-Section04.js:2386
calculateAll @ 4011-Section04.js:2402
(anonymous) @ 4011-Section04.js:2198
setTimeout
onSectionRendered @ 4011-Section04.js:2195
initializeSectionEventHandlers @ 4011-FieldManager.js:322
renderSection @ 4011-FieldManager.js:367
(anonymous) @ 4011-FieldManager.js:394
renderAllSections @ 4011-FieldManager.js:393
initialize @ 4011-Calculator.js:66
(anonymous) @ 4011-Calculator.js:965Understand this warningAI
 ✅ S15 Reference Model: All values converted to numbers for proper math
 ✅ S15 Reference Model: Additional fuel variables declared for cost calculations
 [S15 DEBUG] 💰 Electricity price from S04: raw="$0.1300" → parsed=$0/kWh
 🔍 S15 TARGET UPSTREAM: target_i_104=116070.33, target_m_121=48980.79999999999, target_i_80=45879.580160000005
 [S15 DEBUG] 💰 All energy prices from S04: elec=$0, gas=$0, propane=$0, oil=$0, wood=$0
 🔍 S15 REFERENCE UPSTREAM: ref_i_104=0, ref_m_121=84594.73968, ref_i_80=0
 [S15] Missing critical upstream Reference values: ref_g_101, ref_d_101, ref_i_104
calculateReferenceModel @ 4011-Section15.js:1366
calculateAll @ 4011-Section15.js:1286
(anonymous) @ 4011-Section15.js:1945
(anonymous) @ 4011-StateManager.js:486
notifyListeners @ 4011-StateManager.js:484
setValue @ 4011-StateManager.js:362
window.TEUI.StateManager.setValue @ 4011-ComponentBridge.js:429
calculateValues @ 4011-Section15.js:1705
calculateTargetModel @ 4011-Section15.js:1563
calculateAll @ 4011-Section15.js:1287
(anonymous) @ 4011-Section15.js:1945
(anonymous) @ 4011-StateManager.js:486
notifyListeners @ 4011-StateManager.js:484
setValue @ 4011-StateManager.js:362
window.TEUI.StateManager.setValue @ 4011-ComponentBridge.js:429
setCalculatedValue @ 4011-Section01.js:383
calculateTargetModel @ 4011-Section01.js:577
runAllCalculations @ 4011-Section01.js:1234
updateSubtotals @ 4011-Section04.js:1663
calculateTargetModel @ 4011-Section04.js:2386
calculateAll @ 4011-Section04.js:2402
(anonymous) @ 4011-Section04.js:2198
setTimeout
onSectionRendered @ 4011-Section04.js:2195
initializeSectionEventHandlers @ 4011-FieldManager.js:322
renderSection @ 4011-FieldManager.js:367
(anonymous) @ 4011-FieldManager.js:394
renderAllSections @ 4011-FieldManager.js:393
initialize @ 4011-Calculator.js:66
(anonymous) @ 4011-Calculator.js:965Understand this warningAI
 ✅ S15 Reference Model: All values converted to numbers for proper math
 ✅ S15 Reference Model: Additional fuel variables declared for cost calculations
 [S15 DEBUG] 💰 Electricity price from S04: raw="$0.1300" → parsed=$0/kWh
 🔍 S15 TARGET UPSTREAM: target_i_104=116070.33, target_m_121=48980.79999999999, target_i_80=45879.580160000005
 [S15 DEBUG] 💰 All energy prices from S04: elec=$0, gas=$0, propane=$0, oil=$0, wood=$0
 [S15 DEBUG] 🧮 D141 calculation: 220216.85125050816 kWh/m²/yr × $0/kWh = $0.00
 🔍 S15 REFERENCE UPSTREAM: ref_i_104=0, ref_m_121=84594.73968, ref_i_80=0
 [S15] Missing critical upstream Reference values: ref_g_101, ref_d_101, ref_i_104
calculateReferenceModel @ 4011-Section15.js:1366
calculateAll @ 4011-Section15.js:1286
(anonymous) @ 4011-Section15.js:1945
(anonymous) @ 4011-StateManager.js:486
notifyListeners @ 4011-StateManager.js:484
setValue @ 4011-StateManager.js:362
window.TEUI.StateManager.setValue @ 4011-ComponentBridge.js:429
calculateValues @ 4011-Section15.js:1705
calculateTargetModel @ 4011-Section15.js:1563
calculateAll @ 4011-Section15.js:1287
(anonymous) @ 4011-Section15.js:1945
(anonymous) @ 4011-StateManager.js:486
notifyListeners @ 4011-StateManager.js:484
setValue @ 4011-StateManager.js:362
window.TEUI.StateManager.setValue @ 4011-ComponentBridge.js:429
setCalculatedValue @ 4011-Section01.js:383
calculateTargetModel @ 4011-Section01.js:577
runAllCalculations @ 4011-Section01.js:1234
updateSubtotals @ 4011-Section04.js:1663
calculateTargetModel @ 4011-Section04.js:2386
calculateAll @ 4011-Section04.js:2402
(anonymous) @ 4011-Section04.js:2198
setTimeout
onSectionRendered @ 4011-Section04.js:2195
initializeSectionEventHandlers @ 4011-FieldManager.js:322
renderSection @ 4011-FieldManager.js:367
(anonymous) @ 4011-FieldManager.js:394
renderAllSections @ 4011-FieldManager.js:393
initialize @ 4011-Calculator.js:66
(anonymous) @ 4011-Calculator.js:965Understand this warningAI
 ✅ S15 Reference Model: All values converted to numbers for proper math
 ✅ S15 Reference Model: Additional fuel variables declared for cost calculations
 [S15 DEBUG] 💰 Electricity price from S04: raw="$0.1300" → parsed=$0/kWh
 🔍 S15 TARGET UPSTREAM: target_i_104=116070.33, target_m_121=48980.79999999999, target_i_80=45879.580160000005
 [S15 DEBUG] 💰 All energy prices from S04: elec=$0, gas=$0, propane=$0, oil=$0, wood=$0
 [S15 DEBUG] 🧮 D141 calculation: 220216.85125050816 kWh/m²/yr × $0/kWh = $0.00
 [S15 DEBUG] 🧮 D141 calculation: 220216.85125050816 kWh/m²/yr × $0/kWh = $0.00
 🔍 S15 REFERENCE UPSTREAM: ref_i_104=0, ref_m_121=84594.73968, ref_i_80=0
 [S15] Missing critical upstream Reference values: ref_g_101, ref_d_101, ref_i_104
calculateReferenceModel @ 4011-Section15.js:1366
calculateAll @ 4011-Section15.js:1286
(anonymous) @ 4011-Section15.js:1945
(anonymous) @ 4011-StateManager.js:486
notifyListeners @ 4011-StateManager.js:484
setValue @ 4011-StateManager.js:362
window.TEUI.StateManager.setValue @ 4011-ComponentBridge.js:429
setCalculatedValue @ 4011-Section01.js:383
calculateTargetModel @ 4011-Section01.js:577
runAllCalculations @ 4011-Section01.js:1234
updateSubtotals @ 4011-Section04.js:1663
calculateTargetModel @ 4011-Section04.js:2386
calculateAll @ 4011-Section04.js:2402
(anonymous) @ 4011-Section04.js:2198
setTimeout
onSectionRendered @ 4011-Section04.js:2195
initializeSectionEventHandlers @ 4011-FieldManager.js:322
renderSection @ 4011-FieldManager.js:367
(anonymous) @ 4011-FieldManager.js:394
renderAllSections @ 4011-FieldManager.js:393
initialize @ 4011-Calculator.js:66
(anonymous) @ 4011-Calculator.js:965Understand this warningAI
 ✅ S15 Reference Model: All values converted to numbers for proper math
 ✅ S15 Reference Model: Additional fuel variables declared for cost calculations
 [S15 DEBUG] 💰 Electricity price from S04: raw="$0.1300" → parsed=$0/kWh
 🔍 S15 TARGET UPSTREAM: target_i_104=116070.33, target_m_121=48980.79999999999, target_i_80=45879.580160000005
 [S15 DEBUG] 💰 All energy prices from S04: elec=$0, gas=$0, propane=$0, oil=$0, wood=$0
 [S15 DEBUG] 🧮 D141 calculation: 220216.85125050816 kWh/m²/yr × $0/kWh = $0.00
 🔍 S15 REFERENCE UPSTREAM: ref_i_104=0, ref_m_121=84594.73968, ref_i_80=0
 [S15] Missing critical upstream Reference values: ref_g_101, ref_d_101, ref_i_104
calculateReferenceModel @ 4011-Section15.js:1366
calculateAll @ 4011-Section15.js:1286
(anonymous) @ 4011-Section15.js:1945
(anonymous) @ 4011-StateManager.js:486
notifyListeners @ 4011-StateManager.js:484
setValue @ 4011-StateManager.js:362
window.TEUI.StateManager.setValue @ 4011-ComponentBridge.js:429
setCalculatedValue @ 4011-Section01.js:383
calculateTargetModel @ 4011-Section01.js:577
runAllCalculations @ 4011-Section01.js:1234
updateSubtotals @ 4011-Section04.js:1663
updateGridIntensityForMode @ 4011-Section04.js:1456
updateElectricityEmissionFactor @ 4011-Section04.js:1345
(anonymous) @ 4011-Section04.js:2196
setTimeout
onSectionRendered @ 4011-Section04.js:2195
initializeSectionEventHandlers @ 4011-FieldManager.js:322
renderSection @ 4011-FieldManager.js:367
(anonymous) @ 4011-FieldManager.js:394
renderAllSections @ 4011-FieldManager.js:393
(anonymous) @ 4011-init.js:858Understand this warningAI
 ✅ S15 Reference Model: All values converted to numbers for proper math
 ✅ S15 Reference Model: Additional fuel variables declared for cost calculations
 [S15 DEBUG] 💰 Electricity price from S04: raw="$0.1300" → parsed=$0/kWh
 🔍 S15 TARGET UPSTREAM: target_i_104=116070.33, target_m_121=48980.79999999999, target_i_80=45879.580160000005
 [S15 DEBUG] 💰 All energy prices from S04: elec=$0, gas=$0, propane=$0, oil=$0, wood=$0
 🔍 S15 REFERENCE UPSTREAM: ref_i_104=0, ref_m_121=84594.73968, ref_i_80=0
 [S15] Missing critical upstream Reference values: ref_g_101, ref_d_101, ref_i_104
calculateReferenceModel @ 4011-Section15.js:1366
calculateAll @ 4011-Section15.js:1286
(anonymous) @ 4011-Section15.js:1945
(anonymous) @ 4011-StateManager.js:486
notifyListeners @ 4011-StateManager.js:484
setValue @ 4011-StateManager.js:362
window.TEUI.StateManager.setValue @ 4011-ComponentBridge.js:429
calculateValues @ 4011-Section15.js:1705
calculateTargetModel @ 4011-Section15.js:1563
calculateAll @ 4011-Section15.js:1287
(anonymous) @ 4011-Section15.js:1945
(anonymous) @ 4011-StateManager.js:486
notifyListeners @ 4011-StateManager.js:484
setValue @ 4011-StateManager.js:362
window.TEUI.StateManager.setValue @ 4011-ComponentBridge.js:429
setCalculatedValue @ 4011-Section01.js:383
calculateTargetModel @ 4011-Section01.js:577
runAllCalculations @ 4011-Section01.js:1234
updateSubtotals @ 4011-Section04.js:1663
updateGridIntensityForMode @ 4011-Section04.js:1456
updateElectricityEmissionFactor @ 4011-Section04.js:1345
(anonymous) @ 4011-Section04.js:2196
setTimeout
onSectionRendered @ 4011-Section04.js:2195
initializeSectionEventHandlers @ 4011-FieldManager.js:322
renderSection @ 4011-FieldManager.js:367
(anonymous) @ 4011-FieldManager.js:394
renderAllSections @ 4011-FieldManager.js:393
(anonymous) @ 4011-init.js:858Understand this warningAI
 ✅ S15 Reference Model: All values converted to numbers for proper math
 ✅ S15 Reference Model: Additional fuel variables declared for cost calculations
 [S15 DEBUG] 💰 Electricity price from S04: raw="$0.1300" → parsed=$0/kWh
 🔍 S15 TARGET UPSTREAM: target_i_104=116070.33, target_m_121=48980.79999999999, target_i_80=45879.580160000005
 [S15 DEBUG] 💰 All energy prices from S04: elec=$0, gas=$0, propane=$0, oil=$0, wood=$0
 [S15 DEBUG] 🧮 D141 calculation: 220216.85125050816 kWh/m²/yr × $0/kWh = $0.00
 🔍 S15 REFERENCE UPSTREAM: ref_i_104=0, ref_m_121=84594.73968, ref_i_80=0
 [S15] Missing critical upstream Reference values: ref_g_101, ref_d_101, ref_i_104
calculateReferenceModel @ 4011-Section15.js:1366
calculateAll @ 4011-Section15.js:1286
(anonymous) @ 4011-Section15.js:1945
(anonymous) @ 4011-StateManager.js:486
notifyListeners @ 4011-StateManager.js:484
setValue @ 4011-StateManager.js:362
window.TEUI.StateManager.setValue @ 4011-ComponentBridge.js:429
calculateValues @ 4011-Section15.js:1705
calculateTargetModel @ 4011-Section15.js:1563
calculateAll @ 4011-Section15.js:1287
(anonymous) @ 4011-Section15.js:1945
(anonymous) @ 4011-StateManager.js:486
notifyListeners @ 4011-StateManager.js:484
setValue @ 4011-StateManager.js:362
window.TEUI.StateManager.setValue @ 4011-ComponentBridge.js:429
setCalculatedValue @ 4011-Section01.js:383
calculateTargetModel @ 4011-Section01.js:577
runAllCalculations @ 4011-Section01.js:1234
updateSubtotals @ 4011-Section04.js:1663
updateGridIntensityForMode @ 4011-Section04.js:1456
updateElectricityEmissionFactor @ 4011-Section04.js:1345
(anonymous) @ 4011-Section04.js:2196
setTimeout
onSectionRendered @ 4011-Section04.js:2195
initializeSectionEventHandlers @ 4011-FieldManager.js:322
renderSection @ 4011-FieldManager.js:367
(anonymous) @ 4011-FieldManager.js:394
renderAllSections @ 4011-FieldManager.js:393
(anonymous) @ 4011-init.js:858Understand this warningAI
 ✅ S15 Reference Model: All values converted to numbers for proper math
 ✅ S15 Reference Model: Additional fuel variables declared for cost calculations
 [S15 DEBUG] 💰 Electricity price from S04: raw="$0.1300" → parsed=$0/kWh
 🔍 S15 TARGET UPSTREAM: target_i_104=116070.33, target_m_121=48980.79999999999, target_i_80=45879.580160000005
 [S15 DEBUG] 💰 All energy prices from S04: elec=$0, gas=$0, propane=$0, oil=$0, wood=$0
 [S15 DEBUG] 🧮 D141 calculation: 220216.85125050816 kWh/m²/yr × $0/kWh = $0.00
 [S15 DEBUG] 🧮 D141 calculation: 220216.85125050816 kWh/m²/yr × $0/kWh = $0.00
 🔍 S15 REFERENCE UPSTREAM: ref_i_104=0, ref_m_121=84594.73968, ref_i_80=0
 [S15] Missing critical upstream Reference values: ref_g_101, ref_d_101, ref_i_104
calculateReferenceModel @ 4011-Section15.js:1366
calculateAll @ 4011-Section15.js:1286
(anonymous) @ 4011-Section15.js:1945
(anonymous) @ 4011-StateManager.js:486
notifyListeners @ 4011-StateManager.js:484
setValue @ 4011-StateManager.js:362
window.TEUI.StateManager.setValue @ 4011-ComponentBridge.js:429
setCalculatedValue @ 4011-Section01.js:383
calculateTargetModel @ 4011-Section01.js:577
runAllCalculations @ 4011-Section01.js:1234
updateSubtotals @ 4011-Section04.js:1663
updateGridIntensityForMode @ 4011-Section04.js:1456
updateElectricityEmissionFactor @ 4011-Section04.js:1345
(anonymous) @ 4011-Section04.js:2196
setTimeout
onSectionRendered @ 4011-Section04.js:2195
initializeSectionEventHandlers @ 4011-FieldManager.js:322
renderSection @ 4011-FieldManager.js:367
(anonymous) @ 4011-FieldManager.js:394
renderAllSections @ 4011-FieldManager.js:393
(anonymous) @ 4011-init.js:858Understand this warningAI
 ✅ S15 Reference Model: All values converted to numbers for proper math
 ✅ S15 Reference Model: Additional fuel variables declared for cost calculations
 [S15 DEBUG] 💰 Electricity price from S04: raw="$0.1300" → parsed=$0/kWh
 🔍 S15 TARGET UPSTREAM: target_i_104=116070.33, target_m_121=48980.79999999999, target_i_80=45879.580160000005
 [S15 DEBUG] 💰 All energy prices from S04: elec=$0, gas=$0, propane=$0, oil=$0, wood=$0
 [S15 DEBUG] 🧮 D141 calculation: 220216.85125050816 kWh/m²/yr × $0/kWh = $0.00
 S04 REFERENCE MODEL: ref_j_32=133574.3671495516, ref_k_32=6812.292724627132
 🔍 S15 REFERENCE UPSTREAM: ref_i_104=0, ref_m_121=84594.73968, ref_i_80=0
 [S15] Missing critical upstream Reference values: ref_g_101, ref_d_101, ref_i_104
calculateReferenceModel @ 4011-Section15.js:1366
calculateAll @ 4011-Section15.js:1286
(anonymous) @ 4011-Section15.js:1945
(anonymous) @ 4011-StateManager.js:486
notifyListeners @ 4011-StateManager.js:484
setValue @ 4011-StateManager.js:362
window.TEUI.StateManager.setValue @ 4011-ComponentBridge.js:429
setCalculatedValue @ 4011-Section01.js:383
calculateTargetModel @ 4011-Section01.js:577
runAllCalculations @ 4011-Section01.js:1234
updateSubtotals @ 4011-Section04.js:1663
calculateTargetModel @ 4011-Section04.js:2386
calculateAll @ 4011-Section04.js:2402
(anonymous) @ 4011-Section04.js:2198
setTimeout
onSectionRendered @ 4011-Section04.js:2195
initializeSectionEventHandlers @ 4011-FieldManager.js:322
renderSection @ 4011-FieldManager.js:367
(anonymous) @ 4011-FieldManager.js:394
renderAllSections @ 4011-FieldManager.js:393
(anonymous) @ 4011-init.js:858Understand this warningAI
 ✅ S15 Reference Model: All values converted to numbers for proper math
 ✅ S15 Reference Model: Additional fuel variables declared for cost calculations
 [S15 DEBUG] 💰 Electricity price from S04: raw="$0.1300" → parsed=$0/kWh
 🔍 S15 TARGET UPSTREAM: target_i_104=116070.33, target_m_121=48980.79999999999, target_i_80=45879.580160000005
 [S15 DEBUG] 💰 All energy prices from S04: elec=$0, gas=$0, propane=$0, oil=$0, wood=$0
 🔍 S15 REFERENCE UPSTREAM: ref_i_104=0, ref_m_121=84594.73968, ref_i_80=0
 [S15] Missing critical upstream Reference values: ref_g_101, ref_d_101, ref_i_104
calculateReferenceModel @ 4011-Section15.js:1366
calculateAll @ 4011-Section15.js:1286
(anonymous) @ 4011-Section15.js:1945
(anonymous) @ 4011-StateManager.js:486
notifyListeners @ 4011-StateManager.js:484
setValue @ 4011-StateManager.js:362
window.TEUI.StateManager.setValue @ 4011-ComponentBridge.js:429
calculateValues @ 4011-Section15.js:1705
calculateTargetModel @ 4011-Section15.js:1563
calculateAll @ 4011-Section15.js:1287
(anonymous) @ 4011-Section15.js:1945
(anonymous) @ 4011-StateManager.js:486
notifyListeners @ 4011-StateManager.js:484
setValue @ 4011-StateManager.js:362
window.TEUI.StateManager.setValue @ 4011-ComponentBridge.js:429
setCalculatedValue @ 4011-Section01.js:383
calculateTargetModel @ 4011-Section01.js:577
runAllCalculations @ 4011-Section01.js:1234
updateSubtotals @ 4011-Section04.js:1663
calculateTargetModel @ 4011-Section04.js:2386
calculateAll @ 4011-Section04.js:2402
(anonymous) @ 4011-Section04.js:2198
setTimeout
onSectionRendered @ 4011-Section04.js:2195
initializeSectionEventHandlers @ 4011-FieldManager.js:322
renderSection @ 4011-FieldManager.js:367
(anonymous) @ 4011-FieldManager.js:394
renderAllSections @ 4011-FieldManager.js:393
(anonymous) @ 4011-init.js:858Understand this warningAI
 ✅ S15 Reference Model: All values converted to numbers for proper math
 ✅ S15 Reference Model: Additional fuel variables declared for cost calculations
 [S15 DEBUG] 💰 Electricity price from S04: raw="$0.1300" → parsed=$0/kWh
 🔍 S15 TARGET UPSTREAM: target_i_104=116070.33, target_m_121=48980.79999999999, target_i_80=45879.580160000005
 [S15 DEBUG] 💰 All energy prices from S04: elec=$0, gas=$0, propane=$0, oil=$0, wood=$0
 [S15 DEBUG] 🧮 D141 calculation: 220216.85125050816 kWh/m²/yr × $0/kWh = $0.00
 🔍 S15 REFERENCE UPSTREAM: ref_i_104=0, ref_m_121=84594.73968, ref_i_80=0
 [S15] Missing critical upstream Reference values: ref_g_101, ref_d_101, ref_i_104
calculateReferenceModel @ 4011-Section15.js:1366
calculateAll @ 4011-Section15.js:1286
(anonymous) @ 4011-Section15.js:1945
(anonymous) @ 4011-StateManager.js:486
notifyListeners @ 4011-StateManager.js:484
setValue @ 4011-StateManager.js:362
window.TEUI.StateManager.setValue @ 4011-ComponentBridge.js:429
calculateValues @ 4011-Section15.js:1705
calculateTargetModel @ 4011-Section15.js:1563
calculateAll @ 4011-Section15.js:1287
(anonymous) @ 4011-Section15.js:1945
(anonymous) @ 4011-StateManager.js:486
notifyListeners @ 4011-StateManager.js:484
setValue @ 4011-StateManager.js:362
window.TEUI.StateManager.setValue @ 4011-ComponentBridge.js:429
setCalculatedValue @ 4011-Section01.js:383
calculateTargetModel @ 4011-Section01.js:577
runAllCalculations @ 4011-Section01.js:1234
updateSubtotals @ 4011-Section04.js:1663
calculateTargetModel @ 4011-Section04.js:2386
calculateAll @ 4011-Section04.js:2402
(anonymous) @ 4011-Section04.js:2198
setTimeout
onSectionRendered @ 4011-Section04.js:2195
initializeSectionEventHandlers @ 4011-FieldManager.js:322
renderSection @ 4011-FieldManager.js:367
(anonymous) @ 4011-FieldManager.js:394
renderAllSections @ 4011-FieldManager.js:393
(anonymous) @ 4011-init.js:858Understand this warningAI
 ✅ S15 Reference Model: All values converted to numbers for proper math
 ✅ S15 Reference Model: Additional fuel variables declared for cost calculations
 [S15 DEBUG] 💰 Electricity price from S04: raw="$0.1300" → parsed=$0/kWh
 🔍 S15 TARGET UPSTREAM: target_i_104=116070.33, target_m_121=48980.79999999999, target_i_80=45879.580160000005
 [S15 DEBUG] 💰 All energy prices from S04: elec=$0, gas=$0, propane=$0, oil=$0, wood=$0
 [S15 DEBUG] 🧮 D141 calculation: 220216.85125050816 kWh/m²/yr × $0/kWh = $0.00
 [S15 DEBUG] 🧮 D141 calculation: 220216.85125050816 kWh/m²/yr × $0/kWh = $0.00
 🔍 S15 REFERENCE UPSTREAM: ref_i_104=0, ref_m_121=84594.73968, ref_i_80=0
 [S15] Missing critical upstream Reference values: ref_g_101, ref_d_101, ref_i_104
calculateReferenceModel @ 4011-Section15.js:1366
calculateAll @ 4011-Section15.js:1286
(anonymous) @ 4011-Section15.js:1945
(anonymous) @ 4011-StateManager.js:486
notifyListeners @ 4011-StateManager.js:484
setValue @ 4011-StateManager.js:362
window.TEUI.StateManager.setValue @ 4011-ComponentBridge.js:429
setCalculatedValue @ 4011-Section01.js:383
calculateTargetModel @ 4011-Section01.js:577
runAllCalculations @ 4011-Section01.js:1234
updateSubtotals @ 4011-Section04.js:1663
calculateTargetModel @ 4011-Section04.js:2386
calculateAll @ 4011-Section04.js:2402
(anonymous) @ 4011-Section04.js:2198
setTimeout
onSectionRendered @ 4011-Section04.js:2195
initializeSectionEventHandlers @ 4011-FieldManager.js:322
renderSection @ 4011-FieldManager.js:367
(anonymous) @ 4011-FieldManager.js:394
renderAllSections @ 4011-FieldManager.js:393
(anonymous) @ 4011-init.js:858Understand this warningAI
 ✅ S15 Reference Model: All values converted to numbers for proper math
 ✅ S15 Reference Model: Additional fuel variables declared for cost calculations
 [S15 DEBUG] 💰 Electricity price from S04: raw="$0.1300" → parsed=$0/kWh
 🔍 S15 TARGET UPSTREAM: target_i_104=116070.33, target_m_121=48980.79999999999, target_i_80=45879.580160000005
 [S15 DEBUG] 💰 All energy prices from S04: elec=$0, gas=$0, propane=$0, oil=$0, wood=$0
 [S15 DEBUG] 🧮 D141 calculation: 220216.85125050816 kWh/m²/yr × $0/kWh = $0.00
 🔍 S15 REFERENCE UPSTREAM: ref_i_104=0, ref_m_121=84594.73968, ref_i_80=0
 [S15] Missing critical upstream Reference values: ref_g_101, ref_d_101, ref_i_104
calculateReferenceModel @ 4011-Section15.js:1366
calculateAll @ 4011-Section15.js:1286
(anonymous) @ 4011-Section15.js:1945
(anonymous) @ 4011-StateManager.js:486
notifyListeners @ 4011-StateManager.js:484
setValue @ 4011-StateManager.js:362
window.TEUI.StateManager.setValue @ 4011-ComponentBridge.js:429
setCalculatedValue @ 4011-Section01.js:383
calculateTargetModel @ 4011-Section01.js:577
runAllCalculations @ 4011-Section01.js:1234
updateSubtotals @ 4011-Section04.js:1663
updateGridIntensityForMode @ 4011-Section04.js:1456
updateElectricityEmissionFactor @ 4011-Section04.js:1345
(anonymous) @ 4011-Section04.js:2196
setTimeout
onSectionRendered @ 4011-Section04.js:2195
initializeSectionEventHandlers @ 4011-FieldManager.js:322
renderSection @ 4011-FieldManager.js:367
(anonymous) @ 4011-FieldManager.js:394
renderAllSections @ 4011-FieldManager.js:393
(anonymous) @ index.html:1009Understand this warningAI
 ✅ S15 Reference Model: All values converted to numbers for proper math
 ✅ S15 Reference Model: Additional fuel variables declared for cost calculations
 [S15 DEBUG] 💰 Electricity price from S04: raw="$0.1300" → parsed=$0/kWh
 🔍 S15 TARGET UPSTREAM: target_i_104=116070.33, target_m_121=48980.79999999999, target_i_80=45879.580160000005
 [S15 DEBUG] 💰 All energy prices from S04: elec=$0, gas=$0, propane=$0, oil=$0, wood=$0
 🔍 S15 REFERENCE UPSTREAM: ref_i_104=0, ref_m_121=84594.73968, ref_i_80=0
 [S15] Missing critical upstream Reference values: ref_g_101, ref_d_101, ref_i_104
calculateReferenceModel @ 4011-Section15.js:1366
calculateAll @ 4011-Section15.js:1286
(anonymous) @ 4011-Section15.js:1945
(anonymous) @ 4011-StateManager.js:486
notifyListeners @ 4011-StateManager.js:484
setValue @ 4011-StateManager.js:362
window.TEUI.StateManager.setValue @ 4011-ComponentBridge.js:429
calculateValues @ 4011-Section15.js:1705
calculateTargetModel @ 4011-Section15.js:1563
calculateAll @ 4011-Section15.js:1287
(anonymous) @ 4011-Section15.js:1945
(anonymous) @ 4011-StateManager.js:486
notifyListeners @ 4011-StateManager.js:484
setValue @ 4011-StateManager.js:362
window.TEUI.StateManager.setValue @ 4011-ComponentBridge.js:429
setCalculatedValue @ 4011-Section01.js:383
calculateTargetModel @ 4011-Section01.js:577
runAllCalculations @ 4011-Section01.js:1234
updateSubtotals @ 4011-Section04.js:1663
updateGridIntensityForMode @ 4011-Section04.js:1456
updateElectricityEmissionFactor @ 4011-Section04.js:1345
(anonymous) @ 4011-Section04.js:2196
setTimeout
onSectionRendered @ 4011-Section04.js:2195
initializeSectionEventHandlers @ 4011-FieldManager.js:322
renderSection @ 4011-FieldManager.js:367
(anonymous) @ 4011-FieldManager.js:394
renderAllSections @ 4011-FieldManager.js:393
(anonymous) @ index.html:1009Understand this warningAI
 ✅ S15 Reference Model: All values converted to numbers for proper math
 ✅ S15 Reference Model: Additional fuel variables declared for cost calculations
 [S15 DEBUG] 💰 Electricity price from S04: raw="$0.1300" → parsed=$0/kWh
 🔍 S15 TARGET UPSTREAM: target_i_104=116070.33, target_m_121=48980.79999999999, target_i_80=45879.580160000005
 [S15 DEBUG] 💰 All energy prices from S04: elec=$0, gas=$0, propane=$0, oil=$0, wood=$0
 [S15 DEBUG] 🧮 D141 calculation: 220216.85125050816 kWh/m²/yr × $0/kWh = $0.00
 🔍 S15 REFERENCE UPSTREAM: ref_i_104=0, ref_m_121=84594.73968, ref_i_80=0
 [S15] Missing critical upstream Reference values: ref_g_101, ref_d_101, ref_i_104
calculateReferenceModel @ 4011-Section15.js:1366
calculateAll @ 4011-Section15.js:1286
(anonymous) @ 4011-Section15.js:1945
(anonymous) @ 4011-StateManager.js:486
notifyListeners @ 4011-StateManager.js:484
setValue @ 4011-StateManager.js:362
window.TEUI.StateManager.setValue @ 4011-ComponentBridge.js:429
calculateValues @ 4011-Section15.js:1705
calculateTargetModel @ 4011-Section15.js:1563
calculateAll @ 4011-Section15.js:1287
(anonymous) @ 4011-Section15.js:1945
(anonymous) @ 4011-StateManager.js:486
notifyListeners @ 4011-StateManager.js:484
setValue @ 4011-StateManager.js:362
window.TEUI.StateManager.setValue @ 4011-ComponentBridge.js:429
setCalculatedValue @ 4011-Section01.js:383
calculateTargetModel @ 4011-Section01.js:577
runAllCalculations @ 4011-Section01.js:1234
updateSubtotals @ 4011-Section04.js:1663
updateGridIntensityForMode @ 4011-Section04.js:1456
updateElectricityEmissionFactor @ 4011-Section04.js:1345
(anonymous) @ 4011-Section04.js:2196
setTimeout
onSectionRendered @ 4011-Section04.js:2195
initializeSectionEventHandlers @ 4011-FieldManager.js:322
renderSection @ 4011-FieldManager.js:367
(anonymous) @ 4011-FieldManager.js:394
renderAllSections @ 4011-FieldManager.js:393
(anonymous) @ index.html:1009Understand this warningAI
 ✅ S15 Reference Model: All values converted to numbers for proper math
 ✅ S15 Reference Model: Additional fuel variables declared for cost calculations
 [S15 DEBUG] 💰 Electricity price from S04: raw="$0.1300" → parsed=$0/kWh
 🔍 S15 TARGET UPSTREAM: target_i_104=116070.33, target_m_121=48980.79999999999, target_i_80=45879.580160000005
 [S15 DEBUG] 💰 All energy prices from S04: elec=$0, gas=$0, propane=$0, oil=$0, wood=$0
 [S15 DEBUG] 🧮 D141 calculation: 220216.85125050816 kWh/m²/yr × $0/kWh = $0.00
 [S15 DEBUG] 🧮 D141 calculation: 220216.85125050816 kWh/m²/yr × $0/kWh = $0.00
 🔍 S15 REFERENCE UPSTREAM: ref_i_104=0, ref_m_121=84594.73968, ref_i_80=0
 [S15] Missing critical upstream Reference values: ref_g_101, ref_d_101, ref_i_104
calculateReferenceModel @ 4011-Section15.js:1366
calculateAll @ 4011-Section15.js:1286
(anonymous) @ 4011-Section15.js:1945
(anonymous) @ 4011-StateManager.js:486
notifyListeners @ 4011-StateManager.js:484
setValue @ 4011-StateManager.js:362
window.TEUI.StateManager.setValue @ 4011-ComponentBridge.js:429
setCalculatedValue @ 4011-Section01.js:383
calculateTargetModel @ 4011-Section01.js:577
runAllCalculations @ 4011-Section01.js:1234
updateSubtotals @ 4011-Section04.js:1663
updateGridIntensityForMode @ 4011-Section04.js:1456
updateElectricityEmissionFactor @ 4011-Section04.js:1345
(anonymous) @ 4011-Section04.js:2196
setTimeout
onSectionRendered @ 4011-Section04.js:2195
initializeSectionEventHandlers @ 4011-FieldManager.js:322
renderSection @ 4011-FieldManager.js:367
(anonymous) @ 4011-FieldManager.js:394
renderAllSections @ 4011-FieldManager.js:393
(anonymous) @ index.html:1009Understand this warningAI
 ✅ S15 Reference Model: All values converted to numbers for proper math
 ✅ S15 Reference Model: Additional fuel variables declared for cost calculations
 [S15 DEBUG] 💰 Electricity price from S04: raw="$0.1300" → parsed=$0/kWh
 🔍 S15 TARGET UPSTREAM: target_i_104=116070.33, target_m_121=48980.79999999999, target_i_80=45879.580160000005
 [S15 DEBUG] 💰 All energy prices from S04: elec=$0, gas=$0, propane=$0, oil=$0, wood=$0
 [S15 DEBUG] 🧮 D141 calculation: 220216.85125050816 kWh/m²/yr × $0/kWh = $0.00
 S04 REFERENCE MODEL: ref_j_32=133574.3671495516, ref_k_32=6812.292724627132
 🔍 S15 REFERENCE UPSTREAM: ref_i_104=0, ref_m_121=84594.73968, ref_i_80=0
 [S15] Missing critical upstream Reference values: ref_g_101, ref_d_101, ref_i_104
calculateReferenceModel @ 4011-Section15.js:1366
calculateAll @ 4011-Section15.js:1286
(anonymous) @ 4011-Section15.js:1945
(anonymous) @ 4011-StateManager.js:486
notifyListeners @ 4011-StateManager.js:484
setValue @ 4011-StateManager.js:362
window.TEUI.StateManager.setValue @ 4011-ComponentBridge.js:429
setCalculatedValue @ 4011-Section01.js:383
calculateTargetModel @ 4011-Section01.js:577
runAllCalculations @ 4011-Section01.js:1234
updateSubtotals @ 4011-Section04.js:1663
calculateTargetModel @ 4011-Section04.js:2386
calculateAll @ 4011-Section04.js:2402
(anonymous) @ 4011-Section04.js:2198
setTimeout
onSectionRendered @ 4011-Section04.js:2195
initializeSectionEventHandlers @ 4011-FieldManager.js:322
renderSection @ 4011-FieldManager.js:367
(anonymous) @ 4011-FieldManager.js:394
renderAllSections @ 4011-FieldManager.js:393
(anonymous) @ index.html:1009Understand this warningAI
 ✅ S15 Reference Model: All values converted to numbers for proper math
 ✅ S15 Reference Model: Additional fuel variables declared for cost calculations
 [S15 DEBUG] 💰 Electricity price from S04: raw="$0.1300" → parsed=$0/kWh
 🔍 S15 TARGET UPSTREAM: target_i_104=116070.33, target_m_121=48980.79999999999, target_i_80=45879.580160000005
 [S15 DEBUG] 💰 All energy prices from S04: elec=$0, gas=$0, propane=$0, oil=$0, wood=$0
 🔍 S15 REFERENCE UPSTREAM: ref_i_104=0, ref_m_121=84594.73968, ref_i_80=0
 [S15] Missing critical upstream Reference values: ref_g_101, ref_d_101, ref_i_104
calculateReferenceModel @ 4011-Section15.js:1366
calculateAll @ 4011-Section15.js:1286
(anonymous) @ 4011-Section15.js:1945
(anonymous) @ 4011-StateManager.js:486
notifyListeners @ 4011-StateManager.js:484
setValue @ 4011-StateManager.js:362
window.TEUI.StateManager.setValue @ 4011-ComponentBridge.js:429
calculateValues @ 4011-Section15.js:1705
calculateTargetModel @ 4011-Section15.js:1563
calculateAll @ 4011-Section15.js:1287
(anonymous) @ 4011-Section15.js:1945
(anonymous) @ 4011-StateManager.js:486
notifyListeners @ 4011-StateManager.js:484
setValue @ 4011-StateManager.js:362
window.TEUI.StateManager.setValue @ 4011-ComponentBridge.js:429
setCalculatedValue @ 4011-Section01.js:383
calculateTargetModel @ 4011-Section01.js:577
runAllCalculations @ 4011-Section01.js:1234
updateSubtotals @ 4011-Section04.js:1663
calculateTargetModel @ 4011-Section04.js:2386
calculateAll @ 4011-Section04.js:2402
(anonymous) @ 4011-Section04.js:2198
setTimeout
onSectionRendered @ 4011-Section04.js:2195
initializeSectionEventHandlers @ 4011-FieldManager.js:322
renderSection @ 4011-FieldManager.js:367
(anonymous) @ 4011-FieldManager.js:394
renderAllSections @ 4011-FieldManager.js:393
(anonymous) @ index.html:1009Understand this warningAI
 ✅ S15 Reference Model: All values converted to numbers for proper math
 ✅ S15 Reference Model: Additional fuel variables declared for cost calculations
 [S15 DEBUG] 💰 Electricity price from S04: raw="$0.1300" → parsed=$0/kWh
 🔍 S15 TARGET UPSTREAM: target_i_104=116070.33, target_m_121=48980.79999999999, target_i_80=45879.580160000005
 [S15 DEBUG] 💰 All energy prices from S04: elec=$0, gas=$0, propane=$0, oil=$0, wood=$0
 [S15 DEBUG] 🧮 D141 calculation: 220216.85125050816 kWh/m²/yr × $0/kWh = $0.00
 🔍 S15 REFERENCE UPSTREAM: ref_i_104=0, ref_m_121=84594.73968, ref_i_80=0
 [S15] Missing critical upstream Reference values: ref_g_101, ref_d_101, ref_i_104
calculateReferenceModel @ 4011-Section15.js:1366
calculateAll @ 4011-Section15.js:1286
(anonymous) @ 4011-Section15.js:1945
(anonymous) @ 4011-StateManager.js:486
notifyListeners @ 4011-StateManager.js:484
setValue @ 4011-StateManager.js:362
window.TEUI.StateManager.setValue @ 4011-ComponentBridge.js:429
calculateValues @ 4011-Section15.js:1705
calculateTargetModel @ 4011-Section15.js:1563
calculateAll @ 4011-Section15.js:1287
(anonymous) @ 4011-Section15.js:1945
(anonymous) @ 4011-StateManager.js:486
notifyListeners @ 4011-StateManager.js:484
setValue @ 4011-StateManager.js:362
window.TEUI.StateManager.setValue @ 4011-ComponentBridge.js:429
setCalculatedValue @ 4011-Section01.js:383
calculateTargetModel @ 4011-Section01.js:577
runAllCalculations @ 4011-Section01.js:1234
updateSubtotals @ 4011-Section04.js:1663
calculateTargetModel @ 4011-Section04.js:2386
calculateAll @ 4011-Section04.js:2402
(anonymous) @ 4011-Section04.js:2198
setTimeout
onSectionRendered @ 4011-Section04.js:2195
initializeSectionEventHandlers @ 4011-FieldManager.js:322
renderSection @ 4011-FieldManager.js:367
(anonymous) @ 4011-FieldManager.js:394
renderAllSections @ 4011-FieldManager.js:393
(anonymous) @ index.html:1009Understand this warningAI
 ✅ S15 Reference Model: All values converted to numbers for proper math
 ✅ S15 Reference Model: Additional fuel variables declared for cost calculations
 [S15 DEBUG] 💰 Electricity price from S04: raw="$0.1300" → parsed=$0/kWh
 🔍 S15 TARGET UPSTREAM: target_i_104=116070.33, target_m_121=48980.79999999999, target_i_80=45879.580160000005
 [S15 DEBUG] 💰 All energy prices from S04: elec=$0, gas=$0, propane=$0, oil=$0, wood=$0
 [S15 DEBUG] 🧮 D141 calculation: 220216.85125050816 kWh/m²/yr × $0/kWh = $0.00
 [S15 DEBUG] 🧮 D141 calculation: 220216.85125050816 kWh/m²/yr × $0/kWh = $0.00
 🔍 S15 REFERENCE UPSTREAM: ref_i_104=0, ref_m_121=84594.73968, ref_i_80=0
 [S15] Missing critical upstream Reference values: ref_g_101, ref_d_101, ref_i_104
calculateReferenceModel @ 4011-Section15.js:1366
calculateAll @ 4011-Section15.js:1286
(anonymous) @ 4011-Section15.js:1945
(anonymous) @ 4011-StateManager.js:486
notifyListeners @ 4011-StateManager.js:484
setValue @ 4011-StateManager.js:362
window.TEUI.StateManager.setValue @ 4011-ComponentBridge.js:429
setCalculatedValue @ 4011-Section01.js:383
calculateTargetModel @ 4011-Section01.js:577
runAllCalculations @ 4011-Section01.js:1234
updateSubtotals @ 4011-Section04.js:1663
calculateTargetModel @ 4011-Section04.js:2386
calculateAll @ 4011-Section04.js:2402
(anonymous) @ 4011-Section04.js:2198
setTimeout
onSectionRendered @ 4011-Section04.js:2195
initializeSectionEventHandlers @ 4011-FieldManager.js:322
renderSection @ 4011-FieldManager.js:367
(anonymous) @ 4011-FieldManager.js:394
renderAllSections @ 4011-FieldManager.js:393
(anonymous) @ index.html:1009Understand this warningAI
 ✅ S15 Reference Model: All values converted to numbers for proper math
 ✅ S15 Reference Model: Additional fuel variables declared for cost calculations
 [S15 DEBUG] 💰 Electricity price from S04: raw="$0.1300" → parsed=$0/kWh
 🔍 S15 TARGET UPSTREAM: target_i_104=116070.33, target_m_121=48980.79999999999, target_i_80=45879.580160000005
 [S15 DEBUG] 💰 All energy prices from S04: elec=$0, gas=$0, propane=$0, oil=$0, wood=$0
 [S15 DEBUG] 🧮 D141 calculation: 220216.85125050816 kWh/m²/yr × $0/kWh = $0.00
 🔍 S15 REFERENCE UPSTREAM: ref_i_104=0, ref_m_121=84594.73968, ref_i_80=0
 [S15] Missing critical upstream Reference values: ref_g_101, ref_d_101, ref_i_104
calculateReferenceModel @ 4011-Section15.js:1366
calculateAll @ 4011-Section15.js:1286
(anonymous) @ 4011-Section15.js:1945
(anonymous) @ 4011-StateManager.js:486
notifyListeners @ 4011-StateManager.js:484
setValue @ 4011-StateManager.js:362
window.TEUI.StateManager.setValue @ 4011-ComponentBridge.js:429
setCalculatedValue @ 4011-Section01.js:383
calculateTargetModel @ 4011-Section01.js:577
runAllCalculations @ 4011-Section01.js:1234
updateSubtotals @ 4011-Section04.js:1663
updateGridIntensityForMode @ 4011-Section04.js:1456
updateElectricityEmissionFactor @ 4011-Section04.js:1345
(anonymous) @ 4011-Section04.js:2196
setTimeout
onSectionRendered @ 4011-Section04.js:2195
initializeSectionEventHandlers @ 4011-FieldManager.js:322
renderSection @ 4011-FieldManager.js:367
(anonymous) @ 4011-FieldManager.js:394
renderAllSections @ 4011-FieldManager.js:393
initialize @ 4011-Calculator.js:66
(anonymous) @ index.html:1029Understand this warningAI
 ✅ S15 Reference Model: All values converted to numbers for proper math
 ✅ S15 Reference Model: Additional fuel variables declared for cost calculations
 [S15 DEBUG] 💰 Electricity price from S04: raw="$0.1300" → parsed=$0/kWh
 🔍 S15 TARGET UPSTREAM: target_i_104=116070.33, target_m_121=48980.79999999999, target_i_80=45879.580160000005
 [S15 DEBUG] 💰 All energy prices from S04: elec=$0, gas=$0, propane=$0, oil=$0, wood=$0
 🔍 S15 REFERENCE UPSTREAM: ref_i_104=0, ref_m_121=84594.73968, ref_i_80=0
 [S15] Missing critical upstream Reference values: ref_g_101, ref_d_101, ref_i_104
calculateReferenceModel @ 4011-Section15.js:1366
calculateAll @ 4011-Section15.js:1286
(anonymous) @ 4011-Section15.js:1945
(anonymous) @ 4011-StateManager.js:486
notifyListeners @ 4011-StateManager.js:484
setValue @ 4011-StateManager.js:362
window.TEUI.StateManager.setValue @ 4011-ComponentBridge.js:429
calculateValues @ 4011-Section15.js:1705
calculateTargetModel @ 4011-Section15.js:1563
calculateAll @ 4011-Section15.js:1287
(anonymous) @ 4011-Section15.js:1945
(anonymous) @ 4011-StateManager.js:486
notifyListeners @ 4011-StateManager.js:484
setValue @ 4011-StateManager.js:362
window.TEUI.StateManager.setValue @ 4011-ComponentBridge.js:429
setCalculatedValue @ 4011-Section01.js:383
calculateTargetModel @ 4011-Section01.js:577
runAllCalculations @ 4011-Section01.js:1234
updateSubtotals @ 4011-Section04.js:1663
updateGridIntensityForMode @ 4011-Section04.js:1456
updateElectricityEmissionFactor @ 4011-Section04.js:1345
(anonymous) @ 4011-Section04.js:2196
setTimeout
onSectionRendered @ 4011-Section04.js:2195
initializeSectionEventHandlers @ 4011-FieldManager.js:322
renderSection @ 4011-FieldManager.js:367
(anonymous) @ 4011-FieldManager.js:394
renderAllSections @ 4011-FieldManager.js:393
initialize @ 4011-Calculator.js:66
(anonymous) @ index.html:1029Understand this warningAI
 ✅ S15 Reference Model: All values converted to numbers for proper math
 ✅ S15 Reference Model: Additional fuel variables declared for cost calculations
 [S15 DEBUG] 💰 Electricity price from S04: raw="$0.1300" → parsed=$0/kWh
 🔍 S15 TARGET UPSTREAM: target_i_104=116070.33, target_m_121=48980.79999999999, target_i_80=45879.580160000005
 [S15 DEBUG] 💰 All energy prices from S04: elec=$0, gas=$0, propane=$0, oil=$0, wood=$0
 [S15 DEBUG] 🧮 D141 calculation: 220216.85125050816 kWh/m²/yr × $0/kWh = $0.00
 🔍 S15 REFERENCE UPSTREAM: ref_i_104=0, ref_m_121=84594.73968, ref_i_80=0
 [S15] Missing critical upstream Reference values: ref_g_101, ref_d_101, ref_i_104
calculateReferenceModel @ 4011-Section15.js:1366
calculateAll @ 4011-Section15.js:1286
(anonymous) @ 4011-Section15.js:1945
(anonymous) @ 4011-StateManager.js:486
notifyListeners @ 4011-StateManager.js:484
setValue @ 4011-StateManager.js:362
window.TEUI.StateManager.setValue @ 4011-ComponentBridge.js:429
calculateValues @ 4011-Section15.js:1705
calculateTargetModel @ 4011-Section15.js:1563
calculateAll @ 4011-Section15.js:1287
(anonymous) @ 4011-Section15.js:1945
(anonymous) @ 4011-StateManager.js:486
notifyListeners @ 4011-StateManager.js:484
setValue @ 4011-StateManager.js:362
window.TEUI.StateManager.setValue @ 4011-ComponentBridge.js:429
setCalculatedValue @ 4011-Section01.js:383
calculateTargetModel @ 4011-Section01.js:577
runAllCalculations @ 4011-Section01.js:1234
updateSubtotals @ 4011-Section04.js:1663
updateGridIntensityForMode @ 4011-Section04.js:1456
updateElectricityEmissionFactor @ 4011-Section04.js:1345
(anonymous) @ 4011-Section04.js:2196
setTimeout
onSectionRendered @ 4011-Section04.js:2195
initializeSectionEventHandlers @ 4011-FieldManager.js:322
renderSection @ 4011-FieldManager.js:367
(anonymous) @ 4011-FieldManager.js:394
renderAllSections @ 4011-FieldManager.js:393
initialize @ 4011-Calculator.js:66
(anonymous) @ index.html:1029Understand this warningAI
 ✅ S15 Reference Model: All values converted to numbers for proper math
 ✅ S15 Reference Model: Additional fuel variables declared for cost calculations
 [S15 DEBUG] 💰 Electricity price from S04: raw="$0.1300" → parsed=$0/kWh
 🔍 S15 TARGET UPSTREAM: target_i_104=116070.33, target_m_121=48980.79999999999, target_i_80=45879.580160000005
 [S15 DEBUG] 💰 All energy prices from S04: elec=$0, gas=$0, propane=$0, oil=$0, wood=$0
 [S15 DEBUG] 🧮 D141 calculation: 220216.85125050816 kWh/m²/yr × $0/kWh = $0.00
 [S15 DEBUG] 🧮 D141 calculation: 220216.85125050816 kWh/m²/yr × $0/kWh = $0.00
 🔍 S15 REFERENCE UPSTREAM: ref_i_104=0, ref_m_121=84594.73968, ref_i_80=0
 [S15] Missing critical upstream Reference values: ref_g_101, ref_d_101, ref_i_104
calculateReferenceModel @ 4011-Section15.js:1366
calculateAll @ 4011-Section15.js:1286
(anonymous) @ 4011-Section15.js:1945
(anonymous) @ 4011-StateManager.js:486
notifyListeners @ 4011-StateManager.js:484
setValue @ 4011-StateManager.js:362
window.TEUI.StateManager.setValue @ 4011-ComponentBridge.js:429
setCalculatedValue @ 4011-Section01.js:383
calculateTargetModel @ 4011-Section01.js:577
runAllCalculations @ 4011-Section01.js:1234
updateSubtotals @ 4011-Section04.js:1663
updateGridIntensityForMode @ 4011-Section04.js:1456
updateElectricityEmissionFactor @ 4011-Section04.js:1345
(anonymous) @ 4011-Section04.js:2196
setTimeout
onSectionRendered @ 4011-Section04.js:2195
initializeSectionEventHandlers @ 4011-FieldManager.js:322
renderSection @ 4011-FieldManager.js:367
(anonymous) @ 4011-FieldManager.js:394
renderAllSections @ 4011-FieldManager.js:393
initialize @ 4011-Calculator.js:66
(anonymous) @ index.html:1029Understand this warningAI
 ✅ S15 Reference Model: All values converted to numbers for proper math
 ✅ S15 Reference Model: Additional fuel variables declared for cost calculations
 [S15 DEBUG] 💰 Electricity price from S04: raw="$0.1300" → parsed=$0/kWh
 🔍 S15 TARGET UPSTREAM: target_i_104=116070.33, target_m_121=48980.79999999999, target_i_80=45879.580160000005
 [S15 DEBUG] 💰 All energy prices from S04: elec=$0, gas=$0, propane=$0, oil=$0, wood=$0
 [S15 DEBUG] 🧮 D141 calculation: 220216.85125050816 kWh/m²/yr × $0/kWh = $0.00
 S04 REFERENCE MODEL: ref_j_32=133574.3671495516, ref_k_32=6812.292724627132
 🔍 S15 REFERENCE UPSTREAM: ref_i_104=0, ref_m_121=84594.73968, ref_i_80=0
 [S15] Missing critical upstream Reference values: ref_g_101, ref_d_101, ref_i_104
calculateReferenceModel @ 4011-Section15.js:1366
calculateAll @ 4011-Section15.js:1286
(anonymous) @ 4011-Section15.js:1945
(anonymous) @ 4011-StateManager.js:486
notifyListeners @ 4011-StateManager.js:484
setValue @ 4011-StateManager.js:362
window.TEUI.StateManager.setValue @ 4011-ComponentBridge.js:429
setCalculatedValue @ 4011-Section01.js:383
calculateTargetModel @ 4011-Section01.js:577
runAllCalculations @ 4011-Section01.js:1234
updateSubtotals @ 4011-Section04.js:1663
calculateTargetModel @ 4011-Section04.js:2386
calculateAll @ 4011-Section04.js:2402
(anonymous) @ 4011-Section04.js:2198
setTimeout
onSectionRendered @ 4011-Section04.js:2195
initializeSectionEventHandlers @ 4011-FieldManager.js:322
renderSection @ 4011-FieldManager.js:367
(anonymous) @ 4011-FieldManager.js:394
renderAllSections @ 4011-FieldManager.js:393
initialize @ 4011-Calculator.js:66
(anonymous) @ index.html:1029Understand this warningAI
 ✅ S15 Reference Model: All values converted to numbers for proper math
 ✅ S15 Reference Model: Additional fuel variables declared for cost calculations
 [S15 DEBUG] 💰 Electricity price from S04: raw="$0.1300" → parsed=$0/kWh
 🔍 S15 TARGET UPSTREAM: target_i_104=116070.33, target_m_121=48980.79999999999, target_i_80=45879.580160000005
 [S15 DEBUG] 💰 All energy prices from S04: elec=$0, gas=$0, propane=$0, oil=$0, wood=$0
 🔍 S15 REFERENCE UPSTREAM: ref_i_104=0, ref_m_121=84594.73968, ref_i_80=0
 [S15] Missing critical upstream Reference values: ref_g_101, ref_d_101, ref_i_104
calculateReferenceModel @ 4011-Section15.js:1366
calculateAll @ 4011-Section15.js:1286
(anonymous) @ 4011-Section15.js:1945
(anonymous) @ 4011-StateManager.js:486
notifyListeners @ 4011-StateManager.js:484
setValue @ 4011-StateManager.js:362
window.TEUI.StateManager.setValue @ 4011-ComponentBridge.js:429
calculateValues @ 4011-Section15.js:1705
calculateTargetModel @ 4011-Section15.js:1563
calculateAll @ 4011-Section15.js:1287
(anonymous) @ 4011-Section15.js:1945
(anonymous) @ 4011-StateManager.js:486
notifyListeners @ 4011-StateManager.js:484
setValue @ 4011-StateManager.js:362
window.TEUI.StateManager.setValue @ 4011-ComponentBridge.js:429
setCalculatedValue @ 4011-Section01.js:383
calculateTargetModel @ 4011-Section01.js:577
runAllCalculations @ 4011-Section01.js:1234
updateSubtotals @ 4011-Section04.js:1663
calculateTargetModel @ 4011-Section04.js:2386
calculateAll @ 4011-Section04.js:2402
(anonymous) @ 4011-Section04.js:2198
setTimeout
onSectionRendered @ 4011-Section04.js:2195
initializeSectionEventHandlers @ 4011-FieldManager.js:322
renderSection @ 4011-FieldManager.js:367
(anonymous) @ 4011-FieldManager.js:394
renderAllSections @ 4011-FieldManager.js:393
initialize @ 4011-Calculator.js:66
(anonymous) @ index.html:1029Understand this warningAI
 ✅ S15 Reference Model: All values converted to numbers for proper math
 ✅ S15 Reference Model: Additional fuel variables declared for cost calculations
 [S15 DEBUG] 💰 Electricity price from S04: raw="$0.1300" → parsed=$0/kWh
 🔍 S15 TARGET UPSTREAM: target_i_104=116070.33, target_m_121=48980.79999999999, target_i_80=45879.580160000005
 [S15 DEBUG] 💰 All energy prices from S04: elec=$0, gas=$0, propane=$0, oil=$0, wood=$0
 [S15 DEBUG] 🧮 D141 calculation: 220216.85125050816 kWh/m²/yr × $0/kWh = $0.00
 🔍 S15 REFERENCE UPSTREAM: ref_i_104=0, ref_m_121=84594.73968, ref_i_80=0
 [S15] Missing critical upstream Reference values: ref_g_101, ref_d_101, ref_i_104
calculateReferenceModel @ 4011-Section15.js:1366
calculateAll @ 4011-Section15.js:1286
(anonymous) @ 4011-Section15.js:1945
(anonymous) @ 4011-StateManager.js:486
notifyListeners @ 4011-StateManager.js:484
setValue @ 4011-StateManager.js:362
window.TEUI.StateManager.setValue @ 4011-ComponentBridge.js:429
calculateValues @ 4011-Section15.js:1705
calculateTargetModel @ 4011-Section15.js:1563
calculateAll @ 4011-Section15.js:1287
(anonymous) @ 4011-Section15.js:1945
(anonymous) @ 4011-StateManager.js:486
notifyListeners @ 4011-StateManager.js:484
setValue @ 4011-StateManager.js:362
window.TEUI.StateManager.setValue @ 4011-ComponentBridge.js:429
setCalculatedValue @ 4011-Section01.js:383
calculateTargetModel @ 4011-Section01.js:577
runAllCalculations @ 4011-Section01.js:1234
updateSubtotals @ 4011-Section04.js:1663
calculateTargetModel @ 4011-Section04.js:2386
calculateAll @ 4011-Section04.js:2402
(anonymous) @ 4011-Section04.js:2198
setTimeout
onSectionRendered @ 4011-Section04.js:2195
initializeSectionEventHandlers @ 4011-FieldManager.js:322
renderSection @ 4011-FieldManager.js:367
(anonymous) @ 4011-FieldManager.js:394
renderAllSections @ 4011-FieldManager.js:393
initialize @ 4011-Calculator.js:66
(anonymous) @ index.html:1029Understand this warningAI
 ✅ S15 Reference Model: All values converted to numbers for proper math
 ✅ S15 Reference Model: Additional fuel variables declared for cost calculations
 [S15 DEBUG] 💰 Electricity price from S04: raw="$0.1300" → parsed=$0/kWh
 🔍 S15 TARGET UPSTREAM: target_i_104=116070.33, target_m_121=48980.79999999999, target_i_80=45879.580160000005
 [S15 DEBUG] 💰 All energy prices from S04: elec=$0, gas=$0, propane=$0, oil=$0, wood=$0
 [S15 DEBUG] 🧮 D141 calculation: 220216.85125050816 kWh/m²/yr × $0/kWh = $0.00
 [S15 DEBUG] 🧮 D141 calculation: 220216.85125050816 kWh/m²/yr × $0/kWh = $0.00
 🔍 S15 REFERENCE UPSTREAM: ref_i_104=0, ref_m_121=84594.73968, ref_i_80=0
 [S15] Missing critical upstream Reference values: ref_g_101, ref_d_101, ref_i_104
calculateReferenceModel @ 4011-Section15.js:1366
calculateAll @ 4011-Section15.js:1286
(anonymous) @ 4011-Section15.js:1945
(anonymous) @ 4011-StateManager.js:486
notifyListeners @ 4011-StateManager.js:484
setValue @ 4011-StateManager.js:362
window.TEUI.StateManager.setValue @ 4011-ComponentBridge.js:429
setCalculatedValue @ 4011-Section01.js:383
calculateTargetModel @ 4011-Section01.js:577
runAllCalculations @ 4011-Section01.js:1234
updateSubtotals @ 4011-Section04.js:1663
calculateTargetModel @ 4011-Section04.js:2386
calculateAll @ 4011-Section04.js:2402
(anonymous) @ 4011-Section04.js:2198
setTimeout
onSectionRendered @ 4011-Section04.js:2195
initializeSectionEventHandlers @ 4011-FieldManager.js:322
renderSection @ 4011-FieldManager.js:367
(anonymous) @ 4011-FieldManager.js:394
renderAllSections @ 4011-FieldManager.js:393
initialize @ 4011-Calculator.js:66
(anonymous) @ index.html:1029Understand this warningAI
 ✅ S15 Reference Model: All values converted to numbers for proper math
 ✅ S15 Reference Model: Additional fuel variables declared for cost calculations
 [S15 DEBUG] 💰 Electricity price from S04: raw="$0.1300" → parsed=$0/kWh
 🔍 S15 TARGET UPSTREAM: target_i_104=116070.33, target_m_121=48980.79999999999, target_i_80=45879.580160000005
 [S15 DEBUG] 💰 All energy prices from S04: elec=$0, gas=$0, propane=$0, oil=$0, wood=$0
 [S15 DEBUG] 🧮 D141 calculation: 220216.85125050816 kWh/m²/yr × $0/kWh = $0.00
 [Section12] Running dual-engine calculations...
 [Section12] Running Reference Model calculations...
 🔍 S15 REFERENCE UPSTREAM: ref_i_104=0, ref_m_121=84594.73968, ref_i_80=0
 [S15] Missing critical upstream Reference values: ref_g_101, ref_i_104
calculateReferenceModel @ 4011-Section15.js:1366
calculateAll @ 4011-Section15.js:1286
(anonymous) @ 4011-Section15.js:1945
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
 [S15 DEBUG] 💰 Electricity price from S04: raw="$0.1300" → parsed=$0/kWh
 🔍 S15 TARGET UPSTREAM: target_i_104=116070.33, target_m_121=48980.79999999999, target_i_80=45879.580160000005
 [S15 DEBUG] 💰 All energy prices from S04: elec=$0, gas=$0, propane=$0, oil=$0, wood=$0
 [S15 DEBUG] 🧮 D141 calculation: 220216.85125050816 kWh/m²/yr × $0/kWh = $0.00
 🔍 S15 REFERENCE UPSTREAM: ref_i_104=0, ref_m_121=84594.73968, ref_i_80=0
 [S15] Missing critical upstream Reference values: ref_g_101, ref_i_104
calculateReferenceModel @ 4011-Section15.js:1366
calculateAll @ 4011-Section15.js:1286
(anonymous) @ 4011-Section15.js:1945
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
 [S15 DEBUG] 💰 Electricity price from S04: raw="$0.1300" → parsed=$0/kWh
 🔍 S15 TARGET UPSTREAM: target_i_104=116070.33, target_m_121=48980.79999999999, target_i_80=45879.580160000005
 [S15 DEBUG] 💰 All energy prices from S04: elec=$0, gas=$0, propane=$0, oil=$0, wood=$0
 [S15 DEBUG] 🧮 D141 calculation: 220216.85125050816 kWh/m²/yr × $0/kWh = $0.00
 🔍 S15 REFERENCE UPSTREAM: ref_i_104=0, ref_m_121=84594.73968, ref_i_80=0
 [S15] Missing critical upstream Reference values: ref_g_101, ref_i_104
calculateReferenceModel @ 4011-Section15.js:1366
calculateAll @ 4011-Section15.js:1286
(anonymous) @ 4011-Section15.js:1945
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
 [S15 DEBUG] 💰 Electricity price from S04: raw="$0.1300" → parsed=$0/kWh
 🔍 S15 TARGET UPSTREAM: target_i_104=116070.33, target_m_121=48980.79999999999, target_i_80=45879.580160000005
 [S15 DEBUG] 💰 All energy prices from S04: elec=$0, gas=$0, propane=$0, oil=$0, wood=$0
 [S15 DEBUG] 🧮 D141 calculation: 220216.85125050816 kWh/m²/yr × $0/kWh = $0.00
 🔍 S15 REFERENCE UPSTREAM: ref_i_104=0, ref_m_121=84594.73968, ref_i_80=0
 [S15] Missing critical upstream Reference values: ref_g_101, ref_i_104
calculateReferenceModel @ 4011-Section15.js:1366
calculateAll @ 4011-Section15.js:1286
(anonymous) @ 4011-Section15.js:1945
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
 [S15 DEBUG] 💰 Electricity price from S04: raw="$0.1300" → parsed=$0/kWh
 🔍 S15 TARGET UPSTREAM: target_i_104=116070.33, target_m_121=48980.79999999999, target_i_80=45879.580160000005
 [S15 DEBUG] 💰 All energy prices from S04: elec=$0, gas=$0, propane=$0, oil=$0, wood=$0
 [S15 DEBUG] 🧮 D141 calculation: 220216.85125050816 kWh/m²/yr × $0/kWh = $0.00
 [S02] Switched to REFERENCE mode
 [S02] Switched to TARGET mode
 [S02] Switched to TARGET mode
 [S02] Switched to TARGET mode
 [S02] Switched to REFERENCE mode
 [S02] Switched to TARGET mode
 [S02] Switched to TARGET mode
 [S02] Switched to TARGET mode
 🔍 S15 REFERENCE UPSTREAM: ref_i_104=0, ref_m_121=84594.73968, ref_i_80=0
 [S15] Missing critical upstream Reference values: ref_i_104
calculateReferenceModel @ 4011-Section15.js:1366
calculateAll @ 4011-Section15.js:1286
(anonymous) @ 4011-Section15.js:1945
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
 [S15 DEBUG] 💰 Electricity price from S04: raw="$0.1300" → parsed=$0/kWh
 🔍 S15 TARGET UPSTREAM: target_i_104=116070.33, target_m_121=48980.79999999999, target_i_80=45879.580160000005
 [S15 DEBUG] 💰 All energy prices from S04: elec=$0, gas=$0, propane=$0, oil=$0, wood=$0
 [S15 DEBUG] 🧮 D141 calculation: 220216.85125050816 kWh/m²/yr × $0/kWh = $0.00
 🔍 S15 REFERENCE UPSTREAM: ref_i_104=0, ref_m_121=84594.73968, ref_i_80=0
 [S15] Missing critical upstream Reference values: ref_i_104
calculateReferenceModel @ 4011-Section15.js:1366
calculateAll @ 4011-Section15.js:1286
(anonymous) @ 4011-Section15.js:1945
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
 [S15 DEBUG] 💰 Electricity price from S04: raw="$0.1300" → parsed=$0/kWh
 🔍 S15 TARGET UPSTREAM: target_i_104=116070.33, target_m_121=48980.79999999999, target_i_80=45879.580160000005
 [S15 DEBUG] 💰 All energy prices from S04: elec=$0, gas=$0, propane=$0, oil=$0, wood=$0
 [S15 DEBUG] 🧮 D141 calculation: 220216.85125050816 kWh/m²/yr × $0/kWh = $0.00
 🔍 S15 REFERENCE UPSTREAM: ref_i_104=0, ref_m_121=84594.73968, ref_i_80=0
 [S15] Missing critical upstream Reference values: ref_i_104
calculateReferenceModel @ 4011-Section15.js:1366
calculateAll @ 4011-Section15.js:1286
(anonymous) @ 4011-Section15.js:1945
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
 [S15 DEBUG] 💰 Electricity price from S04: raw="$0.1300" → parsed=$0/kWh
 🔍 S15 TARGET UPSTREAM: target_i_104=116070.33, target_m_121=48980.79999999999, target_i_80=45879.580160000005
 [S15 DEBUG] 💰 All energy prices from S04: elec=$0, gas=$0, propane=$0, oil=$0, wood=$0
 [S15 DEBUG] 🧮 D141 calculation: 220216.85125050816 kWh/m²/yr × $0/kWh = $0.00
 🔍 S15 REFERENCE UPSTREAM: ref_i_104=0, ref_m_121=84594.73968, ref_i_80=0
 [S15] Missing critical upstream Reference values: ref_i_104
calculateReferenceModel @ 4011-Section15.js:1366
calculateAll @ 4011-Section15.js:1286
(anonymous) @ 4011-Section15.js:1945
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
 [S15 DEBUG] 💰 Electricity price from S04: raw="$0.1300" → parsed=$0/kWh
 🔍 S15 TARGET UPSTREAM: target_i_104=116070.33, target_m_121=48980.79999999999, target_i_80=45879.580160000005
 [S15 DEBUG] 💰 All energy prices from S04: elec=$0, gas=$0, propane=$0, oil=$0, wood=$0
 [S15 DEBUG] 🧮 D141 calculation: 220216.85125050816 kWh/m²/yr × $0/kWh = $0.00
 🔍 S15 REFERENCE UPSTREAM: ref_i_104=116070.33, ref_m_121=84594.73968, ref_i_80=0
 ✅ S15 Reference Model: All values converted to numbers for proper math
 ✅ S15 Reference Model: Additional fuel variables declared for cost calculations
2 S04 REFERENCE MODEL: ref_j_32=133574.3671495516, ref_k_32=6812.292724627132
 🔍 S15 REFERENCE UPSTREAM: ref_i_104=116070.33, ref_m_121=84594.73968, ref_i_80=0
 ✅ S15 Reference Model: All values converted to numbers for proper math
 ✅ S15 Reference Model: Additional fuel variables declared for cost calculations
 🔍 S15 REFERENCE UPSTREAM: ref_i_104=116070.33, ref_m_121=84594.73968, ref_i_80=0
 ✅ S15 Reference Model: All values converted to numbers for proper math
 ✅ S15 Reference Model: Additional fuel variables declared for cost calculations
 [S15 DEBUG] 💰 Electricity price from S04: raw="$0.1300" → parsed=$0/kWh
 🔍 S15 TARGET UPSTREAM: target_i_104=116070.33, target_m_121=48980.79999999999, target_i_80=45879.580160000005
 [S15 DEBUG] 💰 All energy prices from S04: elec=$0, gas=$0, propane=$0, oil=$0, wood=$0
 [S15 DEBUG] 🧮 D141 calculation: 220216.85125050816 kWh/m²/yr × $0/kWh = $0.00
 🔍 S15 REFERENCE UPSTREAM: ref_i_104=116070.33, ref_m_121=84594.73968, ref_i_80=0
 ✅ S15 Reference Model: All values converted to numbers for proper math
 ✅ S15 Reference Model: Additional fuel variables declared for cost calculations
 [S15 DEBUG] 💰 Electricity price from S04: raw="$0.1300" → parsed=$0/kWh
 🔍 S15 TARGET UPSTREAM: target_i_104=116070.33, target_m_121=48980.79999999999, target_i_80=45879.580160000005
 [S15 DEBUG] 💰 All energy prices from S04: elec=$0, gas=$0, propane=$0, oil=$0, wood=$0
 [S15 DEBUG] 🧮 D141 calculation: 220216.85125050816 kWh/m²/yr × $0/kWh = $0.00
 [S15 DEBUG] 💰 Electricity price from S04: raw="$0.1300" → parsed=$0/kWh
 🔍 S15 TARGET UPSTREAM: target_i_104=116070.33, target_m_121=48980.79999999999, target_i_80=45879.580160000005
 [S15 DEBUG] 💰 All energy prices from S04: elec=$0, gas=$0, propane=$0, oil=$0, wood=$0
 [S15 DEBUG] 🧮 D141 calculation: 220216.85125050816 kWh/m²/yr × $0/kWh = $0.00
 🔍 S15 REFERENCE UPSTREAM: ref_i_104=116070.33, ref_m_121=84594.73968, ref_i_80=0
 ✅ S15 Reference Model: All values converted to numbers for proper math
 ✅ S15 Reference Model: Additional fuel variables declared for cost calculations
 [S15 DEBUG] 💰 Electricity price from S04: raw="$0.1300" → parsed=$0/kWh
 🔍 S15 TARGET UPSTREAM: target_i_104=116070.33, target_m_121=48980.79999999999, target_i_80=45879.580160000005
 [S15 DEBUG] 💰 All energy prices from S04: elec=$0, gas=$0, propane=$0, oil=$0, wood=$0
 [S15 DEBUG] 🧮 D141 calculation: 220216.85125050816 kWh/m²/yr × $0/kWh = $0.00
 🔍 S15 REFERENCE UPSTREAM: ref_i_104=116070.33, ref_m_121=84594.73968, ref_i_80=0
 ✅ S15 Reference Model: All values converted to numbers for proper math
 ✅ S15 Reference Model: Additional fuel variables declared for cost calculations
 [S15 DEBUG] 💰 Electricity price from S04: raw="$0.1300" → parsed=$0/kWh
 🔍 S15 TARGET UPSTREAM: target_i_104=116070.33, target_m_121=48980.79999999999, target_i_80=45879.580160000005
 [S15 DEBUG] 💰 All energy prices from S04: elec=$0, gas=$0, propane=$0, oil=$0, wood=$0
 🔍 S15 REFERENCE UPSTREAM: ref_i_104=116070.33, ref_m_121=84594.73968, ref_i_80=0
 ✅ S15 Reference Model: All values converted to numbers for proper math
 ✅ S15 Reference Model: Additional fuel variables declared for cost calculations
 [S15 DEBUG] 💰 Electricity price from S04: raw="$0.1300" → parsed=$0/kWh
 🔍 S15 TARGET UPSTREAM: target_i_104=116070.33, target_m_121=48980.79999999999, target_i_80=45879.580160000005
 [S15 DEBUG] 💰 All energy prices from S04: elec=$0, gas=$0, propane=$0, oil=$0, wood=$0
 [S15 DEBUG] 🧮 D141 calculation: 220216.85125050816 kWh/m²/yr × $0/kWh = $0.00
 🔍 S15 REFERENCE UPSTREAM: ref_i_104=116070.33, ref_m_121=84594.73968, ref_i_80=0
 ✅ S15 Reference Model: All values converted to numbers for proper math
 ✅ S15 Reference Model: Additional fuel variables declared for cost calculations
 [S15 DEBUG] 💰 Electricity price from S04: raw="$0.1300" → parsed=$0/kWh
 🔍 S15 TARGET UPSTREAM: target_i_104=116070.33, target_m_121=48980.79999999999, target_i_80=45879.580160000005
 [S15 DEBUG] 💰 All energy prices from S04: elec=$0, gas=$0, propane=$0, oil=$0, wood=$0
 [S15 DEBUG] 🧮 D141 calculation: 220216.85125050816 kWh/m²/yr × $0/kWh = $0.00
 [S15 DEBUG] 🧮 D141 calculation: 220216.85125050816 kWh/m²/yr × $0/kWh = $0.00
 🔍 S15 REFERENCE UPSTREAM: ref_i_104=116070.33, ref_m_121=84594.73968, ref_i_80=0
 ✅ S15 Reference Model: All values converted to numbers for proper math
 ✅ S15 Reference Model: Additional fuel variables declared for cost calculations
 [S15 DEBUG] 💰 Electricity price from S04: raw="$0.1300" → parsed=$0/kWh
 🔍 S15 TARGET UPSTREAM: target_i_104=116070.33, target_m_121=48980.79999999999, target_i_80=45879.580160000005
 [S15 DEBUG] 💰 All energy prices from S04: elec=$0, gas=$0, propane=$0, oil=$0, wood=$0
 [S15 DEBUG] 🧮 D141 calculation: 220216.85125050816 kWh/m²/yr × $0/kWh = $0.00
 [S15 DEBUG] 💰 Electricity price from S04: raw="$0.1300" → parsed=$0/kWh
 🔍 S15 TARGET UPSTREAM: target_i_104=116070.33, target_m_121=48980.79999999999, target_i_80=45879.580160000005
 [S15 DEBUG] 💰 All energy prices from S04: elec=$0, gas=$0, propane=$0, oil=$0, wood=$0
 [S15 DEBUG] 🧮 D141 calculation: 220216.85125050816 kWh/m²/yr × $0/kWh = $0.00
 🔍 S15 REFERENCE UPSTREAM: ref_i_104=116070.33, ref_m_121=84594.73968, ref_i_80=0
 ✅ S15 Reference Model: All values converted to numbers for proper math
 ✅ S15 Reference Model: Additional fuel variables declared for cost calculations
 [S15 DEBUG] 💰 Electricity price from S04: raw="$0.1300" → parsed=$0/kWh
 🔍 S15 TARGET UPSTREAM: target_i_104=116070.33, target_m_121=48980.79999999999, target_i_80=45879.580160000005
 [S15 DEBUG] 💰 All energy prices from S04: elec=$0, gas=$0, propane=$0, oil=$0, wood=$0
 [S15 DEBUG] 🧮 D141 calculation: 220216.85125050816 kWh/m²/yr × $0/kWh = $0.00
 [Section12] Reference results stored with ref_ prefix for downstream sections
 [Section12] Reference Model calculations complete
 [Section12] Running Target Model calculations...
 🔍 S15 REFERENCE UPSTREAM: ref_i_104=116070.33, ref_m_121=84594.73968, ref_i_80=0
 ✅ S15 Reference Model: All values converted to numbers for proper math
 ✅ S15 Reference Model: Additional fuel variables declared for cost calculations
 [S15 DEBUG] 💰 Electricity price from S04: raw="$0.1300" → parsed=$0/kWh
 🔍 S15 TARGET UPSTREAM: target_i_104=116070.33, target_m_121=48980.79999999999, target_i_80=45879.580160000005
 [S15 DEBUG] 💰 All energy prices from S04: elec=$0, gas=$0, propane=$0, oil=$0, wood=$0
 [S15 DEBUG] 🧮 D141 calculation: 220216.85125050816 kWh/m²/yr × $0/kWh = $0.00
 🔍 S15 REFERENCE UPSTREAM: ref_i_104=116070.33, ref_m_121=84594.73968, ref_i_80=0
 ✅ S15 Reference Model: All values converted to numbers for proper math
 ✅ S15 Reference Model: Additional fuel variables declared for cost calculations
 [S15 DEBUG] 💰 Electricity price from S04: raw="$0.1300" → parsed=$0/kWh
 🔍 S15 TARGET UPSTREAM: target_i_104=116070.33, target_m_121=48980.79999999999, target_i_80=45879.580160000005
 [S15 DEBUG] 💰 All energy prices from S04: elec=$0, gas=$0, propane=$0, oil=$0, wood=$0
 [S15 DEBUG] 🧮 D141 calculation: 220216.85125050816 kWh/m²/yr × $0/kWh = $0.00
 🔍 S15 REFERENCE UPSTREAM: ref_i_104=116070.33, ref_m_121=84594.73968, ref_i_80=0
 ✅ S15 Reference Model: All values converted to numbers for proper math
 ✅ S15 Reference Model: Additional fuel variables declared for cost calculations
 [S15 DEBUG] 💰 Electricity price from S04: raw="$0.1300" → parsed=$0/kWh
 🔍 S15 TARGET UPSTREAM: target_i_104=116070.33, target_m_121=48980.79999999999, target_i_80=45879.580160000005
 [S15 DEBUG] 💰 All energy prices from S04: elec=$0, gas=$0, propane=$0, oil=$0, wood=$0
 [S15 DEBUG] 🧮 D141 calculation: 220216.85125050816 kWh/m²/yr × $0/kWh = $0.00
 🔍 S15 REFERENCE UPSTREAM: ref_i_104=116070.33, ref_m_121=84594.73968, ref_i_80=0
 ✅ S15 Reference Model: All values converted to numbers for proper math
 ✅ S15 Reference Model: Additional fuel variables declared for cost calculations
 [S15 DEBUG] 💰 Electricity price from S04: raw="$0.1300" → parsed=$0/kWh
 🔍 S15 TARGET UPSTREAM: target_i_104=116070.33, target_m_121=48980.79999999999, target_i_80=45879.580160000005
 [S15 DEBUG] 💰 All energy prices from S04: elec=$0, gas=$0, propane=$0, oil=$0, wood=$0
 [S15 DEBUG] 🧮 D141 calculation: 220216.85125050816 kWh/m²/yr × $0/kWh = $0.00
 [S02] Switched to REFERENCE mode
 [S02] Switched to TARGET mode
 [S02] Switched to TARGET mode
 [S02] Switched to TARGET mode
 [S02] Switched to REFERENCE mode
 [S02] Switched to TARGET mode
 [S02] Switched to TARGET mode
 [S02] Switched to TARGET mode
 🔍 S15 REFERENCE UPSTREAM: ref_i_104=116070.33, ref_m_121=84594.73968, ref_i_80=0
 ✅ S15 Reference Model: All values converted to numbers for proper math
 ✅ S15 Reference Model: Additional fuel variables declared for cost calculations
 [S15 DEBUG] 💰 Electricity price from S04: raw="$0.1300" → parsed=$0/kWh
 🔍 S15 TARGET UPSTREAM: target_i_104=116070.33, target_m_121=48980.79999999999, target_i_80=45879.580160000005
 [S15 DEBUG] 💰 All energy prices from S04: elec=$0, gas=$0, propane=$0, oil=$0, wood=$0
 [S15 DEBUG] 🧮 D141 calculation: 220216.85125050816 kWh/m²/yr × $0/kWh = $0.00
 🔍 S15 REFERENCE UPSTREAM: ref_i_104=116070.33, ref_m_121=84594.73968, ref_i_80=0
 ✅ S15 Reference Model: All values converted to numbers for proper math
 ✅ S15 Reference Model: Additional fuel variables declared for cost calculations
 [S15 DEBUG] 💰 Electricity price from S04: raw="$0.1300" → parsed=$0/kWh
 🔍 S15 TARGET UPSTREAM: target_i_104=116070.33, target_m_121=48980.79999999999, target_i_80=45879.580160000005
 [S15 DEBUG] 💰 All energy prices from S04: elec=$0, gas=$0, propane=$0, oil=$0, wood=$0
 [S15 DEBUG] 🧮 D141 calculation: 220216.85125050816 kWh/m²/yr × $0/kWh = $0.00
 🔍 S15 REFERENCE UPSTREAM: ref_i_104=116070.33, ref_m_121=84594.73968, ref_i_80=0
 ✅ S15 Reference Model: All values converted to numbers for proper math
 ✅ S15 Reference Model: Additional fuel variables declared for cost calculations
 [S15 DEBUG] 💰 Electricity price from S04: raw="$0.1300" → parsed=$0/kWh
 🔍 S15 TARGET UPSTREAM: target_i_104=116070.33, target_m_121=48980.79999999999, target_i_80=45879.580160000005
 [S15 DEBUG] 💰 All energy prices from S04: elec=$0, gas=$0, propane=$0, oil=$0, wood=$0
 [S15 DEBUG] 🧮 D141 calculation: 220216.85125050816 kWh/m²/yr × $0/kWh = $0.00
 🔍 S15 REFERENCE UPSTREAM: ref_i_104=116070.33, ref_m_121=84594.73968, ref_i_80=0
 ✅ S15 Reference Model: All values converted to numbers for proper math
 ✅ S15 Reference Model: Additional fuel variables declared for cost calculations
 [S15 DEBUG] 💰 Electricity price from S04: raw="$0.1300" → parsed=$0/kWh
 🔍 S15 TARGET UPSTREAM: target_i_104=116070.33, target_m_121=48980.79999999999, target_i_80=45879.580160000005
 [S15 DEBUG] 💰 All energy prices from S04: elec=$0, gas=$0, propane=$0, oil=$0, wood=$0
 [S15 DEBUG] 🧮 D141 calculation: 220216.85125050816 kWh/m²/yr × $0/kWh = $0.00
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
 [S15 DEBUG] 💰 Electricity price from S04: raw="$0.1300" → parsed=$0/kWh
 🔍 S15 TARGET UPSTREAM: target_i_104=116070.33, target_m_121=48980.79999999999, target_i_80=45879.580160000005
 [S15 DEBUG] 💰 All energy prices from S04: elec=$0, gas=$0, propane=$0, oil=$0, wood=$0
 🔍 S15 REFERENCE UPSTREAM: ref_i_104=116070.33, ref_m_121=84594.73968, ref_i_80=0
 ✅ S15 Reference Model: All values converted to numbers for proper math
 ✅ S15 Reference Model: Additional fuel variables declared for cost calculations
 [S15 DEBUG] 💰 Electricity price from S04: raw="$0.1300" → parsed=$0/kWh
 🔍 S15 TARGET UPSTREAM: target_i_104=116070.33, target_m_121=48980.79999999999, target_i_80=45879.580160000005
 [S15 DEBUG] 💰 All energy prices from S04: elec=$0, gas=$0, propane=$0, oil=$0, wood=$0
 🔍 S15 REFERENCE UPSTREAM: ref_i_104=116070.33, ref_m_121=84594.73968, ref_i_80=0
 ✅ S15 Reference Model: All values converted to numbers for proper math
 ✅ S15 Reference Model: Additional fuel variables declared for cost calculations
 [S15 DEBUG] 💰 Electricity price from S04: raw="$0.1300" → parsed=$0/kWh
 🔍 S15 TARGET UPSTREAM: target_i_104=116070.33, target_m_121=48980.79999999999, target_i_80=45879.580160000005
 [S15 DEBUG] 💰 All energy prices from S04: elec=$0, gas=$0, propane=$0, oil=$0, wood=$0
 [S15 DEBUG] 🧮 D141 calculation: 220216.85125050816 kWh/m²/yr × $0/kWh = $0.00
 🔍 S15 REFERENCE UPSTREAM: ref_i_104=116070.33, ref_m_121=84594.73968, ref_i_80=0
 ✅ S15 Reference Model: All values converted to numbers for proper math
 ✅ S15 Reference Model: Additional fuel variables declared for cost calculations
 [S15 DEBUG] 💰 Electricity price from S04: raw="$0.1300" → parsed=$0/kWh
 🔍 S15 TARGET UPSTREAM: target_i_104=116070.33, target_m_121=48980.79999999999, target_i_80=45879.580160000005
 [S15 DEBUG] 💰 All energy prices from S04: elec=$0, gas=$0, propane=$0, oil=$0, wood=$0
 [S15 DEBUG] 🧮 D141 calculation: 220216.85125050816 kWh/m²/yr × $0/kWh = $0.00
 [S15 DEBUG] 🧮 D141 calculation: 220216.85125050816 kWh/m²/yr × $0/kWh = $0.00
 🔍 S15 REFERENCE UPSTREAM: ref_i_104=116070.33, ref_m_121=84594.73968, ref_i_80=0
 ✅ S15 Reference Model: All values converted to numbers for proper math
 ✅ S15 Reference Model: Additional fuel variables declared for cost calculations
 [S15 DEBUG] 💰 Electricity price from S04: raw="$0.1300" → parsed=$0/kWh
 🔍 S15 TARGET UPSTREAM: target_i_104=116070.33, target_m_121=48980.79999999999, target_i_80=45879.580160000005
 [S15 DEBUG] 💰 All energy prices from S04: elec=$0, gas=$0, propane=$0, oil=$0, wood=$0
 [S15 DEBUG] 🧮 D141 calculation: 220216.85125050816 kWh/m²/yr × $0/kWh = $0.00
 🔍 S15 REFERENCE UPSTREAM: ref_i_104=116070.33, ref_m_121=84594.73968, ref_i_80=0
 ✅ S15 Reference Model: All values converted to numbers for proper math
 ✅ S15 Reference Model: Additional fuel variables declared for cost calculations
 [S15 DEBUG] 💰 Electricity price from S04: raw="$0.1300" → parsed=$0/kWh
 🔍 S15 TARGET UPSTREAM: target_i_104=116070.33, target_m_121=48980.79999999999, target_i_80=45879.580160000005
 [S15 DEBUG] 💰 All energy prices from S04: elec=$0, gas=$0, propane=$0, oil=$0, wood=$0
 🔍 S15 REFERENCE UPSTREAM: ref_i_104=116070.33, ref_m_121=84594.73968, ref_i_80=0
 ✅ S15 Reference Model: All values converted to numbers for proper math
 ✅ S15 Reference Model: Additional fuel variables declared for cost calculations
 [S15 DEBUG] 💰 Electricity price from S04: raw="$0.1300" → parsed=$0/kWh
 🔍 S15 TARGET UPSTREAM: target_i_104=116070.33, target_m_121=48980.79999999999, target_i_80=45879.580160000005
 [S15 DEBUG] 💰 All energy prices from S04: elec=$0, gas=$0, propane=$0, oil=$0, wood=$0
 [S15 DEBUG] 🧮 D141 calculation: 220216.85125050816 kWh/m²/yr × $0/kWh = $0.00
 🔍 S15 REFERENCE UPSTREAM: ref_i_104=116070.33, ref_m_121=84594.73968, ref_i_80=0
 ✅ S15 Reference Model: All values converted to numbers for proper math
 ✅ S15 Reference Model: Additional fuel variables declared for cost calculations
 [S15 DEBUG] 💰 Electricity price from S04: raw="$0.1300" → parsed=$0/kWh
 🔍 S15 TARGET UPSTREAM: target_i_104=116070.33, target_m_121=48980.79999999999, target_i_80=45879.580160000005
 [S15 DEBUG] 💰 All energy prices from S04: elec=$0, gas=$0, propane=$0, oil=$0, wood=$0
 [S15 DEBUG] 🧮 D141 calculation: 220216.85125050816 kWh/m²/yr × $0/kWh = $0.00
 [S15 DEBUG] 🧮 D141 calculation: 220216.85125050816 kWh/m²/yr × $0/kWh = $0.00
 🔍 S15 REFERENCE UPSTREAM: ref_i_104=116070.33, ref_m_121=84594.73968, ref_i_80=0
 ✅ S15 Reference Model: All values converted to numbers for proper math
 ✅ S15 Reference Model: Additional fuel variables declared for cost calculations
 [S15 DEBUG] 💰 Electricity price from S04: raw="$0.1300" → parsed=$0/kWh
 🔍 S15 TARGET UPSTREAM: target_i_104=116070.33, target_m_121=48980.79999999999, target_i_80=45879.580160000005
 [S15 DEBUG] 💰 All energy prices from S04: elec=$0, gas=$0, propane=$0, oil=$0, wood=$0
 [S15 DEBUG] 🧮 D141 calculation: 220216.85125050816 kWh/m²/yr × $0/kWh = $0.00
 🔍 S15 REFERENCE UPSTREAM: ref_i_104=116070.33, ref_m_121=84594.73968, ref_i_80=0
 ✅ S15 Reference Model: All values converted to numbers for proper math
 ✅ S15 Reference Model: Additional fuel variables declared for cost calculations
 [S15 DEBUG] 💰 Electricity price from S04: raw="$0.1300" → parsed=$0/kWh
 🔍 S15 TARGET UPSTREAM: target_i_104=116070.33, target_m_121=48980.79999999999, target_i_80=45879.580160000005
 [S15 DEBUG] 💰 All energy prices from S04: elec=$0, gas=$0, propane=$0, oil=$0, wood=$0
 🔍 S15 REFERENCE UPSTREAM: ref_i_104=116070.33, ref_m_121=84594.73968, ref_i_80=0
 ✅ S15 Reference Model: All values converted to numbers for proper math
 ✅ S15 Reference Model: Additional fuel variables declared for cost calculations
 [S15 DEBUG] 💰 Electricity price from S04: raw="$0.1300" → parsed=$0/kWh
 🔍 S15 TARGET UPSTREAM: target_i_104=116070.33, target_m_121=48980.79999999999, target_i_80=45879.580160000005
 [S15 DEBUG] 💰 All energy prices from S04: elec=$0, gas=$0, propane=$0, oil=$0, wood=$0
 [S15 DEBUG] 🧮 D141 calculation: 220216.85125050816 kWh/m²/yr × $0/kWh = $0.00
 🔍 S15 REFERENCE UPSTREAM: ref_i_104=116070.33, ref_m_121=84594.73968, ref_i_80=0
 ✅ S15 Reference Model: All values converted to numbers for proper math
 ✅ S15 Reference Model: Additional fuel variables declared for cost calculations
 [S15 DEBUG] 💰 Electricity price from S04: raw="$0.1300" → parsed=$0/kWh
 🔍 S15 TARGET UPSTREAM: target_i_104=116070.33, target_m_121=48980.79999999999, target_i_80=45879.580160000005
 [S15 DEBUG] 💰 All energy prices from S04: elec=$0, gas=$0, propane=$0, oil=$0, wood=$0
 [S15 DEBUG] 🧮 D141 calculation: 220216.85125050816 kWh/m²/yr × $0/kWh = $0.00
 [S15 DEBUG] 🧮 D141 calculation: 220216.85125050816 kWh/m²/yr × $0/kWh = $0.00
 🔍 S15 REFERENCE UPSTREAM: ref_i_104=116070.33, ref_m_121=84594.73968, ref_i_80=0
 ✅ S15 Reference Model: All values converted to numbers for proper math
 ✅ S15 Reference Model: Additional fuel variables declared for cost calculations
 [S15 DEBUG] 💰 Electricity price from S04: raw="$0.1300" → parsed=$0/kWh
 🔍 S15 TARGET UPSTREAM: target_i_104=116070.33, target_m_121=48980.79999999999, target_i_80=45879.580160000005
 [S15 DEBUG] 💰 All energy prices from S04: elec=$0, gas=$0, propane=$0, oil=$0, wood=$0
 [S15 DEBUG] 🧮 D141 calculation: 220216.85125050816 kWh/m²/yr × $0/kWh = $0.00
 🔍 S15 REFERENCE UPSTREAM: ref_i_104=116070.33, ref_m_121=84594.73968, ref_i_80=0
 ✅ S15 Reference Model: All values converted to numbers for proper math
 ✅ S15 Reference Model: Additional fuel variables declared for cost calculations
 [S15 DEBUG] 💰 Electricity price from S04: raw="$0.1300" → parsed=$0/kWh
 🔍 S15 TARGET UPSTREAM: target_i_104=116070.33, target_m_121=48980.79999999999, target_i_80=45879.580160000005
 [S15 DEBUG] 💰 All energy prices from S04: elec=$0, gas=$0, propane=$0, oil=$0, wood=$0
 🔍 S15 REFERENCE UPSTREAM: ref_i_104=116070.33, ref_m_121=84594.73968, ref_i_80=0
 ✅ S15 Reference Model: All values converted to numbers for proper math
 ✅ S15 Reference Model: Additional fuel variables declared for cost calculations
 [S15 DEBUG] 💰 Electricity price from S04: raw="$0.1300" → parsed=$0/kWh
 🔍 S15 TARGET UPSTREAM: target_i_104=116070.33, target_m_121=48980.79999999999, target_i_80=45879.580160000005
 [S15 DEBUG] 💰 All energy prices from S04: elec=$0, gas=$0, propane=$0, oil=$0, wood=$0
 [S15 DEBUG] 🧮 D141 calculation: 220216.85125050816 kWh/m²/yr × $0/kWh = $0.00
 🔍 S15 REFERENCE UPSTREAM: ref_i_104=116070.33, ref_m_121=84594.73968, ref_i_80=0
 ✅ S15 Reference Model: All values converted to numbers for proper math
 ✅ S15 Reference Model: Additional fuel variables declared for cost calculations
 [S15 DEBUG] 💰 Electricity price from S04: raw="$0.1300" → parsed=$0/kWh
 🔍 S15 TARGET UPSTREAM: target_i_104=116070.33, target_m_121=48980.79999999999, target_i_80=45879.580160000005
 [S15 DEBUG] 💰 All energy prices from S04: elec=$0, gas=$0, propane=$0, oil=$0, wood=$0
 [S15 DEBUG] 🧮 D141 calculation: 220216.85125050816 kWh/m²/yr × $0/kWh = $0.00
 [S15 DEBUG] 🧮 D141 calculation: 220216.85125050816 kWh/m²/yr × $0/kWh = $0.00
 🔍 S15 REFERENCE UPSTREAM: ref_i_104=116070.33, ref_m_121=84594.73968, ref_i_80=0
 ✅ S15 Reference Model: All values converted to numbers for proper math
 ✅ S15 Reference Model: Additional fuel variables declared for cost calculations
 [S15 DEBUG] 💰 Electricity price from S04: raw="$0.1300" → parsed=$0/kWh
 🔍 S15 TARGET UPSTREAM: target_i_104=116070.33, target_m_121=48980.79999999999, target_i_80=45879.580160000005
 [S15 DEBUG] 💰 All energy prices from S04: elec=$0, gas=$0, propane=$0, oil=$0, wood=$0
 [S15 DEBUG] 🧮 D141 calculation: 220216.85125050816 kWh/m²/yr × $0/kWh = $0.00
 [S02] Switched to REFERENCE mode
 [S02] Switched to TARGET mode
 [S02] Switched to TARGET mode
 [S02] Switched to TARGET mode
 [S02] Switched to REFERENCE mode
 [S02] Switched to TARGET mode
 [S02] Switched to TARGET mode
 [S02] Switched to TARGET mode
 🔍 S15 REFERENCE UPSTREAM: ref_i_104=116070.33, ref_m_121=84594.73968, ref_i_80=0
 ✅ S15 Reference Model: All values converted to numbers for proper math
 ✅ S15 Reference Model: Additional fuel variables declared for cost calculations
 [S15 DEBUG] 💰 Electricity price from S04: raw="$0.1300" → parsed=$0/kWh
 🔍 S15 TARGET UPSTREAM: target_i_104=116070.33, target_m_121=48980.79999999999, target_i_80=45879.580160000005
 [S15 DEBUG] 💰 All energy prices from S04: elec=$0, gas=$0, propane=$0, oil=$0, wood=$0
 [S15 DEBUG] 🧮 D141 calculation: 220216.85125050816 kWh/m²/yr × $0/kWh = $0.00
 🔍 S15 REFERENCE UPSTREAM: ref_i_104=116070.33, ref_m_121=84594.73968, ref_i_80=0
 ✅ S15 Reference Model: All values converted to numbers for proper math
 ✅ S15 Reference Model: Additional fuel variables declared for cost calculations
 [S15 DEBUG] 💰 Electricity price from S04: raw="$0.1300" → parsed=$0/kWh
 🔍 S15 TARGET UPSTREAM: target_i_104=116070.33, target_m_121=48980.79999999999, target_i_80=45879.580160000005
 [S15 DEBUG] 💰 All energy prices from S04: elec=$0, gas=$0, propane=$0, oil=$0, wood=$0
 [S15 DEBUG] 🧮 D141 calculation: 220216.85125050816 kWh/m²/yr × $0/kWh = $0.00
 🔍 S15 REFERENCE UPSTREAM: ref_i_104=116070.33, ref_m_121=84594.73968, ref_i_80=0
 ✅ S15 Reference Model: All values converted to numbers for proper math
 ✅ S15 Reference Model: Additional fuel variables declared for cost calculations
 [S15 DEBUG] 💰 Electricity price from S04: raw="$0.1300" → parsed=$0/kWh
 🔍 S15 TARGET UPSTREAM: target_i_104=116070.33, target_m_121=48980.79999999999, target_i_80=45879.580160000005
 [S15 DEBUG] 💰 All energy prices from S04: elec=$0, gas=$0, propane=$0, oil=$0, wood=$0
 🔍 S15 REFERENCE UPSTREAM: ref_i_104=116070.33, ref_m_121=84594.73968, ref_i_80=0
 ✅ S15 Reference Model: All values converted to numbers for proper math
 ✅ S15 Reference Model: Additional fuel variables declared for cost calculations
 [S15 DEBUG] 💰 Electricity price from S04: raw="$0.1300" → parsed=$0/kWh
 🔍 S15 TARGET UPSTREAM: target_i_104=116070.33, target_m_121=48980.79999999999, target_i_80=45879.580160000005
 [S15 DEBUG] 💰 All energy prices from S04: elec=$0, gas=$0, propane=$0, oil=$0, wood=$0
 [S15 DEBUG] 🧮 D141 calculation: 220216.85125050816 kWh/m²/yr × $0/kWh = $0.00
 🔍 S15 REFERENCE UPSTREAM: ref_i_104=116070.33, ref_m_121=84594.73968, ref_i_80=0
 ✅ S15 Reference Model: All values converted to numbers for proper math
 ✅ S15 Reference Model: Additional fuel variables declared for cost calculations
 [S15 DEBUG] 💰 Electricity price from S04: raw="$0.1300" → parsed=$0/kWh
 🔍 S15 TARGET UPSTREAM: target_i_104=116070.33, target_m_121=48980.79999999999, target_i_80=45879.580160000005
 [S15 DEBUG] 💰 All energy prices from S04: elec=$0, gas=$0, propane=$0, oil=$0, wood=$0
 [S15 DEBUG] 🧮 D141 calculation: 220216.85125050816 kWh/m²/yr × $0/kWh = $0.00
 [S15 DEBUG] 🧮 D141 calculation: 220216.85125050816 kWh/m²/yr × $0/kWh = $0.00
 🔍 S15 REFERENCE UPSTREAM: ref_i_104=116070.33, ref_m_121=84594.73968, ref_i_80=0
 ✅ S15 Reference Model: All values converted to numbers for proper math
 ✅ S15 Reference Model: Additional fuel variables declared for cost calculations
 [S15 DEBUG] 💰 Electricity price from S04: raw="$0.1300" → parsed=$0/kWh
 🔍 S15 TARGET UPSTREAM: target_i_104=116070.33, target_m_121=48980.79999999999, target_i_80=45879.580160000005
 [S15 DEBUG] 💰 All energy prices from S04: elec=$0, gas=$0, propane=$0, oil=$0, wood=$0
 [S15 DEBUG] 🧮 D141 calculation: 220216.85125050816 kWh/m²/yr × $0/kWh = $0.00
 [S15 DEBUG] 🧮 D141 calculation: 220216.85125050816 kWh/m²/yr × $0/kWh = $0.00
 🔍 S15 REFERENCE UPSTREAM: ref_i_104=116070.33, ref_m_121=84594.73968, ref_i_80=0
 ✅ S15 Reference Model: All values converted to numbers for proper math
 ✅ S15 Reference Model: Additional fuel variables declared for cost calculations
 [S15 DEBUG] 💰 Electricity price from S04: raw="$0.1300" → parsed=$0/kWh
 🔍 S15 TARGET UPSTREAM: target_i_104=116070.33, target_m_121=48980.79999999999, target_i_80=45879.580160000005
 [S15 DEBUG] 💰 All energy prices from S04: elec=$0, gas=$0, propane=$0, oil=$0, wood=$0
 [S15 DEBUG] 🧮 D141 calculation: 220216.85125050816 kWh/m²/yr × $0/kWh = $0.00
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
 [S15 DEBUG] 💰 Electricity price from S04: raw="$0.1300" → parsed=$0/kWh
 🔍 S15 TARGET UPSTREAM: target_i_104=116070.32516166594, target_m_121=48980.79999999999, target_i_80=45879.580160000005
 [S15 DEBUG] 💰 All energy prices from S04: elec=$0, gas=$0, propane=$0, oil=$0, wood=$0
 [S15 DEBUG] 🧮 D141 calculation: 220216.84641217405 kWh/m²/yr × $0/kWh = $0.00
 🔍 S15 REFERENCE UPSTREAM: ref_i_104=116070.33, ref_m_121=84594.73968, ref_i_80=0
 ✅ S15 Reference Model: All values converted to numbers for proper math
 ✅ S15 Reference Model: Additional fuel variables declared for cost calculations
 [S15 DEBUG] 💰 Electricity price from S04: raw="$0.1300" → parsed=$0/kWh
 🔍 S15 TARGET UPSTREAM: target_i_104=116070.32516166594, target_m_121=48980.79999999999, target_i_80=45879.580160000005
 [S15 DEBUG] 💰 All energy prices from S04: elec=$0, gas=$0, propane=$0, oil=$0, wood=$0
 [S15 DEBUG] 🧮 D141 calculation: 220216.84641217405 kWh/m²/yr × $0/kWh = $0.00
 [S13 DEBUG] Storing ref_d_114 = 253752.09440223372
 [S13 DEBUG] Storing ref_d_115 = 281946.77155803744
 [S13 DEBUG] Storing ref_f_115 = 0
 [S13 DEBUG] Storing ref_h_115 = 27214.939339578905
 [S13 DEBUG] Storing ref_l_115 = 28194.677155803714
 🔍 S15 REFERENCE UPSTREAM: ref_i_104=116070.33, ref_m_121=84594.73968, ref_i_80=0
 ✅ S15 Reference Model: All values converted to numbers for proper math
 ✅ S15 Reference Model: Additional fuel variables declared for cost calculations
 [S15 DEBUG] 💰 Electricity price from S04: raw="$0.1300" → parsed=$0/kWh
 🔍 S15 TARGET UPSTREAM: target_i_104=116070.32516166594, target_m_121=48980.79999999999, target_i_80=45879.580160000005
 [S15 DEBUG] 💰 All energy prices from S04: elec=$0, gas=$0, propane=$0, oil=$0, wood=$0
 [S15 DEBUG] 🧮 D141 calculation: 220216.84641217405 kWh/m²/yr × $0/kWh = $0.00
 🔍 S15 REFERENCE UPSTREAM: ref_i_104=116070.33, ref_m_121=84594.73968, ref_i_80=0
 ✅ S15 Reference Model: All values converted to numbers for proper math
 ✅ S15 Reference Model: Additional fuel variables declared for cost calculations
 [S15 DEBUG] 💰 Electricity price from S04: raw="$0.1300" → parsed=$0/kWh
 🔍 S15 TARGET UPSTREAM: target_i_104=116070.32516166594, target_m_121=48980.79999999999, target_i_80=45879.580160000005
 [S15 DEBUG] 💰 All energy prices from S04: elec=$0, gas=$0, propane=$0, oil=$0, wood=$0
 [S15 DEBUG] 🧮 D141 calculation: 220216.84641217405 kWh/m²/yr × $0/kWh = $0.00
 🔍 S15 REFERENCE UPSTREAM: ref_i_104=116070.33, ref_m_121=84594.73968, ref_i_80=0
 ✅ S15 Reference Model: All values converted to numbers for proper math
 ✅ S15 Reference Model: Additional fuel variables declared for cost calculations
 [S15 DEBUG] 💰 Electricity price from S04: raw="$0.1300" → parsed=$0/kWh
 🔍 S15 TARGET UPSTREAM: target_i_104=116070.32516166594, target_m_121=48980.79999999999, target_i_80=45879.580160000005
 [S15 DEBUG] 💰 All energy prices from S04: elec=$0, gas=$0, propane=$0, oil=$0, wood=$0
 [S15 DEBUG] 🧮 D141 calculation: 220216.84641217405 kWh/m²/yr × $0/kWh = $0.00
 🔍 S15 REFERENCE UPSTREAM: ref_i_104=116070.33, ref_m_121=84594.73968, ref_i_80=0
 ✅ S15 Reference Model: All values converted to numbers for proper math
 ✅ S15 Reference Model: Additional fuel variables declared for cost calculations
 [S15 DEBUG] 💰 Electricity price from S04: raw="$0.1300" → parsed=$0/kWh
 🔍 S15 TARGET UPSTREAM: target_i_104=116070.32516166594, target_m_121=48980.79999999999, target_i_80=45879.580160000005
 [S15 DEBUG] 💰 All energy prices from S04: elec=$0, gas=$0, propane=$0, oil=$0, wood=$0
 [S15 DEBUG] 🧮 D141 calculation: 220216.84641217405 kWh/m²/yr × $0/kWh = $0.00
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
 [S15 DEBUG] 💰 Electricity price from S04: raw="$0.1300" → parsed=$0/kWh
 🔍 S15 TARGET UPSTREAM: target_i_104=116070.32516166594, target_m_121=48980.79999999999, target_i_80=45879.580160000005
 [S15 DEBUG] 💰 All energy prices from S04: elec=$0, gas=$0, propane=$0, oil=$0, wood=$0
 [S15 DEBUG] 🧮 D141 calculation: 220216.84641217405 kWh/m²/yr × $0/kWh = $0.00
 🔍 S15 REFERENCE UPSTREAM: ref_i_104=116070.33, ref_m_121=84594.73968, ref_i_80=0
 ✅ S15 Reference Model: All values converted to numbers for proper math
 ✅ S15 Reference Model: Additional fuel variables declared for cost calculations
 [S15 DEBUG] 💰 Electricity price from S04: raw="$0.1300" → parsed=$0/kWh
 🔍 S15 TARGET UPSTREAM: target_i_104=116070.32516166594, target_m_121=48980.79999999999, target_i_80=45879.580160000005
 [S15 DEBUG] 💰 All energy prices from S04: elec=$0, gas=$0, propane=$0, oil=$0, wood=$0
 [S15 DEBUG] 🧮 D141 calculation: 220216.84641217405 kWh/m²/yr × $0/kWh = $0.00
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
 [Section12] Target Model calculations complete
 [Section12] Dual-engine calculations complete
 🔍 S15 REFERENCE UPSTREAM: ref_i_104=116070.33, ref_m_121=84594.73968, ref_i_80=0
 ✅ S15 Reference Model: All values converted to numbers for proper math
 ✅ S15 Reference Model: Additional fuel variables declared for cost calculations
 [S15 DEBUG] 💰 Electricity price from S04: raw="$0.1300" → parsed=$0/kWh
 🔍 S15 TARGET UPSTREAM: target_i_104=116070.32516166594, target_m_121=48980.79999999999, target_i_80=45879.580160000005
 [S15 DEBUG] 💰 All energy prices from S04: elec=$0, gas=$0, propane=$0, oil=$0, wood=$0
 [S15 DEBUG] 🧮 D141 calculation: 220216.84641217405 kWh/m²/yr × $0/kWh = $0.00
 [DependencyGraph] Data loaded: 382 nodes, 670 links
 [DependencyGraph] Calculating node sizes...
 [Section03] Running Reference Model calculations...
 [Section03] Reference results stored with ref_ prefix for downstream sections: {h_23: '18', d_23: undefined, d_24: undefined, h_24: '24', d_20: undefined, …}
 [Section03] Reference Model calculations complete
 [Section12] Running dual-engine calculations...
 [Section12] Running Reference Model calculations...
 🔍 S15 REFERENCE UPSTREAM: ref_i_104=116070.33, ref_m_121=84594.73968, ref_i_80=0
 ✅ S15 Reference Model: All values converted to numbers for proper math
 ✅ S15 Reference Model: Additional fuel variables declared for cost calculations
 [S15 DEBUG] 💰 Electricity price from S04: raw="$0.1300" → parsed=$0/kWh
 🔍 S15 TARGET UPSTREAM: target_i_104=116070.32516166594, target_m_121=48980.79999999999, target_i_80=45879.580160000005
 [S15 DEBUG] 💰 All energy prices from S04: elec=$0, gas=$0, propane=$0, oil=$0, wood=$0
 [S15 DEBUG] 🧮 D141 calculation: 220216.84641217405 kWh/m²/yr × $0/kWh = $0.00
 🔍 S15 REFERENCE UPSTREAM: ref_i_104=116070.33, ref_m_121=84594.73968, ref_i_80=0
 ✅ S15 Reference Model: All values converted to numbers for proper math
 ✅ S15 Reference Model: Additional fuel variables declared for cost calculations
 [S15 DEBUG] 💰 Electricity price from S04: raw="$0.1300" → parsed=$0/kWh
 🔍 S15 TARGET UPSTREAM: target_i_104=116070.32516166594, target_m_121=48980.79999999999, target_i_80=45879.580160000005
 [S15 DEBUG] 💰 All energy prices from S04: elec=$0, gas=$0, propane=$0, oil=$0, wood=$0
 [S15 DEBUG] 🧮 D141 calculation: 220216.84641217405 kWh/m²/yr × $0/kWh = $0.00
 🔍 S15 REFERENCE UPSTREAM: ref_i_104=116070.32516166594, ref_m_121=84594.73968, ref_i_80=0
 ✅ S15 Reference Model: All values converted to numbers for proper math
 ✅ S15 Reference Model: Additional fuel variables declared for cost calculations
 🔍 S15 REFERENCE UPSTREAM: ref_i_104=116070.32516166594, ref_m_121=84594.73968, ref_i_80=0
 ✅ S15 Reference Model: All values converted to numbers for proper math
 ✅ S15 Reference Model: Additional fuel variables declared for cost calculations
 🔍 S15 REFERENCE UPSTREAM: ref_i_104=116070.32516166594, ref_m_121=84594.73968, ref_i_80=0
 ✅ S15 Reference Model: All values converted to numbers for proper math
 ✅ S15 Reference Model: Additional fuel variables declared for cost calculations
 🔍 S15 REFERENCE UPSTREAM: ref_i_104=116070.32516166594, ref_m_121=84594.73968, ref_i_80=0
 ✅ S15 Reference Model: All values converted to numbers for proper math
 ✅ S15 Reference Model: Additional fuel variables declared for cost calculations
 [S15 DEBUG] 💰 Electricity price from S04: raw="$0.1300" → parsed=$0/kWh
 🔍 S15 TARGET UPSTREAM: target_i_104=116070.32516166594, target_m_121=48980.79999999999, target_i_80=45879.580160000005
 [S15 DEBUG] 💰 All energy prices from S04: elec=$0, gas=$0, propane=$0, oil=$0, wood=$0
 🔍 S15 REFERENCE UPSTREAM: ref_i_104=116070.32516166594, ref_m_121=84594.73968, ref_i_80=0
 ✅ S15 Reference Model: All values converted to numbers for proper math
 ✅ S15 Reference Model: Additional fuel variables declared for cost calculations
 [S15 DEBUG] 💰 Electricity price from S04: raw="$0.1300" → parsed=$0/kWh
 🔍 S15 TARGET UPSTREAM: target_i_104=116070.32516166594, target_m_121=48980.79999999999, target_i_80=45879.580160000005
 [S15 DEBUG] 💰 All energy prices from S04: elec=$0, gas=$0, propane=$0, oil=$0, wood=$0
 [S15 DEBUG] 🧮 D141 calculation: 220216.84641217405 kWh/m²/yr × $0/kWh = $0.00
 🔍 S15 REFERENCE UPSTREAM: ref_i_104=116070.32516166594, ref_m_121=84594.73968, ref_i_80=0
 ✅ S15 Reference Model: All values converted to numbers for proper math
 ✅ S15 Reference Model: Additional fuel variables declared for cost calculations
 [S15 DEBUG] 💰 Electricity price from S04: raw="$0.1300" → parsed=$0/kWh
 🔍 S15 TARGET UPSTREAM: target_i_104=116070.32516166594, target_m_121=48980.79999999999, target_i_80=45879.580160000005
 [S15 DEBUG] 💰 All energy prices from S04: elec=$0, gas=$0, propane=$0, oil=$0, wood=$0
 [S15 DEBUG] 🧮 D141 calculation: 220216.84641217405 kWh/m²/yr × $0/kWh = $0.00
 [S15 DEBUG] 🧮 D141 calculation: 220216.84641217405 kWh/m²/yr × $0/kWh = $0.00
 🔍 S15 REFERENCE UPSTREAM: ref_i_104=116070.32516166594, ref_m_121=84594.73968, ref_i_80=0
 ✅ S15 Reference Model: All values converted to numbers for proper math
 ✅ S15 Reference Model: Additional fuel variables declared for cost calculations
 [S15 DEBUG] 💰 Electricity price from S04: raw="$0.1300" → parsed=$0/kWh
 🔍 S15 TARGET UPSTREAM: target_i_104=116070.32516166594, target_m_121=48980.79999999999, target_i_80=45879.580160000005
 [S15 DEBUG] 💰 All energy prices from S04: elec=$0, gas=$0, propane=$0, oil=$0, wood=$0
 [S15 DEBUG] 🧮 D141 calculation: 220216.84641217405 kWh/m²/yr × $0/kWh = $0.00
 [S15 DEBUG] 💰 Electricity price from S04: raw="$0.1300" → parsed=$0/kWh
 🔍 S15 TARGET UPSTREAM: target_i_104=116070.32516166594, target_m_121=48980.79999999999, target_i_80=45879.580160000005
 [S15 DEBUG] 💰 All energy prices from S04: elec=$0, gas=$0, propane=$0, oil=$0, wood=$0
 [S15 DEBUG] 🧮 D141 calculation: 220216.84641217405 kWh/m²/yr × $0/kWh = $0.00
 🔍 S15 REFERENCE UPSTREAM: ref_i_104=116070.32516166594, ref_m_121=84594.73968, ref_i_80=0
 ✅ S15 Reference Model: All values converted to numbers for proper math
 ✅ S15 Reference Model: Additional fuel variables declared for cost calculations
 [S15 DEBUG] 💰 Electricity price from S04: raw="$0.1300" → parsed=$0/kWh
 🔍 S15 TARGET UPSTREAM: target_i_104=116070.32516166594, target_m_121=48980.79999999999, target_i_80=45879.580160000005
 [S15 DEBUG] 💰 All energy prices from S04: elec=$0, gas=$0, propane=$0, oil=$0, wood=$0
 [S15 DEBUG] 🧮 D141 calculation: 220216.84641217405 kWh/m²/yr × $0/kWh = $0.00
 [S15 DEBUG] 💰 Electricity price from S04: raw="$0.1300" → parsed=$0/kWh
 🔍 S15 TARGET UPSTREAM: target_i_104=116070.32516166594, target_m_121=48980.79999999999, target_i_80=45879.580160000005
 [S15 DEBUG] 💰 All energy prices from S04: elec=$0, gas=$0, propane=$0, oil=$0, wood=$0
 [S15 DEBUG] 🧮 D141 calculation: 220216.84641217405 kWh/m²/yr × $0/kWh = $0.00
 🔍 S15 REFERENCE UPSTREAM: ref_i_104=116070.32516166594, ref_m_121=84594.73968, ref_i_80=0
 ✅ S15 Reference Model: All values converted to numbers for proper math
 ✅ S15 Reference Model: Additional fuel variables declared for cost calculations
 [S15 DEBUG] 💰 Electricity price from S04: raw="$0.1300" → parsed=$0/kWh
 🔍 S15 TARGET UPSTREAM: target_i_104=116070.32516166594, target_m_121=48980.79999999999, target_i_80=45879.580160000005
 [S15 DEBUG] 💰 All energy prices from S04: elec=$0, gas=$0, propane=$0, oil=$0, wood=$0
 [S15 DEBUG] 🧮 D141 calculation: 220216.84641217405 kWh/m²/yr × $0/kWh = $0.00
 🔍 S15 REFERENCE UPSTREAM: ref_i_104=116070.32516166594, ref_m_121=84594.73968, ref_i_80=0
 ✅ S15 Reference Model: All values converted to numbers for proper math
 ✅ S15 Reference Model: Additional fuel variables declared for cost calculations
 [S15 DEBUG] 💰 Electricity price from S04: raw="$0.1300" → parsed=$0/kWh
 🔍 S15 TARGET UPSTREAM: target_i_104=116070.32516166594, target_m_121=48980.79999999999, target_i_80=45879.580160000005
 [S15 DEBUG] 💰 All energy prices from S04: elec=$0, gas=$0, propane=$0, oil=$0, wood=$0
 🔍 S15 REFERENCE UPSTREAM: ref_i_104=116070.32516166594, ref_m_121=84594.73968, ref_i_80=0
 ✅ S15 Reference Model: All values converted to numbers for proper math
 ✅ S15 Reference Model: Additional fuel variables declared for cost calculations
 [S15 DEBUG] 💰 Electricity price from S04: raw="$0.1300" → parsed=$0/kWh
 🔍 S15 TARGET UPSTREAM: target_i_104=116070.32516166594, target_m_121=48980.79999999999, target_i_80=45879.580160000005
 [S15 DEBUG] 💰 All energy prices from S04: elec=$0, gas=$0, propane=$0, oil=$0, wood=$0
 [S15 DEBUG] 🧮 D141 calculation: 220216.84641217405 kWh/m²/yr × $0/kWh = $0.00
 🔍 S15 REFERENCE UPSTREAM: ref_i_104=116070.32516166594, ref_m_121=84594.73968, ref_i_80=0
 ✅ S15 Reference Model: All values converted to numbers for proper math
 ✅ S15 Reference Model: Additional fuel variables declared for cost calculations
 [S15 DEBUG] 💰 Electricity price from S04: raw="$0.1300" → parsed=$0/kWh
 🔍 S15 TARGET UPSTREAM: target_i_104=116070.32516166594, target_m_121=48980.79999999999, target_i_80=45879.580160000005
 [S15 DEBUG] 💰 All energy prices from S04: elec=$0, gas=$0, propane=$0, oil=$0, wood=$0
 [S15 DEBUG] 🧮 D141 calculation: 220216.84641217405 kWh/m²/yr × $0/kWh = $0.00
 [S15 DEBUG] 🧮 D141 calculation: 220216.84641217405 kWh/m²/yr × $0/kWh = $0.00
 🔍 S15 REFERENCE UPSTREAM: ref_i_104=116070.32516166594, ref_m_121=84594.73968, ref_i_80=0
 ✅ S15 Reference Model: All values converted to numbers for proper math
 ✅ S15 Reference Model: Additional fuel variables declared for cost calculations
 [S15 DEBUG] 💰 Electricity price from S04: raw="$0.1300" → parsed=$0/kWh
 🔍 S15 TARGET UPSTREAM: target_i_104=116070.32516166594, target_m_121=48980.79999999999, target_i_80=45879.580160000005
 [S15 DEBUG] 💰 All energy prices from S04: elec=$0, gas=$0, propane=$0, oil=$0, wood=$0
 [S15 DEBUG] 🧮 D141 calculation: 220216.84641217405 kWh/m²/yr × $0/kWh = $0.00
 [S02] Switched to REFERENCE mode
 [S02] Switched to TARGET mode
 [S02] Switched to TARGET mode
 [S02] Switched to TARGET mode
 [S02] Switched to REFERENCE mode
 [S02] Switched to TARGET mode
 [S02] Switched to TARGET mode
 [S02] Switched to TARGET mode
 🔍 S15 REFERENCE UPSTREAM: ref_i_104=116070.32516166594, ref_m_121=84594.73968, ref_i_80=0
 ✅ S15 Reference Model: All values converted to numbers for proper math
 ✅ S15 Reference Model: Additional fuel variables declared for cost calculations
 [S15 DEBUG] 💰 Electricity price from S04: raw="$0.1300" → parsed=$0/kWh
 🔍 S15 TARGET UPSTREAM: target_i_104=116070.32516166594, target_m_121=48980.79999999999, target_i_80=45879.580160000005
 [S15 DEBUG] 💰 All energy prices from S04: elec=$0, gas=$0, propane=$0, oil=$0, wood=$0
 [S15 DEBUG] 🧮 D141 calculation: 220216.84641217405 kWh/m²/yr × $0/kWh = $0.00
 🔍 S15 REFERENCE UPSTREAM: ref_i_104=116070.32516166594, ref_m_121=84594.73968, ref_i_80=0
 ✅ S15 Reference Model: All values converted to numbers for proper math
 ✅ S15 Reference Model: Additional fuel variables declared for cost calculations
 [S15 DEBUG] 💰 Electricity price from S04: raw="$0.1300" → parsed=$0/kWh
 🔍 S15 TARGET UPSTREAM: target_i_104=116070.32516166594, target_m_121=48980.79999999999, target_i_80=45879.580160000005
 [S15 DEBUG] 💰 All energy prices from S04: elec=$0, gas=$0, propane=$0, oil=$0, wood=$0
 [S15 DEBUG] 🧮 D141 calculation: 220216.84641217405 kWh/m²/yr × $0/kWh = $0.00
2 S04 REFERENCE MODEL: ref_j_32=133574.36633416289, ref_k_32=6812.2926830423075
 [S15 DEBUG] 💰 Electricity price from S04: raw="$0.1300" → parsed=$0/kWh
 🔍 S15 TARGET UPSTREAM: target_i_104=116070.32516166594, target_m_121=48980.79999999999, target_i_80=45879.580160000005
 [S15 DEBUG] 💰 All energy prices from S04: elec=$0, gas=$0, propane=$0, oil=$0, wood=$0
 [S15 DEBUG] 🧮 D141 calculation: 220216.84641217405 kWh/m²/yr × $0/kWh = $0.00
 🔍 S15 REFERENCE UPSTREAM: ref_i_104=116070.32516166594, ref_m_121=84594.73968, ref_i_80=0
 ✅ S15 Reference Model: All values converted to numbers for proper math
 ✅ S15 Reference Model: Additional fuel variables declared for cost calculations
 [S15 DEBUG] 💰 Electricity price from S04: raw="$0.1300" → parsed=$0/kWh
 🔍 S15 TARGET UPSTREAM: target_i_104=116070.32516166594, target_m_121=48980.79999999999, target_i_80=45879.580160000005
 [S15 DEBUG] 💰 All energy prices from S04: elec=$0, gas=$0, propane=$0, oil=$0, wood=$0
 [S15 DEBUG] 🧮 D141 calculation: 220216.84641217405 kWh/m²/yr × $0/kWh = $0.00
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
 [S14 DEBUG] 🔄 Running Reference Model calculations...
 [S14 DEBUG] ✅ Converted to numbers - ref_d_127 calculation: 59532.28501397147 + 119064.57002794294 + 36440.079840319355 + 84594.73968 - 45879.580160000005
 [S14 DEBUG] ✅ ref_d_127 = 253752.09440223372 (should be numeric, not NaN)
 [S14 DEBUG] ✅ Stored ref_d_127 = 253752.09440223372 in StateManager
 [S14 DEBUG] 🔄 Continuing with other Reference calculations...
 [S14 DEBUG] ref_d_128 calculation: 59532.28501397147 + 119064.57002794294 + 36440.079840319355 - 45879.580160000005 = 169157.35472223375
 S04 REFERENCE MODEL: ref_j_32=133574.36633416289, ref_k_32=6812.2926830423075
 🔍 S15 REFERENCE UPSTREAM: ref_i_104=116070.32516166594, ref_m_121=84594.73968, ref_i_80=0
 ✅ S15 Reference Model: All values converted to numbers for proper math
 ✅ S15 Reference Model: Additional fuel variables declared for cost calculations
 [S15 DEBUG] 💰 Electricity price from S04: raw="$0.1300" → parsed=$0/kWh
 🔍 S15 TARGET UPSTREAM: target_i_104=116070.32516166594, target_m_121=48980.79999999999, target_i_80=45879.580160000005
 [S15 DEBUG] 💰 All energy prices from S04: elec=$0, gas=$0, propane=$0, oil=$0, wood=$0
 🔍 S15 REFERENCE UPSTREAM: ref_i_104=116070.32516166594, ref_m_121=84594.73968, ref_i_80=0
 ✅ S15 Reference Model: All values converted to numbers for proper math
 ✅ S15 Reference Model: Additional fuel variables declared for cost calculations
 [S15 DEBUG] 💰 Electricity price from S04: raw="$0.1300" → parsed=$0/kWh
 🔍 S15 TARGET UPSTREAM: target_i_104=116070.32516166594, target_m_121=48980.79999999999, target_i_80=45879.580160000005
 [S15 DEBUG] 💰 All energy prices from S04: elec=$0, gas=$0, propane=$0, oil=$0, wood=$0
4011-Section15.js:1782 [S15 DEBUG] 🧮 D141 calculation: 220216.84641217405 kWh/m²/yr × $0/kWh = $0.00
4011-Section15.js:1337 🔍 S15 REFERENCE UPSTREAM: ref_i_104=116070.32516166594, ref_m_121=84594.73968, ref_i_80=0
4011-Section15.js:1378 ✅ S15 Reference Model: All values converted to numbers for proper math
4011-Section15.js:1389 ✅ S15 Reference Model: Additional fuel variables declared for cost calculations
4011-Section15.js:1591 [S15 DEBUG] 💰 Electricity price from S04: raw="$0.1300" → parsed=$0/kWh
4011-Section15.js:1610 🔍 S15 TARGET UPSTREAM: target_i_104=116070.32516166594, target_m_121=48980.79999999999, target_i_80=45879.580160000005
4011-Section15.js:1619 [S15 DEBUG] 💰 All energy prices from S04: elec=$0, gas=$0, propane=$0, oil=$0, wood=$0
4011-Section15.js:1782 [S15 DEBUG] 🧮 D141 calculation: 220216.84641217405 kWh/m²/yr × $0/kWh = $0.00
4011-Section15.js:1782 [S15 DEBUG] 🧮 D141 calculation: 220216.84641217405 kWh/m²/yr × $0/kWh = $0.00
4011-Section15.js:1337 🔍 S15 REFERENCE UPSTREAM: ref_i_104=116070.32516166594, ref_m_121=84594.73968, ref_i_80=0
4011-Section15.js:1378 ✅ S15 Reference Model: All values converted to numbers for proper math
4011-Section15.js:1389 ✅ S15 Reference Model: Additional fuel variables declared for cost calculations
4011-Section15.js:1591 [S15 DEBUG] 💰 Electricity price from S04: raw="$0.1300" → parsed=$0/kWh
4011-Section15.js:1610 🔍 S15 TARGET UPSTREAM: target_i_104=116070.32516166594, target_m_121=48980.79999999999, target_i_80=45879.580160000005
4011-Section15.js:1619 [S15 DEBUG] 💰 All energy prices from S04: elec=$0, gas=$0, propane=$0, oil=$0, wood=$0
4011-Section15.js:1782 [S15 DEBUG] 🧮 D141 calculation: 220216.84641217405 kWh/m²/yr × $0/kWh = $0.00
4011-Section02.js:1403 [S02] Switched to REFERENCE mode
4011-Section02.js:1403 [S02] Switched to TARGET mode
4011-Section02.js:1403 [S02] Switched to TARGET mode
4011-Section02.js:1403 [S02] Switched to TARGET mode
4011-Section02.js:1403 [S02] Switched to REFERENCE mode
4011-Section02.js:1403 [S02] Switched to TARGET mode
4011-Section02.js:1403 [S02] Switched to TARGET mode
4011-Section02.js:1403 [S02] Switched to TARGET mode
4011-Section15.js:1337 🔍 S15 REFERENCE UPSTREAM: ref_i_104=116070.32516166594, ref_m_121=84594.73968, ref_i_80=0
4011-Section15.js:1378 ✅ S15 Reference Model: All values converted to numbers for proper math
4011-Section15.js:1389 ✅ S15 Reference Model: Additional fuel variables declared for cost calculations
4011-Section15.js:1591 [S15 DEBUG] 💰 Electricity price from S04: raw="$0.1300" → parsed=$0/kWh
4011-Section15.js:1610 🔍 S15 TARGET UPSTREAM: target_i_104=116070.32516166594, target_m_121=48980.79999999999, target_i_80=45879.580160000005
4011-Section15.js:1619 [S15 DEBUG] 💰 All energy prices from S04: elec=$0, gas=$0, propane=$0, oil=$0, wood=$0
4011-Section15.js:1782 [S15 DEBUG] 🧮 D141 calculation: 220216.84641217405 kWh/m²/yr × $0/kWh = $0.00
4011-Dependency.js:78 [DependencyGraph] Data loaded: 382 nodes, 670 links
4011-Dependency.js:712 [DependencyGraph] Calculating node sizes...
4011-Section15.js:268 S15: Switched to REFERENCE mode
 [S15 DEBUG] 🔄 Updating calculated display values for reference mode
 [S15 DEBUG] Sample Reference values in StateManager: {ref_d_135: '313511.384841666', ref_h_135: '219.6688514865933', ref_d_136: '313511.384841666'}
 [S15] d_135: REF=313511.384841666 vs TGT=220216.84641217405 (showing REF)
 [S15] h_135: REF=219.6688514865933 vs TGT=154.29992041211747 (showing REF)
 [Section15] Calculated display values updated for reference mode
 S15: UI refreshed for reference mode
 🔍 S15 REFERENCE UPSTREAM: ref_i_104=116070.32516166594, ref_m_121=84594.73968, ref_i_80=0
 ✅ S15 Reference Model: All values converted to numbers for proper math
 ✅ S15 Reference Model: Additional fuel variables declared for cost calculations
4011-Section15.js:1591 [S15 DEBUG] 💰 Electricity price from S04: raw="$0.1300" → parsed=$0/kWh
4011-Section15.js:1610 🔍 S15 TARGET UPSTREAM: target_i_104=116070.32516166594, target_m_121=48980.79999999999, target_i_80=45879.580160000005
4011-Section15.js:1619 [S15 DEBUG] 💰 All energy prices from S04: elec=$0, gas=$0, propane=$0, oil=$0, wood=$0
4011-Section15.js:1782 [S15 DEBUG] 🧮 D141 calculation: 220216.84641217405 kWh/m²/yr × $0/kWh = $0.00
4011-Section15.js:310 [S15 DEBUG] 🔄 Updating calculated display values for reference mode
4011-Section15.js:318 [S15 DEBUG] Sample Reference values in StateManager: {ref_d_135: '313511.384841666', ref_h_135: '219.6688514865933', ref_d_136: '313511.384841666'}
4011-Section15.js:342 [S15] d_135: REF=313511.384841666 vs TGT=220216.84641217405 (showing REF)
4011-Section15.js:342 [S15] h_135: REF=219.6688514865933 vs TGT=154.29992041211747 (showing REF)
4011-Section15.js:375 [Section15] Calculated display values updated for reference mode
4011-Section15.js:268 S15: Switched to TARGET mode
4011-Section15.js:310 [S15 DEBUG] 🔄 Updating calculated display values for target mode
4011-Section15.js:318 [S15 DEBUG] Sample Reference values in StateManager: {ref_d_135: '313511.384841666', ref_h_135: '219.6688514865933', ref_d_136: '313511.384841666'}
 [Section15] Calculated display values updated for target mode
 S15: UI refreshed for target mode
 🔍 S15 REFERENCE UPSTREAM: ref_i_104=116070.32516166594, ref_m_121=84594.73968, ref_i_80=0
4011-Section15.js:1378 ✅ S15 Reference Model: All values converted to numbers for proper math
4011-Section15.js:1389 ✅ S15 Reference Model: Additional fuel variables declared for cost calculations
4011-Section15.js:1591 [S15 DEBUG] 💰 Electricity price from S04: raw="$0.1300" → parsed=$0/kWh
4011-Section15.js:1610 🔍 S15 TARGET UPSTREAM: target_i_104=116070.32516166594, target_m_121=48980.79999999999, target_i_80=45879.580160000005
4011-Section15.js:1619 [S15 DEBUG] 💰 All energy prices from S04: elec=$0, gas=$0, propane=$0, oil=$0, wood=$0
4011-Section15.js:1782 [S15 DEBUG] 🧮 D141 calculation: 220216.84641217405 kWh/m²/yr × $0/kWh = $0.00
4011-Section15.js:310 [S15 DEBUG] 🔄 Updating calculated display values for target mode
4011-Section15.js:318 [S15 DEBUG] Sample Reference values in StateManager: {ref_d_135: '313511.384841666', ref_h_135: '219.6688514865933', ref_d_136: '313511.384841666'}
4011-Section15.js:375 [Section15] Calculated display values updated for target mode
4011-Section15.js:268 S15: Switched to REFERENCE mode
4011-Section15.js:310 [S15 DEBUG] 🔄 Updating calculated display values for reference mode
4011-Section15.js:318 [S15 DEBUG] Sample Reference values in StateManager: {ref_d_135: '313511.384841666', ref_h_135: '219.6688514865933', ref_d_136: '313511.384841666'}
4011-Section15.js:342 [S15] d_135: REF=313511.384841666 vs TGT=220216.84641217405 (showing REF)
 [S15] h_135: REF=219.6688514865933 vs TGT=154.29992041211747 (showing REF)
 [Section15] Calculated display values updated for reference mode
 S15: UI refreshed for reference mode
 🔍 S15 REFERENCE UPSTREAM: ref_i_104=116070.32516166594, ref_m_121=84594.73968, ref_i_80=0
 ✅ S15 Reference Model: All values converted to numbers for proper math
 ✅ S15 Reference Model: Additional fuel variables declared for cost calculations
4011-Section15.js:1591 [S15 DEBUG] 💰 Electricity price from S04: raw="$0.1300" → parsed=$0/kWh
4011-Section15.js:1610 🔍 S15 TARGET UPSTREAM: target_i_104=116070.32516166594, target_m_121=48980.79999999999, target_i_80=45879.580160000005
4011-Section15.js:1619 [S15 DEBUG] 💰 All energy prices from S04: elec=$0, gas=$0, propane=$0, oil=$0, wood=$0
4011-Section15.js:1782 [S15 DEBUG] 🧮 D141 calculation: 220216.84641217405 kWh/m²/yr × $0/kWh = $0.00
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
4011-Section15.js:1337 🔍 S15 REFERENCE UPSTREAM: ref_i_104=116070.32516166594, ref_m_121=84594.73968, ref_i_80=0
4011-Section15.js:1378 ✅ S15 Reference Model: All values converted to numbers for proper math
4011-Section15.js:1389 ✅ S15 Reference Model: Additional fuel variables declared for cost calculations
4011-Section15.js:1591 [S15 DEBUG] 💰 Electricity price from S04: raw="$0.1300" → parsed=$0/kWh
4011-Section15.js:1610 🔍 S15 TARGET UPSTREAM: target_i_104=116070.32516166594, target_m_121=48980.79999999999, target_i_80=45879.580160000005
4011-Section15.js:1619 [S15 DEBUG] 💰 All energy prices from S04: elec=$0, gas=$0, propane=$0, oil=$0, wood=$0
4011-Section15.js:1782 [S15 DEBUG] 🧮 D141 calculation: 220216.84641217405 kWh/m²/yr × $0/kWh = $0.00
4011-Section15.js:310 [S15 DEBUG] 🔄 Updating calculated display values for target mode
4011-Section15.js:318 [S15 DEBUG] Sample Reference values in StateManager: {ref_d_135: '313511.384841666', ref_h_135: '219.6688514865933', ref_d_136: '313511.384841666'}
4011-Section15.js:375 [Section15] Calculated display values updated for target mode
4011-Section15.js:268 S15: Switched to REFERENCE mode
4011-Section15.js:310 [S15 DEBUG] 🔄 Updating calculated display values for reference mode
4011-Section15.js:318 [S15 DEBUG] Sample Reference values in StateManager: {ref_d_135: '313511.384841666', ref_h_135: '219.6688514865933', ref_d_136: '313511.384841666'}
4011-Section15.js:342 [S15] d_135: REF=313511.384841666 vs TGT=220216.84641217405 (showing REF)
4011-Section15.js:342 [S15] h_135: REF=219.6688514865933 vs TGT=154.29992041211747 (showing REF)
4011-Section15.js:375 [Section15] Calculated display values updated for reference mode
4011-Section15.js:303 S15: UI refreshed for reference mode
4011-Section15.js:1337 🔍 S15 REFERENCE UPSTREAM: ref_i_104=116070.32516166594, ref_m_121=84594.73968, ref_i_80=0
4011-Section15.js:1378 ✅ S15 Reference Model: All values converted to numbers for proper math
4011-Section15.js:1389 ✅ S15 Reference Model: Additional fuel variables declared for cost calculations
4011-Section15.js:1591 [S15 DEBUG] 💰 Electricity price from S04: raw="$0.1300" → parsed=$0/kWh
4011-Section15.js:1610 🔍 S15 TARGET UPSTREAM: target_i_104=116070.32516166594, target_m_121=48980.79999999999, target_i_80=45879.580160000005
4011-Section15.js:1619 [S15 DEBUG] 💰 All energy prices from S04: elec=$0, gas=$0, propane=$0, oil=$0, wood=$0
4011-Section15.js:1782 [S15 DEBUG] 🧮 D141 calculation: 220216.84641217405 kWh/m²/yr × $0/kWh = $0.00
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
4011-Section15.js:1337 🔍 S15 REFERENCE UPSTREAM: ref_i_104=116070.32516166594, ref_m_121=84594.73968, ref_i_80=0
4011-Section15.js:1378 ✅ S15 Reference Model: All values converted to numbers for proper math
4011-Section15.js:1389 ✅ S15 Reference Model: Additional fuel variables declared for cost calculations
4011-Section15.js:1591 [S15 DEBUG] 💰 Electricity price from S04: raw="$0.1300" → parsed=$0/kWh
4011-Section15.js:1610 🔍 S15 TARGET UPSTREAM: target_i_104=116070.32516166594, target_m_121=48980.79999999999, target_i_80=45879.580160000005
4011-Section15.js:1619 [S15 DEBUG] 💰 All energy prices from S04: elec=$0, gas=$0, propane=$0, oil=$0, wood=$0
4011-Section15.js:1782 [S15 DEBUG] 🧮 D141 calculation: 220216.84641217405 kWh/m²/yr × $0/kWh = $0.00
4011-Section15.js:310 [S15 DEBUG] 🔄 Updating calculated display values for target mode
4011-Section15.js:318 [S15 DEBUG] Sample Reference values in StateManager: {ref_d_135: '313511.384841666', ref_h_135: '219.6688514865933', ref_d_136: '313511.384841666'}
4011-Section15.js:375 [Section15] Calculated display values updated for target mode