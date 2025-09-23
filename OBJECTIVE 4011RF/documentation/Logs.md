 🔍 [S13-CONTEXT] TargetState.g_118="Volume by Schedule", ReferenceState.g_118="Volume Constant"
 [Section13] Running Target Model calculations...
 [S13] TGT HEATING: system=Heatpump, ted=119171.54500166589, afue=0.98, cop=3.663540445486518
 🔍 [S13-VENT] calculateVentilationRates: ventMethod="Volume by Schedule", ach(l_118)=3, ratePerPerson(d_119)=14, volume(d_105)=8000
 🔍 [S13-VENT] isReferenceCalculation=false, hasContext=true
 🔍 [S13-VENT] calculateVentilationValues: ventMethod="Volume by Schedule", ach(l_118)=3, ratePerPerson(d_119)=14, volume(d_105)=8000
 🔍 [S13-VENT] Supporting values: occupants(d_63)=126, occupiedHours(i_63)=4380, totalHours(j_63)=8760
 ✅ [S13-VENT] Final d_120 result: 3333.333333333333 L/s (from method="Volume by Schedule", ach=3, volume=8000)
 [Section13] 🧊 COOLING CALC: mode=TGT, coolingSystemType="Cooling", heatingType="Heatpump", isCoolingActive=true, coolingDemand=9572.242304946165
 [Section13] 🧊 COOLING RESULTS: d_117=3593.80399917213, j_116=2.663540445486518, l_116=0, l_114=5978.438305774035
2 [S14 LISTENER] 🔥 d_122 changed - triggering calculateAll() + UI update
 [S15] 🎯 TGT S03 CLIMATE READ: h_23=18, d_23=-24, d_24=30, h_24=24
 [StateManager] 🎯 h_10 setValue: "93.42863573628563" (state: calculated)
 [StateManager] h_10 setValue stack trace:
setValue @ 4011-StateManager.js:346
calculateValues @ 4011-Section15.js:1832
calculateTargetModel @ 4011-Section15.js:1662
calculateAll @ 4011-Section15.js:1328
(anonymous) @ 4011-Section15.js:2121
(anonymous) @ 4011-StateManager.js:543
notifyListeners @ 4011-StateManager.js:541
setValue @ 4011-StateManager.js:419
setFieldValue @ 4011-Section13.js:636
calculateCoolingVentilation @ 4011-Section13.js:3272
calculateCoolingSystem @ 4011-Section13.js:3040
calculateTargetModel @ 4011-Section13.js:3560
calculateAll @ 4011-Section13.js:3403
calculateAndRefresh @ 4011-Section13.js:2368
(anonymous) @ 4011-StateManager.js:543
notifyListeners @ 4011-StateManager.js:541
setValue @ 4011-StateManager.js:419
setCalculatedValue @ 4011-Section12.js:1170
calculateEnvelopeTotals @ 4011-Section12.js:2163
calculateTargetModel @ 4011-Section12.js:2362
calculateAll @ 4011-Section12.js:2200
(anonymous) @ 4011-SectionIntegrator.js:656
 [S15] 🎯 TGT S03 CLIMATE READ: h_23=18, d_23=-24, d_24=30, h_24=24
 [StateManager] 🎯 h_10 setValue: "93.42863573628563" (state: calculated)
 [StateManager] h_10 setValue stack trace:
setValue @ 4011-StateManager.js:346
calculateValues @ 4011-Section15.js:1832
calculateTargetModel @ 4011-Section15.js:1662
calculateAll @ 4011-Section15.js:1328
(anonymous) @ 4011-Section15.js:2121
(anonymous) @ 4011-StateManager.js:543
notifyListeners @ 4011-StateManager.js:541
setValue @ 4011-StateManager.js:419
setFieldValue @ 4011-Section13.js:636
calculateCoolingVentilation @ 4011-Section13.js:3272
calculateCoolingSystem @ 4011-Section13.js:3040
calculateTargetModel @ 4011-Section13.js:3560
calculateAll @ 4011-Section13.js:3403
calculateAndRefresh @ 4011-Section13.js:2368
(anonymous) @ 4011-StateManager.js:543
notifyListeners @ 4011-StateManager.js:541
setValue @ 4011-StateManager.js:419
setCalculatedValue @ 4011-Section12.js:1170
calculateEnvelopeTotals @ 4011-Section12.js:2163
calculateTargetModel @ 4011-Section12.js:2362
calculateAll @ 4011-Section12.js:2200
(anonymous) @ 4011-SectionIntegrator.js:656
2 [S14 LISTENER] 🔥 d_122 changed - triggering calculateAll() + UI update
 [S15] 🎯 TGT S03 CLIMATE READ: h_23=18, d_23=-24, d_24=30, h_24=24
 [StateManager] 🎯 h_10 setValue: "93.42863573628563" (state: calculated)
 [StateManager] h_10 setValue stack trace:
setValue @ 4011-StateManager.js:346
calculateValues @ 4011-Section15.js:1832
calculateTargetModel @ 4011-Section15.js:1662
calculateAll @ 4011-Section15.js:1328
(anonymous) @ 4011-Section15.js:2121
(anonymous) @ 4011-StateManager.js:543
notifyListeners @ 4011-StateManager.js:541
setValue @ 4011-StateManager.js:419
setFieldValue @ 4011-Section13.js:636
updateTargetModelDOMValues @ 4011-Section13.js:3684
calculateTargetModel @ 4011-Section13.js:3570
calculateAll @ 4011-Section13.js:3403
calculateAndRefresh @ 4011-Section13.js:2368
(anonymous) @ 4011-StateManager.js:543
notifyListeners @ 4011-StateManager.js:541
setValue @ 4011-StateManager.js:419
setCalculatedValue @ 4011-Section12.js:1170
calculateEnvelopeTotals @ 4011-Section12.js:2163
calculateTargetModel @ 4011-Section12.js:2362
calculateAll @ 4011-Section12.js:2200
(anonymous) @ 4011-SectionIntegrator.js:656
 [S15] 🎯 TGT S03 CLIMATE READ: h_23=18, d_23=-24, d_24=30, h_24=24
 [StateManager] 🎯 h_10 setValue: "93.42863573628563" (state: calculated)
 [StateManager] h_10 setValue stack trace:
setValue @ 4011-StateManager.js:346
calculateValues @ 4011-Section15.js:1832
calculateTargetModel @ 4011-Section15.js:1662
calculateAll @ 4011-Section15.js:1328
(anonymous) @ 4011-Section15.js:2121
(anonymous) @ 4011-StateManager.js:543
notifyListeners @ 4011-StateManager.js:541
setValue @ 4011-StateManager.js:419
setFieldValue @ 4011-Section13.js:636
updateTargetModelDOMValues @ 4011-Section13.js:3684
calculateTargetModel @ 4011-Section13.js:3570
calculateAll @ 4011-Section13.js:3403
calculateAndRefresh @ 4011-Section13.js:2368
(anonymous) @ 4011-StateManager.js:543
notifyListeners @ 4011-StateManager.js:541
setValue @ 4011-StateManager.js:419
setCalculatedValue @ 4011-Section12.js:1170
calculateEnvelopeTotals @ 4011-Section12.js:2163
calculateTargetModel @ 4011-Section12.js:2362
calculateAll @ 4011-Section12.js:2200
(anonymous) @ 4011-SectionIntegrator.js:656
 [Section13] Target Model calculations complete
 [Section13] ✅ Target Model complete
 [Section13] ⏭️ Skipping Reference value re-write - triggered in target mode
 [Section13] 🎉 DUAL-ENGINE CALCULATIONS COMPLETE
 [Section13] 🔄 Updating calculated display values for target mode
 [Section13] Calculated display values updated for target mode
 [Section13] 🚀 CALCULATEALL TRIGGERED - Running dual-engine calculations...
 [Section13] 🎯 Mode captured at calculation start: target
 [Section13] 🔄 Starting Reference Model calculations...
 🔍 [S13-CONTEXT] Creating reference context: g_118="Volume Constant" from ReferenceState
 🔍 [S13-CONTEXT] ReferenceState.g_118="Volume Constant", TargetState.g_118="Volume by Schedule"
 [Section13] Running Reference Model calculations...
 [S13 CONTAMINATION DEBUG] calculateReferenceModel: Using system type = Electricity
 [S13] REF HEATING: system=Electricity, ted=251391.1974742337, afue=0.9, cop=1
 [S13 REF DEBUG] About to calculate with heating system: Electricity
 [S13 REF DEBUG] Will S13 publish ref_d_113=Electricity?
 🔍 [S13-VENT] calculateVentilationRates: ventMethod="Volume Constant", ach(l_118)=3.5, ratePerPerson(d_119)=8.33, volume(d_105)=8000
 🔍 [S13-VENT] isReferenceCalculation=true, hasContext=true
 🔍 [S13-VENT] calculateVentilationValues: ventMethod="Volume Constant", ach(l_118)=3.5, ratePerPerson(d_119)=8.33, volume(d_105)=8000
 🔍 [S13-VENT] Supporting values: occupants(d_63)=126, occupiedHours(i_63)=4380, totalHours(j_63)=8760
 🔍 [S13-VENT] Volume Constant calculation: ventRateLs = (3.5 * 8000) / 3.6 = 7777.777777777777
 ✅ [S13-VENT] Final d_120 result: 7777.777777777777 L/s (from method="Volume Constant", ach=3.5, volume=8000)
 [Section13] 🧊 COOLING CALC: mode=REF, coolingSystemType="No Cooling", heatingType="Electricity", isCoolingActive=false, coolingDemand=9572.242304946165
 [S13 CONTAMINATION DEBUG] storeReferenceResults called during reference mode
 [S13 CONTAMINATION DEBUG] Reference heating system: Electricity
 [S13 CONTAMINATION DEBUG] Target heating system: Heatpump
 [S13 CONTAMINATION DEBUG] Reference h_115 (gas volume): 0
 [S13 CONTAMINATION DEBUG] Reference f_115 (oil volume): 0
 [S13 CONTAMINATION DEBUG] Writing ref_f_115 = 0
 [S13 CONTAMINATION DEBUG] Writing ref_h_115 = 0
 [Section13] Reference results stored with ref_ prefix for downstream sections
 [S13 DEBUG] Total Reference results stored: 34
 [Section13] Reference Model calculations complete
 [Section13] ✅ Reference Model complete
 [Section13] 🔄 Starting Target Model calculations...
 🔍 [S13-CONTEXT] Creating target context: g_118="Volume by Schedule" from TargetState
 🔍 [S13-CONTEXT] TargetState.g_118="Volume by Schedule", ReferenceState.g_118="Volume Constant"
 [Section13] Running Target Model calculations...
 [S13] TGT HEATING: system=Heatpump, ted=119171.54500166589, afue=0.98, cop=3.663540445486518
 🔍 [S13-VENT] calculateVentilationRates: ventMethod="Volume by Schedule", ach(l_118)=3, ratePerPerson(d_119)=14, volume(d_105)=8000
 🔍 [S13-VENT] isReferenceCalculation=false, hasContext=true
 🔍 [S13-VENT] calculateVentilationValues: ventMethod="Volume by Schedule", ach(l_118)=3, ratePerPerson(d_119)=14, volume(d_105)=8000
 🔍 [S13-VENT] Supporting values: occupants(d_63)=126, occupiedHours(i_63)=4380, totalHours(j_63)=8760
 ✅ [S13-VENT] Final d_120 result: 3333.333333333333 L/s (from method="Volume by Schedule", ach=3, volume=8000)
 [Section13] 🧊 COOLING CALC: mode=TGT, coolingSystemType="Cooling", heatingType="Heatpump", isCoolingActive=true, coolingDemand=9572.242304946165
 [Section13] 🧊 COOLING RESULTS: d_117=3593.80399917213, j_116=2.663540445486518, l_116=0, l_114=5978.438305774035
2 [S14 LISTENER] 🔥 d_122 changed - triggering calculateAll() + UI update
 [S15] 🎯 TGT S03 CLIMATE READ: h_23=18, d_23=-24, d_24=30, h_24=24
 [StateManager] 🎯 h_10 setValue: "93.42863573628563" (state: calculated)
 [StateManager] h_10 setValue stack trace:
setValue @ 4011-StateManager.js:346
calculateValues @ 4011-Section15.js:1832
calculateTargetModel @ 4011-Section15.js:1662
calculateAll @ 4011-Section15.js:1328
(anonymous) @ 4011-Section15.js:2121
(anonymous) @ 4011-StateManager.js:543
notifyListeners @ 4011-StateManager.js:541
setValue @ 4011-StateManager.js:419
setFieldValue @ 4011-Section13.js:636
calculateCoolingVentilation @ 4011-Section13.js:3272
calculateCoolingSystem @ 4011-Section13.js:3040
calculateTargetModel @ 4011-Section13.js:3560
calculateAll @ 4011-Section13.js:3403
calculateAndRefresh @ 4011-Section13.js:2368
(anonymous) @ 4011-StateManager.js:543
notifyListeners @ 4011-StateManager.js:541
setValue @ 4011-StateManager.js:419
setCalculatedValue @ 4011-Section12.js:1170
calculateEnvelopeTotals @ 4011-Section12.js:2163
calculateTargetModel @ 4011-Section12.js:2362
calculateAll @ 4011-Section12.js:2200
(anonymous) @ 4011-SectionIntegrator.js:656
 [S15] 🎯 TGT S03 CLIMATE READ: h_23=18, d_23=-24, d_24=30, h_24=24
 [StateManager] 🎯 h_10 setValue: "93.42863573628563" (state: calculated)
 [StateManager] h_10 setValue stack trace:
setValue @ 4011-StateManager.js:346
calculateValues @ 4011-Section15.js:1832
calculateTargetModel @ 4011-Section15.js:1662
calculateAll @ 4011-Section15.js:1328
(anonymous) @ 4011-Section15.js:2121
(anonymous) @ 4011-StateManager.js:543
notifyListeners @ 4011-StateManager.js:541
setValue @ 4011-StateManager.js:419
setFieldValue @ 4011-Section13.js:636
calculateCoolingVentilation @ 4011-Section13.js:3272
calculateCoolingSystem @ 4011-Section13.js:3040
calculateTargetModel @ 4011-Section13.js:3560
calculateAll @ 4011-Section13.js:3403
calculateAndRefresh @ 4011-Section13.js:2368
(anonymous) @ 4011-StateManager.js:543
notifyListeners @ 4011-StateManager.js:541
setValue @ 4011-StateManager.js:419
setCalculatedValue @ 4011-Section12.js:1170
calculateEnvelopeTotals @ 4011-Section12.js:2163
calculateTargetModel @ 4011-Section12.js:2362
calculateAll @ 4011-Section12.js:2200
(anonymous) @ 4011-SectionIntegrator.js:656
2 [S14 LISTENER] 🔥 d_122 changed - triggering calculateAll() + UI update
 [S15] 🎯 TGT S03 CLIMATE READ: h_23=18, d_23=-24, d_24=30, h_24=24
 [StateManager] 🎯 h_10 setValue: "93.42863573628563" (state: calculated)
 [StateManager] h_10 setValue stack trace:
setValue @ 4011-StateManager.js:346
calculateValues @ 4011-Section15.js:1832
calculateTargetModel @ 4011-Section15.js:1662
calculateAll @ 4011-Section15.js:1328
(anonymous) @ 4011-Section15.js:2121
(anonymous) @ 4011-StateManager.js:543
notifyListeners @ 4011-StateManager.js:541
setValue @ 4011-StateManager.js:419
setFieldValue @ 4011-Section13.js:636
updateTargetModelDOMValues @ 4011-Section13.js:3684
calculateTargetModel @ 4011-Section13.js:3570
calculateAll @ 4011-Section13.js:3403
calculateAndRefresh @ 4011-Section13.js:2368
(anonymous) @ 4011-StateManager.js:543
notifyListeners @ 4011-StateManager.js:541
setValue @ 4011-StateManager.js:419
setCalculatedValue @ 4011-Section12.js:1170
calculateEnvelopeTotals @ 4011-Section12.js:2163
calculateTargetModel @ 4011-Section12.js:2362
calculateAll @ 4011-Section12.js:2200
(anonymous) @ 4011-SectionIntegrator.js:656
 [S15] 🎯 TGT S03 CLIMATE READ: h_23=18, d_23=-24, d_24=30, h_24=24
 [StateManager] 🎯 h_10 setValue: "93.42863573628563" (state: calculated)
 [StateManager] h_10 setValue stack trace:
setValue @ 4011-StateManager.js:346
calculateValues @ 4011-Section15.js:1832
calculateTargetModel @ 4011-Section15.js:1662
calculateAll @ 4011-Section15.js:1328
(anonymous) @ 4011-Section15.js:2121
(anonymous) @ 4011-StateManager.js:543
notifyListeners @ 4011-StateManager.js:541
setValue @ 4011-StateManager.js:419
setFieldValue @ 4011-Section13.js:636
updateTargetModelDOMValues @ 4011-Section13.js:3684
calculateTargetModel @ 4011-Section13.js:3570
calculateAll @ 4011-Section13.js:3403
calculateAndRefresh @ 4011-Section13.js:2368
(anonymous) @ 4011-StateManager.js:543
notifyListeners @ 4011-StateManager.js:541
setValue @ 4011-StateManager.js:419
setCalculatedValue @ 4011-Section12.js:1170
calculateEnvelopeTotals @ 4011-Section12.js:2163
calculateTargetModel @ 4011-Section12.js:2362
calculateAll @ 4011-Section12.js:2200
(anonymous) @ 4011-SectionIntegrator.js:656
 [Section13] Target Model calculations complete
 [Section13] ✅ Target Model complete
 [Section13] ⏭️ Skipping Reference value re-write - triggered in target mode
 [Section13] 🎉 DUAL-ENGINE CALCULATIONS COMPLETE
 [Section13] 🔄 Updating calculated display values for target mode
 [Section13] Calculated display values updated for target mode
 [S12DB] g_104 DISPLAY (target): 0.2924870886396271
 [Section12] Calculated display values updated for target mode
 [S15] 🎯 TGT S03 CLIMATE READ: h_23=18, d_23=-24, d_24=30, h_24=24
 [StateManager] 🎯 h_10 setValue: "93.42863573628563" (state: calculated)
 [StateManager] h_10 setValue stack trace:
setValue @ 4011-StateManager.js:346
calculateValues @ 4011-Section15.js:1832
calculateTargetModel @ 4011-Section15.js:1662
calculateAll @ 4011-Section15.js:1328
forceTEDITELIUpdate @ 4011-SectionIntegrator.js:305
window.TEUI.updateTEDITELIValues @ 4011-SectionIntegrator.js:237
(anonymous) @ 4011-SectionIntegrator.js:666
 [CLOCK] Starting initial load timing
 [S03] 🎯 TGT MODE: Using occupancy "A-Assembly" from d_12
 [S03] Getting climate data for: Alexandria, ON (Present) - Critical: false (target mode)
 [S03] TARGET TEMP SELECTION: January_2_5 = -24 (Critical: false)
 [S03] Climate values for Alexandria (target): Object
 [S03] Critical flag update: mode=target, occupancy="A-Assembly", critical=false
 [S03] 🔵 REF MODE: Using occupancy "A-Assembly" from ref_d_12
 [S03] Getting climate data for: Alexandria, ON (Present) - Critical: false (reference mode)
 [S03] REFERENCE TEMP SELECTION: January_2_5 = -24 (Critical: false)
 [S03] Climate values for Alexandria (reference): Object
 [S15] 🎯 TGT S03 CLIMATE READ: h_23=18, d_23=-24, d_24=30, h_24=24
 [StateManager] 🎯 h_10 setValue: "93.42863573628563" (state: calculated)
 [StateManager] h_10 setValue stack trace:
setValue @ 4011-StateManager.js:346
calculateValues @ 4011-Section15.js:1832
calculateTargetModel @ 4011-Section15.js:1662
calculateAll @ 4011-Section15.js:1328
(anonymous) @ 4011-Section15.js:2121
(anonymous) @ 4011-StateManager.js:543
notifyListeners @ 4011-StateManager.js:541
setValue @ 4011-StateManager.js:419
setValue @ 4011-Section03.js:217
setFieldValue @ 4011-Section03.js:453
calculateHeatingSetpoint @ 4011-Section03.js:1836
calculateReferenceModel @ 4011-Section03.js:1751
calculateAll @ 4011-Section03.js:1692
(anonymous) @ 4011-Calculator.js:513
calculateAll @ 4011-Calculator.js:509
(anonymous) @ index.html:1077
 [S15] 🎯 TGT S03 CLIMATE READ: h_23=18, d_23=-24, d_24=30, h_24=24
 [StateManager] 🎯 h_10 setValue: "93.42863573628563" (state: calculated)
 [StateManager] h_10 setValue stack trace:
setValue @ 4011-StateManager.js:346
calculateValues @ 4011-Section15.js:1832
calculateTargetModel @ 4011-Section15.js:1662
calculateAll @ 4011-Section15.js:1328
(anonymous) @ 4011-Section15.js:2121
(anonymous) @ 4011-StateManager.js:543
notifyListeners @ 4011-StateManager.js:541
setValue @ 4011-StateManager.js:419
setValue @ 4011-Section03.js:217
setFieldValue @ 4011-Section03.js:453
calculateHeatingSetpoint @ 4011-Section03.js:1836
calculateReferenceModel @ 4011-Section03.js:1751
calculateAll @ 4011-Section03.js:1692
(anonymous) @ 4011-Calculator.js:513
calculateAll @ 4011-Calculator.js:509
(anonymous) @ index.html:1077
 [S15] 🎯 TGT S03 CLIMATE READ: h_23=18, d_23=-24, d_24=30, h_24=24
 [StateManager] 🎯 h_10 setValue: "93.42863573628563" (state: calculated)
 [StateManager] h_10 setValue stack trace:
setValue @ 4011-StateManager.js:346
calculateValues @ 4011-Section15.js:1832
calculateTargetModel @ 4011-Section15.js:1662
calculateAll @ 4011-Section15.js:1328
(anonymous) @ 4011-Section15.js:2121
(anonymous) @ 4011-StateManager.js:543
notifyListeners @ 4011-StateManager.js:541
setValue @ 4011-StateManager.js:419
setValue @ 4011-Section03.js:217
setFieldValue @ 4011-Section03.js:453
calculateHeatingSetpoint @ 4011-Section03.js:1836
calculateReferenceModel @ 4011-Section03.js:1751
calculateAll @ 4011-Section03.js:1692
(anonymous) @ 4011-Calculator.js:513
calculateAll @ 4011-Calculator.js:509
(anonymous) @ index.html:1077
 [S15] 🎯 TGT S03 CLIMATE READ: h_23=18, d_23=-24, d_24=30, h_24=24
 [StateManager] 🎯 h_10 setValue: "93.42863573628563" (state: calculated)
 [StateManager] h_10 setValue stack trace:
setValue @ 4011-StateManager.js:346
calculateValues @ 4011-Section15.js:1832
calculateTargetModel @ 4011-Section15.js:1662
calculateAll @ 4011-Section15.js:1328
(anonymous) @ 4011-Section15.js:2121
(anonymous) @ 4011-StateManager.js:543
notifyListeners @ 4011-StateManager.js:541
setValue @ 4011-StateManager.js:419
setValue @ 4011-Section03.js:217
setFieldValue @ 4011-Section03.js:453
calculateHeatingSetpoint @ 4011-Section03.js:1836
calculateReferenceModel @ 4011-Section03.js:1751
calculateAll @ 4011-Section03.js:1692
(anonymous) @ 4011-Calculator.js:513
calculateAll @ 4011-Calculator.js:509
(anonymous) @ index.html:1077
 [S15] 🎯 TGT S03 CLIMATE READ: h_23=18, d_23=-24, d_24=30, h_24=24
 [StateManager] 🎯 h_10 setValue: "93.42863573628563" (state: calculated)
 [StateManager] h_10 setValue stack trace:
setValue @ 4011-StateManager.js:346
calculateValues @ 4011-Section15.js:1832
calculateTargetModel @ 4011-Section15.js:1662
calculateAll @ 4011-Section15.js:1328
(anonymous) @ 4011-Section15.js:2121
(anonymous) @ 4011-StateManager.js:543
notifyListeners @ 4011-StateManager.js:541
setValue @ 4011-StateManager.js:419
setValue @ 4011-Section03.js:217
setFieldValue @ 4011-Section03.js:453
calculateCoolingSetpoint_h24 @ 4011-Section03.js:1848
calculateReferenceModel @ 4011-Section03.js:1752
calculateAll @ 4011-Section03.js:1692
(anonymous) @ 4011-Calculator.js:513
calculateAll @ 4011-Calculator.js:509
(anonymous) @ index.html:1077
 [S15] 🎯 TGT S03 CLIMATE READ: h_23=18, d_23=-24, d_24=30, h_24=24
 [StateManager] 🎯 h_10 setValue: "93.42863573628563" (state: calculated)
 [StateManager] h_10 setValue stack trace:
setValue @ 4011-StateManager.js:346
calculateValues @ 4011-Section15.js:1832
calculateTargetModel @ 4011-Section15.js:1662
calculateAll @ 4011-Section15.js:1328
(anonymous) @ 4011-Section15.js:2121
(anonymous) @ 4011-StateManager.js:543
notifyListeners @ 4011-StateManager.js:541
setValue @ 4011-StateManager.js:419
setValue @ 4011-Section03.js:217
setFieldValue @ 4011-Section03.js:453
calculateCoolingSetpoint_h24 @ 4011-Section03.js:1848
calculateReferenceModel @ 4011-Section03.js:1752
calculateAll @ 4011-Section03.js:1692
(anonymous) @ 4011-Calculator.js:513
calculateAll @ 4011-Calculator.js:509
(anonymous) @ index.html:1077
 [S15] 🎯 TGT S03 CLIMATE READ: h_23=18, d_23=-24, d_24=30, h_24=24
 [StateManager] 🎯 h_10 setValue: "93.42863573628563" (state: calculated)
 [StateManager] h_10 setValue stack trace:
setValue @ 4011-StateManager.js:346
calculateValues @ 4011-Section15.js:1832
calculateTargetModel @ 4011-Section15.js:1662
calculateAll @ 4011-Section15.js:1328
(anonymous) @ 4011-Section15.js:2121
(anonymous) @ 4011-StateManager.js:543
notifyListeners @ 4011-StateManager.js:541
setValue @ 4011-StateManager.js:419
setValue @ 4011-Section03.js:217
setFieldValue @ 4011-Section03.js:453
calculateCoolingSetpoint_h24 @ 4011-Section03.js:1848
calculateReferenceModel @ 4011-Section03.js:1752
calculateAll @ 4011-Section03.js:1692
(anonymous) @ 4011-Calculator.js:513
calculateAll @ 4011-Calculator.js:509
(anonymous) @ index.html:1077
 [S15] 🎯 TGT S03 CLIMATE READ: h_23=18, d_23=-24, d_24=30, h_24=24
 [StateManager] 🎯 h_10 setValue: "93.42863573628563" (state: calculated)
 [StateManager] h_10 setValue stack trace:
setValue @ 4011-StateManager.js:346
calculateValues @ 4011-Section15.js:1832
calculateTargetModel @ 4011-Section15.js:1662
calculateAll @ 4011-Section15.js:1328
(anonymous) @ 4011-Section15.js:2121
(anonymous) @ 4011-StateManager.js:543
notifyListeners @ 4011-StateManager.js:541
setValue @ 4011-StateManager.js:419
setValue @ 4011-Section03.js:217
setFieldValue @ 4011-Section03.js:453
calculateCoolingSetpoint_h24 @ 4011-Section03.js:1848
calculateReferenceModel @ 4011-Section03.js:1752
calculateAll @ 4011-Section03.js:1692
(anonymous) @ 4011-Calculator.js:513
calculateAll @ 4011-Calculator.js:509
(anonymous) @ index.html:1077
 [S11] calculateAll TRIGGERED. isReferenceMode: false
 [S11] 🔵 REF CLIMATE READ: d_20=4600
 [S11] 🔵 REF CLIMATE READ: d_21=196
 [S11] 🔵 REF CLIMATE READ: d_20=4600
 [S11] 🔵 REF CLIMATE READ: d_21=196
 [S11] 🔵 REF CLIMATE READ: d_20=4600
 [S11] 🔵 REF CLIMATE READ: d_21=196
 [S11] 🔵 REF CLIMATE READ: d_20=4600
 [S11] 🔵 REF CLIMATE READ: d_21=196
 [S11] 🔵 REF CLIMATE READ: d_20=4600
 [S11] 🔵 REF CLIMATE READ: d_21=196
 [S11] 🔵 REF CLIMATE READ: d_20=4600
 [S11] 🔵 REF CLIMATE READ: d_21=196
 [S11] 🔵 REF CLIMATE READ: d_20=4600
 [S11] 🔵 REF CLIMATE READ: d_21=196
 [S11] 🔵 REF CLIMATE READ: d_20=4600
 [S11] 🔵 REF CLIMATE READ: d_21=196
 [S11] 🔵 REF CLIMATE READ: d_20=4600
 [S11] 🔵 REF CLIMATE READ: d_21=196
 [S11] 🔵 REF CLIMATE READ: d_22=1960
 [S11] 🔵 REF CLIMATE READ: h_22=-1680
 [S11] 🔵 REF CLIMATE READ: d_22=1960
 [S11] 🔵 REF CLIMATE READ: h_22=-1680
 [S11] REF TB%=50% → ref_i_97=59532.29, ref_k_97=-947.70
 [S11] Writing ref penalty: ref_i_97=59532.29, ref_k_97=-947.70
 [S11] 🎯 TGT CLIMATE READ: d_20=4600
 [S11] 🎯 TGT CLIMATE READ: d_21=196
 [S11] 🎯 TGT CLIMATE READ: d_20=4600
 [S11] 🎯 TGT CLIMATE READ: d_21=196
 [S11] 🎯 TGT CLIMATE READ: d_20=4600
 [S11] 🎯 TGT CLIMATE READ: d_21=196
 [S11] 🎯 TGT CLIMATE READ: d_20=4600
 [S11] 🎯 TGT CLIMATE READ: d_21=196
 [S11] 🎯 TGT CLIMATE READ: d_20=4600
 [S11] 🎯 TGT CLIMATE READ: d_21=196
 [S11] 🎯 TGT CLIMATE READ: d_20=4600
 [S11] 🎯 TGT CLIMATE READ: d_21=196
 [S11] 🎯 TGT CLIMATE READ: d_20=4600
 [S11] 🎯 TGT CLIMATE READ: d_21=196
 [S11] 🎯 TGT CLIMATE READ: d_20=4600
 [S11] 🎯 TGT CLIMATE READ: d_21=196
 [S11] 🎯 TGT CLIMATE READ: d_20=4600
 [S11] 🎯 TGT CLIMATE READ: d_21=196
2 [S11] 🎯 TGT CLIMATE READ: h_22=-1680
 [S11] calculateAll TRIGGERED. isReferenceMode: false
 [S11] 🔵 REF CLIMATE READ: d_20=4600
 [S11] 🔵 REF CLIMATE READ: d_21=196
 [S11] 🔵 REF CLIMATE READ: d_20=4600
 [S11] 🔵 REF CLIMATE READ: d_21=196
 [S11] 🔵 REF CLIMATE READ: d_20=4600
 [S11] 🔵 REF CLIMATE READ: d_21=196
 [S11] 🔵 REF CLIMATE READ: d_20=4600
 [S11] 🔵 REF CLIMATE READ: d_21=196
 [S11] 🔵 REF CLIMATE READ: d_20=4600
 [S11] 🔵 REF CLIMATE READ: d_21=196
 [S11] 🔵 REF CLIMATE READ: d_20=4600
 [S11] 🔵 REF CLIMATE READ: d_21=196
 [S11] 🔵 REF CLIMATE READ: d_20=4600
 [S11] 🔵 REF CLIMATE READ: d_21=196
 [S11] 🔵 REF CLIMATE READ: d_20=4600
 [S11] 🔵 REF CLIMATE READ: d_21=196
 [S11] 🔵 REF CLIMATE READ: d_20=4600
 [S11] 🔵 REF CLIMATE READ: d_21=196
 [S11] 🔵 REF CLIMATE READ: d_22=1960
 [S11] 🔵 REF CLIMATE READ: h_22=-1680
 [S11] 🔵 REF CLIMATE READ: d_22=1960
 [S11] 🔵 REF CLIMATE READ: h_22=-1680
 [S11] REF TB%=50% → ref_i_97=59532.29, ref_k_97=-947.70
 [S11] Writing ref penalty: ref_i_97=59532.29, ref_k_97=-947.70
 [S11] 🎯 TGT CLIMATE READ: d_20=4600
 [S11] 🎯 TGT CLIMATE READ: d_21=196
 [S11] 🎯 TGT CLIMATE READ: d_20=4600
 [S11] 🎯 TGT CLIMATE READ: d_21=196
 [S11] 🎯 TGT CLIMATE READ: d_20=4600
 [S11] 🎯 TGT CLIMATE READ: d_21=196
 [S11] 🎯 TGT CLIMATE READ: d_20=4600
 [S11] 🎯 TGT CLIMATE READ: d_21=196
 [S11] 🎯 TGT CLIMATE READ: d_20=4600
 [S11] 🎯 TGT CLIMATE READ: d_21=196
 [S11] 🎯 TGT CLIMATE READ: d_20=4600
 [S11] 🎯 TGT CLIMATE READ: d_21=196
 [S11] 🎯 TGT CLIMATE READ: d_20=4600
 [S11] 🎯 TGT CLIMATE READ: d_21=196
 [S11] 🎯 TGT CLIMATE READ: d_20=4600
 [S11] 🎯 TGT CLIMATE READ: d_21=196
 [S11] 🎯 TGT CLIMATE READ: d_20=4600
 [S11] 🎯 TGT CLIMATE READ: d_21=196
2 [S11] 🎯 TGT CLIMATE READ: h_22=-1680
 [S13DEBUG] Reference GF HDD changed: ref_d_22=1960 → triggering Reference calculations
 [Section13] 🚀 CALCULATEALL TRIGGERED - Running dual-engine calculations...
 [Section13] 🎯 Mode captured at calculation start: target
 [Section13] 🔄 Starting Reference Model calculations...
 🔍 [S13-CONTEXT] Creating reference context: g_118="Volume Constant" from ReferenceState
 🔍 [S13-CONTEXT] ReferenceState.g_118="Volume Constant", TargetState.g_118="Volume by Schedule"
 [Section13] Running Reference Model calculations...
 [S13 CONTAMINATION DEBUG] calculateReferenceModel: Using system type = Electricity
 [S13] REF HEATING: system=Electricity, ted=251391.1974742337, afue=0.9, cop=1
 [S13 REF DEBUG] About to calculate with heating system: Electricity
 [S13 REF DEBUG] Will S13 publish ref_d_113=Electricity?
 🔍 [S13-VENT] calculateVentilationRates: ventMethod="Volume Constant", ach(l_118)=3.5, ratePerPerson(d_119)=8.33, volume(d_105)=8000
 🔍 [S13-VENT] isReferenceCalculation=true, hasContext=true
 🔍 [S13-VENT] calculateVentilationValues: ventMethod="Volume Constant", ach(l_118)=3.5, ratePerPerson(d_119)=8.33, volume(d_105)=8000
 🔍 [S13-VENT] Supporting values: occupants(d_63)=126, occupiedHours(i_63)=4380, totalHours(j_63)=8760
 🔍 [S13-VENT] Volume Constant calculation: ventRateLs = (3.5 * 8000) / 3.6 = 7777.777777777777
 ✅ [S13-VENT] Final d_120 result: 7777.777777777777 L/s (from method="Volume Constant", ach=3.5, volume=8000)
 [Section13] 🧊 COOLING CALC: mode=REF, coolingSystemType="No Cooling", heatingType="Electricity", isCoolingActive=false, coolingDemand=9572.242304946165
 [S13 CONTAMINATION DEBUG] storeReferenceResults called during reference mode
 [S13 CONTAMINATION DEBUG] Reference heating system: Electricity
 [S13 CONTAMINATION DEBUG] Target heating system: Heatpump
 [S13 CONTAMINATION DEBUG] Reference h_115 (gas volume): 0
 [S13 CONTAMINATION DEBUG] Reference f_115 (oil volume): 0
 [S13 CONTAMINATION DEBUG] Writing ref_f_115 = 0
 [S13 CONTAMINATION DEBUG] Writing ref_h_115 = 0
 [Section13] Reference results stored with ref_ prefix for downstream sections
 [S13 DEBUG] Total Reference results stored: 34
 [Section13] Reference Model calculations complete
 [Section13] ✅ Reference Model complete
 [Section13] 🔄 Starting Target Model calculations...
 🔍 [S13-CONTEXT] Creating target context: g_118="Volume by Schedule" from TargetState
 🔍 [S13-CONTEXT] TargetState.g_118="Volume by Schedule", ReferenceState.g_118="Volume Constant"
 [Section13] Running Target Model calculations...
 [S13] TGT HEATING: system=Heatpump, ted=119171.54500166589, afue=0.98, cop=3.663540445486518
 🔍 [S13-VENT] calculateVentilationRates: ventMethod="Volume by Schedule", ach(l_118)=3, ratePerPerson(d_119)=14, volume(d_105)=8000
 🔍 [S13-VENT] isReferenceCalculation=false, hasContext=true
 🔍 [S13-VENT] calculateVentilationValues: ventMethod="Volume by Schedule", ach(l_118)=3, ratePerPerson(d_119)=14, volume(d_105)=8000
 🔍 [S13-VENT] Supporting values: occupants(d_63)=126, occupiedHours(i_63)=4380, totalHours(j_63)=8760
 ✅ [S13-VENT] Final d_120 result: 3333.333333333333 L/s (from method="Volume by Schedule", ach=3, volume=8000)
 [Section13] 🧊 COOLING CALC: mode=TGT, coolingSystemType="Cooling", heatingType="Heatpump", isCoolingActive=true, coolingDemand=9572.242304946165
 [Section13] 🧊 COOLING RESULTS: d_117=3593.80399917213, j_116=2.663540445486518, l_116=0, l_114=5978.438305774035
2 [S14 LISTENER] 🔥 d_122 changed - triggering calculateAll() + UI update
 [S15] 🎯 TGT S03 CLIMATE READ: h_23=18, d_23=-24, d_24=30, h_24=24
 [StateManager] 🎯 h_10 setValue: "93.42863573628563" (state: calculated)
 [StateManager] h_10 setValue stack trace:
setValue @ 4011-StateManager.js:346
calculateValues @ 4011-Section15.js:1832
calculateTargetModel @ 4011-Section15.js:1662
calculateAll @ 4011-Section15.js:1328
(anonymous) @ 4011-Section15.js:2121
(anonymous) @ 4011-StateManager.js:543
notifyListeners @ 4011-StateManager.js:541
setValue @ 4011-StateManager.js:419
setFieldValue @ 4011-Section13.js:636
calculateCoolingVentilation @ 4011-Section13.js:3272
calculateCoolingSystem @ 4011-Section13.js:3040
calculateTargetModel @ 4011-Section13.js:3560
calculateAll @ 4011-Section13.js:3403
(anonymous) @ 4011-Section13.js:2813
(anonymous) @ 4011-StateManager.js:543
notifyListeners @ 4011-StateManager.js:541
setValue @ 4011-StateManager.js:419
setValue @ 4011-Section03.js:217
setFieldValue @ 4011-Section03.js:453
calculateGroundFacing @ 4011-Section03.js:1663
calculateReferenceModel @ 4011-Section03.js:1754
calculateAll @ 4011-Section03.js:1692
(anonymous) @ 4011-Calculator.js:513
calculateAll @ 4011-Calculator.js:509
(anonymous) @ index.html:1077
 [S15] 🎯 TGT S03 CLIMATE READ: h_23=18, d_23=-24, d_24=30, h_24=24
 [StateManager] 🎯 h_10 setValue: "93.42863573628563" (state: calculated)
 [StateManager] h_10 setValue stack trace:
setValue @ 4011-StateManager.js:346
calculateValues @ 4011-Section15.js:1832
calculateTargetModel @ 4011-Section15.js:1662
calculateAll @ 4011-Section15.js:1328
(anonymous) @ 4011-Section15.js:2121
(anonymous) @ 4011-StateManager.js:543
notifyListeners @ 4011-StateManager.js:541
setValue @ 4011-StateManager.js:419
setFieldValue @ 4011-Section13.js:636
calculateCoolingVentilation @ 4011-Section13.js:3272
calculateCoolingSystem @ 4011-Section13.js:3040
calculateTargetModel @ 4011-Section13.js:3560
calculateAll @ 4011-Section13.js:3403
(anonymous) @ 4011-Section13.js:2813
(anonymous) @ 4011-StateManager.js:543
notifyListeners @ 4011-StateManager.js:541
setValue @ 4011-StateManager.js:419
setValue @ 4011-Section03.js:217
setFieldValue @ 4011-Section03.js:453
calculateGroundFacing @ 4011-Section03.js:1663
calculateReferenceModel @ 4011-Section03.js:1754
calculateAll @ 4011-Section03.js:1692
(anonymous) @ 4011-Calculator.js:513
calculateAll @ 4011-Calculator.js:509
(anonymous) @ index.html:1077
2 [S14 LISTENER] 🔥 d_122 changed - triggering calculateAll() + UI update
 [S15] 🎯 TGT S03 CLIMATE READ: h_23=18, d_23=-24, d_24=30, h_24=24
 [StateManager] 🎯 h_10 setValue: "93.42863573628563" (state: calculated)
 [StateManager] h_10 setValue stack trace:
setValue @ 4011-StateManager.js:346
calculateValues @ 4011-Section15.js:1832
calculateTargetModel @ 4011-Section15.js:1662
calculateAll @ 4011-Section15.js:1328
(anonymous) @ 4011-Section15.js:2121
(anonymous) @ 4011-StateManager.js:543
notifyListeners @ 4011-StateManager.js:541
setValue @ 4011-StateManager.js:419
setFieldValue @ 4011-Section13.js:636
updateTargetModelDOMValues @ 4011-Section13.js:3684
calculateTargetModel @ 4011-Section13.js:3570
calculateAll @ 4011-Section13.js:3403
(anonymous) @ 4011-Section13.js:2813
(anonymous) @ 4011-StateManager.js:543
notifyListeners @ 4011-StateManager.js:541
setValue @ 4011-StateManager.js:419
setValue @ 4011-Section03.js:217
setFieldValue @ 4011-Section03.js:453
calculateGroundFacing @ 4011-Section03.js:1663
calculateReferenceModel @ 4011-Section03.js:1754
calculateAll @ 4011-Section03.js:1692
(anonymous) @ 4011-Calculator.js:513
calculateAll @ 4011-Calculator.js:509
(anonymous) @ index.html:1077
 [S15] 🎯 TGT S03 CLIMATE READ: h_23=18, d_23=-24, d_24=30, h_24=24
 [StateManager] 🎯 h_10 setValue: "93.42863573628563" (state: calculated)
 [StateManager] h_10 setValue stack trace:
setValue @ 4011-StateManager.js:346
calculateValues @ 4011-Section15.js:1832
calculateTargetModel @ 4011-Section15.js:1662
calculateAll @ 4011-Section15.js:1328
(anonymous) @ 4011-Section15.js:2121
(anonymous) @ 4011-StateManager.js:543
notifyListeners @ 4011-StateManager.js:541
setValue @ 4011-StateManager.js:419
setFieldValue @ 4011-Section13.js:636
updateTargetModelDOMValues @ 4011-Section13.js:3684
calculateTargetModel @ 4011-Section13.js:3570
calculateAll @ 4011-Section13.js:3403
(anonymous) @ 4011-Section13.js:2813
(anonymous) @ 4011-StateManager.js:543
notifyListeners @ 4011-StateManager.js:541
setValue @ 4011-StateManager.js:419
setValue @ 4011-Section03.js:217
setFieldValue @ 4011-Section03.js:453
calculateGroundFacing @ 4011-Section03.js:1663
calculateReferenceModel @ 4011-Section03.js:1754
calculateAll @ 4011-Section03.js:1692
(anonymous) @ 4011-Calculator.js:513
calculateAll @ 4011-Calculator.js:509
(anonymous) @ index.html:1077
 [Section13] Target Model calculations complete
 [Section13] ✅ Target Model complete
 [Section13] ⏭️ Skipping Reference value re-write - triggered in target mode
 [Section13] 🎉 DUAL-ENGINE CALCULATIONS COMPLETE
 [S11] calculateAll TRIGGERED. isReferenceMode: false
 [S11] 🔵 REF CLIMATE READ: d_20=4600
 [S11] 🔵 REF CLIMATE READ: d_21=196
 [S11] 🔵 REF CLIMATE READ: d_20=4600
 [S11] 🔵 REF CLIMATE READ: d_21=196
 [S11] 🔵 REF CLIMATE READ: d_20=4600
 [S11] 🔵 REF CLIMATE READ: d_21=196
 [S11] 🔵 REF CLIMATE READ: d_20=4600
 [S11] 🔵 REF CLIMATE READ: d_21=196
 [S11] 🔵 REF CLIMATE READ: d_20=4600
 [S11] 🔵 REF CLIMATE READ: d_21=196
 [S11] 🔵 REF CLIMATE READ: d_20=4600
 [S11] 🔵 REF CLIMATE READ: d_21=196
 [S11] 🔵 REF CLIMATE READ: d_20=4600
 [S11] 🔵 REF CLIMATE READ: d_21=196
 [S11] 🔵 REF CLIMATE READ: d_20=4600
 [S11] 🔵 REF CLIMATE READ: d_21=196
 [S11] 🔵 REF CLIMATE READ: d_20=4600
 [S11] 🔵 REF CLIMATE READ: d_21=196
 [S11] 🔵 REF CLIMATE READ: d_22=1960
 [S11] 🔵 REF CLIMATE READ: h_22=-1680
 [S11] 🔵 REF CLIMATE READ: d_22=1960
 [S11] 🔵 REF CLIMATE READ: h_22=-1680
 [S11] REF TB%=50% → ref_i_97=59532.29, ref_k_97=-947.70
 [S11] Writing ref penalty: ref_i_97=59532.29, ref_k_97=-947.70
 [S11] 🎯 TGT CLIMATE READ: d_20=4600
 [S11] 🎯 TGT CLIMATE READ: d_21=196
 [S11] 🎯 TGT CLIMATE READ: d_20=4600
 [S11] 🎯 TGT CLIMATE READ: d_21=196
 [S11] 🎯 TGT CLIMATE READ: d_20=4600
 [S11] 🎯 TGT CLIMATE READ: d_21=196
 [S11] 🎯 TGT CLIMATE READ: d_20=4600
 [S11] 🎯 TGT CLIMATE READ: d_21=196
 [S11] 🎯 TGT CLIMATE READ: d_20=4600
 [S11] 🎯 TGT CLIMATE READ: d_21=196
 [S11] 🎯 TGT CLIMATE READ: d_20=4600
 [S11] 🎯 TGT CLIMATE READ: d_21=196
 [S11] 🎯 TGT CLIMATE READ: d_20=4600
 [S11] 🎯 TGT CLIMATE READ: d_21=196
 [S11] 🎯 TGT CLIMATE READ: d_20=4600
 [S11] 🎯 TGT CLIMATE READ: d_21=196
 [S11] 🎯 TGT CLIMATE READ: d_20=4600
 [S11] 🎯 TGT CLIMATE READ: d_21=196
2 [S11] 🎯 TGT CLIMATE READ: h_22=-1680
 [S11] calculateAll TRIGGERED. isReferenceMode: false
 [S11] 🔵 REF CLIMATE READ: d_20=4600
 [S11] 🔵 REF CLIMATE READ: d_21=196
 [S11] 🔵 REF CLIMATE READ: d_20=4600
 [S11] 🔵 REF CLIMATE READ: d_21=196
 [S11] 🔵 REF CLIMATE READ: d_20=4600
 [S11] 🔵 REF CLIMATE READ: d_21=196
 [S11] 🔵 REF CLIMATE READ: d_20=4600
 [S11] 🔵 REF CLIMATE READ: d_21=196
 [S11] 🔵 REF CLIMATE READ: d_20=4600
 [S11] 🔵 REF CLIMATE READ: d_21=196
 [S11] 🔵 REF CLIMATE READ: d_20=4600
 [S11] 🔵 REF CLIMATE READ: d_21=196
 [S11] 🔵 REF CLIMATE READ: d_20=4600
 [S11] 🔵 REF CLIMATE READ: d_21=196
 [S11] 🔵 REF CLIMATE READ: d_20=4600
 [S11] 🔵 REF CLIMATE READ: d_21=196
 [S11] 🔵 REF CLIMATE READ: d_20=4600
 [S11] 🔵 REF CLIMATE READ: d_21=196
 [S11] 🔵 REF CLIMATE READ: d_22=1960
 [S11] 🔵 REF CLIMATE READ: h_22=-1680
 [S11] 🔵 REF CLIMATE READ: d_22=1960
 [S11] 🔵 REF CLIMATE READ: h_22=-1680
 [S11] REF TB%=50% → ref_i_97=59532.29, ref_k_97=-947.70
 [S11] Writing ref penalty: ref_i_97=59532.29, ref_k_97=-947.70
 [S11] 🎯 TGT CLIMATE READ: d_20=4600
 [S11] 🎯 TGT CLIMATE READ: d_21=196
 [S11] 🎯 TGT CLIMATE READ: d_20=4600
 [S11] 🎯 TGT CLIMATE READ: d_21=196
 [S11] 🎯 TGT CLIMATE READ: d_20=4600
 [S11] 🎯 TGT CLIMATE READ: d_21=196
 [S11] 🎯 TGT CLIMATE READ: d_20=4600
 [S11] 🎯 TGT CLIMATE READ: d_21=196
 [S11] 🎯 TGT CLIMATE READ: d_20=4600
 [S11] 🎯 TGT CLIMATE READ: d_21=196
 [S11] 🎯 TGT CLIMATE READ: d_20=4600
 [S11] 🎯 TGT CLIMATE READ: d_21=196
 [S11] 🎯 TGT CLIMATE READ: d_20=4600
 [S11] 🎯 TGT CLIMATE READ: d_21=196
 [S11] 🎯 TGT CLIMATE READ: d_20=4600
 [S11] 🎯 TGT CLIMATE READ: d_21=196
 [S11] 🎯 TGT CLIMATE READ: d_20=4600
 [S11] 🎯 TGT CLIMATE READ: d_21=196
2 [S11] 🎯 TGT CLIMATE READ: h_22=-1680
 [S13DEBUG] Reference GF CDD changed: ref_h_22=-1680 → triggering Reference calculations
 [Section13] 🚀 CALCULATEALL TRIGGERED - Running dual-engine calculations...
 [Section13] 🎯 Mode captured at calculation start: target
 [Section13] 🔄 Starting Reference Model calculations...
 🔍 [S13-CONTEXT] Creating reference context: g_118="Volume Constant" from ReferenceState
 🔍 [S13-CONTEXT] ReferenceState.g_118="Volume Constant", TargetState.g_118="Volume by Schedule"
 [Section13] Running Reference Model calculations...
 [S13 CONTAMINATION DEBUG] calculateReferenceModel: Using system type = Electricity
 [S13] REF HEATING: system=Electricity, ted=251391.1974742337, afue=0.9, cop=1
 [S13 REF DEBUG] About to calculate with heating system: Electricity
 [S13 REF DEBUG] Will S13 publish ref_d_113=Electricity?
 🔍 [S13-VENT] calculateVentilationRates: ventMethod="Volume Constant", ach(l_118)=3.5, ratePerPerson(d_119)=8.33, volume(d_105)=8000
 🔍 [S13-VENT] isReferenceCalculation=true, hasContext=true
 🔍 [S13-VENT] calculateVentilationValues: ventMethod="Volume Constant", ach(l_118)=3.5, ratePerPerson(d_119)=8.33, volume(d_105)=8000
 🔍 [S13-VENT] Supporting values: occupants(d_63)=126, occupiedHours(i_63)=4380, totalHours(j_63)=8760
 🔍 [S13-VENT] Volume Constant calculation: ventRateLs = (3.5 * 8000) / 3.6 = 7777.777777777777
 ✅ [S13-VENT] Final d_120 result: 7777.777777777777 L/s (from method="Volume Constant", ach=3.5, volume=8000)
 [Section13] 🧊 COOLING CALC: mode=REF, coolingSystemType="No Cooling", heatingType="Electricity", isCoolingActive=false, coolingDemand=10192.893604542265
 [S13 CONTAMINATION DEBUG] storeReferenceResults called during reference mode
 [S13 CONTAMINATION DEBUG] Reference heating system: Electricity
 [S13 CONTAMINATION DEBUG] Target heating system: Heatpump
 [S13 CONTAMINATION DEBUG] Reference h_115 (gas volume): 0
 [S13 CONTAMINATION DEBUG] Reference f_115 (oil volume): 0
 [S13 CONTAMINATION DEBUG] Writing ref_f_115 = 0
 [S13 CONTAMINATION DEBUG] Writing ref_h_115 = 0
 [Section13] Reference results stored with ref_ prefix for downstream sections
 [S13 DEBUG] Total Reference results stored: 34
 [Section13] Reference Model calculations complete
 [Section13] ✅ Reference Model complete
 [Section13] 🔄 Starting Target Model calculations...
 🔍 [S13-CONTEXT] Creating target context: g_118="Volume by Schedule" from TargetState
 🔍 [S13-CONTEXT] TargetState.g_118="Volume by Schedule", ReferenceState.g_118="Volume Constant"
 [Section13] Running Target Model calculations...
 [S13] TGT HEATING: system=Heatpump, ted=119171.54500166589, afue=0.98, cop=3.663540445486518
 🔍 [S13-VENT] calculateVentilationRates: ventMethod="Volume by Schedule", ach(l_118)=3, ratePerPerson(d_119)=14, volume(d_105)=8000
 🔍 [S13-VENT] isReferenceCalculation=false, hasContext=true
 🔍 [S13-VENT] calculateVentilationValues: ventMethod="Volume by Schedule", ach(l_118)=3, ratePerPerson(d_119)=14, volume(d_105)=8000
 🔍 [S13-VENT] Supporting values: occupants(d_63)=126, occupiedHours(i_63)=4380, totalHours(j_63)=8760
 ✅ [S13-VENT] Final d_120 result: 3333.333333333333 L/s (from method="Volume by Schedule", ach=3, volume=8000)
 [Section13] 🧊 COOLING CALC: mode=TGT, coolingSystemType="Cooling", heatingType="Heatpump", isCoolingActive=true, coolingDemand=10192.893604542265
 [S15] 🎯 TGT S03 CLIMATE READ: h_23=18, d_23=-24, d_24=30, h_24=24
 [S04] S15 target electricity changed: d_136
 [S04] Starting dual-engine Excel-compliant calculations
 [S04] Row 32 Subtotals - F32: 132938, G32: 6779.838, J32: 133574.36633416289, K32: 6812.2926830423075
 [S04] j_32 update: 133574.36633416289
 [S01] j_32 listener: 133341.34892282684 → 133574.36633416289
 [S01] 🕐 j_32 listener timing: StateManager current j_32 = 133574.36633416289
2 🔄 [S05] updateCalculatedDisplayValues: mode=target
 [S15] 🎯 TGT S03 CLIMATE READ: h_23=18, d_23=-24, d_24=30, h_24=24
 [StateManager] 🎯 h_10 setValue: "93.59190466238991" (state: calculated)
 [StateManager] h_10 setValue stack trace:
setValue @ 4011-StateManager.js:346
calculateValues @ 4011-Section15.js:1832
calculateTargetModel @ 4011-Section15.js:1662
calculateAll @ 4011-Section15.js:1328
(anonymous) @ 4011-Section15.js:2121
(anonymous) @ 4011-StateManager.js:543
notifyListeners @ 4011-StateManager.js:541
setValue @ 4011-StateManager.js:419
setCalculatedValue @ 4011-Section04.js:96
calculateRow32 @ 4011-Section04.js:1026
calculateTargetModel @ 4011-Section04.js:1620
calculateAll @ 4011-Section04.js:1586
(anonymous) @ 4011-Section04.js:2483
(anonymous) @ 4011-StateManager.js:543
notifyListeners @ 4011-StateManager.js:541
setValue @ 4011-StateManager.js:419
setTargetValue @ 4011-Section15.js:146
calculateValues @ 4011-Section15.js:1810
calculateTargetModel @ 4011-Section15.js:1662
calculateAll @ 4011-Section15.js:1328
(anonymous) @ 4011-Section15.js:2121
(anonymous) @ 4011-StateManager.js:543
notifyListeners @ 4011-StateManager.js:541
setValue @ 4011-StateManager.js:419
setFieldValue @ 4011-Section13.js:636
calculateCoolingSystem @ 4011-Section13.js:3030
calculateTargetModel @ 4011-Section13.js:3560
calculateAll @ 4011-Section13.js:3403
(anonymous) @ 4011-Section13.js:2819
(anonymous) @ 4011-StateManager.js:543
notifyListeners @ 4011-StateManager.js:541
setValue @ 4011-StateManager.js:419
setValue @ 4011-Section03.js:217
setFieldValue @ 4011-Section03.js:453
calculateGroundFacing @ 4011-Section03.js:1682
calculateReferenceModel @ 4011-Section03.js:1754
calculateAll @ 4011-Section03.js:1692
(anonymous) @ 4011-Calculator.js:513
calculateAll @ 4011-Calculator.js:509
(anonymous) @ index.html:1077
 [S15] 🎯 TGT S03 CLIMATE READ: h_23=18, d_23=-24, d_24=30, h_24=24
 [StateManager] 🎯 h_10 setValue: "93.59190466238991" (state: calculated)
 [StateManager] h_10 setValue stack trace:
setValue @ 4011-StateManager.js:346
calculateValues @ 4011-Section15.js:1832
calculateTargetModel @ 4011-Section15.js:1662
calculateAll @ 4011-Section15.js:1328
(anonymous) @ 4011-Section15.js:2121
(anonymous) @ 4011-StateManager.js:543
notifyListeners @ 4011-StateManager.js:541
setValue @ 4011-StateManager.js:419
calculateValues @ 4011-Section15.js:1832
calculateTargetModel @ 4011-Section15.js:1662
calculateAll @ 4011-Section15.js:1328
(anonymous) @ 4011-Section15.js:2121
(anonymous) @ 4011-StateManager.js:543
notifyListeners @ 4011-StateManager.js:541
setValue @ 4011-StateManager.js:419
setCalculatedValue @ 4011-Section04.js:96
calculateRow32 @ 4011-Section04.js:1026
calculateTargetModel @ 4011-Section04.js:1620
calculateAll @ 4011-Section04.js:1586
(anonymous) @ 4011-Section04.js:2483
(anonymous) @ 4011-StateManager.js:543
notifyListeners @ 4011-StateManager.js:541
setValue @ 4011-StateManager.js:419
setTargetValue @ 4011-Section15.js:146
calculateValues @ 4011-Section15.js:1810
calculateTargetModel @ 4011-Section15.js:1662
calculateAll @ 4011-Section15.js:1328
(anonymous) @ 4011-Section15.js:2121
(anonymous) @ 4011-StateManager.js:543
notifyListeners @ 4011-StateManager.js:541
setValue @ 4011-StateManager.js:419
setFieldValue @ 4011-Section13.js:636
calculateCoolingSystem @ 4011-Section13.js:3030
calculateTargetModel @ 4011-Section13.js:3560
calculateAll @ 4011-Section13.js:3403
(anonymous) @ 4011-Section13.js:2819
(anonymous) @ 4011-StateManager.js:543
notifyListeners @ 4011-StateManager.js:541
setValue @ 4011-StateManager.js:419
setValue @ 4011-Section03.js:217
setFieldValue @ 4011-Section03.js:453
calculateGroundFacing @ 4011-Section03.js:1682
calculateReferenceModel @ 4011-Section03.js:1754
calculateAll @ 4011-Section03.js:1692
(anonymous) @ 4011-Calculator.js:513
calculateAll @ 4011-Calculator.js:509
(anonymous) @ index.html:1077
 [S15] 🎯 TGT S03 CLIMATE READ: h_23=18, d_23=-24, d_24=30, h_24=24
 [StateManager] 🎯 h_10 setValue: "93.59190466238991" (state: calculated)
 [StateManager] h_10 setValue stack trace:
setValue @ 4011-StateManager.js:346
calculateValues @ 4011-Section15.js:1832
calculateTargetModel @ 4011-Section15.js:1662
calculateAll @ 4011-Section15.js:1328
(anonymous) @ 4011-Section15.js:2121
(anonymous) @ 4011-StateManager.js:543
notifyListeners @ 4011-StateManager.js:541
setValue @ 4011-StateManager.js:419
calculateValues @ 4011-Section15.js:1832
calculateTargetModel @ 4011-Section15.js:1662
calculateAll @ 4011-Section15.js:1328
(anonymous) @ 4011-Section15.js:2121
(anonymous) @ 4011-StateManager.js:543
notifyListeners @ 4011-StateManager.js:541
setValue @ 4011-StateManager.js:419
setCalculatedValue @ 4011-Section04.js:96
calculateRow32 @ 4011-Section04.js:1026
calculateTargetModel @ 4011-Section04.js:1620
calculateAll @ 4011-Section04.js:1586
(anonymous) @ 4011-Section04.js:2483
(anonymous) @ 4011-StateManager.js:543
notifyListeners @ 4011-StateManager.js:541
setValue @ 4011-StateManager.js:419
setTargetValue @ 4011-Section15.js:146
calculateValues @ 4011-Section15.js:1810
calculateTargetModel @ 4011-Section15.js:1662
calculateAll @ 4011-Section15.js:1328
(anonymous) @ 4011-Section15.js:2121
(anonymous) @ 4011-StateManager.js:543
notifyListeners @ 4011-StateManager.js:541
setValue @ 4011-StateManager.js:419
setFieldValue @ 4011-Section13.js:636
calculateCoolingSystem @ 4011-Section13.js:3030
calculateTargetModel @ 4011-Section13.js:3560
calculateAll @ 4011-Section13.js:3403
(anonymous) @ 4011-Section13.js:2819
(anonymous) @ 4011-StateManager.js:543
notifyListeners @ 4011-StateManager.js:541
setValue @ 4011-StateManager.js:419
setValue @ 4011-Section03.js:217
setFieldValue @ 4011-Section03.js:453
calculateGroundFacing @ 4011-Section03.js:1682
calculateReferenceModel @ 4011-Section03.js:1754
calculateAll @ 4011-Section03.js:1692
(anonymous) @ 4011-Calculator.js:513
calculateAll @ 4011-Calculator.js:509
(anonymous) @ index.html:1077
 [S15] 🎯 TGT S03 CLIMATE READ: h_23=18, d_23=-24, d_24=30, h_24=24
 [StateManager] 🎯 h_10 setValue: "93.59190466238991" (state: calculated)
 [StateManager] h_10 setValue stack trace:
setValue @ 4011-StateManager.js:346
calculateValues @ 4011-Section15.js:1832
calculateTargetModel @ 4011-Section15.js:1662
calculateAll @ 4011-Section15.js:1328
(anonymous) @ 4011-Section15.js:2121
(anonymous) @ 4011-StateManager.js:543
notifyListeners @ 4011-StateManager.js:541
setValue @ 4011-StateManager.js:419
setCalculatedValue @ 4011-Section04.js:96
calculateRow32 @ 4011-Section04.js:1026
calculateTargetModel @ 4011-Section04.js:1620
calculateAll @ 4011-Section04.js:1586
(anonymous) @ 4011-Section04.js:2483
(anonymous) @ 4011-StateManager.js:543
notifyListeners @ 4011-StateManager.js:541
setValue @ 4011-StateManager.js:419
setTargetValue @ 4011-Section15.js:146
calculateValues @ 4011-Section15.js:1810
calculateTargetModel @ 4011-Section15.js:1662
calculateAll @ 4011-Section15.js:1328
(anonymous) @ 4011-Section15.js:2121
(anonymous) @ 4011-StateManager.js:543
notifyListeners @ 4011-StateManager.js:541
setValue @ 4011-StateManager.js:419
setFieldValue @ 4011-Section13.js:636
calculateCoolingSystem @ 4011-Section13.js:3030
calculateTargetModel @ 4011-Section13.js:3560
calculateAll @ 4011-Section13.js:3403
(anonymous) @ 4011-Section13.js:2819
(anonymous) @ 4011-StateManager.js:543
notifyListeners @ 4011-StateManager.js:541
setValue @ 4011-StateManager.js:419
setValue @ 4011-Section03.js:217
setFieldValue @ 4011-Section03.js:453
calculateGroundFacing @ 4011-Section03.js:1682
calculateReferenceModel @ 4011-Section03.js:1754
calculateAll @ 4011-Section03.js:1692
(anonymous) @ 4011-Calculator.js:513
calculateAll @ 4011-Calculator.js:509
(anonymous) @ index.html:1077
 [S04] Row 32 Subtotals - F32: 132938, G32: 6779.838, J32: 301986.051518286, K32: 15401.288627432587
 [S04] Reference model calculations complete
 [S04DB] storeReference: ref_j_32=301986.051518286, ref_k_32=15401.288627432587 | current target j_32=133574.36633416289, k_32=6812.2926830423075
 [S04] 🔄 Updating calculated display values for target mode
 [S04DB] displayContext mode=target j_32=133574.36633416289 ref_j_32=301986.051518286 k_32=6812.2926830423075 ref_k_32=15401.288627432587
 [S04 DEBUG] Target mode - j_32: 133574.36633416289
 [S04 DEBUG] Target mode - k_32: 6812.2926830423075
 [S04 DEBUG] Target mode - l_27: 51
 [S04] Calculated display values updated for target mode
 [S04] Dual-engine calculations completed successfully
 [S04] 🔄 Updating calculated display values for target mode
 [S04DB] displayContext mode=target j_32=133574.36633416289 ref_j_32=301986.051518286 k_32=6812.2926830423075 ref_k_32=15401.288627432587
 [S04 DEBUG] Target mode - j_32: 133574.36633416289
 [S04 DEBUG] Target mode - k_32: 6812.2926830423075
 [S04 DEBUG] Target mode - l_27: 51
 [S04] Calculated display values updated for target mode
 [StateManager] 🎯 h_10 setValue: "93.59190466238991" (state: calculated)
 [StateManager] h_10 setValue stack trace:
setValue @ 4011-StateManager.js:346
calculateValues @ 4011-Section15.js:1832
calculateTargetModel @ 4011-Section15.js:1662
calculateAll @ 4011-Section15.js:1328
(anonymous) @ 4011-Section15.js:2121
(anonymous) @ 4011-StateManager.js:543
notifyListeners @ 4011-StateManager.js:541
setValue @ 4011-StateManager.js:419
setFieldValue @ 4011-Section13.js:636
calculateCoolingSystem @ 4011-Section13.js:3030
calculateTargetModel @ 4011-Section13.js:3560
calculateAll @ 4011-Section13.js:3403
(anonymous) @ 4011-Section13.js:2819
(anonymous) @ 4011-StateManager.js:543
notifyListeners @ 4011-StateManager.js:541
setValue @ 4011-StateManager.js:419
setValue @ 4011-Section03.js:217
setFieldValue @ 4011-Section03.js:453
calculateGroundFacing @ 4011-Section03.js:1682
calculateReferenceModel @ 4011-Section03.js:1754
calculateAll @ 4011-Section03.js:1692
(anonymous) @ 4011-Calculator.js:513
calculateAll @ 4011-Calculator.js:509
(anonymous) @ index.html:1077
 [S15] 🎯 TGT S03 CLIMATE READ: h_23=18, d_23=-24, d_24=30, h_24=24
 [StateManager] 🎯 h_10 setValue: "93.59190466238991" (state: calculated)
 [StateManager] h_10 setValue stack trace:
setValue @ 4011-StateManager.js:346
calculateValues @ 4011-Section15.js:1832
calculateTargetModel @ 4011-Section15.js:1662
calculateAll @ 4011-Section15.js:1328
(anonymous) @ 4011-Section15.js:2121
(anonymous) @ 4011-StateManager.js:543
notifyListeners @ 4011-StateManager.js:541
setValue @ 4011-StateManager.js:419
setFieldValue @ 4011-Section13.js:636
calculateCoolingSystem @ 4011-Section13.js:3030
calculateTargetModel @ 4011-Section13.js:3560
calculateAll @ 4011-Section13.js:3403
(anonymous) @ 4011-Section13.js:2819
(anonymous) @ 4011-StateManager.js:543
notifyListeners @ 4011-StateManager.js:541
setValue @ 4011-StateManager.js:419
setValue @ 4011-Section03.js:217
setFieldValue @ 4011-Section03.js:453
calculateGroundFacing @ 4011-Section03.js:1682
calculateReferenceModel @ 4011-Section03.js:1754
calculateAll @ 4011-Section03.js:1692
(anonymous) @ 4011-Calculator.js:513
calculateAll @ 4011-Calculator.js:509
(anonymous) @ index.html:1077
 [Section13] 🧊 COOLING RESULTS: d_117=3826.8214105081656, j_116=2.663540445486518, l_116=0, l_114=6366.0721940341
2 [S14 LISTENER] 🔥 d_122 changed - triggering calculateAll() + UI update
 [S15] 🎯 TGT S03 CLIMATE READ: h_23=18, d_23=-24, d_24=30, h_24=24
 [StateManager] 🎯 h_10 setValue: "93.59190466238991" (state: calculated)
 [StateManager] h_10 setValue stack trace:
setValue @ 4011-StateManager.js:346
calculateValues @ 4011-Section15.js:1832
calculateTargetModel @ 4011-Section15.js:1662
calculateAll @ 4011-Section15.js:1328
(anonymous) @ 4011-Section15.js:2121
(anonymous) @ 4011-StateManager.js:543
notifyListeners @ 4011-StateManager.js:541
setValue @ 4011-StateManager.js:419
setFieldValue @ 4011-Section13.js:636
calculateCoolingVentilation @ 4011-Section13.js:3272
calculateCoolingSystem @ 4011-Section13.js:3040
calculateTargetModel @ 4011-Section13.js:3560
calculateAll @ 4011-Section13.js:3403
(anonymous) @ 4011-Section13.js:2819
(anonymous) @ 4011-StateManager.js:543
notifyListeners @ 4011-StateManager.js:541
setValue @ 4011-StateManager.js:419
setValue @ 4011-Section03.js:217
setFieldValue @ 4011-Section03.js:453
calculateGroundFacing @ 4011-Section03.js:1682
calculateReferenceModel @ 4011-Section03.js:1754
calculateAll @ 4011-Section03.js:1692
(anonymous) @ 4011-Calculator.js:513
calculateAll @ 4011-Calculator.js:509
(anonymous) @ index.html:1077
 [S15] 🎯 TGT S03 CLIMATE READ: h_23=18, d_23=-24, d_24=30, h_24=24
 [StateManager] 🎯 h_10 setValue: "93.59190466238991" (state: calculated)
 [StateManager] h_10 setValue stack trace:
setValue @ 4011-StateManager.js:346
calculateValues @ 4011-Section15.js:1832
calculateTargetModel @ 4011-Section15.js:1662
calculateAll @ 4011-Section15.js:1328
(anonymous) @ 4011-Section15.js:2121
(anonymous) @ 4011-StateManager.js:543
notifyListeners @ 4011-StateManager.js:541
setValue @ 4011-StateManager.js:419
setFieldValue @ 4011-Section13.js:636
calculateCoolingVentilation @ 4011-Section13.js:3272
calculateCoolingSystem @ 4011-Section13.js:3040
calculateTargetModel @ 4011-Section13.js:3560
calculateAll @ 4011-Section13.js:3403
(anonymous) @ 4011-Section13.js:2819
(anonymous) @ 4011-StateManager.js:543
notifyListeners @ 4011-StateManager.js:541
setValue @ 4011-StateManager.js:419
setValue @ 4011-Section03.js:217
setFieldValue @ 4011-Section03.js:453
calculateGroundFacing @ 4011-Section03.js:1682
calculateReferenceModel @ 4011-Section03.js:1754
calculateAll @ 4011-Section03.js:1692
(anonymous) @ 4011-Calculator.js:513
calculateAll @ 4011-Calculator.js:509
(anonymous) @ index.html:1077
2 [S14 LISTENER] 🔥 d_122 changed - triggering calculateAll() + UI update
 [S15] 🎯 TGT S03 CLIMATE READ: h_23=18, d_23=-24, d_24=30, h_24=24
 [StateManager] 🎯 h_10 setValue: "93.59190466238991" (state: calculated)
 [StateManager] h_10 setValue stack trace:
setValue @ 4011-StateManager.js:346
calculateValues @ 4011-Section15.js:1832
calculateTargetModel @ 4011-Section15.js:1662
calculateAll @ 4011-Section15.js:1328
(anonymous) @ 4011-Section15.js:2121
(anonymous) @ 4011-StateManager.js:543
notifyListeners @ 4011-StateManager.js:541
setValue @ 4011-StateManager.js:419
setFieldValue @ 4011-Section13.js:636
updateTargetModelDOMValues @ 4011-Section13.js:3684
calculateTargetModel @ 4011-Section13.js:3570
calculateAll @ 4011-Section13.js:3403
(anonymous) @ 4011-Section13.js:2819
(anonymous) @ 4011-StateManager.js:543
notifyListeners @ 4011-StateManager.js:541
setValue @ 4011-StateManager.js:419
setValue @ 4011-Section03.js:217
setFieldValue @ 4011-Section03.js:453
calculateGroundFacing @ 4011-Section03.js:1682
calculateReferenceModel @ 4011-Section03.js:1754
calculateAll @ 4011-Section03.js:1692
(anonymous) @ 4011-Calculator.js:513
calculateAll @ 4011-Calculator.js:509
(anonymous) @ index.html:1077
 [S15] 🎯 TGT S03 CLIMATE READ: h_23=18, d_23=-24, d_24=30, h_24=24
 [StateManager] 🎯 h_10 setValue: "93.59190466238991" (state: calculated)
 [StateManager] h_10 setValue stack trace:
setValue @ 4011-StateManager.js:346
calculateValues @ 4011-Section15.js:1832
calculateTargetModel @ 4011-Section15.js:1662
calculateAll @ 4011-Section15.js:1328
(anonymous) @ 4011-Section15.js:2121
(anonymous) @ 4011-StateManager.js:543
notifyListeners @ 4011-StateManager.js:541
setValue @ 4011-StateManager.js:419
setFieldValue @ 4011-Section13.js:636
updateTargetModelDOMValues @ 4011-Section13.js:3684
calculateTargetModel @ 4011-Section13.js:3570
calculateAll @ 4011-Section13.js:3403
(anonymous) @ 4011-Section13.js:2819
(anonymous) @ 4011-StateManager.js:543
notifyListeners @ 4011-StateManager.js:541
setValue @ 4011-StateManager.js:419
setValue @ 4011-Section03.js:217
setFieldValue @ 4011-Section03.js:453
calculateGroundFacing @ 4011-Section03.js:1682
calculateReferenceModel @ 4011-Section03.js:1754
calculateAll @ 4011-Section03.js:1692
(anonymous) @ 4011-Calculator.js:513
calculateAll @ 4011-Calculator.js:509
(anonymous) @ index.html:1077
 [Section13] Target Model calculations complete
 [Section13] ✅ Target Model complete
 [Section13] ⏭️ Skipping Reference value re-write - triggered in target mode
 [Section13] 🎉 DUAL-ENGINE CALCULATIONS COMPLETE
 [S15] 🎯 TGT S03 CLIMATE READ: h_23=18, d_23=-24, d_24=30, h_24=24
 [StateManager] 🎯 h_10 setValue: "93.59190466238991" (state: calculated)
 [StateManager] h_10 setValue stack trace:
setValue @ 4011-StateManager.js:346
calculateValues @ 4011-Section15.js:1832
calculateTargetModel @ 4011-Section15.js:1662
calculateAll @ 4011-Section15.js:1328
(anonymous) @ 4011-Section15.js:2121
(anonymous) @ 4011-StateManager.js:543
notifyListeners @ 4011-StateManager.js:541
setValue @ 4011-StateManager.js:419
(anonymous) @ 4011-Section03.js:1797
storeReferenceResults @ 4011-Section03.js:1795
calculateReferenceModel @ 4011-Section03.js:1761
calculateAll @ 4011-Section03.js:1692
(anonymous) @ 4011-Calculator.js:513
calculateAll @ 4011-Calculator.js:509
(anonymous) @ index.html:1077
 [S15] 🎯 TGT S03 CLIMATE READ: h_23=18, d_23=-24, d_24=30, h_24=24
 [StateManager] 🎯 h_10 setValue: "93.59190466238991" (state: calculated)
 [StateManager] h_10 setValue stack trace:
setValue @ 4011-StateManager.js:346
calculateValues @ 4011-Section15.js:1832
calculateTargetModel @ 4011-Section15.js:1662
calculateAll @ 4011-Section15.js:1328
(anonymous) @ 4011-Section15.js:2121
(anonymous) @ 4011-StateManager.js:543
notifyListeners @ 4011-StateManager.js:541
setValue @ 4011-StateManager.js:419
(anonymous) @ 4011-Section03.js:1797
storeReferenceResults @ 4011-Section03.js:1795
calculateReferenceModel @ 4011-Section03.js:1761
calculateAll @ 4011-Section03.js:1692
(anonymous) @ 4011-Calculator.js:513
calculateAll @ 4011-Calculator.js:509
(anonymous) @ index.html:1077
 [S15] 🎯 TGT S03 CLIMATE READ: h_23=18, d_23=-24, d_24=30, h_24=24
 [StateManager] 🎯 h_10 setValue: "93.59190466238991" (state: calculated)
 [StateManager] h_10 setValue stack trace:
setValue @ 4011-StateManager.js:346
calculateValues @ 4011-Section15.js:1832
calculateTargetModel @ 4011-Section15.js:1662
calculateAll @ 4011-Section15.js:1328
(anonymous) @ 4011-Section15.js:2121
(anonymous) @ 4011-StateManager.js:543
notifyListeners @ 4011-StateManager.js:541
setValue @ 4011-StateManager.js:419
(anonymous) @ 4011-Section03.js:1797
storeReferenceResults @ 4011-Section03.js:1795
calculateReferenceModel @ 4011-Section03.js:1761
calculateAll @ 4011-Section03.js:1692
(anonymous) @ 4011-Calculator.js:513
calculateAll @ 4011-Calculator.js:509
(anonymous) @ index.html:1077
 [S15] 🎯 TGT S03 CLIMATE READ: h_23=18, d_23=-24, d_24=30, h_24=24
 [StateManager] 🎯 h_10 setValue: "93.59190466238991" (state: calculated)
 [StateManager] h_10 setValue stack trace:
setValue @ 4011-StateManager.js:346
calculateValues @ 4011-Section15.js:1832
calculateTargetModel @ 4011-Section15.js:1662
calculateAll @ 4011-Section15.js:1328
(anonymous) @ 4011-Section15.js:2121
(anonymous) @ 4011-StateManager.js:543
notifyListeners @ 4011-StateManager.js:541
setValue @ 4011-StateManager.js:419
(anonymous) @ 4011-Section03.js:1797
storeReferenceResults @ 4011-Section03.js:1795
calculateReferenceModel @ 4011-Section03.js:1761
calculateAll @ 4011-Section03.js:1692
(anonymous) @ 4011-Calculator.js:513
calculateAll @ 4011-Calculator.js:509
(anonymous) @ index.html:1077
 [S15] 🎯 TGT S03 CLIMATE READ: h_23=18, d_23=-24, d_24=30, h_24=24
 [StateManager] 🎯 h_10 setValue: "93.59190466238991" (state: calculated)
 [StateManager] h_10 setValue stack trace:
setValue @ 4011-StateManager.js:346
calculateValues @ 4011-Section15.js:1832
calculateTargetModel @ 4011-Section15.js:1662
calculateAll @ 4011-Section15.js:1328
(anonymous) @ 4011-Section15.js:2121
(anonymous) @ 4011-StateManager.js:543
notifyListeners @ 4011-StateManager.js:541
setValue @ 4011-StateManager.js:419
(anonymous) @ 4011-Section03.js:1797
storeReferenceResults @ 4011-Section03.js:1795
calculateReferenceModel @ 4011-Section03.js:1761
calculateAll @ 4011-Section03.js:1692
(anonymous) @ 4011-Calculator.js:513
calculateAll @ 4011-Calculator.js:509
(anonymous) @ index.html:1077
 [S15] 🎯 TGT S03 CLIMATE READ: h_23=18, d_23=-24, d_24=30, h_24=24
 [StateManager] 🎯 h_10 setValue: "93.59190466238991" (state: calculated)
 [StateManager] h_10 setValue stack trace:
setValue @ 4011-StateManager.js:346
calculateValues @ 4011-Section15.js:1832
calculateTargetModel @ 4011-Section15.js:1662
calculateAll @ 4011-Section15.js:1328
(anonymous) @ 4011-Section15.js:2121
(anonymous) @ 4011-StateManager.js:543
notifyListeners @ 4011-StateManager.js:541
setValue @ 4011-StateManager.js:419
(anonymous) @ 4011-Section03.js:1797
storeReferenceResults @ 4011-Section03.js:1795
calculateReferenceModel @ 4011-Section03.js:1761
calculateAll @ 4011-Section03.js:1692
(anonymous) @ 4011-Calculator.js:513
calculateAll @ 4011-Calculator.js:509
(anonymous) @ index.html:1077
 [S15] 🎯 TGT S03 CLIMATE READ: h_23=18, d_23=-24, d_24=30, h_24=24
 [StateManager] 🎯 h_10 setValue: "93.59190466238991" (state: calculated)
 [StateManager] h_10 setValue stack trace:
setValue @ 4011-StateManager.js:346
calculateValues @ 4011-Section15.js:1832
calculateTargetModel @ 4011-Section15.js:1662
calculateAll @ 4011-Section15.js:1328
(anonymous) @ 4011-Section15.js:2121
(anonymous) @ 4011-StateManager.js:543
notifyListeners @ 4011-StateManager.js:541
setValue @ 4011-StateManager.js:419
(anonymous) @ 4011-Section03.js:1797
storeReferenceResults @ 4011-Section03.js:1795
calculateReferenceModel @ 4011-Section03.js:1761
calculateAll @ 4011-Section03.js:1692
(anonymous) @ 4011-Calculator.js:513
calculateAll @ 4011-Calculator.js:509
(anonymous) @ index.html:1077
 [S15] 🎯 TGT S03 CLIMATE READ: h_23=18, d_23=-24, d_24=30, h_24=24
 [StateManager] 🎯 h_10 setValue: "93.59190466238991" (state: calculated)
 [StateManager] h_10 setValue stack trace:
setValue @ 4011-StateManager.js:346
calculateValues @ 4011-Section15.js:1832
calculateTargetModel @ 4011-Section15.js:1662
calculateAll @ 4011-Section15.js:1328
(anonymous) @ 4011-Section15.js:2121
(anonymous) @ 4011-StateManager.js:543
notifyListeners @ 4011-StateManager.js:541
setValue @ 4011-StateManager.js:419
(anonymous) @ 4011-Section03.js:1797
storeReferenceResults @ 4011-Section03.js:1795
calculateReferenceModel @ 4011-Section03.js:1761
calculateAll @ 4011-Section03.js:1692
(anonymous) @ 4011-Calculator.js:513
calculateAll @ 4011-Calculator.js:509
(anonymous) @ index.html:1077
 [S11] calculateAll TRIGGERED. isReferenceMode: false
 [S11] 🔵 REF CLIMATE READ: d_20=4600
 [S11] 🔵 REF CLIMATE READ: d_21=196
 [S11] 🔵 REF CLIMATE READ: d_20=4600
 [S11] 🔵 REF CLIMATE READ: d_21=196
 [S11] 🔵 REF CLIMATE READ: d_20=4600
 [S11] 🔵 REF CLIMATE READ: d_21=196
 [S11] 🔵 REF CLIMATE READ: d_20=4600
 [S11] 🔵 REF CLIMATE READ: d_21=196
 [S11] 🔵 REF CLIMATE READ: d_20=4600
 [S11] 🔵 REF CLIMATE READ: d_21=196
 [S11] 🔵 REF CLIMATE READ: d_20=4600
 [S11] 🔵 REF CLIMATE READ: d_21=196
 [S11] 🔵 REF CLIMATE READ: d_20=4600
 [S11] 🔵 REF CLIMATE READ: d_21=196
 [S11] 🔵 REF CLIMATE READ: d_20=4600
 [S11] 🔵 REF CLIMATE READ: d_21=196
 [S11] 🔵 REF CLIMATE READ: d_20=4600
 [S11] 🔵 REF CLIMATE READ: d_21=196
 [S11] 🔵 REF CLIMATE READ: d_22=1960
 [S11] 🔵 REF CLIMATE READ: h_22=-1680
 [S11] 🔵 REF CLIMATE READ: d_22=1960
 [S11] 🔵 REF CLIMATE READ: h_22=-1680
 [S11] REF TB%=50% → ref_i_97=59532.29, ref_k_97=-947.70
 [S11] Writing ref penalty: ref_i_97=59532.29, ref_k_97=-947.70
 [S11] 🎯 TGT CLIMATE READ: d_20=4600
 [S11] 🎯 TGT CLIMATE READ: d_21=196
 [S11] 🎯 TGT CLIMATE READ: d_20=4600
 [S11] 🎯 TGT CLIMATE READ: d_21=196
 [S11] 🎯 TGT CLIMATE READ: d_20=4600
 [S11] 🎯 TGT CLIMATE READ: d_21=196
 [S11] 🎯 TGT CLIMATE READ: d_20=4600
 [S11] 🎯 TGT CLIMATE READ: d_21=196
 [S11] 🎯 TGT CLIMATE READ: d_20=4600
 [S11] 🎯 TGT CLIMATE READ: d_21=196
 [S11] 🎯 TGT CLIMATE READ: d_20=4600
 [S11] 🎯 TGT CLIMATE READ: d_21=196
 [S11] 🎯 TGT CLIMATE READ: d_20=4600
 [S11] 🎯 TGT CLIMATE READ: d_21=196
 [S11] 🎯 TGT CLIMATE READ: d_20=4600
 [S11] 🎯 TGT CLIMATE READ: d_21=196
 [S11] 🎯 TGT CLIMATE READ: d_20=4600
 [S11] 🎯 TGT CLIMATE READ: d_21=196
2 [S11] 🎯 TGT CLIMATE READ: h_22=-1680
 [S11] calculateAll TRIGGERED. isReferenceMode: false
 [S11] 🔵 REF CLIMATE READ: d_20=4600
 [S11] 🔵 REF CLIMATE READ: d_21=196
 [S11] 🔵 REF CLIMATE READ: d_20=4600
 [S11] 🔵 REF CLIMATE READ: d_21=196
 [S11] 🔵 REF CLIMATE READ: d_20=4600
 [S11] 🔵 REF CLIMATE READ: d_21=196
 [S11] 🔵 REF CLIMATE READ: d_20=4600
 [S11] 🔵 REF CLIMATE READ: d_21=196
 [S11] 🔵 REF CLIMATE READ: d_20=4600
 [S11] 🔵 REF CLIMATE READ: d_21=196
 [S11] 🔵 REF CLIMATE READ: d_20=4600
 [S11] 🔵 REF CLIMATE READ: d_21=196
 [S11] 🔵 REF CLIMATE READ: d_20=4600
 [S11] 🔵 REF CLIMATE READ: d_21=196
 [S11] 🔵 REF CLIMATE READ: d_20=4600
 [S11] 🔵 REF CLIMATE READ: d_21=196
 [S11] 🔵 REF CLIMATE READ: d_20=4600
 [S11] 🔵 REF CLIMATE READ: d_21=196
 [S11] 🔵 REF CLIMATE READ: d_22=1960
 [S11] 🔵 REF CLIMATE READ: h_22=-1680
 [S11] 🔵 REF CLIMATE READ: d_22=1960
 [S11] 🔵 REF CLIMATE READ: h_22=-1680
 [S11] REF TB%=50% → ref_i_97=59532.29, ref_k_97=-947.70
 [S11] Writing ref penalty: ref_i_97=59532.29, ref_k_97=-947.70
 [S11] 🎯 TGT CLIMATE READ: d_20=4600
 [S11] 🎯 TGT CLIMATE READ: d_21=196
 [S11] 🎯 TGT CLIMATE READ: d_20=4600
 [S11] 🎯 TGT CLIMATE READ: d_21=196
 [S11] 🎯 TGT CLIMATE READ: d_20=4600
 [S11] 🎯 TGT CLIMATE READ: d_21=196
 [S11] 🎯 TGT CLIMATE READ: d_20=4600
 [S11] 🎯 TGT CLIMATE READ: d_21=196
 [S11] 🎯 TGT CLIMATE READ: d_20=4600
 [S11] 🎯 TGT CLIMATE READ: d_21=196
 [S11] 🎯 TGT CLIMATE READ: d_20=4600
 [S11] 🎯 TGT CLIMATE READ: d_21=196
 [S11] 🎯 TGT CLIMATE READ: d_20=4600
 [S11] 🎯 TGT CLIMATE READ: d_21=196
 [S11] 🎯 TGT CLIMATE READ: d_20=4600
 [S11] 🎯 TGT CLIMATE READ: d_21=196
 [S11] 🎯 TGT CLIMATE READ: d_20=4600
 [S11] 🎯 TGT CLIMATE READ: d_21=196
2 [S11] 🎯 TGT CLIMATE READ: h_22=-1680
 [S13DEBUG] Reference GF HDD changed: ref_d_22=1960 → triggering Reference calculations
 [Section13] 🚀 CALCULATEALL TRIGGERED - Running dual-engine calculations...
 [Section13] 🎯 Mode captured at calculation start: target
 [Section13] 🔄 Starting Reference Model calculations...
 🔍 [S13-CONTEXT] Creating reference context: g_118="Volume Constant" from ReferenceState
 🔍 [S13-CONTEXT] ReferenceState.g_118="Volume Constant", TargetState.g_118="Volume by Schedule"
 [Section13] Running Reference Model calculations...
 [S13 CONTAMINATION DEBUG] calculateReferenceModel: Using system type = Electricity
 [S13] REF HEATING: system=Electricity, ted=251391.1974742337, afue=0.9, cop=1
 [S13 REF DEBUG] About to calculate with heating system: Electricity
 [S13 REF DEBUG] Will S13 publish ref_d_113=Electricity?
 🔍 [S13-VENT] calculateVentilationRates: ventMethod="Volume Constant", ach(l_118)=3.5, ratePerPerson(d_119)=8.33, volume(d_105)=8000
 🔍 [S13-VENT] isReferenceCalculation=true, hasContext=true
 🔍 [S13-VENT] calculateVentilationValues: ventMethod="Volume Constant", ach(l_118)=3.5, ratePerPerson(d_119)=8.33, volume(d_105)=8000
 🔍 [S13-VENT] Supporting values: occupants(d_63)=126, occupiedHours(i_63)=4380, totalHours(j_63)=8760
 🔍 [S13-VENT] Volume Constant calculation: ventRateLs = (3.5 * 8000) / 3.6 = 7777.777777777777
 ✅ [S13-VENT] Final d_120 result: 7777.777777777777 L/s (from method="Volume Constant", ach=3.5, volume=8000)
 [Section13] 🧊 COOLING CALC: mode=REF, coolingSystemType="No Cooling", heatingType="Electricity", isCoolingActive=false, coolingDemand=10192.893604542265
 [S13 CONTAMINATION DEBUG] storeReferenceResults called during reference mode
 [S13 CONTAMINATION DEBUG] Reference heating system: Electricity
 [S13 CONTAMINATION DEBUG] Target heating system: Heatpump
 [S13 CONTAMINATION DEBUG] Reference h_115 (gas volume): 0
 [S13 CONTAMINATION DEBUG] Reference f_115 (oil volume): 0
 [S13 CONTAMINATION DEBUG] Writing ref_f_115 = 0
 [S13 CONTAMINATION DEBUG] Writing ref_h_115 = 0
 [Section13] Reference results stored with ref_ prefix for downstream sections
 [S13 DEBUG] Total Reference results stored: 34
 [Section13] Reference Model calculations complete
 [Section13] ✅ Reference Model complete
 [Section13] 🔄 Starting Target Model calculations...
 🔍 [S13-CONTEXT] Creating target context: g_118="Volume by Schedule" from TargetState
 🔍 [S13-CONTEXT] TargetState.g_118="Volume by Schedule", ReferenceState.g_118="Volume Constant"
 [Section13] Running Target Model calculations...
 [S13] TGT HEATING: system=Heatpump, ted=119171.54500166589, afue=0.98, cop=3.663540445486518
 🔍 [S13-VENT] calculateVentilationRates: ventMethod="Volume by Schedule", ach(l_118)=3, ratePerPerson(d_119)=14, volume(d_105)=8000
 🔍 [S13-VENT] isReferenceCalculation=false, hasContext=true
 🔍 [S13-VENT] calculateVentilationValues: ventMethod="Volume by Schedule", ach(l_118)=3, ratePerPerson(d_119)=14, volume(d_105)=8000
 🔍 [S13-VENT] Supporting values: occupants(d_63)=126, occupiedHours(i_63)=4380, totalHours(j_63)=8760
 ✅ [S13-VENT] Final d_120 result: 3333.333333333333 L/s (from method="Volume by Schedule", ach=3, volume=8000)
 [Section13] 🧊 COOLING CALC: mode=TGT, coolingSystemType="Cooling", heatingType="Heatpump", isCoolingActive=true, coolingDemand=10192.893604542265
 [Section13] 🧊 COOLING RESULTS: d_117=3826.8214105081656, j_116=2.663540445486518, l_116=0, l_114=6366.0721940341
2 [S14 LISTENER] 🔥 d_122 changed - triggering calculateAll() + UI update
 [S15] 🎯 TGT S03 CLIMATE READ: h_23=18, d_23=-24, d_24=30, h_24=24
 [StateManager] 🎯 h_10 setValue: "93.59190466238991" (state: calculated)
 [StateManager] h_10 setValue stack trace:
setValue @ 4011-StateManager.js:346
calculateValues @ 4011-Section15.js:1832
calculateTargetModel @ 4011-Section15.js:1662
calculateAll @ 4011-Section15.js:1328
(anonymous) @ 4011-Section15.js:2121
(anonymous) @ 4011-StateManager.js:543
notifyListeners @ 4011-StateManager.js:541
setValue @ 4011-StateManager.js:419
setFieldValue @ 4011-Section13.js:636
calculateCoolingVentilation @ 4011-Section13.js:3272
calculateCoolingSystem @ 4011-Section13.js:3040
calculateTargetModel @ 4011-Section13.js:3560
calculateAll @ 4011-Section13.js:3403
(anonymous) @ 4011-Section13.js:2813
(anonymous) @ 4011-StateManager.js:543
notifyListeners @ 4011-StateManager.js:541
setValue @ 4011-StateManager.js:419
(anonymous) @ 4011-Section03.js:1797
storeReferenceResults @ 4011-Section03.js:1795
calculateReferenceModel @ 4011-Section03.js:1761
calculateAll @ 4011-Section03.js:1692
(anonymous) @ 4011-Calculator.js:513
calculateAll @ 4011-Calculator.js:509
(anonymous) @ index.html:1077
 [S15] 🎯 TGT S03 CLIMATE READ: h_23=18, d_23=-24, d_24=30, h_24=24
 [StateManager] 🎯 h_10 setValue: "93.59190466238991" (state: calculated)
 [StateManager] h_10 setValue stack trace:
setValue @ 4011-StateManager.js:346
calculateValues @ 4011-Section15.js:1832
calculateTargetModel @ 4011-Section15.js:1662
calculateAll @ 4011-Section15.js:1328
(anonymous) @ 4011-Section15.js:2121
(anonymous) @ 4011-StateManager.js:543
notifyListeners @ 4011-StateManager.js:541
setValue @ 4011-StateManager.js:419
setFieldValue @ 4011-Section13.js:636
calculateCoolingVentilation @ 4011-Section13.js:3272
calculateCoolingSystem @ 4011-Section13.js:3040
calculateTargetModel @ 4011-Section13.js:3560
calculateAll @ 4011-Section13.js:3403
(anonymous) @ 4011-Section13.js:2813
(anonymous) @ 4011-StateManager.js:543
notifyListeners @ 4011-StateManager.js:541
setValue @ 4011-StateManager.js:419
(anonymous) @ 4011-Section03.js:1797
storeReferenceResults @ 4011-Section03.js:1795
calculateReferenceModel @ 4011-Section03.js:1761
calculateAll @ 4011-Section03.js:1692
(anonymous) @ 4011-Calculator.js:513
calculateAll @ 4011-Calculator.js:509
(anonymous) @ index.html:1077
2 [S14 LISTENER] 🔥 d_122 changed - triggering calculateAll() + UI update
 [S15] 🎯 TGT S03 CLIMATE READ: h_23=18, d_23=-24, d_24=30, h_24=24
 [StateManager] 🎯 h_10 setValue: "93.59190466238991" (state: calculated)
 [StateManager] h_10 setValue stack trace:
setValue @ 4011-StateManager.js:346
calculateValues @ 4011-Section15.js:1832
calculateTargetModel @ 4011-Section15.js:1662
calculateAll @ 4011-Section15.js:1328
(anonymous) @ 4011-Section15.js:2121
(anonymous) @ 4011-StateManager.js:543
notifyListeners @ 4011-StateManager.js:541
setValue @ 4011-StateManager.js:419
setFieldValue @ 4011-Section13.js:636
updateTargetModelDOMValues @ 4011-Section13.js:3684
calculateTargetModel @ 4011-Section13.js:3570
calculateAll @ 4011-Section13.js:3403
(anonymous) @ 4011-Section13.js:2813
(anonymous) @ 4011-StateManager.js:543
notifyListeners @ 4011-StateManager.js:541
setValue @ 4011-StateManager.js:419
(anonymous) @ 4011-Section03.js:1797
storeReferenceResults @ 4011-Section03.js:1795
calculateReferenceModel @ 4011-Section03.js:1761
calculateAll @ 4011-Section03.js:1692
(anonymous) @ 4011-Calculator.js:513
calculateAll @ 4011-Calculator.js:509
(anonymous) @ index.html:1077
 [S15] 🎯 TGT S03 CLIMATE READ: h_23=18, d_23=-24, d_24=30, h_24=24
 [StateManager] 🎯 h_10 setValue: "93.59190466238991" (state: calculated)
 [StateManager] h_10 setValue stack trace:
setValue @ 4011-StateManager.js:346
calculateValues @ 4011-Section15.js:1832
calculateTargetModel @ 4011-Section15.js:1662
calculateAll @ 4011-Section15.js:1328
(anonymous) @ 4011-Section15.js:2121
(anonymous) @ 4011-StateManager.js:543
notifyListeners @ 4011-StateManager.js:541
setValue @ 4011-StateManager.js:419
setFieldValue @ 4011-Section13.js:636
updateTargetModelDOMValues @ 4011-Section13.js:3684
calculateTargetModel @ 4011-Section13.js:3570
calculateAll @ 4011-Section13.js:3403
(anonymous) @ 4011-Section13.js:2813
(anonymous) @ 4011-StateManager.js:543
notifyListeners @ 4011-StateManager.js:541
setValue @ 4011-StateManager.js:419
(anonymous) @ 4011-Section03.js:1797
storeReferenceResults @ 4011-Section03.js:1795
calculateReferenceModel @ 4011-Section03.js:1761
calculateAll @ 4011-Section03.js:1692
(anonymous) @ 4011-Calculator.js:513
calculateAll @ 4011-Calculator.js:509
(anonymous) @ index.html:1077
 [Section13] Target Model calculations complete
 [Section13] ✅ Target Model complete
 [Section13] ⏭️ Skipping Reference value re-write - triggered in target mode
 [Section13] 🎉 DUAL-ENGINE CALCULATIONS COMPLETE
 [S11] calculateAll TRIGGERED. isReferenceMode: false
 [S11] 🔵 REF CLIMATE READ: d_20=4600
 [S11] 🔵 REF CLIMATE READ: d_21=196
 [S11] 🔵 REF CLIMATE READ: d_20=4600
 [S11] 🔵 REF CLIMATE READ: d_21=196
 [S11] 🔵 REF CLIMATE READ: d_20=4600
 [S11] 🔵 REF CLIMATE READ: d_21=196
 [S11] 🔵 REF CLIMATE READ: d_20=4600
 [S11] 🔵 REF CLIMATE READ: d_21=196
 [S11] 🔵 REF CLIMATE READ: d_20=4600
 [S11] 🔵 REF CLIMATE READ: d_21=196
 [S11] 🔵 REF CLIMATE READ: d_20=4600
 [S11] 🔵 REF CLIMATE READ: d_21=196
 [S11] 🔵 REF CLIMATE READ: d_20=4600
 [S11] 🔵 REF CLIMATE READ: d_21=196
 [S11] 🔵 REF CLIMATE READ: d_20=4600
 [S11] 🔵 REF CLIMATE READ: d_21=196
 [S11] 🔵 REF CLIMATE READ: d_20=4600
 [S11] 🔵 REF CLIMATE READ: d_21=196
 [S11] 🔵 REF CLIMATE READ: d_22=1960
 [S11] 🔵 REF CLIMATE READ: h_22=-1680
 [S11] 🔵 REF CLIMATE READ: d_22=1960
 [S11] 🔵 REF CLIMATE READ: h_22=-1680
 [S11] REF TB%=50% → ref_i_97=59532.29, ref_k_97=-947.70
 [S11] Writing ref penalty: ref_i_97=59532.29, ref_k_97=-947.70
 [S11] 🎯 TGT CLIMATE READ: d_20=4600
 [S11] 🎯 TGT CLIMATE READ: d_21=196
 [S11] 🎯 TGT CLIMATE READ: d_20=4600
 [S11] 🎯 TGT CLIMATE READ: d_21=196
 [S11] 🎯 TGT CLIMATE READ: d_20=4600
 [S11] 🎯 TGT CLIMATE READ: d_21=196
 [S11] 🎯 TGT CLIMATE READ: d_20=4600
 [S11] 🎯 TGT CLIMATE READ: d_21=196
 [S11] 🎯 TGT CLIMATE READ: d_20=4600
 [S11] 🎯 TGT CLIMATE READ: d_21=196
 [S11] 🎯 TGT CLIMATE READ: d_20=4600
 [S11] 🎯 TGT CLIMATE READ: d_21=196
 [S11] 🎯 TGT CLIMATE READ: d_20=4600
 [S11] 🎯 TGT CLIMATE READ: d_21=196
 [S11] 🎯 TGT CLIMATE READ: d_20=4600
 [S11] 🎯 TGT CLIMATE READ: d_21=196
 [S11] 🎯 TGT CLIMATE READ: d_20=4600
 [S11] 🎯 TGT CLIMATE READ: d_21=196
2 [S11] 🎯 TGT CLIMATE READ: h_22=-1680
 [S11] calculateAll TRIGGERED. isReferenceMode: false
 [S11] 🔵 REF CLIMATE READ: d_20=4600
 [S11] 🔵 REF CLIMATE READ: d_21=196
 [S11] 🔵 REF CLIMATE READ: d_20=4600
 [S11] 🔵 REF CLIMATE READ: d_21=196
 [S11] 🔵 REF CLIMATE READ: d_20=4600
 [S11] 🔵 REF CLIMATE READ: d_21=196
 [S11] 🔵 REF CLIMATE READ: d_20=4600
 [S11] 🔵 REF CLIMATE READ: d_21=196
 [S11] 🔵 REF CLIMATE READ: d_20=4600
 [S11] 🔵 REF CLIMATE READ: d_21=196
 [S11] 🔵 REF CLIMATE READ: d_20=4600
 [S11] 🔵 REF CLIMATE READ: d_21=196
 [S11] 🔵 REF CLIMATE READ: d_20=4600
 [S11] 🔵 REF CLIMATE READ: d_21=196
 [S11] 🔵 REF CLIMATE READ: d_20=4600
 [S11] 🔵 REF CLIMATE READ: d_21=196
 [S11] 🔵 REF CLIMATE READ: d_20=4600
 [S11] 🔵 REF CLIMATE READ: d_21=196
 [S11] 🔵 REF CLIMATE READ: d_22=1960
 [S11] 🔵 REF CLIMATE READ: h_22=-1680
 [S11] 🔵 REF CLIMATE READ: d_22=1960
 [S11] 🔵 REF CLIMATE READ: h_22=-1680
 [S11] REF TB%=50% → ref_i_97=59532.29, ref_k_97=-947.70
 [S11] Writing ref penalty: ref_i_97=59532.29, ref_k_97=-947.70
 [S11] 🎯 TGT CLIMATE READ: d_20=4600
 [S11] 🎯 TGT CLIMATE READ: d_21=196
 [S11] 🎯 TGT CLIMATE READ: d_20=4600
 [S11] 🎯 TGT CLIMATE READ: d_21=196
 [S11] 🎯 TGT CLIMATE READ: d_20=4600
 [S11] 🎯 TGT CLIMATE READ: d_21=196
 [S11] 🎯 TGT CLIMATE READ: d_20=4600
 [S11] 🎯 TGT CLIMATE READ: d_21=196
 [S11] 🎯 TGT CLIMATE READ: d_20=4600
 [S11] 🎯 TGT CLIMATE READ: d_21=196
 [S11] 🎯 TGT CLIMATE READ: d_20=4600
 [S11] 🎯 TGT CLIMATE READ: d_21=196
 [S11] 🎯 TGT CLIMATE READ: d_20=4600
 [S11] 🎯 TGT CLIMATE READ: d_21=196
 [S11] 🎯 TGT CLIMATE READ: d_20=4600
 [S11] 🎯 TGT CLIMATE READ: d_21=196
 [S11] 🎯 TGT CLIMATE READ: d_20=4600
 [S11] 🎯 TGT CLIMATE READ: d_21=196
2 [S11] 🎯 TGT CLIMATE READ: h_22=-1680
 [S13DEBUG] Reference GF CDD changed: ref_h_22=-1680 → triggering Reference calculations
 [Section13] 🚀 CALCULATEALL TRIGGERED - Running dual-engine calculations...
 [Section13] 🎯 Mode captured at calculation start: target
 [Section13] 🔄 Starting Reference Model calculations...
 🔍 [S13-CONTEXT] Creating reference context: g_118="Volume Constant" from ReferenceState
 🔍 [S13-CONTEXT] ReferenceState.g_118="Volume Constant", TargetState.g_118="Volume by Schedule"
 [Section13] Running Reference Model calculations...
 [S13 CONTAMINATION DEBUG] calculateReferenceModel: Using system type = Electricity
 [S13] REF HEATING: system=Electricity, ted=251391.1974742337, afue=0.9, cop=1
 [S13 REF DEBUG] About to calculate with heating system: Electricity
 [S13 REF DEBUG] Will S13 publish ref_d_113=Electricity?
 🔍 [S13-VENT] calculateVentilationRates: ventMethod="Volume Constant", ach(l_118)=3.5, ratePerPerson(d_119)=8.33, volume(d_105)=8000
 🔍 [S13-VENT] isReferenceCalculation=true, hasContext=true
 🔍 [S13-VENT] calculateVentilationValues: ventMethod="Volume Constant", ach(l_118)=3.5, ratePerPerson(d_119)=8.33, volume(d_105)=8000
 🔍 [S13-VENT] Supporting values: occupants(d_63)=126, occupiedHours(i_63)=4380, totalHours(j_63)=8760
 🔍 [S13-VENT] Volume Constant calculation: ventRateLs = (3.5 * 8000) / 3.6 = 7777.777777777777
 ✅ [S13-VENT] Final d_120 result: 7777.777777777777 L/s (from method="Volume Constant", ach=3.5, volume=8000)
 [Section13] 🧊 COOLING CALC: mode=REF, coolingSystemType="No Cooling", heatingType="Electricity", isCoolingActive=false, coolingDemand=10192.893604542265
 [S13 CONTAMINATION DEBUG] storeReferenceResults called during reference mode
 [S13 CONTAMINATION DEBUG] Reference heating system: Electricity
 [S13 CONTAMINATION DEBUG] Target heating system: Heatpump
 [S13 CONTAMINATION DEBUG] Reference h_115 (gas volume): 0
 [S13 CONTAMINATION DEBUG] Reference f_115 (oil volume): 0
 [S13 CONTAMINATION DEBUG] Writing ref_f_115 = 0
 [S13 CONTAMINATION DEBUG] Writing ref_h_115 = 0
 [Section13] Reference results stored with ref_ prefix for downstream sections
 [S13 DEBUG] Total Reference results stored: 34
 [Section13] Reference Model calculations complete
 [Section13] ✅ Reference Model complete
 [Section13] 🔄 Starting Target Model calculations...
 🔍 [S13-CONTEXT] Creating target context: g_118="Volume by Schedule" from TargetState
 🔍 [S13-CONTEXT] TargetState.g_118="Volume by Schedule", ReferenceState.g_118="Volume Constant"
 [Section13] Running Target Model calculations...
 [S13] TGT HEATING: system=Heatpump, ted=119171.54500166589, afue=0.98, cop=3.663540445486518
 🔍 [S13-VENT] calculateVentilationRates: ventMethod="Volume by Schedule", ach(l_118)=3, ratePerPerson(d_119)=14, volume(d_105)=8000
 🔍 [S13-VENT] isReferenceCalculation=false, hasContext=true
 🔍 [S13-VENT] calculateVentilationValues: ventMethod="Volume by Schedule", ach(l_118)=3, ratePerPerson(d_119)=14, volume(d_105)=8000
 🔍 [S13-VENT] Supporting values: occupants(d_63)=126, occupiedHours(i_63)=4380, totalHours(j_63)=8760
 ✅ [S13-VENT] Final d_120 result: 3333.333333333333 L/s (from method="Volume by Schedule", ach=3, volume=8000)
 [Section13] 🧊 COOLING CALC: mode=TGT, coolingSystemType="Cooling", heatingType="Heatpump", isCoolingActive=true, coolingDemand=10192.893604542265
 [Section13] 🧊 COOLING RESULTS: d_117=3826.8214105081656, j_116=2.663540445486518, l_116=0, l_114=6366.0721940341
2 [S14 LISTENER] 🔥 d_122 changed - triggering calculateAll() + UI update
 [S15] 🎯 TGT S03 CLIMATE READ: h_23=18, d_23=-24, d_24=30, h_24=24
 [StateManager] 🎯 h_10 setValue: "93.59190466238991" (state: calculated)
 [StateManager] h_10 setValue stack trace:
setValue @ 4011-StateManager.js:346
calculateValues @ 4011-Section15.js:1832
calculateTargetModel @ 4011-Section15.js:1662
calculateAll @ 4011-Section15.js:1328
(anonymous) @ 4011-Section15.js:2121
(anonymous) @ 4011-StateManager.js:543
notifyListeners @ 4011-StateManager.js:541
setValue @ 4011-StateManager.js:419
setFieldValue @ 4011-Section13.js:636
calculateCoolingVentilation @ 4011-Section13.js:3272
calculateCoolingSystem @ 4011-Section13.js:3040
calculateTargetModel @ 4011-Section13.js:3560
calculateAll @ 4011-Section13.js:3403
(anonymous) @ 4011-Section13.js:2819
(anonymous) @ 4011-StateManager.js:543
notifyListeners @ 4011-StateManager.js:541
setValue @ 4011-StateManager.js:419
(anonymous) @ 4011-Section03.js:1797
storeReferenceResults @ 4011-Section03.js:1795
calculateReferenceModel @ 4011-Section03.js:1761
calculateAll @ 4011-Section03.js:1692
(anonymous) @ 4011-Calculator.js:513
calculateAll @ 4011-Calculator.js:509
(anonymous) @ index.html:1077
 [S15] 🎯 TGT S03 CLIMATE READ: h_23=18, d_23=-24, d_24=30, h_24=24
 [StateManager] 🎯 h_10 setValue: "93.59190466238991" (state: calculated)
 [StateManager] h_10 setValue stack trace:
setValue @ 4011-StateManager.js:346
calculateValues @ 4011-Section15.js:1832
calculateTargetModel @ 4011-Section15.js:1662
calculateAll @ 4011-Section15.js:1328
(anonymous) @ 4011-Section15.js:2121
(anonymous) @ 4011-StateManager.js:543
notifyListeners @ 4011-StateManager.js:541
setValue @ 4011-StateManager.js:419
setFieldValue @ 4011-Section13.js:636
calculateCoolingVentilation @ 4011-Section13.js:3272
calculateCoolingSystem @ 4011-Section13.js:3040
calculateTargetModel @ 4011-Section13.js:3560
calculateAll @ 4011-Section13.js:3403
(anonymous) @ 4011-Section13.js:2819
(anonymous) @ 4011-StateManager.js:543
notifyListeners @ 4011-StateManager.js:541
setValue @ 4011-StateManager.js:419
(anonymous) @ 4011-Section03.js:1797
storeReferenceResults @ 4011-Section03.js:1795
calculateReferenceModel @ 4011-Section03.js:1761
calculateAll @ 4011-Section03.js:1692
(anonymous) @ 4011-Calculator.js:513
calculateAll @ 4011-Calculator.js:509
(anonymous) @ index.html:1077
2 [S14 LISTENER] 🔥 d_122 changed - triggering calculateAll() + UI update
 [S15] 🎯 TGT S03 CLIMATE READ: h_23=18, d_23=-24, d_24=30, h_24=24
 [StateManager] 🎯 h_10 setValue: "93.59190466238991" (state: calculated)
 [StateManager] h_10 setValue stack trace:
setValue @ 4011-StateManager.js:346
calculateValues @ 4011-Section15.js:1832
calculateTargetModel @ 4011-Section15.js:1662
calculateAll @ 4011-Section15.js:1328
(anonymous) @ 4011-Section15.js:2121
(anonymous) @ 4011-StateManager.js:543
notifyListeners @ 4011-StateManager.js:541
setValue @ 4011-StateManager.js:419
setFieldValue @ 4011-Section13.js:636
updateTargetModelDOMValues @ 4011-Section13.js:3684
calculateTargetModel @ 4011-Section13.js:3570
calculateAll @ 4011-Section13.js:3403
(anonymous) @ 4011-Section13.js:2819
(anonymous) @ 4011-StateManager.js:543
notifyListeners @ 4011-StateManager.js:541
setValue @ 4011-StateManager.js:419
(anonymous) @ 4011-Section03.js:1797
storeReferenceResults @ 4011-Section03.js:1795
calculateReferenceModel @ 4011-Section03.js:1761
calculateAll @ 4011-Section03.js:1692
(anonymous) @ 4011-Calculator.js:513
calculateAll @ 4011-Calculator.js:509
(anonymous) @ index.html:1077
 [S15] 🎯 TGT S03 CLIMATE READ: h_23=18, d_23=-24, d_24=30, h_24=24
 [StateManager] 🎯 h_10 setValue: "93.59190466238991" (state: calculated)
 [StateManager] h_10 setValue stack trace:
setValue @ 4011-StateManager.js:346
calculateValues @ 4011-Section15.js:1832
calculateTargetModel @ 4011-Section15.js:1662
calculateAll @ 4011-Section15.js:1328
(anonymous) @ 4011-Section15.js:2121
(anonymous) @ 4011-StateManager.js:543
notifyListeners @ 4011-StateManager.js:541
setValue @ 4011-StateManager.js:419
setFieldValue @ 4011-Section13.js:636
updateTargetModelDOMValues @ 4011-Section13.js:3684
calculateTargetModel @ 4011-Section13.js:3570
calculateAll @ 4011-Section13.js:3403
(anonymous) @ 4011-Section13.js:2819
(anonymous) @ 4011-StateManager.js:543
notifyListeners @ 4011-StateManager.js:541
setValue @ 4011-StateManager.js:419
(anonymous) @ 4011-Section03.js:1797
storeReferenceResults @ 4011-Section03.js:1795
calculateReferenceModel @ 4011-Section03.js:1761
calculateAll @ 4011-Section03.js:1692
(anonymous) @ 4011-Calculator.js:513
calculateAll @ 4011-Calculator.js:509
(anonymous) @ index.html:1077
 [Section13] Target Model calculations complete
 [Section13] ✅ Target Model complete
 [Section13] ⏭️ Skipping Reference value re-write - triggered in target mode
 [Section13] 🎉 DUAL-ENGINE CALCULATIONS COMPLETE
 [S09 DEBUG] buildingType="A-Assembly", isReference=true
 [S09 DEBUG] isResidentialOrCare=false, plugLoadDensity=7
 [S09 DEBUG] buildingType="A-Assembly", isReference=false
 [S09 DEBUG] isResidentialOrCare=false, plugLoadDensity=7
 [S12] U-agg REF: TB%=50 → g_101=0.347926, g_102=0.405405
 [S15] 🎯 TGT S03 CLIMATE READ: h_23=18, d_23=-24, d_24=30, h_24=24
 [StateManager] 🎯 h_10 setValue: "93.59190466238991" (state: calculated)
 [StateManager] h_10 setValue stack trace:
setValue @ 4011-StateManager.js:346
calculateValues @ 4011-Section15.js:1832
calculateTargetModel @ 4011-Section15.js:1662
calculateAll @ 4011-Section15.js:1328
(anonymous) @ 4011-Section15.js:2121
(anonymous) @ 4011-StateManager.js:543
notifyListeners @ 4011-StateManager.js:541
setValue @ 4011-StateManager.js:419
setCalculatedValue @ 4011-Section12.js:1170
calculateCombinedUValue @ 4011-Section12.js:1604
calculateReferenceModel @ 4011-Section12.js:2228
calculateAll @ 4011-Section12.js:2199
(anonymous) @ 4011-Calculator.js:513
calculateAll @ 4011-Calculator.js:509
(anonymous) @ index.html:1077
 [S15] 🎯 TGT S03 CLIMATE READ: h_23=18, d_23=-24, d_24=30, h_24=24
 [StateManager] 🎯 h_10 setValue: "93.59190466238991" (state: calculated)
 [StateManager] h_10 setValue stack trace:
setValue @ 4011-StateManager.js:346
calculateValues @ 4011-Section15.js:1832
calculateTargetModel @ 4011-Section15.js:1662
calculateAll @ 4011-Section15.js:1328
(anonymous) @ 4011-Section15.js:2121
(anonymous) @ 4011-StateManager.js:543
notifyListeners @ 4011-StateManager.js:541
setValue @ 4011-StateManager.js:419
setCalculatedValue @ 4011-Section12.js:1170
calculateCombinedUValue @ 4011-Section12.js:1604
calculateReferenceModel @ 4011-Section12.js:2228
calculateAll @ 4011-Section12.js:2199
(anonymous) @ 4011-Calculator.js:513
calculateAll @ 4011-Calculator.js:509
(anonymous) @ index.html:1077
 [S15] 🎯 TGT S03 CLIMATE READ: h_23=18, d_23=-24, d_24=30, h_24=24
 [StateManager] 🎯 h_10 setValue: "93.59190466238991" (state: calculated)
 [StateManager] h_10 setValue stack trace:
setValue @ 4011-StateManager.js:346
calculateValues @ 4011-Section15.js:1832
calculateTargetModel @ 4011-Section15.js:1662
calculateAll @ 4011-Section15.js:1328
(anonymous) @ 4011-Section15.js:2121
(anonymous) @ 4011-StateManager.js:543
notifyListeners @ 4011-StateManager.js:541
setValue @ 4011-StateManager.js:419
setCalculatedValue @ 4011-Section12.js:1170
calculateCombinedUValue @ 4011-Section12.js:1604
calculateReferenceModel @ 4011-Section12.js:2228
calculateAll @ 4011-Section12.js:2199
(anonymous) @ 4011-Calculator.js:513
calculateAll @ 4011-Calculator.js:509
(anonymous) @ index.html:1077
 [S15] 🎯 TGT S03 CLIMATE READ: h_23=18, d_23=-24, d_24=30, h_24=24
 [StateManager] 🎯 h_10 setValue: "93.59190466238991" (state: calculated)
 [StateManager] h_10 setValue stack trace:
setValue @ 4011-StateManager.js:346
calculateValues @ 4011-Section15.js:1832
calculateTargetModel @ 4011-Section15.js:1662
calculateAll @ 4011-Section15.js:1328
(anonymous) @ 4011-Section15.js:2121
(anonymous) @ 4011-StateManager.js:543
notifyListeners @ 4011-StateManager.js:541
setValue @ 4011-StateManager.js:419
setCalculatedValue @ 4011-Section12.js:1170
calculateCombinedUValue @ 4011-Section12.js:1604
calculateReferenceModel @ 4011-Section12.js:2228
calculateAll @ 4011-Section12.js:2199
(anonymous) @ 4011-Calculator.js:513
calculateAll @ 4011-Calculator.js:509
(anonymous) @ index.html:1077
 [S12] 🔵 REF CLIMATE READ: d_20=4600, d_21=196
 [S12DB] REF CLIMATE: d_20=4600, d_21=196, d_22=1960, h_22=-1680
 [S12DB] REF h_101 calc: (4600*0.34792632830961084*24)/1000 = 38.41106664538104
 [S12DB] REF i_101 result: 38.41106664538104 * 2482.6199999999994 = 95360.08227515586
 [S12DB] REF g_104 calc: (0.34792632830961084*2482.6199999999994 + 0.4054054054054054*1100.42)/3583.0400009999994 = 0.365579250312205
 [S12DB] REF ROW104: i_101=95360.08227515586, i_102=20985.306810810813, i_103=36440.07984031935 → i_104=152785.46892628603
 [S12DB] REF ROW104: h_21="Capacitance", k_98=-1895.4006468093894 → k_104=-1895.4006468093894
 [S15] 🎯 TGT S03 CLIMATE READ: h_23=18, d_23=-24, d_24=30, h_24=24
 [StateManager] 🎯 h_10 setValue: "93.59190466238991" (state: calculated)
 [StateManager] h_10 setValue stack trace:
setValue @ 4011-StateManager.js:346
calculateValues @ 4011-Section15.js:1832
calculateTargetModel @ 4011-Section15.js:1662
calculateAll @ 4011-Section15.js:1328
(anonymous) @ 4011-Section15.js:2121
(anonymous) @ 4011-StateManager.js:543
notifyListeners @ 4011-StateManager.js:541
setValue @ 4011-StateManager.js:419
setCalculatedValue @ 4011-Section12.js:1170
calculateEnvelopeTotals @ 4011-Section12.js:2151
calculateReferenceModel @ 4011-Section12.js:2244
calculateAll @ 4011-Section12.js:2199
(anonymous) @ 4011-Calculator.js:513
calculateAll @ 4011-Calculator.js:509
(anonymous) @ index.html:1077
 [S15] 🎯 TGT S03 CLIMATE READ: h_23=18, d_23=-24, d_24=30, h_24=24
 [StateManager] 🎯 h_10 setValue: "93.59190466238991" (state: calculated)
 [StateManager] h_10 setValue stack trace:
setValue @ 4011-StateManager.js:346
calculateValues @ 4011-Section15.js:1832
calculateTargetModel @ 4011-Section15.js:1662
calculateAll @ 4011-Section15.js:1328
(anonymous) @ 4011-Section15.js:2121
(anonymous) @ 4011-StateManager.js:543
notifyListeners @ 4011-StateManager.js:541
setValue @ 4011-StateManager.js:419
setCalculatedValue @ 4011-Section12.js:1170
calculateEnvelopeTotals @ 4011-Section12.js:2151
calculateReferenceModel @ 4011-Section12.js:2244
calculateAll @ 4011-Section12.js:2199
(anonymous) @ 4011-Calculator.js:513
calculateAll @ 4011-Calculator.js:509
(anonymous) @ index.html:1077
 [S15] 🎯 TGT S03 CLIMATE READ: h_23=18, d_23=-24, d_24=30, h_24=24
 [StateManager] 🎯 h_10 setValue: "93.59190466238991" (state: calculated)
 [StateManager] h_10 setValue stack trace:
setValue @ 4011-StateManager.js:346
calculateValues @ 4011-Section15.js:1832
calculateTargetModel @ 4011-Section15.js:1662
calculateAll @ 4011-Section15.js:1328
(anonymous) @ 4011-Section15.js:2121
(anonymous) @ 4011-StateManager.js:543
notifyListeners @ 4011-StateManager.js:541
setValue @ 4011-StateManager.js:419
setCalculatedValue @ 4011-Section12.js:1170
calculateEnvelopeTotals @ 4011-Section12.js:2151
calculateReferenceModel @ 4011-Section12.js:2244
calculateAll @ 4011-Section12.js:2199
(anonymous) @ 4011-Calculator.js:513
calculateAll @ 4011-Calculator.js:509
(anonymous) @ index.html:1077
 [S15] 🎯 TGT S03 CLIMATE READ: h_23=18, d_23=-24, d_24=30, h_24=24
 [StateManager] 🎯 h_10 setValue: "93.59190466238991" (state: calculated)
 [StateManager] h_10 setValue stack trace:
setValue @ 4011-StateManager.js:346
calculateValues @ 4011-Section15.js:1832
calculateTargetModel @ 4011-Section15.js:1662
calculateAll @ 4011-Section15.js:1328
(anonymous) @ 4011-Section15.js:2121
(anonymous) @ 4011-StateManager.js:543
notifyListeners @ 4011-StateManager.js:541
setValue @ 4011-StateManager.js:419
setCalculatedValue @ 4011-Section12.js:1170
calculateEnvelopeTotals @ 4011-Section12.js:2151
calculateReferenceModel @ 4011-Section12.js:2244
calculateAll @ 4011-Section12.js:2199
(anonymous) @ 4011-Calculator.js:513
calculateAll @ 4011-Calculator.js:509
(anonymous) @ index.html:1077
 [S12DB] STORED for S15: ref_d_101=2482.6199999999994
 [S12DB] STORED for S15: ref_d_102=1100.42
 [S12DB] STORED for S15: ref_g_101=0.34792632830961084
 [S12DB] STORED for S15: ref_g_102=0.4054054054054054
 [S12DB] STORED for S15: ref_g_104=0.365579250312205
 [S12DB] STORED for S15: ref_i_101=95360.08227515586
 [S12DB] STORED for S15: ref_i_102=20985.306810810813
 [S12DB] STORED for S15: ref_i_104=152785.46892628603
 [Section12] Reference results stored with ref_ prefix for downstream sections
 [S12] U-agg TGT: TB%=20 → g_101=0.278341, g_102=0.324324
 [S12] 🎯 TGT CLIMATE READ: d_20=4600, d_21=196
 [S12DB] TGT CLIMATE: d_20=4600, d_21=196, d_22=1960, h_22=-1680
 [S12DB] TGT h_101 calc: (4600*0.27834106264768865*24)/1000 = 30.72885331630483
 [S12DB] TGT i_101 result: 30.72885331630483 * 2476.6199999999994 = 76103.69270022685
 [S12DB] TGT g_104 calc: (0.27834106264768865*2476.6199999999994 + 0.3243243243243243*1100.42)/3577.0400009999994 = 0.29248708855785915
 [S12DB] TGT ROW104: i_101=76103.69270022685, i_102=16788.24544864865, i_103=23178.387012790416 → i_104=116070.32516166591
 [S12DB] TGT ROW104: h_21="Capacitance", k_98=-3293.5693790538335 → k_104=-3293.5693790538335
 [S12DB] g_104 DISPLAY (target): 0.2924870886396271
 [Section12] Calculated display values updated for target mode
 [S10 DEBUG] calculateAll() triggered in target mode - running both engines
 [S10REF] Utilization calc: ref_i_71=110562.1692, ref_i_79=10060.174319999998, totalGains=120622.34352
 [S10REF] Using utilization method: NRC 40%
 [S10REF] Final calc: utilizationFactor=0.4, usableGains=48248.937408
 [S10REF] Complete: g_80=0.4, g_81=0.9936571089244821, i_80=48248.937408, i_81=119857.24913377894
 [S10 DEBUG] Dual-engine calculations complete in target mode
 [S11] calculateAll TRIGGERED. isReferenceMode: false
 [S11] 🔵 REF CLIMATE READ: d_20=4600
 [S11] 🔵 REF CLIMATE READ: d_21=196
 [S11] 🔵 REF CLIMATE READ: d_20=4600
 [S11] 🔵 REF CLIMATE READ: d_21=196
 [S11] 🔵 REF CLIMATE READ: d_20=4600
 [S11] 🔵 REF CLIMATE READ: d_21=196
 [S11] 🔵 REF CLIMATE READ: d_20=4600
 [S11] 🔵 REF CLIMATE READ: d_21=196
 [S11] 🔵 REF CLIMATE READ: d_20=4600
 [S11] 🔵 REF CLIMATE READ: d_21=196
 [S11] 🔵 REF CLIMATE READ: d_20=4600
 [S11] 🔵 REF CLIMATE READ: d_21=196
 [S11] 🔵 REF CLIMATE READ: d_20=4600
 [S11] 🔵 REF CLIMATE READ: d_21=196
 [S11] 🔵 REF CLIMATE READ: d_20=4600
 [S11] 🔵 REF CLIMATE READ: d_21=196
 [S11] 🔵 REF CLIMATE READ: d_20=4600
 [S11] 🔵 REF CLIMATE READ: d_21=196
 [S11] 🔵 REF CLIMATE READ: d_22=1960
 [S11] 🔵 REF CLIMATE READ: h_22=-1680
 [S11] 🔵 REF CLIMATE READ: d_22=1960
 [S11] 🔵 REF CLIMATE READ: h_22=-1680
 [S11] REF TB%=50% → ref_i_97=59532.29, ref_k_97=-947.70
 [S11] Writing ref penalty: ref_i_97=59532.29, ref_k_97=-947.70
 [S11] 🎯 TGT CLIMATE READ: d_20=4600
 [S11] 🎯 TGT CLIMATE READ: d_21=196
 [S11] 🎯 TGT CLIMATE READ: d_20=4600
 [S11] 🎯 TGT CLIMATE READ: d_21=196
 [S11] 🎯 TGT CLIMATE READ: d_20=4600
 [S11] 🎯 TGT CLIMATE READ: d_21=196
 [S11] 🎯 TGT CLIMATE READ: d_20=4600
 [S11] 🎯 TGT CLIMATE READ: d_21=196
 [S11] 🎯 TGT CLIMATE READ: d_20=4600
 [S11] 🎯 TGT CLIMATE READ: d_21=196
 [S11] 🎯 TGT CLIMATE READ: d_20=4600
 [S11] 🎯 TGT CLIMATE READ: d_21=196
 [S11] 🎯 TGT CLIMATE READ: d_20=4600
 [S11] 🎯 TGT CLIMATE READ: d_21=196
 [S11] 🎯 TGT CLIMATE READ: d_20=4600
 [S11] 🎯 TGT CLIMATE READ: d_21=196
 [S11] 🎯 TGT CLIMATE READ: d_20=4600
 [S11] 🎯 TGT CLIMATE READ: d_21=196
2 [S11] 🎯 TGT CLIMATE READ: h_22=-1680
 [S07] calculateEmissionsAndLosses: systemType="Heatpump" (TGT)
 [S07] ⚡ Non-fossil fuel: Heatpump → e_51=0, k_54=0 (both cleared)
 [S07] calculateEmissionsAndLosses: systemType="Heatpump" (REF)
 [S07] ⚡ Non-fossil fuel: Heatpump → e_51=0, k_54=0 (both cleared)
 [Section13] 🚀 CALCULATEALL TRIGGERED - Running dual-engine calculations...
 [Section13] 🎯 Mode captured at calculation start: target
 [Section13] 🔄 Starting Reference Model calculations...
 🔍 [S13-CONTEXT] Creating reference context: g_118="Volume Constant" from ReferenceState
 🔍 [S13-CONTEXT] ReferenceState.g_118="Volume Constant", TargetState.g_118="Volume by Schedule"
 [Section13] Running Reference Model calculations...
 [S13 CONTAMINATION DEBUG] calculateReferenceModel: Using system type = Electricity
 [S13] REF HEATING: system=Electricity, ted=251391.1974742337, afue=0.9, cop=1
 [S13 REF DEBUG] About to calculate with heating system: Electricity
 [S13 REF DEBUG] Will S13 publish ref_d_113=Electricity?
 🔍 [S13-VENT] calculateVentilationRates: ventMethod="Volume Constant", ach(l_118)=3.5, ratePerPerson(d_119)=8.33, volume(d_105)=8000
 🔍 [S13-VENT] isReferenceCalculation=true, hasContext=true
 🔍 [S13-VENT] calculateVentilationValues: ventMethod="Volume Constant", ach(l_118)=3.5, ratePerPerson(d_119)=8.33, volume(d_105)=8000
 🔍 [S13-VENT] Supporting values: occupants(d_63)=126, occupiedHours(i_63)=4380, totalHours(j_63)=8760
 🔍 [S13-VENT] Volume Constant calculation: ventRateLs = (3.5 * 8000) / 3.6 = 7777.777777777777
 ✅ [S13-VENT] Final d_120 result: 7777.777777777777 L/s (from method="Volume Constant", ach=3.5, volume=8000)
 [Section13] 🧊 COOLING CALC: mode=REF, coolingSystemType="No Cooling", heatingType="Electricity", isCoolingActive=false, coolingDemand=10192.893604542265
 [S13 CONTAMINATION DEBUG] storeReferenceResults called during reference mode
 [S13 CONTAMINATION DEBUG] Reference heating system: Electricity
 [S13 CONTAMINATION DEBUG] Target heating system: Heatpump
 [S13 CONTAMINATION DEBUG] Reference h_115 (gas volume): 0
 [S13 CONTAMINATION DEBUG] Reference f_115 (oil volume): 0
 [S13 CONTAMINATION DEBUG] Writing ref_f_115 = 0
 [S13 CONTAMINATION DEBUG] Writing ref_h_115 = 0
 [Section13] Reference results stored with ref_ prefix for downstream sections
 [S13 DEBUG] Total Reference results stored: 34
 [Section13] Reference Model calculations complete
 [Section13] ✅ Reference Model complete
 [Section13] 🔄 Starting Target Model calculations...
 🔍 [S13-CONTEXT] Creating target context: g_118="Volume by Schedule" from TargetState
4011-Section13.js:725 🔍 [S13-CONTEXT] TargetState.g_118="Volume by Schedule", ReferenceState.g_118="Volume Constant"
4011-Section13.js:3533 [Section13] Running Target Model calculations...
4011-Section13.js:2870 [S13] TGT HEATING: system=Heatpump, ted=119171.54500166589, afue=0.98, cop=3.663540445486518
4011-Section13.js:3096 🔍 [S13-VENT] calculateVentilationRates: ventMethod="Volume by Schedule", ach(l_118)=3, ratePerPerson(d_119)=14, volume(d_105)=8000
4011-Section13.js:3099 🔍 [S13-VENT] isReferenceCalculation=false, hasContext=true
4011-Section13.js:3107 🔍 [S13-VENT] calculateVentilationValues: ventMethod="Volume by Schedule", ach(l_118)=3, ratePerPerson(d_119)=14, volume(d_105)=8000
4011-Section13.js:3110 🔍 [S13-VENT] Supporting values: occupants(d_63)=126, occupiedHours(i_63)=4380, totalHours(j_63)=8760
4011-Section13.js:3142 ✅ [S13-VENT] Final d_120 result: 3333.333333333333 L/s (from method="Volume by Schedule", ach=3, volume=8000)
4011-Section13.js:2974 [Section13] 🧊 COOLING CALC: mode=TGT, coolingSystemType="Cooling", heatingType="Heatpump", isCoolingActive=true, coolingDemand=10192.893604542265
4011-Section13.js:3036 [Section13] 🧊 COOLING RESULTS: d_117=3826.8214105081656, j_116=2.663540445486518, l_116=0, l_114=6366.0721940341
24011-Section14.js:1416 [S14 LISTENER] 🔥 d_122 changed - triggering calculateAll() + UI update
4011-Section15.js:1750 [S15] 🎯 TGT S03 CLIMATE READ: h_23=18, d_23=-24, d_24=30, h_24=24
4011-StateManager.js:343 [StateManager] 🎯 h_10 setValue: "93.59190466238991" (state: calculated)
4011-StateManager.js:346 [StateManager] h_10 setValue stack trace:
setValue @ 4011-StateManager.js:346
calculateValues @ 4011-Section15.js:1832
calculateTargetModel @ 4011-Section15.js:1662
calculateAll @ 4011-Section15.js:1328
(anonymous) @ 4011-Section15.js:2121
(anonymous) @ 4011-StateManager.js:543
notifyListeners @ 4011-StateManager.js:541
setValue @ 4011-StateManager.js:419
setFieldValue @ 4011-Section13.js:636
calculateCoolingVentilation @ 4011-Section13.js:3272
calculateCoolingSystem @ 4011-Section13.js:3040
calculateTargetModel @ 4011-Section13.js:3560
calculateAll @ 4011-Section13.js:3403
(anonymous) @ 4011-Calculator.js:513
calculateAll @ 4011-Calculator.js:509
(anonymous) @ index.html:1077
4011-Section15.js:1750 [S15] 🎯 TGT S03 CLIMATE READ: h_23=18, d_23=-24, d_24=30, h_24=24
4011-StateManager.js:343 [StateManager] 🎯 h_10 setValue: "93.59190466238991" (state: calculated)
4011-StateManager.js:346 [StateManager] h_10 setValue stack trace:
setValue @ 4011-StateManager.js:346
calculateValues @ 4011-Section15.js:1832
calculateTargetModel @ 4011-Section15.js:1662
calculateAll @ 4011-Section15.js:1328
(anonymous) @ 4011-Section15.js:2121
(anonymous) @ 4011-StateManager.js:543
notifyListeners @ 4011-StateManager.js:541
setValue @ 4011-StateManager.js:419
setFieldValue @ 4011-Section13.js:636
calculateCoolingVentilation @ 4011-Section13.js:3272
calculateCoolingSystem @ 4011-Section13.js:3040
calculateTargetModel @ 4011-Section13.js:3560
calculateAll @ 4011-Section13.js:3403
(anonymous) @ 4011-Calculator.js:513
calculateAll @ 4011-Calculator.js:509
(anonymous) @ index.html:1077
24011-Section14.js:1416 [S14 LISTENER] 🔥 d_122 changed - triggering calculateAll() + UI update
4011-Section15.js:1750 [S15] 🎯 TGT S03 CLIMATE READ: h_23=18, d_23=-24, d_24=30, h_24=24
4011-StateManager.js:343 [StateManager] 🎯 h_10 setValue: "93.59190466238991" (state: calculated)
4011-StateManager.js:346 [StateManager] h_10 setValue stack trace:
setValue @ 4011-StateManager.js:346
calculateValues @ 4011-Section15.js:1832
calculateTargetModel @ 4011-Section15.js:1662
calculateAll @ 4011-Section15.js:1328
(anonymous) @ 4011-Section15.js:2121
(anonymous) @ 4011-StateManager.js:543
notifyListeners @ 4011-StateManager.js:541
setValue @ 4011-StateManager.js:419
setFieldValue @ 4011-Section13.js:636
updateTargetModelDOMValues @ 4011-Section13.js:3684
calculateTargetModel @ 4011-Section13.js:3570
calculateAll @ 4011-Section13.js:3403
(anonymous) @ 4011-Calculator.js:513
calculateAll @ 4011-Calculator.js:509
(anonymous) @ index.html:1077
4011-Section15.js:1750 [S15] 🎯 TGT S03 CLIMATE READ: h_23=18, d_23=-24, d_24=30, h_24=24
4011-StateManager.js:343 [StateManager] 🎯 h_10 setValue: "93.59190466238991" (state: calculated)
4011-StateManager.js:346 [StateManager] h_10 setValue stack trace:
setValue @ 4011-StateManager.js:346
calculateValues @ 4011-Section15.js:1832
calculateTargetModel @ 4011-Section15.js:1662
calculateAll @ 4011-Section15.js:1328
(anonymous) @ 4011-Section15.js:2121
(anonymous) @ 4011-StateManager.js:543
notifyListeners @ 4011-StateManager.js:541
setValue @ 4011-StateManager.js:419
setFieldValue @ 4011-Section13.js:636
updateTargetModelDOMValues @ 4011-Section13.js:3684
calculateTargetModel @ 4011-Section13.js:3570
calculateAll @ 4011-Section13.js:3403
(anonymous) @ 4011-Calculator.js:513
calculateAll @ 4011-Calculator.js:509
(anonymous) @ index.html:1077
4011-Section13.js:3588 [Section13] Target Model calculations complete
4011-Section13.js:3404 [Section13] ✅ Target Model complete
4011-Section13.js:3431 [Section13] ⏭️ Skipping Reference value re-write - triggered in target mode
4011-Section13.js:3437 [Section13] 🎉 DUAL-ENGINE CALCULATIONS COMPLETE
4011-Section06.js:513 🟢 [S06-TAR] Storing d_43 = 0 (from d_44=0, d_45=0, d_46=0)
4011-Section06.js:508 🔵 [S06-REF] Storing ref_d_43 = 0 (from d_44=0, d_45=0, d_46=0)
4011-Section04.js:1577 [S04] Starting dual-engine Excel-compliant calculations
4011-Section04.js:1018 [S04] Row 32 Subtotals - F32: 132938, G32: 6779.838, J32: 133574.36633416289, K32: 6812.2926830423075
4011-Section04.js:94 [S04] j_32 update: 133574.36633416289
4011-Section04.js:1018 [S04] Row 32 Subtotals - F32: 132938, G32: 6779.838, J32: 301986.051518286, K32: 15401.288627432587
4011-Section04.js:1668 [S04] Reference model calculations complete
4011-Section04.js:1674 [S04DB] storeReference: ref_j_32=301986.051518286, ref_k_32=15401.288627432587 | current target j_32=133574.36633416289, k_32=6812.2926830423075
4011-Section04.js:493 [S04] 🔄 Updating calculated display values for target mode
4011-Section04.js:501 [S04DB] displayContext mode=target j_32=133574.36633416289 ref_j_32=301986.051518286 k_32=6812.2926830423075 ref_k_32=15401.288627432587
4011-Section04.js:582 [S04 DEBUG] Target mode - j_32: 133574.36633416289
4011-Section04.js:582 [S04 DEBUG] Target mode - k_32: 6812.2926830423075
4011-Section04.js:582 [S04 DEBUG] Target mode - l_27: 51
4011-Section04.js:617 [S04] Calculated display values updated for target mode
4011-Section04.js:1599 [S04] Dual-engine calculations completed successfully
4011-Section15.js:1750 [S15] 🎯 TGT S03 CLIMATE READ: h_23=18, d_23=-24, d_24=30, h_24=24
4011-StateManager.js:343 [StateManager] 🎯 h_10 setValue: "93.59190466238991" (state: calculated)
4011-StateManager.js:346 [StateManager] h_10 setValue stack trace:
setValue @ 4011-StateManager.js:346
calculateValues @ 4011-Section15.js:1832
calculateTargetModel @ 4011-Section15.js:1662
calculateAll @ 4011-Section15.js:1328
(anonymous) @ 4011-Calculator.js:513
calculateAll @ 4011-Calculator.js:509
(anonymous) @ index.html:1077
4011-Dependency.js:116 [DependencyGraph] Data loaded: 389 nodes, 663 links
4011-Dependency.js:718 [DependencyGraph] Calculating node sizes...
4011-Section01.js:1153 [S01DB] upstream snapshot Object
4011-Section01.js:706 🔍 [S01DB] updateTEUIDisplay START: e_10=341.2, h_10=93.59190466238991, useType=Utility Bills
4011-Section01.js:776 🔍 [S01] T.1 Calculation: e_6=23.8 (ref), h_6=11.7 (target) → reduction should be 51%
4011-Section01.js:866 🔍 [S01DB] UPDATING h_10: 93.6 (from j_32=133574.36633416289, area=1427.2)
4011-Section01.js:483 🔍 [S01] h_6 explanation: target=11.7, ref=23.8, reduction=0.5084033613445378, percent=51%
4011-Clock.js:59 🕐 [CLOCK] ⭐ INITIALIZATION COMPLETE: 679ms (all calculations finalized)
4011-Section01.js:1171 ✅ [S01] CALCULATION CHAIN COMPLETE - All values finalized including h_10
4011-Clock.js:146 [CLOCK] 🎯 User interaction started - timing to h_10 settlement
4011-Section03.js:2186 [S03] 🎯 Target occupancy changed: B3-Detention Care & Treatment
4011-Section03.js:574 [S03] 🎯 TGT MODE: Using occupancy "B3-Detention Care & Treatment" from d_12
4011-Section03.js:579 [S03] Getting climate data for: Alexandria, ON (Present) - Critical: true (target mode)
4011-Section03.js:604 [S03] TARGET TEMP SELECTION: January_1 = -26 (Critical: true)
4011-Section03.js:615 [S03] Climate values for Alexandria (target): {d_20: 4600, d_21: 196, j_19: '6.0', d_23: -26, d_24: 30, …}
4011-Section15.js:1750 [S15] 🎯 TGT S03 CLIMATE READ: h_23=18, d_23=-26, d_24=30, h_24=24
4011-StateManager.js:343 [StateManager] 🎯 h_10 setValue: "93.59190466238991" (state: calculated)
4011-StateManager.js:346 [StateManager] h_10 setValue stack trace:
setValue @ 4011-StateManager.js:346
calculateValues @ 4011-Section15.js:1832
calculateTargetModel @ 4011-Section15.js:1662
calculateAll @ 4011-Section15.js:1328
(anonymous) @ 4011-Section15.js:2121
(anonymous) @ 4011-StateManager.js:543
notifyListeners @ 4011-StateManager.js:541
setValue @ 4011-StateManager.js:419
(anonymous) @ 4011-Section03.js:1715
calculateTargetModel @ 4011-Section03.js:1712
calculateAll @ 4011-Section03.js:1691
(anonymous) @ 4011-Section03.js:2191
(anonymous) @ 4011-StateManager.js:543
notifyListeners @ 4011-StateManager.js:541
setValue @ 4011-StateManager.js:419
setValue @ 4011-Section09.js:191
(anonymous) @ 4011-Section09.js:2541
4011-Section15.js:1750 [S15] 🎯 TGT S03 CLIMATE READ: h_23=18, d_23=-26, d_24=30, h_24=24
4011-StateManager.js:343 [StateManager] 🎯 h_10 setValue: "93.59190466238991" (state: calculated)
4011-StateManager.js:346 [StateManager] h_10 setValue stack trace:
setValue @ 4011-StateManager.js:346
calculateValues @ 4011-Section15.js:1832
calculateTargetModel @ 4011-Section15.js:1662
calculateAll @ 4011-Section15.js:1328
(anonymous) @ 4011-Section15.js:2121
(anonymous) @ 4011-StateManager.js:543
notifyListeners @ 4011-StateManager.js:541
setValue @ 4011-StateManager.js:419
(anonymous) @ 4011-Section03.js:1715
calculateTargetModel @ 4011-Section03.js:1712
calculateAll @ 4011-Section03.js:1691
(anonymous) @ 4011-Section03.js:2191
(anonymous) @ 4011-StateManager.js:543
notifyListeners @ 4011-StateManager.js:541
setValue @ 4011-StateManager.js:419
setValue @ 4011-Section09.js:191
(anonymous) @ 4011-Section09.js:2541
4011-Clock.js:146 [CLOCK] 🎯 User interaction started - timing to h_10 settlement
4011-Section15.js:1750 [S15] 🎯 TGT S03 CLIMATE READ: h_23=22, d_23=-26, d_24=30, h_24=24
4011-StateManager.js:343 [StateManager] 🎯 h_10 setValue: "93.59190466238991" (state: calculated)
4011-StateManager.js:346 [StateManager] h_10 setValue stack trace:
setValue @ 4011-StateManager.js:346
calculateValues @ 4011-Section15.js:1832
calculateTargetModel @ 4011-Section15.js:1662
calculateAll @ 4011-Section15.js:1328
(anonymous) @ 4011-Section15.js:2121
(anonymous) @ 4011-StateManager.js:543
notifyListeners @ 4011-StateManager.js:541
setValue @ 4011-StateManager.js:419
setValue @ 4011-Section03.js:215
setFieldValue @ 4011-Section03.js:453
calculateHeatingSetpoint @ 4011-Section03.js:1836
calculateTargetModel @ 4011-Section03.js:1719
calculateAll @ 4011-Section03.js:1691
(anonymous) @ 4011-Section03.js:2191
(anonymous) @ 4011-StateManager.js:543
notifyListeners @ 4011-StateManager.js:541
setValue @ 4011-StateManager.js:419
setValue @ 4011-Section09.js:191
(anonymous) @ 4011-Section09.js:2541
4011-Section15.js:1750 [S15] 🎯 TGT S03 CLIMATE READ: h_23=22, d_23=-26, d_24=30, h_24=24
4011-StateManager.js:343 [StateManager] 🎯 h_10 setValue: "93.59190466238991" (state: calculated)
4011-StateManager.js:346 [StateManager] h_10 setValue stack trace:
setValue @ 4011-StateManager.js:346
calculateValues @ 4011-Section15.js:1832
calculateTargetModel @ 4011-Section15.js:1662
calculateAll @ 4011-Section15.js:1328
(anonymous) @ 4011-Section15.js:2121
(anonymous) @ 4011-StateManager.js:543
notifyListeners @ 4011-StateManager.js:541
setValue @ 4011-StateManager.js:419
setValue @ 4011-Section03.js:215
setFieldValue @ 4011-Section03.js:453
calculateHeatingSetpoint @ 4011-Section03.js:1836
calculateTargetModel @ 4011-Section03.js:1719
calculateAll @ 4011-Section03.js:1691
(anonymous) @ 4011-Section03.js:2191
(anonymous) @ 4011-StateManager.js:543
notifyListeners @ 4011-StateManager.js:541
setValue @ 4011-StateManager.js:419
setValue @ 4011-Section09.js:191
(anonymous) @ 4011-Section09.js:2541
 [CLOCK] 🎯 User interaction started - timing to h_10 settlement
 [CLOCK] 🎯 User interaction started - timing to h_10 settlement
 [CLOCK] 🎯 User interaction started - timing to h_10 settlement
 [CLOCK] 🎯 User interaction started - timing to h_10 settlement
 [CLOCK] 🎯 User interaction started - timing to h_10 settlement
 [S11] calculateAll TRIGGERED. isReferenceMode: false
 [S11] 🔵 REF CLIMATE READ: d_20=4600
 [S11] 🔵 REF CLIMATE READ: d_21=196
 [S11] 🔵 REF CLIMATE READ: d_20=4600
 [S11] 🔵 REF CLIMATE READ: d_21=196
 [S11] 🔵 REF CLIMATE READ: d_20=4600
 [S11] 🔵 REF CLIMATE READ: d_21=196
 [S11] 🔵 REF CLIMATE READ: d_20=4600
 [S11] 🔵 REF CLIMATE READ: d_21=196
 [S11] 🔵 REF CLIMATE READ: d_20=4600
 [S11] 🔵 REF CLIMATE READ: d_21=196
 [S11] 🔵 REF CLIMATE READ: d_20=4600
 [S11] 🔵 REF CLIMATE READ: d_21=196
 [S11] 🔵 REF CLIMATE READ: d_20=4600
 [S11] 🔵 REF CLIMATE READ: d_21=196
 [S11] 🔵 REF CLIMATE READ: d_20=4600
 [S11] 🔵 REF CLIMATE READ: d_21=196
 [S11] 🔵 REF CLIMATE READ: d_20=4600
 [S11] 🔵 REF CLIMATE READ: d_21=196
 [S11] 🔵 REF CLIMATE READ: d_22=1960
 [S11] 🔵 REF CLIMATE READ: h_22=-1680
 [S11] 🔵 REF CLIMATE READ: d_22=1960
 [S11] 🔵 REF CLIMATE READ: h_22=-1680
 [S11] REF TB%=50% → ref_i_97=59532.29, ref_k_97=-947.70
 [S11] Writing ref penalty: ref_i_97=59532.29, ref_k_97=-947.70
 [S11] 🎯 TGT CLIMATE READ: d_20=4600
 [S11] 🎯 TGT CLIMATE READ: d_21=196
 [S11] 🎯 TGT CLIMATE READ: d_20=4600
 [S11] 🎯 TGT CLIMATE READ: d_21=196
 [S11] 🎯 TGT CLIMATE READ: d_20=4600
 [S11] 🎯 TGT CLIMATE READ: d_21=196
 [S11] 🎯 TGT CLIMATE READ: d_20=4600
 [S11] 🎯 TGT CLIMATE READ: d_21=196
 [S11] 🎯 TGT CLIMATE READ: d_20=4600
 [S11] 🎯 TGT CLIMATE READ: d_21=196
 [S11] 🎯 TGT CLIMATE READ: d_20=4600
 [S11] 🎯 TGT CLIMATE READ: d_21=196
 [S11] 🎯 TGT CLIMATE READ: d_20=4600
 [S11] 🎯 TGT CLIMATE READ: d_21=196
 [S11] 🎯 TGT CLIMATE READ: d_20=4600
 [S11] 🎯 TGT CLIMATE READ: d_21=196
 [S11] 🎯 TGT CLIMATE READ: d_20=4600
 [S11] 🎯 TGT CLIMATE READ: d_21=196
2 [S11] 🎯 TGT CLIMATE READ: h_22=-1680
 S10: Target listener triggered by i_97, recalculating all.
 [S10 DEBUG] calculateAll() triggered in target mode - running both engines
 [S10REF] Utilization calc: ref_i_71=110562.1692, ref_i_79=10060.174319999998, totalGains=120622.34352
 [S10REF] Using utilization method: NRC 40%
 [S10REF] Final calc: utilizationFactor=0.4, usableGains=48248.937408
 [S10REF] Complete: g_80=0.4, g_81=0.9936571089244821, i_80=48248.937408, i_81=119857.24913377894
 [S10 DEBUG] Dual-engine calculations complete in target mode
 [S10DISPLAY] updateCalculatedDisplayValues() called in target mode
 [S10DISPLAY] Display (target) m_73 = 50.00
 [S10DISPLAY] Display (target) m_74 = 1.31
 [S10DISPLAY] Display (target) m_75 = 76.94
 [S10DISPLAY] Display (target) m_76 = 70.74
 [S10DISPLAY] Display (target) m_77 = 25.86
 [S10DISPLAY] Display (target) m_78 = 75.00
 [S10DISPLAY] Display (target) i_73 = 375.00
 [S10DISPLAY] Display (target) i_74 = 106.29
 [S10DISPLAY] Display (target) i_75 = 294.68
 [S10DISPLAY] Display (target) i_76 = 11,247.66
 [S10DISPLAY] Display (target) i_77 = 2,603.07
 [S10DISPLAY] Display (target) i_78 = 0.00
 [S10DISPLAY] Display (target) i_79 = 14,626.70
 [S10DISPLAY] Display (target) k_73 = 0.00
 [S10DISPLAY] Display (target) k_74 = 0.00
 [S10DISPLAY] Display (target) k_75 = 0.00
 [S10DISPLAY] Display (target) k_76 = 0.00
 [S10DISPLAY] Display (target) k_77 = 130.15
 [S10DISPLAY] Display (target) k_78 = 0.00
 [S10DISPLAY] Display (target) k_79 = 130.15
 [S10DISPLAY] Display (target) j_73 = 2.56%
 [S10DISPLAY] Display (target) j_74 = 0.73%
 [S10DISPLAY] Display (target) j_75 = 2.01%
 [S10DISPLAY] Display (target) j_76 = 76.90%
 [S10DISPLAY] Display (target) j_77 = 17.80%
 [S10DISPLAY] Display (target) j_78 = 0.00%
 [S10DISPLAY] Display (target) j_79 = 100.00%
 [S10DISPLAY] Display (target) l_73 = 0.00%
 [S10DISPLAY] Display (target) l_74 = 0.00%
 [S10DISPLAY] Display (target) l_75 = 0.00%
 [S10DISPLAY] Display (target) l_76 = 0.00%
 [S10DISPLAY] Display (target) l_77 = 100.00%
 [S10DISPLAY] Display (target) l_78 = 0.00%
 [S10DISPLAY] Display (target) l_79 = 100.00%
 [S10DISPLAY] Display (target) e_80 = 114,698.95
 [S10DISPLAY] Display (target) e_81 = 114,698.95
 [S10DISPLAY] g_80 DEBUG: mode=target, valueToDisplay=0.4
 [S10DISPLAY] Display (target) g_80 = 40.00%
 [S10DISPLAY] Display (target) g_81 = 94.59%
 [S10DISPLAY] Display (target) i_80 = 45,879.58
 [S10DISPLAY] Display (target) i_81 = 108,493.80
 [S10DISPLAY] Display (target) i_82 = 68,819.37
 S10: Target utilization factor dependency i_97 changed.
 [S10DISPLAY] updateCalculatedDisplayValues() called in target mode
 [S10DISPLAY] Display (target) m_73 = 50.00
 [S10DISPLAY] Display (target) m_74 = 1.31
 [S10DISPLAY] Display (target) m_75 = 76.94
 [S10DISPLAY] Display (target) m_76 = 70.74
 [S10DISPLAY] Display (target) m_77 = 25.86
 [S10DISPLAY] Display (target) m_78 = 75.00
 [S10DISPLAY] Display (target) i_73 = 375.00
 [S10DISPLAY] Display (target) i_74 = 106.29
 [S10DISPLAY] Display (target) i_75 = 294.68
 [S10DISPLAY] Display (target) i_76 = 11,247.66
 [S10DISPLAY] Display (target) i_77 = 2,603.07
 [S10DISPLAY] Display (target) i_78 = 0.00
 [S10DISPLAY] Display (target) i_79 = 14,626.70
 [S10DISPLAY] Display (target) k_73 = 0.00
 [S10DISPLAY] Display (target) k_74 = 0.00
 [S10DISPLAY] Display (target) k_75 = 0.00
 [S10DISPLAY] Display (target) k_76 = 0.00
 [S10DISPLAY] Display (target) k_77 = 130.15
 [S10DISPLAY] Display (target) k_78 = 0.00
 [S10DISPLAY] Display (target) k_79 = 130.15
 [S10DISPLAY] Display (target) j_73 = 2.56%
 [S10DISPLAY] Display (target) j_74 = 0.73%
 [S10DISPLAY] Display (target) j_75 = 2.01%
 [S10DISPLAY] Display (target) j_76 = 76.90%
 [S10DISPLAY] Display (target) j_77 = 17.80%
 [S10DISPLAY] Display (target) j_78 = 0.00%
 [S10DISPLAY] Display (target) j_79 = 100.00%
 [S10DISPLAY] Display (target) l_73 = 0.00%
 [S10DISPLAY] Display (target) l_74 = 0.00%
 [S10DISPLAY] Display (target) l_75 = 0.00%
 [S10DISPLAY] Display (target) l_76 = 0.00%
 [S10DISPLAY] Display (target) l_77 = 100.00%
 [S10DISPLAY] Display (target) l_78 = 0.00%
 [S10DISPLAY] Display (target) l_79 = 100.00%
 [S10DISPLAY] Display (target) e_80 = 114,698.95
 [S10DISPLAY] Display (target) e_81 = 114,698.95
 [S10DISPLAY] g_80 DEBUG: mode=target, valueToDisplay=0.4
 [S10DISPLAY] Display (target) g_80 = 40.00%
 [S10DISPLAY] Display (target) g_81 = 94.59%
 [S10DISPLAY] Display (target) i_80 = 45,879.58
 [S10DISPLAY] Display (target) i_81 = 108,493.80
 [S10DISPLAY] Display (target) i_82 = 68,819.37
 [Section13] 📡 🔥 d_127 (TED) listener triggered - S14 energy demand changed!
 [Section13] 🚀 CALCULATEALL TRIGGERED - Running dual-engine calculations...
 [Section13] 🎯 Mode captured at calculation start: target
 [Section13] 🔄 Starting Reference Model calculations...
 🔍 [S13-CONTEXT] Creating reference context: g_118="Volume Constant" from ReferenceState
 🔍 [S13-CONTEXT] ReferenceState.g_118="Volume Constant", TargetState.g_118="Volume by Schedule"
 [Section13] Running Reference Model calculations...
 [S13 CONTAMINATION DEBUG] calculateReferenceModel: Using system type = Electricity
 [S13] REF HEATING: system=Electricity, ted=251391.1974742337, afue=0.9, cop=1
 [S13 REF DEBUG] About to calculate with heating system: Electricity
 [S13 REF DEBUG] Will S13 publish ref_d_113=Electricity?
 🔍 [S13-VENT] calculateVentilationRates: ventMethod="Volume Constant", ach(l_118)=3.5, ratePerPerson(d_119)=8.33, volume(d_105)=8000
 🔍 [S13-VENT] isReferenceCalculation=true, hasContext=true
 🔍 [S13-VENT] calculateVentilationValues: ventMethod="Volume Constant", ach(l_118)=3.5, ratePerPerson(d_119)=8.33, volume(d_105)=8000
 🔍 [S13-VENT] Supporting values: occupants(d_63)=126, occupiedHours(i_63)=4380, totalHours(j_63)=8760
 🔍 [S13-VENT] Volume Constant calculation: ventRateLs = (3.5 * 8000) / 3.6 = 7777.777777777777
 ✅ [S13-VENT] Final d_120 result: 7777.777777777777 L/s (from method="Volume Constant", ach=3.5, volume=8000)
 [Section13] 🧊 COOLING CALC: mode=REF, coolingSystemType="No Cooling", heatingType="Electricity", isCoolingActive=false, coolingDemand=10192.893604542265
 [S13 CONTAMINATION DEBUG] storeReferenceResults called during reference mode
 [S13 CONTAMINATION DEBUG] Reference heating system: Electricity
 [S13 CONTAMINATION DEBUG] Target heating system: Heatpump
 [S13 CONTAMINATION DEBUG] Reference h_115 (gas volume): 0
 [S13 CONTAMINATION DEBUG] Reference f_115 (oil volume): 0
 [S13 CONTAMINATION DEBUG] Writing ref_f_115 = 0
 [S13 CONTAMINATION DEBUG] Writing ref_h_115 = 0
 [Section13] Reference results stored with ref_ prefix for downstream sections
 [S13 DEBUG] Total Reference results stored: 34
 [Section13] Reference Model calculations complete
 [Section13] ✅ Reference Model complete
 [Section13] 🔄 Starting Target Model calculations...
 🔍 [S13-CONTEXT] Creating target context: g_118="Volume by Schedule" from TargetState
 🔍 [S13-CONTEXT] TargetState.g_118="Volume by Schedule", ReferenceState.g_118="Volume Constant"
 [Section13] Running Target Model calculations...
 [S13] TGT HEATING: system=Heatpump, ted=120570.56545571995, afue=0.98, cop=3.663540445486518
 🔍 [S13-VENT] calculateVentilationRates: ventMethod="Volume by Schedule", ach(l_118)=3, ratePerPerson(d_119)=14, volume(d_105)=8000
 🔍 [S13-VENT] isReferenceCalculation=false, hasContext=true
 🔍 [S13-VENT] calculateVentilationValues: ventMethod="Volume by Schedule", ach(l_118)=3, ratePerPerson(d_119)=14, volume(d_105)=8000
 🔍 [S13-VENT] Supporting values: occupants(d_63)=126, occupiedHours(i_63)=4380, totalHours(j_63)=8760
 ✅ [S13-VENT] Final d_120 result: 3333.333333333333 L/s (from method="Volume by Schedule", ach=3, volume=8000)
 [Section13] 🧊 COOLING CALC: mode=TGT, coolingSystemType="Cooling", heatingType="Heatpump", isCoolingActive=true, coolingDemand=10192.893604542265
 [Section13] 🧊 COOLING RESULTS: d_117=3826.8214105081656, j_116=2.663540445486518, l_116=0, l_114=6366.0721940341
2 [S14 LISTENER] 🔥 d_122 changed - triggering calculateAll() + UI update
 [S15] 🎯 TGT S03 CLIMATE READ: h_23=22, d_23=-26, d_24=30, h_24=24
 [StateManager] 🎯 h_10 setValue: "93.59190466238991" (state: calculated)
 [StateManager] h_10 setValue stack trace:
setValue @ 4011-StateManager.js:346
calculateValues @ 4011-Section15.js:1832
calculateTargetModel @ 4011-Section15.js:1662
calculateAll @ 4011-Section15.js:1328
(anonymous) @ 4011-Section15.js:2121
(anonymous) @ 4011-StateManager.js:543
notifyListeners @ 4011-StateManager.js:541
setValue @ 4011-StateManager.js:419
setFieldValue @ 4011-Section13.js:636
calculateCoolingVentilation @ 4011-Section13.js:3272
calculateCoolingSystem @ 4011-Section13.js:3040
calculateTargetModel @ 4011-Section13.js:3560
calculateAll @ 4011-Section13.js:3403
calculateAndRefresh @ 4011-Section13.js:2368
(anonymous) @ 4011-Section13.js:2396
(anonymous) @ 4011-StateManager.js:543
notifyListeners @ 4011-StateManager.js:541
setValue @ 4011-StateManager.js:419
setCalculatedValue @ 4011-Section14.js:412
calculateValues @ 4011-Section14.js:1165
calculateTargetModel @ 4011-Section14.js:1123
calculateAll @ 4011-Section14.js:944
(anonymous) @ 4011-Section14.js:1420
(anonymous) @ 4011-StateManager.js:543
notifyListeners @ 4011-StateManager.js:541
setValue @ 4011-StateManager.js:419
setValue @ 4011-Section11.js:338
setCalculatedValue @ 4011-Section11.js:955
calculateThermalBridgePenalty @ 4011-Section11.js:1268
calculateTargetModel @ 4011-Section11.js:1571
calculateAll @ 4011-Section11.js:1693
(anonymous) @ 4011-StateManager.js:543
notifyListeners @ 4011-StateManager.js:541
setValue @ 4011-StateManager.js:419
setValue @ 4011-Section03.js:215
setFieldValue @ 4011-Section03.js:453
calculateGroundFacing @ 4011-Section03.js:1663
calculateTargetModel @ 4011-Section03.js:1722
calculateAll @ 4011-Section03.js:1691
(anonymous) @ 4011-Section03.js:2191
(anonymous) @ 4011-StateManager.js:543
notifyListeners @ 4011-StateManager.js:541
setValue @ 4011-StateManager.js:419
setValue @ 4011-Section09.js:191
(anonymous) @ 4011-Section09.js:2541
 [S15] 🎯 TGT S03 CLIMATE READ: h_23=22, d_23=-26, d_24=30, h_24=24
 [StateManager] 🎯 h_10 setValue: "93.59190466238991" (state: calculated)
 [StateManager] h_10 setValue stack trace:
setValue @ 4011-StateManager.js:346
calculateValues @ 4011-Section15.js:1832
calculateTargetModel @ 4011-Section15.js:1662
calculateAll @ 4011-Section15.js:1328
(anonymous) @ 4011-Section15.js:2121
(anonymous) @ 4011-StateManager.js:543
notifyListeners @ 4011-StateManager.js:541
setValue @ 4011-StateManager.js:419
setFieldValue @ 4011-Section13.js:636
calculateCoolingVentilation @ 4011-Section13.js:3272
calculateCoolingSystem @ 4011-Section13.js:3040
calculateTargetModel @ 4011-Section13.js:3560
calculateAll @ 4011-Section13.js:3403
calculateAndRefresh @ 4011-Section13.js:2368
(anonymous) @ 4011-Section13.js:2396
(anonymous) @ 4011-StateManager.js:543
notifyListeners @ 4011-StateManager.js:541
setValue @ 4011-StateManager.js:419
setCalculatedValue @ 4011-Section14.js:412
calculateValues @ 4011-Section14.js:1165
calculateTargetModel @ 4011-Section14.js:1123
calculateAll @ 4011-Section14.js:944
(anonymous) @ 4011-Section14.js:1420
(anonymous) @ 4011-StateManager.js:543
notifyListeners @ 4011-StateManager.js:541
setValue @ 4011-StateManager.js:419
setValue @ 4011-Section11.js:338
setCalculatedValue @ 4011-Section11.js:955
calculateThermalBridgePenalty @ 4011-Section11.js:1268
calculateTargetModel @ 4011-Section11.js:1571
calculateAll @ 4011-Section11.js:1693
(anonymous) @ 4011-StateManager.js:543
notifyListeners @ 4011-StateManager.js:541
setValue @ 4011-StateManager.js:419
setValue @ 4011-Section03.js:215
setFieldValue @ 4011-Section03.js:453
calculateGroundFacing @ 4011-Section03.js:1663
calculateTargetModel @ 4011-Section03.js:1722
calculateAll @ 4011-Section03.js:1691
(anonymous) @ 4011-Section03.js:2191
(anonymous) @ 4011-StateManager.js:543
notifyListeners @ 4011-StateManager.js:541
setValue @ 4011-StateManager.js:419
setValue @ 4011-Section09.js:191
(anonymous) @ 4011-Section09.js:2541
 [S15] 🎯 TGT S03 CLIMATE READ: h_23=22, d_23=-26, d_24=30, h_24=24
 [S04] S15 target electricity changed: d_136
 [S04] Starting dual-engine Excel-compliant calculations
4011-Section04.js:1018 [S04] Row 32 Subtotals - F32: 132938, G32: 6779.838, J32: 133956.24295730147, K32: 6831.768390822375
4011-Section04.js:94 [S04] j_32 update: 133956.24295730147
4011-Section01.js:1250 [S01] j_32 listener: 133574.36633416289 → 133956.24295730147
4011-Section01.js:1251 [S01] 🕐 j_32 listener timing: StateManager current j_32 = 133956.24295730147
24011-Section05.js:266 🔄 [S05] updateCalculatedDisplayValues: mode=target
4011-Section15.js:1750 [S15] 🎯 TGT S03 CLIMATE READ: h_23=22, d_23=-26, d_24=30, h_24=24
4011-StateManager.js:343 [StateManager] 🎯 h_10 setValue: "93.85947516627064" (state: calculated)
4011-StateManager.js:346 [StateManager] h_10 setValue stack trace:
setValue @ 4011-StateManager.js:346
calculateValues @ 4011-Section15.js:1832
calculateTargetModel @ 4011-Section15.js:1662
calculateAll @ 4011-Section15.js:1328
(anonymous) @ 4011-Section15.js:2121
(anonymous) @ 4011-StateManager.js:543
notifyListeners @ 4011-StateManager.js:541
setValue @ 4011-StateManager.js:419
setCalculatedValue @ 4011-Section04.js:96
calculateRow32 @ 4011-Section04.js:1026
calculateTargetModel @ 4011-Section04.js:1620
calculateAll @ 4011-Section04.js:1586
(anonymous) @ 4011-Section04.js:2483
(anonymous) @ 4011-StateManager.js:543
notifyListeners @ 4011-StateManager.js:541
setValue @ 4011-StateManager.js:419
setTargetValue @ 4011-Section15.js:146
calculateValues @ 4011-Section15.js:1810
calculateTargetModel @ 4011-Section15.js:1662
calculateAll @ 4011-Section15.js:1328
(anonymous) @ 4011-Section15.js:2121
(anonymous) @ 4011-StateManager.js:543
notifyListeners @ 4011-StateManager.js:541
setValue @ 4011-StateManager.js:419
setFieldValue @ 4011-Section13.js:636
updateTargetModelDOMValues @ 4011-Section13.js:3614
calculateTargetModel @ 4011-Section13.js:3570
calculateAll @ 4011-Section13.js:3403
calculateAndRefresh @ 4011-Section13.js:2368
(anonymous) @ 4011-Section13.js:2396
(anonymous) @ 4011-StateManager.js:543
notifyListeners @ 4011-StateManager.js:541
setValue @ 4011-StateManager.js:419
setCalculatedValue @ 4011-Section14.js:412
calculateValues @ 4011-Section14.js:1165
calculateTargetModel @ 4011-Section14.js:1123
calculateAll @ 4011-Section14.js:944
(anonymous) @ 4011-Section14.js:1420
(anonymous) @ 4011-StateManager.js:543
notifyListeners @ 4011-StateManager.js:541
setValue @ 4011-StateManager.js:419
setValue @ 4011-Section11.js:338
setCalculatedValue @ 4011-Section11.js:955
calculateThermalBridgePenalty @ 4011-Section11.js:1268
calculateTargetModel @ 4011-Section11.js:1571
calculateAll @ 4011-Section11.js:1693
(anonymous) @ 4011-StateManager.js:543
notifyListeners @ 4011-StateManager.js:541
setValue @ 4011-StateManager.js:419
setValue @ 4011-Section03.js:215
setFieldValue @ 4011-Section03.js:453
calculateGroundFacing @ 4011-Section03.js:1663
calculateTargetModel @ 4011-Section03.js:1722
calculateAll @ 4011-Section03.js:1691
(anonymous) @ 4011-Section03.js:2191
(anonymous) @ 4011-StateManager.js:543
notifyListeners @ 4011-StateManager.js:541
setValue @ 4011-StateManager.js:419
setValue @ 4011-Section09.js:191
(anonymous) @ 4011-Section09.js:2541
4011-Section15.js:1750 [S15] 🎯 TGT S03 CLIMATE READ: h_23=22, d_23=-26, d_24=30, h_24=24
4011-StateManager.js:343 [StateManager] 🎯 h_10 setValue: "93.85947516627064" (state: calculated)
4011-StateManager.js:346 [StateManager] h_10 setValue stack trace:
setValue @ 4011-StateManager.js:346
calculateValues @ 4011-Section15.js:1832
calculateTargetModel @ 4011-Section15.js:1662
calculateAll @ 4011-Section15.js:1328
(anonymous) @ 4011-Section15.js:2121
(anonymous) @ 4011-StateManager.js:543
notifyListeners @ 4011-StateManager.js:541
setValue @ 4011-StateManager.js:419
calculateValues @ 4011-Section15.js:1832
calculateTargetModel @ 4011-Section15.js:1662
calculateAll @ 4011-Section15.js:1328
(anonymous) @ 4011-Section15.js:2121
(anonymous) @ 4011-StateManager.js:543
notifyListeners @ 4011-StateManager.js:541
setValue @ 4011-StateManager.js:419
setCalculatedValue @ 4011-Section04.js:96
calculateRow32 @ 4011-Section04.js:1026
calculateTargetModel @ 4011-Section04.js:1620
calculateAll @ 4011-Section04.js:1586
(anonymous) @ 4011-Section04.js:2483
(anonymous) @ 4011-StateManager.js:543
notifyListeners @ 4011-StateManager.js:541
setValue @ 4011-StateManager.js:419
setTargetValue @ 4011-Section15.js:146
calculateValues @ 4011-Section15.js:1810
calculateTargetModel @ 4011-Section15.js:1662
calculateAll @ 4011-Section15.js:1328
(anonymous) @ 4011-Section15.js:2121
(anonymous) @ 4011-StateManager.js:543
notifyListeners @ 4011-StateManager.js:541
setValue @ 4011-StateManager.js:419
setFieldValue @ 4011-Section13.js:636
updateTargetModelDOMValues @ 4011-Section13.js:3614
calculateTargetModel @ 4011-Section13.js:3570
calculateAll @ 4011-Section13.js:3403
calculateAndRefresh @ 4011-Section13.js:2368
(anonymous) @ 4011-Section13.js:2396
(anonymous) @ 4011-StateManager.js:543
notifyListeners @ 4011-StateManager.js:541
setValue @ 4011-StateManager.js:419
setCalculatedValue @ 4011-Section14.js:412
calculateValues @ 4011-Section14.js:1165
calculateTargetModel @ 4011-Section14.js:1123
calculateAll @ 4011-Section14.js:944
(anonymous) @ 4011-Section14.js:1420
(anonymous) @ 4011-StateManager.js:543
notifyListeners @ 4011-StateManager.js:541
setValue @ 4011-StateManager.js:419
setValue @ 4011-Section11.js:338
setCalculatedValue @ 4011-Section11.js:955
calculateThermalBridgePenalty @ 4011-Section11.js:1268
calculateTargetModel @ 4011-Section11.js:1571
calculateAll @ 4011-Section11.js:1693
(anonymous) @ 4011-StateManager.js:543
notifyListeners @ 4011-StateManager.js:541
setValue @ 4011-StateManager.js:419
setValue @ 4011-Section03.js:215
setFieldValue @ 4011-Section03.js:453
calculateGroundFacing @ 4011-Section03.js:1663
calculateTargetModel @ 4011-Section03.js:1722
calculateAll @ 4011-Section03.js:1691
(anonymous) @ 4011-Section03.js:2191
(anonymous) @ 4011-StateManager.js:543
notifyListeners @ 4011-StateManager.js:541
setValue @ 4011-StateManager.js:419
setValue @ 4011-Section09.js:191
(anonymous) @ 4011-Section09.js:2541
4011-Section15.js:1750 [S15] 🎯 TGT S03 CLIMATE READ: h_23=22, d_23=-26, d_24=30, h_24=24
4011-StateManager.js:343 [StateManager] 🎯 h_10 setValue: "93.85947516627064" (state: calculated)
4011-StateManager.js:346 [StateManager] h_10 setValue stack trace:
setValue @ 4011-StateManager.js:346
calculateValues @ 4011-Section15.js:1832
calculateTargetModel @ 4011-Section15.js:1662
calculateAll @ 4011-Section15.js:1328
(anonymous) @ 4011-Section15.js:2121
(anonymous) @ 4011-StateManager.js:543
notifyListeners @ 4011-StateManager.js:541
setValue @ 4011-StateManager.js:419
calculateValues @ 4011-Section15.js:1832
calculateTargetModel @ 4011-Section15.js:1662
calculateAll @ 4011-Section15.js:1328
(anonymous) @ 4011-Section15.js:2121
(anonymous) @ 4011-StateManager.js:543
notifyListeners @ 4011-StateManager.js:541
setValue @ 4011-StateManager.js:419
setCalculatedValue @ 4011-Section04.js:96
calculateRow32 @ 4011-Section04.js:1026
calculateTargetModel @ 4011-Section04.js:1620
calculateAll @ 4011-Section04.js:1586
(anonymous) @ 4011-Section04.js:2483
(anonymous) @ 4011-StateManager.js:543
notifyListeners @ 4011-StateManager.js:541
setValue @ 4011-StateManager.js:419
setTargetValue @ 4011-Section15.js:146
calculateValues @ 4011-Section15.js:1810
calculateTargetModel @ 4011-Section15.js:1662
calculateAll @ 4011-Section15.js:1328
(anonymous) @ 4011-Section15.js:2121
(anonymous) @ 4011-StateManager.js:543
notifyListeners @ 4011-StateManager.js:541
setValue @ 4011-StateManager.js:419
setFieldValue @ 4011-Section13.js:636
updateTargetModelDOMValues @ 4011-Section13.js:3614
calculateTargetModel @ 4011-Section13.js:3570
calculateAll @ 4011-Section13.js:3403
calculateAndRefresh @ 4011-Section13.js:2368
(anonymous) @ 4011-Section13.js:2396
(anonymous) @ 4011-StateManager.js:543
notifyListeners @ 4011-StateManager.js:541
setValue @ 4011-StateManager.js:419
setCalculatedValue @ 4011-Section14.js:412
calculateValues @ 4011-Section14.js:1165
calculateTargetModel @ 4011-Section14.js:1123
calculateAll @ 4011-Section14.js:944
(anonymous) @ 4011-Section14.js:1420
(anonymous) @ 4011-StateManager.js:543
notifyListeners @ 4011-StateManager.js:541
setValue @ 4011-StateManager.js:419
setValue @ 4011-Section11.js:338
setCalculatedValue @ 4011-Section11.js:955
calculateThermalBridgePenalty @ 4011-Section11.js:1268
calculateTargetModel @ 4011-Section11.js:1571
calculateAll @ 4011-Section11.js:1693
(anonymous) @ 4011-StateManager.js:543
notifyListeners @ 4011-StateManager.js:541
setValue @ 4011-StateManager.js:419
setValue @ 4011-Section03.js:215
setFieldValue @ 4011-Section03.js:453
calculateGroundFacing @ 4011-Section03.js:1663
calculateTargetModel @ 4011-Section03.js:1722
calculateAll @ 4011-Section03.js:1691
(anonymous) @ 4011-Section03.js:2191
(anonymous) @ 4011-StateManager.js:543
notifyListeners @ 4011-StateManager.js:541
setValue @ 4011-StateManager.js:419
setValue @ 4011-Section09.js:191
(anonymous) @ 4011-Section09.js:2541
4011-Section15.js:1750 [S15] 🎯 TGT S03 CLIMATE READ: h_23=22, d_23=-26, d_24=30, h_24=24
 [StateManager] 🎯 h_10 setValue: "93.85947516627064" (state: calculated)
 [StateManager] h_10 setValue stack trace:
setValue @ 4011-StateManager.js:346
calculateValues @ 4011-Section15.js:1832
calculateTargetModel @ 4011-Section15.js:1662
calculateAll @ 4011-Section15.js:1328
(anonymous) @ 4011-Section15.js:2121
(anonymous) @ 4011-StateManager.js:543
notifyListeners @ 4011-StateManager.js:541
setValue @ 4011-StateManager.js:419
setCalculatedValue @ 4011-Section04.js:96
calculateRow32 @ 4011-Section04.js:1026
calculateTargetModel @ 4011-Section04.js:1620
calculateAll @ 4011-Section04.js:1586
(anonymous) @ 4011-Section04.js:2483
(anonymous) @ 4011-StateManager.js:543
notifyListeners @ 4011-StateManager.js:541
setValue @ 4011-StateManager.js:419
setTargetValue @ 4011-Section15.js:146
calculateValues @ 4011-Section15.js:1810
calculateTargetModel @ 4011-Section15.js:1662
calculateAll @ 4011-Section15.js:1328
(anonymous) @ 4011-Section15.js:2121
(anonymous) @ 4011-StateManager.js:543
notifyListeners @ 4011-StateManager.js:541
setValue @ 4011-StateManager.js:419
setFieldValue @ 4011-Section13.js:636
updateTargetModelDOMValues @ 4011-Section13.js:3614
calculateTargetModel @ 4011-Section13.js:3570
calculateAll @ 4011-Section13.js:3403
calculateAndRefresh @ 4011-Section13.js:2368
(anonymous) @ 4011-Section13.js:2396
(anonymous) @ 4011-StateManager.js:543
notifyListeners @ 4011-StateManager.js:541
setValue @ 4011-StateManager.js:419
setCalculatedValue @ 4011-Section14.js:412
calculateValues @ 4011-Section14.js:1165
calculateTargetModel @ 4011-Section14.js:1123
calculateAll @ 4011-Section14.js:944
(anonymous) @ 4011-Section14.js:1420
(anonymous) @ 4011-StateManager.js:543
notifyListeners @ 4011-StateManager.js:541
setValue @ 4011-StateManager.js:419
setValue @ 4011-Section11.js:338
setCalculatedValue @ 4011-Section11.js:955
calculateThermalBridgePenalty @ 4011-Section11.js:1268
calculateTargetModel @ 4011-Section11.js:1571
calculateAll @ 4011-Section11.js:1693
(anonymous) @ 4011-StateManager.js:543
notifyListeners @ 4011-StateManager.js:541
setValue @ 4011-StateManager.js:419
setValue @ 4011-Section03.js:215
setFieldValue @ 4011-Section03.js:453
calculateGroundFacing @ 4011-Section03.js:1663
calculateTargetModel @ 4011-Section03.js:1722
calculateAll @ 4011-Section03.js:1691
(anonymous) @ 4011-Section03.js:2191
(anonymous) @ 4011-StateManager.js:543
notifyListeners @ 4011-StateManager.js:541
setValue @ 4011-StateManager.js:419
setValue @ 4011-Section09.js:191
(anonymous) @ 4011-Section09.js:2541
 [S04] Row 32 Subtotals - F32: 132938, G32: 6779.838, J32: 301986.051518286, K32: 15401.288627432587
 [S04] Reference model calculations complete
 [S04DB] storeReference: ref_j_32=301986.051518286, ref_k_32=15401.288627432587 | current target j_32=133956.24295730147, k_32=6831.768390822375
 [S04] 🔄 Updating calculated display values for target mode
 [S04DB] displayContext mode=target j_32=133956.24295730147 ref_j_32=301986.051518286 k_32=6831.768390822375 ref_k_32=15401.288627432587
 [S04 DEBUG] Target mode - j_32: 133956.24295730147
 [S04 DEBUG] Target mode - k_32: 6831.768390822375
 [S04 DEBUG] Target mode - l_27: 51
 [S04] Calculated display values updated for target mode
 [S04] Dual-engine calculations completed successfully
 [S04] 🔄 Updating calculated display values for target mode
 [S04DB] displayContext mode=target j_32=133956.24295730147 ref_j_32=301986.051518286 k_32=6831.768390822375 ref_k_32=15401.288627432587
 [S04 DEBUG] Target mode - j_32: 133956.24295730147
 [S04 DEBUG] Target mode - k_32: 6831.768390822375
 [S04 DEBUG] Target mode - l_27: 51
 [S04] Calculated display values updated for target mode
 [StateManager] 🎯 h_10 setValue: "93.85947516627064" (state: calculated)
 [StateManager] h_10 setValue stack trace:
setValue @ 4011-StateManager.js:346
calculateValues @ 4011-Section15.js:1832
calculateTargetModel @ 4011-Section15.js:1662
calculateAll @ 4011-Section15.js:1328
(anonymous) @ 4011-Section15.js:2121
(anonymous) @ 4011-StateManager.js:543
notifyListeners @ 4011-StateManager.js:541
setValue @ 4011-StateManager.js:419
setFieldValue @ 4011-Section13.js:636
updateTargetModelDOMValues @ 4011-Section13.js:3614
calculateTargetModel @ 4011-Section13.js:3570
calculateAll @ 4011-Section13.js:3403
calculateAndRefresh @ 4011-Section13.js:2368
(anonymous) @ 4011-Section13.js:2396
(anonymous) @ 4011-StateManager.js:543
notifyListeners @ 4011-StateManager.js:541
setValue @ 4011-StateManager.js:419
setCalculatedValue @ 4011-Section14.js:412
calculateValues @ 4011-Section14.js:1165
calculateTargetModel @ 4011-Section14.js:1123
calculateAll @ 4011-Section14.js:944
(anonymous) @ 4011-Section14.js:1420
(anonymous) @ 4011-StateManager.js:543
notifyListeners @ 4011-StateManager.js:541
setValue @ 4011-StateManager.js:419
setValue @ 4011-Section11.js:338
setCalculatedValue @ 4011-Section11.js:955
calculateThermalBridgePenalty @ 4011-Section11.js:1268
calculateTargetModel @ 4011-Section11.js:1571
calculateAll @ 4011-Section11.js:1693
(anonymous) @ 4011-StateManager.js:543
notifyListeners @ 4011-StateManager.js:541
setValue @ 4011-StateManager.js:419
setValue @ 4011-Section03.js:215
setFieldValue @ 4011-Section03.js:453
calculateGroundFacing @ 4011-Section03.js:1663
calculateTargetModel @ 4011-Section03.js:1722
calculateAll @ 4011-Section03.js:1691
(anonymous) @ 4011-Section03.js:2191
(anonymous) @ 4011-StateManager.js:543
notifyListeners @ 4011-StateManager.js:541
setValue @ 4011-StateManager.js:419
setValue @ 4011-Section09.js:191
(anonymous) @ 4011-Section09.js:2541
 [S15] 🎯 TGT S03 CLIMATE READ: h_23=22, d_23=-26, d_24=30, h_24=24
 [StateManager] 🎯 h_10 setValue: "93.85947516627064" (state: calculated)
 [StateManager] h_10 setValue stack trace:
setValue @ 4011-StateManager.js:346
calculateValues @ 4011-Section15.js:1832
calculateTargetModel @ 4011-Section15.js:1662
calculateAll @ 4011-Section15.js:1328
(anonymous) @ 4011-Section15.js:2121
(anonymous) @ 4011-StateManager.js:543
notifyListeners @ 4011-StateManager.js:541
setValue @ 4011-StateManager.js:419
setFieldValue @ 4011-Section13.js:636
updateTargetModelDOMValues @ 4011-Section13.js:3614
calculateTargetModel @ 4011-Section13.js:3570
calculateAll @ 4011-Section13.js:3403
calculateAndRefresh @ 4011-Section13.js:2368
(anonymous) @ 4011-Section13.js:2396
(anonymous) @ 4011-StateManager.js:543
notifyListeners @ 4011-StateManager.js:541
setValue @ 4011-StateManager.js:419
setCalculatedValue @ 4011-Section14.js:412
calculateValues @ 4011-Section14.js:1165
calculateTargetModel @ 4011-Section14.js:1123
calculateAll @ 4011-Section14.js:944
(anonymous) @ 4011-Section14.js:1420
(anonymous) @ 4011-StateManager.js:543
notifyListeners @ 4011-StateManager.js:541
setValue @ 4011-StateManager.js:419
setValue @ 4011-Section11.js:338
setCalculatedValue @ 4011-Section11.js:955
calculateThermalBridgePenalty @ 4011-Section11.js:1268
calculateTargetModel @ 4011-Section11.js:1571
calculateAll @ 4011-Section11.js:1693
(anonymous) @ 4011-StateManager.js:543
notifyListeners @ 4011-StateManager.js:541
setValue @ 4011-StateManager.js:419
setValue @ 4011-Section03.js:215
setFieldValue @ 4011-Section03.js:453
calculateGroundFacing @ 4011-Section03.js:1663
calculateTargetModel @ 4011-Section03.js:1722
calculateAll @ 4011-Section03.js:1691
(anonymous) @ 4011-Section03.js:2191
(anonymous) @ 4011-StateManager.js:543
notifyListeners @ 4011-StateManager.js:541
setValue @ 4011-StateManager.js:419
setValue @ 4011-Section09.js:191
(anonymous) @ 4011-Section09.js:2541
2 [S14 LISTENER] 🔥 d_122 changed - triggering calculateAll() + UI update
 [S15] 🎯 TGT S03 CLIMATE READ: h_23=22, d_23=-26, d_24=30, h_24=24
 [StateManager] 🎯 h_10 setValue: "93.85947516627064" (state: calculated)
 [StateManager] h_10 setValue stack trace:
setValue @ 4011-StateManager.js:346
calculateValues @ 4011-Section15.js:1832
calculateTargetModel @ 4011-Section15.js:1662
calculateAll @ 4011-Section15.js:1328
(anonymous) @ 4011-Section15.js:2121
(anonymous) @ 4011-StateManager.js:543
notifyListeners @ 4011-StateManager.js:541
setValue @ 4011-StateManager.js:419
setFieldValue @ 4011-Section13.js:636
updateTargetModelDOMValues @ 4011-Section13.js:3684
calculateTargetModel @ 4011-Section13.js:3570
calculateAll @ 4011-Section13.js:3403
calculateAndRefresh @ 4011-Section13.js:2368
(anonymous) @ 4011-Section13.js:2396
(anonymous) @ 4011-StateManager.js:543
notifyListeners @ 4011-StateManager.js:541
setValue @ 4011-StateManager.js:419
setCalculatedValue @ 4011-Section14.js:412
calculateValues @ 4011-Section14.js:1165
calculateTargetModel @ 4011-Section14.js:1123
calculateAll @ 4011-Section14.js:944
(anonymous) @ 4011-Section14.js:1420
(anonymous) @ 4011-StateManager.js:543
notifyListeners @ 4011-StateManager.js:541
setValue @ 4011-StateManager.js:419
setValue @ 4011-Section11.js:338
setCalculatedValue @ 4011-Section11.js:955
calculateThermalBridgePenalty @ 4011-Section11.js:1268
calculateTargetModel @ 4011-Section11.js:1571
calculateAll @ 4011-Section11.js:1693
(anonymous) @ 4011-StateManager.js:543
notifyListeners @ 4011-StateManager.js:541
setValue @ 4011-StateManager.js:419
setValue @ 4011-Section03.js:215
setFieldValue @ 4011-Section03.js:453
calculateGroundFacing @ 4011-Section03.js:1663
calculateTargetModel @ 4011-Section03.js:1722
calculateAll @ 4011-Section03.js:1691
(anonymous) @ 4011-Section03.js:2191
(anonymous) @ 4011-StateManager.js:543
notifyListeners @ 4011-StateManager.js:541
setValue @ 4011-StateManager.js:419
setValue @ 4011-Section09.js:191
(anonymous) @ 4011-Section09.js:2541
 [S15] 🎯 TGT S03 CLIMATE READ: h_23=22, d_23=-26, d_24=30, h_24=24
 [StateManager] 🎯 h_10 setValue: "93.85947516627064" (state: calculated)
 [StateManager] h_10 setValue stack trace:
setValue @ 4011-StateManager.js:346
calculateValues @ 4011-Section15.js:1832
calculateTargetModel @ 4011-Section15.js:1662
calculateAll @ 4011-Section15.js:1328
(anonymous) @ 4011-Section15.js:2121
(anonymous) @ 4011-StateManager.js:543
notifyListeners @ 4011-StateManager.js:541
setValue @ 4011-StateManager.js:419
setFieldValue @ 4011-Section13.js:636
updateTargetModelDOMValues @ 4011-Section13.js:3684
calculateTargetModel @ 4011-Section13.js:3570
calculateAll @ 4011-Section13.js:3403
calculateAndRefresh @ 4011-Section13.js:2368
(anonymous) @ 4011-Section13.js:2396
(anonymous) @ 4011-StateManager.js:543
notifyListeners @ 4011-StateManager.js:541
setValue @ 4011-StateManager.js:419
setCalculatedValue @ 4011-Section14.js:412
calculateValues @ 4011-Section14.js:1165
calculateTargetModel @ 4011-Section14.js:1123
calculateAll @ 4011-Section14.js:944
(anonymous) @ 4011-Section14.js:1420
(anonymous) @ 4011-StateManager.js:543
notifyListeners @ 4011-StateManager.js:541
setValue @ 4011-StateManager.js:419
setValue @ 4011-Section11.js:338
setCalculatedValue @ 4011-Section11.js:955
calculateThermalBridgePenalty @ 4011-Section11.js:1268
calculateTargetModel @ 4011-Section11.js:1571
calculateAll @ 4011-Section11.js:1693
(anonymous) @ 4011-StateManager.js:543
notifyListeners @ 4011-StateManager.js:541
setValue @ 4011-StateManager.js:419
setValue @ 4011-Section03.js:215
setFieldValue @ 4011-Section03.js:453
calculateGroundFacing @ 4011-Section03.js:1663
calculateTargetModel @ 4011-Section03.js:1722
calculateAll @ 4011-Section03.js:1691
(anonymous) @ 4011-Section03.js:2191
(anonymous) @ 4011-StateManager.js:543
notifyListeners @ 4011-StateManager.js:541
setValue @ 4011-StateManager.js:419
setValue @ 4011-Section09.js:191
(anonymous) @ 4011-Section09.js:2541
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
 🔍 [S13-CONTEXT] Creating reference context: g_118="Volume Constant" from ReferenceState
 🔍 [S13-CONTEXT] ReferenceState.g_118="Volume Constant", TargetState.g_118="Volume by Schedule"
 [Section13] Running Reference Model calculations...
 [S13 CONTAMINATION DEBUG] calculateReferenceModel: Using system type = Electricity
 [S13] REF HEATING: system=Electricity, ted=251391.1974742337, afue=0.9, cop=1
 [S13 REF DEBUG] About to calculate with heating system: Electricity
 [S13 REF DEBUG] Will S13 publish ref_d_113=Electricity?
 🔍 [S13-VENT] calculateVentilationRates: ventMethod="Volume Constant", ach(l_118)=3.5, ratePerPerson(d_119)=8.33, volume(d_105)=8000
 🔍 [S13-VENT] isReferenceCalculation=true, hasContext=true
 🔍 [S13-VENT] calculateVentilationValues: ventMethod="Volume Constant", ach(l_118)=3.5, ratePerPerson(d_119)=8.33, volume(d_105)=8000
 🔍 [S13-VENT] Supporting values: occupants(d_63)=126, occupiedHours(i_63)=4380, totalHours(j_63)=8760
 🔍 [S13-VENT] Volume Constant calculation: ventRateLs = (3.5 * 8000) / 3.6 = 7777.777777777777
 ✅ [S13-VENT] Final d_120 result: 7777.777777777777 L/s (from method="Volume Constant", ach=3.5, volume=8000)
 [Section13] 🧊 COOLING CALC: mode=REF, coolingSystemType="No Cooling", heatingType="Electricity", isCoolingActive=false, coolingDemand=9572.242304946165
 [S13 CONTAMINATION DEBUG] storeReferenceResults called during reference mode
 [S13 CONTAMINATION DEBUG] Reference heating system: Electricity
 [S13 CONTAMINATION DEBUG] Target heating system: Heatpump
 [S13 CONTAMINATION DEBUG] Reference h_115 (gas volume): 0
 [S13 CONTAMINATION DEBUG] Reference f_115 (oil volume): 0
 [S13 CONTAMINATION DEBUG] Writing ref_f_115 = 0
 [S13 CONTAMINATION DEBUG] Writing ref_h_115 = 0
 [Section13] Reference results stored with ref_ prefix for downstream sections
 [S13 DEBUG] Total Reference results stored: 34
 [Section13] Reference Model calculations complete
 [Section13] ✅ Reference Model complete
 [Section13] 🔄 Starting Target Model calculations...
 🔍 [S13-CONTEXT] Creating target context: g_118="Volume by Schedule" from TargetState
 🔍 [S13-CONTEXT] TargetState.g_118="Volume by Schedule", ReferenceState.g_118="Volume Constant"
 [Section13] Running Target Model calculations...
 [S13] TGT HEATING: system=Heatpump, ted=120570.56545571995, afue=0.98, cop=3.663540445486518
 🔍 [S13-VENT] calculateVentilationRates: ventMethod="Volume by Schedule", ach(l_118)=3, ratePerPerson(d_119)=14, volume(d_105)=8000
 🔍 [S13-VENT] isReferenceCalculation=false, hasContext=true
 🔍 [S13-VENT] calculateVentilationValues: ventMethod="Volume by Schedule", ach(l_118)=3, ratePerPerson(d_119)=14, volume(d_105)=8000
 🔍 [S13-VENT] Supporting values: occupants(d_63)=126, occupiedHours(i_63)=4380, totalHours(j_63)=8760
 ✅ [S13-VENT] Final d_120 result: 3333.333333333333 L/s (from method="Volume by Schedule", ach=3, volume=8000)
 [Section13] 🧊 COOLING CALC: mode=TGT, coolingSystemType="Cooling", heatingType="Heatpump", isCoolingActive=true, coolingDemand=9572.242304946165
 [S15] 🎯 TGT S03 CLIMATE READ: h_23=22, d_23=-26, d_24=30, h_24=24
 [S04] S15 target electricity changed: d_136
 [S04] Starting dual-engine Excel-compliant calculations
 [S04] Row 32 Subtotals - F32: 132938, G32: 6779.838, J32: 133723.22554596543, K32: 6819.8845028442365
 [S04] j_32 update: 133723.22554596543
 [S01] j_32 listener: 133956.24295730147 → 133723.22554596543
 [S01] 🕐 j_32 listener timing: StateManager current j_32 = 133723.22554596543
2 🔄 [S05] updateCalculatedDisplayValues: mode=target
 [S15] 🎯 TGT S03 CLIMATE READ: h_23=22, d_23=-26, d_24=30, h_24=24
 [StateManager] 🎯 h_10 setValue: "93.69620624016636" (state: calculated)
 [StateManager] h_10 setValue stack trace:
setValue @ 4011-StateManager.js:346
calculateValues @ 4011-Section15.js:1832
calculateTargetModel @ 4011-Section15.js:1662
calculateAll @ 4011-Section15.js:1328
(anonymous) @ 4011-Section15.js:2121
(anonymous) @ 4011-StateManager.js:543
notifyListeners @ 4011-StateManager.js:541
setValue @ 4011-StateManager.js:419
setCalculatedValue @ 4011-Section04.js:96
calculateRow32 @ 4011-Section04.js:1026
calculateTargetModel @ 4011-Section04.js:1620
calculateAll @ 4011-Section04.js:1586
(anonymous) @ 4011-Section04.js:2483
(anonymous) @ 4011-StateManager.js:543
notifyListeners @ 4011-StateManager.js:541
setValue @ 4011-StateManager.js:419
setTargetValue @ 4011-Section15.js:146
calculateValues @ 4011-Section15.js:1810
calculateTargetModel @ 4011-Section15.js:1662
calculateAll @ 4011-Section15.js:1328
(anonymous) @ 4011-Section15.js:2121
(anonymous) @ 4011-StateManager.js:543
notifyListeners @ 4011-StateManager.js:541
setValue @ 4011-StateManager.js:419
setFieldValue @ 4011-Section13.js:636
calculateCoolingSystem @ 4011-Section13.js:3030
calculateTargetModel @ 4011-Section13.js:3560
calculateAll @ 4011-Section13.js:3403
calculateAndRefresh @ 4011-Section13.js:2368
(anonymous) @ 4011-Section13.js:2396
(anonymous) @ 4011-StateManager.js:543
notifyListeners @ 4011-StateManager.js:541
setValue @ 4011-StateManager.js:419
setCalculatedValue @ 4011-Section14.js:412
calculateValues @ 4011-Section14.js:1165
calculateTargetModel @ 4011-Section14.js:1123
calculateAll @ 4011-Section14.js:944
(anonymous) @ 4011-Section14.js:1420
(anonymous) @ 4011-StateManager.js:543
notifyListeners @ 4011-StateManager.js:541
setValue @ 4011-StateManager.js:419
setValue @ 4011-Section11.js:338
setCalculatedValue @ 4011-Section11.js:955
calculateThermalBridgePenalty @ 4011-Section11.js:1268
calculateTargetModel @ 4011-Section11.js:1571
calculateAll @ 4011-Section11.js:1693
(anonymous) @ 4011-StateManager.js:543
notifyListeners @ 4011-StateManager.js:541
setValue @ 4011-StateManager.js:419
setValue @ 4011-Section03.js:215
setFieldValue @ 4011-Section03.js:453
calculateGroundFacing @ 4011-Section03.js:1663
calculateTargetModel @ 4011-Section03.js:1722
calculateAll @ 4011-Section03.js:1691
(anonymous) @ 4011-Section03.js:2191
(anonymous) @ 4011-StateManager.js:543
notifyListeners @ 4011-StateManager.js:541
setValue @ 4011-StateManager.js:419
setValue @ 4011-Section09.js:191
(anonymous) @ 4011-Section09.js:2541
 [S15] 🎯 TGT S03 CLIMATE READ: h_23=22, d_23=-26, d_24=30, h_24=24
 [StateManager] 🎯 h_10 setValue: "93.69620624016636" (state: calculated)
 [StateManager] h_10 setValue stack trace:
setValue @ 4011-StateManager.js:346
calculateValues @ 4011-Section15.js:1832
calculateTargetModel @ 4011-Section15.js:1662
calculateAll @ 4011-Section15.js:1328
(anonymous) @ 4011-Section15.js:2121
(anonymous) @ 4011-StateManager.js:543
notifyListeners @ 4011-StateManager.js:541
setValue @ 4011-StateManager.js:419
calculateValues @ 4011-Section15.js:1832
calculateTargetModel @ 4011-Section15.js:1662
calculateAll @ 4011-Section15.js:1328
(anonymous) @ 4011-Section15.js:2121
(anonymous) @ 4011-StateManager.js:543
notifyListeners @ 4011-StateManager.js:541
setValue @ 4011-StateManager.js:419
setCalculatedValue @ 4011-Section04.js:96
calculateRow32 @ 4011-Section04.js:1026
calculateTargetModel @ 4011-Section04.js:1620
calculateAll @ 4011-Section04.js:1586
(anonymous) @ 4011-Section04.js:2483
(anonymous) @ 4011-StateManager.js:543
notifyListeners @ 4011-StateManager.js:541
setValue @ 4011-StateManager.js:419
setTargetValue @ 4011-Section15.js:146
calculateValues @ 4011-Section15.js:1810
calculateTargetModel @ 4011-Section15.js:1662
calculateAll @ 4011-Section15.js:1328
(anonymous) @ 4011-Section15.js:2121
(anonymous) @ 4011-StateManager.js:543
notifyListeners @ 4011-StateManager.js:541
setValue @ 4011-StateManager.js:419
setFieldValue @ 4011-Section13.js:636
calculateCoolingSystem @ 4011-Section13.js:3030
calculateTargetModel @ 4011-Section13.js:3560
calculateAll @ 4011-Section13.js:3403
calculateAndRefresh @ 4011-Section13.js:2368
(anonymous) @ 4011-Section13.js:2396
(anonymous) @ 4011-StateManager.js:543
notifyListeners @ 4011-StateManager.js:541
setValue @ 4011-StateManager.js:419
setCalculatedValue @ 4011-Section14.js:412
calculateValues @ 4011-Section14.js:1165
calculateTargetModel @ 4011-Section14.js:1123
calculateAll @ 4011-Section14.js:944
(anonymous) @ 4011-Section14.js:1420
(anonymous) @ 4011-StateManager.js:543
notifyListeners @ 4011-StateManager.js:541
setValue @ 4011-StateManager.js:419
setValue @ 4011-Section11.js:338
setCalculatedValue @ 4011-Section11.js:955
calculateThermalBridgePenalty @ 4011-Section11.js:1268
calculateTargetModel @ 4011-Section11.js:1571
calculateAll @ 4011-Section11.js:1693
(anonymous) @ 4011-StateManager.js:543
notifyListeners @ 4011-StateManager.js:541
setValue @ 4011-StateManager.js:419
setValue @ 4011-Section03.js:215
setFieldValue @ 4011-Section03.js:453
calculateGroundFacing @ 4011-Section03.js:1663
calculateTargetModel @ 4011-Section03.js:1722
calculateAll @ 4011-Section03.js:1691
(anonymous) @ 4011-Section03.js:2191
(anonymous) @ 4011-StateManager.js:543
notifyListeners @ 4011-StateManager.js:541
setValue @ 4011-StateManager.js:419
setValue @ 4011-Section09.js:191
(anonymous) @ 4011-Section09.js:2541
 [S15] 🎯 TGT S03 CLIMATE READ: h_23=22, d_23=-26, d_24=30, h_24=24
 [StateManager] 🎯 h_10 setValue: "93.69620624016636" (state: calculated)
 [StateManager] h_10 setValue stack trace:
setValue @ 4011-StateManager.js:346
calculateValues @ 4011-Section15.js:1832
calculateTargetModel @ 4011-Section15.js:1662
calculateAll @ 4011-Section15.js:1328
(anonymous) @ 4011-Section15.js:2121
(anonymous) @ 4011-StateManager.js:543
notifyListeners @ 4011-StateManager.js:541
setValue @ 4011-StateManager.js:419
calculateValues @ 4011-Section15.js:1832
calculateTargetModel @ 4011-Section15.js:1662
calculateAll @ 4011-Section15.js:1328
(anonymous) @ 4011-Section15.js:2121
(anonymous) @ 4011-StateManager.js:543
notifyListeners @ 4011-StateManager.js:541
setValue @ 4011-StateManager.js:419
setCalculatedValue @ 4011-Section04.js:96
calculateRow32 @ 4011-Section04.js:1026
calculateTargetModel @ 4011-Section04.js:1620
calculateAll @ 4011-Section04.js:1586
(anonymous) @ 4011-Section04.js:2483
(anonymous) @ 4011-StateManager.js:543
notifyListeners @ 4011-StateManager.js:541
setValue @ 4011-StateManager.js:419
setTargetValue @ 4011-Section15.js:146
calculateValues @ 4011-Section15.js:1810
calculateTargetModel @ 4011-Section15.js:1662
calculateAll @ 4011-Section15.js:1328
(anonymous) @ 4011-Section15.js:2121
(anonymous) @ 4011-StateManager.js:543
notifyListeners @ 4011-StateManager.js:541
setValue @ 4011-StateManager.js:419
setFieldValue @ 4011-Section13.js:636
calculateCoolingSystem @ 4011-Section13.js:3030
calculateTargetModel @ 4011-Section13.js:3560
calculateAll @ 4011-Section13.js:3403
calculateAndRefresh @ 4011-Section13.js:2368
(anonymous) @ 4011-Section13.js:2396
(anonymous) @ 4011-StateManager.js:543
notifyListeners @ 4011-StateManager.js:541
setValue @ 4011-StateManager.js:419
setCalculatedValue @ 4011-Section14.js:412
calculateValues @ 4011-Section14.js:1165
calculateTargetModel @ 4011-Section14.js:1123
calculateAll @ 4011-Section14.js:944
(anonymous) @ 4011-Section14.js:1420
(anonymous) @ 4011-StateManager.js:543
notifyListeners @ 4011-StateManager.js:541
setValue @ 4011-StateManager.js:419
setValue @ 4011-Section11.js:338
setCalculatedValue @ 4011-Section11.js:955
calculateThermalBridgePenalty @ 4011-Section11.js:1268
calculateTargetModel @ 4011-Section11.js:1571
calculateAll @ 4011-Section11.js:1693
(anonymous) @ 4011-StateManager.js:543
notifyListeners @ 4011-StateManager.js:541
setValue @ 4011-StateManager.js:419
setValue @ 4011-Section03.js:215
setFieldValue @ 4011-Section03.js:453
calculateGroundFacing @ 4011-Section03.js:1663
calculateTargetModel @ 4011-Section03.js:1722
calculateAll @ 4011-Section03.js:1691
(anonymous) @ 4011-Section03.js:2191
(anonymous) @ 4011-StateManager.js:543
notifyListeners @ 4011-StateManager.js:541
setValue @ 4011-StateManager.js:419
setValue @ 4011-Section09.js:191
(anonymous) @ 4011-Section09.js:2541
 [S15] 🎯 TGT S03 CLIMATE READ: h_23=22, d_23=-26, d_24=30, h_24=24
 [StateManager] 🎯 h_10 setValue: "93.69620624016636" (state: calculated)
 [StateManager] h_10 setValue stack trace:
setValue @ 4011-StateManager.js:346
calculateValues @ 4011-Section15.js:1832
calculateTargetModel @ 4011-Section15.js:1662
calculateAll @ 4011-Section15.js:1328
(anonymous) @ 4011-Section15.js:2121
(anonymous) @ 4011-StateManager.js:543
notifyListeners @ 4011-StateManager.js:541
setValue @ 4011-StateManager.js:419
setCalculatedValue @ 4011-Section04.js:96
calculateRow32 @ 4011-Section04.js:1026
calculateTargetModel @ 4011-Section04.js:1620
calculateAll @ 4011-Section04.js:1586
(anonymous) @ 4011-Section04.js:2483
(anonymous) @ 4011-StateManager.js:543
notifyListeners @ 4011-StateManager.js:541
setValue @ 4011-StateManager.js:419
setTargetValue @ 4011-Section15.js:146
calculateValues @ 4011-Section15.js:1810
calculateTargetModel @ 4011-Section15.js:1662
calculateAll @ 4011-Section15.js:1328
(anonymous) @ 4011-Section15.js:2121
(anonymous) @ 4011-StateManager.js:543
notifyListeners @ 4011-StateManager.js:541
setValue @ 4011-StateManager.js:419
setFieldValue @ 4011-Section13.js:636
calculateCoolingSystem @ 4011-Section13.js:3030
calculateTargetModel @ 4011-Section13.js:3560
calculateAll @ 4011-Section13.js:3403
calculateAndRefresh @ 4011-Section13.js:2368
(anonymous) @ 4011-Section13.js:2396
(anonymous) @ 4011-StateManager.js:543
notifyListeners @ 4011-StateManager.js:541
setValue @ 4011-StateManager.js:419
setCalculatedValue @ 4011-Section14.js:412
calculateValues @ 4011-Section14.js:1165
calculateTargetModel @ 4011-Section14.js:1123
calculateAll @ 4011-Section14.js:944
(anonymous) @ 4011-Section14.js:1420
(anonymous) @ 4011-StateManager.js:543
notifyListeners @ 4011-StateManager.js:541
setValue @ 4011-StateManager.js:419
setValue @ 4011-Section11.js:338
setCalculatedValue @ 4011-Section11.js:955
calculateThermalBridgePenalty @ 4011-Section11.js:1268
calculateTargetModel @ 4011-Section11.js:1571
calculateAll @ 4011-Section11.js:1693
(anonymous) @ 4011-StateManager.js:543
notifyListeners @ 4011-StateManager.js:541
setValue @ 4011-StateManager.js:419
setValue @ 4011-Section03.js:215
setFieldValue @ 4011-Section03.js:453
calculateGroundFacing @ 4011-Section03.js:1663
calculateTargetModel @ 4011-Section03.js:1722
calculateAll @ 4011-Section03.js:1691
(anonymous) @ 4011-Section03.js:2191
(anonymous) @ 4011-StateManager.js:543
notifyListeners @ 4011-StateManager.js:541
setValue @ 4011-StateManager.js:419
setValue @ 4011-Section09.js:191
(anonymous) @ 4011-Section09.js:2541
 [S04] Row 32 Subtotals - F32: 132938, G32: 6779.838, J32: 301986.051518286, K32: 15401.288627432587
 [S04] Reference model calculations complete
 [S04DB] storeReference: ref_j_32=301986.051518286, ref_k_32=15401.288627432587 | current target j_32=133723.22554596543, k_32=6819.8845028442365
 [S04] 🔄 Updating calculated display values for target mode
 [S04DB] displayContext mode=target j_32=133723.22554596543 ref_j_32=301986.051518286 k_32=6819.8845028442365 ref_k_32=15401.288627432587
 [S04 DEBUG] Target mode - j_32: 133723.22554596543
 [S04 DEBUG] Target mode - k_32: 6819.8845028442365
 [S04 DEBUG] Target mode - l_27: 51
 [S04] Calculated display values updated for target mode
 [S04] Dual-engine calculations completed successfully
 [S04] 🔄 Updating calculated display values for target mode
 [S04DB] displayContext mode=target j_32=133723.22554596543 ref_j_32=301986.051518286 k_32=6819.8845028442365 ref_k_32=15401.288627432587
 [S04 DEBUG] Target mode - j_32: 133723.22554596543
 [S04 DEBUG] Target mode - k_32: 6819.8845028442365
 [S04 DEBUG] Target mode - l_27: 51
 [S04] Calculated display values updated for target mode
 [StateManager] 🎯 h_10 setValue: "93.69620624016636" (state: calculated)
 [StateManager] h_10 setValue stack trace:
setValue @ 4011-StateManager.js:346
calculateValues @ 4011-Section15.js:1832
calculateTargetModel @ 4011-Section15.js:1662
calculateAll @ 4011-Section15.js:1328
(anonymous) @ 4011-Section15.js:2121
(anonymous) @ 4011-StateManager.js:543
notifyListeners @ 4011-StateManager.js:541
setValue @ 4011-StateManager.js:419
setFieldValue @ 4011-Section13.js:636
calculateCoolingSystem @ 4011-Section13.js:3030
calculateTargetModel @ 4011-Section13.js:3560
calculateAll @ 4011-Section13.js:3403
calculateAndRefresh @ 4011-Section13.js:2368
(anonymous) @ 4011-Section13.js:2396
(anonymous) @ 4011-StateManager.js:543
notifyListeners @ 4011-StateManager.js:541
setValue @ 4011-StateManager.js:419
setCalculatedValue @ 4011-Section14.js:412
calculateValues @ 4011-Section14.js:1165
calculateTargetModel @ 4011-Section14.js:1123
calculateAll @ 4011-Section14.js:944
(anonymous) @ 4011-Section14.js:1420
(anonymous) @ 4011-StateManager.js:543
notifyListeners @ 4011-StateManager.js:541
setValue @ 4011-StateManager.js:419
setValue @ 4011-Section11.js:338
setCalculatedValue @ 4011-Section11.js:955
calculateThermalBridgePenalty @ 4011-Section11.js:1268
calculateTargetModel @ 4011-Section11.js:1571
calculateAll @ 4011-Section11.js:1693
(anonymous) @ 4011-StateManager.js:543
notifyListeners @ 4011-StateManager.js:541
setValue @ 4011-StateManager.js:419
setValue @ 4011-Section03.js:215
setFieldValue @ 4011-Section03.js:453
calculateGroundFacing @ 4011-Section03.js:1663
calculateTargetModel @ 4011-Section03.js:1722
calculateAll @ 4011-Section03.js:1691
(anonymous) @ 4011-Section03.js:2191
(anonymous) @ 4011-StateManager.js:543
notifyListeners @ 4011-StateManager.js:541
setValue @ 4011-StateManager.js:419
setValue @ 4011-Section09.js:191
(anonymous) @ 4011-Section09.js:2541
 [S15] 🎯 TGT S03 CLIMATE READ: h_23=22, d_23=-26, d_24=30, h_24=24
 [StateManager] 🎯 h_10 setValue: "93.69620624016636" (state: calculated)
 [StateManager] h_10 setValue stack trace:
setValue @ 4011-StateManager.js:346
calculateValues @ 4011-Section15.js:1832
calculateTargetModel @ 4011-Section15.js:1662
calculateAll @ 4011-Section15.js:1328
(anonymous) @ 4011-Section15.js:2121
(anonymous) @ 4011-StateManager.js:543
notifyListeners @ 4011-StateManager.js:541
setValue @ 4011-StateManager.js:419
setFieldValue @ 4011-Section13.js:636
calculateCoolingSystem @ 4011-Section13.js:3030
calculateTargetModel @ 4011-Section13.js:3560
calculateAll @ 4011-Section13.js:3403
calculateAndRefresh @ 4011-Section13.js:2368
(anonymous) @ 4011-Section13.js:2396
(anonymous) @ 4011-StateManager.js:543
notifyListeners @ 4011-StateManager.js:541
setValue @ 4011-StateManager.js:419
setCalculatedValue @ 4011-Section14.js:412
calculateValues @ 4011-Section14.js:1165
calculateTargetModel @ 4011-Section14.js:1123
calculateAll @ 4011-Section14.js:944
(anonymous) @ 4011-Section14.js:1420
(anonymous) @ 4011-StateManager.js:543
notifyListeners @ 4011-StateManager.js:541
setValue @ 4011-StateManager.js:419
setValue @ 4011-Section11.js:338
setCalculatedValue @ 4011-Section11.js:955
calculateThermalBridgePenalty @ 4011-Section11.js:1268
calculateTargetModel @ 4011-Section11.js:1571
calculateAll @ 4011-Section11.js:1693
(anonymous) @ 4011-StateManager.js:543
notifyListeners @ 4011-StateManager.js:541
setValue @ 4011-StateManager.js:419
setValue @ 4011-Section03.js:215
setFieldValue @ 4011-Section03.js:453
calculateGroundFacing @ 4011-Section03.js:1663
calculateTargetModel @ 4011-Section03.js:1722
calculateAll @ 4011-Section03.js:1691
(anonymous) @ 4011-Section03.js:2191
(anonymous) @ 4011-StateManager.js:543
notifyListeners @ 4011-StateManager.js:541
setValue @ 4011-StateManager.js:419
setValue @ 4011-Section09.js:191
(anonymous) @ 4011-Section09.js:2541
 [Section13] 🧊 COOLING RESULTS: d_117=3593.80399917213, j_116=2.663540445486518, l_116=0, l_114=5978.438305774035
2 [S14 LISTENER] 🔥 d_122 changed - triggering calculateAll() + UI update
 [S15] 🎯 TGT S03 CLIMATE READ: h_23=22, d_23=-26, d_24=30, h_24=24
 [StateManager] 🎯 h_10 setValue: "93.69620624016636" (state: calculated)
 [StateManager] h_10 setValue stack trace:
setValue @ 4011-StateManager.js:346
calculateValues @ 4011-Section15.js:1832
calculateTargetModel @ 4011-Section15.js:1662
calculateAll @ 4011-Section15.js:1328
(anonymous) @ 4011-Section15.js:2121
(anonymous) @ 4011-StateManager.js:543
notifyListeners @ 4011-StateManager.js:541
setValue @ 4011-StateManager.js:419
setFieldValue @ 4011-Section13.js:636
calculateCoolingVentilation @ 4011-Section13.js:3272
calculateCoolingSystem @ 4011-Section13.js:3040
calculateTargetModel @ 4011-Section13.js:3560
calculateAll @ 4011-Section13.js:3403
calculateAndRefresh @ 4011-Section13.js:2368
(anonymous) @ 4011-Section13.js:2396
(anonymous) @ 4011-StateManager.js:543
notifyListeners @ 4011-StateManager.js:541
setValue @ 4011-StateManager.js:419
setCalculatedValue @ 4011-Section14.js:412
calculateValues @ 4011-Section14.js:1165
calculateTargetModel @ 4011-Section14.js:1123
calculateAll @ 4011-Section14.js:944
(anonymous) @ 4011-Section14.js:1420
(anonymous) @ 4011-StateManager.js:543
notifyListeners @ 4011-StateManager.js:541
setValue @ 4011-StateManager.js:419
setValue @ 4011-Section11.js:338
setCalculatedValue @ 4011-Section11.js:955
calculateThermalBridgePenalty @ 4011-Section11.js:1268
calculateTargetModel @ 4011-Section11.js:1571
calculateAll @ 4011-Section11.js:1693
(anonymous) @ 4011-StateManager.js:543
notifyListeners @ 4011-StateManager.js:541
setValue @ 4011-StateManager.js:419
setValue @ 4011-Section03.js:215
setFieldValue @ 4011-Section03.js:453
calculateGroundFacing @ 4011-Section03.js:1663
calculateTargetModel @ 4011-Section03.js:1722
calculateAll @ 4011-Section03.js:1691
(anonymous) @ 4011-Section03.js:2191
(anonymous) @ 4011-StateManager.js:543
notifyListeners @ 4011-StateManager.js:541
setValue @ 4011-StateManager.js:419
setValue @ 4011-Section09.js:191
(anonymous) @ 4011-Section09.js:2541
 [S15] 🎯 TGT S03 CLIMATE READ: h_23=22, d_23=-26, d_24=30, h_24=24
 [StateManager] 🎯 h_10 setValue: "93.69620624016636" (state: calculated)
 [StateManager] h_10 setValue stack trace:
setValue @ 4011-StateManager.js:346
calculateValues @ 4011-Section15.js:1832
calculateTargetModel @ 4011-Section15.js:1662
calculateAll @ 4011-Section15.js:1328
(anonymous) @ 4011-Section15.js:2121
(anonymous) @ 4011-StateManager.js:543
notifyListeners @ 4011-StateManager.js:541
setValue @ 4011-StateManager.js:419
setFieldValue @ 4011-Section13.js:636
calculateCoolingVentilation @ 4011-Section13.js:3272
calculateCoolingSystem @ 4011-Section13.js:3040
calculateTargetModel @ 4011-Section13.js:3560
calculateAll @ 4011-Section13.js:3403
calculateAndRefresh @ 4011-Section13.js:2368
(anonymous) @ 4011-Section13.js:2396
(anonymous) @ 4011-StateManager.js:543
notifyListeners @ 4011-StateManager.js:541
setValue @ 4011-StateManager.js:419
setCalculatedValue @ 4011-Section14.js:412
calculateValues @ 4011-Section14.js:1165
calculateTargetModel @ 4011-Section14.js:1123
calculateAll @ 4011-Section14.js:944
(anonymous) @ 4011-Section14.js:1420
(anonymous) @ 4011-StateManager.js:543
notifyListeners @ 4011-StateManager.js:541
setValue @ 4011-StateManager.js:419
setValue @ 4011-Section11.js:338
setCalculatedValue @ 4011-Section11.js:955
calculateThermalBridgePenalty @ 4011-Section11.js:1268
calculateTargetModel @ 4011-Section11.js:1571
calculateAll @ 4011-Section11.js:1693
(anonymous) @ 4011-StateManager.js:543
notifyListeners @ 4011-StateManager.js:541
setValue @ 4011-StateManager.js:419
setValue @ 4011-Section03.js:215
setFieldValue @ 4011-Section03.js:453
calculateGroundFacing @ 4011-Section03.js:1663
calculateTargetModel @ 4011-Section03.js:1722
calculateAll @ 4011-Section03.js:1691
(anonymous) @ 4011-Section03.js:2191
(anonymous) @ 4011-StateManager.js:543
notifyListeners @ 4011-StateManager.js:541
setValue @ 4011-StateManager.js:419
setValue @ 4011-Section09.js:191
(anonymous) @ 4011-Section09.js:2541
2 [S14 LISTENER] 🔥 d_122 changed - triggering calculateAll() + UI update
 [S15] 🎯 TGT S03 CLIMATE READ: h_23=22, d_23=-26, d_24=30, h_24=24
 [StateManager] 🎯 h_10 setValue: "93.69620624016636" (state: calculated)
 [StateManager] h_10 setValue stack trace:
setValue @ 4011-StateManager.js:346
calculateValues @ 4011-Section15.js:1832
calculateTargetModel @ 4011-Section15.js:1662
calculateAll @ 4011-Section15.js:1328
(anonymous) @ 4011-Section15.js:2121
(anonymous) @ 4011-StateManager.js:543
notifyListeners @ 4011-StateManager.js:541
setValue @ 4011-StateManager.js:419
setFieldValue @ 4011-Section13.js:636
updateTargetModelDOMValues @ 4011-Section13.js:3684
calculateTargetModel @ 4011-Section13.js:3570
calculateAll @ 4011-Section13.js:3403
calculateAndRefresh @ 4011-Section13.js:2368
(anonymous) @ 4011-Section13.js:2396
(anonymous) @ 4011-StateManager.js:543
notifyListeners @ 4011-StateManager.js:541
setValue @ 4011-StateManager.js:419
setCalculatedValue @ 4011-Section14.js:412
calculateValues @ 4011-Section14.js:1165
calculateTargetModel @ 4011-Section14.js:1123
calculateAll @ 4011-Section14.js:944
(anonymous) @ 4011-Section14.js:1420
(anonymous) @ 4011-StateManager.js:543
notifyListeners @ 4011-StateManager.js:541
setValue @ 4011-StateManager.js:419
setValue @ 4011-Section11.js:338
setCalculatedValue @ 4011-Section11.js:955
calculateThermalBridgePenalty @ 4011-Section11.js:1268
calculateTargetModel @ 4011-Section11.js:1571
calculateAll @ 4011-Section11.js:1693
(anonymous) @ 4011-StateManager.js:543
notifyListeners @ 4011-StateManager.js:541
setValue @ 4011-StateManager.js:419
setValue @ 4011-Section03.js:215
setFieldValue @ 4011-Section03.js:453
calculateGroundFacing @ 4011-Section03.js:1663
calculateTargetModel @ 4011-Section03.js:1722
calculateAll @ 4011-Section03.js:1691
(anonymous) @ 4011-Section03.js:2191
(anonymous) @ 4011-StateManager.js:543
notifyListeners @ 4011-StateManager.js:541
setValue @ 4011-StateManager.js:419
setValue @ 4011-Section09.js:191
(anonymous) @ 4011-Section09.js:2541
 [S15] 🎯 TGT S03 CLIMATE READ: h_23=22, d_23=-26, d_24=30, h_24=24
 [StateManager] 🎯 h_10 setValue: "93.69620624016636" (state: calculated)
 [StateManager] h_10 setValue stack trace:
setValue @ 4011-StateManager.js:346
calculateValues @ 4011-Section15.js:1832
calculateTargetModel @ 4011-Section15.js:1662
calculateAll @ 4011-Section15.js:1328
(anonymous) @ 4011-Section15.js:2121
(anonymous) @ 4011-StateManager.js:543
notifyListeners @ 4011-StateManager.js:541
setValue @ 4011-StateManager.js:419
setFieldValue @ 4011-Section13.js:636
updateTargetModelDOMValues @ 4011-Section13.js:3684
calculateTargetModel @ 4011-Section13.js:3570
calculateAll @ 4011-Section13.js:3403
calculateAndRefresh @ 4011-Section13.js:2368
(anonymous) @ 4011-Section13.js:2396
(anonymous) @ 4011-StateManager.js:543
notifyListeners @ 4011-StateManager.js:541
setValue @ 4011-StateManager.js:419
setCalculatedValue @ 4011-Section14.js:412
calculateValues @ 4011-Section14.js:1165
calculateTargetModel @ 4011-Section14.js:1123
calculateAll @ 4011-Section14.js:944
(anonymous) @ 4011-Section14.js:1420
(anonymous) @ 4011-StateManager.js:543
notifyListeners @ 4011-StateManager.js:541
setValue @ 4011-StateManager.js:419
setValue @ 4011-Section11.js:338
setCalculatedValue @ 4011-Section11.js:955
calculateThermalBridgePenalty @ 4011-Section11.js:1268
calculateTargetModel @ 4011-Section11.js:1571
calculateAll @ 4011-Section11.js:1693
(anonymous) @ 4011-StateManager.js:543
notifyListeners @ 4011-StateManager.js:541
setValue @ 4011-StateManager.js:419
setValue @ 4011-Section03.js:215
setFieldValue @ 4011-Section03.js:453
calculateGroundFacing @ 4011-Section03.js:1663
calculateTargetModel @ 4011-Section03.js:1722
calculateAll @ 4011-Section03.js:1691
(anonymous) @ 4011-Section03.js:2191
(anonymous) @ 4011-StateManager.js:543
notifyListeners @ 4011-StateManager.js:541
setValue @ 4011-StateManager.js:419
setValue @ 4011-Section09.js:191
(anonymous) @ 4011-Section09.js:2541
4011-Section13.js:3588 [Section13] Target Model calculations complete
4011-Section13.js:3404 [Section13] ✅ Target Model complete
4011-Section13.js:3431 [Section13] ⏭️ Skipping Reference value re-write - triggered in target mode
4011-Section13.js:3437 [Section13] 🎉 DUAL-ENGINE CALCULATIONS COMPLETE
4011-Section13.js:252 [Section13] 🔄 Updating calculated display values for target mode
4011-Section13.js:336 [Section13] Calculated display values updated for target mode
4011-Section10.js:2667 S10: Target listener triggered by i_98, recalculating all.
4011-Section10.js:1819 [S10 DEBUG] calculateAll() triggered in target mode - running both engines
4011-Section10.js:2040 [S10REF] Utilization calc: ref_i_71=110562.1692, ref_i_79=10060.174319999998, totalGains=120622.34352
4011-Section10.js:2054 [S10REF] Using utilization method: NRC 40%
4011-Section10.js:2091 [S10REF] Final calc: utilizationFactor=0.4, usableGains=48248.937408
4011-Section10.js:2134 [S10REF] Complete: g_80=0.4, g_81=0.9936571089244821, i_80=48248.937408, i_81=119857.24913377894
4011-Section10.js:1827 [S10 DEBUG] Dual-engine calculations complete in target mode
4011-Section10.js:341 [S10DISPLAY] updateCalculatedDisplayValues() called in target mode
4011-Section10.js:448 [S10DISPLAY] Display (target) m_73 = 50.00
 [S10DISPLAY] Display (target) m_74 = 1.31
 [S10DISPLAY] Display (target) m_75 = 76.94
 [S10DISPLAY] Display (target) m_76 = 70.74
 [S10DISPLAY] Display (target) m_77 = 25.86
 [S10DISPLAY] Display (target) m_78 = 75.00
 [S10DISPLAY] Display (target) i_73 = 375.00
 [S10DISPLAY] Display (target) i_74 = 106.29
 [S10DISPLAY] Display (target) i_75 = 294.68
 [S10DISPLAY] Display (target) i_76 = 11,247.66
 [S10DISPLAY] Display (target) i_77 = 2,603.07
 [S10DISPLAY] Display (target) i_78 = 0.00
 [S10DISPLAY] Display (target) i_79 = 14,626.70
 [S10DISPLAY] Display (target) k_73 = 0.00
 [S10DISPLAY] Display (target) k_74 = 0.00
 [S10DISPLAY] Display (target) k_75 = 0.00
 [S10DISPLAY] Display (target) k_76 = 0.00
 [S10DISPLAY] Display (target) k_77 = 130.15
 [S10DISPLAY] Display (target) k_78 = 0.00
 [S10DISPLAY] Display (target) k_79 = 130.15
 [S10DISPLAY] Display (target) j_73 = 2.56%
 [S10DISPLAY] Display (target) j_74 = 0.73%
 [S10DISPLAY] Display (target) j_75 = 2.01%
 [S10DISPLAY] Display (target) j_76 = 76.90%
 [S10DISPLAY] Display (target) j_77 = 17.80%
 [S10DISPLAY] Display (target) j_78 = 0.00%
 [S10DISPLAY] Display (target) j_79 = 100.00%
 [S10DISPLAY] Display (target) l_73 = 0.00%
 [S10DISPLAY] Display (target) l_74 = 0.00%
 [S10DISPLAY] Display (target) l_75 = 0.00%
 [S10DISPLAY] Display (target) l_76 = 0.00%
 [S10DISPLAY] Display (target) l_77 = 100.00%
 [S10DISPLAY] Display (target) l_78 = 0.00%
 [S10DISPLAY] Display (target) l_79 = 100.00%
 [S10DISPLAY] Display (target) e_80 = 114,698.95
 [S10DISPLAY] Display (target) e_81 = 114,698.95
 [S10DISPLAY] g_80 DEBUG: mode=target, valueToDisplay=0.4
 [S10DISPLAY] Display (target) g_80 = 40.00%
 [S10DISPLAY] Display (target) g_81 = 95.33%
 [S10DISPLAY] Display (target) i_80 = 45,879.58
 [S10DISPLAY] Display (target) i_81 = 109,337.36
 [S10DISPLAY] Display (target) i_82 = 68,819.37
 S10: Target utilization factor dependency i_98 changed.
 [S10DISPLAY] updateCalculatedDisplayValues() called in target mode
 [S10DISPLAY] Display (target) m_73 = 50.00
 [S10DISPLAY] Display (target) m_74 = 1.31
 [S10DISPLAY] Display (target) m_75 = 76.94
 [S10DISPLAY] Display (target) m_76 = 70.74
 [S10DISPLAY] Display (target) m_77 = 25.86
 [S10DISPLAY] Display (target) m_78 = 75.00
 [S10DISPLAY] Display (target) i_73 = 375.00
 [S10DISPLAY] Display (target) i_74 = 106.29
 [S10DISPLAY] Display (target) i_75 = 294.68
 [S10DISPLAY] Display (target) i_76 = 11,247.66
 [S10DISPLAY] Display (target) i_77 = 2,603.07
 [S10DISPLAY] Display (target) i_78 = 0.00
 [S10DISPLAY] Display (target) i_79 = 14,626.70
 [S10DISPLAY] Display (target) k_73 = 0.00
 [S10DISPLAY] Display (target) k_74 = 0.00
 [S10DISPLAY] Display (target) k_75 = 0.00
 [S10DISPLAY] Display (target) k_76 = 0.00
 [S10DISPLAY] Display (target) k_77 = 130.15
4011-Section10.js:448 [S10DISPLAY] Display (target) k_78 = 0.00
4011-Section10.js:448 [S10DISPLAY] Display (target) k_79 = 130.15
4011-Section10.js:448 [S10DISPLAY] Display (target) j_73 = 2.56%
4011-Section10.js:448 [S10DISPLAY] Display (target) j_74 = 0.73%
4011-Section10.js:448 [S10DISPLAY] Display (target) j_75 = 2.01%
4011-Section10.js:448 [S10DISPLAY] Display (target) j_76 = 76.90%
4011-Section10.js:448 [S10DISPLAY] Display (target) j_77 = 17.80%
4011-Section10.js:448 [S10DISPLAY] Display (target) j_78 = 0.00%
4011-Section10.js:448 [S10DISPLAY] Display (target) j_79 = 100.00%
4011-Section10.js:448 [S10DISPLAY] Display (target) l_73 = 0.00%
4011-Section10.js:448 [S10DISPLAY] Display (target) l_74 = 0.00%
4011-Section10.js:448 [S10DISPLAY] Display (target) l_75 = 0.00%
4011-Section10.js:448 [S10DISPLAY] Display (target) l_76 = 0.00%
4011-Section10.js:448 [S10DISPLAY] Display (target) l_77 = 100.00%
4011-Section10.js:448 [S10DISPLAY] Display (target) l_78 = 0.00%
 [S10DISPLAY] Display (target) l_79 = 100.00%
 [S10DISPLAY] Display (target) e_80 = 114,698.95
 [S10DISPLAY] Display (target) e_81 = 114,698.95
 [S10DISPLAY] g_80 DEBUG: mode=target, valueToDisplay=0.4
 [S10DISPLAY] Display (target) g_80 = 40.00%
 [S10DISPLAY] Display (target) g_81 = 95.33%
 [S10DISPLAY] Display (target) i_80 = 45,879.58
 [S10DISPLAY] Display (target) i_81 = 109,337.36
 [S10DISPLAY] Display (target) i_82 = 68,819.37
 [Section13] 📡 🔥 d_127 (TED) listener triggered - S14 energy demand changed!
 [Section13] 🚀 CALCULATEALL TRIGGERED - Running dual-engine calculations...
 [Section13] 🎯 Mode captured at calculation start: target
 [Section13] 🔄 Starting Reference Model calculations...
 🔍 [S13-CONTEXT] Creating reference context: g_118="Volume Constant" from ReferenceState
 🔍 [S13-CONTEXT] ReferenceState.g_118="Volume Constant", TargetState.g_118="Volume by Schedule"
 [Section13] Running Reference Model calculations...
 [S13 CONTAMINATION DEBUG] calculateReferenceModel: Using system type = Electricity
 [S13] REF HEATING: system=Electricity, ted=251391.1974742337, afue=0.9, cop=1
 [S13 REF DEBUG] About to calculate with heating system: Electricity
 [S13 REF DEBUG] Will S13 publish ref_d_113=Electricity?
 🔍 [S13-VENT] calculateVentilationRates: ventMethod="Volume Constant", ach(l_118)=3.5, ratePerPerson(d_119)=8.33, volume(d_105)=8000
 🔍 [S13-VENT] isReferenceCalculation=true, hasContext=true
 🔍 [S13-VENT] calculateVentilationValues: ventMethod="Volume Constant", ach(l_118)=3.5, ratePerPerson(d_119)=8.33, volume(d_105)=8000
 🔍 [S13-VENT] Supporting values: occupants(d_63)=126, occupiedHours(i_63)=4380, totalHours(j_63)=8760
 🔍 [S13-VENT] Volume Constant calculation: ventRateLs = (3.5 * 8000) / 3.6 = 7777.777777777777
 ✅ [S13-VENT] Final d_120 result: 7777.777777777777 L/s (from method="Volume Constant", ach=3.5, volume=8000)
 [Section13] 🧊 COOLING CALC: mode=REF, coolingSystemType="No Cooling", heatingType="Electricity", isCoolingActive=false, coolingDemand=10192.893604542265
 [S13 CONTAMINATION DEBUG] storeReferenceResults called during reference mode
 [S13 CONTAMINATION DEBUG] Reference heating system: Electricity
 [S13 CONTAMINATION DEBUG] Target heating system: Heatpump
 [S13 CONTAMINATION DEBUG] Reference h_115 (gas volume): 0
 [S13 CONTAMINATION DEBUG] Reference f_115 (oil volume): 0
 [S13 CONTAMINATION DEBUG] Writing ref_f_115 = 0
 [S13 CONTAMINATION DEBUG] Writing ref_h_115 = 0
 [Section13] Reference results stored with ref_ prefix for downstream sections
 [S13 DEBUG] Total Reference results stored: 34
 [Section13] Reference Model calculations complete
 [Section13] ✅ Reference Model complete
 [Section13] 🔄 Starting Target Model calculations...
 🔍 [S13-CONTEXT] Creating target context: g_118="Volume by Schedule" from TargetState
 🔍 [S13-CONTEXT] TargetState.g_118="Volume by Schedule", ReferenceState.g_118="Volume Constant"
 [Section13] Running Target Model calculations...
 [S13] TGT HEATING: system=Heatpump, ted=127565.6677259902, afue=0.98, cop=3.663540445486518
 🔍 [S13-VENT] calculateVentilationRates: ventMethod="Volume by Schedule", ach(l_118)=3, ratePerPerson(d_119)=14, volume(d_105)=8000
 🔍 [S13-VENT] isReferenceCalculation=false, hasContext=true
 🔍 [S13-VENT] calculateVentilationValues: ventMethod="Volume by Schedule", ach(l_118)=3, ratePerPerson(d_119)=14, volume(d_105)=8000
 🔍 [S13-VENT] Supporting values: occupants(d_63)=126, occupiedHours(i_63)=4380, totalHours(j_63)=8760
 ✅ [S13-VENT] Final d_120 result: 3333.333333333333 L/s (from method="Volume by Schedule", ach=3, volume=8000)
 [Section13] 🧊 COOLING CALC: mode=TGT, coolingSystemType="Cooling", heatingType="Heatpump", isCoolingActive=true, coolingDemand=10192.893604542265
 [S15] 🎯 TGT S03 CLIMATE READ: h_23=22, d_23=-26, d_24=30, h_24=24
 [S04] S15 target electricity changed: d_136
 [S04] Starting dual-engine Excel-compliant calculations
 [S04] Row 32 Subtotals - F32: 132938, G32: 6779.838, J32: 133956.24295730147, K32: 6831.768390822375
 [S04] j_32 update: 133956.24295730147
 [S01] j_32 listener: 133723.22554596543 → 133956.24295730147
 [S01] 🕐 j_32 listener timing: StateManager current j_32 = 133956.24295730147
2 🔄 [S05] updateCalculatedDisplayValues: mode=target
 [S15] 🎯 TGT S03 CLIMATE READ: h_23=22, d_23=-26, d_24=30, h_24=24
 [StateManager] 🎯 h_10 setValue: "93.85947516627064" (state: calculated)
 [StateManager] h_10 setValue stack trace:
setValue @ 4011-StateManager.js:346
calculateValues @ 4011-Section15.js:1832
calculateTargetModel @ 4011-Section15.js:1662
calculateAll @ 4011-Section15.js:1328
(anonymous) @ 4011-Section15.js:2121
(anonymous) @ 4011-StateManager.js:543
notifyListeners @ 4011-StateManager.js:541
setValue @ 4011-StateManager.js:419
setCalculatedValue @ 4011-Section04.js:96
calculateRow32 @ 4011-Section04.js:1026
calculateTargetModel @ 4011-Section04.js:1620
calculateAll @ 4011-Section04.js:1586
(anonymous) @ 4011-Section04.js:2483
(anonymous) @ 4011-StateManager.js:543
notifyListeners @ 4011-StateManager.js:541
setValue @ 4011-StateManager.js:419
setTargetValue @ 4011-Section15.js:146
calculateValues @ 4011-Section15.js:1810
calculateTargetModel @ 4011-Section15.js:1662
calculateAll @ 4011-Section15.js:1328
(anonymous) @ 4011-Section15.js:2121
(anonymous) @ 4011-StateManager.js:543
notifyListeners @ 4011-StateManager.js:541
setValue @ 4011-StateManager.js:419
setFieldValue @ 4011-Section13.js:636
calculateCoolingSystem @ 4011-Section13.js:3030
calculateTargetModel @ 4011-Section13.js:3560
calculateAll @ 4011-Section13.js:3403
calculateAndRefresh @ 4011-Section13.js:2368
(anonymous) @ 4011-Section13.js:2396
(anonymous) @ 4011-StateManager.js:543
notifyListeners @ 4011-StateManager.js:541
setValue @ 4011-StateManager.js:419
setCalculatedValue @ 4011-Section14.js:412
calculateValues @ 4011-Section14.js:1165
calculateTargetModel @ 4011-Section14.js:1123
calculateAll @ 4011-Section14.js:944
(anonymous) @ 4011-Section14.js:1420
(anonymous) @ 4011-StateManager.js:543
notifyListeners @ 4011-StateManager.js:541
setValue @ 4011-StateManager.js:419
setValue @ 4011-Section11.js:338
setCalculatedValue @ 4011-Section11.js:955
calculateTargetModel @ 4011-Section11.js:1583
calculateAll @ 4011-Section11.js:1693
(anonymous) @ 4011-StateManager.js:543
notifyListeners @ 4011-StateManager.js:541
setValue @ 4011-StateManager.js:419
setValue @ 4011-Section03.js:215
setFieldValue @ 4011-Section03.js:453
calculateGroundFacing @ 4011-Section03.js:1663
calculateTargetModel @ 4011-Section03.js:1722
calculateAll @ 4011-Section03.js:1691
(anonymous) @ 4011-Section03.js:2191
(anonymous) @ 4011-StateManager.js:543
notifyListeners @ 4011-StateManager.js:541
setValue @ 4011-StateManager.js:419
setValue @ 4011-Section09.js:191
(anonymous) @ 4011-Section09.js:2541
 [S15] 🎯 TGT S03 CLIMATE READ: h_23=22, d_23=-26, d_24=30, h_24=24
 [StateManager] 🎯 h_10 setValue: "93.85947516627064" (state: calculated)
 [StateManager] h_10 setValue stack trace:
setValue @ 4011-StateManager.js:346
calculateValues @ 4011-Section15.js:1832
calculateTargetModel @ 4011-Section15.js:1662
calculateAll @ 4011-Section15.js:1328
(anonymous) @ 4011-Section15.js:2121
(anonymous) @ 4011-StateManager.js:543
notifyListeners @ 4011-StateManager.js:541
setValue @ 4011-StateManager.js:419
calculateValues @ 4011-Section15.js:1832
calculateTargetModel @ 4011-Section15.js:1662
calculateAll @ 4011-Section15.js:1328
(anonymous) @ 4011-Section15.js:2121
(anonymous) @ 4011-StateManager.js:543
notifyListeners @ 4011-StateManager.js:541
setValue @ 4011-StateManager.js:419
setCalculatedValue @ 4011-Section04.js:96
calculateRow32 @ 4011-Section04.js:1026
calculateTargetModel @ 4011-Section04.js:1620
calculateAll @ 4011-Section04.js:1586
(anonymous) @ 4011-Section04.js:2483
(anonymous) @ 4011-StateManager.js:543
notifyListeners @ 4011-StateManager.js:541
setValue @ 4011-StateManager.js:419
setTargetValue @ 4011-Section15.js:146
calculateValues @ 4011-Section15.js:1810
calculateTargetModel @ 4011-Section15.js:1662
calculateAll @ 4011-Section15.js:1328
(anonymous) @ 4011-Section15.js:2121
(anonymous) @ 4011-StateManager.js:543
notifyListeners @ 4011-StateManager.js:541
setValue @ 4011-StateManager.js:419
setFieldValue @ 4011-Section13.js:636
calculateCoolingSystem @ 4011-Section13.js:3030
calculateTargetModel @ 4011-Section13.js:3560
calculateAll @ 4011-Section13.js:3403
calculateAndRefresh @ 4011-Section13.js:2368
(anonymous) @ 4011-Section13.js:2396
(anonymous) @ 4011-StateManager.js:543
notifyListeners @ 4011-StateManager.js:541
setValue @ 4011-StateManager.js:419
setCalculatedValue @ 4011-Section14.js:412
calculateValues @ 4011-Section14.js:1165
calculateTargetModel @ 4011-Section14.js:1123
calculateAll @ 4011-Section14.js:944
(anonymous) @ 4011-Section14.js:1420
(anonymous) @ 4011-StateManager.js:543
notifyListeners @ 4011-StateManager.js:541
setValue @ 4011-StateManager.js:419
setValue @ 4011-Section11.js:338
setCalculatedValue @ 4011-Section11.js:955
calculateTargetModel @ 4011-Section11.js:1583
calculateAll @ 4011-Section11.js:1693
(anonymous) @ 4011-StateManager.js:543
notifyListeners @ 4011-StateManager.js:541
setValue @ 4011-StateManager.js:419
setValue @ 4011-Section03.js:215
setFieldValue @ 4011-Section03.js:453
calculateGroundFacing @ 4011-Section03.js:1663
calculateTargetModel @ 4011-Section03.js:1722
calculateAll @ 4011-Section03.js:1691
(anonymous) @ 4011-Section03.js:2191
(anonymous) @ 4011-StateManager.js:543
notifyListeners @ 4011-StateManager.js:541
setValue @ 4011-StateManager.js:419
setValue @ 4011-Section09.js:191
(anonymous) @ 4011-Section09.js:2541
 [S15] 🎯 TGT S03 CLIMATE READ: h_23=22, d_23=-26, d_24=30, h_24=24
 [StateManager] 🎯 h_10 setValue: "93.85947516627064" (state: calculated)
 [StateManager] h_10 setValue stack trace:
setValue @ 4011-StateManager.js:346
calculateValues @ 4011-Section15.js:1832
calculateTargetModel @ 4011-Section15.js:1662
calculateAll @ 4011-Section15.js:1328
(anonymous) @ 4011-Section15.js:2121
(anonymous) @ 4011-StateManager.js:543
notifyListeners @ 4011-StateManager.js:541
setValue @ 4011-StateManager.js:419
calculateValues @ 4011-Section15.js:1832
calculateTargetModel @ 4011-Section15.js:1662
calculateAll @ 4011-Section15.js:1328
(anonymous) @ 4011-Section15.js:2121
(anonymous) @ 4011-StateManager.js:543
notifyListeners @ 4011-StateManager.js:541
setValue @ 4011-StateManager.js:419
setCalculatedValue @ 4011-Section04.js:96
calculateRow32 @ 4011-Section04.js:1026
calculateTargetModel @ 4011-Section04.js:1620
calculateAll @ 4011-Section04.js:1586
(anonymous) @ 4011-Section04.js:2483
(anonymous) @ 4011-StateManager.js:543
notifyListeners @ 4011-StateManager.js:541
setValue @ 4011-StateManager.js:419
setTargetValue @ 4011-Section15.js:146
calculateValues @ 4011-Section15.js:1810
calculateTargetModel @ 4011-Section15.js:1662
calculateAll @ 4011-Section15.js:1328
(anonymous) @ 4011-Section15.js:2121
(anonymous) @ 4011-StateManager.js:543
notifyListeners @ 4011-StateManager.js:541
setValue @ 4011-StateManager.js:419
setFieldValue @ 4011-Section13.js:636
calculateCoolingSystem @ 4011-Section13.js:3030
calculateTargetModel @ 4011-Section13.js:3560
calculateAll @ 4011-Section13.js:3403
calculateAndRefresh @ 4011-Section13.js:2368
(anonymous) @ 4011-Section13.js:2396
(anonymous) @ 4011-StateManager.js:543
notifyListeners @ 4011-StateManager.js:541
setValue @ 4011-StateManager.js:419
setCalculatedValue @ 4011-Section14.js:412
calculateValues @ 4011-Section14.js:1165
calculateTargetModel @ 4011-Section14.js:1123
calculateAll @ 4011-Section14.js:944
(anonymous) @ 4011-Section14.js:1420
(anonymous) @ 4011-StateManager.js:543
notifyListeners @ 4011-StateManager.js:541
setValue @ 4011-StateManager.js:419
setValue @ 4011-Section11.js:338
setCalculatedValue @ 4011-Section11.js:955
calculateTargetModel @ 4011-Section11.js:1583
calculateAll @ 4011-Section11.js:1693
(anonymous) @ 4011-StateManager.js:543
notifyListeners @ 4011-StateManager.js:541
setValue @ 4011-StateManager.js:419
setValue @ 4011-Section03.js:215
setFieldValue @ 4011-Section03.js:453
calculateGroundFacing @ 4011-Section03.js:1663
calculateTargetModel @ 4011-Section03.js:1722
calculateAll @ 4011-Section03.js:1691
(anonymous) @ 4011-Section03.js:2191
(anonymous) @ 4011-StateManager.js:543
notifyListeners @ 4011-StateManager.js:541
setValue @ 4011-StateManager.js:419
setValue @ 4011-Section09.js:191
(anonymous) @ 4011-Section09.js:2541
 [S15] 🎯 TGT S03 CLIMATE READ: h_23=22, d_23=-26, d_24=30, h_24=24
 [StateManager] 🎯 h_10 setValue: "93.85947516627064" (state: calculated)
 [StateManager] h_10 setValue stack trace:
setValue @ 4011-StateManager.js:346
calculateValues @ 4011-Section15.js:1832
calculateTargetModel @ 4011-Section15.js:1662
calculateAll @ 4011-Section15.js:1328
(anonymous) @ 4011-Section15.js:2121
(anonymous) @ 4011-StateManager.js:543
notifyListeners @ 4011-StateManager.js:541
setValue @ 4011-StateManager.js:419
setCalculatedValue @ 4011-Section04.js:96
calculateRow32 @ 4011-Section04.js:1026
calculateTargetModel @ 4011-Section04.js:1620
calculateAll @ 4011-Section04.js:1586
(anonymous) @ 4011-Section04.js:2483
(anonymous) @ 4011-StateManager.js:543
notifyListeners @ 4011-StateManager.js:541
setValue @ 4011-StateManager.js:419
setTargetValue @ 4011-Section15.js:146
calculateValues @ 4011-Section15.js:1810
calculateTargetModel @ 4011-Section15.js:1662
calculateAll @ 4011-Section15.js:1328
(anonymous) @ 4011-Section15.js:2121
(anonymous) @ 4011-StateManager.js:543
notifyListeners @ 4011-StateManager.js:541
setValue @ 4011-StateManager.js:419
setFieldValue @ 4011-Section13.js:636
calculateCoolingSystem @ 4011-Section13.js:3030
calculateTargetModel @ 4011-Section13.js:3560
calculateAll @ 4011-Section13.js:3403
calculateAndRefresh @ 4011-Section13.js:2368
(anonymous) @ 4011-Section13.js:2396
(anonymous) @ 4011-StateManager.js:543
notifyListeners @ 4011-StateManager.js:541
setValue @ 4011-StateManager.js:419
setCalculatedValue @ 4011-Section14.js:412
calculateValues @ 4011-Section14.js:1165
calculateTargetModel @ 4011-Section14.js:1123
calculateAll @ 4011-Section14.js:944
(anonymous) @ 4011-Section14.js:1420
(anonymous) @ 4011-StateManager.js:543
notifyListeners @ 4011-StateManager.js:541
setValue @ 4011-StateManager.js:419
setValue @ 4011-Section11.js:338
setCalculatedValue @ 4011-Section11.js:955
calculateTargetModel @ 4011-Section11.js:1583
calculateAll @ 4011-Section11.js:1693
(anonymous) @ 4011-StateManager.js:543
notifyListeners @ 4011-StateManager.js:541
setValue @ 4011-StateManager.js:419
setValue @ 4011-Section03.js:215
setFieldValue @ 4011-Section03.js:453
calculateGroundFacing @ 4011-Section03.js:1663
calculateTargetModel @ 4011-Section03.js:1722
calculateAll @ 4011-Section03.js:1691
(anonymous) @ 4011-Section03.js:2191
(anonymous) @ 4011-StateManager.js:543
notifyListeners @ 4011-StateManager.js:541
setValue @ 4011-StateManager.js:419
setValue @ 4011-Section09.js:191
(anonymous) @ 4011-Section09.js:2541
 [S04] Row 32 Subtotals - F32: 132938, G32: 6779.838, J32: 301986.051518286, K32: 15401.288627432587
 [S04] Reference model calculations complete
 [S04DB] storeReference: ref_j_32=301986.051518286, ref_k_32=15401.288627432587 | current target j_32=133956.24295730147, k_32=6831.768390822375
 [S04] 🔄 Updating calculated display values for target mode
 [S04DB] displayContext mode=target j_32=133956.24295730147 ref_j_32=301986.051518286 k_32=6831.768390822375 ref_k_32=15401.288627432587
 [S04 DEBUG] Target mode - j_32: 133956.24295730147
 [S04 DEBUG] Target mode - k_32: 6831.768390822375
 [S04 DEBUG] Target mode - l_27: 51
 [S04] Calculated display values updated for target mode
 [S04] Dual-engine calculations completed successfully
 [S04] 🔄 Updating calculated display values for target mode
 [S04DB] displayContext mode=target j_32=133956.24295730147 ref_j_32=301986.051518286 k_32=6831.768390822375 ref_k_32=15401.288627432587
 [S04 DEBUG] Target mode - j_32: 133956.24295730147
 [S04 DEBUG] Target mode - k_32: 6831.768390822375
 [S04 DEBUG] Target mode - l_27: 51
 [S04] Calculated display values updated for target mode
 [StateManager] 🎯 h_10 setValue: "93.85947516627064" (state: calculated)
 [StateManager] h_10 setValue stack trace:
setValue @ 4011-StateManager.js:346
calculateValues @ 4011-Section15.js:1832
calculateTargetModel @ 4011-Section15.js:1662
calculateAll @ 4011-Section15.js:1328
(anonymous) @ 4011-Section15.js:2121
(anonymous) @ 4011-StateManager.js:543
notifyListeners @ 4011-StateManager.js:541
setValue @ 4011-StateManager.js:419
setFieldValue @ 4011-Section13.js:636
calculateCoolingSystem @ 4011-Section13.js:3030
calculateTargetModel @ 4011-Section13.js:3560
calculateAll @ 4011-Section13.js:3403
calculateAndRefresh @ 4011-Section13.js:2368
(anonymous) @ 4011-Section13.js:2396
(anonymous) @ 4011-StateManager.js:543
notifyListeners @ 4011-StateManager.js:541
setValue @ 4011-StateManager.js:419
setCalculatedValue @ 4011-Section14.js:412
calculateValues @ 4011-Section14.js:1165
calculateTargetModel @ 4011-Section14.js:1123
calculateAll @ 4011-Section14.js:944
(anonymous) @ 4011-Section14.js:1420
(anonymous) @ 4011-StateManager.js:543
notifyListeners @ 4011-StateManager.js:541
setValue @ 4011-StateManager.js:419
setValue @ 4011-Section11.js:338
setCalculatedValue @ 4011-Section11.js:955
calculateTargetModel @ 4011-Section11.js:1583
calculateAll @ 4011-Section11.js:1693
(anonymous) @ 4011-StateManager.js:543
notifyListeners @ 4011-StateManager.js:541
setValue @ 4011-StateManager.js:419
setValue @ 4011-Section03.js:215
setFieldValue @ 4011-Section03.js:453
calculateGroundFacing @ 4011-Section03.js:1663
calculateTargetModel @ 4011-Section03.js:1722
calculateAll @ 4011-Section03.js:1691
(anonymous) @ 4011-Section03.js:2191
(anonymous) @ 4011-StateManager.js:543
notifyListeners @ 4011-StateManager.js:541
setValue @ 4011-StateManager.js:419
setValue @ 4011-Section09.js:191
(anonymous) @ 4011-Section09.js:2541
 [S15] 🎯 TGT S03 CLIMATE READ: h_23=22, d_23=-26, d_24=30, h_24=24
 [StateManager] 🎯 h_10 setValue: "93.85947516627064" (state: calculated)
 [StateManager] h_10 setValue stack trace:
setValue @ 4011-StateManager.js:346
calculateValues @ 4011-Section15.js:1832
calculateTargetModel @ 4011-Section15.js:1662
calculateAll @ 4011-Section15.js:1328
(anonymous) @ 4011-Section15.js:2121
(anonymous) @ 4011-StateManager.js:543
notifyListeners @ 4011-StateManager.js:541
setValue @ 4011-StateManager.js:419
setFieldValue @ 4011-Section13.js:636
calculateCoolingSystem @ 4011-Section13.js:3030
calculateTargetModel @ 4011-Section13.js:3560
calculateAll @ 4011-Section13.js:3403
calculateAndRefresh @ 4011-Section13.js:2368
(anonymous) @ 4011-Section13.js:2396
(anonymous) @ 4011-StateManager.js:543
notifyListeners @ 4011-StateManager.js:541
setValue @ 4011-StateManager.js:419
setCalculatedValue @ 4011-Section14.js:412
calculateValues @ 4011-Section14.js:1165
calculateTargetModel @ 4011-Section14.js:1123
calculateAll @ 4011-Section14.js:944
(anonymous) @ 4011-Section14.js:1420
(anonymous) @ 4011-StateManager.js:543
notifyListeners @ 4011-StateManager.js:541
setValue @ 4011-StateManager.js:419
setValue @ 4011-Section11.js:338
setCalculatedValue @ 4011-Section11.js:955
calculateTargetModel @ 4011-Section11.js:1583
calculateAll @ 4011-Section11.js:1693
(anonymous) @ 4011-StateManager.js:543
notifyListeners @ 4011-StateManager.js:541
setValue @ 4011-StateManager.js:419
setValue @ 4011-Section03.js:215
setFieldValue @ 4011-Section03.js:453
calculateGroundFacing @ 4011-Section03.js:1663
calculateTargetModel @ 4011-Section03.js:1722
calculateAll @ 4011-Section03.js:1691
(anonymous) @ 4011-Section03.js:2191
(anonymous) @ 4011-StateManager.js:543
notifyListeners @ 4011-StateManager.js:541
setValue @ 4011-StateManager.js:419
setValue @ 4011-Section09.js:191
(anonymous) @ 4011-Section09.js:2541
 [Section13] 🧊 COOLING RESULTS: d_117=3826.8214105081656, j_116=2.663540445486518, l_116=0, l_114=6366.0721940341
2 [S14 LISTENER] 🔥 d_122 changed - triggering calculateAll() + UI update
 [S15] 🎯 TGT S03 CLIMATE READ: h_23=22, d_23=-26, d_24=30, h_24=24
 [StateManager] 🎯 h_10 setValue: "93.85947516627064" (state: calculated)
 [StateManager] h_10 setValue stack trace:
setValue @ 4011-StateManager.js:346
calculateValues @ 4011-Section15.js:1832
calculateTargetModel @ 4011-Section15.js:1662
calculateAll @ 4011-Section15.js:1328
(anonymous) @ 4011-Section15.js:2121
(anonymous) @ 4011-StateManager.js:543
notifyListeners @ 4011-StateManager.js:541
setValue @ 4011-StateManager.js:419
setFieldValue @ 4011-Section13.js:636
calculateCoolingVentilation @ 4011-Section13.js:3272
calculateCoolingSystem @ 4011-Section13.js:3040
calculateTargetModel @ 4011-Section13.js:3560
calculateAll @ 4011-Section13.js:3403
calculateAndRefresh @ 4011-Section13.js:2368
(anonymous) @ 4011-Section13.js:2396
(anonymous) @ 4011-StateManager.js:543
notifyListeners @ 4011-StateManager.js:541
setValue @ 4011-StateManager.js:419
setCalculatedValue @ 4011-Section14.js:412
calculateValues @ 4011-Section14.js:1165
calculateTargetModel @ 4011-Section14.js:1123
calculateAll @ 4011-Section14.js:944
(anonymous) @ 4011-Section14.js:1420
(anonymous) @ 4011-StateManager.js:543
notifyListeners @ 4011-StateManager.js:541
setValue @ 4011-StateManager.js:419
setValue @ 4011-Section11.js:338
setCalculatedValue @ 4011-Section11.js:955
calculateTargetModel @ 4011-Section11.js:1583
calculateAll @ 4011-Section11.js:1693
(anonymous) @ 4011-StateManager.js:543
notifyListeners @ 4011-StateManager.js:541
setValue @ 4011-StateManager.js:419
setValue @ 4011-Section03.js:215
setFieldValue @ 4011-Section03.js:453
calculateGroundFacing @ 4011-Section03.js:1663
calculateTargetModel @ 4011-Section03.js:1722
calculateAll @ 4011-Section03.js:1691
(anonymous) @ 4011-Section03.js:2191
(anonymous) @ 4011-StateManager.js:543
notifyListeners @ 4011-StateManager.js:541
setValue @ 4011-StateManager.js:419
setValue @ 4011-Section09.js:191
(anonymous) @ 4011-Section09.js:2541
 [S15] 🎯 TGT S03 CLIMATE READ: h_23=22, d_23=-26, d_24=30, h_24=24
 [StateManager] 🎯 h_10 setValue: "93.85947516627064" (state: calculated)
 [StateManager] h_10 setValue stack trace:
setValue @ 4011-StateManager.js:346
calculateValues @ 4011-Section15.js:1832
calculateTargetModel @ 4011-Section15.js:1662
calculateAll @ 4011-Section15.js:1328
(anonymous) @ 4011-Section15.js:2121
(anonymous) @ 4011-StateManager.js:543
notifyListeners @ 4011-StateManager.js:541
setValue @ 4011-StateManager.js:419
setFieldValue @ 4011-Section13.js:636
calculateCoolingVentilation @ 4011-Section13.js:3272
calculateCoolingSystem @ 4011-Section13.js:3040
calculateTargetModel @ 4011-Section13.js:3560
calculateAll @ 4011-Section13.js:3403
calculateAndRefresh @ 4011-Section13.js:2368
(anonymous) @ 4011-Section13.js:2396
(anonymous) @ 4011-StateManager.js:543
notifyListeners @ 4011-StateManager.js:541
setValue @ 4011-StateManager.js:419
setCalculatedValue @ 4011-Section14.js:412
calculateValues @ 4011-Section14.js:1165
calculateTargetModel @ 4011-Section14.js:1123
calculateAll @ 4011-Section14.js:944
(anonymous) @ 4011-Section14.js:1420
(anonymous) @ 4011-StateManager.js:543
notifyListeners @ 4011-StateManager.js:541
setValue @ 4011-StateManager.js:419
setValue @ 4011-Section11.js:338
setCalculatedValue @ 4011-Section11.js:955
calculateTargetModel @ 4011-Section11.js:1583
calculateAll @ 4011-Section11.js:1693
(anonymous) @ 4011-StateManager.js:543
notifyListeners @ 4011-StateManager.js:541
setValue @ 4011-StateManager.js:419
setValue @ 4011-Section03.js:215
setFieldValue @ 4011-Section03.js:453
calculateGroundFacing @ 4011-Section03.js:1663
calculateTargetModel @ 4011-Section03.js:1722
calculateAll @ 4011-Section03.js:1691
(anonymous) @ 4011-Section03.js:2191
(anonymous) @ 4011-StateManager.js:543
notifyListeners @ 4011-StateManager.js:541
setValue @ 4011-StateManager.js:419
setValue @ 4011-Section09.js:191
(anonymous) @ 4011-Section09.js:2541
 [S15] 🎯 TGT S03 CLIMATE READ: h_23=22, d_23=-26, d_24=30, h_24=24
 [S04] S15 target electricity changed: d_136
 [S04] Starting dual-engine Excel-compliant calculations
 [S04] Row 32 Subtotals - F32: 132938, G32: 6779.838, J32: 135865.62607299443, K32: 6929.146929722716
 [S04] j_32 update: 135865.62607299443
 [S01] j_32 listener: 133956.24295730147 → 135865.62607299443
 [S01] 🕐 j_32 listener timing: StateManager current j_32 = 135865.62607299443
2 🔄 [S05] updateCalculatedDisplayValues: mode=target
 [S15] 🎯 TGT S03 CLIMATE READ: h_23=22, d_23=-26, d_24=30, h_24=24
 [StateManager] 🎯 h_10 setValue: "95.19732768567435" (state: calculated)
 [StateManager] h_10 setValue stack trace:
setValue @ 4011-StateManager.js:346
calculateValues @ 4011-Section15.js:1832
calculateTargetModel @ 4011-Section15.js:1662
calculateAll @ 4011-Section15.js:1328
(anonymous) @ 4011-Section15.js:2121
(anonymous) @ 4011-StateManager.js:543
notifyListeners @ 4011-StateManager.js:541
setValue @ 4011-StateManager.js:419
setCalculatedValue @ 4011-Section04.js:96
calculateRow32 @ 4011-Section04.js:1026
calculateTargetModel @ 4011-Section04.js:1620
calculateAll @ 4011-Section04.js:1586
(anonymous) @ 4011-Section04.js:2483
(anonymous) @ 4011-StateManager.js:543
notifyListeners @ 4011-StateManager.js:541
setValue @ 4011-StateManager.js:419
setTargetValue @ 4011-Section15.js:146
calculateValues @ 4011-Section15.js:1810
calculateTargetModel @ 4011-Section15.js:1662
calculateAll @ 4011-Section15.js:1328
(anonymous) @ 4011-Section15.js:2121
(anonymous) @ 4011-StateManager.js:543
notifyListeners @ 4011-StateManager.js:541
setValue @ 4011-StateManager.js:419
setFieldValue @ 4011-Section13.js:636
updateTargetModelDOMValues @ 4011-Section13.js:3614
calculateTargetModel @ 4011-Section13.js:3570
calculateAll @ 4011-Section13.js:3403
calculateAndRefresh @ 4011-Section13.js:2368
(anonymous) @ 4011-Section13.js:2396
(anonymous) @ 4011-StateManager.js:543
notifyListeners @ 4011-StateManager.js:541
setValue @ 4011-StateManager.js:419
setCalculatedValue @ 4011-Section14.js:412
calculateValues @ 4011-Section14.js:1165
calculateTargetModel @ 4011-Section14.js:1123
calculateAll @ 4011-Section14.js:944
(anonymous) @ 4011-Section14.js:1420
(anonymous) @ 4011-StateManager.js:543
notifyListeners @ 4011-StateManager.js:541
setValue @ 4011-StateManager.js:419
setValue @ 4011-Section11.js:338
setCalculatedValue @ 4011-Section11.js:955
calculateTargetModel @ 4011-Section11.js:1583
calculateAll @ 4011-Section11.js:1693
(anonymous) @ 4011-StateManager.js:543
notifyListeners @ 4011-StateManager.js:541
setValue @ 4011-StateManager.js:419
setValue @ 4011-Section03.js:215
setFieldValue @ 4011-Section03.js:453
calculateGroundFacing @ 4011-Section03.js:1663
calculateTargetModel @ 4011-Section03.js:1722
calculateAll @ 4011-Section03.js:1691
(anonymous) @ 4011-Section03.js:2191
(anonymous) @ 4011-StateManager.js:543
notifyListeners @ 4011-StateManager.js:541
setValue @ 4011-StateManager.js:419
setValue @ 4011-Section09.js:191
(anonymous) @ 4011-Section09.js:2541
 [S15] 🎯 TGT S03 CLIMATE READ: h_23=22, d_23=-26, d_24=30, h_24=24
 [StateManager] 🎯 h_10 setValue: "95.19732768567435" (state: calculated)
 [StateManager] h_10 setValue stack trace:
setValue @ 4011-StateManager.js:346
calculateValues @ 4011-Section15.js:1832
calculateTargetModel @ 4011-Section15.js:1662
calculateAll @ 4011-Section15.js:1328
(anonymous) @ 4011-Section15.js:2121
(anonymous) @ 4011-StateManager.js:543
notifyListeners @ 4011-StateManager.js:541
setValue @ 4011-StateManager.js:419
calculateValues @ 4011-Section15.js:1832
calculateTargetModel @ 4011-Section15.js:1662
calculateAll @ 4011-Section15.js:1328
(anonymous) @ 4011-Section15.js:2121
(anonymous) @ 4011-StateManager.js:543
notifyListeners @ 4011-StateManager.js:541
setValue @ 4011-StateManager.js:419
setCalculatedValue @ 4011-Section04.js:96
calculateRow32 @ 4011-Section04.js:1026
calculateTargetModel @ 4011-Section04.js:1620
calculateAll @ 4011-Section04.js:1586
(anonymous) @ 4011-Section04.js:2483
(anonymous) @ 4011-StateManager.js:543
notifyListeners @ 4011-StateManager.js:541
setValue @ 4011-StateManager.js:419
setTargetValue @ 4011-Section15.js:146
calculateValues @ 4011-Section15.js:1810
calculateTargetModel @ 4011-Section15.js:1662
calculateAll @ 4011-Section15.js:1328
(anonymous) @ 4011-Section15.js:2121
(anonymous) @ 4011-StateManager.js:543
notifyListeners @ 4011-StateManager.js:541
setValue @ 4011-StateManager.js:419
setFieldValue @ 4011-Section13.js:636
updateTargetModelDOMValues @ 4011-Section13.js:3614
calculateTargetModel @ 4011-Section13.js:3570
calculateAll @ 4011-Section13.js:3403
calculateAndRefresh @ 4011-Section13.js:2368
(anonymous) @ 4011-Section13.js:2396
(anonymous) @ 4011-StateManager.js:543
notifyListeners @ 4011-StateManager.js:541
setValue @ 4011-StateManager.js:419
setCalculatedValue @ 4011-Section14.js:412
calculateValues @ 4011-Section14.js:1165
calculateTargetModel @ 4011-Section14.js:1123
calculateAll @ 4011-Section14.js:944
(anonymous) @ 4011-Section14.js:1420
(anonymous) @ 4011-StateManager.js:543
notifyListeners @ 4011-StateManager.js:541
setValue @ 4011-StateManager.js:419
setValue @ 4011-Section11.js:338
setCalculatedValue @ 4011-Section11.js:955
calculateTargetModel @ 4011-Section11.js:1583
calculateAll @ 4011-Section11.js:1693
(anonymous) @ 4011-StateManager.js:543
notifyListeners @ 4011-StateManager.js:541
setValue @ 4011-StateManager.js:419
setValue @ 4011-Section03.js:215
setFieldValue @ 4011-Section03.js:453
calculateGroundFacing @ 4011-Section03.js:1663
calculateTargetModel @ 4011-Section03.js:1722
calculateAll @ 4011-Section03.js:1691
(anonymous) @ 4011-Section03.js:2191
(anonymous) @ 4011-StateManager.js:543
notifyListeners @ 4011-StateManager.js:541
setValue @ 4011-StateManager.js:419
setValue @ 4011-Section09.js:191
(anonymous) @ 4011-Section09.js:2541
 [S15] 🎯 TGT S03 CLIMATE READ: h_23=22, d_23=-26, d_24=30, h_24=24
 [StateManager] 🎯 h_10 setValue: "95.19732768567435" (state: calculated)
 [StateManager] h_10 setValue stack trace:
setValue @ 4011-StateManager.js:346
calculateValues @ 4011-Section15.js:1832
calculateTargetModel @ 4011-Section15.js:1662
calculateAll @ 4011-Section15.js:1328
(anonymous) @ 4011-Section15.js:2121
(anonymous) @ 4011-StateManager.js:543
notifyListeners @ 4011-StateManager.js:541
setValue @ 4011-StateManager.js:419
calculateValues @ 4011-Section15.js:1832
calculateTargetModel @ 4011-Section15.js:1662
calculateAll @ 4011-Section15.js:1328
(anonymous) @ 4011-Section15.js:2121
(anonymous) @ 4011-StateManager.js:543
notifyListeners @ 4011-StateManager.js:541
setValue @ 4011-StateManager.js:419
setCalculatedValue @ 4011-Section04.js:96
calculateRow32 @ 4011-Section04.js:1026
calculateTargetModel @ 4011-Section04.js:1620
calculateAll @ 4011-Section04.js:1586
(anonymous) @ 4011-Section04.js:2483
(anonymous) @ 4011-StateManager.js:543
notifyListeners @ 4011-StateManager.js:541
setValue @ 4011-StateManager.js:419
setTargetValue @ 4011-Section15.js:146
calculateValues @ 4011-Section15.js:1810
calculateTargetModel @ 4011-Section15.js:1662
calculateAll @ 4011-Section15.js:1328
(anonymous) @ 4011-Section15.js:2121
(anonymous) @ 4011-StateManager.js:543
notifyListeners @ 4011-StateManager.js:541
setValue @ 4011-StateManager.js:419
setFieldValue @ 4011-Section13.js:636
updateTargetModelDOMValues @ 4011-Section13.js:3614
calculateTargetModel @ 4011-Section13.js:3570
calculateAll @ 4011-Section13.js:3403
calculateAndRefresh @ 4011-Section13.js:2368
(anonymous) @ 4011-Section13.js:2396
(anonymous) @ 4011-StateManager.js:543
notifyListeners @ 4011-StateManager.js:541
setValue @ 4011-StateManager.js:419
setCalculatedValue @ 4011-Section14.js:412
calculateValues @ 4011-Section14.js:1165
calculateTargetModel @ 4011-Section14.js:1123
calculateAll @ 4011-Section14.js:944
(anonymous) @ 4011-Section14.js:1420
(anonymous) @ 4011-StateManager.js:543
notifyListeners @ 4011-StateManager.js:541
setValue @ 4011-StateManager.js:419
setValue @ 4011-Section11.js:338
setCalculatedValue @ 4011-Section11.js:955
calculateTargetModel @ 4011-Section11.js:1583
calculateAll @ 4011-Section11.js:1693
(anonymous) @ 4011-StateManager.js:543
notifyListeners @ 4011-StateManager.js:541
setValue @ 4011-StateManager.js:419
setValue @ 4011-Section03.js:215
setFieldValue @ 4011-Section03.js:453
calculateGroundFacing @ 4011-Section03.js:1663
calculateTargetModel @ 4011-Section03.js:1722
calculateAll @ 4011-Section03.js:1691
(anonymous) @ 4011-Section03.js:2191
(anonymous) @ 4011-StateManager.js:543
notifyListeners @ 4011-StateManager.js:541
setValue @ 4011-StateManager.js:419
setValue @ 4011-Section09.js:191
(anonymous) @ 4011-Section09.js:2541
 [S15] 🎯 TGT S03 CLIMATE READ: h_23=22, d_23=-26, d_24=30, h_24=24
 [StateManager] 🎯 h_10 setValue: "95.19732768567435" (state: calculated)
 [StateManager] h_10 setValue stack trace:
setValue @ 4011-StateManager.js:346
calculateValues @ 4011-Section15.js:1832
calculateTargetModel @ 4011-Section15.js:1662
calculateAll @ 4011-Section15.js:1328
(anonymous) @ 4011-Section15.js:2121
(anonymous) @ 4011-StateManager.js:543
notifyListeners @ 4011-StateManager.js:541
setValue @ 4011-StateManager.js:419
setCalculatedValue @ 4011-Section04.js:96
calculateRow32 @ 4011-Section04.js:1026
calculateTargetModel @ 4011-Section04.js:1620
calculateAll @ 4011-Section04.js:1586
(anonymous) @ 4011-Section04.js:2483
(anonymous) @ 4011-StateManager.js:543
notifyListeners @ 4011-StateManager.js:541
setValue @ 4011-StateManager.js:419
setTargetValue @ 4011-Section15.js:146
calculateValues @ 4011-Section15.js:1810
calculateTargetModel @ 4011-Section15.js:1662
calculateAll @ 4011-Section15.js:1328
(anonymous) @ 4011-Section15.js:2121
(anonymous) @ 4011-StateManager.js:543
notifyListeners @ 4011-StateManager.js:541
setValue @ 4011-StateManager.js:419
setFieldValue @ 4011-Section13.js:636
updateTargetModelDOMValues @ 4011-Section13.js:3614
calculateTargetModel @ 4011-Section13.js:3570
calculateAll @ 4011-Section13.js:3403
calculateAndRefresh @ 4011-Section13.js:2368
(anonymous) @ 4011-Section13.js:2396
(anonymous) @ 4011-StateManager.js:543
notifyListeners @ 4011-StateManager.js:541
setValue @ 4011-StateManager.js:419
setCalculatedValue @ 4011-Section14.js:412
calculateValues @ 4011-Section14.js:1165
calculateTargetModel @ 4011-Section14.js:1123
calculateAll @ 4011-Section14.js:944
(anonymous) @ 4011-Section14.js:1420
(anonymous) @ 4011-StateManager.js:543
notifyListeners @ 4011-StateManager.js:541
setValue @ 4011-StateManager.js:419
setValue @ 4011-Section11.js:338
setCalculatedValue @ 4011-Section11.js:955
calculateTargetModel @ 4011-Section11.js:1583
calculateAll @ 4011-Section11.js:1693
(anonymous) @ 4011-StateManager.js:543
notifyListeners @ 4011-StateManager.js:541
setValue @ 4011-StateManager.js:419
setValue @ 4011-Section03.js:215
setFieldValue @ 4011-Section03.js:453
calculateGroundFacing @ 4011-Section03.js:1663
calculateTargetModel @ 4011-Section03.js:1722
calculateAll @ 4011-Section03.js:1691
(anonymous) @ 4011-Section03.js:2191
(anonymous) @ 4011-StateManager.js:543
notifyListeners @ 4011-StateManager.js:541
setValue @ 4011-StateManager.js:419
setValue @ 4011-Section09.js:191
(anonymous) @ 4011-Section09.js:2541
 [S04] Row 32 Subtotals - F32: 132938, G32: 6779.838, J32: 301986.051518286, K32: 15401.288627432587
 [S04] Reference model calculations complete
 [S04DB] storeReference: ref_j_32=301986.051518286, ref_k_32=15401.288627432587 | current target j_32=135865.62607299443, k_32=6929.146929722716
 [S04] 🔄 Updating calculated display values for target mode
 [S04DB] displayContext mode=target j_32=135865.62607299443 ref_j_32=301986.051518286 k_32=6929.146929722716 ref_k_32=15401.288627432587
 [S04 DEBUG] Target mode - j_32: 135865.62607299443
 [S04 DEBUG] Target mode - k_32: 6929.146929722716
 [S04 DEBUG] Target mode - l_27: 51
 [S04] Calculated display values updated for target mode
 [S04] Dual-engine calculations completed successfully
 [S04] 🔄 Updating calculated display values for target mode
 [S04DB] displayContext mode=target j_32=135865.62607299443 ref_j_32=301986.051518286 k_32=6929.146929722716 ref_k_32=15401.288627432587
 [S04 DEBUG] Target mode - j_32: 135865.62607299443
4011-Section04.js:582 [S04 DEBUG] Target mode - k_32: 6929.146929722716
4011-Section04.js:582 [S04 DEBUG] Target mode - l_27: 51
4011-Section04.js:617 [S04] Calculated display values updated for target mode
4011-StateManager.js:343 [StateManager] 🎯 h_10 setValue: "95.19732768567435" (state: calculated)
4011-StateManager.js:346 [StateManager] h_10 setValue stack trace:
setValue @ 4011-StateManager.js:346
calculateValues @ 4011-Section15.js:1832
calculateTargetModel @ 4011-Section15.js:1662
calculateAll @ 4011-Section15.js:1328
(anonymous) @ 4011-Section15.js:2121
(anonymous) @ 4011-StateManager.js:543
notifyListeners @ 4011-StateManager.js:541
setValue @ 4011-StateManager.js:419
setFieldValue @ 4011-Section13.js:636
updateTargetModelDOMValues @ 4011-Section13.js:3614
calculateTargetModel @ 4011-Section13.js:3570
calculateAll @ 4011-Section13.js:3403
calculateAndRefresh @ 4011-Section13.js:2368
(anonymous) @ 4011-Section13.js:2396
(anonymous) @ 4011-StateManager.js:543
notifyListeners @ 4011-StateManager.js:541
setValue @ 4011-StateManager.js:419
setCalculatedValue @ 4011-Section14.js:412
calculateValues @ 4011-Section14.js:1165
calculateTargetModel @ 4011-Section14.js:1123
calculateAll @ 4011-Section14.js:944
(anonymous) @ 4011-Section14.js:1420
(anonymous) @ 4011-StateManager.js:543
notifyListeners @ 4011-StateManager.js:541
setValue @ 4011-StateManager.js:419
setValue @ 4011-Section11.js:338
setCalculatedValue @ 4011-Section11.js:955
calculateTargetModel @ 4011-Section11.js:1583
calculateAll @ 4011-Section11.js:1693
(anonymous) @ 4011-StateManager.js:543
notifyListeners @ 4011-StateManager.js:541
setValue @ 4011-StateManager.js:419
setValue @ 4011-Section03.js:215
setFieldValue @ 4011-Section03.js:453
calculateGroundFacing @ 4011-Section03.js:1663
calculateTargetModel @ 4011-Section03.js:1722
calculateAll @ 4011-Section03.js:1691
(anonymous) @ 4011-Section03.js:2191
(anonymous) @ 4011-StateManager.js:543
notifyListeners @ 4011-StateManager.js:541
setValue @ 4011-StateManager.js:419
setValue @ 4011-Section09.js:191
(anonymous) @ 4011-Section09.js:2541
4011-Section15.js:1750 [S15] 🎯 TGT S03 CLIMATE READ: h_23=22, d_23=-26, d_24=30, h_24=24
4011-StateManager.js:343 [StateManager] 🎯 h_10 setValue: "95.19732768567435" (state: calculated)
4011-StateManager.js:346 [StateManager] h_10 setValue stack trace:
setValue @ 4011-StateManager.js:346
calculateValues @ 4011-Section15.js:1832
calculateTargetModel @ 4011-Section15.js:1662
calculateAll @ 4011-Section15.js:1328
(anonymous) @ 4011-Section15.js:2121
(anonymous) @ 4011-StateManager.js:543
notifyListeners @ 4011-StateManager.js:541
setValue @ 4011-StateManager.js:419
setFieldValue @ 4011-Section13.js:636
updateTargetModelDOMValues @ 4011-Section13.js:3614
calculateTargetModel @ 4011-Section13.js:3570
calculateAll @ 4011-Section13.js:3403
calculateAndRefresh @ 4011-Section13.js:2368
(anonymous) @ 4011-Section13.js:2396
(anonymous) @ 4011-StateManager.js:543
notifyListeners @ 4011-StateManager.js:541
setValue @ 4011-StateManager.js:419
setCalculatedValue @ 4011-Section14.js:412
calculateValues @ 4011-Section14.js:1165
calculateTargetModel @ 4011-Section14.js:1123
calculateAll @ 4011-Section14.js:944
(anonymous) @ 4011-Section14.js:1420
(anonymous) @ 4011-StateManager.js:543
notifyListeners @ 4011-StateManager.js:541
setValue @ 4011-StateManager.js:419
setValue @ 4011-Section11.js:338
setCalculatedValue @ 4011-Section11.js:955
calculateTargetModel @ 4011-Section11.js:1583
calculateAll @ 4011-Section11.js:1693
(anonymous) @ 4011-StateManager.js:543
notifyListeners @ 4011-StateManager.js:541
setValue @ 4011-StateManager.js:419
setValue @ 4011-Section03.js:215
setFieldValue @ 4011-Section03.js:453
calculateGroundFacing @ 4011-Section03.js:1663
calculateTargetModel @ 4011-Section03.js:1722
calculateAll @ 4011-Section03.js:1691
(anonymous) @ 4011-Section03.js:2191
(anonymous) @ 4011-StateManager.js:543
notifyListeners @ 4011-StateManager.js:541
setValue @ 4011-StateManager.js:419
setValue @ 4011-Section09.js:191
(anonymous) @ 4011-Section09.js:2541
24011-Section14.js:1416 [S14 LISTENER] 🔥 d_122 changed - triggering calculateAll() + UI update
4011-Section15.js:1750 [S15] 🎯 TGT S03 CLIMATE READ: h_23=22, d_23=-26, d_24=30, h_24=24
4011-StateManager.js:343 [StateManager] 🎯 h_10 setValue: "95.19732768567435" (state: calculated)
4011-StateManager.js:346 [StateManager] h_10 setValue stack trace:
setValue @ 4011-StateManager.js:346
calculateValues @ 4011-Section15.js:1832
calculateTargetModel @ 4011-Section15.js:1662
calculateAll @ 4011-Section15.js:1328
(anonymous) @ 4011-Section15.js:2121
(anonymous) @ 4011-StateManager.js:543
notifyListeners @ 4011-StateManager.js:541
setValue @ 4011-StateManager.js:419
setFieldValue @ 4011-Section13.js:636
updateTargetModelDOMValues @ 4011-Section13.js:3684
calculateTargetModel @ 4011-Section13.js:3570
calculateAll @ 4011-Section13.js:3403
calculateAndRefresh @ 4011-Section13.js:2368
(anonymous) @ 4011-Section13.js:2396
(anonymous) @ 4011-StateManager.js:543
notifyListeners @ 4011-StateManager.js:541
setValue @ 4011-StateManager.js:419
setCalculatedValue @ 4011-Section14.js:412
calculateValues @ 4011-Section14.js:1165
calculateTargetModel @ 4011-Section14.js:1123
calculateAll @ 4011-Section14.js:944
(anonymous) @ 4011-Section14.js:1420
(anonymous) @ 4011-StateManager.js:543
notifyListeners @ 4011-StateManager.js:541
setValue @ 4011-StateManager.js:419
setValue @ 4011-Section11.js:338
setCalculatedValue @ 4011-Section11.js:955
calculateTargetModel @ 4011-Section11.js:1583
calculateAll @ 4011-Section11.js:1693
(anonymous) @ 4011-StateManager.js:543
notifyListeners @ 4011-StateManager.js:541
setValue @ 4011-StateManager.js:419
setValue @ 4011-Section03.js:215
setFieldValue @ 4011-Section03.js:453
calculateGroundFacing @ 4011-Section03.js:1663
calculateTargetModel @ 4011-Section03.js:1722
calculateAll @ 4011-Section03.js:1691
(anonymous) @ 4011-Section03.js:2191
(anonymous) @ 4011-StateManager.js:543
notifyListeners @ 4011-StateManager.js:541
setValue @ 4011-StateManager.js:419
setValue @ 4011-Section09.js:191
(anonymous) @ 4011-Section09.js:2541
4011-Section15.js:1750 [S15] 🎯 TGT S03 CLIMATE READ: h_23=22, d_23=-26, d_24=30, h_24=24
4011-StateManager.js:343 [StateManager] 🎯 h_10 setValue: "95.19732768567435" (state: calculated)
4011-StateManager.js:346 [StateManager] h_10 setValue stack trace:
setValue @ 4011-StateManager.js:346
calculateValues @ 4011-Section15.js:1832
calculateTargetModel @ 4011-Section15.js:1662
calculateAll @ 4011-Section15.js:1328
(anonymous) @ 4011-Section15.js:2121
(anonymous) @ 4011-StateManager.js:543
notifyListeners @ 4011-StateManager.js:541
setValue @ 4011-StateManager.js:419
setFieldValue @ 4011-Section13.js:636
updateTargetModelDOMValues @ 4011-Section13.js:3684
calculateTargetModel @ 4011-Section13.js:3570
calculateAll @ 4011-Section13.js:3403
calculateAndRefresh @ 4011-Section13.js:2368
(anonymous) @ 4011-Section13.js:2396
(anonymous) @ 4011-StateManager.js:543
notifyListeners @ 4011-StateManager.js:541
setValue @ 4011-StateManager.js:419
setCalculatedValue @ 4011-Section14.js:412
calculateValues @ 4011-Section14.js:1165
calculateTargetModel @ 4011-Section14.js:1123
calculateAll @ 4011-Section14.js:944
(anonymous) @ 4011-Section14.js:1420
(anonymous) @ 4011-StateManager.js:543
notifyListeners @ 4011-StateManager.js:541
setValue @ 4011-StateManager.js:419
setValue @ 4011-Section11.js:338
setCalculatedValue @ 4011-Section11.js:955
calculateTargetModel @ 4011-Section11.js:1583
calculateAll @ 4011-Section11.js:1693
(anonymous) @ 4011-StateManager.js:543
notifyListeners @ 4011-StateManager.js:541
setValue @ 4011-StateManager.js:419
setValue @ 4011-Section03.js:215
setFieldValue @ 4011-Section03.js:453
calculateGroundFacing @ 4011-Section03.js:1663
calculateTargetModel @ 4011-Section03.js:1722
calculateAll @ 4011-Section03.js:1691
(anonymous) @ 4011-Section03.js:2191
(anonymous) @ 4011-StateManager.js:543
notifyListeners @ 4011-StateManager.js:541
setValue @ 4011-StateManager.js:419
setValue @ 4011-Section09.js:191
(anonymous) @ 4011-Section09.js:2541
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
 🔍 [S13-CONTEXT] Creating reference context: g_118="Volume Constant" from ReferenceState
 🔍 [S13-CONTEXT] ReferenceState.g_118="Volume Constant", TargetState.g_118="Volume by Schedule"
 [Section13] Running Reference Model calculations...
 [S13 CONTAMINATION DEBUG] calculateReferenceModel: Using system type = Electricity
 [S13] REF HEATING: system=Electricity, ted=251391.1974742337, afue=0.9, cop=1
 [S13 REF DEBUG] About to calculate with heating system: Electricity
 [S13 REF DEBUG] Will S13 publish ref_d_113=Electricity?
 🔍 [S13-VENT] calculateVentilationRates: ventMethod="Volume Constant", ach(l_118)=3.5, ratePerPerson(d_119)=8.33, volume(d_105)=8000
 🔍 [S13-VENT] isReferenceCalculation=true, hasContext=true
 🔍 [S13-VENT] calculateVentilationValues: ventMethod="Volume Constant", ach(l_118)=3.5, ratePerPerson(d_119)=8.33, volume(d_105)=8000
 🔍 [S13-VENT] Supporting values: occupants(d_63)=126, occupiedHours(i_63)=4380, totalHours(j_63)=8760
 🔍 [S13-VENT] Volume Constant calculation: ventRateLs = (3.5 * 8000) / 3.6 = 7777.777777777777
 ✅ [S13-VENT] Final d_120 result: 7777.777777777777 L/s (from method="Volume Constant", ach=3.5, volume=8000)
 [Section13] 🧊 COOLING CALC: mode=REF, coolingSystemType="No Cooling", heatingType="Electricity", isCoolingActive=false, coolingDemand=9572.242304946165
 [S13 CONTAMINATION DEBUG] storeReferenceResults called during reference mode
 [S13 CONTAMINATION DEBUG] Reference heating system: Electricity
 [S13 CONTAMINATION DEBUG] Target heating system: Heatpump
 [S13 CONTAMINATION DEBUG] Reference h_115 (gas volume): 0
 [S13 CONTAMINATION DEBUG] Reference f_115 (oil volume): 0
 [S13 CONTAMINATION DEBUG] Writing ref_f_115 = 0
 [S13 CONTAMINATION DEBUG] Writing ref_h_115 = 0
 [Section13] Reference results stored with ref_ prefix for downstream sections
 [S13 DEBUG] Total Reference results stored: 34
 [Section13] Reference Model calculations complete
 [Section13] ✅ Reference Model complete
 [Section13] 🔄 Starting Target Model calculations...
 🔍 [S13-CONTEXT] Creating target context: g_118="Volume by Schedule" from TargetState
 🔍 [S13-CONTEXT] TargetState.g_118="Volume by Schedule", ReferenceState.g_118="Volume Constant"
 [Section13] Running Target Model calculations...
 [S13] TGT HEATING: system=Heatpump, ted=127565.6677259902, afue=0.98, cop=3.663540445486518
 🔍 [S13-VENT] calculateVentilationRates: ventMethod="Volume by Schedule", ach(l_118)=3, ratePerPerson(d_119)=14, volume(d_105)=8000
 🔍 [S13-VENT] isReferenceCalculation=false, hasContext=true
 🔍 [S13-VENT] calculateVentilationValues: ventMethod="Volume by Schedule", ach(l_118)=3, ratePerPerson(d_119)=14, volume(d_105)=8000
 🔍 [S13-VENT] Supporting values: occupants(d_63)=126, occupiedHours(i_63)=4380, totalHours(j_63)=8760
 ✅ [S13-VENT] Final d_120 result: 3333.333333333333 L/s (from method="Volume by Schedule", ach=3, volume=8000)
 [Section13] 🧊 COOLING CALC: mode=TGT, coolingSystemType="Cooling", heatingType="Heatpump", isCoolingActive=true, coolingDemand=9572.242304946165
 [S15] 🎯 TGT S03 CLIMATE READ: h_23=22, d_23=-26, d_24=30, h_24=24
 [S04] S15 target electricity changed: d_136
 [S04] Starting dual-engine Excel-compliant calculations
 [S04] Row 32 Subtotals - F32: 132938, G32: 6779.838, J32: 135632.60866165842, K32: 6917.26304174458
 [S04] j_32 update: 135632.60866165842
 [S01] j_32 listener: 135865.62607299443 → 135632.60866165842
 [S01] 🕐 j_32 listener timing: StateManager current j_32 = 135632.60866165842
2 🔄 [S05] updateCalculatedDisplayValues: mode=target
 [S15] 🎯 TGT S03 CLIMATE READ: h_23=22, d_23=-26, d_24=30, h_24=24
 [StateManager] 🎯 h_10 setValue: "95.03405875957007" (state: calculated)
 [StateManager] h_10 setValue stack trace:
setValue @ 4011-StateManager.js:346
calculateValues @ 4011-Section15.js:1832
calculateTargetModel @ 4011-Section15.js:1662
calculateAll @ 4011-Section15.js:1328
(anonymous) @ 4011-Section15.js:2121
(anonymous) @ 4011-StateManager.js:543
notifyListeners @ 4011-StateManager.js:541
setValue @ 4011-StateManager.js:419
setCalculatedValue @ 4011-Section04.js:96
calculateRow32 @ 4011-Section04.js:1026
calculateTargetModel @ 4011-Section04.js:1620
calculateAll @ 4011-Section04.js:1586
(anonymous) @ 4011-Section04.js:2483
(anonymous) @ 4011-StateManager.js:543
notifyListeners @ 4011-StateManager.js:541
setValue @ 4011-StateManager.js:419
setTargetValue @ 4011-Section15.js:146
calculateValues @ 4011-Section15.js:1810
calculateTargetModel @ 4011-Section15.js:1662
calculateAll @ 4011-Section15.js:1328
(anonymous) @ 4011-Section15.js:2121
(anonymous) @ 4011-StateManager.js:543
notifyListeners @ 4011-StateManager.js:541
setValue @ 4011-StateManager.js:419
setFieldValue @ 4011-Section13.js:636
calculateCoolingSystem @ 4011-Section13.js:3030
calculateTargetModel @ 4011-Section13.js:3560
calculateAll @ 4011-Section13.js:3403
calculateAndRefresh @ 4011-Section13.js:2368
(anonymous) @ 4011-Section13.js:2396
(anonymous) @ 4011-StateManager.js:543
notifyListeners @ 4011-StateManager.js:541
setValue @ 4011-StateManager.js:419
setCalculatedValue @ 4011-Section14.js:412
calculateValues @ 4011-Section14.js:1165
calculateTargetModel @ 4011-Section14.js:1123
calculateAll @ 4011-Section14.js:944
(anonymous) @ 4011-Section14.js:1420
(anonymous) @ 4011-StateManager.js:543
notifyListeners @ 4011-StateManager.js:541
setValue @ 4011-StateManager.js:419
setValue @ 4011-Section11.js:338
setCalculatedValue @ 4011-Section11.js:955
calculateTargetModel @ 4011-Section11.js:1583
calculateAll @ 4011-Section11.js:1693
(anonymous) @ 4011-StateManager.js:543
notifyListeners @ 4011-StateManager.js:541
setValue @ 4011-StateManager.js:419
setValue @ 4011-Section03.js:215
setFieldValue @ 4011-Section03.js:453
calculateGroundFacing @ 4011-Section03.js:1663
calculateTargetModel @ 4011-Section03.js:1722
calculateAll @ 4011-Section03.js:1691
(anonymous) @ 4011-Section03.js:2191
(anonymous) @ 4011-StateManager.js:543
notifyListeners @ 4011-StateManager.js:541
setValue @ 4011-StateManager.js:419
setValue @ 4011-Section09.js:191
(anonymous) @ 4011-Section09.js:2541
 [S15] 🎯 TGT S03 CLIMATE READ: h_23=22, d_23=-26, d_24=30, h_24=24
 [StateManager] 🎯 h_10 setValue: "95.03405875957007" (state: calculated)
 [StateManager] h_10 setValue stack trace:
setValue @ 4011-StateManager.js:346
calculateValues @ 4011-Section15.js:1832
calculateTargetModel @ 4011-Section15.js:1662
calculateAll @ 4011-Section15.js:1328
(anonymous) @ 4011-Section15.js:2121
(anonymous) @ 4011-StateManager.js:543
notifyListeners @ 4011-StateManager.js:541
setValue @ 4011-StateManager.js:419
calculateValues @ 4011-Section15.js:1832
calculateTargetModel @ 4011-Section15.js:1662
calculateAll @ 4011-Section15.js:1328
(anonymous) @ 4011-Section15.js:2121
(anonymous) @ 4011-StateManager.js:543
notifyListeners @ 4011-StateManager.js:541
setValue @ 4011-StateManager.js:419
setCalculatedValue @ 4011-Section04.js:96
calculateRow32 @ 4011-Section04.js:1026
calculateTargetModel @ 4011-Section04.js:1620
calculateAll @ 4011-Section04.js:1586
(anonymous) @ 4011-Section04.js:2483
(anonymous) @ 4011-StateManager.js:543
notifyListeners @ 4011-StateManager.js:541
setValue @ 4011-StateManager.js:419
setTargetValue @ 4011-Section15.js:146
calculateValues @ 4011-Section15.js:1810
calculateTargetModel @ 4011-Section15.js:1662
calculateAll @ 4011-Section15.js:1328
(anonymous) @ 4011-Section15.js:2121
(anonymous) @ 4011-StateManager.js:543
notifyListeners @ 4011-StateManager.js:541
setValue @ 4011-StateManager.js:419
setFieldValue @ 4011-Section13.js:636
calculateCoolingSystem @ 4011-Section13.js:3030
calculateTargetModel @ 4011-Section13.js:3560
calculateAll @ 4011-Section13.js:3403
calculateAndRefresh @ 4011-Section13.js:2368
(anonymous) @ 4011-Section13.js:2396
(anonymous) @ 4011-StateManager.js:543
notifyListeners @ 4011-StateManager.js:541
setValue @ 4011-StateManager.js:419
setCalculatedValue @ 4011-Section14.js:412
calculateValues @ 4011-Section14.js:1165
calculateTargetModel @ 4011-Section14.js:1123
calculateAll @ 4011-Section14.js:944
(anonymous) @ 4011-Section14.js:1420
(anonymous) @ 4011-StateManager.js:543
notifyListeners @ 4011-StateManager.js:541
setValue @ 4011-StateManager.js:419
setValue @ 4011-Section11.js:338
setCalculatedValue @ 4011-Section11.js:955
calculateTargetModel @ 4011-Section11.js:1583
calculateAll @ 4011-Section11.js:1693
(anonymous) @ 4011-StateManager.js:543
notifyListeners @ 4011-StateManager.js:541
setValue @ 4011-StateManager.js:419
setValue @ 4011-Section03.js:215
setFieldValue @ 4011-Section03.js:453
calculateGroundFacing @ 4011-Section03.js:1663
calculateTargetModel @ 4011-Section03.js:1722
calculateAll @ 4011-Section03.js:1691
(anonymous) @ 4011-Section03.js:2191
(anonymous) @ 4011-StateManager.js:543
notifyListeners @ 4011-StateManager.js:541
setValue @ 4011-StateManager.js:419
setValue @ 4011-Section09.js:191
(anonymous) @ 4011-Section09.js:2541
 [S15] 🎯 TGT S03 CLIMATE READ: h_23=22, d_23=-26, d_24=30, h_24=24
 [StateManager] 🎯 h_10 setValue: "95.03405875957007" (state: calculated)
 [StateManager] h_10 setValue stack trace:
setValue @ 4011-StateManager.js:346
calculateValues @ 4011-Section15.js:1832
calculateTargetModel @ 4011-Section15.js:1662
calculateAll @ 4011-Section15.js:1328
(anonymous) @ 4011-Section15.js:2121
(anonymous) @ 4011-StateManager.js:543
notifyListeners @ 4011-StateManager.js:541
setValue @ 4011-StateManager.js:419
calculateValues @ 4011-Section15.js:1832
calculateTargetModel @ 4011-Section15.js:1662
calculateAll @ 4011-Section15.js:1328
(anonymous) @ 4011-Section15.js:2121
(anonymous) @ 4011-StateManager.js:543
notifyListeners @ 4011-StateManager.js:541
setValue @ 4011-StateManager.js:419
setCalculatedValue @ 4011-Section04.js:96
calculateRow32 @ 4011-Section04.js:1026
calculateTargetModel @ 4011-Section04.js:1620
calculateAll @ 4011-Section04.js:1586
(anonymous) @ 4011-Section04.js:2483
(anonymous) @ 4011-StateManager.js:543
notifyListeners @ 4011-StateManager.js:541
setValue @ 4011-StateManager.js:419
setTargetValue @ 4011-Section15.js:146
calculateValues @ 4011-Section15.js:1810
calculateTargetModel @ 4011-Section15.js:1662
calculateAll @ 4011-Section15.js:1328
(anonymous) @ 4011-Section15.js:2121
(anonymous) @ 4011-StateManager.js:543
notifyListeners @ 4011-StateManager.js:541
setValue @ 4011-StateManager.js:419
setFieldValue @ 4011-Section13.js:636
calculateCoolingSystem @ 4011-Section13.js:3030
calculateTargetModel @ 4011-Section13.js:3560
calculateAll @ 4011-Section13.js:3403
calculateAndRefresh @ 4011-Section13.js:2368
(anonymous) @ 4011-Section13.js:2396
(anonymous) @ 4011-StateManager.js:543
notifyListeners @ 4011-StateManager.js:541
setValue @ 4011-StateManager.js:419
setCalculatedValue @ 4011-Section14.js:412
calculateValues @ 4011-Section14.js:1165
calculateTargetModel @ 4011-Section14.js:1123
calculateAll @ 4011-Section14.js:944
(anonymous) @ 4011-Section14.js:1420
(anonymous) @ 4011-StateManager.js:543
notifyListeners @ 4011-StateManager.js:541
setValue @ 4011-StateManager.js:419
setValue @ 4011-Section11.js:338
setCalculatedValue @ 4011-Section11.js:955
calculateTargetModel @ 4011-Section11.js:1583
calculateAll @ 4011-Section11.js:1693
(anonymous) @ 4011-StateManager.js:543
notifyListeners @ 4011-StateManager.js:541
setValue @ 4011-StateManager.js:419
setValue @ 4011-Section03.js:215
setFieldValue @ 4011-Section03.js:453
calculateGroundFacing @ 4011-Section03.js:1663
calculateTargetModel @ 4011-Section03.js:1722
calculateAll @ 4011-Section03.js:1691
(anonymous) @ 4011-Section03.js:2191
(anonymous) @ 4011-StateManager.js:543
notifyListeners @ 4011-StateManager.js:541
setValue @ 4011-StateManager.js:419
setValue @ 4011-Section09.js:191
(anonymous) @ 4011-Section09.js:2541
 [S15] 🎯 TGT S03 CLIMATE READ: h_23=22, d_23=-26, d_24=30, h_24=24
 [StateManager] 🎯 h_10 setValue: "95.03405875957007" (state: calculated)
 [StateManager] h_10 setValue stack trace:
setValue @ 4011-StateManager.js:346
calculateValues @ 4011-Section15.js:1832
calculateTargetModel @ 4011-Section15.js:1662
calculateAll @ 4011-Section15.js:1328
(anonymous) @ 4011-Section15.js:2121
(anonymous) @ 4011-StateManager.js:543
notifyListeners @ 4011-StateManager.js:541
setValue @ 4011-StateManager.js:419
setCalculatedValue @ 4011-Section04.js:96
calculateRow32 @ 4011-Section04.js:1026
calculateTargetModel @ 4011-Section04.js:1620
calculateAll @ 4011-Section04.js:1586
(anonymous) @ 4011-Section04.js:2483
(anonymous) @ 4011-StateManager.js:543
notifyListeners @ 4011-StateManager.js:541
setValue @ 4011-StateManager.js:419
setTargetValue @ 4011-Section15.js:146
calculateValues @ 4011-Section15.js:1810
calculateTargetModel @ 4011-Section15.js:1662
calculateAll @ 4011-Section15.js:1328
(anonymous) @ 4011-Section15.js:2121
(anonymous) @ 4011-StateManager.js:543
notifyListeners @ 4011-StateManager.js:541
setValue @ 4011-StateManager.js:419
setFieldValue @ 4011-Section13.js:636
calculateCoolingSystem @ 4011-Section13.js:3030
calculateTargetModel @ 4011-Section13.js:3560
calculateAll @ 4011-Section13.js:3403
calculateAndRefresh @ 4011-Section13.js:2368
(anonymous) @ 4011-Section13.js:2396
(anonymous) @ 4011-StateManager.js:543
notifyListeners @ 4011-StateManager.js:541
setValue @ 4011-StateManager.js:419
setCalculatedValue @ 4011-Section14.js:412
calculateValues @ 4011-Section14.js:1165
calculateTargetModel @ 4011-Section14.js:1123
calculateAll @ 4011-Section14.js:944
(anonymous) @ 4011-Section14.js:1420
(anonymous) @ 4011-StateManager.js:543
notifyListeners @ 4011-StateManager.js:541
setValue @ 4011-StateManager.js:419
setValue @ 4011-Section11.js:338
setCalculatedValue @ 4011-Section11.js:955
calculateTargetModel @ 4011-Section11.js:1583
calculateAll @ 4011-Section11.js:1693
(anonymous) @ 4011-StateManager.js:543
notifyListeners @ 4011-StateManager.js:541
setValue @ 4011-StateManager.js:419
setValue @ 4011-Section03.js:215
setFieldValue @ 4011-Section03.js:453
calculateGroundFacing @ 4011-Section03.js:1663
calculateTargetModel @ 4011-Section03.js:1722
calculateAll @ 4011-Section03.js:1691
(anonymous) @ 4011-Section03.js:2191
(anonymous) @ 4011-StateManager.js:543
notifyListeners @ 4011-StateManager.js:541
setValue @ 4011-StateManager.js:419
setValue @ 4011-Section09.js:191
(anonymous) @ 4011-Section09.js:2541
 [S04] Row 32 Subtotals - F32: 132938, G32: 6779.838, J32: 301986.051518286, K32: 15401.288627432587
 [S04] Reference model calculations complete
 [S04DB] storeReference: ref_j_32=301986.051518286, ref_k_32=15401.288627432587 | current target j_32=135632.60866165842, k_32=6917.26304174458
 [S04] 🔄 Updating calculated display values for target mode
 [S04DB] displayContext mode=target j_32=135632.60866165842 ref_j_32=301986.051518286 k_32=6917.26304174458 ref_k_32=15401.288627432587
 [S04 DEBUG] Target mode - j_32: 135632.60866165842
 [S04 DEBUG] Target mode - k_32: 6917.26304174458
 [S04 DEBUG] Target mode - l_27: 51
 [S04] Calculated display values updated for target mode
 [S04] Dual-engine calculations completed successfully
 [S04] 🔄 Updating calculated display values for target mode
 [S04DB] displayContext mode=target j_32=135632.60866165842 ref_j_32=301986.051518286 k_32=6917.26304174458 ref_k_32=15401.288627432587
 [S04 DEBUG] Target mode - j_32: 135632.60866165842
 [S04 DEBUG] Target mode - k_32: 6917.26304174458
 [S04 DEBUG] Target mode - l_27: 51
 [S04] Calculated display values updated for target mode
 [StateManager] 🎯 h_10 setValue: "95.03405875957007" (state: calculated)
 [StateManager] h_10 setValue stack trace:
setValue @ 4011-StateManager.js:346
calculateValues @ 4011-Section15.js:1832
calculateTargetModel @ 4011-Section15.js:1662
calculateAll @ 4011-Section15.js:1328
(anonymous) @ 4011-Section15.js:2121
(anonymous) @ 4011-StateManager.js:543
notifyListeners @ 4011-StateManager.js:541
setValue @ 4011-StateManager.js:419
setFieldValue @ 4011-Section13.js:636
calculateCoolingSystem @ 4011-Section13.js:3030
calculateTargetModel @ 4011-Section13.js:3560
calculateAll @ 4011-Section13.js:3403
calculateAndRefresh @ 4011-Section13.js:2368
(anonymous) @ 4011-Section13.js:2396
(anonymous) @ 4011-StateManager.js:543
notifyListeners @ 4011-StateManager.js:541
setValue @ 4011-StateManager.js:419
setCalculatedValue @ 4011-Section14.js:412
calculateValues @ 4011-Section14.js:1165
calculateTargetModel @ 4011-Section14.js:1123
calculateAll @ 4011-Section14.js:944
(anonymous) @ 4011-Section14.js:1420
(anonymous) @ 4011-StateManager.js:543
notifyListeners @ 4011-StateManager.js:541
setValue @ 4011-StateManager.js:419
setValue @ 4011-Section11.js:338
setCalculatedValue @ 4011-Section11.js:955
calculateTargetModel @ 4011-Section11.js:1583
calculateAll @ 4011-Section11.js:1693
(anonymous) @ 4011-StateManager.js:543
notifyListeners @ 4011-StateManager.js:541
setValue @ 4011-StateManager.js:419
setValue @ 4011-Section03.js:215
setFieldValue @ 4011-Section03.js:453
calculateGroundFacing @ 4011-Section03.js:1663
calculateTargetModel @ 4011-Section03.js:1722
calculateAll @ 4011-Section03.js:1691
(anonymous) @ 4011-Section03.js:2191
(anonymous) @ 4011-StateManager.js:543
notifyListeners @ 4011-StateManager.js:541
setValue @ 4011-StateManager.js:419
setValue @ 4011-Section09.js:191
(anonymous) @ 4011-Section09.js:2541
 [S15] 🎯 TGT S03 CLIMATE READ: h_23=22, d_23=-26, d_24=30, h_24=24
 [StateManager] 🎯 h_10 setValue: "95.03405875957007" (state: calculated)
 [StateManager] h_10 setValue stack trace:
setValue @ 4011-StateManager.js:346
calculateValues @ 4011-Section15.js:1832
calculateTargetModel @ 4011-Section15.js:1662
calculateAll @ 4011-Section15.js:1328
(anonymous) @ 4011-Section15.js:2121
(anonymous) @ 4011-StateManager.js:543
notifyListeners @ 4011-StateManager.js:541
setValue @ 4011-StateManager.js:419
setFieldValue @ 4011-Section13.js:636
calculateCoolingSystem @ 4011-Section13.js:3030
calculateTargetModel @ 4011-Section13.js:3560
calculateAll @ 4011-Section13.js:3403
calculateAndRefresh @ 4011-Section13.js:2368
(anonymous) @ 4011-Section13.js:2396
(anonymous) @ 4011-StateManager.js:543
notifyListeners @ 4011-StateManager.js:541
setValue @ 4011-StateManager.js:419
setCalculatedValue @ 4011-Section14.js:412
calculateValues @ 4011-Section14.js:1165
calculateTargetModel @ 4011-Section14.js:1123
calculateAll @ 4011-Section14.js:944
(anonymous) @ 4011-Section14.js:1420
(anonymous) @ 4011-StateManager.js:543
notifyListeners @ 4011-StateManager.js:541
setValue @ 4011-StateManager.js:419
setValue @ 4011-Section11.js:338
setCalculatedValue @ 4011-Section11.js:955
calculateTargetModel @ 4011-Section11.js:1583
calculateAll @ 4011-Section11.js:1693
(anonymous) @ 4011-StateManager.js:543
notifyListeners @ 4011-StateManager.js:541
setValue @ 4011-StateManager.js:419
setValue @ 4011-Section03.js:215
setFieldValue @ 4011-Section03.js:453
calculateGroundFacing @ 4011-Section03.js:1663
calculateTargetModel @ 4011-Section03.js:1722
calculateAll @ 4011-Section03.js:1691
(anonymous) @ 4011-Section03.js:2191
(anonymous) @ 4011-StateManager.js:543
notifyListeners @ 4011-StateManager.js:541
setValue @ 4011-StateManager.js:419
setValue @ 4011-Section09.js:191
(anonymous) @ 4011-Section09.js:2541
4011-Section13.js:3036 [Section13] 🧊 COOLING RESULTS: d_117=3593.80399917213, j_116=2.663540445486518, l_116=0, l_114=5978.438305774035
24011-Section14.js:1416 [S14 LISTENER] 🔥 d_122 changed - triggering calculateAll() + UI update
4011-Section15.js:1750 [S15] 🎯 TGT S03 CLIMATE READ: h_23=22, d_23=-26, d_24=30, h_24=24
4011-StateManager.js:343 [StateManager] 🎯 h_10 setValue: "95.03405875957007" (state: calculated)
4011-StateManager.js:346 [StateManager] h_10 setValue stack trace:
setValue @ 4011-StateManager.js:346
calculateValues @ 4011-Section15.js:1832
calculateTargetModel @ 4011-Section15.js:1662
calculateAll @ 4011-Section15.js:1328
(anonymous) @ 4011-Section15.js:2121
(anonymous) @ 4011-StateManager.js:543
notifyListeners @ 4011-StateManager.js:541
setValue @ 4011-StateManager.js:419
setFieldValue @ 4011-Section13.js:636
calculateCoolingVentilation @ 4011-Section13.js:3272
calculateCoolingSystem @ 4011-Section13.js:3040
calculateTargetModel @ 4011-Section13.js:3560
calculateAll @ 4011-Section13.js:3403
calculateAndRefresh @ 4011-Section13.js:2368
(anonymous) @ 4011-Section13.js:2396
(anonymous) @ 4011-StateManager.js:543
notifyListeners @ 4011-StateManager.js:541
setValue @ 4011-StateManager.js:419
setCalculatedValue @ 4011-Section14.js:412
calculateValues @ 4011-Section14.js:1165
calculateTargetModel @ 4011-Section14.js:1123
calculateAll @ 4011-Section14.js:944
(anonymous) @ 4011-Section14.js:1420
(anonymous) @ 4011-StateManager.js:543
notifyListeners @ 4011-StateManager.js:541
setValue @ 4011-StateManager.js:419
setValue @ 4011-Section11.js:338
setCalculatedValue @ 4011-Section11.js:955
calculateTargetModel @ 4011-Section11.js:1583
calculateAll @ 4011-Section11.js:1693
(anonymous) @ 4011-StateManager.js:543
notifyListeners @ 4011-StateManager.js:541
setValue @ 4011-StateManager.js:419
setValue @ 4011-Section03.js:215
setFieldValue @ 4011-Section03.js:453
calculateGroundFacing @ 4011-Section03.js:1663
calculateTargetModel @ 4011-Section03.js:1722
calculateAll @ 4011-Section03.js:1691
(anonymous) @ 4011-Section03.js:2191
(anonymous) @ 4011-StateManager.js:543
notifyListeners @ 4011-StateManager.js:541
setValue @ 4011-StateManager.js:419
setValue @ 4011-Section09.js:191
(anonymous) @ 4011-Section09.js:2541
4011-Section15.js:1750 [S15] 🎯 TGT S03 CLIMATE READ: h_23=22, d_23=-26, d_24=30, h_24=24
4011-StateManager.js:343 [StateManager] 🎯 h_10 setValue: "95.03405875957007" (state: calculated)
4011-StateManager.js:346 [StateManager] h_10 setValue stack trace:
setValue @ 4011-StateManager.js:346
calculateValues @ 4011-Section15.js:1832
calculateTargetModel @ 4011-Section15.js:1662
calculateAll @ 4011-Section15.js:1328
(anonymous) @ 4011-Section15.js:2121
(anonymous) @ 4011-StateManager.js:543
notifyListeners @ 4011-StateManager.js:541
setValue @ 4011-StateManager.js:419
setFieldValue @ 4011-Section13.js:636
calculateCoolingVentilation @ 4011-Section13.js:3272
calculateCoolingSystem @ 4011-Section13.js:3040
calculateTargetModel @ 4011-Section13.js:3560
calculateAll @ 4011-Section13.js:3403
calculateAndRefresh @ 4011-Section13.js:2368
(anonymous) @ 4011-Section13.js:2396
(anonymous) @ 4011-StateManager.js:543
notifyListeners @ 4011-StateManager.js:541
setValue @ 4011-StateManager.js:419
setCalculatedValue @ 4011-Section14.js:412
calculateValues @ 4011-Section14.js:1165
calculateTargetModel @ 4011-Section14.js:1123
calculateAll @ 4011-Section14.js:944
(anonymous) @ 4011-Section14.js:1420
(anonymous) @ 4011-StateManager.js:543
notifyListeners @ 4011-StateManager.js:541
setValue @ 4011-StateManager.js:419
setValue @ 4011-Section11.js:338
setCalculatedValue @ 4011-Section11.js:955
calculateTargetModel @ 4011-Section11.js:1583
calculateAll @ 4011-Section11.js:1693
(anonymous) @ 4011-StateManager.js:543
notifyListeners @ 4011-StateManager.js:541
setValue @ 4011-StateManager.js:419
setValue @ 4011-Section03.js:215
setFieldValue @ 4011-Section03.js:453
calculateGroundFacing @ 4011-Section03.js:1663
calculateTargetModel @ 4011-Section03.js:1722
calculateAll @ 4011-Section03.js:1691
(anonymous) @ 4011-Section03.js:2191
(anonymous) @ 4011-StateManager.js:543
notifyListeners @ 4011-StateManager.js:541
setValue @ 4011-StateManager.js:419
setValue @ 4011-Section09.js:191
(anonymous) @ 4011-Section09.js:2541
24011-Section14.js:1416 [S14 LISTENER] 🔥 d_122 changed - triggering calculateAll() + UI update
4011-Section15.js:1750 [S15] 🎯 TGT S03 CLIMATE READ: h_23=22, d_23=-26, d_24=30, h_24=24
4011-StateManager.js:343 [StateManager] 🎯 h_10 setValue: "95.03405875957007" (state: calculated)
4011-StateManager.js:346 [StateManager] h_10 setValue stack trace:
setValue @ 4011-StateManager.js:346
calculateValues @ 4011-Section15.js:1832
calculateTargetModel @ 4011-Section15.js:1662
calculateAll @ 4011-Section15.js:1328
(anonymous) @ 4011-Section15.js:2121
(anonymous) @ 4011-StateManager.js:543
notifyListeners @ 4011-StateManager.js:541
setValue @ 4011-StateManager.js:419
setFieldValue @ 4011-Section13.js:636
updateTargetModelDOMValues @ 4011-Section13.js:3684
calculateTargetModel @ 4011-Section13.js:3570
calculateAll @ 4011-Section13.js:3403
calculateAndRefresh @ 4011-Section13.js:2368
(anonymous) @ 4011-Section13.js:2396
(anonymous) @ 4011-StateManager.js:543
notifyListeners @ 4011-StateManager.js:541
setValue @ 4011-StateManager.js:419
setCalculatedValue @ 4011-Section14.js:412
calculateValues @ 4011-Section14.js:1165
calculateTargetModel @ 4011-Section14.js:1123
calculateAll @ 4011-Section14.js:944
(anonymous) @ 4011-Section14.js:1420
(anonymous) @ 4011-StateManager.js:543
notifyListeners @ 4011-StateManager.js:541
setValue @ 4011-StateManager.js:419
setValue @ 4011-Section11.js:338
setCalculatedValue @ 4011-Section11.js:955
calculateTargetModel @ 4011-Section11.js:1583
calculateAll @ 4011-Section11.js:1693
(anonymous) @ 4011-StateManager.js:543
notifyListeners @ 4011-StateManager.js:541
setValue @ 4011-StateManager.js:419
setValue @ 4011-Section03.js:215
setFieldValue @ 4011-Section03.js:453
calculateGroundFacing @ 4011-Section03.js:1663
calculateTargetModel @ 4011-Section03.js:1722
calculateAll @ 4011-Section03.js:1691
(anonymous) @ 4011-Section03.js:2191
(anonymous) @ 4011-StateManager.js:543
notifyListeners @ 4011-StateManager.js:541
setValue @ 4011-StateManager.js:419
setValue @ 4011-Section09.js:191
(anonymous) @ 4011-Section09.js:2541
4011-Section15.js:1750 [S15] 🎯 TGT S03 CLIMATE READ: h_23=22, d_23=-26, d_24=30, h_24=24
4011-StateManager.js:343 [StateManager] 🎯 h_10 setValue: "95.03405875957007" (state: calculated)
4011-StateManager.js:346 [StateManager] h_10 setValue stack trace:
setValue @ 4011-StateManager.js:346
calculateValues @ 4011-Section15.js:1832
calculateTargetModel @ 4011-Section15.js:1662
calculateAll @ 4011-Section15.js:1328
(anonymous) @ 4011-Section15.js:2121
(anonymous) @ 4011-StateManager.js:543
notifyListeners @ 4011-StateManager.js:541
setValue @ 4011-StateManager.js:419
setFieldValue @ 4011-Section13.js:636
updateTargetModelDOMValues @ 4011-Section13.js:3684
calculateTargetModel @ 4011-Section13.js:3570
calculateAll @ 4011-Section13.js:3403
calculateAndRefresh @ 4011-Section13.js:2368
(anonymous) @ 4011-Section13.js:2396
(anonymous) @ 4011-StateManager.js:543
notifyListeners @ 4011-StateManager.js:541
setValue @ 4011-StateManager.js:419
setCalculatedValue @ 4011-Section14.js:412
calculateValues @ 4011-Section14.js:1165
calculateTargetModel @ 4011-Section14.js:1123
calculateAll @ 4011-Section14.js:944
(anonymous) @ 4011-Section14.js:1420
(anonymous) @ 4011-StateManager.js:543
notifyListeners @ 4011-StateManager.js:541
setValue @ 4011-StateManager.js:419
setValue @ 4011-Section11.js:338
setCalculatedValue @ 4011-Section11.js:955
calculateTargetModel @ 4011-Section11.js:1583
calculateAll @ 4011-Section11.js:1693
(anonymous) @ 4011-StateManager.js:543
notifyListeners @ 4011-StateManager.js:541
setValue @ 4011-StateManager.js:419
setValue @ 4011-Section03.js:215
setFieldValue @ 4011-Section03.js:453
calculateGroundFacing @ 4011-Section03.js:1663
calculateTargetModel @ 4011-Section03.js:1722
calculateAll @ 4011-Section03.js:1691
(anonymous) @ 4011-Section03.js:2191
(anonymous) @ 4011-StateManager.js:543
notifyListeners @ 4011-StateManager.js:541
setValue @ 4011-StateManager.js:419
setValue @ 4011-Section09.js:191
(anonymous) @ 4011-Section09.js:2541
 [Section13] Target Model calculations complete
 [Section13] ✅ Target Model complete
 [Section13] ⏭️ Skipping Reference value re-write - triggered in target mode
 [Section13] 🎉 DUAL-ENGINE CALCULATIONS COMPLETE
 [Section13] 🔄 Updating calculated display values for target mode
 [Section13] Calculated display values updated for target mode
 [S15] 🎯 TGT S03 CLIMATE READ: h_23=22, d_23=-26, d_24=30, h_24=24
 [StateManager] 🎯 h_10 setValue: "95.03405875957007" (state: calculated)
 [StateManager] h_10 setValue stack trace:
setValue @ 4011-StateManager.js:346
calculateValues @ 4011-Section15.js:1832
calculateTargetModel @ 4011-Section15.js:1662
calculateAll @ 4011-Section15.js:1328
(anonymous) @ 4011-Section15.js:2121
(anonymous) @ 4011-StateManager.js:543
notifyListeners @ 4011-StateManager.js:541
setValue @ 4011-StateManager.js:419
setValue @ 4011-Section11.js:338
setCalculatedValue @ 4011-Section11.js:955
calculateTargetModel @ 4011-Section11.js:1583
calculateAll @ 4011-Section11.js:1693
(anonymous) @ 4011-StateManager.js:543
notifyListeners @ 4011-StateManager.js:541
setValue @ 4011-StateManager.js:419
setValue @ 4011-Section03.js:215
setFieldValue @ 4011-Section03.js:453
calculateGroundFacing @ 4011-Section03.js:1663
calculateTargetModel @ 4011-Section03.js:1722
calculateAll @ 4011-Section03.js:1691
(anonymous) @ 4011-Section03.js:2191
(anonymous) @ 4011-StateManager.js:543
notifyListeners @ 4011-StateManager.js:541
setValue @ 4011-StateManager.js:419
setValue @ 4011-Section09.js:191
(anonymous) @ 4011-Section09.js:2541
 [S15] 🎯 TGT S03 CLIMATE READ: h_23=22, d_23=-26, d_24=30, h_24=24
 [StateManager] 🎯 h_10 setValue: "95.03405875957007" (state: calculated)
 [StateManager] h_10 setValue stack trace:
setValue @ 4011-StateManager.js:346
calculateValues @ 4011-Section15.js:1832
calculateTargetModel @ 4011-Section15.js:1662
calculateAll @ 4011-Section15.js:1328
(anonymous) @ 4011-Section15.js:2121
(anonymous) @ 4011-StateManager.js:543
notifyListeners @ 4011-StateManager.js:541
setValue @ 4011-StateManager.js:419
setValue @ 4011-Section11.js:338
setCalculatedValue @ 4011-Section11.js:955
calculateTargetModel @ 4011-Section11.js:1583
calculateAll @ 4011-Section11.js:1693
(anonymous) @ 4011-StateManager.js:543
notifyListeners @ 4011-StateManager.js:541
setValue @ 4011-StateManager.js:419
setValue @ 4011-Section03.js:215
setFieldValue @ 4011-Section03.js:453
calculateGroundFacing @ 4011-Section03.js:1663
calculateTargetModel @ 4011-Section03.js:1722
calculateAll @ 4011-Section03.js:1691
(anonymous) @ 4011-Section03.js:2191
(anonymous) @ 4011-StateManager.js:543
notifyListeners @ 4011-StateManager.js:541
setValue @ 4011-StateManager.js:419
setValue @ 4011-Section09.js:191
(anonymous) @ 4011-Section09.js:2541
 [CLOCK] 🎯 User interaction started - timing to h_10 settlement
 [CLOCK] 🎯 User interaction started - timing to h_10 settlement
 [CLOCK] 🎯 User interaction started - timing to h_10 settlement
 [S03] Critical flag update: mode=target, occupancy="B3-Detention Care & Treatment", critical=true
 [S03] 🔵 REF MODE: Using occupancy "A-Assembly" from ref_d_12
 [S03] Getting climate data for: Alexandria, ON (Present) - Critical: false (reference mode)
 [S03] REFERENCE TEMP SELECTION: January_2_5 = -24 (Critical: false)
 [S03] Climate values for Alexandria (reference): {d_20: 4600, d_21: 196, j_19: '6.0', d_23: -24, d_24: 30, …}
 [CLOCK] 🎯 User interaction started - timing to h_10 settlement
 [S15] 🎯 TGT S03 CLIMATE READ: h_23=22, d_23=-26, d_24=30, h_24=24
 [StateManager] 🎯 h_10 setValue: "95.03405875957007" (state: calculated)
 [StateManager] h_10 setValue stack trace:
setValue @ 4011-StateManager.js:346
calculateValues @ 4011-Section15.js:1832
calculateTargetModel @ 4011-Section15.js:1662
calculateAll @ 4011-Section15.js:1328
(anonymous) @ 4011-Section15.js:2121
(anonymous) @ 4011-StateManager.js:543
notifyListeners @ 4011-StateManager.js:541
setValue @ 4011-StateManager.js:419
setValue @ 4011-Section03.js:217
setFieldValue @ 4011-Section03.js:453
calculateHeatingSetpoint @ 4011-Section03.js:1836
calculateReferenceModel @ 4011-Section03.js:1751
calculateAll @ 4011-Section03.js:1692
(anonymous) @ 4011-Section03.js:2191
(anonymous) @ 4011-StateManager.js:543
notifyListeners @ 4011-StateManager.js:541
setValue @ 4011-StateManager.js:419
setValue @ 4011-Section09.js:191
(anonymous) @ 4011-Section09.js:2541
 [S15] 🎯 TGT S03 CLIMATE READ: h_23=22, d_23=-26, d_24=30, h_24=24
 [StateManager] 🎯 h_10 setValue: "95.03405875957007" (state: calculated)
 [StateManager] h_10 setValue stack trace:
setValue @ 4011-StateManager.js:346
calculateValues @ 4011-Section15.js:1832
calculateTargetModel @ 4011-Section15.js:1662
calculateAll @ 4011-Section15.js:1328
(anonymous) @ 4011-Section15.js:2121
(anonymous) @ 4011-StateManager.js:543
notifyListeners @ 4011-StateManager.js:541
setValue @ 4011-StateManager.js:419
setValue @ 4011-Section03.js:217
setFieldValue @ 4011-Section03.js:453
calculateHeatingSetpoint @ 4011-Section03.js:1836
calculateReferenceModel @ 4011-Section03.js:1751
calculateAll @ 4011-Section03.js:1692
(anonymous) @ 4011-Section03.js:2191
(anonymous) @ 4011-StateManager.js:543
notifyListeners @ 4011-StateManager.js:541
setValue @ 4011-StateManager.js:419
setValue @ 4011-Section09.js:191
(anonymous) @ 4011-Section09.js:2541
 [S15] 🎯 TGT S03 CLIMATE READ: h_23=22, d_23=-26, d_24=30, h_24=24
 [StateManager] 🎯 h_10 setValue: "95.03405875957007" (state: calculated)
 [StateManager] h_10 setValue stack trace:
setValue @ 4011-StateManager.js:346
calculateValues @ 4011-Section15.js:1832
calculateTargetModel @ 4011-Section15.js:1662
calculateAll @ 4011-Section15.js:1328
(anonymous) @ 4011-Section15.js:2121
(anonymous) @ 4011-StateManager.js:543
notifyListeners @ 4011-StateManager.js:541
setValue @ 4011-StateManager.js:419
setValue @ 4011-Section03.js:217
setFieldValue @ 4011-Section03.js:453
calculateHeatingSetpoint @ 4011-Section03.js:1836
calculateReferenceModel @ 4011-Section03.js:1751
calculateAll @ 4011-Section03.js:1692
(anonymous) @ 4011-Section03.js:2191
(anonymous) @ 4011-StateManager.js:543
notifyListeners @ 4011-StateManager.js:541
setValue @ 4011-StateManager.js:419
setValue @ 4011-Section09.js:191
(anonymous) @ 4011-Section09.js:2541
 [S15] 🎯 TGT S03 CLIMATE READ: h_23=22, d_23=-26, d_24=30, h_24=24
 [StateManager] 🎯 h_10 setValue: "95.03405875957007" (state: calculated)
 [StateManager] h_10 setValue stack trace:
setValue @ 4011-StateManager.js:346
calculateValues @ 4011-Section15.js:1832
calculateTargetModel @ 4011-Section15.js:1662
calculateAll @ 4011-Section15.js:1328
(anonymous) @ 4011-Section15.js:2121
(anonymous) @ 4011-StateManager.js:543
notifyListeners @ 4011-StateManager.js:541
setValue @ 4011-StateManager.js:419
setValue @ 4011-Section03.js:217
setFieldValue @ 4011-Section03.js:453
calculateHeatingSetpoint @ 4011-Section03.js:1836
calculateReferenceModel @ 4011-Section03.js:1751
calculateAll @ 4011-Section03.js:1692
(anonymous) @ 4011-Section03.js:2191
(anonymous) @ 4011-StateManager.js:543
notifyListeners @ 4011-StateManager.js:541
setValue @ 4011-StateManager.js:419
setValue @ 4011-Section09.js:191
(anonymous) @ 4011-Section09.js:2541
 [CLOCK] 🎯 User interaction started - timing to h_10 settlement
 [S15] 🎯 TGT S03 CLIMATE READ: h_23=22, d_23=-26, d_24=30, h_24=24
 [StateManager] 🎯 h_10 setValue: "95.03405875957007" (state: calculated)
 [StateManager] h_10 setValue stack trace:
setValue @ 4011-StateManager.js:346
calculateValues @ 4011-Section15.js:1832
calculateTargetModel @ 4011-Section15.js:1662
calculateAll @ 4011-Section15.js:1328
(anonymous) @ 4011-Section15.js:2121
(anonymous) @ 4011-StateManager.js:543
notifyListeners @ 4011-StateManager.js:541
setValue @ 4011-StateManager.js:419
setValue @ 4011-Section03.js:217
setFieldValue @ 4011-Section03.js:453
calculateCoolingSetpoint_h24 @ 4011-Section03.js:1848
calculateReferenceModel @ 4011-Section03.js:1752
calculateAll @ 4011-Section03.js:1692
(anonymous) @ 4011-Section03.js:2191
(anonymous) @ 4011-StateManager.js:543
notifyListeners @ 4011-StateManager.js:541
setValue @ 4011-StateManager.js:419
setValue @ 4011-Section09.js:191
(anonymous) @ 4011-Section09.js:2541
 [S15] 🎯 TGT S03 CLIMATE READ: h_23=22, d_23=-26, d_24=30, h_24=24
 [StateManager] 🎯 h_10 setValue: "95.03405875957007" (state: calculated)
 [StateManager] h_10 setValue stack trace:
setValue @ 4011-StateManager.js:346
calculateValues @ 4011-Section15.js:1832
calculateTargetModel @ 4011-Section15.js:1662
calculateAll @ 4011-Section15.js:1328
(anonymous) @ 4011-Section15.js:2121
(anonymous) @ 4011-StateManager.js:543
notifyListeners @ 4011-StateManager.js:541
setValue @ 4011-StateManager.js:419
setValue @ 4011-Section03.js:217
setFieldValue @ 4011-Section03.js:453
calculateCoolingSetpoint_h24 @ 4011-Section03.js:1848
calculateReferenceModel @ 4011-Section03.js:1752
calculateAll @ 4011-Section03.js:1692
(anonymous) @ 4011-Section03.js:2191
(anonymous) @ 4011-StateManager.js:543
notifyListeners @ 4011-StateManager.js:541
setValue @ 4011-StateManager.js:419
setValue @ 4011-Section09.js:191
(anonymous) @ 4011-Section09.js:2541
 [S15] 🎯 TGT S03 CLIMATE READ: h_23=22, d_23=-26, d_24=30, h_24=24
 [StateManager] 🎯 h_10 setValue: "95.03405875957007" (state: calculated)
 [StateManager] h_10 setValue stack trace:
setValue @ 4011-StateManager.js:346
calculateValues @ 4011-Section15.js:1832
calculateTargetModel @ 4011-Section15.js:1662
calculateAll @ 4011-Section15.js:1328
(anonymous) @ 4011-Section15.js:2121
(anonymous) @ 4011-StateManager.js:543
notifyListeners @ 4011-StateManager.js:541
setValue @ 4011-StateManager.js:419
setValue @ 4011-Section03.js:217
setFieldValue @ 4011-Section03.js:453
calculateCoolingSetpoint_h24 @ 4011-Section03.js:1848
calculateReferenceModel @ 4011-Section03.js:1752
calculateAll @ 4011-Section03.js:1692
(anonymous) @ 4011-Section03.js:2191
(anonymous) @ 4011-StateManager.js:543
notifyListeners @ 4011-StateManager.js:541
setValue @ 4011-StateManager.js:419
setValue @ 4011-Section09.js:191
(anonymous) @ 4011-Section09.js:2541
 [S15] 🎯 TGT S03 CLIMATE READ: h_23=22, d_23=-26, d_24=30, h_24=24
 [StateManager] 🎯 h_10 setValue: "95.03405875957007" (state: calculated)
 [StateManager] h_10 setValue stack trace:
setValue @ 4011-StateManager.js:346
calculateValues @ 4011-Section15.js:1832
calculateTargetModel @ 4011-Section15.js:1662
calculateAll @ 4011-Section15.js:1328
(anonymous) @ 4011-Section15.js:2121
(anonymous) @ 4011-StateManager.js:543
notifyListeners @ 4011-StateManager.js:541
setValue @ 4011-StateManager.js:419
setValue @ 4011-Section03.js:217
setFieldValue @ 4011-Section03.js:453
calculateCoolingSetpoint_h24 @ 4011-Section03.js:1848
calculateReferenceModel @ 4011-Section03.js:1752
calculateAll @ 4011-Section03.js:1692
(anonymous) @ 4011-Section03.js:2191
(anonymous) @ 4011-StateManager.js:543
notifyListeners @ 4011-StateManager.js:541
setValue @ 4011-StateManager.js:419
setValue @ 4011-Section09.js:191
(anonymous) @ 4011-Section09.js:2541
 [CLOCK] 🎯 User interaction started - timing to h_10 settlement
 [CLOCK] 🎯 User interaction started - timing to h_10 settlement
 [CLOCK] 🎯 User interaction started - timing to h_10 settlement
 [CLOCK] 🎯 User interaction started - timing to h_10 settlement
 [S11] calculateAll TRIGGERED. isReferenceMode: false
 [S11] 🔵 REF CLIMATE READ: d_20=4600
 [S11] 🔵 REF CLIMATE READ: d_21=196
 [S11] 🔵 REF CLIMATE READ: d_20=4600
 [S11] 🔵 REF CLIMATE READ: d_21=196
 [S11] 🔵 REF CLIMATE READ: d_20=4600
 [S11] 🔵 REF CLIMATE READ: d_21=196
 [S11] 🔵 REF CLIMATE READ: d_20=4600
 [S11] 🔵 REF CLIMATE READ: d_21=196
 [S11] 🔵 REF CLIMATE READ: d_20=4600
 [S11] 🔵 REF CLIMATE READ: d_21=196
 [S11] 🔵 REF CLIMATE READ: d_20=4600
 [S11] 🔵 REF CLIMATE READ: d_21=196
 [S11] 🔵 REF CLIMATE READ: d_20=4600
 [S11] 🔵 REF CLIMATE READ: d_21=196
 [S11] 🔵 REF CLIMATE READ: d_20=4600
 [S11] 🔵 REF CLIMATE READ: d_21=196
 [S11] 🔵 REF CLIMATE READ: d_20=4600
 [S11] 🔵 REF CLIMATE READ: d_21=196
 [S11] 🔵 REF CLIMATE READ: d_22=1960
 [S11] 🔵 REF CLIMATE READ: h_22=-1680
 [S11] 🔵 REF CLIMATE READ: d_22=1960
 [S11] 🔵 REF CLIMATE READ: h_22=-1680
 [S11] REF TB%=50% → ref_i_97=59532.29, ref_k_97=-947.70
 [S11] Writing ref penalty: ref_i_97=59532.29, ref_k_97=-947.70
 [S11] 🎯 TGT CLIMATE READ: d_20=4600
 [S11] 🎯 TGT CLIMATE READ: d_21=196
 [S11] 🎯 TGT CLIMATE READ: d_20=4600
 [S11] 🎯 TGT CLIMATE READ: d_21=196
4011-Section11.js:1145 [S11] 🎯 TGT CLIMATE READ: d_20=4600
4011-Section11.js:1149 [S11] 🎯 TGT CLIMATE READ: d_21=196
4011-Section11.js:1145 [S11] 🎯 TGT CLIMATE READ: d_20=4600
4011-Section11.js:1149 [S11] 🎯 TGT CLIMATE READ: d_21=196
4011-Section11.js:1145 [S11] 🎯 TGT CLIMATE READ: d_20=4600
4011-Section11.js:1149 [S11] 🎯 TGT CLIMATE READ: d_21=196
4011-Section11.js:1145 [S11] 🎯 TGT CLIMATE READ: d_20=4600
4011-Section11.js:1149 [S11] 🎯 TGT CLIMATE READ: d_21=196
4011-Section11.js:1145 [S11] 🎯 TGT CLIMATE READ: d_20=4600
4011-Section11.js:1149 [S11] 🎯 TGT CLIMATE READ: d_21=196
4011-Section11.js:1145 [S11] 🎯 TGT CLIMATE READ: d_20=4600
4011-Section11.js:1149 [S11] 🎯 TGT CLIMATE READ: d_21=196
4011-Section11.js:1145 [S11] 🎯 TGT CLIMATE READ: d_20=4600
4011-Section11.js:1149 [S11] 🎯 TGT CLIMATE READ: d_21=196
24011-Section11.js:1189 [S11] 🎯 TGT CLIMATE READ: h_22=-1680
 [S11] calculateAll TRIGGERED. isReferenceMode: false
 [S11] 🔵 REF CLIMATE READ: d_20=4600
 [S11] 🔵 REF CLIMATE READ: d_21=196
 [S11] 🔵 REF CLIMATE READ: d_20=4600
 [S11] 🔵 REF CLIMATE READ: d_21=196
 [S11] 🔵 REF CLIMATE READ: d_20=4600
 [S11] 🔵 REF CLIMATE READ: d_21=196
 [S11] 🔵 REF CLIMATE READ: d_20=4600
 [S11] 🔵 REF CLIMATE READ: d_21=196
 [S11] 🔵 REF CLIMATE READ: d_20=4600
 [S11] 🔵 REF CLIMATE READ: d_21=196
 [S11] 🔵 REF CLIMATE READ: d_20=4600
 [S11] 🔵 REF CLIMATE READ: d_21=196
 [S11] 🔵 REF CLIMATE READ: d_20=4600
 [S11] 🔵 REF CLIMATE READ: d_21=196
 [S11] 🔵 REF CLIMATE READ: d_20=4600
 [S11] 🔵 REF CLIMATE READ: d_21=196
 [S11] 🔵 REF CLIMATE READ: d_20=4600
 [S11] 🔵 REF CLIMATE READ: d_21=196
 [S11] 🔵 REF CLIMATE READ: d_22=1960
 [S11] 🔵 REF CLIMATE READ: h_22=-1680
 [S11] 🔵 REF CLIMATE READ: d_22=1960
 [S11] 🔵 REF CLIMATE READ: h_22=-1680
 [S11] REF TB%=50% → ref_i_97=59532.29, ref_k_97=-947.70
 [S11] Writing ref penalty: ref_i_97=59532.29, ref_k_97=-947.70
 [S11] 🎯 TGT CLIMATE READ: d_20=4600
 [S11] 🎯 TGT CLIMATE READ: d_21=196
 [S11] 🎯 TGT CLIMATE READ: d_20=4600
 [S11] 🎯 TGT CLIMATE READ: d_21=196
 [S11] 🎯 TGT CLIMATE READ: d_20=4600
 [S11] 🎯 TGT CLIMATE READ: d_21=196
 [S11] 🎯 TGT CLIMATE READ: d_20=4600
 [S11] 🎯 TGT CLIMATE READ: d_21=196
 [S11] 🎯 TGT CLIMATE READ: d_20=4600
 [S11] 🎯 TGT CLIMATE READ: d_21=196
 [S11] 🎯 TGT CLIMATE READ: d_20=4600
 [S11] 🎯 TGT CLIMATE READ: d_21=196
 [S11] 🎯 TGT CLIMATE READ: d_20=4600
 [S11] 🎯 TGT CLIMATE READ: d_21=196
 [S11] 🎯 TGT CLIMATE READ: d_20=4600
 [S11] 🎯 TGT CLIMATE READ: d_21=196
 [S11] 🎯 TGT CLIMATE READ: d_20=4600
 [S11] 🎯 TGT CLIMATE READ: d_21=196
2 [S11] 🎯 TGT CLIMATE READ: h_22=-1680
 [S13DEBUG] Reference GF HDD changed: ref_d_22=1960 → triggering Reference calculations
 [Section13] 🚀 CALCULATEALL TRIGGERED - Running dual-engine calculations...
 [Section13] 🎯 Mode captured at calculation start: target
 [Section13] 🔄 Starting Reference Model calculations...
 🔍 [S13-CONTEXT] Creating reference context: g_118="Volume Constant" from ReferenceState
 🔍 [S13-CONTEXT] ReferenceState.g_118="Volume Constant", TargetState.g_118="Volume by Schedule"
 [Section13] Running Reference Model calculations...
 [S13 CONTAMINATION DEBUG] calculateReferenceModel: Using system type = Electricity
 [S13] REF HEATING: system=Electricity, ted=251391.1974742337, afue=0.9, cop=1
 [S13 REF DEBUG] About to calculate with heating system: Electricity
 [S13 REF DEBUG] Will S13 publish ref_d_113=Electricity?
 🔍 [S13-VENT] calculateVentilationRates: ventMethod="Volume Constant", ach(l_118)=3.5, ratePerPerson(d_119)=8.33, volume(d_105)=8000
 🔍 [S13-VENT] isReferenceCalculation=true, hasContext=true
 🔍 [S13-VENT] calculateVentilationValues: ventMethod="Volume Constant", ach(l_118)=3.5, ratePerPerson(d_119)=8.33, volume(d_105)=8000
 🔍 [S13-VENT] Supporting values: occupants(d_63)=126, occupiedHours(i_63)=4380, totalHours(j_63)=8760
 🔍 [S13-VENT] Volume Constant calculation: ventRateLs = (3.5 * 8000) / 3.6 = 7777.777777777777
 ✅ [S13-VENT] Final d_120 result: 7777.777777777777 L/s (from method="Volume Constant", ach=3.5, volume=8000)
 [Section13] 🧊 COOLING CALC: mode=REF, coolingSystemType="No Cooling", heatingType="Electricity", isCoolingActive=false, coolingDemand=10192.893604542265
 [S13 CONTAMINATION DEBUG] storeReferenceResults called during reference mode
 [S13 CONTAMINATION DEBUG] Reference heating system: Electricity
 [S13 CONTAMINATION DEBUG] Target heating system: Heatpump
 [S13 CONTAMINATION DEBUG] Reference h_115 (gas volume): 0
 [S13 CONTAMINATION DEBUG] Reference f_115 (oil volume): 0
 [S13 CONTAMINATION DEBUG] Writing ref_f_115 = 0
 [S13 CONTAMINATION DEBUG] Writing ref_h_115 = 0
 [Section13] Reference results stored with ref_ prefix for downstream sections
 [S13 DEBUG] Total Reference results stored: 34
 [Section13] Reference Model calculations complete
 [Section13] ✅ Reference Model complete
 [Section13] 🔄 Starting Target Model calculations...
 🔍 [S13-CONTEXT] Creating target context: g_118="Volume by Schedule" from TargetState
 🔍 [S13-CONTEXT] TargetState.g_118="Volume by Schedule", ReferenceState.g_118="Volume Constant"
 [Section13] Running Target Model calculations...
 [S13] TGT HEATING: system=Heatpump, ted=127565.6677259902, afue=0.98, cop=3.663540445486518
 🔍 [S13-VENT] calculateVentilationRates: ventMethod="Volume by Schedule", ach(l_118)=3, ratePerPerson(d_119)=14, volume(d_105)=8000
 🔍 [S13-VENT] isReferenceCalculation=false, hasContext=true
 🔍 [S13-VENT] calculateVentilationValues: ventMethod="Volume by Schedule", ach(l_118)=3, ratePerPerson(d_119)=14, volume(d_105)=8000
 🔍 [S13-VENT] Supporting values: occupants(d_63)=126, occupiedHours(i_63)=4380, totalHours(j_63)=8760
 ✅ [S13-VENT] Final d_120 result: 3333.333333333333 L/s (from method="Volume by Schedule", ach=3, volume=8000)
 [Section13] 🧊 COOLING CALC: mode=TGT, coolingSystemType="Cooling", heatingType="Heatpump", isCoolingActive=true, coolingDemand=10192.893604542265
 [S15] 🎯 TGT S03 CLIMATE READ: h_23=22, d_23=-26, d_24=30, h_24=24
 [S04] S15 target electricity changed: d_136
 [S04] Starting dual-engine Excel-compliant calculations
 [S04] Row 32 Subtotals - F32: 132938, G32: 6779.838, J32: 135865.62607299443, K32: 6929.146929722716
 [S04] j_32 update: 135865.62607299443
 [S01] j_32 listener: 135632.60866165842 → 135865.62607299443
 [S01] 🕐 j_32 listener timing: StateManager current j_32 = 135865.62607299443
2 🔄 [S05] updateCalculatedDisplayValues: mode=target
 [S15] 🎯 TGT S03 CLIMATE READ: h_23=22, d_23=-26, d_24=30, h_24=24
 [StateManager] 🎯 h_10 setValue: "95.19732768567435" (state: calculated)
 [StateManager] h_10 setValue stack trace:
setValue @ 4011-StateManager.js:346
calculateValues @ 4011-Section15.js:1832
calculateTargetModel @ 4011-Section15.js:1662
calculateAll @ 4011-Section15.js:1328
(anonymous) @ 4011-Section15.js:2121
(anonymous) @ 4011-StateManager.js:543
notifyListeners @ 4011-StateManager.js:541
setValue @ 4011-StateManager.js:419
setCalculatedValue @ 4011-Section04.js:96
calculateRow32 @ 4011-Section04.js:1026
calculateTargetModel @ 4011-Section04.js:1620
calculateAll @ 4011-Section04.js:1586
(anonymous) @ 4011-Section04.js:2483
(anonymous) @ 4011-StateManager.js:543
notifyListeners @ 4011-StateManager.js:541
setValue @ 4011-StateManager.js:419
setTargetValue @ 4011-Section15.js:146
calculateValues @ 4011-Section15.js:1810
calculateTargetModel @ 4011-Section15.js:1662
calculateAll @ 4011-Section15.js:1328
(anonymous) @ 4011-Section15.js:2121
(anonymous) @ 4011-StateManager.js:543
notifyListeners @ 4011-StateManager.js:541
setValue @ 4011-StateManager.js:419
setFieldValue @ 4011-Section13.js:636
calculateCoolingSystem @ 4011-Section13.js:3030
calculateTargetModel @ 4011-Section13.js:3560
calculateAll @ 4011-Section13.js:3403
(anonymous) @ 4011-Section13.js:2813
(anonymous) @ 4011-StateManager.js:543
notifyListeners @ 4011-StateManager.js:541
setValue @ 4011-StateManager.js:419
setValue @ 4011-Section03.js:217
setFieldValue @ 4011-Section03.js:453
calculateGroundFacing @ 4011-Section03.js:1663
calculateReferenceModel @ 4011-Section03.js:1754
calculateAll @ 4011-Section03.js:1692
(anonymous) @ 4011-Section03.js:2191
(anonymous) @ 4011-StateManager.js:543
notifyListeners @ 4011-StateManager.js:541
setValue @ 4011-StateManager.js:419
setValue @ 4011-Section09.js:191
(anonymous) @ 4011-Section09.js:2541
 [S15] 🎯 TGT S03 CLIMATE READ: h_23=22, d_23=-26, d_24=30, h_24=24
 [StateManager] 🎯 h_10 setValue: "95.19732768567435" (state: calculated)
 [StateManager] h_10 setValue stack trace:
setValue @ 4011-StateManager.js:346
calculateValues @ 4011-Section15.js:1832
calculateTargetModel @ 4011-Section15.js:1662
calculateAll @ 4011-Section15.js:1328
(anonymous) @ 4011-Section15.js:2121
(anonymous) @ 4011-StateManager.js:543
notifyListeners @ 4011-StateManager.js:541
setValue @ 4011-StateManager.js:419
calculateValues @ 4011-Section15.js:1832
calculateTargetModel @ 4011-Section15.js:1662
calculateAll @ 4011-Section15.js:1328
(anonymous) @ 4011-Section15.js:2121
(anonymous) @ 4011-StateManager.js:543
notifyListeners @ 4011-StateManager.js:541
setValue @ 4011-StateManager.js:419
setCalculatedValue @ 4011-Section04.js:96
calculateRow32 @ 4011-Section04.js:1026
calculateTargetModel @ 4011-Section04.js:1620
calculateAll @ 4011-Section04.js:1586
(anonymous) @ 4011-Section04.js:2483
(anonymous) @ 4011-StateManager.js:543
notifyListeners @ 4011-StateManager.js:541
setValue @ 4011-StateManager.js:419
setTargetValue @ 4011-Section15.js:146
calculateValues @ 4011-Section15.js:1810
calculateTargetModel @ 4011-Section15.js:1662
calculateAll @ 4011-Section15.js:1328
(anonymous) @ 4011-Section15.js:2121
(anonymous) @ 4011-StateManager.js:543
notifyListeners @ 4011-StateManager.js:541
setValue @ 4011-StateManager.js:419
setFieldValue @ 4011-Section13.js:636
calculateCoolingSystem @ 4011-Section13.js:3030
calculateTargetModel @ 4011-Section13.js:3560
calculateAll @ 4011-Section13.js:3403
(anonymous) @ 4011-Section13.js:2813
(anonymous) @ 4011-StateManager.js:543
notifyListeners @ 4011-StateManager.js:541
setValue @ 4011-StateManager.js:419
setValue @ 4011-Section03.js:217
setFieldValue @ 4011-Section03.js:453
calculateGroundFacing @ 4011-Section03.js:1663
calculateReferenceModel @ 4011-Section03.js:1754
calculateAll @ 4011-Section03.js:1692
(anonymous) @ 4011-Section03.js:2191
(anonymous) @ 4011-StateManager.js:543
notifyListeners @ 4011-StateManager.js:541
setValue @ 4011-StateManager.js:419
setValue @ 4011-Section09.js:191
(anonymous) @ 4011-Section09.js:2541
 [S15] 🎯 TGT S03 CLIMATE READ: h_23=22, d_23=-26, d_24=30, h_24=24
 [StateManager] 🎯 h_10 setValue: "95.19732768567435" (state: calculated)
 [StateManager] h_10 setValue stack trace:
setValue @ 4011-StateManager.js:346
calculateValues @ 4011-Section15.js:1832
calculateTargetModel @ 4011-Section15.js:1662
calculateAll @ 4011-Section15.js:1328
(anonymous) @ 4011-Section15.js:2121
(anonymous) @ 4011-StateManager.js:543
notifyListeners @ 4011-StateManager.js:541
setValue @ 4011-StateManager.js:419
calculateValues @ 4011-Section15.js:1832
calculateTargetModel @ 4011-Section15.js:1662
calculateAll @ 4011-Section15.js:1328
(anonymous) @ 4011-Section15.js:2121
(anonymous) @ 4011-StateManager.js:543
notifyListeners @ 4011-StateManager.js:541
setValue @ 4011-StateManager.js:419
setCalculatedValue @ 4011-Section04.js:96
calculateRow32 @ 4011-Section04.js:1026
calculateTargetModel @ 4011-Section04.js:1620
calculateAll @ 4011-Section04.js:1586
(anonymous) @ 4011-Section04.js:2483
(anonymous) @ 4011-StateManager.js:543
notifyListeners @ 4011-StateManager.js:541
setValue @ 4011-StateManager.js:419
setTargetValue @ 4011-Section15.js:146
calculateValues @ 4011-Section15.js:1810
calculateTargetModel @ 4011-Section15.js:1662
calculateAll @ 4011-Section15.js:1328
(anonymous) @ 4011-Section15.js:2121
(anonymous) @ 4011-StateManager.js:543
notifyListeners @ 4011-StateManager.js:541
setValue @ 4011-StateManager.js:419
setFieldValue @ 4011-Section13.js:636
calculateCoolingSystem @ 4011-Section13.js:3030
calculateTargetModel @ 4011-Section13.js:3560
calculateAll @ 4011-Section13.js:3403
(anonymous) @ 4011-Section13.js:2813
(anonymous) @ 4011-StateManager.js:543
notifyListeners @ 4011-StateManager.js:541
setValue @ 4011-StateManager.js:419
setValue @ 4011-Section03.js:217
setFieldValue @ 4011-Section03.js:453
calculateGroundFacing @ 4011-Section03.js:1663
calculateReferenceModel @ 4011-Section03.js:1754
calculateAll @ 4011-Section03.js:1692
(anonymous) @ 4011-Section03.js:2191
(anonymous) @ 4011-StateManager.js:543
notifyListeners @ 4011-StateManager.js:541
setValue @ 4011-StateManager.js:419
setValue @ 4011-Section09.js:191
(anonymous) @ 4011-Section09.js:2541
 [S15] 🎯 TGT S03 CLIMATE READ: h_23=22, d_23=-26, d_24=30, h_24=24
 [StateManager] 🎯 h_10 setValue: "95.19732768567435" (state: calculated)
 [StateManager] h_10 setValue stack trace:
setValue @ 4011-StateManager.js:346
calculateValues @ 4011-Section15.js:1832
calculateTargetModel @ 4011-Section15.js:1662
calculateAll @ 4011-Section15.js:1328
(anonymous) @ 4011-Section15.js:2121
(anonymous) @ 4011-StateManager.js:543
notifyListeners @ 4011-StateManager.js:541
setValue @ 4011-StateManager.js:419
setCalculatedValue @ 4011-Section04.js:96
calculateRow32 @ 4011-Section04.js:1026
calculateTargetModel @ 4011-Section04.js:1620
calculateAll @ 4011-Section04.js:1586
(anonymous) @ 4011-Section04.js:2483
(anonymous) @ 4011-StateManager.js:543
notifyListeners @ 4011-StateManager.js:541
setValue @ 4011-StateManager.js:419
setTargetValue @ 4011-Section15.js:146
calculateValues @ 4011-Section15.js:1810
calculateTargetModel @ 4011-Section15.js:1662
calculateAll @ 4011-Section15.js:1328
(anonymous) @ 4011-Section15.js:2121
(anonymous) @ 4011-StateManager.js:543
notifyListeners @ 4011-StateManager.js:541
setValue @ 4011-StateManager.js:419
setFieldValue @ 4011-Section13.js:636
calculateCoolingSystem @ 4011-Section13.js:3030
calculateTargetModel @ 4011-Section13.js:3560
calculateAll @ 4011-Section13.js:3403
(anonymous) @ 4011-Section13.js:2813
(anonymous) @ 4011-StateManager.js:543
notifyListeners @ 4011-StateManager.js:541
setValue @ 4011-StateManager.js:419
setValue @ 4011-Section03.js:217
setFieldValue @ 4011-Section03.js:453
calculateGroundFacing @ 4011-Section03.js:1663
calculateReferenceModel @ 4011-Section03.js:1754
calculateAll @ 4011-Section03.js:1692
(anonymous) @ 4011-Section03.js:2191
(anonymous) @ 4011-StateManager.js:543
notifyListeners @ 4011-StateManager.js:541
setValue @ 4011-StateManager.js:419
setValue @ 4011-Section09.js:191
(anonymous) @ 4011-Section09.js:2541
 [S04] Row 32 Subtotals - F32: 132938, G32: 6779.838, J32: 301986.051518286, K32: 15401.288627432587
 [S04] Reference model calculations complete
 [S04DB] storeReference: ref_j_32=301986.051518286, ref_k_32=15401.288627432587 | current target j_32=135865.62607299443, k_32=6929.146929722716
 [S04] 🔄 Updating calculated display values for target mode
 [S04DB] displayContext mode=target j_32=135865.62607299443 ref_j_32=301986.051518286 k_32=6929.146929722716 ref_k_32=15401.288627432587
 [S04 DEBUG] Target mode - j_32: 135865.62607299443
 [S04 DEBUG] Target mode - k_32: 6929.146929722716
 [S04 DEBUG] Target mode - l_27: 51
 [S04] Calculated display values updated for target mode
 [S04] Dual-engine calculations completed successfully
 [S04] 🔄 Updating calculated display values for target mode
 [S04DB] displayContext mode=target j_32=135865.62607299443 ref_j_32=301986.051518286 k_32=6929.146929722716 ref_k_32=15401.288627432587
 [S04 DEBUG] Target mode - j_32: 135865.62607299443
 [S04 DEBUG] Target mode - k_32: 6929.146929722716
 [S04 DEBUG] Target mode - l_27: 51
 [S04] Calculated display values updated for target mode
 [StateManager] 🎯 h_10 setValue: "95.19732768567435" (state: calculated)
 [StateManager] h_10 setValue stack trace:
setValue @ 4011-StateManager.js:346
calculateValues @ 4011-Section15.js:1832
calculateTargetModel @ 4011-Section15.js:1662
calculateAll @ 4011-Section15.js:1328
(anonymous) @ 4011-Section15.js:2121
(anonymous) @ 4011-StateManager.js:543
notifyListeners @ 4011-StateManager.js:541
setValue @ 4011-StateManager.js:419
setFieldValue @ 4011-Section13.js:636
calculateCoolingSystem @ 4011-Section13.js:3030
calculateTargetModel @ 4011-Section13.js:3560
calculateAll @ 4011-Section13.js:3403
(anonymous) @ 4011-Section13.js:2813
(anonymous) @ 4011-StateManager.js:543
notifyListeners @ 4011-StateManager.js:541
setValue @ 4011-StateManager.js:419
setValue @ 4011-Section03.js:217
setFieldValue @ 4011-Section03.js:453
calculateGroundFacing @ 4011-Section03.js:1663
calculateReferenceModel @ 4011-Section03.js:1754
calculateAll @ 4011-Section03.js:1692
(anonymous) @ 4011-Section03.js:2191
(anonymous) @ 4011-StateManager.js:543
notifyListeners @ 4011-StateManager.js:541
setValue @ 4011-StateManager.js:419
setValue @ 4011-Section09.js:191
(anonymous) @ 4011-Section09.js:2541
 [S15] 🎯 TGT S03 CLIMATE READ: h_23=22, d_23=-26, d_24=30, h_24=24
 [StateManager] 🎯 h_10 setValue: "95.19732768567435" (state: calculated)
 [StateManager] h_10 setValue stack trace:
setValue @ 4011-StateManager.js:346
calculateValues @ 4011-Section15.js:1832
calculateTargetModel @ 4011-Section15.js:1662
calculateAll @ 4011-Section15.js:1328
(anonymous) @ 4011-Section15.js:2121
(anonymous) @ 4011-StateManager.js:543
notifyListeners @ 4011-StateManager.js:541
setValue @ 4011-StateManager.js:419
setFieldValue @ 4011-Section13.js:636
calculateCoolingSystem @ 4011-Section13.js:3030
calculateTargetModel @ 4011-Section13.js:3560
calculateAll @ 4011-Section13.js:3403
(anonymous) @ 4011-Section13.js:2813
(anonymous) @ 4011-StateManager.js:543
notifyListeners @ 4011-StateManager.js:541
setValue @ 4011-StateManager.js:419
setValue @ 4011-Section03.js:217
setFieldValue @ 4011-Section03.js:453
calculateGroundFacing @ 4011-Section03.js:1663
calculateReferenceModel @ 4011-Section03.js:1754
calculateAll @ 4011-Section03.js:1692
(anonymous) @ 4011-Section03.js:2191
(anonymous) @ 4011-StateManager.js:543
notifyListeners @ 4011-StateManager.js:541
setValue @ 4011-StateManager.js:419
setValue @ 4011-Section09.js:191
(anonymous) @ 4011-Section09.js:2541
 [Section13] 🧊 COOLING RESULTS: d_117=3826.8214105081656, j_116=2.663540445486518, l_116=0, l_114=6366.0721940341
2 [S14 LISTENER] 🔥 d_122 changed - triggering calculateAll() + UI update
 [S15] 🎯 TGT S03 CLIMATE READ: h_23=22, d_23=-26, d_24=30, h_24=24
 [StateManager] 🎯 h_10 setValue: "95.19732768567435" (state: calculated)
 [StateManager] h_10 setValue stack trace:
setValue @ 4011-StateManager.js:346
calculateValues @ 4011-Section15.js:1832
calculateTargetModel @ 4011-Section15.js:1662
calculateAll @ 4011-Section15.js:1328
(anonymous) @ 4011-Section15.js:2121
(anonymous) @ 4011-StateManager.js:543
notifyListeners @ 4011-StateManager.js:541
setValue @ 4011-StateManager.js:419
setFieldValue @ 4011-Section13.js:636
calculateCoolingVentilation @ 4011-Section13.js:3272
calculateCoolingSystem @ 4011-Section13.js:3040
calculateTargetModel @ 4011-Section13.js:3560
calculateAll @ 4011-Section13.js:3403
(anonymous) @ 4011-Section13.js:2813
(anonymous) @ 4011-StateManager.js:543
notifyListeners @ 4011-StateManager.js:541
setValue @ 4011-StateManager.js:419
setValue @ 4011-Section03.js:217
setFieldValue @ 4011-Section03.js:453
calculateGroundFacing @ 4011-Section03.js:1663
calculateReferenceModel @ 4011-Section03.js:1754
calculateAll @ 4011-Section03.js:1692
(anonymous) @ 4011-Section03.js:2191
(anonymous) @ 4011-StateManager.js:543
notifyListeners @ 4011-StateManager.js:541
setValue @ 4011-StateManager.js:419
setValue @ 4011-Section09.js:191
(anonymous) @ 4011-Section09.js:2541
 [S15] 🎯 TGT S03 CLIMATE READ: h_23=22, d_23=-26, d_24=30, h_24=24
 [StateManager] 🎯 h_10 setValue: "95.19732768567435" (state: calculated)
 [StateManager] h_10 setValue stack trace:
setValue @ 4011-StateManager.js:346
calculateValues @ 4011-Section15.js:1832
calculateTargetModel @ 4011-Section15.js:1662
calculateAll @ 4011-Section15.js:1328
(anonymous) @ 4011-Section15.js:2121
(anonymous) @ 4011-StateManager.js:543
notifyListeners @ 4011-StateManager.js:541
setValue @ 4011-StateManager.js:419
setFieldValue @ 4011-Section13.js:636
calculateCoolingVentilation @ 4011-Section13.js:3272
calculateCoolingSystem @ 4011-Section13.js:3040
calculateTargetModel @ 4011-Section13.js:3560
calculateAll @ 4011-Section13.js:3403
(anonymous) @ 4011-Section13.js:2813
(anonymous) @ 4011-StateManager.js:543
notifyListeners @ 4011-StateManager.js:541
setValue @ 4011-StateManager.js:419
setValue @ 4011-Section03.js:217
setFieldValue @ 4011-Section03.js:453
calculateGroundFacing @ 4011-Section03.js:1663
calculateReferenceModel @ 4011-Section03.js:1754
calculateAll @ 4011-Section03.js:1692
(anonymous) @ 4011-Section03.js:2191
(anonymous) @ 4011-StateManager.js:543
notifyListeners @ 4011-StateManager.js:541
setValue @ 4011-StateManager.js:419
setValue @ 4011-Section09.js:191
(anonymous) @ 4011-Section09.js:2541
2 [S14 LISTENER] 🔥 d_122 changed - triggering calculateAll() + UI update
 [S15] 🎯 TGT S03 CLIMATE READ: h_23=22, d_23=-26, d_24=30, h_24=24
 [StateManager] 🎯 h_10 setValue: "95.19732768567435" (state: calculated)
 [StateManager] h_10 setValue stack trace:
setValue @ 4011-StateManager.js:346
calculateValues @ 4011-Section15.js:1832
calculateTargetModel @ 4011-Section15.js:1662
calculateAll @ 4011-Section15.js:1328
(anonymous) @ 4011-Section15.js:2121
(anonymous) @ 4011-StateManager.js:543
notifyListeners @ 4011-StateManager.js:541
setValue @ 4011-StateManager.js:419
setFieldValue @ 4011-Section13.js:636
updateTargetModelDOMValues @ 4011-Section13.js:3684
calculateTargetModel @ 4011-Section13.js:3570
calculateAll @ 4011-Section13.js:3403
(anonymous) @ 4011-Section13.js:2813
(anonymous) @ 4011-StateManager.js:543
notifyListeners @ 4011-StateManager.js:541
setValue @ 4011-StateManager.js:419
setValue @ 4011-Section03.js:217
setFieldValue @ 4011-Section03.js:453
calculateGroundFacing @ 4011-Section03.js:1663
calculateReferenceModel @ 4011-Section03.js:1754
calculateAll @ 4011-Section03.js:1692
(anonymous) @ 4011-Section03.js:2191
(anonymous) @ 4011-StateManager.js:543
notifyListeners @ 4011-StateManager.js:541
setValue @ 4011-StateManager.js:419
setValue @ 4011-Section09.js:191
(anonymous) @ 4011-Section09.js:2541
 [S15] 🎯 TGT S03 CLIMATE READ: h_23=22, d_23=-26, d_24=30, h_24=24
 [StateManager] 🎯 h_10 setValue: "95.19732768567435" (state: calculated)
 [StateManager] h_10 setValue stack trace:
setValue @ 4011-StateManager.js:346
calculateValues @ 4011-Section15.js:1832
calculateTargetModel @ 4011-Section15.js:1662
calculateAll @ 4011-Section15.js:1328
(anonymous) @ 4011-Section15.js:2121
(anonymous) @ 4011-StateManager.js:543
notifyListeners @ 4011-StateManager.js:541
setValue @ 4011-StateManager.js:419
setFieldValue @ 4011-Section13.js:636
updateTargetModelDOMValues @ 4011-Section13.js:3684
calculateTargetModel @ 4011-Section13.js:3570
calculateAll @ 4011-Section13.js:3403
(anonymous) @ 4011-Section13.js:2813
(anonymous) @ 4011-StateManager.js:543
notifyListeners @ 4011-StateManager.js:541
setValue @ 4011-StateManager.js:419
setValue @ 4011-Section03.js:217
setFieldValue @ 4011-Section03.js:453
calculateGroundFacing @ 4011-Section03.js:1663
calculateReferenceModel @ 4011-Section03.js:1754
calculateAll @ 4011-Section03.js:1692
(anonymous) @ 4011-Section03.js:2191
(anonymous) @ 4011-StateManager.js:543
notifyListeners @ 4011-StateManager.js:541
setValue @ 4011-StateManager.js:419
setValue @ 4011-Section09.js:191
(anonymous) @ 4011-Section09.js:2541
 [Section13] Target Model calculations complete
 [Section13] ✅ Target Model complete
 [Section13] ⏭️ Skipping Reference value re-write - triggered in target mode
 [Section13] 🎉 DUAL-ENGINE CALCULATIONS COMPLETE
 [CLOCK] 🎯 User interaction started - timing to h_10 settlement
 [S11] calculateAll TRIGGERED. isReferenceMode: false
 [S11] 🔵 REF CLIMATE READ: d_20=4600
 [S11] 🔵 REF CLIMATE READ: d_21=196
 [S11] 🔵 REF CLIMATE READ: d_20=4600
 [S11] 🔵 REF CLIMATE READ: d_21=196
 [S11] 🔵 REF CLIMATE READ: d_20=4600
 [S11] 🔵 REF CLIMATE READ: d_21=196
 [S11] 🔵 REF CLIMATE READ: d_20=4600
 [S11] 🔵 REF CLIMATE READ: d_21=196
 [S11] 🔵 REF CLIMATE READ: d_20=4600
 [S11] 🔵 REF CLIMATE READ: d_21=196
 [S11] 🔵 REF CLIMATE READ: d_20=4600
 [S11] 🔵 REF CLIMATE READ: d_21=196
 [S11] 🔵 REF CLIMATE READ: d_20=4600
 [S11] 🔵 REF CLIMATE READ: d_21=196
 [S11] 🔵 REF CLIMATE READ: d_20=4600
 [S11] 🔵 REF CLIMATE READ: d_21=196
 [S11] 🔵 REF CLIMATE READ: d_20=4600
 [S11] 🔵 REF CLIMATE READ: d_21=196
 [S11] 🔵 REF CLIMATE READ: d_22=1960
 [S11] 🔵 REF CLIMATE READ: h_22=-1680
 [S11] 🔵 REF CLIMATE READ: d_22=1960
 [S11] 🔵 REF CLIMATE READ: h_22=-1680
 [S11] REF TB%=50% → ref_i_97=59532.29, ref_k_97=-947.70
 [S11] Writing ref penalty: ref_i_97=59532.29, ref_k_97=-947.70
 [S11] 🎯 TGT CLIMATE READ: d_20=4600
 [S11] 🎯 TGT CLIMATE READ: d_21=196
 [S11] 🎯 TGT CLIMATE READ: d_20=4600
 [S11] 🎯 TGT CLIMATE READ: d_21=196
4011-Section11.js:1145 [S11] 🎯 TGT CLIMATE READ: d_20=4600
4011-Section11.js:1149 [S11] 🎯 TGT CLIMATE READ: d_21=196
4011-Section11.js:1145 [S11] 🎯 TGT CLIMATE READ: d_20=4600
4011-Section11.js:1149 [S11] 🎯 TGT CLIMATE READ: d_21=196
4011-Section11.js:1145 [S11] 🎯 TGT CLIMATE READ: d_20=4600
4011-Section11.js:1149 [S11] 🎯 TGT CLIMATE READ: d_21=196
4011-Section11.js:1145 [S11] 🎯 TGT CLIMATE READ: d_20=4600
4011-Section11.js:1149 [S11] 🎯 TGT CLIMATE READ: d_21=196
4011-Section11.js:1145 [S11] 🎯 TGT CLIMATE READ: d_20=4600
4011-Section11.js:1149 [S11] 🎯 TGT CLIMATE READ: d_21=196
4011-Section11.js:1145 [S11] 🎯 TGT CLIMATE READ: d_20=4600
4011-Section11.js:1149 [S11] 🎯 TGT CLIMATE READ: d_21=196
4011-Section11.js:1145 [S11] 🎯 TGT CLIMATE READ: d_20=4600
4011-Section11.js:1149 [S11] 🎯 TGT CLIMATE READ: d_21=196
24011-Section11.js:1189 [S11] 🎯 TGT CLIMATE READ: h_22=-1680
 [S11] calculateAll TRIGGERED. isReferenceMode: false
 [S11] 🔵 REF CLIMATE READ: d_20=4600
 [S11] 🔵 REF CLIMATE READ: d_21=196
 [S11] 🔵 REF CLIMATE READ: d_20=4600
 [S11] 🔵 REF CLIMATE READ: d_21=196
 [S11] 🔵 REF CLIMATE READ: d_20=4600
 [S11] 🔵 REF CLIMATE READ: d_21=196
 [S11] 🔵 REF CLIMATE READ: d_20=4600
 [S11] 🔵 REF CLIMATE READ: d_21=196
 [S11] 🔵 REF CLIMATE READ: d_20=4600
 [S11] 🔵 REF CLIMATE READ: d_21=196
 [S11] 🔵 REF CLIMATE READ: d_20=4600
 [S11] 🔵 REF CLIMATE READ: d_21=196
 [S11] 🔵 REF CLIMATE READ: d_20=4600
 [S11] 🔵 REF CLIMATE READ: d_21=196
 [S11] 🔵 REF CLIMATE READ: d_20=4600
 [S11] 🔵 REF CLIMATE READ: d_21=196
 [S11] 🔵 REF CLIMATE READ: d_20=4600
 [S11] 🔵 REF CLIMATE READ: d_21=196
 [S11] 🔵 REF CLIMATE READ: d_22=1960
 [S11] 🔵 REF CLIMATE READ: h_22=-1680
 [S11] 🔵 REF CLIMATE READ: d_22=1960
 [S11] 🔵 REF CLIMATE READ: h_22=-1680
 [S11] REF TB%=50% → ref_i_97=59532.29, ref_k_97=-947.70
 [S11] Writing ref penalty: ref_i_97=59532.29, ref_k_97=-947.70
 [S11] 🎯 TGT CLIMATE READ: d_20=4600
 [S11] 🎯 TGT CLIMATE READ: d_21=196
 [S11] 🎯 TGT CLIMATE READ: d_20=4600
 [S11] 🎯 TGT CLIMATE READ: d_21=196
4011-Section11.js:1145 [S11] 🎯 TGT CLIMATE READ: d_20=4600
4011-Section11.js:1149 [S11] 🎯 TGT CLIMATE READ: d_21=196
4011-Section11.js:1145 [S11] 🎯 TGT CLIMATE READ: d_20=4600
4011-Section11.js:1149 [S11] 🎯 TGT CLIMATE READ: d_21=196
4011-Section11.js:1145 [S11] 🎯 TGT CLIMATE READ: d_20=4600
4011-Section11.js:1149 [S11] 🎯 TGT CLIMATE READ: d_21=196
4011-Section11.js:1145 [S11] 🎯 TGT CLIMATE READ: d_20=4600
4011-Section11.js:1149 [S11] 🎯 TGT CLIMATE READ: d_21=196
4011-Section11.js:1145 [S11] 🎯 TGT CLIMATE READ: d_20=4600
4011-Section11.js:1149 [S11] 🎯 TGT CLIMATE READ: d_21=196
4011-Section11.js:1145 [S11] 🎯 TGT CLIMATE READ: d_20=4600
4011-Section11.js:1149 [S11] 🎯 TGT CLIMATE READ: d_21=196
4011-Section11.js:1145 [S11] 🎯 TGT CLIMATE READ: d_20=4600
4011-Section11.js:1149 [S11] 🎯 TGT CLIMATE READ: d_21=196
24011-Section11.js:1189 [S11] 🎯 TGT CLIMATE READ: h_22=-1680
 [S13DEBUG] Reference GF CDD changed: ref_h_22=-1680 → triggering Reference calculations
 [Section13] 🚀 CALCULATEALL TRIGGERED - Running dual-engine calculations...
 [Section13] 🎯 Mode captured at calculation start: target
 [Section13] 🔄 Starting Reference Model calculations...
 🔍 [S13-CONTEXT] Creating reference context: g_118="Volume Constant" from ReferenceState
 🔍 [S13-CONTEXT] ReferenceState.g_118="Volume Constant", TargetState.g_118="Volume by Schedule"
 [Section13] Running Reference Model calculations...
 [S13 CONTAMINATION DEBUG] calculateReferenceModel: Using system type = Electricity
 [S13] REF HEATING: system=Electricity, ted=251391.1974742337, afue=0.9, cop=1
 [S13 REF DEBUG] About to calculate with heating system: Electricity
 [S13 REF DEBUG] Will S13 publish ref_d_113=Electricity?
 🔍 [S13-VENT] calculateVentilationRates: ventMethod="Volume Constant", ach(l_118)=3.5, ratePerPerson(d_119)=8.33, volume(d_105)=8000
 🔍 [S13-VENT] isReferenceCalculation=true, hasContext=true
 🔍 [S13-VENT] calculateVentilationValues: ventMethod="Volume Constant", ach(l_118)=3.5, ratePerPerson(d_119)=8.33, volume(d_105)=8000
 🔍 [S13-VENT] Supporting values: occupants(d_63)=126, occupiedHours(i_63)=4380, totalHours(j_63)=8760
 🔍 [S13-VENT] Volume Constant calculation: ventRateLs = (3.5 * 8000) / 3.6 = 7777.777777777777
 ✅ [S13-VENT] Final d_120 result: 7777.777777777777 L/s (from method="Volume Constant", ach=3.5, volume=8000)
 [Section13] 🧊 COOLING CALC: mode=REF, coolingSystemType="No Cooling", heatingType="Electricity", isCoolingActive=false, coolingDemand=10192.893604542265
 [S13 CONTAMINATION DEBUG] storeReferenceResults called during reference mode
 [S13 CONTAMINATION DEBUG] Reference heating system: Electricity
 [S13 CONTAMINATION DEBUG] Target heating system: Heatpump
 [S13 CONTAMINATION DEBUG] Reference h_115 (gas volume): 0
 [S13 CONTAMINATION DEBUG] Reference f_115 (oil volume): 0
 [S13 CONTAMINATION DEBUG] Writing ref_f_115 = 0
 [S13 CONTAMINATION DEBUG] Writing ref_h_115 = 0
 [Section13] Reference results stored with ref_ prefix for downstream sections
 [S13 DEBUG] Total Reference results stored: 34
 [Section13] Reference Model calculations complete
 [Section13] ✅ Reference Model complete
 [Section13] 🔄 Starting Target Model calculations...
 🔍 [S13-CONTEXT] Creating target context: g_118="Volume by Schedule" from TargetState
 🔍 [S13-CONTEXT] TargetState.g_118="Volume by Schedule", ReferenceState.g_118="Volume Constant"
 [Section13] Running Target Model calculations...
 [S13] TGT HEATING: system=Heatpump, ted=127565.6677259902, afue=0.98, cop=3.663540445486518
 🔍 [S13-VENT] calculateVentilationRates: ventMethod="Volume by Schedule", ach(l_118)=3, ratePerPerson(d_119)=14, volume(d_105)=8000
 🔍 [S13-VENT] isReferenceCalculation=false, hasContext=true
 🔍 [S13-VENT] calculateVentilationValues: ventMethod="Volume by Schedule", ach(l_118)=3, ratePerPerson(d_119)=14, volume(d_105)=8000
 🔍 [S13-VENT] Supporting values: occupants(d_63)=126, occupiedHours(i_63)=4380, totalHours(j_63)=8760
 ✅ [S13-VENT] Final d_120 result: 3333.333333333333 L/s (from method="Volume by Schedule", ach=3, volume=8000)
 [Section13] 🧊 COOLING CALC: mode=TGT, coolingSystemType="Cooling", heatingType="Heatpump", isCoolingActive=true, coolingDemand=10192.893604542265
 [Section13] 🧊 COOLING RESULTS: d_117=3826.8214105081656, j_116=2.663540445486518, l_116=0, l_114=6366.0721940341
2 [S14 LISTENER] 🔥 d_122 changed - triggering calculateAll() + UI update
 [S15] 🎯 TGT S03 CLIMATE READ: h_23=22, d_23=-26, d_24=30, h_24=24
 [StateManager] 🎯 h_10 setValue: "95.19732768567435" (state: calculated)
 [StateManager] h_10 setValue stack trace:
setValue @ 4011-StateManager.js:346
calculateValues @ 4011-Section15.js:1832
calculateTargetModel @ 4011-Section15.js:1662
calculateAll @ 4011-Section15.js:1328
(anonymous) @ 4011-Section15.js:2121
(anonymous) @ 4011-StateManager.js:543
notifyListeners @ 4011-StateManager.js:541
setValue @ 4011-StateManager.js:419
setFieldValue @ 4011-Section13.js:636
calculateCoolingVentilation @ 4011-Section13.js:3272
calculateCoolingSystem @ 4011-Section13.js:3040
calculateTargetModel @ 4011-Section13.js:3560
calculateAll @ 4011-Section13.js:3403
(anonymous) @ 4011-Section13.js:2819
(anonymous) @ 4011-StateManager.js:543
notifyListeners @ 4011-StateManager.js:541
setValue @ 4011-StateManager.js:419
setValue @ 4011-Section03.js:217
setFieldValue @ 4011-Section03.js:453
calculateGroundFacing @ 4011-Section03.js:1682
calculateReferenceModel @ 4011-Section03.js:1754
calculateAll @ 4011-Section03.js:1692
(anonymous) @ 4011-Section03.js:2191
(anonymous) @ 4011-StateManager.js:543
notifyListeners @ 4011-StateManager.js:541
setValue @ 4011-StateManager.js:419
setValue @ 4011-Section09.js:191
(anonymous) @ 4011-Section09.js:2541
 [S15] 🎯 TGT S03 CLIMATE READ: h_23=22, d_23=-26, d_24=30, h_24=24
 [StateManager] 🎯 h_10 setValue: "95.19732768567435" (state: calculated)
 [StateManager] h_10 setValue stack trace:
setValue @ 4011-StateManager.js:346
calculateValues @ 4011-Section15.js:1832
calculateTargetModel @ 4011-Section15.js:1662
calculateAll @ 4011-Section15.js:1328
(anonymous) @ 4011-Section15.js:2121
(anonymous) @ 4011-StateManager.js:543
notifyListeners @ 4011-StateManager.js:541
setValue @ 4011-StateManager.js:419
setFieldValue @ 4011-Section13.js:636
calculateCoolingVentilation @ 4011-Section13.js:3272
calculateCoolingSystem @ 4011-Section13.js:3040
calculateTargetModel @ 4011-Section13.js:3560
calculateAll @ 4011-Section13.js:3403
(anonymous) @ 4011-Section13.js:2819
(anonymous) @ 4011-StateManager.js:543
notifyListeners @ 4011-StateManager.js:541
setValue @ 4011-StateManager.js:419
setValue @ 4011-Section03.js:217
setFieldValue @ 4011-Section03.js:453
calculateGroundFacing @ 4011-Section03.js:1682
calculateReferenceModel @ 4011-Section03.js:1754
calculateAll @ 4011-Section03.js:1692
(anonymous) @ 4011-Section03.js:2191
(anonymous) @ 4011-StateManager.js:543
notifyListeners @ 4011-StateManager.js:541
setValue @ 4011-StateManager.js:419
setValue @ 4011-Section09.js:191
(anonymous) @ 4011-Section09.js:2541
2 [S14 LISTENER] 🔥 d_122 changed - triggering calculateAll() + UI update
 [S15] 🎯 TGT S03 CLIMATE READ: h_23=22, d_23=-26, d_24=30, h_24=24
 [StateManager] 🎯 h_10 setValue: "95.19732768567435" (state: calculated)
 [StateManager] h_10 setValue stack trace:
setValue @ 4011-StateManager.js:346
calculateValues @ 4011-Section15.js:1832
calculateTargetModel @ 4011-Section15.js:1662
calculateAll @ 4011-Section15.js:1328
(anonymous) @ 4011-Section15.js:2121
(anonymous) @ 4011-StateManager.js:543
notifyListeners @ 4011-StateManager.js:541
setValue @ 4011-StateManager.js:419
setFieldValue @ 4011-Section13.js:636
updateTargetModelDOMValues @ 4011-Section13.js:3684
calculateTargetModel @ 4011-Section13.js:3570
calculateAll @ 4011-Section13.js:3403
(anonymous) @ 4011-Section13.js:2819
(anonymous) @ 4011-StateManager.js:543
notifyListeners @ 4011-StateManager.js:541
setValue @ 4011-StateManager.js:419
setValue @ 4011-Section03.js:217
setFieldValue @ 4011-Section03.js:453
calculateGroundFacing @ 4011-Section03.js:1682
calculateReferenceModel @ 4011-Section03.js:1754
calculateAll @ 4011-Section03.js:1692
(anonymous) @ 4011-Section03.js:2191
(anonymous) @ 4011-StateManager.js:543
notifyListeners @ 4011-StateManager.js:541
setValue @ 4011-StateManager.js:419
setValue @ 4011-Section09.js:191
(anonymous) @ 4011-Section09.js:2541
 [S15] 🎯 TGT S03 CLIMATE READ: h_23=22, d_23=-26, d_24=30, h_24=24
 [StateManager] 🎯 h_10 setValue: "95.19732768567435" (state: calculated)
 [StateManager] h_10 setValue stack trace:
setValue @ 4011-StateManager.js:346
calculateValues @ 4011-Section15.js:1832
calculateTargetModel @ 4011-Section15.js:1662
calculateAll @ 4011-Section15.js:1328
(anonymous) @ 4011-Section15.js:2121
(anonymous) @ 4011-StateManager.js:543
notifyListeners @ 4011-StateManager.js:541
setValue @ 4011-StateManager.js:419
setFieldValue @ 4011-Section13.js:636
updateTargetModelDOMValues @ 4011-Section13.js:3684
calculateTargetModel @ 4011-Section13.js:3570
calculateAll @ 4011-Section13.js:3403
(anonymous) @ 4011-Section13.js:2819
(anonymous) @ 4011-StateManager.js:543
notifyListeners @ 4011-StateManager.js:541
setValue @ 4011-StateManager.js:419
setValue @ 4011-Section03.js:217
setFieldValue @ 4011-Section03.js:453
calculateGroundFacing @ 4011-Section03.js:1682
calculateReferenceModel @ 4011-Section03.js:1754
calculateAll @ 4011-Section03.js:1692
(anonymous) @ 4011-Section03.js:2191
(anonymous) @ 4011-StateManager.js:543
notifyListeners @ 4011-StateManager.js:541
setValue @ 4011-StateManager.js:419
setValue @ 4011-Section09.js:191
(anonymous) @ 4011-Section09.js:2541
 [Section13] Target Model calculations complete
 [Section13] ✅ Target Model complete
 [Section13] ⏭️ Skipping Reference value re-write - triggered in target mode
 [Section13] 🎉 DUAL-ENGINE CALCULATIONS COMPLETE
 [CLOCK] 🎯 User interaction started - timing to h_10 settlement
 [CLOCK] 🎯 User interaction started - timing to h_10 settlement
 [S15] 🎯 TGT S03 CLIMATE READ: h_23=22, d_23=-26, d_24=30, h_24=24
 [StateManager] 🎯 h_10 setValue: "95.19732768567435" (state: calculated)
 [StateManager] h_10 setValue stack trace:
setValue @ 4011-StateManager.js:346
calculateValues @ 4011-Section15.js:1832
calculateTargetModel @ 4011-Section15.js:1662
calculateAll @ 4011-Section15.js:1328
(anonymous) @ 4011-Section15.js:2121
(anonymous) @ 4011-StateManager.js:543
notifyListeners @ 4011-StateManager.js:541
setValue @ 4011-StateManager.js:419
(anonymous) @ 4011-Section03.js:1797
storeReferenceResults @ 4011-Section03.js:1795
calculateReferenceModel @ 4011-Section03.js:1761
calculateAll @ 4011-Section03.js:1692
(anonymous) @ 4011-Section03.js:2191
(anonymous) @ 4011-StateManager.js:543
notifyListeners @ 4011-StateManager.js:541
setValue @ 4011-StateManager.js:419
setValue @ 4011-Section09.js:191
(anonymous) @ 4011-Section09.js:2541
 [S15] 🎯 TGT S03 CLIMATE READ: h_23=22, d_23=-26, d_24=30, h_24=24
 [StateManager] 🎯 h_10 setValue: "95.19732768567435" (state: calculated)
 [StateManager] h_10 setValue stack trace:
setValue @ 4011-StateManager.js:346
calculateValues @ 4011-Section15.js:1832
calculateTargetModel @ 4011-Section15.js:1662
calculateAll @ 4011-Section15.js:1328
(anonymous) @ 4011-Section15.js:2121
(anonymous) @ 4011-StateManager.js:543
notifyListeners @ 4011-StateManager.js:541
setValue @ 4011-StateManager.js:419
(anonymous) @ 4011-Section03.js:1797
storeReferenceResults @ 4011-Section03.js:1795
calculateReferenceModel @ 4011-Section03.js:1761
calculateAll @ 4011-Section03.js:1692
(anonymous) @ 4011-Section03.js:2191
(anonymous) @ 4011-StateManager.js:543
notifyListeners @ 4011-StateManager.js:541
setValue @ 4011-StateManager.js:419
setValue @ 4011-Section09.js:191
(anonymous) @ 4011-Section09.js:2541
 [S15] 🎯 TGT S03 CLIMATE READ: h_23=22, d_23=-26, d_24=30, h_24=24
 [StateManager] 🎯 h_10 setValue: "95.19732768567435" (state: calculated)
 [StateManager] h_10 setValue stack trace:
setValue @ 4011-StateManager.js:346
calculateValues @ 4011-Section15.js:1832
calculateTargetModel @ 4011-Section15.js:1662
calculateAll @ 4011-Section15.js:1328
(anonymous) @ 4011-Section15.js:2121
(anonymous) @ 4011-StateManager.js:543
notifyListeners @ 4011-StateManager.js:541
setValue @ 4011-StateManager.js:419
(anonymous) @ 4011-Section03.js:1797
storeReferenceResults @ 4011-Section03.js:1795
calculateReferenceModel @ 4011-Section03.js:1761
calculateAll @ 4011-Section03.js:1692
(anonymous) @ 4011-Section03.js:2191
(anonymous) @ 4011-StateManager.js:543
notifyListeners @ 4011-StateManager.js:541
setValue @ 4011-StateManager.js:419
setValue @ 4011-Section09.js:191
(anonymous) @ 4011-Section09.js:2541
 [S15] 🎯 TGT S03 CLIMATE READ: h_23=22, d_23=-26, d_24=30, h_24=24
 [StateManager] 🎯 h_10 setValue: "95.19732768567435" (state: calculated)
 [StateManager] h_10 setValue stack trace:
setValue @ 4011-StateManager.js:346
calculateValues @ 4011-Section15.js:1832
calculateTargetModel @ 4011-Section15.js:1662
calculateAll @ 4011-Section15.js:1328
(anonymous) @ 4011-Section15.js:2121
(anonymous) @ 4011-StateManager.js:543
notifyListeners @ 4011-StateManager.js:541
setValue @ 4011-StateManager.js:419
(anonymous) @ 4011-Section03.js:1797
storeReferenceResults @ 4011-Section03.js:1795
calculateReferenceModel @ 4011-Section03.js:1761
calculateAll @ 4011-Section03.js:1692
(anonymous) @ 4011-Section03.js:2191
(anonymous) @ 4011-StateManager.js:543
notifyListeners @ 4011-StateManager.js:541
setValue @ 4011-StateManager.js:419
setValue @ 4011-Section09.js:191
(anonymous) @ 4011-Section09.js:2541
 [S15] 🎯 TGT S03 CLIMATE READ: h_23=22, d_23=-26, d_24=30, h_24=24
 [StateManager] 🎯 h_10 setValue: "95.19732768567435" (state: calculated)
 [StateManager] h_10 setValue stack trace:
setValue @ 4011-StateManager.js:346
calculateValues @ 4011-Section15.js:1832
calculateTargetModel @ 4011-Section15.js:1662
calculateAll @ 4011-Section15.js:1328
(anonymous) @ 4011-Section15.js:2121
(anonymous) @ 4011-StateManager.js:543
notifyListeners @ 4011-StateManager.js:541
setValue @ 4011-StateManager.js:419
(anonymous) @ 4011-Section03.js:1797
storeReferenceResults @ 4011-Section03.js:1795
calculateReferenceModel @ 4011-Section03.js:1761
calculateAll @ 4011-Section03.js:1692
(anonymous) @ 4011-Section03.js:2191
(anonymous) @ 4011-StateManager.js:543
notifyListeners @ 4011-StateManager.js:541
setValue @ 4011-StateManager.js:419
setValue @ 4011-Section09.js:191
(anonymous) @ 4011-Section09.js:2541
 [S15] 🎯 TGT S03 CLIMATE READ: h_23=22, d_23=-26, d_24=30, h_24=24
 [StateManager] 🎯 h_10 setValue: "95.19732768567435" (state: calculated)
 [StateManager] h_10 setValue stack trace:
setValue @ 4011-StateManager.js:346
calculateValues @ 4011-Section15.js:1832
calculateTargetModel @ 4011-Section15.js:1662
calculateAll @ 4011-Section15.js:1328
(anonymous) @ 4011-Section15.js:2121
(anonymous) @ 4011-StateManager.js:543
notifyListeners @ 4011-StateManager.js:541
setValue @ 4011-StateManager.js:419
(anonymous) @ 4011-Section03.js:1797
storeReferenceResults @ 4011-Section03.js:1795
calculateReferenceModel @ 4011-Section03.js:1761
calculateAll @ 4011-Section03.js:1692
(anonymous) @ 4011-Section03.js:2191
(anonymous) @ 4011-StateManager.js:543
notifyListeners @ 4011-StateManager.js:541
setValue @ 4011-StateManager.js:419
setValue @ 4011-Section09.js:191
(anonymous) @ 4011-Section09.js:2541
 [S15] 🎯 TGT S03 CLIMATE READ: h_23=22, d_23=-26, d_24=30, h_24=24
 [StateManager] 🎯 h_10 setValue: "95.19732768567435" (state: calculated)
 [StateManager] h_10 setValue stack trace:
setValue @ 4011-StateManager.js:346
calculateValues @ 4011-Section15.js:1832
calculateTargetModel @ 4011-Section15.js:1662
calculateAll @ 4011-Section15.js:1328
(anonymous) @ 4011-Section15.js:2121
(anonymous) @ 4011-StateManager.js:543
notifyListeners @ 4011-StateManager.js:541
setValue @ 4011-StateManager.js:419
(anonymous) @ 4011-Section03.js:1797
storeReferenceResults @ 4011-Section03.js:1795
calculateReferenceModel @ 4011-Section03.js:1761
calculateAll @ 4011-Section03.js:1692
(anonymous) @ 4011-Section03.js:2191
(anonymous) @ 4011-StateManager.js:543
notifyListeners @ 4011-StateManager.js:541
setValue @ 4011-StateManager.js:419
setValue @ 4011-Section09.js:191
(anonymous) @ 4011-Section09.js:2541
 [S15] 🎯 TGT S03 CLIMATE READ: h_23=22, d_23=-26, d_24=30, h_24=24
 [StateManager] 🎯 h_10 setValue: "95.19732768567435" (state: calculated)
 [StateManager] h_10 setValue stack trace:
setValue @ 4011-StateManager.js:346
calculateValues @ 4011-Section15.js:1832
calculateTargetModel @ 4011-Section15.js:1662
calculateAll @ 4011-Section15.js:1328
(anonymous) @ 4011-Section15.js:2121
(anonymous) @ 4011-StateManager.js:543
notifyListeners @ 4011-StateManager.js:541
setValue @ 4011-StateManager.js:419
(anonymous) @ 4011-Section03.js:1797
storeReferenceResults @ 4011-Section03.js:1795
calculateReferenceModel @ 4011-Section03.js:1761
calculateAll @ 4011-Section03.js:1692
(anonymous) @ 4011-Section03.js:2191
(anonymous) @ 4011-StateManager.js:543
notifyListeners @ 4011-StateManager.js:541
setValue @ 4011-StateManager.js:419
setValue @ 4011-Section09.js:191
(anonymous) @ 4011-Section09.js:2541
 [S11] calculateAll TRIGGERED. isReferenceMode: false
 [S11] 🔵 REF CLIMATE READ: d_20=4600
 [S11] 🔵 REF CLIMATE READ: d_21=196
 [S11] 🔵 REF CLIMATE READ: d_20=4600
 [S11] 🔵 REF CLIMATE READ: d_21=196
 [S11] 🔵 REF CLIMATE READ: d_20=4600
 [S11] 🔵 REF CLIMATE READ: d_21=196
 [S11] 🔵 REF CLIMATE READ: d_20=4600
 [S11] 🔵 REF CLIMATE READ: d_21=196
 [S11] 🔵 REF CLIMATE READ: d_20=4600
 [S11] 🔵 REF CLIMATE READ: d_21=196
 [S11] 🔵 REF CLIMATE READ: d_20=4600
 [S11] 🔵 REF CLIMATE READ: d_21=196
 [S11] 🔵 REF CLIMATE READ: d_20=4600
 [S11] 🔵 REF CLIMATE READ: d_21=196
 [S11] 🔵 REF CLIMATE READ: d_20=4600
 [S11] 🔵 REF CLIMATE READ: d_21=196
 [S11] 🔵 REF CLIMATE READ: d_20=4600
 [S11] 🔵 REF CLIMATE READ: d_21=196
 [S11] 🔵 REF CLIMATE READ: d_22=1960
 [S11] 🔵 REF CLIMATE READ: h_22=-1680
 [S11] 🔵 REF CLIMATE READ: d_22=1960
 [S11] 🔵 REF CLIMATE READ: h_22=-1680
 [S11] REF TB%=50% → ref_i_97=59532.29, ref_k_97=-947.70
 [S11] Writing ref penalty: ref_i_97=59532.29, ref_k_97=-947.70
 [S11] 🎯 TGT CLIMATE READ: d_20=4600
 [S11] 🎯 TGT CLIMATE READ: d_21=196
 [S11] 🎯 TGT CLIMATE READ: d_20=4600
 [S11] 🎯 TGT CLIMATE READ: d_21=196
4011-Section11.js:1145 [S11] 🎯 TGT CLIMATE READ: d_20=4600
4011-Section11.js:1149 [S11] 🎯 TGT CLIMATE READ: d_21=196
4011-Section11.js:1145 [S11] 🎯 TGT CLIMATE READ: d_20=4600
4011-Section11.js:1149 [S11] 🎯 TGT CLIMATE READ: d_21=196
4011-Section11.js:1145 [S11] 🎯 TGT CLIMATE READ: d_20=4600
4011-Section11.js:1149 [S11] 🎯 TGT CLIMATE READ: d_21=196
4011-Section11.js:1145 [S11] 🎯 TGT CLIMATE READ: d_20=4600
4011-Section11.js:1149 [S11] 🎯 TGT CLIMATE READ: d_21=196
4011-Section11.js:1145 [S11] 🎯 TGT CLIMATE READ: d_20=4600
4011-Section11.js:1149 [S11] 🎯 TGT CLIMATE READ: d_21=196
4011-Section11.js:1145 [S11] 🎯 TGT CLIMATE READ: d_20=4600
4011-Section11.js:1149 [S11] 🎯 TGT CLIMATE READ: d_21=196
4011-Section11.js:1145 [S11] 🎯 TGT CLIMATE READ: d_20=4600
4011-Section11.js:1149 [S11] 🎯 TGT CLIMATE READ: d_21=196
24011-Section11.js:1189 [S11] 🎯 TGT CLIMATE READ: h_22=-1680
 [S11] calculateAll TRIGGERED. isReferenceMode: false
 [S11] 🔵 REF CLIMATE READ: d_20=4600
 [S11] 🔵 REF CLIMATE READ: d_21=196
 [S11] 🔵 REF CLIMATE READ: d_20=4600
 [S11] 🔵 REF CLIMATE READ: d_21=196
 [S11] 🔵 REF CLIMATE READ: d_20=4600
 [S11] 🔵 REF CLIMATE READ: d_21=196
 [S11] 🔵 REF CLIMATE READ: d_20=4600
 [S11] 🔵 REF CLIMATE READ: d_21=196
 [S11] 🔵 REF CLIMATE READ: d_20=4600
 [S11] 🔵 REF CLIMATE READ: d_21=196
 [S11] 🔵 REF CLIMATE READ: d_20=4600
 [S11] 🔵 REF CLIMATE READ: d_21=196
 [S11] 🔵 REF CLIMATE READ: d_20=4600
 [S11] 🔵 REF CLIMATE READ: d_21=196
 [S11] 🔵 REF CLIMATE READ: d_20=4600
 [S11] 🔵 REF CLIMATE READ: d_21=196
 [S11] 🔵 REF CLIMATE READ: d_20=4600
 [S11] 🔵 REF CLIMATE READ: d_21=196
 [S11] 🔵 REF CLIMATE READ: d_22=1960
 [S11] 🔵 REF CLIMATE READ: h_22=-1680
 [S11] 🔵 REF CLIMATE READ: d_22=1960
 [S11] 🔵 REF CLIMATE READ: h_22=-1680
 [S11] REF TB%=50% → ref_i_97=59532.29, ref_k_97=-947.70
 [S11] Writing ref penalty: ref_i_97=59532.29, ref_k_97=-947.70
 [S11] 🎯 TGT CLIMATE READ: d_20=4600
 [S11] 🎯 TGT CLIMATE READ: d_21=196
 [S11] 🎯 TGT CLIMATE READ: d_20=4600
 [S11] 🎯 TGT CLIMATE READ: d_21=196
 [S11] 🎯 TGT CLIMATE READ: d_20=4600
 [S11] 🎯 TGT CLIMATE READ: d_21=196
 [S11] 🎯 TGT CLIMATE READ: d_20=4600
 [S11] 🎯 TGT CLIMATE READ: d_21=196
 [S11] 🎯 TGT CLIMATE READ: d_20=4600
 [S11] 🎯 TGT CLIMATE READ: d_21=196
 [S11] 🎯 TGT CLIMATE READ: d_20=4600
 [S11] 🎯 TGT CLIMATE READ: d_21=196
 [S11] 🎯 TGT CLIMATE READ: d_20=4600
 [S11] 🎯 TGT CLIMATE READ: d_21=196
 [S11] 🎯 TGT CLIMATE READ: d_20=4600
 [S11] 🎯 TGT CLIMATE READ: d_21=196
 [S11] 🎯 TGT CLIMATE READ: d_20=4600
 [S11] 🎯 TGT CLIMATE READ: d_21=196
2 [S11] 🎯 TGT CLIMATE READ: h_22=-1680
 [S13DEBUG] Reference GF HDD changed: ref_d_22=1960 → triggering Reference calculations
 [Section13] 🚀 CALCULATEALL TRIGGERED - Running dual-engine calculations...
 [Section13] 🎯 Mode captured at calculation start: target
 [Section13] 🔄 Starting Reference Model calculations...
 🔍 [S13-CONTEXT] Creating reference context: g_118="Volume Constant" from ReferenceState
 🔍 [S13-CONTEXT] ReferenceState.g_118="Volume Constant", TargetState.g_118="Volume by Schedule"
 [Section13] Running Reference Model calculations...
 [S13 CONTAMINATION DEBUG] calculateReferenceModel: Using system type = Electricity
 [S13] REF HEATING: system=Electricity, ted=251391.1974742337, afue=0.9, cop=1
 [S13 REF DEBUG] About to calculate with heating system: Electricity
 [S13 REF DEBUG] Will S13 publish ref_d_113=Electricity?
 🔍 [S13-VENT] calculateVentilationRates: ventMethod="Volume Constant", ach(l_118)=3.5, ratePerPerson(d_119)=8.33, volume(d_105)=8000
 🔍 [S13-VENT] isReferenceCalculation=true, hasContext=true
 🔍 [S13-VENT] calculateVentilationValues: ventMethod="Volume Constant", ach(l_118)=3.5, ratePerPerson(d_119)=8.33, volume(d_105)=8000
 🔍 [S13-VENT] Supporting values: occupants(d_63)=126, occupiedHours(i_63)=4380, totalHours(j_63)=8760
 🔍 [S13-VENT] Volume Constant calculation: ventRateLs = (3.5 * 8000) / 3.6 = 7777.777777777777
 ✅ [S13-VENT] Final d_120 result: 7777.777777777777 L/s (from method="Volume Constant", ach=3.5, volume=8000)
 [Section13] 🧊 COOLING CALC: mode=REF, coolingSystemType="No Cooling", heatingType="Electricity", isCoolingActive=false, coolingDemand=10192.893604542265
 [S13 CONTAMINATION DEBUG] storeReferenceResults called during reference mode
 [S13 CONTAMINATION DEBUG] Reference heating system: Electricity
 [S13 CONTAMINATION DEBUG] Target heating system: Heatpump
 [S13 CONTAMINATION DEBUG] Reference h_115 (gas volume): 0
 [S13 CONTAMINATION DEBUG] Reference f_115 (oil volume): 0
 [S13 CONTAMINATION DEBUG] Writing ref_f_115 = 0
 [S13 CONTAMINATION DEBUG] Writing ref_h_115 = 0
 [Section13] Reference results stored with ref_ prefix for downstream sections
 [S13 DEBUG] Total Reference results stored: 34
 [Section13] Reference Model calculations complete
 [Section13] ✅ Reference Model complete
 [Section13] 🔄 Starting Target Model calculations...
 🔍 [S13-CONTEXT] Creating target context: g_118="Volume by Schedule" from TargetState
 🔍 [S13-CONTEXT] TargetState.g_118="Volume by Schedule", ReferenceState.g_118="Volume Constant"
 [Section13] Running Target Model calculations...
 [S13] TGT HEATING: system=Heatpump, ted=127565.6677259902, afue=0.98, cop=3.663540445486518
 🔍 [S13-VENT] calculateVentilationRates: ventMethod="Volume by Schedule", ach(l_118)=3, ratePerPerson(d_119)=14, volume(d_105)=8000
 🔍 [S13-VENT] isReferenceCalculation=false, hasContext=true
 🔍 [S13-VENT] calculateVentilationValues: ventMethod="Volume by Schedule", ach(l_118)=3, ratePerPerson(d_119)=14, volume(d_105)=8000
 🔍 [S13-VENT] Supporting values: occupants(d_63)=126, occupiedHours(i_63)=4380, totalHours(j_63)=8760
 ✅ [S13-VENT] Final d_120 result: 3333.333333333333 L/s (from method="Volume by Schedule", ach=3, volume=8000)
 [Section13] 🧊 COOLING CALC: mode=TGT, coolingSystemType="Cooling", heatingType="Heatpump", isCoolingActive=true, coolingDemand=10192.893604542265
 [Section13] 🧊 COOLING RESULTS: d_117=3826.8214105081656, j_116=2.663540445486518, l_116=0, l_114=6366.0721940341
2 [S14 LISTENER] 🔥 d_122 changed - triggering calculateAll() + UI update
 [S15] 🎯 TGT S03 CLIMATE READ: h_23=22, d_23=-26, d_24=30, h_24=24
 [StateManager] 🎯 h_10 setValue: "95.19732768567435" (state: calculated)
 [StateManager] h_10 setValue stack trace:
setValue @ 4011-StateManager.js:346
calculateValues @ 4011-Section15.js:1832
calculateTargetModel @ 4011-Section15.js:1662
calculateAll @ 4011-Section15.js:1328
(anonymous) @ 4011-Section15.js:2121
(anonymous) @ 4011-StateManager.js:543
notifyListeners @ 4011-StateManager.js:541
setValue @ 4011-StateManager.js:419
setFieldValue @ 4011-Section13.js:636
calculateCoolingVentilation @ 4011-Section13.js:3272
calculateCoolingSystem @ 4011-Section13.js:3040
calculateTargetModel @ 4011-Section13.js:3560
calculateAll @ 4011-Section13.js:3403
(anonymous) @ 4011-Section13.js:2813
(anonymous) @ 4011-StateManager.js:543
notifyListeners @ 4011-StateManager.js:541
setValue @ 4011-StateManager.js:419
(anonymous) @ 4011-Section03.js:1797
storeReferenceResults @ 4011-Section03.js:1795
calculateReferenceModel @ 4011-Section03.js:1761
calculateAll @ 4011-Section03.js:1692
(anonymous) @ 4011-Section03.js:2191
(anonymous) @ 4011-StateManager.js:543
notifyListeners @ 4011-StateManager.js:541
setValue @ 4011-StateManager.js:419
setValue @ 4011-Section09.js:191
(anonymous) @ 4011-Section09.js:2541
 [S15] 🎯 TGT S03 CLIMATE READ: h_23=22, d_23=-26, d_24=30, h_24=24
 [StateManager] 🎯 h_10 setValue: "95.19732768567435" (state: calculated)
 [StateManager] h_10 setValue stack trace:
setValue @ 4011-StateManager.js:346
calculateValues @ 4011-Section15.js:1832
calculateTargetModel @ 4011-Section15.js:1662
calculateAll @ 4011-Section15.js:1328
(anonymous) @ 4011-Section15.js:2121
(anonymous) @ 4011-StateManager.js:543
notifyListeners @ 4011-StateManager.js:541
setValue @ 4011-StateManager.js:419
setFieldValue @ 4011-Section13.js:636
calculateCoolingVentilation @ 4011-Section13.js:3272
calculateCoolingSystem @ 4011-Section13.js:3040
calculateTargetModel @ 4011-Section13.js:3560
calculateAll @ 4011-Section13.js:3403
(anonymous) @ 4011-Section13.js:2813
(anonymous) @ 4011-StateManager.js:543
notifyListeners @ 4011-StateManager.js:541
setValue @ 4011-StateManager.js:419
(anonymous) @ 4011-Section03.js:1797
storeReferenceResults @ 4011-Section03.js:1795
calculateReferenceModel @ 4011-Section03.js:1761
calculateAll @ 4011-Section03.js:1692
(anonymous) @ 4011-Section03.js:2191
(anonymous) @ 4011-StateManager.js:543
notifyListeners @ 4011-StateManager.js:541
setValue @ 4011-StateManager.js:419
setValue @ 4011-Section09.js:191
(anonymous) @ 4011-Section09.js:2541
2 [S14 LISTENER] 🔥 d_122 changed - triggering calculateAll() + UI update
 [S15] 🎯 TGT S03 CLIMATE READ: h_23=22, d_23=-26, d_24=30, h_24=24
 [StateManager] 🎯 h_10 setValue: "95.19732768567435" (state: calculated)
 [StateManager] h_10 setValue stack trace:
setValue @ 4011-StateManager.js:346
calculateValues @ 4011-Section15.js:1832
calculateTargetModel @ 4011-Section15.js:1662
calculateAll @ 4011-Section15.js:1328
(anonymous) @ 4011-Section15.js:2121
(anonymous) @ 4011-StateManager.js:543
notifyListeners @ 4011-StateManager.js:541
setValue @ 4011-StateManager.js:419
setFieldValue @ 4011-Section13.js:636
updateTargetModelDOMValues @ 4011-Section13.js:3684
calculateTargetModel @ 4011-Section13.js:3570
calculateAll @ 4011-Section13.js:3403
(anonymous) @ 4011-Section13.js:2813
(anonymous) @ 4011-StateManager.js:543
notifyListeners @ 4011-StateManager.js:541
setValue @ 4011-StateManager.js:419
(anonymous) @ 4011-Section03.js:1797
storeReferenceResults @ 4011-Section03.js:1795
calculateReferenceModel @ 4011-Section03.js:1761
calculateAll @ 4011-Section03.js:1692
(anonymous) @ 4011-Section03.js:2191
(anonymous) @ 4011-StateManager.js:543
notifyListeners @ 4011-StateManager.js:541
setValue @ 4011-StateManager.js:419
setValue @ 4011-Section09.js:191
(anonymous) @ 4011-Section09.js:2541
 [S15] 🎯 TGT S03 CLIMATE READ: h_23=22, d_23=-26, d_24=30, h_24=24
 [StateManager] 🎯 h_10 setValue: "95.19732768567435" (state: calculated)
 [StateManager] h_10 setValue stack trace:
setValue @ 4011-StateManager.js:346
calculateValues @ 4011-Section15.js:1832
calculateTargetModel @ 4011-Section15.js:1662
calculateAll @ 4011-Section15.js:1328
(anonymous) @ 4011-Section15.js:2121
(anonymous) @ 4011-StateManager.js:543
notifyListeners @ 4011-StateManager.js:541
setValue @ 4011-StateManager.js:419
setFieldValue @ 4011-Section13.js:636
updateTargetModelDOMValues @ 4011-Section13.js:3684
calculateTargetModel @ 4011-Section13.js:3570
calculateAll @ 4011-Section13.js:3403
(anonymous) @ 4011-Section13.js:2813
(anonymous) @ 4011-StateManager.js:543
notifyListeners @ 4011-StateManager.js:541
setValue @ 4011-StateManager.js:419
(anonymous) @ 4011-Section03.js:1797
storeReferenceResults @ 4011-Section03.js:1795
calculateReferenceModel @ 4011-Section03.js:1761
calculateAll @ 4011-Section03.js:1692
(anonymous) @ 4011-Section03.js:2191
(anonymous) @ 4011-StateManager.js:543
notifyListeners @ 4011-StateManager.js:541
setValue @ 4011-StateManager.js:419
setValue @ 4011-Section09.js:191
(anonymous) @ 4011-Section09.js:2541
 [Section13] Target Model calculations complete
 [Section13] ✅ Target Model complete
 [Section13] ⏭️ Skipping Reference value re-write - triggered in target mode
 [Section13] 🎉 DUAL-ENGINE CALCULATIONS COMPLETE
 [S11] calculateAll TRIGGERED. isReferenceMode: false
 [S11] 🔵 REF CLIMATE READ: d_20=4600
 [S11] 🔵 REF CLIMATE READ: d_21=196
 [S11] 🔵 REF CLIMATE READ: d_20=4600
 [S11] 🔵 REF CLIMATE READ: d_21=196
 [S11] 🔵 REF CLIMATE READ: d_20=4600
 [S11] 🔵 REF CLIMATE READ: d_21=196
 [S11] 🔵 REF CLIMATE READ: d_20=4600
 [S11] 🔵 REF CLIMATE READ: d_21=196
 [S11] 🔵 REF CLIMATE READ: d_20=4600
 [S11] 🔵 REF CLIMATE READ: d_21=196
 [S11] 🔵 REF CLIMATE READ: d_20=4600
 [S11] 🔵 REF CLIMATE READ: d_21=196
 [S11] 🔵 REF CLIMATE READ: d_20=4600
 [S11] 🔵 REF CLIMATE READ: d_21=196
 [S11] 🔵 REF CLIMATE READ: d_20=4600
 [S11] 🔵 REF CLIMATE READ: d_21=196
 [S11] 🔵 REF CLIMATE READ: d_20=4600
 [S11] 🔵 REF CLIMATE READ: d_21=196
 [S11] 🔵 REF CLIMATE READ: d_22=1960
 [S11] 🔵 REF CLIMATE READ: h_22=-1680
 [S11] 🔵 REF CLIMATE READ: d_22=1960
 [S11] 🔵 REF CLIMATE READ: h_22=-1680
 [S11] REF TB%=50% → ref_i_97=59532.29, ref_k_97=-947.70
 [S11] Writing ref penalty: ref_i_97=59532.29, ref_k_97=-947.70
 [S11] 🎯 TGT CLIMATE READ: d_20=4600
 [S11] 🎯 TGT CLIMATE READ: d_21=196
 [S11] 🎯 TGT CLIMATE READ: d_20=4600
 [S11] 🎯 TGT CLIMATE READ: d_21=196
 [S11] 🎯 TGT CLIMATE READ: d_20=4600
 [S11] 🎯 TGT CLIMATE READ: d_21=196
 [S11] 🎯 TGT CLIMATE READ: d_20=4600
 [S11] 🎯 TGT CLIMATE READ: d_21=196
 [S11] 🎯 TGT CLIMATE READ: d_20=4600
 [S11] 🎯 TGT CLIMATE READ: d_21=196
 [S11] 🎯 TGT CLIMATE READ: d_20=4600
 [S11] 🎯 TGT CLIMATE READ: d_21=196
 [S11] 🎯 TGT CLIMATE READ: d_20=4600
 [S11] 🎯 TGT CLIMATE READ: d_21=196
 [S11] 🎯 TGT CLIMATE READ: d_20=4600
 [S11] 🎯 TGT CLIMATE READ: d_21=196
 [S11] 🎯 TGT CLIMATE READ: d_20=4600
 [S11] 🎯 TGT CLIMATE READ: d_21=196
2 [S11] 🎯 TGT CLIMATE READ: h_22=-1680
 [S11] calculateAll TRIGGERED. isReferenceMode: false
 [S11] 🔵 REF CLIMATE READ: d_20=4600
 [S11] 🔵 REF CLIMATE READ: d_21=196
 [S11] 🔵 REF CLIMATE READ: d_20=4600
 [S11] 🔵 REF CLIMATE READ: d_21=196
 [S11] 🔵 REF CLIMATE READ: d_20=4600
 [S11] 🔵 REF CLIMATE READ: d_21=196
 [S11] 🔵 REF CLIMATE READ: d_20=4600
 [S11] 🔵 REF CLIMATE READ: d_21=196
 [S11] 🔵 REF CLIMATE READ: d_20=4600
 [S11] 🔵 REF CLIMATE READ: d_21=196
 [S11] 🔵 REF CLIMATE READ: d_20=4600
 [S11] 🔵 REF CLIMATE READ: d_21=196
 [S11] 🔵 REF CLIMATE READ: d_20=4600
 [S11] 🔵 REF CLIMATE READ: d_21=196
 [S11] 🔵 REF CLIMATE READ: d_20=4600
 [S11] 🔵 REF CLIMATE READ: d_21=196
 [S11] 🔵 REF CLIMATE READ: d_20=4600
 [S11] 🔵 REF CLIMATE READ: d_21=196
 [S11] 🔵 REF CLIMATE READ: d_22=1960
 [S11] 🔵 REF CLIMATE READ: h_22=-1680
 [S11] 🔵 REF CLIMATE READ: d_22=1960
 [S11] 🔵 REF CLIMATE READ: h_22=-1680
 [S11] REF TB%=50% → ref_i_97=59532.29, ref_k_97=-947.70
 [S11] Writing ref penalty: ref_i_97=59532.29, ref_k_97=-947.70
 [S11] 🎯 TGT CLIMATE READ: d_20=4600
 [S11] 🎯 TGT CLIMATE READ: d_21=196
 [S11] 🎯 TGT CLIMATE READ: d_20=4600
 [S11] 🎯 TGT CLIMATE READ: d_21=196
4011-Section11.js:1145 [S11] 🎯 TGT CLIMATE READ: d_20=4600
4011-Section11.js:1149 [S11] 🎯 TGT CLIMATE READ: d_21=196
4011-Section11.js:1145 [S11] 🎯 TGT CLIMATE READ: d_20=4600
4011-Section11.js:1149 [S11] 🎯 TGT CLIMATE READ: d_21=196
4011-Section11.js:1145 [S11] 🎯 TGT CLIMATE READ: d_20=4600
4011-Section11.js:1149 [S11] 🎯 TGT CLIMATE READ: d_21=196
4011-Section11.js:1145 [S11] 🎯 TGT CLIMATE READ: d_20=4600
4011-Section11.js:1149 [S11] 🎯 TGT CLIMATE READ: d_21=196
4011-Section11.js:1145 [S11] 🎯 TGT CLIMATE READ: d_20=4600
4011-Section11.js:1149 [S11] 🎯 TGT CLIMATE READ: d_21=196
4011-Section11.js:1145 [S11] 🎯 TGT CLIMATE READ: d_20=4600
4011-Section11.js:1149 [S11] 🎯 TGT CLIMATE READ: d_21=196
4011-Section11.js:1145 [S11] 🎯 TGT CLIMATE READ: d_20=4600
4011-Section11.js:1149 [S11] 🎯 TGT CLIMATE READ: d_21=196
24011-Section11.js:1189 [S11] 🎯 TGT CLIMATE READ: h_22=-1680
 [S13DEBUG] Reference GF CDD changed: ref_h_22=-1680 → triggering Reference calculations
 [Section13] 🚀 CALCULATEALL TRIGGERED - Running dual-engine calculations...
 [Section13] 🎯 Mode captured at calculation start: target
 [Section13] 🔄 Starting Reference Model calculations...
 🔍 [S13-CONTEXT] Creating reference context: g_118="Volume Constant" from ReferenceState
 🔍 [S13-CONTEXT] ReferenceState.g_118="Volume Constant", TargetState.g_118="Volume by Schedule"
 [Section13] Running Reference Model calculations...
 [S13 CONTAMINATION DEBUG] calculateReferenceModel: Using system type = Electricity
 [S13] REF HEATING: system=Electricity, ted=251391.1974742337, afue=0.9, cop=1
 [S13 REF DEBUG] About to calculate with heating system: Electricity
 [S13 REF DEBUG] Will S13 publish ref_d_113=Electricity?
 🔍 [S13-VENT] calculateVentilationRates: ventMethod="Volume Constant", ach(l_118)=3.5, ratePerPerson(d_119)=8.33, volume(d_105)=8000
 🔍 [S13-VENT] isReferenceCalculation=true, hasContext=true
 🔍 [S13-VENT] calculateVentilationValues: ventMethod="Volume Constant", ach(l_118)=3.5, ratePerPerson(d_119)=8.33, volume(d_105)=8000
 🔍 [S13-VENT] Supporting values: occupants(d_63)=126, occupiedHours(i_63)=4380, totalHours(j_63)=8760
 🔍 [S13-VENT] Volume Constant calculation: ventRateLs = (3.5 * 8000) / 3.6 = 7777.777777777777
 ✅ [S13-VENT] Final d_120 result: 7777.777777777777 L/s (from method="Volume Constant", ach=3.5, volume=8000)
 [Section13] 🧊 COOLING CALC: mode=REF, coolingSystemType="No Cooling", heatingType="Electricity", isCoolingActive=false, coolingDemand=10192.893604542265
 [S13 CONTAMINATION DEBUG] storeReferenceResults called during reference mode
4011-Section13.js:3737 [S13 CONTAMINATION DEBUG] Reference heating system: Electricity
4011-Section13.js:3740 [S13 CONTAMINATION DEBUG] Target heating system: Heatpump
4011-Section13.js:3743 [S13 CONTAMINATION DEBUG] Reference h_115 (gas volume): 0
4011-Section13.js:3746 [S13 CONTAMINATION DEBUG] Reference f_115 (oil volume): 0
4011-Section13.js:3758 [S13 CONTAMINATION DEBUG] Writing ref_f_115 = 0
4011-Section13.js:3758 [S13 CONTAMINATION DEBUG] Writing ref_h_115 = 0
4011-Section13.js:3770 [Section13] Reference results stored with ref_ prefix for downstream sections
4011-Section13.js:3773 [S13 DEBUG] Total Reference results stored: 34
4011-Section13.js:3512 [Section13] Reference Model calculations complete
4011-Section13.js:3400 [Section13] ✅ Reference Model complete
4011-Section13.js:3402 [Section13] 🔄 Starting Target Model calculations...
4011-Section13.js:721 🔍 [S13-CONTEXT] Creating target context: g_118="Volume by Schedule" from TargetState
4011-Section13.js:725 🔍 [S13-CONTEXT] TargetState.g_118="Volume by Schedule", ReferenceState.g_118="Volume Constant"
4011-Section13.js:3533 [Section13] Running Target Model calculations...
4011-Section13.js:2870 [S13] TGT HEATING: system=Heatpump, ted=127565.6677259902, afue=0.98, cop=3.663540445486518
 🔍 [S13-VENT] calculateVentilationRates: ventMethod="Volume by Schedule", ach(l_118)=3, ratePerPerson(d_119)=14, volume(d_105)=8000
 🔍 [S13-VENT] isReferenceCalculation=false, hasContext=true
 🔍 [S13-VENT] calculateVentilationValues: ventMethod="Volume by Schedule", ach(l_118)=3, ratePerPerson(d_119)=14, volume(d_105)=8000
 🔍 [S13-VENT] Supporting values: occupants(d_63)=126, occupiedHours(i_63)=4380, totalHours(j_63)=8760
 ✅ [S13-VENT] Final d_120 result: 3333.333333333333 L/s (from method="Volume by Schedule", ach=3, volume=8000)
 [Section13] 🧊 COOLING CALC: mode=TGT, coolingSystemType="Cooling", heatingType="Heatpump", isCoolingActive=true, coolingDemand=10192.893604542265
 [Section13] 🧊 COOLING RESULTS: d_117=3826.8214105081656, j_116=2.663540445486518, l_116=0, l_114=6366.0721940341
2 [S14 LISTENER] 🔥 d_122 changed - triggering calculateAll() + UI update
 [S15] 🎯 TGT S03 CLIMATE READ: h_23=22, d_23=-26, d_24=30, h_24=24
 [StateManager] 🎯 h_10 setValue: "95.19732768567435" (state: calculated)
 [StateManager] h_10 setValue stack trace:
setValue @ 4011-StateManager.js:346
calculateValues @ 4011-Section15.js:1832
calculateTargetModel @ 4011-Section15.js:1662
calculateAll @ 4011-Section15.js:1328
(anonymous) @ 4011-Section15.js:2121
(anonymous) @ 4011-StateManager.js:543
notifyListeners @ 4011-StateManager.js:541
setValue @ 4011-StateManager.js:419
setFieldValue @ 4011-Section13.js:636
calculateCoolingVentilation @ 4011-Section13.js:3272
calculateCoolingSystem @ 4011-Section13.js:3040
calculateTargetModel @ 4011-Section13.js:3560
calculateAll @ 4011-Section13.js:3403
(anonymous) @ 4011-Section13.js:2819
(anonymous) @ 4011-StateManager.js:543
notifyListeners @ 4011-StateManager.js:541
setValue @ 4011-StateManager.js:419
(anonymous) @ 4011-Section03.js:1797
storeReferenceResults @ 4011-Section03.js:1795
calculateReferenceModel @ 4011-Section03.js:1761
calculateAll @ 4011-Section03.js:1692
(anonymous) @ 4011-Section03.js:2191
(anonymous) @ 4011-StateManager.js:543
notifyListeners @ 4011-StateManager.js:541
setValue @ 4011-StateManager.js:419
setValue @ 4011-Section09.js:191
(anonymous) @ 4011-Section09.js:2541
 [S15] 🎯 TGT S03 CLIMATE READ: h_23=22, d_23=-26, d_24=30, h_24=24
 [StateManager] 🎯 h_10 setValue: "95.19732768567435" (state: calculated)
 [StateManager] h_10 setValue stack trace:
setValue @ 4011-StateManager.js:346
calculateValues @ 4011-Section15.js:1832
calculateTargetModel @ 4011-Section15.js:1662
calculateAll @ 4011-Section15.js:1328
(anonymous) @ 4011-Section15.js:2121
(anonymous) @ 4011-StateManager.js:543
notifyListeners @ 4011-StateManager.js:541
setValue @ 4011-StateManager.js:419
setFieldValue @ 4011-Section13.js:636
calculateCoolingVentilation @ 4011-Section13.js:3272
calculateCoolingSystem @ 4011-Section13.js:3040
calculateTargetModel @ 4011-Section13.js:3560
calculateAll @ 4011-Section13.js:3403
(anonymous) @ 4011-Section13.js:2819
(anonymous) @ 4011-StateManager.js:543
notifyListeners @ 4011-StateManager.js:541
setValue @ 4011-StateManager.js:419
(anonymous) @ 4011-Section03.js:1797
storeReferenceResults @ 4011-Section03.js:1795
calculateReferenceModel @ 4011-Section03.js:1761
calculateAll @ 4011-Section03.js:1692
(anonymous) @ 4011-Section03.js:2191
(anonymous) @ 4011-StateManager.js:543
notifyListeners @ 4011-StateManager.js:541
setValue @ 4011-StateManager.js:419
setValue @ 4011-Section09.js:191
(anonymous) @ 4011-Section09.js:2541
2 [S14 LISTENER] 🔥 d_122 changed - triggering calculateAll() + UI update
 [S15] 🎯 TGT S03 CLIMATE READ: h_23=22, d_23=-26, d_24=30, h_24=24
 [StateManager] 🎯 h_10 setValue: "95.19732768567435" (state: calculated)
 [StateManager] h_10 setValue stack trace:
setValue @ 4011-StateManager.js:346
calculateValues @ 4011-Section15.js:1832
calculateTargetModel @ 4011-Section15.js:1662
calculateAll @ 4011-Section15.js:1328
(anonymous) @ 4011-Section15.js:2121
(anonymous) @ 4011-StateManager.js:543
notifyListeners @ 4011-StateManager.js:541
setValue @ 4011-StateManager.js:419
setFieldValue @ 4011-Section13.js:636
updateTargetModelDOMValues @ 4011-Section13.js:3684
calculateTargetModel @ 4011-Section13.js:3570
calculateAll @ 4011-Section13.js:3403
(anonymous) @ 4011-Section13.js:2819
(anonymous) @ 4011-StateManager.js:543
notifyListeners @ 4011-StateManager.js:541
setValue @ 4011-StateManager.js:419
(anonymous) @ 4011-Section03.js:1797
storeReferenceResults @ 4011-Section03.js:1795
calculateReferenceModel @ 4011-Section03.js:1761
calculateAll @ 4011-Section03.js:1692
(anonymous) @ 4011-Section03.js:2191
(anonymous) @ 4011-StateManager.js:543
notifyListeners @ 4011-StateManager.js:541
setValue @ 4011-StateManager.js:419
setValue @ 4011-Section09.js:191
(anonymous) @ 4011-Section09.js:2541
 [S15] 🎯 TGT S03 CLIMATE READ: h_23=22, d_23=-26, d_24=30, h_24=24
 [StateManager] 🎯 h_10 setValue: "95.19732768567435" (state: calculated)
 [StateManager] h_10 setValue stack trace:
setValue @ 4011-StateManager.js:346
calculateValues @ 4011-Section15.js:1832
calculateTargetModel @ 4011-Section15.js:1662
calculateAll @ 4011-Section15.js:1328
(anonymous) @ 4011-Section15.js:2121
(anonymous) @ 4011-StateManager.js:543
notifyListeners @ 4011-StateManager.js:541
setValue @ 4011-StateManager.js:419
setFieldValue @ 4011-Section13.js:636
updateTargetModelDOMValues @ 4011-Section13.js:3684
calculateTargetModel @ 4011-Section13.js:3570
calculateAll @ 4011-Section13.js:3403
(anonymous) @ 4011-Section13.js:2819
(anonymous) @ 4011-StateManager.js:543
notifyListeners @ 4011-StateManager.js:541
setValue @ 4011-StateManager.js:419
(anonymous) @ 4011-Section03.js:1797
storeReferenceResults @ 4011-Section03.js:1795
calculateReferenceModel @ 4011-Section03.js:1761
calculateAll @ 4011-Section03.js:1692
(anonymous) @ 4011-Section03.js:2191
(anonymous) @ 4011-StateManager.js:543
notifyListeners @ 4011-StateManager.js:541
setValue @ 4011-StateManager.js:419
setValue @ 4011-Section09.js:191
(anonymous) @ 4011-Section09.js:2541
 [Section13] Target Model calculations complete
 [Section13] ✅ Target Model complete
 [Section13] ⏭️ Skipping Reference value re-write - triggered in target mode
 [Section13] 🎉 DUAL-ENGINE CALCULATIONS COMPLETE
 [S03] Critical flag update: mode=target, occupancy="B3-Detention Care & Treatment", critical=true
 [S03] 🎯 Target occupancy changed: B3-Detention Care & Treatment
 [S03] 🎯 TGT MODE: Using occupancy "B3-Detention Care & Treatment" from d_12
 [S03] Getting climate data for: Alexandria, ON (Present) - Critical: true (target mode)
 [S03] TARGET TEMP SELECTION: January_1 = -26 (Critical: true)
 [S03] Climate values for Alexandria (target): {d_20: 4600, d_21: 196, j_19: '6.0', d_23: -26, d_24: 30, …}
 [CLOCK] 🎯 User interaction started - timing to h_10 settlement
 [CLOCK] 🎯 User interaction started - timing to h_10 settlement
 [CLOCK] 🎯 User interaction started - timing to h_10 settlement
 [CLOCK] 🎯 User interaction started - timing to h_10 settlement
 [CLOCK] 🎯 User interaction started - timing to h_10 settlement
 [CLOCK] 🎯 User interaction started - timing to h_10 settlement
 [CLOCK] 🎯 User interaction started - timing to h_10 settlement
 [CLOCK] 🎯 User interaction started - timing to h_10 settlement
 [CLOCK] 🎯 User interaction started - timing to h_10 settlement
 [S03] Critical flag update: mode=target, occupancy="B3-Detention Care & Treatment", critical=true
 [S03] 🔵 REF MODE: Using occupancy "A-Assembly" from ref_d_12
 [S03] Getting climate data for: Alexandria, ON (Present) - Critical: false (reference mode)
 [S03] REFERENCE TEMP SELECTION: January_2_5 = -24 (Critical: false)
 [S03] Climate values for Alexandria (reference): {d_20: 4600, d_21: 196, j_19: '6.0', d_23: -24, d_24: 30, …}
 [CLOCK] 🎯 User interaction started - timing to h_10 settlement
 [S15] 🎯 TGT S03 CLIMATE READ: h_23=22, d_23=-26, d_24=30, h_24=24
 [StateManager] 🎯 h_10 setValue: "95.19732768567435" (state: calculated)
 [StateManager] h_10 setValue stack trace:
setValue @ 4011-StateManager.js:346
calculateValues @ 4011-Section15.js:1832
calculateTargetModel @ 4011-Section15.js:1662
calculateAll @ 4011-Section15.js:1328
(anonymous) @ 4011-Section15.js:2121
(anonymous) @ 4011-StateManager.js:543
notifyListeners @ 4011-StateManager.js:541
setValue @ 4011-StateManager.js:419
setValue @ 4011-Section03.js:217
setFieldValue @ 4011-Section03.js:453
calculateHeatingSetpoint @ 4011-Section03.js:1836
calculateReferenceModel @ 4011-Section03.js:1751
calculateAll @ 4011-Section03.js:1692
(anonymous) @ 4011-Section03.js:2191
(anonymous) @ 4011-StateManager.js:543
notifyListeners @ 4011-StateManager.js:541
setValue @ 4011-StateManager.js:419
setValue @ 4011-Section09.js:191
(anonymous) @ 4011-Section09.js:2541
 [S15] 🎯 TGT S03 CLIMATE READ: h_23=22, d_23=-26, d_24=30, h_24=24
 [StateManager] 🎯 h_10 setValue: "95.19732768567435" (state: calculated)
 [StateManager] h_10 setValue stack trace:
setValue @ 4011-StateManager.js:346
calculateValues @ 4011-Section15.js:1832
calculateTargetModel @ 4011-Section15.js:1662
calculateAll @ 4011-Section15.js:1328
(anonymous) @ 4011-Section15.js:2121
(anonymous) @ 4011-StateManager.js:543
notifyListeners @ 4011-StateManager.js:541
setValue @ 4011-StateManager.js:419
setValue @ 4011-Section03.js:217
setFieldValue @ 4011-Section03.js:453
calculateHeatingSetpoint @ 4011-Section03.js:1836
calculateReferenceModel @ 4011-Section03.js:1751
calculateAll @ 4011-Section03.js:1692
(anonymous) @ 4011-Section03.js:2191
(anonymous) @ 4011-StateManager.js:543
notifyListeners @ 4011-StateManager.js:541
setValue @ 4011-StateManager.js:419
setValue @ 4011-Section09.js:191
(anonymous) @ 4011-Section09.js:2541
 [S15] 🎯 TGT S03 CLIMATE READ: h_23=22, d_23=-26, d_24=30, h_24=24
 [StateManager] 🎯 h_10 setValue: "95.19732768567435" (state: calculated)
 [StateManager] h_10 setValue stack trace:
setValue @ 4011-StateManager.js:346
calculateValues @ 4011-Section15.js:1832
calculateTargetModel @ 4011-Section15.js:1662
calculateAll @ 4011-Section15.js:1328
(anonymous) @ 4011-Section15.js:2121
(anonymous) @ 4011-StateManager.js:543
notifyListeners @ 4011-StateManager.js:541
setValue @ 4011-StateManager.js:419
setValue @ 4011-Section03.js:217
setFieldValue @ 4011-Section03.js:453
calculateHeatingSetpoint @ 4011-Section03.js:1836
calculateReferenceModel @ 4011-Section03.js:1751
calculateAll @ 4011-Section03.js:1692
(anonymous) @ 4011-Section03.js:2191
(anonymous) @ 4011-StateManager.js:543
notifyListeners @ 4011-StateManager.js:541
setValue @ 4011-StateManager.js:419
setValue @ 4011-Section09.js:191
(anonymous) @ 4011-Section09.js:2541
 [S15] 🎯 TGT S03 CLIMATE READ: h_23=22, d_23=-26, d_24=30, h_24=24
 [StateManager] 🎯 h_10 setValue: "95.19732768567435" (state: calculated)
 [StateManager] h_10 setValue stack trace:
setValue @ 4011-StateManager.js:346
calculateValues @ 4011-Section15.js:1832
calculateTargetModel @ 4011-Section15.js:1662
calculateAll @ 4011-Section15.js:1328
(anonymous) @ 4011-Section15.js:2121
(anonymous) @ 4011-StateManager.js:543
notifyListeners @ 4011-StateManager.js:541
setValue @ 4011-StateManager.js:419
setValue @ 4011-Section03.js:217
setFieldValue @ 4011-Section03.js:453
calculateHeatingSetpoint @ 4011-Section03.js:1836
calculateReferenceModel @ 4011-Section03.js:1751
calculateAll @ 4011-Section03.js:1692
(anonymous) @ 4011-Section03.js:2191
(anonymous) @ 4011-StateManager.js:543
notifyListeners @ 4011-StateManager.js:541
setValue @ 4011-StateManager.js:419
setValue @ 4011-Section09.js:191
(anonymous) @ 4011-Section09.js:2541
 [CLOCK] 🎯 User interaction started - timing to h_10 settlement
 [S15] 🎯 TGT S03 CLIMATE READ: h_23=22, d_23=-26, d_24=30, h_24=24
 [StateManager] 🎯 h_10 setValue: "95.19732768567435" (state: calculated)
 [StateManager] h_10 setValue stack trace:
setValue @ 4011-StateManager.js:346
calculateValues @ 4011-Section15.js:1832
calculateTargetModel @ 4011-Section15.js:1662
calculateAll @ 4011-Section15.js:1328
(anonymous) @ 4011-Section15.js:2121
(anonymous) @ 4011-StateManager.js:543
notifyListeners @ 4011-StateManager.js:541
setValue @ 4011-StateManager.js:419
setValue @ 4011-Section03.js:217
setFieldValue @ 4011-Section03.js:453
calculateCoolingSetpoint_h24 @ 4011-Section03.js:1848
calculateReferenceModel @ 4011-Section03.js:1752
calculateAll @ 4011-Section03.js:1692
(anonymous) @ 4011-Section03.js:2191
(anonymous) @ 4011-StateManager.js:543
notifyListeners @ 4011-StateManager.js:541
setValue @ 4011-StateManager.js:419
setValue @ 4011-Section09.js:191
(anonymous) @ 4011-Section09.js:2541
 [S15] 🎯 TGT S03 CLIMATE READ: h_23=22, d_23=-26, d_24=30, h_24=24
 [StateManager] 🎯 h_10 setValue: "95.19732768567435" (state: calculated)
 [StateManager] h_10 setValue stack trace:
setValue @ 4011-StateManager.js:346
calculateValues @ 4011-Section15.js:1832
calculateTargetModel @ 4011-Section15.js:1662
calculateAll @ 4011-Section15.js:1328
(anonymous) @ 4011-Section15.js:2121
(anonymous) @ 4011-StateManager.js:543
notifyListeners @ 4011-StateManager.js:541
setValue @ 4011-StateManager.js:419
setValue @ 4011-Section03.js:217
setFieldValue @ 4011-Section03.js:453
calculateCoolingSetpoint_h24 @ 4011-Section03.js:1848
calculateReferenceModel @ 4011-Section03.js:1752
calculateAll @ 4011-Section03.js:1692
(anonymous) @ 4011-Section03.js:2191
(anonymous) @ 4011-StateManager.js:543
notifyListeners @ 4011-StateManager.js:541
setValue @ 4011-StateManager.js:419
setValue @ 4011-Section09.js:191
(anonymous) @ 4011-Section09.js:2541
 [S15] 🎯 TGT S03 CLIMATE READ: h_23=22, d_23=-26, d_24=30, h_24=24
 [StateManager] 🎯 h_10 setValue: "95.19732768567435" (state: calculated)
 [StateManager] h_10 setValue stack trace:
setValue @ 4011-StateManager.js:346
calculateValues @ 4011-Section15.js:1832
calculateTargetModel @ 4011-Section15.js:1662
calculateAll @ 4011-Section15.js:1328
(anonymous) @ 4011-Section15.js:2121
(anonymous) @ 4011-StateManager.js:543
notifyListeners @ 4011-StateManager.js:541
setValue @ 4011-StateManager.js:419
setValue @ 4011-Section03.js:217
setFieldValue @ 4011-Section03.js:453
calculateCoolingSetpoint_h24 @ 4011-Section03.js:1848
calculateReferenceModel @ 4011-Section03.js:1752
calculateAll @ 4011-Section03.js:1692
(anonymous) @ 4011-Section03.js:2191
(anonymous) @ 4011-StateManager.js:543
notifyListeners @ 4011-StateManager.js:541
setValue @ 4011-StateManager.js:419
setValue @ 4011-Section09.js:191
(anonymous) @ 4011-Section09.js:2541
 [S15] 🎯 TGT S03 CLIMATE READ: h_23=22, d_23=-26, d_24=30, h_24=24
 [StateManager] 🎯 h_10 setValue: "95.19732768567435" (state: calculated)
 [StateManager] h_10 setValue stack trace:
setValue @ 4011-StateManager.js:346
calculateValues @ 4011-Section15.js:1832
calculateTargetModel @ 4011-Section15.js:1662
calculateAll @ 4011-Section15.js:1328
(anonymous) @ 4011-Section15.js:2121
(anonymous) @ 4011-StateManager.js:543
notifyListeners @ 4011-StateManager.js:541
setValue @ 4011-StateManager.js:419
setValue @ 4011-Section03.js:217
setFieldValue @ 4011-Section03.js:453
calculateCoolingSetpoint_h24 @ 4011-Section03.js:1848
calculateReferenceModel @ 4011-Section03.js:1752
calculateAll @ 4011-Section03.js:1692
(anonymous) @ 4011-Section03.js:2191
(anonymous) @ 4011-StateManager.js:543
notifyListeners @ 4011-StateManager.js:541
setValue @ 4011-StateManager.js:419
setValue @ 4011-Section09.js:191
(anonymous) @ 4011-Section09.js:2541
 [CLOCK] 🎯 User interaction started - timing to h_10 settlement
 [CLOCK] 🎯 User interaction started - timing to h_10 settlement
 [CLOCK] 🎯 User interaction started - timing to h_10 settlement
 [CLOCK] 🎯 User interaction started - timing to h_10 settlement
 [S11] calculateAll TRIGGERED. isReferenceMode: false
 [S11] 🔵 REF CLIMATE READ: d_20=4600
 [S11] 🔵 REF CLIMATE READ: d_21=196
 [S11] 🔵 REF CLIMATE READ: d_20=4600
 [S11] 🔵 REF CLIMATE READ: d_21=196
 [S11] 🔵 REF CLIMATE READ: d_20=4600
 [S11] 🔵 REF CLIMATE READ: d_21=196
 [S11] 🔵 REF CLIMATE READ: d_20=4600
 [S11] 🔵 REF CLIMATE READ: d_21=196
 [S11] 🔵 REF CLIMATE READ: d_20=4600
 [S11] 🔵 REF CLIMATE READ: d_21=196
 [S11] 🔵 REF CLIMATE READ: d_20=4600
 [S11] 🔵 REF CLIMATE READ: d_21=196
 [S11] 🔵 REF CLIMATE READ: d_20=4600
 [S11] 🔵 REF CLIMATE READ: d_21=196
 [S11] 🔵 REF CLIMATE READ: d_20=4600
 [S11] 🔵 REF CLIMATE READ: d_21=196
 [S11] 🔵 REF CLIMATE READ: d_20=4600
 [S11] 🔵 REF CLIMATE READ: d_21=196
 [S11] 🔵 REF CLIMATE READ: d_22=1960
 [S11] 🔵 REF CLIMATE READ: h_22=-1680
 [S11] 🔵 REF CLIMATE READ: d_22=1960
 [S11] 🔵 REF CLIMATE READ: h_22=-1680
 [S11] REF TB%=50% → ref_i_97=59532.29, ref_k_97=-947.70
 [S11] Writing ref penalty: ref_i_97=59532.29, ref_k_97=-947.70
 [S11] 🎯 TGT CLIMATE READ: d_20=4600
 [S11] 🎯 TGT CLIMATE READ: d_21=196
 [S11] 🎯 TGT CLIMATE READ: d_20=4600
 [S11] 🎯 TGT CLIMATE READ: d_21=196
 [S11] 🎯 TGT CLIMATE READ: d_20=4600
 [S11] 🎯 TGT CLIMATE READ: d_21=196
 [S11] 🎯 TGT CLIMATE READ: d_20=4600
 [S11] 🎯 TGT CLIMATE READ: d_21=196
 [S11] 🎯 TGT CLIMATE READ: d_20=4600
 [S11] 🎯 TGT CLIMATE READ: d_21=196
 [S11] 🎯 TGT CLIMATE READ: d_20=4600
 [S11] 🎯 TGT CLIMATE READ: d_21=196
 [S11] 🎯 TGT CLIMATE READ: d_20=4600
 [S11] 🎯 TGT CLIMATE READ: d_21=196
 [S11] 🎯 TGT CLIMATE READ: d_20=4600
 [S11] 🎯 TGT CLIMATE READ: d_21=196
 [S11] 🎯 TGT CLIMATE READ: d_20=4600
 [S11] 🎯 TGT CLIMATE READ: d_21=196
2 [S11] 🎯 TGT CLIMATE READ: h_22=-1680
 [S11] calculateAll TRIGGERED. isReferenceMode: false
 [S11] 🔵 REF CLIMATE READ: d_20=4600
 [S11] 🔵 REF CLIMATE READ: d_21=196
 [S11] 🔵 REF CLIMATE READ: d_20=4600
 [S11] 🔵 REF CLIMATE READ: d_21=196
 [S11] 🔵 REF CLIMATE READ: d_20=4600
 [S11] 🔵 REF CLIMATE READ: d_21=196
 [S11] 🔵 REF CLIMATE READ: d_20=4600
 [S11] 🔵 REF CLIMATE READ: d_21=196
 [S11] 🔵 REF CLIMATE READ: d_20=4600
 [S11] 🔵 REF CLIMATE READ: d_21=196
 [S11] 🔵 REF CLIMATE READ: d_20=4600
 [S11] 🔵 REF CLIMATE READ: d_21=196
 [S11] 🔵 REF CLIMATE READ: d_20=4600
 [S11] 🔵 REF CLIMATE READ: d_21=196
 [S11] 🔵 REF CLIMATE READ: d_20=4600
 [S11] 🔵 REF CLIMATE READ: d_21=196
 [S11] 🔵 REF CLIMATE READ: d_20=4600
 [S11] 🔵 REF CLIMATE READ: d_21=196
 [S11] 🔵 REF CLIMATE READ: d_22=1960
 [S11] 🔵 REF CLIMATE READ: h_22=-1680
 [S11] 🔵 REF CLIMATE READ: d_22=1960
 [S11] 🔵 REF CLIMATE READ: h_22=-1680
 [S11] REF TB%=50% → ref_i_97=59532.29, ref_k_97=-947.70
 [S11] Writing ref penalty: ref_i_97=59532.29, ref_k_97=-947.70
 [S11] 🎯 TGT CLIMATE READ: d_20=4600
 [S11] 🎯 TGT CLIMATE READ: d_21=196
 [S11] 🎯 TGT CLIMATE READ: d_20=4600
 [S11] 🎯 TGT CLIMATE READ: d_21=196
4011-Section11.js:1145 [S11] 🎯 TGT CLIMATE READ: d_20=4600
4011-Section11.js:1149 [S11] 🎯 TGT CLIMATE READ: d_21=196
4011-Section11.js:1145 [S11] 🎯 TGT CLIMATE READ: d_20=4600
4011-Section11.js:1149 [S11] 🎯 TGT CLIMATE READ: d_21=196
4011-Section11.js:1145 [S11] 🎯 TGT CLIMATE READ: d_20=4600
4011-Section11.js:1149 [S11] 🎯 TGT CLIMATE READ: d_21=196
4011-Section11.js:1145 [S11] 🎯 TGT CLIMATE READ: d_20=4600
4011-Section11.js:1149 [S11] 🎯 TGT CLIMATE READ: d_21=196
4011-Section11.js:1145 [S11] 🎯 TGT CLIMATE READ: d_20=4600
4011-Section11.js:1149 [S11] 🎯 TGT CLIMATE READ: d_21=196
4011-Section11.js:1145 [S11] 🎯 TGT CLIMATE READ: d_20=4600
4011-Section11.js:1149 [S11] 🎯 TGT CLIMATE READ: d_21=196
4011-Section11.js:1145 [S11] 🎯 TGT CLIMATE READ: d_20=4600
4011-Section11.js:1149 [S11] 🎯 TGT CLIMATE READ: d_21=196
24011-Section11.js:1189 [S11] 🎯 TGT CLIMATE READ: h_22=-1680
 [S13DEBUG] Reference GF HDD changed: ref_d_22=1960 → triggering Reference calculations
 [Section13] 🚀 CALCULATEALL TRIGGERED - Running dual-engine calculations...
 [Section13] 🎯 Mode captured at calculation start: target
 [Section13] 🔄 Starting Reference Model calculations...
 🔍 [S13-CONTEXT] Creating reference context: g_118="Volume Constant" from ReferenceState
 🔍 [S13-CONTEXT] ReferenceState.g_118="Volume Constant", TargetState.g_118="Volume by Schedule"
 [Section13] Running Reference Model calculations...
 [S13 CONTAMINATION DEBUG] calculateReferenceModel: Using system type = Electricity
 [S13] REF HEATING: system=Electricity, ted=251391.1974742337, afue=0.9, cop=1
 [S13 REF DEBUG] About to calculate with heating system: Electricity
 [S13 REF DEBUG] Will S13 publish ref_d_113=Electricity?
 🔍 [S13-VENT] calculateVentilationRates: ventMethod="Volume Constant", ach(l_118)=3.5, ratePerPerson(d_119)=8.33, volume(d_105)=8000
 🔍 [S13-VENT] isReferenceCalculation=true, hasContext=true
 🔍 [S13-VENT] calculateVentilationValues: ventMethod="Volume Constant", ach(l_118)=3.5, ratePerPerson(d_119)=8.33, volume(d_105)=8000
 🔍 [S13-VENT] Supporting values: occupants(d_63)=126, occupiedHours(i_63)=4380, totalHours(j_63)=8760
 🔍 [S13-VENT] Volume Constant calculation: ventRateLs = (3.5 * 8000) / 3.6 = 7777.777777777777
 ✅ [S13-VENT] Final d_120 result: 7777.777777777777 L/s (from method="Volume Constant", ach=3.5, volume=8000)
 [Section13] 🧊 COOLING CALC: mode=REF, coolingSystemType="No Cooling", heatingType="Electricity", isCoolingActive=false, coolingDemand=10192.893604542265
 [S13 CONTAMINATION DEBUG] storeReferenceResults called during reference mode
 [S13 CONTAMINATION DEBUG] Reference heating system: Electricity
 [S13 CONTAMINATION DEBUG] Target heating system: Heatpump
 [S13 CONTAMINATION DEBUG] Reference h_115 (gas volume): 0
 [S13 CONTAMINATION DEBUG] Reference f_115 (oil volume): 0
 [S13 CONTAMINATION DEBUG] Writing ref_f_115 = 0
 [S13 CONTAMINATION DEBUG] Writing ref_h_115 = 0
 [Section13] Reference results stored with ref_ prefix for downstream sections
 [S13 DEBUG] Total Reference results stored: 34
 [Section13] Reference Model calculations complete
 [Section13] ✅ Reference Model complete
 [Section13] 🔄 Starting Target Model calculations...
 🔍 [S13-CONTEXT] Creating target context: g_118="Volume by Schedule" from TargetState
 🔍 [S13-CONTEXT] TargetState.g_118="Volume by Schedule", ReferenceState.g_118="Volume Constant"
 [Section13] Running Target Model calculations...
 [S13] TGT HEATING: system=Heatpump, ted=127565.6677259902, afue=0.98, cop=3.663540445486518
 🔍 [S13-VENT] calculateVentilationRates: ventMethod="Volume by Schedule", ach(l_118)=3, ratePerPerson(d_119)=14, volume(d_105)=8000
 🔍 [S13-VENT] isReferenceCalculation=false, hasContext=true
 🔍 [S13-VENT] calculateVentilationValues: ventMethod="Volume by Schedule", ach(l_118)=3, ratePerPerson(d_119)=14, volume(d_105)=8000
 🔍 [S13-VENT] Supporting values: occupants(d_63)=126, occupiedHours(i_63)=4380, totalHours(j_63)=8760
 ✅ [S13-VENT] Final d_120 result: 3333.333333333333 L/s (from method="Volume by Schedule", ach=3, volume=8000)
 [Section13] 🧊 COOLING CALC: mode=TGT, coolingSystemType="Cooling", heatingType="Heatpump", isCoolingActive=true, coolingDemand=10192.893604542265
 [Section13] 🧊 COOLING RESULTS: d_117=3826.8214105081656, j_116=2.663540445486518, l_116=0, l_114=6366.0721940341
2 [S14 LISTENER] 🔥 d_122 changed - triggering calculateAll() + UI update
 [S15] 🎯 TGT S03 CLIMATE READ: h_23=22, d_23=-26, d_24=30, h_24=24
 [StateManager] 🎯 h_10 setValue: "95.19732768567435" (state: calculated)
 [StateManager] h_10 setValue stack trace:
setValue @ 4011-StateManager.js:346
calculateValues @ 4011-Section15.js:1832
calculateTargetModel @ 4011-Section15.js:1662
calculateAll @ 4011-Section15.js:1328
(anonymous) @ 4011-Section15.js:2121
(anonymous) @ 4011-StateManager.js:543
notifyListeners @ 4011-StateManager.js:541
setValue @ 4011-StateManager.js:419
setFieldValue @ 4011-Section13.js:636
calculateCoolingVentilation @ 4011-Section13.js:3272
calculateCoolingSystem @ 4011-Section13.js:3040
calculateTargetModel @ 4011-Section13.js:3560
calculateAll @ 4011-Section13.js:3403
(anonymous) @ 4011-Section13.js:2813
(anonymous) @ 4011-StateManager.js:543
notifyListeners @ 4011-StateManager.js:541
setValue @ 4011-StateManager.js:419
setValue @ 4011-Section03.js:217
setFieldValue @ 4011-Section03.js:453
calculateGroundFacing @ 4011-Section03.js:1663
calculateReferenceModel @ 4011-Section03.js:1754
calculateAll @ 4011-Section03.js:1692
(anonymous) @ 4011-Section03.js:2191
(anonymous) @ 4011-StateManager.js:543
notifyListeners @ 4011-StateManager.js:541
setValue @ 4011-StateManager.js:419
setValue @ 4011-Section09.js:191
(anonymous) @ 4011-Section09.js:2541
 [S15] 🎯 TGT S03 CLIMATE READ: h_23=22, d_23=-26, d_24=30, h_24=24
 [StateManager] 🎯 h_10 setValue: "95.19732768567435" (state: calculated)
 [StateManager] h_10 setValue stack trace:
setValue @ 4011-StateManager.js:346
calculateValues @ 4011-Section15.js:1832
calculateTargetModel @ 4011-Section15.js:1662
calculateAll @ 4011-Section15.js:1328
(anonymous) @ 4011-Section15.js:2121
(anonymous) @ 4011-StateManager.js:543
notifyListeners @ 4011-StateManager.js:541
setValue @ 4011-StateManager.js:419
setFieldValue @ 4011-Section13.js:636
calculateCoolingVentilation @ 4011-Section13.js:3272
calculateCoolingSystem @ 4011-Section13.js:3040
calculateTargetModel @ 4011-Section13.js:3560
calculateAll @ 4011-Section13.js:3403
(anonymous) @ 4011-Section13.js:2813
(anonymous) @ 4011-StateManager.js:543
notifyListeners @ 4011-StateManager.js:541
setValue @ 4011-StateManager.js:419
setValue @ 4011-Section03.js:217
setFieldValue @ 4011-Section03.js:453
calculateGroundFacing @ 4011-Section03.js:1663
calculateReferenceModel @ 4011-Section03.js:1754
calculateAll @ 4011-Section03.js:1692
(anonymous) @ 4011-Section03.js:2191
(anonymous) @ 4011-StateManager.js:543
notifyListeners @ 4011-StateManager.js:541
setValue @ 4011-StateManager.js:419
setValue @ 4011-Section09.js:191
(anonymous) @ 4011-Section09.js:2541
2 [S14 LISTENER] 🔥 d_122 changed - triggering calculateAll() + UI update
 [S15] 🎯 TGT S03 CLIMATE READ: h_23=22, d_23=-26, d_24=30, h_24=24
 [StateManager] 🎯 h_10 setValue: "95.19732768567435" (state: calculated)
 [StateManager] h_10 setValue stack trace:
setValue @ 4011-StateManager.js:346
calculateValues @ 4011-Section15.js:1832
calculateTargetModel @ 4011-Section15.js:1662
calculateAll @ 4011-Section15.js:1328
(anonymous) @ 4011-Section15.js:2121
(anonymous) @ 4011-StateManager.js:543
notifyListeners @ 4011-StateManager.js:541
setValue @ 4011-StateManager.js:419
setFieldValue @ 4011-Section13.js:636
updateTargetModelDOMValues @ 4011-Section13.js:3684
calculateTargetModel @ 4011-Section13.js:3570
calculateAll @ 4011-Section13.js:3403
(anonymous) @ 4011-Section13.js:2813
(anonymous) @ 4011-StateManager.js:543
notifyListeners @ 4011-StateManager.js:541
setValue @ 4011-StateManager.js:419
setValue @ 4011-Section03.js:217
setFieldValue @ 4011-Section03.js:453
calculateGroundFacing @ 4011-Section03.js:1663
calculateReferenceModel @ 4011-Section03.js:1754
calculateAll @ 4011-Section03.js:1692
(anonymous) @ 4011-Section03.js:2191
(anonymous) @ 4011-StateManager.js:543
notifyListeners @ 4011-StateManager.js:541
setValue @ 4011-StateManager.js:419
setValue @ 4011-Section09.js:191
(anonymous) @ 4011-Section09.js:2541
 [S15] 🎯 TGT S03 CLIMATE READ: h_23=22, d_23=-26, d_24=30, h_24=24
 [StateManager] 🎯 h_10 setValue: "95.19732768567435" (state: calculated)
 [StateManager] h_10 setValue stack trace:
setValue @ 4011-StateManager.js:346
calculateValues @ 4011-Section15.js:1832
calculateTargetModel @ 4011-Section15.js:1662
calculateAll @ 4011-Section15.js:1328
(anonymous) @ 4011-Section15.js:2121
(anonymous) @ 4011-StateManager.js:543
notifyListeners @ 4011-StateManager.js:541
setValue @ 4011-StateManager.js:419
setFieldValue @ 4011-Section13.js:636
updateTargetModelDOMValues @ 4011-Section13.js:3684
calculateTargetModel @ 4011-Section13.js:3570
calculateAll @ 4011-Section13.js:3403
(anonymous) @ 4011-Section13.js:2813
(anonymous) @ 4011-StateManager.js:543
notifyListeners @ 4011-StateManager.js:541
setValue @ 4011-StateManager.js:419
setValue @ 4011-Section03.js:217
setFieldValue @ 4011-Section03.js:453
calculateGroundFacing @ 4011-Section03.js:1663
calculateReferenceModel @ 4011-Section03.js:1754
calculateAll @ 4011-Section03.js:1692
(anonymous) @ 4011-Section03.js:2191
(anonymous) @ 4011-StateManager.js:543
notifyListeners @ 4011-StateManager.js:541
setValue @ 4011-StateManager.js:419
setValue @ 4011-Section09.js:191
(anonymous) @ 4011-Section09.js:2541
 [Section13] Target Model calculations complete
 [Section13] ✅ Target Model complete
 [Section13] ⏭️ Skipping Reference value re-write - triggered in target mode
 [Section13] 🎉 DUAL-ENGINE CALCULATIONS COMPLETE
 [CLOCK] 🎯 User interaction started - timing to h_10 settlement
 [S11] calculateAll TRIGGERED. isReferenceMode: false
 [S11] 🔵 REF CLIMATE READ: d_20=4600
 [S11] 🔵 REF CLIMATE READ: d_21=196
 [S11] 🔵 REF CLIMATE READ: d_20=4600
 [S11] 🔵 REF CLIMATE READ: d_21=196
 [S11] 🔵 REF CLIMATE READ: d_20=4600
 [S11] 🔵 REF CLIMATE READ: d_21=196
 [S11] 🔵 REF CLIMATE READ: d_20=4600
 [S11] 🔵 REF CLIMATE READ: d_21=196
 [S11] 🔵 REF CLIMATE READ: d_20=4600
 [S11] 🔵 REF CLIMATE READ: d_21=196
 [S11] 🔵 REF CLIMATE READ: d_20=4600
 [S11] 🔵 REF CLIMATE READ: d_21=196
 [S11] 🔵 REF CLIMATE READ: d_20=4600
 [S11] 🔵 REF CLIMATE READ: d_21=196
 [S11] 🔵 REF CLIMATE READ: d_20=4600
 [S11] 🔵 REF CLIMATE READ: d_21=196
 [S11] 🔵 REF CLIMATE READ: d_20=4600
 [S11] 🔵 REF CLIMATE READ: d_21=196
 [S11] 🔵 REF CLIMATE READ: d_22=1960
 [S11] 🔵 REF CLIMATE READ: h_22=-1680
 [S11] 🔵 REF CLIMATE READ: d_22=1960
 [S11] 🔵 REF CLIMATE READ: h_22=-1680
 [S11] REF TB%=50% → ref_i_97=59532.29, ref_k_97=-947.70
 [S11] Writing ref penalty: ref_i_97=59532.29, ref_k_97=-947.70
 [S11] 🎯 TGT CLIMATE READ: d_20=4600
 [S11] 🎯 TGT CLIMATE READ: d_21=196
 [S11] 🎯 TGT CLIMATE READ: d_20=4600
 [S11] 🎯 TGT CLIMATE READ: d_21=196
 [S11] 🎯 TGT CLIMATE READ: d_20=4600
 [S11] 🎯 TGT CLIMATE READ: d_21=196
 [S11] 🎯 TGT CLIMATE READ: d_20=4600
 [S11] 🎯 TGT CLIMATE READ: d_21=196
 [S11] 🎯 TGT CLIMATE READ: d_20=4600
 [S11] 🎯 TGT CLIMATE READ: d_21=196
 [S11] 🎯 TGT CLIMATE READ: d_20=4600
 [S11] 🎯 TGT CLIMATE READ: d_21=196
 [S11] 🎯 TGT CLIMATE READ: d_20=4600
 [S11] 🎯 TGT CLIMATE READ: d_21=196
 [S11] 🎯 TGT CLIMATE READ: d_20=4600
 [S11] 🎯 TGT CLIMATE READ: d_21=196
 [S11] 🎯 TGT CLIMATE READ: d_20=4600
 [S11] 🎯 TGT CLIMATE READ: d_21=196
2 [S11] 🎯 TGT CLIMATE READ: h_22=-1680
 [S11] calculateAll TRIGGERED. isReferenceMode: false
 [S11] 🔵 REF CLIMATE READ: d_20=4600
 [S11] 🔵 REF CLIMATE READ: d_21=196
 [S11] 🔵 REF CLIMATE READ: d_20=4600
 [S11] 🔵 REF CLIMATE READ: d_21=196
 [S11] 🔵 REF CLIMATE READ: d_20=4600
 [S11] 🔵 REF CLIMATE READ: d_21=196
 [S11] 🔵 REF CLIMATE READ: d_20=4600
 [S11] 🔵 REF CLIMATE READ: d_21=196
 [S11] 🔵 REF CLIMATE READ: d_20=4600
 [S11] 🔵 REF CLIMATE READ: d_21=196
 [S11] 🔵 REF CLIMATE READ: d_20=4600
 [S11] 🔵 REF CLIMATE READ: d_21=196
 [S11] 🔵 REF CLIMATE READ: d_20=4600
 [S11] 🔵 REF CLIMATE READ: d_21=196
 [S11] 🔵 REF CLIMATE READ: d_20=4600
 [S11] 🔵 REF CLIMATE READ: d_21=196
 [S11] 🔵 REF CLIMATE READ: d_20=4600
 [S11] 🔵 REF CLIMATE READ: d_21=196
 [S11] 🔵 REF CLIMATE READ: d_22=1960
 [S11] 🔵 REF CLIMATE READ: h_22=-1680
 [S11] 🔵 REF CLIMATE READ: d_22=1960
 [S11] 🔵 REF CLIMATE READ: h_22=-1680
 [S11] REF TB%=50% → ref_i_97=59532.29, ref_k_97=-947.70
 [S11] Writing ref penalty: ref_i_97=59532.29, ref_k_97=-947.70
 [S11] 🎯 TGT CLIMATE READ: d_20=4600
 [S11] 🎯 TGT CLIMATE READ: d_21=196
 [S11] 🎯 TGT CLIMATE READ: d_20=4600
 [S11] 🎯 TGT CLIMATE READ: d_21=196
 [S11] 🎯 TGT CLIMATE READ: d_20=4600
4011-Section11.js:1149 [S11] 🎯 TGT CLIMATE READ: d_21=196
4011-Section11.js:1145 [S11] 🎯 TGT CLIMATE READ: d_20=4600
4011-Section11.js:1149 [S11] 🎯 TGT CLIMATE READ: d_21=196
4011-Section11.js:1145 [S11] 🎯 TGT CLIMATE READ: d_20=4600
4011-Section11.js:1149 [S11] 🎯 TGT CLIMATE READ: d_21=196
4011-Section11.js:1145 [S11] 🎯 TGT CLIMATE READ: d_20=4600
4011-Section11.js:1149 [S11] 🎯 TGT CLIMATE READ: d_21=196
4011-Section11.js:1145 [S11] 🎯 TGT CLIMATE READ: d_20=4600
4011-Section11.js:1149 [S11] 🎯 TGT CLIMATE READ: d_21=196
4011-Section11.js:1145 [S11] 🎯 TGT CLIMATE READ: d_20=4600
4011-Section11.js:1149 [S11] 🎯 TGT CLIMATE READ: d_21=196
4011-Section11.js:1145 [S11] 🎯 TGT CLIMATE READ: d_20=4600
4011-Section11.js:1149 [S11] 🎯 TGT CLIMATE READ: d_21=196
24011-Section11.js:1189 [S11] 🎯 TGT CLIMATE READ: h_22=-1680
4011-Section13.js:2816 [S13DEBUG] Reference GF CDD changed: ref_h_22=-1680 → triggering Reference calculations
 [Section13] 🚀 CALCULATEALL TRIGGERED - Running dual-engine calculations...
 [Section13] 🎯 Mode captured at calculation start: target
 [Section13] 🔄 Starting Reference Model calculations...
 🔍 [S13-CONTEXT] Creating reference context: g_118="Volume Constant" from ReferenceState
 🔍 [S13-CONTEXT] ReferenceState.g_118="Volume Constant", TargetState.g_118="Volume by Schedule"
 [Section13] Running Reference Model calculations...
 [S13 CONTAMINATION DEBUG] calculateReferenceModel: Using system type = Electricity
 [S13] REF HEATING: system=Electricity, ted=251391.1974742337, afue=0.9, cop=1
 [S13 REF DEBUG] About to calculate with heating system: Electricity
 [S13 REF DEBUG] Will S13 publish ref_d_113=Electricity?
 🔍 [S13-VENT] calculateVentilationRates: ventMethod="Volume Constant", ach(l_118)=3.5, ratePerPerson(d_119)=8.33, volume(d_105)=8000
 🔍 [S13-VENT] isReferenceCalculation=true, hasContext=true
 🔍 [S13-VENT] calculateVentilationValues: ventMethod="Volume Constant", ach(l_118)=3.5, ratePerPerson(d_119)=8.33, volume(d_105)=8000
 🔍 [S13-VENT] Supporting values: occupants(d_63)=126, occupiedHours(i_63)=4380, totalHours(j_63)=8760
 🔍 [S13-VENT] Volume Constant calculation: ventRateLs = (3.5 * 8000) / 3.6 = 7777.777777777777
 ✅ [S13-VENT] Final d_120 result: 7777.777777777777 L/s (from method="Volume Constant", ach=3.5, volume=8000)
 [Section13] 🧊 COOLING CALC: mode=REF, coolingSystemType="No Cooling", heatingType="Electricity", isCoolingActive=false, coolingDemand=10192.893604542265
 [S13 CONTAMINATION DEBUG] storeReferenceResults called during reference mode
 [S13 CONTAMINATION DEBUG] Reference heating system: Electricity
 [S13 CONTAMINATION DEBUG] Target heating system: Heatpump
 [S13 CONTAMINATION DEBUG] Reference h_115 (gas volume): 0
 [S13 CONTAMINATION DEBUG] Reference f_115 (oil volume): 0
 [S13 CONTAMINATION DEBUG] Writing ref_f_115 = 0
 [S13 CONTAMINATION DEBUG] Writing ref_h_115 = 0
 [Section13] Reference results stored with ref_ prefix for downstream sections
 [S13 DEBUG] Total Reference results stored: 34
4011-Section13.js:3512 [Section13] Reference Model calculations complete
4011-Section13.js:3400 [Section13] ✅ Reference Model complete
4011-Section13.js:3402 [Section13] 🔄 Starting Target Model calculations...
4011-Section13.js:721 🔍 [S13-CONTEXT] Creating target context: g_118="Volume by Schedule" from TargetState
4011-Section13.js:725 🔍 [S13-CONTEXT] TargetState.g_118="Volume by Schedule", ReferenceState.g_118="Volume Constant"
4011-Section13.js:3533 [Section13] Running Target Model calculations...
4011-Section13.js:2870 [S13] TGT HEATING: system=Heatpump, ted=127565.6677259902, afue=0.98, cop=3.663540445486518
4011-Section13.js:3096 🔍 [S13-VENT] calculateVentilationRates: ventMethod="Volume by Schedule", ach(l_118)=3, ratePerPerson(d_119)=14, volume(d_105)=8000
4011-Section13.js:3099 🔍 [S13-VENT] isReferenceCalculation=false, hasContext=true
4011-Section13.js:3107 🔍 [S13-VENT] calculateVentilationValues: ventMethod="Volume by Schedule", ach(l_118)=3, ratePerPerson(d_119)=14, volume(d_105)=8000
4011-Section13.js:3110 🔍 [S13-VENT] Supporting values: occupants(d_63)=126, occupiedHours(i_63)=4380, totalHours(j_63)=8760
4011-Section13.js:3142 ✅ [S13-VENT] Final d_120 result: 3333.333333333333 L/s (from method="Volume by Schedule", ach=3, volume=8000)
4011-Section13.js:2974 [Section13] 🧊 COOLING CALC: mode=TGT, coolingSystemType="Cooling", heatingType="Heatpump", isCoolingActive=true, coolingDemand=10192.893604542265
4011-Section13.js:3036 [Section13] 🧊 COOLING RESULTS: d_117=3826.8214105081656, j_116=2.663540445486518, l_116=0, l_114=6366.0721940341
24011-Section14.js:1416 [S14 LISTENER] 🔥 d_122 changed - triggering calculateAll() + UI update
 [S15] 🎯 TGT S03 CLIMATE READ: h_23=22, d_23=-26, d_24=30, h_24=24
 [StateManager] 🎯 h_10 setValue: "95.19732768567435" (state: calculated)
 [StateManager] h_10 setValue stack trace:
setValue @ 4011-StateManager.js:346
calculateValues @ 4011-Section15.js:1832
calculateTargetModel @ 4011-Section15.js:1662
calculateAll @ 4011-Section15.js:1328
(anonymous) @ 4011-Section15.js:2121
(anonymous) @ 4011-StateManager.js:543
notifyListeners @ 4011-StateManager.js:541
setValue @ 4011-StateManager.js:419
setFieldValue @ 4011-Section13.js:636
calculateCoolingVentilation @ 4011-Section13.js:3272
calculateCoolingSystem @ 4011-Section13.js:3040
calculateTargetModel @ 4011-Section13.js:3560
calculateAll @ 4011-Section13.js:3403
(anonymous) @ 4011-Section13.js:2819
(anonymous) @ 4011-StateManager.js:543
notifyListeners @ 4011-StateManager.js:541
setValue @ 4011-StateManager.js:419
setValue @ 4011-Section03.js:217
setFieldValue @ 4011-Section03.js:453
calculateGroundFacing @ 4011-Section03.js:1682
calculateReferenceModel @ 4011-Section03.js:1754
calculateAll @ 4011-Section03.js:1692
(anonymous) @ 4011-Section03.js:2191
(anonymous) @ 4011-StateManager.js:543
notifyListeners @ 4011-StateManager.js:541
setValue @ 4011-StateManager.js:419
setValue @ 4011-Section09.js:191
(anonymous) @ 4011-Section09.js:2541
 [S15] 🎯 TGT S03 CLIMATE READ: h_23=22, d_23=-26, d_24=30, h_24=24
 [StateManager] 🎯 h_10 setValue: "95.19732768567435" (state: calculated)
 [StateManager] h_10 setValue stack trace:
setValue @ 4011-StateManager.js:346
calculateValues @ 4011-Section15.js:1832
calculateTargetModel @ 4011-Section15.js:1662
calculateAll @ 4011-Section15.js:1328
(anonymous) @ 4011-Section15.js:2121
(anonymous) @ 4011-StateManager.js:543
notifyListeners @ 4011-StateManager.js:541
setValue @ 4011-StateManager.js:419
setFieldValue @ 4011-Section13.js:636
calculateCoolingVentilation @ 4011-Section13.js:3272
calculateCoolingSystem @ 4011-Section13.js:3040
calculateTargetModel @ 4011-Section13.js:3560
calculateAll @ 4011-Section13.js:3403
(anonymous) @ 4011-Section13.js:2819
(anonymous) @ 4011-StateManager.js:543
notifyListeners @ 4011-StateManager.js:541
setValue @ 4011-StateManager.js:419
setValue @ 4011-Section03.js:217
setFieldValue @ 4011-Section03.js:453
calculateGroundFacing @ 4011-Section03.js:1682
calculateReferenceModel @ 4011-Section03.js:1754
calculateAll @ 4011-Section03.js:1692
(anonymous) @ 4011-Section03.js:2191
(anonymous) @ 4011-StateManager.js:543
notifyListeners @ 4011-StateManager.js:541
setValue @ 4011-StateManager.js:419
setValue @ 4011-Section09.js:191
(anonymous) @ 4011-Section09.js:2541
2 [S14 LISTENER] 🔥 d_122 changed - triggering calculateAll() + UI update
 [S15] 🎯 TGT S03 CLIMATE READ: h_23=22, d_23=-26, d_24=30, h_24=24
 [StateManager] 🎯 h_10 setValue: "95.19732768567435" (state: calculated)
 [StateManager] h_10 setValue stack trace:
setValue @ 4011-StateManager.js:346
calculateValues @ 4011-Section15.js:1832
calculateTargetModel @ 4011-Section15.js:1662
calculateAll @ 4011-Section15.js:1328
(anonymous) @ 4011-Section15.js:2121
(anonymous) @ 4011-StateManager.js:543
notifyListeners @ 4011-StateManager.js:541
setValue @ 4011-StateManager.js:419
setFieldValue @ 4011-Section13.js:636
updateTargetModelDOMValues @ 4011-Section13.js:3684
calculateTargetModel @ 4011-Section13.js:3570
calculateAll @ 4011-Section13.js:3403
(anonymous) @ 4011-Section13.js:2819
(anonymous) @ 4011-StateManager.js:543
notifyListeners @ 4011-StateManager.js:541
setValue @ 4011-StateManager.js:419
setValue @ 4011-Section03.js:217
setFieldValue @ 4011-Section03.js:453
calculateGroundFacing @ 4011-Section03.js:1682
calculateReferenceModel @ 4011-Section03.js:1754
calculateAll @ 4011-Section03.js:1692
(anonymous) @ 4011-Section03.js:2191
(anonymous) @ 4011-StateManager.js:543
notifyListeners @ 4011-StateManager.js:541
setValue @ 4011-StateManager.js:419
setValue @ 4011-Section09.js:191
(anonymous) @ 4011-Section09.js:2541
 [S15] 🎯 TGT S03 CLIMATE READ: h_23=22, d_23=-26, d_24=30, h_24=24
 [StateManager] 🎯 h_10 setValue: "95.19732768567435" (state: calculated)
 [StateManager] h_10 setValue stack trace:
setValue @ 4011-StateManager.js:346
calculateValues @ 4011-Section15.js:1832
calculateTargetModel @ 4011-Section15.js:1662
calculateAll @ 4011-Section15.js:1328
(anonymous) @ 4011-Section15.js:2121
(anonymous) @ 4011-StateManager.js:543
notifyListeners @ 4011-StateManager.js:541
setValue @ 4011-StateManager.js:419
setFieldValue @ 4011-Section13.js:636
updateTargetModelDOMValues @ 4011-Section13.js:3684
calculateTargetModel @ 4011-Section13.js:3570
calculateAll @ 4011-Section13.js:3403
(anonymous) @ 4011-Section13.js:2819
(anonymous) @ 4011-StateManager.js:543
notifyListeners @ 4011-StateManager.js:541
setValue @ 4011-StateManager.js:419
setValue @ 4011-Section03.js:217
setFieldValue @ 4011-Section03.js:453
calculateGroundFacing @ 4011-Section03.js:1682
calculateReferenceModel @ 4011-Section03.js:1754
calculateAll @ 4011-Section03.js:1692
(anonymous) @ 4011-Section03.js:2191
(anonymous) @ 4011-StateManager.js:543
notifyListeners @ 4011-StateManager.js:541
setValue @ 4011-StateManager.js:419
setValue @ 4011-Section09.js:191
(anonymous) @ 4011-Section09.js:2541
 [Section13] Target Model calculations complete
 [Section13] ✅ Target Model complete
 [Section13] ⏭️ Skipping Reference value re-write - triggered in target mode
 [Section13] 🎉 DUAL-ENGINE CALCULATIONS COMPLETE
 [CLOCK] 🎯 User interaction started - timing to h_10 settlement
 [CLOCK] 🎯 User interaction started - timing to h_10 settlement
 [S15] 🎯 TGT S03 CLIMATE READ: h_23=22, d_23=-26, d_24=30, h_24=24
 [StateManager] 🎯 h_10 setValue: "95.19732768567435" (state: calculated)
 [StateManager] h_10 setValue stack trace:
setValue @ 4011-StateManager.js:346
calculateValues @ 4011-Section15.js:1832
calculateTargetModel @ 4011-Section15.js:1662
calculateAll @ 4011-Section15.js:1328
(anonymous) @ 4011-Section15.js:2121
(anonymous) @ 4011-StateManager.js:543
notifyListeners @ 4011-StateManager.js:541
setValue @ 4011-StateManager.js:419
(anonymous) @ 4011-Section03.js:1797
storeReferenceResults @ 4011-Section03.js:1795
calculateReferenceModel @ 4011-Section03.js:1761
calculateAll @ 4011-Section03.js:1692
(anonymous) @ 4011-Section03.js:2191
(anonymous) @ 4011-StateManager.js:543
notifyListeners @ 4011-StateManager.js:541
setValue @ 4011-StateManager.js:419
setValue @ 4011-Section09.js:191
(anonymous) @ 4011-Section09.js:2541
 [S15] 🎯 TGT S03 CLIMATE READ: h_23=22, d_23=-26, d_24=30, h_24=24
 [StateManager] 🎯 h_10 setValue: "95.19732768567435" (state: calculated)
 [StateManager] h_10 setValue stack trace:
setValue @ 4011-StateManager.js:346
calculateValues @ 4011-Section15.js:1832
calculateTargetModel @ 4011-Section15.js:1662
calculateAll @ 4011-Section15.js:1328
(anonymous) @ 4011-Section15.js:2121
(anonymous) @ 4011-StateManager.js:543
notifyListeners @ 4011-StateManager.js:541
setValue @ 4011-StateManager.js:419
(anonymous) @ 4011-Section03.js:1797
storeReferenceResults @ 4011-Section03.js:1795
calculateReferenceModel @ 4011-Section03.js:1761
calculateAll @ 4011-Section03.js:1692
(anonymous) @ 4011-Section03.js:2191
(anonymous) @ 4011-StateManager.js:543
notifyListeners @ 4011-StateManager.js:541
setValue @ 4011-StateManager.js:419
setValue @ 4011-Section09.js:191
(anonymous) @ 4011-Section09.js:2541
 [S15] 🎯 TGT S03 CLIMATE READ: h_23=22, d_23=-26, d_24=30, h_24=24
 [StateManager] 🎯 h_10 setValue: "95.19732768567435" (state: calculated)
 [StateManager] h_10 setValue stack trace:
setValue @ 4011-StateManager.js:346
calculateValues @ 4011-Section15.js:1832
calculateTargetModel @ 4011-Section15.js:1662
calculateAll @ 4011-Section15.js:1328
(anonymous) @ 4011-Section15.js:2121
(anonymous) @ 4011-StateManager.js:543
notifyListeners @ 4011-StateManager.js:541
setValue @ 4011-StateManager.js:419
(anonymous) @ 4011-Section03.js:1797
storeReferenceResults @ 4011-Section03.js:1795
calculateReferenceModel @ 4011-Section03.js:1761
calculateAll @ 4011-Section03.js:1692
(anonymous) @ 4011-Section03.js:2191
(anonymous) @ 4011-StateManager.js:543
notifyListeners @ 4011-StateManager.js:541
setValue @ 4011-StateManager.js:419
setValue @ 4011-Section09.js:191
(anonymous) @ 4011-Section09.js:2541
 [S15] 🎯 TGT S03 CLIMATE READ: h_23=22, d_23=-26, d_24=30, h_24=24
 [StateManager] 🎯 h_10 setValue: "95.19732768567435" (state: calculated)
 [StateManager] h_10 setValue stack trace:
setValue @ 4011-StateManager.js:346
calculateValues @ 4011-Section15.js:1832
calculateTargetModel @ 4011-Section15.js:1662
calculateAll @ 4011-Section15.js:1328
(anonymous) @ 4011-Section15.js:2121
(anonymous) @ 4011-StateManager.js:543
notifyListeners @ 4011-StateManager.js:541
setValue @ 4011-StateManager.js:419
(anonymous) @ 4011-Section03.js:1797
storeReferenceResults @ 4011-Section03.js:1795
calculateReferenceModel @ 4011-Section03.js:1761
calculateAll @ 4011-Section03.js:1692
(anonymous) @ 4011-Section03.js:2191
(anonymous) @ 4011-StateManager.js:543
notifyListeners @ 4011-StateManager.js:541
setValue @ 4011-StateManager.js:419
setValue @ 4011-Section09.js:191
(anonymous) @ 4011-Section09.js:2541
 [S15] 🎯 TGT S03 CLIMATE READ: h_23=22, d_23=-26, d_24=30, h_24=24
 [StateManager] 🎯 h_10 setValue: "95.19732768567435" (state: calculated)
 [StateManager] h_10 setValue stack trace:
setValue @ 4011-StateManager.js:346
calculateValues @ 4011-Section15.js:1832
calculateTargetModel @ 4011-Section15.js:1662
calculateAll @ 4011-Section15.js:1328
(anonymous) @ 4011-Section15.js:2121
(anonymous) @ 4011-StateManager.js:543
notifyListeners @ 4011-StateManager.js:541
setValue @ 4011-StateManager.js:419
(anonymous) @ 4011-Section03.js:1797
storeReferenceResults @ 4011-Section03.js:1795
calculateReferenceModel @ 4011-Section03.js:1761
calculateAll @ 4011-Section03.js:1692
(anonymous) @ 4011-Section03.js:2191
(anonymous) @ 4011-StateManager.js:543
notifyListeners @ 4011-StateManager.js:541
setValue @ 4011-StateManager.js:419
setValue @ 4011-Section09.js:191
(anonymous) @ 4011-Section09.js:2541
 [S15] 🎯 TGT S03 CLIMATE READ: h_23=22, d_23=-26, d_24=30, h_24=24
 [StateManager] 🎯 h_10 setValue: "95.19732768567435" (state: calculated)
 [StateManager] h_10 setValue stack trace:
setValue @ 4011-StateManager.js:346
calculateValues @ 4011-Section15.js:1832
calculateTargetModel @ 4011-Section15.js:1662
calculateAll @ 4011-Section15.js:1328
(anonymous) @ 4011-Section15.js:2121
(anonymous) @ 4011-StateManager.js:543
notifyListeners @ 4011-StateManager.js:541
setValue @ 4011-StateManager.js:419
(anonymous) @ 4011-Section03.js:1797
storeReferenceResults @ 4011-Section03.js:1795
calculateReferenceModel @ 4011-Section03.js:1761
calculateAll @ 4011-Section03.js:1692
(anonymous) @ 4011-Section03.js:2191
(anonymous) @ 4011-StateManager.js:543
notifyListeners @ 4011-StateManager.js:541
setValue @ 4011-StateManager.js:419
setValue @ 4011-Section09.js:191
(anonymous) @ 4011-Section09.js:2541
 [S15] 🎯 TGT S03 CLIMATE READ: h_23=22, d_23=-26, d_24=30, h_24=24
 [StateManager] 🎯 h_10 setValue: "95.19732768567435" (state: calculated)
 [StateManager] h_10 setValue stack trace:
setValue @ 4011-StateManager.js:346
calculateValues @ 4011-Section15.js:1832
calculateTargetModel @ 4011-Section15.js:1662
calculateAll @ 4011-Section15.js:1328
(anonymous) @ 4011-Section15.js:2121
(anonymous) @ 4011-StateManager.js:543
notifyListeners @ 4011-StateManager.js:541
setValue @ 4011-StateManager.js:419
(anonymous) @ 4011-Section03.js:1797
storeReferenceResults @ 4011-Section03.js:1795
calculateReferenceModel @ 4011-Section03.js:1761
calculateAll @ 4011-Section03.js:1692
(anonymous) @ 4011-Section03.js:2191
(anonymous) @ 4011-StateManager.js:543
notifyListeners @ 4011-StateManager.js:541
setValue @ 4011-StateManager.js:419
setValue @ 4011-Section09.js:191
(anonymous) @ 4011-Section09.js:2541
 [S15] 🎯 TGT S03 CLIMATE READ: h_23=22, d_23=-26, d_24=30, h_24=24
 [StateManager] 🎯 h_10 setValue: "95.19732768567435" (state: calculated)
 [StateManager] h_10 setValue stack trace:
setValue @ 4011-StateManager.js:346
calculateValues @ 4011-Section15.js:1832
calculateTargetModel @ 4011-Section15.js:1662
calculateAll @ 4011-Section15.js:1328
(anonymous) @ 4011-Section15.js:2121
(anonymous) @ 4011-StateManager.js:543
notifyListeners @ 4011-StateManager.js:541
setValue @ 4011-StateManager.js:419
(anonymous) @ 4011-Section03.js:1797
storeReferenceResults @ 4011-Section03.js:1795
calculateReferenceModel @ 4011-Section03.js:1761
calculateAll @ 4011-Section03.js:1692
(anonymous) @ 4011-Section03.js:2191
(anonymous) @ 4011-StateManager.js:543
notifyListeners @ 4011-StateManager.js:541
setValue @ 4011-StateManager.js:419
setValue @ 4011-Section09.js:191
(anonymous) @ 4011-Section09.js:2541
 [S11] calculateAll TRIGGERED. isReferenceMode: false
 [S11] 🔵 REF CLIMATE READ: d_20=4600
 [S11] 🔵 REF CLIMATE READ: d_21=196
 [S11] 🔵 REF CLIMATE READ: d_20=4600
 [S11] 🔵 REF CLIMATE READ: d_21=196
 [S11] 🔵 REF CLIMATE READ: d_20=4600
 [S11] 🔵 REF CLIMATE READ: d_21=196
 [S11] 🔵 REF CLIMATE READ: d_20=4600
 [S11] 🔵 REF CLIMATE READ: d_21=196
 [S11] 🔵 REF CLIMATE READ: d_20=4600
 [S11] 🔵 REF CLIMATE READ: d_21=196
 [S11] 🔵 REF CLIMATE READ: d_20=4600
 [S11] 🔵 REF CLIMATE READ: d_21=196
 [S11] 🔵 REF CLIMATE READ: d_20=4600
 [S11] 🔵 REF CLIMATE READ: d_21=196
 [S11] 🔵 REF CLIMATE READ: d_20=4600
 [S11] 🔵 REF CLIMATE READ: d_21=196
 [S11] 🔵 REF CLIMATE READ: d_20=4600
 [S11] 🔵 REF CLIMATE READ: d_21=196
 [S11] 🔵 REF CLIMATE READ: d_22=1960
 [S11] 🔵 REF CLIMATE READ: h_22=-1680
 [S11] 🔵 REF CLIMATE READ: d_22=1960
 [S11] 🔵 REF CLIMATE READ: h_22=-1680
 [S11] REF TB%=50% → ref_i_97=59532.29, ref_k_97=-947.70
 [S11] Writing ref penalty: ref_i_97=59532.29, ref_k_97=-947.70
 [S11] 🎯 TGT CLIMATE READ: d_20=4600
 [S11] 🎯 TGT CLIMATE READ: d_21=196
 [S11] 🎯 TGT CLIMATE READ: d_20=4600
 [S11] 🎯 TGT CLIMATE READ: d_21=196
 [S11] 🎯 TGT CLIMATE READ: d_20=4600
 [S11] 🎯 TGT CLIMATE READ: d_21=196
 [S11] 🎯 TGT CLIMATE READ: d_20=4600
 [S11] 🎯 TGT CLIMATE READ: d_21=196
 [S11] 🎯 TGT CLIMATE READ: d_20=4600
 [S11] 🎯 TGT CLIMATE READ: d_21=196
 [S11] 🎯 TGT CLIMATE READ: d_20=4600
 [S11] 🎯 TGT CLIMATE READ: d_21=196
 [S11] 🎯 TGT CLIMATE READ: d_20=4600
 [S11] 🎯 TGT CLIMATE READ: d_21=196
 [S11] 🎯 TGT CLIMATE READ: d_20=4600
 [S11] 🎯 TGT CLIMATE READ: d_21=196
 [S11] 🎯 TGT CLIMATE READ: d_20=4600
 [S11] 🎯 TGT CLIMATE READ: d_21=196
2 [S11] 🎯 TGT CLIMATE READ: h_22=-1680
 [S11] calculateAll TRIGGERED. isReferenceMode: false
 [S11] 🔵 REF CLIMATE READ: d_20=4600
 [S11] 🔵 REF CLIMATE READ: d_21=196
 [S11] 🔵 REF CLIMATE READ: d_20=4600
 [S11] 🔵 REF CLIMATE READ: d_21=196
 [S11] 🔵 REF CLIMATE READ: d_20=4600
 [S11] 🔵 REF CLIMATE READ: d_21=196
 [S11] 🔵 REF CLIMATE READ: d_20=4600
 [S11] 🔵 REF CLIMATE READ: d_21=196
 [S11] 🔵 REF CLIMATE READ: d_20=4600
 [S11] 🔵 REF CLIMATE READ: d_21=196
 [S11] 🔵 REF CLIMATE READ: d_20=4600
 [S11] 🔵 REF CLIMATE READ: d_21=196
 [S11] 🔵 REF CLIMATE READ: d_20=4600
 [S11] 🔵 REF CLIMATE READ: d_21=196
 [S11] 🔵 REF CLIMATE READ: d_20=4600
 [S11] 🔵 REF CLIMATE READ: d_21=196
 [S11] 🔵 REF CLIMATE READ: d_20=4600
 [S11] 🔵 REF CLIMATE READ: d_21=196
 [S11] 🔵 REF CLIMATE READ: d_22=1960
 [S11] 🔵 REF CLIMATE READ: h_22=-1680
 [S11] 🔵 REF CLIMATE READ: d_22=1960
 [S11] 🔵 REF CLIMATE READ: h_22=-1680
 [S11] REF TB%=50% → ref_i_97=59532.29, ref_k_97=-947.70
 [S11] Writing ref penalty: ref_i_97=59532.29, ref_k_97=-947.70
 [S11] 🎯 TGT CLIMATE READ: d_20=4600
 [S11] 🎯 TGT CLIMATE READ: d_21=196
 [S11] 🎯 TGT CLIMATE READ: d_20=4600
 [S11] 🎯 TGT CLIMATE READ: d_21=196
 [S11] 🎯 TGT CLIMATE READ: d_20=4600
4011-Section11.js:1149 [S11] 🎯 TGT CLIMATE READ: d_21=196
4011-Section11.js:1145 [S11] 🎯 TGT CLIMATE READ: d_20=4600
4011-Section11.js:1149 [S11] 🎯 TGT CLIMATE READ: d_21=196
4011-Section11.js:1145 [S11] 🎯 TGT CLIMATE READ: d_20=4600
4011-Section11.js:1149 [S11] 🎯 TGT CLIMATE READ: d_21=196
4011-Section11.js:1145 [S11] 🎯 TGT CLIMATE READ: d_20=4600
4011-Section11.js:1149 [S11] 🎯 TGT CLIMATE READ: d_21=196
4011-Section11.js:1145 [S11] 🎯 TGT CLIMATE READ: d_20=4600
4011-Section11.js:1149 [S11] 🎯 TGT CLIMATE READ: d_21=196
4011-Section11.js:1145 [S11] 🎯 TGT CLIMATE READ: d_20=4600
4011-Section11.js:1149 [S11] 🎯 TGT CLIMATE READ: d_21=196
4011-Section11.js:1145 [S11] 🎯 TGT CLIMATE READ: d_20=4600
4011-Section11.js:1149 [S11] 🎯 TGT CLIMATE READ: d_21=196
24011-Section11.js:1189 [S11] 🎯 TGT CLIMATE READ: h_22=-1680
4011-Section13.js:2810 [S13DEBUG] Reference GF HDD changed: ref_d_22=1960 → triggering Reference calculations
 [Section13] 🚀 CALCULATEALL TRIGGERED - Running dual-engine calculations...
 [Section13] 🎯 Mode captured at calculation start: target
 [Section13] 🔄 Starting Reference Model calculations...
 🔍 [S13-CONTEXT] Creating reference context: g_118="Volume Constant" from ReferenceState
 🔍 [S13-CONTEXT] ReferenceState.g_118="Volume Constant", TargetState.g_118="Volume by Schedule"
 [Section13] Running Reference Model calculations...
 [S13 CONTAMINATION DEBUG] calculateReferenceModel: Using system type = Electricity
 [S13] REF HEATING: system=Electricity, ted=251391.1974742337, afue=0.9, cop=1
 [S13 REF DEBUG] About to calculate with heating system: Electricity
 [S13 REF DEBUG] Will S13 publish ref_d_113=Electricity?
 🔍 [S13-VENT] calculateVentilationRates: ventMethod="Volume Constant", ach(l_118)=3.5, ratePerPerson(d_119)=8.33, volume(d_105)=8000
 🔍 [S13-VENT] isReferenceCalculation=true, hasContext=true
 🔍 [S13-VENT] calculateVentilationValues: ventMethod="Volume Constant", ach(l_118)=3.5, ratePerPerson(d_119)=8.33, volume(d_105)=8000
 🔍 [S13-VENT] Supporting values: occupants(d_63)=126, occupiedHours(i_63)=4380, totalHours(j_63)=8760
 🔍 [S13-VENT] Volume Constant calculation: ventRateLs = (3.5 * 8000) / 3.6 = 7777.777777777777
 ✅ [S13-VENT] Final d_120 result: 7777.777777777777 L/s (from method="Volume Constant", ach=3.5, volume=8000)
 [Section13] 🧊 COOLING CALC: mode=REF, coolingSystemType="No Cooling", heatingType="Electricity", isCoolingActive=false, coolingDemand=10192.893604542265
 [S13 CONTAMINATION DEBUG] storeReferenceResults called during reference mode
 [S13 CONTAMINATION DEBUG] Reference heating system: Electricity
 [S13 CONTAMINATION DEBUG] Target heating system: Heatpump
 [S13 CONTAMINATION DEBUG] Reference h_115 (gas volume): 0
 [S13 CONTAMINATION DEBUG] Reference f_115 (oil volume): 0
 [S13 CONTAMINATION DEBUG] Writing ref_f_115 = 0
 [S13 CONTAMINATION DEBUG] Writing ref_h_115 = 0
 [Section13] Reference results stored with ref_ prefix for downstream sections
 [S13 DEBUG] Total Reference results stored: 34
 [Section13] Reference Model calculations complete
 [Section13] ✅ Reference Model complete
 [Section13] 🔄 Starting Target Model calculations...
 🔍 [S13-CONTEXT] Creating target context: g_118="Volume by Schedule" from TargetState
 🔍 [S13-CONTEXT] TargetState.g_118="Volume by Schedule", ReferenceState.g_118="Volume Constant"
 [Section13] Running Target Model calculations...
 [S13] TGT HEATING: system=Heatpump, ted=127565.6677259902, afue=0.98, cop=3.663540445486518
 🔍 [S13-VENT] calculateVentilationRates: ventMethod="Volume by Schedule", ach(l_118)=3, ratePerPerson(d_119)=14, volume(d_105)=8000
 🔍 [S13-VENT] isReferenceCalculation=false, hasContext=true
 🔍 [S13-VENT] calculateVentilationValues: ventMethod="Volume by Schedule", ach(l_118)=3, ratePerPerson(d_119)=14, volume(d_105)=8000
 🔍 [S13-VENT] Supporting values: occupants(d_63)=126, occupiedHours(i_63)=4380, totalHours(j_63)=8760
 ✅ [S13-VENT] Final d_120 result: 3333.333333333333 L/s (from method="Volume by Schedule", ach=3, volume=8000)
 [Section13] 🧊 COOLING CALC: mode=TGT, coolingSystemType="Cooling", heatingType="Heatpump", isCoolingActive=true, coolingDemand=10192.893604542265
 [Section13] 🧊 COOLING RESULTS: d_117=3826.8214105081656, j_116=2.663540445486518, l_116=0, l_114=6366.0721940341
2 [S14 LISTENER] 🔥 d_122 changed - triggering calculateAll() + UI update
 [S15] 🎯 TGT S03 CLIMATE READ: h_23=22, d_23=-26, d_24=30, h_24=24
 [StateManager] 🎯 h_10 setValue: "95.19732768567435" (state: calculated)
 [StateManager] h_10 setValue stack trace:
setValue @ 4011-StateManager.js:346
calculateValues @ 4011-Section15.js:1832
calculateTargetModel @ 4011-Section15.js:1662
calculateAll @ 4011-Section15.js:1328
(anonymous) @ 4011-Section15.js:2121
(anonymous) @ 4011-StateManager.js:543
notifyListeners @ 4011-StateManager.js:541
setValue @ 4011-StateManager.js:419
setFieldValue @ 4011-Section13.js:636
calculateCoolingVentilation @ 4011-Section13.js:3272
calculateCoolingSystem @ 4011-Section13.js:3040
calculateTargetModel @ 4011-Section13.js:3560
calculateAll @ 4011-Section13.js:3403
(anonymous) @ 4011-Section13.js:2813
(anonymous) @ 4011-StateManager.js:543
notifyListeners @ 4011-StateManager.js:541
setValue @ 4011-StateManager.js:419
(anonymous) @ 4011-Section03.js:1797
storeReferenceResults @ 4011-Section03.js:1795
calculateReferenceModel @ 4011-Section03.js:1761
calculateAll @ 4011-Section03.js:1692
(anonymous) @ 4011-Section03.js:2191
(anonymous) @ 4011-StateManager.js:543
notifyListeners @ 4011-StateManager.js:541
setValue @ 4011-StateManager.js:419
setValue @ 4011-Section09.js:191
(anonymous) @ 4011-Section09.js:2541
 [S15] 🎯 TGT S03 CLIMATE READ: h_23=22, d_23=-26, d_24=30, h_24=24
 [StateManager] 🎯 h_10 setValue: "95.19732768567435" (state: calculated)
 [StateManager] h_10 setValue stack trace:
setValue @ 4011-StateManager.js:346
calculateValues @ 4011-Section15.js:1832
calculateTargetModel @ 4011-Section15.js:1662
calculateAll @ 4011-Section15.js:1328
(anonymous) @ 4011-Section15.js:2121
(anonymous) @ 4011-StateManager.js:543
notifyListeners @ 4011-StateManager.js:541
setValue @ 4011-StateManager.js:419
setFieldValue @ 4011-Section13.js:636
calculateCoolingVentilation @ 4011-Section13.js:3272
calculateCoolingSystem @ 4011-Section13.js:3040
calculateTargetModel @ 4011-Section13.js:3560
calculateAll @ 4011-Section13.js:3403
(anonymous) @ 4011-Section13.js:2813
(anonymous) @ 4011-StateManager.js:543
notifyListeners @ 4011-StateManager.js:541
setValue @ 4011-StateManager.js:419
(anonymous) @ 4011-Section03.js:1797
storeReferenceResults @ 4011-Section03.js:1795
calculateReferenceModel @ 4011-Section03.js:1761
calculateAll @ 4011-Section03.js:1692
(anonymous) @ 4011-Section03.js:2191
(anonymous) @ 4011-StateManager.js:543
notifyListeners @ 4011-StateManager.js:541
setValue @ 4011-StateManager.js:419
setValue @ 4011-Section09.js:191
(anonymous) @ 4011-Section09.js:2541
2 [S14 LISTENER] 🔥 d_122 changed - triggering calculateAll() + UI update
 [S15] 🎯 TGT S03 CLIMATE READ: h_23=22, d_23=-26, d_24=30, h_24=24
 [StateManager] 🎯 h_10 setValue: "95.19732768567435" (state: calculated)
 [StateManager] h_10 setValue stack trace:
setValue @ 4011-StateManager.js:346
calculateValues @ 4011-Section15.js:1832
calculateTargetModel @ 4011-Section15.js:1662
calculateAll @ 4011-Section15.js:1328
(anonymous) @ 4011-Section15.js:2121
(anonymous) @ 4011-StateManager.js:543
notifyListeners @ 4011-StateManager.js:541
setValue @ 4011-StateManager.js:419
setFieldValue @ 4011-Section13.js:636
updateTargetModelDOMValues @ 4011-Section13.js:3684
calculateTargetModel @ 4011-Section13.js:3570
calculateAll @ 4011-Section13.js:3403
(anonymous) @ 4011-Section13.js:2813
(anonymous) @ 4011-StateManager.js:543
notifyListeners @ 4011-StateManager.js:541
setValue @ 4011-StateManager.js:419
(anonymous) @ 4011-Section03.js:1797
storeReferenceResults @ 4011-Section03.js:1795
calculateReferenceModel @ 4011-Section03.js:1761
calculateAll @ 4011-Section03.js:1692
(anonymous) @ 4011-Section03.js:2191
(anonymous) @ 4011-StateManager.js:543
notifyListeners @ 4011-StateManager.js:541
setValue @ 4011-StateManager.js:419
setValue @ 4011-Section09.js:191
(anonymous) @ 4011-Section09.js:2541
 [S15] 🎯 TGT S03 CLIMATE READ: h_23=22, d_23=-26, d_24=30, h_24=24
 [StateManager] 🎯 h_10 setValue: "95.19732768567435" (state: calculated)
 [StateManager] h_10 setValue stack trace:
setValue @ 4011-StateManager.js:346
calculateValues @ 4011-Section15.js:1832
calculateTargetModel @ 4011-Section15.js:1662
calculateAll @ 4011-Section15.js:1328
(anonymous) @ 4011-Section15.js:2121
(anonymous) @ 4011-StateManager.js:543
notifyListeners @ 4011-StateManager.js:541
setValue @ 4011-StateManager.js:419
setFieldValue @ 4011-Section13.js:636
updateTargetModelDOMValues @ 4011-Section13.js:3684
calculateTargetModel @ 4011-Section13.js:3570
calculateAll @ 4011-Section13.js:3403
(anonymous) @ 4011-Section13.js:2813
(anonymous) @ 4011-StateManager.js:543
notifyListeners @ 4011-StateManager.js:541
setValue @ 4011-StateManager.js:419
(anonymous) @ 4011-Section03.js:1797
storeReferenceResults @ 4011-Section03.js:1795
calculateReferenceModel @ 4011-Section03.js:1761
calculateAll @ 4011-Section03.js:1692
(anonymous) @ 4011-Section03.js:2191
(anonymous) @ 4011-StateManager.js:543
notifyListeners @ 4011-StateManager.js:541
setValue @ 4011-StateManager.js:419
setValue @ 4011-Section09.js:191
(anonymous) @ 4011-Section09.js:2541
 [Section13] Target Model calculations complete
 [Section13] ✅ Target Model complete
 [Section13] ⏭️ Skipping Reference value re-write - triggered in target mode
 [Section13] 🎉 DUAL-ENGINE CALCULATIONS COMPLETE
 [S11] calculateAll TRIGGERED. isReferenceMode: false
 [S11] 🔵 REF CLIMATE READ: d_20=4600
 [S11] 🔵 REF CLIMATE READ: d_21=196
 [S11] 🔵 REF CLIMATE READ: d_20=4600
 [S11] 🔵 REF CLIMATE READ: d_21=196
 [S11] 🔵 REF CLIMATE READ: d_20=4600
 [S11] 🔵 REF CLIMATE READ: d_21=196
 [S11] 🔵 REF CLIMATE READ: d_20=4600
 [S11] 🔵 REF CLIMATE READ: d_21=196
 [S11] 🔵 REF CLIMATE READ: d_20=4600
 [S11] 🔵 REF CLIMATE READ: d_21=196
 [S11] 🔵 REF CLIMATE READ: d_20=4600
 [S11] 🔵 REF CLIMATE READ: d_21=196
 [S11] 🔵 REF CLIMATE READ: d_20=4600
 [S11] 🔵 REF CLIMATE READ: d_21=196
 [S11] 🔵 REF CLIMATE READ: d_20=4600
 [S11] 🔵 REF CLIMATE READ: d_21=196
 [S11] 🔵 REF CLIMATE READ: d_20=4600
 [S11] 🔵 REF CLIMATE READ: d_21=196
 [S11] 🔵 REF CLIMATE READ: d_22=1960
 [S11] 🔵 REF CLIMATE READ: h_22=-1680
 [S11] 🔵 REF CLIMATE READ: d_22=1960
 [S11] 🔵 REF CLIMATE READ: h_22=-1680
 [S11] REF TB%=50% → ref_i_97=59532.29, ref_k_97=-947.70
 [S11] Writing ref penalty: ref_i_97=59532.29, ref_k_97=-947.70
 [S11] 🎯 TGT CLIMATE READ: d_20=4600
 [S11] 🎯 TGT CLIMATE READ: d_21=196
 [S11] 🎯 TGT CLIMATE READ: d_20=4600
 [S11] 🎯 TGT CLIMATE READ: d_21=196
 [S11] 🎯 TGT CLIMATE READ: d_20=4600
 [S11] 🎯 TGT CLIMATE READ: d_21=196
 [S11] 🎯 TGT CLIMATE READ: d_20=4600
 [S11] 🎯 TGT CLIMATE READ: d_21=196
 [S11] 🎯 TGT CLIMATE READ: d_20=4600
 [S11] 🎯 TGT CLIMATE READ: d_21=196
 [S11] 🎯 TGT CLIMATE READ: d_20=4600
 [S11] 🎯 TGT CLIMATE READ: d_21=196
 [S11] 🎯 TGT CLIMATE READ: d_20=4600
 [S11] 🎯 TGT CLIMATE READ: d_21=196
 [S11] 🎯 TGT CLIMATE READ: d_20=4600
 [S11] 🎯 TGT CLIMATE READ: d_21=196
 [S11] 🎯 TGT CLIMATE READ: d_20=4600
 [S11] 🎯 TGT CLIMATE READ: d_21=196
2 [S11] 🎯 TGT CLIMATE READ: h_22=-1680
 [S11] calculateAll TRIGGERED. isReferenceMode: false
 [S11] 🔵 REF CLIMATE READ: d_20=4600
 [S11] 🔵 REF CLIMATE READ: d_21=196
 [S11] 🔵 REF CLIMATE READ: d_20=4600
 [S11] 🔵 REF CLIMATE READ: d_21=196
 [S11] 🔵 REF CLIMATE READ: d_20=4600
 [S11] 🔵 REF CLIMATE READ: d_21=196
 [S11] 🔵 REF CLIMATE READ: d_20=4600
 [S11] 🔵 REF CLIMATE READ: d_21=196
 [S11] 🔵 REF CLIMATE READ: d_20=4600
 [S11] 🔵 REF CLIMATE READ: d_21=196
 [S11] 🔵 REF CLIMATE READ: d_20=4600
 [S11] 🔵 REF CLIMATE READ: d_21=196
 [S11] 🔵 REF CLIMATE READ: d_20=4600
 [S11] 🔵 REF CLIMATE READ: d_21=196
 [S11] 🔵 REF CLIMATE READ: d_20=4600
 [S11] 🔵 REF CLIMATE READ: d_21=196
 [S11] 🔵 REF CLIMATE READ: d_20=4600
 [S11] 🔵 REF CLIMATE READ: d_21=196
 [S11] 🔵 REF CLIMATE READ: d_22=1960
 [S11] 🔵 REF CLIMATE READ: h_22=-1680
 [S11] 🔵 REF CLIMATE READ: d_22=1960
 [S11] 🔵 REF CLIMATE READ: h_22=-1680
 [S11] REF TB%=50% → ref_i_97=59532.29, ref_k_97=-947.70
 [S11] Writing ref penalty: ref_i_97=59532.29, ref_k_97=-947.70
 [S11] 🎯 TGT CLIMATE READ: d_20=4600
 [S11] 🎯 TGT CLIMATE READ: d_21=196
 [S11] 🎯 TGT CLIMATE READ: d_20=4600
 [S11] 🎯 TGT CLIMATE READ: d_21=196
 [S11] 🎯 TGT CLIMATE READ: d_20=4600
 [S11] 🎯 TGT CLIMATE READ: d_21=196
 [S11] 🎯 TGT CLIMATE READ: d_20=4600
 [S11] 🎯 TGT CLIMATE READ: d_21=196
 [S11] 🎯 TGT CLIMATE READ: d_20=4600
 [S11] 🎯 TGT CLIMATE READ: d_21=196
 [S11] 🎯 TGT CLIMATE READ: d_20=4600
 [S11] 🎯 TGT CLIMATE READ: d_21=196
 [S11] 🎯 TGT CLIMATE READ: d_20=4600
 [S11] 🎯 TGT CLIMATE READ: d_21=196
 [S11] 🎯 TGT CLIMATE READ: d_20=4600
 [S11] 🎯 TGT CLIMATE READ: d_21=196
 [S11] 🎯 TGT CLIMATE READ: d_20=4600
 [S11] 🎯 TGT CLIMATE READ: d_21=196
2 [S11] 🎯 TGT CLIMATE READ: h_22=-1680
 [S13DEBUG] Reference GF CDD changed: ref_h_22=-1680 → triggering Reference calculations
 [Section13] 🚀 CALCULATEALL TRIGGERED - Running dual-engine calculations...
 [Section13] 🎯 Mode captured at calculation start: target
 [Section13] 🔄 Starting Reference Model calculations...
 🔍 [S13-CONTEXT] Creating reference context: g_118="Volume Constant" from ReferenceState
 🔍 [S13-CONTEXT] ReferenceState.g_118="Volume Constant", TargetState.g_118="Volume by Schedule"
 [Section13] Running Reference Model calculations...
 [S13 CONTAMINATION DEBUG] calculateReferenceModel: Using system type = Electricity
 [S13] REF HEATING: system=Electricity, ted=251391.1974742337, afue=0.9, cop=1
 [S13 REF DEBUG] About to calculate with heating system: Electricity
 [S13 REF DEBUG] Will S13 publish ref_d_113=Electricity?
 🔍 [S13-VENT] calculateVentilationRates: ventMethod="Volume Constant", ach(l_118)=3.5, ratePerPerson(d_119)=8.33, volume(d_105)=8000
 🔍 [S13-VENT] isReferenceCalculation=true, hasContext=true
 🔍 [S13-VENT] calculateVentilationValues: ventMethod="Volume Constant", ach(l_118)=3.5, ratePerPerson(d_119)=8.33, volume(d_105)=8000
 🔍 [S13-VENT] Supporting values: occupants(d_63)=126, occupiedHours(i_63)=4380, totalHours(j_63)=8760
 🔍 [S13-VENT] Volume Constant calculation: ventRateLs = (3.5 * 8000) / 3.6 = 7777.777777777777
 ✅ [S13-VENT] Final d_120 result: 7777.777777777777 L/s (from method="Volume Constant", ach=3.5, volume=8000)
 [Section13] 🧊 COOLING CALC: mode=REF, coolingSystemType="No Cooling", heatingType="Electricity", isCoolingActive=false, coolingDemand=10192.893604542265
 [S13 CONTAMINATION DEBUG] storeReferenceResults called during reference mode
 [S13 CONTAMINATION DEBUG] Reference heating system: Electricity
 [S13 CONTAMINATION DEBUG] Target heating system: Heatpump
 [S13 CONTAMINATION DEBUG] Reference h_115 (gas volume): 0
 [S13 CONTAMINATION DEBUG] Reference f_115 (oil volume): 0
 [S13 CONTAMINATION DEBUG] Writing ref_f_115 = 0
 [S13 CONTAMINATION DEBUG] Writing ref_h_115 = 0
 [Section13] Reference results stored with ref_ prefix for downstream sections
 [S13 DEBUG] Total Reference results stored: 34
 [Section13] Reference Model calculations complete
 [Section13] ✅ Reference Model complete
 [Section13] 🔄 Starting Target Model calculations...
 🔍 [S13-CONTEXT] Creating target context: g_118="Volume by Schedule" from TargetState
 🔍 [S13-CONTEXT] TargetState.g_118="Volume by Schedule", ReferenceState.g_118="Volume Constant"
 [Section13] Running Target Model calculations...
4011-Section13.js:2870 [S13] TGT HEATING: system=Heatpump, ted=127565.6677259902, afue=0.98, cop=3.663540445486518
4011-Section13.js:3096 🔍 [S13-VENT] calculateVentilationRates: ventMethod="Volume by Schedule", ach(l_118)=3, ratePerPerson(d_119)=14, volume(d_105)=8000
4011-Section13.js:3099 🔍 [S13-VENT] isReferenceCalculation=false, hasContext=true
4011-Section13.js:3107 🔍 [S13-VENT] calculateVentilationValues: ventMethod="Volume by Schedule", ach(l_118)=3, ratePerPerson(d_119)=14, volume(d_105)=8000
4011-Section13.js:3110 🔍 [S13-VENT] Supporting values: occupants(d_63)=126, occupiedHours(i_63)=4380, totalHours(j_63)=8760
4011-Section13.js:3142 ✅ [S13-VENT] Final d_120 result: 3333.333333333333 L/s (from method="Volume by Schedule", ach=3, volume=8000)
4011-Section13.js:2974 [Section13] 🧊 COOLING CALC: mode=TGT, coolingSystemType="Cooling", heatingType="Heatpump", isCoolingActive=true, coolingDemand=10192.893604542265
4011-Section13.js:3036 [Section13] 🧊 COOLING RESULTS: d_117=3826.8214105081656, j_116=2.663540445486518, l_116=0, l_114=6366.0721940341
24011-Section14.js:1416 [S14 LISTENER] 🔥 d_122 changed - triggering calculateAll() + UI update
4011-Section15.js:1750 [S15] 🎯 TGT S03 CLIMATE READ: h_23=22, d_23=-26, d_24=30, h_24=24
4011-StateManager.js:343 [StateManager] 🎯 h_10 setValue: "95.19732768567435" (state: calculated)
4011-StateManager.js:346 [StateManager] h_10 setValue stack trace:
setValue @ 4011-StateManager.js:346
calculateValues @ 4011-Section15.js:1832
calculateTargetModel @ 4011-Section15.js:1662
calculateAll @ 4011-Section15.js:1328
(anonymous) @ 4011-Section15.js:2121
(anonymous) @ 4011-StateManager.js:543
notifyListeners @ 4011-StateManager.js:541
setValue @ 4011-StateManager.js:419
setFieldValue @ 4011-Section13.js:636
calculateCoolingVentilation @ 4011-Section13.js:3272
calculateCoolingSystem @ 4011-Section13.js:3040
calculateTargetModel @ 4011-Section13.js:3560
calculateAll @ 4011-Section13.js:3403
(anonymous) @ 4011-Section13.js:2819
(anonymous) @ 4011-StateManager.js:543
notifyListeners @ 4011-StateManager.js:541
setValue @ 4011-StateManager.js:419
(anonymous) @ 4011-Section03.js:1797
storeReferenceResults @ 4011-Section03.js:1795
calculateReferenceModel @ 4011-Section03.js:1761
calculateAll @ 4011-Section03.js:1692
(anonymous) @ 4011-Section03.js:2191
(anonymous) @ 4011-StateManager.js:543
notifyListeners @ 4011-StateManager.js:541
setValue @ 4011-StateManager.js:419
setValue @ 4011-Section09.js:191
(anonymous) @ 4011-Section09.js:2541
4011-Section15.js:1750 [S15] 🎯 TGT S03 CLIMATE READ: h_23=22, d_23=-26, d_24=30, h_24=24
4011-StateManager.js:343 [StateManager] 🎯 h_10 setValue: "95.19732768567435" (state: calculated)
4011-StateManager.js:346 [StateManager] h_10 setValue stack trace:
setValue @ 4011-StateManager.js:346
calculateValues @ 4011-Section15.js:1832
calculateTargetModel @ 4011-Section15.js:1662
calculateAll @ 4011-Section15.js:1328
(anonymous) @ 4011-Section15.js:2121
(anonymous) @ 4011-StateManager.js:543
notifyListeners @ 4011-StateManager.js:541
setValue @ 4011-StateManager.js:419
setFieldValue @ 4011-Section13.js:636
calculateCoolingVentilation @ 4011-Section13.js:3272
calculateCoolingSystem @ 4011-Section13.js:3040
calculateTargetModel @ 4011-Section13.js:3560
calculateAll @ 4011-Section13.js:3403
(anonymous) @ 4011-Section13.js:2819
(anonymous) @ 4011-StateManager.js:543
notifyListeners @ 4011-StateManager.js:541
setValue @ 4011-StateManager.js:419
(anonymous) @ 4011-Section03.js:1797
storeReferenceResults @ 4011-Section03.js:1795
calculateReferenceModel @ 4011-Section03.js:1761
calculateAll @ 4011-Section03.js:1692
(anonymous) @ 4011-Section03.js:2191
(anonymous) @ 4011-StateManager.js:543
notifyListeners @ 4011-StateManager.js:541
setValue @ 4011-StateManager.js:419
setValue @ 4011-Section09.js:191
(anonymous) @ 4011-Section09.js:2541
24011-Section14.js:1416 [S14 LISTENER] 🔥 d_122 changed - triggering calculateAll() + UI update
4011-Section15.js:1750 [S15] 🎯 TGT S03 CLIMATE READ: h_23=22, d_23=-26, d_24=30, h_24=24
4011-StateManager.js:343 [StateManager] 🎯 h_10 setValue: "95.19732768567435" (state: calculated)
4011-StateManager.js:346 [StateManager] h_10 setValue stack trace:
setValue @ 4011-StateManager.js:346
calculateValues @ 4011-Section15.js:1832
calculateTargetModel @ 4011-Section15.js:1662
calculateAll @ 4011-Section15.js:1328
(anonymous) @ 4011-Section15.js:2121
(anonymous) @ 4011-StateManager.js:543
notifyListeners @ 4011-StateManager.js:541
setValue @ 4011-StateManager.js:419
setFieldValue @ 4011-Section13.js:636
updateTargetModelDOMValues @ 4011-Section13.js:3684
calculateTargetModel @ 4011-Section13.js:3570
calculateAll @ 4011-Section13.js:3403
(anonymous) @ 4011-Section13.js:2819
(anonymous) @ 4011-StateManager.js:543
notifyListeners @ 4011-StateManager.js:541
setValue @ 4011-StateManager.js:419
(anonymous) @ 4011-Section03.js:1797
storeReferenceResults @ 4011-Section03.js:1795
calculateReferenceModel @ 4011-Section03.js:1761
calculateAll @ 4011-Section03.js:1692
(anonymous) @ 4011-Section03.js:2191
(anonymous) @ 4011-StateManager.js:543
notifyListeners @ 4011-StateManager.js:541
setValue @ 4011-StateManager.js:419
setValue @ 4011-Section09.js:191
(anonymous) @ 4011-Section09.js:2541
4011-Section15.js:1750 [S15] 🎯 TGT S03 CLIMATE READ: h_23=22, d_23=-26, d_24=30, h_24=24
4011-StateManager.js:343 [StateManager] 🎯 h_10 setValue: "95.19732768567435" (state: calculated)
4011-StateManager.js:346 [StateManager] h_10 setValue stack trace:
setValue @ 4011-StateManager.js:346
calculateValues @ 4011-Section15.js:1832
calculateTargetModel @ 4011-Section15.js:1662
calculateAll @ 4011-Section15.js:1328
(anonymous) @ 4011-Section15.js:2121
(anonymous) @ 4011-StateManager.js:543
notifyListeners @ 4011-StateManager.js:541
setValue @ 4011-StateManager.js:419
setFieldValue @ 4011-Section13.js:636
updateTargetModelDOMValues @ 4011-Section13.js:3684
calculateTargetModel @ 4011-Section13.js:3570
calculateAll @ 4011-Section13.js:3403
(anonymous) @ 4011-Section13.js:2819
(anonymous) @ 4011-StateManager.js:543
notifyListeners @ 4011-StateManager.js:541
setValue @ 4011-StateManager.js:419
(anonymous) @ 4011-Section03.js:1797
storeReferenceResults @ 4011-Section03.js:1795
calculateReferenceModel @ 4011-Section03.js:1761
calculateAll @ 4011-Section03.js:1692
(anonymous) @ 4011-Section03.js:2191
(anonymous) @ 4011-StateManager.js:543
notifyListeners @ 4011-StateManager.js:541
setValue @ 4011-StateManager.js:419
setValue @ 4011-Section09.js:191
(anonymous) @ 4011-Section09.js:2541
4011-Section13.js:3588 [Section13] Target Model calculations complete
4011-Section13.js:3404 [Section13] ✅ Target Model complete
4011-Section13.js:3431 [Section13] ⏭️ Skipping Reference value re-write - triggered in target mode
4011-Section13.js:3437 [Section13] 🎉 DUAL-ENGINE CALCULATIONS COMPLETE
 [S03] Critical flag update: mode=target, occupancy="B3-Detention Care & Treatment", critical=true
 [S09 DEBUG] buildingType="B3-Detention Care & Treatment", isReference=false
 [S09 DEBUG] isResidentialOrCare=true, plugLoadDensity=5
 [S15] 🎯 TGT S03 CLIMATE READ: h_23=22, d_23=-26, d_24=30, h_24=24
 [StateManager] 🎯 h_10 setValue: "95.19732768567435" (state: calculated)
 [StateManager] h_10 setValue stack trace:
setValue @ 4011-StateManager.js:346
calculateValues @ 4011-Section15.js:1832
calculateTargetModel @ 4011-Section15.js:1662
calculateAll @ 4011-Section15.js:1328
(anonymous) @ 4011-Section15.js:2121
(anonymous) @ 4011-StateManager.js:543
notifyListeners @ 4011-StateManager.js:541
setValue @ 4011-StateManager.js:419
setCalculatedValue @ 4011-Section09.js:630
(anonymous) @ 4011-Section09.js:1839
calculateTargetModel @ 4011-Section09.js:1838
(anonymous) @ 4011-Section09.js:2166
(anonymous) @ 4011-StateManager.js:543
notifyListeners @ 4011-StateManager.js:541
setValue @ 4011-StateManager.js:419
setValue @ 4011-Section09.js:191
(anonymous) @ 4011-Section09.js:2541
 [S15] 🎯 TGT S03 CLIMATE READ: h_23=22, d_23=-26, d_24=30, h_24=24
 [StateManager] 🎯 h_10 setValue: "95.19732768567435" (state: calculated)
 [StateManager] h_10 setValue stack trace:
setValue @ 4011-StateManager.js:346
calculateValues @ 4011-Section15.js:1832
calculateTargetModel @ 4011-Section15.js:1662
calculateAll @ 4011-Section15.js:1328
(anonymous) @ 4011-Section15.js:2121
(anonymous) @ 4011-StateManager.js:543
notifyListeners @ 4011-StateManager.js:541
setValue @ 4011-StateManager.js:419
setCalculatedValue @ 4011-Section09.js:630
(anonymous) @ 4011-Section09.js:1839
calculateTargetModel @ 4011-Section09.js:1838
(anonymous) @ 4011-Section09.js:2166
(anonymous) @ 4011-StateManager.js:543
notifyListeners @ 4011-StateManager.js:541
setValue @ 4011-StateManager.js:419
setValue @ 4011-Section09.js:191
(anonymous) @ 4011-Section09.js:2541
 [S15] 🎯 TGT S03 CLIMATE READ: h_23=22, d_23=-26, d_24=30, h_24=24
 [StateManager] 🎯 h_10 setValue: "95.19732768567435" (state: calculated)
 [StateManager] h_10 setValue stack trace:
setValue @ 4011-StateManager.js:346
calculateValues @ 4011-Section15.js:1832
calculateTargetModel @ 4011-Section15.js:1662
calculateAll @ 4011-Section15.js:1328
(anonymous) @ 4011-Section15.js:2121
(anonymous) @ 4011-StateManager.js:543
notifyListeners @ 4011-StateManager.js:541
setValue @ 4011-StateManager.js:419
setCalculatedValue @ 4011-Section09.js:630
(anonymous) @ 4011-Section09.js:1839
calculateTargetModel @ 4011-Section09.js:1838
(anonymous) @ 4011-Section09.js:2166
(anonymous) @ 4011-StateManager.js:543
notifyListeners @ 4011-StateManager.js:541
setValue @ 4011-StateManager.js:419
setValue @ 4011-Section09.js:191
(anonymous) @ 4011-Section09.js:2541
 [S15] 🎯 TGT S03 CLIMATE READ: h_23=22, d_23=-26, d_24=30, h_24=24
 [StateManager] 🎯 h_10 setValue: "95.19732768567435" (state: calculated)
 [StateManager] h_10 setValue stack trace:
setValue @ 4011-StateManager.js:346
calculateValues @ 4011-Section15.js:1832
calculateTargetModel @ 4011-Section15.js:1662
calculateAll @ 4011-Section15.js:1328
(anonymous) @ 4011-Section15.js:2121
(anonymous) @ 4011-StateManager.js:543
notifyListeners @ 4011-StateManager.js:541
setValue @ 4011-StateManager.js:419
setCalculatedValue @ 4011-Section09.js:630
(anonymous) @ 4011-Section09.js:1839
calculateTargetModel @ 4011-Section09.js:1838
(anonymous) @ 4011-Section09.js:2166
(anonymous) @ 4011-StateManager.js:543
notifyListeners @ 4011-StateManager.js:541
setValue @ 4011-StateManager.js:419
setValue @ 4011-Section09.js:191
(anonymous) @ 4011-Section09.js:2541
 [S15] 🎯 TGT S03 CLIMATE READ: h_23=22, d_23=-26, d_24=30, h_24=24
 [S04] S15 target electricity changed: d_136
 [S04] Starting dual-engine Excel-compliant calculations
 [S04] Row 32 Subtotals - F32: 132938, G32: 6779.838, J32: 167121.30607299446, K32: 8523.186609722718
 [S04] j_32 update: 167121.30607299446
 [S01] j_32 listener: 135865.62607299443 → 167121.30607299446
 [S01] 🕐 j_32 listener timing: StateManager current j_32 = 167121.30607299446
2 🔄 [S05] updateCalculatedDisplayValues: mode=target
 [S15] 🎯 TGT S03 CLIMATE READ: h_23=22, d_23=-26, d_24=30, h_24=24
 [StateManager] 🎯 h_10 setValue: "117.09732768567436" (state: calculated)
 [StateManager] h_10 setValue stack trace:
setValue @ 4011-StateManager.js:346
calculateValues @ 4011-Section15.js:1832
calculateTargetModel @ 4011-Section15.js:1662
calculateAll @ 4011-Section15.js:1328
(anonymous) @ 4011-Section15.js:2121
(anonymous) @ 4011-StateManager.js:543
notifyListeners @ 4011-StateManager.js:541
setValue @ 4011-StateManager.js:419
setCalculatedValue @ 4011-Section04.js:96
calculateRow32 @ 4011-Section04.js:1026
calculateTargetModel @ 4011-Section04.js:1620
calculateAll @ 4011-Section04.js:1586
(anonymous) @ 4011-Section04.js:2483
(anonymous) @ 4011-StateManager.js:543
notifyListeners @ 4011-StateManager.js:541
setValue @ 4011-StateManager.js:419
setTargetValue @ 4011-Section15.js:146
calculateValues @ 4011-Section15.js:1810
calculateTargetModel @ 4011-Section15.js:1662
calculateAll @ 4011-Section15.js:1328
(anonymous) @ 4011-Section15.js:2121
(anonymous) @ 4011-StateManager.js:543
notifyListeners @ 4011-StateManager.js:541
setValue @ 4011-StateManager.js:419
setCalculatedValue @ 4011-Section09.js:630
(anonymous) @ 4011-Section09.js:1839
calculateTargetModel @ 4011-Section09.js:1838
(anonymous) @ 4011-Section09.js:2166
(anonymous) @ 4011-StateManager.js:543
notifyListeners @ 4011-StateManager.js:541
setValue @ 4011-StateManager.js:419
setValue @ 4011-Section09.js:191
(anonymous) @ 4011-Section09.js:2541
 [S15] 🎯 TGT S03 CLIMATE READ: h_23=22, d_23=-26, d_24=30, h_24=24
 [StateManager] 🎯 h_10 setValue: "117.09732768567436" (state: calculated)
 [StateManager] h_10 setValue stack trace:
setValue @ 4011-StateManager.js:346
calculateValues @ 4011-Section15.js:1832
calculateTargetModel @ 4011-Section15.js:1662
calculateAll @ 4011-Section15.js:1328
(anonymous) @ 4011-Section15.js:2121
(anonymous) @ 4011-StateManager.js:543
notifyListeners @ 4011-StateManager.js:541
setValue @ 4011-StateManager.js:419
calculateValues @ 4011-Section15.js:1832
calculateTargetModel @ 4011-Section15.js:1662
calculateAll @ 4011-Section15.js:1328
(anonymous) @ 4011-Section15.js:2121
(anonymous) @ 4011-StateManager.js:543
notifyListeners @ 4011-StateManager.js:541
setValue @ 4011-StateManager.js:419
setCalculatedValue @ 4011-Section04.js:96
calculateRow32 @ 4011-Section04.js:1026
calculateTargetModel @ 4011-Section04.js:1620
calculateAll @ 4011-Section04.js:1586
(anonymous) @ 4011-Section04.js:2483
(anonymous) @ 4011-StateManager.js:543
notifyListeners @ 4011-StateManager.js:541
setValue @ 4011-StateManager.js:419
setTargetValue @ 4011-Section15.js:146
calculateValues @ 4011-Section15.js:1810
calculateTargetModel @ 4011-Section15.js:1662
calculateAll @ 4011-Section15.js:1328
(anonymous) @ 4011-Section15.js:2121
(anonymous) @ 4011-StateManager.js:543
notifyListeners @ 4011-StateManager.js:541
setValue @ 4011-StateManager.js:419
setCalculatedValue @ 4011-Section09.js:630
(anonymous) @ 4011-Section09.js:1839
calculateTargetModel @ 4011-Section09.js:1838
(anonymous) @ 4011-Section09.js:2166
(anonymous) @ 4011-StateManager.js:543
notifyListeners @ 4011-StateManager.js:541
setValue @ 4011-StateManager.js:419
setValue @ 4011-Section09.js:191
(anonymous) @ 4011-Section09.js:2541
 [S15] 🎯 TGT S03 CLIMATE READ: h_23=22, d_23=-26, d_24=30, h_24=24
 [StateManager] 🎯 h_10 setValue: "117.09732768567436" (state: calculated)
 [StateManager] h_10 setValue stack trace:
setValue @ 4011-StateManager.js:346
calculateValues @ 4011-Section15.js:1832
calculateTargetModel @ 4011-Section15.js:1662
calculateAll @ 4011-Section15.js:1328
(anonymous) @ 4011-Section15.js:2121
(anonymous) @ 4011-StateManager.js:543
notifyListeners @ 4011-StateManager.js:541
setValue @ 4011-StateManager.js:419
calculateValues @ 4011-Section15.js:1832
calculateTargetModel @ 4011-Section15.js:1662
calculateAll @ 4011-Section15.js:1328
(anonymous) @ 4011-Section15.js:2121
(anonymous) @ 4011-StateManager.js:543
notifyListeners @ 4011-StateManager.js:541
setValue @ 4011-StateManager.js:419
setCalculatedValue @ 4011-Section04.js:96
calculateRow32 @ 4011-Section04.js:1026
calculateTargetModel @ 4011-Section04.js:1620
calculateAll @ 4011-Section04.js:1586
(anonymous) @ 4011-Section04.js:2483
(anonymous) @ 4011-StateManager.js:543
notifyListeners @ 4011-StateManager.js:541
setValue @ 4011-StateManager.js:419
setTargetValue @ 4011-Section15.js:146
calculateValues @ 4011-Section15.js:1810
calculateTargetModel @ 4011-Section15.js:1662
calculateAll @ 4011-Section15.js:1328
(anonymous) @ 4011-Section15.js:2121
(anonymous) @ 4011-StateManager.js:543
notifyListeners @ 4011-StateManager.js:541
setValue @ 4011-StateManager.js:419
setCalculatedValue @ 4011-Section09.js:630
(anonymous) @ 4011-Section09.js:1839
calculateTargetModel @ 4011-Section09.js:1838
(anonymous) @ 4011-Section09.js:2166
(anonymous) @ 4011-StateManager.js:543
notifyListeners @ 4011-StateManager.js:541
setValue @ 4011-StateManager.js:419
setValue @ 4011-Section09.js:191
(anonymous) @ 4011-Section09.js:2541
 [S15] 🎯 TGT S03 CLIMATE READ: h_23=22, d_23=-26, d_24=30, h_24=24
 [StateManager] 🎯 h_10 setValue: "117.09732768567436" (state: calculated)
 [StateManager] h_10 setValue stack trace:
setValue @ 4011-StateManager.js:346
calculateValues @ 4011-Section15.js:1832
calculateTargetModel @ 4011-Section15.js:1662
calculateAll @ 4011-Section15.js:1328
(anonymous) @ 4011-Section15.js:2121
(anonymous) @ 4011-StateManager.js:543
notifyListeners @ 4011-StateManager.js:541
setValue @ 4011-StateManager.js:419
setCalculatedValue @ 4011-Section04.js:96
calculateRow32 @ 4011-Section04.js:1026
calculateTargetModel @ 4011-Section04.js:1620
calculateAll @ 4011-Section04.js:1586
(anonymous) @ 4011-Section04.js:2483
(anonymous) @ 4011-StateManager.js:543
notifyListeners @ 4011-StateManager.js:541
setValue @ 4011-StateManager.js:419
setTargetValue @ 4011-Section15.js:146
calculateValues @ 4011-Section15.js:1810
calculateTargetModel @ 4011-Section15.js:1662
calculateAll @ 4011-Section15.js:1328
(anonymous) @ 4011-Section15.js:2121
(anonymous) @ 4011-StateManager.js:543
notifyListeners @ 4011-StateManager.js:541
setValue @ 4011-StateManager.js:419
setCalculatedValue @ 4011-Section09.js:630
(anonymous) @ 4011-Section09.js:1839
calculateTargetModel @ 4011-Section09.js:1838
(anonymous) @ 4011-Section09.js:2166
(anonymous) @ 4011-StateManager.js:543
notifyListeners @ 4011-StateManager.js:541
setValue @ 4011-StateManager.js:419
setValue @ 4011-Section09.js:191
(anonymous) @ 4011-Section09.js:2541
 [S04] Row 32 Subtotals - F32: 132938, G32: 6779.838, J32: 301986.051518286, K32: 15401.288627432587
 [S04] Reference model calculations complete
 [S04DB] storeReference: ref_j_32=301986.051518286, ref_k_32=15401.288627432587 | current target j_32=167121.30607299446, k_32=8523.186609722718
 [S04] 🔄 Updating calculated display values for target mode
 [S04DB] displayContext mode=target j_32=167121.30607299446 ref_j_32=301986.051518286 k_32=8523.186609722718 ref_k_32=15401.288627432587
 [S04 DEBUG] Target mode - j_32: 167121.30607299446
 [S04 DEBUG] Target mode - k_32: 8523.186609722718
 [S04 DEBUG] Target mode - l_27: 51
 [S04] Calculated display values updated for target mode
 [S04] Dual-engine calculations completed successfully
 [S04] 🔄 Updating calculated display values for target mode
 [S04DB] displayContext mode=target j_32=167121.30607299446 ref_j_32=301986.051518286 k_32=8523.186609722718 ref_k_32=15401.288627432587
 [S04 DEBUG] Target mode - j_32: 167121.30607299446
 [S04 DEBUG] Target mode - k_32: 8523.186609722718
 [S04 DEBUG] Target mode - l_27: 51
 [S04] Calculated display values updated for target mode
 [StateManager] 🎯 h_10 setValue: "117.09732768567436" (state: calculated)
 [StateManager] h_10 setValue stack trace:
setValue @ 4011-StateManager.js:346
calculateValues @ 4011-Section15.js:1832
calculateTargetModel @ 4011-Section15.js:1662
calculateAll @ 4011-Section15.js:1328
(anonymous) @ 4011-Section15.js:2121
(anonymous) @ 4011-StateManager.js:543
notifyListeners @ 4011-StateManager.js:541
setValue @ 4011-StateManager.js:419
setCalculatedValue @ 4011-Section09.js:630
(anonymous) @ 4011-Section09.js:1839
calculateTargetModel @ 4011-Section09.js:1838
(anonymous) @ 4011-Section09.js:2166
(anonymous) @ 4011-StateManager.js:543
notifyListeners @ 4011-StateManager.js:541
setValue @ 4011-StateManager.js:419
setValue @ 4011-Section09.js:191
(anonymous) @ 4011-Section09.js:2541
 [S15] 🎯 TGT S03 CLIMATE READ: h_23=22, d_23=-26, d_24=30, h_24=24
 [StateManager] 🎯 h_10 setValue: "117.09732768567436" (state: calculated)
 [StateManager] h_10 setValue stack trace:
setValue @ 4011-StateManager.js:346
calculateValues @ 4011-Section15.js:1832
calculateTargetModel @ 4011-Section15.js:1662
calculateAll @ 4011-Section15.js:1328
(anonymous) @ 4011-Section15.js:2121
(anonymous) @ 4011-StateManager.js:543
notifyListeners @ 4011-StateManager.js:541
setValue @ 4011-StateManager.js:419
setCalculatedValue @ 4011-Section09.js:630
(anonymous) @ 4011-Section09.js:1839
calculateTargetModel @ 4011-Section09.js:1838
(anonymous) @ 4011-Section09.js:2166
(anonymous) @ 4011-StateManager.js:543
notifyListeners @ 4011-StateManager.js:541
setValue @ 4011-StateManager.js:419
setValue @ 4011-Section09.js:191
(anonymous) @ 4011-Section09.js:2541
 S10: Target listener triggered by i_71, recalculating all.
 [S10 DEBUG] calculateAll() triggered in target mode - running both engines
 [Section13] 📡 🔥 d_127 (TED) listener triggered - S14 energy demand changed!
 [Section13] 🚀 CALCULATEALL TRIGGERED - Running dual-engine calculations...
 [Section13] 🎯 Mode captured at calculation start: target
 [Section13] 🔄 Starting Reference Model calculations...
 🔍 [S13-CONTEXT] Creating reference context: g_118="Volume Constant" from ReferenceState
 🔍 [S13-CONTEXT] ReferenceState.g_118="Volume Constant", TargetState.g_118="Volume by Schedule"
 [Section13] Running Reference Model calculations...
 [S13 CONTAMINATION DEBUG] calculateReferenceModel: Using system type = Electricity
 [S13] REF HEATING: system=Electricity, ted=251391.1974742337, afue=0.9, cop=1
 [S13 REF DEBUG] About to calculate with heating system: Electricity
 [S13 REF DEBUG] Will S13 publish ref_d_113=Electricity?
 🔍 [S13-VENT] calculateVentilationRates: ventMethod="Volume Constant", ach(l_118)=3.5, ratePerPerson(d_119)=8.33, volume(d_105)=8000
 🔍 [S13-VENT] isReferenceCalculation=true, hasContext=true
 🔍 [S13-VENT] calculateVentilationValues: ventMethod="Volume Constant", ach(l_118)=3.5, ratePerPerson(d_119)=8.33, volume(d_105)=8000
 🔍 [S13-VENT] Supporting values: occupants(d_63)=126, occupiedHours(i_63)=4380, totalHours(j_63)=8760
 🔍 [S13-VENT] Volume Constant calculation: ventRateLs = (3.5 * 8000) / 3.6 = 7777.777777777777
 ✅ [S13-VENT] Final d_120 result: 7777.777777777777 L/s (from method="Volume Constant", ach=3.5, volume=8000)
 [Section13] 🧊 COOLING CALC: mode=REF, coolingSystemType="No Cooling", heatingType="Electricity", isCoolingActive=false, coolingDemand=10192.893604542265
 [S13 CONTAMINATION DEBUG] storeReferenceResults called during reference mode
 [S13 CONTAMINATION DEBUG] Reference heating system: Electricity
 [S13 CONTAMINATION DEBUG] Target heating system: Heatpump
 [S13 CONTAMINATION DEBUG] Reference h_115 (gas volume): 0
 [S13 CONTAMINATION DEBUG] Reference f_115 (oil volume): 0
 [S13 CONTAMINATION DEBUG] Writing ref_f_115 = 0
 [S13 CONTAMINATION DEBUG] Writing ref_h_115 = 0
 [Section13] Reference results stored with ref_ prefix for downstream sections
 [S13 DEBUG] Total Reference results stored: 34
 [Section13] Reference Model calculations complete
 [Section13] ✅ Reference Model complete
 [Section13] 🔄 Starting Target Model calculations...
 🔍 [S13-CONTEXT] Creating target context: g_118="Volume by Schedule" from TargetState
 🔍 [S13-CONTEXT] TargetState.g_118="Volume by Schedule", ReferenceState.g_118="Volume Constant"
 [Section13] Running Target Model calculations...
 [S13] TGT HEATING: system=Heatpump, ted=119173.73172599022, afue=0.98, cop=3.663540445486518
 🔍 [S13-VENT] calculateVentilationRates: ventMethod="Volume by Schedule", ach(l_118)=3, ratePerPerson(d_119)=14, volume(d_105)=8000
 🔍 [S13-VENT] isReferenceCalculation=false, hasContext=true
 🔍 [S13-VENT] calculateVentilationValues: ventMethod="Volume by Schedule", ach(l_118)=3, ratePerPerson(d_119)=14, volume(d_105)=8000
 🔍 [S13-VENT] Supporting values: occupants(d_63)=126, occupiedHours(i_63)=4380, totalHours(j_63)=8760
 ✅ [S13-VENT] Final d_120 result: 3333.333333333333 L/s (from method="Volume by Schedule", ach=3, volume=8000)
 [Section13] 🧊 COOLING CALC: mode=TGT, coolingSystemType="Cooling", heatingType="Heatpump", isCoolingActive=true, coolingDemand=10192.893604542265
 [Section13] 🧊 COOLING RESULTS: d_117=3826.8214105081656, j_116=2.663540445486518, l_116=0, l_114=6366.0721940341
2 [S14 LISTENER] 🔥 d_122 changed - triggering calculateAll() + UI update
 [S15] 🎯 TGT S03 CLIMATE READ: h_23=22, d_23=-26, d_24=30, h_24=24
 [StateManager] 🎯 h_10 setValue: "117.09732768567436" (state: calculated)
 [StateManager] h_10 setValue stack trace:
setValue @ 4011-StateManager.js:346
calculateValues @ 4011-Section15.js:1832
calculateTargetModel @ 4011-Section15.js:1662
calculateAll @ 4011-Section15.js:1328
(anonymous) @ 4011-Section15.js:2121
(anonymous) @ 4011-StateManager.js:543
notifyListeners @ 4011-StateManager.js:541
setValue @ 4011-StateManager.js:419
setFieldValue @ 4011-Section13.js:636
calculateCoolingVentilation @ 4011-Section13.js:3272
calculateCoolingSystem @ 4011-Section13.js:3040
calculateTargetModel @ 4011-Section13.js:3560
calculateAll @ 4011-Section13.js:3403
calculateAndRefresh @ 4011-Section13.js:2368
(anonymous) @ 4011-Section13.js:2396
(anonymous) @ 4011-StateManager.js:543
notifyListeners @ 4011-StateManager.js:541
setValue @ 4011-StateManager.js:419
setCalculatedValue @ 4011-Section14.js:412
calculateValues @ 4011-Section14.js:1165
calculateTargetModel @ 4011-Section14.js:1123
calculateAll @ 4011-Section14.js:944
(anonymous) @ 4011-Section14.js:1420
(anonymous) @ 4011-StateManager.js:543
notifyListeners @ 4011-StateManager.js:541
setValue @ 4011-StateManager.js:419
setFieldValue @ 4011-Section10.js:524
calculateUtilizationFactors @ 4011-Section10.js:2400
calculateTargetModel @ 4011-Section10.js:1850
calculateAll @ 4011-Section10.js:1824
(anonymous) @ 4011-Section10.js:2670
(anonymous) @ 4011-StateManager.js:543
notifyListeners @ 4011-StateManager.js:541
setValue @ 4011-StateManager.js:419
setCalculatedValue @ 4011-Section09.js:630
(anonymous) @ 4011-Section09.js:1839
calculateTargetModel @ 4011-Section09.js:1838
(anonymous) @ 4011-Section09.js:2166
(anonymous) @ 4011-StateManager.js:543
notifyListeners @ 4011-StateManager.js:541
setValue @ 4011-StateManager.js:419
setValue @ 4011-Section09.js:191
(anonymous) @ 4011-Section09.js:2541
 [S15] 🎯 TGT S03 CLIMATE READ: h_23=22, d_23=-26, d_24=30, h_24=24
 [StateManager] 🎯 h_10 setValue: "117.09732768567436" (state: calculated)
 [StateManager] h_10 setValue stack trace:
setValue @ 4011-StateManager.js:346
calculateValues @ 4011-Section15.js:1832
calculateTargetModel @ 4011-Section15.js:1662
calculateAll @ 4011-Section15.js:1328
(anonymous) @ 4011-Section15.js:2121
(anonymous) @ 4011-StateManager.js:543
notifyListeners @ 4011-StateManager.js:541
setValue @ 4011-StateManager.js:419
setFieldValue @ 4011-Section13.js:636
calculateCoolingVentilation @ 4011-Section13.js:3272
calculateCoolingSystem @ 4011-Section13.js:3040
calculateTargetModel @ 4011-Section13.js:3560
calculateAll @ 4011-Section13.js:3403
calculateAndRefresh @ 4011-Section13.js:2368
(anonymous) @ 4011-Section13.js:2396
(anonymous) @ 4011-StateManager.js:543
notifyListeners @ 4011-StateManager.js:541
setValue @ 4011-StateManager.js:419
setCalculatedValue @ 4011-Section14.js:412
calculateValues @ 4011-Section14.js:1165
calculateTargetModel @ 4011-Section14.js:1123
calculateAll @ 4011-Section14.js:944
(anonymous) @ 4011-Section14.js:1420
(anonymous) @ 4011-StateManager.js:543
notifyListeners @ 4011-StateManager.js:541
setValue @ 4011-StateManager.js:419
setFieldValue @ 4011-Section10.js:524
calculateUtilizationFactors @ 4011-Section10.js:2400
calculateTargetModel @ 4011-Section10.js:1850
calculateAll @ 4011-Section10.js:1824
(anonymous) @ 4011-Section10.js:2670
(anonymous) @ 4011-StateManager.js:543
notifyListeners @ 4011-StateManager.js:541
setValue @ 4011-StateManager.js:419
setCalculatedValue @ 4011-Section09.js:630
(anonymous) @ 4011-Section09.js:1839
calculateTargetModel @ 4011-Section09.js:1838
(anonymous) @ 4011-Section09.js:2166
(anonymous) @ 4011-StateManager.js:543
notifyListeners @ 4011-StateManager.js:541
setValue @ 4011-StateManager.js:419
setValue @ 4011-Section09.js:191
(anonymous) @ 4011-Section09.js:2541
 [S15] 🎯 TGT S03 CLIMATE READ: h_23=22, d_23=-26, d_24=30, h_24=24
 [S04] S15 target electricity changed: d_136
 [S04] Starting dual-engine Excel-compliant calculations
 [S04] Row 32 Subtotals - F32: 132938, G32: 6779.838, J32: 164830.64322243445, K32: 8406.362804344157
 [S04] j_32 update: 164830.64322243445
 [S01] j_32 listener: 167121.30607299446 → 164830.64322243445
 [S01] 🕐 j_32 listener timing: StateManager current j_32 = 164830.64322243445
2 🔄 [S05] updateCalculatedDisplayValues: mode=target
 [S15] 🎯 TGT S03 CLIMATE READ: h_23=22, d_23=-26, d_24=30, h_24=24
 [StateManager] 🎯 h_10 setValue: "115.49232288567435" (state: calculated)
4011-StateManager.js:346 [StateManager] h_10 setValue stack trace:
setValue @ 4011-StateManager.js:346
calculateValues @ 4011-Section15.js:1832
calculateTargetModel @ 4011-Section15.js:1662
calculateAll @ 4011-Section15.js:1328
(anonymous) @ 4011-Section15.js:2121
(anonymous) @ 4011-StateManager.js:543
notifyListeners @ 4011-StateManager.js:541
setValue @ 4011-StateManager.js:419
setCalculatedValue @ 4011-Section04.js:96
calculateRow32 @ 4011-Section04.js:1026
calculateTargetModel @ 4011-Section04.js:1620
calculateAll @ 4011-Section04.js:1586
(anonymous) @ 4011-Section04.js:2483
(anonymous) @ 4011-StateManager.js:543
notifyListeners @ 4011-StateManager.js:541
setValue @ 4011-StateManager.js:419
setTargetValue @ 4011-Section15.js:146
calculateValues @ 4011-Section15.js:1810
calculateTargetModel @ 4011-Section15.js:1662
calculateAll @ 4011-Section15.js:1328
(anonymous) @ 4011-Section15.js:2121
(anonymous) @ 4011-StateManager.js:543
notifyListeners @ 4011-StateManager.js:541
setValue @ 4011-StateManager.js:419
setFieldValue @ 4011-Section13.js:636
updateTargetModelDOMValues @ 4011-Section13.js:3614
calculateTargetModel @ 4011-Section13.js:3570
calculateAll @ 4011-Section13.js:3403
calculateAndRefresh @ 4011-Section13.js:2368
(anonymous) @ 4011-Section13.js:2396
(anonymous) @ 4011-StateManager.js:543
notifyListeners @ 4011-StateManager.js:541
setValue @ 4011-StateManager.js:419
setCalculatedValue @ 4011-Section14.js:412
calculateValues @ 4011-Section14.js:1165
calculateTargetModel @ 4011-Section14.js:1123
calculateAll @ 4011-Section14.js:944
(anonymous) @ 4011-Section14.js:1420
(anonymous) @ 4011-StateManager.js:543
notifyListeners @ 4011-StateManager.js:541
setValue @ 4011-StateManager.js:419
setFieldValue @ 4011-Section10.js:524
calculateUtilizationFactors @ 4011-Section10.js:2400
calculateTargetModel @ 4011-Section10.js:1850
calculateAll @ 4011-Section10.js:1824
(anonymous) @ 4011-Section10.js:2670
(anonymous) @ 4011-StateManager.js:543
notifyListeners @ 4011-StateManager.js:541
setValue @ 4011-StateManager.js:419
setCalculatedValue @ 4011-Section09.js:630
(anonymous) @ 4011-Section09.js:1839
calculateTargetModel @ 4011-Section09.js:1838
(anonymous) @ 4011-Section09.js:2166
(anonymous) @ 4011-StateManager.js:543
notifyListeners @ 4011-StateManager.js:541
setValue @ 4011-StateManager.js:419
setValue @ 4011-Section09.js:191
(anonymous) @ 4011-Section09.js:2541
4011-Section15.js:1750 [S15] 🎯 TGT S03 CLIMATE READ: h_23=22, d_23=-26, d_24=30, h_24=24
4011-StateManager.js:343 [StateManager] 🎯 h_10 setValue: "115.49232288567435" (state: calculated)
4011-StateManager.js:346 [StateManager] h_10 setValue stack trace:
setValue @ 4011-StateManager.js:346
calculateValues @ 4011-Section15.js:1832
calculateTargetModel @ 4011-Section15.js:1662
calculateAll @ 4011-Section15.js:1328
(anonymous) @ 4011-Section15.js:2121
(anonymous) @ 4011-StateManager.js:543
notifyListeners @ 4011-StateManager.js:541
setValue @ 4011-StateManager.js:419
calculateValues @ 4011-Section15.js:1832
calculateTargetModel @ 4011-Section15.js:1662
calculateAll @ 4011-Section15.js:1328
(anonymous) @ 4011-Section15.js:2121
(anonymous) @ 4011-StateManager.js:543
notifyListeners @ 4011-StateManager.js:541
setValue @ 4011-StateManager.js:419
setCalculatedValue @ 4011-Section04.js:96
calculateRow32 @ 4011-Section04.js:1026
calculateTargetModel @ 4011-Section04.js:1620
calculateAll @ 4011-Section04.js:1586
(anonymous) @ 4011-Section04.js:2483
(anonymous) @ 4011-StateManager.js:543
notifyListeners @ 4011-StateManager.js:541
setValue @ 4011-StateManager.js:419
setTargetValue @ 4011-Section15.js:146
calculateValues @ 4011-Section15.js:1810
calculateTargetModel @ 4011-Section15.js:1662
calculateAll @ 4011-Section15.js:1328
(anonymous) @ 4011-Section15.js:2121
(anonymous) @ 4011-StateManager.js:543
notifyListeners @ 4011-StateManager.js:541
setValue @ 4011-StateManager.js:419
setFieldValue @ 4011-Section13.js:636
updateTargetModelDOMValues @ 4011-Section13.js:3614
calculateTargetModel @ 4011-Section13.js:3570
calculateAll @ 4011-Section13.js:3403
calculateAndRefresh @ 4011-Section13.js:2368
(anonymous) @ 4011-Section13.js:2396
(anonymous) @ 4011-StateManager.js:543
notifyListeners @ 4011-StateManager.js:541
setValue @ 4011-StateManager.js:419
setCalculatedValue @ 4011-Section14.js:412
calculateValues @ 4011-Section14.js:1165
calculateTargetModel @ 4011-Section14.js:1123
calculateAll @ 4011-Section14.js:944
(anonymous) @ 4011-Section14.js:1420
(anonymous) @ 4011-StateManager.js:543
notifyListeners @ 4011-StateManager.js:541
setValue @ 4011-StateManager.js:419
setFieldValue @ 4011-Section10.js:524
calculateUtilizationFactors @ 4011-Section10.js:2400
calculateTargetModel @ 4011-Section10.js:1850
calculateAll @ 4011-Section10.js:1824
(anonymous) @ 4011-Section10.js:2670
(anonymous) @ 4011-StateManager.js:543
notifyListeners @ 4011-StateManager.js:541
setValue @ 4011-StateManager.js:419
setCalculatedValue @ 4011-Section09.js:630
(anonymous) @ 4011-Section09.js:1839
calculateTargetModel @ 4011-Section09.js:1838
(anonymous) @ 4011-Section09.js:2166
(anonymous) @ 4011-StateManager.js:543
notifyListeners @ 4011-StateManager.js:541
setValue @ 4011-StateManager.js:419
setValue @ 4011-Section09.js:191
(anonymous) @ 4011-Section09.js:2541
4011-Section15.js:1750 [S15] 🎯 TGT S03 CLIMATE READ: h_23=22, d_23=-26, d_24=30, h_24=24
4011-StateManager.js:343 [StateManager] 🎯 h_10 setValue: "115.49232288567435" (state: calculated)
4011-StateManager.js:346 [StateManager] h_10 setValue stack trace:
setValue @ 4011-StateManager.js:346
calculateValues @ 4011-Section15.js:1832
calculateTargetModel @ 4011-Section15.js:1662
calculateAll @ 4011-Section15.js:1328
(anonymous) @ 4011-Section15.js:2121
(anonymous) @ 4011-StateManager.js:543
notifyListeners @ 4011-StateManager.js:541
setValue @ 4011-StateManager.js:419
calculateValues @ 4011-Section15.js:1832
calculateTargetModel @ 4011-Section15.js:1662
calculateAll @ 4011-Section15.js:1328
(anonymous) @ 4011-Section15.js:2121
(anonymous) @ 4011-StateManager.js:543
notifyListeners @ 4011-StateManager.js:541
setValue @ 4011-StateManager.js:419
setCalculatedValue @ 4011-Section04.js:96
calculateRow32 @ 4011-Section04.js:1026
calculateTargetModel @ 4011-Section04.js:1620
calculateAll @ 4011-Section04.js:1586
(anonymous) @ 4011-Section04.js:2483
(anonymous) @ 4011-StateManager.js:543
notifyListeners @ 4011-StateManager.js:541
setValue @ 4011-StateManager.js:419
setTargetValue @ 4011-Section15.js:146
calculateValues @ 4011-Section15.js:1810
calculateTargetModel @ 4011-Section15.js:1662
calculateAll @ 4011-Section15.js:1328
(anonymous) @ 4011-Section15.js:2121
(anonymous) @ 4011-StateManager.js:543
notifyListeners @ 4011-StateManager.js:541
setValue @ 4011-StateManager.js:419
setFieldValue @ 4011-Section13.js:636
updateTargetModelDOMValues @ 4011-Section13.js:3614
calculateTargetModel @ 4011-Section13.js:3570
calculateAll @ 4011-Section13.js:3403
calculateAndRefresh @ 4011-Section13.js:2368
(anonymous) @ 4011-Section13.js:2396
(anonymous) @ 4011-StateManager.js:543
notifyListeners @ 4011-StateManager.js:541
setValue @ 4011-StateManager.js:419
setCalculatedValue @ 4011-Section14.js:412
calculateValues @ 4011-Section14.js:1165
calculateTargetModel @ 4011-Section14.js:1123
calculateAll @ 4011-Section14.js:944
(anonymous) @ 4011-Section14.js:1420
(anonymous) @ 4011-StateManager.js:543
notifyListeners @ 4011-StateManager.js:541
setValue @ 4011-StateManager.js:419
setFieldValue @ 4011-Section10.js:524
calculateUtilizationFactors @ 4011-Section10.js:2400
calculateTargetModel @ 4011-Section10.js:1850
calculateAll @ 4011-Section10.js:1824
(anonymous) @ 4011-Section10.js:2670
(anonymous) @ 4011-StateManager.js:543
notifyListeners @ 4011-StateManager.js:541
setValue @ 4011-StateManager.js:419
setCalculatedValue @ 4011-Section09.js:630
(anonymous) @ 4011-Section09.js:1839
calculateTargetModel @ 4011-Section09.js:1838
(anonymous) @ 4011-Section09.js:2166
(anonymous) @ 4011-StateManager.js:543
notifyListeners @ 4011-StateManager.js:541
setValue @ 4011-StateManager.js:419
setValue @ 4011-Section09.js:191
(anonymous) @ 4011-Section09.js:2541
4011-Section15.js:1750 [S15] 🎯 TGT S03 CLIMATE READ: h_23=22, d_23=-26, d_24=30, h_24=24
4011-StateManager.js:343 [StateManager] 🎯 h_10 setValue: "115.49232288567435" (state: calculated)
4011-StateManager.js:346 [StateManager] h_10 setValue stack trace:
setValue @ 4011-StateManager.js:346
calculateValues @ 4011-Section15.js:1832
calculateTargetModel @ 4011-Section15.js:1662
calculateAll @ 4011-Section15.js:1328
(anonymous) @ 4011-Section15.js:2121
(anonymous) @ 4011-StateManager.js:543
notifyListeners @ 4011-StateManager.js:541
setValue @ 4011-StateManager.js:419
setCalculatedValue @ 4011-Section04.js:96
calculateRow32 @ 4011-Section04.js:1026
calculateTargetModel @ 4011-Section04.js:1620
calculateAll @ 4011-Section04.js:1586
(anonymous) @ 4011-Section04.js:2483
(anonymous) @ 4011-StateManager.js:543
notifyListeners @ 4011-StateManager.js:541
setValue @ 4011-StateManager.js:419
setTargetValue @ 4011-Section15.js:146
calculateValues @ 4011-Section15.js:1810
calculateTargetModel @ 4011-Section15.js:1662
calculateAll @ 4011-Section15.js:1328
(anonymous) @ 4011-Section15.js:2121
(anonymous) @ 4011-StateManager.js:543
notifyListeners @ 4011-StateManager.js:541
setValue @ 4011-StateManager.js:419
setFieldValue @ 4011-Section13.js:636
updateTargetModelDOMValues @ 4011-Section13.js:3614
calculateTargetModel @ 4011-Section13.js:3570
calculateAll @ 4011-Section13.js:3403
calculateAndRefresh @ 4011-Section13.js:2368
(anonymous) @ 4011-Section13.js:2396
(anonymous) @ 4011-StateManager.js:543
notifyListeners @ 4011-StateManager.js:541
setValue @ 4011-StateManager.js:419
setCalculatedValue @ 4011-Section14.js:412
calculateValues @ 4011-Section14.js:1165
calculateTargetModel @ 4011-Section14.js:1123
calculateAll @ 4011-Section14.js:944
(anonymous) @ 4011-Section14.js:1420
(anonymous) @ 4011-StateManager.js:543
notifyListeners @ 4011-StateManager.js:541
setValue @ 4011-StateManager.js:419
setFieldValue @ 4011-Section10.js:524
calculateUtilizationFactors @ 4011-Section10.js:2400
calculateTargetModel @ 4011-Section10.js:1850
calculateAll @ 4011-Section10.js:1824
(anonymous) @ 4011-Section10.js:2670
(anonymous) @ 4011-StateManager.js:543
notifyListeners @ 4011-StateManager.js:541
setValue @ 4011-StateManager.js:419
setCalculatedValue @ 4011-Section09.js:630
(anonymous) @ 4011-Section09.js:1839
calculateTargetModel @ 4011-Section09.js:1838
(anonymous) @ 4011-Section09.js:2166
(anonymous) @ 4011-StateManager.js:543
notifyListeners @ 4011-StateManager.js:541
setValue @ 4011-StateManager.js:419
setValue @ 4011-Section09.js:191
(anonymous) @ 4011-Section09.js:2541
4011-Section04.js:1018 [S04] Row 32 Subtotals - F32: 132938, G32: 6779.838, J32: 301986.051518286, K32: 15401.288627432587
4011-Section04.js:1668 [S04] Reference model calculations complete
4011-Section04.js:1674 [S04DB] storeReference: ref_j_32=301986.051518286, ref_k_32=15401.288627432587 | current target j_32=164830.64322243445, k_32=8406.362804344157
4011-Section04.js:493 [S04] 🔄 Updating calculated display values for target mode
4011-Section04.js:501 [S04DB] displayContext mode=target j_32=164830.64322243445 ref_j_32=301986.051518286 k_32=8406.362804344157 ref_k_32=15401.288627432587
 [S04 DEBUG] Target mode - j_32: 164830.64322243445
 [S04 DEBUG] Target mode - k_32: 8406.362804344157
 [S04 DEBUG] Target mode - l_27: 51
 [S04] Calculated display values updated for target mode
 [S04] Dual-engine calculations completed successfully
 [S04] 🔄 Updating calculated display values for target mode
 [S04DB] displayContext mode=target j_32=164830.64322243445 ref_j_32=301986.051518286 k_32=8406.362804344157 ref_k_32=15401.288627432587
 [S04 DEBUG] Target mode - j_32: 164830.64322243445
 [S04 DEBUG] Target mode - k_32: 8406.362804344157
 [S04 DEBUG] Target mode - l_27: 51
 [S04] Calculated display values updated for target mode
 [StateManager] 🎯 h_10 setValue: "115.49232288567435" (state: calculated)
 [StateManager] h_10 setValue stack trace:
setValue @ 4011-StateManager.js:346
calculateValues @ 4011-Section15.js:1832
calculateTargetModel @ 4011-Section15.js:1662
calculateAll @ 4011-Section15.js:1328
(anonymous) @ 4011-Section15.js:2121
(anonymous) @ 4011-StateManager.js:543
notifyListeners @ 4011-StateManager.js:541
setValue @ 4011-StateManager.js:419
setFieldValue @ 4011-Section13.js:636
updateTargetModelDOMValues @ 4011-Section13.js:3614
calculateTargetModel @ 4011-Section13.js:3570
calculateAll @ 4011-Section13.js:3403
calculateAndRefresh @ 4011-Section13.js:2368
(anonymous) @ 4011-Section13.js:2396
(anonymous) @ 4011-StateManager.js:543
notifyListeners @ 4011-StateManager.js:541
setValue @ 4011-StateManager.js:419
setCalculatedValue @ 4011-Section14.js:412
calculateValues @ 4011-Section14.js:1165
calculateTargetModel @ 4011-Section14.js:1123
calculateAll @ 4011-Section14.js:944
(anonymous) @ 4011-Section14.js:1420
(anonymous) @ 4011-StateManager.js:543
notifyListeners @ 4011-StateManager.js:541
setValue @ 4011-StateManager.js:419
setFieldValue @ 4011-Section10.js:524
calculateUtilizationFactors @ 4011-Section10.js:2400
calculateTargetModel @ 4011-Section10.js:1850
calculateAll @ 4011-Section10.js:1824
(anonymous) @ 4011-Section10.js:2670
(anonymous) @ 4011-StateManager.js:543
notifyListeners @ 4011-StateManager.js:541
setValue @ 4011-StateManager.js:419
setCalculatedValue @ 4011-Section09.js:630
(anonymous) @ 4011-Section09.js:1839
calculateTargetModel @ 4011-Section09.js:1838
(anonymous) @ 4011-Section09.js:2166
(anonymous) @ 4011-StateManager.js:543
notifyListeners @ 4011-StateManager.js:541
setValue @ 4011-StateManager.js:419
setValue @ 4011-Section09.js:191
(anonymous) @ 4011-Section09.js:2541
 [S15] 🎯 TGT S03 CLIMATE READ: h_23=22, d_23=-26, d_24=30, h_24=24
 [StateManager] 🎯 h_10 setValue: "115.49232288567435" (state: calculated)
 [StateManager] h_10 setValue stack trace:
setValue @ 4011-StateManager.js:346
calculateValues @ 4011-Section15.js:1832
calculateTargetModel @ 4011-Section15.js:1662
calculateAll @ 4011-Section15.js:1328
(anonymous) @ 4011-Section15.js:2121
(anonymous) @ 4011-StateManager.js:543
notifyListeners @ 4011-StateManager.js:541
setValue @ 4011-StateManager.js:419
setFieldValue @ 4011-Section13.js:636
updateTargetModelDOMValues @ 4011-Section13.js:3614
calculateTargetModel @ 4011-Section13.js:3570
calculateAll @ 4011-Section13.js:3403
calculateAndRefresh @ 4011-Section13.js:2368
(anonymous) @ 4011-Section13.js:2396
(anonymous) @ 4011-StateManager.js:543
notifyListeners @ 4011-StateManager.js:541
setValue @ 4011-StateManager.js:419
setCalculatedValue @ 4011-Section14.js:412
calculateValues @ 4011-Section14.js:1165
calculateTargetModel @ 4011-Section14.js:1123
calculateAll @ 4011-Section14.js:944
(anonymous) @ 4011-Section14.js:1420
(anonymous) @ 4011-StateManager.js:543
notifyListeners @ 4011-StateManager.js:541
setValue @ 4011-StateManager.js:419
setFieldValue @ 4011-Section10.js:524
calculateUtilizationFactors @ 4011-Section10.js:2400
calculateTargetModel @ 4011-Section10.js:1850
calculateAll @ 4011-Section10.js:1824
(anonymous) @ 4011-Section10.js:2670
(anonymous) @ 4011-StateManager.js:543
notifyListeners @ 4011-StateManager.js:541
setValue @ 4011-StateManager.js:419
setCalculatedValue @ 4011-Section09.js:630
(anonymous) @ 4011-Section09.js:1839
calculateTargetModel @ 4011-Section09.js:1838
(anonymous) @ 4011-Section09.js:2166
(anonymous) @ 4011-StateManager.js:543
notifyListeners @ 4011-StateManager.js:541
setValue @ 4011-StateManager.js:419
setValue @ 4011-Section09.js:191
(anonymous) @ 4011-Section09.js:2541
2 [S14 LISTENER] 🔥 d_122 changed - triggering calculateAll() + UI update
 [S15] 🎯 TGT S03 CLIMATE READ: h_23=22, d_23=-26, d_24=30, h_24=24
 [StateManager] 🎯 h_10 setValue: "115.49232288567435" (state: calculated)
 [StateManager] h_10 setValue stack trace:
setValue @ 4011-StateManager.js:346
calculateValues @ 4011-Section15.js:1832
calculateTargetModel @ 4011-Section15.js:1662
calculateAll @ 4011-Section15.js:1328
(anonymous) @ 4011-Section15.js:2121
(anonymous) @ 4011-StateManager.js:543
notifyListeners @ 4011-StateManager.js:541
setValue @ 4011-StateManager.js:419
setFieldValue @ 4011-Section13.js:636
updateTargetModelDOMValues @ 4011-Section13.js:3684
calculateTargetModel @ 4011-Section13.js:3570
calculateAll @ 4011-Section13.js:3403
calculateAndRefresh @ 4011-Section13.js:2368
(anonymous) @ 4011-Section13.js:2396
(anonymous) @ 4011-StateManager.js:543
notifyListeners @ 4011-StateManager.js:541
setValue @ 4011-StateManager.js:419
setCalculatedValue @ 4011-Section14.js:412
calculateValues @ 4011-Section14.js:1165
calculateTargetModel @ 4011-Section14.js:1123
calculateAll @ 4011-Section14.js:944
(anonymous) @ 4011-Section14.js:1420
(anonymous) @ 4011-StateManager.js:543
notifyListeners @ 4011-StateManager.js:541
setValue @ 4011-StateManager.js:419
setFieldValue @ 4011-Section10.js:524
calculateUtilizationFactors @ 4011-Section10.js:2400
calculateTargetModel @ 4011-Section10.js:1850
calculateAll @ 4011-Section10.js:1824
(anonymous) @ 4011-Section10.js:2670
(anonymous) @ 4011-StateManager.js:543
notifyListeners @ 4011-StateManager.js:541
setValue @ 4011-StateManager.js:419
setCalculatedValue @ 4011-Section09.js:630
(anonymous) @ 4011-Section09.js:1839
calculateTargetModel @ 4011-Section09.js:1838
(anonymous) @ 4011-Section09.js:2166
(anonymous) @ 4011-StateManager.js:543
notifyListeners @ 4011-StateManager.js:541
setValue @ 4011-StateManager.js:419
setValue @ 4011-Section09.js:191
(anonymous) @ 4011-Section09.js:2541
 [S15] 🎯 TGT S03 CLIMATE READ: h_23=22, d_23=-26, d_24=30, h_24=24
 [StateManager] 🎯 h_10 setValue: "115.49232288567435" (state: calculated)
 [StateManager] h_10 setValue stack trace:
setValue @ 4011-StateManager.js:346
calculateValues @ 4011-Section15.js:1832
calculateTargetModel @ 4011-Section15.js:1662
calculateAll @ 4011-Section15.js:1328
(anonymous) @ 4011-Section15.js:2121
(anonymous) @ 4011-StateManager.js:543
notifyListeners @ 4011-StateManager.js:541
setValue @ 4011-StateManager.js:419
setFieldValue @ 4011-Section13.js:636
updateTargetModelDOMValues @ 4011-Section13.js:3684
calculateTargetModel @ 4011-Section13.js:3570
calculateAll @ 4011-Section13.js:3403
calculateAndRefresh @ 4011-Section13.js:2368
(anonymous) @ 4011-Section13.js:2396
(anonymous) @ 4011-StateManager.js:543
notifyListeners @ 4011-StateManager.js:541
setValue @ 4011-StateManager.js:419
setCalculatedValue @ 4011-Section14.js:412
calculateValues @ 4011-Section14.js:1165
calculateTargetModel @ 4011-Section14.js:1123
calculateAll @ 4011-Section14.js:944
(anonymous) @ 4011-Section14.js:1420
(anonymous) @ 4011-StateManager.js:543
notifyListeners @ 4011-StateManager.js:541
setValue @ 4011-StateManager.js:419
setFieldValue @ 4011-Section10.js:524
calculateUtilizationFactors @ 4011-Section10.js:2400
calculateTargetModel @ 4011-Section10.js:1850
calculateAll @ 4011-Section10.js:1824
(anonymous) @ 4011-Section10.js:2670
(anonymous) @ 4011-StateManager.js:543
notifyListeners @ 4011-StateManager.js:541
setValue @ 4011-StateManager.js:419
setCalculatedValue @ 4011-Section09.js:630
(anonymous) @ 4011-Section09.js:1839
calculateTargetModel @ 4011-Section09.js:1838
(anonymous) @ 4011-Section09.js:2166
(anonymous) @ 4011-StateManager.js:543
notifyListeners @ 4011-StateManager.js:541
setValue @ 4011-StateManager.js:419
setValue @ 4011-Section09.js:191
(anonymous) @ 4011-Section09.js:2541
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
 🔍 [S13-CONTEXT] Creating reference context: g_118="Volume Constant" from ReferenceState
 🔍 [S13-CONTEXT] ReferenceState.g_118="Volume Constant", TargetState.g_118="Volume by Schedule"
 [Section13] Running Reference Model calculations...
 [S13 CONTAMINATION DEBUG] calculateReferenceModel: Using system type = Electricity
 [S13] REF HEATING: system=Electricity, ted=251391.1974742337, afue=0.9, cop=1
 [S13 REF DEBUG] About to calculate with heating system: Electricity
 [S13 REF DEBUG] Will S13 publish ref_d_113=Electricity?
 🔍 [S13-VENT] calculateVentilationRates: ventMethod="Volume Constant", ach(l_118)=3.5, ratePerPerson(d_119)=8.33, volume(d_105)=8000
 🔍 [S13-VENT] isReferenceCalculation=true, hasContext=true
 🔍 [S13-VENT] calculateVentilationValues: ventMethod="Volume Constant", ach(l_118)=3.5, ratePerPerson(d_119)=8.33, volume(d_105)=8000
 🔍 [S13-VENT] Supporting values: occupants(d_63)=126, occupiedHours(i_63)=4380, totalHours(j_63)=8760
 🔍 [S13-VENT] Volume Constant calculation: ventRateLs = (3.5 * 8000) / 3.6 = 7777.777777777777
 ✅ [S13-VENT] Final d_120 result: 7777.777777777777 L/s (from method="Volume Constant", ach=3.5, volume=8000)
 [Section13] 🧊 COOLING CALC: mode=REF, coolingSystemType="No Cooling", heatingType="Electricity", isCoolingActive=false, coolingDemand=9572.242304946165
 [S13 CONTAMINATION DEBUG] storeReferenceResults called during reference mode
 [S13 CONTAMINATION DEBUG] Reference heating system: Electricity
 [S13 CONTAMINATION DEBUG] Target heating system: Heatpump
 [S13 CONTAMINATION DEBUG] Reference h_115 (gas volume): 0
 [S13 CONTAMINATION DEBUG] Reference f_115 (oil volume): 0
 [S13 CONTAMINATION DEBUG] Writing ref_f_115 = 0
 [S13 CONTAMINATION DEBUG] Writing ref_h_115 = 0
 [Section13] Reference results stored with ref_ prefix for downstream sections
 [S13 DEBUG] Total Reference results stored: 34
 [Section13] Reference Model calculations complete
 [Section13] ✅ Reference Model complete
 [Section13] 🔄 Starting Target Model calculations...
 🔍 [S13-CONTEXT] Creating target context: g_118="Volume by Schedule" from TargetState
 🔍 [S13-CONTEXT] TargetState.g_118="Volume by Schedule", ReferenceState.g_118="Volume Constant"
 [Section13] Running Target Model calculations...
 [S13] TGT HEATING: system=Heatpump, ted=119173.73172599022, afue=0.98, cop=3.663540445486518
 🔍 [S13-VENT] calculateVentilationRates: ventMethod="Volume by Schedule", ach(l_118)=3, ratePerPerson(d_119)=14, volume(d_105)=8000
 🔍 [S13-VENT] isReferenceCalculation=false, hasContext=true
 🔍 [S13-VENT] calculateVentilationValues: ventMethod="Volume by Schedule", ach(l_118)=3, ratePerPerson(d_119)=14, volume(d_105)=8000
 🔍 [S13-VENT] Supporting values: occupants(d_63)=126, occupiedHours(i_63)=4380, totalHours(j_63)=8760
 ✅ [S13-VENT] Final d_120 result: 3333.333333333333 L/s (from method="Volume by Schedule", ach=3, volume=8000)
 [Section13] 🧊 COOLING CALC: mode=TGT, coolingSystemType="Cooling", heatingType="Heatpump", isCoolingActive=true, coolingDemand=9572.242304946165
 [S15] 🎯 TGT S03 CLIMATE READ: h_23=22, d_23=-26, d_24=30, h_24=24
 [S04] S15 target electricity changed: d_136
 [S04] Starting dual-engine Excel-compliant calculations
 [S04] Row 32 Subtotals - F32: 132938, G32: 6779.838, J32: 164597.62581109843, K32: 8394.47891636602
 [S04] j_32 update: 164597.62581109843
 [S01] j_32 listener: 164830.64322243445 → 164597.62581109843
 [S01] 🕐 j_32 listener timing: StateManager current j_32 = 164597.62581109843
2 🔄 [S05] updateCalculatedDisplayValues: mode=target
 [S15] 🎯 TGT S03 CLIMATE READ: h_23=22, d_23=-26, d_24=30, h_24=24
 [StateManager] 🎯 h_10 setValue: "115.32905395957009" (state: calculated)
 [StateManager] h_10 setValue stack trace:
setValue @ 4011-StateManager.js:346
calculateValues @ 4011-Section15.js:1832
calculateTargetModel @ 4011-Section15.js:1662
calculateAll @ 4011-Section15.js:1328
(anonymous) @ 4011-Section15.js:2121
(anonymous) @ 4011-StateManager.js:543
notifyListeners @ 4011-StateManager.js:541
setValue @ 4011-StateManager.js:419
setCalculatedValue @ 4011-Section04.js:96
calculateRow32 @ 4011-Section04.js:1026
calculateTargetModel @ 4011-Section04.js:1620
calculateAll @ 4011-Section04.js:1586
(anonymous) @ 4011-Section04.js:2483
(anonymous) @ 4011-StateManager.js:543
notifyListeners @ 4011-StateManager.js:541
setValue @ 4011-StateManager.js:419
setTargetValue @ 4011-Section15.js:146
calculateValues @ 4011-Section15.js:1810
calculateTargetModel @ 4011-Section15.js:1662
calculateAll @ 4011-Section15.js:1328
(anonymous) @ 4011-Section15.js:2121
(anonymous) @ 4011-StateManager.js:543
notifyListeners @ 4011-StateManager.js:541
setValue @ 4011-StateManager.js:419
setFieldValue @ 4011-Section13.js:636
calculateCoolingSystem @ 4011-Section13.js:3030
calculateTargetModel @ 4011-Section13.js:3560
calculateAll @ 4011-Section13.js:3403
calculateAndRefresh @ 4011-Section13.js:2368
(anonymous) @ 4011-Section13.js:2396
(anonymous) @ 4011-StateManager.js:543
notifyListeners @ 4011-StateManager.js:541
setValue @ 4011-StateManager.js:419
setCalculatedValue @ 4011-Section14.js:412
calculateValues @ 4011-Section14.js:1165
calculateTargetModel @ 4011-Section14.js:1123
calculateAll @ 4011-Section14.js:944
(anonymous) @ 4011-Section14.js:1420
(anonymous) @ 4011-StateManager.js:543
notifyListeners @ 4011-StateManager.js:541
setValue @ 4011-StateManager.js:419
setFieldValue @ 4011-Section10.js:524
calculateUtilizationFactors @ 4011-Section10.js:2400
calculateTargetModel @ 4011-Section10.js:1850
calculateAll @ 4011-Section10.js:1824
(anonymous) @ 4011-Section10.js:2670
(anonymous) @ 4011-StateManager.js:543
notifyListeners @ 4011-StateManager.js:541
setValue @ 4011-StateManager.js:419
setCalculatedValue @ 4011-Section09.js:630
(anonymous) @ 4011-Section09.js:1839
calculateTargetModel @ 4011-Section09.js:1838
(anonymous) @ 4011-Section09.js:2166
(anonymous) @ 4011-StateManager.js:543
notifyListeners @ 4011-StateManager.js:541
setValue @ 4011-StateManager.js:419
setValue @ 4011-Section09.js:191
(anonymous) @ 4011-Section09.js:2541
 [S15] 🎯 TGT S03 CLIMATE READ: h_23=22, d_23=-26, d_24=30, h_24=24
 [StateManager] 🎯 h_10 setValue: "115.32905395957009" (state: calculated)
 [StateManager] h_10 setValue stack trace:
setValue @ 4011-StateManager.js:346
calculateValues @ 4011-Section15.js:1832
calculateTargetModel @ 4011-Section15.js:1662
calculateAll @ 4011-Section15.js:1328
(anonymous) @ 4011-Section15.js:2121
(anonymous) @ 4011-StateManager.js:543
notifyListeners @ 4011-StateManager.js:541
setValue @ 4011-StateManager.js:419
calculateValues @ 4011-Section15.js:1832
calculateTargetModel @ 4011-Section15.js:1662
calculateAll @ 4011-Section15.js:1328
(anonymous) @ 4011-Section15.js:2121
(anonymous) @ 4011-StateManager.js:543
notifyListeners @ 4011-StateManager.js:541
setValue @ 4011-StateManager.js:419
setCalculatedValue @ 4011-Section04.js:96
calculateRow32 @ 4011-Section04.js:1026
calculateTargetModel @ 4011-Section04.js:1620
calculateAll @ 4011-Section04.js:1586
(anonymous) @ 4011-Section04.js:2483
(anonymous) @ 4011-StateManager.js:543
notifyListeners @ 4011-StateManager.js:541
setValue @ 4011-StateManager.js:419
setTargetValue @ 4011-Section15.js:146
calculateValues @ 4011-Section15.js:1810
calculateTargetModel @ 4011-Section15.js:1662
calculateAll @ 4011-Section15.js:1328
(anonymous) @ 4011-Section15.js:2121
(anonymous) @ 4011-StateManager.js:543
notifyListeners @ 4011-StateManager.js:541
setValue @ 4011-StateManager.js:419
setFieldValue @ 4011-Section13.js:636
calculateCoolingSystem @ 4011-Section13.js:3030
calculateTargetModel @ 4011-Section13.js:3560
calculateAll @ 4011-Section13.js:3403
calculateAndRefresh @ 4011-Section13.js:2368
(anonymous) @ 4011-Section13.js:2396
(anonymous) @ 4011-StateManager.js:543
notifyListeners @ 4011-StateManager.js:541
setValue @ 4011-StateManager.js:419
setCalculatedValue @ 4011-Section14.js:412
calculateValues @ 4011-Section14.js:1165
calculateTargetModel @ 4011-Section14.js:1123
calculateAll @ 4011-Section14.js:944
(anonymous) @ 4011-Section14.js:1420
(anonymous) @ 4011-StateManager.js:543
notifyListeners @ 4011-StateManager.js:541
setValue @ 4011-StateManager.js:419
setFieldValue @ 4011-Section10.js:524
calculateUtilizationFactors @ 4011-Section10.js:2400
calculateTargetModel @ 4011-Section10.js:1850
calculateAll @ 4011-Section10.js:1824
(anonymous) @ 4011-Section10.js:2670
(anonymous) @ 4011-StateManager.js:543
notifyListeners @ 4011-StateManager.js:541
setValue @ 4011-StateManager.js:419
setCalculatedValue @ 4011-Section09.js:630
(anonymous) @ 4011-Section09.js:1839
calculateTargetModel @ 4011-Section09.js:1838
(anonymous) @ 4011-Section09.js:2166
(anonymous) @ 4011-StateManager.js:543
notifyListeners @ 4011-StateManager.js:541
setValue @ 4011-StateManager.js:419
setValue @ 4011-Section09.js:191
(anonymous) @ 4011-Section09.js:2541
 [S15] 🎯 TGT S03 CLIMATE READ: h_23=22, d_23=-26, d_24=30, h_24=24
 [StateManager] 🎯 h_10 setValue: "115.32905395957009" (state: calculated)
 [StateManager] h_10 setValue stack trace:
setValue @ 4011-StateManager.js:346
calculateValues @ 4011-Section15.js:1832
calculateTargetModel @ 4011-Section15.js:1662
calculateAll @ 4011-Section15.js:1328
(anonymous) @ 4011-Section15.js:2121
(anonymous) @ 4011-StateManager.js:543
notifyListeners @ 4011-StateManager.js:541
setValue @ 4011-StateManager.js:419
calculateValues @ 4011-Section15.js:1832
calculateTargetModel @ 4011-Section15.js:1662
calculateAll @ 4011-Section15.js:1328
(anonymous) @ 4011-Section15.js:2121
(anonymous) @ 4011-StateManager.js:543
notifyListeners @ 4011-StateManager.js:541
setValue @ 4011-StateManager.js:419
setCalculatedValue @ 4011-Section04.js:96
calculateRow32 @ 4011-Section04.js:1026
calculateTargetModel @ 4011-Section04.js:1620
calculateAll @ 4011-Section04.js:1586
(anonymous) @ 4011-Section04.js:2483
(anonymous) @ 4011-StateManager.js:543
notifyListeners @ 4011-StateManager.js:541
setValue @ 4011-StateManager.js:419
setTargetValue @ 4011-Section15.js:146
calculateValues @ 4011-Section15.js:1810
calculateTargetModel @ 4011-Section15.js:1662
calculateAll @ 4011-Section15.js:1328
(anonymous) @ 4011-Section15.js:2121
(anonymous) @ 4011-StateManager.js:543
notifyListeners @ 4011-StateManager.js:541
setValue @ 4011-StateManager.js:419
setFieldValue @ 4011-Section13.js:636
calculateCoolingSystem @ 4011-Section13.js:3030
calculateTargetModel @ 4011-Section13.js:3560
calculateAll @ 4011-Section13.js:3403
calculateAndRefresh @ 4011-Section13.js:2368
(anonymous) @ 4011-Section13.js:2396
(anonymous) @ 4011-StateManager.js:543
notifyListeners @ 4011-StateManager.js:541
setValue @ 4011-StateManager.js:419
setCalculatedValue @ 4011-Section14.js:412
calculateValues @ 4011-Section14.js:1165
calculateTargetModel @ 4011-Section14.js:1123
calculateAll @ 4011-Section14.js:944
(anonymous) @ 4011-Section14.js:1420
(anonymous) @ 4011-StateManager.js:543
notifyListeners @ 4011-StateManager.js:541
setValue @ 4011-StateManager.js:419
setFieldValue @ 4011-Section10.js:524
calculateUtilizationFactors @ 4011-Section10.js:2400
calculateTargetModel @ 4011-Section10.js:1850
calculateAll @ 4011-Section10.js:1824
(anonymous) @ 4011-Section10.js:2670
(anonymous) @ 4011-StateManager.js:543
notifyListeners @ 4011-StateManager.js:541
setValue @ 4011-StateManager.js:419
setCalculatedValue @ 4011-Section09.js:630
(anonymous) @ 4011-Section09.js:1839
calculateTargetModel @ 4011-Section09.js:1838
(anonymous) @ 4011-Section09.js:2166
(anonymous) @ 4011-StateManager.js:543
notifyListeners @ 4011-StateManager.js:541
setValue @ 4011-StateManager.js:419
setValue @ 4011-Section09.js:191
(anonymous) @ 4011-Section09.js:2541
 [S15] 🎯 TGT S03 CLIMATE READ: h_23=22, d_23=-26, d_24=30, h_24=24
 [StateManager] 🎯 h_10 setValue: "115.32905395957009" (state: calculated)
 [StateManager] h_10 setValue stack trace:
setValue @ 4011-StateManager.js:346
calculateValues @ 4011-Section15.js:1832
calculateTargetModel @ 4011-Section15.js:1662
calculateAll @ 4011-Section15.js:1328
(anonymous) @ 4011-Section15.js:2121
(anonymous) @ 4011-StateManager.js:543
notifyListeners @ 4011-StateManager.js:541
setValue @ 4011-StateManager.js:419
setCalculatedValue @ 4011-Section04.js:96
calculateRow32 @ 4011-Section04.js:1026
calculateTargetModel @ 4011-Section04.js:1620
calculateAll @ 4011-Section04.js:1586
(anonymous) @ 4011-Section04.js:2483
(anonymous) @ 4011-StateManager.js:543
notifyListeners @ 4011-StateManager.js:541
setValue @ 4011-StateManager.js:419
setTargetValue @ 4011-Section15.js:146
calculateValues @ 4011-Section15.js:1810
calculateTargetModel @ 4011-Section15.js:1662
calculateAll @ 4011-Section15.js:1328
(anonymous) @ 4011-Section15.js:2121
(anonymous) @ 4011-StateManager.js:543
notifyListeners @ 4011-StateManager.js:541
setValue @ 4011-StateManager.js:419
setFieldValue @ 4011-Section13.js:636
calculateCoolingSystem @ 4011-Section13.js:3030
calculateTargetModel @ 4011-Section13.js:3560
calculateAll @ 4011-Section13.js:3403
calculateAndRefresh @ 4011-Section13.js:2368
(anonymous) @ 4011-Section13.js:2396
(anonymous) @ 4011-StateManager.js:543
notifyListeners @ 4011-StateManager.js:541
setValue @ 4011-StateManager.js:419
setCalculatedValue @ 4011-Section14.js:412
calculateValues @ 4011-Section14.js:1165
calculateTargetModel @ 4011-Section14.js:1123
calculateAll @ 4011-Section14.js:944
(anonymous) @ 4011-Section14.js:1420
(anonymous) @ 4011-StateManager.js:543
notifyListeners @ 4011-StateManager.js:541
setValue @ 4011-StateManager.js:419
setFieldValue @ 4011-Section10.js:524
calculateUtilizationFactors @ 4011-Section10.js:2400
calculateTargetModel @ 4011-Section10.js:1850
calculateAll @ 4011-Section10.js:1824
(anonymous) @ 4011-Section10.js:2670
(anonymous) @ 4011-StateManager.js:543
notifyListeners @ 4011-StateManager.js:541
setValue @ 4011-StateManager.js:419
setCalculatedValue @ 4011-Section09.js:630
(anonymous) @ 4011-Section09.js:1839
calculateTargetModel @ 4011-Section09.js:1838
(anonymous) @ 4011-Section09.js:2166
(anonymous) @ 4011-StateManager.js:543
notifyListeners @ 4011-StateManager.js:541
setValue @ 4011-StateManager.js:419
setValue @ 4011-Section09.js:191
(anonymous) @ 4011-Section09.js:2541
 [S04] Row 32 Subtotals - F32: 132938, G32: 6779.838, J32: 301986.051518286, K32: 15401.288627432587
 [S04] Reference model calculations complete
 [S04DB] storeReference: ref_j_32=301986.051518286, ref_k_32=15401.288627432587 | current target j_32=164597.62581109843, k_32=8394.47891636602
 [S04] 🔄 Updating calculated display values for target mode
 [S04DB] displayContext mode=target j_32=164597.62581109843 ref_j_32=301986.051518286 k_32=8394.47891636602 ref_k_32=15401.288627432587
 [S04 DEBUG] Target mode - j_32: 164597.62581109843
 [S04 DEBUG] Target mode - k_32: 8394.47891636602
 [S04 DEBUG] Target mode - l_27: 51
 [S04] Calculated display values updated for target mode
 [S04] Dual-engine calculations completed successfully
 [S04] 🔄 Updating calculated display values for target mode
 [S04DB] displayContext mode=target j_32=164597.62581109843 ref_j_32=301986.051518286 k_32=8394.47891636602 ref_k_32=15401.288627432587
 [S04 DEBUG] Target mode - j_32: 164597.62581109843
 [S04 DEBUG] Target mode - k_32: 8394.47891636602
 [S04 DEBUG] Target mode - l_27: 51
 [S04] Calculated display values updated for target mode
 [StateManager] 🎯 h_10 setValue: "115.32905395957009" (state: calculated)
 [StateManager] h_10 setValue stack trace:
setValue @ 4011-StateManager.js:346
calculateValues @ 4011-Section15.js:1832
calculateTargetModel @ 4011-Section15.js:1662
calculateAll @ 4011-Section15.js:1328
(anonymous) @ 4011-Section15.js:2121
(anonymous) @ 4011-StateManager.js:543
notifyListeners @ 4011-StateManager.js:541
setValue @ 4011-StateManager.js:419
setFieldValue @ 4011-Section13.js:636
calculateCoolingSystem @ 4011-Section13.js:3030
calculateTargetModel @ 4011-Section13.js:3560
calculateAll @ 4011-Section13.js:3403
calculateAndRefresh @ 4011-Section13.js:2368
(anonymous) @ 4011-Section13.js:2396
(anonymous) @ 4011-StateManager.js:543
notifyListeners @ 4011-StateManager.js:541
setValue @ 4011-StateManager.js:419
setCalculatedValue @ 4011-Section14.js:412
calculateValues @ 4011-Section14.js:1165
calculateTargetModel @ 4011-Section14.js:1123
calculateAll @ 4011-Section14.js:944
(anonymous) @ 4011-Section14.js:1420
(anonymous) @ 4011-StateManager.js:543
notifyListeners @ 4011-StateManager.js:541
setValue @ 4011-StateManager.js:419
setFieldValue @ 4011-Section10.js:524
calculateUtilizationFactors @ 4011-Section10.js:2400
calculateTargetModel @ 4011-Section10.js:1850
calculateAll @ 4011-Section10.js:1824
(anonymous) @ 4011-Section10.js:2670
(anonymous) @ 4011-StateManager.js:543
notifyListeners @ 4011-StateManager.js:541
setValue @ 4011-StateManager.js:419
setCalculatedValue @ 4011-Section09.js:630
(anonymous) @ 4011-Section09.js:1839
calculateTargetModel @ 4011-Section09.js:1838
(anonymous) @ 4011-Section09.js:2166
(anonymous) @ 4011-StateManager.js:543
notifyListeners @ 4011-StateManager.js:541
setValue @ 4011-StateManager.js:419
setValue @ 4011-Section09.js:191
(anonymous) @ 4011-Section09.js:2541
 [S15] 🎯 TGT S03 CLIMATE READ: h_23=22, d_23=-26, d_24=30, h_24=24
 [StateManager] 🎯 h_10 setValue: "115.32905395957009" (state: calculated)
 [StateManager] h_10 setValue stack trace:
setValue @ 4011-StateManager.js:346
calculateValues @ 4011-Section15.js:1832
calculateTargetModel @ 4011-Section15.js:1662
calculateAll @ 4011-Section15.js:1328
(anonymous) @ 4011-Section15.js:2121
(anonymous) @ 4011-StateManager.js:543
notifyListeners @ 4011-StateManager.js:541
setValue @ 4011-StateManager.js:419
setFieldValue @ 4011-Section13.js:636
calculateCoolingSystem @ 4011-Section13.js:3030
calculateTargetModel @ 4011-Section13.js:3560
calculateAll @ 4011-Section13.js:3403
calculateAndRefresh @ 4011-Section13.js:2368
(anonymous) @ 4011-Section13.js:2396
(anonymous) @ 4011-StateManager.js:543
notifyListeners @ 4011-StateManager.js:541
setValue @ 4011-StateManager.js:419
setCalculatedValue @ 4011-Section14.js:412
calculateValues @ 4011-Section14.js:1165
calculateTargetModel @ 4011-Section14.js:1123
calculateAll @ 4011-Section14.js:944
(anonymous) @ 4011-Section14.js:1420
(anonymous) @ 4011-StateManager.js:543
notifyListeners @ 4011-StateManager.js:541
setValue @ 4011-StateManager.js:419
setFieldValue @ 4011-Section10.js:524
calculateUtilizationFactors @ 4011-Section10.js:2400
calculateTargetModel @ 4011-Section10.js:1850
calculateAll @ 4011-Section10.js:1824
(anonymous) @ 4011-Section10.js:2670
(anonymous) @ 4011-StateManager.js:543
notifyListeners @ 4011-StateManager.js:541
setValue @ 4011-StateManager.js:419
setCalculatedValue @ 4011-Section09.js:630
(anonymous) @ 4011-Section09.js:1839
calculateTargetModel @ 4011-Section09.js:1838
(anonymous) @ 4011-Section09.js:2166
(anonymous) @ 4011-StateManager.js:543
notifyListeners @ 4011-StateManager.js:541
setValue @ 4011-StateManager.js:419
setValue @ 4011-Section09.js:191
(anonymous) @ 4011-Section09.js:2541
 [Section13] 🧊 COOLING RESULTS: d_117=3593.80399917213, j_116=2.663540445486518, l_116=0, l_114=5978.438305774035
2 [S14 LISTENER] 🔥 d_122 changed - triggering calculateAll() + UI update
 [S15] 🎯 TGT S03 CLIMATE READ: h_23=22, d_23=-26, d_24=30, h_24=24
 [StateManager] 🎯 h_10 setValue: "115.32905395957009" (state: calculated)
 [StateManager] h_10 setValue stack trace:
setValue @ 4011-StateManager.js:346
calculateValues @ 4011-Section15.js:1832
calculateTargetModel @ 4011-Section15.js:1662
calculateAll @ 4011-Section15.js:1328
(anonymous) @ 4011-Section15.js:2121
(anonymous) @ 4011-StateManager.js:543
notifyListeners @ 4011-StateManager.js:541
setValue @ 4011-StateManager.js:419
setFieldValue @ 4011-Section13.js:636
calculateCoolingVentilation @ 4011-Section13.js:3272
calculateCoolingSystem @ 4011-Section13.js:3040
calculateTargetModel @ 4011-Section13.js:3560
calculateAll @ 4011-Section13.js:3403
calculateAndRefresh @ 4011-Section13.js:2368
(anonymous) @ 4011-Section13.js:2396
(anonymous) @ 4011-StateManager.js:543
notifyListeners @ 4011-StateManager.js:541
setValue @ 4011-StateManager.js:419
setCalculatedValue @ 4011-Section14.js:412
calculateValues @ 4011-Section14.js:1165
calculateTargetModel @ 4011-Section14.js:1123
calculateAll @ 4011-Section14.js:944
(anonymous) @ 4011-Section14.js:1420
(anonymous) @ 4011-StateManager.js:543
notifyListeners @ 4011-StateManager.js:541
setValue @ 4011-StateManager.js:419
setFieldValue @ 4011-Section10.js:524
calculateUtilizationFactors @ 4011-Section10.js:2400
calculateTargetModel @ 4011-Section10.js:1850
calculateAll @ 4011-Section10.js:1824
(anonymous) @ 4011-Section10.js:2670
(anonymous) @ 4011-StateManager.js:543
notifyListeners @ 4011-StateManager.js:541
setValue @ 4011-StateManager.js:419
setCalculatedValue @ 4011-Section09.js:630
(anonymous) @ 4011-Section09.js:1839
calculateTargetModel @ 4011-Section09.js:1838
(anonymous) @ 4011-Section09.js:2166
(anonymous) @ 4011-StateManager.js:543
notifyListeners @ 4011-StateManager.js:541
setValue @ 4011-StateManager.js:419
setValue @ 4011-Section09.js:191
(anonymous) @ 4011-Section09.js:2541
 [S15] 🎯 TGT S03 CLIMATE READ: h_23=22, d_23=-26, d_24=30, h_24=24
4011-StateManager.js:343 [StateManager] 🎯 h_10 setValue: "115.32905395957009" (state: calculated)
4011-StateManager.js:346 [StateManager] h_10 setValue stack trace:
setValue @ 4011-StateManager.js:346
calculateValues @ 4011-Section15.js:1832
calculateTargetModel @ 4011-Section15.js:1662
calculateAll @ 4011-Section15.js:1328
(anonymous) @ 4011-Section15.js:2121
(anonymous) @ 4011-StateManager.js:543
notifyListeners @ 4011-StateManager.js:541
setValue @ 4011-StateManager.js:419
setFieldValue @ 4011-Section13.js:636
calculateCoolingVentilation @ 4011-Section13.js:3272
calculateCoolingSystem @ 4011-Section13.js:3040
calculateTargetModel @ 4011-Section13.js:3560
calculateAll @ 4011-Section13.js:3403
calculateAndRefresh @ 4011-Section13.js:2368
(anonymous) @ 4011-Section13.js:2396
(anonymous) @ 4011-StateManager.js:543
notifyListeners @ 4011-StateManager.js:541
setValue @ 4011-StateManager.js:419
setCalculatedValue @ 4011-Section14.js:412
calculateValues @ 4011-Section14.js:1165
calculateTargetModel @ 4011-Section14.js:1123
calculateAll @ 4011-Section14.js:944
(anonymous) @ 4011-Section14.js:1420
(anonymous) @ 4011-StateManager.js:543
notifyListeners @ 4011-StateManager.js:541
setValue @ 4011-StateManager.js:419
setFieldValue @ 4011-Section10.js:524
calculateUtilizationFactors @ 4011-Section10.js:2400
calculateTargetModel @ 4011-Section10.js:1850
calculateAll @ 4011-Section10.js:1824
(anonymous) @ 4011-Section10.js:2670
(anonymous) @ 4011-StateManager.js:543
notifyListeners @ 4011-StateManager.js:541
setValue @ 4011-StateManager.js:419
setCalculatedValue @ 4011-Section09.js:630
(anonymous) @ 4011-Section09.js:1839
calculateTargetModel @ 4011-Section09.js:1838
(anonymous) @ 4011-Section09.js:2166
(anonymous) @ 4011-StateManager.js:543
notifyListeners @ 4011-StateManager.js:541
setValue @ 4011-StateManager.js:419
setValue @ 4011-Section09.js:191
(anonymous) @ 4011-Section09.js:2541
24011-Section14.js:1416 [S14 LISTENER] 🔥 d_122 changed - triggering calculateAll() + UI update
4011-Section15.js:1750 [S15] 🎯 TGT S03 CLIMATE READ: h_23=22, d_23=-26, d_24=30, h_24=24
4011-StateManager.js:343 [StateManager] 🎯 h_10 setValue: "115.32905395957009" (state: calculated)
4011-StateManager.js:346 [StateManager] h_10 setValue stack trace:
setValue @ 4011-StateManager.js:346
calculateValues @ 4011-Section15.js:1832
calculateTargetModel @ 4011-Section15.js:1662
calculateAll @ 4011-Section15.js:1328
(anonymous) @ 4011-Section15.js:2121
(anonymous) @ 4011-StateManager.js:543
notifyListeners @ 4011-StateManager.js:541
setValue @ 4011-StateManager.js:419
setFieldValue @ 4011-Section13.js:636
updateTargetModelDOMValues @ 4011-Section13.js:3684
calculateTargetModel @ 4011-Section13.js:3570
calculateAll @ 4011-Section13.js:3403
calculateAndRefresh @ 4011-Section13.js:2368
(anonymous) @ 4011-Section13.js:2396
(anonymous) @ 4011-StateManager.js:543
notifyListeners @ 4011-StateManager.js:541
setValue @ 4011-StateManager.js:419
setCalculatedValue @ 4011-Section14.js:412
calculateValues @ 4011-Section14.js:1165
calculateTargetModel @ 4011-Section14.js:1123
calculateAll @ 4011-Section14.js:944
(anonymous) @ 4011-Section14.js:1420
(anonymous) @ 4011-StateManager.js:543
notifyListeners @ 4011-StateManager.js:541
setValue @ 4011-StateManager.js:419
setFieldValue @ 4011-Section10.js:524
calculateUtilizationFactors @ 4011-Section10.js:2400
calculateTargetModel @ 4011-Section10.js:1850
calculateAll @ 4011-Section10.js:1824
(anonymous) @ 4011-Section10.js:2670
(anonymous) @ 4011-StateManager.js:543
notifyListeners @ 4011-StateManager.js:541
setValue @ 4011-StateManager.js:419
setCalculatedValue @ 4011-Section09.js:630
(anonymous) @ 4011-Section09.js:1839
calculateTargetModel @ 4011-Section09.js:1838
(anonymous) @ 4011-Section09.js:2166
(anonymous) @ 4011-StateManager.js:543
notifyListeners @ 4011-StateManager.js:541
setValue @ 4011-StateManager.js:419
setValue @ 4011-Section09.js:191
(anonymous) @ 4011-Section09.js:2541
4011-Section15.js:1750 [S15] 🎯 TGT S03 CLIMATE READ: h_23=22, d_23=-26, d_24=30, h_24=24
4011-StateManager.js:343 [StateManager] 🎯 h_10 setValue: "115.32905395957009" (state: calculated)
4011-StateManager.js:346 [StateManager] h_10 setValue stack trace:
setValue @ 4011-StateManager.js:346
calculateValues @ 4011-Section15.js:1832
calculateTargetModel @ 4011-Section15.js:1662
calculateAll @ 4011-Section15.js:1328
(anonymous) @ 4011-Section15.js:2121
(anonymous) @ 4011-StateManager.js:543
notifyListeners @ 4011-StateManager.js:541
setValue @ 4011-StateManager.js:419
setFieldValue @ 4011-Section13.js:636
updateTargetModelDOMValues @ 4011-Section13.js:3684
calculateTargetModel @ 4011-Section13.js:3570
calculateAll @ 4011-Section13.js:3403
calculateAndRefresh @ 4011-Section13.js:2368
(anonymous) @ 4011-Section13.js:2396
(anonymous) @ 4011-StateManager.js:543
notifyListeners @ 4011-StateManager.js:541
setValue @ 4011-StateManager.js:419
setCalculatedValue @ 4011-Section14.js:412
calculateValues @ 4011-Section14.js:1165
calculateTargetModel @ 4011-Section14.js:1123
calculateAll @ 4011-Section14.js:944
(anonymous) @ 4011-Section14.js:1420
(anonymous) @ 4011-StateManager.js:543
notifyListeners @ 4011-StateManager.js:541
setValue @ 4011-StateManager.js:419
setFieldValue @ 4011-Section10.js:524
calculateUtilizationFactors @ 4011-Section10.js:2400
calculateTargetModel @ 4011-Section10.js:1850
calculateAll @ 4011-Section10.js:1824
(anonymous) @ 4011-Section10.js:2670
(anonymous) @ 4011-StateManager.js:543
notifyListeners @ 4011-StateManager.js:541
setValue @ 4011-StateManager.js:419
setCalculatedValue @ 4011-Section09.js:630
(anonymous) @ 4011-Section09.js:1839
calculateTargetModel @ 4011-Section09.js:1838
(anonymous) @ 4011-Section09.js:2166
(anonymous) @ 4011-StateManager.js:543
notifyListeners @ 4011-StateManager.js:541
setValue @ 4011-StateManager.js:419
setValue @ 4011-Section09.js:191
(anonymous) @ 4011-Section09.js:2541
4011-Section13.js:3588 [Section13] Target Model calculations complete
4011-Section13.js:3404 [Section13] ✅ Target Model complete
4011-Section13.js:3431 [Section13] ⏭️ Skipping Reference value re-write - triggered in target mode
4011-Section13.js:3437 [Section13] 🎉 DUAL-ENGINE CALCULATIONS COMPLETE
4011-Section13.js:252 [Section13] 🔄 Updating calculated display values for target mode
4011-Section13.js:336 [Section13] Calculated display values updated for target mode
 [S15] 🎯 TGT S03 CLIMATE READ: h_23=22, d_23=-26, d_24=30, h_24=24
 [StateManager] 🎯 h_10 setValue: "115.32905395957009" (state: calculated)
 [StateManager] h_10 setValue stack trace:
setValue @ 4011-StateManager.js:346
calculateValues @ 4011-Section15.js:1832
calculateTargetModel @ 4011-Section15.js:1662
calculateAll @ 4011-Section15.js:1328
(anonymous) @ 4011-Section15.js:2121
(anonymous) @ 4011-StateManager.js:543
notifyListeners @ 4011-StateManager.js:541
setValue @ 4011-StateManager.js:419
setFieldValue @ 4011-Section10.js:524
calculateUtilizationFactors @ 4011-Section10.js:2400
calculateTargetModel @ 4011-Section10.js:1850
calculateAll @ 4011-Section10.js:1824
(anonymous) @ 4011-Section10.js:2670
(anonymous) @ 4011-StateManager.js:543
notifyListeners @ 4011-StateManager.js:541
setValue @ 4011-StateManager.js:419
setCalculatedValue @ 4011-Section09.js:630
(anonymous) @ 4011-Section09.js:1839
calculateTargetModel @ 4011-Section09.js:1838
(anonymous) @ 4011-Section09.js:2166
(anonymous) @ 4011-StateManager.js:543
notifyListeners @ 4011-StateManager.js:541
setValue @ 4011-StateManager.js:419
setValue @ 4011-Section09.js:191
(anonymous) @ 4011-Section09.js:2541
 [S15] 🎯 TGT S03 CLIMATE READ: h_23=22, d_23=-26, d_24=30, h_24=24
 [StateManager] 🎯 h_10 setValue: "115.32905395957009" (state: calculated)
 [StateManager] h_10 setValue stack trace:
setValue @ 4011-StateManager.js:346
calculateValues @ 4011-Section15.js:1832
calculateTargetModel @ 4011-Section15.js:1662
calculateAll @ 4011-Section15.js:1328
(anonymous) @ 4011-Section15.js:2121
(anonymous) @ 4011-StateManager.js:543
notifyListeners @ 4011-StateManager.js:541
setValue @ 4011-StateManager.js:419
setFieldValue @ 4011-Section10.js:524
calculateUtilizationFactors @ 4011-Section10.js:2400
calculateTargetModel @ 4011-Section10.js:1850
calculateAll @ 4011-Section10.js:1824
(anonymous) @ 4011-Section10.js:2670
(anonymous) @ 4011-StateManager.js:543
notifyListeners @ 4011-StateManager.js:541
setValue @ 4011-StateManager.js:419
setCalculatedValue @ 4011-Section09.js:630
(anonymous) @ 4011-Section09.js:1839
calculateTargetModel @ 4011-Section09.js:1838
(anonymous) @ 4011-Section09.js:2166
(anonymous) @ 4011-StateManager.js:543
notifyListeners @ 4011-StateManager.js:541
setValue @ 4011-StateManager.js:419
setValue @ 4011-Section09.js:191
(anonymous) @ 4011-Section09.js:2541
 [S10REF] Utilization calc: ref_i_71=110562.1692, ref_i_79=10060.174319999998, totalGains=120622.34352
 [S10REF] Using utilization method: NRC 40%
 [S10REF] Final calc: utilizationFactor=0.4, usableGains=48248.937408
 [S10REF] Complete: g_80=0.4, g_81=0.9936571089244821, i_80=48248.937408, i_81=119857.24913377894
 [S10 DEBUG] Dual-engine calculations complete in target mode
 [S10DISPLAY] updateCalculatedDisplayValues() called in target mode
 [S10DISPLAY] Display (target) m_73 = 50.00
 [S10DISPLAY] Display (target) m_74 = 1.31
 [S10DISPLAY] Display (target) m_75 = 76.94
 [S10DISPLAY] Display (target) m_76 = 70.74
 [S10DISPLAY] Display (target) m_77 = 25.86
 [S10DISPLAY] Display (target) m_78 = 75.00
 [S10DISPLAY] Display (target) i_73 = 375.00
 [S10DISPLAY] Display (target) i_74 = 106.29
 [S10DISPLAY] Display (target) i_75 = 294.68
 [S10DISPLAY] Display (target) i_76 = 11,247.66
 [S10DISPLAY] Display (target) i_77 = 2,603.07
 [S10DISPLAY] Display (target) i_78 = 0.00
 [S10DISPLAY] Display (target) i_79 = 14,626.70
 [S10DISPLAY] Display (target) k_73 = 0.00
 [S10DISPLAY] Display (target) k_74 = 0.00
 [S10DISPLAY] Display (target) k_75 = 0.00
 [S10DISPLAY] Display (target) k_76 = 0.00
 [S10DISPLAY] Display (target) k_77 = 130.15
 [S10DISPLAY] Display (target) k_78 = 0.00
 [S10DISPLAY] Display (target) k_79 = 130.15
 [S10DISPLAY] Display (target) j_73 = 2.56%
 [S10DISPLAY] Display (target) j_74 = 0.73%
 [S10DISPLAY] Display (target) j_75 = 2.01%
 [S10DISPLAY] Display (target) j_76 = 76.90%
 [S10DISPLAY] Display (target) j_77 = 17.80%
 [S10DISPLAY] Display (target) j_78 = 0.00%
 [S10DISPLAY] Display (target) j_79 = 100.00%
 [S10DISPLAY] Display (target) l_73 = 0.00%
 [S10DISPLAY] Display (target) l_74 = 0.00%
 [S10DISPLAY] Display (target) l_75 = 0.00%
 [S10DISPLAY] Display (target) l_76 = 0.00%
 [S10DISPLAY] Display (target) l_77 = 100.00%
 [S10DISPLAY] Display (target) l_78 = 0.00%
 [S10DISPLAY] Display (target) l_79 = 100.00%
 [S10DISPLAY] Display (target) e_80 = 135,678.79
 [S10DISPLAY] Display (target) e_81 = 135,678.79
 [S10DISPLAY] g_80 DEBUG: mode=target, valueToDisplay=0.4
 [S10DISPLAY] Display (target) g_80 = 40.00%
 [S10DISPLAY] Display (target) g_81 = 91.73%
 [S10DISPLAY] Display (target) i_80 = 54,271.52
 [S10DISPLAY] Display (target) i_81 = 124,452.74
 [S10DISPLAY] Display (target) i_82 = 81,407.27
 [Section13] 📡 🔥 i_71 (OCCUPANT GAINS) listener triggered - S10 gains factor changed!
 [Section13] 🚀 CALCULATEALL TRIGGERED - Running dual-engine calculations...
 [Section13] 🎯 Mode captured at calculation start: target
 [Section13] 🔄 Starting Reference Model calculations...
 🔍 [S13-CONTEXT] Creating reference context: g_118="Volume Constant" from ReferenceState
 🔍 [S13-CONTEXT] ReferenceState.g_118="Volume Constant", TargetState.g_118="Volume by Schedule"
 [Section13] Running Reference Model calculations...
 [S13 CONTAMINATION DEBUG] calculateReferenceModel: Using system type = Electricity
 [S13] REF HEATING: system=Electricity, ted=251391.1974742337, afue=0.9, cop=1
 [S13 REF DEBUG] About to calculate with heating system: Electricity
 [S13 REF DEBUG] Will S13 publish ref_d_113=Electricity?
 🔍 [S13-VENT] calculateVentilationRates: ventMethod="Volume Constant", ach(l_118)=3.5, ratePerPerson(d_119)=8.33, volume(d_105)=8000
 🔍 [S13-VENT] isReferenceCalculation=true, hasContext=true
 🔍 [S13-VENT] calculateVentilationValues: ventMethod="Volume Constant", ach(l_118)=3.5, ratePerPerson(d_119)=8.33, volume(d_105)=8000
 🔍 [S13-VENT] Supporting values: occupants(d_63)=126, occupiedHours(i_63)=4380, totalHours(j_63)=8760
 🔍 [S13-VENT] Volume Constant calculation: ventRateLs = (3.5 * 8000) / 3.6 = 7777.777777777777
 ✅ [S13-VENT] Final d_120 result: 7777.777777777777 L/s (from method="Volume Constant", ach=3.5, volume=8000)
 [Section13] 🧊 COOLING CALC: mode=REF, coolingSystemType="No Cooling", heatingType="Electricity", isCoolingActive=false, coolingDemand=10192.893604542265
 [S13 CONTAMINATION DEBUG] storeReferenceResults called during reference mode
 [S13 CONTAMINATION DEBUG] Reference heating system: Electricity
 [S13 CONTAMINATION DEBUG] Target heating system: Heatpump
 [S13 CONTAMINATION DEBUG] Reference h_115 (gas volume): 0
 [S13 CONTAMINATION DEBUG] Reference f_115 (oil volume): 0
 [S13 CONTAMINATION DEBUG] Writing ref_f_115 = 0
 [S13 CONTAMINATION DEBUG] Writing ref_h_115 = 0
 [Section13] Reference results stored with ref_ prefix for downstream sections
 [S13 DEBUG] Total Reference results stored: 34
 [Section13] Reference Model calculations complete
 [Section13] ✅ Reference Model complete
 [Section13] 🔄 Starting Target Model calculations...
 🔍 [S13-CONTEXT] Creating target context: g_118="Volume by Schedule" from TargetState
 🔍 [S13-CONTEXT] TargetState.g_118="Volume by Schedule", ReferenceState.g_118="Volume Constant"
 [Section13] Running Target Model calculations...
 [S13] TGT HEATING: system=Heatpump, ted=119173.73172599022, afue=0.98, cop=3.663540445486518
 🔍 [S13-VENT] calculateVentilationRates: ventMethod="Volume by Schedule", ach(l_118)=3, ratePerPerson(d_119)=14, volume(d_105)=8000
 🔍 [S13-VENT] isReferenceCalculation=false, hasContext=true
 🔍 [S13-VENT] calculateVentilationValues: ventMethod="Volume by Schedule", ach(l_118)=3, ratePerPerson(d_119)=14, volume(d_105)=8000
 🔍 [S13-VENT] Supporting values: occupants(d_63)=126, occupiedHours(i_63)=4380, totalHours(j_63)=8760
 ✅ [S13-VENT] Final d_120 result: 3333.333333333333 L/s (from method="Volume by Schedule", ach=3, volume=8000)
 [Section13] 🧊 COOLING CALC: mode=TGT, coolingSystemType="Cooling", heatingType="Heatpump", isCoolingActive=true, coolingDemand=10192.893604542265
 [S15] 🎯 TGT S03 CLIMATE READ: h_23=22, d_23=-26, d_24=30, h_24=24
 [S04] S15 target electricity changed: d_136
 [S04] Starting dual-engine Excel-compliant calculations
 [S04] Row 32 Subtotals - F32: 132938, G32: 6779.838, J32: 164830.64322243445, K32: 8406.362804344157
 [S04] j_32 update: 164830.64322243445
 [S01] j_32 listener: 164597.62581109843 → 164830.64322243445
 [S01] 🕐 j_32 listener timing: StateManager current j_32 = 164830.64322243445
2 🔄 [S05] updateCalculatedDisplayValues: mode=target
 [S15] 🎯 TGT S03 CLIMATE READ: h_23=22, d_23=-26, d_24=30, h_24=24
 [StateManager] 🎯 h_10 setValue: "115.49232288567435" (state: calculated)
 [StateManager] h_10 setValue stack trace:
setValue @ 4011-StateManager.js:346
calculateValues @ 4011-Section15.js:1832
calculateTargetModel @ 4011-Section15.js:1662
calculateAll @ 4011-Section15.js:1328
(anonymous) @ 4011-Section15.js:2121
(anonymous) @ 4011-StateManager.js:543
notifyListeners @ 4011-StateManager.js:541
setValue @ 4011-StateManager.js:419
setCalculatedValue @ 4011-Section04.js:96
calculateRow32 @ 4011-Section04.js:1026
calculateTargetModel @ 4011-Section04.js:1620
calculateAll @ 4011-Section04.js:1586
(anonymous) @ 4011-Section04.js:2483
(anonymous) @ 4011-StateManager.js:543
notifyListeners @ 4011-StateManager.js:541
setValue @ 4011-StateManager.js:419
setTargetValue @ 4011-Section15.js:146
calculateValues @ 4011-Section15.js:1810
calculateTargetModel @ 4011-Section15.js:1662
calculateAll @ 4011-Section15.js:1328
(anonymous) @ 4011-Section15.js:2121
(anonymous) @ 4011-StateManager.js:543
notifyListeners @ 4011-StateManager.js:541
setValue @ 4011-StateManager.js:419
setFieldValue @ 4011-Section13.js:636
calculateCoolingSystem @ 4011-Section13.js:3030
calculateTargetModel @ 4011-Section13.js:3560
calculateAll @ 4011-Section13.js:3403
calculateAndRefresh @ 4011-Section13.js:2368
(anonymous) @ 4011-Section13.js:2388
(anonymous) @ 4011-StateManager.js:543
notifyListeners @ 4011-StateManager.js:541
setValue @ 4011-StateManager.js:419
setCalculatedValue @ 4011-Section09.js:630
(anonymous) @ 4011-Section09.js:1839
calculateTargetModel @ 4011-Section09.js:1838
(anonymous) @ 4011-Section09.js:2166
(anonymous) @ 4011-StateManager.js:543
notifyListeners @ 4011-StateManager.js:541
setValue @ 4011-StateManager.js:419
setValue @ 4011-Section09.js:191
(anonymous) @ 4011-Section09.js:2541
 [S15] 🎯 TGT S03 CLIMATE READ: h_23=22, d_23=-26, d_24=30, h_24=24
 [StateManager] 🎯 h_10 setValue: "115.49232288567435" (state: calculated)
 [StateManager] h_10 setValue stack trace:
setValue @ 4011-StateManager.js:346
calculateValues @ 4011-Section15.js:1832
calculateTargetModel @ 4011-Section15.js:1662
calculateAll @ 4011-Section15.js:1328
(anonymous) @ 4011-Section15.js:2121
(anonymous) @ 4011-StateManager.js:543
notifyListeners @ 4011-StateManager.js:541
setValue @ 4011-StateManager.js:419
calculateValues @ 4011-Section15.js:1832
calculateTargetModel @ 4011-Section15.js:1662
calculateAll @ 4011-Section15.js:1328
(anonymous) @ 4011-Section15.js:2121
(anonymous) @ 4011-StateManager.js:543
notifyListeners @ 4011-StateManager.js:541
setValue @ 4011-StateManager.js:419
setCalculatedValue @ 4011-Section04.js:96
calculateRow32 @ 4011-Section04.js:1026
calculateTargetModel @ 4011-Section04.js:1620
calculateAll @ 4011-Section04.js:1586
(anonymous) @ 4011-Section04.js:2483
(anonymous) @ 4011-StateManager.js:543
notifyListeners @ 4011-StateManager.js:541
setValue @ 4011-StateManager.js:419
setTargetValue @ 4011-Section15.js:146
calculateValues @ 4011-Section15.js:1810
calculateTargetModel @ 4011-Section15.js:1662
calculateAll @ 4011-Section15.js:1328
(anonymous) @ 4011-Section15.js:2121
(anonymous) @ 4011-StateManager.js:543
notifyListeners @ 4011-StateManager.js:541
setValue @ 4011-StateManager.js:419
setFieldValue @ 4011-Section13.js:636
calculateCoolingSystem @ 4011-Section13.js:3030
calculateTargetModel @ 4011-Section13.js:3560
calculateAll @ 4011-Section13.js:3403
calculateAndRefresh @ 4011-Section13.js:2368
(anonymous) @ 4011-Section13.js:2388
(anonymous) @ 4011-StateManager.js:543
notifyListeners @ 4011-StateManager.js:541
setValue @ 4011-StateManager.js:419
setCalculatedValue @ 4011-Section09.js:630
(anonymous) @ 4011-Section09.js:1839
calculateTargetModel @ 4011-Section09.js:1838
(anonymous) @ 4011-Section09.js:2166
(anonymous) @ 4011-StateManager.js:543
notifyListeners @ 4011-StateManager.js:541
setValue @ 4011-StateManager.js:419
setValue @ 4011-Section09.js:191
(anonymous) @ 4011-Section09.js:2541
4011-Section15.js:1750 [S15] 🎯 TGT S03 CLIMATE READ: h_23=22, d_23=-26, d_24=30, h_24=24
4011-StateManager.js:343 [StateManager] 🎯 h_10 setValue: "115.49232288567435" (state: calculated)
4011-StateManager.js:346 [StateManager] h_10 setValue stack trace:
setValue @ 4011-StateManager.js:346
calculateValues @ 4011-Section15.js:1832
calculateTargetModel @ 4011-Section15.js:1662
calculateAll @ 4011-Section15.js:1328
(anonymous) @ 4011-Section15.js:2121
(anonymous) @ 4011-StateManager.js:543
notifyListeners @ 4011-StateManager.js:541
setValue @ 4011-StateManager.js:419
calculateValues @ 4011-Section15.js:1832
calculateTargetModel @ 4011-Section15.js:1662
calculateAll @ 4011-Section15.js:1328
(anonymous) @ 4011-Section15.js:2121
(anonymous) @ 4011-StateManager.js:543
notifyListeners @ 4011-StateManager.js:541
setValue @ 4011-StateManager.js:419
setCalculatedValue @ 4011-Section04.js:96
calculateRow32 @ 4011-Section04.js:1026
calculateTargetModel @ 4011-Section04.js:1620
calculateAll @ 4011-Section04.js:1586
(anonymous) @ 4011-Section04.js:2483
(anonymous) @ 4011-StateManager.js:543
notifyListeners @ 4011-StateManager.js:541
setValue @ 4011-StateManager.js:419
setTargetValue @ 4011-Section15.js:146
calculateValues @ 4011-Section15.js:1810
calculateTargetModel @ 4011-Section15.js:1662
calculateAll @ 4011-Section15.js:1328
(anonymous) @ 4011-Section15.js:2121
(anonymous) @ 4011-StateManager.js:543
notifyListeners @ 4011-StateManager.js:541
setValue @ 4011-StateManager.js:419
setFieldValue @ 4011-Section13.js:636
calculateCoolingSystem @ 4011-Section13.js:3030
calculateTargetModel @ 4011-Section13.js:3560
calculateAll @ 4011-Section13.js:3403
calculateAndRefresh @ 4011-Section13.js:2368
(anonymous) @ 4011-Section13.js:2388
(anonymous) @ 4011-StateManager.js:543
notifyListeners @ 4011-StateManager.js:541
setValue @ 4011-StateManager.js:419
setCalculatedValue @ 4011-Section09.js:630
(anonymous) @ 4011-Section09.js:1839
calculateTargetModel @ 4011-Section09.js:1838
(anonymous) @ 4011-Section09.js:2166
(anonymous) @ 4011-StateManager.js:543
notifyListeners @ 4011-StateManager.js:541
setValue @ 4011-StateManager.js:419
setValue @ 4011-Section09.js:191
(anonymous) @ 4011-Section09.js:2541
4011-Section15.js:1750 [S15] 🎯 TGT S03 CLIMATE READ: h_23=22, d_23=-26, d_24=30, h_24=24
4011-StateManager.js:343 [StateManager] 🎯 h_10 setValue: "115.49232288567435" (state: calculated)
4011-StateManager.js:346 [StateManager] h_10 setValue stack trace:
setValue @ 4011-StateManager.js:346
calculateValues @ 4011-Section15.js:1832
calculateTargetModel @ 4011-Section15.js:1662
calculateAll @ 4011-Section15.js:1328
(anonymous) @ 4011-Section15.js:2121
(anonymous) @ 4011-StateManager.js:543
notifyListeners @ 4011-StateManager.js:541
setValue @ 4011-StateManager.js:419
setCalculatedValue @ 4011-Section04.js:96
calculateRow32 @ 4011-Section04.js:1026
calculateTargetModel @ 4011-Section04.js:1620
calculateAll @ 4011-Section04.js:1586
(anonymous) @ 4011-Section04.js:2483
(anonymous) @ 4011-StateManager.js:543
notifyListeners @ 4011-StateManager.js:541
setValue @ 4011-StateManager.js:419
setTargetValue @ 4011-Section15.js:146
calculateValues @ 4011-Section15.js:1810
calculateTargetModel @ 4011-Section15.js:1662
calculateAll @ 4011-Section15.js:1328
(anonymous) @ 4011-Section15.js:2121
(anonymous) @ 4011-StateManager.js:543
notifyListeners @ 4011-StateManager.js:541
setValue @ 4011-StateManager.js:419
setFieldValue @ 4011-Section13.js:636
calculateCoolingSystem @ 4011-Section13.js:3030
calculateTargetModel @ 4011-Section13.js:3560
calculateAll @ 4011-Section13.js:3403
calculateAndRefresh @ 4011-Section13.js:2368
(anonymous) @ 4011-Section13.js:2388
(anonymous) @ 4011-StateManager.js:543
notifyListeners @ 4011-StateManager.js:541
setValue @ 4011-StateManager.js:419
setCalculatedValue @ 4011-Section09.js:630
(anonymous) @ 4011-Section09.js:1839
calculateTargetModel @ 4011-Section09.js:1838
(anonymous) @ 4011-Section09.js:2166
(anonymous) @ 4011-StateManager.js:543
notifyListeners @ 4011-StateManager.js:541
setValue @ 4011-StateManager.js:419
setValue @ 4011-Section09.js:191
(anonymous) @ 4011-Section09.js:2541
4011-Section04.js:1018 [S04] Row 32 Subtotals - F32: 132938, G32: 6779.838, J32: 301986.051518286, K32: 15401.288627432587
4011-Section04.js:1668 [S04] Reference model calculations complete
4011-Section04.js:1674 [S04DB] storeReference: ref_j_32=301986.051518286, ref_k_32=15401.288627432587 | current target j_32=164830.64322243445, k_32=8406.362804344157
4011-Section04.js:493 [S04] 🔄 Updating calculated display values for target mode
4011-Section04.js:501 [S04DB] displayContext mode=target j_32=164830.64322243445 ref_j_32=301986.051518286 k_32=8406.362804344157 ref_k_32=15401.288627432587
4011-Section04.js:582 [S04 DEBUG] Target mode - j_32: 164830.64322243445
4011-Section04.js:582 [S04 DEBUG] Target mode - k_32: 8406.362804344157
4011-Section04.js:582 [S04 DEBUG] Target mode - l_27: 51
4011-Section04.js:617 [S04] Calculated display values updated for target mode
 [S04] Dual-engine calculations completed successfully
 [S04] 🔄 Updating calculated display values for target mode
 [S04DB] displayContext mode=target j_32=164830.64322243445 ref_j_32=301986.051518286 k_32=8406.362804344157 ref_k_32=15401.288627432587
 [S04 DEBUG] Target mode - j_32: 164830.64322243445
 [S04 DEBUG] Target mode - k_32: 8406.362804344157
 [S04 DEBUG] Target mode - l_27: 51
 [S04] Calculated display values updated for target mode
 [StateManager] 🎯 h_10 setValue: "115.49232288567435" (state: calculated)
 [StateManager] h_10 setValue stack trace:
setValue @ 4011-StateManager.js:346
calculateValues @ 4011-Section15.js:1832
calculateTargetModel @ 4011-Section15.js:1662
calculateAll @ 4011-Section15.js:1328
(anonymous) @ 4011-Section15.js:2121
(anonymous) @ 4011-StateManager.js:543
notifyListeners @ 4011-StateManager.js:541
setValue @ 4011-StateManager.js:419
setFieldValue @ 4011-Section13.js:636
calculateCoolingSystem @ 4011-Section13.js:3030
calculateTargetModel @ 4011-Section13.js:3560
calculateAll @ 4011-Section13.js:3403
calculateAndRefresh @ 4011-Section13.js:2368
(anonymous) @ 4011-Section13.js:2388
(anonymous) @ 4011-StateManager.js:543
notifyListeners @ 4011-StateManager.js:541
setValue @ 4011-StateManager.js:419
setCalculatedValue @ 4011-Section09.js:630
(anonymous) @ 4011-Section09.js:1839
calculateTargetModel @ 4011-Section09.js:1838
(anonymous) @ 4011-Section09.js:2166
(anonymous) @ 4011-StateManager.js:543
notifyListeners @ 4011-StateManager.js:541
setValue @ 4011-StateManager.js:419
setValue @ 4011-Section09.js:191
(anonymous) @ 4011-Section09.js:2541
 [S15] 🎯 TGT S03 CLIMATE READ: h_23=22, d_23=-26, d_24=30, h_24=24
 [StateManager] 🎯 h_10 setValue: "115.49232288567435" (state: calculated)
 [StateManager] h_10 setValue stack trace:
setValue @ 4011-StateManager.js:346
calculateValues @ 4011-Section15.js:1832
calculateTargetModel @ 4011-Section15.js:1662
calculateAll @ 4011-Section15.js:1328
(anonymous) @ 4011-Section15.js:2121
(anonymous) @ 4011-StateManager.js:543
notifyListeners @ 4011-StateManager.js:541
setValue @ 4011-StateManager.js:419
setFieldValue @ 4011-Section13.js:636
calculateCoolingSystem @ 4011-Section13.js:3030
calculateTargetModel @ 4011-Section13.js:3560
calculateAll @ 4011-Section13.js:3403
calculateAndRefresh @ 4011-Section13.js:2368
(anonymous) @ 4011-Section13.js:2388
(anonymous) @ 4011-StateManager.js:543
notifyListeners @ 4011-StateManager.js:541
setValue @ 4011-StateManager.js:419
setCalculatedValue @ 4011-Section09.js:630
(anonymous) @ 4011-Section09.js:1839
calculateTargetModel @ 4011-Section09.js:1838
(anonymous) @ 4011-Section09.js:2166
(anonymous) @ 4011-StateManager.js:543
notifyListeners @ 4011-StateManager.js:541
setValue @ 4011-StateManager.js:419
setValue @ 4011-Section09.js:191
(anonymous) @ 4011-Section09.js:2541
 [Section13] 🧊 COOLING RESULTS: d_117=3826.8214105081656, j_116=2.663540445486518, l_116=0, l_114=6366.0721940341
2 [S14 LISTENER] 🔥 d_122 changed - triggering calculateAll() + UI update
 [S15] 🎯 TGT S03 CLIMATE READ: h_23=22, d_23=-26, d_24=30, h_24=24
 [StateManager] 🎯 h_10 setValue: "115.49232288567435" (state: calculated)
 [StateManager] h_10 setValue stack trace:
setValue @ 4011-StateManager.js:346
calculateValues @ 4011-Section15.js:1832
calculateTargetModel @ 4011-Section15.js:1662
calculateAll @ 4011-Section15.js:1328
(anonymous) @ 4011-Section15.js:2121
(anonymous) @ 4011-StateManager.js:543
notifyListeners @ 4011-StateManager.js:541
setValue @ 4011-StateManager.js:419
setFieldValue @ 4011-Section13.js:636
calculateCoolingVentilation @ 4011-Section13.js:3272
calculateCoolingSystem @ 4011-Section13.js:3040
calculateTargetModel @ 4011-Section13.js:3560
calculateAll @ 4011-Section13.js:3403
calculateAndRefresh @ 4011-Section13.js:2368
(anonymous) @ 4011-Section13.js:2388
(anonymous) @ 4011-StateManager.js:543
notifyListeners @ 4011-StateManager.js:541
setValue @ 4011-StateManager.js:419
setCalculatedValue @ 4011-Section09.js:630
(anonymous) @ 4011-Section09.js:1839
calculateTargetModel @ 4011-Section09.js:1838
(anonymous) @ 4011-Section09.js:2166
(anonymous) @ 4011-StateManager.js:543
notifyListeners @ 4011-StateManager.js:541
setValue @ 4011-StateManager.js:419
setValue @ 4011-Section09.js:191
(anonymous) @ 4011-Section09.js:2541
 [S15] 🎯 TGT S03 CLIMATE READ: h_23=22, d_23=-26, d_24=30, h_24=24
 [StateManager] 🎯 h_10 setValue: "115.49232288567435" (state: calculated)
 [StateManager] h_10 setValue stack trace:
setValue @ 4011-StateManager.js:346
calculateValues @ 4011-Section15.js:1832
calculateTargetModel @ 4011-Section15.js:1662
calculateAll @ 4011-Section15.js:1328
(anonymous) @ 4011-Section15.js:2121
(anonymous) @ 4011-StateManager.js:543
notifyListeners @ 4011-StateManager.js:541
setValue @ 4011-StateManager.js:419
setFieldValue @ 4011-Section13.js:636
calculateCoolingVentilation @ 4011-Section13.js:3272
calculateCoolingSystem @ 4011-Section13.js:3040
calculateTargetModel @ 4011-Section13.js:3560
calculateAll @ 4011-Section13.js:3403
calculateAndRefresh @ 4011-Section13.js:2368
(anonymous) @ 4011-Section13.js:2388
(anonymous) @ 4011-StateManager.js:543
notifyListeners @ 4011-StateManager.js:541
setValue @ 4011-StateManager.js:419
setCalculatedValue @ 4011-Section09.js:630
(anonymous) @ 4011-Section09.js:1839
calculateTargetModel @ 4011-Section09.js:1838
(anonymous) @ 4011-Section09.js:2166
(anonymous) @ 4011-StateManager.js:543
notifyListeners @ 4011-StateManager.js:541
setValue @ 4011-StateManager.js:419
setValue @ 4011-Section09.js:191
(anonymous) @ 4011-Section09.js:2541
2 [S14 LISTENER] 🔥 d_122 changed - triggering calculateAll() + UI update
 [S15] 🎯 TGT S03 CLIMATE READ: h_23=22, d_23=-26, d_24=30, h_24=24
 [StateManager] 🎯 h_10 setValue: "115.49232288567435" (state: calculated)
 [StateManager] h_10 setValue stack trace:
setValue @ 4011-StateManager.js:346
calculateValues @ 4011-Section15.js:1832
calculateTargetModel @ 4011-Section15.js:1662
calculateAll @ 4011-Section15.js:1328
(anonymous) @ 4011-Section15.js:2121
(anonymous) @ 4011-StateManager.js:543
notifyListeners @ 4011-StateManager.js:541
setValue @ 4011-StateManager.js:419
setFieldValue @ 4011-Section13.js:636
updateTargetModelDOMValues @ 4011-Section13.js:3684
calculateTargetModel @ 4011-Section13.js:3570
calculateAll @ 4011-Section13.js:3403
calculateAndRefresh @ 4011-Section13.js:2368
(anonymous) @ 4011-Section13.js:2388
(anonymous) @ 4011-StateManager.js:543
notifyListeners @ 4011-StateManager.js:541
setValue @ 4011-StateManager.js:419
setCalculatedValue @ 4011-Section09.js:630
(anonymous) @ 4011-Section09.js:1839
calculateTargetModel @ 4011-Section09.js:1838
(anonymous) @ 4011-Section09.js:2166
(anonymous) @ 4011-StateManager.js:543
notifyListeners @ 4011-StateManager.js:541
setValue @ 4011-StateManager.js:419
setValue @ 4011-Section09.js:191
(anonymous) @ 4011-Section09.js:2541
 [S15] 🎯 TGT S03 CLIMATE READ: h_23=22, d_23=-26, d_24=30, h_24=24
 [StateManager] 🎯 h_10 setValue: "115.49232288567435" (state: calculated)
 [StateManager] h_10 setValue stack trace:
setValue @ 4011-StateManager.js:346
calculateValues @ 4011-Section15.js:1832
calculateTargetModel @ 4011-Section15.js:1662
calculateAll @ 4011-Section15.js:1328
(anonymous) @ 4011-Section15.js:2121
(anonymous) @ 4011-StateManager.js:543
notifyListeners @ 4011-StateManager.js:541
setValue @ 4011-StateManager.js:419
setFieldValue @ 4011-Section13.js:636
updateTargetModelDOMValues @ 4011-Section13.js:3684
calculateTargetModel @ 4011-Section13.js:3570
calculateAll @ 4011-Section13.js:3403
calculateAndRefresh @ 4011-Section13.js:2368
(anonymous) @ 4011-Section13.js:2388
(anonymous) @ 4011-StateManager.js:543
notifyListeners @ 4011-StateManager.js:541
setValue @ 4011-StateManager.js:419
setCalculatedValue @ 4011-Section09.js:630
(anonymous) @ 4011-Section09.js:1839
calculateTargetModel @ 4011-Section09.js:1838
(anonymous) @ 4011-Section09.js:2166
(anonymous) @ 4011-StateManager.js:543
notifyListeners @ 4011-StateManager.js:541
setValue @ 4011-StateManager.js:419
setValue @ 4011-Section09.js:191
(anonymous) @ 4011-Section09.js:2541
 [Section13] Target Model calculations complete
 [Section13] ✅ Target Model complete
 [Section13] ⏭️ Skipping Reference value re-write - triggered in target mode
 [Section13] 🎉 DUAL-ENGINE CALCULATIONS COMPLETE
 [Section13] 🔄 Updating calculated display values for target mode
 [Section13] Calculated display values updated for target mode
 [Section13] 📡 🔥 i_71 (OCCUPANT GAINS) listener triggered - S10 gains factor changed!
 [Section13] 🚀 CALCULATEALL TRIGGERED - Running dual-engine calculations...
 [Section13] 🎯 Mode captured at calculation start: target
 [Section13] 🔄 Starting Reference Model calculations...
 🔍 [S13-CONTEXT] Creating reference context: g_118="Volume Constant" from ReferenceState
 🔍 [S13-CONTEXT] ReferenceState.g_118="Volume Constant", TargetState.g_118="Volume by Schedule"
 [Section13] Running Reference Model calculations...
 [S13 CONTAMINATION DEBUG] calculateReferenceModel: Using system type = Electricity
 [S13] REF HEATING: system=Electricity, ted=251391.1974742337, afue=0.9, cop=1
 [S13 REF DEBUG] About to calculate with heating system: Electricity
 [S13 REF DEBUG] Will S13 publish ref_d_113=Electricity?
 🔍 [S13-VENT] calculateVentilationRates: ventMethod="Volume Constant", ach(l_118)=3.5, ratePerPerson(d_119)=8.33, volume(d_105)=8000
 🔍 [S13-VENT] isReferenceCalculation=true, hasContext=true
 🔍 [S13-VENT] calculateVentilationValues: ventMethod="Volume Constant", ach(l_118)=3.5, ratePerPerson(d_119)=8.33, volume(d_105)=8000
 🔍 [S13-VENT] Supporting values: occupants(d_63)=126, occupiedHours(i_63)=4380, totalHours(j_63)=8760
 🔍 [S13-VENT] Volume Constant calculation: ventRateLs = (3.5 * 8000) / 3.6 = 7777.777777777777
 ✅ [S13-VENT] Final d_120 result: 7777.777777777777 L/s (from method="Volume Constant", ach=3.5, volume=8000)
 [Section13] 🧊 COOLING CALC: mode=REF, coolingSystemType="No Cooling", heatingType="Electricity", isCoolingActive=false, coolingDemand=9572.242304946165
 [S13 CONTAMINATION DEBUG] storeReferenceResults called during reference mode
 [S13 CONTAMINATION DEBUG] Reference heating system: Electricity
 [S13 CONTAMINATION DEBUG] Target heating system: Heatpump
 [S13 CONTAMINATION DEBUG] Reference h_115 (gas volume): 0
 [S13 CONTAMINATION DEBUG] Reference f_115 (oil volume): 0
 [S13 CONTAMINATION DEBUG] Writing ref_f_115 = 0
 [S13 CONTAMINATION DEBUG] Writing ref_h_115 = 0
 [Section13] Reference results stored with ref_ prefix for downstream sections
 [S13 DEBUG] Total Reference results stored: 34
 [Section13] Reference Model calculations complete
 [Section13] ✅ Reference Model complete
 [Section13] 🔄 Starting Target Model calculations...
 🔍 [S13-CONTEXT] Creating target context: g_118="Volume by Schedule" from TargetState
 🔍 [S13-CONTEXT] TargetState.g_118="Volume by Schedule", ReferenceState.g_118="Volume Constant"
 [Section13] Running Target Model calculations...
 [S13] TGT HEATING: system=Heatpump, ted=119173.73172599022, afue=0.98, cop=3.663540445486518
 🔍 [S13-VENT] calculateVentilationRates: ventMethod="Volume by Schedule", ach(l_118)=3, ratePerPerson(d_119)=14, volume(d_105)=8000
 🔍 [S13-VENT] isReferenceCalculation=false, hasContext=true
 🔍 [S13-VENT] calculateVentilationValues: ventMethod="Volume by Schedule", ach(l_118)=3, ratePerPerson(d_119)=14, volume(d_105)=8000
 🔍 [S13-VENT] Supporting values: occupants(d_63)=126, occupiedHours(i_63)=4380, totalHours(j_63)=8760
 ✅ [S13-VENT] Final d_120 result: 3333.333333333333 L/s (from method="Volume by Schedule", ach=3, volume=8000)
 [Section13] 🧊 COOLING CALC: mode=TGT, coolingSystemType="Cooling", heatingType="Heatpump", isCoolingActive=true, coolingDemand=9572.242304946165
 [S15] 🎯 TGT S03 CLIMATE READ: h_23=22, d_23=-26, d_24=30, h_24=24
 [S04] S15 target electricity changed: d_136
 [S04] Starting dual-engine Excel-compliant calculations
 [S04] Row 32 Subtotals - F32: 132938, G32: 6779.838, J32: 164597.62581109843, K32: 8394.47891636602
 [S04] j_32 update: 164597.62581109843
 [S01] j_32 listener: 164830.64322243445 → 164597.62581109843
 [S01] 🕐 j_32 listener timing: StateManager current j_32 = 164597.62581109843
2 🔄 [S05] updateCalculatedDisplayValues: mode=target
 [S15] 🎯 TGT S03 CLIMATE READ: h_23=22, d_23=-26, d_24=30, h_24=24
 [StateManager] 🎯 h_10 setValue: "115.32905395957009" (state: calculated)
 [StateManager] h_10 setValue stack trace:
setValue @ 4011-StateManager.js:346
calculateValues @ 4011-Section15.js:1832
calculateTargetModel @ 4011-Section15.js:1662
calculateAll @ 4011-Section15.js:1328
(anonymous) @ 4011-Section15.js:2121
(anonymous) @ 4011-StateManager.js:543
notifyListeners @ 4011-StateManager.js:541
setValue @ 4011-StateManager.js:419
setCalculatedValue @ 4011-Section04.js:96
calculateRow32 @ 4011-Section04.js:1026
calculateTargetModel @ 4011-Section04.js:1620
calculateAll @ 4011-Section04.js:1586
(anonymous) @ 4011-Section04.js:2483
(anonymous) @ 4011-StateManager.js:543
notifyListeners @ 4011-StateManager.js:541
setValue @ 4011-StateManager.js:419
setTargetValue @ 4011-Section15.js:146
calculateValues @ 4011-Section15.js:1810
calculateTargetModel @ 4011-Section15.js:1662
calculateAll @ 4011-Section15.js:1328
(anonymous) @ 4011-Section15.js:2121
(anonymous) @ 4011-StateManager.js:543
notifyListeners @ 4011-StateManager.js:541
setValue @ 4011-StateManager.js:419
setFieldValue @ 4011-Section13.js:636
calculateCoolingSystem @ 4011-Section13.js:3030
calculateTargetModel @ 4011-Section13.js:3560
calculateAll @ 4011-Section13.js:3403
calculateAndRefresh @ 4011-Section13.js:2368
(anonymous) @ 4011-Section13.js:2388
(anonymous) @ 4011-StateManager.js:543
notifyListeners @ 4011-StateManager.js:541
setValue @ 4011-StateManager.js:419
setCalculatedValue @ 4011-Section09.js:630
(anonymous) @ 4011-Section09.js:1839
calculateTargetModel @ 4011-Section09.js:1838
(anonymous) @ 4011-Section09.js:2166
(anonymous) @ 4011-StateManager.js:543
notifyListeners @ 4011-StateManager.js:541
setValue @ 4011-StateManager.js:419
setValue @ 4011-Section09.js:191
(anonymous) @ 4011-Section09.js:2541
 [S15] 🎯 TGT S03 CLIMATE READ: h_23=22, d_23=-26, d_24=30, h_24=24
 [StateManager] 🎯 h_10 setValue: "115.32905395957009" (state: calculated)
 [StateManager] h_10 setValue stack trace:
setValue @ 4011-StateManager.js:346
calculateValues @ 4011-Section15.js:1832
calculateTargetModel @ 4011-Section15.js:1662
calculateAll @ 4011-Section15.js:1328
(anonymous) @ 4011-Section15.js:2121
(anonymous) @ 4011-StateManager.js:543
notifyListeners @ 4011-StateManager.js:541
setValue @ 4011-StateManager.js:419
calculateValues @ 4011-Section15.js:1832
calculateTargetModel @ 4011-Section15.js:1662
calculateAll @ 4011-Section15.js:1328
(anonymous) @ 4011-Section15.js:2121
(anonymous) @ 4011-StateManager.js:543
notifyListeners @ 4011-StateManager.js:541
setValue @ 4011-StateManager.js:419
setCalculatedValue @ 4011-Section04.js:96
calculateRow32 @ 4011-Section04.js:1026
calculateTargetModel @ 4011-Section04.js:1620
calculateAll @ 4011-Section04.js:1586
(anonymous) @ 4011-Section04.js:2483
(anonymous) @ 4011-StateManager.js:543
notifyListeners @ 4011-StateManager.js:541
setValue @ 4011-StateManager.js:419
setTargetValue @ 4011-Section15.js:146
calculateValues @ 4011-Section15.js:1810
calculateTargetModel @ 4011-Section15.js:1662
calculateAll @ 4011-Section15.js:1328
(anonymous) @ 4011-Section15.js:2121
(anonymous) @ 4011-StateManager.js:543
notifyListeners @ 4011-StateManager.js:541
setValue @ 4011-StateManager.js:419
setFieldValue @ 4011-Section13.js:636
calculateCoolingSystem @ 4011-Section13.js:3030
calculateTargetModel @ 4011-Section13.js:3560
calculateAll @ 4011-Section13.js:3403
calculateAndRefresh @ 4011-Section13.js:2368
(anonymous) @ 4011-Section13.js:2388
(anonymous) @ 4011-StateManager.js:543
notifyListeners @ 4011-StateManager.js:541
setValue @ 4011-StateManager.js:419
setCalculatedValue @ 4011-Section09.js:630
(anonymous) @ 4011-Section09.js:1839
calculateTargetModel @ 4011-Section09.js:1838
(anonymous) @ 4011-Section09.js:2166
(anonymous) @ 4011-StateManager.js:543
notifyListeners @ 4011-StateManager.js:541
setValue @ 4011-StateManager.js:419
setValue @ 4011-Section09.js:191
(anonymous) @ 4011-Section09.js:2541
 [S15] 🎯 TGT S03 CLIMATE READ: h_23=22, d_23=-26, d_24=30, h_24=24
 [StateManager] 🎯 h_10 setValue: "115.32905395957009" (state: calculated)
 [StateManager] h_10 setValue stack trace:
setValue @ 4011-StateManager.js:346
calculateValues @ 4011-Section15.js:1832
calculateTargetModel @ 4011-Section15.js:1662
calculateAll @ 4011-Section15.js:1328
(anonymous) @ 4011-Section15.js:2121
(anonymous) @ 4011-StateManager.js:543
notifyListeners @ 4011-StateManager.js:541
setValue @ 4011-StateManager.js:419
calculateValues @ 4011-Section15.js:1832
calculateTargetModel @ 4011-Section15.js:1662
calculateAll @ 4011-Section15.js:1328
(anonymous) @ 4011-Section15.js:2121
(anonymous) @ 4011-StateManager.js:543
notifyListeners @ 4011-StateManager.js:541
setValue @ 4011-StateManager.js:419
setCalculatedValue @ 4011-Section04.js:96
calculateRow32 @ 4011-Section04.js:1026
calculateTargetModel @ 4011-Section04.js:1620
calculateAll @ 4011-Section04.js:1586
(anonymous) @ 4011-Section04.js:2483
(anonymous) @ 4011-StateManager.js:543
notifyListeners @ 4011-StateManager.js:541
setValue @ 4011-StateManager.js:419
setTargetValue @ 4011-Section15.js:146
calculateValues @ 4011-Section15.js:1810
calculateTargetModel @ 4011-Section15.js:1662
calculateAll @ 4011-Section15.js:1328
(anonymous) @ 4011-Section15.js:2121
(anonymous) @ 4011-StateManager.js:543
notifyListeners @ 4011-StateManager.js:541
setValue @ 4011-StateManager.js:419
setFieldValue @ 4011-Section13.js:636
calculateCoolingSystem @ 4011-Section13.js:3030
calculateTargetModel @ 4011-Section13.js:3560
calculateAll @ 4011-Section13.js:3403
calculateAndRefresh @ 4011-Section13.js:2368
(anonymous) @ 4011-Section13.js:2388
(anonymous) @ 4011-StateManager.js:543
notifyListeners @ 4011-StateManager.js:541
setValue @ 4011-StateManager.js:419
setCalculatedValue @ 4011-Section09.js:630
(anonymous) @ 4011-Section09.js:1839
calculateTargetModel @ 4011-Section09.js:1838
(anonymous) @ 4011-Section09.js:2166
(anonymous) @ 4011-StateManager.js:543
notifyListeners @ 4011-StateManager.js:541
setValue @ 4011-StateManager.js:419
setValue @ 4011-Section09.js:191
(anonymous) @ 4011-Section09.js:2541
 [S15] 🎯 TGT S03 CLIMATE READ: h_23=22, d_23=-26, d_24=30, h_24=24
 [StateManager] 🎯 h_10 setValue: "115.32905395957009" (state: calculated)
 [StateManager] h_10 setValue stack trace:
setValue @ 4011-StateManager.js:346
calculateValues @ 4011-Section15.js:1832
calculateTargetModel @ 4011-Section15.js:1662
calculateAll @ 4011-Section15.js:1328
(anonymous) @ 4011-Section15.js:2121
(anonymous) @ 4011-StateManager.js:543
notifyListeners @ 4011-StateManager.js:541
setValue @ 4011-StateManager.js:419
setCalculatedValue @ 4011-Section04.js:96
calculateRow32 @ 4011-Section04.js:1026
calculateTargetModel @ 4011-Section04.js:1620
calculateAll @ 4011-Section04.js:1586
(anonymous) @ 4011-Section04.js:2483
(anonymous) @ 4011-StateManager.js:543
notifyListeners @ 4011-StateManager.js:541
setValue @ 4011-StateManager.js:419
setTargetValue @ 4011-Section15.js:146
calculateValues @ 4011-Section15.js:1810
calculateTargetModel @ 4011-Section15.js:1662
calculateAll @ 4011-Section15.js:1328
(anonymous) @ 4011-Section15.js:2121
(anonymous) @ 4011-StateManager.js:543
notifyListeners @ 4011-StateManager.js:541
setValue @ 4011-StateManager.js:419
setFieldValue @ 4011-Section13.js:636
calculateCoolingSystem @ 4011-Section13.js:3030
calculateTargetModel @ 4011-Section13.js:3560
calculateAll @ 4011-Section13.js:3403
calculateAndRefresh @ 4011-Section13.js:2368
(anonymous) @ 4011-Section13.js:2388
(anonymous) @ 4011-StateManager.js:543
notifyListeners @ 4011-StateManager.js:541
setValue @ 4011-StateManager.js:419
setCalculatedValue @ 4011-Section09.js:630
(anonymous) @ 4011-Section09.js:1839
calculateTargetModel @ 4011-Section09.js:1838
(anonymous) @ 4011-Section09.js:2166
(anonymous) @ 4011-StateManager.js:543
notifyListeners @ 4011-StateManager.js:541
setValue @ 4011-StateManager.js:419
setValue @ 4011-Section09.js:191
(anonymous) @ 4011-Section09.js:2541
 [S04] Row 32 Subtotals - F32: 132938, G32: 6779.838, J32: 301986.051518286, K32: 15401.288627432587
 [S04] Reference model calculations complete
 [S04DB] storeReference: ref_j_32=301986.051518286, ref_k_32=15401.288627432587 | current target j_32=164597.62581109843, k_32=8394.47891636602
 [S04] 🔄 Updating calculated display values for target mode
 [S04DB] displayContext mode=target j_32=164597.62581109843 ref_j_32=301986.051518286 k_32=8394.47891636602 ref_k_32=15401.288627432587
 [S04 DEBUG] Target mode - j_32: 164597.62581109843
 [S04 DEBUG] Target mode - k_32: 8394.47891636602
 [S04 DEBUG] Target mode - l_27: 51
 [S04] Calculated display values updated for target mode
 [S04] Dual-engine calculations completed successfully
 [S04] 🔄 Updating calculated display values for target mode
 [S04DB] displayContext mode=target j_32=164597.62581109843 ref_j_32=301986.051518286 k_32=8394.47891636602 ref_k_32=15401.288627432587
 [S04 DEBUG] Target mode - j_32: 164597.62581109843
 [S04 DEBUG] Target mode - k_32: 8394.47891636602
 [S04 DEBUG] Target mode - l_27: 51
 [S04] Calculated display values updated for target mode
 [StateManager] 🎯 h_10 setValue: "115.32905395957009" (state: calculated)
 [StateManager] h_10 setValue stack trace:
setValue @ 4011-StateManager.js:346
calculateValues @ 4011-Section15.js:1832
calculateTargetModel @ 4011-Section15.js:1662
calculateAll @ 4011-Section15.js:1328
(anonymous) @ 4011-Section15.js:2121
(anonymous) @ 4011-StateManager.js:543
notifyListeners @ 4011-StateManager.js:541
setValue @ 4011-StateManager.js:419
setFieldValue @ 4011-Section13.js:636
calculateCoolingSystem @ 4011-Section13.js:3030
calculateTargetModel @ 4011-Section13.js:3560
calculateAll @ 4011-Section13.js:3403
calculateAndRefresh @ 4011-Section13.js:2368
(anonymous) @ 4011-Section13.js:2388
(anonymous) @ 4011-StateManager.js:543
notifyListeners @ 4011-StateManager.js:541
setValue @ 4011-StateManager.js:419
setCalculatedValue @ 4011-Section09.js:630
(anonymous) @ 4011-Section09.js:1839
calculateTargetModel @ 4011-Section09.js:1838
(anonymous) @ 4011-Section09.js:2166
(anonymous) @ 4011-StateManager.js:543
notifyListeners @ 4011-StateManager.js:541
setValue @ 4011-StateManager.js:419
setValue @ 4011-Section09.js:191
(anonymous) @ 4011-Section09.js:2541
 [S15] 🎯 TGT S03 CLIMATE READ: h_23=22, d_23=-26, d_24=30, h_24=24
 [StateManager] 🎯 h_10 setValue: "115.32905395957009" (state: calculated)
 [StateManager] h_10 setValue stack trace:
setValue @ 4011-StateManager.js:346
calculateValues @ 4011-Section15.js:1832
calculateTargetModel @ 4011-Section15.js:1662
calculateAll @ 4011-Section15.js:1328
(anonymous) @ 4011-Section15.js:2121
(anonymous) @ 4011-StateManager.js:543
notifyListeners @ 4011-StateManager.js:541
setValue @ 4011-StateManager.js:419
setFieldValue @ 4011-Section13.js:636
calculateCoolingSystem @ 4011-Section13.js:3030
calculateTargetModel @ 4011-Section13.js:3560
calculateAll @ 4011-Section13.js:3403
calculateAndRefresh @ 4011-Section13.js:2368
(anonymous) @ 4011-Section13.js:2388
(anonymous) @ 4011-StateManager.js:543
notifyListeners @ 4011-StateManager.js:541
setValue @ 4011-StateManager.js:419
setCalculatedValue @ 4011-Section09.js:630
(anonymous) @ 4011-Section09.js:1839
calculateTargetModel @ 4011-Section09.js:1838
(anonymous) @ 4011-Section09.js:2166
(anonymous) @ 4011-StateManager.js:543
notifyListeners @ 4011-StateManager.js:541
setValue @ 4011-StateManager.js:419
setValue @ 4011-Section09.js:191
(anonymous) @ 4011-Section09.js:2541
 [Section13] 🧊 COOLING RESULTS: d_117=3593.80399917213, j_116=2.663540445486518, l_116=0, l_114=5978.438305774035
2 [S14 LISTENER] 🔥 d_122 changed - triggering calculateAll() + UI update
 [S15] 🎯 TGT S03 CLIMATE READ: h_23=22, d_23=-26, d_24=30, h_24=24
 [StateManager] 🎯 h_10 setValue: "115.32905395957009" (state: calculated)
 [StateManager] h_10 setValue stack trace:
setValue @ 4011-StateManager.js:346
calculateValues @ 4011-Section15.js:1832
calculateTargetModel @ 4011-Section15.js:1662
calculateAll @ 4011-Section15.js:1328
(anonymous) @ 4011-Section15.js:2121
(anonymous) @ 4011-StateManager.js:543
notifyListeners @ 4011-StateManager.js:541
setValue @ 4011-StateManager.js:419
setFieldValue @ 4011-Section13.js:636
calculateCoolingVentilation @ 4011-Section13.js:3272
calculateCoolingSystem @ 4011-Section13.js:3040
calculateTargetModel @ 4011-Section13.js:3560
calculateAll @ 4011-Section13.js:3403
calculateAndRefresh @ 4011-Section13.js:2368
(anonymous) @ 4011-Section13.js:2388
(anonymous) @ 4011-StateManager.js:543
notifyListeners @ 4011-StateManager.js:541
setValue @ 4011-StateManager.js:419
setCalculatedValue @ 4011-Section09.js:630
(anonymous) @ 4011-Section09.js:1839
calculateTargetModel @ 4011-Section09.js:1838
(anonymous) @ 4011-Section09.js:2166
(anonymous) @ 4011-StateManager.js:543
notifyListeners @ 4011-StateManager.js:541
setValue @ 4011-StateManager.js:419
setValue @ 4011-Section09.js:191
(anonymous) @ 4011-Section09.js:2541
 [S15] 🎯 TGT S03 CLIMATE READ: h_23=22, d_23=-26, d_24=30, h_24=24
 [StateManager] 🎯 h_10 setValue: "115.32905395957009" (state: calculated)
 [StateManager] h_10 setValue stack trace:
setValue @ 4011-StateManager.js:346
calculateValues @ 4011-Section15.js:1832
calculateTargetModel @ 4011-Section15.js:1662
calculateAll @ 4011-Section15.js:1328
(anonymous) @ 4011-Section15.js:2121
(anonymous) @ 4011-StateManager.js:543
notifyListeners @ 4011-StateManager.js:541
setValue @ 4011-StateManager.js:419
setFieldValue @ 4011-Section13.js:636
calculateCoolingVentilation @ 4011-Section13.js:3272
calculateCoolingSystem @ 4011-Section13.js:3040
calculateTargetModel @ 4011-Section13.js:3560
calculateAll @ 4011-Section13.js:3403
calculateAndRefresh @ 4011-Section13.js:2368
(anonymous) @ 4011-Section13.js:2388
(anonymous) @ 4011-StateManager.js:543
notifyListeners @ 4011-StateManager.js:541
setValue @ 4011-StateManager.js:419
setCalculatedValue @ 4011-Section09.js:630
(anonymous) @ 4011-Section09.js:1839
calculateTargetModel @ 4011-Section09.js:1838
(anonymous) @ 4011-Section09.js:2166
(anonymous) @ 4011-StateManager.js:543
notifyListeners @ 4011-StateManager.js:541
setValue @ 4011-StateManager.js:419
setValue @ 4011-Section09.js:191
(anonymous) @ 4011-Section09.js:2541
2 [S14 LISTENER] 🔥 d_122 changed - triggering calculateAll() + UI update
 [S15] 🎯 TGT S03 CLIMATE READ: h_23=22, d_23=-26, d_24=30, h_24=24
 [StateManager] 🎯 h_10 setValue: "115.32905395957009" (state: calculated)
 [StateManager] h_10 setValue stack trace:
setValue @ 4011-StateManager.js:346
calculateValues @ 4011-Section15.js:1832
calculateTargetModel @ 4011-Section15.js:1662
calculateAll @ 4011-Section15.js:1328
(anonymous) @ 4011-Section15.js:2121
(anonymous) @ 4011-StateManager.js:543
notifyListeners @ 4011-StateManager.js:541
setValue @ 4011-StateManager.js:419
setFieldValue @ 4011-Section13.js:636
updateTargetModelDOMValues @ 4011-Section13.js:3684
calculateTargetModel @ 4011-Section13.js:3570
calculateAll @ 4011-Section13.js:3403
calculateAndRefresh @ 4011-Section13.js:2368
(anonymous) @ 4011-Section13.js:2388
(anonymous) @ 4011-StateManager.js:543
notifyListeners @ 4011-StateManager.js:541
setValue @ 4011-StateManager.js:419
setCalculatedValue @ 4011-Section09.js:630
(anonymous) @ 4011-Section09.js:1839
calculateTargetModel @ 4011-Section09.js:1838
(anonymous) @ 4011-Section09.js:2166
(anonymous) @ 4011-StateManager.js:543
notifyListeners @ 4011-StateManager.js:541
setValue @ 4011-StateManager.js:419
setValue @ 4011-Section09.js:191
(anonymous) @ 4011-Section09.js:2541
 [S15] 🎯 TGT S03 CLIMATE READ: h_23=22, d_23=-26, d_24=30, h_24=24
 [StateManager] 🎯 h_10 setValue: "115.32905395957009" (state: calculated)
 [StateManager] h_10 setValue stack trace:
setValue @ 4011-StateManager.js:346
calculateValues @ 4011-Section15.js:1832
calculateTargetModel @ 4011-Section15.js:1662
calculateAll @ 4011-Section15.js:1328
(anonymous) @ 4011-Section15.js:2121
(anonymous) @ 4011-StateManager.js:543
notifyListeners @ 4011-StateManager.js:541
setValue @ 4011-StateManager.js:419
setFieldValue @ 4011-Section13.js:636
updateTargetModelDOMValues @ 4011-Section13.js:3684
calculateTargetModel @ 4011-Section13.js:3570
calculateAll @ 4011-Section13.js:3403
calculateAndRefresh @ 4011-Section13.js:2368
(anonymous) @ 4011-Section13.js:2388
(anonymous) @ 4011-StateManager.js:543
notifyListeners @ 4011-StateManager.js:541
setValue @ 4011-StateManager.js:419
setCalculatedValue @ 4011-Section09.js:630
(anonymous) @ 4011-Section09.js:1839
calculateTargetModel @ 4011-Section09.js:1838
(anonymous) @ 4011-Section09.js:2166
(anonymous) @ 4011-StateManager.js:543
notifyListeners @ 4011-StateManager.js:541
setValue @ 4011-StateManager.js:419
setValue @ 4011-Section09.js:191
(anonymous) @ 4011-Section09.js:2541
 [Section13] Target Model calculations complete
 [Section13] ✅ Target Model complete
 [Section13] ⏭️ Skipping Reference value re-write - triggered in target mode
 [Section13] 🎉 DUAL-ENGINE CALCULATIONS COMPLETE
 [Section13] 🔄 Updating calculated display values for target mode
 [Section13] Calculated display values updated for target mode
 [S09] Updated calculated display values for target mode
 [S09 DEBUG] buildingType="B3-Detention Care & Treatment", isReference=false
 [S09 DEBUG] isResidentialOrCare=true, plugLoadDensity=5
4011-Section09.js:383 [S09] Updated calculated display values for target mode
4011-Section09.js:1908 [S09 DEBUG] buildingType="B3-Detention Care & Treatment", isReference=false
4011-Section09.js:1915 [S09 DEBUG] isResidentialOrCare=true, plugLoadDensity=5
4011-Section09.js:383 [S09] Updated calculated display values for target mode
4011-Section09.js:1908 [S09 DEBUG] buildingType="A-Assembly", isReference=true
4011-Section09.js:1915 [S09 DEBUG] isResidentialOrCare=false, plugLoadDensity=7
4011-Section09.js:1908 [S09 DEBUG] buildingType="B3-Detention Care & Treatment", isReference=false
4011-Section09.js:1915 [S09 DEBUG] isResidentialOrCare=true, plugLoadDensity=5
4011-Section09.js:383 [S09] Updated calculated display values for target mode
4011-Section02.js:1012 🔍 [S02DB] d_12 dropdown change: B3-Detention Care & Treatment, mode=target
4011-Section02.js:1827 🔍 [S02DB] d_12 setValue: field=d_12, value=B3-Detention Care & Treatment, mode=target, source=user-modified
4011-Clock.js:146 [CLOCK] 🎯 User interaction started - timing to h_10 settlement
4011-Section02.js:1836 🔍 [S02DB] Target d_12 published to StateManager: d_12=B3-Detention Care & Treatment
4011-Section02.js:869 🔍 [S02DB] storeReferenceResults: ref_d_12=A-Assembly stored in StateManager
4011-Section02.js:876 [S02] Reference results stored with ref_ prefix for downstream sections
4011-Section01.js:1153 [S01DB] upstream snapshot {ref_j_32: 301986.051518286, ref_k_32: 15401.288627432587, j_32: 164597.62581109843, k_32: 8394.47891636602, ref_h_15: '1427.20', …}
4011-Section01.js:706 🔍 [S01DB] updateTEUIDisplay START: e_10=341.2, h_10=115.32905395957009, useType=Utility Bills
4011-Section01.js:776 🔍 [S01] T.1 Calculation: e_6=23.8 (ref), h_6=12.8 (target) → reduction should be 46%
4011-Section01.js:866 🔍 [S01DB] UPDATING h_10: 115.3 (from j_32=164597.62581109843, area=1427.2)
4011-Section01.js:483 🔍 [S01] h_6 explanation: target=12.8, ref=23.8, reduction=0.46218487394957986, percent=46%
4011-Clock.js:65 🕐 [CLOCK] ⚡ CALCULATION COMPLETE: 24ms (subsequent update)
4011-Clock.js:161 🕐 [CLOCK] ⚡ USER INTERACTION COMPLETE: 24ms (interaction → h_10 settlement)
4011-Section01.js:1171 ✅ [S01] CALCULATION CHAIN COMPLETE - All values finalized including h_10