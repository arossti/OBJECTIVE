 [S15] 🎯 TGT S03 CLIMATE READ: h_23=18, d_23=-24, d_24=30, h_24=24
 [StateManager] 🎯 h_10 setValue: "93.42863573628563" (state: calculated)
 [StateManager] h_10 setValue stack trace:
setValue @ 4011-StateManager.js:346
calculateValues @ 4011-Section15.js:1842
calculateTargetModel @ 4011-Section15.js:1670
calculateAll @ 4011-Section15.js:1328
(anonymous) @ 4011-Section15.js:2131
(anonymous) @ 4011-StateManager.js:543
notifyListeners @ 4011-StateManager.js:541
setValue @ 4011-StateManager.js:419
setFieldValue @ 4011-Section13.js:636
updateTargetModelDOMValues @ 4011-Section13.js:3685
calculateTargetModel @ 4011-Section13.js:3557
calculateAll @ 4011-Section13.js:3390
calculateAndRefresh @ 4011-Section13.js:2355
(anonymous) @ 4011-StateManager.js:543
notifyListeners @ 4011-StateManager.js:541
setValue @ 4011-StateManager.js:419
setCalculatedValue @ 4011-Section12.js:1170
calculateEnvelopeTotals @ 4011-Section12.js:2167
calculateTargetModel @ 4011-Section12.js:2366
calculateAll @ 4011-Section12.js:2204
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
 [S15] 🎯 TGT S03 CLIMATE READ: h_23=18, d_23=-24, d_24=30, h_24=24
 [StateManager] 🎯 h_10 setValue: "93.42863573628563" (state: calculated)
 [StateManager] h_10 setValue stack trace:
setValue @ 4011-StateManager.js:346
calculateValues @ 4011-Section15.js:1842
calculateTargetModel @ 4011-Section15.js:1670
calculateAll @ 4011-Section15.js:1328
(anonymous) @ 4011-Section15.js:2131
(anonymous) @ 4011-StateManager.js:543
notifyListeners @ 4011-StateManager.js:541
setValue @ 4011-StateManager.js:419
setFieldValue @ 4011-Section13.js:636
calculateFreeCooling @ 4011-Section13.js:3342
calculateTargetModel @ 4011-Section13.js:3545
calculateAll @ 4011-Section13.js:3390
calculateAndRefresh @ 4011-Section13.js:2355
(anonymous) @ 4011-StateManager.js:543
notifyListeners @ 4011-StateManager.js:541
setValue @ 4011-StateManager.js:419
setCalculatedValue @ 4011-Section12.js:1170
calculateEnvelopeTotals @ 4011-Section12.js:2167
calculateTargetModel @ 4011-Section12.js:2366
calculateAll @ 4011-Section12.js:2204
(anonymous) @ 4011-SectionIntegrator.js:656
 [S15] 🎯 TGT S03 CLIMATE READ: h_23=18, d_23=-24, d_24=30, h_24=24
 [StateManager] 🎯 h_10 setValue: "93.42863573628563" (state: calculated)
 [StateManager] h_10 setValue stack trace:
setValue @ 4011-StateManager.js:346
calculateValues @ 4011-Section15.js:1842
calculateTargetModel @ 4011-Section15.js:1670
calculateAll @ 4011-Section15.js:1328
(anonymous) @ 4011-Section15.js:2131
(anonymous) @ 4011-StateManager.js:543
notifyListeners @ 4011-StateManager.js:541
setValue @ 4011-StateManager.js:419
setFieldValue @ 4011-Section13.js:636
calculateFreeCooling @ 4011-Section13.js:3342
calculateTargetModel @ 4011-Section13.js:3545
calculateAll @ 4011-Section13.js:3390
calculateAndRefresh @ 4011-Section13.js:2355
(anonymous) @ 4011-StateManager.js:543
notifyListeners @ 4011-StateManager.js:541
setValue @ 4011-StateManager.js:419
setCalculatedValue @ 4011-Section12.js:1170
calculateEnvelopeTotals @ 4011-Section12.js:2167
calculateTargetModel @ 4011-Section12.js:2366
calculateAll @ 4011-Section12.js:2204
(anonymous) @ 4011-SectionIntegrator.js:656
 [S13 Error] Error during calculateFreeCooling: 
calculateFreeCooling @ 4011-Section13.js:3360Understand this errorAI
 [Section13] 🧊 COOLING CALC: mode=TGT, coolingSystemType="Cooling", heatingType="Heatpump", isCoolingActive=true, coolingDemand=9572.242304946165
 [Section13] 🧊 COOLING RESULTS: d_117=3593.80399917213, j_116=2.663540445486518, l_116=0, l_114=5978.438305774035
2 [S14 LISTENER] 🔥 d_122 changed - triggering calculateAll() + UI update
 [S15] 🎯 TGT S03 CLIMATE READ: h_23=18, d_23=-24, d_24=30, h_24=24
 [StateManager] 🎯 h_10 setValue: "93.42863573628563" (state: calculated)
 [StateManager] h_10 setValue stack trace:
setValue @ 4011-StateManager.js:346
calculateValues @ 4011-Section15.js:1842
calculateTargetModel @ 4011-Section15.js:1670
calculateAll @ 4011-Section15.js:1328
(anonymous) @ 4011-Section15.js:2131
(anonymous) @ 4011-StateManager.js:543
notifyListeners @ 4011-StateManager.js:541
setValue @ 4011-StateManager.js:419
setFieldValue @ 4011-Section13.js:636
calculateCoolingVentilation @ 4011-Section13.js:3259
calculateCoolingSystem @ 4011-Section13.js:3027
calculateTargetModel @ 4011-Section13.js:3547
calculateAll @ 4011-Section13.js:3390
calculateAndRefresh @ 4011-Section13.js:2355
(anonymous) @ 4011-StateManager.js:543
notifyListeners @ 4011-StateManager.js:541
setValue @ 4011-StateManager.js:419
setCalculatedValue @ 4011-Section12.js:1170
calculateEnvelopeTotals @ 4011-Section12.js:2167
calculateTargetModel @ 4011-Section12.js:2366
calculateAll @ 4011-Section12.js:2204
(anonymous) @ 4011-SectionIntegrator.js:656
 [S15] 🎯 TGT S03 CLIMATE READ: h_23=18, d_23=-24, d_24=30, h_24=24
 [StateManager] 🎯 h_10 setValue: "93.42863573628563" (state: calculated)
 [StateManager] h_10 setValue stack trace:
setValue @ 4011-StateManager.js:346
calculateValues @ 4011-Section15.js:1842
calculateTargetModel @ 4011-Section15.js:1670
calculateAll @ 4011-Section15.js:1328
(anonymous) @ 4011-Section15.js:2131
(anonymous) @ 4011-StateManager.js:543
notifyListeners @ 4011-StateManager.js:541
setValue @ 4011-StateManager.js:419
setFieldValue @ 4011-Section13.js:636
calculateCoolingVentilation @ 4011-Section13.js:3259
calculateCoolingSystem @ 4011-Section13.js:3027
calculateTargetModel @ 4011-Section13.js:3547
calculateAll @ 4011-Section13.js:3390
calculateAndRefresh @ 4011-Section13.js:2355
(anonymous) @ 4011-StateManager.js:543
notifyListeners @ 4011-StateManager.js:541
setValue @ 4011-StateManager.js:419
setCalculatedValue @ 4011-Section12.js:1170
calculateEnvelopeTotals @ 4011-Section12.js:2167
calculateTargetModel @ 4011-Section12.js:2366
calculateAll @ 4011-Section12.js:2204
(anonymous) @ 4011-SectionIntegrator.js:656
2 [S14 LISTENER] 🔥 d_122 changed - triggering calculateAll() + UI update
 [S15] 🎯 TGT S03 CLIMATE READ: h_23=18, d_23=-24, d_24=30, h_24=24
 [StateManager] 🎯 h_10 setValue: "93.42863573628563" (state: calculated)
 [StateManager] h_10 setValue stack trace:
setValue @ 4011-StateManager.js:346
calculateValues @ 4011-Section15.js:1842
calculateTargetModel @ 4011-Section15.js:1670
calculateAll @ 4011-Section15.js:1328
(anonymous) @ 4011-Section15.js:2131
(anonymous) @ 4011-StateManager.js:543
notifyListeners @ 4011-StateManager.js:541
setValue @ 4011-StateManager.js:419
setFieldValue @ 4011-Section13.js:636
updateTargetModelDOMValues @ 4011-Section13.js:3671
calculateTargetModel @ 4011-Section13.js:3557
calculateAll @ 4011-Section13.js:3390
calculateAndRefresh @ 4011-Section13.js:2355
(anonymous) @ 4011-StateManager.js:543
notifyListeners @ 4011-StateManager.js:541
setValue @ 4011-StateManager.js:419
setCalculatedValue @ 4011-Section12.js:1170
calculateEnvelopeTotals @ 4011-Section12.js:2167
calculateTargetModel @ 4011-Section12.js:2366
calculateAll @ 4011-Section12.js:2204
(anonymous) @ 4011-SectionIntegrator.js:656
 [S15] 🎯 TGT S03 CLIMATE READ: h_23=18, d_23=-24, d_24=30, h_24=24
 [StateManager] 🎯 h_10 setValue: "93.42863573628563" (state: calculated)
 [StateManager] h_10 setValue stack trace:
setValue @ 4011-StateManager.js:346
calculateValues @ 4011-Section15.js:1842
calculateTargetModel @ 4011-Section15.js:1670
calculateAll @ 4011-Section15.js:1328
(anonymous) @ 4011-Section15.js:2131
(anonymous) @ 4011-StateManager.js:543
notifyListeners @ 4011-StateManager.js:541
setValue @ 4011-StateManager.js:419
setFieldValue @ 4011-Section13.js:636
updateTargetModelDOMValues @ 4011-Section13.js:3671
calculateTargetModel @ 4011-Section13.js:3557
calculateAll @ 4011-Section13.js:3390
calculateAndRefresh @ 4011-Section13.js:2355
(anonymous) @ 4011-StateManager.js:543
notifyListeners @ 4011-StateManager.js:541
setValue @ 4011-StateManager.js:419
setCalculatedValue @ 4011-Section12.js:1170
calculateEnvelopeTotals @ 4011-Section12.js:2167
calculateTargetModel @ 4011-Section12.js:2366
calculateAll @ 4011-Section12.js:2204
(anonymous) @ 4011-SectionIntegrator.js:656
 [S15] 🎯 TGT S03 CLIMATE READ: h_23=18, d_23=-24, d_24=30, h_24=24
 [StateManager] 🎯 h_10 setValue: "93.42863573628563" (state: calculated)
 [StateManager] h_10 setValue stack trace:
setValue @ 4011-StateManager.js:346
calculateValues @ 4011-Section15.js:1842
calculateTargetModel @ 4011-Section15.js:1670
calculateAll @ 4011-Section15.js:1328
(anonymous) @ 4011-Section15.js:2131
(anonymous) @ 4011-StateManager.js:543
notifyListeners @ 4011-StateManager.js:541
setValue @ 4011-StateManager.js:419
setFieldValue @ 4011-Section13.js:636
updateTargetModelDOMValues @ 4011-Section13.js:3685
calculateTargetModel @ 4011-Section13.js:3557
calculateAll @ 4011-Section13.js:3390
calculateAndRefresh @ 4011-Section13.js:2355
(anonymous) @ 4011-StateManager.js:543
notifyListeners @ 4011-StateManager.js:541
setValue @ 4011-StateManager.js:419
setCalculatedValue @ 4011-Section12.js:1170
calculateEnvelopeTotals @ 4011-Section12.js:2167
calculateTargetModel @ 4011-Section12.js:2366
calculateAll @ 4011-Section12.js:2204
(anonymous) @ 4011-SectionIntegrator.js:656
 [S15] 🎯 TGT S03 CLIMATE READ: h_23=18, d_23=-24, d_24=30, h_24=24
 [StateManager] 🎯 h_10 setValue: "93.42863573628563" (state: calculated)
 [StateManager] h_10 setValue stack trace:
setValue @ 4011-StateManager.js:346
calculateValues @ 4011-Section15.js:1842
calculateTargetModel @ 4011-Section15.js:1670
calculateAll @ 4011-Section15.js:1328
(anonymous) @ 4011-Section15.js:2131
(anonymous) @ 4011-StateManager.js:543
notifyListeners @ 4011-StateManager.js:541
setValue @ 4011-StateManager.js:419
setFieldValue @ 4011-Section13.js:636
updateTargetModelDOMValues @ 4011-Section13.js:3685
calculateTargetModel @ 4011-Section13.js:3557
calculateAll @ 4011-Section13.js:3390
calculateAndRefresh @ 4011-Section13.js:2355
(anonymous) @ 4011-StateManager.js:543
notifyListeners @ 4011-StateManager.js:541
setValue @ 4011-StateManager.js:419
setCalculatedValue @ 4011-Section12.js:1170
calculateEnvelopeTotals @ 4011-Section12.js:2167
calculateTargetModel @ 4011-Section12.js:2366
calculateAll @ 4011-Section12.js:2204
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
calculateValues @ 4011-Section15.js:1842
calculateTargetModel @ 4011-Section15.js:1670
calculateAll @ 4011-Section15.js:1328
forceTEDITELIUpdate @ 4011-SectionIntegrator.js:305
window.TEUI.updateTEDITELIValues @ 4011-SectionIntegrator.js:237
(anonymous) @ 4011-SectionIntegrator.js:666
 [CLOCK] Starting initial load timing
 [S15] 🎯 TGT S03 CLIMATE READ: h_23=18, d_23=-24, d_24=30, h_24=24
 [StateManager] 🎯 h_10 setValue: "93.42863573628563" (state: calculated)
 [StateManager] h_10 setValue stack trace:
setValue @ 4011-StateManager.js:346
calculateValues @ 4011-Section15.js:1842
calculateTargetModel @ 4011-Section15.js:1670
calculateAll @ 4011-Section15.js:1328
(anonymous) @ 4011-Section15.js:2131
(anonymous) @ 4011-StateManager.js:543
notifyListeners @ 4011-StateManager.js:541
setValue @ 4011-StateManager.js:419
setValue @ 4011-Section03.js:217
setFieldValue @ 4011-Section03.js:453
calculateHeatingSetpoint @ 4011-Section03.js:1846
calculateReferenceModel @ 4011-Section03.js:1755
calculateAll @ 4011-Section03.js:1697
(anonymous) @ 4011-Calculator.js:513
calculateAll @ 4011-Calculator.js:509
(anonymous) @ index.html:1077
 [S15] 🎯 TGT S03 CLIMATE READ: h_23=18, d_23=-24, d_24=30, h_24=24
 [StateManager] 🎯 h_10 setValue: "93.42863573628563" (state: calculated)
 [StateManager] h_10 setValue stack trace:
setValue @ 4011-StateManager.js:346
calculateValues @ 4011-Section15.js:1842
calculateTargetModel @ 4011-Section15.js:1670
calculateAll @ 4011-Section15.js:1328
(anonymous) @ 4011-Section15.js:2131
(anonymous) @ 4011-StateManager.js:543
notifyListeners @ 4011-StateManager.js:541
setValue @ 4011-StateManager.js:419
setValue @ 4011-Section03.js:217
setFieldValue @ 4011-Section03.js:453
calculateHeatingSetpoint @ 4011-Section03.js:1846
calculateReferenceModel @ 4011-Section03.js:1755
calculateAll @ 4011-Section03.js:1697
(anonymous) @ 4011-Calculator.js:513
calculateAll @ 4011-Calculator.js:509
(anonymous) @ index.html:1077
 [S15] 🎯 TGT S03 CLIMATE READ: h_23=18, d_23=-24, d_24=30, h_24=24
 [StateManager] 🎯 h_10 setValue: "93.42863573628563" (state: calculated)
 [StateManager] h_10 setValue stack trace:
setValue @ 4011-StateManager.js:346
calculateValues @ 4011-Section15.js:1842
calculateTargetModel @ 4011-Section15.js:1670
calculateAll @ 4011-Section15.js:1328
(anonymous) @ 4011-Section15.js:2131
(anonymous) @ 4011-StateManager.js:543
notifyListeners @ 4011-StateManager.js:541
setValue @ 4011-StateManager.js:419
setValue @ 4011-Section03.js:217
setFieldValue @ 4011-Section03.js:453
calculateHeatingSetpoint @ 4011-Section03.js:1846
calculateReferenceModel @ 4011-Section03.js:1755
calculateAll @ 4011-Section03.js:1697
(anonymous) @ 4011-Calculator.js:513
calculateAll @ 4011-Calculator.js:509
(anonymous) @ index.html:1077
 [S15] 🎯 TGT S03 CLIMATE READ: h_23=18, d_23=-24, d_24=30, h_24=24
 [StateManager] 🎯 h_10 setValue: "93.42863573628563" (state: calculated)
 [StateManager] h_10 setValue stack trace:
setValue @ 4011-StateManager.js:346
calculateValues @ 4011-Section15.js:1842
calculateTargetModel @ 4011-Section15.js:1670
calculateAll @ 4011-Section15.js:1328
(anonymous) @ 4011-Section15.js:2131
(anonymous) @ 4011-StateManager.js:543
notifyListeners @ 4011-StateManager.js:541
setValue @ 4011-StateManager.js:419
setValue @ 4011-Section03.js:217
setFieldValue @ 4011-Section03.js:453
calculateHeatingSetpoint @ 4011-Section03.js:1846
calculateReferenceModel @ 4011-Section03.js:1755
calculateAll @ 4011-Section03.js:1697
(anonymous) @ 4011-Calculator.js:513
calculateAll @ 4011-Calculator.js:509
(anonymous) @ index.html:1077
 [S15] 🎯 TGT S03 CLIMATE READ: h_23=18, d_23=-24, d_24=30, h_24=24
 [StateManager] 🎯 h_10 setValue: "93.42863573628563" (state: calculated)
 [StateManager] h_10 setValue stack trace:
setValue @ 4011-StateManager.js:346
calculateValues @ 4011-Section15.js:1842
calculateTargetModel @ 4011-Section15.js:1670
calculateAll @ 4011-Section15.js:1328
(anonymous) @ 4011-Section15.js:2131
(anonymous) @ 4011-StateManager.js:543
notifyListeners @ 4011-StateManager.js:541
setValue @ 4011-StateManager.js:419
setValue @ 4011-Section03.js:217
setFieldValue @ 4011-Section03.js:453
calculateCoolingSetpoint_h24 @ 4011-Section03.js:1858
calculateReferenceModel @ 4011-Section03.js:1756
calculateAll @ 4011-Section03.js:1697
(anonymous) @ 4011-Calculator.js:513
calculateAll @ 4011-Calculator.js:509
(anonymous) @ index.html:1077
 [S15] 🎯 TGT S03 CLIMATE READ: h_23=18, d_23=-24, d_24=30, h_24=24
 [StateManager] 🎯 h_10 setValue: "93.42863573628563" (state: calculated)
 [StateManager] h_10 setValue stack trace:
setValue @ 4011-StateManager.js:346
calculateValues @ 4011-Section15.js:1842
calculateTargetModel @ 4011-Section15.js:1670
calculateAll @ 4011-Section15.js:1328
(anonymous) @ 4011-Section15.js:2131
(anonymous) @ 4011-StateManager.js:543
notifyListeners @ 4011-StateManager.js:541
setValue @ 4011-StateManager.js:419
setValue @ 4011-Section03.js:217
setFieldValue @ 4011-Section03.js:453
calculateCoolingSetpoint_h24 @ 4011-Section03.js:1858
calculateReferenceModel @ 4011-Section03.js:1756
calculateAll @ 4011-Section03.js:1697
(anonymous) @ 4011-Calculator.js:513
calculateAll @ 4011-Calculator.js:509
(anonymous) @ index.html:1077
 [S15] 🎯 TGT S03 CLIMATE READ: h_23=18, d_23=-24, d_24=30, h_24=24
 [StateManager] 🎯 h_10 setValue: "93.42863573628563" (state: calculated)
 [StateManager] h_10 setValue stack trace:
setValue @ 4011-StateManager.js:346
calculateValues @ 4011-Section15.js:1842
calculateTargetModel @ 4011-Section15.js:1670
calculateAll @ 4011-Section15.js:1328
(anonymous) @ 4011-Section15.js:2131
(anonymous) @ 4011-StateManager.js:543
notifyListeners @ 4011-StateManager.js:541
setValue @ 4011-StateManager.js:419
setValue @ 4011-Section03.js:217
setFieldValue @ 4011-Section03.js:453
calculateCoolingSetpoint_h24 @ 4011-Section03.js:1858
calculateReferenceModel @ 4011-Section03.js:1756
calculateAll @ 4011-Section03.js:1697
(anonymous) @ 4011-Calculator.js:513
calculateAll @ 4011-Calculator.js:509
(anonymous) @ index.html:1077
 [S15] 🎯 TGT S03 CLIMATE READ: h_23=18, d_23=-24, d_24=30, h_24=24
 [StateManager] 🎯 h_10 setValue: "93.42863573628563" (state: calculated)
 [StateManager] h_10 setValue stack trace:
setValue @ 4011-StateManager.js:346
calculateValues @ 4011-Section15.js:1842
calculateTargetModel @ 4011-Section15.js:1670
calculateAll @ 4011-Section15.js:1328
(anonymous) @ 4011-Section15.js:2131
(anonymous) @ 4011-StateManager.js:543
notifyListeners @ 4011-StateManager.js:541
setValue @ 4011-StateManager.js:419
setValue @ 4011-Section03.js:217
setFieldValue @ 4011-Section03.js:453
calculateCoolingSetpoint_h24 @ 4011-Section03.js:1858
calculateReferenceModel @ 4011-Section03.js:1756
calculateAll @ 4011-Section03.js:1697
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
 [S15] 🎯 TGT S03 CLIMATE READ: h_23=18, d_23=-24, d_24=30, h_24=24
 [StateManager] 🎯 h_10 setValue: "93.42863573628563" (state: calculated)
 [StateManager] h_10 setValue stack trace:
setValue @ 4011-StateManager.js:346
calculateValues @ 4011-Section15.js:1842
calculateTargetModel @ 4011-Section15.js:1670
calculateAll @ 4011-Section15.js:1328
(anonymous) @ 4011-Section15.js:2131
(anonymous) @ 4011-StateManager.js:543
notifyListeners @ 4011-StateManager.js:541
setValue @ 4011-StateManager.js:419
setFieldValue @ 4011-Section13.js:636
calculateFreeCooling @ 4011-Section13.js:3342
calculateTargetModel @ 4011-Section13.js:3545
calculateAll @ 4011-Section13.js:3390
(anonymous) @ 4011-Section13.js:2800
(anonymous) @ 4011-StateManager.js:543
notifyListeners @ 4011-StateManager.js:541
setValue @ 4011-StateManager.js:419
setValue @ 4011-Section03.js:217
setFieldValue @ 4011-Section03.js:453
calculateGroundFacing @ 4011-Section03.js:1668
calculateReferenceModel @ 4011-Section03.js:1758
calculateAll @ 4011-Section03.js:1697
(anonymous) @ 4011-Calculator.js:513
calculateAll @ 4011-Calculator.js:509
(anonymous) @ index.html:1077
 [S15] 🎯 TGT S03 CLIMATE READ: h_23=18, d_23=-24, d_24=30, h_24=24
 [StateManager] 🎯 h_10 setValue: "93.42863573628563" (state: calculated)
 [StateManager] h_10 setValue stack trace:
setValue @ 4011-StateManager.js:346
calculateValues @ 4011-Section15.js:1842
calculateTargetModel @ 4011-Section15.js:1670
calculateAll @ 4011-Section15.js:1328
(anonymous) @ 4011-Section15.js:2131
(anonymous) @ 4011-StateManager.js:543
notifyListeners @ 4011-StateManager.js:541
setValue @ 4011-StateManager.js:419
setFieldValue @ 4011-Section13.js:636
calculateFreeCooling @ 4011-Section13.js:3342
calculateTargetModel @ 4011-Section13.js:3545
calculateAll @ 4011-Section13.js:3390
(anonymous) @ 4011-Section13.js:2800
(anonymous) @ 4011-StateManager.js:543
notifyListeners @ 4011-StateManager.js:541
setValue @ 4011-StateManager.js:419
setValue @ 4011-Section03.js:217
setFieldValue @ 4011-Section03.js:453
calculateGroundFacing @ 4011-Section03.js:1668
calculateReferenceModel @ 4011-Section03.js:1758
calculateAll @ 4011-Section03.js:1697
(anonymous) @ 4011-Calculator.js:513
calculateAll @ 4011-Calculator.js:509
(anonymous) @ index.html:1077
 [S13 Error] Error during calculateFreeCooling: 
calculateFreeCooling @ 4011-Section13.js:3360Understand this errorAI
 [Section13] 🧊 COOLING CALC: mode=TGT, coolingSystemType="Cooling", heatingType="Heatpump", isCoolingActive=true, coolingDemand=9572.242304946165
 [Section13] 🧊 COOLING RESULTS: d_117=3593.80399917213, j_116=2.663540445486518, l_116=0, l_114=5978.438305774035
2 [S14 LISTENER] 🔥 d_122 changed - triggering calculateAll() + UI update
 [S15] 🎯 TGT S03 CLIMATE READ: h_23=18, d_23=-24, d_24=30, h_24=24
 [StateManager] 🎯 h_10 setValue: "93.42863573628563" (state: calculated)
 [StateManager] h_10 setValue stack trace:
setValue @ 4011-StateManager.js:346
calculateValues @ 4011-Section15.js:1842
calculateTargetModel @ 4011-Section15.js:1670
calculateAll @ 4011-Section15.js:1328
(anonymous) @ 4011-Section15.js:2131
(anonymous) @ 4011-StateManager.js:543
notifyListeners @ 4011-StateManager.js:541
setValue @ 4011-StateManager.js:419
setFieldValue @ 4011-Section13.js:636
calculateCoolingVentilation @ 4011-Section13.js:3259
calculateCoolingSystem @ 4011-Section13.js:3027
calculateTargetModel @ 4011-Section13.js:3547
calculateAll @ 4011-Section13.js:3390
(anonymous) @ 4011-Section13.js:2800
(anonymous) @ 4011-StateManager.js:543
notifyListeners @ 4011-StateManager.js:541
setValue @ 4011-StateManager.js:419
setValue @ 4011-Section03.js:217
setFieldValue @ 4011-Section03.js:453
calculateGroundFacing @ 4011-Section03.js:1668
calculateReferenceModel @ 4011-Section03.js:1758
calculateAll @ 4011-Section03.js:1697
(anonymous) @ 4011-Calculator.js:513
calculateAll @ 4011-Calculator.js:509
(anonymous) @ index.html:1077
 [S15] 🎯 TGT S03 CLIMATE READ: h_23=18, d_23=-24, d_24=30, h_24=24
 [StateManager] 🎯 h_10 setValue: "93.42863573628563" (state: calculated)
 [StateManager] h_10 setValue stack trace:
setValue @ 4011-StateManager.js:346
calculateValues @ 4011-Section15.js:1842
calculateTargetModel @ 4011-Section15.js:1670
calculateAll @ 4011-Section15.js:1328
(anonymous) @ 4011-Section15.js:2131
(anonymous) @ 4011-StateManager.js:543
notifyListeners @ 4011-StateManager.js:541
setValue @ 4011-StateManager.js:419
setFieldValue @ 4011-Section13.js:636
calculateCoolingVentilation @ 4011-Section13.js:3259
calculateCoolingSystem @ 4011-Section13.js:3027
calculateTargetModel @ 4011-Section13.js:3547
calculateAll @ 4011-Section13.js:3390
(anonymous) @ 4011-Section13.js:2800
(anonymous) @ 4011-StateManager.js:543
notifyListeners @ 4011-StateManager.js:541
setValue @ 4011-StateManager.js:419
setValue @ 4011-Section03.js:217
setFieldValue @ 4011-Section03.js:453
calculateGroundFacing @ 4011-Section03.js:1668
calculateReferenceModel @ 4011-Section03.js:1758
calculateAll @ 4011-Section03.js:1697
(anonymous) @ 4011-Calculator.js:513
calculateAll @ 4011-Calculator.js:509
(anonymous) @ index.html:1077
2 [S14 LISTENER] 🔥 d_122 changed - triggering calculateAll() + UI update
 [S15] 🎯 TGT S03 CLIMATE READ: h_23=18, d_23=-24, d_24=30, h_24=24
 [StateManager] 🎯 h_10 setValue: "93.42863573628563" (state: calculated)
 [StateManager] h_10 setValue stack trace:
setValue @ 4011-StateManager.js:346
calculateValues @ 4011-Section15.js:1842
calculateTargetModel @ 4011-Section15.js:1670
calculateAll @ 4011-Section15.js:1328
(anonymous) @ 4011-Section15.js:2131
(anonymous) @ 4011-StateManager.js:543
notifyListeners @ 4011-StateManager.js:541
setValue @ 4011-StateManager.js:419
setFieldValue @ 4011-Section13.js:636
updateTargetModelDOMValues @ 4011-Section13.js:3671
calculateTargetModel @ 4011-Section13.js:3557
calculateAll @ 4011-Section13.js:3390
(anonymous) @ 4011-Section13.js:2800
(anonymous) @ 4011-StateManager.js:543
notifyListeners @ 4011-StateManager.js:541
setValue @ 4011-StateManager.js:419
setValue @ 4011-Section03.js:217
setFieldValue @ 4011-Section03.js:453
calculateGroundFacing @ 4011-Section03.js:1668
calculateReferenceModel @ 4011-Section03.js:1758
calculateAll @ 4011-Section03.js:1697
(anonymous) @ 4011-Calculator.js:513
calculateAll @ 4011-Calculator.js:509
(anonymous) @ index.html:1077
 [S15] 🎯 TGT S03 CLIMATE READ: h_23=18, d_23=-24, d_24=30, h_24=24
 [StateManager] 🎯 h_10 setValue: "93.42863573628563" (state: calculated)
 [StateManager] h_10 setValue stack trace:
setValue @ 4011-StateManager.js:346
calculateValues @ 4011-Section15.js:1842
calculateTargetModel @ 4011-Section15.js:1670
calculateAll @ 4011-Section15.js:1328
(anonymous) @ 4011-Section15.js:2131
(anonymous) @ 4011-StateManager.js:543
notifyListeners @ 4011-StateManager.js:541
setValue @ 4011-StateManager.js:419
setFieldValue @ 4011-Section13.js:636
updateTargetModelDOMValues @ 4011-Section13.js:3671
calculateTargetModel @ 4011-Section13.js:3557
calculateAll @ 4011-Section13.js:3390
(anonymous) @ 4011-Section13.js:2800
(anonymous) @ 4011-StateManager.js:543
notifyListeners @ 4011-StateManager.js:541
setValue @ 4011-StateManager.js:419
setValue @ 4011-Section03.js:217
setFieldValue @ 4011-Section03.js:453
calculateGroundFacing @ 4011-Section03.js:1668
calculateReferenceModel @ 4011-Section03.js:1758
calculateAll @ 4011-Section03.js:1697
(anonymous) @ 4011-Calculator.js:513
calculateAll @ 4011-Calculator.js:509
(anonymous) @ index.html:1077
 [S15] 🎯 TGT S03 CLIMATE READ: h_23=18, d_23=-24, d_24=30, h_24=24
 [StateManager] 🎯 h_10 setValue: "93.42863573628563" (state: calculated)
 [StateManager] h_10 setValue stack trace:
setValue @ 4011-StateManager.js:346
calculateValues @ 4011-Section15.js:1842
calculateTargetModel @ 4011-Section15.js:1670
calculateAll @ 4011-Section15.js:1328
(anonymous) @ 4011-Section15.js:2131
(anonymous) @ 4011-StateManager.js:543
notifyListeners @ 4011-StateManager.js:541
setValue @ 4011-StateManager.js:419
setFieldValue @ 4011-Section13.js:636
updateTargetModelDOMValues @ 4011-Section13.js:3685
calculateTargetModel @ 4011-Section13.js:3557
calculateAll @ 4011-Section13.js:3390
(anonymous) @ 4011-Section13.js:2800
(anonymous) @ 4011-StateManager.js:543
notifyListeners @ 4011-StateManager.js:541
setValue @ 4011-StateManager.js:419
setValue @ 4011-Section03.js:217
setFieldValue @ 4011-Section03.js:453
calculateGroundFacing @ 4011-Section03.js:1668
calculateReferenceModel @ 4011-Section03.js:1758
calculateAll @ 4011-Section03.js:1697
(anonymous) @ 4011-Calculator.js:513
calculateAll @ 4011-Calculator.js:509
(anonymous) @ index.html:1077
 [S15] 🎯 TGT S03 CLIMATE READ: h_23=18, d_23=-24, d_24=30, h_24=24
 [StateManager] 🎯 h_10 setValue: "93.42863573628563" (state: calculated)
 [StateManager] h_10 setValue stack trace:
setValue @ 4011-StateManager.js:346
calculateValues @ 4011-Section15.js:1842
calculateTargetModel @ 4011-Section15.js:1670
calculateAll @ 4011-Section15.js:1328
(anonymous) @ 4011-Section15.js:2131
(anonymous) @ 4011-StateManager.js:543
notifyListeners @ 4011-StateManager.js:541
setValue @ 4011-StateManager.js:419
setFieldValue @ 4011-Section13.js:636
updateTargetModelDOMValues @ 4011-Section13.js:3685
calculateTargetModel @ 4011-Section13.js:3557
calculateAll @ 4011-Section13.js:3390
(anonymous) @ 4011-Section13.js:2800
(anonymous) @ 4011-StateManager.js:543
notifyListeners @ 4011-StateManager.js:541
setValue @ 4011-StateManager.js:419
setValue @ 4011-Section03.js:217
setFieldValue @ 4011-Section03.js:453
calculateGroundFacing @ 4011-Section03.js:1668
calculateReferenceModel @ 4011-Section03.js:1758
calculateAll @ 4011-Section03.js:1697
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
 [S15] 🎯 TGT S03 CLIMATE READ: h_23=18, d_23=-24, d_24=30, h_24=24
 [StateManager] 🎯 h_10 setValue: "93.42863573628563" (state: calculated)
 [StateManager] h_10 setValue stack trace:
setValue @ 4011-StateManager.js:346
calculateValues @ 4011-Section15.js:1842
calculateTargetModel @ 4011-Section15.js:1670
calculateAll @ 4011-Section15.js:1328
(anonymous) @ 4011-Section15.js:2131
(anonymous) @ 4011-StateManager.js:543
notifyListeners @ 4011-StateManager.js:541
setValue @ 4011-StateManager.js:419
setFieldValue @ 4011-Section13.js:636
calculateFreeCooling @ 4011-Section13.js:3342
calculateTargetModel @ 4011-Section13.js:3545
calculateAll @ 4011-Section13.js:3390
(anonymous) @ 4011-Section13.js:2806
(anonymous) @ 4011-StateManager.js:543
notifyListeners @ 4011-StateManager.js:541
setValue @ 4011-StateManager.js:419
setValue @ 4011-Section03.js:217
setFieldValue @ 4011-Section03.js:453
calculateGroundFacing @ 4011-Section03.js:1687
calculateReferenceModel @ 4011-Section03.js:1758
calculateAll @ 4011-Section03.js:1697
(anonymous) @ 4011-Calculator.js:513
calculateAll @ 4011-Calculator.js:509
(anonymous) @ index.html:1077
 [S15] 🎯 TGT S03 CLIMATE READ: h_23=18, d_23=-24, d_24=30, h_24=24
 [StateManager] 🎯 h_10 setValue: "93.42863573628563" (state: calculated)
 [StateManager] h_10 setValue stack trace:
setValue @ 4011-StateManager.js:346
calculateValues @ 4011-Section15.js:1842
calculateTargetModel @ 4011-Section15.js:1670
calculateAll @ 4011-Section15.js:1328
(anonymous) @ 4011-Section15.js:2131
(anonymous) @ 4011-StateManager.js:543
notifyListeners @ 4011-StateManager.js:541
setValue @ 4011-StateManager.js:419
setFieldValue @ 4011-Section13.js:636
calculateFreeCooling @ 4011-Section13.js:3342
calculateTargetModel @ 4011-Section13.js:3545
calculateAll @ 4011-Section13.js:3390
(anonymous) @ 4011-Section13.js:2806
(anonymous) @ 4011-StateManager.js:543
notifyListeners @ 4011-StateManager.js:541
setValue @ 4011-StateManager.js:419
setValue @ 4011-Section03.js:217
setFieldValue @ 4011-Section03.js:453
calculateGroundFacing @ 4011-Section03.js:1687
calculateReferenceModel @ 4011-Section03.js:1758
calculateAll @ 4011-Section03.js:1697
(anonymous) @ 4011-Calculator.js:513
calculateAll @ 4011-Calculator.js:509
(anonymous) @ index.html:1077
 [S13 Error] Error during calculateFreeCooling: 
calculateFreeCooling @ 4011-Section13.js:3360Understand this errorAI
 [Section13] 🧊 COOLING CALC: mode=TGT, coolingSystemType="Cooling", heatingType="Heatpump", isCoolingActive=true, coolingDemand=9572.242304946165
 [Section13] 🧊 COOLING RESULTS: d_117=3593.80399917213, j_116=2.663540445486518, l_116=0, l_114=5978.438305774035
2 [S14 LISTENER] 🔥 d_122 changed - triggering calculateAll() + UI update
 [S15] 🎯 TGT S03 CLIMATE READ: h_23=18, d_23=-24, d_24=30, h_24=24
 [StateManager] 🎯 h_10 setValue: "93.42863573628563" (state: calculated)
 [StateManager] h_10 setValue stack trace:
setValue @ 4011-StateManager.js:346
calculateValues @ 4011-Section15.js:1842
calculateTargetModel @ 4011-Section15.js:1670
calculateAll @ 4011-Section15.js:1328
(anonymous) @ 4011-Section15.js:2131
(anonymous) @ 4011-StateManager.js:543
notifyListeners @ 4011-StateManager.js:541
setValue @ 4011-StateManager.js:419
setFieldValue @ 4011-Section13.js:636
calculateCoolingVentilation @ 4011-Section13.js:3259
calculateCoolingSystem @ 4011-Section13.js:3027
calculateTargetModel @ 4011-Section13.js:3547
calculateAll @ 4011-Section13.js:3390
(anonymous) @ 4011-Section13.js:2806
(anonymous) @ 4011-StateManager.js:543
notifyListeners @ 4011-StateManager.js:541
setValue @ 4011-StateManager.js:419
setValue @ 4011-Section03.js:217
setFieldValue @ 4011-Section03.js:453
calculateGroundFacing @ 4011-Section03.js:1687
calculateReferenceModel @ 4011-Section03.js:1758
calculateAll @ 4011-Section03.js:1697
(anonymous) @ 4011-Calculator.js:513
calculateAll @ 4011-Calculator.js:509
(anonymous) @ index.html:1077
 [S15] 🎯 TGT S03 CLIMATE READ: h_23=18, d_23=-24, d_24=30, h_24=24
 [StateManager] 🎯 h_10 setValue: "93.42863573628563" (state: calculated)
 [StateManager] h_10 setValue stack trace:
setValue @ 4011-StateManager.js:346
calculateValues @ 4011-Section15.js:1842
calculateTargetModel @ 4011-Section15.js:1670
calculateAll @ 4011-Section15.js:1328
(anonymous) @ 4011-Section15.js:2131
(anonymous) @ 4011-StateManager.js:543
notifyListeners @ 4011-StateManager.js:541
setValue @ 4011-StateManager.js:419
setFieldValue @ 4011-Section13.js:636
calculateCoolingVentilation @ 4011-Section13.js:3259
calculateCoolingSystem @ 4011-Section13.js:3027
calculateTargetModel @ 4011-Section13.js:3547
calculateAll @ 4011-Section13.js:3390
(anonymous) @ 4011-Section13.js:2806
(anonymous) @ 4011-StateManager.js:543
notifyListeners @ 4011-StateManager.js:541
setValue @ 4011-StateManager.js:419
setValue @ 4011-Section03.js:217
setFieldValue @ 4011-Section03.js:453
calculateGroundFacing @ 4011-Section03.js:1687
calculateReferenceModel @ 4011-Section03.js:1758
calculateAll @ 4011-Section03.js:1697
(anonymous) @ 4011-Calculator.js:513
calculateAll @ 4011-Calculator.js:509
(anonymous) @ index.html:1077
2 [S14 LISTENER] 🔥 d_122 changed - triggering calculateAll() + UI update
 [S15] 🎯 TGT S03 CLIMATE READ: h_23=18, d_23=-24, d_24=30, h_24=24
 [StateManager] 🎯 h_10 setValue: "93.42863573628563" (state: calculated)
 [StateManager] h_10 setValue stack trace:
setValue @ 4011-StateManager.js:346
calculateValues @ 4011-Section15.js:1842
calculateTargetModel @ 4011-Section15.js:1670
calculateAll @ 4011-Section15.js:1328
(anonymous) @ 4011-Section15.js:2131
(anonymous) @ 4011-StateManager.js:543
notifyListeners @ 4011-StateManager.js:541
setValue @ 4011-StateManager.js:419
setFieldValue @ 4011-Section13.js:636
updateTargetModelDOMValues @ 4011-Section13.js:3671
calculateTargetModel @ 4011-Section13.js:3557
calculateAll @ 4011-Section13.js:3390
(anonymous) @ 4011-Section13.js:2806
(anonymous) @ 4011-StateManager.js:543
notifyListeners @ 4011-StateManager.js:541
setValue @ 4011-StateManager.js:419
setValue @ 4011-Section03.js:217
setFieldValue @ 4011-Section03.js:453
calculateGroundFacing @ 4011-Section03.js:1687
calculateReferenceModel @ 4011-Section03.js:1758
calculateAll @ 4011-Section03.js:1697
(anonymous) @ 4011-Calculator.js:513
calculateAll @ 4011-Calculator.js:509
(anonymous) @ index.html:1077
 [S15] 🎯 TGT S03 CLIMATE READ: h_23=18, d_23=-24, d_24=30, h_24=24
 [StateManager] 🎯 h_10 setValue: "93.42863573628563" (state: calculated)
 [StateManager] h_10 setValue stack trace:
setValue @ 4011-StateManager.js:346
calculateValues @ 4011-Section15.js:1842
calculateTargetModel @ 4011-Section15.js:1670
calculateAll @ 4011-Section15.js:1328
(anonymous) @ 4011-Section15.js:2131
(anonymous) @ 4011-StateManager.js:543
notifyListeners @ 4011-StateManager.js:541
setValue @ 4011-StateManager.js:419
setFieldValue @ 4011-Section13.js:636
updateTargetModelDOMValues @ 4011-Section13.js:3671
calculateTargetModel @ 4011-Section13.js:3557
calculateAll @ 4011-Section13.js:3390
(anonymous) @ 4011-Section13.js:2806
(anonymous) @ 4011-StateManager.js:543
notifyListeners @ 4011-StateManager.js:541
setValue @ 4011-StateManager.js:419
setValue @ 4011-Section03.js:217
setFieldValue @ 4011-Section03.js:453
calculateGroundFacing @ 4011-Section03.js:1687
calculateReferenceModel @ 4011-Section03.js:1758
calculateAll @ 4011-Section03.js:1697
(anonymous) @ 4011-Calculator.js:513
calculateAll @ 4011-Calculator.js:509
(anonymous) @ index.html:1077
 [S15] 🎯 TGT S03 CLIMATE READ: h_23=18, d_23=-24, d_24=30, h_24=24
 [StateManager] 🎯 h_10 setValue: "93.42863573628563" (state: calculated)
 [StateManager] h_10 setValue stack trace:
setValue @ 4011-StateManager.js:346
calculateValues @ 4011-Section15.js:1842
calculateTargetModel @ 4011-Section15.js:1670
calculateAll @ 4011-Section15.js:1328
(anonymous) @ 4011-Section15.js:2131
(anonymous) @ 4011-StateManager.js:543
notifyListeners @ 4011-StateManager.js:541
setValue @ 4011-StateManager.js:419
setFieldValue @ 4011-Section13.js:636
updateTargetModelDOMValues @ 4011-Section13.js:3685
calculateTargetModel @ 4011-Section13.js:3557
calculateAll @ 4011-Section13.js:3390
(anonymous) @ 4011-Section13.js:2806
(anonymous) @ 4011-StateManager.js:543
notifyListeners @ 4011-StateManager.js:541
setValue @ 4011-StateManager.js:419
setValue @ 4011-Section03.js:217
setFieldValue @ 4011-Section03.js:453
calculateGroundFacing @ 4011-Section03.js:1687
calculateReferenceModel @ 4011-Section03.js:1758
calculateAll @ 4011-Section03.js:1697
(anonymous) @ 4011-Calculator.js:513
calculateAll @ 4011-Calculator.js:509
(anonymous) @ index.html:1077
 [S15] 🎯 TGT S03 CLIMATE READ: h_23=18, d_23=-24, d_24=30, h_24=24
 [StateManager] 🎯 h_10 setValue: "93.42863573628563" (state: calculated)
 [StateManager] h_10 setValue stack trace:
setValue @ 4011-StateManager.js:346
calculateValues @ 4011-Section15.js:1842
calculateTargetModel @ 4011-Section15.js:1670
calculateAll @ 4011-Section15.js:1328
(anonymous) @ 4011-Section15.js:2131
(anonymous) @ 4011-StateManager.js:543
notifyListeners @ 4011-StateManager.js:541
setValue @ 4011-StateManager.js:419
setFieldValue @ 4011-Section13.js:636
updateTargetModelDOMValues @ 4011-Section13.js:3685
calculateTargetModel @ 4011-Section13.js:3557
calculateAll @ 4011-Section13.js:3390
(anonymous) @ 4011-Section13.js:2806
(anonymous) @ 4011-StateManager.js:543
notifyListeners @ 4011-StateManager.js:541
setValue @ 4011-StateManager.js:419
setValue @ 4011-Section03.js:217
setFieldValue @ 4011-Section03.js:453
calculateGroundFacing @ 4011-Section03.js:1687
calculateReferenceModel @ 4011-Section03.js:1758
calculateAll @ 4011-Section03.js:1697
(anonymous) @ 4011-Calculator.js:513
calculateAll @ 4011-Calculator.js:509
(anonymous) @ index.html:1077
 [Section13] Target Model calculations complete
 [Section13] ✅ Target Model complete
 [Section13] ⏭️ Skipping Reference value re-write - triggered in target mode
 [Section13] 🎉 DUAL-ENGINE CALCULATIONS COMPLETE
 [S15] 🎯 TGT S03 CLIMATE READ: h_23=18, d_23=-24, d_24=30, h_24=24
 [StateManager] 🎯 h_10 setValue: "93.42863573628563" (state: calculated)
 [StateManager] h_10 setValue stack trace:
setValue @ 4011-StateManager.js:346
calculateValues @ 4011-Section15.js:1842
calculateTargetModel @ 4011-Section15.js:1670
calculateAll @ 4011-Section15.js:1328
(anonymous) @ 4011-Section15.js:2131
(anonymous) @ 4011-StateManager.js:543
notifyListeners @ 4011-StateManager.js:541
setValue @ 4011-StateManager.js:419
(anonymous) @ 4011-Section03.js:1807
storeReferenceResults @ 4011-Section03.js:1805
calculateReferenceModel @ 4011-Section03.js:1765
calculateAll @ 4011-Section03.js:1697
(anonymous) @ 4011-Calculator.js:513
calculateAll @ 4011-Calculator.js:509
(anonymous) @ index.html:1077
 [S15] 🎯 TGT S03 CLIMATE READ: h_23=18, d_23=-24, d_24=30, h_24=24
 [StateManager] 🎯 h_10 setValue: "93.42863573628563" (state: calculated)
 [StateManager] h_10 setValue stack trace:
setValue @ 4011-StateManager.js:346
calculateValues @ 4011-Section15.js:1842
calculateTargetModel @ 4011-Section15.js:1670
calculateAll @ 4011-Section15.js:1328
(anonymous) @ 4011-Section15.js:2131
(anonymous) @ 4011-StateManager.js:543
notifyListeners @ 4011-StateManager.js:541
setValue @ 4011-StateManager.js:419
(anonymous) @ 4011-Section03.js:1807
storeReferenceResults @ 4011-Section03.js:1805
calculateReferenceModel @ 4011-Section03.js:1765
calculateAll @ 4011-Section03.js:1697
(anonymous) @ 4011-Calculator.js:513
calculateAll @ 4011-Calculator.js:509
(anonymous) @ index.html:1077
 [S15] 🎯 TGT S03 CLIMATE READ: h_23=18, d_23=-24, d_24=30, h_24=24
 [StateManager] 🎯 h_10 setValue: "93.42863573628563" (state: calculated)
 [StateManager] h_10 setValue stack trace:
setValue @ 4011-StateManager.js:346
calculateValues @ 4011-Section15.js:1842
calculateTargetModel @ 4011-Section15.js:1670
calculateAll @ 4011-Section15.js:1328
(anonymous) @ 4011-Section15.js:2131
(anonymous) @ 4011-StateManager.js:543
notifyListeners @ 4011-StateManager.js:541
setValue @ 4011-StateManager.js:419
(anonymous) @ 4011-Section03.js:1807
storeReferenceResults @ 4011-Section03.js:1805
calculateReferenceModel @ 4011-Section03.js:1765
calculateAll @ 4011-Section03.js:1697
(anonymous) @ 4011-Calculator.js:513
calculateAll @ 4011-Calculator.js:509
(anonymous) @ index.html:1077
 [S15] 🎯 TGT S03 CLIMATE READ: h_23=18, d_23=-24, d_24=30, h_24=24
 [StateManager] 🎯 h_10 setValue: "93.42863573628563" (state: calculated)
 [StateManager] h_10 setValue stack trace:
setValue @ 4011-StateManager.js:346
calculateValues @ 4011-Section15.js:1842
calculateTargetModel @ 4011-Section15.js:1670
calculateAll @ 4011-Section15.js:1328
(anonymous) @ 4011-Section15.js:2131
(anonymous) @ 4011-StateManager.js:543
notifyListeners @ 4011-StateManager.js:541
setValue @ 4011-StateManager.js:419
(anonymous) @ 4011-Section03.js:1807
storeReferenceResults @ 4011-Section03.js:1805
calculateReferenceModel @ 4011-Section03.js:1765
calculateAll @ 4011-Section03.js:1697
(anonymous) @ 4011-Calculator.js:513
calculateAll @ 4011-Calculator.js:509
(anonymous) @ index.html:1077
 [S15] 🎯 TGT S03 CLIMATE READ: h_23=18, d_23=-24, d_24=30, h_24=24
 [StateManager] 🎯 h_10 setValue: "93.42863573628563" (state: calculated)
 [StateManager] h_10 setValue stack trace:
setValue @ 4011-StateManager.js:346
calculateValues @ 4011-Section15.js:1842
calculateTargetModel @ 4011-Section15.js:1670
calculateAll @ 4011-Section15.js:1328
(anonymous) @ 4011-Section15.js:2131
(anonymous) @ 4011-StateManager.js:543
notifyListeners @ 4011-StateManager.js:541
setValue @ 4011-StateManager.js:419
(anonymous) @ 4011-Section03.js:1807
storeReferenceResults @ 4011-Section03.js:1805
calculateReferenceModel @ 4011-Section03.js:1765
calculateAll @ 4011-Section03.js:1697
(anonymous) @ 4011-Calculator.js:513
calculateAll @ 4011-Calculator.js:509
(anonymous) @ index.html:1077
 [S15] 🎯 TGT S03 CLIMATE READ: h_23=18, d_23=-24, d_24=30, h_24=24
 [StateManager] 🎯 h_10 setValue: "93.42863573628563" (state: calculated)
 [StateManager] h_10 setValue stack trace:
setValue @ 4011-StateManager.js:346
calculateValues @ 4011-Section15.js:1842
calculateTargetModel @ 4011-Section15.js:1670
calculateAll @ 4011-Section15.js:1328
(anonymous) @ 4011-Section15.js:2131
(anonymous) @ 4011-StateManager.js:543
notifyListeners @ 4011-StateManager.js:541
setValue @ 4011-StateManager.js:419
(anonymous) @ 4011-Section03.js:1807
storeReferenceResults @ 4011-Section03.js:1805
calculateReferenceModel @ 4011-Section03.js:1765
calculateAll @ 4011-Section03.js:1697
(anonymous) @ 4011-Calculator.js:513
calculateAll @ 4011-Calculator.js:509
(anonymous) @ index.html:1077
 [S15] 🎯 TGT S03 CLIMATE READ: h_23=18, d_23=-24, d_24=30, h_24=24
 [StateManager] 🎯 h_10 setValue: "93.42863573628563" (state: calculated)
 [StateManager] h_10 setValue stack trace:
setValue @ 4011-StateManager.js:346
calculateValues @ 4011-Section15.js:1842
calculateTargetModel @ 4011-Section15.js:1670
calculateAll @ 4011-Section15.js:1328
(anonymous) @ 4011-Section15.js:2131
(anonymous) @ 4011-StateManager.js:543
notifyListeners @ 4011-StateManager.js:541
setValue @ 4011-StateManager.js:419
(anonymous) @ 4011-Section03.js:1807
storeReferenceResults @ 4011-Section03.js:1805
calculateReferenceModel @ 4011-Section03.js:1765
calculateAll @ 4011-Section03.js:1697
(anonymous) @ 4011-Calculator.js:513
calculateAll @ 4011-Calculator.js:509
(anonymous) @ index.html:1077
 [S15] 🎯 TGT S03 CLIMATE READ: h_23=18, d_23=-24, d_24=30, h_24=24
 [StateManager] 🎯 h_10 setValue: "93.42863573628563" (state: calculated)
 [StateManager] h_10 setValue stack trace:
setValue @ 4011-StateManager.js:346
calculateValues @ 4011-Section15.js:1842
calculateTargetModel @ 4011-Section15.js:1670
calculateAll @ 4011-Section15.js:1328
(anonymous) @ 4011-Section15.js:2131
(anonymous) @ 4011-StateManager.js:543
notifyListeners @ 4011-StateManager.js:541
setValue @ 4011-StateManager.js:419
(anonymous) @ 4011-Section03.js:1807
storeReferenceResults @ 4011-Section03.js:1805
calculateReferenceModel @ 4011-Section03.js:1765
calculateAll @ 4011-Section03.js:1697
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
 [S15] 🎯 TGT S03 CLIMATE READ: h_23=18, d_23=-24, d_24=30, h_24=24
 [StateManager] 🎯 h_10 setValue: "93.42863573628563" (state: calculated)
 [StateManager] h_10 setValue stack trace:
setValue @ 4011-StateManager.js:346
calculateValues @ 4011-Section15.js:1842
calculateTargetModel @ 4011-Section15.js:1670
calculateAll @ 4011-Section15.js:1328
(anonymous) @ 4011-Section15.js:2131
(anonymous) @ 4011-StateManager.js:543
notifyListeners @ 4011-StateManager.js:541
setValue @ 4011-StateManager.js:419
setFieldValue @ 4011-Section13.js:636
calculateFreeCooling @ 4011-Section13.js:3342
calculateTargetModel @ 4011-Section13.js:3545
calculateAll @ 4011-Section13.js:3390
(anonymous) @ 4011-Section13.js:2800
(anonymous) @ 4011-StateManager.js:543
notifyListeners @ 4011-StateManager.js:541
setValue @ 4011-StateManager.js:419
(anonymous) @ 4011-Section03.js:1807
storeReferenceResults @ 4011-Section03.js:1805
calculateReferenceModel @ 4011-Section03.js:1765
calculateAll @ 4011-Section03.js:1697
(anonymous) @ 4011-Calculator.js:513
calculateAll @ 4011-Calculator.js:509
(anonymous) @ index.html:1077
 [S15] 🎯 TGT S03 CLIMATE READ: h_23=18, d_23=-24, d_24=30, h_24=24
 [StateManager] 🎯 h_10 setValue: "93.42863573628563" (state: calculated)
 [StateManager] h_10 setValue stack trace:
setValue @ 4011-StateManager.js:346
calculateValues @ 4011-Section15.js:1842
calculateTargetModel @ 4011-Section15.js:1670
calculateAll @ 4011-Section15.js:1328
(anonymous) @ 4011-Section15.js:2131
(anonymous) @ 4011-StateManager.js:543
notifyListeners @ 4011-StateManager.js:541
setValue @ 4011-StateManager.js:419
setFieldValue @ 4011-Section13.js:636
calculateFreeCooling @ 4011-Section13.js:3342
calculateTargetModel @ 4011-Section13.js:3545
calculateAll @ 4011-Section13.js:3390
(anonymous) @ 4011-Section13.js:2800
(anonymous) @ 4011-StateManager.js:543
notifyListeners @ 4011-StateManager.js:541
setValue @ 4011-StateManager.js:419
(anonymous) @ 4011-Section03.js:1807
storeReferenceResults @ 4011-Section03.js:1805
calculateReferenceModel @ 4011-Section03.js:1765
calculateAll @ 4011-Section03.js:1697
(anonymous) @ 4011-Calculator.js:513
calculateAll @ 4011-Calculator.js:509
(anonymous) @ index.html:1077
 [S13 Error] Error during calculateFreeCooling: 
calculateFreeCooling @ 4011-Section13.js:3360Understand this errorAI
 [Section13] 🧊 COOLING CALC: mode=TGT, coolingSystemType="Cooling", heatingType="Heatpump", isCoolingActive=true, coolingDemand=9572.242304946165
 [Section13] 🧊 COOLING RESULTS: d_117=3593.80399917213, j_116=2.663540445486518, l_116=0, l_114=5978.438305774035
2 [S14 LISTENER] 🔥 d_122 changed - triggering calculateAll() + UI update
 [S15] 🎯 TGT S03 CLIMATE READ: h_23=18, d_23=-24, d_24=30, h_24=24
 [StateManager] 🎯 h_10 setValue: "93.42863573628563" (state: calculated)
 [StateManager] h_10 setValue stack trace:
setValue @ 4011-StateManager.js:346
calculateValues @ 4011-Section15.js:1842
calculateTargetModel @ 4011-Section15.js:1670
calculateAll @ 4011-Section15.js:1328
(anonymous) @ 4011-Section15.js:2131
(anonymous) @ 4011-StateManager.js:543
notifyListeners @ 4011-StateManager.js:541
setValue @ 4011-StateManager.js:419
setFieldValue @ 4011-Section13.js:636
calculateCoolingVentilation @ 4011-Section13.js:3259
calculateCoolingSystem @ 4011-Section13.js:3027
calculateTargetModel @ 4011-Section13.js:3547
calculateAll @ 4011-Section13.js:3390
(anonymous) @ 4011-Section13.js:2800
(anonymous) @ 4011-StateManager.js:543
notifyListeners @ 4011-StateManager.js:541
setValue @ 4011-StateManager.js:419
(anonymous) @ 4011-Section03.js:1807
storeReferenceResults @ 4011-Section03.js:1805
calculateReferenceModel @ 4011-Section03.js:1765
calculateAll @ 4011-Section03.js:1697
(anonymous) @ 4011-Calculator.js:513
calculateAll @ 4011-Calculator.js:509
(anonymous) @ index.html:1077
 [S15] 🎯 TGT S03 CLIMATE READ: h_23=18, d_23=-24, d_24=30, h_24=24
 [StateManager] 🎯 h_10 setValue: "93.42863573628563" (state: calculated)
 [StateManager] h_10 setValue stack trace:
setValue @ 4011-StateManager.js:346
calculateValues @ 4011-Section15.js:1842
calculateTargetModel @ 4011-Section15.js:1670
calculateAll @ 4011-Section15.js:1328
(anonymous) @ 4011-Section15.js:2131
(anonymous) @ 4011-StateManager.js:543
notifyListeners @ 4011-StateManager.js:541
setValue @ 4011-StateManager.js:419
setFieldValue @ 4011-Section13.js:636
calculateCoolingVentilation @ 4011-Section13.js:3259
calculateCoolingSystem @ 4011-Section13.js:3027
calculateTargetModel @ 4011-Section13.js:3547
calculateAll @ 4011-Section13.js:3390
(anonymous) @ 4011-Section13.js:2800
(anonymous) @ 4011-StateManager.js:543
notifyListeners @ 4011-StateManager.js:541
setValue @ 4011-StateManager.js:419
(anonymous) @ 4011-Section03.js:1807
storeReferenceResults @ 4011-Section03.js:1805
calculateReferenceModel @ 4011-Section03.js:1765
calculateAll @ 4011-Section03.js:1697
(anonymous) @ 4011-Calculator.js:513
calculateAll @ 4011-Calculator.js:509
(anonymous) @ index.html:1077
2 [S14 LISTENER] 🔥 d_122 changed - triggering calculateAll() + UI update
 [S15] 🎯 TGT S03 CLIMATE READ: h_23=18, d_23=-24, d_24=30, h_24=24
 [StateManager] 🎯 h_10 setValue: "93.42863573628563" (state: calculated)
 [StateManager] h_10 setValue stack trace:
setValue @ 4011-StateManager.js:346
calculateValues @ 4011-Section15.js:1842
calculateTargetModel @ 4011-Section15.js:1670
calculateAll @ 4011-Section15.js:1328
(anonymous) @ 4011-Section15.js:2131
(anonymous) @ 4011-StateManager.js:543
notifyListeners @ 4011-StateManager.js:541
setValue @ 4011-StateManager.js:419
setFieldValue @ 4011-Section13.js:636
updateTargetModelDOMValues @ 4011-Section13.js:3671
calculateTargetModel @ 4011-Section13.js:3557
calculateAll @ 4011-Section13.js:3390
(anonymous) @ 4011-Section13.js:2800
(anonymous) @ 4011-StateManager.js:543
notifyListeners @ 4011-StateManager.js:541
setValue @ 4011-StateManager.js:419
(anonymous) @ 4011-Section03.js:1807
storeReferenceResults @ 4011-Section03.js:1805
calculateReferenceModel @ 4011-Section03.js:1765
calculateAll @ 4011-Section03.js:1697
(anonymous) @ 4011-Calculator.js:513
calculateAll @ 4011-Calculator.js:509
(anonymous) @ index.html:1077
 [S15] 🎯 TGT S03 CLIMATE READ: h_23=18, d_23=-24, d_24=30, h_24=24
 [StateManager] 🎯 h_10 setValue: "93.42863573628563" (state: calculated)
 [StateManager] h_10 setValue stack trace:
setValue @ 4011-StateManager.js:346
calculateValues @ 4011-Section15.js:1842
calculateTargetModel @ 4011-Section15.js:1670
calculateAll @ 4011-Section15.js:1328
(anonymous) @ 4011-Section15.js:2131
(anonymous) @ 4011-StateManager.js:543
notifyListeners @ 4011-StateManager.js:541
setValue @ 4011-StateManager.js:419
setFieldValue @ 4011-Section13.js:636
updateTargetModelDOMValues @ 4011-Section13.js:3671
calculateTargetModel @ 4011-Section13.js:3557
calculateAll @ 4011-Section13.js:3390
(anonymous) @ 4011-Section13.js:2800
(anonymous) @ 4011-StateManager.js:543
notifyListeners @ 4011-StateManager.js:541
setValue @ 4011-StateManager.js:419
(anonymous) @ 4011-Section03.js:1807
storeReferenceResults @ 4011-Section03.js:1805
calculateReferenceModel @ 4011-Section03.js:1765
calculateAll @ 4011-Section03.js:1697
(anonymous) @ 4011-Calculator.js:513
calculateAll @ 4011-Calculator.js:509
(anonymous) @ index.html:1077
 [S15] 🎯 TGT S03 CLIMATE READ: h_23=18, d_23=-24, d_24=30, h_24=24
 [StateManager] 🎯 h_10 setValue: "93.42863573628563" (state: calculated)
 [StateManager] h_10 setValue stack trace:
setValue @ 4011-StateManager.js:346
calculateValues @ 4011-Section15.js:1842
calculateTargetModel @ 4011-Section15.js:1670
calculateAll @ 4011-Section15.js:1328
(anonymous) @ 4011-Section15.js:2131
(anonymous) @ 4011-StateManager.js:543
notifyListeners @ 4011-StateManager.js:541
setValue @ 4011-StateManager.js:419
setFieldValue @ 4011-Section13.js:636
updateTargetModelDOMValues @ 4011-Section13.js:3685
calculateTargetModel @ 4011-Section13.js:3557
calculateAll @ 4011-Section13.js:3390
(anonymous) @ 4011-Section13.js:2800
(anonymous) @ 4011-StateManager.js:543
notifyListeners @ 4011-StateManager.js:541
setValue @ 4011-StateManager.js:419
(anonymous) @ 4011-Section03.js:1807
storeReferenceResults @ 4011-Section03.js:1805
calculateReferenceModel @ 4011-Section03.js:1765
calculateAll @ 4011-Section03.js:1697
(anonymous) @ 4011-Calculator.js:513
calculateAll @ 4011-Calculator.js:509
(anonymous) @ index.html:1077
 [S15] 🎯 TGT S03 CLIMATE READ: h_23=18, d_23=-24, d_24=30, h_24=24
 [StateManager] 🎯 h_10 setValue: "93.42863573628563" (state: calculated)
 [StateManager] h_10 setValue stack trace:
setValue @ 4011-StateManager.js:346
calculateValues @ 4011-Section15.js:1842
calculateTargetModel @ 4011-Section15.js:1670
calculateAll @ 4011-Section15.js:1328
(anonymous) @ 4011-Section15.js:2131
(anonymous) @ 4011-StateManager.js:543
notifyListeners @ 4011-StateManager.js:541
setValue @ 4011-StateManager.js:419
setFieldValue @ 4011-Section13.js:636
updateTargetModelDOMValues @ 4011-Section13.js:3685
calculateTargetModel @ 4011-Section13.js:3557
calculateAll @ 4011-Section13.js:3390
(anonymous) @ 4011-Section13.js:2800
(anonymous) @ 4011-StateManager.js:543
notifyListeners @ 4011-StateManager.js:541
setValue @ 4011-StateManager.js:419
(anonymous) @ 4011-Section03.js:1807
storeReferenceResults @ 4011-Section03.js:1805
calculateReferenceModel @ 4011-Section03.js:1765
calculateAll @ 4011-Section03.js:1697
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
 [S15] 🎯 TGT S03 CLIMATE READ: h_23=18, d_23=-24, d_24=30, h_24=24
 [StateManager] 🎯 h_10 setValue: "93.42863573628563" (state: calculated)
 [StateManager] h_10 setValue stack trace:
setValue @ 4011-StateManager.js:346
calculateValues @ 4011-Section15.js:1842
calculateTargetModel @ 4011-Section15.js:1670
calculateAll @ 4011-Section15.js:1328
(anonymous) @ 4011-Section15.js:2131
(anonymous) @ 4011-StateManager.js:543
notifyListeners @ 4011-StateManager.js:541
setValue @ 4011-StateManager.js:419
setFieldValue @ 4011-Section13.js:636
calculateFreeCooling @ 4011-Section13.js:3342
calculateTargetModel @ 4011-Section13.js:3545
calculateAll @ 4011-Section13.js:3390
(anonymous) @ 4011-Section13.js:2806
(anonymous) @ 4011-StateManager.js:543
notifyListeners @ 4011-StateManager.js:541
setValue @ 4011-StateManager.js:419
(anonymous) @ 4011-Section03.js:1807
storeReferenceResults @ 4011-Section03.js:1805
calculateReferenceModel @ 4011-Section03.js:1765
calculateAll @ 4011-Section03.js:1697
(anonymous) @ 4011-Calculator.js:513
calculateAll @ 4011-Calculator.js:509
(anonymous) @ index.html:1077
 [S15] 🎯 TGT S03 CLIMATE READ: h_23=18, d_23=-24, d_24=30, h_24=24
 [StateManager] 🎯 h_10 setValue: "93.42863573628563" (state: calculated)
 [StateManager] h_10 setValue stack trace:
setValue @ 4011-StateManager.js:346
calculateValues @ 4011-Section15.js:1842
calculateTargetModel @ 4011-Section15.js:1670
calculateAll @ 4011-Section15.js:1328
(anonymous) @ 4011-Section15.js:2131
(anonymous) @ 4011-StateManager.js:543
notifyListeners @ 4011-StateManager.js:541
setValue @ 4011-StateManager.js:419
setFieldValue @ 4011-Section13.js:636
calculateFreeCooling @ 4011-Section13.js:3342
calculateTargetModel @ 4011-Section13.js:3545
calculateAll @ 4011-Section13.js:3390
(anonymous) @ 4011-Section13.js:2806
(anonymous) @ 4011-StateManager.js:543
notifyListeners @ 4011-StateManager.js:541
setValue @ 4011-StateManager.js:419
(anonymous) @ 4011-Section03.js:1807
storeReferenceResults @ 4011-Section03.js:1805
calculateReferenceModel @ 4011-Section03.js:1765
calculateAll @ 4011-Section03.js:1697
(anonymous) @ 4011-Calculator.js:513
calculateAll @ 4011-Calculator.js:509
(anonymous) @ index.html:1077
 [S13 Error] Error during calculateFreeCooling: 
calculateFreeCooling @ 4011-Section13.js:3360Understand this errorAI
 [Section13] 🧊 COOLING CALC: mode=TGT, coolingSystemType="Cooling", heatingType="Heatpump", isCoolingActive=true, coolingDemand=9572.242304946165
 [Section13] 🧊 COOLING RESULTS: d_117=3593.80399917213, j_116=2.663540445486518, l_116=0, l_114=5978.438305774035
2 [S14 LISTENER] 🔥 d_122 changed - triggering calculateAll() + UI update
 [S15] 🎯 TGT S03 CLIMATE READ: h_23=18, d_23=-24, d_24=30, h_24=24
 [StateManager] 🎯 h_10 setValue: "93.42863573628563" (state: calculated)
 [StateManager] h_10 setValue stack trace:
setValue @ 4011-StateManager.js:346
calculateValues @ 4011-Section15.js:1842
calculateTargetModel @ 4011-Section15.js:1670
calculateAll @ 4011-Section15.js:1328
(anonymous) @ 4011-Section15.js:2131
(anonymous) @ 4011-StateManager.js:543
notifyListeners @ 4011-StateManager.js:541
setValue @ 4011-StateManager.js:419
setFieldValue @ 4011-Section13.js:636
calculateCoolingVentilation @ 4011-Section13.js:3259
calculateCoolingSystem @ 4011-Section13.js:3027
calculateTargetModel @ 4011-Section13.js:3547
calculateAll @ 4011-Section13.js:3390
(anonymous) @ 4011-Section13.js:2806
(anonymous) @ 4011-StateManager.js:543
notifyListeners @ 4011-StateManager.js:541
setValue @ 4011-StateManager.js:419
(anonymous) @ 4011-Section03.js:1807
storeReferenceResults @ 4011-Section03.js:1805
calculateReferenceModel @ 4011-Section03.js:1765
calculateAll @ 4011-Section03.js:1697
(anonymous) @ 4011-Calculator.js:513
calculateAll @ 4011-Calculator.js:509
(anonymous) @ index.html:1077
 [S15] 🎯 TGT S03 CLIMATE READ: h_23=18, d_23=-24, d_24=30, h_24=24
 [StateManager] 🎯 h_10 setValue: "93.42863573628563" (state: calculated)
 [StateManager] h_10 setValue stack trace:
setValue @ 4011-StateManager.js:346
calculateValues @ 4011-Section15.js:1842
calculateTargetModel @ 4011-Section15.js:1670
calculateAll @ 4011-Section15.js:1328
(anonymous) @ 4011-Section15.js:2131
(anonymous) @ 4011-StateManager.js:543
notifyListeners @ 4011-StateManager.js:541
setValue @ 4011-StateManager.js:419
setFieldValue @ 4011-Section13.js:636
calculateCoolingVentilation @ 4011-Section13.js:3259
calculateCoolingSystem @ 4011-Section13.js:3027
calculateTargetModel @ 4011-Section13.js:3547
calculateAll @ 4011-Section13.js:3390
(anonymous) @ 4011-Section13.js:2806
(anonymous) @ 4011-StateManager.js:543
notifyListeners @ 4011-StateManager.js:541
setValue @ 4011-StateManager.js:419
(anonymous) @ 4011-Section03.js:1807
storeReferenceResults @ 4011-Section03.js:1805
calculateReferenceModel @ 4011-Section03.js:1765
calculateAll @ 4011-Section03.js:1697
(anonymous) @ 4011-Calculator.js:513
calculateAll @ 4011-Calculator.js:509
(anonymous) @ index.html:1077
2 [S14 LISTENER] 🔥 d_122 changed - triggering calculateAll() + UI update
 [S15] 🎯 TGT S03 CLIMATE READ: h_23=18, d_23=-24, d_24=30, h_24=24
 [StateManager] 🎯 h_10 setValue: "93.42863573628563" (state: calculated)
 [StateManager] h_10 setValue stack trace:
setValue @ 4011-StateManager.js:346
calculateValues @ 4011-Section15.js:1842
calculateTargetModel @ 4011-Section15.js:1670
calculateAll @ 4011-Section15.js:1328
(anonymous) @ 4011-Section15.js:2131
(anonymous) @ 4011-StateManager.js:543
notifyListeners @ 4011-StateManager.js:541
setValue @ 4011-StateManager.js:419
setFieldValue @ 4011-Section13.js:636
updateTargetModelDOMValues @ 4011-Section13.js:3671
calculateTargetModel @ 4011-Section13.js:3557
calculateAll @ 4011-Section13.js:3390
(anonymous) @ 4011-Section13.js:2806
(anonymous) @ 4011-StateManager.js:543
notifyListeners @ 4011-StateManager.js:541
setValue @ 4011-StateManager.js:419
(anonymous) @ 4011-Section03.js:1807
storeReferenceResults @ 4011-Section03.js:1805
calculateReferenceModel @ 4011-Section03.js:1765
calculateAll @ 4011-Section03.js:1697
(anonymous) @ 4011-Calculator.js:513
calculateAll @ 4011-Calculator.js:509
(anonymous) @ index.html:1077
 [S15] 🎯 TGT S03 CLIMATE READ: h_23=18, d_23=-24, d_24=30, h_24=24
 [StateManager] 🎯 h_10 setValue: "93.42863573628563" (state: calculated)
 [StateManager] h_10 setValue stack trace:
setValue @ 4011-StateManager.js:346
calculateValues @ 4011-Section15.js:1842
calculateTargetModel @ 4011-Section15.js:1670
calculateAll @ 4011-Section15.js:1328
(anonymous) @ 4011-Section15.js:2131
(anonymous) @ 4011-StateManager.js:543
notifyListeners @ 4011-StateManager.js:541
setValue @ 4011-StateManager.js:419
setFieldValue @ 4011-Section13.js:636
updateTargetModelDOMValues @ 4011-Section13.js:3671
calculateTargetModel @ 4011-Section13.js:3557
calculateAll @ 4011-Section13.js:3390
(anonymous) @ 4011-Section13.js:2806
(anonymous) @ 4011-StateManager.js:543
notifyListeners @ 4011-StateManager.js:541
setValue @ 4011-StateManager.js:419
(anonymous) @ 4011-Section03.js:1807
storeReferenceResults @ 4011-Section03.js:1805
calculateReferenceModel @ 4011-Section03.js:1765
calculateAll @ 4011-Section03.js:1697
(anonymous) @ 4011-Calculator.js:513
calculateAll @ 4011-Calculator.js:509
(anonymous) @ index.html:1077
 [S15] 🎯 TGT S03 CLIMATE READ: h_23=18, d_23=-24, d_24=30, h_24=24
 [StateManager] 🎯 h_10 setValue: "93.42863573628563" (state: calculated)
 [StateManager] h_10 setValue stack trace:
setValue @ 4011-StateManager.js:346
calculateValues @ 4011-Section15.js:1842
calculateTargetModel @ 4011-Section15.js:1670
calculateAll @ 4011-Section15.js:1328
(anonymous) @ 4011-Section15.js:2131
(anonymous) @ 4011-StateManager.js:543
notifyListeners @ 4011-StateManager.js:541
setValue @ 4011-StateManager.js:419
setFieldValue @ 4011-Section13.js:636
updateTargetModelDOMValues @ 4011-Section13.js:3685
calculateTargetModel @ 4011-Section13.js:3557
calculateAll @ 4011-Section13.js:3390
(anonymous) @ 4011-Section13.js:2806
(anonymous) @ 4011-StateManager.js:543
notifyListeners @ 4011-StateManager.js:541
setValue @ 4011-StateManager.js:419
(anonymous) @ 4011-Section03.js:1807
storeReferenceResults @ 4011-Section03.js:1805
calculateReferenceModel @ 4011-Section03.js:1765
calculateAll @ 4011-Section03.js:1697
(anonymous) @ 4011-Calculator.js:513
calculateAll @ 4011-Calculator.js:509
(anonymous) @ index.html:1077
 [S15] 🎯 TGT S03 CLIMATE READ: h_23=18, d_23=-24, d_24=30, h_24=24
 [StateManager] 🎯 h_10 setValue: "93.42863573628563" (state: calculated)
 [StateManager] h_10 setValue stack trace:
setValue @ 4011-StateManager.js:346
calculateValues @ 4011-Section15.js:1842
calculateTargetModel @ 4011-Section15.js:1670
calculateAll @ 4011-Section15.js:1328
(anonymous) @ 4011-Section15.js:2131
(anonymous) @ 4011-StateManager.js:543
notifyListeners @ 4011-StateManager.js:541
setValue @ 4011-StateManager.js:419
setFieldValue @ 4011-Section13.js:636
updateTargetModelDOMValues @ 4011-Section13.js:3685
calculateTargetModel @ 4011-Section13.js:3557
calculateAll @ 4011-Section13.js:3390
(anonymous) @ 4011-Section13.js:2806
(anonymous) @ 4011-StateManager.js:543
notifyListeners @ 4011-StateManager.js:541
setValue @ 4011-StateManager.js:419
(anonymous) @ 4011-Section03.js:1807
storeReferenceResults @ 4011-Section03.js:1805
calculateReferenceModel @ 4011-Section03.js:1765
calculateAll @ 4011-Section03.js:1697
(anonymous) @ 4011-Calculator.js:513
calculateAll @ 4011-Calculator.js:509
(anonymous) @ index.html:1077
 [Section13] Target Model calculations complete
 [Section13] ✅ Target Model complete
 [Section13] ⏭️ Skipping Reference value re-write - triggered in target mode
 [Section13] 🎉 DUAL-ENGINE CALCULATIONS COMPLETE
 [S12] U-agg REF: TB%=50 → g_101=0.347926, g_102=0.405405
 [S15] 🎯 TGT S03 CLIMATE READ: h_23=18, d_23=-24, d_24=30, h_24=24
 [StateManager] 🎯 h_10 setValue: "93.42863573628563" (state: calculated)
 [StateManager] h_10 setValue stack trace:
setValue @ 4011-StateManager.js:346
calculateValues @ 4011-Section15.js:1842
calculateTargetModel @ 4011-Section15.js:1670
calculateAll @ 4011-Section15.js:1328
(anonymous) @ 4011-Section15.js:2131
(anonymous) @ 4011-StateManager.js:543
notifyListeners @ 4011-StateManager.js:541
setValue @ 4011-StateManager.js:419
setCalculatedValue @ 4011-Section12.js:1170
calculateCombinedUValue @ 4011-Section12.js:1604
calculateReferenceModel @ 4011-Section12.js:2232
calculateAll @ 4011-Section12.js:2203
(anonymous) @ 4011-Calculator.js:513
calculateAll @ 4011-Calculator.js:509
(anonymous) @ index.html:1077
 [S15] 🎯 TGT S03 CLIMATE READ: h_23=18, d_23=-24, d_24=30, h_24=24
 [StateManager] 🎯 h_10 setValue: "93.42863573628563" (state: calculated)
 [StateManager] h_10 setValue stack trace:
setValue @ 4011-StateManager.js:346
calculateValues @ 4011-Section15.js:1842
calculateTargetModel @ 4011-Section15.js:1670
calculateAll @ 4011-Section15.js:1328
(anonymous) @ 4011-Section15.js:2131
(anonymous) @ 4011-StateManager.js:543
notifyListeners @ 4011-StateManager.js:541
setValue @ 4011-StateManager.js:419
setCalculatedValue @ 4011-Section12.js:1170
calculateCombinedUValue @ 4011-Section12.js:1604
calculateReferenceModel @ 4011-Section12.js:2232
calculateAll @ 4011-Section12.js:2203
(anonymous) @ 4011-Calculator.js:513
calculateAll @ 4011-Calculator.js:509
(anonymous) @ index.html:1077
 [S15] 🎯 TGT S03 CLIMATE READ: h_23=18, d_23=-24, d_24=30, h_24=24
 [StateManager] 🎯 h_10 setValue: "93.42863573628563" (state: calculated)
 [StateManager] h_10 setValue stack trace:
setValue @ 4011-StateManager.js:346
calculateValues @ 4011-Section15.js:1842
calculateTargetModel @ 4011-Section15.js:1670
calculateAll @ 4011-Section15.js:1328
(anonymous) @ 4011-Section15.js:2131
(anonymous) @ 4011-StateManager.js:543
notifyListeners @ 4011-StateManager.js:541
setValue @ 4011-StateManager.js:419
setCalculatedValue @ 4011-Section12.js:1170
calculateCombinedUValue @ 4011-Section12.js:1604
calculateReferenceModel @ 4011-Section12.js:2232
calculateAll @ 4011-Section12.js:2203
(anonymous) @ 4011-Calculator.js:513
calculateAll @ 4011-Calculator.js:509
(anonymous) @ index.html:1077
 [S15] 🎯 TGT S03 CLIMATE READ: h_23=18, d_23=-24, d_24=30, h_24=24
 [StateManager] 🎯 h_10 setValue: "93.42863573628563" (state: calculated)
 [StateManager] h_10 setValue stack trace:
setValue @ 4011-StateManager.js:346
calculateValues @ 4011-Section15.js:1842
calculateTargetModel @ 4011-Section15.js:1670
calculateAll @ 4011-Section15.js:1328
(anonymous) @ 4011-Section15.js:2131
(anonymous) @ 4011-StateManager.js:543
notifyListeners @ 4011-StateManager.js:541
setValue @ 4011-StateManager.js:419
setCalculatedValue @ 4011-Section12.js:1170
calculateCombinedUValue @ 4011-Section12.js:1604
calculateReferenceModel @ 4011-Section12.js:2232
calculateAll @ 4011-Section12.js:2203
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
 [StateManager] 🎯 h_10 setValue: "93.42863573628563" (state: calculated)
 [StateManager] h_10 setValue stack trace:
setValue @ 4011-StateManager.js:346
calculateValues @ 4011-Section15.js:1842
calculateTargetModel @ 4011-Section15.js:1670
calculateAll @ 4011-Section15.js:1328
(anonymous) @ 4011-Section15.js:2131
(anonymous) @ 4011-StateManager.js:543
notifyListeners @ 4011-StateManager.js:541
setValue @ 4011-StateManager.js:419
setCalculatedValue @ 4011-Section12.js:1170
calculateEnvelopeTotals @ 4011-Section12.js:2155
calculateReferenceModel @ 4011-Section12.js:2248
calculateAll @ 4011-Section12.js:2203
(anonymous) @ 4011-Calculator.js:513
calculateAll @ 4011-Calculator.js:509
(anonymous) @ index.html:1077
 [S15] 🎯 TGT S03 CLIMATE READ: h_23=18, d_23=-24, d_24=30, h_24=24
 [StateManager] 🎯 h_10 setValue: "93.42863573628563" (state: calculated)
 [StateManager] h_10 setValue stack trace:
setValue @ 4011-StateManager.js:346
calculateValues @ 4011-Section15.js:1842
calculateTargetModel @ 4011-Section15.js:1670
calculateAll @ 4011-Section15.js:1328
(anonymous) @ 4011-Section15.js:2131
(anonymous) @ 4011-StateManager.js:543
notifyListeners @ 4011-StateManager.js:541
setValue @ 4011-StateManager.js:419
setCalculatedValue @ 4011-Section12.js:1170
calculateEnvelopeTotals @ 4011-Section12.js:2155
calculateReferenceModel @ 4011-Section12.js:2248
calculateAll @ 4011-Section12.js:2203
(anonymous) @ 4011-Calculator.js:513
calculateAll @ 4011-Calculator.js:509
(anonymous) @ index.html:1077
 [S15] 🎯 TGT S03 CLIMATE READ: h_23=18, d_23=-24, d_24=30, h_24=24
 [StateManager] 🎯 h_10 setValue: "93.42863573628563" (state: calculated)
 [StateManager] h_10 setValue stack trace:
setValue @ 4011-StateManager.js:346
calculateValues @ 4011-Section15.js:1842
calculateTargetModel @ 4011-Section15.js:1670
calculateAll @ 4011-Section15.js:1328
(anonymous) @ 4011-Section15.js:2131
(anonymous) @ 4011-StateManager.js:543
notifyListeners @ 4011-StateManager.js:541
setValue @ 4011-StateManager.js:419
setCalculatedValue @ 4011-Section12.js:1170
calculateEnvelopeTotals @ 4011-Section12.js:2155
calculateReferenceModel @ 4011-Section12.js:2248
calculateAll @ 4011-Section12.js:2203
(anonymous) @ 4011-Calculator.js:513
calculateAll @ 4011-Calculator.js:509
(anonymous) @ index.html:1077
 [S15] 🎯 TGT S03 CLIMATE READ: h_23=18, d_23=-24, d_24=30, h_24=24
 [StateManager] 🎯 h_10 setValue: "93.42863573628563" (state: calculated)
 [StateManager] h_10 setValue stack trace:
setValue @ 4011-StateManager.js:346
calculateValues @ 4011-Section15.js:1842
calculateTargetModel @ 4011-Section15.js:1670
calculateAll @ 4011-Section15.js:1328
(anonymous) @ 4011-Section15.js:2131
(anonymous) @ 4011-StateManager.js:543
notifyListeners @ 4011-StateManager.js:541
setValue @ 4011-StateManager.js:419
setCalculatedValue @ 4011-Section12.js:1170
calculateEnvelopeTotals @ 4011-Section12.js:2155
calculateReferenceModel @ 4011-Section12.js:2248
calculateAll @ 4011-Section12.js:2203
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
4011-Section13.js:3389 [Section13] 🔄 Starting Target Model calculations...
4011-Section13.js:721 🔍 [S13-CONTEXT] Creating target context: g_118="Volume by Schedule" from TargetState
4011-Section13.js:725 🔍 [S13-CONTEXT] TargetState.g_118="Volume by Schedule", ReferenceState.g_118="Volume Constant"
4011-Section13.js:3520 [Section13] Running Target Model calculations...
4011-Section13.js:2857 [S13] TGT HEATING: system=Heatpump, ted=119171.54500166589, afue=0.98, cop=3.663540445486518
4011-Section13.js:3083 🔍 [S13-VENT] calculateVentilationRates: ventMethod="Volume by Schedule", ach(l_118)=3, ratePerPerson(d_119)=14, volume(d_105)=8000
4011-Section13.js:3086 🔍 [S13-VENT] isReferenceCalculation=false, hasContext=true
4011-Section13.js:3094 🔍 [S13-VENT] calculateVentilationValues: ventMethod="Volume by Schedule", ach(l_118)=3, ratePerPerson(d_119)=14, volume(d_105)=8000
4011-Section13.js:3097 🔍 [S13-VENT] Supporting values: occupants(d_63)=126, occupiedHours(i_63)=4380, totalHours(j_63)=8760
4011-Section13.js:3129 ✅ [S13-VENT] Final d_120 result: 3333.333333333333 L/s (from method="Volume by Schedule", ach=3, volume=8000)
4011-Section15.js:1758 [S15] 🎯 TGT S03 CLIMATE READ: h_23=18, d_23=-24, d_24=30, h_24=24
4011-StateManager.js:343 [StateManager] 🎯 h_10 setValue: "93.42863573628563" (state: calculated)
4011-StateManager.js:346 [StateManager] h_10 setValue stack trace:
setValue @ 4011-StateManager.js:346
calculateValues @ 4011-Section15.js:1842
calculateTargetModel @ 4011-Section15.js:1670
calculateAll @ 4011-Section15.js:1328
(anonymous) @ 4011-Section15.js:2131
(anonymous) @ 4011-StateManager.js:543
notifyListeners @ 4011-StateManager.js:541
setValue @ 4011-StateManager.js:419
setFieldValue @ 4011-Section13.js:636
calculateFreeCooling @ 4011-Section13.js:3342
calculateTargetModel @ 4011-Section13.js:3545
calculateAll @ 4011-Section13.js:3390
(anonymous) @ 4011-Calculator.js:513
calculateAll @ 4011-Calculator.js:509
(anonymous) @ index.html:1077
4011-Section15.js:1758 [S15] 🎯 TGT S03 CLIMATE READ: h_23=18, d_23=-24, d_24=30, h_24=24
4011-StateManager.js:343 [StateManager] 🎯 h_10 setValue: "93.42863573628563" (state: calculated)
4011-StateManager.js:346 [StateManager] h_10 setValue stack trace:
setValue @ 4011-StateManager.js:346
calculateValues @ 4011-Section15.js:1842
calculateTargetModel @ 4011-Section15.js:1670
calculateAll @ 4011-Section15.js:1328
(anonymous) @ 4011-Section15.js:2131
(anonymous) @ 4011-StateManager.js:543
notifyListeners @ 4011-StateManager.js:541
setValue @ 4011-StateManager.js:419
setFieldValue @ 4011-Section13.js:636
calculateFreeCooling @ 4011-Section13.js:3342
calculateTargetModel @ 4011-Section13.js:3545
calculateAll @ 4011-Section13.js:3390
(anonymous) @ 4011-Calculator.js:513
calculateAll @ 4011-Calculator.js:509
(anonymous) @ index.html:1077
4011-Section13.js:3360 [S13 Error] Error during calculateFreeCooling: ReferenceError: targetCoolingContext is not defined
    at calculateFreeCooling (4011-Section13.js:3354:92)
    at calculateTargetModel (4011-Section13.js:3545:16)
    at Object.calculateAll (4011-Section13.js:3390:7)
    at 4011-Calculator.js:513:25
    at Array.forEach (<anonymous>)
    at Object.calculateAll (4011-Calculator.js:509:15)
    at index.html:1077:29
calculateFreeCooling @ 4011-Section13.js:3360Understand this errorAI
4011-Section13.js:2961 [Section13] 🧊 COOLING CALC: mode=TGT, coolingSystemType="Cooling", heatingType="Heatpump", isCoolingActive=true, coolingDemand=9572.242304946165
4011-Section13.js:3023 [Section13] 🧊 COOLING RESULTS: d_117=3593.80399917213, j_116=2.663540445486518, l_116=0, l_114=5978.438305774035
24011-Section14.js:1414 [S14 LISTENER] 🔥 d_122 changed - triggering calculateAll() + UI update
4011-Section15.js:1758 [S15] 🎯 TGT S03 CLIMATE READ: h_23=18, d_23=-24, d_24=30, h_24=24
4011-StateManager.js:343 [StateManager] 🎯 h_10 setValue: "93.42863573628563" (state: calculated)
4011-StateManager.js:346 [StateManager] h_10 setValue stack trace:
setValue @ 4011-StateManager.js:346
calculateValues @ 4011-Section15.js:1842
calculateTargetModel @ 4011-Section15.js:1670
calculateAll @ 4011-Section15.js:1328
(anonymous) @ 4011-Section15.js:2131
(anonymous) @ 4011-StateManager.js:543
notifyListeners @ 4011-StateManager.js:541
setValue @ 4011-StateManager.js:419
setFieldValue @ 4011-Section13.js:636
calculateCoolingVentilation @ 4011-Section13.js:3259
calculateCoolingSystem @ 4011-Section13.js:3027
calculateTargetModel @ 4011-Section13.js:3547
calculateAll @ 4011-Section13.js:3390
(anonymous) @ 4011-Calculator.js:513
calculateAll @ 4011-Calculator.js:509
(anonymous) @ index.html:1077
4011-Section15.js:1758 [S15] 🎯 TGT S03 CLIMATE READ: h_23=18, d_23=-24, d_24=30, h_24=24
4011-StateManager.js:343 [StateManager] 🎯 h_10 setValue: "93.42863573628563" (state: calculated)
4011-StateManager.js:346 [StateManager] h_10 setValue stack trace:
setValue @ 4011-StateManager.js:346
calculateValues @ 4011-Section15.js:1842
calculateTargetModel @ 4011-Section15.js:1670
calculateAll @ 4011-Section15.js:1328
(anonymous) @ 4011-Section15.js:2131
(anonymous) @ 4011-StateManager.js:543
notifyListeners @ 4011-StateManager.js:541
setValue @ 4011-StateManager.js:419
setFieldValue @ 4011-Section13.js:636
calculateCoolingVentilation @ 4011-Section13.js:3259
calculateCoolingSystem @ 4011-Section13.js:3027
calculateTargetModel @ 4011-Section13.js:3547
calculateAll @ 4011-Section13.js:3390
(anonymous) @ 4011-Calculator.js:513
calculateAll @ 4011-Calculator.js:509
(anonymous) @ index.html:1077
24011-Section14.js:1414 [S14 LISTENER] 🔥 d_122 changed - triggering calculateAll() + UI update
4011-Section15.js:1758 [S15] 🎯 TGT S03 CLIMATE READ: h_23=18, d_23=-24, d_24=30, h_24=24
4011-StateManager.js:343 [StateManager] 🎯 h_10 setValue: "93.42863573628563" (state: calculated)
4011-StateManager.js:346 [StateManager] h_10 setValue stack trace:
setValue @ 4011-StateManager.js:346
calculateValues @ 4011-Section15.js:1842
calculateTargetModel @ 4011-Section15.js:1670
calculateAll @ 4011-Section15.js:1328
(anonymous) @ 4011-Section15.js:2131
(anonymous) @ 4011-StateManager.js:543
notifyListeners @ 4011-StateManager.js:541
setValue @ 4011-StateManager.js:419
setFieldValue @ 4011-Section13.js:636
updateTargetModelDOMValues @ 4011-Section13.js:3671
calculateTargetModel @ 4011-Section13.js:3557
calculateAll @ 4011-Section13.js:3390
(anonymous) @ 4011-Calculator.js:513
calculateAll @ 4011-Calculator.js:509
(anonymous) @ index.html:1077
4011-Section15.js:1758 [S15] 🎯 TGT S03 CLIMATE READ: h_23=18, d_23=-24, d_24=30, h_24=24
4011-StateManager.js:343 [StateManager] 🎯 h_10 setValue: "93.42863573628563" (state: calculated)
4011-StateManager.js:346 [StateManager] h_10 setValue stack trace:
setValue @ 4011-StateManager.js:346
calculateValues @ 4011-Section15.js:1842
calculateTargetModel @ 4011-Section15.js:1670
calculateAll @ 4011-Section15.js:1328
(anonymous) @ 4011-Section15.js:2131
(anonymous) @ 4011-StateManager.js:543
notifyListeners @ 4011-StateManager.js:541
setValue @ 4011-StateManager.js:419
setFieldValue @ 4011-Section13.js:636
updateTargetModelDOMValues @ 4011-Section13.js:3671
calculateTargetModel @ 4011-Section13.js:3557
calculateAll @ 4011-Section13.js:3390
(anonymous) @ 4011-Calculator.js:513
calculateAll @ 4011-Calculator.js:509
(anonymous) @ index.html:1077
4011-Section15.js:1758 [S15] 🎯 TGT S03 CLIMATE READ: h_23=18, d_23=-24, d_24=30, h_24=24
4011-StateManager.js:343 [StateManager] 🎯 h_10 setValue: "93.42863573628563" (state: calculated)
4011-StateManager.js:346 [StateManager] h_10 setValue stack trace:
setValue @ 4011-StateManager.js:346
calculateValues @ 4011-Section15.js:1842
calculateTargetModel @ 4011-Section15.js:1670
calculateAll @ 4011-Section15.js:1328
(anonymous) @ 4011-Section15.js:2131
(anonymous) @ 4011-StateManager.js:543
notifyListeners @ 4011-StateManager.js:541
setValue @ 4011-StateManager.js:419
setFieldValue @ 4011-Section13.js:636
updateTargetModelDOMValues @ 4011-Section13.js:3685
calculateTargetModel @ 4011-Section13.js:3557
calculateAll @ 4011-Section13.js:3390
(anonymous) @ 4011-Calculator.js:513
calculateAll @ 4011-Calculator.js:509
(anonymous) @ index.html:1077
4011-Section15.js:1758 [S15] 🎯 TGT S03 CLIMATE READ: h_23=18, d_23=-24, d_24=30, h_24=24
4011-StateManager.js:343 [StateManager] 🎯 h_10 setValue: "93.42863573628563" (state: calculated)
4011-StateManager.js:346 [StateManager] h_10 setValue stack trace:
setValue @ 4011-StateManager.js:346
calculateValues @ 4011-Section15.js:1842
calculateTargetModel @ 4011-Section15.js:1670
calculateAll @ 4011-Section15.js:1328
(anonymous) @ 4011-Section15.js:2131
(anonymous) @ 4011-StateManager.js:543
notifyListeners @ 4011-StateManager.js:541
setValue @ 4011-StateManager.js:419
setFieldValue @ 4011-Section13.js:636
updateTargetModelDOMValues @ 4011-Section13.js:3685
calculateTargetModel @ 4011-Section13.js:3557
calculateAll @ 4011-Section13.js:3390
(anonymous) @ 4011-Calculator.js:513
calculateAll @ 4011-Calculator.js:509
(anonymous) @ index.html:1077
4011-Section13.js:3575 [Section13] Target Model calculations complete
4011-Section13.js:3391 [Section13] ✅ Target Model complete
4011-Section13.js:3418 [Section13] ⏭️ Skipping Reference value re-write - triggered in target mode
4011-Section13.js:3424 [Section13] 🎉 DUAL-ENGINE CALCULATIONS COMPLETE
4011-Section06.js:513 🟢 [S06-TAR] Storing d_43 = 0 (from d_44=0, d_45=0, d_46=0)
4011-Section06.js:508 🔵 [S06-REF] Storing ref_d_43 = 0 (from d_44=0, d_45=0, d_46=0)
4011-Section04.js:1577 [S04] Starting dual-engine Excel-compliant calculations
4011-Section04.js:1018 [S04] Row 32 Subtotals - F32: 132938, G32: 6779.838, J32: 133341.34892282684, K32: 6800.408795064169
4011-Section04.js:94 [S04] j_32 update: 133341.34892282684
4011-Section04.js:1018 [S04] Row 32 Subtotals - F32: 132938, G32: 6779.838, J32: 301986.051518286, K32: 15401.288627432587
4011-Section04.js:1668 [S04] Reference model calculations complete
4011-Section04.js:1674 [S04DB] storeReference: ref_j_32=301986.051518286, ref_k_32=15401.288627432587 | current target j_32=133341.34892282684, k_32=6800.408795064169
4011-Section04.js:493 [S04] 🔄 Updating calculated display values for target mode
4011-Section04.js:501 [S04DB] displayContext mode=target j_32=133341.34892282684 ref_j_32=301986.051518286 k_32=6800.408795064169 ref_k_32=15401.288627432587
4011-Section04.js:582 [S04 DEBUG] Target mode - j_32: 133341.34892282684
4011-Section04.js:582 [S04 DEBUG] Target mode - k_32: 6800.408795064169
4011-Section04.js:582 [S04 DEBUG] Target mode - l_27: 51
4011-Section04.js:617 [S04] Calculated display values updated for target mode
4011-Section04.js:1599 [S04] Dual-engine calculations completed successfully
4011-Section15.js:1758 [S15] 🎯 TGT S03 CLIMATE READ: h_23=18, d_23=-24, d_24=30, h_24=24
4011-StateManager.js:343 [StateManager] 🎯 h_10 setValue: "93.42863573628563" (state: calculated)
4011-StateManager.js:346 [StateManager] h_10 setValue stack trace:
setValue @ 4011-StateManager.js:346
calculateValues @ 4011-Section15.js:1842
calculateTargetModel @ 4011-Section15.js:1670
calculateAll @ 4011-Section15.js:1328
(anonymous) @ 4011-Calculator.js:513
calculateAll @ 4011-Calculator.js:509
(anonymous) @ index.html:1077
4011-Dependency.js:116 [DependencyGraph] Data loaded: 389 nodes, 663 links
4011-Dependency.js:718 [DependencyGraph] Calculating node sizes...
4011-Section01.js:1173 [S01DB] upstream snapshot Object
4011-Section01.js:724 🔍 [S01DB] updateTEUIDisplay START: e_10=341.2, h_10=93.42863573628563, useType=Utility Bills
4011-Section01.js:794 🔍 [S01] T.1 Calculation: e_6=23.8 (ref), h_6=11.7 (target) → reduction should be 51%
4011-Section01.js:886 🔍 [S01DB] UPDATING h_10: 93.4 (from j_32=133341.34892282684, area=1427.2)
4011-Section01.js:498 🔍 [S01] h_6 explanation: target=11.7, ref=23.8, reduction=0.5084033613445378, percent=51%
4011-Clock.js:59 🕐 [CLOCK] ⭐ INITIALIZATION COMPLETE: 753ms (all calculations finalized)
4011-Section01.js:1191 ✅ [S01] CALCULATION CHAIN COMPLETE - All values finalized including h_10