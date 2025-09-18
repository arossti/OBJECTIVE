4011-Section13.js:3403 [Section13] ✅ Reference Model complete
4011-Section13.js:3405 [Section13] 🔄 Starting Target Model calculations...
4011-Section13.js:721 🔍 [S13-CONTEXT] Creating target context: g_118="Volume by Schedule" from TargetState
4011-Section13.js:725 🔍 [S13-CONTEXT] TargetState.g_118="Volume by Schedule", ReferenceState.g_118="Volume Constant"
4011-Section13.js:3536 [Section13] Running Target Model calculations...
4011-Section13.js:2873 [S13] TGT HEATING: system=Heatpump, ted=119171.54500166589, afue=0.98, cop=3.663540445486518
4011-Section13.js:3099 🔍 [S13-VENT] calculateVentilationRates: ventMethod="Volume by Schedule", ach(l_118)=3, ratePerPerson(d_119)=14, volume(d_105)=8000
4011-Section13.js:3102 🔍 [S13-VENT] isReferenceCalculation=false, hasContext=true
4011-Section13.js:3110 🔍 [S13-VENT] calculateVentilationValues: ventMethod="Volume by Schedule", ach(l_118)=3, ratePerPerson(d_119)=14, volume(d_105)=8000
4011-Section13.js:3113 🔍 [S13-VENT] Supporting values: occupants(d_63)=126, occupiedHours(i_63)=4380, totalHours(j_63)=8760
4011-Section13.js:3145 ✅ [S13-VENT] Final d_120 result: 3333.333333333333 L/s (from method="Volume by Schedule", ach=3, volume=8000)
4011-Section13.js:2977 [Section13] 🧊 COOLING CALC: mode=TGT, coolingSystemType="Cooling", heatingType="Heatpump", isCoolingActive=true, coolingDemand=9572.242304946165
4011-Section13.js:3039 [Section13] 🧊 COOLING RESULTS: d_117=3593.80399917213, j_116=2.663540445486518, l_116=0, l_114=5978.438305774035
24011-Section14.js:1416 [S14 LISTENER] 🔥 d_122 changed - triggering calculateAll() + UI update
4011-Section15.js:1750 [S15] 🎯 TGT S03 CLIMATE READ: h_23=18, d_23=-24, d_24=30, h_24=24
4011-StateManager.js:343 [StateManager] 🎯 h_10 setValue: "93.42863573628563" (state: calculated)
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
calculateCoolingVentilation @ 4011-Section13.js:3275
calculateCoolingSystem @ 4011-Section13.js:3043
calculateTargetModel @ 4011-Section13.js:3563
calculateAll @ 4011-Section13.js:3406
calculateAndRefresh @ 4011-Section13.js:2368
(anonymous) @ 4011-StateManager.js:543
notifyListeners @ 4011-StateManager.js:541
setValue @ 4011-StateManager.js:419
setCalculatedValue @ 4011-Section12.js:1170
calculateEnvelopeTotals @ 4011-Section12.js:2163
calculateTargetModel @ 4011-Section12.js:2362
calculateAll @ 4011-Section12.js:2200
(anonymous) @ 4011-SectionIntegrator.js:656
4011-Section15.js:1750 [S15] 🎯 TGT S03 CLIMATE READ: h_23=18, d_23=-24, d_24=30, h_24=24
4011-StateManager.js:343 [StateManager] 🎯 h_10 setValue: "93.42863573628563" (state: calculated)
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
calculateCoolingVentilation @ 4011-Section13.js:3275
calculateCoolingSystem @ 4011-Section13.js:3043
calculateTargetModel @ 4011-Section13.js:3563
calculateAll @ 4011-Section13.js:3406
calculateAndRefresh @ 4011-Section13.js:2368
(anonymous) @ 4011-StateManager.js:543
notifyListeners @ 4011-StateManager.js:541
setValue @ 4011-StateManager.js:419
setCalculatedValue @ 4011-Section12.js:1170
calculateEnvelopeTotals @ 4011-Section12.js:2163
calculateTargetModel @ 4011-Section12.js:2362
calculateAll @ 4011-Section12.js:2200
(anonymous) @ 4011-SectionIntegrator.js:656
24011-Section14.js:1416 [S14 LISTENER] 🔥 d_122 changed - triggering calculateAll() + UI update
4011-Section15.js:1750 [S15] 🎯 TGT S03 CLIMATE READ: h_23=18, d_23=-24, d_24=30, h_24=24
4011-StateManager.js:343 [StateManager] 🎯 h_10 setValue: "93.42863573628563" (state: calculated)
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
updateTargetModelDOMValues @ 4011-Section13.js:3687
calculateTargetModel @ 4011-Section13.js:3573
calculateAll @ 4011-Section13.js:3406
calculateAndRefresh @ 4011-Section13.js:2368
(anonymous) @ 4011-StateManager.js:543
notifyListeners @ 4011-StateManager.js:541
setValue @ 4011-StateManager.js:419
setCalculatedValue @ 4011-Section12.js:1170
calculateEnvelopeTotals @ 4011-Section12.js:2163
calculateTargetModel @ 4011-Section12.js:2362
calculateAll @ 4011-Section12.js:2200
(anonymous) @ 4011-SectionIntegrator.js:656
4011-Section15.js:1750 [S15] 🎯 TGT S03 CLIMATE READ: h_23=18, d_23=-24, d_24=30, h_24=24
4011-StateManager.js:343 [StateManager] 🎯 h_10 setValue: "93.42863573628563" (state: calculated)
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
updateTargetModelDOMValues @ 4011-Section13.js:3687
calculateTargetModel @ 4011-Section13.js:3573
calculateAll @ 4011-Section13.js:3406
calculateAndRefresh @ 4011-Section13.js:2368
(anonymous) @ 4011-StateManager.js:543
notifyListeners @ 4011-StateManager.js:541
setValue @ 4011-StateManager.js:419
setCalculatedValue @ 4011-Section12.js:1170
calculateEnvelopeTotals @ 4011-Section12.js:2163
calculateTargetModel @ 4011-Section12.js:2362
calculateAll @ 4011-Section12.js:2200
(anonymous) @ 4011-SectionIntegrator.js:656
4011-Section13.js:3591 [Section13] Target Model calculations complete
4011-Section13.js:3407 [Section13] ✅ Target Model complete
4011-Section13.js:3434 [Section13] ⏭️ Skipping Reference value re-write - triggered in target mode
4011-Section13.js:3440 [Section13] 🎉 DUAL-ENGINE CALCULATIONS COMPLETE
4011-Section13.js:252 [Section13] 🔄 Updating calculated display values for target mode
4011-Section13.js:336 [Section13] Calculated display values updated for target mode
4011-Section13.js:3389 [Section13] 🚀 CALCULATEALL TRIGGERED - Running dual-engine calculations...
4011-Section13.js:3395 [Section13] 🎯 Mode captured at calculation start: target
4011-Section13.js:3401 [Section13] 🔄 Starting Reference Model calculations...
4011-Section13.js:721 🔍 [S13-CONTEXT] Creating reference context: g_118="Volume Constant" from ReferenceState
4011-Section13.js:723 🔍 [S13-CONTEXT] ReferenceState.g_118="Volume Constant", TargetState.g_118="Volume by Schedule"
4011-Section13.js:3457 [Section13] Running Reference Model calculations...
4011-Section13.js:3471 [S13 CONTAMINATION DEBUG] calculateReferenceModel: Using system type = Electricity
4011-Section13.js:2873 [S13] REF HEATING: system=Electricity, ted=251391.1974742337, afue=0.9, cop=1
4011-Section13.js:2879 [S13 REF DEBUG] About to calculate with heating system: Electricity
4011-Section13.js:2882 [S13 REF DEBUG] Will S13 publish ref_d_113=Electricity?
4011-Section13.js:3099 🔍 [S13-VENT] calculateVentilationRates: ventMethod="Volume Constant", ach(l_118)=3.5, ratePerPerson(d_119)=8.33, volume(d_105)=8000
4011-Section13.js:3102 🔍 [S13-VENT] isReferenceCalculation=true, hasContext=true
4011-Section13.js:3110 🔍 [S13-VENT] calculateVentilationValues: ventMethod="Volume Constant", ach(l_118)=3.5, ratePerPerson(d_119)=8.33, volume(d_105)=8000
4011-Section13.js:3113 🔍 [S13-VENT] Supporting values: occupants(d_63)=126, occupiedHours(i_63)=4380, totalHours(j_63)=8760
4011-Section13.js:3133 🔍 [S13-VENT] Volume Constant calculation: ventRateLs = (3.5 * 8000) / 3.6 = 7777.777777777777
4011-Section13.js:3145 ✅ [S13-VENT] Final d_120 result: 7777.777777777777 L/s (from method="Volume Constant", ach=3.5, volume=8000)
4011-Section13.js:2977 [Section13] 🧊 COOLING CALC: mode=REF, coolingSystemType="No Cooling", heatingType="Electricity", isCoolingActive=false, coolingDemand=9572.242304946165
4011-Section13.js:3737 [S13 CONTAMINATION DEBUG] storeReferenceResults called during reference mode
4011-Section13.js:3740 [S13 CONTAMINATION DEBUG] Reference heating system: Electricity
4011-Section13.js:3743 [S13 CONTAMINATION DEBUG] Target heating system: Heatpump
4011-Section13.js:3746 [S13 CONTAMINATION DEBUG] Reference h_115 (gas volume): 0
4011-Section13.js:3749 [S13 CONTAMINATION DEBUG] Reference f_115 (oil volume): 0
4011-Section13.js:3761 [S13 CONTAMINATION DEBUG] Writing ref_f_115 = 0
4011-Section13.js:3761 [S13 CONTAMINATION DEBUG] Writing ref_h_115 = 0
4011-Section13.js:3773 [Section13] Reference results stored with ref_ prefix for downstream sections
4011-Section13.js:3776 [S13 DEBUG] Total Reference results stored: 34
4011-Section13.js:3515 [Section13] Reference Model calculations complete
4011-Section13.js:3403 [Section13] ✅ Reference Model complete
4011-Section13.js:3405 [Section13] 🔄 Starting Target Model calculations...
4011-Section13.js:721 🔍 [S13-CONTEXT] Creating target context: g_118="Volume by Schedule" from TargetState
4011-Section13.js:725 🔍 [S13-CONTEXT] TargetState.g_118="Volume by Schedule", ReferenceState.g_118="Volume Constant"
4011-Section13.js:3536 [Section13] Running Target Model calculations...
4011-Section13.js:2873 [S13] TGT HEATING: system=Heatpump, ted=119171.54500166589, afue=0.98, cop=3.663540445486518
4011-Section13.js:3099 🔍 [S13-VENT] calculateVentilationRates: ventMethod="Volume by Schedule", ach(l_118)=3, ratePerPerson(d_119)=14, volume(d_105)=8000
4011-Section13.js:3102 🔍 [S13-VENT] isReferenceCalculation=false, hasContext=true
4011-Section13.js:3110 🔍 [S13-VENT] calculateVentilationValues: ventMethod="Volume by Schedule", ach(l_118)=3, ratePerPerson(d_119)=14, volume(d_105)=8000
4011-Section13.js:3113 🔍 [S13-VENT] Supporting values: occupants(d_63)=126, occupiedHours(i_63)=4380, totalHours(j_63)=8760
4011-Section13.js:3145 ✅ [S13-VENT] Final d_120 result: 3333.333333333333 L/s (from method="Volume by Schedule", ach=3, volume=8000)
4011-Section13.js:2977 [Section13] 🧊 COOLING CALC: mode=TGT, coolingSystemType="Cooling", heatingType="Heatpump", isCoolingActive=true, coolingDemand=9572.242304946165
4011-Section13.js:3039 [Section13] 🧊 COOLING RESULTS: d_117=3593.80399917213, j_116=2.663540445486518, l_116=0, l_114=5978.438305774035
24011-Section14.js:1416 [S14 LISTENER] 🔥 d_122 changed - triggering calculateAll() + UI update
4011-Section15.js:1750 [S15] 🎯 TGT S03 CLIMATE READ: h_23=18, d_23=-24, d_24=30, h_24=24
4011-StateManager.js:343 [StateManager] 🎯 h_10 setValue: "93.42863573628563" (state: calculated)
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
calculateCoolingVentilation @ 4011-Section13.js:3275
calculateCoolingSystem @ 4011-Section13.js:3043
calculateTargetModel @ 4011-Section13.js:3563
calculateAll @ 4011-Section13.js:3406
calculateAndRefresh @ 4011-Section13.js:2368
(anonymous) @ 4011-StateManager.js:543
notifyListeners @ 4011-StateManager.js:541
setValue @ 4011-StateManager.js:419
setCalculatedValue @ 4011-Section12.js:1170
calculateEnvelopeTotals @ 4011-Section12.js:2163
calculateTargetModel @ 4011-Section12.js:2362
calculateAll @ 4011-Section12.js:2200
(anonymous) @ 4011-SectionIntegrator.js:656
4011-Section15.js:1750 [S15] 🎯 TGT S03 CLIMATE READ: h_23=18, d_23=-24, d_24=30, h_24=24
4011-StateManager.js:343 [StateManager] 🎯 h_10 setValue: "93.42863573628563" (state: calculated)
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
calculateCoolingVentilation @ 4011-Section13.js:3275
calculateCoolingSystem @ 4011-Section13.js:3043
calculateTargetModel @ 4011-Section13.js:3563
calculateAll @ 4011-Section13.js:3406
calculateAndRefresh @ 4011-Section13.js:2368
(anonymous) @ 4011-StateManager.js:543
notifyListeners @ 4011-StateManager.js:541
setValue @ 4011-StateManager.js:419
setCalculatedValue @ 4011-Section12.js:1170
calculateEnvelopeTotals @ 4011-Section12.js:2163
calculateTargetModel @ 4011-Section12.js:2362
calculateAll @ 4011-Section12.js:2200
(anonymous) @ 4011-SectionIntegrator.js:656
24011-Section14.js:1416 [S14 LISTENER] 🔥 d_122 changed - triggering calculateAll() + UI update
4011-Section15.js:1750 [S15] 🎯 TGT S03 CLIMATE READ: h_23=18, d_23=-24, d_24=30, h_24=24
4011-StateManager.js:343 [StateManager] 🎯 h_10 setValue: "93.42863573628563" (state: calculated)
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
updateTargetModelDOMValues @ 4011-Section13.js:3687
calculateTargetModel @ 4011-Section13.js:3573
calculateAll @ 4011-Section13.js:3406
calculateAndRefresh @ 4011-Section13.js:2368
(anonymous) @ 4011-StateManager.js:543
notifyListeners @ 4011-StateManager.js:541
setValue @ 4011-StateManager.js:419
setCalculatedValue @ 4011-Section12.js:1170
calculateEnvelopeTotals @ 4011-Section12.js:2163
calculateTargetModel @ 4011-Section12.js:2362
calculateAll @ 4011-Section12.js:2200
(anonymous) @ 4011-SectionIntegrator.js:656
4011-Section15.js:1750 [S15] 🎯 TGT S03 CLIMATE READ: h_23=18, d_23=-24, d_24=30, h_24=24
4011-StateManager.js:343 [StateManager] 🎯 h_10 setValue: "93.42863573628563" (state: calculated)
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
updateTargetModelDOMValues @ 4011-Section13.js:3687
calculateTargetModel @ 4011-Section13.js:3573
calculateAll @ 4011-Section13.js:3406
calculateAndRefresh @ 4011-Section13.js:2368
(anonymous) @ 4011-StateManager.js:543
notifyListeners @ 4011-StateManager.js:541
setValue @ 4011-StateManager.js:419
setCalculatedValue @ 4011-Section12.js:1170
calculateEnvelopeTotals @ 4011-Section12.js:2163
calculateTargetModel @ 4011-Section12.js:2362
calculateAll @ 4011-Section12.js:2200
(anonymous) @ 4011-SectionIntegrator.js:656
4011-Section13.js:3591 [Section13] Target Model calculations complete
4011-Section13.js:3407 [Section13] ✅ Target Model complete
4011-Section13.js:3434 [Section13] ⏭️ Skipping Reference value re-write - triggered in target mode
4011-Section13.js:3440 [Section13] 🎉 DUAL-ENGINE CALCULATIONS COMPLETE
4011-Section13.js:252 [Section13] 🔄 Updating calculated display values for target mode
4011-Section13.js:336 [Section13] Calculated display values updated for target mode
4011-Section12.js:266 [S12DB] g_104 DISPLAY (target): 0.2924870886396271
4011-Section12.js:270 [Section12] Calculated display values updated for target mode
4011-Section15.js:1750 [S15] 🎯 TGT S03 CLIMATE READ: h_23=18, d_23=-24, d_24=30, h_24=24
4011-StateManager.js:343 [StateManager] 🎯 h_10 setValue: "93.42863573628563" (state: calculated)
4011-StateManager.js:346 [StateManager] h_10 setValue stack trace:
setValue @ 4011-StateManager.js:346
calculateValues @ 4011-Section15.js:1832
calculateTargetModel @ 4011-Section15.js:1662
calculateAll @ 4011-Section15.js:1328
forceTEDITELIUpdate @ 4011-SectionIntegrator.js:305
window.TEUI.updateTEDITELIValues @ 4011-SectionIntegrator.js:237
(anonymous) @ 4011-SectionIntegrator.js:666
4011-Clock.js:41 [CLOCK] Starting initial load timing
4011-Section03.js:560 [S03] Getting climate data for: Alexandria, ON (Present)
4011-Section03.js:589 [S03] Climate values for Alexandria: Object
4011-Section03.js:1693 [STALE] S03 TARGET PUB: d_20=4600 → StateManager has d_20=4600
4011-Section03.js:1693 [STALE] S03 TARGET PUB: d_21=196 → StateManager has d_21=196
4011-Section03.js:1693 [STALE] S03 TARGET PUB: j_19=6.0 → StateManager has j_19=6.0
4011-Section03.js:1693 [STALE] S03 TARGET PUB: d_23=-24 → StateManager has d_23=-24
4011-Section03.js:1693 [STALE] S03 TARGET PUB: d_24=30 → StateManager has d_24=30
4011-Section03.js:1693 [STALE] S03 TARGET PUB: l_22=80 → StateManager has l_22=80
4011-Section03.js:560 [S03] Getting climate data for: Alexandria, ON (Present)
4011-Section03.js:589 [S03] Climate values for Alexandria: Object
4011-Section15.js:1750 [S15] 🎯 TGT S03 CLIMATE READ: h_23=18, d_23=-24, d_24=30, h_24=24
4011-StateManager.js:343 [StateManager] 🎯 h_10 setValue: "93.42863573628563" (state: calculated)
4011-StateManager.js:346 [StateManager] h_10 setValue stack trace:
setValue @ 4011-StateManager.js:346
calculateValues @ 4011-Section15.js:1832
calculateTargetModel @ 4011-Section15.js:1662
calculateAll @ 4011-Section15.js:1328
(anonymous) @ 4011-Section15.js:2121
(anonymous) @ 4011-StateManager.js:543
notifyListeners @ 4011-StateManager.js:541
setValue @ 4011-StateManager.js:419
setValue @ 4011-Section03.js:214
setFieldValue @ 4011-Section03.js:450
calculateHeatingSetpoint @ 4011-Section03.js:1814
calculateReferenceModel @ 4011-Section03.js:1729
calculateAll @ 4011-Section03.js:1666
(anonymous) @ 4011-Calculator.js:513
calculateAll @ 4011-Calculator.js:509
(anonymous) @ index.html:1077
4011-Section15.js:1750 [S15] 🎯 TGT S03 CLIMATE READ: h_23=18, d_23=-24, d_24=30, h_24=24
4011-StateManager.js:343 [StateManager] 🎯 h_10 setValue: "93.42863573628563" (state: calculated)
4011-StateManager.js:346 [StateManager] h_10 setValue stack trace:
setValue @ 4011-StateManager.js:346
calculateValues @ 4011-Section15.js:1832
calculateTargetModel @ 4011-Section15.js:1662
calculateAll @ 4011-Section15.js:1328
(anonymous) @ 4011-Section15.js:2121
(anonymous) @ 4011-StateManager.js:543
notifyListeners @ 4011-StateManager.js:541
setValue @ 4011-StateManager.js:419
setValue @ 4011-Section03.js:214
setFieldValue @ 4011-Section03.js:450
calculateHeatingSetpoint @ 4011-Section03.js:1814
calculateReferenceModel @ 4011-Section03.js:1729
calculateAll @ 4011-Section03.js:1666
(anonymous) @ 4011-Calculator.js:513
calculateAll @ 4011-Calculator.js:509
(anonymous) @ index.html:1077
4011-Section15.js:1750 [S15] 🎯 TGT S03 CLIMATE READ: h_23=18, d_23=-24, d_24=30, h_24=24
4011-StateManager.js:343 [StateManager] 🎯 h_10 setValue: "93.42863573628563" (state: calculated)
4011-StateManager.js:346 [StateManager] h_10 setValue stack trace:
setValue @ 4011-StateManager.js:346
calculateValues @ 4011-Section15.js:1832
calculateTargetModel @ 4011-Section15.js:1662
calculateAll @ 4011-Section15.js:1328
(anonymous) @ 4011-Section15.js:2121
(anonymous) @ 4011-StateManager.js:543
notifyListeners @ 4011-StateManager.js:541
setValue @ 4011-StateManager.js:419
setValue @ 4011-Section03.js:214
setFieldValue @ 4011-Section03.js:450
calculateHeatingSetpoint @ 4011-Section03.js:1814
calculateReferenceModel @ 4011-Section03.js:1729
calculateAll @ 4011-Section03.js:1666
(anonymous) @ 4011-Calculator.js:513
calculateAll @ 4011-Calculator.js:509
(anonymous) @ index.html:1077
4011-Section15.js:1750 [S15] 🎯 TGT S03 CLIMATE READ: h_23=18, d_23=-24, d_24=30, h_24=24
4011-StateManager.js:343 [StateManager] 🎯 h_10 setValue: "93.42863573628563" (state: calculated)
4011-StateManager.js:346 [StateManager] h_10 setValue stack trace:
setValue @ 4011-StateManager.js:346
calculateValues @ 4011-Section15.js:1832
calculateTargetModel @ 4011-Section15.js:1662
calculateAll @ 4011-Section15.js:1328
(anonymous) @ 4011-Section15.js:2121
(anonymous) @ 4011-StateManager.js:543
notifyListeners @ 4011-StateManager.js:541
setValue @ 4011-StateManager.js:419
setValue @ 4011-Section03.js:214
setFieldValue @ 4011-Section03.js:450
calculateHeatingSetpoint @ 4011-Section03.js:1814
calculateReferenceModel @ 4011-Section03.js:1729
calculateAll @ 4011-Section03.js:1666
(anonymous) @ 4011-Calculator.js:513
calculateAll @ 4011-Calculator.js:509
(anonymous) @ index.html:1077
4011-Section15.js:1750 [S15] 🎯 TGT S03 CLIMATE READ: h_23=18, d_23=-24, d_24=30, h_24=24
4011-StateManager.js:343 [StateManager] 🎯 h_10 setValue: "93.42863573628563" (state: calculated)
4011-StateManager.js:346 [StateManager] h_10 setValue stack trace:
setValue @ 4011-StateManager.js:346
calculateValues @ 4011-Section15.js:1832
calculateTargetModel @ 4011-Section15.js:1662
calculateAll @ 4011-Section15.js:1328
(anonymous) @ 4011-Section15.js:2121
(anonymous) @ 4011-StateManager.js:543
notifyListeners @ 4011-StateManager.js:541
setValue @ 4011-StateManager.js:419
setValue @ 4011-Section03.js:214
setFieldValue @ 4011-Section03.js:450
calculateCoolingSetpoint_h24 @ 4011-Section03.js:1826
calculateReferenceModel @ 4011-Section03.js:1730
calculateAll @ 4011-Section03.js:1666
(anonymous) @ 4011-Calculator.js:513
calculateAll @ 4011-Calculator.js:509
(anonymous) @ index.html:1077
4011-Section15.js:1750 [S15] 🎯 TGT S03 CLIMATE READ: h_23=18, d_23=-24, d_24=30, h_24=24
4011-StateManager.js:343 [StateManager] 🎯 h_10 setValue: "93.42863573628563" (state: calculated)
4011-StateManager.js:346 [StateManager] h_10 setValue stack trace:
setValue @ 4011-StateManager.js:346
calculateValues @ 4011-Section15.js:1832
calculateTargetModel @ 4011-Section15.js:1662
calculateAll @ 4011-Section15.js:1328
(anonymous) @ 4011-Section15.js:2121
(anonymous) @ 4011-StateManager.js:543
notifyListeners @ 4011-StateManager.js:541
setValue @ 4011-StateManager.js:419
setValue @ 4011-Section03.js:214
setFieldValue @ 4011-Section03.js:450
calculateCoolingSetpoint_h24 @ 4011-Section03.js:1826
calculateReferenceModel @ 4011-Section03.js:1730
calculateAll @ 4011-Section03.js:1666
(anonymous) @ 4011-Calculator.js:513
calculateAll @ 4011-Calculator.js:509
(anonymous) @ index.html:1077
4011-Section15.js:1750 [S15] 🎯 TGT S03 CLIMATE READ: h_23=18, d_23=-24, d_24=30, h_24=24
4011-StateManager.js:343 [StateManager] 🎯 h_10 setValue: "93.42863573628563" (state: calculated)
4011-StateManager.js:346 [StateManager] h_10 setValue stack trace:
setValue @ 4011-StateManager.js:346
calculateValues @ 4011-Section15.js:1832
calculateTargetModel @ 4011-Section15.js:1662
calculateAll @ 4011-Section15.js:1328
(anonymous) @ 4011-Section15.js:2121
(anonymous) @ 4011-StateManager.js:543
notifyListeners @ 4011-StateManager.js:541
setValue @ 4011-StateManager.js:419
setValue @ 4011-Section03.js:214
setFieldValue @ 4011-Section03.js:450
calculateCoolingSetpoint_h24 @ 4011-Section03.js:1826
calculateReferenceModel @ 4011-Section03.js:1730
calculateAll @ 4011-Section03.js:1666
(anonymous) @ 4011-Calculator.js:513
calculateAll @ 4011-Calculator.js:509
(anonymous) @ index.html:1077
4011-Section15.js:1750 [S15] 🎯 TGT S03 CLIMATE READ: h_23=18, d_23=-24, d_24=30, h_24=24
4011-StateManager.js:343 [StateManager] 🎯 h_10 setValue: "93.42863573628563" (state: calculated)
4011-StateManager.js:346 [StateManager] h_10 setValue stack trace:
setValue @ 4011-StateManager.js:346
calculateValues @ 4011-Section15.js:1832
calculateTargetModel @ 4011-Section15.js:1662
calculateAll @ 4011-Section15.js:1328
(anonymous) @ 4011-Section15.js:2121
(anonymous) @ 4011-StateManager.js:543
notifyListeners @ 4011-StateManager.js:541
setValue @ 4011-StateManager.js:419
setValue @ 4011-Section03.js:214
setFieldValue @ 4011-Section03.js:450
calculateCoolingSetpoint_h24 @ 4011-Section03.js:1826
calculateReferenceModel @ 4011-Section03.js:1730
calculateAll @ 4011-Section03.js:1666
(anonymous) @ 4011-Calculator.js:513
calculateAll @ 4011-Calculator.js:509
(anonymous) @ index.html:1077
4011-Section11.js:1687 [S11] calculateAll TRIGGERED. isReferenceMode: false
4011-Section11.js:1132 [S11] 🔵 REF CLIMATE READ: d_20=4600
4011-Section11.js:1136 [S11] 🔵 REF CLIMATE READ: d_21=196
4011-Section11.js:1132 [S11] 🔵 REF CLIMATE READ: d_20=4600
4011-Section11.js:1136 [S11] 🔵 REF CLIMATE READ: d_21=196
4011-Section11.js:1132 [S11] 🔵 REF CLIMATE READ: d_20=4600
4011-Section11.js:1136 [S11] 🔵 REF CLIMATE READ: d_21=196
4011-Section11.js:1132 [S11] 🔵 REF CLIMATE READ: d_20=4600
4011-Section11.js:1136 [S11] 🔵 REF CLIMATE READ: d_21=196
4011-Section11.js:1132 [S11] 🔵 REF CLIMATE READ: d_20=4600
4011-Section11.js:1136 [S11] 🔵 REF CLIMATE READ: d_21=196
4011-Section11.js:1132 [S11] 🔵 REF CLIMATE READ: d_20=4600
4011-Section11.js:1136 [S11] 🔵 REF CLIMATE READ: d_21=196
4011-Section11.js:1132 [S11] 🔵 REF CLIMATE READ: d_20=4600
4011-Section11.js:1136 [S11] 🔵 REF CLIMATE READ: d_21=196
4011-Section11.js:1132 [S11] 🔵 REF CLIMATE READ: d_20=4600
4011-Section11.js:1136 [S11] 🔵 REF CLIMATE READ: d_21=196
4011-Section11.js:1132 [S11] 🔵 REF CLIMATE READ: d_20=4600
4011-Section11.js:1136 [S11] 🔵 REF CLIMATE READ: d_21=196
4011-Section11.js:1166 [S11] 🔵 REF CLIMATE READ: d_22=1960
4011-Section11.js:1184 [S11] 🔵 REF CLIMATE READ: h_22=-1680
4011-Section11.js:1166 [S11] 🔵 REF CLIMATE READ: d_22=1960
4011-Section11.js:1184 [S11] 🔵 REF CLIMATE READ: h_22=-1680
4011-Section11.js:1256 [S11] REF TB%=50% → ref_i_97=59532.29, ref_k_97=-947.70
4011-Section11.js:1434 [S11] Writing ref penalty: ref_i_97=59532.29, ref_k_97=-947.70
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
4011-Section11.js:1145 [S11] 🎯 TGT CLIMATE READ: d_20=4600
4011-Section11.js:1149 [S11] 🎯 TGT CLIMATE READ: d_21=196
4011-Section11.js:1145 [S11] 🎯 TGT CLIMATE READ: d_20=4600
4011-Section11.js:1149 [S11] 🎯 TGT CLIMATE READ: d_21=196
24011-Section11.js:1189 [S11] 🎯 TGT CLIMATE READ: h_22=-1680
4011-Section11.js:1687 [S11] calculateAll TRIGGERED. isReferenceMode: false
4011-Section11.js:1132 [S11] 🔵 REF CLIMATE READ: d_20=4600
4011-Section11.js:1136 [S11] 🔵 REF CLIMATE READ: d_21=196
4011-Section11.js:1132 [S11] 🔵 REF CLIMATE READ: d_20=4600
4011-Section11.js:1136 [S11] 🔵 REF CLIMATE READ: d_21=196
4011-Section11.js:1132 [S11] 🔵 REF CLIMATE READ: d_20=4600
4011-Section11.js:1136 [S11] 🔵 REF CLIMATE READ: d_21=196
4011-Section11.js:1132 [S11] 🔵 REF CLIMATE READ: d_20=4600
4011-Section11.js:1136 [S11] 🔵 REF CLIMATE READ: d_21=196
4011-Section11.js:1132 [S11] 🔵 REF CLIMATE READ: d_20=4600
4011-Section11.js:1136 [S11] 🔵 REF CLIMATE READ: d_21=196
4011-Section11.js:1132 [S11] 🔵 REF CLIMATE READ: d_20=4600
4011-Section11.js:1136 [S11] 🔵 REF CLIMATE READ: d_21=196
4011-Section11.js:1132 [S11] 🔵 REF CLIMATE READ: d_20=4600
4011-Section11.js:1136 [S11] 🔵 REF CLIMATE READ: d_21=196
4011-Section11.js:1132 [S11] 🔵 REF CLIMATE READ: d_20=4600
4011-Section11.js:1136 [S11] 🔵 REF CLIMATE READ: d_21=196
4011-Section11.js:1132 [S11] 🔵 REF CLIMATE READ: d_20=4600
4011-Section11.js:1136 [S11] 🔵 REF CLIMATE READ: d_21=196
4011-Section11.js:1166 [S11] 🔵 REF CLIMATE READ: d_22=1960
4011-Section11.js:1184 [S11] 🔵 REF CLIMATE READ: h_22=-1680
4011-Section11.js:1166 [S11] 🔵 REF CLIMATE READ: d_22=1960
4011-Section11.js:1184 [S11] 🔵 REF CLIMATE READ: h_22=-1680
4011-Section11.js:1256 [S11] REF TB%=50% → ref_i_97=59532.29, ref_k_97=-947.70
4011-Section11.js:1434 [S11] Writing ref penalty: ref_i_97=59532.29, ref_k_97=-947.70
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
4011-Section11.js:1145 [S11] 🎯 TGT CLIMATE READ: d_20=4600
4011-Section11.js:1149 [S11] 🎯 TGT CLIMATE READ: d_21=196
4011-Section11.js:1145 [S11] 🎯 TGT CLIMATE READ: d_20=4600
4011-Section11.js:1149 [S11] 🎯 TGT CLIMATE READ: d_21=196
24011-Section11.js:1189 [S11] 🎯 TGT CLIMATE READ: h_22=-1680
4011-Section13.js:2813 [S13DEBUG] Reference GF HDD changed: ref_d_22=1960 → triggering Reference calculations
4011-Section13.js:3389 [Section13] 🚀 CALCULATEALL TRIGGERED - Running dual-engine calculations...
4011-Section13.js:3395 [Section13] 🎯 Mode captured at calculation start: target
4011-Section13.js:3401 [Section13] 🔄 Starting Reference Model calculations...
4011-Section13.js:721 🔍 [S13-CONTEXT] Creating reference context: g_118="Volume Constant" from ReferenceState
4011-Section13.js:723 🔍 [S13-CONTEXT] ReferenceState.g_118="Volume Constant", TargetState.g_118="Volume by Schedule"
4011-Section13.js:3457 [Section13] Running Reference Model calculations...
4011-Section13.js:3471 [S13 CONTAMINATION DEBUG] calculateReferenceModel: Using system type = Electricity
4011-Section13.js:2873 [S13] REF HEATING: system=Electricity, ted=251391.1974742337, afue=0.9, cop=1
4011-Section13.js:2879 [S13 REF DEBUG] About to calculate with heating system: Electricity
4011-Section13.js:2882 [S13 REF DEBUG] Will S13 publish ref_d_113=Electricity?
4011-Section13.js:3099 🔍 [S13-VENT] calculateVentilationRates: ventMethod="Volume Constant", ach(l_118)=3.5, ratePerPerson(d_119)=8.33, volume(d_105)=8000
4011-Section13.js:3102 🔍 [S13-VENT] isReferenceCalculation=true, hasContext=true
4011-Section13.js:3110 🔍 [S13-VENT] calculateVentilationValues: ventMethod="Volume Constant", ach(l_118)=3.5, ratePerPerson(d_119)=8.33, volume(d_105)=8000
4011-Section13.js:3113 🔍 [S13-VENT] Supporting values: occupants(d_63)=126, occupiedHours(i_63)=4380, totalHours(j_63)=8760
4011-Section13.js:3133 🔍 [S13-VENT] Volume Constant calculation: ventRateLs = (3.5 * 8000) / 3.6 = 7777.777777777777
4011-Section13.js:3145 ✅ [S13-VENT] Final d_120 result: 7777.777777777777 L/s (from method="Volume Constant", ach=3.5, volume=8000)
4011-Section13.js:2977 [Section13] 🧊 COOLING CALC: mode=REF, coolingSystemType="No Cooling", heatingType="Electricity", isCoolingActive=false, coolingDemand=9572.242304946165
4011-Section13.js:3737 [S13 CONTAMINATION DEBUG] storeReferenceResults called during reference mode
4011-Section13.js:3740 [S13 CONTAMINATION DEBUG] Reference heating system: Electricity
4011-Section13.js:3743 [S13 CONTAMINATION DEBUG] Target heating system: Heatpump
4011-Section13.js:3746 [S13 CONTAMINATION DEBUG] Reference h_115 (gas volume): 0
4011-Section13.js:3749 [S13 CONTAMINATION DEBUG] Reference f_115 (oil volume): 0
4011-Section13.js:3761 [S13 CONTAMINATION DEBUG] Writing ref_f_115 = 0
4011-Section13.js:3761 [S13 CONTAMINATION DEBUG] Writing ref_h_115 = 0
4011-Section13.js:3773 [Section13] Reference results stored with ref_ prefix for downstream sections
4011-Section13.js:3776 [S13 DEBUG] Total Reference results stored: 34
4011-Section13.js:3515 [Section13] Reference Model calculations complete
4011-Section13.js:3403 [Section13] ✅ Reference Model complete
4011-Section13.js:3405 [Section13] 🔄 Starting Target Model calculations...
4011-Section13.js:721 🔍 [S13-CONTEXT] Creating target context: g_118="Volume by Schedule" from TargetState
4011-Section13.js:725 🔍 [S13-CONTEXT] TargetState.g_118="Volume by Schedule", ReferenceState.g_118="Volume Constant"
4011-Section13.js:3536 [Section13] Running Target Model calculations...
4011-Section13.js:2873 [S13] TGT HEATING: system=Heatpump, ted=119171.54500166589, afue=0.98, cop=3.663540445486518
4011-Section13.js:3099 🔍 [S13-VENT] calculateVentilationRates: ventMethod="Volume by Schedule", ach(l_118)=3, ratePerPerson(d_119)=14, volume(d_105)=8000
4011-Section13.js:3102 🔍 [S13-VENT] isReferenceCalculation=false, hasContext=true
4011-Section13.js:3110 🔍 [S13-VENT] calculateVentilationValues: ventMethod="Volume by Schedule", ach(l_118)=3, ratePerPerson(d_119)=14, volume(d_105)=8000
4011-Section13.js:3113 🔍 [S13-VENT] Supporting values: occupants(d_63)=126, occupiedHours(i_63)=4380, totalHours(j_63)=8760
4011-Section13.js:3145 ✅ [S13-VENT] Final d_120 result: 3333.333333333333 L/s (from method="Volume by Schedule", ach=3, volume=8000)
4011-Section13.js:2977 [Section13] 🧊 COOLING CALC: mode=TGT, coolingSystemType="Cooling", heatingType="Heatpump", isCoolingActive=true, coolingDemand=9572.242304946165
4011-Section13.js:3039 [Section13] 🧊 COOLING RESULTS: d_117=3593.80399917213, j_116=2.663540445486518, l_116=0, l_114=5978.438305774035
24011-Section14.js:1416 [S14 LISTENER] 🔥 d_122 changed - triggering calculateAll() + UI update
4011-Section15.js:1750 [S15] 🎯 TGT S03 CLIMATE READ: h_23=18, d_23=-24, d_24=30, h_24=24
4011-StateManager.js:343 [StateManager] 🎯 h_10 setValue: "93.42863573628563" (state: calculated)
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
calculateCoolingVentilation @ 4011-Section13.js:3275
calculateCoolingSystem @ 4011-Section13.js:3043
calculateTargetModel @ 4011-Section13.js:3563
calculateAll @ 4011-Section13.js:3406
(anonymous) @ 4011-Section13.js:2816
(anonymous) @ 4011-StateManager.js:543
notifyListeners @ 4011-StateManager.js:541
setValue @ 4011-StateManager.js:419
setValue @ 4011-Section03.js:214
setFieldValue @ 4011-Section03.js:450
calculateGroundFacing @ 4011-Section03.js:1637
calculateReferenceModel @ 4011-Section03.js:1732
calculateAll @ 4011-Section03.js:1666
(anonymous) @ 4011-Calculator.js:513
calculateAll @ 4011-Calculator.js:509
(anonymous) @ index.html:1077
4011-Section15.js:1750 [S15] 🎯 TGT S03 CLIMATE READ: h_23=18, d_23=-24, d_24=30, h_24=24
4011-StateManager.js:343 [StateManager] 🎯 h_10 setValue: "93.42863573628563" (state: calculated)
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
calculateCoolingVentilation @ 4011-Section13.js:3275
calculateCoolingSystem @ 4011-Section13.js:3043
calculateTargetModel @ 4011-Section13.js:3563
calculateAll @ 4011-Section13.js:3406
(anonymous) @ 4011-Section13.js:2816
(anonymous) @ 4011-StateManager.js:543
notifyListeners @ 4011-StateManager.js:541
setValue @ 4011-StateManager.js:419
setValue @ 4011-Section03.js:214
setFieldValue @ 4011-Section03.js:450
calculateGroundFacing @ 4011-Section03.js:1637
calculateReferenceModel @ 4011-Section03.js:1732
calculateAll @ 4011-Section03.js:1666
(anonymous) @ 4011-Calculator.js:513
calculateAll @ 4011-Calculator.js:509
(anonymous) @ index.html:1077
24011-Section14.js:1416 [S14 LISTENER] 🔥 d_122 changed - triggering calculateAll() + UI update
4011-Section15.js:1750 [S15] 🎯 TGT S03 CLIMATE READ: h_23=18, d_23=-24, d_24=30, h_24=24
4011-StateManager.js:343 [StateManager] 🎯 h_10 setValue: "93.42863573628563" (state: calculated)
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
updateTargetModelDOMValues @ 4011-Section13.js:3687
calculateTargetModel @ 4011-Section13.js:3573
calculateAll @ 4011-Section13.js:3406
(anonymous) @ 4011-Section13.js:2816
(anonymous) @ 4011-StateManager.js:543
notifyListeners @ 4011-StateManager.js:541
setValue @ 4011-StateManager.js:419
setValue @ 4011-Section03.js:214
setFieldValue @ 4011-Section03.js:450
calculateGroundFacing @ 4011-Section03.js:1637
calculateReferenceModel @ 4011-Section03.js:1732
calculateAll @ 4011-Section03.js:1666
(anonymous) @ 4011-Calculator.js:513
calculateAll @ 4011-Calculator.js:509
(anonymous) @ index.html:1077
4011-Section15.js:1750 [S15] 🎯 TGT S03 CLIMATE READ: h_23=18, d_23=-24, d_24=30, h_24=24
4011-StateManager.js:343 [StateManager] 🎯 h_10 setValue: "93.42863573628563" (state: calculated)
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
updateTargetModelDOMValues @ 4011-Section13.js:3687
calculateTargetModel @ 4011-Section13.js:3573
calculateAll @ 4011-Section13.js:3406
(anonymous) @ 4011-Section13.js:2816
(anonymous) @ 4011-StateManager.js:543
notifyListeners @ 4011-StateManager.js:541
setValue @ 4011-StateManager.js:419
setValue @ 4011-Section03.js:214
setFieldValue @ 4011-Section03.js:450
calculateGroundFacing @ 4011-Section03.js:1637
calculateReferenceModel @ 4011-Section03.js:1732
calculateAll @ 4011-Section03.js:1666
(anonymous) @ 4011-Calculator.js:513
calculateAll @ 4011-Calculator.js:509
(anonymous) @ index.html:1077
4011-Section13.js:3591 [Section13] Target Model calculations complete
4011-Section13.js:3407 [Section13] ✅ Target Model complete
4011-Section13.js:3434 [Section13] ⏭️ Skipping Reference value re-write - triggered in target mode
4011-Section13.js:3440 [Section13] 🎉 DUAL-ENGINE CALCULATIONS COMPLETE
4011-Section11.js:1687 [S11] calculateAll TRIGGERED. isReferenceMode: false
4011-Section11.js:1132 [S11] 🔵 REF CLIMATE READ: d_20=4600
4011-Section11.js:1136 [S11] 🔵 REF CLIMATE READ: d_21=196
4011-Section11.js:1132 [S11] 🔵 REF CLIMATE READ: d_20=4600
4011-Section11.js:1136 [S11] 🔵 REF CLIMATE READ: d_21=196
4011-Section11.js:1132 [S11] 🔵 REF CLIMATE READ: d_20=4600
4011-Section11.js:1136 [S11] 🔵 REF CLIMATE READ: d_21=196
4011-Section11.js:1132 [S11] 🔵 REF CLIMATE READ: d_20=4600
4011-Section11.js:1136 [S11] 🔵 REF CLIMATE READ: d_21=196
4011-Section11.js:1132 [S11] 🔵 REF CLIMATE READ: d_20=4600
4011-Section11.js:1136 [S11] 🔵 REF CLIMATE READ: d_21=196
4011-Section11.js:1132 [S11] 🔵 REF CLIMATE READ: d_20=4600
4011-Section11.js:1136 [S11] 🔵 REF CLIMATE READ: d_21=196
4011-Section11.js:1132 [S11] 🔵 REF CLIMATE READ: d_20=4600
4011-Section11.js:1136 [S11] 🔵 REF CLIMATE READ: d_21=196
4011-Section11.js:1132 [S11] 🔵 REF CLIMATE READ: d_20=4600
4011-Section11.js:1136 [S11] 🔵 REF CLIMATE READ: d_21=196
4011-Section11.js:1132 [S11] 🔵 REF CLIMATE READ: d_20=4600
4011-Section11.js:1136 [S11] 🔵 REF CLIMATE READ: d_21=196
4011-Section11.js:1166 [S11] 🔵 REF CLIMATE READ: d_22=1960
4011-Section11.js:1184 [S11] 🔵 REF CLIMATE READ: h_22=-1680
4011-Section11.js:1166 [S11] 🔵 REF CLIMATE READ: d_22=1960
4011-Section11.js:1184 [S11] 🔵 REF CLIMATE READ: h_22=-1680
4011-Section11.js:1256 [S11] REF TB%=50% → ref_i_97=59532.29, ref_k_97=-947.70
4011-Section11.js:1434 [S11] Writing ref penalty: ref_i_97=59532.29, ref_k_97=-947.70
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
4011-Section11.js:1145 [S11] 🎯 TGT CLIMATE READ: d_20=4600
4011-Section11.js:1149 [S11] 🎯 TGT CLIMATE READ: d_21=196
4011-Section11.js:1145 [S11] 🎯 TGT CLIMATE READ: d_20=4600
4011-Section11.js:1149 [S11] 🎯 TGT CLIMATE READ: d_21=196
24011-Section11.js:1189 [S11] 🎯 TGT CLIMATE READ: h_22=-1680
4011-Section11.js:1687 [S11] calculateAll TRIGGERED. isReferenceMode: false
4011-Section11.js:1132 [S11] 🔵 REF CLIMATE READ: d_20=4600
4011-Section11.js:1136 [S11] 🔵 REF CLIMATE READ: d_21=196
4011-Section11.js:1132 [S11] 🔵 REF CLIMATE READ: d_20=4600
4011-Section11.js:1136 [S11] 🔵 REF CLIMATE READ: d_21=196
4011-Section11.js:1132 [S11] 🔵 REF CLIMATE READ: d_20=4600
4011-Section11.js:1136 [S11] 🔵 REF CLIMATE READ: d_21=196
4011-Section11.js:1132 [S11] 🔵 REF CLIMATE READ: d_20=4600
4011-Section11.js:1136 [S11] 🔵 REF CLIMATE READ: d_21=196
4011-Section11.js:1132 [S11] 🔵 REF CLIMATE READ: d_20=4600
4011-Section11.js:1136 [S11] 🔵 REF CLIMATE READ: d_21=196
4011-Section11.js:1132 [S11] 🔵 REF CLIMATE READ: d_20=4600
4011-Section11.js:1136 [S11] 🔵 REF CLIMATE READ: d_21=196
4011-Section11.js:1132 [S11] 🔵 REF CLIMATE READ: d_20=4600
4011-Section11.js:1136 [S11] 🔵 REF CLIMATE READ: d_21=196
4011-Section11.js:1132 [S11] 🔵 REF CLIMATE READ: d_20=4600
4011-Section11.js:1136 [S11] 🔵 REF CLIMATE READ: d_21=196
4011-Section11.js:1132 [S11] 🔵 REF CLIMATE READ: d_20=4600
4011-Section11.js:1136 [S11] 🔵 REF CLIMATE READ: d_21=196
4011-Section11.js:1166 [S11] 🔵 REF CLIMATE READ: d_22=1960
4011-Section11.js:1184 [S11] 🔵 REF CLIMATE READ: h_22=-1680
4011-Section11.js:1166 [S11] 🔵 REF CLIMATE READ: d_22=1960
4011-Section11.js:1184 [S11] 🔵 REF CLIMATE READ: h_22=-1680
4011-Section11.js:1256 [S11] REF TB%=50% → ref_i_97=59532.29, ref_k_97=-947.70
4011-Section11.js:1434 [S11] Writing ref penalty: ref_i_97=59532.29, ref_k_97=-947.70
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
4011-Section11.js:1145 [S11] 🎯 TGT CLIMATE READ: d_20=4600
4011-Section11.js:1149 [S11] 🎯 TGT CLIMATE READ: d_21=196
4011-Section11.js:1145 [S11] 🎯 TGT CLIMATE READ: d_20=4600
4011-Section11.js:1149 [S11] 🎯 TGT CLIMATE READ: d_21=196
24011-Section11.js:1189 [S11] 🎯 TGT CLIMATE READ: h_22=-1680
4011-Section13.js:2819 [S13DEBUG] Reference GF CDD changed: ref_h_22=-1680 → triggering Reference calculations
4011-Section13.js:3389 [Section13] 🚀 CALCULATEALL TRIGGERED - Running dual-engine calculations...
4011-Section13.js:3395 [Section13] 🎯 Mode captured at calculation start: target
4011-Section13.js:3401 [Section13] 🔄 Starting Reference Model calculations...
4011-Section13.js:721 🔍 [S13-CONTEXT] Creating reference context: g_118="Volume Constant" from ReferenceState
4011-Section13.js:723 🔍 [S13-CONTEXT] ReferenceState.g_118="Volume Constant", TargetState.g_118="Volume by Schedule"
4011-Section13.js:3457 [Section13] Running Reference Model calculations...
4011-Section13.js:3471 [S13 CONTAMINATION DEBUG] calculateReferenceModel: Using system type = Electricity
4011-Section13.js:2873 [S13] REF HEATING: system=Electricity, ted=251391.1974742337, afue=0.9, cop=1
4011-Section13.js:2879 [S13 REF DEBUG] About to calculate with heating system: Electricity
4011-Section13.js:2882 [S13 REF DEBUG] Will S13 publish ref_d_113=Electricity?
4011-Section13.js:3099 🔍 [S13-VENT] calculateVentilationRates: ventMethod="Volume Constant", ach(l_118)=3.5, ratePerPerson(d_119)=8.33, volume(d_105)=8000
4011-Section13.js:3102 🔍 [S13-VENT] isReferenceCalculation=true, hasContext=true
4011-Section13.js:3110 🔍 [S13-VENT] calculateVentilationValues: ventMethod="Volume Constant", ach(l_118)=3.5, ratePerPerson(d_119)=8.33, volume(d_105)=8000
4011-Section13.js:3113 🔍 [S13-VENT] Supporting values: occupants(d_63)=126, occupiedHours(i_63)=4380, totalHours(j_63)=8760
4011-Section13.js:3133 🔍 [S13-VENT] Volume Constant calculation: ventRateLs = (3.5 * 8000) / 3.6 = 7777.777777777777
4011-Section13.js:3145 ✅ [S13-VENT] Final d_120 result: 7777.777777777777 L/s (from method="Volume Constant", ach=3.5, volume=8000)
4011-Section13.js:2977 [Section13] 🧊 COOLING CALC: mode=REF, coolingSystemType="No Cooling", heatingType="Electricity", isCoolingActive=false, coolingDemand=10192.893604542265
4011-Section13.js:3737 [S13 CONTAMINATION DEBUG] storeReferenceResults called during reference mode
4011-Section13.js:3740 [S13 CONTAMINATION DEBUG] Reference heating system: Electricity
4011-Section13.js:3743 [S13 CONTAMINATION DEBUG] Target heating system: Heatpump
4011-Section13.js:3746 [S13 CONTAMINATION DEBUG] Reference h_115 (gas volume): 0
4011-Section13.js:3749 [S13 CONTAMINATION DEBUG] Reference f_115 (oil volume): 0
4011-Section13.js:3761 [S13 CONTAMINATION DEBUG] Writing ref_f_115 = 0
4011-Section13.js:3761 [S13 CONTAMINATION DEBUG] Writing ref_h_115 = 0
4011-Section13.js:3773 [Section13] Reference results stored with ref_ prefix for downstream sections
4011-Section13.js:3776 [S13 DEBUG] Total Reference results stored: 34
4011-Section13.js:3515 [Section13] Reference Model calculations complete
4011-Section13.js:3403 [Section13] ✅ Reference Model complete
4011-Section13.js:3405 [Section13] 🔄 Starting Target Model calculations...
4011-Section13.js:721 🔍 [S13-CONTEXT] Creating target context: g_118="Volume by Schedule" from TargetState
4011-Section13.js:725 🔍 [S13-CONTEXT] TargetState.g_118="Volume by Schedule", ReferenceState.g_118="Volume Constant"
4011-Section13.js:3536 [Section13] Running Target Model calculations...
4011-Section13.js:2873 [S13] TGT HEATING: system=Heatpump, ted=119171.54500166589, afue=0.98, cop=3.663540445486518
4011-Section13.js:3099 🔍 [S13-VENT] calculateVentilationRates: ventMethod="Volume by Schedule", ach(l_118)=3, ratePerPerson(d_119)=14, volume(d_105)=8000
4011-Section13.js:3102 🔍 [S13-VENT] isReferenceCalculation=false, hasContext=true
4011-Section13.js:3110 🔍 [S13-VENT] calculateVentilationValues: ventMethod="Volume by Schedule", ach(l_118)=3, ratePerPerson(d_119)=14, volume(d_105)=8000
4011-Section13.js:3113 🔍 [S13-VENT] Supporting values: occupants(d_63)=126, occupiedHours(i_63)=4380, totalHours(j_63)=8760
4011-Section13.js:3145 ✅ [S13-VENT] Final d_120 result: 3333.333333333333 L/s (from method="Volume by Schedule", ach=3, volume=8000)
4011-Section13.js:2977 [Section13] 🧊 COOLING CALC: mode=TGT, coolingSystemType="Cooling", heatingType="Heatpump", isCoolingActive=true, coolingDemand=10192.893604542265
4011-Section15.js:1750 [S15] 🎯 TGT S03 CLIMATE READ: h_23=18, d_23=-24, d_24=30, h_24=24
4011-Section04.js:2482 [S04] S15 target electricity changed: d_136
4011-Section04.js:1577 [S04] Starting dual-engine Excel-compliant calculations
4011-Section04.js:1018 [S04] Row 32 Subtotals - F32: 132938, G32: 6779.838, J32: 133574.36633416289, K32: 6812.2926830423075
4011-Section04.js:94 [S04] j_32 update: 133574.36633416289
4011-Section01.js:1250 [S01] j_32 listener: 133341.34892282684 → 133574.36633416289
4011-Section01.js:1251 [S01] 🕐 j_32 listener timing: StateManager current j_32 = 133574.36633416289
24011-Section05.js:266 🔄 [S05] updateCalculatedDisplayValues: mode=target
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
calculateCoolingSystem @ 4011-Section13.js:3033
calculateTargetModel @ 4011-Section13.js:3563
calculateAll @ 4011-Section13.js:3406
(anonymous) @ 4011-Section13.js:2822
(anonymous) @ 4011-StateManager.js:543
notifyListeners @ 4011-StateManager.js:541
setValue @ 4011-StateManager.js:419
setValue @ 4011-Section03.js:214
setFieldValue @ 4011-Section03.js:450
calculateGroundFacing @ 4011-Section03.js:1656
calculateReferenceModel @ 4011-Section03.js:1732
calculateAll @ 4011-Section03.js:1666
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
calculateCoolingSystem @ 4011-Section13.js:3033
calculateTargetModel @ 4011-Section13.js:3563
calculateAll @ 4011-Section13.js:3406
(anonymous) @ 4011-Section13.js:2822
(anonymous) @ 4011-StateManager.js:543
notifyListeners @ 4011-StateManager.js:541
setValue @ 4011-StateManager.js:419
setValue @ 4011-Section03.js:214
setFieldValue @ 4011-Section03.js:450
calculateGroundFacing @ 4011-Section03.js:1656
calculateReferenceModel @ 4011-Section03.js:1732
calculateAll @ 4011-Section03.js:1666
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
calculateCoolingSystem @ 4011-Section13.js:3033
calculateTargetModel @ 4011-Section13.js:3563
calculateAll @ 4011-Section13.js:3406
(anonymous) @ 4011-Section13.js:2822
(anonymous) @ 4011-StateManager.js:543
notifyListeners @ 4011-StateManager.js:541
setValue @ 4011-StateManager.js:419
setValue @ 4011-Section03.js:214
setFieldValue @ 4011-Section03.js:450
calculateGroundFacing @ 4011-Section03.js:1656
calculateReferenceModel @ 4011-Section03.js:1732
calculateAll @ 4011-Section03.js:1666
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
calculateCoolingSystem @ 4011-Section13.js:3033
calculateTargetModel @ 4011-Section13.js:3563
calculateAll @ 4011-Section13.js:3406
(anonymous) @ 4011-Section13.js:2822
(anonymous) @ 4011-StateManager.js:543
notifyListeners @ 4011-StateManager.js:541
setValue @ 4011-StateManager.js:419
setValue @ 4011-Section03.js:214
setFieldValue @ 4011-Section03.js:450
calculateGroundFacing @ 4011-Section03.js:1656
calculateReferenceModel @ 4011-Section03.js:1732
calculateAll @ 4011-Section03.js:1666
(anonymous) @ 4011-Calculator.js:513
calculateAll @ 4011-Calculator.js:509
(anonymous) @ index.html:1077
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
4011-Section04.js:493 [S04] 🔄 Updating calculated display values for target mode
4011-Section04.js:501 [S04DB] displayContext mode=target j_32=133574.36633416289 ref_j_32=301986.051518286 k_32=6812.2926830423075 ref_k_32=15401.288627432587
4011-Section04.js:582 [S04 DEBUG] Target mode - j_32: 133574.36633416289
4011-Section04.js:582 [S04 DEBUG] Target mode - k_32: 6812.2926830423075
4011-Section04.js:582 [S04 DEBUG] Target mode - l_27: 51
4011-Section04.js:617 [S04] Calculated display values updated for target mode
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
calculateCoolingSystem @ 4011-Section13.js:3033
calculateTargetModel @ 4011-Section13.js:3563
calculateAll @ 4011-Section13.js:3406
(anonymous) @ 4011-Section13.js:2822
(anonymous) @ 4011-StateManager.js:543
notifyListeners @ 4011-StateManager.js:541
setValue @ 4011-StateManager.js:419
setValue @ 4011-Section03.js:214
setFieldValue @ 4011-Section03.js:450
calculateGroundFacing @ 4011-Section03.js:1656
calculateReferenceModel @ 4011-Section03.js:1732
calculateAll @ 4011-Section03.js:1666
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
calculateCoolingSystem @ 4011-Section13.js:3033
calculateTargetModel @ 4011-Section13.js:3563
calculateAll @ 4011-Section13.js:3406
(anonymous) @ 4011-Section13.js:2822
(anonymous) @ 4011-StateManager.js:543
notifyListeners @ 4011-StateManager.js:541
setValue @ 4011-StateManager.js:419
setValue @ 4011-Section03.js:214
setFieldValue @ 4011-Section03.js:450
calculateGroundFacing @ 4011-Section03.js:1656
calculateReferenceModel @ 4011-Section03.js:1732
calculateAll @ 4011-Section03.js:1666
(anonymous) @ 4011-Calculator.js:513
calculateAll @ 4011-Calculator.js:509
(anonymous) @ index.html:1077
4011-Section13.js:3039 [Section13] 🧊 COOLING RESULTS: d_117=3826.8214105081656, j_116=2.663540445486518, l_116=0, l_114=6366.0721940341
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
calculateCoolingVentilation @ 4011-Section13.js:3275
calculateCoolingSystem @ 4011-Section13.js:3043
calculateTargetModel @ 4011-Section13.js:3563
calculateAll @ 4011-Section13.js:3406
(anonymous) @ 4011-Section13.js:2822
(anonymous) @ 4011-StateManager.js:543
notifyListeners @ 4011-StateManager.js:541
setValue @ 4011-StateManager.js:419
setValue @ 4011-Section03.js:214
setFieldValue @ 4011-Section03.js:450
calculateGroundFacing @ 4011-Section03.js:1656
calculateReferenceModel @ 4011-Section03.js:1732
calculateAll @ 4011-Section03.js:1666
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
calculateCoolingVentilation @ 4011-Section13.js:3275
calculateCoolingSystem @ 4011-Section13.js:3043
calculateTargetModel @ 4011-Section13.js:3563
calculateAll @ 4011-Section13.js:3406
(anonymous) @ 4011-Section13.js:2822
(anonymous) @ 4011-StateManager.js:543
notifyListeners @ 4011-StateManager.js:541
setValue @ 4011-StateManager.js:419
setValue @ 4011-Section03.js:214
setFieldValue @ 4011-Section03.js:450
calculateGroundFacing @ 4011-Section03.js:1656
calculateReferenceModel @ 4011-Section03.js:1732
calculateAll @ 4011-Section03.js:1666
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
updateTargetModelDOMValues @ 4011-Section13.js:3687
calculateTargetModel @ 4011-Section13.js:3573
calculateAll @ 4011-Section13.js:3406
(anonymous) @ 4011-Section13.js:2822
(anonymous) @ 4011-StateManager.js:543
notifyListeners @ 4011-StateManager.js:541
setValue @ 4011-StateManager.js:419
setValue @ 4011-Section03.js:214
setFieldValue @ 4011-Section03.js:450
calculateGroundFacing @ 4011-Section03.js:1656
calculateReferenceModel @ 4011-Section03.js:1732
calculateAll @ 4011-Section03.js:1666
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
updateTargetModelDOMValues @ 4011-Section13.js:3687
calculateTargetModel @ 4011-Section13.js:3573
calculateAll @ 4011-Section13.js:3406
(anonymous) @ 4011-Section13.js:2822
(anonymous) @ 4011-StateManager.js:543
notifyListeners @ 4011-StateManager.js:541
setValue @ 4011-StateManager.js:419
setValue @ 4011-Section03.js:214
setFieldValue @ 4011-Section03.js:450
calculateGroundFacing @ 4011-Section03.js:1656
calculateReferenceModel @ 4011-Section03.js:1732
calculateAll @ 4011-Section03.js:1666
(anonymous) @ 4011-Calculator.js:513
calculateAll @ 4011-Calculator.js:509
(anonymous) @ index.html:1077
4011-Section13.js:3591 [Section13] Target Model calculations complete
4011-Section13.js:3407 [Section13] ✅ Target Model complete
4011-Section13.js:3434 [Section13] ⏭️ Skipping Reference value re-write - triggered in target mode
4011-Section13.js:3440 [Section13] 🎉 DUAL-ENGINE CALCULATIONS COMPLETE
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
(anonymous) @ 4011-Section03.js:1775
storeReferenceResults @ 4011-Section03.js:1773
calculateReferenceModel @ 4011-Section03.js:1739
calculateAll @ 4011-Section03.js:1666
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
(anonymous) @ 4011-Section03.js:1775
storeReferenceResults @ 4011-Section03.js:1773
calculateReferenceModel @ 4011-Section03.js:1739
calculateAll @ 4011-Section03.js:1666
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
(anonymous) @ 4011-Section03.js:1775
storeReferenceResults @ 4011-Section03.js:1773
calculateReferenceModel @ 4011-Section03.js:1739
calculateAll @ 4011-Section03.js:1666
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
(anonymous) @ 4011-Section03.js:1775
storeReferenceResults @ 4011-Section03.js:1773
calculateReferenceModel @ 4011-Section03.js:1739
calculateAll @ 4011-Section03.js:1666
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
(anonymous) @ 4011-Section03.js:1775
storeReferenceResults @ 4011-Section03.js:1773
calculateReferenceModel @ 4011-Section03.js:1739
calculateAll @ 4011-Section03.js:1666
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
(anonymous) @ 4011-Section03.js:1775
storeReferenceResults @ 4011-Section03.js:1773
calculateReferenceModel @ 4011-Section03.js:1739
calculateAll @ 4011-Section03.js:1666
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
(anonymous) @ 4011-Section03.js:1775
storeReferenceResults @ 4011-Section03.js:1773
calculateReferenceModel @ 4011-Section03.js:1739
calculateAll @ 4011-Section03.js:1666
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
(anonymous) @ 4011-Section03.js:1775
storeReferenceResults @ 4011-Section03.js:1773
calculateReferenceModel @ 4011-Section03.js:1739
calculateAll @ 4011-Section03.js:1666
(anonymous) @ 4011-Calculator.js:513
calculateAll @ 4011-Calculator.js:509
(anonymous) @ index.html:1077
4011-Section11.js:1687 [S11] calculateAll TRIGGERED. isReferenceMode: false
4011-Section11.js:1132 [S11] 🔵 REF CLIMATE READ: d_20=4600
4011-Section11.js:1136 [S11] 🔵 REF CLIMATE READ: d_21=196
4011-Section11.js:1132 [S11] 🔵 REF CLIMATE READ: d_20=4600
4011-Section11.js:1136 [S11] 🔵 REF CLIMATE READ: d_21=196
4011-Section11.js:1132 [S11] 🔵 REF CLIMATE READ: d_20=4600
4011-Section11.js:1136 [S11] 🔵 REF CLIMATE READ: d_21=196
4011-Section11.js:1132 [S11] 🔵 REF CLIMATE READ: d_20=4600
4011-Section11.js:1136 [S11] 🔵 REF CLIMATE READ: d_21=196
4011-Section11.js:1132 [S11] 🔵 REF CLIMATE READ: d_20=4600
4011-Section11.js:1136 [S11] 🔵 REF CLIMATE READ: d_21=196
4011-Section11.js:1132 [S11] 🔵 REF CLIMATE READ: d_20=4600
4011-Section11.js:1136 [S11] 🔵 REF CLIMATE READ: d_21=196
4011-Section11.js:1132 [S11] 🔵 REF CLIMATE READ: d_20=4600
4011-Section11.js:1136 [S11] 🔵 REF CLIMATE READ: d_21=196
4011-Section11.js:1132 [S11] 🔵 REF CLIMATE READ: d_20=4600
4011-Section11.js:1136 [S11] 🔵 REF CLIMATE READ: d_21=196
4011-Section11.js:1132 [S11] 🔵 REF CLIMATE READ: d_20=4600
4011-Section11.js:1136 [S11] 🔵 REF CLIMATE READ: d_21=196
4011-Section11.js:1166 [S11] 🔵 REF CLIMATE READ: d_22=1960
4011-Section11.js:1184 [S11] 🔵 REF CLIMATE READ: h_22=-1680
4011-Section11.js:1166 [S11] 🔵 REF CLIMATE READ: d_22=1960
4011-Section11.js:1184 [S11] 🔵 REF CLIMATE READ: h_22=-1680
4011-Section11.js:1256 [S11] REF TB%=50% → ref_i_97=59532.29, ref_k_97=-947.70
4011-Section11.js:1434 [S11] Writing ref penalty: ref_i_97=59532.29, ref_k_97=-947.70
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
4011-Section11.js:1145 [S11] 🎯 TGT CLIMATE READ: d_20=4600
4011-Section11.js:1149 [S11] 🎯 TGT CLIMATE READ: d_21=196
4011-Section11.js:1145 [S11] 🎯 TGT CLIMATE READ: d_20=4600
4011-Section11.js:1149 [S11] 🎯 TGT CLIMATE READ: d_21=196
24011-Section11.js:1189 [S11] 🎯 TGT CLIMATE READ: h_22=-1680
4011-Section11.js:1687 [S11] calculateAll TRIGGERED. isReferenceMode: false
4011-Section11.js:1132 [S11] 🔵 REF CLIMATE READ: d_20=4600
4011-Section11.js:1136 [S11] 🔵 REF CLIMATE READ: d_21=196
4011-Section11.js:1132 [S11] 🔵 REF CLIMATE READ: d_20=4600
4011-Section11.js:1136 [S11] 🔵 REF CLIMATE READ: d_21=196
4011-Section11.js:1132 [S11] 🔵 REF CLIMATE READ: d_20=4600
4011-Section11.js:1136 [S11] 🔵 REF CLIMATE READ: d_21=196
4011-Section11.js:1132 [S11] 🔵 REF CLIMATE READ: d_20=4600
4011-Section11.js:1136 [S11] 🔵 REF CLIMATE READ: d_21=196
4011-Section11.js:1132 [S11] 🔵 REF CLIMATE READ: d_20=4600
4011-Section11.js:1136 [S11] 🔵 REF CLIMATE READ: d_21=196
4011-Section11.js:1132 [S11] 🔵 REF CLIMATE READ: d_20=4600
4011-Section11.js:1136 [S11] 🔵 REF CLIMATE READ: d_21=196
4011-Section11.js:1132 [S11] 🔵 REF CLIMATE READ: d_20=4600
4011-Section11.js:1136 [S11] 🔵 REF CLIMATE READ: d_21=196
4011-Section11.js:1132 [S11] 🔵 REF CLIMATE READ: d_20=4600
4011-Section11.js:1136 [S11] 🔵 REF CLIMATE READ: d_21=196
4011-Section11.js:1132 [S11] 🔵 REF CLIMATE READ: d_20=4600
4011-Section11.js:1136 [S11] 🔵 REF CLIMATE READ: d_21=196
4011-Section11.js:1166 [S11] 🔵 REF CLIMATE READ: d_22=1960
4011-Section11.js:1184 [S11] 🔵 REF CLIMATE READ: h_22=-1680
4011-Section11.js:1166 [S11] 🔵 REF CLIMATE READ: d_22=1960
4011-Section11.js:1184 [S11] 🔵 REF CLIMATE READ: h_22=-1680
4011-Section11.js:1256 [S11] REF TB%=50% → ref_i_97=59532.29, ref_k_97=-947.70
4011-Section11.js:1434 [S11] Writing ref penalty: ref_i_97=59532.29, ref_k_97=-947.70
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
4011-Section11.js:1145 [S11] 🎯 TGT CLIMATE READ: d_20=4600
4011-Section11.js:1149 [S11] 🎯 TGT CLIMATE READ: d_21=196
4011-Section11.js:1145 [S11] 🎯 TGT CLIMATE READ: d_20=4600
4011-Section11.js:1149 [S11] 🎯 TGT CLIMATE READ: d_21=196
24011-Section11.js:1189 [S11] 🎯 TGT CLIMATE READ: h_22=-1680
4011-Section13.js:2813 [S13DEBUG] Reference GF HDD changed: ref_d_22=1960 → triggering Reference calculations
4011-Section13.js:3389 [Section13] 🚀 CALCULATEALL TRIGGERED - Running dual-engine calculations...
4011-Section13.js:3395 [Section13] 🎯 Mode captured at calculation start: target
4011-Section13.js:3401 [Section13] 🔄 Starting Reference Model calculations...
4011-Section13.js:721 🔍 [S13-CONTEXT] Creating reference context: g_118="Volume Constant" from ReferenceState
4011-Section13.js:723 🔍 [S13-CONTEXT] ReferenceState.g_118="Volume Constant", TargetState.g_118="Volume by Schedule"
4011-Section13.js:3457 [Section13] Running Reference Model calculations...
4011-Section13.js:3471 [S13 CONTAMINATION DEBUG] calculateReferenceModel: Using system type = Electricity
4011-Section13.js:2873 [S13] REF HEATING: system=Electricity, ted=251391.1974742337, afue=0.9, cop=1
4011-Section13.js:2879 [S13 REF DEBUG] About to calculate with heating system: Electricity
4011-Section13.js:2882 [S13 REF DEBUG] Will S13 publish ref_d_113=Electricity?
4011-Section13.js:3099 🔍 [S13-VENT] calculateVentilationRates: ventMethod="Volume Constant", ach(l_118)=3.5, ratePerPerson(d_119)=8.33, volume(d_105)=8000
4011-Section13.js:3102 🔍 [S13-VENT] isReferenceCalculation=true, hasContext=true
4011-Section13.js:3110 🔍 [S13-VENT] calculateVentilationValues: ventMethod="Volume Constant", ach(l_118)=3.5, ratePerPerson(d_119)=8.33, volume(d_105)=8000
4011-Section13.js:3113 🔍 [S13-VENT] Supporting values: occupants(d_63)=126, occupiedHours(i_63)=4380, totalHours(j_63)=8760
4011-Section13.js:3133 🔍 [S13-VENT] Volume Constant calculation: ventRateLs = (3.5 * 8000) / 3.6 = 7777.777777777777
4011-Section13.js:3145 ✅ [S13-VENT] Final d_120 result: 7777.777777777777 L/s (from method="Volume Constant", ach=3.5, volume=8000)
4011-Section13.js:2977 [Section13] 🧊 COOLING CALC: mode=REF, coolingSystemType="No Cooling", heatingType="Electricity", isCoolingActive=false, coolingDemand=10192.893604542265
4011-Section13.js:3737 [S13 CONTAMINATION DEBUG] storeReferenceResults called during reference mode
4011-Section13.js:3740 [S13 CONTAMINATION DEBUG] Reference heating system: Electricity
4011-Section13.js:3743 [S13 CONTAMINATION DEBUG] Target heating system: Heatpump
4011-Section13.js:3746 [S13 CONTAMINATION DEBUG] Reference h_115 (gas volume): 0
4011-Section13.js:3749 [S13 CONTAMINATION DEBUG] Reference f_115 (oil volume): 0
4011-Section13.js:3761 [S13 CONTAMINATION DEBUG] Writing ref_f_115 = 0
4011-Section13.js:3761 [S13 CONTAMINATION DEBUG] Writing ref_h_115 = 0
4011-Section13.js:3773 [Section13] Reference results stored with ref_ prefix for downstream sections
4011-Section13.js:3776 [S13 DEBUG] Total Reference results stored: 34
4011-Section13.js:3515 [Section13] Reference Model calculations complete
4011-Section13.js:3403 [Section13] ✅ Reference Model complete
4011-Section13.js:3405 [Section13] 🔄 Starting Target Model calculations...
4011-Section13.js:721 🔍 [S13-CONTEXT] Creating target context: g_118="Volume by Schedule" from TargetState
4011-Section13.js:725 🔍 [S13-CONTEXT] TargetState.g_118="Volume by Schedule", ReferenceState.g_118="Volume Constant"
4011-Section13.js:3536 [Section13] Running Target Model calculations...
4011-Section13.js:2873 [S13] TGT HEATING: system=Heatpump, ted=119171.54500166589, afue=0.98, cop=3.663540445486518
4011-Section13.js:3099 🔍 [S13-VENT] calculateVentilationRates: ventMethod="Volume by Schedule", ach(l_118)=3, ratePerPerson(d_119)=14, volume(d_105)=8000
4011-Section13.js:3102 🔍 [S13-VENT] isReferenceCalculation=false, hasContext=true
4011-Section13.js:3110 🔍 [S13-VENT] calculateVentilationValues: ventMethod="Volume by Schedule", ach(l_118)=3, ratePerPerson(d_119)=14, volume(d_105)=8000
4011-Section13.js:3113 🔍 [S13-VENT] Supporting values: occupants(d_63)=126, occupiedHours(i_63)=4380, totalHours(j_63)=8760
4011-Section13.js:3145 ✅ [S13-VENT] Final d_120 result: 3333.333333333333 L/s (from method="Volume by Schedule", ach=3, volume=8000)
4011-Section13.js:2977 [Section13] 🧊 COOLING CALC: mode=TGT, coolingSystemType="Cooling", heatingType="Heatpump", isCoolingActive=true, coolingDemand=10192.893604542265
4011-Section13.js:3039 [Section13] 🧊 COOLING RESULTS: d_117=3826.8214105081656, j_116=2.663540445486518, l_116=0, l_114=6366.0721940341
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
calculateCoolingVentilation @ 4011-Section13.js:3275
calculateCoolingSystem @ 4011-Section13.js:3043
calculateTargetModel @ 4011-Section13.js:3563
calculateAll @ 4011-Section13.js:3406
(anonymous) @ 4011-Section13.js:2816
(anonymous) @ 4011-StateManager.js:543
notifyListeners @ 4011-StateManager.js:541
setValue @ 4011-StateManager.js:419
(anonymous) @ 4011-Section03.js:1775
storeReferenceResults @ 4011-Section03.js:1773
calculateReferenceModel @ 4011-Section03.js:1739
calculateAll @ 4011-Section03.js:1666
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
calculateCoolingVentilation @ 4011-Section13.js:3275
calculateCoolingSystem @ 4011-Section13.js:3043
calculateTargetModel @ 4011-Section13.js:3563
calculateAll @ 4011-Section13.js:3406
(anonymous) @ 4011-Section13.js:2816
(anonymous) @ 4011-StateManager.js:543
notifyListeners @ 4011-StateManager.js:541
setValue @ 4011-StateManager.js:419
(anonymous) @ 4011-Section03.js:1775
storeReferenceResults @ 4011-Section03.js:1773
calculateReferenceModel @ 4011-Section03.js:1739
calculateAll @ 4011-Section03.js:1666
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
updateTargetModelDOMValues @ 4011-Section13.js:3687
calculateTargetModel @ 4011-Section13.js:3573
calculateAll @ 4011-Section13.js:3406
(anonymous) @ 4011-Section13.js:2816
(anonymous) @ 4011-StateManager.js:543
notifyListeners @ 4011-StateManager.js:541
setValue @ 4011-StateManager.js:419
(anonymous) @ 4011-Section03.js:1775
storeReferenceResults @ 4011-Section03.js:1773
calculateReferenceModel @ 4011-Section03.js:1739
calculateAll @ 4011-Section03.js:1666
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
updateTargetModelDOMValues @ 4011-Section13.js:3687
calculateTargetModel @ 4011-Section13.js:3573
calculateAll @ 4011-Section13.js:3406
(anonymous) @ 4011-Section13.js:2816
(anonymous) @ 4011-StateManager.js:543
notifyListeners @ 4011-StateManager.js:541
setValue @ 4011-StateManager.js:419
(anonymous) @ 4011-Section03.js:1775
storeReferenceResults @ 4011-Section03.js:1773
calculateReferenceModel @ 4011-Section03.js:1739
calculateAll @ 4011-Section03.js:1666
(anonymous) @ 4011-Calculator.js:513
calculateAll @ 4011-Calculator.js:509
(anonymous) @ index.html:1077
4011-Section13.js:3591 [Section13] Target Model calculations complete
4011-Section13.js:3407 [Section13] ✅ Target Model complete
4011-Section13.js:3434 [Section13] ⏭️ Skipping Reference value re-write - triggered in target mode
4011-Section13.js:3440 [Section13] 🎉 DUAL-ENGINE CALCULATIONS COMPLETE
4011-Section11.js:1687 [S11] calculateAll TRIGGERED. isReferenceMode: false
4011-Section11.js:1132 [S11] 🔵 REF CLIMATE READ: d_20=4600
4011-Section11.js:1136 [S11] 🔵 REF CLIMATE READ: d_21=196
4011-Section11.js:1132 [S11] 🔵 REF CLIMATE READ: d_20=4600
4011-Section11.js:1136 [S11] 🔵 REF CLIMATE READ: d_21=196
4011-Section11.js:1132 [S11] 🔵 REF CLIMATE READ: d_20=4600
4011-Section11.js:1136 [S11] 🔵 REF CLIMATE READ: d_21=196
4011-Section11.js:1132 [S11] 🔵 REF CLIMATE READ: d_20=4600
4011-Section11.js:1136 [S11] 🔵 REF CLIMATE READ: d_21=196
4011-Section11.js:1132 [S11] 🔵 REF CLIMATE READ: d_20=4600
4011-Section11.js:1136 [S11] 🔵 REF CLIMATE READ: d_21=196
4011-Section11.js:1132 [S11] 🔵 REF CLIMATE READ: d_20=4600
4011-Section11.js:1136 [S11] 🔵 REF CLIMATE READ: d_21=196
4011-Section11.js:1132 [S11] 🔵 REF CLIMATE READ: d_20=4600
4011-Section11.js:1136 [S11] 🔵 REF CLIMATE READ: d_21=196
4011-Section11.js:1132 [S11] 🔵 REF CLIMATE READ: d_20=4600
4011-Section11.js:1136 [S11] 🔵 REF CLIMATE READ: d_21=196
4011-Section11.js:1132 [S11] 🔵 REF CLIMATE READ: d_20=4600
4011-Section11.js:1136 [S11] 🔵 REF CLIMATE READ: d_21=196
4011-Section11.js:1166 [S11] 🔵 REF CLIMATE READ: d_22=1960
4011-Section11.js:1184 [S11] 🔵 REF CLIMATE READ: h_22=-1680
4011-Section11.js:1166 [S11] 🔵 REF CLIMATE READ: d_22=1960
4011-Section11.js:1184 [S11] 🔵 REF CLIMATE READ: h_22=-1680
4011-Section11.js:1256 [S11] REF TB%=50% → ref_i_97=59532.29, ref_k_97=-947.70
4011-Section11.js:1434 [S11] Writing ref penalty: ref_i_97=59532.29, ref_k_97=-947.70
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
4011-Section11.js:1145 [S11] 🎯 TGT CLIMATE READ: d_20=4600
4011-Section11.js:1149 [S11] 🎯 TGT CLIMATE READ: d_21=196
4011-Section11.js:1145 [S11] 🎯 TGT CLIMATE READ: d_20=4600
4011-Section11.js:1149 [S11] 🎯 TGT CLIMATE READ: d_21=196
24011-Section11.js:1189 [S11] 🎯 TGT CLIMATE READ: h_22=-1680
4011-Section11.js:1687 [S11] calculateAll TRIGGERED. isReferenceMode: false
4011-Section11.js:1132 [S11] 🔵 REF CLIMATE READ: d_20=4600
4011-Section11.js:1136 [S11] 🔵 REF CLIMATE READ: d_21=196
4011-Section11.js:1132 [S11] 🔵 REF CLIMATE READ: d_20=4600
4011-Section11.js:1136 [S11] 🔵 REF CLIMATE READ: d_21=196
4011-Section11.js:1132 [S11] 🔵 REF CLIMATE READ: d_20=4600
4011-Section11.js:1136 [S11] 🔵 REF CLIMATE READ: d_21=196
4011-Section11.js:1132 [S11] 🔵 REF CLIMATE READ: d_20=4600
4011-Section11.js:1136 [S11] 🔵 REF CLIMATE READ: d_21=196
4011-Section11.js:1132 [S11] 🔵 REF CLIMATE READ: d_20=4600
4011-Section11.js:1136 [S11] 🔵 REF CLIMATE READ: d_21=196
4011-Section11.js:1132 [S11] 🔵 REF CLIMATE READ: d_20=4600
4011-Section11.js:1136 [S11] 🔵 REF CLIMATE READ: d_21=196
4011-Section11.js:1132 [S11] 🔵 REF CLIMATE READ: d_20=4600
4011-Section11.js:1136 [S11] 🔵 REF CLIMATE READ: d_21=196
4011-Section11.js:1132 [S11] 🔵 REF CLIMATE READ: d_20=4600
4011-Section11.js:1136 [S11] 🔵 REF CLIMATE READ: d_21=196
4011-Section11.js:1132 [S11] 🔵 REF CLIMATE READ: d_20=4600
4011-Section11.js:1136 [S11] 🔵 REF CLIMATE READ: d_21=196
4011-Section11.js:1166 [S11] 🔵 REF CLIMATE READ: d_22=1960
4011-Section11.js:1184 [S11] 🔵 REF CLIMATE READ: h_22=-1680
4011-Section11.js:1166 [S11] 🔵 REF CLIMATE READ: d_22=1960
4011-Section11.js:1184 [S11] 🔵 REF CLIMATE READ: h_22=-1680
4011-Section11.js:1256 [S11] REF TB%=50% → ref_i_97=59532.29, ref_k_97=-947.70
4011-Section11.js:1434 [S11] Writing ref penalty: ref_i_97=59532.29, ref_k_97=-947.70
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
4011-Section11.js:1145 [S11] 🎯 TGT CLIMATE READ: d_20=4600
4011-Section11.js:1149 [S11] 🎯 TGT CLIMATE READ: d_21=196
4011-Section11.js:1145 [S11] 🎯 TGT CLIMATE READ: d_20=4600
4011-Section11.js:1149 [S11] 🎯 TGT CLIMATE READ: d_21=196
24011-Section11.js:1189 [S11] 🎯 TGT CLIMATE READ: h_22=-1680
4011-Section13.js:2819 [S13DEBUG] Reference GF CDD changed: ref_h_22=-1680 → triggering Reference calculations
4011-Section13.js:3389 [Section13] 🚀 CALCULATEALL TRIGGERED - Running dual-engine calculations...
4011-Section13.js:3395 [Section13] 🎯 Mode captured at calculation start: target
4011-Section13.js:3401 [Section13] 🔄 Starting Reference Model calculations...
4011-Section13.js:721 🔍 [S13-CONTEXT] Creating reference context: g_118="Volume Constant" from ReferenceState
4011-Section13.js:723 🔍 [S13-CONTEXT] ReferenceState.g_118="Volume Constant", TargetState.g_118="Volume by Schedule"
4011-Section13.js:3457 [Section13] Running Reference Model calculations...
4011-Section13.js:3471 [S13 CONTAMINATION DEBUG] calculateReferenceModel: Using system type = Electricity
4011-Section13.js:2873 [S13] REF HEATING: system=Electricity, ted=251391.1974742337, afue=0.9, cop=1
4011-Section13.js:2879 [S13 REF DEBUG] About to calculate with heating system: Electricity
4011-Section13.js:2882 [S13 REF DEBUG] Will S13 publish ref_d_113=Electricity?
4011-Section13.js:3099 🔍 [S13-VENT] calculateVentilationRates: ventMethod="Volume Constant", ach(l_118)=3.5, ratePerPerson(d_119)=8.33, volume(d_105)=8000
4011-Section13.js:3102 🔍 [S13-VENT] isReferenceCalculation=true, hasContext=true
4011-Section13.js:3110 🔍 [S13-VENT] calculateVentilationValues: ventMethod="Volume Constant", ach(l_118)=3.5, ratePerPerson(d_119)=8.33, volume(d_105)=8000
4011-Section13.js:3113 🔍 [S13-VENT] Supporting values: occupants(d_63)=126, occupiedHours(i_63)=4380, totalHours(j_63)=8760
4011-Section13.js:3133 🔍 [S13-VENT] Volume Constant calculation: ventRateLs = (3.5 * 8000) / 3.6 = 7777.777777777777
4011-Section13.js:3145 ✅ [S13-VENT] Final d_120 result: 7777.777777777777 L/s (from method="Volume Constant", ach=3.5, volume=8000)
4011-Section13.js:2977 [Section13] 🧊 COOLING CALC: mode=REF, coolingSystemType="No Cooling", heatingType="Electricity", isCoolingActive=false, coolingDemand=10192.893604542265
4011-Section13.js:3737 [S13 CONTAMINATION DEBUG] storeReferenceResults called during reference mode
4011-Section13.js:3740 [S13 CONTAMINATION DEBUG] Reference heating system: Electricity
4011-Section13.js:3743 [S13 CONTAMINATION DEBUG] Target heating system: Heatpump
4011-Section13.js:3746 [S13 CONTAMINATION DEBUG] Reference h_115 (gas volume): 0
4011-Section13.js:3749 [S13 CONTAMINATION DEBUG] Reference f_115 (oil volume): 0
4011-Section13.js:3761 [S13 CONTAMINATION DEBUG] Writing ref_f_115 = 0
4011-Section13.js:3761 [S13 CONTAMINATION DEBUG] Writing ref_h_115 = 0
4011-Section13.js:3773 [Section13] Reference results stored with ref_ prefix for downstream sections
4011-Section13.js:3776 [S13 DEBUG] Total Reference results stored: 34
4011-Section13.js:3515 [Section13] Reference Model calculations complete
4011-Section13.js:3403 [Section13] ✅ Reference Model complete
4011-Section13.js:3405 [Section13] 🔄 Starting Target Model calculations...
4011-Section13.js:721 🔍 [S13-CONTEXT] Creating target context: g_118="Volume by Schedule" from TargetState
4011-Section13.js:725 🔍 [S13-CONTEXT] TargetState.g_118="Volume by Schedule", ReferenceState.g_118="Volume Constant"
4011-Section13.js:3536 [Section13] Running Target Model calculations...
4011-Section13.js:2873 [S13] TGT HEATING: system=Heatpump, ted=119171.54500166589, afue=0.98, cop=3.663540445486518
4011-Section13.js:3099 🔍 [S13-VENT] calculateVentilationRates: ventMethod="Volume by Schedule", ach(l_118)=3, ratePerPerson(d_119)=14, volume(d_105)=8000
4011-Section13.js:3102 🔍 [S13-VENT] isReferenceCalculation=false, hasContext=true
4011-Section13.js:3110 🔍 [S13-VENT] calculateVentilationValues: ventMethod="Volume by Schedule", ach(l_118)=3, ratePerPerson(d_119)=14, volume(d_105)=8000
4011-Section13.js:3113 🔍 [S13-VENT] Supporting values: occupants(d_63)=126, occupiedHours(i_63)=4380, totalHours(j_63)=8760
4011-Section13.js:3145 ✅ [S13-VENT] Final d_120 result: 3333.333333333333 L/s (from method="Volume by Schedule", ach=3, volume=8000)
4011-Section13.js:2977 [Section13] 🧊 COOLING CALC: mode=TGT, coolingSystemType="Cooling", heatingType="Heatpump", isCoolingActive=true, coolingDemand=10192.893604542265
4011-Section13.js:3039 [Section13] 🧊 COOLING RESULTS: d_117=3826.8214105081656, j_116=2.663540445486518, l_116=0, l_114=6366.0721940341
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
calculateCoolingVentilation @ 4011-Section13.js:3275
calculateCoolingSystem @ 4011-Section13.js:3043
calculateTargetModel @ 4011-Section13.js:3563
calculateAll @ 4011-Section13.js:3406
(anonymous) @ 4011-Section13.js:2822
(anonymous) @ 4011-StateManager.js:543
notifyListeners @ 4011-StateManager.js:541
setValue @ 4011-StateManager.js:419
(anonymous) @ 4011-Section03.js:1775
storeReferenceResults @ 4011-Section03.js:1773
calculateReferenceModel @ 4011-Section03.js:1739
calculateAll @ 4011-Section03.js:1666
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
calculateCoolingVentilation @ 4011-Section13.js:3275
calculateCoolingSystem @ 4011-Section13.js:3043
calculateTargetModel @ 4011-Section13.js:3563
calculateAll @ 4011-Section13.js:3406
(anonymous) @ 4011-Section13.js:2822
(anonymous) @ 4011-StateManager.js:543
notifyListeners @ 4011-StateManager.js:541
setValue @ 4011-StateManager.js:419
(anonymous) @ 4011-Section03.js:1775
storeReferenceResults @ 4011-Section03.js:1773
calculateReferenceModel @ 4011-Section03.js:1739
calculateAll @ 4011-Section03.js:1666
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
updateTargetModelDOMValues @ 4011-Section13.js:3687
calculateTargetModel @ 4011-Section13.js:3573
calculateAll @ 4011-Section13.js:3406
(anonymous) @ 4011-Section13.js:2822
(anonymous) @ 4011-StateManager.js:543
notifyListeners @ 4011-StateManager.js:541
setValue @ 4011-StateManager.js:419
(anonymous) @ 4011-Section03.js:1775
storeReferenceResults @ 4011-Section03.js:1773
calculateReferenceModel @ 4011-Section03.js:1739
calculateAll @ 4011-Section03.js:1666
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
updateTargetModelDOMValues @ 4011-Section13.js:3687
calculateTargetModel @ 4011-Section13.js:3573
calculateAll @ 4011-Section13.js:3406
(anonymous) @ 4011-Section13.js:2822
(anonymous) @ 4011-StateManager.js:543
notifyListeners @ 4011-StateManager.js:541
setValue @ 4011-StateManager.js:419
(anonymous) @ 4011-Section03.js:1775
storeReferenceResults @ 4011-Section03.js:1773
calculateReferenceModel @ 4011-Section03.js:1739
calculateAll @ 4011-Section03.js:1666
(anonymous) @ 4011-Calculator.js:513
calculateAll @ 4011-Calculator.js:509
(anonymous) @ index.html:1077
4011-Section13.js:3591 [Section13] Target Model calculations complete
4011-Section13.js:3407 [Section13] ✅ Target Model complete
4011-Section13.js:3434 [Section13] ⏭️ Skipping Reference value re-write - triggered in target mode
4011-Section13.js:3440 [Section13] 🎉 DUAL-ENGINE CALCULATIONS COMPLETE
4011-Section12.js:1588 [S12] U-agg REF: TB%=50 → g_101=0.347926, g_102=0.405405
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
setCalculatedValue @ 4011-Section12.js:1170
calculateCombinedUValue @ 4011-Section12.js:1604
calculateReferenceModel @ 4011-Section12.js:2228
calculateAll @ 4011-Section12.js:2199
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
setCalculatedValue @ 4011-Section12.js:1170
calculateCombinedUValue @ 4011-Section12.js:1604
calculateReferenceModel @ 4011-Section12.js:2228
calculateAll @ 4011-Section12.js:2199
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
setCalculatedValue @ 4011-Section12.js:1170
calculateCombinedUValue @ 4011-Section12.js:1604
calculateReferenceModel @ 4011-Section12.js:2228
calculateAll @ 4011-Section12.js:2199
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
setCalculatedValue @ 4011-Section12.js:1170
calculateCombinedUValue @ 4011-Section12.js:1604
calculateReferenceModel @ 4011-Section12.js:2228
calculateAll @ 4011-Section12.js:2199
(anonymous) @ 4011-Calculator.js:513
calculateAll @ 4011-Calculator.js:509
(anonymous) @ index.html:1077
4011-Section12.js:1858 [S12] 🔵 REF CLIMATE READ: d_20=4600, d_21=196
4011-Section12.js:1928 [S12DB] REF CLIMATE: d_20=4600, d_21=196, d_22=1960, h_22=-1680
4011-Section12.js:1956 [S12DB] REF h_101 calc: (4600*0.34792632830961084*24)/1000 = 38.41106664538104
4011-Section12.js:1959 [S12DB] REF i_101 result: 38.41106664538104 * 2482.6199999999994 = 95360.08227515586
4011-Section12.js:2111 [S12DB] REF g_104 calc: (0.34792632830961084*2482.6199999999994 + 0.4054054054054054*1100.42)/3583.0400009999994 = 0.365579250312205
4011-Section12.js:2135 [S12DB] REF ROW104: i_101=95360.08227515586, i_102=20985.306810810813, i_103=36440.07984031935 → i_104=152785.46892628603
4011-Section12.js:2138 [S12DB] REF ROW104: h_21="Capacitance", k_98=-1895.4006468093894 → k_104=-1895.4006468093894
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
setCalculatedValue @ 4011-Section12.js:1170
calculateEnvelopeTotals @ 4011-Section12.js:2151
calculateReferenceModel @ 4011-Section12.js:2244
calculateAll @ 4011-Section12.js:2199
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
setCalculatedValue @ 4011-Section12.js:1170
calculateEnvelopeTotals @ 4011-Section12.js:2151
calculateReferenceModel @ 4011-Section12.js:2244
calculateAll @ 4011-Section12.js:2199
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
setCalculatedValue @ 4011-Section12.js:1170
calculateEnvelopeTotals @ 4011-Section12.js:2151
calculateReferenceModel @ 4011-Section12.js:2244
calculateAll @ 4011-Section12.js:2199
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
setCalculatedValue @ 4011-Section12.js:1170
calculateEnvelopeTotals @ 4011-Section12.js:2151
calculateReferenceModel @ 4011-Section12.js:2244
calculateAll @ 4011-Section12.js:2199
(anonymous) @ 4011-Calculator.js:513
calculateAll @ 4011-Calculator.js:509
(anonymous) @ index.html:1077
4011-Section12.js:2326 [S12DB] STORED for S15: ref_d_101=2482.6199999999994
4011-Section12.js:2326 [S12DB] STORED for S15: ref_d_102=1100.42
4011-Section12.js:2326 [S12DB] STORED for S15: ref_g_101=0.34792632830961084
4011-Section12.js:2326 [S12DB] STORED for S15: ref_g_102=0.4054054054054054
4011-Section12.js:2326 [S12DB] STORED for S15: ref_g_104=0.365579250312205
4011-Section12.js:2326 [S12DB] STORED for S15: ref_i_101=95360.08227515586
4011-Section12.js:2326 [S12DB] STORED for S15: ref_i_102=20985.306810810813
4011-Section12.js:2326 [S12DB] STORED for S15: ref_i_104=152785.46892628603
4011-Section12.js:2331 [Section12] Reference results stored with ref_ prefix for downstream sections
4011-Section12.js:1588 [S12] U-agg TGT: TB%=20 → g_101=0.278341, g_102=0.324324
4011-Section12.js:1863 [S12] 🎯 TGT CLIMATE READ: d_20=4600, d_21=196
4011-Section12.js:1939 [S12DB] TGT CLIMATE: d_20=4600, d_21=196, d_22=1960, h_22=-1680
4011-Section12.js:1963 [S12DB] TGT h_101 calc: (4600*0.27834106264768865*24)/1000 = 30.72885331630483
4011-Section12.js:1966 [S12DB] TGT i_101 result: 30.72885331630483 * 2476.6199999999994 = 76103.69270022685
4011-Section12.js:2115 [S12DB] TGT g_104 calc: (0.27834106264768865*2476.6199999999994 + 0.3243243243243243*1100.42)/3577.0400009999994 = 0.29248708855785915
4011-Section12.js:2142 [S12DB] TGT ROW104: i_101=76103.69270022685, i_102=16788.24544864865, i_103=23178.387012790416 → i_104=116070.32516166591
4011-Section12.js:2145 [S12DB] TGT ROW104: h_21="Capacitance", k_98=-3293.5693790538335 → k_104=-3293.5693790538335
4011-Section12.js:266 [S12DB] g_104 DISPLAY (target): 0.2924870886396271
4011-Section12.js:270 [Section12] Calculated display values updated for target mode
4011-Section10.js:1819 [S10 DEBUG] calculateAll() triggered in target mode - running both engines
4011-Section10.js:2040 [S10REF] Utilization calc: ref_i_71=110562.1692, ref_i_79=10060.174319999998, totalGains=120622.34352
4011-Section10.js:2054 [S10REF] Using utilization method: NRC 40%
4011-Section10.js:2091 [S10REF] Final calc: utilizationFactor=0.4, usableGains=48248.937408
4011-Section10.js:2134 [S10REF] Complete: g_80=0.4, g_81=0.9936571089244821, i_80=48248.937408, i_81=119857.24913377894
4011-Section10.js:1827 [S10 DEBUG] Dual-engine calculations complete in target mode
4011-Section11.js:1687 [S11] calculateAll TRIGGERED. isReferenceMode: false
4011-Section11.js:1132 [S11] 🔵 REF CLIMATE READ: d_20=4600
4011-Section11.js:1136 [S11] 🔵 REF CLIMATE READ: d_21=196
4011-Section11.js:1132 [S11] 🔵 REF CLIMATE READ: d_20=4600
4011-Section11.js:1136 [S11] 🔵 REF CLIMATE READ: d_21=196
4011-Section11.js:1132 [S11] 🔵 REF CLIMATE READ: d_20=4600
4011-Section11.js:1136 [S11] 🔵 REF CLIMATE READ: d_21=196
4011-Section11.js:1132 [S11] 🔵 REF CLIMATE READ: d_20=4600
4011-Section11.js:1136 [S11] 🔵 REF CLIMATE READ: d_21=196
4011-Section11.js:1132 [S11] 🔵 REF CLIMATE READ: d_20=4600
4011-Section11.js:1136 [S11] 🔵 REF CLIMATE READ: d_21=196
4011-Section11.js:1132 [S11] 🔵 REF CLIMATE READ: d_20=4600
4011-Section11.js:1136 [S11] 🔵 REF CLIMATE READ: d_21=196
4011-Section11.js:1132 [S11] 🔵 REF CLIMATE READ: d_20=4600
4011-Section11.js:1136 [S11] 🔵 REF CLIMATE READ: d_21=196
4011-Section11.js:1132 [S11] 🔵 REF CLIMATE READ: d_20=4600
4011-Section11.js:1136 [S11] 🔵 REF CLIMATE READ: d_21=196
4011-Section11.js:1132 [S11] 🔵 REF CLIMATE READ: d_20=4600
4011-Section11.js:1136 [S11] 🔵 REF CLIMATE READ: d_21=196
4011-Section11.js:1166 [S11] 🔵 REF CLIMATE READ: d_22=1960
4011-Section11.js:1184 [S11] 🔵 REF CLIMATE READ: h_22=-1680
4011-Section11.js:1166 [S11] 🔵 REF CLIMATE READ: d_22=1960
4011-Section11.js:1184 [S11] 🔵 REF CLIMATE READ: h_22=-1680
4011-Section11.js:1256 [S11] REF TB%=50% → ref_i_97=59532.29, ref_k_97=-947.70
4011-Section11.js:1434 [S11] Writing ref penalty: ref_i_97=59532.29, ref_k_97=-947.70
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
4011-Section11.js:1145 [S11] 🎯 TGT CLIMATE READ: d_20=4600
4011-Section11.js:1149 [S11] 🎯 TGT CLIMATE READ: d_21=196
4011-Section11.js:1145 [S11] 🎯 TGT CLIMATE READ: d_20=4600
4011-Section11.js:1149 [S11] 🎯 TGT CLIMATE READ: d_21=196
24011-Section11.js:1189 [S11] 🎯 TGT CLIMATE READ: h_22=-1680
4011-Section07.js:806 [S07] calculateEmissionsAndLosses: systemType="Heatpump" (TGT)
4011-Section07.js:841 [S07] ⚡ Non-fossil fuel: Heatpump → e_51=0, k_54=0 (both cleared)
4011-Section07.js:806 [S07] calculateEmissionsAndLosses: systemType="Heatpump" (REF)
4011-Section07.js:841 [S07] ⚡ Non-fossil fuel: Heatpump → e_51=0, k_54=0 (both cleared)
4011-Section13.js:3389 [Section13] 🚀 CALCULATEALL TRIGGERED - Running dual-engine calculations...
4011-Section13.js:3395 [Section13] 🎯 Mode captured at calculation start: target
4011-Section13.js:3401 [Section13] 🔄 Starting Reference Model calculations...
4011-Section13.js:721 🔍 [S13-CONTEXT] Creating reference context: g_118="Volume Constant" from ReferenceState
4011-Section13.js:723 🔍 [S13-CONTEXT] ReferenceState.g_118="Volume Constant", TargetState.g_118="Volume by Schedule"
4011-Section13.js:3457 [Section13] Running Reference Model calculations...
4011-Section13.js:3471 [S13 CONTAMINATION DEBUG] calculateReferenceModel: Using system type = Electricity
4011-Section13.js:2873 [S13] REF HEATING: system=Electricity, ted=251391.1974742337, afue=0.9, cop=1
4011-Section13.js:2879 [S13 REF DEBUG] About to calculate with heating system: Electricity
4011-Section13.js:2882 [S13 REF DEBUG] Will S13 publish ref_d_113=Electricity?
4011-Section13.js:3099 🔍 [S13-VENT] calculateVentilationRates: ventMethod="Volume Constant", ach(l_118)=3.5, ratePerPerson(d_119)=8.33, volume(d_105)=8000
4011-Section13.js:3102 🔍 [S13-VENT] isReferenceCalculation=true, hasContext=true
4011-Section13.js:3110 🔍 [S13-VENT] calculateVentilationValues: ventMethod="Volume Constant", ach(l_118)=3.5, ratePerPerson(d_119)=8.33, volume(d_105)=8000
4011-Section13.js:3113 🔍 [S13-VENT] Supporting values: occupants(d_63)=126, occupiedHours(i_63)=4380, totalHours(j_63)=8760
4011-Section13.js:3133 🔍 [S13-VENT] Volume Constant calculation: ventRateLs = (3.5 * 8000) / 3.6 = 7777.777777777777
4011-Section13.js:3145 ✅ [S13-VENT] Final d_120 result: 7777.777777777777 L/s (from method="Volume Constant", ach=3.5, volume=8000)
4011-Section13.js:2977 [Section13] 🧊 COOLING CALC: mode=REF, coolingSystemType="No Cooling", heatingType="Electricity", isCoolingActive=false, coolingDemand=10192.893604542265
4011-Section13.js:3737 [S13 CONTAMINATION DEBUG] storeReferenceResults called during reference mode
4011-Section13.js:3740 [S13 CONTAMINATION DEBUG] Reference heating system: Electricity
4011-Section13.js:3743 [S13 CONTAMINATION DEBUG] Target heating system: Heatpump
4011-Section13.js:3746 [S13 CONTAMINATION DEBUG] Reference h_115 (gas volume): 0
4011-Section13.js:3749 [S13 CONTAMINATION DEBUG] Reference f_115 (oil volume): 0
4011-Section13.js:3761 [S13 CONTAMINATION DEBUG] Writing ref_f_115 = 0
4011-Section13.js:3761 [S13 CONTAMINATION DEBUG] Writing ref_h_115 = 0
4011-Section13.js:3773 [Section13] Reference results stored with ref_ prefix for downstream sections
4011-Section13.js:3776 [S13 DEBUG] Total Reference results stored: 34
4011-Section13.js:3515 [Section13] Reference Model calculations complete
4011-Section13.js:3403 [Section13] ✅ Reference Model complete
4011-Section13.js:3405 [Section13] 🔄 Starting Target Model calculations...
4011-Section13.js:721 🔍 [S13-CONTEXT] Creating target context: g_118="Volume by Schedule" from TargetState
4011-Section13.js:725 🔍 [S13-CONTEXT] TargetState.g_118="Volume by Schedule", ReferenceState.g_118="Volume Constant"
4011-Section13.js:3536 [Section13] Running Target Model calculations...
4011-Section13.js:2873 [S13] TGT HEATING: system=Heatpump, ted=119171.54500166589, afue=0.98, cop=3.663540445486518
4011-Section13.js:3099 🔍 [S13-VENT] calculateVentilationRates: ventMethod="Volume by Schedule", ach(l_118)=3, ratePerPerson(d_119)=14, volume(d_105)=8000
4011-Section13.js:3102 🔍 [S13-VENT] isReferenceCalculation=false, hasContext=true
4011-Section13.js:3110 🔍 [S13-VENT] calculateVentilationValues: ventMethod="Volume by Schedule", ach(l_118)=3, ratePerPerson(d_119)=14, volume(d_105)=8000
4011-Section13.js:3113 🔍 [S13-VENT] Supporting values: occupants(d_63)=126, occupiedHours(i_63)=4380, totalHours(j_63)=8760
4011-Section13.js:3145 ✅ [S13-VENT] Final d_120 result: 3333.333333333333 L/s (from method="Volume by Schedule", ach=3, volume=8000)
4011-Section13.js:2977 [Section13] 🧊 COOLING CALC: mode=TGT, coolingSystemType="Cooling", heatingType="Heatpump", isCoolingActive=true, coolingDemand=10192.893604542265
4011-Section13.js:3039 [Section13] 🧊 COOLING RESULTS: d_117=3826.8214105081656, j_116=2.663540445486518, l_116=0, l_114=6366.0721940341
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
calculateCoolingVentilation @ 4011-Section13.js:3275
calculateCoolingSystem @ 4011-Section13.js:3043
calculateTargetModel @ 4011-Section13.js:3563
calculateAll @ 4011-Section13.js:3406
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
calculateCoolingVentilation @ 4011-Section13.js:3275
calculateCoolingSystem @ 4011-Section13.js:3043
calculateTargetModel @ 4011-Section13.js:3563
calculateAll @ 4011-Section13.js:3406
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
updateTargetModelDOMValues @ 4011-Section13.js:3687
calculateTargetModel @ 4011-Section13.js:3573
calculateAll @ 4011-Section13.js:3406
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
updateTargetModelDOMValues @ 4011-Section13.js:3687
calculateTargetModel @ 4011-Section13.js:3573
calculateAll @ 4011-Section13.js:3406
(anonymous) @ 4011-Calculator.js:513
calculateAll @ 4011-Calculator.js:509
(anonymous) @ index.html:1077
4011-Section13.js:3591 [Section13] Target Model calculations complete
4011-Section13.js:3407 [Section13] ✅ Target Model complete
4011-Section13.js:3434 [Section13] ⏭️ Skipping Reference value re-write - triggered in target mode
4011-Section13.js:3440 [Section13] 🎉 DUAL-ENGINE CALCULATIONS COMPLETE
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
4011-Clock.js:59 🕐 [CLOCK] ⭐ INITIALIZATION COMPLETE: 657ms (all calculations finalized)
4011-Section01.js:1171 ✅ [S01] CALCULATION CHAIN COMPLETE - All values finalized including h_10
4011-Section03.js:2055 Section03: City selected: Attawapiskat
4011-Clock.js:146 [CLOCK] 🎯 User interaction started - timing to h_10 settlement
4011-Section03.js:560 [S03] Getting climate data for: Attawapiskat, ON (Present)
4011-Section03.js:589 [S03] Climate values for Attawapiskat: {d_20: 7100, d_21: 'N/A', j_19: '8.0', d_23: -37, d_24: 28, …}
4011-Clock.js:146 [CLOCK] 🎯 User interaction started - timing to h_10 settlement
4011-Section10.js:2667 S10: Target listener triggered by j_19, recalculating all.
4011-Section10.js:1819 [S10 DEBUG] calculateAll() triggered in target mode - running both engines
4011-Section13.js:3389 [Section13] 🚀 CALCULATEALL TRIGGERED - Running dual-engine calculations...
4011-Section13.js:3395 [Section13] 🎯 Mode captured at calculation start: target
4011-Section13.js:3401 [Section13] 🔄 Starting Reference Model calculations...
4011-Section13.js:721 🔍 [S13-CONTEXT] Creating reference context: g_118="Volume Constant" from ReferenceState
4011-Section13.js:723 🔍 [S13-CONTEXT] ReferenceState.g_118="Volume Constant", TargetState.g_118="Volume by Schedule"
4011-Section13.js:3457 [Section13] Running Reference Model calculations...
4011-Section13.js:3471 [S13 CONTAMINATION DEBUG] calculateReferenceModel: Using system type = Electricity
4011-Section13.js:2873 [S13] REF HEATING: system=Electricity, ted=251391.1974742337, afue=0.9, cop=1
4011-Section13.js:2879 [S13 REF DEBUG] About to calculate with heating system: Electricity
4011-Section13.js:2882 [S13 REF DEBUG] Will S13 publish ref_d_113=Electricity?
4011-Section13.js:3099 🔍 [S13-VENT] calculateVentilationRates: ventMethod="Volume Constant", ach(l_118)=3.5, ratePerPerson(d_119)=8.33, volume(d_105)=8000
4011-Section13.js:3102 🔍 [S13-VENT] isReferenceCalculation=true, hasContext=true
4011-Section13.js:3110 🔍 [S13-VENT] calculateVentilationValues: ventMethod="Volume Constant", ach(l_118)=3.5, ratePerPerson(d_119)=8.33, volume(d_105)=8000
4011-Section13.js:3113 🔍 [S13-VENT] Supporting values: occupants(d_63)=126, occupiedHours(i_63)=4380, totalHours(j_63)=8760
4011-Section13.js:3133 🔍 [S13-VENT] Volume Constant calculation: ventRateLs = (3.5 * 8000) / 3.6 = 7777.777777777777
4011-Section13.js:3145 ✅ [S13-VENT] Final d_120 result: 7777.777777777777 L/s (from method="Volume Constant", ach=3.5, volume=8000)
4011-Section13.js:2977 [Section13] 🧊 COOLING CALC: mode=REF, coolingSystemType="No Cooling", heatingType="Electricity", isCoolingActive=false, coolingDemand=10192.893604542265
4011-Section13.js:3737 [S13 CONTAMINATION DEBUG] storeReferenceResults called during reference mode
4011-Section13.js:3740 [S13 CONTAMINATION DEBUG] Reference heating system: Electricity
4011-Section13.js:3743 [S13 CONTAMINATION DEBUG] Target heating system: Heatpump
4011-Section13.js:3746 [S13 CONTAMINATION DEBUG] Reference h_115 (gas volume): 0
4011-Section13.js:3749 [S13 CONTAMINATION DEBUG] Reference f_115 (oil volume): 0
4011-Section13.js:3761 [S13 CONTAMINATION DEBUG] Writing ref_f_115 = 0
4011-Section13.js:3761 [S13 CONTAMINATION DEBUG] Writing ref_h_115 = 0
4011-Section10.js:2676 S10: Reference listener triggered by ref_m_121, recalculating all.
4011-Section10.js:1819 [S10 DEBUG] calculateAll() triggered in target mode - running both engines
4011-Section04.js:2490 [S04] S15 reference electricity changed: ref_d_136
4011-Section04.js:1577 [S04] Starting dual-engine Excel-compliant calculations
4011-Section04.js:1018 [S04] Row 32 Subtotals - F32: 132938, G32: 6779.838, J32: 133574.36633416289, K32: 6812.2926830423075
4011-Section04.js:94 [S04] j_32 update: 133574.36633416289
4011-Section04.js:1018 [S04] Row 32 Subtotals - F32: 132938, G32: 6779.838, J32: 347966.051518286, K32: 17746.268627432586
24011-Section05.js:266 🔄 [S05] updateCalculatedDisplayValues: mode=target
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
setReferenceCalculatedValue @ 4011-Section04.js:123
setRefCalculatedValue @ 4011-Section04.js:1646
calculateRow32 @ 4011-Section04.js:1026
calculateReferenceModel @ 4011-Section04.js:1659
calculateAll @ 4011-Section04.js:1591
(anonymous) @ 4011-Section04.js:2491
(anonymous) @ 4011-StateManager.js:543
notifyListeners @ 4011-StateManager.js:541
setValue @ 4011-StateManager.js:419
setReferenceValue @ 4011-Section15.js:164
calculateReferenceModel @ 4011-Section15.js:1517
calculateAll @ 4011-Section15.js:1327
(anonymous) @ 4011-Section15.js:2121
(anonymous) @ 4011-StateManager.js:543
notifyListeners @ 4011-StateManager.js:541
setValue @ 4011-StateManager.js:419
setValue @ 4011-Section10.js:230
calculateSubtotals @ 4011-Section10.js:2252
calculateTargetModel @ 4011-Section10.js:1847
calculateAll @ 4011-Section10.js:1824
(anonymous) @ 4011-Section10.js:2679
(anonymous) @ 4011-StateManager.js:543
notifyListeners @ 4011-StateManager.js:541
setValue @ 4011-StateManager.js:419
(anonymous) @ 4011-Section13.js:3765
storeReferenceResults @ 4011-Section13.js:3757
calculateReferenceModel @ 4011-Section13.js:3504
calculateAll @ 4011-Section13.js:3402
calculateAndRefresh @ 4011-Section13.js:2368
(anonymous) @ 4011-StateManager.js:543
notifyListeners @ 4011-StateManager.js:541
setValue @ 4011-StateManager.js:419
setValue @ 4011-Section10.js:230
calculateSubtotals @ 4011-Section10.js:2251
calculateTargetModel @ 4011-Section10.js:1847
calculateAll @ 4011-Section10.js:1824
(anonymous) @ 4011-Section10.js:2670
(anonymous) @ 4011-StateManager.js:543
notifyListeners @ 4011-StateManager.js:541
setValue @ 4011-StateManager.js:419
setValue @ 4011-Section03.js:212
setFieldValue @ 4011-Section03.js:450
(anonymous) @ 4011-Section03.js:2213
(anonymous) @ 4011-StateManager.js:543
notifyListeners @ 4011-StateManager.js:541
setValue @ 4011-StateManager.js:419
(anonymous) @ 4011-Section03.js:1689
calculateTargetModel @ 4011-Section03.js:1686
calculateAll @ 4011-Section03.js:1665
(anonymous) @ 4011-Section03.js:2057
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
setReferenceCalculatedValue @ 4011-Section04.js:123
setRefCalculatedValue @ 4011-Section04.js:1646
calculateRow32 @ 4011-Section04.js:1026
calculateReferenceModel @ 4011-Section04.js:1659
calculateAll @ 4011-Section04.js:1591
(anonymous) @ 4011-Section04.js:2491
(anonymous) @ 4011-StateManager.js:543
notifyListeners @ 4011-StateManager.js:541
setValue @ 4011-StateManager.js:419
setReferenceValue @ 4011-Section15.js:164
calculateReferenceModel @ 4011-Section15.js:1517
calculateAll @ 4011-Section15.js:1327
(anonymous) @ 4011-Section15.js:2121
(anonymous) @ 4011-StateManager.js:543
notifyListeners @ 4011-StateManager.js:541
setValue @ 4011-StateManager.js:419
setValue @ 4011-Section10.js:230
calculateSubtotals @ 4011-Section10.js:2252
calculateTargetModel @ 4011-Section10.js:1847
calculateAll @ 4011-Section10.js:1824
(anonymous) @ 4011-Section10.js:2679
(anonymous) @ 4011-StateManager.js:543
notifyListeners @ 4011-StateManager.js:541
setValue @ 4011-StateManager.js:419
(anonymous) @ 4011-Section13.js:3765
storeReferenceResults @ 4011-Section13.js:3757
calculateReferenceModel @ 4011-Section13.js:3504
calculateAll @ 4011-Section13.js:3402
calculateAndRefresh @ 4011-Section13.js:2368
(anonymous) @ 4011-StateManager.js:543
notifyListeners @ 4011-StateManager.js:541
setValue @ 4011-StateManager.js:419
setValue @ 4011-Section10.js:230
calculateSubtotals @ 4011-Section10.js:2251
calculateTargetModel @ 4011-Section10.js:1847
calculateAll @ 4011-Section10.js:1824
(anonymous) @ 4011-Section10.js:2670
(anonymous) @ 4011-StateManager.js:543
notifyListeners @ 4011-StateManager.js:541
setValue @ 4011-StateManager.js:419
setValue @ 4011-Section03.js:212
setFieldValue @ 4011-Section03.js:450
(anonymous) @ 4011-Section03.js:2213
(anonymous) @ 4011-StateManager.js:543
notifyListeners @ 4011-StateManager.js:541
setValue @ 4011-StateManager.js:419
(anonymous) @ 4011-Section03.js:1689
calculateTargetModel @ 4011-Section03.js:1686
calculateAll @ 4011-Section03.js:1665
(anonymous) @ 4011-Section03.js:2057
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
setReferenceCalculatedValue @ 4011-Section04.js:123
setRefCalculatedValue @ 4011-Section04.js:1646
calculateRow32 @ 4011-Section04.js:1026
calculateReferenceModel @ 4011-Section04.js:1659
calculateAll @ 4011-Section04.js:1591
(anonymous) @ 4011-Section04.js:2491
(anonymous) @ 4011-StateManager.js:543
notifyListeners @ 4011-StateManager.js:541
setValue @ 4011-StateManager.js:419
setReferenceValue @ 4011-Section15.js:164
calculateReferenceModel @ 4011-Section15.js:1517
calculateAll @ 4011-Section15.js:1327
(anonymous) @ 4011-Section15.js:2121
(anonymous) @ 4011-StateManager.js:543
notifyListeners @ 4011-StateManager.js:541
setValue @ 4011-StateManager.js:419
setValue @ 4011-Section10.js:230
calculateSubtotals @ 4011-Section10.js:2252
calculateTargetModel @ 4011-Section10.js:1847
calculateAll @ 4011-Section10.js:1824
(anonymous) @ 4011-Section10.js:2679
(anonymous) @ 4011-StateManager.js:543
notifyListeners @ 4011-StateManager.js:541
setValue @ 4011-StateManager.js:419
(anonymous) @ 4011-Section13.js:3765
storeReferenceResults @ 4011-Section13.js:3757
calculateReferenceModel @ 4011-Section13.js:3504
calculateAll @ 4011-Section13.js:3402
calculateAndRefresh @ 4011-Section13.js:2368
(anonymous) @ 4011-StateManager.js:543
notifyListeners @ 4011-StateManager.js:541
setValue @ 4011-StateManager.js:419
setValue @ 4011-Section10.js:230
calculateSubtotals @ 4011-Section10.js:2251
calculateTargetModel @ 4011-Section10.js:1847
calculateAll @ 4011-Section10.js:1824
(anonymous) @ 4011-Section10.js:2670
(anonymous) @ 4011-StateManager.js:543
notifyListeners @ 4011-StateManager.js:541
setValue @ 4011-StateManager.js:419
setValue @ 4011-Section03.js:212
setFieldValue @ 4011-Section03.js:450
(anonymous) @ 4011-Section03.js:2213
(anonymous) @ 4011-StateManager.js:543
notifyListeners @ 4011-StateManager.js:541
setValue @ 4011-StateManager.js:419
(anonymous) @ 4011-Section03.js:1689
calculateTargetModel @ 4011-Section03.js:1686
calculateAll @ 4011-Section03.js:1665
(anonymous) @ 4011-Section03.js:2057
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
setReferenceCalculatedValue @ 4011-Section04.js:123
setRefCalculatedValue @ 4011-Section04.js:1646
calculateRow32 @ 4011-Section04.js:1026
calculateReferenceModel @ 4011-Section04.js:1659
calculateAll @ 4011-Section04.js:1591
(anonymous) @ 4011-Section04.js:2491
(anonymous) @ 4011-StateManager.js:543
notifyListeners @ 4011-StateManager.js:541
setValue @ 4011-StateManager.js:419
setReferenceValue @ 4011-Section15.js:164
calculateReferenceModel @ 4011-Section15.js:1517
calculateAll @ 4011-Section15.js:1327
(anonymous) @ 4011-Section15.js:2121
(anonymous) @ 4011-StateManager.js:543
notifyListeners @ 4011-StateManager.js:541
setValue @ 4011-StateManager.js:419
setValue @ 4011-Section10.js:230
calculateSubtotals @ 4011-Section10.js:2252
calculateTargetModel @ 4011-Section10.js:1847
calculateAll @ 4011-Section10.js:1824
(anonymous) @ 4011-Section10.js:2679
(anonymous) @ 4011-StateManager.js:543
notifyListeners @ 4011-StateManager.js:541
setValue @ 4011-StateManager.js:419
(anonymous) @ 4011-Section13.js:3765
storeReferenceResults @ 4011-Section13.js:3757
calculateReferenceModel @ 4011-Section13.js:3504
calculateAll @ 4011-Section13.js:3402
calculateAndRefresh @ 4011-Section13.js:2368
(anonymous) @ 4011-StateManager.js:543
notifyListeners @ 4011-StateManager.js:541
setValue @ 4011-StateManager.js:419
setValue @ 4011-Section10.js:230
calculateSubtotals @ 4011-Section10.js:2251
calculateTargetModel @ 4011-Section10.js:1847
calculateAll @ 4011-Section10.js:1824
(anonymous) @ 4011-Section10.js:2670
(anonymous) @ 4011-StateManager.js:543
notifyListeners @ 4011-StateManager.js:541
setValue @ 4011-StateManager.js:419
setValue @ 4011-Section03.js:212
setFieldValue @ 4011-Section03.js:450
(anonymous) @ 4011-Section03.js:2213
(anonymous) @ 4011-StateManager.js:543
notifyListeners @ 4011-StateManager.js:541
setValue @ 4011-StateManager.js:419
(anonymous) @ 4011-Section03.js:1689
calculateTargetModel @ 4011-Section03.js:1686
calculateAll @ 4011-Section03.js:1665
(anonymous) @ 4011-Section03.js:2057
4011-Section04.js:1668 [S04] Reference model calculations complete
4011-Section04.js:1674 [S04DB] storeReference: ref_j_32=347966.051518286, ref_k_32=17746.268627432586 | current target j_32=133574.36633416289, k_32=6812.2926830423075
4011-Section04.js:493 [S04] 🔄 Updating calculated display values for target mode
4011-Section04.js:501 [S04DB] displayContext mode=target j_32=133574.36633416289 ref_j_32=347966.051518286 k_32=6812.2926830423075 ref_k_32=17746.268627432586
4011-Section04.js:582 [S04 DEBUG] Target mode - j_32: 133574.36633416289
4011-Section04.js:582 [S04 DEBUG] Target mode - k_32: 6812.2926830423075
4011-Section04.js:582 [S04 DEBUG] Target mode - l_27: 51
4011-Section04.js:617 [S04] Calculated display values updated for target mode
4011-Section04.js:1599 [S04] Dual-engine calculations completed successfully
4011-Section04.js:493 [S04] 🔄 Updating calculated display values for target mode
4011-Section04.js:501 [S04DB] displayContext mode=target j_32=133574.36633416289 ref_j_32=347966.051518286 k_32=6812.2926830423075 ref_k_32=17746.268627432586
4011-Section04.js:582 [S04 DEBUG] Target mode - j_32: 133574.36633416289
4011-Section04.js:582 [S04 DEBUG] Target mode - k_32: 6812.2926830423075
4011-Section04.js:582 [S04 DEBUG] Target mode - l_27: 51
4011-Section04.js:617 [S04] Calculated display values updated for target mode
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
setValue @ 4011-Section10.js:230
calculateSubtotals @ 4011-Section10.js:2252
calculateTargetModel @ 4011-Section10.js:1847
calculateAll @ 4011-Section10.js:1824
(anonymous) @ 4011-Section10.js:2679
(anonymous) @ 4011-StateManager.js:543
notifyListeners @ 4011-StateManager.js:541
setValue @ 4011-StateManager.js:419
(anonymous) @ 4011-Section13.js:3765
storeReferenceResults @ 4011-Section13.js:3757
calculateReferenceModel @ 4011-Section13.js:3504
calculateAll @ 4011-Section13.js:3402
calculateAndRefresh @ 4011-Section13.js:2368
(anonymous) @ 4011-StateManager.js:543
notifyListeners @ 4011-StateManager.js:541
setValue @ 4011-StateManager.js:419
setValue @ 4011-Section10.js:230
calculateSubtotals @ 4011-Section10.js:2251
calculateTargetModel @ 4011-Section10.js:1847
calculateAll @ 4011-Section10.js:1824
(anonymous) @ 4011-Section10.js:2670
(anonymous) @ 4011-StateManager.js:543
notifyListeners @ 4011-StateManager.js:541
setValue @ 4011-StateManager.js:419
setValue @ 4011-Section03.js:212
setFieldValue @ 4011-Section03.js:450
(anonymous) @ 4011-Section03.js:2213
(anonymous) @ 4011-StateManager.js:543
notifyListeners @ 4011-StateManager.js:541
setValue @ 4011-StateManager.js:419
(anonymous) @ 4011-Section03.js:1689
calculateTargetModel @ 4011-Section03.js:1686
calculateAll @ 4011-Section03.js:1665
(anonymous) @ 4011-Section03.js:2057
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
setValue @ 4011-Section10.js:230
calculateSubtotals @ 4011-Section10.js:2252
calculateTargetModel @ 4011-Section10.js:1847
calculateAll @ 4011-Section10.js:1824
(anonymous) @ 4011-Section10.js:2679
(anonymous) @ 4011-StateManager.js:543
notifyListeners @ 4011-StateManager.js:541
setValue @ 4011-StateManager.js:419
(anonymous) @ 4011-Section13.js:3765
storeReferenceResults @ 4011-Section13.js:3757
calculateReferenceModel @ 4011-Section13.js:3504
calculateAll @ 4011-Section13.js:3402
calculateAndRefresh @ 4011-Section13.js:2368
(anonymous) @ 4011-StateManager.js:543
notifyListeners @ 4011-StateManager.js:541
setValue @ 4011-StateManager.js:419
setValue @ 4011-Section10.js:230
calculateSubtotals @ 4011-Section10.js:2251
calculateTargetModel @ 4011-Section10.js:1847
calculateAll @ 4011-Section10.js:1824
(anonymous) @ 4011-Section10.js:2670
(anonymous) @ 4011-StateManager.js:543
notifyListeners @ 4011-StateManager.js:541
setValue @ 4011-StateManager.js:419
setValue @ 4011-Section03.js:212
setFieldValue @ 4011-Section03.js:450
(anonymous) @ 4011-Section03.js:2213
(anonymous) @ 4011-StateManager.js:543
notifyListeners @ 4011-StateManager.js:541
setValue @ 4011-StateManager.js:419
(anonymous) @ 4011-Section03.js:1689
calculateTargetModel @ 4011-Section03.js:1686
calculateAll @ 4011-Section03.js:1665
(anonymous) @ 4011-Section03.js:2057
4011-Section13.js:2395 [Section13] 📡 🔥 d_127 (TED) listener triggered - S14 energy demand changed!
4011-Section13.js:3389 [Section13] 🚀 CALCULATEALL TRIGGERED - Running dual-engine calculations...
4011-Section13.js:3395 [Section13] 🎯 Mode captured at calculation start: reference
4011-Section13.js:3401 [Section13] 🔄 Starting Reference Model calculations...
4011-Section13.js:721 🔍 [S13-CONTEXT] Creating reference context: g_118="Volume Constant" from ReferenceState
4011-Section13.js:723 🔍 [S13-CONTEXT] ReferenceState.g_118="Volume Constant", TargetState.g_118="Volume by Schedule"
4011-Section13.js:3457 [Section13] Running Reference Model calculations...
4011-Section13.js:3471 [S13 CONTAMINATION DEBUG] calculateReferenceModel: Using system type = Electricity
4011-Section13.js:2873 [S13] REF HEATING: system=Electricity, ted=297371.1974742337, afue=0.9, cop=1
4011-Section13.js:2879 [S13 REF DEBUG] About to calculate with heating system: Electricity
4011-Section13.js:2882 [S13 REF DEBUG] Will S13 publish ref_d_113=Electricity?
4011-Section13.js:3099 🔍 [S13-VENT] calculateVentilationRates: ventMethod="Volume Constant", ach(l_118)=3.5, ratePerPerson(d_119)=8.33, volume(d_105)=8000
4011-Section13.js:3102 🔍 [S13-VENT] isReferenceCalculation=true, hasContext=true
4011-Section13.js:3110 🔍 [S13-VENT] calculateVentilationValues: ventMethod="Volume Constant", ach(l_118)=3.5, ratePerPerson(d_119)=8.33, volume(d_105)=8000
4011-Section13.js:3113 🔍 [S13-VENT] Supporting values: occupants(d_63)=126, occupiedHours(i_63)=4380, totalHours(j_63)=8760
4011-Section13.js:3133 🔍 [S13-VENT] Volume Constant calculation: ventRateLs = (3.5 * 8000) / 3.6 = 7777.777777777777
4011-Section13.js:3145 ✅ [S13-VENT] Final d_120 result: 7777.777777777777 L/s (from method="Volume Constant", ach=3.5, volume=8000)
4011-Section13.js:2977 [Section13] 🧊 COOLING CALC: mode=REF, coolingSystemType="No Cooling", heatingType="Electricity", isCoolingActive=false, coolingDemand=10386.714434542262
4011-Section13.js:3737 [S13 CONTAMINATION DEBUG] storeReferenceResults called during reference mode
4011-Section13.js:3740 [S13 CONTAMINATION DEBUG] Reference heating system: Electricity
4011-Section13.js:3743 [S13 CONTAMINATION DEBUG] Target heating system: Heatpump
4011-Section13.js:3746 [S13 CONTAMINATION DEBUG] Reference h_115 (gas volume): 0
4011-Section13.js:3749 [S13 CONTAMINATION DEBUG] Reference f_115 (oil volume): 0
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
(anonymous) @ 4011-Section13.js:3765
storeReferenceResults @ 4011-Section13.js:3757
calculateReferenceModel @ 4011-Section13.js:3504
calculateAll @ 4011-Section13.js:3402
calculateAndRefresh @ 4011-Section13.js:2368
(anonymous) @ 4011-Section13.js:2399
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
(anonymous) @ 4011-Section10.js:2679
(anonymous) @ 4011-StateManager.js:543
notifyListeners @ 4011-StateManager.js:541
setValue @ 4011-StateManager.js:419
(anonymous) @ 4011-Section13.js:3765
storeReferenceResults @ 4011-Section13.js:3757
calculateReferenceModel @ 4011-Section13.js:3504
calculateAll @ 4011-Section13.js:3402
calculateAndRefresh @ 4011-Section13.js:2368
(anonymous) @ 4011-StateManager.js:543
notifyListeners @ 4011-StateManager.js:541
setValue @ 4011-StateManager.js:419
setValue @ 4011-Section10.js:230
calculateSubtotals @ 4011-Section10.js:2251
calculateTargetModel @ 4011-Section10.js:1847
calculateAll @ 4011-Section10.js:1824
(anonymous) @ 4011-Section10.js:2670
(anonymous) @ 4011-StateManager.js:543
notifyListeners @ 4011-StateManager.js:541
setValue @ 4011-StateManager.js:419
setValue @ 4011-Section03.js:212
setFieldValue @ 4011-Section03.js:450
(anonymous) @ 4011-Section03.js:2213
(anonymous) @ 4011-StateManager.js:543
notifyListeners @ 4011-StateManager.js:541
setValue @ 4011-StateManager.js:419
(anonymous) @ 4011-Section03.js:1689
calculateTargetModel @ 4011-Section03.js:1686
calculateAll @ 4011-Section03.js:1665
(anonymous) @ 4011-Section03.js:2057
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
(anonymous) @ 4011-Section13.js:3765
storeReferenceResults @ 4011-Section13.js:3757
calculateReferenceModel @ 4011-Section13.js:3504
calculateAll @ 4011-Section13.js:3402
calculateAndRefresh @ 4011-Section13.js:2368
(anonymous) @ 4011-Section13.js:2399
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
(anonymous) @ 4011-Section10.js:2679
(anonymous) @ 4011-StateManager.js:543
notifyListeners @ 4011-StateManager.js:541
setValue @ 4011-StateManager.js:419
(anonymous) @ 4011-Section13.js:3765
storeReferenceResults @ 4011-Section13.js:3757
calculateReferenceModel @ 4011-Section13.js:3504
calculateAll @ 4011-Section13.js:3402
calculateAndRefresh @ 4011-Section13.js:2368
(anonymous) @ 4011-StateManager.js:543
notifyListeners @ 4011-StateManager.js:541
setValue @ 4011-StateManager.js:419
setValue @ 4011-Section10.js:230
calculateSubtotals @ 4011-Section10.js:2251
calculateTargetModel @ 4011-Section10.js:1847
calculateAll @ 4011-Section10.js:1824
(anonymous) @ 4011-Section10.js:2670
(anonymous) @ 4011-StateManager.js:543
notifyListeners @ 4011-StateManager.js:541
setValue @ 4011-StateManager.js:419
setValue @ 4011-Section03.js:212
setFieldValue @ 4011-Section03.js:450
(anonymous) @ 4011-Section03.js:2213
(anonymous) @ 4011-StateManager.js:543
notifyListeners @ 4011-StateManager.js:541
setValue @ 4011-StateManager.js:419
(anonymous) @ 4011-Section03.js:1689
calculateTargetModel @ 4011-Section03.js:1686
calculateAll @ 4011-Section03.js:1665
(anonymous) @ 4011-Section03.js:2057
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
(anonymous) @ 4011-Section13.js:3765
storeReferenceResults @ 4011-Section13.js:3757
calculateReferenceModel @ 4011-Section13.js:3504
calculateAll @ 4011-Section13.js:3402
calculateAndRefresh @ 4011-Section13.js:2368
(anonymous) @ 4011-Section13.js:2399
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
(anonymous) @ 4011-Section10.js:2679
(anonymous) @ 4011-StateManager.js:543
notifyListeners @ 4011-StateManager.js:541
setValue @ 4011-StateManager.js:419
(anonymous) @ 4011-Section13.js:3765
storeReferenceResults @ 4011-Section13.js:3757
calculateReferenceModel @ 4011-Section13.js:3504
calculateAll @ 4011-Section13.js:3402
calculateAndRefresh @ 4011-Section13.js:2368
(anonymous) @ 4011-StateManager.js:543
notifyListeners @ 4011-StateManager.js:541
setValue @ 4011-StateManager.js:419
setValue @ 4011-Section10.js:230
calculateSubtotals @ 4011-Section10.js:2251
calculateTargetModel @ 4011-Section10.js:1847
calculateAll @ 4011-Section10.js:1824
(anonymous) @ 4011-Section10.js:2670
(anonymous) @ 4011-StateManager.js:543
notifyListeners @ 4011-StateManager.js:541
setValue @ 4011-StateManager.js:419
setValue @ 4011-Section03.js:212
setFieldValue @ 4011-Section03.js:450
(anonymous) @ 4011-Section03.js:2213
(anonymous) @ 4011-StateManager.js:543
notifyListeners @ 4011-StateManager.js:541
setValue @ 4011-StateManager.js:419
(anonymous) @ 4011-Section03.js:1689
calculateTargetModel @ 4011-Section03.js:1686
calculateAll @ 4011-Section03.js:1665
(anonymous) @ 4011-Section03.js:2057
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
(anonymous) @ 4011-Section13.js:3765
storeReferenceResults @ 4011-Section13.js:3757
calculateReferenceModel @ 4011-Section13.js:3504
calculateAll @ 4011-Section13.js:3402
calculateAndRefresh @ 4011-Section13.js:2368
(anonymous) @ 4011-Section13.js:2399
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
(anonymous) @ 4011-Section10.js:2679
(anonymous) @ 4011-StateManager.js:543
notifyListeners @ 4011-StateManager.js:541
setValue @ 4011-StateManager.js:419
(anonymous) @ 4011-Section13.js:3765
storeReferenceResults @ 4011-Section13.js:3757
calculateReferenceModel @ 4011-Section13.js:3504
calculateAll @ 4011-Section13.js:3402
calculateAndRefresh @ 4011-Section13.js:2368
(anonymous) @ 4011-StateManager.js:543
notifyListeners @ 4011-StateManager.js:541
setValue @ 4011-StateManager.js:419
setValue @ 4011-Section10.js:230
calculateSubtotals @ 4011-Section10.js:2251
calculateTargetModel @ 4011-Section10.js:1847
calculateAll @ 4011-Section10.js:1824
(anonymous) @ 4011-Section10.js:2670
(anonymous) @ 4011-StateManager.js:543
notifyListeners @ 4011-StateManager.js:541
setValue @ 4011-StateManager.js:419
setValue @ 4011-Section03.js:212
setFieldValue @ 4011-Section03.js:450
(anonymous) @ 4011-Section03.js:2213
(anonymous) @ 4011-StateManager.js:543
notifyListeners @ 4011-StateManager.js:541
setValue @ 4011-StateManager.js:419
(anonymous) @ 4011-Section03.js:1689
calculateTargetModel @ 4011-Section03.js:1686
calculateAll @ 4011-Section03.js:1665
(anonymous) @ 4011-Section03.js:2057
4011-Section13.js:3761 [S13 CONTAMINATION DEBUG] Writing ref_f_115 = 0
4011-Section13.js:3761 [S13 CONTAMINATION DEBUG] Writing ref_h_115 = 0
4011-Section13.js:3773 [Section13] Reference results stored with ref_ prefix for downstream sections
4011-Section13.js:3776 [S13 DEBUG] Total Reference results stored: 34
4011-Section13.js:3515 [Section13] Reference Model calculations complete
4011-Section13.js:3403 [Section13] ✅ Reference Model complete
4011-Section13.js:3405 [Section13] 🔄 Starting Target Model calculations...
4011-Section13.js:721 🔍 [S13-CONTEXT] Creating target context: g_118="Volume by Schedule" from TargetState
4011-Section13.js:725 🔍 [S13-CONTEXT] TargetState.g_118="Volume by Schedule", ReferenceState.g_118="Volume Constant"
4011-Section13.js:3536 [Section13] Running Target Model calculations...
4011-Section13.js:2873 [S13] TGT HEATING: system=Heatpump, ted=120771.8072816659, afue=0.98, cop=3.663540445486518
4011-Section13.js:3099 🔍 [S13-VENT] calculateVentilationRates: ventMethod="Volume by Schedule", ach(l_118)=3, ratePerPerson(d_119)=14, volume(d_105)=8000
4011-Section13.js:3102 🔍 [S13-VENT] isReferenceCalculation=false, hasContext=true
4011-Section13.js:3110 🔍 [S13-VENT] calculateVentilationValues: ventMethod="Volume by Schedule", ach(l_118)=3, ratePerPerson(d_119)=14, volume(d_105)=8000
4011-Section13.js:3113 🔍 [S13-VENT] Supporting values: occupants(d_63)=126, occupiedHours(i_63)=4380, totalHours(j_63)=8760
4011-Section13.js:3145 ✅ [S13-VENT] Final d_120 result: 3333.333333333333 L/s (from method="Volume by Schedule", ach=3, volume=8000)
4011-Section15.js:1750 [S15] 🎯 TGT S03 CLIMATE READ: h_23=18, d_23=-24, d_24=30, h_24=24
4011-StateManager.js:343 [StateManager] 🎯 h_10 setValue: "93.59190466238991" (state: calculated)
4011-StateManager.js:346 [StateManager] h_10 setValue stack trace:
setValue @ 4011-StateManager.js:346
calculateValues @ 4011-Section15.js:1832
calculateTargetModel @ 4011-Section15.js:1662
calculateAll @ 4011-Section15.js:1328
forceTEDITELIUpdate @ 4011-SectionIntegrator.js:305
(anonymous) @ 4011-SectionIntegrator.js:277
(anonymous) @ 4011-StateManager.js:543
notifyListeners @ 4011-StateManager.js:541
setValue @ 4011-StateManager.js:419
setFieldValue @ 4011-Section13.js:636
calculateVentilationEnergy @ 4011-Section13.js:3189
calculateTargetModel @ 4011-Section13.js:3555
calculateAll @ 4011-Section13.js:3406
calculateAndRefresh @ 4011-Section13.js:2368
(anonymous) @ 4011-Section13.js:2399
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
(anonymous) @ 4011-Section10.js:2679
(anonymous) @ 4011-StateManager.js:543
notifyListeners @ 4011-StateManager.js:541
setValue @ 4011-StateManager.js:419
(anonymous) @ 4011-Section13.js:3765
storeReferenceResults @ 4011-Section13.js:3757
calculateReferenceModel @ 4011-Section13.js:3504
calculateAll @ 4011-Section13.js:3402
calculateAndRefresh @ 4011-Section13.js:2368
(anonymous) @ 4011-StateManager.js:543
notifyListeners @ 4011-StateManager.js:541
setValue @ 4011-StateManager.js:419
setValue @ 4011-Section10.js:230
calculateSubtotals @ 4011-Section10.js:2251
calculateTargetModel @ 4011-Section10.js:1847
calculateAll @ 4011-Section10.js:1824
(anonymous) @ 4011-Section10.js:2670
(anonymous) @ 4011-StateManager.js:543
notifyListeners @ 4011-StateManager.js:541
setValue @ 4011-StateManager.js:419
setValue @ 4011-Section03.js:212
setFieldValue @ 4011-Section03.js:450
(anonymous) @ 4011-Section03.js:2213
(anonymous) @ 4011-StateManager.js:543
notifyListeners @ 4011-StateManager.js:541
setValue @ 4011-StateManager.js:419
(anonymous) @ 4011-Section03.js:1689
calculateTargetModel @ 4011-Section03.js:1686
calculateAll @ 4011-Section03.js:1665
(anonymous) @ 4011-Section03.js:2057
4011-Section15.js:1750 [S15] 🎯 TGT S03 CLIMATE READ: h_23=18, d_23=-24, d_24=30, h_24=24
4011-StateManager.js:343 [StateManager] 🎯 h_10 setValue: "93.59190466238991" (state: calculated)
4011-StateManager.js:346 [StateManager] h_10 setValue stack trace:
setValue @ 4011-StateManager.js:346
calculateValues @ 4011-Section15.js:1832
calculateTargetModel @ 4011-Section15.js:1662
calculateAll @ 4011-Section15.js:1328
forceTEDITELIUpdate @ 4011-SectionIntegrator.js:305
(anonymous) @ 4011-SectionIntegrator.js:277
(anonymous) @ 4011-StateManager.js:543
notifyListeners @ 4011-StateManager.js:541
setValue @ 4011-StateManager.js:419
setFieldValue @ 4011-Section13.js:636
calculateVentilationEnergy @ 4011-Section13.js:3189
calculateTargetModel @ 4011-Section13.js:3555
calculateAll @ 4011-Section13.js:3406
calculateAndRefresh @ 4011-Section13.js:2368
(anonymous) @ 4011-Section13.js:2399
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
(anonymous) @ 4011-Section10.js:2679
(anonymous) @ 4011-StateManager.js:543
notifyListeners @ 4011-StateManager.js:541
setValue @ 4011-StateManager.js:419
(anonymous) @ 4011-Section13.js:3765
storeReferenceResults @ 4011-Section13.js:3757
calculateReferenceModel @ 4011-Section13.js:3504
calculateAll @ 4011-Section13.js:3402
calculateAndRefresh @ 4011-Section13.js:2368
(anonymous) @ 4011-StateManager.js:543
notifyListeners @ 4011-StateManager.js:541
setValue @ 4011-StateManager.js:419
setValue @ 4011-Section10.js:230
calculateSubtotals @ 4011-Section10.js:2251
calculateTargetModel @ 4011-Section10.js:1847
calculateAll @ 4011-Section10.js:1824
(anonymous) @ 4011-Section10.js:2670
(anonymous) @ 4011-StateManager.js:543
notifyListeners @ 4011-StateManager.js:541
setValue @ 4011-StateManager.js:419
setValue @ 4011-Section03.js:212
setFieldValue @ 4011-Section03.js:450
(anonymous) @ 4011-Section03.js:2213
(anonymous) @ 4011-StateManager.js:543
notifyListeners @ 4011-StateManager.js:541
setValue @ 4011-StateManager.js:419
(anonymous) @ 4011-Section03.js:1689
calculateTargetModel @ 4011-Section03.js:1686
calculateAll @ 4011-Section03.js:1665
(anonymous) @ 4011-Section03.js:2057
4011-Section10.js:2667 S10: Target listener triggered by m_121, recalculating all.
4011-Section10.js:1819 [S10 DEBUG] calculateAll() triggered in target mode - running both engines
4011-Section10.js:2040 [S10REF] Utilization calc: ref_i_71=110562.1692, ref_i_79=10060.174319999998, totalGains=120622.34352
4011-Section10.js:2054 [S10REF] Using utilization method: NRC 40%
4011-Section10.js:2091 [S10REF] Final calc: utilizationFactor=0.4, usableGains=48248.937408
4011-Section10.js:2134 [S10REF] Complete: g_80=0.4, g_81=0.9966231765247549, i_80=48248.937408, i_81=120215.02315876257
4011-Section10.js:1827 [S10 DEBUG] Dual-engine calculations complete in target mode
4011-Section10.js:341 [S10DISPLAY] updateCalculatedDisplayValues() called in target mode
4011-Section10.js:448 [S10DISPLAY] Display (target) m_73 = 24.84
4011-Section10.js:448 [S10DISPLAY] Display (target) m_74 = 0.19
4011-Section10.js:448 [S10DISPLAY] Display (target) m_75 = 2.09
4011-Section10.js:448 [S10DISPLAY] Display (target) m_76 = 24.76
4011-Section10.js:448 [S10DISPLAY] Display (target) m_77 = 64.37
4011-Section10.js:448 [S10DISPLAY] Display (target) m_78 = 25.00
4011-Section10.js:448 [S10DISPLAY] Display (target) i_73 = 186.30
4011-Section10.js:448 [S10DISPLAY] Display (target) i_74 = 15.42
4011-Section10.js:448 [S10DISPLAY] Display (target) i_75 = 8.00
4011-Section10.js:448 [S10DISPLAY] Display (target) i_76 = 3,936.84
4011-Section10.js:448 [S10DISPLAY] Display (target) i_77 = 6,479.48
4011-Section10.js:448 [S10DISPLAY] Display (target) i_78 = 0.00
4011-Section10.js:448 [S10DISPLAY] Display (target) i_79 = 10,626.05
4011-Section10.js:448 [S10DISPLAY] Display (target) k_73 = 0.00
4011-Section10.js:448 [S10DISPLAY] Display (target) k_74 = 0.00
4011-Section10.js:448 [S10DISPLAY] Display (target) k_75 = 0.00
4011-Section10.js:448 [S10DISPLAY] Display (target) k_76 = 0.00
4011-Section10.js:448 [S10DISPLAY] Display (target) k_77 = 323.97
4011-Section10.js:448 [S10DISPLAY] Display (target) k_78 = 0.00
4011-Section10.js:448 [S10DISPLAY] Display (target) k_79 = 323.97
4011-Section10.js:448 [S10DISPLAY] Display (target) j_73 = 1.75%
4011-Section10.js:448 [S10DISPLAY] Display (target) j_74 = 0.15%
4011-Section10.js:448 [S10DISPLAY] Display (target) j_75 = 0.08%
4011-Section10.js:448 [S10DISPLAY] Display (target) j_76 = 37.05%
4011-Section10.js:448 [S10DISPLAY] Display (target) j_77 = 60.98%
4011-Section10.js:448 [S10DISPLAY] Display (target) j_78 = 0.00%
4011-Section10.js:448 [S10DISPLAY] Display (target) j_79 = 100.00%
4011-Section10.js:448 [S10DISPLAY] Display (target) l_73 = 0.00%
4011-Section10.js:448 [S10DISPLAY] Display (target) l_74 = 0.00%
4011-Section10.js:448 [S10DISPLAY] Display (target) l_75 = 0.00%
4011-Section10.js:448 [S10DISPLAY] Display (target) l_76 = 0.00%
4011-Section10.js:448 [S10DISPLAY] Display (target) l_77 = 100.00%
4011-Section10.js:448 [S10DISPLAY] Display (target) l_78 = 0.00%
4011-Section10.js:448 [S10DISPLAY] Display (target) l_79 = 100.00%
4011-Section10.js:448 [S10DISPLAY] Display (target) e_80 = 110,698.29
4011-Section10.js:448 [S10DISPLAY] Display (target) e_81 = 110,698.29
4011-Section10.js:415 [S10DISPLAY] g_80 DEBUG: mode=target, valueToDisplay=0.4
4011-Section10.js:448 [S10DISPLAY] Display (target) g_80 = 40.00%
4011-Section10.js:448 [S10DISPLAY] Display (target) g_81 = 97.18%
4011-Section10.js:448 [S10DISPLAY] Display (target) i_80 = 44,279.32
4011-Section10.js:448 [S10DISPLAY] Display (target) i_81 = 107,577.48
4011-Section10.js:448 [S10DISPLAY] Display (target) i_82 = 66,418.98
4011-Section10.js:2688 S10: Target utilization factor dependency m_121 changed.
4011-Section10.js:341 [S10DISPLAY] updateCalculatedDisplayValues() called in target mode
4011-Section10.js:448 [S10DISPLAY] Display (target) m_73 = 24.84
4011-Section10.js:448 [S10DISPLAY] Display (target) m_74 = 0.19
4011-Section10.js:448 [S10DISPLAY] Display (target) m_75 = 2.09
4011-Section10.js:448 [S10DISPLAY] Display (target) m_76 = 24.76
4011-Section10.js:448 [S10DISPLAY] Display (target) m_77 = 64.37
4011-Section10.js:448 [S10DISPLAY] Display (target) m_78 = 25.00
4011-Section10.js:448 [S10DISPLAY] Display (target) i_73 = 186.30
4011-Section10.js:448 [S10DISPLAY] Display (target) i_74 = 15.42
4011-Section10.js:448 [S10DISPLAY] Display (target) i_75 = 8.00
4011-Section10.js:448 [S10DISPLAY] Display (target) i_76 = 3,936.84
4011-Section10.js:448 [S10DISPLAY] Display (target) i_77 = 6,479.48
4011-Section10.js:448 [S10DISPLAY] Display (target) i_78 = 0.00
4011-Section10.js:448 [S10DISPLAY] Display (target) i_79 = 10,626.05
4011-Section10.js:448 [S10DISPLAY] Display (target) k_73 = 0.00
4011-Section10.js:448 [S10DISPLAY] Display (target) k_74 = 0.00
4011-Section10.js:448 [S10DISPLAY] Display (target) k_75 = 0.00
4011-Section10.js:448 [S10DISPLAY] Display (target) k_76 = 0.00
4011-Section10.js:448 [S10DISPLAY] Display (target) k_77 = 323.97
4011-Section10.js:448 [S10DISPLAY] Display (target) k_78 = 0.00
4011-Section10.js:448 [S10DISPLAY] Display (target) k_79 = 323.97
4011-Section10.js:448 [S10DISPLAY] Display (target) j_73 = 1.75%
4011-Section10.js:448 [S10DISPLAY] Display (target) j_74 = 0.15%
4011-Section10.js:448 [S10DISPLAY] Display (target) j_75 = 0.08%
4011-Section10.js:448 [S10DISPLAY] Display (target) j_76 = 37.05%
4011-Section10.js:448 [S10DISPLAY] Display (target) j_77 = 60.98%
4011-Section10.js:448 [S10DISPLAY] Display (target) j_78 = 0.00%
4011-Section10.js:448 [S10DISPLAY] Display (target) j_79 = 100.00%
4011-Section10.js:448 [S10DISPLAY] Display (target) l_73 = 0.00%
4011-Section10.js:448 [S10DISPLAY] Display (target) l_74 = 0.00%
4011-Section10.js:448 [S10DISPLAY] Display (target) l_75 = 0.00%
4011-Section10.js:448 [S10DISPLAY] Display (target) l_76 = 0.00%
4011-Section10.js:448 [S10DISPLAY] Display (target) l_77 = 100.00%
4011-Section10.js:448 [S10DISPLAY] Display (target) l_78 = 0.00%
4011-Section10.js:448 [S10DISPLAY] Display (target) l_79 = 100.00%
4011-Section10.js:448 [S10DISPLAY] Display (target) e_80 = 110,698.29
4011-Section10.js:448 [S10DISPLAY] Display (target) e_81 = 110,698.29
4011-Section10.js:415 [S10DISPLAY] g_80 DEBUG: mode=target, valueToDisplay=0.4
4011-Section10.js:448 [S10DISPLAY] Display (target) g_80 = 40.00%
4011-Section10.js:448 [S10DISPLAY] Display (target) g_81 = 97.18%
4011-Section10.js:448 [S10DISPLAY] Display (target) i_80 = 44,279.32
4011-Section10.js:448 [S10DISPLAY] Display (target) i_81 = 107,577.48
4011-Section10.js:448 [S10DISPLAY] Display (target) i_82 = 66,418.98
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
calculateVentilationEnergy @ 4011-Section13.js:3191
calculateTargetModel @ 4011-Section13.js:3555
calculateAll @ 4011-Section13.js:3406
calculateAndRefresh @ 4011-Section13.js:2368
(anonymous) @ 4011-Section13.js:2399
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
(anonymous) @ 4011-Section10.js:2679
(anonymous) @ 4011-StateManager.js:543
notifyListeners @ 4011-StateManager.js:541
setValue @ 4011-StateManager.js:419
(anonymous) @ 4011-Section13.js:3765
storeReferenceResults @ 4011-Section13.js:3757
calculateReferenceModel @ 4011-Section13.js:3504
calculateAll @ 4011-Section13.js:3402
calculateAndRefresh @ 4011-Section13.js:2368
(anonymous) @ 4011-StateManager.js:543
notifyListeners @ 4011-StateManager.js:541
setValue @ 4011-StateManager.js:419
setValue @ 4011-Section10.js:230
calculateSubtotals @ 4011-Section10.js:2251
calculateTargetModel @ 4011-Section10.js:1847
calculateAll @ 4011-Section10.js:1824
(anonymous) @ 4011-Section10.js:2670
(anonymous) @ 4011-StateManager.js:543
notifyListeners @ 4011-StateManager.js:541
setValue @ 4011-StateManager.js:419
setValue @ 4011-Section03.js:212
setFieldValue @ 4011-Section03.js:450
(anonymous) @ 4011-Section03.js:2213
(anonymous) @ 4011-StateManager.js:543
notifyListeners @ 4011-StateManager.js:541
setValue @ 4011-StateManager.js:419
(anonymous) @ 4011-Section03.js:1689
calculateTargetModel @ 4011-Section03.js:1686
calculateAll @ 4011-Section03.js:1665
(anonymous) @ 4011-Section03.js:2057
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
calculateVentilationEnergy @ 4011-Section13.js:3191
calculateTargetModel @ 4011-Section13.js:3555
calculateAll @ 4011-Section13.js:3406
calculateAndRefresh @ 4011-Section13.js:2368
(anonymous) @ 4011-Section13.js:2399
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
(anonymous) @ 4011-Section10.js:2679
(anonymous) @ 4011-StateManager.js:543
notifyListeners @ 4011-StateManager.js:541
setValue @ 4011-StateManager.js:419
(anonymous) @ 4011-Section13.js:3765
storeReferenceResults @ 4011-Section13.js:3757
calculateReferenceModel @ 4011-Section13.js:3504
calculateAll @ 4011-Section13.js:3402
calculateAndRefresh @ 4011-Section13.js:2368
(anonymous) @ 4011-StateManager.js:543
notifyListeners @ 4011-StateManager.js:541
setValue @ 4011-StateManager.js:419
setValue @ 4011-Section10.js:230
calculateSubtotals @ 4011-Section10.js:2251
calculateTargetModel @ 4011-Section10.js:1847
calculateAll @ 4011-Section10.js:1824
(anonymous) @ 4011-Section10.js:2670
(anonymous) @ 4011-StateManager.js:543
notifyListeners @ 4011-StateManager.js:541
setValue @ 4011-StateManager.js:419
setValue @ 4011-Section03.js:212
setFieldValue @ 4011-Section03.js:450
(anonymous) @ 4011-Section03.js:2213
(anonymous) @ 4011-StateManager.js:543
notifyListeners @ 4011-StateManager.js:541
setValue @ 4011-StateManager.js:419
(anonymous) @ 4011-Section03.js:1689
calculateTargetModel @ 4011-Section03.js:1686
calculateAll @ 4011-Section03.js:1665
(anonymous) @ 4011-Section03.js:2057
4011-Section13.js:2977 [Section13] 🧊 COOLING CALC: mode=TGT, coolingSystemType="Cooling", heatingType="Heatpump", isCoolingActive=true, coolingDemand=10386.714434542262
4011-Section15.js:1750 [S15] 🎯 TGT S03 CLIMATE READ: h_23=18, d_23=-24, d_24=30, h_24=24
4011-Section04.js:2482 [S04] S15 target electricity changed: d_136
4011-Section04.js:1577 [S04] Starting dual-engine Excel-compliant calculations
4011-Section04.js:1018 [S04] Row 32 Subtotals - F32: 132938, G32: 6779.838, J32: 133647.1344538768, K32: 6816.003857147716
4011-Section04.js:94 [S04] j_32 update: 133647.1344538768
4011-Section01.js:1250 [S01] j_32 listener: 133574.36633416289 → 133647.1344538768
4011-Section01.js:1251 [S01] 🕐 j_32 listener timing: StateManager current j_32 = 133647.1344538768
24011-Section05.js:266 🔄 [S05] updateCalculatedDisplayValues: mode=target
4011-Section15.js:1750 [S15] 🎯 TGT S03 CLIMATE READ: h_23=18, d_23=-24, d_24=30, h_24=24
4011-StateManager.js:343 [StateManager] 🎯 h_10 setValue: "93.64289129335538" (state: calculated)
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
calculateCoolingSystem @ 4011-Section13.js:3033
calculateTargetModel @ 4011-Section13.js:3563
calculateAll @ 4011-Section13.js:3406
calculateAndRefresh @ 4011-Section13.js:2368
(anonymous) @ 4011-Section13.js:2399
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
(anonymous) @ 4011-Section10.js:2679
(anonymous) @ 4011-StateManager.js:543
notifyListeners @ 4011-StateManager.js:541
setValue @ 4011-StateManager.js:419
(anonymous) @ 4011-Section13.js:3765
storeReferenceResults @ 4011-Section13.js:3757
calculateReferenceModel @ 4011-Section13.js:3504
calculateAll @ 4011-Section13.js:3402
calculateAndRefresh @ 4011-Section13.js:2368
(anonymous) @ 4011-StateManager.js:543
notifyListeners @ 4011-StateManager.js:541
setValue @ 4011-StateManager.js:419
setValue @ 4011-Section10.js:230
calculateSubtotals @ 4011-Section10.js:2251
calculateTargetModel @ 4011-Section10.js:1847
calculateAll @ 4011-Section10.js:1824
(anonymous) @ 4011-Section10.js:2670
(anonymous) @ 4011-StateManager.js:543
notifyListeners @ 4011-StateManager.js:541
setValue @ 4011-StateManager.js:419
setValue @ 4011-Section03.js:212
setFieldValue @ 4011-Section03.js:450
(anonymous) @ 4011-Section03.js:2213
(anonymous) @ 4011-StateManager.js:543
notifyListeners @ 4011-StateManager.js:541
setValue @ 4011-StateManager.js:419
(anonymous) @ 4011-Section03.js:1689
calculateTargetModel @ 4011-Section03.js:1686
calculateAll @ 4011-Section03.js:1665
(anonymous) @ 4011-Section03.js:2057
4011-Section15.js:1750 [S15] 🎯 TGT S03 CLIMATE READ: h_23=18, d_23=-24, d_24=30, h_24=24
4011-StateManager.js:343 [StateManager] 🎯 h_10 setValue: "93.64289129335538" (state: calculated)
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
calculateCoolingSystem @ 4011-Section13.js:3033
calculateTargetModel @ 4011-Section13.js:3563
calculateAll @ 4011-Section13.js:3406
calculateAndRefresh @ 4011-Section13.js:2368
(anonymous) @ 4011-Section13.js:2399
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
(anonymous) @ 4011-Section10.js:2679
(anonymous) @ 4011-StateManager.js:543
notifyListeners @ 4011-StateManager.js:541
setValue @ 4011-StateManager.js:419
(anonymous) @ 4011-Section13.js:3765
storeReferenceResults @ 4011-Section13.js:3757
calculateReferenceModel @ 4011-Section13.js:3504
calculateAll @ 4011-Section13.js:3402
calculateAndRefresh @ 4011-Section13.js:2368
(anonymous) @ 4011-StateManager.js:543
notifyListeners @ 4011-StateManager.js:541
setValue @ 4011-StateManager.js:419
setValue @ 4011-Section10.js:230
calculateSubtotals @ 4011-Section10.js:2251
calculateTargetModel @ 4011-Section10.js:1847
calculateAll @ 4011-Section10.js:1824
(anonymous) @ 4011-Section10.js:2670
(anonymous) @ 4011-StateManager.js:543
notifyListeners @ 4011-StateManager.js:541
setValue @ 4011-StateManager.js:419
setValue @ 4011-Section03.js:212
setFieldValue @ 4011-Section03.js:450
(anonymous) @ 4011-Section03.js:2213
(anonymous) @ 4011-StateManager.js:543
notifyListeners @ 4011-StateManager.js:541
setValue @ 4011-StateManager.js:419
(anonymous) @ 4011-Section03.js:1689
calculateTargetModel @ 4011-Section03.js:1686
calculateAll @ 4011-Section03.js:1665
(anonymous) @ 4011-Section03.js:2057
4011-Section15.js:1750 [S15] 🎯 TGT S03 CLIMATE READ: h_23=18, d_23=-24, d_24=30, h_24=24
4011-StateManager.js:343 [StateManager] 🎯 h_10 setValue: "93.64289129335538" (state: calculated)
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
calculateCoolingSystem @ 4011-Section13.js:3033
calculateTargetModel @ 4011-Section13.js:3563
calculateAll @ 4011-Section13.js:3406
calculateAndRefresh @ 4011-Section13.js:2368
(anonymous) @ 4011-Section13.js:2399
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
(anonymous) @ 4011-Section10.js:2679
(anonymous) @ 4011-StateManager.js:543
notifyListeners @ 4011-StateManager.js:541
setValue @ 4011-StateManager.js:419
(anonymous) @ 4011-Section13.js:3765
storeReferenceResults @ 4011-Section13.js:3757
calculateReferenceModel @ 4011-Section13.js:3504
calculateAll @ 4011-Section13.js:3402
calculateAndRefresh @ 4011-Section13.js:2368
(anonymous) @ 4011-StateManager.js:543
notifyListeners @ 4011-StateManager.js:541
setValue @ 4011-StateManager.js:419
setValue @ 4011-Section10.js:230
calculateSubtotals @ 4011-Section10.js:2251
calculateTargetModel @ 4011-Section10.js:1847
calculateAll @ 4011-Section10.js:1824
(anonymous) @ 4011-Section10.js:2670
(anonymous) @ 4011-StateManager.js:543
notifyListeners @ 4011-StateManager.js:541
setValue @ 4011-StateManager.js:419
setValue @ 4011-Section03.js:212
setFieldValue @ 4011-Section03.js:450
(anonymous) @ 4011-Section03.js:2213
(anonymous) @ 4011-StateManager.js:543
notifyListeners @ 4011-StateManager.js:541
setValue @ 4011-StateManager.js:419
(anonymous) @ 4011-Section03.js:1689
calculateTargetModel @ 4011-Section03.js:1686
calculateAll @ 4011-Section03.js:1665
(anonymous) @ 4011-Section03.js:2057
4011-Section15.js:1750 [S15] 🎯 TGT S03 CLIMATE READ: h_23=18, d_23=-24, d_24=30, h_24=24
4011-StateManager.js:343 [StateManager] 🎯 h_10 setValue: "93.64289129335538" (state: calculated)
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
calculateCoolingSystem @ 4011-Section13.js:3033
calculateTargetModel @ 4011-Section13.js:3563
calculateAll @ 4011-Section13.js:3406
calculateAndRefresh @ 4011-Section13.js:2368
(anonymous) @ 4011-Section13.js:2399
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
(anonymous) @ 4011-Section10.js:2679
(anonymous) @ 4011-StateManager.js:543
notifyListeners @ 4011-StateManager.js:541
setValue @ 4011-StateManager.js:419
(anonymous) @ 4011-Section13.js:3765
storeReferenceResults @ 4011-Section13.js:3757
calculateReferenceModel @ 4011-Section13.js:3504
calculateAll @ 4011-Section13.js:3402
calculateAndRefresh @ 4011-Section13.js:2368
(anonymous) @ 4011-StateManager.js:543
notifyListeners @ 4011-StateManager.js:541
setValue @ 4011-StateManager.js:419
setValue @ 4011-Section10.js:230
calculateSubtotals @ 4011-Section10.js:2251
calculateTargetModel @ 4011-Section10.js:1847
calculateAll @ 4011-Section10.js:1824
(anonymous) @ 4011-Section10.js:2670
(anonymous) @ 4011-StateManager.js:543
notifyListeners @ 4011-StateManager.js:541
setValue @ 4011-StateManager.js:419
setValue @ 4011-Section03.js:212
setFieldValue @ 4011-Section03.js:450
(anonymous) @ 4011-Section03.js:2213
(anonymous) @ 4011-StateManager.js:543
notifyListeners @ 4011-StateManager.js:541
setValue @ 4011-StateManager.js:419
(anonymous) @ 4011-Section03.js:1689
calculateTargetModel @ 4011-Section03.js:1686
calculateAll @ 4011-Section03.js:1665
(anonymous) @ 4011-Section03.js:2057
4011-Section04.js:1018 [S04] Row 32 Subtotals - F32: 132938, G32: 6779.838, J32: 347966.051518286, K32: 17746.268627432586
4011-Section04.js:1668 [S04] Reference model calculations complete
4011-Section04.js:1674 [S04DB] storeReference: ref_j_32=347966.051518286, ref_k_32=17746.268627432586 | current target j_32=133647.1344538768, k_32=6816.003857147716
4011-Section04.js:493 [S04] 🔄 Updating calculated display values for target mode
4011-Section04.js:501 [S04DB] displayContext mode=target j_32=133647.1344538768 ref_j_32=347966.051518286 k_32=6816.003857147716 ref_k_32=17746.268627432586
4011-Section04.js:582 [S04 DEBUG] Target mode - j_32: 133647.1344538768
4011-Section04.js:582 [S04 DEBUG] Target mode - k_32: 6816.003857147716
4011-Section04.js:582 [S04 DEBUG] Target mode - l_27: 51
4011-Section04.js:617 [S04] Calculated display values updated for target mode
4011-Section04.js:1599 [S04] Dual-engine calculations completed successfully
4011-Section04.js:493 [S04] 🔄 Updating calculated display values for target mode
4011-Section04.js:501 [S04DB] displayContext mode=target j_32=133647.1344538768 ref_j_32=347966.051518286 k_32=6816.003857147716 ref_k_32=17746.268627432586
4011-Section04.js:582 [S04 DEBUG] Target mode - j_32: 133647.1344538768
4011-Section04.js:582 [S04 DEBUG] Target mode - k_32: 6816.003857147716
4011-Section04.js:582 [S04 DEBUG] Target mode - l_27: 51
4011-Section04.js:617 [S04] Calculated display values updated for target mode
4011-StateManager.js:343 [StateManager] 🎯 h_10 setValue: "93.64289129335538" (state: calculated)
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
calculateCoolingSystem @ 4011-Section13.js:3033
calculateTargetModel @ 4011-Section13.js:3563
calculateAll @ 4011-Section13.js:3406
calculateAndRefresh @ 4011-Section13.js:2368
(anonymous) @ 4011-Section13.js:2399
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
(anonymous) @ 4011-Section10.js:2679
(anonymous) @ 4011-StateManager.js:543
notifyListeners @ 4011-StateManager.js:541
setValue @ 4011-StateManager.js:419
(anonymous) @ 4011-Section13.js:3765
storeReferenceResults @ 4011-Section13.js:3757
calculateReferenceModel @ 4011-Section13.js:3504
calculateAll @ 4011-Section13.js:3402
calculateAndRefresh @ 4011-Section13.js:2368
(anonymous) @ 4011-StateManager.js:543
notifyListeners @ 4011-StateManager.js:541
setValue @ 4011-StateManager.js:419
setValue @ 4011-Section10.js:230
calculateSubtotals @ 4011-Section10.js:2251
calculateTargetModel @ 4011-Section10.js:1847
calculateAll @ 4011-Section10.js:1824
(anonymous) @ 4011-Section10.js:2670
(anonymous) @ 4011-StateManager.js:543
notifyListeners @ 4011-StateManager.js:541
setValue @ 4011-StateManager.js:419
setValue @ 4011-Section03.js:212
setFieldValue @ 4011-Section03.js:450
(anonymous) @ 4011-Section03.js:2213
(anonymous) @ 4011-StateManager.js:543
notifyListeners @ 4011-StateManager.js:541
setValue @ 4011-StateManager.js:419
(anonymous) @ 4011-Section03.js:1689
calculateTargetModel @ 4011-Section03.js:1686
calculateAll @ 4011-Section03.js:1665
(anonymous) @ 4011-Section03.js:2057
4011-Section15.js:1750 [S15] 🎯 TGT S03 CLIMATE READ: h_23=18, d_23=-24, d_24=30, h_24=24
4011-StateManager.js:343 [StateManager] 🎯 h_10 setValue: "93.64289129335538" (state: calculated)
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
calculateCoolingSystem @ 4011-Section13.js:3033
calculateTargetModel @ 4011-Section13.js:3563
calculateAll @ 4011-Section13.js:3406
calculateAndRefresh @ 4011-Section13.js:2368
(anonymous) @ 4011-Section13.js:2399
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
(anonymous) @ 4011-Section10.js:2679
(anonymous) @ 4011-StateManager.js:543
notifyListeners @ 4011-StateManager.js:541
setValue @ 4011-StateManager.js:419
(anonymous) @ 4011-Section13.js:3765
storeReferenceResults @ 4011-Section13.js:3757
calculateReferenceModel @ 4011-Section13.js:3504
calculateAll @ 4011-Section13.js:3402
calculateAndRefresh @ 4011-Section13.js:2368
(anonymous) @ 4011-StateManager.js:543
notifyListeners @ 4011-StateManager.js:541
setValue @ 4011-StateManager.js:419
setValue @ 4011-Section10.js:230
calculateSubtotals @ 4011-Section10.js:2251
calculateTargetModel @ 4011-Section10.js:1847
calculateAll @ 4011-Section10.js:1824
(anonymous) @ 4011-Section10.js:2670
(anonymous) @ 4011-StateManager.js:543
notifyListeners @ 4011-StateManager.js:541
setValue @ 4011-StateManager.js:419
setValue @ 4011-Section03.js:212
setFieldValue @ 4011-Section03.js:450
(anonymous) @ 4011-Section03.js:2213
(anonymous) @ 4011-StateManager.js:543
notifyListeners @ 4011-StateManager.js:541
setValue @ 4011-StateManager.js:419
(anonymous) @ 4011-Section03.js:1689
calculateTargetModel @ 4011-Section03.js:1686
calculateAll @ 4011-Section03.js:1665
(anonymous) @ 4011-Section03.js:2057
4011-Section13.js:3039 [Section13] 🧊 COOLING RESULTS: d_117=3899.589530222073, j_116=2.663540445486518, l_116=0, l_114=6487.124904320189
4011-Section14.js:1416 [S14 LISTENER] 🔥 d_122 changed - triggering calculateAll() + UI update
4011-Section13.js:2395 [Section13] 📡 🔥 d_127 (TED) listener triggered - S14 energy demand changed!
4011-Section13.js:3389 [Section13] 🚀 CALCULATEALL TRIGGERED - Running dual-engine calculations...
4011-Section13.js:3395 [Section13] 🎯 Mode captured at calculation start: target
4011-Section13.js:3401 [Section13] 🔄 Starting Reference Model calculations...
4011-Section13.js:721 🔍 [S13-CONTEXT] Creating reference context: g_118="Volume Constant" from ReferenceState
4011-Section13.js:723 🔍 [S13-CONTEXT] ReferenceState.g_118="Volume Constant", TargetState.g_118="Volume by Schedule"
4011-Section13.js:3457 [Section13] Running Reference Model calculations...
4011-Section13.js:3471 [S13 CONTAMINATION DEBUG] calculateReferenceModel: Using system type = Electricity
4011-Section13.js:2873 [S13] REF HEATING: system=Electricity, ted=297371.1974742337, afue=0.9, cop=1
4011-Section13.js:2879 [S13 REF DEBUG] About to calculate with heating system: Electricity
4011-Section13.js:2882 [S13 REF DEBUG] Will S13 publish ref_d_113=Electricity?
4011-Section13.js:3099 🔍 [S13-VENT] calculateVentilationRates: ventMethod="Volume Constant", ach(l_118)=3.5, ratePerPerson(d_119)=8.33, volume(d_105)=8000
4011-Section13.js:3102 🔍 [S13-VENT] isReferenceCalculation=true, hasContext=true
4011-Section13.js:3110 🔍 [S13-VENT] calculateVentilationValues: ventMethod="Volume Constant", ach(l_118)=3.5, ratePerPerson(d_119)=8.33, volume(d_105)=8000
4011-Section13.js:3113 🔍 [S13-VENT] Supporting values: occupants(d_63)=126, occupiedHours(i_63)=4380, totalHours(j_63)=8760
4011-Section13.js:3133 🔍 [S13-VENT] Volume Constant calculation: ventRateLs = (3.5 * 8000) / 3.6 = 7777.777777777777
4011-Section13.js:3145 ✅ [S13-VENT] Final d_120 result: 7777.777777777777 L/s (from method="Volume Constant", ach=3.5, volume=8000)
4011-Section13.js:2977 [Section13] 🧊 COOLING CALC: mode=REF, coolingSystemType="No Cooling", heatingType="Electricity", isCoolingActive=false, coolingDemand=10386.714434542262
4011-Section13.js:3737 [S13 CONTAMINATION DEBUG] storeReferenceResults called during reference mode
4011-Section13.js:3740 [S13 CONTAMINATION DEBUG] Reference heating system: Electricity
4011-Section13.js:3743 [S13 CONTAMINATION DEBUG] Target heating system: Heatpump
4011-Section13.js:3746 [S13 CONTAMINATION DEBUG] Reference h_115 (gas volume): 0
4011-Section13.js:3749 [S13 CONTAMINATION DEBUG] Reference f_115 (oil volume): 0
4011-Section13.js:3761 [S13 CONTAMINATION DEBUG] Writing ref_f_115 = 0
4011-Section13.js:3761 [S13 CONTAMINATION DEBUG] Writing ref_h_115 = 0
4011-Section13.js:3773 [Section13] Reference results stored with ref_ prefix for downstream sections
4011-Section13.js:3776 [S13 DEBUG] Total Reference results stored: 34
4011-Section13.js:3515 [Section13] Reference Model calculations complete
4011-Section13.js:3403 [Section13] ✅ Reference Model complete
4011-Section13.js:3405 [Section13] 🔄 Starting Target Model calculations...
4011-Section13.js:721 🔍 [S13-CONTEXT] Creating target context: g_118="Volume by Schedule" from TargetState
4011-Section13.js:725 🔍 [S13-CONTEXT] TargetState.g_118="Volume by Schedule", ReferenceState.g_118="Volume Constant"
4011-Section13.js:3536 [Section13] Running Target Model calculations...
4011-Section13.js:2873 [S13] TGT HEATING: system=Heatpump, ted=147391.80728166597, afue=0.98, cop=3.663540445486518
4011-Section13.js:3099 🔍 [S13-VENT] calculateVentilationRates: ventMethod="Volume by Schedule", ach(l_118)=3, ratePerPerson(d_119)=14, volume(d_105)=8000
4011-Section13.js:3102 🔍 [S13-VENT] isReferenceCalculation=false, hasContext=true
4011-Section13.js:3110 🔍 [S13-VENT] calculateVentilationValues: ventMethod="Volume by Schedule", ach(l_118)=3, ratePerPerson(d_119)=14, volume(d_105)=8000
4011-Section13.js:3113 🔍 [S13-VENT] Supporting values: occupants(d_63)=126, occupiedHours(i_63)=4380, totalHours(j_63)=8760
4011-Section13.js:3145 ✅ [S13-VENT] Final d_120 result: 3333.333333333333 L/s (from method="Volume by Schedule", ach=3, volume=8000)
24011-Section14.js:1416 [S14 LISTENER] 🔥 d_122 changed - triggering calculateAll() + UI update
4011-Section15.js:1750 [S15] 🎯 TGT S03 CLIMATE READ: h_23=18, d_23=-24, d_24=30, h_24=24
4011-StateManager.js:343 [StateManager] 🎯 h_10 setValue: "93.64289129335538" (state: calculated)
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
calculateCoolingVentilation @ 4011-Section13.js:3275
calculateTargetModel @ 4011-Section13.js:3556
calculateAll @ 4011-Section13.js:3406
calculateAndRefresh @ 4011-Section13.js:2368
(anonymous) @ 4011-Section13.js:2399
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
setFieldValue @ 4011-Section13.js:636
calculateCoolingVentilation @ 4011-Section13.js:3275
calculateCoolingSystem @ 4011-Section13.js:3043
calculateTargetModel @ 4011-Section13.js:3563
calculateAll @ 4011-Section13.js:3406
calculateAndRefresh @ 4011-Section13.js:2368
(anonymous) @ 4011-Section13.js:2399
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
(anonymous) @ 4011-Section10.js:2679
(anonymous) @ 4011-StateManager.js:543
notifyListeners @ 4011-StateManager.js:541
setValue @ 4011-StateManager.js:419
(anonymous) @ 4011-Section13.js:3765
storeReferenceResults @ 4011-Section13.js:3757
calculateReferenceModel @ 4011-Section13.js:3504
calculateAll @ 4011-Section13.js:3402
calculateAndRefresh @ 4011-Section13.js:2368
(anonymous) @ 4011-StateManager.js:543
notifyListeners @ 4011-StateManager.js:541
setValue @ 4011-StateManager.js:419
setValue @ 4011-Section10.js:230
calculateSubtotals @ 4011-Section10.js:2251
calculateTargetModel @ 4011-Section10.js:1847
calculateAll @ 4011-Section10.js:1824
(anonymous) @ 4011-Section10.js:2670
(anonymous) @ 4011-StateManager.js:543
notifyListeners @ 4011-StateManager.js:541
setValue @ 4011-StateManager.js:419
setValue @ 4011-Section03.js:212
setFieldValue @ 4011-Section03.js:450
(anonymous) @ 4011-Section03.js:2213
(anonymous) @ 4011-StateManager.js:543
notifyListeners @ 4011-StateManager.js:541
setValue @ 4011-StateManager.js:419
(anonymous) @ 4011-Section03.js:1689
calculateTargetModel @ 4011-Section03.js:1686
calculateAll @ 4011-Section03.js:1665
(anonymous) @ 4011-Section03.js:2057
4011-Section15.js:1750 [S15] 🎯 TGT S03 CLIMATE READ: h_23=18, d_23=-24, d_24=30, h_24=24
4011-StateManager.js:343 [StateManager] 🎯 h_10 setValue: "93.64289129335538" (state: calculated)
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
calculateCoolingVentilation @ 4011-Section13.js:3275
calculateTargetModel @ 4011-Section13.js:3556
calculateAll @ 4011-Section13.js:3406
calculateAndRefresh @ 4011-Section13.js:2368
(anonymous) @ 4011-Section13.js:2399
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
setFieldValue @ 4011-Section13.js:636
calculateCoolingVentilation @ 4011-Section13.js:3275
calculateCoolingSystem @ 4011-Section13.js:3043
calculateTargetModel @ 4011-Section13.js:3563
calculateAll @ 4011-Section13.js:3406
calculateAndRefresh @ 4011-Section13.js:2368
(anonymous) @ 4011-Section13.js:2399
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
(anonymous) @ 4011-Section10.js:2679
(anonymous) @ 4011-StateManager.js:543
notifyListeners @ 4011-StateManager.js:541
setValue @ 4011-StateManager.js:419
(anonymous) @ 4011-Section13.js:3765
storeReferenceResults @ 4011-Section13.js:3757
calculateReferenceModel @ 4011-Section13.js:3504
calculateAll @ 4011-Section13.js:3402
calculateAndRefresh @ 4011-Section13.js:2368
(anonymous) @ 4011-StateManager.js:543
notifyListeners @ 4011-StateManager.js:541
setValue @ 4011-StateManager.js:419
setValue @ 4011-Section10.js:230
calculateSubtotals @ 4011-Section10.js:2251
calculateTargetModel @ 4011-Section10.js:1847
calculateAll @ 4011-Section10.js:1824
(anonymous) @ 4011-Section10.js:2670
(anonymous) @ 4011-StateManager.js:543
notifyListeners @ 4011-StateManager.js:541
setValue @ 4011-StateManager.js:419
setValue @ 4011-Section03.js:212
setFieldValue @ 4011-Section03.js:450
(anonymous) @ 4011-Section03.js:2213
(anonymous) @ 4011-StateManager.js:543
notifyListeners @ 4011-StateManager.js:541
setValue @ 4011-StateManager.js:419
(anonymous) @ 4011-Section03.js:1689
calculateTargetModel @ 4011-Section03.js:1686
calculateAll @ 4011-Section03.js:1665
(anonymous) @ 4011-Section03.js:2057
4011-Section13.js:2977 [Section13] 🧊 COOLING CALC: mode=TGT, coolingSystemType="Cooling", heatingType="Heatpump", isCoolingActive=true, coolingDemand=10386.714434542262
4011-Section13.js:3039 [Section13] 🧊 COOLING RESULTS: d_117=3899.589530222073, j_116=2.663540445486518, l_116=0, l_114=6487.124904320189
24011-Section14.js:1416 [S14 LISTENER] 🔥 d_122 changed - triggering calculateAll() + UI update
4011-Section15.js:1750 [S15] 🎯 TGT S03 CLIMATE READ: h_23=18, d_23=-24, d_24=30, h_24=24
4011-StateManager.js:343 [StateManager] 🎯 h_10 setValue: "93.64289129335538" (state: calculated)
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
calculateCoolingVentilation @ 4011-Section13.js:3275
calculateCoolingSystem @ 4011-Section13.js:3043
calculateTargetModel @ 4011-Section13.js:3563
calculateAll @ 4011-Section13.js:3406
calculateAndRefresh @ 4011-Section13.js:2368
(anonymous) @ 4011-Section13.js:2399
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
setFieldValue @ 4011-Section13.js:636
calculateCoolingVentilation @ 4011-Section13.js:3275
calculateCoolingSystem @ 4011-Section13.js:3043
calculateTargetModel @ 4011-Section13.js:3563
calculateAll @ 4011-Section13.js:3406
calculateAndRefresh @ 4011-Section13.js:2368
(anonymous) @ 4011-Section13.js:2399
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
(anonymous) @ 4011-Section10.js:2679
(anonymous) @ 4011-StateManager.js:543
notifyListeners @ 4011-StateManager.js:541
setValue @ 4011-StateManager.js:419
(anonymous) @ 4011-Section13.js:3765
storeReferenceResults @ 4011-Section13.js:3757
calculateReferenceModel @ 4011-Section13.js:3504
calculateAll @ 4011-Section13.js:3402
calculateAndRefresh @ 4011-Section13.js:2368
(anonymous) @ 4011-StateManager.js:543
notifyListeners @ 4011-StateManager.js:541
setValue @ 4011-StateManager.js:419
setValue @ 4011-Section10.js:230
calculateSubtotals @ 4011-Section10.js:2251
calculateTargetModel @ 4011-Section10.js:1847
calculateAll @ 4011-Section10.js:1824
(anonymous) @ 4011-Section10.js:2670
(anonymous) @ 4011-StateManager.js:543
notifyListeners @ 4011-StateManager.js:541
setValue @ 4011-StateManager.js:419
setValue @ 4011-Section03.js:212
setFieldValue @ 4011-Section03.js:450
(anonymous) @ 4011-Section03.js:2213
(anonymous) @ 4011-StateManager.js:543
notifyListeners @ 4011-StateManager.js:541
setValue @ 4011-StateManager.js:419
(anonymous) @ 4011-Section03.js:1689
calculateTargetModel @ 4011-Section03.js:1686
calculateAll @ 4011-Section03.js:1665
(anonymous) @ 4011-Section03.js:2057
4011-Section15.js:1750 [S15] 🎯 TGT S03 CLIMATE READ: h_23=18, d_23=-24, d_24=30, h_24=24
4011-StateManager.js:343 [StateManager] 🎯 h_10 setValue: "93.64289129335538" (state: calculated)
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
calculateCoolingVentilation @ 4011-Section13.js:3275
calculateCoolingSystem @ 4011-Section13.js:3043
calculateTargetModel @ 4011-Section13.js:3563
calculateAll @ 4011-Section13.js:3406
calculateAndRefresh @ 4011-Section13.js:2368
(anonymous) @ 4011-Section13.js:2399
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
setFieldValue @ 4011-Section13.js:636
calculateCoolingVentilation @ 4011-Section13.js:3275
calculateCoolingSystem @ 4011-Section13.js:3043
calculateTargetModel @ 4011-Section13.js:3563
calculateAll @ 4011-Section13.js:3406
calculateAndRefresh @ 4011-Section13.js:2368
(anonymous) @ 4011-Section13.js:2399
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
(anonymous) @ 4011-Section10.js:2679
(anonymous) @ 4011-StateManager.js:543
notifyListeners @ 4011-StateManager.js:541
setValue @ 4011-StateManager.js:419
(anonymous) @ 4011-Section13.js:3765
storeReferenceResults @ 4011-Section13.js:3757
calculateReferenceModel @ 4011-Section13.js:3504
calculateAll @ 4011-Section13.js:3402
calculateAndRefresh @ 4011-Section13.js:2368
(anonymous) @ 4011-StateManager.js:543
notifyListeners @ 4011-StateManager.js:541
setValue @ 4011-StateManager.js:419
setValue @ 4011-Section10.js:230
calculateSubtotals @ 4011-Section10.js:2251
calculateTargetModel @ 4011-Section10.js:1847
calculateAll @ 4011-Section10.js:1824
(anonymous) @ 4011-Section10.js:2670
(anonymous) @ 4011-StateManager.js:543
notifyListeners @ 4011-StateManager.js:541
setValue @ 4011-StateManager.js:419
setValue @ 4011-Section03.js:212
setFieldValue @ 4011-Section03.js:450
(anonymous) @ 4011-Section03.js:2213
(anonymous) @ 4011-StateManager.js:543
notifyListeners @ 4011-StateManager.js:541
setValue @ 4011-StateManager.js:419
(anonymous) @ 4011-Section03.js:1689
calculateTargetModel @ 4011-Section03.js:1686
calculateAll @ 4011-Section03.js:1665
(anonymous) @ 4011-Section03.js:2057
4011-Section15.js:1750 [S15] 🎯 TGT S03 CLIMATE READ: h_23=18, d_23=-24, d_24=30, h_24=24
4011-Section04.js:2482 [S04] S15 target electricity changed: d_136
4011-Section04.js:1577 [S04] Starting dual-engine Excel-compliant calculations
4011-Section04.js:1018 [S04] Row 32 Subtotals - F32: 132938, G32: 6779.838, J32: 141350.1372458256, K32: 7208.856999537105
4011-Section04.js:94 [S04] j_32 update: 141350.1372458256
4011-Section01.js:1250 [S01] j_32 listener: 133647.1344538768 → 141350.1372458256
4011-Section01.js:1251 [S01] 🕐 j_32 listener timing: StateManager current j_32 = 141350.1372458256
24011-Section05.js:266 🔄 [S05] updateCalculatedDisplayValues: mode=target
4011-Section15.js:1750 [S15] 🎯 TGT S03 CLIMATE READ: h_23=18, d_23=-24, d_24=30, h_24=24
4011-StateManager.js:343 [StateManager] 🎯 h_10 setValue: "99.04017463973207" (state: calculated)
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
updateTargetModelDOMValues @ 4011-Section13.js:3617
calculateTargetModel @ 4011-Section13.js:3573
calculateAll @ 4011-Section13.js:3406
calculateAndRefresh @ 4011-Section13.js:2368
(anonymous) @ 4011-Section13.js:2399
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
setFieldValue @ 4011-Section13.js:636
calculateCoolingVentilation @ 4011-Section13.js:3275
calculateCoolingSystem @ 4011-Section13.js:3043
calculateTargetModel @ 4011-Section13.js:3563
calculateAll @ 4011-Section13.js:3406
calculateAndRefresh @ 4011-Section13.js:2368
(anonymous) @ 4011-Section13.js:2399
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
(anonymous) @ 4011-Section10.js:2679
(anonymous) @ 4011-StateManager.js:543
notifyListeners @ 4011-StateManager.js:541
setValue @ 4011-StateManager.js:419
(anonymous) @ 4011-Section13.js:3765
storeReferenceResults @ 4011-Section13.js:3757
calculateReferenceModel @ 4011-Section13.js:3504
calculateAll @ 4011-Section13.js:3402
calculateAndRefresh @ 4011-Section13.js:2368
(anonymous) @ 4011-StateManager.js:543
notifyListeners @ 4011-StateManager.js:541
setValue @ 4011-StateManager.js:419
setValue @ 4011-Section10.js:230
calculateSubtotals @ 4011-Section10.js:2251
calculateTargetModel @ 4011-Section10.js:1847
calculateAll @ 4011-Section10.js:1824
(anonymous) @ 4011-Section10.js:2670
(anonymous) @ 4011-StateManager.js:543
notifyListeners @ 4011-StateManager.js:541
setValue @ 4011-StateManager.js:419
setValue @ 4011-Section03.js:212
setFieldValue @ 4011-Section03.js:450
(anonymous) @ 4011-Section03.js:2213
(anonymous) @ 4011-StateManager.js:543
notifyListeners @ 4011-StateManager.js:541
setValue @ 4011-StateManager.js:419
(anonymous) @ 4011-Section03.js:1689
calculateTargetModel @ 4011-Section03.js:1686
calculateAll @ 4011-Section03.js:1665
(anonymous) @ 4011-Section03.js:2057
4011-Section15.js:1750 [S15] 🎯 TGT S03 CLIMATE READ: h_23=18, d_23=-24, d_24=30, h_24=24
4011-StateManager.js:343 [StateManager] 🎯 h_10 setValue: "99.04017463973207" (state: calculated)
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
updateTargetModelDOMValues @ 4011-Section13.js:3617
calculateTargetModel @ 4011-Section13.js:3573
calculateAll @ 4011-Section13.js:3406
calculateAndRefresh @ 4011-Section13.js:2368
(anonymous) @ 4011-Section13.js:2399
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
setFieldValue @ 4011-Section13.js:636
calculateCoolingVentilation @ 4011-Section13.js:3275
calculateCoolingSystem @ 4011-Section13.js:3043
calculateTargetModel @ 4011-Section13.js:3563
calculateAll @ 4011-Section13.js:3406
calculateAndRefresh @ 4011-Section13.js:2368
(anonymous) @ 4011-Section13.js:2399
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
(anonymous) @ 4011-Section10.js:2679
(anonymous) @ 4011-StateManager.js:543
notifyListeners @ 4011-StateManager.js:541
setValue @ 4011-StateManager.js:419
(anonymous) @ 4011-Section13.js:3765
storeReferenceResults @ 4011-Section13.js:3757
calculateReferenceModel @ 4011-Section13.js:3504
calculateAll @ 4011-Section13.js:3402
calculateAndRefresh @ 4011-Section13.js:2368
(anonymous) @ 4011-StateManager.js:543
notifyListeners @ 4011-StateManager.js:541
setValue @ 4011-StateManager.js:419
setValue @ 4011-Section10.js:230
calculateSubtotals @ 4011-Section10.js:2251
calculateTargetModel @ 4011-Section10.js:1847
calculateAll @ 4011-Section10.js:1824
(anonymous) @ 4011-Section10.js:2670
(anonymous) @ 4011-StateManager.js:543
notifyListeners @ 4011-StateManager.js:541
setValue @ 4011-StateManager.js:419
setValue @ 4011-Section03.js:212
setFieldValue @ 4011-Section03.js:450
(anonymous) @ 4011-Section03.js:2213
(anonymous) @ 4011-StateManager.js:543
notifyListeners @ 4011-StateManager.js:541
setValue @ 4011-StateManager.js:419
(anonymous) @ 4011-Section03.js:1689
calculateTargetModel @ 4011-Section03.js:1686
calculateAll @ 4011-Section03.js:1665
(anonymous) @ 4011-Section03.js:2057
4011-Section15.js:1750 [S15] 🎯 TGT S03 CLIMATE READ: h_23=18, d_23=-24, d_24=30, h_24=24
4011-StateManager.js:343 [StateManager] 🎯 h_10 setValue: "99.04017463973207" (state: calculated)
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
updateTargetModelDOMValues @ 4011-Section13.js:3617
calculateTargetModel @ 4011-Section13.js:3573
calculateAll @ 4011-Section13.js:3406
calculateAndRefresh @ 4011-Section13.js:2368
(anonymous) @ 4011-Section13.js:2399
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
setFieldValue @ 4011-Section13.js:636
calculateCoolingVentilation @ 4011-Section13.js:3275
calculateCoolingSystem @ 4011-Section13.js:3043
calculateTargetModel @ 4011-Section13.js:3563
calculateAll @ 4011-Section13.js:3406
calculateAndRefresh @ 4011-Section13.js:2368
(anonymous) @ 4011-Section13.js:2399
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
(anonymous) @ 4011-Section10.js:2679
(anonymous) @ 4011-StateManager.js:543
notifyListeners @ 4011-StateManager.js:541
setValue @ 4011-StateManager.js:419
(anonymous) @ 4011-Section13.js:3765
storeReferenceResults @ 4011-Section13.js:3757
calculateReferenceModel @ 4011-Section13.js:3504
calculateAll @ 4011-Section13.js:3402
calculateAndRefresh @ 4011-Section13.js:2368
(anonymous) @ 4011-StateManager.js:543
notifyListeners @ 4011-StateManager.js:541
setValue @ 4011-StateManager.js:419
setValue @ 4011-Section10.js:230
calculateSubtotals @ 4011-Section10.js:2251
calculateTargetModel @ 4011-Section10.js:1847
calculateAll @ 4011-Section10.js:1824
(anonymous) @ 4011-Section10.js:2670
(anonymous) @ 4011-StateManager.js:543
notifyListeners @ 4011-StateManager.js:541
setValue @ 4011-StateManager.js:419
setValue @ 4011-Section03.js:212
setFieldValue @ 4011-Section03.js:450
(anonymous) @ 4011-Section03.js:2213
(anonymous) @ 4011-StateManager.js:543
notifyListeners @ 4011-StateManager.js:541
setValue @ 4011-StateManager.js:419
(anonymous) @ 4011-Section03.js:1689
calculateTargetModel @ 4011-Section03.js:1686
calculateAll @ 4011-Section03.js:1665
(anonymous) @ 4011-Section03.js:2057
4011-Section15.js:1750 [S15] 🎯 TGT S03 CLIMATE READ: h_23=18, d_23=-24, d_24=30, h_24=24
4011-StateManager.js:343 [StateManager] 🎯 h_10 setValue: "99.04017463973207" (state: calculated)
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
updateTargetModelDOMValues @ 4011-Section13.js:3617
calculateTargetModel @ 4011-Section13.js:3573
calculateAll @ 4011-Section13.js:3406
calculateAndRefresh @ 4011-Section13.js:2368
(anonymous) @ 4011-Section13.js:2399
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
setFieldValue @ 4011-Section13.js:636
calculateCoolingVentilation @ 4011-Section13.js:3275
calculateCoolingSystem @ 4011-Section13.js:3043
calculateTargetModel @ 4011-Section13.js:3563
calculateAll @ 4011-Section13.js:3406
calculateAndRefresh @ 4011-Section13.js:2368
(anonymous) @ 4011-Section13.js:2399
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
(anonymous) @ 4011-Section10.js:2679
(anonymous) @ 4011-StateManager.js:543
notifyListeners @ 4011-StateManager.js:541
setValue @ 4011-StateManager.js:419
(anonymous) @ 4011-Section13.js:3765
storeReferenceResults @ 4011-Section13.js:3757
calculateReferenceModel @ 4011-Section13.js:3504
calculateAll @ 4011-Section13.js:3402
calculateAndRefresh @ 4011-Section13.js:2368
(anonymous) @ 4011-StateManager.js:543
notifyListeners @ 4011-StateManager.js:541
setValue @ 4011-StateManager.js:419
setValue @ 4011-Section10.js:230
calculateSubtotals @ 4011-Section10.js:2251
calculateTargetModel @ 4011-Section10.js:1847
calculateAll @ 4011-Section10.js:1824
(anonymous) @ 4011-Section10.js:2670
(anonymous) @ 4011-StateManager.js:543
notifyListeners @ 4011-StateManager.js:541
setValue @ 4011-StateManager.js:419
setValue @ 4011-Section03.js:212
setFieldValue @ 4011-Section03.js:450
(anonymous) @ 4011-Section03.js:2213
(anonymous) @ 4011-StateManager.js:543
notifyListeners @ 4011-StateManager.js:541
setValue @ 4011-StateManager.js:419
(anonymous) @ 4011-Section03.js:1689
calculateTargetModel @ 4011-Section03.js:1686
calculateAll @ 4011-Section03.js:1665
(anonymous) @ 4011-Section03.js:2057
4011-Section04.js:1018 [S04] Row 32 Subtotals - F32: 132938, G32: 6779.838, J32: 347966.051518286, K32: 17746.268627432586
4011-Section04.js:1668 [S04] Reference model calculations complete
4011-Section04.js:1674 [S04DB] storeReference: ref_j_32=347966.051518286, ref_k_32=17746.268627432586 | current target j_32=141350.1372458256, k_32=7208.856999537105
4011-Section04.js:493 [S04] 🔄 Updating calculated display values for target mode
4011-Section04.js:501 [S04DB] displayContext mode=target j_32=141350.1372458256 ref_j_32=347966.051518286 k_32=7208.856999537105 ref_k_32=17746.268627432586
4011-Section04.js:582 [S04 DEBUG] Target mode - j_32: 141350.1372458256
4011-Section04.js:582 [S04 DEBUG] Target mode - k_32: 7208.856999537105
4011-Section04.js:582 [S04 DEBUG] Target mode - l_27: 51
4011-Section04.js:617 [S04] Calculated display values updated for target mode
4011-Section04.js:1599 [S04] Dual-engine calculations completed successfully
4011-Section04.js:493 [S04] 🔄 Updating calculated display values for target mode
4011-Section04.js:501 [S04DB] displayContext mode=target j_32=141350.1372458256 ref_j_32=347966.051518286 k_32=7208.856999537105 ref_k_32=17746.268627432586
4011-Section04.js:582 [S04 DEBUG] Target mode - j_32: 141350.1372458256
4011-Section04.js:582 [S04 DEBUG] Target mode - k_32: 7208.856999537105
4011-Section04.js:582 [S04 DEBUG] Target mode - l_27: 51
4011-Section04.js:617 [S04] Calculated display values updated for target mode
4011-StateManager.js:343 [StateManager] 🎯 h_10 setValue: "99.04017463973207" (state: calculated)
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
updateTargetModelDOMValues @ 4011-Section13.js:3617
calculateTargetModel @ 4011-Section13.js:3573
calculateAll @ 4011-Section13.js:3406
calculateAndRefresh @ 4011-Section13.js:2368
(anonymous) @ 4011-Section13.js:2399
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
setFieldValue @ 4011-Section13.js:636
calculateCoolingVentilation @ 4011-Section13.js:3275
calculateCoolingSystem @ 4011-Section13.js:3043
calculateTargetModel @ 4011-Section13.js:3563
calculateAll @ 4011-Section13.js:3406
calculateAndRefresh @ 4011-Section13.js:2368
(anonymous) @ 4011-Section13.js:2399
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
(anonymous) @ 4011-Section10.js:2679
(anonymous) @ 4011-StateManager.js:543
notifyListeners @ 4011-StateManager.js:541
setValue @ 4011-StateManager.js:419
(anonymous) @ 4011-Section13.js:3765
storeReferenceResults @ 4011-Section13.js:3757
calculateReferenceModel @ 4011-Section13.js:3504
calculateAll @ 4011-Section13.js:3402
calculateAndRefresh @ 4011-Section13.js:2368
(anonymous) @ 4011-StateManager.js:543
notifyListeners @ 4011-StateManager.js:541
setValue @ 4011-StateManager.js:419
setValue @ 4011-Section10.js:230
calculateSubtotals @ 4011-Section10.js:2251
calculateTargetModel @ 4011-Section10.js:1847
calculateAll @ 4011-Section10.js:1824
(anonymous) @ 4011-Section10.js:2670
(anonymous) @ 4011-StateManager.js:543
notifyListeners @ 4011-StateManager.js:541
setValue @ 4011-StateManager.js:419
setValue @ 4011-Section03.js:212
setFieldValue @ 4011-Section03.js:450
(anonymous) @ 4011-Section03.js:2213
(anonymous) @ 4011-StateManager.js:543
notifyListeners @ 4011-StateManager.js:541
setValue @ 4011-StateManager.js:419
(anonymous) @ 4011-Section03.js:1689
calculateTargetModel @ 4011-Section03.js:1686
calculateAll @ 4011-Section03.js:1665
(anonymous) @ 4011-Section03.js:2057
4011-Section15.js:1750 [S15] 🎯 TGT S03 CLIMATE READ: h_23=18, d_23=-24, d_24=30, h_24=24
4011-StateManager.js:343 [StateManager] 🎯 h_10 setValue: "99.04017463973207" (state: calculated)
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
updateTargetModelDOMValues @ 4011-Section13.js:3617
calculateTargetModel @ 4011-Section13.js:3573
calculateAll @ 4011-Section13.js:3406
calculateAndRefresh @ 4011-Section13.js:2368
(anonymous) @ 4011-Section13.js:2399
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
setFieldValue @ 4011-Section13.js:636
calculateCoolingVentilation @ 4011-Section13.js:3275
calculateCoolingSystem @ 4011-Section13.js:3043
calculateTargetModel @ 4011-Section13.js:3563
calculateAll @ 4011-Section13.js:3406
calculateAndRefresh @ 4011-Section13.js:2368
(anonymous) @ 4011-Section13.js:2399
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
(anonymous) @ 4011-Section10.js:2679
(anonymous) @ 4011-StateManager.js:543
notifyListeners @ 4011-StateManager.js:541
setValue @ 4011-StateManager.js:419
(anonymous) @ 4011-Section13.js:3765
storeReferenceResults @ 4011-Section13.js:3757
calculateReferenceModel @ 4011-Section13.js:3504
calculateAll @ 4011-Section13.js:3402
calculateAndRefresh @ 4011-Section13.js:2368
(anonymous) @ 4011-StateManager.js:543
notifyListeners @ 4011-StateManager.js:541
setValue @ 4011-StateManager.js:419
setValue @ 4011-Section10.js:230
calculateSubtotals @ 4011-Section10.js:2251
calculateTargetModel @ 4011-Section10.js:1847
calculateAll @ 4011-Section10.js:1824
(anonymous) @ 4011-Section10.js:2670
(anonymous) @ 4011-StateManager.js:543
notifyListeners @ 4011-StateManager.js:541
setValue @ 4011-StateManager.js:419
setValue @ 4011-Section03.js:212
setFieldValue @ 4011-Section03.js:450
(anonymous) @ 4011-Section03.js:2213
(anonymous) @ 4011-StateManager.js:543
notifyListeners @ 4011-StateManager.js:541
setValue @ 4011-StateManager.js:419
(anonymous) @ 4011-Section03.js:1689
calculateTargetModel @ 4011-Section03.js:1686
calculateAll @ 4011-Section03.js:1665
(anonymous) @ 4011-Section03.js:2057
24011-Section14.js:1416 [S14 LISTENER] 🔥 d_122 changed - triggering calculateAll() + UI update
4011-Section15.js:1750 [S15] 🎯 TGT S03 CLIMATE READ: h_23=18, d_23=-24, d_24=30, h_24=24
4011-StateManager.js:343 [StateManager] 🎯 h_10 setValue: "99.04017463973207" (state: calculated)
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
updateTargetModelDOMValues @ 4011-Section13.js:3687
calculateTargetModel @ 4011-Section13.js:3573
calculateAll @ 4011-Section13.js:3406
calculateAndRefresh @ 4011-Section13.js:2368
(anonymous) @ 4011-Section13.js:2399
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
setFieldValue @ 4011-Section13.js:636
calculateCoolingVentilation @ 4011-Section13.js:3275
calculateCoolingSystem @ 4011-Section13.js:3043
calculateTargetModel @ 4011-Section13.js:3563
calculateAll @ 4011-Section13.js:3406
calculateAndRefresh @ 4011-Section13.js:2368
(anonymous) @ 4011-Section13.js:2399
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
(anonymous) @ 4011-Section10.js:2679
(anonymous) @ 4011-StateManager.js:543
notifyListeners @ 4011-StateManager.js:541
setValue @ 4011-StateManager.js:419
(anonymous) @ 4011-Section13.js:3765
storeReferenceResults @ 4011-Section13.js:3757
calculateReferenceModel @ 4011-Section13.js:3504
calculateAll @ 4011-Section13.js:3402
calculateAndRefresh @ 4011-Section13.js:2368
(anonymous) @ 4011-StateManager.js:543
notifyListeners @ 4011-StateManager.js:541
setValue @ 4011-StateManager.js:419
setValue @ 4011-Section10.js:230
calculateSubtotals @ 4011-Section10.js:2251
calculateTargetModel @ 4011-Section10.js:1847
calculateAll @ 4011-Section10.js:1824
(anonymous) @ 4011-Section10.js:2670
(anonymous) @ 4011-StateManager.js:543
notifyListeners @ 4011-StateManager.js:541
setValue @ 4011-StateManager.js:419
setValue @ 4011-Section03.js:212
setFieldValue @ 4011-Section03.js:450
(anonymous) @ 4011-Section03.js:2213
(anonymous) @ 4011-StateManager.js:543
notifyListeners @ 4011-StateManager.js:541
setValue @ 4011-StateManager.js:419
(anonymous) @ 4011-Section03.js:1689
calculateTargetModel @ 4011-Section03.js:1686
calculateAll @ 4011-Section03.js:1665
(anonymous) @ 4011-Section03.js:2057
4011-Section15.js:1750 [S15] 🎯 TGT S03 CLIMATE READ: h_23=18, d_23=-24, d_24=30, h_24=24
4011-StateManager.js:343 [StateManager] 🎯 h_10 setValue: "99.04017463973207" (state: calculated)
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
updateTargetModelDOMValues @ 4011-Section13.js:3687
calculateTargetModel @ 4011-Section13.js:3573
calculateAll @ 4011-Section13.js:3406
calculateAndRefresh @ 4011-Section13.js:2368
(anonymous) @ 4011-Section13.js:2399
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
setFieldValue @ 4011-Section13.js:636
calculateCoolingVentilation @ 4011-Section13.js:3275
calculateCoolingSystem @ 4011-Section13.js:3043
calculateTargetModel @ 4011-Section13.js:3563
calculateAll @ 4011-Section13.js:3406
calculateAndRefresh @ 4011-Section13.js:2368
(anonymous) @ 4011-Section13.js:2399
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
(anonymous) @ 4011-Section10.js:2679
(anonymous) @ 4011-StateManager.js:543
notifyListeners @ 4011-StateManager.js:541
setValue @ 4011-StateManager.js:419
(anonymous) @ 4011-Section13.js:3765
storeReferenceResults @ 4011-Section13.js:3757
calculateReferenceModel @ 4011-Section13.js:3504
calculateAll @ 4011-Section13.js:3402
calculateAndRefresh @ 4011-Section13.js:2368
(anonymous) @ 4011-StateManager.js:543
notifyListeners @ 4011-StateManager.js:541
setValue @ 4011-StateManager.js:419
setValue @ 4011-Section10.js:230
calculateSubtotals @ 4011-Section10.js:2251
calculateTargetModel @ 4011-Section10.js:1847
calculateAll @ 4011-Section10.js:1824
(anonymous) @ 4011-Section10.js:2670
(anonymous) @ 4011-StateManager.js:543
notifyListeners @ 4011-StateManager.js:541
setValue @ 4011-StateManager.js:419
setValue @ 4011-Section03.js:212
setFieldValue @ 4011-Section03.js:450
(anonymous) @ 4011-Section03.js:2213
(anonymous) @ 4011-StateManager.js:543
notifyListeners @ 4011-StateManager.js:541
setValue @ 4011-StateManager.js:419
(anonymous) @ 4011-Section03.js:1689
calculateTargetModel @ 4011-Section03.js:1686
calculateAll @ 4011-Section03.js:1665
(anonymous) @ 4011-Section03.js:2057
4011-Section13.js:3591 [Section13] Target Model calculations complete
4011-Section13.js:3407 [Section13] ✅ Target Model complete
4011-Section13.js:3434 [Section13] ⏭️ Skipping Reference value re-write - triggered in target mode
4011-Section13.js:3440 [Section13] 🎉 DUAL-ENGINE CALCULATIONS COMPLETE
4011-Section13.js:252 [Section13] 🔄 Updating calculated display values for target mode
4011-Section13.js:336 [Section13] Calculated display values updated for target mode
4011-Section13.js:2395 [Section13] 📡 🔥 d_127 (TED) listener triggered - S14 energy demand changed!
4011-Section13.js:3389 [Section13] 🚀 CALCULATEALL TRIGGERED - Running dual-engine calculations...
4011-Section13.js:3395 [Section13] 🎯 Mode captured at calculation start: target
4011-Section13.js:3401 [Section13] 🔄 Starting Reference Model calculations...
4011-Section13.js:721 🔍 [S13-CONTEXT] Creating reference context: g_118="Volume Constant" from ReferenceState
4011-Section13.js:723 🔍 [S13-CONTEXT] ReferenceState.g_118="Volume Constant", TargetState.g_118="Volume by Schedule"
4011-Section13.js:3457 [Section13] Running Reference Model calculations...
4011-Section13.js:3471 [S13 CONTAMINATION DEBUG] calculateReferenceModel: Using system type = Electricity
4011-Section13.js:2873 [S13] REF HEATING: system=Electricity, ted=297371.1974742337, afue=0.9, cop=1
4011-Section13.js:2879 [S13 REF DEBUG] About to calculate with heating system: Electricity
4011-Section13.js:2882 [S13 REF DEBUG] Will S13 publish ref_d_113=Electricity?
4011-Section13.js:3099 🔍 [S13-VENT] calculateVentilationRates: ventMethod="Volume Constant", ach(l_118)=3.5, ratePerPerson(d_119)=8.33, volume(d_105)=8000
4011-Section13.js:3102 🔍 [S13-VENT] isReferenceCalculation=true, hasContext=true
4011-Section13.js:3110 🔍 [S13-VENT] calculateVentilationValues: ventMethod="Volume Constant", ach(l_118)=3.5, ratePerPerson(d_119)=8.33, volume(d_105)=8000
4011-Section13.js:3113 🔍 [S13-VENT] Supporting values: occupants(d_63)=126, occupiedHours(i_63)=4380, totalHours(j_63)=8760
4011-Section13.js:3133 🔍 [S13-VENT] Volume Constant calculation: ventRateLs = (3.5 * 8000) / 3.6 = 7777.777777777777
4011-Section13.js:3145 ✅ [S13-VENT] Final d_120 result: 7777.777777777777 L/s (from method="Volume Constant", ach=3.5, volume=8000)
4011-Section13.js:2977 [Section13] 🧊 COOLING CALC: mode=REF, coolingSystemType="No Cooling", heatingType="Electricity", isCoolingActive=false, coolingDemand=9766.063134946162
4011-Section13.js:3737 [S13 CONTAMINATION DEBUG] storeReferenceResults called during reference mode
4011-Section13.js:3740 [S13 CONTAMINATION DEBUG] Reference heating system: Electricity
4011-Section13.js:3743 [S13 CONTAMINATION DEBUG] Target heating system: Heatpump
4011-Section13.js:3746 [S13 CONTAMINATION DEBUG] Reference h_115 (gas volume): 0
4011-Section13.js:3749 [S13 CONTAMINATION DEBUG] Reference f_115 (oil volume): 0
4011-Section13.js:3761 [S13 CONTAMINATION DEBUG] Writing ref_f_115 = 0
4011-Section13.js:3761 [S13 CONTAMINATION DEBUG] Writing ref_h_115 = 0
4011-Section13.js:3773 [Section13] Reference results stored with ref_ prefix for downstream sections
4011-Section13.js:3776 [S13 DEBUG] Total Reference results stored: 34
4011-Section13.js:3515 [Section13] Reference Model calculations complete
4011-Section13.js:3403 [Section13] ✅ Reference Model complete
4011-Section13.js:3405 [Section13] 🔄 Starting Target Model calculations...
4011-Section13.js:721 🔍 [S13-CONTEXT] Creating target context: g_118="Volume by Schedule" from TargetState
4011-Section13.js:725 🔍 [S13-CONTEXT] TargetState.g_118="Volume by Schedule", ReferenceState.g_118="Volume Constant"
4011-Section13.js:3536 [Section13] Running Target Model calculations...
4011-Section13.js:2873 [S13] TGT HEATING: system=Heatpump, ted=147391.80728166597, afue=0.98, cop=3.663540445486518
4011-Section13.js:3099 🔍 [S13-VENT] calculateVentilationRates: ventMethod="Volume by Schedule", ach(l_118)=3, ratePerPerson(d_119)=14, volume(d_105)=8000
4011-Section13.js:3102 🔍 [S13-VENT] isReferenceCalculation=false, hasContext=true
4011-Section13.js:3110 🔍 [S13-VENT] calculateVentilationValues: ventMethod="Volume by Schedule", ach(l_118)=3, ratePerPerson(d_119)=14, volume(d_105)=8000
4011-Section13.js:3113 🔍 [S13-VENT] Supporting values: occupants(d_63)=126, occupiedHours(i_63)=4380, totalHours(j_63)=8760
4011-Section13.js:3145 ✅ [S13-VENT] Final d_120 result: 3333.333333333333 L/s (from method="Volume by Schedule", ach=3, volume=8000)
4011-Section13.js:2977 [Section13] 🧊 COOLING CALC: mode=TGT, coolingSystemType="Cooling", heatingType="Heatpump", isCoolingActive=true, coolingDemand=9766.063134946162
4011-Section15.js:1750 [S15] 🎯 TGT S03 CLIMATE READ: h_23=18, d_23=-24, d_24=30, h_24=24
4011-Section04.js:2482 [S04] S15 target electricity changed: d_136
4011-Section04.js:1577 [S04] Starting dual-engine Excel-compliant calculations
4011-Section04.js:1018 [S04] Row 32 Subtotals - F32: 132938, G32: 6779.838, J32: 141117.1198344896, K32: 7196.973111558969
4011-Section04.js:94 [S04] j_32 update: 141117.1198344896
4011-Section01.js:1250 [S01] j_32 listener: 141350.1372458256 → 141117.1198344896
4011-Section01.js:1251 [S01] 🕐 j_32 listener timing: StateManager current j_32 = 141117.1198344896
24011-Section05.js:266 🔄 [S05] updateCalculatedDisplayValues: mode=target
4011-Section15.js:1750 [S15] 🎯 TGT S03 CLIMATE READ: h_23=18, d_23=-24, d_24=30, h_24=24
4011-StateManager.js:343 [StateManager] 🎯 h_10 setValue: "98.87690571362779" (state: calculated)
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
calculateCoolingSystem @ 4011-Section13.js:3033
calculateTargetModel @ 4011-Section13.js:3563
calculateAll @ 4011-Section13.js:3406
calculateAndRefresh @ 4011-Section13.js:2368
(anonymous) @ 4011-Section13.js:2399
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
setFieldValue @ 4011-Section13.js:636
calculateCoolingVentilation @ 4011-Section13.js:3275
calculateCoolingSystem @ 4011-Section13.js:3043
calculateTargetModel @ 4011-Section13.js:3563
calculateAll @ 4011-Section13.js:3406
calculateAndRefresh @ 4011-Section13.js:2368
(anonymous) @ 4011-Section13.js:2399
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
(anonymous) @ 4011-Section10.js:2679
(anonymous) @ 4011-StateManager.js:543
notifyListeners @ 4011-StateManager.js:541
setValue @ 4011-StateManager.js:419
(anonymous) @ 4011-Section13.js:3765
storeReferenceResults @ 4011-Section13.js:3757
calculateReferenceModel @ 4011-Section13.js:3504
calculateAll @ 4011-Section13.js:3402
calculateAndRefresh @ 4011-Section13.js:2368
(anonymous) @ 4011-StateManager.js:543
notifyListeners @ 4011-StateManager.js:541
setValue @ 4011-StateManager.js:419
setValue @ 4011-Section10.js:230
calculateSubtotals @ 4011-Section10.js:2251
calculateTargetModel @ 4011-Section10.js:1847
calculateAll @ 4011-Section10.js:1824
(anonymous) @ 4011-Section10.js:2670
(anonymous) @ 4011-StateManager.js:543
notifyListeners @ 4011-StateManager.js:541
setValue @ 4011-StateManager.js:419
setValue @ 4011-Section03.js:212
setFieldValue @ 4011-Section03.js:450
(anonymous) @ 4011-Section03.js:2213
(anonymous) @ 4011-StateManager.js:543
notifyListeners @ 4011-StateManager.js:541
setValue @ 4011-StateManager.js:419
(anonymous) @ 4011-Section03.js:1689
calculateTargetModel @ 4011-Section03.js:1686
calculateAll @ 4011-Section03.js:1665
(anonymous) @ 4011-Section03.js:2057
4011-Section15.js:1750 [S15] 🎯 TGT S03 CLIMATE READ: h_23=18, d_23=-24, d_24=30, h_24=24
4011-StateManager.js:343 [StateManager] 🎯 h_10 setValue: "98.87690571362779" (state: calculated)
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
calculateCoolingSystem @ 4011-Section13.js:3033
calculateTargetModel @ 4011-Section13.js:3563
calculateAll @ 4011-Section13.js:3406
calculateAndRefresh @ 4011-Section13.js:2368
(anonymous) @ 4011-Section13.js:2399
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
setFieldValue @ 4011-Section13.js:636
calculateCoolingVentilation @ 4011-Section13.js:3275
calculateCoolingSystem @ 4011-Section13.js:3043
calculateTargetModel @ 4011-Section13.js:3563
calculateAll @ 4011-Section13.js:3406
calculateAndRefresh @ 4011-Section13.js:2368
(anonymous) @ 4011-Section13.js:2399
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
(anonymous) @ 4011-Section10.js:2679
(anonymous) @ 4011-StateManager.js:543
notifyListeners @ 4011-StateManager.js:541
setValue @ 4011-StateManager.js:419
(anonymous) @ 4011-Section13.js:3765
storeReferenceResults @ 4011-Section13.js:3757
calculateReferenceModel @ 4011-Section13.js:3504
calculateAll @ 4011-Section13.js:3402
calculateAndRefresh @ 4011-Section13.js:2368
(anonymous) @ 4011-StateManager.js:543
notifyListeners @ 4011-StateManager.js:541
setValue @ 4011-StateManager.js:419
setValue @ 4011-Section10.js:230
calculateSubtotals @ 4011-Section10.js:2251
calculateTargetModel @ 4011-Section10.js:1847
calculateAll @ 4011-Section10.js:1824
(anonymous) @ 4011-Section10.js:2670
(anonymous) @ 4011-StateManager.js:543
notifyListeners @ 4011-StateManager.js:541
setValue @ 4011-StateManager.js:419
setValue @ 4011-Section03.js:212
setFieldValue @ 4011-Section03.js:450
(anonymous) @ 4011-Section03.js:2213
(anonymous) @ 4011-StateManager.js:543
notifyListeners @ 4011-StateManager.js:541
setValue @ 4011-StateManager.js:419
(anonymous) @ 4011-Section03.js:1689
calculateTargetModel @ 4011-Section03.js:1686
calculateAll @ 4011-Section03.js:1665
(anonymous) @ 4011-Section03.js:2057
4011-Section15.js:1750 [S15] 🎯 TGT S03 CLIMATE READ: h_23=18, d_23=-24, d_24=30, h_24=24
4011-StateManager.js:343 [StateManager] 🎯 h_10 setValue: "98.87690571362779" (state: calculated)
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
calculateCoolingSystem @ 4011-Section13.js:3033
calculateTargetModel @ 4011-Section13.js:3563
calculateAll @ 4011-Section13.js:3406
calculateAndRefresh @ 4011-Section13.js:2368
(anonymous) @ 4011-Section13.js:2399
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
setFieldValue @ 4011-Section13.js:636
calculateCoolingVentilation @ 4011-Section13.js:3275
calculateCoolingSystem @ 4011-Section13.js:3043
calculateTargetModel @ 4011-Section13.js:3563
calculateAll @ 4011-Section13.js:3406
calculateAndRefresh @ 4011-Section13.js:2368
(anonymous) @ 4011-Section13.js:2399
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
(anonymous) @ 4011-Section10.js:2679
(anonymous) @ 4011-StateManager.js:543
notifyListeners @ 4011-StateManager.js:541
setValue @ 4011-StateManager.js:419
(anonymous) @ 4011-Section13.js:3765
storeReferenceResults @ 4011-Section13.js:3757
calculateReferenceModel @ 4011-Section13.js:3504
calculateAll @ 4011-Section13.js:3402
calculateAndRefresh @ 4011-Section13.js:2368
(anonymous) @ 4011-StateManager.js:543
notifyListeners @ 4011-StateManager.js:541
setValue @ 4011-StateManager.js:419
setValue @ 4011-Section10.js:230
calculateSubtotals @ 4011-Section10.js:2251
calculateTargetModel @ 4011-Section10.js:1847
calculateAll @ 4011-Section10.js:1824
(anonymous) @ 4011-Section10.js:2670
(anonymous) @ 4011-StateManager.js:543
notifyListeners @ 4011-StateManager.js:541
setValue @ 4011-StateManager.js:419
setValue @ 4011-Section03.js:212
setFieldValue @ 4011-Section03.js:450
(anonymous) @ 4011-Section03.js:2213
(anonymous) @ 4011-StateManager.js:543
notifyListeners @ 4011-StateManager.js:541
setValue @ 4011-StateManager.js:419
(anonymous) @ 4011-Section03.js:1689
calculateTargetModel @ 4011-Section03.js:1686
calculateAll @ 4011-Section03.js:1665
(anonymous) @ 4011-Section03.js:2057
4011-Section15.js:1750 [S15] 🎯 TGT S03 CLIMATE READ: h_23=18, d_23=-24, d_24=30, h_24=24
4011-StateManager.js:343 [StateManager] 🎯 h_10 setValue: "98.87690571362779" (state: calculated)
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
calculateCoolingSystem @ 4011-Section13.js:3033
calculateTargetModel @ 4011-Section13.js:3563
calculateAll @ 4011-Section13.js:3406
calculateAndRefresh @ 4011-Section13.js:2368
(anonymous) @ 4011-Section13.js:2399
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
setFieldValue @ 4011-Section13.js:636
calculateCoolingVentilation @ 4011-Section13.js:3275
calculateCoolingSystem @ 4011-Section13.js:3043
calculateTargetModel @ 4011-Section13.js:3563
calculateAll @ 4011-Section13.js:3406
calculateAndRefresh @ 4011-Section13.js:2368
(anonymous) @ 4011-Section13.js:2399
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
(anonymous) @ 4011-Section10.js:2679
(anonymous) @ 4011-StateManager.js:543
notifyListeners @ 4011-StateManager.js:541
setValue @ 4011-StateManager.js:419
(anonymous) @ 4011-Section13.js:3765
storeReferenceResults @ 4011-Section13.js:3757
calculateReferenceModel @ 4011-Section13.js:3504
calculateAll @ 4011-Section13.js:3402
calculateAndRefresh @ 4011-Section13.js:2368
(anonymous) @ 4011-StateManager.js:543
notifyListeners @ 4011-StateManager.js:541
setValue @ 4011-StateManager.js:419
setValue @ 4011-Section10.js:230
calculateSubtotals @ 4011-Section10.js:2251
calculateTargetModel @ 4011-Section10.js:1847
calculateAll @ 4011-Section10.js:1824
(anonymous) @ 4011-Section10.js:2670
(anonymous) @ 4011-StateManager.js:543
notifyListeners @ 4011-StateManager.js:541
setValue @ 4011-StateManager.js:419
setValue @ 4011-Section03.js:212
setFieldValue @ 4011-Section03.js:450
(anonymous) @ 4011-Section03.js:2213
(anonymous) @ 4011-StateManager.js:543
notifyListeners @ 4011-StateManager.js:541
setValue @ 4011-StateManager.js:419
(anonymous) @ 4011-Section03.js:1689
calculateTargetModel @ 4011-Section03.js:1686
calculateAll @ 4011-Section03.js:1665
(anonymous) @ 4011-Section03.js:2057
4011-Section04.js:1018 [S04] Row 32 Subtotals - F32: 132938, G32: 6779.838, J32: 347966.051518286, K32: 17746.268627432586
4011-Section04.js:1668 [S04] Reference model calculations complete
4011-Section04.js:1674 [S04DB] storeReference: ref_j_32=347966.051518286, ref_k_32=17746.268627432586 | current target j_32=141117.1198344896, k_32=7196.973111558969
4011-Section04.js:493 [S04] 🔄 Updating calculated display values for target mode
4011-Section04.js:501 [S04DB] displayContext mode=target j_32=141117.1198344896 ref_j_32=347966.051518286 k_32=7196.973111558969 ref_k_32=17746.268627432586
4011-Section04.js:582 [S04 DEBUG] Target mode - j_32: 141117.1198344896
4011-Section04.js:582 [S04 DEBUG] Target mode - k_32: 7196.973111558969
4011-Section04.js:582 [S04 DEBUG] Target mode - l_27: 51
4011-Section04.js:617 [S04] Calculated display values updated for target mode
4011-Section04.js:1599 [S04] Dual-engine calculations completed successfully
4011-Section04.js:493 [S04] 🔄 Updating calculated display values for target mode
4011-Section04.js:501 [S04DB] displayContext mode=target j_32=141117.1198344896 ref_j_32=347966.051518286 k_32=7196.973111558969 ref_k_32=17746.268627432586
4011-Section04.js:582 [S04 DEBUG] Target mode - j_32: 141117.1198344896
4011-Section04.js:582 [S04 DEBUG] Target mode - k_32: 7196.973111558969
4011-Section04.js:582 [S04 DEBUG] Target mode - l_27: 51
4011-Section04.js:617 [S04] Calculated display values updated for target mode
4011-StateManager.js:343 [StateManager] 🎯 h_10 setValue: "98.87690571362779" (state: calculated)
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
calculateCoolingSystem @ 4011-Section13.js:3033
calculateTargetModel @ 4011-Section13.js:3563
calculateAll @ 4011-Section13.js:3406
calculateAndRefresh @ 4011-Section13.js:2368
(anonymous) @ 4011-Section13.js:2399
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
setFieldValue @ 4011-Section13.js:636
calculateCoolingVentilation @ 4011-Section13.js:3275
calculateCoolingSystem @ 4011-Section13.js:3043
calculateTargetModel @ 4011-Section13.js:3563
calculateAll @ 4011-Section13.js:3406
calculateAndRefresh @ 4011-Section13.js:2368
(anonymous) @ 4011-Section13.js:2399
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
(anonymous) @ 4011-Section10.js:2679
(anonymous) @ 4011-StateManager.js:543
notifyListeners @ 4011-StateManager.js:541
setValue @ 4011-StateManager.js:419
(anonymous) @ 4011-Section13.js:3765
storeReferenceResults @ 4011-Section13.js:3757
calculateReferenceModel @ 4011-Section13.js:3504
calculateAll @ 4011-Section13.js:3402
calculateAndRefresh @ 4011-Section13.js:2368
(anonymous) @ 4011-StateManager.js:543
notifyListeners @ 4011-StateManager.js:541
setValue @ 4011-StateManager.js:419
setValue @ 4011-Section10.js:230
calculateSubtotals @ 4011-Section10.js:2251
calculateTargetModel @ 4011-Section10.js:1847
calculateAll @ 4011-Section10.js:1824
(anonymous) @ 4011-Section10.js:2670
(anonymous) @ 4011-StateManager.js:543
notifyListeners @ 4011-StateManager.js:541
setValue @ 4011-StateManager.js:419
setValue @ 4011-Section03.js:212
setFieldValue @ 4011-Section03.js:450
(anonymous) @ 4011-Section03.js:2213
(anonymous) @ 4011-StateManager.js:543
notifyListeners @ 4011-StateManager.js:541
setValue @ 4011-StateManager.js:419
(anonymous) @ 4011-Section03.js:1689
calculateTargetModel @ 4011-Section03.js:1686
calculateAll @ 4011-Section03.js:1665
(anonymous) @ 4011-Section03.js:2057
4011-Section15.js:1750 [S15] 🎯 TGT S03 CLIMATE READ: h_23=18, d_23=-24, d_24=30, h_24=24
4011-StateManager.js:343 [StateManager] 🎯 h_10 setValue: "98.87690571362779" (state: calculated)
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
calculateCoolingSystem @ 4011-Section13.js:3033
calculateTargetModel @ 4011-Section13.js:3563
calculateAll @ 4011-Section13.js:3406
calculateAndRefresh @ 4011-Section13.js:2368
(anonymous) @ 4011-Section13.js:2399
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
setFieldValue @ 4011-Section13.js:636
calculateCoolingVentilation @ 4011-Section13.js:3275
calculateCoolingSystem @ 4011-Section13.js:3043
calculateTargetModel @ 4011-Section13.js:3563
calculateAll @ 4011-Section13.js:3406
calculateAndRefresh @ 4011-Section13.js:2368
(anonymous) @ 4011-Section13.js:2399
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
(anonymous) @ 4011-Section10.js:2679
(anonymous) @ 4011-StateManager.js:543
notifyListeners @ 4011-StateManager.js:541
setValue @ 4011-StateManager.js:419
(anonymous) @ 4011-Section13.js:3765
storeReferenceResults @ 4011-Section13.js:3757
calculateReferenceModel @ 4011-Section13.js:3504
calculateAll @ 4011-Section13.js:3402
calculateAndRefresh @ 4011-Section13.js:2368
(anonymous) @ 4011-StateManager.js:543
notifyListeners @ 4011-StateManager.js:541
setValue @ 4011-StateManager.js:419
setValue @ 4011-Section10.js:230
calculateSubtotals @ 4011-Section10.js:2251
calculateTargetModel @ 4011-Section10.js:1847
calculateAll @ 4011-Section10.js:1824
(anonymous) @ 4011-Section10.js:2670
(anonymous) @ 4011-StateManager.js:543
notifyListeners @ 4011-StateManager.js:541
setValue @ 4011-StateManager.js:419
setValue @ 4011-Section03.js:212
setFieldValue @ 4011-Section03.js:450
(anonymous) @ 4011-Section03.js:2213
(anonymous) @ 4011-StateManager.js:543
notifyListeners @ 4011-StateManager.js:541
setValue @ 4011-StateManager.js:419
(anonymous) @ 4011-Section03.js:1689
calculateTargetModel @ 4011-Section03.js:1686
calculateAll @ 4011-Section03.js:1665
(anonymous) @ 4011-Section03.js:2057
4011-Section13.js:3039 [Section13] 🧊 COOLING RESULTS: d_117=3666.572118886037, j_116=2.663540445486518, l_116=0, l_114=6099.491016060125
24011-Section14.js:1416 [S14 LISTENER] 🔥 d_122 changed - triggering calculateAll() + UI update
4011-Section15.js:1750 [S15] 🎯 TGT S03 CLIMATE READ: h_23=18, d_23=-24, d_24=30, h_24=24
4011-StateManager.js:343 [StateManager] 🎯 h_10 setValue: "98.87690571362779" (state: calculated)
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
calculateCoolingVentilation @ 4011-Section13.js:3275
calculateCoolingSystem @ 4011-Section13.js:3043
calculateTargetModel @ 4011-Section13.js:3563
calculateAll @ 4011-Section13.js:3406
calculateAndRefresh @ 4011-Section13.js:2368
(anonymous) @ 4011-Section13.js:2399
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
setFieldValue @ 4011-Section13.js:636
calculateCoolingVentilation @ 4011-Section13.js:3275
calculateCoolingSystem @ 4011-Section13.js:3043
calculateTargetModel @ 4011-Section13.js:3563
calculateAll @ 4011-Section13.js:3406
calculateAndRefresh @ 4011-Section13.js:2368
(anonymous) @ 4011-Section13.js:2399
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
(anonymous) @ 4011-Section10.js:2679
(anonymous) @ 4011-StateManager.js:543
notifyListeners @ 4011-StateManager.js:541
setValue @ 4011-StateManager.js:419
(anonymous) @ 4011-Section13.js:3765
storeReferenceResults @ 4011-Section13.js:3757
calculateReferenceModel @ 4011-Section13.js:3504
calculateAll @ 4011-Section13.js:3402
calculateAndRefresh @ 4011-Section13.js:2368
(anonymous) @ 4011-StateManager.js:543
notifyListeners @ 4011-StateManager.js:541
setValue @ 4011-StateManager.js:419
setValue @ 4011-Section10.js:230
calculateSubtotals @ 4011-Section10.js:2251
calculateTargetModel @ 4011-Section10.js:1847
calculateAll @ 4011-Section10.js:1824
(anonymous) @ 4011-Section10.js:2670
(anonymous) @ 4011-StateManager.js:543
notifyListeners @ 4011-StateManager.js:541
setValue @ 4011-StateManager.js:419
setValue @ 4011-Section03.js:212
setFieldValue @ 4011-Section03.js:450
(anonymous) @ 4011-Section03.js:2213
(anonymous) @ 4011-StateManager.js:543
notifyListeners @ 4011-StateManager.js:541
setValue @ 4011-StateManager.js:419
(anonymous) @ 4011-Section03.js:1689
calculateTargetModel @ 4011-Section03.js:1686
calculateAll @ 4011-Section03.js:1665
(anonymous) @ 4011-Section03.js:2057
4011-Section15.js:1750 [S15] 🎯 TGT S03 CLIMATE READ: h_23=18, d_23=-24, d_24=30, h_24=24
4011-StateManager.js:343 [StateManager] 🎯 h_10 setValue: "98.87690571362779" (state: calculated)
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
calculateCoolingVentilation @ 4011-Section13.js:3275
calculateCoolingSystem @ 4011-Section13.js:3043
calculateTargetModel @ 4011-Section13.js:3563
calculateAll @ 4011-Section13.js:3406
calculateAndRefresh @ 4011-Section13.js:2368
(anonymous) @ 4011-Section13.js:2399
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
setFieldValue @ 4011-Section13.js:636
calculateCoolingVentilation @ 4011-Section13.js:3275
calculateCoolingSystem @ 4011-Section13.js:3043
calculateTargetModel @ 4011-Section13.js:3563
calculateAll @ 4011-Section13.js:3406
calculateAndRefresh @ 4011-Section13.js:2368
(anonymous) @ 4011-Section13.js:2399
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
(anonymous) @ 4011-Section10.js:2679
(anonymous) @ 4011-StateManager.js:543
notifyListeners @ 4011-StateManager.js:541
setValue @ 4011-StateManager.js:419
(anonymous) @ 4011-Section13.js:3765
storeReferenceResults @ 4011-Section13.js:3757
calculateReferenceModel @ 4011-Section13.js:3504
calculateAll @ 4011-Section13.js:3402
calculateAndRefresh @ 4011-Section13.js:2368
(anonymous) @ 4011-StateManager.js:543
notifyListeners @ 4011-StateManager.js:541
setValue @ 4011-StateManager.js:419
setValue @ 4011-Section10.js:230
calculateSubtotals @ 4011-Section10.js:2251
calculateTargetModel @ 4011-Section10.js:1847
calculateAll @ 4011-Section10.js:1824
(anonymous) @ 4011-Section10.js:2670
(anonymous) @ 4011-StateManager.js:543
notifyListeners @ 4011-StateManager.js:541
setValue @ 4011-StateManager.js:419
setValue @ 4011-Section03.js:212
setFieldValue @ 4011-Section03.js:450
(anonymous) @ 4011-Section03.js:2213
(anonymous) @ 4011-StateManager.js:543
notifyListeners @ 4011-StateManager.js:541
setValue @ 4011-StateManager.js:419
(anonymous) @ 4011-Section03.js:1689
calculateTargetModel @ 4011-Section03.js:1686
calculateAll @ 4011-Section03.js:1665
(anonymous) @ 4011-Section03.js:2057
24011-Section14.js:1416 [S14 LISTENER] 🔥 d_122 changed - triggering calculateAll() + UI update
4011-Section15.js:1750 [S15] 🎯 TGT S03 CLIMATE READ: h_23=18, d_23=-24, d_24=30, h_24=24
4011-StateManager.js:343 [StateManager] 🎯 h_10 setValue: "98.87690571362779" (state: calculated)
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
updateTargetModelDOMValues @ 4011-Section13.js:3687
calculateTargetModel @ 4011-Section13.js:3573
calculateAll @ 4011-Section13.js:3406
calculateAndRefresh @ 4011-Section13.js:2368
(anonymous) @ 4011-Section13.js:2399
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
setFieldValue @ 4011-Section13.js:636
calculateCoolingVentilation @ 4011-Section13.js:3275
calculateCoolingSystem @ 4011-Section13.js:3043
calculateTargetModel @ 4011-Section13.js:3563
calculateAll @ 4011-Section13.js:3406
calculateAndRefresh @ 4011-Section13.js:2368
(anonymous) @ 4011-Section13.js:2399
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
(anonymous) @ 4011-Section10.js:2679
(anonymous) @ 4011-StateManager.js:543
notifyListeners @ 4011-StateManager.js:541
setValue @ 4011-StateManager.js:419
(anonymous) @ 4011-Section13.js:3765
storeReferenceResults @ 4011-Section13.js:3757
calculateReferenceModel @ 4011-Section13.js:3504
calculateAll @ 4011-Section13.js:3402
calculateAndRefresh @ 4011-Section13.js:2368
(anonymous) @ 4011-StateManager.js:543
notifyListeners @ 4011-StateManager.js:541
setValue @ 4011-StateManager.js:419
setValue @ 4011-Section10.js:230
calculateSubtotals @ 4011-Section10.js:2251
calculateTargetModel @ 4011-Section10.js:1847
calculateAll @ 4011-Section10.js:1824
(anonymous) @ 4011-Section10.js:2670
(anonymous) @ 4011-StateManager.js:543
notifyListeners @ 4011-StateManager.js:541
setValue @ 4011-StateManager.js:419
setValue @ 4011-Section03.js:212
setFieldValue @ 4011-Section03.js:450
(anonymous) @ 4011-Section03.js:2213
(anonymous) @ 4011-StateManager.js:543
notifyListeners @ 4011-StateManager.js:541
setValue @ 4011-StateManager.js:419
(anonymous) @ 4011-Section03.js:1689
calculateTargetModel @ 4011-Section03.js:1686
calculateAll @ 4011-Section03.js:1665
(anonymous) @ 4011-Section03.js:2057
4011-Section15.js:1750 [S15] 🎯 TGT S03 CLIMATE READ: h_23=18, d_23=-24, d_24=30, h_24=24
4011-StateManager.js:343 [StateManager] 🎯 h_10 setValue: "98.87690571362779" (state: calculated)
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
updateTargetModelDOMValues @ 4011-Section13.js:3687
calculateTargetModel @ 4011-Section13.js:3573
calculateAll @ 4011-Section13.js:3406
calculateAndRefresh @ 4011-Section13.js:2368
(anonymous) @ 4011-Section13.js:2399
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
setFieldValue @ 4011-Section13.js:636
calculateCoolingVentilation @ 4011-Section13.js:3275
calculateCoolingSystem @ 4011-Section13.js:3043
calculateTargetModel @ 4011-Section13.js:3563
calculateAll @ 4011-Section13.js:3406
calculateAndRefresh @ 4011-Section13.js:2368
(anonymous) @ 4011-Section13.js:2399
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
(anonymous) @ 4011-Section10.js:2679
(anonymous) @ 4011-StateManager.js:543
notifyListeners @ 4011-StateManager.js:541
setValue @ 4011-StateManager.js:419
(anonymous) @ 4011-Section13.js:3765
storeReferenceResults @ 4011-Section13.js:3757
calculateReferenceModel @ 4011-Section13.js:3504
calculateAll @ 4011-Section13.js:3402
calculateAndRefresh @ 4011-Section13.js:2368
(anonymous) @ 4011-StateManager.js:543
notifyListeners @ 4011-StateManager.js:541
setValue @ 4011-StateManager.js:419
setValue @ 4011-Section10.js:230
calculateSubtotals @ 4011-Section10.js:2251
calculateTargetModel @ 4011-Section10.js:1847
calculateAll @ 4011-Section10.js:1824
(anonymous) @ 4011-Section10.js:2670
(anonymous) @ 4011-StateManager.js:543
notifyListeners @ 4011-StateManager.js:541
setValue @ 4011-StateManager.js:419
setValue @ 4011-Section03.js:212
setFieldValue @ 4011-Section03.js:450
(anonymous) @ 4011-Section03.js:2213
(anonymous) @ 4011-StateManager.js:543
notifyListeners @ 4011-StateManager.js:541
setValue @ 4011-StateManager.js:419
(anonymous) @ 4011-Section03.js:1689
calculateTargetModel @ 4011-Section03.js:1686
calculateAll @ 4011-Section03.js:1665
(anonymous) @ 4011-Section03.js:2057
4011-Section13.js:3591 [Section13] Target Model calculations complete
4011-Section13.js:3407 [Section13] ✅ Target Model complete
4011-Section13.js:3434 [Section13] ⏭️ Skipping Reference value re-write - triggered in target mode
4011-Section13.js:3440 [Section13] 🎉 DUAL-ENGINE CALCULATIONS COMPLETE
4011-Section13.js:252 [Section13] 🔄 Updating calculated display values for target mode
4011-Section13.js:336 [Section13] Calculated display values updated for target mode
4011-Section14.js:1416 [S14 LISTENER] 🔥 d_122 changed - triggering calculateAll() + UI update
4011-Section15.js:1750 [S15] 🎯 TGT S03 CLIMATE READ: h_23=18, d_23=-24, d_24=30, h_24=24
4011-StateManager.js:343 [StateManager] 🎯 h_10 setValue: "98.87690571362779" (state: calculated)
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
calculateCoolingVentilation @ 4011-Section13.js:3275
calculateCoolingSystem @ 4011-Section13.js:3043
calculateTargetModel @ 4011-Section13.js:3563
calculateAll @ 4011-Section13.js:3406
calculateAndRefresh @ 4011-Section13.js:2368
(anonymous) @ 4011-Section13.js:2399
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
(anonymous) @ 4011-Section10.js:2679
(anonymous) @ 4011-StateManager.js:543
notifyListeners @ 4011-StateManager.js:541
setValue @ 4011-StateManager.js:419
(anonymous) @ 4011-Section13.js:3765
storeReferenceResults @ 4011-Section13.js:3757
calculateReferenceModel @ 4011-Section13.js:3504
calculateAll @ 4011-Section13.js:3402
calculateAndRefresh @ 4011-Section13.js:2368
(anonymous) @ 4011-StateManager.js:543
notifyListeners @ 4011-StateManager.js:541
setValue @ 4011-StateManager.js:419
setValue @ 4011-Section10.js:230
calculateSubtotals @ 4011-Section10.js:2251
calculateTargetModel @ 4011-Section10.js:1847
calculateAll @ 4011-Section10.js:1824
(anonymous) @ 4011-Section10.js:2670
(anonymous) @ 4011-StateManager.js:543
notifyListeners @ 4011-StateManager.js:541
setValue @ 4011-StateManager.js:419
setValue @ 4011-Section03.js:212
setFieldValue @ 4011-Section03.js:450
(anonymous) @ 4011-Section03.js:2213
(anonymous) @ 4011-StateManager.js:543
notifyListeners @ 4011-StateManager.js:541
setValue @ 4011-StateManager.js:419
(anonymous) @ 4011-Section03.js:1689
calculateTargetModel @ 4011-Section03.js:1686
calculateAll @ 4011-Section03.js:1665
(anonymous) @ 4011-Section03.js:2057
4011-Section15.js:1750 [S15] 🎯 TGT S03 CLIMATE READ: h_23=18, d_23=-24, d_24=30, h_24=24
4011-StateManager.js:343 [StateManager] 🎯 h_10 setValue: "98.87690571362779" (state: calculated)
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
calculateCoolingVentilation @ 4011-Section13.js:3275
calculateCoolingSystem @ 4011-Section13.js:3043
calculateTargetModel @ 4011-Section13.js:3563
calculateAll @ 4011-Section13.js:3406
calculateAndRefresh @ 4011-Section13.js:2368
(anonymous) @ 4011-Section13.js:2399
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
(anonymous) @ 4011-Section10.js:2679
(anonymous) @ 4011-StateManager.js:543
notifyListeners @ 4011-StateManager.js:541
setValue @ 4011-StateManager.js:419
(anonymous) @ 4011-Section13.js:3765
storeReferenceResults @ 4011-Section13.js:3757
calculateReferenceModel @ 4011-Section13.js:3504
calculateAll @ 4011-Section13.js:3402
calculateAndRefresh @ 4011-Section13.js:2368
(anonymous) @ 4011-StateManager.js:543
notifyListeners @ 4011-StateManager.js:541
setValue @ 4011-StateManager.js:419
setValue @ 4011-Section10.js:230
calculateSubtotals @ 4011-Section10.js:2251
calculateTargetModel @ 4011-Section10.js:1847
calculateAll @ 4011-Section10.js:1824
(anonymous) @ 4011-Section10.js:2670
(anonymous) @ 4011-StateManager.js:543
notifyListeners @ 4011-StateManager.js:541
setValue @ 4011-StateManager.js:419
setValue @ 4011-Section03.js:212
setFieldValue @ 4011-Section03.js:450
(anonymous) @ 4011-Section03.js:2213
(anonymous) @ 4011-StateManager.js:543
notifyListeners @ 4011-StateManager.js:541
setValue @ 4011-StateManager.js:419
(anonymous) @ 4011-Section03.js:1689
calculateTargetModel @ 4011-Section03.js:1686
calculateAll @ 4011-Section03.js:1665
(anonymous) @ 4011-Section03.js:2057
4011-Section15.js:1750 [S15] 🎯 TGT S03 CLIMATE READ: h_23=18, d_23=-24, d_24=30, h_24=24
4011-Section04.js:2482 [S04] S15 target electricity changed: d_136
4011-Section04.js:1577 [S04] Starting dual-engine Excel-compliant calculations
4011-Section04.js:1018 [S04] Row 32 Subtotals - F32: 132938, G32: 6779.838, J32: 133850.92463448955, K32: 6826.397156358968
4011-Section04.js:94 [S04] j_32 update: 133850.92463448955
4011-Section01.js:1250 [S01] j_32 listener: 141117.1198344896 → 133850.92463448955
4011-Section01.js:1251 [S01] 🕐 j_32 listener timing: StateManager current j_32 = 133850.92463448955
24011-Section05.js:266 🔄 [S05] updateCalculatedDisplayValues: mode=target
4011-Section15.js:1750 [S15] 🎯 TGT S03 CLIMATE READ: h_23=18, d_23=-24, d_24=30, h_24=24
4011-StateManager.js:343 [StateManager] 🎯 h_10 setValue: "93.78568149838112" (state: calculated)
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
updateTargetModelDOMValues @ 4011-Section13.js:3617
calculateTargetModel @ 4011-Section13.js:3573
calculateAll @ 4011-Section13.js:3406
calculateAndRefresh @ 4011-Section13.js:2368
(anonymous) @ 4011-Section13.js:2399
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
(anonymous) @ 4011-Section10.js:2679
(anonymous) @ 4011-StateManager.js:543
notifyListeners @ 4011-StateManager.js:541
setValue @ 4011-StateManager.js:419
(anonymous) @ 4011-Section13.js:3765
storeReferenceResults @ 4011-Section13.js:3757
calculateReferenceModel @ 4011-Section13.js:3504
calculateAll @ 4011-Section13.js:3402
calculateAndRefresh @ 4011-Section13.js:2368
(anonymous) @ 4011-StateManager.js:543
notifyListeners @ 4011-StateManager.js:541
setValue @ 4011-StateManager.js:419
setValue @ 4011-Section10.js:230
calculateSubtotals @ 4011-Section10.js:2251
calculateTargetModel @ 4011-Section10.js:1847
calculateAll @ 4011-Section10.js:1824
(anonymous) @ 4011-Section10.js:2670
(anonymous) @ 4011-StateManager.js:543
notifyListeners @ 4011-StateManager.js:541
setValue @ 4011-StateManager.js:419
setValue @ 4011-Section03.js:212
setFieldValue @ 4011-Section03.js:450
(anonymous) @ 4011-Section03.js:2213
(anonymous) @ 4011-StateManager.js:543
notifyListeners @ 4011-StateManager.js:541
setValue @ 4011-StateManager.js:419
(anonymous) @ 4011-Section03.js:1689
calculateTargetModel @ 4011-Section03.js:1686
calculateAll @ 4011-Section03.js:1665
(anonymous) @ 4011-Section03.js:2057
4011-Section15.js:1750 [S15] 🎯 TGT S03 CLIMATE READ: h_23=18, d_23=-24, d_24=30, h_24=24
4011-StateManager.js:343 [StateManager] 🎯 h_10 setValue: "93.78568149838112" (state: calculated)
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
updateTargetModelDOMValues @ 4011-Section13.js:3617
calculateTargetModel @ 4011-Section13.js:3573
calculateAll @ 4011-Section13.js:3406
calculateAndRefresh @ 4011-Section13.js:2368
(anonymous) @ 4011-Section13.js:2399
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
(anonymous) @ 4011-Section10.js:2679
(anonymous) @ 4011-StateManager.js:543
notifyListeners @ 4011-StateManager.js:541
setValue @ 4011-StateManager.js:419
(anonymous) @ 4011-Section13.js:3765
storeReferenceResults @ 4011-Section13.js:3757
calculateReferenceModel @ 4011-Section13.js:3504
calculateAll @ 4011-Section13.js:3402
calculateAndRefresh @ 4011-Section13.js:2368
(anonymous) @ 4011-StateManager.js:543
notifyListeners @ 4011-StateManager.js:541
setValue @ 4011-StateManager.js:419
setValue @ 4011-Section10.js:230
calculateSubtotals @ 4011-Section10.js:2251
calculateTargetModel @ 4011-Section10.js:1847
calculateAll @ 4011-Section10.js:1824
(anonymous) @ 4011-Section10.js:2670
(anonymous) @ 4011-StateManager.js:543
notifyListeners @ 4011-StateManager.js:541
setValue @ 4011-StateManager.js:419
setValue @ 4011-Section03.js:212
setFieldValue @ 4011-Section03.js:450
(anonymous) @ 4011-Section03.js:2213
(anonymous) @ 4011-StateManager.js:543
notifyListeners @ 4011-StateManager.js:541
setValue @ 4011-StateManager.js:419
(anonymous) @ 4011-Section03.js:1689
calculateTargetModel @ 4011-Section03.js:1686
calculateAll @ 4011-Section03.js:1665
(anonymous) @ 4011-Section03.js:2057
4011-Section15.js:1750 [S15] 🎯 TGT S03 CLIMATE READ: h_23=18, d_23=-24, d_24=30, h_24=24
4011-StateManager.js:343 [StateManager] 🎯 h_10 setValue: "93.78568149838112" (state: calculated)
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
updateTargetModelDOMValues @ 4011-Section13.js:3617
calculateTargetModel @ 4011-Section13.js:3573
calculateAll @ 4011-Section13.js:3406
calculateAndRefresh @ 4011-Section13.js:2368
(anonymous) @ 4011-Section13.js:2399
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
(anonymous) @ 4011-Section10.js:2679
(anonymous) @ 4011-StateManager.js:543
notifyListeners @ 4011-StateManager.js:541
setValue @ 4011-StateManager.js:419
(anonymous) @ 4011-Section13.js:3765
storeReferenceResults @ 4011-Section13.js:3757
calculateReferenceModel @ 4011-Section13.js:3504
calculateAll @ 4011-Section13.js:3402
calculateAndRefresh @ 4011-Section13.js:2368
(anonymous) @ 4011-StateManager.js:543
notifyListeners @ 4011-StateManager.js:541
setValue @ 4011-StateManager.js:419
setValue @ 4011-Section10.js:230
calculateSubtotals @ 4011-Section10.js:2251
calculateTargetModel @ 4011-Section10.js:1847
calculateAll @ 4011-Section10.js:1824
(anonymous) @ 4011-Section10.js:2670
(anonymous) @ 4011-StateManager.js:543
notifyListeners @ 4011-StateManager.js:541
setValue @ 4011-StateManager.js:419
setValue @ 4011-Section03.js:212
setFieldValue @ 4011-Section03.js:450
(anonymous) @ 4011-Section03.js:2213
(anonymous) @ 4011-StateManager.js:543
notifyListeners @ 4011-StateManager.js:541
setValue @ 4011-StateManager.js:419
(anonymous) @ 4011-Section03.js:1689
calculateTargetModel @ 4011-Section03.js:1686
calculateAll @ 4011-Section03.js:1665
(anonymous) @ 4011-Section03.js:2057
4011-Section15.js:1750 [S15] 🎯 TGT S03 CLIMATE READ: h_23=18, d_23=-24, d_24=30, h_24=24
4011-StateManager.js:343 [StateManager] 🎯 h_10 setValue: "93.78568149838112" (state: calculated)
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
updateTargetModelDOMValues @ 4011-Section13.js:3617
calculateTargetModel @ 4011-Section13.js:3573
calculateAll @ 4011-Section13.js:3406
calculateAndRefresh @ 4011-Section13.js:2368
(anonymous) @ 4011-Section13.js:2399
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
(anonymous) @ 4011-Section10.js:2679
(anonymous) @ 4011-StateManager.js:543
notifyListeners @ 4011-StateManager.js:541
setValue @ 4011-StateManager.js:419
(anonymous) @ 4011-Section13.js:3765
storeReferenceResults @ 4011-Section13.js:3757
calculateReferenceModel @ 4011-Section13.js:3504
calculateAll @ 4011-Section13.js:3402
calculateAndRefresh @ 4011-Section13.js:2368
(anonymous) @ 4011-StateManager.js:543
notifyListeners @ 4011-StateManager.js:541
setValue @ 4011-StateManager.js:419
setValue @ 4011-Section10.js:230
calculateSubtotals @ 4011-Section10.js:2251
calculateTargetModel @ 4011-Section10.js:1847
calculateAll @ 4011-Section10.js:1824
(anonymous) @ 4011-Section10.js:2670
(anonymous) @ 4011-StateManager.js:543
notifyListeners @ 4011-StateManager.js:541
setValue @ 4011-StateManager.js:419
setValue @ 4011-Section03.js:212
setFieldValue @ 4011-Section03.js:450
(anonymous) @ 4011-Section03.js:2213
(anonymous) @ 4011-StateManager.js:543
notifyListeners @ 4011-StateManager.js:541
setValue @ 4011-StateManager.js:419
(anonymous) @ 4011-Section03.js:1689
calculateTargetModel @ 4011-Section03.js:1686
calculateAll @ 4011-Section03.js:1665
(anonymous) @ 4011-Section03.js:2057
4011-Section04.js:1018 [S04] Row 32 Subtotals - F32: 132938, G32: 6779.838, J32: 347966.051518286, K32: 17746.268627432586
4011-Section04.js:1668 [S04] Reference model calculations complete
4011-Section04.js:1674 [S04DB] storeReference: ref_j_32=347966.051518286, ref_k_32=17746.268627432586 | current target j_32=133850.92463448955, k_32=6826.397156358968
4011-Section04.js:493 [S04] 🔄 Updating calculated display values for target mode
4011-Section04.js:501 [S04DB] displayContext mode=target j_32=133850.92463448955 ref_j_32=347966.051518286 k_32=6826.397156358968 ref_k_32=17746.268627432586
4011-Section04.js:582 [S04 DEBUG] Target mode - j_32: 133850.92463448955
4011-Section04.js:582 [S04 DEBUG] Target mode - k_32: 6826.397156358968
4011-Section04.js:582 [S04 DEBUG] Target mode - l_27: 51
4011-Section04.js:617 [S04] Calculated display values updated for target mode
4011-Section04.js:1599 [S04] Dual-engine calculations completed successfully
4011-Section04.js:493 [S04] 🔄 Updating calculated display values for target mode
4011-Section04.js:501 [S04DB] displayContext mode=target j_32=133850.92463448955 ref_j_32=347966.051518286 k_32=6826.397156358968 ref_k_32=17746.268627432586
4011-Section04.js:582 [S04 DEBUG] Target mode - j_32: 133850.92463448955
4011-Section04.js:582 [S04 DEBUG] Target mode - k_32: 6826.397156358968
4011-Section04.js:582 [S04 DEBUG] Target mode - l_27: 51
4011-Section04.js:617 [S04] Calculated display values updated for target mode
4011-StateManager.js:343 [StateManager] 🎯 h_10 setValue: "93.78568149838112" (state: calculated)
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
updateTargetModelDOMValues @ 4011-Section13.js:3617
calculateTargetModel @ 4011-Section13.js:3573
calculateAll @ 4011-Section13.js:3406
calculateAndRefresh @ 4011-Section13.js:2368
(anonymous) @ 4011-Section13.js:2399
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
(anonymous) @ 4011-Section10.js:2679
(anonymous) @ 4011-StateManager.js:543
notifyListeners @ 4011-StateManager.js:541
setValue @ 4011-StateManager.js:419
(anonymous) @ 4011-Section13.js:3765
storeReferenceResults @ 4011-Section13.js:3757
calculateReferenceModel @ 4011-Section13.js:3504
calculateAll @ 4011-Section13.js:3402
calculateAndRefresh @ 4011-Section13.js:2368
(anonymous) @ 4011-StateManager.js:543
notifyListeners @ 4011-StateManager.js:541
setValue @ 4011-StateManager.js:419
setValue @ 4011-Section10.js:230
calculateSubtotals @ 4011-Section10.js:2251
calculateTargetModel @ 4011-Section10.js:1847
calculateAll @ 4011-Section10.js:1824
(anonymous) @ 4011-Section10.js:2670
(anonymous) @ 4011-StateManager.js:543
notifyListeners @ 4011-StateManager.js:541
setValue @ 4011-StateManager.js:419
setValue @ 4011-Section03.js:212
setFieldValue @ 4011-Section03.js:450
(anonymous) @ 4011-Section03.js:2213
(anonymous) @ 4011-StateManager.js:543
notifyListeners @ 4011-StateManager.js:541
setValue @ 4011-StateManager.js:419
(anonymous) @ 4011-Section03.js:1689
calculateTargetModel @ 4011-Section03.js:1686
calculateAll @ 4011-Section03.js:1665
(anonymous) @ 4011-Section03.js:2057
4011-Section15.js:1750 [S15] 🎯 TGT S03 CLIMATE READ: h_23=18, d_23=-24, d_24=30, h_24=24
4011-StateManager.js:343 [StateManager] 🎯 h_10 setValue: "93.78568149838112" (state: calculated)
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
updateTargetModelDOMValues @ 4011-Section13.js:3617
calculateTargetModel @ 4011-Section13.js:3573
calculateAll @ 4011-Section13.js:3406
calculateAndRefresh @ 4011-Section13.js:2368
(anonymous) @ 4011-Section13.js:2399
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
(anonymous) @ 4011-Section10.js:2679
(anonymous) @ 4011-StateManager.js:543
notifyListeners @ 4011-StateManager.js:541
setValue @ 4011-StateManager.js:419
(anonymous) @ 4011-Section13.js:3765
storeReferenceResults @ 4011-Section13.js:3757
calculateReferenceModel @ 4011-Section13.js:3504
calculateAll @ 4011-Section13.js:3402
calculateAndRefresh @ 4011-Section13.js:2368
(anonymous) @ 4011-StateManager.js:543
notifyListeners @ 4011-StateManager.js:541
setValue @ 4011-StateManager.js:419
setValue @ 4011-Section10.js:230
calculateSubtotals @ 4011-Section10.js:2251
calculateTargetModel @ 4011-Section10.js:1847
calculateAll @ 4011-Section10.js:1824
(anonymous) @ 4011-Section10.js:2670
(anonymous) @ 4011-StateManager.js:543
notifyListeners @ 4011-StateManager.js:541
setValue @ 4011-StateManager.js:419
setValue @ 4011-Section03.js:212
setFieldValue @ 4011-Section03.js:450
(anonymous) @ 4011-Section03.js:2213
(anonymous) @ 4011-StateManager.js:543
notifyListeners @ 4011-StateManager.js:541
setValue @ 4011-StateManager.js:419
(anonymous) @ 4011-Section03.js:1689
calculateTargetModel @ 4011-Section03.js:1686
calculateAll @ 4011-Section03.js:1665
(anonymous) @ 4011-Section03.js:2057
4011-Section15.js:1750 [S15] 🎯 TGT S03 CLIMATE READ: h_23=18, d_23=-24, d_24=30, h_24=24
4011-Section04.js:2482 [S04] S15 target electricity changed: d_136
4011-Section04.js:1577 [S04] Starting dual-engine Excel-compliant calculations
4011-Section04.js:1018 [S04] Row 32 Subtotals - F32: 132938, G32: 6779.838, J32: 134083.9420458256, K32: 6838.281044337105
4011-Section04.js:94 [S04] j_32 update: 134083.9420458256
4011-Section01.js:1250 [S01] j_32 listener: 133850.92463448955 → 134083.9420458256
4011-Section01.js:1251 [S01] 🕐 j_32 listener timing: StateManager current j_32 = 134083.9420458256
24011-Section05.js:266 🔄 [S05] updateCalculatedDisplayValues: mode=target
4011-Section15.js:1750 [S15] 🎯 TGT S03 CLIMATE READ: h_23=18, d_23=-24, d_24=30, h_24=24
4011-StateManager.js:343 [StateManager] 🎯 h_10 setValue: "93.94895042448542" (state: calculated)
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
updateTargetModelDOMValues @ 4011-Section13.js:3641
calculateTargetModel @ 4011-Section13.js:3573
calculateAll @ 4011-Section13.js:3406
calculateAndRefresh @ 4011-Section13.js:2368
(anonymous) @ 4011-Section13.js:2399
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
(anonymous) @ 4011-Section10.js:2679
(anonymous) @ 4011-StateManager.js:543
notifyListeners @ 4011-StateManager.js:541
setValue @ 4011-StateManager.js:419
(anonymous) @ 4011-Section13.js:3765
storeReferenceResults @ 4011-Section13.js:3757
calculateReferenceModel @ 4011-Section13.js:3504
calculateAll @ 4011-Section13.js:3402
calculateAndRefresh @ 4011-Section13.js:2368
(anonymous) @ 4011-StateManager.js:543
notifyListeners @ 4011-StateManager.js:541
setValue @ 4011-StateManager.js:419
setValue @ 4011-Section10.js:230
calculateSubtotals @ 4011-Section10.js:2251
calculateTargetModel @ 4011-Section10.js:1847
calculateAll @ 4011-Section10.js:1824
(anonymous) @ 4011-Section10.js:2670
(anonymous) @ 4011-StateManager.js:543
notifyListeners @ 4011-StateManager.js:541
setValue @ 4011-StateManager.js:419
setValue @ 4011-Section03.js:212
setFieldValue @ 4011-Section03.js:450
(anonymous) @ 4011-Section03.js:2213
(anonymous) @ 4011-StateManager.js:543
notifyListeners @ 4011-StateManager.js:541
setValue @ 4011-StateManager.js:419
(anonymous) @ 4011-Section03.js:1689
calculateTargetModel @ 4011-Section03.js:1686
calculateAll @ 4011-Section03.js:1665
(anonymous) @ 4011-Section03.js:2057
4011-Section15.js:1750 [S15] 🎯 TGT S03 CLIMATE READ: h_23=18, d_23=-24, d_24=30, h_24=24
4011-StateManager.js:343 [StateManager] 🎯 h_10 setValue: "93.94895042448542" (state: calculated)
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
updateTargetModelDOMValues @ 4011-Section13.js:3641
calculateTargetModel @ 4011-Section13.js:3573
calculateAll @ 4011-Section13.js:3406
calculateAndRefresh @ 4011-Section13.js:2368
(anonymous) @ 4011-Section13.js:2399
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
(anonymous) @ 4011-Section10.js:2679
(anonymous) @ 4011-StateManager.js:543
notifyListeners @ 4011-StateManager.js:541
setValue @ 4011-StateManager.js:419
(anonymous) @ 4011-Section13.js:3765
storeReferenceResults @ 4011-Section13.js:3757
calculateReferenceModel @ 4011-Section13.js:3504
calculateAll @ 4011-Section13.js:3402
calculateAndRefresh @ 4011-Section13.js:2368
(anonymous) @ 4011-StateManager.js:543
notifyListeners @ 4011-StateManager.js:541
setValue @ 4011-StateManager.js:419
setValue @ 4011-Section10.js:230
calculateSubtotals @ 4011-Section10.js:2251
calculateTargetModel @ 4011-Section10.js:1847
calculateAll @ 4011-Section10.js:1824
(anonymous) @ 4011-Section10.js:2670
(anonymous) @ 4011-StateManager.js:543
notifyListeners @ 4011-StateManager.js:541
setValue @ 4011-StateManager.js:419
setValue @ 4011-Section03.js:212
setFieldValue @ 4011-Section03.js:450
(anonymous) @ 4011-Section03.js:2213
(anonymous) @ 4011-StateManager.js:543
notifyListeners @ 4011-StateManager.js:541
setValue @ 4011-StateManager.js:419
(anonymous) @ 4011-Section03.js:1689
calculateTargetModel @ 4011-Section03.js:1686
calculateAll @ 4011-Section03.js:1665
(anonymous) @ 4011-Section03.js:2057
4011-Section15.js:1750 [S15] 🎯 TGT S03 CLIMATE READ: h_23=18, d_23=-24, d_24=30, h_24=24
4011-StateManager.js:343 [StateManager] 🎯 h_10 setValue: "93.94895042448542" (state: calculated)
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
updateTargetModelDOMValues @ 4011-Section13.js:3641
calculateTargetModel @ 4011-Section13.js:3573
calculateAll @ 4011-Section13.js:3406
calculateAndRefresh @ 4011-Section13.js:2368
(anonymous) @ 4011-Section13.js:2399
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
(anonymous) @ 4011-Section10.js:2679
(anonymous) @ 4011-StateManager.js:543
notifyListeners @ 4011-StateManager.js:541
setValue @ 4011-StateManager.js:419
(anonymous) @ 4011-Section13.js:3765
storeReferenceResults @ 4011-Section13.js:3757
calculateReferenceModel @ 4011-Section13.js:3504
calculateAll @ 4011-Section13.js:3402
calculateAndRefresh @ 4011-Section13.js:2368
(anonymous) @ 4011-StateManager.js:543
notifyListeners @ 4011-StateManager.js:541
setValue @ 4011-StateManager.js:419
setValue @ 4011-Section10.js:230
calculateSubtotals @ 4011-Section10.js:2251
calculateTargetModel @ 4011-Section10.js:1847
calculateAll @ 4011-Section10.js:1824
(anonymous) @ 4011-Section10.js:2670
(anonymous) @ 4011-StateManager.js:543
notifyListeners @ 4011-StateManager.js:541
setValue @ 4011-StateManager.js:419
setValue @ 4011-Section03.js:212
setFieldValue @ 4011-Section03.js:450
(anonymous) @ 4011-Section03.js:2213
(anonymous) @ 4011-StateManager.js:543
notifyListeners @ 4011-StateManager.js:541
setValue @ 4011-StateManager.js:419
(anonymous) @ 4011-Section03.js:1689
calculateTargetModel @ 4011-Section03.js:1686
calculateAll @ 4011-Section03.js:1665
(anonymous) @ 4011-Section03.js:2057
4011-Section15.js:1750 [S15] 🎯 TGT S03 CLIMATE READ: h_23=18, d_23=-24, d_24=30, h_24=24
4011-StateManager.js:343 [StateManager] 🎯 h_10 setValue: "93.94895042448542" (state: calculated)
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
updateTargetModelDOMValues @ 4011-Section13.js:3641
calculateTargetModel @ 4011-Section13.js:3573
calculateAll @ 4011-Section13.js:3406
calculateAndRefresh @ 4011-Section13.js:2368
(anonymous) @ 4011-Section13.js:2399
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
(anonymous) @ 4011-Section10.js:2679
(anonymous) @ 4011-StateManager.js:543
notifyListeners @ 4011-StateManager.js:541
setValue @ 4011-StateManager.js:419
(anonymous) @ 4011-Section13.js:3765
storeReferenceResults @ 4011-Section13.js:3757
calculateReferenceModel @ 4011-Section13.js:3504
calculateAll @ 4011-Section13.js:3402
calculateAndRefresh @ 4011-Section13.js:2368
(anonymous) @ 4011-StateManager.js:543
notifyListeners @ 4011-StateManager.js:541
setValue @ 4011-StateManager.js:419
setValue @ 4011-Section10.js:230
calculateSubtotals @ 4011-Section10.js:2251
calculateTargetModel @ 4011-Section10.js:1847
calculateAll @ 4011-Section10.js:1824
(anonymous) @ 4011-Section10.js:2670
(anonymous) @ 4011-StateManager.js:543
notifyListeners @ 4011-StateManager.js:541
setValue @ 4011-StateManager.js:419
setValue @ 4011-Section03.js:212
setFieldValue @ 4011-Section03.js:450
(anonymous) @ 4011-Section03.js:2213
(anonymous) @ 4011-StateManager.js:543
notifyListeners @ 4011-StateManager.js:541
setValue @ 4011-StateManager.js:419
(anonymous) @ 4011-Section03.js:1689
calculateTargetModel @ 4011-Section03.js:1686
calculateAll @ 4011-Section03.js:1665
(anonymous) @ 4011-Section03.js:2057
4011-Section04.js:1018 [S04] Row 32 Subtotals - F32: 132938, G32: 6779.838, J32: 347966.051518286, K32: 17746.268627432586
4011-Section04.js:1668 [S04] Reference model calculations complete
4011-Section04.js:1674 [S04DB] storeReference: ref_j_32=347966.051518286, ref_k_32=17746.268627432586 | current target j_32=134083.9420458256, k_32=6838.281044337105
4011-Section04.js:493 [S04] 🔄 Updating calculated display values for target mode
4011-Section04.js:501 [S04DB] displayContext mode=target j_32=134083.9420458256 ref_j_32=347966.051518286 k_32=6838.281044337105 ref_k_32=17746.268627432586
4011-Section04.js:582 [S04 DEBUG] Target mode - j_32: 134083.9420458256
4011-Section04.js:582 [S04 DEBUG] Target mode - k_32: 6838.281044337105
4011-Section04.js:582 [S04 DEBUG] Target mode - l_27: 51
4011-Section04.js:617 [S04] Calculated display values updated for target mode
4011-Section04.js:1599 [S04] Dual-engine calculations completed successfully
4011-Section04.js:493 [S04] 🔄 Updating calculated display values for target mode
4011-Section04.js:501 [S04DB] displayContext mode=target j_32=134083.9420458256 ref_j_32=347966.051518286 k_32=6838.281044337105 ref_k_32=17746.268627432586
4011-Section04.js:582 [S04 DEBUG] Target mode - j_32: 134083.9420458256
4011-Section04.js:582 [S04 DEBUG] Target mode - k_32: 6838.281044337105
4011-Section04.js:582 [S04 DEBUG] Target mode - l_27: 51
4011-Section04.js:617 [S04] Calculated display values updated for target mode
4011-StateManager.js:343 [StateManager] 🎯 h_10 setValue: "93.94895042448542" (state: calculated)
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
updateTargetModelDOMValues @ 4011-Section13.js:3641
calculateTargetModel @ 4011-Section13.js:3573
calculateAll @ 4011-Section13.js:3406
calculateAndRefresh @ 4011-Section13.js:2368
(anonymous) @ 4011-Section13.js:2399
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
(anonymous) @ 4011-Section10.js:2679
(anonymous) @ 4011-StateManager.js:543
notifyListeners @ 4011-StateManager.js:541
setValue @ 4011-StateManager.js:419
(anonymous) @ 4011-Section13.js:3765
storeReferenceResults @ 4011-Section13.js:3757
calculateReferenceModel @ 4011-Section13.js:3504
calculateAll @ 4011-Section13.js:3402
calculateAndRefresh @ 4011-Section13.js:2368
(anonymous) @ 4011-StateManager.js:543
notifyListeners @ 4011-StateManager.js:541
setValue @ 4011-StateManager.js:419
setValue @ 4011-Section10.js:230
calculateSubtotals @ 4011-Section10.js:2251
calculateTargetModel @ 4011-Section10.js:1847
calculateAll @ 4011-Section10.js:1824
(anonymous) @ 4011-Section10.js:2670
(anonymous) @ 4011-StateManager.js:543
notifyListeners @ 4011-StateManager.js:541
setValue @ 4011-StateManager.js:419
setValue @ 4011-Section03.js:212
setFieldValue @ 4011-Section03.js:450
(anonymous) @ 4011-Section03.js:2213
(anonymous) @ 4011-StateManager.js:543
notifyListeners @ 4011-StateManager.js:541
setValue @ 4011-StateManager.js:419
(anonymous) @ 4011-Section03.js:1689
calculateTargetModel @ 4011-Section03.js:1686
calculateAll @ 4011-Section03.js:1665
(anonymous) @ 4011-Section03.js:2057
4011-Section15.js:1750 [S15] 🎯 TGT S03 CLIMATE READ: h_23=18, d_23=-24, d_24=30, h_24=24
4011-StateManager.js:343 [StateManager] 🎯 h_10 setValue: "93.94895042448542" (state: calculated)
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
updateTargetModelDOMValues @ 4011-Section13.js:3641
calculateTargetModel @ 4011-Section13.js:3573
calculateAll @ 4011-Section13.js:3406
calculateAndRefresh @ 4011-Section13.js:2368
(anonymous) @ 4011-Section13.js:2399
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
(anonymous) @ 4011-Section10.js:2679
(anonymous) @ 4011-StateManager.js:543
notifyListeners @ 4011-StateManager.js:541
setValue @ 4011-StateManager.js:419
(anonymous) @ 4011-Section13.js:3765
storeReferenceResults @ 4011-Section13.js:3757
calculateReferenceModel @ 4011-Section13.js:3504
calculateAll @ 4011-Section13.js:3402
calculateAndRefresh @ 4011-Section13.js:2368
(anonymous) @ 4011-StateManager.js:543
notifyListeners @ 4011-StateManager.js:541
setValue @ 4011-StateManager.js:419
setValue @ 4011-Section10.js:230
calculateSubtotals @ 4011-Section10.js:2251
calculateTargetModel @ 4011-Section10.js:1847
calculateAll @ 4011-Section10.js:1824
(anonymous) @ 4011-Section10.js:2670
(anonymous) @ 4011-StateManager.js:543
notifyListeners @ 4011-StateManager.js:541
setValue @ 4011-StateManager.js:419
setValue @ 4011-Section03.js:212
setFieldValue @ 4011-Section03.js:450
(anonymous) @ 4011-Section03.js:2213
(anonymous) @ 4011-StateManager.js:543
notifyListeners @ 4011-StateManager.js:541
setValue @ 4011-StateManager.js:419
(anonymous) @ 4011-Section03.js:1689
calculateTargetModel @ 4011-Section03.js:1686
calculateAll @ 4011-Section03.js:1665
(anonymous) @ 4011-Section03.js:2057
4011-Section13.js:3591 [Section13] Target Model calculations complete
4011-Section13.js:3407 [Section13] ✅ Target Model complete
4011-Section13.js:3418 [Section13] 🔄 Re-writing Reference results to prevent race conditions...
4011-Section15.js:1750 [S15] 🎯 TGT S03 CLIMATE READ: h_23=18, d_23=-24, d_24=30, h_24=24
4011-StateManager.js:343 [StateManager] 🎯 h_10 setValue: "93.94895042448542" (state: calculated)
4011-StateManager.js:346 [StateManager] h_10 setValue stack trace:
setValue @ 4011-StateManager.js:346
calculateValues @ 4011-Section15.js:1832
calculateTargetModel @ 4011-Section15.js:1662
calculateAll @ 4011-Section15.js:1328
(anonymous) @ 4011-Section15.js:2121
(anonymous) @ 4011-StateManager.js:543
notifyListeners @ 4011-StateManager.js:541
setValue @ 4011-StateManager.js:419
(anonymous) @ 4011-Section13.js:3423
calculateAll @ 4011-Section13.js:3421
calculateAndRefresh @ 4011-Section13.js:2368
(anonymous) @ 4011-Section13.js:2399
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
(anonymous) @ 4011-Section10.js:2679
(anonymous) @ 4011-StateManager.js:543
notifyListeners @ 4011-StateManager.js:541
setValue @ 4011-StateManager.js:419
(anonymous) @ 4011-Section13.js:3765
storeReferenceResults @ 4011-Section13.js:3757
calculateReferenceModel @ 4011-Section13.js:3504
calculateAll @ 4011-Section13.js:3402
calculateAndRefresh @ 4011-Section13.js:2368
(anonymous) @ 4011-StateManager.js:543
notifyListeners @ 4011-StateManager.js:541
setValue @ 4011-StateManager.js:419
setValue @ 4011-Section10.js:230
calculateSubtotals @ 4011-Section10.js:2251
calculateTargetModel @ 4011-Section10.js:1847
calculateAll @ 4011-Section10.js:1824
(anonymous) @ 4011-Section10.js:2670
(anonymous) @ 4011-StateManager.js:543
notifyListeners @ 4011-StateManager.js:541
setValue @ 4011-StateManager.js:419
setValue @ 4011-Section03.js:212
setFieldValue @ 4011-Section03.js:450
(anonymous) @ 4011-Section03.js:2213
(anonymous) @ 4011-StateManager.js:543
notifyListeners @ 4011-StateManager.js:541
setValue @ 4011-StateManager.js:419
(anonymous) @ 4011-Section03.js:1689
calculateTargetModel @ 4011-Section03.js:1686
calculateAll @ 4011-Section03.js:1665
(anonymous) @ 4011-Section03.js:2057
4011-Section15.js:1750 [S15] 🎯 TGT S03 CLIMATE READ: h_23=18, d_23=-24, d_24=30, h_24=24
4011-StateManager.js:343 [StateManager] 🎯 h_10 setValue: "93.94895042448542" (state: calculated)
4011-StateManager.js:346 [StateManager] h_10 setValue stack trace:
setValue @ 4011-StateManager.js:346
calculateValues @ 4011-Section15.js:1832
calculateTargetModel @ 4011-Section15.js:1662
calculateAll @ 4011-Section15.js:1328
(anonymous) @ 4011-Section15.js:2121
(anonymous) @ 4011-StateManager.js:543
notifyListeners @ 4011-StateManager.js:541
setValue @ 4011-StateManager.js:419
(anonymous) @ 4011-Section13.js:3423
calculateAll @ 4011-Section13.js:3421
calculateAndRefresh @ 4011-Section13.js:2368
(anonymous) @ 4011-Section13.js:2399
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
(anonymous) @ 4011-Section10.js:2679
(anonymous) @ 4011-StateManager.js:543
notifyListeners @ 4011-StateManager.js:541
setValue @ 4011-StateManager.js:419
(anonymous) @ 4011-Section13.js:3765
storeReferenceResults @ 4011-Section13.js:3757
calculateReferenceModel @ 4011-Section13.js:3504
calculateAll @ 4011-Section13.js:3402
calculateAndRefresh @ 4011-Section13.js:2368
(anonymous) @ 4011-StateManager.js:543
notifyListeners @ 4011-StateManager.js:541
setValue @ 4011-StateManager.js:419
setValue @ 4011-Section10.js:230
calculateSubtotals @ 4011-Section10.js:2251
calculateTargetModel @ 4011-Section10.js:1847
calculateAll @ 4011-Section10.js:1824
(anonymous) @ 4011-Section10.js:2670
(anonymous) @ 4011-StateManager.js:543
notifyListeners @ 4011-StateManager.js:541
setValue @ 4011-StateManager.js:419
setValue @ 4011-Section03.js:212
setFieldValue @ 4011-Section03.js:450
(anonymous) @ 4011-Section03.js:2213
(anonymous) @ 4011-StateManager.js:543
notifyListeners @ 4011-StateManager.js:541
setValue @ 4011-StateManager.js:419
(anonymous) @ 4011-Section03.js:1689
calculateTargetModel @ 4011-Section03.js:1686
calculateAll @ 4011-Section03.js:1665
(anonymous) @ 4011-Section03.js:2057
4011-Section15.js:1750 [S15] 🎯 TGT S03 CLIMATE READ: h_23=18, d_23=-24, d_24=30, h_24=24
4011-StateManager.js:343 [StateManager] 🎯 h_10 setValue: "93.94895042448542" (state: calculated)
4011-StateManager.js:346 [StateManager] h_10 setValue stack trace:
setValue @ 4011-StateManager.js:346
calculateValues @ 4011-Section15.js:1832
calculateTargetModel @ 4011-Section15.js:1662
calculateAll @ 4011-Section15.js:1328
(anonymous) @ 4011-Section15.js:2121
(anonymous) @ 4011-StateManager.js:543
notifyListeners @ 4011-StateManager.js:541
setValue @ 4011-StateManager.js:419
(anonymous) @ 4011-Section13.js:3423
calculateAll @ 4011-Section13.js:3421
calculateAndRefresh @ 4011-Section13.js:2368
(anonymous) @ 4011-Section13.js:2399
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
(anonymous) @ 4011-Section10.js:2679
(anonymous) @ 4011-StateManager.js:543
notifyListeners @ 4011-StateManager.js:541
setValue @ 4011-StateManager.js:419
(anonymous) @ 4011-Section13.js:3765
storeReferenceResults @ 4011-Section13.js:3757
calculateReferenceModel @ 4011-Section13.js:3504
calculateAll @ 4011-Section13.js:3402
calculateAndRefresh @ 4011-Section13.js:2368
(anonymous) @ 4011-StateManager.js:543
notifyListeners @ 4011-StateManager.js:541
setValue @ 4011-StateManager.js:419
setValue @ 4011-Section10.js:230
calculateSubtotals @ 4011-Section10.js:2251
calculateTargetModel @ 4011-Section10.js:1847
calculateAll @ 4011-Section10.js:1824
(anonymous) @ 4011-Section10.js:2670
(anonymous) @ 4011-StateManager.js:543
notifyListeners @ 4011-StateManager.js:541
setValue @ 4011-StateManager.js:419
setValue @ 4011-Section03.js:212
setFieldValue @ 4011-Section03.js:450
(anonymous) @ 4011-Section03.js:2213
(anonymous) @ 4011-StateManager.js:543
notifyListeners @ 4011-StateManager.js:541
setValue @ 4011-StateManager.js:419
(anonymous) @ 4011-Section03.js:1689
calculateTargetModel @ 4011-Section03.js:1686
calculateAll @ 4011-Section03.js:1665
(anonymous) @ 4011-Section03.js:2057
4011-Section15.js:1750 [S15] 🎯 TGT S03 CLIMATE READ: h_23=18, d_23=-24, d_24=30, h_24=24
4011-StateManager.js:343 [StateManager] 🎯 h_10 setValue: "93.94895042448542" (state: calculated)
4011-StateManager.js:346 [StateManager] h_10 setValue stack trace:
setValue @ 4011-StateManager.js:346
calculateValues @ 4011-Section15.js:1832
calculateTargetModel @ 4011-Section15.js:1662
calculateAll @ 4011-Section15.js:1328
(anonymous) @ 4011-Section15.js:2121
(anonymous) @ 4011-StateManager.js:543
notifyListeners @ 4011-StateManager.js:541
setValue @ 4011-StateManager.js:419
(anonymous) @ 4011-Section13.js:3423
calculateAll @ 4011-Section13.js:3421
calculateAndRefresh @ 4011-Section13.js:2368
(anonymous) @ 4011-Section13.js:2399
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
(anonymous) @ 4011-Section10.js:2679
(anonymous) @ 4011-StateManager.js:543
notifyListeners @ 4011-StateManager.js:541
setValue @ 4011-StateManager.js:419
(anonymous) @ 4011-Section13.js:3765
storeReferenceResults @ 4011-Section13.js:3757
calculateReferenceModel @ 4011-Section13.js:3504
calculateAll @ 4011-Section13.js:3402
calculateAndRefresh @ 4011-Section13.js:2368
(anonymous) @ 4011-StateManager.js:543
notifyListeners @ 4011-StateManager.js:541
setValue @ 4011-StateManager.js:419
setValue @ 4011-Section10.js:230
calculateSubtotals @ 4011-Section10.js:2251
calculateTargetModel @ 4011-Section10.js:1847
calculateAll @ 4011-Section10.js:1824
(anonymous) @ 4011-Section10.js:2670
(anonymous) @ 4011-StateManager.js:543
notifyListeners @ 4011-StateManager.js:541
setValue @ 4011-StateManager.js:419
setValue @ 4011-Section03.js:212
setFieldValue @ 4011-Section03.js:450
(anonymous) @ 4011-Section03.js:2213
(anonymous) @ 4011-StateManager.js:543
notifyListeners @ 4011-StateManager.js:541
setValue @ 4011-StateManager.js:419
(anonymous) @ 4011-Section03.js:1689
calculateTargetModel @ 4011-Section03.js:1686
calculateAll @ 4011-Section03.js:1665
(anonymous) @ 4011-Section03.js:2057
4011-Section04.js:2713 [S04] S13 space oil volume changed (Reference): ref_f_115
4011-Section04.js:1018 [S04] Row 32 Subtotals - F32: 132938, G32: 6779.838, J32: 347966.051518286, K32: 17746.268627432586
4011-Section04.js:1668 [S04] Reference model calculations complete
4011-Section04.js:1674 [S04DB] storeReference: ref_j_32=347966.051518286, ref_k_32=17746.268627432586 | current target j_32=134083.9420458256, k_32=6838.281044337105
4011-Section04.js:493 [S04] 🔄 Updating calculated display values for target mode
4011-Section04.js:501 [S04DB] displayContext mode=target j_32=134083.9420458256 ref_j_32=347966.051518286 k_32=6838.281044337105 ref_k_32=17746.268627432586
4011-Section04.js:582 [S04 DEBUG] Target mode - j_32: 134083.9420458256
4011-Section04.js:582 [S04 DEBUG] Target mode - k_32: 6838.281044337105
4011-Section04.js:582 [S04 DEBUG] Target mode - l_27: 51
4011-Section04.js:617 [S04] Calculated display values updated for target mode
4011-Section04.js:2721 [S04] S13 space gas volume changed (Reference): ref_h_115
4011-Section04.js:1018 [S04] Row 32 Subtotals - F32: 132938, G32: 6779.838, J32: 347966.051518286, K32: 17746.268627432586
4011-Section04.js:1668 [S04] Reference model calculations complete
4011-Section04.js:1674 [S04DB] storeReference: ref_j_32=347966.051518286, ref_k_32=17746.268627432586 | current target j_32=134083.9420458256, k_32=6838.281044337105
4011-Section04.js:493 [S04] 🔄 Updating calculated display values for target mode
4011-Section04.js:501 [S04DB] displayContext mode=target j_32=134083.9420458256 ref_j_32=347966.051518286 k_32=6838.281044337105 ref_k_32=17746.268627432586
4011-Section04.js:582 [S04 DEBUG] Target mode - j_32: 134083.9420458256
4011-Section04.js:582 [S04 DEBUG] Target mode - k_32: 6838.281044337105
4011-Section04.js:582 [S04 DEBUG] Target mode - l_27: 51
4011-Section04.js:617 [S04] Calculated display values updated for target mode
4011-Section15.js:1750 [S15] 🎯 TGT S03 CLIMATE READ: h_23=18, d_23=-24, d_24=30, h_24=24
4011-StateManager.js:343 [StateManager] 🎯 h_10 setValue: "93.94895042448542" (state: calculated)
4011-StateManager.js:346 [StateManager] h_10 setValue stack trace:
setValue @ 4011-StateManager.js:346
calculateValues @ 4011-Section15.js:1832
calculateTargetModel @ 4011-Section15.js:1662
calculateAll @ 4011-Section15.js:1328
(anonymous) @ 4011-Section15.js:2121
(anonymous) @ 4011-StateManager.js:543
notifyListeners @ 4011-StateManager.js:541
setValue @ 4011-StateManager.js:419
(anonymous) @ 4011-Section13.js:3423
calculateAll @ 4011-Section13.js:3421
calculateAndRefresh @ 4011-Section13.js:2368
(anonymous) @ 4011-Section13.js:2399
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
(anonymous) @ 4011-Section10.js:2679
(anonymous) @ 4011-StateManager.js:543
notifyListeners @ 4011-StateManager.js:541
setValue @ 4011-StateManager.js:419
(anonymous) @ 4011-Section13.js:3765
storeReferenceResults @ 4011-Section13.js:3757
calculateReferenceModel @ 4011-Section13.js:3504
calculateAll @ 4011-Section13.js:3402
calculateAndRefresh @ 4011-Section13.js:2368
(anonymous) @ 4011-StateManager.js:543
notifyListeners @ 4011-StateManager.js:541
setValue @ 4011-StateManager.js:419
setValue @ 4011-Section10.js:230
calculateSubtotals @ 4011-Section10.js:2251
calculateTargetModel @ 4011-Section10.js:1847
calculateAll @ 4011-Section10.js:1824
(anonymous) @ 4011-Section10.js:2670
(anonymous) @ 4011-StateManager.js:543
notifyListeners @ 4011-StateManager.js:541
setValue @ 4011-StateManager.js:419
setValue @ 4011-Section03.js:212
setFieldValue @ 4011-Section03.js:450
(anonymous) @ 4011-Section03.js:2213
(anonymous) @ 4011-StateManager.js:543
notifyListeners @ 4011-StateManager.js:541
setValue @ 4011-StateManager.js:419
(anonymous) @ 4011-Section03.js:1689
calculateTargetModel @ 4011-Section03.js:1686
calculateAll @ 4011-Section03.js:1665
(anonymous) @ 4011-Section03.js:2057
4011-Section15.js:1750 [S15] 🎯 TGT S03 CLIMATE READ: h_23=18, d_23=-24, d_24=30, h_24=24
4011-StateManager.js:343 [StateManager] 🎯 h_10 setValue: "93.94895042448542" (state: calculated)
4011-StateManager.js:346 [StateManager] h_10 setValue stack trace:
setValue @ 4011-StateManager.js:346
calculateValues @ 4011-Section15.js:1832
calculateTargetModel @ 4011-Section15.js:1662
calculateAll @ 4011-Section15.js:1328
(anonymous) @ 4011-Section15.js:2121
(anonymous) @ 4011-StateManager.js:543
notifyListeners @ 4011-StateManager.js:541
setValue @ 4011-StateManager.js:419
(anonymous) @ 4011-Section13.js:3423
calculateAll @ 4011-Section13.js:3421
calculateAndRefresh @ 4011-Section13.js:2368
(anonymous) @ 4011-Section13.js:2399
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
(anonymous) @ 4011-Section10.js:2679
(anonymous) @ 4011-StateManager.js:543
notifyListeners @ 4011-StateManager.js:541
setValue @ 4011-StateManager.js:419
(anonymous) @ 4011-Section13.js:3765
storeReferenceResults @ 4011-Section13.js:3757
calculateReferenceModel @ 4011-Section13.js:3504
calculateAll @ 4011-Section13.js:3402
calculateAndRefresh @ 4011-Section13.js:2368
(anonymous) @ 4011-StateManager.js:543
notifyListeners @ 4011-StateManager.js:541
setValue @ 4011-StateManager.js:419
setValue @ 4011-Section10.js:230
calculateSubtotals @ 4011-Section10.js:2251
calculateTargetModel @ 4011-Section10.js:1847
calculateAll @ 4011-Section10.js:1824
(anonymous) @ 4011-Section10.js:2670
(anonymous) @ 4011-StateManager.js:543
notifyListeners @ 4011-StateManager.js:541
setValue @ 4011-StateManager.js:419
setValue @ 4011-Section03.js:212
setFieldValue @ 4011-Section03.js:450
(anonymous) @ 4011-Section03.js:2213
(anonymous) @ 4011-StateManager.js:543
notifyListeners @ 4011-StateManager.js:541
setValue @ 4011-StateManager.js:419
(anonymous) @ 4011-Section03.js:1689
calculateTargetModel @ 4011-Section03.js:1686
calculateAll @ 4011-Section03.js:1665
(anonymous) @ 4011-Section03.js:2057
4011-Section15.js:1750 [S15] 🎯 TGT S03 CLIMATE READ: h_23=18, d_23=-24, d_24=30, h_24=24
4011-StateManager.js:343 [StateManager] 🎯 h_10 setValue: "93.94895042448542" (state: calculated)
4011-StateManager.js:346 [StateManager] h_10 setValue stack trace:
setValue @ 4011-StateManager.js:346
calculateValues @ 4011-Section15.js:1832
calculateTargetModel @ 4011-Section15.js:1662
calculateAll @ 4011-Section15.js:1328
(anonymous) @ 4011-Section15.js:2121
(anonymous) @ 4011-StateManager.js:543
notifyListeners @ 4011-StateManager.js:541
setValue @ 4011-StateManager.js:419
(anonymous) @ 4011-Section13.js:3423
calculateAll @ 4011-Section13.js:3421
calculateAndRefresh @ 4011-Section13.js:2368
(anonymous) @ 4011-Section13.js:2399
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
(anonymous) @ 4011-Section10.js:2679
(anonymous) @ 4011-StateManager.js:543
notifyListeners @ 4011-StateManager.js:541
setValue @ 4011-StateManager.js:419
(anonymous) @ 4011-Section13.js:3765
storeReferenceResults @ 4011-Section13.js:3757
calculateReferenceModel @ 4011-Section13.js:3504
calculateAll @ 4011-Section13.js:3402
calculateAndRefresh @ 4011-Section13.js:2368
(anonymous) @ 4011-StateManager.js:543
notifyListeners @ 4011-StateManager.js:541
setValue @ 4011-StateManager.js:419
setValue @ 4011-Section10.js:230
calculateSubtotals @ 4011-Section10.js:2251
calculateTargetModel @ 4011-Section10.js:1847
calculateAll @ 4011-Section10.js:1824
(anonymous) @ 4011-Section10.js:2670
(anonymous) @ 4011-StateManager.js:543
notifyListeners @ 4011-StateManager.js:541
setValue @ 4011-StateManager.js:419
setValue @ 4011-Section03.js:212
setFieldValue @ 4011-Section03.js:450
(anonymous) @ 4011-Section03.js:2213
(anonymous) @ 4011-StateManager.js:543
notifyListeners @ 4011-StateManager.js:541
setValue @ 4011-StateManager.js:419
(anonymous) @ 4011-Section03.js:1689
calculateTargetModel @ 4011-Section03.js:1686
calculateAll @ 4011-Section03.js:1665
(anonymous) @ 4011-Section03.js:2057
4011-Section15.js:1750 [S15] 🎯 TGT S03 CLIMATE READ: h_23=18, d_23=-24, d_24=30, h_24=24
4011-StateManager.js:343 [StateManager] 🎯 h_10 setValue: "93.94895042448542" (state: calculated)
4011-StateManager.js:346 [StateManager] h_10 setValue stack trace:
setValue @ 4011-StateManager.js:346
calculateValues @ 4011-Section15.js:1832
calculateTargetModel @ 4011-Section15.js:1662
calculateAll @ 4011-Section15.js:1328
(anonymous) @ 4011-Section15.js:2121
(anonymous) @ 4011-StateManager.js:543
notifyListeners @ 4011-StateManager.js:541
setValue @ 4011-StateManager.js:419
(anonymous) @ 4011-Section13.js:3423
calculateAll @ 4011-Section13.js:3421
calculateAndRefresh @ 4011-Section13.js:2368
(anonymous) @ 4011-Section13.js:2399
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
(anonymous) @ 4011-Section10.js:2679
(anonymous) @ 4011-StateManager.js:543
notifyListeners @ 4011-StateManager.js:541
setValue @ 4011-StateManager.js:419
(anonymous) @ 4011-Section13.js:3765
storeReferenceResults @ 4011-Section13.js:3757
calculateReferenceModel @ 4011-Section13.js:3504
calculateAll @ 4011-Section13.js:3402
calculateAndRefresh @ 4011-Section13.js:2368
(anonymous) @ 4011-StateManager.js:543
notifyListeners @ 4011-StateManager.js:541
setValue @ 4011-StateManager.js:419
setValue @ 4011-Section10.js:230
calculateSubtotals @ 4011-Section10.js:2251
calculateTargetModel @ 4011-Section10.js:1847
calculateAll @ 4011-Section10.js:1824
(anonymous) @ 4011-Section10.js:2670
(anonymous) @ 4011-StateManager.js:543
notifyListeners @ 4011-StateManager.js:541
setValue @ 4011-StateManager.js:419
setValue @ 4011-Section03.js:212
setFieldValue @ 4011-Section03.js:450
(anonymous) @ 4011-Section03.js:2213
(anonymous) @ 4011-StateManager.js:543
notifyListeners @ 4011-StateManager.js:541
setValue @ 4011-StateManager.js:419
(anonymous) @ 4011-Section03.js:1689
calculateTargetModel @ 4011-Section03.js:1686
calculateAll @ 4011-Section03.js:1665
(anonymous) @ 4011-Section03.js:2057
4011-Section10.js:2676 S10: Reference listener triggered by ref_m_121, recalculating all.
4011-Section10.js:1819 [S10 DEBUG] calculateAll() triggered in target mode - running both engines
4011-Section10.js:2040 [S10REF] Utilization calc: ref_i_71=110562.1692, ref_i_79=10060.174319999998, totalGains=120622.34352
4011-Section10.js:2054 [S10REF] Using utilization method: NRC 40%
4011-Section10.js:2091 [S10REF] Final calc: utilizationFactor=0.4, usableGains=48248.937408
4011-Section10.js:2134 [S10REF] Complete: g_80=0.4, g_81=0.9966231765247549, i_80=48248.937408, i_81=120215.02315876257
4011-Section10.js:1827 [S10 DEBUG] Dual-engine calculations complete in target mode
4011-Section10.js:341 [S10DISPLAY] updateCalculatedDisplayValues() called in target mode
4011-Section10.js:448 [S10DISPLAY] Display (target) m_73 = 24.84
4011-Section10.js:448 [S10DISPLAY] Display (target) m_74 = 0.19
4011-Section10.js:448 [S10DISPLAY] Display (target) m_75 = 2.09
4011-Section10.js:448 [S10DISPLAY] Display (target) m_76 = 24.76
4011-Section10.js:448 [S10DISPLAY] Display (target) m_77 = 64.37
4011-Section10.js:448 [S10DISPLAY] Display (target) m_78 = 25.00
4011-Section10.js:448 [S10DISPLAY] Display (target) i_73 = 186.30
4011-Section10.js:448 [S10DISPLAY] Display (target) i_74 = 15.42
4011-Section10.js:448 [S10DISPLAY] Display (target) i_75 = 8.00
4011-Section10.js:448 [S10DISPLAY] Display (target) i_76 = 3,936.84
4011-Section10.js:448 [S10DISPLAY] Display (target) i_77 = 6,479.48
4011-Section10.js:448 [S10DISPLAY] Display (target) i_78 = 0.00
4011-Section10.js:448 [S10DISPLAY] Display (target) i_79 = 10,626.05
4011-Section10.js:448 [S10DISPLAY] Display (target) k_73 = 0.00
4011-Section10.js:448 [S10DISPLAY] Display (target) k_74 = 0.00
4011-Section10.js:448 [S10DISPLAY] Display (target) k_75 = 0.00
4011-Section10.js:448 [S10DISPLAY] Display (target) k_76 = 0.00
4011-Section10.js:448 [S10DISPLAY] Display (target) k_77 = 323.97
4011-Section10.js:448 [S10DISPLAY] Display (target) k_78 = 0.00
4011-Section10.js:448 [S10DISPLAY] Display (target) k_79 = 323.97
4011-Section10.js:448 [S10DISPLAY] Display (target) j_73 = 1.75%
4011-Section10.js:448 [S10DISPLAY] Display (target) j_74 = 0.15%
4011-Section10.js:448 [S10DISPLAY] Display (target) j_75 = 0.08%
4011-Section10.js:448 [S10DISPLAY] Display (target) j_76 = 37.05%
4011-Section10.js:448 [S10DISPLAY] Display (target) j_77 = 60.98%
4011-Section10.js:448 [S10DISPLAY] Display (target) j_78 = 0.00%
4011-Section10.js:448 [S10DISPLAY] Display (target) j_79 = 100.00%
4011-Section10.js:448 [S10DISPLAY] Display (target) l_73 = 0.00%
4011-Section10.js:448 [S10DISPLAY] Display (target) l_74 = 0.00%
4011-Section10.js:448 [S10DISPLAY] Display (target) l_75 = 0.00%
4011-Section10.js:448 [S10DISPLAY] Display (target) l_76 = 0.00%
4011-Section10.js:448 [S10DISPLAY] Display (target) l_77 = 100.00%
4011-Section10.js:448 [S10DISPLAY] Display (target) l_78 = 0.00%
4011-Section10.js:448 [S10DISPLAY] Display (target) l_79 = 100.00%
4011-Section10.js:448 [S10DISPLAY] Display (target) e_80 = 110,698.29
4011-Section10.js:448 [S10DISPLAY] Display (target) e_81 = 110,698.29
4011-Section10.js:415 [S10DISPLAY] g_80 DEBUG: mode=target, valueToDisplay=0.4
4011-Section10.js:448 [S10DISPLAY] Display (target) g_80 = 40.00%
4011-Section10.js:448 [S10DISPLAY] Display (target) g_81 = 97.18%
4011-Section10.js:448 [S10DISPLAY] Display (target) i_80 = 44,279.32
4011-Section10.js:448 [S10DISPLAY] Display (target) i_81 = 107,577.48
4011-Section10.js:448 [S10DISPLAY] Display (target) i_82 = 66,418.98
4011-Section10.js:2697 S10: Reference utilization factor dependency ref_m_121 changed.
4011-Section10.js:341 [S10DISPLAY] updateCalculatedDisplayValues() called in target mode
4011-Section10.js:448 [S10DISPLAY] Display (target) m_73 = 24.84
4011-Section10.js:448 [S10DISPLAY] Display (target) m_74 = 0.19
4011-Section10.js:448 [S10DISPLAY] Display (target) m_75 = 2.09
4011-Section10.js:448 [S10DISPLAY] Display (target) m_76 = 24.76
4011-Section10.js:448 [S10DISPLAY] Display (target) m_77 = 64.37
4011-Section10.js:448 [S10DISPLAY] Display (target) m_78 = 25.00
4011-Section10.js:448 [S10DISPLAY] Display (target) i_73 = 186.30
4011-Section10.js:448 [S10DISPLAY] Display (target) i_74 = 15.42
4011-Section10.js:448 [S10DISPLAY] Display (target) i_75 = 8.00
4011-Section10.js:448 [S10DISPLAY] Display (target) i_76 = 3,936.84
4011-Section10.js:448 [S10DISPLAY] Display (target) i_77 = 6,479.48
4011-Section10.js:448 [S10DISPLAY] Display (target) i_78 = 0.00
4011-Section10.js:448 [S10DISPLAY] Display (target) i_79 = 10,626.05
4011-Section10.js:448 [S10DISPLAY] Display (target) k_73 = 0.00
4011-Section10.js:448 [S10DISPLAY] Display (target) k_74 = 0.00
4011-Section10.js:448 [S10DISPLAY] Display (target) k_75 = 0.00
4011-Section10.js:448 [S10DISPLAY] Display (target) k_76 = 0.00
4011-Section10.js:448 [S10DISPLAY] Display (target) k_77 = 323.97
4011-Section10.js:448 [S10DISPLAY] Display (target) k_78 = 0.00
4011-Section10.js:448 [S10DISPLAY] Display (target) k_79 = 323.97
4011-Section10.js:448 [S10DISPLAY] Display (target) j_73 = 1.75%
4011-Section10.js:448 [S10DISPLAY] Display (target) j_74 = 0.15%
4011-Section10.js:448 [S10DISPLAY] Display (target) j_75 = 0.08%
4011-Section10.js:448 [S10DISPLAY] Display (target) j_76 = 37.05%
4011-Section10.js:448 [S10DISPLAY] Display (target) j_77 = 60.98%
4011-Section10.js:448 [S10DISPLAY] Display (target) j_78 = 0.00%
4011-Section10.js:448 [S10DISPLAY] Display (target) j_79 = 100.00%
4011-Section10.js:448 [S10DISPLAY] Display (target) l_73 = 0.00%
4011-Section10.js:448 [S10DISPLAY] Display (target) l_74 = 0.00%
4011-Section10.js:448 [S10DISPLAY] Display (target) l_75 = 0.00%
4011-Section10.js:448 [S10DISPLAY] Display (target) l_76 = 0.00%
4011-Section10.js:448 [S10DISPLAY] Display (target) l_77 = 100.00%
4011-Section10.js:448 [S10DISPLAY] Display (target) l_78 = 0.00%
4011-Section10.js:448 [S10DISPLAY] Display (target) l_79 = 100.00%
4011-Section10.js:448 [S10DISPLAY] Display (target) e_80 = 110,698.29
4011-Section10.js:448 [S10DISPLAY] Display (target) e_81 = 110,698.29
4011-Section10.js:415 [S10DISPLAY] g_80 DEBUG: mode=target, valueToDisplay=0.4
4011-Section10.js:448 [S10DISPLAY] Display (target) g_80 = 40.00%
4011-Section10.js:448 [S10DISPLAY] Display (target) g_81 = 97.18%
4011-Section10.js:448 [S10DISPLAY] Display (target) i_80 = 44,279.32
4011-Section10.js:448 [S10DISPLAY] Display (target) i_81 = 107,577.48
4011-Section10.js:448 [S10DISPLAY] Display (target) i_82 = 66,418.98
4011-Section15.js:1750 [S15] 🎯 TGT S03 CLIMATE READ: h_23=18, d_23=-24, d_24=30, h_24=24
4011-StateManager.js:343 [StateManager] 🎯 h_10 setValue: "93.94895042448542" (state: calculated)
4011-StateManager.js:346 [StateManager] h_10 setValue stack trace:
setValue @ 4011-StateManager.js:346
calculateValues @ 4011-Section15.js:1832
calculateTargetModel @ 4011-Section15.js:1662
calculateAll @ 4011-Section15.js:1328
(anonymous) @ 4011-Section15.js:2121
(anonymous) @ 4011-StateManager.js:543
notifyListeners @ 4011-StateManager.js:541
setValue @ 4011-StateManager.js:419
(anonymous) @ 4011-Section13.js:3423
calculateAll @ 4011-Section13.js:3421
calculateAndRefresh @ 4011-Section13.js:2368
(anonymous) @ 4011-Section13.js:2399
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
(anonymous) @ 4011-Section10.js:2679
(anonymous) @ 4011-StateManager.js:543
notifyListeners @ 4011-StateManager.js:541
setValue @ 4011-StateManager.js:419
(anonymous) @ 4011-Section13.js:3765
storeReferenceResults @ 4011-Section13.js:3757
calculateReferenceModel @ 4011-Section13.js:3504
calculateAll @ 4011-Section13.js:3402
calculateAndRefresh @ 4011-Section13.js:2368
(anonymous) @ 4011-StateManager.js:543
notifyListeners @ 4011-StateManager.js:541
setValue @ 4011-StateManager.js:419
setValue @ 4011-Section10.js:230
calculateSubtotals @ 4011-Section10.js:2251
calculateTargetModel @ 4011-Section10.js:1847
calculateAll @ 4011-Section10.js:1824
(anonymous) @ 4011-Section10.js:2670
(anonymous) @ 4011-StateManager.js:543
notifyListeners @ 4011-StateManager.js:541
setValue @ 4011-StateManager.js:419
setValue @ 4011-Section03.js:212
setFieldValue @ 4011-Section03.js:450
(anonymous) @ 4011-Section03.js:2213
(anonymous) @ 4011-StateManager.js:543
notifyListeners @ 4011-StateManager.js:541
setValue @ 4011-StateManager.js:419
(anonymous) @ 4011-Section03.js:1689
calculateTargetModel @ 4011-Section03.js:1686
calculateAll @ 4011-Section03.js:1665
(anonymous) @ 4011-Section03.js:2057
4011-Section15.js:1750 [S15] 🎯 TGT S03 CLIMATE READ: h_23=18, d_23=-24, d_24=30, h_24=24
4011-StateManager.js:343 [StateManager] 🎯 h_10 setValue: "93.94895042448542" (state: calculated)
4011-StateManager.js:346 [StateManager] h_10 setValue stack trace:
setValue @ 4011-StateManager.js:346
calculateValues @ 4011-Section15.js:1832
calculateTargetModel @ 4011-Section15.js:1662
calculateAll @ 4011-Section15.js:1328
(anonymous) @ 4011-Section15.js:2121
(anonymous) @ 4011-StateManager.js:543
notifyListeners @ 4011-StateManager.js:541
setValue @ 4011-StateManager.js:419
(anonymous) @ 4011-Section13.js:3423
calculateAll @ 4011-Section13.js:3421
calculateAndRefresh @ 4011-Section13.js:2368
(anonymous) @ 4011-Section13.js:2399
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
(anonymous) @ 4011-Section10.js:2679
(anonymous) @ 4011-StateManager.js:543
notifyListeners @ 4011-StateManager.js:541
setValue @ 4011-StateManager.js:419
(anonymous) @ 4011-Section13.js:3765
storeReferenceResults @ 4011-Section13.js:3757
calculateReferenceModel @ 4011-Section13.js:3504
calculateAll @ 4011-Section13.js:3402
calculateAndRefresh @ 4011-Section13.js:2368
(anonymous) @ 4011-StateManager.js:543
notifyListeners @ 4011-StateManager.js:541
setValue @ 4011-StateManager.js:419
setValue @ 4011-Section10.js:230
calculateSubtotals @ 4011-Section10.js:2251
calculateTargetModel @ 4011-Section10.js:1847
calculateAll @ 4011-Section10.js:1824
(anonymous) @ 4011-Section10.js:2670
(anonymous) @ 4011-StateManager.js:543
notifyListeners @ 4011-StateManager.js:541
setValue @ 4011-StateManager.js:419
setValue @ 4011-Section03.js:212
setFieldValue @ 4011-Section03.js:450
(anonymous) @ 4011-Section03.js:2213
(anonymous) @ 4011-StateManager.js:543
notifyListeners @ 4011-StateManager.js:541
setValue @ 4011-StateManager.js:419
(anonymous) @ 4011-Section03.js:1689
calculateTargetModel @ 4011-Section03.js:1686
calculateAll @ 4011-Section03.js:1665
(anonymous) @ 4011-Section03.js:2057
24011-Section14.js:1416 [S14 LISTENER] 🔥 ref_d_122 changed - triggering calculateAll() + UI update
4011-Section15.js:1750 [S15] 🎯 TGT S03 CLIMATE READ: h_23=18, d_23=-24, d_24=30, h_24=24
4011-StateManager.js:343 [StateManager] 🎯 h_10 setValue: "93.94895042448542" (state: calculated)
4011-StateManager.js:346 [StateManager] h_10 setValue stack trace:
setValue @ 4011-StateManager.js:346
calculateValues @ 4011-Section15.js:1832
calculateTargetModel @ 4011-Section15.js:1662
calculateAll @ 4011-Section15.js:1328
(anonymous) @ 4011-Section15.js:2121
(anonymous) @ 4011-StateManager.js:543
notifyListeners @ 4011-StateManager.js:541
setValue @ 4011-StateManager.js:419
(anonymous) @ 4011-Section13.js:3423
calculateAll @ 4011-Section13.js:3421
calculateAndRefresh @ 4011-Section13.js:2368
(anonymous) @ 4011-Section13.js:2399
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
(anonymous) @ 4011-Section10.js:2679
(anonymous) @ 4011-StateManager.js:543
notifyListeners @ 4011-StateManager.js:541
setValue @ 4011-StateManager.js:419
(anonymous) @ 4011-Section13.js:3765
storeReferenceResults @ 4011-Section13.js:3757
calculateReferenceModel @ 4011-Section13.js:3504
calculateAll @ 4011-Section13.js:3402
calculateAndRefresh @ 4011-Section13.js:2368
(anonymous) @ 4011-StateManager.js:543
notifyListeners @ 4011-StateManager.js:541
setValue @ 4011-StateManager.js:419
setValue @ 4011-Section10.js:230
calculateSubtotals @ 4011-Section10.js:2251
calculateTargetModel @ 4011-Section10.js:1847
calculateAll @ 4011-Section10.js:1824
(anonymous) @ 4011-Section10.js:2670
(anonymous) @ 4011-StateManager.js:543
notifyListeners @ 4011-StateManager.js:541
setValue @ 4011-StateManager.js:419
setValue @ 4011-Section03.js:212
setFieldValue @ 4011-Section03.js:450
(anonymous) @ 4011-Section03.js:2213
(anonymous) @ 4011-StateManager.js:543
notifyListeners @ 4011-StateManager.js:541
setValue @ 4011-StateManager.js:419
(anonymous) @ 4011-Section03.js:1689
calculateTargetModel @ 4011-Section03.js:1686
calculateAll @ 4011-Section03.js:1665
(anonymous) @ 4011-Section03.js:2057
4011-Section15.js:1750 [S15] 🎯 TGT S03 CLIMATE READ: h_23=18, d_23=-24, d_24=30, h_24=24
4011-StateManager.js:343 [StateManager] 🎯 h_10 setValue: "93.94895042448542" (state: calculated)
4011-StateManager.js:346 [StateManager] h_10 setValue stack trace:
setValue @ 4011-StateManager.js:346
calculateValues @ 4011-Section15.js:1832
calculateTargetModel @ 4011-Section15.js:1662
calculateAll @ 4011-Section15.js:1328
(anonymous) @ 4011-Section15.js:2121
(anonymous) @ 4011-StateManager.js:543
notifyListeners @ 4011-StateManager.js:541
setValue @ 4011-StateManager.js:419
(anonymous) @ 4011-Section13.js:3423
calculateAll @ 4011-Section13.js:3421
calculateAndRefresh @ 4011-Section13.js:2368
(anonymous) @ 4011-Section13.js:2399
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
(anonymous) @ 4011-Section10.js:2679
(anonymous) @ 4011-StateManager.js:543
notifyListeners @ 4011-StateManager.js:541
setValue @ 4011-StateManager.js:419
(anonymous) @ 4011-Section13.js:3765
storeReferenceResults @ 4011-Section13.js:3757
calculateReferenceModel @ 4011-Section13.js:3504
calculateAll @ 4011-Section13.js:3402
calculateAndRefresh @ 4011-Section13.js:2368
(anonymous) @ 4011-StateManager.js:543
notifyListeners @ 4011-StateManager.js:541
setValue @ 4011-StateManager.js:419
setValue @ 4011-Section10.js:230
calculateSubtotals @ 4011-Section10.js:2251
calculateTargetModel @ 4011-Section10.js:1847
calculateAll @ 4011-Section10.js:1824
(anonymous) @ 4011-Section10.js:2670
(anonymous) @ 4011-StateManager.js:543
notifyListeners @ 4011-StateManager.js:541
setValue @ 4011-StateManager.js:419
setValue @ 4011-Section03.js:212
setFieldValue @ 4011-Section03.js:450
(anonymous) @ 4011-Section03.js:2213
(anonymous) @ 4011-StateManager.js:543
notifyListeners @ 4011-StateManager.js:541
setValue @ 4011-StateManager.js:419
(anonymous) @ 4011-Section03.js:1689
calculateTargetModel @ 4011-Section03.js:1686
calculateAll @ 4011-Section03.js:1665
(anonymous) @ 4011-Section03.js:2057
4011-Section15.js:1750 [S15] 🎯 TGT S03 CLIMATE READ: h_23=18, d_23=-24, d_24=30, h_24=24
4011-StateManager.js:343 [StateManager] 🎯 h_10 setValue: "93.94895042448542" (state: calculated)
4011-StateManager.js:346 [StateManager] h_10 setValue stack trace:
setValue @ 4011-StateManager.js:346
calculateValues @ 4011-Section15.js:1832
calculateTargetModel @ 4011-Section15.js:1662
calculateAll @ 4011-Section15.js:1328
(anonymous) @ 4011-Section15.js:2121
(anonymous) @ 4011-StateManager.js:543
notifyListeners @ 4011-StateManager.js:541
setValue @ 4011-StateManager.js:419
(anonymous) @ 4011-Section13.js:3423
calculateAll @ 4011-Section13.js:3421
calculateAndRefresh @ 4011-Section13.js:2368
(anonymous) @ 4011-Section13.js:2399
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
(anonymous) @ 4011-Section10.js:2679
(anonymous) @ 4011-StateManager.js:543
notifyListeners @ 4011-StateManager.js:541
setValue @ 4011-StateManager.js:419
(anonymous) @ 4011-Section13.js:3765
storeReferenceResults @ 4011-Section13.js:3757
calculateReferenceModel @ 4011-Section13.js:3504
calculateAll @ 4011-Section13.js:3402
calculateAndRefresh @ 4011-Section13.js:2368
(anonymous) @ 4011-StateManager.js:543
notifyListeners @ 4011-StateManager.js:541
setValue @ 4011-StateManager.js:419
setValue @ 4011-Section10.js:230
calculateSubtotals @ 4011-Section10.js:2251
calculateTargetModel @ 4011-Section10.js:1847
calculateAll @ 4011-Section10.js:1824
(anonymous) @ 4011-Section10.js:2670
(anonymous) @ 4011-StateManager.js:543
notifyListeners @ 4011-StateManager.js:541
setValue @ 4011-StateManager.js:419
setValue @ 4011-Section03.js:212
setFieldValue @ 4011-Section03.js:450
(anonymous) @ 4011-Section03.js:2213
(anonymous) @ 4011-StateManager.js:543
notifyListeners @ 4011-StateManager.js:541
setValue @ 4011-StateManager.js:419
(anonymous) @ 4011-Section03.js:1689
calculateTargetModel @ 4011-Section03.js:1686
calculateAll @ 4011-Section03.js:1665
(anonymous) @ 4011-Section03.js:2057
4011-Section15.js:1750 [S15] 🎯 TGT S03 CLIMATE READ: h_23=18, d_23=-24, d_24=30, h_24=24
4011-StateManager.js:343 [StateManager] 🎯 h_10 setValue: "93.94895042448542" (state: calculated)
4011-StateManager.js:346 [StateManager] h_10 setValue stack trace:
setValue @ 4011-StateManager.js:346
calculateValues @ 4011-Section15.js:1832
calculateTargetModel @ 4011-Section15.js:1662
calculateAll @ 4011-Section15.js:1328
(anonymous) @ 4011-Section15.js:2121
(anonymous) @ 4011-StateManager.js:543
notifyListeners @ 4011-StateManager.js:541
setValue @ 4011-StateManager.js:419
(anonymous) @ 4011-Section13.js:3423
calculateAll @ 4011-Section13.js:3421
calculateAndRefresh @ 4011-Section13.js:2368
(anonymous) @ 4011-Section13.js:2399
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
(anonymous) @ 4011-Section10.js:2679
(anonymous) @ 4011-StateManager.js:543
notifyListeners @ 4011-StateManager.js:541
setValue @ 4011-StateManager.js:419
(anonymous) @ 4011-Section13.js:3765
storeReferenceResults @ 4011-Section13.js:3757
calculateReferenceModel @ 4011-Section13.js:3504
calculateAll @ 4011-Section13.js:3402
calculateAndRefresh @ 4011-Section13.js:2368
(anonymous) @ 4011-StateManager.js:543
notifyListeners @ 4011-StateManager.js:541
setValue @ 4011-StateManager.js:419
setValue @ 4011-Section10.js:230
calculateSubtotals @ 4011-Section10.js:2251
calculateTargetModel @ 4011-Section10.js:1847
calculateAll @ 4011-Section10.js:1824
(anonymous) @ 4011-Section10.js:2670
(anonymous) @ 4011-StateManager.js:543
notifyListeners @ 4011-StateManager.js:541
setValue @ 4011-StateManager.js:419
setValue @ 4011-Section03.js:212
setFieldValue @ 4011-Section03.js:450
(anonymous) @ 4011-Section03.js:2213
(anonymous) @ 4011-StateManager.js:543
notifyListeners @ 4011-StateManager.js:541
setValue @ 4011-StateManager.js:419
(anonymous) @ 4011-Section03.js:1689
calculateTargetModel @ 4011-Section03.js:1686
calculateAll @ 4011-Section03.js:1665
(anonymous) @ 4011-Section03.js:2057
4011-Section15.js:1750 [S15] 🎯 TGT S03 CLIMATE READ: h_23=18, d_23=-24, d_24=30, h_24=24
4011-StateManager.js:343 [StateManager] 🎯 h_10 setValue: "93.94895042448542" (state: calculated)
4011-StateManager.js:346 [StateManager] h_10 setValue stack trace:
setValue @ 4011-StateManager.js:346
calculateValues @ 4011-Section15.js:1832
calculateTargetModel @ 4011-Section15.js:1662
calculateAll @ 4011-Section15.js:1328
(anonymous) @ 4011-Section15.js:2121
(anonymous) @ 4011-StateManager.js:543
notifyListeners @ 4011-StateManager.js:541
setValue @ 4011-StateManager.js:419
(anonymous) @ 4011-Section13.js:3423
calculateAll @ 4011-Section13.js:3421
calculateAndRefresh @ 4011-Section13.js:2368
(anonymous) @ 4011-Section13.js:2399
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
(anonymous) @ 4011-Section10.js:2679
(anonymous) @ 4011-StateManager.js:543
notifyListeners @ 4011-StateManager.js:541
setValue @ 4011-StateManager.js:419
(anonymous) @ 4011-Section13.js:3765
storeReferenceResults @ 4011-Section13.js:3757
calculateReferenceModel @ 4011-Section13.js:3504
calculateAll @ 4011-Section13.js:3402
calculateAndRefresh @ 4011-Section13.js:2368
(anonymous) @ 4011-StateManager.js:543
notifyListeners @ 4011-StateManager.js:541
setValue @ 4011-StateManager.js:419
setValue @ 4011-Section10.js:230
calculateSubtotals @ 4011-Section10.js:2251
calculateTargetModel @ 4011-Section10.js:1847
calculateAll @ 4011-Section10.js:1824
(anonymous) @ 4011-Section10.js:2670
(anonymous) @ 4011-StateManager.js:543
notifyListeners @ 4011-StateManager.js:541
setValue @ 4011-StateManager.js:419
setValue @ 4011-Section03.js:212
setFieldValue @ 4011-Section03.js:450
(anonymous) @ 4011-Section03.js:2213
(anonymous) @ 4011-StateManager.js:543
notifyListeners @ 4011-StateManager.js:541
setValue @ 4011-StateManager.js:419
(anonymous) @ 4011-Section03.js:1689
calculateTargetModel @ 4011-Section03.js:1686
calculateAll @ 4011-Section03.js:1665
(anonymous) @ 4011-Section03.js:2057
4011-Section15.js:1750 [S15] 🎯 TGT S03 CLIMATE READ: h_23=18, d_23=-24, d_24=30, h_24=24
4011-StateManager.js:343 [StateManager] 🎯 h_10 setValue: "93.94895042448542" (state: calculated)
4011-StateManager.js:346 [StateManager] h_10 setValue stack trace:
setValue @ 4011-StateManager.js:346
calculateValues @ 4011-Section15.js:1832
calculateTargetModel @ 4011-Section15.js:1662
calculateAll @ 4011-Section15.js:1328
(anonymous) @ 4011-Section15.js:2121
(anonymous) @ 4011-StateManager.js:543
notifyListeners @ 4011-StateManager.js:541
setValue @ 4011-StateManager.js:419
(anonymous) @ 4011-Section13.js:3423
calculateAll @ 4011-Section13.js:3421
calculateAndRefresh @ 4011-Section13.js:2368
(anonymous) @ 4011-Section13.js:2399
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
(anonymous) @ 4011-Section10.js:2679
(anonymous) @ 4011-StateManager.js:543
notifyListeners @ 4011-StateManager.js:541
setValue @ 4011-StateManager.js:419
(anonymous) @ 4011-Section13.js:3765
storeReferenceResults @ 4011-Section13.js:3757
calculateReferenceModel @ 4011-Section13.js:3504
calculateAll @ 4011-Section13.js:3402
calculateAndRefresh @ 4011-Section13.js:2368
(anonymous) @ 4011-StateManager.js:543
notifyListeners @ 4011-StateManager.js:541
setValue @ 4011-StateManager.js:419
setValue @ 4011-Section10.js:230
calculateSubtotals @ 4011-Section10.js:2251
calculateTargetModel @ 4011-Section10.js:1847
calculateAll @ 4011-Section10.js:1824
(anonymous) @ 4011-Section10.js:2670
(anonymous) @ 4011-StateManager.js:543
notifyListeners @ 4011-StateManager.js:541
setValue @ 4011-StateManager.js:419
setValue @ 4011-Section03.js:212
setFieldValue @ 4011-Section03.js:450
(anonymous) @ 4011-Section03.js:2213
(anonymous) @ 4011-StateManager.js:543
notifyListeners @ 4011-StateManager.js:541
setValue @ 4011-StateManager.js:419
(anonymous) @ 4011-Section03.js:1689
calculateTargetModel @ 4011-Section03.js:1686
calculateAll @ 4011-Section03.js:1665
(anonymous) @ 4011-Section03.js:2057
4011-Section15.js:1750 [S15] 🎯 TGT S03 CLIMATE READ: h_23=18, d_23=-24, d_24=30, h_24=24
4011-StateManager.js:343 [StateManager] 🎯 h_10 setValue: "93.94895042448542" (state: calculated)
4011-StateManager.js:346 [StateManager] h_10 setValue stack trace:
setValue @ 4011-StateManager.js:346
calculateValues @ 4011-Section15.js:1832
calculateTargetModel @ 4011-Section15.js:1662
calculateAll @ 4011-Section15.js:1328
(anonymous) @ 4011-Section15.js:2121
(anonymous) @ 4011-StateManager.js:543
notifyListeners @ 4011-StateManager.js:541
setValue @ 4011-StateManager.js:419
(anonymous) @ 4011-Section13.js:3423
calculateAll @ 4011-Section13.js:3421
calculateAndRefresh @ 4011-Section13.js:2368
(anonymous) @ 4011-Section13.js:2399
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
(anonymous) @ 4011-Section10.js:2679
(anonymous) @ 4011-StateManager.js:543
notifyListeners @ 4011-StateManager.js:541
setValue @ 4011-StateManager.js:419
(anonymous) @ 4011-Section13.js:3765
storeReferenceResults @ 4011-Section13.js:3757
calculateReferenceModel @ 4011-Section13.js:3504
calculateAll @ 4011-Section13.js:3402
calculateAndRefresh @ 4011-Section13.js:2368
(anonymous) @ 4011-StateManager.js:543
notifyListeners @ 4011-StateManager.js:541
setValue @ 4011-StateManager.js:419
setValue @ 4011-Section10.js:230
calculateSubtotals @ 4011-Section10.js:2251
calculateTargetModel @ 4011-Section10.js:1847
calculateAll @ 4011-Section10.js:1824
(anonymous) @ 4011-Section10.js:2670
(anonymous) @ 4011-StateManager.js:543
notifyListeners @ 4011-StateManager.js:541
setValue @ 4011-StateManager.js:419
setValue @ 4011-Section03.js:212
setFieldValue @ 4011-Section03.js:450
(anonymous) @ 4011-Section03.js:2213
(anonymous) @ 4011-StateManager.js:543
notifyListeners @ 4011-StateManager.js:541
setValue @ 4011-StateManager.js:419
(anonymous) @ 4011-Section03.js:1689
calculateTargetModel @ 4011-Section03.js:1686
calculateAll @ 4011-Section03.js:1665
(anonymous) @ 4011-Section03.js:2057
4011-Section15.js:1750 [S15] 🎯 TGT S03 CLIMATE READ: h_23=18, d_23=-24, d_24=30, h_24=24
4011-StateManager.js:343 [StateManager] 🎯 h_10 setValue: "93.94895042448542" (state: calculated)
4011-StateManager.js:346 [StateManager] h_10 setValue stack trace:
setValue @ 4011-StateManager.js:346
calculateValues @ 4011-Section15.js:1832
calculateTargetModel @ 4011-Section15.js:1662
calculateAll @ 4011-Section15.js:1328
(anonymous) @ 4011-Section15.js:2121
(anonymous) @ 4011-StateManager.js:543
notifyListeners @ 4011-StateManager.js:541
setValue @ 4011-StateManager.js:419
(anonymous) @ 4011-Section13.js:3423
calculateAll @ 4011-Section13.js:3421
calculateAndRefresh @ 4011-Section13.js:2368
(anonymous) @ 4011-Section13.js:2399
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
(anonymous) @ 4011-Section10.js:2679
(anonymous) @ 4011-StateManager.js:543
notifyListeners @ 4011-StateManager.js:541
setValue @ 4011-StateManager.js:419
(anonymous) @ 4011-Section13.js:3765
storeReferenceResults @ 4011-Section13.js:3757
calculateReferenceModel @ 4011-Section13.js:3504
calculateAll @ 4011-Section13.js:3402
calculateAndRefresh @ 4011-Section13.js:2368
(anonymous) @ 4011-StateManager.js:543
notifyListeners @ 4011-StateManager.js:541
setValue @ 4011-StateManager.js:419
setValue @ 4011-Section10.js:230
calculateSubtotals @ 4011-Section10.js:2251
calculateTargetModel @ 4011-Section10.js:1847
calculateAll @ 4011-Section10.js:1824
(anonymous) @ 4011-Section10.js:2670
(anonymous) @ 4011-StateManager.js:543
notifyListeners @ 4011-StateManager.js:541
setValue @ 4011-StateManager.js:419
setValue @ 4011-Section03.js:212
setFieldValue @ 4011-Section03.js:450
(anonymous) @ 4011-Section03.js:2213
(anonymous) @ 4011-StateManager.js:543
notifyListeners @ 4011-StateManager.js:541
setValue @ 4011-StateManager.js:419
(anonymous) @ 4011-Section03.js:1689
calculateTargetModel @ 4011-Section03.js:1686
calculateAll @ 4011-Section03.js:1665
(anonymous) @ 4011-Section03.js:2057
4011-Section13.js:3430 [Section13] ✅ Re-wrote 34 Reference values
4011-Section13.js:3440 [Section13] 🎉 DUAL-ENGINE CALCULATIONS COMPLETE
4011-Section13.js:252 [Section13] 🔄 Updating calculated display values for reference mode
4011-Section13.js:336 [Section13] Calculated display values updated for reference mode
4011-Section13.js:2395 [Section13] 📡 🔥 d_127 (TED) listener triggered - S14 energy demand changed!
4011-Section13.js:3389 [Section13] 🚀 CALCULATEALL TRIGGERED - Running dual-engine calculations...
4011-Section13.js:3395 [Section13] 🎯 Mode captured at calculation start: reference
4011-Section13.js:3401 [Section13] 🔄 Starting Reference Model calculations...
4011-Section13.js:721 🔍 [S13-CONTEXT] Creating reference context: g_118="Volume Constant" from ReferenceState
4011-Section13.js:723 🔍 [S13-CONTEXT] ReferenceState.g_118="Volume Constant", TargetState.g_118="Volume by Schedule"
4011-Section13.js:3457 [Section13] Running Reference Model calculations...
4011-Section13.js:3471 [S13 CONTAMINATION DEBUG] calculateReferenceModel: Using system type = Electricity
4011-Section13.js:2873 [S13] REF HEATING: system=Electricity, ted=297371.1974742337, afue=0.9, cop=1
4011-Section13.js:2879 [S13 REF DEBUG] About to calculate with heating system: Electricity
4011-Section13.js:2882 [S13 REF DEBUG] Will S13 publish ref_d_113=Electricity?
4011-Section13.js:3099 🔍 [S13-VENT] calculateVentilationRates: ventMethod="Volume Constant", ach(l_118)=3.5, ratePerPerson(d_119)=8.33, volume(d_105)=8000
4011-Section13.js:3102 🔍 [S13-VENT] isReferenceCalculation=true, hasContext=true
4011-Section13.js:3110 🔍 [S13-VENT] calculateVentilationValues: ventMethod="Volume Constant", ach(l_118)=3.5, ratePerPerson(d_119)=8.33, volume(d_105)=8000
4011-Section13.js:3113 🔍 [S13-VENT] Supporting values: occupants(d_63)=126, occupiedHours(i_63)=4380, totalHours(j_63)=8760
4011-Section13.js:3133 🔍 [S13-VENT] Volume Constant calculation: ventRateLs = (3.5 * 8000) / 3.6 = 7777.777777777777
4011-Section13.js:3145 ✅ [S13-VENT] Final d_120 result: 7777.777777777777 L/s (from method="Volume Constant", ach=3.5, volume=8000)
4011-Section13.js:2977 [Section13] 🧊 COOLING CALC: mode=REF, coolingSystemType="No Cooling", heatingType="Electricity", isCoolingActive=false, coolingDemand=10386.714434542262
4011-Section13.js:3737 [S13 CONTAMINATION DEBUG] storeReferenceResults called during reference mode
4011-Section13.js:3740 [S13 CONTAMINATION DEBUG] Reference heating system: Electricity
4011-Section13.js:3743 [S13 CONTAMINATION DEBUG] Target heating system: Heatpump
4011-Section13.js:3746 [S13 CONTAMINATION DEBUG] Reference h_115 (gas volume): 0
4011-Section13.js:3749 [S13 CONTAMINATION DEBUG] Reference f_115 (oil volume): 0
4011-Section15.js:1750 [S15] 🎯 TGT S03 CLIMATE READ: h_23=18, d_23=-24, d_24=30, h_24=24
4011-StateManager.js:343 [StateManager] 🎯 h_10 setValue: "93.94895042448542" (state: calculated)
4011-StateManager.js:346 [StateManager] h_10 setValue stack trace:
setValue @ 4011-StateManager.js:346
calculateValues @ 4011-Section15.js:1832
calculateTargetModel @ 4011-Section15.js:1662
calculateAll @ 4011-Section15.js:1328
(anonymous) @ 4011-Section15.js:2121
(anonymous) @ 4011-StateManager.js:543
notifyListeners @ 4011-StateManager.js:541
setValue @ 4011-StateManager.js:419
(anonymous) @ 4011-Section13.js:3765
storeReferenceResults @ 4011-Section13.js:3757
calculateReferenceModel @ 4011-Section13.js:3504
calculateAll @ 4011-Section13.js:3402
calculateAndRefresh @ 4011-Section13.js:2368
(anonymous) @ 4011-Section13.js:2399
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
(anonymous) @ 4011-Section10.js:2679
(anonymous) @ 4011-StateManager.js:543
notifyListeners @ 4011-StateManager.js:541
setValue @ 4011-StateManager.js:419
(anonymous) @ 4011-Section13.js:3765
storeReferenceResults @ 4011-Section13.js:3757
calculateReferenceModel @ 4011-Section13.js:3504
calculateAll @ 4011-Section13.js:3402
calculateAndRefresh @ 4011-Section13.js:2368
(anonymous) @ 4011-StateManager.js:543
notifyListeners @ 4011-StateManager.js:541
setValue @ 4011-StateManager.js:419
setValue @ 4011-Section10.js:230
calculateSubtotals @ 4011-Section10.js:2251
calculateTargetModel @ 4011-Section10.js:1847
calculateAll @ 4011-Section10.js:1824
(anonymous) @ 4011-Section10.js:2670
(anonymous) @ 4011-StateManager.js:543
notifyListeners @ 4011-StateManager.js:541
setValue @ 4011-StateManager.js:419
setValue @ 4011-Section03.js:212
setFieldValue @ 4011-Section03.js:450
(anonymous) @ 4011-Section03.js:2213
(anonymous) @ 4011-StateManager.js:543
notifyListeners @ 4011-StateManager.js:541
setValue @ 4011-StateManager.js:419
(anonymous) @ 4011-Section03.js:1689
calculateTargetModel @ 4011-Section03.js:1686
calculateAll @ 4011-Section03.js:1665
(anonymous) @ 4011-Section03.js:2057
4011-Section15.js:1750 [S15] 🎯 TGT S03 CLIMATE READ: h_23=18, d_23=-24, d_24=30, h_24=24
4011-StateManager.js:343 [StateManager] 🎯 h_10 setValue: "93.94895042448542" (state: calculated)
4011-StateManager.js:346 [StateManager] h_10 setValue stack trace:
setValue @ 4011-StateManager.js:346
calculateValues @ 4011-Section15.js:1832
calculateTargetModel @ 4011-Section15.js:1662
calculateAll @ 4011-Section15.js:1328
(anonymous) @ 4011-Section15.js:2121
(anonymous) @ 4011-StateManager.js:543
notifyListeners @ 4011-StateManager.js:541
setValue @ 4011-StateManager.js:419
(anonymous) @ 4011-Section13.js:3765
storeReferenceResults @ 4011-Section13.js:3757
calculateReferenceModel @ 4011-Section13.js:3504
calculateAll @ 4011-Section13.js:3402
calculateAndRefresh @ 4011-Section13.js:2368
(anonymous) @ 4011-Section13.js:2399
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
(anonymous) @ 4011-Section10.js:2679
(anonymous) @ 4011-StateManager.js:543
notifyListeners @ 4011-StateManager.js:541
setValue @ 4011-StateManager.js:419
(anonymous) @ 4011-Section13.js:3765
storeReferenceResults @ 4011-Section13.js:3757
calculateReferenceModel @ 4011-Section13.js:3504
calculateAll @ 4011-Section13.js:3402
calculateAndRefresh @ 4011-Section13.js:2368
(anonymous) @ 4011-StateManager.js:543
notifyListeners @ 4011-StateManager.js:541
setValue @ 4011-StateManager.js:419
setValue @ 4011-Section10.js:230
calculateSubtotals @ 4011-Section10.js:2251
calculateTargetModel @ 4011-Section10.js:1847
calculateAll @ 4011-Section10.js:1824
(anonymous) @ 4011-Section10.js:2670
(anonymous) @ 4011-StateManager.js:543
notifyListeners @ 4011-StateManager.js:541
setValue @ 4011-StateManager.js:419
setValue @ 4011-Section03.js:212
setFieldValue @ 4011-Section03.js:450
(anonymous) @ 4011-Section03.js:2213
(anonymous) @ 4011-StateManager.js:543
notifyListeners @ 4011-StateManager.js:541
setValue @ 4011-StateManager.js:419
(anonymous) @ 4011-Section03.js:1689
calculateTargetModel @ 4011-Section03.js:1686
calculateAll @ 4011-Section03.js:1665
(anonymous) @ 4011-Section03.js:2057
4011-Section15.js:1750 [S15] 🎯 TGT S03 CLIMATE READ: h_23=18, d_23=-24, d_24=30, h_24=24
4011-StateManager.js:343 [StateManager] 🎯 h_10 setValue: "93.94895042448542" (state: calculated)
4011-StateManager.js:346 [StateManager] h_10 setValue stack trace:
setValue @ 4011-StateManager.js:346
calculateValues @ 4011-Section15.js:1832
calculateTargetModel @ 4011-Section15.js:1662
calculateAll @ 4011-Section15.js:1328
(anonymous) @ 4011-Section15.js:2121
(anonymous) @ 4011-StateManager.js:543
notifyListeners @ 4011-StateManager.js:541
setValue @ 4011-StateManager.js:419
(anonymous) @ 4011-Section13.js:3765
storeReferenceResults @ 4011-Section13.js:3757
calculateReferenceModel @ 4011-Section13.js:3504
calculateAll @ 4011-Section13.js:3402
calculateAndRefresh @ 4011-Section13.js:2368
(anonymous) @ 4011-Section13.js:2399
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
(anonymous) @ 4011-Section10.js:2679
(anonymous) @ 4011-StateManager.js:543
notifyListeners @ 4011-StateManager.js:541
setValue @ 4011-StateManager.js:419
(anonymous) @ 4011-Section13.js:3765
storeReferenceResults @ 4011-Section13.js:3757
calculateReferenceModel @ 4011-Section13.js:3504
calculateAll @ 4011-Section13.js:3402
calculateAndRefresh @ 4011-Section13.js:2368
(anonymous) @ 4011-StateManager.js:543
notifyListeners @ 4011-StateManager.js:541
setValue @ 4011-StateManager.js:419
setValue @ 4011-Section10.js:230
calculateSubtotals @ 4011-Section10.js:2251
calculateTargetModel @ 4011-Section10.js:1847
calculateAll @ 4011-Section10.js:1824
(anonymous) @ 4011-Section10.js:2670
(anonymous) @ 4011-StateManager.js:543
notifyListeners @ 4011-StateManager.js:541
setValue @ 4011-StateManager.js:419
setValue @ 4011-Section03.js:212
setFieldValue @ 4011-Section03.js:450
(anonymous) @ 4011-Section03.js:2213
(anonymous) @ 4011-StateManager.js:543
notifyListeners @ 4011-StateManager.js:541
setValue @ 4011-StateManager.js:419
(anonymous) @ 4011-Section03.js:1689
calculateTargetModel @ 4011-Section03.js:1686
calculateAll @ 4011-Section03.js:1665
(anonymous) @ 4011-Section03.js:2057
4011-Section15.js:1750 [S15] 🎯 TGT S03 CLIMATE READ: h_23=18, d_23=-24, d_24=30, h_24=24
4011-StateManager.js:343 [StateManager] 🎯 h_10 setValue: "93.94895042448542" (state: calculated)
4011-StateManager.js:346 [StateManager] h_10 setValue stack trace:
setValue @ 4011-StateManager.js:346
calculateValues @ 4011-Section15.js:1832
calculateTargetModel @ 4011-Section15.js:1662
calculateAll @ 4011-Section15.js:1328
(anonymous) @ 4011-Section15.js:2121
(anonymous) @ 4011-StateManager.js:543
notifyListeners @ 4011-StateManager.js:541
setValue @ 4011-StateManager.js:419
(anonymous) @ 4011-Section13.js:3765
storeReferenceResults @ 4011-Section13.js:3757
calculateReferenceModel @ 4011-Section13.js:3504
calculateAll @ 4011-Section13.js:3402
calculateAndRefresh @ 4011-Section13.js:2368
(anonymous) @ 4011-Section13.js:2399
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
(anonymous) @ 4011-Section10.js:2679
(anonymous) @ 4011-StateManager.js:543
notifyListeners @ 4011-StateManager.js:541
setValue @ 4011-StateManager.js:419
(anonymous) @ 4011-Section13.js:3765
storeReferenceResults @ 4011-Section13.js:3757
calculateReferenceModel @ 4011-Section13.js:3504
calculateAll @ 4011-Section13.js:3402
calculateAndRefresh @ 4011-Section13.js:2368
(anonymous) @ 4011-StateManager.js:543
notifyListeners @ 4011-StateManager.js:541
setValue @ 4011-StateManager.js:419
setValue @ 4011-Section10.js:230
calculateSubtotals @ 4011-Section10.js:2251
calculateTargetModel @ 4011-Section10.js:1847
calculateAll @ 4011-Section10.js:1824
(anonymous) @ 4011-Section10.js:2670
(anonymous) @ 4011-StateManager.js:543
notifyListeners @ 4011-StateManager.js:541
setValue @ 4011-StateManager.js:419
setValue @ 4011-Section03.js:212
setFieldValue @ 4011-Section03.js:450
(anonymous) @ 4011-Section03.js:2213
(anonymous) @ 4011-StateManager.js:543
notifyListeners @ 4011-StateManager.js:541
setValue @ 4011-StateManager.js:419
(anonymous) @ 4011-Section03.js:1689
calculateTargetModel @ 4011-Section03.js:1686
calculateAll @ 4011-Section03.js:1665
(anonymous) @ 4011-Section03.js:2057
4011-Section13.js:3761 [S13 CONTAMINATION DEBUG] Writing ref_f_115 = 0
4011-Section04.js:2713 [S04] S13 space oil volume changed (Reference): ref_f_115
4011-Section04.js:1018 [S04] Row 32 Subtotals - F32: 132938, G32: 6779.838, J32: 347966.051518286, K32: 17746.268627432586
4011-Section04.js:1668 [S04] Reference model calculations complete
4011-Section04.js:1674 [S04DB] storeReference: ref_j_32=347966.051518286, ref_k_32=17746.268627432586 | current target j_32=134083.9420458256, k_32=6838.281044337105
4011-Section04.js:493 [S04] 🔄 Updating calculated display values for target mode
4011-Section04.js:501 [S04DB] displayContext mode=target j_32=134083.9420458256 ref_j_32=347966.051518286 k_32=6838.281044337105 ref_k_32=17746.268627432586
4011-Section04.js:582 [S04 DEBUG] Target mode - j_32: 134083.9420458256
4011-Section04.js:582 [S04 DEBUG] Target mode - k_32: 6838.281044337105
4011-Section04.js:582 [S04 DEBUG] Target mode - l_27: 51
4011-Section04.js:617 [S04] Calculated display values updated for target mode
4011-Section13.js:3761 [S13 CONTAMINATION DEBUG] Writing ref_h_115 = 0
4011-Section04.js:2721 [S04] S13 space gas volume changed (Reference): ref_h_115
4011-Section04.js:1018 [S04] Row 32 Subtotals - F32: 132938, G32: 6779.838, J32: 347966.051518286, K32: 17746.268627432586
4011-Section04.js:1668 [S04] Reference model calculations complete
4011-Section04.js:1674 [S04DB] storeReference: ref_j_32=347966.051518286, ref_k_32=17746.268627432586 | current target j_32=134083.9420458256, k_32=6838.281044337105
4011-Section04.js:493 [S04] 🔄 Updating calculated display values for target mode
4011-Section04.js:501 [S04DB] displayContext mode=target j_32=134083.9420458256 ref_j_32=347966.051518286 k_32=6838.281044337105 ref_k_32=17746.268627432586
4011-Section04.js:582 [S04 DEBUG] Target mode - j_32: 134083.9420458256
4011-Section04.js:582 [S04 DEBUG] Target mode - k_32: 6838.281044337105
4011-Section04.js:582 [S04 DEBUG] Target mode - l_27: 51
4011-Section04.js:617 [S04] Calculated display values updated for target mode
4011-Section15.js:1750 [S15] 🎯 TGT S03 CLIMATE READ: h_23=18, d_23=-24, d_24=30, h_24=24
4011-StateManager.js:343 [StateManager] 🎯 h_10 setValue: "93.94895042448542" (state: calculated)
4011-StateManager.js:346 [StateManager] h_10 setValue stack trace:
setValue @ 4011-StateManager.js:346
calculateValues @ 4011-Section15.js:1832
calculateTargetModel @ 4011-Section15.js:1662
calculateAll @ 4011-Section15.js:1328
(anonymous) @ 4011-Section15.js:2121
(anonymous) @ 4011-StateManager.js:543
notifyListeners @ 4011-StateManager.js:541
setValue @ 4011-StateManager.js:419
(anonymous) @ 4011-Section13.js:3765
storeReferenceResults @ 4011-Section13.js:3757
calculateReferenceModel @ 4011-Section13.js:3504
calculateAll @ 4011-Section13.js:3402
calculateAndRefresh @ 4011-Section13.js:2368
(anonymous) @ 4011-Section13.js:2399
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
(anonymous) @ 4011-Section10.js:2679
(anonymous) @ 4011-StateManager.js:543
notifyListeners @ 4011-StateManager.js:541
setValue @ 4011-StateManager.js:419
(anonymous) @ 4011-Section13.js:3765
storeReferenceResults @ 4011-Section13.js:3757
calculateReferenceModel @ 4011-Section13.js:3504
calculateAll @ 4011-Section13.js:3402
calculateAndRefresh @ 4011-Section13.js:2368
(anonymous) @ 4011-StateManager.js:543
notifyListeners @ 4011-StateManager.js:541
setValue @ 4011-StateManager.js:419
setValue @ 4011-Section10.js:230
calculateSubtotals @ 4011-Section10.js:2251
calculateTargetModel @ 4011-Section10.js:1847
calculateAll @ 4011-Section10.js:1824
(anonymous) @ 4011-Section10.js:2670
(anonymous) @ 4011-StateManager.js:543
notifyListeners @ 4011-StateManager.js:541
setValue @ 4011-StateManager.js:419
setValue @ 4011-Section03.js:212
setFieldValue @ 4011-Section03.js:450
(anonymous) @ 4011-Section03.js:2213
(anonymous) @ 4011-StateManager.js:543
notifyListeners @ 4011-StateManager.js:541
setValue @ 4011-StateManager.js:419
(anonymous) @ 4011-Section03.js:1689
calculateTargetModel @ 4011-Section03.js:1686
calculateAll @ 4011-Section03.js:1665
(anonymous) @ 4011-Section03.js:2057
4011-Section15.js:1750 [S15] 🎯 TGT S03 CLIMATE READ: h_23=18, d_23=-24, d_24=30, h_24=24
4011-StateManager.js:343 [StateManager] 🎯 h_10 setValue: "93.94895042448542" (state: calculated)
4011-StateManager.js:346 [StateManager] h_10 setValue stack trace:
setValue @ 4011-StateManager.js:346
calculateValues @ 4011-Section15.js:1832
calculateTargetModel @ 4011-Section15.js:1662
calculateAll @ 4011-Section15.js:1328
(anonymous) @ 4011-Section15.js:2121
(anonymous) @ 4011-StateManager.js:543
notifyListeners @ 4011-StateManager.js:541
setValue @ 4011-StateManager.js:419
(anonymous) @ 4011-Section13.js:3765
storeReferenceResults @ 4011-Section13.js:3757
calculateReferenceModel @ 4011-Section13.js:3504
calculateAll @ 4011-Section13.js:3402
calculateAndRefresh @ 4011-Section13.js:2368
(anonymous) @ 4011-Section13.js:2399
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
(anonymous) @ 4011-Section10.js:2679
(anonymous) @ 4011-StateManager.js:543
notifyListeners @ 4011-StateManager.js:541
setValue @ 4011-StateManager.js:419
(anonymous) @ 4011-Section13.js:3765
storeReferenceResults @ 4011-Section13.js:3757
calculateReferenceModel @ 4011-Section13.js:3504
calculateAll @ 4011-Section13.js:3402
calculateAndRefresh @ 4011-Section13.js:2368
(anonymous) @ 4011-StateManager.js:543
notifyListeners @ 4011-StateManager.js:541
setValue @ 4011-StateManager.js:419
setValue @ 4011-Section10.js:230
calculateSubtotals @ 4011-Section10.js:2251
calculateTargetModel @ 4011-Section10.js:1847
calculateAll @ 4011-Section10.js:1824
(anonymous) @ 4011-Section10.js:2670
(anonymous) @ 4011-StateManager.js:543
notifyListeners @ 4011-StateManager.js:541
setValue @ 4011-StateManager.js:419
setValue @ 4011-Section03.js:212
setFieldValue @ 4011-Section03.js:450
(anonymous) @ 4011-Section03.js:2213
(anonymous) @ 4011-StateManager.js:543
notifyListeners @ 4011-StateManager.js:541
setValue @ 4011-StateManager.js:419
(anonymous) @ 4011-Section03.js:1689
calculateTargetModel @ 4011-Section03.js:1686
calculateAll @ 4011-Section03.js:1665
(anonymous) @ 4011-Section03.js:2057
4011-Section15.js:1750 [S15] 🎯 TGT S03 CLIMATE READ: h_23=18, d_23=-24, d_24=30, h_24=24
4011-StateManager.js:343 [StateManager] 🎯 h_10 setValue: "93.94895042448542" (state: calculated)
4011-StateManager.js:346 [StateManager] h_10 setValue stack trace:
setValue @ 4011-StateManager.js:346
calculateValues @ 4011-Section15.js:1832
calculateTargetModel @ 4011-Section15.js:1662
calculateAll @ 4011-Section15.js:1328
(anonymous) @ 4011-Section15.js:2121
(anonymous) @ 4011-StateManager.js:543
notifyListeners @ 4011-StateManager.js:541
setValue @ 4011-StateManager.js:419
(anonymous) @ 4011-Section13.js:3765
storeReferenceResults @ 4011-Section13.js:3757
calculateReferenceModel @ 4011-Section13.js:3504
calculateAll @ 4011-Section13.js:3402
calculateAndRefresh @ 4011-Section13.js:2368
(anonymous) @ 4011-Section13.js:2399
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
(anonymous) @ 4011-Section10.js:2679
(anonymous) @ 4011-StateManager.js:543
notifyListeners @ 4011-StateManager.js:541
setValue @ 4011-StateManager.js:419
(anonymous) @ 4011-Section13.js:3765
storeReferenceResults @ 4011-Section13.js:3757
calculateReferenceModel @ 4011-Section13.js:3504
calculateAll @ 4011-Section13.js:3402
calculateAndRefresh @ 4011-Section13.js:2368
(anonymous) @ 4011-StateManager.js:543
notifyListeners @ 4011-StateManager.js:541
setValue @ 4011-StateManager.js:419
setValue @ 4011-Section10.js:230
calculateSubtotals @ 4011-Section10.js:2251
calculateTargetModel @ 4011-Section10.js:1847
calculateAll @ 4011-Section10.js:1824
(anonymous) @ 4011-Section10.js:2670
(anonymous) @ 4011-StateManager.js:543
notifyListeners @ 4011-StateManager.js:541
setValue @ 4011-StateManager.js:419
setValue @ 4011-Section03.js:212
setFieldValue @ 4011-Section03.js:450
(anonymous) @ 4011-Section03.js:2213
(anonymous) @ 4011-StateManager.js:543
notifyListeners @ 4011-StateManager.js:541
setValue @ 4011-StateManager.js:419
(anonymous) @ 4011-Section03.js:1689
calculateTargetModel @ 4011-Section03.js:1686
calculateAll @ 4011-Section03.js:1665
(anonymous) @ 4011-Section03.js:2057
4011-Section15.js:1750 [S15] 🎯 TGT S03 CLIMATE READ: h_23=18, d_23=-24, d_24=30, h_24=24
4011-StateManager.js:343 [StateManager] 🎯 h_10 setValue: "93.94895042448542" (state: calculated)
4011-StateManager.js:346 [StateManager] h_10 setValue stack trace:
setValue @ 4011-StateManager.js:346
calculateValues @ 4011-Section15.js:1832
calculateTargetModel @ 4011-Section15.js:1662
calculateAll @ 4011-Section15.js:1328
(anonymous) @ 4011-Section15.js:2121
(anonymous) @ 4011-StateManager.js:543
notifyListeners @ 4011-StateManager.js:541
setValue @ 4011-StateManager.js:419
(anonymous) @ 4011-Section13.js:3765
storeReferenceResults @ 4011-Section13.js:3757
calculateReferenceModel @ 4011-Section13.js:3504
calculateAll @ 4011-Section13.js:3402
calculateAndRefresh @ 4011-Section13.js:2368
(anonymous) @ 4011-Section13.js:2399
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
(anonymous) @ 4011-Section10.js:2679
(anonymous) @ 4011-StateManager.js:543
notifyListeners @ 4011-StateManager.js:541
setValue @ 4011-StateManager.js:419
(anonymous) @ 4011-Section13.js:3765
storeReferenceResults @ 4011-Section13.js:3757
calculateReferenceModel @ 4011-Section13.js:3504
calculateAll @ 4011-Section13.js:3402
calculateAndRefresh @ 4011-Section13.js:2368
(anonymous) @ 4011-StateManager.js:543
notifyListeners @ 4011-StateManager.js:541
setValue @ 4011-StateManager.js:419
setValue @ 4011-Section10.js:230
calculateSubtotals @ 4011-Section10.js:2251
calculateTargetModel @ 4011-Section10.js:1847
calculateAll @ 4011-Section10.js:1824
(anonymous) @ 4011-Section10.js:2670
(anonymous) @ 4011-StateManager.js:543
notifyListeners @ 4011-StateManager.js:541
setValue @ 4011-StateManager.js:419
setValue @ 4011-Section03.js:212
setFieldValue @ 4011-Section03.js:450
(anonymous) @ 4011-Section03.js:2213
(anonymous) @ 4011-StateManager.js:543
notifyListeners @ 4011-StateManager.js:541
setValue @ 4011-StateManager.js:419
(anonymous) @ 4011-Section03.js:1689
calculateTargetModel @ 4011-Section03.js:1686
calculateAll @ 4011-Section03.js:1665
(anonymous) @ 4011-Section03.js:2057
4011-Section10.js:2676 S10: Reference listener triggered by ref_m_121, recalculating all.
4011-Section10.js:1819 [S10 DEBUG] calculateAll() triggered in target mode - running both engines
4011-Section10.js:2040 [S10REF] Utilization calc: ref_i_71=110562.1692, ref_i_79=10060.174319999998, totalGains=120622.34352
4011-Section10.js:2054 [S10REF] Using utilization method: NRC 40%
4011-Section10.js:2091 [S10REF] Final calc: utilizationFactor=0.4, usableGains=48248.937408
4011-Section10.js:2134 [S10REF] Complete: g_80=0.4, g_81=0.9966231765247549, i_80=48248.937408, i_81=120215.02315876257
4011-Section10.js:1827 [S10 DEBUG] Dual-engine calculations complete in target mode
4011-Section10.js:341 [S10DISPLAY] updateCalculatedDisplayValues() called in target mode
4011-Section10.js:448 [S10DISPLAY] Display (target) m_73 = 24.84
4011-Section10.js:448 [S10DISPLAY] Display (target) m_74 = 0.19
4011-Section10.js:448 [S10DISPLAY] Display (target) m_75 = 2.09
4011-Section10.js:448 [S10DISPLAY] Display (target) m_76 = 24.76
4011-Section10.js:448 [S10DISPLAY] Display (target) m_77 = 64.37
4011-Section10.js:448 [S10DISPLAY] Display (target) m_78 = 25.00
4011-Section10.js:448 [S10DISPLAY] Display (target) i_73 = 186.30
4011-Section10.js:448 [S10DISPLAY] Display (target) i_74 = 15.42
4011-Section10.js:448 [S10DISPLAY] Display (target) i_75 = 8.00
4011-Section10.js:448 [S10DISPLAY] Display (target) i_76 = 3,936.84
4011-Section10.js:448 [S10DISPLAY] Display (target) i_77 = 6,479.48
4011-Section10.js:448 [S10DISPLAY] Display (target) i_78 = 0.00
4011-Section10.js:448 [S10DISPLAY] Display (target) i_79 = 10,626.05
4011-Section10.js:448 [S10DISPLAY] Display (target) k_73 = 0.00
4011-Section10.js:448 [S10DISPLAY] Display (target) k_74 = 0.00
4011-Section10.js:448 [S10DISPLAY] Display (target) k_75 = 0.00
4011-Section10.js:448 [S10DISPLAY] Display (target) k_76 = 0.00
4011-Section10.js:448 [S10DISPLAY] Display (target) k_77 = 323.97
4011-Section10.js:448 [S10DISPLAY] Display (target) k_78 = 0.00
4011-Section10.js:448 [S10DISPLAY] Display (target) k_79 = 323.97
4011-Section10.js:448 [S10DISPLAY] Display (target) j_73 = 1.75%
4011-Section10.js:448 [S10DISPLAY] Display (target) j_74 = 0.15%
4011-Section10.js:448 [S10DISPLAY] Display (target) j_75 = 0.08%
4011-Section10.js:448 [S10DISPLAY] Display (target) j_76 = 37.05%
4011-Section10.js:448 [S10DISPLAY] Display (target) j_77 = 60.98%
4011-Section10.js:448 [S10DISPLAY] Display (target) j_78 = 0.00%
4011-Section10.js:448 [S10DISPLAY] Display (target) j_79 = 100.00%
4011-Section10.js:448 [S10DISPLAY] Display (target) l_73 = 0.00%
4011-Section10.js:448 [S10DISPLAY] Display (target) l_74 = 0.00%
4011-Section10.js:448 [S10DISPLAY] Display (target) l_75 = 0.00%
4011-Section10.js:448 [S10DISPLAY] Display (target) l_76 = 0.00%
4011-Section10.js:448 [S10DISPLAY] Display (target) l_77 = 100.00%
4011-Section10.js:448 [S10DISPLAY] Display (target) l_78 = 0.00%
4011-Section10.js:448 [S10DISPLAY] Display (target) l_79 = 100.00%
4011-Section10.js:448 [S10DISPLAY] Display (target) e_80 = 110,698.29
4011-Section10.js:448 [S10DISPLAY] Display (target) e_81 = 110,698.29
4011-Section10.js:415 [S10DISPLAY] g_80 DEBUG: mode=target, valueToDisplay=0.4
4011-Section10.js:448 [S10DISPLAY] Display (target) g_80 = 40.00%
4011-Section10.js:448 [S10DISPLAY] Display (target) g_81 = 97.18%
4011-Section10.js:448 [S10DISPLAY] Display (target) i_80 = 44,279.32
4011-Section10.js:448 [S10DISPLAY] Display (target) i_81 = 107,577.48
4011-Section10.js:448 [S10DISPLAY] Display (target) i_82 = 66,418.98
4011-Section10.js:2697 S10: Reference utilization factor dependency ref_m_121 changed.
4011-Section10.js:341 [S10DISPLAY] updateCalculatedDisplayValues() called in target mode
4011-Section10.js:448 [S10DISPLAY] Display (target) m_73 = 24.84
4011-Section10.js:448 [S10DISPLAY] Display (target) m_74 = 0.19
4011-Section10.js:448 [S10DISPLAY] Display (target) m_75 = 2.09
4011-Section10.js:448 [S10DISPLAY] Display (target) m_76 = 24.76
4011-Section10.js:448 [S10DISPLAY] Display (target) m_77 = 64.37
4011-Section10.js:448 [S10DISPLAY] Display (target) m_78 = 25.00
4011-Section10.js:448 [S10DISPLAY] Display (target) i_73 = 186.30
4011-Section10.js:448 [S10DISPLAY] Display (target) i_74 = 15.42
4011-Section10.js:448 [S10DISPLAY] Display (target) i_75 = 8.00
4011-Section10.js:448 [S10DISPLAY] Display (target) i_76 = 3,936.84
4011-Section10.js:448 [S10DISPLAY] Display (target) i_77 = 6,479.48
4011-Section10.js:448 [S10DISPLAY] Display (target) i_78 = 0.00
4011-Section10.js:448 [S10DISPLAY] Display (target) i_79 = 10,626.05
4011-Section10.js:448 [S10DISPLAY] Display (target) k_73 = 0.00
4011-Section10.js:448 [S10DISPLAY] Display (target) k_74 = 0.00
4011-Section10.js:448 [S10DISPLAY] Display (target) k_75 = 0.00
4011-Section10.js:448 [S10DISPLAY] Display (target) k_76 = 0.00
4011-Section10.js:448 [S10DISPLAY] Display (target) k_77 = 323.97
4011-Section10.js:448 [S10DISPLAY] Display (target) k_78 = 0.00
4011-Section10.js:448 [S10DISPLAY] Display (target) k_79 = 323.97
4011-Section10.js:448 [S10DISPLAY] Display (target) j_73 = 1.75%
4011-Section10.js:448 [S10DISPLAY] Display (target) j_74 = 0.15%
4011-Section10.js:448 [S10DISPLAY] Display (target) j_75 = 0.08%
4011-Section10.js:448 [S10DISPLAY] Display (target) j_76 = 37.05%
4011-Section10.js:448 [S10DISPLAY] Display (target) j_77 = 60.98%
4011-Section10.js:448 [S10DISPLAY] Display (target) j_78 = 0.00%
4011-Section10.js:448 [S10DISPLAY] Display (target) j_79 = 100.00%
4011-Section10.js:448 [S10DISPLAY] Display (target) l_73 = 0.00%
4011-Section10.js:448 [S10DISPLAY] Display (target) l_74 = 0.00%
4011-Section10.js:448 [S10DISPLAY] Display (target) l_75 = 0.00%
4011-Section10.js:448 [S10DISPLAY] Display (target) l_76 = 0.00%
4011-Section10.js:448 [S10DISPLAY] Display (target) l_77 = 100.00%
4011-Section10.js:448 [S10DISPLAY] Display (target) l_78 = 0.00%
4011-Section10.js:448 [S10DISPLAY] Display (target) l_79 = 100.00%
4011-Section10.js:448 [S10DISPLAY] Display (target) e_80 = 110,698.29
4011-Section10.js:448 [S10DISPLAY] Display (target) e_81 = 110,698.29
4011-Section10.js:415 [S10DISPLAY] g_80 DEBUG: mode=target, valueToDisplay=0.4
4011-Section10.js:448 [S10DISPLAY] Display (target) g_80 = 40.00%
4011-Section10.js:448 [S10DISPLAY] Display (target) g_81 = 97.18%
4011-Section10.js:448 [S10DISPLAY] Display (target) i_80 = 44,279.32
4011-Section10.js:448 [S10DISPLAY] Display (target) i_81 = 107,577.48
4011-Section10.js:448 [S10DISPLAY] Display (target) i_82 = 66,418.98
4011-Section15.js:1750 [S15] 🎯 TGT S03 CLIMATE READ: h_23=18, d_23=-24, d_24=30, h_24=24
4011-StateManager.js:343 [StateManager] 🎯 h_10 setValue: "93.94895042448542" (state: calculated)
4011-StateManager.js:346 [StateManager] h_10 setValue stack trace:
setValue @ 4011-StateManager.js:346
calculateValues @ 4011-Section15.js:1832
calculateTargetModel @ 4011-Section15.js:1662
calculateAll @ 4011-Section15.js:1328
(anonymous) @ 4011-Section15.js:2121
(anonymous) @ 4011-StateManager.js:543
notifyListeners @ 4011-StateManager.js:541
setValue @ 4011-StateManager.js:419
(anonymous) @ 4011-Section13.js:3765
storeReferenceResults @ 4011-Section13.js:3757
calculateReferenceModel @ 4011-Section13.js:3504
calculateAll @ 4011-Section13.js:3402
calculateAndRefresh @ 4011-Section13.js:2368
(anonymous) @ 4011-Section13.js:2399
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
(anonymous) @ 4011-Section10.js:2679
(anonymous) @ 4011-StateManager.js:543
notifyListeners @ 4011-StateManager.js:541
setValue @ 4011-StateManager.js:419
(anonymous) @ 4011-Section13.js:3765
storeReferenceResults @ 4011-Section13.js:3757
calculateReferenceModel @ 4011-Section13.js:3504
calculateAll @ 4011-Section13.js:3402
calculateAndRefresh @ 4011-Section13.js:2368
(anonymous) @ 4011-StateManager.js:543
notifyListeners @ 4011-StateManager.js:541
setValue @ 4011-StateManager.js:419
setValue @ 4011-Section10.js:230
calculateSubtotals @ 4011-Section10.js:2251
calculateTargetModel @ 4011-Section10.js:1847
calculateAll @ 4011-Section10.js:1824
(anonymous) @ 4011-Section10.js:2670
(anonymous) @ 4011-StateManager.js:543
notifyListeners @ 4011-StateManager.js:541
setValue @ 4011-StateManager.js:419
setValue @ 4011-Section03.js:212
setFieldValue @ 4011-Section03.js:450
(anonymous) @ 4011-Section03.js:2213
(anonymous) @ 4011-StateManager.js:543
notifyListeners @ 4011-StateManager.js:541
setValue @ 4011-StateManager.js:419
(anonymous) @ 4011-Section03.js:1689
calculateTargetModel @ 4011-Section03.js:1686
calculateAll @ 4011-Section03.js:1665
(anonymous) @ 4011-Section03.js:2057
4011-Section15.js:1750 [S15] 🎯 TGT S03 CLIMATE READ: h_23=18, d_23=-24, d_24=30, h_24=24
4011-StateManager.js:343 [StateManager] 🎯 h_10 setValue: "93.94895042448542" (state: calculated)
4011-StateManager.js:346 [StateManager] h_10 setValue stack trace:
setValue @ 4011-StateManager.js:346
calculateValues @ 4011-Section15.js:1832
calculateTargetModel @ 4011-Section15.js:1662
calculateAll @ 4011-Section15.js:1328
(anonymous) @ 4011-Section15.js:2121
(anonymous) @ 4011-StateManager.js:543
notifyListeners @ 4011-StateManager.js:541
setValue @ 4011-StateManager.js:419
(anonymous) @ 4011-Section13.js:3765
storeReferenceResults @ 4011-Section13.js:3757
calculateReferenceModel @ 4011-Section13.js:3504
calculateAll @ 4011-Section13.js:3402
calculateAndRefresh @ 4011-Section13.js:2368
(anonymous) @ 4011-Section13.js:2399
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
(anonymous) @ 4011-Section10.js:2679
(anonymous) @ 4011-StateManager.js:543
notifyListeners @ 4011-StateManager.js:541
setValue @ 4011-StateManager.js:419
(anonymous) @ 4011-Section13.js:3765
storeReferenceResults @ 4011-Section13.js:3757
calculateReferenceModel @ 4011-Section13.js:3504
calculateAll @ 4011-Section13.js:3402
calculateAndRefresh @ 4011-Section13.js:2368
(anonymous) @ 4011-StateManager.js:543
notifyListeners @ 4011-StateManager.js:541
setValue @ 4011-StateManager.js:419
setValue @ 4011-Section10.js:230
calculateSubtotals @ 4011-Section10.js:2251
calculateTargetModel @ 4011-Section10.js:1847
calculateAll @ 4011-Section10.js:1824
(anonymous) @ 4011-Section10.js:2670
(anonymous) @ 4011-StateManager.js:543
notifyListeners @ 4011-StateManager.js:541
setValue @ 4011-StateManager.js:419
setValue @ 4011-Section03.js:212
setFieldValue @ 4011-Section03.js:450
(anonymous) @ 4011-Section03.js:2213
(anonymous) @ 4011-StateManager.js:543
notifyListeners @ 4011-StateManager.js:541
setValue @ 4011-StateManager.js:419
(anonymous) @ 4011-Section03.js:1689
calculateTargetModel @ 4011-Section03.js:1686
calculateAll @ 4011-Section03.js:1665
(anonymous) @ 4011-Section03.js:2057
24011-Section14.js:1416 [S14 LISTENER] 🔥 ref_d_122 changed - triggering calculateAll() + UI update
4011-Section15.js:1750 [S15] 🎯 TGT S03 CLIMATE READ: h_23=18, d_23=-24, d_24=30, h_24=24
4011-StateManager.js:343 [StateManager] 🎯 h_10 setValue: "93.94895042448542" (state: calculated)
4011-StateManager.js:346 [StateManager] h_10 setValue stack trace:
setValue @ 4011-StateManager.js:346
calculateValues @ 4011-Section15.js:1832
calculateTargetModel @ 4011-Section15.js:1662
calculateAll @ 4011-Section15.js:1328
(anonymous) @ 4011-Section15.js:2121
(anonymous) @ 4011-StateManager.js:543
notifyListeners @ 4011-StateManager.js:541
setValue @ 4011-StateManager.js:419
(anonymous) @ 4011-Section13.js:3765
storeReferenceResults @ 4011-Section13.js:3757
calculateReferenceModel @ 4011-Section13.js:3504
calculateAll @ 4011-Section13.js:3402
calculateAndRefresh @ 4011-Section13.js:2368
(anonymous) @ 4011-Section13.js:2399
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
(anonymous) @ 4011-Section10.js:2679
(anonymous) @ 4011-StateManager.js:543
notifyListeners @ 4011-StateManager.js:541
setValue @ 4011-StateManager.js:419
(anonymous) @ 4011-Section13.js:3765
storeReferenceResults @ 4011-Section13.js:3757
calculateReferenceModel @ 4011-Section13.js:3504
calculateAll @ 4011-Section13.js:3402
calculateAndRefresh @ 4011-Section13.js:2368
(anonymous) @ 4011-StateManager.js:543
notifyListeners @ 4011-StateManager.js:541
setValue @ 4011-StateManager.js:419
setValue @ 4011-Section10.js:230
calculateSubtotals @ 4011-Section10.js:2251
calculateTargetModel @ 4011-Section10.js:1847
calculateAll @ 4011-Section10.js:1824
(anonymous) @ 4011-Section10.js:2670
(anonymous) @ 4011-StateManager.js:543
notifyListeners @ 4011-StateManager.js:541
setValue @ 4011-StateManager.js:419
setValue @ 4011-Section03.js:212
setFieldValue @ 4011-Section03.js:450
(anonymous) @ 4011-Section03.js:2213
(anonymous) @ 4011-StateManager.js:543
notifyListeners @ 4011-StateManager.js:541
setValue @ 4011-StateManager.js:419
(anonymous) @ 4011-Section03.js:1689
calculateTargetModel @ 4011-Section03.js:1686
calculateAll @ 4011-Section03.js:1665
(anonymous) @ 4011-Section03.js:2057
4011-Section15.js:1750 [S15] 🎯 TGT S03 CLIMATE READ: h_23=18, d_23=-24, d_24=30, h_24=24
4011-StateManager.js:343 [StateManager] 🎯 h_10 setValue: "93.94895042448542" (state: calculated)
4011-StateManager.js:346 [StateManager] h_10 setValue stack trace:
setValue @ 4011-StateManager.js:346
calculateValues @ 4011-Section15.js:1832
calculateTargetModel @ 4011-Section15.js:1662
calculateAll @ 4011-Section15.js:1328
(anonymous) @ 4011-Section15.js:2121
(anonymous) @ 4011-StateManager.js:543
notifyListeners @ 4011-StateManager.js:541
setValue @ 4011-StateManager.js:419
(anonymous) @ 4011-Section13.js:3765
storeReferenceResults @ 4011-Section13.js:3757
calculateReferenceModel @ 4011-Section13.js:3504
calculateAll @ 4011-Section13.js:3402
calculateAndRefresh @ 4011-Section13.js:2368
(anonymous) @ 4011-Section13.js:2399
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
(anonymous) @ 4011-Section10.js:2679
(anonymous) @ 4011-StateManager.js:543
notifyListeners @ 4011-StateManager.js:541
setValue @ 4011-StateManager.js:419
(anonymous) @ 4011-Section13.js:3765
storeReferenceResults @ 4011-Section13.js:3757
calculateReferenceModel @ 4011-Section13.js:3504
calculateAll @ 4011-Section13.js:3402
calculateAndRefresh @ 4011-Section13.js:2368
(anonymous) @ 4011-StateManager.js:543
notifyListeners @ 4011-StateManager.js:541
setValue @ 4011-StateManager.js:419
setValue @ 4011-Section10.js:230
calculateSubtotals @ 4011-Section10.js:2251
calculateTargetModel @ 4011-Section10.js:1847
calculateAll @ 4011-Section10.js:1824
(anonymous) @ 4011-Section10.js:2670
(anonymous) @ 4011-StateManager.js:543
notifyListeners @ 4011-StateManager.js:541
setValue @ 4011-StateManager.js:419
setValue @ 4011-Section03.js:212
setFieldValue @ 4011-Section03.js:450
(anonymous) @ 4011-Section03.js:2213
(anonymous) @ 4011-StateManager.js:543
notifyListeners @ 4011-StateManager.js:541
setValue @ 4011-StateManager.js:419
(anonymous) @ 4011-Section03.js:1689
calculateTargetModel @ 4011-Section03.js:1686
calculateAll @ 4011-Section03.js:1665
(anonymous) @ 4011-Section03.js:2057
4011-Section15.js:1750 [S15] 🎯 TGT S03 CLIMATE READ: h_23=18, d_23=-24, d_24=30, h_24=24
4011-StateManager.js:343 [StateManager] 🎯 h_10 setValue: "93.94895042448542" (state: calculated)
4011-StateManager.js:346 [StateManager] h_10 setValue stack trace:
setValue @ 4011-StateManager.js:346
calculateValues @ 4011-Section15.js:1832
calculateTargetModel @ 4011-Section15.js:1662
calculateAll @ 4011-Section15.js:1328
(anonymous) @ 4011-Section15.js:2121
(anonymous) @ 4011-StateManager.js:543
notifyListeners @ 4011-StateManager.js:541
setValue @ 4011-StateManager.js:419
(anonymous) @ 4011-Section13.js:3765
storeReferenceResults @ 4011-Section13.js:3757
calculateReferenceModel @ 4011-Section13.js:3504
calculateAll @ 4011-Section13.js:3402
calculateAndRefresh @ 4011-Section13.js:2368
(anonymous) @ 4011-Section13.js:2399
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
(anonymous) @ 4011-Section10.js:2679
(anonymous) @ 4011-StateManager.js:543
notifyListeners @ 4011-StateManager.js:541
setValue @ 4011-StateManager.js:419
(anonymous) @ 4011-Section13.js:3765
storeReferenceResults @ 4011-Section13.js:3757
calculateReferenceModel @ 4011-Section13.js:3504
calculateAll @ 4011-Section13.js:3402
calculateAndRefresh @ 4011-Section13.js:2368
(anonymous) @ 4011-StateManager.js:543
notifyListeners @ 4011-StateManager.js:541
setValue @ 4011-StateManager.js:419
setValue @ 4011-Section10.js:230
calculateSubtotals @ 4011-Section10.js:2251
calculateTargetModel @ 4011-Section10.js:1847
calculateAll @ 4011-Section10.js:1824
(anonymous) @ 4011-Section10.js:2670
(anonymous) @ 4011-StateManager.js:543
notifyListeners @ 4011-StateManager.js:541
setValue @ 4011-StateManager.js:419
setValue @ 4011-Section03.js:212
setFieldValue @ 4011-Section03.js:450
(anonymous) @ 4011-Section03.js:2213
(anonymous) @ 4011-StateManager.js:543
notifyListeners @ 4011-StateManager.js:541
setValue @ 4011-StateManager.js:419
(anonymous) @ 4011-Section03.js:1689
calculateTargetModel @ 4011-Section03.js:1686
calculateAll @ 4011-Section03.js:1665
(anonymous) @ 4011-Section03.js:2057
4011-Section15.js:1750 [S15] 🎯 TGT S03 CLIMATE READ: h_23=18, d_23=-24, d_24=30, h_24=24
4011-StateManager.js:343 [StateManager] 🎯 h_10 setValue: "93.94895042448542" (state: calculated)
4011-StateManager.js:346 [StateManager] h_10 setValue stack trace:
setValue @ 4011-StateManager.js:346
calculateValues @ 4011-Section15.js:1832
calculateTargetModel @ 4011-Section15.js:1662
calculateAll @ 4011-Section15.js:1328
(anonymous) @ 4011-Section15.js:2121
(anonymous) @ 4011-StateManager.js:543
notifyListeners @ 4011-StateManager.js:541
setValue @ 4011-StateManager.js:419
(anonymous) @ 4011-Section13.js:3765
storeReferenceResults @ 4011-Section13.js:3757
calculateReferenceModel @ 4011-Section13.js:3504
calculateAll @ 4011-Section13.js:3402
calculateAndRefresh @ 4011-Section13.js:2368
(anonymous) @ 4011-Section13.js:2399
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
(anonymous) @ 4011-Section10.js:2679
(anonymous) @ 4011-StateManager.js:543
notifyListeners @ 4011-StateManager.js:541
setValue @ 4011-StateManager.js:419
(anonymous) @ 4011-Section13.js:3765
storeReferenceResults @ 4011-Section13.js:3757
calculateReferenceModel @ 4011-Section13.js:3504
calculateAll @ 4011-Section13.js:3402
calculateAndRefresh @ 4011-Section13.js:2368
(anonymous) @ 4011-StateManager.js:543
notifyListeners @ 4011-StateManager.js:541
setValue @ 4011-StateManager.js:419
setValue @ 4011-Section10.js:230
calculateSubtotals @ 4011-Section10.js:2251
calculateTargetModel @ 4011-Section10.js:1847
calculateAll @ 4011-Section10.js:1824
(anonymous) @ 4011-Section10.js:2670
(anonymous) @ 4011-StateManager.js:543
notifyListeners @ 4011-StateManager.js:541
setValue @ 4011-StateManager.js:419
setValue @ 4011-Section03.js:212
setFieldValue @ 4011-Section03.js:450
(anonymous) @ 4011-Section03.js:2213
(anonymous) @ 4011-StateManager.js:543
notifyListeners @ 4011-StateManager.js:541
setValue @ 4011-StateManager.js:419
(anonymous) @ 4011-Section03.js:1689
calculateTargetModel @ 4011-Section03.js:1686
calculateAll @ 4011-Section03.js:1665
(anonymous) @ 4011-Section03.js:2057
4011-Section15.js:1750 [S15] 🎯 TGT S03 CLIMATE READ: h_23=18, d_23=-24, d_24=30, h_24=24
4011-StateManager.js:343 [StateManager] 🎯 h_10 setValue: "93.94895042448542" (state: calculated)
4011-StateManager.js:346 [StateManager] h_10 setValue stack trace:
setValue @ 4011-StateManager.js:346
calculateValues @ 4011-Section15.js:1832
calculateTargetModel @ 4011-Section15.js:1662
calculateAll @ 4011-Section15.js:1328
(anonymous) @ 4011-Section15.js:2121
(anonymous) @ 4011-StateManager.js:543
notifyListeners @ 4011-StateManager.js:541
setValue @ 4011-StateManager.js:419
(anonymous) @ 4011-Section13.js:3765
storeReferenceResults @ 4011-Section13.js:3757
calculateReferenceModel @ 4011-Section13.js:3504
calculateAll @ 4011-Section13.js:3402
calculateAndRefresh @ 4011-Section13.js:2368
(anonymous) @ 4011-Section13.js:2399
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
(anonymous) @ 4011-Section10.js:2679
(anonymous) @ 4011-StateManager.js:543
notifyListeners @ 4011-StateManager.js:541
setValue @ 4011-StateManager.js:419
(anonymous) @ 4011-Section13.js:3765
storeReferenceResults @ 4011-Section13.js:3757
calculateReferenceModel @ 4011-Section13.js:3504
calculateAll @ 4011-Section13.js:3402
calculateAndRefresh @ 4011-Section13.js:2368
(anonymous) @ 4011-StateManager.js:543
notifyListeners @ 4011-StateManager.js:541
setValue @ 4011-StateManager.js:419
setValue @ 4011-Section10.js:230
calculateSubtotals @ 4011-Section10.js:2251
calculateTargetModel @ 4011-Section10.js:1847
calculateAll @ 4011-Section10.js:1824
(anonymous) @ 4011-Section10.js:2670
(anonymous) @ 4011-StateManager.js:543
notifyListeners @ 4011-StateManager.js:541
setValue @ 4011-StateManager.js:419
setValue @ 4011-Section03.js:212
setFieldValue @ 4011-Section03.js:450
(anonymous) @ 4011-Section03.js:2213
(anonymous) @ 4011-StateManager.js:543
notifyListeners @ 4011-StateManager.js:541
setValue @ 4011-StateManager.js:419
(anonymous) @ 4011-Section03.js:1689
calculateTargetModel @ 4011-Section03.js:1686
calculateAll @ 4011-Section03.js:1665
(anonymous) @ 4011-Section03.js:2057
4011-Section15.js:1750 [S15] 🎯 TGT S03 CLIMATE READ: h_23=18, d_23=-24, d_24=30, h_24=24
4011-StateManager.js:343 [StateManager] 🎯 h_10 setValue: "93.94895042448542" (state: calculated)
4011-StateManager.js:346 [StateManager] h_10 setValue stack trace:
setValue @ 4011-StateManager.js:346
calculateValues @ 4011-Section15.js:1832
calculateTargetModel @ 4011-Section15.js:1662
calculateAll @ 4011-Section15.js:1328
(anonymous) @ 4011-Section15.js:2121
(anonymous) @ 4011-StateManager.js:543
notifyListeners @ 4011-StateManager.js:541
setValue @ 4011-StateManager.js:419
(anonymous) @ 4011-Section13.js:3765
storeReferenceResults @ 4011-Section13.js:3757
calculateReferenceModel @ 4011-Section13.js:3504
calculateAll @ 4011-Section13.js:3402
calculateAndRefresh @ 4011-Section13.js:2368
(anonymous) @ 4011-Section13.js:2399
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
(anonymous) @ 4011-Section10.js:2679
(anonymous) @ 4011-StateManager.js:543
notifyListeners @ 4011-StateManager.js:541
setValue @ 4011-StateManager.js:419
(anonymous) @ 4011-Section13.js:3765
storeReferenceResults @ 4011-Section13.js:3757
calculateReferenceModel @ 4011-Section13.js:3504
calculateAll @ 4011-Section13.js:3402
calculateAndRefresh @ 4011-Section13.js:2368
(anonymous) @ 4011-StateManager.js:543
notifyListeners @ 4011-StateManager.js:541
setValue @ 4011-StateManager.js:419
setValue @ 4011-Section10.js:230
calculateSubtotals @ 4011-Section10.js:2251
calculateTargetModel @ 4011-Section10.js:1847
calculateAll @ 4011-Section10.js:1824
(anonymous) @ 4011-Section10.js:2670
(anonymous) @ 4011-StateManager.js:543
notifyListeners @ 4011-StateManager.js:541
setValue @ 4011-StateManager.js:419
setValue @ 4011-Section03.js:212
setFieldValue @ 4011-Section03.js:450
(anonymous) @ 4011-Section03.js:2213
(anonymous) @ 4011-StateManager.js:543
notifyListeners @ 4011-StateManager.js:541
setValue @ 4011-StateManager.js:419
(anonymous) @ 4011-Section03.js:1689
calculateTargetModel @ 4011-Section03.js:1686
calculateAll @ 4011-Section03.js:1665
(anonymous) @ 4011-Section03.js:2057
4011-Section15.js:1750 [S15] 🎯 TGT S03 CLIMATE READ: h_23=18, d_23=-24, d_24=30, h_24=24
4011-StateManager.js:343 [StateManager] 🎯 h_10 setValue: "93.94895042448542" (state: calculated)
4011-StateManager.js:346 [StateManager] h_10 setValue stack trace:
setValue @ 4011-StateManager.js:346
calculateValues @ 4011-Section15.js:1832
calculateTargetModel @ 4011-Section15.js:1662
calculateAll @ 4011-Section15.js:1328
(anonymous) @ 4011-Section15.js:2121
(anonymous) @ 4011-StateManager.js:543
notifyListeners @ 4011-StateManager.js:541
setValue @ 4011-StateManager.js:419
(anonymous) @ 4011-Section13.js:3765
storeReferenceResults @ 4011-Section13.js:3757
calculateReferenceModel @ 4011-Section13.js:3504
calculateAll @ 4011-Section13.js:3402
calculateAndRefresh @ 4011-Section13.js:2368
(anonymous) @ 4011-Section13.js:2399
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
(anonymous) @ 4011-Section10.js:2679
(anonymous) @ 4011-StateManager.js:543
notifyListeners @ 4011-StateManager.js:541
setValue @ 4011-StateManager.js:419
(anonymous) @ 4011-Section13.js:3765
storeReferenceResults @ 4011-Section13.js:3757
calculateReferenceModel @ 4011-Section13.js:3504
calculateAll @ 4011-Section13.js:3402
calculateAndRefresh @ 4011-Section13.js:2368
(anonymous) @ 4011-StateManager.js:543
notifyListeners @ 4011-StateManager.js:541
setValue @ 4011-StateManager.js:419
setValue @ 4011-Section10.js:230
calculateSubtotals @ 4011-Section10.js:2251
calculateTargetModel @ 4011-Section10.js:1847
calculateAll @ 4011-Section10.js:1824
(anonymous) @ 4011-Section10.js:2670
(anonymous) @ 4011-StateManager.js:543
notifyListeners @ 4011-StateManager.js:541
setValue @ 4011-StateManager.js:419
setValue @ 4011-Section03.js:212
setFieldValue @ 4011-Section03.js:450
(anonymous) @ 4011-Section03.js:2213
(anonymous) @ 4011-StateManager.js:543
notifyListeners @ 4011-StateManager.js:541
setValue @ 4011-StateManager.js:419
(anonymous) @ 4011-Section03.js:1689
calculateTargetModel @ 4011-Section03.js:1686
calculateAll @ 4011-Section03.js:1665
(anonymous) @ 4011-Section03.js:2057
4011-Section15.js:1750 [S15] 🎯 TGT S03 CLIMATE READ: h_23=18, d_23=-24, d_24=30, h_24=24
4011-StateManager.js:343 [StateManager] 🎯 h_10 setValue: "93.94895042448542" (state: calculated)
4011-StateManager.js:346 [StateManager] h_10 setValue stack trace:
setValue @ 4011-StateManager.js:346
calculateValues @ 4011-Section15.js:1832
calculateTargetModel @ 4011-Section15.js:1662
calculateAll @ 4011-Section15.js:1328
(anonymous) @ 4011-Section15.js:2121
(anonymous) @ 4011-StateManager.js:543
notifyListeners @ 4011-StateManager.js:541
setValue @ 4011-StateManager.js:419
(anonymous) @ 4011-Section13.js:3765
storeReferenceResults @ 4011-Section13.js:3757
calculateReferenceModel @ 4011-Section13.js:3504
calculateAll @ 4011-Section13.js:3402
calculateAndRefresh @ 4011-Section13.js:2368
(anonymous) @ 4011-Section13.js:2399
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
(anonymous) @ 4011-Section10.js:2679
(anonymous) @ 4011-StateManager.js:543
notifyListeners @ 4011-StateManager.js:541
setValue @ 4011-StateManager.js:419
(anonymous) @ 4011-Section13.js:3765
storeReferenceResults @ 4011-Section13.js:3757
calculateReferenceModel @ 4011-Section13.js:3504
calculateAll @ 4011-Section13.js:3402
calculateAndRefresh @ 4011-Section13.js:2368
(anonymous) @ 4011-StateManager.js:543
notifyListeners @ 4011-StateManager.js:541
setValue @ 4011-StateManager.js:419
setValue @ 4011-Section10.js:230
calculateSubtotals @ 4011-Section10.js:2251
calculateTargetModel @ 4011-Section10.js:1847
calculateAll @ 4011-Section10.js:1824
(anonymous) @ 4011-Section10.js:2670
(anonymous) @ 4011-StateManager.js:543
notifyListeners @ 4011-StateManager.js:541
setValue @ 4011-StateManager.js:419
setValue @ 4011-Section03.js:212
setFieldValue @ 4011-Section03.js:450
(anonymous) @ 4011-Section03.js:2213
(anonymous) @ 4011-StateManager.js:543
notifyListeners @ 4011-StateManager.js:541
setValue @ 4011-StateManager.js:419
(anonymous) @ 4011-Section03.js:1689
calculateTargetModel @ 4011-Section03.js:1686
calculateAll @ 4011-Section03.js:1665
(anonymous) @ 4011-Section03.js:2057
4011-Section13.js:3773 [Section13] Reference results stored with ref_ prefix for downstream sections
4011-Section13.js:3776 [S13 DEBUG] Total Reference results stored: 34
4011-Section13.js:3515 [Section13] Reference Model calculations complete
4011-Section13.js:3403 [Section13] ✅ Reference Model complete
4011-Section13.js:3405 [Section13] 🔄 Starting Target Model calculations...
4011-Section13.js:721 🔍 [S13-CONTEXT] Creating target context: g_118="Volume by Schedule" from TargetState
4011-Section13.js:725 🔍 [S13-CONTEXT] TargetState.g_118="Volume by Schedule", ReferenceState.g_118="Volume Constant"
4011-Section13.js:3536 [Section13] Running Target Model calculations...
4011-Section13.js:2873 [S13] TGT HEATING: system=Heatpump, ted=147391.80728166597, afue=0.98, cop=3.663540445486518
4011-Section13.js:3099 🔍 [S13-VENT] calculateVentilationRates: ventMethod="Volume by Schedule", ach(l_118)=3, ratePerPerson(d_119)=14, volume(d_105)=8000
4011-Section13.js:3102 🔍 [S13-VENT] isReferenceCalculation=false, hasContext=true
4011-Section13.js:3110 🔍 [S13-VENT] calculateVentilationValues: ventMethod="Volume by Schedule", ach(l_118)=3, ratePerPerson(d_119)=14, volume(d_105)=8000
4011-Section13.js:3113 🔍 [S13-VENT] Supporting values: occupants(d_63)=126, occupiedHours(i_63)=4380, totalHours(j_63)=8760
4011-Section13.js:3145 ✅ [S13-VENT] Final d_120 result: 3333.333333333333 L/s (from method="Volume by Schedule", ach=3, volume=8000)
4011-Section13.js:2977 [Section13] 🧊 COOLING CALC: mode=TGT, coolingSystemType="Cooling", heatingType="Heatpump", isCoolingActive=true, coolingDemand=10386.714434542262
4011-Section13.js:3039 [Section13] 🧊 COOLING RESULTS: d_117=3899.589530222073, j_116=2.663540445486518, l_116=0, l_114=6487.124904320189
24011-Section14.js:1416 [S14 LISTENER] 🔥 d_122 changed - triggering calculateAll() + UI update
4011-Section15.js:1750 [S15] 🎯 TGT S03 CLIMATE READ: h_23=18, d_23=-24, d_24=30, h_24=24
4011-StateManager.js:343 [StateManager] 🎯 h_10 setValue: "93.94895042448542" (state: calculated)
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
calculateCoolingVentilation @ 4011-Section13.js:3275
calculateCoolingSystem @ 4011-Section13.js:3043
calculateTargetModel @ 4011-Section13.js:3563
calculateAll @ 4011-Section13.js:3406
calculateAndRefresh @ 4011-Section13.js:2368
(anonymous) @ 4011-Section13.js:2399
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
(anonymous) @ 4011-Section10.js:2679
(anonymous) @ 4011-StateManager.js:543
notifyListeners @ 4011-StateManager.js:541
setValue @ 4011-StateManager.js:419
(anonymous) @ 4011-Section13.js:3765
storeReferenceResults @ 4011-Section13.js:3757
calculateReferenceModel @ 4011-Section13.js:3504
calculateAll @ 4011-Section13.js:3402
calculateAndRefresh @ 4011-Section13.js:2368
(anonymous) @ 4011-StateManager.js:543
notifyListeners @ 4011-StateManager.js:541
setValue @ 4011-StateManager.js:419
setValue @ 4011-Section10.js:230
calculateSubtotals @ 4011-Section10.js:2251
calculateTargetModel @ 4011-Section10.js:1847
calculateAll @ 4011-Section10.js:1824
(anonymous) @ 4011-Section10.js:2670
(anonymous) @ 4011-StateManager.js:543
notifyListeners @ 4011-StateManager.js:541
setValue @ 4011-StateManager.js:419
setValue @ 4011-Section03.js:212
setFieldValue @ 4011-Section03.js:450
(anonymous) @ 4011-Section03.js:2213
(anonymous) @ 4011-StateManager.js:543
notifyListeners @ 4011-StateManager.js:541
setValue @ 4011-StateManager.js:419
(anonymous) @ 4011-Section03.js:1689
calculateTargetModel @ 4011-Section03.js:1686
calculateAll @ 4011-Section03.js:1665
(anonymous) @ 4011-Section03.js:2057
4011-Section15.js:1750 [S15] 🎯 TGT S03 CLIMATE READ: h_23=18, d_23=-24, d_24=30, h_24=24
4011-StateManager.js:343 [StateManager] 🎯 h_10 setValue: "93.94895042448542" (state: calculated)
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
calculateCoolingVentilation @ 4011-Section13.js:3275
calculateCoolingSystem @ 4011-Section13.js:3043
calculateTargetModel @ 4011-Section13.js:3563
calculateAll @ 4011-Section13.js:3406
calculateAndRefresh @ 4011-Section13.js:2368
(anonymous) @ 4011-Section13.js:2399
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
(anonymous) @ 4011-Section10.js:2679
(anonymous) @ 4011-StateManager.js:543
notifyListeners @ 4011-StateManager.js:541
setValue @ 4011-StateManager.js:419
(anonymous) @ 4011-Section13.js:3765
storeReferenceResults @ 4011-Section13.js:3757
calculateReferenceModel @ 4011-Section13.js:3504
calculateAll @ 4011-Section13.js:3402
calculateAndRefresh @ 4011-Section13.js:2368
(anonymous) @ 4011-StateManager.js:543
notifyListeners @ 4011-StateManager.js:541
setValue @ 4011-StateManager.js:419
setValue @ 4011-Section10.js:230
calculateSubtotals @ 4011-Section10.js:2251
calculateTargetModel @ 4011-Section10.js:1847
calculateAll @ 4011-Section10.js:1824
(anonymous) @ 4011-Section10.js:2670
(anonymous) @ 4011-StateManager.js:543
notifyListeners @ 4011-StateManager.js:541
setValue @ 4011-StateManager.js:419
setValue @ 4011-Section03.js:212
setFieldValue @ 4011-Section03.js:450
(anonymous) @ 4011-Section03.js:2213
(anonymous) @ 4011-StateManager.js:543
notifyListeners @ 4011-StateManager.js:541
setValue @ 4011-StateManager.js:419
(anonymous) @ 4011-Section03.js:1689
calculateTargetModel @ 4011-Section03.js:1686
calculateAll @ 4011-Section03.js:1665
(anonymous) @ 4011-Section03.js:2057
4011-Section15.js:1750 [S15] 🎯 TGT S03 CLIMATE READ: h_23=18, d_23=-24, d_24=30, h_24=24
4011-Section04.js:2482 [S04] S15 target electricity changed: d_136
4011-Section04.js:1577 [S04] Starting dual-engine Excel-compliant calculations
4011-Section04.js:1018 [S04] Row 32 Subtotals - F32: 132938, G32: 6779.838, J32: 141350.1372458256, K32: 7208.856999537105
4011-Section04.js:94 [S04] j_32 update: 141350.1372458256
4011-Section01.js:1250 [S01] j_32 listener: 134083.9420458256 → 141350.1372458256
4011-Section01.js:1251 [S01] 🕐 j_32 listener timing: StateManager current j_32 = 141350.1372458256
24011-Section05.js:266 🔄 [S05] updateCalculatedDisplayValues: mode=target
4011-Section15.js:1750 [S15] 🎯 TGT S03 CLIMATE READ: h_23=18, d_23=-24, d_24=30, h_24=24
4011-StateManager.js:343 [StateManager] 🎯 h_10 setValue: "99.04017463973207" (state: calculated)
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
updateTargetModelDOMValues @ 4011-Section13.js:3617
calculateTargetModel @ 4011-Section13.js:3573
calculateAll @ 4011-Section13.js:3406
calculateAndRefresh @ 4011-Section13.js:2368
(anonymous) @ 4011-Section13.js:2399
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
(anonymous) @ 4011-Section10.js:2679
(anonymous) @ 4011-StateManager.js:543
notifyListeners @ 4011-StateManager.js:541
setValue @ 4011-StateManager.js:419
(anonymous) @ 4011-Section13.js:3765
storeReferenceResults @ 4011-Section13.js:3757
calculateReferenceModel @ 4011-Section13.js:3504
calculateAll @ 4011-Section13.js:3402
calculateAndRefresh @ 4011-Section13.js:2368
(anonymous) @ 4011-StateManager.js:543
notifyListeners @ 4011-StateManager.js:541
setValue @ 4011-StateManager.js:419
setValue @ 4011-Section10.js:230
calculateSubtotals @ 4011-Section10.js:2251
calculateTargetModel @ 4011-Section10.js:1847
calculateAll @ 4011-Section10.js:1824
(anonymous) @ 4011-Section10.js:2670
(anonymous) @ 4011-StateManager.js:543
notifyListeners @ 4011-StateManager.js:541
setValue @ 4011-StateManager.js:419
setValue @ 4011-Section03.js:212
setFieldValue @ 4011-Section03.js:450
(anonymous) @ 4011-Section03.js:2213
(anonymous) @ 4011-StateManager.js:543
notifyListeners @ 4011-StateManager.js:541
setValue @ 4011-StateManager.js:419
(anonymous) @ 4011-Section03.js:1689
calculateTargetModel @ 4011-Section03.js:1686
calculateAll @ 4011-Section03.js:1665
(anonymous) @ 4011-Section03.js:2057
4011-Section15.js:1750 [S15] 🎯 TGT S03 CLIMATE READ: h_23=18, d_23=-24, d_24=30, h_24=24
4011-StateManager.js:343 [StateManager] 🎯 h_10 setValue: "99.04017463973207" (state: calculated)
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
updateTargetModelDOMValues @ 4011-Section13.js:3617
calculateTargetModel @ 4011-Section13.js:3573
calculateAll @ 4011-Section13.js:3406
calculateAndRefresh @ 4011-Section13.js:2368
(anonymous) @ 4011-Section13.js:2399
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
(anonymous) @ 4011-Section10.js:2679
(anonymous) @ 4011-StateManager.js:543
notifyListeners @ 4011-StateManager.js:541
setValue @ 4011-StateManager.js:419
(anonymous) @ 4011-Section13.js:3765
storeReferenceResults @ 4011-Section13.js:3757
calculateReferenceModel @ 4011-Section13.js:3504
calculateAll @ 4011-Section13.js:3402
calculateAndRefresh @ 4011-Section13.js:2368
(anonymous) @ 4011-StateManager.js:543
notifyListeners @ 4011-StateManager.js:541
setValue @ 4011-StateManager.js:419
setValue @ 4011-Section10.js:230
calculateSubtotals @ 4011-Section10.js:2251
calculateTargetModel @ 4011-Section10.js:1847
calculateAll @ 4011-Section10.js:1824
(anonymous) @ 4011-Section10.js:2670
(anonymous) @ 4011-StateManager.js:543
notifyListeners @ 4011-StateManager.js:541
setValue @ 4011-StateManager.js:419
setValue @ 4011-Section03.js:212
setFieldValue @ 4011-Section03.js:450
(anonymous) @ 4011-Section03.js:2213
(anonymous) @ 4011-StateManager.js:543
notifyListeners @ 4011-StateManager.js:541
setValue @ 4011-StateManager.js:419
(anonymous) @ 4011-Section03.js:1689
calculateTargetModel @ 4011-Section03.js:1686
calculateAll @ 4011-Section03.js:1665
(anonymous) @ 4011-Section03.js:2057
4011-Section15.js:1750 [S15] 🎯 TGT S03 CLIMATE READ: h_23=18, d_23=-24, d_24=30, h_24=24
4011-StateManager.js:343 [StateManager] 🎯 h_10 setValue: "99.04017463973207" (state: calculated)
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
updateTargetModelDOMValues @ 4011-Section13.js:3617
calculateTargetModel @ 4011-Section13.js:3573
calculateAll @ 4011-Section13.js:3406
calculateAndRefresh @ 4011-Section13.js:2368
(anonymous) @ 4011-Section13.js:2399
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
(anonymous) @ 4011-Section10.js:2679
(anonymous) @ 4011-StateManager.js:543
notifyListeners @ 4011-StateManager.js:541
setValue @ 4011-StateManager.js:419
(anonymous) @ 4011-Section13.js:3765
storeReferenceResults @ 4011-Section13.js:3757
calculateReferenceModel @ 4011-Section13.js:3504
calculateAll @ 4011-Section13.js:3402
calculateAndRefresh @ 4011-Section13.js:2368
(anonymous) @ 4011-StateManager.js:543
notifyListeners @ 4011-StateManager.js:541
setValue @ 4011-StateManager.js:419
setValue @ 4011-Section10.js:230
calculateSubtotals @ 4011-Section10.js:2251
calculateTargetModel @ 4011-Section10.js:1847
calculateAll @ 4011-Section10.js:1824
(anonymous) @ 4011-Section10.js:2670
(anonymous) @ 4011-StateManager.js:543
notifyListeners @ 4011-StateManager.js:541
setValue @ 4011-StateManager.js:419
setValue @ 4011-Section03.js:212
setFieldValue @ 4011-Section03.js:450
(anonymous) @ 4011-Section03.js:2213
(anonymous) @ 4011-StateManager.js:543
notifyListeners @ 4011-StateManager.js:541
setValue @ 4011-StateManager.js:419
(anonymous) @ 4011-Section03.js:1689
calculateTargetModel @ 4011-Section03.js:1686
calculateAll @ 4011-Section03.js:1665
(anonymous) @ 4011-Section03.js:2057
4011-Section15.js:1750 [S15] 🎯 TGT S03 CLIMATE READ: h_23=18, d_23=-24, d_24=30, h_24=24
4011-StateManager.js:343 [StateManager] 🎯 h_10 setValue: "99.04017463973207" (state: calculated)
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
updateTargetModelDOMValues @ 4011-Section13.js:3617
calculateTargetModel @ 4011-Section13.js:3573
calculateAll @ 4011-Section13.js:3406
calculateAndRefresh @ 4011-Section13.js:2368
(anonymous) @ 4011-Section13.js:2399
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
(anonymous) @ 4011-Section10.js:2679
(anonymous) @ 4011-StateManager.js:543
notifyListeners @ 4011-StateManager.js:541
setValue @ 4011-StateManager.js:419
(anonymous) @ 4011-Section13.js:3765
storeReferenceResults @ 4011-Section13.js:3757
calculateReferenceModel @ 4011-Section13.js:3504
calculateAll @ 4011-Section13.js:3402
calculateAndRefresh @ 4011-Section13.js:2368
(anonymous) @ 4011-StateManager.js:543
notifyListeners @ 4011-StateManager.js:541
setValue @ 4011-StateManager.js:419
setValue @ 4011-Section10.js:230
calculateSubtotals @ 4011-Section10.js:2251
calculateTargetModel @ 4011-Section10.js:1847
calculateAll @ 4011-Section10.js:1824
(anonymous) @ 4011-Section10.js:2670
(anonymous) @ 4011-StateManager.js:543
notifyListeners @ 4011-StateManager.js:541
setValue @ 4011-StateManager.js:419
setValue @ 4011-Section03.js:212
setFieldValue @ 4011-Section03.js:450
(anonymous) @ 4011-Section03.js:2213
(anonymous) @ 4011-StateManager.js:543
notifyListeners @ 4011-StateManager.js:541
setValue @ 4011-StateManager.js:419
(anonymous) @ 4011-Section03.js:1689
calculateTargetModel @ 4011-Section03.js:1686
calculateAll @ 4011-Section03.js:1665
(anonymous) @ 4011-Section03.js:2057
4011-Section04.js:1018 [S04] Row 32 Subtotals - F32: 132938, G32: 6779.838, J32: 347966.051518286, K32: 17746.268627432586
4011-Section04.js:1668 [S04] Reference model calculations complete
4011-Section04.js:1674 [S04DB] storeReference: ref_j_32=347966.051518286, ref_k_32=17746.268627432586 | current target j_32=141350.1372458256, k_32=7208.856999537105
4011-Section04.js:493 [S04] 🔄 Updating calculated display values for target mode
4011-Section04.js:501 [S04DB] displayContext mode=target j_32=141350.1372458256 ref_j_32=347966.051518286 k_32=7208.856999537105 ref_k_32=17746.268627432586
4011-Section04.js:582 [S04 DEBUG] Target mode - j_32: 141350.1372458256
4011-Section04.js:582 [S04 DEBUG] Target mode - k_32: 7208.856999537105
4011-Section04.js:582 [S04 DEBUG] Target mode - l_27: 51
4011-Section04.js:617 [S04] Calculated display values updated for target mode
4011-Section04.js:1599 [S04] Dual-engine calculations completed successfully
4011-Section04.js:493 [S04] 🔄 Updating calculated display values for target mode
4011-Section04.js:501 [S04DB] displayContext mode=target j_32=141350.1372458256 ref_j_32=347966.051518286 k_32=7208.856999537105 ref_k_32=17746.268627432586
4011-Section04.js:582 [S04 DEBUG] Target mode - j_32: 141350.1372458256
4011-Section04.js:582 [S04 DEBUG] Target mode - k_32: 7208.856999537105
4011-Section04.js:582 [S04 DEBUG] Target mode - l_27: 51
4011-Section04.js:617 [S04] Calculated display values updated for target mode
4011-StateManager.js:343 [StateManager] 🎯 h_10 setValue: "99.04017463973207" (state: calculated)
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
updateTargetModelDOMValues @ 4011-Section13.js:3617
calculateTargetModel @ 4011-Section13.js:3573
calculateAll @ 4011-Section13.js:3406
calculateAndRefresh @ 4011-Section13.js:2368
(anonymous) @ 4011-Section13.js:2399
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
(anonymous) @ 4011-Section10.js:2679
(anonymous) @ 4011-StateManager.js:543
notifyListeners @ 4011-StateManager.js:541
setValue @ 4011-StateManager.js:419
(anonymous) @ 4011-Section13.js:3765
storeReferenceResults @ 4011-Section13.js:3757
calculateReferenceModel @ 4011-Section13.js:3504
calculateAll @ 4011-Section13.js:3402
calculateAndRefresh @ 4011-Section13.js:2368
(anonymous) @ 4011-StateManager.js:543
notifyListeners @ 4011-StateManager.js:541
setValue @ 4011-StateManager.js:419
setValue @ 4011-Section10.js:230
calculateSubtotals @ 4011-Section10.js:2251
calculateTargetModel @ 4011-Section10.js:1847
calculateAll @ 4011-Section10.js:1824
(anonymous) @ 4011-Section10.js:2670
(anonymous) @ 4011-StateManager.js:543
notifyListeners @ 4011-StateManager.js:541
setValue @ 4011-StateManager.js:419
setValue @ 4011-Section03.js:212
setFieldValue @ 4011-Section03.js:450
(anonymous) @ 4011-Section03.js:2213
(anonymous) @ 4011-StateManager.js:543
notifyListeners @ 4011-StateManager.js:541
setValue @ 4011-StateManager.js:419
(anonymous) @ 4011-Section03.js:1689
calculateTargetModel @ 4011-Section03.js:1686
calculateAll @ 4011-Section03.js:1665
(anonymous) @ 4011-Section03.js:2057
4011-Section15.js:1750 [S15] 🎯 TGT S03 CLIMATE READ: h_23=18, d_23=-24, d_24=30, h_24=24
4011-StateManager.js:343 [StateManager] 🎯 h_10 setValue: "99.04017463973207" (state: calculated)
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
updateTargetModelDOMValues @ 4011-Section13.js:3617
calculateTargetModel @ 4011-Section13.js:3573
calculateAll @ 4011-Section13.js:3406
calculateAndRefresh @ 4011-Section13.js:2368
(anonymous) @ 4011-Section13.js:2399
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
(anonymous) @ 4011-Section10.js:2679
(anonymous) @ 4011-StateManager.js:543
notifyListeners @ 4011-StateManager.js:541
setValue @ 4011-StateManager.js:419
(anonymous) @ 4011-Section13.js:3765
storeReferenceResults @ 4011-Section13.js:3757
calculateReferenceModel @ 4011-Section13.js:3504
calculateAll @ 4011-Section13.js:3402
calculateAndRefresh @ 4011-Section13.js:2368
(anonymous) @ 4011-StateManager.js:543
notifyListeners @ 4011-StateManager.js:541
setValue @ 4011-StateManager.js:419
setValue @ 4011-Section10.js:230
calculateSubtotals @ 4011-Section10.js:2251
calculateTargetModel @ 4011-Section10.js:1847
calculateAll @ 4011-Section10.js:1824
(anonymous) @ 4011-Section10.js:2670
(anonymous) @ 4011-StateManager.js:543
notifyListeners @ 4011-StateManager.js:541
setValue @ 4011-StateManager.js:419
setValue @ 4011-Section03.js:212
setFieldValue @ 4011-Section03.js:450
(anonymous) @ 4011-Section03.js:2213
(anonymous) @ 4011-StateManager.js:543
notifyListeners @ 4011-StateManager.js:541
setValue @ 4011-StateManager.js:419
(anonymous) @ 4011-Section03.js:1689
calculateTargetModel @ 4011-Section03.js:1686
calculateAll @ 4011-Section03.js:1665
(anonymous) @ 4011-Section03.js:2057
24011-Section14.js:1416 [S14 LISTENER] 🔥 d_122 changed - triggering calculateAll() + UI update
4011-Section15.js:1750 [S15] 🎯 TGT S03 CLIMATE READ: h_23=18, d_23=-24, d_24=30, h_24=24
4011-StateManager.js:343 [StateManager] 🎯 h_10 setValue: "99.04017463973207" (state: calculated)
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
updateTargetModelDOMValues @ 4011-Section13.js:3687
calculateTargetModel @ 4011-Section13.js:3573
calculateAll @ 4011-Section13.js:3406
calculateAndRefresh @ 4011-Section13.js:2368
(anonymous) @ 4011-Section13.js:2399
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
(anonymous) @ 4011-Section10.js:2679
(anonymous) @ 4011-StateManager.js:543
notifyListeners @ 4011-StateManager.js:541
setValue @ 4011-StateManager.js:419
(anonymous) @ 4011-Section13.js:3765
storeReferenceResults @ 4011-Section13.js:3757
calculateReferenceModel @ 4011-Section13.js:3504
calculateAll @ 4011-Section13.js:3402
calculateAndRefresh @ 4011-Section13.js:2368
(anonymous) @ 4011-StateManager.js:543
notifyListeners @ 4011-StateManager.js:541
setValue @ 4011-StateManager.js:419
setValue @ 4011-Section10.js:230
calculateSubtotals @ 4011-Section10.js:2251
calculateTargetModel @ 4011-Section10.js:1847
calculateAll @ 4011-Section10.js:1824
(anonymous) @ 4011-Section10.js:2670
(anonymous) @ 4011-StateManager.js:543
notifyListeners @ 4011-StateManager.js:541
setValue @ 4011-StateManager.js:419
setValue @ 4011-Section03.js:212
setFieldValue @ 4011-Section03.js:450
(anonymous) @ 4011-Section03.js:2213
(anonymous) @ 4011-StateManager.js:543
notifyListeners @ 4011-StateManager.js:541
setValue @ 4011-StateManager.js:419
(anonymous) @ 4011-Section03.js:1689
calculateTargetModel @ 4011-Section03.js:1686
calculateAll @ 4011-Section03.js:1665
(anonymous) @ 4011-Section03.js:2057
4011-Section15.js:1750 [S15] 🎯 TGT S03 CLIMATE READ: h_23=18, d_23=-24, d_24=30, h_24=24
4011-StateManager.js:343 [StateManager] 🎯 h_10 setValue: "99.04017463973207" (state: calculated)
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
updateTargetModelDOMValues @ 4011-Section13.js:3687
calculateTargetModel @ 4011-Section13.js:3573
calculateAll @ 4011-Section13.js:3406
calculateAndRefresh @ 4011-Section13.js:2368
(anonymous) @ 4011-Section13.js:2399
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
(anonymous) @ 4011-Section10.js:2679
(anonymous) @ 4011-StateManager.js:543
notifyListeners @ 4011-StateManager.js:541
setValue @ 4011-StateManager.js:419
(anonymous) @ 4011-Section13.js:3765
storeReferenceResults @ 4011-Section13.js:3757
calculateReferenceModel @ 4011-Section13.js:3504
calculateAll @ 4011-Section13.js:3402
calculateAndRefresh @ 4011-Section13.js:2368
(anonymous) @ 4011-StateManager.js:543
notifyListeners @ 4011-StateManager.js:541
setValue @ 4011-StateManager.js:419
setValue @ 4011-Section10.js:230
calculateSubtotals @ 4011-Section10.js:2251
calculateTargetModel @ 4011-Section10.js:1847
calculateAll @ 4011-Section10.js:1824
(anonymous) @ 4011-Section10.js:2670
(anonymous) @ 4011-StateManager.js:543
notifyListeners @ 4011-StateManager.js:541
setValue @ 4011-StateManager.js:419
setValue @ 4011-Section03.js:212
setFieldValue @ 4011-Section03.js:450
(anonymous) @ 4011-Section03.js:2213
(anonymous) @ 4011-StateManager.js:543
notifyListeners @ 4011-StateManager.js:541
setValue @ 4011-StateManager.js:419
(anonymous) @ 4011-Section03.js:1689
calculateTargetModel @ 4011-Section03.js:1686
calculateAll @ 4011-Section03.js:1665
(anonymous) @ 4011-Section03.js:2057
4011-Section13.js:3591 [Section13] Target Model calculations complete
4011-Section13.js:3407 [Section13] ✅ Target Model complete
4011-Section13.js:3418 [Section13] 🔄 Re-writing Reference results to prevent race conditions...
4011-Section15.js:1750 [S15] 🎯 TGT S03 CLIMATE READ: h_23=18, d_23=-24, d_24=30, h_24=24
4011-StateManager.js:343 [StateManager] 🎯 h_10 setValue: "99.04017463973207" (state: calculated)
4011-StateManager.js:346 [StateManager] h_10 setValue stack trace:
setValue @ 4011-StateManager.js:346
calculateValues @ 4011-Section15.js:1832
calculateTargetModel @ 4011-Section15.js:1662
calculateAll @ 4011-Section15.js:1328
(anonymous) @ 4011-Section15.js:2121
(anonymous) @ 4011-StateManager.js:543
notifyListeners @ 4011-StateManager.js:541
setValue @ 4011-StateManager.js:419
(anonymous) @ 4011-Section13.js:3423
calculateAll @ 4011-Section13.js:3421
calculateAndRefresh @ 4011-Section13.js:2368
(anonymous) @ 4011-Section13.js:2399
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
(anonymous) @ 4011-Section10.js:2679
(anonymous) @ 4011-StateManager.js:543
notifyListeners @ 4011-StateManager.js:541
setValue @ 4011-StateManager.js:419
(anonymous) @ 4011-Section13.js:3765
storeReferenceResults @ 4011-Section13.js:3757
calculateReferenceModel @ 4011-Section13.js:3504
calculateAll @ 4011-Section13.js:3402
calculateAndRefresh @ 4011-Section13.js:2368
(anonymous) @ 4011-StateManager.js:543
notifyListeners @ 4011-StateManager.js:541
setValue @ 4011-StateManager.js:419
setValue @ 4011-Section10.js:230
calculateSubtotals @ 4011-Section10.js:2251
calculateTargetModel @ 4011-Section10.js:1847
calculateAll @ 4011-Section10.js:1824
(anonymous) @ 4011-Section10.js:2670
(anonymous) @ 4011-StateManager.js:543
notifyListeners @ 4011-StateManager.js:541
setValue @ 4011-StateManager.js:419
setValue @ 4011-Section03.js:212
setFieldValue @ 4011-Section03.js:450
(anonymous) @ 4011-Section03.js:2213
(anonymous) @ 4011-StateManager.js:543
notifyListeners @ 4011-StateManager.js:541
setValue @ 4011-StateManager.js:419
(anonymous) @ 4011-Section03.js:1689
calculateTargetModel @ 4011-Section03.js:1686
calculateAll @ 4011-Section03.js:1665
(anonymous) @ 4011-Section03.js:2057
4011-Section15.js:1750 [S15] 🎯 TGT S03 CLIMATE READ: h_23=18, d_23=-24, d_24=30, h_24=24
4011-StateManager.js:343 [StateManager] 🎯 h_10 setValue: "99.04017463973207" (state: calculated)
4011-StateManager.js:346 [StateManager] h_10 setValue stack trace:
setValue @ 4011-StateManager.js:346
calculateValues @ 4011-Section15.js:1832
calculateTargetModel @ 4011-Section15.js:1662
calculateAll @ 4011-Section15.js:1328
(anonymous) @ 4011-Section15.js:2121
(anonymous) @ 4011-StateManager.js:543
notifyListeners @ 4011-StateManager.js:541
setValue @ 4011-StateManager.js:419
(anonymous) @ 4011-Section13.js:3423
calculateAll @ 4011-Section13.js:3421
calculateAndRefresh @ 4011-Section13.js:2368
(anonymous) @ 4011-Section13.js:2399
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
(anonymous) @ 4011-Section10.js:2679
(anonymous) @ 4011-StateManager.js:543
notifyListeners @ 4011-StateManager.js:541
setValue @ 4011-StateManager.js:419
(anonymous) @ 4011-Section13.js:3765
storeReferenceResults @ 4011-Section13.js:3757
calculateReferenceModel @ 4011-Section13.js:3504
calculateAll @ 4011-Section13.js:3402
calculateAndRefresh @ 4011-Section13.js:2368
(anonymous) @ 4011-StateManager.js:543
notifyListeners @ 4011-StateManager.js:541
setValue @ 4011-StateManager.js:419
setValue @ 4011-Section10.js:230
calculateSubtotals @ 4011-Section10.js:2251
calculateTargetModel @ 4011-Section10.js:1847
calculateAll @ 4011-Section10.js:1824
(anonymous) @ 4011-Section10.js:2670
(anonymous) @ 4011-StateManager.js:543
notifyListeners @ 4011-StateManager.js:541
setValue @ 4011-StateManager.js:419
setValue @ 4011-Section03.js:212
setFieldValue @ 4011-Section03.js:450
(anonymous) @ 4011-Section03.js:2213
(anonymous) @ 4011-StateManager.js:543
notifyListeners @ 4011-StateManager.js:541
setValue @ 4011-StateManager.js:419
(anonymous) @ 4011-Section03.js:1689
calculateTargetModel @ 4011-Section03.js:1686
calculateAll @ 4011-Section03.js:1665
(anonymous) @ 4011-Section03.js:2057
4011-Section15.js:1750 [S15] 🎯 TGT S03 CLIMATE READ: h_23=18, d_23=-24, d_24=30, h_24=24
4011-StateManager.js:343 [StateManager] 🎯 h_10 setValue: "99.04017463973207" (state: calculated)
4011-StateManager.js:346 [StateManager] h_10 setValue stack trace:
setValue @ 4011-StateManager.js:346
calculateValues @ 4011-Section15.js:1832
calculateTargetModel @ 4011-Section15.js:1662
calculateAll @ 4011-Section15.js:1328
(anonymous) @ 4011-Section15.js:2121
(anonymous) @ 4011-StateManager.js:543
notifyListeners @ 4011-StateManager.js:541
setValue @ 4011-StateManager.js:419
(anonymous) @ 4011-Section13.js:3423
calculateAll @ 4011-Section13.js:3421
calculateAndRefresh @ 4011-Section13.js:2368
(anonymous) @ 4011-Section13.js:2399
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
(anonymous) @ 4011-Section10.js:2679
(anonymous) @ 4011-StateManager.js:543
notifyListeners @ 4011-StateManager.js:541
setValue @ 4011-StateManager.js:419
(anonymous) @ 4011-Section13.js:3765
storeReferenceResults @ 4011-Section13.js:3757
calculateReferenceModel @ 4011-Section13.js:3504
calculateAll @ 4011-Section13.js:3402
calculateAndRefresh @ 4011-Section13.js:2368
(anonymous) @ 4011-StateManager.js:543
notifyListeners @ 4011-StateManager.js:541
setValue @ 4011-StateManager.js:419
setValue @ 4011-Section10.js:230
calculateSubtotals @ 4011-Section10.js:2251
calculateTargetModel @ 4011-Section10.js:1847
calculateAll @ 4011-Section10.js:1824
(anonymous) @ 4011-Section10.js:2670
(anonymous) @ 4011-StateManager.js:543
notifyListeners @ 4011-StateManager.js:541
setValue @ 4011-StateManager.js:419
setValue @ 4011-Section03.js:212
setFieldValue @ 4011-Section03.js:450
(anonymous) @ 4011-Section03.js:2213
(anonymous) @ 4011-StateManager.js:543
notifyListeners @ 4011-StateManager.js:541
setValue @ 4011-StateManager.js:419
(anonymous) @ 4011-Section03.js:1689
calculateTargetModel @ 4011-Section03.js:1686
calculateAll @ 4011-Section03.js:1665
(anonymous) @ 4011-Section03.js:2057
4011-Section15.js:1750 [S15] 🎯 TGT S03 CLIMATE READ: h_23=18, d_23=-24, d_24=30, h_24=24
4011-StateManager.js:343 [StateManager] 🎯 h_10 setValue: "99.04017463973207" (state: calculated)
4011-StateManager.js:346 [StateManager] h_10 setValue stack trace:
setValue @ 4011-StateManager.js:346
calculateValues @ 4011-Section15.js:1832
calculateTargetModel @ 4011-Section15.js:1662
calculateAll @ 4011-Section15.js:1328
(anonymous) @ 4011-Section15.js:2121
(anonymous) @ 4011-StateManager.js:543
notifyListeners @ 4011-StateManager.js:541
setValue @ 4011-StateManager.js:419
(anonymous) @ 4011-Section13.js:3423
calculateAll @ 4011-Section13.js:3421
calculateAndRefresh @ 4011-Section13.js:2368
(anonymous) @ 4011-Section13.js:2399
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
(anonymous) @ 4011-Section10.js:2679
(anonymous) @ 4011-StateManager.js:543
notifyListeners @ 4011-StateManager.js:541
setValue @ 4011-StateManager.js:419
(anonymous) @ 4011-Section13.js:3765
storeReferenceResults @ 4011-Section13.js:3757
calculateReferenceModel @ 4011-Section13.js:3504
calculateAll @ 4011-Section13.js:3402
calculateAndRefresh @ 4011-Section13.js:2368
(anonymous) @ 4011-StateManager.js:543
notifyListeners @ 4011-StateManager.js:541
setValue @ 4011-StateManager.js:419
setValue @ 4011-Section10.js:230
calculateSubtotals @ 4011-Section10.js:2251
calculateTargetModel @ 4011-Section10.js:1847
calculateAll @ 4011-Section10.js:1824
(anonymous) @ 4011-Section10.js:2670
(anonymous) @ 4011-StateManager.js:543
notifyListeners @ 4011-StateManager.js:541
setValue @ 4011-StateManager.js:419
setValue @ 4011-Section03.js:212
setFieldValue @ 4011-Section03.js:450
(anonymous) @ 4011-Section03.js:2213
(anonymous) @ 4011-StateManager.js:543
notifyListeners @ 4011-StateManager.js:541
setValue @ 4011-StateManager.js:419
(anonymous) @ 4011-Section03.js:1689
calculateTargetModel @ 4011-Section03.js:1686
calculateAll @ 4011-Section03.js:1665
(anonymous) @ 4011-Section03.js:2057
4011-Section04.js:2713 [S04] S13 space oil volume changed (Reference): ref_f_115
4011-Section04.js:1018 [S04] Row 32 Subtotals - F32: 132938, G32: 6779.838, J32: 347966.051518286, K32: 17746.268627432586
4011-Section04.js:1668 [S04] Reference model calculations complete
4011-Section04.js:1674 [S04DB] storeReference: ref_j_32=347966.051518286, ref_k_32=17746.268627432586 | current target j_32=141350.1372458256, k_32=7208.856999537105
4011-Section04.js:493 [S04] 🔄 Updating calculated display values for target mode
4011-Section04.js:501 [S04DB] displayContext mode=target j_32=141350.1372458256 ref_j_32=347966.051518286 k_32=7208.856999537105 ref_k_32=17746.268627432586
4011-Section04.js:582 [S04 DEBUG] Target mode - j_32: 141350.1372458256
4011-Section04.js:582 [S04 DEBUG] Target mode - k_32: 7208.856999537105
4011-Section04.js:582 [S04 DEBUG] Target mode - l_27: 51
4011-Section04.js:617 [S04] Calculated display values updated for target mode
4011-Section04.js:2721 [S04] S13 space gas volume changed (Reference): ref_h_115
4011-Section04.js:1018 [S04] Row 32 Subtotals - F32: 132938, G32: 6779.838, J32: 347966.051518286, K32: 17746.268627432586
4011-Section04.js:1668 [S04] Reference model calculations complete
4011-Section04.js:1674 [S04DB] storeReference: ref_j_32=347966.051518286, ref_k_32=17746.268627432586 | current target j_32=141350.1372458256, k_32=7208.856999537105
4011-Section04.js:493 [S04] 🔄 Updating calculated display values for target mode
4011-Section04.js:501 [S04DB] displayContext mode=target j_32=141350.1372458256 ref_j_32=347966.051518286 k_32=7208.856999537105 ref_k_32=17746.268627432586
4011-Section04.js:582 [S04 DEBUG] Target mode - j_32: 141350.1372458256
4011-Section04.js:582 [S04 DEBUG] Target mode - k_32: 7208.856999537105
4011-Section04.js:582 [S04 DEBUG] Target mode - l_27: 51
4011-Section04.js:617 [S04] Calculated display values updated for target mode
4011-Section15.js:1750 [S15] 🎯 TGT S03 CLIMATE READ: h_23=18, d_23=-24, d_24=30, h_24=24
4011-StateManager.js:343 [StateManager] 🎯 h_10 setValue: "99.04017463973207" (state: calculated)
4011-StateManager.js:346 [StateManager] h_10 setValue stack trace:
setValue @ 4011-StateManager.js:346
calculateValues @ 4011-Section15.js:1832
calculateTargetModel @ 4011-Section15.js:1662
calculateAll @ 4011-Section15.js:1328
(anonymous) @ 4011-Section15.js:2121
(anonymous) @ 4011-StateManager.js:543
notifyListeners @ 4011-StateManager.js:541
setValue @ 4011-StateManager.js:419
(anonymous) @ 4011-Section13.js:3423
calculateAll @ 4011-Section13.js:3421
calculateAndRefresh @ 4011-Section13.js:2368
(anonymous) @ 4011-Section13.js:2399
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
(anonymous) @ 4011-Section10.js:2679
(anonymous) @ 4011-StateManager.js:543
notifyListeners @ 4011-StateManager.js:541
setValue @ 4011-StateManager.js:419
(anonymous) @ 4011-Section13.js:3765
storeReferenceResults @ 4011-Section13.js:3757
calculateReferenceModel @ 4011-Section13.js:3504
calculateAll @ 4011-Section13.js:3402
calculateAndRefresh @ 4011-Section13.js:2368
(anonymous) @ 4011-StateManager.js:543
notifyListeners @ 4011-StateManager.js:541
setValue @ 4011-StateManager.js:419
setValue @ 4011-Section10.js:230
calculateSubtotals @ 4011-Section10.js:2251
calculateTargetModel @ 4011-Section10.js:1847
calculateAll @ 4011-Section10.js:1824
(anonymous) @ 4011-Section10.js:2670
(anonymous) @ 4011-StateManager.js:543
notifyListeners @ 4011-StateManager.js:541
setValue @ 4011-StateManager.js:419
setValue @ 4011-Section03.js:212
setFieldValue @ 4011-Section03.js:450
(anonymous) @ 4011-Section03.js:2213
(anonymous) @ 4011-StateManager.js:543
notifyListeners @ 4011-StateManager.js:541
setValue @ 4011-StateManager.js:419
(anonymous) @ 4011-Section03.js:1689
calculateTargetModel @ 4011-Section03.js:1686
calculateAll @ 4011-Section03.js:1665
(anonymous) @ 4011-Section03.js:2057
4011-Section15.js:1750 [S15] 🎯 TGT S03 CLIMATE READ: h_23=18, d_23=-24, d_24=30, h_24=24
4011-StateManager.js:343 [StateManager] 🎯 h_10 setValue: "99.04017463973207" (state: calculated)
4011-StateManager.js:346 [StateManager] h_10 setValue stack trace:
setValue @ 4011-StateManager.js:346
calculateValues @ 4011-Section15.js:1832
calculateTargetModel @ 4011-Section15.js:1662
calculateAll @ 4011-Section15.js:1328
(anonymous) @ 4011-Section15.js:2121
(anonymous) @ 4011-StateManager.js:543
notifyListeners @ 4011-StateManager.js:541
setValue @ 4011-StateManager.js:419
(anonymous) @ 4011-Section13.js:3423
calculateAll @ 4011-Section13.js:3421
calculateAndRefresh @ 4011-Section13.js:2368
(anonymous) @ 4011-Section13.js:2399
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
(anonymous) @ 4011-Section10.js:2679
(anonymous) @ 4011-StateManager.js:543
notifyListeners @ 4011-StateManager.js:541
setValue @ 4011-StateManager.js:419
(anonymous) @ 4011-Section13.js:3765
storeReferenceResults @ 4011-Section13.js:3757
calculateReferenceModel @ 4011-Section13.js:3504
calculateAll @ 4011-Section13.js:3402
calculateAndRefresh @ 4011-Section13.js:2368
(anonymous) @ 4011-StateManager.js:543
notifyListeners @ 4011-StateManager.js:541
setValue @ 4011-StateManager.js:419
setValue @ 4011-Section10.js:230
calculateSubtotals @ 4011-Section10.js:2251
calculateTargetModel @ 4011-Section10.js:1847
calculateAll @ 4011-Section10.js:1824
(anonymous) @ 4011-Section10.js:2670
(anonymous) @ 4011-StateManager.js:543
notifyListeners @ 4011-StateManager.js:541
setValue @ 4011-StateManager.js:419
setValue @ 4011-Section03.js:212
setFieldValue @ 4011-Section03.js:450
(anonymous) @ 4011-Section03.js:2213
(anonymous) @ 4011-StateManager.js:543
notifyListeners @ 4011-StateManager.js:541
setValue @ 4011-StateManager.js:419
(anonymous) @ 4011-Section03.js:1689
calculateTargetModel @ 4011-Section03.js:1686
calculateAll @ 4011-Section03.js:1665
(anonymous) @ 4011-Section03.js:2057
4011-Section15.js:1750 [S15] 🎯 TGT S03 CLIMATE READ: h_23=18, d_23=-24, d_24=30, h_24=24
4011-StateManager.js:343 [StateManager] 🎯 h_10 setValue: "99.04017463973207" (state: calculated)
4011-StateManager.js:346 [StateManager] h_10 setValue stack trace:
setValue @ 4011-StateManager.js:346
calculateValues @ 4011-Section15.js:1832
calculateTargetModel @ 4011-Section15.js:1662
calculateAll @ 4011-Section15.js:1328
(anonymous) @ 4011-Section15.js:2121
(anonymous) @ 4011-StateManager.js:543
notifyListeners @ 4011-StateManager.js:541
setValue @ 4011-StateManager.js:419
(anonymous) @ 4011-Section13.js:3423
calculateAll @ 4011-Section13.js:3421
calculateAndRefresh @ 4011-Section13.js:2368
(anonymous) @ 4011-Section13.js:2399
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
(anonymous) @ 4011-Section10.js:2679
(anonymous) @ 4011-StateManager.js:543
notifyListeners @ 4011-StateManager.js:541
setValue @ 4011-StateManager.js:419
(anonymous) @ 4011-Section13.js:3765
storeReferenceResults @ 4011-Section13.js:3757
calculateReferenceModel @ 4011-Section13.js:3504
calculateAll @ 4011-Section13.js:3402
calculateAndRefresh @ 4011-Section13.js:2368
(anonymous) @ 4011-StateManager.js:543
notifyListeners @ 4011-StateManager.js:541
setValue @ 4011-StateManager.js:419
setValue @ 4011-Section10.js:230
calculateSubtotals @ 4011-Section10.js:2251
calculateTargetModel @ 4011-Section10.js:1847
calculateAll @ 4011-Section10.js:1824
(anonymous) @ 4011-Section10.js:2670
(anonymous) @ 4011-StateManager.js:543
notifyListeners @ 4011-StateManager.js:541
setValue @ 4011-StateManager.js:419
setValue @ 4011-Section03.js:212
setFieldValue @ 4011-Section03.js:450
(anonymous) @ 4011-Section03.js:2213
(anonymous) @ 4011-StateManager.js:543
notifyListeners @ 4011-StateManager.js:541
setValue @ 4011-StateManager.js:419
(anonymous) @ 4011-Section03.js:1689
calculateTargetModel @ 4011-Section03.js:1686
calculateAll @ 4011-Section03.js:1665
(anonymous) @ 4011-Section03.js:2057
4011-Section15.js:1750 [S15] 🎯 TGT S03 CLIMATE READ: h_23=18, d_23=-24, d_24=30, h_24=24
4011-StateManager.js:343 [StateManager] 🎯 h_10 setValue: "99.04017463973207" (state: calculated)
4011-StateManager.js:346 [StateManager] h_10 setValue stack trace:
setValue @ 4011-StateManager.js:346
calculateValues @ 4011-Section15.js:1832
calculateTargetModel @ 4011-Section15.js:1662
calculateAll @ 4011-Section15.js:1328
(anonymous) @ 4011-Section15.js:2121
(anonymous) @ 4011-StateManager.js:543
notifyListeners @ 4011-StateManager.js:541
setValue @ 4011-StateManager.js:419
(anonymous) @ 4011-Section13.js:3423
calculateAll @ 4011-Section13.js:3421
calculateAndRefresh @ 4011-Section13.js:2368
(anonymous) @ 4011-Section13.js:2399
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
(anonymous) @ 4011-Section10.js:2679
(anonymous) @ 4011-StateManager.js:543
notifyListeners @ 4011-StateManager.js:541
setValue @ 4011-StateManager.js:419
(anonymous) @ 4011-Section13.js:3765
storeReferenceResults @ 4011-Section13.js:3757
calculateReferenceModel @ 4011-Section13.js:3504
calculateAll @ 4011-Section13.js:3402
calculateAndRefresh @ 4011-Section13.js:2368
(anonymous) @ 4011-StateManager.js:543
notifyListeners @ 4011-StateManager.js:541
setValue @ 4011-StateManager.js:419
setValue @ 4011-Section10.js:230
calculateSubtotals @ 4011-Section10.js:2251
calculateTargetModel @ 4011-Section10.js:1847
calculateAll @ 4011-Section10.js:1824
(anonymous) @ 4011-Section10.js:2670
(anonymous) @ 4011-StateManager.js:543
notifyListeners @ 4011-StateManager.js:541
setValue @ 4011-StateManager.js:419
setValue @ 4011-Section03.js:212
setFieldValue @ 4011-Section03.js:450
(anonymous) @ 4011-Section03.js:2213
(anonymous) @ 4011-StateManager.js:543
notifyListeners @ 4011-StateManager.js:541
setValue @ 4011-StateManager.js:419
(anonymous) @ 4011-Section03.js:1689
calculateTargetModel @ 4011-Section03.js:1686
calculateAll @ 4011-Section03.js:1665
(anonymous) @ 4011-Section03.js:2057
4011-Section10.js:2676 S10: Reference listener triggered by ref_m_121, recalculating all.
4011-Section10.js:1819 [S10 DEBUG] calculateAll() triggered in target mode - running both engines
4011-Section10.js:2040 [S10REF] Utilization calc: ref_i_71=110562.1692, ref_i_79=10060.174319999998, totalGains=120622.34352
4011-Section10.js:2054 [S10REF] Using utilization method: NRC 40%
4011-Section10.js:2091 [S10REF] Final calc: utilizationFactor=0.4, usableGains=48248.937408
4011-Section10.js:2134 [S10REF] Complete: g_80=0.4, g_81=0.9966231765247549, i_80=48248.937408, i_81=120215.02315876257
4011-Section10.js:1827 [S10 DEBUG] Dual-engine calculations complete in target mode
4011-Section10.js:341 [S10DISPLAY] updateCalculatedDisplayValues() called in target mode
4011-Section10.js:448 [S10DISPLAY] Display (target) m_73 = 24.84
4011-Section10.js:448 [S10DISPLAY] Display (target) m_74 = 0.19
4011-Section10.js:448 [S10DISPLAY] Display (target) m_75 = 2.09
4011-Section10.js:448 [S10DISPLAY] Display (target) m_76 = 24.76
4011-Section10.js:448 [S10DISPLAY] Display (target) m_77 = 64.37
4011-Section10.js:448 [S10DISPLAY] Display (target) m_78 = 25.00
4011-Section10.js:448 [S10DISPLAY] Display (target) i_73 = 186.30
4011-Section10.js:448 [S10DISPLAY] Display (target) i_74 = 15.42
4011-Section10.js:448 [S10DISPLAY] Display (target) i_75 = 8.00
4011-Section10.js:448 [S10DISPLAY] Display (target) i_76 = 3,936.84
4011-Section10.js:448 [S10DISPLAY] Display (target) i_77 = 6,479.48
4011-Section10.js:448 [S10DISPLAY] Display (target) i_78 = 0.00
4011-Section10.js:448 [S10DISPLAY] Display (target) i_79 = 10,626.05
4011-Section10.js:448 [S10DISPLAY] Display (target) k_73 = 0.00
4011-Section10.js:448 [S10DISPLAY] Display (target) k_74 = 0.00
4011-Section10.js:448 [S10DISPLAY] Display (target) k_75 = 0.00
4011-Section10.js:448 [S10DISPLAY] Display (target) k_76 = 0.00
4011-Section10.js:448 [S10DISPLAY] Display (target) k_77 = 323.97
4011-Section10.js:448 [S10DISPLAY] Display (target) k_78 = 0.00
4011-Section10.js:448 [S10DISPLAY] Display (target) k_79 = 323.97
4011-Section10.js:448 [S10DISPLAY] Display (target) j_73 = 1.75%
4011-Section10.js:448 [S10DISPLAY] Display (target) j_74 = 0.15%
4011-Section10.js:448 [S10DISPLAY] Display (target) j_75 = 0.08%
4011-Section10.js:448 [S10DISPLAY] Display (target) j_76 = 37.05%
4011-Section10.js:448 [S10DISPLAY] Display (target) j_77 = 60.98%
4011-Section10.js:448 [S10DISPLAY] Display (target) j_78 = 0.00%
4011-Section10.js:448 [S10DISPLAY] Display (target) j_79 = 100.00%
4011-Section10.js:448 [S10DISPLAY] Display (target) l_73 = 0.00%
4011-Section10.js:448 [S10DISPLAY] Display (target) l_74 = 0.00%
4011-Section10.js:448 [S10DISPLAY] Display (target) l_75 = 0.00%
4011-Section10.js:448 [S10DISPLAY] Display (target) l_76 = 0.00%
4011-Section10.js:448 [S10DISPLAY] Display (target) l_77 = 100.00%
4011-Section10.js:448 [S10DISPLAY] Display (target) l_78 = 0.00%
4011-Section10.js:448 [S10DISPLAY] Display (target) l_79 = 100.00%
4011-Section10.js:448 [S10DISPLAY] Display (target) e_80 = 110,698.29
4011-Section10.js:448 [S10DISPLAY] Display (target) e_81 = 110,698.29
4011-Section10.js:415 [S10DISPLAY] g_80 DEBUG: mode=target, valueToDisplay=0.4
4011-Section10.js:448 [S10DISPLAY] Display (target) g_80 = 40.00%
4011-Section10.js:448 [S10DISPLAY] Display (target) g_81 = 97.18%
4011-Section10.js:448 [S10DISPLAY] Display (target) i_80 = 44,279.32
4011-Section10.js:448 [S10DISPLAY] Display (target) i_81 = 107,577.48
4011-Section10.js:448 [S10DISPLAY] Display (target) i_82 = 66,418.98
4011-Section10.js:2697 S10: Reference utilization factor dependency ref_m_121 changed.
4011-Section10.js:341 [S10DISPLAY] updateCalculatedDisplayValues() called in target mode
4011-Section10.js:448 [S10DISPLAY] Display (target) m_73 = 24.84
4011-Section10.js:448 [S10DISPLAY] Display (target) m_74 = 0.19
4011-Section10.js:448 [S10DISPLAY] Display (target) m_75 = 2.09
4011-Section10.js:448 [S10DISPLAY] Display (target) m_76 = 24.76
4011-Section10.js:448 [S10DISPLAY] Display (target) m_77 = 64.37
4011-Section10.js:448 [S10DISPLAY] Display (target) m_78 = 25.00
4011-Section10.js:448 [S10DISPLAY] Display (target) i_73 = 186.30
4011-Section10.js:448 [S10DISPLAY] Display (target) i_74 = 15.42
4011-Section10.js:448 [S10DISPLAY] Display (target) i_75 = 8.00
4011-Section10.js:448 [S10DISPLAY] Display (target) i_76 = 3,936.84
4011-Section10.js:448 [S10DISPLAY] Display (target) i_77 = 6,479.48
4011-Section10.js:448 [S10DISPLAY] Display (target) i_78 = 0.00
4011-Section10.js:448 [S10DISPLAY] Display (target) i_79 = 10,626.05
4011-Section10.js:448 [S10DISPLAY] Display (target) k_73 = 0.00
4011-Section10.js:448 [S10DISPLAY] Display (target) k_74 = 0.00
4011-Section10.js:448 [S10DISPLAY] Display (target) k_75 = 0.00
4011-Section10.js:448 [S10DISPLAY] Display (target) k_76 = 0.00
4011-Section10.js:448 [S10DISPLAY] Display (target) k_77 = 323.97
4011-Section10.js:448 [S10DISPLAY] Display (target) k_78 = 0.00
4011-Section10.js:448 [S10DISPLAY] Display (target) k_79 = 323.97
4011-Section10.js:448 [S10DISPLAY] Display (target) j_73 = 1.75%
4011-Section10.js:448 [S10DISPLAY] Display (target) j_74 = 0.15%
4011-Section10.js:448 [S10DISPLAY] Display (target) j_75 = 0.08%
4011-Section10.js:448 [S10DISPLAY] Display (target) j_76 = 37.05%
4011-Section10.js:448 [S10DISPLAY] Display (target) j_77 = 60.98%
4011-Section10.js:448 [S10DISPLAY] Display (target) j_78 = 0.00%
4011-Section10.js:448 [S10DISPLAY] Display (target) j_79 = 100.00%
4011-Section10.js:448 [S10DISPLAY] Display (target) l_73 = 0.00%
4011-Section10.js:448 [S10DISPLAY] Display (target) l_74 = 0.00%
4011-Section10.js:448 [S10DISPLAY] Display (target) l_75 = 0.00%
4011-Section10.js:448 [S10DISPLAY] Display (target) l_76 = 0.00%
4011-Section10.js:448 [S10DISPLAY] Display (target) l_77 = 100.00%
4011-Section10.js:448 [S10DISPLAY] Display (target) l_78 = 0.00%
4011-Section10.js:448 [S10DISPLAY] Display (target) l_79 = 100.00%
4011-Section10.js:448 [S10DISPLAY] Display (target) e_80 = 110,698.29
4011-Section10.js:448 [S10DISPLAY] Display (target) e_81 = 110,698.29
4011-Section10.js:415 [S10DISPLAY] g_80 DEBUG: mode=target, valueToDisplay=0.4
4011-Section10.js:448 [S10DISPLAY] Display (target) g_80 = 40.00%
4011-Section10.js:448 [S10DISPLAY] Display (target) g_81 = 97.18%
4011-Section10.js:448 [S10DISPLAY] Display (target) i_80 = 44,279.32
4011-Section10.js:448 [S10DISPLAY] Display (target) i_81 = 107,577.48
4011-Section10.js:448 [S10DISPLAY] Display (target) i_82 = 66,418.98
4011-Section15.js:1750 [S15] 🎯 TGT S03 CLIMATE READ: h_23=18, d_23=-24, d_24=30, h_24=24
4011-StateManager.js:343 [StateManager] 🎯 h_10 setValue: "99.04017463973207" (state: calculated)
4011-StateManager.js:346 [StateManager] h_10 setValue stack trace:
setValue @ 4011-StateManager.js:346
calculateValues @ 4011-Section15.js:1832
calculateTargetModel @ 4011-Section15.js:1662
calculateAll @ 4011-Section15.js:1328
(anonymous) @ 4011-Section15.js:2121
(anonymous) @ 4011-StateManager.js:543
notifyListeners @ 4011-StateManager.js:541
setValue @ 4011-StateManager.js:419
(anonymous) @ 4011-Section13.js:3423
calculateAll @ 4011-Section13.js:3421
calculateAndRefresh @ 4011-Section13.js:2368
(anonymous) @ 4011-Section13.js:2399
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
(anonymous) @ 4011-Section10.js:2679
(anonymous) @ 4011-StateManager.js:543
notifyListeners @ 4011-StateManager.js:541
setValue @ 4011-StateManager.js:419
(anonymous) @ 4011-Section13.js:3765
storeReferenceResults @ 4011-Section13.js:3757
calculateReferenceModel @ 4011-Section13.js:3504
calculateAll @ 4011-Section13.js:3402
calculateAndRefresh @ 4011-Section13.js:2368
(anonymous) @ 4011-StateManager.js:543
notifyListeners @ 4011-StateManager.js:541
setValue @ 4011-StateManager.js:419
setValue @ 4011-Section10.js:230
calculateSubtotals @ 4011-Section10.js:2251
calculateTargetModel @ 4011-Section10.js:1847
calculateAll @ 4011-Section10.js:1824
(anonymous) @ 4011-Section10.js:2670
(anonymous) @ 4011-StateManager.js:543
notifyListeners @ 4011-StateManager.js:541
setValue @ 4011-StateManager.js:419
setValue @ 4011-Section03.js:212
setFieldValue @ 4011-Section03.js:450
(anonymous) @ 4011-Section03.js:2213
(anonymous) @ 4011-StateManager.js:543
notifyListeners @ 4011-StateManager.js:541
setValue @ 4011-StateManager.js:419
(anonymous) @ 4011-Section03.js:1689
calculateTargetModel @ 4011-Section03.js:1686
calculateAll @ 4011-Section03.js:1665
(anonymous) @ 4011-Section03.js:2057
4011-Section15.js:1750 [S15] 🎯 TGT S03 CLIMATE READ: h_23=18, d_23=-24, d_24=30, h_24=24
4011-StateManager.js:343 [StateManager] 🎯 h_10 setValue: "99.04017463973207" (state: calculated)
4011-StateManager.js:346 [StateManager] h_10 setValue stack trace:
setValue @ 4011-StateManager.js:346
calculateValues @ 4011-Section15.js:1832
calculateTargetModel @ 4011-Section15.js:1662
calculateAll @ 4011-Section15.js:1328
(anonymous) @ 4011-Section15.js:2121
(anonymous) @ 4011-StateManager.js:543
notifyListeners @ 4011-StateManager.js:541
setValue @ 4011-StateManager.js:419
(anonymous) @ 4011-Section13.js:3423
calculateAll @ 4011-Section13.js:3421
calculateAndRefresh @ 4011-Section13.js:2368
(anonymous) @ 4011-Section13.js:2399
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
(anonymous) @ 4011-Section10.js:2679
(anonymous) @ 4011-StateManager.js:543
notifyListeners @ 4011-StateManager.js:541
setValue @ 4011-StateManager.js:419
(anonymous) @ 4011-Section13.js:3765
storeReferenceResults @ 4011-Section13.js:3757
calculateReferenceModel @ 4011-Section13.js:3504
calculateAll @ 4011-Section13.js:3402
calculateAndRefresh @ 4011-Section13.js:2368
(anonymous) @ 4011-StateManager.js:543
notifyListeners @ 4011-StateManager.js:541
setValue @ 4011-StateManager.js:419
setValue @ 4011-Section10.js:230
calculateSubtotals @ 4011-Section10.js:2251
calculateTargetModel @ 4011-Section10.js:1847
calculateAll @ 4011-Section10.js:1824
(anonymous) @ 4011-Section10.js:2670
(anonymous) @ 4011-StateManager.js:543
notifyListeners @ 4011-StateManager.js:541
setValue @ 4011-StateManager.js:419
setValue @ 4011-Section03.js:212
setFieldValue @ 4011-Section03.js:450
(anonymous) @ 4011-Section03.js:2213
(anonymous) @ 4011-StateManager.js:543
notifyListeners @ 4011-StateManager.js:541
setValue @ 4011-StateManager.js:419
(anonymous) @ 4011-Section03.js:1689
calculateTargetModel @ 4011-Section03.js:1686
calculateAll @ 4011-Section03.js:1665
(anonymous) @ 4011-Section03.js:2057
24011-Section14.js:1416 [S14 LISTENER] 🔥 ref_d_122 changed - triggering calculateAll() + UI update
4011-Section15.js:1750 [S15] 🎯 TGT S03 CLIMATE READ: h_23=18, d_23=-24, d_24=30, h_24=24
4011-StateManager.js:343 [StateManager] 🎯 h_10 setValue: "99.04017463973207" (state: calculated)
4011-StateManager.js:346 [StateManager] h_10 setValue stack trace:
setValue @ 4011-StateManager.js:346
calculateValues @ 4011-Section15.js:1832
calculateTargetModel @ 4011-Section15.js:1662
calculateAll @ 4011-Section15.js:1328
(anonymous) @ 4011-Section15.js:2121
(anonymous) @ 4011-StateManager.js:543
notifyListeners @ 4011-StateManager.js:541
setValue @ 4011-StateManager.js:419
(anonymous) @ 4011-Section13.js:3423
calculateAll @ 4011-Section13.js:3421
calculateAndRefresh @ 4011-Section13.js:2368
(anonymous) @ 4011-Section13.js:2399
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
(anonymous) @ 4011-Section10.js:2679
(anonymous) @ 4011-StateManager.js:543
notifyListeners @ 4011-StateManager.js:541
setValue @ 4011-StateManager.js:419
(anonymous) @ 4011-Section13.js:3765
storeReferenceResults @ 4011-Section13.js:3757
calculateReferenceModel @ 4011-Section13.js:3504
calculateAll @ 4011-Section13.js:3402
calculateAndRefresh @ 4011-Section13.js:2368
(anonymous) @ 4011-StateManager.js:543
notifyListeners @ 4011-StateManager.js:541
setValue @ 4011-StateManager.js:419
setValue @ 4011-Section10.js:230
calculateSubtotals @ 4011-Section10.js:2251
calculateTargetModel @ 4011-Section10.js:1847
calculateAll @ 4011-Section10.js:1824
(anonymous) @ 4011-Section10.js:2670
(anonymous) @ 4011-StateManager.js:543
notifyListeners @ 4011-StateManager.js:541
setValue @ 4011-StateManager.js:419
setValue @ 4011-Section03.js:212
setFieldValue @ 4011-Section03.js:450
(anonymous) @ 4011-Section03.js:2213
(anonymous) @ 4011-StateManager.js:543
notifyListeners @ 4011-StateManager.js:541
setValue @ 4011-StateManager.js:419
(anonymous) @ 4011-Section03.js:1689
calculateTargetModel @ 4011-Section03.js:1686
calculateAll @ 4011-Section03.js:1665
(anonymous) @ 4011-Section03.js:2057
4011-Section15.js:1750 [S15] 🎯 TGT S03 CLIMATE READ: h_23=18, d_23=-24, d_24=30, h_24=24
4011-StateManager.js:343 [StateManager] 🎯 h_10 setValue: "99.04017463973207" (state: calculated)
4011-StateManager.js:346 [StateManager] h_10 setValue stack trace:
setValue @ 4011-StateManager.js:346
calculateValues @ 4011-Section15.js:1832
calculateTargetModel @ 4011-Section15.js:1662
calculateAll @ 4011-Section15.js:1328
(anonymous) @ 4011-Section15.js:2121
(anonymous) @ 4011-StateManager.js:543
notifyListeners @ 4011-StateManager.js:541
setValue @ 4011-StateManager.js:419
(anonymous) @ 4011-Section13.js:3423
calculateAll @ 4011-Section13.js:3421
calculateAndRefresh @ 4011-Section13.js:2368
(anonymous) @ 4011-Section13.js:2399
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
(anonymous) @ 4011-Section10.js:2679
(anonymous) @ 4011-StateManager.js:543
notifyListeners @ 4011-StateManager.js:541
setValue @ 4011-StateManager.js:419
(anonymous) @ 4011-Section13.js:3765
storeReferenceResults @ 4011-Section13.js:3757
calculateReferenceModel @ 4011-Section13.js:3504
calculateAll @ 4011-Section13.js:3402
calculateAndRefresh @ 4011-Section13.js:2368
(anonymous) @ 4011-StateManager.js:543
notifyListeners @ 4011-StateManager.js:541
setValue @ 4011-StateManager.js:419
setValue @ 4011-Section10.js:230
calculateSubtotals @ 4011-Section10.js:2251
calculateTargetModel @ 4011-Section10.js:1847
calculateAll @ 4011-Section10.js:1824
(anonymous) @ 4011-Section10.js:2670
(anonymous) @ 4011-StateManager.js:543
notifyListeners @ 4011-StateManager.js:541
setValue @ 4011-StateManager.js:419
setValue @ 4011-Section03.js:212
setFieldValue @ 4011-Section03.js:450
(anonymous) @ 4011-Section03.js:2213
(anonymous) @ 4011-StateManager.js:543
notifyListeners @ 4011-StateManager.js:541
setValue @ 4011-StateManager.js:419
(anonymous) @ 4011-Section03.js:1689
calculateTargetModel @ 4011-Section03.js:1686
calculateAll @ 4011-Section03.js:1665
(anonymous) @ 4011-Section03.js:2057
4011-Section15.js:1750 [S15] 🎯 TGT S03 CLIMATE READ: h_23=18, d_23=-24, d_24=30, h_24=24
4011-StateManager.js:343 [StateManager] 🎯 h_10 setValue: "99.04017463973207" (state: calculated)
4011-StateManager.js:346 [StateManager] h_10 setValue stack trace:
setValue @ 4011-StateManager.js:346
calculateValues @ 4011-Section15.js:1832
calculateTargetModel @ 4011-Section15.js:1662
calculateAll @ 4011-Section15.js:1328
(anonymous) @ 4011-Section15.js:2121
(anonymous) @ 4011-StateManager.js:543
notifyListeners @ 4011-StateManager.js:541
setValue @ 4011-StateManager.js:419
(anonymous) @ 4011-Section13.js:3423
calculateAll @ 4011-Section13.js:3421
calculateAndRefresh @ 4011-Section13.js:2368
(anonymous) @ 4011-Section13.js:2399
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
(anonymous) @ 4011-Section10.js:2679
(anonymous) @ 4011-StateManager.js:543
notifyListeners @ 4011-StateManager.js:541
setValue @ 4011-StateManager.js:419
(anonymous) @ 4011-Section13.js:3765
storeReferenceResults @ 4011-Section13.js:3757
calculateReferenceModel @ 4011-Section13.js:3504
calculateAll @ 4011-Section13.js:3402
calculateAndRefresh @ 4011-Section13.js:2368
(anonymous) @ 4011-StateManager.js:543
notifyListeners @ 4011-StateManager.js:541
setValue @ 4011-StateManager.js:419
setValue @ 4011-Section10.js:230
calculateSubtotals @ 4011-Section10.js:2251
calculateTargetModel @ 4011-Section10.js:1847
calculateAll @ 4011-Section10.js:1824
(anonymous) @ 4011-Section10.js:2670
(anonymous) @ 4011-StateManager.js:543
notifyListeners @ 4011-StateManager.js:541
setValue @ 4011-StateManager.js:419
setValue @ 4011-Section03.js:212
setFieldValue @ 4011-Section03.js:450
(anonymous) @ 4011-Section03.js:2213
(anonymous) @ 4011-StateManager.js:543
notifyListeners @ 4011-StateManager.js:541
setValue @ 4011-StateManager.js:419
(anonymous) @ 4011-Section03.js:1689
calculateTargetModel @ 4011-Section03.js:1686
calculateAll @ 4011-Section03.js:1665
(anonymous) @ 4011-Section03.js:2057
4011-Section15.js:1750 [S15] 🎯 TGT S03 CLIMATE READ: h_23=18, d_23=-24, d_24=30, h_24=24
4011-StateManager.js:343 [StateManager] 🎯 h_10 setValue: "99.04017463973207" (state: calculated)
4011-StateManager.js:346 [StateManager] h_10 setValue stack trace:
setValue @ 4011-StateManager.js:346
calculateValues @ 4011-Section15.js:1832
calculateTargetModel @ 4011-Section15.js:1662
calculateAll @ 4011-Section15.js:1328
(anonymous) @ 4011-Section15.js:2121
(anonymous) @ 4011-StateManager.js:543
notifyListeners @ 4011-StateManager.js:541
setValue @ 4011-StateManager.js:419
(anonymous) @ 4011-Section13.js:3423
calculateAll @ 4011-Section13.js:3421
calculateAndRefresh @ 4011-Section13.js:2368
(anonymous) @ 4011-Section13.js:2399
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
(anonymous) @ 4011-Section10.js:2679
(anonymous) @ 4011-StateManager.js:543
notifyListeners @ 4011-StateManager.js:541
setValue @ 4011-StateManager.js:419
(anonymous) @ 4011-Section13.js:3765
storeReferenceResults @ 4011-Section13.js:3757
calculateReferenceModel @ 4011-Section13.js:3504
calculateAll @ 4011-Section13.js:3402
calculateAndRefresh @ 4011-Section13.js:2368
(anonymous) @ 4011-StateManager.js:543
notifyListeners @ 4011-StateManager.js:541
setValue @ 4011-StateManager.js:419
setValue @ 4011-Section10.js:230
calculateSubtotals @ 4011-Section10.js:2251
calculateTargetModel @ 4011-Section10.js:1847
calculateAll @ 4011-Section10.js:1824
(anonymous) @ 4011-Section10.js:2670
(anonymous) @ 4011-StateManager.js:543
notifyListeners @ 4011-StateManager.js:541
setValue @ 4011-StateManager.js:419
setValue @ 4011-Section03.js:212
setFieldValue @ 4011-Section03.js:450
(anonymous) @ 4011-Section03.js:2213
(anonymous) @ 4011-StateManager.js:543
notifyListeners @ 4011-StateManager.js:541
setValue @ 4011-StateManager.js:419
(anonymous) @ 4011-Section03.js:1689
calculateTargetModel @ 4011-Section03.js:1686
calculateAll @ 4011-Section03.js:1665
(anonymous) @ 4011-Section03.js:2057
4011-Section15.js:1750 [S15] 🎯 TGT S03 CLIMATE READ: h_23=18, d_23=-24, d_24=30, h_24=24
4011-StateManager.js:343 [StateManager] 🎯 h_10 setValue: "99.04017463973207" (state: calculated)
4011-StateManager.js:346 [StateManager] h_10 setValue stack trace:
setValue @ 4011-StateManager.js:346
calculateValues @ 4011-Section15.js:1832
calculateTargetModel @ 4011-Section15.js:1662
calculateAll @ 4011-Section15.js:1328
(anonymous) @ 4011-Section15.js:2121
(anonymous) @ 4011-StateManager.js:543
notifyListeners @ 4011-StateManager.js:541
setValue @ 4011-StateManager.js:419
(anonymous) @ 4011-Section13.js:3423
calculateAll @ 4011-Section13.js:3421
calculateAndRefresh @ 4011-Section13.js:2368
(anonymous) @ 4011-Section13.js:2399
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
(anonymous) @ 4011-Section10.js:2679
(anonymous) @ 4011-StateManager.js:543
notifyListeners @ 4011-StateManager.js:541
setValue @ 4011-StateManager.js:419
(anonymous) @ 4011-Section13.js:3765
storeReferenceResults @ 4011-Section13.js:3757
calculateReferenceModel @ 4011-Section13.js:3504
calculateAll @ 4011-Section13.js:3402
calculateAndRefresh @ 4011-Section13.js:2368
(anonymous) @ 4011-StateManager.js:543
notifyListeners @ 4011-StateManager.js:541
setValue @ 4011-StateManager.js:419
setValue @ 4011-Section10.js:230
calculateSubtotals @ 4011-Section10.js:2251
calculateTargetModel @ 4011-Section10.js:1847
calculateAll @ 4011-Section10.js:1824
(anonymous) @ 4011-Section10.js:2670
(anonymous) @ 4011-StateManager.js:543
notifyListeners @ 4011-StateManager.js:541
setValue @ 4011-StateManager.js:419
setValue @ 4011-Section03.js:212
setFieldValue @ 4011-Section03.js:450
(anonymous) @ 4011-Section03.js:2213
(anonymous) @ 4011-StateManager.js:543
notifyListeners @ 4011-StateManager.js:541
setValue @ 4011-StateManager.js:419
(anonymous) @ 4011-Section03.js:1689
calculateTargetModel @ 4011-Section03.js:1686
calculateAll @ 4011-Section03.js:1665
(anonymous) @ 4011-Section03.js:2057
4011-Section15.js:1750 [S15] 🎯 TGT S03 CLIMATE READ: h_23=18, d_23=-24, d_24=30, h_24=24
4011-StateManager.js:343 [StateManager] 🎯 h_10 setValue: "99.04017463973207" (state: calculated)
4011-StateManager.js:346 [StateManager] h_10 setValue stack trace:
setValue @ 4011-StateManager.js:346
calculateValues @ 4011-Section15.js:1832
calculateTargetModel @ 4011-Section15.js:1662
calculateAll @ 4011-Section15.js:1328
(anonymous) @ 4011-Section15.js:2121
(anonymous) @ 4011-StateManager.js:543
notifyListeners @ 4011-StateManager.js:541
setValue @ 4011-StateManager.js:419
(anonymous) @ 4011-Section13.js:3423
calculateAll @ 4011-Section13.js:3421
calculateAndRefresh @ 4011-Section13.js:2368
(anonymous) @ 4011-Section13.js:2399
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
(anonymous) @ 4011-Section10.js:2679
(anonymous) @ 4011-StateManager.js:543
notifyListeners @ 4011-StateManager.js:541
setValue @ 4011-StateManager.js:419
(anonymous) @ 4011-Section13.js:3765
storeReferenceResults @ 4011-Section13.js:3757
calculateReferenceModel @ 4011-Section13.js:3504
calculateAll @ 4011-Section13.js:3402
calculateAndRefresh @ 4011-Section13.js:2368
(anonymous) @ 4011-StateManager.js:543
notifyListeners @ 4011-StateManager.js:541
setValue @ 4011-StateManager.js:419
setValue @ 4011-Section10.js:230
calculateSubtotals @ 4011-Section10.js:2251
calculateTargetModel @ 4011-Section10.js:1847
calculateAll @ 4011-Section10.js:1824
(anonymous) @ 4011-Section10.js:2670
(anonymous) @ 4011-StateManager.js:543
notifyListeners @ 4011-StateManager.js:541
setValue @ 4011-StateManager.js:419
setValue @ 4011-Section03.js:212
setFieldValue @ 4011-Section03.js:450
(anonymous) @ 4011-Section03.js:2213
(anonymous) @ 4011-StateManager.js:543
notifyListeners @ 4011-StateManager.js:541
setValue @ 4011-StateManager.js:419
(anonymous) @ 4011-Section03.js:1689
calculateTargetModel @ 4011-Section03.js:1686
calculateAll @ 4011-Section03.js:1665
(anonymous) @ 4011-Section03.js:2057
4011-Section15.js:1750 [S15] 🎯 TGT S03 CLIMATE READ: h_23=18, d_23=-24, d_24=30, h_24=24
4011-StateManager.js:343 [StateManager] 🎯 h_10 setValue: "99.04017463973207" (state: calculated)
4011-StateManager.js:346 [StateManager] h_10 setValue stack trace:
setValue @ 4011-StateManager.js:346
calculateValues @ 4011-Section15.js:1832
calculateTargetModel @ 4011-Section15.js:1662
calculateAll @ 4011-Section15.js:1328
(anonymous) @ 4011-Section15.js:2121
(anonymous) @ 4011-StateManager.js:543
notifyListeners @ 4011-StateManager.js:541
setValue @ 4011-StateManager.js:419
(anonymous) @ 4011-Section13.js:3423
calculateAll @ 4011-Section13.js:3421
calculateAndRefresh @ 4011-Section13.js:2368
(anonymous) @ 4011-Section13.js:2399
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
(anonymous) @ 4011-Section10.js:2679
(anonymous) @ 4011-StateManager.js:543
notifyListeners @ 4011-StateManager.js:541
setValue @ 4011-StateManager.js:419
(anonymous) @ 4011-Section13.js:3765
storeReferenceResults @ 4011-Section13.js:3757
calculateReferenceModel @ 4011-Section13.js:3504
calculateAll @ 4011-Section13.js:3402
calculateAndRefresh @ 4011-Section13.js:2368
(anonymous) @ 4011-StateManager.js:543
notifyListeners @ 4011-StateManager.js:541
setValue @ 4011-StateManager.js:419
setValue @ 4011-Section10.js:230
calculateSubtotals @ 4011-Section10.js:2251
calculateTargetModel @ 4011-Section10.js:1847
calculateAll @ 4011-Section10.js:1824
(anonymous) @ 4011-Section10.js:2670
(anonymous) @ 4011-StateManager.js:543
notifyListeners @ 4011-StateManager.js:541
setValue @ 4011-StateManager.js:419
setValue @ 4011-Section03.js:212
setFieldValue @ 4011-Section03.js:450
(anonymous) @ 4011-Section03.js:2213
(anonymous) @ 4011-StateManager.js:543
notifyListeners @ 4011-StateManager.js:541
setValue @ 4011-StateManager.js:419
(anonymous) @ 4011-Section03.js:1689
calculateTargetModel @ 4011-Section03.js:1686
calculateAll @ 4011-Section03.js:1665
(anonymous) @ 4011-Section03.js:2057
4011-Section15.js:1750 [S15] 🎯 TGT S03 CLIMATE READ: h_23=18, d_23=-24, d_24=30, h_24=24
4011-StateManager.js:343 [StateManager] 🎯 h_10 setValue: "99.04017463973207" (state: calculated)
4011-StateManager.js:346 [StateManager] h_10 setValue stack trace:
setValue @ 4011-StateManager.js:346
calculateValues @ 4011-Section15.js:1832
calculateTargetModel @ 4011-Section15.js:1662
calculateAll @ 4011-Section15.js:1328
(anonymous) @ 4011-Section15.js:2121
(anonymous) @ 4011-StateManager.js:543
notifyListeners @ 4011-StateManager.js:541
setValue @ 4011-StateManager.js:419
(anonymous) @ 4011-Section13.js:3423
calculateAll @ 4011-Section13.js:3421
calculateAndRefresh @ 4011-Section13.js:2368
(anonymous) @ 4011-Section13.js:2399
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
(anonymous) @ 4011-Section10.js:2679
(anonymous) @ 4011-StateManager.js:543
notifyListeners @ 4011-StateManager.js:541
setValue @ 4011-StateManager.js:419
(anonymous) @ 4011-Section13.js:3765
storeReferenceResults @ 4011-Section13.js:3757
calculateReferenceModel @ 4011-Section13.js:3504
calculateAll @ 4011-Section13.js:3402
calculateAndRefresh @ 4011-Section13.js:2368
(anonymous) @ 4011-StateManager.js:543
notifyListeners @ 4011-StateManager.js:541
setValue @ 4011-StateManager.js:419
setValue @ 4011-Section10.js:230
calculateSubtotals @ 4011-Section10.js:2251
calculateTargetModel @ 4011-Section10.js:1847
calculateAll @ 4011-Section10.js:1824
(anonymous) @ 4011-Section10.js:2670
(anonymous) @ 4011-StateManager.js:543
notifyListeners @ 4011-StateManager.js:541
setValue @ 4011-StateManager.js:419
setValue @ 4011-Section03.js:212
setFieldValue @ 4011-Section03.js:450
(anonymous) @ 4011-Section03.js:2213
(anonymous) @ 4011-StateManager.js:543
notifyListeners @ 4011-StateManager.js:541
setValue @ 4011-StateManager.js:419
(anonymous) @ 4011-Section03.js:1689
calculateTargetModel @ 4011-Section03.js:1686
calculateAll @ 4011-Section03.js:1665
(anonymous) @ 4011-Section03.js:2057
4011-Section13.js:3430 [Section13] ✅ Re-wrote 34 Reference values
4011-Section13.js:3440 [Section13] 🎉 DUAL-ENGINE CALCULATIONS COMPLETE
4011-Section13.js:252 [Section13] 🔄 Updating calculated display values for reference mode
4011-Section13.js:336 [Section13] Calculated display values updated for reference mode
4011-Section15.js:1750 [S15] 🎯 TGT S03 CLIMATE READ: h_23=18, d_23=-24, d_24=30, h_24=24
4011-StateManager.js:343 [StateManager] 🎯 h_10 setValue: "99.04017463973207" (state: calculated)
4011-StateManager.js:346 [StateManager] h_10 setValue stack trace:
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
(anonymous) @ 4011-Section10.js:2679
(anonymous) @ 4011-StateManager.js:543
notifyListeners @ 4011-StateManager.js:541
setValue @ 4011-StateManager.js:419
(anonymous) @ 4011-Section13.js:3765
storeReferenceResults @ 4011-Section13.js:3757
calculateReferenceModel @ 4011-Section13.js:3504
calculateAll @ 4011-Section13.js:3402
calculateAndRefresh @ 4011-Section13.js:2368
(anonymous) @ 4011-StateManager.js:543
notifyListeners @ 4011-StateManager.js:541
setValue @ 4011-StateManager.js:419
setValue @ 4011-Section10.js:230
calculateSubtotals @ 4011-Section10.js:2251
calculateTargetModel @ 4011-Section10.js:1847
calculateAll @ 4011-Section10.js:1824
(anonymous) @ 4011-Section10.js:2670
(anonymous) @ 4011-StateManager.js:543
notifyListeners @ 4011-StateManager.js:541
setValue @ 4011-StateManager.js:419
setValue @ 4011-Section03.js:212
setFieldValue @ 4011-Section03.js:450
(anonymous) @ 4011-Section03.js:2213
(anonymous) @ 4011-StateManager.js:543
notifyListeners @ 4011-StateManager.js:541
setValue @ 4011-StateManager.js:419
(anonymous) @ 4011-Section03.js:1689
calculateTargetModel @ 4011-Section03.js:1686
calculateAll @ 4011-Section03.js:1665
(anonymous) @ 4011-Section03.js:2057
4011-Section15.js:1750 [S15] 🎯 TGT S03 CLIMATE READ: h_23=18, d_23=-24, d_24=30, h_24=24
4011-StateManager.js:343 [StateManager] 🎯 h_10 setValue: "99.04017463973207" (state: calculated)
4011-StateManager.js:346 [StateManager] h_10 setValue stack trace:
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
(anonymous) @ 4011-Section10.js:2679
(anonymous) @ 4011-StateManager.js:543
notifyListeners @ 4011-StateManager.js:541
setValue @ 4011-StateManager.js:419
(anonymous) @ 4011-Section13.js:3765
storeReferenceResults @ 4011-Section13.js:3757
calculateReferenceModel @ 4011-Section13.js:3504
calculateAll @ 4011-Section13.js:3402
calculateAndRefresh @ 4011-Section13.js:2368
(anonymous) @ 4011-StateManager.js:543
notifyListeners @ 4011-StateManager.js:541
setValue @ 4011-StateManager.js:419
setValue @ 4011-Section10.js:230
calculateSubtotals @ 4011-Section10.js:2251
calculateTargetModel @ 4011-Section10.js:1847
calculateAll @ 4011-Section10.js:1824
(anonymous) @ 4011-Section10.js:2670
(anonymous) @ 4011-StateManager.js:543
notifyListeners @ 4011-StateManager.js:541
setValue @ 4011-StateManager.js:419
setValue @ 4011-Section03.js:212
setFieldValue @ 4011-Section03.js:450
(anonymous) @ 4011-Section03.js:2213
(anonymous) @ 4011-StateManager.js:543
notifyListeners @ 4011-StateManager.js:541
setValue @ 4011-StateManager.js:419
(anonymous) @ 4011-Section03.js:1689
calculateTargetModel @ 4011-Section03.js:1686
calculateAll @ 4011-Section03.js:1665
(anonymous) @ 4011-Section03.js:2057
4011-Section10.js:2040 [S10REF] Utilization calc: ref_i_71=110562.1692, ref_i_79=10060.174319999998, totalGains=120622.34352
4011-Section10.js:2054 [S10REF] Using utilization method: NRC 40%
4011-Section10.js:2091 [S10REF] Final calc: utilizationFactor=0.4, usableGains=48248.937408
4011-Section10.js:2134 [S10REF] Complete: g_80=0.4, g_81=0.9966231765247549, i_80=48248.937408, i_81=120215.02315876257
4011-Section10.js:1827 [S10 DEBUG] Dual-engine calculations complete in target mode
4011-Section10.js:341 [S10DISPLAY] updateCalculatedDisplayValues() called in target mode
4011-Section10.js:448 [S10DISPLAY] Display (target) m_73 = 24.84
4011-Section10.js:448 [S10DISPLAY] Display (target) m_74 = 0.19
4011-Section10.js:448 [S10DISPLAY] Display (target) m_75 = 2.09
4011-Section10.js:448 [S10DISPLAY] Display (target) m_76 = 24.76
4011-Section10.js:448 [S10DISPLAY] Display (target) m_77 = 64.37
4011-Section10.js:448 [S10DISPLAY] Display (target) m_78 = 25.00
4011-Section10.js:448 [S10DISPLAY] Display (target) i_73 = 186.30
4011-Section10.js:448 [S10DISPLAY] Display (target) i_74 = 15.42
4011-Section10.js:448 [S10DISPLAY] Display (target) i_75 = 8.00
4011-Section10.js:448 [S10DISPLAY] Display (target) i_76 = 3,936.84
4011-Section10.js:448 [S10DISPLAY] Display (target) i_77 = 6,479.48
4011-Section10.js:448 [S10DISPLAY] Display (target) i_78 = 0.00
4011-Section10.js:448 [S10DISPLAY] Display (target) i_79 = 10,626.05
4011-Section10.js:448 [S10DISPLAY] Display (target) k_73 = 0.00
4011-Section10.js:448 [S10DISPLAY] Display (target) k_74 = 0.00
4011-Section10.js:448 [S10DISPLAY] Display (target) k_75 = 0.00
4011-Section10.js:448 [S10DISPLAY] Display (target) k_76 = 0.00
4011-Section10.js:448 [S10DISPLAY] Display (target) k_77 = 323.97
4011-Section10.js:448 [S10DISPLAY] Display (target) k_78 = 0.00
4011-Section10.js:448 [S10DISPLAY] Display (target) k_79 = 323.97
4011-Section10.js:448 [S10DISPLAY] Display (target) j_73 = 1.75%
4011-Section10.js:448 [S10DISPLAY] Display (target) j_74 = 0.15%
4011-Section10.js:448 [S10DISPLAY] Display (target) j_75 = 0.08%
4011-Section10.js:448 [S10DISPLAY] Display (target) j_76 = 37.05%
4011-Section10.js:448 [S10DISPLAY] Display (target) j_77 = 60.98%
4011-Section10.js:448 [S10DISPLAY] Display (target) j_78 = 0.00%
4011-Section10.js:448 [S10DISPLAY] Display (target) j_79 = 100.00%
4011-Section10.js:448 [S10DISPLAY] Display (target) l_73 = 0.00%
4011-Section10.js:448 [S10DISPLAY] Display (target) l_74 = 0.00%
4011-Section10.js:448 [S10DISPLAY] Display (target) l_75 = 0.00%
4011-Section10.js:448 [S10DISPLAY] Display (target) l_76 = 0.00%
4011-Section10.js:448 [S10DISPLAY] Display (target) l_77 = 100.00%
4011-Section10.js:448 [S10DISPLAY] Display (target) l_78 = 0.00%
4011-Section10.js:448 [S10DISPLAY] Display (target) l_79 = 100.00%
4011-Section10.js:448 [S10DISPLAY] Display (target) e_80 = 110,698.29
4011-Section10.js:448 [S10DISPLAY] Display (target) e_81 = 110,698.29
4011-Section10.js:415 [S10DISPLAY] g_80 DEBUG: mode=target, valueToDisplay=0.4
4011-Section10.js:448 [S10DISPLAY] Display (target) g_80 = 40.00%
4011-Section10.js:448 [S10DISPLAY] Display (target) g_81 = 97.18%
4011-Section10.js:448 [S10DISPLAY] Display (target) i_80 = 44,279.32
4011-Section10.js:448 [S10DISPLAY] Display (target) i_81 = 107,577.48
4011-Section10.js:448 [S10DISPLAY] Display (target) i_82 = 66,418.98
4011-Section10.js:2697 S10: Reference utilization factor dependency ref_m_121 changed.
4011-Section10.js:341 [S10DISPLAY] updateCalculatedDisplayValues() called in target mode
4011-Section10.js:448 [S10DISPLAY] Display (target) m_73 = 24.84
4011-Section10.js:448 [S10DISPLAY] Display (target) m_74 = 0.19
4011-Section10.js:448 [S10DISPLAY] Display (target) m_75 = 2.09
4011-Section10.js:448 [S10DISPLAY] Display (target) m_76 = 24.76
4011-Section10.js:448 [S10DISPLAY] Display (target) m_77 = 64.37
4011-Section10.js:448 [S10DISPLAY] Display (target) m_78 = 25.00
4011-Section10.js:448 [S10DISPLAY] Display (target) i_73 = 186.30
4011-Section10.js:448 [S10DISPLAY] Display (target) i_74 = 15.42
4011-Section10.js:448 [S10DISPLAY] Display (target) i_75 = 8.00
4011-Section10.js:448 [S10DISPLAY] Display (target) i_76 = 3,936.84
4011-Section10.js:448 [S10DISPLAY] Display (target) i_77 = 6,479.48
4011-Section10.js:448 [S10DISPLAY] Display (target) i_78 = 0.00
4011-Section10.js:448 [S10DISPLAY] Display (target) i_79 = 10,626.05
4011-Section10.js:448 [S10DISPLAY] Display (target) k_73 = 0.00
4011-Section10.js:448 [S10DISPLAY] Display (target) k_74 = 0.00
4011-Section10.js:448 [S10DISPLAY] Display (target) k_75 = 0.00
4011-Section10.js:448 [S10DISPLAY] Display (target) k_76 = 0.00
4011-Section10.js:448 [S10DISPLAY] Display (target) k_77 = 323.97
4011-Section10.js:448 [S10DISPLAY] Display (target) k_78 = 0.00
4011-Section10.js:448 [S10DISPLAY] Display (target) k_79 = 323.97
4011-Section10.js:448 [S10DISPLAY] Display (target) j_73 = 1.75%
4011-Section10.js:448 [S10DISPLAY] Display (target) j_74 = 0.15%
4011-Section10.js:448 [S10DISPLAY] Display (target) j_75 = 0.08%
4011-Section10.js:448 [S10DISPLAY] Display (target) j_76 = 37.05%
4011-Section10.js:448 [S10DISPLAY] Display (target) j_77 = 60.98%
4011-Section10.js:448 [S10DISPLAY] Display (target) j_78 = 0.00%
4011-Section10.js:448 [S10DISPLAY] Display (target) j_79 = 100.00%
4011-Section10.js:448 [S10DISPLAY] Display (target) l_73 = 0.00%
4011-Section10.js:448 [S10DISPLAY] Display (target) l_74 = 0.00%
4011-Section10.js:448 [S10DISPLAY] Display (target) l_75 = 0.00%
4011-Section10.js:448 [S10DISPLAY] Display (target) l_76 = 0.00%
4011-Section10.js:448 [S10DISPLAY] Display (target) l_77 = 100.00%
4011-Section10.js:448 [S10DISPLAY] Display (target) l_78 = 0.00%
4011-Section10.js:448 [S10DISPLAY] Display (target) l_79 = 100.00%
4011-Section10.js:448 [S10DISPLAY] Display (target) e_80 = 110,698.29
4011-Section10.js:448 [S10DISPLAY] Display (target) e_81 = 110,698.29
4011-Section10.js:415 [S10DISPLAY] g_80 DEBUG: mode=target, valueToDisplay=0.4
4011-Section10.js:448 [S10DISPLAY] Display (target) g_80 = 40.00%
4011-Section10.js:448 [S10DISPLAY] Display (target) g_81 = 97.18%
4011-Section10.js:448 [S10DISPLAY] Display (target) i_80 = 44,279.32
4011-Section10.js:448 [S10DISPLAY] Display (target) i_81 = 107,577.48
4011-Section10.js:448 [S10DISPLAY] Display (target) i_82 = 66,418.98
4011-Section15.js:1750 [S15] 🎯 TGT S03 CLIMATE READ: h_23=18, d_23=-24, d_24=30, h_24=24
4011-StateManager.js:343 [StateManager] 🎯 h_10 setValue: "99.04017463973207" (state: calculated)
4011-StateManager.js:346 [StateManager] h_10 setValue stack trace:
setValue @ 4011-StateManager.js:346
calculateValues @ 4011-Section15.js:1832
calculateTargetModel @ 4011-Section15.js:1662
calculateAll @ 4011-Section15.js:1328
(anonymous) @ 4011-Section15.js:2121
(anonymous) @ 4011-StateManager.js:543
notifyListeners @ 4011-StateManager.js:541
setValue @ 4011-StateManager.js:419
(anonymous) @ 4011-Section13.js:3765
storeReferenceResults @ 4011-Section13.js:3757
calculateReferenceModel @ 4011-Section13.js:3504
calculateAll @ 4011-Section13.js:3402
calculateAndRefresh @ 4011-Section13.js:2368
(anonymous) @ 4011-StateManager.js:543
notifyListeners @ 4011-StateManager.js:541
setValue @ 4011-StateManager.js:419
setValue @ 4011-Section10.js:230
calculateSubtotals @ 4011-Section10.js:2251
calculateTargetModel @ 4011-Section10.js:1847
calculateAll @ 4011-Section10.js:1824
(anonymous) @ 4011-Section10.js:2670
(anonymous) @ 4011-StateManager.js:543
notifyListeners @ 4011-StateManager.js:541
setValue @ 4011-StateManager.js:419
setValue @ 4011-Section03.js:212
setFieldValue @ 4011-Section03.js:450
(anonymous) @ 4011-Section03.js:2213
(anonymous) @ 4011-StateManager.js:543
notifyListeners @ 4011-StateManager.js:541
setValue @ 4011-StateManager.js:419
(anonymous) @ 4011-Section03.js:1689
calculateTargetModel @ 4011-Section03.js:1686
calculateAll @ 4011-Section03.js:1665
(anonymous) @ 4011-Section03.js:2057
4011-Section15.js:1750 [S15] 🎯 TGT S03 CLIMATE READ: h_23=18, d_23=-24, d_24=30, h_24=24
4011-StateManager.js:343 [StateManager] 🎯 h_10 setValue: "99.04017463973207" (state: calculated)
4011-StateManager.js:346 [StateManager] h_10 setValue stack trace:
setValue @ 4011-StateManager.js:346
calculateValues @ 4011-Section15.js:1832
calculateTargetModel @ 4011-Section15.js:1662
calculateAll @ 4011-Section15.js:1328
(anonymous) @ 4011-Section15.js:2121
(anonymous) @ 4011-StateManager.js:543
notifyListeners @ 4011-StateManager.js:541
setValue @ 4011-StateManager.js:419
(anonymous) @ 4011-Section13.js:3765
storeReferenceResults @ 4011-Section13.js:3757
calculateReferenceModel @ 4011-Section13.js:3504
calculateAll @ 4011-Section13.js:3402
calculateAndRefresh @ 4011-Section13.js:2368
(anonymous) @ 4011-StateManager.js:543
notifyListeners @ 4011-StateManager.js:541
setValue @ 4011-StateManager.js:419
setValue @ 4011-Section10.js:230
calculateSubtotals @ 4011-Section10.js:2251
calculateTargetModel @ 4011-Section10.js:1847
calculateAll @ 4011-Section10.js:1824
(anonymous) @ 4011-Section10.js:2670
(anonymous) @ 4011-StateManager.js:543
notifyListeners @ 4011-StateManager.js:541
setValue @ 4011-StateManager.js:419
setValue @ 4011-Section03.js:212
setFieldValue @ 4011-Section03.js:450
(anonymous) @ 4011-Section03.js:2213
(anonymous) @ 4011-StateManager.js:543
notifyListeners @ 4011-StateManager.js:541
setValue @ 4011-StateManager.js:419
(anonymous) @ 4011-Section03.js:1689
calculateTargetModel @ 4011-Section03.js:1686
calculateAll @ 4011-Section03.js:1665
(anonymous) @ 4011-Section03.js:2057
24011-Section14.js:1416 [S14 LISTENER] 🔥 ref_d_122 changed - triggering calculateAll() + UI update
4011-Section15.js:1750 [S15] 🎯 TGT S03 CLIMATE READ: h_23=18, d_23=-24, d_24=30, h_24=24
4011-StateManager.js:343 [StateManager] 🎯 h_10 setValue: "99.04017463973207" (state: calculated)
4011-StateManager.js:346 [StateManager] h_10 setValue stack trace:
setValue @ 4011-StateManager.js:346
calculateValues @ 4011-Section15.js:1832
calculateTargetModel @ 4011-Section15.js:1662
calculateAll @ 4011-Section15.js:1328
(anonymous) @ 4011-Section15.js:2121
(anonymous) @ 4011-StateManager.js:543
notifyListeners @ 4011-StateManager.js:541
setValue @ 4011-StateManager.js:419
(anonymous) @ 4011-Section13.js:3765
storeReferenceResults @ 4011-Section13.js:3757
calculateReferenceModel @ 4011-Section13.js:3504
calculateAll @ 4011-Section13.js:3402
calculateAndRefresh @ 4011-Section13.js:2368
(anonymous) @ 4011-StateManager.js:543
notifyListeners @ 4011-StateManager.js:541
setValue @ 4011-StateManager.js:419
setValue @ 4011-Section10.js:230
calculateSubtotals @ 4011-Section10.js:2251
calculateTargetModel @ 4011-Section10.js:1847
calculateAll @ 4011-Section10.js:1824
(anonymous) @ 4011-Section10.js:2670
(anonymous) @ 4011-StateManager.js:543
notifyListeners @ 4011-StateManager.js:541
setValue @ 4011-StateManager.js:419
setValue @ 4011-Section03.js:212
setFieldValue @ 4011-Section03.js:450
(anonymous) @ 4011-Section03.js:2213
(anonymous) @ 4011-StateManager.js:543
notifyListeners @ 4011-StateManager.js:541
setValue @ 4011-StateManager.js:419
(anonymous) @ 4011-Section03.js:1689
calculateTargetModel @ 4011-Section03.js:1686
calculateAll @ 4011-Section03.js:1665
(anonymous) @ 4011-Section03.js:2057
4011-Section15.js:1750 [S15] 🎯 TGT S03 CLIMATE READ: h_23=18, d_23=-24, d_24=30, h_24=24
4011-StateManager.js:343 [StateManager] 🎯 h_10 setValue: "99.04017463973207" (state: calculated)
4011-StateManager.js:346 [StateManager] h_10 setValue stack trace:
setValue @ 4011-StateManager.js:346
calculateValues @ 4011-Section15.js:1832
calculateTargetModel @ 4011-Section15.js:1662
calculateAll @ 4011-Section15.js:1328
(anonymous) @ 4011-Section15.js:2121
(anonymous) @ 4011-StateManager.js:543
notifyListeners @ 4011-StateManager.js:541
setValue @ 4011-StateManager.js:419
(anonymous) @ 4011-Section13.js:3765
storeReferenceResults @ 4011-Section13.js:3757
calculateReferenceModel @ 4011-Section13.js:3504
calculateAll @ 4011-Section13.js:3402
calculateAndRefresh @ 4011-Section13.js:2368
(anonymous) @ 4011-StateManager.js:543
notifyListeners @ 4011-StateManager.js:541
setValue @ 4011-StateManager.js:419
setValue @ 4011-Section10.js:230
calculateSubtotals @ 4011-Section10.js:2251
calculateTargetModel @ 4011-Section10.js:1847
calculateAll @ 4011-Section10.js:1824
(anonymous) @ 4011-Section10.js:2670
(anonymous) @ 4011-StateManager.js:543
notifyListeners @ 4011-StateManager.js:541
setValue @ 4011-StateManager.js:419
setValue @ 4011-Section03.js:212
setFieldValue @ 4011-Section03.js:450
(anonymous) @ 4011-Section03.js:2213
(anonymous) @ 4011-StateManager.js:543
notifyListeners @ 4011-StateManager.js:541
setValue @ 4011-StateManager.js:419
(anonymous) @ 4011-Section03.js:1689
calculateTargetModel @ 4011-Section03.js:1686
calculateAll @ 4011-Section03.js:1665
(anonymous) @ 4011-Section03.js:2057
4011-Section15.js:1750 [S15] 🎯 TGT S03 CLIMATE READ: h_23=18, d_23=-24, d_24=30, h_24=24
4011-StateManager.js:343 [StateManager] 🎯 h_10 setValue: "99.04017463973207" (state: calculated)
4011-StateManager.js:346 [StateManager] h_10 setValue stack trace:
setValue @ 4011-StateManager.js:346
calculateValues @ 4011-Section15.js:1832
calculateTargetModel @ 4011-Section15.js:1662
calculateAll @ 4011-Section15.js:1328
(anonymous) @ 4011-Section15.js:2121
(anonymous) @ 4011-StateManager.js:543
notifyListeners @ 4011-StateManager.js:541
setValue @ 4011-StateManager.js:419
(anonymous) @ 4011-Section13.js:3765
storeReferenceResults @ 4011-Section13.js:3757
calculateReferenceModel @ 4011-Section13.js:3504
calculateAll @ 4011-Section13.js:3402
calculateAndRefresh @ 4011-Section13.js:2368
(anonymous) @ 4011-StateManager.js:543
notifyListeners @ 4011-StateManager.js:541
setValue @ 4011-StateManager.js:419
setValue @ 4011-Section10.js:230
calculateSubtotals @ 4011-Section10.js:2251
calculateTargetModel @ 4011-Section10.js:1847
calculateAll @ 4011-Section10.js:1824
(anonymous) @ 4011-Section10.js:2670
(anonymous) @ 4011-StateManager.js:543
notifyListeners @ 4011-StateManager.js:541
setValue @ 4011-StateManager.js:419
setValue @ 4011-Section03.js:212
setFieldValue @ 4011-Section03.js:450
(anonymous) @ 4011-Section03.js:2213
(anonymous) @ 4011-StateManager.js:543
notifyListeners @ 4011-StateManager.js:541
setValue @ 4011-StateManager.js:419
(anonymous) @ 4011-Section03.js:1689
calculateTargetModel @ 4011-Section03.js:1686
calculateAll @ 4011-Section03.js:1665
(anonymous) @ 4011-Section03.js:2057
4011-Section15.js:1750 [S15] 🎯 TGT S03 CLIMATE READ: h_23=18, d_23=-24, d_24=30, h_24=24
4011-StateManager.js:343 [StateManager] 🎯 h_10 setValue: "99.04017463973207" (state: calculated)
4011-StateManager.js:346 [StateManager] h_10 setValue stack trace:
setValue @ 4011-StateManager.js:346
calculateValues @ 4011-Section15.js:1832
calculateTargetModel @ 4011-Section15.js:1662
calculateAll @ 4011-Section15.js:1328
(anonymous) @ 4011-Section15.js:2121
(anonymous) @ 4011-StateManager.js:543
notifyListeners @ 4011-StateManager.js:541
setValue @ 4011-StateManager.js:419
(anonymous) @ 4011-Section13.js:3765
storeReferenceResults @ 4011-Section13.js:3757
calculateReferenceModel @ 4011-Section13.js:3504
calculateAll @ 4011-Section13.js:3402
calculateAndRefresh @ 4011-Section13.js:2368
(anonymous) @ 4011-StateManager.js:543
notifyListeners @ 4011-StateManager.js:541
setValue @ 4011-StateManager.js:419
setValue @ 4011-Section10.js:230
calculateSubtotals @ 4011-Section10.js:2251
calculateTargetModel @ 4011-Section10.js:1847
calculateAll @ 4011-Section10.js:1824
(anonymous) @ 4011-Section10.js:2670
(anonymous) @ 4011-StateManager.js:543
notifyListeners @ 4011-StateManager.js:541
setValue @ 4011-StateManager.js:419
setValue @ 4011-Section03.js:212
setFieldValue @ 4011-Section03.js:450
(anonymous) @ 4011-Section03.js:2213
(anonymous) @ 4011-StateManager.js:543
notifyListeners @ 4011-StateManager.js:541
setValue @ 4011-StateManager.js:419
(anonymous) @ 4011-Section03.js:1689
calculateTargetModel @ 4011-Section03.js:1686
calculateAll @ 4011-Section03.js:1665
(anonymous) @ 4011-Section03.js:2057
4011-Section15.js:1750 [S15] 🎯 TGT S03 CLIMATE READ: h_23=18, d_23=-24, d_24=30, h_24=24
4011-StateManager.js:343 [StateManager] 🎯 h_10 setValue: "99.04017463973207" (state: calculated)
4011-StateManager.js:346 [StateManager] h_10 setValue stack trace:
setValue @ 4011-StateManager.js:346
calculateValues @ 4011-Section15.js:1832
calculateTargetModel @ 4011-Section15.js:1662
calculateAll @ 4011-Section15.js:1328
(anonymous) @ 4011-Section15.js:2121
(anonymous) @ 4011-StateManager.js:543
notifyListeners @ 4011-StateManager.js:541
setValue @ 4011-StateManager.js:419
(anonymous) @ 4011-Section13.js:3765
storeReferenceResults @ 4011-Section13.js:3757
calculateReferenceModel @ 4011-Section13.js:3504
calculateAll @ 4011-Section13.js:3402
calculateAndRefresh @ 4011-Section13.js:2368
(anonymous) @ 4011-StateManager.js:543
notifyListeners @ 4011-StateManager.js:541
setValue @ 4011-StateManager.js:419
setValue @ 4011-Section10.js:230
calculateSubtotals @ 4011-Section10.js:2251
calculateTargetModel @ 4011-Section10.js:1847
calculateAll @ 4011-Section10.js:1824
(anonymous) @ 4011-Section10.js:2670
(anonymous) @ 4011-StateManager.js:543
notifyListeners @ 4011-StateManager.js:541
setValue @ 4011-StateManager.js:419
setValue @ 4011-Section03.js:212
setFieldValue @ 4011-Section03.js:450
(anonymous) @ 4011-Section03.js:2213
(anonymous) @ 4011-StateManager.js:543
notifyListeners @ 4011-StateManager.js:541
setValue @ 4011-StateManager.js:419
(anonymous) @ 4011-Section03.js:1689
calculateTargetModel @ 4011-Section03.js:1686
calculateAll @ 4011-Section03.js:1665
(anonymous) @ 4011-Section03.js:2057
4011-Section15.js:1750 [S15] 🎯 TGT S03 CLIMATE READ: h_23=18, d_23=-24, d_24=30, h_24=24
4011-StateManager.js:343 [StateManager] 🎯 h_10 setValue: "99.04017463973207" (state: calculated)
4011-StateManager.js:346 [StateManager] h_10 setValue stack trace:
setValue @ 4011-StateManager.js:346
calculateValues @ 4011-Section15.js:1832
calculateTargetModel @ 4011-Section15.js:1662
calculateAll @ 4011-Section15.js:1328
(anonymous) @ 4011-Section15.js:2121
(anonymous) @ 4011-StateManager.js:543
notifyListeners @ 4011-StateManager.js:541
setValue @ 4011-StateManager.js:419
(anonymous) @ 4011-Section13.js:3765
storeReferenceResults @ 4011-Section13.js:3757
calculateReferenceModel @ 4011-Section13.js:3504
calculateAll @ 4011-Section13.js:3402
calculateAndRefresh @ 4011-Section13.js:2368
(anonymous) @ 4011-StateManager.js:543
notifyListeners @ 4011-StateManager.js:541
setValue @ 4011-StateManager.js:419
setValue @ 4011-Section10.js:230
calculateSubtotals @ 4011-Section10.js:2251
calculateTargetModel @ 4011-Section10.js:1847
calculateAll @ 4011-Section10.js:1824
(anonymous) @ 4011-Section10.js:2670
(anonymous) @ 4011-StateManager.js:543
notifyListeners @ 4011-StateManager.js:541
setValue @ 4011-StateManager.js:419
setValue @ 4011-Section03.js:212
setFieldValue @ 4011-Section03.js:450
(anonymous) @ 4011-Section03.js:2213
(anonymous) @ 4011-StateManager.js:543
notifyListeners @ 4011-StateManager.js:541
setValue @ 4011-StateManager.js:419
(anonymous) @ 4011-Section03.js:1689
calculateTargetModel @ 4011-Section03.js:1686
calculateAll @ 4011-Section03.js:1665
(anonymous) @ 4011-Section03.js:2057
4011-Section15.js:1750 [S15] 🎯 TGT S03 CLIMATE READ: h_23=18, d_23=-24, d_24=30, h_24=24
4011-StateManager.js:343 [StateManager] 🎯 h_10 setValue: "99.04017463973207" (state: calculated)
4011-StateManager.js:346 [StateManager] h_10 setValue stack trace:
setValue @ 4011-StateManager.js:346
calculateValues @ 4011-Section15.js:1832
calculateTargetModel @ 4011-Section15.js:1662
calculateAll @ 4011-Section15.js:1328
(anonymous) @ 4011-Section15.js:2121
(anonymous) @ 4011-StateManager.js:543
notifyListeners @ 4011-StateManager.js:541
setValue @ 4011-StateManager.js:419
(anonymous) @ 4011-Section13.js:3765
storeReferenceResults @ 4011-Section13.js:3757
calculateReferenceModel @ 4011-Section13.js:3504
calculateAll @ 4011-Section13.js:3402
calculateAndRefresh @ 4011-Section13.js:2368
(anonymous) @ 4011-StateManager.js:543
notifyListeners @ 4011-StateManager.js:541
setValue @ 4011-StateManager.js:419
setValue @ 4011-Section10.js:230
calculateSubtotals @ 4011-Section10.js:2251
calculateTargetModel @ 4011-Section10.js:1847
calculateAll @ 4011-Section10.js:1824
(anonymous) @ 4011-Section10.js:2670
(anonymous) @ 4011-StateManager.js:543
notifyListeners @ 4011-StateManager.js:541
setValue @ 4011-StateManager.js:419
setValue @ 4011-Section03.js:212
setFieldValue @ 4011-Section03.js:450
(anonymous) @ 4011-Section03.js:2213
(anonymous) @ 4011-StateManager.js:543
notifyListeners @ 4011-StateManager.js:541
setValue @ 4011-StateManager.js:419
(anonymous) @ 4011-Section03.js:1689
calculateTargetModel @ 4011-Section03.js:1686
calculateAll @ 4011-Section03.js:1665
(anonymous) @ 4011-Section03.js:2057
4011-Section15.js:1750 [S15] 🎯 TGT S03 CLIMATE READ: h_23=18, d_23=-24, d_24=30, h_24=24
4011-StateManager.js:343 [StateManager] 🎯 h_10 setValue: "99.04017463973207" (state: calculated)
4011-StateManager.js:346 [StateManager] h_10 setValue stack trace:
setValue @ 4011-StateManager.js:346
calculateValues @ 4011-Section15.js:1832
calculateTargetModel @ 4011-Section15.js:1662
calculateAll @ 4011-Section15.js:1328
(anonymous) @ 4011-Section15.js:2121
(anonymous) @ 4011-StateManager.js:543
notifyListeners @ 4011-StateManager.js:541
setValue @ 4011-StateManager.js:419
(anonymous) @ 4011-Section13.js:3765
storeReferenceResults @ 4011-Section13.js:3757
calculateReferenceModel @ 4011-Section13.js:3504
calculateAll @ 4011-Section13.js:3402
calculateAndRefresh @ 4011-Section13.js:2368
(anonymous) @ 4011-StateManager.js:543
notifyListeners @ 4011-StateManager.js:541
setValue @ 4011-StateManager.js:419
setValue @ 4011-Section10.js:230
calculateSubtotals @ 4011-Section10.js:2251
calculateTargetModel @ 4011-Section10.js:1847
calculateAll @ 4011-Section10.js:1824
(anonymous) @ 4011-Section10.js:2670
(anonymous) @ 4011-StateManager.js:543
notifyListeners @ 4011-StateManager.js:541
setValue @ 4011-StateManager.js:419
setValue @ 4011-Section03.js:212
setFieldValue @ 4011-Section03.js:450
(anonymous) @ 4011-Section03.js:2213
(anonymous) @ 4011-StateManager.js:543
notifyListeners @ 4011-StateManager.js:541
setValue @ 4011-StateManager.js:419
(anonymous) @ 4011-Section03.js:1689
calculateTargetModel @ 4011-Section03.js:1686
calculateAll @ 4011-Section03.js:1665
(anonymous) @ 4011-Section03.js:2057
4011-Section13.js:3773 [Section13] Reference results stored with ref_ prefix for downstream sections
4011-Section13.js:3776 [S13 DEBUG] Total Reference results stored: 34
4011-Section13.js:3515 [Section13] Reference Model calculations complete
4011-Section13.js:3403 [Section13] ✅ Reference Model complete
4011-Section13.js:3405 [Section13] 🔄 Starting Target Model calculations...
4011-Section13.js:721 🔍 [S13-CONTEXT] Creating target context: g_118="Volume by Schedule" from TargetState
4011-Section13.js:725 🔍 [S13-CONTEXT] TargetState.g_118="Volume by Schedule", ReferenceState.g_118="Volume Constant"
4011-Section13.js:3536 [Section13] Running Target Model calculations...
4011-Section13.js:2873 [S13] TGT HEATING: system=Heatpump, ted=147391.80728166597, afue=0.98, cop=3.663540445486518
4011-Section13.js:3099 🔍 [S13-VENT] calculateVentilationRates: ventMethod="Volume by Schedule", ach(l_118)=3, ratePerPerson(d_119)=14, volume(d_105)=8000
4011-Section13.js:3102 🔍 [S13-VENT] isReferenceCalculation=false, hasContext=true
4011-Section13.js:3110 🔍 [S13-VENT] calculateVentilationValues: ventMethod="Volume by Schedule", ach(l_118)=3, ratePerPerson(d_119)=14, volume(d_105)=8000
4011-Section13.js:3113 🔍 [S13-VENT] Supporting values: occupants(d_63)=126, occupiedHours(i_63)=4380, totalHours(j_63)=8760
4011-Section13.js:3145 ✅ [S13-VENT] Final d_120 result: 3333.333333333333 L/s (from method="Volume by Schedule", ach=3, volume=8000)
4011-Section13.js:2977 [Section13] 🧊 COOLING CALC: mode=TGT, coolingSystemType="Cooling", heatingType="Heatpump", isCoolingActive=true, coolingDemand=10386.714434542262
4011-Section13.js:3039 [Section13] 🧊 COOLING RESULTS: d_117=3899.589530222073, j_116=2.663540445486518, l_116=0, l_114=6487.124904320189
24011-Section14.js:1416 [S14 LISTENER] 🔥 d_122 changed - triggering calculateAll() + UI update
4011-Section15.js:1750 [S15] 🎯 TGT S03 CLIMATE READ: h_23=18, d_23=-24, d_24=30, h_24=24
4011-StateManager.js:343 [StateManager] 🎯 h_10 setValue: "99.04017463973207" (state: calculated)
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
calculateCoolingVentilation @ 4011-Section13.js:3275
calculateCoolingSystem @ 4011-Section13.js:3043
calculateTargetModel @ 4011-Section13.js:3563
calculateAll @ 4011-Section13.js:3406
calculateAndRefresh @ 4011-Section13.js:2368
(anonymous) @ 4011-StateManager.js:543
notifyListeners @ 4011-StateManager.js:541
setValue @ 4011-StateManager.js:419
setValue @ 4011-Section10.js:230
calculateSubtotals @ 4011-Section10.js:2251
calculateTargetModel @ 4011-Section10.js:1847
calculateAll @ 4011-Section10.js:1824
(anonymous) @ 4011-Section10.js:2670
(anonymous) @ 4011-StateManager.js:543
notifyListeners @ 4011-StateManager.js:541
setValue @ 4011-StateManager.js:419
setValue @ 4011-Section03.js:212
setFieldValue @ 4011-Section03.js:450
(anonymous) @ 4011-Section03.js:2213
(anonymous) @ 4011-StateManager.js:543
notifyListeners @ 4011-StateManager.js:541
setValue @ 4011-StateManager.js:419
(anonymous) @ 4011-Section03.js:1689
calculateTargetModel @ 4011-Section03.js:1686
calculateAll @ 4011-Section03.js:1665
(anonymous) @ 4011-Section03.js:2057
4011-Section15.js:1750 [S15] 🎯 TGT S03 CLIMATE READ: h_23=18, d_23=-24, d_24=30, h_24=24
4011-StateManager.js:343 [StateManager] 🎯 h_10 setValue: "99.04017463973207" (state: calculated)
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
calculateCoolingVentilation @ 4011-Section13.js:3275
calculateCoolingSystem @ 4011-Section13.js:3043
calculateTargetModel @ 4011-Section13.js:3563
calculateAll @ 4011-Section13.js:3406
calculateAndRefresh @ 4011-Section13.js:2368
(anonymous) @ 4011-StateManager.js:543
notifyListeners @ 4011-StateManager.js:541
setValue @ 4011-StateManager.js:419
setValue @ 4011-Section10.js:230
calculateSubtotals @ 4011-Section10.js:2251
calculateTargetModel @ 4011-Section10.js:1847
calculateAll @ 4011-Section10.js:1824
(anonymous) @ 4011-Section10.js:2670
(anonymous) @ 4011-StateManager.js:543
notifyListeners @ 4011-StateManager.js:541
setValue @ 4011-StateManager.js:419
setValue @ 4011-Section03.js:212
setFieldValue @ 4011-Section03.js:450
(anonymous) @ 4011-Section03.js:2213
(anonymous) @ 4011-StateManager.js:543
notifyListeners @ 4011-StateManager.js:541
setValue @ 4011-StateManager.js:419
(anonymous) @ 4011-Section03.js:1689
calculateTargetModel @ 4011-Section03.js:1686
calculateAll @ 4011-Section03.js:1665
(anonymous) @ 4011-Section03.js:2057
24011-Section14.js:1416 [S14 LISTENER] 🔥 d_122 changed - triggering calculateAll() + UI update
4011-Section15.js:1750 [S15] 🎯 TGT S03 CLIMATE READ: h_23=18, d_23=-24, d_24=30, h_24=24
4011-StateManager.js:343 [StateManager] 🎯 h_10 setValue: "99.04017463973207" (state: calculated)
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
updateTargetModelDOMValues @ 4011-Section13.js:3687
calculateTargetModel @ 4011-Section13.js:3573
calculateAll @ 4011-Section13.js:3406
calculateAndRefresh @ 4011-Section13.js:2368
(anonymous) @ 4011-StateManager.js:543
notifyListeners @ 4011-StateManager.js:541
setValue @ 4011-StateManager.js:419
setValue @ 4011-Section10.js:230
calculateSubtotals @ 4011-Section10.js:2251
calculateTargetModel @ 4011-Section10.js:1847
calculateAll @ 4011-Section10.js:1824
(anonymous) @ 4011-Section10.js:2670
(anonymous) @ 4011-StateManager.js:543
notifyListeners @ 4011-StateManager.js:541
setValue @ 4011-StateManager.js:419
setValue @ 4011-Section03.js:212
setFieldValue @ 4011-Section03.js:450
(anonymous) @ 4011-Section03.js:2213
(anonymous) @ 4011-StateManager.js:543
notifyListeners @ 4011-StateManager.js:541
setValue @ 4011-StateManager.js:419
(anonymous) @ 4011-Section03.js:1689
calculateTargetModel @ 4011-Section03.js:1686
calculateAll @ 4011-Section03.js:1665
(anonymous) @ 4011-Section03.js:2057
4011-Section15.js:1750 [S15] 🎯 TGT S03 CLIMATE READ: h_23=18, d_23=-24, d_24=30, h_24=24
4011-StateManager.js:343 [StateManager] 🎯 h_10 setValue: "99.04017463973207" (state: calculated)
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
updateTargetModelDOMValues @ 4011-Section13.js:3687
calculateTargetModel @ 4011-Section13.js:3573
calculateAll @ 4011-Section13.js:3406
calculateAndRefresh @ 4011-Section13.js:2368
(anonymous) @ 4011-StateManager.js:543
notifyListeners @ 4011-StateManager.js:541
setValue @ 4011-StateManager.js:419
setValue @ 4011-Section10.js:230
calculateSubtotals @ 4011-Section10.js:2251
calculateTargetModel @ 4011-Section10.js:1847
calculateAll @ 4011-Section10.js:1824
(anonymous) @ 4011-Section10.js:2670
(anonymous) @ 4011-StateManager.js:543
notifyListeners @ 4011-StateManager.js:541
setValue @ 4011-StateManager.js:419
setValue @ 4011-Section03.js:212
setFieldValue @ 4011-Section03.js:450
(anonymous) @ 4011-Section03.js:2213
(anonymous) @ 4011-StateManager.js:543
notifyListeners @ 4011-StateManager.js:541
setValue @ 4011-StateManager.js:419
(anonymous) @ 4011-Section03.js:1689
calculateTargetModel @ 4011-Section03.js:1686
calculateAll @ 4011-Section03.js:1665
(anonymous) @ 4011-Section03.js:2057
4011-Section13.js:3591 [Section13] Target Model calculations complete
4011-Section13.js:3407 [Section13] ✅ Target Model complete
4011-Section13.js:3434 [Section13] ⏭️ Skipping Reference value re-write - triggered in target mode
4011-Section13.js:3440 [Section13] 🎉 DUAL-ENGINE CALCULATIONS COMPLETE
4011-Section13.js:252 [Section13] 🔄 Updating calculated display values for target mode
4011-Section13.js:336 [Section13] Calculated display values updated for target mode
4011-Section13.js:3389 [Section13] 🚀 CALCULATEALL TRIGGERED - Running dual-engine calculations...
4011-Section13.js:3395 [Section13] 🎯 Mode captured at calculation start: target
4011-Section13.js:3401 [Section13] 🔄 Starting Reference Model calculations...
4011-Section13.js:721 🔍 [S13-CONTEXT] Creating reference context: g_118="Volume Constant" from ReferenceState
4011-Section13.js:723 🔍 [S13-CONTEXT] ReferenceState.g_118="Volume Constant", TargetState.g_118="Volume by Schedule"
4011-Section13.js:3457 [Section13] Running Reference Model calculations...
4011-Section13.js:3471 [S13 CONTAMINATION DEBUG] calculateReferenceModel: Using system type = Electricity
4011-Section13.js:2873 [S13] REF HEATING: system=Electricity, ted=297371.1974742337, afue=0.9, cop=1
4011-Section13.js:2879 [S13 REF DEBUG] About to calculate with heating system: Electricity
4011-Section13.js:2882 [S13 REF DEBUG] Will S13 publish ref_d_113=Electricity?
4011-Section13.js:3099 🔍 [S13-VENT] calculateVentilationRates: ventMethod="Volume Constant", ach(l_118)=3.5, ratePerPerson(d_119)=8.33, volume(d_105)=8000
4011-Section13.js:3102 🔍 [S13-VENT] isReferenceCalculation=true, hasContext=true
4011-Section13.js:3110 🔍 [S13-VENT] calculateVentilationValues: ventMethod="Volume Constant", ach(l_118)=3.5, ratePerPerson(d_119)=8.33, volume(d_105)=8000
4011-Section13.js:3113 🔍 [S13-VENT] Supporting values: occupants(d_63)=126, occupiedHours(i_63)=4380, totalHours(j_63)=8760
4011-Section13.js:3133 🔍 [S13-VENT] Volume Constant calculation: ventRateLs = (3.5 * 8000) / 3.6 = 7777.777777777777
4011-Section13.js:3145 ✅ [S13-VENT] Final d_120 result: 7777.777777777777 L/s (from method="Volume Constant", ach=3.5, volume=8000)
4011-Section13.js:2977 [Section13] 🧊 COOLING CALC: mode=REF, coolingSystemType="No Cooling", heatingType="Electricity", isCoolingActive=false, coolingDemand=9766.063134946162
4011-Section13.js:3737 [S13 CONTAMINATION DEBUG] storeReferenceResults called during reference mode
4011-Section13.js:3740 [S13 CONTAMINATION DEBUG] Reference heating system: Electricity
4011-Section13.js:3743 [S13 CONTAMINATION DEBUG] Target heating system: Heatpump
4011-Section13.js:3746 [S13 CONTAMINATION DEBUG] Reference h_115 (gas volume): 0
4011-Section13.js:3749 [S13 CONTAMINATION DEBUG] Reference f_115 (oil volume): 0
4011-Section15.js:1750 [S15] 🎯 TGT S03 CLIMATE READ: h_23=18, d_23=-24, d_24=30, h_24=24
4011-StateManager.js:343 [StateManager] 🎯 h_10 setValue: "99.04017463973207" (state: calculated)
4011-StateManager.js:346 [StateManager] h_10 setValue stack trace:
setValue @ 4011-StateManager.js:346
calculateValues @ 4011-Section15.js:1832
calculateTargetModel @ 4011-Section15.js:1662
calculateAll @ 4011-Section15.js:1328
(anonymous) @ 4011-Section15.js:2121
(anonymous) @ 4011-StateManager.js:543
notifyListeners @ 4011-StateManager.js:541
setValue @ 4011-StateManager.js:419
(anonymous) @ 4011-Section13.js:3765
storeReferenceResults @ 4011-Section13.js:3757
calculateReferenceModel @ 4011-Section13.js:3504
calculateAll @ 4011-Section13.js:3402
calculateAndRefresh @ 4011-Section13.js:2368
(anonymous) @ 4011-StateManager.js:543
notifyListeners @ 4011-StateManager.js:541
setValue @ 4011-StateManager.js:419
setValue @ 4011-Section10.js:230
calculateSubtotals @ 4011-Section10.js:2251
calculateTargetModel @ 4011-Section10.js:1847
calculateAll @ 4011-Section10.js:1824
(anonymous) @ 4011-Section10.js:2670
(anonymous) @ 4011-StateManager.js:543
notifyListeners @ 4011-StateManager.js:541
setValue @ 4011-StateManager.js:419
setValue @ 4011-Section03.js:212
setFieldValue @ 4011-Section03.js:450
(anonymous) @ 4011-Section03.js:2213
(anonymous) @ 4011-StateManager.js:543
notifyListeners @ 4011-StateManager.js:541
setValue @ 4011-StateManager.js:419
(anonymous) @ 4011-Section03.js:1689
calculateTargetModel @ 4011-Section03.js:1686
calculateAll @ 4011-Section03.js:1665
(anonymous) @ 4011-Section03.js:2057
4011-Section15.js:1750 [S15] 🎯 TGT S03 CLIMATE READ: h_23=18, d_23=-24, d_24=30, h_24=24
4011-StateManager.js:343 [StateManager] 🎯 h_10 setValue: "99.04017463973207" (state: calculated)
4011-StateManager.js:346 [StateManager] h_10 setValue stack trace:
setValue @ 4011-StateManager.js:346
calculateValues @ 4011-Section15.js:1832
calculateTargetModel @ 4011-Section15.js:1662
calculateAll @ 4011-Section15.js:1328
(anonymous) @ 4011-Section15.js:2121
(anonymous) @ 4011-StateManager.js:543
notifyListeners @ 4011-StateManager.js:541
setValue @ 4011-StateManager.js:419
(anonymous) @ 4011-Section13.js:3765
storeReferenceResults @ 4011-Section13.js:3757
calculateReferenceModel @ 4011-Section13.js:3504
calculateAll @ 4011-Section13.js:3402
calculateAndRefresh @ 4011-Section13.js:2368
(anonymous) @ 4011-StateManager.js:543
notifyListeners @ 4011-StateManager.js:541
setValue @ 4011-StateManager.js:419
setValue @ 4011-Section10.js:230
calculateSubtotals @ 4011-Section10.js:2251
calculateTargetModel @ 4011-Section10.js:1847
calculateAll @ 4011-Section10.js:1824
(anonymous) @ 4011-Section10.js:2670
(anonymous) @ 4011-StateManager.js:543
notifyListeners @ 4011-StateManager.js:541
setValue @ 4011-StateManager.js:419
setValue @ 4011-Section03.js:212
setFieldValue @ 4011-Section03.js:450
(anonymous) @ 4011-Section03.js:2213
(anonymous) @ 4011-StateManager.js:543
notifyListeners @ 4011-StateManager.js:541
setValue @ 4011-StateManager.js:419
(anonymous) @ 4011-Section03.js:1689
calculateTargetModel @ 4011-Section03.js:1686
calculateAll @ 4011-Section03.js:1665
(anonymous) @ 4011-Section03.js:2057
4011-Section15.js:1750 [S15] 🎯 TGT S03 CLIMATE READ: h_23=18, d_23=-24, d_24=30, h_24=24
4011-StateManager.js:343 [StateManager] 🎯 h_10 setValue: "99.04017463973207" (state: calculated)
4011-StateManager.js:346 [StateManager] h_10 setValue stack trace:
setValue @ 4011-StateManager.js:346
calculateValues @ 4011-Section15.js:1832
calculateTargetModel @ 4011-Section15.js:1662
calculateAll @ 4011-Section15.js:1328
(anonymous) @ 4011-Section15.js:2121
(anonymous) @ 4011-StateManager.js:543
notifyListeners @ 4011-StateManager.js:541
setValue @ 4011-StateManager.js:419
(anonymous) @ 4011-Section13.js:3765
storeReferenceResults @ 4011-Section13.js:3757
calculateReferenceModel @ 4011-Section13.js:3504
calculateAll @ 4011-Section13.js:3402
calculateAndRefresh @ 4011-Section13.js:2368
(anonymous) @ 4011-StateManager.js:543
notifyListeners @ 4011-StateManager.js:541
setValue @ 4011-StateManager.js:419
setValue @ 4011-Section10.js:230
calculateSubtotals @ 4011-Section10.js:2251
calculateTargetModel @ 4011-Section10.js:1847
calculateAll @ 4011-Section10.js:1824
(anonymous) @ 4011-Section10.js:2670
(anonymous) @ 4011-StateManager.js:543
notifyListeners @ 4011-StateManager.js:541
setValue @ 4011-StateManager.js:419
setValue @ 4011-Section03.js:212
setFieldValue @ 4011-Section03.js:450
(anonymous) @ 4011-Section03.js:2213
(anonymous) @ 4011-StateManager.js:543
notifyListeners @ 4011-StateManager.js:541
setValue @ 4011-StateManager.js:419
(anonymous) @ 4011-Section03.js:1689
calculateTargetModel @ 4011-Section03.js:1686
calculateAll @ 4011-Section03.js:1665
(anonymous) @ 4011-Section03.js:2057
4011-Section15.js:1750 [S15] 🎯 TGT S03 CLIMATE READ: h_23=18, d_23=-24, d_24=30, h_24=24
4011-StateManager.js:343 [StateManager] 🎯 h_10 setValue: "99.04017463973207" (state: calculated)
4011-StateManager.js:346 [StateManager] h_10 setValue stack trace:
setValue @ 4011-StateManager.js:346
calculateValues @ 4011-Section15.js:1832
calculateTargetModel @ 4011-Section15.js:1662
calculateAll @ 4011-Section15.js:1328
(anonymous) @ 4011-Section15.js:2121
(anonymous) @ 4011-StateManager.js:543
notifyListeners @ 4011-StateManager.js:541
setValue @ 4011-StateManager.js:419
(anonymous) @ 4011-Section13.js:3765
storeReferenceResults @ 4011-Section13.js:3757
calculateReferenceModel @ 4011-Section13.js:3504
calculateAll @ 4011-Section13.js:3402
calculateAndRefresh @ 4011-Section13.js:2368
(anonymous) @ 4011-StateManager.js:543
notifyListeners @ 4011-StateManager.js:541
setValue @ 4011-StateManager.js:419
setValue @ 4011-Section10.js:230
calculateSubtotals @ 4011-Section10.js:2251
calculateTargetModel @ 4011-Section10.js:1847
calculateAll @ 4011-Section10.js:1824
(anonymous) @ 4011-Section10.js:2670
(anonymous) @ 4011-StateManager.js:543
notifyListeners @ 4011-StateManager.js:541
setValue @ 4011-StateManager.js:419
setValue @ 4011-Section03.js:212
setFieldValue @ 4011-Section03.js:450
(anonymous) @ 4011-Section03.js:2213
(anonymous) @ 4011-StateManager.js:543
notifyListeners @ 4011-StateManager.js:541
setValue @ 4011-StateManager.js:419
(anonymous) @ 4011-Section03.js:1689
calculateTargetModel @ 4011-Section03.js:1686
calculateAll @ 4011-Section03.js:1665
(anonymous) @ 4011-Section03.js:2057
4011-Section13.js:3761 [S13 CONTAMINATION DEBUG] Writing ref_f_115 = 0
4011-Section04.js:2713 [S04] S13 space oil volume changed (Reference): ref_f_115
4011-Section04.js:1018 [S04] Row 32 Subtotals - F32: 132938, G32: 6779.838, J32: 347966.051518286, K32: 17746.268627432586
4011-Section04.js:1668 [S04] Reference model calculations complete
4011-Section04.js:1674 [S04DB] storeReference: ref_j_32=347966.051518286, ref_k_32=17746.268627432586 | current target j_32=141350.1372458256, k_32=7208.856999537105
4011-Section04.js:493 [S04] 🔄 Updating calculated display values for target mode
4011-Section04.js:501 [S04DB] displayContext mode=target j_32=141350.1372458256 ref_j_32=347966.051518286 k_32=7208.856999537105 ref_k_32=17746.268627432586
4011-Section04.js:582 [S04 DEBUG] Target mode - j_32: 141350.1372458256
4011-Section04.js:582 [S04 DEBUG] Target mode - k_32: 7208.856999537105
4011-Section04.js:582 [S04 DEBUG] Target mode - l_27: 51
4011-Section04.js:617 [S04] Calculated display values updated for target mode
4011-Section13.js:3761 [S13 CONTAMINATION DEBUG] Writing ref_h_115 = 0
4011-Section04.js:2721 [S04] S13 space gas volume changed (Reference): ref_h_115
4011-Section04.js:1018 [S04] Row 32 Subtotals - F32: 132938, G32: 6779.838, J32: 347966.051518286, K32: 17746.268627432586
4011-Section04.js:1668 [S04] Reference model calculations complete
4011-Section04.js:1674 [S04DB] storeReference: ref_j_32=347966.051518286, ref_k_32=17746.268627432586 | current target j_32=141350.1372458256, k_32=7208.856999537105
4011-Section04.js:493 [S04] 🔄 Updating calculated display values for target mode
4011-Section04.js:501 [S04DB] displayContext mode=target j_32=141350.1372458256 ref_j_32=347966.051518286 k_32=7208.856999537105 ref_k_32=17746.268627432586
4011-Section04.js:582 [S04 DEBUG] Target mode - j_32: 141350.1372458256
4011-Section04.js:582 [S04 DEBUG] Target mode - k_32: 7208.856999537105
4011-Section04.js:582 [S04 DEBUG] Target mode - l_27: 51
4011-Section04.js:617 [S04] Calculated display values updated for target mode
4011-Section15.js:1750 [S15] 🎯 TGT S03 CLIMATE READ: h_23=18, d_23=-24, d_24=30, h_24=24
4011-StateManager.js:343 [StateManager] 🎯 h_10 setValue: "99.04017463973207" (state: calculated)
4011-StateManager.js:346 [StateManager] h_10 setValue stack trace:
setValue @ 4011-StateManager.js:346
calculateValues @ 4011-Section15.js:1832
calculateTargetModel @ 4011-Section15.js:1662
calculateAll @ 4011-Section15.js:1328
(anonymous) @ 4011-Section15.js:2121
(anonymous) @ 4011-StateManager.js:543
notifyListeners @ 4011-StateManager.js:541
setValue @ 4011-StateManager.js:419
(anonymous) @ 4011-Section13.js:3765
storeReferenceResults @ 4011-Section13.js:3757
calculateReferenceModel @ 4011-Section13.js:3504
calculateAll @ 4011-Section13.js:3402
calculateAndRefresh @ 4011-Section13.js:2368
(anonymous) @ 4011-StateManager.js:543
notifyListeners @ 4011-StateManager.js:541
setValue @ 4011-StateManager.js:419
setValue @ 4011-Section10.js:230
calculateSubtotals @ 4011-Section10.js:2251
calculateTargetModel @ 4011-Section10.js:1847
calculateAll @ 4011-Section10.js:1824
(anonymous) @ 4011-Section10.js:2670
(anonymous) @ 4011-StateManager.js:543
notifyListeners @ 4011-StateManager.js:541
setValue @ 4011-StateManager.js:419
setValue @ 4011-Section03.js:212
setFieldValue @ 4011-Section03.js:450
(anonymous) @ 4011-Section03.js:2213
(anonymous) @ 4011-StateManager.js:543
notifyListeners @ 4011-StateManager.js:541
setValue @ 4011-StateManager.js:419
(anonymous) @ 4011-Section03.js:1689
calculateTargetModel @ 4011-Section03.js:1686
calculateAll @ 4011-Section03.js:1665
(anonymous) @ 4011-Section03.js:2057
4011-Section15.js:1750 [S15] 🎯 TGT S03 CLIMATE READ: h_23=18, d_23=-24, d_24=30, h_24=24
4011-StateManager.js:343 [StateManager] 🎯 h_10 setValue: "99.04017463973207" (state: calculated)
4011-StateManager.js:346 [StateManager] h_10 setValue stack trace:
setValue @ 4011-StateManager.js:346
calculateValues @ 4011-Section15.js:1832
calculateTargetModel @ 4011-Section15.js:1662
calculateAll @ 4011-Section15.js:1328
(anonymous) @ 4011-Section15.js:2121
(anonymous) @ 4011-StateManager.js:543
notifyListeners @ 4011-StateManager.js:541
setValue @ 4011-StateManager.js:419
(anonymous) @ 4011-Section13.js:3765
storeReferenceResults @ 4011-Section13.js:3757
calculateReferenceModel @ 4011-Section13.js:3504
calculateAll @ 4011-Section13.js:3402
calculateAndRefresh @ 4011-Section13.js:2368
(anonymous) @ 4011-StateManager.js:543
notifyListeners @ 4011-StateManager.js:541
setValue @ 4011-StateManager.js:419
setValue @ 4011-Section10.js:230
calculateSubtotals @ 4011-Section10.js:2251
calculateTargetModel @ 4011-Section10.js:1847
calculateAll @ 4011-Section10.js:1824
(anonymous) @ 4011-Section10.js:2670
(anonymous) @ 4011-StateManager.js:543
notifyListeners @ 4011-StateManager.js:541
setValue @ 4011-StateManager.js:419
setValue @ 4011-Section03.js:212
setFieldValue @ 4011-Section03.js:450
(anonymous) @ 4011-Section03.js:2213
(anonymous) @ 4011-StateManager.js:543
notifyListeners @ 4011-StateManager.js:541
setValue @ 4011-StateManager.js:419
(anonymous) @ 4011-Section03.js:1689
calculateTargetModel @ 4011-Section03.js:1686
calculateAll @ 4011-Section03.js:1665
(anonymous) @ 4011-Section03.js:2057
4011-Section15.js:1750 [S15] 🎯 TGT S03 CLIMATE READ: h_23=18, d_23=-24, d_24=30, h_24=24
4011-StateManager.js:343 [StateManager] 🎯 h_10 setValue: "99.04017463973207" (state: calculated)
4011-StateManager.js:346 [StateManager] h_10 setValue stack trace:
setValue @ 4011-StateManager.js:346
calculateValues @ 4011-Section15.js:1832
calculateTargetModel @ 4011-Section15.js:1662
calculateAll @ 4011-Section15.js:1328
(anonymous) @ 4011-Section15.js:2121
(anonymous) @ 4011-StateManager.js:543
notifyListeners @ 4011-StateManager.js:541
setValue @ 4011-StateManager.js:419
(anonymous) @ 4011-Section13.js:3765
storeReferenceResults @ 4011-Section13.js:3757
calculateReferenceModel @ 4011-Section13.js:3504
calculateAll @ 4011-Section13.js:3402
calculateAndRefresh @ 4011-Section13.js:2368
(anonymous) @ 4011-StateManager.js:543
notifyListeners @ 4011-StateManager.js:541
setValue @ 4011-StateManager.js:419
setValue @ 4011-Section10.js:230
calculateSubtotals @ 4011-Section10.js:2251
calculateTargetModel @ 4011-Section10.js:1847
calculateAll @ 4011-Section10.js:1824
(anonymous) @ 4011-Section10.js:2670
(anonymous) @ 4011-StateManager.js:543
notifyListeners @ 4011-StateManager.js:541
setValue @ 4011-StateManager.js:419
setValue @ 4011-Section03.js:212
setFieldValue @ 4011-Section03.js:450
(anonymous) @ 4011-Section03.js:2213
(anonymous) @ 4011-StateManager.js:543
notifyListeners @ 4011-StateManager.js:541
setValue @ 4011-StateManager.js:419
(anonymous) @ 4011-Section03.js:1689
calculateTargetModel @ 4011-Section03.js:1686
calculateAll @ 4011-Section03.js:1665
(anonymous) @ 4011-Section03.js:2057
4011-Section15.js:1750 [S15] 🎯 TGT S03 CLIMATE READ: h_23=18, d_23=-24, d_24=30, h_24=24
4011-StateManager.js:343 [StateManager] 🎯 h_10 setValue: "99.04017463973207" (state: calculated)
4011-StateManager.js:346 [StateManager] h_10 setValue stack trace:
setValue @ 4011-StateManager.js:346
calculateValues @ 4011-Section15.js:1832
calculateTargetModel @ 4011-Section15.js:1662
calculateAll @ 4011-Section15.js:1328
(anonymous) @ 4011-Section15.js:2121
(anonymous) @ 4011-StateManager.js:543
notifyListeners @ 4011-StateManager.js:541
setValue @ 4011-StateManager.js:419
(anonymous) @ 4011-Section13.js:3765
storeReferenceResults @ 4011-Section13.js:3757
calculateReferenceModel @ 4011-Section13.js:3504
calculateAll @ 4011-Section13.js:3402
calculateAndRefresh @ 4011-Section13.js:2368
(anonymous) @ 4011-StateManager.js:543
notifyListeners @ 4011-StateManager.js:541
setValue @ 4011-StateManager.js:419
setValue @ 4011-Section10.js:230
calculateSubtotals @ 4011-Section10.js:2251
calculateTargetModel @ 4011-Section10.js:1847
calculateAll @ 4011-Section10.js:1824
(anonymous) @ 4011-Section10.js:2670
(anonymous) @ 4011-StateManager.js:543
notifyListeners @ 4011-StateManager.js:541
setValue @ 4011-StateManager.js:419
setValue @ 4011-Section03.js:212
setFieldValue @ 4011-Section03.js:450
(anonymous) @ 4011-Section03.js:2213
(anonymous) @ 4011-StateManager.js:543
notifyListeners @ 4011-StateManager.js:541
setValue @ 4011-StateManager.js:419
(anonymous) @ 4011-Section03.js:1689
calculateTargetModel @ 4011-Section03.js:1686
calculateAll @ 4011-Section03.js:1665
(anonymous) @ 4011-Section03.js:2057
4011-Section10.js:2676 S10: Reference listener triggered by ref_m_121, recalculating all.
4011-Section10.js:1819 [S10 DEBUG] calculateAll() triggered in target mode - running both engines
4011-Section10.js:2040 [S10REF] Utilization calc: ref_i_71=110562.1692, ref_i_79=10060.174319999998, totalGains=120622.34352
4011-Section10.js:2054 [S10REF] Using utilization method: NRC 40%
4011-Section10.js:2091 [S10REF] Final calc: utilizationFactor=0.4, usableGains=48248.937408
4011-Section10.js:2134 [S10REF] Complete: g_80=0.4, g_81=0.9966231765247549, i_80=48248.937408, i_81=120215.02315876257
4011-Section10.js:1827 [S10 DEBUG] Dual-engine calculations complete in target mode
4011-Section10.js:341 [S10DISPLAY] updateCalculatedDisplayValues() called in target mode
4011-Section10.js:448 [S10DISPLAY] Display (target) m_73 = 24.84
4011-Section10.js:448 [S10DISPLAY] Display (target) m_74 = 0.19
4011-Section10.js:448 [S10DISPLAY] Display (target) m_75 = 2.09
4011-Section10.js:448 [S10DISPLAY] Display (target) m_76 = 24.76
4011-Section10.js:448 [S10DISPLAY] Display (target) m_77 = 64.37
4011-Section10.js:448 [S10DISPLAY] Display (target) m_78 = 25.00
4011-Section10.js:448 [S10DISPLAY] Display (target) i_73 = 186.30
4011-Section10.js:448 [S10DISPLAY] Display (target) i_74 = 15.42
4011-Section10.js:448 [S10DISPLAY] Display (target) i_75 = 8.00
4011-Section10.js:448 [S10DISPLAY] Display (target) i_76 = 3,936.84
4011-Section10.js:448 [S10DISPLAY] Display (target) i_77 = 6,479.48
4011-Section10.js:448 [S10DISPLAY] Display (target) i_78 = 0.00
4011-Section10.js:448 [S10DISPLAY] Display (target) i_79 = 10,626.05
4011-Section10.js:448 [S10DISPLAY] Display (target) k_73 = 0.00
4011-Section10.js:448 [S10DISPLAY] Display (target) k_74 = 0.00
4011-Section10.js:448 [S10DISPLAY] Display (target) k_75 = 0.00
4011-Section10.js:448 [S10DISPLAY] Display (target) k_76 = 0.00
4011-Section10.js:448 [S10DISPLAY] Display (target) k_77 = 323.97
4011-Section10.js:448 [S10DISPLAY] Display (target) k_78 = 0.00
4011-Section10.js:448 [S10DISPLAY] Display (target) k_79 = 323.97
4011-Section10.js:448 [S10DISPLAY] Display (target) j_73 = 1.75%
4011-Section10.js:448 [S10DISPLAY] Display (target) j_74 = 0.15%
4011-Section10.js:448 [S10DISPLAY] Display (target) j_75 = 0.08%
4011-Section10.js:448 [S10DISPLAY] Display (target) j_76 = 37.05%
4011-Section10.js:448 [S10DISPLAY] Display (target) j_77 = 60.98%
4011-Section10.js:448 [S10DISPLAY] Display (target) j_78 = 0.00%
4011-Section10.js:448 [S10DISPLAY] Display (target) j_79 = 100.00%
4011-Section10.js:448 [S10DISPLAY] Display (target) l_73 = 0.00%
4011-Section10.js:448 [S10DISPLAY] Display (target) l_74 = 0.00%
4011-Section10.js:448 [S10DISPLAY] Display (target) l_75 = 0.00%
4011-Section10.js:448 [S10DISPLAY] Display (target) l_76 = 0.00%
4011-Section10.js:448 [S10DISPLAY] Display (target) l_77 = 100.00%
4011-Section10.js:448 [S10DISPLAY] Display (target) l_78 = 0.00%
4011-Section10.js:448 [S10DISPLAY] Display (target) l_79 = 100.00%
4011-Section10.js:448 [S10DISPLAY] Display (target) e_80 = 110,698.29
4011-Section10.js:448 [S10DISPLAY] Display (target) e_81 = 110,698.29
4011-Section10.js:415 [S10DISPLAY] g_80 DEBUG: mode=target, valueToDisplay=0.4
4011-Section10.js:448 [S10DISPLAY] Display (target) g_80 = 40.00%
4011-Section10.js:448 [S10DISPLAY] Display (target) g_81 = 97.18%
4011-Section10.js:448 [S10DISPLAY] Display (target) i_80 = 44,279.32
4011-Section10.js:448 [S10DISPLAY] Display (target) i_81 = 107,577.48
4011-Section10.js:448 [S10DISPLAY] Display (target) i_82 = 66,418.98
4011-Section10.js:2697 S10: Reference utilization factor dependency ref_m_121 changed.
4011-Section10.js:341 [S10DISPLAY] updateCalculatedDisplayValues() called in target mode
4011-Section10.js:448 [S10DISPLAY] Display (target) m_73 = 24.84
4011-Section10.js:448 [S10DISPLAY] Display (target) m_74 = 0.19
4011-Section10.js:448 [S10DISPLAY] Display (target) m_75 = 2.09
4011-Section10.js:448 [S10DISPLAY] Display (target) m_76 = 24.76
4011-Section10.js:448 [S10DISPLAY] Display (target) m_77 = 64.37
4011-Section10.js:448 [S10DISPLAY] Display (target) m_78 = 25.00
4011-Section10.js:448 [S10DISPLAY] Display (target) i_73 = 186.30
4011-Section10.js:448 [S10DISPLAY] Display (target) i_74 = 15.42
4011-Section10.js:448 [S10DISPLAY] Display (target) i_75 = 8.00
4011-Section10.js:448 [S10DISPLAY] Display (target) i_76 = 3,936.84
4011-Section10.js:448 [S10DISPLAY] Display (target) i_77 = 6,479.48
4011-Section10.js:448 [S10DISPLAY] Display (target) i_78 = 0.00
4011-Section10.js:448 [S10DISPLAY] Display (target) i_79 = 10,626.05
4011-Section10.js:448 [S10DISPLAY] Display (target) k_73 = 0.00
4011-Section10.js:448 [S10DISPLAY] Display (target) k_74 = 0.00
4011-Section10.js:448 [S10DISPLAY] Display (target) k_75 = 0.00
4011-Section10.js:448 [S10DISPLAY] Display (target) k_76 = 0.00
4011-Section10.js:448 [S10DISPLAY] Display (target) k_77 = 323.97
4011-Section10.js:448 [S10DISPLAY] Display (target) k_78 = 0.00
4011-Section10.js:448 [S10DISPLAY] Display (target) k_79 = 323.97
4011-Section10.js:448 [S10DISPLAY] Display (target) j_73 = 1.75%
4011-Section10.js:448 [S10DISPLAY] Display (target) j_74 = 0.15%
4011-Section10.js:448 [S10DISPLAY] Display (target) j_75 = 0.08%
4011-Section10.js:448 [S10DISPLAY] Display (target) j_76 = 37.05%
4011-Section10.js:448 [S10DISPLAY] Display (target) j_77 = 60.98%
4011-Section10.js:448 [S10DISPLAY] Display (target) j_78 = 0.00%
4011-Section10.js:448 [S10DISPLAY] Display (target) j_79 = 100.00%
4011-Section10.js:448 [S10DISPLAY] Display (target) l_73 = 0.00%
4011-Section10.js:448 [S10DISPLAY] Display (target) l_74 = 0.00%
4011-Section10.js:448 [S10DISPLAY] Display (target) l_75 = 0.00%
4011-Section10.js:448 [S10DISPLAY] Display (target) l_76 = 0.00%
4011-Section10.js:448 [S10DISPLAY] Display (target) l_77 = 100.00%
4011-Section10.js:448 [S10DISPLAY] Display (target) l_78 = 0.00%
4011-Section10.js:448 [S10DISPLAY] Display (target) l_79 = 100.00%
4011-Section10.js:448 [S10DISPLAY] Display (target) e_80 = 110,698.29
4011-Section10.js:448 [S10DISPLAY] Display (target) e_81 = 110,698.29
4011-Section10.js:415 [S10DISPLAY] g_80 DEBUG: mode=target, valueToDisplay=0.4
4011-Section10.js:448 [S10DISPLAY] Display (target) g_80 = 40.00%
4011-Section10.js:448 [S10DISPLAY] Display (target) g_81 = 97.18%
4011-Section10.js:448 [S10DISPLAY] Display (target) i_80 = 44,279.32
4011-Section10.js:448 [S10DISPLAY] Display (target) i_81 = 107,577.48
4011-Section10.js:448 [S10DISPLAY] Display (target) i_82 = 66,418.98
4011-Section15.js:1750 [S15] 🎯 TGT S03 CLIMATE READ: h_23=18, d_23=-24, d_24=30, h_24=24
4011-StateManager.js:343 [StateManager] 🎯 h_10 setValue: "99.04017463973207" (state: calculated)
4011-StateManager.js:346 [StateManager] h_10 setValue stack trace:
setValue @ 4011-StateManager.js:346
calculateValues @ 4011-Section15.js:1832
calculateTargetModel @ 4011-Section15.js:1662
calculateAll @ 4011-Section15.js:1328
(anonymous) @ 4011-Section15.js:2121
(anonymous) @ 4011-StateManager.js:543
notifyListeners @ 4011-StateManager.js:541
setValue @ 4011-StateManager.js:419
(anonymous) @ 4011-Section13.js:3765
storeReferenceResults @ 4011-Section13.js:3757
calculateReferenceModel @ 4011-Section13.js:3504
calculateAll @ 4011-Section13.js:3402
calculateAndRefresh @ 4011-Section13.js:2368
(anonymous) @ 4011-StateManager.js:543
notifyListeners @ 4011-StateManager.js:541
setValue @ 4011-StateManager.js:419
setValue @ 4011-Section10.js:230
calculateSubtotals @ 4011-Section10.js:2251
calculateTargetModel @ 4011-Section10.js:1847
calculateAll @ 4011-Section10.js:1824
(anonymous) @ 4011-Section10.js:2670
(anonymous) @ 4011-StateManager.js:543
notifyListeners @ 4011-StateManager.js:541
setValue @ 4011-StateManager.js:419
setValue @ 4011-Section03.js:212
setFieldValue @ 4011-Section03.js:450
(anonymous) @ 4011-Section03.js:2213
(anonymous) @ 4011-StateManager.js:543
notifyListeners @ 4011-StateManager.js:541
setValue @ 4011-StateManager.js:419
(anonymous) @ 4011-Section03.js:1689
calculateTargetModel @ 4011-Section03.js:1686
calculateAll @ 4011-Section03.js:1665
(anonymous) @ 4011-Section03.js:2057
4011-Section15.js:1750 [S15] 🎯 TGT S03 CLIMATE READ: h_23=18, d_23=-24, d_24=30, h_24=24
4011-StateManager.js:343 [StateManager] 🎯 h_10 setValue: "99.04017463973207" (state: calculated)
4011-StateManager.js:346 [StateManager] h_10 setValue stack trace:
setValue @ 4011-StateManager.js:346
calculateValues @ 4011-Section15.js:1832
calculateTargetModel @ 4011-Section15.js:1662
calculateAll @ 4011-Section15.js:1328
(anonymous) @ 4011-Section15.js:2121
(anonymous) @ 4011-StateManager.js:543
notifyListeners @ 4011-StateManager.js:541
setValue @ 4011-StateManager.js:419
(anonymous) @ 4011-Section13.js:3765
storeReferenceResults @ 4011-Section13.js:3757
calculateReferenceModel @ 4011-Section13.js:3504
calculateAll @ 4011-Section13.js:3402
calculateAndRefresh @ 4011-Section13.js:2368
(anonymous) @ 4011-StateManager.js:543
notifyListeners @ 4011-StateManager.js:541
setValue @ 4011-StateManager.js:419
setValue @ 4011-Section10.js:230
calculateSubtotals @ 4011-Section10.js:2251
calculateTargetModel @ 4011-Section10.js:1847
calculateAll @ 4011-Section10.js:1824
(anonymous) @ 4011-Section10.js:2670
(anonymous) @ 4011-StateManager.js:543
notifyListeners @ 4011-StateManager.js:541
setValue @ 4011-StateManager.js:419
setValue @ 4011-Section03.js:212
setFieldValue @ 4011-Section03.js:450
(anonymous) @ 4011-Section03.js:2213
(anonymous) @ 4011-StateManager.js:543
notifyListeners @ 4011-StateManager.js:541
setValue @ 4011-StateManager.js:419
(anonymous) @ 4011-Section03.js:1689
calculateTargetModel @ 4011-Section03.js:1686
calculateAll @ 4011-Section03.js:1665
(anonymous) @ 4011-Section03.js:2057
4011-Section13.js:3773 [Section13] Reference results stored with ref_ prefix for downstream sections
4011-Section13.js:3776 [S13 DEBUG] Total Reference results stored: 34
4011-Section13.js:3515 [Section13] Reference Model calculations complete
4011-Section13.js:3403 [Section13] ✅ Reference Model complete
4011-Section13.js:3405 [Section13] 🔄 Starting Target Model calculations...
4011-Section13.js:721 🔍 [S13-CONTEXT] Creating target context: g_118="Volume by Schedule" from TargetState
4011-Section13.js:725 🔍 [S13-CONTEXT] TargetState.g_118="Volume by Schedule", ReferenceState.g_118="Volume Constant"
4011-Section13.js:3536 [Section13] Running Target Model calculations...
4011-Section13.js:2873 [S13] TGT HEATING: system=Heatpump, ted=147391.80728166597, afue=0.98, cop=3.663540445486518
4011-Section13.js:3099 🔍 [S13-VENT] calculateVentilationRates: ventMethod="Volume by Schedule", ach(l_118)=3, ratePerPerson(d_119)=14, volume(d_105)=8000
4011-Section13.js:3102 🔍 [S13-VENT] isReferenceCalculation=false, hasContext=true
4011-Section13.js:3110 🔍 [S13-VENT] calculateVentilationValues: ventMethod="Volume by Schedule", ach(l_118)=3, ratePerPerson(d_119)=14, volume(d_105)=8000
4011-Section13.js:3113 🔍 [S13-VENT] Supporting values: occupants(d_63)=126, occupiedHours(i_63)=4380, totalHours(j_63)=8760
4011-Section13.js:3145 ✅ [S13-VENT] Final d_120 result: 3333.333333333333 L/s (from method="Volume by Schedule", ach=3, volume=8000)
4011-Section13.js:2977 [Section13] 🧊 COOLING CALC: mode=TGT, coolingSystemType="Cooling", heatingType="Heatpump", isCoolingActive=true, coolingDemand=9766.063134946162
4011-Section15.js:1750 [S15] 🎯 TGT S03 CLIMATE READ: h_23=18, d_23=-24, d_24=30, h_24=24
4011-Section04.js:2482 [S04] S15 target electricity changed: d_136
4011-Section04.js:1577 [S04] Starting dual-engine Excel-compliant calculations
4011-Section04.js:1018 [S04] Row 32 Subtotals - F32: 132938, G32: 6779.838, J32: 141117.1198344896, K32: 7196.973111558969
4011-Section04.js:94 [S04] j_32 update: 141117.1198344896
4011-Section01.js:1250 [S01] j_32 listener: 141350.1372458256 → 141117.1198344896
4011-Section01.js:1251 [S01] 🕐 j_32 listener timing: StateManager current j_32 = 141117.1198344896
24011-Section05.js:266 🔄 [S05] updateCalculatedDisplayValues: mode=target
4011-Section15.js:1750 [S15] 🎯 TGT S03 CLIMATE READ: h_23=18, d_23=-24, d_24=30, h_24=24
4011-StateManager.js:343 [StateManager] 🎯 h_10 setValue: "98.87690571362779" (state: calculated)
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
calculateCoolingSystem @ 4011-Section13.js:3033
calculateTargetModel @ 4011-Section13.js:3563
calculateAll @ 4011-Section13.js:3406
calculateAndRefresh @ 4011-Section13.js:2368
(anonymous) @ 4011-StateManager.js:543
notifyListeners @ 4011-StateManager.js:541
setValue @ 4011-StateManager.js:419
setValue @ 4011-Section10.js:230
calculateSubtotals @ 4011-Section10.js:2251
calculateTargetModel @ 4011-Section10.js:1847
calculateAll @ 4011-Section10.js:1824
(anonymous) @ 4011-Section10.js:2670
(anonymous) @ 4011-StateManager.js:543
notifyListeners @ 4011-StateManager.js:541
setValue @ 4011-StateManager.js:419
setValue @ 4011-Section03.js:212
setFieldValue @ 4011-Section03.js:450
(anonymous) @ 4011-Section03.js:2213
(anonymous) @ 4011-StateManager.js:543
notifyListeners @ 4011-StateManager.js:541
setValue @ 4011-StateManager.js:419
(anonymous) @ 4011-Section03.js:1689
calculateTargetModel @ 4011-Section03.js:1686
calculateAll @ 4011-Section03.js:1665
(anonymous) @ 4011-Section03.js:2057
4011-Section15.js:1750 [S15] 🎯 TGT S03 CLIMATE READ: h_23=18, d_23=-24, d_24=30, h_24=24
4011-StateManager.js:343 [StateManager] 🎯 h_10 setValue: "98.87690571362779" (state: calculated)
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
calculateCoolingSystem @ 4011-Section13.js:3033
calculateTargetModel @ 4011-Section13.js:3563
calculateAll @ 4011-Section13.js:3406
calculateAndRefresh @ 4011-Section13.js:2368
(anonymous) @ 4011-StateManager.js:543
notifyListeners @ 4011-StateManager.js:541
setValue @ 4011-StateManager.js:419
setValue @ 4011-Section10.js:230
calculateSubtotals @ 4011-Section10.js:2251
calculateTargetModel @ 4011-Section10.js:1847
calculateAll @ 4011-Section10.js:1824
(anonymous) @ 4011-Section10.js:2670
(anonymous) @ 4011-StateManager.js:543
notifyListeners @ 4011-StateManager.js:541
setValue @ 4011-StateManager.js:419
setValue @ 4011-Section03.js:212
setFieldValue @ 4011-Section03.js:450
(anonymous) @ 4011-Section03.js:2213
(anonymous) @ 4011-StateManager.js:543
notifyListeners @ 4011-StateManager.js:541
setValue @ 4011-StateManager.js:419
(anonymous) @ 4011-Section03.js:1689
calculateTargetModel @ 4011-Section03.js:1686
calculateAll @ 4011-Section03.js:1665
(anonymous) @ 4011-Section03.js:2057
4011-Section15.js:1750 [S15] 🎯 TGT S03 CLIMATE READ: h_23=18, d_23=-24, d_24=30, h_24=24
4011-StateManager.js:343 [StateManager] 🎯 h_10 setValue: "98.87690571362779" (state: calculated)
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
calculateCoolingSystem @ 4011-Section13.js:3033
calculateTargetModel @ 4011-Section13.js:3563
calculateAll @ 4011-Section13.js:3406
calculateAndRefresh @ 4011-Section13.js:2368
(anonymous) @ 4011-StateManager.js:543
notifyListeners @ 4011-StateManager.js:541
setValue @ 4011-StateManager.js:419
setValue @ 4011-Section10.js:230
calculateSubtotals @ 4011-Section10.js:2251
calculateTargetModel @ 4011-Section10.js:1847
calculateAll @ 4011-Section10.js:1824
(anonymous) @ 4011-Section10.js:2670
(anonymous) @ 4011-StateManager.js:543
notifyListeners @ 4011-StateManager.js:541
setValue @ 4011-StateManager.js:419
setValue @ 4011-Section03.js:212
setFieldValue @ 4011-Section03.js:450
(anonymous) @ 4011-Section03.js:2213
(anonymous) @ 4011-StateManager.js:543
notifyListeners @ 4011-StateManager.js:541
setValue @ 4011-StateManager.js:419
(anonymous) @ 4011-Section03.js:1689
calculateTargetModel @ 4011-Section03.js:1686
calculateAll @ 4011-Section03.js:1665
(anonymous) @ 4011-Section03.js:2057
4011-Section15.js:1750 [S15] 🎯 TGT S03 CLIMATE READ: h_23=18, d_23=-24, d_24=30, h_24=24
4011-StateManager.js:343 [StateManager] 🎯 h_10 setValue: "98.87690571362779" (state: calculated)
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
calculateCoolingSystem @ 4011-Section13.js:3033
calculateTargetModel @ 4011-Section13.js:3563
calculateAll @ 4011-Section13.js:3406
calculateAndRefresh @ 4011-Section13.js:2368
(anonymous) @ 4011-StateManager.js:543
notifyListeners @ 4011-StateManager.js:541
setValue @ 4011-StateManager.js:419
setValue @ 4011-Section10.js:230
calculateSubtotals @ 4011-Section10.js:2251
calculateTargetModel @ 4011-Section10.js:1847
calculateAll @ 4011-Section10.js:1824
(anonymous) @ 4011-Section10.js:2670
(anonymous) @ 4011-StateManager.js:543
notifyListeners @ 4011-StateManager.js:541
setValue @ 4011-StateManager.js:419
setValue @ 4011-Section03.js:212
setFieldValue @ 4011-Section03.js:450
(anonymous) @ 4011-Section03.js:2213
(anonymous) @ 4011-StateManager.js:543
notifyListeners @ 4011-StateManager.js:541
setValue @ 4011-StateManager.js:419
(anonymous) @ 4011-Section03.js:1689
calculateTargetModel @ 4011-Section03.js:1686
calculateAll @ 4011-Section03.js:1665
(anonymous) @ 4011-Section03.js:2057
4011-Section04.js:1018 [S04] Row 32 Subtotals - F32: 132938, G32: 6779.838, J32: 347966.051518286, K32: 17746.268627432586
4011-Section04.js:1668 [S04] Reference model calculations complete
4011-Section04.js:1674 [S04DB] storeReference: ref_j_32=347966.051518286, ref_k_32=17746.268627432586 | current target j_32=141117.1198344896, k_32=7196.973111558969
4011-Section04.js:493 [S04] 🔄 Updating calculated display values for target mode
4011-Section04.js:501 [S04DB] displayContext mode=target j_32=141117.1198344896 ref_j_32=347966.051518286 k_32=7196.973111558969 ref_k_32=17746.268627432586
4011-Section04.js:582 [S04 DEBUG] Target mode - j_32: 141117.1198344896
4011-Section04.js:582 [S04 DEBUG] Target mode - k_32: 7196.973111558969
4011-Section04.js:582 [S04 DEBUG] Target mode - l_27: 51
4011-Section04.js:617 [S04] Calculated display values updated for target mode
4011-Section04.js:1599 [S04] Dual-engine calculations completed successfully
4011-Section04.js:493 [S04] 🔄 Updating calculated display values for target mode
4011-Section04.js:501 [S04DB] displayContext mode=target j_32=141117.1198344896 ref_j_32=347966.051518286 k_32=7196.973111558969 ref_k_32=17746.268627432586
4011-Section04.js:582 [S04 DEBUG] Target mode - j_32: 141117.1198344896
4011-Section04.js:582 [S04 DEBUG] Target mode - k_32: 7196.973111558969
4011-Section04.js:582 [S04 DEBUG] Target mode - l_27: 51
4011-Section04.js:617 [S04] Calculated display values updated for target mode
4011-StateManager.js:343 [StateManager] 🎯 h_10 setValue: "98.87690571362779" (state: calculated)
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
calculateCoolingSystem @ 4011-Section13.js:3033
calculateTargetModel @ 4011-Section13.js:3563
calculateAll @ 4011-Section13.js:3406
calculateAndRefresh @ 4011-Section13.js:2368
(anonymous) @ 4011-StateManager.js:543
notifyListeners @ 4011-StateManager.js:541
setValue @ 4011-StateManager.js:419
setValue @ 4011-Section10.js:230
calculateSubtotals @ 4011-Section10.js:2251
calculateTargetModel @ 4011-Section10.js:1847
calculateAll @ 4011-Section10.js:1824
(anonymous) @ 4011-Section10.js:2670
(anonymous) @ 4011-StateManager.js:543
notifyListeners @ 4011-StateManager.js:541
setValue @ 4011-StateManager.js:419
setValue @ 4011-Section03.js:212
setFieldValue @ 4011-Section03.js:450
(anonymous) @ 4011-Section03.js:2213
(anonymous) @ 4011-StateManager.js:543
notifyListeners @ 4011-StateManager.js:541
setValue @ 4011-StateManager.js:419
(anonymous) @ 4011-Section03.js:1689
calculateTargetModel @ 4011-Section03.js:1686
calculateAll @ 4011-Section03.js:1665
(anonymous) @ 4011-Section03.js:2057
4011-Section15.js:1750 [S15] 🎯 TGT S03 CLIMATE READ: h_23=18, d_23=-24, d_24=30, h_24=24
4011-StateManager.js:343 [StateManager] 🎯 h_10 setValue: "98.87690571362779" (state: calculated)
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
calculateCoolingSystem @ 4011-Section13.js:3033
calculateTargetModel @ 4011-Section13.js:3563
calculateAll @ 4011-Section13.js:3406
calculateAndRefresh @ 4011-Section13.js:2368
(anonymous) @ 4011-StateManager.js:543
notifyListeners @ 4011-StateManager.js:541
setValue @ 4011-StateManager.js:419
setValue @ 4011-Section10.js:230
calculateSubtotals @ 4011-Section10.js:2251
calculateTargetModel @ 4011-Section10.js:1847
calculateAll @ 4011-Section10.js:1824
(anonymous) @ 4011-Section10.js:2670
(anonymous) @ 4011-StateManager.js:543
notifyListeners @ 4011-StateManager.js:541
setValue @ 4011-StateManager.js:419
setValue @ 4011-Section03.js:212
setFieldValue @ 4011-Section03.js:450
(anonymous) @ 4011-Section03.js:2213
(anonymous) @ 4011-StateManager.js:543
notifyListeners @ 4011-StateManager.js:541
setValue @ 4011-StateManager.js:419
(anonymous) @ 4011-Section03.js:1689
calculateTargetModel @ 4011-Section03.js:1686
calculateAll @ 4011-Section03.js:1665
(anonymous) @ 4011-Section03.js:2057
4011-Section13.js:3039 [Section13] 🧊 COOLING RESULTS: d_117=3666.572118886037, j_116=2.663540445486518, l_116=0, l_114=6099.491016060125
24011-Section14.js:1416 [S14 LISTENER] 🔥 d_122 changed - triggering calculateAll() + UI update
4011-Section15.js:1750 [S15] 🎯 TGT S03 CLIMATE READ: h_23=18, d_23=-24, d_24=30, h_24=24
4011-StateManager.js:343 [StateManager] 🎯 h_10 setValue: "98.87690571362779" (state: calculated)
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
calculateCoolingVentilation @ 4011-Section13.js:3275
calculateCoolingSystem @ 4011-Section13.js:3043
calculateTargetModel @ 4011-Section13.js:3563
calculateAll @ 4011-Section13.js:3406
calculateAndRefresh @ 4011-Section13.js:2368
(anonymous) @ 4011-StateManager.js:543
notifyListeners @ 4011-StateManager.js:541
setValue @ 4011-StateManager.js:419
setValue @ 4011-Section10.js:230
calculateSubtotals @ 4011-Section10.js:2251
calculateTargetModel @ 4011-Section10.js:1847
calculateAll @ 4011-Section10.js:1824
(anonymous) @ 4011-Section10.js:2670
(anonymous) @ 4011-StateManager.js:543
notifyListeners @ 4011-StateManager.js:541
setValue @ 4011-StateManager.js:419
setValue @ 4011-Section03.js:212
setFieldValue @ 4011-Section03.js:450
(anonymous) @ 4011-Section03.js:2213
(anonymous) @ 4011-StateManager.js:543
notifyListeners @ 4011-StateManager.js:541
setValue @ 4011-StateManager.js:419
(anonymous) @ 4011-Section03.js:1689
calculateTargetModel @ 4011-Section03.js:1686
calculateAll @ 4011-Section03.js:1665
(anonymous) @ 4011-Section03.js:2057
4011-Section15.js:1750 [S15] 🎯 TGT S03 CLIMATE READ: h_23=18, d_23=-24, d_24=30, h_24=24
4011-StateManager.js:343 [StateManager] 🎯 h_10 setValue: "98.87690571362779" (state: calculated)
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
calculateCoolingVentilation @ 4011-Section13.js:3275
calculateCoolingSystem @ 4011-Section13.js:3043
calculateTargetModel @ 4011-Section13.js:3563
calculateAll @ 4011-Section13.js:3406
calculateAndRefresh @ 4011-Section13.js:2368
(anonymous) @ 4011-StateManager.js:543
notifyListeners @ 4011-StateManager.js:541
setValue @ 4011-StateManager.js:419
setValue @ 4011-Section10.js:230
calculateSubtotals @ 4011-Section10.js:2251
calculateTargetModel @ 4011-Section10.js:1847
calculateAll @ 4011-Section10.js:1824
(anonymous) @ 4011-Section10.js:2670
(anonymous) @ 4011-StateManager.js:543
notifyListeners @ 4011-StateManager.js:541
setValue @ 4011-StateManager.js:419
setValue @ 4011-Section03.js:212
setFieldValue @ 4011-Section03.js:450
(anonymous) @ 4011-Section03.js:2213
(anonymous) @ 4011-StateManager.js:543
notifyListeners @ 4011-StateManager.js:541
setValue @ 4011-StateManager.js:419
(anonymous) @ 4011-Section03.js:1689
calculateTargetModel @ 4011-Section03.js:1686
calculateAll @ 4011-Section03.js:1665
(anonymous) @ 4011-Section03.js:2057
24011-Section14.js:1416 [S14 LISTENER] 🔥 d_122 changed - triggering calculateAll() + UI update
4011-Section15.js:1750 [S15] 🎯 TGT S03 CLIMATE READ: h_23=18, d_23=-24, d_24=30, h_24=24
4011-StateManager.js:343 [StateManager] 🎯 h_10 setValue: "98.87690571362779" (state: calculated)
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
updateTargetModelDOMValues @ 4011-Section13.js:3687
calculateTargetModel @ 4011-Section13.js:3573
calculateAll @ 4011-Section13.js:3406
calculateAndRefresh @ 4011-Section13.js:2368
(anonymous) @ 4011-StateManager.js:543
notifyListeners @ 4011-StateManager.js:541
setValue @ 4011-StateManager.js:419
setValue @ 4011-Section10.js:230
calculateSubtotals @ 4011-Section10.js:2251
calculateTargetModel @ 4011-Section10.js:1847
calculateAll @ 4011-Section10.js:1824
(anonymous) @ 4011-Section10.js:2670
(anonymous) @ 4011-StateManager.js:543
notifyListeners @ 4011-StateManager.js:541
setValue @ 4011-StateManager.js:419
setValue @ 4011-Section03.js:212
setFieldValue @ 4011-Section03.js:450
(anonymous) @ 4011-Section03.js:2213
(anonymous) @ 4011-StateManager.js:543
notifyListeners @ 4011-StateManager.js:541
setValue @ 4011-StateManager.js:419
(anonymous) @ 4011-Section03.js:1689
calculateTargetModel @ 4011-Section03.js:1686
calculateAll @ 4011-Section03.js:1665
(anonymous) @ 4011-Section03.js:2057
4011-Section15.js:1750 [S15] 🎯 TGT S03 CLIMATE READ: h_23=18, d_23=-24, d_24=30, h_24=24
4011-StateManager.js:343 [StateManager] 🎯 h_10 setValue: "98.87690571362779" (state: calculated)
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
updateTargetModelDOMValues @ 4011-Section13.js:3687
calculateTargetModel @ 4011-Section13.js:3573
calculateAll @ 4011-Section13.js:3406
calculateAndRefresh @ 4011-Section13.js:2368
(anonymous) @ 4011-StateManager.js:543
notifyListeners @ 4011-StateManager.js:541
setValue @ 4011-StateManager.js:419
setValue @ 4011-Section10.js:230
calculateSubtotals @ 4011-Section10.js:2251
calculateTargetModel @ 4011-Section10.js:1847
calculateAll @ 4011-Section10.js:1824
(anonymous) @ 4011-Section10.js:2670
(anonymous) @ 4011-StateManager.js:543
notifyListeners @ 4011-StateManager.js:541
setValue @ 4011-StateManager.js:419
setValue @ 4011-Section03.js:212
setFieldValue @ 4011-Section03.js:450
(anonymous) @ 4011-Section03.js:2213
(anonymous) @ 4011-StateManager.js:543
notifyListeners @ 4011-StateManager.js:541
setValue @ 4011-StateManager.js:419
(anonymous) @ 4011-Section03.js:1689
calculateTargetModel @ 4011-Section03.js:1686
calculateAll @ 4011-Section03.js:1665
(anonymous) @ 4011-Section03.js:2057
4011-Section13.js:3591 [Section13] Target Model calculations complete
4011-Section13.js:3407 [Section13] ✅ Target Model complete
4011-Section13.js:3434 [Section13] ⏭️ Skipping Reference value re-write - triggered in target mode
4011-Section13.js:3440 [Section13] 🎉 DUAL-ENGINE CALCULATIONS COMPLETE
4011-Section13.js:252 [Section13] 🔄 Updating calculated display values for target mode
4011-Section13.js:336 [Section13] Calculated display values updated for target mode
4011-Section10.js:2040 [S10REF] Utilization calc: ref_i_71=110562.1692, ref_i_79=10060.174319999998, totalGains=120622.34352
4011-Section10.js:2054 [S10REF] Using utilization method: NRC 40%
4011-Section10.js:2091 [S10REF] Final calc: utilizationFactor=0.4, usableGains=48248.937408
4011-Section10.js:2134 [S10REF] Complete: g_80=0.4, g_81=0.9966231765247549, i_80=48248.937408, i_81=120215.02315876257
4011-Section10.js:1827 [S10 DEBUG] Dual-engine calculations complete in target mode
4011-Section10.js:341 [S10DISPLAY] updateCalculatedDisplayValues() called in target mode
4011-Section10.js:448 [S10DISPLAY] Display (target) m_73 = 24.84
4011-Section10.js:448 [S10DISPLAY] Display (target) m_74 = 0.19
4011-Section10.js:448 [S10DISPLAY] Display (target) m_75 = 2.09
4011-Section10.js:448 [S10DISPLAY] Display (target) m_76 = 24.76
4011-Section10.js:448 [S10DISPLAY] Display (target) m_77 = 64.37
4011-Section10.js:448 [S10DISPLAY] Display (target) m_78 = 25.00
4011-Section10.js:448 [S10DISPLAY] Display (target) i_73 = 186.30
4011-Section10.js:448 [S10DISPLAY] Display (target) i_74 = 15.42
4011-Section10.js:448 [S10DISPLAY] Display (target) i_75 = 8.00
4011-Section10.js:448 [S10DISPLAY] Display (target) i_76 = 3,936.84
4011-Section10.js:448 [S10DISPLAY] Display (target) i_77 = 6,479.48
4011-Section10.js:448 [S10DISPLAY] Display (target) i_78 = 0.00
4011-Section10.js:448 [S10DISPLAY] Display (target) i_79 = 10,626.05
4011-Section10.js:448 [S10DISPLAY] Display (target) k_73 = 0.00
4011-Section10.js:448 [S10DISPLAY] Display (target) k_74 = 0.00
4011-Section10.js:448 [S10DISPLAY] Display (target) k_75 = 0.00
4011-Section10.js:448 [S10DISPLAY] Display (target) k_76 = 0.00
4011-Section10.js:448 [S10DISPLAY] Display (target) k_77 = 323.97
4011-Section10.js:448 [S10DISPLAY] Display (target) k_78 = 0.00
4011-Section10.js:448 [S10DISPLAY] Display (target) k_79 = 323.97
4011-Section10.js:448 [S10DISPLAY] Display (target) j_73 = 1.75%
4011-Section10.js:448 [S10DISPLAY] Display (target) j_74 = 0.15%
4011-Section10.js:448 [S10DISPLAY] Display (target) j_75 = 0.08%
4011-Section10.js:448 [S10DISPLAY] Display (target) j_76 = 37.05%
4011-Section10.js:448 [S10DISPLAY] Display (target) j_77 = 60.98%
4011-Section10.js:448 [S10DISPLAY] Display (target) j_78 = 0.00%
4011-Section10.js:448 [S10DISPLAY] Display (target) j_79 = 100.00%
4011-Section10.js:448 [S10DISPLAY] Display (target) l_73 = 0.00%
4011-Section10.js:448 [S10DISPLAY] Display (target) l_74 = 0.00%
4011-Section10.js:448 [S10DISPLAY] Display (target) l_75 = 0.00%
4011-Section10.js:448 [S10DISPLAY] Display (target) l_76 = 0.00%
4011-Section10.js:448 [S10DISPLAY] Display (target) l_77 = 100.00%
4011-Section10.js:448 [S10DISPLAY] Display (target) l_78 = 0.00%
4011-Section10.js:448 [S10DISPLAY] Display (target) l_79 = 100.00%
4011-Section10.js:448 [S10DISPLAY] Display (target) e_80 = 110,698.29
4011-Section10.js:448 [S10DISPLAY] Display (target) e_81 = 110,698.29
4011-Section10.js:415 [S10DISPLAY] g_80 DEBUG: mode=target, valueToDisplay=0.4
4011-Section10.js:448 [S10DISPLAY] Display (target) g_80 = 40.00%
4011-Section10.js:448 [S10DISPLAY] Display (target) g_81 = 97.18%
4011-Section10.js:448 [S10DISPLAY] Display (target) i_80 = 44,279.32
4011-Section10.js:448 [S10DISPLAY] Display (target) i_81 = 107,577.48
4011-Section10.js:448 [S10DISPLAY] Display (target) i_82 = 66,418.98
4011-Section15.js:1750 [S15] 🎯 TGT S03 CLIMATE READ: h_23=18, d_23=-24, d_24=30, h_24=24
4011-StateManager.js:343 [StateManager] 🎯 h_10 setValue: "98.87690571362779" (state: calculated)
4011-StateManager.js:346 [StateManager] h_10 setValue stack trace:
setValue @ 4011-StateManager.js:346
calculateValues @ 4011-Section15.js:1832
calculateTargetModel @ 4011-Section15.js:1662
calculateAll @ 4011-Section15.js:1328
(anonymous) @ 4011-Section15.js:2121
(anonymous) @ 4011-StateManager.js:543
notifyListeners @ 4011-StateManager.js:541
setValue @ 4011-StateManager.js:419
setValue @ 4011-Section03.js:212
setFieldValue @ 4011-Section03.js:450
(anonymous) @ 4011-Section03.js:2213
(anonymous) @ 4011-StateManager.js:543
notifyListeners @ 4011-StateManager.js:541
setValue @ 4011-StateManager.js:419
(anonymous) @ 4011-Section03.js:1689
calculateTargetModel @ 4011-Section03.js:1686
calculateAll @ 4011-Section03.js:1665
(anonymous) @ 4011-Section03.js:2057
4011-Section15.js:1750 [S15] 🎯 TGT S03 CLIMATE READ: h_23=18, d_23=-24, d_24=30, h_24=24
4011-StateManager.js:343 [StateManager] 🎯 h_10 setValue: "98.87690571362779" (state: calculated)
4011-StateManager.js:346 [StateManager] h_10 setValue stack trace:
setValue @ 4011-StateManager.js:346
calculateValues @ 4011-Section15.js:1832
calculateTargetModel @ 4011-Section15.js:1662
calculateAll @ 4011-Section15.js:1328
(anonymous) @ 4011-Section15.js:2121
(anonymous) @ 4011-StateManager.js:543
notifyListeners @ 4011-StateManager.js:541
setValue @ 4011-StateManager.js:419
setValue @ 4011-Section03.js:212
setFieldValue @ 4011-Section03.js:450
(anonymous) @ 4011-Section03.js:2213
(anonymous) @ 4011-StateManager.js:543
notifyListeners @ 4011-StateManager.js:541
setValue @ 4011-StateManager.js:419
(anonymous) @ 4011-Section03.js:1689
calculateTargetModel @ 4011-Section03.js:1686
calculateAll @ 4011-Section03.js:1665
(anonymous) @ 4011-Section03.js:2057
4011-Section10.js:1819 [S10 DEBUG] calculateAll() triggered in target mode - running both engines
4011-Section10.js:2040 [S10REF] Utilization calc: ref_i_71=110562.1692, ref_i_79=10060.174319999998, totalGains=120622.34352
4011-Section10.js:2054 [S10REF] Using utilization method: NRC 40%
4011-Section10.js:2091 [S10REF] Final calc: utilizationFactor=0.4, usableGains=48248.937408
4011-Section10.js:2134 [S10REF] Complete: g_80=0.4, g_81=0.9966231765247549, i_80=48248.937408, i_81=120215.02315876257
4011-Section10.js:1827 [S10 DEBUG] Dual-engine calculations complete in target mode
4011-Section10.js:1819 [S10 DEBUG] calculateAll() triggered in target mode - running both engines
4011-Section10.js:2040 [S10REF] Utilization calc: ref_i_71=110562.1692, ref_i_79=10060.174319999998, totalGains=120622.34352
4011-Section10.js:2054 [S10REF] Using utilization method: NRC 40%
4011-Section10.js:2091 [S10REF] Final calc: utilizationFactor=0.4, usableGains=48248.937408
4011-Section10.js:2134 [S10REF] Complete: g_80=0.4, g_81=0.9966231765247549, i_80=48248.937408, i_81=120215.02315876257
4011-Section10.js:1827 [S10 DEBUG] Dual-engine calculations complete in target mode
4011-Clock.js:146 [CLOCK] 🎯 User interaction started - timing to h_10 settlement
4011-Clock.js:146 [CLOCK] 🎯 User interaction started - timing to h_10 settlement
4011-Clock.js:146 [CLOCK] 🎯 User interaction started - timing to h_10 settlement
4011-Clock.js:146 [CLOCK] 🎯 User interaction started - timing to h_10 settlement
4011-Clock.js:146 [CLOCK] 🎯 User interaction started - timing to h_10 settlement
4011-Section11.js:1687 [S11] calculateAll TRIGGERED. isReferenceMode: false
4011-Section11.js:1132 [S11] 🔵 REF CLIMATE READ: d_20=4600
4011-Section11.js:1136 [S11] 🔵 REF CLIMATE READ: d_21=196
4011-Section11.js:1132 [S11] 🔵 REF CLIMATE READ: d_20=4600
4011-Section11.js:1136 [S11] 🔵 REF CLIMATE READ: d_21=196
4011-Section11.js:1132 [S11] 🔵 REF CLIMATE READ: d_20=4600
4011-Section11.js:1136 [S11] 🔵 REF CLIMATE READ: d_21=196
4011-Section11.js:1132 [S11] 🔵 REF CLIMATE READ: d_20=4600
4011-Section11.js:1136 [S11] 🔵 REF CLIMATE READ: d_21=196
4011-Section11.js:1132 [S11] 🔵 REF CLIMATE READ: d_20=4600
4011-Section11.js:1136 [S11] 🔵 REF CLIMATE READ: d_21=196
4011-Section11.js:1132 [S11] 🔵 REF CLIMATE READ: d_20=4600
4011-Section11.js:1136 [S11] 🔵 REF CLIMATE READ: d_21=196
4011-Section11.js:1132 [S11] 🔵 REF CLIMATE READ: d_20=4600
4011-Section11.js:1136 [S11] 🔵 REF CLIMATE READ: d_21=196
4011-Section11.js:1132 [S11] 🔵 REF CLIMATE READ: d_20=4600
4011-Section11.js:1136 [S11] 🔵 REF CLIMATE READ: d_21=196
4011-Section11.js:1132 [S11] 🔵 REF CLIMATE READ: d_20=4600
4011-Section11.js:1136 [S11] 🔵 REF CLIMATE READ: d_21=196
4011-Section11.js:1166 [S11] 🔵 REF CLIMATE READ: d_22=1960
4011-Section11.js:1184 [S11] 🔵 REF CLIMATE READ: h_22=-1680
4011-Section11.js:1166 [S11] 🔵 REF CLIMATE READ: d_22=1960
4011-Section11.js:1184 [S11] 🔵 REF CLIMATE READ: h_22=-1680
4011-Section11.js:1256 [S11] REF TB%=50% → ref_i_97=59532.29, ref_k_97=-947.70
4011-Section11.js:1434 [S11] Writing ref penalty: ref_i_97=59532.29, ref_k_97=-947.70
4011-Section11.js:1145 [S11] 🎯 TGT CLIMATE READ: d_20=7100
4011-Section11.js:1149 [S11] 🎯 TGT CLIMATE READ: d_21=196
4011-Section11.js:1145 [S11] 🎯 TGT CLIMATE READ: d_20=7100
4011-Section11.js:1149 [S11] 🎯 TGT CLIMATE READ: d_21=196
4011-Section11.js:1145 [S11] 🎯 TGT CLIMATE READ: d_20=7100
4011-Section11.js:1149 [S11] 🎯 TGT CLIMATE READ: d_21=196
4011-Section11.js:1145 [S11] 🎯 TGT CLIMATE READ: d_20=7100
4011-Section11.js:1149 [S11] 🎯 TGT CLIMATE READ: d_21=196
4011-Section11.js:1145 [S11] 🎯 TGT CLIMATE READ: d_20=7100
4011-Section11.js:1149 [S11] 🎯 TGT CLIMATE READ: d_21=196
4011-Section11.js:1145 [S11] 🎯 TGT CLIMATE READ: d_20=7100
4011-Section11.js:1149 [S11] 🎯 TGT CLIMATE READ: d_21=196
4011-Section11.js:1145 [S11] 🎯 TGT CLIMATE READ: d_20=7100
4011-Section11.js:1149 [S11] 🎯 TGT CLIMATE READ: d_21=196
4011-Section11.js:1145 [S11] 🎯 TGT CLIMATE READ: d_20=7100
4011-Section11.js:1149 [S11] 🎯 TGT CLIMATE READ: d_21=196
4011-Section11.js:1145 [S11] 🎯 TGT CLIMATE READ: d_20=7100
4011-Section11.js:1149 [S11] 🎯 TGT CLIMATE READ: d_21=196
24011-Section11.js:1189 [S11] 🎯 TGT CLIMATE READ: h_22=-1680
4011-Section10.js:2667 S10: Target listener triggered by i_97, recalculating all.
4011-Section10.js:1819 [S10 DEBUG] calculateAll() triggered in target mode - running both engines
4011-Section10.js:2040 [S10REF] Utilization calc: ref_i_71=110562.1692, ref_i_79=10060.174319999998, totalGains=120622.34352
4011-Section10.js:2054 [S10REF] Using utilization method: NRC 40%
4011-Section10.js:2091 [S10REF] Final calc: utilizationFactor=0.4, usableGains=48248.937408
4011-Section10.js:2134 [S10REF] Complete: g_80=0.4, g_81=0.9966231765247549, i_80=48248.937408, i_81=120215.02315876257
4011-Section10.js:1827 [S10 DEBUG] Dual-engine calculations complete in target mode
4011-Section10.js:341 [S10DISPLAY] updateCalculatedDisplayValues() called in target mode
4011-Section10.js:448 [S10DISPLAY] Display (target) m_73 = 24.84
4011-Section10.js:448 [S10DISPLAY] Display (target) m_74 = 0.19
4011-Section10.js:448 [S10DISPLAY] Display (target) m_75 = 2.09
4011-Section10.js:448 [S10DISPLAY] Display (target) m_76 = 24.76
4011-Section10.js:448 [S10DISPLAY] Display (target) m_77 = 64.37
4011-Section10.js:448 [S10DISPLAY] Display (target) m_78 = 25.00
4011-Section10.js:448 [S10DISPLAY] Display (target) i_73 = 186.30
4011-Section10.js:448 [S10DISPLAY] Display (target) i_74 = 15.42
4011-Section10.js:448 [S10DISPLAY] Display (target) i_75 = 8.00
4011-Section10.js:448 [S10DISPLAY] Display (target) i_76 = 3,936.84
4011-Section10.js:448 [S10DISPLAY] Display (target) i_77 = 6,479.48
4011-Section10.js:448 [S10DISPLAY] Display (target) i_78 = 0.00
4011-Section10.js:448 [S10DISPLAY] Display (target) i_79 = 10,626.05
4011-Section10.js:448 [S10DISPLAY] Display (target) k_73 = 0.00
4011-Section10.js:448 [S10DISPLAY] Display (target) k_74 = 0.00
4011-Section10.js:448 [S10DISPLAY] Display (target) k_75 = 0.00
4011-Section10.js:448 [S10DISPLAY] Display (target) k_76 = 0.00
4011-Section10.js:448 [S10DISPLAY] Display (target) k_77 = 323.97
4011-Section10.js:448 [S10DISPLAY] Display (target) k_78 = 0.00
4011-Section10.js:448 [S10DISPLAY] Display (target) k_79 = 323.97
4011-Section10.js:448 [S10DISPLAY] Display (target) j_73 = 1.75%
4011-Section10.js:448 [S10DISPLAY] Display (target) j_74 = 0.15%
4011-Section10.js:448 [S10DISPLAY] Display (target) j_75 = 0.08%
4011-Section10.js:448 [S10DISPLAY] Display (target) j_76 = 37.05%
4011-Section10.js:448 [S10DISPLAY] Display (target) j_77 = 60.98%
4011-Section10.js:448 [S10DISPLAY] Display (target) j_78 = 0.00%
4011-Section10.js:448 [S10DISPLAY] Display (target) j_79 = 100.00%
4011-Section10.js:448 [S10DISPLAY] Display (target) l_73 = 0.00%
4011-Section10.js:448 [S10DISPLAY] Display (target) l_74 = 0.00%
4011-Section10.js:448 [S10DISPLAY] Display (target) l_75 = 0.00%
4011-Section10.js:448 [S10DISPLAY] Display (target) l_76 = 0.00%
4011-Section10.js:448 [S10DISPLAY] Display (target) l_77 = 100.00%
4011-Section10.js:448 [S10DISPLAY] Display (target) l_78 = 0.00%
4011-Section10.js:448 [S10DISPLAY] Display (target) l_79 = 100.00%
4011-Section10.js:448 [S10DISPLAY] Display (target) e_80 = 110,698.29
4011-Section10.js:448 [S10DISPLAY] Display (target) e_81 = 110,698.29
4011-Section10.js:415 [S10DISPLAY] g_80 DEBUG: mode=target, valueToDisplay=0.4
4011-Section10.js:448 [S10DISPLAY] Display (target) g_80 = 40.00%
4011-Section10.js:448 [S10DISPLAY] Display (target) g_81 = 97.54%
4011-Section10.js:448 [S10DISPLAY] Display (target) i_80 = 44,279.32
4011-Section10.js:448 [S10DISPLAY] Display (target) i_81 = 107,978.76
4011-Section10.js:448 [S10DISPLAY] Display (target) i_82 = 66,418.98
4011-Section10.js:2688 S10: Target utilization factor dependency i_97 changed.
4011-Section10.js:341 [S10DISPLAY] updateCalculatedDisplayValues() called in target mode
4011-Section10.js:448 [S10DISPLAY] Display (target) m_73 = 24.84
4011-Section10.js:448 [S10DISPLAY] Display (target) m_74 = 0.19
4011-Section10.js:448 [S10DISPLAY] Display (target) m_75 = 2.09
4011-Section10.js:448 [S10DISPLAY] Display (target) m_76 = 24.76
4011-Section10.js:448 [S10DISPLAY] Display (target) m_77 = 64.37
4011-Section10.js:448 [S10DISPLAY] Display (target) m_78 = 25.00
4011-Section10.js:448 [S10DISPLAY] Display (target) i_73 = 186.30
4011-Section10.js:448 [S10DISPLAY] Display (target) i_74 = 15.42
4011-Section10.js:448 [S10DISPLAY] Display (target) i_75 = 8.00
4011-Section10.js:448 [S10DISPLAY] Display (target) i_76 = 3,936.84
4011-Section10.js:448 [S10DISPLAY] Display (target) i_77 = 6,479.48
4011-Section10.js:448 [S10DISPLAY] Display (target) i_78 = 0.00
4011-Section10.js:448 [S10DISPLAY] Display (target) i_79 = 10,626.05
4011-Section10.js:448 [S10DISPLAY] Display (target) k_73 = 0.00
4011-Section10.js:448 [S10DISPLAY] Display (target) k_74 = 0.00
4011-Section10.js:448 [S10DISPLAY] Display (target) k_75 = 0.00
4011-Section10.js:448 [S10DISPLAY] Display (target) k_76 = 0.00
4011-Section10.js:448 [S10DISPLAY] Display (target) k_77 = 323.97
4011-Section10.js:448 [S10DISPLAY] Display (target) k_78 = 0.00
4011-Section10.js:448 [S10DISPLAY] Display (target) k_79 = 323.97
4011-Section10.js:448 [S10DISPLAY] Display (target) j_73 = 1.75%
4011-Section10.js:448 [S10DISPLAY] Display (target) j_74 = 0.15%
4011-Section10.js:448 [S10DISPLAY] Display (target) j_75 = 0.08%
4011-Section10.js:448 [S10DISPLAY] Display (target) j_76 = 37.05%
4011-Section10.js:448 [S10DISPLAY] Display (target) j_77 = 60.98%
4011-Section10.js:448 [S10DISPLAY] Display (target) j_78 = 0.00%
4011-Section10.js:448 [S10DISPLAY] Display (target) j_79 = 100.00%
4011-Section10.js:448 [S10DISPLAY] Display (target) l_73 = 0.00%
4011-Section10.js:448 [S10DISPLAY] Display (target) l_74 = 0.00%
4011-Section10.js:448 [S10DISPLAY] Display (target) l_75 = 0.00%
4011-Section10.js:448 [S10DISPLAY] Display (target) l_76 = 0.00%
4011-Section10.js:448 [S10DISPLAY] Display (target) l_77 = 100.00%
4011-Section10.js:448 [S10DISPLAY] Display (target) l_78 = 0.00%
4011-Section10.js:448 [S10DISPLAY] Display (target) l_79 = 100.00%
4011-Section10.js:448 [S10DISPLAY] Display (target) e_80 = 110,698.29
4011-Section10.js:448 [S10DISPLAY] Display (target) e_81 = 110,698.29
4011-Section10.js:415 [S10DISPLAY] g_80 DEBUG: mode=target, valueToDisplay=0.4
4011-Section10.js:448 [S10DISPLAY] Display (target) g_80 = 40.00%
4011-Section10.js:448 [S10DISPLAY] Display (target) g_81 = 97.54%
4011-Section10.js:448 [S10DISPLAY] Display (target) i_80 = 44,279.32
4011-Section10.js:448 [S10DISPLAY] Display (target) i_81 = 107,978.76
4011-Section10.js:448 [S10DISPLAY] Display (target) i_82 = 66,418.98
4011-Section13.js:2395 [Section13] 📡 🔥 d_127 (TED) listener triggered - S14 energy demand changed!
4011-Section13.js:3389 [Section13] 🚀 CALCULATEALL TRIGGERED - Running dual-engine calculations...
4011-Section13.js:3395 [Section13] 🎯 Mode captured at calculation start: target
4011-Section13.js:3401 [Section13] 🔄 Starting Reference Model calculations...
4011-Section13.js:721 🔍 [S13-CONTEXT] Creating reference context: g_118="Volume Constant" from ReferenceState
4011-Section13.js:723 🔍 [S13-CONTEXT] ReferenceState.g_118="Volume Constant", TargetState.g_118="Volume by Schedule"
4011-Section13.js:3457 [Section13] Running Reference Model calculations...
4011-Section13.js:3471 [S13 CONTAMINATION DEBUG] calculateReferenceModel: Using system type = Electricity
4011-Section13.js:2873 [S13] REF HEATING: system=Electricity, ted=297371.1974742337, afue=0.9, cop=1
4011-Section13.js:2879 [S13 REF DEBUG] About to calculate with heating system: Electricity
4011-Section13.js:2882 [S13 REF DEBUG] Will S13 publish ref_d_113=Electricity?
4011-Section13.js:3099 🔍 [S13-VENT] calculateVentilationRates: ventMethod="Volume Constant", ach(l_118)=3.5, ratePerPerson(d_119)=8.33, volume(d_105)=8000
4011-Section13.js:3102 🔍 [S13-VENT] isReferenceCalculation=true, hasContext=true
4011-Section13.js:3110 🔍 [S13-VENT] calculateVentilationValues: ventMethod="Volume Constant", ach(l_118)=3.5, ratePerPerson(d_119)=8.33, volume(d_105)=8000
4011-Section13.js:3113 🔍 [S13-VENT] Supporting values: occupants(d_63)=126, occupiedHours(i_63)=4380, totalHours(j_63)=8760
4011-Section13.js:3133 🔍 [S13-VENT] Volume Constant calculation: ventRateLs = (3.5 * 8000) / 3.6 = 7777.777777777777
4011-Section13.js:3145 ✅ [S13-VENT] Final d_120 result: 7777.777777777777 L/s (from method="Volume Constant", ach=3.5, volume=8000)
4011-Section13.js:2977 [Section13] 🧊 COOLING CALC: mode=REF, coolingSystemType="No Cooling", heatingType="Electricity", isCoolingActive=false, coolingDemand=9766.063134946162
4011-Section13.js:3737 [S13 CONTAMINATION DEBUG] storeReferenceResults called during reference mode
4011-Section13.js:3740 [S13 CONTAMINATION DEBUG] Reference heating system: Electricity
4011-Section13.js:3743 [S13 CONTAMINATION DEBUG] Target heating system: Heatpump
4011-Section13.js:3746 [S13 CONTAMINATION DEBUG] Reference h_115 (gas volume): 0
4011-Section13.js:3749 [S13 CONTAMINATION DEBUG] Reference f_115 (oil volume): 0
4011-Section13.js:3761 [S13 CONTAMINATION DEBUG] Writing ref_f_115 = 0
4011-Section13.js:3761 [S13 CONTAMINATION DEBUG] Writing ref_h_115 = 0
4011-Section13.js:3773 [Section13] Reference results stored with ref_ prefix for downstream sections
4011-Section13.js:3776 [S13 DEBUG] Total Reference results stored: 34
4011-Section13.js:3515 [Section13] Reference Model calculations complete
4011-Section13.js:3403 [Section13] ✅ Reference Model complete
4011-Section13.js:3405 [Section13] 🔄 Starting Target Model calculations...
4011-Section13.js:721 🔍 [S13-CONTEXT] Creating target context: g_118="Volume by Schedule" from TargetState
4011-Section13.js:725 🔍 [S13-CONTEXT] TargetState.g_118="Volume by Schedule", ReferenceState.g_118="Volume Constant"
4011-Section13.js:3536 [Section13] Running Target Model calculations...
4011-Section13.js:2873 [S13] TGT HEATING: system=Heatpump, ted=154285.25770741113, afue=0.98, cop=3.663540445486518
4011-Section13.js:3099 🔍 [S13-VENT] calculateVentilationRates: ventMethod="Volume by Schedule", ach(l_118)=3, ratePerPerson(d_119)=14, volume(d_105)=8000
4011-Section13.js:3102 🔍 [S13-VENT] isReferenceCalculation=false, hasContext=true
4011-Section13.js:3110 🔍 [S13-VENT] calculateVentilationValues: ventMethod="Volume by Schedule", ach(l_118)=3, ratePerPerson(d_119)=14, volume(d_105)=8000
4011-Section13.js:3113 🔍 [S13-VENT] Supporting values: occupants(d_63)=126, occupiedHours(i_63)=4380, totalHours(j_63)=8760
4011-Section13.js:3145 ✅ [S13-VENT] Final d_120 result: 3333.333333333333 L/s (from method="Volume by Schedule", ach=3, volume=8000)
4011-Section13.js:2977 [Section13] 🧊 COOLING CALC: mode=TGT, coolingSystemType="Cooling", heatingType="Heatpump", isCoolingActive=true, coolingDemand=9766.063134946162
4011-Section13.js:3039 [Section13] 🧊 COOLING RESULTS: d_117=3666.572118886037, j_116=2.663540445486518, l_116=0, l_114=6099.491016060125
24011-Section14.js:1416 [S14 LISTENER] 🔥 d_122 changed - triggering calculateAll() + UI update
4011-Section15.js:1750 [S15] 🎯 TGT S03 CLIMATE READ: h_23=18, d_23=-24, d_24=30, h_24=24
4011-StateManager.js:343 [StateManager] 🎯 h_10 setValue: "98.87690571362779" (state: calculated)
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
calculateCoolingVentilation @ 4011-Section13.js:3275
calculateCoolingSystem @ 4011-Section13.js:3043
calculateTargetModel @ 4011-Section13.js:3563
calculateAll @ 4011-Section13.js:3406
calculateAndRefresh @ 4011-Section13.js:2368
(anonymous) @ 4011-Section13.js:2399
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
(anonymous) @ 4011-Section03.js:1689
calculateTargetModel @ 4011-Section03.js:1686
calculateAll @ 4011-Section03.js:1665
(anonymous) @ 4011-Section03.js:2057
4011-Section15.js:1750 [S15] 🎯 TGT S03 CLIMATE READ: h_23=18, d_23=-24, d_24=30, h_24=24
4011-StateManager.js:343 [StateManager] 🎯 h_10 setValue: "98.87690571362779" (state: calculated)
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
calculateCoolingVentilation @ 4011-Section13.js:3275
calculateCoolingSystem @ 4011-Section13.js:3043
calculateTargetModel @ 4011-Section13.js:3563
calculateAll @ 4011-Section13.js:3406
calculateAndRefresh @ 4011-Section13.js:2368
(anonymous) @ 4011-Section13.js:2399
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
(anonymous) @ 4011-Section03.js:1689
calculateTargetModel @ 4011-Section03.js:1686
calculateAll @ 4011-Section03.js:1665
(anonymous) @ 4011-Section03.js:2057
4011-Section15.js:1750 [S15] 🎯 TGT S03 CLIMATE READ: h_23=18, d_23=-24, d_24=30, h_24=24
4011-Section04.js:2482 [S04] S15 target electricity changed: d_136
4011-Section04.js:1577 [S04] Starting dual-engine Excel-compliant calculations
4011-Section04.js:1018 [S04] Row 32 Subtotals - F32: 132938, G32: 6779.838, J32: 142998.756062701, K32: 7292.936559197751
4011-Section04.js:94 [S04] j_32 update: 142998.756062701
4011-Section01.js:1250 [S01] j_32 listener: 141117.1198344896 → 142998.756062701
4011-Section01.js:1251 [S01] 🕐 j_32 listener timing: StateManager current j_32 = 142998.756062701
24011-Section05.js:266 🔄 [S05] updateCalculatedDisplayValues: mode=target
4011-Section15.js:1750 [S15] 🎯 TGT S03 CLIMATE READ: h_23=18, d_23=-24, d_24=30, h_24=24
4011-StateManager.js:343 [StateManager] 🎯 h_10 setValue: "100.19531674796875" (state: calculated)
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
updateTargetModelDOMValues @ 4011-Section13.js:3617
calculateTargetModel @ 4011-Section13.js:3573
calculateAll @ 4011-Section13.js:3406
calculateAndRefresh @ 4011-Section13.js:2368
(anonymous) @ 4011-Section13.js:2399
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
(anonymous) @ 4011-Section03.js:1689
calculateTargetModel @ 4011-Section03.js:1686
calculateAll @ 4011-Section03.js:1665
(anonymous) @ 4011-Section03.js:2057
4011-Section15.js:1750 [S15] 🎯 TGT S03 CLIMATE READ: h_23=18, d_23=-24, d_24=30, h_24=24
4011-StateManager.js:343 [StateManager] 🎯 h_10 setValue: "100.19531674796875" (state: calculated)
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
updateTargetModelDOMValues @ 4011-Section13.js:3617
calculateTargetModel @ 4011-Section13.js:3573
calculateAll @ 4011-Section13.js:3406
calculateAndRefresh @ 4011-Section13.js:2368
(anonymous) @ 4011-Section13.js:2399
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
(anonymous) @ 4011-Section03.js:1689
calculateTargetModel @ 4011-Section03.js:1686
calculateAll @ 4011-Section03.js:1665
(anonymous) @ 4011-Section03.js:2057
4011-Section15.js:1750 [S15] 🎯 TGT S03 CLIMATE READ: h_23=18, d_23=-24, d_24=30, h_24=24
4011-StateManager.js:343 [StateManager] 🎯 h_10 setValue: "100.19531674796875" (state: calculated)
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
updateTargetModelDOMValues @ 4011-Section13.js:3617
calculateTargetModel @ 4011-Section13.js:3573
calculateAll @ 4011-Section13.js:3406
calculateAndRefresh @ 4011-Section13.js:2368
(anonymous) @ 4011-Section13.js:2399
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
(anonymous) @ 4011-Section03.js:1689
calculateTargetModel @ 4011-Section03.js:1686
calculateAll @ 4011-Section03.js:1665
(anonymous) @ 4011-Section03.js:2057
4011-Section15.js:1750 [S15] 🎯 TGT S03 CLIMATE READ: h_23=18, d_23=-24, d_24=30, h_24=24
4011-StateManager.js:343 [StateManager] 🎯 h_10 setValue: "100.19531674796875" (state: calculated)
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
updateTargetModelDOMValues @ 4011-Section13.js:3617
calculateTargetModel @ 4011-Section13.js:3573
calculateAll @ 4011-Section13.js:3406
calculateAndRefresh @ 4011-Section13.js:2368
(anonymous) @ 4011-Section13.js:2399
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
(anonymous) @ 4011-Section03.js:1689
calculateTargetModel @ 4011-Section03.js:1686
calculateAll @ 4011-Section03.js:1665
(anonymous) @ 4011-Section03.js:2057
4011-Section04.js:1018 [S04] Row 32 Subtotals - F32: 132938, G32: 6779.838, J32: 347966.051518286, K32: 17746.268627432586
4011-Section04.js:1668 [S04] Reference model calculations complete
4011-Section04.js:1674 [S04DB] storeReference: ref_j_32=347966.051518286, ref_k_32=17746.268627432586 | current target j_32=142998.756062701, k_32=7292.936559197751
4011-Section04.js:493 [S04] 🔄 Updating calculated display values for target mode
4011-Section04.js:501 [S04DB] displayContext mode=target j_32=142998.756062701 ref_j_32=347966.051518286 k_32=7292.936559197751 ref_k_32=17746.268627432586
4011-Section04.js:582 [S04 DEBUG] Target mode - j_32: 142998.756062701
4011-Section04.js:582 [S04 DEBUG] Target mode - k_32: 7292.936559197751
4011-Section04.js:582 [S04 DEBUG] Target mode - l_27: 51
4011-Section04.js:617 [S04] Calculated display values updated for target mode
4011-Section04.js:1599 [S04] Dual-engine calculations completed successfully
4011-Section04.js:493 [S04] 🔄 Updating calculated display values for target mode
4011-Section04.js:501 [S04DB] displayContext mode=target j_32=142998.756062701 ref_j_32=347966.051518286 k_32=7292.936559197751 ref_k_32=17746.268627432586
4011-Section04.js:582 [S04 DEBUG] Target mode - j_32: 142998.756062701
4011-Section04.js:582 [S04 DEBUG] Target mode - k_32: 7292.936559197751
4011-Section04.js:582 [S04 DEBUG] Target mode - l_27: 51
4011-Section04.js:617 [S04] Calculated display values updated for target mode
4011-StateManager.js:343 [StateManager] 🎯 h_10 setValue: "100.19531674796875" (state: calculated)
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
updateTargetModelDOMValues @ 4011-Section13.js:3617
calculateTargetModel @ 4011-Section13.js:3573
calculateAll @ 4011-Section13.js:3406
calculateAndRefresh @ 4011-Section13.js:2368
(anonymous) @ 4011-Section13.js:2399
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
(anonymous) @ 4011-Section03.js:1689
calculateTargetModel @ 4011-Section03.js:1686
calculateAll @ 4011-Section03.js:1665
(anonymous) @ 4011-Section03.js:2057
4011-Section15.js:1750 [S15] 🎯 TGT S03 CLIMATE READ: h_23=18, d_23=-24, d_24=30, h_24=24
4011-StateManager.js:343 [StateManager] 🎯 h_10 setValue: "100.19531674796875" (state: calculated)
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
updateTargetModelDOMValues @ 4011-Section13.js:3617
calculateTargetModel @ 4011-Section13.js:3573
calculateAll @ 4011-Section13.js:3406
calculateAndRefresh @ 4011-Section13.js:2368
(anonymous) @ 4011-Section13.js:2399
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
(anonymous) @ 4011-Section03.js:1689
calculateTargetModel @ 4011-Section03.js:1686
calculateAll @ 4011-Section03.js:1665
(anonymous) @ 4011-Section03.js:2057
24011-Section14.js:1416 [S14 LISTENER] 🔥 d_122 changed - triggering calculateAll() + UI update
4011-Section15.js:1750 [S15] 🎯 TGT S03 CLIMATE READ: h_23=18, d_23=-24, d_24=30, h_24=24
4011-StateManager.js:343 [StateManager] 🎯 h_10 setValue: "100.19531674796875" (state: calculated)
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
updateTargetModelDOMValues @ 4011-Section13.js:3687
calculateTargetModel @ 4011-Section13.js:3573
calculateAll @ 4011-Section13.js:3406
calculateAndRefresh @ 4011-Section13.js:2368
(anonymous) @ 4011-Section13.js:2399
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
(anonymous) @ 4011-Section03.js:1689
calculateTargetModel @ 4011-Section03.js:1686
calculateAll @ 4011-Section03.js:1665
(anonymous) @ 4011-Section03.js:2057
4011-Section15.js:1750 [S15] 🎯 TGT S03 CLIMATE READ: h_23=18, d_23=-24, d_24=30, h_24=24
4011-StateManager.js:343 [StateManager] 🎯 h_10 setValue: "100.19531674796875" (state: calculated)
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
updateTargetModelDOMValues @ 4011-Section13.js:3687
calculateTargetModel @ 4011-Section13.js:3573
calculateAll @ 4011-Section13.js:3406
calculateAndRefresh @ 4011-Section13.js:2368
(anonymous) @ 4011-Section13.js:2399
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
(anonymous) @ 4011-Section03.js:1689
calculateTargetModel @ 4011-Section03.js:1686
calculateAll @ 4011-Section03.js:1665
(anonymous) @ 4011-Section03.js:2057
4011-Section13.js:3591 [Section13] Target Model calculations complete
4011-Section13.js:3407 [Section13] ✅ Target Model complete
4011-Section13.js:3434 [Section13] ⏭️ Skipping Reference value re-write - triggered in target mode
4011-Section13.js:3440 [Section13] 🎉 DUAL-ENGINE CALCULATIONS COMPLETE
4011-Section13.js:252 [Section13] 🔄 Updating calculated display values for target mode
4011-Section13.js:336 [Section13] Calculated display values updated for target mode
4011-Section13.js:2395 [Section13] 📡 🔥 d_127 (TED) listener triggered - S14 energy demand changed!
4011-Section13.js:3389 [Section13] 🚀 CALCULATEALL TRIGGERED - Running dual-engine calculations...
4011-Section13.js:3395 [Section13] 🎯 Mode captured at calculation start: target
4011-Section13.js:3401 [Section13] 🔄 Starting Reference Model calculations...
4011-Section13.js:721 🔍 [S13-CONTEXT] Creating reference context: g_118="Volume Constant" from ReferenceState
4011-Section13.js:723 🔍 [S13-CONTEXT] ReferenceState.g_118="Volume Constant", TargetState.g_118="Volume by Schedule"
4011-Section13.js:3457 [Section13] Running Reference Model calculations...
4011-Section13.js:3471 [S13 CONTAMINATION DEBUG] calculateReferenceModel: Using system type = Electricity
4011-Section13.js:2873 [S13] REF HEATING: system=Electricity, ted=297371.1974742337, afue=0.9, cop=1
4011-Section13.js:2879 [S13 REF DEBUG] About to calculate with heating system: Electricity
4011-Section13.js:2882 [S13 REF DEBUG] Will S13 publish ref_d_113=Electricity?
4011-Section13.js:3099 🔍 [S13-VENT] calculateVentilationRates: ventMethod="Volume Constant", ach(l_118)=3.5, ratePerPerson(d_119)=8.33, volume(d_105)=8000
4011-Section13.js:3102 🔍 [S13-VENT] isReferenceCalculation=true, hasContext=true
4011-Section13.js:3110 🔍 [S13-VENT] calculateVentilationValues: ventMethod="Volume Constant", ach(l_118)=3.5, ratePerPerson(d_119)=8.33, volume(d_105)=8000
4011-Section13.js:3113 🔍 [S13-VENT] Supporting values: occupants(d_63)=126, occupiedHours(i_63)=4380, totalHours(j_63)=8760
4011-Section13.js:3133 🔍 [S13-VENT] Volume Constant calculation: ventRateLs = (3.5 * 8000) / 3.6 = 7777.777777777777
4011-Section13.js:3145 ✅ [S13-VENT] Final d_120 result: 7777.777777777777 L/s (from method="Volume Constant", ach=3.5, volume=8000)
4011-Section13.js:2977 [Section13] 🧊 COOLING CALC: mode=REF, coolingSystemType="No Cooling", heatingType="Electricity", isCoolingActive=false, coolingDemand=9766.063134946162
4011-Section13.js:3737 [S13 CONTAMINATION DEBUG] storeReferenceResults called during reference mode
4011-Section13.js:3740 [S13 CONTAMINATION DEBUG] Reference heating system: Electricity
4011-Section13.js:3743 [S13 CONTAMINATION DEBUG] Target heating system: Heatpump
4011-Section13.js:3746 [S13 CONTAMINATION DEBUG] Reference h_115 (gas volume): 0
4011-Section13.js:3749 [S13 CONTAMINATION DEBUG] Reference f_115 (oil volume): 0
4011-Section13.js:3761 [S13 CONTAMINATION DEBUG] Writing ref_f_115 = 0
4011-Section13.js:3761 [S13 CONTAMINATION DEBUG] Writing ref_h_115 = 0
4011-Section13.js:3773 [Section13] Reference results stored with ref_ prefix for downstream sections
4011-Section13.js:3776 [S13 DEBUG] Total Reference results stored: 34
4011-Section13.js:3515 [Section13] Reference Model calculations complete
4011-Section13.js:3403 [Section13] ✅ Reference Model complete
4011-Section13.js:3405 [Section13] 🔄 Starting Target Model calculations...
4011-Section13.js:721 🔍 [S13-CONTEXT] Creating target context: g_118="Volume by Schedule" from TargetState
4011-Section13.js:725 🔍 [S13-CONTEXT] TargetState.g_118="Volume by Schedule", ReferenceState.g_118="Volume Constant"
4011-Section13.js:3536 [Section13] Running Target Model calculations...
4011-Section13.js:2873 [S13] TGT HEATING: system=Heatpump, ted=154285.25770741113, afue=0.98, cop=3.663540445486518
4011-Section13.js:3099 🔍 [S13-VENT] calculateVentilationRates: ventMethod="Volume by Schedule", ach(l_118)=3, ratePerPerson(d_119)=14, volume(d_105)=8000
4011-Section13.js:3102 🔍 [S13-VENT] isReferenceCalculation=false, hasContext=true
4011-Section13.js:3110 🔍 [S13-VENT] calculateVentilationValues: ventMethod="Volume by Schedule", ach(l_118)=3, ratePerPerson(d_119)=14, volume(d_105)=8000
4011-Section13.js:3113 🔍 [S13-VENT] Supporting values: occupants(d_63)=126, occupiedHours(i_63)=4380, totalHours(j_63)=8760
4011-Section13.js:3145 ✅ [S13-VENT] Final d_120 result: 3333.333333333333 L/s (from method="Volume by Schedule", ach=3, volume=8000)
4011-Section13.js:2977 [Section13] 🧊 COOLING CALC: mode=TGT, coolingSystemType="Cooling", heatingType="Heatpump", isCoolingActive=true, coolingDemand=9766.063134946162
4011-Section13.js:3039 [Section13] 🧊 COOLING RESULTS: d_117=3666.572118886037, j_116=2.663540445486518, l_116=0, l_114=6099.491016060125
24011-Section14.js:1416 [S14 LISTENER] 🔥 d_122 changed - triggering calculateAll() + UI update
4011-Section15.js:1750 [S15] 🎯 TGT S03 CLIMATE READ: h_23=18, d_23=-24, d_24=30, h_24=24
4011-StateManager.js:343 [StateManager] 🎯 h_10 setValue: "100.19531674796875" (state: calculated)
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
calculateCoolingVentilation @ 4011-Section13.js:3275
calculateCoolingSystem @ 4011-Section13.js:3043
calculateTargetModel @ 4011-Section13.js:3563
calculateAll @ 4011-Section13.js:3406
calculateAndRefresh @ 4011-Section13.js:2368
(anonymous) @ 4011-Section13.js:2399
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
(anonymous) @ 4011-Section03.js:1689
calculateTargetModel @ 4011-Section03.js:1686
calculateAll @ 4011-Section03.js:1665
(anonymous) @ 4011-Section03.js:2057
4011-Section15.js:1750 [S15] 🎯 TGT S03 CLIMATE READ: h_23=18, d_23=-24, d_24=30, h_24=24
4011-StateManager.js:343 [StateManager] 🎯 h_10 setValue: "100.19531674796875" (state: calculated)
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
calculateCoolingVentilation @ 4011-Section13.js:3275
calculateCoolingSystem @ 4011-Section13.js:3043
calculateTargetModel @ 4011-Section13.js:3563
calculateAll @ 4011-Section13.js:3406
calculateAndRefresh @ 4011-Section13.js:2368
(anonymous) @ 4011-Section13.js:2399
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
(anonymous) @ 4011-Section03.js:1689
calculateTargetModel @ 4011-Section03.js:1686
calculateAll @ 4011-Section03.js:1665
(anonymous) @ 4011-Section03.js:2057
24011-Section14.js:1416 [S14 LISTENER] 🔥 d_122 changed - triggering calculateAll() + UI update
4011-Section15.js:1750 [S15] 🎯 TGT S03 CLIMATE READ: h_23=18, d_23=-24, d_24=30, h_24=24
4011-StateManager.js:343 [StateManager] 🎯 h_10 setValue: "100.19531674796875" (state: calculated)
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
updateTargetModelDOMValues @ 4011-Section13.js:3687
calculateTargetModel @ 4011-Section13.js:3573
calculateAll @ 4011-Section13.js:3406
calculateAndRefresh @ 4011-Section13.js:2368
(anonymous) @ 4011-Section13.js:2399
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
(anonymous) @ 4011-Section03.js:1689
calculateTargetModel @ 4011-Section03.js:1686
calculateAll @ 4011-Section03.js:1665
(anonymous) @ 4011-Section03.js:2057
4011-Section15.js:1750 [S15] 🎯 TGT S03 CLIMATE READ: h_23=18, d_23=-24, d_24=30, h_24=24
4011-StateManager.js:343 [StateManager] 🎯 h_10 setValue: "100.19531674796875" (state: calculated)
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
updateTargetModelDOMValues @ 4011-Section13.js:3687
calculateTargetModel @ 4011-Section13.js:3573
calculateAll @ 4011-Section13.js:3406
calculateAndRefresh @ 4011-Section13.js:2368
(anonymous) @ 4011-Section13.js:2399
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
(anonymous) @ 4011-Section03.js:1689
calculateTargetModel @ 4011-Section03.js:1686
calculateAll @ 4011-Section03.js:1665
(anonymous) @ 4011-Section03.js:2057
4011-Section13.js:3591 [Section13] Target Model calculations complete
4011-Section13.js:3407 [Section13] ✅ Target Model complete
4011-Section13.js:3434 [Section13] ⏭️ Skipping Reference value re-write - triggered in target mode
4011-Section13.js:3440 [Section13] 🎉 DUAL-ENGINE CALCULATIONS COMPLETE
4011-Section13.js:252 [Section13] 🔄 Updating calculated display values for target mode
4011-Section13.js:336 [Section13] Calculated display values updated for target mode
4011-Section10.js:2667 S10: Target listener triggered by i_98, recalculating all.
4011-Section10.js:1819 [S10 DEBUG] calculateAll() triggered in target mode - running both engines
4011-Section10.js:2040 [S10REF] Utilization calc: ref_i_71=110562.1692, ref_i_79=10060.174319999998, totalGains=120622.34352
4011-Section10.js:2054 [S10REF] Using utilization method: NRC 40%
4011-Section10.js:2091 [S10REF] Final calc: utilizationFactor=0.4, usableGains=48248.937408
4011-Section10.js:2134 [S10REF] Complete: g_80=0.4, g_81=0.9966231765247549, i_80=48248.937408, i_81=120215.02315876257
4011-Section10.js:1827 [S10 DEBUG] Dual-engine calculations complete in target mode
4011-Section10.js:341 [S10DISPLAY] updateCalculatedDisplayValues() called in target mode
4011-Section10.js:448 [S10DISPLAY] Display (target) m_73 = 24.84
4011-Section10.js:448 [S10DISPLAY] Display (target) m_74 = 0.19
4011-Section10.js:448 [S10DISPLAY] Display (target) m_75 = 2.09
4011-Section10.js:448 [S10DISPLAY] Display (target) m_76 = 24.76
4011-Section10.js:448 [S10DISPLAY] Display (target) m_77 = 64.37
4011-Section10.js:448 [S10DISPLAY] Display (target) m_78 = 25.00
4011-Section10.js:448 [S10DISPLAY] Display (target) i_73 = 186.30
4011-Section10.js:448 [S10DISPLAY] Display (target) i_74 = 15.42
4011-Section10.js:448 [S10DISPLAY] Display (target) i_75 = 8.00
4011-Section10.js:448 [S10DISPLAY] Display (target) i_76 = 3,936.84
4011-Section10.js:448 [S10DISPLAY] Display (target) i_77 = 6,479.48
4011-Section10.js:448 [S10DISPLAY] Display (target) i_78 = 0.00
4011-Section10.js:448 [S10DISPLAY] Display (target) i_79 = 10,626.05
4011-Section10.js:448 [S10DISPLAY] Display (target) k_73 = 0.00
4011-Section10.js:448 [S10DISPLAY] Display (target) k_74 = 0.00
4011-Section10.js:448 [S10DISPLAY] Display (target) k_75 = 0.00
4011-Section10.js:448 [S10DISPLAY] Display (target) k_76 = 0.00
4011-Section10.js:448 [S10DISPLAY] Display (target) k_77 = 323.97
4011-Section10.js:448 [S10DISPLAY] Display (target) k_78 = 0.00
4011-Section10.js:448 [S10DISPLAY] Display (target) k_79 = 323.97
4011-Section10.js:448 [S10DISPLAY] Display (target) j_73 = 1.75%
4011-Section10.js:448 [S10DISPLAY] Display (target) j_74 = 0.15%
4011-Section10.js:448 [S10DISPLAY] Display (target) j_75 = 0.08%
4011-Section10.js:448 [S10DISPLAY] Display (target) j_76 = 37.05%
4011-Section10.js:448 [S10DISPLAY] Display (target) j_77 = 60.98%
4011-Section10.js:448 [S10DISPLAY] Display (target) j_78 = 0.00%
4011-Section10.js:448 [S10DISPLAY] Display (target) j_79 = 100.00%
4011-Section10.js:448 [S10DISPLAY] Display (target) l_73 = 0.00%
4011-Section10.js:448 [S10DISPLAY] Display (target) l_74 = 0.00%
4011-Section10.js:448 [S10DISPLAY] Display (target) l_75 = 0.00%
4011-Section10.js:448 [S10DISPLAY] Display (target) l_76 = 0.00%
4011-Section10.js:448 [S10DISPLAY] Display (target) l_77 = 100.00%
4011-Section10.js:448 [S10DISPLAY] Display (target) l_78 = 0.00%
4011-Section10.js:448 [S10DISPLAY] Display (target) l_79 = 100.00%
4011-Section10.js:448 [S10DISPLAY] Display (target) e_80 = 110,698.29
4011-Section10.js:448 [S10DISPLAY] Display (target) e_81 = 110,698.29
4011-Section10.js:415 [S10DISPLAY] g_80 DEBUG: mode=target, valueToDisplay=0.4
4011-Section10.js:448 [S10DISPLAY] Display (target) g_80 = 40.00%
4011-Section10.js:448 [S10DISPLAY] Display (target) g_81 = 98.72%
4011-Section10.js:448 [S10DISPLAY] Display (target) i_80 = 44,279.32
4011-Section10.js:448 [S10DISPLAY] Display (target) i_81 = 109,276.23
4011-Section10.js:448 [S10DISPLAY] Display (target) i_82 = 66,418.98
4011-Section10.js:2688 S10: Target utilization factor dependency i_98 changed.
4011-Section10.js:341 [S10DISPLAY] updateCalculatedDisplayValues() called in target mode
4011-Section10.js:448 [S10DISPLAY] Display (target) m_73 = 24.84
4011-Section10.js:448 [S10DISPLAY] Display (target) m_74 = 0.19
4011-Section10.js:448 [S10DISPLAY] Display (target) m_75 = 2.09
4011-Section10.js:448 [S10DISPLAY] Display (target) m_76 = 24.76
4011-Section10.js:448 [S10DISPLAY] Display (target) m_77 = 64.37
4011-Section10.js:448 [S10DISPLAY] Display (target) m_78 = 25.00
4011-Section10.js:448 [S10DISPLAY] Display (target) i_73 = 186.30
4011-Section10.js:448 [S10DISPLAY] Display (target) i_74 = 15.42
4011-Section10.js:448 [S10DISPLAY] Display (target) i_75 = 8.00
4011-Section10.js:448 [S10DISPLAY] Display (target) i_76 = 3,936.84
4011-Section10.js:448 [S10DISPLAY] Display (target) i_77 = 6,479.48
4011-Section10.js:448 [S10DISPLAY] Display (target) i_78 = 0.00
4011-Section10.js:448 [S10DISPLAY] Display (target) i_79 = 10,626.05
4011-Section10.js:448 [S10DISPLAY] Display (target) k_73 = 0.00
4011-Section10.js:448 [S10DISPLAY] Display (target) k_74 = 0.00
4011-Section10.js:448 [S10DISPLAY] Display (target) k_75 = 0.00
4011-Section10.js:448 [S10DISPLAY] Display (target) k_76 = 0.00
4011-Section10.js:448 [S10DISPLAY] Display (target) k_77 = 323.97
4011-Section10.js:448 [S10DISPLAY] Display (target) k_78 = 0.00
4011-Section10.js:448 [S10DISPLAY] Display (target) k_79 = 323.97
4011-Section10.js:448 [S10DISPLAY] Display (target) j_73 = 1.75%
4011-Section10.js:448 [S10DISPLAY] Display (target) j_74 = 0.15%
4011-Section10.js:448 [S10DISPLAY] Display (target) j_75 = 0.08%
4011-Section10.js:448 [S10DISPLAY] Display (target) j_76 = 37.05%
4011-Section10.js:448 [S10DISPLAY] Display (target) j_77 = 60.98%
4011-Section10.js:448 [S10DISPLAY] Display (target) j_78 = 0.00%
4011-Section10.js:448 [S10DISPLAY] Display (target) j_79 = 100.00%
4011-Section10.js:448 [S10DISPLAY] Display (target) l_73 = 0.00%
4011-Section10.js:448 [S10DISPLAY] Display (target) l_74 = 0.00%
4011-Section10.js:448 [S10DISPLAY] Display (target) l_75 = 0.00%
4011-Section10.js:448 [S10DISPLAY] Display (target) l_76 = 0.00%
4011-Section10.js:448 [S10DISPLAY] Display (target) l_77 = 100.00%
4011-Section10.js:448 [S10DISPLAY] Display (target) l_78 = 0.00%
4011-Section10.js:448 [S10DISPLAY] Display (target) l_79 = 100.00%
4011-Section10.js:448 [S10DISPLAY] Display (target) e_80 = 110,698.29
4011-Section10.js:448 [S10DISPLAY] Display (target) e_81 = 110,698.29
4011-Section10.js:415 [S10DISPLAY] g_80 DEBUG: mode=target, valueToDisplay=0.4
4011-Section10.js:448 [S10DISPLAY] Display (target) g_80 = 40.00%
4011-Section10.js:448 [S10DISPLAY] Display (target) g_81 = 98.72%
4011-Section10.js:448 [S10DISPLAY] Display (target) i_80 = 44,279.32
4011-Section10.js:448 [S10DISPLAY] Display (target) i_81 = 109,276.23
4011-Section10.js:448 [S10DISPLAY] Display (target) i_82 = 66,418.98
4011-Section13.js:2395 [Section13] 📡 🔥 d_127 (TED) listener triggered - S14 energy demand changed!
4011-Section13.js:3389 [Section13] 🚀 CALCULATEALL TRIGGERED - Running dual-engine calculations...
4011-Section13.js:3395 [Section13] 🎯 Mode captured at calculation start: target
4011-Section13.js:3401 [Section13] 🔄 Starting Reference Model calculations...
4011-Section13.js:721 🔍 [S13-CONTEXT] Creating reference context: g_118="Volume Constant" from ReferenceState
4011-Section13.js:723 🔍 [S13-CONTEXT] ReferenceState.g_118="Volume Constant", TargetState.g_118="Volume by Schedule"
4011-Section13.js:3457 [Section13] Running Reference Model calculations...
4011-Section13.js:3471 [S13 CONTAMINATION DEBUG] calculateReferenceModel: Using system type = Electricity
4011-Section13.js:2873 [S13] REF HEATING: system=Electricity, ted=297371.1974742337, afue=0.9, cop=1
4011-Section13.js:2879 [S13 REF DEBUG] About to calculate with heating system: Electricity
4011-Section13.js:2882 [S13 REF DEBUG] Will S13 publish ref_d_113=Electricity?
4011-Section13.js:3099 🔍 [S13-VENT] calculateVentilationRates: ventMethod="Volume Constant", ach(l_118)=3.5, ratePerPerson(d_119)=8.33, volume(d_105)=8000
4011-Section13.js:3102 🔍 [S13-VENT] isReferenceCalculation=true, hasContext=true
4011-Section13.js:3110 🔍 [S13-VENT] calculateVentilationValues: ventMethod="Volume Constant", ach(l_118)=3.5, ratePerPerson(d_119)=8.33, volume(d_105)=8000
4011-Section13.js:3113 🔍 [S13-VENT] Supporting values: occupants(d_63)=126, occupiedHours(i_63)=4380, totalHours(j_63)=8760
4011-Section13.js:3133 🔍 [S13-VENT] Volume Constant calculation: ventRateLs = (3.5 * 8000) / 3.6 = 7777.777777777777
4011-Section13.js:3145 ✅ [S13-VENT] Final d_120 result: 7777.777777777777 L/s (from method="Volume Constant", ach=3.5, volume=8000)
4011-Section13.js:2977 [Section13] 🧊 COOLING CALC: mode=REF, coolingSystemType="No Cooling", heatingType="Electricity", isCoolingActive=false, coolingDemand=10386.714434542262
4011-Section13.js:3737 [S13 CONTAMINATION DEBUG] storeReferenceResults called during reference mode
4011-Section13.js:3740 [S13 CONTAMINATION DEBUG] Reference heating system: Electricity
4011-Section13.js:3743 [S13 CONTAMINATION DEBUG] Target heating system: Heatpump
4011-Section13.js:3746 [S13 CONTAMINATION DEBUG] Reference h_115 (gas volume): 0
4011-Section13.js:3749 [S13 CONTAMINATION DEBUG] Reference f_115 (oil volume): 0
4011-Section13.js:3761 [S13 CONTAMINATION DEBUG] Writing ref_f_115 = 0
4011-Section13.js:3761 [S13 CONTAMINATION DEBUG] Writing ref_h_115 = 0
4011-Section13.js:3773 [Section13] Reference results stored with ref_ prefix for downstream sections
4011-Section13.js:3776 [S13 DEBUG] Total Reference results stored: 34
4011-Section13.js:3515 [Section13] Reference Model calculations complete
4011-Section13.js:3403 [Section13] ✅ Reference Model complete
4011-Section13.js:3405 [Section13] 🔄 Starting Target Model calculations...
4011-Section13.js:721 🔍 [S13-CONTEXT] Creating target context: g_118="Volume by Schedule" from TargetState
4011-Section13.js:725 🔍 [S13-CONTEXT] TargetState.g_118="Volume by Schedule", ReferenceState.g_118="Volume Constant"
4011-Section13.js:3536 [Section13] Running Target Model calculations...
4011-Section13.js:2873 [S13] TGT HEATING: system=Heatpump, ted=188752.50983613706, afue=0.98, cop=3.663540445486518
4011-Section13.js:3099 🔍 [S13-VENT] calculateVentilationRates: ventMethod="Volume by Schedule", ach(l_118)=3, ratePerPerson(d_119)=14, volume(d_105)=8000
4011-Section13.js:3102 🔍 [S13-VENT] isReferenceCalculation=false, hasContext=true
4011-Section13.js:3110 🔍 [S13-VENT] calculateVentilationValues: ventMethod="Volume by Schedule", ach(l_118)=3, ratePerPerson(d_119)=14, volume(d_105)=8000
4011-Section13.js:3113 🔍 [S13-VENT] Supporting values: occupants(d_63)=126, occupiedHours(i_63)=4380, totalHours(j_63)=8760
4011-Section13.js:3145 ✅ [S13-VENT] Final d_120 result: 3333.333333333333 L/s (from method="Volume by Schedule", ach=3, volume=8000)
4011-Section13.js:2977 [Section13] 🧊 COOLING CALC: mode=TGT, coolingSystemType="Cooling", heatingType="Heatpump", isCoolingActive=true, coolingDemand=10386.714434542262
4011-Section15.js:1750 [S15] 🎯 TGT S03 CLIMATE READ: h_23=18, d_23=-24, d_24=30, h_24=24
4011-Section04.js:2482 [S04] S15 target electricity changed: d_136
4011-Section04.js:1577 [S04] Starting dual-engine Excel-compliant calculations
4011-Section04.js:1018 [S04] Row 32 Subtotals - F32: 132938, G32: 6779.838, J32: 143231.773474037, K32: 7304.820447175887
4011-Section04.js:94 [S04] j_32 update: 143231.773474037
4011-Section01.js:1250 [S01] j_32 listener: 142998.756062701 → 143231.773474037
4011-Section01.js:1251 [S01] 🕐 j_32 listener timing: StateManager current j_32 = 143231.773474037
24011-Section05.js:266 🔄 [S05] updateCalculatedDisplayValues: mode=target
4011-Section15.js:1750 [S15] 🎯 TGT S03 CLIMATE READ: h_23=18, d_23=-24, d_24=30, h_24=24
4011-StateManager.js:343 [StateManager] 🎯 h_10 setValue: "100.35858567407301" (state: calculated)
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
calculateCoolingSystem @ 4011-Section13.js:3033
calculateTargetModel @ 4011-Section13.js:3563
calculateAll @ 4011-Section13.js:3406
calculateAndRefresh @ 4011-Section13.js:2368
(anonymous) @ 4011-Section13.js:2399
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
(anonymous) @ 4011-Section03.js:1689
calculateTargetModel @ 4011-Section03.js:1686
calculateAll @ 4011-Section03.js:1665
(anonymous) @ 4011-Section03.js:2057
4011-Section15.js:1750 [S15] 🎯 TGT S03 CLIMATE READ: h_23=18, d_23=-24, d_24=30, h_24=24
4011-StateManager.js:343 [StateManager] 🎯 h_10 setValue: "100.35858567407301" (state: calculated)
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
calculateCoolingSystem @ 4011-Section13.js:3033
calculateTargetModel @ 4011-Section13.js:3563
calculateAll @ 4011-Section13.js:3406
calculateAndRefresh @ 4011-Section13.js:2368
(anonymous) @ 4011-Section13.js:2399
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
(anonymous) @ 4011-Section03.js:1689
calculateTargetModel @ 4011-Section03.js:1686
calculateAll @ 4011-Section03.js:1665
(anonymous) @ 4011-Section03.js:2057
4011-Section15.js:1750 [S15] 🎯 TGT S03 CLIMATE READ: h_23=18, d_23=-24, d_24=30, h_24=24
4011-StateManager.js:343 [StateManager] 🎯 h_10 setValue: "100.35858567407301" (state: calculated)
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
calculateCoolingSystem @ 4011-Section13.js:3033
calculateTargetModel @ 4011-Section13.js:3563
calculateAll @ 4011-Section13.js:3406
calculateAndRefresh @ 4011-Section13.js:2368
(anonymous) @ 4011-Section13.js:2399
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
(anonymous) @ 4011-Section03.js:1689
calculateTargetModel @ 4011-Section03.js:1686
calculateAll @ 4011-Section03.js:1665
(anonymous) @ 4011-Section03.js:2057
4011-Section15.js:1750 [S15] 🎯 TGT S03 CLIMATE READ: h_23=18, d_23=-24, d_24=30, h_24=24
4011-StateManager.js:343 [StateManager] 🎯 h_10 setValue: "100.35858567407301" (state: calculated)
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
calculateCoolingSystem @ 4011-Section13.js:3033
calculateTargetModel @ 4011-Section13.js:3563
calculateAll @ 4011-Section13.js:3406
calculateAndRefresh @ 4011-Section13.js:2368
(anonymous) @ 4011-Section13.js:2399
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
(anonymous) @ 4011-Section03.js:1689
calculateTargetModel @ 4011-Section03.js:1686
calculateAll @ 4011-Section03.js:1665
(anonymous) @ 4011-Section03.js:2057
4011-Section04.js:1018 [S04] Row 32 Subtotals - F32: 132938, G32: 6779.838, J32: 347966.051518286, K32: 17746.268627432586
4011-Section04.js:1668 [S04] Reference model calculations complete
4011-Section04.js:1674 [S04DB] storeReference: ref_j_32=347966.051518286, ref_k_32=17746.268627432586 | current target j_32=143231.773474037, k_32=7304.820447175887
4011-Section04.js:493 [S04] 🔄 Updating calculated display values for target mode
4011-Section04.js:501 [S04DB] displayContext mode=target j_32=143231.773474037 ref_j_32=347966.051518286 k_32=7304.820447175887 ref_k_32=17746.268627432586
4011-Section04.js:582 [S04 DEBUG] Target mode - j_32: 143231.773474037
4011-Section04.js:582 [S04 DEBUG] Target mode - k_32: 7304.820447175887
4011-Section04.js:582 [S04 DEBUG] Target mode - l_27: 51
4011-Section04.js:617 [S04] Calculated display values updated for target mode
4011-Section04.js:1599 [S04] Dual-engine calculations completed successfully
4011-Section04.js:493 [S04] 🔄 Updating calculated display values for target mode
4011-Section04.js:501 [S04DB] displayContext mode=target j_32=143231.773474037 ref_j_32=347966.051518286 k_32=7304.820447175887 ref_k_32=17746.268627432586
4011-Section04.js:582 [S04 DEBUG] Target mode - j_32: 143231.773474037
4011-Section04.js:582 [S04 DEBUG] Target mode - k_32: 7304.820447175887
4011-Section04.js:582 [S04 DEBUG] Target mode - l_27: 51
4011-Section04.js:617 [S04] Calculated display values updated for target mode
4011-StateManager.js:343 [StateManager] 🎯 h_10 setValue: "100.35858567407301" (state: calculated)
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
calculateCoolingSystem @ 4011-Section13.js:3033
calculateTargetModel @ 4011-Section13.js:3563
calculateAll @ 4011-Section13.js:3406
calculateAndRefresh @ 4011-Section13.js:2368
(anonymous) @ 4011-Section13.js:2399
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
(anonymous) @ 4011-Section03.js:1689
calculateTargetModel @ 4011-Section03.js:1686
calculateAll @ 4011-Section03.js:1665
(anonymous) @ 4011-Section03.js:2057
4011-Section15.js:1750 [S15] 🎯 TGT S03 CLIMATE READ: h_23=18, d_23=-24, d_24=30, h_24=24
4011-StateManager.js:343 [StateManager] 🎯 h_10 setValue: "100.35858567407301" (state: calculated)
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
calculateCoolingSystem @ 4011-Section13.js:3033
calculateTargetModel @ 4011-Section13.js:3563
calculateAll @ 4011-Section13.js:3406
calculateAndRefresh @ 4011-Section13.js:2368
(anonymous) @ 4011-Section13.js:2399
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
(anonymous) @ 4011-Section03.js:1689
calculateTargetModel @ 4011-Section03.js:1686
calculateAll @ 4011-Section03.js:1665
(anonymous) @ 4011-Section03.js:2057
4011-Section13.js:3039 [Section13] 🧊 COOLING RESULTS: d_117=3899.589530222073, j_116=2.663540445486518, l_116=0, l_114=6487.124904320189
24011-Section14.js:1416 [S14 LISTENER] 🔥 d_122 changed - triggering calculateAll() + UI update
4011-Section15.js:1750 [S15] 🎯 TGT S03 CLIMATE READ: h_23=18, d_23=-24, d_24=30, h_24=24
4011-StateManager.js:343 [StateManager] 🎯 h_10 setValue: "100.35858567407301" (state: calculated)
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
calculateCoolingVentilation @ 4011-Section13.js:3275
calculateCoolingSystem @ 4011-Section13.js:3043
calculateTargetModel @ 4011-Section13.js:3563
calculateAll @ 4011-Section13.js:3406
calculateAndRefresh @ 4011-Section13.js:2368
(anonymous) @ 4011-Section13.js:2399
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
(anonymous) @ 4011-Section03.js:1689
calculateTargetModel @ 4011-Section03.js:1686
calculateAll @ 4011-Section03.js:1665
(anonymous) @ 4011-Section03.js:2057
4011-Section15.js:1750 [S15] 🎯 TGT S03 CLIMATE READ: h_23=18, d_23=-24, d_24=30, h_24=24
4011-StateManager.js:343 [StateManager] 🎯 h_10 setValue: "100.35858567407301" (state: calculated)
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
calculateCoolingVentilation @ 4011-Section13.js:3275
calculateCoolingSystem @ 4011-Section13.js:3043
calculateTargetModel @ 4011-Section13.js:3563
calculateAll @ 4011-Section13.js:3406
calculateAndRefresh @ 4011-Section13.js:2368
(anonymous) @ 4011-Section13.js:2399
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
(anonymous) @ 4011-Section03.js:1689
calculateTargetModel @ 4011-Section03.js:1686
calculateAll @ 4011-Section03.js:1665
(anonymous) @ 4011-Section03.js:2057
4011-Section15.js:1750 [S15] 🎯 TGT S03 CLIMATE READ: h_23=18, d_23=-24, d_24=30, h_24=24
4011-Section04.js:2482 [S04] S15 target electricity changed: d_136
4011-Section04.js:1577 [S04] Starting dual-engine Excel-compliant calculations
4011-Section04.js:1018 [S04] Row 32 Subtotals - F32: 132938, G32: 6779.838, J32: 152639.95461509406, K32: 7784.637685369797
4011-Section04.js:94 [S04] j_32 update: 152639.95461509406
4011-Section01.js:1250 [S01] j_32 listener: 143231.773474037 → 152639.95461509406
4011-Section01.js:1251 [S01] 🕐 j_32 listener timing: StateManager current j_32 = 152639.95461509406
24011-Section05.js:266 🔄 [S05] updateCalculatedDisplayValues: mode=target
4011-Section15.js:1750 [S15] 🎯 TGT S03 CLIMATE READ: h_23=18, d_23=-24, d_24=30, h_24=24
4011-StateManager.js:343 [StateManager] 🎯 h_10 setValue: "106.95064084577778" (state: calculated)
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
updateTargetModelDOMValues @ 4011-Section13.js:3617
calculateTargetModel @ 4011-Section13.js:3573
calculateAll @ 4011-Section13.js:3406
calculateAndRefresh @ 4011-Section13.js:2368
(anonymous) @ 4011-Section13.js:2399
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
(anonymous) @ 4011-Section03.js:1689
calculateTargetModel @ 4011-Section03.js:1686
calculateAll @ 4011-Section03.js:1665
(anonymous) @ 4011-Section03.js:2057
4011-Section15.js:1750 [S15] 🎯 TGT S03 CLIMATE READ: h_23=18, d_23=-24, d_24=30, h_24=24
4011-StateManager.js:343 [StateManager] 🎯 h_10 setValue: "106.95064084577778" (state: calculated)
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
updateTargetModelDOMValues @ 4011-Section13.js:3617
calculateTargetModel @ 4011-Section13.js:3573
calculateAll @ 4011-Section13.js:3406
calculateAndRefresh @ 4011-Section13.js:2368
(anonymous) @ 4011-Section13.js:2399
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
(anonymous) @ 4011-Section03.js:1689
calculateTargetModel @ 4011-Section03.js:1686
calculateAll @ 4011-Section03.js:1665
(anonymous) @ 4011-Section03.js:2057
4011-Section15.js:1750 [S15] 🎯 TGT S03 CLIMATE READ: h_23=18, d_23=-24, d_24=30, h_24=24
4011-StateManager.js:343 [StateManager] 🎯 h_10 setValue: "106.95064084577778" (state: calculated)
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
updateTargetModelDOMValues @ 4011-Section13.js:3617
calculateTargetModel @ 4011-Section13.js:3573
calculateAll @ 4011-Section13.js:3406
calculateAndRefresh @ 4011-Section13.js:2368
(anonymous) @ 4011-Section13.js:2399
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
(anonymous) @ 4011-Section03.js:1689
calculateTargetModel @ 4011-Section03.js:1686
calculateAll @ 4011-Section03.js:1665
(anonymous) @ 4011-Section03.js:2057
4011-Section15.js:1750 [S15] 🎯 TGT S03 CLIMATE READ: h_23=18, d_23=-24, d_24=30, h_24=24
4011-StateManager.js:343 [StateManager] 🎯 h_10 setValue: "106.95064084577778" (state: calculated)
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
updateTargetModelDOMValues @ 4011-Section13.js:3617
calculateTargetModel @ 4011-Section13.js:3573
calculateAll @ 4011-Section13.js:3406
calculateAndRefresh @ 4011-Section13.js:2368
(anonymous) @ 4011-Section13.js:2399
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
(anonymous) @ 4011-Section03.js:1689
calculateTargetModel @ 4011-Section03.js:1686
calculateAll @ 4011-Section03.js:1665
(anonymous) @ 4011-Section03.js:2057
4011-Section04.js:1018 [S04] Row 32 Subtotals - F32: 132938, G32: 6779.838, J32: 347966.051518286, K32: 17746.268627432586
4011-Section04.js:1668 [S04] Reference model calculations complete
4011-Section04.js:1674 [S04DB] storeReference: ref_j_32=347966.051518286, ref_k_32=17746.268627432586 | current target j_32=152639.95461509406, k_32=7784.637685369797
4011-Section04.js:493 [S04] 🔄 Updating calculated display values for target mode
4011-Section04.js:501 [S04DB] displayContext mode=target j_32=152639.95461509406 ref_j_32=347966.051518286 k_32=7784.637685369797 ref_k_32=17746.268627432586
4011-Section04.js:582 [S04 DEBUG] Target mode - j_32: 152639.95461509406
4011-Section04.js:582 [S04 DEBUG] Target mode - k_32: 7784.637685369797
4011-Section04.js:582 [S04 DEBUG] Target mode - l_27: 51
4011-Section04.js:617 [S04] Calculated display values updated for target mode
4011-Section04.js:1599 [S04] Dual-engine calculations completed successfully
4011-Section04.js:493 [S04] 🔄 Updating calculated display values for target mode
4011-Section04.js:501 [S04DB] displayContext mode=target j_32=152639.95461509406 ref_j_32=347966.051518286 k_32=7784.637685369797 ref_k_32=17746.268627432586
4011-Section04.js:582 [S04 DEBUG] Target mode - j_32: 152639.95461509406
4011-Section04.js:582 [S04 DEBUG] Target mode - k_32: 7784.637685369797
4011-Section04.js:582 [S04 DEBUG] Target mode - l_27: 51
4011-Section04.js:617 [S04] Calculated display values updated for target mode
4011-StateManager.js:343 [StateManager] 🎯 h_10 setValue: "106.95064084577778" (state: calculated)
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
updateTargetModelDOMValues @ 4011-Section13.js:3617
calculateTargetModel @ 4011-Section13.js:3573
calculateAll @ 4011-Section13.js:3406
calculateAndRefresh @ 4011-Section13.js:2368
(anonymous) @ 4011-Section13.js:2399
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
(anonymous) @ 4011-Section03.js:1689
calculateTargetModel @ 4011-Section03.js:1686
calculateAll @ 4011-Section03.js:1665
(anonymous) @ 4011-Section03.js:2057
4011-Section15.js:1750 [S15] 🎯 TGT S03 CLIMATE READ: h_23=18, d_23=-24, d_24=30, h_24=24
4011-StateManager.js:343 [StateManager] 🎯 h_10 setValue: "106.95064084577778" (state: calculated)
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
updateTargetModelDOMValues @ 4011-Section13.js:3617
calculateTargetModel @ 4011-Section13.js:3573
calculateAll @ 4011-Section13.js:3406
calculateAndRefresh @ 4011-Section13.js:2368
(anonymous) @ 4011-Section13.js:2399
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
(anonymous) @ 4011-Section03.js:1689
calculateTargetModel @ 4011-Section03.js:1686
calculateAll @ 4011-Section03.js:1665
(anonymous) @ 4011-Section03.js:2057
24011-Section14.js:1416 [S14 LISTENER] 🔥 d_122 changed - triggering calculateAll() + UI update
4011-Section15.js:1750 [S15] 🎯 TGT S03 CLIMATE READ: h_23=18, d_23=-24, d_24=30, h_24=24
4011-StateManager.js:343 [StateManager] 🎯 h_10 setValue: "106.95064084577778" (state: calculated)
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
updateTargetModelDOMValues @ 4011-Section13.js:3687
calculateTargetModel @ 4011-Section13.js:3573
calculateAll @ 4011-Section13.js:3406
calculateAndRefresh @ 4011-Section13.js:2368
(anonymous) @ 4011-Section13.js:2399
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
(anonymous) @ 4011-Section03.js:1689
calculateTargetModel @ 4011-Section03.js:1686
calculateAll @ 4011-Section03.js:1665
(anonymous) @ 4011-Section03.js:2057
4011-Section15.js:1750 [S15] 🎯 TGT S03 CLIMATE READ: h_23=18, d_23=-24, d_24=30, h_24=24
4011-StateManager.js:343 [StateManager] 🎯 h_10 setValue: "106.95064084577778" (state: calculated)
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
updateTargetModelDOMValues @ 4011-Section13.js:3687
calculateTargetModel @ 4011-Section13.js:3573
calculateAll @ 4011-Section13.js:3406
calculateAndRefresh @ 4011-Section13.js:2368
(anonymous) @ 4011-Section13.js:2399
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
(anonymous) @ 4011-Section03.js:1689
calculateTargetModel @ 4011-Section03.js:1686
calculateAll @ 4011-Section03.js:1665
(anonymous) @ 4011-Section03.js:2057
4011-Section13.js:3591 [Section13] Target Model calculations complete
4011-Section13.js:3407 [Section13] ✅ Target Model complete
4011-Section13.js:3434 [Section13] ⏭️ Skipping Reference value re-write - triggered in target mode
4011-Section13.js:3440 [Section13] 🎉 DUAL-ENGINE CALCULATIONS COMPLETE
4011-Section13.js:252 [Section13] 🔄 Updating calculated display values for target mode
4011-Section13.js:336 [Section13] Calculated display values updated for target mode
4011-Section13.js:2395 [Section13] 📡 🔥 d_127 (TED) listener triggered - S14 energy demand changed!
4011-Section13.js:3389 [Section13] 🚀 CALCULATEALL TRIGGERED - Running dual-engine calculations...
4011-Section13.js:3395 [Section13] 🎯 Mode captured at calculation start: target
4011-Section13.js:3401 [Section13] 🔄 Starting Reference Model calculations...
4011-Section13.js:721 🔍 [S13-CONTEXT] Creating reference context: g_118="Volume Constant" from ReferenceState
4011-Section13.js:723 🔍 [S13-CONTEXT] ReferenceState.g_118="Volume Constant", TargetState.g_118="Volume by Schedule"
4011-Section13.js:3457 [Section13] Running Reference Model calculations...
4011-Section13.js:3471 [S13 CONTAMINATION DEBUG] calculateReferenceModel: Using system type = Electricity
4011-Section13.js:2873 [S13] REF HEATING: system=Electricity, ted=297371.1974742337, afue=0.9, cop=1
4011-Section13.js:2879 [S13 REF DEBUG] About to calculate with heating system: Electricity
4011-Section13.js:2882 [S13 REF DEBUG] Will S13 publish ref_d_113=Electricity?
4011-Section13.js:3099 🔍 [S13-VENT] calculateVentilationRates: ventMethod="Volume Constant", ach(l_118)=3.5, ratePerPerson(d_119)=8.33, volume(d_105)=8000
4011-Section13.js:3102 🔍 [S13-VENT] isReferenceCalculation=true, hasContext=true
4011-Section13.js:3110 🔍 [S13-VENT] calculateVentilationValues: ventMethod="Volume Constant", ach(l_118)=3.5, ratePerPerson(d_119)=8.33, volume(d_105)=8000
4011-Section13.js:3113 🔍 [S13-VENT] Supporting values: occupants(d_63)=126, occupiedHours(i_63)=4380, totalHours(j_63)=8760
4011-Section13.js:3133 🔍 [S13-VENT] Volume Constant calculation: ventRateLs = (3.5 * 8000) / 3.6 = 7777.777777777777
4011-Section13.js:3145 ✅ [S13-VENT] Final d_120 result: 7777.777777777777 L/s (from method="Volume Constant", ach=3.5, volume=8000)
4011-Section13.js:2977 [Section13] 🧊 COOLING CALC: mode=REF, coolingSystemType="No Cooling", heatingType="Electricity", isCoolingActive=false, coolingDemand=9766.063134946162
4011-Section13.js:3737 [S13 CONTAMINATION DEBUG] storeReferenceResults called during reference mode
4011-Section13.js:3740 [S13 CONTAMINATION DEBUG] Reference heating system: Electricity
4011-Section13.js:3743 [S13 CONTAMINATION DEBUG] Target heating system: Heatpump
4011-Section13.js:3746 [S13 CONTAMINATION DEBUG] Reference h_115 (gas volume): 0
4011-Section13.js:3749 [S13 CONTAMINATION DEBUG] Reference f_115 (oil volume): 0
4011-Section13.js:3761 [S13 CONTAMINATION DEBUG] Writing ref_f_115 = 0
4011-Section13.js:3761 [S13 CONTAMINATION DEBUG] Writing ref_h_115 = 0
4011-Section13.js:3773 [Section13] Reference results stored with ref_ prefix for downstream sections
4011-Section13.js:3776 [S13 DEBUG] Total Reference results stored: 34
4011-Section13.js:3515 [Section13] Reference Model calculations complete
4011-Section13.js:3403 [Section13] ✅ Reference Model complete
4011-Section13.js:3405 [Section13] 🔄 Starting Target Model calculations...
4011-Section13.js:721 🔍 [S13-CONTEXT] Creating target context: g_118="Volume by Schedule" from TargetState
4011-Section13.js:725 🔍 [S13-CONTEXT] TargetState.g_118="Volume by Schedule", ReferenceState.g_118="Volume Constant"
4011-Section13.js:3536 [Section13] Running Target Model calculations...
4011-Section13.js:2873 [S13] TGT HEATING: system=Heatpump, ted=188752.50983613706, afue=0.98, cop=3.663540445486518
4011-Section13.js:3099 🔍 [S13-VENT] calculateVentilationRates: ventMethod="Volume by Schedule", ach(l_118)=3, ratePerPerson(d_119)=14, volume(d_105)=8000
4011-Section13.js:3102 🔍 [S13-VENT] isReferenceCalculation=false, hasContext=true
4011-Section13.js:3110 🔍 [S13-VENT] calculateVentilationValues: ventMethod="Volume by Schedule", ach(l_118)=3, ratePerPerson(d_119)=14, volume(d_105)=8000
4011-Section13.js:3113 🔍 [S13-VENT] Supporting values: occupants(d_63)=126, occupiedHours(i_63)=4380, totalHours(j_63)=8760
4011-Section13.js:3145 ✅ [S13-VENT] Final d_120 result: 3333.333333333333 L/s (from method="Volume by Schedule", ach=3, volume=8000)
4011-Section13.js:2977 [Section13] 🧊 COOLING CALC: mode=TGT, coolingSystemType="Cooling", heatingType="Heatpump", isCoolingActive=true, coolingDemand=9766.063134946162
4011-Section15.js:1750 [S15] 🎯 TGT S03 CLIMATE READ: h_23=18, d_23=-24, d_24=30, h_24=24
4011-Section04.js:2482 [S04] S15 target electricity changed: d_136
4011-Section04.js:1577 [S04] Starting dual-engine Excel-compliant calculations
4011-Section04.js:1018 [S04] Row 32 Subtotals - F32: 132938, G32: 6779.838, J32: 152406.937203758, K32: 7772.753797391658
4011-Section04.js:94 [S04] j_32 update: 152406.937203758
4011-Section01.js:1250 [S01] j_32 listener: 152639.95461509406 → 152406.937203758
4011-Section01.js:1251 [S01] 🕐 j_32 listener timing: StateManager current j_32 = 152406.937203758
24011-Section05.js:266 🔄 [S05] updateCalculatedDisplayValues: mode=target
4011-Section15.js:1750 [S15] 🎯 TGT S03 CLIMATE READ: h_23=18, d_23=-24, d_24=30, h_24=24
4011-StateManager.js:343 [StateManager] 🎯 h_10 setValue: "106.78737191967348" (state: calculated)
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
calculateCoolingSystem @ 4011-Section13.js:3033
calculateTargetModel @ 4011-Section13.js:3563
calculateAll @ 4011-Section13.js:3406
calculateAndRefresh @ 4011-Section13.js:2368
(anonymous) @ 4011-Section13.js:2399
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
(anonymous) @ 4011-Section03.js:1689
calculateTargetModel @ 4011-Section03.js:1686
calculateAll @ 4011-Section03.js:1665
(anonymous) @ 4011-Section03.js:2057
4011-Section15.js:1750 [S15] 🎯 TGT S03 CLIMATE READ: h_23=18, d_23=-24, d_24=30, h_24=24
4011-StateManager.js:343 [StateManager] 🎯 h_10 setValue: "106.78737191967348" (state: calculated)
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
calculateCoolingSystem @ 4011-Section13.js:3033
calculateTargetModel @ 4011-Section13.js:3563
calculateAll @ 4011-Section13.js:3406
calculateAndRefresh @ 4011-Section13.js:2368
(anonymous) @ 4011-Section13.js:2399
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
(anonymous) @ 4011-Section03.js:1689
calculateTargetModel @ 4011-Section03.js:1686
calculateAll @ 4011-Section03.js:1665
(anonymous) @ 4011-Section03.js:2057
4011-Section15.js:1750 [S15] 🎯 TGT S03 CLIMATE READ: h_23=18, d_23=-24, d_24=30, h_24=24
4011-StateManager.js:343 [StateManager] 🎯 h_10 setValue: "106.78737191967348" (state: calculated)
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
calculateCoolingSystem @ 4011-Section13.js:3033
calculateTargetModel @ 4011-Section13.js:3563
calculateAll @ 4011-Section13.js:3406
calculateAndRefresh @ 4011-Section13.js:2368
(anonymous) @ 4011-Section13.js:2399
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
(anonymous) @ 4011-Section03.js:1689
calculateTargetModel @ 4011-Section03.js:1686
calculateAll @ 4011-Section03.js:1665
(anonymous) @ 4011-Section03.js:2057
4011-Section15.js:1750 [S15] 🎯 TGT S03 CLIMATE READ: h_23=18, d_23=-24, d_24=30, h_24=24
4011-StateManager.js:343 [StateManager] 🎯 h_10 setValue: "106.78737191967348" (state: calculated)
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
calculateCoolingSystem @ 4011-Section13.js:3033
calculateTargetModel @ 4011-Section13.js:3563
calculateAll @ 4011-Section13.js:3406
calculateAndRefresh @ 4011-Section13.js:2368
(anonymous) @ 4011-Section13.js:2399
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
(anonymous) @ 4011-Section03.js:1689
calculateTargetModel @ 4011-Section03.js:1686
calculateAll @ 4011-Section03.js:1665
(anonymous) @ 4011-Section03.js:2057
4011-Section04.js:1018 [S04] Row 32 Subtotals - F32: 132938, G32: 6779.838, J32: 347966.051518286, K32: 17746.268627432586
4011-Section04.js:1668 [S04] Reference model calculations complete
4011-Section04.js:1674 [S04DB] storeReference: ref_j_32=347966.051518286, ref_k_32=17746.268627432586 | current target j_32=152406.937203758, k_32=7772.753797391658
4011-Section04.js:493 [S04] 🔄 Updating calculated display values for target mode
4011-Section04.js:501 [S04DB] displayContext mode=target j_32=152406.937203758 ref_j_32=347966.051518286 k_32=7772.753797391658 ref_k_32=17746.268627432586
4011-Section04.js:582 [S04 DEBUG] Target mode - j_32: 152406.937203758
4011-Section04.js:582 [S04 DEBUG] Target mode - k_32: 7772.753797391658
4011-Section04.js:582 [S04 DEBUG] Target mode - l_27: 51
4011-Section04.js:617 [S04] Calculated display values updated for target mode
4011-Section04.js:1599 [S04] Dual-engine calculations completed successfully
4011-Section04.js:493 [S04] 🔄 Updating calculated display values for target mode
4011-Section04.js:501 [S04DB] displayContext mode=target j_32=152406.937203758 ref_j_32=347966.051518286 k_32=7772.753797391658 ref_k_32=17746.268627432586
4011-Section04.js:582 [S04 DEBUG] Target mode - j_32: 152406.937203758
4011-Section04.js:582 [S04 DEBUG] Target mode - k_32: 7772.753797391658
4011-Section04.js:582 [S04 DEBUG] Target mode - l_27: 51
4011-Section04.js:617 [S04] Calculated display values updated for target mode
4011-StateManager.js:343 [StateManager] 🎯 h_10 setValue: "106.78737191967348" (state: calculated)
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
calculateCoolingSystem @ 4011-Section13.js:3033
calculateTargetModel @ 4011-Section13.js:3563
calculateAll @ 4011-Section13.js:3406
calculateAndRefresh @ 4011-Section13.js:2368
(anonymous) @ 4011-Section13.js:2399
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
(anonymous) @ 4011-Section03.js:1689
calculateTargetModel @ 4011-Section03.js:1686
calculateAll @ 4011-Section03.js:1665
(anonymous) @ 4011-Section03.js:2057
4011-Section15.js:1750 [S15] 🎯 TGT S03 CLIMATE READ: h_23=18, d_23=-24, d_24=30, h_24=24
4011-StateManager.js:343 [StateManager] 🎯 h_10 setValue: "106.78737191967348" (state: calculated)
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
calculateCoolingSystem @ 4011-Section13.js:3033
calculateTargetModel @ 4011-Section13.js:3563
calculateAll @ 4011-Section13.js:3406
calculateAndRefresh @ 4011-Section13.js:2368
(anonymous) @ 4011-Section13.js:2399
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
(anonymous) @ 4011-Section03.js:1689
calculateTargetModel @ 4011-Section03.js:1686
calculateAll @ 4011-Section03.js:1665
(anonymous) @ 4011-Section03.js:2057
4011-Section13.js:3039 [Section13] 🧊 COOLING RESULTS: d_117=3666.572118886037, j_116=2.663540445486518, l_116=0, l_114=6099.491016060125
24011-Section14.js:1416 [S14 LISTENER] 🔥 d_122 changed - triggering calculateAll() + UI update
4011-Section15.js:1750 [S15] 🎯 TGT S03 CLIMATE READ: h_23=18, d_23=-24, d_24=30, h_24=24
4011-StateManager.js:343 [StateManager] 🎯 h_10 setValue: "106.78737191967348" (state: calculated)
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
calculateCoolingVentilation @ 4011-Section13.js:3275
calculateCoolingSystem @ 4011-Section13.js:3043
calculateTargetModel @ 4011-Section13.js:3563
calculateAll @ 4011-Section13.js:3406
calculateAndRefresh @ 4011-Section13.js:2368
(anonymous) @ 4011-Section13.js:2399
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
(anonymous) @ 4011-Section03.js:1689
calculateTargetModel @ 4011-Section03.js:1686
calculateAll @ 4011-Section03.js:1665
(anonymous) @ 4011-Section03.js:2057
4011-Section15.js:1750 [S15] 🎯 TGT S03 CLIMATE READ: h_23=18, d_23=-24, d_24=30, h_24=24
4011-StateManager.js:343 [StateManager] 🎯 h_10 setValue: "106.78737191967348" (state: calculated)
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
calculateCoolingVentilation @ 4011-Section13.js:3275
calculateCoolingSystem @ 4011-Section13.js:3043
calculateTargetModel @ 4011-Section13.js:3563
calculateAll @ 4011-Section13.js:3406
calculateAndRefresh @ 4011-Section13.js:2368
(anonymous) @ 4011-Section13.js:2399
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
(anonymous) @ 4011-Section03.js:1689
calculateTargetModel @ 4011-Section03.js:1686
calculateAll @ 4011-Section03.js:1665
(anonymous) @ 4011-Section03.js:2057
24011-Section14.js:1416 [S14 LISTENER] 🔥 d_122 changed - triggering calculateAll() + UI update
4011-Section15.js:1750 [S15] 🎯 TGT S03 CLIMATE READ: h_23=18, d_23=-24, d_24=30, h_24=24
4011-StateManager.js:343 [StateManager] 🎯 h_10 setValue: "106.78737191967348" (state: calculated)
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
updateTargetModelDOMValues @ 4011-Section13.js:3687
calculateTargetModel @ 4011-Section13.js:3573
calculateAll @ 4011-Section13.js:3406
calculateAndRefresh @ 4011-Section13.js:2368
(anonymous) @ 4011-Section13.js:2399
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
(anonymous) @ 4011-Section03.js:1689
calculateTargetModel @ 4011-Section03.js:1686
calculateAll @ 4011-Section03.js:1665
(anonymous) @ 4011-Section03.js:2057
4011-Section15.js:1750 [S15] 🎯 TGT S03 CLIMATE READ: h_23=18, d_23=-24, d_24=30, h_24=24
4011-StateManager.js:343 [StateManager] 🎯 h_10 setValue: "106.78737191967348" (state: calculated)
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
updateTargetModelDOMValues @ 4011-Section13.js:3687
calculateTargetModel @ 4011-Section13.js:3573
calculateAll @ 4011-Section13.js:3406
calculateAndRefresh @ 4011-Section13.js:2368
(anonymous) @ 4011-Section13.js:2399
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
(anonymous) @ 4011-Section03.js:1689
calculateTargetModel @ 4011-Section03.js:1686
calculateAll @ 4011-Section03.js:1665
(anonymous) @ 4011-Section03.js:2057
4011-Section13.js:3591 [Section13] Target Model calculations complete
4011-Section13.js:3407 [Section13] ✅ Target Model complete
4011-Section13.js:3434 [Section13] ⏭️ Skipping Reference value re-write - triggered in target mode
4011-Section13.js:3440 [Section13] 🎉 DUAL-ENGINE CALCULATIONS COMPLETE
4011-Section13.js:252 [Section13] 🔄 Updating calculated display values for target mode
4011-Section13.js:336 [Section13] Calculated display values updated for target mode
4011-Section15.js:1750 [S15] 🎯 TGT S03 CLIMATE READ: h_23=18, d_23=-24, d_24=30, h_24=24
4011-StateManager.js:343 [StateManager] 🎯 h_10 setValue: "106.78737191967348" (state: calculated)
4011-StateManager.js:346 [StateManager] h_10 setValue stack trace:
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
(anonymous) @ 4011-Section03.js:1689
calculateTargetModel @ 4011-Section03.js:1686
calculateAll @ 4011-Section03.js:1665
(anonymous) @ 4011-Section03.js:2057
4011-Section15.js:1750 [S15] 🎯 TGT S03 CLIMATE READ: h_23=18, d_23=-24, d_24=30, h_24=24
4011-StateManager.js:343 [StateManager] 🎯 h_10 setValue: "106.78737191967348" (state: calculated)
4011-StateManager.js:346 [StateManager] h_10 setValue stack trace:
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
(anonymous) @ 4011-Section03.js:1689
calculateTargetModel @ 4011-Section03.js:1686
calculateAll @ 4011-Section03.js:1665
(anonymous) @ 4011-Section03.js:2057
4011-Section13.js:3389 [Section13] 🚀 CALCULATEALL TRIGGERED - Running dual-engine calculations...
4011-Section13.js:3395 [Section13] 🎯 Mode captured at calculation start: target
4011-Section13.js:3401 [Section13] 🔄 Starting Reference Model calculations...
4011-Section13.js:721 🔍 [S13-CONTEXT] Creating reference context: g_118="Volume Constant" from ReferenceState
4011-Section13.js:723 🔍 [S13-CONTEXT] ReferenceState.g_118="Volume Constant", TargetState.g_118="Volume by Schedule"
4011-Section13.js:3457 [Section13] Running Reference Model calculations...
4011-Section13.js:3471 [S13 CONTAMINATION DEBUG] calculateReferenceModel: Using system type = Electricity
4011-Section13.js:2873 [S13] REF HEATING: system=Electricity, ted=297371.1974742337, afue=0.9, cop=1
4011-Section13.js:2879 [S13 REF DEBUG] About to calculate with heating system: Electricity
4011-Section13.js:2882 [S13 REF DEBUG] Will S13 publish ref_d_113=Electricity?
4011-Section13.js:3099 🔍 [S13-VENT] calculateVentilationRates: ventMethod="Volume Constant", ach(l_118)=3.5, ratePerPerson(d_119)=8.33, volume(d_105)=8000
4011-Section13.js:3102 🔍 [S13-VENT] isReferenceCalculation=true, hasContext=true
4011-Section13.js:3110 🔍 [S13-VENT] calculateVentilationValues: ventMethod="Volume Constant", ach(l_118)=3.5, ratePerPerson(d_119)=8.33, volume(d_105)=8000
4011-Section13.js:3113 🔍 [S13-VENT] Supporting values: occupants(d_63)=126, occupiedHours(i_63)=4380, totalHours(j_63)=8760
4011-Section13.js:3133 🔍 [S13-VENT] Volume Constant calculation: ventRateLs = (3.5 * 8000) / 3.6 = 7777.777777777777
4011-Section13.js:3145 ✅ [S13-VENT] Final d_120 result: 7777.777777777777 L/s (from method="Volume Constant", ach=3.5, volume=8000)
4011-Section13.js:2977 [Section13] 🧊 COOLING CALC: mode=REF, coolingSystemType="No Cooling", heatingType="Electricity", isCoolingActive=false, coolingDemand=10386.714434542262
4011-Section13.js:3737 [S13 CONTAMINATION DEBUG] storeReferenceResults called during reference mode
4011-Section13.js:3740 [S13 CONTAMINATION DEBUG] Reference heating system: Electricity
4011-Section13.js:3743 [S13 CONTAMINATION DEBUG] Target heating system: Heatpump
4011-Section13.js:3746 [S13 CONTAMINATION DEBUG] Reference h_115 (gas volume): 0
4011-Section13.js:3749 [S13 CONTAMINATION DEBUG] Reference f_115 (oil volume): 0
4011-Section13.js:3761 [S13 CONTAMINATION DEBUG] Writing ref_f_115 = 0
4011-Section13.js:3761 [S13 CONTAMINATION DEBUG] Writing ref_h_115 = 0
4011-Section13.js:3773 [Section13] Reference results stored with ref_ prefix for downstream sections
4011-Section13.js:3776 [S13 DEBUG] Total Reference results stored: 34
4011-Section13.js:3515 [Section13] Reference Model calculations complete
4011-Section13.js:3403 [Section13] ✅ Reference Model complete
4011-Section13.js:3405 [Section13] 🔄 Starting Target Model calculations...
4011-Section13.js:721 🔍 [S13-CONTEXT] Creating target context: g_118="Volume by Schedule" from TargetState
4011-Section13.js:725 🔍 [S13-CONTEXT] TargetState.g_118="Volume by Schedule", ReferenceState.g_118="Volume Constant"
4011-Section13.js:3536 [Section13] Running Target Model calculations...
4011-Section13.js:2873 [S13] TGT HEATING: system=Heatpump, ted=188752.50983613706, afue=0.98, cop=3.663540445486518
4011-Section13.js:3099 🔍 [S13-VENT] calculateVentilationRates: ventMethod="Volume by Schedule", ach(l_118)=3, ratePerPerson(d_119)=14, volume(d_105)=8000
4011-Section13.js:3102 🔍 [S13-VENT] isReferenceCalculation=false, hasContext=true
4011-Section13.js:3110 🔍 [S13-VENT] calculateVentilationValues: ventMethod="Volume by Schedule", ach(l_118)=3, ratePerPerson(d_119)=14, volume(d_105)=8000
4011-Section13.js:3113 🔍 [S13-VENT] Supporting values: occupants(d_63)=126, occupiedHours(i_63)=4380, totalHours(j_63)=8760
4011-Section13.js:3145 ✅ [S13-VENT] Final d_120 result: 3333.333333333333 L/s (from method="Volume by Schedule", ach=3, volume=8000)
4011-Section13.js:2977 [Section13] 🧊 COOLING CALC: mode=TGT, coolingSystemType="Cooling", heatingType="Heatpump", isCoolingActive=true, coolingDemand=10386.714434542262
4011-Section15.js:1750 [S15] 🎯 TGT S03 CLIMATE READ: h_23=18, d_23=-24, d_24=30, h_24=24
4011-Section04.js:2482 [S04] S15 target electricity changed: d_136
4011-Section04.js:1577 [S04] Starting dual-engine Excel-compliant calculations
4011-Section04.js:1018 [S04] Row 32 Subtotals - F32: 132938, G32: 6779.838, J32: 152639.95461509406, K32: 7784.637685369797
4011-Section04.js:94 [S04] j_32 update: 152639.95461509406
4011-Section01.js:1250 [S01] j_32 listener: 152406.937203758 → 152639.95461509406
4011-Section01.js:1251 [S01] 🕐 j_32 listener timing: StateManager current j_32 = 152639.95461509406
24011-Section05.js:266 🔄 [S05] updateCalculatedDisplayValues: mode=target
4011-Section15.js:1750 [S15] 🎯 TGT S03 CLIMATE READ: h_23=18, d_23=-24, d_24=30, h_24=24
4011-StateManager.js:343 [StateManager] 🎯 h_10 setValue: "106.95064084577778" (state: calculated)
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
calculateCoolingSystem @ 4011-Section13.js:3033
calculateTargetModel @ 4011-Section13.js:3563
calculateAll @ 4011-Section13.js:3406
calculateAndRefresh @ 4011-Section13.js:2368
(anonymous) @ 4011-StateManager.js:543
notifyListeners @ 4011-StateManager.js:541
setValue @ 4011-StateManager.js:419
(anonymous) @ 4011-Section03.js:1689
calculateTargetModel @ 4011-Section03.js:1686
calculateAll @ 4011-Section03.js:1665
(anonymous) @ 4011-Section03.js:2057
4011-Section15.js:1750 [S15] 🎯 TGT S03 CLIMATE READ: h_23=18, d_23=-24, d_24=30, h_24=24
4011-StateManager.js:343 [StateManager] 🎯 h_10 setValue: "106.95064084577778" (state: calculated)
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
calculateCoolingSystem @ 4011-Section13.js:3033
calculateTargetModel @ 4011-Section13.js:3563
calculateAll @ 4011-Section13.js:3406
calculateAndRefresh @ 4011-Section13.js:2368
(anonymous) @ 4011-StateManager.js:543
notifyListeners @ 4011-StateManager.js:541
setValue @ 4011-StateManager.js:419
(anonymous) @ 4011-Section03.js:1689
calculateTargetModel @ 4011-Section03.js:1686
calculateAll @ 4011-Section03.js:1665
(anonymous) @ 4011-Section03.js:2057
4011-Section15.js:1750 [S15] 🎯 TGT S03 CLIMATE READ: h_23=18, d_23=-24, d_24=30, h_24=24
4011-StateManager.js:343 [StateManager] 🎯 h_10 setValue: "106.95064084577778" (state: calculated)
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
calculateCoolingSystem @ 4011-Section13.js:3033
calculateTargetModel @ 4011-Section13.js:3563
calculateAll @ 4011-Section13.js:3406
calculateAndRefresh @ 4011-Section13.js:2368
(anonymous) @ 4011-StateManager.js:543
notifyListeners @ 4011-StateManager.js:541
setValue @ 4011-StateManager.js:419
(anonymous) @ 4011-Section03.js:1689
calculateTargetModel @ 4011-Section03.js:1686
calculateAll @ 4011-Section03.js:1665
(anonymous) @ 4011-Section03.js:2057
4011-Section15.js:1750 [S15] 🎯 TGT S03 CLIMATE READ: h_23=18, d_23=-24, d_24=30, h_24=24
4011-StateManager.js:343 [StateManager] 🎯 h_10 setValue: "106.95064084577778" (state: calculated)
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
calculateCoolingSystem @ 4011-Section13.js:3033
calculateTargetModel @ 4011-Section13.js:3563
calculateAll @ 4011-Section13.js:3406
calculateAndRefresh @ 4011-Section13.js:2368
(anonymous) @ 4011-StateManager.js:543
notifyListeners @ 4011-StateManager.js:541
setValue @ 4011-StateManager.js:419
(anonymous) @ 4011-Section03.js:1689
calculateTargetModel @ 4011-Section03.js:1686
calculateAll @ 4011-Section03.js:1665
(anonymous) @ 4011-Section03.js:2057
4011-Section04.js:1018 [S04] Row 32 Subtotals - F32: 132938, G32: 6779.838, J32: 347966.051518286, K32: 17746.268627432586
4011-Section04.js:1668 [S04] Reference model calculations complete
4011-Section04.js:1674 [S04DB] storeReference: ref_j_32=347966.051518286, ref_k_32=17746.268627432586 | current target j_32=152639.95461509406, k_32=7784.637685369797
4011-Section04.js:493 [S04] 🔄 Updating calculated display values for target mode
4011-Section04.js:501 [S04DB] displayContext mode=target j_32=152639.95461509406 ref_j_32=347966.051518286 k_32=7784.637685369797 ref_k_32=17746.268627432586
4011-Section04.js:582 [S04 DEBUG] Target mode - j_32: 152639.95461509406
4011-Section04.js:582 [S04 DEBUG] Target mode - k_32: 7784.637685369797
4011-Section04.js:582 [S04 DEBUG] Target mode - l_27: 51
4011-Section04.js:617 [S04] Calculated display values updated for target mode
4011-Section04.js:1599 [S04] Dual-engine calculations completed successfully
4011-Section04.js:493 [S04] 🔄 Updating calculated display values for target mode
4011-Section04.js:501 [S04DB] displayContext mode=target j_32=152639.95461509406 ref_j_32=347966.051518286 k_32=7784.637685369797 ref_k_32=17746.268627432586
4011-Section04.js:582 [S04 DEBUG] Target mode - j_32: 152639.95461509406
4011-Section04.js:582 [S04 DEBUG] Target mode - k_32: 7784.637685369797
4011-Section04.js:582 [S04 DEBUG] Target mode - l_27: 51
4011-Section04.js:617 [S04] Calculated display values updated for target mode
4011-StateManager.js:343 [StateManager] 🎯 h_10 setValue: "106.95064084577778" (state: calculated)
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
calculateCoolingSystem @ 4011-Section13.js:3033
calculateTargetModel @ 4011-Section13.js:3563
calculateAll @ 4011-Section13.js:3406
calculateAndRefresh @ 4011-Section13.js:2368
(anonymous) @ 4011-StateManager.js:543
notifyListeners @ 4011-StateManager.js:541
setValue @ 4011-StateManager.js:419
(anonymous) @ 4011-Section03.js:1689
calculateTargetModel @ 4011-Section03.js:1686
calculateAll @ 4011-Section03.js:1665
(anonymous) @ 4011-Section03.js:2057
4011-Section15.js:1750 [S15] 🎯 TGT S03 CLIMATE READ: h_23=18, d_23=-24, d_24=30, h_24=24
4011-StateManager.js:343 [StateManager] 🎯 h_10 setValue: "106.95064084577778" (state: calculated)
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
calculateCoolingSystem @ 4011-Section13.js:3033
calculateTargetModel @ 4011-Section13.js:3563
calculateAll @ 4011-Section13.js:3406
calculateAndRefresh @ 4011-Section13.js:2368
(anonymous) @ 4011-StateManager.js:543
notifyListeners @ 4011-StateManager.js:541
setValue @ 4011-StateManager.js:419
(anonymous) @ 4011-Section03.js:1689
calculateTargetModel @ 4011-Section03.js:1686
calculateAll @ 4011-Section03.js:1665
(anonymous) @ 4011-Section03.js:2057
4011-Section13.js:3039 [Section13] 🧊 COOLING RESULTS: d_117=3899.589530222073, j_116=2.663540445486518, l_116=0, l_114=6487.124904320189
24011-Section14.js:1416 [S14 LISTENER] 🔥 d_122 changed - triggering calculateAll() + UI update
4011-Section15.js:1750 [S15] 🎯 TGT S03 CLIMATE READ: h_23=18, d_23=-24, d_24=30, h_24=24
4011-StateManager.js:343 [StateManager] 🎯 h_10 setValue: "106.95064084577778" (state: calculated)
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
calculateCoolingVentilation @ 4011-Section13.js:3275
calculateCoolingSystem @ 4011-Section13.js:3043
calculateTargetModel @ 4011-Section13.js:3563
calculateAll @ 4011-Section13.js:3406
calculateAndRefresh @ 4011-Section13.js:2368
(anonymous) @ 4011-StateManager.js:543
notifyListeners @ 4011-StateManager.js:541
setValue @ 4011-StateManager.js:419
(anonymous) @ 4011-Section03.js:1689
calculateTargetModel @ 4011-Section03.js:1686
calculateAll @ 4011-Section03.js:1665
(anonymous) @ 4011-Section03.js:2057
4011-Section15.js:1750 [S15] 🎯 TGT S03 CLIMATE READ: h_23=18, d_23=-24, d_24=30, h_24=24
4011-StateManager.js:343 [StateManager] 🎯 h_10 setValue: "106.95064084577778" (state: calculated)
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
calculateCoolingVentilation @ 4011-Section13.js:3275
calculateCoolingSystem @ 4011-Section13.js:3043
calculateTargetModel @ 4011-Section13.js:3563
calculateAll @ 4011-Section13.js:3406
calculateAndRefresh @ 4011-Section13.js:2368
(anonymous) @ 4011-StateManager.js:543
notifyListeners @ 4011-StateManager.js:541
setValue @ 4011-StateManager.js:419
(anonymous) @ 4011-Section03.js:1689
calculateTargetModel @ 4011-Section03.js:1686
calculateAll @ 4011-Section03.js:1665
(anonymous) @ 4011-Section03.js:2057
24011-Section14.js:1416 [S14 LISTENER] 🔥 d_122 changed - triggering calculateAll() + UI update
4011-Section15.js:1750 [S15] 🎯 TGT S03 CLIMATE READ: h_23=18, d_23=-24, d_24=30, h_24=24
4011-StateManager.js:343 [StateManager] 🎯 h_10 setValue: "106.95064084577778" (state: calculated)
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
updateTargetModelDOMValues @ 4011-Section13.js:3687
calculateTargetModel @ 4011-Section13.js:3573
calculateAll @ 4011-Section13.js:3406
calculateAndRefresh @ 4011-Section13.js:2368
(anonymous) @ 4011-StateManager.js:543
notifyListeners @ 4011-StateManager.js:541
setValue @ 4011-StateManager.js:419
(anonymous) @ 4011-Section03.js:1689
calculateTargetModel @ 4011-Section03.js:1686
calculateAll @ 4011-Section03.js:1665
(anonymous) @ 4011-Section03.js:2057
4011-Section15.js:1750 [S15] 🎯 TGT S03 CLIMATE READ: h_23=18, d_23=-24, d_24=30, h_24=24
4011-StateManager.js:343 [StateManager] 🎯 h_10 setValue: "106.95064084577778" (state: calculated)
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
updateTargetModelDOMValues @ 4011-Section13.js:3687
calculateTargetModel @ 4011-Section13.js:3573
calculateAll @ 4011-Section13.js:3406
calculateAndRefresh @ 4011-Section13.js:2368
(anonymous) @ 4011-StateManager.js:543
notifyListeners @ 4011-StateManager.js:541
setValue @ 4011-StateManager.js:419
(anonymous) @ 4011-Section03.js:1689
calculateTargetModel @ 4011-Section03.js:1686
calculateAll @ 4011-Section03.js:1665
(anonymous) @ 4011-Section03.js:2057
4011-Section13.js:3591 [Section13] Target Model calculations complete
4011-Section13.js:3407 [Section13] ✅ Target Model complete
4011-Section13.js:3434 [Section13] ⏭️ Skipping Reference value re-write - triggered in target mode
4011-Section13.js:3440 [Section13] 🎉 DUAL-ENGINE CALCULATIONS COMPLETE
4011-Section13.js:252 [Section13] 🔄 Updating calculated display values for target mode
4011-Section13.js:336 [Section13] Calculated display values updated for target mode
4011-Section13.js:3389 [Section13] 🚀 CALCULATEALL TRIGGERED - Running dual-engine calculations...
4011-Section13.js:3395 [Section13] 🎯 Mode captured at calculation start: target
4011-Section13.js:3401 [Section13] 🔄 Starting Reference Model calculations...
4011-Section13.js:721 🔍 [S13-CONTEXT] Creating reference context: g_118="Volume Constant" from ReferenceState
4011-Section13.js:723 🔍 [S13-CONTEXT] ReferenceState.g_118="Volume Constant", TargetState.g_118="Volume by Schedule"
4011-Section13.js:3457 [Section13] Running Reference Model calculations...
4011-Section13.js:3471 [S13 CONTAMINATION DEBUG] calculateReferenceModel: Using system type = Electricity
4011-Section13.js:2873 [S13] REF HEATING: system=Electricity, ted=297371.1974742337, afue=0.9, cop=1
4011-Section13.js:2879 [S13 REF DEBUG] About to calculate with heating system: Electricity
4011-Section13.js:2882 [S13 REF DEBUG] Will S13 publish ref_d_113=Electricity?
4011-Section13.js:3099 🔍 [S13-VENT] calculateVentilationRates: ventMethod="Volume Constant", ach(l_118)=3.5, ratePerPerson(d_119)=8.33, volume(d_105)=8000
4011-Section13.js:3102 🔍 [S13-VENT] isReferenceCalculation=true, hasContext=true
4011-Section13.js:3110 🔍 [S13-VENT] calculateVentilationValues: ventMethod="Volume Constant", ach(l_118)=3.5, ratePerPerson(d_119)=8.33, volume(d_105)=8000
4011-Section13.js:3113 🔍 [S13-VENT] Supporting values: occupants(d_63)=126, occupiedHours(i_63)=4380, totalHours(j_63)=8760
4011-Section13.js:3133 🔍 [S13-VENT] Volume Constant calculation: ventRateLs = (3.5 * 8000) / 3.6 = 7777.777777777777
4011-Section13.js:3145 ✅ [S13-VENT] Final d_120 result: 7777.777777777777 L/s (from method="Volume Constant", ach=3.5, volume=8000)
4011-Section13.js:2977 [Section13] 🧊 COOLING CALC: mode=REF, coolingSystemType="No Cooling", heatingType="Electricity", isCoolingActive=false, coolingDemand=9766.063134946162
4011-Section13.js:3737 [S13 CONTAMINATION DEBUG] storeReferenceResults called during reference mode
4011-Section13.js:3740 [S13 CONTAMINATION DEBUG] Reference heating system: Electricity
4011-Section13.js:3743 [S13 CONTAMINATION DEBUG] Target heating system: Heatpump
4011-Section13.js:3746 [S13 CONTAMINATION DEBUG] Reference h_115 (gas volume): 0
4011-Section13.js:3749 [S13 CONTAMINATION DEBUG] Reference f_115 (oil volume): 0
4011-Section13.js:3761 [S13 CONTAMINATION DEBUG] Writing ref_f_115 = 0
4011-Section13.js:3761 [S13 CONTAMINATION DEBUG] Writing ref_h_115 = 0
4011-Section13.js:3773 [Section13] Reference results stored with ref_ prefix for downstream sections
4011-Section13.js:3776 [S13 DEBUG] Total Reference results stored: 34
4011-Section13.js:3515 [Section13] Reference Model calculations complete
4011-Section13.js:3403 [Section13] ✅ Reference Model complete
4011-Section13.js:3405 [Section13] 🔄 Starting Target Model calculations...
4011-Section13.js:721 🔍 [S13-CONTEXT] Creating target context: g_118="Volume by Schedule" from TargetState
4011-Section13.js:725 🔍 [S13-CONTEXT] TargetState.g_118="Volume by Schedule", ReferenceState.g_118="Volume Constant"
4011-Section13.js:3536 [Section13] Running Target Model calculations...
4011-Section13.js:2873 [S13] TGT HEATING: system=Heatpump, ted=188752.50983613706, afue=0.98, cop=3.663540445486518
4011-Section13.js:3099 🔍 [S13-VENT] calculateVentilationRates: ventMethod="Volume by Schedule", ach(l_118)=3, ratePerPerson(d_119)=14, volume(d_105)=8000
4011-Section13.js:3102 🔍 [S13-VENT] isReferenceCalculation=false, hasContext=true
4011-Section13.js:3110 🔍 [S13-VENT] calculateVentilationValues: ventMethod="Volume by Schedule", ach(l_118)=3, ratePerPerson(d_119)=14, volume(d_105)=8000
4011-Section13.js:3113 🔍 [S13-VENT] Supporting values: occupants(d_63)=126, occupiedHours(i_63)=4380, totalHours(j_63)=8760
4011-Section13.js:3145 ✅ [S13-VENT] Final d_120 result: 3333.333333333333 L/s (from method="Volume by Schedule", ach=3, volume=8000)
4011-Section13.js:2977 [Section13] 🧊 COOLING CALC: mode=TGT, coolingSystemType="Cooling", heatingType="Heatpump", isCoolingActive=true, coolingDemand=9766.063134946162
4011-Section15.js:1750 [S15] 🎯 TGT S03 CLIMATE READ: h_23=18, d_23=-24, d_24=30, h_24=24
4011-Section04.js:2482 [S04] S15 target electricity changed: d_136
4011-Section04.js:1577 [S04] Starting dual-engine Excel-compliant calculations
4011-Section04.js:1018 [S04] Row 32 Subtotals - F32: 132938, G32: 6779.838, J32: 152406.937203758, K32: 7772.753797391658
4011-Section04.js:94 [S04] j_32 update: 152406.937203758
4011-Section01.js:1250 [S01] j_32 listener: 152639.95461509406 → 152406.937203758
4011-Section01.js:1251 [S01] 🕐 j_32 listener timing: StateManager current j_32 = 152406.937203758
24011-Section05.js:266 🔄 [S05] updateCalculatedDisplayValues: mode=target
4011-Section15.js:1750 [S15] 🎯 TGT S03 CLIMATE READ: h_23=18, d_23=-24, d_24=30, h_24=24
4011-StateManager.js:343 [StateManager] 🎯 h_10 setValue: "106.78737191967348" (state: calculated)
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
calculateCoolingSystem @ 4011-Section13.js:3033
calculateTargetModel @ 4011-Section13.js:3563
calculateAll @ 4011-Section13.js:3406
calculateAndRefresh @ 4011-Section13.js:2368
(anonymous) @ 4011-StateManager.js:543
notifyListeners @ 4011-StateManager.js:541
setValue @ 4011-StateManager.js:419
(anonymous) @ 4011-Section03.js:1689
calculateTargetModel @ 4011-Section03.js:1686
calculateAll @ 4011-Section03.js:1665
(anonymous) @ 4011-Section03.js:2057
4011-Section15.js:1750 [S15] 🎯 TGT S03 CLIMATE READ: h_23=18, d_23=-24, d_24=30, h_24=24
4011-StateManager.js:343 [StateManager] 🎯 h_10 setValue: "106.78737191967348" (state: calculated)
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
calculateCoolingSystem @ 4011-Section13.js:3033
calculateTargetModel @ 4011-Section13.js:3563
calculateAll @ 4011-Section13.js:3406
calculateAndRefresh @ 4011-Section13.js:2368
(anonymous) @ 4011-StateManager.js:543
notifyListeners @ 4011-StateManager.js:541
setValue @ 4011-StateManager.js:419
(anonymous) @ 4011-Section03.js:1689
calculateTargetModel @ 4011-Section03.js:1686
calculateAll @ 4011-Section03.js:1665
(anonymous) @ 4011-Section03.js:2057
4011-Section15.js:1750 [S15] 🎯 TGT S03 CLIMATE READ: h_23=18, d_23=-24, d_24=30, h_24=24
4011-StateManager.js:343 [StateManager] 🎯 h_10 setValue: "106.78737191967348" (state: calculated)
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
calculateCoolingSystem @ 4011-Section13.js:3033
calculateTargetModel @ 4011-Section13.js:3563
calculateAll @ 4011-Section13.js:3406
calculateAndRefresh @ 4011-Section13.js:2368
(anonymous) @ 4011-StateManager.js:543
notifyListeners @ 4011-StateManager.js:541
setValue @ 4011-StateManager.js:419
(anonymous) @ 4011-Section03.js:1689
calculateTargetModel @ 4011-Section03.js:1686
calculateAll @ 4011-Section03.js:1665
(anonymous) @ 4011-Section03.js:2057
4011-Section15.js:1750 [S15] 🎯 TGT S03 CLIMATE READ: h_23=18, d_23=-24, d_24=30, h_24=24
4011-StateManager.js:343 [StateManager] 🎯 h_10 setValue: "106.78737191967348" (state: calculated)
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
calculateCoolingSystem @ 4011-Section13.js:3033
calculateTargetModel @ 4011-Section13.js:3563
calculateAll @ 4011-Section13.js:3406
calculateAndRefresh @ 4011-Section13.js:2368
(anonymous) @ 4011-StateManager.js:543
notifyListeners @ 4011-StateManager.js:541
setValue @ 4011-StateManager.js:419
(anonymous) @ 4011-Section03.js:1689
calculateTargetModel @ 4011-Section03.js:1686
calculateAll @ 4011-Section03.js:1665
(anonymous) @ 4011-Section03.js:2057
4011-Section04.js:1018 [S04] Row 32 Subtotals - F32: 132938, G32: 6779.838, J32: 347966.051518286, K32: 17746.268627432586
4011-Section04.js:1668 [S04] Reference model calculations complete
4011-Section04.js:1674 [S04DB] storeReference: ref_j_32=347966.051518286, ref_k_32=17746.268627432586 | current target j_32=152406.937203758, k_32=7772.753797391658
4011-Section04.js:493 [S04] 🔄 Updating calculated display values for target mode
4011-Section04.js:501 [S04DB] displayContext mode=target j_32=152406.937203758 ref_j_32=347966.051518286 k_32=7772.753797391658 ref_k_32=17746.268627432586
4011-Section04.js:582 [S04 DEBUG] Target mode - j_32: 152406.937203758
4011-Section04.js:582 [S04 DEBUG] Target mode - k_32: 7772.753797391658
4011-Section04.js:582 [S04 DEBUG] Target mode - l_27: 51
4011-Section04.js:617 [S04] Calculated display values updated for target mode
4011-Section04.js:1599 [S04] Dual-engine calculations completed successfully
4011-Section04.js:493 [S04] 🔄 Updating calculated display values for target mode
4011-Section04.js:501 [S04DB] displayContext mode=target j_32=152406.937203758 ref_j_32=347966.051518286 k_32=7772.753797391658 ref_k_32=17746.268627432586
4011-Section04.js:582 [S04 DEBUG] Target mode - j_32: 152406.937203758
4011-Section04.js:582 [S04 DEBUG] Target mode - k_32: 7772.753797391658
4011-Section04.js:582 [S04 DEBUG] Target mode - l_27: 51
4011-Section04.js:617 [S04] Calculated display values updated for target mode
4011-StateManager.js:343 [StateManager] 🎯 h_10 setValue: "106.78737191967348" (state: calculated)
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
calculateCoolingSystem @ 4011-Section13.js:3033
calculateTargetModel @ 4011-Section13.js:3563
calculateAll @ 4011-Section13.js:3406
calculateAndRefresh @ 4011-Section13.js:2368
(anonymous) @ 4011-StateManager.js:543
notifyListeners @ 4011-StateManager.js:541
setValue @ 4011-StateManager.js:419
(anonymous) @ 4011-Section03.js:1689
calculateTargetModel @ 4011-Section03.js:1686
calculateAll @ 4011-Section03.js:1665
(anonymous) @ 4011-Section03.js:2057
4011-Section15.js:1750 [S15] 🎯 TGT S03 CLIMATE READ: h_23=18, d_23=-24, d_24=30, h_24=24
4011-StateManager.js:343 [StateManager] 🎯 h_10 setValue: "106.78737191967348" (state: calculated)
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
calculateCoolingSystem @ 4011-Section13.js:3033
calculateTargetModel @ 4011-Section13.js:3563
calculateAll @ 4011-Section13.js:3406
calculateAndRefresh @ 4011-Section13.js:2368
(anonymous) @ 4011-StateManager.js:543
notifyListeners @ 4011-StateManager.js:541
setValue @ 4011-StateManager.js:419
(anonymous) @ 4011-Section03.js:1689
calculateTargetModel @ 4011-Section03.js:1686
calculateAll @ 4011-Section03.js:1665
(anonymous) @ 4011-Section03.js:2057
4011-Section13.js:3039 [Section13] 🧊 COOLING RESULTS: d_117=3666.572118886037, j_116=2.663540445486518, l_116=0, l_114=6099.491016060125
24011-Section14.js:1416 [S14 LISTENER] 🔥 d_122 changed - triggering calculateAll() + UI update
4011-Section15.js:1750 [S15] 🎯 TGT S03 CLIMATE READ: h_23=18, d_23=-24, d_24=30, h_24=24
4011-StateManager.js:343 [StateManager] 🎯 h_10 setValue: "106.78737191967348" (state: calculated)
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
calculateCoolingVentilation @ 4011-Section13.js:3275
calculateCoolingSystem @ 4011-Section13.js:3043
calculateTargetModel @ 4011-Section13.js:3563
calculateAll @ 4011-Section13.js:3406
calculateAndRefresh @ 4011-Section13.js:2368
(anonymous) @ 4011-StateManager.js:543
notifyListeners @ 4011-StateManager.js:541
setValue @ 4011-StateManager.js:419
(anonymous) @ 4011-Section03.js:1689
calculateTargetModel @ 4011-Section03.js:1686
calculateAll @ 4011-Section03.js:1665
(anonymous) @ 4011-Section03.js:2057
4011-Section15.js:1750 [S15] 🎯 TGT S03 CLIMATE READ: h_23=18, d_23=-24, d_24=30, h_24=24
4011-StateManager.js:343 [StateManager] 🎯 h_10 setValue: "106.78737191967348" (state: calculated)
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
calculateCoolingVentilation @ 4011-Section13.js:3275
calculateCoolingSystem @ 4011-Section13.js:3043
calculateTargetModel @ 4011-Section13.js:3563
calculateAll @ 4011-Section13.js:3406
calculateAndRefresh @ 4011-Section13.js:2368
(anonymous) @ 4011-StateManager.js:543
notifyListeners @ 4011-StateManager.js:541
setValue @ 4011-StateManager.js:419
(anonymous) @ 4011-Section03.js:1689
calculateTargetModel @ 4011-Section03.js:1686
calculateAll @ 4011-Section03.js:1665
(anonymous) @ 4011-Section03.js:2057
24011-Section14.js:1416 [S14 LISTENER] 🔥 d_122 changed - triggering calculateAll() + UI update
4011-Section15.js:1750 [S15] 🎯 TGT S03 CLIMATE READ: h_23=18, d_23=-24, d_24=30, h_24=24
4011-StateManager.js:343 [StateManager] 🎯 h_10 setValue: "106.78737191967348" (state: calculated)
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
updateTargetModelDOMValues @ 4011-Section13.js:3687
calculateTargetModel @ 4011-Section13.js:3573
calculateAll @ 4011-Section13.js:3406
calculateAndRefresh @ 4011-Section13.js:2368
(anonymous) @ 4011-StateManager.js:543
notifyListeners @ 4011-StateManager.js:541
setValue @ 4011-StateManager.js:419
(anonymous) @ 4011-Section03.js:1689
calculateTargetModel @ 4011-Section03.js:1686
calculateAll @ 4011-Section03.js:1665
(anonymous) @ 4011-Section03.js:2057
4011-Section15.js:1750 [S15] 🎯 TGT S03 CLIMATE READ: h_23=18, d_23=-24, d_24=30, h_24=24
4011-StateManager.js:343 [StateManager] 🎯 h_10 setValue: "106.78737191967348" (state: calculated)
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
updateTargetModelDOMValues @ 4011-Section13.js:3687
calculateTargetModel @ 4011-Section13.js:3573
calculateAll @ 4011-Section13.js:3406
calculateAndRefresh @ 4011-Section13.js:2368
(anonymous) @ 4011-StateManager.js:543
notifyListeners @ 4011-StateManager.js:541
setValue @ 4011-StateManager.js:419
(anonymous) @ 4011-Section03.js:1689
calculateTargetModel @ 4011-Section03.js:1686
calculateAll @ 4011-Section03.js:1665
(anonymous) @ 4011-Section03.js:2057
4011-Section13.js:3591 [Section13] Target Model calculations complete
4011-Section13.js:3407 [Section13] ✅ Target Model complete
4011-Section13.js:3434 [Section13] ⏭️ Skipping Reference value re-write - triggered in target mode
4011-Section13.js:3440 [Section13] 🎉 DUAL-ENGINE CALCULATIONS COMPLETE
4011-Section13.js:252 [Section13] 🔄 Updating calculated display values for target mode
4011-Section13.js:336 [Section13] Calculated display values updated for target mode
4011-Section03.js:1693 [STALE] S03 TARGET PUB: d_20=7100 → StateManager has d_20=7100
4011-Section11.js:1687 [S11] calculateAll TRIGGERED. isReferenceMode: false
4011-Section11.js:1132 [S11] 🔵 REF CLIMATE READ: d_20=4600
4011-Section11.js:1136 [S11] 🔵 REF CLIMATE READ: d_21=196
4011-Section11.js:1132 [S11] 🔵 REF CLIMATE READ: d_20=4600
4011-Section11.js:1136 [S11] 🔵 REF CLIMATE READ: d_21=196
4011-Section11.js:1132 [S11] 🔵 REF CLIMATE READ: d_20=4600
4011-Section11.js:1136 [S11] 🔵 REF CLIMATE READ: d_21=196
4011-Section11.js:1132 [S11] 🔵 REF CLIMATE READ: d_20=4600
4011-Section11.js:1136 [S11] 🔵 REF CLIMATE READ: d_21=196
4011-Section11.js:1132 [S11] 🔵 REF CLIMATE READ: d_20=4600
4011-Section11.js:1136 [S11] 🔵 REF CLIMATE READ: d_21=196
4011-Section11.js:1132 [S11] 🔵 REF CLIMATE READ: d_20=4600
4011-Section11.js:1136 [S11] 🔵 REF CLIMATE READ: d_21=196
4011-Section11.js:1132 [S11] 🔵 REF CLIMATE READ: d_20=4600
4011-Section11.js:1136 [S11] 🔵 REF CLIMATE READ: d_21=196
4011-Section11.js:1132 [S11] 🔵 REF CLIMATE READ: d_20=4600
4011-Section11.js:1136 [S11] 🔵 REF CLIMATE READ: d_21=196
4011-Section11.js:1132 [S11] 🔵 REF CLIMATE READ: d_20=4600
4011-Section11.js:1136 [S11] 🔵 REF CLIMATE READ: d_21=196
4011-Section11.js:1166 [S11] 🔵 REF CLIMATE READ: d_22=1960
4011-Section11.js:1184 [S11] 🔵 REF CLIMATE READ: h_22=-1680
4011-Section11.js:1166 [S11] 🔵 REF CLIMATE READ: d_22=1960
4011-Section11.js:1184 [S11] 🔵 REF CLIMATE READ: h_22=-1680
4011-Section11.js:1256 [S11] REF TB%=50% → ref_i_97=59532.29, ref_k_97=-947.70
4011-Section11.js:1434 [S11] Writing ref penalty: ref_i_97=59532.29, ref_k_97=-947.70
4011-Section11.js:1145 [S11] 🎯 TGT CLIMATE READ: d_20=7100
4011-Section11.js:1149 [S11] 🎯 TGT CLIMATE READ: d_21=0
4011-Section11.js:1145 [S11] 🎯 TGT CLIMATE READ: d_20=7100
4011-Section11.js:1149 [S11] 🎯 TGT CLIMATE READ: d_21=0
4011-Section11.js:1145 [S11] 🎯 TGT CLIMATE READ: d_20=7100
4011-Section11.js:1149 [S11] 🎯 TGT CLIMATE READ: d_21=0
4011-Section11.js:1145 [S11] 🎯 TGT CLIMATE READ: d_20=7100
4011-Section11.js:1149 [S11] 🎯 TGT CLIMATE READ: d_21=0
4011-Section11.js:1145 [S11] 🎯 TGT CLIMATE READ: d_20=7100
4011-Section11.js:1149 [S11] 🎯 TGT CLIMATE READ: d_21=0
4011-Section11.js:1145 [S11] 🎯 TGT CLIMATE READ: d_20=7100
4011-Section11.js:1149 [S11] 🎯 TGT CLIMATE READ: d_21=0
4011-Section11.js:1145 [S11] 🎯 TGT CLIMATE READ: d_20=7100
4011-Section11.js:1149 [S11] 🎯 TGT CLIMATE READ: d_21=0
4011-Section11.js:1145 [S11] 🎯 TGT CLIMATE READ: d_20=7100
4011-Section11.js:1149 [S11] 🎯 TGT CLIMATE READ: d_21=0
4011-Section11.js:1145 [S11] 🎯 TGT CLIMATE READ: d_20=7100
4011-Section11.js:1149 [S11] 🎯 TGT CLIMATE READ: d_21=0
24011-Section11.js:1189 [S11] 🎯 TGT CLIMATE READ: h_22=-1680
4011-Section15.js:1750 [S15] 🎯 TGT S03 CLIMATE READ: h_23=18, d_23=-24, d_24=30, h_24=24
4011-StateManager.js:343 [StateManager] 🎯 h_10 setValue: "106.78737191967348" (state: calculated)
4011-StateManager.js:346 [StateManager] h_10 setValue stack trace:
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
calculateTargetModel @ 4011-Section11.js:1584
calculateAll @ 4011-Section11.js:1693
(anonymous) @ 4011-StateManager.js:543
notifyListeners @ 4011-StateManager.js:541
setValue @ 4011-StateManager.js:419
(anonymous) @ 4011-Section03.js:1689
calculateTargetModel @ 4011-Section03.js:1686
calculateAll @ 4011-Section03.js:1665
(anonymous) @ 4011-Section03.js:2057
4011-Section15.js:1750 [S15] 🎯 TGT S03 CLIMATE READ: h_23=18, d_23=-24, d_24=30, h_24=24
4011-StateManager.js:343 [StateManager] 🎯 h_10 setValue: "106.78737191967348" (state: calculated)
4011-StateManager.js:346 [StateManager] h_10 setValue stack trace:
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
calculateTargetModel @ 4011-Section11.js:1584
calculateAll @ 4011-Section11.js:1693
(anonymous) @ 4011-StateManager.js:543
notifyListeners @ 4011-StateManager.js:541
setValue @ 4011-StateManager.js:419
(anonymous) @ 4011-Section03.js:1689
calculateTargetModel @ 4011-Section03.js:1686
calculateAll @ 4011-Section03.js:1665
(anonymous) @ 4011-Section03.js:2057
4011-Section13.js:3389 [Section13] 🚀 CALCULATEALL TRIGGERED - Running dual-engine calculations...
4011-Section13.js:3395 [Section13] 🎯 Mode captured at calculation start: target
4011-Section13.js:3401 [Section13] 🔄 Starting Reference Model calculations...
4011-Section13.js:721 🔍 [S13-CONTEXT] Creating reference context: g_118="Volume Constant" from ReferenceState
4011-Section13.js:723 🔍 [S13-CONTEXT] ReferenceState.g_118="Volume Constant", TargetState.g_118="Volume by Schedule"
4011-Section13.js:3457 [Section13] Running Reference Model calculations...
4011-Section13.js:3471 [S13 CONTAMINATION DEBUG] calculateReferenceModel: Using system type = Electricity
4011-Section13.js:2873 [S13] REF HEATING: system=Electricity, ted=297371.1974742337, afue=0.9, cop=1
4011-Section13.js:2879 [S13 REF DEBUG] About to calculate with heating system: Electricity
4011-Section13.js:2882 [S13 REF DEBUG] Will S13 publish ref_d_113=Electricity?
4011-Section13.js:3099 🔍 [S13-VENT] calculateVentilationRates: ventMethod="Volume Constant", ach(l_118)=3.5, ratePerPerson(d_119)=8.33, volume(d_105)=8000
4011-Section13.js:3102 🔍 [S13-VENT] isReferenceCalculation=true, hasContext=true
4011-Section13.js:3110 🔍 [S13-VENT] calculateVentilationValues: ventMethod="Volume Constant", ach(l_118)=3.5, ratePerPerson(d_119)=8.33, volume(d_105)=8000
4011-Section13.js:3113 🔍 [S13-VENT] Supporting values: occupants(d_63)=126, occupiedHours(i_63)=4380, totalHours(j_63)=8760
4011-Section13.js:3133 🔍 [S13-VENT] Volume Constant calculation: ventRateLs = (3.5 * 8000) / 3.6 = 7777.777777777777
4011-Section13.js:3145 ✅ [S13-VENT] Final d_120 result: 7777.777777777777 L/s (from method="Volume Constant", ach=3.5, volume=8000)
4011-Section13.js:2977 [Section13] 🧊 COOLING CALC: mode=REF, coolingSystemType="No Cooling", heatingType="Electricity", isCoolingActive=false, coolingDemand=7684.481867650151
4011-Section13.js:3737 [S13 CONTAMINATION DEBUG] storeReferenceResults called during reference mode
4011-Section13.js:3740 [S13 CONTAMINATION DEBUG] Reference heating system: Electricity
4011-Section13.js:3743 [S13 CONTAMINATION DEBUG] Target heating system: Heatpump
4011-Section13.js:3746 [S13 CONTAMINATION DEBUG] Reference h_115 (gas volume): 0
4011-Section13.js:3749 [S13 CONTAMINATION DEBUG] Reference f_115 (oil volume): 0
4011-Section13.js:3761 [S13 CONTAMINATION DEBUG] Writing ref_f_115 = 0
4011-Section13.js:3761 [S13 CONTAMINATION DEBUG] Writing ref_h_115 = 0
24011-Section14.js:1416 [S14 LISTENER] 🔥 ref_d_122 changed - triggering calculateAll() + UI update
4011-Section15.js:1750 [S15] 🎯 TGT S03 CLIMATE READ: h_23=18, d_23=-24, d_24=30, h_24=24
4011-StateManager.js:343 [StateManager] 🎯 h_10 setValue: "106.78737191967348" (state: calculated)
4011-StateManager.js:346 [StateManager] h_10 setValue stack trace:
setValue @ 4011-StateManager.js:346
calculateValues @ 4011-Section15.js:1832
calculateTargetModel @ 4011-Section15.js:1662
calculateAll @ 4011-Section15.js:1328
(anonymous) @ 4011-Section15.js:2121
(anonymous) @ 4011-StateManager.js:543
notifyListeners @ 4011-StateManager.js:541
setValue @ 4011-StateManager.js:419
(anonymous) @ 4011-Section13.js:3765
storeReferenceResults @ 4011-Section13.js:3757
calculateReferenceModel @ 4011-Section13.js:3504
calculateAll @ 4011-Section13.js:3402
calculateAndRefresh @ 4011-Section13.js:2368
(anonymous) @ 4011-StateManager.js:543
notifyListeners @ 4011-StateManager.js:541
setValue @ 4011-StateManager.js:419
(anonymous) @ 4011-Section03.js:1689
calculateTargetModel @ 4011-Section03.js:1686
calculateAll @ 4011-Section03.js:1665
(anonymous) @ 4011-Section03.js:2057
4011-Section15.js:1750 [S15] 🎯 TGT S03 CLIMATE READ: h_23=18, d_23=-24, d_24=30, h_24=24
4011-StateManager.js:343 [StateManager] 🎯 h_10 setValue: "106.78737191967348" (state: calculated)
4011-StateManager.js:346 [StateManager] h_10 setValue stack trace:
setValue @ 4011-StateManager.js:346
calculateValues @ 4011-Section15.js:1832
calculateTargetModel @ 4011-Section15.js:1662
calculateAll @ 4011-Section15.js:1328
(anonymous) @ 4011-Section15.js:2121
(anonymous) @ 4011-StateManager.js:543
notifyListeners @ 4011-StateManager.js:541
setValue @ 4011-StateManager.js:419
(anonymous) @ 4011-Section13.js:3765
storeReferenceResults @ 4011-Section13.js:3757
calculateReferenceModel @ 4011-Section13.js:3504
calculateAll @ 4011-Section13.js:3402
calculateAndRefresh @ 4011-Section13.js:2368
(anonymous) @ 4011-StateManager.js:543
notifyListeners @ 4011-StateManager.js:541
setValue @ 4011-StateManager.js:419
(anonymous) @ 4011-Section03.js:1689
calculateTargetModel @ 4011-Section03.js:1686
calculateAll @ 4011-Section03.js:1665
(anonymous) @ 4011-Section03.js:2057
4011-Section15.js:1750 [S15] 🎯 TGT S03 CLIMATE READ: h_23=18, d_23=-24, d_24=30, h_24=24
4011-StateManager.js:343 [StateManager] 🎯 h_10 setValue: "106.78737191967348" (state: calculated)
4011-StateManager.js:346 [StateManager] h_10 setValue stack trace:
setValue @ 4011-StateManager.js:346
calculateValues @ 4011-Section15.js:1832
calculateTargetModel @ 4011-Section15.js:1662
calculateAll @ 4011-Section15.js:1328
(anonymous) @ 4011-Section15.js:2121
(anonymous) @ 4011-StateManager.js:543
notifyListeners @ 4011-StateManager.js:541
setValue @ 4011-StateManager.js:419
(anonymous) @ 4011-Section13.js:3765
storeReferenceResults @ 4011-Section13.js:3757
calculateReferenceModel @ 4011-Section13.js:3504
calculateAll @ 4011-Section13.js:3402
calculateAndRefresh @ 4011-Section13.js:2368
(anonymous) @ 4011-StateManager.js:543
notifyListeners @ 4011-StateManager.js:541
setValue @ 4011-StateManager.js:419
(anonymous) @ 4011-Section03.js:1689
calculateTargetModel @ 4011-Section03.js:1686
calculateAll @ 4011-Section03.js:1665
(anonymous) @ 4011-Section03.js:2057
4011-Section15.js:1750 [S15] 🎯 TGT S03 CLIMATE READ: h_23=18, d_23=-24, d_24=30, h_24=24
4011-StateManager.js:343 [StateManager] 🎯 h_10 setValue: "106.78737191967348" (state: calculated)
4011-StateManager.js:346 [StateManager] h_10 setValue stack trace:
setValue @ 4011-StateManager.js:346
calculateValues @ 4011-Section15.js:1832
calculateTargetModel @ 4011-Section15.js:1662
calculateAll @ 4011-Section15.js:1328
(anonymous) @ 4011-Section15.js:2121
(anonymous) @ 4011-StateManager.js:543
notifyListeners @ 4011-StateManager.js:541
setValue @ 4011-StateManager.js:419
(anonymous) @ 4011-Section13.js:3765
storeReferenceResults @ 4011-Section13.js:3757
calculateReferenceModel @ 4011-Section13.js:3504
calculateAll @ 4011-Section13.js:3402
calculateAndRefresh @ 4011-Section13.js:2368
(anonymous) @ 4011-StateManager.js:543
notifyListeners @ 4011-StateManager.js:541
setValue @ 4011-StateManager.js:419
(anonymous) @ 4011-Section03.js:1689
calculateTargetModel @ 4011-Section03.js:1686
calculateAll @ 4011-Section03.js:1665
(anonymous) @ 4011-Section03.js:2057
4011-Section13.js:3773 [Section13] Reference results stored with ref_ prefix for downstream sections
4011-Section13.js:3776 [S13 DEBUG] Total Reference results stored: 34
4011-Section13.js:3515 [Section13] Reference Model calculations complete
4011-Section13.js:3403 [Section13] ✅ Reference Model complete
4011-Section13.js:3405 [Section13] 🔄 Starting Target Model calculations...
4011-Section13.js:721 🔍 [S13-CONTEXT] Creating target context: g_118="Volume by Schedule" from TargetState
4011-Section13.js:725 🔍 [S13-CONTEXT] TargetState.g_118="Volume by Schedule", ReferenceState.g_118="Volume Constant"
4011-Section13.js:3536 [Section13] Running Target Model calculations...
4011-Section13.js:2873 [S13] TGT HEATING: system=Heatpump, ted=188752.50983613706, afue=0.98, cop=3.663540445486518
4011-Section13.js:3099 🔍 [S13-VENT] calculateVentilationRates: ventMethod="Volume by Schedule", ach(l_118)=3, ratePerPerson(d_119)=14, volume(d_105)=8000
4011-Section13.js:3102 🔍 [S13-VENT] isReferenceCalculation=false, hasContext=true
4011-Section13.js:3110 🔍 [S13-VENT] calculateVentilationValues: ventMethod="Volume by Schedule", ach(l_118)=3, ratePerPerson(d_119)=14, volume(d_105)=8000
4011-Section13.js:3113 🔍 [S13-VENT] Supporting values: occupants(d_63)=126, occupiedHours(i_63)=4380, totalHours(j_63)=8760
4011-Section13.js:3145 ✅ [S13-VENT] Final d_120 result: 3333.333333333333 L/s (from method="Volume by Schedule", ach=3, volume=8000)
24011-Section14.js:1416 [S14 LISTENER] 🔥 d_122 changed - triggering calculateAll() + UI update
4011-Section15.js:1750 [S15] 🎯 TGT S03 CLIMATE READ: h_23=18, d_23=-24, d_24=30, h_24=24
4011-StateManager.js:343 [StateManager] 🎯 h_10 setValue: "106.78737191967348" (state: calculated)
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
calculateCoolingVentilation @ 4011-Section13.js:3275
calculateTargetModel @ 4011-Section13.js:3556
calculateAll @ 4011-Section13.js:3406
calculateAndRefresh @ 4011-Section13.js:2368
(anonymous) @ 4011-StateManager.js:543
notifyListeners @ 4011-StateManager.js:541
setValue @ 4011-StateManager.js:419
(anonymous) @ 4011-Section03.js:1689
calculateTargetModel @ 4011-Section03.js:1686
calculateAll @ 4011-Section03.js:1665
(anonymous) @ 4011-Section03.js:2057
4011-Section15.js:1750 [S15] 🎯 TGT S03 CLIMATE READ: h_23=18, d_23=-24, d_24=30, h_24=24
4011-StateManager.js:343 [StateManager] 🎯 h_10 setValue: "106.78737191967348" (state: calculated)
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
calculateCoolingVentilation @ 4011-Section13.js:3275
calculateTargetModel @ 4011-Section13.js:3556
calculateAll @ 4011-Section13.js:3406
calculateAndRefresh @ 4011-Section13.js:2368
(anonymous) @ 4011-StateManager.js:543
notifyListeners @ 4011-StateManager.js:541
setValue @ 4011-StateManager.js:419
(anonymous) @ 4011-Section03.js:1689
calculateTargetModel @ 4011-Section03.js:1686
calculateAll @ 4011-Section03.js:1665
(anonymous) @ 4011-Section03.js:2057
4011-Section13.js:2977 [Section13] 🧊 COOLING CALC: mode=TGT, coolingSystemType="Cooling", heatingType="Heatpump", isCoolingActive=true, coolingDemand=6020.32656805405
4011-Section15.js:1750 [S15] 🎯 TGT S03 CLIMATE READ: h_23=18, d_23=-24, d_24=30, h_24=24
4011-Section04.js:2482 [S04] S15 target electricity changed: d_136
4011-Section04.js:1577 [S04] Starting dual-engine Excel-compliant calculations
4011-Section04.js:1018 [S04] Row 32 Subtotals - F32: 132938, G32: 6779.838, J32: 151000.6373395155, K32: 7701.032504315291
4011-Section04.js:94 [S04] j_32 update: 151000.6373395155
4011-Section01.js:1250 [S01] j_32 listener: 152406.937203758 → 151000.6373395155
4011-Section01.js:1251 [S01] 🕐 j_32 listener timing: StateManager current j_32 = 151000.6373395155
24011-Section05.js:266 🔄 [S05] updateCalculatedDisplayValues: mode=target
4011-Section15.js:1750 [S15] 🎯 TGT S03 CLIMATE READ: h_23=18, d_23=-24, d_24=30, h_24=24
4011-StateManager.js:343 [StateManager] 🎯 h_10 setValue: "105.80201607309101" (state: calculated)
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
calculateCoolingSystem @ 4011-Section13.js:3033
calculateTargetModel @ 4011-Section13.js:3563
calculateAll @ 4011-Section13.js:3406
calculateAndRefresh @ 4011-Section13.js:2368
(anonymous) @ 4011-StateManager.js:543
notifyListeners @ 4011-StateManager.js:541
setValue @ 4011-StateManager.js:419
(anonymous) @ 4011-Section03.js:1689
calculateTargetModel @ 4011-Section03.js:1686
calculateAll @ 4011-Section03.js:1665
(anonymous) @ 4011-Section03.js:2057
4011-Section15.js:1750 [S15] 🎯 TGT S03 CLIMATE READ: h_23=18, d_23=-24, d_24=30, h_24=24
4011-StateManager.js:343 [StateManager] 🎯 h_10 setValue: "105.80201607309101" (state: calculated)
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
calculateCoolingSystem @ 4011-Section13.js:3033
calculateTargetModel @ 4011-Section13.js:3563
calculateAll @ 4011-Section13.js:3406
calculateAndRefresh @ 4011-Section13.js:2368
(anonymous) @ 4011-StateManager.js:543
notifyListeners @ 4011-StateManager.js:541
setValue @ 4011-StateManager.js:419
(anonymous) @ 4011-Section03.js:1689
calculateTargetModel @ 4011-Section03.js:1686
calculateAll @ 4011-Section03.js:1665
(anonymous) @ 4011-Section03.js:2057
4011-Section15.js:1750 [S15] 🎯 TGT S03 CLIMATE READ: h_23=18, d_23=-24, d_24=30, h_24=24
4011-StateManager.js:343 [StateManager] 🎯 h_10 setValue: "105.80201607309101" (state: calculated)
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
calculateCoolingSystem @ 4011-Section13.js:3033
calculateTargetModel @ 4011-Section13.js:3563
calculateAll @ 4011-Section13.js:3406
calculateAndRefresh @ 4011-Section13.js:2368
(anonymous) @ 4011-StateManager.js:543
notifyListeners @ 4011-StateManager.js:541
setValue @ 4011-StateManager.js:419
(anonymous) @ 4011-Section03.js:1689
calculateTargetModel @ 4011-Section03.js:1686
calculateAll @ 4011-Section03.js:1665
(anonymous) @ 4011-Section03.js:2057
4011-Section15.js:1750 [S15] 🎯 TGT S03 CLIMATE READ: h_23=18, d_23=-24, d_24=30, h_24=24
4011-StateManager.js:343 [StateManager] 🎯 h_10 setValue: "105.80201607309101" (state: calculated)
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
calculateCoolingSystem @ 4011-Section13.js:3033
calculateTargetModel @ 4011-Section13.js:3563
calculateAll @ 4011-Section13.js:3406
calculateAndRefresh @ 4011-Section13.js:2368
(anonymous) @ 4011-StateManager.js:543
notifyListeners @ 4011-StateManager.js:541
setValue @ 4011-StateManager.js:419
(anonymous) @ 4011-Section03.js:1689
calculateTargetModel @ 4011-Section03.js:1686
calculateAll @ 4011-Section03.js:1665
(anonymous) @ 4011-Section03.js:2057
4011-Section04.js:1018 [S04] Row 32 Subtotals - F32: 132938, G32: 6779.838, J32: 347966.051518286, K32: 17746.268627432586
4011-Section04.js:1668 [S04] Reference model calculations complete
4011-Section04.js:1674 [S04DB] storeReference: ref_j_32=347966.051518286, ref_k_32=17746.268627432586 | current target j_32=151000.6373395155, k_32=7701.032504315291
4011-Section04.js:493 [S04] 🔄 Updating calculated display values for target mode
4011-Section04.js:501 [S04DB] displayContext mode=target j_32=151000.6373395155 ref_j_32=347966.051518286 k_32=7701.032504315291 ref_k_32=17746.268627432586
4011-Section04.js:582 [S04 DEBUG] Target mode - j_32: 151000.6373395155
4011-Section04.js:582 [S04 DEBUG] Target mode - k_32: 7701.032504315291
4011-Section04.js:582 [S04 DEBUG] Target mode - l_27: 51
4011-Section04.js:617 [S04] Calculated display values updated for target mode
4011-Section04.js:1599 [S04] Dual-engine calculations completed successfully
4011-Section04.js:493 [S04] 🔄 Updating calculated display values for target mode
4011-Section04.js:501 [S04DB] displayContext mode=target j_32=151000.6373395155 ref_j_32=347966.051518286 k_32=7701.032504315291 ref_k_32=17746.268627432586
4011-Section04.js:582 [S04 DEBUG] Target mode - j_32: 151000.6373395155
4011-Section04.js:582 [S04 DEBUG] Target mode - k_32: 7701.032504315291
4011-Section04.js:582 [S04 DEBUG] Target mode - l_27: 51
4011-Section04.js:617 [S04] Calculated display values updated for target mode
4011-StateManager.js:343 [StateManager] 🎯 h_10 setValue: "105.80201607309101" (state: calculated)
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
calculateCoolingSystem @ 4011-Section13.js:3033
calculateTargetModel @ 4011-Section13.js:3563
calculateAll @ 4011-Section13.js:3406
calculateAndRefresh @ 4011-Section13.js:2368
(anonymous) @ 4011-StateManager.js:543
notifyListeners @ 4011-StateManager.js:541
setValue @ 4011-StateManager.js:419
(anonymous) @ 4011-Section03.js:1689
calculateTargetModel @ 4011-Section03.js:1686
calculateAll @ 4011-Section03.js:1665
(anonymous) @ 4011-Section03.js:2057
4011-Section15.js:1750 [S15] 🎯 TGT S03 CLIMATE READ: h_23=18, d_23=-24, d_24=30, h_24=24
4011-StateManager.js:343 [StateManager] 🎯 h_10 setValue: "105.80201607309101" (state: calculated)
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
calculateCoolingSystem @ 4011-Section13.js:3033
calculateTargetModel @ 4011-Section13.js:3563
calculateAll @ 4011-Section13.js:3406
calculateAndRefresh @ 4011-Section13.js:2368
(anonymous) @ 4011-StateManager.js:543
notifyListeners @ 4011-StateManager.js:541
setValue @ 4011-StateManager.js:419
(anonymous) @ 4011-Section03.js:1689
calculateTargetModel @ 4011-Section03.js:1686
calculateAll @ 4011-Section03.js:1665
(anonymous) @ 4011-Section03.js:2057
4011-Section13.js:3039 [Section13] 🧊 COOLING RESULTS: d_117=2260.272254643532, j_116=2.663540445486518, l_116=0, l_114=3760.0543134105183
4011-Section13.js:3591 [Section13] Target Model calculations complete
4011-Section13.js:3407 [Section13] ✅ Target Model complete
4011-Section13.js:3434 [Section13] ⏭️ Skipping Reference value re-write - triggered in target mode
4011-Section13.js:3440 [Section13] 🎉 DUAL-ENGINE CALCULATIONS COMPLETE
4011-Section13.js:252 [Section13] 🔄 Updating calculated display values for target mode
4011-Section13.js:336 [Section13] Calculated display values updated for target mode
4011-Section13.js:3389 [Section13] 🚀 CALCULATEALL TRIGGERED - Running dual-engine calculations...
4011-Section13.js:3395 [Section13] 🎯 Mode captured at calculation start: target
4011-Section13.js:3401 [Section13] 🔄 Starting Reference Model calculations...
4011-Section13.js:721 🔍 [S13-CONTEXT] Creating reference context: g_118="Volume Constant" from ReferenceState
4011-Section13.js:723 🔍 [S13-CONTEXT] ReferenceState.g_118="Volume Constant", TargetState.g_118="Volume by Schedule"
4011-Section13.js:3457 [Section13] Running Reference Model calculations...
4011-Section13.js:3471 [S13 CONTAMINATION DEBUG] calculateReferenceModel: Using system type = Electricity
4011-Section13.js:2873 [S13] REF HEATING: system=Electricity, ted=297371.1974742337, afue=0.9, cop=1
4011-Section13.js:2879 [S13 REF DEBUG] About to calculate with heating system: Electricity
4011-Section13.js:2882 [S13 REF DEBUG] Will S13 publish ref_d_113=Electricity?
4011-Section13.js:3099 🔍 [S13-VENT] calculateVentilationRates: ventMethod="Volume Constant", ach(l_118)=3.5, ratePerPerson(d_119)=8.33, volume(d_105)=8000
4011-Section13.js:3102 🔍 [S13-VENT] isReferenceCalculation=true, hasContext=true
4011-Section13.js:3110 🔍 [S13-VENT] calculateVentilationValues: ventMethod="Volume Constant", ach(l_118)=3.5, ratePerPerson(d_119)=8.33, volume(d_105)=8000
4011-Section13.js:3113 🔍 [S13-VENT] Supporting values: occupants(d_63)=126, occupiedHours(i_63)=4380, totalHours(j_63)=8760
4011-Section13.js:3133 🔍 [S13-VENT] Volume Constant calculation: ventRateLs = (3.5 * 8000) / 3.6 = 7777.777777777777
4011-Section13.js:3145 ✅ [S13-VENT] Final d_120 result: 7777.777777777777 L/s (from method="Volume Constant", ach=3.5, volume=8000)
4011-Section13.js:2977 [Section13] 🧊 COOLING CALC: mode=REF, coolingSystemType="No Cooling", heatingType="Electricity", isCoolingActive=false, coolingDemand=6020.32656805405
4011-Section13.js:3737 [S13 CONTAMINATION DEBUG] storeReferenceResults called during reference mode
4011-Section13.js:3740 [S13 CONTAMINATION DEBUG] Reference heating system: Electricity
4011-Section13.js:3743 [S13 CONTAMINATION DEBUG] Target heating system: Heatpump
4011-Section13.js:3746 [S13 CONTAMINATION DEBUG] Reference h_115 (gas volume): 0
4011-Section13.js:3749 [S13 CONTAMINATION DEBUG] Reference f_115 (oil volume): 0
4011-Section13.js:3761 [S13 CONTAMINATION DEBUG] Writing ref_f_115 = 0
4011-Section13.js:3761 [S13 CONTAMINATION DEBUG] Writing ref_h_115 = 0
4011-Section13.js:3773 [Section13] Reference results stored with ref_ prefix for downstream sections
4011-Section13.js:3776 [S13 DEBUG] Total Reference results stored: 34
4011-Section13.js:3515 [Section13] Reference Model calculations complete
4011-Section13.js:3403 [Section13] ✅ Reference Model complete
4011-Section13.js:3405 [Section13] 🔄 Starting Target Model calculations...
4011-Section13.js:721 🔍 [S13-CONTEXT] Creating target context: g_118="Volume by Schedule" from TargetState
4011-Section13.js:725 🔍 [S13-CONTEXT] TargetState.g_118="Volume by Schedule", ReferenceState.g_118="Volume Constant"
4011-Section13.js:3536 [Section13] Running Target Model calculations...
4011-Section13.js:2873 [S13] TGT HEATING: system=Heatpump, ted=188752.50983613706, afue=0.98, cop=3.663540445486518
4011-Section13.js:3099 🔍 [S13-VENT] calculateVentilationRates: ventMethod="Volume by Schedule", ach(l_118)=3, ratePerPerson(d_119)=14, volume(d_105)=8000
4011-Section13.js:3102 🔍 [S13-VENT] isReferenceCalculation=false, hasContext=true
4011-Section13.js:3110 🔍 [S13-VENT] calculateVentilationValues: ventMethod="Volume by Schedule", ach(l_118)=3, ratePerPerson(d_119)=14, volume(d_105)=8000
4011-Section13.js:3113 🔍 [S13-VENT] Supporting values: occupants(d_63)=126, occupiedHours(i_63)=4380, totalHours(j_63)=8760
4011-Section13.js:3145 ✅ [S13-VENT] Final d_120 result: 3333.333333333333 L/s (from method="Volume by Schedule", ach=3, volume=8000)
4011-Section13.js:2977 [Section13] 🧊 COOLING CALC: mode=TGT, coolingSystemType="Cooling", heatingType="Heatpump", isCoolingActive=true, coolingDemand=6020.32656805405
4011-Section13.js:3039 [Section13] 🧊 COOLING RESULTS: d_117=2260.272254643532, j_116=2.663540445486518, l_116=0, l_114=3760.0543134105183
4011-Section13.js:3591 [Section13] Target Model calculations complete
4011-Section13.js:3407 [Section13] ✅ Target Model complete
4011-Section13.js:3434 [Section13] ⏭️ Skipping Reference value re-write - triggered in target mode
4011-Section13.js:3440 [Section13] 🎉 DUAL-ENGINE CALCULATIONS COMPLETE
4011-Section13.js:252 [Section13] 🔄 Updating calculated display values for target mode
4011-Section13.js:336 [Section13] Calculated display values updated for target mode
4011-Section03.js:1693 [STALE] S03 TARGET PUB: d_21=N/A → StateManager has d_21=N/A
4011-Section10.js:2667 S10: Target listener triggered by j_19, recalculating all.
4011-Section10.js:1819 [S10 DEBUG] calculateAll() triggered in target mode - running both engines
4011-Section10.js:2040 [S10REF] Utilization calc: ref_i_71=110562.1692, ref_i_79=10060.174319999998, totalGains=120622.34352
4011-Section10.js:2054 [S10REF] Using utilization method: NRC 40%
4011-Section10.js:2091 [S10REF] Final calc: utilizationFactor=0.4, usableGains=48248.937408
4011-Section10.js:2134 [S10REF] Complete: g_80=0.4, g_81=0.9966231765247549, i_80=48248.937408, i_81=120215.02315876257
4011-Section10.js:1827 [S10 DEBUG] Dual-engine calculations complete in target mode
4011-Section10.js:341 [S10DISPLAY] updateCalculatedDisplayValues() called in target mode
4011-Section10.js:448 [S10DISPLAY] Display (target) m_73 = 24.84
4011-Section10.js:448 [S10DISPLAY] Display (target) m_74 = 0.19
4011-Section10.js:448 [S10DISPLAY] Display (target) m_75 = 2.09
4011-Section10.js:448 [S10DISPLAY] Display (target) m_76 = 24.76
4011-Section10.js:448 [S10DISPLAY] Display (target) m_77 = 64.37
4011-Section10.js:448 [S10DISPLAY] Display (target) m_78 = 25.00
4011-Section10.js:448 [S10DISPLAY] Display (target) i_73 = 186.30
4011-Section10.js:448 [S10DISPLAY] Display (target) i_74 = 15.42
4011-Section10.js:448 [S10DISPLAY] Display (target) i_75 = 8.00
4011-Section10.js:448 [S10DISPLAY] Display (target) i_76 = 3,936.84
4011-Section10.js:448 [S10DISPLAY] Display (target) i_77 = 6,479.48
4011-Section10.js:448 [S10DISPLAY] Display (target) i_78 = 0.00
4011-Section10.js:448 [S10DISPLAY] Display (target) i_79 = 10,626.05
4011-Section10.js:448 [S10DISPLAY] Display (target) k_73 = 0.00
4011-Section10.js:448 [S10DISPLAY] Display (target) k_74 = 0.00
4011-Section10.js:448 [S10DISPLAY] Display (target) k_75 = 0.00
4011-Section10.js:448 [S10DISPLAY] Display (target) k_76 = 0.00
4011-Section10.js:448 [S10DISPLAY] Display (target) k_77 = 323.97
4011-Section10.js:448 [S10DISPLAY] Display (target) k_78 = 0.00
4011-Section10.js:448 [S10DISPLAY] Display (target) k_79 = 323.97
4011-Section10.js:448 [S10DISPLAY] Display (target) j_73 = 1.75%
4011-Section10.js:448 [S10DISPLAY] Display (target) j_74 = 0.15%
4011-Section10.js:448 [S10DISPLAY] Display (target) j_75 = 0.08%
4011-Section10.js:448 [S10DISPLAY] Display (target) j_76 = 37.05%
4011-Section10.js:448 [S10DISPLAY] Display (target) j_77 = 60.98%
4011-Section10.js:448 [S10DISPLAY] Display (target) j_78 = 0.00%
4011-Section10.js:448 [S10DISPLAY] Display (target) j_79 = 100.00%
4011-Section10.js:448 [S10DISPLAY] Display (target) l_73 = 0.00%
4011-Section10.js:448 [S10DISPLAY] Display (target) l_74 = 0.00%
4011-Section10.js:448 [S10DISPLAY] Display (target) l_75 = 0.00%
4011-Section10.js:448 [S10DISPLAY] Display (target) l_76 = 0.00%
4011-Section10.js:448 [S10DISPLAY] Display (target) l_77 = 100.00%
4011-Section10.js:448 [S10DISPLAY] Display (target) l_78 = 0.00%
4011-Section10.js:448 [S10DISPLAY] Display (target) l_79 = 100.00%
4011-Section10.js:448 [S10DISPLAY] Display (target) e_80 = 110,698.29
4011-Section10.js:448 [S10DISPLAY] Display (target) e_81 = 110,698.29
4011-Section10.js:415 [S10DISPLAY] g_80 DEBUG: mode=target, valueToDisplay=0.4
4011-Section10.js:448 [S10DISPLAY] Display (target) g_80 = 40.00%
4011-Section10.js:448 [S10DISPLAY] Display (target) g_81 = 98.72%
4011-Section10.js:448 [S10DISPLAY] Display (target) i_80 = 44,279.32
4011-Section10.js:448 [S10DISPLAY] Display (target) i_81 = 109,276.23
4011-Section10.js:448 [S10DISPLAY] Display (target) i_82 = 66,418.98
4011-Section15.js:1750 [S15] 🎯 TGT S03 CLIMATE READ: h_23=18, d_23=-24, d_24=30, h_24=24
4011-StateManager.js:343 [StateManager] 🎯 h_10 setValue: "105.80201607309101" (state: calculated)
4011-StateManager.js:346 [StateManager] h_10 setValue stack trace:
setValue @ 4011-StateManager.js:346
calculateValues @ 4011-Section15.js:1832
calculateTargetModel @ 4011-Section15.js:1662
calculateAll @ 4011-Section15.js:1328
(anonymous) @ 4011-Section15.js:2121
(anonymous) @ 4011-StateManager.js:543
notifyListeners @ 4011-StateManager.js:541
setValue @ 4011-StateManager.js:419
(anonymous) @ 4011-Section03.js:1689
calculateTargetModel @ 4011-Section03.js:1686
calculateAll @ 4011-Section03.js:1665
(anonymous) @ 4011-Section03.js:2057
4011-Section15.js:1750 [S15] 🎯 TGT S03 CLIMATE READ: h_23=18, d_23=-24, d_24=30, h_24=24
4011-StateManager.js:343 [StateManager] 🎯 h_10 setValue: "105.80201607309101" (state: calculated)
4011-StateManager.js:346 [StateManager] h_10 setValue stack trace:
setValue @ 4011-StateManager.js:346
calculateValues @ 4011-Section15.js:1832
calculateTargetModel @ 4011-Section15.js:1662
calculateAll @ 4011-Section15.js:1328
(anonymous) @ 4011-Section15.js:2121
(anonymous) @ 4011-StateManager.js:543
notifyListeners @ 4011-StateManager.js:541
setValue @ 4011-StateManager.js:419
(anonymous) @ 4011-Section03.js:1689
calculateTargetModel @ 4011-Section03.js:1686
calculateAll @ 4011-Section03.js:1665
(anonymous) @ 4011-Section03.js:2057
4011-Section10.js:1819 [S10 DEBUG] calculateAll() triggered in target mode - running both engines
4011-Section10.js:2040 [S10REF] Utilization calc: ref_i_71=110562.1692, ref_i_79=10060.174319999998, totalGains=120622.34352
4011-Section10.js:2054 [S10REF] Using utilization method: NRC 40%
4011-Section10.js:2091 [S10REF] Final calc: utilizationFactor=0.4, usableGains=48248.937408
4011-Section10.js:2134 [S10REF] Complete: g_80=0.4, g_81=0.9966231765247549, i_80=48248.937408, i_81=120215.02315876257
4011-Section10.js:1827 [S10 DEBUG] Dual-engine calculations complete in target mode
4011-Section10.js:1819 [S10 DEBUG] calculateAll() triggered in target mode - running both engines
4011-Section10.js:2040 [S10REF] Utilization calc: ref_i_71=110562.1692, ref_i_79=10060.174319999998, totalGains=120622.34352
4011-Section10.js:2054 [S10REF] Using utilization method: NRC 40%
4011-Section10.js:2091 [S10REF] Final calc: utilizationFactor=0.4, usableGains=48248.937408
4011-Section10.js:2134 [S10REF] Complete: g_80=0.4, g_81=0.9966231765247549, i_80=48248.937408, i_81=120215.02315876257
4011-Section10.js:1827 [S10 DEBUG] Dual-engine calculations complete in target mode
4011-Section03.js:1693 [STALE] S03 TARGET PUB: j_19=8.0 → StateManager has j_19=8.0
4011-Section13.js:3389 [Section13] 🚀 CALCULATEALL TRIGGERED - Running dual-engine calculations...
4011-Section13.js:3395 [Section13] 🎯 Mode captured at calculation start: target
4011-Section13.js:3401 [Section13] 🔄 Starting Reference Model calculations...
4011-Section13.js:721 🔍 [S13-CONTEXT] Creating reference context: g_118="Volume Constant" from ReferenceState
4011-Section13.js:723 🔍 [S13-CONTEXT] ReferenceState.g_118="Volume Constant", TargetState.g_118="Volume by Schedule"
4011-Section13.js:3457 [Section13] Running Reference Model calculations...
4011-Section13.js:3471 [S13 CONTAMINATION DEBUG] calculateReferenceModel: Using system type = Electricity
4011-Section13.js:2873 [S13] REF HEATING: system=Electricity, ted=297371.1974742337, afue=0.9, cop=1
4011-Section13.js:2879 [S13 REF DEBUG] About to calculate with heating system: Electricity
4011-Section13.js:2882 [S13 REF DEBUG] Will S13 publish ref_d_113=Electricity?
4011-Section13.js:3099 🔍 [S13-VENT] calculateVentilationRates: ventMethod="Volume Constant", ach(l_118)=3.5, ratePerPerson(d_119)=8.33, volume(d_105)=8000
4011-Section13.js:3102 🔍 [S13-VENT] isReferenceCalculation=true, hasContext=true
4011-Section13.js:3110 🔍 [S13-VENT] calculateVentilationValues: ventMethod="Volume Constant", ach(l_118)=3.5, ratePerPerson(d_119)=8.33, volume(d_105)=8000
4011-Section13.js:3113 🔍 [S13-VENT] Supporting values: occupants(d_63)=126, occupiedHours(i_63)=4380, totalHours(j_63)=8760
4011-Section13.js:3133 🔍 [S13-VENT] Volume Constant calculation: ventRateLs = (3.5 * 8000) / 3.6 = 7777.777777777777
4011-Section13.js:3145 ✅ [S13-VENT] Final d_120 result: 7777.777777777777 L/s (from method="Volume Constant", ach=3.5, volume=8000)
4011-Section13.js:2977 [Section13] 🧊 COOLING CALC: mode=REF, coolingSystemType="No Cooling", heatingType="Electricity", isCoolingActive=false, coolingDemand=6020.32656805405
4011-Section13.js:3737 [S13 CONTAMINATION DEBUG] storeReferenceResults called during reference mode
4011-Section13.js:3740 [S13 CONTAMINATION DEBUG] Reference heating system: Electricity
4011-Section13.js:3743 [S13 CONTAMINATION DEBUG] Target heating system: Heatpump
4011-Section13.js:3746 [S13 CONTAMINATION DEBUG] Reference h_115 (gas volume): 0
4011-Section13.js:3749 [S13 CONTAMINATION DEBUG] Reference f_115 (oil volume): 0
4011-Section13.js:3761 [S13 CONTAMINATION DEBUG] Writing ref_f_115 = 0
4011-Section13.js:3761 [S13 CONTAMINATION DEBUG] Writing ref_h_115 = 0
4011-Section13.js:3773 [Section13] Reference results stored with ref_ prefix for downstream sections
4011-Section13.js:3776 [S13 DEBUG] Total Reference results stored: 34
4011-Section13.js:3515 [Section13] Reference Model calculations complete
4011-Section13.js:3403 [Section13] ✅ Reference Model complete
4011-Section13.js:3405 [Section13] 🔄 Starting Target Model calculations...
4011-Section13.js:721 🔍 [S13-CONTEXT] Creating target context: g_118="Volume by Schedule" from TargetState
4011-Section13.js:725 🔍 [S13-CONTEXT] TargetState.g_118="Volume by Schedule", ReferenceState.g_118="Volume Constant"
4011-Section13.js:3536 [Section13] Running Target Model calculations...
4011-Section13.js:2873 [S13] TGT HEATING: system=Heatpump, ted=188752.50983613706, afue=0.98, cop=3.663540445486518
4011-Section13.js:3099 🔍 [S13-VENT] calculateVentilationRates: ventMethod="Volume by Schedule", ach(l_118)=3, ratePerPerson(d_119)=14, volume(d_105)=8000
4011-Section13.js:3102 🔍 [S13-VENT] isReferenceCalculation=false, hasContext=true
4011-Section13.js:3110 🔍 [S13-VENT] calculateVentilationValues: ventMethod="Volume by Schedule", ach(l_118)=3, ratePerPerson(d_119)=14, volume(d_105)=8000
4011-Section13.js:3113 🔍 [S13-VENT] Supporting values: occupants(d_63)=126, occupiedHours(i_63)=4380, totalHours(j_63)=8760
4011-Section13.js:3145 ✅ [S13-VENT] Final d_120 result: 3333.333333333333 L/s (from method="Volume by Schedule", ach=3, volume=8000)
4011-Section13.js:2977 [Section13] 🧊 COOLING CALC: mode=TGT, coolingSystemType="Cooling", heatingType="Heatpump", isCoolingActive=true, coolingDemand=6020.32656805405
4011-Section13.js:3039 [Section13] 🧊 COOLING RESULTS: d_117=2260.272254643532, j_116=2.663540445486518, l_116=0, l_114=3760.0543134105183
4011-Section13.js:3591 [Section13] Target Model calculations complete
4011-Section13.js:3407 [Section13] ✅ Target Model complete
4011-Section13.js:3434 [Section13] ⏭️ Skipping Reference value re-write - triggered in target mode
4011-Section13.js:3440 [Section13] 🎉 DUAL-ENGINE CALCULATIONS COMPLETE
4011-Section13.js:252 [Section13] 🔄 Updating calculated display values for target mode
4011-Section13.js:336 [Section13] Calculated display values updated for target mode
4011-Section13.js:3389 [Section13] 🚀 CALCULATEALL TRIGGERED - Running dual-engine calculations...
4011-Section13.js:3395 [Section13] 🎯 Mode captured at calculation start: target
4011-Section13.js:3401 [Section13] 🔄 Starting Reference Model calculations...
4011-Section13.js:721 🔍 [S13-CONTEXT] Creating reference context: g_118="Volume Constant" from ReferenceState
4011-Section13.js:723 🔍 [S13-CONTEXT] ReferenceState.g_118="Volume Constant", TargetState.g_118="Volume by Schedule"
4011-Section13.js:3457 [Section13] Running Reference Model calculations...
4011-Section13.js:3471 [S13 CONTAMINATION DEBUG] calculateReferenceModel: Using system type = Electricity
4011-Section13.js:2873 [S13] REF HEATING: system=Electricity, ted=297371.1974742337, afue=0.9, cop=1
4011-Section13.js:2879 [S13 REF DEBUG] About to calculate with heating system: Electricity
4011-Section13.js:2882 [S13 REF DEBUG] Will S13 publish ref_d_113=Electricity?
4011-Section13.js:3099 🔍 [S13-VENT] calculateVentilationRates: ventMethod="Volume Constant", ach(l_118)=3.5, ratePerPerson(d_119)=8.33, volume(d_105)=8000
4011-Section13.js:3102 🔍 [S13-VENT] isReferenceCalculation=true, hasContext=true
4011-Section13.js:3110 🔍 [S13-VENT] calculateVentilationValues: ventMethod="Volume Constant", ach(l_118)=3.5, ratePerPerson(d_119)=8.33, volume(d_105)=8000
4011-Section13.js:3113 🔍 [S13-VENT] Supporting values: occupants(d_63)=126, occupiedHours(i_63)=4380, totalHours(j_63)=8760
4011-Section13.js:3133 🔍 [S13-VENT] Volume Constant calculation: ventRateLs = (3.5 * 8000) / 3.6 = 7777.777777777777
4011-Section13.js:3145 ✅ [S13-VENT] Final d_120 result: 7777.777777777777 L/s (from method="Volume Constant", ach=3.5, volume=8000)
4011-Section13.js:2977 [Section13] 🧊 COOLING CALC: mode=REF, coolingSystemType="No Cooling", heatingType="Electricity", isCoolingActive=false, coolingDemand=6020.32656805405
4011-Section13.js:3737 [S13 CONTAMINATION DEBUG] storeReferenceResults called during reference mode
4011-Section13.js:3740 [S13 CONTAMINATION DEBUG] Reference heating system: Electricity
4011-Section13.js:3743 [S13 CONTAMINATION DEBUG] Target heating system: Heatpump
4011-Section13.js:3746 [S13 CONTAMINATION DEBUG] Reference h_115 (gas volume): 0
4011-Section13.js:3749 [S13 CONTAMINATION DEBUG] Reference f_115 (oil volume): 0
4011-Section13.js:3761 [S13 CONTAMINATION DEBUG] Writing ref_f_115 = 0
4011-Section13.js:3761 [S13 CONTAMINATION DEBUG] Writing ref_h_115 = 0
4011-Section13.js:3773 [Section13] Reference results stored with ref_ prefix for downstream sections
4011-Section13.js:3776 [S13 DEBUG] Total Reference results stored: 34
4011-Section13.js:3515 [Section13] Reference Model calculations complete
4011-Section13.js:3403 [Section13] ✅ Reference Model complete
4011-Section13.js:3405 [Section13] 🔄 Starting Target Model calculations...
4011-Section13.js:721 🔍 [S13-CONTEXT] Creating target context: g_118="Volume by Schedule" from TargetState
4011-Section13.js:725 🔍 [S13-CONTEXT] TargetState.g_118="Volume by Schedule", ReferenceState.g_118="Volume Constant"
4011-Section13.js:3536 [Section13] Running Target Model calculations...
4011-Section13.js:2873 [S13] TGT HEATING: system=Heatpump, ted=188752.50983613706, afue=0.98, cop=3.663540445486518
4011-Section13.js:3099 🔍 [S13-VENT] calculateVentilationRates: ventMethod="Volume by Schedule", ach(l_118)=3, ratePerPerson(d_119)=14, volume(d_105)=8000
4011-Section13.js:3102 🔍 [S13-VENT] isReferenceCalculation=false, hasContext=true
4011-Section13.js:3110 🔍 [S13-VENT] calculateVentilationValues: ventMethod="Volume by Schedule", ach(l_118)=3, ratePerPerson(d_119)=14, volume(d_105)=8000
4011-Section13.js:3113 🔍 [S13-VENT] Supporting values: occupants(d_63)=126, occupiedHours(i_63)=4380, totalHours(j_63)=8760
4011-Section13.js:3145 ✅ [S13-VENT] Final d_120 result: 3333.333333333333 L/s (from method="Volume by Schedule", ach=3, volume=8000)
4011-Section13.js:2977 [Section13] 🧊 COOLING CALC: mode=TGT, coolingSystemType="Cooling", heatingType="Heatpump", isCoolingActive=true, coolingDemand=6020.32656805405
4011-Section13.js:3039 [Section13] 🧊 COOLING RESULTS: d_117=2260.272254643532, j_116=2.663540445486518, l_116=0, l_114=3760.0543134105183
4011-Section13.js:3591 [Section13] Target Model calculations complete
4011-Section13.js:3407 [Section13] ✅ Target Model complete
4011-Section13.js:3434 [Section13] ⏭️ Skipping Reference value re-write - triggered in target mode
4011-Section13.js:3440 [Section13] 🎉 DUAL-ENGINE CALCULATIONS COMPLETE
4011-Section13.js:252 [Section13] 🔄 Updating calculated display values for target mode
4011-Section13.js:336 [Section13] Calculated display values updated for target mode
4011-Section15.js:1750 [S15] 🎯 TGT S03 CLIMATE READ: h_23=18, d_23=-37, d_24=30, h_24=24
4011-StateManager.js:343 [StateManager] 🎯 h_10 setValue: "105.80201607309101" (state: calculated)
4011-StateManager.js:346 [StateManager] h_10 setValue stack trace:
setValue @ 4011-StateManager.js:346
calculateValues @ 4011-Section15.js:1832
calculateTargetModel @ 4011-Section15.js:1662
calculateAll @ 4011-Section15.js:1328
(anonymous) @ 4011-Section15.js:2121
(anonymous) @ 4011-StateManager.js:543
notifyListeners @ 4011-StateManager.js:541
setValue @ 4011-StateManager.js:419
(anonymous) @ 4011-Section03.js:1689
calculateTargetModel @ 4011-Section03.js:1686
calculateAll @ 4011-Section03.js:1665
(anonymous) @ 4011-Section03.js:2057
4011-Section15.js:1750 [S15] 🎯 TGT S03 CLIMATE READ: h_23=18, d_23=-37, d_24=30, h_24=24
4011-StateManager.js:343 [StateManager] 🎯 h_10 setValue: "105.80201607309101" (state: calculated)
4011-StateManager.js:346 [StateManager] h_10 setValue stack trace:
setValue @ 4011-StateManager.js:346
calculateValues @ 4011-Section15.js:1832
calculateTargetModel @ 4011-Section15.js:1662
calculateAll @ 4011-Section15.js:1328
(anonymous) @ 4011-Section15.js:2121
(anonymous) @ 4011-StateManager.js:543
notifyListeners @ 4011-StateManager.js:541
setValue @ 4011-StateManager.js:419
(anonymous) @ 4011-Section03.js:1689
calculateTargetModel @ 4011-Section03.js:1686
calculateAll @ 4011-Section03.js:1665
(anonymous) @ 4011-Section03.js:2057
4011-Section03.js:1693 [STALE] S03 TARGET PUB: d_23=-37 → StateManager has d_23=-37
4011-Section13.js:3389 [Section13] 🚀 CALCULATEALL TRIGGERED - Running dual-engine calculations...
4011-Section13.js:3395 [Section13] 🎯 Mode captured at calculation start: target
4011-Section13.js:3401 [Section13] 🔄 Starting Reference Model calculations...
4011-Section13.js:721 🔍 [S13-CONTEXT] Creating reference context: g_118="Volume Constant" from ReferenceState
4011-Section13.js:723 🔍 [S13-CONTEXT] ReferenceState.g_118="Volume Constant", TargetState.g_118="Volume by Schedule"
4011-Section13.js:3457 [Section13] Running Reference Model calculations...
4011-Section13.js:3471 [S13 CONTAMINATION DEBUG] calculateReferenceModel: Using system type = Electricity
4011-Section13.js:2873 [S13] REF HEATING: system=Electricity, ted=297371.1974742337, afue=0.9, cop=1
4011-Section13.js:2879 [S13 REF DEBUG] About to calculate with heating system: Electricity
4011-Section13.js:2882 [S13 REF DEBUG] Will S13 publish ref_d_113=Electricity?
4011-Section13.js:3099 🔍 [S13-VENT] calculateVentilationRates: ventMethod="Volume Constant", ach(l_118)=3.5, ratePerPerson(d_119)=8.33, volume(d_105)=8000
4011-Section13.js:3102 🔍 [S13-VENT] isReferenceCalculation=true, hasContext=true
4011-Section13.js:3110 🔍 [S13-VENT] calculateVentilationValues: ventMethod="Volume Constant", ach(l_118)=3.5, ratePerPerson(d_119)=8.33, volume(d_105)=8000
4011-Section13.js:3113 🔍 [S13-VENT] Supporting values: occupants(d_63)=126, occupiedHours(i_63)=4380, totalHours(j_63)=8760
4011-Section13.js:3133 🔍 [S13-VENT] Volume Constant calculation: ventRateLs = (3.5 * 8000) / 3.6 = 7777.777777777777
4011-Section13.js:3145 ✅ [S13-VENT] Final d_120 result: 7777.777777777777 L/s (from method="Volume Constant", ach=3.5, volume=8000)
4011-Section13.js:2977 [Section13] 🧊 COOLING CALC: mode=REF, coolingSystemType="No Cooling", heatingType="Electricity", isCoolingActive=false, coolingDemand=6020.32656805405
4011-Section13.js:3737 [S13 CONTAMINATION DEBUG] storeReferenceResults called during reference mode
4011-Section13.js:3740 [S13 CONTAMINATION DEBUG] Reference heating system: Electricity
4011-Section13.js:3743 [S13 CONTAMINATION DEBUG] Target heating system: Heatpump
4011-Section13.js:3746 [S13 CONTAMINATION DEBUG] Reference h_115 (gas volume): 0
4011-Section13.js:3749 [S13 CONTAMINATION DEBUG] Reference f_115 (oil volume): 0
4011-Section13.js:3761 [S13 CONTAMINATION DEBUG] Writing ref_f_115 = 0
4011-Section13.js:3761 [S13 CONTAMINATION DEBUG] Writing ref_h_115 = 0
4011-Section13.js:3773 [Section13] Reference results stored with ref_ prefix for downstream sections
4011-Section13.js:3776 [S13 DEBUG] Total Reference results stored: 34
4011-Section13.js:3515 [Section13] Reference Model calculations complete
4011-Section13.js:3403 [Section13] ✅ Reference Model complete
4011-Section13.js:3405 [Section13] 🔄 Starting Target Model calculations...
4011-Section13.js:721 🔍 [S13-CONTEXT] Creating target context: g_118="Volume by Schedule" from TargetState
4011-Section13.js:725 🔍 [S13-CONTEXT] TargetState.g_118="Volume by Schedule", ReferenceState.g_118="Volume Constant"
4011-Section13.js:3536 [Section13] Running Target Model calculations...
4011-Section13.js:2873 [S13] TGT HEATING: system=Heatpump, ted=188752.50983613706, afue=0.98, cop=3.663540445486518
4011-Section13.js:3099 🔍 [S13-VENT] calculateVentilationRates: ventMethod="Volume by Schedule", ach(l_118)=3, ratePerPerson(d_119)=14, volume(d_105)=8000
4011-Section13.js:3102 🔍 [S13-VENT] isReferenceCalculation=false, hasContext=true
4011-Section13.js:3110 🔍 [S13-VENT] calculateVentilationValues: ventMethod="Volume by Schedule", ach(l_118)=3, ratePerPerson(d_119)=14, volume(d_105)=8000
4011-Section13.js:3113 🔍 [S13-VENT] Supporting values: occupants(d_63)=126, occupiedHours(i_63)=4380, totalHours(j_63)=8760
4011-Section13.js:3145 ✅ [S13-VENT] Final d_120 result: 3333.333333333333 L/s (from method="Volume by Schedule", ach=3, volume=8000)
4011-Section13.js:2977 [Section13] 🧊 COOLING CALC: mode=TGT, coolingSystemType="Cooling", heatingType="Heatpump", isCoolingActive=true, coolingDemand=6020.32656805405
4011-Section13.js:3039 [Section13] 🧊 COOLING RESULTS: d_117=2260.272254643532, j_116=2.663540445486518, l_116=0, l_114=3760.0543134105183
4011-Section13.js:3591 [Section13] Target Model calculations complete
4011-Section13.js:3407 [Section13] ✅ Target Model complete
4011-Section13.js:3434 [Section13] ⏭️ Skipping Reference value re-write - triggered in target mode
4011-Section13.js:3440 [Section13] 🎉 DUAL-ENGINE CALCULATIONS COMPLETE
4011-Section13.js:252 [Section13] 🔄 Updating calculated display values for target mode
4011-Section13.js:336 [Section13] Calculated display values updated for target mode
4011-Section13.js:3389 [Section13] 🚀 CALCULATEALL TRIGGERED - Running dual-engine calculations...
4011-Section13.js:3395 [Section13] 🎯 Mode captured at calculation start: target
4011-Section13.js:3401 [Section13] 🔄 Starting Reference Model calculations...
4011-Section13.js:721 🔍 [S13-CONTEXT] Creating reference context: g_118="Volume Constant" from ReferenceState
4011-Section13.js:723 🔍 [S13-CONTEXT] ReferenceState.g_118="Volume Constant", TargetState.g_118="Volume by Schedule"
4011-Section13.js:3457 [Section13] Running Reference Model calculations...
4011-Section13.js:3471 [S13 CONTAMINATION DEBUG] calculateReferenceModel: Using system type = Electricity
4011-Section13.js:2873 [S13] REF HEATING: system=Electricity, ted=297371.1974742337, afue=0.9, cop=1
4011-Section13.js:2879 [S13 REF DEBUG] About to calculate with heating system: Electricity
4011-Section13.js:2882 [S13 REF DEBUG] Will S13 publish ref_d_113=Electricity?
4011-Section13.js:3099 🔍 [S13-VENT] calculateVentilationRates: ventMethod="Volume Constant", ach(l_118)=3.5, ratePerPerson(d_119)=8.33, volume(d_105)=8000
4011-Section13.js:3102 🔍 [S13-VENT] isReferenceCalculation=true, hasContext=true
4011-Section13.js:3110 🔍 [S13-VENT] calculateVentilationValues: ventMethod="Volume Constant", ach(l_118)=3.5, ratePerPerson(d_119)=8.33, volume(d_105)=8000
4011-Section13.js:3113 🔍 [S13-VENT] Supporting values: occupants(d_63)=126, occupiedHours(i_63)=4380, totalHours(j_63)=8760
4011-Section13.js:3133 🔍 [S13-VENT] Volume Constant calculation: ventRateLs = (3.5 * 8000) / 3.6 = 7777.777777777777
4011-Section13.js:3145 ✅ [S13-VENT] Final d_120 result: 7777.777777777777 L/s (from method="Volume Constant", ach=3.5, volume=8000)
4011-Section13.js:2977 [Section13] 🧊 COOLING CALC: mode=REF, coolingSystemType="No Cooling", heatingType="Electricity", isCoolingActive=false, coolingDemand=6020.32656805405
4011-Section13.js:3737 [S13 CONTAMINATION DEBUG] storeReferenceResults called during reference mode
4011-Section13.js:3740 [S13 CONTAMINATION DEBUG] Reference heating system: Electricity
4011-Section13.js:3743 [S13 CONTAMINATION DEBUG] Target heating system: Heatpump
4011-Section13.js:3746 [S13 CONTAMINATION DEBUG] Reference h_115 (gas volume): 0
4011-Section13.js:3749 [S13 CONTAMINATION DEBUG] Reference f_115 (oil volume): 0
4011-Section13.js:3761 [S13 CONTAMINATION DEBUG] Writing ref_f_115 = 0
4011-Section13.js:3761 [S13 CONTAMINATION DEBUG] Writing ref_h_115 = 0
4011-Section13.js:3773 [Section13] Reference results stored with ref_ prefix for downstream sections
4011-Section13.js:3776 [S13 DEBUG] Total Reference results stored: 34
4011-Section13.js:3515 [Section13] Reference Model calculations complete
4011-Section13.js:3403 [Section13] ✅ Reference Model complete
4011-Section13.js:3405 [Section13] 🔄 Starting Target Model calculations...
4011-Section13.js:721 🔍 [S13-CONTEXT] Creating target context: g_118="Volume by Schedule" from TargetState
4011-Section13.js:725 🔍 [S13-CONTEXT] TargetState.g_118="Volume by Schedule", ReferenceState.g_118="Volume Constant"
4011-Section13.js:3536 [Section13] Running Target Model calculations...
4011-Section13.js:2873 [S13] TGT HEATING: system=Heatpump, ted=188752.50983613706, afue=0.98, cop=3.663540445486518
4011-Section13.js:3099 🔍 [S13-VENT] calculateVentilationRates: ventMethod="Volume by Schedule", ach(l_118)=3, ratePerPerson(d_119)=14, volume(d_105)=8000
4011-Section13.js:3102 🔍 [S13-VENT] isReferenceCalculation=false, hasContext=true
4011-Section13.js:3110 🔍 [S13-VENT] calculateVentilationValues: ventMethod="Volume by Schedule", ach(l_118)=3, ratePerPerson(d_119)=14, volume(d_105)=8000
4011-Section13.js:3113 🔍 [S13-VENT] Supporting values: occupants(d_63)=126, occupiedHours(i_63)=4380, totalHours(j_63)=8760
4011-Section13.js:3145 ✅ [S13-VENT] Final d_120 result: 3333.333333333333 L/s (from method="Volume by Schedule", ach=3, volume=8000)
4011-Section13.js:2977 [Section13] 🧊 COOLING CALC: mode=TGT, coolingSystemType="Cooling", heatingType="Heatpump", isCoolingActive=true, coolingDemand=6020.32656805405
4011-Section13.js:3039 [Section13] 🧊 COOLING RESULTS: d_117=2260.272254643532, j_116=2.663540445486518, l_116=0, l_114=3760.0543134105183
4011-Section13.js:3591 [Section13] Target Model calculations complete
4011-Section13.js:3407 [Section13] ✅ Target Model complete
4011-Section13.js:3434 [Section13] ⏭️ Skipping Reference value re-write - triggered in target mode
4011-Section13.js:3440 [Section13] 🎉 DUAL-ENGINE CALCULATIONS COMPLETE
4011-Section13.js:252 [Section13] 🔄 Updating calculated display values for target mode
4011-Section13.js:336 [Section13] Calculated display values updated for target mode
4011-Section15.js:1750 [S15] 🎯 TGT S03 CLIMATE READ: h_23=18, d_23=-37, d_24=28, h_24=24
4011-StateManager.js:343 [StateManager] 🎯 h_10 setValue: "105.80201607309101" (state: calculated)
4011-StateManager.js:346 [StateManager] h_10 setValue stack trace:
setValue @ 4011-StateManager.js:346
calculateValues @ 4011-Section15.js:1832
calculateTargetModel @ 4011-Section15.js:1662
calculateAll @ 4011-Section15.js:1328
(anonymous) @ 4011-Section15.js:2121
(anonymous) @ 4011-StateManager.js:543
notifyListeners @ 4011-StateManager.js:541
setValue @ 4011-StateManager.js:419
(anonymous) @ 4011-Section03.js:1689
calculateTargetModel @ 4011-Section03.js:1686
calculateAll @ 4011-Section03.js:1665
(anonymous) @ 4011-Section03.js:2057
4011-Section15.js:1750 [S15] 🎯 TGT S03 CLIMATE READ: h_23=18, d_23=-37, d_24=28, h_24=24
4011-StateManager.js:343 [StateManager] 🎯 h_10 setValue: "105.80201607309101" (state: calculated)
4011-StateManager.js:346 [StateManager] h_10 setValue stack trace:
setValue @ 4011-StateManager.js:346
calculateValues @ 4011-Section15.js:1832
calculateTargetModel @ 4011-Section15.js:1662
calculateAll @ 4011-Section15.js:1328
(anonymous) @ 4011-Section15.js:2121
(anonymous) @ 4011-StateManager.js:543
notifyListeners @ 4011-StateManager.js:541
setValue @ 4011-StateManager.js:419
(anonymous) @ 4011-Section03.js:1689
calculateTargetModel @ 4011-Section03.js:1686
calculateAll @ 4011-Section03.js:1665
(anonymous) @ 4011-Section03.js:2057
4011-Section03.js:1693 [STALE] S03 TARGET PUB: d_24=28 → StateManager has d_24=28
4011-Section03.js:1693 [STALE] S03 TARGET PUB: l_22=10 → StateManager has l_22=10
4011-Clock.js:146 [CLOCK] 🎯 User interaction started - timing to h_10 settlement
4011-Clock.js:146 [CLOCK] 🎯 User interaction started - timing to h_10 settlement
4011-Clock.js:146 [CLOCK] 🎯 User interaction started - timing to h_10 settlement
4011-Clock.js:146 [CLOCK] 🎯 User interaction started - timing to h_10 settlement
4011-Clock.js:146 [CLOCK] 🎯 User interaction started - timing to h_10 settlement
4011-Clock.js:146 [CLOCK] 🎯 User interaction started - timing to h_10 settlement
4011-Clock.js:146 [CLOCK] 🎯 User interaction started - timing to h_10 settlement
4011-Clock.js:146 [CLOCK] 🎯 User interaction started - timing to h_10 settlement
4011-Clock.js:146 [CLOCK] 🎯 User interaction started - timing to h_10 settlement
4011-Section03.js:560 [S03] Getting climate data for: Alexandria, ON (Present)
4011-Section03.js:589 [S03] Climate values for Alexandria: {d_20: 4600, d_21: 196, j_19: '6.0', d_23: -24, d_24: 30, …}
4011-Clock.js:146 [CLOCK] 🎯 User interaction started - timing to h_10 settlement
4011-Section15.js:1750 [S15] 🎯 TGT S03 CLIMATE READ: h_23=18, d_23=-37, d_24=28, h_24=24
4011-StateManager.js:343 [StateManager] 🎯 h_10 setValue: "105.80201607309101" (state: calculated)
4011-StateManager.js:346 [StateManager] h_10 setValue stack trace:
setValue @ 4011-StateManager.js:346
calculateValues @ 4011-Section15.js:1832
calculateTargetModel @ 4011-Section15.js:1662
calculateAll @ 4011-Section15.js:1328
(anonymous) @ 4011-Section15.js:2121
(anonymous) @ 4011-StateManager.js:543
notifyListeners @ 4011-StateManager.js:541
setValue @ 4011-StateManager.js:419
setValue @ 4011-Section03.js:214
setFieldValue @ 4011-Section03.js:450
calculateHeatingSetpoint @ 4011-Section03.js:1814
calculateReferenceModel @ 4011-Section03.js:1729
calculateAll @ 4011-Section03.js:1666
(anonymous) @ 4011-Section03.js:2057
4011-Section15.js:1750 [S15] 🎯 TGT S03 CLIMATE READ: h_23=18, d_23=-37, d_24=28, h_24=24
4011-StateManager.js:343 [StateManager] 🎯 h_10 setValue: "105.80201607309101" (state: calculated)
4011-StateManager.js:346 [StateManager] h_10 setValue stack trace:
setValue @ 4011-StateManager.js:346
calculateValues @ 4011-Section15.js:1832
calculateTargetModel @ 4011-Section15.js:1662
calculateAll @ 4011-Section15.js:1328
(anonymous) @ 4011-Section15.js:2121
(anonymous) @ 4011-StateManager.js:543
notifyListeners @ 4011-StateManager.js:541
setValue @ 4011-StateManager.js:419
setValue @ 4011-Section03.js:214
setFieldValue @ 4011-Section03.js:450
calculateHeatingSetpoint @ 4011-Section03.js:1814
calculateReferenceModel @ 4011-Section03.js:1729
calculateAll @ 4011-Section03.js:1666
(anonymous) @ 4011-Section03.js:2057
4011-Section15.js:1750 [S15] 🎯 TGT S03 CLIMATE READ: h_23=18, d_23=-37, d_24=28, h_24=24
4011-StateManager.js:343 [StateManager] 🎯 h_10 setValue: "105.80201607309101" (state: calculated)
4011-StateManager.js:346 [StateManager] h_10 setValue stack trace:
setValue @ 4011-StateManager.js:346
calculateValues @ 4011-Section15.js:1832
calculateTargetModel @ 4011-Section15.js:1662
calculateAll @ 4011-Section15.js:1328
(anonymous) @ 4011-Section15.js:2121
(anonymous) @ 4011-StateManager.js:543
notifyListeners @ 4011-StateManager.js:541
setValue @ 4011-StateManager.js:419
setValue @ 4011-Section03.js:214
setFieldValue @ 4011-Section03.js:450
calculateHeatingSetpoint @ 4011-Section03.js:1814
calculateReferenceModel @ 4011-Section03.js:1729
calculateAll @ 4011-Section03.js:1666
(anonymous) @ 4011-Section03.js:2057
4011-Section15.js:1750 [S15] 🎯 TGT S03 CLIMATE READ: h_23=18, d_23=-37, d_24=28, h_24=24
4011-StateManager.js:343 [StateManager] 🎯 h_10 setValue: "105.80201607309101" (state: calculated)
4011-StateManager.js:346 [StateManager] h_10 setValue stack trace:
setValue @ 4011-StateManager.js:346
calculateValues @ 4011-Section15.js:1832
calculateTargetModel @ 4011-Section15.js:1662
calculateAll @ 4011-Section15.js:1328
(anonymous) @ 4011-Section15.js:2121
(anonymous) @ 4011-StateManager.js:543
notifyListeners @ 4011-StateManager.js:541
setValue @ 4011-StateManager.js:419
setValue @ 4011-Section03.js:214
setFieldValue @ 4011-Section03.js:450
calculateHeatingSetpoint @ 4011-Section03.js:1814
calculateReferenceModel @ 4011-Section03.js:1729
calculateAll @ 4011-Section03.js:1666
(anonymous) @ 4011-Section03.js:2057
4011-Clock.js:146 [CLOCK] 🎯 User interaction started - timing to h_10 settlement
4011-Section15.js:1750 [S15] 🎯 TGT S03 CLIMATE READ: h_23=18, d_23=-37, d_24=28, h_24=24
4011-StateManager.js:343 [StateManager] 🎯 h_10 setValue: "105.80201607309101" (state: calculated)
4011-StateManager.js:346 [StateManager] h_10 setValue stack trace:
setValue @ 4011-StateManager.js:346
calculateValues @ 4011-Section15.js:1832
calculateTargetModel @ 4011-Section15.js:1662
calculateAll @ 4011-Section15.js:1328
(anonymous) @ 4011-Section15.js:2121
(anonymous) @ 4011-StateManager.js:543
notifyListeners @ 4011-StateManager.js:541
setValue @ 4011-StateManager.js:419
setValue @ 4011-Section03.js:214
setFieldValue @ 4011-Section03.js:450
calculateCoolingSetpoint_h24 @ 4011-Section03.js:1826
calculateReferenceModel @ 4011-Section03.js:1730
calculateAll @ 4011-Section03.js:1666
(anonymous) @ 4011-Section03.js:2057
4011-Section15.js:1750 [S15] 🎯 TGT S03 CLIMATE READ: h_23=18, d_23=-37, d_24=28, h_24=24
4011-StateManager.js:343 [StateManager] 🎯 h_10 setValue: "105.80201607309101" (state: calculated)
4011-StateManager.js:346 [StateManager] h_10 setValue stack trace:
setValue @ 4011-StateManager.js:346
calculateValues @ 4011-Section15.js:1832
calculateTargetModel @ 4011-Section15.js:1662
calculateAll @ 4011-Section15.js:1328
(anonymous) @ 4011-Section15.js:2121
(anonymous) @ 4011-StateManager.js:543
notifyListeners @ 4011-StateManager.js:541
setValue @ 4011-StateManager.js:419
setValue @ 4011-Section03.js:214
setFieldValue @ 4011-Section03.js:450
calculateCoolingSetpoint_h24 @ 4011-Section03.js:1826
calculateReferenceModel @ 4011-Section03.js:1730
calculateAll @ 4011-Section03.js:1666
(anonymous) @ 4011-Section03.js:2057
4011-Section15.js:1750 [S15] 🎯 TGT S03 CLIMATE READ: h_23=18, d_23=-37, d_24=28, h_24=24
4011-StateManager.js:343 [StateManager] 🎯 h_10 setValue: "105.80201607309101" (state: calculated)
4011-StateManager.js:346 [StateManager] h_10 setValue stack trace:
setValue @ 4011-StateManager.js:346
calculateValues @ 4011-Section15.js:1832
calculateTargetModel @ 4011-Section15.js:1662
calculateAll @ 4011-Section15.js:1328
(anonymous) @ 4011-Section15.js:2121
(anonymous) @ 4011-StateManager.js:543
notifyListeners @ 4011-StateManager.js:541
setValue @ 4011-StateManager.js:419
setValue @ 4011-Section03.js:214
setFieldValue @ 4011-Section03.js:450
calculateCoolingSetpoint_h24 @ 4011-Section03.js:1826
calculateReferenceModel @ 4011-Section03.js:1730
calculateAll @ 4011-Section03.js:1666
(anonymous) @ 4011-Section03.js:2057
4011-Section15.js:1750 [S15] 🎯 TGT S03 CLIMATE READ: h_23=18, d_23=-37, d_24=28, h_24=24
4011-StateManager.js:343 [StateManager] 🎯 h_10 setValue: "105.80201607309101" (state: calculated)
4011-StateManager.js:346 [StateManager] h_10 setValue stack trace:
setValue @ 4011-StateManager.js:346
calculateValues @ 4011-Section15.js:1832
calculateTargetModel @ 4011-Section15.js:1662
calculateAll @ 4011-Section15.js:1328
(anonymous) @ 4011-Section15.js:2121
(anonymous) @ 4011-StateManager.js:543
notifyListeners @ 4011-StateManager.js:541
setValue @ 4011-StateManager.js:419
setValue @ 4011-Section03.js:214
setFieldValue @ 4011-Section03.js:450
calculateCoolingSetpoint_h24 @ 4011-Section03.js:1826
calculateReferenceModel @ 4011-Section03.js:1730
calculateAll @ 4011-Section03.js:1666
(anonymous) @ 4011-Section03.js:2057
4011-Clock.js:146 [CLOCK] 🎯 User interaction started - timing to h_10 settlement
4011-Clock.js:146 [CLOCK] 🎯 User interaction started - timing to h_10 settlement
4011-Clock.js:146 [CLOCK] 🎯 User interaction started - timing to h_10 settlement
4011-Clock.js:146 [CLOCK] 🎯 User interaction started - timing to h_10 settlement
4011-Section11.js:1687 [S11] calculateAll TRIGGERED. isReferenceMode: false
4011-Section11.js:1132 [S11] 🔵 REF CLIMATE READ: d_20=4600
4011-Section11.js:1136 [S11] 🔵 REF CLIMATE READ: d_21=196
4011-Section11.js:1132 [S11] 🔵 REF CLIMATE READ: d_20=4600
4011-Section11.js:1136 [S11] 🔵 REF CLIMATE READ: d_21=196
4011-Section11.js:1132 [S11] 🔵 REF CLIMATE READ: d_20=4600
4011-Section11.js:1136 [S11] 🔵 REF CLIMATE READ: d_21=196
4011-Section11.js:1132 [S11] 🔵 REF CLIMATE READ: d_20=4600
4011-Section11.js:1136 [S11] 🔵 REF CLIMATE READ: d_21=196
4011-Section11.js:1132 [S11] 🔵 REF CLIMATE READ: d_20=4600
4011-Section11.js:1136 [S11] 🔵 REF CLIMATE READ: d_21=196
4011-Section11.js:1132 [S11] 🔵 REF CLIMATE READ: d_20=4600
4011-Section11.js:1136 [S11] 🔵 REF CLIMATE READ: d_21=196
4011-Section11.js:1132 [S11] 🔵 REF CLIMATE READ: d_20=4600
4011-Section11.js:1136 [S11] 🔵 REF CLIMATE READ: d_21=196
4011-Section11.js:1132 [S11] 🔵 REF CLIMATE READ: d_20=4600
4011-Section11.js:1136 [S11] 🔵 REF CLIMATE READ: d_21=196
4011-Section11.js:1132 [S11] 🔵 REF CLIMATE READ: d_20=4600
4011-Section11.js:1136 [S11] 🔵 REF CLIMATE READ: d_21=196
4011-Section11.js:1166 [S11] 🔵 REF CLIMATE READ: d_22=1960
4011-Section11.js:1184 [S11] 🔵 REF CLIMATE READ: h_22=-1680
4011-Section11.js:1166 [S11] 🔵 REF CLIMATE READ: d_22=1960
4011-Section11.js:1184 [S11] 🔵 REF CLIMATE READ: h_22=-1680
4011-Section11.js:1256 [S11] REF TB%=50% → ref_i_97=59532.29, ref_k_97=-947.70
4011-Section11.js:1434 [S11] Writing ref penalty: ref_i_97=59532.29, ref_k_97=-947.70
4011-Section11.js:1145 [S11] 🎯 TGT CLIMATE READ: d_20=7100
4011-Section11.js:1149 [S11] 🎯 TGT CLIMATE READ: d_21=0
4011-Section11.js:1145 [S11] 🎯 TGT CLIMATE READ: d_20=7100
4011-Section11.js:1149 [S11] 🎯 TGT CLIMATE READ: d_21=0
4011-Section11.js:1145 [S11] 🎯 TGT CLIMATE READ: d_20=7100
4011-Section11.js:1149 [S11] 🎯 TGT CLIMATE READ: d_21=0
4011-Section11.js:1145 [S11] 🎯 TGT CLIMATE READ: d_20=7100
4011-Section11.js:1149 [S11] 🎯 TGT CLIMATE READ: d_21=0
4011-Section11.js:1145 [S11] 🎯 TGT CLIMATE READ: d_20=7100
4011-Section11.js:1149 [S11] 🎯 TGT CLIMATE READ: d_21=0
4011-Section11.js:1145 [S11] 🎯 TGT CLIMATE READ: d_20=7100
4011-Section11.js:1149 [S11] 🎯 TGT CLIMATE READ: d_21=0
4011-Section11.js:1145 [S11] 🎯 TGT CLIMATE READ: d_20=7100
4011-Section11.js:1149 [S11] 🎯 TGT CLIMATE READ: d_21=0
4011-Section11.js:1145 [S11] 🎯 TGT CLIMATE READ: d_20=7100
4011-Section11.js:1149 [S11] 🎯 TGT CLIMATE READ: d_21=0
4011-Section11.js:1145 [S11] 🎯 TGT CLIMATE READ: d_20=7100
4011-Section11.js:1149 [S11] 🎯 TGT CLIMATE READ: d_21=0
24011-Section11.js:1189 [S11] 🎯 TGT CLIMATE READ: h_22=-1680
4011-Section11.js:1687 [S11] calculateAll TRIGGERED. isReferenceMode: false
4011-Section11.js:1132 [S11] 🔵 REF CLIMATE READ: d_20=4600
4011-Section11.js:1136 [S11] 🔵 REF CLIMATE READ: d_21=196
4011-Section11.js:1132 [S11] 🔵 REF CLIMATE READ: d_20=4600
4011-Section11.js:1136 [S11] 🔵 REF CLIMATE READ: d_21=196
4011-Section11.js:1132 [S11] 🔵 REF CLIMATE READ: d_20=4600
4011-Section11.js:1136 [S11] 🔵 REF CLIMATE READ: d_21=196
4011-Section11.js:1132 [S11] 🔵 REF CLIMATE READ: d_20=4600
4011-Section11.js:1136 [S11] 🔵 REF CLIMATE READ: d_21=196
4011-Section11.js:1132 [S11] 🔵 REF CLIMATE READ: d_20=4600
4011-Section11.js:1136 [S11] 🔵 REF CLIMATE READ: d_21=196
4011-Section11.js:1132 [S11] 🔵 REF CLIMATE READ: d_20=4600
4011-Section11.js:1136 [S11] 🔵 REF CLIMATE READ: d_21=196
4011-Section11.js:1132 [S11] 🔵 REF CLIMATE READ: d_20=4600
4011-Section11.js:1136 [S11] 🔵 REF CLIMATE READ: d_21=196
4011-Section11.js:1132 [S11] 🔵 REF CLIMATE READ: d_20=4600
4011-Section11.js:1136 [S11] 🔵 REF CLIMATE READ: d_21=196
4011-Section11.js:1132 [S11] 🔵 REF CLIMATE READ: d_20=4600
4011-Section11.js:1136 [S11] 🔵 REF CLIMATE READ: d_21=196
4011-Section11.js:1166 [S11] 🔵 REF CLIMATE READ: d_22=1960
4011-Section11.js:1184 [S11] 🔵 REF CLIMATE READ: h_22=-1680
4011-Section11.js:1166 [S11] 🔵 REF CLIMATE READ: d_22=1960
4011-Section11.js:1184 [S11] 🔵 REF CLIMATE READ: h_22=-1680
4011-Section11.js:1256 [S11] REF TB%=50% → ref_i_97=59532.29, ref_k_97=-947.70
4011-Section11.js:1434 [S11] Writing ref penalty: ref_i_97=59532.29, ref_k_97=-947.70
4011-Section11.js:1145 [S11] 🎯 TGT CLIMATE READ: d_20=7100
4011-Section11.js:1149 [S11] 🎯 TGT CLIMATE READ: d_21=0
4011-Section11.js:1145 [S11] 🎯 TGT CLIMATE READ: d_20=7100
4011-Section11.js:1149 [S11] 🎯 TGT CLIMATE READ: d_21=0
4011-Section11.js:1145 [S11] 🎯 TGT CLIMATE READ: d_20=7100
4011-Section11.js:1149 [S11] 🎯 TGT CLIMATE READ: d_21=0
4011-Section11.js:1145 [S11] 🎯 TGT CLIMATE READ: d_20=7100
4011-Section11.js:1149 [S11] 🎯 TGT CLIMATE READ: d_21=0
4011-Section11.js:1145 [S11] 🎯 TGT CLIMATE READ: d_20=7100
4011-Section11.js:1149 [S11] 🎯 TGT CLIMATE READ: d_21=0
4011-Section11.js:1145 [S11] 🎯 TGT CLIMATE READ: d_20=7100
4011-Section11.js:1149 [S11] 🎯 TGT CLIMATE READ: d_21=0
4011-Section11.js:1145 [S11] 🎯 TGT CLIMATE READ: d_20=7100
4011-Section11.js:1149 [S11] 🎯 TGT CLIMATE READ: d_21=0
4011-Section11.js:1145 [S11] 🎯 TGT CLIMATE READ: d_20=7100
4011-Section11.js:1149 [S11] 🎯 TGT CLIMATE READ: d_21=0
4011-Section11.js:1145 [S11] 🎯 TGT CLIMATE READ: d_20=7100
4011-Section11.js:1149 [S11] 🎯 TGT CLIMATE READ: d_21=0
24011-Section11.js:1189 [S11] 🎯 TGT CLIMATE READ: h_22=-1680
4011-Section13.js:2813 [S13DEBUG] Reference GF HDD changed: ref_d_22=1960 → triggering Reference calculations
4011-Section13.js:3389 [Section13] 🚀 CALCULATEALL TRIGGERED - Running dual-engine calculations...
4011-Section13.js:3395 [Section13] 🎯 Mode captured at calculation start: target
4011-Section13.js:3401 [Section13] 🔄 Starting Reference Model calculations...
4011-Section13.js:721 🔍 [S13-CONTEXT] Creating reference context: g_118="Volume Constant" from ReferenceState
4011-Section13.js:723 🔍 [S13-CONTEXT] ReferenceState.g_118="Volume Constant", TargetState.g_118="Volume by Schedule"
4011-Section13.js:3457 [Section13] Running Reference Model calculations...
4011-Section13.js:3471 [S13 CONTAMINATION DEBUG] calculateReferenceModel: Using system type = Electricity
4011-Section13.js:2873 [S13] REF HEATING: system=Electricity, ted=297371.1974742337, afue=0.9, cop=1
4011-Section13.js:2879 [S13 REF DEBUG] About to calculate with heating system: Electricity
4011-Section13.js:2882 [S13 REF DEBUG] Will S13 publish ref_d_113=Electricity?
4011-Section13.js:3099 🔍 [S13-VENT] calculateVentilationRates: ventMethod="Volume Constant", ach(l_118)=3.5, ratePerPerson(d_119)=8.33, volume(d_105)=8000
4011-Section13.js:3102 🔍 [S13-VENT] isReferenceCalculation=true, hasContext=true
4011-Section13.js:3110 🔍 [S13-VENT] calculateVentilationValues: ventMethod="Volume Constant", ach(l_118)=3.5, ratePerPerson(d_119)=8.33, volume(d_105)=8000
4011-Section13.js:3113 🔍 [S13-VENT] Supporting values: occupants(d_63)=126, occupiedHours(i_63)=4380, totalHours(j_63)=8760
4011-Section13.js:3133 🔍 [S13-VENT] Volume Constant calculation: ventRateLs = (3.5 * 8000) / 3.6 = 7777.777777777777
4011-Section13.js:3145 ✅ [S13-VENT] Final d_120 result: 7777.777777777777 L/s (from method="Volume Constant", ach=3.5, volume=8000)
4011-Section13.js:2977 [Section13] 🧊 COOLING CALC: mode=REF, coolingSystemType="No Cooling", heatingType="Electricity", isCoolingActive=false, coolingDemand=6020.32656805405
4011-Section13.js:3737 [S13 CONTAMINATION DEBUG] storeReferenceResults called during reference mode
4011-Section13.js:3740 [S13 CONTAMINATION DEBUG] Reference heating system: Electricity
4011-Section13.js:3743 [S13 CONTAMINATION DEBUG] Target heating system: Heatpump
4011-Section13.js:3746 [S13 CONTAMINATION DEBUG] Reference h_115 (gas volume): 0
4011-Section13.js:3749 [S13 CONTAMINATION DEBUG] Reference f_115 (oil volume): 0
4011-Section13.js:3761 [S13 CONTAMINATION DEBUG] Writing ref_f_115 = 0
4011-Section13.js:3761 [S13 CONTAMINATION DEBUG] Writing ref_h_115 = 0
4011-Section13.js:3773 [Section13] Reference results stored with ref_ prefix for downstream sections
4011-Section13.js:3776 [S13 DEBUG] Total Reference results stored: 34
4011-Section13.js:3515 [Section13] Reference Model calculations complete
4011-Section13.js:3403 [Section13] ✅ Reference Model complete
4011-Section13.js:3405 [Section13] 🔄 Starting Target Model calculations...
4011-Section13.js:721 🔍 [S13-CONTEXT] Creating target context: g_118="Volume by Schedule" from TargetState
4011-Section13.js:725 🔍 [S13-CONTEXT] TargetState.g_118="Volume by Schedule", ReferenceState.g_118="Volume Constant"
4011-Section13.js:3536 [Section13] Running Target Model calculations...
4011-Section13.js:2873 [S13] TGT HEATING: system=Heatpump, ted=188752.50983613706, afue=0.98, cop=3.663540445486518
4011-Section13.js:3099 🔍 [S13-VENT] calculateVentilationRates: ventMethod="Volume by Schedule", ach(l_118)=3, ratePerPerson(d_119)=14, volume(d_105)=8000
4011-Section13.js:3102 🔍 [S13-VENT] isReferenceCalculation=false, hasContext=true
4011-Section13.js:3110 🔍 [S13-VENT] calculateVentilationValues: ventMethod="Volume by Schedule", ach(l_118)=3, ratePerPerson(d_119)=14, volume(d_105)=8000
4011-Section13.js:3113 🔍 [S13-VENT] Supporting values: occupants(d_63)=126, occupiedHours(i_63)=4380, totalHours(j_63)=8760
4011-Section13.js:3145 ✅ [S13-VENT] Final d_120 result: 3333.333333333333 L/s (from method="Volume by Schedule", ach=3, volume=8000)
4011-Section13.js:2977 [Section13] 🧊 COOLING CALC: mode=TGT, coolingSystemType="Cooling", heatingType="Heatpump", isCoolingActive=true, coolingDemand=6020.32656805405
4011-Section13.js:3039 [Section13] 🧊 COOLING RESULTS: d_117=2260.272254643532, j_116=2.663540445486518, l_116=0, l_114=3760.0543134105183
4011-Section13.js:3591 [Section13] Target Model calculations complete
4011-Section13.js:3407 [Section13] ✅ Target Model complete
4011-Section13.js:3434 [Section13] ⏭️ Skipping Reference value re-write - triggered in target mode
4011-Section13.js:3440 [Section13] 🎉 DUAL-ENGINE CALCULATIONS COMPLETE
4011-Clock.js:146 [CLOCK] 🎯 User interaction started - timing to h_10 settlement
4011-Section11.js:1687 [S11] calculateAll TRIGGERED. isReferenceMode: false
4011-Section11.js:1132 [S11] 🔵 REF CLIMATE READ: d_20=4600
4011-Section11.js:1136 [S11] 🔵 REF CLIMATE READ: d_21=196
4011-Section11.js:1132 [S11] 🔵 REF CLIMATE READ: d_20=4600
4011-Section11.js:1136 [S11] 🔵 REF CLIMATE READ: d_21=196
4011-Section11.js:1132 [S11] 🔵 REF CLIMATE READ: d_20=4600
4011-Section11.js:1136 [S11] 🔵 REF CLIMATE READ: d_21=196
4011-Section11.js:1132 [S11] 🔵 REF CLIMATE READ: d_20=4600
4011-Section11.js:1136 [S11] 🔵 REF CLIMATE READ: d_21=196
4011-Section11.js:1132 [S11] 🔵 REF CLIMATE READ: d_20=4600
4011-Section11.js:1136 [S11] 🔵 REF CLIMATE READ: d_21=196
4011-Section11.js:1132 [S11] 🔵 REF CLIMATE READ: d_20=4600
4011-Section11.js:1136 [S11] 🔵 REF CLIMATE READ: d_21=196
4011-Section11.js:1132 [S11] 🔵 REF CLIMATE READ: d_20=4600
4011-Section11.js:1136 [S11] 🔵 REF CLIMATE READ: d_21=196
4011-Section11.js:1132 [S11] 🔵 REF CLIMATE READ: d_20=4600
4011-Section11.js:1136 [S11] 🔵 REF CLIMATE READ: d_21=196
4011-Section11.js:1132 [S11] 🔵 REF CLIMATE READ: d_20=4600
4011-Section11.js:1136 [S11] 🔵 REF CLIMATE READ: d_21=196
4011-Section11.js:1166 [S11] 🔵 REF CLIMATE READ: d_22=1960
4011-Section11.js:1184 [S11] 🔵 REF CLIMATE READ: h_22=-1680
4011-Section11.js:1166 [S11] 🔵 REF CLIMATE READ: d_22=1960
4011-Section11.js:1184 [S11] 🔵 REF CLIMATE READ: h_22=-1680
4011-Section11.js:1256 [S11] REF TB%=50% → ref_i_97=59532.29, ref_k_97=-947.70
4011-Section11.js:1434 [S11] Writing ref penalty: ref_i_97=59532.29, ref_k_97=-947.70
4011-Section11.js:1145 [S11] 🎯 TGT CLIMATE READ: d_20=7100
4011-Section11.js:1149 [S11] 🎯 TGT CLIMATE READ: d_21=0
4011-Section11.js:1145 [S11] 🎯 TGT CLIMATE READ: d_20=7100
4011-Section11.js:1149 [S11] 🎯 TGT CLIMATE READ: d_21=0
4011-Section11.js:1145 [S11] 🎯 TGT CLIMATE READ: d_20=7100
4011-Section11.js:1149 [S11] 🎯 TGT CLIMATE READ: d_21=0
4011-Section11.js:1145 [S11] 🎯 TGT CLIMATE READ: d_20=7100
4011-Section11.js:1149 [S11] 🎯 TGT CLIMATE READ: d_21=0
4011-Section11.js:1145 [S11] 🎯 TGT CLIMATE READ: d_20=7100
4011-Section11.js:1149 [S11] 🎯 TGT CLIMATE READ: d_21=0
4011-Section11.js:1145 [S11] 🎯 TGT CLIMATE READ: d_20=7100
4011-Section11.js:1149 [S11] 🎯 TGT CLIMATE READ: d_21=0
4011-Section11.js:1145 [S11] 🎯 TGT CLIMATE READ: d_20=7100
4011-Section11.js:1149 [S11] 🎯 TGT CLIMATE READ: d_21=0
4011-Section11.js:1145 [S11] 🎯 TGT CLIMATE READ: d_20=7100
4011-Section11.js:1149 [S11] 🎯 TGT CLIMATE READ: d_21=0
4011-Section11.js:1145 [S11] 🎯 TGT CLIMATE READ: d_20=7100
4011-Section11.js:1149 [S11] 🎯 TGT CLIMATE READ: d_21=0
24011-Section11.js:1189 [S11] 🎯 TGT CLIMATE READ: h_22=-1680
4011-Section11.js:1687 [S11] calculateAll TRIGGERED. isReferenceMode: false
4011-Section11.js:1132 [S11] 🔵 REF CLIMATE READ: d_20=4600
4011-Section11.js:1136 [S11] 🔵 REF CLIMATE READ: d_21=196
4011-Section11.js:1132 [S11] 🔵 REF CLIMATE READ: d_20=4600
4011-Section11.js:1136 [S11] 🔵 REF CLIMATE READ: d_21=196
4011-Section11.js:1132 [S11] 🔵 REF CLIMATE READ: d_20=4600
4011-Section11.js:1136 [S11] 🔵 REF CLIMATE READ: d_21=196
4011-Section11.js:1132 [S11] 🔵 REF CLIMATE READ: d_20=4600
4011-Section11.js:1136 [S11] 🔵 REF CLIMATE READ: d_21=196
4011-Section11.js:1132 [S11] 🔵 REF CLIMATE READ: d_20=4600
4011-Section11.js:1136 [S11] 🔵 REF CLIMATE READ: d_21=196
4011-Section11.js:1132 [S11] 🔵 REF CLIMATE READ: d_20=4600
4011-Section11.js:1136 [S11] 🔵 REF CLIMATE READ: d_21=196
4011-Section11.js:1132 [S11] 🔵 REF CLIMATE READ: d_20=4600
4011-Section11.js:1136 [S11] 🔵 REF CLIMATE READ: d_21=196
4011-Section11.js:1132 [S11] 🔵 REF CLIMATE READ: d_20=4600
4011-Section11.js:1136 [S11] 🔵 REF CLIMATE READ: d_21=196
4011-Section11.js:1132 [S11] 🔵 REF CLIMATE READ: d_20=4600
4011-Section11.js:1136 [S11] 🔵 REF CLIMATE READ: d_21=196
4011-Section11.js:1166 [S11] 🔵 REF CLIMATE READ: d_22=1960
4011-Section11.js:1184 [S11] 🔵 REF CLIMATE READ: h_22=-1680
4011-Section11.js:1166 [S11] 🔵 REF CLIMATE READ: d_22=1960
4011-Section11.js:1184 [S11] 🔵 REF CLIMATE READ: h_22=-1680
4011-Section11.js:1256 [S11] REF TB%=50% → ref_i_97=59532.29, ref_k_97=-947.70
4011-Section11.js:1434 [S11] Writing ref penalty: ref_i_97=59532.29, ref_k_97=-947.70
4011-Section11.js:1145 [S11] 🎯 TGT CLIMATE READ: d_20=7100
4011-Section11.js:1149 [S11] 🎯 TGT CLIMATE READ: d_21=0
4011-Section11.js:1145 [S11] 🎯 TGT CLIMATE READ: d_20=7100
4011-Section11.js:1149 [S11] 🎯 TGT CLIMATE READ: d_21=0
4011-Section11.js:1145 [S11] 🎯 TGT CLIMATE READ: d_20=7100
4011-Section11.js:1149 [S11] 🎯 TGT CLIMATE READ: d_21=0
4011-Section11.js:1145 [S11] 🎯 TGT CLIMATE READ: d_20=7100
4011-Section11.js:1149 [S11] 🎯 TGT CLIMATE READ: d_21=0
4011-Section11.js:1145 [S11] 🎯 TGT CLIMATE READ: d_20=7100
4011-Section11.js:1149 [S11] 🎯 TGT CLIMATE READ: d_21=0
4011-Section11.js:1145 [S11] 🎯 TGT CLIMATE READ: d_20=7100
4011-Section11.js:1149 [S11] 🎯 TGT CLIMATE READ: d_21=0
4011-Section11.js:1145 [S11] 🎯 TGT CLIMATE READ: d_20=7100
4011-Section11.js:1149 [S11] 🎯 TGT CLIMATE READ: d_21=0
4011-Section11.js:1145 [S11] 🎯 TGT CLIMATE READ: d_20=7100
4011-Section11.js:1149 [S11] 🎯 TGT CLIMATE READ: d_21=0
4011-Section11.js:1145 [S11] 🎯 TGT CLIMATE READ: d_20=7100
4011-Section11.js:1149 [S11] 🎯 TGT CLIMATE READ: d_21=0
24011-Section11.js:1189 [S11] 🎯 TGT CLIMATE READ: h_22=-1680
4011-Section13.js:2819 [S13DEBUG] Reference GF CDD changed: ref_h_22=-1680 → triggering Reference calculations
4011-Section13.js:3389 [Section13] 🚀 CALCULATEALL TRIGGERED - Running dual-engine calculations...
4011-Section13.js:3395 [Section13] 🎯 Mode captured at calculation start: target
4011-Section13.js:3401 [Section13] 🔄 Starting Reference Model calculations...
4011-Section13.js:721 🔍 [S13-CONTEXT] Creating reference context: g_118="Volume Constant" from ReferenceState
4011-Section13.js:723 🔍 [S13-CONTEXT] ReferenceState.g_118="Volume Constant", TargetState.g_118="Volume by Schedule"
4011-Section13.js:3457 [Section13] Running Reference Model calculations...
4011-Section13.js:3471 [S13 CONTAMINATION DEBUG] calculateReferenceModel: Using system type = Electricity
4011-Section13.js:2873 [S13] REF HEATING: system=Electricity, ted=297371.1974742337, afue=0.9, cop=1
4011-Section13.js:2879 [S13 REF DEBUG] About to calculate with heating system: Electricity
4011-Section13.js:2882 [S13 REF DEBUG] Will S13 publish ref_d_113=Electricity?
4011-Section13.js:3099 🔍 [S13-VENT] calculateVentilationRates: ventMethod="Volume Constant", ach(l_118)=3.5, ratePerPerson(d_119)=8.33, volume(d_105)=8000
4011-Section13.js:3102 🔍 [S13-VENT] isReferenceCalculation=true, hasContext=true
4011-Section13.js:3110 🔍 [S13-VENT] calculateVentilationValues: ventMethod="Volume Constant", ach(l_118)=3.5, ratePerPerson(d_119)=8.33, volume(d_105)=8000
4011-Section13.js:3113 🔍 [S13-VENT] Supporting values: occupants(d_63)=126, occupiedHours(i_63)=4380, totalHours(j_63)=8760
4011-Section13.js:3133 🔍 [S13-VENT] Volume Constant calculation: ventRateLs = (3.5 * 8000) / 3.6 = 7777.777777777777
4011-Section13.js:3145 ✅ [S13-VENT] Final d_120 result: 7777.777777777777 L/s (from method="Volume Constant", ach=3.5, volume=8000)
4011-Section13.js:2977 [Section13] 🧊 COOLING CALC: mode=REF, coolingSystemType="No Cooling", heatingType="Electricity", isCoolingActive=false, coolingDemand=6020.32656805405
4011-Section13.js:3737 [S13 CONTAMINATION DEBUG] storeReferenceResults called during reference mode
4011-Section13.js:3740 [S13 CONTAMINATION DEBUG] Reference heating system: Electricity
4011-Section13.js:3743 [S13 CONTAMINATION DEBUG] Target heating system: Heatpump
4011-Section13.js:3746 [S13 CONTAMINATION DEBUG] Reference h_115 (gas volume): 0
4011-Section13.js:3749 [S13 CONTAMINATION DEBUG] Reference f_115 (oil volume): 0
4011-Section13.js:3761 [S13 CONTAMINATION DEBUG] Writing ref_f_115 = 0
4011-Section13.js:3761 [S13 CONTAMINATION DEBUG] Writing ref_h_115 = 0
4011-Section13.js:3773 [Section13] Reference results stored with ref_ prefix for downstream sections
4011-Section13.js:3776 [S13 DEBUG] Total Reference results stored: 34
4011-Section13.js:3515 [Section13] Reference Model calculations complete
4011-Section13.js:3403 [Section13] ✅ Reference Model complete
4011-Section13.js:3405 [Section13] 🔄 Starting Target Model calculations...
4011-Section13.js:721 🔍 [S13-CONTEXT] Creating target context: g_118="Volume by Schedule" from TargetState
4011-Section13.js:725 🔍 [S13-CONTEXT] TargetState.g_118="Volume by Schedule", ReferenceState.g_118="Volume Constant"
4011-Section13.js:3536 [Section13] Running Target Model calculations...
4011-Section13.js:2873 [S13] TGT HEATING: system=Heatpump, ted=188752.50983613706, afue=0.98, cop=3.663540445486518
4011-Section13.js:3099 🔍 [S13-VENT] calculateVentilationRates: ventMethod="Volume by Schedule", ach(l_118)=3, ratePerPerson(d_119)=14, volume(d_105)=8000
4011-Section13.js:3102 🔍 [S13-VENT] isReferenceCalculation=false, hasContext=true
4011-Section13.js:3110 🔍 [S13-VENT] calculateVentilationValues: ventMethod="Volume by Schedule", ach(l_118)=3, ratePerPerson(d_119)=14, volume(d_105)=8000
4011-Section13.js:3113 🔍 [S13-VENT] Supporting values: occupants(d_63)=126, occupiedHours(i_63)=4380, totalHours(j_63)=8760
4011-Section13.js:3145 ✅ [S13-VENT] Final d_120 result: 3333.333333333333 L/s (from method="Volume by Schedule", ach=3, volume=8000)
4011-Section13.js:2977 [Section13] 🧊 COOLING CALC: mode=TGT, coolingSystemType="Cooling", heatingType="Heatpump", isCoolingActive=true, coolingDemand=6020.32656805405
4011-Section13.js:3039 [Section13] 🧊 COOLING RESULTS: d_117=2260.272254643532, j_116=2.663540445486518, l_116=0, l_114=3760.0543134105183
4011-Section13.js:3591 [Section13] Target Model calculations complete
4011-Section13.js:3407 [Section13] ✅ Target Model complete
4011-Section13.js:3434 [Section13] ⏭️ Skipping Reference value re-write - triggered in target mode
4011-Section13.js:3440 [Section13] 🎉 DUAL-ENGINE CALCULATIONS COMPLETE
4011-Clock.js:146 [CLOCK] 🎯 User interaction started - timing to h_10 settlement
4011-Clock.js:146 [CLOCK] 🎯 User interaction started - timing to h_10 settlement
4011-Section15.js:1750 [S15] 🎯 TGT S03 CLIMATE READ: h_23=18, d_23=-37, d_24=28, h_24=24
4011-StateManager.js:343 [StateManager] 🎯 h_10 setValue: "105.80201607309101" (state: calculated)
4011-StateManager.js:346 [StateManager] h_10 setValue stack trace:
setValue @ 4011-StateManager.js:346
calculateValues @ 4011-Section15.js:1832
calculateTargetModel @ 4011-Section15.js:1662
calculateAll @ 4011-Section15.js:1328
(anonymous) @ 4011-Section15.js:2121
(anonymous) @ 4011-StateManager.js:543
notifyListeners @ 4011-StateManager.js:541
setValue @ 4011-StateManager.js:419
(anonymous) @ 4011-Section03.js:1775
storeReferenceResults @ 4011-Section03.js:1773
calculateReferenceModel @ 4011-Section03.js:1739
calculateAll @ 4011-Section03.js:1666
(anonymous) @ 4011-Section03.js:2057
4011-Section15.js:1750 [S15] 🎯 TGT S03 CLIMATE READ: h_23=18, d_23=-37, d_24=28, h_24=24
4011-StateManager.js:343 [StateManager] 🎯 h_10 setValue: "105.80201607309101" (state: calculated)
4011-StateManager.js:346 [StateManager] h_10 setValue stack trace:
setValue @ 4011-StateManager.js:346
calculateValues @ 4011-Section15.js:1832
calculateTargetModel @ 4011-Section15.js:1662
calculateAll @ 4011-Section15.js:1328
(anonymous) @ 4011-Section15.js:2121
(anonymous) @ 4011-StateManager.js:543
notifyListeners @ 4011-StateManager.js:541
setValue @ 4011-StateManager.js:419
(anonymous) @ 4011-Section03.js:1775
storeReferenceResults @ 4011-Section03.js:1773
calculateReferenceModel @ 4011-Section03.js:1739
calculateAll @ 4011-Section03.js:1666
(anonymous) @ 4011-Section03.js:2057
4011-Section15.js:1750 [S15] 🎯 TGT S03 CLIMATE READ: h_23=18, d_23=-37, d_24=28, h_24=24
4011-StateManager.js:343 [StateManager] 🎯 h_10 setValue: "105.80201607309101" (state: calculated)
4011-StateManager.js:346 [StateManager] h_10 setValue stack trace:
setValue @ 4011-StateManager.js:346
calculateValues @ 4011-Section15.js:1832
calculateTargetModel @ 4011-Section15.js:1662
calculateAll @ 4011-Section15.js:1328
(anonymous) @ 4011-Section15.js:2121
(anonymous) @ 4011-StateManager.js:543
notifyListeners @ 4011-StateManager.js:541
setValue @ 4011-StateManager.js:419
(anonymous) @ 4011-Section03.js:1775
storeReferenceResults @ 4011-Section03.js:1773
calculateReferenceModel @ 4011-Section03.js:1739
calculateAll @ 4011-Section03.js:1666
(anonymous) @ 4011-Section03.js:2057
4011-Section15.js:1750 [S15] 🎯 TGT S03 CLIMATE READ: h_23=18, d_23=-37, d_24=28, h_24=24
4011-StateManager.js:343 [StateManager] 🎯 h_10 setValue: "105.80201607309101" (state: calculated)
4011-StateManager.js:346 [StateManager] h_10 setValue stack trace:
setValue @ 4011-StateManager.js:346
calculateValues @ 4011-Section15.js:1832
calculateTargetModel @ 4011-Section15.js:1662
calculateAll @ 4011-Section15.js:1328
(anonymous) @ 4011-Section15.js:2121
(anonymous) @ 4011-StateManager.js:543
notifyListeners @ 4011-StateManager.js:541
setValue @ 4011-StateManager.js:419
(anonymous) @ 4011-Section03.js:1775
storeReferenceResults @ 4011-Section03.js:1773
calculateReferenceModel @ 4011-Section03.js:1739
calculateAll @ 4011-Section03.js:1666
(anonymous) @ 4011-Section03.js:2057
4011-Section15.js:1750 [S15] 🎯 TGT S03 CLIMATE READ: h_23=18, d_23=-37, d_24=28, h_24=24
4011-StateManager.js:343 [StateManager] 🎯 h_10 setValue: "105.80201607309101" (state: calculated)
4011-StateManager.js:346 [StateManager] h_10 setValue stack trace:
setValue @ 4011-StateManager.js:346
calculateValues @ 4011-Section15.js:1832
calculateTargetModel @ 4011-Section15.js:1662
calculateAll @ 4011-Section15.js:1328
(anonymous) @ 4011-Section15.js:2121
(anonymous) @ 4011-StateManager.js:543
notifyListeners @ 4011-StateManager.js:541
setValue @ 4011-StateManager.js:419
(anonymous) @ 4011-Section03.js:1775
storeReferenceResults @ 4011-Section03.js:1773
calculateReferenceModel @ 4011-Section03.js:1739
calculateAll @ 4011-Section03.js:1666
(anonymous) @ 4011-Section03.js:2057
4011-Section15.js:1750 [S15] 🎯 TGT S03 CLIMATE READ: h_23=18, d_23=-37, d_24=28, h_24=24
4011-StateManager.js:343 [StateManager] 🎯 h_10 setValue: "105.80201607309101" (state: calculated)
4011-StateManager.js:346 [StateManager] h_10 setValue stack trace:
setValue @ 4011-StateManager.js:346
calculateValues @ 4011-Section15.js:1832
calculateTargetModel @ 4011-Section15.js:1662
calculateAll @ 4011-Section15.js:1328
(anonymous) @ 4011-Section15.js:2121
(anonymous) @ 4011-StateManager.js:543
notifyListeners @ 4011-StateManager.js:541
setValue @ 4011-StateManager.js:419
(anonymous) @ 4011-Section03.js:1775
storeReferenceResults @ 4011-Section03.js:1773
calculateReferenceModel @ 4011-Section03.js:1739
calculateAll @ 4011-Section03.js:1666
(anonymous) @ 4011-Section03.js:2057
4011-Section15.js:1750 [S15] 🎯 TGT S03 CLIMATE READ: h_23=18, d_23=-37, d_24=28, h_24=24
4011-StateManager.js:343 [StateManager] 🎯 h_10 setValue: "105.80201607309101" (state: calculated)
4011-StateManager.js:346 [StateManager] h_10 setValue stack trace:
setValue @ 4011-StateManager.js:346
calculateValues @ 4011-Section15.js:1832
calculateTargetModel @ 4011-Section15.js:1662
calculateAll @ 4011-Section15.js:1328
(anonymous) @ 4011-Section15.js:2121
(anonymous) @ 4011-StateManager.js:543
notifyListeners @ 4011-StateManager.js:541
setValue @ 4011-StateManager.js:419
(anonymous) @ 4011-Section03.js:1775
storeReferenceResults @ 4011-Section03.js:1773
calculateReferenceModel @ 4011-Section03.js:1739
calculateAll @ 4011-Section03.js:1666
(anonymous) @ 4011-Section03.js:2057
4011-Section15.js:1750 [S15] 🎯 TGT S03 CLIMATE READ: h_23=18, d_23=-37, d_24=28, h_24=24
4011-StateManager.js:343 [StateManager] 🎯 h_10 setValue: "105.80201607309101" (state: calculated)
4011-StateManager.js:346 [StateManager] h_10 setValue stack trace:
setValue @ 4011-StateManager.js:346
calculateValues @ 4011-Section15.js:1832
calculateTargetModel @ 4011-Section15.js:1662
calculateAll @ 4011-Section15.js:1328
(anonymous) @ 4011-Section15.js:2121
(anonymous) @ 4011-StateManager.js:543
notifyListeners @ 4011-StateManager.js:541
setValue @ 4011-StateManager.js:419
(anonymous) @ 4011-Section03.js:1775
storeReferenceResults @ 4011-Section03.js:1773
calculateReferenceModel @ 4011-Section03.js:1739
calculateAll @ 4011-Section03.js:1666
(anonymous) @ 4011-Section03.js:2057
4011-Section11.js:1687 [S11] calculateAll TRIGGERED. isReferenceMode: false
4011-Section11.js:1132 [S11] 🔵 REF CLIMATE READ: d_20=4600
4011-Section11.js:1136 [S11] 🔵 REF CLIMATE READ: d_21=196
4011-Section11.js:1132 [S11] 🔵 REF CLIMATE READ: d_20=4600
4011-Section11.js:1136 [S11] 🔵 REF CLIMATE READ: d_21=196
4011-Section11.js:1132 [S11] 🔵 REF CLIMATE READ: d_20=4600
4011-Section11.js:1136 [S11] 🔵 REF CLIMATE READ: d_21=196
4011-Section11.js:1132 [S11] 🔵 REF CLIMATE READ: d_20=4600
4011-Section11.js:1136 [S11] 🔵 REF CLIMATE READ: d_21=196
4011-Section11.js:1132 [S11] 🔵 REF CLIMATE READ: d_20=4600
4011-Section11.js:1136 [S11] 🔵 REF CLIMATE READ: d_21=196
4011-Section11.js:1132 [S11] 🔵 REF CLIMATE READ: d_20=4600
4011-Section11.js:1136 [S11] 🔵 REF CLIMATE READ: d_21=196
4011-Section11.js:1132 [S11] 🔵 REF CLIMATE READ: d_20=4600
4011-Section11.js:1136 [S11] 🔵 REF CLIMATE READ: d_21=196
4011-Section11.js:1132 [S11] 🔵 REF CLIMATE READ: d_20=4600
4011-Section11.js:1136 [S11] 🔵 REF CLIMATE READ: d_21=196
4011-Section11.js:1132 [S11] 🔵 REF CLIMATE READ: d_20=4600
4011-Section11.js:1136 [S11] 🔵 REF CLIMATE READ: d_21=196
4011-Section11.js:1166 [S11] 🔵 REF CLIMATE READ: d_22=1960
4011-Section11.js:1184 [S11] 🔵 REF CLIMATE READ: h_22=-1680
4011-Section11.js:1166 [S11] 🔵 REF CLIMATE READ: d_22=1960
4011-Section11.js:1184 [S11] 🔵 REF CLIMATE READ: h_22=-1680
4011-Section11.js:1256 [S11] REF TB%=50% → ref_i_97=59532.29, ref_k_97=-947.70
4011-Section11.js:1434 [S11] Writing ref penalty: ref_i_97=59532.29, ref_k_97=-947.70
4011-Section11.js:1145 [S11] 🎯 TGT CLIMATE READ: d_20=7100
4011-Section11.js:1149 [S11] 🎯 TGT CLIMATE READ: d_21=0
4011-Section11.js:1145 [S11] 🎯 TGT CLIMATE READ: d_20=7100
4011-Section11.js:1149 [S11] 🎯 TGT CLIMATE READ: d_21=0
4011-Section11.js:1145 [S11] 🎯 TGT CLIMATE READ: d_20=7100
4011-Section11.js:1149 [S11] 🎯 TGT CLIMATE READ: d_21=0
4011-Section11.js:1145 [S11] 🎯 TGT CLIMATE READ: d_20=7100
4011-Section11.js:1149 [S11] 🎯 TGT CLIMATE READ: d_21=0
4011-Section11.js:1145 [S11] 🎯 TGT CLIMATE READ: d_20=7100
4011-Section11.js:1149 [S11] 🎯 TGT CLIMATE READ: d_21=0
4011-Section11.js:1145 [S11] 🎯 TGT CLIMATE READ: d_20=7100
4011-Section11.js:1149 [S11] 🎯 TGT CLIMATE READ: d_21=0
4011-Section11.js:1145 [S11] 🎯 TGT CLIMATE READ: d_20=7100
4011-Section11.js:1149 [S11] 🎯 TGT CLIMATE READ: d_21=0
4011-Section11.js:1145 [S11] 🎯 TGT CLIMATE READ: d_20=7100
4011-Section11.js:1149 [S11] 🎯 TGT CLIMATE READ: d_21=0
4011-Section11.js:1145 [S11] 🎯 TGT CLIMATE READ: d_20=7100
4011-Section11.js:1149 [S11] 🎯 TGT CLIMATE READ: d_21=0
24011-Section11.js:1189 [S11] 🎯 TGT CLIMATE READ: h_22=-1680
4011-Section11.js:1687 [S11] calculateAll TRIGGERED. isReferenceMode: false
4011-Section11.js:1132 [S11] 🔵 REF CLIMATE READ: d_20=4600
4011-Section11.js:1136 [S11] 🔵 REF CLIMATE READ: d_21=196
4011-Section11.js:1132 [S11] 🔵 REF CLIMATE READ: d_20=4600
4011-Section11.js:1136 [S11] 🔵 REF CLIMATE READ: d_21=196
4011-Section11.js:1132 [S11] 🔵 REF CLIMATE READ: d_20=4600
4011-Section11.js:1136 [S11] 🔵 REF CLIMATE READ: d_21=196
4011-Section11.js:1132 [S11] 🔵 REF CLIMATE READ: d_20=4600
4011-Section11.js:1136 [S11] 🔵 REF CLIMATE READ: d_21=196
4011-Section11.js:1132 [S11] 🔵 REF CLIMATE READ: d_20=4600
4011-Section11.js:1136 [S11] 🔵 REF CLIMATE READ: d_21=196
4011-Section11.js:1132 [S11] 🔵 REF CLIMATE READ: d_20=4600
4011-Section11.js:1136 [S11] 🔵 REF CLIMATE READ: d_21=196
4011-Section11.js:1132 [S11] 🔵 REF CLIMATE READ: d_20=4600
4011-Section11.js:1136 [S11] 🔵 REF CLIMATE READ: d_21=196
4011-Section11.js:1132 [S11] 🔵 REF CLIMATE READ: d_20=4600
4011-Section11.js:1136 [S11] 🔵 REF CLIMATE READ: d_21=196
4011-Section11.js:1132 [S11] 🔵 REF CLIMATE READ: d_20=4600
4011-Section11.js:1136 [S11] 🔵 REF CLIMATE READ: d_21=196
4011-Section11.js:1166 [S11] 🔵 REF CLIMATE READ: d_22=1960
4011-Section11.js:1184 [S11] 🔵 REF CLIMATE READ: h_22=-1680
4011-Section11.js:1166 [S11] 🔵 REF CLIMATE READ: d_22=1960
4011-Section11.js:1184 [S11] 🔵 REF CLIMATE READ: h_22=-1680
4011-Section11.js:1256 [S11] REF TB%=50% → ref_i_97=59532.29, ref_k_97=-947.70
4011-Section11.js:1434 [S11] Writing ref penalty: ref_i_97=59532.29, ref_k_97=-947.70
4011-Section11.js:1145 [S11] 🎯 TGT CLIMATE READ: d_20=7100
4011-Section11.js:1149 [S11] 🎯 TGT CLIMATE READ: d_21=0
4011-Section11.js:1145 [S11] 🎯 TGT CLIMATE READ: d_20=7100
4011-Section11.js:1149 [S11] 🎯 TGT CLIMATE READ: d_21=0
4011-Section11.js:1145 [S11] 🎯 TGT CLIMATE READ: d_20=7100
4011-Section11.js:1149 [S11] 🎯 TGT CLIMATE READ: d_21=0
4011-Section11.js:1145 [S11] 🎯 TGT CLIMATE READ: d_20=7100
4011-Section11.js:1149 [S11] 🎯 TGT CLIMATE READ: d_21=0
4011-Section11.js:1145 [S11] 🎯 TGT CLIMATE READ: d_20=7100
4011-Section11.js:1149 [S11] 🎯 TGT CLIMATE READ: d_21=0
4011-Section11.js:1145 [S11] 🎯 TGT CLIMATE READ: d_20=7100
4011-Section11.js:1149 [S11] 🎯 TGT CLIMATE READ: d_21=0
4011-Section11.js:1145 [S11] 🎯 TGT CLIMATE READ: d_20=7100
4011-Section11.js:1149 [S11] 🎯 TGT CLIMATE READ: d_21=0
4011-Section11.js:1145 [S11] 🎯 TGT CLIMATE READ: d_20=7100
4011-Section11.js:1149 [S11] 🎯 TGT CLIMATE READ: d_21=0
4011-Section11.js:1145 [S11] 🎯 TGT CLIMATE READ: d_20=7100
4011-Section11.js:1149 [S11] 🎯 TGT CLIMATE READ: d_21=0
24011-Section11.js:1189 [S11] 🎯 TGT CLIMATE READ: h_22=-1680
4011-Section13.js:2813 [S13DEBUG] Reference GF HDD changed: ref_d_22=1960 → triggering Reference calculations
4011-Section13.js:3389 [Section13] 🚀 CALCULATEALL TRIGGERED - Running dual-engine calculations...
4011-Section13.js:3395 [Section13] 🎯 Mode captured at calculation start: target
4011-Section13.js:3401 [Section13] 🔄 Starting Reference Model calculations...
4011-Section13.js:721 🔍 [S13-CONTEXT] Creating reference context: g_118="Volume Constant" from ReferenceState
4011-Section13.js:723 🔍 [S13-CONTEXT] ReferenceState.g_118="Volume Constant", TargetState.g_118="Volume by Schedule"
4011-Section13.js:3457 [Section13] Running Reference Model calculations...
4011-Section13.js:3471 [S13 CONTAMINATION DEBUG] calculateReferenceModel: Using system type = Electricity
4011-Section13.js:2873 [S13] REF HEATING: system=Electricity, ted=297371.1974742337, afue=0.9, cop=1
4011-Section13.js:2879 [S13 REF DEBUG] About to calculate with heating system: Electricity
4011-Section13.js:2882 [S13 REF DEBUG] Will S13 publish ref_d_113=Electricity?
4011-Section13.js:3099 🔍 [S13-VENT] calculateVentilationRates: ventMethod="Volume Constant", ach(l_118)=3.5, ratePerPerson(d_119)=8.33, volume(d_105)=8000
4011-Section13.js:3102 🔍 [S13-VENT] isReferenceCalculation=true, hasContext=true
4011-Section13.js:3110 🔍 [S13-VENT] calculateVentilationValues: ventMethod="Volume Constant", ach(l_118)=3.5, ratePerPerson(d_119)=8.33, volume(d_105)=8000
4011-Section13.js:3113 🔍 [S13-VENT] Supporting values: occupants(d_63)=126, occupiedHours(i_63)=4380, totalHours(j_63)=8760
4011-Section13.js:3133 🔍 [S13-VENT] Volume Constant calculation: ventRateLs = (3.5 * 8000) / 3.6 = 7777.777777777777
4011-Section13.js:3145 ✅ [S13-VENT] Final d_120 result: 7777.777777777777 L/s (from method="Volume Constant", ach=3.5, volume=8000)
4011-Section13.js:2977 [Section13] 🧊 COOLING CALC: mode=REF, coolingSystemType="No Cooling", heatingType="Electricity", isCoolingActive=false, coolingDemand=6020.32656805405
4011-Section13.js:3737 [S13 CONTAMINATION DEBUG] storeReferenceResults called during reference mode
4011-Section13.js:3740 [S13 CONTAMINATION DEBUG] Reference heating system: Electricity
4011-Section13.js:3743 [S13 CONTAMINATION DEBUG] Target heating system: Heatpump
4011-Section13.js:3746 [S13 CONTAMINATION DEBUG] Reference h_115 (gas volume): 0
4011-Section13.js:3749 [S13 CONTAMINATION DEBUG] Reference f_115 (oil volume): 0
4011-Section13.js:3761 [S13 CONTAMINATION DEBUG] Writing ref_f_115 = 0
4011-Section13.js:3761 [S13 CONTAMINATION DEBUG] Writing ref_h_115 = 0
4011-Section13.js:3773 [Section13] Reference results stored with ref_ prefix for downstream sections
4011-Section13.js:3776 [S13 DEBUG] Total Reference results stored: 34
4011-Section13.js:3515 [Section13] Reference Model calculations complete
4011-Section13.js:3403 [Section13] ✅ Reference Model complete
4011-Section13.js:3405 [Section13] 🔄 Starting Target Model calculations...
4011-Section13.js:721 🔍 [S13-CONTEXT] Creating target context: g_118="Volume by Schedule" from TargetState
4011-Section13.js:725 🔍 [S13-CONTEXT] TargetState.g_118="Volume by Schedule", ReferenceState.g_118="Volume Constant"
4011-Section13.js:3536 [Section13] Running Target Model calculations...
4011-Section13.js:2873 [S13] TGT HEATING: system=Heatpump, ted=188752.50983613706, afue=0.98, cop=3.663540445486518
4011-Section13.js:3099 🔍 [S13-VENT] calculateVentilationRates: ventMethod="Volume by Schedule", ach(l_118)=3, ratePerPerson(d_119)=14, volume(d_105)=8000
4011-Section13.js:3102 🔍 [S13-VENT] isReferenceCalculation=false, hasContext=true
4011-Section13.js:3110 🔍 [S13-VENT] calculateVentilationValues: ventMethod="Volume by Schedule", ach(l_118)=3, ratePerPerson(d_119)=14, volume(d_105)=8000
4011-Section13.js:3113 🔍 [S13-VENT] Supporting values: occupants(d_63)=126, occupiedHours(i_63)=4380, totalHours(j_63)=8760
4011-Section13.js:3145 ✅ [S13-VENT] Final d_120 result: 3333.333333333333 L/s (from method="Volume by Schedule", ach=3, volume=8000)
4011-Section13.js:2977 [Section13] 🧊 COOLING CALC: mode=TGT, coolingSystemType="Cooling", heatingType="Heatpump", isCoolingActive=true, coolingDemand=6020.32656805405
4011-Section13.js:3039 [Section13] 🧊 COOLING RESULTS: d_117=2260.272254643532, j_116=2.663540445486518, l_116=0, l_114=3760.0543134105183
4011-Section13.js:3591 [Section13] Target Model calculations complete
4011-Section13.js:3407 [Section13] ✅ Target Model complete
4011-Section13.js:3434 [Section13] ⏭️ Skipping Reference value re-write - triggered in target mode
4011-Section13.js:3440 [Section13] 🎉 DUAL-ENGINE CALCULATIONS COMPLETE
4011-Section11.js:1687 [S11] calculateAll TRIGGERED. isReferenceMode: false
4011-Section11.js:1132 [S11] 🔵 REF CLIMATE READ: d_20=4600
4011-Section11.js:1136 [S11] 🔵 REF CLIMATE READ: d_21=196
4011-Section11.js:1132 [S11] 🔵 REF CLIMATE READ: d_20=4600
4011-Section11.js:1136 [S11] 🔵 REF CLIMATE READ: d_21=196
4011-Section11.js:1132 [S11] 🔵 REF CLIMATE READ: d_20=4600
4011-Section11.js:1136 [S11] 🔵 REF CLIMATE READ: d_21=196
4011-Section11.js:1132 [S11] 🔵 REF CLIMATE READ: d_20=4600
4011-Section11.js:1136 [S11] 🔵 REF CLIMATE READ: d_21=196
4011-Section11.js:1132 [S11] 🔵 REF CLIMATE READ: d_20=4600
4011-Section11.js:1136 [S11] 🔵 REF CLIMATE READ: d_21=196
4011-Section11.js:1132 [S11] 🔵 REF CLIMATE READ: d_20=4600
4011-Section11.js:1136 [S11] 🔵 REF CLIMATE READ: d_21=196
4011-Section11.js:1132 [S11] 🔵 REF CLIMATE READ: d_20=4600
4011-Section11.js:1136 [S11] 🔵 REF CLIMATE READ: d_21=196
4011-Section11.js:1132 [S11] 🔵 REF CLIMATE READ: d_20=4600
4011-Section11.js:1136 [S11] 🔵 REF CLIMATE READ: d_21=196
4011-Section11.js:1132 [S11] 🔵 REF CLIMATE READ: d_20=4600
4011-Section11.js:1136 [S11] 🔵 REF CLIMATE READ: d_21=196
4011-Section11.js:1166 [S11] 🔵 REF CLIMATE READ: d_22=1960
4011-Section11.js:1184 [S11] 🔵 REF CLIMATE READ: h_22=-1680
4011-Section11.js:1166 [S11] 🔵 REF CLIMATE READ: d_22=1960
4011-Section11.js:1184 [S11] 🔵 REF CLIMATE READ: h_22=-1680
4011-Section11.js:1256 [S11] REF TB%=50% → ref_i_97=59532.29, ref_k_97=-947.70
4011-Section11.js:1434 [S11] Writing ref penalty: ref_i_97=59532.29, ref_k_97=-947.70
4011-Section11.js:1145 [S11] 🎯 TGT CLIMATE READ: d_20=7100
4011-Section11.js:1149 [S11] 🎯 TGT CLIMATE READ: d_21=0
4011-Section11.js:1145 [S11] 🎯 TGT CLIMATE READ: d_20=7100
4011-Section11.js:1149 [S11] 🎯 TGT CLIMATE READ: d_21=0
4011-Section11.js:1145 [S11] 🎯 TGT CLIMATE READ: d_20=7100
4011-Section11.js:1149 [S11] 🎯 TGT CLIMATE READ: d_21=0
4011-Section11.js:1145 [S11] 🎯 TGT CLIMATE READ: d_20=7100
4011-Section11.js:1149 [S11] 🎯 TGT CLIMATE READ: d_21=0
4011-Section11.js:1145 [S11] 🎯 TGT CLIMATE READ: d_20=7100
4011-Section11.js:1149 [S11] 🎯 TGT CLIMATE READ: d_21=0
4011-Section11.js:1145 [S11] 🎯 TGT CLIMATE READ: d_20=7100
4011-Section11.js:1149 [S11] 🎯 TGT CLIMATE READ: d_21=0
4011-Section11.js:1145 [S11] 🎯 TGT CLIMATE READ: d_20=7100
4011-Section11.js:1149 [S11] 🎯 TGT CLIMATE READ: d_21=0
4011-Section11.js:1145 [S11] 🎯 TGT CLIMATE READ: d_20=7100
4011-Section11.js:1149 [S11] 🎯 TGT CLIMATE READ: d_21=0
4011-Section11.js:1145 [S11] 🎯 TGT CLIMATE READ: d_20=7100
4011-Section11.js:1149 [S11] 🎯 TGT CLIMATE READ: d_21=0
24011-Section11.js:1189 [S11] 🎯 TGT CLIMATE READ: h_22=-1680
4011-Section11.js:1687 [S11] calculateAll TRIGGERED. isReferenceMode: false
4011-Section11.js:1132 [S11] 🔵 REF CLIMATE READ: d_20=4600
4011-Section11.js:1136 [S11] 🔵 REF CLIMATE READ: d_21=196
4011-Section11.js:1132 [S11] 🔵 REF CLIMATE READ: d_20=4600
4011-Section11.js:1136 [S11] 🔵 REF CLIMATE READ: d_21=196
4011-Section11.js:1132 [S11] 🔵 REF CLIMATE READ: d_20=4600
4011-Section11.js:1136 [S11] 🔵 REF CLIMATE READ: d_21=196
4011-Section11.js:1132 [S11] 🔵 REF CLIMATE READ: d_20=4600
4011-Section11.js:1136 [S11] 🔵 REF CLIMATE READ: d_21=196
4011-Section11.js:1132 [S11] 🔵 REF CLIMATE READ: d_20=4600
4011-Section11.js:1136 [S11] 🔵 REF CLIMATE READ: d_21=196
4011-Section11.js:1132 [S11] 🔵 REF CLIMATE READ: d_20=4600
4011-Section11.js:1136 [S11] 🔵 REF CLIMATE READ: d_21=196
4011-Section11.js:1132 [S11] 🔵 REF CLIMATE READ: d_20=4600
4011-Section11.js:1136 [S11] 🔵 REF CLIMATE READ: d_21=196
4011-Section11.js:1132 [S11] 🔵 REF CLIMATE READ: d_20=4600
4011-Section11.js:1136 [S11] 🔵 REF CLIMATE READ: d_21=196
4011-Section11.js:1132 [S11] 🔵 REF CLIMATE READ: d_20=4600
4011-Section11.js:1136 [S11] 🔵 REF CLIMATE READ: d_21=196
4011-Section11.js:1166 [S11] 🔵 REF CLIMATE READ: d_22=1960
4011-Section11.js:1184 [S11] 🔵 REF CLIMATE READ: h_22=-1680
4011-Section11.js:1166 [S11] 🔵 REF CLIMATE READ: d_22=1960
4011-Section11.js:1184 [S11] 🔵 REF CLIMATE READ: h_22=-1680
4011-Section11.js:1256 [S11] REF TB%=50% → ref_i_97=59532.29, ref_k_97=-947.70
4011-Section11.js:1434 [S11] Writing ref penalty: ref_i_97=59532.29, ref_k_97=-947.70
4011-Section11.js:1145 [S11] 🎯 TGT CLIMATE READ: d_20=7100
4011-Section11.js:1149 [S11] 🎯 TGT CLIMATE READ: d_21=0
4011-Section11.js:1145 [S11] 🎯 TGT CLIMATE READ: d_20=7100
4011-Section11.js:1149 [S11] 🎯 TGT CLIMATE READ: d_21=0
4011-Section11.js:1145 [S11] 🎯 TGT CLIMATE READ: d_20=7100
4011-Section11.js:1149 [S11] 🎯 TGT CLIMATE READ: d_21=0
4011-Section11.js:1145 [S11] 🎯 TGT CLIMATE READ: d_20=7100
4011-Section11.js:1149 [S11] 🎯 TGT CLIMATE READ: d_21=0
4011-Section11.js:1145 [S11] 🎯 TGT CLIMATE READ: d_20=7100
4011-Section11.js:1149 [S11] 🎯 TGT CLIMATE READ: d_21=0
4011-Section11.js:1145 [S11] 🎯 TGT CLIMATE READ: d_20=7100
4011-Section11.js:1149 [S11] 🎯 TGT CLIMATE READ: d_21=0
4011-Section11.js:1145 [S11] 🎯 TGT CLIMATE READ: d_20=7100
4011-Section11.js:1149 [S11] 🎯 TGT CLIMATE READ: d_21=0
4011-Section11.js:1145 [S11] 🎯 TGT CLIMATE READ: d_20=7100
4011-Section11.js:1149 [S11] 🎯 TGT CLIMATE READ: d_21=0
4011-Section11.js:1145 [S11] 🎯 TGT CLIMATE READ: d_20=7100
4011-Section11.js:1149 [S11] 🎯 TGT CLIMATE READ: d_21=0
24011-Section11.js:1189 [S11] 🎯 TGT CLIMATE READ: h_22=-1680
4011-Section13.js:2819 [S13DEBUG] Reference GF CDD changed: ref_h_22=-1680 → triggering Reference calculations
4011-Section13.js:3389 [Section13] 🚀 CALCULATEALL TRIGGERED - Running dual-engine calculations...
4011-Section13.js:3395 [Section13] 🎯 Mode captured at calculation start: target
4011-Section13.js:3401 [Section13] 🔄 Starting Reference Model calculations...
4011-Section13.js:721 🔍 [S13-CONTEXT] Creating reference context: g_118="Volume Constant" from ReferenceState
4011-Section13.js:723 🔍 [S13-CONTEXT] ReferenceState.g_118="Volume Constant", TargetState.g_118="Volume by Schedule"
4011-Section13.js:3457 [Section13] Running Reference Model calculations...
4011-Section13.js:3471 [S13 CONTAMINATION DEBUG] calculateReferenceModel: Using system type = Electricity
4011-Section13.js:2873 [S13] REF HEATING: system=Electricity, ted=297371.1974742337, afue=0.9, cop=1
4011-Section13.js:2879 [S13 REF DEBUG] About to calculate with heating system: Electricity
4011-Section13.js:2882 [S13 REF DEBUG] Will S13 publish ref_d_113=Electricity?
4011-Section13.js:3099 🔍 [S13-VENT] calculateVentilationRates: ventMethod="Volume Constant", ach(l_118)=3.5, ratePerPerson(d_119)=8.33, volume(d_105)=8000
4011-Section13.js:3102 🔍 [S13-VENT] isReferenceCalculation=true, hasContext=true
4011-Section13.js:3110 🔍 [S13-VENT] calculateVentilationValues: ventMethod="Volume Constant", ach(l_118)=3.5, ratePerPerson(d_119)=8.33, volume(d_105)=8000
4011-Section13.js:3113 🔍 [S13-VENT] Supporting values: occupants(d_63)=126, occupiedHours(i_63)=4380, totalHours(j_63)=8760
4011-Section13.js:3133 🔍 [S13-VENT] Volume Constant calculation: ventRateLs = (3.5 * 8000) / 3.6 = 7777.777777777777
4011-Section13.js:3145 ✅ [S13-VENT] Final d_120 result: 7777.777777777777 L/s (from method="Volume Constant", ach=3.5, volume=8000)
4011-Section13.js:2977 [Section13] 🧊 COOLING CALC: mode=REF, coolingSystemType="No Cooling", heatingType="Electricity", isCoolingActive=false, coolingDemand=6020.32656805405
4011-Section13.js:3737 [S13 CONTAMINATION DEBUG] storeReferenceResults called during reference mode
4011-Section13.js:3740 [S13 CONTAMINATION DEBUG] Reference heating system: Electricity
4011-Section13.js:3743 [S13 CONTAMINATION DEBUG] Target heating system: Heatpump
4011-Section13.js:3746 [S13 CONTAMINATION DEBUG] Reference h_115 (gas volume): 0
4011-Section13.js:3749 [S13 CONTAMINATION DEBUG] Reference f_115 (oil volume): 0
4011-Section13.js:3761 [S13 CONTAMINATION DEBUG] Writing ref_f_115 = 0
4011-Section13.js:3761 [S13 CONTAMINATION DEBUG] Writing ref_h_115 = 0
4011-Section13.js:3773 [Section13] Reference results stored with ref_ prefix for downstream sections
4011-Section13.js:3776 [S13 DEBUG] Total Reference results stored: 34
4011-Section13.js:3515 [Section13] Reference Model calculations complete
4011-Section13.js:3403 [Section13] ✅ Reference Model complete
4011-Section13.js:3405 [Section13] 🔄 Starting Target Model calculations...
4011-Section13.js:721 🔍 [S13-CONTEXT] Creating target context: g_118="Volume by Schedule" from TargetState
4011-Section13.js:725 🔍 [S13-CONTEXT] TargetState.g_118="Volume by Schedule", ReferenceState.g_118="Volume Constant"
4011-Section13.js:3536 [Section13] Running Target Model calculations...
4011-Section13.js:2873 [S13] TGT HEATING: system=Heatpump, ted=188752.50983613706, afue=0.98, cop=3.663540445486518
4011-Section13.js:3099 🔍 [S13-VENT] calculateVentilationRates: ventMethod="Volume by Schedule", ach(l_118)=3, ratePerPerson(d_119)=14, volume(d_105)=8000
4011-Section13.js:3102 🔍 [S13-VENT] isReferenceCalculation=false, hasContext=true
4011-Section13.js:3110 🔍 [S13-VENT] calculateVentilationValues: ventMethod="Volume by Schedule", ach(l_118)=3, ratePerPerson(d_119)=14, volume(d_105)=8000
4011-Section13.js:3113 🔍 [S13-VENT] Supporting values: occupants(d_63)=126, occupiedHours(i_63)=4380, totalHours(j_63)=8760
4011-Section13.js:3145 ✅ [S13-VENT] Final d_120 result: 3333.333333333333 L/s (from method="Volume by Schedule", ach=3, volume=8000)
4011-Section13.js:2977 [Section13] 🧊 COOLING CALC: mode=TGT, coolingSystemType="Cooling", heatingType="Heatpump", isCoolingActive=true, coolingDemand=6020.32656805405
4011-Section13.js:3039 [Section13] 🧊 COOLING RESULTS: d_117=2260.272254643532, j_116=2.663540445486518, l_116=0, l_114=3760.0543134105183
4011-Section13.js:3591 [Section13] Target Model calculations complete
4011-Section13.js:3407 [Section13] ✅ Target Model complete
4011-Section13.js:3434 [Section13] ⏭️ Skipping Reference value re-write - triggered in target mode
4011-Section13.js:3440 [Section13] 🎉 DUAL-ENGINE CALCULATIONS COMPLETE
4011-Section01.js:1153 [S01DB] upstream snapshot {ref_j_32: 347966.051518286, ref_k_32: 17746.268627432586, j_32: 151000.6373395155, k_32: 7701.032504315291, ref_h_15: '1427.20', …}
4011-Section01.js:706 🔍 [S01DB] updateTEUIDisplay START: e_10=341.2, h_10=105.80201607309101, useType=Utility Bills
4011-Section01.js:776 🔍 [S01] T.1 Calculation: e_6=25.4 (ref), h_6=12.3 (target) → reduction should be 52%
4011-Section01.js:866 🔍 [S01DB] UPDATING h_10: 105.8 (from j_32=151000.6373395155, area=1427.2)
4011-Section01.js:483 🔍 [S01] h_6 explanation: target=12.3, ref=25.4, reduction=0.515748031496063, percent=52%
4011-Clock.js:65 🕐 [CLOCK] ⚡ CALCULATION COMPLETE: 97ms (subsequent update)
4011-Clock.js:161 🕐 [CLOCK] ⚡ USER INTERACTION COMPLETE: 97ms (interaction → h_10 settlement)
4011-Section01.js:1171 ✅ [S01] CALCULATION CHAIN COMPLETE - All values finalized including h_10